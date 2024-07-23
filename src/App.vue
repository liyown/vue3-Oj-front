<script setup lang="ts">
import BasicLayout from './layouts/BasicLayout.vue'
import {onMounted} from "vue";
import {UserControllerService} from "@/generated";
import {useLoginUserStore} from "@/stores/loginUser";
import {useRoute} from "vue-router";

const userStore = useLoginUserStore()
const route = useRoute()
const doInit = () => {

  UserControllerService.getLoginUser()
      .then(res => {
        console.log(res)
        userStore.loginUser.name = res.data?.userName ?? '未登录'
      })
}



onMounted(() => {
  console.log('doinit')
  // doInit()
})


</script>

<template>
  <div id="app">
      <template v-if="route.path.startsWith('/user')">
          <router-view/>
      </template>
      <template v-else>
          <BasicLayout/>
      </template>
  </div>

</template>

<style scoped>


</style>
