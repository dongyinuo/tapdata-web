export default {
  /** 全局 */
  gl_see_more: '查看更多',
  gl_no_data: '暫無數據',
  gl_no_match_result: '沒有查到符合條件的結果',
  gl_back_to_list: '返回列表',
  gl_button_cancel: '取消',
  gl_button_delete_fail: '刪除失敗',
  gl_button_update_success: '修改成功',
  /** 模块 */
  // agent
  agent_name: '實例ID/名稱',
  agent_task_number: '任務數',
  agent_create_time: '创建时间',
  agent_version: '版本',
  agent_status: '狀態',
  agent_operate: '操作',
  agent_status_all: '全部狀態',
  agent_status_creating: '待部署',
  agent_status_running: '運行中',
  agent_status_stopped: '離線',
  agent_search: '按ID/實例名稱搜索',
  agent_test_use: '僅供測試使用',
  agent_button_create: '創建 Agent',
  agent_button_order1: '訂購託管實例',
  agent_button_order2: '實例訂購',
  agent_button_deploy: '部署',
  agent_button_stop: '停止',
  agent_button_delete: '删除',
  agent_button_auto_upgrade: '自動升級',
  agent_button_manual_upgrade: '手動升級',
  agent_tip_auto_upgrade: 'Agent離線時無法使用自動升級',
  agent_dialog_upgrade_title:
    'Agent版本有更新，您可以通過以下方式將您的Agent升級到最新版本。升級過程中將無法運行任務。',
  agent_dialog_upgrade_fail: '自動升級失敗，請嘗試手動升級。',
  agent_link_to_purchase_msg: '確認後跳轉下載頁面',
  agent_link_to_purchase_title: '是否確認訂購實例？',
  agent_link_to_old_purchase_msg: '確認後跳轉訂購託管實例頁面',
  agent_link_to_old_purchase_title: '是否確認訂購託管實例？',
  agent_button_stop_tip: '是否停止',
  agent_button_stop_tip_running: '當前Agent有任務正在運行，強行停止Agent可能會導致任務出現異常，是否要強行停止！',
  agent_button_stop_tip_no_running:
    'Agent停止後將無法再繼續運行任務，您需要去Agent安裝目錄下才能再次啟動Agent，是否確認停止？',
  agent_button_stop_msg_success: 'Agent 已停止',
  agent_button_stop_msg_fail: 'Agent 停止失敗',
  agent_button_delete_confirm_title: '刪除後該Agent將無法再繼續使用，是否確認刪除？',
  agent_button_delete_confirm_msg: '當前Agent上有任務正在運行，請先停止任務後再刪除。',
  agent_button_delete_success: 'Agent 删除成功',
  agent_button_delete_fail: 'Agent 刪除失敗',
  agent_auto_upgrade_tip_running_task: '檢測到您有任務正在運行，請先停止所有任務再進行升級操作!',
  agent_auto_upgrade_tip_start: '開始升級',
  agent_auto_upgrade_tip_upgrading: '自動升級中',
  agent_auto_upgrade_tip_progress: '升級包下載進度',
  agent_auto_upgrade_tip_fail: '自動升級失敗，請手動升級',
  agent_auto_upgrade_tip_have_new: 'Agent版本有更新，點擊升級',
  agent_button_create_tip: '是否創建 Agent？',
  // 任务
  task_name: '任務名稱',

  // 数据校验
  verify_button_diff_verify: '差異校驗',
  verify_button_diff_verify_running: '校驗中',
  verify_button_diff_verify_tips: '對本次全量校驗的差異數據結果進行再次校驗，行數差異暫不支持差異校驗',
  verify_last_start_time: '最後校驗時間',
  verify_button_diff_task_history: '校驗歷史',
  verify_message_old_data_not_support: '舊數據暫不支持二次校驗',
  verify_message_out_of_limit: '您的差異數據量已超出任務支持的最大錯誤數據保存條數，暫時無法進行二次校驗'
}
