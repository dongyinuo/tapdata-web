export default function (vm) {
  return {
    form: {
      labelPosition: 'right',
      labelWidth: '200px'
    },
    defaultModel: {
      connection_type: 'target'
    },
    items: [
      {
        type: 'radio',
        field: 'connection_type',
        label: vm.$t('dataForm.form.connectionType'),
        options: [
          {
            label: vm.$t('dataForm.form.options.target'),
            tip: vm.$t('dataForm.form.options.targetTips'),
            value: 'target'
          }
        ],
        required: true
      },
      {
        type: 'input',
        field: 'database_host',

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
        type: 'input',
        field: 'database_port',
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
      // {
      // 	type: 'input',
      // 	field: 'database_host',
      // 	label: vm.$t('dataForm.form.host'),
      // 	rules: [
      // 		{
      // 			required: true,
      // 			validator: (rule, value, callback) => {
      // 				let port = vm.model['database_port'];
      // 				if (!value || !value.trim()) {
      // 					callback(new Error(vm.$t('dataForm.error.noneHost')));
      // 				} else if (!port) {
      // 					callback(new Error(vm.$t('dataForm.error.nonePort')));
      // 				} else if (!/^(0|\+?[1-9][0-9]*)$/.test(port)) {
      // 					callback(new Error(vm.$t('dataForm.error.portNumber')));
      // 				} else if (port < 1 || port > 65535) {
      // 					callback(new Error(vm.$t('dataForm.error.portRange')));
      // 				} else {
      // 					callback();
      // 				}
      // 			}
      // 		}
      // 	],
      // 	appendSlot: h => {
      // 		return h('FbInput', {
      // 			props: {
      // 				value: vm.model['database_port'],
      // 				config: {
      // 					placeholder: vm.$t('dataForm.form.port')
      // 				}
      // 			},
      // 			on: {
      // 				input(val) {
      // 					vm.model['database_port'] = val;
      // 				}
      // 			}
      // 		});
      // 	}
      // },
      {
        type: 'input',
        field: 'database_name',
        label: vm.$t('dataForm.form.databaseName'),
        required: true
      },
      {
        type: 'switch',
        field: 'database_username',
        label: vm.$t('connection_redis_valid'),
        activeValue: 'true',
        inactiveValue: ''
      },
      {
        type: 'input',
        field: 'plain_password',
        label: vm.$t('dataForm.form.password'),
        domType: 'password',
        show: false,
        dependOn: [
          {
            triggerOptions: [
              {
                field: 'database_username',
                value: 'true'
              }
            ],
            triggerConfig: {
              show: true
            }
          }
        ]
      }
    ]
  }
}
