<template>
  <div class="pageHome">
    <!-- 头部 -->
    <page-header></page-header>
    <!--轮播-->
    <el-carousel trigger="click" height="450px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <router-link to="/goodsList"><img :src="item.imgUrl"/></router-link>
      </el-carousel-item>
    </el-carousel>
    <!--展示部分-->
    <div class="container containerTop">
      <div class="louceng">
        <div class="index_title"><span>热门商品</span><span>Hot Event</span></div>
        <div class="part01 row">
          <div class="col-925"> 
            <div class="row">
              <div class="col-650">
                <div class="life_service">
                  <div class="body">
                    <div id="lifeService">
                      <el-carousel :interval="5000" arrow="always" height="470px">
                        <el-carousel-item v-for="(item , index) in banners2" :key="index">
                          <img :src="item.imgUrl2"/>
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-275" id="life-top-img">
                <a href="goods/searchproduct2.html?searchType=1&amp;title=希思黎" target="_blank"><img class="lazy hot-img-01" alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522318312333.jpg"/></a>
                <a href="goods/searchproduct2.html?searchType=1&amp;title=兰芝" target="_blank"><img class="lazy hot-img-02" alt="" src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1515649690629.jpg"/></a>
              </div>
            </div>
            <div class="row">
              <div class="col-24" id="life-bottom-img">
                <a href="goods/searchproduct2.html?searchType=1&amp;title=ECCO" target="_blank">
                  <img class="lazy hot-img-03" alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522317387291.jpg"/>
                </a>
              </div>
            </div>
          </div>
          <div class="col-275">
            <a href="goods/searchproduct2.html?searchType=1&amp;title=安悦" target="_blank">
              <img class="lazy hot-img-04" alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522313234035.jpg"/>
            </a>
            <a href="goods/searchproduct2.html?searchType=1&amp;title=迪柯尼" target="_blank">
              <img class="lazy hot-img-05" alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522315504735.jpg"/>
            </a>
            <a href="goods/searchproduct2.html?searchType=1&amp;title=黄色小鸭" target="_blank">
              <img class="lazy hot-img-06" alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522315659146.jpg"/>
            </a>
          </div>
        </div><!--part01 row-->

        <div class="index_title"><span>本周推荐</span><span>Luxury Goods</span></div>
        <div class="special_buy">
          <div class="body">
            <div class="colFirst">
              <div id="lifeService_02">
                <a href="goods/searchproduct2.html?searchType=1&amp;title=SK-II" target="_blank"><img class="lazy" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522317932631.jpg"/></a>
              </div>
            </div>
            <div class="colMid mid-img-box">
              <div class="row">
                <div class="col-block">
                  <a href="goods/searchproduct2.html?searchType=1&amp;title=左天奴" target="_blank"><img class="lazy" alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522318255974.jpg"/></a>
                </div>
                <div class="col-block">
                  <a href="goods/searchproduct2.html?searchType=1&amp;title=SUSSI" target="_blank"><img class="lazy" alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522315561618.jpg"/></a>
                </div>
                <div class="col-block">
                  <a href="goods/searchproduct2.html?searchType=1&amp;title=新秀丽" target="_blank"><img class="lazy" alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522318038243.jpg"/></a>
                </div>
                <div class="col-block">
                  <a href="goods/searchproduct2.html?searchType=1&amp;title=露安适" target="_blank"><img class="lazy" alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522313373714.jpg"/></a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="txtSlide">
                <div class="posLeft">
                  <span class="active" onclick="setTxtSlide(this)">SUSSI</span>
                  <span onclick="setTxtSlide(this)">TW Men</span>
                  <span onclick="setTxtSlide(this)">SK-II</span>
                  <span onclick="setTxtSlide(this)">ROLEX</span>
                  <span onclick="setTxtSlide(this)">海蓝之谜</span>
                  <span onclick="setTxtSlide(this)">GUCCI</span>
                  <span onclick="setTxtSlide(this)">STELLA LUNA</span>
                </div>
                <div class="txtSlide_cont">
                  <a class="active" href="onepage/5.html" target="_blank">
                    <img src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516179062172.jpg" alt="">
                  </a>
                  <a href="onepage/6.html" target="_blank">
                    <img src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516178860900.jpg" alt="">
                  </a>
                  <a href="onepage/1.html" target="_blank">
                    <img src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516175997123.jpg" alt="">
                  </a>
                  <a href="onepage/9.html" target="_blank">
                    <img src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516177823697.jpg" alt="">
                  </a>
                  <a href="onepage/7.html" target="_blank">
                    <img src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516177119146.jpg" alt="">
                  </a>
                  <a href="onepage/4.html" target="_blank">
                    <img src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516179922581.jpg" alt="">
                  </a>
                  <a href="onepage/8.html" target="_blank">
                    <img src="http://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1516178111232.jpg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-02">
        <div class="index_title"><span>优质商品</span><span>Quality goods</span></div>
        <div class="floor_adv fuzhuangxiebao row louceng" id="floor_1">
          <div class="floor_links">
            <a href="list/142-141.html"
               target="_blank">进口表</a>
            <a href="list/143-141.html"
               target="_blank">休闲表</a>
            <a href="list/144-141.html"
               target="_blank">钟</a>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="floorLogo">
                <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522377787139.jpg"/>
              </div>
            </div>
            <div class="col-18">
              <div class="floor_slide" id="floorSlide01">
                <div><a href="goods/searchproduct2.html?searchType=1&amp;title=积家" target="_blank"><img
                  alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522394408133.jpg"/></a></div>
                <div><a href="goods/searchproduct2.html?searchType=1&amp;title=万国" target="_blank"><img
                  alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522395779562.jpg"/></a></div>
              </div>
            </div>
          </div>

          <div class="index_line"></div>
        </div>

      </div>
      <!--左侧边固定导航-->
      <div class="toolbar left" style="display: none;">
        <div class="toolbar_tabs toolbar_navs">
          <div class="item toolbar_nav pre">
            <a href="javascript:;">
              <span>导航</span>
            </a>
          </div>
          <div class="item toolbar_nav">
            <a href="index.html#quick-bar1">
              <span>热门活动</span>
            </a>
          </div>
          <div class="item toolbar_nav">
            <a href="index.html#quick-bar2">
              <span>每周推荐</span>
            </a>
          </div>
          <div class="item toolbar_nav">
            <a href="index.html#quick-bar3">
              <span>美妆洗护</span>
            </a>
          </div>
          <div class="item toolbar_nav">
            <a href="index.html#quick-bar4">
              <span>妈妈首选</span>
            </a>
          </div>
          <div class="item toolbar_nav">
            <a href="index.html#quick-bar5">
              <span>珠宝配饰</span>
            </a>
          </div>
        </div>
      </div>

      <div class="toolbar">
        <!--右侧边固定-->
        <div class="toolbar_tabs">
          <div class="item customer_cart">
            <a href="myshoppingcart.html" target="_blank">
              <i class="icons icon-cart2"><span class="shop_num"><em>0</em></span></i>
              <span>购物车</span>
            </a>
          </div>
          <div class="item customer_bag">
            <a href="customer/index.html" target="_blank">
              <i class="icons icon-bag"></i>
              <span>我的万联</span>
            </a>
          </div>
        </div>
        <!--返回顶部-->
        <div class="toolbar_bottom">
          <div class="item">
            <a href="javascript:;" onclick="$('html,body').animate({scrollTop:0},500)">
              <i class="icons icon-top2"></i><span>至顶</span>
            </a>
          </div>
        </div>
        <!--客服-->
        <div class="customer-box">
          <span class="title">客服咨询</span>
          <hr>
          <a href="javascript:;" class="close-cs"></a>
          <p>
            <span class="qq_name">函美客服</span>
            <span class="qq_img">
              <a style="float:right;" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=123456&site=qq&menu=yes">
                <img border="0" src="http://wpa.qq.com/pa?p=2:123456:51" alt="点击这里给我发消息" title="点击这里给我发消息"/>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>

    <!-- pageFooter -->
    <page-footer></page-footer>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../common/css/pageHome.css";

  .el-carousel-item img {
    width: 100%;
  }

</style>


<script>
import pageHeader from '@/components/header/pageHeader'
import pageFooter from '@/components/footer/pageFooter'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import lunbo1 from '../../common/images/lunbo1.jpg'
import lunbo2 from '../../common/images/lunbo2.jpg'
import xlunbo1 from '../../common/images/1522318791044.jpg'
import xlunbo2 from '../../common/images/1522315830910.jpg'

import http from '../../Api/baseHttp'
import URLString from '../../Api/api'

export default {
  name: 'pageHome',
  data () {
    return {
      banners: [
        { imgUrl: lunbo1 ,link:"/goodsList"},
        { imgUrl: lunbo2 ,link:"/goodsDetail"},
      ],
      banners2: [
        { imgUrl2: xlunbo1 },
        { imgUrl2: xlunbo2 },
      ],
    }
  },
  components: {
    pageHeader,
    pageFooter,
    swiper,
    swiperSlide,
  },
  mounted(){ 
    this.fetchData();
  },
  methods:{
     fetchData: function () {
          let param = {};

          http.post(URLString.homeUrl, param, function SuccessCallBack(data) {

            if (data.statusCode === 200) {
              console.log(data);
              //获取到后台返回的数据，更换界面.
    
            } else {
              alert(data.message);
            }
          });
        }
    
  }
  
}
</script>


