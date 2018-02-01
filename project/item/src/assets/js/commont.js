export function reduceDate(Date,date,status,groupBy){
	console.log(Date)
	var Year,Month,Dates,Years,Months,Datess,Data
				Year = Date.split("/")[0]
				Month = Date.split("/")[1]
				Month = Month<10? "0"+Month:Month
				Dates = Date.split("/")[2]
				Dates = Dates<10? "0"+Dates:Dates
				Years = date.split("/")[0]
				Months = date.split("/")[1]
				Months = Months<10? "0"+Months:Months
				Datess = date.split("/")[2]
				Datess = Datess<10? "0"+Datess:Datess
				
				return Data = {
						"year":Year,
						"month":Month,
						"date":Dates,
						"years":Years,
						"months":Months,
						"dates":Datess,
						"status":status,
						"groupBy":groupBy
					}
			}
	export function cOffer(data){
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + 1);
		document.cookie = 'dataCid=' + JSON.stringify(data) + ';expires=' + oDate + ';path=/';
	}
	export function LinksHrf (data) {
				var oDate = new Date();
				oDate.setDate(oDate.getDate() + 1);
				document.cookie = 'data=' + data + ';expires=' + oDate + ';path=/';
			}
	export function getCookie(tokenname){
		var tokenCookie,tokenCookies
			tokenname = tokenname + '='
			tokenCookie=document.cookie.split(";")
			for(var i = 0; i < tokenCookie.length; i++){
				tokenCookies = tokenCookie[i]
				while (tokenCookies.charAt(0) == " ") tokenCookies = tokenCookies.substring(1);
    		if(tokenCookies.indexOf(tokenname) != -1) {
    			return JSON.parse(tokenCookies.substring(tokenname.length, tokenCookies.length))
    		}
			}
	}
	export function ajax(token,from,search,that){
		var timezone,loading,dataList = []
		that.$ajax({
				  method: "get",
				  params:{
				  	authorization:token
				  },
				  url:"http://ec2-13-114-229-73.ap-northeast-1.compute.amazonaws.com:5000/api/profile",
				}).then((data) => {
				   console.log(data)
				   timezone = data.data.data.timezone
				   that.$ajax({
					  method: "get",
					  params:{
					  	authorization:token,
					  	filter:search,
							from:from.year+"-"+from.month+"-"+from.date+"T00:00",
							groupBy:"offer",
							limit:500,
							order:"-visits",
							page:1,
							status:from.status,
							tag:"",
							to:from.years+"-"+from.months+"-"+from.dates+"T00:00",
							tz:timezone
					  },
					  async : false,
					  url:"http://ec2-13-114-229-73.ap-northeast-1.compute.amazonaws.com:5000/api/report",
					}).then(function (data) {
						loading = false
						console.log(dataList)
					  dataList = data.data.data.rows
					  console.log(dataList)
					});
				});	
				console.log(dataList)
				return dataList
	}
export default {
	reduceDate,
	cOffer,
	LinksHrf,
	getCookie,ajax
}
