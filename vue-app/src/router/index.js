/*
 * @Author: Aiden
 * @Date: 2021-04-21 17:31:54
 * @LastEditTime: 2021-04-22 16:03:21
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/vue-app/hello-world',
        name: 'helloWorld',
        component: () => import('@/components/HelloWorld.vue')
    }
]

console.log('process.env.BASE_URL=', process.env.BASE_URL)
export default new Router({
    mode: 'history',
    // base: window.__POWERED_BY_QIANKUN__ ? '/app-vue' : '/',
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue' : '/',
    routes
})