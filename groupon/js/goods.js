			$(function(){
				var goodname = window.location.href.split("?")[1].split("&")[0].split("=")[1]
				var categoryid = window.location.href.split("?")[1].split("&")[1].split("=")[1]
				var type = window.location.href.split("?")[1].split("&")[2].split("=")[1]
				var pindex = window.location.href.split("?")[1].split("&")[3].split("=")[1]
				var minprice = window.location.href.split("?")[1].split("&")[4].split("=")[1]
				var maxprice = window.location.href.split("?")[1].split("&")[5].split("=")[1]
				console.log(window.location.href.split("?")[1].split("&")[0].split("=")[1])
				
				$.ajax({
					type:"post",
					url:"http://ec2-13-114-229-73.ap-northeast-1.compute.amazonaws.com:18088/search/",
					data:{
						"goodname":goodname,
						"categoryid":categoryid,
						"type":type,
						"pindex":pindex,
						"minPrice":minprice,
						"maxPrice":maxprice
					},
					success:function(data){
						$('#all-list').empty()
						$('.c-bdr-gray-clr').remove()
						$('.expanding-pagination').empty()
						$('.page-loading').hide()
						$('.refinement-range-minInput').children()[0].value = data.minprice
						$('.refinement-range-maxInput').children()[0].value = data.maxprice
						for(var j in data.categories){
							var bb = `<li data-id="auto-and-home-improvement" class="sub-category-links child-refinement" data-bhc="category2:auto-and-home-improvement" data-bhc-path="LeftHandBar|RefinementUI|categoryRefinement|category2:auto-and-home-improvement">
																<a href="goods.html?goodname=${goodname}&categoryid=${ data.categories[j][1] }&type=1&pindex=${pindex}&minprice=${minprice}&maxprice=${maxprice}">
																	${ j }
																	<span class="deal-counts">(${ data.categories[j][0] })</span>
																</a>
															</li>`
										$('#all-list').append(bb)
										for(var m = 2;m < data.categories[j].length;m++){
											var cc = `<div class="baby-kids-and-toys-children" style="margin:5px 0;">
																	<a href="goods.html?goodname=${goodname}&categoryid=${ data.categories[j][m][2] }&type=2&pindex=${pindex}&minprice=${minprice}&maxprice=${maxprice}" style="margin-left: 10px;color: #888;font-size: 11px;">
																		${ data.categories[j][m][0] }
																	 <span class="deal-counts">(${ data.categories[j][m][1] })</span>
																	</a>
																</div>`
															$('.child-refinement').append(cc)	
										}
						}
						for(var n = 0;n < data.goods.length;n++){
							var aa = `<figure class="card-ui cui-c-udc c-bdr-gray-clr has-additional-value-message ">
															<a href="detail.html?productId=${ data.goods[n]["productId"] }">
																<div class="cui-content c-bdr-gray-clr ch-bdr-gray-md">

																	<div class="cui-udc-image-container">
																		<div class="cui-udc-image-overlay"></div>
																		<div class="cui-image-lazy-container cui-image-hover-zoom">
																			<img class="cui-svg-placeholder c-bg-gray-bg" type="image/svg+xml" height="250" width="414" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39; height=&#39;250&#39; width=&#39;414&#39;%2F%3E" alt="image placeholder">

																			<img class="cui-image lazy-loaded" src="${data.goods[n]["imageUrl"]}" style="width:100%;height:100%;">
																		</div>

																		<div class="cui-badge c-bg-accent c-txt-white">
																			<span class="cui-badge-label">TOP SELLER</span>
																		</div>
																	</div>
																	<div class="cui-udc-details c-txt-gray-dk">
																		<div class="cui-udc-title c-txt-black should-truncate is-truncated" style="word-wrap: break-word;">
																			${data.goods[n]["productTitle"]}
																		</div>

																		<div class="cui-udc-top-row">
																			<div class="cui-udc-left-one">

																				<div class="cui-quantity-bought c-txt-gray-dk">
																					10,000+ bought
																				</div>

																			</div>
																			<div class="cui-udc-right-one">

																				<div class="cui-price" data-pingdom-id="deal-price">
																					<s class="cui-price-original c-txt-gray-dk
 ">$${data.goods[n]["originalPrice"]}</s>
																						<span class="cui-price-discount cui-urgent c-txt-err


">$${data.goods[n]["salePrice"]}</span>
																				</div>

																			</div>
																		</div>
																		<div class="cui-udc-bottom-row">
																			<div class="cui-udc-left-two">

																				<div class="cui-review-rating ">

																					<ul class="rating ratings">
																						
																					</ul>

																					<div class="rating-count c-txt-gray-dk" >
																						${data.goods[n]["evaluateScore"]}
																					</div>

																				</div>

																			</div>
																			<div class="cui-udc-right-two">

																				<div class="cui-promotions">
																					<span class="cui-urgent cui-offer c-txt-err">Sale Ends 1/17</span>
																				</div>

																			</div>
																		</div>

																	</div>

																</div>
															</a>
															</figure>`
															$('#browse-deals').append(aa)
									for(let i = 0;i < Math.floor(data.goods[n]["evaluateScore"]);i++){
										let oLi = `<li class="iconfont icon-star2"><span class="full-star"></span></li>`
										$('.ratings').eq(n).append(oLi)
									}
									if(data.goods[n]["evaluateScore"]- Math.floor(data.goods[n]["evaluateScore"])> 0.5){
										let oLis = `<li class="iconfont icon-star3"><span class="full-star"></span></li>`
										$('.ratings').eq(n).append(oLis)
									}
									else if(data.goods[n]["evaluateScore"]- Math.floor(data.goods[n]["evaluateScore"]) < 0.5 && data.goods[n]["evaluateScore"]- Math.floor(data.goods[n]["evaluateScore"]) >0){
										let oLi = `<li class="iconfont icon-star-o"><span class="full-star"></span></li>`
										$('.ratings').eq(n).append(oLi)
									}
									for(let i = 0;i < 5 - Math.floor(data.goods[n]["evaluateScore"]);i++){
										let oLi = `<li class="iconfont icon-star-o"><span class="full-star"></span></li>`
										$('.ratings').eq(n).append(oLi)
									}
						}
						console.log(pindex)
						var dd = `<li class="c-txt-gray-md c-gray-prev">
												<a href="javascript:;" class="next c-bg-prim c-txt-white iconfont icon-arrow-right-copy-copy-copy">Prev</a>
											</li>`
						$('.expanding-pagination').append(dd)
						for(var b = 0; b < data.page.length;b++){
							var ss = `<li class="box c-bg-white c-active">
													<a href="goods.html?goodname=${ goodname }&categoryid=${ categoryid }&type=${ type }&pindex=${ data.page[b] }&minprice=${ minprice }&maxprice=${ maxprice }" class="c-txt-gray-dk" style="display:block;width:100%;height:100%;">${ data.page[b] }</a>
												</li>`
							$('.expanding-pagination').append(ss)
						}
						var cc = `<li class="c-txt-gray-md c-gray-next">
												<a href="javascript:;" class="next c-bg-prim c-txt-white iconfont icon-arrow-right-copy-copy-copy">Next</a>
											</li>`
						$('.expanding-pagination').append(cc)
						
						var ac = Array.from($('.c-active'))
						console.log(ac)
						ac.forEach(function(v,k){
							if(k == pindex){
								console.log(k)
								ac[k-1].className = "box c-bg-white c-active c-txt-prim"
							}
						})
						var index = 0
						$('.expanding-pagination').on("click",".c-gray-next",function(){
							$('.c-active').eq(index).addClass("c-txt-prim").siblings().removeClass("c-txt-prim")
								index++
								if(index>=ac.length){
									index = ac.length -1
								}
								window.location.href = "goods.html?goodname="+ goodname +"&categoryid="+ categoryid +"&type="+ type +"&pindex="+ (index+1) +"&minprice="+ minprice +"&maxprice="+maxprice
								console.log(index)
							})
						$('.expanding-pagination').on("click",".c-gray-prev",function(){
							console.log(1)
							$('.c-active').eq(index).addClass("c-txt-prim").siblings().removeClass("c-txt-prim")
								index--
								if(index<0){
									index = 2
								}
								window.location.href = "goods.html?goodname="+ goodname +"&categoryid="+ categoryid +"&type="+ type +"&pindex="+ (index-1) +"&minprice="+ minprice +"&maxprice="+maxprice
								console.log(index)
							})
					},
					error: function(xhr, ajaxOptions, thrownError) {
            console.info("error.");
            if (xhr.status == 200) {
                console.log(ajaxOptions);
            }
            else {
                console.log(xhr.status);
                console.log(thrownError);
            }
          }
				});
				$('.refinement-range-maxInput input')[0].onblur = function(){
					var mxprice = $('.refinement-range-maxInput').children()[0].value
					window.location.href = "goods.html?goodname="+ goodname +"&categoryid="+ categoryid +"&type="+ type +"&pindex="+ pindex +"&minprice="+ minprice +"&maxprice="+mxprice
				}
				$('.refinement-range-minInput input')[0].onblur = function(){
					var mnprice = $('.refinement-range-minInput').children()[0].value
					window.location.href = "goods.html?goodname="+ goodname +"&categoryid="+ categoryid +"&type="+ type +"&pindex="+ pindex +"&minprice="+ mnprice +"&maxprice="+maxprice
				}
			})