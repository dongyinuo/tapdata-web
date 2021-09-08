export default {
  /** 全局 */
  gl_see_more: '查看更多',
  gl_no_data: '暂无数据',
  gl_no_match_result: '没有查到符合条件的结果',
  gl_back_to_list: '返回列表',
  gl_button_cancel: '取消',
  gl_button_finish: '完成',
  gl_button_delete_fail: '删除失败',
  gl_button_update_success: '修改成功',
  gl_qr_code_wx_public_account: '微信公众号',
  gl_qr_code_tip: '扫码咨询',
  gl_qr_code_wx_customer_service: '微信客服',
  gl_telephone_tip: '电话咨询',
  /** 模块 */
  // 工作台
  workbench_manage: '工作台',
  workbench_quick_start: '快速开始',
  workbench_notice: '公告通知',
  workbench_overview: '概览',
  workbench_guide: '新手入门',
  workbench_agent_desc:
    '欢迎来到Tapdata Cloud，即将开启您的实时数据同步之旅！初次使用请先安装部署Agent，不然无法运行任务哦。',
  workbench_agent_button_create: '创建Agent',
  workbench_connection_desc:
    '数据连接主要用来建立Agent与用户源数据库和目标数据库的连接。快来创建数据连接，并对已有数据连接的状态进行测试和管理吧。',
  workbench_connection_button_create: '创建连接',
  workbench_task_desc:
    '任务管理主要用来创建同步任务并进行管理。快来创建数据同步任务，并对已有数据同步任务的类型和状态进行查看和管理吧。',
  workbench_task_button_create: '创建任务',
  workbench_overview_connection: '连接',
  workbench_overview_connection_ready: '有效连接',
  workbench_overview_connection_invalid: '无效连接',
  workbench_overview_task: '任务',
  workbench_guide_novice: '新手引导',
  workbench_guide_documentation: '产品文档',
  workbench_guide_problem: '常见问题',
  workbench_guide_data_safe: 'Tapdata cloud 如何保障数据安全？',

  // Agent
  agent_manage: 'Agent管理',
  agent_name: '实例ID/名称',
  agent_id: 'Agent ID',
  agent_task_number: '任务数',
  agent_create_time: '创建时间',
  agent_version: '版本',
  agent_status: '状态',
  agent_operate: '操作',
  agent_status_all: '全部状态',
  agent_status_creating: '待部署',
  agent_status_running: '运行中',
  agent_status_stopped: '离线',
  agent_search: '按ID/实例名称搜索',
  agent_test_use: '仅供测试使用',
  agent_button_create: '创建 Agent',
  agent_button_order1: '订购托管实例',
  agent_button_order2: '实例订购',
  agent_button_deploy: '部署',
  agent_button_deploy_now: '立即部署',
  agent_button_deploy_later: '稍后部署',
  agent_button_stop: '停止',
  agent_button_delete: '删除',
  agent_button_auto_upgrade: '自动升级',
  agent_button_manual_upgrade: '手动升级',
  agent_tip_auto_upgrade: 'Agent离线时无法使用自动升级',
  agent_dialog_upgrade_title:
    'Agent版本有更新，您可以通过以下方式将您的Agent升级到最新版本。升级过程中将无法运行任务。',
  agent_dialog_upgrade_fail: '自动升级失败，请尝试手动升级。',
  agent_link_to_purchase_msg: '确认后跳转下载页面',
  agent_link_to_purchase_title: '是否确认订购实例？',
  agent_link_to_old_purchase_msg: '确认后跳转订购托管实例页面',
  agent_link_to_old_purchase_title: '是否确认订购托管实例？',
  agent_button_create_msg_success: 'Agent创建成功',
  agent_button_create_msg_success_desc: '请点击【立即部署】进入部署页面，按照操作指引完成Agent部署。',
  agent_button_stop_tip: '是否停止',
  agent_button_stop_tip_running: '当前Agent有任务正在运行，强行停止Agent可能会导致任务出现异常，是否要强行停止！',
  agent_button_stop_tip_no_running:
    'Agent停止后将无法再继续运行任务，您需要去Agent安装目录下才能再次启动Agent，是否确认停止？',
  agent_button_stop_msg_success: 'Agent 已停止',
  agent_button_stop_msg_fail: 'Agent 停止失败',
  agent_button_delete_confirm_title: '删除后该Agent将无法再继续使用，是否确认删除？',
  agent_button_delete_confirm_msg: '当前Agent上有任务正在运行，请先停止任务后再删除。',
  agent_button_delete_success: 'Agent 删除成功',
  agent_button_delete_fail: 'Agent 删除失败',
  agent_auto_upgrade_tip_running_task: '检测到您有任务正在运行，请先停止所有任务再进行升级操作!',
  agent_auto_upgrade_tip_start: '开始升级',
  agent_auto_upgrade_tip_upgrading: '自动升级中',
  agent_auto_upgrade_tip_progress: '升级包下载进度',
  agent_auto_upgrade_tip_fail: '自动升级失败，请手动升级',
  agent_auto_upgrade_tip_have_new: 'Agent版本有更新，点击升级',
  agent_button_create_tip: '是否创建 Agent？',
  agent_detail_synchronization_task_number: '同步任务数',
  agent_detail_version: 'Agent 版本',
  agent_detail_create_time: 'Agent 创建时间',
  agent_detail_host_ip: '宿主机IP',
  agent_detail_host_cpu_number: '宿主机CPU数量',
  agent_detail_host_memory_size: '宿主机内存大小',
  agent_detail_installation_manual: '安装目录',

  // Agent部署
  agent_deploy_title: 'Agent 下载与安装',
  agent_deploy_select_tip:
    'Tapdata DFS 云版需要先在本地安装 Agent 以确保连接数据库和数据传输服务的正常运行, 您可以根据要安装服务器的类型在下方选择相应的类型进行下载安装',
  agent_deploy_before_prepare_title: '安装前准备',
  agent_deploy_before_prepare_windows_first: '1. 安装前请确认您的部署环境中已安装Java1.8版本并正确配置环境变量。',
  agent_deploy_before_prepare_windows_first_link: '点击查看Java1.8安装和配置方式',
  agent_deploy_before_prepare_windows_second: '2.点击下方的下载按钮将Tapdata Agent安装包下载到本地环境。',
  agent_deploy_before_prepare_windows_second_download: '点击下载 Tapdata Agent',
  agent_deploy_start_install: '开始安装',
  agent_deploy_start_install_button_copy: '复制',
  agent_deploy_start_install_button_copied: '已复制',
  agent_deploy_start_install_windows_first:
    '1. 将下载好的Tapdata Agent放入要安装Agent的目录，并通过cmd窗口在目录下执行下方命令即可实现Tapdata Agent的自动部署及启动',
  agent_deploy_start_install_windows_second: '2.待上方命令执行完毕后，出现如下图所示日志则代表Agent启动成功：',
  agent_deploy_start_install_windows_third: '3.如果您需要查看Agent的日志或者对Agent进行启停操作，请参考',
  agent_deploy_link_agent_operation: '《Agent基本操作》',
  agent_deploy_before_prepare_linux_first: '1.安装前请确认您的部署环境中已安装Java1.8版本并正确配置环境变量。',
  agent_deploy_before_prepare_linux_first_link: '点击查看Java1.8安装和配置方式',
  agent_deploy_before_prepare_linux_second: '2.我们非常建议在一个独立、干净的文件夹内部署 Tapdata Agent',
  agent_deploy_before_prepare_linux_third:
    '3.下载、部署 Tapdata Agent 无需 root 权限，只需要对部署目录具备读写权限即可',
  agent_deploy_start_install_linux_first:
    '1.请复制下方命令并在本地部署环境执行，其包含 Tapdata Agent 的下载、自动部署及启动',
  agent_deploy_start_install_linux_second: '2.待上方命令执行完毕后，出现如下图所示日志则代表Agent启动成功：',
  agent_deploy_start_install_linux_third: '3.如果您需要查看Agent的日志或者对Agent进行启停操作，请参考',
  agent_deploy_before_prepare_docker_first: '1.我们提供了包含 Tapdata Agent 运行所需环境的镜像',
  agent_deploy_before_prepare_docker_second:
    '2.首先您的部署环境必须已经安装Docker才可使用Docker方式安装，如未安装可参考',
  agent_deploy_before_prepare_docker_install_link: '《Docker安装》',
  agent_deploy_before_prepare_docker_second_install: '进行安装',
  agent_deploy_start_install_docker_first:
    '1.请复制下方命令并在部署环境执行，其包含镜像的下载及运行，Tapdata Agent 的下载、自动部署及启动',
  agent_deploy_start_install_docker_second:
    '2.docker安装成功后，会自动输出已安装Agent的容器ID，您可以通过docker ps命令来查看正在运行的docker',
  agent_deploy_start_install_docker_third: '3.如果您需要查看Agent的日志或者对Agent进行启停操作，请参考',

  // Agent升级
  agent_upgrade_title: 'Agent 版本升级',
  agent_upgrade_select_tip: '系统检测到您的Agent不是最新版本，请按照指引进行升级',
  agent_upgrade_before_title: '升级前',
  agent_upgrade_step_title: '升级步骤',
  agent_deploy_upgrade_button_copy: '复制',
  agent_deploy_upgrade_button_copied: '已复制',
  agent_upgrade_before_windows_first: '1.备份现有程序的tapdata.exe',
  agent_upgrade_before_windows_second: '2.下载新版的tapdata.exe程序放到程序目录',
  agent_upgrade_before_windows_second_download: '点击下载',
  agent_upgrade_before_windows_third: '3.按照升级步骤操作',
  agent_upgrade_step_windows_first: '1.打开cmd窗口，进入原Agent安装目录',
  agent_upgrade_step_windows_second:
    '2.复制下方的升级命令并在目录下执行，该升级命令会自动进行备份、升级和启动，如果升级失败会自动回退版本',
  agent_upgrade_step_windows_third: '3.待升级命令执行完毕后，出现如下所示则代表Agent升级成功：Update finished.',
  agent_upgrade_step_linux_first: '1.进入原Agent安装目录下',
  agent_upgrade_step_linux_second:
    '2.复制下方的升级命令并在目录下执行，该升级命令会自动进行备份、升级和启动，如果升级失败会自动回退版本',
  agent_upgrade_step_linux_third: '3.待升级命令执行完毕后，出现如下所示则代表Agent升级成功：Update finished.',
  agent_upgrade_step_docker_first: '1.进入原Agent的docker容器内',
  agent_upgrade_step_docker_first_one: '(1)找到原Agent的docker容器CONTAINER ID',
  agent_upgrade_step_docker_first_two: '(2)通过容器ID进入容器',
  agent_upgrade_step_docker_first_three: '(3)如果容器已停止运行，可以先启动容器再进入容器进行升级',
  agent_upgrade_step_docker_first_four: '启动容器',
  agent_upgrade_step_docker_first_five: '进入容器',
  agent_upgrade_step_docker_second:
    '2.复制下方的升级命令直接在容器内执行，该升级命令会自动进行备份、升级和启动，如果升级失败会自动回退版本',
  agent_upgrade_step_docker_third: '3.待升级命令执行完毕后，出现如下所示则代表Agent升级成功：Update finished.',

  // 连接
  connection_manage: '连接管理',
  connection_list_column_schema_status: 'Schema加载状态',
  connection_list_column_schema_status_tips: 'Schema加载完成的连接才可以正常创建任务',

  // 任务
  task_manage: '任务管理',
  task_name: '任务名称',
  task_sync_type_initial_sync: '全量',
  task_sync_type_cdc: '增量',
  task_sync_type_initial_sync_cdc: '全量+增量',

  // 数据校验
  verify_manage: '数据校验',
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

  // 操作日志
  operation_log_manage: '操作日志'
}
