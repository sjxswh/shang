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
	}
}

export default Mutation