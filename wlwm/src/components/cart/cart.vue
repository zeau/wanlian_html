<template>
  <div id="cart">
    <div class="container clearfix pr">
      <div class="mini_head" style="margin-top: 70px;">
        <h1 class="logo">
          <router-link to="/pageHome">
            <img src="../assets/logo.jpeg" alt="" style="width: 165px;height: 40px;" />
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
        </div>
        <!-- /head_s -->
        <div class="flow_title">
          <b></b>
          <span class="login_isShow">
                建议您立即<router-link to="/login">登录</router-link>，以确保顺利进行购物。
          </span>
        </div>
        <div class="cart_box">
          <div class="cart_head">
            <div class="thead t_check">
              <input type="checkbox" class="check_all" checked="checked" onclick="oncheckAll(this);" />
              <div class="beauty-checkbox beauty-checkbox-all active" onclick="oncheckAll(this);"></div>
              <label>全选</label>
            </div>
            <div class="thead t_goods">商品</div>
            <div class="choose_area fl pr">
              <div class="area_text" style="cursor:inherit;"> </div>
            </div>
            <!--/choose_area-->
            <div class="thead t_price">单价</div>
            <div class="thead t_count">数量</div>
            <div class="thead t_promotion">金额</div>
            <div class="thead t_action">操作</div>
          </div>
          <!-- /cart_head -->
          <form name="subForm" id="subForm" action="http://uat.hbunion.com/order/newsuborder.html" method="post">
            <input name="presentScopeIds" id="presentScopeIds" value="" type="hidden" />
  
            <p style="text-align:center;padding:20px 0;" class="is_none">购物车为空！！
              <router-link to="/pageHome" style="color:#c00"> 去逛逛</router-link>
            </p>

              <input name="ids" id="ids" value="" type="hidden">

            <!--根据商家进行分组 这里应该是双重循环-->
            <div class='cart-block' v-for="item in jsonUserData">
                <div class='activity'> <div class='fl w500 ml15'><span>{{item.name}}</span></div></div>
                <cart-item :jsonItemData='item.jsonItemData'></cart-item>
            </div>

          
          </form>
  
          <!-- /cart_tools -->
  
          <div class="cart_total ">
            <div class="thead fl t_check ">
              <div class="beauty-checkbox beauty-checkbox-all active " onclick=" "></div>
              <input type="checkbox " class="check_all " checked="checked " onclick="oncheckAll(this); ">
              <label>全选</label>
              <span class="ml20 ">已选</span><span class="red allcount ">0</span><span>件商品</span>
            </div>
            <a class="check_btn fr " href="javascript:void(0); " @click="onpay">结算</a>
            <div class="fr f14 fb mr20 ">
  
  
              <span>总计（不含运费）：</span><span class="f20 red payPrice mr20 ">￥0</span>
            </div>
          </div><!-- /cart_total -->


        </div><!-- /cart_box -->
  
        <div class="cart_btn mt10 ">
  
          <router-link to="/pageHome " class="continue_shopping ">继续购物</router-link>
          <a class="g_delete_batch continue_shopping " style="cursor: pointer " href="javascript:void(0)" @click="delall">批量删除</a>
        </div>
        <!-- /cart_btn -->
  
      </div>
      <!-- /container -->
  
      <div id="delete_dialog_batch" class="dialog" style="position:fixed;min-height:auto;">
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
              <a class="dialog-close" href="javascript:void(0);" title="关闭" onclick="hideDiaBatch()">
                              关闭
                          </a>
              <h3 class="dialog-title">
                批量删除商品
              </h3>
            </div>
            <div class="dialog-content clearfix">
              <div class="p10 tc w200" id="diaText">
                确定从购物车中批量删除此商品？
              </div>
              <div class="tc p15">
                <form method="post" action="http://uat.hbunion.com/delshoppingcatgoodsgroup.htm" id="delGroupFil">
                  <input type="hidden" name="shoppingCartId" id="shoppingCartId" />
                  <input type="hidden" name="goodsInfoId" id="goodsInfoId" />
                  <input type="hidden" name="fitId" id="fitId" />
                </form>
                <a class="brown_btn" href="javascript:void(0);" @click="dodelBatch">确定</a>
                <a class="light_btn2" href="javascript:void(0);" @click="hideDiaBatch">取消</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- dia -->
      <div class="dialog s_dia dia2" style="text-align: center;background: #f2f2f2">
        <div class="dia_tit clearfix">
          <h4 class="fl">提示</h4>
          <a class="dia_close fr" href="javascript:;" @click="cls"></a>
        </div>
        <!--/dia_tit-->
        <div class="dia_cont">
          <div class="dia_intro no_tc pt30">
            <img class="vm mr10" id="f_img" alt="" src="images/mod_war.png" />
            <em id="con_00">修改成功！</em>
          </div>
          <div class="dia_ops mt50 tc" style="text-align: center;">
            <a class="go_pay" id="go_pay_00" href="javascript:void(0);" @click="cls">确定</a>
          </div>
          <!--/dia_ops-->
        </div>
        <!--/dia_cont-->
      </div>
      <!--/dialog-->
  
      <div class="dialog s_dia dia3" style="text-align: center;background: #f2f2f2">
        <div class="dia_tit clearfix">
          <h4 class="fl">提示</h4>
          <a class="dia_close fr" href="javascript:;" @click="cls"></a>
        </div>
        <!--/dia_tit-->
        <div class="dia_cont" style="min-height: 150px;!important;">
          <div class="dia_intro no_tc pt30">
            <em>购物车中没有可结算的商品！</em>
          </div>
          <div class="dia_ops mt50 tc" style="text-align: center;margin-top: 30px;!important;">
            <a class="go_pay" id="go_pay_00" href="javascript:void(0);" @click="cls">确定</a>
          </div>
          <!--/dia_ops-->
        </div>
        <!--/dia_cont-->
      </div>
      <!--/dialog-->
  
      <div class="dialog s_dia dia7" style="text-align: center;background: #f2f2f2">
        <div class="dia_tit clearfix">
          <h4 class="fl">提示</h4>
          <a class="dia_close fr" href="javascript:;" @click="cls"></a>
        </div>
        <!--/dia_tit-->
        <div class="dia_cont">
          <div class="dia_intro no_tc pt30">
            <em>至少选择一条记录!</em>
          </div>
          <div class="dia_ops mt50 tc" style="text-align: center;">
            <a class="go_pay" id="go_pay_00" href="javascript:void(0);" @click="cls">确定</a>
          </div>
          <!--/dia_ops-->
        </div>
        <!--/dia_cont-->
      </div>
      <!--/dialog-->
  
      <div class="dialog s_dia dia6" style="text-align: center;background: #f2f2f2">
        <div class="dia_tit clearfix">
          <h4 class="fl">提示</h4>
          <a class="dia_close fr" href="javascript:;" @click="cls"></a>
        </div>
        <!--/dia_tit-->
        <div class="dia_cont">
          <div class="dia_intro no_tc pt30">
            <em>参与的抢购达到该账号限制的购买数量</em>
          </div>
          <div class="dia_ops mt50 tc" style="text-align: center;">
            <a class="go_pay" id="go_pay_00" href="javascript:void(0)" @click="cls">确定</a>
          </div>
          <!--/dia_ops-->
        </div>
        <!--/dia_cont-->
      </div>
      <!--/dialog-->
  
      <div class="dialog s_dia dia55" style="text-align: center;background: #f2f2f2">
        <div class="dia_tit clearfix">
          <h4 class="fl">提示</h4>
          <a class="dia_close fr" href="javascript:void(0);" @click="cls"></a>
        </div>
        <!--/dia_tit-->
        <div class="dia_cont">
          <div class="dia_intro no_tc pt30">
            <em>包含无货或下架商品，请重新选择!</em>
          </div>
          <div class="dia_ops mt50 tr" style="text-align: center;">
            <a class="go_pay" id="go_pay_00" href="javascript:void(0)" @click="cls">确定</a>
          </div>
          <!--/dia_ops-->
        </div>
        <!--/dia_cont-->
      </div>
  
      <div class="dialog s_dia dia9" style="text-align: center;background: #f2f2f2; width: 400px">
        <div class="dia_tit clearfix">
          <h4 class="fl">修改赠品</h4>
          <a class="dia_close fr" href="javascript:void(0)" onclick="giftCls()"></a>
        </div>
        <!--/dia_tit-->
        <div class="dia_cont">
          <div class="dia_intro no_tc pt30">
            <div class="box_gifts">
  
            </div>
          </div>
          <div class="dia_ops mt30 tr" style="text-align: center;">
            <a class="go_pay" id="confirmGift">确定</a>
            <a class="go_shopping" href="javascript:giftCls();">取消</a>
          </div>
          <!--/dia_ops-->
        </div>
        <!--/dia_cont-->
      </div>
      <!--/dialog-->
  
  
      <div class="dialog s_dia dia4" style="text-align: center;background: #f2f2f2">
        <div class="dia_tit clearfix">
          <h4 class="fl">提示</h4>
          <a class="dia_close fr" href="javascript:;" onclick="cls()"></a>
        </div>
        <!--/dia_tit-->
        <div class="dia_cont">
          <div class="dia_intro no_tc pt30" style="text-align: center;">
            <em>是否一键下单？</em>
          </div>
          <div class="dia_ops mt50 tr" style="text-align: center;">
            <a class="go_pay" id="go_pay_00" href="javascript:;" onclick="goForm()">确定</a>
            <a class="go_shopping" href="javascript:cls();">取消</a>
          </div>
          <!--/dia_ops-->
        </div>
        <!--/dia_cont-->
      </div>
      <!--/dialog-->
  
  
    </div>
  </div>
</template>

<style>
  @import "../../common/css/cart.css";
  @import "../../common/css/header.css";
  .brown_btn {
    padding: 5px 15px;
    background: #fff;
    color: #333;
    border-radius: 3px;
    border: 1px solid #57402e;
  }
  
  .box_gifts {
    text-align: left;
    max-height: 200px;
    overflow: auto;
  }
  
  .box_gifts div {
    margin-bottom: 5px;
    padding-top: 10px;
  }
  
  .box_gifts div input,
  .box_gifts div img,
  .box_gifts div a,
  .box_gifts div span {
    float: left;
  }
  
  .box_gifts div a {
    display: block;
    width: 240px;
    margin: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .box_gifts div img {
    margin-top: -10px;
    border: 1px solid #dfdfdf;
  }
  
  .specName {
    color: #999;
    position: relative;
    padding-left: 20px;
    font-size: 12px;
    top: 6px;
  }
</style>

<script>
  import http from '../../Api/baseHttp'
  import URLString from '../../Api/api'
  import CartItem from './cartItem.vue'
  
  export default {
    data() {
      return {
        jsonUserData:[]
      }
    },
    components: {
      CartItem
    },
    created() {
      console.log(window.localStorage.getItem("userToken"));
  
      //初始化弹框的位置
      $(window).resize(function() {
        this.win();
      });
  
      // 获取购物车数据
  
      var that = this;
      let param = {};
      http.post(URLString.shoppingCartList, param, function successCallBack(res) {
        if (res.statusCode == 200) {
          console.log(res);
          // 购物车不为空
          $(".login_isShow").hide();
          if (res.data.length > 0) {
            $(".is_none").hide();
          } else {
            $(".is_none").show();
          }

          // 遍历数组 新增 渲染购物车
          var arr = [];
          res.data.forEach(function(value, index) {
            let name = value.name + index;
            let goodPic = "http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1521775337351.jpg?x-oss-process=image/resize,w_160";//商品图片地址
            let goodPrice = "1980";//商品价格 
            let goodSpc = "黑色,M";//商品规格 黑色/M
            let isHave = "有货";//是否有货  有货/无货
            let inventory = "剩20件";//库存 剩20件
            let jsonItemData = {
              "goodName":name,
              "goodPic":goodPic,
              "goodPrice":goodPrice,
              "goodSpc":goodSpc,
              "isHave":isHave,
              "inventory":inventory,
              "cartGoodNum":value.name + index,
              "value":"1",
              "checkName":"beautyCheck"+index
            };
            let item = {"name":name,"jsonItemData":jsonItemData};
            arr.push(item);
            // $("#subForm").append("<div class='cart-block'></div>");
            // $(".cart-block").append("<div class='activity'> <div class='fl w500 ml15'><span>商铺名称</span></div></div>");
            // $(".cart-block").append("<cart-item :jsonItemData='jsonItemData'></cart-item>");
          });
          that.jsonUserData = arr;
  
        } else {
          $(".login_isShow").show();
          that.$toast.center(res.message);
        }
      });
    },
    methods: {
      dodelBatch(){

      },
      win() {
        var _wd = $(window).width();
        var _hd = $(window).height();
        $(".member-dialog").css("top", (_hd - $(".member-dialog").height()) / 2).css("left", (_wd - $(".member-dialog").width()) / 2);
        $(".dialog").css("top", (_hd - $(".dialog").height()) / 2).css("left", (_wd - $(".dialog").width()) / 2);
      },
  
      //结算
      dia(n) {
        this.win();
        $(".mask").fadeIn();
        $(".dia" + n).fadeIn();
        // this.center([".dia" + n]);
      },
  
      center(selector) {
        var _wd = $(window).width();
        var _hd = $(window).height();
        selectors.forEach(function(selector) {
          var $node = $(selector);
          $node.css("top", (_hd - $node.height()) / 2)
            .css("left", (_wd - $node.width()) / 2);
        })
      },
  
      //结算
      onpay() {
  
      },
  
      //关闭删除界面
      hideDia() {
        $("#fitId").attr("value", "");
        $('#delete_dialog').hide();
      },
      cls() {
        $(".dialog").fadeOut();
        $(".member-dialog").fadeOut();
        $(".mask").fadeOut();
      },
      hideDiaBatch() {
        $("#fitId").attr("value", "");
        $('#delete_dialog_batch').hide();
      },
  
      //dodel：确定删除
      dodel() {
  
      },
  
      // 批量删除：
      delall() {
        var checkedboxs = $("input[name='box']");
        var oneSelect = false;
        checkedboxs.each(function(i) {
          if ($(this).is(':checked') == true) {
            oneSelect = true;
          }
        });
        console.log(oneSelect);
        if (oneSelect) {
          //弹出对话框
          this.dia(7);
          return;
        }
        if ($('#delete_dialog_batch').is(':hidden')) {
          $('#delete_dialog_batch').show();
        } else {
          $('#delete_dialog_batch').hide();
        }
      },
  
  
      checkOne(obj, checkFlag, choseType) {
        for (i = 0; i < $(".mjchecked").length; i++) {
          if (!$(".mjchecked")[i].checked) {
            $(".check_all").attr("checked", false);
            $('.beauty-checkbox-all').removeClass('active');
            break;
          } else {
            $(".check_all").attr("checked", true);
            $('.beauty-checkbox-all').addClass('active');
          }
        }
        // 全选操作
        if (checkFlag) {
          if (choseType) {
            $(obj).siblings('.beauty-checkbox').addClass('active');
          } else {
            $(obj).siblings('.beauty-checkbox').removeClass('active');
          }
        } else {
          $(obj).siblings('.beauty-checkbox').toggleClass('active');
        }
  
        //获取外部的DIV 是否是促销的商品
        var codexType = $(obj).parents(".marketgroup").attr("attr-codextype");
        if (codexType != '0') {
          if (obj.checked) {
  
            if (codexType == '1') {
              var youhui = 0;
              var xiaoji = 0;
              $(obj).parents(".marketgroup").find(".mjchecked").each(function() {
                if ($(this)[0].checked) {
                  var man = $(this).parents(".cart_goods").find(".count").find(".marketPrice").val();
                  var jian = $(this).parents(".cart_goods").find(".count").find(".text").val();
                  var onesumprice = $(this).parents(".cart_goods").find(".smprice").val();
                  youhui = accAdd(youhui, accMul(man, jian));
                  xiaoji = accAdd(onesumprice, xiaoji);
                }
              });
              $(obj).parents(".marketgroup").find(".youhui").val(youhui);
              $(obj).parents(".marketgroup").find(".xiaoji").val(xiaoji);
  
            } else if (codexType == '11') { //抢购
              var youhui = 0;
              var xiaoji = 0;
              $(obj).parents(".marketgroup").find(".cart_goods").each(function() {
                //金额
                var man = $(this).find(".g_count").find(".count").find(".rushPrice").val();
                //件数
                var jian = $(this).find(".g_count").find(".count").find(".text").val();
                var onesumprice = $(this).find(".g_promotion").find(".smprice").val();
                youhui = accAdd(youhui, accMul(man, jian));
                xiaoji = accAdd(onesumprice, xiaoji);
              });
              $(obj).parents(".marketgroup").find(".youhui").val(youhui);
  
              $(obj).parents(".marketgroup").find(".xiaoji").val(xiaoji);
            } else if (codexType == '5') {
              var mj_sumprice = 0;
              var mj_end = 0;
              //满减
              $(obj).parents(".marketgroup").find(".mjchecked").each(function() {
                //判断是否选中
                if ($(this)[0].checked) {
                  mj_sumprice = accAdd($(this).parents(".cart_goods").find(".smprice").val(), mj_sumprice);
                }
              });
  
  
              $(obj).parents(".marketgroup").find(".manjian_reducePrice").each(function() {
                var man = $(this).val().split(",")[0];
                var jian = $(this).val().split(",")[1];
                if (Subtr(mj_sumprice, man) >= 0) {
                  mj_end = jian;
                }
  
              });
              $(obj).parents(".marketgroup").find(".xiaoji").val(mj_sumprice);
              $(obj).parents(".marketgroup").find(".youhui").val(mj_end);
  
            } else if (codexType == '8') {
              //满折
              var mz_sumprice = 0;
              var mz_end = 0;
              $(obj).parents(".marketgroup").find(".mjchecked").each(function() {
                //判断是否选中
                if ($(this)[0].checked) {
                  mz_sumprice = accAdd($(this).parents(".cart_goods").find(".smprice").val(), mz_sumprice);
                }
              });
  
              $(obj).parents(".marketgroup").find(".manzhe_fullbuyDiscount").each(function() {
                var man = $(this).val().split(",")[0];
                var zhe = $(this).val().split(",")[1];
                if (Subtr(mz_sumprice, man) >= 0) {
                  mz_end = accMul(mz_sumprice, Subtr(1, zhe));
                }
  
              });
              $(obj).parents(".marketgroup").find(".xiaoji").val(mz_sumprice);
              $(obj).parents(".marketgroup").find(".youhui").val(mz_end);
  
            } else if (codexType == '-1') {
              //-1代表是套装
              var num = $(obj).parents(".cart_item").find(".decrement").next().val();
              var xiaoji = 0;
              $(obj).parents(".marketgroup").find(".cart_item_goods").each(function() {
                //var isprice = $(this).find(".smprice").val();//accMul($(this).find(".smprice").val(),num);不用相乘，会导致十倍差距
                var isprice = accMul($(this).find(".smprice").val(), 1); //不用相乘，会导致十倍差距
                xiaoji = accAdd(xiaoji, isprice);
              });
              var groupPreferamount = $(obj).parents(".cart_item").find(".groupPreferamount").val();
              var youhui = accMul(num, groupPreferamount);
              $(obj).parents(".marketgroup").find(".xiaoji").val(xiaoji);
              $(obj).parents(".marketgroup").find(".youhui").val(youhui);
            } else if (codexType == '6') {
              var youhui = 0;
              var xiaoji = 0;
              $(obj).parents(".marketgroup").find(".mjchecked").each(function() {
                if ($(this)[0].checked) {
                  var man = 0;
                  var jian = $(this).parents(".cart_goods").find(".count").find(".text").val();
                  var onesumprice = $(this).parents(".cart_goods").find(".smprice").val();
                  youhui = accAdd(youhui, accMul(man, jian));
                  xiaoji = accAdd(onesumprice, xiaoji);
                }
              });
              $(obj).parents(".marketgroup").find(".youhui").val(youhui);
              $(obj).parents(".marketgroup").find(".xiaoji").val(xiaoji);
              var thisprice = $(obj).parents(".cart_goods").find(".smprice").val();
              var num = $(obj).parents(".cart_goods").find(".text").val();
  
              //赠送类型0金额1件数
              var presentType = $(obj).parents(".marketgroup").attr("attr-pretype");
              //赠送方式0全赠1一种赠送
              var presentMode = $(obj).parents(".marketgroup").find(".exchange").attr("attr_presentmode");
              if (presentType == 0) {
                //原先所有满赠商品的总价（判断符合几级满赠）
                var preAll = $(obj).parents(".marketgroup").find(".gift:first").find(".fullGiftAllPrices").val();
                //现在剩下的满赠商品总价
                var nowAll = accAdd(preAll, thisprice);
                $(obj).parents(".marketgroup").find(".fullGiftAllPrices").each(function() {
                  $(this).val(nowAll);
                })
              } else {
                //满数量赠时
                //原先所有满赠商品的总数量（判断符合几级满赠）
                var preAll = $(obj).parents(".marketgroup").find(".gift:first").find(".fullGiftAllPrices").val();
                var nowAll = accAdd(preAll, num);
                $(obj).parents(".marketgroup").find(".fullGiftAllPrices").each(function() {
                  $(this).val(nowAll);
                })
              }
              $(obj).parents(".marketgroup").find(".gift:visible").hide();
              this.isHasGift(obj, nowAll);
            }
          } else {
            if (codexType == '1') {
              var man = $(obj).parents(".cart_goods").find(".marketPrice").val();
              var jian = $(obj).parents(".cart_goods").find(".text").val();
              var you = $(obj).parents(".marketgroup").find(".youhui").val();
              youhui = Subtr(you, accMul(man, jian));
              $(obj).parents(".marketgroup").find(".youhui").val(youhui);
              //直降
              var thisprice = $(obj).parents(".cart_goods").find(".smprice").val();
              //总计+单品小计
              var oldxiaoji = $(obj).parents(".marketgroup").find(".xiaoji").val();
              var xiaoji = Subtr(oldxiaoji, thisprice);
              $(obj).parents(".marketgroup").find(".xiaoji").val(xiaoji);
  
  
            } else if (codexType == '6') {
              var man = 0;
              var jian = $(obj).parents(".cart_goods").find(".text").val();
              var you = $(obj).parents(".marketgroup").find(".youhui").val();
              youhui = Subtr(you, accMul(man, jian));
              $(obj).parents(".marketgroup").find(".youhui").val(youhui);
              //直降
              var thisprice = $(obj).parents(".cart_goods").find(".smprice").val();
              //总计+单品小计
              var oldxiaoji = $(obj).parents(".marketgroup").find(".xiaoji").val();
              var xiaoji = Subtr(oldxiaoji, thisprice);
              $(obj).parents(".marketgroup").find(".xiaoji").val(xiaoji);
  
              //赠送类型0金额1件数
              var presentType = $(obj).parents(".marketgroup").attr("attr-pretype");
              //赠送方式0全赠1一种赠送
              var presentMode = $(obj).parents(".marketgroup").find(".exchange").attr("attr_presentmode");
              if (presentType == 0) {
                //原先所有满赠商品的总价（判断符合几级满赠）
                var preAll = $(obj).parents(".marketgroup").find(".gift:first").find(".fullGiftAllPrices").val();
                //现在剩下的满赠商品总价
                var nowAll = Subtr(preAll, thisprice);
                $(obj).parents(".marketgroup").find(".fullGiftAllPrices").each(function() {
                  $(this).val(nowAll);
                })
              } else {
                //满数量赠时
                //原先所有满赠商品的总数量（判断符合几级满赠）
                var preAll = $(obj).parents(".marketgroup").find(".gift:first").find(".fullGiftAllPrices").val();
                var nowAll = Subtr(preAll, jian);
                $(obj).parents(".marketgroup").find(".fullGiftAllPrices").each(function() {
                  $(this).val(nowAll);
                })
              }
              $(obj).parents(".marketgroup").find(".gift:visible").hide();
              isHasGift(obj, nowAll);
            } else if (codexType == '11') { //抢购
              var rushPrice = $(obj).parents(".cart_goods").find(".rushPrice").val();
              var jian = $(obj).parents(".cart_goods").find(".text").val();
              var you = $(obj).parents(".marketgroup").find(".youhui").val();
              youhui = Subtr(you, accMul(rushPrice, jian));
              $(obj).parents(".marketgroup").find(".youhui").val(youhui);
              //抢购
              var thisprice = $(obj).parents(".cart_goods").find(".smprice").val();
              //总计+单品小计
              var oldxiaoji = $(obj).parents(".marketgroup").find(".xiaoji").val();
              var xiaoji = Subtr(oldxiaoji, thisprice);
              $(obj).parents(".marketgroup").find(".xiaoji").val(xiaoji);
  
            } else if (codexType == '5') {
              //满减
              var mj_sumprice = 0;
              var mj_end = 0;
              //满减
              $(obj).parents(".marketgroup").find(".mjchecked").each(function() {
                //判断是否选中
                if ($(this)[0].checked) {
                  mj_sumprice = accAdd($(this).parents(".cart_goods").find(".smprice").val(), mj_sumprice);
                }
              });
  
              $(obj).parents(".marketgroup").find(".manjian_reducePrice").each(function() {
                var man = $(this).val().split(",")[0];
                var jian = $(this).val().split(",")[1];
                if (Subtr(mj_sumprice, man) >= 0) {
                  mj_end = jian;
                }
  
              });
              $(obj).parents(".marketgroup").find(".xiaoji").val(mj_sumprice);
              $(obj).parents(".marketgroup").find(".youhui").val(mj_end);
  
            } else if (codexType == '8') {
              //满折
              var mz_sumprice = 0;
              var mz_end = 0;
              $(obj).parents(".marketgroup").find(".mjchecked").each(function() {
                //判断是否选中
                if ($(this)[0].checked) {
                  mz_sumprice = accAdd($(this).parents(".cart_goods").find(".smprice").val(), mz_sumprice);
                }
              });
  
              $(obj).parents(".marketgroup").find(".manzhe_fullbuyDiscount").each(function() {
                var man = $(this).val().split(",")[0];
                var zhe = $(this).val().split(",")[1];
                if (Subtr(mz_sumprice, man) >= 0) {
                  mz_end = accMul(mz_sumprice, Subtr(1, zhe));
                }
  
              });
              $(obj).parents(".marketgroup").find(".xiaoji").val(mz_sumprice);
              $(obj).parents(".marketgroup").find(".youhui").val(mz_end);
  
            } else if (codexType == '-1') {
              //-1代表是套装
              $(obj).parents(".marketgroup").find(".xiaoji").val(0);
              $(obj).parents(".marketgroup").find(".youhui").val(0);
            }
          }
        } else {
          $(obj).parents(".marketgroup").find(".mjchecked").each(function() {
            //判断是否选中
            if ($(this)[0].checked) {
              var oldxiaoji = $(obj).parents(".marketgroup").find(".smprice").val();
              $(obj).parents(".marketgroup").find(".xiaoji").val(oldxiaoji);
            } else {
              $(obj).parents(".marketgroup").find(".xiaoji").val(0);
            }
          });
        }
        this.lastsum();
      },
  
      isHasGift(obj, nowAll) {
        //
        //赠送类型0金额1件数
        var presentType = $(obj).parents(".marketgroup").attr("attr-pretype");
        //赠送方式0全赠1一种赠送
        var presentMode = $(obj).parents(".marketgroup").find(".gift:visible").find(".exchange").attr("attr_presentmode");
        $(obj).parents(".marketgroup").find(".grades").each(function() {
          if (parseFloat(nowAll) >= parseFloat($(this).val())) {
            $(this).parent(".gift").show();
            //                    $(this).parent(".gift").find(".light").show();
          }
        });
        $(obj).parents(".marketgroup").find(".gift:visible:last").show();
        $(obj).parents(".marketgroup").find(".gift:visible:last").siblings(".gift:visible").hide();
        this.fillData();
      },
  
      lastsum() {
        var zongji = 0;
        var fanxian = 0;
        var allcount = 0;
        /*
              $(".xiaoji").each(function(){
                  zongji = accAdd(zongji,$(this).val());
              });
          
              $(".youhui").each(function(){
                  fanxian = accAdd(fanxian,$(this).val());
              });
              */
        //小计与优惠需要单独一对一计算，因为一个商品的优惠和小计，相加为负数
        var xjs = $(".xiaoji"); //理论上这两个个数相等
        var yhs = $(".youhui"); //
        var payPricelist = [];
        for (var i = 0; i < xjs.length; i++) {
          var $xji = $(xjs[i]);
          var $yhi = $(yhs[i]);
  
          var xjVal = $xji.val();
          var yhVal = $yhi.val();
          //优惠大于小计，有问题,商品为0.01
          if (parseFloat(yhVal) > parseFloat(xjVal)) {
            zongji = accAdd(zongji, xjVal);
            fanxian = accAdd(fanxian, Subtr(xjVal, '0.01')); //总返现减去0.01
            payPricelist.push(accAdd(xjVal, "0.00")); //此时的总钱小计中
          } else {
            zongji = accAdd(zongji, $xji.val());
            fanxian = accAdd(fanxian, $yhi.val());
            payPricelist.push(parseFloat($xji.val()));
          }
        }
  
        $(".mjchecked").each(function() {
          if ($(this)[0].checked) {
            allcount = accAddInt($(this).parents(".cart_goods").find(".decrement").next().val(), allcount);
          }
        });
  
        $(".allcount").html(allcount);
        $(".zongji").html("￥" + zongji);
        $(".fanxian").html("-￥" + fanxian);
        if (Subtr(zongji, fanxian) < 0) {
          $(".payPrice").html("￥" + 0.01);
        } else {
          var payAll = "0.00";
          for (var i = 0; i < payPricelist.length; i++) {
            payAll = accAdd(payAll, payPricelist[i]);
          }
          //payAll = payAll.toFixed(2);//两位小数
          $(".payPrice").html("￥" + Subtr(payAll, fanxian));
        }
      }
    }
  }
</script>
