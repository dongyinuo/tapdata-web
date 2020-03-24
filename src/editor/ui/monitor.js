/**
 * @author lg<lirufei0808@gmail.com>
 * @date 3/24/20
 * @description
 */
import Component from '../lib/Component';
import $ from 'jquery';
import log from "../../log";
import EchartData from '../../view/job/echartData';
import i18n from '../../i18n/i18n';
import Vue from 'vue';

export default class Monitor extends Component{

	constructor(opts) {
		super(opts);
		this.init();
	}

	doInit() {
		let self = this;
		let editor = this.opts.editor;

		log('Monitor.doInit', this.opts.dataFlow);

		self.el = $(`<div class="e-monitor-wrap"></div>`);

		let Comp = Vue.extend(EchartData);

		let dataFlowId = this.opts.dataFlow.id || '';
		let stages = this.opts.dataFlow.stages || [];

		let vm = self.vm = new Comp({
			i18n,
			propsData: {
				stages: stages,
				dataFlowId: dataFlowId
			}
		});

		let vueContainerDom = document.createElement('div');
		this.getContentEl().append(vueContainerDom);
		vm.$mount(vueContainerDom);

		editor.graph.on('stage:selected', (stageData) => {
			log('Monitor.stage.selected');
		});
	}

	getContentEl() {
		return this.el;
	}

	destroy(){
		log('Monitor.destroy');
	}

}
