<script setup lang="ts">
import gfm from '@bytemd/plugin-gfm'
import highlight from "@bytemd/plugin-highlight";
import {Editor, Viewer} from '@bytemd/vue-next'
const plugins = [gfm(),highlight()]

const value = defineModel<string>()
const Props = defineProps({
  "readOnly": Boolean
})

function handleChange(v: any) {
  if (Props.readOnly) return
  value.value = v
}
</script>
<template>
  <Editor
      id="editor"
      :value="value"
      :plugins="plugins"
      @change="handleChange"
  />

</template>
<style scoped>
#editor {
  height: 100%;
}



</style>

