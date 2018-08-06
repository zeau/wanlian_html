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
            <li><a href="#">华歌尔</a></li>
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
        <div class="good_main_left_box">
          <h3>浏览该类别最终购买</h3>
          <ul>
            <li>
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
          <a href="javaScrip:void(0)" @click="selecterWithCon(0)">销量<img  :src="salesSrc" alt=""></a>
          <a href="javaScrip:void(0)" @click="selecterWithCon(1)">人气<img  :src="popularSrc" alt=""></a>
          <a href="javaScrip:void(0)" @click="selecterWithCon(2)">上架时间<img  :src="putawaySrc" alt=""></a>
        </div>
        <div class="goods_list clearfix">
          <ul class="goods_list_item clearfix">
            <li class="goodsBox goods_list_li" v-for="(item,index) in shoppingList" :key="index" :data-id="item.id">
              <a class="">
                <img :src="item.imgUrl">
                <h3>
                  {{item.name}}
                </h3>
                <p>
                  <em>￥</em> {{item.price}}
                </p>
                <span :isNone="item.isNone" class="goods_span">
                          {{item.isNoneName}}
                        </span>
              </a>
            </li>
          </ul>
  
          <div class="index_dl clearfix">
            <el-pagination :page-size="9" :pager-count="totolNum" layout="prev, pager, next" :total="pageTotalNum" next-text="下一页" prev-text="上一页" background @current-change="handleCurrentChange" :current-page="currentPage" @prev-click="prevClick" @next-click="nextClick">
            </el-pagination>
          </div>
  
  
        </div>
  
      </div>
    </div>
  
    <!--bottom-->
    <page-footer></page-footer>
  
  </div>
</template>

<style>
  .index_dl li {
    min-width: 35.5px;
    height: 28px;
    width: auto;
    padding: 0 4px;
    margin: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: none;
  }
  
  .index_dl button {
    color: #606266;
  }
  
  .index_dl button :hover {
    color: #409EFF;
  }
</style>

<script>
  import PageFooter from '@/components/footer/pageFooter'
  import PageHeader from '@/components/header/pageHeader'
  import http from '../../Api/baseHttp'
  import URLString from '../../Api/api'
  
  export default {
    data() {
      return {
        shoppingList: [],
  
        pageCount: 1,
        totolNum: 9,
        pageTotalNum: 9,
        currentPage: 1,
  
        salesVolume: 1,
        popularity: 1,
        putawayDt: 1,
        salesSrc: "../../common/images/arrow_up.png",
        popularSrc: "../../common/images/arrow_up.png",
        putawaySrc: "../../common/images/arrow_up.png"
  
      }
    },
    components: {
      PageFooter,
      PageHeader
    },
    created() {
      this.req(1, this.salesVolume, this.popularity, this.putawayDt); //首次进入请求第一页数据
    },
    methods: {
  
      /*
       *分页的点击事件
       *prevClick 上一页
       *nextClick 下一页
       */
      handleCurrentChange(val) {
        // 当前页面变化
        console.log(val);
        this.currentPage = val;
        this.req(val, this.salesVolume, this.popularity, this.putawayDt);
      },
      prevClick(val) {
        this.currentPage = val;
        this.req(val, this.salesVolume, this.popularity, this.putawayDt);
  
      },
      nextClick(val) {
        this.currentPage = val;
        this.req(val, this.salesVolume, this.popularity, this.putawayDt);
      },
  
      /*
       *条件筛选点击事件
       *selecterWithCon 
       */
      selecterWithCon(val) {
        if (val == 0) {
          this.selSrc = this.salesVolume == 0 ? require("../../common/images/arrow_up.png") : require("../../common/images/arrow_up.png");
          this.salesVolume = this.salesVolume == 0 ? 1:0;
        } else if (val == 1) {
          this.popularSrc = this.popularity == 0 ? "../../common/images/arrow_d.png" : "../../common/images/arrow_up.png";
          this.popularity = this.popularity == 0 ? 1:0;
        } else {
          this.putawaySrc = this.putawayDt == 0 ? "../../common/images/arrow_d.png" : "../../common/images/arrow_up.png";
          this.putawayDt = this.putawayDt == 0 ? 1:0;
        }
        this.req(this.currentPage, this.salesVolume, this.popularity, this.putawayDt);
      },
  
      req(pageCurrent, salesVolume = 1, popularity = 1, putawayDt = 1, name = "") {
        let that = this;
        let param = {
          "pageCurrent": pageCurrent,
          "pageSize": 9,
          "salesVolume": salesVolume,
          "popularity": popularity,
          "putawayDt": putawayDt,
          "name": name,
        };
        http.post(URLString.goodsList, param, function SuccessCallBack(res) {
          console.log(res)
  
          if (res.statusCode === 200) {
            for (let i in res.data.row) {
              if (res.data.row[i].isNone == 0) {
                res.data.row[i].isNoneName = '无货'
              } else {
                res.data.row[i].isNoneName = '有货'
              }
            }
            //加载分页内容
            that.pageCount = res.data.pageCount; //分页数目
            that.shoppingList = res.data.rows;
            that.pageTotalNum = that.pageCount * that.totolNum;
  
          }
        })
      }
    }
  }
</script>
