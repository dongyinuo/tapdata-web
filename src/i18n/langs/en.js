export default {
  // 通用按钮
  button_edit: 'edit',

  // 通用消息
  message_title_prompt: 'hint',

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
  verify_result_field_name: 'Field name',
  verify_result_source_info: 'Source Information',
  verify_result_target_info: 'Target Information',
  verify_create_window_duration: 'Window duration',

  taskprogress_plan_sync_table_num: 'Number of plan synchronization tables',
  taskprogress_completed_sync_table_num: 'Number of completed synchronization tables',
  taskprogress_plan_sync_data: 'Planned synchronization data volume (rows)',
  taskprogress_completed_sync_data: 'Completed synchronization data volume (rows)',
  taskprogress_current_sync: 'Current synchronization status of each library',
  taskprogress_full_sync_progress: 'Full sync progress',

  // 任务设置
  task_settings_cdc_sync_point_date: '【Task settings】Incremental acquisition start time, please select the time',

  // 数据源
  connection_form_tidb_server: 'PDServer address',
  connection_tidb_none_server: 'PDServer address cannot be empty',

  connection_list_column_schema_status: 'Schema loading status',
  connection_list_column_schema_status_tips: 'Connections after Schema loading can be created normally',

  connection_form_custom_connection_before_operate: 'Pre-operation',
  connection_form_custom_connection_after_operate: 'Post-operation',

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
  dag_data_node_hana_hana_check: 'Hana as a source only supports full tasks',

  //Task edit
  task_job_setting_tip_title: 'Set reminder',
  task_job_setting_disable: 'Do not de-duplicate',
  task_job_tip_text:
    'The setting of the cache node (xxx) already exists in the task (###), please confirm whether to continue to create it? ',
  data_flow_automatically: 'automatically',
  data_flow_manually: 'manually',
  data_flow_oracle_logminer: 'Oracle Logminer Mode',
  task_job_link_type_table_tips: 'Table does not currently support foreign key replication',
  task_job_link_type_view_tips:
    'The setting of field mapping is temporarily not supported when copying the view. The field mapping function below this option will be disabled, and the field mapping that has been set will be reset.',
  task_job_link_confirm_message_rollback:
    'The setting of field mapping is not supported when copying the view. The field mapping function below this option will be disabled, and the field mapping that has been set will be reset. Are you sure to check it? ',

  // Function management
  function_tips_empty: 'Code lacks JS functions',
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

  // 用户
  login_fail_too_many: 'The maximum number of password errors has been reached, please log in after 10 minutes'
}
