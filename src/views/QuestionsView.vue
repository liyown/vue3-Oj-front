<script setup lang="ts">

import QueryCondition from "@/components/QueryCondition.vue";
import QuestionShow from "@/components/TableDataShow.vue";
import {QuestionControllerService, type QuestionGetRequestPage, type QuestionVO} from "@/generated";
import {onMounted, ref} from "vue";
import {Message} from "@arco-design/web-vue";
import router from "@/router";
import LoadingWrap from "@/components/LoadingWrap.vue";
import type {LoadingStatus} from "@/ts-type/my_type";

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

    loadingStatus.value = 'success'
  }).catch((e) => {
    loadingStatus.value = 'error'
    errorMessage.value = e.message
  })
}


const onFilter = (condition: any) => {
  console.log('filter')
  requestBody.title = condition.title
  requestBody.tags = condition.tags
  requestData()
}
const onPageChange = (page: number) => {
  pagination.value.current = page
  requestData()
}
const onEdit = (id: number) => {
  router.push({path: `/question/edit/${id}`})
}

const onPageSizeChange = (pageSize: number) => {
  pagination.value.pageSize = pageSize
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
const loadingStatus = ref<LoadingStatus>('loading')
const errorMessage = ref('')
const loadingRefresh = () => {
  loadingStatus.value = 'loading'
  requestData()
}

</script>

<template>
  <div id="question-list">
    <a-layout style="height: 400px;">
      <a-layout-header id="header">
        <QueryCondition @filter="onFilter">

        </QueryCondition>
      </a-layout-header>
      <a-layout-content>
        <LoadingWrap  :loadingStatus="loadingStatus" @loadingRefresh="loadingRefresh" :error-message="errorMessage">
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
        </LoadingWrap>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped>

</style>