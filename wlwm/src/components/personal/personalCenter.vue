<template>
    <div id="personalCenter">
      <!--头部-->
      <div class="n_head">
        <div class="container clearfix pr">
          <div class="n_logo fl clearfix">
            <div class="fl ml20">
              <a href="#" class="fore1">我的函百平台</a>
            </div>
          </div>
          <div class="n_menu fl">
            <ul class="clearfix">
              <li><router-link to="/pageHome">函百首页</router-link></li>
              <li class="n_hover">
                <div class="pr">
                  <a href="#">账户中心</a>
                  <div class="n_menu_hide">
                    <a href="#">账户信息</a>
                    <a href="#">账户安全</a>
                    <a href="#">收货地址</a>
                  </div>
                </div></li>
              <li><a href="#">消息中心</a></li>
            </ul>
          </div><!--n_menu-->
          <div class="cartfd-mem"><s class="cartBanner-mem"></s>
            <div class="cartit-mem">
              <span><s></s><a href="#">我的购物车</a></span>
              <strong class="cartNum-mem">0</strong></div>
            <div class="miniCart-mem hide">
              <div class="mCartBox-mem">
                <div class="mcBoxTop-mem clearfix"></div>
                <div class="mcBoxList-mem"></div>
                <div class="emCartBox-mem hide" style="display: block;">
                  <span>购物车中还没有商品，再去逛逛吧！</span>
                </div>
              </div>
              <div class="mcGenius-mem bmcGenius-mem"></div>
              <div class="mCartError-mem"><p>正在为您加载数量！</p></div>
              <div class="mCartHandler-mem clearfix">
                <span class="mcCashier-mem">
                    <span class="mcTotal-mem">
                        <span class="mcRmb-mem">￥</span>
                        <span class="mcTotalFee-mem">0.00</span>
                    </span>
                    <span class="mcGo-mem"><a href="#">结算</a></span>
                </span>
                <h3>
                  <span class="mc_e1-mem">购物车</span>
                  <span class="mc_e2-mem">共</span>
                  <strong class="mcNumTotal-mem">0</strong> <strong class="mcNumChecked-mem">0</strong>
                  <span class="mc_e2-mem">件</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--主体部分-->
      <div class="container clearfix pt20 pb10">
        <div class="new_member_left">
          <div class="title"><a href="/customer/index.html">个人中心</a></div>
          <div class="menu_item">
            <a href="javascript:void(0)" class="item_title down">
              <span>订单中心</span>
            </a>
            <ul class="item_list" style="display: block;">
              <li class=""><a href="/customer/myorder.html">我的订单</a></li>
              <li class=""><a href="/customer/giftorder.html">积分兑换订单</a></li>
              <li><a href="/customer/myfollw.html">我的关注</a></li>
              <li><a href="/customer/browserecord.html">浏览历史</a></li>
            </ul>
          </div>
          <div class="menu_item">
            <a href="javascript:void(0)" class="item_title down">
              <span>客户服务</span>
            </a>
            <ul class="item_list" style="display: block;">
              <li><a href="/customer/refundlist.html">取消订单记录</a></li>
              <li><a href="/customer/ordercomplain.html">我的投诉</a></li>
            </ul>
          </div>

          <!-- 预存款信息 -->
          <div class="menu_item">
            <a href="javascript:void(0)" class="item_title down">
              <span>资产中心</span>
            </a>
            <ul class="item_list" style="display: block;">
              <li id="menu_myintegral"><a href="/customer/myintegral.html">我的积分</a></li>
              <li id="mycoupon"><a href="/mycoupon-1.html">我的余额券</a></li>
            </ul>
          </div>

          <div class="menu_item">
            <a href="javascript:void(0)" class="item_title down">
              <span>账户中心</span>
            </a>
            <ul class="item_list" style="display: block;">
              <li><a href="/customer/myinfo.html">账户信息</a></li>
              <li id="securitycenter"><a href="/customer/securitycenter.html">账户安全</a></li>
              <li id="consume"><a href="/customer/consume.html">消费记录</a></li>
              <li id="offlineCard"><a href="/customer/offlinecard.html">线下卡</a></li>

              <li><a href="/customer/address.html">收货地址</a></li>
            </ul>
          </div>
          <div class="menu_item">
            <a href="javascript:void(0)" class="item_title down">
              <span>消息中心</span>
            </a>
            <ul class="item_list" style="display: block;">
              <li><a href="/customer/comment.html">商品评价</a></li>
              <li id="consult"><a href="/customer/consult.html">购买咨询</a></li>
              <li><a href="/customer/insideletter.html">站内信息</a></li>
            </ul>
          </div>
        </div>
        <!--主体右边-->
        <iframe name="hidden_frame" style="display:none"></iframe>
        <!--个人中心首页主体右边-->
        <div class="new_member-right" style="border:0;">
          <div class="mod-main clearfix">
            <div class="mod-main-left fl clearfix">
              <div class="mod_img fl">
                <form id="upload_form68059" name="upload_form" method="post"
                      enctype="multipart/form-data"
                      action="/uploadimg.htm?customerId=68059"
                      target="hidden_frame">
                  <img src="/images/default_head.jpg" width="106" height="106" id="customer_imgs"/>
                  <p><a class="upload_file">修改头像</a></p>
                  <input type="file" class="upload_file" id="imageFile" name="shareFile"
                         customer_id="68059"
                         style="width:100px;height:100px;margin-top:-100px;filter:alpha(opacity=0);-moz-opacity:0.5;-khtml-opacity: 0;opacity: 0;position:relative;z-index:999;">
                </form>
              </div>
              <div class="mod-sugar fl ml10">
                <div class="title">
                  4ld97nf9
                  </b>，欢迎您！
                </div>
                <p>函美会员</p>
                <div class="mod-safe mt10">
                  账户安全：
                  <div class="n_per_bar"><span style="width:66% "></span></div>
                  <span style="color: #C0A369" class="pl20">一般</span>
                </div>
              </div>
            </div>

            <div class="mod-main-rig">
              <dl class="clearfix">
                <dt class="my-collect">我的关注：</dt>
                <dd style="display: none;">降价商品（<a href="javascript:void(0)">0</a>）
                </dd>
                <dd>关注商品（<a href="javascript:void(0)">0</a>）
                </dd>
              </dl>
              <dl class="clearfix">
                <dt class="my-msg">消息中心：</dt>
                <dd>提醒通知（<a href="javascript:void(0)">0</a>）
                </dd>
                <dd>咨询回复（<a href="javascript:void(0)">0</a>）
                </dd>
              </dl>
              <dl class="clearfix none">
                <dt class="my-fund">预存款：</dt>
                <dd><a class="active" target="_blank" href="/deposit/mydeposit.htm"><b>￥0.00</b>元</a>
                </dd>
              </dl>
              <dl class="clearfix">
                <dt class="my-score">我的积分：</dt>
                <dd><a class="active" target="_blank" href="/customer/myintegral.html">0个积分</a></dd>
              </dl>
              <dl class="clearfix">
                <dt class="my-coupon">余额券：</dt>
                <dd><a href="javascript:void(0)"
                >0张</a></dd>
              </dl>
            </div>
          </div>
          <div class="mod-order mt20">
            <div class="tc-title clearfix">
              <a href="#">查看全部订单</a>我的订单
            </div>
            <div class="content pb20">
              <div class="layout">
                <table class="bought-table mt10">
                  <thead>
                  <tr>
                    <th width="420">订单信息</th>
                    <th>收货人</th>
                    <th>订单状态</th>
                    <th>支付金额</th>
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tr>
                    <td colspan="5" style="height:60px;text-align:center;">暂无订单！</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="borwsing-history mt20 none">
            <div class="title">浏览记录</div>
            <div class="his-srcoll" id="proScroll_a">
              <div style="margin-top:10px;border:1px #e8e8e8 solid; height:60px; text-align: center; font-size: 18px;line-height:60px;;">
                暂无浏览信息！
              </div>
            </div>
          </div>
        </div>
        <!--我的订单页主体右边-->
        <div class="new_member-right">
          <div class="new_order_list">
            <div class="n-title">我的订单</div>
            <div class="tagMenu order-menu">
              <ul class="ods_tabs menu clearfix">
                <li class="current"  data-val="5"><a
                  href="/customer/myorder.html">所有订单</a></li>
                <li data-val="0"><a href="javascript:;"
                                    id="onDealText">待处理订单</a>
                </li>
                <li data-val="3"><a
                  href="javascript:;">已完成订单</a></li>
                <li data-val="4"><a
                  href="javascript:;">已取消订单</a></li>
                <li  data-val="6"><a href="javascript:;"
                                     id="onBackText">退货单</a>
                </li>
              </ul>
            </div>
            <div class="simple mt10 clearfix">
              <div class="filter_l fl">
                <select class="select s1 ss">
                  <option value="0">近一个月订单</option>
                  <option value="1">一个月前订单</option>
                </select>
                <input type="hidden" id="hi_date" value="0"/>
                <input type="hidden" id="hi_type" value="5"/>
              </div>
            </div>
            <div class="content">
              <div class="layout">
                <table class="bought-table mt10">
                  <thead>
                  <tr>
                    <th width="420">订单信息</th>
                    <th>收货人</th>
                    <th>订单状态</th>
                    <th>支付金额</th>
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tr>
                    <td colspan="5" style="height:60px;text-align: center;">暂无订单！</td>
                  </tr>
                </table>
              </div>

            </div>
          </div>

        </div>
        <!--账户信息-->
        <div class="new_member-right">
          <div class="new_order_list">
            <div class="n-title">账户信息</div>
            <div class="tagMenu order-menu pr">
              <ul class="menu clearfix">
                <li class="current">基本信息</li>
              </ul>
              <div class="aco-link">
                注：修改邮箱、手机请到<a href="/customer/securitycenter.html">账户安全</a>
              </div>
            </div>
            <div class="content mt10">
              <div class="layout">
                <form method="post" action="/modifyInfo.html">
                  <table class="complain-table">
                    <tr>
                      <td class="tr">用户名：</td><input type="hidden" id="hi_uid" value="2109757" />
                      <td>
                        4ld97nf9
                      </td>
                    </tr>
                    <tr>
                      <td class="tr">会员等级：</td>
                      <td>
                        函美会员
                      </td>
                    </tr>
                    <tr>
                      <td class="tr"><span>*</span>昵称：</td>
                      <td><input class="text" id="nickName" type="text" name="customerNickname" value="4ld97nf9" />
                        <img id="nickName_img" src="/images/succ-ico.png" />
                        <label id="nickName_msg"></label>
                        <input class="hidden" id="nickName_" value="4ld97nf9"  />
                      </td>
                    </tr>
                    <tr>
                      <td class="tr" valign="top"><span>*</span>性别：</td>
                      <td>
                        <input type="radio" name="infoGender" value="0"  /><label>男</label>
                        <input type="radio" name="infoGender" value="1"  /><label>女</label>
                      </td>
                    </tr>
                    <tr>
                      <td class="tr"><span>*</span>真实姓名：</td>
                      <td>
                        <input class="text" id="realName" type="text" name="infoRealname" value="" />
                        <img id="realName_img" src="/images/succ-ico.png" />
                        <label id="realName_msg"></label>
                      </td>
                    </tr>

                    <tr>
                      <td class="tr">生日：</td>
                      <td>
                        <select class="select" id=year name="year" style="width: 65px"> </select> 年
                        <select class="select" id=month name="month" style="width: 50px"> </select>月
                        <select class="select" id=day name="day" style="width: 50px"> </select>  日
                        <img id="birthday_img" src=""/>
                        <label id="birthday_msg"></label>

                      </td>
                    </tr>

                    <tr>
                      <td class="tr"><span>*</span>身份证号码：</td>
                      <td>
                        <input type="text" class="text" id="idnum" name="infoCardid" maxlength="18" style="width:178px;" />
                        <img id="idnum_img" src="/images/succ-ico.png" />
                        <label id="idnum_msg"></label>
                        <input type="text" class="hidden" id="idnum_" value=""  />
                      </td>

                    </tr>
                    <tr>
                      <td class="tr">所在地：</td>
                      <td>
                        <select class="select" name="infoProvince" id=infoProvince >
                        </select>
                        <select class="select" name="infoCity" id=infoCity>
                          <option selected value="">请选择</option>
                        </select>
                        <select class="select" name="infoCounty" id=infoCounty>
                          <option selected value="">请选择</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td class="tr">详细地址：</td>
                      <td>
                        <input class="text address" style="width: 500px;" id="address" name="infoAddress" type="text"value="" />
                        <img id="address_img" src="/images/succ-ico.png" />
                        <label id="address_msg"></label>
                      </td>
                    </tr>
                  </table>
                  <table class="complain-table">

                    <tr>
                      <td class="tr">月收入：</td>
                      <td>
                        <select class="select" id="infoSalary" name="income">
                          <option selected value="-1">无收入</option>
                          <option  value="0">2000元以下</option>
                          <option  value="1">2000-3999元</option>
                          <option  value="2">4000-5999元</option>
                          <option  value="3">6000-7999元</option>
                          <option  value="4">8000元以上</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td class="tr">婚姻状况：</td>
                      <td>
                        <input type="radio" name="infoMarital" value="0" checked=checked /><label>保密</label>
                        <input type="radio" name="infoMarital" value="1"  /><label>未婚</label>
                        <input type="radio" name="infoMarital" value="2"  /><label>已婚</label>
                      </td>
                    </tr>
                    <tr>
                      <td class="tr" valign="top">兴趣爱好：</td>
                      <td>
                        <textarea cols="80" rows="5" maxlength="120" id="infoInterest" name="infoInterest"  class="text_area"></textarea>
                        <img id="infos_img" src="/images/succ-ico.png" />
                        <label id="infos_msg"></label>
                        <br/>
                        <a onclick="javascript:updateUserInfo()" href="javascript:void 0;" class="complain-submit">提交</a>
                      </td>
                    </tr>

                  </table>
                </form>
              </div>
            </div>

          </div>
        </div>
        <!--账户安全-->
        <div class="new_member-right">
          <div class="new_order_list">
            <div class="n-title">账户安全</div>
            <div class="new-safe-level pt20">
              安全级别：
              <div class="n_per_bar" style="width: 100px;"><span style="width: 66% "></span></div>
              <span style="color: #C0A369;" class="pl20">中级</span>
              <span class="safe_bar md_sf"></span>
              <em>建议您启动全部安全设置，以保障账户及资金安全。</em>
            </div>
            <div class="new-change-code clearfix">
              <div class="can-tit fl tit_01">
                登录密码
              </div>
              <div class="can-det">
                互联网账号存在被盗风险，建议您定期更改密码以保护账户安全。
                <a class="fr" href="/validate/validateidentity.html?type=pwd">修改</a>
              </div>
            </div>
            <div class="new-change-code clearfix">
              <div class="can-tit fl tit_02">
                邮箱验证
              </div>
              <div class="can-det">
                验证后，让账号更加安全。
                <a class="fr" href="/validate/validateidentity.html?type=email">立即验证</a>
              </div>
            </div>
            <div class="new-change-code clearfix">
              <div class="can-tit fl tit_03">
                手机验证
              </div>
              <div class="can-det">
                您的验证手机:139*****979
                <a class="fr" href="/validate/validateidentity.html?type=mobile">修改</a>
              </div>
            </div>

            <div class="new-change-code clearfix" hidden="hidden">
              <div class="can-tit fl tit_03">
                支付密码
              </div>
              <div class="can-det">
                设置支付密码可用于进行预存款支付。

                <!-- 判断账户信息有没有密码，没有set,有change -->
                <a class="fr" href="/deposit/setpaypasswordview.htm">设置</a>
                <!--
                <a class="fr" href="javascript:;" onclick="dia(1)">设置</a>
                -->
              </div>
            </div>

          </div>
        </div>
        <!--收货地址暂无状态-->
        <div class="new_member-right">
          <div class="air-account-address">
            <div class="n-title">收货地址</div>
            <div class="simple mt20 clearfix">
              <div class="fl">
                <button  onclick="toaddAddress()">新增收货地址</button>
                <span class="addressNum-tips ml10">您已创建<span id="addressesNum">0</span>个收货地址，最多可创建<span>10</span>个</span>
              </div>
            </div>
            <div class="content">
              <div class="layout">
                <div class="air-addressList">
                  <div  style="margin-top:10px;border:1px #e8e8e8 solid; height:40px; text-align: center;line-height:40px;;">
                    暂无收货地址！
                  </div>

                </div>
                <div class="paging_area">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--添加地址的弹出框-->
        <!--添加地址后存在一个的情况 -->
        <div class="new_member-right">
          <div class="air-account-address">
            <div class="n-title">收货地址</div>
            <div class="simple mt20 clearfix">
              <div class="fl">
                <button  onclick="toaddAddress()">新增收货地址</button>
                <span class="addressNum-tips ml10">您已创建<span id="addressesNum">1</span>个收货地址，最多可创建<span>10</span>个</span>
              </div>
            </div>
            <div class="content">
              <div class="layout">
                <div class="air-addressList">
                  <div class="air-addressInfo">
                    <ul>
                      <li>
                        <label for=""> 收货人：</label><span>小崔</span>
                      </li>
                      <li>
                        <label for=""> 所在地区：</label>
                        <span>
                                                            上海
                                                                -上海市
                                                                -松江区
                                                        </span>
                      </li>
                      <li>
                        <label for=""> 地址：</label>
                        <span>
                                                            南其昌路458弄 江中公寓 158-601
                                                        </span>
                      </li>
                      <li>
                        <label for="">手机：</label>
                        <span>
                                                                13921944979<br>
                                                        </span>
                      </li>
                    </ul>
                    <span class="delete-address"><a onclick="deladdress(302)"><img src="/images/delete-address.png"/></a></span>
                    <div class="address-toolbar">
                      <a href="javascript:;" onclick="modifyDefault('302','68059')">设为默认</a>
                      <a class="pl10" href="javascript:;" onclick="updateAddress(302)">编辑</a>
                    </div>
                  </div>

                </div>
                <div class="paging_area">
                  <div class="paging_area">
                    <div class="paging">
                      <a class="prev_null" href="javascript:void(0);">&lt;&nbsp;上一页</a>
                      <a class="num_cur prev" href="javascript:void(0);">1</a>
                      <a class="next_null" href="javascript:void(0);">下一页&nbsp;&gt;</a>
                    </div>
                  </div><!--/page-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
@import "../../common/css/personalCenter.css";
</style>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>
