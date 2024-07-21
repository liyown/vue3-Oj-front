<script setup lang="ts">
import BasicLayout from './layouts/BasicLayout.vue'
import {onMounted} from "vue";
import {UserControllerService} from "@/generated";
import {useLoginUserStore} from "@/stores/loginUser";

const userStore = useLoginUserStore()

const doInit = () => {

  UserControllerService.getLoginUser()
      .then(res => {
        console.log(res)
        userStore.loginUser.name = res.data?.userName ?? '未登录'
      })
}



onMounted(() => {
  console.log('doinit')
  doInit()
})


</script>

<template>
  <div id="app">
    <BasicLayout/>
  </div>

</template>

<style scoped>


</style>
