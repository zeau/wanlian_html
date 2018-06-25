<template>
    <div id="registerThird">
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
          <div class="register_con_step">
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
        <form>
          <div class="register_con_form">
            <input id="registerId" name="" type="hidden">
            <div class="reg_form_item">
              <label class="for_text">账号密码</label>
              <div class="item">
                <input class="text long passwordconf" name="" placeholder="设置账号密码" maxlength="20" type="password">
                <i class="correct" style="display: none"></i>
                <p class="tips pass" style="display: none">密码必须是6-20位</p>
              </div>
            </div>
            <div class="reg_form_item">
              <label class="for_text">确认密码</label>
              <div class="item">
                <input class="text long repasswordconf" name="" placeholder="确认账号密码" maxlength="20" type="password">
                <i class="correct" style="display: none"></i>
                <p class="tips pass" style="display: none">密码必须是6-20位</p>
              </div>
            </div>
            <div class="reg_form_item">
              <label class="for_text"></label>
              <div class="item">
                <div class="sub_btn next">下一步</div>
              </div>
            </div>
          </div>
        </form>
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
