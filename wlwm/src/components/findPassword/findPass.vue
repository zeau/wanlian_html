<template>
    <div class="con">
        <div class="container pb50">
            <div class="n_step">
                <p class="title">找回密码</p>
                <div class="n_step_con">
                    <div class="n_step1"></div>
                    <ul class="ml10 clearfix">
                        <li class="p100 cur">填写手机号</li>
                        <li class="p130">设置密码</li>
                        <li>完成</li>
                    </ul>
                </div>
                <div class="n_password">
                    <div class="n_item clearfix mb20">
                        <span class="label fl">手机号：</span>
                        <div class="fl">
                            <input tabindex="1" type="text" placeholder="已验证手机号" class="long_text" id="username" maxlength="11" v-model="userPhoneNum" />
                            <div class="ne_tips uesrname_tips hide">您输入的手机号有误</div>
                        </div>
                    </div>
                    <div class="n_item clearfix mb20">
                        <span class="label fl">验证码：</span>
                        <div class="fl">
                            <input tabindex="2" type="text" id="code" placeholder="请输入验证码" class="short_text mr20" maxlength="4" v-model="userInputCode"/>
                            <!--图片验证码-->
                            <div class="pic_code">
                                <identify :identifyCode="identifyCode" style="margin-top:10px;"></identify>
                                <span class="code" @click="refreshCode"></span>
                            </div>
                            <p class="tips mobile_info" style="display: none">请输入验证码</p>
                        </div>
                    </div>    
                    <div class="n_item clearfix mb20">
                        <span class="label fl">&nbsp;</span>
                        <div class="fl">
                            <button class="n_nextstep" @click="gofindcode">下一步</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--n_step-->
        </div>
        <div class="bh-mask"></div>
        <div id="ctDia" class="bh-dialog dia0">
            <div class="dia-tit">
                <h4>加入收藏</h4>
                <a class="dia-close" href="javascript:;" onclick="scls(this)"></a>
            </div>
            <div class="dia-cont">
                <p style="text-align: center">请使用菜单栏或Ctrl+D进行添加！</p>
            </div>
            <div class="dia-btn"><a href="javascript:;" onclick="scls(this)">确定</a></div>
        </div>
    
        <page-footers></page-footers>
        <!-- 页脚 -->
    
    </div>
</template>

<script>
    import http from '../../Api/baseHttp';
    import URLString from '../../Api/api';
    import pageFooters from '@/components/footer/pageFooter';
    import SIdentify from '@/components/pictureValidation/identify';
    
    
    export default {
        name: 'FindPass',
        data() {
            return {
                identifyCodes: "1234567890",
                identifyCode: "",
                userPhoneNum:"",
                userInputCode:""
            }
        },
    
        components: {
            pageFooters,
            identify: SIdentify,
        },
    
        created() {
    
        },
    
        mounted() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        methods: {
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            refreshCode: function() {
                this.identifyCode = "";
                this.makeCode(this.identifyCodes, 4);
            },
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                        this.randomNum(0, this.identifyCodes.length)
                    ];
                }
                console.log(this.identifyCode);
            },

            // 找回密码第一步
            gofindcode() {
                if ($("#username").val().trim().length == 0) {
                    $("#username").parent().find(".uesrname_tips").show().html("请输入手机号").css("color", "#dd6330");
                    return;
                }
                if(this.userInputCode == this.identifyCode){
                    this.$router.push ({
                        name:"FindPassSecond",
                        params:{
                            phone:this.userPhoneNum
                    }
                });
            }else{
                this.$toast.center("验证码不正确");
            }
             
            }
        }
    }
</script>


<style>
    @import url("../../common/css/jd.base.min.css");
    @import url("../../common/css/jd.style.css");
    @import url("../../common/css/pages.css");
    @import url(../../common/css/register.css);
</style>
