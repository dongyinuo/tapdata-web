import enLocale from 'element-ui/lib/locale/lang/en';

const en = {
	...enLocale,
	message: {
		api: {
			get: {
				error: 'Load data failed.'
			}
		},
		exists_name: 'Name already exists',
		search: 'search',
		serviceCluMange: 'Service cluster management',
		statusLog: 'Status log',
		sourchName: 'Name search',
		placeholderServer: 'Please enter a server name',
		filter: 'Filter',
		addServerMon: 'add server monitoring',
		startUp: 'start up',
		close: 'close',
		manageSys: 'manage system',
		restart: 'restart',
		syncGover: 'Syn gover',
		screen: 'Screen',
		delete: 'delete',
		cancle: 'cancle',
		cancel: 'Cancel',
		confirm: 'confirm',
		placeholderMonServer: 'Please enter the monitored service name',
		placeholderCommand: 'Please enter command',
		nullContent: 'Can not be empty',
		saveOK: 'Saved successfully',
		saveFail: 'Save failed',
		copyFail: 'Copy failed',
		copySuccess: 'Copy successfully',
		deleteOK: 'successfully deleted',
		deleteFail: 'failed to delete',
		selectTime: 'Select time',
		selectDate: 'Select date',
		server: 'server',
		serviceType: 'Service type',
		level: 'level',
		placeholderSelect: 'Please select',
		time: 'time',
		hostName: 'host name',
		ipAddress: 'ip address',
		uniqueEncode: 'unique encoding',
		logs: 'log',
		closeSever: 'close service',
		restartServer: 'restart service',
		deleteOrNot: 'delete or not',
		startupAfter_delete: 'Please delete after startup',
		startupAfter_add: 'Please add after startup',
		noData: 'NO DATA ',
		prompt: 'Prompt',
		resetMessage: 'This operation will reset the task state, will it reset?',
		deteleMessage: 'This operation will delete the task, will it delete it?',
		cancleReset: 'cancel reset',
		resetOk: 'Reset success',
		resetFailed: 'Reset Failed',
		operator: 'Operator'
	},
	dataFlow: {
		average: 'Average',
		current: 'Current',
		allNode: 'All Nodes',
		taskName: 'Flow Name',
		creatdor: 'Creater',
		creationTime: 'Create Time',
		state: 'State',
		executionTime: 'Lapsed Time',
		inputNumber: 'Input Total',
		outputNumber: 'Output Total',
		rowCount: 'Records',
		inputOutput: 'Throughput',
		transf: 'Transmission Time',
		dataScreening: 'Data Screening',
		second: "SEC",
		min: "MIN",
		hour: "HOUR",
		day: "DAY",
		input: 'Input',
		output: 'Output',
		totalInput: 'Total input',
		totalOutput: 'Total Output',
		replicate: "Replicate Lag",
		throughputpop: 'The read speed from source node and the write speed to the target node, larger number is better',
		transtime_pop: 'The time lapsed from the data record is read from the source node until the data is written into target node',
		replicate_pop: 'The time gap between source node last update time and target node last update time',
		status: {
			running: 'Running',
			paused: 'Paused',
			draft: 'Draft',
			scheduled: 'Scheduled',
			stopping: 'Stopping',
			error: 'Error',
			force_stopping: 'Force Stopping',
		},
		searchPlaceholder: 'Task Name / Node Name / Library Table Name',
		dataRange: 'date range',
		startTime: 'Start time',
		endTime: 'End time',
		separator: "to",
		dataPlaceholder: "Select time range",
		taskStatus: 'Run status',
		taskStatusPlaceholder: 'Please select a task status',
		updateTime: 'Update time',
		runningSpeed: 'Running speed',
		operate: 'Operate',
		dataMap: 'Data Map',
		edit: 'Edit',
		copy: 'Copy',
		reset: 'Reset',
		select_source_connection: 'Source-side connection',
		select_sync_mode: 'Sync Mode',
		mapping: 'Association',
		select_target_connection: 'Target connection',
		sync_mode: 'Sync Mode',
		sync_type: 'Sync type',
		initial_sync: 'INITIAL SYNC',
		cdc: ' CDC ',
		send_email: 'Send Email',
		stopped: 'task stopped',
		error: 'task error',
		edited: 'task edited',
		started: 'task started',
		drop_target_before_start: 'Whether the target table is deleted before starting the task',
		run_custom_sql: 'Run custom SQL repeatedly',
		stop_on_error: 'Stop synchronization when an error is encountered',
		need_to_create_Index: 'Create target index automatically',
		is_schedule: 'Scheduled tasks regularly',
		cron_expression: 'Scheduling cron expression',
		data_quality_tag: 'Add data quality tag',
		notification_lag: 'Notification',
		isOpenAutoDDL: 'Automatically handle DDL operations',
		send_email_when_replication: 'Resend in a few seconds',
		send_email_at_most_one_replication: 'Cancel sending in more than seconds',
		read_cdc_interval: 'Incremental synchronization interval (ms)',
		read_batch_size: 'How many reads each time',
		mission: 'Description',
		yes: 'yes',
		no: 'no',
		nodeName: 'Node Name',
		aggFunction: 'Aggregation Function',
		aggExpression: 'expression',
		filterPredicate: 'Filter Predicate',
		groupByExpression: 'Group By Expression',
		polymerization: 'Polymerization',
		button: {
			setting: 'Setting',
			logs: 'Logs',
			capture: 'Capture',
			stop_capture: 'Stop Capture',
			start: 'Start',
			stop: 'Stop',
			force_stop: 'Force Stop',
			reset: 'Reset',
			save: 'Save',
		},
		save_before_running: 'Please save the task before running',
		reset_job: {
			msg: 'Reset Job?',
			tip: 'Tip',
		},
		stop_job: {
			msg: 'Stop jobs?',
			force_stop_msg: 'Force Stop jobs?',
			tip: 'Tip'
		}
	},
	editor: {
		cell: {
			validate: {
				empty_name: 'Name is required.',

				none_setting: 'Settings cannot be none.',
				none_stage: 'Must have one stage.',
				none_data_node: 'At least 2 data node in graph',
				none_link_node: 'At least 1 link in graph',
				start_with_data_node: 'Must start with a data node',
				acyclic: 'The graph cannot have cyclic'
			},
			data_node: {
				database: {
					name: 'Database',
					tip: 'Any Database',
					defaultText: 'Database',

					none_database: 'Database is required.',

					form: {
						placeholder: 'Please select database',
						label: 'Database'
					}
				},
				collection: {
					name: 'Collection',
					tip: 'MongoDB Collection',
					defaultText: 'Collection',

					none_database: 'Database is required.',
					none_collection: 'Collection is required.',
					none_pk: 'Primary key is required.',

					form: {
						database: {
							label: 'Database',
							placeholder: 'Please select MongoDB database'
						},
						collection: {
							label: 'Collection',
							placeholder: 'Please select collection'
						},
						pk: {
							label: 'Primary key',
							placeholder: 'Please enter primary key'
						},
						dropTable: {
							label: 'Existing data',
							placeholder: '',
							keep: 'Keep existing data',
							remove: 'Remove exists data at before sync'
						}
					}
				},
				table: {
					name: 'Table',
					tip: 'RDBMS Table',
					defaultText: 'Table',

					none_database: 'Database is required.',
					none_table: 'Table is required.',
					none_pk: 'Primary key is required.',

					form: {
						database: {
							label: 'Database',
							placeholder: 'Please select RDBMS database'
						},
						table: {
							label: 'Table',
							placeholder: 'Please select table'
						},
						custom_sql: {
							label: 'Custom SQL',
							placeholder: 'Please input you custom sql'
						}
					}
				}
			},
			processor: {
				aggregate: {
					name: 'Aggregate',
					tip: 'Aggregate processor',
					defaultText: 'Aggregate',
					none_function: 'Aggregate function is required.',
					none_group: 'Group expression is required.',
					none_aggregation_expression: 'Aggregate expression is required.',
					new_aggregate: 'Add new aggregate',
					none_stage: 'Must have one aggregate',
				},
				field: {
					name: 'Field',
					tip: 'Field processor',
					defaultText: 'Field processor',

					form: {
						name: {
							label: 'Node name',
							placeholder: 'Please input you node name'
						},
						description: {
							label: 'Description',
							placeholder: 'Please input you node description'
						},
						fieldName: 'Field name',
						fieldType: 'Field type'
					}
				},
				script: {
					name: 'Script',
					tip: 'Script processor',
					defaultText: 'Script processor',

					none_script_type: 'Script type is required.',
					none_script: 'Script is required.',

					form: {
						name: {
							label: 'Node name',
							placeholder: '请输入节点名称'
						},
						type: {
							label: 'Script Type',
							placeholder: 'Please select script type'
						},
						script: {
							label: 'Script',
							placeholder: 'Please input script'
						},
					}
				}
			},
			link: {
				none_join_type: 'JoinType is required',
				none_join_key: 'JoinKeys is required',
				none_join_path: 'JoinPath is required',
				form: {
					joinType: {
						label: 'Data write model',
						placeholder: 'Please select Data Write model'
					},
					joinPath: {
						label: 'JoinPath',
						placeholder: 'Please input join path'
					},
					joinKeys: {
						label: 'Association condition',
						sourceField: 'Source Field',
						targetField: 'Target Field',
					},
				},

				writeMode: {
					append: 'Append into Target',
					upsert: 'Match and Merge or Insert New',
					update: 'Match and Merge',
					merge_embed: 'Match then Embed as Array in target',
				}
			}
		},
		ui: {
			sidebar: {
				setting: 'Data Flow Settings',
				node_setting: 'Node Settings',
				logs: 'Logs',
				capture: 'Capture',
				style: 'Style',

				data_nodes: 'Data Nodes',
				processor: 'Processor',
			},
			toolbar: {
				undo: {
					tip: 'Undo'
				},
				redo: {
					tip: 'Redo'
				},
				clear_paper: {
					tip: 'Clear Paper'
				},
				export_svg: {
					tip: 'Open as SVG in a pop-up'
				},
				export_png: {
					tip: 'Open as SVG in a pop-up'
				},
				print: {
					tip: 'Open a Print Dialog'
				},
				to_back: {
					tip: 'Send Object to Back'
				},
				to_front: {
					tip: 'Bring Object to Front'
				},
				layout: {
					tip: 'Auto-layout Graph'
				},
				zoom_to_fit: {
					tip: 'Zoom To Fit'
				},
				zoom_out: {
					tip: 'Zoom Out'
				},
				zoom_in: {
					tip: 'Zoom In'
				},
				grid_size: {
					tip: 'Change Grid Size'
				},
				fullscreen: {
					tip: 'Toggle Fullscreen Mode'
				}
			},
		}
	}
};

export default en;
