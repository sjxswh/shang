BOOMR_start=new Date().getTime();(function(a){if(a.parent!=a&&document.getElementById("boomr-if-as")&&document.getElementById("boomr-if-as").nodeName.toLowerCase()=="script"){a=a.parent}var e,c,b,g=a.document;if(typeof a.BOOMR==="undefined"){a.BOOMR={}}BOOMR=a.BOOMR;if(BOOMR.version){return}BOOMR.version="0.9.3-basic";BOOMR.window=a;e={beacon_url:"",site_domain:a.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/,"$1").toLowerCase(),user_ip:"",events:{page_ready:[],page_unload:[],dom_loaded:[],visibility_changed:[],before_beacon:[],click:[]},vars:{},disabled_plugins:{},onclick_handler:function(d){var h;if(!d){d=a.event}if(d.target){h=d.target}else{if(d.srcElement){h=d.srcElement}}if(h.nodeType==3){h=h.parentNode}e.fireEvent("click",h)},fireEvent:function(d,l){var j,k,m;if(!this.events.hasOwnProperty(d)){return false}m=this.events[d];for(j=0;j<m.length;j++){k=m[j];k[0].call(k[2],l,k[1])}return true},addListener:function(h,i,d){if(h.addEventListener){h.addEventListener(i,d,false)}else{if(h.attachEvent){h.attachEvent("on"+i,d)}}}};c={t_start:BOOMR_start,t_end:null,utils:{getCookie:function(d){if(!d){return null}d=" "+d+"=";var h,j;j=" "+g.cookie+";";if((h=j.indexOf(d))>=0){h+=d.length;j=j.substring(h,j.indexOf(";",h));return j}return null},setCookie:function(j,l,d){var m=[],h,i,o,n;if(!j){return false}for(h in l){if(l.hasOwnProperty(h)){m.push(encodeURIComponent(h)+"="+encodeURIComponent(l[h]))}}m=m.join("&");i=j+"="+m;o=[i,"path=/","domain="+e.site_domain];if(d){n=new Date();n.setTime(n.getTime()+d*1000);n=n.toGMTString();o.push("expires="+n)}if(i.length<4000){g.cookie=o.join("; ");return(m===this.getCookie(j))}return false},getSubCookies:function(k){var j,h,d,n,m={};if(!k){return null}j=k.split("&");if(j.length===0){return null}for(h=0,d=j.length;h<d;h++){n=j[h].split("=");n.push("");m[decodeURIComponent(n[0])]=decodeURIComponent(n[1])}return m},removeCookie:function(d){return this.setCookie(d,{},0)},pluginConfig:function(m,d,k,j){var h,l=0;if(!d||!d[k]){return false}for(h=0;h<j.length;h++){if(typeof d[k][j[h]]!=="undefined"){m[j[h]]=d[k][j[h]];l++}}return(l>0)}},init:function(h){var l,d,j=["beacon_url","site_domain","user_ip"];if(!h){h={}}for(l=0;l<j.length;l++){if(typeof h[j[l]]!=="undefined"){e[j[l]]=h[j[l]]}}if(typeof h.log!=="undefined"){this.log=h.log}if(!this.log){this.log=function(i,k,n){}}for(d in this.plugins){if(h[d]&&("enabled" in h[d])&&h[d].enabled===false){e.disabled_plugins[d]=1;continue}else{if(e.disabled_plugins[d]){delete e.disabled_plugins[d]}}if(this.plugins.hasOwnProperty(d)&&typeof this.plugins[d].init==="function"){this.plugins[d].init(h)}}if(!("autorun" in h)||h.autorun!==false){if("onpagehide" in a){e.addListener(a,"pageshow",BOOMR.page_ready)}else{e.addListener(a,"load",BOOMR.page_ready)}}e.addListener(a,"DOMContentLoaded",function(){e.fireEvent("dom_loaded")});var m=function(){e.fireEvent("visibility_changed")};if(g.webkitVisibilityState){e.addListener(g,"webkitvisibilitychange",m)}else{if(g.msVisibilityState){e.addListener(g,"msvisibilitychange",m)}else{if(g.visibilityState){e.addListener(g,"visibilitychange",m)}}}e.addListener(g,"mouseup",e.onclick_handler);if(!("onpagehide" in a)){e.addListener(a,"unload",function(){BOOMR.window=a=null})}return this},page_ready:function(){e.fireEvent("page_ready");return this},subscribe:function(d,n,j,p){var k,m,o;if(!e.events.hasOwnProperty(d)){return this}o=e.events[d];for(k=0;k<o.length;k++){m=o[k];if(m[0]===n&&m[1]===j&&m[2]===p){return this}}o.push([n,j||{},p||null]);if(d==="page_unload"){var l=function(){if(n){n.call(p,null,j)}n=p=j=null};if("onpagehide" in a){e.addListener(a,"pagehide",l)}else{e.addListener(a,"unload",l);e.addListener(a,"beforeunload",l)}}return this},addVar:function(h,i){if(typeof h==="string"){e.vars[h]=i}else{if(typeof h==="object"){var j=h,d;for(d in j){if(j.hasOwnProperty(d)){e.vars[d]=j[d]}}}}return this},getVar:function(){var d,j,h;if(!arguments.length){return}if(arguments.length===1&&Object.prototype.toString.apply(arguments[0])==="[object Array]"){j=arguments[0]}else{j=arguments}if(j.length>1){h={};for(d=0;d<j.length;d++){if(e.vars.hasOwnProperty(j[d])){h[j[d]]=e.vars[j[d]]}}}else{h=e.vars[j[0]]}return h},removeVar:function(){var d,h;if(!arguments.length){return this}if(arguments.length===1&&Object.prototype.toString.apply(arguments[0])==="[object Array]"){h=arguments[0]}else{h=arguments}for(d=0;d<h.length;d++){if(e.vars.hasOwnProperty(h[d])){delete e.vars[h[d]]}}return this},sendBeacon:function(){var i,j,h,d=0;for(i in this.plugins){if(this.plugins.hasOwnProperty(i)){if(e.disabled_plugins[i]){continue}if(!this.plugins[i].is_complete()){return this}}}e.vars.v=BOOMR.version;e.vars.u=g.URL.replace(/#.*/,"");if(a!=window){e.vars["if"]=""}e.fireEvent("before_beacon",e.vars);if(!e.beacon_url){return this}j=[];for(i in e.vars){if(e.vars.hasOwnProperty(i)){d++;j.push(encodeURIComponent(i)+"="+(e.vars[i]===undefined||e.vars[i]===null?"":encodeURIComponent(e.vars[i])))}}j=e.beacon_url+((e.beacon_url.indexOf("?")>-1)?"&":"?")+j.join("&");if(d){h=new Image();h.src=j}return this}};delete BOOMR_start;var f=function(d){return function(h,i){this.log(h,d,"boomerang"+(i?"."+i:""));return this}};c.debug=f("debug");c.info=f("info");c.warn=f("warn");c.error=f("error");if(a.YAHOO&&a.YAHOO.widget&&a.YAHOO.widget.Logger){c.log=a.YAHOO.log}else{if(typeof a.Y!=="undefined"&&typeof a.Y.log!=="undefined"){c.log=a.Y.log}else{if(typeof console!=="undefined"&&typeof console.log!=="undefined"){c.log=function(d,h,i){console.log(i+": ["+h+"] "+d)}}}}for(b in c){if(c.hasOwnProperty(b)){BOOMR[b]=c[b]}}BOOMR.plugins=BOOMR.plugins||{}}(window));
(function(){BOOMR=BOOMR||{};BOOMR.plugins=BOOMR.plugins||{};var a=[{name:"image-0.png",size:11483,timeout:1400},{name:"image-1.png",size:40658,timeout:1200},{name:"image-2.png",size:164897,timeout:1300},{name:"image-3.png",size:381756,timeout:1500},{name:"image-4.png",size:1234664,timeout:1200},{name:"image-5.png",size:4509613,timeout:1200},{name:"image-6.png",size:9084559,timeout:1200}];a.end=a.length;a.start=0;a.l={name:"image-l.gif",size:35,timeout:1000};var b={base_url:"",timeout:15000,nruns:5,latency_runs:10,user_ip:"",cookie_exp:7*86400,cookie:"BA",results:[],latencies:[],latency:null,runs_left:0,aborted:false,complete:false,running:false,ncmp:function(d,c){return(d-c)},iqr:function(f){var e=f.length-1,d,j,h,c=[],g;d=(f[Math.floor(e*0.25)]+f[Math.ceil(e*0.25)])/2;j=(f[Math.floor(e*0.75)]+f[Math.ceil(e*0.75)])/2;h=(j-d)*1.5;e++;for(g=0;g<e&&f[g]<j+h;g++){if(f[g]>d-h){c.push(f[g])}}return c},calc_latency:function(){var f,d,g=0,e=0,h,k,c,l,j;j=this.iqr(this.latencies.sort(this.ncmp));d=j.length;BOOMR.debug(j,"bw");for(f=1;f<d;f++){g+=j[f];e+=j[f]*j[f]}d--;h=Math.round(g/d);c=Math.sqrt(e/d-g*g/(d*d));l=(1.96*c/Math.sqrt(d)).toFixed(2);c=c.toFixed(2);d=j.length-1;k=Math.round((j[Math.floor(d/2)]+j[Math.ceil(d/2)])/2);return{mean:h,median:k,stddev:c,stderr:l}},calc_bw:function(){var x,w,s=0,o,e=[],u=[],d=0,m=0,B=0,t=0,p,z,A,f,c,v,g,l,k,y,q,h=[];for(x=0;x<this.nruns;x++){if(!this.results[x]||!this.results[x].r){continue}o=this.results[x].r;k=0;for(w=o.length-1;w>=0&&k<3;w--){if(!o[w]){break}if(o[w].t===null){continue}s++;k++;y=a[w].size*1000/o[w].t;e.push(y);q=a[w].size*1000/(o[w].t-this.latency.mean);u.push(q);if(o[w].t<this.latency.mean){h.push(""+w+"_"+o[w].t)}}}BOOMR.debug("got "+s+" readings","bw");BOOMR.debug("bandwidths: "+e,"bw");BOOMR.debug("corrected: "+u,"bw");if(e.length>3){e=this.iqr(e.sort(this.ncmp));u=this.iqr(u.sort(this.ncmp))}else{e=e.sort(this.ncmp);u=u.sort(this.ncmp)}BOOMR.debug("after iqr: "+e,"bw");BOOMR.debug("corrected: "+u,"bw");s=Math.max(e.length,u.length);for(x=0;x<s;x++){if(x<e.length){d+=e[x];m+=Math.pow(e[x],2)}if(x<u.length){B+=u[x];t+=Math.pow(u[x],2)}}s=e.length;p=Math.round(d/s);z=Math.sqrt(m/s-Math.pow(d/s,2));A=Math.round(1.96*z/Math.sqrt(s));z=Math.round(z);s=e.length-1;f=Math.round((e[Math.floor(s/2)]+e[Math.ceil(s/2)])/2);s=u.length;c=Math.round(B/s);v=Math.sqrt(t/s-Math.pow(B/s,2));g=(1.96*v/Math.sqrt(s)).toFixed(2);v=v.toFixed(2);s=u.length-1;l=Math.round((u[Math.floor(s/2)]+u[Math.ceil(s/2)])/2);BOOMR.debug("amean: "+p+", median: "+f,"bw");BOOMR.debug("corrected amean: "+c+", median: "+l,"bw");return{mean:p,stddev:z,stderr:A,median:f,mean_corrected:c,stddev_corrected:v,stderr_corrected:g,median_corrected:l,debug_info:h}},defer:function(d){var c=this;return setTimeout(function(){d.call(c);c=null},10)},load_img:function(e,h,k){var d=this.base_url+a[e].name+"?t="+(new Date().getTime())+Math.random(),j=0,g=0,c=new Image(),f=this;c.onload=function(){c.onload=c.onerror=null;c=null;clearTimeout(j);if(k){k.call(f,e,g,h,true)}f=k=null};c.onerror=function(){c.onload=c.onerror=null;c=null;clearTimeout(j);if(k){k.call(f,e,g,h,false)}f=k=null};j=setTimeout(function(){if(k){k.call(f,e,g,h,null)}},a[e].timeout+Math.min(400,this.latency?this.latency.mean:400));g=new Date().getTime();c.src=d},lat_loaded:function(c,d,f,g){if(f!==this.latency_runs+1){return}if(g!==null){var e=new Date().getTime()-d;this.latencies.push(e)}if(this.latency_runs===0){this.latency=this.calc_latency()}this.defer(this.iterate)},img_loaded:function(d,e,f,g){if(f!==this.runs_left+1){return}if(this.results[this.nruns-f].r[d]){return}if(g===null){this.results[this.nruns-f].r[d+1]={t:null,state:null,run:f};return}var c={start:e,end:new Date().getTime(),t:null,state:g,run:f};if(g){c.t=c.end-c.start}this.results[this.nruns-f].r[d]=c;if(d>=a.end-1||typeof this.results[this.nruns-f].r[d+1]!=="undefined"){BOOMR.debug(this.results[this.nruns-f],"bw");if(f===this.nruns){a.start=d}this.defer(this.iterate)}else{this.load_img(d+1,f,this.img_loaded)}},finish:function(){if(!this.latency){this.latency=this.calc_latency()}var d=this.calc_bw(),c={bw:d.median_corrected,bw_err:parseFloat(d.stderr_corrected,10),lat:this.latency.mean,lat_err:parseFloat(this.latency.stderr,10),bw_time:Math.round(new Date().getTime()/1000)};BOOMR.addVar(c);if(d.debug_info.length>0){BOOMR.addVar("bw_debug",d.debug_info.join(","))}if(!isNaN(c.bw)&&c.bw>0){BOOMR.utils.setCookie(this.cookie,{ba:Math.round(c.bw),be:c.bw_err,l:c.lat,le:c.lat_err,ip:this.user_ip,t:c.bw_time},(this.user_ip?this.cookie_exp:0))}this.complete=true;BOOMR.sendBeacon();this.running=false},iterate:function(){if(this.aborted){return false}if(!this.runs_left){this.finish()}else{if(this.latency_runs){this.load_img("l",this.latency_runs--,this.lat_loaded)}else{this.results.push({r:[]});this.load_img(a.start,this.runs_left--,this.img_loaded)}}},setVarsFromCookie:function(j){var g=parseInt(j.ba,10),i=parseFloat(j.be,10),h=parseInt(j.l,10)||0,d=parseFloat(j.le,10)||0,c=j.ip.replace(/\.\d+$/,"0"),k=parseInt(j.t,10),f=this.user_ip.replace(/\.\d+$/,"0"),e=Math.round((new Date().getTime())/1000);if(c===f&&k>=e-this.cookie_exp&&g>0){this.complete=true;BOOMR.addVar({bw:g,lat:h,bw_err:i,lat_err:d});return true}return false}};BOOMR.plugins.BW={init:function(c){var d;if(b.complete){return this}BOOMR.utils.pluginConfig(b,c,"BW",["base_url","timeout","nruns","cookie","cookie_exp"]);if(c&&c.user_ip){b.user_ip=c.user_ip}if(!b.base_url){return this}a.start=0;b.runs_left=b.nruns;b.latency_runs=10;b.results=[];b.latencies=[];b.latency=null;b.complete=false;b.aborted=false;BOOMR.removeVar("ba","ba_err","lat","lat_err");d=BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(b.cookie));if(!d||!d.ba||!b.setVarsFromCookie(d)){BOOMR.subscribe("page_ready",this.run,null,this);BOOMR.subscribe("page_unload",this.skip,null,this)}return this},run:function(){if(b.running||b.complete){return this}if(BOOMR.window.location.protocol==="https:"){BOOMR.info("HTTPS detected, skipping bandwidth test","bw");b.complete=true;BOOMR.sendBeacon();return this}b.running=true;setTimeout(this.abort,b.timeout);b.defer(b.iterate);return this},abort:function(){b.aborted=true;if(b.running){b.finish()}return this},skip:function(){this.abort();if(!b.complete){b.complete=true;BOOMR.sendBeacon()}return this},is_complete:function(){return b.complete}}}());(function(){BOOMR=BOOMR||{};BOOMR.plugins=BOOMR.plugins||{};var a={complete:false,base_url:"",t_start:null,t_dns:null,t_http:null,img:null,gen_url:"",start:function(){if(a.gen_url){return}var c=Math.random().toString(36),b=""+(new Date().getTime())+(Math.random());a.gen_url=a.base_url.replace(/\*/,c);a.img=new Image();a.img.onload=a.A_loaded;a.t_start=new Date().getTime();a.img.src=a.gen_url+"image-l.gif?t="+b},A_loaded:function(){var b;a.t_dns=new Date().getTime()-a.t_start;b=""+(new Date().getTime())+(Math.random());a.img=new Image();a.img.onload=a.B_loaded;a.t_start=new Date().getTime();a.img.src=a.gen_url+"image-l.gif?t="+b},B_loaded:function(){a.t_http=new Date().getTime()-a.t_start;a.img=null;a.done()},done:function(){var b=a.t_dns-a.t_http;BOOMR.addVar("dns.t",b);a.complete=true;a.gen_url="";BOOMR.sendBeacon()}};BOOMR.plugins.DNS={init:function(b){BOOMR.utils.pluginConfig(a,b,"DNS",["base_url"]);if(!a.base_url){BOOMR.warn("DNS.base_url is not set.  Cannot run DNS test.","dns");a.complete=true;return this}if(BOOMR.window.location.protocol==="https:"){a.complete=true;return this}BOOMR.subscribe("page_ready",a.start,null,a);return this},is_complete:function(){return a.complete}}}());(function(){BOOMR=BOOMR||{};BOOMR.plugins=BOOMR.plugins||{};var a={complete:false,done:function(){var e=BOOMR.window,h=e.performance,k=e.console,i=e.document,j=(({}).toString.call(e.opera)=="[object Opera]"?i.querySelectorAll:i.getElementsByTagName),b;var g=(typeof j.call==="undefined"?function(c){return j(c)}:j);b=(h&&h.memory?h.memory:(k&&k.memory?k.memory:null));if(b){BOOMR.addVar({"mem.total":b.totalJSHeapSize,"mem.used":b.usedJSHeapSize})}BOOMR.addVar({"dom.ln":g.call(i,"*").length,"dom.sz":g.call(i,"html")[0].innerHTML.length,"dom.img":g.call(i,"img").length,"dom.script":g.call(i,"script").length});this.complete=true;BOOMR.sendBeacon()}};BOOMR.plugins.Memory={init:function(){BOOMR.subscribe("page_ready",a.done,null,a);return this},is_complete:function(){return a.complete}}}());BOOMR.addVar("mob.ct",(typeof navigator!=="undefined"&&navigator.connection)?navigator.connection.type:0);(function(){BOOMR=BOOMR||{};BOOMR.plugins=BOOMR.plugins||{};var a={complete:false,done:function(){var b=BOOMR.window,f,c,e,d;f=b.performance||b.msPerformance||b.webkitPerformance||b.mozPerformance;if(f&&f.timing&&f.navigation){BOOMR.info("This user agent supports NavigationTiming.","nt");c=f.navigation;e=f.timing;d={nt_red_cnt:c.redirectCount,nt_nav_type:c.type,nt_nav_st:e.navigationStart,nt_red_st:e.redirectStart,nt_red_end:e.redirectEnd,nt_fet_st:e.fetchStart,nt_dns_st:e.domainLookupStart,nt_dns_end:e.domainLookupEnd,nt_con_st:e.connectStart,nt_con_end:e.connectEnd,nt_req_st:e.requestStart,nt_res_st:e.responseStart,nt_res_end:e.responseEnd,nt_domloading:e.domLoading,nt_domint:e.domInteractive,nt_domcontloaded_st:e.domContentLoadedEventStart,nt_domcontloaded_end:e.domContentLoadedEventEnd,nt_domcomp:e.domComplete,nt_load_st:e.loadEventStart,nt_load_end:e.loadEventEnd,nt_unload_st:e.unloadEventStart,nt_unload_end:e.unloadEventEnd};if(e.secureConnectionStart){d.nt_ssl_st=e.secureConnectionStart}BOOMR.addVar(d)}if(b.chrome&&b.chrome.loadTimes){e=b.chrome.loadTimes();if(e){d={nt_spdy:(e.wasFetchedViaSpdy?1:0),nt_first_paint:e.firstPaintTime};BOOMR.addVar(d)}}this.complete=true;BOOMR.sendBeacon()}};BOOMR.plugins.NavigationTiming={init:function(){BOOMR.subscribe("page_ready",a.done,null,a);return this},is_complete:function(){return a.complete}}}());(function(a){BOOMR=BOOMR||{};BOOMR.plugins=BOOMR.plugins||{};var b={complete:false,bind:function(){if(Groupon&&typeof Groupon.onCurrentUserReady==="function"){var c=this;Groupon.onCurrentUserReady(function(){var d=new Date().getTime();BOOMR.subscribe("before_beacon",function(){BOOMR.addVar("t_personalize",d-BOOMR.getVar("rt.tstart"))});c.complete=true;BOOMR.sendBeacon()})}else{this.complete=true;BOOMR.sendBeacon()}}};BOOMR.plugins.personalize={init:function(c){b.bind();return this},is_complete:function(){return b.complete}}}(window));
(function(a){if(a!=a.parent){a=a.parent}var c=a.document;BOOMR=BOOMR||{};BOOMR.plugins=BOOMR.plugins||{};var b={complete:false,done:function(){BOOMR.addVar({viewport_x:a.innerWidth,viewport_y:a.innerHeight,device_x:a.screen.width,device_y:a.screen.height,document_x:c.width,document_y:c.height});this.complete=true;BOOMR.sendBeacon()}};BOOMR.plugins.viewport={init:function(d){BOOMR.subscribe("page_ready",b.done,null,b);return this},is_complete:function(){return b.complete}}}(window));
(function(a){var c=a.document;BOOMR=BOOMR||{};BOOMR.plugins=BOOMR.plugins||{};var b={complete:false,timers:{},cookie:"RT",cookie_exp:600,strict_referrer:true,navigationType:0,navigationStart:undefined,responseStart:undefined,t_start:undefined,r:undefined,r2:undefined,setCookie:function(){var e,d=new Date().getTime();if(!this.cookie){return this}if(!BOOMR.utils.setCookie(this.cookie,{s:d,r:c.URL.replace(/#.*/,"")},this.cookie_exp)){BOOMR.error("cannot set start cookie","rt");return this}e=new Date().getTime();if(e-d>50){BOOMR.utils.removeCookie(this.cookie);BOOMR.error("took more than 50ms to set cookie... aborting: "+d+" -> "+e,"rt")}return this},initFromCookie:function(){var d;if(!this.cookie){return}d=BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie));if(!d){return}if(d.s&&d.r){this.r=d.r;if(!this.strict_referrer||this.r===this.r2){this.t_start=parseInt(d.s,10)}}},checkPreRender:function(){if(!(c.webkitVisibilityState&&c.webkitVisibilityState==="prerender")&&!(c.msVisibilityState&&c.msVisibilityState===3)){return false}BOOMR.plugins.RT.startTimer("t_load",this.navigationStart);BOOMR.plugins.RT.endTimer("t_load");BOOMR.plugins.RT.startTimer("t_prerender",this.navigationStart);BOOMR.plugins.RT.startTimer("t_postrender");BOOMR.subscribe("visibility_changed",BOOMR.plugins.RT.done,null,BOOMR.plugins.RT);return true},initNavTiming:function(){var d,f,e;if(this.navigationStart){return}f=a.performance||a.msPerformance||a.webkitPerformance||a.mozPerformance;if(f&&f.navigation){this.navigationType=f.navigation.type}if(f&&f.timing){d=f.timing}else{if(a.chrome&&a.chrome.csi&&a.chrome.csi().startE){d={navigationStart:a.chrome.csi().startE};e="csi"}else{if(a.gtbExternal&&a.gtbExternal.startE()){d={navigationStart:a.gtbExternal.startE()};e="gtb"}}}if(d){BOOMR.addVar("rt.start",e||"navigation");this.navigationStart=d.navigationStart||d.fetchStart||undefined;this.responseStart=d.responseStart||undefined;if(navigator.userAgent.match(/Firefox\/[78]\./)){this.navigationStart=d.unloadEventStart||d.fetchStart||undefined}}return},domloaded:function(){BOOMR.plugins.RT.endTimer("t_domloaded")}};BOOMR.plugins.RT={init:function(d){if(a!=BOOMR.window){a=BOOMR.window;c=a.document}BOOMR.utils.pluginConfig(b,d,"RT",["cookie","cookie_exp","strict_referrer"]);if(b.complete){return this}b.complete=false;b.timers={};BOOMR.subscribe("page_ready",this.done,null,this);BOOMR.subscribe("dom_loaded",b.domloaded,null,b);BOOMR.subscribe("page_unload",b.setCookie,null,b);if(BOOMR.t_start){this.startTimer("boomerang",BOOMR.t_start);this.endTimer("boomerang",BOOMR.t_end);this.endTimer("boomr_fb",BOOMR.t_start)}b.r=b.r2=c.referrer.replace(/#.*/,"");b.initFromCookie();return this},startTimer:function(d,e){if(d){if(d==="t_page"){this.endTimer("t_resp",e)}b.timers[d]={start:(typeof e==="number"?e:new Date().getTime())};b.complete=false}return this},endTimer:function(d,e){if(d){b.timers[d]=b.timers[d]||{};if(!("end" in b.timers[d])){b.timers[d].end=(typeof e==="number"?e:new Date().getTime())}}return this},setTimer:function(d,e){if(d){b.timers[d]={delta:e}}return this},done:function(){var e,g=new Date().getTime(),i={t_done:1,t_resp:1,t_page:1},d=0,h,j,f=[];b.complete=false;b.initNavTiming();if(b.checkPreRender()){return this}if(b.responseStart){this.endTimer("t_resp",b.responseStart);if(b.timers.t_load){this.setTimer("t_page",b.timers.t_load.end-b.responseStart)}else{this.setTimer("t_page",g-b.responseStart)}}else{if(b.timers.hasOwnProperty("t_page")){this.endTimer("t_page")}}if(b.timers.hasOwnProperty("t_postrender")){this.endTimer("t_postrender");this.endTimer("t_prerender")}if(b.navigationStart){e=b.navigationStart}else{if(b.t_start&&b.navigationType!==2){e=b.t_start;BOOMR.addVar("rt.start","cookie")}else{BOOMR.addVar("rt.start","none");e=undefined}}this.endTimer("t_done",g);BOOMR.removeVar("t_done","t_page","t_resp","r","r2","rt.tstart","rt.bstart","rt.end","t_postrender","t_prerender","t_load");BOOMR.addVar("rt.tstart",e);BOOMR.addVar("rt.bstart",BOOMR.t_start);BOOMR.addVar("rt.end",b.timers.t_done.end);for(h in b.timers){if(!b.timers.hasOwnProperty(h)){continue}j=b.timers[h];if(typeof j.delta!=="number"){if(typeof j.start!=="number"){j.start=e}j.delta=j.end-j.start}if(isNaN(j.delta)){continue}if(i.hasOwnProperty(h)){BOOMR.addVar(h,j.delta)}else{f.push(h+"|"+j.delta)}d++}if(d){BOOMR.addVar("r",b.r);if(b.r2!==b.r){BOOMR.addVar("r2",b.r2)}if(f.length){BOOMR.addVar("t_other",f.join(","))}}b.timers={};b.complete=true;BOOMR.sendBeacon();return this},is_complete:function(){return b.complete}}}(window));
(function(a){var c=a.document;BOOMR=BOOMR||{};BOOMR.plugins=BOOMR.plugins||{};var b={complete:false,onload:function(){var d=new Date().getTime();BOOMR.subscribe("before_beacon",function(){var f=BOOMR.getVar("nt_load_st");if(f){d=f}BOOMR.addVar("t_onload",d-BOOMR.getVar("rt.tstart"));var e=BOOMR.t_lonload;if(e){BOOMR.addVar("t_lonload",e-BOOMR.getVar("rt.tstart"))}});b.complete=true;BOOMR.sendBeacon()},addListener:function(e,f,d){if(e.addEventListener){e.addEventListener(f,d,false)}else{if(e.attachEvent){e.attachEvent("on"+f,d)}}}};BOOMR.plugins.Onload={init:function(){if(c.readyState==="complete"){return b.onload()}if("onpagehide" in a){b.addListener(a,"pageshow",b.onload)}else{b.addListener(a,"load",b.onload)}return this},is_complete:function(){return b.complete}}}(window));