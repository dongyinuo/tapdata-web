import enLocale from 'element-ui/lib/locale/lang/en';

const en = {
	...enLocale,
	tap: {
		login: 'Tapdata-Login',
		registry: 'Tapdata-register',
		verificationEmail: 'Tapdata-Email verification',
		passwordReset: 'Tapdata-Modify Password',
		home: 'Tapdata-Home',
		connection: 'Tapdata-Connection ',
		connectionEdtion: 'Tapdata-ConnectionEdtion',
		jobFlow: 'Tapdata-JobFlow',
		jsFuncs: 'Tapdata-JsFuncs',
		dataCatalog: 'Tapdata-DataCatalog',
		metadataInstances: 'Tapdata-MetadataInstances',
		dataQuality: 'Tapdata-DataQuality',
		TimeToLive: 'Tapdata-TimeToLive',
		dataLineage: 'Tapdata-DataLineage',
		dataRules: 'Tapdata-DataRules ',
		apiManagement: 'Tapdata-APIManagement ',
		apiEdition: 'Tapdata-APIEdition',
		dataExplor: 'Tapdata-DataExplor',
		docTest: 'Tapdata-Doc&Test',
		apiStats: 'Tapdata-API Stats',
		apiClients: 'Tapdata-APIClients ',
		apiSever: 'Tapdata-APISever',
		dictionary: 'Tapdata-Dictionary',
		topology: 'Tapdata-Topology',
		serversOversee: 'Tapdata-ServersOversee',
		journal: 'Tapdata-Journal',
		apiInfo: 'Tapdata-APIInfo',
		agentdownload: 'Tapdata-Agentdownload',
		dataCollect: 'Tapdata-DataCollect',
		upload: 'Tapdata-Upload',

		jobSchedule: 'Tapdata-JobSchedule',
		clusterManagement: 'Tapdata-ClusterManagement ',
		agentManagement: 'Tapdata-AgentManagement ',
		userManagement: 'Tapdata-UserManagement ',
		userEdition: 'Tapdata-UserEdition',
		roleManagement: 'Tapdata-RoleManagement',
		roleEdition: 'Tapdata-RoleEdition ',
		systemSettings: 'Tapdata-SystemSettings',
		account: 'Tapdata-Account',
		settingCenter: 'Tapdata-Setting Center'
	},
	errorCode: {
		networkUnconnected: 'Network unconnected',
		serverAbnormal: 'Server abnormal',
		requested: 'The resource you requested not existed',
		unauthorized: 'Unauthorized',
		parameters: 'Incorrect input parameters',
		timeout: 'Request time out'
	},
	app: {
		document: 'Documentation',
		qa: 'Customer Service',
		account: 'Account',
		version: 'Version',
		home: 'Home',
		signOut: 'Sign out',
		signOutMsg: 'Are you sure to sign out?',
		save: 'Save',
		customerService: {
			technicalSupport: 'User Support',
			technicalSupportText: 'Any question, please submit to',
			technicalSupportText1:
				'The account and password of Support Forum is same as cloud.tapdata.net.We will response you as soon as possible.',
			userSupport: 'Support Forum',
			otherDmands: 'Other Requirements',
			otherDmandsText: 'Any requirement, please contact us by scanning WeChat QR below.'
		},

		signIn: {
			slogan: 'Use your data, as easy as water from tap',
			signIn: 'Sign in',
			keepSignIn: 'Keep signed in',
			email_placeholder: 'Enter your email',
			password_placeholder: 'Enter your password',

			email_require: 'E-mail is required.',
			email_invalid: 'E-mail must be valid.',
			password_invalid: 'Password at least 5 characters.',
			account_waiting_approve: 'Your account is waiting administrator to approve.',
			account_disabled: 'Your account is disabled by administrator.',
			permission_denied: 'Permission denied.',
			signInFail: "The email and password didn't work.",
			registry: 'Registration',
			registry_tip: 'I agree with',
			userPplicy: ' user policy',
			nextStep: 'Next',
			haveAccpunt: 'Remember account?',
			backLogin: 'Back to login',

			email_existed: 'Email address has been registered',
			userPplicy_message: 'Please tick "agree with user policy"',
			modifyPassword: 'Reset password',
			newPasswordTip:
				'Enter your registered mailbox and new password, and we will send you confirmation email and click link to reset password',
			newpassword_placeholder: 'Please set a new password',
			rememberPasswords: 'Remember passwords?',
			Registration: 'Register an account',
			forgetPassword: 'Forget password?',
			confirmationEmail: 'Registration confirmation email has been sent to',
			mailbox: 'Please log in to the mailbox and click the link to confirm~',
			receiveEmail: "Didn't receive email? Click",
			resend: 'Resend',
			orClick: 'or click',
			account: 'Account',
			accountSuccess: 'has been successfully registered~',
			clickBtn: 'Click the button below to enjoy the journey of data transmission',
			resetClickBtn: 'Click the button below to log in',
			goLogin: 'Go login',
			connectionFailed: 'registration confirmation link is invalid',
			resetConnectionFailed: 'reset password confirmation link is invalid',
			clickText: 'Click',
			confirmEmail: 'Please re',
			registered: 'Registered',
			resetAccountSuccess: 'The password has been reset successfully~',
			passwordResetText: 'Reset password email has been sent to',
			notMailbox: 'oops~This mailbox has not been registered yet',
			hasMailbox: 'oops~This mailbox has already been registered'
		},
		menu: {
			dashboard: 'Dashboard',
			connections: 'Data Source',
			dataSync: 'Data synchronization',
			dataTransmission: 'Data Transmission',
			dataFlows: 'Data Collect',
			dataFlowsAll: 'All tasks',
			dataFlowsRunning: 'Running',
			dataFlowsError: 'Error',
			dataFlowsPaused: 'Paused',
			dataFlowsDraft: 'Draft',
			dataGovernance: 'Data Governance',
			metadataDefinition: 'Data Catalog',
			dataQuality: 'Data Quality',
			timeToLive: 'Time To Live',
			dataMap: 'Data Lineage',
			dataRules: 'Data Rules',
			dictionary: 'Dictionary model',
			dataPublish: 'Data Publish',
			modules: 'API Management',
			dataExplorer: 'API Data Explorer',
			apiDocAndTest: 'API Doc&Test',
			apiAnalysis: 'API Stats',
			applications: 'API Clients',
			apiServers: 'API Server',
			dataCollect: 'Data Collect(Old)',
			system: 'System',
			tasks: 'Schedule Tasks',
			agentdownload: 'Agent Download',
			clusterManagement: 'Cluster management',
			agents: 'Agents',
			serversOversee: 'Servers Oversee',
			users: 'User Management',
			journal: 'User action log',
			roles: 'Role Management',
			settings: 'System settings',
			favorite: 'Favorite',
			dataVerification: 'Data Verification',
			delFavMenu: 'Delete Favorite',
			license: 'License info',
			licenseBefore: 'Info: License remaining ',
			licenseAfter: ' days',
			licenseDate: 'License expiration time',
			licenseAfterOneDay: ' day',
			dataFlowsClusterClone: 'Database Migration',
			dataFlowsCustom: 'Data Sync',
			topology: 'Topology'
		},
		Home: {
			all: 'All',
			syncJobsOverview: 'Sync Jobs Overview',
			migrationJobsOverview: 'Migration Jobs Overview',
			allTask: 'All tasks',
			transmissionOverview: 'Transmission Overview',
			transferTask: 'Transfer Task',
			wrongTask: 'Wrong Task',
			taskRanking: 'Task Transfer Ranking',
			serverProcess: 'Server and Process',
			syncJobsStatus: 'Sync Jobs Status',
			migrationJobsStatus: 'Migration Jobs Status',
			dataValidationTitle: 'Data Validation',
			before: 'Front',
			pcs: 'bar',
			server: 'Server',
			managementSide: 'Management Side',
			taskTransfer: 'Task Transfer',
			apiService: 'API Service',
			totalOutput: 'Total Output',
			totalInput: 'Total Input',
			bar: 'PCS',
			starting: 'Starting',
			running: 'Running',
			stopping: 'Closed',
			stopped: 'closed',
			initialization: 'Initializing',
			loadingFinished: 'Initialization completed',
			incremental: 'CDC',
			incrementalLag: 'CDC Lag',
			allValid: 'All verification tasks',
			checkSame: 'Check the same',
			countDifference: 'Count difference',
			contentDifference: 'Content difference'
		}
	},
	message: {
		api: {
			get: {
				error: 'Load data failed.',
				loading: 'Loading data...'
			}
		},
		comfirm: 'Are you sure you want to ',
		operationSuccuess: 'Operation succuess.',
		modifyName: 'Modify name',
		ok: 'OK',
		exists_name: 'Name already exists',
		nullName: 'Field name can not be empty',
		search: 'search',
		serviceCluMange: 'Service cluster management',
		statusLog: 'Status log',
		sourchName: 'Name',
		placeholderServer: 'Please enter a server name',
		filter: 'Filter',
		addServerMon: 'Add server monitoring',
		startUp: 'Start up',
		close: 'Close',
		manageSys: 'Manage system',
		restart: 'restart',
		syncGover: 'Syn gover',
		screen: 'Screen',
		delete: 'Delete',
		cancel: 'Cancel',
		confirm: 'Confirm',
		placeholderMonServer: 'Please enter the monitored service name',
		placeholderCommand: 'Please enter command',
		nullContent: 'Can not be empty',
		saveOK: 'Saved successfully',
		saveFail: 'Save failed',
		copyFail: 'Copy failed',
		stopFail: 'stop failed',
		copySuccess: 'Copy successfully',
		deleteOK: 'Successfully deleted',
		deleteFail: 'Failed to delete',
		taskStart: 'Job is getting started',
		selectTime: 'Select time',
		selectDate: 'Select date',
		server: 'Server',
		serviceType: 'Service type',
		level: 'Level',
		placeholderSelect: 'Please select',
		time: 'Time',
		hostName: 'Host name',
		ipAddress: 'IP address',
		uniqueEncode: 'Unique encoding',
		logs: 'Log',
		closeSever: 'Close service',
		restartServer: 'Restart service',
		startServer: 'Start service',
		deleteOrNot: 'Delete or not',
		startupAfter_delete: 'Please delete after startup',
		startupAfter_add: 'Please add after startup',
		noData: 'NO DATA ',
		prompt: 'Prompt',
		resetMessage: 'This will cause the job to be rerun from the beginning, continue?',
		deteleMessage: 'This will permanently delete the job',
		deteleJobMessage: 'This will permanently delete the choosed jobs ?',
		forceStoppingMessage: 'This will interrupt the data transfer immediately, continue?',
		stopInitial_syncMessage:
			'Pausing job while it is in the initial sync stage may cause it to run from the beginning, are you sure you want to pause?',
		stopMessage: 'Are you sure to pause the mission?',
		stopAggregation_message:
			'Job XXX includes aggregation processor node, job will be reset when excutes restart，still excute pause?',
		startAggregation_message:
			'Job XXX includes aggregation processor node, job will be reset when excutes start job，still excute start?',
		cancelReset: 'cancel reset',
		resetOk: 'Reset success',
		resetFailed: 'Reset Failed',
		notRest: 'Please select the correct data to reset',
		operator: 'Operator',
		edit: 'Edit',
		clickRelatedTasks: 'Click to view related tasks',
		currentTaskOpen: 'The current task has been opened',
		noRelatedTask: 'No related tasks',
		loadingSchema: 'Schema of source database has not finished loading yet, please wait',
		reloadSchemaSuccess: 'Model update successfully',
		reloadSchemaError: 'Model update failed'
	},
	dataFlow: {
		batchSortOperation: 'Batch sort operation',
		selectRowdata: 'Please select row data',
		clusterClone: 'Database Migration',
		custom: 'Data Sync',
		searchNode: 'Search Node',
		updateModel: 'Reload Model',
		loadingText: 'Loading...',
		databseProcessingHead: 'Data Processing & Sync',
		databseMigrationHead: 'Database Migration',
		dataMigrationHead: 'Data Sync',
		databseFreedomHead: 'Custom Data Sync',
		createNew: 'Create New',
		DissedNoAction: 'oops~ The banned node/Connecting line can not be deleted and connected',
		notCopy: 'The banned node cannot be copied ',
		guidingMode: 'Guiding mode',
		advancedMode: 'Standard mode',
		freedomMode: 'Standard mode',
		advanceSetting: 'More advanced setting',
		closeSetting: 'Fold up',
		openPanel: 'Open',
		execution: 'Execution',
		previous: 'Previous',
		next: 'Next',
		sourceSetting: 'Source setting',
		targetSetting: 'Target setting',
		advancedetting: 'Advanced settings',
		simpleSceneTitle: 'Create a database replication task',
		sourceLibrarySetting: 'Source library structure and object settings',
		databseMigration:
			'With the guided mode to help understanding the operation method of databases migration which can quickly realize structure , inital, and CDC migration between databases.',
		databseProcessing:
			'With the  guided mode to help novice users to quickly understand the table level data processing and SYNC. This function can not only realize table level INITAL and CDC transmission, but also focus on various processors (JS processing, field filtering, aggregation processing, row level filtering, etc.) for complex logical processing demands.',
		databseFreedom:
			'Database migration can help users  to achieve structure,  inital, and CDC migration of multiple homogeneous or heterogeneous databases in one job. ',
		dataFreedom:
			'Data sync focuses on data processing (such as table merging, data splitting, joint mapping, field processing, content filtering, aggregation processing, JS processing ,etc )and sync of table-level real-time data sync.',
		multiError: {
			allSelectionError: 'The status of selected job does not allow this operation.',
			notFound: 'This job does not existed.',
			statusError: 'Job status does not allow to do this operation.',
			otherError: 'Operation failed, please try it again.'
		},
		changeName: 'Rename',
		Enable: 'Enable',
		Disable: 'Disable',
		draftNotStart: 'Configuration is not complete,  cannot be started',
		systemHint: 'System prompt',
		systemText: 'The system detected that the following tasks were not saved， keep editing?',
		stystemOpen: 'Open',
		stystemOpenAll: 'Open all',
		stystemDeleteAll: 'Delete all',
		stystemLgnoreAll: 'Ignore all',
		newTaksName: 'The new task is not named',
		selectNode: 'Please select a node',
		submitExecute: 'Submit and execute',
		submitOnly: 'Submit only',
		implementationModalities: 'Execution method',
		submitConfirmation: 'Submit Confirmation',
		SyncPoint: 'CDC start timepoint',
		cdcLabel: 'Data source:',
		syncType: 'Sync Type',
		SyncInfo: {
			localTZ: 'Local Timezone CDC Time: custom a point of  CDC time，in local time zone',
			current: 'Current Time：Current DB Time',
			connTZ: 'DB Timezone CDC Time: custom a point of  CDC time，in the time zone of a specific server',
			localTZType: 'Local Timezone CDC Time',
			currentType: 'Current Time',
			connTZType: 'DB Timezone CDC Time'
		},
		Current: 'Current Time',
		SyncTime: 'Sync Time',
		batchDelete: 'Batch Delete',
		batchRest: 'Batch reset',
		bulkExport: 'Bulk Export',
		bulkImport: 'Bulk Import',
		bulkScheuled: 'Batch Start',
		bulkStopping: 'Bulk Stop',
		taskBulkFx: 'Function',
		taskBulkOperation: 'Bulk Operation',
		taskBulkTag: 'Bulk Tag',
		upload: 'Click to upload',
		import: 'Task Import',
		uploadOK: 'Upload successful',
		uploadError: 'Upload failed',
		uploadInfo: 'Click to view details',
		dataFlowExport: 'Export',
		addTag: 'Add tag',
		overWrite: 'Overwrite existing data',
		skipData: 'Skip existing data',
		loadingError: 'Loading failed, please',
		dataLoading: 'Data Loding ...',
		loadLogTip: 'Run log is trying to load, it may take 5 ~ 10 seconds, please wait ...',
		noLogTip: 'No data',
		clickLoadTxt: 'Click to load',
		average: 'Average',
		current: 'Current',
		allNode: 'All Nodes',
		taskName: 'Flow Name',
		creatdor: 'Creator',
		ownedUser: 'Owned User',
		ownedLibrary: 'Owned Library',
		creationTime: 'Start Time',
		state: 'State',
		executionTime: 'Lapsed Time',
		finishTime: 'finish Time',
		sourceLibrary: 'Source',
		targetLibrary: 'Target',
		inputNumber: 'Input Total',
		outputNumber: 'Output Total',
		rowCount: 'Row',
		inputOutput: 'Throughput',
		transf: 'Transmission Time',
		timePoint: 'CDC timepoint',
		dataScreening: 'Statistics',
		taskDetail: 'Task Details',
		nodeDetail: 'Node Information',
		unit: 'Unit',
		article: 'pcs',
		secondUnit: 'second',
		second: 'SEC',
		min: 'MIN',
		hour: 'HOUR',
		day: 'DAY',
		input: 'Input',
		output: 'Output',
		totalInput: 'Input',
		totalOutput: 'Output',
		totalInsert: 'Insert',
		totalUpdate: 'Update',
		totalDelete: 'Delete',
		category: 'Category',
		replicate: 'Replicate Lag',
		throughputpop:
			'The read speed from source node and the write speed to the target node, larger number is better',
		transtime_pop:
			'The time lapsed from the data record is read from the source node until the data is written into target node',
		replicate_pop: 'The time gap between source node last update time and target node last update time',
		status: {
			running: 'Running',
			paused: 'Paused',
			draft: 'Editting',
			scheduled: 'Scheduled',
			stopping: 'Stopping',
			error: 'Error',
			force_stopping: 'Force Stopping',
			cdc: 'CDC',
			initializing: 'Initializing',
			initialized: 'Initialized',
			Lag: 'Lag'
		},
		lag: 'lag',
		executionStatus: 'Execution status',
		searchPlaceholder: 'Task name / Node name / Library table name',
		dataRange: 'Date range',
		startTime: 'Start time',
		endTime: 'End time',
		separator: 'to',
		dataPlaceholder: 'Select time range',
		taskStatus: 'Status',
		taskStatusPlaceholder: 'Select task status',
		taskSettingPlaceholder: 'Select Sync type',
		updateTime: 'Update time',
		runningSpeed: 'Running speed',
		taskSwitch: 'Switch',
		operate: 'Operation',
		dataMap: 'Data Map',
		edit: 'Edit',
		copy: 'Copy',
		reset: ' Reset ',
		cut: 'Cut',
		paste: 'Paste',
		undo: 'Undo',
		redo: 'Redo',
		selectAll: 'Select all',
		amplification: 'Zoom in',
		zoomOut: 'Zoom out',
		down: 'Down',
		up: 'Up',
		selectMultipleNode: 'Multiple selection',
		mouseDrag: 'Drag',
		detail: 'Running detail',
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
		run_custom_sql: 'Repeat custom SQL',
		stop_on_error: 'Stop when error',
		need_to_create_Index: 'Auto-create index',
		is_schedule: 'Regular job schedul',
		cron_expression: 'Scheduling cron expression',
		data_quality_tag: 'Add data quality tag',
		notification_lag: 'Notification',
		isOpenAutoDDL: 'Auto-DDL operation',
		transformerConcurrency: 'Transformer Concurrency',
		processorConcurrency: 'Processor Concurrency',
		send_email_when_replication: 'Resend in a few seconds',
		send_email_at_most_one_replication: 'Cancel sending in more than seconds',
		read_cdc_interval: ' CDC interval',
		read_batch_size: 'Read-amount/time',
		cdcDataProcess: 'CDC data process',
		batch: 'Batch process',
		onebyone: 'Row by row process',
		mission: 'Description',
		yes: 'yes',
		no: 'no',
		cronExpression: 'Please enter cron expression',
		selectGrpupFiled: 'Please select a grouping field',
		selectTargetField: 'Please select the target field',
		aggName: 'Sub-process Name',
		nodeName: 'Node Name',
		nodeType: 'Node Type',
		aggFunction: 'Polymerization',
		aggExpression: 'Target',
		filterPredicate: 'Filter Predicate',
		groupByExpression: 'Group Field',
		aggregation: 'Aggregation',
		enterFilterTable: 'Please enter the filter table content',
		aggregatePrompt: 'Warn：Using the aggregation processor node, the job will be reset when excutes restart',
		nameTip:
			'Script editing of subsequent nodes needs to refer to the name of this sub-process for the specified data processing, so different sub-process names cannot be repeated. ',
		button: {
			submit: 'Submit',
			viewConfig: 'Node Config',
			viewMonitoring: 'Data Monitoring',
			setting: 'Setting',
			logs: 'Logs',
			preview: 'Preview',
			capture: 'Data Trace',
			stop_capture: 'Stop Trace',
			start: 'Start',
			stop: 'Stop',
			force_stop: 'Force Stop',
			reset: 'Reset',
			save: 'Save',
			saveDraft: 'Save Draft',
			saveing: 'Saving',
			reloadSchema: 'Reload Schema',
			debug: 'debug test',
			quantitative: 'Quantitative',
			increment: 'Increment'
		},
		save_before_running: 'Please save the task before running',
		reset_job: {
			msg: 'Reset Job?',
			tip: 'Tip'
		},
		stop_job: {
			msg: 'Stop jobs?',
			force_stop_msg: 'Force Stop jobs?',
			tip: 'Tip'
		},
		file_preview_fields: {
			file_name: 'File Name',
			file_size_ondisk: 'File Size(Byte)',
			file_modify_time_ondisk: 'File Modify Time',
			file_create_time_ondisk: 'File Create Time',
			file_path: 'File Path'
		},
		importantReminder: 'Important notice',
		modifyEditText: ' If you edited the',
		nodeLayoutProcess: ' node arrangement',
		nodeAttributes: 'node attribute',
		matchingRelationship: 'or matching attribute',
		afterSubmission: 'the job should be',
		runNomally: 'to make sure the job running correctly;',
		editLayerTip: 'otherwise the job will be abnormal, continue？',
		continueEditing: 'Still Edit',
		setting: {
			distinctWriteType: 'De-rewrite mode',
			intellect: 'Intelligent de-rewrite',
			compel: 'Force de-rewrite',
			intellectTip:
				"Intelligent deduplication: intelligent detection of the target's existing data, deduplication can greatly improve transmission performance",
			compelTip:
				"Forced deduplication: Perform mandatory deduplication detection on the target's existing data, strictly guarantee accuracy but low transmission performance",
			batchTip: 'Batch:  Batch processing and transmission of CDC data with high performance.',
			onebyoneTip: 'Row by row: Processing and transmission of CDC data row by row',
			sync_type_tip: 'Transmission type can be changed after disable aggregation settings of collection node: '
		},
		skipError: {
			skipErrorSettings: 'Data Processing Error Handling',
			tip:
				'There were data processing errors detected in the job, please make sure these errors have been addressed. If you would like to skip these errors, please check them and click the "Skip Errors" button.  ',
			attention: 'WARNING: If you chose to skip the errors, the relevant data may be discarded. ',
			startJob: 'Do not skip, continue to start',
			cancel: 'Cancel',
			taskName: 'Task name'
		}
	},
	connection: {
		status: {
			testing: 'Testing',
			invalid: 'Invalid',
			ready: 'Ready'
		}
	},
	editor: {
		nodeSettings: 'Node Settings',
		choose: 'Select',
		newTxt: 'New',

		noResult: 'No search results found',
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
					tableSuffix: 'Please enter table suffix',
					tablePrefix: 'Please enter table prefix',
					form: {
						placeholder: 'Please select database',
						label: 'Database'
					},
					remove: 'Remove',
					Undo: 'Undo',
					bulkRemoval: 'Bulk removal',
					bulkRevocation: 'Bulk revocation',
					queueCopied: 'Included Tables',
					tableRemoved: 'Excluded Tables',
					enterName: 'Please enter the name / field name to search',
					source: 'Data source',
					type: 'Database Type',
					databaseName: 'Database Name',
					account: 'Database Account',
					attributionAccount: 'Database Owner',
					includeTable: 'Include Table'
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
							label: 'Primary Key',
							placeholder: 'Please enter primary key'
						},
						fieldFilterType: {
							keepAllFields: 'Keep all fields',
							retainedField: 'Retained field',
							deleteField: 'Delete field'
						},
						fieldFilter: {
							placeholderKeep: ' Select the fields to keep',
							placeholderDelete: ' Select the fields to delete'
						},
						fieldFilterTip: {
							label: 'Field filter',
							keepAllFields: 'Keep all fields: Keep all fields of this collection.',
							retainedField:
								'Retained field: the selected fields will be retained and all other fields will be discarded.',
							deleteField:
								'Delete field: the selected fields will be deleted and all other fields will be retained.'
						},
						dropTable: {
							label: 'Existing data',
							placeholder: '',
							keep: 'Keep existing data',
							remove: 'Remove exists data at before sync'
						},
						initialSyncOrder: {
							keep: 'Enable custom initial sync order',
							open: 'Open',
							close: 'Close'
						},
						filter: {
							label: 'Filter conditions',
							invalidJSON: 'Invalid JSON',
							fiflterSetting: 'Filter settings',
							fieldFilter: 'Visual Mode',
							openFiflter: 'Enable filtering',
							closeFiflter: 'Close filtering',
							sqlFilter: 'SQL Filter',
							mqlFilter: 'MQL Filter',
							saveFields: 'Reserved fields',
							allField: 'All fields',
							deleteField: 'Delete field',
							rowLimit: 'Row limit',
							allRows: 'All rows',
							oneThousandRows: '1000 rows',
							tenThousandRows: '10000 rows',
							placeholder: {
								savefield: 'Please select a reserved field',
								delField: 'Please select',
								selectField: 'Please select a field',
								Operator: 'Operator',
								enterContent: 'Please enter the content of the conditions',
								placeholder: 'Filter Condition (Mongo Query Filter Document)'
							}
						},
						aggregation: {
							aggregationText: 'Aggregation Settings',
							disabled: 'Disabled',
							enabled: 'Enabled',
							preview: 'Preview',
							previewSampleData: 'Preview of sample data',
							addTextTip: 'No preview sample data',
							addTextTip1:
								'Please enter the MongoDB aggregation code, and then click "Preview" to preview the sample data here',
							filterAggreTip:
								'Aggregation settings and filtering settings cannot be enabled at same time.',
							seetingAggreTip: 'This function only available under initial job'
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
							placeholder: 'Please select table,Case sensitive'
						},
						custom_sql: {
							label: 'Custom SQL',
							placeholder: 'Please input you custom sql',
							mplaceholder: 'Please input you custom mql'
						},
						initial_offset: {
							label: 'Custom SQL Offset',
							placeholder: 'Please input you custom sql offset'
						},
						maximum_transaction: {
							label: 'Max Transaction Length',
							tip:
								'Time in hours to wait for commit for a transaction. Enter the longest period of time that you expect a transaction to require.Default is 12 hours'
						}
					}
				},
				file: {
					name: 'File',
					tip: 'File node',
					none_fileName: 'The file name cannot be empty',
					configurationFile: 'Configuration File',
					chooseFileName: 'Please select a file name'
				},
				gridfs: {
					name: 'GridFS',
					tip: 'GridFS node',
					chooseGridFsName: 'Please select GridFS',
					none_collection: 'Collection is required.',
					none_pk: 'Primary key is required.',
					gridFs_isNull: 'GridFS cannot be empty'
				},
				dummy: {
					name: 'Dummy',
					tip: 'Dummy node',
					chooseDummyName: 'Please select Dummy',
					none_collection: 'Collection is required.',
					none_pk: 'Primary key is required.',
					dummy_isNull: 'Dummy cannot be empty'
				},
				redis: {
					name: 'Redis',
					tip: 'Redis Node',
					chooseRedisName: 'Please select Redis',
					Redis_isNull: 'Redis cannot be empty',
					prefixKey: 'Cache key prefix',
					prefixKey_placeholder: 'Please enter the cache key prefix',
					cacheKey: 'Select cache key',
					cacheKey_placeholder: 'Select source table field as cache key'
				},
				api: {
					name: 'API',
					tip: 'api node',
					chooseApiName: 'Please select API',
					none_collection: 'Collection is required.',
					none_database: 'Database is required.',
					none_pk: 'Primary key is required.',
					api_isNull: 'API cannot be empty',
					dataApiName: 'Data publishing API name',
					description: 'Description',
					method: 'Method',
					fieldSettings: 'Field Settings',
					table_field: 'field',
					table_type: 'Type',
					table_setting: 'Settings',
					publishName: 'Publish API',
					enterPublishApiName: 'Please enter the name of the data publishing API',
					enterNewlyReleasedApi: 'Please enter a description of the newly released API',
					enterEndUrl: 'Please enter the URL end path name',
					required: 'Required',
					availableQueries: 'Query',
					publishApi_path: 'API path is not empty',
					variable_name:
						'Can only contain letters, numbers, underscores and dollar signs, and numbers cannot start'
				},
				es: {
					name: 'ES',
					tip: 'Elastic search node',
					configurationES: 'Configure Elastic search',
					chooseESName: 'Please select Elastic search',
					es_isNull: 'Elastic search cannot be empty'
				},
				custom: {
					tip: 'Custom node',
					name: 'Custom',
					none_fileName: 'Custom cannot be empty',
					chooseCustomName: 'Please select Custom'
				},
				memCache: {
					tip: 'Memery Cache node',
					name: 'Mem Cache',

					applicationCode: 'Application code',

					form: {
						cacheName: {
							label: 'Cache name',
							placeholder: 'Please enter cache name.',
							none: 'Cache name is required.'
						},
						cacheKeys: {
							label: 'Cache key',
							placeholder: 'Please select cache key.',
							none: 'Cache key is required.'
						},
						maxSize: {
							label: 'Max capacity',
							placeholder: 'Please enter maximum capacity of the cache.',
							none: 'Max capacity is required.',
							options: {
								unlimited: 'Unlimit',
								custom: 'Custom'
							}
						},
						maxRows: {
							label: 'Max records',
							placeholder: 'Please enter maximum records of the cache.',
							none: 'Max records is required.',
							unit: 'pcs',
							options: {
								unlimited: 'Unlimit',
								custom: 'Custom'
							}
						}
					}
				},
				logminer: {
					add: 'Add',
					day: 'day',
					name: 'Log mining',
					tip: 'Log Miner',
					miningLogTime: 'Mining log time',
					logSaveTime: 'Log save time',
					logSourceSetting: 'Log source setting',
					currentTimeZone: 'Current Time Zone',
					databaseTimeZone: 'Database Time Zone',
					allTables: 'All tables',
					reservationTable: 'Reservation Table',
					exclusionTable: 'Exclusion Table',
					nodeFunDes: 'Node function description',
					function: 'Function',
					functionContent:
						'This node is used to collect logs from specified source databases to save to target MongoDB database share log data, in order to avoid the action of repeatedly starting the logging process to greatly alleviate theoccupation and waste of source database resources. ',
					connectionTarget: 'Connection Target',
					connectionText: 'COLLECTION nodes',
					tableFilter: {
						placeSletSource: 'Please select the source of the collected data',
						tableFilter: 'Please select the table to keep',
						placeholderDelete: 'Please select the table to exclude'
					},
					validate: {
						name: 'Node name cannot be empty',
						source: 'Data source cannot be empty',
						table: 'Data table cannot be empty',
						sameConnection: 'Cannot choose the same connection'
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
					none_name: 'Sub-process name is required',
					none_aggregation_expression: 'Target field is required.',
					new_aggregate: 'Add new aggregate',
					none_stage: 'Must have one aggregate',
					returnExample: 'Return example',
					school_name: 'school_name: "Dorset"',
					idComment:
						'// "students_sum" is the Sub-process name, and the names between sub-processes cannot be repeated',
					countComment:
						'// COUNT is the Polymerization function and 132 is the value; if the function is MAX, it will show MAX here',
					school_nameComment: '// Grouping summary field names, no display if dont filling out',
					aggregateSizeLabel: 'Number of cached aggregation result',
					aggregateSizeTips:
						'Put in the range of cached aggregation result, the excess data will be stored in target database.',
					allAggregateSize: 'All data write in cache',
					customAggregateSize: 'Custom the cache range'
				},
				field: {
					name: 'Field',
					tip: 'Field processor',
					defaultText: 'Field processor',

					form: {
						name: {
							label: 'Node Name',
							placeholder: 'Please input you node name'
						},
						description: {
							label: 'Description',
							placeholder: 'Please input you node description'
						},
						errorUndefined:
							'The model of the source node has changed, so that the field processor does not work, please click the UPDATE MODEL button in the configuration panel of the upper node to handle this issue',
						errorOperationSaveTip: 'The field processor node has conflict to be handled',
						errorOperationTipBefore: 'Conflict between field processing operation and source model',
						errorOperationTipAfter: ' click to handle',
						errorOperationDrop:
							'The following processing operation is detected to conflict with the source model. Please select the operation mode for the following fields. Drop / Keep: Drop / Keep the process of the field',
						errorOperationDesc:
							'Click "Drop all" to select "Drop" operation for all fields; click "Bulk keep" to select "Keep" operation for all fields, the field without "Keep" operation will still be selected "Drop"',
						errorOperationDelBtn: 'Drop all',
						errorOperationKeepBtn: 'Bulk keep',
						toUpperCase: 'Upper',
						toLowerCase: 'Lower',
						delete: 'Delete',
						save: 'Save',
						originalField: 'Original field (type) ',
						process: 'Process action',
						result: 'Result',
						keep: 'Keep',
						operation: 'Operation',
						fieldName: 'Field name',
						fieldType: 'Field type',
						addField: 'Add Field',
						addEmbedField: 'Add Embed Field',
						scriptDialogTitle: 'Set Script',
						expression: 'Please enter an expression',
						example: 'Example',
						exampleRow1: 'var result = "a" + "b"  // String concatenation, the result of result is "ab"',
						exampleRow2: 'var result = 1 + 2 // Digital calculation, the result of result is 3',
						exampleRow3:
							'var result = fn("1") // Call function, the result is the return value of the fn function.',
						exampleRow4:
							'var result = record.isTrue ? true : false // Ternary expression, The value of result is true or false based on the result of the judgment expression (record.isTrue)'
					}
				},
				script: {
					name: 'JavaScript',
					tip: 'Script processor',
					defaultText: 'Script processor',

					none_script_type: 'Script type is required.',
					none_script: 'Script is required.',

					debug_button_label: 'Debug Script',
					warning_for_not_save:
						'The current task has not been saved, unable to connect the test server, please save and try again',
					connect_server_fail: 'Failed to connect to server',

					debug: {
						top_header: 'Debug Script',
						bottom_header: 'Debug Details',
						detail: {
							parameter: 'Input',
							return: 'Output'
						},
						order: 'Order',
						status: 'Status',
						status_error: 'Error',
						status_success: 'Success',
						time: 'Time',
						log: 'Log'
					},

					form: {
						name: {
							label: 'Node Name',
							placeholder: 'Please enter the node name'
						},
						type: {
							label: 'Script Type',
							placeholder: 'Please select script type'
						},
						script: {
							label: 'Script',
							placeholder: 'Please input script'
						}
					}
				},
				dataFilter: {
					name: 'Row Filter',
					tip: 'Row Data Filter',
					validate: {
						none_expression: 'Conditional expression cannot be empty',
						none_action: 'The execution action cannot be empty'
					},
					form: {
						name: {
							label: 'Node Name',
							placeholder: 'Please enter the node name'
						},
						expression: {
							label: 'Conditional expression',
							placeholder: 'Please enter an expression',
							labelTip: 'Expressions can use comparison and calculation operators in JavaScript'
						},
						action: {
							label: 'Execute action',
							discard: 'Discard',
							retain: 'Retain'
						},
						expressionExample: {
							label: 'Example expression',
							labelTip: 'Expressions can use comparison and calculation operators in JavaScript',
							tip:
								'Select men over 50 years old or people over 30 years old with income below 10,000, the expression is as follows:'
						},
						symbol: {
							label: 'Supported symbols',
							gtLt: 'Greater than, less than',
							geLe: 'Greater than and equal to, less than and equal to',
							eq: 'equal to',
							not: 'NO',
							and: 'And',
							or: 'Or',
							regexp: 'Regular expression',
							group: 'Conditional grouping'
						}
					}
				},
				jointCache: {
					name: 'Joint Cache',
					tip: 'Joint Cache Node',
					form: {
						name: {
							label: 'Node Name',
							placeholder: 'Please input you node name.',
							none: 'Node name is required.'
						},
						cacheId: {
							label: 'Joint cache node',
							placeholder: 'Choose joint cache node in this job.',
							none: 'Choose joint cache node in this job.'
						},
						joinSettings: {
							label: 'Joint setting',
							cacheKey: 'Cache node primary key',
							sourceKey: {
								label: 'Source joint field',
								placeholder: 'Choose joint field.'
							},
							none: 'Choose joint field.'
						},
						joinKey: {
							label: 'Cache model joint target path',
							placeholder: 'Enter or create target path field.'
						}
					}
				}
			},
			link: {
				none_join_type: 'JoinType is required',
				none_join_key: 'JoinKeys is required',
				none_join_path: 'JoinPath is required',
				none_array_unique_key: 'Array unique key is required',
				repeatId: {
					title: 'Field _id conflict',
					message:
						'"_id" field exists in target model, and system will remove the duplicated field “_id”, if you wanna keep it, please use the field processor to rename the "_id" field before continue.'
				},
				form: {
					label: {
						label: 'Label',
						placeholder: 'Please input label'
					},
					joinMethod: {
						label: 'Mismatched data insert model',
						placeholder: 'Please select the data insertion method'
					},
					joinType: {
						label: 'Data write model',
						placeholder: 'Please select Data Write model'
					},
					joinPath: {
						label: 'Target path',
						placeholder: 'Please input target path'
					},
					joinKeys: {
						label: 'Association condition',
						sourceField: 'Source Field',
						targetField: 'Target Field'
					},
					arrayUniqueKey: {
						label: 'Embedded array match key',
						placeholder: 'Please enter in embed array match key '
					}
				},

				methodList: {
					false: 'Discard',
					true: 'write'
				},

				writeMode: {
					append: 'Append into Target',
					upsert: 'Match and Merge or Insert New',
					update: 'Match and Merge',
					merge_embed: 'Match then Embed as Array in target'
				},
				existingSchema: {
					label: 'When schema and/or data already exist in target database',
					keepSchema: 'Retain schema and data in target database',
					keepExistedData: 'Retain schema, but remove data in target database',
					removeSchema: 'Drop schema and data in target database'
				},
				migrationSetting: 'Tables to be copied selection',
				dataProcessing: 'Existing data processing',
				prefixAndSuffix: 'Add prefix and suffix',
				keepExistingData: 'Keep existing data',
				deleteExistingData: 'Delete existing data before running',
				reduction: 'Reduction',
				migrationObjece: 'Source tables',
				chosen: 'Selected',
				searchContent: 'Search',
				mappingRelations: 'Mapping Relations',
				addPrefix: 'Add prefix',
				addSuffix: 'Add suffix',
				prefixPlaceholder: 'Please enter the prefix',
				suffixPlaceholder: 'Please enter the suffix',
				batchRename: 'Batch rename settings',
				tableNameExample: 'Table name example',
				copySourceDatabase: 'Source database schema to be copied',
				tableTip: 'Table does not support foreign key copy',
				viewTip: 'Copy view does not support table rename, if check this box rename function will be disabled',
				formTip: 'The function of copy view, function, procedure only support MySQL to MySQL',
				chooseATableTip: 'At least select one object to be copied'
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
				tableSelector: 'Fast selection'
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
			nodeLoadSchemaDiaLog:
				'If the data source is updated, this operation will update the model of this node. Do you want to continue?',
			allNodeLoadSchemaDiaLog:
				'If the data source is updated, this operation will update the model of each node. Do you want to continue?'
		},
		preview: {
			stage: 'Stage',
			table: 'Table'
		}
	},
	dataVerify: {
		row: 'Row verify',
		hash: 'Hash verify',
		advance: 'Advance verify',
		dataVerify: 'Data verify',
		dataWay: 'Verify mode',
		range: 'Sampling',
		source: 'Source table',
		target: 'Target table',
		sourceDatabase: 'Data source',
		targetDatabase: 'Target source',
		sourceText: 'Please select the source table',
		targetText: 'Please select the target table',
		sourceDatabaseText: 'Please select the data source',
		targetDatabaseText: 'Please select the target source',
		operate: 'Operate',
		dataVerifySetting: 'Data verify setting',
		confirm: 'Confirm',
		start: 'Start verify',
		back: 'Back',
		add: 'Add',
		refresh: 'Refresh',
		cancel: 'Cancel',
		overView: 'OverView',
		time: 'Operating time',
		duration: 'Duration',
		result: 'Error amount',
		linageDifference: 'linage difference',
		errorTotal: 'error Total',
		accuracyRate: 'Accuracy rate(%)',
		errorComparison: 'Error comparison',
		again: 'Check again',
		rows: 'By amount of rows',
		exampleJS: '请输入JS代码, 高级校验JS必须返回return值, 具体请查看示例',
		sampleRate: 'By percentage',
		condition: 'Sampling range',
		showResult: 'Show result',
		filter: 'filter',
		filterMQL: 'Please enter MQL query statement',
		filterSQL: 'Row Verify only supports select count(*) query statements',
		exampleSQL: 'e.g.: select count(*)  from tablename_1 where field__2 = A;',
		exampleMQL: 'e.g.: db.collection_1.count({ field_2:A })',
		exampleHashSQL:
			"Please enter SELECT query statement Hash verify only supports SELECT query statement, but doesn't support such as count/sum/avg/max,etc. e.g.: select field_1 from tablename_1 where field__2 = A;",
		exampleHashMQL: 'Please enter MQL query statement. e.g.: db.collection_1.find ({ field_2:A },{ field_1:1 })',
		verifyRunningInfo: 'Keep verifying in background',
		verifyStatusWaiting: 'Verifying phase 1-3:  verification job queuing, please wait....   Click',
		verifyStatusDraft: 'Verifying phase 2-3:  verification job scheduling, please wait...   Click',
		verifyStatusValidating: 'Verifying phase 3-3:  verification job executing, please wait...   Click',
		verifyStatusInterrupted: 'Verification job being stopped，please wait...   Click',
		verifyStatusStop: 'Stop verification',
		verifyStatusCompleted: 'Verification result loading , please wait for a while',
		or: 'or',
		psc: 'pcs',
		all: 'All',
		setting: {
			title: 'Verify default settings',
			text:
				'The verification setting is the global verification setting, the priority of the advanced setting in the created verification task is higher than the setting here. ',
			keepTimeLabel: 'Retention time of verification historical results and detailed information',
			errorSaveSumLable: 'Check out the limit of the number of error messages saved for each table',
			errorDifferenceResult: 'The error tolerance of the difference data allowed by the verification result',
			lineNumberFrequency: 'Line number verification interval frequency',
			lineNumVerfyDuration: 'Line number verification duration',
			intervalFrequency: 'Content verification interval frequency',
			verifyDuration: 'Content verification duration',
			verifyStartTime: 'Content verification start execution time',
			verifySetting: 'Verify setting'
		}
	},
	dataMap: {
		source: 'SOURCE',
		tapdata: 'Tapdata',
		API: 'API',
		noneData: 'No data loaded',

		classification: 'Data Model Classification',
		topLevel: 'Top Level',
		dbLevel: 'Database Level',
		tableLevel: 'Table Level',
		fieldLevel: 'Field Mapping',
		infoSource: 'SOURCE',
		infoDAAS: 'DAAS',
		infoAPI: 'API',
		dblclickDataModel: 'Please double-click the data model to open the field mapping',
		properties: {
			name: 'Name',
			type: 'Classification',
			path: 'Path',
			database_type: 'Database Type',
			database_host: 'Database IP',
			database_username: 'Database User',
			database_port: 'Database Port',
			database_uri: 'Database Connection URL',
			database_name: 'Database Name',
			original_name: 'Original Name'
		}
	},
	apiInfo: {
		basicAttributes: 'Basic attributes',
		trquestMethod: 'Request method',
		status: 'Status',
		supportFormat: 'Support format',
		founder: 'Creator',
		interfaceClassification: 'Interface classification',
		modifyTime: 'Modify time',
		interface: 'Interface classification',
		version: 'Version',
		parameter: 'parameter',
		typesof: 'Type',
		is_required: 'Whether required',
		examples: 'Examples',
		requestParameters: 'Request parameters',
		responseParameters: 'Response parameters',
		requestExample: 'Request example',
		backExamples: 'Back to examples',
		announcing: 'Posting',
		apiTest: 'API documentation and testing',
		isPublishAPI: 'Are you sure to publish api?',
		unpublish_api: 'Are you sure you want to cancel publishing api?',
		apiPublishSuccess: 'Published',
		apiPublishError: 'API publishing failed',
		apiUnpublishSuccess: 'Unpublished'
	},
	dataForm: {
		title: 'Create Database',
		saveSuccess: 'Test and save success.',
		saveFail: 'Save failed.',

		submit: 'Submit',
		cancel: 'Cancel',
		test: {
			title: 'Connection Test',
			success: 'Pass the test',
			fail: 'Test failed',
			testing: 'Testing...'
		},
		form: {
			connectionName: 'Connection Name',
			databaseType: 'DB type',
			connectionType: 'Connection Type',
			host: 'DB Host',
			port: 'Port',
			databaseName: 'DB Name',
			databaseSchema: 'Database Schema',
			userName: 'User Name',
			password: 'Password',
			nodeName: 'Catalog Node Name',
			tableFilter: 'Include Table',
			additionalString: 'Connection String Params',
			isUrl: 'Use URI',
			databaseUri: 'Database URI',
			ssl: 'Use TLS/SSL Connection',
			sslKey: 'Private Key',
			sslPass: 'Private Key Password',
			sslValidate: 'Validate Server Certificate',
			sslCA: 'Certificate Authority',
			thinType: 'Thin Type',
			databaseOwner: 'Database Owner',
			timeZone: 'Date Type Timezone',

			databaseHostPlaceholder: 'Database Host(127.0.0.1/Domain:{Port},Please use multiple addresses , separate)',

			uriTips: {
				label: 'Example',
				content:
					`<b>MongoDB Connection URI Examples:</b><br>` +
					`Replicaset: mongodb://192.168.0.100:27017/mydb?replicaSet=xxx<br>` +
					`Replicaset with authentication: mongodb://admin:password@192.168.0.100:27017/mydb?replicaSet=xxx&authSource=admin<br>` +
					`Replicaset with multiple members: mongodb://192.168.0.1:27017,192.168.0.2:27017,192.168.0.3:27017/mydb?replicaSet=xxx<br>` +
					`Sharded Cluster: mongodb://192.168.0.100:27017/mydb<br>` +
					`Sharded Cluster with multiple mongos: mongodb://192.168.0.1:27017,192.168.0.2:27017,192.168.0.3:27017/mydb<br>`
			},
			tableFilterTips: 'Comma-delimited list of expression, use * to represent any character of any length.',
			timeZoneTips: 'Impact Type: DATE',

			options: {
				sourceAndTarget: 'SOURCE AND TARGET',
				source: 'SOURCE',
				target: 'TARGET'
			}
		},
		error: {
			connectionNameExist: 'Connection name already existed.',
			noneHost: 'Database host is required.',
			nonePort: 'Port is required.',
			portNumber: 'Must be number.',
			portRange: 'Port should be between 1 ~ 65535',
			noneSslKey: 'Private key is required.',
			noneSslCA: 'Certificate Authority is required.'
		},
		createDatabase: 'Create new database',
		copyDatabase: 'Copy name',
		checkDatabase: 'Check property',
		createTable: 'Create New Table',
		copyTable: 'Copy name',
		createCollection: 'Create new collection',
		copyCollection: 'Copy name'
	},
	formBuilder: {
		noneText: ' is required.',
		file: {
			placeholder: 'Please select a file',
			button: 'Select'
		},
		input: {
			placeholderPrefix: 'Enter '
		}
	},
	metaData: {
		title: 'Data Category',
		nameExist: 'Category name already existed.',
		addNode: 'Add category at the same level',
		addChildernNode: 'Add Child Category',
		editNode: 'Edit',
		deleteNode: 'Delete',
		nodeName: 'Please enter classification',
		deteleMessage: 'This operation will delete all subclasses existing in this category, whether to delete it'
	},
	notification: {
		notice: 'Notice',
		viewMore: 'View more',
		setting: 'Notice settings',
		allNotice: 'All notice',
		unreadNotice: 'Unread notice',
		maskRead: 'Mask read this page',
		maskReadAll: 'Mask read all',
		systemNotice: 'System notice',
		userNotice: 'Account Operation',
		noticeCenter: 'Setting center',
		dataFlow: 'dataFlow',
		manageSever: 'manageSever',
		inspect: 'Verify job',
		noticeType: 'Choose notice type',
		noticeLevel: 'Choose notice level',
		started: 'started',
		paused: 'paused',
		edited: 'edited',
		deleted: 'deleted',
		abnormallyStopped: 'abnormally stopped',
		stoppedByError: 'stopped by error',
		startupFailed: 'startup failed',
		stopFailed: 'stop failed',
		encounterERRORSkipped: 'skip an ERROR',
		CDCLag: 'CDC lag',
		manageSeverRestartFailed: 'MANAGE SEVER restart failed',
		APISeverRestartFailed: 'API SEVER restart failed',
		SYNCSeverRestartFailed: 'SYNC SEVER restart failed\t',
		connectionInterrupted: 'connection interrupted',
		manageSeverStartFailed: 'MANAGE SEVER start failed',
		APISeverStartFailed: 'API SEVER start failed',
		SYNCSeverStartFailed: 'SYNC SEVER start failed',
		manageSeverStopFailed: 'MANAGE SEVER stop failed',
		APISeverStopFailed: 'API SEVER stop failed',
		SYNCSeverStopFailed: 'SYNC SEVER stop failed',
		APISeverAbnormallyStopped: 'API SEVER abnormally stopped',
		SYNCSeverAbnormallyStopped: 'SYNC SEVER abnormally stopped',
		manageSeverAbnormallyStopped: 'MANAGE SEVER abnormally stopped',
		manageSeverStartedSuccessfully: 'MANAGE SEVER started successfully',
		APISeverStartedSuccessfully: 'API SEVER started successfully',
		SYNCSeverStartedSuccessfully: 'SYNC SEVER started successfully',
		manageSeverStoppedSuccessfully: 'MANAGE SEVER stopped successfully',
		APISeverStoppedSuccessfully: 'API SEVER stopped successfully',
		SYNCSeverStoppedSuccessfully: 'SYNC SEVER stopped successfully',
		manageSeverRestartedSuccessfully: 'MANAGE SEVER restarted successfully',
		APISeverRestartedSuccessfully: 'API SEVER restarted successfully',
		SYNCSeverRestartedSuccessfully: 'SYNC SEVER restarted successfully',
		newSeverCreatedSuccessfully: 'NEW SEVER created successfully',
		newSeverDeletedSuccessfully: 'NEW SEVER deleted successfully',
		databaseDDLChanged: 'Database DDL changed',
		inspectVerifyJobCount: 'count difference',
		inspectVerifyJobValue: 'field value difference',
		inspectVerifyJobDelete: 'was deleted',
		inspectVerifyJobError: 'error',
		settingCenter: 'Setting center',
		systemSetting: 'System setting',
		noticeSetting: 'Notice setting',
		tip:
			'The notice setting here is the system global notification setting. The priority of the notification setting of Data flow job page is higher than the global notification setting here',
		jobOperationNotice: 'Job operation notice',
		emailNotice: ' Email notice',
		jobStarted: 'Job started',
		jobPaused: 'Job paused',
		jobDeleted: 'Job deleted',
		jobEdited: 'Job edited',
		jobStateError: 'Job state error',
		jobEncounterError: 'Job encounter error',
		noticeInterval: 'Notice interval',
		CDCLagTime: 'CDC lag time',
		lagTime: 'Lag-time',
		DDL: 'Database DDL changes',
		agentNotice: 'Agent notice',
		serverDisconnected: 'Server disconnected',
		agentAbnormallyStopped: 'Agent sever abnormally stopped',
		agentStarted: 'Agent started',
		agentStopped: 'Agent stopped',
		agentFailed: 'Agent start failed',
		agentStop: 'Agent stop failed',
		agentCreated: 'Agent created',
		agentDeleted: 'Agent deleted',
		inspectCount: 'Verify job count difference',
		inspectValue: ' Verify job field value difference',
		inspectDelete: ' Verify job was deleted',
		inspectError: 'Verify job error',
		ddlDeal: 'DDL',
		sourceName: 'Source Name',
		databaseName: 'Database Name',
		schemaName: 'Schema Name',
		placeholder: {
			user: 'Choose operator',
			keyword: 'search by datasource/job name'
		},
		account: 'Account ',
		operation: {
			create: ' created ',
			update: ' updated ',
			delete: ' deleted ',
			start: ' started ',
			stop: ' stopped ',
			forceStop: ' force stopped ',
			reset: ' reset ',
			copy: ' copied ',
			upload: ' exported ',
			download: ' downloaded '
		},
		modular: {
			connection: ' connection ',
			dataflow: ' data flow job ',
			inspect: ' verity job '
		}
	},
	dialog: {
		createTable: 'Create New Table',
		placeholderTable:
			'Only supports English, numbers, underscores, minus signs, dots, and starts with English letter',
		createCollection: ' Create New Collection ',
		placeholderCollection:
			'Only support English, numbers, underscores, minus signs, dots, and starts with English letter, and cannot start with "system"',
		tableValidateTip:
			'Table name can contain only English letters, numbers, underscores, minus signs, dots, and starts with English letter',
		collectionValidateTip:
			'Collection name can contain only English letters, numbers, underscores, minus signs, dots, and starts with English letter, and cannot start with "system"',
		downAgent: {
			headTitle: 'Agent download and installation',
			headInterpretation:
				'Tapdata DFS Cloud have to install agent at local server to ensure databases connection and transmission services normally',
			downloadInstall: 'Download and install',
			text: ' Copy and execute the following command to download and install agent on Linux server',
			copy: 'Copy command',
			copied: 'copied',
			refresh: 'Refresh',
			downloadInstallInstructions: 'Download installation instructions',
			linuxInstructionsText1: '· Copy and execute the command to download and install agent on Linux server',
			linuxInstructionsText2: '· Agent will be downloaded and  started up automatically after executing commands',
			linuxInstructionsText3: '·  The installation process includes agent package (64M) and java package (160M）',
			waitingInstall: 'Waiting installation',
			agentNum: 'Agents installed',
			downLoadAgent: 'Download Agent',
			windowsText: 'Download to the server，and copy the following command at the storage path to install',
			windowsInstructionsText1: '· Click "Download Agent" to download agent to windows environment server',
			windowsInstructionsText2:
				'·  Copy and execution command statement above after download at storage path to install agent',
			windowsInstructionsText3: '· After executing commands, the agent will install and run  automatically',
			windowsInstructionsText5:
				'· After the Agent is successfully installed and started, this page will no longer pop up when the task is executed.',
			noAgent: 'You have not installed Agent yet, and cannot execute the transmission jobs. Please ',
			clickDownLoad: ' click to download and install',
			dfsSuccessText: 'DFS Agent installed successfully,',
			dfsSuccessText1: 'Or click',
			dfsSuccessText2: 'Create a data transfer task and experience the Tapdata DFS rapid data transfer function',
			dfsSuccessText3: 'DFS Agent installed successfully, job',
			dfsSuccessText4: 'is running',
			creatTask: 'Create new',
			clickView: 'Click view detail',
			ok: 'OK'
		},
		library: 'The database',
		sameTable: 'has duplicate name tables: ',
		repeatTip:
			'click database name above to process the tables on the data catalog page to ensure the uniqueness of the table name under this database',
		jobSchedule: {
			jobSecheduleSetting: 'Job schedule settings',
			job: 'Job:',
			sync: 'Sync:',
			expression: 'Expression:',
			expressionPlaceholder: 'Please enter cron expression',
			explanation: 'You can set cron expression to schedule tasks at fixed time, date, or interval',
			grammar: 'Grammar:',
			second: 'second',
			minute: 'minute',
			hour: 'hour',
			day: 'day',
			month: 'month',
			week: 'week',
			year: 'year',
			example: 'Example:',
			runMinute: 'Run every minute',
			runDay: "Run at 2 o'clock every day",
			jobSchedule: 'Job schedule settings',
			jobSchedule_tip: 'Job schedule settings - available only for initial job'
		}
	},
	dataVerification: {
		verifyDetail: 'Verify Detail',
		sourceTable: 'Source Table',
		targetTable: 'Target Table',
		sourceRows: 'Source/Target Table Rows',
		verifyResult: 'Verify Result',
		rowConsistent: 'Count diff',
		contConsistent: 'Value diff',
		jointVerify: 'Joint field value verify',
		verifyHistory: 'Verify History',
		tableDetail: ' Table detail',
		configuration: 'Configuration',
		verifyName: 'Verify name',
		sourceTotalRows: 'Source Total Rows',
		targetTotalRows: 'Target Total Rows',
		verifyStatus: 'Verify Status',
		verifystatus: 'Verify status',
		verifyTime: 'Verify Time',
		operation: 'Operation',
		rowVerify: 'Row verify',
		contentVerify: 'Content verify',
		singleVerify: 'Single verify',
		repeatingVerify: 'Repeating verify',
		consistent: 'Consistent',
		toBeVerified: 'To be verified',
		verifying: 'Verifying',
		verifyFinished: 'Verify finished',
		verifyJobExpired: 'Verify job expired',
		executeVerifyInstantly: 'Execute verify instantly',
		deleteVerifyJob: 'Delete verify job',
		verifySetting: 'Verify Setting',
		batchVerify: 'Batch Verify',
		verifyJobName: 'Verify Job Name',
		verifyjobname: 'Verify job name',
		verifyType: 'Verify Type',
		verifytype: 'Verify type',
		singleRepeatingVerify: 'Single/repeating verify',
		rowAndContConsistent: 'Row-and-Cont-consistent',
		sourceFieldName: 'Source Field Name',
		targetFieldName: 'Target Field Name',
		Value: 'value',
		inconsistentType: 'Inconsistent Type',
		chooseJob: 'Choose job',
		frequency: 'Frequency',
		startTime: ' Start time',
		LastTime: 'Stop time',
		startAndStopTime: 'Start and stop time',
		verifyInterval: 'Verify interval',
		inconsistent: 'Inconsistent data to be saved',
		table: 'Table',
		addTable: 'Add table',
		automaticallyAdd: 'Automatically add',
		enable: 'Enable',
		disable: 'Disable',
		newVerify: 'New Verify',
		edit: 'Edit',
		clickVerified: 'Click the bottons below to add tables to be verified',
		ChoosePKField: 'Choose index /PK field',
		indexField: 'Index field',
		BasicSettings: 'Basic Settings',
		verifyCondition: 'Verify Conditions',
		clear: 'Clear',
		fastCountTip:
			'Fast count mode which only verify the number of rows of source and target tables has a extremely fast speed but does not show the differential field values.',
		contentVerifyTip:
			'Table field value verify mode which will verify all fields of source and target tables row by row can find out the differences of all fields, but has a slow speed.',
		jointFieldTip:
			'Joint fields value verify mode only compares the joint field value of source and target tables，faster than table field value verify mode .',
		waiting: 'To be verified',
		scheduling: 'Scheduling',
		error: 'Error',
		done: 'Verify finished',
		running: 'Running',
		verifyProgress: 'Verify Progress',
		tasksTime: 'please set start and stop time',
		tasksDataFlow: 'Please choose data flow job',
		tasksJobName: 'please enter verify job name',
		tasksVerifyCondition: 'Please set verify condition',
		tasksVerifyInterval: 'Please choose data verify interval',
		lackSource: 'Lack source or target table in verify condition',
		lackIndex: 'Lack index field of source or target table in verify condition',
		tasksAmount: 'The amount of index field of source table does not equal to target table in verify condition',
		uniqueField: 'Unique field inconsistent ',
		otherField: 'Other field inconsistent',
		back: 'Back',
		startVerify: 'Executing verify',
		deleteMessage: 'This will permanently delete the choosed verify job',
		executeVerifyTip: 'Execute verify',
		addVerifyTip: 'Create new verify job ',
		historyTip: 'History',
		detailTip: 'Detail',
		configurationTip: 'Configuration',
		deleteTip: 'Delete',
		checkStatusPre: 'The job status is ',
		checkStatusSuffix: ' , cannot modify configuration'
	},
	queryBuilder: {
		addCond: 'field Cond'
	},
	tableFlow: {
		task_view: 'Data Flow View',
		table_view: 'Table View',
		source_target_table: 'Source/Target Table',
		task_execution_time: 'Job/Execution Time',
		status_text: 'Status',
		stage: 'Stage',
		output_input: 'Output/Input (rows)',
		speed: 'Speed (QPS)',
		rows: 'Rows',
		opear: 'Operation',
		output: 'Output',
		input: 'Input',
		row_count_check: 'Rows Count',
		batch_verification: 'Batch verification'
	},
	account: {
		accountSettings: 'Account settings',
		setCenter: 'Settings Center',
		systemSetting: 'System Settings',
		noticeSetting: 'Notice Settings',
		email: 'Email',
		userName: 'User name',
		password: 'Password',
		accessCode: 'Access Code',
		changePassword: ' Change Password',
		currentPassword: 'Please enter the current password',
		newPassword: 'Please enter the new password',
		confirmPassword: 'Confirm password again',
		changeEmail: 'Change Email',
		enterMailbox: 'Please enter mailbox',
		enterNewMailbox: 'Please enter the new mailbox',
		changeUsername: 'Change User name',
		newUsername: 'Please enter a new username',
		sendEmail: 'Sent verify email',
		samePawTip: 'The new password cannot be the same as the original password!',
		newPawInconsistent: 'Inconsistent with the new password!',
		pawSaveSuccess: 'Password saved successfully',
		currerPawErrorTip: 'The current password is incorrect, please enter the correct password',
		nameModifySuccess: 'Name modified successfully',
		passwordNotCN: 'Only alphanumeric characters and hyphens are allowed in password',
		user_null: "That username's been taken",
		has_username: 'Username already exists',
		editFail: 'User name modification failed'
	},
	role: {
		addroleTitle: 'Add role',
		editroleTitle: 'Role Edit',
		roleName: 'Role Name',
		roleDesc: 'Role description',
		defaultRole: 'default role',
		rolePermission: 'role permission',
		alreadyExists: 'Duplicate role name',
		roleNavName: {
			Dashboard: 'Dashboard',
			system_notice: 'system notice',
			notice_settings: 'notice settings',
			account_operation_history: 'account operation history',
			datasource: 'datasource',
			datasource_category_management: 'datasource category management',
			datasource_category_application: 'datasource category application',
			datasource_creation: 'datasource creation',
			datasource_delete: 'datasource deleting',
			datasource_edition: 'datasource editing',
			data_transmission: 'data transmission ',
			Data_SYNC: 'Data SYNC & migration',
			SYNC_category_management: 'Migration & SYNC category management',
			SYNC_category_application: 'Migration & SYNC category application',
			SYNC_job_creation: 'Migration & SYNC job creation',
			SYNC_job_delete: 'Migration & SYNC job deleting',
			SYNC_job_edition: 'Migration & SYNC job editing',
			SYNC_job_operation: 'Migration & SYNC job operation',
			SYNC_job_import: 'Migration & SYNC job import ',
			SYNC_job_export: 'Migration & SYNC job export ',
			SYNC_Function_management: 'Function management',
			Data_verify: 'Data verify',
			verify_job_creation: 'verify job creation',
			verify_job_edition: 'verify job editing',
			verify_job_delete: 'verify job deleting',
			verify_job_execution: 'verify job execution',
			data_government: 'data government ',
			data_catalog: 'data catalog ',
			data_catalog_category_management: 'data catalog category management',
			data_catalog_category_application: 'data catalog category application',
			data_catalog_edition: 'data catalog editing',
			new_model_creation: 'new model creation',
			data_quality: 'data quality',
			data_quality_edition: 'data quality editing',
			data_rules: 'data rules',
			data_rule_management: 'data rule management',
			time_to_live: 'time to live',
			time_to_live_management: 'time to live management',
			data_lineage: 'data lineage',
			data_publish: 'data publish',
			API_management: 'API management',
			API_category_application: 'API category application',
			API_category_management: 'API category management',
			API_creation: 'API creation',
			API_delete: 'API deleting',
			API_edition: 'API editing',
			API_publish: 'API publish',
			API_data_explorer: 'API data explorer',
			API_data_explorer_export: 'API data explorer export',
			API_doc_test: 'API doc & test',
			API_stats: 'API stats',
			API_clients: 'API clients',
			API_clients_amangement: 'API clients amangement',
			API_server: 'API server',
			API_server_management: 'API server management',
			data_collect: 'data collect(old)',
			system_management: 'system management',
			schedule_jobs: 'schedule jobs',
			schedule_jobs_management: 'schedule jobs management',
			Cluster_management: 'Cluster management',
			Cluster_operation: 'Cluster operation',
			status_log: 'status log',
			agents: 'agents',
			user_management: 'user management',
			user_creation: 'user creation',
			user_edition: 'user editing',
			user_delete: 'user deleting',
			user_category_management: 'user category management',
			user_category_application: 'user category application',
			role_management: 'role management',
			role_creation: 'role creation',
			role_edition: 'role editing',
			role_delete: 'role deleting',
			system_settings: 'system settings',
			system_settings_modification: 'system settings modification',
			create_new_table_in_SYNC: 'create new table/collection in SYNC job',
			servers_oversee: 'servers oversee',
			dictionary: 'dictionary',
			Topology: 'Topology',
			meta_data_deleting: 'Metadata delete',
			API_data_explorer_deleting: 'API data explorer deleting',
			API_data_explorer_tagging: 'API data explorer tagging',
			API_data_time_zone_editing: 'API data time zone editing',
			API_data_creation: 'API data creation',
			API_data_download: 'API data download'
		}
	}
};

export default en;
