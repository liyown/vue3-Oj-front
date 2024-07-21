import access from "@/access/access";
import {type RouteRecordRaw} from "vue-router";
export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '题库',
        meta: {
            auth: access.USER,
        },
        component: () => import("@/views/QuestionsView.vue")
    },
    {
        path: '/about',
        name: '关于',
        meta: {
            auth: access.NO_LOGIN
        },
        component: () => import('@/views/AboutView.vue')
    },
    {
        path: '/no-auth',
        name: '无权限',
        meta: {
            auth: access.NO_LOGIN,
            noDisplayMenu: true
        },
        component: () => import('@/views/NoAuthView.vue')
    },
    {
        path: '/admin',
        name: '管理员',
        meta: {
            auth: access.ADMIN
        },
        component: () => import('@/views/AdminView.vue')
    },
    {
        path: '/login',
        name: '登录',
        meta: {
            auth: access.NO_LOGIN
        },
        component: () => import('@/views/LoginView.vue')
    }
]


