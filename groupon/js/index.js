$(function(){
				$.ajax({
					type:"get",
					url:"http://ec2-13-114-229-73.ap-northeast-1.compute.amazonaws.com:18088",
					dataType:"json",
					success:function(data){
						console.log(data)
						$('.page-loading').hide()
						for(var n = 0;n < 2;n++){
							var aa = `<figure class="card-ui cui-c-udc c-bdr-gray-clr cui-is-embedded-card" >
														<a href="detail.html?productId=${ data.goods_score_list[n]["productId"] }">
															<div class="cui-content c-bdr-gray-clr ch-bdr-gray-md has-scroll-listener">
																<div class="cui-udc-image-container">
																	<div class="cui-udc-image-overlay"></div>
																	<div class="cui-image-lazy-container cui-image-hover-zoom">
																		<img class="cui-svg-placeholder c-bg-gray-bg" type="image/svg+xml" height="192" width="192" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39; height=&#39;192&#39; width=&#39;192&#39;%2F%3E" alt="image placeholder">

																		<img class="cui-image progressive-load lazy-loaded" src="${ data.goods_discount_list[n]["imageUrl"] }" data-original="//img.grouponcdn.com/deal/31JUfE1D4Y5H4bmQKVbDhiUsZ6qf/31-1500x900/v1/c96x96q5.jpg" data-high-quality="//img.grouponcdn.com/deal/31JUfE1D4Y5H4bmQKVbDhiUsZ6qf/31-1500x900/v1/c192x192q85.jpg" data-high-quality-2x="//img.grouponcdn.com/deal/31JUfE1D4Y5H4bmQKVbDhiUsZ6qf/31-1500x900/v1/c192x192q85.jpg" alt="image for Sofa-Style Fiber-Filled Pillow Pet Bed for Dogs" style="filter: blur(0px);width:100%;height:100%;">
																	</div>

																</div>
																<div class="cui-udc-details c-txt-gray-dk">
																	<div class="cui-udc-title c-txt-black should-truncate is-truncated" style="word-wrap: break-word;">
																		$${ data.goods_discount_list[n]["productTitle"] }
																	</div>

																	<div class="cui-udc-super-row">
																		<div class="cui-udc-left-zero">
																		</div>
																		<div class="cui-udc-right-zero">
																		</div>
																	</div>
																	<div class="cui-udc-top-row">
																		<div class="cui-udc-left-one">

																			<div class="cui-quantity-bought c-txt-gray-dk">
																				10,000+ bought
																			</div>

																		</div>
																		<div class="cui-udc-right-one">

																			<s class="cui-price-original-same-size c-txt-gray-dk
 ">$${ data.goods_discount_list[n]["originalPrice"] }</s>

																		</div>
																	</div>
																	<div class="cui-udc-bottom-row">
																		<div class="cui-udc-left-two">

																			<div class="cui-review-rating ">

																				<ul class="rating">
																					
																				</ul>

																				<div class="rating-count c-txt-gray-dk" data-bhc="deal-rating-count:122" data-bh-viewport="respect" data-bhc-path="HomeCards|CompoundCollection|compound:8bcbf672-a14f-4190-b561-3602c380bb7b|deal:6fc5c886-a9fc-11e7-8405-00259060b5da|deal-rating-count:122">
																					(122)
																				</div>

																			</div>

																		</div>
																		<div class="cui-udc-right-two">
																			<span class="cui-price-discount-same-size c-txt-price
">$${ data.goods_discount_list[n]["salePrice"] }</span>

																		</div>
																	</div>

																</div>

															</div>
														</a>
														</figure>`
														$('.cui-udc-list-view').append(aa)
									for(let i = 0;i < Math.floor(data.goods_discount_list[n]["evaluateScore"]);i++){
										let oLi = `<li class="iconfont icon-star2"><span class="full-star"></span></li>`
										$('.cui-udc-list-view .rating').eq(n).append(oLi)
									}
									if(data.goods_discount_list[n]["evaluateScore"]- Math.floor(data.goods_discount_list[n]["evaluateScore"])> 0.5){
										let oLis = `<li class="iconfont icon-star3"><span class="full-star"></span></li>`
										$('.cui-udc-list-view .rating').eq(n).append(oLis)
									}
									else if(data.goods_discount_list[n]["evaluateScore"]- Math.floor(data.goods_discount_list[n]["evaluateScore"]) < 0.5 && data.goods_discount_list[n]["evaluateScore"]- Math.floor(data.goods_discount_list[n]["evaluateScore"]) >0){
										let oLi = `<li class="iconfont icon-star-o"><span class="full-star"></span></li>`
										$('.cui-udc-list-view .rating').eq(n).append(oLi)
									}
									for(let i = 0;i < 5 - Math.floor(data.goods_discount_list[n]["evaluateScore"]);i++){
										let oLi = `<li class="iconfont icon-star-o"><span class="full-star"></span></li>`
										$('.cui-udc-list-view .rating').eq(n).append(oLi)
									}
						}
						for(let q = 0;q < 36;q++){
											var html = `<figure class="card-ui cui-c-udc c-bdr-gray-clr c-bdr-gray-clrss">
										<div class="cui-content c-bdr-gray-clr ch-bdr-gray-md">
											<div class="cui-udc-image-container">
												<div class="cui-udc-image-overlay"></div>
											<a href="detail.html?productId=${ data.goods_score_list[q]["productId"] }">
												<div class="cui-image-lazy-container cui-image-hover-zoom">
													<img class="cui-svg-placeholder c-bg-gray-bg" type="image/svg+xml" height="211" width="349" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39; height=&#39;211&#39; width=&#39;349&#39;%2F%3E" alt="image placeholder">
						
													<img class="cui-image progressive-load lazy-loaded" src="${ data.goods_score_list[q]["imageUrl"] }" data-original="//img.grouponcdn.com/deal/9h7L1T54RtGgbrSZ9hkKW6v3G5M/9h-1000x600/v1/c125x75q5.jpg" data-high-quality="//img.grouponcdn.com/deal/9h7L1T54RtGgbrSZ9hkKW6v3G5M/9h-1000x600/v1/c349x211q85.jpg" data-high-quality-2x="//img.grouponcdn.com/deal/9h7L1T54RtGgbrSZ9hkKW6v3G5M/9h-1000x600/v1/c349x211q85.jpg" alt="image for Loose Genuine Gemstones (25, 50, or 100 CTW)" style="filter: blur(0px);width:100%;height:100%;">
												</div>
											</a>
											</div>
											<div class="cui-udc-details c-txt-gray-dk">
											<a href="detail.html?productId=${ data.goods_score_list[q]["productId"] }">
												<div class="cui-udc-title c-txt-black should-truncate is-truncated" style="word-wrap: break-word;">
													${ data.goods_score_list[q]["productTitle"] }
												</div>
											</a>
												<div class="cui-udc-top-row" style="display: flex;justify-content: space-between;">
													<div><span class="iconfont icon-heart"></span></div>
													<div style="color: #68b93a;"><span style="background-color: #68b93a;padding: 0px 2px 2px 2px;border-radius: 2px;font-size: 12px;color: #fff;">返</span>123445</div>
												</div>
												<div class="cui-udc-bottom-row">
													<div class="cui-udc-left-two">
						
														<div class="cui-review-rating ">
						
															<ul class="rating" data-bhc="deal-review-rating:2.5" data-bh-viewport="respect" data-bhc-path="HomeCards|deal:abfc461b-1d71-4692-bece-89652818b615|deal-review-rating:2.5">
																
															</ul>
						
															<div class="rating-count c-txt-gray-dk" data-bhc="deal-rating-count:10" data-bh-viewport="respect" data-bhc-path="HomeCards|deal:abfc461b-1d71-4692-bece-89652818b615|deal-rating-count:10">
																${data.goods_score_list[q]["evaluateScore"]}
															</div>
						
														</div>
						
													</div>
													<div class="cui-udc-right-two">
						
														<div class="cui-price" data-pingdom-id="deal-price">
															<s class="cui-price-original-same-size c-txt-gray-dk
						 ">$${ data.goods_score_list[q]["originalPrice"] }</s>
																<span class="cui-price-discount-same-size c-txt-price
						">$${ data.goods_score_list[q]["salePrice"] }</span>
														</div>
						
													</div>
												</div>
						
											</div>
						
										</div>
									</figure>`
									$('#pull-cards').append(html)
									for(let i = 0;i < Math.floor(data.goods_score_list[q]["evaluateScore"]);i++){
										let oLi = `<li class="iconfont icon-star2"><span class="full-star"></span></li>`
										$('.c-bdr-gray-clrss .rating').eq(q).append(oLi)
									}
									if(data.goods_score_list[q]["evaluateScore"]- Math.floor(data.goods_score_list[q]["evaluateScore"])> 0.5){
										let oLis = `<li class="iconfont icon-star3"><span class="full-star"></span></li>`
										$('.c-bdr-gray-clrss .rating').eq(q).append(oLis)
									}
									else if(data.goods_score_list[q]["evaluateScore"]- Math.floor(data.goods_score_list[q]["evaluateScore"]) < 0.5 && data.goods_score_list[q]["evaluateScore"]- Math.floor(data.goods_score_list[q]["evaluateScore"]) >0){
										let oLi = `<li class="iconfont icon-star-o"><span class="full-star"></span></li>`
										$('.c-bdr-gray-clrss .rating').eq(q).append(oLi)
									}
									for(let i = 0;i < 5 - Math.floor(data.goods_score_list[q]["evaluateScore"]);i++){
										let oLi = `<li class="iconfont icon-star-o"><span class="full-star"></span></li>`
										$('.c-bdr-gray-clrss .rating').eq(q).append(oLi)
									}
							$('.cui-udc-top-row').click("icon-heart",function(){
								$(this).css("color","red")
							})
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
				$('.subOrder').eq(0).click(function(){
					$('.orderCode').eq(0).css({display:"block"})
				})
				$('.close').eq(0).click(function(){
					$('.orderCode').eq(0).css({display:"none"})
				})
				$('.submit-code').eq(0).click(function(){
					var text = $('.order-input').eq(0).val()
					if(text == '' || text.length<15 ||text.length>20){
						$('.prompt').eq(0).html("Please enter the correct order number. The order number should be within 15 to 20 characters.").css({color:"red"})
					}
					if(text != '' && text.length>=15 &&text.length<=20){
						$('.prompt').eq(0).html("After the Taobao order, we need to submit the order number to get the rebate!").css({color:"black"})
						$.ajax({
							type:"post",
							url:"http://ec2-13-114-229-73.ap-northeast-1.compute.amazonaws.com:18088/user/shoppingaward/",
							data:{
								"orderid":text
							},
							success:function(data){
								console.log(data)
							}
						});
					}
				})
			})