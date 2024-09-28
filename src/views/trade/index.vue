<script setup>
import Unit from '@/views/trade/UnitIndex.vue'
import Pay from '@/views/trade/PayIndex.vue'
import { ref } from 'vue'

const account = ref('')
const money = ref('20')
const selectMoney = ref(['20', '30', '50', '100', '200', '500'])
</script>

<template>
  <div id="trade">
    <div id="type"></div>
    <div id="selectInfor">
      <h3>缴费单位</h3>
      <Unit></Unit>
      <h3 style="margin-top: 30px">户号</h3>
      <el-input
        v-model="account"
        placeholder="请输入13位户号"
        style="position: relative; width: 400px; height: 50px"
      >
      </el-input>
      <h3 style="margin-top: 30px">选择费用</h3>
      <el-input
        v-model="money"
        placeholder="请输入需要缴纳的费用"
        style="position: relative; width: 400px; height: 50px"
      >
        <template #prepend>自定义费用</template>
        <template #append>元</template>
      </el-input>
      <el-radio-group v-model="money" style="width: 400px">
        <el-radio
          v-for="item in selectMoney"
          :key="item"
          border
          style="width: 90px; height: 50px; margin-top: 10px"
          :label="item"
        >
          {{ item }}元
        </el-radio>
      </el-radio-group>
      <h3 style="margin-top: 30px">支付方式</h3>
      <Pay></Pay>
      <el-button
        type="primary"
        round
        style="width: 300px; height: 40px; margin-top: 30px"
      >
        支付
        <el-icon> <Position /> </el-icon>
      </el-button>
    </div>
  </div>
</template>

<style scoped>
#trade {
  position: absolute;
  width: 100%;
  height: 100%;
}

#selectInfor {
  position: absolute;
  width: 40%;
  margin-top: 5%;
  margin-left: 5%;
  /* border: solid; */
  border-radius: 20px;
}

.el-input:deep(.el-input-group__prepend) {
  background: none;
}

.el-input:deep(.el-input-group__append) {
  background: none;
}
</style>
