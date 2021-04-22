/*
 * @Author: Aiden
 * @Date: 2021-04-21 16:45:29
 * @LastEditTime: 2021-04-22 10:38:30
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/Home.vue')
    }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})