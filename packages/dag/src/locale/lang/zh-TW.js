export default {
  packages_dag_dialog_tableValidateTip:
    '新建表名稱僅支持英文、數字、下劃線、點、減號，並以英文字母開頭，不允許 system 開頭',
  packages_dag_dialog_collectionValidateTip:
    '新建數據集名稱僅支持英文、數字、下劃線、點、減號，並以英文字母開頭，不允許 system 開頭',
  packages_dag_task_stetting_basic_setting: '任務設置',
  packages_dag_task_stetting_most_setting: '高級設置',
  packages_dag_loading: '加載中',
  packages_dag_dag_connection: '連接',
  packages_dag_dag_table: '表',
  packages_dag_dag_create_table_as_node: '創建新表作為節點使用',
  packages_dag_dialog_createTable: '創建新表',
  packages_dag_dialog_placeholderTable: '僅支持英文、數字、下劃線、點、減號，並以英文字母開頭，不允許 system 開頭',
  packages_dag_dataFlow_flowEngineVersion: '引擎版本',
  packages_dag_dataFlow_flowEngineV1: 'Flow Engine V1',
  packages_dag_dataFlow_jetFlowEngineV2: 'Jet Flow Engine V2',
  packages_dag_dataFlow_setting_intellect: '智能去重寫入',
  packages_dag_dataFlow_setting_compel: '強制去重寫入',
  packages_dag_dataFlow_SyncInfo_connTZType: '數據庫時區',
  packages_dag_dag_property_setting: '屬性設置',
  packages_dag_dag_meta_data: '元數據',
  packages_dag_meta_table_index: '序號',
  packages_dag_meta_table_field_name: '字段名稱',
  packages_dag_meta_table_field_type: '字段類型',
  packages_dag_meta_table_scale: '精度',
  packages_dag_meta_table_precision: '長度',
  packages_dag_meta_table_default: '默認值',
  packages_dag_meta_table_not_null: '非空',
  packages_dag_meta_table_true: '是',
  packages_dag_meta_table_false: '否',
  packages_dag_meta_table_comment: '字段注釋',
  packages_dag_connection_name_search_placeholder: '請輸入連接名稱搜索',
  packages_dag_task_form_error_name_duplicate: '任務名稱已存在，請重新輸入',
  packages_dag_task_setting_sync_type: '同步類型',
  packages_dag_task_setting_initial_sync_cdc: '全量 + 增量同步',
  packages_dag_task_stetting_desc: '任務描述',
  packages_dag_task_setting_plan_start_date: '指定時間執行',
  packages_dag_task_setting_crontabExpressionFlag: '定期調度任務',
  packages_dag_task_setting_cron_expression: '請輸入調度表達式',
  packages_dag_task_setting_cron_tip:
    '可以通過cron表達式設置固定時間、日期、間隔下運行定期任務 \n語法: 秒 * 分鐘 * 小時 * 日 * 月 * 星期 ? 年 *\n舉例：\n0 */1 * * * ? //每分鐘運行一次 \n0 0 2 * * ? //每天2點運行',
  packages_dag_task_setting_sync_point: '增量採集開始時刻',
  packages_dag_task_setting_syncPoint_tip: '任務將從該時間點開始收集增量日誌',
  packages_dag_task_setting_automatic_index: '自動創建索引',
  packages_dag_task_setting_stop_on_error: '遇到錯誤停止',
  packages_dag_connection_form_shared_mining: '共享挖掘',
  packages_dag_task_list_verify: '數據校驗',
  packages_dag_task_setting_is_schedule: '定期調度任務',
  packages_dag_dag_data_setting_expression: '表達式：',
  packages_dag_dag_data_setting_explanation: '可以通過cron表達式設置固定時間、日期、間隔下運行定期任務',
  packages_dag_dag_data_setting_grammar: '語法:',
  packages_dag_dag_data_setting_runMinute: '每分鐘運行一次',
  packages_dag_dag_data_setting_runDay: '每天2點運行',
  packages_dag_connection_form_access_node: 'agent設置',
  packages_dag_connection_form_automatic: '平台自動分配',
  packages_dag_connection_form_manual: '用戶手動指定',
  packages_dag_task_setting_automatic_ddl: '自動DDL',
  packages_dag_task_setting_distinct_write_type: '去重寫入機制',
  packages_dag_task_setting_transformer_concurrency: '目標寫入線程數',
  packages_dag_task_setting_cdc_concurrency: '增量同步並發寫入',
  packages_dag_task_setting_lag_time: '增量滯後判斷時間設置',
  packages_dag_task_setting_cdc_engine_filter: '啟用引擎過濾',
  packages_dag_task_setting_share_cdc_mode: '共享增量讀取的模式',
  packages_dag_task_setting_processorThreadNum: '處理器線程數',
  packages_dag_task_setting_increOperationMode: '增量數據處理模式',
  packages_dag_button_redo: '重做',
  packages_dag_button_center_content: '內容居中',
  packages_dag_button_auto_layout: '自動佈局',
  packages_dag_button_move_paper: '移動畫布[按住空格]',
  packages_dag_button_zoom_out: '縮小',
  packages_dag_button_zoom_in: '放大',
  packages_dag_task_list_button_monitor: '運行監控',
  packages_dag_editor_cell_validate_empty_name: '名稱必填.',
  packages_dag_editor_cell_validate_none_data_node: '至少有兩個數據節點',
  packages_dag_dag_save_fail: '保存出錯，請檢查節點',
  packages_dag_message_operation_error: '操作失敗',
  packages_dag_message_resetOk: '重置成功',
  packages_dag_message_resetFailed: '重置失敗',
  packages_dag_message_task_rename_success: '任務名稱修改成功',
  packages_dag_dataFlow_multiError_notFound: '此任務不存在',
  packages_dag_dataFlow_multiError_statusError: '任務狀態不允許這種操作',
  packages_dag_dataFlow_multiError_otherError: '操作失敗，請重試',
  packages_dag_editor_cell_link_writeMode_append: '追加寫入',
  packages_dag_editor_cell_link_writeMode_upsert: '更新已存在或插入新數據',
  packages_dag_editor_cell_link_writeMode_update: '更新寫入',
  packages_dag_editor_cell_link_writeMode_merge_embed: '更新內嵌數組',
  packages_dag_connection_status_all: '全部狀態',
  packages_dag_connection_status_testing: '測試中',
  packages_dag_connection_status_invalid: '無效',
  packages_dag_connection_status_ready: '有效',
  packages_dag_dataFlow_delete_confirm_message: '刪除任務 xxx 後，此任務將無法恢復',
  packages_dag_dataFlow_bulk_delete_confirm_message: '批量刪除任務後，任務將無法恢復',
  packages_dag_dataFlow_stop_confirm_message: '暫停任務 xxx 後，任務中未完成全量同步的表再次啟動時，會重新執行全量同步',
  packages_dag_dataFlow_bulk_stop_confirm_message:
    '批量暫停任務後，任務中未完成全量同步的表再次啟動時，會重新執行全量同步',
  packages_dag_dataFlow_force_stop_confirm_message: '強制停止任務 xxx 將立即中斷數據傳輸強制任務快速停止，並重置該任務',
  packages_dag_dataFlow_bulk_force_stop_confirm_message:
    '批量強制停止任務將立即中斷數據傳輸強制任務快速停止，並重置該任務',
  packages_dag_dataFlow_initialize_confirm_message: '重置任務 xxx 將清除任務同步進度，任務將重新執行',
  packages_dag_dataFlow_bulk_initialize_confirm_message: '批量重置任務將清除任務同步進度，任務將重新執行',
  packages_dag_task_preview_status_error: '錯誤',
  packages_dag_task_preview_status_edit: '編輯中',
  packages_dag_task_preview_status_wait_run: '啟動中',
  packages_dag_task_preview_status_running: '運行中',
  packages_dag_task_preview_status_stopping: '停止中',
  packages_dag_task_preview_status_preparing: '准备中',
  packages_dag_task_preview_status_scheduling: '啟動中',
  packages_dag_task_preview_status_schedule_failed: '調度失敗',
  packages_dag_task_preview_status_ready: '待啟動',
  packages_dag_dag_data_setting_minute: '分鐘',
  packages_dag_dag_data_setting_hour: '小時',
  packages_dag_dag_data_setting_day: '日',
  packages_dag_dag_data_setting_month: '月',
  packages_dag_dag_data_setting_week: '星期',
  packages_dag_dag_data_setting_year: '年',
  packages_dag_mouse_selection: '框選 (按住Shift)',
  packages_dag_table_name_search_placeholder: '請輸入表名稱搜索',
  packages_dag_customer_logs_no_more_data: '沒有更多數據',
  packages_dag_customer_logs_no_search_data: '無搜索結果',
  packages_dag_src_command_qingshixianun: '請實現undo方法！ ',
  packages_dag_src_command_qingshixianex: '請實現exec方法！ ',
  packages_dag_components_datapane_shanghaishiputuo: '上海市普陀區金沙江路 1518 弄',
  packages_dag_components_datapane_wangxiaohu: '王小虎',
  packages_dag_components_datapane_dizhi: '地址',
  packages_dag_components_datapane_xingming: '姓名',
  packages_dag_components_datapane_riqi: '日期',
  packages_dag_components_dfnode_gaijiedianth: '該節點「{val1}」已經達到最大連線限制',
  packages_dag_components_dfnode_tuodongshijianduan: '拖動時間段，或者距離變化小，觸發節點激活',
  packages_dag_components_dfnode_qingjianchajiedian: '請檢查節點配置',
  packages_dag_components_dfnode_shanchujiedian: '刪除節點',
  packages_dag_components_dfnode_tianjiajiedian: '添加節點',
  packages_dag_components_formpanel_zengliangzhihoupan: '增量滯後判斷時間設置(秒)',
  packages_dag_components_formpanel_shiwuzuidashi: '事務最大時長(小時)',
  packages_dag_components_formpanel_gongxiangwajueri: '共享挖掘日誌過濾',
  packages_dag_components_formpanel_meiciduqushu: '每次讀取數量',
  packages_dag_components_formpanel_zengliangtongbujian: '增量同步間隔',
  packages_dag_components_formpanel_lunxunduqu: '輪詢讀取',
  packages_dag_components_formpanel_liushiduqu: '流式讀取',
  packages_dag_components_formpanel_dangrenwukaiqi: '當任務開啟',
  packages_dag_components_formpanel_dangrenwubeibian: '當任務被編輯',
  packages_dag_components_formpanel_dangrenwuchucuo: '當任務出錯',
  packages_dag_components_formpanel_dangrenwutingzhi: '當任務停止',
  packages_dag_components_formpanel_fasongyoujian: '發送郵件',
  packages_dag_components_formpanel_zengliangpicidu: '增量批次讀取條數',
  packages_dag_components_formpanel_zhutiao: '逐條',
  packages_dag_components_formpanel_piliang: '批量',
  packages_dag_components_formpanel_zengliangshujuchu: '增量數據處理機制',
  packages_dag_components_formpanel_zhichiwuzhujian: '支持無主鍵同步',
  packages_dag_components_formpanel_zidongchuliD: '自動處理DDL',
  packages_dag_components_formpanel_gengxinout: '👷 更新$outputs',
  packages_dag_components_formpanel_gengxininp: '👷 更新$inputs',
  packages_dag_components_formpanel_shangyigejihuo: '上一個激活的節點校驗結果',
  packages_dag_components_formpanel_jiantingsta: '監聽：stateIsReadonly',
  packages_dag_components_leftsidebar_xuanzeshujuyuan: '選擇數據源類型',
  packages_dag_components_metapane_geziduan: ' 個字段',
  packages_dag_components_metapane_gongyou: '共有 ',
  packages_dag_migration_configpanel_moxing: '模型',
  packages_dag_migration_configpanel_peizhi: '配置',
  packages_dag_migration_consolepanel_quanburizhi: '全部日誌',
  packages_dag_migration_consolepanel_dangqianjiancefaxian: '當前檢測共發現，',
  packages_dag_migration_consolepanel_qingguanzhu: '請關注',
  packages_dag_migration_consolepanel_ge: '個',
  packages_dag_migration_settingpanel_dangrenwufuhe:
    '開啟數據校驗開關後，任務會自動對同步結果的一致性進行全量校驗和增量校驗，並會在運行監控頁面將校驗不一致的數據行數展示出來。需要注意，當任務符合以下情況時，即使開啟校驗開關任務也不會進行校驗\n 1. 添加了中間處理節點\n 2. 源連接不支持校驗\n 3. 目標連接不支持校驗',
  packages_dag_monitor_bottompanel_yunxingjilu: '運行記錄',
  packages_dag_monitor_bottompanel_rizhi: '任務進度查看',
  packages_dag_components_eventchart_qita: '其他',
  packages_dag_components_eventchart_suoxuanzhouqilei: '所選週期累計',
  packages_dag_components_eventchart_renwuyunxinglei: '任務運行累計',
  packages_dag_components_initiallist_quanliangtongbuzhuang: '全量同步狀態',
  packages_dag_components_initiallist_shujutongbu: '數據同步',
  packages_dag_components_initiallist_mubiaobiaoming: '目標表名',
  packages_dag_components_initiallist_yuanbiaoming: '源表名',
  packages_dag_components_initiallist_tongbuzhong: '同步中',
  packages_dag_components_initiallist_weikaishi: '未開始',
  packages_dag_components_initiallist_dianjishuaxin: '點擊刷新',
  packages_dag_components_initiallist_quanliangxinxixiang: '全量信息詳情',
  packages_dag_components_log_xiazaishibai: '下載失敗',
  packages_dag_components_log_zidingyishijian: '自定義時間',
  packages_dag_components_log_quanburizhi: '全部日誌',
  packages_dag_components_log_zuijintian: '最近3天',
  packages_dag_components_log_zuixintian: '最近1天',
  packages_dag_components_log_zuijingexiaoshi: '最近6個小時',
  packages_dag_components_log_kaiqishichangmiao: '開啟時長（秒）',
  packages_dag_components_log_debug: 'DEBUG日誌參數',
  packages_dag_components_log_rizhijibie: '日誌級別：',
  packages_dag_components_log_rizhidengjishe: '日誌輸出等級設置',
  packages_dag_components_log_xiazai: '下載',
  packages_dag_components_log_qingshururizhi: '請輸入日誌內容…',
  packages_dag_components_nodedetaildialog_chulihaoshi: '處理耗時',
  packages_dag_components_nodedetaildialog_xingnengzhibiao: '性能指標',
  packages_dag_components_nodedetaildialog_zengliangshijiandian: '增量時間點',
  packages_dag_components_nodedetaildialog_xieyilianjiehao: '協議連接耗時',
  packages_dag_components_nodedetaildialog_tcPlianjie: 'TCP連接耗時',
  packages_dag_components_nodedetaildialog_lianjiezhuangtai: '連接狀態',
  packages_dag_components_nodedetaildialog_tongbuzhuangtai: '同步狀態',
  packages_dag_components_nodedetaildialog_shijiantongji: '事件統計',
  packages_dag_components_nodedetaildialog_jiedian: '節點',
  packages_dag_components_nodedetaildialog_jiedianxiangqing: '節點詳情',
  packages_dag_components_record_shuchushijianzong: '輸出事件總量',
  packages_dag_components_record_shurushijianzong: '輸入事件總量',
  packages_dag_components_record_yunxingjieguo: '運行結果',
  packages_dag_components_record_caozuoren: '操作人',
  packages_dag_components_record_yunxingjieshushi: '運行結束時間',
  packages_dag_components_record_yunxingkaishishi: '運行開始時間',
  packages_dag_components_timeselect_renwuquanzhouqi: '任務全週期',
  packages_dag_components_timeselect_zuijintian: '最近1天',
  packages_dag_components_timeselect_zuixinxiaoshi: '最新1小時',
  packages_dag_components_timeselect_zuijinfenzhong: '最近5分鐘',
  packages_dag_components_timeselect_zhouqi: '週期',
  packages_dag_components_timeselect_jieshuriqi: '結束日期',
  packages_dag_components_timeselect_kaishiriqi: '開始日期',
  packages_dag_components_timeselect_zhi: '至',
  packages_dag_monitor_leftsider_chulihaoshim: '處理耗時',
  packages_dag_monitor_leftsider_buzhichijiaoyan: '不支持校驗的表：',
  packages_dag_monitor_leftsider_jiaoyanbuyizhi: '校驗不一致的表：',
  packages_dag_monitor_leftsider_chayizongxingshu: '差異總行數：',
  packages_dag_monitor_leftsider_liebiao: '列表',
  packages_dag_monitor_leftsider_renwujiaoyan: '任務校驗',
  packages_dag_monitor_leftsider_biaotongbuzongjin: '表同步總進度',
  packages_dag_monitor_leftsider_yujiquanliangwan: '預計全量完成還需：',
  packages_dag_monitor_leftsider_quanliangwanchengshi: '全量完成時間：',
  packages_dag_monitor_leftsider_quanliangxinxi: '全量信息',
  packages_dag_monitor_node_zengliangzhuangtai: '增量狀態',
  packages_dag_monitor_node_quanliangzhuangtai: '全量狀態',
  packages_dag_monitor_node_snaps: '{val1}/{val2} | 預計全量完成還需 {val3}',
  packages_dag_monitor_node_jinhangzhong: '進行中',
  packages_dag_monitor_node_daijinhang: '待進行',
  packages_dag_monitor_node_leijishuchushi: '累計輸出事件',
  packages_dag_monitor_node_leijishurushi: '累計輸入事件',
  packages_dag_monitor_node_haoshi: '耗時',
  packages_dag_monitor_topheader_dakaijiaoyan: '打開校驗',
  packages_dag_monitor_topheader_mubiaolianjiebu: '3.目標連接不支持校驗',
  packages_dag_monitor_topheader_yuanlianjiebuzhi: '2.源連接不支持校驗',
  packages_dag_monitor_topheader_tianjialezhongjian: '1.添加了中間處理節點',
  packages_dag_monitor_topheader_dangqianrenwuzan: '當前任務暫不支持校驗，可能的原因：',
  packages_dag_monitor_topheader_qidongshijian: '啟動時間：',
  packages_dag_monitor_topheader_qingshururenwu: '請輸入任務名稱',
  packages_dag_monitor_verifypanel_zongji: '總計',
  packages_dag_monitor_verifypanel_buzhichijiaoyan: '不支持校驗',
  packages_dag_monitor_verifypanel_jiaoyanbuyizhi: '校驗不一致',
  packages_dag_monitor_verifypanel_jiaoyanyizhi: '校驗一致',
  packages_dag_monitor_verifypanel_yichangshujuhang: '異常數據（行）：',
  packages_dag_monitor_verifypanel_biaoming: '表名：',
  packages_dag_monitor_verifypanel_lianjieming: '連接名：',
  packages_dag_monitor_verifypanel_qingshurusousuo: '請輸入搜索內容',
  packages_dag_monitor_verifypanel_jiancedaoxinshu: '檢測到新數據，請點擊刷新',
  packages_dag_monitor_verifypanel_wentibiaoqingdan: '問題表清單',
  packages_dag_components_paperempty_shiyinghuabu: '適應畫布',
  packages_dag_components_paperempty_huabushijichi: '畫布實際尺寸',
  packages_dag_components_paperempty_zhantie: '粘貼',
  packages_dag_components_settingpanel_renwudetongbu: '任務的同步類型為增量或全量+增量時執行的',
  packages_dag_components_settingpanel_gongxiangwajueshe: '共享挖掘設置',
  packages_dag_components_settingpanel_shujuyuan: '數據源:',
  packages_dag_components_settingpanel_chuliqixiancheng: '處理器線程數:',
  packages_dag_components_settingpanel_miao: '秒',
  packages_dag_components_settingpanel_zengliangshezhi: '增量設置',
  packages_dag_components_settingpanel_renwuzaijinhang: '任務在進行讀取和寫入時執行的策略',
  packages_dag_components_settingpanel_duxieshezhi: '讀寫設置',
  packages_dag_components_settingpanel_renwuzaiqidong: '任務在啟動和運行時的環境設置',
  packages_dag_components_settingpanel_yunxingshezhi: '運行設置',
  packages_dag_components_settingpanel_jibenshezhi: '基本設置',
  packages_dag_src_editor_chucuole: '出錯了',
  packages_dag_src_editor_renwubaocunchu: '任務保存出錯',
  packages_dag_src_editor_zengshanziduan: '增刪字段',
  packages_dag_src_editor_ziduangaiming: '字段改名',
  packages_dag_src_editor_leixingxiugai: '類型修改',
  packages_dag_src_editor_ziduanjisuan: '字段計算',
  packages_dag_src_editor_zhuconghebing: '主從合併',
  packages_dag_src_editor_juhe: '聚合',
  packages_dag_src_editor_zhuijiahebing: '追加合併',
  packages_dag_src_editor_join: '連接',
  packages_dag_src_migrationeditor_jSchuli: '增強JS',
  packages_dag_src_migrationeditor_jSchuli_standard: '標準JS',
  packages_dag_src_migrationeditor_ziduanbianji: '字段編輯',
  packages_dag_src_migrationeditor_biaobianji: '表編輯',
  packages_dag_src_migrationeditor_zhuangtaijianting: '狀態監聽',
  packages_dag_src_migrationmonitor_gaijiedianbuzhi: '該節點不支持',
  packages_dag_src_migrationmonitor_cunzaibuzhichi: '存在不支持{val1}的節點',
  packages_dag_src_migrationmonitor_noden: '「 {val1} 」沒有任何連線',
  packages_dag_src_migrationmonitorviewer_gaifuzhirenwu: '該複製任務沒有子任務',
  packages_dag_src_migrationmonitorviewer_gaijiedianbuzhi: '該節點不支持',
  packages_dag_src_migrationmonitorviewer_cunzaibuzhichi: '存在不支持{val1}的節點',
  packages_dag_src_migrationmonitorviewer_noden: '「 {val1} 」沒有任何連線',
  packages_dag_mixins_editor_renwujiazaichu: '任務加載出錯',
  packages_dag_mixins_editor_renwubucunzai: '任務不存在',
  packages_dag_mixins_editor_renwuzhonghanyou:
    '任務中含有JS節點、自定義節點、追加合併節點或節點設置增量自定義SQL，暫不支持DDL，請手動關閉',
  packages_dag_mixins_editor_gaijiedianbuzhi: '該節點不支持在 {val1}（{val2}）上運行',
  packages_dag_mixins_editor_not_support_ddl: '該節點不支持DDL，請關閉',
  packages_dag_mixins_editor_not_support_cdc: '該節點不支持增量，請將任務類型修改為全量',
  packages_dag_mixins_editor_task_not_support_cdc: '任務中含有不支持增量的節點，請將任務類型修改為全量',
  packages_dag_mixins_editor_buzhichiduotiao: '不支持多條鏈路，請重新編輯任務鏈路',
  packages_dag_mixins_editor_renwulianlubu: '任務鏈路不完整',
  packages_dag_mixins_editor_renwushezhiyi: '任務設置異常',
  packages_dag_mixins_editor_suoshuage: '所屬agent節點衝突',
  packages_dag_mixins_editor_noden: '「 {val1} 」配置異常',
  packages_dag_mixins_editor_jiedianjiaoyancuo: '節點校驗錯誤',
  packages_dag_mixins_editor_shanchulianjie: '刪除連接',
  packages_dag_mixins_editor_initV: 'initView-dataflowEdit 開啟的監聽',
  packages_dag_mixins_editor_xinrenwu: '新任務@',
  packages_dag_mixins_editor_sourc: '「{val1}」不支持該節點「{val2}」作為目標',
  packages_dag_mixins_editor_gaijiedianta: '該節點「{val1}」僅支持作為源',
  packages_dag_mixins_editor_gaijiedianyijing: '該節點已經達到最大連線限制',
  packages_dag_mixins_editor_gaijiedianso: '該節點「{val1}」僅支持作為目標',
  packages_dag_mixins_formscope_tuiyanshibai: '推演失敗',
  packages_dag_mixins_formscope_liuyipar: '留意parent找不到',
  packages_dag_nodes_aggregate_fanhuishili: '返回示例',
  packages_dag_nodes_aggregate_fenzuziduan: '分組字段',
  packages_dag_nodes_aggregate_zuoyongmubiao: '作用目標',
  packages_dag_nodes_aggregate_juhehanshu: '聚合函數',
  packages_dag_nodes_database_zengliangduoxiancheng: '增量多線程寫入',
  packages_dag_nodes_database_quanliangduoxiancheng: '全量多線程寫入',
  packages_dag_nodes_database_bucunzaishidiu: '不存在時丟棄',
  packages_dag_nodes_database_shanchushijian: '刪除事件',
  packages_dag_nodes_database_bucunzaishicha: '不存在時插入',
  packages_dag_nodes_database_bucunzaishidayinrizhi: '不存在時打印日誌',
  packages_dag_nodes_database_gengxinshijian: '更新事件',
  packages_dag_nodes_database_mubiaocunzaishi: '目標存在時更新',
  packages_dag_nodes_database_charushijian: '插入事件',
  packages_dag_nodes_database_shujuxieruce: '數據寫入策略',
  packages_dag_nodes_database_baochimubiaoduan: '保持目標端原有表結構，清除數據',
  packages_dag_nodes_database_qingchumubiaoduan: '清除目標端原有表結構及數據',
  packages_dag_nodes_database_chongfuchulice: '如果目標表存在',
  packages_dag_nodes_database_tuiyanjieguo: '推演結果',
  packages_dag_nodes_database_guolvjieguo: '過濾結果',
  packages_dag_nodes_database_dangqianjiedianzhi: '當前節點支持處理的DDL事件',
  packages_dag_nodes_database_ddLshijian: 'DDL事件採集',
  packages_dag_nodes_database_kaiqihourenwu: '開啟後任務將會自動採集選中的源端DDL事件',
  packages_dag_nodes_database_dongtaixinzengbiao: '動態新增表',
  packages_dag_nodes_database_quanliangmeipici: '全量每批次讀取的條數',
  packages_dag_nodes_database_piliangduqutiao: '批量讀取條數',
  packages_dag_nodes_database_zidingyi: '自定義',
  packages_dag_nodes_database_xuanzebiao: '選擇表',
  packages_dag_nodes_database_suoshuage: '所屬agent',
  packages_dag_nodes_database_increment_exactly_once_enable_title: '增量精确一次写入',
  packages_dag_nodes_database_increment_exactly_once_enable_tips:
    '使用在目标缓存标记并检查的方式，实现增量数据的精确一次写入。当关联条件的值会发生改变时，建议开启，开启后会导致一定的同步速度下降。目标需要拥有创建表和写入权限。',
  packages_dag_nodes_database_increment_exactly_once_enable_time_window_day_title: '時間窗口（天）',
  packages_dag_nodes_database_increment_exactly_once_enable_time_window_day_tips:
    '精確一次寫入，緩存數據的保留時長，也代表了精確一次生效的時間窗口，引擎運行時，一天會觸發一次自動清理。同時窗口時間設置的越長，會更佔用目標數據庫的存儲空間。 ',
  packages_dag_extends_nodetype_queshaobiyaode: '缺少必要的type屬性！ ',
  packages_dag_nodes_javascript_moxingshengming: '模型聲明',
  packages_dag_nodes_javascript_jiaoben: '腳本',
  packages_dag_nodes_join_youce: '右側',
  packages_dag_nodes_join_zuoce: '左側',
  packages_dag_nodes_join_lianjieziduanshe: '連接字段設置',
  packages_dag_nodes_join_zuolianjie: '左連接',
  packages_dag_nodes_jointcache_qingxuanzehuochuang: '請選擇或創建寫入路徑字段',
  packages_dag_nodes_jointcache_xierulujing: '寫入路徑',
  packages_dag_nodes_jointcache_yuanbiaoguanlianjian: '源表關聯鍵',
  packages_dag_nodes_jointcache_huancunbiaozhujian: '緩存表主鍵',
  packages_dag_nodes_jointcache_guanlianshezhi: '關聯設置',
  packages_dag_nodes_jointcache_chuangjianpipeishu: '創建匹配數據',
  packages_dag_nodes_jointcache_baoliupipeishu: '保留匹配數據',
  packages_dag_nodes_jointcache_duiyinghuancunjie: '對應緩存節點',
  packages_dag_nodes_mergetable_mubiaobiaoziduan: '目標表字段',
  packages_dag_nodes_mergetable_dangqianbiaoziduan: '當前表字段',
  packages_dag_nodes_mergetable_guanliantiaojian: '關聯條件',
  packages_dag_nodes_mergetable_neiqianshuzupi: '內嵌數組匹配條件',
  packages_dag_nodes_mergetable_guanlianhouxieru: '關聯後寫入路徑',
  packages_dag_nodes_mergetable_gengxinjinneiqian: '更新進內嵌數組',
  packages_dag_nodes_mergetable_shujuxierumo: '數據寫入模式',
  packages_dag_nodes_rowfilter_tiaojianbiaodashi: '條件表達式',
  packages_dag_nodes_rowfilter_diuqipipeishu: '丟棄匹配數據',
  packages_dag_nodes_rowfilter_zhixingdongzuo: '執行動作',
  packages_dag_nodes_table_gengxintiaojianzi: '更新條件字段',
  packages_dag_nodes_table_gengxinyicunzai: '更新已存在或者插入新數據',
  packages_dag_nodes_table_yunxingqianshanchu: '運行前刪除已存在的數據',
  packages_dag_nodes_table_baochiyicunzai: '保持已存在的數據',
  packages_dag_nodes_table_yiyoushujuchu: '已有數據處理',
  packages_dag_nodes_table_ddLshijian: 'DDL事件採集',
  packages_dag_nodes_table_meiciduqushu: '每次讀取數量(行)',
  packages_dag_nodes_table_zengliangtongbujian: '增量同步間隔(ms)',
  packages_dag_nodes_table_yifuzhi: '已復制',
  packages_dag_nodes_table_fuzhibiaoming: '複製表名',
  packages_dag_nodes_table_qingxuanzebiao: '請選擇表',
  packages_dag_nodes_table_fuzhishujuku: '複製數據庫名',
  packages_dag_nodes_table_shujuku: '數據庫',
  packages_dag_nodes_targetdatabase_mubiaocunzaishi: '目標存在時更新',
  packages_dag_nodes_targetdatabase_baochimubiaoduan: '保持目標端原有表結構，清除數據',
  packages_dag_nodes_targetdatabase_jiedianmiaoshu: '節點描述',
  packages_dag_src_store_weizhaodaojiedian: '未找到節點',
  packages_dag_src_store_qingkongjiedianshu: '清空節點輸入輸出的監聽',
  packages_dag_node_none_input: '「 {val1} 」至少需要{val2}個源節點',
  packages_dag_node_none_output: '「 {val1} 」至少需要{val2}個目標節點',
  packages_dag_node_none_connection: '「 {val1} 」沒有任何連線',
  packages_dag_node_only_as_source: '該節點「{val1}」僅支持作為源',
  packages_dag_node_only_as_target: '該節點「{val1}」僅支持作為目標',
  packages_dag_components_alert_dangqianrenwuyi: '當前任務已報錯停止，請關注!',
  packages_dag_components_alert_gaojingfashengci: '告警發生次數',
  packages_dag_components_alert_gaojingzuijinfa: '告警最近發生時間',
  packages_dag_components_alert_gaojingshoucifa: '告警首次發生時間',
  packages_dag_components_alert_gaojingmiaoshu: '告警描述',
  packages_dag_components_alert_gaojingzhuangtai: '告警狀態',
  packages_dag_components_alert_gaojingjibie: '告警級別',
  packages_dag_components_frequency_shuaxinpinlu: '刷新頻率',
  packages_dag_components_nodedetaildialog_xieruhaoshi: '寫入耗時',
  packages_dag_components_nodedetaildialog_zengliangduquyan: '增量讀取延遲',
  packages_dag_components_nodedetaildialog_pingjunduquhao: '平均讀取耗時',
  packages_dag_components_nodedetaildialog_chulixieruhao: '處理/寫入耗時',
  packages_dag_components_nodedetaildialog_duquchulihao: '讀取/處理耗時',
  packages_dag_components_nodedetaildialog_chulihaoshidang: '處理耗時：當前節點處理事件的平均耗時',
  packages_dag_components_nodedetaildialog_xieruhaoshidang: '寫入耗時：當前目標節點寫入數據到目標數據庫的耗時',
  packages_dag_components_nodedetaildialog_chulihaoshiyuan: '處理耗時：源節點從源數據庫讀取到事件後完成處理花費的時間',
  packages_dag_components_nodedetaildialog_zengliangshijiandian2: '增量時間點：',
  packages_dag_components_nodedetaildialog_dangqianbiaotongbu: '當前表同步進度',
  packages_dag_components_nodedetaildialog_quanliangkaishishi: '全量開始時間：',
  packages_dag_components_timeselect_renwuzuijinyi: '任務最近一次啟動至今',
  packages_dag_monitor_leftsider_shanchu: '刪除：',
  packages_dag_monitor_leftsider_gengxin: '更新：',
  packages_dag_monitor_leftsider_charu: '插入：',
  packages_dag_monitor_leftsider_renwushijiantong: '处理数据統計(條）',
  packages_dag_monitor_leftsider_chayixiangqing: '差異詳情',
  packages_dag_monitor_leftsider_zuidazengliangyan: '最大增量延遲：',
  packages_dag_monitor_leftsider_tongbuxinxi: '同步信息',
  packages_dag_monitor_leftsider_tiaoshixinxi: '調試信息',
  packages_dag_components_nodedetaildialog_dangqianjiedianchu: '當前節點處理事件的平均耗時',
  packages_dag_components_nodedetaildialog_dangqianjiedianping: '當前節點平均每秒處理的輸入事件數和輸出事件數',
  packages_dag_monitor_leftsider_renwuchuliwan:
    '任務處理完成一條新產生事件需要消耗的總時間，當有多個目標時只統計最大的處理耗時',
  packages_dag_monitor_leftsider_shijiancongyuanku:
    '事件從源庫生成到經任務處理完成寫入目標的延遲時間，當有多個目標時只統計最大的增量延遲時間',
  packages_dag_monitor_leftsider_qpSshizhi: 'QPS是指任務平均每秒處理的輸入事件數和輸出事件數',
  packages_dag_components_log_zuidashijianshu: '最大事件數（條）',
  packages_dag_message_save_fail: '保存失敗',
  packages_dag_task_reset_start: '開始清理任務',
  packages_dag_task_reset_pdk_node_external_resource:
    '清理pdk數據節點[{nodeName}({nodeId})]的外部資源...{status}, 耗時: {elapsedTime} ms',
  packages_dag_task_reset_pdk_node_state:
    '清理pdk數據節點[{nodeName}({nodeId})]的狀態數據...{status}, 耗時: {elapsedTime} ms',
  packages_dag_task_reset_merge_node:
    '清理主從合並節點[{nodeName}({nodeId})]的緩存數據...{status}, 耗時: {elapsedTime} ms',
  packages_dag_task_reset_aggregate_node:
    '清理聚合節點[{nodeName}({nodeId})]的緩存數據...{status}, 耗時: {elapsedTime} ms',
  packages_dag_task_reset_custom_node:
    '清理自定義節點[{nodeName}({nodeId})]的狀態數據...{status}, 耗時: {elapsedTime} ms',
  packages_dag_task_reset_join_node: '清理連接節點[{nodeName}({nodeId})]的狀態數據...{status}, 耗時: {elapsedTime} ms',
  packages_dag_task_reset_end:
    '任務完成清理，共{totalEvent}項需要清理，成功: {succeedEvent}項，失敗: {failedEvent}項...{status}, 耗時: {elapsedTime} ms',
  packages_dag_unknown_error: '清理節點[{nodeName}({nodeId})]出現未知錯誤',
  packages_dag_console_log_status_success: '成功',
  packages_dag_console_log_status_fail: '失敗',
  packages_dag_auto_reset_start: '任務將自動在{resetInterval}秒後對清理失敗項嘗試{rest}次重置清理',
  packages_dag_auto_reset_start_nth: '任務開始進行第{resetTimes}次自動重置清理',
  packages_dag_auto_reset_start_result: '任務重置失敗，請稍後再試',
  packages_dag_migration_alarmpanel_lianxu: '连续',
  packages_dag_migration_alarmpanel_youjiantongzhi: '邮件通知',
  packages_dag_migration_alarmpanel_xitongtongzhi: '系统通知',
  packages_dag_migration_alarmpanel_renwuzengliangyan: '任务增量延迟告警',
  packages_dag_migration_alarmpanel_renwutingzhigao: '任务停止告警',
  packages_dag_migration_alarmpanel_renwuzengliangkai: '任务增量开始通知',
  packages_dag_migration_alarmpanel_renwuquanliangwan: '任务全量完成通知',
  packages_dag_migration_alarmpanel_renwujiaoyanchu: '任务校验出错告警',
  packages_dag_migration_alarmpanel_renwuyunxingchu: '任务运行出错告警',
  packages_dag_migration_alarmpanel_jiedianpingjunchu: '节点平均处理耗时告警',
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
  packages_dag_monitor_topheader_zuijinyiciqi: '最近一次啟動時間：',
  packages_dag_components_nodedetaildialog_quanliangyiwancheng: '全量已完成',
  packages_dag_components_node_quanliangwanchenghaixu: '全量完成還需',
  packages_dag_components_node_xieruhaoshi: '寫入耗時：',
  packages_dag_components_node_chulihaoshi: '處理耗時：',
  packages_dag_components_node_zanbuzhichi: '暫不支持',
  packages_dag_page_return_confirm_title: '返回確認',
  packages_dag_page_return_confirm_content: '當前任務內容為空，是否要保留？',
  packages_dag_page_return_confirm_ok_text: '不保留',
  packages_dag_page_return_confirm_cancel_text: '保留',
  packages_dag_monitor_node_popover_cdcTimeTitle_source: '讀取增量時間點',
  packages_dag_monitor_node_popover_cdcTimeTitle_target: '寫入增量時間點',
  packages_dag_monitor_node_popover_cdcTimeTitle_processor: '處理增量時間點',
  packages_dag_monitor_node_popover_targetWriteTime_title: '平均每條寫入耗時',
  packages_dag_monitor_node_per_deal_need_time: '單條處理耗時',
  packages_dag_api_docs: 'API文檔',
  packages_dag_js_declare_index_queding: '確 定',
  packages_dag_js_declare_index_shilidaima: '示例代碼',
  packages_dag_js_declare_index_shiyongbangzhu: '使用幫助',
  packages_dag_js_declare_index_xianshishengminglai: '顯式聲明來定義和修改模型',
  packages_dag_js_declare_index_zengjiayigezi:
    "// 增加一個字段，如果字段已存在則不操作\nTapModelDeclare.addField({val1}, 'fieldName', 'TapString')\n// 移除一個已存在字段\nTapModelDeclare.removeField({val2}, 'fieldName')\n// 更新一個已存在的字段\nTapModelDeclare.updateField({val3}, 'fieldName', 'TapString')\n// 更新字段，如果不存在則新增\nTapModelDeclare.upsertField({val4}, 'fieldName', 'TapString')\n// 設置字段為主鍵\nTapModelDeclare.setPk({val5}, 'fieldName')\n// 取消主鍵\nTapModelDeclare.unSetPk({val6}, 'fieldName')\n// 增加索引\nTapModelDeclare.addIndex({val7}, 'indexName', [{'fieldName':'fieldName1', 'order': 'asc'}])\n// 移除索引\nTapModelDeclare.removeIndex({val8}, 'indexName')\n",
  packages_dag_python_declare_index_zengjiayigezi:
    "# 增加一個字段，如果字段已存在則不操作\nTapModelDeclare.addField({val1}, 'fieldName', 'TapString')\n# 移除一個已存在字段\nTapModelDeclare.removeField({val2}, 'fieldName')\n# 更新一個已存在的字段\nTapModelDeclare.updateField({val3}, 'fieldName', 'TapString')\n# 更新字段，如果不存在則新增\nTapModelDeclare.upsertField({val4}, 'fieldName', 'TapString')\n# 設置字段為主鍵\nTapModelDeclare.setPk({val5}, 'fieldName')\n# 取消主鍵\nTapModelDeclare.unSetPk({val6}, 'fieldName')\n# 增加索引\nTapModelDeclare.addIndex({val7}, 'indexName', [{'fieldName':'fieldName1', 'order': 'asc'}])\n# 移除索引\nTapModelDeclare.removeIndex({val8}, 'indexName')\n",
  packages_dag_js_processor_index_duibi: '對比',
  packages_dag_js_processor_index_yongfa: '用法：',
  packages_dag_js_processor_index_zuoyong: '作用：',
  packages_dag_js_processor_index_fangfa: '方法',
  packages_dag_js_processor_index_wangluogongju: '網絡工具',
  packages_dag_js_processor_index_iDshengchengqi: 'ID生成器',
  packages_dag_js_processor_index_riqichuli: '日期處理',
  packages_dag_merge_table_tree_index_biaozhijianketong: '表之間可通過拖拽嵌套，確定主從關係',
  packages_dag_merge_table_tree_index_biaomingchengzhichi: '表名稱(支持拖拽)',
  packages_dag_migration_settingpanel_cronbiao: 'Cron表達式格式有誤',
  packages_dag_hooks_useaftertasksaved_moxingyishengcheng: '模型已生成，執行 callback',
  packages_dag_mixins_editor_wsshoudaole: 'ws收到了其他任務的返回',
  packages_dag_nodes_database_tongjizhuijiaxie: '統計追加寫入',
  packages_dag_nodes_database_anshijianleixing: '按事件類型處理',
  packages_dag_nodes_database_tongjizhuijiaxie2: '統計追加寫入: 只處理插入事件，丟棄更新和刪除事件',
  packages_dag_nodes_database_setting_cdc_changjing_desc: '純增量場景下，不支持對目標表結構和數據的清除操作。 ',
  packages_dag_nodes_database_xierumeipizui: '寫入每批最大等待時間(ms)',
  packages_dag_nodes_database_xierumeipizui_tips: '寫入每批最大等待時間(ms)',
  packages_dag_nodes_database_quanliangmeipici2: '全量每批次寫入的條數',
  packages_dag_nodes_database_piliangxierutiao: '批量寫入條數',
  packages_dag_nodes_database_zhengzebiaodashi: '正則表達式匹配模式下，數據庫新增的符合表達式的表會被自動同步到目標',
  packages_dag_nodes_database_anzhengzebiaoda: '按正則表達式匹配',
  packages_dag_nodes_database_anbiaomingxuanze: '按表名選擇',
  packages_dag_nodes_database_value_zanbuzhiciddl: '暫不支持DDL事件採集',
  packages_dag_nodes_mergetable_const_zuiduozhichiliangceng: '最多支持兩層嵌套',
  packages_dag_nodes_mergetable_zhucongpeizhi: '主從配置',
  packages_dag_nodes_table_isDaa_ruguoyuanweimongodb: '源為MongoDB時，需要同步刪除事件，請確保關聯 _id',
  packages_dag_nodes_table_tianjia: '添加',
  packages_dag_nodes_table_zidingyitiaojian: '自定義條件',
  packages_dag_nodes_table_guolushezhi: '過濾設置',
  packages_dag_nodes_table_meiciduquhang: '每次讀取行數',
  packages_dag_nodes_table_lunxunjiangem: '輪詢間隔(ms)',
  packages_dag_nodes_table_lunxunziduanmo: '輪詢字段默認值',
  packages_dag_nodes_table_zhidinglunxunzi: '指定輪詢字段',
  packages_dag_nodes_table_lunxun: '輪詢',
  packages_dag_nodes_table_rizhicdc: '日誌cdc',
  packages_dag_nodes_table_tedingziduande: '特定字段的輪詢方式對數據進行增量採集',
  packages_dag_nodes_table_zengliangtongbufang: '增量同步方式',
  packages_dag_table_list_card_index_zanshimeiyoupi: '暫時沒有匹配的表',
  packages_dag_nodes_database_pipeidaodebiao: '匹配到的表',
  packages_dag_nodes_tableprocessor_biaomingchongfu: '表名重複',
  packages_dag_monitor_leftsider_zuidaQps: '最大QPS(Q/S)',
  packages_dag_monitor_leftsider_pingjunQps: '平均QPS(Q/S)',
  packages_dag_monitor_leftsider_quanliangwanchenghao: '全量完成耗時',
  packages_dag_monitor_bottompanel_renwujindu: '任務進度',
  packages_dag_src_editor_shaohouqidong: '稍後啟動',
  packages_dag_src_editor_jixuqidong: '繼續啟動',
  packages_dag_src_editor_renwubaocunjianceshi:
    '任務保存檢測時發現了告警，可能會導致任務運行出現異常，建議您查看並解決告警後再啟動任務',
  packages_dag_monitor_leftsider_jibenxinxi: '基本信息',
  packages_dag_nodes_aggregate_waicunpeizhi: '外存配置',
  packages_dag_field_inference_main_tuiyanyichang: '推演異常',
  packages_dag_field_inference_main_gengxintiaojianyi: '更新條件異常',
  packages_dag_field_inference_main_quanbubiao: '全部表',
  packages_dag_migration_settingpanel_zhuanweiputongC: '轉為普通CDC模式',
  packages_dag_migration_settingpanel_renwuzhijiebao: '任務直接報錯停止',
  packages_dag_migration_settingpanel_danggongxiangwajue: '當共享挖掘不可用(任務啟動時)',
  packages_dag_migration_settingpanel_danggongxiangwajuetooltip:
    '在任務啟動時會對共享挖掘的可用性進行檢測，當挖掘不可用時按照下方所選策略進行處理。\n可能出現的不可用的場景\n1. 數據連接裡面沒有打開開關\n2. 設置的起始時間比外存日誌數據的第一條更早\n3. 挖掘任務報錯停止',
  packages_dag_field_inference_list_gaiziduanyingshe:
    '該字段映射的目標數據類型為系統推測結果，該結果可能存在偏差，請檢查並確認是否符合預期，並根據實際情況調整。 ',
  packages_dag_field_inference_list_gaiziduanwufa:
    '该字段类型暂不支持，为避免数据处理故障，可以使用字段编辑功能将该字段屏蔽。',
  packages_dag_field_inference_main_xuanzemorengeng:
    '選擇默認更新條件字段時默認優先按照主鍵字段關聯，無主鍵的按照唯一索引字段關聯，無主鍵且無唯一索引的按照全字段關聯。選擇指定字段時將按照指定更新條件字段進行關聯',
  packages_dag_nodes_table_zidingyichaxun: '自定義查詢',
  packages_dag_field_inference_main_gaibiaocunzaibu: '該表存在不支持的數據類型',
  packages_dag_validate_customsql_fail: '當啟用全量自定義查詢後，處理節點僅支持使用JS節點',
  packages_dag_validate_customsql_target_fail:
    '當啟用全量自定義查詢後，只有弱schema類型的數據源才能作為目標，例如：MongoDB、Kafka、ES',
  packages_dag_field_inference_list_gaiziduanshuju:
    '系统无法确定该字段的推演类型，请手动进行类型设置，否则任务执行时将忽略对该字段的处理。',
  packages_dag_monitor_leftsider_huancunkaishishi: '緩存開始時間',
  packages_dag_monitor_node_zhengzaishiyongdehuancun: '正在使用的緩存',
  packages_dag_nodes_database_fenpianyipidu: '分片壹批讀取上限',
  packages_dag_nodes_database_fenpianbingfaxian: '分片並發線程數',
  packages_dag_nodes_database_fenpianshuliang: '分片數量',
  packages_dag_nodes_database_fenpiandaxiao: '分片大小',
  packages_dag_nodes_database_jiyucou: '基於count分片',
  packages_dag_nodes_database_jiyumin: '基於min/max分片',
  packages_dag_nodes_database_fenpianfangshi: '分片方式',
  packages_dag_nodes_database_kaiqifenpian: '開啟分片',
  packages_dag_nodes_database_fenpianpilianghezengliang: '分片批量和增量數據本地合併之後再發送',
  packages_dag_nodes_database_guanbicigongnenghoufenpian:
    '關閉此功能後分片批量和增量數據不會在本地進行合併， 而是直接發送到目標。此功能適用於只有批量或者在批量過程中不會發生增量事件的場景。 ',
  packages_dag_nodes_database_quanliangduandianshi:
    '全量斷點適用於數據規模超過1e的場景,並會造成任務開始同步數據的等待時間變長,開啟後,全量階段的任務可中斷',
  packages_dag_nodes_database_quanliangduandianxu: '全量斷點續傳',
  packages_dag_nodes_table_depskai: '開啟全量斷點續傳時不支持開啟過濾設置。 ',
  packages_dag_nodes_table_depskai2: '開啟全量斷點續傳時不支持開啟自定義SQL。 ',
  packages_dag_nodes_table_depsd: '開啟自定義SQL/過濾設置後，不支持開啟全量斷點續傳。 ',
  packages_dag_task_old_version_confirm: '檢測到當前任務有更新，請刷新頁面加載最新版本',
  packages_dag_date_processor: '時間運算',
  packages_dag_date_processor_data_types: '請選擇您要運算的時間類型',
  packages_dag_date_processor_method: '請選擇運算方式',
  packages_dag_date_processor_increase: '增加',
  packages_dag_date_processor_decrease: '減少',
  packages_dag_nodes_table_shiligro: '示例: {"$group": { "_id": "$name", totalQuantity: { $sum: "$quantity" } }}',
  packages_dag_nodes_table_jinzhichiqu: '僅支持query, 例如: { "_id": "apples", "qty": 5 }',
  packages_dag_migration_settingpanel_shirenwubaocuo: '時，任務報錯停止',
  packages_dag_migration_settingpanel_dangtiaoguoshijian: '當跳過事件數超過',
  packages_dag_migration_settingpanel_dangtiaoguoshijian2: '當跳過事件佔已同步事件的百分比超過',
  packages_dag_migration_settingpanel_zhidingtiaoguoce: '指定跳過策略',
  packages_dag_migration_settingpanel_renwutiaoguoshi: '跳過事件超過閾值時停止任務',
  packages_dag_migration_settingpanel_tiaoguoyichangshi: '跳過異常事件，任務繼續運行',
  packages_dag_migration_settingpanel_dangdanbiaotongbu: '事件處理出現異常時',
  packages_dag_migration_settingpanel_anzhaomorenzhong: '按照默認重試邏輯進行重試',
  packages_dag_default_js: '默認JS',
  packages_dag_standardization_js: '標準化JS',
  packages_dag_mixins_formscope_gaiziduanshibi: '該字段是必填字段!',
  packages_dag_shared_mining_table_info_index_wajuebiaoxinxi: '挖掘表信息',
  packages_dag_table_not_exist: '表不存在,將自動創建',
  packages_dag_field_inference_list_anxishutiaozheng: '按係數調整',
  packages_dag_field_inference_list_zidingyitiaozheng: '自定義調整',
  packages_dag_field_inference_list_anzhaoxishu: '按係數調整字段長度',
  packages_dag_field_inference_list_anzhaoxishu_tip: '按係數調整是指將原推演出的長度乘以設置的係數作為調整後的字段長度',
  packages_dag_field_rename_index_yixiacaozuoyi: '以下操作已匹配不到源字段',
  packages_dag_nodes_database_jinwuzhujianbiao: '僅無主鍵表',
  packages_dag_nodes_database_jinyouzhujianbiao: '僅有主鍵表',
  packages_dag_nodes_database_biaoxianshi: '可選擇的表範圍',
  packages_dag_nodes_database_xuanzeyaoguolvdiaode: '選擇要過濾掉的字段類型',
  packages_dag_field_add_del_index_zhidi: '置底',
  packages_dag_field_add_del_index_xiayi: '下移',
  packages_dag_field_add_del_index_shangyi: '上移',
  packages_dag_field_add_del_index_zhiding: '置頂',
  packages_dag_src_editor_leixingguolu: '類型過濾',
  packages_dag_src_editor_date_processor_field_list: '受運算影響的字段',
  packages_dag_dynamicAdjustMemoryUsage_title: '動態調整記憶體使用',
  packages_dag_dynamicAdjustMemoryUsage_tip:
    '全量同步階段，當識別到同步的數據佔用記憶體較大時，自動按照比例降低記憶體佇列的使用，以防止出現記憶體溢出的錯誤，但次操作會導致同步速度的下降。當確認機器資源较小時，建議啟用，可以有效的保障同步任務的穩定運行。當機器資源充足時，建議關閉。',
  packages_dag_mergeMode: '合併模式',
  packages_dag_main_table_first: '全量主表優先',
  packages_dag_sub_table_first: '全量子表優先',
  packages_dag_model_generation: '模型生成中',
  packages_dag_materialized_view: '物化視圖',
  packages_dag_build_materialized_view: '構建物化視圖',
  packages_dag_select_database_tips: '請選擇數據庫',
  packages_dag_select_table_tips: '請選擇表',
  packages_dag_join_table: '關聯表',
  packages_dag_write_target: '寫入目標',
  packages_dag_materialized_view_field_type: '字段類型',
  packages_dag_materialized_view_main_talbe_tips: '請選擇模型主表',
  packages_dag_materialized_view_field_flatten: '平鋪',
  packages_dag_materialized_view_field_document: '內嵌文檔',
  packages_dag_materialized_view_field_array: '內嵌數組',
  packages_dag_add_field: '新增字段',
  packages_dag_search_node: '搜索節點',
  packages_dag_unwind_name: '拆分數組',
  packages_dag_unwind_path: '數組字段路徑',
  packages_dag_unwind_includeArrayIndex: '保存數組索引的新字段名',
  packages_dag_unwind_preserveNullAndEmptyArrays: '保留NULL或空數組',
  packages_dag_unwind_preserveNullAndEmptyArrays_tips:
    '如果為true，數組為null或為空數組时輸出文檔。\n如果為false，數組為null或為空數組时不會輸出文檔。'
}
