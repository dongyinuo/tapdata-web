export default {
  // state
  public_status_ready: 'Valid',
  public_status_invalid: 'Invalid',
  public_status_testing: 'Testing',
  public_status_wait_run: 'to be started',
  public_status_edit: 'Editing',
  public_status_running: 'Running',
  public_status_starting: 'Starting',
  public_status_scheduling: 'Scheduling',
  public_status_stopping: 'Stopping',
  public_status_force_stopping: 'forced to stop',
  public_status_waiting: 'waiting',
  public_status_scheduled: 'Scheduled',
  public_status_complete: 'Complete',
  public_status_stop: 'stopped',
  public_status_finished: 'Completed',
  public_status_error: 'Error',
  public_status_failed: 'failed',
  public_status_schedule_failed: 'Schedule failed',
  // button
  public_button_edit: 'Edit',
  public_button_confirm: 'OK',
  public_button_cancel: 'Cancel',
  public_button_back: 'Back',
  public_button_save: 'Save',
  public_button_check: 'View',
  public_button_delete: 'Delete',
  public_button_setting: 'Settings',
  public_button_reduction: 'Reduction',
  public_button_copy: 'Copy',
  public_button_details: 'Details',
  public_button_preview: 'Preview',
  public_button_reload: 'Reload',
  public_button_restart: 'Restart',
  public_button_start: 'start',
  public_button__stop: 'Stop',
  public_button__force_stop: 'force stop',
  public_button_close: 'Close',
  public_button_reset: 'Reset',
  public_button_create: 'Create',
  public_button_export: 'Export',
  public_button_download: 'Download',
  public_button_button: 'New',
  public_button_bulk_operation: 'Batch operation',
  public_button_bulk_tag: 'Set category',
  public_button_revise: 'Revise',
  public_button_refresh: 'Refresh',
  public_button_public: 'Publish',
  public_button_revoke: 'Revoke',
  public_button_submit: 'Submit',
  // information
  public_message_title_prompt: 'Prompt',
  public_message_delete_confirm: 'Delete',
  public_message_save_ok: 'Saved successfully',
  public_message_save_fail: 'Save failed',
  public_message_copy_success: 'Copy successful',
  public_message_copy_fail: 'Copy failed',
  public_message_delete_ok: 'Delete successful',
  public_message_delete_fail: 'Delete failed',
  public_message_deleting: 'deleting',
  public_message_operation_success: 'Operation succeeded',
  public_message_request_error: 'Failed to request data',
  public_message_loading: 'Loading',
  public_message_401: 'Login expired, please log in again',
  public_message_404: 'The requested resource does not exist',
  public_message_5xx: 'Server exception',
  public_message_network_unconnected: 'The network connection is abnormal',
  public_message_network_connected: 'The network has been restored',
  public_message_request_timeout: 'Request timeout',
  // list
  public_table_operation: 'Operation',
  public_table_create_time: 'Create time',
  public_table_creator: 'Creator',
  public_table_update_time: 'update time',
  public_table_change_time: 'modification time',
  public_table_name: 'Name',
  public_table_type: 'Type',
  public_table_title: 'Title',
  public_table_description: 'Description',
  public_table_version: 'Version',
  // drop-down list
  public_select_placeholder: 'Please select',
  public_select_option_all: 'All',
  public_select_option_default: 'Default',
  // Input box
  public_input_placeholder: 'Please enter',
  public_input_placeholder_search: 'Please enter the search content...',
  // form
  public_form_not_empty: 'Cannot be empty',
  // data
  public_data_see_more: 'See more',
  public_data_no_data: 'No data yet',
  public_data_no_data1: 'No data',
  public_data_no: 'none',
  public_data_no_find_result: 'No eligible results were found',
  // time
  public_time_ms: 'milliseconds',
  public_time_s: 'seconds',
  public_time_m: 'minute',
  public_time_h: 'hour',
  public_time_d: 'day',
  public_time_input: 'Input',
  public_time_output: 'Output',
  public_time_five_min: 'The last five minutes',
  public_time_ten_min: 'The last ten minutes',
  public_time_thirty_min: 'The last thirty minutes',
  public_time_last_hour: 'The last hour',
  public_time_period: 'period',
  public_time_Last_six_hours: 'The last 6 hours',
  public_time_last_day: 'Last 1 day',
  public_time_last_three_days: 'The last 3 days',
  public_time_custom_time: 'custom time',
  // agent
  public_agent_name: 'Agent name',
  public_agent_button_create: 'Create Agent',
  public_agent_button_deploy: 'Deploy',
  public_agent_button_deploy_now: 'Deploy now',
  public_agent_button_deploy_later: 'Deploy later',
  public_agent_button_auto_upgrade: 'Auto upgrade',
  public_agent_button_manual_upgrade: 'Manual upgrade',
  public_agent_status_offline: 'Offline',
  public_agent_status_to_be_deployed: 'to be deployed',
  // connect
  public_connection_name: 'Connection name',
  public_connection_type: 'Connection type',
  public_connection_type_source: 'source',
  public_connection_type_target: 'Target',
  public_connection_type_source_and_target: 'source and target',
  public_connection_information: 'Connection information',
  public_connection_schema_status: 'Schema status',
  public_connection_schema_status_tip: 'Only when the Schema is loaded can the connection be created normally',
  public_connection_table_structure_update_time: 'table structure update time',
  public_connection_button_create: 'Create connection',
  public_connection_button_test: 'Connection Test',
  public_connection_button_load_schema: 'Load Schema',
  public_connection_form_database_name: 'database name',
  public_connection_form_database_address: 'database address',
  public_connection_form_host: 'port',
  public_connection_form_account: 'Account',
  public_connection_form_password: 'Password',
  public_connection_form_schema: 'Schema',
  public_connection_form_other_connection_string: 'Other connection string parameters',
  public_connection_form_time_zone_of_time_type: 'Time zone of time type',
  public_connection_form_link_plugin_source: 'Link Plugin Source',
  // Task
  public_task_name: 'task name',
  public_task_type: 'task type',
  public_task_type_initial_sync: 'full amount',
  public_task_type_cdc: 'Incremental',
  public_task_type_initial_sync_and_cdc: 'full amount + increment',
  public_task_status: 'Task Status',
  public_task_last_run_time: 'Last run time',
  public_task_cdc_time_point: 'Incremental time point',
  public_task_full_start_time: 'Full start time',
  public_task_full_completion_time: 'Full completion time',
  public_task_full_sync_progress: 'full sync progress',
  public_task_max_incremental_delay: 'Maximum incremental delay',
  public_task_heartbeat_time: 'Task heartbeat time',
  public_task_mission_error: 'Task error',
  // task-node
  public_task_node_name: 'node name',
  public_task_node_type: 'node type',
  public_task_node_source: 'source node',
  public_task_node_processor: 'processing node',
  public_task_node_target: 'target node',
  // task event
  public_event_incremental_delay: 'Incremental delay',
  public_event_total_input: 'Total input',
  public_event_total_output: 'total output',
  public_event_insert: 'insert',
  public_event_update: 'Update',
  public_event_ddl: 'DDL'
}
