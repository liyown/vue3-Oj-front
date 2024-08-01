<script setup lang="ts">
import type {LoadingStatus} from "@/ts-type/my_type";

const props = defineProps<{
  loadingStatus: LoadingStatus
  errorMessage: string
}>()


const emit = defineEmits<{
  (event: 'loadingRefresh'): void
}>()

</script>

<template>
  <div class="layout">
    <template v-if="props.loadingStatus === 'loading'">
      <a-skeleton :animation="true" style="margin-top: 24px">
        <a-space direction="vertical" :style="{width:'100%'}" size="large">
          <a-skeleton-line :rows="2" />
          <a-skeleton-shape />
          <a-skeleton-line :rows="5" />
        </a-space>
      </a-skeleton>
    </template>
    <template v-if="props.loadingStatus === 'success'">
      <slot></slot>
    </template>
    <template v-if="props.loadingStatus === 'error'">
      <a-alert type="error" style="margin: 24px auto; width: 500px">
        <template #title>
          {{props.errorMessage}}
        </template>
        <a-button type="primary" @click="emit('loadingRefresh')">点击刷新</a-button>
      </a-alert>
    </template>

  </div>
</template>

<style scoped>

</style>