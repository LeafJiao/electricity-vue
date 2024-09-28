<script setup>
import { Menu as IconMenu } from '@element-plus/icons-vue'
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
const circleUrl = ref(
  new URL('../assets/image/userAva.jpg', import.meta.url).href
)
const username = ref('SuperPower')
const menuItem = ref([
  {
    path: '/index/home',
    name: '首页'
  },
  {
    path: '/index/evaluation',
    name: '电价'
  },
  {
    path: '/index/sell',
    name: '交易额'
  },
  {
    path: '/index/trade',
    name: '购电'
  },
  {
    path: '/index/decision',
    name: '套餐'
  },
  {
    path: '/index/tactics',
    name: '交易策略'
  },
  {
    path: '/index/setting',
    name: '个人设置'
  }
])
// const router = useRouter()
// const goLink = (path) => {
//   router.push(path)
// }
</script>

<template>
  <div id="aside">
    <el-menu class="el-menu-vertical-demo" router style="height: 100%">
      <el-menu-item
        index="/index/user"
        style="height: 130px; border-bottom: 1px solid #dcdfe6"
      >
        <el-avatar :size="70" :src="circleUrl" />
        <span
          style="
            position: absolute;
            margin-top: -30px;
            margin-left: 80px;
            font-size: 25px;
            font-family: ali;
          "
          >{{ username }}</span
        >
        <span
          style="
            position: absolute;
            margin-top: 50px;
            margin-left: 80px;
            font-size: 15px;
            color: #93aec1;
          "
          >Welcom Back !</span
        >
      </el-menu-item>
      <span
        style="
          padding: 20px 50px;
          display: block;
          user-select: none;
          font-size: 18px;
          color: #a1a3b4;
          border-bottom: 1px solid #ebedf1;
        "
      >
        官方
      </span>
      <el-menu-item :index="menuItem[0].path">
        <el-icon style="margin-left: 30px; font-size: 30px"
          ><HomeFilled
        /></el-icon>
        <span style="font-size: 20px; margin-left: 10px">
          {{ menuItem[0].name }}
        </span>
      </el-menu-item>
      <span
        style="
          padding: 20px 50px;
          display: block;
          user-select: none;
          font-size: 18px;
          color: #a1a3b4;
          border-bottom: 1px solid #ebedf1;
        "
      >
        交易
      </span>
      <el-menu-item :index="menuItem[1].path">
        <el-icon size="50" style="margin-left: 30px">
          <SvgIcon iconName="icon-dian" />
        </el-icon>
        <span style="font-size: 20px; margin-left: 10px">
          {{ menuItem[1].name }}
        </span>
      </el-menu-item>
      <el-menu-item :index="menuItem[5].path">
        <el-icon style="margin-left: 30px; font-size: 30px"
          ><Platform
        /></el-icon>
        <span style="font-size: 20px; margin-left: 10px">
          {{ menuItem[5].name }}
        </span>
      </el-menu-item>
      <el-menu-item :index="menuItem[2].path">
        <el-icon style="margin-left: 30px; font-size: 30px"><List /></el-icon>
        <span style="font-size: 20px; margin-left: 10px">
          {{ menuItem[2].name }}
        </span>
      </el-menu-item>
      <!-- <el-menu-item :index="menuItem[3].path">
        <el-icon style="margin-left: 30px"><icon-menu /></el-icon>
        <span style="font-size: 20px; margin-left: 10px">
          {{ menuItem[3].name }}
        </span>
      </el-menu-item> -->
      <el-menu-item :index="menuItem[4].path">
        <el-icon style="margin-left: 30px; font-size: 30px"
          ><icon-menu
        /></el-icon>
        <span style="font-size: 20px; margin-left: 10px">{{
          menuItem[4].name
        }}</span>
      </el-menu-item>
      <span
        style="
          padding: 20px 50px;
          display: block;
          user-select: none;
          font-size: 18px;
          color: #a1a3b4;
          border-bottom: 1px solid #ebedf1;
        "
      >
        设置
      </span>
      <el-menu-item :index="menuItem[6].path">
        <el-icon style="margin-left: 30px; font-size: 30px">
          <Tools />
        </el-icon>
        <span style="font-size: 20px; margin-left: 10px">
          {{ menuItem[6].name }}
        </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu {
  border-radius: 10px;
  --el-menu-hover-text-color: #88acbc;
}

.el-menu-item {
  height: 70px;
  border-left: 5px solid #fff;
  border-bottom: 1px solid #ebedf1;
}

.el-menu-item:hover {
  background-color: rgb(136, 172, 188, 0.1);
  border-bottom: 1px solid rgb(136, 172, 188, 0.1);
}

.el-menu-item.is-active {
  border-left: 5px solid #88acbc;
  background-color: rgb(136, 172, 188, 0.1);
  color: #88acbc;
}
</style>
