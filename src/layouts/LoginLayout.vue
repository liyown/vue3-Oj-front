<script setup lang="ts">
import {useLoginUserStore} from "@/stores/loginUser";

const userStore = useLoginUserStore()
</script>

<template>
  <div class="layout">
    <a-layout style="">
      <a-comment id="user-info-title">
        用户界面
      </a-comment>
      <a-layout-content id="content">
        <RouterView/>
      </a-layout-content>
      <a-layout-footer id="footer">Designed by liuyaowen</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#user-info-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
  font-weight: bold;
}

#content {
  //background-color: #f0f2f5;
  //height: auto;
}

#footer {
  /* background-color: #001529; */
  text-align: center;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;



}
</style>
