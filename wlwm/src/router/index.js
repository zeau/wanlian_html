import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'
import Register from '@/components/register/register'
import RegisterSecond from '@/components/register/registerSecond'
import RegisterThird from '@/components/register/registerThird'
import GoodsList from '@/components/goods/goodsList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goodsList'
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: '登陆',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    },
    {
      path: '/registerSecond',
      name: '注册第二步',
      component: RegisterSecond
    },
    {
      path: '/registerThird',
      name: '注册第三步',
      component: RegisterThird
    },
    {
      path: '/goodsList',
      name: '商品列表',
      component: GoodsList
    }
  ]
})
