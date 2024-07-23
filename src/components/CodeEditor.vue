<script lang="ts" setup>
import {ref, shallowRef, toRaw, watch} from 'vue'
import {VueMonacoEditor} from '@guolao/vue-monaco-editor'
import * as monaco from 'monaco-editor'

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}

const code = defineModel('code', {
  type: String,
  default: '',
})


const editorRef = shallowRef()
const handleMount = (editor: any) => {
  editorRef.value = editor
}



</script>
<template>
  <div id="code-editor">
    <VueMonacoEditor
        v-model:value="code"
        language="java"
        theme="vs-dark"
        :options="MONACO_EDITOR_OPTIONS"
        @mount="handleMount"
        height="100%"
    />
  </div>
</template>
<style scoped>
#code-editor {
  height: 500px;
  margin: 16px;
}
</style>
