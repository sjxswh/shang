if(!window.criteo_q||window.criteo_q instanceof Array){var oldQueue=window.criteo_q||[];window.removeLater=function(h){setTimeout(function(){null!==h&&null!==h.parentElement&&h.parentElement.removeChild(h)},3E4)};window.criteo_q=function(){function h(a){for(var b=document.cookie.split(";"),e=0;e<b.length;e++){var f=b[e],c=f.substr(0,f.indexOf("=")).replace(/^\s+|\s+$/g,""),f=f.substr(f.indexOf("=")+1);if(c===a)return(decodeURIComponent||unescape)(f)}return null}function z(a,b){if(a&&1<a.length){"?"===
a[0]&&(a="&"+a.substr(1));var e="&"+b+"=",f=a.indexOf(e);if(-1!==f){var c=a.indexOf("&",f+e.length);return a.slice(f+e.length,0>c?void 0:c)}}}var n=function(){var a=navigator.userAgent.match(/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i),b=!!a,a=a&&11<=parseFloat(a[1]);return{is_safari:b,has_itp:a}}(),c={bodyReady:!1,domReady:!1,queue:[],actions:[],disingScheduled:[],accounts:[],acid:null,axid:null,pxsig:null,idcpy:null,idfs:null,
idfs_read:!1,sid:null,optout:!1,ccp:null,cop:null,ua:n,syncframe_loading:n.is_safari,waiting_syncframe:n.has_itp,is_cbs_enabled:!1},d={tagVersion:"4.5.4",handlerUrlPrefix:("https:"===document.location.protocol?"https://sslwidget.":"http://widget.")+"criteo.com/event",handlerResponseType:"single",responseType:"js",handlerParams:{v:"4.5.4"},extraData:[],customerInfo:[],manualDising:!1,manualFlush:!1,disOnce:!1,partialDis:!1,idfsCookieName:"cto_idfs",guidCookieName:"cto_idcpy",secureIdCookieName:"cto_sid",
lwidCookieName:"cto_lwid",guidCookieRetentionTimeHours:9490,optoutCookieName:"cto_optout",optoutCookieRetentionTimeHours:43800,gumSyncFrameEndPoint:window.CriteoSyncFrameUrlOverride||"https://gum.criteo.com/syncframe",gumSyncFrameId:"criteo-syncframe",forceSyncFrame:!1,eventMap:{applaunched:"al",viewitem:"vp",viewhome:"vh",viewlist:"vl",viewbasket:"vb",viewsearch:"vs",tracktransaction:"vc",calldising:"dis",setdata:"exd",setemail:"ce"},propMap:{event:"e",account:"a",currency:"c",product:"p",item:"p",
"item.id":"i","item.price":"pr","item.quantity":"q","product.id":"i","product.price":"pr","product.quantity":"q",data:"d",keywords:"kw",checkin_date:"din",checkout_date:"dout",deduplication:"dd",attribution:"at","attribution.channel":"ac","attribution.value":"v",user_segment:"si",new_customer:"nc",customer_id:"ci",email:"m",hash_method:"h",transaction_value:"tv",responseType:"rt",page_name:"pn",page_id:"pi",page_number:"pnb",category:"ca",filters:"f","filters.name":"fn","filters.operator":"fo","filters.value":"fv",
retailer_visitor_id:"rvi",price:"pr",availability:"av"},setters:{seturl:{cfg:"handlerUrlPrefix",evt:"url"},setaccount:{cfg:"account",evt:"account"},setcalltype:{cfg:"handlerResponseType",evt:"type"},setresponsetype:{cfg:"responseType",evt:"type"},oninitialized:{cfg:"onInitialized",evt:"callback"},ondomready:{cfg:"onDOMReady",evt:"callback"},beforeappend:{cfg:"beforeAppend",evt:"callback"},aftereval:{cfg:"afterEval",evt:"callback"},onflush:{cfg:"onFlush",evt:"callback"}},flags:{disonce:"disOnce",manualdising:"manualDising",
manualflush:"manualFlush",nopartialflush:"noPartialFlush",disonpartialflush:"partialDis"}},A=function(a,b,e){var f=new Date;f.setTime(f.getTime()+36E5*e);e="expires="+f.toUTCString();for(var f=document.location.hostname.split("."),c=0;c<f.length;++c){var d=f.slice(f.length-c-1,f.length).join("."),d="domain=."+d;document.cookie=a+"="+(encodeURIComponent||escape)(b)+";"+e+";"+d+";path=/";if((d=h(a))&&d===b)break}},H=function(){var a=document.createElement("iframe"),b={uid:c.idcpy,idfs:c.idfs,optout:c.optout,
sid:c.sid,lwid:c.lwid,origin:window.SYNCFRAME_ORIGIN||"onetag",version:d.tagVersion.replace(/\./g,"_")},e=d.gumSyncFrameEndPoint,e=e+("#"+JSON.stringify(b));a.src=e;a.id=d.gumSyncFrameId;a.width=0;a.height=0;a.frameBorder=0;a.setAttribute("style","border-width:0px; margin:0px; display:none");window.removeLater(a);return a},r=function(a,b,e){A(a,b,e);if(window.localStorage)try{window.localStorage.setItem(a,b)}catch(f){}},s=function(a){var b;window.localStorage&&(b=window.localStorage.getItem(a));return h(a)||
b},v=function(a){A(a,"",0);window.localStorage&&window.localStorage.removeItem(a)},I=function(){var a=(new Date).getTime();"undefined"!==typeof performance&&"function"===typeof performance.now&&(a+=performance.now());return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var e=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"===b?e:e&3|8).toString(16)})},J=function(){if(c.syncframe_loading&&window.addEventListener||d.forceSyncFrame){var a=H(),b=function(a){var b=a.data;if(b.isCriteoMessage){a.stopPropagation();
c.syncframe_loading=!1;c.idfs_read=b.idfsRead;if(b.optout)c.optout=!0,r(d.optoutCookieName,"1",d.optoutCookieRetentionTimeHours),v(d.guidCookieName),v(d.idfsCookieName),v(d.secureIdCookieName);else if(b.uid||b.idfs||b.sid)b.uid&&(a=b.uid,c.idcpy=a,r(d.guidCookieName,a,d.guidCookieRetentionTimeHours)),b.idfs&&(a=b.idfs,c.idfs=a,r(d.idfsCookieName,a,d.guidCookieRetentionTimeHours)),b.removeSid?v(d.secureIdCookieName):b.sid&&(b=b.sid,c.sid=b,r(d.secureIdCookieName,b,d.guidCookieRetentionTimeHours));
c.waiting_syncframe&&c.waiting_syncframe&&(c.waiting_syncframe=!1,t())}};window.addEventListener&&(window.addEventListener("message",b,!0),c.queue.push({event:"appendtag",element:a}))}else c.syncframe_loading=!1},x=function(a){if(a&&a.referrer){var b=a.createElement("a");b.href=a.referrer;return b}return null};(function(a){a.idcpy=s(d.guidCookieName);a.optout=Boolean(s(d.optoutCookieName));a.idfs=s(d.idfsCookieName);a.sid=s(d.secureIdCookieName);var b=s(d.lwidCookieName);b||(b=I(),r(d.lwidCookieName,
b,d.guidCookieRetentionTimeHours));a.lwid=b})(c);(function(a){var b=h("criteo_acid"),e=h("cto_axid"),c=h("cto_pxsig"),d=h("cto_optout");null===b&&null===e&&null===d&&null===c?(b=new Date,b.setTime(b.getTime()+1E4),b="expires="+b.toUTCString(),document.cookie=["criteo_write_test=ChUIBBINbXlHb29nbGVSdGJJZBgBIAE","path=/",b].join("; "),b=h("criteo_write_test"),a.canWriteCookie=null!==b,document.cookie="criteo_write_test=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC"):(a.acid=b,a.axid=null!==d?"optout":
e,a.pxsig=c,a.canWriteCookie=!0)})(c);(function(a,b){var e,c;try{c=a.top.location.search}catch(d){var k=a;try{for(;k.parent.document!==k.document;)if(k.parent.document)k=k.parent;else break}catch(h){}if(k&&(k=x(k.document)))c=k.search}c&&(e=z(c,"cto_pld"));if(!e)try{var l=x(a.top.document);l&&l.search&&(e=z(l.search,"cto_pld"))}catch(m){}e&&(b.cop=e)})(window,c);(function(a){c.waiting_syncframe=c.waiting_syncframe&&!a.idcpy&&!a.sid&&!a.optout&&!a.idfs;c.waiting_syncframe&&setTimeout(function(){c.waiting_syncframe&&
(c.waiting_syncframe=!1,t())},1E4)})(c);(function(a){var b=h("criteo_cookie_perm");null!==b&&(a.ccp=b)})(c);var u=function(a){return"undefined"===typeof a||""===a},n=function(){for(var a=0;a<arguments.length;++a)c.queue.push(arguments[a]);t();a=!1;if(200<d.extraData.length)a=!0;else for(var b=0;b<d.extraData.length;++b)if(200<Object.keys(d.extraData[b]).length){a=!0;break}a&&(d.extraData=[]);d.customerInfo=[];c.is_cbs_enabled=!1},t=function(){for(var a=[],b=c.queue,e=0;e<b.length;++e){var f=b[e];
if(f instanceof Array)b.splice.apply(b,[e+1,0].concat(f));else if(f instanceof Function)b.splice(e+1,0,f());else if(f&&"[object Object]"===f.toString())switch(p(f,e,b,a)){case 0:a.push(f);break;case -1:a=a.concat(b.slice(e)),e=b.length}}d.afterEval instanceof Function&&(a=d.afterEval(b,a,c,d));c.queue=a||[];!d.manualFlush&&((!d.noPartialFlush||0===c.queue.length)&&!c.waiting_syncframe)&&B(0!==c.queue.length)},p=function(a,b,e,f){if(!c.domReady&&a.requiresDOM&&"no"!==a.requiresDOM)return"blocking"===
a.requiresDOM?-1:0;delete a.requiresDOM;if(!a.event)return l(a),1;a.account&&y(a.account,c.accounts);var g=a.event;a.event=a.event.toLowerCase();switch(a.event){case "setdata":return a=l(a),C(a),D(c.actions,l(a)),1;case "setparameter":for(var k in a)"event"!==k.toLowerCase()&&a.hasOwnProperty(k)&&(d.handlerParams[k]=a[k]);return 1;case "calldising":a.hasOwnProperty("account")||(a.account=c.accounts);b=d.handlerResponseType;a.hasOwnProperty("type")&&(b=a.type,delete a.type);y(a.account,c.disingScheduled);
"sequential"===b&&(a.dc=!0);break;case "setcustomerid":return a.event="setdata",a.customer_id=a.id,delete a.id,p(a);case "setretailervisitorid":return c.is_cbs_enabled=!0,a.event="setdata",a.retailer_visitor_id=a.id,delete a.id,p(a);case "setemail":case "sethashedemail":case "ceh":a.event="setemail";if(a.hasOwnProperty("email")){a.email instanceof Array||(a.email=[a.email]);b=a.email;e=[];for(f=0;f<b.length;f++)void 0!==b[f]&&null!==b[f]&&e.push(String(b[f]));a.email=e}b=l(a);d.customerInfo.push(b);
E(c.actions,l(a));return 1;case "setsitetype":b="d";if("mobile"===a.type||"m"===a.type)b="m";if("tablet"===a.type||"t"===a.type)b="t";a.event="setdata";delete a.type;a.site_type=b;return p(a);case "appendtag":c.bodyReady&&!d.container&&((b=document.body)?(e=document.createElement("div"),e.setAttribute("id","criteo-tags-div"),e.style.display="none",b.appendChild(e),b=e):b=void 0,d.container=b);a.url&&(a.isImgUrl?(b=document.createElement("img"),b.setAttribute("style","display:none;"),b.setAttribute("width",
"1"),b.setAttribute("height","1")):(b=document.createElement("script"),b.setAttribute("async","true"),b.setAttribute("type","text/javascript")),b.setAttribute("src",a.url),a.element=b);d.beforeAppend instanceof Function&&(a.element=d.beforeAppend(a.element,c,d));l(a);if(a.element&&(a.element.tagName||a.isImgUrl))if(!d.container&&("script"===a.element.tagName.toLowerCase()||a.isImgUrl))b=document.getElementsByTagName("script")[0],a.element.setAttribute("data-owner","criteo-tag"),b.parentNode.insertBefore(a.element,
b),window.removeLater(a.element);else if(d.container)d.container.appendChild(a.element),window.removeLater(a.element);else return 0;return 1;case "gettagstate":return a.callback instanceof Function?a.callback(c,d):1;case "viewsearchresult":case "viewcategory":c.is_cbs_enabled&&u(a.page_id)&&(a.page_id=g);a.event="viewlist";break;case "viewlist":c.is_cbs_enabled&&u(a.page_id)&&(u(a.category)?u(a.keywords)?a.page_id="viewList":a.page_id="viewSearchResult":a.page_id="viewCategory");break;case "viewitem":case "viewhome":case "viewbasket":case "tracktransaction":c.is_cbs_enabled&&
u(a.page_id)&&(a.page_id=g);break;case "flush":case "flushevents":return B(b!==e.length-1||0!==f.length),1}if(b=d.setters[a.event])return d[b.cfg]=a[b.evt],1;if(b=d.flags[a.event])return d[b]=!0,1;c.actions.push(l(a));return 1},B=function(a){d.onFlush instanceof Function&&(c.actions=d.onFlush(c.actions,c,d));if(0!==c.actions.length){for(var b=0;b<d.extraData.length;++b)D(c.actions,d.extraData[b]);for(b=0;b<d.customerInfo.length;++b)E(c.actions,d.customerInfo[b]);if(!d.manualDising&&(!a||d.partialDis)){a=
[];for(b=0;b<c.accounts.length;++b)w(c.disingScheduled,c.accounts[b])||a.push(c.accounts[b]);0<a.length&&p({event:"callDising",account:a})}a=c.actions;b=[];1===c.accounts.length&&(d.account=c.accounts[0]);d.account&&b.push("a="+m(d.account,[]));"js"!==d.responseType&&b.push("rt="+m(d.responseType,[]));if(d.handlerParams){var e=decodeURIComponent(m(d.handlerParams,[]));e&&b.push(e)}for(e=0;e<a.length;++e)a[e].account&&q(d.account,a[e].account)&&delete a[e].account,b.push("p"+e+"="+m(a[e],[]));null!==
c.acid&&b.push("acid="+c.acid);null!==c.axid&&b.push("axid="+c.axid);null!==c.pxsig&&b.push("pxsig="+c.pxsig);c.canWriteCookie&&b.push("adce=1");null!==c.ccp&&b.push("ccp="+c.ccp);null!==c.cop&&b.push("cop="+c.cop);c.idcpy&&(b.push("idcpy="+c.idcpy),b.push("iddom="+document.location.hostname));c.idfs&&b.push("idfs="+c.idfs);c.idfs_read&&b.push("idfs_read=1");c.optout&&b.push("optout=1");c.sid&&b.push("sid="+c.sid);c.lwid&&b.push("lwid="+c.lwid);h("cto_clc")&&b.push("clc=1");a=b.join("&");a={event:"appendTag",
url:d.handlerUrlPrefix+"?"+a,isImgUrl:"gif"===d.responseType};c.actions=[];p(a);d.disOnce||(c.disingScheduled=[])}},C=function(a){for(var b=0;b<d.extraData.length;++b){var e=d.extraData[b];if(e.event===a.event&&("undefined"===typeof a.account&&"undefined"===typeof e.account||q(a.account,e.account))){for(var c in a)"account"!==c&&(e[c]=a[c]);return}}d.extraData.push(a)},D=function(a,b){for(var e=0;e<a.length;++e){var c=a[e];if(c.event===b.event&&q(b.account,c.account)){for(var d in b)b.hasOwnProperty(d)&&
"account"!==d&&(c[d]=b[d]);return}}a.push(b)},E=function(a,b){for(var e=0;e<a.length;++e){var c=a[e];if(c.event===b.event&&q(b.account,c.account)&&("hash_method"in b?b.hash_method:"")===("hash_method"in c?c.hash_method:"")){if(b.hasOwnProperty("email")){for(var e=c,c=c.email,d=b.email,k=[],h=0;h<d.length;++h)w(c,d[h])||k.push(d[h]);c=c.concat(k);e.email=c}return}}a.push(b)},l=function(a){var b=a;if(a instanceof Function)return b=a(),b instanceof Function?b:l(b);if(a instanceof Array)for(var b=[],
c=0;c<a.length;++c)b[c]=l(a[c]);else if(a&&"[object Object]"===a.toString())for(c in b={},a)a.hasOwnProperty(c)&&(b[c]=l(a[c]));return b},L=function(a,b){var c=b.join(".");return d.propMap[c]?d.propMap[c]:a},q=function(a,b){if(!(a instanceof Array))return q([a],b);if(!(b instanceof Array))return q(a,[b]);if(a.length!==b.length)return!1;for(var c=0;c<a.length;++c)if(!w(b,a[c]))return!1;return!0},m=function(a,b){var c="";if(a instanceof Function)c=m(a(),b);else if(a instanceof Array){for(var f=[],g=
0;g<a.length;++g)f[g]=m(a[g],b);c+="["+f.join(",")+"]"}else if(a&&"[object Object]"===a.toString()){f=[];for(g in a)if(a.hasOwnProperty(g)){var k=b.concat([g]);f.push(L(g,k)+"="+m(a[g],k))}c+=f.join("&")}else c=1===b.length&&"event"===b[0]?c+(d.eventMap[a.toLowerCase()]?d.eventMap[a.toLowerCase()]:a):c+a;return encodeURIComponent(c)},y=function(a,b){if(a instanceof Array)for(var c=0;c<a.length;++c)y(a[c],b);else w(b,a)||b.push(a)},w=function(a,b){for(var c=JSON.stringify||encodeURIComponent||escape,
d=c(b),g=0;g<a.length;++g)if(a[g]===b||c(a[g])===d)return!0;return!1},M=function(a){if(a){var b=a.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src",a.location.protocol+"//static.criteo.net/js/ld/ld-tag-debug.4.5.4.js");a=a.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)}};(function(a){(function e(){document.body?setTimeout(a,0):setTimeout(e,10)})()})(function(){c.bodyReady=d.onInitialized instanceof Function?d.onInitialized(c,d):!0;J();t()});(function(a,
b){if("complete"===a.readyState)b();else if(a.addEventListener)a.addEventListener("DOMContentLoaded",b,!1),window.addEventListener("load",b,!1);else{a.attachEvent("onreadystatechange",b);window.attachEvent("onload",b);var c=!1;try{c=null===window.frameElement&&document.documentElement}catch(d){}if(c&&c.doScroll)(function K(){if(c){try{c.doScroll("left")}catch(a){return setTimeout(K,50)}b()}})();else{var g=!1,k=a.onload,h=a.onreadystatechange;a.onload=a.onreadystatechange=function(){h instanceof Function&&
h();if(!g&&(!a.readyState||"loaded"===a.readyState||"complete"===a.readyState))k instanceof Function&&k(),g=!0,b()}}}})(document,function(){c.domReady=d.onDOMReady instanceof Function?d.onDOMReady(c,d):!0;t()});(function(a){try{var b=x(a);b&&b.hostname!==a.location.hostname&&C({event:"setData",ref:b.protocol+"//"+b.hostname})}catch(c){}})(document);(function(a,b){if(a&&b){var c=/^\#(enable|disable)-criteo-tag-debug-mode(\=(\d+))?$/.exec(b);if(c&&4==c.length){var d="enable"==c[1],g=c[3],c="criteoTagDebugMode=";
d&&(g&&!isNaN(g))&&(c+=parseInt(g,10));d=d?(new Date).getTime()+864E5:0;d="expires="+(new Date(d)).toUTCString();document.cookie=[c,"path=/",d].join("; ");window.location.href=window.location.href.substr(0,window.location.href.indexOf("#"))}}})(document,window.location.hash);var F;F=document?"function"!=typeof Array.prototype.indexOf?!1:-1!==document.cookie.indexOf("criteoTagDebugMode="):!1;if(F){var G={originalPush:n,stagedPushes:[],stagedErrors:[],m_state:c,m_config:d,push:function(){0<arguments.length&&
this.stagedPushes.push(arguments)},pushError:function(a){this.stagedErrors.push(a)}};window.onerror=function(a){return function(b,c,d,g){G.pushError({message:b,url:c,lineNumber:d,column:g});return a&&"function"===typeof a?a.apply(this,arguments):!1}}(window.onerror);M(document);return G}return{push:n}}();window.criteo_q.push.apply(window.criteo_q,oldQueue)};