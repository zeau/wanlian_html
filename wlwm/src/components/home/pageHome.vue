<template>
  <div class="pageHome">
    <!-- 头部 -->
    <page-header></page-header>
    <!--轮播-->
    <el-carousel trigger="click" height="450px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <router-link to="/goodsList" :data-id="item.ext"><img :src="item.val"/></router-link>
      </el-carousel-item>
    </el-carousel>
    <!--展示部分-->
    <div class="container containerTop">
      <div class="louceng">
        <div class="index_title"><span>热门活动</span><span>Hot Event</span></div>
        <div class="part01 row">
          <div class="col-925">
            <div class="row">
              <div class="col-650">
                <div class="life_service">
                  <div class="body">
                    <div id="lifeService">
                      <el-carousel :interval="5000" arrow="always" height="470px">
                        <el-carousel-item v-for="(item , index) in banners2" :key="index">
                          <img :src="item.val" :data-id="item.ext"/>
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-275">
                <a href="goods/searchproduct2.html?searchType=1&amp;title=希思黎" target="_blank"><img class="lazy hot-img-01" alt="" :src="hotActivitys.hotActivity1.url" :data-id="hotActivitys.hotActivity1.id"/></a>
                <a href="goods/searchproduct2.html?searchType=1&amp;title=兰芝" target="_blank"><img class="lazy hot-img-02" alt="" :src="hotActivitys.hotActivity2.url" :data-id="hotActivitys.hotActivity2.id"/></a>
              </div>
            </div>
            <div class="row">
              <div class="col-24">
                <a href="goods/searchproduct2.html?searchType=1&amp;title=ECCO" target="_blank">
                  <img class="lazy hot-img-03" alt="" :src="hotActivitys.hotActivity3.url" :dat-id="hotActivitys.hotActivity3.id"/>
                </a>
              </div>
            </div>
          </div>
          <div class="col-275">
            <a href="goods/searchproduct2.html?searchType=1&amp;title=安悦" target="_blank">
              <img class="lazy hot-img-04" alt="" :src="hotActivitys.hotActivity4.url" :dat-id="hotActivitys.hotActivity4.id"/>
            </a>
            <a href="goods/searchproduct2.html?searchType=1&amp;title=迪柯尼" target="_blank">
              <img class="lazy hot-img-05" alt="" :src="hotActivitys.hotActivity5.url" :dat-id="hotActivitys.hotActivity5.id"/>
            </a>
            <a href="goods/searchproduct2.html?searchType=1&amp;title=黄色小鸭" target="_blank">
              <img class="lazy hot-img-06" alt="" :src="hotActivitys.hotActivity6.url" :dat-id="hotActivitys.hotActivity6.id"/>
            </a>
          </div>
        </div><!--part01 row-->

        <div class="index_title"><span>本周推荐</span><span>Luxury Goods</span></div>
        <div class="special_buy">
          <div class="body">
            <div class="colFirst">
              <div id="lifeService_02">
                <a href="goods/searchproduct2.html?searchType=1&amp;title=SK-II" target="_blank"><img class="lazy" :src="weekRecommend.weekRecommend1.url" :data-id="weekRecommend.weekRecommend1.id"/></a>
              </div>
            </div>
            <div class="colMid mid-img-box">
              <div class="row">
                <div class="col-block">
                  <a href="goods/searchproduct2.html?searchType=1&amp;title=左天奴" target="_blank"><img class="lazy" alt="" :src="weekRecommend.weekRecommend2.url" :data-id="weekRecommend.weekRecommend2.id"/></a>
                </div>
                <div class="col-block">
                  <a href="goods/searchproduct2.html?searchType=1&amp;title=SUSSI" target="_blank"><img class="lazy" alt="" :src="weekRecommend.weekRecommend3.url" :data-id="weekRecommend.weekRecommend3.id"/></a>
                </div>
                <div class="col-block">
                  <a href="goods/searchproduct2.html?searchType=1&amp;title=新秀丽" target="_blank"><img class="lazy" alt="" :src="weekRecommend.weekRecommend4.url" :data-id="weekRecommend.weekRecommend4.id"/></a>
                </div>
                <div class="col-block">
                  <a href="goods/searchproduct2.html?searchType=1&amp;title=露安适" target="_blank"><img class="lazy" alt="" :src="weekRecommend.weekRecommend5.url" :data-id="weekRecommend.weekRecommend5.id"/></a>
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
                <!-- <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522377787139.jpg"/> -->
                <img :src="goodsUrl.goodsUrl1.url" data-id="goodsUrl.goodsUrl1.id"/>
              </div>
            </div>
            <div class="col-18">
              <div class="floor_slide" id="floorSlide01">
                <div>
                  <a href="goods/searchproduct2.html?searchType=1&amp;title=积家" target="_blank">
                    <!-- <img alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522394408133.jpg"/> -->
                    <img :src="goodsUrl.goodsUrl2.url" data-id="goodsUrl.goodsUrl2.id"/>
                  </a>
                </div>
                <!-- <div><a href="goods/searchproduct2.html?searchType=1&amp;title=万国" target="_blank"><img
                  alt="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201803/1522395779562.jpg"/></a></div> -->
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
              <span>我的函美</span>
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
      // banners: [
      //   { imgUrl: lunbo1 ,link:"/goodsList"},
      //   { imgUrl: lunbo2 ,link:"/goodsDetail"},
      // ],
      banners:[],
      // banners2: [
      //   { imgUrl2: xlunbo1 },
      //   { imgUrl2: xlunbo2 },
      // ],
      weekRecommendImg:[],
      goodsUrl:{
        goodsUrl1:{
          url:'',
          id:''
        },
        goodsUrl2:{
          url:'',
          id:''
        }
      },
      banners2:[],
      hotActivitys:{
        hotActivity1:{
          url:'',
          id:''
        },
        hotActivity2:{
          url:'',
          id:''
        },
        hotActivity3:{
          url:'',
          id:''
        },
        hotActivity4:{
          url:'',
          id:''
        },
        hotActivity5:{
          url:'',
          id:''
        },
        hotActivity6:{
          url:'',
          id:''
        },
      },
      weekRecommend:{
        weekRecommend1:{
          url:'',
          id:''
        },
        weekRecommend2:{
          url:'',
          id:''
        },
        weekRecommend3:{
          url:'',
          id:''
        },
        weekRecommend4:{
          url:'',
          id:''
        },
        weekRecommend5:{
          url:'',
          id:''
        },
        
      }

    }
  },
  components: {
    pageHeader,
    pageFooter,
    swiper,
    swiperSlide,

  },
  created () {
    var that = this;
    // 轮播图
    http.post(URLString.banner,{type:"轮播"},function SuccessCallBack(res){
      if(res.statusCode === 200){
        that.banners = res.data;
      }else{
        that.$toast.center(res.message);
      }
    });
    // 热门活动
    http.post(URLString.hotActivity,{type:"HOTEVENT"},function SuccessCallBack(res){
      if(res.statusCode === 200){
        that.banners2 = res.data.slice(0,2);
        that.hotActivitys.hotActivity1.url = res.data.slice(2)[0].val;
        that.hotActivitys.hotActivity1.id = res.data.slice(2)[0].ext;
        that.hotActivitys.hotActivity2.url = res.data.slice(2)[1].val;
        that.hotActivitys.hotActivity2.id = res.data.slice(2)[1].ext;
        that.hotActivitys.hotActivity3.url = res.data.slice(2)[2].val;
        that.hotActivitys.hotActivity3.id = res.data.slice(2)[2].ext;
        that.hotActivitys.hotActivity4.url = res.data.slice(2)[3].val;
        that.hotActivitys.hotActivity4.id = res.data.slice(2)[3].ext;
        that.hotActivitys.hotActivity5.url = res.data.slice(2)[4].val;
        that.hotActivitys.hotActivity5.id = res.data.slice(2)[4].ext;
        that.hotActivitys.hotActivity6.url = res.data.slice(2)[5].val;
        that.hotActivitys.hotActivity6.id = res.data.slice(2)[5].ext;
      }else{
        that.$toast.center(res.message);
      }
    });
    // 本周推荐
    http.post(URLString.weekRecommend,{type:"LUXURYGOODS"},function SuccessCallBack(res){
      if(res.statusCode === 200){
        that.weekRecommendImg = res.data;
        that.weekRecommend.weekRecommend1.url = res.data[0].val;
        that.weekRecommend.weekRecommend1.id = res.data[0].ext;
        that.weekRecommend.weekRecommend2.url = res.data[1].val;
        that.weekRecommend.weekRecommend2.id = res.data[1].ext;
        that.weekRecommend.weekRecommend3.url = res.data[2].val;
        that.weekRecommend.weekRecommend3.id = res.data[2].ext;
        that.weekRecommend.weekRecommend4.url = res.data[3].val;
        that.weekRecommend.weekRecommend4.id = res.data[3].ext;
        that.weekRecommend.weekRecommend5.url = res.data[4].val;
        that.weekRecommend.weekRecommend5.id = res.data[4].ext;
      }else{
        that.$toast.center(res.message);
      }
    });
    //优质商品
    http.post(URLString.goods,{type:"QUALITYGOODS"},function SuccessCallBack(res){
      if(res.statusCode === 200){
        that.goodsUrl.goodsUrl1.url = res.data[0].val;
        that.goodsUrl.goodsUrl1.id = res.data[0].ext;
        that.goodsUrl.goodsUrl2.url = res.data[1].val;
        that.goodsUrl.goodsUrl2.id = res.data[1].ext;
      }else{
        that.$toast.center(res.message);
      }
    });

  }
}
</script>


