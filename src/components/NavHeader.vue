<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-else @click="login">登陆</a>
                    <a href="javascript:;" v-if="username">我的订单</a>

                    <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                                <ul>

                                    <li class="product" v-for="(item,index) in resList" :key="index">
                                        <a :href="'/#/product/:'+item.id" target="_blank">
                                            <div class="pro-img">
                                                <img :src="item.mainImage" alt="">
                                            </div>
                                            <div class="pro-name">{{item.name}}</div>
                                            <div class="pro-price">{{item.price | currency}}</div>
                                        </a>
                                    </li>


                                </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="/" target="_blank">
                                        <div class="pro-img">
                                            <img src="./../assets/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">&1669元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="/" target="_blank">
                                        <div class="pro-img">
                                            <img src="./../assets/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">&1669元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="/" target="_blank">
                                        <div class="pro-img">
                                            <img src="./../assets/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">&1669元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="/" target="_blank">
                                        <div class="pro-img">
                                            <img src="./../assets/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">&1669元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="/" target="_blank">
                                        <div class="pro-img">
                                            <img src="./../assets/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">&1669元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="/" target="_blank">
                                        <div class="pro-img">
                                            <img src="./../assets/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">&1669元</div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavHeader",
        data() {
          return {
            username:'jake',
            resList:[]
          }
        },
        filters:{
            currency(val) {
                if(!val) return '0.00';
                return '￥'+val.toFixed(2)+'元'
            }
        },
        methods:{
            login() {
                this.$router.push('/login')
            },
            getProductList() {
                this.axios.get('/products',{
                    params:{
                        categoryId:100012,
                    }
                }).then((res)=>{
                    if (res.list.length > 6){
                        this.resList = res.list.slice(0,6)
                    }
                })
            },
            goToCart() {
                this.$router.push('/cart')
            }
        },
        mounted() {
            this.getProductList();
        }
    }
</script>

<style scoped lang="scss">
    @import "./../assets/scss/mixin";

    .header {
        .nav-topbar {
            height: 40px;
            line-height: 40px;
            background: #333333;
            .container {
                width: 1226px;
                height: 40px;
                margin: 0 auto;
                @include flex();
                a{
                    display: inline-block;
                    margin-right: 17px;
                    color: #b0b0b0;
                    font-size: 12px;
                }
                .topbar-menu {
                }
                .topbar-user {
                    .my-cart {
                        width: 120px;
                        height: 40px;
                        background: #424242;
                        text-align: center;
                    }
                    .icon-cart {
                        @include bgImg(16px,12px,"./../assets/imgs/icon-cart.png");
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header {

            .container {
                @include flex();
                width: 1226px;
                height: 112px;
                margin: 0 auto;
                position: relative;

                .header-logo {

                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    overflow: hidden;
                    a  {
                        background: #FF6600;
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before {
                            content: ' ';
                            @include bgImg(55px,55px,"./../assets/imgs/mi-logo.png",55px);
                            transition: margin .2s;
                        }
                        &:after {
                            content: ' ';
                            @include bgImg(55px,55px,"./../assets/imgs/mi-home.png",55px);

                        }
                        &:hover:before {
                            margin-left: -55px;
                        }
                    }
                }

                .header-menu {
                    padding-left: 310px;
                    width: 500px;
                    height: 112px;
                    line-height: 112px;

                    .item-menu {
                        cursor: pointer;
                        display: inline-block;
                        margin-right: 20px;
                        font-size: 16px;
                        font-weight: bold;

                        &:hover {
                            color: #FF6600;
                            .children {
                                height: 220px;
                                opacity: 1;
                                z-index: 10;

                            }
                        }

                        .children {
                            overflow:hidden;
                            display: inline-block;
                            width: 1226px;
                            height: 0px;
                            opacity: 0;
                            position: absolute;
                            top: 112px;
                            left: 0;
                            box-sizing: border-box;
                            border: 1px solid #e5e5e5;
                            background: #ffffff;
                            transition: all .5s;
                            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);;

                            .product {
                                display: inline-block;
                                width: 16.6%;
                                height: 220px;
                                position: relative;

                                &:before{
                                    content: ' ';
                                    position: absolute;
                                    top: 40px;
                                    right: 0;
                                    height: 100px;
                                    border-left: 1px solid #cccccc;
                                }
                                &:last-child:before{
                                    display: none;
                                }

                                .pro-img {
                                    text-align: center;
                                    height: 125px;
                                    margin-top: 30px;
                                    /*border-right: 1px solid #cccccc;*/
                                    img {

                                        height: 111px;

                                    }

                                }

                                .pro-name {
                                    font-size: 12px;
                                    line-height: 12px;
                                    text-align: center;
                                    color: #333333;
                                    margin-bottom: 10px;
                                }
                                .pro-price {
                                    font-size: 12px;
                                    line-height: 12px;
                                    text-align: center;
                                    color: #FF6600;
                                }
                            }
                        }
                    }
                }

                .header-search {
                    width: 319px;
                    height: 50px;
                    border: 1px solid #e0e0e0;
                    /*box-sizing: border-box;*/

                    .wrapper {
                        @include flex();
                        input  {
                            width: 264px;
                            height: 50px;
                            padding-left: 15px;
                            box-sizing: border-box;
                            border:none;
                            border-right: 1px solid #e0e0e0;
                        }
                        a {
                            @include bgImg(18px,18px,'./../assets/imgs/icon-search.png');
                            margin-right: 17px;
                        }
                    }
                }

            }
        }
    }


</style>