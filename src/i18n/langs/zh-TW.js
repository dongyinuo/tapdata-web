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
  button_check: '查看',
  button_delete: '刪除',
  button_setting: '設置',
  button_reduction: '還原',

  // 通用下拉框
  select_option_all: '全部',

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

  connection_hana_label_hana_type: '租戶模式',

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
  dag_link_field_mapping_error_tip: '請先配置目標節點',
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
  dag_dialog_field_mapping_change_type_field_rename: '類型修改',
  dag_dialog_field_mapping_batch_change_type: '批量修改字段類型',
  dag_dialog_field_mapping_batch_change_type_source: '源字段類型',
  dag_dialog_field_mapping_batch_change_type_target: '目標字段類型',
  dag_dialog_field_mapping_batch_change_type_error_tip: '請先選擇需要源表/目標表轉換的類型',

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

  task_list_run: '啟動',
  task_list_stop: '停止',
  task_list_force_stop: '強制停止',

  task_monitor_progress: '任務進度',
  task_monitor_full_sync: '全量同步概覽',
  task_monitor_full_completion_time: '預計全量完成還需時間',
  task_monitor_cdc_overview: '增量同步概覽',
  task_monitor_delay: '延遲',
  task_monitor_progress_details: '進度詳情',
  task_monitor_cdc_details: '增量詳情',
  task_monitor_source_library: '源庫',
  task_monitor_time: '時間',
  task_monitor_target_library: '目標庫',
  task_monitor_status_statistice: '狀態統計',
  task_monitor_migrate_table_number: '計劃遷移表數量',
  task_monitor_migrate_table_rows: '計劃遷移數據量（行）',
  task_monitor_migrate_table_number_completed: '已完成遷移表數量',
  task_monitor_migrate_table_rows_completed: '已完成遷移數據量（行）',
  task_monitor_migrate_tip: '*目前任務進度查看僅支持： MySQL、Oracle、SQL Server、PostgreSQL和MongoDB',
  task_monitor_unit_row: '單位：/條',
  task_monitor_unit_second: '單位：/秒',
  task_monitor_not_start: '未開始',
  task_monitor_founder: '創建人',
  task_monitor_start: '啟動',
  task_monitor_stop: '停止',
  task_monitor_reset: '重置',
  task_monitor_forced_stop: '強制停止',
  task_monitor_total_output: '總輸出',
  task_monitor_total_input: '總輸入',
  task_monitor_total_insert: '總插入',
  task_monitor_total_update: '總更新',
  task_monitor_total_delete: '總刪除',
  task_monitor_execution_time: '本次執行時間',
  task_monitor_end_time: '本次結束時間',
  task_monitor_cdc_time: '增量所處時間點',
  task_monitor_run_log: '運行日誌',
  task_monitor_run_connection: '連接',
  task_monitor_history_run_record: '歷史運行記錄',
  task_monitor_mission_milestone: '任務里程碑',
  task_monitor_no_milestone_data: '此任務尚未啟動或已被重置，暫無運行里程碑數據',
  task_monitor_task_details: '任務詳情',
  task_monitor_status: '狀態',
  task_monitor_sync_content: '同步內容',
  task_monitor_source_info: '源端信息',
  task_monitor_node_name: '節點名稱',
  task_monitor_owned_library: '所屬庫',
  task_monitor_database_addr: '數據庫地址',
  task_monitor_database_type: '數據庫類型',
  task_monitor_target_info: '目標端信息',
  task_monitor_topic_name: '主題名稱',
  task_monitor_topic_expressionL: '主題表達式',
  task_monitor_migration_task: '遷移任務',
  task_monitor_sync_task: '同步任務',

  task_info_start_time: '開始時間',
  task_info_start: '啟動',
  task_info_stopt: '停止',
  task_info_data_screening: '事件統計',
  task_info_input_output: '輸入輸出統計',
  task_info_throughputpop: '輸入輸出統計: 平均每秒源端數據採集的速度以及目標端寫入的速度，數值越大越好',
  task_info_overview: '概覽',
  task_info_plan: '計劃',
  task_info_table_number: '表數量',
  task_info_completed: '已完成',
  task_info_expected: '預計',
  task_info_completed_time: '完成時間',
  task_info_info: '詳情',
  task_info_synced: '已同步',
  task_info_task_stopped: '任務已停止',
  task_info_progress: '進行中',
  task_info_stopped: '已停止',
  task_info_s: '秒',
  task_info_m: '分鐘',
  task_info_h: '小時',
  task_info_d: '天',
  task_info_fully_completed: '全量已完成',
  task_info_task_init: '任務初始化',
  task_info_task_structure: '結構遷移',
  task_info_task_cdc: '增量同步',
  task_info_input: '輸入',
  task_info_output: '輸出',
  task_info_log_placeholder: '請輸入日誌內容',
  task_info_no_more: '沒有更多了',
  task_info_source_database: '源數據庫',
  task_info_target_database: '目標數據庫',
  task_info_cdc_time: '增量所處時間點',
  task_info_source_table: '源數據表',
  task_info_data_row: '數據量（行）',
  task_info_target_table: '目標數據表',
  task_info_amount_sync_data: '已完成同步數據量（行）',
  task_info_schedule: '進度',
  task_info_table_name: '表名稱',
  task_info_milestone: '里程碑',
  task_info_error: '錯誤',
  task_info_forced_stop_task: '強制停止任務',
  task_info_running_time: '運行時間',
  task_info_operator: '操作者',
  task_info_operator_content: '操作內容',
  task_info_connection_test: '測試',

  task_setting_sync_type: '同步類型',
  task_setting_initial_sync: '全量同步',
  task_setting_cdc: '增量同步',
  task_setting_initial_sync_cdc: '全量 + 增量同步',
  task_setting_initial_sync_tip:
    '全量同步也稱初始化同步，即在任務啟動時刻將源端數據快照讀取，並同步至目標端；該同步有更新寫入、刪除重寫兩種模式。 ',
  task_setting_cdc_tip:
    '增量同步是指從任務啟動時刻對存儲的源端變化的日誌進行採集和分析，有序的將數據變化同步至目標端，支持增刪改操作。 ',
  task_setting_initial_sync_cdc_tip: '選擇全量+增量同步模式，任務會在全量同步執行結束後自動進入增量同步狀態。 ',
  task_setting_full_write_mode: '全量寫入模式',
  task_setting_update_write_mode: '更新寫入模式',
  task_setting_remoive_rewrite_mode: '刪除重寫模式',
  task_setting_update_write_mode_tip: '更新寫入模式會判斷源端的每條數據在目標端是否存在，若存在則更新，不存在則新增。 ',
  task_setting_remoive_rewrite_mode_tip:
    '刪除重寫模式會先將目標表的數據清空，再將源端數據全部同步至目標端，能保證源端和目標端的數據完全一致。 ',
  task_setting_read_number: '每次讀取數量',
  task_setting_read_number_cannot_empty: '每次讀取數量不能為空，默認是1000',
  task_setting_read_number_ranges: '每次讀取數量取值範圍 1 ~ 10000',
  task_setting_read_number_only_number: '每次讀取數量只能為數字',
  task_setting_stop_on_error: '遇到錯誤停止',
  task_setting_incremental_concurrency_switch: '是否開啟增量並發',
  task_setting_incremental_concurrency: '增量並發數',
  task_setting_incremental_concurrency_cannot_empty: '增量並發數不能為空，默認是8',
  task_setting_incremental_concurrency_only_number: '增量並發數只能為數字',
  task_setting_no_primary_sync_switch: '是否無主鍵同步',
  task_setting_two_way_switch: '是否雙向',
  task_setting_automatic_ddl: '自動DDL',
  task_setting_automatic_ddl_tip: '自動DDL操作支持字段和索引的重命名以及新增、刪除、更新等操作',
  task_setting_automatic_index: '自動創建索引',

  task_name: '任務名稱',
  task_status: '任務狀態',
  task_sync_type: '任務同步類型',
  task_create_task: '創建任務',
  task_button_pause: '暫停',
  task_button_recover: '恢復',
  task_button_start: '啟動', // 停止 編輯 子任務
  task_button_stop: '停止',
  task_button_reset: '重置',
  task_button_force_stop: '強制停止',
  task_button_edit: '編輯',
  task_details_sub_task: '子任務',
  task_details_desc: '描述', // 描述 啟動 強制停止 停止 編輯 子任務
  task_details_running_statistics: '運行統計', // 描述 啟動 強制停止 停止 編輯 子任務
  task_job_link_type_table_tips: 'Table暫不支持外鍵複製',
  task_job_link_type_view_tips:
    '複製view時暫不支持設置字段映射，勾選此項下方字段映射功能會被禁用，已設置的字段映射將會被重置',
  task_job_link_confirm_message_rollback:
    '複製view時暫不支持設置字段映射，勾選此項下方字段映射功能會被禁用，已設置的字段映射將會被重置，是否確認勾選？ ',
  task_setting_oracle_custom_analysis: 'OracleSQL自定義解析',

  // 函数管理
  function_tips_empty: '代碼缺少JS函數',
  function_button_create_custom_function: '創建函數',
  function_button_import_jar: '導入jar包',
  function_button_edit_function: '編輯函數',
  function_details: '函數詳情',
  function_tips_name_repeat: '函數名稱重複',
  function_button_code_format: '格式化代碼',
  function_last_update_label: '更新時間',
  function_parameters_label: '參數',
  function_type_label: '函數類型',
  function_type_option_custom: '自定義函數',
  function_type_option_jar: '第三方jar包',
  function_type_option_system: '系統函數',
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
  function_jar_file_label: 'jar文件',
  function_package_name_label: '包名',
  function_package_name_placeholder: '請輸入包名',
  function_class_name_label: '類名',
  function_method_name_label: '方法名',
  function_script_label: '代碼詳情',
  function_script_empty: '請輸入函數代碼',
  function_script_missing_function_name: '缺少函數名',
  function_script_missing_function_body: '缺少函數體',
  function_script_format_error: '函數格式不正確',
  function_script_only_one: '只允許創建一個函數',
  function_import_list_title: '函數列表',
  function_button_load_function: '加載函數',
  function_message_load_function_fail: '加载函數失败',
  function_dialog_setting_title: '函數设置',
  function_message_function_empty: '請上傳jar包文件並加載函數',
  function_message_delete_title: '刪除函數',
  function_message_delete_content: '刪除可能會導致已調用該函數的任務報錯，確定刪除該函數嗎？',
  function_tips_max_size: '最大',

  // 用户
  login_fail_too_many: '密碼錯誤達到最大次數，請於10分鐘再登錄',
  // 解決方案
  solution_name: '解決方案',
  solution_customer_job_logs: '客戶任務日誌',
  solution_error_code: '錯誤碼',
  solution_select_placeholder_type: '請選擇類型',
  solution_search_result: '結果',
  solution_search_desc: '描述',
  solution_search_solutions: '解決方案',
  // 客戶日誌
  customer_logs_to_solutions: '查看解決方案',
  customer_logs_to_link: '查看數據庫錯誤幫助頁面',
  customer_logs_no_more_data: '沒有更多數據',
  customer_logs_no_search_data: '無搜索結果',
  customer_logs_copy_result: '已復製到剪貼板'
}
