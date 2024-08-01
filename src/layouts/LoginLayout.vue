<script setup lang="ts">
import {useLoginUserStore} from "@/stores/loginUser";
import access from "@/access/access";
import {Message} from "@arco-design/web-vue";
import router from "@/router";

const loginUser = useLoginUserStore()

const onLoginOut = () => {
  loginUser.loginOut()
  router.push('/')
}

</script>

<template>
  <div class="layout">
    <a-row class="grid-demo" style="margin-top: 16px;">
      <a-col flex="100px">
        <a-button style="margin-left: 24px" shape="round" type="primary" @click="router.push('/')">首页</a-button>
      </a-col>
      <a-col flex="auto">
      </a-col>
      <a-col flex="100px">
        <div v-if="loginUser.loginUser.role === access.NO_LOGIN">
          <a-button type="primary" @click="router.push('/user/login')">登录</a-button>
        </div>
        <div v-else>
          <a-dropdown>
            <a-button>{{ loginUser.loginUser.name }}</a-button>
            <template #content>
              <a-doption @click="onLoginOut">退出登录</a-doption>
            </template>
          </a-dropdown>
        </div>
      </a-col>
    </a-row>
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
