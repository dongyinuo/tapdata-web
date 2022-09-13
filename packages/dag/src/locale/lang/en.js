export default {
  packages_dag_button_cancel: 'Cancel',
  packages_dag_button_confirm: 'OK',
  packages_dag_dialog_tableValidateTip:
    'The new table name only supports English, numbers, underscores, dots, minus signs, and starts with English letters, and does not allow system to start',
  packages_dag_dialog_collectionValidateTip:
    'The name of the new dataset only supports English, numbers, underscores, dots, minus signs, and starts with English letters, and does not allow system to start',
  packages_dag_task_stetting_basic_setting: 'Settings',
  packages_dag_task_stetting_most_setting: 'Advanced settings',
  packages_dag_loading: 'Loading',
  packages_dag_dag_connection: 'connection',
  packages_dag_dag_table: 'table',
  packages_dag_dag_create_table_as_node: 'Create a new table to use as a node',
  packages_dag_dag_processor_node: 'Processing node',
  packages_dag_dialog_createTable: 'Create a new table',
  packages_dag_dialog_placeholderTable:
    'Only supports English, numbers, underscores, dots, minus signs, and starts with English letters, and does not allow system to start',
  packages_dag_dataFlow_flowEngineVersion: 'Engine version',
  packages_dag_dataFlow_flowEngineV1: 'Flow Engine V1',
  packages_dag_dataFlow_jetFlowEngineV2: 'Jet Flow Engine V2',
  packages_dag_dataFlow_setting_intellect: 'Intelligent de-rewrite',
  packages_dag_dataFlow_setting_compel: 'Force de-rewrite',
  packages_dag_dataFlow_SyncInfo_localTZType: 'Local Timezone CDC Time',
  packages_dag_dataFlow_SyncInfo_connTZType: 'DB Timezone CDC Time',
  packages_dag_dataFlow_SyncInfo_currentType: 'Current Time',
  packages_dag_dag_property_setting: 'Property Setting',
  packages_dag_dag_meta_data: 'Meta Data',
  packages_dag_meta_table_index: 'Index',
  packages_dag_meta_table_field_name: 'Name',
  packages_dag_meta_table_field_type: 'Type',
  packages_dag_meta_table_scale: 'Scale',
  packages_dag_meta_table_precision: 'Precision',
  packages_dag_meta_table_default: 'Default',
  packages_dag_meta_table_not_null: 'Not null',
  packages_dag_meta_table_true: 'True',
  packages_dag_meta_table_false: 'False',
  packages_dag_meta_table_comment: 'Comment',
  packages_dag_connection_name_search_placeholder: 'Please enter the connection name to search',
  packages_dag_task_form_error_name_duplicate: '',
  packages_dag_task_stetting_name: 'Task name',
  packages_dag_task_setting_sync_type: 'Sync type',
  packages_dag_task_setting_initial_sync_cdc: 'Full + Incremental synchronization',
  packages_dag_task_setting_initial_sync: 'Full synchronization',
  packages_dag_task_setting_cdc: 'Incremental synchronization',
  packages_dag_task_stetting_desc: 'Task description',
  packages_dag_task_setting_plan_start_date: 'Plan start date',
  packages_dag_task_setting_cron_expression: 'Please enter the scheduling expression',
  packages_dag_task_setting_cron_tip:
    'You can run periodic tasks at a fixed time, date, and interval through cron expressions. Syntax: second * minute * hour * day * month * week ? year * ; Example: 0 */1 * * * ? * // Run every minute 0 0 2 * * ? * // Run at 2 every day',
  packages_dag_task_setting_sync_point: 'Incremental collection start time',
  packages_dag_task_setting_syncPoint_tip: 'The task will collect incremental logs from this point in time',
  packages_dag_task_setting_automatic_index: 'Automatically create an index',
  packages_dag_task_setting_stop_on_error: 'Stop on error',
  packages_dag_connection_form_shared_mining: 'Shared mining',
  packages_dag_task_list_verify: 'Data verification',
  packages_dag_task_setting_is_schedule: 'Scheduled tasks regularly',
  packages_dag_dag_data_setting_expression: 'Expression:',
  packages_dag_dag_data_setting_explanation:
    'You can set a fixed time, date, and interval to run periodic tasks through cron expressions',
  packages_dag_dag_data_setting_grammar: 'Grammar:',
  packages_dag_dag_data_setting_runMinute: 'Run every minute',
  packages_dag_dag_data_setting_runDay: "Run at 2 o'clock every day",
  packages_dag_connection_form_access_node: 'agent settings',
  packages_dag_connection_form_automatic: 'Platform automatic allocation',
  packages_dag_connection_form_manual: 'User specified manually',
  packages_dag_task_setting_automatic_ddl: 'Automatic DDL',
  packages_dag_task_setting_distinct_write_type: 'De-duplication write mechanism',
  packages_dag_task_setting_transformer_concurrency: 'Number of target write threads',
  packages_dag_task_setting_cdc_concurrency: 'Incremental synchronization concurrent write',
  packages_dag_task_setting_lag_time: 'Incremental lag judgment time setting',
  packages_dag_task_setting_cdc_engine_filter: 'Enable engine filtering',
  packages_dag_task_setting_share_cdc_mode: 'Shared incremental read mode',
  packages_dag_task_setting_processorThreadNum: 'Processor thread num',
  packages_dag_task_setting_increOperationMode: 'Incremental operation mode',
  packages_dag_button_undo: 'Undo',
  packages_dag_button_redo: 'Redo',
  packages_dag_button_delete: 'Delete',
  packages_dag_button_center_content: 'Center content',
  packages_dag_button_auto_layout: 'Auto layout',
  packages_dag_button_move_paper: 'Move canvas[Press space]',
  packages_dag_button_zoom_out: 'Zoom out',
  packages_dag_button_zoom_in: 'Zoom in',
  packages_dag_button_setting: 'Setting',
  packages_dag_task_list_button_monitor: 'Monitor',
  packages_dag_button_save: 'Save',
  packages_dag_button_edit: 'Edit',
  packages_dag_task_list_force_stop: 'Forced stop',
  packages_dag_task_list_stop: 'Stop',
  packages_dag_dataFlow_button_reset: 'Reset',
  packages_dag_task_list_run: 'Start',
  packages_dag_dataFlow_initial_sync: 'INITIAL SYNC',
  packages_dag_dataFlow_cdc: ' CDC ',
  packages_dag_editor_cell_validate_empty_name: 'Name is required.',
  packages_dag_editor_cell_validate_none_data_node: 'At least 2 data node in graph',
  packages_dag_message_save_ok: 'Save successfully',
  packages_dag_dag_save_fail: 'Save failed, please check node',
  packages_dag_message_operation_error: 'Operation failed',
  packages_dag_message_operation_succuess: 'The operation succeeded',
  packages_dag_message_resetOk: 'Reset success',
  packages_dag_message_resetFailed: 'Reset Failed',
  packages_dag_dataFlow_multiError_notFound: 'This job does not existed.',
  packages_dag_dataFlow_multiError_statusError: 'Job status does not allow to do this operation.',
  packages_dag_dataFlow_multiError_otherError: 'Operation failed, please try it again.',
  packages_dag_editor_cell_link_writeMode_append: 'Append into Target',
  packages_dag_editor_cell_link_writeMode_upsert: 'Match and Merge or Insert New',
  packages_dag_editor_cell_link_writeMode_update: 'Match and Merge',
  packages_dag_editor_cell_link_writeMode_merge_embed: 'Match then Embed as Array in target',
  packages_dag_connection_status_all: 'All',
  packages_dag_connection_status_testing: 'testing',
  packages_dag_connection_status_invalid: 'invalid',
  packages_dag_connection_status_ready: 'ready',
  packages_dag_dataFlow_delete_confirm_Message: 'After deleting task XXX, this task cannot be restored',
  packages_dag_dataFlow_bulk_delete_confirm_Message: 'After deleting tasks in batch, tasks cannot be restored',
  packages_dag_dataFlow_stop_confirm_message:
    'After the task xxx is suspended, when the table in the task that has not been fully synchronized is started again, the full synchronization will be performed again',
  packages_dag_dataFlow_bulk_stop_confirm_message:
    'After the task is paused in batch, when the table in the task that has not been fully synchronized is started again, the full synchronization will be performed again',
  packages_dag_dataFlow_force_stop_confirm_message:
    'Forcibly stop the task xxx will immediately interrupt the data transmission, force the task to stop quickly, and reset the task',
  packages_dag_dataFlow_bulk_force_stop_confirm_message:
    'The batch forced stop task will immediately interrupt the data transmission to force the task to stop quickly and reset the task',
  packages_dag_dataFlow_initialize_confirm_message:
    'Resetting task xxx will clear the task synchronization progress and the task will be executed again',
  packages_dag_dataFlow_bulk_initialize_confirm_message:
    'Resetting the task in batches will clear the task synchronization progress, and the task will be executed again',
  packages_dag_task_preview_status_error: 'Error',
  packages_dag_task_preview_status_edit: 'Edit',
  packages_dag_task_preview_status_wait_run: 'Scheduling',
  packages_dag_task_preview_status_running: 'Running',
  packages_dag_task_preview_status_stop: 'Stopped',
  packages_dag_task_preview_status_stopping: 'Stopping',
  packages_dag_task_preview_status_preparing: 'Preparing',
  packages_dag_task_preview_status_scheduling: 'Scheduling',
  packages_dag_task_preview_status_schedule_failed: 'Scheduling failed',
  packages_dag_task_preview_status_ready: 'Ready',
  packages_dag_dag_data_setting_second: 'second',
  packages_dag_dag_data_setting_minute: 'minute',
  packages_dag_dag_data_setting_hour: 'hour',
  packages_dag_dag_data_setting_day: 'day',
  packages_dag_dag_data_setting_month: 'month',
  packages_dag_dag_data_setting_week: 'week',
  packages_dag_dag_data_setting_year: 'year',
  packages_dag_mouse_selection: 'Box choose(Press Shift)',
  packages_dag_table_name_search_placeholder: 'Please enter the table name to search',
  packages_dag_dag_dialog_field_mapping_no_data: 'No data yet',
  packages_dag_customer_logs_no_more_data: 'No more data',
  packages_dag_customer_logs_no_search_data: 'No search results',
  packages_dag_src_command_qingshixianun: 'Please implement the undo method! ',
  packages_dag_src_command_qingshixianex: 'Please implement the exec method! ',
  packages_dag_components_datapane_shanghaishiputuo: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai',
  packages_dag_components_datapane_wangxiaohu: 'Wang Xiaohu',
  packages_dag_components_datapane_dizhi: 'Address',
  packages_dag_components_datapane_xingming: 'Name',
  packages_dag_components_datapane_riqi: 'date',
  packages_dag_components_dfnode_gaijiedianth: 'The node "{val1}" has reached the maximum connection limit',
  packages_dag_components_dfnode_tuodongshijianduan:
    'Drag time period, or small distance change, trigger node activation',
  packages_dag_components_dfnode_qingjianchajiedian: 'Please check node configuration',
  packages_dag_components_dfnode_shanchujiedian: 'Delete node',
  packages_dag_components_dfnode_tianjiajiedian: 'Add node',
  packages_dag_components_formpanel_zengliangzhihoupan: 'Incremental lag judgment time setting (seconds)',
  packages_dag_components_formpanel_shiwuzuidashi: 'Maximum transaction duration (hours)',
  packages_dag_components_formpanel_gongxiangwajueri: 'Shared mining log filtering',
  packages_dag_components_formpanel_qingxuanze: 'Please select',
  packages_dag_components_formpanel_meiciduqushu: 'Number of each read',
  packages_dag_components_formpanel_zengliangtongbujian: 'Incremental sync interval',
  packages_dag_components_formpanel_lunxunduqu: 'Polling read',
  packages_dag_components_formpanel_liushiduqu: 'Streaming read',
  packages_dag_components_formpanel_dangrenwukaiqi: 'When the task starts',
  packages_dag_components_formpanel_dangrenwubeibian: 'When tasks are edited',
  packages_dag_components_formpanel_dangrenwuchucuo: 'When the task fails',
  packages_dag_components_formpanel_dangrenwutingzhi: 'When the task stops',
  packages_dag_components_formpanel_fasongyoujian: 'Send Mail',
  packages_dag_components_formpanel_zengliangpicidu: 'Number of incremental batches read',
  packages_dag_components_formpanel_zhutiao: 'One by one',
  packages_dag_components_formpanel_piliang: 'Batch',
  packages_dag_components_formpanel_zengliangshujuchu: 'Incremental data processing mechanism',
  packages_dag_components_formpanel_zhichiwuzhujian: 'Support no primary key synchronization',
  packages_dag_components_formpanel_zidongchuliD: 'Automatically handle DDL',
  packages_dag_components_formpanel_quanliangzengliang: 'full + incremental',
  packages_dag_components_formpanel_gengxinout: '👷 update $outputs',
  packages_dag_components_formpanel_gengxininp: '👷 Update $inputs',
  packages_dag_components_formpanel_shangyigejihuo: 'Verification result of the last activated node',
  packages_dag_components_formpanel_jiantingsta: 'Listen: stateIsReadonly',
  packages_dag_components_leftsidebar_xuanzeshujuyuan: 'Select data source type',
  packages_dag_components_metapane_geziduan: ' fields',
  packages_dag_components_metapane_gongyou: 'Total',
  packages_dag_migration_configpanel_moxing: 'model',
  packages_dag_migration_configpanel_peizhi: 'Configuration',
  packages_dag_migration_consolepanel_quanburizhi: 'All logs',
  packages_dag_migration_settingpanel_dangrenwufuhe:
    'When the task meets the following conditions, the verification will not be performed even if the switch task is turned on\n 1. Added an intermediate processing node\n 2. The source connection does not support verification\n 3. The target connection does not support verification',
  packages_dag_monitor_bottompanel_yunxingjilu: 'Running record',
  packages_dag_monitor_bottompanel_rizhi: 'Log',
  packages_dag_components_eventchart_qita: 'Other',
  packages_dag_components_eventchart_gengxin: 'Update',
  packages_dag_components_eventchart_charu: 'insert',
  packages_dag_components_eventchart_zongshuchu: 'Total output',
  packages_dag_components_eventchart_zongshuru: 'Total input',
  packages_dag_components_eventchart_suoxuanzhouqilei: 'Selected cycle accumulation',
  packages_dag_components_eventchart_renwuyunxinglei: 'Task running cumulative',
  packages_dag_components_initiallist_quanliangtongbuzhuang: 'Full synchronization status',
  packages_dag_components_initiallist_shujutongbu: 'Data synchronization',
  packages_dag_components_initiallist_mubiaobiaoming: 'target table name',
  packages_dag_components_initiallist_yuanbiaoming: 'Source table name',
  packages_dag_components_initiallist_tongbuzhong: 'Synchronizing',
  packages_dag_components_initiallist_weikaishi: 'Not started',
  packages_dag_components_initiallist_dianjishuaxin: 'Click to refresh',
  packages_dag_components_initiallist_quanliangxinxixiang: 'Full information details',
  packages_dag_components_linechart_biaoti: 'Title',
  packages_dag_components_log_xiazaishibai: 'Download failed',
  packages_dag_components_log_zidingyishijian: 'custom time',
  packages_dag_components_log_quanbu: 'all',
  packages_dag_components_log_quanburizhi: 'All logs',
  packages_dag_components_log_zuijintian: 'Last 3 days',
  packages_dag_components_log_zuixintian: 'Latest 1 day',
  packages_dag_components_log_zuijingexiaoshi: 'Last 6 hours',
  packages_dag_components_log_kaiqishichangmiao: 'Open duration (seconds)',
  packages_dag_components_log_debug: 'DEBUG log parameter',
  packages_dag_components_log_rizhijibie: 'Log level:',
  packages_dag_components_log_rizhidengjishe: 'Log level settings',
  packages_dag_components_log_xiazai: 'download',
  packages_dag_components_log_qingshururizhi: 'Please enter the log content...',
  packages_dag_components_nodedetaildialog_shuchu: 'output',
  packages_dag_components_nodedetaildialog_shuru: 'input',
  packages_dag_components_nodedetaildialog_zengliangyanchi: 'incremental delay',
  packages_dag_components_nodedetaildialog_chulihaoshi: 'processing time',
  packages_dag_components_nodedetaildialog_xingnengzhibiao: 'Performance metrics',
  packages_dag_components_nodedetaildialog_zengliangshijiandian: 'Incremental time point',
  packages_dag_components_nodedetaildialog_xieyilianjiehao: 'The protocol connection takes time',
  packages_dag_components_nodedetaildialog_tcPlianjie: 'TCP connection time consuming',
  packages_dag_components_nodedetaildialog_lianjiezhuangtai: 'Connection status',
  packages_dag_components_nodedetaildialog_tongbuzhuangtai: 'Sync status',
  packages_dag_components_nodedetaildialog_shijiantongji: 'Event Statistics',
  packages_dag_components_nodedetaildialog_jiedian: 'node',
  packages_dag_components_nodedetaildialog_jiedianxiangqing: 'Node details',
  packages_dag_components_record_caozuo: 'Operation',
  packages_dag_components_record_shuchushijianzong: 'Total output events',
  packages_dag_components_record_shurushijianzong: 'Total input events',
  packages_dag_components_record_yunxingjieguo: 'Running result',
  packages_dag_components_record_caozuoren: 'Operator',
  packages_dag_components_record_yunxingjieshushi: 'Running end time',
  packages_dag_components_record_yunxingkaishishi: 'Running start time',
  packages_dag_components_record_xiangqing: 'details',
  packages_dag_components_timeselect_renwuquanzhouqi: 'Task full cycle',
  packages_dag_components_timeselect_zuijintian: 'Last 1 day',
  packages_dag_components_timeselect_zuixinxiaoshi: 'Latest 1 hour',
  packages_dag_components_timeselect_zuijinfenzhong: 'last 5 minutes',
  packages_dag_components_timeselect_zhouqi: 'Cycle',
  packages_dag_components_timeselect_jieshuriqi: 'End date',
  packages_dag_components_timeselect_kaishiriqi: 'Start date',
  packages_dag_components_timeselect_zhi: 'to',
  packages_dag_monitor_leftsider_chulihaoshim: 'Processing time',
  packages_dag_monitor_leftsider_buzhichijiaoyan: 'Tables that do not support verification:',
  packages_dag_monitor_leftsider_jiaoyanbuyizhi: 'Check inconsistent tables:',
  packages_dag_monitor_leftsider_chayizongxingshu: 'Difference total lines:',
  packages_dag_monitor_leftsider_liebiao: 'list',
  packages_dag_monitor_leftsider_renwujiaoyan: 'Task verification',
  packages_dag_monitor_leftsider_biaotongbuzongjin: 'Total progress of table synchronization',
  packages_dag_monitor_leftsider_yujiquanliangwan: 'It is expected to be completed in full:',
  packages_dag_monitor_leftsider_quanliangwanchengshi: 'Full completion time:',
  packages_dag_monitor_leftsider_quanliangxinxi: 'full information',
  packages_dag_monitor_node_zengliangzhuangtai: 'incremental status',
  packages_dag_monitor_node_quanliangzhuangtai: 'full status',
  packages_dag_monitor_node_snaps: '{val1}/{val2} | It is estimated that it will take {val3}',
  packages_dag_task_preview_status_complete: 'Completed',
  packages_dag_monitor_node_jinhangzhong: 'in progress',
  packages_dag_monitor_node_daijinhang: 'to be carried out',
  packages_dag_monitor_node_leijishuchushi: 'Cumulative output events',
  packages_dag_monitor_node_leijishurushi: 'Accumulated input events',
  packages_dag_monitor_node_haoshi: 'time-consuming',
  packages_dag_monitor_topheader_dakaijiaoyan: 'Open verification',
  packages_dag_monitor_topheader_mubiaolianjiebu: '3. The target connection does not support verification',
  packages_dag_monitor_topheader_yuanlianjiebuzhi: '2. The source connection does not support verification',
  packages_dag_monitor_topheader_tianjialezhongjian: '1. Added intermediate processing node',
  packages_dag_monitor_topheader_dangqianrenwuzan: 'The current task does not support verification, possible reasons:',
  packages_dag_monitor_topheader_qidongshijian: 'Startup time:',
  packages_dag_monitor_topheader_qingshururenwu: 'Please enter the task name',
  packages_dag_monitor_verifypanel_zongji: 'Total',
  packages_dag_monitor_verifypanel_buzhichijiaoyan: 'Do not support verification',
  packages_dag_monitor_verifypanel_jiaoyanbuyizhi: 'The verification is inconsistent',
  packages_dag_monitor_verifypanel_jiaoyanyizhi: 'Verify is consistent',
  packages_dag_monitor_verifypanel_yichangshujuhang: 'Exception data (line):',
  packages_dag_monitor_verifypanel_biaoming: 'Table name:',
  packages_dag_monitor_verifypanel_lianjieming: 'Connection name:',
  packages_dag_monitor_verifypanel_qingshurusousuo: 'Please enter the search content',
  packages_dag_monitor_verifypanel_jiancedaoxinshu: 'New data detected, please click to refresh',
  packages_dag_monitor_verifypanel_wentibiaoqingdan: 'Problem table list',
  packages_dag_components_paperempty_shiyinghuabu: 'Adapt to canvas',
  packages_dag_components_paperempty_huabushijichi: 'The actual size of the canvas',
  packages_dag_components_paperempty_zhantie: 'Paste',
  packages_dag_components_paperempty_fuzhi: 'Copy',
  packages_dag_components_settingpanel_renwudetongbu:
    'The task is executed when the synchronization type is incremental or full + incremental',
  packages_dag_components_settingpanel_gongxiangwajueshe: 'Shared mining settings',
  packages_dag_components_settingpanel_shujuyuan: 'Data source:',
  packages_dag_components_settingpanel_chuliqixiancheng: 'Number of processor threads:',
  packages_dag_components_settingpanel_miao: 'seconds',
  packages_dag_components_settingpanel_zengliangshezhi: 'Incremental settings',
  packages_dag_components_settingpanel_renwuzaijinhang: 'The strategy that tasks execute when reading and writing',
  packages_dag_components_settingpanel_duxieshezhi: 'Read and write settings',
  packages_dag_components_settingpanel_renwuzaiqidong: 'Environment settings for tasks at startup and runtime',
  packages_dag_components_settingpanel_yunxingshezhi: 'Running settings',
  packages_dag_components_settingpanel_jibenshezhi: 'Basic settings',
  packages_dag_src_editor_chucuole: 'Something went wrong',
  packages_dag_src_editor_renwubaocunchu: 'Error saving task',
  packages_dag_src_editor_zengshanziduan: 'Add and delete fields',
  packages_dag_src_editor_ziduangaiming: 'Field rename',
  packages_dag_src_editor_leixingxiugai: 'Type modification',
  packages_dag_src_editor_ziduanjisuan: 'Field calculation',
  packages_dag_src_editor_zhuconghebing: 'Master-slave merge',
  packages_dag_src_editor_juhe: 'Aggregate',
  packages_dag_src_migrationeditor_jSchuli: 'JS processing',
  packages_dag_src_migrationeditor_ziduanbianji: 'Field Edit',
  packages_dag_src_migrationeditor_biaobianji: 'Table editor',
  packages_dag_src_migrationeditor_zhuangtaijanting: 'Status monitoring',
  packages_dag_src_migrationmonitor_gaijiedianbuzhi: 'This node does not support',
  packages_dag_src_migrationmonitor_cunzaibuzhichi: 'There is a node that does not support {val1}',
  packages_dag_src_migrationmonitor_noden: "'{val1}' does not have any connections",
  packages_dag_src_migrationmonitorviewer_gaifuzhirenwu: 'This replication task has no subtasks',
  packages_dag_src_migrationmonitorviewer_gaijiedianbuzhi: 'This node does not support',
  packages_dag_src_migrationmonitorviewer_cunzaibuzhichi: 'There is a node that does not support {val1}',
  packages_dag_src_migrationmonitorviewer_noden: "'{val1}' does not have any connections",
  packages_dag_mixins_editor_renwujiazaichu: 'Error loading task',
  packages_dag_mixins_editor_renwubucunzai: 'Task does not exist',
  packages_dag_mixins_editor_renwuzhonghanyou:
    'The task contains JS nodes, custom nodes, or incremental custom SQL for node settings. DDL is not supported at the moment, please close it manually',
  packages_dag_mixins_editor_gaijiedianbuzhi: 'This node does not support running on {val1} ({val2})',
  packages_dag_mixins_editor_buzhichiduotiao: 'Multiple links are not supported, please re-edit the task link',
  packages_dag_mixins_editor_renwulianlubu: 'The task link is incomplete',
  packages_dag_mixins_editor_renwushezhiyi: 'The task setting is abnormal',
  packages_dag_mixins_editor_suoshuage: 'Agent node conflict',
  packages_dag_mixins_editor_noden: "'{val1}' configuration is abnormal",
  packages_dag_mixins_editor_jiedianjiaoyancuo: 'Node check error',
  packages_dag_mixins_editor_shanchulianjie: 'Delete connection',
  packages_dag_mixins_editor_initV: 'Monitor enabled by initView-dataflowEdit',
  packages_dag_mixins_editor_xinrenwu: 'New task@',
  packages_dag_mixins_editor_source: "'{val1}' does not support the node '{val2}' as a target",
  packages_dag_mixins_editor_gaijiedianta: 'The node "{val1}" is only supported as a source',
  packages_dag_mixins_editor_gaijiedianyijing: 'The node has reached the maximum connection limit',
  packages_dag_mixins_editor_gaijiedianso: 'The node "{val1}" is only supported as a target',
  packages_dag_mixins_formscope_tuiyanshibai: 'Deduction failed',
  packages_dag_mixins_formscope_liuyipar: 'Note that the parent cannot be found',
  packages_dag_nodes_aggregate_fanhuishili: 'return example',
  packages_dag_nodes_aggregate_fenzuziduan: 'Grouping field',
  packages_dag_nodes_aggregate_zuoyongmubiao: 'Action target',
  packages_dag_nodes_aggregate_juhehanshu: 'Aggregate function',
  packages_dag_nodes_database_zengliangduoxiancheng: 'Incremental multi-threaded write',
  packages_dag_nodes_database_quanliangduoxiancheng: 'Full multi-threaded write',
  packages_dag_nodes_database_bucunzaishidiu: 'Discard if not exists',
  packages_dag_nodes_database_shanchushijian: 'Delete event',
  packages_dag_nodes_database_bucunzaishicha: 'Insert if not exists',
  packages_dag_nodes_database_gengxinshijian: 'Update event',
  packages_dag_nodes_database_mubiaocunzaishi: 'Update when target exists',
  packages_dag_nodes_database_charushijian: 'Insert event',
  packages_dag_nodes_database_shujuxieruce: 'Data write strategy',
  packages_dag_nodes_database_baochimubiaoduan: 'Keep the original table structure of the target and clear the data',
  packages_dag_nodes_database_qingchumubiaoduan: 'Clear the original table structure and data on the target side',
  packages_dag_nodes_database_chongfuchulice: 'Duplicate processing strategy',
  packages_dag_nodes_database_tuiyanjieguo: 'Deduction result',
  packages_dag_nodes_database_dangqianjiedianzhi: 'The current node supports processing DDL events',
  packages_dag_nodes_database_ddLshijian: 'DDL event collection',
  packages_dag_nodes_database_kaiqihourenwu: 'After opening, the task will automatically process new and delete tables',
  packages_dag_nodes_database_dongtaixinzengbiao: 'Dynamic new table',
  packages_dag_nodes_database_quanliangmeipici: 'The number of full reads per batch',
  packages_dag_nodes_database_piliangduqutiao: 'Batch read number',
  packages_dag_nodes_database_zidingyi: 'custom',
  packages_dag_nodes_database_xuanzebiao: 'Select table',
  packages_dag_nodes_database_suoshuage: 'belonging agent',
  packages_dag_nodes_database_lianjiemingcheng: 'Connection name',
  packages_dag_nodes_database_jiedianmingcheng: 'Node name',
  packages_dag_extends_nodetype_queshaobiyaode: 'Missing required type attribute! ',
  packages_dag_nodes_javascript_moxingshengming: 'Model declaration',
  packages_dag_nodes_javascript_jiaoben: 'script',
  packages_dag_nodes_join_youce: 'right',
  packages_dag_nodes_join_zuoce: 'left',
  packages_dag_nodes_join_lianjieziduanshe: 'Connection field settings',
  packages_dag_nodes_join_zuolianjie: 'Left join',
  packages_dag_nodes_join_lianjieleixing: 'join type',
  packages_dag_nodes_jointcache_qingxuanzehuochuang: 'Please select or create a write path field',
  packages_dag_nodes_jointcache_xierulujing: 'Write path',
  packages_dag_nodes_jointcache_yuanbiaoguanlianjian: 'Source table associated key',
  packages_dag_nodes_jointcache_huancunbiaozhujian: 'Cache table primary key',
  packages_dag_nodes_jointcache_guanlianshezhi: 'Association settings',
  packages_dag_nodes_jointcache_chuangjianpipeishu: 'Create matching data',
  packages_dag_nodes_jointcache_baoliupipeishu: 'Keep matching data',
  packages_dag_nodes_jointcache_duiyinghuancunjie: 'Corresponding cache node',
  packages_dag_nodes_mergetable_mubiaobiaoziduan: 'target table field',
  packages_dag_nodes_mergetable_dangqianbiaoziduan: 'Current table field',
  packages_dag_nodes_mergetable_guanliantiaojian: 'Association conditions',
  packages_dag_nodes_mergetable_neiqianshuzupi: 'Inline array matching conditions',
  packages_dag_nodes_mergetable_guanlianhouxieru: 'Write path after association',
  packages_dag_nodes_mergetable_gengxinjinneiqian: 'Update into embedded array',
  packages_dag_nodes_mergetable_shujuxierumo: 'Data write mode',
  packages_dag_nodes_rowfilter_tiaojianbiaodashi: 'Conditional expression',
  packages_dag_nodes_rowfilter_diuqipipeishu: 'Discard matching data',
  packages_dag_nodes_rowfilter_zhixingdongzuo: 'Execute action',
  packages_dag_nodes_table_gengxintiaojianzi: 'Update condition field',
  packages_dag_nodes_table_gengxinyicunzai: 'Update existing or insert new data',
  packages_dag_nodes_table_yunxingqianshanchu: 'Delete existing data before running',
  packages_dag_nodes_table_baochiyicunzai: 'Keep existing data',
  packages_dag_nodes_table_yiyoushujuchu: 'Existing data processing',
  packages_dag_nodes_table_ddLshijian: 'DDL event collection',
  packages_dag_nodes_table_meiciduqushu: 'Number of reads per time (rows)',
  packages_dag_nodes_table_zengliangtongbujian: 'Incremental synchronization interval (ms)',
  packages_dag_nodes_table_yifuzhi: 'Copied',
  packages_dag_nodes_table_fuzhibiaoming: 'Copy table name',
  packages_dag_nodes_table_qingxuanzebiao: 'Please select a table',
  packages_dag_nodes_table_fuzhishujuku: 'Copy database name',
  packages_dag_nodes_table_shujuku: 'database',
  packages_dag_nodes_targetdatabase_mubiaocunzaishi: 'Update when target exists',
  packages_dag_nodes_targetdatabase_baochimubiaoduan:
    'Keep the original table structure of the target and clear the data',
  packages_dag_nodes_targetdatabase_jiedianmiaoshu: 'node description',
  packages_dag_src_store_weizhaodaojiedian: 'node not found',
  packages_dag_src_store_qingkongjiedianshu: 'Clear the monitoring of node input and output',
  packages_dag_node_none_input: '「 {val1} 」At least {val2} source nodes are required',
  packages_dag_node_none_output: '「 {val1} 」At least {val2} target nodes are required',
  packages_dag_node_none_connection: '「 {val1} 」 no connection',
  packages_dag_external_storage: 'External storage',
  packages_dag_components_alert_dangqianrenwuyi:
    'The current task has been stopped with an error, please pay attention!',
  packages_dag_components_alert_gaojingfashengci: 'Number of alarm occurrences',
  packages_dag_components_alert_gaojingzuijinfa: 'The last time the alarm occurred',
  packages_dag_components_alert_gaojingshoucifa: 'The time when the alarm first occurred',
  packages_dag_components_alert_gaojingmiaoshu: 'Alarm description',
  packages_dag_components_alert_gaojingzhuangtai: 'Alarm status',
  packages_dag_components_alert_gaojingjibie: 'Alarm level',
  packages_dag_components_alert_huifu: 'Restore',
  packages_dag_components_alert_yiguanbi: 'closed',
  packages_dag_components_alert_guanbi: 'off',
  packages_dag_components_frequency_shuaxinpinlu: 'Refresh frequency',
  packages_dag_components_nodedetaildialog_xieruhaoshi: 'Writing time',
  packages_dag_components_nodedetaildialog_zengliangduquyan: 'Incremental read latency',
  packages_dag_components_nodedetaildialog_pingjunduquhao: 'Average read time',
  packages_dag_components_nodedetaildialog_chulixieruhao: 'Processing/writing time',
  packages_dag_components_nodedetaildialog_duquchulihao: 'Reading/processing time',
  packages_dag_components_nodedetaildialog_chulihaoshidang:
    'Processing time: the average time for the current node to process events',
  packages_dag_components_nodedetaildialog_xieruhaoshidang:
    'Writing time: the time it takes for the current target node to write data to the target database',
  packages_dag_components_nodedetaildialog_chulihaoshiyuan:
    'Processing time: the time it takes for the source node to complete the processing after reading the event from the source database',
  packages_dag_components_nodedetaildialog_dangqianbiaotongbu: 'Current table synchronization progress',
  packages_dag_components_nodedetaildialog_quanliangtongbujin: 'Full synchronization progress',
  packages_dag_components_nodedetaildialog_quanliangkaishishi: 'Full start time:',
  packages_dag_components_nodedetaildialog_shuaxin: 'Refresh',
  packages_dag_components_timeselect_renwuzuijinyi: 'The task has been started since the last time',
  packages_dag_monitor_leftsider_shanchu: 'Delete:',
  packages_dag_monitor_leftsider_gengxin: 'Update:',
  packages_dag_monitor_leftsider_charu: 'Insert:',
  packages_dag_monitor_leftsider_renwushijiantong: 'Task event statistics (strips)',
  packages_dag_monitor_leftsider_chayixiangqing: 'Difference details',
  packages_dag_monitor_leftsider_zuidazengliangyan: 'Maximum incremental delay:',
  packages_dag_monitor_leftsider_tongbuxinxi: 'Sync information',
  packages_dag_node_only_as_source: 'This node({val1}) is only supported as a source',
  packages_dag_node_only_as_target: 'This node({val1}) is only supported as a target',
  packages_dag_components_nodedetaildialog_dangqianjiedianchu:
    'The average time spent processing events by the current node',
  packages_dag_components_nodedetaildialog_dangqianjiedianping:
    'The average number of input events and output events per second processed by the current node',
  packages_dag_monitor_leftsider_renwuchuliwan:
    'The total time required for task processing to complete a newly generated event, when there are multiple targets, only the maximum processing time is counted',
  packages_dag_monitor_leftsider_shijiancongyuanku:
    'The delay time between the event being generated from the source library and the completion of writing to the target after the task is processed. When there are multiple targets, only the maximum incremental delay time is counted',
  packages_dag_monitor_leftsider_qpSshizhi:
    'QPS refers to the average number of input events and output events processed by the task per second',
  packages_dag_components_nodedetaildialog_zengliangduquyan2:
    "Incremental read delay: the delay time from the time the incremental event is generated to the time it is read to the start of the task's processing in the incremental phase",
  packages_dag_components_nodedetaildialog_pingjunduquhao2:
    'Average read time: the average time to read each piece of data in the full stage'
}
