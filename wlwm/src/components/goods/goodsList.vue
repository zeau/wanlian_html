<template>
    <div id="goodsList">
      <!--Top-->
      <div class="top">
        <div class="top_con clearfix">
          <div class="top_logo">
            <span>万联万民产品平台</span>
          </div>
          <div class="top_fastLink">
            <span class="myStore">
              <a href="#">
                <i></i>
                我的万联平台
              </a>
            </span>
            <span class="fastLink">
              <i></i>
              <a href="#">登录</a>
              /
              <a href="#">注册</a>
            </span>
          </div>
        </div>
      </div>
      <!--head-->
      <div class="head container clearfix">
        <div class="head_logo">
          <a href="#"></a>
        </div>
        <div class="head_search">
          <ul>
            <li id="head_search_type_1" class="header_active">
              <span>商品</span>
            </li>
            <li id="head_search_type_2" class="">
              <span>店铺</span>
            </li>
          </ul>
          <div class="clearfix">
            <input id="search_keyword" class="ipt" placeholder="Hugo boss" value="" type="text">
            <button id="head_search_btn" class="btn" type="button"></button>
          </div>
        </div>
        <div class="head_cart">
          <a>购物车</a>
        </div>
      </div>
      <!--nav-->
      <div class="nav">
        <ul class="nav_con clearfix">
          <li id="menu">全部分类</li>
          <li v-for=""><a href="#">国际精品</a></li>
          <li ><a href="#">时尚美颜</a></li>
        </ul>
        <!--分类hover显示的全部类别-->
        <div></div>
      </div>
      <!--浏览地址-->
      <div class="browseAddress container">
        <span>服饰/</span>
        <span>鞋靴</span>
      </div>
      <!--brand-->
      <div class="brand">
        <dl>
          <dt>品牌</dt>
          <dd>
            <ul class="clearfix">
              <li v-for=""><a href="#">华歌尔</a></li>
              <li><a href="#">华歌尔</a></li>
              <li><a href="#">华歌尔</a></li>
              <li><a href="#">华歌尔</a></li>
              <li><a href="#">华歌尔</a></li>
            </ul>
            <a href="#">收起</a>
          </dd>
        </dl>
      </div>
      <!--main-->
      <div class="good_main container clearfix">
        <div class="good_mian_left">
          <div class="good_main_left_box" v-for="">
            <h3>浏览该类别最终购买</h3>
            <ul>
              <li v-for="">
                <div class="browse_img">
                  <a href="#">
                    <img>
                  </a>
                </div>
                <p class="browse_name">
                  <a href="#">SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444</a>
                </p>
                <p class="browse_price">
                  ¥ 1980
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="good_main_right">
          <div class="order clearfix">
            <a href="#">销量</a>
            <a href="#">人气</a>
            <a href="#">上架时间</a>
          </div>
          <div class="goods_list clearfix">
            <ul class="goods_list_item clearfix">
              <li class="goodsBox" v-for="">
                <a class="">
                  <img>
                  <h3>
                    SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444
                  </h3>
                  <p>
                    <em>￥</em>
                    19800.00
                  </p>
                  <span>
                    有货
                  </span>
                </a>
              </li>
              <li class="goodsBox" v-for="">
                <a class="">
                  <img>
                  <h3>
                    SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444
                  </h3>
                  <p>
                    <em>￥</em>
                    19800.00
                  </p>
                  <span>
                    有货
                  </span>
                </a>
              </li>
              <li class="goodsBox" v-for="">
                <a class="">
                  <img>
                  <h3>
                    SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444
                  </h3>
                  <p>
                    <em>￥</em>
                    19800.00
                  </p>
                  <span>
                    有货
                  </span>
                </a>
              </li>
              <li class="goodsBox" v-for="">
                <a class="">
                  <img>
                  <h3>
                    SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444
                  </h3>
                  <p>
                    <em>￥</em>
                    19800.00
                  </p>
                  <span>
                    有货
                  </span>
                </a>
              </li>
              <li class="goodsBox" v-for="">
                <a class="">
                  <img>
                  <h3>
                    SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444
                  </h3>
                  <p>
                    <em>￥</em>
                    19800.00
                  </p>
                  <span>
                    有货
                  </span>
                </a>
              </li>
            </ul>
            <div class="pages clearfix">
              <a href="#">上一页</a>
              <a href="#" class="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">下一页</a>
            </div>
          </div>
        </div>
      </div>
      <!--bottom-->
      <div class="bottom">
        <div class="wp">
          <div class="row clearfix">
            <div class="row_item"  v-for="">
              <i class="icon "></i>
              正品保障
              <div>海外直采货源透明</div>
            </div>
            <div class="row_item"  v-for="">
              <i class="icon "></i>
              正品保障
              <div>海外直采货源透明</div>
            </div>
            <div class="row_item"  v-for="">
              <i class="icon "></i>
              正品保障
              <div>海外直采货源透明</div>
            </div>
            <div class="row_item"  v-for="">
              <i class="icon "></i>
              正品保障
              <div>海外直采货源透明</div>
            </div>
          </div>
          <div class="service clearfix">
            <dl v-for="">
              <dt>购物指南</dt>
              <dd v-for="">
                <a href="#">用户注册</a>
              </dd>
              <dd>
                <a href="#">账户安全</a>
              </dd>
              <dd>
                <a href="#">联系客服</a>
              </dd>
              <dd>
                <a href="#">购物流程</a>
              </dd>
            </dl>
            <dl>
              <dt>帮助中心</dt>
              <dd v-for="">
                <a href="#">万联平台承诺</a>
              </dd>

            </dl>
            <dl>
              <dt>配送方式</dt>
              <dd v-for="">
                <a href="#">万联快递</a>
              </dd>
              <dd>
                <a href="#">上门自提</a>
              </dd>
              <dd>
                <a href="#">物流费用收费标准</a>
              </dd>
              <dd>
                <a href="#">配送服务说明</a>
              </dd>
            </dl>
            <dl>
              <dt>支付方式</dt>
              <dd v-for="">
                <a href="#">在线支付</a>
              </dd>
              <dd>
                <a href="#">货到付款</a>
              </dd>
            </dl>
            <dl>
              <dt>售后服务</dt>
              <dd v-for="">
                <a href="#">售后政策</a>
              </dd>
              <dd>
                <a href="#">价格保护</a>
              </dd>
              <dd>
                <a href="#">退单说明</a>
              </dd>
              <dd>
                <a href="#">取消订单</a>
              </dd>
            </dl>
            <dl>
              <dt>微信公众号</dt>
            </dl>
          </div>
        </div>
      </div>
      <!--foot-->
      <div class="container">
        <p class="login_footer"> Copyright © 2018-2038  万联万名开发平台   苏ICP备17067244</p>
      </div>
    </div>
</template>

<style>

</style>

<script>
    export default {
        data() {
            return {
              logourl : 'src/assets/logo.jpg'
            }
        }
    }
</script>
