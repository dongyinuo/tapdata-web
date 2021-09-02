export default {
  /** 全局 */
  gl_see_more: '查看更多',
  gl_no_data: '暫無數據',
  gl_no_match_result: '沒有查到符合條件的結果',
  gl_back_to_list: '返回列表',
  gl_button_cancel: '取消',
  gl_button_finish: '完成',
  gl_button_delete_fail: '刪除失敗',
  gl_button_update_success: '修改成功',
  gl_qr_code_wx_public_account: '微信公眾號',
  gl_qr_code_tip: '掃碼諮詢',
  gl_qr_code_wx_customer_service: '微信客服',
  gl_telephone_tip: '電話諮詢',
  /** 模块 */
  // 工作台
  workbench_manage: '工作台',
  workbench_quick_start: '快速開始',
  workbench_notice: '公告通知',
  workbench_overview: '概覽',
  workbench_guide: '新手入門',
  workbench_agent_desc:
    '歡迎來到Tapdata Cloud，即將開啟您的實時數據同步之旅！初次使用請先安裝部署Agent，不然無法運行任務哦。 ',
  workbench_agent_button_create: '創建Agent',
  workbench_connection_desc:
    '數據連接主要用來建立Agent與用戶源數據庫和目標數據庫的連接。快來創建數據連接，並對已有數據連接的狀態進行測試和管理吧。 ',
  workbench_connection_button_create: '創建連接',
  workbench_task_desc:
    '任務管理主要用來創建同步任務並進行管理。快來創建數據同步任務，並對已有數據同步任務的類型和狀態進行查看和管理吧。 ',
  workbench_task_button_create: '創建任務',
  workbench_overview_connection: '連接',
  workbench_overview_connection_ready: '有效連接',
  workbench_overview_connection_invalid: '無效連接',
  workbench_overview_task: '任務',
  workbench_guide_novice: '新手引導',
  workbench_guide_documentation: '產品文檔',
  workbench_guide_problem: '常見問題',
  workbench_guide_data_safe: 'Tapdata cloud 如何保障數據安全？ ',

  // Agent
  agent_manage: 'Agent管理',
  agent_name: '實例ID/名稱',
  agent_id: 'Agent ID',
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
  agent_button_deploy_now: '立即部署',
  agent_button_deploy_later: '稍後部署',
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
  agent_button_create_msg_success: 'Agent創建成功',
  agent_button_create_msg_success_desc: '請點擊【立即部署】進入部署頁面，按照操作指引完成Agent部署。',
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
  agent_detail_synchronization_task_number: '同步任務數',
  agent_detail_version: 'Agent 版本',
  agent_detail_create_time: 'Agent 創建時間',
  agent_detail_host_ip: '宿主機IP',
  agent_detail_host_cpu_number: '宿主機CPU數量',
  agent_detail_host_memory_size: '宿主機內存大小',
  agent_detail_installation_manual: '安裝目錄',

  // agent部署
  agent_deploy_title: 'Agent 下載與安裝',
  agent_deploy_select_tip:
    'Tapdata DFS 雲版需要先在本地安裝 Agent 以確保連接數據庫和數據傳輸服務的正常運行, 您可以根據要安裝服務器的類型在下方選擇相應的類型進行下載安裝',
  agent_deploy_before_prepare_title: '安裝前準備',
  agent_deploy_before_prepare_windows_first: '1. 安裝前請確認您的部署環境中已安裝Java1.8版本並正確配置環境變量。 ',
  agent_deploy_before_prepare_windows_first_link: '點擊查看Java1.8安裝和配置方式',
  agent_deploy_before_prepare_windows_second: '2.點擊下方的下載按鈕將Tapdata Agent安裝包下載到本地環境。 ',
  agent_deploy_before_prepare_windows_second_download: '點擊下載 Tapdata Agent',
  agent_deploy_start_install: '開始安裝',
  agent_deploy_start_install_button_copy: '複製',
  agent_deploy_start_install_button_copied: '已復制',
  agent_deploy_start_install_windows_first:
    '1. 將下載好的Tapdata Agent放入要安裝Agent的目錄，並通過cmd窗口在目錄下執行下方命令即可實現Tapdata Agent的自動部署及啟動',
  agent_deploy_start_install_windows_second: '2.待上方命令執行完畢後，出現如下圖所示日誌則代表Agent啟動成功：',
  agent_deploy_start_install_windows_third: '3.如果您需要查看Agent的日誌或者對Agent進行啟停操作，請參考',
  agent_deploy_link_agent_operation: '《Agent基本操作》',
  agent_deploy_before_prepare_linux_first: '1.安裝前請確認您的部署環境中已安裝Java1.8版本並正確配置環境變量。 ',
  agent_deploy_before_prepare_linux_first_link: '點擊查看Java1.8安裝和配置方式',
  agent_deploy_before_prepare_linux_second: '2.我們非常建議在一個獨立、乾淨的文件夾內部署 Tapdata Agent',
  agent_deploy_before_prepare_linux_third:
    '3.下載、部署 Tapdata Agent 無需 root 權限，只需要對部署目錄具備讀寫權限即可',
  agent_deploy_start_install_linux_first:
    '1.請複制下方命令並在本地部署環境執行，其包含 Tapdata Agent 的下載、自動部署及啟動',
  agent_deploy_start_install_linux_second: '2.待上方命令執行完畢後，出現如下圖所示日誌則代表Agent啟動成功：',
  agent_deploy_start_install_linux_third: '3.如果您需要查看Agent的日誌或者對Agent進行啟停操作，請參考',
  agent_deploy_before_prepare_docker_first: '1.我們提供了包含 Tapdata Agent 運行所需環境的鏡像',
  agent_deploy_before_prepare_docker_second:
    '2.首先您的部署環境必須已經安裝Docker才可使用Docker方式安裝，如未安裝可參考',
  agent_deploy_before_prepare_docker_install_link: '《Docker安裝》',
  agent_deploy_before_prepare_docker_second_install: '進行安裝',
  agent_deploy_start_install_docker_first:
    '1.請複制下方命令並在部署環境執行，其包含鏡像的下載及運行，Tapdata Agent 的下載、自動部署及啟動',
  agent_deploy_start_install_docker_second:
    '2.docker安裝成功後，會自動輸出已安裝Agent的容器ID，您可以通過docker ps命令來查看正在運行的docker',
  agent_deploy_start_install_docker_third: '3.如果您需要查看Agent的日誌或者對Agent進行啟停操作，請參考',

  // Agent升級
  agent_upgrade_title: 'Agent 版本升級',
  agent_upgrade_select_tip: '系統檢測到您的Agent不是最新版本，請按照指引進行升級',
  agent_upgrade_before_title: '升級前',
  agent_upgrade_step_title: '升級步驟',
  agent_deploy_upgrade_button_copy: '複製',
  agent_deploy_upgrade_button_copied: '已復制',
  agent_upgrade_before_windows_first: '1.備份現有程序的tapdata.exe',
  agent_upgrade_before_windows_second: '2.下載新版的tapdata.exe程序放到程序目錄',
  agent_upgrade_before_windows_second_download: '點擊下載',
  agent_upgrade_before_windows_third: '3.按照升級步驟操作',
  agent_upgrade_step_windows_first: '1.打開cmd窗口，進入原Agent安裝目錄',
  agent_upgrade_step_windows_second:
    '2.複製下方的升級命令並在目錄下執行，該升級命令會自動進行備份、升級和啟動，如果升級失敗會自動回退版本',
  agent_upgrade_step_windows_third: '3.待升級命令執行完畢後，出現如下所示則代表Agent升級成功：Update finished.',
  agent_upgrade_step_linux_first: '1.進入原Agent安裝目錄下',
  agent_upgrade_step_linux_second:
    '2.複製下方的升級命令並在目錄下執行，該升級命令會自動進行備份、升級和啟動，如果升級失敗會自動回退版本',
  agent_upgrade_step_linux_third: '3.待升級命令執行完畢後，出現如下所示則代表Agent升級成功：Update finished.',
  agent_upgrade_step_docker_first: '1.進入原Agent的docker容器內',
  agent_upgrade_step_docker_first_one: '(1)找到原Agent的docker容器CONTAINER ID',
  agent_upgrade_step_docker_first_two: '(2)通過容器ID進入容器',
  agent_upgrade_step_docker_first_three: '(3)如果容器已停止運行，可以先啟動容器再進入容器進行升級',
  agent_upgrade_step_docker_first_four: '啟動容器',
  agent_upgrade_step_docker_first_five: '進入容器',
  agent_upgrade_step_docker_second:
    '2.複製下方的升級命令直接在容器內執行，該升級命令會自動進行備份、升級和啟動，如果升級失敗會自動回退版本',
  agent_upgrade_step_docker_third: '3.待升級命令執行完畢後，出現如下所示則代表Agent升級成功：Update finished.',

  // 连接
  connection_manage: '連接管理',

  // 任务
  task_manage: '任務管理',
  task_name: '任務名稱',
  task_sync_type_initial_sync: '全量',
  task_sync_type_cdc: '增量',
  task_sync_type_initial_sync_cdc: '全量+增量',

  // 数据校验
  verify_manage: '數據校驗',
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

  // 操作日志
  operation_log_manage: '操作日誌'
}
