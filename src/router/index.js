import Layout from '../views/Layout.vue'
import Error from '../views/Error.vue'
import SvgList from '../views/SvgList.vue'
import AgentDownload from '@/views/AgentDownload/AgentPage.vue'
import FastDownload from '@/views/AgentDownload/FastDownload.vue'
import UpgradeVersion from '@/views/AgentDownload/UpgradeVersion.vue'
import ContactUs from '@/views/ContactUs'

const TaskForm = () => import(/* webpackChunkName: "task-form" */ '../views/Task/Form.vue')
const TaskDetails = () => import(/* webpackChunkName: "task-form" */ '../views/Task/Details.vue')
const ConnectionForm = () => import(/* webpackChunkName: "connection-form" */ '../views/Connection/Form.vue')

const routes = [
  {
    path: '/',
    component: Layout,
    meta: {},
    children: [
      {
        path: '/',
        name: 'Home',
        meta: {
          title: '首页'
        },
        redirect: { name: 'Workbench' },
        hidden: true
      },
      {
        path: '/workbench',
        name: 'Workbench',
        component: () => import('../views/Workbench/Workbench.vue'),
        meta: {
          title: '工作台',
          icon: 'workbench',
          hideTitle: true
        },
        children: [
          {
            path: 'notice',
            name: 'WorkbenchNotice',
            component: () => import('../views/Workbench/Notice.vue'),
            meta: {
              title: '公告通知'
            }
          }
        ]
      },
      {
        path: '/systemNotice',
        name: 'SystemNotice',
        component: () => import('../views/Workbench/SystemNotice.vue'),
        meta: {
          title: '系统通知'
        }
      },
      {
        path: '/instance',
        name: 'Instance',
        component: () => import(/* webpackChunkName: "instance" */ '../views/Instance/Instance.vue'),
        meta: {
          title: 'Agent管理',
          icon: 'agent'
        },
        children: [
          {
            path: '/instanceDetails',
            name: 'InstanceDetails',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "instance-details" */ '../views/Instance/Details.vue'),
            meta: {
              title: '实例详情'
            }
          }
        ]
      },
      {
        path: '/connection',
        name: 'Connection',
        // component: Iframe,
        component: () => import(/* webpackChunkName: "connection-list" */ '../views/Connection/List.vue'),
        meta: {
          title: '连接管理',
          icon: 'connection'
        },
        children: [
          {
            path: 'create',
            name: 'ConnectionCreate',
            component: ConnectionForm,
            //component: Iframe,
            meta: {
              title: '创建连接'
            }
          },
          {
            path: ':id',
            name: 'ConnectionEdit',
            component: ConnectionForm,
            //component: Iframe,
            meta: {
              title: '编辑连接'
            }
          }
        ]
      },
      {
        path: '/task',
        name: 'Task',
        component: () => import(/* webpackChunkName: "task-migration" */ '../views/Task/Migration.vue'),
        meta: {
          title: '任务管理',
          icon: 'task'
        },
        children: [
          {
            path: 'create',
            name: 'DataflowCreate',
            component: TaskForm,
            meta: {
              title: '创建任务'
            }
          },
          {
            path: ':id',
            name: 'DataflowEdit',
            component: TaskForm,
            meta: {
              title: '编辑任务'
            }
          },
          {
            path: ':id/monitor',
            name: 'Monitor',
            component: () => import(/* webpackChunkName: "task-monitor" */ '../views/Monitor/Dashboard.vue'),
            meta: {
              title: '运行监控'
            }
          },
          {
            path: ':id/details',
            name: 'DataflowDetails',
            component: TaskDetails,
            meta: {
              title: '任务详情'
            }
          }
        ]
      },
      {
        path: '/verify',
        name: 'Verify',
        component: () => import(/* webpackChunkName: "verify" */ '../views/Verify/List.vue'),
        meta: {
          title: '数据校验',
          icon: 'shujuxiaoyan'
        },
        children: [
          {
            path: 'create',
            name: 'VerifyCreate',
            component: () => import(/* webpackChunkName: "verify-form" */ '../views/Verify/Form.vue'),
            meta: {
              title: '创建校验任务'
            }
          },
          {
            path: ':id/edit',
            name: 'VerifyEdit',
            component: () => import(/* webpackChunkName: "verify-form" */ '../views/Verify/Form.vue'),
            meta: {
              title: '编辑校验任务'
            }
          },
          {
            path: ':id/details',
            name: 'VerifyDetails',
            component: () => import(/* webpackChunkName: "verify-details" */ '../views/Verify/Details.vue'),
            meta: {
              title: '任务校验详情'
            }
          },
          {
            path: 'result/:id/details',
            name: 'VerifyDiffDetails',
            component: () => import(/* webpackChunkName: "verify-result" */ '../views/Verify/Result.vue'),
            meta: {
              title: '差异校验详情'
            }
          },
          {
            path: 'result/:id',
            name: 'VerifyResult',
            component: () => import(/* webpackChunkName: "verify-result" */ '../views/Verify/Result.vue'),
            meta: {
              title: '校验结果'
            }
          },
          {
            path: ':id/history',
            name: 'VerifyHistory',
            component: () => import(/* webpackChunkName: "verify-history" */ '../views/Verify/History.vue'),
            meta: {
              title: '任务校验历史'
            }
          },
          {
            path: 'result/:id/history',
            name: 'VerifyDiffHistory',
            component: () => import(/* webpackChunkName: "verify-history" */ '../views/Verify/History.vue'),
            meta: {
              title: '差异校验历史'
            }
          }
        ]
      },
      {
        path: '/operationLog',
        name: 'OperationLog',
        component: () => import(/* webpackChunkName: "instance" */ '../views/OperationLog/List.vue'),
        meta: {
          title: '操作日志',
          icon: 'operation-log'
        }
      },
      {
        path: '/noviceGuide',
        name: 'NoviceGuide',
        component: () => import(/* webpackChunkName: "instance" */ '../views/NoviceGuide/Index.vue'),
        meta: {
          title: '新手引导'
        }
      }
    ]
  },
  {
    path: '/agentDownload',
    name: 'AgentDownload',
    component: AgentDownload,
    meta: {
      title: 'Agent 下载'
    }
  },
  {
    path: '/fastDownload',
    name: 'FastDownload',
    component: FastDownload,
    meta: {
      title: 'Agent 立即下载'
    }
  },
  {
    path: '/upgradeVersion',
    name: 'UpgradeVersion',
    component: UpgradeVersion,
    meta: {
      title: 'Agent 升级'
    }
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: ContactUs,
    meta: {
      title: '联系我们'
    }
  },
  {
    path: '/500',
    name: '500',
    component: Error
  },
  {
    path: '/invalid',
    name: 'Invalid',
    component: Error
  },
  {
    path: '/freeze',
    name: 'Freeze',
    component: Error
  },
  {
    path: '/off',
    name: 'Off',
    component: Error
  },
  {
    path: '/svg',
    name: 'SvgList',
    component: SvgList
  },
  {
    path: '/dataflow/editor',
    name: 'DataflowNew',
    component: () => import('web-core/views/dataflow/Editor')
  },
  {
    path: '/dataflow/editor/:id',
    name: 'DataflowEditor',
    component: () => import('web-core/views/dataflow/Editor')
  }
]

export default routes
