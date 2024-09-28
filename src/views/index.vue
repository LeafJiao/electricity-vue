<script setup>
import Aside from '@/components/AsideIndex.vue'
import Header from '@/components/HeaderIndex.vue'
</script>

<template>
  <div>
    <Aside></Aside>
    <Header></Header>
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}

#header {
  position: absolute;
  width: 82%;
  height: 10%;
  margin-left: 18%;
  display: flex;
  align-items: center;
}

#aside {
  position: absolute;
  width: 18%;
  height: 100%;
}

#main {
  position: absolute;
  width: 82%;
  height: 88%;
  margin-top: 5%;
  margin-left: 18%;
  overflow: auto;
}
</style>
