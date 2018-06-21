<template>
    <div id="login">
      <!--头部-->
      <div class="container">
        <div class="head2">
          <a href=""><img style="height:45px;width:auto;"></a><h1>欢迎登录</h1>
        </div>
      </div>
      <!--主体-->
      <div class="login_bg">
        <div class="container">
          <div class="login_con">
            <div class="login_con_title">
              <span>会员登陆</span>
              <p>还没有账号？马上<a href="#">免费注册</a></p>
            </div>
            <div class="login_con_main">
              <from id="" name="" action="" method="">
                <div class="login_con_main_row">
                  <input id="log_user" class="login_con_main_text" maxlength="40" name="username" value="" placeholder="已验证手机/邮箱/用户名"  type="text">
                  <span id="login_name"></span>
                  <div class="login_con_main_tips">您输入的用户名不正确</div>
                </div>
                <div class="login_con_main_row">
                  <input id="log_pwd" class="login_con_main_text" maxlength="20" name="password" value="" placeholder="密码" oncopy="return false" type="password">
                  <span id="login_pwd"></span>
                  <div class="login_con_main_tips">您输入的密码不正确</div>
                </div>
                <div class="login_con_main_row">
                  <input id="log_btn" class="login_con_main_btn" maxlength="20" name="login" value="登 录" type="button">
                  <div class="login_con_main_row">
                    <a class="forgetPwd">忘记密码？</a>
                    <input class="re_checkBox" name="remember" style="opacity:0;" type="checkbox">
                    <div class="beauty-checkbox"></div>
                    <label class="re_label">记住账号</label>
                  </div>
                </div>
              </from>
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

  .login_bg{
    background-image: url("./login_bg.jpg");
    background-position:center center;
    background-repeat: no-repeat;
    height:420px;
    width: 100%
  }

</style>

<script>

    export default {
        data() {
            return {

            }
        },
        methods:{
          fetchData:async function(username,password) {
            let param = {};
            const res = await this.http.get(URLString.login,param);
            if(this.http.data.success){
            }
          } 
        }
    }
</script>
