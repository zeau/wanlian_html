<template>
    <div id="cart">
      <div class="container clearfix pr">
        <div class="mini_head" style="margin-top: 70px;">
          <h1 class="logo">
            <router-link to="/pageHome">
              <img src="../assets/logo.jpg" alt="" style="width: 165px;height: 40px;"/>
            </router-link>
          </h1>
        </div>
      </div>
      <div class="container">
        <input type="hidden" id="currentProvince" value="" />
        <input type="hidden" id="basePath" value="" />
        <div style="font-family: arial;">
          <div class="head_s mb20">
            <div class="fr w700 pt10">
              <div class="flow_progress1">
                <ul>
                  <li class="step1">1.查看购物车</li>
                  <li class="step2">2.填写核对订单信息</li>
                  <li class="step3">3.提交订单成功</li>
                </ul>
              </div>
            </div>
            <div class="cb"></div>
          </div><!-- /head_s -->
          <div class="flow_title">
            <b></b>
            <span>
                建议您立即<a href="customer/securitycenter.html">登录</a>，以确保顺利进行购物。
            </span>
          </div>
          <div class="cart_box">
            <div class="cart_head">
              <div class="thead t_check">
                <input type="checkbox" class="check_all" checked="checked" onclick="oncheckAll(this);"/>
                <div class="beauty-checkbox beauty-checkbox-all active" onclick="oncheckAll(this);"></div>
                <label>全选</label>
              </div>
              <div class="thead t_goods">商品</div>
              <div class="choose_area fl pr">
                <div class="area_text" style="cursor:inherit;">  </div>
              </div><!--/choose_area-->
              <div class="thead t_price">单价</div>
              <div class="thead t_count">数量</div>
              <div class="thead t_promotion">金额</div>
              <div class="thead t_action">操作</div>
            </div><!-- /cart_head -->
            <form name="subForm" id="subForm" action="http://uat.hbunion.com/order/newsuborder.html" method="post">
              <input name="presentScopeIds" id="presentScopeIds" value="" type="hidden"/>

              <p style="text-align:center;padding:20px 0;">购物车为空！！<router-link to="/pageHome" style="color:#c00"> 去逛逛</router-link></p>

            </form>

            <!-- /cart_tools -->

            <div class="cart_total">
              <div class="thead fl t_check">
                <div class="beauty-checkbox beauty-checkbox-all active" onclick=""></div>
                <input type="checkbox" class="check_all" checked="checked" onclick="oncheckAll(this);">
                <label>全选</label>
                <span class="ml20">已选</span><span class="red allcount">0</span><span>件商品</span>
              </div>
              <a class="check_btn fr" href="javascript:void(0);" onclick="onpay();">结算</a>
              <div class="fr f14 fb mr20">

                <span>总计（不含运费）：</span><span class="f20 red payPrice mr20">￥0</span>
              </div>
            </div><!-- /cart_total -->
          </div><!-- /cart_box -->

          <div class="cart_btn mt10">

            <router-link to="/pageHome" class="continue_shopping">继续购物</router-link>
            <a class="g_delete_batch continue_shopping" style="cursor: pointer" >批量删除</a>
          </div><!-- /cart_btn -->


        </div><!-- /container -->

        <div id="delete_dialog" class="dialog" style="position:fixed;">
          <div class="dialog-outer">
        <span class="dialog-bg dialog-bg-n">
        </span>
            <span class="dialog-bg dialog-bg-ne">
        </span>
            <span class="dialog-bg dialog-bg-e">
        </span>
            <span class="dialog-bg dialog-bg-se">
        </span>
            <span class="dialog-bg dialog-bg-s">
        </span>
            <span class="dialog-bg dialog-bg-sw">
        </span>
            <span class="dialog-bg dialog-bg-w">
        </span>
            <span class="dialog-bg dialog-bg-nw">
        </span>
            <div class="dialog-inner">
              <div class="dialog-toolbar clearfix">
                <a class="dialog-close" href="javascript:void(0);" title="关闭" onclick="hideDia()">
                  关闭
                </a>
                <h3 class="dialog-title">
                  删除商品
                </h3>
              </div>
              <div class="dialog-content clearfix">
                <div class="p10 tc w200" id="diaText">
                  确定从购物车中删除此商品？
                </div>
                <div class="tc p15">
                  <form method="post" action="http://uat.hbunion.com/delshoppingcatgoodsgroup.htm" id="delGroupFil">
                    <input type="hidden" name="shoppingCartId" id="shoppingCartId"/>
                    <input type="hidden" name="goodsInfoId" id="goodsInfoId"/>
                    <input type="hidden" name="fitId" id="fitId"/>
                  </form>
                  <a class="brown_btn" href="javascript:void(0);" onclick="dodel();">确定</a>
                  <a class="light_btn2" href="javascript:void(0);" onclick="hideDia()">取消</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
</template>

<style>
  @import "../../common/css/cart.css";
</style>

<script>
import http from '../../Api/baseHttp'
import URLString from '../../Api/api'

    export default {
        data() {
            return {

            }
        },
        created(){
          console.log("created");
          // 获取购物车数据
          let param = {
            
          };
          http.post(URLString.shoppingCartList,param,function successCallBack(res){
            if(res.statusCode == 200) {

            }else{
              this.$toast.center(res.message);
            }
          });
        },
        methods: {

        }
    }
</script>
