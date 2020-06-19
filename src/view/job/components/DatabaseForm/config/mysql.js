export default function(vm) {
	return {
		defaultModel: {
			connection_type: 'source_and_target'
		},
		items: [
			{
				type: 'radio',
				field: 'connection_type',
				label: vm.$t('dataForm.form.connectionType'),
				options: [
					{ label: vm.$t('dataForm.form.options.sourceAndTarget'), value: 'source_and_target' },
					{ label: vm.$t('dataForm.form.options.source'), value: 'source' },
					{ label: vm.$t('dataForm.form.options.target'), value: 'target' }
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
							} else if (!port || !port.trim()) {
								callback(new Error(vm.$t('dataForm.error.nonePort')));
							} else if (!/^(0|\+?[1-9][0-9]*)$/.test(port)) {
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
				label: vm.$t('dataForm.form.databaseName'),
				required: true
			},
			{
				type: 'input',
				field: 'database_username',
				label: vm.$t('dataForm.form.userName'),
				required: true
			},
			{
				type: 'input',
				field: 'plain_password',
				label: vm.$t('dataForm.form.password'),
				domType: 'password',
				showPassword: true,
				required: true
			},
			{
				type: 'input',
				field: 'table_filter',
				label: vm.$t('dataForm.form.tableFilter'),
				tips: vm.$t('dataForm.form.tableFilterTips'),
				maxlength: 100,
				showWordLimit: true
			},
			{
				type: 'input',
				field: 'additionalString',
				label: vm.$t('dataForm.form.additionalString')
			}
		]
	};
}
