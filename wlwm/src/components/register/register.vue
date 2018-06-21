<template>
    <div id="register">
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
      <div class="container">
        <p class="login_footer"> Copyright © 2018-2038  万联万名开发平台   苏ICP备17067244</p>
      </div>
    </div>
</template>

<style>

</style>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
