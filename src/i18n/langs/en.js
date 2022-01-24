export default {
  // 通用提示
  tips_not_null: 'The value cannot be empty',
  tips_must_number: 'The value must be a number',

  // 通用下拉框
  select_option_all: 'All',

  // 通用消息
  message_title_prompt: 'Hint',
  message_delete_confirm: 'Delete or not',

  // 表格
  column_operation: 'Operate',

  // 菜单标题
  menu_title_function: 'Function management',

  // 数据校验
  verify_details_title: 'Task verification details',
  verify_history_title: 'Task verification history',
  verify_diff_history_title: 'Diff verification history',
  verify_diff_details_title: 'Diff verification details',
  verify_result_title: 'Verification result',
  verify_button_diff_verify: 'Diff verification',
  verify_button_diff_verify_running: 'Verification in progress',
  verify_button_diff_verify_tips:
    'Re-verify the difference data result of this full verification, the difference in the number of rows does not support the difference verification',
  verify_last_start_time: 'Last verification time',
  verify_button_diff_task_history: 'Verify history',
  verify_message_old_data_not_support: 'Old data does not support secondary verification',
  verify_message_out_of_limit:
    'Your discrepancy data volume has exceeded the maximum number of error data saved by the task support, and the second verification is temporarily impossible.',
  verify_result_count_more: 'Target count more: {0}',
  verify_result_count_less: 'Target count less: {0}',
  verify_result_content_diff: 'Table data difference: {0}',
  verify_result_count_inconsistent: 'inconsistent',
  verify_result_count_consistent: 'consistent',
  verify_form_source_filter: 'Source table data filtering',
  verify_form_target_filter: 'Target table data filtering',

  taskprogress_plan_sync_table_num: 'Number of plan synchronization tables',
  taskprogress_completed_sync_table_num: 'Number of completed synchronization tables',
  taskprogress_plan_sync_data: 'Planned synchronization data volume (rows)',
  taskprogress_completed_sync_data: 'Completed synchronization data volume (rows)',
  taskprogress_current_sync: 'Current synchronization status of each library',
  taskprogress_full_sync_progress: 'Full sync progress',

  // 任务设置
  task_settings_cdc_sync_point_date: '【Task settings】Incremental acquisition start time, please select the time',

  // public area 公共区
  menu_help: 'Help',
  button_edit: 'Edit',
  button_confirm: 'Confirm',
  button_cancel: 'Cancel',
  button_back: 'Back',
  button_save: 'Save',
  button_check: 'Details',
  button_delete: 'Delete',
  button_setting: 'Setting',
  button_reduction: 'Reduction',
  button_copy: 'Copy',
  button_details: 'Details',
  button_preview: 'Preview',
  button_reload: 'Reload schema',
  button_ok: 'OK',
  button_restart: 'Restart',
  button_startUp: 'Start',
  button_close: 'Close',
  button_filter: 'Filter',
  button_search: 'Search',
  button_query: 'Query',
  button_reset: 'Reset',
  button_create: 'Create',
  button_export: 'Export',
  button_import: 'Import',
  button_download: 'Download',

  query_fuzzy: 'Fuzzy match',
  query_precise: 'Exact match',

  message_delete_ornot: 'Delete or not',
  message_save_ok: 'Save successfully',
  message_save_fail: 'Save failed',
  message_create_ok: 'Created successfully',
  message_create_fail: 'Create failed',
  message_copy_success: 'Copy successful',
  message_copy_fail: 'Copy failed',
  message_delete_ok: 'Delete successfully',
  message_delete_fail: 'Deletion failed',
  message_deleting: 'Deleting',
  message_reload_ok: 'Reloading in progress',

  operator: 'Operation',

  // dialog button dialog按钮
  dialog_button_cancel: 'Cancel',
  dialog_button_confirm: 'OK',
  dialog_button_save: 'Save',
  dialog_button_delete: 'Delete',

  // api release api发布
  modules_all: 'All',
  modules_active: 'Released',
  modules_pending: 'Unpublished',
  modules_create: 'Create API',
  modules_export: 'Export',
  modules_import: 'import',
  modules_api_test: 'API documentation and testing',
  modules_publish_api: 'Publish API',
  modules_unpublish_api: 'Unpublish API',
  modules_edit: 'Edit',

  modules_header_api_name: 'API name',
  modules_header_dataSource: 'Data Source',
  modules_header_tablename: 'table name',
  modules_header_status: 'Status',
  modules_header_basePath: 'Base Path',
  modules_header_version: 'Version',
  modules_header_classifications: 'Classification',
  modules_header_username: 'creator',
  modules_header_last_updated: 'Update time',
  modules_header_operator: 'Operation',

  modules_status_starting: 'Starting',
  modules_status_running: 'Running',
  modules_status_restart: 'Update in progress',
  modules_status_deploy_fail: 'Publishing API failed',
  modules_status_exit: 'Exited',
  modules_status_stop: 'Stopped',
  modules_status_ready: 'valid',
  modules_status_invalid: 'invalid',
  modules_allacancel: 'Batch cancel',
  modules_allarelease: 'Batch release',
  modules_releasefb: 'Are you sure you want to release the following APIs in batches?',
  modules_releasecancel: 'Are you sure you want to cancel the following APIs in batches?',
  modules_apiServerStatus: 'API Service Status',
  modules_sure: 'Are you sure you want',
  modules_cancel_failed: 'Unpublished API failed',

  module_form_connection: 'Database',
  module_form_tablename: 'table name',
  module_form_version: 'Version',
  module_form_name: 'Name',
  module_form_api_name: 'API name',
  module_form_describtion: 'Description',
  module_form_set_mode: 'Set mode',
  module_form_default_Api: 'Default CURD API',
  module_form_customer_Api: 'Custom API',
  module_form_noPath: 'Please add a path',
  module_form_distinction: 'Path differentiation',
  module_form_prefix: 'Prefix',
  module_form_basePath: 'Base Path',
  module_form_path: 'Path',
  module_form_security: 'Permission Settings',
  module_form_edit: 'Edit',
  module_form_document: 'API document',
  module_form_tags: 'Data Directory',
  module_form_preview: 'Data Preview',
  module_form_public_api: 'Public',
  module_form_private_api: 'Private',
  module_form_available_query_field: 'Available query field',
  module_form_required_query_field: 'Required query conditions',
  module_form_validator_name:
    'Can only contain Chinese, letters, numbers, underscores and dollar signs, and numbers cannot start with',
  module_form_validator_base_path: 'The length of the base path is up to 30',
  module_form_create_a_new_record: 'Create a new record',
  module_form_get_record_by_id: 'Get records based on id',
  module_form_update_record_by_id: 'Update record according to id',
  module_form_delete_record_by_id: 'Delete records based on id',
  module_form_get_record_list_by_page_and_limit: 'Get records by page',
  module_form_method: 'Method',
  module_form_fields: 'Fields',
  module_form_datatype: 'Data Type',
  module_form_condition: 'Filter condition',
  module_form_no_server_preview_api: 'There is no API server to preview the API document.',
  module_form_get_api_uri_fail: 'Failed to get API Server Uri',
  module_form_duplication_name: 'Duplicate for name',

  query_build_match: 'match',
  query_build_condition: 'Condition',
  query_build_all: 'All',
  query_build_any: 'any',
  query_build_addGroup: 'Add group',
  query_build_removeGroup: 'Remove group',
  query_build_addCondition: 'Add Condition',
  query_build_removeCondition: 'Remove Condition',
  query_build_show_filter: 'Show filter conditions',
  query_build_queryValue: 'Field value',
  query_build_add: 'Add',
  query_build_remove: 'Remove',
  query_build_selectField: 'Select Field',

  // client 客户端
  application_header_id: 'Client ID',
  application_header_client_name: 'Client name',
  application_header_grant_type: 'Grant Type',
  application_header_client_secret: 'Client Secret',
  application_header_redirect_uri: 'Redirect URI',
  application_header_scopes: 'Permission scope',
  application_generator: 'Generate',
  application_show_menu: 'Show to the menu',
  application_scopes_tip: 'Multiple permission scopes are separated by commas',
  application_true: 'Yes',
  application_false: 'No',
  application_create: 'Create a client',

  // api statistics api服务器
  api_asnalysis_header_api: 'API',
  api_asnalysis_header_method: 'Method',
  api_asnalysis_header_url: 'Address',
  api_asnalysis_header_users: 'Number of users',
  api_asnalysis_header_calls: 'Number of calls',
  api_asnalysis_header_lastTime: 'Last call',
  api_asnalysis_header_rows: 'Return the number of rows',
  api_asnalysis_header_in_bytes: 'inflow',
  api_asnalysis_header_out_bytes: 'Outflow',
  api_asnalysis_header_sum_res_timespan: 'Total operation time (seconds)',
  api_asnalysis_header_avg_res_timespan: 'Average response time (milliseconds)',
  api_asnalysis_total: 'Statistics',
  api_asnalysis_name: 'Name',

  // api server api浏览
  api_server_name: 'Name',
  api_server_user: 'User',
  api_server_process_id: 'API server unique ID',
  api_server_client_name: 'API server name',
  api_server_client_uri: 'API server access address',
  api_server_download: 'Download',
  api_server_download_API_Server_config: 'Download API configuration file',
  api_server_no_available: 'No API server available',

  // api browse api浏览
  dataExplorer_collection_required: 'Please select API',
  dataExplorer_zone: 'Time zone setting',
  dataExplorer_api_server: 'API server',
  dataExplorer_collection: 'API',
  dataExplorer_query: 'Query',
  dataExplorer_document: 'API Document',
  dataExplorer_query_time: 'Query usage',
  dataExplorer_render_time: 'Rendering use',
  dataExplorer_tag_title: 'Set tag',
  dataExplorer_show_column: 'Show column',
  dataExplorer_document_sql: 'Please enter the SELECT statement:',
  dataExplorer_document_required: 'Cannot be empty',
  dataExplorer_format_sql: 'Format SQL',
  dataExplorer_new_document: 'New record',
  dataExplorer_query_field: 'Query field',
  dataExplorer_query_command: 'Query command',
  dataExplorer_timeout: 'Timeout time',
  dataExplorer_unauthenticated: 'You do not have permission to access the API. ',
  dataExplorer_message_timeout:
    'The connection to the API server has timed out, please check whether the API server has been started. ',
  dataExplorer_publish: 'The API of {id} was not found on the API server. Please check if it has been published. ',
  dataExplorer_no_permissions: 'Your token has expired, please refresh the page and try again. ',
  dataExplorer_zone_setting: 'Time zone setting',
  dataExplorer_datetype_without_timezone: 'Time zone of time type (optional)',
  dataExplorer_mysql_datetype_without_timezone: 'Type of impact: DATETIME',
  dataExplorer_file_type: 'Select file type',
  dataExplorer_add_favorite: 'Favorites',
  dataExplorer_format: 'Format code',
  dataExplorer_exists: 'Already exists',
  // api documentation and testing api文档及测试
  file_test_generate_code: 'Generate code',

  // 数据源
  connection_form_tidb_server: 'PDServer address',
  connection_tidb_none_server: 'PDServer address cannot be empty',

  connection_list_column_schema_status: 'Schema loading status',
  connection_list_column_schema_status_tips: 'Connections after Schema loading can be created normally',

  connection_form_connection_type: 'Connection Type',
  connection_form_source_and_target: 'Source and target',
  connection_form_source: 'Source',
  connection_form_target: 'Target',
  connection_form_source_and_target_tip:
    'This data connection can be used as source and target at the same time in Tapdata',
  connection_form_source_tip: 'This data connection can only be used as a source in Tapdata, not as a target',
  connection_form_target_tip:
    'This data connection can only be used as a target in Tapdata, and cannot be used as a source',
  connection_form_host: 'Database host',
  connection_form_port: 'Port',
  connection_form_connection_name: 'Connection name',
  connection_form_user_name: 'Account',
  connection_form_password: 'Password',

  connection_form_mq_type: 'MQ Type',
  connection_form_mq_topic_set: 'topic name',
  connection_form_mq_queue_set: 'Queue name',
  connection_form_mq_broker_url: 'MQ connection string',
  connection_form_mq_database_host: 'MQ address',
  connection_form_mq_database_port: 'MQ port',
  connection_form_mq_route_key_field: 'Message routing',
  connection_form_mq_virtual_host: 'Virtual Host',
  connection_form_mq_producer_group: 'Producer Group',
  connection_form_mq_consumer_group: 'Consumer Group',

  connection_form_custom_connection_connection_time_out: 'Connection timeout (s)',
  connection_form_custom_connection_read_time_out: 'Read timeout (s)',
  connection_form_custom_connection_before_operate: 'Pre-operation',
  connection_form_custom_connection_after_operate: 'Post-operation',
  connection_kafka_kerberos_attest: 'kerberos authentication',
  connection_kafka_kerberos_config_keytab: 'Key representation file',
  connection_kafka_kerberos_config_conf: 'Configuration file',
  connection_kafka_kerberos_body_config: 'Body Configuration',
  connection_kafka_kerberos_service_name: 'Service name',
  connection_kafka_kerberos_tip:
    'The instance name mapping needs to be configured on the host where the Engine is located /etc/hosts',
  connection_kafka_kerberos_none_keytab: 'The key representation file cannot be empty',
  connection_kafka_kerberos_none_conf: 'Configuration file cannot be empty',
  connection_kafka_encryption: 'Encryption',

  connection_redis_valid: 'Authentication',

  connection_hana_label_hana_type: 'Install type',

  // function
  js_func_name: 'Function name',
  js_func_parameters: 'Parameters',
  js_func_function_body: 'Function body',
  js_func_last_update: 'Update time',
  js_func_create: 'Create',
  js_func_function_name_repeat: 'Method name is repeated',
  js_func_dialog_format: 'Format code',
  js_func_dialog_code: 'Javascript function code',
  js_func_dialog_Linenumbers: 'Display line numbers',
  js_func_dialog_nofunctions: 'Code lacks JS functions',
  js_func_dialog_create_title: 'New record',
  js_func_dialog_edit_title: 'Update record',
  js_func_delete_remind: 'Are you sure you want to delete the function',

  //Dag
  dag_data_node_label_dameng: 'Dameng Node',
  dag_data_node_label_database_link_table: 'Table name case',
  dag_data_node_label_database_link_field: 'Field name case',
  dag_data_node_label_database_link_unchang: 'Unchanged',
  dag_data_node_label_database_link_to_uppercase: 'Uppercase',
  dag_data_node_label_database_link_to_lowercase: 'Lowercase',
  dag_data_node_label_memcache_type: 'Cache Type',
  dag_data_node_label_memcache_type_all: 'Global cache',
  dag_data_node_label_memcache_type_local: 'Local cache',
  dag_data_node_label_memcache_type_tip:
    'All tasks in the global cache can be referenced, and the local cache can only be referenced by the current DAG. ',
  dag_data_node_label_clickhouse: 'ClickHouse Node',
  dag_data_node_label_kafka_high_performance_mode: 'High performance mode',
  dag_data_node_label_kafka_all: 'All',
  dag_data_node_label_aggregate_filter: 'Filter',
  dag_link_button_custom_script: 'Custom processing script',
  dag_data_node_hana_hana_check: 'Hana as a source only supports full tasks',
  dag_data_node_label_hazelcast: 'Hazelcast Cloud Node',

  //Field mapping
  dag_link_button_field_mapping: 'Field mapping',
  dag_link_button_mapping_configuration: 'Mapping configuration',
  dag_link_field_mapping_error_no_table: 'Please select the table to be migrated',
  dag_link_field_mapping_error_all_deleted:
    'All fields have been deleted from the current table, and the save operation is not allowed',
  dag_link_field_mapping_error_tip: 'Please configure the target node first',
  dag_dialog_field_mapping_table_setting: 'Table Settings',
  dag_dialog_field_mapping_tip:
    'Users can set the fields to be synchronized for each table in the source database on this page, as well as the corresponding field names and field types when the target database is automatically created.',
  dag_dialog_field_mapping_table_rename: 'table rename',
  dag_dialog_field_mapping_field_rename: 'Field rename',
  dag_dialog_field_mapping_rollback_all: 'Restore default',
  dag_dialog_field_mapping_rollback_field: 'Restore default field',
  dag_dialog_field_mapping_search_table: 'Search table',
  dag_dialog_field_mapping_loading_schema: 'Loading, please wait...',
  dag_dialog_field_mapping_selected: 'Selected',
  dag_dialog_field_mapping_search_field: 'Search Field',
  dag_dialog_field_mapping_source_field: 'Source table field name',
  dag_dialog_field_mapping_source_type: 'Source table type',
  dag_dialog_field_mapping_source_precision: 'Source table scale',
  dag_dialog_field_mapping_source_scale: 'Source table precision',
  dag_dialog_field_mapping_target_field: 'Target table field name',
  dag_dialog_field_mapping_target_type: 'Target table type',
  dag_dialog_field_mapping_target_precision: 'Target table scale',
  dag_dialog_field_mapping_target_scale: 'Target table precision',
  dag_dialog_field_mapping_operate: 'Operation',
  dag_dialog_field_mapping_no_data: 'No data yet',
  dag_dialog_field_mapping_range_precision: 'Length range',
  dag_dialog_field_mapping_range_scale: 'Precision range',
  dag_dialog_field_mapping_batch_table_name: 'Batch change table name setting',
  dag_dialog_field_mapping_batch_field_name: 'Batch change field name settings',
  dag_dialog_field_mapping_example_prefix: 'Prefix',
  dag_dialog_field_mapping_example_suffix: 'Suffix',
  dag_dialog_field_mapping_example_tip: 'Explanation: the prefix and suffix set also follow the capitalization rules',
  dag_dialog_field_mapping_example_origin_table_name: 'Original table name',
  dag_dialog_field_mapping_example_change: 'After modification',
  dag_dialog_field_mapping_example: 'Example',
  dag_dialog_field_mapping_tittle_field_name: 'Modify the target table field name',
  dag_dialog_field_mapping_tittle_data_type: 'Modify the target table field type',
  dag_dialog_field_mapping_tittle_precision: 'Modify the length of the target field',
  dag_dialog_field_mapping_tittle_scale: 'Modify the precision of the target table',
  dag_dialog_field_mapping_error_tip: 'tip',
  dag_dialog_field_mapping_error_rollback_all: 'Are you sure you want to restore all to the default',
  dag_dialog_field_mapping_error_rollback: 'Are you sure you want to restore all to the default',
  dag_dialog_field_mapping_error_range: 'The current value does not meet the field range',
  dag_dialog_field_mapping_error_save_prefix: 'Detected that you still have',
  dag_dialog_field_mapping_error_save_suffix:
    'There is a problem with the field type setting of the table, please select the table with the problem in the table area on the left for processing',
  dag_dialog_field_mapping_change_type_field_rename: 'Type modification',
  dag_dialog_field_mapping_batch_change_type: 'Batch edit field types',
  dag_dialog_field_mapping_batch_change_type_error_tip:
    'Please select the type of source table/target table conversion',
  dag_dialog_field_mapping_batch_change_type_source: 'Source field type',
  dag_dialog_field_mapping_batch_change_type_target: 'Target field type',
  dag_job_check_source: 'as a source, only full tasks are supported',

  //Task edit
  task_job_setting_tip_title: 'Set reminder',
  task_job_setting_disable: 'Do not de-duplicate',
  task_job_tip_text:
    'The setting of the cache node (xxx) already exists in the task (###), please confirm whether to continue to create it? ',
  task_job_source_falg: 'as a source, only full tasks are supported',
  data_flow_automatically: 'automatically',
  data_flow_manually: 'manually',
  data_flow_oracle_logminer: 'Oracle Logminer Mode',
  task_job_link_type_table_tips: 'Table does not currently support foreign key replication',
  task_job_link_type_view_tips:
    'The setting of field mapping is temporarily not supported when copying the view. The field mapping function below this option will be disabled, and the field mapping that has been set will be reset.',
  task_job_link_confirm_message_rollback:
    'The setting of field mapping is not supported when copying the view. The field mapping function below this option will be disabled, and the field mapping that has been set will be reset. Are you sure to check it? ',
  task_setting_oracle_custom_analysis: 'OracleSQL custom analysis',
  task_setting_manually_miner_concurrency: 'Concurrent mining threads',

  // Function management
  function_tips_empty: 'Code lacks JS functions',
  function_button_create_custom_function: 'Create function',
  function_button_import_jar: 'Import',
  function_button_edit_function: 'Edit function',
  function_details: 'Function details',
  function_checkbox_Line_number: 'Display line number',
  function_button_create: 'Create',
  function_button_edit: 'Edit',
  function_tips_name_repeat: 'Method name repeat',
  function_button_code_format: 'Format code',
  function_last_update_label: 'Update time',
  function_parameters_label: 'Parameters',
  function_type_label: 'Function type',
  function_type_option_custom: 'Custom function',
  function_type_option_jar: 'Third-party jar package',
  function_type_option_system: 'System function',
  function_name_label: 'Function name',
  function_name_placeholder: 'Please enter the function name',
  function_name_repeat: 'Function name repeat',
  function_class_label: 'Class name',
  function_class_placeholder:
    'Please enter the class name, UDF function class name, the format is resource name. Class name',
  function_file_label: 'jar file',
  function_button_file_upload: 'Click to upload',
  function_file_upload_tips: 'Please upload the jar package file',
  function_file_upload_success: 'Upload successful',
  function_file_upload_fail: 'Upload failed',
  function_body_label: 'Function body',
  function_body_placeholder: 'Please enter the command format, which is an example of the specific usage of this UDF',
  function_parameters_describe_label: 'Parameter description',
  function_parameters_describe_placeholder:
    'Support input parameter types and specific description of return parameter types',
  function_return_value_label: 'Return value',
  function_return_value_placeholder: 'Please enter the return value',
  function_describe_label: 'Description',
  function_describe_placeholder: 'Please enter a description',
  function_format: 'Format',
  function_format_placeholder: 'Please enter a format',
  function_jar_file_label: 'Jar file name',
  function_package_name_label: 'Package name',
  function_package_name_placeholder: 'Please enter a package name',
  function_class_name_label: 'Class name',
  function_method_name_label: 'Method name',
  function_script_label: 'Code details',
  function_script_empty: 'Please enter the function code',
  function_script_missing_function_name: 'Missing function name',
  function_script_missing_function_body: 'Missing function body',
  function_script_format_error: 'The function format is incorrect',
  function_script_only_one: 'Only one function is allowed to be created',
  function_import_list_title: 'Function list',
  function_button_load_function: 'Load function',
  function_message_load_function_fail: 'Load function fail',
  function_dialog_setting_title: 'Function setting',
  function_message_function_empty: 'Please upload the jar file and load the function',
  function_message_delete_title: 'Delete function',
  function_message_delete_content:
    'Deletion may cause the task that has called this function to report an error. Are you sure to delete this function? ',
  function_tips_max_size: 'Max size ',

  // 用户
  login_fail_too_many: 'The maximum number of password errors has been reached, please log in after 10 minutes'
}
