<template>
    <div id="Home">
        <p>欢迎{{userMsg}}用户<a href="javascript:void(0)">{{userName}}</a> <span class="cancellation" @click="cancellation">注销</span></p>
<hr>
        <p>第二次会自动登录,请留意上方的“普通/金卡”文字,请在电脑端开dubug模式，每一步骤都有日志！</p>

    </div>
</template>

<script>
    import Cookie from '../kit/cookie'
    export default {
        components: {},
        created () {
            let vue, parameter
            vue = this
            parameter = vue.$route.params
            console.log(parameter)
            vue.$data.userName = vue.$route.params.user
            if(parameter.msg){
                vue.$data.userMsg = "金卡"
            } else {
                vue.$data.userMsg = "普通"
            }
        },
        data () {
            return {
                userName:"",
                userMsg:""
            }
        },
        methods: {
            cancellation () {
                let vue = this
                console.log("注销登录")
                vue.delCookie('loginStatus')
                setTimeout(function () {
                    vue.$router.push('./login')
                },1000)
            }
        }
    }
</script>

<style>

#Home p{font-size: 15px;padding: 20px;color: red;font-weight: bold}

#Home .cancellation{float: right;}
</style>