<template>
    <div :class="productClass">
        <div class="container">
            <div class="con_left">
                {{title}}
            </div>
            <div class="con_right">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <div class="btn" @click="inBuy">立即购买</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductParam",
        data() {
            return {
                scrollNum:'',
                productClass:'productParam',
            }
        },
        props:{
            title:String
        },
        methods:{
            scrollfun() {
                this.scrollNum = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if(this.scrollNum>152){
                    this.productClass = 'productParam isFixed';
                }else{
                    this.productClass = 'productParam';
                }
            },
            inBuy() {
                let id = this.$route.params.id;
                this.$router.push(`/detail/${id}`)
            },

        },
        mounted() {
            window.addEventListener("scroll", this.scrollfun);
        },
        destroyed() {
            window.removeEventListener("scroll", this.scrollfun,false)
        }
    }
</script>

<style lang="scss" scoped>
 .productParam{
     width: 100%;
     background: white;
     z-index: 9;
     .container {
         width: 1226px;
         height: 71px;
         margin: 0 auto;
         display: flex;
         justify-content: space-between;
         align-items: center;

         .con_left {
             font-size: 18px;
             font-weight: bold;
             line-height: 71px;

         }
         .con_right {
             a {
                 font-size: 14px;
                 color: #666666;
                 display: inline-block;
                 margin: 0 10px;
             }
             .btn {
                display: inline-block;
                 width: 110px;
                 height: 30px;
                 background: #FF6600;
                 color: white;
                 font-size: 14px;
                 text-align: center;
                 line-height: 30px;
                 cursor: pointer;
             }
         }
     }
 }
    .isFixed {
        position: fixed;
        top: 0;
        box-shadow:5px 5px 5px #cccccc;
    }
</style>