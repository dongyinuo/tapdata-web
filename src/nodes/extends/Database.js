/*
export class Database {
  group = 'data'

  // 附加到节点上的属性
  attr = {
    type: 'database'
  }

  formSchema = {
    type: 'object',
    properties: {
      datasource: {
        title: '数据库',
        type: 'void',
        'x-decorator': 'ElFormItem',
        'x-decorator-props': {
          asterisk: true,
          feedbackLayout: 'none'
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
            'x-reactions': ['{{useAsyncDataSource(loadDatabase)}}']
          },
          connectionBtn: {
            type: 'void',
            'x-component': 'AddDatabaseBtn'
          }
        }
      },
      datasourceInfo: {
        type: 'object',
        'x-component': 'DatabaseInfo',
        'x-reactions': ['{{useAsyncDataSource(loadDatabaseInfo)}}']
      }
    }
  }

  linkFormSchema = {
    type: 'object',
    properties: {
      dropType: {
        type: 'string',
        title: '对目标端已存在的结构和数据的处理',
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
          '{{useAsyncDataSource(loadDatabaseInfo, sourceConnectionId)}}'
        ]
      }
    }
  }

  constructor(name, icon, type) {
    this.icon = icon
    this.name = name
    this.tip = name

    Object.assign(this.attr, {
      database_type: type
    })
  }

  execute() {
    // 节点功能实现
  }

  /!**
   * 验证此允许连接到目标
   *!/
  allowTarget() {
    return true
  }

  /!**
   * 验证接受源连接
   *!/
  allowSource() {
    return true
  }
}
*/
