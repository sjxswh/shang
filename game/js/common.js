function $(id){
	return document.getElementById(id);
}


function getStyle(obj,sAttr){
	if(obj.currentStyle){
		return obj.currentStyle[sAttr];
	}
	else{
		 return getComputedStyle(obj,false)[sAttr];
	}
}

// 多属性同时缓运动的函数
function bufferMove(obj,target){
	//清除老的定时器
	clearInterval(obj.iTimer);
	//开启新的定时器
	obj.iTimer = setInterval(function(){
		//假设所以得属性都运动完毕
		var bBtn = true;
		//遍历包含运动属性以及终点值得对象
		for(var sAttr in target){
			//获取当前值
			if(sAttr === 'opacity'){
				var iCur = parseFloat(getStyle(obj,sAttr))*100;
			}
			else{
				var iCur = parseInt(getStyle(obj,sAttr));
			}
			
			//计算速度
			var iSpeed = (target[sAttr] - iCur) / 8;
			//辨别方向  取整
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)
			//计算下一次的值
			var iNext = iCur + iSpeed;
			//赋值
			if(sAttr === 'opacity'){
				obj.style[sAttr] = iNext / 100;
			}
			else{
				obj.style[sAttr] = iNext + 'px';
			}
			
			//判定当前属性是否运动完毕
			if(iNext !== target[sAttr]){
				bBtn = false;
			}
		}
		//清除定时器
		if(iNext === true){
			clearInterval(obj.iTimer);
			
		}
	},50)
}

function bufferMoves(obj,target,fn){
	clearInterval(obj.iTimer);
	obj.iTimer = setInterval(function(){
		var bBtn = true;
		for(var sAttr in target){
			if(sAttr === 'opacity'){
				var iCur = Math.round(parseFloat(getStyle(obj,'opacity'))*100);
			}
			else{
				var iCur = Math.round(parseFloat(getStyle(obj,sAttr)));
			}
			var iSpeed = (target[sAttr] - iCur) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			var iNext = iCur + iSpeed;
			if(sAttr === 'opacity') {
				obj.style.opacity = iNext / 100;
				obj.style.filter  = 'alpha(opacity=' + iNext + ')';
			}
			else{
				obj.style[sAttr] = iNext + 'px'
			}
			if(iNext !== target[sAttr]){
				bBtn = false;
			}
		}
		//console.log(bBtn);
		if(bBtn === true){
			clearInterval(obj.iTimer);
			if(fn){
				fn();
			}
		}
	},50)
	
}
//function oForEach(){	
//	oBtnChild.forEach(function(v,k){
//			v.className = '';
//		})
//		oBtnChild[iIndex].className = 'active';
//}
