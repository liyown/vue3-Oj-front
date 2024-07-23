<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {type QuestionSubmitAddRequest, QuestionSubmitControllerService} from "@/generated";
import CodeEditor from "@/components/CodeEditor.vue";
import {Message} from "@arco-design/web-vue";
import QuestionSubmitRecord from "@/components/QuestionSubmitRecord.vue";

const options = ref<string[]>(['java', 'python', 'c++', 'javascript'])

const handleChange = (value: any) => {
  console.log(value)
}
const props = defineProps<{
  questionId: number
}>()

const switchValue = ref('exercise')

const questionSubmit = ref<QuestionSubmitAddRequest>({
  language: 'java',
  code: '',
  questionId: props.questionId
})

watch(() => questionSubmit.value, (value) => {
  console.log(value)
}, {deep: true})

const align = 'center'
const onSave = () => {
  // save code
  if (!questionSubmit.value.code) {
    console.log('code is empty')
    Message.info('代码为空')
    return
  }
  localStorage.setItem('code:'+questionSubmit.value.questionId, questionSubmit.value.code)
  Message.success('保存成功')
}

const onsubmit = () => {
  console.log('submit')
  QuestionSubmitControllerService.add(questionSubmit.value).then(res => {
    if (res.code !== 0) {
      Message.error(res.message ?? '请求失败')
      return
    }
    Message.success('提交成功')
  })
}

const onclick = () => {
  console.log('click')
}

onMounted(() => {
  const code = localStorage.getItem('code:'+questionSubmit.value.questionId)
  if (code) {
    questionSubmit.value.code = code
  }
})
</script>

<template>
  <div id="question-writer">
    <a-space direction="horizontal" size="large" :align="align" style="margin: 24px">
      <span style="text-align: center">选择语言:</span>
      <a-select v-model="questionSubmit.language" style="width: 200px" @change="handleChange">
        <a-option v-for="item in options" :key="item" :value="item">{{ item }}</a-option>
      </a-select>

      <a-button type="primary" @click="onsubmit">提交</a-button>
      <a-button @click="onSave">保存</a-button>

      <a-radio-group type="button" v-model="switchValue">
        <a-radio value="exercise">做题</a-radio>
        <a-radio value="record">提交记录</a-radio>
      </a-radio-group>
    </a-space>
    <template v-if="switchValue === 'exercise'">
      <CodeEditor v-model:code="questionSubmit.code"/>
    </template>
    <template v-else>
      <QuestionSubmitRecord :question-id="props.questionId"/>
    </template>
  </div>
</template>

<style scoped>

</style>