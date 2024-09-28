<script setup>
import { ref } from 'vue'
import FontEcharts from './FontEcharts.vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div id="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      style="width: 100%"
      router
    >
      <el-menu-item style="width: 250px">
        <FontEcharts fontSize="25"></FontEcharts>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item style="font-size: 20px">
        <el-icon style="font-size: 20px"><Message /></el-icon>
      </el-menu-item>
      <el-menu-item style="font-size: 20px">
        <el-icon style="font-size: 20px"><Setting /></el-icon>
      </el-menu-item>
      <el-menu-item index="/login" style="font-size: 20px">
        退出
        <el-icon style="font-size: 30px"><Bicycle /></el-icon>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

#fontEcharts {
  width: 250px;
  height: 60px;
}

.el-menu {
  border-radius: 10px;
  height: 100%;
  --el-menu-active-color: #fff;
  --el-menu-hover-bg-color: #fff;
}
</style>
