<script setup lang="ts">
</script>

<template>
  <div id="app">
    <a-layout style="height: 400px;">
      <a-layout-header id="header" style="margin: 16px auto">
        <a-tag size="large" color="blue" >
          项目开发记录
        </a-tag>
        <a-tag size="large" color="blue" >
          2024-07-10 ~ 2024-07-22
        </a-tag>
      </a-layout-header>
      <a-layout-content id="content">

        <a-timeline>
          <a-timeline-item label="2024-07-10">整体框架搭建</a-timeline-item>
          <a-timeline-item label="2024-07-11">登录页面搭建</a-timeline-item>
          <a-timeline-item label="2024-07-13">题目页面设计</a-timeline-item>
          <a-timeline-item label="2024-07-14">题目提交页面设计</a-timeline-item>
          <a-timeline-item label="2024-07-15">引入Markdown编辑器和代码编辑器</a-timeline-item>
          <a-timeline-item label="2024-07-16">设计答题页面</a-timeline-item>
          <a-timeline-item label="2024-07-17">设计提交历史页面</a-timeline-item>
          <a-timeline-item label="2024-07-18">新增加载动画，包装为组件</a-timeline-item>
          <a-timeline-item label="2024-07-19">新增查询条件组件</a-timeline-item>
          <a-timeline-item label="2024-07-20">新增无权限页面</a-timeline-item>
          <a-timeline-item label="2024-07-21">抽取数据展示页面</a-timeline-item>
          <a-timeline-item label="2024-07-22">优化布局，完成项目</a-timeline-item>
        </a-timeline>
      </a-layout-content>
      <a-layout-footer id="footer">
        <!--github -->
        测试账号:liuyaowen 密码:123456
        <br>
        项目地址:
        <a-link href="https://github.com/liyown/vue3-Oj-front" target="_blank">github</a-link>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>

#app {
  width: 50vw;
  margin: auto;
}

#content {
  background-color: rgba(224, 240, 253, 0.75);
  padding: 24px;
}
#footer {
  text-align: center;
  background-color: #f0f2f5;
  padding: 12px;
  margin-top: 4px;
  box-shadow: #eee 0 5px 5px 0;
}

</style>
