<script setup lang="ts">
import CodeEditor from "@/components/CodeEditor.vue";
import {ref, watch} from "vue";


const value = ref<string>('asd')
const language = ref<string>('java')

watch(value, (v) => {
  console.log(v)
})

</script>

<template>
  <div>
    <CodeEditor v-model:code="value"/>
  </div>
</template>

<style scoped>

</style>