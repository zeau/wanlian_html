<template>
  <div id="register">
    <!--头部-->
    <div class="container">
      <div class="head2">
        <a href=""><img style="height:45px;width:auto;"></a>
        <h1>欢迎注册</h1>
        <p class="login_tip">
          我已经注册，马上
          <a href="#">登录</a>
        </p>
      </div>
    </div>
    <!--主体-->
    <div class="register_con">
      <div class="register_con_steps">
        <div class="register_con_step active">
          <i>1</i>
          <span>设置登录名</span>
        </div>
        <div class="register_con_step">
          <i>2</i>
          <span>设置用户信息</span>
        </div>
        <div class="register_con_step">
          <i>3</i>
          <span>注册成功</span>
        </div>
      </div>
      <div class="register_con_form">
        <form id="" action="" method="">
          <input id="registerId" name="" type="hidden">
          <div class="reg_form_item">
            <label class="for_text">手机号码</label>
            <div class="item">
              <input id="mobileInput" class="text long" placeholder="请输入手机号码" name="mobile" maxlength="11" type="text">
              <i class="correct" style="display: none"></i>
              <p class="tips mobile_info" style="display: none">请输入您的手机号码</p>
        <div class="register_con_form">
          <form id="" action="" method="">
            <input id="registerId" name="" type="hidden">
            <div class="reg_form_item">
              <label class="for_text">手机号码</label>
              <div class="item">
                <input id="mobileInput" class="text long" placeholder="请输入手机号码" name="mobile" maxlength="11" type="text" v-model="userPhone">
                <i class="correct" style="display: none"></i>
                <p class="tips mobile_info" style="display: none">请输入您的手机号码</p>
              </div>
            </div>
            <div class="reg_form_item">
              <label class="for_text">验证码</label>
              <div class="item">
                <input id="checkCode" class="text medium" placeholder="请输入图片验证码" name="checkCode" maxlength="4" type="text">
                <!--图片验证码-->
                <div class="code"></div>
                <p class="tips mobile_info" style="display: none">请输入验证码</p>
              </div>
            </div>
            <div class="reg_form_item">
              <label class="for_text"></label>
              <div class="item">
                <div class="agreement_confirm">
                  <div class="icheckbox_square-green checked">
                    <input id="readme" class="i-checks" checked="" type="checkbox" style="position: absolute; opacity: 0">
                    <ins class="iCheck-helper"></ins>
                  </div>
                  我已阅读并同意
                  <a href="#">《商城用户注册协议》</a>
                </div>
                <p class="tips mobile_info" style="display: none">请接受服务条款</p>
              </div>
            </div>
          </div>
          <div class="reg_form_item">
            <label class="for_text">验证码</label>
            <div class="item">
              <input id="checkCode" class="text medium" placeholder="请输入图片验证码" name="checkCode" maxlength="4" type="text">
              <!--图片验证码-->
              <div class="pic_code">
              <identify :identifyCode="identifyCode" style="margin-top:10px;"></identify>
              <span class="code" @click="refreshCode"></span>
              </div>
              <p class="tips mobile_info" style="display: none">请输入验证码</p>
              <button class="sub_btn"  @click ="turnNext">同意协议并注册</button>
            </div>
          </div>
        <div class="reg_form_item">
        <label class="for_text">&nbsp;</label>
        <div class="item">
          <div class="agreement_confirm">
            <label>
              <input type="checkbox" class="i-checks" checked id="readme">
              我已阅读并同意<a href="javascript:void(0)" onclick="showpro();" id="protocol">《商城用户注册协议》</a>
            </label>
          </div>
            <p class="tips pro_info" style="display: none">请接受服务条款</p>
        </div>
      </div>
    </form>

        <div class="reg_form_item">
          <label class="for_text"></label>
          <div class="item">
            <button class="sub_btn" type="submit">同意协议并注册</button>
          </div>
        </div>
      </div>
    </div>

    <!--页脚-->
    <page-footer></page-footer>
  </div>


</template>

<style>
  @import url(../../common/css/register);
</style>

<script>
import SIdentify from '@/components/pictureValidation/identify'
import PageFooter from '@/components/footer/PageFooter'

  export default {
    data() {
      return {
        identifyCodes: "1234567890",
        identifyCode: ""
      }
    },
    components: {
      identify:SIdentify,
      PageFooter
    },
    mounted() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    methods: {
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
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
      }
    }
  }
  import http from '../../Api/baseHttp'
  import URLString from '../../Api/api'
    export default {
      data() {
        return {
          userPhone: ""
        }
      },
      methods: {
        turnNext: function () {
          //校验手机号跳转下一步
          http.post(URLString.registerCode,this.userPhone, function resCallBack(data) {
            console.log(data);
          });
//          re = /^1\d{10}$/
//          if (re.test(this.data().userPhone)) {
//            //手机号正确发送验证码，跳转下一步
//
//          } else {
//            //弹框提示验证码错误。
//
//          }
        }
      }
    }

</script>


