<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'

</script>

<template>
  <div class="layout">
    <a-layout style="min-height: 100vh">
      <a-layout-header id="header">
        <GlobalHeader/>
      </a-layout-header>
      <a-layout-content id="content">
        <RouterView/>
      </a-layout-content>
      <a-layout-footer id="footer">Designed by liuyaowen</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>

#header {
  box-shadow: #eee 0 5px 5px 0;
  margin-bottom: 24px;
}

#content {
  background-color: #f0f2f5;
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
