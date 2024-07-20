import {createRouter, createWebHistory} from 'vue-router'
import {routes} from './routes'
import {useLoginUserStore} from "@/stores/loginUser";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {

    const loginUserStore = useLoginUserStore()
    if (to.meta?.auth) {
        if (loginUserStore.loginUser.auth) {
            next()
        } else {
            next({path: '/no-auth'})
        }
    } else {
        next()
    }
})



export default router
