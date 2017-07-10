import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

/**
 *  加载插件
 *  @VueRouter：路由
 */

/**
 *  定义常量信息
 *  @DOMAINNAME：客户端地址
 *  @SERVERNAME：服务端地址
 *  @API_SERVER：服务端接口
 */

let DOMAINNAME = ''
let SERVERNAME = ''
let API_SERVER = ''
/**
 *  全局方法
 */


//获取当前页面路由信息
router.afterEach(function (transition) {
    console.log("当前路由参数")
    console.log(transition)
})

/**
 *  创建实例
 */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
