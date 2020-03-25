import enLocale from 'element-ui/lib/locale/lang/en';
const en = {
    message: {
      search: 'search',
      serviceCluMange:'Service cluster management',
      statusLog:'Status log',
      sourchName: 'Name search',
      placeholderServer: 'Please enter a server name',
      filter: 'Filter',
      addServerMon: 'add server monitoring',
      startUp: 'start up',
      close: 'close',
      manageSys: 'manage system',
      restart: 'restart',
      syncGover: 'Syn gover',
      delete: 'delete',
      cancle: 'cancle',
      confirm: 'confirm',
      placeholderMonServer: 'Please enter the monitored service name',
      placeholderCommand: 'Please enter command',
      nullContent: 'Can not be empty',
      saveOK: 'Saved successfully',
      saveFail: 'Save failed',
      deleteOK: 'successfully deleted',
      deleteFail: 'failed to delete',
      selectTime: 'Select time',
      selectDate: 'Select date',
      server:'server',
      serviceType:'Service type',
      level:'level',
      placeholderSelect:'Please select',
      time:'time',
      hostName:'host name',
      ipAddress:'ip address',
      uniqueEncode:'unique encoding',
      logs:'log',
      closeSever:'close service',
      restartServer:'restart service',
      deleteOrNot:'delete or not',
      startupAfter_delete: 'Please delete after startup',
      startupAfter_add: 'Please add after startup',
      noData: 'NO DATA '
    },
    dataFlow: {
      average: 'Average',
      current: 'Current',
      allNode: 'All Nodes',
      taskName: 'Flow Name',
      creatdor: 'Creater',
      creationTime: 'Create Time',
      state: 'State',
      executionTime: 'Lapsed Time',
      inputNumber: 'Input Total',
      outputNumber: 'Output Total',
      rowCount: 'Records',
      inputOutput: 'Throughput',
      transf: 'Transmission Time',
      dataScreening: 'Data Screening',
      second: "SEC",
      min: "MIN",
      hour: "HOUR",
      day: "DAY",
      input: 'Input',
      output: 'Output',
      totalInput:'Total input',
      totalOutput:'Total Output',
      replicate: "Replicate Lag",
      throughputpop:'The read speed from source node and the write speed to the target node, larger number is better',
      transtime_pop: 'The time lapsed from the data record is read from the source node until the data is written into target node',
      replicate_pop: 'The time gap between source node last update time and target node last update time'
    },
    ...enLocale
  };

  export default en;
