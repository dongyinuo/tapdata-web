<template>
  <el-table
    highlight-current-row
    ref="table"
    height="100%"
    :data="list"
    :element-loading-text="$t('packages_business_dataFlow_dataLoading')"
    @row-click="rowClickHandler"
  >
    <ElTableColumn :label="$t('packages_business_verification_sourceTable')">
      <template slot-scope="scope">
        <span>{{ scope.row.source ? scope.row.source.table : '' }}</span>
        <div class="font-color-slight">
          {{ scope.row.source ? scope.row.source.connectionName : '' }}
        </div>
      </template>
    </ElTableColumn>
    <ElTableColumn :label="$t('packages_business_verification_targetTable')">
      <template slot-scope="scope">
        <span>{{ scope.row.target ? scope.row.target.table : 0 }}</span>
        <div class="font-color-slight">
          {{ scope.row.target ? scope.row.target.connectionName : 0 }}
        </div>
      </template>
    </ElTableColumn>
    <ElTableColumn :label="$t('packages_business_verification_sourceRows')">
      <template #default="{ row }">
        <span>{{ type === 'hash' ? '-' : row.source_total || 0 }}</span>
      </template>
    </ElTableColumn>
    <ElTableColumn prop="progress" :label="$t('packages_business_verification_verifyProgress')" width="120px">
      <template slot-scope="scope">
        <div>
          <span>{{ `${scope.row.progress ? Math.floor(scope.row.progress * 100) : 0}%` }}</span>
        </div>
      </template>
    </ElTableColumn>
    <ElTableColumn prop="status" :label="$t('packages_business_verification_result_title')">
      <template slot-scope="scope" v-if="['waiting', 'done'].includes(scope.row.status)">
        <div class="inspect-result-status">
          <template v-if="scope.row.result === 'failed'">
            <div v-if="type === 'hash'">
              <span class="error">
                <i class="verify-icon el-icon-error color-danger"></i>
                <span>{{ $t('packages_business_verification_inconsistent') }}</span>
              </span>
            </div>
            <template v-else>
              <div v-if="scope.row.countResultText">
                <span class="error">
                  <i class="verify-icon el-icon-error color-danger"></i>
                  <span>{{ scope.row.countResultText }}</span>
                </span>
              </div>
              <div v-if="scope.row.contentResultText">
                <span class="error">
                  <i class="verify-icon el-icon-error color-danger"></i>
                  <span>{{ scope.row.contentResultText }}</span>
                </span>
              </div>
            </template>
          </template>
          <span class="success" v-if="scope.row.result === 'passed'">
            <i class="verify-icon el-icon-success color-success"></i>
            <span>{{ $t('packages_business_verification_consistent') }}</span>
          </span>
        </div>
      </template>
    </ElTableColumn>
  </el-table>
</template>
<style lang="scss" scoped>
.verify-icon {
  margin: 0 4px;
  font-size: 14;
}
</style>
<script>
export default {
  props: {
    type: String,
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      current: 0
    }
  },
  computed: {
    list() {
      let list = this.data.map(item => {
        if (item.result === 'failed') {
          let countResultText = ''
          let contentResultText = ''
          let diffCount = item.target_total - item.source_total
          let diffCountNum = Math.abs(diffCount)
          if (diffCount > 0) {
            countResultText = this.$t('packages_business_verification_result_count_more', [diffCountNum])
          }
          if (diffCount < 0) {
            countResultText = this.$t('packages_business_verification_result_count_less', [diffCountNum])
          }
          if (this.type !== 'row_count') {
            let diffContentNum = item.source_only + item.target_only + item.row_failed
            if (diffContentNum !== 0) {
              contentResultText = this.$t('packages_business_verification_result_content_diff', [diffContentNum])
            }
          }
          item.countResultText = countResultText
          item.contentResultText = contentResultText
        }
        return item
      })
      return list.sort((a, b) => {
        if (a.status === 'done') {
          return 1
        } else if (b.status === 'done') {
          return -1
        } else {
          return 0
        }
      })
    }
  },
  methods: {
    setCurrentRow(row) {
      this.current = row.taskId
      this.$refs.table.setCurrentRow(row)
    },
    rowClickHandler(row) {
      this.current = row.taskId
      this.$emit('row-click', row)
    }
  }
}
</script>
