var handleFlag1 = false;//开关
	var handleFlag2 = false;
	var bar_left = 0;//获取右侧控件left值
	var handleW = $(".ui-slider-range").width();//最大范围绿bar宽度
	var handle_width = "";//设置绿bar宽度
	var handle_left = "";//设置绿bar的left值
	var minMoney = 0;//最小val
	var maxMoney = 100;//最大val
	var changeLeftBar = '';//input控制左右控件的left值
	var disx = Number($(".row").css("marginLeft").split("p")[0]);
//$(".ui-slider-handle").eq(0)..position().left
	console.log(maxMoney)
//
	$(".ui-slider-handle").eq(0).mousedown( function(e) {
		var e = e || event;
		handleFlag1 = true;
			/*左边拖拽控件*/
		$(".refinement-box").mousemove( function(e){
			var e = e||event;
			if( handleFlag1 ){
				var leftX = e.pageX - disx - 25/2 - 12;
				if( (e.pageX - 25) <= disx){//最小值判定
					$(".ui-slider-handle").eq(0).css("left",0)
				}else if( leftX >= ($(".ui-slider-handle").eq(1).position().left) ){//最大值判定
					$(".ui-slider-handle").eq(0).css("left",$(".ui-slider-handle").eq(1).position().left+"px")
				}else{
					$(".ui-slider-handle").eq(0).css("left",leftX+"px")
				}
				/*同步绿条*/
				handle_left = `${$(".ui-slider-handle").eq(0).position().left}px`;
				handle_width = `${handleW-( $(".ui-slider-handle").eq(0).position().left )-( handleW - $(".ui-slider-handle").eq(1).position().left )}px`;
				$(".ui-slider-range").css( {"left":handle_left,"width":handle_width} );
				/*同步input最小值*/
				minMoney = parseInt( ($(".ui-slider-handle").eq(0).position().left/handleW )*maxMoney )
				$(".refinement-range-minInput>input").val( minMoney )
			}
		})
		
	});
	
	$(".ui-slider-handle").eq(1).mousedown( function(e) {
		var e = e || event;
		handleFlag2 = true;
		
	/*右侧控件*/
		$(".refinement-box").mousemove( function(e){
			var e = e || event;
			if( !bar_left ){
				bar_left = $(".ui-slider-handle").eq(1).position().left//获取初始left值
			}
			if( handleFlag2 ){
				var rightX = e.pageX-disx-25*1.5-12;
				if(rightX >= bar_left){
					
					$(".ui-slider-handle").eq(1).css('left',"100%")
					
				}else if( rightX <= ($(".ui-slider-handle").eq(0).position().left) ){
					
					$(".ui-slider-handle").eq(1).css('left',$(".ui-slider-handle").eq(0).position().left)
					
				}else{
					
					$(".ui-slider-handle").eq(1).css('left',rightX+"px")
					
				}
				handle_width=`${$(".ui-slider-handle").eq(1).position().left-$(".ui-slider-handle").eq(0).position().left}px`;
				$(".ui-slider-range").css("width",handle_width);
				maxMoney=parseInt(($(".ui-slider-handle").eq(1).position().left/handleW)*maxMoney)
				$(".refinement-range-maxInput>input").val(maxMoney);
			}
		})
	});
	$(document).mouseup(function(e){
		handleFlag1=false;
		handleFlag2=false;
		minMoney=$(".refinement-range-minInput>input").val();
		maxMoney=$(".refinement-range-maxInput>input").val();
		//console.log(minMoney,maxMoney)
	})
	/*左侧input失去焦点事件*/
	$(".refinement-range-minInput>input").blur(function(){
		//console.log(this.value <= maxMoney && this.value >= 0 )
		if( this.value <= maxMoney && this.value >= 0 ){
			this.style.border="1px solid #d8d8d8";//初始化样式
			changeLeftBar = `${ this.value / maxMoney * handleW }px` ;
			$(".ui-slider-handle").eq(0).css("left",changeLeftBar);//改变左边控制柄的left
			/*同步绿色bar*/
			var handleLeft=$(".ui-slider-handle").eq(0).position().left;
			/*同步绿色bar*/
			handle_left=`${handleLeft}px`;
			handle_width=`${handleW-(handleLeft)-(handleW-$(".ui-slider-handle").eq(1).position().left)}px`;
			$(".ui-slider-range").css({"left":handle_left,"width":handle_width});
		}else{//超出范围改变样式
			this.style.border="1px solid #f00"
		}
		minMoney=$(".refinement-range-minInput>input").val();
	})
	/*右侧input*/
	$(".refinement-range-maxInput>input").blur(function(){
		//console.log(this.value,minMoney)
		if( this.value >= minMoney&& this.value<=maxMoney){
			this.style.border="1px solid #d8d8d8";//初始化样式
			changeLeftBar=`${this.value/maxMoney*handleW}px`;
			$(".ui-slider-handle").eq(1).css("left",changeLeftBar);//改变右边控制柄的left
			/*同步绿色bar*/
			var handleLeft=$(".ui-slider-handle").eq(1).position().left;
			handle_width=`${handleLeft-$(".ui-slider-handle").eq(0).position().left}px`;
			$(".ui-slider-range").css("width",handle_width);
		}else{//超出范围改变样式
			this.style.border="1px solid #f00";
		}
		maxMoney=$(".refinement-range-maxInput>input").val();
	})