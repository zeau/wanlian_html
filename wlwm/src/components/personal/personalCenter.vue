<template>
<div id="personalCenter">
      <!--头部-->
      <div class="n_head">
        <div class="container clearfix pr">
          <div class="n_logo fl clearfix">
            <div class="fl ml20">
              <a href="#" class="fore1">我的万联平台</a>
            </div>
          </div><!-- n_logo -->

          <div class="n_menu fl">
            <ul class="clearfix">
              <li><router-link to="/pageHome">万联首页</router-link></li>
              <li class="n_hover">
                <div class="pr">
                  <a href="#">账户中心</a>
                  <div class="n_menu_hide">
                    <a href="#">账户信息</a>
                    <a href="#">账户安全</a>
                    <a href="#">收货地址</a>
                  </div>
                </div></li>
              <li><a href="#">消息中心</a></li>
            </ul>

          </div><!--n_menu-->
          <div class="cartfd-mem"><s class="cartBanner-mem"></s>
            <div class="cartit-mem">
              <span><s></s><router-link to="/cart">我的购物车</router-link></span>
              <strong class="cartNum-mem">0</strong></div>
            <div class="miniCart-mem hide">
              <div class="mCartBox-mem">
                <div class="mcBoxTop-mem clearfix"></div>
                <div class="mcBoxList-mem"></div>
                <div class="emCartBox-mem hide" style="display: block;">
                  <span>购物车中还没有商品，再去逛逛吧！</span> <!-- 购物车数量 -->
                </div>
              </div>
              <div class="mcGenius-mem bmcGenius-mem"></div>
              <div class="mCartError-mem"><p>正在为您加载数量！</p></div>
              <div class="mCartHandler-mem clearfix">
                <span class="mcCashier-mem">
                    <span class="mcTotal-mem">
                        <span class="mcRmb-mem">￥</span>
                        <span class="mcTotalFee-mem">0.00</span>
                    </span>
                    <span class="mcGo-mem"><a href="#">结算</a></span>
                </span>
                <h3>
                  <span class="mc_e1-mem">购物车</span>
                  <span class="mc_e2-mem">共</span>
                  <strong class="mcNumTotal-mem">0</strong> <strong class="mcNumChecked-mem">0</strong>
                  <span class="mc_e2-mem">件</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--主体部分-->
      <div class="container clearfix pt20 pb10">
        <div class="new_member_left">
          <div class="title"><a @click="showWithIndexFunc(0)">个人中心</a></div>
          <div class="menu_item">
            <a href="javascript:void(0)" class="item_title down" id="item1" @click="putDownOrUp('item1')">
              <span>订单中心</span>
            </a>
            <ul class="item_list" style="display: block;">
              <li class=""><a href="javascrip:void(0)" @click="showWithIndexFunc(1)">我的订单</a></li>
              <li class=""><a href="javascrip:void(0)" @click="showWithIndexFunc(2)">积分兑换订单</a></li>
              <li><a href="javascrip:void(0)" @click="showWithIndexFunc(3)">我的关注</a></li>
              <li><a href="javascrip:void(0)" @click="showWithIndexFunc(4)">浏览历史</a></li>
            </ul>
          </div>
          <div class="menu_item">
            <a href="javascript:void(0)" class="item_title down" id="item2" @click="putDownOrUp('item2')">
              <span>客户服务</span>
            </a>
            <ul class="item_list" style="display: block;">
              <li><a href="javascrip:void(0)" @click="showWithIndexFunc(5)">取消订单记录</a></li>
              <li><a href="javascrip:void(0)" @click="showWithIndexFunc(6)">我的投诉</a></li>
            </ul>
          </div>

          <!-- 预存款信息 -->
          <div class="menu_item">
            <a href="javascript:void(0)" class="item_title down"  id="item3" @click="putDownOrUp('item3')">
              <span>资产中心</span>
            </a>
            <ul class="item_list" style="display: block;">
              <li id="menu_myintegral"><a href="javascrip:void(0)" @click="showWithIndexFunc(7)">我的积分</a></li>
              <li id="mycoupon"><a href="javascrip:void(0)" @click="showWithIndexFunc(8)">我的余额券</a></li>
            </ul>
          </div>

          <div class="menu_item">
            <a href="javascript:void(0)" class="item_title down" id="item4"  @click="putDownOrUp('item4')">
              <span>账户中心</span>
            </a>
            <ul class="item_list" style="display: block;">
              <li><a href="javascrip:void(0)" @click="showWithIndexFunc(9)">账户信息</a></li>
              <li id="securitycenter"><a href="javascrip:void(0)" @click="showWithIndexFunc(10)">账户安全</a></li>
              <li id="consume"><a href="javascrip:void(0)" @click="showWithIndexFunc(11)">消费记录</a></li>
              <li><a href="javascrip:void(0)" @click="showWithIndexFunc(12)">收货地址</a></li>
            </ul>
          </div>
          <div class="menu_item">
            <a href="javascript:void(0)" class="item_title down" id="item5" @click="putDownOrUp('item5')">
              <span>消息中心</span>
            </a>
            <ul class="item_list" style="display: block;">
              <li><a href="javascrip:void(0)" @click="showWithIndexFunc(13)">商品评价</a></li>
              <li id="consult"><a href="javascrip:void(0)" @click="showWithIndexFunc(14)">购买咨询</a></li>
              <li><a href="javascrip:void(0)" @click="showWithIndexFunc(15)">站内信息</a></li>
            </ul>
          </div>
        </div>
          <!-- 右侧展示的内容 -->
        <person-intro-center :showWithFIndex="this.showAtIndex"></person-intro-center>
      </div>
</div>
</template>

<style>
@import "../../common/css/personalCenter.css";
</style>

<script>
    import personIntroCenter from '@/components/personal/personintroCenter';
    export default {
        data() {
            return {
                showAtIndex:0,
            }
        },
        components: {
          personIntroCenter
        },
        methods: {
          showWithIndexFunc(val){
              this.showAtIndex = val;
          },
          putDownOrUp(str){
            var obj = $("#"+str);
            var ulObj = $('#'+str+"+.item_list");
            let isHave = obj.hasClass("down");
            console.log(isHave);
              if (isHave) {
                obj.removeClass("down");
                obj.addClass("up");
                ulObj.slideUp("fast");
              } else {
                obj.removeClass("up");
                ulObj.slideDown("fast");
                obj.addClass("down");
              }
          }
        }
    }
</script>
