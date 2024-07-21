<script setup lang="ts">
import {routes} from '@/router/routes'
import {computed, ref, watch} from 'vue';
import {useRouter} from 'vue-router'
import {useLoginUserStore} from "@/stores/loginUser";
const router = useRouter()
const loginUser = useLoginUserStore()

// 过滤出需要显示的菜单
const displayMenu = computed(() => {
  return routes.filter(route => route.meta?.noDisplayMenu === undefined)
})

function doMenuEvent(key: string) {

  router.push({
    path: key
  });
}

watch(() => router.currentRoute.value.path, (path) => {
  selectKey.value = [path]
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
        <div>{{loginUser.loginUser.name ?? "未登录" }}</div>
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
