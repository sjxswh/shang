import actions from './Actions/action'
import mutations from './Mutation/mutation'
import state from './State/state'

import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store  = new Vuex.Store({
	actions,mutations,state
})

export default store
