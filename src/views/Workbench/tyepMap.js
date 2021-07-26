/**
 * @author lg<lirufei0808@gmail.com>
 * @date 2020/8/20
 * @description
 */
export const TYPEMAP = {
  started: '当任务开启',
  paused: '已暂停',
  edited: '被编辑',
  deleted: '被删除',
  abnormallyStopped: '意外停止',
  stoppedByError: '出错停止',
  startupFailed: '启动失败',
  stopFailed: '停止失败',
  encounterERRORSkipped: '运行中跳过一个ERROR',
  CDCLag: 'CDC滞后超时',
  manageSeverRestartFailed: '管理端服务重启失败',
  APISeverRestartFailed: 'API服务重启失败',
  SYNCSeverRestartFailed: '同步治理服务重启失败',
  connectionInterrupted: '断开连接',
  manageSeverStartFailed: '管理端服务启动失败',
  APISeverStartFailed: 'API服务启动失败',
  SYNCSeverStartFailed: '同步治理服务启动失败',
  manageSeverStopFailed: '管理端服务停止失败',
  APISeverStopFailed: 'API服务停止失败',
  SYNCSeverStopFailed: '同步治理服务停止失败',
  APISeverAbnormallyStopped: 'API服务意外停止',
  SYNCSeverAbnormallyStopped: '同步治理服务意外停止',
  manageSeverAbnormallyStopped: '管理端服务意外停止',
  manageSeverStartedSuccessfully: '管理端服务已启动',
  APISeverStartedSuccessfully: 'API服务已启动',
  SYNCSeverStartedSuccessfully: '同步治理服务已启动',
  manageSeverStoppedSuccessfully: '管理端服务已停止',
  APISeverStoppedSuccessfully: 'API服务已停止',
  SYNCSeverStoppedSuccessfully: '同步治理服务已停止',
  manageSeverRestartedSuccessfully: '管理端服务已重启',
  APISeverRestartedSuccessfully: 'API服务已重启',
  SYNCSeverRestartedSuccessfully: '同步治理服务已重启',
  newSeverCreatedSuccessfully: '新服务监控被创建',
  newSeverDeletedSuccessfully: '新服务监控被删除',
  databaseDDLChanged: '监测到数据库DDL变化',
  inspectCount: '校验任务count差异',
  inspectValue: '校验任务内容差异',
  inspectDelete: '校验任务被删除',
  inspectError: '校验任务运行error',
  approaching: '剩余 '
}

export const notificationMAP = {
  jobStarted: '任务被启动',
  jobPaused: '任务被停止',
  jobDeleted: '任务被删除',
  jobStateError: '任务状态error',
  jobEncounterError: '任务遇到错误',
  CDCLagTime: 'CDC滞后通知',
  lagTime: '滞后时间',
  DDL: '数据库DDL变化',
  noticeInterval: '发送间隔',
  serverDisconnected: '服务器断开连接',
  agentStarted: 'Agent服务被启动',
  agentStopped: 'Agent服务被停止',
  agentCreated: 'Agent被创建',
  agentDeleted: 'Agent被删除'
}
