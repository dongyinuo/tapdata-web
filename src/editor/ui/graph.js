/**
 * @author lg<lirufei0808@gmail.com>
 * @date 2/27/20
 * @description
 */
import Component from '../lib/Component';

import _ from 'lodash';
import joint from '../lib/rappid/rappid';
// import shapes from '../lib/rappid/models/shapes';
import navigatorElementView from '../lib/rappid/view/navigator';
// import Panel from "./panel";
import { stencilConfig, selectionConfig, haloConfig, toolbarConfig } from '../lib/rappid/config';
import { VueAdapter } from '../vue-adapter';
import log from '../../log';
import { DATA_FLOW_SETTING_DATA_KEY, FORM_DATA_KEY, SCHEMA_DATA_KEY, OUTPUT_SCHEMA_DATA_KEY } from '../constants';
import { isAcyclic } from 'graphlib/lib/alg';
import { EditorEventType } from '../lib/events';
import Tab from './tab';
import i18n from '../../i18n/i18n';
import { Message } from 'element-ui';
import { getUrlSearch } from '../../util/util';

window.joint = joint;

export default class Graph extends Component {
	/**
	 *
	 * @type {Editor}
	 */
	editor = null;

	/**
	 * @type {boolean}
	 */
	editable = true;
	currentCell = false;
	cellTimeout = false;

	constructor(opts) {
		super(opts);

		this.editor = opts.editor;

		this.init();
	}

	doInit() {
		this.initGraph();
		this.initStencil();
		this.initSelection();
		this.initToolsAndInspector();
		this.initializeNavigator();
		this.initializeToolbar();
		this.initKeyboardShortcuts();
		this.initTooltips();
		this.initVueAdapter();
	}

	initGraph() {
		let self = this;

		// shapes(joint);

		const graph = (this.graph = new joint.dia.Graph());

		graph.on(
			'add',
			function(cell, collection, opt) {
				log('Editor.graph.add', cell, collection, opt);
				// self.createInspector(cell);
				setTimeout(() => {
					if (cell && cell.isLink()) {
						self.createInspector(cell);
					} else if (cell.isElement()) {
						self.selection.collection.reset([cell]);
					}
				}, 100);
				self.emit(EditorEventType.ADD_CELL);
			},
			this
		);

		this.commandManager = new joint.dia.CommandManager({
			graph: graph
		});
		this.commandManager.on('stack', this.emit.bind(this, EditorEventType.DATAFLOW_CHANGED));

		const paper = (this.paper = new joint.dia.Paper({
			model: graph,
			width: 800,
			height: 800,
			gridSize: 10,
			drawGrid: false,
			linkPinning: false,
			// markAvailable: true,
			// new joint.shapes.app.Link()
			defaultLink: function(cellView) {
				if (cellView.model.get('type') === 'app.Database') return new joint.shapes.app.databaseLink();
				else return new joint.shapes.app.Link();
			},
			defaultConnectionPoint: joint.shapes.app.Link.connectionPoint,
			interactive: {
				linkMove: false
			},
			async: true,
			sorting: joint.dia.Paper.sorting.APPROX,
			snapLinks: 75,
			highlighting: {
				default: {
					name: 'stroke',
					options: {
						padding: 0,
						rx: 17,
						ry: 17,
						attrs: {
							'stroke-width': 3,
							stroke: '#00bcd4'
						}
					}
				}
			},
			validateConnection: function(cellViewS, magnetS, cellViewT, magnetT, end) {
				// don't allow loop links
				if (cellViewS === cellViewT) return false;

				let targetView = end === 'target' ? cellViewT : cellViewS;
				let sourceView = end === 'target' ? cellViewS : cellViewT;

				// don't allow link to link connection
				if (targetView.model.isLink()) return false;

				// target don't accept source connection
				if (
					typeof targetView.model.allowSource === 'function' &&
					!targetView.model.allowSource(sourceView.model)
				)
					return false;

				// source don't allow connect to target
				if (
					typeof sourceView.model.allowTarget === 'function' &&
					!sourceView.model.allowTarget(targetView.model)
				)
					return false;

				return true;
			}
		}));

		paper.on('blank:mousewheel', _.partial(this.onMousewheel, null), this);
		paper.on('cell:mousewheel', this.onMousewheel, this);
		paper.on('blank:pointerclick', this.onClickBlank.bind(this));
		paper.on({
			//鼠标移入Pager区域后，其他元素失去焦点
			'paper:mouseenter': () => {
				let ele = document.querySelector(':focus');
				ele && ele.blur();
			}
		});
		paper.on({
			'link:connect': linkView => {
				if (linkView.targetView.model.getFormData().disabled) {
					linkView.model.disconnect();
					linkView.hideTools();
					Message.error({
						message: i18n.t('dataFlow.DissedNoAction')
					});
					return;
				}
				log('Graph.link.connect', arguments);
				let acyclic = self.isAcyclic();
				if (acyclic) {
					self.updateOutputSchema(linkView.model);
				} else {
					linkView.model.disconnect();
					linkView.hideTools();
				}
			}
			/* 'link:disconnect': (linkView, evt, elementViewDisconnected, magent, arrowhead) => {
				log('Graph.link.disconnect', arguments);
				// trigger on graph.remove
				// self.updateOutputSchema(linkView.model);
			}, */
		});
		graph.on({
			remove: model => {
				log('Graph.graph.remove');
				// if( model.isLink() ){
				self.updateOutputSchema(model);
				// }
				self.emit(EditorEventType.REMOVE_CELL);
			}
			/* add: (cell) => {
				log('Graph.graph.add');
			} */
		});

		this.snaplines = new joint.ui.Snaplines({
			paper: paper
		});

		const paperScroller = (this.paperScroller = new joint.ui.PaperScroller({
			paper: paper,
			autoResizePaper: true,
			cursor: 'grab',
			contentOptions: function(paperScroller) {
				let visibleArea = paperScroller.getVisibleArea();
				return {
					padding: {
						bottom: visibleArea.height / 2,
						top: visibleArea.height / 2,
						left: visibleArea.width / 2,
						right: visibleArea.width / 2
					},
					allowNewOrigin: 'any'
				};
			}
		}));

		this.el = paperScroller.el;
		this.editor.getUI().add(this);
		paperScroller.render().center();
	}

	selectionPosition(cell) {
		// this.paperScroller.center();
		this.paperScroller.scrollToElement(cell, {
			animation: {
				duration: 600
			}
		});
		this.selection.collection.reset([cell]);
	}

	isAcyclic() {
		let acyclic = isAcyclic(this.graph.toGraphLib());
		log('Graph.link.connect.isAcyclic', acyclic);
		return acyclic;
	}

	updateOutputSchema(cell) {
		log('Graph.updateOutputSchema');
		let self = this;
		if (cell && cell.isLink()) {
			let targetCell = cell.getTargetCell();
			if (!targetCell && cell.target() && cell.target().id) {
				targetCell = self.graph.getCell(cell.target().id);
			}
			if (targetCell && typeof targetCell.updateOutputSchema === 'function') {
				targetCell.updateOutputSchema();
			}
		}
	}

	onClickBlank() {
		this.emit(EditorEventType.SELECTED_STAGE);
		if (this.editable) {
			this.editor.getRightTabPanel().removeAll(); // 清除当前所有的vue
			let rightTabPanel = this.editor.getRightTabPanel();
			if (!rightTabPanel) {
				rightTabPanel = new Tab({
					name: 'rightTabPanel',
					hiddenTabBar: true
				});
				this.editor.getRightSidebar().add(rightTabPanel); // 添加空白panel 节点渲染
			}
			this.editor.rightSidebar.add(rightTabPanel);
			this.editor.getRightSidebar().hide();
		}
		this.unHighlightAllCells();
	}

	unHighlightAllCells() {
		let paper = this.paper;
		let cells = this.graph.getCells();

		cells.forEach(cell => {
			let cellView = paper.findViewByModel(cell);
			if (cellView) {
				cellView.unhighlight();
			}
		});
	}

	selectCell(cell) {
		let self = this;
		if (Array.isArray(cell)) {
			self.selection.collection.reset(cell);
			setTimeout(() => {
				self.unHighlightAllCells();
			}, 0);
		} else {
			let first = self.selection.collection.findWhere({
				id: cell.id
			});
			if (!first) {
				self.selection.collection.reset([cell]);
			}
			if (cell.isElement() && cell.get('type').startsWith('app.')) {
				setTimeout(() => {
					self.unHighlightAllCells();
					let cellView = self.paper.findViewByModel(cell);
					let isDataNode = cell.isDataNode && cell.isDataNode();
					cellView.highlight(null, {
						name: 'stroke',
						options: {
							rx: isDataNode ? 20 : 16,
							ry: isDataNode ? 20 : 16
						}
					});
				}, 0);
			}
		}
		if (document.getElementById('searchNode')) {
			document.getElementById('searchNode').blur();
		}
		if (document.getElementById('taskNameInput')) {
			document.getElementById('taskNameInput').blur();
		}
	}

	initStencil() {
		let self = this;
		const stencil = (this.stencil = new joint.ui.Stencil({
			paper: this.paperScroller,
			snaplines: this.snaplines,
			scaleClones: true,
			width: 200,
			groups: stencilConfig.groups,
			dropAnimation: true,
			groupsToggleButtons: true,
			layout: {
				columnWidth: 70,
				columns: 3,
				rowHeight: 49
			},
			/* search: {
				'*': ['type', 'attrs/text/text', 'attrs/root/dataTooltip', 'attrs/label/text'],
				'org.Member': ['attrs/.rank/text', 'attrs/root/dataTooltip', 'attrs/.name/text']
			}, */
			// Remove tooltip definition from clone
			dragStartClone: function(cell) {
				if (cell.get('type').startsWith('app.')) {
					return self.createCell(cell.get('type'));
				} else {
					return cell.clone().removeAttr('root/dataTooltip');
				}
			}
		}));

		let stencilPanel = this.editor.getLeftSidebar().getChildByName('stencil');
		stencilPanel.getContentEl().append(stencil.el);
		let cells = stencilConfig.shapes; //通过mappingTemplate 将节点分为两大类
		let mappingTemplate = getUrlSearch('mapping');
		if (mappingTemplate === 'cluster-clone') {
			cells['data'] = cells['data'].filter(cell =>
				['app.Database', 'app.FileNode', 'app.GridFSNode'].includes(cell.type)
			);
			cells['processor'] = [];
		} else if (mappingTemplate === 'custom') {
			cells['data'] = cells['data'].filter(cell => !['app.Database', 'app.FileNode'].includes(cell.type));
		}
		stencil.render().load(cells);
	}

	createCell(cellType, formData, schema) {
		log('Graph.createCell', cellType, formData);
		let Cell = _.get(joint.shapes, cellType);
		let cell = new Cell({}).removeAttr('root/dataTooltip');
		if (formData) {
			cell.set(FORM_DATA_KEY, formData);
		}
		if (schema) {
			cell.set(SCHEMA_DATA_KEY, schema);
			cell.set(OUTPUT_SCHEMA_DATA_KEY, schema);
		}
		return cell;
	}

	addCell(cell) {
		this.graph.addCell(cell);
	}

	initSelection() {
		this.clipboard = new joint.ui.Clipboard();
		this.selection = new joint.ui.Selection({
			paper: this.paper,
			handles: selectionConfig,
			useModelGeometry: true
		});

		this.selection.collection.on('reset add remove', this.onSelectionChange.bind(this));

		// Initiate selecting when the user grabs the blank area of the paper while the Shift key is pressed.
		// Otherwise, initiate paper pan.
		this.paper.on(
			'blank:pointerdown',
			function(evt, x, y) {
				if (this.keyboard.isActive('shift', evt)) {
					this.selection.startSelecting(evt);
				} else {
					this.selection.collection.reset([]);
					this.paperScroller.startPanning(evt, x, y);
					this.paper.removeTools();
				}
			},
			this
		);

		this.paper.on(
			'element:pointerdown',
			function(elementView, evt) {
				// Select an element if CTRL/Meta key is pressed while the element is clicked.
				if (this.keyboard.isActive('ctrl meta', evt)) {
					if (
						this.selection.collection.find(function(cell) {
							return cell.isLink();
						})
					) {
						// Do not allow mixing links and elements in the selection
						this.selection.collection.reset([elementView.model]);
					} else {
						this.selection.collection.add(elementView.model);
					}
				}
			},
			this
		);

		this.selection.on(
			'selection-box:pointerdown',
			function(elementView, evt) {
				// Unselect an element if the CTRL/Meta key is pressed while a selected element is clicked.
				if (this.keyboard.isActive('ctrl meta', evt)) {
					evt.preventDefault();
					this.selection.collection.remove(elementView.model);
				}
			},
			this
		);
	}

	onSelectionChange() {
		let paper = this.paper;
		let selection = this.selection;
		let collection = selection.collection;
		if (this.selectedLink) {
			this.selectedLink.model.attr('line/stroke', '#8f8f8f');
			this.selectedLink = false;
		}

		paper.removeTools();
		joint.ui.Halo.clear(paper);
		joint.ui.FreeTransform.clear(paper);
		joint.ui.Inspector.close();
		if (collection.length === 1) {
			let primaryCell = collection.first();
			let primaryCellView = paper.requireView(primaryCell);
			selection.destroySelectionBox(primaryCell);
			this.selectPrimaryCell(primaryCellView);
		} else if (collection.length === 2) {
			collection.each(function(cell) {
				selection.createSelectionBox(cell);
			});
		}
	}

	selectPrimaryCell(cellView) {
		let cell = cellView.model;
		if (this.editable) {
			if (cell.isElement()) {
				this.selectCell(cell);
				this.selectPrimaryElement(cellView);
			} else {
				this.selectPrimaryLink(cellView);
			}
		} else {
			if (cell.isElement()) {
				this.selectCell(cell);
				// } else {
				// this.selectPrimaryLink(cellView);
			}
		}
		this.createInspector(cell);
		if (cell.isElement()) {
			this.emit(EditorEventType.SELECTED_STAGE, cell.toJSON());
		}
	}

	selectPrimaryElement(elementView) {
		let element = elementView.model;

		if (element.get('freeTransform') !== false) {
			new joint.ui.FreeTransform({
				cellView: elementView,
				allowRotation: false,
				preserveAspectRatio: !!element.get('preserveAspectRatio'),
				allowOrthogonalResize: element.get('allowOrthogonalResize') !== false
			}).render();
		}
		if (this.isSimple) return;
		if (elementView.model.getFormData().disabled && !elementView.model.getFormData().disablChecker) return;
		let halo;
		if (elementView.model.getFormData().disablChecker)
			halo = new joint.ui.Halo({
				cellView: elementView,
				handles: [],
				boxContent: false
			});
		else
			halo = new joint.ui.Halo({
				cellView: elementView,
				handles: haloConfig.handles,
				boxContent: false
			});
		halo.render();

		if (elementView.model.getFormData().disablChecker) {
			halo.$el.append(
				'<button class="handle" style="top: 40px; width:53px; height:18px; right: -10px; position: absolute;font-size: 8px; border-radius: 5px; border: none; color: rgba(0,0,0,.6); background: #e0e1e2 none;line-height: 0em;">' +
					i18n.t('dataFlow.Enable') +
					'</button>'
			);
			halo.$el.find('button').click(() => {
				event.stopPropagation();
				elementView.model.setEnabled(elementView.model);
				event.target.outerHTML = '';
			});
		} else if (!elementView.model.getFormData().disabled) {
			halo.$el.append(
				'<button class="handle" style="top: 40px; width:53px; height:18px; right: -10px; position: absolute;font-size: 8px; border-radius: 5px; border: none; color: rgba(0,0,0,.6); background: #e0e1e2 none;line-height: 0em;">' +
					i18n.t('dataFlow.Disable') +
					'</button>'
			);
			halo.$el.find('button').click(() => {
				event.stopPropagation();
				this.graph.getConnectedLinks(elementView.model).forEach(link => {
					link.attr('line/stroke', '#dedede');
					link.toBack();
					link.attributes.form_data.disabled = true;
				});
				elementView.model.setDisabled(elementView.model, true);
				event.target.outerHTML = '';
			});
		}
	}

	selectPrimaryLink(linkView) {
		this.selectedLink = linkView;
		if (this.selectedLink.model) this.selectedLink.model.attr('line/stroke', '#00bcd4');

		if (this.isSimple) return;
		if (linkView.model.getFormData().disabled) return;
		let ns = joint.linkTools;
		let toolsView = new joint.dia.ToolsView({
			name: 'link-pointerdown',
			tools: [
				new ns.Vertices({
					vertexAdding: true
				}),
				// new ns.SourceAnchor(),
				// new ns.TargetAnchor(),
				// new ns.SourceArrowhead(),
				new ns.TargetArrowhead(),
				new ns.Segments(),
				// new ns.Boundary({ padding: 15 }),
				new ns.Remove({
					offset: -20,
					distance: 40
				})
			]
		});

		linkView.addTools(toolsView);
	}

	createInspector(cell) {
		let that = this;
		this.currentCell = cell;
		that.vueAdapter.render(that.currentCell);
	}

	initToolsAndInspector() {
		let self = this;
		this.paper.on(
			{
				'cell:pointerup': function(cellView) {
					let cell = cellView.model;
					let collection = this.selection.collection;
					if (collection.includes(cell)) return;
					if (cell.isLink() && (!cell.getTargetCell() || !cell.getSourceCell())) {
						cell.remove();
					} else {
						collection.reset([cell]);
					}
				},

				'link:mouseenter': function(linkView) {
					if (linkView.model.getFormData().disabled) return;
					if (linkView.hasTools()) return;
					if (!self.editable) return;

					let ns = joint.linkTools;
					let toolsView = new joint.dia.ToolsView({
						name: 'link-hover',
						tools: [
							new ns.Vertices({
								vertexAdding: false
							}),
							// new ns.SourceArrowhead(),
							new ns.TargetArrowhead()
						]
					});

					linkView.addTools(toolsView);
				},

				'link:mouseleave': function(linkView) {
					// Remove only the hover tool, not the pointerdown tool
					if (linkView.hasTools('link-hover')) {
						linkView.removeTools();
					}
				}
			},
			this
		);

		this.graph.on(
			'change',
			function() {
				// if (!cell.isLink() || !opt.inspector) return;
				/* let ns = joint.linkTools;
			let toolsView = new joint.dia.ToolsView({
				name: 'link-inspected',
				tools: [
					new ns.Boundary({ padding: 15 }),
				]
			});

			cell.findView(this.paper).addTools(toolsView); */
			},
			this
		);
	}

	initializeNavigator() {
		navigatorElementView(joint);

		let navigator = (this.navigator = new joint.ui.Navigator({
			width: 150,
			height: 150,
			paperScroller: this.paperScroller,
			zoom: {
				grid: 0.2,
				min: 0.2,
				max: 5
			},
			paperOptions: {
				async: true,
				elementView: joint.shapes.app.NavigatorElementView,
				linkView: joint.shapes.app.NavigatorLinkView,
				cellViewNamespace: {
					/* no other views are accessible in the navigator */
				}
			}
		}));

		this.editor
			.getUI()
			.getNavigatorEl()
			.append(navigator.el);
		navigator.render();
	}

	initializeToolbar() {
		let toolbar = (this.toolbar = new joint.ui.Toolbar({
			autoToggle: true,
			groups: toolbarConfig.groups,
			tools: toolbarConfig.tools,
			references: {
				paperScroller: this.paperScroller,
				commandManager: this.commandManager
			}
		}));

		toolbar.on({
			'svg:pointerclick': this.openAsSVG.bind(this),
			'png:pointerclick': this.openAsPNG.bind(this),
			'to-front:pointerclick': this.applyOnSelection.bind(this, 'toFront'),
			'to-back:pointerclick': this.applyOnSelection.bind(this, 'toBack'),
			'layout:pointerclick': this.layoutDirectedGraph.bind(this),
			'snapline:change': this.changeSnapLines.bind(this),
			'clear:pointerclick': this.graph.clear.bind(this.graph),
			'print:pointerclick': this.paper.print.bind(this.paper),
			'grid-size:change': this.paper.setGridSize.bind(this.paper)
		});

		this.editor
			.getUI()
			.getGraphToolbarEl()
			.append(toolbar.el);
		toolbar.render();
	}

	initKeyboardShortcuts() {
		this.keyboard = new joint.ui.Keyboard();
		let isMac = /macintosh|mac os x/i.test(navigator.userAgent);
		let keyboardEvents = [
			{
				keystroke: isMac ? 'command+s' : 'ctrl+s',
				on: function(evt) {
					evt.preventDefault();
					// Copy all selected elements and their associated links.
					this.emit(EditorEventType.DRAFT_SAVE);
				}
			},
			{
				keystroke: isMac ? 'command+c' : 'ctrl+c',
				on: function() {
					// Copy all selected elements and their associated links.
					this.clipboard.copyElements(this.selection.collection, this.graph);
				}
			},
			{
				keystroke: isMac ? 'command+v' : 'ctrl+v',
				on: function() {
					let pastedCells = this.clipboard.pasteCells(this.graph, {
						translate: {
							dx: 20,
							dy: 20
						},
						useLocalStorage: true
					});

					let elements = _.filter(pastedCells, function(cell) {
						return cell.isElement();
					});

					// Make sure pasted elements get selected immediately. This makes the UX better as
					// the user can immediately manipulate the pasted elements.
					this.selection.collection.reset(elements);
				}
			},
			{
				keystroke: isMac ? 'command+x' : 'ctrl+x',
				on: function() {
					this.clipboard.cutElements(this.selection.collection, this.graph);
				}
			},
			{
				keystroke: 'delete backspace',
				on: function(evt) {
					evt.preventDefault();
					let hasDised = false;
					this.selection.collection.toArray().forEach(it => {
						if (it.getFormData().disabled) hasDised = true;
					});
					if (hasDised) {
						Message.error({
							message: i18n.t('dataFlow.DissedNoAction')
						});
						return;
					}
					this.graph.removeCells(this.selection.collection.toArray());
				}
			},
			{
				keystroke: isMac ? 'command+z' : 'ctrl+z',
				on: function() {
					this.commandManager.undo();
					this.selection.cancelSelection();
				}
			},
			{
				keystroke: isMac ? 'command+shift+z' : 'ctrl+z',
				on: function() {
					this.commandManager.redo();
					this.selection.cancelSelection();
				}
			},
			{
				keystroke: isMac ? 'command+a' : 'ctrl+a',
				on: function() {
					this.selection.collection.reset(this.graph.getElements());
				}
			},
			{
				keystroke: isMac ? 'command+plus' : 'ctrl+plus',
				on: function(evt) {
					evt.preventDefault();
					this.paperScroller.zoom(0.2, {
						max: 5,
						grid: 0.2
					});
				}
			},
			{
				keystroke: isMac ? 'command+minus' : 'ctrl+minus',
				on: function(evt) {
					evt.preventDefault();
					this.paperScroller.zoom(-0.2, {
						min: 0.2,
						grid: 0.2
					});
				}
			},
			{
				keystroke: 'keydown:shift',
				on: function() {
					this.paperScroller.setCursor('crosshair');
				}
			},
			{
				keystroke: 'keyup:shift',
				on: function() {
					this.paperScroller.setCursor('grab');
				}
			}
		];
		let keyboardOption = {};
		keyboardEvents.forEach(e => {
			keyboardOption[e.keystroke] = e.on;
		});

		this.keyboard.on(keyboardOption, this);
	}

	initTooltips() {
		new joint.ui.Tooltip({
			rootTarget: document.body,
			target: '[data-tooltip]',
			direction: 'auto',
			padding: 10,
			animation: true
		});
	}

	initVueAdapter() {
		this.vueAdapter = new VueAdapter(this.editor, this);
	}

	resize() {
		// this.graph.resize(width, height);
		// this.paper.setDimensions(width, height);
	}

	onMousewheel(cellView, evt, x, y, delta) {
		if (this.keyboard.isActive('alt', evt)) {
			evt.preventDefault();
			this.paperScroller.zoom(delta * 0.2, {
				min: 0.2,
				max: 5,
				grid: 0.2,
				ox: x,
				oy: y
			});
		}
	}

	exportStylesheet = '.scalable * { vector-effect: non-scaling-stroke }';

	openAsSVG() {
		let paper = this.paper;
		paper.hideTools().toSVG(
			function(svg) {
				new joint.ui.Lightbox({
					image: 'data:image/svg+xml,' + encodeURIComponent(svg),
					downloadable: true,
					fileName: 'Rappid'
				}).open();
				paper.showTools();
			},
			{
				preserveDimensions: true,
				convertImagesToDataUris: true,
				useComputedStyles: false,
				stylesheet: this.exportStylesheet
			}
		);
	}

	openAsPNG() {
		let paper = this.paper;
		paper.hideTools().toPNG(
			function(dataURL) {
				new joint.ui.Lightbox({
					image: dataURL,
					downloadable: true,
					fileName: 'Rappid'
				}).open();
				paper.showTools();
			},
			{
				padding: 10,
				useComputedStyles: false,
				stylesheet: this.exportStylesheet
			}
		);
	}

	applyOnSelection(method) {
		this.graph.startBatch('selection');
		this.selection.collection.models.forEach(function(model) {
			model[method]();
		});
		this.graph.stopBatch('selection');
	}

	layoutDirectedGraph() {
		joint.layout.DirectedGraph.layout(this.graph, {
			setLinkVertices: true,
			rankDir: 'LR',
			marginX: 200,
			marginY: 200,
			rankSep: 200
		});

		setTimeout(() => {
			this.paperScroller.centerContent();
		}, 100);
	}

	changeSnapLines(checked) {
		if (checked) {
			this.snaplines.startListening();
			this.stencil.options.snaplines = this.snaplines;
		} else {
			this.snaplines.stopListening();
			this.stencil.options.snaplines = null;
		}
	}
	getClientOffset() {
		let a = this.paper.clientToLocalRect();
		let b = this.paper.clientToLocalPoint();
		let c = this.paper.clientOffset();
		log(a, b, c);
		return this.paper.clientToLocalPoint();
	}

	validate() {
		let self = this;
		let cells = this.graph.getCells();
		let errorMessage;
		for (let i = 0; i < cells.length; i++) {
			let cell = cells[i];
			try {
				if (typeof cell.validate === 'function') {
					cell.validate();
				}
			} catch (e) {
				errorMessage = e.message;
				self.selectCell(cell);
				break;
			}
		}
		return errorMessage || true;
	}

	setEditable(editable) {
		log('Graph.setEditable', editable);
		this.editable = editable;

		if (editable) {
			this.keyboard.enable();
			this.toolbar.getWidgetByName('redo').enable();
			this.toolbar.getWidgetByName('undo').enable();
			this.toolbar.getWidgetByName('clear').enable();
		} else {
			// clear selected cells
			let first = this.selection.collection.shift();
			while (first) {
				first = this.selection.collection.shift();
			}

			this.unHighlightAllCells();
			this.keyboard.disable();
			this.toolbar.getWidgetByName('redo').disable();
			this.toolbar.getWidgetByName('undo').disable();
			this.toolbar.getWidgetByName('clear').disable();
			setTimeout(() => this.paperScroller.centerContent(), 0);
		}
	}

	getData() {
		return this.graph.toJSON();
	}

	loadData(jsonObject) {
		this.graph.fromJSON(jsonObject);
		setTimeout(() => {
			this.paperScroller.centerContent();
		}, 0);
	}

	getGraphLib() {
		return this.graph.toGraphLib();
	}

	setSettingData(data) {
		this.graph.set(DATA_FLOW_SETTING_DATA_KEY, _.cloneDeep(data));
	}
	getSettingData() {
		return _.cloneDeep(this.graph.get(DATA_FLOW_SETTING_DATA_KEY));
	}
}
