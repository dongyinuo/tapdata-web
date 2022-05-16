import { connect, mapProps, useForm } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { defineComponent } from 'vue-demi'
import VIcon from 'web-core/components/VIcon'
import { convertSchemaToTreeData } from './util'
import './index.scss'

export const FieldRename = connect(
  observer(
    defineComponent({
      props: ['loading', 'options'],

      setup() {
        const formRef = useForm()
        const form = formRef.value
        return {
          databaseType: form.values.databaseType,
          operations: form.values.operations,
          form
        }
      },

      data() {
        return {
          nodeKey: '',
          originalFields: [],
          //checkAll: false,
          fieldsNameTransforms: '',
          /*字段处理器支持功能类型*/
          RENAME_OPS_TPL: {
            id: '',
            op: 'RENAME',
            field: '',
            operand: ''
          }
        }
      },
      watch: {
        operations: {
          deep: true,
          handler(v) {
            this.$emit('change', v)
            console.log('operations', v) // eslint-disable-line
          }
        }
      },
      render() {
        // eslint-disable-next-line no-console
        console.log('🚗 FieldProcessor', this.loading, this.options)
        let fields = this.options || []
        fields = fields.filter(item => !item.is_deleted)
        fields = convertSchemaToTreeData(fields) || [] //将模型转换成tree
        fields = this.checkOps(fields) || []
        this.fields = fields || []
        this.originalFields = JSON.parse(JSON.stringify(fields))

        //初始化
        let formValues = { ...this.form.values }
        this.fieldsNameTransforms = formValues?.fieldsNameTransform || ''
        // eslint-disable-next-line
        console.log('FieldProcess.mergeOutputSchema', fields)
        return (
          <div class="field-processors-tree-warp bg-body pt-2 pb-5" v-loading={this.loading}>
            <div class="field-processor-operation flex">
              <span class="flex-1 text inline-block ml-6">源字段名</span>
              <span class="flex-1 text inline-block">目标字段名</span>
              <span class="field-ops  inline-block mr-12">
                <VIcon class="clickable ml-5" size="12" onClick={() => this.handleAllToUpperCase()}>
                  toUpperCase
                </VIcon>
                <VIcon class="clickable ml-5" size="12" onClick={() => this.handleAllToLowerCase()}>
                  toLowerCase
                </VIcon>
                <VIcon class="clickable ml-5" size="12" onClick={() => this.handleAllReset()}>
                  revoke
                </VIcon>
              </span>
            </div>
            <div className="field-processors-tree-warp">
              <ElTree
                ref="tree"
                data={fields}
                node-key="id"
                default-expand-all={true}
                // show-checkbox={true}
                expand-on-click-node={false}
                class="field-processor-tree"
                scopedSlots={{
                  default: ({ node, data }) => (
                    <span
                      class="tree-node flex flex-1 justify-content-center align-items flex-row"
                      slot-scope="{ node, data }"
                    >
                      <span class="flex-1 text__inner inline-block">
                        {data.original_field_name}
                        {data.primary_key_position > 0 ? (
                          <VIcon size="12" class="text-warning ml-1">
                            key
                          </VIcon>
                        ) : (
                          ''
                        )}
                      </span>
                      <span class={['tree-field-input-wrap', 'item', 'inline-block', 'e-label']}>
                        {data.showInput ? (
                          <ElInput
                            id="renameInput"
                            class="tree-field-input text__inner"
                            v-model={data.field_name}
                            onChange={() => this.handleRename(node, data)}
                            onBlur={() => this.closeInput(node.data)}
                            onKeydown={() => this.handleKeyDown()}
                          />
                        ) : (
                          <span class="text__inner">{data.field_name}</span>
                        )}
                        {!data.showInput && data.level === 1 ? (
                          <VIcon class={['ml-3', 'clickable']} size="12" onClick={() => this.showInput(node.data)}>
                            edit-outline
                          </VIcon>
                        ) : (
                          ''
                        )}
                        {this.isRename(data.id) ? (
                          <VIcon class={['ml-3', 'clickable']} size="12">
                            info
                          </VIcon>
                        ) : (
                          ''
                        )}
                      </span>
                      <span class="e-ops mr-12">
                        <ElButton
                          type="text"
                          class="ml-5"
                          disabled={
                            (!this.isRename(data.id) && this.fieldsNameTransforms === '') || this.isReset(data.id)
                          }
                          onClick={() => this.handleReset(node, data)}
                        >
                          <VIcon size="12">revoke</VIcon>
                        </ElButton>
                      </span>
                    </span>
                  )
                }}
              />
            </div>
          </div>
        )
      },
      methods: {
        isRename(id) {
          let ops = this.operations.filter(v => v.id === id && v.op === 'RENAME')
          return ops && ops.length > 0
        },
        isReset(id) {
          let ops = this.operations.filter(v => v.id === id && v.op === 'RENAME' && v.reset)
          return ops && ops.length > 0
        },
        checkOps(fields) {
          //查找是否有被删除的字段且operation有操作
          if (this.operations?.length > 0 && fields?.length > 0) {
            for (let i = 0; i < this.operations.length; i++) {
              let item = this.operations[i]
              if (!item) return fields
              let targetIndex = fields.findIndex(n => n.id === item.id)
              if (targetIndex === -1) {
                continue
              }
              if (item.op === 'RENAME') {
                const name = fields[targetIndex].field_name
                let newName = name.split('.')
                newName[newName.length - 1] = item.operand
                const newNameStr = newName.join('.')
                fields[targetIndex].field_name = newNameStr

                // change children field name
                fields.forEach(field => {
                  if (field.field_name.startsWith(name + '.')) {
                    field.field_name = newNameStr + field.field_name.substring(name.length)
                  }
                })
              }
            }
          }
          return fields
        },
        showInput(data) {
          this.$set(data, 'showInput', true) //打开loading
          //将输入框自动获取焦点
          this.$nextTick(() => {
            document.getElementById('renameInput').focus()
          })
        },
        closeInput(data) {
          this.$set(data, 'showInput', false) //打开loading
        },
        handleKeyDown(e) {
          if (e.keyCode === 13) {
            this.$set(data, 'showInput', false) //eslint-disable-line
          }
        },
        /*rename
         * @node 当前tree
         * @data 当前数据*/
        handleRename(node, data) {
          console.log('fieldProcessor.handleRename', node, data) //eslint-disable-line
          let nativeData = this.getNativeData(data.id) //查找初始schema
          let existsName = this.handleExistsName(node, data)
          if (existsName) {
            data.field_name = nativeData.field_name
            return
          }
          //eslint-disable-next-line
          console.log(
            'fieldProcessor.handlerRename(node,data,nativeData,operations',
            node,
            data,
            nativeData,
            this.operations
          )
          let ops = this.operations.filter(v => v.id === data.id && v.op === 'RENAME')
          let op
          if (ops.length === 0) {
            op = Object.assign(JSON.parse(JSON.stringify(this.RENAME_OPS_TPL)), {
              id: data.id,
              field: nativeData.original_field_name,
              operand: data.field_name,
              table_name: data.table_name,
              type: data.type,
              primary_key_position: data.primary_key_position,
              color: data.color,
              label: data.field_name,
              field_name: data.field_name,
              reset: this.fieldsNameTransforms !== ''
            })
            this.operations.push(op)
          } else {
            op = ops[0]
            if (data.field_name === nativeData.original_field_name) {
              //再次改名跟原来名字一样 删除当前operation 记录
              let index = this.operations.findIndex(v => v.id === data.id && v.op === 'RENAME')
              this.operations.splice(index, 1)
            } else {
              op.operand = data.field_name
              op.label = data.field_name
              op.field_name = data.field_name
            }
          }
          this.$forceUpdate()
          console.log(this.operations) //eslint-disable-line
        },
        handleExistsName(node, data) {
          // 改名前查找同级中是否重名，若有则return且还原改动并提示
          let exist = false
          if (node && node.parent && node.parent.childNodes) {
            let parentNode = node.parent.childNodes.filter(v => data.field_name === v.data.field_name)
            if (parentNode && parentNode.length === 2) {
              this.$message.error(data.field_name + this.$t('message.exists_name'))
              exist = true
            }
          }
          return exist
        },
        getNativeData(id) {
          let fields = this.originalFields || []
          let field = null
          let fn = function (fields) {
            if (!fields) {
              return
            }
            for (let i = 0; i < fields.length; i++) {
              let f = fields[i]
              if (f.id === id) {
                field = f
                break
              } else if (f.children) {
                fn(f.children)
              }
            }
          }
          fn(fields)
          return field
        },
        handleReset(node, data) {
          if (this.fieldsNameTransforms !== '') {
            //所有字段批量修改过，撤回既是保持原来字段名
            this.handleRename(node, data)
            return
          }
          console.log('fieldProcessor.handleReset', node, data) //eslint-disable-line
          let dataLabel = JSON.parse(JSON.stringify(data.field_name))
          let self = this
          let fn = function (node, data) {
            let nativeData = self.getNativeData(data.id)
            for (let i = 0; i < node.childNodes.length; i++) {
              let childNode = node.childNodes[i]
              fn(childNode, childNode.data)
            }
            for (let i = 0; i < self.operations.length; i++) {
              if (self.operations[i].id === data.id) {
                let ops = self.operations[i]
                if (ops.op === 'RENAME') {
                  let existsName = self.handleExistsName(node, data)
                  if (existsName) {
                    return
                  }
                  if (nativeData) node.data.field_name = nativeData.original_field_name
                  self.operations.splice(i, 1)
                  i--
                  continue
                }
              }
            }
          }
          fn(node, data)
          let existsName = this.handleExistsName(node, data)
          if (existsName) {
            data.field_name = dataLabel
          }
        },
        getParentFieldName(node) {
          let fieldName = node.data && node.data.field_name ? node.data.field_name : ''
          if (node.level > 1 && node.parent && node.parent.data) {
            let parentFieldName = this.getParentFieldName(node.parent)
            if (parentFieldName) fieldName = parentFieldName + '.' + fieldName
          }
          return fieldName
        },
        handleAllToUpperCase() {
          //清掉所有operations
          this.operations.splice(0)
          this.form.setValuesIn('fieldsNameTransform', 'toUpperCase')
        },
        handleAllToLowerCase() {
          //清掉所有operations
          this.operations.splice(0)
          this.form.setValuesIn('fieldsNameTransform', 'toLowerCase')
        },
        handleAllReset() {
          //清掉所有operations 撤回不变
          this.operations.splice(0)
          this.form.setValuesIn('fieldsNameTransform', '')
        },
        handleCheckAllChange() {
          if (this.checkAll) {
            this.$nextTick(() => {
              this.$refs.tree.setCheckedNodes(this.fields)
            })
          } else {
            this.$nextTick(() => {
              this.$refs.tree.setCheckedKeys([])
            })
          }
        }
      }
    })
  ),
  mapProps({ dataSource: 'options', loading: true })
)

export default FieldRename
