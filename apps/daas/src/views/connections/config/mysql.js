export default function (vm) {
  return {
    form: {
      labelPosition: 'left',
      labelWidth: '160px',
      labelColon: true
    },
    defaultModel: {
      connection_type: 'source_and_target'
    },
    items: [
      {
        type: 'radio',
        field: 'connection_type',
        label: vm.$t('connection_form_connection_type'),
        options: [
          {
            label: vm.$t('connection_form_source_and_target'),
            tip: vm.$t('connection_form_source_and_target_tip'),
            value: 'source_and_target'
          },
          {
            label: vm.$t('connection_form_source'),
            tip: vm.$t('connection_form_source_tip'),
            value: 'source'
          },
          {
            label: vm.$t('connection_form_target'),
            tip: vm.$t('connection_form_target_tip'),
            value: 'target'
          }
        ],
        required: true,
        isVertical: false,
        button: true,
        outerTip: true,
        customClass: 'large-item'
      },
      // {
      // 	type: 'input',
      // 	field: 'database_host',
      // 	label: vm.$t('connection_form_host'),
      // 	rules: [
      // 		{
      // 			required: true,
      // 			validator(rule, value, callback) {
      // 				let port = this.value['database_port'];
      // 				if (!value || !value.trim()) {
      // 					callback(new Error(vm.$t('dataForm.error.noneHost')));
      // 				} else if (!port) {
      // 					callback(new Error(vm.$t('dataForm.error.nonePort')));
      // 				} else if (!/^\d+$/.test(port)) {
      // 					callback(new Error(vm.$t('dataForm.error.portNumber')));
      // 				} else if (port < 1 || port > 65535) {
      // 					callback(new Error(vm.$t('dataForm.error.portRange')));
      // 				} else {
      // 					callback();
      // 				}
      // 			}
      // 		}
      // 	],
      // 	appendSlot: (h, data) => {
      // 		return h('FbInput', {
      // 			props: {
      // 				value: data['database_port'],
      // 				config: {
      // 					placeholder: vm.$t('connection_form_port')
      // 				}
      // 			},
      // 			on: {
      // 				input(val) {
      // 					data['database_port'] = val;
      // 				}
      // 			}
      // 		});
      // 	}
      // },
      {
        type: 'input',
        field: 'database_host',
        label: vm.$t('connection_form_host'),
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
        label: vm.$t('connection_form_port'),
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
        label: vm.$t('connection_form_database_name'),
        required: true
      },
      {
        type: 'input',
        field: 'database_username',
        label: vm.$t('connection_form_database_username')
      },
      {
        type: 'input',
        field: 'plain_password',
        label: vm.$t('connection_form_database_password'),
        domType: 'password',
        showPassword: true
      },
      {
        type: 'switch',
        field: 'schemaAutoUpdate',
        label: vm.$t('connection_form_reload_schema')
      },
      {
        type: 'input',
        field: 'table_filter',
        domType: 'textarea',
        label: vm.$t('connection_form_table_filter'),
        tips: vm.$t('connection_form_database_owner_tip'),
        maxlength: 500,
        showWordLimit: true
      },
      {
        type: 'input',
        field: 'additionalString',
        label: vm.$t('connection_form_additional_string')
      },
      {
        type: 'select',
        field: 'database_datetype_without_timezone',
        label: vm.$t('dataForm.form.timeZone'),
        tips: vm.$t('connection_form_impact_type'),
        options: [],
        show: true
      },
      {
        type: 'switch',
        field: 'shareCdcEnable',
        label: vm.$t('connection_form_shared_mining'),
        tips: vm.$t('connection_form_shared_mining_tip'),
        show: true,
        dependOn: [
          {
            triggerOptions: [
              {
                field: 'connection_type',
                value: 'target'
              }
            ],
            triggerConfig: {
              show: false
            }
          }
        ]
      },
      {
        type: 'switch',
        field: 'showShareConfig',
        show: false
      },
      {
        type: 'select',
        field: 'persistenceMongodb_uri_db',
        label: vm.$t('share_form_setting_connection_name'),
        options: [],
        required: true,
        show: false,
        dependOn: [
          {
            triggerOptions: [
              {
                field: 'shareCdcEnable',
                value: true
              },
              {
                field: 'showShareConfig',
                value: true
              }
            ],
            triggerConfig: {
              show: true
            }
          }
        ]
      },
      {
        type: 'slot',
        slot: 'shareCdc-tip',
        show: false,
        dependOn: [
          {
            triggerOptions: [
              {
                field: 'shareCdcEnable',
                value: true
              },
              {
                field: 'showShareConfig',
                value: true
              }
            ],
            triggerConfig: {
              show: true
            }
          }
        ]
      },
      {
        type: 'select',
        field: 'persistenceMongodb_collection',
        label: vm.$t('share_form_setting_table_name'),
        options: [],
        allowCreate: true,
        filterable: true,
        required: true,
        show: false,
        dependOn: [
          {
            triggerOptions: [
              {
                field: 'shareCdcEnable',
                value: true
              },
              {
                field: 'showShareConfig',
                value: true
              }
            ],
            triggerConfig: {
              show: true
            }
          }
        ]
      },
      {
        type: 'select',
        field: 'share_cdc_ttl_day',
        label: vm.$t('share_form_setting_log_time'),
        options: [],
        required: true,
        allowCreate: true,
        filterable: true,
        show: false,
        dependOn: [
          {
            triggerOptions: [
              {
                field: 'shareCdcEnable',
                value: true
              },
              {
                field: 'showShareConfig',
                value: true
              }
            ],
            triggerConfig: {
              show: true
            }
          }
        ]
      },
      {
        type: 'select',
        field: 'accessNodeType',
        label: vm.$t('connection_form_access_node'),
        with: '150px',
        options: [
          {
            label: vm.$t('connection_form_automatic'),
            value: 'AUTOMATIC_PLATFORM_ALLOCATION'
          },
          {
            label: vm.$t('connection_form_manual'),
            value: 'MANUALLY_SPECIFIED_BY_THE_USER'
          }
        ],
        tips: vm.$t('connection_form_access_node_tip'),
        required: true
      },
      {
        type: 'slot',
        slot: 'accessNodeProcessId',
        show: false,
        filterable: true,
        dependOn: [
          {
            triggerOptions: [
              {
                field: 'accessNodeType',
                value: 'MANUALLY_SPECIFIED_BY_THE_USER'
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
