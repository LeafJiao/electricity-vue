<script setup>
import { ref } from 'vue'

const oldPassword = ref('')
const newPassword = ref('')
const resetPassword = ref('')
</script>

<template>
  <div id="setting">
    <div style="position: absolute; font-size: 25px; margin-top: 20px">
      修改密码
    </div>
    <el-input
      v-model="oldPassword"
      style="position: absolute; width: 300px; height: 40px; margin-top: 100px"
      placeholder="请输入旧密码"
    >
      <template #prepend> 旧密码 </template>
    </el-input>
    <el-input
      v-model="newPassword"
      style="position: absolute; width: 300px; height: 40px; margin-top: 170px"
      placeholder="请输入新密码"
    >
      <template #prepend> 新密码 </template>
    </el-input>
    <el-input
      v-model="resetPassword"
      style="position: absolute; width: 300px; height: 40px; margin-top: 240px"
      placeholder="请再次输入新密码"
    >
      <template #prepend> 新密码 </template>
    </el-input>
    <el-button
      type="info"
      plain
      style="position: absolute; width: 300px; height: 40px; margin-top: 310px"
    >
      提交
    </el-button>
  </div>
</template>

<style scoped>
#setting {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
}
.el-input:deep(.el-input-group__prepend) {
  background-color: #b1b3b8;
  color: #fff;
}
</style>
