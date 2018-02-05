function getCookie(tokenname){
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