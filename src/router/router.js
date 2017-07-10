/**
 *  路由文件
 *  引入[Vue, VueRouter]模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 *  加载模块
 */
Vue.use(VueRouter)

/**
 *  配置路由
 */

const router = new VueRouter({
    routes:[
        {   //登录页面
            path:'/login',
            name:'login',
            title:'vue login',
            component:function (resolve) {
                require(['../components/login.vue'], resolve)
            }
        },
        {   //主页面
            path:'/home',
            name:'home',
            title:'home',
            component:function (resolve) {
                require(['../components/home.vue'], resolve)
            }
        },
        {   //个人中心页面
            path:'/userInfo',
            name:'userInfo',
            title:'userInfo',
            component:function (resolve) {
                require(['../components/userInfo/userInfo.vue'], resolve)
            }
        }
    ]
})

export  default  router