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
                    component: Detail
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