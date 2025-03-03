<template>
  <div class="flex h-100">
    <NodeList
      v-model="activeNodeId"
      :label="$t('packages_business_milestone_list_zhengtijindu')"
      class="node-list border-end mr-4 flex-shrink-0"
      :customClass="handleCustomClass"
      @change="handleChange"
    >
      <VIcon slot="right" class="ml-2 color-warning error-icon">warning</VIcon>
    </NodeList>
    <div v-if="activeNodeId" class="flex-fill overflow-auto">
      <VTable ref="table" row-key="id" :columns="columns" :data="nodeData" hide-on-single-page class="pt-4">
        <template slot="statusLabel" slot-scope="scope">
          <div
            v-if="scope.row.status === 'ERROR'"
            :class="scope.row.statusColor"
            class="inline-flex align-items-center cursor-pointer"
            @click="handleError(scope.row)"
          >
            <span class="color-danger underline">{{ $t('public_task_mission_error') }}</span>
            <VIcon class="color-danger ml-2">error</VIcon>
          </div>
          <div v-else :class="scope.row.statusColor">{{ scope.row.statusLabel }}</div>
        </template>
      </VTable>
    </div>
    <div v-else class="milestone-main flex-fill overflow-auto py-4">
      <div v-for="(item, index) in wholeItems" :key="index" class="pro-line flex">
        <div class="position-relative">
          <div v-if="index + 1 !== wholeItems.length" class="step__line position-absolute"></div>
          <VIcon
            :class="[item.color, 'mt-1 position-relative', { 'loading-circle': item.icon === 'loading-circle' }]"
            size="16"
            >{{ item.icon }}</VIcon
          >
        </div>
        <div class="ml-4 step__line_pt flex-fill">
          <span class="font-color-normal fw-bold">{{ item.label }}: </span>
          <span v-if="item.desc" class="mt-2 color-info">{{ item.desc }}</span>
          <span v-if="item.dataDesc" class="mt-2 color-info">{{ item.dataDesc }}</span>
          <ElProgress
            v-if="typeof item.percentage === 'number'"
            :percentage="item.percentage"
            :stroke-width="10"
            class="milestone-mt-1"
            :show-text="false"
          ></ElProgress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '@tap/i18n'

import { VTable } from '@tap/component'
import { calcTimeUnit } from '@tap/shared'
import Time from '@tap/shared/src/time'

import NodeList from '../nodes/List'
import dayjs from 'dayjs'

export default {
  name: 'List',

  props: {
    dataflow: {
      type: Object,
      default: () => {
        return {}
      }
    },
    nodeId: String
  },

  components: { NodeList, VTable },

  data() {
    const activeNodeId = this.nodeId
    const activeNode = activeNodeId ? this.$store.getters['dataflow/nodeById'](activeNodeId) : {}

    return {
      activeNodeId,
      activeNode,
      columns: [
        {
          label: i18n.t('packages_business_milestone_list_guanjianbuzhou'),
          prop: 'label'
        },
        {
          label: i18n.t('packages_business_connection_list_status'),
          slotName: 'statusLabel'
        },
        {
          label: i18n.t('packages_business_task_info_start_time'),
          dataType: 'time',
          prop: 'begin'
        },
        {
          label: i18n.t('packages_business_verification_LastTime'),
          dataType: 'time',
          prop: 'end'
        },
        {
          label: i18n.t('packages_business_milestone_list_haoshi'),
          prop: 'diff'
        }
      ]
    }
  },

  computed: {
    nodeMilestones() {
      const { activeNodeId } = this
      if (!activeNodeId) return {}
      return this.dataflow.attrs?.nodeMilestones?.[activeNodeId] || {}
    },

    wholeItems() {
      const milestone = this.dataflow.attrs?.milestone || {}
      let agentName = this.dataflow.agentName
      let shareCache = this.dataflow.shareCache

      let result = [
        {
          key: 'TASK',
          label: i18n.t('packages_business_milestone_list_renwudiaodu')
        },
        {
          key: 'DATA_NODE_INIT',
          label: i18n.t('packages_business_milestone_list_shujujiedianchu')
        },
        {
          key: 'TABLE_INIT',
          label: i18n.t('packages_business_milestone_list_biaojiegouqianyi')
        },
        {
          key: 'SNAPSHOT',
          label: i18n.t('packages_business_milestone_list_quanliangshujuqian')
        },
        {
          key: 'CDC',
          label: i18n.t('packages_business_milestone_list_jinruzengliangshu')
        }
      ]

      const dataflowType = this.dataflow.type
      let iconRunning = 'loading-circle'
      let iconRunningColor = 'color-success'
      if (this.dataflow.status != 'running') {
        iconRunning = 'time'
        iconRunningColor = 'color-primary'
      }
      if (['logCollector'].includes(this.dataflow.syncType)) {
        delete result[2]
      }

      // 全量不显示增量信息
      result = result.filter(
        t =>
          dataflowType === 'initial_sync+cdc' ||
          (dataflowType === 'cdc' && t.key !== 'SNAPSHOT') ||
          (dataflowType === 'initial_sync' && t.key !== 'CDC')
      )
      //缓存任务没有表结构复制这一步骤
      if (shareCache) {
        result = result.filter(it => it.key !== 'TABLE_INIT')
      }

      const finishOpt = {
        status: 'FINISH',
        desc: i18n.t('public_status_complete'),
        icon: 'success',
        color: 'color-success'
      }
      const runningOpt = {
        status: 'RUNNING',
        desc: i18n.t('packages_business_milestone_list_status_progressing'),
        icon: iconRunning,
        progress: 0,
        color: 'color-primary'
      }
      const cdcRunningOpt = {
        status: 'RUNNING',
        desc: i18n.t('packages_business_milestone_list_status_cdc_progressing'),
        icon: iconRunning,
        progress: 0,
        color: 'color-primary'
      }
      const cdcFinishOpt = {
        status: 'FINISH',
        desc: i18n.t('packages_business_milestone_list_status_cdc_finish'),
        icon: iconRunning,
        progress: 0,
        color: iconRunningColor
      }
      const waitingOpt = {
        status: 'WAITING',
        desc: i18n.t('public_status_waiting'),
        icon: 'time',
        color: 'color-primary'
      }
      const stopOpt = {
        status: 'STOP',
        desc: i18n.t('public_status_stop'),
        icon: 'warning',
        color: 'color-warning'
      }
      const errorOpt = {
        status: 'ERROR',
        desc: i18n.t('public_status_error'),
        icon: 'error',
        color: 'color-danger'
      }
      result.forEach(el => {
        let item = milestone[el.key]
        if (item == undefined) {
          item = {
            begin: 0,
            end: 0,
            totals: '-',
            progress: '-'
          }
        }
        let time =
          item.begin && item.end
            ? calcTimeUnit(item.end - item.begin, 2, {
                autoHideMs: true
              })
            : '-'
        const begin = dayjs(item.begin).format('HH:mm:ss')
        const end = item.end ? dayjs(item.end).format('HH:mm:ss') : ''
        switch (item?.status) {
          case 'FINISH':
            Object.assign(el, finishOpt)
            switch (el.key) {
              case 'TASK':
                Object.assign(el, {
                  dataDesc: `, ${i18n.t('public_milestone_time_scheduling', { val: agentName })}, ${end}`
                })
                break
              case 'DATA_NODE_INIT':
                Object.assign(el, {
                  dataDesc: `, ${i18n.t('public_milestone_connection_succeeded')},  ${i18n.t(
                    'public_milestone_time_consuming'
                  )} ${time}, ${begin} ~ ${end}`
                })
                break
              case 'TABLE_INIT':
                Object.assign(el, {
                  dataDesc: `, ${i18n.t('public_milestone_time_table_structure', { val: item.totals })}, ${i18n.t(
                    'public_milestone_time_consuming'
                  )} ${time}, ${begin} ~ ${end}`
                })
                break
              case 'SNAPSHOT':
                Object.assign(el, {
                  dataDesc: `, ${i18n.t('public_milestone_time_consuming')} ${time}, ${begin} ~ ${end}`
                })
                break
              case 'CDC':
                Object.assign(el, cdcFinishOpt)
                Object.assign(el, {
                  dataDesc: `, ${i18n.t('public_milestone_time_cdc_consuming')} ${time}, ${begin}`
                })
                break
            }
            break
          case 'ERROR':
            Object.assign(el, errorOpt)
            break
          case 'RUNNING':
            switch (el.key) {
              case 'CDC':
                Object.assign(el, cdcRunningOpt, {
                  progress: (item.progress / item.totals) * 100
                })
                break
              default:
                Object.assign(el, runningOpt, {
                  progress: (item.progress / item.totals) * 100
                })
            }
            break
          default:
            Object.assign(el, waitingOpt)
            break
        }
      })
      const len = result.length
      const finishedLen = result.filter(t => t.status === 'FINISH').length
      let currentLen = finishedLen + 1
      if (currentLen > len) {
        currentLen = currentLen - 1
      }

      const per = (finishedLen / len) * 100
      result.unshift({
        label: i18n.t('packages_business_milestone_list_zhengtijindu'),
        icon: 'device',
        percentage: per,
        desc: i18n.t('packages_business_milestone_list_finish', {
          val1: finishedLen,
          val2: len,
          val3: result[currentLen - 1].label + ' ' + result[currentLen - 1].desc
        })
      })

      return result
    },

    nodeData() {
      const { nodeMilestones } = this
      const dataflowType = this.dataflow.type
      let NODE_MAP = {
        source: [
          {
            key: 'NODE',
            label: i18n.t('packages_business_milestone_list_lianjiebingyanzheng')
          },
          {
            key: 'SNAPSHOT_READ',
            label: i18n.t('packages_business_milestone_list_duququanliangshu')
          },
          {
            key: 'OPEN_CDC_READ',
            label: i18n.t('packages_business_milestone_list_kaiqizengliang')
          },
          {
            key: 'CDC_READ',
            label: i18n.t('packages_business_milestone_list_duquzengliangshu')
          }
        ],
        target: [
          {
            key: 'NODE',
            label: i18n.t('packages_business_milestone_list_lianjiebingyanzheng')
          },
          {
            key: 'TABLE_INIT',
            label: i18n.t('packages_business_milestone_list_chuangjianmubiaobiao')
          }
        ],
        processor: [
          {
            key: 'NODE',
            label: i18n.t('packages_business_milestone_list_shujuchuli')
          }
        ]
      }

      if (['logCollector'].includes(this.dataflow.syncType)) {
        delete NODE_MAP.target[1]
      }

      if (dataflowType === 'cdc') {
        NODE_MAP.target.push({
          key: 'CDC_WRITE',
          label: i18n.t('packages_business_milestone_list_zengliangshujuxie')
        })
      } else if (dataflowType === 'initial_sync') {
        NODE_MAP.target.push({
          key: 'SNAPSHOT_WRITE',
          label: i18n.t('packages_business_milestone_list_quanliangshujuxie')
        })
      } else {
        NODE_MAP.target.push({
          key: 'SNAPSHOT_WRITE',
          label: i18n.t('packages_business_milestone_list_quanliangshujuxie')
        })
        NODE_MAP.target.push({
          key: 'CDC_WRITE',
          label: i18n.t('packages_business_milestone_list_zengliangshujuxie')
        })
      }
      const STATUS_MAP = {
        FINISH: {
          label: i18n.t('public_status_finished'),
          color: 'color-success'
        },
        RUNNING: {
          label: i18n.t('packages_business_milestone_list_status_progressing'),
          color: 'color-primary'
        },
        WAITING: {
          label: i18n.t('public_status_waiting'),
          color: 'color-info'
        },
        STOP: {
          label: i18n.t('public_status_stop'),
          color: 'color-warning'
        },
        ERROR: {
          label: i18n.t('packages_business_milestone_list_chucuo'),
          color: 'color-danger'
        }
      }

      return NODE_MAP[this.activeNode.nodeType]
        .filter(
          t =>
            dataflowType === 'initial_sync+cdc' ||
            (dataflowType === 'cdc' && !['SNAPSHOT_READ'].includes(t.key)) ||
            (dataflowType === 'initial_sync' && !['OPEN_CDC_READ', 'CDC_READ'].includes(t.key))
        )
        .map(el => {
          const data = nodeMilestones[el.key]
          let t = Object.assign({}, el, data)
          let { status = 'WAITING' } = t
          t.statusColor = STATUS_MAP[status]?.color
          t.statusLabel = STATUS_MAP[status]?.label || '-'
          t.diff =
            t.begin && t.end
              ? calcTimeUnit(t.end - t.begin, 2, {
                  autoHideMs: true
                })
              : '-'
          return t
        })
    },

    errorNodeIds() {
      const nodeMilestones = this.dataflow.attrs?.nodeMilestones || {}
      let result = []
      for (let nodeId in nodeMilestones) {
        const node = nodeMilestones[nodeId]
        let flag = false
        for (let key in node) {
          flag = node[key].status === 'ERROR'
        }
        flag && result.push(nodeId)
      }
      return result
    }
  },

  watch: {
    nodeId(v) {
      this.activeNodeId = v
      this.activeNode = v ? this.$store.getters['dataflow/nodeById'](v) : {}
    }
  },

  methods: {
    handleChange(val, node) {
      this.activeNode = val ? node : {}
      this.$emit('update:nodeId', val)
    },

    handleError(row = {}) {
      this.$confirm(row.errorMessage, i18n.t('packages_business_milestone_list_cuowuxinxi'), {
        type: 'warning',
        closeOnClickModal: false
      })
    },

    getDueTimeAndProgress(data = {}) {
      const { tableTotal, snapshotTableTotal, snapshotRowTotal, snapshotInsertRowTotal, snapshotStartAt } = data
      const progress = snapshotTableTotal && tableTotal ? Math.round((snapshotTableTotal / tableTotal) * 100) : 0
      const usedTime = Time.now() - snapshotStartAt
      let time
      if (!snapshotInsertRowTotal || !snapshotRowTotal || !snapshotStartAt) {
        time = 0
      } else {
        time = snapshotRowTotal / (snapshotInsertRowTotal / usedTime) - usedTime
      }

      return {
        progress,
        time
      }
    },

    handleCustomClass(node) {
      return this.errorNodeIds.includes(node?.id) ? 'error-node' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-line {
  width: 700px;
}
.node-list {
  width: 224px;
  ::v-deep {
    .error-icon {
      display: none;
    }
    .error-node {
      .error-icon {
        display: inline-flex;
      }
    }
  }
}
.milestone-mt-1 {
  margin-top: 15px;
}
.step__line {
  left: 50%;
  top: 24px;
  bottom: 4px;
  border-left: 1px dashed map-get($color, primary);
  transform: translateX(-50%);
}
.step__line_pt {
  padding-bottom: 23px;
}
.loading-circle {
  animation: rotate 3s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
