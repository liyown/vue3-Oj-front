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
        <router-view/>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped>

#header {
  box-shadow: #eee 0 5px 5px 0;
  margin-bottom: 4px;
}

#content {
  background-color: #fbfbfb;
}


</style>
