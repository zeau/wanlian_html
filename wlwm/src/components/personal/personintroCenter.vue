<template>
    <div class="con-right">
        <!-- 个人中心页面 -->
        <div class="new_member-right" style="border:0;" v-if="this.showWithFIndex == 0">
            <div class="mod-main clearfix">
                <div class="mod-main-left fl clearfix">
                    <div class="mod_img fl">
                        <form id="upload_form64470" name="upload_form" method="post" enctype="multipart/form-data" action="/uploadimg.htm?customerId=64470" target="hidden_frame">
                            <img src="&#9;&#9;&#9;&#9;&#9;&#9;&#9; /images/default_head.jpg&#10;&#9;&#9;&#9;&#9;&#9;&#9;" width="106" height="106" id="customer_imgs">
                            <p><a class="upload_file">修改头像</a></p>
                            <input type="file" class="upload_file" id="imageFile" name="shareFile" customer_id="64470" style="width:100px;height:100px;margin-top:-100px;filter:alpha(opacity=0);-moz-opacity:0.5;-khtml-opacity: 0;opacity: 0;position:relative;z-index:999;">
                        </form>
                    </div>
                    <div class="mod-sugar fl ml10">
                        <div class="title">
                            m18606276616 ，欢迎您！
                        </div>
                        <p>函美会员</p>
                        <div class="mod-safe mt10">
                            账户安全：
                            <div class="n_per_bar"><span style="width:33% "></span>
                            </div>
                            <span style="color: #C0A369" class="pl20">低</span>
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
                        <dd><a href="javascript:void(0)">0张</a></dd>
                    </dl>
                </div>
            </div>
            <div class="mod-order mt20">
                <div class="tc-title clearfix">
                    <a href="/customer/myorder.html">查看全部订单</a>我的订单
                </div>
                <div class="content pb20">
                    <div class="layout" id="No0">
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
                            <tbody>
                                <tr>
                                    <td colspan="5" style="height:60px;text-align:center;">暂无订单！</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="borwsing-history mt20 none">
                <div class="title">浏览记录</div>
                <div class="his-srcoll" id="proScroll_a">
                    <div class="new-proscoll" style="visibility: visible; overflow: hidden; position: relative; z-index: 2; left: 0px; width: 20px;">
                        <ul style="margin: 0px; padding: 0px; position: relative; list-style-type: none; z-index: 1; width: 60px; left: -20px;">
                            <li style="overflow: hidden; float: left; width: 217px; height: 270px;">
                                <a target="_blank" title="迪柯尼单西" href="/item/2.html"><img src="https://img-test.hbunion.com/old/17503u072/main/Z_02.jpg?x-oss-process=image/resize,w_500" alt="迪柯尼单西" title="迪柯尼单西" width="215" height="215">
    
                                    <p>
                                        迪柯尼单西
    
                                    </p>
                                    <p class="red">
                                        ￥1</p>
                                </a>
                            </li>
                            <li style="overflow: hidden; float: left; width: 217px; height: 270px;">
                                <a target="_blank" title="迪柯尼单西" href="/item/2.html"><img src="https://img-test.hbunion.com/old/17503u072/main/Z_02.jpg?x-oss-process=image/resize,w_500" alt="迪柯尼单西" title="迪柯尼单西" width="215" height="215">
    
                                    <p>
                                        迪柯尼单西
    
                                    </p>
                                    <p class="red">
                                        ￥1</p>
                                </a>
                            </li>
    
                            <li style="overflow: hidden; float: left; width: 217px; height: 270px;">
                                <a target="_blank" title="迪柯尼单西" href="/item/2.html"><img src="https://img-test.hbunion.com/old/17503u072/main/Z_02.jpg?x-oss-process=image/resize,w_500" alt="迪柯尼单西" title="迪柯尼单西" width="215" height="215">
    
                                    <p>
                                        迪柯尼单西
    
                                    </p>
                                    <p class="red">
                                        ￥1</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a class="j-prev" href="javascript:;"></a>
                    <a class="j-next" href="javascript:;"></a>
                </div>
            </div>
            <!--borwsing-history-->
        </div>
    
    
        <!-- 我的订单 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 1">
            <div class="new_order_list">
                <div class="n-title">我的订单</div>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">所有订单</el-menu-item>
                    <el-menu-item index="2">待处理订单</el-menu-item>
                    <el-menu-item index="3">已完成订单</el-menu-item>
                    <el-menu-item index="4">已取消订单</el-menu-item>
                    <el-menu-item index="5">退货单</el-menu-item>
                </el-menu>
    
                <div class="simple mt10 clearfix">
                    <div class="filter_l fl">
                        <select class="select s1 ss">
                                                                    <option value="0">近一个月订单</option>
                                                                    <option value="1">一个月前订单</option>
                                                    </select>
                    </div>
                </div>
                <div class="content">
                    <div class="layout" id="No0">
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
                            <tbody>
                                <tr>
                                    <td colspan="5" style="height:60px;text-align: center;">暂无订单！</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                </div>
            </div>
    
        </div>
    
        <!-- 积分兑换订单 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 2">
            <div class="new_order_list">
                <div class="n-title">积分兑换订单</div>
                <div class="tagMenu order-menu">
                    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1">所有订单</el-menu-item>
                        <el-menu-item index="2">未支付</el-menu-item>
                        <el-menu-item index="3">已支付</el-menu-item>
                    </el-menu>
                </div>
                <div class="simple mt10 clearfix">
                    <input class="select s1 ss" type="hidden" id="hi_date" value="0">
                </div>
                <div class="content ">
                    <div class="layout" id="No0">
                        <table class="bought-table mt10">
                            <thead>
                                <tr>
                                    <th width="400">订单信息</th>
                                    <th>所需运费</th>
                                    <th>收货人</th>
                                    <th>兑换积分</th>
                                    <th>订单状态</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="6" style="height:60px;text-align: center;">暂无订单！</td>
                                </tr>
    
                            </tbody>
                        </table>
                    </div>
    
                </div>
            </div>
    
        </div>
    
        <!-- 我的关注 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 3">
            <div class="new_order_list">
                <div class="n-title">我的关注</div>
                <div class="tagMenu order-menu">
                    <el-menu :default-active="activeIndex3" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1">我关注的商品</el-menu-item>
                        <el-menu-item index="2">我关注的商家</el-menu-item>
                    </el-menu>
                </div>
                <div class="content">
                    <div class="layout" id="No0">
                        <table class="bought-table mt10">
                            <thead>
                                <tr>
                                    <th width="480">商品名称</th>
                                    <th>网友反馈</th>
                                    <th>价格</th>
                                    <th>库存情况</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="5" style="height:60px;text-align: center;">暂无关注记录！</td>
                                </tr>
                            </tbody>
    
                        </table>
                    </div>
                </div>
                <input type="hidden" value="566657e01528130422418e6c3d01e48a" id="hi_token">
            </div>
        </div>
    
        <!-- 浏览历史 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex ==4">
            <div class="new_order_list">
                <div class="n-title">浏览历史</div>
                <div class="brw-history mt20">
                    <div class="title today-look">
    
                        2018-08-07
                    </div>
                    <div class="brw-history-list n-tiao ">
                        <ul class="clearfix">
                            <li>
                                <a href="/item/2.html">
                                    <img style="width:180px;height:180px;" alt=" 迪柯尼单西" src="https://img-test.hbunion.com/old/17503u072/main/Z_02.jpg?x-oss-process=image/resize,w_500">
                                    <p title=" 迪柯尼单西">迪柯尼单西 </p>
                                    <p class="price">￥1</p>
                                </a>
                                <div class="story-bg">
                                    <a href="javascript:void(0)" onclick="cancelbrowse('/customer/cancelbrowse-2936.html')" class="fr mr20"><img src="/images/l-delete.jpg" width="16" height="19"></a>
                                    <a href="javascript:void(0)" onclick="buy(this)" class="fr mr20"><img src="/images/shop-car.png" width="21" height="17"></a>
                                    <input type="hidden" value="2">
                                    <a href="javascript:void(0)" onclick="addattr(this,2)" class="fr mr20"><img width="21" height="17"></a>
                                </div>
    
                            </li>
                        </ul>
                    </div>
    
                </div>
                <div class="brw-history">
                </div>
            </div>
        </div>
    
        <!-- 取消订单 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 5">
            <div class="new_order_list">
                <div class="n-title">取消订单记录</div>
                <div class="tagMenu order-menu">
                    <ul class="menu clearfix">
                        <li class="current"><a href="javascript:;">取消订单记录</a></li>
                    </ul>
                </div>
                <div class="content">
                    <div class="layout" id="No0">
                        <table class="bought-table mt10">
                            <thead>
                                <tr>
                                    <th>订单编号</th>
                                    <th width="420">订单商品</th>
                                    <th>取消时间</th>
                                    <th>取消原因</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="5" style="height:60px;text-align: center;">暂无订单！</td>
                                </tr>
    
                            </tbody>
    
                        </table>
                        <div class="paging_area">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- 我的投诉 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 6">
            <div class="new_order_list">
                <div class="n-title">我的投诉</div>
                <div class="tagMenu order-menu">
                    <ul class="menu clearfix">
                        <li class="current" onclick="showleft()"><a href="javascript:;">选择订单</a></li>
                        <li onclick="showright()"><a href="javascript:;">我的投诉记录</a></li>
                    </ul>
                </div>
                <div class="content">
                    <div class="layout" id="No0">
                        <table class="bought-table mt10">
                            <thead>
                                <tr>
                                    <th width="190">订单编号</th>
                                    <th width="480">订单商品</th>
                                    <th>下单时间</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="4" style="height:60px;text-align: center;">暂无订单！</td>
                                </tr>
    
    
                            </tbody>
    
                        </table>
                        <div class="paging_area">
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    
        <!-- 我的积分 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 7">
            <div class="new_order_list">
                <div class="n-title">我的积分</div>
                <div class="ex-bar-total">
                    您当前的积分：<span> 0</span>
                </div>
                <div class="tagMenu order-menu">
                    <ul class="menu clearfix">
                        <li class="current">积分明细</li>
                    </ul>
                </div>
    
                <div class="content">
                    <div class="layout" id="No0">
                        <table class="bought-table mt10">
                            <thead>
                                <tr>
                                    <th>日期</th>
                                    <th>剩余积分</th>
                                    <th>操作门店</th>
                                </tr>
                            </thead>
                            <tbody>
    
    
                            </tbody>
                        </table>
                        <div class="paging_area">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- 我的优惠券 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 8">
            <div class="air-account-discount">
                <div class="n-title">我的余额券</div>
                <div class="tagMenu order-menu">
                    <ul class="menu clearfix">
                        <li class="current" onclick="javascript:location='/mycoupon-1.html'"><a href="javascript:;">余额券</a>
                        </li>
                    </ul>
                </div>
                <div class="content">
                    <div class="layout" id="No0">
                        <div class="air-discountList">
                            <div style="margin-top:10px;border:1px #e8e8e8 solid; height:40px; text-align: center; line-height:40px;;">
                                暂无余额券！
                            </div>
                        </div>
                        <div class="paging_area">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- 账户信息 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 9">
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
                    <div class="layout" id="No0">
                        <form method="post" action="/modifyInfo.html">
                            <table class="complain-table">
                                <tbody>
                                    <tr>
                                        <td class="tr">用户名：</td><input type="hidden" id="hi_uid" value="2101510">
                                        <td>
                                            m18606276616
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
                                        <td><input class="text" id="nickName" type="text" name="customerNickname" value="m18606276616">
                                            <img id="nickName_img" src="/images/succ-ico.png" style="display: none;">
                                            <label id="nickName_msg"></label>
                                            <input class="hidden" id="nickName_" value="m18606276616">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tr" valign="top"><span>*</span>性别：</td>
                                        <td>
                                            <input type="radio" name="infoGender" value="0"><label>男</label>
                                            <input type="radio" name="infoGender" value="1"><label>女</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tr"><span>*</span>真实姓名：</td>
                                        <td>
                                            <input class="text" id="realName" type="text" name="infoRealname" value="">
                                            <img id="realName_img" src="/images/succ-ico.png" style="display: none;">
                                            <label id="realName_msg"></label>
                                        </td>
                                    </tr>
    
                                    <tr>
                                        <td class="tr">生日：</td>
                                        <td>
                                            <select class="select" id="year" name="year" style="width: 65px"> <option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option><option value="1904">1904</option><option value="1903">1903</option><option value="1902">1902</option><option value="1901">1901</option><option value="1900">1900</option></select>                                        年
                                            <select class="select" id="month" name="month" style="width: 50px"> <option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select>月
                                            <select class="select" id="day" name="day" style="width: 50px"><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>                                        日
                                            <img id="birthday_img" src="">
                                            <label id="birthday_msg"></label>
    
                                        </td>
                                    </tr>
    
                                    <tr>
                                        <td class="tr"><span>*</span>身份证号码：</td>
                                        <td>
                                            <input type="text" class="text" id="idnum" name="infoCardid" maxlength="18" style="width:178px;">
                                            <img id="idnum_img" src="/images/succ-ico.png" style="display: none;">
                                            <label id="idnum_msg"></label>
                                            <input type="text" class="hidden" id="idnum_" value="">
                                        </td>
    
                                    </tr>
                                    <tr>
                                        <td class="tr">所在地：</td>
                                        <td>
                                            <select class="select" name="infoProvince" id="infoProvince"><option value="1">北京</option><option value="2">天津</option><option value="3">河北</option><option value="4">山西</option><option value="5">内蒙古</option><option value="6">辽宁</option><option value="7">吉林</option><option value="8">黑龙江</option><option value="9">上海</option><option value="10">江苏</option><option value="11">浙江</option><option value="12">安徽</option><option value="13">福建</option><option value="14">江西</option><option value="15">山东</option><option value="16">河南</option><option value="17">湖北</option><option value="18">湖南</option><option value="19">广东</option><option value="20">广西</option><option value="21">海南</option><option value="22">重庆</option><option value="23">四川</option><option value="24">贵州</option><option value="25">云南</option><option value="26">西藏</option><option value="27">陕西</option><option value="28">甘肃</option><option value="29">青海</option><option value="30">宁夏</option><option value="31">新疆</option><option value="32">香港</option><option value="33">澳门</option><option value="34">台湾</option></select>
                                            <select class="select" name="infoCity" id="infoCity"><option value="1001">北京市</option></select>
                                            <select class="select" name="infoCounty" id="infoCounty"><option value="10004">东城区</option><option value="10006">丰台区</option><option value="10007">石景山区</option><option value="10008">海淀区</option><option value="10009">门头沟区</option><option value="10010">房山区</option><option value="10011">通州区</option><option value="10012">顺义区</option><option value="10013">昌平区</option><option value="10014">大兴区</option><option value="10015">怀柔区</option><option value="10016">平谷区</option><option value="10017">密云县</option><option value="10018">延庆县</option><option value="12999">朝阳区</option><option value="13000">西城区</option><option value="13001">西城区</option></select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tr">详细地址：</td>
                                        <td>
                                            <input class="text address" style="width: 500px;" id="address" name="infoAddress" type="text" value="">
                                            <img id="address_img" src="/images/succ-ico.png" style="display: none;">
                                            <label id="address_msg"></label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="complain-table">
    
                                <tbody>
                                    <tr>
                                        <td class="tr">月收入：</td>
                                        <td>
                                            <select class="select" id="infoSalary" name="income">
                                                                     <option selected="" value="-1">无收入</option>
                                                                     <option value="0">2000元以下</option>
                                                                     <option value="1">2000-3999元</option>
                                                                     <option value="2">4000-5999元</option>
                                                                     <option value="3">6000-7999元</option>
                                                                     <option value="4">8000元以上</option>
                                                                 </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tr">婚姻状况：</td>
                                        <td>
                                            <input type="radio" name="infoMarital" value="0" checked="checked"><label>保密</label>
                                            <input type="radio" name="infoMarital" value="1"><label>未婚</label>
                                            <input type="radio" name="infoMarital" value="2"><label>已婚</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tr" valign="top">兴趣爱好：</td>
                                        <td>
                                            <textarea cols="80" rows="5" maxlength="120" id="infoInterest" name="infoInterest" class="text_area"></textarea>
                                            <img id="infos_img" src="/images/succ-ico.png" style="display: none;">
                                            <label id="infos_msg"></label>
                                            <br>
                                            <a onclick="javascript:updateUserInfo()" href="javascript:void 0;" class="complain-submit">提交</a>
                                        </td>
                                    </tr>
    
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
    
            </div>
        </div>
    
        <!-- 账号安全 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 10">
            <div class="new_order_list">
                <div class="n-title">账户安全</div>
                <div class="new-safe-level pt20">
                    安全级别：
                    <div class="n_per_bar" style="width: 100px;"><span style="width: 33%;"></span></div>
                    <span style="color: #C0A369;" class="pl20">低级</span>
                    <span class="safe_bar low_sf"></span>
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
                        验证后，可用于快速找回登录密码。
                        <a class="fr" href="/validate/validateidentity.html?type=mobile">立即验证</a>
                    </div>
                </div>
    
                <div class="new-change-code clearfix" hidden="hidden">
                    <div class="can-tit fl tit_03">
                        支付密码
                    </div>
                    <div class="can-det">
                        设置支付密码可用于进行预存款支付。
    
                        <!-- 没有手机验证手机 -->
                        <a class="fr" href="javascript:;" onclick="dia(1)">设置</a>
                    </div>
                </div>
    
            </div>
        </div>
    
        <!-- 消费记录 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 11">
            <div class="new_order_list">
                <div class="n-title">消费记录</div>
                <div class="ex-bar-total">
                    近一年的实际消费额：<span class="f16"> $0.00</span>
                </div>
                <div class="tagMenu order-menu">
                    <ul class="menu clearfix">
                        <li class="current" onclick="onselectMonth('',1)"><a href="javascript:;">近三个月记录</a></li>
                        <li onclick="onselectMonth('',2)"><a href="javascript:;">三个月前数据</a></li>
                    </ul>
                </div>
    
                <div class="content">
                    <div class="layout" id="No0">
                        <table class="bought-table mt10">
                            <thead>
                                <tr>
                                    <th>时间</th>
                                    <th>涉及单号</th>
                                    <th>消费额扣减</th>
                                    <th>消费额增加</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="5" style="height:60px;text-align: center;">暂无消费记录！</td>
                                </tr>
    
                            </tbody>
    
                        </table>
                        <div class="paging_area">
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    
        <!-- 收货地址相关 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 12">
            <div class="air-account-address">
                <div class="n-title">收货地址</div>
                <div class="simple mt20 clearfix">
                    <div class="fl">
                        <button onclick="toaddAddress()">新增收货地址</button>
                        <span class="addressNum-tips ml10">您已创建<span id="addressesNum">0</span>个收货地址，最多可创建<span>10</span>个</span>
                    </div>
                </div>
                <div class="content">
                    <div class="layout" id="No0">
                        <div class="air-addressList">
                            <div style="margin-top:10px;border:1px #e8e8e8 solid; height:40px; text-align: center;line-height:40px;;">
                                暂无收货地址！
                            </div>
    
                        </div>
                        <div class="paging_area">
                        </div>
                    </div>
                </div>
            </div>
        </div>

 <!-- 商品评价 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 13" >
            <div class="air-info-judge">
                <div class="n-title">商品评价</div>
                <div class="content">
                    <div class="layout" id="No0">
                        <table class="air-judge-table mt10">
                            <thead>
                                <tr>
                                    <th width="480">商品信息</th>
                                    <th>购买时间</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="3" style="text-align:center; height:60px;">暂无商品评价！</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="paging_area">
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- 购买咨询 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 14">
            <div class="air-info-consult">
                <div class="n-title">购买咨询</div>
                <div class="tagMenu air-consult-menu">
                    <ul class="menu clearfix">
                        <li onclick="showcon();" class="current"><a href="javascript:;">全部咨询</a></li>
                        <li onclick="showyes();"><a href="javascript:;">已回复咨询</a></li>
                        <li onclick="showno();"><a href="javascript:;">未回复咨询</a></li>
                    </ul>
                </div>
                <div class="content">
                    <div class="layout" id="No0">
                        <table class="air-consult-table mt10">
                            <thead>
                                <tr>
                                    <th width="480">商品信息</th>
                                    <th>咨询内容及回复</th>
                                    <th>最后更新时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="3" style="height:80px; text-align:center;">
                                        暂无咨询记录
                                    </td>
                                </tr>
    
                            </tbody>
                        </table>
                        <div class="paging_area">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- 站内信息 -->
        <div class="new_member-right" v-else-if="this.showWithFIndex == 15">
            <div class="air-info-msg">
                <div class="n-title">站内信息</div>
                <div class="tagMenu air-msg-menu">
                    <ul class="menu clearfix">
                        <li class="current">收到的站内信</li>
                    </ul>
                </div>
                <div class="content">
                    <div class="layout" id="No0">
                        <div class="air-msgList">
                            <div class="msg-toolbar mt10 clearfix">
                                <div class="fl">
                                    <input type="checkbox" class="check_all" onclick="selectAll(this);"><label>全选本页</label>
                                    <button class="btn-sm" onclick="readAll()">标记为已读</button>
                                    <button class="btn-sm" style="display:none;" onclick="deleteAll()">删除</button>
                                </div>
                            </div>
                            <ul>
                                <div style="margin-top:10px;border:1px #e8e8e8 solid; height:40px; text-align: center; line-height:40px;;">
                                    暂无站内信息！
                                </div>
                            </ul>
                        </div>
                        <div class="paging_area">
                        </div>
                    </div>
                </div>
    
    
            </div>
        </div>

        <div class="mask" style="display: none;"></div>
        <div class="dialog member-dialog dia2 big-dialog" style="top: 289px; left: 359.5px; display: none;">
            <div class="member-dialog-body">
                <div class="title"><a href="javascript:;" onclick="cls()">×</a><span id="diaTitle">添加收货地址</span></div>
                <div class="add-arr pb10">
                    <form method="post" id="addressFrom" onsubmit="return updateqqq()" action="/customer/address/add">
                        <input type="hidden" name="CSRFToken" id="CSRFToken" value="566657e01528130422418e6c3d01e48a">
                        <!--隐藏会员编号
                    -->
                        <input type="hidden" name="customerId" id="hiden_customerId" value="64470">
                        <table>
                            <tbody>
                                <tr>
                                    <!--隐藏地址编号-->
                                    <input type="hidden" name="addressId" id="hiden_addressId" value="">
                                    <td width="95" align="right"><em>*</em>收货人：</td>
                                    <td>
                                        <input class="text" name="addressName" id="addressName" type="text">
                                        <span id="addressName_tips" class="red"></span>
    
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right"><em>*</em>所在地：</td>
                                    <td>
                                        <select class="select" name="infoProvince" id="infoProvince"><option value="1">北京</option><option value="2">天津</option><option value="3">河北</option><option value="4">山西</option><option value="5">内蒙古</option><option value="6">辽宁</option><option value="7">吉林</option><option value="8">黑龙江</option><option value="9">上海</option><option value="10">江苏</option><option value="11">浙江</option><option value="12">安徽</option><option value="13">福建</option><option value="14">江西</option><option value="15">山东</option><option value="16">河南</option><option value="17">湖北</option><option value="18">湖南</option><option value="19">广东</option><option value="20">广西</option><option value="21">海南</option><option value="22">重庆</option><option value="23">四川</option><option value="24">贵州</option><option value="25">云南</option><option value="26">西藏</option><option value="27">陕西</option><option value="28">甘肃</option><option value="29">青海</option><option value="30">宁夏</option><option value="31">新疆</option><option value="32">香港</option><option value="33">澳门</option><option value="34">台湾</option></select>
                                        <select class="select" name="infoCity" id="infoCity"><option value="1001">北京市</option></select>
                                        <select class="select" name="infoCounty" id="infoCounty"><option value="10004">东城区</option><option value="10006">丰台区</option><option value="10007">石景山区</option><option value="10008">海淀区</option><option value="10009">门头沟区</option><option value="10010">房山区</option><option value="10011">通州区</option><option value="10012">顺义区</option><option value="10013">昌平区</option><option value="10014">大兴区</option><option value="10015">怀柔区</option><option value="10016">平谷区</option><option value="10017">密云县</option><option value="10018">延庆县</option><option value="12999">朝阳区</option><option value="13000">西城区</option><option value="13001">西城区</option></select>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right"><em>*</em>详细地址：</td>
                                    <td>
                                        <input class="text address" style="width: 210px;" name="addressDetail" id="addressDetail" type="text">
                                        <span id="addressDetail_tips" class="red"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right"><em>*</em>手机号：</td>
                                    <td>
                                        <input class="text" name="addressMoblie" id="addressMoblie" type="text">
                                        <span id="addressMoblie_tips" class="red"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">固定电话：</td>
                                    <td>
                                        <input class="text" name="addressPhone" id="addressPhone" type="text" placeholder="例如&quot;025-8816157&quot;">
                                        <span id="addressPhone_tips" class="red"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">邮政编码：</td>
                                    <td>
                                        <input class="text" name="addressZip" id="addressZip" type="text">
                                        <span class="red" id="addressZip_tips"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">地址别名：</td>
                                    <td>
                                        <input class="text" name="addressAlias" id="addressAlias" type="text" placeholder="家/公司/...">
                                        <span class="red" id="addressAlias_tips"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td><button id="submitBtn">保存收货地址</button><a href="javascript:;" class="cancelButton" onclick="cls()">取消</a></td>
                                </tr>
    
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
    export default {
        name: "personIntroCenter",
        data() {
            return {
                activeIndex: "1",
                activeIndex2: "1",
                activeIndex3: "1"
            }
        },
        props: ["showWithFIndex"],
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    
</style>
