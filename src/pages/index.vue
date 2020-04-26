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
        <div class="ads-box"></div>
        <div class="banner"></div>
        <div class="product-box"></div>
        <service-bar></service-bar>
    </div>
</template>

<script>
    import ServiceBar from "../components/ServiceBar";
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
                }
            }
        },
        components:{
            ServiceBar,
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        }

    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/mixin";
.index {
    .swiper-box {
        width: 1226px;
        margin: 0 auto;
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
}
</style>