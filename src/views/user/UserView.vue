<script setup lang="ts">
import {
  type LoginUserVO,

  UserControllerService
} from "@/generated";
import {onMounted, reactive, ref} from "vue";
import {type DescData, Message} from "@arco-design/web-vue";
import QuestionSubmitRecord from "@/components/QuestionSubmitRecord.vue";
import {useLoginUserStore} from "@/stores/loginUser";

const userStore = useLoginUserStore()

const loginUser: LoginUserVO = {
  id: 0,
  userName: '',
  userAvatar: '',
  userProfile: '',
  userRole: "",
}
let data = ref<DescData[]>()
onMounted(() => {
  UserControllerService.getLoginUser().then(res => {
    if (!res.data || res.code !== 0) {
      Message.error('获取用户信息失败')
      return
    }
    loginUser.id = res.data.id
    loginUser.userName = res.data.userName
    loginUser.userAvatar = res.data.userAvatar
    loginUser.userProfile = res.data.userProfile
    loginUser.userRole = res.data.userRole
    handleLoginUser(loginUser)
  })

})


const handleLoginUser = (loginUser: LoginUserVO) => {
  data.value = [
    {
      label: '用户名',
      value: loginUser.userName
    },
    {
      label: '用户角色',
      value: loginUser.userRole
    },
    {
      label: '用户简介',
      value: loginUser.userProfile
    }
  ]

}
const questionId = ref<string>()



</script>

<template>
  <div id="app">
    <!--展示个人信息-->
    <a-layout :resize-directions="['right']" theme="light" style="height: 90vh" >
        <a-layout-sider theme="light">
          <a-descriptions id="user-info"
                          style="margin-top: 20px"
                          :data="data"
                          size="large"
                          :column="1"/>
        </a-layout-sider>
        <a-layout-content>
          <a-tag color="blue">提交记录</a-tag>
          <a-row id="grid-demo" >
            <a-col flex="auto" >
              <a-tag color="blue">题目ID:</a-tag>
              <a-input  style="margin: 0 16px" v-model="questionId" :style="{width:'200px'}" placeholder="请输入题目ID"/>
            </a-col>
          </a-row>
          <QuestionSubmitRecord
              :question-id="parseInt(questionId as string)"
              :user-id="userStore.loginUser.id"
          />
        </a-layout-content>
    </a-layout>

  </div>
</template>

<style scoped>

#app {
  min-height: 90vh;
}

#user-info {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  font-size: 16px;
}


</style>