import Vue from 'vue'
import Vuex from 'vuex'
import dataflow from '@tap/dag/src/store'
import classification from '@tap/component/src/store'
import overView from '@tap/ldp/src/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dataflow,
    classification,
    overView
  },

  state: {
    migrateTaskRunningCount: 0,
    instanceLoading: false,
    user: {
      username: '',
      nickname: '',
      avatar: '',
      telephone: '',
      wx: '',
      email: '',
      enableLicense: false,
      licenseCodes: []
    }
  },

  mutations: {
    setInstanceLoading(state, loading) {
      state.instanceLoading = loading
    },

    setUser(state, user = {}) {
      Object.assign(state.user, user)
      console.log('state.user', state.user) // eslint-disable-line
    },

    setUserEmail(state, email) {
      state.user.email = email
    }
  }
})

export default store
