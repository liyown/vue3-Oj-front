<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {
  QuestionSubmitControllerService,
  type QuestionSubmitGetRequestPage, type QuestionSubmitVO,
} from "@/generated";
import {useRoute} from "vue-router";
import {useLoginUserStore} from "@/stores/loginUser";
import {type DescData, Message} from "@arco-design/web-vue";
import CodeEditor from "@/components/CodeEditor.vue";

const data = ref<Array<QuestionSubmitVO>>([])
const route = useRoute()
const userStore = useLoginUserStore()

const columns = [{
  title: '语言',
  dataIndex: 'language',

}, {
  title: '状态',
  dataIndex: 'status'
}, {
  title: '操作',
  slotName: 'action',
}];


const requestBody: QuestionSubmitGetRequestPage = {
  "current": 1,
  "pageSize": 10,
  "questionId": 0,
  "userid": 0,
  "sortField": "createTime",
  "sortOrder": "ascend"
}

const pagination = reactive({
  current: 1,
  pageSize: 10,
  total: 0,
})

function requestData() {
  requestBody.current = pagination.current
  requestBody.pageSize = pagination.pageSize
  QuestionSubmitControllerService.listSubmitVo(requestBody).then(res => {
    if (res.code !== 0) {
      Message.error(res.message as string)
    }
    data.value = res.data?.records ?? []
    pagination.total = res.data?.total as number

  })
}

const onPageChange = (page: number) => {
  pagination.current = page
  requestData()
}

const onPageSizeChange = (pageSize: number) => {
  pagination.pageSize = pageSize
  requestData()
}


onMounted(() => {
  requestBody.questionId = parseInt(route.params.id[0])
  requestBody.userid = userStore.loginUser.id
  QuestionSubmitControllerService.listSubmitVo(requestBody).then(res => {
    if (res.code !== 0) {
      Message.error(res.message as string)
    }
    data.value = res.data?.records ?? []
    pagination.total = res.data?.total as number

  })
})
// 抽屉
const drawerData = ref<QuestionSubmitVO>()
const descriptionData = ref<DescData[]>()
const handleDescription = (data: QuestionSubmitVO): DescData[] => {
  return [
    {
      label: '状态',
      value: data.status ?? ''
    }, {
      label: '语言',
      value: data.language ?? ''
    }, {
      label: "判题结果",
      value: data.judgeInfo?.message ?? ''
    }, {
      label: "使用内存",
      value: data.judgeInfo?.memory ?? ''
    }, {
      label: "使用时间",
      value: data.judgeInfo?.time ?? ''
    }
  ]
}

const onclick = (id: number) => {
  QuestionSubmitControllerService.get({id: id}).then(res => {
    if (res.code !== 0) {
      Message.error(res.message as string)
    }
    drawerData.value = res.data ?? {}
    descriptionData.value = handleDescription(drawerData.value)
    showDrawer()
  })


}

const visible = ref(false)
const handleOk = () => {
  visible.value = false
}

const handleCancel = () => {
  visible.value = false
}

const showDrawer = () => {
  visible.value = true
}


</script>

<template>
  <div>
    <a-table :columns="columns"
             :data="data"
             @pageChange="onPageChange"
             @pageSizeChange="onPageSizeChange"
             :pagination="pagination"
    >
      <template #action="{record}">
        <a-button type="primary" @click="onclick(record.id)">查看</a-button>
      </template>
    </a-table>

    <a-drawer
        :width="800"
        :height="340"
        :visible="visible"
        :placement="'left'"
        :footer="false"
        @ok="handleOk"
        @cancel="handleCancel"
        unmountOnClose
    >
      <template #title>
        <div  style="margin-left: 24px">
            提交详情
        </div>
      </template>
      <CodeEditor v-model:code="drawerData.code"></CodeEditor>
      <a-space size="mini" style="margin-left: 24px">
        <a-descriptions :data="descriptionData" title="判题结果" bordered/>
      </a-space>
    </a-drawer>
  </div>
</template>

<style scoped>

</style>