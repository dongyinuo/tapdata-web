import { NodeType } from '@/nodes/extends/NodeType'

export class Table extends NodeType {
  constructor(node) {
    super(node)

    if (node.attr) {
      const attr = Object.assign(this.attr, node.attr)
      if (attr.formSchema) this.formSchema = attr.formSchema
      if (attr.linkFormSchema) this.linkFormSchema = attr.linkFormSchema
    }
  }

  attr = {}

  group = 'data'

  formSchema = {
    type: 'object',
    properties: {
      datasource: {
        title: '数据库',
        type: 'void',
        'x-decorator': 'ElFormItem',
        'x-decorator-props': {
          asterisk: true
        },
        'x-component': 'Row',
        'x-component-props': {
          type: 'flex',
          gap: '8px'
        },
        properties: {
          connectionId: {
            type: 'string',
            required: true,
            'x-decorator': 'Col',
            'x-decorator-props': { flex: 1 },
            'x-component': 'ComboSelect',
            'x-component-props': {
              config: { placeholder: '请选择数据库' }
            },
            'x-reactions': [
              '{{useAsyncDataSource(loadDatabase, "dataSource", ["mysql","mysql pxc","oracle","sqlserver","sybase ase","gbase-8s","db2","gaussdb200","postgres","mariadb"])}}'
            ]
          },
          connectionBtn: {
            type: 'void',
            'x-component': 'AddDatabaseBtn'
          }
        }
      },
      tableRow: {
        title: '表',
        type: 'void',
        'x-decorator': 'ElFormItem',
        'x-decorator-props': {
          asterisk: true
        },
        'x-component': 'Row',
        'x-component-props': {
          type: 'flex',
          gap: '8px'
        },
        properties: {
          tableId: {
            type: 'string',
            required: true,
            'x-decorator': 'Col',
            'x-decorator-props': { flex: 1 },
            'x-component': 'ComboSelect',
            'x-component-props': {
              config: { placeholder: '请选择表，区分大小写' }
            },
            'x-reactions': ['{{useAsyncDataSource(loadDatabaseTable)}}']
          },
          table: {
            type: 'object',
            // 'x-visible': false,
            'x-display': 'hidden',
            'x-reactions': ['{{useAsyncDataSource(loadTableInfo, "value")}}']
          },
          /*tableName: {
            type: 'string',
            required: true,
            'x-decorator': 'Col',
            'x-decorator-props': { flex: 1 },
            'x-component': 'ComboSelect',
            'x-component-props': {
              config: { placeholder: '请选择表，区分大小写' }
            },
            'x-reactions': ['{{useAsyncDataSource(loadDatabaseTable)}}']
          },*/
          connectionBtn: {
            type: 'void',
            'x-component': 'AddDatabaseBtn'
          }
        }
      },
      name: {
        type: 'string',
        'x-display': 'hidden',
        'x-reactions': {
          dependencies: ['tableId'],
          fulfill: {
            run: '{{$self.value = $form.query("tableId").get("dataSource")?.find(item=>item.value===$deps[0])?.label}}'
          }
        }
      },
      switchSpace: {
        type: 'void',
        title: '启用自定义初始化顺序',
        properties: {
          enableInitialOrder: {
            type: 'boolean',
            required: true,
            'x-component': 'Switch',
            'x-component-props': {
              // activeText: '开启'
            },
            'x-reactions': {
              target: 'initialSyncOrder',
              fulfill: {
                state: {
                  visible: '{{!!$self.value}}'
                }
              }
            }
          },

          initialSyncOrder: {
            type: 'number',
            required: true,
            'x-component': 'InputNumber',
            'x-component-props': {
              min: 1,
              size: 'mini'
            }
          }
        },
        'x-decorator': 'ElFormItem',
        'x-decorator-props': {
          asterisk: true
        },
        'x-component': 'Space',
        'x-component-props': {
          size: 'middle'
        }
      },
      isFilter: {
        type: 'boolean',
        title: '过滤设置',
        required: true,
        'x-decorator': 'ElFormItem',
        'x-component': 'Switch',
        'x-reactions': {
          target: 'custSql',
          fulfill: {
            state: {
              visible: '{{!!$self.value}}'
            }
          }
        }
      },
      custSql: {
        type: 'void',
        'x-component': 'FormTab',
        'x-component-props': {},
        properties: {
          tab1: {
            type: 'void',
            'x-component': 'FormTabPane',
            'x-component-props': {
              tab: '智能模式'
            },
            properties: {
              fieldFilterType: {
                type: 'string',
                required: true,
                default: 'keepAllFields',
                enum: [
                  {
                    label: '全部字段',
                    value: 'keepAllFields'
                  },
                  {
                    label: '保留字段',
                    value: 'retainedField'
                  },
                  {
                    label: '删除字段',
                    value: 'deleteField'
                  }
                ],
                'x-decorator': 'ElFormItem',
                'x-component': 'Select',
                'x-reactions': {
                  target: 'selectedFields',
                  fulfill: {
                    state: {
                      visible: '{{$self.value !== "keepAllFields"}}'
                    }
                  }
                }
              },
              selectedFields: {
                type: 'array',
                required: true,
                'x-decorator': 'ElFormItem',
                'x-component': 'Select',
                'x-component-props': {
                  multiple: true,
                  filterable: true,
                  defaultFirstOption: true
                },
                'x-reactions': {
                  dependencies: ['table'],
                  fulfill: {
                    state: {
                      dataSource:
                        '{{$deps[0].fields.map(item => item.field_name)}}'
                    }
                  }
                }
                // 'x-reactions': ['{{useAsyncDataSource(loadTableField)}}']
              },
              limitLines: {
                title: '行数限制',
                type: 'string',
                required: true,
                enum: [
                  {
                    label: '全部行数',
                    value: 'all'
                  },
                  {
                    label: '1000行',
                    value: 1000
                  },
                  {
                    label: '10000行',
                    value: 10000
                  }
                ],
                'x-decorator': 'ElFormItem',
                'x-component': 'Select'
              },
              conditions: {
                type: 'array',
                'x-component': 'FilterConditions',
                'x-component-props': {},
                'x-reactions': {
                  dependencies: ['selectedFields'],
                  fulfill: {
                    run: '{{$self.dataSource = $form.query("selectedFields").get("dataSource")}}'
                  }
                }
                // 'x-reactions': ['{{useAsyncDataSource(loadTableField)}}']
              },
              sql: {
                type: 'string',
                'x-component': 'PreviewSql',
                'x-component-props': {},
                'x-reactions': {
                  dependencies: ['selectedFields'],
                  fulfill: {
                    run: '{{$self.dataSource = $form.query("selectedFields").get("dataSource")}}'
                  }
                }
              }

              /*conditions: {
                type: 'array',
                'x-component': 'ArrayItems',
                'x-decorator': 'ElFormItem',
                items: {
                  type: 'object',
                  properties: {
                    space: {
                      type: 'void',
                      'x-component': 'Space',
                      'x-component-props': {
                        size: 'middle'
                      },
                      properties: {
                        field: {
                          type: 'string',
                          enum: [
                            { label: '选项1', value: 1 },
                            { label: '选项2', value: 2 }
                          ],
                          'x-decorator': 'ElFormItem',
                          'x-component': 'Select',
                          'x-component-props': {
                            placeholder: 'select field'
                          }
                        },
                        command: {
                          type: 'string',
                          enum: ['=', '<>', '>', '<', '>=', '<=', 'like'],
                          'x-decorator': 'ElFormItem',
                          'x-component': 'Select',
                          'x-component-props': {
                            placeholder: 'select op'
                          }
                        },
                        value: {
                          type: 'string',
                          'x-decorator': 'ElFormItem',
                          'x-component': 'Input',
                          'x-component-props': {
                            placeholder: 'enter value'
                          }
                        },
                        remove: {
                          type: 'void',
                          'x-decorator': 'ElFormItem',
                          'x-component': 'ArrayRemove'
                        }
                      }
                    },
                    conditions: {}
                  }
                },
                properties: {
                  header: {
                    type: 'void',
                    'x-component': 'ArrayHeader',
                    properties: {
                      addAnd: {
                        type: 'void',
                        title: 'and',
                        'x-component': 'ArrayAddition',
                        'x-component-props': {
                          size: 'mini'
                        }
                      },
                      addOr: {
                        type: 'void',
                        title: 'or',
                        'x-component': 'ArrayAddition',
                        'x-component-props': {
                          size: 'mini'
                        }
                      },
                      addAndGroup: {
                        type: 'void',
                        title: 'and()',
                        'x-component': 'ArrayAddition',
                        'x-component-props': {
                          size: 'mini'
                        }
                      },
                      addOrGroup: {
                        type: 'void',
                        title: 'or()',
                        'x-component': 'ArrayAddition',
                        'x-component-props': {
                          size: 'mini'
                        }
                      }
                    }
                  }
                }
              }*/
            }
          },
          tab2: {
            type: 'void',
            'x-component': 'FormTabPane',
            'x-component-props': {
              tab: 'SQL模式'
            },
            properties: {
              bbb: {
                type: 'string',
                title: 'BBB',
                'x-decorator': 'ElFormItem',
                required: true,
                'x-component': 'Input'
              }
            }
          }
        }
      }
    }
  }

  linkFormSchema = {
    type: 'object',
    properties: {
      dropType: {
        type: 'string',
        title: '对目标端已存在的结构和数据的处理',
        default: 'no_drop',
        'x-decorator': 'ElFormItem',
        'x-component': 'Select',
        'x-reactions': ['{{getDropOptions}}']
      },
      syncObjects: {
        type: 'array',
        default: [
          {
            type: 'table'
          }
        ],
        enum: [
          {
            label: 'Table',
            value: 'table',
            tooltip: 'editor.cell.link.tableTip',
            disabled: true
          },
          {
            label: 'View',
            value: 'view',
            tooltip: 'editor.cell.link.viewTip'
          },
          {
            label: 'Function',
            value: 'function'
          },
          {
            label: 'Procedure',
            value: 'procedure'
          }
        ],
        'x-component': 'SyncObjects',
        'x-reactions': [
          '{{useAsyncDataSource(loadDatabaseInfo, "data", sourceConnectionId)}}'
        ]
      }
    }
  }
}
