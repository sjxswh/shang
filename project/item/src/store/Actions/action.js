var Action = {
	ShowHeader(){
		let isShowHO = true,isShowF = true
		this.commit("ShowHeader",[isShowHO,isShowF])
	},
	getLogin(){
		let isShowHO = false,isShowF = false
		this.commit("getLogin",[isShowHO,isShowF])
	},
	getCampaigns(){
		let isShowHO = false,isShowF = true
		this.commit("getCampaigns",[isShowHO,isShowF])
	},
	getSevenDate (store,data) {
		this.commit("getSevenDate",data)
	},
	FooterShow () {
		let ss = false
		this.commit("FooterShow",ss)
	},
	FooterHide () {
		let ss = true
		this.commit("FooterShow",ss)
	},
}

export default Action
