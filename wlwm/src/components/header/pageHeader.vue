<template>
    <div >
    <div class="top">
    	<div class="top_wp clearfix">
        	<div class="top_left fr">
                <span class="my_store pr">
                    <a class="m_store" href="customer/index.html" target="_blank"><i class="icons icon_bag"></i>我的万联平台</a>
                </span>
                    <i class="icons icon_user"></i><a class="t_login" href="customer/securitycenter.html">登录</a>/<a class="t_reg" href="register.html">注册</a>
            </div><!--/top_left-->

            <div class="top_nav fl clearfix">
				 <span>万联万民有限公司</span>
            </div><!--/top_nav-->
        </div><!--/top_wp-->
    </div><!--/top-->

<div class="container">
    	<div class="header clearfix">
            <!--/logo-->
    		<div class="logo fl">
					<a href="index.html"><img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1515739240142.jpg" alt="" style="width:165px;height:40px;" /></a>
    		</div>

			<div class="search_wp fl pr">
            	<div class="search_box clearfix">
            		<form id="topSearchForm"  method = "get" onsubmit="setFormAction();" target="_self">
						<div class="platform-select"><div class="platform-item active">搜本店</div><div class="platform-item">搜函百</div></div>
                        <select id="searchType" name="searchType" class="searchType c999" style="display: none;">
								<option value="1" selected="selected">商品</option>
								<option value="2">店铺</option>
						</select>
                        <div class="btn-group" id="search-select">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="btn-text">商品</span><span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li class="active"><a href="javascript:;" data-type="1">商品</a></li>
                                <li class=""><a href="javascript:;" data-type="2">店铺</a></li>
                            </ul>
                        </div>
                            <input class="search_text fl c999" type="text" name="title" autocomplete="off" value="" placeholder="Ecco"/>
                            <input class="search_btn fl" type="button" onclick="checkSearch()" value="" />
            		</form>
                </div><!--/search_box-->
                <div class="ex_search pa">
                    <ul id="searchList">
                    </ul>
                    <p class="tr"><a class="close_ex" href="javascript:;">关闭</a></p>
                </div><!--/ex_search-->
            </div><!--/search_wp-->

                <div class="shopping_cart fr mt10">
                    <dl class="pr" id="loadcart">
                        <dt class="pr" id="mminicart">
                            <a href="myshoppingcart.html" target="_blank"><span class="lineBar">购物车</span><i class="icons icon_cart"></i><span class="sc_num"><em>0</em></span></a>
                        </dt>
                    </dl>
                </div><!--/shopping_cart-->
        </div><!--/header-->
    </div> <!-- container -->

<div style="width:100%;" id="navbg" class="">

    	<div class="nav clearfix">
            <div class="container clearfix">
    		<input type="hidden" id="tempcbshowflag" value="1">
    		<div class="pro_sort fl pr">
    			<h2><a href="javascript:;">全部商品分类</a><b></b></h2>
    			<div class="sort_cont pa none" style="height:494px;background:rgba(239, 238, 236, 0.96);">
    				<dl>
    					<dt>
    							<!--判断是否自定义分类导航-->
                                    <a href="list/2091-2091-1.html" target="_blank">服饰/鞋靴</a>
                            <img class="vm" alt="" src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516162583299.jpg" width="20px" height="20px"/>
    					</dt>
    					<dd>
    					</dd>
    				</dl>
    					<!--分类导航不足时，显示图片-->
    				<dl>
    					<dt>
    							<!--判断是否自定义分类导航-->
                                    <a href="list/2617-2617-70.html" target="_blank">箱包/礼品</a>
                            <img class="vm" alt="" src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516164258469.jpg" width="20px" height="20px"/>
    					</dt>
    					<dd>
    					</dd>
    				</dl>
    					<!--分类导航不足时，显示图片-->
    				<dl>
    					<dt>
    							<!--判断是否自定义分类导航-->
                            <a href="list/2435-2435-91.html" target="_blank">珠宝/饰品</a>
                            <img class="vm" alt="" src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516164945964.jpg" width="20px" height="20px"/>
    					</dt>
    					<dd>
    					</dd>
    				</dl>
    					<!--分类导航不足时，显示图片-->
    				<dl>
    					<dt>
    							<!--判断是否自定义分类导航-->
                            <a href="list/2661-2661-97.html" target="_blank">美妆/洗护</a>
                            <img class="vm" alt="" src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516165487981.jpg" width="20px" height="20px"/>
    					</dt>
    					<dd>
    					</dd>
    				</dl>
    					<!--分类导航不足时，显示图片-->
    				<dl>
    					<dt>
    							<!--判断是否自定义分类导航-->
                            <a href="list/2755-2755-151.html" target="_blank">母婴/喂养</a>
                            <img class="vm" alt="" src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516168109090.jpg" width="20px" height="20px"/>
    					</dt>
    					<dd>
    					</dd>
    				</dl>
    					<!--分类导航不足时，显示图片-->
    				<dl>
    					<dt>
    							<!--判断是否自定义分类导航-->
                            <a href="list/2356-2356-203.html" target="_blank">家居/厨具</a>
                            <img class="vm" alt="" src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516170470889.jpg" width="20px" height="20px"/>
    					</dt>
    					<dd>
    					</dd>
    				</dl>
    					<!--分类导航不足时，显示图片-->
    				<dl>
    					<dt>
    							<!--判断是否自定义分类导航-->
                            <a href="list/2952-2952-214.html" target="_blank"> 家用电器</a>
                            <img class="vm" alt="" src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516171182546.jpg" width="20px" height="20px"/>
    					</dt>
    					<dd>
    					</dd>
    				</dl>
    					<!--分类导航不足时，显示图片-->
    				<dl>
    					<dt>
    							<!--判断是否自定义分类导航-->
                            <a href="list/2973-2973-228.html" target="_blank">数码</a>
                            <img class="vm" alt="" src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516171867958.jpg" width="20px" height="20px"/>
    					</dt>
    					<dd>
    					</dd>
    				</dl>
    					<!--分类导航不足时，显示图片-->
    				<dl>
    					<dt>
    							<!--判断是否自定义分类导航-->
                            <a href="list/232-232-532.html" target="_blank">精品超市</a>
                            <img class="vm" alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201804/1523877500973.jpg" width="20px" height="20px"/>
    					</dt>
    					<dd>
    					</dd>
    				</dl>
    					<!--分类导航不足时，显示图片-->
    			</div><!--/sort_cont-->
    			<div class="sort_open pa" style="width:930px;background:#f5f5f5;">
                    <div class="ct_item clearfix"  >
        				<div class="sub_category clearfix fl" style="background:#f5f5f5;">
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    	<a href="list/2092-2091-4.html">女装</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2107-2091-39.html">风衣</a>

	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2102-2091-42.html">休闲裤</a>

	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2100-2091-43.html">半身裙</a>

	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2099-2091-44.html">连衣裙</a>

	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2124-2091-45.html">上衣</a>

	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2101-2091-508.html">牛仔裤</a>

	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2098-2091-47.html">马甲</a>

                                    </dd>
                                </dl>
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    	<a href="list/2125-2091-3.html">男装</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2137-2091-48.html">西服</a>

	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2154-2091-49.html">外套</a>

	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2126-2091-53.html">衬衫</a>

	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2141-2091-55.html">休闲裤</a>
                                    </dd>
                                </dl>
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    	<a href="list/2222-2091-37.html">女鞋</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2224-2091-60.html">单鞋</a>
                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                   		 <!--判断是否自定义分类导航-->
                                    	<a href="list/2207-2091-38.html">男鞋</a>
                                    </dt>
                                    <dd>
                                       	<!--判断是否自定义分类导航-->
                                    	<a href="list/2208-2091-56.html">商务休闲鞋</a>
                                       	<!--判断是否自定义分类导航-->
                                    	<a href="list/2209-2091-58.html">正装鞋</a>
                                    </dd>
                                </dl>
                            	<dl>
                                    <dt>
                                   		 <!--判断是否自定义分类导航-->
                                    	<a href="list/2155-2091-63.html">内衣</a>
                                    </dt>
                                    <dd>
                                       	<!--判断是否自定义分类导航-->
                                    	<a href="list/2156-2091-64.html">文胸</a>
                                       	<!--判断是否自定义分类导航-->
                                    	<a href="list/2158-2091-66.html">男式内裤</a>
                                       	<!--判断是否自定义分类导航-->
                                    	<a href="list/2159-2091-67.html">睡衣/家居服</a>
                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                        </div><!--/sub_category-->

                    </div><!--/ct_item-->
                    <div class="ct_item clearfix"  >
        				<div class="sub_category clearfix fl" style="background:#f5f5f5;">
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    	<a href="list/2645-2617-475.html">奢侈品</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2646-2617-480.html">箱包</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2648-2617-482.html">服饰</a>

                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                   		 <!--判断是否自定义分类导航-->
                                    		<a href="list/2656-2617-74.html">儿童箱包</a>
                                    </dt>
                                    <dd>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2659-2617-85.html">拉杆箱/拉杆包</a>
                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                        </div><!--/sub_category-->

                    </div><!--/ct_item-->
                    <div class="ct_item clearfix"  >
        				<div class="sub_category clearfix fl" style="background:#f5f5f5;">
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    	<a href="list/2496-2435-96.html">钟表</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    	<a href="list/2500-2435-254.html">手表</a>

                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                            <div class="category_box fl">
                            </div><!--/category_box-->
                        </div><!--/sub_category-->

                    </div><!--/ct_item-->
                    <div class="ct_item clearfix"  >
        				<div class="sub_category clearfix fl" style="background:#f5f5f5;">
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    		<a href="list/2732-2661-100.html">香水彩妆</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2737-2661-103.html">唇部</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2745-2661-105.html">BB霜</a>

                                    </dd>
                                </dl>
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    		<a href="list/2670-2661-111.html">面部护肤</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2671-2661-113.html">清洁</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2672-2661-395.html">护肤</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2673-2661-114.html">面膜</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2676-2661-115.html">防晒隔离</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2678-2661-116.html">眼部护理</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2679-2661-117.html">精华露</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2680-2661-399.html">爽肤水</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2682-2661-400.html">卸妆</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2683-2661-401.html">洁面</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2689-2661-403.html">保湿</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2690-2661-404.html">防晒</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2681-2661-119.html">化妆水</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2684-2661-121.html">乳液</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2685-2661-122.html">面霜</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2686-2661-123.html">眼霜</a>

                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                   		 <!--判断是否自定义分类导航-->
                                    		<a href="list/2693-2661-127.html">身体护肤</a>
                                    </dt>
                                    <dd>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2694-2661-128.html">沐浴</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2695-2661-129.html">润肤</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2697-2661-131.html">手足</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2707-2661-393.html">体霜</a>
                                    </dd>
                                </dl>
                            	<dl>
                                    <dt>
                                   		 <!--判断是否自定义分类导航-->
                                    		<a href="list/2721-2661-134.html">洗发护发</a>
                                    </dt>
                                    <dd>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2722-2661-135.html">洗发</a>
                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                        </div><!--/sub_category-->

                    </div><!--/ct_item-->
                    <div class="ct_item clearfix"  >
        				<div class="sub_category clearfix fl" style="background:#f5f5f5;">
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    		<a href="list/2756-2755-152.html">大牌奶粉</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2757-2755-153.html">婴幼奶粉</a>

                                    </dd>
                                </dl>
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    		<a href="list/2780-2755-157.html">喂养用品</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2807-2755-363.html">餐勺/叉/筷</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2812-2755-368.html">学饮杯</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2813-2755-369.html">婴童保温壶/杯</a>

                                    </dd>
                                </dl>
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    		<a href="list/2823-2755-167.html">洗护用品</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2824-2755-168.html">宝宝护肤</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2827-2755-328.html">驱蚊防蚊</a>

                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                   		 <!--判断是否自定义分类导航-->
                                    		<a href="list/2835-2755-180.html">童车童床</a>
                                    </dt>
                                    <dd>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2836-2755-181.html">婴儿推车</a>
                                    </dd>
                                </dl>
                            	<dl>
                                    <dt>
                                   		 <!--判断是否自定义分类导航-->
                                    		<a href="list/2845-2755-183.html">寝居服饰</a>
                                    </dt>
                                    <dd>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2851-2755-188.html">家居床品</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2848-2755-189.html">婴儿礼盒</a>
                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                        </div><!--/sub_category-->

                    </div><!--/ct_item-->
                    <div class="ct_item clearfix"  >
        				<div class="sub_category clearfix fl" style="background:#f5f5f5;">
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    		<a href="list/2357-2356-204.html">家纺</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2371-2356-279.html">枕头</a>

                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                   		 <!--判断是否自定义分类导航-->
                                    		<a href="list/2426-2356-209.html">锅具</a>
                                    </dt>
                                    <dd>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2427-2356-280.html">深烧锅</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2429-2356-210.html">不粘锅</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2428-2356-281.html">椭圆形锅</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2431-2356-283.html">海鲜锅</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2433-2356-284.html">炖锅</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2432-2356-243.html">炒锅</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2430-2356-282.html">煎锅</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2434-2356-285.html">电饭锅</a>
                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                        </div><!--/sub_category-->

                    </div><!--/ct_item-->
                    <div class="ct_item clearfix"  >
        				<div class="sub_category clearfix fl" style="background:#f5f5f5;">
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    		<a href="list/2953-2952-215.html">生活电器</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2954-2952-216.html">空气净化器</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2956-2952-217.html">吸尘器</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2957-2952-218.html">加湿器</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2955-2952-249.html">挂烫机/熨斗</a>

                                    </dd>
                                </dl>
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    		<a href="list/2966-2952-220.html">厨房小电器</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2969-2952-221.html">咖啡机</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2967-2952-223.html">面包机</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2971-2952-248.html">多士炉</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2972-2952-261.html">锅</a>

                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                   		 <!--判断是否自定义分类导航-->
                                    		<a href="list/2959-2952-224.html">个护健康</a>
                                    </dt>
                                    <dd>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2963-2952-225.html">电动牙刷</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2961-2952-226.html">剃须刀</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2962-2952-227.html">电吹风</a>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/2965-2952-246.html">梳子</a>
                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                        </div><!--/sub_category-->

                    </div><!--/ct_item-->
                    <div class="ct_item clearfix"  >
        				<div class="sub_category clearfix fl" style="background:#f5f5f5;">
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    		<a href="list/2974-2973-229.html">影音娱乐</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/2975-2973-529.html">耳机</a>

                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                            <div class="category_box fl">
                            </div><!--/category_box-->
                        </div><!--/sub_category-->

                    </div><!--/ct_item-->
                    <div class="ct_item clearfix"  >
        				<div class="sub_category clearfix fl" style="background:#f5f5f5;">
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    		<a href="list/233-232-533.html">食品饮料</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/235-232-544.html">饼干糕点</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/234-232-546.html">糖果巧克力</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/236-232-545.html">休闲小食</a>

                                    </dd>
                                </dl>
                            	<dl>
                                    <dt>
                                    	<!--判断是否自定义分类导航-->
                                    		<a href="list/242-232-535.html">洗化清洁</a>
                                    <dt/>
                                    <dd>
	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/243-232-539.html">个人洁护</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/244-232-541.html">家用清洁</a>

	                            		<!--判断是否自定义分类导航-->
                                    		<a href="list/245-232-542.html">家用纸品</a>

                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                            <div class="category_box fl">
                            	<dl>
                                    <dt>
                                   		 <!--判断是否自定义分类导航-->
                                    		<a href="list/248-232-537.html">居家生活</a>
                                    </dt>
                                    <dd>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/249-232-540.html">家居用品</a>
                                    </dd>
                                </dl>
                            	<dl>
                                    <dt>
                                   		 <!--判断是否自定义分类导航-->
                                    		<a href="list/246-232-538.html">母婴用品</a>
                                    </dt>
                                    <dd>
                                       	<!--判断是否自定义分类导航-->
                                    		<a href="list/247-232-543.html">婴幼用品</a>
                                    </dd>
                                </dl>
                            </div><!--/category_box-->
                        </div><!--/sub_category-->

                    </div><!--/ct_item-->
                    <a class="close_category pa" href="javascript:;"></a>
    			</div><!--/sort_open-->
    		</div><!--/pro_sort-->

    		<ul class="sort_list clearfix">
		    				<li  class=""><a  onclick="clickNav('list/2500-2435.html?cb=%E6%89%8B%E8%A1%A8','1')"  href="javascript:void(0);">国际精品</a></li>	
		    				<li  class=""><a  onclick="clickNav('list/2670-2661.html','2')"  href="javascript:void(0);">时尚美颜</a></li>	
		    				<li  class=""><a  onclick="clickNav('http://uat.hbunion.com/list/2646-2617-480.html','3')"  href="javascript:void(0);">潮流轻奢</a></li>	
		    				<li  class=""><a  onclick="clickNav('http://gbj.matrojp.com/goods/list/2697/0/0/0.jhtml?navId=32','4')"  href="javascript:void(0);">精品珠宝</a></li>	
		    				<li  class=""><a  onclick="clickNav('http://uat.hbunion.com/list/246-232-538.html','5')"  href="javascript:void(0);">婴天童地</a></li>	
    		</ul><!--/sort_list-->
    	</div><!--/nav-->
            </div><!--/container-->
    </div>


</div>
</template>

<style>
  @import "../../common/css/help.css";
    @import "../../common/css/index.css";

  .c999{
		color: #999;
    }
    .divhide{
	 display: none;
}
a{}
/*搜索提示-liangck-20151127*/
.section-header .content .search{
    z-index: 999;
}

.ex_search ul {
    border-bottom: 1px solid #ddd;
}

.ex_search li {
    position: relative;
}

.ex_search li a {
    display: block;
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
    color: #666;
}

.ex_search li:hover {
    background: #f2f2f2;
}

.ex_search li a span {
    color: #ccc;
    float: right;
}

.ex_search li .del_history {
    position: absolute;
    top: 0;
    right: 0;
    color: #369;
    display: none;
}

.ex_search p {
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
}

.cur {background: #f2f2f2;}

.inputsearch {
    width: 390px;
    height: 41px;
    font-size: 14px;
    line-height: 39px;
    padding: 0 10px;
    border-style: solid;
    border-right: none;
    border: solid 2px #57402e;
    margin: 0;
}

#headsearch {
    background: url(../../common/images/search_btn.png) no-repeat,#57402e;
    width: 45px;
    height: 45px;
    border: none;
    cursor: pointer;
    position: initial;
}
#search-select{
    float: left;
}
#search-select button {
    width: 52px;
    padding: 0;
    border: 2px solid #333;
    border-right: 0;
    border-radius: 0;
    height: 45px;
    background-color: #fff;
    color: #999;
}
#search-select button span.caret {
    margin-left: 6px;
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid\9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
#search-select input.search_text.fl.c999{
    height: 45px!important;
}
#search-select .dropdown-menu{
    min-width: 51px;
    border: 1px solid #c2a779;
    position: absolute;
    display: none;
    background-color: #fff;
}
#search-select .dropdown-menu li a{
    display: block;
    padding: 6px;
    text-align: center;
    color: #999;
}
#search-select .dropdown-menu>.active>a, #search-select .dropdown-menu>.active>a:hover, #search-select .dropdown-menu>.active>a:focus{
    background-color: #c2a779;
    color: #fff;
}
#search-select .dropdown-menu>li>a:hover{
    background-color: #c2a779;
    color: #fff;
}
    
</style>

<script>
export default {
    name:'PageHeader'
}
</script>
