<template>
    <div class="product">
        <product-param :title="productInfo.name"></product-param>
        <div class="product_bg_1">
            <p class="pro_title">{{productInfo.name}}</p>
            <p class="pro_describe">{{productInfo.subtitle}}</p>
            <a href="javascript:;">全球首款双频 GP</a><span>|</span>
            <a href="javascript:;">骁龙845</a><span>|</span>
            <a href="javascript:;">AI 变焦双摄</a><span>|</span>
            <a href="javascript:;">红外人脸识别</a>
            <p class="pro_price">￥{{productInfo.price}}</p>
        </div>
        <div class="product_bg_2"></div>
        <div class="product_bg_3"></div>
        <div class="swiper_threebox">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(item,index) in swiperImgList" :key="index">
                    <img :src="item.img">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>

            </swiper>
            <p>小米8 AI变焦双摄拍摄</p>
        </div>
        <div class="videoall">
            <p class="video_title1">60帧超慢动作摄影</p>
            <p class="video_title2">慢慢回味每一瞬间的精彩</p>
            <p class="video_describe1">后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！</p>
            <p class="video_describe2">更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
            <div class="videobg" @click="videodown"></div>

            <div class="video_box" v-if="isShow">
                <div class="video_mask"></div>
                <div class="video_con">
                    <span class="video_close" @click="videoup"></span>
                    <video src="/imgs/product/video.mp4" autoplay controls></video>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import ProductParam from "../components/ProductParam";
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "product",
        data() {
            return{
                productInfo: {},
                // isDown:'video_con',
                isShow:false,
                swiperImgList:[{
                    img:'/imgs/product/gallery-2.png'
                }, {
                    img:'/imgs/product/gallery-3.png'
                }, {
                    img:'/imgs/product/gallery-4.png'
                }, {
                    img:'/imgs/product/gallery-5.jpg'
                }, {
                    img:'/imgs/product/gallery-6.jpg'
                }],
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',       //这里是下面的那些点点
                        clickable: true                 // 允许点击小圆点跳转
                    },
                    autoplay: {                         //自动轮播
                        delay: 3000,
                        disableOnInteraction: false     // 手动切换之后继续自动轮播
                    },
                    slidesPerView : 3,
                    spaceBetween : 20,
                    // loop: true,                         //环路
                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },
                    // effect : 'coverflow',
                    // cubeEffect: {
                    //     shadowOffset: 80,
                    //     shadowScale: 0.6
                    // },
                },
            }
        },
        components:{
            ProductParam,
            Swiper,
            SwiperSlide,
        },
        directives: {
            swiper: directive
        },
        methods:{

            getProductInf() {
                let id=this.$route.params.id;
              this.axios.get(`/products/${id}`).then((res)=>{
                    this.productInfo=res
              })
            },
            videodown() {
                this.isShow=true;
                // this.isDown='video_con slide'
            },
            videoup() {
                this.isShow=false;
                // this.isDown='video_con'
            }

        },
        mounted() {
            this.getProductInf();
        }
    }
</script>

<style lang="scss" scoped>
    .product {
        .swiper_threebox {
            width: 100%;
            padding-top: 10px;

            .swiper-container{
                height: 349px;
                width: 100%;
                img {
                    width: 100%;
                }

            }
            p {
                font-size: 18px;
                text-align: center;
                margin-bottom: 50px;
            }
        }
        .product_bg_1 {
            width: 100%;
            height: 718px;
            background: url("/imgs/product/product-bg-1.png") no-repeat center;
            text-align: center;
            .pro_title {
                font-size: 80px;
                font-weight: bold;
                text-align: center;
                padding: 50px 0 0 0;

            }
            .pro_describe {
                font-size: 24px;
                font-weight: bold;
                text-align: center;
                padding: 10px;
                letter-spacing:14px;
            }
            a {
                color: black;
                font-size: 16px;
                margin: 0 10px 10px;

            }
            .pro_price {
                font-size: 38px;
                padding-top: 30px;
            }
        }
        .product_bg_2 {
            width: 100%;
            height: 480px;
            background: url("/imgs/product/product-bg-2.png") no-repeat center;
            background-size: 70%;

        }
        .product_bg_3 {
            width: 100%;
            height: 640px;
            background: url("/imgs/product/product-bg-3.png") no-repeat center;
            background-size: contain;
        }
        .videoall {
            width: 100%;
            height: 1044px;
            background: black;
            text-align: center;
            .video_title1 {
                font-size: 60px;
                font-weight: bold;
                color: white;
                padding: 100px 0 0 0;
            }
            .video_title2 {
                font-size: 60px;
                font-weight: bold;
                color: white;
            }
            .video_describe1 {
                font-size: 24px;
                color: white;
                padding-top: 50px;
            }
            .video_describe2 {
                font-size: 24px;
                color: white;
                padding-bottom: 50px;
            }
            .videobg {
                width: 1226px;
                height: 540px;
                margin: 0 auto;
                background: url("/imgs/product/gallery-1.png") no-repeat center;
                background-size: contain;
            }

            .video_box {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                .video_mask {
                    width: 100%;
                    height: 100%;
                    background: black;
                    opacity: .6;
                }

                .video_con {
                    width: 1000px;
                    height: 560px;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    video {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    .video_close {
                        width: 20px;
                        height: 20px;
                        background: url("/imgs/icon-close.png") no-repeat center;
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        cursor: pointer;
                        z-index: 10;
                    }
                    /*transition: all .6s;*/
                    /*&.slide {*/
                    /*    top:50%*/
                    /*}*/
                }

            }

        }

    }
</style>