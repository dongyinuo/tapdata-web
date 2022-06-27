export default {
  button_cancel: '取消',
  button_confirm: '確定',
  dialog_tableValidateTip: '新建表名稱僅支持英文、數字、下劃線、點、減號，並以英文字母開頭，不允許 system 開頭',
  dialog_collectionValidateTip:
    '新建數據集名稱僅支持英文、數字、下劃線、點、減號，並以英文字母開頭，不允許 system 開頭',
  task_stetting_basic_setting: '基本設置',
  task_stetting_most_setting: '高級設置',
  loading: '加載中',
  dag_connection: '連接',
  dag_table: '表',
  dag_create_table_as_node: '創建新表作為節點使用',
  dag_processor_node: '處理節點',
  dialog_createTable: '創建新表',
  dialog_placeholderTable: '僅支持英文、數字、下劃線、點、減號，並以英文字母開頭，不允許 system 開頭',
  dataFlow_flowEngineVersion: '引擎版本',
  dataFlow_flowEngineV1: 'Flow Engine V1',
  dataFlow_jetFlowEngineV2: 'Jet Flow Engine V2',
  dataFlow_setting_intellect: '智能去重寫入',
  dataFlow_setting_compel: '強制去重寫入',
  dataFlow_SyncInfo_localTZType: '用戶瀏覽器時區',
  dataFlow_SyncInfo_connTZType: '數據庫時區',
  dataFlow_SyncInfo_currentType: '此刻',
  dag_property_setting: '屬性設置',
  dag_meta_data: '元數據',
  meta_table_index: '序號',
  meta_table_field_name: '字段名稱',
  meta_table_field_type: '字段類型',
  meta_table_scale: '精度',
  meta_table_precision: '長度',
  meta_table_default: '默認值',
  meta_table_not_null: '非空',
  meta_table_true: '是',
  meta_table_false: '否',
  meta_table_comment: '字段注釋',
  connection_name_search_placeholder: '請輸入連接名稱搜索',
  task_form_error_name_duplicate: '任務名稱已存在，請重新輸入',
  task_stetting_name: '任務名稱',
  task_setting_sync_type: '同步類型',
  task_setting_initial_sync_cdc: '全量 + 增量同步',
  task_setting_initial_sync: '全量同步',
  task_setting_cdc: '增量同步',
  task_stetting_desc: '任務描述',
  task_setting_plan_start_date: '计划开始时间',
  task_setting_cron_expression: '請輸入調度表達式',
  task_setting_cron_tip:
    '可以通過cron表達式設置固定時間、日期、間隔下運行定期任務。語法: 秒 * 分鐘 * 小時 * 日 * 月 * 星期 ? 年 * ;例子: 0 */1 * * * ? * //每分鐘運行一次  0 0 2 * * ? * //每天2點運行',
  task_setting_sync_point: '增量採集開始時刻',
  task_setting_syncPoint_tip: '任務將從該時間點開始收集增量日誌',
  task_setting_automatic_index: '自動創建索引',
  task_setting_stop_on_error: '遇到錯誤停止',
  connection_form_shared_mining: '共享挖掘',
  task_list_verify: '數據校驗',
  task_setting_is_schedule: '定期調度任務',
  dag_data_setting_expression: '表達式：',
  dag_data_setting_explanation: '可以通過cron表達式設置固定時間、日期、間隔下運行定期任務',
  dag_data_setting_grammar: '語法:',
  dag_data_setting_runMinute: '每分鐘運行一次',
  dag_data_setting_runDay: '每天2點運行',
  connection_form_access_node: 'agent設置',
  connection_form_automatic: '平台自動分配',
  connection_form_manual: '用戶手動指定',
  task_setting_automatic_ddl: '自動DDL',
  task_setting_distinct_write_type: '去重寫入機制',
  task_setting_transformer_concurrency: '目標寫入線程數',
  task_setting_cdc_concurrency: '增量同步並發寫入',
  task_setting_lag_time: '增量滯後判斷時間設置',
  task_setting_cdc_engine_filter: '啟用引擎過濾',
  task_setting_share_cdc_mode: '共享增量讀取的模式',
  button_undo: '撤銷',
  button_redo: '重做',
  button_delete: '刪除',
  button_center_content: '內容居中',
  button_auto_layout: '自動佈局',
  button_move_paper: '移動畫布[按住空格]',
  button_zoom_out: '縮小',
  button_zoom_in: '放大',
  button_setting: '設置',
  task_list_button_monitor: '運行監控',
  button_save: '保存',
  button_edit: '編輯',
  task_list_force_stop: '強制停止',
  task_list_stop: '停止',
  dataFlow_button_reset: '重置',
  task_list_run: '啟動',
  dataFlow_initial_sync: '全量',
  dataFlow_cdc: '增量',
  editor_cell_validate_empty_name: '名稱必填.',
  editor_cell_validate_none_data_node: '至少有兩個數據節點',
  message_save_ok: '保存成功',
  dag_save_fail: '保存出錯，請檢查節點',
  message_operation_error: '操作失敗',
  message_operation_succuess: '操作成功',
  message_resetOk: '重置成功',
  message_resetFailed: '重置失敗',
  dataFlow_multiError_notFound: '此任務不存在',
  dataFlow_multiError_statusError: '任務狀態不允許這種操作',
  dataFlow_multiError_otherError: '操作失敗，請重試',
  editor_cell_link_writeMode_append: '追加寫入',
  editor_cell_link_writeMode_upsert: '更新已存在或插入新數據',
  editor_cell_link_writeMode_update: '更新寫入',
  editor_cell_link_writeMode_merge_embed: '更新內嵌數組',
  connection: {
    status: {
      all: '全部狀態',
      testing: '測試中',
      invalid: '無效',
      ready: '有效'
    }
  },
  dataFlow: {
    delete_confirm_message: '刪除任務 xxx 後，此任務將無法恢復',
    bulk_delete_confirm_message: '批量刪除任務後，任務將無法恢復',
    stop_confirm_message: '暫停任務 xxx 後，任務中未完成全量同步的表再次啟動時，會重新執行全量同步',
    bulk_stop_confirm_message: '批量暫停任務後，任務中未完成全量同步的表再次啟動時，會重新執行全量同步',
    force_stop_confirm_message: '強制停止任務 xxx 將立即中斷數據傳輸強制任務快速停止，並重置該任務',
    bulk_force_stop_confirm_message: '批量強制停止任務將立即中斷數據傳輸強制任務快速停止，並重置該任務',
    initialize_confirm_message: '重置任務 xxx 將清除任務同步進度，任務將重新執行',
    bulk_initialize_confirm_message: '批量重置任務將清除任務同步進度，任務將重新執行'
  },
  task_preview_status_error: '錯誤',
  task_preview_status_edit: '編輯中',
  task_preview_status_wait_run: '啟動中',
  task_preview_status_complete: '已完成',
  task_preview_status_running: '運行中',
  task_preview_status_stop: '已停止',
  task_preview_status_stopping: '停止中',
  task_preview_status_preparing: '准备中',
  task_preview_status_scheduling: '啟動中',
  task_preview_status_schedule_failed: '調度失敗',
  task_preview_status_ready: '待啟動',
  dag_data_setting_second: '秒',
  dag_data_setting_minute: '分鐘',
  dag_data_setting_hour: '小時',
  dag_data_setting_day: '日',
  dag_data_setting_month: '月',
  dag_data_setting_week: '星期',
  dag_data_setting_year: '年',
}
