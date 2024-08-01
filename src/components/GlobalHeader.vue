<script setup lang="ts">
import {routes} from '@/router/routes'
import {computed, onMounted, ref, watch} from 'vue';
import {useRouter} from 'vue-router'
import {useLoginUserStore} from "@/stores/loginUser";
import access from "@/access/access";
import {checkAccess} from "@/access/checkAccess";

const router = useRouter()
const loginUser = useLoginUserStore()

// 过滤出需要显示的菜单
const displayMenu = computed(() => {
  return routes.filter(route => route.meta?.noDisplayMenu === undefined).filter(route => {
    return checkAccess(loginUser.loginUser, route.meta?.auth ?? access.NO_LOGIN)
  })
})

function doMenuEvent(key: string) {
  console.log(key)
  router.push({
    path: key
  });
}

const onLoginOut = () => {
  loginUser.loginOut()
  router.push('/')
}

watch(() => router.currentRoute.value.path, (path) => {
  selectKey.value = ["/" + path.split('/')[1]]
})

onMounted(() => {
  selectKey.value = [router.currentRoute.value.path]
})

const selectKey = ref(['/'])

</script>
<template>
  <div id="app">
    <a-row align="center">
      <a-col flex="auto">
        <a-menu mode="horizontal" @menu-item-click="doMenuEvent" :selected-keys="selectKey">
          <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
            <div id="title">
              智能问答
            </div>
          </a-menu-item>
          <a-menu-item v-for="route in displayMenu" :key="route.path" id="menuItem">
            {{ route.name }}
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="100px">
        <div v-if="loginUser.loginUser.role === access.NO_LOGIN">
          <a-button type="primary" @click="router.push('/user/login')">登录</a-button>
        </div>
        <div v-else>
          <a-dropdown>
            <a-button>{{ loginUser.loginUser.name }}</a-button>
            <template #content>
              <!--todo-->
              <a-doption @click="router.push('/user')">个人主页</a-doption>
              <a-doption @click="onLoginOut">退出登录</a-doption>
            </template>
          </a-dropdown>
        </div>
      </a-col>
    </a-row>


  </div>
</template>


<style scoped>

#title {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

#menuItem {
  font-size: 16px;
  /* 加粗 */
  font-weight: bold;
  color: #000;
}
</style>
