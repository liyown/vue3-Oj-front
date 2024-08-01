<script setup lang="ts">
import {useRouter} from 'vue-router'
import {ref} from "vue";
const router = useRouter()

const onFilter = () => {
  console.log('filter',condition)
  emit('filter', condition.value)
}
const condition = ref({
  title: '',
  tags: Array<string>()
})

const emit = defineEmits(['filter'])

</script>

<template>

  <div id="query-condition">

    <a-row id="grid-demo" style="padding-left: 32px ">
      <a-col flex="auto" >
        <a-tag color="blue">题目内容:</a-tag>
        <a-input  style="margin: 0 16px" v-model="condition.title" :style="{width:'200px'}" placeholder="请输入题目内容"/>

        <a-tag color="blue">题目标签:</a-tag>
        <a-input-tag style="margin: 0 16px" v-model="condition.tags" :style="{width:'200px'}" placeholder="请输入标签" allow-clear/>

        <a-button @click="onFilter" type="outline">查询</a-button>
      </a-col>
      <a-col flex="100px">
        <slot ></slot>
      </a-col>
    </a-row>
  </div>

</template>

<style scoped>
#grid-demo {
  padding: 8px;
  background: #f0f2f5;

}

</style>