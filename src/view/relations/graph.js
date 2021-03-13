import joint from '../../editor/lib/rappid/rappid';
//import navigatorElementView from '../../editor/lib/rappid/view/navigator';
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
		gridSize: 30,
		drawGrid: {
			name: 'doubleMesh',
			args: [
				{ color: '#dddddd', thickness: 1 }, // settings for the primary mesh
				{ color: 'black', scaleFactor: 5, thickness: 1 } //settings for the secondary mesh
			]
		},
		defaultConnectionPoint: { name: 'boundary', args: { extrapolate: true } },
		// defaultConnectionPoint: joint.shapes.dataMap.Link.connectionPoint,
		defaultConnector: { name: 'rounded' },
		defaultRouter: { name: 'manhattan' },
		/*restrictTranslate: function(elementView) {
			let parentId = elementView.model.get('parent');
			let parentCell = parentId && this.model.getCell(parentId);
			//let parentCellType = parentCell && parentCell.get('type');
			let parentBBox = parentCell && parentCell.getBBox();
			//if(parentCellType === 'dataMap.Lane'){
			parentBBox = parentBBox || {};
			parentBBox.y += 50;
			parentBBox.height -= 50;
			//}
			return parentCell && parentBBox;
		},*/
		/*embeddingMode: false,*/
		// frontParentOnly: false,
		defaultAnchor: { name: 'center' },
		linkPinning: false,
		/*frozen: true*/
		//sorting: joint.dia.Paper.sorting.APPROX

		/*validateConnection: function(sv, sm, tv, tm, end) {
			if (sv === tv) return false;
			if (sv.model.isLink() || tv.model.isLink()) return false;
			if (end === 'target') return tv.model.getItemSide(tv.findAttribute('item-id', tm)) !== 'right';
			return sv.model.getItemSide(sv.findAttribute('item-id', sm)) !== 'left';
		},*/
		highlighting: {
			default: {
				name: 'addClass',
				options: {
					className: 'active'
				}
			}
		}
	});

	paper.on('cell:pointerclick', function(cellView) {
		if (cellView.model.isLink()) {
			graph.vcomp.flowList = cellView.model.info.dataFlows;
			graph.vcomp.dialogFormVisible = true;
		} else {
			graph.vcomp.connectionId = cellView.model.connection.id;
			graph.vcomp.databaseType = cellView.model.connection.database_type;
			graph.vcomp.previewVisible = true;
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
	paper.on('cell:pointerdown', (cellView, evt, x, y) => {
		paperScroller.startPanning(evt, x, y);
	});
	paperScroller.render();
	paperScroller.zoom(0.8, { absolute: true });
	return {
		joint: joint,
		graph: graph,
		draw: function(rdatas, linkdatas, vcomp) {
			graph.clear();

			graph.vcomp = vcomp;
			rdatas.forEach(table => {
				var node = new joint.shapes.mapping.Record({ items: [[table.items[0]]] });
				linkdatas.map((link, idx, linkdatas) => {
					if (link.source.id == table.id) linkdatas[idx].source.id = node.id;
					if (link.target.id == table.id) linkdatas[idx].target.id = node.id;
				});
				node.setName(table.label);
				node.connection = table.connection;
				if (table.id == vcomp.tableId) {
					node.attr('header/fill', '#d0d8e8');
				}
				node.addTo(graph);
				node.toggleItemCollapse(table.items[0].id);
			});

			var links = linkdatas.map(link => {
				let res = new joint.shapes.mapping.Link({
					source: { id: link.source.id, port: link.source.port },
					target: { id: link.target.id, port: link.target.port }
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
				edgeSep: 10,
				rankSep: 80,
				// ranker: 'tight-tree',
				// align: "UL",
				resizeClusters: true
				//clusterPadding: { top: 50, left: 35, right: 35, bottom: 20 }
			});
			paperScroller.center();
		}
	};
}
