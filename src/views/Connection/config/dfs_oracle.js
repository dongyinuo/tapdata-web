export default function (vm) {
  return {
    form: {
      labelPosition: 'left',
      labelWidth: '120px'
    },
    defaultModel: {
      connection_type: 'source_and_target',
      thin_type: 'SID'
    },
    items: [
      {
        type: 'input',
        field: 'database_host',

        disabled: false,
        label: vm.$t('dataForm.form.host'),
        rules: [
          {
            required: true,
            validator(rule, value, callback) {
              if (!value || !value.trim()) {
                callback(new Error(vm.$t('dataForm.error.noneHost')))
              } else {
                callback()
              }
            }
          }
        ]
      },
      {
        type: 'radio',
        field: 'thin_type',
        label: vm.$t('dataForm.form.connectionMode'),
        customClass: 'large-item',
        isVertical: false,
        button: true,
        options: [
          { label: 'SID', value: 'SID' },
          { label: 'SERVICE NAME', value: 'SERVICE_NAME' }
        ],
        required: true
      },
      {
        type: 'input',
        field: 'database_port',
        customClass: 'small-item',
        label: vm.$t('dataForm.form.port'),
        required: true,
        rules: [
          {
            required: true,
            validator(rule, value, callback) {
              if (!value) {
                callback(new Error(vm.$t('dataForm.error.nonePort')))
              } else if (!/^\d+$/.test(value)) {
                callback(new Error(vm.$t('dataForm.error.portNumber')))
              } else if (value < 1 || value > 65535) {
                callback(new Error(vm.$t('dataForm.error.portRange')))
              } else {
                callback()
              }
            }
          }
        ]
      },
      {
        type: 'input',
        field: 'database_name',
        label: vm.$t('dataForm.form.databaseName'),
        required: true,
        dependOn: [
          {
            triggerOptions: [
              {
                field: 'thin_type',
                value: 'SERVICE_NAME'
              }
            ],
            triggerConfig: {
              label: vm.$t('dataForm.form.serviceName')
            }
          }
        ]
      },
      {
        type: 'input',
        field: 'database_username',
        label: vm.$t('dataForm.form.userName')
      },
      {
        type: 'input',
        field: 'plain_password',
        label: vm.$t('dataForm.form.password'),
        domType: 'password',
        showPassword: true
      },
      {
        type: 'input',
        field: 'database_owner',
        label: vm.$t('dataForm.form.databaseOwner'),
        rules: [
          {
            required: true,
            validator: (rule, v, callback) => {
              vm.model.database_owner = v.toUpperCase()
              if (!v) {
                callback(new Error(vm.$t('dataForm.form.databaseOwner') + vm.$t('formBuilder.noneText')))
              } else {
                callback()
              }
            }
          }
        ]
      },
      {
        type: 'input',
        field: 'additionalString',
        label: vm.$t('dataForm.form.additionalString')
      },
      {
        type: 'select',
        field: 'database_datetype_without_timezone',
        label: vm.$t('dataForm.form.timeZone'),
        tip: vm.$t('dataForm.form.timeZoneTips'),
        options: [],
        show: true
      }
    ]
  }
}
