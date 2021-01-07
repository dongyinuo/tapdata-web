export default function(vm) {
	return {
		form: {
			labelPosition: 'top',
			labelWidth: '200px'
		},
		defaultModel: {
			connection_type: 'source_and_target',
			thin_type: 'SID',
			supportUpdatePk: false
		},
		items: [
			{
				type: 'input',
				field: 'include_filename',
				label: vm.$t('editor.fileFormBuilder.includeFilename')
			},
			{
				type: 'input',
				field: 'exclude_filename',
				label: vm.$t('editor.fileFormBuilder.excludeFilename')
			},
			{
				type: 'input',
				field: 'file_schema',
				label: vm.$t('editor.fileFormBuilder.fileSchema')
			},
			{
				type: 'input',
				field: 'seperate',
				label: vm.$t('editor.fileFormBuilder.seperate'),
				required: true
			}
		]
	};
}
