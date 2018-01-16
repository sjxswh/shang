import state from '../State/state'
var Mutation = {
	ShowHeader(state,isShow){
		state.isShow = isShow
		//console.log(isTrue)
	},
	getLogin(state,isTrue){
		state.loginShow = isTrue
	},
	getCampaigns(state,isTrue){
		state.campaignsShow = isTrue
	}
}

export default Mutation