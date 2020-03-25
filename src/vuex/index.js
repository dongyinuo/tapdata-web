import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from "./actions";

Vue.use(Vuex)

const store = new Vuex.Store({
  // 全局变量
  state: {
    dataFlows: ''
  },
 actions,
 mutations,
});

export default store;
