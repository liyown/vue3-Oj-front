<script setup lang="ts">
import gfm from '@bytemd/plugin-gfm'
import highlight from "@bytemd/plugin-highlight";
import {Editor,} from '@bytemd/vue-next'
const plugins = [gfm(),highlight()]

const value = defineModel<string>()

function handleChange(v: any) {
  value.value = v
}
</script>
<template>
  <Editor id="editor" :value="value" :plugins="plugins" @change="handleChange"/>
</template>
<style scoped>



#editor {
  height: 100%;
}

</style>

