import enLocale from 'element-ui/lib/locale/lang/en'

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
    metadata: 'Tapdata-MetadataManagement',
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
      otherDmandsText:
        'Any requirement, please contact us by scanning WeChat QR below.'
    },

    signIn: {
      slogan: 'Use your data, as easy as water from tap',
      signIn: 'Sign in',
      keepSignIn: 'Keep signed in',
      email_placeholder: 'Enter your email',
      inviteCode_placeholder: 'invite code',
      password_placeholder: 'Enter your password',

      email_require: 'E-mail is required.',
      inviteCode_require: 'invite code is required.',
      inviteCode_invalid: 'invite code must be valid.',
      email_invalid: 'E-mail must be valid.',
      password_invalid: 'Password at least 5 characters.',
      account_waiting_approve:
        'Your account is waiting administrator to approve.',
      account_disabled: 'Your account is disabled by administrator.',
      permission_denied: 'Permission denied.',
      signInFail: "The email and password didn't work.",
      watingApprove:
        'This account is not approved, please wait for contact email.',
      accountDisabled:
        'Your account has been frozen, if you have any questions, please contact customer service. ',
      hasVerified: 'The email has not been verified',
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
      clickBtn:
        'Click the button below to enjoy the journey of data transmission',
      resetClickBtn: 'Click the button below to log in',
      goLogin: 'Go login',
      connectionFailed: 'registration confirmation link is invalid',
      resetConnectionFailed: 'reset password confirmation link is invalid',
      clickText: 'Click',
      confirmEmail: 'Please re',
      registered: ' Registered',
      resetAccountSuccess: 'The password has been reset successfully~',
      passwordResetText: 'Reset password email has been sent to',
      notMailbox: 'oops~This mailbox has not been registered yet',
      hasMailbox: 'oops~This mailbox has already been registered',
      disableSignup: 'oops~Disable Signup',

      getCode: 'Get InviteCode',
      qrCodeText: 'Scan wechat QR Code to get invite code'
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
      metadataDefinition: 'Metadata management',
      metadata: 'Data Catalog',
      metadataSearch: 'Data Search',
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
      agentManagement: 'Agent management',
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
    noPermission: 'This operation lacks the appropriate permissions',
    api: {
      get: {
        error: 'Load data failed.',
        loading: 'Loading data...'
      }
    },
    verifyConfirm: 'Are you sure to delete JS verify logic',
    comfirm: 'Are you sure you want to ',
    operationSuccuess: 'Operation succuess.',
    modifyName: 'Modify name',
    ok: 'OK',
    exists_name: 'Name already exists',
    nullName: 'Field name can not be empty',
    search: 'search',
    sourchName: 'Name',
    serverName: 'Server name',
    agentSetting: 'Agent server settings',
    iPDisplay: 'IP display',
    ipTip:
      'Switching the network card only changes the display of IP under the server of cluster management page, does not affect any function.',
    delTittle: 'Delete Agent server',
    delMessage: 'Are you sure to delete the server ',
    filter: 'Filter',
    addServerMon: 'Add server monitoring',
    startUp: 'Start up',
    close: 'Close',
    manageSys: 'Manage system',
    restart: 'restart',
    update: 'Update',
    syncGover: 'Syn gover',
    screen: 'Screen',
    delete: 'Delete',
    test: 'Test',
    copy: 'Copy',
    reload: 'Reload schema',
    preview: 'Detail',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    deleteOrNot: 'Delete or not',
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
    startupAfter_delete: 'Please delete after startup',
    startupAfter_add: 'Please add after startup',
    noData: 'NO DATA ',
    prompt: 'Prompt',
    resetMessage:
      'This will cause the job to be rerun from the beginning, continue?',
    deteleMessage: 'This will permanently delete the job',
    deteleJobMessage: 'This will permanently delete the choosed jobs ?',
    forceStoppingMessage:
      'This will interrupt the data transfer immediately, continue?',
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
    loadingSchema:
      'Schema of source database has not finished loading yet, please wait',
    reloadSchemaSuccess: 'Model update successfully',
    reloadSchemaError: 'Model update failed'
  },
  cluster: {
    cancel: 'Cancel',
    confirm: 'Confirm',
    confirmText: 'Confirm ',
    closeSever: ' Close service ',
    restartServer: ' Restart service ',
    startServer: ' Start service ',
    deleteOrNot: 'Delete or not',
    serviceCluMange: 'Service cluster management',
    update: 'Update',
    start: 'Start up',
    close: 'Close',
    restart: 'Restart',
    syncGover: 'Syn gover',
    delete: 'Delete',
    edit: 'Edit',
    reduction: 'Restore',
    time: 'Test',
    saveOK: 'Saved successfully',
    saveFail: 'Save failed',
    deleteOK: 'Successfully deleted',
    deleteFail: 'Failed to delete',
    selectTime: 'Select time',
    selectDate: 'Select date',
    placeholderSelect: 'Please select',
    statusLog: 'Status log',
    placeholderServer: 'Please enter a server name',
    manageSys: 'Manage system',
    addServerMon: 'Add server monitoring',
    agentSetting: 'Agent server settings',
    serverName: 'Server name',
    placeholderMonServer: 'Please enter the monitored service name',
    iPDisplay: 'IP display',
    ipTip:
      'Switching the network card only changes the display of IP under the server of cluster management page, does not affect any function.',
    delTittle: 'Delete Agent server',
    delMessage: 're you sure to delete the server ',
    startupAfter_delete: 'Please delete after startup',
    startupAfter_add: 'Please add after startup',
    noneText: ' is required.',
    hostName: 'Host name',
    ipAddress: 'IP address',
    uniqueEncode: 'Unique encoding',
    logs: 'Log',
    serviceType: 'Service type',
    level: 'Level'
  },
  button: {
    refresh: 'Refresh',
    reset: 'Reset',
    delete: 'Delete',
    rename: 'Rename',
    details: 'Details',
    more: 'More',
    edit: 'Edit',
    query: 'Query',
    all: 'All'
  },
  dataFlow: {
    leave: 'Leave',
    backlistText: 'Back to sync job list page',
    saveReminder:
      'This jobhas not been saved yet, If you leave this page, the job configuration will be lost. Are you sure to leave ?',
    saveFail:
      'Failed to save the task, please check the configuration and ensure that the data source status is valid.',
    aggregateNotDataNode:
      'The first target data node of aggregation node can only be COLLECTION',
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
    DissedNoAction:
      'oops~ The banned node/Connecting line can not be deleted and connected',
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
    moreFeatures: 'More Features',
    creatSource: 'Create data source',
    creatApi: 'Create API',
    dataValidation: 'Data Verification',
    sourceDescription:
      'The data source is the premise of creating the transmission job, the data source includes Database, File, GridFS, Rest API, View, Custom connection, etc.',
    apiDescription:
      'API, aka data publication API, you can create a new API which includes the paths of Post, Get, Patch, Delete.',
    datavaliDescription:
      'Data verification has the function of count verify, content verify, and joint field value verify which can verify the consistency of source and target.',
    multiError: {
      allSelectionError:
        'The status of selected job does not allow this operation.',
      notFound: 'This job does not existed.',
      statusError: 'Job status does not allow to do this operation.',
      otherError: 'Operation failed, please try it again.'
    },
    changeName: 'Rename',
    Enable: 'Enable',
    Disable: 'Disable',
    draftNotStart: 'Configuration is not complete,  cannot be started',
    systemHint: 'System prompt',
    systemText:
      'The system detected that the following tasks were not saved， keep editing?',
    stystemOpen: 'Open',
    stystemOpenAll: 'Open all',
    stystemDeleteAll: 'Delete all',
    stystemLgnoreAll: 'Ignore all',
    newTaksName: 'The_new_task',
    selectNode: 'Please select a node',
    submitExecute: 'Submit and execute',
    submitOnly: 'Submit only',
    implementationModalities: 'Execution method',
    submitConfirmation: 'Submit Confirmation',
    SyncPoint: 'CDC start timepoint',
    cdcLabel: 'Data source:',
    syncType: 'Type',
    belongAgent: 'Agent',
    SyncInfo: {
      localTZ:
        'Local Timezone CDC Time: custom a point of  CDC time，in local time zone',
      current: 'Current Time：Current DB Time',
      connTZ:
        'DB Timezone CDC Time: custom a point of  CDC time，in the time zone of a specific server',
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
    chooseFile: 'Select a document',
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
    loadLogTip:
      'Run log is trying to load, it may take 5 ~ 10 seconds, please wait ...',
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
      'Throughput: The read speed from source node and the write speed to the target node, larger number is better',
    transtime_pop:
      'Transmission Time: The time lapsed from the data record is read from the source node until the data is written into target node',
    replicate_pop:
      'Replicate Lag: The time gap between source node last update time and target node last update time',
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
    searchPlaceholder: 'Task name',
    searchAgent: 'Agent name',
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
    schedule: 'Schedule',
    run: 'Run',
    stop: 'Stop',
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
    runningMonitor: 'Monitor',
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
    drop_target_before_start:
      'Whether the target table is deleted before starting the task',
    run_custom_sql: 'Repeat custom SQL',
    stop_on_error: 'Stop when error',
    need_to_create_Index: 'Auto-create index',
    is_schedule: 'Regular job schedul',
    cron_expression: 'Scheduling cron expression',
    data_quality_tag: 'Add data quality tag',
    notification_lag: 'Notification',
    isOpenAutoDDL: 'Auto-DDL operation',
    ddlTip:
      'Warn: Automatic DDL does not support JS processor and field processor',
    transformerConcurrency: 'Transformer Concurrency',
    processorConcurrency: 'Processor Concurrency',
    cdcEngineFilter: 'Enable Engine Filtering',
    cdcFetchSize: 'Number of CDC batch reads',
    cdcFetchSizeTip: 'Number of data read by system each time.',
    cdcFetchSizeTip1:
      'The smaller the number entered means the higher the CDC real-time performance, but the processing speed is relatively slow.',
    cdcFetchSizeTip2:
      'The more the number entered means the lower the real-time performance, and the overall processing speed will be faster. ',
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
    keepAggreHistoryData: 'Keep aggregation historical data',
    aggregation: 'Aggregation',
    aggrCleanSecond: 'Time to clean up old version data',
    aggrFullSyncSecond: 'Full synchronization time',
    enterFilterTable: 'Please enter the filter table content',
    aggregatePrompt:
      'Warn：Using the aggregation processor node, the job will be reset when excutes restart',
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
    delete_confirm_Title: 'Delete the task? ',
    delete_confirm_Message:
      'After deleting task XXX, this task cannot be restored',
    bulk_delete_confirm_Title: 'Delete tasks in batch? ',
    bulk_delete_confirm_Message:
      'After deleting tasks in batch, tasks cannot be restored',

    stop_confirm_title: 'Do you want to suspend this task? ',
    stop_confirm_message:
      'After the task xxx is suspended, when the table in the task that has not been fully synchronized is started again, the full synchronization will be performed again',
    bulk_stop_confirm_title: 'Do you want to pause tasks in bulk? ',
    bulk_stop_confirm_message:
      'After the task is paused in batch, when the table in the task that has not been fully synchronized is started again, the full synchronization will be performed again',

    force_stop_confirm_title: 'Do you want to force stop this task? ',
    force_stop_confirm_message:
      'Forcibly stop the task xxx will immediately interrupt the data transmission, force the task to stop quickly, and reset the task',
    bulk_force_stop_confirm_title:
      'Do you want to force stop tasks in batches? ',
    bulk_force_stop_confirm_message:
      'The batch forced stop task will immediately interrupt the data transmission to force the task to stop quickly and reset the task',

    initialize_confirm_title: 'Do you want to reset this task? ',
    initialize_confirm_message:
      'Resetting task xxx will clear the task synchronization progress and the task will be executed again',
    bulk_initialize_confirm_title: 'Do you want to reset tasks in bulk? ',
    bulk_initialize_confirm_message:
      'Resetting the task in batches will clear the task synchronization progress, and the task will be executed again',

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
      batchTip:
        'Batch:  Batch processing and transmission of CDC data with high performance.',
      onebyoneTip:
        'Row by row: Processing and transmission of CDC data row by row',
      sync_type_tip:
        'Transmission type can be changed after disable aggregation settings of collection node: '
    },
    skipError: {
      title: 'Skip Error Settings',
      skipErrorSettings: 'Data Processing Error Handling',
      tip:
        'There were data processing errors detected in the job, please make sure these errors have been addressed. If you would like to skip these errors, please check them and click the "Skip errors, continue to start" button.  ',
      attention:
        'WARNING: If you chose to skip the errors, the relevant data may be discarded. ',
      startJob: 'Skip errors, continue to start',
      cancel: 'Cancel',
      taskName: 'Task name'
    }
  },
  connection: {
    dataBaseName: 'Connection name',
    dataBaseHost: 'Database host',
    dataBaseClassify: 'Category',
    dataBaseType: 'Database type',
    dataBaseStatus: 'Status',
    dataBaseSearch: 'Search by connection name',
    loadSchema: 'Reload schema periodically',
    connectionType: 'Connection type',
    connectionInfo: 'Connection info',
    connectionSource: 'Connection source',
    lastUpdateTime: 'Update time',
    operate: 'Operation',
    fuzzyQuery: 'Fuzzy query',
    PreciseQuery: 'Precise query',
    databaseTittle: 'Data connection management',
    createNewDataSource: 'Create New Connection',
    info: 'Database information',
    copyMsg: 'copy successfully',
    testMsg: 'test successfully',
    creator: 'Creator',
    editDataSource: 'Edit Connection',
    reloadOK: 'reloading schema',
    reloadFail: 'Failed to schema',
    reloadTittle: 'Reload schema',
    desc:
      'Source Connection includes database, files, RESTful API, custom API etc. You must create at least one data source before you can create migration or replication job. In addition to the standard configuration, you can also configure whether to automatic/manual reload database schema, time zone, and table filter settings. See more details click',
    deteleDatabaseTittle: 'Do you want to delete the connection?',
    deteleDatabaseMsg:
      'After deleting connection XXX, this connection cannot be restored.',
    reloadMsg:
      'It may take a long time to reload schema, are you sure to reload the schema of the database',
    checkMsg:
      'This data source is used by transmission job or API, cannot be deleted',
    copyFailedMsg:
      'Copy failed, reason:  The setting item "Connections - create  duplicate source" need to be set to "false"',
    change: 'Change',
    rename: 'Rename',
    testConnection: 'Test connection',
    status: {
      testing: 'testing',
      invalid: 'invalid',
      ready: 'ready'
    },
    preview: {
      edit: 'Edit',
      test: 'Test',
      reloadName: 'Reload schema'
    },
    type: {
      source: 'Source',
      target: 'Target',
      source_and_target: 'Source&Target'
    },
    cannot_delete_remind:
      'Connection is currently being used by one or more jobs and apis. Please delete the jobs or apis then try again.'
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
        kafkaText: 'Kafka Node',
        kafkaName_isNull: 'kafka cannot be empty',
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
              keepAllFields:
                'Keep all fields: Keep all fields of this collection.',
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
          enterPublishApiName:
            'Please enter the name of the data publishing API',
          enterNewlyReleasedApi:
            'Please enter a description of the newly released API',
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
        customProcessor: {
          name: 'Custom processor'
        },
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
          school_nameComment:
            '// Grouping summary field names, no display if dont filling out',
          aggregateSizeLabel: 'Number of cached aggregation result',
          aggregateSizeTips:
            'Put in the range of cached aggregation result, the excess data will be stored in target database.',
          allAggregateSize: 'All data write in cache',
          customAggregateSize: 'Custom the cache range',
          cleanSecondTimeLess3600:
            'The time to clean up old version data cannot be less than 3600',
          fullSyncSecondTimeLess3600: 'Full sync time cannot be less than 3600'
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
            originalName: 'Original field name: ',
            originalType: 'Original type: ',
            errorUndefined:
              'The model of the source node has changed, so that the field processor does not work, please click the UPDATE MODEL button in the configuration panel of the upper node to handle this issue',
            errorOperationSaveTip:
              'The field processor node has conflict to be handled',
            errorOperationTipBefore:
              'Conflict between field processing operation and source model',
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
            exampleRow1:
              'var result = "a" + "b"  // String concatenation, the result of result is "ab"',
            exampleRow2:
              'var result = 1 + 2 // Digital calculation, the result of result is 3',
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
              labelTip:
                'Expressions can use comparison and calculation operators in JavaScript'
            },
            action: {
              label: 'Execute action',
              discard: 'Discard',
              retain: 'Retain'
            },
            expressionExample: {
              label: 'Example expression',
              labelTip:
                'Expressions can use comparison and calculation operators in JavaScript',
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
          name: 'Cache Lookup',
          tip: 'Cache Lookup Node',
          form: {
            name: {
              label: 'Node Name',
              placeholder: 'Please input node name.',
              none: 'Node name is required.'
            },
            cacheId: {
              label: 'Cache lookup node',
              placeholder: 'Choose MEMORY CACHE node in this job.',
              none: 'Choose MEMORY CACHE node in this job.'
            },
            joinSettings: {
              label: 'Lookup joint setting',
              cacheKey: 'Memory cache primary key',
              sourceKey: {
                label: 'Source table joint field',
                placeholder: 'Choose cache joint field.'
              },
              none: 'Choose cache joint field.'
            },
            joinKey: {
              label: 'Target path',
              placeholder: 'Enter or choose target path field.'
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
            placeholder: 'Please input target path',
            copyLabel: 'Copy target path'
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
        viewTip:
          'Copy view does not support table rename, if check this box rename function will be disabled',
        formTip:
          'The function of copy view, function, procedure only support MySQL to MySQL',
        chooseATableTip: 'At least select one object to be copied'
      }
    },
    ui: {
      sidebar: {
        setting: 'Data Flow Settings',
        node_setting: 'Node Settings',
        statistics: 'Statistics',
        logs: 'Running Logs',
        milestone: 'Task Milestone',
        capture: 'Capture',
        style: 'Style',
        config: 'Config',
        data_nodes: 'Data Nodes',
        processor: 'Processor',
        tableSelector: 'Fast Selection'
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
    },
    fileFormBuilder: {
      fileSource: 'Data source',
      fileSourcePlaceholder: 'Enter data source',
      includeFilename: 'Enter regular expression for include file',
      excludeFilename: 'Enter regular expression for discard file',
      fileSchema: 'Set model name',
      sperate: 'Model field separator',
      jsonType: 'Json type',
      excelPassword: 'Excel password',
      excelValue: 'Excel data settings',
      header_mapping_value: 'Cell content',
      header_mapping_index: 'Cell coordinate name',
      header_mapping: ' Field name getting',
      sheet_range: 'Range of sheets',
      sheet_start: 'Enter the number of starting sheet',
      sheet_end: 'Enter the number of ending sheet',
      excel_header_type: 'Field mapping range',
      excel_header_coordinate: 'According to the table coordinate',
      excel_header_range: 'Custom range',
      guideDocPrefix: 'Please select the ',
      guideDoc:
        'file under the data source of the FILE type. The system will load up the model and transfer it to the target collection. If the structures of selected files are different, the system will combine them into one model. For more information, please click the',
      header_type_custom_label: 'Multiple fields separated by commas',
      header_type_required: 'Header type is required',
      excel_header_start: 'Enter the starting coordinate',
      excel_header_end: 'Enter the ending coordinate',
      excel_value_type: 'Range of rows',
      excel_value_start: 'Enter the starting abscissa',
      excel_value_end: 'Enter the ending abscissa',
      excel_number: 'Sheet range should be number',
      excel_cell_point:
        'Enter the coordinates of Excel, "row 1 and column 1" can be entered as "A1"',
      excel_cell_tip: 'The field range must be uppercase letter + number',
      excel_value_end_gt_start:
        'The number of ending page must be greater than or equal to the number of starting page',
      excel_value_range:
        'Enter the abscissa range of Excel, "line 2 to line 100", can be entered as: "2" ~ "10"',
      fileFilter: 'File filter',
      include: 'Include file',
      exclude: 'Discard file',
      loadSchema: 'Load Schema',
      xpath: 'Select record data XPath',
      tableName: 'Model name',
      loadSchemaTip:
        'After configuring the above items, please click the Load Model" button to update the file model. If there is no model, sync transmission cannot be performed'
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
    exampleHashMQL:
      'Please enter MQL query statement. e.g.: db.collection_1.find ({ field_2:A },{ field_1:1 })',
    verifyRunningInfo: 'Keep verifying in background',
    verifyStatusWaiting:
      'Verifying phase 1-3:  verification job queuing, please wait....   Click',
    verifyStatusDraft:
      'Verifying phase 2-3:  verification job scheduling, please wait...   Click',
    verifyStatusValidating:
      'Verifying phase 3-3:  verification job executing, please wait...   Click',
    verifyStatusInterrupted:
      'Verification job being stopped，please wait...   Click',
    verifyStatusStop: 'Stop verification',
    verifyStatusCompleted:
      'Verification result loading , please wait for a while',
    or: 'or',
    psc: 'pcs',
    all: 'All',
    setting: {
      title: 'Verify default settings',
      text:
        'The verification setting is the global verification setting, the priority of the advanced setting in the created verification task is higher than the setting here. ',
      keepTimeLabel:
        'Retention time of verification historical results and detailed information',
      errorSaveSumLable:
        'Check out the limit of the number of error messages saved for each table',
      errorDifferenceResult:
        'The error tolerance of the difference data allowed by the verification result',
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
    dblclickDataModel:
      'Please double-click the data model to open the field mapping',
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
    primaryTest:
      'Starting connection test service, please wait for a while ...',
    testing: 'Testing, please wait for a while ...',
    submit: 'Submit',
    cancel: 'Cancel',
    backDetection: 'backstage testing',
    test: {
      testResultFail: 'Connection test failed',
      testResultSuccess: 'Connection test successful',
      testResult: 'Test connection result: ',
      success: 'Pass',
      fail: 'Failed',
      testing: 'Untest',
      items: 'Test items',
      result: 'Result',
      unTest: 'Waiting ... ',
      information: 'Information',
      error: 'The test service request timed out, please close and try again.'
    },
    form: {
      connectionName: 'Connection Name',
      databaseType: 'DB type',
      connectionType: 'Connection Type',
      host: 'DB Host',
      agentAddr: 'Agent address',
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
      connectionMode: 'Connection mode',
      databaseOwner: 'Schema',
      serviceName: 'Service name',
      timeZone: 'Date Type Timezone',
      ReloadSchema: 'Reload schema periodically',
      clusterName: 'Cluster Name',
      databaseHostPlaceholder:
        'Database Host(127.0.0.1/Domain:{Port},Please use multiple addresses , separate)',
      plugin_name: 'Log decoder plugin name',
      supportUpdatePk: 'Support Update Primary Key',
      indexPrefix: 'Index prefix',
      agentMsg:
        'Agent current state exception cannot create connection, please check.',
      multiTenant: 'Multi-tenant',
      uriTips: {
        label: 'Example',
        content:
          `<b>MongoDB Connection URI Examples :</b><br>` +
          `<b>Replicaset :</b> mongodb://192.168.0.100:27017/mydb?replicaSet=xxx<br>` +
          `<b>Replicaset with authentication:</b> mongodb://admin:password@192.168.0.100:27017/mydb?replicaSet=xxx&authSource=admin<br>` +
          `<b>Replicaset with multiple members :</b> mongodb://192.168.0.1:27017,192.168.0.2:27017,192.168.0.3:27017/mydb?replicaSet=xxx<br>` +
          `<b>Sharded Cluste :</b> mongodb://192.168.0.100:27017/mydb<br>` +
          `<b>Sharded Cluster with multiple mongos :</b> mongodb://192.168.0.1:27017,192.168.0.2:27017,192.168.0.3:27017/mydb<br>`
      },
      tableFilterTips:
        'Comma-delimited list of expression, use * to represent any character of any length.',
      timeZoneTips: 'Impact Type: DATE',
      options: {
        sourceAndTarget: 'SOURCE AND TARGET',
        source: 'SOURCE',
        target: 'TARGET',
        sourceAndTargetTips:
          'This data connection can be used as both source and target in Tapdata',
        sourceTips:
          'This data connection can only be used as source in Tapdata, but not as target',
        targetTips:
          'This data connection can only be used as target in Tapdata, but not as source ',
        connectionMode: 'Connection mode',
        URIMode: 'URI mode',
        URIModeTips:
          'Configure MongoDB database in URI mode. Batch input is supported',
        standardMode: 'Standard mode',
        standardModeTips:
          'Configure MongoDB database according to Host/IP, port, account and password. Batch input is supported',
        sslTSL: 'Connect via an TSL/SSL tunnel',
        sslTSLTip:
          'Tapdata will connect to a separate server in your network which provides an TSL/SSL tunnel to your database. This method is necessary if your database is in an inaccessible subnet.',
        sslTop: 'Connect directly',
        sslTopTips:
          'Tapdata will connect directly to your database. You may have to create a security rule to allow access. This is the simplest method.'
      },
      guide:
        'For data connection configuration, please refer to the guide documenton the right side. For more information about data connection settings, instructions or other information, please click',
      guideDoc: 'guide document',
      response_body: {
        CHECK_CONNECT: 'Check the connection is available',
        CHECK_AUTH:
          'Checks if the username,password and database are available',
        CHECK_VERSION: 'Checks if the version information is available',
        LOAD_SCHEMA: 'Load schema model',
        CHECK_CDC_PERMISSION: 'Check if cdc permissions are granted',
        CHECK_ARCHIVE_LOG: 'Check if archive log is opened',
        CHECK_SUPPLEMENTAL_LOG: 'Check if supplemental log mode is correct',
        CHECK_DDL_PERMISSION: 'Check if execute ddl permissions are granted',
        CHECK_PERMISSION: 'Check if permissions are graned',
        CHECK_BIN_LOG: 'Check if binlog is opened, and is ROW level',
        CHECK_SCRIPT: 'Check if script(s) is available',
        CHECK_PRIMARY_KEY: 'Check if primary key(s) is available',
        CHECK_CONFIG: 'Check if config is available',
        CHECK_READ_PERMISSION: 'Check if read permission is granted',
        CHECK_ACCESS_TOKEN: 'Check if access token is available',
        CHECK_API_AUTH: 'Check if api auth is available',
        CHECK_LOCAL_PORT: 'Check if local port is available',
        SCAN_FILE: 'Scan the files in the directory',
        CHECK_BIN_LOG_SYNC: 'Check BINLOG sync enable',
        CHECK_GTID: 'Check of GTID mode and GTID consistency enable'
      },
      file: {
        fileAddr: 'File Address',
        filePort: 'File Port',
        creatAccount: 'Creator account',
        password: 'Password',
        connectionMethod: 'Connection Method',
        encodingFormat: 'Encoding Format',
        connecitonTimeout: 'Connection timeout (seconds)',
        transmissionTimeout: 'Transmission timeout (seconds)',
        second: 'second',
        fileUrl: 'File Path',
        agreementType: 'Agreement Type',
        agentLocationFile: 'Agent location file',
        agentLocationFileTip: 'Add files at the server where Agent is located.',
        ftpTip:
          'Add files according to FTP such as address, port, account, password, etc. ',
        shared: 'Shared folder',
        sharedTip:
          'Add files according to shared folders such as address, account, password, etc.',
        activeConnectionMode: 'FTP port mode',
        activeConnectionModeTip:
          'The server initiatively sends a request to establish a connection with high performance. If there is a firewall, the request may fail. ',
        passiveConnectionMode: 'FTP passive mode',
        passiveConnectionModeTip:
          'The connection and data connection are submitted by the client to the server, which can solve the problem that the request is filtered out by the firewall.',
        input_number: 'Please enter a number',
        greaterZero_less5256000:
          'Must be greater than or equal to zero and less than or equal to 5256000',
        path: 'Set path',
        recursive: 'Recursive path',
        include_filename: 'Keep file',
        exclude_filename: 'Discard file',
        viewExpression: 'Please enter the file name expression',
        expression: 'Expression example',
        includePlaceholder: 'Please enter regular expression for include file',
        excludePlaceholder: 'Please enter regular expression for discard file',
        pathPlaceholder: 'Please enter the file path',
        addPath: 'Add Path',
        fileNone: 'The file path cannot be empty',
        versionManagement: 'Version Management',
        file_upload_chunk_size: 'File upload file chunk size (bytes)',
        file_upload_mode: 'File upload mode',
        file_upload_stream: 'Streaming',
        file_upload_memory: 'Memory read (risk of memory overflow)',
        overwriteText: 'When a file with the same name exists',
        overwrite: 'Overwrite',
        discard: 'ignore',
        extend_source_path: 'Inherit the directory structure',
        file_output_path: 'File output absolute path',
        csvFijlter: 'File Name Filter '
      },
      kafka: {
        chooseTheme: 'Choose a theme',
        topicName: 'topic name',
        topicExpression: 'topic expression',
        requestTimeoutPeriod: 'Pull request timeout period',
        readIsolationLevel: 'Message submission read isolation level',
        maximumNumber:
          'The maximum number of records returned in a single poll message',
        blockingTimeoutTime: 'Single poll message blocking timeout time',
        fetchMaximumNumber:
          'The maximum number of bytes in a single fetch message',
        fetchBlockTime: 'Single fetch message blocking timeout time',
        lonoreFormat: 'Ignore non-JSON Object format messages',
        lonoreFormatTip:
          'If it is turned on, it will ignore the message if it encounters a parsing exception, otherwise it will stop pulling the message',
        directlyNameTip:
          'Enter the subject name directly, separate multiple subjects with commas',
        kafkaPatternTopicsTip:
          'Configure the MongoDB database according to Host, port, account, and password, and support batch input',
        hostPlaceHolder:
          'Enter IP/host:port, separate multiple addresses with commas',
        requestTimeout: 'Push request timeout (ms)',
        transactionMessage: 'Transaction Message',
        kafkaRetries: 'Request retry times',
        kafkaBatchSize: 'Partition message batch bytes',
        kafkaAcks: 'ACK confirmation mechanism',
        kafkaLingerMS:
          'Maximum waiting time for partition message batch (milliseconds)',
        kafkaDeliveryTimeoutMS: 'Message transmission timeout time',
        kafkaMaxRequestSize: 'Request maximum number of bytes',
        kafkaBufferMemory: 'Buffer message bytes',
        kafkaCompressionType: 'Message compression type',
        kafkaPartitionKey: 'Partition key field name',
        kafkaIgnorePushError: 'Ignore push message exception',
        pushErrorTip:
          'If it is enabled, ignore the message pushed this time (there is a message loss), otherwise stop pushing the message',
        kafkaAcks0: 'Do not confirm',
        kafkaAcks1: 'Write to master partition only',
        kafkaAcks_1: 'Write to most ISR partitions',
        kafkaAcksAll: 'Write to all ISR partitions'
      }
    },
    error: {
      connectionNameExist: 'Connection name already existed.',
      connectionurl: 'Connection name already existed.',
      duplicateSource: 'This data source already existed',
      noneHost: 'Database host is required.',
      nonePort: 'Port is required.',
      portNumber: 'Must be number.',
      portRange: 'Port should be between 1 ~ 65535',
      noneSslKey: 'Private key is required.',
      noneSslCA: 'Certificate Authority is required.',
      sourceNameExist: 'This data source already exists',
      noCreate: ' , Cannot be created repeatedly',
      kafkaNameRange: 'The topic name length is greater than 256'
    },
    createDatabase: 'Create New Connection',
    copyDatabase: 'Copy name',
    checkDatabase: 'Check property',
    createTable: 'Create New Table',
    copyTable: 'Copy name',
    createCollection: 'Create new collection',
    copyCollection: 'Copy name',
    dialogTitle: 'Prompt',
    close: 'Close'
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
  classification: {
    title: 'Data Category',
    userTitle: 'User Group',
    creatUserGroup: 'Create user group',
    creatDataClassification: 'Create data classification',
    nameExist: 'Category name already existed.',
    addNode: 'Add category at the same level',
    addChildernNode: 'Add Child Category',
    editNode: 'Edit',
    deleteNode: 'Delete',
    nodeName: 'Please enter classification',
    deteleMessage:
      'This operation will delete all subclasses existing in this category, whether to delete it'
  },
  relations: {
    blood: 'Table Tracing',
    refresh: 'Refresh',
    refreshStatus: 'Last Refresh'
  },
  metadata: {
    createNewModel: 'Create model',
    namePlaceholder: 'Please enter the table name/database name',
    typePlaceholder: 'Please select the type',
    databasePlaceholder: 'Please select a database',
    createModel: 'Create a model',
    header: {
      name: 'Table name/owned database',
      meta_type: 'Meta type',
      last_user_name: 'Last update user',
      last_updated: 'Last update time'
    },
    metaType: {
      database: 'Database',
      api: 'API',
      job: 'Job',
      table: 'Table',
      collection: 'Collection',
      view: 'View',
      directory: 'Directory',
      dataflow: 'Data Flow',
      mongo_view: 'Mongodb View',
      ftp: 'FTP',
      apiendpoint: 'API End Point'
    },
    form: {
      type: 'Meta type',
      database: 'Database',
      tableName: 'Table name',
      none_table_name: 'The table name cannot be empty'
    },
    details: {
      model: 'Model',
      dataDirectory: 'Data Directory',
      dataDetails: 'Data Details',
      basicAttributes: 'Basic Properties',
      businessAttributes: 'Custom Properties',
      clickAddDes: 'Click to add a description',
      propertyDetails: 'Property Details',
      name: 'Name',
      originalTableName: 'Original name',
      typesOf: 'Type',
      owningConnection: 'Connection',
      primaryKey: 'PK',
      source: 'Source',
      creationTime: 'Create time',
      founder: 'Creater',
      changeTime: 'Edit time',
      Modifier: 'Editor',
      renamed: 'Renamed',
      edit: 'Edit',
      searchPlaceholder: 'Field name/alias/description',
      selsectSource: 'Select source',
      createFiled: 'Create field',
      editFild: 'Edit field',
      prohibitOverwriting: 'Batch overwriting is prohibited',
      batchCoverage: 'Batch coverage',
      refreshModel: 'Refresh model',
      filedName: 'Field name',
      alias: 'Alias',
      description: 'Description',
      fieldType: 'Field Type',
      allowOverwrite: 'Sync by DB',
      selfIncreasing: 'Autoincrement',
      fieldLength: 'Column size',
      accuracy: 'Precision',
      numberLength: 'Scale',
      dictionarySettings: 'Dictionary Settings',
      initialValue: 'Initial value',
      mappedValue: 'Mapping value',
      enterInitialValue: 'Enter initial value',
      enterMappedValue: 'Enter the mapped value',
      opera: 'Operation',
      newMapping: 'Create new',
      chooseTemplate: 'Choose template',
      foreignKeySetting: 'Foreign Key Set',
      associationTable: 'Associated table',
      associationField: 'Associated field',
      connectionRelation: 'Relation type',
      oneone: 'one to one',
      onemany: 'one to many',
      manyone: 'many to one',
      addRelatedTable: 'Create new',
      enter: 'Please enter',
      filedAliasName: 'Field name/Alias',
      Float: 'Floating point number',
      String: 'String',
      baseObject: 'Object',
      Array: 'Array',
      Map: 'Dictionary Object',
      Short: 'Short integer',
      Long: 'Long integer',
      Double: 'Double Precision',
      Byte: 'Byte',
      Bytes: 'Number of bytes',
      BigDecimal: 'Decimal',
      Boolean: 'Boolean value',
      Date: 'Date',
      Integer: 'Integer',
      dictionary_typeNo: 'This field type cannot add a dictionary template',
      fieldNameNo: 'The field name is empty',
      moreAttributes: 'More Properties',
      msgFiledName: 'Please enter the field name',
      success_Release: 'Save successfully, please republish manually',
      filedName_repeat: 'Field name cannot be the same name',
      filedDictionary: 'Field Dictionary',
      foreignKeyAssociation: 'Foreign key',
      tableLayering: 'Category',
      theme: 'Theme',
      taskReference: 'Task Reference',
      APIReference: 'API Reference',
      creat: 'New',
      businessAttrTitle: 'Business attribute',
      attrName: 'Property name',
      attrKey: 'Property value',
      editAliasNameTitle: 'Edit alias',
      editCommentTitle: 'Edit description',
      uniquelyIdentifies: 'Qualified Name'
    },
    metadataSearch: {
      title: 'Metadata retrieval',
      desc:
        'Metadata retrieval provides search functions for the names, aliases, descriptions of tables and fields, please select the search table/field first, then enter the content, and click the search button to search',
      table: 'Search table',
      column: 'Search field',
      search: 'Search',
      noSearch: 'Please press "Enter" to initiate a search',
      noResult: 'No search results, please confirm the search keywords',
      originalName: 'Original table name',
      noMore: 'No more search results',
      more: 'Click to load more',
      placeholder: 'please enter keyword to search'
    }
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
    dataFlow: 'DataFlow',
    sync: 'Sync job',
    migration: 'Migration job',
    manageSever: 'Management server',
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
    approaching: 'remaining ',
    day: ' day',
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
    system: 'License expiration time',
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
      download: ' downloaded ',
      login: ' login ',
      logout: ' logout '
    },
    modular: {
      sync: 'Sync job',
      migration: 'Migration job',
      connection: ' connection ',
      dataflow: ' data flow job ',
      inspect: ' verity job ',
      ddlDeal: ' DDL',
      system: ' System '
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
        'Tapdata DFS Cloud have to install Agent at local server to ensure databases connection and transmission services normally',
      downloadInstall: 'Download and install',
      text:
        'First, a JAVA runtime environment is required in the installation environment. Then, download and start Agent by using the following command.',
      copy: 'Copy command',
      copied: 'copied',
      refresh: 'Refresh',
      downloadInstallInstructions: 'Download installation instructions',
      linuxInstructionsText1:
        '· First, ensure that the JAVA runtime environment is installed in the installation target environment.',
      linuxInstructionsText2:
        '· Execute the above command in install environment, Agent will download and start automatically ',
      linuxInstructionsText3:
        '· You can start and stop Agent by executing the command "tapdata start/stop backend".',
      waitingInstall: 'Waiting installation',
      agentInstallation: 'Agent has been installed',
      agentNum: 'Agents installed',
      downLoadAgent: 'Download Agent',
      windowsText:
        'First, a JAVA runtime environment is required in the installation environment. After download, you can install and start Agent by using the following command in the directory where the Agent Installation package stored.',
      windowsInstructionsText1:
        '· First, ensure that the JAVA runtime environment is installed in the installation target environment.',
      windowsInstructionsText2:
        '· Second, download the installation file and store it in a directory.',
      windowsInstructionsText3:
        '· Third, enter the directory, and execute the command to install and start Agent automatically. ',
      windowsInstructionsText4:
        '· Only one Agent can be installed under an account of Tapdata cloud.',
      windowsInstructionsText5:
        '· You can start and stop Agent by executing the command "tapdata start/stop backend".',
      dockerText:
        'First, a Docker runtime environment is required in the installation environment. Then, download and start Agent by using the following command.',
      dockerText1:
        '· First, ensure that the Docker runtime environment is installed in the installation target environment.',
      dockerText2:
        '· After executing the command, the Agent will be automatically installed and started.',

      important: 'Important: ',
      noAgent:
        'You have not installed Agent yet, and cannot execute the transmission jobs. Please ',
      clickDownLoad: ' click to download and install',
      dfsSuccessText: 'DFS Agent installed successfully,',
      dfsSuccessText1: 'Or click',
      dfsSuccessText2:
        'Create a data transfer task and experience the Tapdata DFS rapid data transfer function',
      dfsSuccessText3: 'DFS Agent installed successfully, job',
      dfsSuccessText4: 'is running',
      creatTask: 'Create new',
      clickView: 'Click view detail',
      ok: 'OK',
      agentRun: 'Agent installed '
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
      explanation:
        'You can set cron expression to schedule tasks at fixed time, date, or interval',
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
    result: 'Verification result',
    completeTime: 'Completion time',
    verifyTime: 'Verify Time',
    operation: 'Operation',
    rowVerify: 'Row verify',
    advanceVerify: 'Advanced verification',
    JSVerifyLogic: 'JS verify logic',
    addJS: 'Add JS',
    returnMsg: 'Returned message',
    returnedData: 'Returned data ',
    sourceTableData: 'Source table data',
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
    success:
      'Congratulations~~~~  The field contents of the source table and the target table are identical, no error record here',
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
    isEnabled: 'Is Enabled',
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
    tasksAmount:
      'The amount of index field of source table does not equal to target table in verify condition',
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
    checkStatusSuffix: ' , cannot modify configuration',
    backConfirmMessage:
      'This operation will lose the verification task currently being created (edited)',
    backConfirmTitle:
      'Would you give up creating (editing) verification tasks? '
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
    currerPawErrorTip:
      'The current password is incorrect, please enter the correct password',
    nameModifySuccess: 'Name modified successfully',
    passwordNotCN:
      'Only alphanumeric characters and hyphens are allowed in password',
    user_null: "That username's been taken",
    has_username: 'Username already exists',
    editFail: 'User name modification failed'
  },
  role: {
    allData: 'All role data',
    functionDataPermission: 'Function and data permissions',
    module: 'Module',
    choosePermissionTip:
      'Please select the functions and data permissions available for this role (checking all role data means you can browse or operate the data of all roles, unchecking means you can only browse or operate your own data )',
    funcPermission: 'Function permission settings',
    currentRole: 'Current role',
    pageVisible: 'Page permission settings',
    pageShowTip:
      'Checked means navigation and page are visible to the current character, unchecked will not display',
    choosePage: 'Select Page permission',
    bulkOperate: 'Select all',
    allCheck: 'Select all',
    chooseAllFunction: 'Select all functions',
    chooseAllRole: 'All role data',

    settingTitle: 'Set Up Permission',
    createRole: 'Create role',
    editroleTitle: 'Role Edit',
    roleName: 'Role Name',
    roleDesc: 'Role description',
    defaultRole: 'Default Role',
    rolePermission: 'role permission',
    alreadyExists: 'Duplicate role name',
    page: {
      Dashboard_menu: 'Dashboard (Home)',
      datasource_menu: 'Datasource',
      Data_SYNC_menu: 'Migration & Data Synchronization',
      Data_verify_menu: 'Data verify',
      data_catalog_menu: 'Data Catalog',
      data_quality_menu: 'Data quality',
      data_rules_menu: 'Data rules',
      time_to_live_menu: 'Data time to live',
      data_lineage_menu: 'Data lineage',
      API_management_menu: 'API management',
      API_data_explorer_menu: 'API data explorer',
      API_doc_test_menu: 'API doc & test',
      API_stats_menu: 'API stats',
      API_clients_menu: 'API clients',
      API_server_menu: 'API server',
      data_collect_menu: 'Data collection (old)',
      schedule_jobs_menu: 'Scheduled jobs',
      Cluster_management_menu: 'Cluster Management',
      agents_menu: 'Agents',
      user_management_menu: 'User management',
      role_management_menu: 'Role management',
      system_settings_menu: 'System Settings',
      dictionary_menu: 'Dictionary',
      Topology_menu: 'Topolog',
      servers_oversee_menu: 'Servers oversee'
    },
    moduleMeun: {
      Dashboard: 'Datasource',
      datasource: 'Datasource',
      Data_SYNC: 'Migration & Data Synchronization',
      SYNC_Function_management: 'Function management',
      Data_verify: 'Data verify',
      data_government: 'Data governance',
      data_catalog: 'Data catalog',
      data_quality: 'Data quality',
      data_rules: 'Data rules',
      time_to_live: 'Data time to live',
      data_lineage: 'API lineage',
      API_management: 'API management',
      API_data_explorer: 'API data explorer',
      API_doc_test: 'API doc & test',
      API_stats: 'API stats',
      API_clients: 'API clients',
      API_server: 'API server',
      data_collect: 'Data collection (old)',
      schedule_jobs: 'Scheduled jobs',
      Cluster_management: 'Cluster Management',
      agents: 'Agents',
      user_management: 'User Management',
      role_management: 'Role Management',
      system_settings: 'System Settings'
    },
    roleNavName: {
      Dashboard: 'Dashboard (Home)',
      system_notice: 'system notice',
      notice_settings: 'notice settings',
      account_operation_history: 'account operation history',
      datasource: 'View datasource',
      datasource_category_management: 'datasource category management',
      datasource_category_application: 'datasource category application',
      datasource_creation: 'datasource creation',
      datasource_delete: 'datasource deleting',
      datasource_edition: 'datasource editing',
      data_transmission: 'data transmission ',
      Data_SYNC: 'View dataflow',
      SYNC_category_management: 'category management',
      SYNC_category_application: 'category application',
      SYNC_job_creation: 'Job creation',
      SYNC_job_delete: 'Job deleting',
      SYNC_job_edition: 'Job editing',
      SYNC_job_operation: 'Job operation',
      SYNC_job_import: 'Job import ',
      SYNC_job_export: 'Job export ',
      SYNC_Function_management: 'View function management',
      Data_verify: 'View data verify',
      verify_job_creation: 'verify job creation',
      verify_job_edition: 'verify job editing & execution',
      verify_job_delete: 'verify job deleting',
      // verify_job_execution: 'verify job execution',
      data_government: 'data government',
      data_catalog: 'View data catalog ',
      data_catalog_category_management: 'data catalog category management',
      data_catalog_category_application: 'data catalog category application',
      data_catalog_edition: 'data catalog editing',
      new_model_creation: 'new model creation',
      data_quality: 'View data quality',
      data_quality_edition: 'data quality editing',
      data_rules: 'View data rules',
      data_rule_management: 'data rule management',
      time_to_live: 'View time to live',
      time_to_live_management: 'time to live management',
      data_lineage: 'View data lineage',
      data_publish: 'View data publish',
      API_management: 'View API management',
      API_category_application: 'API category application',
      API_category_management: 'API category management',
      API_creation: 'API creation',
      API_delete: 'API deleting',
      API_edition: 'API editing',
      API_publish: 'API publish',
      API_import: 'API import',
      API_export: 'API export',
      API_data_explorer: 'View API data explorer',
      API_data_explorer_export: 'API data explorer export',
      API_doc_test: 'View API doc & test',
      API_stats: 'View API stats',
      API_clients: 'View API clients',
      API_clients_amangement: 'API clients amangement',
      API_server: 'View API server',
      API_server_management: 'API server management',
      data_collect: 'View data collect(old)',
      system_management: 'View system management',
      schedule_jobs: 'View schedule jobs',
      schedule_jobs_management: 'schedule jobs management',
      Cluster_management: 'View Cluster management',
      Cluster_operation: 'Cluster operation',
      status_log: 'status log',
      agents: 'View agents',
      user_management: 'View user management',
      user_creation: 'user creation',
      user_edition: 'user editing',
      user_delete: 'user deleting',
      user_category_management: 'user category management',
      user_category_application: 'user category application',
      role_management: 'View role management',
      role_creation: 'role creation',
      role_edition: 'role editing',
      role_delete: 'role deleting',
      system_settings: 'View system settings',
      system_settings_modification: 'system settings modification',
      servers_oversee: 'View servers oversee',
      dictionary: 'View dictionary',
      Topology: 'View Topology',
      meta_data_deleting: 'Metadata delete',
      API_data_explorer_deleting: 'API data explorer deleting',
      API_data_explorer_tagging: 'API data explorer tagging',
      API_data_time_zone_editing: 'API data time zone editing',
      API_data_creation: 'API data creation',
      API_data_download: 'API data download'
    },
    roleManagement: 'Role Management',
    preciseMatching: 'precise matching',
    fuzzyMatching: 'Fuzzy matching',
    selectRoleName: 'Please select a role name',
    selectDesc: 'Please enter a role description',
    selectUser: 'Please select a user name',
    description: 'Role Description',
    associatUsers: 'Associate user',
    edit: 'Edit',
    founder: 'Founder',
    operate: 'Operation',
    create: 'New',
    settingPermissions: 'Set permission',
    delete: 'Delete',
    yes: 'Yes',
    no: 'No',
    delete_remind: 'Confirm to delete role',
    delete_success: 'Delete role successfully',
    delete_error: 'Failed to delete role',
    connected: 'Associated',
    role_null: 'The role name cannot be empty'
  },
  milestone: {
    INIT_DATAFLOW: '【Preparation】Analyze the DAG and create sub job(s)',
    CONNECT_TO_SOURCE: '【Preparation】Connecto to source',
    CONNECT_TO_TARGET: '【Preparation】Connect to target',
    INIT_CONNECTOR:
      '【Preparation】Scan source information and initialize the source collector',
    INIT_TRANSFORMER:
      '【Preparation】Scan target information and initialize the target handler',
    READ_SOURCE_DDL:
      '【Preparation】Read source DDL information(Database Migration)',
    DROP_TARGET_SCHEMA: '【Preparation】Drop target schema',
    CLEAR_TARGET_DATA: '【Preparation】Empty the target data',
    CREATE_TARGET_TABLE: '【Preparation】Automatically create target table',
    CREATE_TARGET_INDEX: '【Preparation】Automatically create target index',
    CREATE_TARGET_VIEW: '【Preparation】Automatically create target view',
    CREATE_TARGET_FUNCTION:
      '【Preparation】Automatically create target function',
    CREATE_TARGET_PROCEDURE:
      '【Preparation】Automatically create target procedure',
    READ_SNAPSHOT: '【Data transfer】Read the source snapshot',
    WRITE_SNAPSHOT: '【Data transfer】Write the snapshot into target',
    READ_CDC_EVENT: '【Data transfer】Source enters incremental read mode',
    WRITE_CDC_EVENT: '【Data transfer】Target enters incremental write mode',

    emptyText:
      'The job has not been started or has been reset, so there is no running milestone data.',
    status_paused: 'paused',
    status_waiting: 'Waiting',
    status_running: 'Running',
    status_error: 'Error',
    status_finish: 'Finish',
    btn_check_error: 'Check Error Info'
  },
  guide: {
    guide_title: 'New user guide',
    step_1: 'Agent download and installation',
    step_2: 'Set data source',
    step_3: 'Set goal',
    step_4: 'Select the task type and start the data transmission journey',
    step_1_title: 'Agent download and installation',
    step_1_desc:
      'Tapdata DFS Cloud Edition needs to install the agent locally to ensure the normal operation of the connection database and data transmission service. You can select the corresponding type below to download and install according to the type of server to be installed.',
    step_2_title: 'Create a data source connection',
    step_2_desc:
      'Data source connection refers to the data connection of the database that can be used as the source. The data source must be created before the migration or synchronization task can be created.',
    step_2_btn_label: 'Create a new source connection',
    step_3_title: 'Create target connection',
    step_3_desc:
      'The target connection refers to the data connection of the database that can be used as data transmission targets. The target connection must be created before the migration or synchronization task can be created.',
    step_3_btn_label: 'Create a new target connection',
    step_4_title: 'Select task type',
    step_4_desc:
      'Please select the type of task to be performed according to the prompts below, the system will open the corresponding task editing panel according to your choice, if you choose a wrong task, you can cancel the task and select again.',
    task_type_clone: 'Database migration',
    task_type_clone_tips:
      'Database migration function takes the library as the unit user to easily realize the structure migration, initial migration, or incremental migration between multiple homogeneous or heterogeneous databases (libraries, table mapping) within a task, suitable for data Database migration to the cloud, database migration between instances, database migration to the cloud, database disaster recovery and other scenarios. ',
    task_type_custom: 'Data synchronization',
    task_type_custom_tips:
      "Data synchronization focuses on table-level data processing and transmission, to meet the needs of users to achieve multi-table (data set), multi-table integration between multi-level data, data splitting, association mapping, field increase and decrease merge, content filtering, Real-time data synchronization is realized at the same time in the case of aggregate processing JS processing and other functions. Without affecting the user's business, it meets the user's needs for various business scenarios such as remote or local data disaster recovery, cross-instance data synchronization, query and report distribution, and real-time data warehouse management. ",
    agent_not_install:
      'The system detects that the Agent is not installed, please download and install and try again',
    btn_back: 'Previous step',
    btn_save: 'Save,',
    btn_next: 'Next',
    btn_to_dataflow: 'Start editing task',
    btn_to_dashboard: "Don't edit the task for now, go shopping first",

    not_source: 'Please choose a source connection',
    not_target: 'Please choose a target connection',

    agentServiceTitle: 'Agent service status is abnormal',
    abnormalText: 'abnormal reason',
    abnormal:
      'The environment where the Agnet process is located is disconnected',
    abnormal1: 'Agnet service process was killed',
    solutionText: 'Solution',
    windowsSolution: 'WINDOWS: Start the server and execute commands',
    windowsSolution1: 'WINDOWS: execute commands in the Agent environment',
    linuxSolution: 'LINUX: Start the server and execute commands',
    linuxSolution1: 'LINUX: execute commands in the Agent environment',
    restartProcess: 'To restart the process',
    clickText: 'The process has been restarted? Please click'
  },
  user: {
    des:
      'The user management page provides functions to create, edit, delete, and status settings for users',
    all: 'All',
    inactivated: 'Not activated',
    unverified: 'Unverified',
    userNameEmail: 'Please enter your username/email',
    changeTime: 'Modification time',
    creatUser: 'Create user',
    editUser: 'Edit User',
    userName: 'Username',
    email: 'Email',
    password: 'Password',
    role: 'Role',
    source: 'Source',
    status: 'Status',
    opera: 'Operation',
    activation: 'Activation',
    freeze: 'Freeze',
    delete: 'Delete',
    check: 'Check',
    edit: 'Edit',
    bulkActivation: 'Bulk activation',
    bulkFreeze: 'Bulk Freeze',
    bulkCheck: 'Batch check',
    create: 'Create',
    registration: 'Register',
    notVerified: 'Not verified',
    notActivated: 'Not activated',
    activated: 'Activated',
    rejected: 'Rejected',
    passwordNull: 'Please enter a password, the length is 5 ~ 32 characters',
    pass_hint: 'Password length cannot be less than 5 and greater than 32',
    activationCode: 'Access Code',
    delUserTitle: 'Whether to delete this user ?',
    delUser: 'Delete user',
    deluserLast: ' after this user will not be able to recover',
    checkUserTitle: 'Whether to verify this user ?',
    checkUser: 'Pass the verification user',
    checkUserLast: ' after the mailbox, this user can be activated',
    activationUserTitle: 'Do you want to activate this user ? ',
    activetionUser: 'Activation User',
    activetionUserLast:
      ' after that, this user will be able to use the TAPDATA system',
    freezeUserTitle: 'Do you want to freeze this user ? ',
    freezeUser: 'Freeze user',
    freezeUserLast:
      ' after this user will not be able to use the TAPDATA system',
    startTime: 'Start Time',
    endTime: 'End Time',
    emailNull: 'Email cannot be empty',
    email_must_valid: 'Please enter a valid email address',
    activetionSuccess: 'Activation successful',
    activetionError: 'Activation failed',
    freezeSuccess: 'Freeze successful',
    freezeError: 'Freeze failed',
    checkSuccess: 'Pass verification',
    checkError: 'Verification failed',
    alreadyExists: 'User name cannot be repeated'
  },
  process: {
    name: 'Name/worker type',
    worker_ip: 'Address',
    version: 'Version',
    online: 'Online',
    all: 'All',
    state: 'State',
    job_ids: 'Detail',
    running_thread: 'Running thread',
    total_thread: 'Number of threads',
    worker_type: 'Worker type',
    ping_time: 'Ping time',
    start_time: 'Start time',
    process_id: 'Process ID',
    processState: 'Working process state'
  },
  setting: {
    email_template: 'Email template',
    connect_and_test: 'Connection test',
    saveSuccess: 'Save successfully, take effect in one minute',
    nameserver: 'Server name',
    Log: 'Log',
    SMTP: 'SMTP',
    Job: 'Task',
    license: 'License Control',
    expiredate: 'Expiration time',
    import: 'Import',
    apply: 'Apply for license',
    license_expire_date: 'License expiration time',
    Worker: 'Process',
    Download: 'Download',
    Log_level: 'Log level',
    maxCpuUsage: 'Maximum CPU usage (value range 0.1 ~ 1)',
    maxHeapMemoryUsage: 'Maximum heap memory usage (value range 0.1 ~ 1)',
    switch_insert_mode_interval:
      'Interval time for switching to batch insert mode in incremental mode (unit: second)',
    Email_Communication_Protocol: 'Encryption Method',
    SMTP_Server_Port: 'SMTP service port',
    SMTP_Server_User: 'SMTP service account',
    SMTP_Server_password: 'SMTP service password',
    Email_Receivers: 'Email receiving email address',
    Email_Send_Address: 'Email sending email address',
    SMTP_Server_Host: 'SMTP Service Host',
    Send_Email_Title_Prefix: 'Send Email title prefix (optional)',
    Email_Template_Running: 'Task start notification',
    Email_Template_Paused: 'Task Paused Notification',
    Email_Template_Error: 'Task error notification',
    Email_Template_Draft: 'Notification of task being edited',
    Email_Template_CDC: 'Task Incremental Delay Notification',
    Email_Template_DDL: 'DDL error notification',
    Clean_Message_Time: 'Clear message time',
    Keep_Alive_Message: 'Keep online message',
    Sample_Rate: 'Sampling rate',
    ApiServer: 'API distribution settings',
    Default_Limit: 'The number of rows returned by the default query',
    Max_Limit: 'Maximum number of rows returned by the query',
    Send_batch_size: 'Number of packed data',
    hint_Send_batch_size: 'Number of packed data',
    Mongodb_target_create_date:
      'Whether to add the creation time to the target data set',
    Mongodb_target_create_date_docs:
      'Whether to add the creation time to the target data set',
    System: 'System Resource Monitoring',
    Collect_system_info_interval:
      'System resource monitoring collection frequency (seconds)',
    Interval_to_collect_system_info:
      'System resource information (CPU, memory, hard disk usage) monitoring collection frequency',
    Job_Sync_Mode: 'Task synchronization mode',
    Worker_Threshold: 'Process Threshold',
    Worker_Heartbeat_Expire: 'Process heartbeat period time (seconds)',
    License_Key: 'Certificate Key',
    Enter_jobs_log_level__error_warn_info_debug_trace:
      'Enter task log level: error/warn/info/debug/trace',
    Email_Receivers_Multiple_separated_by_semicolons:
      'Mail recipients, you can enter multiple, separated by commas',

    Keep_recent_n_hours_message_before_the_last_processed_message_s_time_:
      'Keep the last n hours news',
    Store_full_record_as_embedded_document_in_target_collection_for_update_operations:
      'Cache a copy of the current overall data and merge it into the target data set',
    Store_before_field_as_embedded_document_in_target_collection_before_update_operation:
      'Cache a copy of the overall data before modification and merge it into the target data set',
    Store_job_script_processor_log_to_cloud:
      'Whether to transfer task logs to the cloud',
    Validator_to_validate_data__s_sample_rate: 'Validation data sampling rate',
    Process_message_mode__consistency_fast:
      'Message processing mode consistency/fast',
    Worker_can_execute_the_nums_of_Jobs:
      'The process can perform multiple tasks',
    Worker_heartbeat_expire_time: 'Process heartbeat period time',
    Users: 'User',
    Show_Page: 'Show download page',
    User_Registery: 'User registration management',
    hint_Show_Page: 'Show download page',
    hint_User_Registery:
      'User registration type settings. The value is set to "disabled": registration is prohibited; the value is set to "self-signup" to enable user self-registration; the value is set to "manual-approval" to allow user registration, but requires administrator approval. ',
    DR_Rehearsal: 'Disaster preparedness drill',
    Mongod_path: 'Mongod path',
    SSH_User: 'SSH username',
    SSH_Port: 'SSH Port',
    hint_Mongod_path: 'Mongod path',
    hint_SSH_User: 'SSH username, used to connect to the host of Mongod',
    hint_SSH_Port: 'SSH port, used to connect to the host of Mongod',
    Enable_DR_Rehearsal: 'Allow disaster recovery exercises',
    hint_Enable_DR_Rehearsal:
      'Disaster recovery rehearsal switch, true means on, false means off',
    Download_Agent_Page: 'Agent Download Page',
    Background_Analytics: 'Background analysis',
    Data_quality_analysis_frequency: 'Data quality analysis interval (seconds)',
    Dashboard_data_analysis_frequency: 'Panel data analysis interval (seconds)',
    dashboard_Analysis_Interval: 'Panel data analysis interval (seconds)',
    quality_Analysis_Interval: 'Data quality analysis interval (seconds)',
    Log_filter_interval: 'Log filtering interval (seconds)',
    Filter_the_interval_between_duplicate_logs__seconds__:
      'The same log appears only once within a specified time (valid after 1 minute)',
    _DK36: 'File download',
    File_Down_Base_Url: 'Address',
    Set_the_average_number_of_events_per_second_to_allow:
      'Log settings allow the average number of events per second',
    Log_Filter_Rate: 'Log output frequency (line/sec)',
    Connections: 'Connection Settings',
    Mongodb_Load_Schema_Sample_Size: 'Mongodb load model sample records (rows)',
    hint_Mongodb_Load_Schema_Sample_Size:
      'When MongoDB connects to load the model, this configuration will be used for sampling and loading',
    Enable_API_Stats_Batch_Report: 'Enable API Statistics',
    Header: 'UDP header information',
    hint_Header: 'UDP header information',
    Size_Of_Trigger_API_Stats_Report: 'Maximum number of API request cache',
    hint_Size_Of_Trigger_API_Stats_Report:
      'When the number of API request records reaches the specified number, batches are sent to the management end',
    Time_Span_Of_Trigger_API_Stats_Report:
      'API request report frequency (seconds)',
    hint_Time_Span_Of_Trigger_API_Stats_Report:
      'The API request is cached and sent to the management end at the specified time',
    save: 'Save successfully, take effect in one minute',
    Logout_forward_to_this_url: 'Logout forwarding address',
    Check_devices: 'Important device detection',
    ops: 'Operation and maintenance display',
    server_oversee_url: 'O&M operation control URL',
    system: 'System global',
    licenseNoticeDays: 'license expiration reminder',
    flow_engine_version: 'Flow engine version',
    tapdata_agent_version: 'tapdata agent version',
    doc_base_url: 'Help document URL',
    help: 'Help document',
    Ip_addresses: 'Ipv4 addresses (separated by multiple commas)',
    hint_Ip_addresses:
      'The ipv4 address of the device to be detected, for example: 127.0.0.1, 192.168.0.1',
    PingTimeout: 'Detection timeout (milliseconds)',
    hint_PingTimeout:
      'When this setting is exceeded, it is considered that the device cannot be connected',
    Job_field_replacement: 'Illegal characters replaced with',
    A_replacement_for_the_invalid_field_name:
      'Some databases have special requirements for field names, tapdata will automatically replace illegal characters during synchronization. MongoDB[Contains ".", "$" as the beginning]',
    true__store_log_to_cloud__false__only_store_to_local_log_file_:
      'true: store log to cloud, false: only store to local log file.',
    When_one_document_may_be_updated_frequently_within_very_short_period_a_few_updates_within_one_second__for_instance___the_change_stream_event_received_by_downstream_processor_may_return_the__fullDocument__that_is_inconsistent_with_the_actual_version_when_the_update_was_applied_to_that_document__To_avoid_this_inconsistency__enable_this_option_to_store_the_full_document_along_with_the_update_operation__This_will_at_the_expense_of_additional_storage_and_degraded_performance_:
      'When a document may be frequently updated in a very short time (for example, several updates within a second), the change stream event received by the downstream processor may return "fullDocument" that is inconsistent with the actual version ( Inconsistent with the actual version) the file. To avoid this inconsistency, please enable this option to store the complete document with the update operation. This will be at the expense of increased storage space and reduced performance. ',
    the_before_field_contains_a_field_for_each_table_column_and_the_value_that_was_in_that_column_before_the_update_operation_:
      'the before field contains a field for each table column and the value that was in that column before the update operation.',
    Job_heart_timeout: 'Synchronization task heartbeat timeout (milliseconds)',
    job_cdc_share_mode: 'Incremental synchronization task sharing mode',
    job_cdc_share_mode_doc:
      'In the incremental synchronization phase, the sharing mode will be automatically adopted according to whether the log collection task is available. Affected database: Oracle',
    job_cdc_share_only: 'Incremental tasks are forced to use shared mode',
    job_cdc_share_only_doc:
      'When the incremental synchronization task sharing mode is turned on and a sharable log cannot be found, the task will be stopped',
    test_email_success:
      'The test email has been sent, please log in to the receiving mailbox to check it',
    test_email_countdown:
      'The operation is too frequent, please try again later',
    email_template_from: 'From',
    email_template_to: 'Recipient',
    email_template_subject: 'Subject',
    job_cdc_record: 'Automatically save incremental events',
    job_cdc_record_doc: 'Automatically save incremental events',
    job_cdc_record_ttl: 'Incremental event save time (days)',
    job_cdc_record_ttl_doc: 'Incremental event save time (days)',
    connection_schema_update_hour: 'Data source schema update time',
    connection_schema_update_interval:
      'Data source schema update interval (days)',
    creatDuplicateSource: 'Allow the creation of duplicate data sources',
    requestFailed: 'Request processing failed',
    Mongodb_will_use_this_sample_size_when_load_schema:
      'When loading the schema, Mongodb will use this sample size'
  },
  dictionary: {
    creatDictionary: 'Create a dictionary template',
    editDictionary: 'Edit dictionary template',
    classification: 'Classification',
    name: 'Name',
    data_type: 'Data Type',
    isdatatype: 'Dictionary template details',
    baseFloating: 'Floating point number',
    baseString: 'String',
    baseBoolean: 'Boolean value',
    template: 'Template',
    pleaseSelect: 'Please select',
    pleaseInput: 'Please input',
    mapping: 'Mapping value',
    initial: 'Initial value',
    initialNum: 'Initial value can only enter numbers',
    isMappedvalue: 'The mapped value cannot be empty',
    isInitialvalue: 'Initial value cannot be empty',
    titlenametips: 'The name cannot be repeated, please modify it again',
    nameCheck: 'Name cannot be empty',
    alreadyExists: 'Rule name already exists'
  }
}

export default en
