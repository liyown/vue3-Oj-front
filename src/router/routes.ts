import access from "@/access/access";
import {type RouteRecordRaw} from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '题库',
        meta: {
            auth: access.NO_LOGIN
        },
        component: () => import("@/views/QuestionsView.vue")
    },
    {
        path: '/question',
        name: '题目编辑',
        meta: {
            auth: access.ADMIN
        },
        component: () => import('@/views/question/QuestionView.vue'),
        children: [
            {
                path: "",
                name: "题目",
                redirect(to) {
                    return {name: "题目列表"}
                },
            },
            {
                path: "list",
                name: "题目列表",
                component: () => import('@/views/question/QuestionListView.vue')
            },
            {
                path: "edit/:id",
                name: "编辑题目",
                component: () => import('@/views/question/QuestionEditView.vue')
            },
            {
                path: "add",
                name: "添加题目",
                component: () => import('@/views/question/QuestionAddView.vue')
            }
            ]
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
        path: '/user',
        name: '用户界面',
        meta: {
            auth: access.NO_LOGIN,
            noDisplayMenu: true
        },
        component: () => import('@/layouts/LoginLayout.vue'),
        children: [
            {
              path: '',
              name: '用户',
              component: () => import('@/views/user/UserView.vue')

            },
            {
                path: 'login',
                name: '登录',
                component: () => import('@/views/user/LoginView.vue')
            },
            {
                path: 'register',
                name: '注册',
                component: () => import('@/views/user/RegisterView.vue')
            }
        ]
    }
]


