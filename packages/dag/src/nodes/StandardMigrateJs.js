import i18n from '@tap/i18n'
import { NodeType } from './extends/NodeType'
import { AllLocales } from './locales'

export class StandardJs extends NodeType {
  constructor() {
    super()
  }

  type = 'standard_migrate_js_processor'

  maxInputs = 1 // 最大输入个数

  group = 'processor'

  formSchema = {
    type: 'object',
    properties: {
      $inputs: {
        type: 'array',
        'x-display': 'hidden'
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
              script: {
                title: i18n.t('packages_dag_nodes_javascript_jiaoben'),
                type: 'string',
                required: true,
                default: 'function process(record){\n\n\t// Enter you code at here\n\treturn record;\n}',
                'x-component': 'JsProcessor',
                'x-component-props': {
                  isStandard: true,
                  height: 500,
                  options: { showPrintMargin: false, wrap: false },
                  includeBeforeAndAfter: true,
                  before: 'function process(record){',
                  beforeRegexp: '^[^]*function\\s+process\\s*\\(record\\)\\{',
                  afterRegexp: '}[^}]*$',
                  after: '}',
                  param: 'schemaApplyResultList',
                  handleAddCompleter: '{{addDeclaredCompleterForSync}}'
                }
              }
            }
          },
          tab2: {
            type: 'void',
            'x-component': 'FormTab.TabPane',
            'x-component-props': {
              label: i18n.t('packages_dag_data_schema')
            },
            properties: {
              schemaPanel: {
                type: 'void',
                'x-component': 'SchemaPanel',
                'x-component-props': {
                  class: 'mx-n4 my-n1',
                  formTab: '{{formTab}}'
                }
              }
            }
          }
        }
      }
    }
  }

  locales = AllLocales.JavaScript
}
