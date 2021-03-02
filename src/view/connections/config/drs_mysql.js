export default function(vm) {
	return {
		form: {
			labelPosition: 'right',
			labelWidth: '200px'
		},
		defaultModel: {
			connection_type: 'source_and_target'
		},
		items: [
			{
				type: 'slot',
				slot: 'name'
			},
			{
				type: 'select',
				field: 'region',
				label: '选择实例',
				options: [],
				required: true
			},
			{
				type: 'select',
				field: 'zone',
				label: '选择实例可用区',
				options: [],
				required: true
			},
			{
				type: 'radio',
				field: 'sourceType',
				label: '连接来源',
				options: [
					{
						label: 'RDS实例',
						tip: '创建移动云内的RDS实例为来源的连接',
						value: 'rds'
					},
					{
						label: 'ECS自建库',
						tip: '创建移动云内ECS自建库内的数据库为来源的连接，开通网络策略',
						value: 'ecs'
					},
					{
						label: '云外自建库',
						tip: '创建来自移动云外部的用户自建数据库连接',
						value: 'selfDB'
					}
				],
				required: true
			},
			{
				type: 'select',
				field: 's_region',
				label: 'RDS地域',
				options: [],
				show: true,
				dependOn: [
					{
						triggerOptions: [
							{
								field: 'sourceType',
								value: 'selfDB'
							}
						],
						triggerConfig: {
							show: false
						}
					},
					{
						triggerOptions: [
							{
								field: 'sourceType',
								value: 'ecs'
							}
						],
						triggerConfig: {
							label: 'ECS地域'
						}
					}
				],
				required: true
			},
			{
				type: 'select',
				field: 's_zone',
				label: 'RDS可用区',
				options: [],
				show: true,
				dependOn: [
					{
						triggerOptions: [
							{
								field: 'sourceType',
								value: 'selfDB'
							}
						],
						triggerConfig: {
							show: false
						}
					},
					{
						triggerOptions: [
							{
								field: 'sourceType',
								value: 'ecs'
							}
						],
						triggerConfig: {
							label: 'ECS可用区'
						}
					}
				],
				required: true
			},
			{
				type: 'select',
				field: 'vpc',
				label: '选择VPC',
				options: [],
				show: false,
				dependOn: [
					{
						triggerOptions: [
							{
								field: 'sourceType',
								value: 'ecs'
							}
						],
						triggerConfig: {
							show: true
						}
					}
				],
				required: true
			},
			{
				type: 'slot',
				slot: 'vpc-setting'
			},
			// {
			// 	type: 'select',
			// 	field: 'DRS_instances',
			// 	label: 'RDS实例',
			// 	options: [
			// 		{
			// 			label: 'RDS实例1',
			// 			value: 'DRS_instances1'
			// 		},
			// 		{
			// 			label: 'RDS实例2',
			// 			value: 'DRS_instances2'
			// 		}
			// 	],
			// 	show: true,
			// 	dependOn: [
			// 		{
			// 			triggerOptions: [
			// 				{
			// 					field: 'connectionType',
			// 					value: 'tapdata'
			// 				}
			// 			],
			// 			triggerConfig: {
			// 				show: false
			// 			}
			// 		}
			// 	],
			// 	required: true
			// },
			// {
			// 	type: 'select',
			// 	field: 'IP_type',
			// 	label: 'IPV4/IPV4',
			// 	options: [
			// 		{
			// 			label: 'IPv4/IPv6',
			// 			value: 'IPv4/IPv6'
			// 		}
			// 	],
			// 	show: true,
			// 	dependOn: [
			// 		{
			// 			triggerOptions: [
			// 				{
			// 					field: 'connectionType',
			// 					value: 'tapdata'
			// 				}
			// 			],
			// 			triggerConfig: {
			// 				show: false
			// 			}
			// 		}
			// 	],
			// 	required: true
			// },
			{
				type: 'input',
				field: 'database_host',
				label: vm.$t('dataForm.form.host'),
				rules: [
					{
						required: true,
						validator(rule, value, callback) {
							if (!value || !value.trim()) {
								callback(new Error(vm.$t('dataForm.error.noneHost')));
							} else {
								callback();
							}
						}
					}
				]
			},
			{
				type: 'input',
				field: 'database_port',
				label: vm.$t('dataForm.form.port'),
				required: true,
				rules: [
					{
						required: true,
						validator(rule, value, callback) {
							if (!value) {
								callback(new Error(vm.$t('dataForm.error.nonePort')));
							} else if (!/^\d+$/.test(value)) {
								callback(new Error(vm.$t('dataForm.error.portNumber')));
							} else if (value < 1 || value > 65535) {
								callback(new Error(vm.$t('dataForm.error.portRange')));
							} else {
								callback();
							}
						}
					}
				]
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
				label: vm.$t('dataForm.form.userName')
			},
			{
				type: 'input',
				field: 'plain_password',
				label: vm.$t('dataForm.form.password'),
				domType: 'password',
				showPassword: true
			}
		]
	};
}
