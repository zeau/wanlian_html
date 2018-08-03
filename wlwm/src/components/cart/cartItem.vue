<template>
    <!-- /activity -->
    <div attr-codextype="0" class="marketgroup carts_1901" attr-group="0">
    
        <div class="cart_goods" :id="jsonItemData.cartGoodNum">
            <div class="cart_item">
                <div class="cell g_check">
                    <input type="checkbox" class="g_ckeck mjchecked" name="box" value="1901">
                    <div class="beauty-checkbox"></div>
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
                        <a href="javascript:void(0);" class="decrement" data-id="1901">-</a>
                        <input type="text" class="text w30 num_input" value="1" data-maxnum="20">
                        <a href="javascript:void(0);" class="increment" data-maxnum="20" data-id="1901">+</a>
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
        props:['jsonItemData']
    }
</script>

<style>
    
</style>
