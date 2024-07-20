
import {type RouteRecordRaw} from "vue-router";
export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '题库',
        meta: {
            auth: false,
        },
        component: () => import("@/views/QuestionsView.vue")
    },
    {
        path: '/about',
        name: '关于',
        meta: {
            auth: true,
        },
        component: () => import('@/views/AboutView.vue')
    },
    {
        path: '/no-auth',
        name: '无权限',
        meta: {
            auth: false,
            noDisplayMenu: true
        },
        component: () => import('@/views/NoAuthView.vue')
    }
]


