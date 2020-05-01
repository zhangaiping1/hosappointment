<template>
    <div class="login">
            <div class="login-header">
                <a href="/#/index">
                    <img src="/imgs/login-logo.png" alt="">
                </a>
            </div>
            <div class="login-body">
                <div class="container">
                    <div class="login-content">
                        <div class="login-content-top">
                            <a href="">帐号登陆</a>
                            <span>|</span>
                            <a href="">扫码登陆</a>
                        </div>
                        <div class="login-content-middle">
                            <input type="text" placeholder="请输入帐号" v-model="username">
                            <input type="text" placeholder="请输入密码" v-model="password">
                            <input type="submit" value="登陆" @click="login">
                        </div>
                        <div class="login-content-bottom">
                            <a href="javascript:;" class="login-content-bottom-phonereg" @click="register">手机短信登录/注册</a>
                            <a href="/" class="login-content-bottom-reg">立即注册</a>
                            <span>|</span>
                            <a href=""  class="login-content-bottom-pwd">忘记密码?</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="login-footer">
                <a href="">底部链接一</a><span>|</span>
                <a href="">底部链接一</a><span>|</span>
                <a href="">底部链接一</a><span>|</span>
                <a href="">底部链接一</a>
                <p>Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
            </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                username:'',
                password:'',
                userId:''
            }
        },
        methods: {
            login() {
                let {username,password} = this;
                // console.log(username,password)
                this.axios.post('/user/login',{
                    username,
                    password
                }).then((res)=>{
                    console.log(res);
                    this.$cookie.set('userId',res.id,{ expires: '1M' })
                    this.$store.dispatch('saveUserName',res.username)
                    this.$router.push('/index')
                })
            },
            register() {
                this.axios.post('/user/register',{
                    username:'admin2',
                    password:'admin2',
                    email:'admin2@163.com'
                }).then(()=>{
                    alert('注册成功')
                })
            }
        },
        mounted() {
            // this.login();
        }
    }
</script>

<style lang="scss" scoped>
    .login {
        .login-header{
            width: 1226px;
            height: 113px;
            margin: auto;
            img {
                margin: 7.5px 0;
            }

        }
        .login-body{
            background: url("/imgs/login-bg.jpg") no-repeat center;
            height: 576px;
            .container {
                width: 1226px;
                height: 576px;
                margin: 0 auto;
                position: relative;
                .login-content {
                    width: 410px;
                    height: 510px;
                    margin: 0 31px;
                    background: #ffffff;
                    position: absolute;
                    right: 0;
                    top:33px;
                    .login-content-top {
                        font-size: 24px;
                        font-weight: bold;
                        text-align: center;
                        /*display: inline-block;*/
                        /*margin: 0 auto;*/
                        a {
                            display: inline-block;
                            margin: 24px;
                            color: #FF6600;
                            &:last-child {
                                color: black;
                            }
                        }
                    }
                    .login-content-middle {
                        input {
                            width: 348px;
                            height: 50px;
                            margin: 22px 22px 0 30px;
                            background: rgb(250, 255, 189);
                            border: 1px solid #cccccc;
                            padding-left: 20px;
                            box-sizing: border-box;
                            &:last-child {
                                background: #FF6600;
                                color: white;
                                font-size: 16px;
                                padding-left: 0px;
                            }
                        }
                    }
                    .login-content-bottom {
                        font-size: 14px;
                        color: #999999;
                        a {
                            display: inline-block;
                            color: #999999;
                        }
                        .login-content-bottom-phonereg {
                            margin: 20px 30px;
                            color: #FF6600;
                        }
                        .login-content-bottom-reg {
                            margin: 0 10px 0 50px;
                        }
                        .login-content-bottom-pwd {
                            margin-left: 10px;
                        }
                    }


                }
            }
        }
        .login-footer{
            font-size: 16px;
            color: #999999;
            text-align: center;
            a {
                display: inline-block;
                color: #999999;
                margin: 50px 10px 20px;
            }
            p {

            }
        }
    }
</style>