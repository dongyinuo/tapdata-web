import { options } from '../../lib/rappid/config'
import FormBuilder from './Form'
import { FORM_DATA_KEY } from '../../constants'
import i18n from '@/i18n'

export const fileFormConfig = {
  type: 'app.FileFormBuilder',
  shape: {
    extends: 'app.BaseElement',
    defaultInstanceProperties: {
      attrs: {
        image: {
          xlinkHref: 'static/editor/o-file.svg'
        },
        label: {
          text: i18n.t('editor.cell.data_node.file.name')
        }
      },
      [FORM_DATA_KEY]: {
        connectionId: ''
      }
    },
    prototypeProperties: {
      portLabelMarkup: [
        {
          tagName: 'text',
          selector: 'portLabel'
        }
      ],

      isDataNode() {
        return true
      },

      /**
       * validate this allow connect to target
       * @param targetCell
       * @return {boolean}
       */
      allowTarget(targetCell) {
        // log("FileNode.allowTarget", targetCell, ['app.GridFSNode'].includes(targetCell.get('type')));
        return ![
          'app.Database',
          'app.FileNode',
          'app.GridFSNode',
          'app.Logminer',
          'csv',
          'excel',
          'json',
          'xml'
        ].includes(targetCell.get('type'))
      },

      /**
       * validate accept source connection
       * @param sourceCell
       * @return {boolean}
       */
      allowSource() {
        // log("FileNode.allowSource", sourceCell, ['app.GridFSNode'].includes(sourceCell.get('type')));
        return false
      },

      validate(data) {
        data = data || this.getFormData()
        let fileProperty = data.fileProperty || ''
        let name = this.attr('label/text')
        if (!data.connectionId) throw new Error(`${name}: ${i18n.t('editor.cell.data_node.file.none_fileName')}`)
        if (fileProperty.excel_header_start === '' && fileProperty.gridfs_header_type !== 'custom') {
          throw new Error(
            `${name}: ` + i18n.t('editor.fileFormBuilder.excel_header_start') + i18n.t('formBuilder.noneText')
          )
        } else if (fileProperty.excel_header_end === '' && fileProperty.gridfs_header_type !== 'custom') {
          throw new Error(
            `${name}: ` + i18n.t('editor.fileFormBuilder.excel_header_end') + i18n.t('formBuilder.noneText')
          )
        } else if (fileProperty.gridfs_header_config === '' && fileProperty.gridfs_header_type === 'custom') {
          throw new Error(`${name}: ` + i18n.t('editor.fileFormBuilder.header_type_required'))
        } else if (fileProperty.sheet_start === '') {
          throw new Error(`${name}: ` + i18n.t('editor.fileFormBuilder.sheet_start') + i18n.t('formBuilder.noneText'))
        } else if (fileProperty.sheet_end === '') {
          throw new Error(`${name}: ` + i18n.t('editor.fileFormBuilder.sheet_end') + i18n.t('formBuilder.noneText'))
        } else if (data.tableName === '') {
          throw new Error(`${name}: ` + i18n.t('editor.fileFormBuilder.tableName') + i18n.t('formBuilder.noneText'))
        }
        return true
      }
    }
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
              and: [{ ne: { 'attrs/body/stroke': 'transparent' } }, { ne: { 'attrs/body/strokeWidth': 0 } }]
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
    group: 'data',
    /**
     * 界面显示的分组名称
     */
    // groupLabel: '',

    size: { width: 5, height: 4 },
    attrs: {
      root: {
        dataTooltip: i18n.t('editor.cell.data_node.file.tip'),
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
        xlinkHref: 'static/editor/file.svg',
        refWidth: '60%',
        refHeight: '60%',
        refX: '2%',
        refY: '0%'
      },
      label: {
        text: i18n.t('editor.cell.data_node.file.name'),
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
    component: FormBuilder
  }
}
