<script setup lang="ts">


import {onMounted, ref, toRaw, watch} from "vue";
import {QuestionControllerService, type QuestionVO} from "@/generated";
import {useRoute} from "vue-router";
import {type DescData, Message} from "@arco-design/web-vue";
import {Viewer} from '@bytemd/vue-next'
import router from "@/router";

const question = ref<QuestionVO>()
const route = useRoute()

const questionId = Number(route.params.id)
let data: DescData[] = []
onMounted(() => {
  console.log('question detail')
  QuestionControllerService.getQuestion({id:questionId}).then(res => {
    if (res.code !== 0) {
      Message.error(res.message ?? '请求失败')
      return
    }

    question.value = res.data
    data  = [
      {
        label: '题目编号:',
        value: question.value?.id
      },
      {
        label: '标签',
        value: question.value?.tags
      },
      {
        label: '提交:',
        value: question.value?.submitNum ?? 0,
      },
      {
        label: '收藏:',
        value: question.value?.thumbNum ?? 0,
      },
      {
        label: '喜欢:',
        value: question.value?.favourNum ?? 0,
      },
    ];
  })
})





</script>

<template>
  <div id="question-detail">
    <a-space direction="vertical" size="large" fill>
      <a-button style="margin-top: 12px" type="secondary" size="mini" @click="router.push('/')">主页</a-button>
      <a-descriptions :data="data" :title="question?.title" layout="inline-horizontal" >
        <template #value="{data}">
          <template v-if="data.label==='标签'">
            <a-tag style="margin:0 4px" v-for="item in data.value" :key="item" color="green">{{item}}</a-tag>
          </template>
          <template v-else>
            <span style="color: #1890ff; margin-left: 16px">{{data.value}}</span>
          </template>
        </template>
      </a-descriptions>

      <a-divider>题目详情</a-divider>
      <a-row class="grid-demo">
        <a-col :xs="{span: 6, offset: 1}" :lg="{span: 6, offset: 2}">
          <a-tag color="blue">时间限制: {{question?.judgeConfig.timeLimit}}ms</a-tag>
        </a-col>
        <a-col :xs="{span: 6, offset: 1}" :lg="{span: 6, offset: 2}">
          <a-tag color="blue">内存限制: {{question?.judgeConfig.memoryLimit}}KB</a-tag>
        </a-col>
        <a-col :xs="{span: 6, offset: 1}" :lg="{span: 6, offset: 2}">
          <a-tag color="blue">堆栈限制: {{question?.judgeConfig.stackLimit}}KB</a-tag>
        </a-col>
      </a-row>
      <Viewer :value="question?.content" />
    </a-space>
  </div>

</template>

<style scoped>
#question-detail {
  padding: 0 48px 0 48px;

}
#question-detail{
  height: 93%;
}
</style>