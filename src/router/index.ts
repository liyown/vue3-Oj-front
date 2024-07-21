import {createRouter, createWebHistory} from 'vue-router'
import {routes} from './routes'
import {useLoginUserStore} from "@/stores/loginUser";
import {checkAccess} from "@/access/checkAccess";
import access from "@/access/access";
import {UserControllerService} from "@/generated";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

async function autoLogin() {
    const loginUserStore = useLoginUserStore()
    if (loginUserStore.loginUser.role === access.NO_LOGIN) {
        const loginUser = await UserControllerService.getLoginUser()
        loginUserStore.loginUser.name = loginUser?.data?.userName || '未登录'
        if (loginUser?.data?.userRole) {
            if ( loginUser.data.userRole === 'user') {
                loginUserStore.loginUser.role = access.USER
            }
            if ( loginUser.data.userRole === 'admin') {
                loginUserStore.loginUser.role = access.ADMIN
            }
        }
        else {
            loginUserStore.loginUser.role = access.NO_LOGIN
        }
    }


}

router.beforeEach(async (to, from, next) => {

    const loginUserStore = useLoginUserStore()

    await autoLogin()

    if (to.meta.auth === access.NO_LOGIN) {
        console.log('不需要登录')
        next()
    }

    // 如果没有登录，且需要登录
    if (to.meta.auth >= access.USER && loginUserStore.loginUser.role === access.NO_LOGIN) {
        // 跳转到登录页面
        console.log('no login')
        next("/login")
    }

    // 如果已经登录, 校验权限
    if (to.meta.auth >= access.USER && loginUserStore.loginUser.role >= to.meta.auth) {
        if (checkAccess(loginUserStore.loginUser, to.meta.auth)) {
            console.log('权限通过')
            next()
        }
        else {
            console.log('权限不通过')
            next('/no-auth')
        }
    }
})


export default router
