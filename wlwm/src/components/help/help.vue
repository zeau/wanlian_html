<template>
<div class="container">
        <!-- 面包屑 -->
        <div class="location">
				<a href="javascript:;"><strong>帮助中心</strong></a>
				<span>&gt;</span><a href="javascript:;">购物指南</a>
				<span>&gt;</span><span>用户注册</span>
        </div>

        <div class="help_cont fr">
        	<div class="title">
            	<h2>用户注册</h2>
            </div>
            <div class="body">
            <p>
                <b>
                    <span style="font-size: 14pt; font-family: 宋体;">新用户注册</span>
                </b>
                <br>
            </p>
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; font-family: tahoma, arial, 宋体;">
                <span style="color: rgb(102, 102, 102);">进入万联官网后，点击右上方的“免费注册”，将会出现新的页面</span>
                <span style="color: rgb(51, 51, 51); font-family: 微软雅黑, 宋体; line-height: 17.1429px;">：</span>
                <a href="http://218.4.117.13:28080/register.html" target="_blank"></a><span style="color: rgb(102, 102, 102);">，在相应提示处输入：</span>
                </p>
                <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;">（1）<span style="background-color: rgb(229, 51, 51);"><span style="color: rgb(229, 102, 0); background-color: rgb(255, 255, 255);">您的用户名</span></span>（手机号码）</p><p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;">（2）<span style="color: rgb(229, 102, 0);">验证码</span></p><p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;">（3）输入获取的"<span style="color: rgb(229, 102, 0);">短信校验码</span>”</p><p style="margin-bottom: 20px; padding: 0px; line-height: 20px; font-family: tahoma, arial, 宋体;"><span style="color: rgb(102, 102, 102);">（4）设置"</span><span style="color: rgb(229, 102, 0);">密码</span></p><p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;">注册成功后会弹出提示信息，即可安全放心的购物</p><p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;"><img style="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201804/1523184229111.jpg"></p><p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;"></p><p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;"><br></p><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe>
            </div>
        </div><!-- /help_cont -->
        <div class="help_menu fl">
        	<div class="help_menu_item">
            	<a class="top_link" href="javascript:void(0)">购物指南</a>
                <ul>
                            <li class="cur"><a href="118">用户注册</a></li>
                            <li ><a href="116">账户安全</a></li>
                            <li ><a href="117">联系客服</a></li>
                            <li ><a href="115">购物流程</a></li>
                </ul>
            </div>
        	<div class="help_menu_item">
            	<a class="top_link" href="javascript:void(0)">帮助中心</a>
                <ul>
                    <li ><a href="146">万联平台承诺</a></li>
                </ul>
            </div>
        	<div class="help_menu_item">
            	<a class="top_link" href="javascript:void(0)">配送方式</a>
                <ul>
                            <li ><a href="119">万联快递</a></li>
                            <li ><a href="121">上门自提</a></li>
                            <li ><a href="120">物流费用收费标准</a></li>
                            <li ><a href="122">配送服务说明</a></li>
                </ul>
            </div>
        	<div class="help_menu_item">
            	<a class="top_link" href="javascript:void(0)">支付方式</a>
                <ul>
                            <li ><a href="125">在线支付</a></li>
                </ul>
            </div>
        	<div class="help_menu_item">
            	<a class="top_link" href="javascript:void(0)">售后服务</a>
                <ul>
                            <li ><a href="123">售后政策</a></li>
                            <li ><a href="128">价格保护</a></li>
                            <li ><a href="129">退单说明</a></li>
                            <li ><a href="130">取消订单</a></li>
                </ul>
            </div>
        	<div class="help_menu_item">
            	<a class="top_link" href="javascript:void(0)">联系我们</a>
                <ul>
                            <li ><a href="132">营销中心</a></li>
                            <li ><a href="133">关于我们</a></li>
                            <li ><a href="134">广告服务</a></li>
                </ul>
            </div>

        </div><!-- /help_menu -->
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
import http from '../../Api/baseHttp'
import URLString from '../../Api/api'
export default {
    name:'help',
    data (){
        return {};
    },
    components :{
        PageFooter
    }

}
</script>
