import { CancelToken, discoveryApi, taskApi } from '@tap/api'
import { validateCron } from '@tap/form'

export default {
  data() {
    const validateTaskName = async (rule, value, callback) => {
      value = value.trim()
      if (!value) {
        callback(new Error(this.$t('packages_business_relation_list_qingshururenwu')))
      } else {
        try {
          const isExist = await taskApi.checkName({
            name: value
          })
          if (isExist) {
            callback(new Error(this.$t('packages_dag_task_form_error_name_duplicate')))
          } else {
            callback()
          }
        } catch (e) {
          callback()
        }
      }
    }
    const validatePrefix = (rule, value, callback) => {
      value = value.trim()
      if (!value) {
        callback(new Error(this.$t('public_form_not_empty')))
      } else if (!/\w+/.test(value)) {
        callback(new Error(this.$t('packages_business_data_server_drawer_geshicuowu')))
      } else {
        callback()
      }
    }
    const validateCrontabExpression = (rule, value, callback) => {
      value = value.trim()
      if (!value) {
        callback(new Error(this.$t('public_form_not_empty')))
      } else if (!validateCron(value)) {
        callback(this.$t('packages_dag_migration_settingpanel_cronbiao'))
      } else {
        callback()
      }
    }

    const cronOptions = [
      {
        label: '仅运行一次',
        value: 'once'
      },
      {
        label: '每10分钟运行一次',
        value: '0 */10 * * * ?'
      },
      {
        label: '每1小时运行一次',
        value: '0 0 * * * ?'
      },
      {
        label: '每天运行一次',
        value: '0 0 0 * * ?'
      },
      {
        label: '自定义cron表达式',
        value: 'custom'
      }
    ]
    return {
      cronOptions,
      formRules: {
        taskName: [{ validator: validateTaskName, trigger: 'blur' }],
        newTableName: [{ required: true }],
        prefix: [{ validator: validatePrefix, trigger: 'blur' }],
        'task.crontabExpression': [
          { required: true, message: this.$t('public_form_not_empty'), trigger: ['blur', 'change'] },
          { validator: validateCrontabExpression, trigger: ['blur', 'change'] }
        ]
      }
    }
  },

  computed: {
    highlightBoard() {
      return this.$store.state.highlightBoard
    }
  },

  unmounted() {
    this.debouncedSearch?.cancel()
    this.cancelSource?.cancel()
  },

  methods: {
    toggleEnableSearch() {
      if (this.enableSearch) {
        this.search = ''
        this.enableSearch = false
      } else {
        this.enableSearch = true
        this.$nextTick(() => {
          this.$refs.search?.focus()
        })
      }
    },

    handleSearch(val) {
      if (!val) {
        this.searchIng = false
        this.debouncedSearch.cancel()
        return
      }
      this.searchIng = true
      this.debouncedSearch(val)
    },

    openRoute(route, newTab = true) {
      if (newTab) {
        window.open(this.$router.resolve(route).href)
      } else {
        this.$router.push(route)
      }
    },

    handleClickName(task) {
      if (!task?.id) return

      let routeName

      if (!['edit', 'wait_start'].includes(task.status)) {
        routeName = task.syncType === 'migrate' ? 'MigrationMonitor' : 'TaskMonitor'
      } else {
        routeName = task.syncType === 'migrate' ? 'MigrateEditor' : 'DataflowEditor'
      }

      this.openRoute({
        name: routeName,
        params: {
          id: task.id
        }
      })
    },

    loadObjects(node, isCurrent = true, queryKey, cancelToken) {
      let where = {
        page: 1,
        pageSize: 10000,
        tagId: node.id,
        range: isCurrent ? 'current' : undefined,
        sourceType: 'table',
        queryKey,
        regUnion: false,
        fields: {
          allTags: 1
        }
      }
      return discoveryApi
        .discoveryList(where, {
          cancelToken
        })
        .then(res => {
          return res.items.map(item =>
            Object.assign(item, {
              isLeaf: true,
              isObject: true,
              connectionId: item.sourceConId,
              LDP_TYPE: 'table',
              parent_id: node.id,
              isVirtual: item.status === 'noRunning'
            })
          )
        })
    },

    async searchObject(search) {
      this.cancelSource?.cancel()
      this.cancelSource = CancelToken.source()
      this.searchIng = true
      const result = await this.loadObjects(this.directory, false, search, this.cancelSource.token)
      const map = result.reduce((obj, item) => {
        let id = item.listtags[0].id
        let children = obj[id] || []
        children.push(item)
        obj[id] = children
        return obj
      }, {})

      const filterTree = node => {
        const { children } = node

        if (children?.length) {
          node.children = children.filter(child => {
            filterTree(child)
            return child.LDP_TYPE === 'folder' && (child.name.includes(search) || child.children.length)
          })
        }

        if (map[node.id]) {
          node.children.push(...map[node.id])
        }
      }

      let root = { ...this.directory }
      filterTree(root)
      this.searchIng = false
      this.filterTreeData = root.children
    },

    handleFindParent(event) {
      const parentNode = event.target?.parentElement
      this.$emit('find-parent', parentNode)
    },

    handleChangeCronType(val) {
      if (val === 'once') {
        this.taskDialogConfig.task.crontabExpressionFlag = false
      } else {
        this.taskDialogConfig.task.crontabExpressionFlag = true
        if (val !== 'custom') {
          this.taskDialogConfig.task.crontabExpression = val
        }
      }
    }
  }
}
