import {type Reactive, reactive} from 'vue'
import access from "@/access/access";
import { defineStore } from 'pinia'
import type {loginUserInfo} from "@/ts-type/my_type";

export const useLoginUserStore = defineStore('loginUser', () => {

    const loginUser = reactive<loginUserInfo>({
        id: 0,
        name: '',
        role: access.NO_LOGIN
    })



    return  {loginUser }
})