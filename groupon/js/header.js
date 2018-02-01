$(function(){
	$.ajax({
					type:"get",
					url:"http://ec2-13-114-229-73.ap-northeast-1.compute.amazonaws.com:18088",
					dataType:"json",
					success:function(data){
						var index = -1
						for(var i in data.categories_dict){
							++index
							var ss = `<li>
											<a class="flyMenulink" href="goods.html?goodname=&categoryid=${ data.categories_dict[i][1] }&type=1&pindex=1&minprice=0&maxprice=0" data-bhc="flyout-label:auto-and-home-improvement" tabindex="-1" role="menuitem">
												<n>${ i }</n>
												<c>${ data.categories_dict[i][0] }</c>
											</a>
											<div data-bhc="flyout-content:auto-and-home-improvement" class="flyContent">
												<h4><a href="javascript:;" tabindex="-1" role="menuitem">Shop All ${ i }</a></h4>
												<div class="ls-flex-wrap">
													<div class="flyCol50">
														
													</div>
												</div>
												<img class="flyBg ls-lazy" data-original="//www2.grouponcdn.com/layout/assets/gcx-auto-and-home-improvement-50ba035e1f.jpg" alt="Auto &amp; Home Improvement">
											</div>
										</li>`
										$('.flyMenu').append(ss)
										for(let j = 2;j < data.categories_dict[i].length;j++){
											var sss = `<a href="goods.html?goodname=&categoryid=${ data.categories_dict[i][j][2] }&type=2&pindex=1&minprice=0&maxprice=0" tabindex="-1" role="menuitem">
															<n>${ data.categories_dict[i][j][0] }</n>
															<c>${ data.categories_dict[i][j][1] }</c>
														</a>`
											$('.flyCol50').eq(index).append(sss)	
										}
							}
						$('.flyMenu li:nth-child(1)').addClass("flyActive")
						var primary = Array.from($('.primary-nav-tab'))
							primary.forEach(function(v,k){
								v.onmouseenter = function(){
									$('#ls-rail-slide').css({left:v.offsetLeft-15})
									$('#ls-rail-slide').css({display:"block"}).siblings().css({display:"none"})
									$('#ls-rail-slide').css({width:v.offsetWidth+30})
								  $('.subnav-flyout').eq(k).css({display:"block"}).siblings().css({display:"none"})
								}
								$('.primary-nav')[0].onmouseleave = function(){
									$('#ls-rail-slide').css({display:"none"})
									$('.subnav-flyout').css({display:"none"})
								}
							})
							var subnav = Array.from($('.subnav-flyout'))
							subnav.forEach(function(v,k){
								v.onmouseenter = function(){
								  v.style.display = "block"
								}
								v.onmouseleave = function(){
								  v.style.display = "none"
								}
							})
						var flyMenu = Array.from($('.flyMenu').children())
						flyMenu.forEach(function(v,k){
							v.onmouseenter = function(){
								$(this).addClass("flyActive").siblings().removeClass("flyActive")
							}
						})
						}
				})
	$('#ls-header-search-button')[0].onclick = function(){
					var searchText = $('.search-text').val()
					window.location.href = "goods.html?goodname="+searchText +"&categoryid=&type=1&pindex=1&minprice=0&maxprice=0"
				}
})
