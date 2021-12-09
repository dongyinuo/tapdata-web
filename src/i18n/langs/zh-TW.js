export default {
  // 通用提示
  tips_not_null: '值不能為空',
  tips_must_number: '值必須為數字',

  // 通用按钮
  button_edit: '編輯',
  button_confirm: '確定',
  button_cancel: '取消',
  button_back: '返回',
  button_save: '保存',

  // 通用消息
  message_title_prompt: '提示',
  message_delete_confirm: '是否刪除',

  // 表格
  column_operation: '操作',

  // 菜单标题
  menu_title_function: '函數管理',

  // 数据校验
  verify_details_title: '任務校驗詳情',
  verify_history_title: '任務校驗歷史',
  verify_diff_history_title: '差異校驗歷史',
  verify_diff_details_title: '差異校驗詳情',
  verify_result_title: '校驗結果',
  verify_button_diff_verify: '差異校驗',
  verify_button_diff_verify_running: '校驗中',
  verify_button_diff_verify_tips: '對本次全量校驗的差異數據結果進行再次校驗，行數差異暫不支持差異校驗',
  verify_last_start_time: '最後校驗時間',
  verify_button_diff_task_history: '校驗歷史',
  verify_message_old_data_not_support: '舊數據暫不支持二次校驗',
  verify_message_out_of_limit: '您的差異數據量已超出任務支持的最大錯誤數據保存條數，暫時無法進行二次校驗',
  verify_result_count_more: '目標count多: {0}',
  verify_result_count_less: '目標count少: {0}',
  verify_result_content_diff: '表數據差: {0}',
  verify_result_count_inconsistent: '不一致',
  verify_result_count_consistent: '一致',
  verify_result_field_name: '字段名',
  verify_result_source_info: '源信息',
  verify_result_target_info: '目標信息',
  verify_create_window_duration: '窗口時長',

  taskprogress_plan_sync_table_num: '計劃同步表數量',
  taskprogress_completed_sync_table_num: '已完成同步表數量',
  taskprogress_plan_sync_data: '計劃同步數據量（行）',
  taskprogress_completed_sync_data: '已完成同步數據量（行）',
  taskprogress_current_sync: '各庫當前同步情況',
  taskprogress_full_sync_progress: '全量同步進度',

  // 任务设置
  task_settings_cdc_sync_point_date: '【任務設置】增量採集開始時刻，請選擇時間',

  // 数据源
  connection_form_tidb_server: 'PDServer 地址',
  connection_tidb_none_server: 'PDServer 地址不能為空',

  connection_list_column_schema_status: 'Schema加載狀態',
  connection_list_column_schema_status_tips: 'Schema加載完成的連接才可以正常創建任務',

  connection_form_custom_connection_connection_time_out: '連接超時(秒)',
  connection_form_custom_connection_read_time_out: '讀取超時(秒)',
  connection_form_custom_connection_before_operate: '前置操作',
  connection_form_custom_connection_after_operate: '後置操作',
  connection_kafka_kerberos_attest: 'kerberos 認證',
  connection_kafka_kerberos_config_keytab: '密鑰表示文件',
  connection_kafka_kerberos_config_conf: '配置文件',
  connection_kafka_kerberos_body_config: '主體配置',
  connection_kafka_kerberos_service_name: '服務名',
  connection_kafka_kerberos_tip: '需要在 Engine 所在主機 /etc/hosts 配置實例名映射',
  connection_kafka_kerberos_none_keytab: '密鑰表示文件不能為空',
  connection_kafka_kerberos_none_conf: '配置文件不能為空',
  connection_kafka_encryption: '加密方式',

  // Dag
  dag_data_node_label_dameng: 'Dameng節點',
  dag_data_node_label_database_link_table: '表名大小寫',
  dag_data_node_label_database_link_field: '字段名大小寫',
  dag_data_node_label_database_link_unchang: '不變',
  dag_data_node_label_database_link_to_uppercase: '轉為大寫',
  dag_data_node_label_database_link_to_lowercase: '轉為小寫',
  dag_data_node_label_memcache_type: '緩存類型',
  dag_data_node_label_memcache_type_all: '全局緩存',
  dag_data_node_label_memcache_type_local: '局部緩存',
  dag_data_node_label_memcache_type_tip: '全局緩存所有任務可引用，局部緩存僅限當前DAG引用。 ',
  dag_data_node_label_clickhouse: 'ClickHouse節點',
  dag_data_node_label_kafka_high_performance_mode: '高性能模式',
  dag_data_node_label_kafka_all: '所有',
  dag_data_node_label_aggregate_filter: '過濾器',
  dag_link_button_custom_script: '自定義處理腳本',
  dag_data_node_hana_hana_check: 'Hana作為源僅支持全量任務',

  dag_link_button_field_mapping: '字段映射',
  dag_link_button_mapping_configuration: '映射配置',
  dag_link_field_mapping_error_no_table: '請選擇需要遷移的表',
  dag_link_field_mapping_error_all_deleted: '當前表被刪除了所有字段，不允許保存操作',
  dag_dialog_field_mapping_table_setting: '表設置',
  dag_dialog_field_mapping_tip:
    '用戶可以在此頁面設置源庫每個表要同步的字段，以及在目標庫自動建表時對應的字段名稱和字段類型',
  dag_dialog_field_mapping_table_rename: '表改名',
  dag_dialog_field_mapping_field_rename: '字段改名',
  dag_dialog_field_mapping_rollback_all: '恢復默認',
  dag_dialog_field_mapping_rollback_field: '恢復默認字段',
  dag_dialog_field_mapping_search_table: '搜索表',
  dag_dialog_field_mapping_loading_schema: '加載中，請稍等...',
  dag_dialog_field_mapping_selected: '已選中',
  dag_dialog_field_mapping_search_field: '搜索字段',
  dag_dialog_field_mapping_source_field: '源表字段名',
  dag_dialog_field_mapping_source_type: '源表類型',
  dag_dialog_field_mapping_source_precision: '源表長度',
  dag_dialog_field_mapping_source_scale: '源表精度',
  dag_dialog_field_mapping_target_field: '目標表字段名',
  dag_dialog_field_mapping_target_type: '目標表類型',
  dag_dialog_field_mapping_target_precision: '目標表長度',
  dag_dialog_field_mapping_target_scale: '目標表精度',
  dag_dialog_field_mapping_operate: '操作',
  dag_dialog_field_mapping_no_data: '暫無數據',
  dag_dialog_field_mapping_range_precision: '長度範圍',
  dag_dialog_field_mapping_range_scale: '精度範圍',
  dag_dialog_field_mapping_batch_table_name: '批量改表名設置',
  dag_dialog_field_mapping_batch_field_name: '批量改字段名設置',
  dag_dialog_field_mapping_example_prefix: '請輸入前綴',
  dag_dialog_field_mapping_example_suffix: '請輸入后綴',
  dag_dialog_field_mapping_example_tip: '說明：設置的前後綴也遵循大小寫規則',
  dag_dialog_field_mapping_example_origin_table_name: '原表名',
  dag_dialog_field_mapping_example_change: '修改後',
  dag_dialog_field_mapping_example: '示例',
  dag_dialog_field_mapping_tittle_field_name: '修改目標表字段名稱',
  dag_dialog_field_mapping_tittle_data_type: '修改目標表字段類型',
  dag_dialog_field_mapping_tittle_precision: '修改目標字段長度',
  dag_dialog_field_mapping_tittle_scale: '修改目標表精度',
  dag_dialog_field_mapping_error_tip: '提示',
  dag_dialog_field_mapping_error_rollback_all: '您確認要全部恢復默認嗎',
  dag_dialog_field_mapping_error_rollback: '您確認要全部恢復默認嗎',
  dag_dialog_field_mapping_error_range: '當前值不符合該字段範圍',
  dag_dialog_field_mapping_error_save_prefix: '檢測到您還有',
  dag_dialog_field_mapping_error_save_suffix: '張表的字段類型設置存在問題，請在左側表區域選擇有問題的表進行處理',

  //任務編輯
  dag_job_check_source: '作為源僅支持全量任務',

  // 緩存節點提示
  task_job_setting_tip_title: '設置提醒',
  task_job_setting_disable: '不去重',
  task_job_tip_text: '該緩存節點(xxx)的設置已存在於任務(###)中，請確認是否還繼續創建？ ',
  task_job_source_falg: '作為源僅支持全量任務',
  data_flow_automatically: '自動挖掘',
  data_flow_manually: '手動挖掘',
  data_flow_oracle_logminer: 'Oracle日誌挖掘模式',
  task_job_link_type_table_tips: 'Table暫不支持外鍵複製',
  task_job_link_type_view_tips:
    '複製view時暫不支持設置欄位映射，勾選此項下方欄位映射功能會被禁用，已設置的欄位映射將會被重置',
  task_job_link_confirm_message_rollback:
    '複製view時暫不支持設置欄位映射，勾選此項下方欄位映射功能會被禁用，已設置的欄位映射將會被重置，是否確認勾選？',
  task_setting_oracle_custom_analysis: 'OracleSQL自定義解析',

  // 函数管理
  function_tips_empty: '代碼缺少JS函數',
  function_button_create_custom_function: '創建函數',
  function_button_import_jar: '導入jar包',
  function_button_edit: '編輯',
  function_tips_name_repeat: '方法名稱重複',
  function_button_code_format: '格式化代碼',
  function_last_update_label: '更新時間',
  function_parameters_label: '參數',
  function_type_label: '函數類型',
  function_type_option_custom: '自定義函數',
  function_type_option_jar: '第三方jar包',
  function_name_label: '函數名稱',
  function_name_placeholder: '請輸入函數名稱',
  function_name_repeat: '函數名稱重復',
  function_class_label: '類名',
  function_class_placeholder: '請輸入類名，UDF函數的類名，格式為資源名.類名',
  function_file_label: 'jar文件',
  function_button_file_upload: '點擊上傳',
  function_file_upload_tips: '請上傳jar包文件',
  function_file_upload_success: '上傳成功',
  function_file_upload_fail: '上傳失敗',
  function_body_label: '函數體',
  function_body_placeholder: '請輸入命令格式，為該UDF的具體使用方法示例',
  function_parameters_describe_label: '參數說明',
  function_parameters_describe_placeholder: '支持輸入的參數類型以及返回參數類型的具體說明',
  function_return_value_label: '返回值',
  function_return_value_placeholder: '請輸入返回值',
  function_describe_label: '描述',
  function_describe_placeholder: '請輸入描述',
  function_format: '命令格式',
  function_format_placeholder: '请输入命令格式',

  // 用户
  login_fail_too_many: '密碼錯誤達到最大次數，請於10分鐘再登錄'
}
