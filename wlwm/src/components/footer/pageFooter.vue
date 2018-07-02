<template>
    <div class="bottomF">
        <div class="wp">
            <div class="row">
                <div class="col-6"><i class="icons icon_bt_01"></i>
                    正品保障
                    <div>海外直采货源透明</div>
                </div>
                <div class="col-6"><i class="icons icon_bt_02"></i>
                    闪电发货
                    <div>电子清关保税仓直发</div>
                </div>
                <div class="col-6"><i class="icons icon_bt_03"></i>
                    政府保障
                    <div>国检监督海关备案</div>
                </div>
                <div class="col-6"><i class="icons icon_bt_04"></i>
                    无忧售后
                    <div>国内售后七天包退</div>
                </div>
            </div>

            <div class="service  clearfix">
                <dl class="svc_box fl">
                    <dt>购物指南</dt>
                    <dd>
                        <div><router-link to="{path:'/help'}" target="_blank">用户注册</router-link></div>
                        <div><router-link to="{path:'/help'}" target="_blank">账户安全</router-link></div>
                        <div><router-link to="{path:'/help'}" target="_blank">联系客服</router-link></div>
                        <div><router-link to="{path:'/help'}" target="_blank">购物流程</router-link></div>
                    </dd>
                </dl>
                <dl class="svc_box fl">
                    <dt>帮助中心</dt>
                    <dd>
                        <div><router-link :to="{path:'/help'}" target="_blank">函百平台承诺</router-link></div>
                    </dd>
                </dl>

                <dl class="svc_box fl">
                    <dt>配送方式</dt>
                    <dd>
                        <!-- <router-link :to="{path:''}" ></router-link> -->
                        <div><router-link to="{path:'/help'}" target="_blank">函百快递</router-link></div>
                        <div><router-link to="{path:'/help'}" target="_blank">上门自提</router-link></div>
                        <div><router-link to="{path:'/help'}" target="_blank">物流费用收费标准</router-link></div>
                        <div><router-link to="{path:'/help'}" target="_blank">配送服务说明</router-link></div>
                    </dd>
                </dl>

                <dl class="svc_box fl">
                    <dt>支付方式</dt>
                    <dd>
                        <div><router-link to="{path:'/help'}" target="_blank">在线支付</router-link></div>
                    </dd>
                </dl>

                <dl class="svc_box fl">
                    <dt>售后服务</dt>
                    <dd>
                        <div><router-link to="{path:'/help'}" target="_blank">售后政策</router-link></div>
                        <div><router-link to="{path:'/help'}" target="_blank">价格保护</router-link></div>
                        <div><router-link to="{path:'/help'}" target="_blank">退单说明</router-link></div>
                        <div><router-link to="{path:'/help'}" target="_blank">取消订单</router-link></div>
                    </dd>
                </dl>

                <div class="qrCode">
                    <div class="codeImg"></div>
                    万联万民微信公众号
                </div>
            </div><!--/service-->
        </div><!--/wp-->

        <!--页脚-->
        <div class="container">
          <p class="login_footer"> Copyright © 2018-2038 万联万名交易平台 苏ICP备xxxxxx</p>
        </div>
    </div>
</template>

<style>
@import url(../../common/css/footer);
</style>

<script>
export default {
    name:'PageFooter'
};
</script>
