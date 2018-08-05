<template>
  <div id="registerThird">

    <!--头部-->

    <div class="container">

      <div class="head2">
        <a href=""><img style="height:45px;width:auto;"></a>
        <h1>欢迎注册</h1>
        <p class="login_tip">
          我已经注册，马上
          <router-link to="/login">登录</router-link>
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
        <div class="register_con_step ">
          <i>2</i>
          <span>设置用户信息</span>
        </div>
        <div class="register_con_step active">
          <i>3</i>
          <span>注册成功</span>
        </div>
      </div>
      <form>
        <div class="register_con_form">
          <input id="registerId" name="" type="hidden">
          <div class="reg_form_item">
            <label class="for_text">设置密码</label>
            <div class="item">
              <input class="text long passwordconf" name="sss" v-model="password" placeholder="设置密码" maxlength="20" type="password">
              <i class="correct" style="display: none"></i>
              <p class="tips pass" style="display: none">密码必须是6-20位</p>
            </div>
          </div>
          <div class="reg_form_item">
            <label class="for_text">确认密码</label>
            <div class="item">
              <input class="text long repasswordconf" name="sss" placeholder="确认账号密码" maxlength="20" type="password">
              <i class="correct" style="display: none"></i>  
              <p class="tips pass" style="display: none">密码必须是6-20位</p> 
            </div>
          </div>
          <div class="reg_form_item">
            <label class="for_text"></label>
            <div class="item">
              <div class="sub_btn next" @click="submit">提交注册</div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!--页脚--> 
    <div class="container">
      <p class="login_footer"> Copyright © 2018-2038 万联万名开发平台 苏ICP备17067244</p>
    </div> 
  </div>
</template>

<style>
  
</style>

<script>
  import http from '../../Api/baseHttp'
  import URLString from '../../Api/api'
  
  export default {
  
    data() {
      return {
        password: ""  
      }
    },

    methods: {
      //将信息提交给后台  
      submit: function() {
  
        var _that = this;
        let params = {
  
          "password": this.password, //用户密码
  
          "smsCode": this.$route.params.vertifyCode, //验证码

          "mobile": this.$route.params.phoneNum, //手机号码
    
          "name": this.$route.params.phoneNum,
          "userType": "member",

        };
        //提交登录的信息
        console.log(params);
        http.post(URLString.registerUser, params, function resCallBack(data) {
          console.log(data);
          if (data.statusCode === 200) {
  
            //注册成功后存储用户的信息在本地
            _that.$toast.center("注册成功,3秒后返回首页");
  
            let token = data.token;
  
            if (!window.localStorage) {
  
              window.sessionStorage.setItem('userToken', token);
  
            } else {
              window.localStorage.setItem('userToken', token);
            }
            setTimeout(() => {
              that.$router.push({
                name: "PageHome",
                params: {
                  "loginStatus": "1"
                }
              })
            }, 300);  
          } else {
            if (_that.isEmpty(data.message)) {  
              _that.$toast.center("系统错误");
            } else {
              _that.$toast.center(data.message);
            }
          }
        });
      },
      isEmpty: function(obj) {
        if (typeof obj == "undefined" || obj == null || obj == "") {
          return true;
        } else {
          return false;
        } 
      }
    }
  }
</script>
