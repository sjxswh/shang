export function reduceDate(Date,Year,Month,Dates,date,Years,Months,Datess,Data,groupBy){
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
						"status":1,
						"groupBy":groupBy
					}
			}
	export function cOffer(data){
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + 1);
		document.cookie = 'dataCid=' + encodeURIComponent(JSON.stringify(data)) + ';expires=' + oDate + ';path=/';
	}
	export function LinksHrf (data) {
				var oDate = new Date();
				oDate.setDate(oDate.getDate() + 1);
				document.cookie = 'data=' + encodeURIComponent(JSON.stringify(data)) + ';expires=' + oDate + ';path=/';
			}
	export function getcookie(tokenname,tokenCookie,tokenCookies){
		console.log(tokenname)
			tokenname = tokenname + '='
			tokenCookie=document.cookie.split(";")
			for(var i = 0; i < tokenCookie.length; i++){
				tokenCookies = tokenCookie[i]
				while (tokenCookies.charAt(0) == " ") tokenCookies = tokenCookies.substring(1);
    		if(tokenCookies.indexOf(tokenname) != -1) {
    			console.log(JSON.parse(decodeURIComponent(tokenCookies.substring(tokenname.length, tokenCookies.length))))
    			return JSON.parse(decodeURIComponent(tokenCookies.substring(tokenname.length, tokenCookies.length)))
    		}
			}
	}
export default {
	reduceDate,
	cOffer,
	LinksHrf,
	getcookie
}
