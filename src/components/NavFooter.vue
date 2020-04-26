<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="./../assets/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <div>
                <a href="">标题一</a><span>|</span>
                <a href="">标题二</a><span>|</span>
                <a href="">标题三</a><span>|</span>
                <a href="">标题四</a>
            </div>
            <p>Copyright ©2019 <span class="Copyright">mi.futurefe.com</span> All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavFooter"
    }
</script>

<style lang="scss" scoped>
.footer {
    height: 238px;
    background: #333333;
    border-top: 3px solid #FF6600;
    text-align: center;
    p {
        color: #999999;
        font-size: 16px;
    }
    span {color: #999999}
    img {
        width: 53px;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    a {
        display: inline-block;
        color: #999999;
        font-size: 16px;
        margin: 30px 10px 10px 10px;
    }
    .Copyright {
        color: #FF6600;
    }
}
</style>