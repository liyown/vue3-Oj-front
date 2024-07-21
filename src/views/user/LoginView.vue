<template>
  <div id="loginView">
    <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
      <a-form-item field="userAccount" tooltip="Please enter username" label="Username">
        <a-input
            v-model="form.userAccount"
            placeholder="输入用户名"
        />
      </a-form-item>
      <a-form-item field="userPassword" label="Post">
        <a-input-password v-model="form.userPassword" placeholder="密码不少于8位"/>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
import {UserControllerService} from "@/generated";
import {useLoginUserStore} from "@/stores/loginUser";
import access from "@/access/access";
import {Message} from "@arco-design/web-vue";
import {useRouter, useRoute} from "vue-router";

const userStore = useLoginUserStore()
const router = useRouter()
const route = useRoute()
const form = reactive({
  userAccount: '',
  userPassword: '',
});
const handleSubmit = async () => {
  let res = await UserControllerService.userLogin(form)
  if (res.code === 0) {
    userStore.loginUser.name = res.data?.userName as string
    if (res.data?.userRole === 'admin') {
      userStore.loginUser.role = access.ADMIN
    } else {
      userStore.loginUser.role = access.USER
    }
    if (route.query.redirect) {
      await router.push({
        path: route.query.redirect as string,
        replace: true
      })
    } else {
      await router.push({
        path: "/",
        replace: true
      })
    }

    console.log('登录成功')
  } else {
    console.log('登录失败')
    Message.error("登录失败")
  }
};

</script>

<style scoped>
#loginView {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

</style>
