export default {
  // 通用提示
  tips_not_null: '值不能为空',
  tips_must_number: '值必须为数字',
  // 通用下拉框
  select_option_all: '全部',

  // 通用消息
  message_title_prompt: '提示',
  message_delete_confirm: '是否删除',

  // 表格
  column_operation: '操作',

  // 菜单标题
  menu_title_function: '函数管理',
  menu_title_dashboard: '控制台',
  menu_title_connections: '数据源',
  menu_title_dataSync: '数据同步',
  menu_title_dataTransmission: '数据传输',
  menu_title_dataFlows: '数据采集',
  menu_title_dataFlowsAll: '全部任务',
  menu_title_dataFlowsRunning: '运行中任务',
  menu_title_dataFlowsError: '出错任务',
  menu_title_dataFlowsPaused: '已暂停任务',
  menu_title_dataFlowsDraft: '编辑中任务',
  menu_title_dataGovernance: '数据治理',
  menu_title_metadataDefinition: '元数据管理',
  menu_title_metadata: '数据目录',
  menu_title_metadataSearch: '元数据检索',
  menu_title_dataQuality: '数据质量',
  menu_title_timeToLive: '生命周期管理',
  menu_title_dataMap: '数据地图',
  menu_title_dataRules: '数据规则',
  menu_title_dictionary: '字典模板',
  menu_title_dataPublish: '数据发布',
  menu_title_modules: 'API 发布',
  menu_title_dataExplorer: 'API 数据浏览',
  menu_title_apiDocAndTest: 'API 文档及测试',
  menu_title_apiAnalysis: 'API 统计分析',
  menu_title_applications: 'API 客户端',
  menu_title_apiServers: 'API 服务器',
  menu_title_dataCollect: '数据采集(旧版)',
  menu_title_system: '系统管理',
  menu_title_tasks: '调度任务',
  menu_title_taskHistories: '调度历史',
  menu_title_agentdownload: '代理下载',
  menu_title_clusterManagement: '集群管理',
  menu_title_agentManagement: 'Agent管理',
  menu_title_agents: '进程管理',
  menu_title_serversOversee: '运维',
  menu_title_users: '用户管理',
  menu_title_journal: '用户操作日志',
  menu_title_roles: '角色管理',
  menu_title_settings: '系统设置',
  menu_title_favorite: '我的收藏',
  menu_title_dataVerification: '数据校验',
  menu_title_delFavMenu: '删除收藏',
  menu_title_license: 'License管理',
  menu_title_licenseBefore: '提醒：License剩余 ',
  menu_title_licenseAfter: ' 天到期',
  menu_title_licenseAfterOneDay: ' 天到期',
  menu_title_licenseDate: 'license到期时间',
  menu_title_dataFlowsCustom: '数据同步',
  menu_title_dataFlowsClusterClone: '数据库迁移',
  menu_title_topology: '网络拓扑',
  menu_title_sharedMining: '共享挖掘',

  gl_button_update_success: '修改成功',
  gl_see_more: '查看更多',
  gl_no_data: '暂无数据',
  gl_no_match_result: '没有查到符合条件的结果',
  gl_back_to_list: '返回列表',
  gl_placeholder_select: '请选择',
  gl_placeholder_input: '请输入',

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
  verify_form_source_filter: '源表数据过滤',
  verify_form_target_filter: '目标表数据过滤',
  verify_checking: '校验中...',
  verify_message_error_joint_table_not_set: '请添加校验条件',
  verify_message_error_joint_table_target_or_source_not_set: '校验条件中源表或目标表未选择',
  verify_message_error_joint_table_field_not_set: '校验条件中源表或目标表的索引字段未选择',
  verify_message_error_joint_table_field_not_match: '校验条件中源表与目标表的索引字段个数不相等',
  verify_message_error_script_no_enter: '开启高级校验后，JS校验逻辑不能为空',
  verify_message_confirm_delete_script: '确定要删除自定义JS校验逻辑吗',
  verify_message_confirm_back: '此操作会丢失当前正在创建（编辑）的校验任务',
  verify_message_title_confirm_back: '是否放弃创建（编辑）校验任务？',

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
  button_edit: '编辑',
  button_confirm: '确定',
  button_cancel: '取消',
  button_back: '返回',
  button_save: '保存',
  button_check: '查看',
  button_delete: '删除',
  button_setting: '设置',
  button_reduction: '还原',
  button_copy: '复制',
  button_details: '详情',
  button_preview: '预览',
  button_reload: '重新加载schema',
  button_ok: '确定',
  button_restart: '重启',
  button_startUp: '启动',
  button_close: '关闭',
  button_filter: '筛选',
  button_search: '搜索',
  button_query: '查询',
  button_reset: '重置',
  button_create: '创建',
  button_export: '导出',
  button_import: '导入',
  button_download: '下载',
  button_button: '新增',

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
  module_form_duplication_name: '名称重复',

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
  // api文档及测试
  file_test_generate_code: '生成代码',
  // 数据源
  connection_form_tidb_server: 'PDServer 地址',
  connection_tidb_none_server: 'PDServer 地址不能为空',

  connection_list_column_schema_status: 'Schema加载状态',
  connection_list_column_schema_status_tips: 'Schema加载完成的连接才可以正常创建任务',

  // 连接管理
  connection_form_creat_connection: '创建连接',
  connection_form_edit_connection: '编辑连接',
  connection_form_data_source: '数据源',
  connection_form_data_source_type: '数据源类型',
  connection_form_database_address: '数据库地址',
  connection_form_change: '更换',
  connection_form_rename: '改名',
  connection_form_database_owner_tip: '逗号分割的表达式列表，使用 * 代表任意长度任意字符',
  connection_form_connection_type: '连接类型',
  connection_form_source_and_target: '源头和目标',
  connection_form_source: '源头',
  connection_form_target: '目标',
  connection_form_source_and_target_tip: '此数据连接在Tapdata 中能同时作为源和目标使用',
  connection_form_source_tip: '此数据连接在Tapdata 中只能作为源使用，不能作用为目标',
  connection_form_target_tip: '此数据连接在Tapdata 中只能作为目标使用，不能作用为源',
  connection_form_host: '数据库地址',
  connection_form_port: '端口',
  connection_form_connection_name: '连接名称',
  connection_form_user_name: '账号',
  connection_form_password: '密码',
  connection_form_shared_mining: '共享挖掘',
  connection_form_shared_mining_tip: '共享挖掘开启，您可在任务列表中管理共享挖掘任务',

  connection_form_mq_type: 'MQ类型',
  connection_form_mq_topic_set: '主题名称',
  connection_form_mq_queue_set: '队列名称',
  connection_form_mq_broker_url: 'MQ连接串',
  connection_form_mq_database_host: 'MQ地址',
  connection_form_mq_database_port: 'MQ端口',
  connection_form_mq_route_key_field: '消息路由',
  connection_form_mq_virtual_host: '虚拟主机',
  connection_form_mq_producer_group: '生产者组',
  connection_form_mq_consumer_group: '消费者组',
  connection_form_mq_queue_tip: '多个队列用逗号隔开',
  connection_form_mq_topic_tip: '多个主题用逗号隔开',
  connection_form_mq_broker_url_tip: '示例tcp://127.0.0.1:61616,支持tcp,nio,udp,ssl,http(s)',

  connection_form_custom_connection_connection_time_out: '连接超时(秒)',
  connection_form_custom_connection_read_time_out: '读取超时(秒)',
  connection_form_custom_connection_before_operate: '前置操作',
  connection_form_custom_connection_after_operate: '后置操作',

  connection_redis_valid: '开启认证',

  connection_hana_label_hana_type: '租户模式',
  connection_form_hana_file_schema_tip: '如果匹配的文件具有相同结构，请指定一个通用名',

  connection_kafka_kerberos_attest: 'kerberos 认证',
  connection_kafka_kerberos_config_keytab: '密钥表示文件',
  connection_kafka_kerberos_config_conf: '配置文件',
  connection_kafka_kerberos_body_config: '主体配置',
  connection_kafka_kerberos_service_name: '服务名',
  connection_kafka_kerberos_tip: '需要在 Engine 所在主机 /etc/hosts 配置实例名映射',
  connection_kafka_kerberos_none_keytab: '密钥表示文件不能为空',
  connection_kafka_kerberos_none_conf: '配置文件不能为空',
  connection_kafka_encryption: '加密方式',
  connection_form_kafka_host_tip: '输入 IP/host:port , 多个地址以逗号隔开',
  connection_form_kafka_lonore_format_tip: '如果开启则遇到解析异常会忽略该消息，否则停止拉取消息',
  connection_form_kafka_ignore_push_error_tip: '如果开启则忽略该次推送的消息(存在消息丢失)，否则停止推送消息',
  connection_form_route_key_field: '消息路由',
  connection_form_broker_url: 'MQ连接串',
  connection_form_kafka_ignore_push: '忽略推送消息异常',
  connection_form_kafka_compression_type: '消息压缩类型',
  connection_form_kafka_ack: 'ACK 确认机制',
  connection_form_kafka_ignore_invalid: '忽略非JSON Object格式消息',
  connection_form_kafka_pattern_topic: '主题表达式',
  // 连接
  connection_manage: '连接管理',
  connection_title: '数据源管理 ',
  connection_list_form_task_status: '任务状态',
  connection_list_form_sync_type: '同步类型',
  connection_list_form_database_type: '数据库类型',
  connection_list_form_all_status: '全部状态',
  connection_list_form_search: '按连接名搜索',
  connection_list_name: '连接名',
  connection_list_status: '状态',
  connection_list_schema_load_progress: 'Schema加载进度',
  connection_list_type: '连接类型',
  connection_list_source: '源头',
  connection_list_target: '目标',
  connection_list_source_and_target: '源头和目标',
  connection_list_change_time: '修改时间',
  connection_list_operate: '操作',
  connection_list_test: '连接测试',
  connection_list_edit: '编辑',
  connection_list_copy: '复制',
  connection_list_delete: '删除',
  connection_list_test_failed: '测试连接失败',
  connection_list_task_occupied: '此连接被任务所占用，无法删除',
  connection_list_delete_failed: '删除失败',
  connection_list_delete_success: '删除成功',
  connection_list_copy_success: '复制成功',
  connection_list_copy_failed: '复制失败，原因：系统设置中 "连接设置 - 允许创建重复数据源" 被设置为 "false"',
  connection_list_delete_connection: '删除连接',
  connection_list_delete_connection_tip: ' 后，此连接将无法恢复',
  connection_list_delete_connection_title: '是否删除该连接？',
  connection_list_all_status: '全部状态',
  connection_list_efficient: '有效',
  connection_list_invalidation: '失效',
  connection_list_testing: '测试中',
  connection_list_desc:
    '数据源包括数据库、结构化文件、应用程序RESTful API、自定义接口等类型，必须先创建数据源才能创建迁移或同步任务。更多配置说明，请点击',
  connection_list_help_doc: '帮助文档',

  connection_form_database_name: '数据库名称',
  connection_form_database_username: '账号',
  connection_form_database_password: '密码',
  connection_form_additional_string: '其他连接串参数',
  connection_form_timezone: '时间类型的时区',
  connection_form_virtual_host: '虚拟主机',
  connection_form_connection_name_placeholder: '请输入连接名称',
  connection_form_coming_soon: '即将上线',
  connection_form_impact_type: '影响类型: DATE',
  connection_form_database_host_placeholder: '请输入数据库地址',
  connection_form_database_host_tips: '数据库地址(127.0.0.1/Domain:{端口},多个地址请用,分开)',
  connection_form_name_rules: '以中英文开头，1-100个字符，包括中英文，数字，中划线，下划线，空格',
  connection_form_no_name: '连接名不能为空',
  connection_form_name_exists: '名字已经存在',

  connection_form_kudu_host_tip: 'IP地址:端口; 支持多个; 用 , 分割',

  connection_form_hazecast_rename: '重命名',
  connection_form_hazecast_cancel: '取消',
  connection_form_hazecast_save: '保存',
  connection_form_hazecast_connection_type: '连接类型',
  connection_form_hazecast_connection_test: '连接测试',
  connection_form_hazecast_create: '创建连接',
  connection_form_hazecast_edit: '编辑连接',
  connection_form_hazecast_data_source: '数据源',
  connection_form_hazecast_data_source_type: '数据源',
  connection_form_hazecast_change: '改变',
  connection_form_hazecast_no_name: '连接名称不能为空',
  connection_form_hazecast_cluster_name_empty: 'Cluster名称不能为空',
  connection_form_hazecast_token_empty: 'token不能为空',
  connection_form_hazecast_name_exists: '名称已存在',
  connection_form_hazecast_give_up: '放弃',
  connection_form_hazecast_confirm_edit: '此操作将丢失当前编辑内容',
  connection_form_hazecast_confirm_create: '此操作将丢失当前正在创建的连接',
  connection_form_hazecast_confirm_create_content: '你想放弃连接的创建吗？', //是否放弃创建该连接？
  connection_form_hazecast_confirm_edit_content: '你想放弃修改内容吗？', //是否放弃修改内容？
  connection_form_hazecast_connection_name: '连接名称',
  connection_form_hazecast_connection_name_placeholder: '请输入连接名称',
  connection_form_hazecast_options_target: '目标',
  connection_form_hazecast_options_target_tips: '这个数据连接在Tapdata中只能作为目标，不能作为源',
  connection_form_hazecast_database_name: 'Cluster名称', //集群名称
  connection_form_hazecast_plain_password: '令牌',
  connection_form_hazecast_ssl: 'Enable SSL', //是否开启ssl
  connection_form_hazecast_sslKey: '密钥存储文件',
  connection_form_hazecast_sslCA: '信任密钥存储文件',
  connection_form_hazecast_sslPass: '密钥文件密码',
  connection_form_hazecast_none_sslKey: '密钥库文件不能为空',
  connection_form_hazecast_none_sslCA: '信任密钥存储文件不能为空',
  connection_form_hazecast_cluster_name_placeholder: '请输入Cluster名称',
  connection_form_hazecast_token_placeholder: '请输入Token',
  connection_form_give_up: '放弃',
  connection_form_confirm_edit: '此操作将丢失当前编辑内容',
  connection_form_confirm_create: '此操作将丢失当前正在创建的连接',
  connection_form_confirm_create_content: '你想放弃连接的创建吗？', //是否必须放弃创建该连接？
  connection_form_confirm_edit_content: '要放弃修改内容吗？', //是否放弃修改内容？

  connection_form_tidb_none_server: 'PDServer 地址不能为空',
  connection_form_mongo_standard_mode_tip:
    '此模式将连接网络中的单独服务器，该服务器提供到数据库的TSL/SSL通道。如果您的数据库位于不可访问的子网中，则可尝试使用此方法',

  connection_test_schema_tips: '可能原因：Schema大小写设置有问题，您可尝试修改大小写后重试',
  connection_oracle_config_share_log_switch: '共享挖掘',

  connection_preview_load_schema: '加载Schema',
  connection_preview_edit: '编辑',
  connection_preview_test: '连接测试',
  connection_preview_no_sure: '不确认',
  connection_preview_master_partition: '仅写入master分区',
  connection_preview_isr_partition: '写入所有ISR分区',
  connection_preview_operation_success: '操作成功',

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
  dag_link_button_custom_script: '自定义处理脚本',
  dag_data_node_hana_hana_check: 'Hana作为源仅支持全量任务',
  dag_data_node_label_hazelcast: 'Hazelcast Cloud节点',
  dag_data_setting_expression: '表达式：',
  dag_data_setting_explanation: '可以通过cron表达式设置固定时间、日期、间隔下运行定期任务',
  dag_data_setting_grammar: '语法:',
  dag_data_setting_second: '秒',
  dag_data_setting_minute: '分钟',
  dag_data_setting_hour: '小时',
  dag_data_setting_day: '日',
  dag_data_setting_month: '月',
  dag_data_setting_week: '星期',
  dag_data_setting_year: '年',
  dag_data_setting_example: '例子:',
  dag_data_setting_runMinute: '每分钟运行一次',
  dag_data_setting_runDay: '每天2点运行',
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

  // 缓存节点提示
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

  task_list_run: '启动',
  task_list_stop: '停止',
  task_list_force_stop: '强制停止',
  task_list_name: '任务名称',
  task_list_task_type: '任务类型',
  task_list_status: '任务状态',
  task_list_start_time: '启动时间',
  task_list_sync_type: '同步类型',
  task_list_execution_status: '执行状态',
  task_list_search_placeholder: '任务名称/节点名/库名称',
  task_list_status_initializing: '初始化中',
  task_list_status_cdc: '增量中',
  task_list_status_initialized: '初始化完成',
  task_list_status_Lag: '增量滞后',
  task_list_status_all: '全部状态',
  task_list_button_schedule: '定时调度',
  task_list_button_monitor: '运行监控',
  task_list_edit_confirm:
    '已运行过的任务如果编辑时修改了表数量及字段映射提交后若不重置可能导致新配置无法生效，请问您要继续编辑吗?',
  task_list_important_reminder: '重要提醒',

  task_preview_title: '数据库迁移详情',
  task_preview_createUser: '创建人',
  task_preview_sync_type: '任务同步',
  task_preview_id: '任务ID',
  task_preview_createTime: '创建时间',
  task_preview_startTime: '启动时间',
  task_preview_status_error: '错误',
  task_preview_status_edit: '待启动',
  task_preview_status_running: '运行中',
  task_preview_status_stop: '已停止',
  task_preview_status_pause: '暂停',

  task_monitor_progress: '任务进度',
  task_monitor_full_sync: '全量同步概览',
  task_monitor_full_completion_time: '预计全量完成还需时间',
  task_monitor_cdc_overview: '增量同步概览',
  task_monitor_delay: '延迟',
  task_monitor_progress_details: '进度详情',
  task_monitor_cdc_details: '增量详情',
  task_monitor_source_library: '源库',
  task_monitor_time: '时间',
  task_monitor_target_library: '目标库',
  task_monitor_status_statistice: '状态统计',
  task_monitor_migrate_table_number: '计划迁移表数量',
  task_monitor_migrate_table_rows: '计划迁移数据量（行）',
  task_monitor_migrate_table_number_completed: '已完成迁移表数量',
  task_monitor_migrate_table_rows_completed: '已完成迁移数据量（行）',
  task_monitor_migrate_tip: '*目前任务进度查看仅支持： MySQL、Oracle、SQL Server、PostgreSQL和MongoDB',
  task_monitor_unit_row: '单位：/条',
  task_monitor_unit_second: '单位：/秒',
  task_monitor_not_start: '未开始',
  task_monitor_founder: '创建人',
  task_monitor_start: '启动',
  task_monitor_stop: '停止',
  task_monitor_reset: '重置',
  task_monitor_forced_stop: '强制停止',
  task_monitor_total_output: '总输出',
  task_monitor_total_input: '总输入',
  task_monitor_total_insert: '总插入',
  task_monitor_total_update: '总更新',
  task_monitor_total_delete: '总删除',
  task_monitor_execution_time: '本次执行时间',
  task_monitor_end_time: '本次结束时间',
  task_monitor_cdc_time: '增量所处时间点',
  task_monitor_run_log: '运行日志',
  task_monitor_run_connection: '连接',
  task_monitor_history_run_record: '历史运行记录',
  task_monitor_mining_task: '挖掘任务',
  task_monitor_mining_task_name: '挖掘任务名称',
  task_monitor_mining_task_point_time: '挖掘所处时间点',
  task_monitor_mining_task_status: '挖掘状态',
  task_monitor_mission_milestone: '任务里程碑',
  task_monitor_no_milestone_data: '此任务尚未启动或已被重置，暂无运行里程碑数据',
  task_monitor_task_details: '任务详情',
  task_monitor_status: '状态',
  task_monitor_sync_content: '同步内容',
  task_monitor_source_info: '源端信息',
  task_monitor_node_name: '节点名称',
  task_monitor_owned_library: '所属库',
  task_monitor_database_addr: '数据库地址',
  task_monitor_database_type: '数据库类型',
  task_monitor_target_info: '目标端信息',
  task_monitor_topic_name: '主题名称',
  task_monitor_topic_expressionL: '主题表达式',
  task_monitor_migration_task: '迁移任务',
  task_monitor_sync_task: '同步任务',

  task_info_start_time: '开始时间',
  task_info_start: '启动',
  task_info_stopt: '停止',
  task_info_data_screening: '事件统计',
  task_info_input_output: '输入输出统计',
  task_info_throughputpop: '输入输出统计: 平均每秒源端数据采集的速度以及目标端写入的速度，数值越大越好',
  task_info_overview: '概览',
  task_info_plan: '计划',
  task_info_table_number: '表数量',
  task_info_completed: '已完成',
  task_info_expected: '预计',
  task_info_completed_time: '完成时间',
  task_info_info: '详情',
  task_info_synced: '已同步',
  task_info_task_stopped: '任务已停止',
  task_info_progress: '进行中',
  task_info_stopped: '已停止',
  task_info_ms: '毫秒',
  task_info_s: '秒',
  task_info_m: '分钟',
  task_info_h: '小时',
  task_info_d: '天',
  task_info_fully_completed: '全量已完成',
  task_info_task_init: '任务初始化',
  task_info_task_structure: '结构迁移',
  task_info_task_cdc: '增量同步',
  task_info_input: '输入',
  task_info_output: '输出',
  task_info_log_placeholder: '请输入日志内容',
  task_info_no_more: '没有更多了',
  task_info_source_database: '源数据库',
  task_info_target_database: '目标数据库',
  task_info_cdc_time: '增量所处时间点',
  task_info_source_table: '源数据表',
  task_info_data_row: '数据量（行）',
  task_info_target_table: '目标数据表',
  task_info_amount_sync_data: '已完成同步数据量（行）',
  task_info_schedule: '进度',
  task_info_table_name: '表名称',
  task_info_milestone: '里程碑',
  task_info_error: '错误',
  task_info_forced_stop_task: '强制停止任务',
  task_info_running_time: '运行时间',
  task_info_operator: '操作者',
  task_info_operator_content: '操作内容',
  task_info_connection_test: '测试',

  task_setting_sync_type: '同步类型',
  task_setting_initial_sync: '全量同步',
  task_setting_cdc: '增量同步',
  task_setting_initial_sync_cdc: '全量 + 增量同步',
  task_setting_initial_sync_tip:
    '全量同步也称初始化同步，即在任务启动时刻将源端数据快照读取，并同步至目标端；该同步有更新写入、删除重写两种模式。',
  task_setting_cdc_tip:
    '增量同步是指从任务启动时刻对存储的源端变化的日志进行采集和分析，有序的将数据变化同步至目标端，支持增删改操作。',
  task_setting_initial_sync_cdc_tip: '选择全量+增量同步模式，任务会在全量同步执行结束后自动进入增量同步状态。',
  task_setting_full_write_mode: '全量写入模式',
  task_setting_update_write_mode: '更新写入模式',
  task_setting_remoive_rewrite_mode: '删除重写模式',
  task_setting_update_write_mode_tip: '更新写入模式会判断源端的每条数据在目标端是否存在，若存在则更新，不存在则新增。',
  task_setting_remoive_rewrite_mode_tip:
    '删除重写模式会先将目标表的数据清空，再将源端数据全部同步至目标端，能保证源端和目标端的数据完全一致。',
  task_setting_read_number: '每次读取数量',
  task_setting_read_number_cannot_empty: '每次读取数量不能为空，默认是1000',
  task_setting_read_number_ranges: '每次读取数量取值范围 1 ~ 10000',
  task_setting_read_number_only_number: '每次读取数量只能为数字',
  task_setting_stop_on_error: '遇到错误停止',
  task_setting_incremental_concurrency_switch: '是否开启增量并发',
  task_setting_incremental_concurrency: '增量并发数',
  task_setting_incremental_concurrency_cannot_empty: '增量并发数不能为空，默认是8',
  task_setting_incremental_concurrency_only_number: '增量并发数只能为数字',
  task_setting_no_primary_sync_switch: '是否无主键同步',
  task_setting_two_way_switch: '是否双向',
  task_setting_automatic_ddl: '自动DDL',
  task_setting_automatic_ddl_tip: '自动DDL操作支持字段和索引的重命名以及新增、删除、更新等操作',
  task_setting_automatic_index: '自动创建索引',

  task_name: '任务名称',
  task_status: '任务状态',
  task_sync_type: '任务同步类型',
  task_create_task: '创建任务',
  task_button_pause: '暂停',
  task_button_recover: '恢复',
  task_button_start: '启动', // 停止 编辑 子任务
  task_button_stop: '停止',
  task_button_reset: '重置',
  task_button_force_stop: '强制停止',
  task_button_edit: '编辑',
  task_details_sub_task: '子任务',
  task_details_desc: '描述', // 描述 启动 强制停止 停止 编辑 子任务
  task_details_running_statistics: '运行统计', // 描述 启动 强制停止 停止 编辑 子任务
  task_job_link_type_table_tips: 'Table暂不支持外键复制',
  task_job_link_type_view_tips:
    '复制view时暂不支持设置字段映射，勾选此项下方字段映射功能会被禁用，已设置的字段映射将会被重置',
  task_job_link_confirm_message_rollback:
    '复制view时暂不支持设置字段映射，勾选此项下方字段映射功能会被禁用，已设置的字段映射将会被重置，是否确认勾选？',
  task_setting_oracle_custom_analysis: 'OracleSQL自定义解析',
  task_setting_manually_miner_concurrency: '并发挖掘线程数',
  // 函数管理
  function_tips_empty: '代码缺少JS函数',
  function_button_create_custom_function: '创建函数',
  function_button_import_jar: '导入jar包',
  function_button_edit_function: '编辑函数',
  function_details: '函数详情',
  function_tips_name_repeat: '函数名称重复',
  function_checkbox_Line_number: '显示行号',
  function_button_create: '创建',
  function_button_edit: '编辑',
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
  login_fail_too_many: '密码错误达到最大次数，请于10分钟后再登录',
  rule_exists_name: '保存失败，名称重复',

  // 解决方案
  solution_name: '解决方案',
  solution_customer_job_logs: '客户任务日志',
  solution_error_code: '错误码',
  solution_select_placeholder_type: '请选择类型',
  solution_search_result: '结果',
  solution_search_desc: '描述',
  solution_search_solutions: '解决方案',
  // 客户日志
  customer_logs_to_solutions: '查看解决方案',
  customer_logs_to_link: '查看数据库错误帮助页面',
  customer_logs_no_more_data: '没有更多数据',
  customer_logs_no_data: '暂无数据',
  customer_logs_no_search_data: '无搜索结果',
  customer_logs_copy_result: '已复制到剪贴板',

  // 共享挖掘
  share_list_name: '挖掘名称',
  share_list_connection: '所属连接',
  share_list_time_excavation: '挖掘所处时间点',
  share_list_creat_time: '创建时间',
  share_list_setting: '挖掘设置',
  share_list_dig_task_search: '挖掘任务名/连接名搜索',
  share_list_status: '状态',
  share_list_time: '挖掘延迟',
  // share_list_connection_search: '连接名称搜索',
  share_list_edit_title: '挖掘编辑',
  share_form_setting_connection_name: '存储MongoDB连接名称',
  share_form_setting_table_name: '存储MongoDB表名',
  share_form_setting_log_time: '日志保存时长',
  share_form_edit_name: '挖掘名称',
  share_form_edit_dig_time: '日志挖掘时间',
  share_form_edit_localTZ_type: '用户浏览器时区',
  share_form_edit_current_type: '此刻',
  share_form_edit_connTZ_type: '数据库时区',
  share_form_edit_day: '天',
  share_form_edit_title: '是否放弃编辑该挖掘任务',
  share_form_edit_text: '此操作不会保存已修改的内容',
  share_form_edit_give_up: '放弃',

  share_detail_mining_info: '挖掘信息',
  share_detail_name: '挖掘名称',
  share_detail_log_mining_time: '日志挖掘时间',
  hare_detail_log_time: '日志保存时长',
  share_detail_call_task: '调用任务',
  share_detail_source_time: '源库时间点',
  share_detail_sycn_time_point: '同步时间点',
  share_detail_mining_status: '挖掘状态',
  share_detail_button_table_info: '表详情',
  share_detail_statistics_time: '统计时间',
  share_detail_start_time: '开始间',
  share_detail_end_time: '结束时间',
  share_detail_to: '至'
}
