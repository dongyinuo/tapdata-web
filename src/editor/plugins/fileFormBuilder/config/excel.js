export default function(vm) {
	return {
		form: {
			labelPosition: 'top',
			labelWidth: '200px',
			disabled: false
		},
		defaultModel: {
			fileFilter: 'include'
		},
		items: [
			{
				type: 'select',
				field: 'fileFilter',
				label: vm.$t('editor.fileFormBuilder.fileFilter'),
				options: [
					{
						label: vm.$t('editor.fileFormBuilder.include'),
						value: 'include'
					},
					{
						label: vm.$t('editor.fileFormBuilder.exclude'),
						value: 'exclude'
					}
				]
			},
			{
				type: 'input',
				field: 'include_filename',
				label: vm.$t('editor.fileFormBuilder.includeFilename'),
				show: true,
				dependOn: [
					{
						triggerOptions: [
							{
								field: 'fileFilter',
								value: 'exclude'
							}
						],
						triggerConfig: {
							show: false
						}
					}
				]
			},
			{
				type: 'input',
				field: 'exclude_filename',
				label: vm.$t('editor.fileFormBuilder.excludeFilename'),
				show: true,
				dependOn: [
					{
						triggerOptions: [
							{
								field: 'fileFilter',
								value: 'include'
							}
						],
						triggerConfig: {
							show: false
						}
					}
				]
			},
			{
				type: 'input',
				field: 'file_schema',
				label: vm.$t('editor.fileFormBuilder.fileSchema')
			},
			{
				type: 'input',
				field: 'plain_password',
				label: vm.$t('editor.fileFormBuilder.excelPassword')
			}
		]
	};
}
