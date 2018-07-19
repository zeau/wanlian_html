<template>
    <div id="pageHeader">
      <div class="top">
        <div class="container clearfix">
          <div class="top_left fr">
            <span class="my_store pr">
              <router-link to="/personalCenter"><i class="icons icon_bag"></i>我的万联平台</router-link>
            </span>
            <i class="icons icon_user"></i>
            <router-link to="/login">登录</router-link>/<router-link to="/register">注册</router-link>
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
              <img src="../../assets/logo.jpg" alt="" style="width:165px;height:40px;" />
            </router-link>
          </div>
          <!--searchBox-->
          <div class="search_wp fl pr">
            <div class="search_box clearfix">
              <form id="topSearchForm"  method = "get" onsubmit="setFormAction();" target="_self">
                <div class="platform-select">
                  <div class="platform-item active">搜本店</div>
                  <div class="platform-item">搜函百</div>
                </div>
                <select id="searchType" name="searchType" class="searchType c999" style="display: none;">
                  <option value="1" selected="selected">商品</option>
                  <option value="2">店铺</option>
                </select>

                <div class="btn-group"  id="search-select">
                <el-dropdown size="medium" type="primary">
                  <button class="btn btn-default">商品<i class="el-icon-arrow-down el-icon--right"></i>
                  </button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>商品</el-dropdown-item>
                    <el-dropdown-item>店铺</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                </div>
            
                <input class="search_text fl c999" type="text" name="title" autocomplete="off" value="" placeholder="Ecco"/>
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
              <h2><router-link to="/pageHome">全部商品分类</router-link><b></b></h2>
              <div class="sort_cont pa none" style="height:494px;background:rgba(239, 238, 236, 0.96);">
              <a class="close_category pa" href="javascript:;"></a>
              </div><!--/sort_open-->
            </div><!--/pro_sort-->

            <ul class="sort_list clearfix">
              <li  class=""><router-link to="/goodsList">国际精品</router-link></li>
              <li  class=""><router-link to="/goodsDetail">时尚美颜</router-link></li>
              <li  class=""><router-link to="/goodsList">潮流轻奢</router-link></li>
              <li  class=""><router-link to="/goodsList">精品珠宝</router-link></li>
              <li  class=""><router-link to="/goodsList">婴天童地</router-link></li>
            </ul><!--/sort_list-->
          </div><!--/container-->
        </div><!--/nav-->
      </div>
    </div>
</template>

<style>
  @import "../../common/css/header.css";
  @import "../../common/css/index.css";

</style>

<script>
export default {
    name:'PageHeader'
}
</script>
