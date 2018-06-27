<template>
    <div class="n_head">
        <div class="container clearfix pr">
            <div class="n_logo fl clearfix">
                <div class="fl ml20">
                    <a href="customer/index.html" class="fore1">我的函百平台</a>
                </div>
            </div>
            <div class="n_menu fl">
                <ul class="clearfix">
                    <li><a href="index.html">万联商城首页</a></li>
                    <li class="n_hover">
                        <div class="pr">
                            <a href="findpwd.html#">账户中心</a>
                            <div class="n_menu_hide">
                                <a href="customer/myinfo.html">账户信息</a>
                                <a href="customer/securitycenter.html">账户安全</a>
                                <a href="customer/address.html">收货地址</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="customer/insideletter.html">消息中心</a></li>
                </ul>
            </div><!--n_menu-->

            <div class="cartfd-mem">
                <s class="cartBanner-mem"></s>
                <div class="cartit-mem">
                    <span><s></s><a href="myshoppingcart.html">我的购物车</a></span>
                    <strong class="cartNum-mem">0</strong>
                </div>
                <div class="miniCart-mem hide">
                    <div class="mCartBox-mem">
                        <div class="mcBoxTop-mem clearfix"></div>
                        <div class="mcBoxList-mem"></div>
                        <div class="emCartBox-mem hide" style="display: block;">
                            <span>购物车中还没有商品，再去逛逛吧！</span>
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
                            <span class="mcGo-mem"><a href="myshoppingcart.html">结算</a></span>
                        </span>
                        <h3>
                            <span class="mc_e1-mem">购物车</span>
                            <span class="mc_e2-mem">共</span>
                            <strong class="mcNumTotal-mem">0</strong>
                            <strong class="mcNumChecked-mem">0</strong>
                            <span class="mc_e2-mem">件</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>

<script>
export default {
    name:'PageHeader'
}
</script>
