export default function(vm) {
	return {
		form: {
			labelPosition: 'right',
			labelWidth: '200px'
		},
		defaultModel: {
			connection_type: 'target',
			thin_type: 'SID',
			supportUpdatePk: false
		},
		items: [
			{
				type: 'radio',
				field: 'connection_type',
				label: vm.$t('dataForm.form.connectionType'),
				options: [
					{
						label: vm.$t('dataForm.form.options.target'),
						tip: vm.$t('dataForm.form.options.targetTips'),
						value: 'target'
					}
				],
				required: true
			},
			{
				type: 'input',
				field: 'database_host',
				label: vm.$t('dataForm.form.host'),
				rules: [
					{
						required: true,
						validator: (rule, value, callback) => {
							let port = vm.model['database_port'];
							if (!value || !value.trim()) {
								callback(new Error(vm.$t('dataForm.error.noneHost')));
							} else if (!port) {
								callback(new Error(vm.$t('dataForm.error.nonePort')));
							} else if (!/\d+/.test(port)) {
								callback(new Error(vm.$t('dataForm.error.portNumber')));
							} else if (port < 1 || port > 65535) {
								callback(new Error(vm.$t('dataForm.error.portRange')));
							} else {
								callback();
							}
						}
					}
				],
				appendSlot: h => {
					return h('FbInput', {
						props: {
							value: vm.model['database_port'],
							config: {
								placeholder: vm.$t('dataForm.form.port')
							}
						},
						on: {
							input(val) {
								vm.model['database_port'] = val;
							}
						}
					});
				}
			},
			{
				type: 'input',
				field: 'database_name',
				label: vm.$t('dataForm.form.indexPrefix'),
				required: true
			},
			{
				type: 'input',
				field: 'database_username',
				label: vm.$t('dataForm.form.userName'),
				showByUrl: 2
			},
			{
				type: 'input',
				field: 'plain_password',
				label: vm.$t('dataForm.form.password'),
				domType: 'password',
				showByUrl: 2
			}
		]
	};
}
