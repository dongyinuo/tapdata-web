import i18n from '@tap/i18n'
import { NodeType } from './extends/NodeType'

export class DateProcessor extends NodeType {
  constructor() {
    super()
  }

  type = 'date_processor'

  maxInputs = 1 // 最大输入个数
  maxOutputs = 1 // 最大输出个数

  group = 'processor'

  formSchema = {
    type: 'object',
    properties: {
      $inputs: {
        type: 'array',
        display: 'none'
      },
      tabs: {
        type: 'void',
        'x-component': 'FormTab',
        'x-component-props': {
          class: 'config-tabs',
          formTab: '{{formTab}}'
        },
        properties: {
          tab1: {
            type: 'void',
            'x-component': 'FormTab.TabPane',
            'x-component-props': {
              label: i18n.t('public_basic_settings')
            },
            properties: {
              name: {
                type: 'string',
                title: i18n.t('public_node_name'),
                required: true,
                'x-decorator': 'FormItem',
                'x-component': 'Input'
              },
              dataTypes: {
                type: 'array',
                title: i18n.t('packages_dag_date_processor_data_types'),
                required: true,
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-component-props': {
                  multiple: true
                },
                'x-reactions': [`{{useFieldDateType($values.$inputs[0])}}`]
              },
              space: {
                type: 'void',
                title: i18n.t('packages_dag_date_processor_method'),
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  asterisk: true
                },
                'x-component': 'Space',
                properties: {
                  add: {
                    type: 'boolean',
                    'x-decorator': 'FormItem',
                    'x-component': 'Select',
                    default: true,
                    enum: [
                      {
                        label: i18n.t('packages_dag_date_processor_increase'),
                        value: true
                      },
                      {
                        label: i18n.t('packages_dag_date_processor_decrease'),
                        value: false
                      }
                    ]
                  },
                  hours: {
                    type: 'number',
                    default: 8,
                    'x-decorator': 'FormItem',
                    'x-decorator-props': {
                      addonAfter: i18n.t('public_time_h')
                    },
                    'x-component': 'InputNumber',
                    'x-component-props': {
                      min: 1
                    }
                  }
                }
              },
              schemaPreview: {
                type: 'void',
                'x-component': 'SchemaPreview'
              }
            }
          }
        }
      }
    }
  }
}
