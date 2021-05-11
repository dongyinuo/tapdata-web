/**
 * @author lg<lirufei0808@gmail.com>
 * @date 3/5/20
 * @description
 */
import { options } from '../../lib/rappid/config'
import FieldProcessAttribute from './FieldProcessAttribute'
import { FORM_DATA_KEY } from '../../constants'
import log from '../../../log'
import i18n from '@/i18n'
import { handleOperation, isValidate, getUrlSearch } from './util'
import _ from 'lodash'
import { mergeJoinTablesToTargetSchema } from '../../util/Schema'

export const fieldProcessConfig = {
  type: 'app.FieldProcess',
  shape: {
    extends: 'app.BaseElement',
    defaultInstanceProperties: {
      size: { width: 120, height: 28 },
      attrs: {
        image: {
          xlinkHref: 'static/editor/o-field-processor.svg',
          refWidth: '25%',
          refHeight: '84%',
          refX: '-8%',
          refY: '-28%'
        },
        body: {
          rx: 14,
          ry: 14
        },
        label: {
          text: i18n.t('editor.cell.processor.field.name')
        },
        statusImage: {
          refWidth: '35%',
          refHeight: -15,
          refX: '70%',
          y: 8,
          visibility: 'hidden'
        }
      },
      [FORM_DATA_KEY]: {
        type: 'field_processor',
        scripts: [],
        operations: []
      }
    },
    prototypeProperties: {
      portLabelMarkup: [
        {
          tagName: 'text',
          selector: 'portLabel'
        }
      ],
      initialize() {
        this.on('change:' + FORM_DATA_KEY, () => {
          this.updateOutputSchema()
        })
      },
      mergeOutputSchema(outputSchema, applyRemoveOperation = true) {
        let data = this.getFormData()
        log('FieldProcess.mergeOutputSchema', data, outputSchema)
        if (!outputSchema || !data || !outputSchema.fields) return outputSchema

        //查找是否有被删除的字段且operation有操作
        let temporary = handleOperation(
          outputSchema.fields,
          _.cloneDeep(data.operations)
        )
        temporary.map(item => {
          let targetIndex = outputSchema.fields.findIndex(n => n.id === item.id)
          if (targetIndex === -1 && item.op !== 'CREATE') {
            // data.operations.splice(index,1); //删除找不到id的数据
            return
          }
          if (item.op === 'CONVERT') {
            outputSchema.fields[targetIndex].javaType = item.operand
          } else if (item.op === 'REMOVE') {
            if (applyRemoveOperation !== false) {
              outputSchema.fields.splice(targetIndex, 1)
            }
          } else if (item.op === 'RENAME') {
            const name = outputSchema.fields[targetIndex].field_name
            let newName = name.split('.')
            newName[newName.length - 1] = item.operand
            const newNameStr = newName.join('.')
            outputSchema.fields[targetIndex].field_name = newNameStr

            // change children field name
            outputSchema.fields.forEach(field => {
              if (field.field_name.startsWith(name + '.')) {
                field.field_name =
                  newNameStr + field.field_name.substring(name.length)
              }
            })
          } else if (item.op === 'CREATE') {
            let triggerFieldId = item.triggerFieldId
            let newField = {
              id: item.id,
              field_name: item.field || item.field_name,
              table_name: item.tableName || item.table_name,
              original_field_name: item.field || item.field_name,
              javaType: item.javaType,
              data_type: 'STRING',
              primary_key_position: 0,
              dataType: 2,
              is_nullable: true,
              columnSize: 0,
              autoincrement: false
            }
            if (triggerFieldId) {
              let triggerFieldIndex = outputSchema.fields.findIndex(
                f => f.id === triggerFieldId
              )
              outputSchema.fields.splice(triggerFieldIndex + 1, 0, newField)
            } else outputSchema.fields.push(newField)
          }
        })
        log('FieldProcess.mergeOutputSchema', outputSchema)
        return outputSchema
      },

      isProcess() {
        return true
      },

      /**
       * validate this allow connect to target
       * @param targetCell
       * @return {boolean}
       */
      allowTarget(targetCell) {
        return !['app.Database'].includes(targetCell.get('type'))
      },

      /**
       * validate accept source connection
       * @param sourceCell
       * @return {boolean}
       */
      allowSource(sourceCell) {
        return !['app.Database'].includes(sourceCell.get('type'))
      },
      /**
       * validate user-filled data
       * @param data
       *
       */
      validate: function (data) {
        let origin
        if (!data) {
          origin =
            mergeJoinTablesToTargetSchema(null, this.getInputSchema()) || []
        }
        data = data || this.getFormData()
        if (!origin) {
          origin = data.originalSchema
        }
        let name = this.attr('label/text')
        if (!data)
          throw new Error(
            `${name}:${i18n.t(
              'editor.cell.processor.field.form.errorOperationSaveTip'
            )}`
          )
        let isMoniting = getUrlSearch('isMoniting') || false
        let validate = isValidate(data.operations, origin).isValidate
        if (!validate && !isMoniting)
          throw new Error(
            `${name}:${i18n.t(
              'editor.cell.processor.field.form.errorOperationSaveTip'
            )}`
          )
        return true
      }
    }
    // staticProperties: {}
  },

  styleFormConfig: {
    inputs: {
      attrs: {
        label: {
          text: {
            type: 'content-editable',
            label: 'Text',
            group: 'text',
            index: 1
          },
          fontSize: {
            type: 'range',
            min: 5,
            max: 80,
            unit: 'px',
            label: 'Font size',
            group: 'text',
            when: { ne: { 'attrs/label/text': '' } },
            index: 2
          },
          fontFamily: {
            type: 'select-box',
            options: options.fontFamily,
            label: 'Font family',
            group: 'text',
            when: { ne: { 'attrs/label/text': '' } },
            index: 3
          },
          fontWeight: {
            type: 'select-box',
            options: options.fontWeight,
            label: 'Font thickness',
            group: 'text',
            when: { ne: { 'attrs/label/text': '' } },
            index: 4
          },
          fill: {
            type: 'color-palette',
            options: options.colorPalette,
            label: 'Fill',
            group: 'text',
            when: { ne: { 'attrs/label/text': '' } },
            index: 5
          }
        },
        body: {
          fill: {
            type: 'color-palette',
            options: options.colorPalette,
            label: 'Fill',
            group: 'presentation',
            index: 1
          },
          stroke: {
            type: 'color-palette',
            options: options.colorPalette,
            label: 'Outline',
            group: 'presentation',
            index: 2
          },
          strokeWidth: {
            type: 'range',
            min: 0,
            max: 30,
            step: 1,
            defaultValue: 1,
            unit: 'px',
            label: 'Outline thickness',
            group: 'presentation',
            when: { ne: { 'attrs/body/stroke': 'transparent' } },
            index: 3
          },
          strokeDasharray: {
            type: 'select-box',
            options: options.strokeStyle,
            label: 'Outline style',
            group: 'presentation',
            when: {
              and: [
                { ne: { 'attrs/body/stroke': 'transparent' } },
                { ne: { 'attrs/body/strokeWidth': 0 } }
              ]
            },
            index: 4
          }
        }
      }
    },
    groups: {
      presentation: {
        label: 'Presentation',
        index: 1
      },
      text: {
        label: 'Text',
        index: 2
      }
    }
  },

  /**
   * 配置显示到左侧图形列表中的图形默认样式
   * @type {object}
   */
  stencil: {
    /**
     * 左侧列表的分组名称，默认有：数据节点:data; 处理节点：processor；标准图形：standard
     */
    group: 'processor',
    /**
     * 界面显示的分组名称
     */
    // groupLabel: '',

    size: { width: 5, height: 4 },
    attrs: {
      root: {
        dataTooltip: i18n.t('editor.cell.processor.field.tip'),
        dataTooltipPosition: 'left',
        dataTooltipPositionSelector: '.joint-stencil'
      },
      body: {
        rx: 2,
        ry: 2,
        stroke: '#fff',
        fill: '#fff',
        strokeWidth: 0,
        strokeDasharray: '0'
      },
      image: {
        xlinkHref: 'static/editor/field-processor.svg',
        refWidth: '60%',
        refHeight: '60%',
        refX: '2%',
        refY: '0%'
      },
      label: {
        text: i18n.t('editor.cell.processor.field.name'),
        textAnchor: 'middle',
        fill: '#666',
        fontFamily: 'Roboto Condensed',
        fontWeight: 'Normal',
        fontSize: 10,
        strokeWidth: 0,
        refX: '75%',
        refY: '40%',
        x: -32,
        y: 27
      }
    }
  },

  /**
   * 图形设置表单配置
   * @type {null}
   */
  settingFormConfig: {
    component: FieldProcessAttribute
  }
}
