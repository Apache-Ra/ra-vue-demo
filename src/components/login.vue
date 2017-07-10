<template>
    <div id="Login">
        <!--引用头部组件-->
        <Top></Top>

        <form class="form-group box-shadow">
            <div class="input-group">
                <label class="input-label">账号</label>
                <input type="text" v-model="name" name="name" placeholder="请输入123456789"/>
            </div>

            <div class="input-group">
                <label class="input-label">密码</label>
                <input type="password" v-model="pwd" name="pwd" placeholder="请输入123456789"/>
            </div>

            <div class="button-group">
                <button class="min-button" type="button" @click="login">登录</button>
                <span class="button-span">没有账户？<a href="javascript:void(0)" @click="register">立即注册</a></span>
            </div>
        </form>

    </div>
</template>

<script>
    import Top from './layout/header.vue'
    import Cookie from '../kit/cookie'
    export default {
        components: {
            Top
        },
        created () {
            let vue, loginStatus
            vue = this
            loginStatus = vue.getCookie("loginStatus")
            if(loginStatus){
                console.log("之前登录过")
                setTimeout(function () {
                    vue.$router.push({name:'home', params:{msg:"自动登录",user:vue.$data.name}})
                },2000)

            } else {
                console.log("没有登录过")
            }

        },
        data () {
            return {
                name:null,
                pwd:null
            }
        },
        methods: {
            login () {
                let vue, name, pwd
                vue = this
                name = vue.$data.name
                pwd = vue.$data.pwd

                if(!name || !pwd) {
                   console.log("不能为空")
                    return
                } else {
                   if(name === '123456789' && pwd === '123456789'){

                       vue.setCookie("loginStatus",true,1)

                       vue.$router.push('./home')
                   } else {
                       console.log("用户名密码输入有误")
                   }
                }
            },
            register () {
                let vue = this
                console.log("这是一个空的事件哦！")
            }
        }
    }
</script>

<style>
*{font-size: 13px;}
#Login .form-group{border:1px solid #D9D9D9;width:400px;margin: 0 auto;padding: 10px}
#Login .input-group{width: 100%;padding: 5px 0}
#Login .input-label{display: inline-block;height: 35px;line-height: 35px;padding: 0 5px;width: 10%;float: left}
#Login .input-group input{width: 85%;height:35px;border:1px solid #D9D9D9;border-radius: 2px;background: none;text-indent: 15px;}
#Login .button-group button{background:none;border:1px solid #D9D9D9;min-width: 80px;min-height: 30px;}
#Login .button-group .min-button{}
#Login .box-shadow{box-shadow:3px 4px 5px 2px #D9D9D9,1px 1px 10px 2px #D9D9D9;border:1px solid #D9D9D9}
#Login .button-span{float: right;height: 30px;line-height: 30px;}
</style>