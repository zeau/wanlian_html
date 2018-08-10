<template>
    <div id="checkOrder">
    
        <div class="top">
            <div class="top_wp clearfix">
                <div class="top_left fr">
                    <span class="my_store pr">
                            <a class="m_store" href="/customer/index.html" target="_blank"><i class="icons icon_bag"></i>我的函百平台</a>
                        </span>
                    <a class="t_login ml10" href="/logout.html">退出</a>
                </div>
                <!--/top_left-->
    
                <div class="top_nav fl clearfix">
                    <span>万联世纪有限公司</span>
                </div>
                <!--/top_nav-->
                <form method="post" enctype="multipart/form-data" action="http://uatadmin.hbunion.com/third/isloginthird.htm" id="loginthirds">
                    <input type="hidden" value=64470 name="customerId" id="customerId" />
                    <input type="hidden" value=9f252773-d424-4860-a677-65c3e2e087ba name="loginKey" id="loginKey" />
                </form>
            </div>
            <!--/top_wp-->
        </div>
    
        <div style="font-family: arial;margin-top:50px;">
            <div class="container">
                <div class="logo fl head2">
                    <!--
            <a href="/index.html"><img src="/index_two/images/logo.png" alt="" /></a>
    		-->
                    <a href="http://uat.hbunion.com/"><img src="http://img-test.hbunion.com/upload/image/201806/1530253665118.jpg" alt="" style="width:165px;height:40px;" /></a>
                </div>
                <div class="head_s mb20">
                    <div class="fr w700 pt10">
                        <div class="flow_progress2">
                            <ul>
                                <li class="step1">1.查看购物车</li>
                                <li class="step2">2.填写核对订单信息</li>
                                <li class="step3">3.提交订单成功</li>
                            </ul>
                        </div>
                    </div>
                    <div id="logo">
                        <!--<a class="logo fl" href="/index.html"><img alt="" src="/images/logo.gif" /></a>-->
                    </div>
                    <div class="cb"></div>
                </div>
                <!-- /head_s -->
                <input id="yfprice" type="hidden" />
                <input id="bossyfprice" type="hidden" />
                <input id="sumpriceflag" type="hidden" />
    
                <div class="w990" style="margin-top:0;">
                    <div class="jd_tit">
                        <h2>填写并核对订单信息</h2>
                    </div>
                    <form name="subForm" id="sub_order" action="/order/submitOrder.html" method="post">
    
                        <input type="hidden" id="csrfNo" name="CSRFToken" value="735d68d5-6adc-44e8-ba22-f821f24e6f81" />
                        <input type="hidden" name="typeId" id="typeId" value="0" />
                        <input type="hidden" name="presentScopeIds" value="" />
                        <div class="jd_order_det">
                            <div class="step-tit clearfix">
                                <h3>收货人信息</h3>
                                <a class="add" href="javascript:void(0);" onclick="toaddaddress()">新增收货地址</a>
                            </div>
                            <div class="step-cont">
                                <div class="consignee-addr">
                                    <div class="consignee-cont">
                                        <input type="hidden" name="custAddress" class="ch_address" value="" />
                                        <input type="hidden" name="distinctId" class="ch_distinctId" value="" />
    
    
                                        <ul class="cust_allAddress">
    
                                        </ul>
                                    </div>
                                    <!--consignee-cont-->
                                    <div id="addr-up" class="addr-up disabled"></div>
                                    <div id="addr-down" class="addr-down"></div>
                                </div>
                                <!--consignee-addr-->
                            </div>
                            <!--step_cont-->
    
                            <div class="step-tit clearfix">
                                <a class="none" href="../myshoppingcart.html">返回修改购物车</a>
    
                                <h3>送货订单信息</h3>
                            </div>
                            <!--step-tit-->
                            <div class="step-cont">
    
                                <div class="shopping-list clearfix">
                                    <div class="goods-list">
                                        <h4>商家：线上观前店 </h4>
    
                                        <div class="goods-items">
                                            <input type="hidden" value="2" name="thirdIds" id="thirdId_2" />
                                            <!--是套装-->
    
                                            <input type="hidden" class="shoppingCartId2" name="shoppingCartId" value="519" />
                                            <input type="hidden" name="box" class="box" value="519" productNum="2" />
                                            <div class="goods-suit goods-last clearfix">
    
                                                <div class="goods-item clearfix">
                                                    <div class="p-img">
                                                        <a target="_blank" href="/item/2.html"><img src="https://img-test.hbunion.com/old/17503u072/main/Z_01.jpg" alt=""></a>
                                                    </div>
                                                    <div class="goods-msg">
                                                        <div class="p-name">
                                                            <a href="/item/2.html" target="_blank">
                                                                                    迪柯尼单西
                                                                                    </a>
                                                        </div>
                                                        <span class="specName">灰色,175码</span>
                                                        <div class="p-price">
    
                                                            <div style="color: #e22731" class="price_num price_2">
                                                                ¥ 1.00
                                                            </div>
    
    
    
                                                            <div class="g_count">
                                                                <div class="count">
                                                                    x2
                                                                </div>
                                                                <div class="red">
                                                                </div>
                                                            </div>
                                                            <span class="ml20 p-inventory stock_2" skuid="335154" id="product3">                                                        数量
                                                        </span>
                                                        </div>
                                                    </div>
                                                </div>
    
    
                                            </div>
                                            <!--good-suit-->
    
    
    
                                            <!--是套装-->
    
                                            <input type="hidden" class="shoppingCartId2" name="shoppingCartId" value="626" />
                                            <input type="hidden" name="box" class="box" value="626" productNum="1" />
                                            <div class="goods-suit goods-last clearfix">
    
                                                <div class="goods-item clearfix">
                                                    <div class="p-img">
                                                        <a target="_blank" href="/item/4294.html"><img src="https://img-test.hbunion.com/old/201803/1522135696138.jpg?x-oss-process=image/resize,w_160" alt=""></a>
                                                    </div>
                                                    <div class="goods-msg">
                                                        <div class="p-name">
                                                            <a href="/item/4294.html" target="_blank">
                                                                                    万国手表
                                                                                    </a>
                                                        </div>
                                                        <span class="specName">全自动机械</span>
                                                        <div class="p-price">
    
                                                            <div style="color: #e22731" class="price_num price_4294">
                                                                ¥ 1.00
                                                            </div>
    
    
    
                                                            <div class="g_count">
                                                                <div class="count">
                                                                    x1
                                                                </div>
                                                                <div class="red">
                                                                </div>
                                                            </div>
                                                            <span class="ml20 p-inventory stock_4294" skuid="335154" id="product1">                                                        数量
                                                        </span>
                                                        </div>
                                                    </div>
                                                </div>
    
    
                                            </div>
                                            <!--good-suit-->
    
    
    
                                            <input id="third_2" value="3" type="hidden" />
                                            <div class="order-remarks hide" id="orderRemarkItem_2" style="display: block;">
                                                <div id="remarkId">
                                                    <div class="form remark-cont">
                                                        <textarea style="width: 1146px;height: 78px;" id="message_left_2" name="customerRemarks" size="15" class="itxt itxt01 customerRemark" maxlength="45" thirdName="线上观前店" placeholder="添加订单备注(限45个字)..."></textarea>
                                                        <span class="ftx-03">&nbsp;&nbsp;提示：请勿填写有关支付、收货、发票方面的信息</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--goods-itmes-->
                                    </div>
                                    <!--goods-list-->
    
                                </div>
                            </div>
                            <div class="step-tit clearfix">
                                <h3>支付方式</h3>
                            </div>
                            <!--step-tit-->
                            <div class="step-cont">
                                <div class="mode-tab-nav clearfix">
                                    <input type="hidden" name="ch_pay" class="ch_pay" />
                                    <ul class="clearfix">
                                        <li class="curr" id="onlinePay">
                                            <div class="payment-item thirditem item-selected payset_radio_1" data-id="1">
                                                <b></b>
                                                <span class="qmark-icon qmark-tip" data-tips="商家支付方式"></span>
                                                <span>在线支付</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
    
    
                            <div class="step-tit clearfix">
                                <h3>配送方式</h3>
                            </div>
                            <div class="step-cont">
    
                                <div class="mode-tab-nav clearfix">
                                    <ul class="clearfix">
                                        <li class="mode-tab-item  curr fretype" id="jd_shipment_item">
                                            <span id="jdShip-span-tip" class="m-txt"><i class="qmark-icon qmark-tip" data-tips="商家配送方式"></i>快递运输</span><b></b>
                                        </li>
    
                                        <!-- 只有自营可以上门自提 -->
                                        <li class="mode-tab-item item-selected fretype" id="ziti">
                                            <b></b>
                                            <span id="jdShip-span-tip" class="m-txt">
                                                              <i class="qmark-icon qmark-tip ziti" data-tips="上门自提只支持商城自营商品在线付款"></i>上门自提</span>
                                        </li>
                                    </ul>
                                    <div class="mode-tab-con layout" id="selfpick_shipment" style="display:none">
                                        <ul class="mode-list">
                                            <li class="clearfix">
                                                <div class="fore1"><span class="ftx-03">自提地点：</span></div>
                                                <select id="zitiSelect" name="deliveryPointId"  class="height_select"></select>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
    
    
    
                            </div>
                            <!--step-cont-->
                            <div class="step-tit clearfix">
                                <h3>发票信息</h3>
                            </div>
                            <div class="step-content">
                                <div id="part-inv" class="invoice-cont">
                                    <span class="mr10 ch_invoiceType"> 不需要发票 &nbsp; </span>
                                    <input type="hidden" name="ch_voinceType" class="ch_invoceTypeValue" value="0">
                                    <span class="mr10 tr_invoiceTitleView" style="display:none"> 个人&nbsp; </span>
                                    <input type="hidden" name="chInvoiceTitle" class="ch_invoceTitleValue" value="">
                                    <span class="mr10 invoiceContentMing" style="display:none"> 明细&nbsp; </span>
                                    <input type="hidden" name="chInvoiceContent" class="ch_invoiceContentValue" value="">
                                    <a href="javascript:void(0)" class="ftx-05 invoice-edit" onclick="dia(4)">修改</a>
                                </div>
                            </div>
    
                            <div class="coupon ml20" style="">
                                <a class="part_open" href="javascript:;">使用余额券抵消部分金额</a>
                                <div class="coupon_cont" style="display:none;">
                                    <div class="coupon_choice">
                                        <input type="hidden" value="" id="codeIds" name="codeIds" />
                                        <input type="hidden" value="" id="cpLength">
                                        <p class="third-name">线上观前店&nbsp;&nbsp;
                                            <span>(您没有可使用的余额券，或者该订单的商品不能使用余额劵！)</span>
                                        </p>
    
                                    </div>
                                    <div class="coupon_total">
                                    </div>
                                </div>
                            </div>
                            <!-- /remark -->
                            <div class="order-summary clearfix" style="padding-right:10px;">
                                <div class="statistic fr">
    
                                    <div class="list">
    
                                        <span><font color="red">3 </font>件商品，总商品金额：</span>
                                        <em class="price" id="sumOldPrice">¥3.00</em>
                                    </div>
                                    <div class="list">
                                        <span>运费：</span>
                                        <em class="price" id="ep"> ¥0.00</em>
                                        <input type="hidden" name="expressPrice" id="expressPrice" value=" 0.00" />
                                        <input type="hidden" name="freight" id="freight" value=" 0.00" />
                                    </div>
                                    <div class="list">
                                        <span>余额券：</span>
                                        <em class="price" id="yh"> ¥0.00</em>
                                        <input type="hidden" id="youhui">
                                    </div>
                                    <div class="list">
                                        <span>促销活动折扣价：</span>
                                        <em class="price" id="promotionDiscount">-¥0.00</em>
                                    </div>
                                    <div class="list">
                                        <span>会员折扣：</span>
                                        <em class="price" id="discount">-¥0.00</em>
                                    </div>
    
                                    <div class="list">
                                        <span id="lastpay_span">应付总额：</span>
                                        <em class="price" id="lastpay"> ¥3.00</em>
                                    </div>
                                </div>
                            </div>
                            <!--order-summary-->
    
                            <div class="trade-foot">
                                <div id="checkout-floatbar" class="group">
                                    <div class="ui-ceilinglamp checkout-buttons ui-ceilinglamp-current">
                                        <div class="sticky-placeholder hide" style="display: none;">
                                        </div>
                                        <div class="sticky-wrap">
                                            <div class="inner">
                                                <button type="button" class="checkout-submit btn-1" onclick="submitForm(this);">
                                                提交<b></b>
                                            </button>
                                                <input type="hidden" id="sumPrice" value="3.00" />
                                                <!--记录未使用优惠券和积分兑换之前的总价格-->
    
                                                <input type="hidden" id="payPrice" />
                                                <span class="total">应付总额：<strong id="lastpays">¥3.00</strong>
    	            <label class="noShowMoney hide" id="giftBuyHidePriceDiv">
                        <input type="checkbox" id="giftBuyHidePrice" checked="">隐藏礼品价格
                    </label>
    	          </span>
                                                <span id="checkCodeDiv"></span>
    
                                                <div class="checkout-submit-tip" id="changeAreaAndPrice" style="display: none;">
                                                    由于价格可能发生变化，请核对后再提交订单
                                                </div>
                                                <div style="display:none" id="factoryShipCodShowDivBottom" class="dispatching">
                                                    部分商品货到付款方式：先由京东配送“提货单”并收款，然后厂商发货。
                                                </div>
                                            </div>
                                            <span id="submit_message" style="display:none" class="submit-error"></span>
    
                                            <div class="submit-check-info" id="submit_check_info_message" style="display:none"></div>
                                            <div class="consignee-foot">
                                            </div>
                                        </div>
    
                                    </div>
    
                                </div>
    
    
                                <!--/ /widget/checkout-floatbar/checkout-floatbar.tpl -->
                            </div>
                        </div>
                        <!--jd_order_det-->
                    </form>
                </div>
                <!--w990-->
    
            </div>
            <!--container-->
        </div>
    </div>
</template>

<script>

    export default {
        name:"checkOrder"
    }
</script>

<style>
    
</style>
