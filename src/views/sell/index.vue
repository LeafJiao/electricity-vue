<script setup>
import SellElectricity from '@/views/sell/SellElectricity.vue'
import UserElectricity from './UserElectricity.vue'
</script>

<template>
  <div id="sell">
    <SellElectricity></SellElectricity>
    <UserElectricity></UserElectricity>
  </div>
</template>

<style scoped>
#sell {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

#sellElectricity {
  position: absolute;
  width: 85%;
  height: 35%;
  margin-top: 15px;
}

#userElectricity {
  position: absolute;
  width: 85%;
  margin-top: 23%;
}
</style>
