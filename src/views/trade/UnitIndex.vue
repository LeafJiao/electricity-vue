<script setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { CaretRight } from '@element-plus/icons-vue'

const drawer = ref(false)
const direction = ref('rtl')
const radio1 = ref('Option 1')
function cancelClick() {
  drawer.value = false
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer.value = false
    })
    .catch(() => {
      // catch error
    })
}
</script>

<template>
  <el-button
    type="primary"
    plain
    @click="drawer = true"
    style="width: 400px; height: 50px"
  >
    长沙理工大学
    <el-icon class="el-icon--right"><CaretRight /></el-icon>
  </el-button>

  <el-drawer v-model="drawer" :direction="direction">
    <template #header>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <div>
        <el-radio v-model="radio1" label="Option 1" size="large"
          >Option 1</el-radio
        >
        <el-radio v-model="radio1" label="Option 2" size="large"
          >Option 2</el-radio
        >
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </div>
    </template>
  </el-drawer>
</template>
