<template>
    <!-- /activity -->
    <div attr-codextype="0" class="marketgroup carts_1901" attr-group="0">
    
        <div class="cart_goods" :id="jsonItemData.id">
            <div class="cart_item">
                <div class="cell g_check" @click="checkBoxChecked(false)">
                    <input type="checkbox" class="g_ckeck mjchecked" name="box" value="1901">
                    <div class="beauty-checkbox" :id="'beautyCheck'+jsonItemData.index"></div>
                </div>
                <div class="cell g_goods">
                    <div class="img">
                        <a href="/item/4085.html" target="_blank" title="/item/4085.html"><img style="width:100%;" :title="jsonItemData.imgUrl" :alt="jsonItemData.name" :src="jsonItemData.imgUrl"></a>
                    </div>
                    <div class="name">
                        <a href="/item/4085.html" target="_blank" title="/item/4085.html">{{jsonItemData.name}}</a>
                    </div>
                    <span class="specName">{{jsonItemData.goodSpc}}</span>
                    <div class="cb"></div>
                </div>
                <div class="cell g_stock">
                    <span class="light">{{jsonItemData.isHave}}</span><input type="hidden" class="noProduct" value="1" />
                </div>
                <div class="cell g_price">{{jsonItemData.commodityCount}}</div>
                <div class="cell g_count">
                    <div class="count">
                        <a href="javascript:void(0);" class="decrement" data-id="1901" @click="minus">-</a>
                        <input type="text" class="text w30 num_input" :value="jsonItemData.value" :data-maxnum="jsonItemData.commodityCount" :name="jsonItemData.index +'cartGoodNum'">
                        <a href="javascript:void(0);" class="increment" :data-maxnum="jsonItemData.commodityCount" :data-id="jsonItemData.id" @click="add">+</a>
                    </div>
                    <div class="red">{{jsonItemData.inventory}}</div>
                </div>
                <div class="cell g_promotion">
                    ￥ <span class="pv_smprice" :id="jsonItemData.index +'index'"> {{jsonItemData.price}} </span>
                    <input type="hidden" value="1980" class="oneprice">
                    <input type="hidden" value="1980" class="smprice">
                </div>
                <div class="cell g_action">
                    <div>
                        <a class="g_delete" href="javascript:void(0);" data-id="1901" @click="delItem">删除</a>
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
  import http from '../../Api/baseHttp'
  import URLString from '../../Api/api'
    export default {
        name: 'cartItem',
        data() {
            return {
                sumMoney: 0
            }
        },
        props: ['jsonItemData'],
        created() {
            this.jsonItemData.value = 1;
        },
        methods: {
            add() {
                let elm = $("#" + "beautyCheck" + this.jsonItemData.index);
                let name = this.jsonItemData.index + 'cartGoodNum';
                let component = $("input[name=" + name + "]");
                let number = parseInt(component.val()) + 1;
                let max = parseInt(component.attr("data-maxnum"));
                if (number <= max) {
                    component.val(number);
                } else {
                    this.$toast.center("库存不足");
                    return;
                }
    
                let pri = $("#" + this.jsonItemData.index + "index");
                let hasC = elm.hasClass("active");
                if (hasC) {
                    let num = Number(pri.text());
                    this.sumMoney = this.sumMoney - num * 1;
                    let param = {
                        "money": num * 1,
                        "isAdd": true
                    }
                    this.$emit('sumMoney', param);
                }
    
            },
            minus() {
                let elm = $("#" + "beautyCheck" + this.jsonItemData.index);
                let name = this.jsonItemData.index + 'cartGoodNum';
                let component = $("input[name=" + name + "]");
                let number = parseInt(component.val()) - 1;
                if (number >= 1) {
                    component.val(number);
                } else {
                    this.$toast.center("已经是最小值");
                    return;
                }
    
                let pri = $("#" + this.jsonItemData.index + "index");
                let hasC = elm.hasClass("active");
                if (hasC) {
                    let num = Number(pri.text());
                    this.sumMoney = this.sumMoney - num * 1;
                    let param = {
                        "money": num * 1,
                        "isAdd": false
                    }
                    this.$emit('sumMoney', param);
                }
    
            },
    
            //checkBox点击事件
            checkBoxChecked() {
                let elm = $("#" + "beautyCheck" + this.jsonItemData.index);
                let pri = $("#" + this.jsonItemData.index + "index");
    
                let name = this.jsonItemData.index + 'cartGoodNum';
                let component = $("input[name=" + name + "]");
                let number = parseInt(component.val());
                console.log(number);
                let hasC = elm.hasClass("active");
                if (hasC) {
                    elm.removeClass("active");
                    if (this.sumMoney != 0) {
                        let num = Number(pri.text());
                        this.sumMoney = this.sumMoney - num * number;
                        let param = {
                            "money": num * number,
                            "isAdd": false
                        }
                        this.$emit('sumMoney', param);
                    }
                } else {
                    let num = Number(pri.text());
                    console.log(this.sumMoney);
                    this.sumMoney = this.sumMoney + num * number;
                    elm.addClass("active");
                    console.log(elm.hasClass("active"));
                    let param = {
                        "money": num * number,
                        "isAdd": true
                    }
                    this.$emit('sumMoney', param);
                }
            },
    
            checkAll(isCheck) {
                let elm = $("#" + "beautyCheck" + this.jsonItemData.index);
                let hasC = elm.hasClass("active");
                let pri = $("#" + this.jsonItemData.index + "index");
    
                let name = this.jsonItemData.index + 'cartGoodNum';
                let component = $("input[name=" + name + "]");
                let number = parseInt(component.val());
    
                if (isCheck == true) {
                    if (!hasC) {
                        elm.addClass("active");
                        let num = Number(pri.text());
                        let param = {
                            "money": num * number,
                            "isAdd": true
                        }
                        this.$emit('sumMoney', param);
                    }
                } else {
                    if (hasC) {
                        elm.removeClass("active");
                        let num = Number(pri.text());
                        let param = {
                            "money": num * number,
                            "isAdd": false
                        }
                        this.$emit('sumMoney', param);
                    }
                }
    
            },
            delItem() {
                var that = this;
                this.$confirm('此商品将从购物车永久删除，是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then((result) => {
                    console.log(result);
                    if (result == "confirm") {
                        var delArr = [this.jsonItemData.id];
                        console.log(delArr);
                        that.$emit('dodelBatch', delArr);
                    } else {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    }
                });
            },
            //删除的点击事件
            dodelBatch(ids) {
                let param = {
                    "ids": ids
                };
                http.post(URLString.deleteShoppingCartList, param, function successCallBack(res) {
                    console.log(res);
                    if (res.data.statusCode == 200) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    } else {
                        this.$message({
                            type: 'error',
                            message: '删除失败!'
                        });
                    }
                });
            },
    
    
        }
    }
</script>

<style>
    
</style>
