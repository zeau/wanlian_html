<template>
    <div id="registerSecond">
      <!--头部-->
      <div class="container">
        <div class="head2">
          <a href=""><img style="height:45px;width:auto;"></a><h1>欢迎注册</h1>
          <p class="login_tip">
            我已经注册，马上
            <a href="#">登录</a>
          </p>
        </div>
      </div>
      <!--主体-->
      <div class="register_con">
        <div class="register_con_steps">
          <div class="register_con_step ">
            <i>1</i>
            <span>设置登录名</span>
          </div>
          <div class="register_con_step active">
            <i>2</i>
            <span>设置用户信息</span>
          </div>
          <div class="register_con_step">
            <i>3</i>
            <span>注册成功</span>
          </div>
        </div>
        <div class="register_con_form">
          <input id="registerId" name="" type="hidden">
          <div class="reg_form_item">
            <label class="for_text">手机号码</label>
            <div class="item">
              <b>{{this.$route.params.phoneNum}}</b>
            </div>
          </div>
          <div class="reg_form_item">
            <label class="for_text">验证码</label>
            <div class="item">
              <input id="checkCode"  class="text medium" placeholder="请输入图片验证码" name="checkCode" maxlength="4" type="text" v-model="userInputCode">
              <!--图片验证码-->
                <div class="pic_code">
               <identify :identifyCode="identifyCode" style="margin-top:10px;"></identify>
                <span class="code" @click="refreshCode"></span>
                </div>
                <p class="tips mobile_info" style="display: none">请输入验证码</p>
            </div>
          </div>
          <div class="reg_form_item">
            <label class="for_text">短信验证码</label>
            <div class="item">
              <form>
                <input id="message" v-model="userInputVertifyCode" class="text medium" placeholder="请输入短信证码" name="checkCode" maxlength="6" type="text">
              </form>
              <div class="tCode">
                <button id="sendBtn" type="button" class="active_btn btn" @click="getMsgCode">
                  <span id="auto_code">获取验证码</span>
                </button>
              </div>
              <p class="tips mobile_info" style="display: none">请输入短信验证码</p>
            </div>
          </div>
          <div class="reg_form_item">
            <label class="for_text"></label>
            <div class="item">
              <button class="sub_btn free" @click="turnNext">确定</button>
            </div>
          </div>
        </div>
      </div>
      <!--页脚-->
      <div class="container">
        <p class="login_footer"> Copyright © 2018-2038  万联万名开发平台   苏ICP备xxxxxx</p>
      </div>
    </div>
</template>

<style>
  @import url(../../common/css/register);

</style>

<script>
import SIdentify from '@/components/pictureValidation/identify'
import http from '../../Api/baseHttp'
import URLString from '../../Api/api'
    export default {
        data() {
            return {
        identifyCodes: "1234567890",
        identifyCode: "",//图片验证码数据
              PhoneNum:"",
              userInputCode:"",//用户输入的图片验证码
              vertifyCode:123,//验证码
              userInputVertifyCode:""//用户输入的验证码
            }
        },
       components: {
            identify:SIdentify,
          },
          mounted() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
            this.phoneNum = this.$route.params.phoneNum;
            this.vertifyCode =123;
          },
          methods: {
            randomNum(min, max) {
              return Math.floor(Math.random() * (max - min) + min);
            },
            refreshCode: function () {
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
            //获取手机验证码
            getMsgCode: function () {
              if (this.userInputCode === this.identifyCode) {
                //输入的图片验证码正确  -》获取验证

                let reParam = {"mobile": this.phoneNum};
                var _this = this;
                http.post(URLString.registerCode, reParam, function resCallBack(data) {
                  //拿到的手机验证码传递给下一个页面
                  if (data.statusCode == 200) {
                    _this.vertifyCode = data.data;
                    console.log(data.data);
                  } else {
                    _this.$toast.center(data.message);
                  }
                });
              } else {
                this.$toast.center('您输入的图片验证码不正确');
              }
            },
            //跳转到下一个页面的function
            turnNext: function () {
              //1 校验 网络获取的验证码是否正确
              // 2 跳转下一个页面传值
              if (this.userInputVertifyCode == this.vertifyCode) {
                this.$router.push({
                  name: "registerThird",
                  params: {phoneNum: this.$route.params.phoneNum, vertifyCode: this.vertifyCode}
                });
              } else {
                this.$toast.center('您输入的图片验证码不正确');
              }
            }
          }
    }
</script>
