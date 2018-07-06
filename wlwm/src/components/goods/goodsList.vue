<template>
    <div id="goodsList">
      <!--head-->
      <page-header></page-header>
      <!--浏览地址-->
      <div class="browseAddress container">
        <span>服饰/</span>
        <span>鞋靴</span>
      </div>
      <!--brand-->
      <div class="brand">
        <dl>
          <dt>品牌</dt>
          <dd>
            <ul class="clearfix">
              <li v-for=""><a href="#">华歌尔</a></li>
              <li><a href="#">华歌尔</a></li>
              <li><a href="#">华歌尔</a></li>
              <li><a href="#">华歌尔</a></li>
              <li><a href="#">华歌尔</a></li>
            </ul>
            <a href="#">收起</a>
          </dd>
        </dl>
      </div>
      <!--main-->
      <div class="good_main container clearfix">
        <div class="good_mian_left">
          <div class="good_main_left_box" v-for="">
            <h3>浏览该类别最终购买</h3>
            <ul>
              <li v-for="">
                <div class="browse_img">
                  <router-link to="/goodsDetail">
                    <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/570984/main/Z_01.jpg">
                  </router-link>
                </div>
                <p class="browse_name">
                  <router-link to="/goodsDetail">SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444</router-link>
                </p>
                <p class="browse_price">
                  ¥ 1980
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="good_main_right">
          <div class="order clearfix">
            <a href="#">销量</a>
            <a href="#">人气</a>
            <a href="#">上架时间</a>
          </div>
          <div class="goods_list clearfix">
            <ul class="goods_list_item clearfix">
              <li class="goodsBox" v-for="">
                <a class="">
                  <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/217143/main/Z_01.jpg">
                  <h3>
                    SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444
                  </h3>
                  <p>
                    <em>￥</em>
                    19800.00
                  </p>
                  <span>
                    有货
                  </span>
                </a>
              </li>
              <li class="goodsBox" v-for="">
                <a class="">
                  <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/570984/main/Z_01.jpg">
                  <h3>
                    SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444
                  </h3>
                  <p>
                    <em>￥</em>
                    19800.00
                  </p>
                  <span>
                    有货
                  </span>
                </a>
              </li>
              <li class="goodsBox" v-for="">
                <a class="">
                  <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1515995764806.jpg">
                  <h3>
                    SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444
                  </h3>
                  <p>
                    <em>￥</em>
                    19800.00
                  </p>
                  <span>
                    有货
                  </span>
                </a>
              </li>
              <li class="goodsBox" v-for="">
                <a class="">
                  <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/430004/main/Z_01.jpg">
                  <h3>
                    SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444
                  </h3>
                  <p>
                    <em>￥</em>
                    19800.00
                  </p>
                  <span>
                    有货
                  </span>
                </a>
              </li>
              <li class="goodsBox" v-for="">
                <a class="">
                  <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1515995490681.jpg">
                  <h3>
                    SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444
                  </h3>
                  <p>
                    <em>￥</em>
                    19800.00
                  </p>
                  <span>
                    有货
                  </span>
                </a>
              </li>
              <li class="goodsBox" v-for="">
                <a class="">
                  <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc/530624/main/Z_01.jpg">
                  <h3>
                    SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444
                  </h3>
                  <p>
                    <em>￥</em>
                    19800.00
                  </p>
                  <span>
                    有货
                  </span>
                </a>
              </li>
              <li class="goodsBox" v-for="">
                <a class="">
                  <img src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201801/1515986134559.jpg">
                  <h3>
                    SUSSI/古色 18春新品 花样早春 红底印花褶褶摆长下裙 28130444
                  </h3>
                  <p>
                    <em>￥</em>
                    19800.00
                  </p>
                  <span>
                    有货
                  </span>
                </a>
              </li>
            </ul>
            <div class="pages clearfix">
              <a href="#">上一页</a>
              <a href="#" class="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">下一页</a>
            </div>
          </div>
        </div>
      </div>

      <!--bottom-->
      <page-footer></page-footer>

    </div>
</template>

<style>

</style>

<script>
  import PageFooter from '@/components/footer/pageFooter'
  import PageHeader from '@/components/header/pageHeader'

    export default {
        data() {
            return {
              logourl : 'src/assets/logo.jpg'
            }
        },
        components:{
          PageFooter,
          PageHeader
        }
    }
</script>
