import {type Reactive, reactive} from 'vue'
import access from "@/access/access";
import { defineStore } from 'pinia'
import type {loginUserInfo} from "@/ts-type/my_type";

export const useLoginUserStore = defineStore('loginUser', () => {

    const loginUser = reactive<loginUserInfo>({
        name: '',
        role: access.NO_LOGIN
    })



    return  {loginUser }
})