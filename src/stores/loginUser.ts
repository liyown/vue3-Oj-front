import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useLoginUserStore = defineStore('loginUser', () => {

    const loginUser = reactive({
        name: "未登录",
        auth: false
    })



    return  {loginUser }
})
