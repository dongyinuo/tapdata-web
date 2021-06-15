export default function (vm) {
  return {
    defaultModel: {
      connection_type: 'source'
    },
    items: [
      {
        type: 'radio',
        field: 'connection_type',
        label: vm.$t('dataForm.form.connectionType'),
        options: [
          { label: vm.$t('dataForm.form.options.source'), value: 'source' }
        ],
        required: true
      },
      {
        type: 'input',
        field: 'database_host',
        trim: true,
        label: vm.$t('dataForm.form.host'),
        rules: [
          {
            required: true,
            validator: (rule, value, callback) => {
              let port = vm.model['database_port']
              if (!value || !value.trim()) {
                callback(new Error(vm.$t('dataForm.error.noneHost')))
              } else if (!port || !port.trim()) {
                callback(new Error(vm.$t('dataForm.error.nonePort')))
              } else if (!/\d+/.test(port)) {
                callback(new Error(vm.$t('dataForm.error.portNumber')))
              } else if (port < 1 || port > 65535) {
                callback(new Error(vm.$t('dataForm.error.portRange')))
              } else {
                callback()
              }
            }
          }
        ],
        appendSlot: h => {
          return h('FbInput', {
            props: {
              value: vm.model['database_port'],
              config: {
                placeholder: vm.$t('dataForm.form.port')
              }
            },
            on: {
              input(val) {
                vm.model['database_port'] = val
              }
            }
          })
        }
      },
      {
        type: 'input',
        field: 'database_name',
        label: vm.$t('dataForm.form.databaseName'),
        required: true
      },
      {
        type: 'input',
        field: 'database_owner',
        label: vm.$t('dataForm.form.databaseSchema'),
        required: true
      },
      {
        type: 'input',
        field: 'database_username',
        label: vm.$t('dataForm.form.userName'),
        required: true
      },
      {
        type: 'input',
        field: 'plain_password',
        label: vm.$t('dataForm.form.password'),
        domType: 'password',
        showPassword: true,
        required: true
      },
      {
        type: 'input',
        field: 'node_name',
        label: vm.$t('dataForm.form.nodeName'),
        required: true
      },
      {
        type: 'input',
        field: 'table_filter',
        label: vm.$t('dataForm.form.tableFilter'),
        tips: vm.$t('dataForm.form.tableFilterTips'),
        maxlength: 500,
        showWordLimit: true
      },
      {
        type: 'input',
        field: 'additionalString',
        label: vm.$t('dataForm.form.additionalString')
      }
    ]
  }
}
