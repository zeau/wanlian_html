<template>
    <div id="goodsDetail">
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
          <li ><a href="#">国际精品</a></li>
          <li ><a href="#">时尚美颜</a></li>
        </ul>
        <!--分类hover显示的全部类别-->
        <div></div>
      </div>
      <!--details-->
      <div class="goodsDetail">
        <!--top-->
        <div class="goodsDetail_top">
          <div class="goods_info clearfix">
            <div class="goods_img_big">
              <img >
            </div>
            <div class="goods_img_small">
              <div class="goods_img_up">up</div>
              <div class="goods_img_list clearfix">
                <ul>
                  <li class="img_active">
                    <img>
                  </li>
                </ul>
              </div>
              <div class="goods_img_down">down</div>
            </div>
            <div class="goods_detail_info">
              <h3>The Belt - 中号皮革贝尔特包</h3>
              <p><em>￥</em>18000.00</p>
              <dl>
                <dt>商品规格</dt>
                <dd>
                  <ul class="goods_color">
                    <li><a class="color_active">牛皮</a></li>
                  </ul>
                </dd>
              </dl>
              <dl>
                <dt>数   量</dt>
                <dd class="goods_number">
                  <button class="number_jian" type="button"> - </button>
                  <input class="number_val" value="1" type="text">
                  <button class="number_jia" type="button"> + </button>
                </dd>
              </dl>
              <dl>
                <dt>促    销</dt>
                <dd class="goods_cuxiao">默认会员卡积分方案</dd>
              </dl>
              <div class="goods_info_button">
                <button class="btn btn_buy go_buy" type="button">立即购买</button>
                <button class="btn btn_join_car add_cart" type="button">加入购物车</button>
              </div>
              <div class="goods_info_tip">由线上观前店直接销售和发货，并提供售后服务</div>
            </div>
          </div>
        </div>
        <!--bottom-->
        <div class="goodsDetail_bottom">
          <!--左边-->
          <div class="">
            <!--第一行-->
            <div class="">

            </div>
          </div>
          <!--右边-->
          <div class="">

          </div>
        </div>
      </div>

    <page-footer></page-footer>

    </div>
</template>

<style>

</style>

<script>
import PageFooter from '@/components/footer/PageFooter'
    export default {
        data() {
            return {

            }
        },
        components:{
          PageFooter
        }
    }
</script>
