<template>
  <ElDialog
    custom-class="t-dialog"
    :visible.sync="visible"
    @update:visible="handleVisible"
    width="600"
    :close-on-click-modal="false"
  >
    <span slot="title" class="fs-6 fw-sub font-color-dark">
      {{ $t('packages_business_chuangjianfuwu') }}
    </span>
    <ElForm
      hide-required-asterisk
      label-width="80px"
      class="data-server__form overflow-auto flex-1"
      ref="form"
      label-position="top"
      size="mini"
      :model="form"
      :rules="rules"
    >
      <div class="flex gap-4">
        <ElFormItem :label="$t('public_name')" class="flex-1 form-item-name" size="small" prop="name">
          <ElInput v-if="isEdit" v-model="form.name" :placeholder="$t('public_input_placeholder_name')"></ElInput>
          <div v-else class="fw-sub fs-7 font-color-normal">{{ data.name }}</div>
        </ElFormItem>
        <ElFormItem class="flex-1" size="small" :label="$t('packages_business_quanxianfanwei')" prop="acl">
          <ElSelect v-model="form.acl" multiple :disabled="!isEdit" @change="aclChanged" class="w-100">
            <ElOption v-for="item in roles" :label="item.name" :value="item.name" :key="item.id"></ElOption>
          </ElSelect>
        </ElFormItem>
      </div>
      <ElFormItem :label="$t('public_description')" class="flex-1 form-item-name" size="small" prop="description">
        <ElInput
          v-model="form.description"
          type="textarea"
          :placeholder="$t('function_describe_placeholder')"
          :disabled="!isEdit"
        ></ElInput>
      </ElFormItem>
      <!-- 基础信息 -->
      <ul class="flex flex-wrap bg-subtle pt-3 px-1 rounded-4 data-server-form-group">
        <li class="data-server-form-base__item px-2">
          <ElFormItem :label="$t('packages_business_caozuoleixing')" label-width="86px">
            <div class="text">{{ $t('dataExplorer_query') }}</div>
          </ElFormItem>
        </li>
        <li class="data-server-form-base__item px-2">
          <ElFormItem :label="$t('packages_business_fabujiedian')" label-width="86px">
            <div class="text">{{ $t('public_select_option_all') }}</div>
          </ElFormItem>
        </li>
        <li class="data-server-form-base__item px-2">
          <ElFormItem :label="$t('packages_business_jiekouleixing')" label-width="86px">
            <ElSelect v-if="isEdit" v-model="form.apiType" @change="apiTypeChanged">
              <ElOption v-for="(label, value) in apiTypeMap" :key="value" :value="value" :label="label"></ElOption>
            </ElSelect>
            <div v-else class="text">{{ apiTypeMap[data.apiType] }}</div>
          </ElFormItem>
        </li>
        <li class="data-server-form-base__item px-2">
          <ElFormItem :label="$t('public_connection_type')" label-width="86px" prop="connectionType">
            <ElSelect
              v-if="isEdit"
              v-model="form.connectionType"
              filterable
              :loading="!databaseTypes"
              @change="connectionTypeChanged"
            >
              <ElOption v-for="item in databaseTypes" :key="item" :value="item" :label="item"></ElOption>
            </ElSelect>
            <div v-else class="text">{{ data.connectionType }}</div>
          </ElFormItem>
        </li>
        <li class="data-server-form-base__item px-2">
          <ElFormItem :label="$t('public_connection_name')" label-width="86px" prop="connectionId">
            <ElSelect
              v-if="isEdit"
              v-model="form.connectionName"
              filterable
              :loading="!connectionOptions"
              @change="connectionNameChanged"
            >
              <ElOption
                v-for="item in connectionOptions"
                :key="item.name"
                :value="item.name"
                :label="item.name"
              ></ElOption>
            </ElSelect>
            <div v-else class="text">{{ data.connectionName }}</div>
          </ElFormItem>
        </li>
        <li class="data-server-form-base__item">
          <ElFormItem :label="$t('object_list_name')" label-width="86px" prop="tableName">
            <ElSelect v-if="isEdit" v-model="form.tableName" filterable :loading="!tableOptions" @change="tableChanged">
              <ElOption v-for="item in tableOptions" :key="item" :value="item" :label="item"></ElOption>
            </ElSelect>
            <div v-else class="text">{{ data.tableName }}</div>
          </ElFormItem>
        </li>
      </ul>
      <!-- 访问路径设置-->
      <section v-if="tab === 'form'">
        <div class="mt-4 fs-7 data-server-panel__title">{{ $t('packages_business_aPI_path_Settings') }}</div>
        <div class="flex-1 mt-4" size="small">
          <el-radio-group v-model="form.pathAccessMethod" :disabled="!isEdit">
            <el-radio label="default">{{ $t('packages_business_default_path') }}</el-radio>
            <el-radio label="customize">{{ $t('packages_business_custom_path') }}</el-radio>
          </el-radio-group>
        </div>
        <ElFormItem
          class="flex-1 mt-4"
          size="small"
          :label="$t('public_version')"
          prop="apiVersion"
          :rules="rules.apiVersion"
          v-if="form.pathAccessMethod === 'customize'"
        >
          <ElInput v-model="form.apiVersion" :disabled="!isEdit"></ElInput>
        </ElFormItem>
        <ElFormItem
          class="flex-1 mt-4"
          size="small"
          :label="$t('packages_business_prefix')"
          prop="prefix"
          v-if="form.pathAccessMethod === 'customize'"
        >
          <ElInput v-model="form.prefix" :disabled="!isEdit"></ElInput>
        </ElFormItem>
        <ElFormItem
          class="flex-1 mt-4"
          size="small"
          :label="$t('packages_business_base_path')"
          prop="basePath"
          v-if="form.pathAccessMethod === 'customize'"
        >
          <ElInput v-model="form.basePath" :disabled="!isEdit"></ElInput>
        </ElFormItem>
        <ElFormItem
          class="flex-1 mt-4"
          size="small"
          :label="$t('packages_business_path')"
          v-if="form.pathAccessMethod === 'customize'"
        >
          <ElInput v-model="customizePath" :disabled="true"></ElInput>
        </ElFormItem>
      </section>

      <!-- 輸入参数 -->
      <div class="data-server-panel__title">
        <div>
          <span>{{ $t('packages_business_shurucanshu') }}</span>
          <i
            v-if="isEdit && form.apiType === 'customerQuery'"
            class="el-icon-circle-plus icon-button color-primary ml-4"
            @click="addItem('params')"
          ></i>
        </div>
      </div>
      <ElTable class="flex-1" :data="isEdit ? form.params : data.params">
        <ElTableColumn :label="$t('packages_business_canshumingcheng')" prop="name" min-width="120">
          <template #default="{ row, $index }">
            <div v-if="isEdit && $index > 1 && form.apiType === 'customerQuery'">
              <ElFormItem
                :prop="`params.${$index}.name`"
                :error="!form.params[$index].name ? 'true' : ''"
                :show-message="false"
                :rules="rules.param"
              >
                <ElInput v-model="form.params[$index].name" size="mini"></ElInput>
              </ElFormItem>
            </div>
            <div v-else>{{ row.name }}</div>
          </template>
        </ElTableColumn>
        <ElTableColumn :label="$t('public_type')" prop="type">
          <template #default="{ row, $index }">
            <div v-if="isEdit && $index > 1 && form.apiType === 'customerQuery'" min-width="60">
              <ElSelect v-model="form.params[$index].type" size="mini">
                <ElOption v-for="type in typeOptions" :key="type" :value="type" :label="type"></ElOption>
              </ElSelect>
            </div>
            <div v-else>{{ row.type }}</div>
          </template>
        </ElTableColumn>
        <ElTableColumn
          v-if="tab === 'form'"
          :label="$t('meta_table_default')"
          prop="defaultvalue"
          key="defaultvalue"
          min-width="60"
        >
          <template #default="{ row, $index }">
            <div v-if="isEdit && row.defaultvalue !== undefined">
              <ElInput v-model="form.params[$index].defaultvalue" size="mini"></ElInput>
            </div>
            <div v-else>{{ row.defaultvalue }}</div>
          </template>
        </ElTableColumn>
        <ElTableColumn :label="$t('public_description')" prop="description" min-width="100">
          <template #default="{ row, $index }">
            <div v-if="isEdit && $index > 1 && form.apiType === 'customerQuery'">
              <ElInput v-model="form.params[$index].description" size="mini"></ElInput>
            </div>
            <div v-else>{{ row.description }}</div>
          </template>
        </ElTableColumn>
        <ElTableColumn v-if="debugParams" :label="$t('packages_business_canshuzhi')" key="value" min-width="100">
          <template #default="{ row }">
            <ElInput v-model="debugParams[row.name]" size="mini"></ElInput>
          </template>
        </ElTableColumn>
        <ElTableColumn v-if="isEdit && form.apiType === 'customerQuery'" align="center" width="60">
          <template #default="{ $index }">
            <i v-if="$index > 1" class="el-icon-remove icon-button" @click="removeItem('params', $index)"></i>
          </template>
        </ElTableColumn>
      </ElTable>

      <template v-if="data.apiType === 'customerQuery' || form.apiType === 'customerQuery'">
        <!-- 筛选条件 -->
        <div class="data-server-panel__title">
          <div>
            <span>{{ $t('packages_business_shaixuantiaojian') }}</span>
            <i v-if="isEdit" class="el-icon-circle-plus icon-button color-primary ml-4" @click="addItem('where')"></i>
          </div>
        </div>
        <ul v-if="isEdit">
          <li v-for="(item, index) in form.where" class="flex align-items-center" :key="index">
            <ElSelect v-model="form.where[index].fieldName" class="mr-4">
              <ElOption
                v-for="opt in allFields"
                :key="opt.id"
                :value="opt.field_name"
                :label="opt.field_name"
              ></ElOption>
            </ElSelect>
            <ElSelect v-model="form.where[index].operator" size="mini" class="mr-4">
              <ElOption v-for="item in operatorOptions" :key="item" :value="item" :label="item"></ElOption>
            </ElSelect>
            <ElSelect v-model="form.where[index].parameter" class="mr-4">
              <ElOption v-for="opt in parameterOptions" :key="opt.name" :value="opt.name" :label="opt.name"></ElOption>
            </ElSelect>
            <ElSelect v-model="form.where[index].condition" size="mini" class="mr-4">
              <template v-for="item in conditionOptions">
                <ElOption
                  v-if="item !== 'null' || index === form.where.length - 1"
                  :key="item"
                  :value="item"
                  :label="item"
                ></ElOption>
              </template>
            </ElSelect>
            <i class="el-icon-remove icon-button" @click="removeItem('where', index)"></i>
          </li>
        </ul>
        <ul v-else>
          <li v-for="(item, index) in data.where" class="flex align-items-center" :key="index">
            <span class="mr-4">{{ item.fieldName }}</span>
            <span class="mr-4">{{ item.operator }}</span>
            <span class="mr-4">{{ item.parameter }}</span>
            <span>{{ item.condition }}</span>
          </li>
        </ul>

        <!-- 排列条件 -->
        <div class="data-server-panel__title">
          <div>
            <span>{{ $t('packages_business_pailietiaojian') }}</span>
            <i v-if="isEdit" class="el-icon-circle-plus icon-button color-primary ml-4" @click="addItem('sort')"></i>
          </div>
        </div>
        <ul v-if="isEdit">
          <li v-for="(item, index) in form.sort" class="flex align-items-center" :key="index">
            <ElSelect v-model="form.sort[index].fieldName" class="mr-4">
              <ElOption
                v-for="opt in allFields"
                :key="opt.id"
                :value="opt.field_name"
                :label="opt.field_name"
              ></ElOption>
            </ElSelect>
            <ElSelect v-model="form.sort[index].type" size="mini" class="mr-4">
              <ElOption value="asc" label="ASC"></ElOption>
              <ElOption value="desc" label="DESC"></ElOption>
            </ElSelect>
            <i class="el-icon-remove icon-button" @click="removeItem('sort', index)"></i>
          </li>
        </ul>
        <ul v-else>
          <li v-for="(item, index) in data.sort" class="flex align-items-center" :key="index">
            <span class="mr-4">{{ item.fieldName }}</span>
            <span>{{ item.type }}</span>
          </li>
        </ul>
      </template>

      <!-- 输出结果 -->
      <template v-if="tab === 'form'">
        <div class="data-server-panel__title">{{ $t('packages_business_shuchujieguo') }}</div>
        <ElTable
          ref="fieldTable"
          :data="isEdit ? allFields : data.fields"
          :loading="fieldLoading"
          @selection-change="fieldsChanged"
        >
          <ElTableColumn v-if="isEdit" type="selection" width="55"></ElTableColumn>
          <ElTableColumn :label="$t('public_name')" prop="field_name" min-width="200"></ElTableColumn>
          <ElTableColumn :label="$t('public_type')" prop="originalDataType" min-width="120"></ElTableColumn>
          <ElTableColumn :label="$t('public_description')" prop="comment" min-width="50"></ElTableColumn>
        </ElTable>
      </template>
      <!--服务访问 -->
      <template v-if="tab === 'form'">
        <div class="data-server-panel__title">
          <span>{{ $t('packages_business_fuwufangwen') }}</span>
          <ElButton
            v-if="this.data.id && form.pathAccessMethod === 'default' && data.status !== 'active'"
            type="primary"
            size="mini"
            @click="generate"
            >{{ $t('application_generator') }}</ElButton
          >
        </div>
        <ul v-if="form.path" class="data-server-path">
          <li v-for="item in urlList" :key="item.method" class="data-server-path__item">
            <div class="data-server-path__method" :class="'method--' + item.method">
              {{ item.method }}
            </div>
            <div class="data-server-path__value line-height">{{ item.url }}</div>
          </li>
        </ul>
      </template>

      <!-- {{$t('packages_business_diaoyongfangshi')}} -->
      <template v-if="tab === 'debug'">
        <div class="data-server-panel__title">{{ $t('packages_business_diaoyongfangshi') }}</div>
        <div class="flex">
          <div class="data-server-debug__url flex-1 flex align-center mr-4">
            <ElSelect v-model="debugMethod" class="data-server-debug__method mr-4" style="width: 100px" size="mini">
              <ElOption v-for="(url, method) in urls" :key="method" :value="method"></ElOption>
            </ElSelect>
            <div>{{ urls[debugMethod] }}</div>
          </div>
          <ElButton type="primary" size="mini" @click="debugData">{{ $t('public_button_submit') }}</ElButton>
        </div>
      </template>
      <template v-if="tab === 'debug'">
        <div class="data-server-panel__title">{{ $t('packages_business_fanhuijieguo') }}</div>
        <VCodeEditor
          height="280"
          lang="json"
          :options="{ printMargin: false, readOnly: true, wrap: 'free' }"
          :value="debugResult"
        ></VCodeEditor>
      </template>

      <!--  {{$t('packages_business_shilidaima2')}} -->
      <template v-if="tab === 'debug'">
        <div class="flex position-relative mt-8 mb-4">
          <div class="position-absolute top-0 start-0 fs-7 fw-sub font-color-dark" style="line-height: 36px">
            {{ $t('packages_business_shilidaima') }}
          </div>
          <ElTabs v-model="templateType" class="data-server__tabs flex-1">
            <ElTabPane label="JAVA" name="java"></ElTabPane>
            <ElTabPane label="JS" name="javascript"></ElTabPane>
            <ElTabPane label="PYTHON" name="python"></ElTabPane>
          </ElTabs>
        </div>
        <VCodeEditor
          height="280"
          :lang="templateType"
          :options="{ printMargin: false, readOnly: true, wrap: 'free' }"
          :value="templates[templateType]"
        ></VCodeEditor>
      </template>
    </ElForm>

    <div slot="footer">
      <el-button @click="handleVisible(false)">{{ $t('public_button_cancel') }}</el-button>
      <el-button type="primary" @click="handleSave()">{{ $t('public_button_save') }}</el-button>
    </div>
  </ElDialog>
</template>

<script>
import { cloneDeep } from 'lodash'
import axios from 'axios'

import i18n from '@tap/i18n'
import { VCodeEditor } from '@tap/component'
import { applicationApi, connectionsApi, databaseTypesApi, metadataInstancesApi, modulesApi, roleApi } from '@tap/api'
import { generateId } from '@tap/shared'

export default {
  name: 'CreateRestApi',
  props: {
    host: String,
    value: Boolean,
    params: Object
  },
  components: { VCodeEditor },
  data() {
    const validateParams = (rule, value, callback) => {
      // eslint-disable-next-line no-control-regex
      if (/^([^\x00-\xff]|[a-zA-Z_$])([^\x00-\xff]|[a-zA-Z0-9_$])*$/.test(value)) {
        callback()
      } else {
        callback(i18n.t('packages_business_geshicuowu'))
      }
    }
    const validateBasePath = (rule, value, callback) => {
      // eslint-disable-next-line no-control-regex
      if (/^[a-zA-Z\$_\u4e00-\u9fa5][a-zA-Z\u4e00-\u9fa5\d\$_]*$/.test(value)) {
        callback()
      } else {
        callback(i18n.t('packages_business_validate'))
      }
    }
    const validatePrefix = (rule, value, callback) => {
      // eslint-disable-next-line no-control-regex
      if (/^[a-zA-Z\$_\u4e00-\u9fa5][a-zA-Z\u4e00-\u9fa5\d\$_]*$/.test(value) || value === '') {
        callback()
      } else {
        callback(i18n.t('packages_business_validate'))
      }
    }

    return {
      loading: false,
      data: {},
      form: {
        pathAccessMethod: 'default',
        apiVersion: 'v1',
        prefix: '',
        basePath: '',
        acl: ['admin']
      },
      tab: 'form',
      isEdit: true,
      rules: {
        name: [{ required: true, message: i18n.t('packages_business_qingshurufuwu'), trigger: 'blur' }],
        acl: [{ required: true, message: i18n.t('packages_business_selectPermissions'), trigger: 'blur' }],
        connectionType: [{ required: true, message: i18n.t('packages_business_qingxuanzelianjie'), trigger: 'blur' }],
        connectionId: [{ required: true, message: i18n.t('shared_cache_placeholder_connection'), trigger: 'blur' }],
        tableName: [{ required: true, message: i18n.t('packages_business_qingxuanzeduixiang'), trigger: 'blur' }],
        param: [{ required: true, validator: validateParams, trigger: ['blur', 'change'] }],
        basePath: [{ required: true, validator: validateBasePath, trigger: ['blur', 'change'] }],
        prefix: [{ required: false, validator: validatePrefix, trigger: ['blur', 'change'] }],
        apiVersion: [{ required: true, validator: validateBasePath, trigger: ['blur', 'change'] }]
      },
      apiTypeMap: {
        defaultApi: i18n.t('packages_business_morenchaxun'),
        customerQuery: i18n.t('packages_business_zidingyichaxun')
      },
      databaseTypes: null,
      connectionOptions: null,
      tableOptions: [],
      typeOptions: ['number', 'string', 'boolean', 'date', 'datetime', 'time'],
      operatorOptions: ['>', '==', '<', '>=', '<=', '!=', 'like'],
      conditionOptions: ['null', 'and', 'or'],
      allFields: [],
      fieldLoading: false,

      debugParams: null,
      debugMethod: 'GET',
      debugResult: '',

      urls: [],

      templates: {},
      templateType: 'java',

      token: '',
      roles: [],
      visible: this.value
    }
  },
  computed: {
    parameterOptions() {
      return this.form?.params?.filter(item => !['page', 'limit'].includes(item.name)) || []
    },
    //计算基础路径
    customizePath() {
      let arr = []
      if (this.form?.apiVersion && this.form?.apiVersion !== '') {
        arr.push(this.form?.apiVersion)
      }
      if (this.form?.prefix && this.form?.prefix !== '') {
        arr.push(this.form?.prefix)
      }
      if (this.form?.basePath && this.form?.basePath !== '') {
        arr.push(this.form?.basePath)
      }
      this.form.path = '/api/' + arr.join('/')
      return '/api/' + arr.join('/')
    },

    urlList() {
      let baseUrl = this.host + this.customizePath

      return [
        {
          method: 'POST',
          url: `${baseUrl}/find`
        },
        {
          method: 'GET',
          url: `${baseUrl}`
        },
        {
          method: 'TOKEN',
          url: `${location.origin + location.pathname}oauth/token`
        }
      ]
    }
  },
  watch: {
    value(v) {
      this.visible = v
      if (v) {
        this.open()
      }
    }
  },
  mounted() {
    this.getRoles()
  },
  methods: {
    // 打开并初始化抽屉
    open(formData) {
      this.tab = 'form'
      this.visible = true
      this.isEdit = false
      this.debugParams = null
      this.debugMethod = 'GET'
      this.debugResult = ''
      this.allFields = []
      this.$refs?.form?.clearValidate()
      this.formatData(formData || {})

      if (!this.data.id) {
        this.edit()
      }
    },
    tabChanged() {
      this.isEdit = false
      let debugParams = null
      if (this.tab === 'debug') {
        debugParams = {}
        this.data.params.forEach(p => {
          debugParams[p.name] = p.defaultvalue || ''
        })
      }
      this.debugParams = debugParams
    },
    formatData(formData = {}) {
      // 兼容老数据类型
      if (formData.apiType === 'customerApi') {
        formData.apiType = 'customerQuery'
      }
      const path = formData?.paths?.[0] || {}
      const {
        id,
        name,
        description,
        status,
        connectionType,
        connectionName,
        connectionId,
        tableName,
        basePath,
        apiVersion,
        prefix,
        pathAccessMethod
      } = formData
      // 若为新建时，则默认值为 ‘默认查询(defaultApi)’ 的值
      let apiType = formData?.apiType || 'defaultApi'
      this.data = {
        status: status || 'generating', // generating,pending,active
        id,
        name,
        description,
        apiType: apiType,
        connectionType,
        connectionName,
        connectionId,
        tableName,
        basePath,
        apiVersion,
        prefix,
        pathAccessMethod,
        method: path.method || 'GET',
        fields: path.fields || [],
        params: path.params || this.getDefaultParams(apiType),
        where: path.where || [],
        sort: path.sort || [],
        path: path.path || '',
        acl: path.acl
      }
      this.form.description = this.data.description
      this.form.acl = path.acl || ['admin']
      let host = this.host
      let _path = this.data.path
      let baseUrl = host + _path

      if (this.data.status === 'active') {
        this.getAPIServerToken(token => {
          this.templates = getTemplate(baseUrl, token)
        })
      }
    },
    // 获取角色
    getRoles() {
      let filter = {
        limit: 500,
        skip: 0
      }
      roleApi.get({ filter: JSON.stringify(filter) }).then(data => {
        this.roles = data?.items || []
      })
    },
    getDefaultParams(apiType) {
      let params = [
        {
          name: 'page',
          type: 'number',
          defaultvalue: '1',
          description: i18n.t('packages_business_fenyebianhao'),
          required: true
        },
        {
          name: 'limit',
          type: 'number',
          defaultvalue: '20',
          description: i18n.t('packages_business_meigefenyefan'),
          required: true
        }
      ]
      if (apiType === 'defaultApi') {
        params.push(
          ...[
            { name: 'sort', type: 'object', description: i18n.t('packages_business_paixu') },
            { name: 'filter', type: 'object', description: i18n.t('module_form_condition') }
          ]
        )
      }
      return params
    },
    // 切换到编辑状态
    edit() {
      this.isEdit = true
      this.form = cloneDeep(this.data)
      // this.form.status = 'active' // 发布状态
      this.form.status = 'pending' // 发布状态
      const basePath = Math.floor(Math.random() * 26 + 10).toString(36) + generateId(10) // 首位要求小写字母
      this.form.basePath = basePath
      this.form.path = `/api/${basePath}`
      this.form.connectionName = this.params.from.name
      this.form.connectionType = this.params.from.database_type
      this.form.connectionId = this.params.from.id
      this.form.tableName = this.params.tableName
      // 若为新建时，则默认值为 ‘默认查询(defaultApi)’ 的值
      this.form.pathAccessMethod = this.data?.pathAccessMethod || 'default'

      let baseUrl = this.host + this.form.path
      this.urls = {
        POST: `${baseUrl}/find`,
        GET: `${baseUrl}`,
        TOKEN: `${location.origin + location.pathname}oauth/token`
      }

      this.getDatabaseTypes()
      let { connectionId, tableName } = this.form
      if (connectionId) {
        this.getTableOptions(connectionId)
      }
      if (connectionId && tableName) {
        this.getFields()
      }
    },
    // 保存，新建和修改
    handleSave(type) {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.handleVisible(false)

          //自定义路径 数据清理
          if (this.form.pathAccessMethod === 'default') {
            this.form.prefix = ''
            this.form.apiVersion = ''
            if (this.form.basePath) {
              this.form.path = '/api/' + this.form.basePath
            }
          }

          let {
            id,
            name,
            description,
            apiType,
            basePath,
            connectionId,
            tableName,
            params,
            where,
            sort,
            fields,
            method,
            path,
            status,
            acl,
            connectionType,
            connectionName,
            apiVersion,
            prefix,
            pathAccessMethod
          } = this.form

          if (params.some(it => !it.name.trim())) {
            return this.$message.error(i18n.t('packages_business_qingshurucanshu'))
          }

          this.loading = true
          let formData = {
            id,
            status,
            name,
            description,
            apiType,
            connectionId,
            connectionName,
            connectionType,
            operationType: method,
            tableName,
            basePath,
            readConcern: '',
            readPreference: '',
            readPreferenceTag: '',

            datasource: connectionId, // 冗余老字段
            tablename: tableName, // 冗余老字段
            apiVersion: apiVersion, // 冗余老字段
            prefix: prefix,
            pathAccessMethod: pathAccessMethod, // 冗余老字段
            listtags: [
              {
                id: this.params.to.id,
                value: this.params.to.value
              }
            ], // 冗余老字段

            paths: [
              {
                name: apiType === 'customerQuery' ? 'customerQuery' : 'findPage', // 冗余老字段
                result: 'Page<Document>', // 冗余老字段
                type: apiType === 'customerQuery' ? 'customerQuery' : 'preset', // 冗余老字段
                acl: acl, // 冗余老字段

                method,
                params,
                where,
                sort,
                fields,
                path
              }
            ]
          }
          if (!type) {
            //生成按钮 不传fields覆盖数据库已有数据 (open 抽屉this.allFields 就清空了数据)
            formData.fields = this.allFields
          }
          let data = await modulesApi.post(formData)
          data.status = 'pending'
          data = await modulesApi.patch(data)
          data.status = 'active'
          data = await modulesApi.patch(data)
          this.loading = false

          // data.connection = connectionId
          // data.source = {
          //   database_type: connectionType,
          //   name: connectionName
          // }
          // this.formatData(data || [])
          this.$emit('save', data, this.params.to)
          this.isEdit = false
        }
      })
    },
    generate() {
      if (this.data.basePath && this.data.basePath !== '') {
        this.$confirm(this.$t('packages_business_confirm_tip'), {
          type: 'warning'
        }).then(resFlag => {
          if (!resFlag) {
            return
          }
          this.generateHttp()
        })
      } else {
        this.generateHttp()
      }
    },
    generateHttp() {
      this.form = cloneDeep(this.data)
      let basePath = uid()
      this.form.basePath = basePath
      this.form.path = `/api/${basePath}`
      this.form.status = 'pending'
      this.$nextTick(() => {
        // save会校验表单项，不加nextTick会导致验证不通过
        this.save('generate')
      })
    },
    // 获取可选数据源类型
    async getDatabaseTypes() {
      this.databaseTypes = null
      const data = await databaseTypesApi.get().catch(() => {
        this.databaseTypes = []
      })
      this.databaseTypes =
        data
          ?.filter(it => ['mysql', 'sqlserver', 'oracle', 'mongodb', 'pg', 'tidb'].includes(it.pdkId))
          ?.map(it => it.name) || []
      // this.databaseTypes = data?.map(it => it.name) || []
      this.getConnectionOptions()
    },
    // 获取可选连接
    async getConnectionOptions() {
      let filter = {
        fields: { id: true, name: true, connection_type: true, status: true, user_id: true, database_type: true },
        where: {
          database_type: this.form.connectionType
            ? this.form.connectionType
            : {
                in: this.databaseTypes
              },
          connection_type:
            process.env.VUE_APP_MODE !== 'msa'
              ? {
                  in: ['source_and_target', 'target']
                }
              : undefined
        }
      }
      let type = this.form.connectionType
      if (type) {
        filter.where.database_type = type
      }
      this.connectionOptions = null
      const data = await connectionsApi.listAll(filter).catch(() => {
        this.connectionOptions = []
      })
      this.connectionOptions = data?.map(it => ({ name: it.name, type: it.database_type, id: it.id })) || []
    },
    // 获取可选表，依赖连接id
    async getTableOptions(id) {
      this.tableOptions = null
      const data = await metadataInstancesApi.getTables(id).catch(() => {
        this.tableOptions = []
      })
      this.tableOptions = data || []
    },
    // 获取输出结果中可配置的所有字段
    async getFields() {
      this.fieldLoading = true
      let filter = {
        where: { 'source.id': this.form.connectionId, original_name: this.form.tableName, is_deleted: false }
      }
      const data = await metadataInstancesApi
        .get({
          filter: JSON.stringify(filter)
        })
        .finally(() => {
          this.fieldLoading = false
        })
      this.allFields =
        data?.items?.[0]?.fields?.map(it => {
          return Object.assign({}, it, {
            id: it.id,
            field_name: it.field_name,
            originalDataType: it.data_type,
            comment: ''
          })
        }) || []
      if (!this.form.id) {
        this.form.fields = cloneDeep(this.allFields)
      }
      // 回显输出结果中被选中的字段
      const fields = this.form.fields || []
      this.$nextTick(() => {
        fields.forEach(row => {
          this.$refs?.fieldTable.toggleRowSelection(this.allFields.find(it => it.id === row.id))
        })
      })
    },
    apiTypeChanged() {
      this.form.params = this.getDefaultParams(this.form.apiType)
    },
    connectionTypeChanged() {
      this.getConnectionOptions()
      this.form.connectionName = ''
      this.form.tableName = ''
      this.form.fields = []
      this.allFields = []
      this.$refs?.form?.clearValidate('connectionType')
    },
    connectionNameChanged() {
      // 选择连接名时自动填充连接类型
      const connection = this.connectionOptions.find(it => it.name === this.form.connectionName)
      this.form.connectionType = connection.type
      this.form.connectionId = connection.id
      this.form.tableName = ''
      this.form.fields = []
      this.allFields = []
      this.getTableOptions(connection.id)
      this.$refs?.form?.clearValidate('connectionId')
    },
    tableChanged() {
      this.form.fields = []
      this.allFields = []
      this.getFields()
      this.$refs?.form?.clearValidate('tableName')
    },
    aclChanged() {
      this.$refs?.form?.clearValidate('acl')
    },
    fieldsChanged(val) {
      this.form.fields = val
    },
    addItem(key) {
      let map = {
        params: { name: '', type: 'string', description: '', defaultvalue: '' },
        where: { fieldName: '', parameter: '', operator: '>', condition: 'and' },
        sort: { fieldName: '', type: 'asc' }
      }
      if (key === 'where') {
        let list = this.form.where
        let lastItem = list[list.length - 1]
        if (list.length && lastItem.condition === 'null') {
          lastItem.condition = 'and'
        }
      }
      this.form[key].push(cloneDeep(map[key]))
    },
    removeItem(key, index) {
      this.form[key].splice(index, 1)
    },
    async getAPIServerToken(callback) {
      const clientInfo = await applicationApi.get({
        filter: JSON.stringify({
          where: {
            clientName: 'Data Explorer'
          }
        })
      })
      const clientInfoItem = clientInfo?.items?.[0] || {}

      const paramsStr =
        'grant_type=client_credentials&client_id=' + clientInfoItem.id + '&client_secret=' + clientInfoItem.clientSecret
      const result = await axios.create().post('/oauth/token', paramsStr)
      const token = result?.data?.access_token || ''
      this.token = token
      callback && callback(token)
    },
    async debugData() {
      let http = axios.create()
      let params = this.debugParams
      let method = this.debugMethod
      if (method === 'TOKEN') {
        this.debugResult = JSON.stringify(
          {
            access_token: this.token,
            expires_in: 1209599,
            scope: 'admin',
            token_type: 'Bearer'
          },
          null,
          2
        )
      } else {
        let url = this.urls[this.debugMethod] + '?access_token=' + this.token
        for (const key in params) {
          const value = params[key]
          if (!value) {
            delete params[key]
          }
        }
        if (method === 'GET') {
          params = {
            params: params
          }
        }
        let result = await http[method.toLowerCase()](url, params).catch(error => {
          let result = error?.response?.data
          result = result ? JSON.stringify(result, null, 2) : ''
          this.debugResult = result
        })
        if (result) {
          this.debugResult = JSON.stringify(result?.data, null, 2)
        }
      }
    },

    handleVisible(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style lang="scss">
.t-dialog.el-dialog {
  position: absolute;
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 64px);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto !important;
  overflow: hidden;
  .el-dialog__header {
    padding: 24px !important;
  }
  .el-dialog__body {
    padding: 0 24px !important;
    margin-bottom: 24px;
    overflow-y: auto;
  }
  .el-dialog__footer {
    padding: 0 24px 24px !important;
  }
}
</style>

<style lang="scss" scoped>
.icon-button {
  font-size: 15px;
  cursor: pointer;
}
.el-icon-remove {
  color: map-get($iconFillColor, normal);
}
.line-height {
  line-height: 22px;
}
.data-server__tabs {
  ::v-deep {
    .el-tabs__nav-wrap.is-top {
      padding-left: 112px;
    }
    .el-tabs__header.is-top {
      margin: 0;
    }
  }
}
.data-server__form {
  ::v-deep {
    .el-form-item__label {
      padding-bottom: 8px;
      line-height: 1.571428571;
    }
    .el-form-item {
      margin-bottom: 16px;
      &__content {
        .el-select {
          width: 100%;
        }
      }
    }
  }
}

.data-server-form-group {
  .data-server-form-base__item {
    max-width: 33.3333333333%;
    flex: 0 0 33.3333333333%;
    .text {
      font-size: 12px;
      word-break: break-word;
    }
  }
}

.data-server-panel__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
  height: 22px;
  line-height: 22px;
  font-weight: 500;
  font-size: 14px;
  color: map-get($fontColor, dark);
  user-select: none;
}
.data-server-path__item {
  display: flex;
  align-items: center;
  padding: 8px 0;
  font-family: PingFangSC-Regular, PingFang SC;
}
.data-server-path__method {
  margin-right: 40px;
  width: 62px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  border-radius: 2px;

  color: map-get($fontColor, white);
  &.method--POST {
    background: #478c6c;
  }
  &.method--GET {
    background: #09819c;
  }
  &.method--TOKEN {
    background: #f2994b;
  }
}
.data-server-debug__url {
  border: 1px solid map-get($borderColor, form);
  background: map-get($bgColor, form);
  border-radius: 4px;
  font-family: PingFangSC-Regular, PingFang SC;
}
.data-server__form {
  ::v-deep {
    .form-item-name {
      .el-form-item__content {
        margin-left: 0 !important;
      }
    }
  }
}
.data-server-debug__method {
  ::v-deep {
    .el-input__inner {
      border: none;
      background: transparent;
    }
  }
}
</style>
