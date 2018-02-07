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
	FooterShow (state,data) {
		state.FooterShow = data
	},
	FooterHide (state,data) {
		state.FooterHide = data
	},
}

export default Mutation