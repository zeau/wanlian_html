<template>
    <div class="con">
        <div class="container pb50">
            <div class="n_step">
                <p class="title">找回密码</p>
                <div class="n_step_con">
                    <div class="n_step2" ref="step"></div>
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
                            <input tabindex="2" type="text" id="code" placeholder="请输入验证码" class="short_text mr20" maxlength="6" v-model="userInCode" />
                            <!--手机验证码-->
                            <span class="tCode">
                                                <button id="sendBtn" type="button" class="active_btn btn" @click="getMsgCode">
                                                <span id="auto_code">重新获取</span>
                            </button>
                            </span>
                            <p class="tips mobile_info" style="display: none">请输入手机验证码</p>
                        </div>
                    </div>
    
                    <div class="n_item clearfix mb20">
                        <span class="label fl">新密码：</span>
                        <div class="fl">
                            <input tabindex="1" type="password" placeholder="输入新密码" class="long_text" id="npwd" v-model="userNewPass" />
                            <div class="npwd_tip uesrname_tips hide">您输入的密码格式有误</div>
                        </div>
                    </div>
    
    
                    <div class="n_item clearfix mb20">
                        <span class="label fl">&nbsp;</span>
                        <div class="fl">
                            <button class="n_nextstep" @click="rebuildPassword">保存</button>
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
                phoneNum: "",
                userNewPass: "",
                userInCode: "",
                vertifyCode: ""
            }
        },
    
        components: {
            pageFooters,
        },
    
        created() {
    
        },
    
        mounted() {
            this.phoneNum = this.$route.params.phone;
            this.getMsgCode(); //初始化调用获取验证码
        },
        methods: {
            // 找回密码第一步
            findCode() {
                if ($("#username").val().trim().length == 0) {
                    $("#username").parent().find(".uesrname_tips").show().html("请输入手机号").css("color", "#dd6330");
                    return;
                }
    
            },
            checkNewPwd() {
                var x = $("#npwd").val();
                if (x.length < 6 || x.length > 20) {
                    $(".npwd_tip").show().html("密码格式不正确,请输入6-20位长度的密码!");
                    return false;
                }
                if (this.checkPass(x) < 2) {
                    $(".npwd_tip").show().html("密码格式不正确,密码为字母和数字!");
                    return false;
                }
                $(".npwd_tip").hide().html("请输入登录密码").css("color", "gray");
                return true;
            },
             checkPass(obj) {
                var is = 0;
                if (obj.match(/([0-9])+/)) {
                    is++;
                }
                if (obj.match(/([a-z])+/)) {
                    is++;
                }
                if (obj.match(/([A-Z])+/)) {
                    is++;
                }
                if (obj.match(/[^a-zA-Z0-9]+/)) {
                    is++;
                }
                return is;
            },
    
            getMsgCode() {
                let reParam = {
                    "mobile": this.phoneNum
                };
                var _this = this;
                http.post(URLString.registerCode, reParam, function resCallBack(data) {
                    //拿到的手机验证码传递给下一个页面
                    if (data.statusCode == 200) {
                        _this.vertifyCode = data.data;
                        _this.$toast.center("验证码已发送，注意查收");
                    } else {
                        _this.$toast.center(data.message);
                    }
                });
            },
    
            //提交给后台信息
            rebuildPassword() {
                console.log("rebulid");
                if (this.userInCode != this.vertifyCode) {
                    this.$toast.center("验证码错误");
                    return;
                }
                if (!this.checkNewPwd()) {
                    return;
                }
    
                let param = {
                    "mobile": this.phoneNum,
                    "smsCode": this.userInCode,
                    "newPassword": this.userNewPass,
                    "repPassword": this.userNewPass,
                };
                var that = this;
                console.log(param);
                http.post(URLString.updatePassword, param, function successCallBack(data) {
                    if (data.statusCode == 200) {
                        that.$toast.center("修改成功,3秒后跳转首页");
                        setTimeout(() => {
                            that.$route.push({
                                name: "PageHome",
                                params: {
                                    login: true
                                } //通知首页登录成功
                            })
                        }, 300);
                    } else {
                        that.$toast.center("修改失败");
                    }
                });
            }
        }
    
    
    }
</script>


<style>
    @import url("../../assets/css/jd.base.min.css");
    @import url("../../assets/css/jd.style.css");
    @import url("../../assets/css/pages.css");
    @import url("../../assets/css/register.css");
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
