<template>
    <div class="con">
        <div class="container pb50">
            <div class="n_step">
                <p class="title">找回密码</p>
                <div class="n_step_con">
                    <div class="n_step2"></div>
                    <ul class="ml10 clearfix">
                        <li class="p100">填写手机号</li>
                        <li class="p130 cur">设置密码</li>
                        <li>完成</li>
                    </ul>
                </div>
                <div class="n_password">
                    <div class="n_item clearfix mb20">
                        <span class="label fl">手机号：</span>
                        <span class="label fl">{{this.$route.params.phone}}</span>
                    </div>
                    <div class="n_item clearfix mb20">
                        <span class="label fl">验证码：</span>
                        <div class="fl">
                            <input tabindex="2" type="text" id="code" placeholder="请输入验证码" class="short_text mr20" maxlength="4" />
                            <!--手机验证码-->
                            <span class="tCode">
                                    <button id="sendBtn" type="button" class="active_btn btn" @click="getMsgCode">
                                        <span id="auto_code">获取验证码</span>
                            </button>
                            </span>
                            <p class="tips mobile_info" style="display: none">请输入手机验证码</p>
                        </div>
                    </div>
    
                    <div class="n_item clearfix mb20">
                        <span class="label fl">新密码：</span>
                        <div class="fl">
                            <input tabindex="1" type="text" placeholder="输入新密码" class="long_text" id="password" v-model="userPhoneNum" />
                            <div class="ne_tips uesrname_tips hide">您输入的密码格式有误</div>
                        </div>
                    </div>
    
    
                    <div class="n_item clearfix mb20">
                        <span class="label fl">&nbsp;</span>
                        <div class="fl">
                            <button class="n_nextstep" @click="rebuildPassword;">保存</button>
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
    
    
    export default {
        name: 'FindPass',
        data() {
            return {
    
            }
        },
    
        components: {
            pageFooters,
        },
    
        created() {
    
        },
    
        mounted() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        methods: {
            // 找回密码第一步
            findCode() {
                if ($("#username").val().trim().length == 0) {
                    $("#username").parent().find(".uesrname_tips").show().html("请输入手机号").css("color", "#dd6330");
                    return;
                }
    
            },
    
            getMsgCode() {
    
            }
        }
    
    
    }
</script>


<style>
    @import url("../../common/css/jd.base.min.css");
    @import url("../../common/css/jd.style.css");
    @import url("../../common/css/pages.css");
    @import url("../../common/css/register.css");
    .btn {
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        padding: 0 30px;
        vertical-align: middle;
    }
    
    .tCode {
        height: 40px;
        line-height: 40px;
    }
    
    .active_btn {
        outline: none;
    }
</style>
