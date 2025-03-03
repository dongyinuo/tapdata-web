<template>
  <section class="verify-details-wrap section-wrap h-100" v-loading="loading">
    <div class="section-wrap-box">
      <div class="verify-details-header" v-if="inspect">
        <div class="flex align-center">
          <span style="font-size: 14px">{{ inspect.name }}</span>
          <ElTag type="info" class="ml-3">{{ typeMap[type] }}</ElTag>
          <ElDivider class="mx-3" direction="vertical" />
          <ElRadioGroup v-model="resultFilter">
            <ElRadioButton label="">{{ $t('public_all') }}</ElRadioButton>
            <ElRadioButton label="passed">{{ $t('packages_business_verification_consistent') }}</ElRadioButton>
            <ElRadioButton label="failed">{{ $t('packages_business_verification_inconsistent') }}</ElRadioButton>
          </ElRadioGroup>
        </div>
        <div v-if="inspect.inspectMethod !== 'row_count'">
          <div class="flex align-items-center">
            <div v-if="resultInfo.parentId" class="color-info flex align-items-center" style="font-size: 12px">
              {{ $t('packages_business_verification_last_start_time') }}: {{ inspect.lastStartTimeFmt }}
              <ElLink class="ml-5" type="primary" @click="toDiffHistory">{{
                $t('packages_business_verification_button_diff_task_history')
              }}</ElLink>
            </div>
            <div
              v-if="
                inspect.result !== 'passed' &&
                !['running', 'scheduling'].includes(inspect.status) &&
                !(inspect.status === 'error' && !resultInfo.parentId)
              "
              class="flex align-items-center ml-4"
            >
              <ElButton type="primary" @click="diffInspect">{{
                $t('packages_business_verification_button_diff_verify')
              }}</ElButton>
              <ElTooltip effect="dark" placement="top">
                <div slot="content" style="width: 232px">
                  {{ $t('packages_business_verification_button_diff_verify_tips') }}
                </div>
                <VIcon class="ml-2 color-info" size="14">warning-circle</VIcon>
              </ElTooltip>
            </div>
          </div>
        </div>
      </div>
      <div v-if="errorMsg && (type === 'row_count' || type === 'hash')" class="error-tips mt-4 px-4">
        <VIcon class="color-danger">error</VIcon>
        <span class="mx-2 text-break" :class="{ ellipsis: !expandErrorMessage }" style="flex: 1">{{ errorMsg }}</span>
        <span>
          <ElLink type="danger" @click="expandErrorMessage = !expandErrorMessage">{{
            expandErrorMessage ? $t('packages_business_verification_details_shouqi') : $t('public_button_expand')
          }}</ElLink>
          <VIcon class="ml-2 color-info" size="12" @click="errorMsg = ''">close</VIcon>
        </span>
      </div>
      <!--        v-loading="['running', 'scheduling'].includes(inspect.status)"-->
      <div
        class="result-table mt-4"
        v-if="inspect"
        :element-loading-text="$t('packages_business_verification_checking')"
      >
        <!--        <template v-if="!['running', 'scheduling'].includes(inspect.status)">-->
        <ResultTable ref="singleTable" :type="type" :data="tableData" @row-click="rowClick"></ResultTable>
        <ResultView
          v-if="type !== 'row_count' && type !== 'hash'"
          ref="resultView"
          :remoteMethod="getResultData"
        ></ResultView>
        <!--        </template>-->
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.verify-details-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .section-wrap-box {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex: 1;
    flex: 1;
    padding: 20px;
    border-radius: 4px;
    background-color: #fff;
    box-sizing: border-box;
    overflow: hidden;
  }
}
.verify-details-header {
  display: flex;
  justify-content: space-between;
}
.error-tips {
  padding: 6px 0;
  display: flex;
  justify-content: space-between;
  background: rgba(219, 80, 80, 0.07);
  border-radius: 4px;
  border: 1px solid #db5050;
}
.result-table {
  flex: 1;
  display: flex;
  overflow: auto;
}
</style>
<script>
import i18n from '@tap/i18n'

import ResultTable from './ResultTable'
import ResultView from './ResultView'
import dayjs from 'dayjs'
import { inspectDetailsApi, inspectResultsApi, inspectApi } from '@tap/api'
import { inspectMethod as typeMap } from './const'

export default {
  components: { ResultTable, ResultView },
  data() {
    return {
      loading: false,
      typeMap,
      inspect: {},
      resultInfo: {},
      errorMsg: '',
      taskId: null,
      expandErrorMessage: false,
      resultFilter: ''
    }
  },
  computed: {
    type() {
      return this.inspect?.inspectMethod || ''
    },
    tableData() {
      const data = this.resultInfo.stats || []
      if (!this.resultFilter) {
        return data
      }
      return data.filter(item => item.result === this.resultFilter)
    },
    verifyType() {
      return this.resultInfo?.inspect?.inspectMethod
    }
  },
  created() {
    this.getData()
    setInterval(() => {
      if (['running', 'scheduling'].includes(this.inspect?.status)) {
        this.getData(false)
      }
    }, 10000)
  },
  methods: {
    getData(showLoading = true) {
      if (showLoading) {
        this.loading = true
      }
      inspectApi
        .get({
          filter: JSON.stringify({
            where: {
              id: this.$route.params.id
            }
          })
        })
        .then(data => {
          let inspect = data?.items?.[0] || {}
          let inspectResult = inspect.InspectResult
          inspect.lastStartTime = dayjs(inspect.lastStartTime).format('YYYY-MM-DD HH:mm:ss')
          this.inspect = inspect
          inspectResultsApi
            .get({
              filter: JSON.stringify({
                where: {
                  id: inspectResult.id
                }
              })
            })
            .then(data => {
              let result = data?.items?.[0]
              if (result) {
                this.resultInfo = result
                let stats = result.stats
                if (stats.length) {
                  this.errorMsg = result.status === 'error' ? result.errorMsg : undefined
                  if (!this.taskId) {
                    this.taskId = stats[0].taskId
                  }
                  this.$nextTick(() => {
                    this.$refs.resultView?.fetch(1)
                    if (this.type !== 'row_count' && showLoading && this.type !== 'hash') {
                      this.$refs.singleTable?.setCurrentRow(stats[0])
                    }
                    if (this.taskId) {
                      this.$refs.singleTable?.setCurrentRow(stats.find(t => t.taskId === this.taskId))
                    }
                  })
                }
              }
            })
            .finally(() => {
              this.loading = false
            })
        })
    },
    getResultData({ current, size }) {
      let taskId = this.taskId
      let task = this.inspect.tasks?.find(item => item.taskId === taskId)
      if (task) {
        let showAdvancedVerification = task.showAdvancedVerification
        const sourceSortColumn = task.source?.sortColumn?.split(',')
        const targetSortColumn = task.target?.sortColumn?.split(',')
        const inspectMethod = this.inspect.inspectMethod
        let statsInfo = this.tableData.find(item => item.taskId === this.taskId)
        let where = {
          taskId,
          inspect_id: this.inspect.id,
          inspectResultId: this.resultInfo.id
        }
        let filter = {
          where,
          order: 'createTime DESC',
          limit: showAdvancedVerification ? 1 : size,
          skip: (current - 1) * (showAdvancedVerification ? 1 : size)
        }
        return inspectDetailsApi
          .get({
            filter: JSON.stringify(filter)
          })
          .then(data => {
            let resultList = []
            if (data?.items) {
              if (showAdvancedVerification) {
                resultList = data.items || []
              } else {
                resultList = this.handleOtherVerify(data.items)
              }
            }
            return {
              showAdvancedVerification, // 是否高级校验
              total: data.total, // 总条数
              statsInfo, // 结果信息
              resultList, // 结果详情
              sourceSortColumn, // 源索引字段
              targetSortColumn, // 目标索引字段
              inspectMethod
            }
          })
      }
      return Promise.reject()
    },
    diffInspect() {
      let firstCheckId = this.resultInfo.firstCheckId
      if (!firstCheckId) {
        return this.$message.error(this.$t('packages_business_verification_message_old_data_not_support'))
      }
      // let inspect = this.inspect
      // let keep = inspect?.limit?.keep || 0
      // let totalFailed = inspect?.difference_number || 0
      // if (keep < totalFailed) {
      //   this.$message.warning(this.$t('packages_business_verification_message_out_of_limit'))
      // }
      inspectApi
        .update(
          {
            id: this.inspect.id
          },
          { status: 'scheduling', ping_time: 0, scheduleTimes: 0, byFirstCheckId: firstCheckId }
        )
        .then(() => {
          this.$message.success(this.$t('packages_business_verification_startVerify'))
          this.getData()
        })
    },
    rowClick(row) {
      this.taskId = row.taskId
      this.$refs.resultView?.fetch(1)
    },
    handleOtherVerify(data) {
      if (data.length === 0) {
        return
      }
      const findOne = this.tableData.find(t => t.taskId === this.taskId)
      const sourceColumns = findOne.source?.columns || []
      const targetColumns = findOne.target?.columns || []
      data.map(item => {
        let source = item.source || {}
        let target = item.target || {}
        let sourceKeys = Object.keys(source)
        let targetKeys = Object.keys(target)
        let key = Array.from(new Set([...sourceKeys, ...targetKeys])) //找出所有的key的并集
        let message = item.message || ''
        let diffFields = []
        let diffFiledIndexs = []
        if (message.includes('Different fields')) {
          diffFields = message.split(':')[1].split(',')
        } else if (message.includes('Different index')) {
          diffFiledIndexs = message.split(':')[1].split(',')
        }
        if (diffFiledIndexs.length) {
          this.handleLoadIndexField(item, diffFiledIndexs, sourceColumns, targetColumns)
        } else {
          key.forEach(i => {
            let sourceValue = ''
            let targetValue = ''
            if (sourceKeys.filter(v => i === v)) {
              sourceValue = source[i]
            } else {
              sourceValue = ''
            }
            if (targetKeys.filter(v => i === v)) {
              targetValue = target[i]
            } else {
              targetValue = ''
            }
            let isDiff = diffFields.length ? diffFields.includes(i) : sourceValue !== targetValue
            let node = {
              type: item.type,
              red: isDiff,
              source: {
                key: i,
                value: sourceValue
              },
              target: {
                key: i,
                value: targetValue
              }
            }
            item['details'] = item['details'] || []
            item['details'].push(node)
          })
        }
      })
      return data
    },
    toDiffHistory() {
      let url = ''
      let route = this.$router.resolve({
        name: 'VerifyDiffHistory',
        params: {
          id: this.resultInfo.firstCheckId
        }
      })
      url = route.href
      window.open(url, '_blank')
    },
    handleLoadIndexField(item, indexArr, sourceColumns, targetColumns) {
      sourceColumns.forEach((el, i) => {
        let node = {
          type: item.type,
          red: indexArr.includes(i + ''),
          source: {
            key: el,
            value: item.source[el]
          },
          target: {
            key: targetColumns[i],
            value: item.target[targetColumns[i]]
          }
        }
        item['details'] = item['details'] || []
        item['details'].push(node)
      })
    }
  }
}
</script>
