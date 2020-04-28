<template>
    <div class="index">
        <div class="swiper-box">
            <div class="nav-menu">
                <ul>
                    <li class="nav-item">
                        <a href="javascript:;">手机 电话卡</a>
                        <div class="children">
                            <ul v-for="(item,i) in productList" :key="i">
                                <li v-for="(sub,j) in item" :key="j">
                                    <a :href="'/#/product/'+sub.id">
                                        <img :src="sub.img">
                                        {{sub.name}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:;">电视 盒子</a>
                        <div class="children">
                            <ul v-for="(item,i) in productList" :key="i">
                                <li v-for="(sub,j) in item" :key="j">
                                    <a :href="'/#/product/'+sub.id">
                                        <img :src="sub.img">
                                        {{sub.name}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:;">笔记本 平板</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:;">家电 插线板</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:;">出行 穿戴</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:;">智能 路由器</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:;">电源 配件</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:;">生活 箱包</a>
                    </li>
                </ul>
            </div>
            <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="(item,index) in swiperList" :key="index">
                        <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
                    </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
                <div class="swiper-button-next" slot="button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
                <div class="swiper-pagination" slot="pagination"></div>

            </swiper>

        </div>
        <div class="ads-box">
            <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
                <img :src="item.img">
            </a>
        </div>
        <div class="banner">
            <a :href="'/#/product/'+item.id" v-for="(item,index) in bannerList" :key="index">
                <img :src="item.img">
            </a>
        </div>
        <div class="product-box">
            <div class="container">
                <h3>手机</h3>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35"><img src="/imgs/mix-alpha.jpg" alt=""></a>
                    </div>
                    <div class="list-box">
                        <ul class="list" v-for="(item,i) in proList" :key="i">
                            <li class="item" v-for="(sub,j) in item">
                                <span>新品</span>
                                <img v-lazy="sub.mainImage" alt="">
                                <p class="name">{{sub.name}}</p>
                                <p class="describe">{{sub.subtitle}}</p>
                                <p class="price" @click="ToCart(sub.id)">{{sub.price}}元</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <!--是否显示-->
        <!--按钮样式，1:small 2:middle  3:large-->
        <!--左上角标题-->
        <Modal
                :isModalShow="isModalShow"
                isShow="1"
                isBtn="3"
                isBtnText="查看购物车"
                isHref="/cart"
                isTitle="提示"
                @cancel="isModalShow=false"
        ><span slot="dia-body">商品添加成功</span></Modal>
    </div>
</template>

<script>
    import ServiceBar from "../components/ServiceBar";
    import Modal from "../components/Modal";
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "index",
        data() {
            return {
                productList:[
                    [
                        {
                            id:30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9'
                        },{
                            id:31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版'
                        },{
                            id:32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro'
                        },{
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区'
                        }
                    ],[
                        {
                            id:30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9'
                        },{
                            id:31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版'
                        },{
                            id:32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro'
                        },{
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区'
                        }
                    ],[
                        {
                            id:30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9'
                        },{
                            id:31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版'
                        },{
                            id:32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro'
                        },{
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区'
                        }
                    ],[
                        {
                            id:30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9'
                        },{
                            id:31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版'
                        },{
                            id:32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro'
                        },{
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区'
                        }
                    ],[
                        {
                            id:30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9'
                        },{
                            id:31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版'
                        },{
                            id:32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro'
                        },{
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区'
                        }
                    ],[
                        {
                            id:30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9'
                        },{
                            id:31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版'
                        },{
                            id:32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro'
                        },{
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区'
                        }
                    ]
                ],
                swiperList:[
                    {
                        id:42,
                        img:'/imgs/slider/slide-1.jpg'
                    },
                    {
                        id:43,
                        img:'/imgs/slider/slide-2.jpg'
                    },
                    {
                        id:44,
                        img:'/imgs/slider/slide-3.jpg'
                    },
                    {
                        id:'',
                        img:'/imgs/slider/slide-4.jpg'
                    },
                    {
                        id:'',
                        img:'/imgs/slider/slide-5.jpg'
                    },

                ],
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',       //这里是下面的那些点点
                        clickable: true                 // 允许点击小圆点跳转
                    },
                    autoplay: {                         //自动轮播
                        delay: 3000,
                        disableOnInteraction: false     // 手动切换之后继续自动轮播
                    },
                    loop: true,                         //环路
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    effect : 'cube',
                    cubeEffect: {
                        shadowOffset: 80,
                        shadowScale: 0.6
                    },
                },
                adsList:[
                    {
                        id:33,
                        img:'/imgs/ads/ads-1.png'
                    },
                    {
                        id:34,
                        img:'/imgs/ads/ads-2.jpg'
                    },
                    {
                        id:35,
                        img:'/imgs/ads/ads-3.png'
                    },
                    {
                        id:36,
                        img:'/imgs/ads/ads-4.jpg'
                    },
                ],
                bannerList:[
                    {
                        id:33,
                        img:'/imgs/banner-1.png'
                    }
                ],
                proList:[],
                res:[],
                isModalShow:false
            }
        },
        components:{
            Modal,
            ServiceBar,
            Swiper,
            SwiperSlide,
        },
        directives: {
            swiper: directive
        },
        methods: {
            proListfun() {
                this.axios.get('/products',{
                    params:{
                        categoryId:100012,
                        pageSize:14
                    }
                }).then((res)=>{
                    res.list = res.list.slice(6,14)
                    this.proList = [res.list.slice(0,4),res.list.slice(4,8)]
                })
            },
            ToCart(id) {
                this.isModalShow=true;
            },
        },
        mounted() {
            this.proListfun();
        }

    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/mixin";
.index {
    .swiper-box {
        width: 1226px;
        margin: 0 auto;
        z-index: 9;
        .swiper-button-prev {
            padding-left: 260px;
        }
        .nav-menu {
            width: 264px;
            height: 451px;
            position: relative;
            position: absolute;
            z-index: 9;
            padding: 26px 0;
            box-sizing: border-box;
            background: rgba(0,0,0,.5);


            .nav-item {
                height: 50px;
                line-height: 50px;
                padding-left: 40px;

                &:hover {
                    background: #FF6600;
                    .children {
                        display: block;
                    }
                }

                a {
                    display: block;
                    font-size: 16px;
                    color: #ffffff;
                    &:after {
                        content: ' ';
                        @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                        position: absolute;
                        right: 30px;
                        margin-top: 18px;
                    }
                }
                .children {
                    display: none;
                    width: 962px;
                    height: 451px;
                    background: #ffffff;
                    position: absolute;
                    top: 0;
                    right: -962px;
                    ul {
                        display: flex;
                        margin-left: 40px;
                        height: 75.1px;
                        line-height: 75.1px;
                        li {
                            display: inline-block;
                            flex: 1;
                            img {
                                width: 42px;
                                height: 35px;
                                vertical-align: middle;
                            }
                            a {
                                color: #333333;
                            }
                        }
                    }
                }

            }
        }
        .swiper-container {

            height: 451px;
            img {
                width: 100%;
                height: 451px;
            }
        }
    }
    .ads-box {
        width: 1226px;
        height: 167px;
        display: flex;
        justify-content: space-between;
        margin: 20px auto 40px;

        img {
            width: 296px;
            height: 100%;
            flex: 1;
        }
    }
    .banner {
        width: 1226px;
        height: 130px;
        margin: 0 auto 50px;
        img {
            width: 1226px;
            height: 130px;
        }
    }
    .product-box {
        background: #f5f5f5;
        padding-bottom: 50px;
        .container {
            width: 1226px;
            margin: 0 auto;
            h3 {
                font-size: 22px;
                padding: 20px 0;
            }
            .wrapper {
                display: flex;
                justify-content: space-between;
                .banner-left {
                    margin-right: 10px;
                    img {
                        width: 224px;
                        height: 619px;
                    }
                }
                .list-box {
                    .list {
                        margin-bottom: 13px;
                        &:last-child {
                            margin-bottom: 0;
                        }
                        .item {
                            display: inline-block;
                            width: 236px;
                            height: 302px;
                            background: #ffffff;
                            /*position: relative;*/
                            margin-right: 13px;
                            &:last-child {
                                margin-right: 0;
                            }
                            img {
                                width: 236px;
                                height: 195px;
                            }
                            span {
                                width: 67px;
                                height: 24px;
                                display: block;
                                /*position: absolute;*/
                                text-align: center;
                                font-size: 14px;
                                color: #ffffff;
                                margin: 0 auto;
                                background: #FF6600;

                            }
                            .name {
                                font-size: 14px;
                                text-align: center;
                                font-weight: bold;
                            }
                            .describe {
                                font-size: 12px;
                                text-align: center;
                                color: #999999;
                            }
                            .price {
                                vertical-align: middle;
                                font-size: 14px;
                                color: #FF6600;
                                text-align: center;
                                font-weight: bold;
                                margin-top: 10px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                cursor: pointer;
                                &:after {
                                    content: ' ';
                                    @include bgImg(22px,22px,'/imgs/icon-cart-hover.png')
                                }
                            }
                        }
                    }

                }
            }

        }
    }
}
</style>