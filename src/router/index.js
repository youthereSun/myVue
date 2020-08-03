import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home/home'

Vue.use(VueRouter)



const routes = [
    {
        path: '/',
        name: '主页',
        component: home,
        meta: {
            title: '主页',
        }
    },{
        path: '/login',
        name: '登录',
        component: () => import( '@/views/login/login'),//cnpm install babel-plugin-syntax-dynamic-import --save-dev
        meta: {
            title: '登录',
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'hash'
})


export default router
