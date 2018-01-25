function setCookie(sName,value,iDay,path){
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iDay);
	document.cookie = sName + '=' + encodeURIComponent(value) + ';expires=' + oDate + ';path=' + path;
	
	
}


function getCookie(sName){
	var oCookie = document.cookie;
	var oCookie1 = oCookie.split('; ');
	//console.log(oCookie1)
	for( var i = 0;i < oCookie1.length;i++){
		var oTemp = oCookie1[i].split('=');
		//console.log(oTemp)
		if(oTemp[0] === sName){
			return decodeURIComponent(oTemp[1]);
		}
	}
}



function removeCookie(sName,path){
	document.cookie=  sName + '=;expires=-1;path=' + path;
}
