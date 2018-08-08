<template>
  <div id="goodsDetail">
    <!-- 头部 -->
    <page-header></page-header>
    <!--商品信息-->
    <div class="container clearfix">
  
      <div class="product_wp mt10 clearfix">
        <div class="img_preview fl">
          <!--大图部分-->
          <div class="big_img">
            <a class="cloud-zoom" id="zoom" rel="adjustX:10,adjustY:0" href="">
              <img alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/main/Z_01.jpg?x-oss-process=image/resize,w_500" width="400" height="400" />
            </a>
          </div>
          <!--/big_img-->
          <!--小图部分-->
          <div class="thumb_img clearfix mt10 pr">
            <div class="thumb_scroll_wp">
              <ul id="smallImage" class="clearfix">
                <li class="cur">
                  <a class="cloud-zoom-gallery" href="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/main/Z_01.jpg" rel="useZoom:'zoom',smallImage:'https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/main/Z_01.jpg?x-oss-process=image/resize,w_500'">
                    <img alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/main/Z_01.jpg?x-oss-process=image/resize,w_50" width="50" height="50" />
                  </a>
                </li>
              </ul>
            </div>
            <a class="thumb_scroll_prev disabled" href=""></a>
            <a class="thumb_scroll_next disabled" href=""></a>
          </div>
          <!--分享链接-->
          <div class="thumb_op clearfix pr">
            <div class="share_wp">
              <!-- JiaThis Button BEGIN -->
              <div class="share-goodbtn">
                <span><i></i>分享</span>
                <div class="jiathis_style none">
                  <a class="jiathis_button_qzone"></a>
                  <a class="jiathis_button_tsina"></a>
                  <a class="jiathis_button_cqq"></a>
                  <a class="jiathis_button_renren"></a>
                  <a class="jiathis_counter_style"></a>
                </div>
              </div>
  
            </div>
            <a class="store-goods cllect_btn" product_id="1">
              <del><i></i>关注该商品</del>
            </a>
          </div>
          <!--/thumb_op-->
        </div>
        <!--/img_preview-->
        <!--商品详细信息-->
        <div class="product_info fl ml30 mt10">
          <input type="hidden" id="goodsId" value="1" />
          <input type="hidden" id="productId" value="1" />
          <input type="hidden" id="brandId" value="765" />
          <input type="hidden" id="catId" value="511" />
          <input type="hidden" id="isCustomerDiscount" value="0">
          <input type="hidden" class="bread_crumb_cat_id" value="511" data-role="detail" />
          <div class="pd_title">
            <h2>{{jsonData.name}}</h2>
            <strong></strong>
          </div>
          <!--/pd_title-->
  
          <input type="hidden" id="disId" value="3002" />
          <input type="hidden" id="followPrice" value="1" />
  
          <dl class="pd_info clearfix mt10">
            <div class="pd-bg clearfix">
              <div class="cxyj" style="display:none;">
                <dt>原&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：</dt>
                <dd><del class="f14 col6">1.00</del></dd>
              </div>
              <dt id="priceflr">商城价：</dt>
              <dd>
                <span>¥ </span>
                <span class="main_price">{{price}}</span>
                <span style="color: red;" id="zk_price">&nbsp;</span>
                <input type="hidden" id="mprice" value="1.00" />
              </dd>
  
              <dt class="product_market_name" style="display: none">促销：</dt>
              <dd class="product_market" style="display: none"></dd>
            </div>
            <div class="pl15 pr20 pt10">
              <!--11:00前完成下单，预计今天（6月27日）送达-->
              <dt>服务：</dt>
              <dd style="font-size: 14px;font-weight: bold;">由“线上观前店”直接销售和发货，并提供售后服务</dd>
            </div>
          </dl>
  
  
          <dl class="buy_info mt20 clearfix pl20" style="padding-left: 15px;">
            <dt class="spec_name">选择规格：</dt>
            <dd>
              <div class="choose_type clearfix" style="width:auto;">
                <a class="choose_item _sku" data-goodstempinfo="1" data-parent="18,19" data-value="20985,310" href="javascript:;" onClick="clickSpec(this,1);">
                  <em>黑色,300X400X160mm</em><b></b>
                </a>
              </div>
            </dd>
            <dt>购买数量：</dt>
            <dd>
              <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </dd>
          </dl>
          <div class="by_cart mt20 clearfix">
            <div class="hasStock" style="display:block;">
              <router-link to="/cart" class="collect_pro mr20 go_buy" product_id="1" product_stock="-32" distinct_id="3002">立即购买</router-link>
              <a class="add_cart" @click="addShoppingCart()" product_id="1" product_stock="-32" distinct_id="3002" href="javascript:;"><i></i>加入购物车</a>
            </div>
            <div class="noStock">
              <a class="dis_cart" href="" hidden="hidden"><i></i>加入购物车</a>
              <a class="arrival_notice"><i></i>到货通知</a>
            </div>
          </div>
          <!--/by_cart-->
        </div>
        <!--/product_info-->
      </div>
      <!--/product_wp-->
  
      <!-- 保存商品参数部分相关参数 -->
      <form id="paramGoodsForm" action="1.html" method="post">
        <input type="hidden" name="chAddress" class="ch_address" value="江苏苏州市姑苏区" />
        <input type="hidden" name="chProvince" class="ch_province" value="江苏" />
        <input type="hidden" name="chCity" class="ch_city" value="苏州市" />
        <input type="hidden" name="chDistinct" class="ch_distinct" value="姑苏区" />
        <input type="hidden" name="distinctId" class="ch_distinctId" value="3002" />
        <input type="hidden" class="productStock" value="-32" />
      </form>
  
      <!--详情下半部分-->
      <div class="content clearfix mt10">
        <!--右边-->
        <div class="right_wp fr">
          <div class="product_detail">
  
            <el-tabs type="border-card" v-model="activeName" >
              <el-tab-pane label="商品介绍" style="padding:0;" name="first">
                <div class="details_box ">
                  <div class="details-more fl">
                    <a name="1f"></a>
                    <ul class="pro_introduce clearfix">
                      <li>商品名称：Samsonite/新秀丽时尚新款双肩包高端商务休闲背包潮轻电脑包</li>
                      <li>商品货号：BR609003</li>
                      <li class="skuNo">sku条码：2100891902020</li>
                      <li>店铺：<a href="">线上观前店</a></li>
                      <li>商品品牌：新秀丽</li>
                    </ul>
                    <!--/pro_introduce-->
                    <div class="intro_cont">
                      <div class="detail_show">
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_01.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_02.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_03.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_04.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_05.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_06.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_07.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_08.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_09.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_10.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_11.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_12.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_13.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_14.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                        <p style="word-break: break-all;">
                          <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/BR609003/contont/X_15.jpg?x-oss-process=image/resize,w_750" style="">
                        </p>
                      </div>
                      <!--/detail_show-->
                    </div>
                    <!--/intro_cont-->
                  </div>
                  <!--details-more-->
                </div>
                <!--/details_box-->
  
                <div class="details_box">
                  <table class="parameter_tb w">
                    <tr>
                      <th colspan="2">详细参数</th>
                    </tr>
                  </table>
                  <!--/parameter_tb-->
                </div>
                <!--/details_box-->
              </el-tab-pane>
              <el-tab-pane label="商品评价" style="padding:0;" name="second">
                <div class="details_box">
                  <div class="evaluation_info clearfix mt10">
                    <div class="rate fl tc">
                      <strong><span class="bigHaoPercent">95<b>%</b></span></strong>
                      <br/>
                      <span>好评度</span>
                    </div>
                    <!--/rate-->
                    <div class="percent fl ml20">
                      <dl class="per_info clearfix">
                        <dt>好评<em class="per">(<span class="haoPercent"></span>)</em></dt>
                        <dd>
                          <div class="per_bar"><span class="haoPercentLine"></span></div>
                        </dd>
                      </dl>
                      <dl class="per_info clearfix">
                        <dt>中评<em class="per">(<span class="zhongPercent"></span>)</em></dt>
                        <dd>
                          <div class="per_bar"><span class="zhongPercentLine"></span></div>
                        </dd>
                      </dl>
                      <dl class="per_info clearfix">
                        <dt>差评<em class="per">(<span class="chaPercent"></span>)</em></dt>
                        <dd>
                          <div class="per_bar"><span class="chaPercentLine"></span></div>
                        </dd>
                      </dl>
                    </div>
                    <!--/percent-->
                    <div class="recommend_point fl">
                    </div>
                    <!--/recommend_point-->
                    <div class="publish_cmt fl">
                      <p>您可对已购的商品进行评价</p>
                      <a class="pb_cmt pub_comment" target="_blank" href="../customer/comment.html">发表评论</a>
                    </div>
                    <!--/publish_cmt-->
                  </div>
                  <!--/evaluation_info-->
  
                  <div class="det_title mt10 clearfix">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#999" active-text-color="#57402e">
                      <el-menu-item index="1">全部评论（0）</el-menu-item>
                      <el-menu-item index="2">好评（0）</el-menu-item>
                      <el-menu-item index="3">中评（0）</el-menu-item>
                      <el-menu-item index="4">差评（0）</el-menu-item>
                    </el-menu>
                  </div>
                  <!--/det_title-->
  
                  <div class="comment_wp">
                    <div class="comment_cont" style="display:block">
                      <div class="comment_list">
                        <!-- 评论主体 -->
                      </div>
                      <div class="clearfix mt10" id="sign">
                        <a class="all_cmt fl" target="_blank" href="../comment/1.html">[查看全部评价]</a>
                      </div>
                    </div>
                    <!--/comment_cont-->
                  </div>
                  <!--/comment_wp-->
                  <div class="paging_area">
                    <div class="paging comment_pages">
  
                    </div>
                  </div>
                  <!--/pages-->
                </div>
                <!--/details_box-->
  
              </el-tab-pane>
              <el-tab-pane label="商品咨询" style="padding:0;" name="third">
  
                <div class="details_box">
                  <div class="det_title mt10 clearfix">
                    <el-menu :default-active="activeIndex1" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#999" active-text-color="#ffd04b">
                      <el-menu-item index="1">全部购买咨询</el-menu-item>
                      <el-menu-item index="2">商品咨询</el-menu-item>
                      <el-menu-item index="3">库存配送</el-menu-item>
                      <el-menu-item index="4">支付</el-menu-item>
                      <el-menu-item index="5">发票及配送</el-menu-item>
                      <el-menu-item index="6">促销及赠品</el-menu-item>
                    </el-menu>
                  </div>
                  <!--/det_title-->
                  <div class="consult_box clearfix">
                    <div class="consult_search fl">
                      咨询前请先搜索，方便又快捷：
                      <div class="consult_input mt10 clearfix">
                        <input class="consult_text fl" type="text" placeholder="请输入咨询关键词" />
                        <input class="cs_search_btn fl" type="button" onclick="loadCommentAsk(1,null);" value="搜索" />
                      </div>
                      <!--/consult_input-->
                    </div>
                    <!--/consult_search-->
                    <div class="consult_prompt fl">
                      <b>温馨提示：</b>因厂家更改产品包装、产地或者更换随机附件等没有任何提前通知，且每位咨询者购买情况、提问时间等不同，为此以下回复仅对提问者3天内有效，其他网友仅供参考！若由此给您带来不便请多多谅解，谢谢！
                    </div>
                    <!--/consult_prompt-->
                  </div>
                  <!--/consult_box-->
                  <div class="consult_wp">
                    <div class="consult_cont" style="display:block">
                      <div class="consult_list"></div>
                      <div class="all_consult clearfix tr">
                        <div class="fl">购买之前，如有问题，请<a class="issued_consult ml5" target="_blank" href="../cosult/1.html#pub">[发表咨询]</a></div>
                        <div class="all_consult_tip tr">
                          <em>共<b class="consult_count">0</b>条</em><a class="ml20" target="_blank" href="../cosult/1.html">浏览所有咨询信息»</a>
                        </div>
                      </div>
                    </div>
                    <!--/consult_cont-->
                  </div>
                  <!--/consult_wp-->
                </div>
                <!--/details_box-->
              </el-tab-pane>
            </el-tabs>
  
          </div>
          <!--/product_detail-->
        </div>
        <!--/right_wp-->
  
        <!--左边-->
        <div class="left_wp fl" id="relative-data">
          <div class="business_area">
            <div class="business_info">
              <p class="name">
                <a href="../thirdstoreindex/2">线上观前店</a>
              </p>
              <div class="dp_detail">
                <table>
                  <tr>
                    <td><span class="fl">在线客服：</span> 暂无在线客服</td>
                  </tr>
                </table>
              </div>
              <div class="dp_detail">
                <table>
                  <tr>
                    <td>店铺名称：线上观前店</td>
                  </tr>
                  <tr>
                    <td>店铺地址：</td>
                  </tr>
                  <tr>
                    <td>
                      <div style="float: left;">信用评价：</div>
                      <input id="commentScore" type="hidden" value="4.7" />
                      <div id="commentScoreDiv" style="float: left; background: url(../images/star-red.png) 0 -14px repeat-x; width:75px">&nbsp; </div>
                    </td>
                  </tr>
                </table>
              </div>
              <a href="javascript:void(0)" class="collectstore"><del><i></i>关注店铺</del></a>
              <a href="../thirdstoreindex/2" class="enter_shop" target="_blank"><del><i></i>进入店铺</del></a>
            </div>
            <!-- /business_info -->
          </div>
          <div class="relevant none">
            <div class="title">相关品牌</div>
            <ul class="clearfix pt10 pb10" id="relativeBrandGoods"></ul>
          </div>
          <div class="left_box none">
            <h3>浏览该商品的用户最终购买</h3>
            <ul class="show_list mt10" id="finalBuyGoods"></ul>
          </div>
          <div class="left_box" id="hotSalesGoodsRanking">
            <h3>热销排行榜</h3>
          </div>
        </div>
        <!--/left_wp-->
        <div style="clear:both; height:0;"></div>
      </div>
      <!--/content-->
    </div>
    <!--/container-->
    <!-- pageFooter -->
    <page-footer></page-footer>
  </div>
</template>

<style>
  @import url(../../common/css/index.css);
  .el-tabs__content{
    padding: 0;
  }
</style>

<script>
  import pageHeader from "@/components/header/pageHeader";
  import pageFooter from "@/components/footer/pageFooter";
  import http from "../../Api/baseHttp";
  import URLString from "../../Api/api";
  
  export default {
    data() {
      return {
        jsonData:{},//返回的数据

  
        activeIndex1: "1",
        activeIndex: "1",
        activeName:"first"
      };
    },
  
    components: {
      pageHeader,
      pageFooter
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleChange() {
  
      },
      handleSelect(key, keyPath){
        console.log(key, keyPath);

      },
      addShoppingCart() {
        http.post(URLString.joinShoppingCart, {
          id: this.$route.params.goodInfo.id
        }, function SuccessCallBack(res) {
          if (res.statusCode === 200) {
            alert('成功加入购物车');
          } else {
            alert(res.message);
          }
        })
      }
    },
    created() {
      let that = this;
      // 获取商品信息
      console.log(this.$route.params.goodInfo);
      http.post(URLString.goodsInfo, {
        id: this.$route.params.goodInfo.id
      }, function SuccessCallBack(res) {
        console.log(res);
        that.jsonData = res.data;
      })
    }
  };
</script>
