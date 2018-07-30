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


Vue.use(Router)


export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/pageHome'
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
    },
    {
      path: '/goodsDetail',
      name: '商品详情',
      component: GoodsDetail
    },
    {
      path: '/cart',
      name: '购物车',
      component: Cart
    },
    {
      path: '/pageHome',
      name: '首页',
      component: Home
    },
    {
      path: '/help',
      name: '帮助',
      component: Help
    },
    {
      path: '/personalCenter',
      name: '个人中心首页',
      component: PersonalCenter
    }
  ]
})
