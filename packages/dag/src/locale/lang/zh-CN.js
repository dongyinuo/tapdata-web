export default {
  packages_dag_dialog_tableValidateTip:
    '新建表名称仅支持英文、数字、下划线、点、减号，并以英文字母开头，不允许 system 开头',
  packages_dag_dialog_collectionValidateTip:
    '新建数据集名称仅支持英文、数字、下划线、点、减号，并以英文字母开头，不允许 system 开头',
  packages_dag_task_stetting_basic_setting: '任务设置',
  packages_dag_task_stetting_most_setting: '高级设置',
  packages_dag_loading: '加载中',
  packages_dag_dag_connection: '连接',
  packages_dag_dag_table: '表',
  packages_dag_dag_create_table_as_node: '创建新表作为节点使用',
  packages_dag_dialog_createTable: '创建新表',
  packages_dag_dialog_placeholderTable: '仅支持英文、数字、下划线、点、减号，并以英文字母开头，不允许 system 开头',
  packages_dag_dataFlow_flowEngineVersion: '引擎版本',
  packages_dag_dataFlow_flowEngineV1: 'Flow Engine V1',
  packages_dag_dataFlow_jetFlowEngineV2: 'Jet Flow Engine V2',
  packages_dag_dataFlow_setting_intellect: '智能去重写入',
  packages_dag_dataFlow_setting_compel: '强制去重写入',
  packages_dag_dataFlow_SyncInfo_connTZType: '数据库时区',
  packages_dag_dag_property_setting: '属性设置',
  packages_dag_dag_meta_data: '元数据',
  packages_dag_meta_table_index: '序号',
  packages_dag_meta_table_field_name: '字段名称',
  packages_dag_meta_table_field_type: '字段类型',
  packages_dag_meta_table_scale: '精度',
  packages_dag_meta_table_precision: '长度',
  packages_dag_meta_table_default: '默认值',
  packages_dag_meta_table_not_null: '非空',
  packages_dag_meta_table_true: '是',
  packages_dag_meta_table_false: '否',
  packages_dag_meta_table_comment: '字段注释',
  packages_dag_connection_name_search_placeholder: '请输入连接名称搜索',
  packages_dag_task_form_error_name_duplicate: '任务名称已存在，请重新输入',
  packages_dag_task_setting_sync_type: '同步类型',
  packages_dag_task_setting_initial_sync_cdc: '全量 + 增量',
  packages_dag_task_stetting_desc: '任务描述',
  packages_dag_task_setting_plan_start_date: '计划开始时间',
  packages_dag_task_setting_crontabExpressionFlag: '定期调度任务',
  packages_dag_task_setting_cron_expression: '请输入调度表达式',
  packages_dag_task_setting_cron_tip:
    '可以通过cron表达式设置固定时间、日期、间隔下运行定期任务 \n语法: 秒 * 分钟 * 小时 * 日 * 月 * 星期 ? 年 *\n举例：\n0 */1 * * * ? //每分钟运行一次 \n0 0 2 * * ? //每天2点运行',
  packages_dag_task_setting_sync_point: '增量采集开始时刻',
  packages_dag_task_setting_syncPoint_tip: '任务将从该时间点开始收集增量日志',
  packages_dag_task_setting_automatic_index: '自动创建索引',
  packages_dag_task_setting_stop_on_error: '遇到错误停止',
  packages_dag_connection_form_shared_mining: '共享挖掘',
  packages_dag_task_list_verify: '数据校验',
  packages_dag_task_setting_is_schedule: '定期调度任务',
  packages_dag_dag_data_setting_expression: '表达式：',
  packages_dag_dag_data_setting_explanation: '可以通过cron表达式设置固定时间、日期、间隔下运行定期任务',
  packages_dag_dag_data_setting_grammar: '语法:',
  packages_dag_dag_data_setting_runMinute: '每分钟运行一次',
  packages_dag_dag_data_setting_runDay: '每天2点运行',
  packages_dag_connection_form_access_node: 'agent设置',
  packages_dag_connection_form_automatic: '平台自动分配',
  packages_dag_connection_form_manual: '用户手动指定',
  packages_dag_task_setting_automatic_ddl: '自动DDL',
  packages_dag_task_setting_distinct_write_type: '去重写入机制',
  packages_dag_task_setting_transformer_concurrency: '目标写入线程数',
  packages_dag_task_setting_cdc_concurrency: '增量同步并发写入',
  packages_dag_task_setting_lag_time: '增量滞后判断时间设置',
  packages_dag_task_setting_cdc_engine_filter: '启用引擎过滤',
  packages_dag_task_setting_share_cdc_mode: '共享增量读取的模式',
  packages_dag_task_setting_processorThreadNum: '处理器线程数',
  packages_dag_task_setting_increOperationMode: '增量数据处理模式',
  packages_dag_button_redo: '重做',
  packages_dag_button_center_content: '内容居中',
  packages_dag_button_auto_layout: '自动布局',
  packages_dag_button_move_paper: '移动画布[按住空格]',
  packages_dag_button_zoom_out: '缩小',
  packages_dag_button_zoom_in: '放大',
  packages_dag_task_list_button_monitor: '运行监控',
  packages_dag_editor_cell_validate_empty_name: '名称必填.',
  packages_dag_editor_cell_validate_none_data_node: '至少有两个数据节点',
  packages_dag_dag_save_fail: '保存出错，请检查节点',
  packages_dag_message_operation_error: '操作失败',
  packages_dag_message_resetOk: '重置成功',
  packages_dag_message_resetFailed: '重置失败',
  packages_dag_message_task_rename_success: '任务名称修改成功',
  packages_dag_dataFlow_multiError_notFound: '此任务不存在',
  packages_dag_dataFlow_multiError_statusError: '任务状态不允许这种操作',
  packages_dag_dataFlow_multiError_otherError: '操作失败, 请重试',
  packages_dag_editor_cell_link_writeMode_append: '追加写入',
  packages_dag_editor_cell_link_writeMode_upsert: '更新已存在或插入新数据',
  packages_dag_editor_cell_link_writeMode_update: '更新写入',
  packages_dag_editor_cell_link_writeMode_merge_embed: '更新内嵌数组',
  packages_dag_connection_status_all: '全部状态',
  packages_dag_connection_status_testing: '测试中',
  packages_dag_connection_status_invalid: '无效',
  packages_dag_connection_status_ready: '有效',
  packages_dag_dataFlow_delete_confirm_message: '删除任务 xxx 后，此任务将无法恢复',
  packages_dag_dataFlow_bulk_delete_confirm_message: '批量删除任务后，任务将无法恢复',
  packages_dag_dataFlow_stop_confirm_message: '暂停任务 xxx 后，任务中未完成全量同步的表再次启动时，会重新执行全量同步',
  packages_dag_dataFlow_bulk_stop_confirm_message:
    '批量暂停任务后，任务中未完成全量同步的表再次启动时，会重新执行全量同步',
  packages_dag_dataFlow_force_stop_confirm_message: '强制停止任务 xxx 将立即中断数据传输强制任务快速停止，并重置该任务',
  packages_dag_dataFlow_bulk_force_stop_confirm_message:
    '批量强制停止任务将立即中断数据传输强制任务快速停止，并重置该任务',
  packages_dag_dataFlow_initialize_confirm_message: '重置任务 xxx 将清除任务同步进度，任务将重新执行',
  packages_dag_dataFlow_bulk_initialize_confirm_message: '批量重置任务将清除任务同步进度，任务将重新执行',
  packages_dag_task_preview_status_error: '错误',
  packages_dag_task_preview_status_edit: '编辑中',
  packages_dag_task_preview_status_wait_run: '启动中',
  packages_dag_task_preview_status_running: '运行中',
  packages_dag_task_preview_status_stopping: '停止中',
  packages_dag_task_preview_status_preparing: '准备中',
  packages_dag_task_preview_status_scheduling: '启动中',
  packages_dag_task_preview_status_schedule_failed: '调度失败',
  packages_dag_task_preview_status_ready: '待启动',
  packages_dag_dag_data_setting_minute: '分钟',
  packages_dag_dag_data_setting_hour: '小时',
  packages_dag_dag_data_setting_day: '日',
  packages_dag_dag_data_setting_month: '月',
  packages_dag_dag_data_setting_week: '星期',
  packages_dag_dag_data_setting_year: '年',
  packages_dag_mouse_selection: '框选 (按住Shift)',
  packages_dag_table_name_search_placeholder: '请输入表名称搜索',
  packages_dag_customer_logs_no_more_data: '没有更多数据',
  packages_dag_customer_logs_no_search_data: '无搜索结果',
  packages_dag_src_command_qingshixianun: '请实现undo方法！',
  packages_dag_src_command_qingshixianex: '请实现exec方法！',
  packages_dag_components_datapane_shanghaishiputuo: '上海市普陀区金沙江路 1516 弄',
  packages_dag_components_datapane_wangxiaohu: '王小虎',
  packages_dag_components_datapane_dizhi: '地址',
  packages_dag_components_datapane_xingming: '姓名',
  packages_dag_components_datapane_riqi: '日期',
  packages_dag_components_dfnode_gaijiedianth: '该节点「{val1}」已经达到最大连线限制',
  packages_dag_components_dfnode_tuodongshijianduan: '拖动时间段，或者距离变化小，触发节点激活',
  packages_dag_components_dfnode_qingjianchajiedian: '请检查节点配置',
  packages_dag_components_dfnode_shanchujiedian: '删除节点',
  packages_dag_components_dfnode_tianjiajiedian: '添加节点',
  packages_dag_components_formpanel_zengliangzhihoupan: '增量滞后判断时间设置(秒)',
  packages_dag_components_formpanel_shiwuzuidashi: '事务最大时长(小时)',
  packages_dag_components_formpanel_gongxiangwajueri: '共享挖掘日志过滤',
  packages_dag_components_formpanel_meiciduqushu: '每次读取数量',
  packages_dag_components_formpanel_zengliangtongbujian: '增量同步间隔',
  packages_dag_components_formpanel_lunxunduqu: '轮询读取',
  packages_dag_components_formpanel_liushiduqu: '流式读取',
  packages_dag_components_formpanel_dangrenwukaiqi: '当任务开启',
  packages_dag_components_formpanel_dangrenwubeibian: '当任务被编辑',
  packages_dag_components_formpanel_dangrenwuchucuo: '当任务出错',
  packages_dag_components_formpanel_dangrenwutingzhi: '当任务停止',
  packages_dag_components_formpanel_fasongyoujian: '发送邮件',
  packages_dag_components_formpanel_zengliangpicidu: '增量批次读取条数',
  packages_dag_components_formpanel_zhutiao: '逐条',
  packages_dag_components_formpanel_piliang: '批量',
  packages_dag_components_formpanel_zengliangshujuchu: '增量数据处理机制',
  packages_dag_components_formpanel_zhichiwuzhujian: '支持无主键同步',
  packages_dag_components_formpanel_zidongchuliD: '自动处理DDL',
  packages_dag_components_formpanel_gengxinout: '👷 更新$outputs',
  packages_dag_components_formpanel_gengxininp: '👷 更新$inputs',
  packages_dag_components_formpanel_shangyigejihuo: '上一个激活的节点校验结果',
  packages_dag_components_formpanel_jiantingsta: '监听：stateIsReadonly',
  packages_dag_components_leftsidebar_xuanzeshujuyuan: '选择数据源类型',
  packages_dag_components_metapane_geziduan: ' 个字段',
  packages_dag_components_metapane_gongyou: '共有 ',
  packages_dag_migration_configpanel_moxing: '模型',
  packages_dag_migration_configpanel_peizhi: '配置',
  packages_dag_migration_consolepanel_quanburizhi: '全部日志',
  packages_dag_migration_consolepanel_dangqianjiancefaxian: '当前检测共发现，',
  packages_dag_migration_consolepanel_qingguanzhu: '请关注',
  packages_dag_migration_consolepanel_ge: '个',
  packages_dag_migration_settingpanel_dangrenwufuhe:
    '开启数据校验开关后，任务会自动对同步结果的一致性进行全量校验和增量校验，并会在运行监控页面将校验不一致的数据行数展示出来。需要注意，当任务符合以下情况时，即使开启校验开关任务也不会进行校验\n 1. 添加了中间处理节点\n 2. 源连接不支持校验\n 3. 目标连接不支持校验',
  packages_dag_monitor_bottompanel_yunxingjilu: '运行记录',
  packages_dag_monitor_bottompanel_rizhi: '任务日志',
  packages_dag_components_eventchart_qita: '其他',
  packages_dag_components_eventchart_suoxuanzhouqilei: '所选周期累计',
  packages_dag_components_eventchart_renwuyunxinglei: '任务运行累计',
  packages_dag_components_initiallist_quanliangtongbuzhuang: '全量同步状态',
  packages_dag_components_initiallist_shujutongbu: '数据同步',
  packages_dag_components_initiallist_mubiaobiaoming: '目标表名',
  packages_dag_components_initiallist_yuanbiaoming: '源表名',
  packages_dag_components_initiallist_tongbuzhong: '同步中',
  packages_dag_components_initiallist_weikaishi: '未开始',
  packages_dag_components_initiallist_dianjishuaxin: '点击刷新',
  packages_dag_components_initiallist_quanliangxinxixiang: '全量信息详情',
  packages_dag_components_log_xiazaishibai: '下载失败',
  packages_dag_components_log_zidingyishijian: '自定义时间',
  packages_dag_components_log_quanburizhi: '全部日志',
  packages_dag_components_log_zuijintian: '最近3天',
  packages_dag_components_log_zuixintian: '最近1天',
  packages_dag_components_log_zuijingexiaoshi: '最近6个小时',
  packages_dag_components_log_kaiqishichangmiao: '开启时长（秒）',
  packages_dag_components_log_debug: 'DEBUG日志参数',
  packages_dag_components_log_rizhijibie: '日志级别：',
  packages_dag_components_log_rizhidengjishe: '日志输出等级设置',
  packages_dag_components_log_xiazai: '下载',
  packages_dag_components_log_qingshururizhi: '请输入日志内容…',
  packages_dag_components_nodedetaildialog_chulihaoshi: '处理耗时',
  packages_dag_components_nodedetaildialog_xingnengzhibiao: '性能指标',
  packages_dag_components_nodedetaildialog_zengliangshijiandian: '增量时间点',
  packages_dag_components_nodedetaildialog_xieyilianjiehao: '协议连接耗时',
  packages_dag_components_nodedetaildialog_tcPlianjie: 'TCP连接耗时',
  packages_dag_components_nodedetaildialog_lianjiezhuangtai: '连接状态',
  packages_dag_components_nodedetaildialog_tongbuzhuangtai: '同步状态',
  packages_dag_components_nodedetaildialog_shijiantongji: '事件统计',
  packages_dag_components_nodedetaildialog_jiedian: '节点',
  packages_dag_components_nodedetaildialog_jiedianxiangqing: '节点详情',
  packages_dag_components_record_shuchushijianzong: '输出事件总量',
  packages_dag_components_record_shurushijianzong: '输入事件总量',
  packages_dag_components_record_yunxingjieguo: '运行结果',
  packages_dag_components_record_caozuoren: '操作人',
  packages_dag_components_record_yunxingjieshushi: '运行结束时间',
  packages_dag_components_record_yunxingkaishishi: '运行开始时间',
  packages_dag_components_timeselect_renwuquanzhouqi: '任务全周期',
  packages_dag_components_timeselect_zuijintian: '最近1天',
  packages_dag_components_timeselect_zuixinxiaoshi: '最新1小时',
  packages_dag_components_timeselect_zuijinfenzhong: '最近5分钟',
  packages_dag_components_timeselect_zhouqi: '周期',
  packages_dag_components_timeselect_jieshuriqi: '结束日期',
  packages_dag_components_timeselect_kaishiriqi: '开始日期',
  packages_dag_components_timeselect_zhi: '至',
  packages_dag_monitor_leftsider_chulihaoshim: '处理耗时',
  packages_dag_monitor_leftsider_buzhichijiaoyan: '不支持校验的表：',
  packages_dag_monitor_leftsider_jiaoyanbuyizhi: '校验不一致的表：',
  packages_dag_monitor_leftsider_chayizongxingshu: '差异总行数：',
  packages_dag_monitor_leftsider_liebiao: '列表',
  packages_dag_monitor_leftsider_renwujiaoyan: '任务校验',
  packages_dag_monitor_leftsider_biaotongbuzongjin: '表同步总进度',
  packages_dag_monitor_leftsider_yujiquanliangwan: '预计全量完成还需：',
  packages_dag_monitor_leftsider_quanliangwanchengshi: '全量完成时间：',
  packages_dag_monitor_leftsider_quanliangxinxi: '全量信息',
  packages_dag_monitor_node_zengliangzhuangtai: '增量状态',
  packages_dag_monitor_node_quanliangzhuangtai: '全量状态',
  packages_dag_monitor_node_snaps: '{val1}/{val2} | 预计全量完成还需 {val3}',
  packages_dag_monitor_node_jinhangzhong: '进行中',
  packages_dag_monitor_node_daijinhang: '待进行',
  packages_dag_monitor_node_leijishuchushi: '累计输出事件',
  packages_dag_monitor_node_leijishurushi: '累计输入事件',
  packages_dag_monitor_node_haoshi: '耗时',
  packages_dag_monitor_topheader_dakaijiaoyan: '打开校验',
  packages_dag_monitor_topheader_mubiaolianjiebu: '3.目标连接不支持校验',
  packages_dag_monitor_topheader_yuanlianjiebuzhi: '2.源连接不支持校验',
  packages_dag_monitor_topheader_tianjialezhongjian: '1.添加了中间处理节点',
  packages_dag_monitor_topheader_dangqianrenwuzan: '当前任务暂不支持校验，可能的原因：',
  packages_dag_monitor_topheader_qidongshijian: '启动时间：',
  packages_dag_monitor_topheader_qingshururenwu: '请输入任务名称',
  packages_dag_monitor_verifypanel_zongji: '总计',
  packages_dag_monitor_verifypanel_buzhichijiaoyan: '不支持校验',
  packages_dag_monitor_verifypanel_jiaoyanbuyizhi: '校验不一致',
  packages_dag_monitor_verifypanel_jiaoyanyizhi: '校验一致',
  packages_dag_monitor_verifypanel_yichangshujuhang: '异常数据（行）：',
  packages_dag_monitor_verifypanel_biaoming: '表名：',
  packages_dag_monitor_verifypanel_lianjieming: '连接名：',
  packages_dag_monitor_verifypanel_qingshurusousuo: '请输入搜索内容',
  packages_dag_monitor_verifypanel_jiancedaoxinshu: '检测到新数据，请点击刷新',
  packages_dag_monitor_verifypanel_wentibiaoqingdan: '问题表清单',
  packages_dag_components_paperempty_shiyinghuabu: '适应画布',
  packages_dag_components_paperempty_huabushijichi: '画布实际尺寸',
  packages_dag_components_paperempty_zhantie: '粘贴',
  packages_dag_components_settingpanel_renwudetongbu: '任务的同步类型为增量或全量+增量时执行',
  packages_dag_components_settingpanel_gongxiangwajueshe: '共享挖掘设置',
  packages_dag_components_settingpanel_shujuyuan: '数据源:',
  packages_dag_components_settingpanel_chuliqixiancheng: '处理器线程数:',
  packages_dag_components_settingpanel_miao: '秒',
  packages_dag_components_settingpanel_zengliangshezhi: '增量设置',
  packages_dag_components_settingpanel_renwuzaijinhang: '任务在进行读取和写入时执行的策略',
  packages_dag_components_settingpanel_duxieshezhi: '读写设置',
  packages_dag_components_settingpanel_renwuzaiqidong: '任务在启动和运行时的环境设置',
  packages_dag_components_settingpanel_yunxingshezhi: '运行设置',
  packages_dag_components_settingpanel_jibenshezhi: '基本设置',
  packages_dag_src_editor_chucuole: '出错了',
  packages_dag_src_editor_renwubaocunchu: '任务保存出错',
  packages_dag_src_editor_zengshanziduan: '增删字段',
  packages_dag_src_editor_ziduangaiming: '字段改名',
  packages_dag_src_editor_leixingxiugai: '类型修改',
  packages_dag_src_editor_ziduanjisuan: '字段计算',
  packages_dag_src_editor_zhuconghebing: '主从合并',
  packages_dag_src_editor_juhe: '聚合',
  packages_dag_src_editor_zhuijiahebing: '追加合并',
  packages_dag_src_editor_join: '连接',
  packages_dag_src_migrationeditor_jSchuli: '增强JS',
  packages_dag_src_migrationeditor_jSchuli_standard: '标准JS',
  packages_dag_src_migrationeditor_ziduanbianji: '字段编辑',
  packages_dag_src_migrationeditor_biaobianji: '表编辑',
  packages_dag_src_migrationeditor_zhuangtaijianting: '状态监听',
  packages_dag_src_migrationmonitor_gaijiedianbuzhi: '该节点不支持在 {val1}（{val2}）上运行',
  packages_dag_src_migrationmonitor_cunzaibuzhichi: '存在不支持{val1}的节点',
  packages_dag_src_migrationmonitor_noden: '「 {val1} 」配置异常',
  packages_dag_src_migrationmonitorviewer_gaifuzhirenwu: '该复制任务没有子任务',
  packages_dag_src_migrationmonitorviewer_gaijiedianbuzhi: '该节点不支持在 {val1}（{val2}）上运行',
  packages_dag_src_migrationmonitorviewer_cunzaibuzhichi: '存在不支持{val1}的节点',
  packages_dag_src_migrationmonitorviewer_noden: '「 {val1} 」配置异常',
  packages_dag_mixins_editor_renwujiazaichu: '任务加载出错',
  packages_dag_mixins_editor_renwubucunzai: '任务不存在',
  packages_dag_mixins_editor_renwuzhonghanyou:
    '任务中含有JS节点、自定义节点、追加合并节点或节点设置增量自定义SQL，暂不支持DDL，请手动关闭',
  packages_dag_mixins_editor_gaijiedianbuzhi: '该节点不支持在 {val1}（{val2}）上运行',
  packages_dag_mixins_editor_not_support_ddl: '该节点不支持DDL，请关闭',
  packages_dag_mixins_editor_not_support_cdc: '该节点不支持增量，请将任务类型修改为全量',
  packages_dag_mixins_editor_task_not_support_cdc: '任务中含有不支持增量的节点，请将任务类型修改为全量',
  packages_dag_mixins_editor_buzhichiduotiao: '不支持多条链路，请重新编辑任务链路',
  packages_dag_mixins_editor_renwulianlubu: '任务链路不完整',
  packages_dag_mixins_editor_renwushezhiyi: '任务设置异常',
  packages_dag_mixins_editor_suoshuage: '所属agent节点冲突',
  packages_dag_mixins_editor_noden: '「 {val1} 」没有任何连线',
  packages_dag_mixins_editor_jiedianjiaoyancuo: '节点校验错误',
  packages_dag_mixins_editor_shanchulianjie: '删除连接',
  packages_dag_mixins_editor_initV: 'initView-Editor 开启的监听',
  packages_dag_mixins_editor_xinrenwu: '新任务@',
  packages_dag_mixins_editor_sourc: '「{val1}」不支持该节点「{val2}」作为目标',
  packages_dag_mixins_editor_gaijiedianta: '该节点「{val1}」不支持「{val2}」作为源',
  packages_dag_mixins_editor_gaijiedianyijing: '该节点已经达到最大连线限制',
  packages_dag_mixins_editor_gaijiedianso: '该节点「{val1}」仅支持作为目标',
  packages_dag_mixins_formscope_tuiyanshibai: '推演失败',
  packages_dag_mixins_formscope_liuyipar: '留意parent找不到',
  packages_dag_nodes_aggregate_fanhuishili: '返回示例',
  packages_dag_nodes_aggregate_fenzuziduan: '分组字段',
  packages_dag_nodes_aggregate_zuoyongmubiao: '作用目标',
  packages_dag_nodes_aggregate_juhehanshu: '聚合函数',
  packages_dag_nodes_database_zengliangduoxiancheng: '增量多线程写入',
  packages_dag_nodes_database_quanliangduoxiancheng: '全量多线程写入',
  packages_dag_nodes_database_bucunzaishidiu: '不存在时丢弃',
  packages_dag_nodes_database_shanchushijian: '删除事件',
  packages_dag_nodes_database_bucunzaishicha: '不存在时插入',
  packages_dag_nodes_database_gengxinshijian: '更新事件',
  packages_dag_nodes_database_mubiaocunzaishi: '目标存在时丢弃',
  packages_dag_nodes_database_charushijian: '插入事件',
  packages_dag_nodes_database_shujuxieruce: '数据写入策略',
  packages_dag_nodes_database_baochimubiaoduan: '保持目标端原有表结构和数据',
  packages_dag_nodes_database_qingchumubiaoduan: '清除目标端原有表结构及数据',
  packages_dag_nodes_database_chongfuchulice: '重复处理策略',
  packages_dag_nodes_database_tuiyanjieguo: '推演结果',
  packages_dag_nodes_database_dangqianjiedianzhi: '当前节点支持处理的DDL事件',
  packages_dag_nodes_database_ddLshijian: 'DDL事件应用',
  packages_dag_nodes_database_kaiqihourenwu: '开启后任务将会自动采集选中的源端DDL事件',
  packages_dag_nodes_database_dongtaixinzengbiao: '动态新增表',
  packages_dag_nodes_database_quanliangmeipici:
    '全量每批次读取的条数, 一般保持默认值即可, 如果你的下游较慢, 任务出现源的游标丢失的情况, 请调小此值',
  packages_dag_nodes_database_piliangduqutiao: '每批读取条数',
  packages_dag_nodes_database_zidingyi: '自定义',
  packages_dag_nodes_database_xuanzebiao: '选择表',
  packages_dag_nodes_database_suoshuage: '所属agent',
  packages_dag_extends_nodetype_queshaobiyaode: '缺少必要的type属性！',
  packages_dag_nodes_javascript_moxingshengming: '模型声明',
  packages_dag_nodes_javascript_jiaoben: '脚本',
  packages_dag_nodes_join_youce: '右侧',
  packages_dag_nodes_join_zuoce: '左侧',
  packages_dag_nodes_join_lianjieziduanshe: '连接字段设置',
  packages_dag_nodes_join_zuolianjie: '左连接',
  packages_dag_nodes_jointcache_qingxuanzehuochuang: '请选择或创建写入路径字段',
  packages_dag_nodes_jointcache_xierulujing: '写入路径',
  packages_dag_nodes_jointcache_yuanbiaoguanlianjian: '源表关联键',
  packages_dag_nodes_jointcache_huancunbiaozhujian: '缓存表主键',
  packages_dag_nodes_jointcache_guanlianshezhi: '关联设置',
  packages_dag_nodes_jointcache_chuangjianpipeishu: '创建匹配数据',
  packages_dag_nodes_jointcache_baoliupipeishu: '保留匹配数据',
  packages_dag_nodes_jointcache_duiyinghuancunjie: '对应缓存节点',
  packages_dag_nodes_mergetable_mubiaobiaoziduan: '目标表字段',
  packages_dag_nodes_mergetable_dangqianbiaoziduan: '当前表字段',
  packages_dag_nodes_mergetable_guanliantiaojian: '关联条件',
  packages_dag_nodes_mergetable_neiqianshuzupi: '内嵌数组匹配条件',
  packages_dag_nodes_mergetable_guanlianhouxieru: '关联后写入路径',
  packages_dag_nodes_mergetable_gengxinjinneiqian: '更新进内嵌数组',
  packages_dag_nodes_mergetable_shujuxierumo: '数据写入模式',
  packages_dag_nodes_rowfilter_tiaojianbiaodashi: '条件表达式',
  packages_dag_nodes_rowfilter_diuqipipeishu: '丢弃匹配数据',
  packages_dag_nodes_rowfilter_zhixingdongzuo: '执行动作',
  packages_dag_nodes_table_gengxintiaojianzi: '更新条件字段',
  packages_dag_nodes_table_gengxinyicunzai: '更新已存在或者插入新数据',
  packages_dag_nodes_table_yunxingqianshanchu: '运行前删除表结构',
  packages_dag_nodes_table_baochiyicunzai: '保持已存在的数据',
  packages_dag_nodes_table_yiyoushujuchu: '已有数据处理',
  packages_dag_nodes_table_ddLshijian: 'DDL事件采集',
  packages_dag_nodes_table_meiciduqushu: '每次读取数量(行)',
  packages_dag_nodes_table_zengliangtongbujian: '增量同步间隔(ms)',
  packages_dag_nodes_table_yifuzhi: '已复制',
  packages_dag_nodes_table_fuzhibiaoming: '复制表名',
  packages_dag_nodes_table_qingxuanzebiao: '请选择表',
  packages_dag_nodes_table_fuzhishujuku: '复制数据库名',
  packages_dag_nodes_table_shujuku: '数据库',
  packages_dag_nodes_targetdatabase_mubiaocunzaishi: '目标存在时更新',
  packages_dag_nodes_targetdatabase_baochimubiaoduan: '保持目标端原有表结构，清除数据',
  packages_dag_nodes_targetdatabase_jiedianmiaoshu: '节点描述',
  packages_dag_src_store_weizhaodaojiedian: '未找到节点',
  packages_dag_src_store_qingkongjiedianshu: '清空节点输入输出的监听',
  packages_dag_node_none_input: '“ {val1} ”至少需要{val2}个源节点',
  packages_dag_node_none_output: '“ {val1} ”至少需要{val2}个目标节点',
  packages_dag_node_none_connection: '“ {val1} ”没有任何连线',
  packages_dag_node_only_as_source: '该节点「{val1}」仅支持作为源',
  packages_dag_node_only_as_target: '该节点「{val1}」仅支持作为目标',
  packages_dag_components_alert_dangqianrenwuyi: '当前任务已报错停止，请关注!',
  packages_dag_components_alert_gaojingfashengci: '告警发生次数',
  packages_dag_components_alert_gaojingzuijinfa: '告警最近发生时间',
  packages_dag_components_alert_gaojingshoucifa: '告警首次发生时间',
  packages_dag_components_alert_gaojingmiaoshu: '告警描述',
  packages_dag_components_alert_gaojingzhuangtai: '告警状态',
  packages_dag_components_alert_gaojingjibie: '告警级别',
  packages_dag_components_frequency_shuaxinpinlu: '刷新频率',
  packages_dag_components_nodedetaildialog_xieruhaoshi: '写入耗时',
  packages_dag_components_nodedetaildialog_chulihaoshidang: '处理耗时：当前节点处理事件的平均耗时',
  packages_dag_components_nodedetaildialog_xieruhaoshidang: '写入耗时：当前目标节点写入数据到目标数据库的耗时',
  packages_dag_components_nodedetaildialog_chulihaoshiyuan: '处理耗时：源节点从源数据库读取到事件后完成处理花费的时间',
  packages_dag_components_nodedetaildialog_zengliangduquyan: '增量读取延迟',
  packages_dag_components_nodedetaildialog_pingjunduquhao: '平均读取耗时',
  packages_dag_components_nodedetaildialog_zengliangshijiandian2: '增量时间点：',
  packages_dag_components_nodedetaildialog_chulixieruhao: '处理/写入耗时',
  packages_dag_components_nodedetaildialog_duquchulihao: '读取/处理耗时',
  packages_dag_components_nodedetaildialog_dangqianbiaotongbu: '当前表同步进度',
  packages_dag_components_nodedetaildialog_quanliangkaishishi: '全量开始时间：',
  packages_dag_components_timeselect_renwuzuijinyi: '任务最近一次启动至今',
  packages_dag_monitor_leftsider_shanchu: '删除：',
  packages_dag_monitor_leftsider_gengxin: '更新：',
  packages_dag_monitor_leftsider_charu: '插入：',
  packages_dag_monitor_leftsider_renwushijiantong: '处理数据统计(条）',
  packages_dag_monitor_leftsider_chayixiangqing: '差异详情',
  packages_dag_monitor_leftsider_zuidazengliangyan: '最大增量延迟：',
  packages_dag_monitor_leftsider_tongbuxinxi: '同步信息',
  packages_dag_monitor_leftsider_tiaoshixinxi: '调试信息',
  packages_dag_components_nodedetaildialog_dangqianjiedianchu: '当前节点处理事件的平均耗时',
  packages_dag_components_nodedetaildialog_dangqianjiedianping: '当前节点平均每秒处理的输入事件数和输出事件数',
  packages_dag_monitor_leftsider_renwuchuliwan:
    '任务处理完成一条新产生事件需要消耗的总时间，当有多个目标时只统计最大的处理耗时',
  packages_dag_monitor_leftsider_shijiancongyuanku:
    '事件从源库生成到经任务处理完成写入目标的延迟时间，当有多个目标时只统计最大的增量延迟时间',
  packages_dag_monitor_leftsider_qpSshizhi: 'QPS是指任务平均每秒处理的输入事件数和输出事件数',
  packages_dag_components_nodedetaildialog_zengliangduquyan2:
    '增量读取延迟：增量阶段下增量事件从生成到被读取到任务开始处理的延迟时间',
  packages_dag_components_nodedetaildialog_pingjunduquhao2: '平均读取耗时：全量阶段下读取每条数据的平均耗时',
  packages_dag_components_log_zuidashijianshu: '最大事件数（条）',
  packages_dag_message_save_fail: '保存失败',
  packages_dag_task_reset_start: '开始清理任务',
  packages_dag_task_reset_pdk_node_external_resource:
    '清理pdk数据节点[{nodeName}({nodeId})]的外部资源...{status}, 耗时: {elapsedTime} ms',
  packages_dag_task_reset_pdk_node_state:
    '清理pdk数据节点[{nodeName}({nodeId})]的状态数据...{status}, 耗时: {elapsedTime} ms',
  packages_dag_task_reset_merge_node:
    '清理主从合并节点[{nodeName}({nodeId})]的缓存数据...{status}, 耗时: {elapsedTime} ms',
  packages_dag_task_reset_aggregate_node:
    '清理聚合节点[{nodeName}({nodeId})]的缓存数据...{status}, 耗时: {elapsedTime} ms',
  packages_dag_task_reset_custom_node:
    '清理自定义节点[{nodeName}({nodeId})]的状态数据...{status}, 耗时: {elapsedTime} ms',
  packages_dag_task_reset_join_node: '清理连接节点[{nodeName}({nodeId})]的状态数据...{status}, 耗时: {elapsedTime} ms',
  packages_dag_task_reset_end:
    '任务完成清理，共{totalEvent}项需要清理，成功: {succeedEvent}项，失败: {failedEvent}项...{status}, 耗时: {elapsedTime} ms',
  packages_dag_unknown_error: '清理节点[{nodeName}({nodeId})]出现未知错误',
  packages_dag_console_log_status_success: '成功',
  packages_dag_console_log_status_fail: '失败',
  packages_dag_auto_reset_start: '任务将自动在{resetInterval}秒后对清理失败项尝试{rest}次重置清理',
  packages_dag_auto_reset_start_nth: '任务开始进行第{resetTimes}次自动重置清理',
  packages_dag_auto_reset_start_result: '任务重置失败，请稍后再试',
  packages_dag_migration_alarmpanel_lianxu: '连续',
  packages_dag_migration_alarmpanel_youjiantongzhi: '邮件通知',
  packages_dag_migration_alarmpanel_xitongtongzhi: '系统通知',
  packages_dag_migration_alarmpanel_renwuzengliangyan: '任务增量延迟告警',
  packages_dag_migration_alarmpanel_renwutingzhigao: '任务停止告警',
  packages_dag_migration_alarmpanel_renwuzengliangkai: '任务增量开始通知',
  packages_dag_migration_alarmpanel_renwuquanliangwan: '任务全量完成通知',
  packages_dag_migration_alarmpanel_renwujiaoyanchu: '任务校验出错告警',
  packages_dag_migration_alarmpanel_renwuyunxingchu: '任务运行出错告警',
  packages_dag_migration_alarmpanel_jiedianpingjunchu: '当节点的平均处理耗时',
  packages_dag_migration_alarmpanel_shujuyuanxieyi: '数据源协议连接耗时告警',
  packages_dag_migration_alarmpanel_shujuyuanwangluo: '数据源网络连接耗时告警',
  packages_dag_migration_alarmpanel_shujuyuanwufa: '数据源无法连接告警',
  packages_dag_migration_configpanel_gaojingshezhi: '告警设置',
  packages_dag_monitor_bottompanel_guanlianrenwu: '关联任务',
  packages_dag_monitor_bottompanel_gaojingliebiao: '告警列表',
  packages_dag_components_alert_guanbichenggong: '关闭成功',
  packages_dag_components_alert_quanbugaojing: '全部告警',
  packages_dag_mixins_editor_debug: '【DEBUG】初始化ws监听',
  packages_dag_mixins_editor_debug2: '【DEBUG】轮询加载任务详情，出现状态不一致，按照返回状态更新',
  packages_dag_mixins_editor_debug3: '【DEBUG】轮询加载任务详情，当前状态：[{val1}], 返回状态：[{val2}]',
  packages_dag_mixins_editor_debug4: '【DEBUG】开始轮询加载任务，间隔3s',
  packages_dag_mixins_editor_debug5: '【DEBUG】ws返回，任务状态：[{val1}]',
  packages_dag_monitor_topheader_zuijinyiciqi: '最近一次启动时间：',
  packages_dag_components_nodedetaildialog_quanliangyiwancheng: '全量已完成',
  packages_dag_components_node_quanliangwanchenghaixu: '全量完成还需',
  packages_dag_components_node_xieruhaoshi: '写入耗时：',
  packages_dag_components_node_chulihaoshi: '处理耗时：',
  packages_dag_components_node_zanbuzhichi: '暂不支持',
  packages_dag_page_return_confirm_title: '返回确认',
  packages_dag_page_return_confirm_content: '当前任务内容为空，是否要保留？',
  packages_dag_page_return_confirm_ok_text: '不保留',
  packages_dag_page_return_confirm_cancel_text: '保留',
  packages_dag_monitor_node_popover_cdcTimeTitle_source: '读取增量时间点',
  packages_dag_monitor_node_popover_cdcTimeTitle_target: '写入增量时间点',
  packages_dag_monitor_node_popover_cdcTimeTitle_processor: '处理增量时间点',
  packages_dag_monitor_node_popover_targetWriteTime_title: '平均每条写入耗时',
  packages_dag_monitor_node_per_deal_need_time: '单条处理耗时',
  packages_dag_api_docs: 'API文档',
  packages_dag_js_declare_index_queding: '确 定',
  packages_dag_js_declare_index_shilidaima: '示例代码',
  packages_dag_js_declare_index_shiyongbangzhu: '使用帮助',
  packages_dag_js_declare_index_xianshishengminglai: '显式声明来定义和修改模型',
  packages_dag_js_declare_index_zengjiayigezi:
    "// 增加一个字段，如果字段已存在则不操作\nTapModelDeclare.addField({val1}, 'fieldName', 'TapString')\n// 移除一个已存在字段\nTapModelDeclare.removeField({val2}, 'fieldName')\n// 更新一个已存在的字段\nTapModelDeclare.updateField({val3}, 'fieldName', 'TapString')\n// 更新字段，如果不存在则新增\nTapModelDeclare.upsertField({val4}, 'fieldName', 'TapString')\n// 设置字段为主键\nTapModelDeclare.setPk({val5}, 'fieldName')\n// 取消主键\nTapModelDeclare.unSetPk({val6}, 'fieldName')\n// 增加索引\nTapModelDeclare.addIndex({val7}, 'indexName', [{'fieldName':'fieldName1', 'order': 'asc'}])\n// 移除索引\nTapModelDeclare.removeIndex({val8}, 'indexName')\n",
  packages_dag_js_processor_index_duibi: '对比',
  packages_dag_js_processor_index_yongfa: '用法：',
  packages_dag_js_processor_index_zuoyong: '作用：',
  packages_dag_js_processor_index_fangfa: '方法',
  packages_dag_js_processor_index_wangluogongju: '网络工具',
  packages_dag_js_processor_index_iDshengchengqi: 'ID生成器',
  packages_dag_js_processor_index_riqichuli: '日期处理',
  packages_dag_merge_table_tree_index_biaozhijianketong: '表之间可通过拖拽嵌套，确定主从关系',
  packages_dag_merge_table_tree_index_biaomingchengzhichi: '表名称(支持拖拽)',
  packages_dag_migration_settingpanel_cronbiao: 'Cron表达式格式有误',
  packages_dag_hooks_useaftertasksaved_moxingyishengcheng: '模型已生成，执行 callback',
  packages_dag_mixins_editor_wsshoudaole: 'ws收到了其他任务的返回',
  packages_dag_nodes_database_tongjizhuijiaxie: '追加写入',
  packages_dag_nodes_database_anshijianleixing: '按事件类型处理',
  packages_dag_nodes_database_tongjizhuijiaxie2: '追加写入: 只处理插入事件，丢弃更新和删除事件',
  packages_dag_nodes_database_setting_cdc_changjing_desc: '纯增量场景下，不支持对目标表结构和数据的清除操作。',
  packages_dag_nodes_database_xierumeipizui: '每批写入最大等待时间(ms)',
  packages_dag_nodes_database_xierumeipizui_tips: '超过此配置时间, 依然没有积攒够批次时, 也会进行一次写入',
  packages_dag_nodes_database_quanliangmeipici2: '在数据积攒到一定量时, 进行批量写入',
  packages_dag_nodes_database_piliangxierutiao: '每批次写入条数',
  packages_dag_nodes_database_zhengzebiaodashi: '正则表达式匹配模式下，数据库新增的符合表达式的表会被自动同步到目标',
  packages_dag_nodes_database_anzhengzebiaoda: '按正则表达式匹配',
  packages_dag_nodes_database_anbiaomingxuanze: '按表名选择',
  packages_dag_nodes_database_value_zanbuzhiciddl: '暂不支持DDL事件采集',
  packages_dag_nodes_mergetable_const_zuiduozhichiliangceng: '最多支持两层嵌套',
  packages_dag_nodes_mergetable_zhucongpeizhi: '主从配置',
  packages_dag_nodes_table_isDaa_ruguoyuanweimongodb: '如果源为MongoDB时，需要同步删除事件，请确保关联 _id',
  packages_dag_nodes_table_tianjia: '添加',
  packages_dag_nodes_table_zidingyitiaojian: '自定义条件',
  packages_dag_nodes_table_guolushezhi: '过滤设置',
  packages_dag_nodes_table_meiciduquhang: '每次轮询读取的行数',
  packages_dag_nodes_table_lunxunjiangem: '轮询间隔(ms)',
  packages_dag_nodes_table_lunxunziduanmo: '轮询字段默认值',
  packages_dag_nodes_table_zhidinglunxunzi: '指定轮询字段',
  packages_dag_nodes_table_lunxun: '字段轮询',
  packages_dag_nodes_table_rizhicdc: '实时日志解析',
  packages_dag_nodes_table_tedingziduande:
    '实时日志方式使用数据源事务日志进行解析同步增量事件, 字段轮询通过对字段的轮询进行增量事件同步, 字段轮询往往无法同步删除事件',
  packages_dag_nodes_table_zengliangtongbufang: '增量同步方式',
  packages_dag_table_list_card_index_zanshimeiyoupi: '暂时没有匹配的表',
  packages_dag_nodes_database_pipeidaodebiao: '匹配到的表',
  packages_dag_nodes_tableprocessor_biaomingchongfu: '表名重复',
  packages_dag_monitor_leftsider_zuidaQps: '最大QPS(Q/S)',
  packages_dag_monitor_leftsider_pingjunQps: '平均QPS(Q/S)',
  packages_dag_monitor_leftsider_quanliangwanchenghao: '全量完成耗时',
  packages_dag_monitor_bottompanel_renwujindu: '任务进度',
  packages_dag_src_editor_shaohouqidong: '稍后启动',
  packages_dag_src_editor_jixuqidong: '继续启动',
  packages_dag_src_editor_renwubaocunjianceshi:
    '任务保存检测时发现了告警，可能会导致任务运行出现异常，建议您查看并解决告警后再启动任务',
  packages_dag_monitor_leftsider_jibenxinxi: '基本信息',
  packages_dag_nodes_aggregate_waicunpeizhi: '外存配置',
  packages_dag_field_inference_main_tuiyanyichang: '推演异常',
  packages_dag_field_inference_main_gengxintiaojianyi: '更新条件异常',
  packages_dag_field_inference_main_quanbubiao: '全部表',
  packages_dag_migration_settingpanel_zhuanweiputongC: '转为普通CDC模式',
  packages_dag_migration_settingpanel_renwuzhijiebao: '任务直接报错停止',
  packages_dag_migration_settingpanel_danggongxiangwajue: '当共享挖掘不可用(任务启动时)',
  packages_dag_migration_settingpanel_danggongxiangwajuetooltip:
    '在任务启动时会对共享挖掘的可用性进行检测，当挖掘不可用时按照下方所选策略进行处理。\n可能出现的不可用的场景\n1. 数据连接里面没有打开开关\n2. 设置的起始时间比外存日志数据的第一条更早\n3. 挖掘任务报错停止',
  packages_dag_field_inference_list_gaiziduanyingshe:
    '该字段映射的目标数据类型为系统推测结果，该结果可能存在偏差，请检查并确认是否符合预期，并根据实际情况调整。',
  packages_dag_field_inference_list_gaiziduanwufa:
    '该字段类型暂不支持，为避免数据处理故障，可以使用字段编辑功能将该字段屏蔽。',
  packages_dag_field_inference_main_xuanzemorengeng:
    '选择默认更新条件字段时默认优先按照主键字段关联，无主键的按照唯一索引字段关联，无主键且无唯一索引的按照全字段关联。选择指定字段时将按照指定更新条件字段进行关联',
  packages_dag_nodes_table_zidingyichaxun: '全量自定义查询',
  packages_dag_field_inference_main_gaibiaocunzaibu: '该表存在不支持的数据类型',
  packages_dag_validate_customsql_fail: '当开启了全量自定义查询后，处理节点仅支持使用JS节点',
  packages_dag_validate_customsql_target_fail:
    '当开启了全量自定义查询后，只有弱schema类型的数据源才能作为目标，比如：MongoDB，Kafka，ES',
  packages_dag_field_inference_list_gaiziduanshuju:
    '该字段数据类型暂不支持，为避免由于该字段处理导致任务执行故障，请先将该字段屏蔽。',
  packages_dag_monitor_leftsider_huancunkaishishi: '缓存开始时间',
  packages_dag_monitor_node_zhengzaishiyongdehuancun: '正在使用的缓存',
  packages_dag_nodes_database_fenpianyipidu: '分片一批读取上限',
  packages_dag_nodes_database_fenpianbingfaxian: '分片并发线程数',
  packages_dag_nodes_database_fenpianshuliang: '分片数量',
  packages_dag_nodes_database_fenpiandaxiao: '分片大小',
  packages_dag_nodes_database_jiyucou: '基于count分片',
  packages_dag_nodes_database_jiyumin: '基于min/max分片',
  packages_dag_nodes_database_fenpianfangshi: '分片方式',
  packages_dag_nodes_database_kaiqifenpian: '开启分片',
  packages_dag_nodes_database_fenpianpilianghezengliang: '分片批量和增量数据本地合并之后再发送',
  packages_dag_nodes_database_guanbicigongnenghoufenpian:
    '关闭此功能后分片批量和增量数据不会在本地进行合并， 而是直接发送到目标。 此功能适用于只有批量或者在批量过程中不会发生增量事件的场景。',
  packages_dag_nodes_database_quanliangduandianshi:
    '全量断点适用于数据规模超过1e的场景,并会造成任务开始同步数据的等待时间变长,开启后,全量阶段的任务可中断',
  packages_dag_nodes_database_quanliangduandianxu: '全量断点续传',
  packages_dag_nodes_table_depskai: '开启全量断点续传时不支持开启过滤设置。',
  packages_dag_nodes_table_depskai2: '开启全量断点续传时不支持开启自定义SQL。',
  packages_dag_nodes_table_depsd: '开启自定义SQL/过滤设置后，不支持开启全量断点续传。'
}
