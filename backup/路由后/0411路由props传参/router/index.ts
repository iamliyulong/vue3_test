import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/home',
            component: Home
        },
        {
            name: 'News',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'NewsDetail',
                    path: 'detail',
                    component: Detail,
                    // 第一种写法：将路由收到的所有params参数作为props传给路由组件
                    // props: true,

                    // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
                    props(route) {
                        return route.query
                    }
                }
            ]
        },
        {
            name: 'About',
            path: '/about',
            component: About
        }
    ]
})

export default router