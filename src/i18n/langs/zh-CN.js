export default {
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

  taskprogress_plan_sync_table_num: '计划同步表数量',
  taskprogress_completed_sync_table_num: '已完成同步表数量',
  taskprogress_plan_sync_data: '计划同步数据量（行）',
  taskprogress_completed_sync_data: '已完成同步数据量（行）',
  taskprogress_current_sync: '各库当前同步情况',
  taskprogress_full_sync_progress: '全量同步进度',

  // 任务设置
  task_settings_cdc_sync_point_date: '【任务设置】增量采集开始时刻，请选择时间',

  // 公共区
  menu_help: '帮助',
  button_copy: '复制',
  button_delete: '删除',
  button_details: '详情',
  button_preview: '预览',
  button_reload: '重新加载schema',
  button_ok: '确定',
  button_save: '保存',
  button_edit: '编辑',
  button_restart: '重启',
  button_startUp: '启动',
  button_close: '关闭',
  button_filter: '筛选',
  button_search: '搜索',
  button_query: '查询',
  button_back: '返回',
  button_reset: '重置',
  button_create: '创建',
  button_export: '导出',
  button_import: '导入',
  button_download: '下载',

  query_fuzzy: '模糊匹配',
  query_precise: '精准匹配',

  message_delete_ornot: '是否删除',
  message_save_ok: '保存成功',
  message_save_fail: '保存失败',
  message_create_ok: '创建成功',
  message_create_fail: '创建失败',
  message_copy_success: '复制成功',
  message_copy_fail: '复制失败',
  message_delete_ok: '删除成功',
  message_delete_fail: '删除失败',
  message_deleting: '删除中',
  message_reload_ok: '正在重新加载',

  operator: '操作',

  // dialog按钮
  dialog_button_cancel: '取 消',
  dialog_button_confirm: '确 定',
  dialog_button_save: '保 存',
  dialog_button_delete: '删 除',

  // api发布
  modules_all: '全部',
  modules_active: '已发布',
  modules_pending: '未发布',
  modules_create: '创建 API',
  modules_export: '导出',
  modules_import: '导入',
  modules_api_test: 'API 文档及测试',
  modules_publish_api: '发布 API',
  modules_unpublish_api: '取消发布 API',
  modules_edit: '编辑',

  modules_header_api_name: 'API名称',
  modules_header_dataSource: '数据源',
  modules_header_tablename: '表名称',
  modules_header_status: '状态',
  modules_header_basePath: '基础路径',
  modules_header_version: '版本',
  modules_header_classifications: '分类',
  modules_header_username: '创建者',
  modules_header_last_updated: '更新时间',
  modules_header_operator: '操作',

  modules_status_starting: '正在启动',
  modules_status_running: '运行中',
  modules_status_restart: '更新中',
  modules_status_deploy_fail: '发布API失败',
  modules_status_exit: '已退出',
  modules_status_stop: '已停止',
  modules_status_ready: '有效',
  modules_status_invalid: '无效',
  modules_allacancel: '批量取消',
  modules_allarelease: '批量发布',
  modules_releasefb: '你确定要批量发布以下API吗?',
  modules_releasecancel: '你确定要批量取消以下API吗?',
  modules_apiServerStatus: 'API 服务状态',
  modules_sure: '你确定要',
  modules_cancel_failed: '取消发布API失败',

  module_form_connection: '数据库',
  module_form_tablename: '表名称',
  module_form_version: '版本',
  module_form_name: '名称',
  module_form_api_name: 'API名称',
  module_form_describtion: '描述',
  module_form_set_mode: '设置方式',
  module_form_default_Api: '默认CURD API',
  module_form_customer_Api: '自定义API',
  module_form_noPath: '请添加路径',
  module_form_distinction: '路径区分',
  module_form_prefix: '前缀',
  module_form_basePath: '基础路径',
  module_form_path: '路径',
  module_form_security: '权限设置',
  module_form_edit: '编辑',
  module_form_document: 'API 文档',
  module_form_tags: '数据目录',
  module_form_preview: '数据预览',
  module_form_public_api: '公共的',
  module_form_private_api: '私有的',
  module_form_available_query_field: '可用查询字段',
  module_form_required_query_field: '必须的查询条件',
  module_form_validator_name: '只能包含中文、字母、数字、下划线和美元符号,并且数字不能开头',
  module_form_validator_base_path: '基础路径长度最大30',
  module_form_create_a_new_record: '创建新记录',
  module_form_get_record_by_id: '根据id获取记录',
  module_form_update_record_by_id: '根据id更新记录',
  module_form_delete_record_by_id: '根据id删除记录',
  module_form_get_record_list_by_page_and_limit: '分页获取记录',
  module_form_method: '方法',
  module_form_fields: '字段',
  module_form_datatype: '数据类型',
  module_form_condition: '过滤条件',
  module_form_no_server_preview_api: '没有 API 服务器预览 API 文档.',
  module_form_get_api_uri_fail: '获取 API Server Uri 失败',

  query_build_match: '匹配',
  query_build_condition: '条件',
  query_build_all: '全部',
  query_build_any: '任意',
  query_build_addGroup: '添加组',
  query_build_removeGroup: '删除组',
  query_build_addCondition: '添加条件',
  query_build_removeCondition: '删除条件',
  query_build_show_filter: '显示过滤条件',
  query_build_queryValue: '字段值',
  query_build_add: '添加',
  query_build_remove: '删除',
  query_build_selectField: '选择字段',

  // 客户端
  application_header_id: '客户端ID',
  application_header_client_name: '客户端名称',
  application_header_grant_type: '授权类型',
  application_header_client_secret: '客户端密钥',
  application_header_redirect_uri: '重定向URI',
  application_header_scopes: '权限范围',
  application_generator: '生成',
  application_show_menu: '显示到菜单',
  application_scopes_tip: '多个权限范围使用逗号分割',
  application_true: '是',
  application_false: '否',
  application_create: '创建客户端',

  // api统计
  api_asnalysis_header_api: 'API',
  api_asnalysis_header_method: '方法',
  api_asnalysis_header_url: '地址',
  api_asnalysis_header_users: '用户数',
  api_asnalysis_header_calls: '调用次数',
  api_asnalysis_header_lastTime: '最后调用',
  api_asnalysis_header_rows: '返回行数',
  api_asnalysis_header_in_bytes: '流入',
  api_asnalysis_header_out_bytes: '流出',
  api_asnalysis_header_sum_res_timespan: '总运算时间（秒）',
  api_asnalysis_header_avg_res_timespan: '平均响应时间（毫秒）',
  api_asnalysis_total: '统计',
  api_asnalysis_name: '名称',

  // api服务器
  api_server_name: '名称',
  api_server_user: '用户',
  api_server_process_id: 'API 服务器唯一标识',
  api_server_client_name: ' API 服务器名称',
  api_server_client_uri: 'API 服务器访问地址',
  api_server_download: '下载',
  api_server_download_API_Server_config: '下载API配置文件',
  api_server_no_available: '没有可用API服务器',

  // api浏览
  dataExplorer_collection_required: '请选择API',
  dataExplorer_zone: '时区设置',
  dataExplorer_api_server: 'API 服务器',
  dataExplorer_collection: 'API',
  dataExplorer_query: '查询',
  dataExplorer_document: 'API 文档',
  dataExplorer_query_time: '查询使用',
  dataExplorer_render_time: '渲染使用',
  dataExplorer_tag_title: '设置标签',
  dataExplorer_show_column: '显示列',
  dataExplorer_document_sql: '请输入SELECT语句：',
  dataExplorer_document_required: '不能为空',
  dataExplorer_format_sql: '格式化SQL',
  dataExplorer_new_document: '新增记录',
  dataExplorer_query_field: '查询字段',
  dataExplorer_query_command: '查询命令',
  dataExplorer_timeout: '超时时间',
  dataExplorer_unauthenticated: '您无权访问API。',
  dataExplorer_message_timeout: '连接API服务器超时,请检查API服务器是否已启动。',
  dataExplorer_publish: '在API服务器上没有找到 {id} 的API，请检查是否已发布。',
  dataExplorer_no_permissions: '您的令牌已过期，请刷新页面重试。',
  dataExplorer_zone_setting: '时区设置',
  dataExplorer_datetype_without_timezone: '时间类型的时区（可选）',
  dataExplorer_mysql_datetype_without_timezone: '影响的类型：DATETIME',
  dataExplorer_file_type: '选择文件类型',
  dataExplorer_add_favorite: '收藏',
  dataExplorer_format: '格式化代码',
  dataExplorer_exists: '已存在',
  // 数据源
  connection_form_tidb_server: 'TiDB地址',
  connection_tidb_none_server: 'TiBD地址不能为空',

  connection_list_column_schema_status: 'Schema加载状态',
  connection_list_column_schema_status_tips: 'Schema加载完成的连接才可以正常创建任务',

  // 路由名
  app_menu_jsFuncs: '函数',

  // 函数
  js_func_name: '函数名',
  js_func_parameters: '参数',
  js_func_function_body: '函数体',
  js_func_last_update: '更新时间',
  js_func_create: '创建',
  js_func_function_name_repeat: '方法名称重复',
  js_func_dialog_format: '格式化代码',
  js_func_dialog_code: 'Javascript函数代码',
  js_func_dialog_Linenumbers: '显示行号',
  js_func_dialog_nofunctions: '代码缺少JS函数',
  js_func_dialog_create_title: '新增记录',
  js_func_dialog_edit_title: '更新记录',
  js_func_delete_remind: '确定要删除函数',

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

  //任务编辑
  dag_data_node_label_clickhouse: 'ClickHouse节点',
  dag_data_node_label_aggregate_filter: '过滤器',
  // 缓存节点提示
  task_job_setting_tip_title: '设置提醒',
  task_job_tip_text: '该缓存节点(xxx)的设置已存在于任务(###)中，请确认是否还继续创建？'
}
