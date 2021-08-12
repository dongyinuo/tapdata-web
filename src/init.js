import Vue from 'vue'
import './plugins/element'
import './plugins/axios'
import './plugins/monent'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/styles/app.scss'
import VueClipboard from 'vue-clipboard2'
import { Message } from 'element-ui'
import settings from './settings'
import TapdataWebCore from 'web-core'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.prototype.$settings = settings
Vue.use(VueClipboard)
Vue.use(VueRouter)
Vue.use(TapdataWebCore)

Vue.prototype.$checkAgentStatus = callback => {
  window.axios.get('api/tcm/agent/agentCount').then(data => {
    if (data.agentRunningCount || data.agentRunningCount > 0) {
      callback && callback()
    } else {
      Message.error('Agent当前状态异常，请检查')
    }
  })
}

export default ({ routes }) => {
  const router = new VueRouter({
    routes
  })
  let loading = null
  router.beforeEach((to, from, next) => {
    next()
  })
  const init = () => {
    var loc = window.location,
      wsUrl = 'ws://'
    if (loc.protocol === 'https:') {
      wsUrl = 'wss://'
    }
    let preUrl = settings.DFS_TM_API_PRE_URL || ''
    wsUrl = wsUrl + loc.host + preUrl + `/ws/agent?X-Token=${window.__USER_INFO__.token}`
    window.App = new Vue({
      router,
      i18n,
      wsOptions: {
        url: wsUrl
      },
      render: h => h(App)
    }).$mount('#app')
  }
  loading = window.loading({ fullscreen: true })
  let count = 0
  let getData = () => {
    Promise.all([window.axios.get('api/tcm/user')])
      .then(([user]) => {
        let userInfo = user
        window.__USER_INFO__ = userInfo
        loading.close()
        init()
      })
      .catch(() => {
        if (count < 4) {
          setTimeout(() => {
            count++
            getData()
          }, 3000)
        } else {
          loading.close()
          init()
          location.replace(location.href.split('#/')[0] + '#/500')
        }
      })
  }
  getData()
}
sessionStorage.setItem('TM_CONFIG', JSON.stringify(settings))
