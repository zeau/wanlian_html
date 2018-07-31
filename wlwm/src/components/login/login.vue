<template>
  <div id="login">
    <!--头部-->
    <div class="container">
      <div class="head2">
        <a href="#"><img style="height:45px;width:auto;"></a>
        <h1>欢迎登录</h1>
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
            <form id="login_form" name="loginForm">
              <div class="login_con_main_row">
                <input id="log_user" class="login_con_main_text" maxlength="40" name="username" value="" placeholder="已验证手机/邮箱/用户名" v-model="params.username" type="text">
                <span id="login_name"></span>
                <div class="login_con_main_tips">您输入的用户名不正确</div>
              </div>
              <div class="login_con_main_row">
                <input id="log_pwd" class="login_con_main_text" maxlength="20" name="password" value="" placeholder="密码" oncopy="return false" type="password" v-model="params.password">
                <span id="login_code"></span>
                <div class="login_con_main_tips">您输入的密码不正确</div>
              </div>
              <div class="login_con_main_row">
                <input id="log_btn" class="login_con_main_btn" maxlength="20" name="login" value="登 录" type="button" @click="fetchData">
                <div class="login_con_main_row">
                  <router-link class="forgetPwd" to="/findPass">忘记密码？</router-link>
                  <input class="re_checkBox" name="remember" style="opacity:0;" type="checkbox">
                  <div class="beauty-checkbox" @click="beautyCheck"></div>
                  <label class="re_label">记住账号</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--页脚-->
    <div class="container">
      <p class="login_footer"> Copyright © 2018-2038 万联万名开发平台 苏ICP备xxxxxx</p>
    </div>
  
  </div>
</template>

<style>
  .login_bg {
    background-image: url("./login_bg.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    height: 420px;
    width: 100%
  }
</style>

<script>
  import http from '../../Api/baseHttp'
  import URLString from '../../Api/api'
  
  export default {
    name: "Login",
    data() {
      return {
        params: {},
        isRemerber: true
      }
    },
    methods: {
      jsonData(data) {
        JSON.stringify(data);
      },
  
      isEmpty: function(obj) {
        if (typeof obj == "undefined" || typeof obj == null || obj === "") {
          return true;
        } else {
          return false;
        }
      },
  
      beautyCheck() {
        $(".beauty-checkbox").toggleClass('active');
        $('.bu-checkbox').trigger('click');
        // 保存用户的密码
      },
  
      fetchData: async function() {
        var that = this;
        let param = {
          "username": this.params.username,
          "password": this.params.password,
          "userType": "member"
        };
        http.post(URLString.login, param, function SuccessCallBack(res) {
          console.log(res);
          var token = res.data;
          console.log(token); 
          if (res.statusCode === 200) {
            if (!that.isEmpty(token)) {
              if (!window.localStorage) {
                window.sessionStorage.setItem('userToken', token);
              } else {
                window.localStorage.setItem('userToken', token);
              }
              console.log("88888" + window.localStorage.getItem("userToken"));
  
              that.$toast.center("登录成功，三秒自动返回首页");
  
              setTimeout(() => {
                that.$router.push({
                  name: "PageHome",
                  params: {
                    "loginStatus": "1"
                  }
                })
              }, 300);
  
            } else {
              that.$toast.center("系统错误");
            }
          } else {
            if (!that.isEmpty(res.message)) {
              that.$toast.center(res.message);
            } else {
              that.$toast.center("系统错误");
            }
          }
        });
      }
    }
  }
</script>
