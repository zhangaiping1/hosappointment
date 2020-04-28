<template>
    <transition name="slide">
        <div class="modal" v-show="isModalShow">
            <div class="container">
                <div class="dialog">
                    <div class="dia-header">
                        <p>{{isTitle}}</p>
                        <a href="javascript:;" @click="$emit('cancel')"></a>
                    </div>
                    <div class="dia-body">
                        <slot name="dia-body"></slot>
                    </div>
                    <div class="dia-footer">
                        <a :class="diaBtn" :href="isHref" @click="$emit('submit')" v-if="isBtn==1?true:false">{{isBtnText}}</a>
                        <a :class="diaBtn" :href="isHref" @click="$emit('submit')"v-if="isBtn==2?true:false">确定</a>
                        <a :class="diaBtn" :href="isHref" @click="$emit('submit')"v-if="isBtn==3?true:false">确定</a>
                        <a :class="exitBtn" href="javascript:;" @click="$emit('cancel')"v-if="isBtn==3?true:false">取消</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "modal",
        data() {
            return {
                // isModalShow:false
                diaBtn:'',
                exitBtn:''
            }
        },
        props:{
            isShow:String,
            isBtn:String,
            isTitle:String,
            isModalShow:Boolean,
            isBtnText:String,
            isHref:String
        },
        methods:{
            btnColor() {
                if (this.isBtn == 1) {
                    this.diaBtn = 'dia-btn small org'
                    this.exitBtn = 'dia-btn small grey'
                }
                if (this.isBtn == 2) {
                    this.diaBtn = 'dia-btn small org'
                    this.exitBtn = 'dia-btn small grey'
                }
                if (this.isBtn == 3) {
                    this.diaBtn = 'dia-btn small org dubble'
                    this.exitBtn = 'dia-btn small grey'
                }
            }
        },
        mounted() {
            this.btnColor();
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        /*display: none;*/
        width: 100%;
        height: 100%;

        .container {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .5);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;

            .dialog {
                width: 660px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                .dia-header {
                    width: 660px;
                    height: 60px;
                    background: #f5f5f5;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    p {
                        font-size: 16px;
                        height: 60px;
                        line-height: 60px;
                        display: inline-block;
                        margin-left: 20px;
                    }

                    a {
                        margin-right: 20px;
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                        background: url("/imgs/icon-close.png") no-repeat center;
                        background-size: contain;
                        transition: transform .2s;

                        &:hover {
                            transform: scale(1.5);
                        }
                    }
                }

                .dia-body {
                    padding: 50px 40px 50px;
                    background: #ffffff;
                    font-size: 14px;
                }

                .dia-footer {
                    background: #f5f5f5;
                    width: 660px;
                    height: 82px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .dia-btn {
                }
                .small {
                    display: inline-block;
                    width: 110px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    font-size: 14px;
                    color: #ffffff;
                }
                .middle {
                    display: inline-block;
                    width: 202px;
                    height: 50px;
                    text-align: center;
                    line-height: 50px;
                    font-size: 14px;
                    color: #ffffff;
                }
                .large {
                    display: inline-block;
                    width: 110px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    font-size: 14px;
                    color: #ffffff;
                }
                .dubble {
                    margin-right: 20px;

                    /*&:last-child {*/
                    /*    margin-right: 0px;*/
                    /*}*/
                }
                .org {
                    background: #FF6600;
                }
                .grey {
                    background: #b0b0b0;
                }
            }
        }


        &.slide-enter-active,&.slide-leave-active {
            transition: all .5s;
        }
        &.slide-enter,&.slide-leave-active {
            opacity: 0;
        }

    }


</style>