<script setup lang="ts">

import QueryCondition from "@/components/QueryCondition.vue";
import QuestionShow from "@/components/QuestionShow.vue";
import {QuestionControllerService, type QuestionGetRequestPage, type QuestionVO} from "@/generated";
import {onMounted, ref} from "vue";
import {Message} from "@arco-design/web-vue";
import router from "@/router";

const data = ref<Array<QuestionVO>>([])
const pagination = ref({
  current: 1,
  pageSize: 10,
  total: 0,
})


const requestBody: QuestionGetRequestPage = {
  "current": 0,
  "pageSize": 0,
  "sortField": "",
  "sortOrder": "",
  "title": "",
  "content": "",
  "tags": [],
  "userId": 0
}

const requestData = () => {
  requestBody.current = pagination.value.current
  requestBody.pageSize = pagination.value.pageSize

  QuestionControllerService.listQuestionVoByPageVo(requestBody).then(res => {
    if (res.code !== 0) {
      Message.error(res.message ?? '请求失败')
      return
    }
    data.value = res.data?.records ?? []
    // 总数
    pagination.value.total = res.data?.total ?? 0
    console.log(data.value)
  })
}


const onFilter = (condition: any) => {
  console.log('filter')
  requestBody.title = condition.title
  requestBody.tags = condition.tags
  requestData()
}

const onEdit = (id: number) => {
  router.push({path: `/question/edit/${id}`})
}

const onPageSizeChange = (pageSize: number) => {
  pagination.value.pageSize = pageSize
  requestData()
}

const onPageChange = (page: number) => {
  pagination.value.current = page
  requestData()
}

const onDelete = (id: number) => {
  QuestionControllerService.deleteQuestion({id:id}).then(res => {
    if (res.code !== 0) {
      Message.error(res.message ?? '删除失败')
      return
    }
    requestData()
  })
}

const onEnter = (id: number) => {
  router.push({path: `/to/question/${id}`})
}

onMounted(
    () => {
      requestData()
    }
)

</script>

<template>
  <div id="question-list">
    <a-layout style="height: 400px;">
      <a-layout-header id="header">
        <QueryCondition @filter="onFilter"></QueryCondition>
      </a-layout-header>
      <a-layout-content>
        <QuestionShow
            v-model:data="data"
            @pageSizeChange="onPageSizeChange"
            @pageChange="onPageChange"
            @delete="onDelete"
            @edit="onEdit"
            :pagination="pagination"
        >

          <template #action="{record}">
            <a-button type="primary" @click="onEnter(record.id)">详情</a-button>
          </template>

        </QuestionShow>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped>

</style>