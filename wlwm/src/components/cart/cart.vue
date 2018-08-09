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
              <input type="checkbox" class="check_all" @click="oncheckAll" />
              <div class="beauty-checkbox beauty-checkbox-all" @click="oncheckAll"></div>
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
            <div class='cart-block' v-for="item in jsonUserData" :key="item.index">
              <div class='activity'>
                <div class='fl w500 ml15'><span>{{item[0].shopName}}</span></div>
              </div>
              <cart-item v-on:sumMoney="sumMoney" v-on:dodelBatch="dodelBatch" v-for="goodItem in item" :key="goodItem.index" :jsonItemData='goodItem' ref="child"></cart-item>
            </div>
  
          </form>
  
          <!-- /cart_tools -->
  
          <div class="cart_total ">
            <div class="thead fl t_check ">
              <div class="beauty-checkbox beauty-checkbox-all  " @click="oncheckAll"></div>
              <input type="checkbox " class="check_all " @click="oncheckAll">
              <label>全选</label>
              <span class="ml20 ">已选</span><span class="red allcount ">0</span><span>件商品</span>
            </div>
            <a class="check_btn fr " href="javascript:void(0); " @click="onpay">结算</a>
            <div class="fr f14 fb mr20 ">
              <span>总计（不含运费）：</span><span class="f20 red payPrice mr20 ">￥{{sum}}</span>
            </div>
          </div>
          <!-- /cart_total -->
  
  
        </div>
        <!-- /cart_box -->
  
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
        jsonUserData: [],
        sum: 0,
        sumGoods: "已选0件商品"
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

      this.reqForBuyCar();
    },
    methods: {
  
      reqForBuyCar() {
  
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
            that.jsonUserData = res.data;
            res.data.forEach(function(value, index) {
              //双层循环
              res.data[index].forEach(function(val, inde) {
                val.index = inde + index;
                if (val.commodityCount != 0) {
                  val.isHave = "有货";
                  val.inventory = "剩余" + val.commodityCount + "件";
                  val.goodSpc = "黑色,M"; //商品的规格
                } else {
                  val.isHave = "无货";
                  val.inventory = "剩余0件";
                  val.goodSpc = "黑色,M";
                }
              });
  
              // let goodIndex = value.name + index;
              // let goodPic = "http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1521775337351.jpg?x-oss-process=image/resize,w_160";//商品图片地址
              // let goodPrice = "1980";//商品价格 
              // let goodSpc = "黑色,M";//商品规格 黑色/M
              // let isHave = "有货";//是否有货  有货/无货
              // let inventory = "剩20件";//库存 剩20件
              // let jsonItemData = {
              //   "goodName":name,
              //   "goodPic":goodPic,
              //   "goodPrice":goodPrice,
              //   "goodSpc":goodSpc,
              //   "isHave":isHave,
              //   "inventory":inventory,
              //   "cartGoodNum":value.name + index,
              //   "value":"1",
              //   "checkName":"beautyCheck"+index,
              //   "index":index
              // };
              // let item = {"name":name,"jsonItemData":jsonItemData};
              // $("#subForm").append("<div class='cart-block'></div>");
              // $(".cart-block").append("<div class='activity'> <div class='fl w500 ml15'><span>商铺名称</span></div></div>");
              // $(".cart-block").append("<cart-item :jsonItemData='jsonItemData'></cart-item>");
            });
  
          } else {
            $(".login_isShow").show();
            that.$toast.center(res.message);
          }
        });
      },
  
  
  
      // 全选操作
      oncheckAll() {
        //更改显示
        let elmArr = this.$refs.child;
  
        // 选择框添加active
        let sumElm = $(this).parents(".cart_goods").find(".count").find("input");
        console.log(sumElm);
        let elm = $(".beauty-checkbox-all");
        let bo = elm.hasClass("active"); //是否处于active状态
        if (bo) {
          elm.removeClass("active");
          $("#subForm").siblings("cart-item").removeClass("active");
          elmArr.forEach(function(val, index) {
            val.checkAll(false);
          });
        } else {
          elm.addClass("active");
          $("#subForm").siblings("cart-item").addClass("active");
          elmArr.forEach(function(val, index) {
            val.checkAll(true);
          });
        }
  
      },
  
      //子组件向父组件传值
      sumMoney(param) {
        if (param.isAdd) {
          this.sum = this.sum + param.money;
        } else {
          this.sum = this.sum - param.money;
        }
      },
  
      //处理删除请求
      dodelBatch(ids) {
        var that = this;
        let str = ids.join(',');
        let param = {
          "ids": str
        };
        console.log(param);
  
        http.post(URLString.deleteShoppingCartList, param, function successCallBack(res) {
          console.log(res);
          if (res.statusCode == 200) {
            this.reqForBuyCar();
            that.$message({
              type: 'success',
              message: '删除成功!'
            });
          } else {
            that.$message(res.message);
          }
        });
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
  
      // 调用删除的接口
      BatchRequest() {
  
      },
  
      //dodel：确定删除
      dodel() {
  
      },
  
      // 批量删除：
      delall() {
        
      },
  
  
    }
  }
</script>
