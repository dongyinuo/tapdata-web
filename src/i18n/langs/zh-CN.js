export default {
  // 通用提示
  tips_not_null: '值不能为空',
  tips_must_number: '值必须为数字',

  // 通用按钮
  button_edit: '编辑',
  button_confirm: '确定',
  button_cancel: '取消',
  button_back: '返回',
  button_save: '保存',
  button_check: '查看',
  button_delete: '删除',
  button_setting: '设置',
  button_reduction: '还原',

  // 通用下拉框
  select_option_all: '全部',

  // 通用消息
  message_title_prompt: '提示',
  message_delete_confirm: '是否删除',

  // 表格
  column_operation: '操作',

  // 菜单标题
  menu_title_function: '函数管理',

  // 数据校验
  verify_details_title: '任务校验详情',
  verify_history_title: '任务校验历史',
  verify_diff_history_title: '差异校验历史',
  verify_diff_details_title: '差异校验详情',
  verify_result_title: '校验结果',
  verify_button_diff_verify: '差异校验',
  verify_button_diff_verify_running: '校验中',
  verify_button_diff_verify_tips: '对本次全量校验的差异数据结果进行再次校验，行数差异暂不支持差异校验',
  verify_last_start_time: '最后校验时间',
  verify_button_diff_task_history: '校验历史',
  verify_message_old_data_not_support: '旧数据暂不支持二次校验',
  verify_message_out_of_limit: '您的差异数据量已超出任务支持的最大错误数据保存条数，暂时无法进行二次校验',
  verify_result_count_more: '目标count多: {0}',
  verify_result_count_less: '目标count少: {0}',
  verify_result_content_diff: '表数据差: {0}',
  verify_result_count_inconsistent: '不一致',
  verify_result_count_consistent: '一致',
  verify_result_field_name: '字段名',
  verify_result_source_info: '源信息',
  verify_result_target_info: '目标信息',
  verify_create_window_duration: '窗口时长',

  taskprogress_plan_sync_table_num: '计划同步表数量',
  taskprogress_completed_sync_table_num: '已完成同步表数量',
  taskprogress_plan_sync_data: '计划同步数据量（行）',
  taskprogress_completed_sync_data: '已完成同步数据量（行）',
  taskprogress_current_sync: '各库当前同步情况',
  taskprogress_full_sync_progress: '全量同步进度',

  // 任务设置
  task_settings_cdc_sync_point_date: '【任务设置】增量采集开始时刻，请选择时间',

  // 数据源
  connection_form_tidb_server: 'PDServer 地址',
  connection_tidb_none_server: 'PDServer 地址不能为空',

  connection_list_column_schema_status: 'Schema加载状态',
  connection_list_column_schema_status_tips: 'Schema加载完成的连接才可以正常创建任务',

  connection_form_custom_connection_connection_time_out: '连接超时(秒)',
  connection_form_custom_connection_read_time_out: '读取超时(秒)',
  connection_form_custom_connection_before_operate: '前置操作',
  connection_form_custom_connection_after_operate: '后置操作',
  connection_kafka_kerberos_attest: 'kerberos 认证',
  connection_kafka_kerberos_config_keytab: '密钥表示文件',
  connection_kafka_kerberos_config_conf: '配置文件',
  connection_kafka_kerberos_body_config: '主体配置',
  connection_kafka_kerberos_service_name: '服务名',
  connection_kafka_kerberos_tip: '需要在 Engine 所在主机 /etc/hosts 配置实例名映射',
  connection_kafka_kerberos_none_keytab: '密钥表示文件不能为空',
  connection_kafka_kerberos_none_conf: '配置文件不能为空',
  connection_kafka_encryption: '加密方式',

  connection_hana_label_hana_type: '租户模式',
  // 路由名
  app_menu_jsFuncs: '函数',

  // Dag
  dag_data_node_label_dameng: 'Dameng节点',
  dag_data_node_label_database_link_table: '表名大小写',
  dag_data_node_label_database_link_field: '字段名大小写',
  dag_data_node_label_database_link_unchang: '不变',
  dag_data_node_label_database_link_to_uppercase: '转为大写',
  dag_data_node_label_database_link_to_lowercase: '转为小写',
  dag_data_node_label_memcache_type: '缓存类型',
  dag_data_node_label_memcache_type_all: '全局缓存',
  dag_data_node_label_memcache_type_local: '局部缓存',
  dag_data_node_label_memcache_type_tip: '全局缓存所有任务可引用，局部缓存仅限当前DAG引用。',
  dag_data_node_label_kafka_high_performance_mode: '高性能模式',
  dag_data_node_label_kafka_all: '所有',
  dag_link_button_custom_script: '自定义处理脚本',
  dag_data_node_hana_hana_check: 'Hana作为源仅支持全量任务',
  //字段映射
  dag_link_button_field_mapping: '字段映射',
  dag_link_button_mapping_configuration: '映射配置',
  dag_link_field_mapping_error_no_table: '请选择需要迁移的表',
  dag_link_field_mapping_error_all_deleted: '当前表被删除了所有字段，不允许保存操作',
  dag_link_field_mapping_error_tip: '请先配置目标节点',
  dag_dialog_field_mapping_table_setting: '表设置',
  dag_dialog_field_mapping_tip:
    '用户可以在此页面设置源库每个表要同步的字段，以及在目标库自动建表时对应的字段名称和字段类型',
  dag_dialog_field_mapping_table_rename: '表改名',
  dag_dialog_field_mapping_field_rename: '字段改名',
  dag_dialog_field_mapping_rollback_all: '恢复默认',
  dag_dialog_field_mapping_rollback_field: '恢复默认字段',
  dag_dialog_field_mapping_search_table: '搜索表',
  dag_dialog_field_mapping_loading_schema: '加载中，请稍等...',
  dag_dialog_field_mapping_selected: '已选中',
  dag_dialog_field_mapping_search_field: '搜索字段',
  dag_dialog_field_mapping_source_field: '源表字段名',
  dag_dialog_field_mapping_source_type: '源表类型',
  dag_dialog_field_mapping_source_precision: '源表长度',
  dag_dialog_field_mapping_source_scale: '源表精度',
  dag_dialog_field_mapping_target_field: '目标表字段名',
  dag_dialog_field_mapping_target_type: '目标表类型',
  dag_dialog_field_mapping_target_precision: '目标表长度',
  dag_dialog_field_mapping_target_scale: '目标表精度',
  dag_dialog_field_mapping_operate: '操作',
  dag_dialog_field_mapping_no_data: '暂无数据',
  dag_dialog_field_mapping_range_precision: '长度范围',
  dag_dialog_field_mapping_range_scale: '精度范围',
  dag_dialog_field_mapping_batch_table_name: '批量改表名设置',
  dag_dialog_field_mapping_batch_field_name: '批量改字段名设置',
  dag_dialog_field_mapping_example_prefix: '请输入前缀',
  dag_dialog_field_mapping_example_suffix: '请输入后缀',
  dag_dialog_field_mapping_example_tip: '说明：设置的前后缀也遵循大小写规则',
  dag_dialog_field_mapping_example_origin_table_name: '原表名',
  dag_dialog_field_mapping_example_change: '修改后',
  dag_dialog_field_mapping_example: '示例',
  dag_dialog_field_mapping_tittle_field_name: '修改目标表字段名称',
  dag_dialog_field_mapping_tittle_data_type: '修改目标表字段类型',
  dag_dialog_field_mapping_tittle_precision: '修改目标字段长度',
  dag_dialog_field_mapping_tittle_scale: '修改目标表精度',
  dag_dialog_field_mapping_error_tip: '提示',
  dag_dialog_field_mapping_error_rollback_all: '您确认要全部恢复默认吗',
  dag_dialog_field_mapping_error_rollback: '您确认要全部恢复默认吗',
  dag_dialog_field_mapping_error_range: '当前值不符合该字段范围',
  dag_dialog_field_mapping_error_save_prefix: '检测到您还有',
  dag_dialog_field_mapping_error_save_suffix: '张表的字段类型设置存在问题，请在左侧表区域选择有问题的表进行处理',
  dag_dialog_field_mapping_change_type_field_rename: '类型修改',
  dag_dialog_field_mapping_batch_change_type: '批量修改字段类型',
  dag_dialog_field_mapping_batch_change_type_source: '源字段类型',
  dag_dialog_field_mapping_batch_change_type_target: '目标字段类型',
  dag_dialog_field_mapping_batch_change_type_error_tip: '请先选择需要源表/目标表转换的类型',

  //任务编辑
  dag_data_node_label_clickhouse: 'ClickHouse节点',
  dag_data_node_label_aggregate_filter: '过滤器',

  dag_job_check_source: '作为源仅支持全量任务',
  // 缓存节点提示
  task_job_setting_tip_title: '设置提醒',
  task_job_setting_disable: '不去重',
  task_job_tip_text: '该缓存节点(xxx)的设置已存在于任务(###)中，请确认是否还继续创建？',
  task_job_source_falg: '作为源仅支持全量任务',
  data_flow_automatically: '自动挖掘',
  data_flow_manually: '手动挖掘',
  data_flow_oracle_logminer: 'Oracle日志挖掘模式',
  task_job_link_type_table_tips: 'Table暂不支持外键复制',
  task_job_link_type_view_tips:
    '复制view时暂不支持设置字段映射，勾选此项下方字段映射功能会被禁用，已设置的字段映射将会被重置',
  task_job_link_confirm_message_rollback:
    '复制view时暂不支持设置字段映射，勾选此项下方字段映射功能会被禁用，已设置的字段映射将会被重置，是否确认勾选？',
  task_setting_oracle_custom_analysis: 'OracleSQL自定义解析',

  // 函数管理
  function_tips_empty: '代码缺少JS函数',
  function_button_create_custom_function: '创建函数',
  function_button_import_jar: '导入jar包',
  function_button_edit_function: '编辑函数',
  function_details: '函数详情',
  function_tips_name_repeat: '函数名称重复',
  function_button_code_format: '格式化代码',
  function_last_update_label: '更新时间',
  function_parameters_label: '参数',
  function_type_label: '函数类型',
  function_type_option_custom: '自定义函数',
  function_type_option_jar: '第三方jar包',
  function_type_option_system: '系统函数',
  function_name_label: '函数名称',
  function_name_placeholder: '请输入函数名称',
  function_name_repeat: '函数名称重复',
  function_class_label: '类名',
  function_class_placeholder: '请输入类名，UDF函数的类名，格式为资源名.类名',
  function_file_label: 'jar文件',
  function_button_file_upload: '点击上传',
  function_file_upload_tips: '请上传jar包文件',
  function_file_upload_success: '上传成功',
  function_file_upload_fail: '上传失败',
  function_body_label: '函数体',
  function_body_placeholder: '请输入命令格式，为该UDF的具体使用方法示例',
  function_parameters_describe_label: '参数说明',
  function_parameters_describe_placeholder: '支持输入的参数类型以及返回参数类型的具体说明',
  function_return_value_label: '返回值',
  function_return_value_placeholder: '请输入返回值',
  function_describe_label: '描述',
  function_describe_placeholder: '请输入描述',
  function_format: '命令格式',
  function_format_placeholder: '请输入命令格式',
  function_jar_file_label: 'jar文件',
  function_package_name_label: '包名',
  function_package_name_placeholder: '请输入包名',
  function_class_name_label: '类名',
  function_method_name_label: '方法名',
  function_script_label: '代码详情',
  function_script_empty: '请输入函数代码',
  function_script_missing_function_name: '缺少函数名',
  function_script_missing_function_body: '缺少函数体',
  function_script_format_error: '函数格式不正确',
  function_script_only_one: '只允许创建一个函数',
  function_import_list_title: '函数列表',
  function_button_load_function: '加载函数',
  function_message_load_function_fail: '加载函数失败',
  function_dialog_setting_title: '函数设置',
  function_message_function_empty: '请上传jar包文件并加载函数',
  function_message_delete_title: '删除函数',
  function_message_delete_content: '删除可能会导致已调用该函数的任务报错，确定删除该函数吗？',
  function_tips_max_size: '最大',

  // 用户
  login_fail_too_many: '密码错误达到最大次数，请于10分钟后再登录'
}
