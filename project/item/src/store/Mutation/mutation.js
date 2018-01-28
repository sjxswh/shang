import state from '../State/state'
var Mutation = {
	ShowHeader(state,isShow){
		state.isShow = isShow
	},
	getLogin(state,isTrue){
		state.loginShow = isTrue
	},
	getCampaigns(state,isTrue){
		state.campaignsShow = isTrue
	},
	getSevenDate (state,data) {
		state.data = data
	},
	DrillDowns (state,data) {
		state.switchSta = data
	},
	DrillDownss (state,data) {
		state.timeZone = data
	},
	DrillDownsss (state,data) {
		state.dayIn = data
	},
}

export default Mutation