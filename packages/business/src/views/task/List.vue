<template>
  <section class="data-flow-wrap" v-loading="restLoading">
    <TablePage
      ref="table"
      row-key="id"
      class="data-flow-list"
      :classify="{
        authority: 'SYNC_category_management',
        types: ['dataflow'],
        viewPage: syncType,
        title: $t('public_tags')
      }"
      :remoteMethod="getData"
      :default-sort="{ prop: 'last_updated', order: 'descending' }"
      @selection-change="
        val => {
          multipleSelection = val
        }
      "
      @classify-submit="handleOperationClassify"
      @sort-change="handleSortTable"
    >
      <template slot="search">
        <FilterBar v-model="searchParams" :items="filterItems" @fetch="table.fetch(1)" />
      </template>
      <template #multipleSelectionActions>
        <ElButton v-if="isDaas" @click="handlePermissionsSettings"
          >{{ $t('packages_business_permissionse_settings_create_quanxianshezhi') }}
        </ElButton>
        <ElButton
          v-readonlybtn="'SYNC_category_application'"
          :disabled="$disabledReadonlyUserBtn()"
          @click="$refs.table.showClassify(handleSelectTag())"
        >
          <span> {{ $t('public_button_bulk_tag') }}</span>
        </ElButton>
        <ElDropdown @command="handleCommand($event)" v-show="bulkOperation">
          <ElButton>
            <span> {{ $t('packages_business_dataFlow_taskBulkOperation') }}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </ElButton>
          <ElDropdownMenu slot="dropdown">
            <ElDropdownItem command="start" v-readonlybtn="'SYNC_job_operation'" :disabled="$disabledReadonlyUserBtn()"
              >{{ $t('packages_business_dataFlow_bulkScheuled') }}
            </ElDropdownItem>
            <ElDropdownItem command="stop" v-readonlybtn="'SYNC_job_operation'" :disabled="$disabledReadonlyUserBtn()"
              >{{ $t('packages_business_dataFlow_bulkStopping') }}
            </ElDropdownItem>
            <ElDropdownItem
              command="initialize"
              v-readonlybtn="'SYNC_job_operation'"
              :disabled="$disabledReadonlyUserBtn()"
              >{{ $t('packages_business_dataFlow_batchRest') }}
            </ElDropdownItem>
            <ElDropdownItem command="del" v-readonlybtn="'SYNC_job_delete'" :disabled="$disabledReadonlyUserBtn()"
              >{{ $t('packages_business_dataFlow_batchDelete') }}
            </ElDropdownItem>
          </ElDropdownMenu>
        </ElDropdown>
        <ElButton
          v-if="buttonShowMap.export"
          v-show="isDaas"
          :disabled="$disabledReadonlyUserBtn()"
          v-readonlybtn="'SYNC_job_export'"
          @click="handleCommand('export')"
        >
          <span> {{ $t('public_button_export') }}</span>
        </ElButton>
      </template>

      <el-table-column
        reserve-selection
        type="selection"
        width="38"
        align="center"
        :selectable="row => !row.hasChildren && !$disabledByPermission('SYNC_job_operation_all_data', row.user_id)"
      >
      </el-table-column>
      <el-table-column min-width="240" :label="$t('public_task_name')" :show-overflow-tooltip="true">
        <template #default="{ row }">
          <div class="dataflow-name flex flex-wrap">
            <span v-if="handleClickNameDisabled(row)" class="mr-1">{{ row.name }}</span>
            <ElLink
              v-else
              role="ellipsis"
              type="primary"
              class="justify-content-start ellipsis block mr-1"
              :class="['name', { 'has-children': row.hasChildren }]"
              @click.stop="handleClickName(row)"
              >{{ row.name }}</ElLink
            >
            <span v-if="row.listtags" class="justify-content-start ellipsis flex flex-wrap align-center gap-1">
              <span class="tag" v-for="item in row.listtags" :key="item.id">{{ item.value }}</span>
            </span>
          </div>
          <div class="fs-8 font-color-sslight lh-base">
            {{ row.type ? taskType[row.type] : '' }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="status" :label="$t('public_task_status')" :min-width="colWidth.status">
        <template #default="{ row }">
          <TaskStatus :task="row" :agentMap="agentMap" :error-cause="taskErrorCause[row.id]" />
        </template>
      </el-table-column>
      <el-table-column
        prop="syncStatus"
        :label="$t('packages_business_task_monitor_mission_milestone')"
        :min-width="colWidth.syncStatus"
      >
        <template #default="{ row }">
          <SyncStatus :status="row.syncStatus" />
        </template>
      </el-table-column>
      <el-table-column sortable prop="currentEventTimestamp" :label="$t('public_task_cdc_time_point')" min-width="168">
        <template #default="{ row }">
          {{ formatTime(row.currentEventTimestamp) }}
        </template>
      </el-table-column>
      <el-table-column prop="lastStartDate" :label="$t('public_task_last_run_time')" min-width="168" sortable="custom">
        <template #default="{ row }">
          {{ formatTime(row.lastStartDate) }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" :label="$t('public_operation')" :width="colWidth.operation">
        <div v-if="isDaas" slot="header" class="flex align-center">
          <span>{{ $t('public_operation_available') }}</span>
          <ElTooltip class="ml-2" placement="top" :content="$t('packages_business_connections_list_wuquanxiandecao')">
            <VIcon class="color-primary" size="14">info</VIcon>
          </ElTooltip>
        </div>
        <template #default="{ row }">
          <div class="table-operations" v-if="!row.hasChildren">
            <ElLink
              v-if="row.btnDisabled.stop && row.btnDisabled.forceStop && havePermission(row, 'Start')"
              v-readonlybtn="'SYNC_job_operation'"
              type="primary"
              data-testid="start-task"
              :disabled="row.btnDisabled.start || $disabledReadonlyUserBtn()"
              @click="start([row.id], row)"
            >
              {{ $t('public_button_start') }}
            </ElLink>
            <template v-else>
              <ElLink
                v-if="row.status === 'stopping' && havePermission(row, 'Stop')"
                v-readonlybtn="'SYNC_job_operation'"
                type="primary"
                data-testid="force-stop-task"
                :disabled="row.btnDisabled.forceStop || $disabledReadonlyUserBtn()"
                @click="forceStop([row.id], row)"
              >
                {{ $t('public_button_force_stop') }}
              </ElLink>
              <ElLink
                v-else-if="havePermission(row, 'Stop')"
                v-readonlybtn="'SYNC_job_operation'"
                type="primary"
                data-testid="stop-task"
                :disabled="row.btnDisabled.stop || $disabledReadonlyUserBtn()"
                @click="stop([row.id], row)"
              >
                {{ $t('public_button_stop') }}
              </ElLink>
            </template>
            <ElDivider
              v-if="havePermission(row, 'Start') || havePermission(row, 'Stop')"
              v-readonlybtn="'SYNC_job_operation'"
              direction="vertical"
            ></ElDivider>
            <ElLink
              v-if="havePermission(row, 'Edit')"
              v-readonlybtn="'SYNC_job_edition'"
              type="primary"
              data-testid="edit-task"
              :disabled="row.btnDisabled.edit || $disabledReadonlyUserBtn()"
              @click="handleEditor(row)"
            >
              {{ $t('public_button_edit') }}
            </ElLink>
            <ElDivider
              v-if="havePermission(row, 'Edit')"
              v-readonlybtn="'SYNC_job_edition'"
              direction="vertical"
            ></ElDivider>
            <ElLink
              v-readonlybtn="'SYNC_job_edition'"
              type="primary"
              data-testid="monitor-task"
              :disabled="row.btnDisabled.monitor && !row.lastStartDate"
              @click="toDetail(row)"
            >
              {{ $t('packages_business_task_list_button_monitor') }}
            </ElLink>
            <ElDivider v-readonlybtn="'SYNC_job_edition'" direction="vertical"></ElDivider>
            <ElLink
              v-if="havePermission(row, 'Reset')"
              v-readonlybtn="'SYNC_job_edition'"
              type="primary"
              data-testid="reset-task"
              :disabled="row.btnDisabled.reset || $disabledReadonlyUserBtn()"
              @click="initialize([row.id], row)"
            >
              {{ $t('public_button_reset') }}
            </ElLink>
            <ElDivider
              v-if="havePermission(row, 'Reset')"
              v-readonlybtn="'SYNC_job_edition'"
              direction="vertical"
            ></ElDivider>
            <ElLink
              v-if="buttonShowMap.copy"
              v-readonlybtn="'SYNC_job_edition'"
              type="primary"
              data-testid="copy-task"
              :disabled="$disabledReadonlyUserBtn()"
              @click="copy([row.id], row)"
            >
              {{ $t('public_button_copy') }}
            </ElLink>
            <ElDivider
              v-if="buttonShowMap.copy && havePermission(row, 'Delete')"
              v-readonlybtn="'SYNC_job_edition'"
              direction="vertical"
            ></ElDivider>
            <ElLink
              v-if="havePermission(row, 'Delete')"
              v-readonlybtn="'SYNC_job_edition'"
              type="primary"
              data-testid="delete-task"
              :disabled="row.btnDisabled.delete || $disabledReadonlyUserBtn()"
              @click="del([row.id], row)"
            >
              {{ $t('public_button_delete') }}
            </ElLink>
          </div>
        </template>
      </el-table-column>
    </TablePage>
    <SkipError ref="skipError" @skip="handleSkipAndRun"></SkipError>
    <!-- 导入 -->
    <Upload :type="uploadType" ref="upload" @success="table.fetch()"></Upload>
    <!-- 删除任务 pg数据源 slot 删除失败 自定义dialog 提示 -->
    <el-dialog
      :title="$t('public_message_title_prompt')"
      :visible.sync="dialogDelMsgVisible"
      width="52%"
      custom-class="dialogDelMsgDialog"
    >
      <span> {{ $t('packages_business_task_status_error_tip') }}</span>
      <div class="box mt-4">
        <div class="mb-4">{{ $t('packages_business_task_list_sqLyuju') }}</div>
        <div class="mt-2">{{ $t('packages_business_task_list_diyibuchaxun') }}</div>
        <div class="mb-4">
          {{ copySelectSql }}
          <ElTooltip
            placement="top"
            manual
            :content="$t('agent_deploy_start_install_button_copied')"
            popper-class="copy-tooltip"
            :value="showTooltip"
          >
            <span
              class="operaKey color-primary cursor-pointer"
              v-clipboard:copy="copySelectSql"
              v-clipboard:success="onCopy"
              @mouseleave="showTooltip = false"
            >
              <i class="click-style">{{ $t('public_button_copy') }}</i>
            </span>
          </ElTooltip>
        </div>
        <div class="mt-2">{{ $t('packages_business_task_list_dierbushanchu') }}</div>
        <div>
          {{ copyDelSql }}
          <ElTooltip
            placement="top"
            manual
            :content="$t('agent_deploy_start_install_button_copied')"
            popper-class="copy-tooltip"
            :value="showDelTooltip"
          >
            <span
              class="operaKey color-primary cursor-pointer"
              v-clipboard:copy="copyDelSql"
              v-clipboard:success="onDelCopy"
              @mouseleave="showDelTooltip = false"
            >
              <i class="click-style">{{ $t('public_button_copy') }}</i>
            </span>
          </ElTooltip>
        </div>
      </div>
      <div class="mt-2" v-for="item in failList" :key="item.id">
        {{ $t('packages_business_task_list_lianjieming') }}{{ item.message }}
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogDelMsgVisible = false">{{ $t('public_button_close') }}</el-button>
      </span>
    </el-dialog>
    <PermissionseSettingsCreate ref="permissionseSettingsCreate"></PermissionseSettingsCreate>

    <UpgradeFee
      :visible.sync="upgradeFeeVisible"
      :tooltip="upgradeFeeVisibleTips || $t('packages_business_task_list_nindekeyunxing')"
      :go-page="upgradeFeeGoPage"
    ></UpgradeFee>

    <UpgradeCharges
      :visible.sync="upgradeChargesVisible"
      :tooltip="upgradeChargesVisibleTips || $t('packages_business_task_list_nindekeyunxing')"
      :go-page="upgradeFeeGoPage"
    ></UpgradeCharges>
  </section>
</template>

<script>
import { escapeRegExp } from 'lodash'
import dayjs from 'dayjs'
import i18n from '@tap/i18n'
import { taskApi, workerApi } from '@tap/api'
import { FilterBar } from '@tap/component'
import PermissionseSettingsCreate from '../../components/permissionse-settings/Create'

import { TablePage, TaskStatus, UpgradeFee, UpgradeCharges, SyncStatus } from '../../components'
import SkipError from './SkipError'
import Upload from '../../components/UploadDialog'
import { makeStatusAndDisabled, STATUS_MAP, MILESTONE_TYPE } from '../../shared'
import syncTaskAgent from '../../mixins/syncTaskAgent'

export default {
  name: 'List',

  props: {
    route: {},
    taskBuried: {},
    syncType: String
  },

  inject: ['checkAgent', 'buried'],

  components: {
    FilterBar,
    TablePage,
    SkipError,
    Upload,
    TaskStatus,
    PermissionseSettingsCreate,
    UpgradeCharges,
    UpgradeFee,
    SyncStatus
  },

  mixins: [syncTaskAgent],

  data() {
    return {
      STATUS_MAP,
      isDaas: process.env.VUE_APP_PLATFORM === 'DAAS',
      dataFlowId: '',
      isShowDetails: false,
      previewLoading: false,
      previewData: null,
      previewList: [],
      filterItems: [],
      restLoading: false,
      order: 'last_updated DESC',
      multipleSelection: [],
      createBtnLoading: false,
      bulkOperation: this.$has('SYNC_job_export') || this.$has('SYNC_job_operation') || this.$has('SYNC_job_delete'),
      taskType: {
        initial_sync: this.$t('public_task_type_initial_sync'),
        cdc: this.$t('public_task_type_cdc'),
        'initial_sync+cdc': this.$t('public_task_type_initial_sync_and_cdc')
      },
      typeOptions: [
        { label: this.$t('public_select_option_all'), value: '' },
        {
          label: this.$t('public_task_type_initial_sync'),
          value: 'initial_sync'
        },
        {
          label: this.$t('public_task_type_cdc'),
          value: 'cdc'
        },
        {
          label: this.$t('public_task_type_initial_sync_and_cdc'),
          value: 'initial_sync+cdc'
        }
      ],
      searchParams: {
        keyword: '',
        status: '',
        type: ''
      },
      //删除任务 pg数据源 slot 删除失败 自定义dialog 提示
      dialogDelMsgVisible: false,
      copySelectSql: `SELECT slot_name FROM pg_replication_slots WHERE slot_name like 'tapdata_cdc_%' and active='false';`,
      copyDelSql: "SELECT pg_drop_replication_slot('${slot_name}');",
      showTooltip: false,
      showDelTooltip: false,
      failList: [], //错误列表
      taskErrorCause: {},
      upgradeFeeVisible: false,
      upgradeFeeVisibleTips: '',
      upgradeChargesVisible: false,
      upgradeChargesVisibleTips: '',
      uploadType: 'dataflow'
    }
  },

  computed: {
    table() {
      return this.$refs.table
    },

    statusOptions() {
      const options = Object.entries(this.STATUS_MAP).map(([status, item]) => {
        return {
          label: this.$t(item.i18n),
          value: item.in ? item.in.join(',') : status
        }
      })
      options.unshift({ label: this.$t('packages_business_task_list_status_all'), value: '' })
      return options
    },

    colWidth() {
      const { locale } = this.$i18n
      return locale === 'en'
        ? {
            taskType: 140,
            status: 145,
            syncStatus: 180,
            operation: 340
          }
        : {
            taskType: 80,
            status: 110,
            syncStatus: 110,
            operation: 280
          }
    },

    buttonShowMap() {
      if (this.$route.name === 'dataflowList') {
        return {
          create: this.$has('v2_data_flow_creation'),
          copy: this.$has('v2_data_flow_copy'),
          import: this.$has('v2_data_flow_import'),
          export: this.$has('v2_data_flow_export')
        }
      }

      return {
        create: this.$has('v2_data_replication_creation'),
        copy: this.$has('v2_data_replication_copy'),
        import: this.$has('v2_data_replication_import'),
        export: this.$has('v2_data_replication_export')
      }
    }
  },

  watch: {
    '$route.query'() {
      this.searchParams = this.$route.query
      this.table.fetch(1)
    }
  },

  created() {
    //定时轮询
    this.timeout = setInterval(() => {
      this.table.fetch(null, 0, true)
    }, 8000)
    this.getFilterItems()
    this.searchParams = Object.assign(this.searchParams, this.$route.query)

    this.loop(this.isDaas ? this.getClusterStatus : this.getAgentStatus, 30000)
  },

  beforeDestroy() {
    clearInterval(this.timeout)
  },

  methods: {
    getData({ page, tags }) {
      let { current, size } = page
      const { syncType } = this
      let { keyword, status, type, agentId, syncStatus } = this.searchParams
      let fields = {
        id: true,
        name: true,
        status: true,
        last_updated: true,
        createTime: true,
        user_id: true,
        startTime: true,
        agentId: true,
        statuses: true,
        type: true,
        desc: true,
        listtags: true,
        syncType: true,
        stoppingTime: true,
        pingTime: true,
        canForceStopping: true,
        currentEventTimestamp: true,
        crontabExpressionFlag: true,
        crontabExpression: true,
        crontabScheduleMsg: true,
        lastStartDate: true,
        functionRetryStatus: true,
        taskRetryStatus: true,
        shareCdcStop: true,
        shareCdcStopMessage: true,
        taskRetryStartTime: true,
        errorEvents: true,
        syncStatus: true,
        restartFlag: true
      }
      let where = {
        syncType
      }
      if (keyword && keyword.trim()) {
        where.name = { like: escapeRegExp(keyword), options: 'i' }
      }
      if (tags && tags.length) {
        where['listtags.id'] = {
          in: tags
        }
      }
      type && (where['type'] = type)
      if (status) {
        if (status.includes(',')) {
          where.status = {
            $in: status.split(',')
          }
        } else {
          where.status = status
        }
      }
      if (agentId) {
        where['agentId'] = agentId
      }
      if (syncStatus) {
        where.syncStatus = syncStatus
      }
      let filter = {
        order: this.order,
        limit: size,
        fields: fields,
        skip: (current - 1) * size,
        where
      }
      return taskApi
        .get({
          filter: JSON.stringify(filter)
        })
        .then(data => {
          let errorTaskIds = []
          let list = (data?.items || []).map(item => {
            if (item.errorEvents?.length) {
              // 清除 stacks
              item.errorEvents.forEach(event => {
                delete event.stacks
              })
            }

            makeStatusAndDisabled(item)
            if (item.status === 'error') {
              errorTaskIds.push(item.id)
            } else if (this.taskErrorCause[item.id]) {
              this.$delete(this.taskErrorCause, item.id)
            }
            return item
          })

          /*if (!this.isDaas) {
            this.loadTaskErrorCause(errorTaskIds)
          }*/

          // 有选中行，列表刷新后无法更新行数据，比如状态
          if (this.multipleSelection.length && list.length) {
            let tempMap = list.reduce((map, item) => {
              map[item.id] = item
              return map
            }, {})
            this.multipleSelection.forEach((item, i) => {
              const temp = tempMap[item.id]
              if (temp) {
                this.multipleSelection[i] = temp
              }
            })
          }

          return {
            total: data.total,
            data: list
          }
        })
    },

    formatTime(time) {
      return time ? dayjs(time).format('YYYY-MM-DD HH:mm:ss') : '-'
    },

    getFilterItems() {
      this.filterItems = [
        {
          label: this.$t('public_task_status'),
          key: 'status',
          type: 'select-inner',
          items: this.statusOptions,
          selectedWidth: '200px'
        },
        {
          label: this.$t('packages_business_task_list_sync_type'),
          key: 'type',
          type: 'select-inner',
          items: this.typeOptions
        },
        {
          label: this.$t('packages_business_task_monitor_mission_milestone'),
          key: 'syncStatus',
          type: 'select-inner',
          items: [
            { label: this.$t('public_select_option_all'), value: '' },
            ...Object.entries(MILESTONE_TYPE).map(([key, value]) => ({ label: value.text, value: key }))
          ],
          selectedWidth: '200px'
        },
        {
          placeholder: this.$t('public_task_name'),
          key: 'keyword',
          type: 'input'
        }
      ]

      if (!this.isDaas) {
        this.filterItems.splice(2, 0, {
          label: i18n.t('agent_name'),
          key: 'agentId',
          type: 'select-inner',
          menuMinWidth: '250px',
          items: async () => {
            let filter = {
              where: {
                status: { $in: ['Running'] }
              },
              size: 100
            }
            let data = await this.$axios.get('api/tcm/agent?filter=' + encodeURIComponent(JSON.stringify(filter)))
            return data.items.map(item => {
              return {
                label: item.name,
                value: item.tmInfo.agentId
              }
            })
          }
        })
      }
    },

    /**
     * 点击名称调整
     * @param row
     */
    handleClickName(row) {
      if (this.$disabledReadonlyUserBtn()) return
      if (!['edit', 'wait_start'].includes(row.status)) {
        this.toDetail(row)
      } else {
        this.handleEditor(row)
      }
    },

    handleClickNameDisabled(row = {}) {
      if (!this.isDaas) return false

      return (
        (row.btnDisabled?.edit || this.$disabledReadonlyUserBtn() || !this.havePermission(row, 'Edit')) &&
        row.btnDisabled.monitor &&
        !row.lastStartDate
      )
    },

    openRoute(route, newTab = true) {
      if (newTab) {
        // 这里预期是任务已经打开了，不要重复开新标签页
        // 并且已开的页面要reload，因为hash路由#号的原因，没办法自动reload，所以记录个字段判断
        let win = window.open(this.$router.resolve(route).href, route.params.id)

        if (win?.openTime) {
          win.location.reload()
        }

        win.openTime = Date.now()
      } else {
        this.$router.push(route)
      }
    },

    responseHandler(data, msg, canNotList = []) {
      let failList = data?.filter(t => t.code !== 'ok') || []
      failList = [...failList, ...canNotList]
      if (failList.length) {
        const findErr = failList.find(t => ['Task.ScheduleLimit', 'Task.ManuallyScheduleLimit'].includes(t.code))
        if (findErr) {
          this.handleShowUpgradeDialog(findErr)
          return
        }
        let nameMapping = {}
        this.table.list.forEach(item => {
          nameMapping[item.id] = item.name
        })
        this.$message.warning({
          dangerouslyUseHTMLString: true,
          message: failList
            .map(item => {
              return `<div style="line-height: 24px;"><span class="link-primary">${
                nameMapping[item.id]
              }</span> : <span style="color: #F56C6C">${item.message}</span></div>`
            })
            .join('')
        })
      } else if (msg) {
        this.$message.success(msg, false)
      }
      this.table.clearSelection()
    },

    handleSortTable({ order, prop }) {
      if (prop === 'lag') {
        prop = 'stats.replicationLag'
      }
      this.order = `${order ? prop : 'last_updated'} ${order === 'ascending' ? 'ASC' : 'DESC'}`
      this.table.fetch(1)
    },

    changeStatus(ids, { status, errorEvents }) {
      let where = {
        _id: {
          in: ids
        }
      }
      let attributes = {
        status
      }
      errorEvents && (attributes.errorEvents = errorEvents)
      taskApi.update(where, attributes).then(data => {
        this.table.fetch()
        this.responseHandler(data, this.$t('public_message_operation_success'))
      })
    },

    skipHandler(id, errorEvents) {
      this.changeStatus([id], { status: 'scheduled', errorEvents })
    },

    handleOperationClassify(listtags) {
      let ids = []
      if (this.dataFlowId) {
        ids = [this.dataFlowId]
      } else {
        ids = this.multipleSelection.map(r => r.id)
      }
      let attributes = {
        id: ids,
        listtags
      }
      taskApi.batchUpdateListtags(attributes).then(() => {
        this.dataFlowId = ''
        this.table.fetch()
      })
    },

    handleSelectTag() {
      let tagList = []
      this.multipleSelection.forEach(row => {
        if (row.listtags) {
          tagList = [...row.listtags, ...tagList]
        }
      })
      //去重
      let map = new Map()
      for (let item of tagList) {
        if (!map.has(item.id)) {
          map.set(item.id, item)
        }
      }
      tagList = [...map.values()]
      return tagList
    },

    async create(query) {
      this.buried(this.taskBuried.new)
      this.createBtnLoading = true
      this.checkAgent(() => {
        this.$router.push({
          name: this.route.new,
          query
        })
      }).catch(() => {
        this.createBtnLoading = false
        this.buried(this.taskBuried.newFail)
      })
    },

    handleCreateMaterializedView() {
      this.create({
        by: 'materialized-view'
      })
    },

    handleEditor({ id }) {
      this.openRoute({
        name: this.route.editor,
        params: {
          id
        }
      })
    },

    start(ids, task, canNotList = []) {
      this.buried(this.taskBuried.start)
      if (ids.length === 1 && task && this.$refs.skipError.checkError(task)) {
        return
      }

      this.startTask(ids, canNotList)
    },

    startTask(ids, canNotList) {
      taskApi
        .batchStart(ids)
        .then(data => {
          this.buried(this.taskBuried.start, '', { result: true })
          this.table.fetch()
          this.responseHandler(data, this.$t('public_message_operation_success'), canNotList)
        })
        .catch(() => {
          this.buried(this.taskBuried.start, '', { result: false })
        })
    },

    handleSkipAndRun(taskId) {
      this.startTask([taskId])
    },

    copy(ids, node) {
      taskApi.copy(node.id).then(() => {
        this.table.fetch()
        this.$message.success(this.$t('public_message_copy_success'))
      })
    },

    initialize(ids, item = {}, canNotList) {
      let msgObj = this.getConfirmMessage('initialize', ids.length > 1, item.name)
      this.$confirm(msgObj.msg, msgObj.title, {
        type: 'warning'
      }).then(resFlag => {
        if (!resFlag) {
          return
        }
        this.restLoading = true
        taskApi
          .batchRenew(ids)
          .then(data => {
            this.table.fetch()
            this.responseHandler(data, this.$t('public_message_operation_success'), canNotList)
          })
          .finally(() => {
            this.restLoading = false
          })
      })
    },

    del(ids, item = {}, canNotList) {
      let msgObj = this.getConfirmMessage('delete', ids.length > 1, item.name)
      this.$confirm(msgObj.msg, '', {
        type: 'warning'
      }).then(resFlag => {
        if (!resFlag) {
          return
        }
        taskApi.batchDelete(ids).then((data = []) => {
          const selected = this.multipleSelection.filter(({ id }) => ids.includes(id))
          const { toggleRowSelection } = this.table.$refs.table
          data.forEach(item => {
            const { name, permissionActions = [] } = selected.find(t => t.id === item.id) || {}
            item.name = name
            item.permissionActions = permissionActions
          })
          selected.forEach(row => toggleRowSelection(row, false))
          this.table.fetch()
          this.responseDelHandler(data, this.$t('public_message_delete_ok'), canNotList)
        })
      })
    },
    //删除任务单独提示
    responseDelHandler(data, msg, canNotList = []) {
      this.failList = [...(data?.filter(t => t.code !== 'ok') || []), ...canNotList]
      if (this.failList.length) {
        if (this.failList.some(t => t.code === 'Clear.Slot')) {
          this.dialogDelMsgVisible = true
        } else {
          let message = ''
          const { isDaas } = this
          this.failList.forEach(el => {
            message += `${el.name || el.id}: ${
              isDaas && !el.permissionActions.includes('Delete') ? this.$t('public_no_permissions') : el.message
            }<br/>`
          })
          this.$message.info({
            dangerouslyUseHTMLString: true,
            message
          })
        }
      } else if (msg) {
        this.$message.success(msg, false)
      }
      this.table.clearSelection()
    },

    async forceStop(ids, item = {}) {
      let data = await workerApi.taskUsedAgent(ids)
      let msgObj = this.getConfirmMessage('force_stop', ids.length > 1, item.name)
      if (data?.status === 'offline' && !this.isDaas) {
        msgObj = this.getConfirmMessage('agent_force_stop', ids.length > 1, item.name)
      }
      this.$confirm(msgObj.msg, '', {
        type: 'warning',
        showClose: false
      }).then(resFlag => {
        if (!resFlag) {
          return
        }
        taskApi.forceStop(ids).then(data => {
          this.$message.success(data?.message || this.$t('public_message_operation_success'), false)
          this.table.fetch()
        })
      })
    },

    stop(ids, item = {}, canNotList) {
      let msgObj = this.getConfirmMessage('stop', ids.length > 1, item.name)
      let message = msgObj.msg
      this.$confirm(message, '', {
        type: 'warning',
        showClose: false
      }).then(resFlag => {
        if (!resFlag) {
          return
        }
        taskApi.batchStop(ids).then(data => {
          this.table.fetch()
          this.responseHandler(data, this.$t('public_message_operation_success'), canNotList)
        })
      })
    },

    toDetail({ id }) {
      this.openRoute({
        name: this.route.monitor,
        params: {
          id
        }
      })
    },

    export(ids) {
      taskApi.export(ids)
    },

    handleCommand(command, node) {
      let commandFilter = ['start', 'stop', 'del', 'initialize']
      let ids = []
      let taskList = []
      if (node) {
        taskList = [node]
      } else {
        taskList = this.multipleSelection
      }
      let canList = []
      let canNotList = []
      const disabledMap = {
        initialize: 'reset',
        del: 'delete'
      }
      if (commandFilter.includes(command)) {
        let op = disabledMap[command] || command
        taskList.forEach(task => {
          if (task.btnDisabled?.[op]) {
            canNotList.push(task)
          } else {
            canList.push(task)
          }
        })
      } else {
        canList = taskList
      }

      const canNotResult = canNotList.map(t => {
        return {
          code: 'error',
          id: t?.id,
          message: i18n.t('packages_business_task_list_renwubuzhichi')
        }
      })
      if (!canList.length) {
        this.responseHandler(canList, '', canNotResult)
        return
      }
      ids = canList.map(item => item.id)
      this[command](ids, node, canNotResult)
    },

    getConfirmMessage(operateStr, isBulk, name) {
      let title = operateStr + '_confirm_title',
        message = operateStr + '_confirm_message'
      if (isBulk) {
        title = 'bulk_' + title
        message = 'bulk_' + message
      }
      const h = this.$createElement
      let strArr = this.$t('packages_business_dataFlow_' + message).split(/xxx/i)
      let msg = h(
        'p',
        {
          style: 'width: calc(100% - 28px);word-break: break-word;'
        },
        [
          strArr[0],
          h(
            'span',
            {
              class: 'color-primary ml-1'
            },
            name
          ),
          strArr[1]
        ]
      )
      return {
        msg,
        title: this.$t('packages_business_dataFlow_' + title)
      }
    },

    handleImport() {
      this.uploadType = 'dataflow'
      this.$refs.upload.show()
    },

    handleImportRelmig() {
      this.uploadType = 'relmig'
      this.$refs.upload.show()
    },

    onCopy() {
      this.showTooltip = true
    },
    onDelCopy() {
      this.showDelTooltip = true
    },

    async loadTaskErrorCause(taskIds) {
      if (!taskIds.length) return
      await Promise.all(taskIds.map(this.getTaskErrorCause))

      console.log('result', this.taskErrorCause) // eslint-disable-line
    },

    async getTaskErrorCause(task_id) {
      let cause
      try {
        const data = await this.$axios({
          method: 'post',
          // baseUrl: null,
          url: '/private_ask',
          data: {
            task_id
          },
          params: {
            _: Date.now()
          }
        })
        cause = data?.resp
      } catch (e) {
        console.debug(e) // eslint-disable-line
        // cause =
        //   '\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u5185, \u60a8\u5171\u6709 1 \u4e2a\u4efb\u52a1\u51fa\u73b0\u9519\u8bef, \u7cfb\u7edf\u5206\u6790\u6210\u529f\u7684\u6570\u91cf\u6709: 1 \u4e2a, \u53ef\u80fd\u539f\u56e0\u5206\u522b\u5982\u4e0b:\\\\n\\\\n1. \u540d\u5b57\u4e3a \u65b0\u4efb\u52a1@19:02:39 \u7684\u4efb\u52a1, \u5728 2023-03-15 10:26:38 \u53d1\u751f\u62a5\u9519, \u7ecf\u5206\u6790, \u63d0\u4f9b\u7ed9\u60a8\u7684\u4fe1\u606f\u4e3a:  \u8fd9\u53ef\u80fd\u662f\u7531\u4e8e\u6570\u636e\u5e93\u4e2d\u51fa\u73b0\u6b7b\u9501\u5bfc\u81f4\u7684\uff0c\u53ef\u80fd\u662f\u7531\u4e8e\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8bbf\u95ee\u6570\u636e\u5e93\u800c\u5bfc\u81f4\u7684\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4f18\u5316\u6570\u636e\u5e93\u8bbf\u95ee\uff0c\u51cf\u5c11\u591a\u7ebf\u7a0b\u540c\u65f6\u8bbf\u95ee\u6570\u636e\u5e93\u7684\u60c5\u51b5\uff0c\u4ee5\u907f\u514d\u6b7b\u9501\u7684\u53d1\u751f\u3002\\\\n\\\\n'
      }

      cause &&
        cause !== i18n.t('packages_business_task_list_meiyoufaxiannin') &&
        this.$set(this.taskErrorCause, task_id, cause.replace(/\\n/g, '\n').replace(/(\n)+$/g, ''))
    },

    // 显示权限设置
    handlePermissionsSettings() {
      this.$refs.permissionseSettingsCreate.open(this.multipleSelection, 'Task')
    },

    havePermission(row = {}, type = '') {
      if (!this.isDaas) return true
      const data = row.permissionActions || []
      return data.includes(type)
    },

    upgradeFeeGoPage() {
      const routeUrl = this.$router.resolve({
        name: 'createAgent'
      })
      window.open(routeUrl.href, '_blank')
    },

    // 升级专业版
    handleShowUpgradeFee(msg) {
      this.upgradeFeeVisibleTips = msg
      this.upgradeFeeVisible = true
    },

    // 升级规格
    handleShowUpgradeCharges(msg) {
      this.upgradeChargesVisibleTips = msg
      this.upgradeChargesVisible = true
    },

    handleShowUpgradeDialog(err) {
      !this.isDaas &&
        this.$axios
          .get(
            'api/tcm/agent?filter=' +
              encodeURIComponent(
                JSON.stringify({
                  size: 100,
                  page: 1
                })
              )
          )
          .then(async data => {
            const { items = [] } = data

            if (items.some(t => t.status === 'Stopped')) {
              this.$message.error(this.$t('public_task_error_schedule_limit'))
              return
            }

            items.length <= 1 && items.some(t => t.orderInfo?.chargeProvider === 'FreeTier' || !t.orderInfo?.amount)
              ? this.handleShowUpgradeFee(err.message)
              : this.handleShowUpgradeCharges(err.message)
          })
    }
  }
}
</script>

<style lang="scss" scoped>
.data-flow-wrap {
  height: 100%;
  padding: 0 24px 24px 0;
  background: #fff;

  .btn-refresh {
    padding: 0;
    height: 32px;
    line-height: 32px;
    width: 32px;
    font-size: 16px;
  }

  .data-flow-list {
    .search-bar {
      display: flex;
      flex-wrap: wrap;

      li {
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .buttons {
      white-space: nowrap;

      .btn + .btn {
        margin-left: 12px;
      }

      .btn {
        i.iconfont {
          font-size: 12px;
        }

        &.btn-dropdowm {
          margin-left: 12px;
        }

        &.btn-create {
          margin-left: 12px;
        }

        &.btn-createText {
          margin-left: 12px;
        }
      }
    }

    .dataflow-name {
      .tag {
        padding: 0 4px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: map-get($color, tag);
        border: 1px solid map-get($bgColor, tag);
        border-radius: 4px;
      }

      .name {
        &:not(.has-children) {
          cursor: pointer;
          // text-decoration: underline;
        }
      }
    }

    .table-operations {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .el-table {
      ::v-deep {
        .el-table__cell {
          padding: 10px 0;
        }
      }
    }
  }

  .dialogDelMsgDialog {
    .box {
      padding: 10px;
      background-color: #f8f9fa;
    }
  }
}
</style>
