<script setup lang="ts">
import {useRouter} from 'vue-router'
import QueryCondition from "@/components/QueryCondition.vue";
import QuestionShow from "@/components/QuestionShow.vue";
import AddQuestionView from "@/views/question/QuestionAddView.vue";

const router = useRouter()
</script>

<template>
  <div id="questionlayout">
<!--    <template v-if="router.currentRoute.value.path === '/question/add'">-->
<!--      <add-question-view></add-question-view>-->
<!--    </template>-->
<!--    <template v-else>-->
<!--      <a-layout style="height: 400px;">-->
<!--        <a-layout-header id="header">-->
<!--          <QueryCondition></QueryCondition>-->
<!--        </a-layout-header>-->
<!--        <a-layout-content>-->
<!--          <QuestionShow></QuestionShow>-->
<!--        </a-layout-content>-->
<!--      </a-layout>-->
<!--    </template>-->
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
#header {
  height: 48px
}
</style>