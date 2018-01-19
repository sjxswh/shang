			$(function(){
				var goodname = window.location.href.split("?")[1].split("&")[0].split("=")[1]
				var categoryid = window.location.href.split("?")[1].split("&")[1].split("=")[1]
				var type = window.location.href.split("?")[1].split("&")[2].split("=")[1]
				console.log(window.location.href.split("?")[1].split("&")[0].split("=")[1])
				$.ajax({
					type:"post",
					url:"http://offerwall.newbidder.com/search/",
					data:{
						"goodname":goodname,
						"categoryid":categoryid,
						"type":type
					},
					success:function(data){
						$('.page-loading').hide()
						console.log(data)
						for(var j in data.categories){
							var bb = `<li data-id="auto-and-home-improvement" class="sub-category-links child-refinement" data-bhc="category2:auto-and-home-improvement" data-bhc-path="LeftHandBar|RefinementUI|categoryRefinement|category2:auto-and-home-improvement">
																<a href="goods.html?goodname=&categoryid=${ data.categories[j][1] }&type=1">
																	${ j }
																	<span class="deal-counts">(${ data.categories[j][0] })</span>
																</a>
															</li>`
										$('#all-list').append(bb)
										for(var m = 2;m < data.categories[j].length;m++){
											var cc = `<div class="baby-kids-and-toys-children" style="margin:5px 0;">
																	<a href="goods.html?goodname=&categoryid=${ data.categories[j][m][2] }&type=2" style="margin-left: 10px;color: #888;font-size: 11px;">
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
				$.ajax({
					type:"post",
					url:"http://offerwall.newbidder.com/search/",
					success:function(data){
						for(var b = 0; b < data.page;b++){
							var ss = `<li>
													<a href="goods.html?pindex=${ data.page[b] }" class="c-txt-gray-dk">${ data.page[b]+1 }</a>
												</li>`
							$('.c-bg-whit').after(ss)
						}
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
			})