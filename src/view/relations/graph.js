import joint from '../../editor/lib/rappid/rappid';
import navigatorElementView from '../../editor/lib/rappid/view/navigator';
import paperSetting from './paperSetting';
import $ from 'jquery';
// import $ from 'jquery';
// import _ from 'lodash';
// import i18n from '../../i18n/i18n';
// import { Message } from 'element-ui';

window.joint = joint;

export default function() {
	paperSetting();

	//var toolbarHeight = 50;

	var getContentBBox = function() {
		const parent = $('.data-map-main');
		const width = parent.width();
		const height = parent.height();
		return {
			w: width,
			h: height
		};
	};

	var graph = new joint.dia.Graph();

	var paper = new joint.dia.Paper({
		// el: document.getElementById('paper'),
		model: graph,
		width: 800,
		height: 800,

		defaultRouter: {
			name: 'mapping',
			args: { padding: 30 }
		},
		defaultConnectionPoint: { name: 'anchor' },
		defaultAnchor: { name: 'mapping' },
		/*
		 * 线型
		 * 'normal' - 普通
		 * 'jumpover' - 连线交叉时显示一个bridge
		 * 'rounded' - 转折处显示为圆角
		 * 'smooth' - 贝塞尔曲线
		 */
		defaultConnector: {
			name: 'jumpover',
			args: { jump: 'cubic' }
		},

		linkPinning: false,

		highlighting: {
			default: {
				name: 'addClass',
				options: {
					className: 'active'
				}
			}
		},

		interactive: {
			// 禁止拖线
			addLinkFromMagnet: false
		}
	});

	// Actions：修改节点尺寸
	function showElementTools(elementView) {
		var element = elementView.model;
		var transform = new joint.ui.FreeTransform({
			cellView: elementView,
			allowRotation: false
		});
		transform.render();
		transform.listenTo(element, 'change', updateMinSize);
		updateMinSize();

		function updateMinSize() {
			var minSize = element.getMinimalSize();
			transform.options.minHeight = minSize.height;
			transform.options.minWidth = minSize.width;
		}
	}

	/**
	 * 设置itemLabel的title
	 * @param node
	 * @param item
	 */
	function setTitle(node, item) {
		node.setTitle(item.id, item.label);
		if (item.items && item.items.length) {
			item.items.forEach(it => {
				setTitle(node, it);
			});
		}
	}

	paper.on('cell:pointerclick', function(cellView) {
		if (cellView.model.isLink()) {
			//点击link 查看血缘 或者查看任务详情
			let cellModel = cellView.model;
			//根据 id 截取到label
			let source = cellModel.get('source');
			let sourceName = source.port.replace(source.original_id + '_', '');
			let target = cellModel.get('target');
			let targetName = target.port.replace(target.original_id + '_', '');
			graph.vcomp.model = {
				level: 'field',
				dataFlows: cellView.model.info.dataFlows,
				previewVisible: true,
				sourceName: sourceName,
				targetName: targetName
			};
			// 默认打开所有menu
			graph.vcomp.$refs.info.handleOpenAllFlows();
		} else {
			graph.vcomp.model = {
				level: 'table',
				connectionId: cellView.model.connection.id,
				tableId: cellView.model.tableId,
				previewVisible: true
			};

			// 显示resize工具
			showElementTools(cellView);
		}
	});
	const paperScroller = new joint.ui.PaperScroller({
		el: document.getElementById('paper'),
		paper: paper,
		autoResizePaper: true,
		cursor: 'grab',
		contentOptions: function() {
			// let visibleArea = paperScroller.getVisibleArea();
			let bbox = getContentBBox();
			return {
				maxWidth: bbox.width,
				maxHeight: bbox.height,
				padding: {
					bottom: 20,
					top: 20,
					left: 20,
					right: 20
				},
				allowNewOrigin: 'any'
			};
		}
	});
	window.paperScroller = paperScroller;
	window.paper = paper;
	paper.on('blank:pointerdown', paperScroller.startPanning);
	paper.on('blank:pointerdown', function() {
		graph.vcomp.model.previewVisible = false;
	});
	// paper.on('cell:pointerdown', (cellView, evt, x, y) => {
	// 	paperScroller.startPanning(evt, x, y);
	// });
	paperScroller.render();
	paperScroller.zoom(0.8, { absolute: true });

	joint.shapes.app = {};
	navigatorElementView(joint);
	let navigator = new joint.ui.Navigator({
		el: document.getElementById('navigator-container'),
		width: 150,
		height: 150,
		paperScroller: paperScroller,
		zoom: {
			grid: 0.2,
			min: 0.2,
			max: 5
		},
		paperOptions: {
			//async: true,
			elementView: joint.shapes.app.NavigatorElementView,
			linkView: joint.shapes.app.NavigatorLinkView,
			cellViewNamespace: {
				/* no other views are accessible in the navigator */
			}
		}
	});
	navigator.render();
	// window.navigator = navigator;
	return {
		joint: joint,
		graph: graph,
		draw: function(rdatas, linkdatas, vcomp) {
			graph.clear();

			graph.vcomp = vcomp;
			rdatas.forEach(table => {
				// FIXME: 不适合多层级，if判断和下方的逻辑待优化
				if (table.items) {
					let items = table.items[0].items || [];
					if (items.length > 0) {
						items.forEach(it => {
							if (it.is_deleted) {
								it['icon'] = '../../static/relation/removeField.svg';
							}
							if (it.is_add) {
								it['icon'] = '../../static/relation/addField.svg';
							}
						});
					}
				}
				var node = new joint.shapes.mapping.Record({
					items: [[table.items[0]]]
				});
				// 禁用 cursor: crosshair;
				node.attr('itemLabels/magnet', false);
				linkdatas.map((link, idx, linkdatas) => {
					if (link.source.id === table.id) {
						linkdatas[idx].source['original_id'] = link.source.id;
						linkdatas[idx].source.id = node.id;
					}
					if (link.target.id === table.id) {
						linkdatas[idx].target['original_id'] = link.target.id;
						linkdatas[idx].target.id = node.id;
					}
				});
				node.setName(table.label);
				setTitle(node, table.items[0]);
				node.tableId = table.id;
				node.connection = table.connection;
				if (table.id == vcomp.tableId) {
					node.attr('header/fill', '#d0d8e8');
				}
				node.toggleItemCollapse(table.items[0].id);
				node.toggleItemCollapse(table.id);
				node.addTo(graph);
			});

			var links = linkdatas.map(link => {
				let res = new joint.shapes.mapping.Link({
					source: {
						id: link.source.id,
						port: link.source.port,
						original_id: link.source.original_id
					},
					target: { id: link.target.id, port: link.target.port, original_id: link.target.original_id }
					// labels: [
					// 	{
					// 		attrs: { text: { text: link.dataFlows[0].name } }
					// 	}
					// ]
				});
				res.info = link;
				return res;
			});

			links.forEach(function(link) {
				link.addTo(graph);
			});
			joint.layout.DirectedGraph.layout(graph, {
				setLinkVertices: false,
				rankDir: 'LR',
				marginX: 100,
				marginY: 100,
				// resizeToFit: true,
				nodeSep: 100,
				edgeSep: 50,
				rankSep: 200,
				// ranker: 'tight-tree',
				// align: "UL",
				resizeClusters: true
				//clusterPadding: { top: 50, left: 35, right: 35, bottom: 20 }
			});
		}
	};
}
