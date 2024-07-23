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

    <a-row id="grid-demo" style="margin-bottom: 16px;">
      <a-col flex="auto">
        <a-tag color="blue">题目内容:</a-tag>
        <a-input v-model="condition.title" :style="{width:'200px'}" placeholder="请输入题目内容"/>

        <a-tag color="blue">题目标签:</a-tag>
        <a-input-tag v-model="condition.tags" :style="{width:'200px'}" placeholder="请输入标签" allow-clear/>

        <a-button @click="onFilter" type="outline">查询</a-button>
      </a-col>
      <a-col flex="100px">
        <a-button type="primary" @click="router.push('/question/add')">新增</a-button>
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