<template>
  <div id="pageHeader">
    <div class="top">
      <div class="container clearfix">
        <div class="top_left fr">
          <span class="my_store pr">
                  <router-link to="/personalCenter"><i class="icons icon_bag"></i>我的万联平台</router-link>
                </span>
          <span class="no_login"><i class="icons icon_user"></i><router-link to="/login">登录</router-link>/<router-link to="/register">注册</router-link></span>
          <span class="is_login">xxx 欢迎您！<router-link to="/login" style="border-left:1px solid #e2e2e2;padding:0 10px;">退出</router-link></span>
  
        </div>
        <div class="top_nav fl clearfix">
          <span>万联万民有限公司</span>
        </div>
      </div>
    </div>
  
    <div class="Mycontainer">
      <div class="header clearfix">
        <!--logo-->
        <div class="logo fl">
          <router-link to="/pageHome">
            <img src="../assets/logo.jpeg" alt="" style="width:165px;height:40px;" />
          </router-link>
        </div>
        <!--searchBox-->
        <div class="search_wp fl pr">
          <div class="search_box clearfix">
            <form id="topSearchForm" method="get" onsubmit="setFormAction();" target="_self">
              <div class="platform-select">
                <div class="platform-item active">搜本店</div>
                <div class="platform-item">搜店铺</div>
              </div>
              <select id="searchType" name="searchType" class="searchType c999" style="display: none;">
                      <option value="1" selected="selected">商品</option>
                      <option value="2">店铺</option>
              </select>
              <div class="btn-group" id="search-select">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="btn-text">商品</span>
                        <span class="caret"></span>
                      </button>
                <ul class="dropdown-menu">
                  <li class="active"><a href="javascript:;" data-type="1">商品</a></li>
                  <li class=""><a href="javascript:;" data-type="2">店铺</a></li>
                </ul>
              </div>
              <input class="search_text fl c999" type="text" name="title" autocomplete="off" value="" placeholder="Ecco" />
              <input class="search_btn fl" type="button" onclick="checkSearch()" value="搜 索" />
            </form>
          </div>
          <div class="ex_search pa">
            <ul id="searchList">
            </ul>
            <p class="tr"><a class="close_ex" href="javascript:;">关闭</a></p>
          </div>
        </div>

        <!--购物车-->
        <div class="shopping_cart fr mt10">
          <dl class="pr" id="loadcart">
            <dt class="pr" id="mminicart">
                    <router-link to="/cart">
                      <span class="lineBar">购物车</span>
                      <i class="icons icon_cart"></i>
                      <span class="sc_num"><em>0</em></span>
                    </router-link>
                  </dt>
          </dl>
        </div>
      </div>
    </div>
  
    <!-- 导航栏 -->
    <div style="width:100%;" id="navbg" class="">
      <div class="nav clearfix">
        <div class="container clearfix">
          <input type="hidden" id="tempcbshowflag" value="1">
          <div class="pro_sort fl pr">
    			<h2><a href="javascript:void(0);">全部商品分类</a><b></b></h2>
            <div class="sort_cont pa none"  style="height:494px;background:rgba(239, 238, 236, 0.96);">
              <!-- 第一个分类的展示 -->
              <dl>
                <dt>
                        <!--判断是否自定义分类导航-->
                        <router-link to="/">服饰/鞋靴</router-link>
                        <img class="vm" alt="" src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516162583299.jpg" width="20px" height="20px"/>
                      </dt>
                <dd></dd>
              </dl>
            </div><!--/sort_cont-->
  
            <div class="sort_open pa" style="width:930px;background:#f5f5f5;">
              <div class="ct_item clearfix">
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
                  </div><!--/category_box-->
                </div><!--/sub_category-->
              </div><!--/ct_item-->
              <a class="close_category pa" href="javascript:;"></a>
            </div><!--/sort_open-->
          </div><!--/pro_sort-->
  
          <!-- 商品列表分类 -->
          <ul class="sort_list clearfix">
            <li class="">
              <router-link to="/goodsList">国际精品</router-link>
            </li>
          </ul>


          <!--/sort_list-->
        </div>
        <!--/container-->
      </div>
      <!--/nav-->
    </div>
  
  </div>
</template>

<style>
  @import "../../common/css/header.css";
  @import "../../common/css/index.css";
</style>

<script>
  import http from '../../Api/baseHttp'
  import URLString from '../../Api/api'
  // import '../util/index.js'
  // import '../util/jquery-1.7.2.min.js'
  // import '../util/jquery.lazyload.min.js'
  // import '../util/jquery.slides.min.js'
  // import '../util/tabScript.js'
  // import '../util/jcarousellite_1.0.1.js'
  // import '../util/jsOperation.js'
  // import '../util/jquery.zclip.js'
  // import '../util/jquery.zclip.min.js'



  export default {
    name: 'PageHeader',
    data() {
      return {
  
      }
    },
    created() {
      var that = this;
      http.post(URLString.getLoginUserInfor, {}, function SuccessCallBack(res) {
        console.log(res)
        if (res.statusCode === 301) {
          $('.no_login').show();
          $('.is_login').hide();
        } else {
          $('.no_login').hide();
          $('.is_login').show();
        }
      });

    },
    mounted (){
//全部商品分类
    var firstMoveIn = true;
    var t = 0;
		$(".sort_cont dl").mouseover(function(){
			var cur = $(this);
			var index = $(this).index();
			var dl = $(".sort_cont").children("dl");
			t = setTimeout(function(){
				dl.removeClass("hover").eq(index).addClass("hover");
				$(".sort_open .ct_item:visible").hide();
				$(".sort_open .ct_item").eq(index).show();
				$(".sort_open").show().css("width","0");
				if(firstMoveIn) {
					$(".sub_brands").hide();
					$(".sort_open").animate({
						width: "738px"
					},200,function(){
						$(".sub_brands").show();
					});
				} else {
					$(".sort_open").css("width","738px");
				};
				firstMoveIn = false;	
			},100);
		}).mouseout(function(){
			clearTimeout(t);
		});
		function hideSort(){
			$(".sort_cont").find(".hover").removeClass("hover");
			$(".sort_open .ct_item:visible").hide();
			$(".sort_open").hide();
			firstMoveIn = true;
		};
		$(".pro_sort").mouseleave(function(){
			hideSort();
		});
		$(".pro_sort h2").mouseover(function(){
			hideSort();
		});
		$(".close_category").click(function(){
			hideSort();
		});
		function proSort(){
			var st = 0;
			$(".pro_sort").bind("mouseenter",function(){
				st = setTimeout(function(){
					$(".sort_cont").show();
				},200);
			});
			$(".pro_sort").bind("mouseleave",function(){
				clearTimeout(st);
				$(".sort_cont").hide();
			});
		};
		//首页判断，开发替换
		if($("#main_mark").length == 0) {
			$(".sort_cont").addClass("none");
			proSort();
		};
    
    },
    methods: {


    }
  }
</script>
