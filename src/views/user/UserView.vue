<script setup lang="ts">
import {useLoginUserStore} from "@/stores/loginUser";
import access from "@/access/access";

const userStore = useLoginUserStore()
</script>

<template>
  <div id="app">
    <!--展示个人信息-->
    <template  v-if="userStore.loginUser.role === access.NO_LOGIN">
      <a-button id="button">
        未登录，请登录
      </a-button>
    </template>
    <template v-else>
      <a-dropdown>
        <a-button>
          {{ userStore.loginUser.name }}
          <a-icon type="down"/>
        </a-button>
        <a-menu slot="overlay">
          <a-menu-item>
            <router-link to="/user/login-out">退出</router-link>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </template>
  </div>
</template>

<style scoped>

#app {
  min-height: 100vh;
}


</style>