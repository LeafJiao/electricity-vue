<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'option1',
    label: '支付宝'
  },
  {
    value: 'option2',
    label: '银联'
  },
  {
    value: 'option3',
    label: '数字人民币'
  },
  {
    value: 'option4',
    label: '微信'
  }
]
</script>

<template>
  <el-select
    v-model="value"
    placeholder="请选择支付方式"
    size="large"
    style="width: 300px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
