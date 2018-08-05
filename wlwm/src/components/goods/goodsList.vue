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
              <li class="goodsBox" v-for="(item,index) in shoppingList" :key="index" :data-id="item.id">
                <a class="">
                  <img :src="item.imgUrl">
                  <h3>
                    {{item.name}}
                  </h3>
                  <p>
                    <em>￥</em>
                    {{item.price}}
                  </p>
                  <span :isNone="item.isNone">
                    {{item.isNoneName}}
                  </span>
                </a>
              </li>
            </ul>

            <div class="paging_area">
              <div class="paging" v-for="(item,index) in pageList" :key="index">
                <a href="javaScrip:void(0)" :class="item.active" @click="clickIndex(this)">{{item.indexName}}</a>
              </div>
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
  import http from '../../Api/baseHttp'
  import URLString from '../../Api/api'

    export default {
        data() {
            return {
              logourl : 'src/assets/logo.jpg',
              shoppingList:[],
              pageList:[],
              pageindex:1
            }
        },
        components:{
          PageFooter,
          PageHeader
        },
        created(){
          this.req(1);//首次进入请求第一页数据
        },
        methods :{

        clickIndex(that){
            console.log(that);
            let num = Number(that.text());
            this.req(num);
        },


          req(pageCurrent){
          let that = this;
          let param = {
            "pageCurrent":pageCurrent,
            "pageSize":9,
            "salesVolume":1,
            "popularity":1,
            "putawayDt":1,
            "name":"",
          };
          http.post(URLString.goodsList,param,function SuccessCallBack(res){
            console.log(res)
            //设置pageCount
            let arr = [
              {
                active:"no_pages",
                indexName:"上一页"
              },
              {
                active:"pg_next",
                indexName:"下一页"
              }
            ];
            
            if(res.statusCode === 200){
              for(let i in res.data.row){
                if(res.data.row[i].isNone == 0){
                  res.data.row[i].isNoneName = '无货'
                }else{
                  res.data.row[i].isNoneName = '有货'
                }
              }
              //加载分页内容
             for (let index = 0; index < res.data.pageCount; index++) {
               let elm = {};
               if (index + 1 == pageCurrent) {
                elm =  {
                active:"num_cur prev",
                indexName:pageCurrent
              }

              } else {

                  elm = {
                    active:"num",
                    indexName:index + 1
                   }

               } 
               arr.splice(index + 1,0,elm);
             }
             that.pageList = arr;
             console.log(arr);
            }
            that.shoppingList = res.data.rows;            
          })
          }
        }
    }
</script>
