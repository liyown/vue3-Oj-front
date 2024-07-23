<script setup lang="ts">
import {customRef, defineComponent, onMounted, reactive, ref, toRef, watch} from 'vue';
import {Message} from '@arco-design/web-vue';
import {
  IconCaretRight,
  IconCaretLeft,
  IconHome,
  IconCalendar,
} from '@arco-design/web-vue/es/icon';
import MDEditor from "@/components/MDEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue";
import {type QuestionAddRequest, QuestionControllerService, type QuestionVO, type QuestionUpdateRequest} from "@/generated";
import {useRoute} from "vue-router";

const collapsed = ref(false);
const onCollapse = () => {
  collapsed.value = !collapsed.value;
};
const onsubmit = () => {
  QuestionControllerService.updateQuestion(question.value);
  Message.success('提交成功');
};
const currentKey = ref('0_1');

function onClickMenuItem(key: string) {
  currentKey.value = key;
}

function onAddJudgeCase() {
  if (judgeCase.input == "" || judgeCase.output == "") {
    Message.error('输入输出不能为空');
    return;
  }
  question.value.judgeCase.push({
    input: judgeCase.input,
    output: judgeCase.output,
  });
  judgeCase.input = '';
  judgeCase.output = '';
}

const judgeCase = reactive({
  input: '',
  output: '',
});


let question = ref<QuestionUpdateRequest>({
  id: 0,
  title: '',
  content: '',
  tags: [],
  answer: '',
  judgeCase: [],
  judgeConfig: {
    timeLimit: 1,
    memoryLimit: 1,
    stackLimit: 1,
  }
});

const route = useRoute();
const questionId = parseInt(route.params.id[0])

onMounted(() => {
  QuestionControllerService.getRawQuestion({id: questionId}).then(res => {
    if (res.code !== 0) {
      Message.error(res.message ?? '请求失败')
      return
    }
    // 给reactive对象赋值
    question.value = res.data as QuestionUpdateRequest
  });
})


</script>
<template>
  <div id="question-add">
    <a-layout class="layout-demo">
      <a-layout-sider
          hide-trigger
          collapsible
          :collapsed="collapsed"
      >
        <a-menu
            :defaultOpenKeys="['0_1']"
            :defaultSelectedKeys="['0_1']"
            :style="{ width: '100%' }"
            @menuItemClick="onClickMenuItem"
        >
          <a-menu-item key="0_1">
            题目标题
          </a-menu-item>
          <a-menu-item key="0_2">
            题目内容
          </a-menu-item>
          <a-menu-item key="0_3">
            题目属性
          </a-menu-item>
          <a-menu-item key="0_4">
            答案
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="padding-left: 20px;">
          <a-button type="outline" shape="round" @click="onCollapse" style="margin: 8px 0">
            <IconCaretRight v-if="collapsed"/>
            <IconCaretLeft v-else/>
          </a-button>


          <a-button type="primary" @click="onsubmit" style="float: right; margin: 8px 48px 0 0 ">
            提交
          </a-button>
          <a-button type="dashed"  style="float: right; margin: 8px">
            题目id: {{question.id}}
          </a-button>

        </a-layout-header>

        <a-layout style="padding: 0 24px;">
          <a-layout-content v-if="currentKey == '0_1'">
            <MDEditor v-model="question.title"/>
          </a-layout-content>
          <a-layout-content v-else-if="currentKey == '0_2'">
            <MDEditor v-model="question.content"/>
          </a-layout-content>
          <a-layout-content v-else-if="currentKey === '0_3'">
            <a-row style="margin-bottom: 48px ;font-weight: bold">
              <a-col :span="24">
                <a-row style="margin-bottom: 8px">
                  <a-col :span="2" style="margin: auto; text-align: center">
                    标签
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="22">
                    <a-input-tag v-model="question.tags" placeholder="Please Enter" allow-clear/>
                  </a-col>
                </a-row>
              </a-col>
            </a-row>
            <a-row style="margin-bottom: 48px">
              <a-col :span="24">
                <a-row style="margin-bottom: 8px ;font-weight: bold">
                  <a-col :span="24" style="margin: auto; text-align: center">
                    题目限制
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="2" style="margin: auto; text-align: center">
                    <a-tag color="blue">时间(ms)</a-tag>
                  </a-col>
                  <a-col :span="5">
                    <a-slider v-model="question.judgeConfig.timeLimit"
                              :style="{ width: '300px' }"
                              show-input
                              :max="1000"/>
                  </a-col>
                  <a-col :span="2" style="margin: auto; text-align: center">
                    <a-tag color="blue">内存(kb)</a-tag>
                  </a-col>
                  <a-col :span="5">
                    <a-slider v-model="question.judgeConfig.memoryLimit" :style="{ width: '300px' }" show-input
                              :max="1000"/>
                  </a-col>
                  <a-col :span="2" style="margin: auto; text-align: center">
                    <a-tag color="blue">堆栈(kb)</a-tag>
                  </a-col>
                  <a-col :span="5">
                    <a-slider v-model="question.judgeConfig.stackLimit" :style="{ width: '300px' }" show-input
                              :max="1000"/>
                  </a-col>
                </a-row>

              </a-col>
            </a-row>
            <a-row style="margin-bottom: 48px">
              <a-col :span="24">
                <a-row style="margin-bottom: 8px;font-weight: bold">
                  <a-col :span="24" style="margin: auto; text-align: center">
                    测试用例
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="2" style="margin: auto; text-align: center">
                    <a-tag color="blue">测试输入</a-tag>
                  </a-col>
                  <a-col :span="8">
                    <a-input v-model="judgeCase.input" placeholder="Please enter something" allow-clear/>
                  </a-col>
                  <a-col :span="2" style="margin: auto; text-align: center">
                    <a-tag color="blue">测试输出</a-tag>
                  </a-col>
                  <a-col :span="8">
                    <a-input v-model="judgeCase.output" placeholder="Please enter something" allow-clear/>
                  </a-col>
                  <a-col :span="4">
                    <a-button style="margin: 0 16px" type="primary" size="mini" @click="onAddJudgeCase">添加</a-button>
                    <a-button style="margin: 0 16px" type="secondary" size="mini"
                              @click="()=>{question.judgeCase = []}">清空所有
                    </a-button>
                  </a-col>
                </a-row>
              </a-col>
            </a-row>
            <a-table
                :columns="[{title: '输入', dataIndex: 'input'}, {title: '输出', dataIndex: 'output'},{title: '操作',slotName:'button'}]"
                :data="question.judgeCase">
              <template #button="{ record }">
                <a-button type="dashed" size="mini"
                          @click="() => {question.judgeCase.splice(question.judgeCase.indexOf(record), 1)}">删除
                </a-button>
              </template>
            </a-table>
          </a-layout-content>
          <a-layout-content v-else-if="currentKey === '0_4'">
            <CodeEditor v-model:code="question.answer"/>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>

  </div>
</template>
<style scoped>
.layout-demo {
  min-height: 85vh;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}

.layout-demo :deep(.arco-layout-content) {

}
</style>
