<template>
    <div class="container">
        <!-- 面包屑 -->
        <div class="location">
            <a href="javascript:;"><strong>帮助中心</strong></a>
            <span>&gt;</span><a href="javascript:;">购物指南</a>
            <span>&gt;</span><span>{{this.helpTitle}}</span>
        </div>
    
        <div class="help_cont fr">
            <div class="title">
                <h2>{{this.helpTitle}}</h2>
            </div>
    
            <wuliu-help  :wuliuType ="this.wuliuIndex"> </wuliu-help>
    
        </div>
        <!-- /help_cont -->
        <div class="help_menu fl">
            <div class="help_menu_item">
                <a class="top_link" href="javascript:void(0)">购物指南</a>
                <ul>
                    <li :class="{cur:this.leftItemIndex == 1}"><a href="javascript:void(0)" @click="chooseIndex(1)">用户注册</a></li>
                    <li :class="{cur:this.leftItemIndex == 2}"><a href="javascript:void(0)" @click="chooseIndex(2)">账户安全</a></li>
                    <li :class="{cur:this.leftItemIndex == 3}"><a href="javascript:void(0)" @click="chooseIndex(3)">联系客服</a></li>
                    <li :class="{cur:this.leftItemIndex == 4}"><a href="javascript:void(0)" @click="chooseIndex(4)">购物流程</a></li>
                </ul>
            </div>
            <div class="help_menu_item">
                <a class="top_link" href="javascript:void(0)">帮助中心</a>
                <ul>
                    <li :class="{cur:this.leftItemIndex == 6}"><a href="javascript:void(0)" @click="chooseIndex(6)">万联平台承诺</a></li>
                </ul>
            </div>
            <div class="help_menu_item">
                <a class="top_link" href="javascript:void(0)">配送方式</a>
                <ul>
                    <li :class="{cur:this.leftItemIndex == 8}"><a href="javascript:void(0)" @click="chooseIndex(8)">万联快递</a></li>
                    <li :class="{cur:this.leftItemIndex == 10}"><a href="javascript:void(0)" @click="chooseIndex(10)">物流费用收费标准</a></li>
                    <li :class="{cur:this.leftItemIndex == 11}"><a href="javascript:void(0)" @click="chooseIndex(11)">配送服务说明</a></li>
                </ul>
            </div>
            <div class="help_menu_item">
                <a class="top_link" href="javascript:void(0)" >支付方式</a>
                <ul>
                    <li :class="{cur:this.leftItemIndex == 13}"><a href="javascript:void(0)" @click="chooseIndex(13)">在线支付</a></li>
                </ul>
            </div>
            <div class="help_menu_item">
                <a class="top_link" href="javascript:void(0)">售后服务</a>
                <ul>
                    <li :class="{cur:this.leftItemIndex == 15}"><a href="javascript:void(0)" @click="chooseIndex(15)">售后政策</a></li>
                    <li :class="{cur:this.leftItemIndex == 16}"><a href="javascript:void(0)" @click="chooseIndex(16)">价格保护</a></li>
                    <li :class="{cur:this.leftItemIndex == 17}"><a href="javascript:void(0)" @click="chooseIndex(17)">退单说明</a></li>
                    <li :class="{cur:this.leftItemIndex == 18}"><a href="javascript:void(0)" @click="chooseIndex(18)">取消订单</a></li>
                </ul>
            </div>
            <div class="help_menu_item">
                <a class="top_link" href="javascript:void(0)">联系我们</a>
                <ul>
                    <li :class="{cur:this.leftItemIndex == 20}"><a href="javascript:void(0)" @click="chooseIndex(20)">营销中心</a></li>
                    <li :class="{cur:this.leftItemIndex == 21}"><a href="javascript:void(0)" @click="chooseIndex(21)">关于我们</a></li>
                    <li :class="{cur:this.leftItemIndex == 22}"><a href="javascript:void(0)" @click="chooseIndex(22)">广告服务</a></li>
                </ul>
            </div>
    
        </div>
        <!-- /help_menu -->
        <div class="cb"></div>
    
        <!-- footer -->
        <page-footer></page-footer>
    </div>
</template>

<style>
    @import "../../common/css/help.css";
</style>

<script>
    import PageFooter from '@/components/footer/pageFooter'
    import WuliuHelp from '@/components/help/wuliuHelp'

    import http from '../../Api/baseHttp'
    import URLString from '../../Api/api'

    export default {
        name: 'help',
        data() {
            return {
                helpTitle: "",
                leftItemIndex: 1,
                wuliuIndex:1,
            };
        },
        created() {
            this.helpTitle = this.$route.params.title; //标题赋值  
        },
        components: {
            PageFooter,
            WuliuHelp,//body模板
    
        },
        methods: {
            // 点击替换body中的内容
            chooseIndex(val) {
                this.leftItemIndex = val;
                this.wuliuIndex = val;
                
                if (val == 1) {
                    this.helpTitle = "用户注册";
                } else if (val == 2) {
                    this.helpTitle = "账号安全";
                } else if (val == 3) {
                    this.helpTitle = "联系客服";
                }else if (val == 4) {
                    this.helpTitle = "购买流程";
                }else if (val == 8) {
                    this.helpTitle = "万联快递";
                }else if (val == 10) {
                    this.helpTitle = "物流收费标准";
                }else if(val == 11){
                    this.helpTitle = "配送服务说明";
                }else if(val == 13){
                    this.helpTitle = "在线支付说明";
                }else if(val == 15){
                    this.helpTitle = "售后政策";
                }else if(val == 16){
                    this.helpTitle = "价格保护";
                }else if(val == 17){
                    this.helpTitle = "退单说明";
                }else if(val == 18){
                    this.helpTitle = "取消订单";
                }else if(val == 20){
                    this.helpTitle = "营销中心";
                }else if(val == 21){
                    this.helpTitle = "关于我们";
                }else {
                    this.helpTitle = "广告服务";
                }

            }
        }
    
    }
</script>
