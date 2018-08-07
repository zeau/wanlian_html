import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Register from '@/components/register/register'
import RegisterSecond from '@/components/register/registerSecond'
import RegisterThird from '@/components/register/registerThird'
import GoodsList from '@/components/goods/goodsList'
import GoodsDetail from '@/components/goods/goodsDetail'
import Cart from '@/components/cart/cart'
import Home from '@/components/home/pageHome'
import Help from '@/components/help/help'
import PersonalCenter from '@/components/personal/personalCenter'
import FindPass from '@/components/findPassword/findPass'
import FindPassSecond from '@/components/findPassword/findPassSecond'



Vue.use(Router)


export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'PageHome',
      redirect: '/pageHome'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/registerSecond',
      name: 'RegisterSecond',
      component: RegisterSecond
    },
    {
      path: '/registerThird',
      name: 'RegisterThird',
      component: RegisterThird
    },
    {
      path: '/goodsList',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/goodsDetail',
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/pageHome',
      name: 'Home',
      component: Home
    },
    {
      path: '/help:title',
      name: 'Help',
      component: Help
    },
    {
      path: '/personalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/findPass',
      name: 'FindPass',
      component: FindPass
    },
    {
      path: '/findPassSecond',
      name: 'FindPassSecond',
      component: FindPassSecond
    }
  ]
})
