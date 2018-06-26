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
          <input id="registerId" name="" type="hidden">
          <div class="reg_form_item">
            <label class="for_text">手机号码</label>
            <div class="item">
              <b>139****4979</b>
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
            <label class="for_text">短信验证码</label>
            <div class="item">
              <form>
                <input id="message" class="text medium" placeholder="请输入图片验证码" name="checkCode" maxlength="6" type="text">
              </form>
              <div class="tCode">
                <button id="sendBtn" type="button" class="active_btn btn">
                  <span id="auto_code">获取验证码</span>
                </button>
              </div>
              <p class="tips mobile_info" style="display: none">请输入短信验证码</p>
            </div>
          </div>
          <div class="reg_form_item">
            <label class="for_text"></label>
            <div class="item">
              <button class="sub_btn free" type="submit">确定</button>
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
