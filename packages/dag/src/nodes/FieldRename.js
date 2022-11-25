import { NodeType } from './extends/NodeType'

export class FieldRename extends NodeType {
  constructor() {
    super()
  }

  type = 'field_rename_processor'

  maxInputs = 1 // 最大输入个数

  group = 'processor'

  formSchema = {
    type: 'object',
    properties: {
      $inputs: {
        type: 'array',
        display: 'none'
      },
      name: {
        type: 'string',
        title: '节点名称',
        required: true,
        'x-decorator': 'FormItem',
        'x-component': 'Input'
      },
      operations: {
        type: 'array',
        title: '',
        'x-decorator': 'FormItem',
        'x-component': 'FieldRename',
        'x-reactions': [
          '{{useAsyncDataSourceByConfig({service: loadNodeFieldsById, withoutField: true}, $values.id)}}',
          '{{useAfterPatchAsyncDataSource({service: loadNodeFieldsById, withoutField: true}, $values.id, $values.$inputs[0], $values.fieldsNameTransform)}}'
        ],
        fieldsNameTransform: {
          type: 'string',
          default: '',
          display: 'none'
        }
      }
    }
  }
}
