<script setup lang="ts">

import QuestionDetail from "@/components/QuestionDetail.vue";
import QuestionWriter from "@/components/QuestionWriter.vue";
import {useRoute}  from "vue-router";
const route = useRoute()
</script>

<template>
  <div id="exercises-layout">
    <a-layout style="height: 100vh;">
      <a-layout>
        <a-layout-sider :resize-directions="['right']" theme="light" style="width: 40vw" >
            <QuestionDetail/>
        </a-layout-sider>
        <a-layout-content>
          <QuestionWriter :question-id="parseInt(route.params.id[0])"/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style scoped>

</style>