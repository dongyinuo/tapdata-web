const Mock = require('mockjs')
const Random = Mock.Random

module.exports = {
  '/tm/api/DataFlows/chart': {
    data: {
      chart1: {
        totalDataFlows: Random.integer(0, 100),
        'statusCount|4': [
          {
            '_id|+1': ['draft', 'error', 'paused', 'running'],
            count: Random.integer(0, 100)
          }
        ]
      },
      chart2: [
        {
          _id: '',
          totalInput: Random.integer(0, 100),
          totalOutput: Random.integer(0, 100),
          totalInputDataSize: Random.integer(0, 100),
          totalOutputDataSize: Random.integer(0, 100),
          totalInsert: Random.integer(0, 100),
          totalInsertSize: Random.integer(0, 100),
          totalUpdate: Random.integer(0, 100),
          totalUpdateSize: Random.integer(0, 100),
          totalDelete: Random.integer(0, 100),
          totalDeleteSize: Random.integer(0, 100)
        }
      ],
      chart3: [],
      chart4: {
        initializing: Random.integer(0, 100),
        initialized: Random.integer(0, 100),
        cdc: Random.integer(0, 100),
        Lag: Random.integer(0, 100)
      },
      chart5: {
        totalDataFlows: Random.integer(0, 100),
        'statusCount|4': [
          {
            '_id|+1': ['draft', 'error', 'paused', 'running'],
            count: Random.integer(0, 100)
          }
        ]
      },
      chart6: {
        initializing: Random.integer(0, 100),
        initialized: Random.integer(0, 100),
        cdc: Random.integer(0, 100),
        Lag: Random.integer(0, 100)
      },
      chart7: {
        total: Random.integer(0, 100),
        passed: Random.integer(0, 100),
        countDiff: Random.integer(0, 100),
        valueDiff: Random.integer(0, 100),
        error: Random.integer(0, 100)
      },
      chart8: { total: 0, invalid: 0, ready: 0 },
      chart9: { total: 0, 'initial_sync+cdc': 0, initial_sync: 0, cdc: 0 }
    },
    code: 'ok',
    msg: 'ok'
  },
  '/tm/api/DataFlows/findOne': {
    data: {
      id: '60dc5941fdbc9e1764636842',
      name: 'test js ',
      mappingTemplate: 'custom',
      stages: [
        {
          id: '76a33ab1-cb0f-42ac-9240-41bb1f421ff0',
          inputLanes: [],
          outputLanes: ['c44fdef0-a4c7-4f75-964a-8e920b044420'],
          connectionId: '60cda022f0e73a0067428c38',
          databaseType: 'mysql',
          tableName: 'CLAIM',
          sql: '',
          dropTable: false,
          type: 'table',
          isFilter: false,
          custFields: [],
          custSql: {
            filterType: 'field',
            selectedFields: [],
            fieldFilterType: 'keepAllFields',
            limitLines: '',
            cSql: '',
            editSql: '',
            conditions: []
          },
          initialOffset: '',
          initialSyncOrder: 0,
          enableInitialOrder: false,
          tableId: '60cda023f0e73a0067428c4b',
          name: 'CLAIM',
          dataQualityTag: false,
          joinTables: [],
          statsStatus: 'cdc'
        },
        {
          id: '9a74cec4-db3e-488f-bd17-ff844f846f50',
          inputLanes: ['c44fdef0-a4c7-4f75-964a-8e920b044420'],
          outputLanes: [],
          connectionId: '60cda022f0e73a0067428c38',
          databaseType: 'mysql',
          tableName: 'CLAIM_C1',
          sql: '',
          dropTable: true,
          type: 'table',
          isFilter: false,
          custFields: [],
          custSql: {
            filterType: 'field',
            selectedFields: [],
            fieldFilterType: 'keepAllFields',
            limitLines: '',
            cSql: '',
            editSql: '',
            conditions: [],
            custFields: [
              'CLAIM_ID',
              'POLICY_ID',
              'CLAIM_DATE',
              'SETTLED_DATE',
              'CLAIM_TYPE',
              'CLAIM_AMOUNT',
              'SETTLED_AMOUNT',
              'CLAIM_REASON',
              'LAST_CHANGE',
              'P2'
            ]
          },
          initialOffset: '',
          initialSyncOrder: 0,
          enableInitialOrder: false,
          tableId: '60dc35702340b60e00088d0d',
          cSql: '',
          name: 'CLAIM_C1',
          dataQualityTag: false,
          joinTables: [
            {
              tableName: 'CLAIM',
              joinType: 'upsert',
              joinPath: '',
              manyOneUpsert: false,
              joinKeys: [{ source: 'CLAIM_ID', target: 'CLAIM_ID' }],
              stageId: '76a33ab1-cb0f-42ac-9240-41bb1f421ff0',
              isArray: false,
              arrayUniqueKey: ''
            }
          ],
          statsStatus: null
        },
        {
          id: 'c44fdef0-a4c7-4f75-964a-8e920b044420',
          inputLanes: ['76a33ab1-cb0f-42ac-9240-41bb1f421ff0'],
          outputLanes: ['9a74cec4-db3e-488f-bd17-ff844f846f50'],
          name: 'JavaScript',
          type: 'js_processor',
          script:
            "function process(record){\n\n\tif (record.CLAIM_ID == 'CL_000000000'){record.CLAIM_ID=null};\n    if (record.CLAIM_ID == 'CL_000000002'){record.CLAIM_ID=null};\n\treturn record; }",
          statsStatus: null
        }
      ]
    },
    code: 'ok',
    msg: 'ok'
  },
  '/tm/api/DataFlows/count': { data: { count: 41 }, code: 'ok', msg: 'ok' },
  '/tm/api/DataFlows/:id/reset': {
    code: 'ok',
    msg: 'ok',
    data: {}
  },
  '/tm/api/DataFlows': {
    'data|0-30': [
      {
        createTime: '2021-04-28T11:10:57.691Z',
        last_updated: '2021-04-28T13:03:49.326Z',
        id: '@id',
        name: '@name',
        'status|1': ['running', 'paused', 'error', 'draft', 'scheduled', 'stopping', 'force stopping'],
        executeMode: 'normal',
        category: '数据库克隆',
        'stopOnError|1': Boolean,
        mappingTemplate: 'cluster-clone',
        stages: [
          {
            connectionId: '60803202ddc0f40343b87e35',
            dataQualityTag: false,
            distance: 1,
            freeTransform: false,
            id: '860486ba-a620-44e8-82a4-dc98b62778ec',
            inputLanes: [],
            joinTables: [],
            name: 'local_179',
            outputLanes: ['76dfca82-f8d1-4909-b6e4-d341fb310bb2'],
            type: 'database',
            database_type: 'mysql',
            dropType: 'no_drop',
            readBatchSize: 1000,
            readCdcInterval: 500,
            statsStatus: 'cdc'
          },
          {
            connectionId: '6087c2ee0786e30010d4c882',
            dataQualityTag: false,
            distance: 0,
            freeTransform: false,
            id: '76dfca82-f8d1-4909-b6e4-d341fb310bb2',
            inputLanes: ['860486ba-a620-44e8-82a4-dc98b62778ec'],
            joinTables: [],
            name: 'DRS-ALI-DEST',
            outputLanes: [],
            type: 'database',
            syncObjects: [{ objectNames: ['my_test1'], type: 'table' }],
            table_prefix: 'ff013_',
            table_suffix: '',
            readBatchSize: 1000,
            readCdcInterval: 500,
            dropType: 'no_drop',
            database_type: 'mysql',
            statsStatus: null
          }
        ],
        setting: {
          name: 'sudu 8',
          'sync_type|1': ['initial_sync+cdc', 'initial_sync', 'cdc'],
          distinctWriteType: 'intellect',
          stopOnError: false,
          isOpenAutoDDL: false,
          twoWay: false,
          syncPoints: [
            {
              connectionId: '60803202ddc0f40343b87e35',
              type: 'current',
              time: '',
              date: '',
              name: '',
              timezone: '+8'
            }
          ],
          readBatchSize: 25000,
          notificationWindow: 0,
          notificationInterval: 300,
          readCdcInterval: 500,
          description: '',
          drop_target: false,
          needToCreateIndex: false,
          increment: false,
          isSchedule: false,
          emailWaring: {
            edited: false,
            started: false,
            error: true,
            paused: true
          }
        },
        platformInfo: { region: '', zone: '' },
        user_id: '@id',
        agentId: '',
        startTime: '2021-04-28T11:11:05.961Z',
        stats: {
          input: { rows: 4990000, dataSize: 239520000 },
          output: { rows: 4990000, dataSize: 239520000 },
          insert: { rows: 4990000, dataSize: 0 },
          update: { rows: 0, dataSize: 0 },
          delete: { rows: 0, dataSize: 0 },
          transmissionTime: 662899,
          transTimeAvg: 0,
          replicationLag: 7872,
          'stagesMetrics|1-10': [
            {
              stageId: '860486ba-a620-44e8-82a4-dc98b62778ec',
              input: { rows: 0, dataSize: 0 },
              output: { rows: 4990000, dataSize: 239520000 },
              insert: { rows: 0, dataSize: 0 },
              update: { rows: 0, dataSize: 0 },
              delete: { rows: 0, dataSize: 0 },
              transmissionTime: Random.integer(0, 100000),
              transTimeAvg: Random.integer(0, 100000),
              replicationLag: Random.integer(0, 10000),
              status: 'cdc'
            }
          ],
          totalCount: null
        },
        user: {
          email: '60718c178fbae2c47bc294b3@custom.com',
          username: '小瓶套',
          emailVerified: true
        },
        errorEvents: [],
        tcm: {
          agentId: '@id',
          agentName: '@name'
        }
      }
    ],
    code: 'ok',
    msg: 'ok'
  },
  '/tm/api/DataFlows/update': {
    data: {
      success: [{ id: '@id', code: 1, msg: 'ok' }],
      fail: []
    },
    code: 'ok',
    msg: 'ok'
  },
  '/tm/api/DataFlows/resetAll': {
    data: {
      success: [{ id: '6098e7a2c66ab70010981c53', code: 1, msg: 'ok' }],
      fail: []
    },
    code: 'ok',
    msg: 'ok'
  },
  '/tm/api/DataFlows/:id': {
    data: {
      createTime: '2021-04-28T11:10:57.691Z',
      last_updated: '2021-05-10T07:55:32.824Z',
      id: '@id',
      name: '@name',
      description: '',
      status: 'paused',
      executeMode: 'normal',
      category: '数据库克隆',
      stopOnError: false,
      mappingTemplate: 'cluster-clone',
      stages: [
        {
          connectionId: '60803202ddc0f40343b87e35',
          dataQualityTag: false,
          distance: Random.integer(0, 1),
          freeTransform: false,
          id: '860486ba-a620-44e8-82a4-dc98b62778ec',
          inputLanes: [],
          joinTables: [],
          name: 'local_179',
          outputLanes: ['76dfca82-f8d1-4909-b6e4-d341fb310bb2'],
          type: 'database',
          database_type: 'mysql',
          dropType: 'no_drop',
          readBatchSize: 1000,
          readCdcInterval: 500,
          statsStatus: 'cdc'
        },
        {
          connectionId: '6087c2ee0786e30010d4c882',
          dataQualityTag: false,
          distance: 0,
          freeTransform: false,
          id: '76dfca82-f8d1-4909-b6e4-d341fb310bb2',
          inputLanes: ['860486ba-a620-44e8-82a4-dc98b62778ec'],
          joinTables: [],
          name: 'DRS-ALI-DEST',
          outputLanes: [],
          type: 'database',
          syncObjects: [{ objectNames: ['my_test1'], type: 'table' }],
          table_prefix: 'ff013_',
          table_suffix: '',
          readBatchSize: 1000,
          readCdcInterval: 500,
          dropType: 'no_drop',
          database_type: 'mysql',
          statsStatus: null
        }
      ],
      setting: {
        name: 'sudu 8',
        sync_type: 'initial_sync+cdc',
        distinctWriteType: 'intellect',
        stopOnError: false,
        isOpenAutoDDL: false,
        twoWay: false,
        syncPoints: [
          {
            connectionId: '60803202ddc0f40343b87e35',
            type: 'current',
            time: '',
            date: '',
            name: '',
            timezone: '+8'
          }
        ],
        readBatchSize: 25000,
        notificationWindow: 0,
        notificationInterval: 300,
        readCdcInterval: 500,
        description: '',
        drop_target: false,
        needToCreateIndex: false,
        increment: false,
        isSchedule: false,
        emailWaring: {
          edited: false,
          started: false,
          error: true,
          paused: true
        }
      },
      dataFlowType: 'normal',
      dataSourceModel: {
        source_databaseType: 'mysql',
        target_databaseType: 'mysql',
        source_connectionId: '60803202ddc0f40343b87e35',
        target_connectionId: '6087c2ee0786e30010d4c882',
        source_connectionName: 'local_179',
        target_connectionName: 'DRS-ALI-DEST'
      },
      platformInfo: { region: '', zone: '' },
      agentTags: ['', ''],
      pausedTime: '2021-05-10T07:56:19.429Z',
      finishTime: '2021-05-10T07:56:19.429Z',
      emailWaring: { edited: true, started: false, error: true, paused: false },
      user_id: '6072c1cbbf43e90010570f3c',
      customId: '60718c178fbae2c47bc294b3',
      agentId: '6086a74b71e5a600109bc483-knyj7h6l',
      errorTime: '',
      forceStoppingTime: '',
      operationTime: '2021-05-10T07:56:04.279Z',
      runningTime: '2021-05-10T07:55:32.967Z',
      scheduledTime: '2021-05-10T07:55:28.486Z',
      startTime: '2021-05-10T07:55:28.486Z',
      stoppingTime: '2021-05-10T07:56:04.279Z',
      msg: '',
      scheduleTime: 1620633332823,
      scheduleTimes: 1,
      pingTime: 1620633379338,
      milestones: [
        {
          code: 'INIT_DATAFLOW',
          status: 'finish',
          errorMessage: '',
          start: 1620633333182,
          end: 1620633333221
        },
        {
          code: 'INIT_CONNECTOR',
          status: 'finish',
          errorMessage: '',
          start: 1620633334786,
          end: 1620633334998
        },
        {
          code: 'INIT_TRANSFORMER',
          status: 'running',
          errorMessage: '',
          start: 1620633336474,
          end: 0
        },
        {
          code: 'CONNECT_TO_SOURCE',
          status: 'finish',
          errorMessage: '',
          start: 1620633335270,
          end: 1620633336835
        },
        {
          code: 'CONNECT_TO_TARGET',
          status: 'waiting',
          errorMessage: '',
          start: 0,
          end: 0
        },
        {
          code: 'READ_SOURCE_DDL',
          status: 'finish',
          errorMessage: '',
          start: 1619608272305,
          end: 1619608272507
        },
        {
          code: 'CREATE_TARGET_TABLE',
          status: 'finish',
          errorMessage: '',
          start: 1619608277704,
          end: 1619608462662
        },
        {
          code: 'READ_SNAPSHOT',
          status: 'finish',
          errorMessage: '',
          start: 1619608272891,
          end: 1619608461742
        },
        {
          code: 'WRITE_SNAPSHOT',
          status: 'finish',
          errorMessage: '',
          start: 1619608277671,
          end: 1619608466755
        },
        {
          code: 'READ_CDC_EVENT',
          status: 'finish',
          errorMessage: '',
          start: 1620633335037,
          end: 1620633337825
        },
        {
          code: 'WRITE_CDC_EVENT',
          status: 'waiting',
          errorMessage: '',
          start: 0,
          end: 0
        }
      ],
      stats: {
        input: { rows: 4990000, dataSize: 239520000 },
        output: { rows: 4990000, dataSize: 239520000 },
        insert: { rows: 4990000, dataSize: 0 },
        update: { rows: 0, dataSize: 0 },
        delete: { rows: 0, dataSize: 0 },
        transmissionTime: 662899,
        transTimeAvg: 0,
        replicationLag: 26874,
        stagesMetrics: [
          {
            stageId: '860486ba-a620-44e8-82a4-dc98b62778ec',
            input: { rows: 0, dataSize: 0 },
            output: { rows: 4990000, dataSize: 239520000 },
            insert: { rows: 0, dataSize: 0 },
            update: { rows: 0, dataSize: 0 },
            delete: { rows: 0, dataSize: 0 },
            transmissionTime: 0,
            transTimeAvg: 0,
            replicationLag: 26874,
            status: 'cdc'
          },
          {
            stageId: '76dfca82-f8d1-4909-b6e4-d341fb310bb2',
            input: { rows: 4990000, dataSize: 239520000 },
            output: { rows: 0, dataSize: 0 },
            insert: { rows: 4990000, dataSize: 0 },
            update: { rows: 0, dataSize: 0 },
            delete: { rows: 0, dataSize: 0 },
            transmissionTime: 662899,
            transTimeAvg: 0,
            replicationLag: 26874,
            status: null
          }
        ],
        totalCount: null
      },
      cdcLastTimes: [
        {
          sourceConnectionId: '60803202ddc0f40343b87e35',
          sourceConnectionName: 'local_179',
          targetConnectionId: '6087c2ee0786e30010d4c882',
          targetConnectionName: 'DRS-ALI-DEST',
          cdcTime: 1619608271000
        }
      ],
      executionTime: 1.5743833333333332,
      errorEvents: [],
      user: { email: '60718c178fbae2c47bc294b3@custom.com', username: '小瓶套' }
    },
    code: 'ok',
    msg: 'ok'
  },
  '/tm/api/typeMappings/dataType': {
    data: [{ dbType: 'mysql', rules: [] }],
    code: 'ok',
    msg: 'ok'
  },
  '/tm/api/DataFlows/:id/copy': {
    data: {
      last_updated: '2021-05-10T07:58:26.739Z',
      id: '6098e7a2c66ab70010981c53',
      name: 'sudu 8 (1)',
      description: '',
      status: 'draft',
      executeMode: 'normal',
      category: '数据库克隆',
      stopOnError: false,
      mappingTemplate: 'cluster-clone',
      stages: [
        {
          connectionId: '60803202ddc0f40343b87e35',
          dataQualityTag: false,
          distance: 1,
          freeTransform: false,
          id: '860486ba-a620-44e8-82a4-dc98b62778ec',
          inputLanes: [],
          joinTables: [],
          name: 'local_179',
          outputLanes: ['76dfca82-f8d1-4909-b6e4-d341fb310bb2'],
          type: 'database',
          database_type: 'mysql',
          dropType: 'no_drop',
          readBatchSize: 1000,
          readCdcInterval: 500,
          statsStatus: 'cdc'
        },
        {
          connectionId: '6087c2ee0786e30010d4c882',
          dataQualityTag: false,
          distance: 0,
          freeTransform: false,
          id: '76dfca82-f8d1-4909-b6e4-d341fb310bb2',
          inputLanes: ['860486ba-a620-44e8-82a4-dc98b62778ec'],
          joinTables: [],
          name: 'DRS-ALI-DEST',
          outputLanes: [],
          type: 'database',
          syncObjects: [{ objectNames: ['my_test1'], type: 'table' }],
          table_prefix: 'ff013_',
          table_suffix: '',
          readBatchSize: 1000,
          readCdcInterval: 500,
          dropType: 'no_drop',
          database_type: 'mysql',
          statsStatus: null
        }
      ],
      setting: {
        name: 'sudu 8',
        sync_type: 'initial_sync+cdc',
        distinctWriteType: 'intellect',
        stopOnError: false,
        isOpenAutoDDL: false,
        twoWay: false,
        syncPoints: [
          {
            connectionId: '60803202ddc0f40343b87e35',
            type: 'current',
            time: '',
            date: '',
            name: '',
            timezone: '+8'
          }
        ],
        readBatchSize: 25000,
        notificationWindow: 0,
        notificationInterval: 300,
        readCdcInterval: 500,
        description: '',
        drop_target: false,
        needToCreateIndex: false,
        increment: false,
        isSchedule: false,
        emailWaring: {
          edited: false,
          started: false,
          error: true,
          paused: true
        }
      },
      dataFlowType: 'normal',
      dataSourceModel: {
        source_databaseType: 'mysql',
        target_databaseType: 'mysql',
        source_connectionId: '60803202ddc0f40343b87e35',
        target_connectionId: '6087c2ee0786e30010d4c882',
        source_connectionName: 'local_179',
        target_connectionName: 'DRS-ALI-DEST'
      },
      platformInfo: { region: '', zone: '' },
      agentTags: ['', ''],
      emailWaring: { edited: true, started: false, error: true, paused: false },
      user_id: '6072c1cbbf43e90010570f3c',
      customId: '60718c178fbae2c47bc294b3',
      msg: '',
      scheduleTime: 1620633332823,
      scheduleTimes: 1,
      pingTime: 1620633379338,
      stats: {}
    },
    code: 'ok',
    msg: 'ok'
  },
  '/tm/api/DataFlows/removeAll': {
    data: {
      success: [{ id: '6098e7a2c66ab70010981c53', code: 1, msg: 'ok' }],
      fail: []
    },
    code: 'ok',
    msg: 'ok'
  },
  '/tm/api/UserLogs/count': { data: { count: 130 }, code: 'ok', msg: 'ok' },
  '/tm/api/UserLogs': {
    code: 'ok',
    msg: 'ok',
    'data|10-100': [
      {
        createTime: '2021-06-18T07:25:46.688Z',
        id: '@guid',
        last_updated: '2021-06-18T07:25:46.688Z',
        'modular|1': ['connection', 'migration', 'agent', 'inspect', 'differenceInspect', 'message'],
        'operation|1': [
          'create',
          'update',
          'copy',
          'delete',
          'start',
          'reset',
          'stop',
          'forceStop',
          'rename',
          'read',
          'readAll',
          'deleteAll'
        ],
        parameter1: '@name',
        parameter2: '@name',
        parameter3: '',
        'rename|1': [true, false],
        oldName: '@name', //原名称
        type: 'userOperation',
        user_id: '60cc0c5887e32100106b6a17',
        username: '@name'
      }
    ]
  }
}
