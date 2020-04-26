<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span class="icon-setting"></span>预约维修服务</li>
                <li><span class="icon-7day"></span>7天无理由退货</li>
                <li><span class="icon-15day"></span>15天免费换货</li>
                <li><span class="icon-post"></span>满150元包邮</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceBar"
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/mixin";
    .service {
        padding: 33px 0;
        .container {
            width: 1226px;
            margin: 0 auto;

            li {
                display: inline-block;
                width: 24.9%;
                border-right: 1px solid #cccccc;
                text-align: center;
                font-size: 16px;
                line-height: 16px;

                .icon-setting {
                    vertical-align: middle;
                    margin-right: 4px;
                    @include bgImg(20px,20px,'../assets/imgs/icon-setting.png')
                }
                .icon-7day {
                    vertical-align: middle;
                    margin-right: 4px;
                    @include bgImg(20px,20px,'../assets/imgs/icon-7day.png')
                }
                .icon-15day {
                    vertical-align: middle;
                    margin-right: 4px;
                    @include bgImg(20px,20px,'../assets/imgs/icon-15day.png')
                }
                .icon-post {
                    vertical-align: middle;
                    margin-right: 4px;
                    @include bgImg(20px,20px,'../assets/imgs/icon-post.png')
                }
            }
        }
    }
</style>