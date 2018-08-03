<template>
    <!-- /activity -->
    <div attr-codextype="0" class="marketgroup carts_1901" attr-group="0">
    
        <div class="cart_goods" :id="jsonItemData.cartGoodNum">
            <div class="cart_item">
                <div class="cell g_check" @click="checkBoxChecked">
                    <input type="checkbox" class="g_ckeck mjchecked" name="box" value="1901">
                    <div class="beauty-checkbox"  :id="jsonItemData.checkName" ></div>
                </div>
                <div class="cell g_goods">
                    <div class="img">
                        <a href="/item/4085.html" target="_blank" title="/item/4085.html"><img style="width:100%;" :title="jsonItemData.goodName" :alt="jsonItemData.goodName" :src="jsonItemData.goodPic"></a>
                    </div>
                    <div class="name">
                        <a href="/item/4085.html" target="_blank" title="/item/4085.html">{{jsonItemData.goodName}}</a>
                    </div>
                    <span class="specName">{{jsonItemData.goodSpc}}</span>
                    <div class="cb"></div>
                </div>
                <div class="cell g_stock">
                    <span class="light">{{jsonItemData.isHave}}</span><input type="hidden" class="noProduct" value="1" />
                </div>
                <div class="cell g_price">1980 </div>
                <div class="cell g_count">
                    <div class="count">
                        <a href="javascript:void(0);" class="decrement" data-id="1901" @click="minus">-</a>
                        <input type="text" class="text w30 num_input" :value="jsonItemData.value" data-maxnum="20" :name= "jsonItemData.cartGoodNum">
                        <a href="javascript:void(0);" class="increment" data-maxnum="20" data-id="1901" @click="add">+</a>
                    </div>
                    <div class="red">{{jsonItemData.inventory}}</div>
                </div>
                <div class="cell g_promotion">
                    ￥ <span class="pv_smprice"> {{jsonItemData.goodPrice}} </span>
                    <input type="hidden" value="1980" class="oneprice">
                    <input type="hidden" value="1980" class="smprice">
                </div>
                <div class="cell g_action">
                    <div>
                        <a class="g_delete" href="javascript:void(0);" data-id="1901">删除</a>
                    </div>
                </div>
                <div class="cb"></div>
            </div>
        </div>
        <!-- /cart_goods -->
        <input type="hidden" class="xiaoji" value="0"> <input type="hidden" class="youhui" value="0">
    </div>
 
</template>

<script>
    export default {
        name: 'cartItem',
        data() {
            return {
    
            }
        },
        props:['jsonItemData'],
        methods :{
            add(){
                let name = this.jsonItemData.cartGoodNum;
                let component = $("input[name="+name+"]");
                let number =  parseInt(component.val()) + 1;
                let max = parseInt(component.attr("data-maxnum"));
                if(number <= max){
                    component.val(number);
                }else{
                    this.$toast.center("库存不足");
                } 
            },
            minus(){
                let name = this.jsonItemData.cartGoodNum;
                let component =  $("input[name="+name+"]");
                let number =  parseInt(component.val()) - 1;
                if(number >= 1){
                    component.val(number);
                }else{
                    this.$toast.center("已经是最小值");
                } 
            },
            checkBoxChecked(){
               let elm = $(this.jsonItemData.checkName);
               let hasC = elm.hasClass("active");
               console.log(hasC);
               if(hasC){
                elm.removeClass("active");
               }else{
                elm.addClass("active");
                console.log(elm.hasClass("active"));

               }

            }
        }


    }
</script>

<style>
    
</style>
