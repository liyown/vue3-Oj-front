<template>
  <a-table :columns="columns"
           :data="data"
           @pageChange="onPageChange"
           @pageSizeChange="onPageSizeChange"
           :pagination="pagination.pagination"
  >
    <template #optional="{ record }">
      <a-tag v-for="tag in record.tags" :key="tag.id" :color="getColor(tag)">
        {{ tag }}
      </a-tag>
    </template>
    <template #action="{ record }">
      <slot name="action" :record="record"></slot>
    </template>
  </a-table>
</template>

<script setup lang="ts">

import type {PaginationProps, TableData} from "@arco-design/web-vue";

import type {QuestionVO} from "@/generated";


// 组件属性
const data = defineModel<TableData[]>('data', {
  type: Array<QuestionVO>,
  default: [],
})
const pagination = defineProps({
  pagination: {
    type: Object as () => PaginationProps,
    default: () => ({
      current: 1,
      pageSize: 10,
      total: 0,
    }),
  }
})
const emit = defineEmits(['pageChange', 'pageSizeChange', 'delete', 'edit'])



// 'red' | 'orangered' | 'orange' | 'gold' | 'lime' | 'green' | 'cyan' | 'blue' | 'arcoblue' | 'purple' | 'pinkpurple' | 'magenta' | 'gray'
let color = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray", "brown", "cyan", "magenta"];
const columns = [{
  title: '标题',
  dataIndex: 'title',

}, {
  title: '标签',
  slotName: 'optional'
}, {
  title: '内容',
  dataIndex: 'content',
},{
  title: '操作',
  slotName: 'action',
}];


const onPageChange = (page: number) => {
  emit('pageChange', page)
}
const onPageSizeChange = (pageSize: number) => {
  emit('pageSizeChange', pageSize)
}

function getColor(tag: string): string {
  // hash code
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  // calculate color
  let index: number = Math.abs(hash % 13);
  return color[index]
}


</script>
