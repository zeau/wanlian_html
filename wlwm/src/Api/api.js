export default {
    login:'/web/user/loginInfor.do',//登录
    registerCode:'/sms/getSmsCode.do',//验证码
    registerUser:'/web/user/registerUser.do',//注册

    banner:'/web/basicData/findBasicData.do',//轮播图
    hotActivity:'/web/basicData/findBasicData.do',//热门活动
    weekRecommend:'/web/basicData/findBasicData.do',//本周推荐
    goods:'/web/basicData/findBasicData.do',//优质商品

    goodsList:'/web/commodity/findCommodity.do',//商品列表
    goodsInfo:'/web/commodity/getCommodity.do',//商品详情

    joinShoppingCart:'/web/shoppingCart/addShoppingCartHome.do',//加入购物车
    shoppingCartList:'/web/shoppingCart/getShoppingCartHome.do',//购物车列表
    updateOrderDetail:'/web/shoppingCart/updateOrderDetail.do',//购物车下单
    deleteShoppingCartList:'/web/shoppingCart/deleteShoppingCartHome.do',//删除购物车列表

    payType:'/web/payConfigHome/getPayConfig.do',//支付方式

    getOrdersum:'/web/order/getOrdersum.do',//订单总价格
    getOrderDetail:'/web/order/getOrderDetail.do',//订单详情
    cancelOrder:'/web/order/cancelOrder.do',//取消订单
    deleteOrder:'/web/order/deleteOrder.do',//删除订单
    myOrder:'/web/order/getAllOrdersByCondition.do',//我的订单
    addMoreOrder:'/web/order/addOrderTo.do',//购买多个商品
    addOneOrder:'/web/order/addOrder.do',//购买单个商品
    updateOrderDetail:'/web/order/updateOrderDetail.do',//支付完成更新订单状态

    getLoginUserInfor:'/web/user/getLoginUserInfor.do',//当前用户的登陆信息
    updatePassword:'/web/user/updatePassword.do',//找回密码
    loginOut:'/web/user/loginOut.do',//退出登录
}