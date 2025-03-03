<template>
  <div class="flex flex-column w-100 h-100">
    <div class="flex px-6 py-3 border-bottom align-center">
      <span class="fs-6">{{ $t('webhook_alerts') }}</span>
      <ElButton class="ml-auto" size="small" type="primary" @click="addWebhook">{{
        $t('webhook_alerts_add')
      }}</ElButton>
    </div>

    <div class="flex-1">
      <ElTable ref="table" row-key="id" :data="list" height="100%" v-loading="loading">
        <el-table-column :label="$t('webhook_server_url')" prop="url"> </el-table-column>
        <el-table-column :label="$t('public_remark')" prop="mark" width="240"></el-table-column>
        <el-table-column :label="$t('public_status')" prop="pingResult" width="100">
          <template #default="{ row }">
            <VIcon v-if="row.pingResult === 'SUCCEED'" size="20" class="color-success">success-filled</VIcon>
            <VIcon v-else class="color-danger" size="20">circle-close-filled</VIcon>
          </template>
        </el-table-column>
        <el-table-column :label="$t('public_operation')" width="240">
          <template #default="{ row }">
            <div class="flex gap-2 align-center">
              <ElLink @click="viewDetail(row, $event)" type="primary">{{ $t('public_button_details') }} </ElLink>
              <ElDivider direction="vertical" class="mx-0"></ElDivider>
              <ElLink @click="viewHistory(row, $event)" type="primary">{{ $t('webhook_send_log') }} </ElLink>
              <ElDivider direction="vertical" class="mx-0"></ElDivider>
              <ElLink @click="delWebhook(row, $event)" type="danger">{{ $t('public_button_delete') }} </ElLink>
            </div>
          </template>
        </el-table-column>
        <el-table-column :label="$t('webhook_switch')" prop="open" width="120">
          <template #default="{ row }">
            <ElSwitch :disabled="switchStateMap[row.id]" :value="row.open" @change="handleSwitch(row)"></ElSwitch>
          </template>
        </el-table-column>
      </ElTable>
    </div>

    <ElDrawer
      :visible="drawerState.visible"
      :wrapperClosable="false"
      @update:visible="drawerState.visible = $event"
      @closed="afterClose"
    >
      <template #title>
        <span class="fs-6 font-color-dark fw-sub">{{
          $t(form.id ? 'webhook_alerts_detail' : 'webhook_alerts_add')
        }}</span>
      </template>
      <div class="flex flex-column h-100">
        <div class="flex-1 px-4 overflow-y-auto" ref="formWrapper">
          <ElForm class="flex-1" label-position="top" :model="form" :rules="rules" ref="form">
            <ElFormItem :label="$t('webhook_event_type')" prop="hookTypes">
              <ElSelectTree
                v-model="form.hookTypes"
                collapse-tags
                filterable
                multiple
                show-checkbox
                :data="eventData"
                class="w-100"
              ></ElSelectTree>
            </ElFormItem>
            <ElFormItem :label="$t('webhook_server_url')" prop="url">
              <ElInput v-model="form.url"></ElInput>
            </ElFormItem>
            <ElFormItem :label="$t('http_header')" prop="customHttpHeaders">
              <ElInput
                v-model="form.customHttpHeaders"
                :placeholder="$t('http_header_ph')"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 6 }"
              ></ElInput>
            </ElFormItem>
            <ElFormItem prop="customTemplate">
              <template #label>
                <span>
                  <span class="align-middle">{{ $t('webhook_custom_template') }}</span>
                  <ElTooltip :content="$t('webhook_custom_template_tip')">
                    <VIcon class="align-middle ml-1">question-circle</VIcon>
                    <template #content>
                      <HighlightCode
                        theme="atom-one-dark"
                        :code="$t('webhook_custom_template_tip')"
                        language="javascript"
                      ></HighlightCode>
                    </template>
                  </ElTooltip>
                </span>
              </template>
              <JsonEditor
                v-model="form.customTemplate"
                :options="{
                  options: { showPrintMargin: false, useWrapMode: true }
                }"
                @init="initJsonEditor"
              ></JsonEditor>
            </ElFormItem>
            <ElFormItem :label="$t('public_remark')" prop="mark">
              <ElInput v-model="form.mark"></ElInput>
            </ElFormItem>
          </ElForm>
        </div>

        <div class="text-left p-4">
          <ElButton @click="sendPing" :loading="drawerState.ping" type="primary">{{
            $t('webhook_send_ping')
          }}</ElButton>
          <ElButton @click="save" :loading="drawerState.saving" type="primary">{{ $t('public_button_save') }}</ElButton>
          <ElButton @click="drawerState.visible = false">{{ $t('public_button_cancel') }}</ElButton>
        </div>
      </div>
    </ElDrawer>

    <ElDrawer
      :visible="historyState.visible"
      :wrapperClosable="false"
      @update:visible="historyState.visible = $event"
      :size="800"
      @closed="afterCloseHistory"
    >
      <template #title>
        <span>
          <span class="fs-6 font-color-dark fw-sub">{{ $t('webhook_send_log') }}</span>
          <span class="font-color-sslight ml-2">{{ $t('webhook_send_log_desc') }}</span>
        </span>
      </template>
      <div class="flex flex-column h-100" v-loading="historyState.loading">
        <div class="flex-1 px-4 overflow-y-auto" ref="historyList">
          <el-collapse
            v-model="historyState.collapse"
            class="history-collapse border-0"
            v-if="historyState.list.length"
          >
            <el-collapse-item v-for="item in historyState.list" :key="item.id" class="rounded-lg">
              <template #title>
                <div class="flex align-center flex-1 pl-3">
                  <VIcon v-if="item.historyStatus === 'SUCCEED'" size="16" class="color-success">success-filled</VIcon>
                  <VIcon v-else class="color-danger" size="16">circle-close-filled</VIcon>
                  <span class="ml-2">{{ item.id }}</span>
                  <span class="ml-auto pr-4">{{ item.createAtLabel }}</span>
                </div>
              </template>
              <div class="position-relative">
                <ElTabs>
                  <ElTabPane :label="$t('public_request')">
                    <div class="px-4">
                      <div class="lh-base">{{ $t('public_request_headers') }}</div>
                      <HighlightCode
                        class="rounded-lg mt-2 mb-4 overflow-hidden"
                        :code="item.requestHeaders || '--'"
                        language="http"
                      ></HighlightCode>

                      <div class="lh-base">{{ $t('public_request_content') }}</div>
                      <div>
                        <HighlightCode
                          class="rounded-lg mt-2 mb-4 overflow-hidden"
                          :code="item.requestBodyFmt"
                          language="json"
                        ></HighlightCode>
                      </div>
                    </div>
                  </ElTabPane>
                  <ElTabPane>
                    <template #label>
                      <span>
                        {{ $t('public_response') }}
                        <ElTag size="mini" type="info" class="rounded-pill ml-1">{{ item.responseCode || '--' }}</ElTag>
                      </span>
                    </template>
                    <div class="px-4">
                      <div class="lh-base">{{ $t('public_response_headers') }}</div>
                      <HighlightCode
                        class="rounded-lg mt-2 mb-4 overflow-hidden"
                        :code="item.responseHeaders || '--'"
                        language="http"
                      ></HighlightCode>

                      <div class="lh-base">{{ $t('public_response_content') }}</div>
                      <HighlightCode
                        class="rounded-lg mt-2 mb-4 overflow-hidden"
                        :code="item.responseResultFmt || '--'"
                        :language="item.responseType"
                      ></HighlightCode>
                    </div>
                  </ElTabPane>
                </ElTabs>
                <ElButton
                  class="position-absolute tabs-extra-btn flex align-center py-0"
                  size="mini"
                  @click="reSend(item)"
                  >{{ $t('public_resend') }}</ElButton
                >
              </div>
            </el-collapse-item>
          </el-collapse>

          <VEmpty v-else></VEmpty>
        </div>
        <div class="p-4">
          <el-pagination
            background
            layout="->,total, sizes,  prev, pager, next, jumper"
            :current-page.sync="page.current"
            :page-sizes="[10, 20, 50, 100]"
            :page-size.sync="page.size"
            :total="page.total"
            @size-change="loadHistory(1)"
            @current-change="loadHistory"
          >
          </el-pagination>
        </div>
      </div>
    </ElDrawer>
  </div>
</template>

<script>
import i18n from '@tap/i18n'
import { dayjs } from '@tap/business'
import { settingsApi, webhookApi } from '@tap/api'
import { VEmpty } from '@tap/component'
import { HighlightCode, JsonEditor } from '@tap/form'
import ElSelectTree from 'el-select-tree'

export default {
  name: 'WebhookAlerts',
  components: { ElSelectTree, HighlightCode, VEmpty, JsonEditor },
  data() {
    const validateUrl = (rule, value, callback) => {
      // 正则校验URL
      if (!value) {
        return callback(new Error(this.$t('webhook_server_url_empty')))
      }
      const urlRegex = /^(https?):\/\/[^\s/$.?#].[^\s]*$/
      if (!urlRegex.test(value)) {
        return callback(new Error(this.$t('webhook_server_url_error')))
      }
      callback()
    }

    const validateHookTypes = (rule, value, callback) => {
      if (!value?.length) {
        return callback(new Error(this.$t('webhook_event_type_empty')))
      }
      callback()
    }

    return {
      loading: false,
      list: [],
      drawerState: {
        visible: false,
        ping: false,
        saving: false
      },
      form: {
        id: '',
        url: '',
        customTemplate: `{
    "action": "TaskAlter",
    "hookId": "\${hookId}",
    "actionTime": "\${actionTime}",
    "title": "\${title}",
    "content": "\${content}",
    "actionData": {
        "status": "\${actionData.status}",
        "level": "\${actionData.level}",
        "component":"\${actionData.component}",
        "type":"\${actionData.type}",
        "name":"\${actionData.name}",
        "node":"\${actionData.node}",
        "currentValue": "\${actionData.currentValue}",
        "threshold": "\${actionData.threshold}",
        "lastOccurrenceTime": "\${actionData.lastOccurrenceTime}",
        "tally": "\${actionData.tally}",
        "summary": "\${actionData.summary}",
        "recoveryTime": "\${actionData.recoveryTime}",
        "closeTime": "\${actionData.closeTime}",
        "closeBy": "\${actionData.closeBy}",
        "agentId": "\${actionData.agentId}"
    }
}`,
        hookTypes: [],
        mark: '',
        customHttpHeaders: ''
      },
      rules: {
        // mark: [{ required: true, message: '请输入备注', trigger: 'blur' }],
        url: [{ required: true, validator: validateUrl, trigger: 'blur' }],
        hookTypes: [{ required: true, validator: validateHookTypes, trigger: 'change' }]
      },
      eventData: [
        {
          value: 'task',
          label: i18n.t('public_task_alert'),
          children: []
        }
      ],
      keyMap: {
        TASK_STATUS_ERROR: i18n.t('packages_business_setting_alarmnotification_dangrenwuyudao'),
        TASK_INSPECT_ERROR: i18n.t('packages_business_setting_alarmnotification_dangrenwujiaoyan'),
        TASK_FULL_COMPLETE: i18n.t('packages_business_setting_alarmnotification_dangrenwuquanliang'),
        TASK_INCREMENT_START: i18n.t('packages_business_setting_alarmnotification_dangrenwuzengliang'),
        TASK_STATUS_STOP: i18n.t('packages_business_setting_alarmnotification_dangrenwutingzhi'),
        TASK_INCREMENT_DELAY: i18n.t('packages_business_setting_alarmnotification_dangrenwudezeng'),
        DATANODE_CANNOT_CONNECT: i18n.t('packages_business_setting_alarmnotification_dangshujuwufa'),
        DATANODE_HTTP_CONNECT_CONSUME: i18n.t('packages_business_setting_alarmnotification_dangshujuyuanwang'),
        DATANODE_TCP_CONNECT_CONSUME: i18n.t('packages_business_setting_alarmnotification_dangshujuyuanxie'),
        DATANODE_AVERAGE_HANDLE_CONSUME: i18n.t('packages_business_setting_alarmnotification_dangshujuyuanjie'),
        PROCESSNODE_AVERAGE_HANDLE_CONSUME: i18n.t('packages_business_setting_alarmnotification_dangjiediandeping'),
        INSPECT_TASK_ERROR: i18n.t('packages_business_setting_alarmnotification_dangjiaoyanrenwucuowu'),
        INSPECT_COUNT_ERROR: i18n.t('packages_business_setting_alarmnotification_dangjiaoyanrenwushuliangcuowu'),
        INSPECT_VALUE_ERROR: i18n.t('packages_business_setting_alarmnotification_dangjiaoyanrenwuzhicuowu'),
        SYSTEM_FLOW_EGINGE_DOWN: i18n.t('packages_business_setting_alarmnotification_dangrenwustop'),
        SYSTEM_FLOW_EGINGE_UP: i18n.t('packages_business_setting_alarmnotification_dangrenwuuP')
      },
      historyState: {
        visible: false,
        loading: false,
        list: [],
        collapse: []
      },
      page: {
        current: 1,
        size: 20,
        total: 0
      },
      switchStateMap: {}
    }
  },
  created() {
    this.loadEventType()
    this.loadData()
  },
  mounted() {},
  methods: {
    async loadData() {
      this.loading = true
      let filter = {
        order: 'createTime DESC'
      }
      const { items = [] } = await webhookApi.list({
        filter: JSON.stringify(filter)
      })

      this.loading = false
      this.list = items
    },
    async loadEventType() {
      const data = await settingsApi.findAlarm()
      this.eventData[0].children = data.map(item => ({
        label: this.keyMap[item.key],
        value: item.key
      }))
    },
    afterClose() {
      this.$refs.form.resetFields()
      this.form.id = ''
    },
    async addWebhook() {
      this.drawerState.visible = true
      this.$refs.form?.clearValidate()

      await this.$nextTick()
      this.jsonEditor?.resize()
      this.$refs.formWrapper && (this.$refs.formWrapper.scrollTop = 0)
    },
    async viewDetail(row) {
      this.drawerState.visible = true

      await this.$nextTick()

      Object.keys(this.form).forEach(key => {
        this.form[key] = row[key]
      })
      this.jsonEditor?.resize()
      this.$refs.formWrapper && (this.$refs.formWrapper.scrollTop = 0)
    },
    async viewHistory({ id }) {
      this.historyState.visible = true
      this.historyState.loading = true
      this.historyState.id = id
      this.loadHistory()

      await this.$nextTick()

      this.$refs.historyList && (this.$refs.historyList.scrollTop = 0)
    },
    mapHistory(item) {
      item.createAtLabel = dayjs(item.createAt).format('YYYY-MM-DD HH:mm:ss')
      if (item.responseResult) {
        item.responseResultFmt = item.responseResult
        item.responseType = 'html'
        if (/content-Type: application\/json/i.test(item.responseHeaders)) {
          item.responseType = 'json'
          item.responseResultFmt = JSON.stringify(JSON.parse(item.responseResult), null, 2)
        }
      }

      if (item.requestBody) {
        item.requestBodyFmt = JSON.stringify(JSON.parse(item.requestBody), null, 2)
      }
      return item
    },
    loadHistory(pageNum = 1) {
      webhookApi
        .history({
          hookId: this.historyState.id,
          pageFrom: (pageNum - 1) * this.page.size,
          pageSize: this.page.size
        })
        .then(({ items, total }) => {
          this.historyState.list = items.map(this.mapHistory)
          this.page.total = total
        })
        .finally(() => (this.historyState.loading = false))
    },
    delWebhook({ id }) {
      this.$confirm(this.$t('packages_ldp_src_tablepreview_querenshanchu'), {
        type: 'warning'
      }).then(async resFlag => {
        if (!resFlag) {
          return
        }
        await webhookApi.deleteOne(id)
        await this.loadData()
      })
    },
    sendPing() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.drawerState.ping = true
          webhookApi
            .ping(this.form)
            .then(() => {
              this.$message.success(this.$t('public_message_send_success'))
              this.form.id && this.viewHistory(this.form)
            })
            .finally(() => (this.drawerState.ping = false))
        }
      })
    },
    save() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.drawerState.saving = true
          webhookApi[this.form.id ? 'update' : 'save'](this.form)
            .then(() => {
              this.$message.success(this.$t('public_message_save_ok'))
              this.drawerState.visible = false
              this.loadData()
            })
            .finally(() => (this.drawerState.saving = false))
        }
      })
    },
    handleSwitch(row) {
      this.$set(this.switchStateMap, row.id, true)
      webhookApi[row.open ? 'close' : 'open'](row.id)
        .then(() => {
          row.open = !row.open
          this.$message.success(this.$t('public_message_operation_success'))
        })
        .catch(() => {
          row.open = !row.open
        })
        .finally(() => {
          this.$delete(this.switchStateMap, row.id)
        })
    },
    async reSend(request) {
      const result = await webhookApi.resend(request)
      Object.assign(request, this.mapHistory(result))
      this.$message.success(this.$t('public_message_send_success'))
    },
    afterCloseHistory() {
      this.historyState.collapse = []
    },
    initJsonEditor(editor) {
      this.jsonEditor = editor
    }
  }
}
</script>

<style scoped lang="scss">
$unreadColor: #ee5353;
// .settingCenter {
// 	height: 100%;
// 	font-size: 12px;
// 	.setting-main {
// 		display: flex;
// 		justify-content: space-between;
// 		height: 100%;
.account {
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 30px 0 0 20px;
  .title {
    padding-bottom: 20px;
    font-size: 14px;
    color: map-get($fontColor, dark);
    font-weight: bold;
  }
  .content {
    width: 600px;
    li {
      display: flex;
      padding: 20px 0;
      .label {
        width: 80px;
      }
      .text {
        width: 400px;
      }
      ::v-deep {
        .el-button.el-button--text {
          padding: 0;
        }
      }
      i {
        cursor: pointer;
      }
      .rotateActive {
        transform: rotate(-360deg);
        transition: all 1s;
      }
      .backActive {
        transition: all 1s;
      }
    }
  }
}

.tabs-extra-btn {
  top: 0;
  right: 16px;
  height: 28px;
}

.history-collapse {
  $bg: #f5f7fa;
  ::v-deep {
    .el-collapse-item {
      &__wrap {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      &__content {
        padding-bottom: 0;
      }
      &__header {
        border-radius: 8px;
        &:hover {
          background-color: $bg;
        }
      }

      &.is-active {
        background-color: $bg;
        .el-collapse-item__header,
        .el-collapse-item__wrap {
          background-color: $bg;
        }
      }
    }

    .hljs {
      background: #fff !important;
    }
  }
}
</style>
<style lang="scss">
.account {
  .form {
    .eye {
      cursor: pointer;
      font-size: 18px;
    }
    // .el-input__inner {
    //   border: 0;
    //   border-radius: 0;
    //   border-bottom: 1px solid #d9d9d9;
    // }
  }
}
</style>
