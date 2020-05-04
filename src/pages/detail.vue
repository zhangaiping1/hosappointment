<template>
    <div class="detail">
        <product-param :title="info.name"></product-param>
        <div class="container">
            <div class="con-left">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="(item,index) in swiperList" :key="index">
                        <img :src="item.img">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>

                </swiper>
            </div>
            <div class="con-right">
                <div class="info">
                    <p class="title">{{info.name}}</p>
                    <p class="describe">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
                    <p class="source">小米自营</p>
                    <p class="price">1799元</p><span class="scribing">1999元</span>
                </div>
                <div class="address">
                    <img src="/imgs/detail/icon-loc.png" alt="">
                    <p class="addr">北京 北京市 朝阳区 安定门街道</p>
                    <p class="now">有现货</p>
                </div>
                <div class="Edition">
                    <p class="edit">选择版本</p>
                    <div class="btn" :class="{btnCheck:isCekd==1}" @click="changeBuyinfoone('6GB+64GB 全网通')">6GB+64GB 全网通</div>
                    <div class="btn" :class="{btnCheck:isCekd==2}" @click="changeBuyinfotwo('4GB+64GB 移动4G')">4GB+64GB 移动4G</div>
                </div>
                <div class="edit-color">
                    <p class="edit">选择颜色</p>
                    <div class="btn btnCheck">深空灰</div>
                </div>
                <div class="enter-info">
                    <div class="buyinfo">
                        <p class="one">小米CC9 {{buyinfo}} 深灰色</p>
                        <p class="two">1799元</p>
                    </div>
                    <p class="total-price">总计：1799元</p>
                </div>
                <div class="btn-go">加入购物车</div>
            </div>
        
        </div>
        <div class="container-two">
            <img src="/imgs/detail/item-price.jpeg" alt="">
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
    import ServiceBar from "../components/ServiceBar";
    import ProductParam from "../components/ProductParam";
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "detail",
        data() {
          return {
              buyinfo:'6GB+64GB 全网通',
              info:{},
              isCekd:1,
              swiperList:[{
                  img:'/imgs/detail/phone-1.jpg'
              },{
                  img:'/imgs/detail/phone-2.jpg'
              },{
                  img:'/imgs/detail/phone-3.jpg'
              },{
                  img:'/imgs/detail/phone-4.jpg'
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
                  // loop: true,                         //环路
                  // effect : 'cube',
                  // cubeEffect: {
                  //     shadowOffset: 80,
                  //     shadowScale: 0.6
                  // },
              },
          }
        },
        components:{
            ServiceBar,
            ProductParam,
            Swiper,
            SwiperSlide,
        },
        directives: {
            swiper: directive
        },
        methods:{
            getProductInfo() {
                let id = this.$route.params.id;
                this.axios.get(`/products/${id}`).then((res)=>{
                    this.info=res;
                })
            },
            changeBuyinfoone(info){
                this.isCekd=1;
                this.buyinfo = info

            },
            changeBuyinfotwo(info){
                this.isCekd=2
                this.buyinfo = info
            }
        },
        mounted() {
            this.getProductInfo();
        }
    }
</script>

<style lang="scss" scoped>
    .detail {
        .container{
            width: 1226px;
            margin: 0 auto;
            .con-left{

                float: left;
                width: 642px;
                .swiper-container {
                    width: 642px;
                    .swiper-slide{
                        img {
                            width: 642px;
                        }
                    }

                }
            }
            .con-right {
                float: right;
                width: 584px;
                .info {
                    border-bottom: 1px solid #cccccc;
                    .title {
                        font-size: 28px;
                        font-weight: bold;
                        padding-bottom: 10px;
                    }
                    .describe {
                        font-size: 14px;
                        padding-bottom: 30px;
                    }
                    .source {
                        font-size: 16px;
                        color: #FF6600;
                    }
                    .price {
                        font-size: 20px;
                        color: #FF6600;
                        display: inline-block;
                        padding-bottom: 20px;
                    }
                    .scribing {
                        font-size: 16px;
                        color: #999999;
                        text-decoration: line-through;
                        padding-left: 10px;
                    }


                }
                .address {
                    margin-top: 30px;
                    height: 108px;
                    background: #fafafa;
                    border: 1px solid #e5e5e5;
                    position: relative;
                    img {
                        position: absolute;
                        top: 30px;
                        left: 30px;
                        width: 20px;
                        height: 20px;
                    }
                    .addr {
                        position: absolute;
                        top: 30px;
                        left: 60px;
                        font-size: 14px;
                    }
                    .now {
                        position: absolute;
                        top: 60px;
                        left: 60px;
                        font-size: 14px;
                        color: #FF6600;
                    }
                }
                .Edition {
                    margin: 30px 0;
                    &:after{
                        content: ' ';
                        display: block;
                        clear: both;
                    }
                    .edit {
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 20px;


                    }
                    .btn {
                        width: 287px;
                        height: 50px;
                        text-align: center;
                        line-height: 50px;
                        font-size: 16px;
                        border: 1px solid #e5e5e5;
                        float: left;
                        margin-right: 5px;
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                    .btnCheck {
                        border: 1px solid #FF6600;
                        color: #FF6600;
                    }
                }
                .edit-color {
                    &:after{
                        content: ' ';
                        display: block;
                        clear: both;
                    }
                    .edit {
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 20px;


                    }
                    .btn {
                        width: 287px;
                        height: 50px;
                        text-align: center;
                        line-height: 50px;
                        font-size: 16px;
                        border: 1px solid #e5e5e5;
                        float: left;
                        margin-right: 5px;
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                    .btnCheck {
                        border: 1px solid #FF6600;
                        color: #FF6600;
                    }
                }
                .enter-info {
                    width: 100%;
                    height:108px;
                    background: #fafafa;
                    margin: 50px 0;
                    padding: 20px 40px;
                    box-sizing: border-box;
                    .buyinfo {
                        &:after {
                            content: ' ';
                            display: block;
                            clear: both;
                        }
                        .one {
                            float: left;
                            font-size: 14px;
                            &:after {
                                content: ' ';
                                display: block;
                                clear: both;
                            }
                        }
                        .two {
                            float: right;
                            font-size: 14px;

                        }
                    }

                    .total-price {
                        font-size: 24px;
                        color: #FF6600;
                        margin-top: 20px;
                    }
                }
                .btn-go {
                    width: 300px;
                    height: 50px;
                    background: #FF6600;
                    color: white;
                    text-align: center;
                    line-height: 50px;
                    font-size: 16px;
                }
            }
        }
        .container-two {
            width: 1226px;
            margin: 0 auto;
            img {
                width: 100%;

            }
        }
    }
</style>