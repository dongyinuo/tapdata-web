import { options } from '../../lib/rappid/config';
import LogminerAttribute from './LogminerAttribute';
import { FORM_DATA_KEY } from '../../constants';
import i18n from '../../../i18n/i18n';

export const logminerConfig = {
	type: 'app.Logminer',
	shape: {
		extends: 'app.BaseElement',
		defaultInstanceProperties: {
			attrs: {
				image: {
					xlinkHref: 'static/editor/o-digger.svg'
				},
				label: {
					text: i18n.t('editor.cell.data_node.logminer.name')
				},
				[FORM_DATA_KEY]: {
					type: 'logminer'
				}
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
					this.updateOutputSchema();
				});
			},
			// mergeOutputSchema(outputSchema) {
			// 	let data = this.getFormData();
			// 	log('aggregate.mergeOutputSchema', data, outputSchema);
			// 	if (!outputSchema || !data) return;

			// 	let groupFields = [];
			// 	let functionNames = [];
			// 	data.aggregations.forEach(stage => {
			// 		if (stage.groupByExpression) groupFields.push(...stage.groupByExpression);
			// 		if (stage.aggFunction) functionNames.push(stage.aggFunction);
			// 	});

			// 	let fields = outputSchema.fields || [];
			// 	outputSchema.fields = fields.filter(field => groupFields.includes(field.field_name)) || [];

			// 	functionNames.forEach(fnName => {
			// 		outputSchema.fields.push(
			// 			Object.assign(_.cloneDeep(fields[0] || {}), {
			// 				field_name: fnName,
			// 				data_type: 'DOUBLE',
			// 				primary_key_position: 0,
			// 				original_field_name: fnName,
			// 				javaType: 'Double',
			// 				autoincrement: false,
			// 				id: uuid()
			// 			})
			// 		);
			// 	});
			// 	log('Aggregate.mergeOutputSchema', _.cloneDeep(fields), outputSchema);
			// 	return outputSchema;
			// },

			isProcess() {
				return true;
			},

			/**
			 * validate this allow connect to target
			 * @param targetCell
			 * @return {boolean}
			 */
			allowTarget(targetCell) {
				return ['app.Collection'].includes(targetCell.get('type'));
			},

			/**
			 * validate accept source connection
			 * @param sourceCell
			 * @return {boolean}
			 */
			allowSource() {
				return false;
			},

			validate(data) {
				data = data || this.getFormData();
				let name = this.attr('label/text');

				if (!data.name) throw new Error(`${name}: ${i18n.t('editor.cell.data_node.logminer.validate.name')}`);
				if (data.logCollectorSettings && data.logCollectorSettings.length > 0) {
					data.logCollectorSettings.forEach(item => {
						if (!item.connectionId)
							throw new Error(`${name}: ${i18n.t('editor.cell.data_node.logminer.validate.source')}`);
						if (item.selectType !== 'allTables' && !item.includeTables)
							throw new Error(`${name}: ${i18n.t('editor.cell.data_node.logminer.validate.table')}`);
					});
				}
				return true;
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
		group: 'data',
		/**
		 * 界面显示的分组名称
		 */
		// groupLabel: '',

		size: { width: 5, height: 4 },
		attrs: {
			root: {
				dataTooltip: i18n.t('editor.cell.data_node.logminer.tip'),
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
				xlinkHref: 'static/editor/digger.svg',
				refWidth: '60%',
				refHeight: '60%',
				refX: '2%',
				refY: '0%'
			},
			label: {
				text: i18n.t('editor.cell.data_node.logminer.name'),
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
		component: LogminerAttribute
	}
};
