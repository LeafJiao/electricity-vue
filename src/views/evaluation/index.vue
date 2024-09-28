<script setup>
import PriceIndex from './PriceIndex.vue'
import EnergyIndex from './EnergyIndex.vue'
import DayEcharts from './DayEcharts.vue'
import { ref } from 'vue'

const nowPrice = ref('')
const setNowPrice = (msg) => {
  nowPrice.value = msg
}
</script>

<template>
  <div id="advice">
    <div
      style="
        position: absolute;
        margin-top: 110px;
        margin-left: 278px;
        z-index: 1000;
      "
    >
      <span style="display: block; font-size: 60px; color: rgb(115, 192, 222)">
        {{ nowPrice }}
      </span>
      <span style="font-size: 20px; margin-left: 15px"> 元/千瓦时 </span>
    </div>
    <EnergyIndex></EnergyIndex>

    <div id="evaluate">
      <PriceIndex @nowPrice="setNowPrice"></PriceIndex>
    </div>

    <div id="priceDiv">
      <div style="position: absolute; height: 100%; width: 60%">
        <DayEcharts></DayEcharts>
      </div>
      <div
        style="position: absolute; height: 100%; margin-left: 68%; width: 30%"
      >
        <span
          style="
            display: inline-block;
            padding: 18px 60px;
            margin-top: 20px;
            border-radius: 15px;
            font-size: 18px;
            background-color: #45958ecc;
            color: #fff;
          "
        >
          未来十五天电价报告
        </span>
        <div style="display: block; margin-top: 20px">
          <div>
            <span style="font-size: 20px; color: #a1a3b4">
              <el-icon size="25">
                <SvgIcon iconName="icon-pingjunjiage" />
              </el-icon>
              平均电价
            </span>
            <span
              style="font-size: 20px; font-family: ali-2; margin-left: 20px"
            >
              0.8元/千瓦时
            </span>
          </div>
          <div style="margin-top: 20px">
            <span style="font-size: 20px; color: #a1a3b4">
              <el-icon size="25">
                <SvgIcon iconName="icon-zonghezuigaochesu" />
              </el-icon>
              最高电价
            </span>
            <span
              style="font-size: 20px; font-family: ali-2; margin-left: 20px"
            >
              1.3元/千瓦时
            </span>
          </div>
          <div style="margin-top: 20px">
            <span style="font-size: 20px; color: #a1a3b4">
              <el-icon size="25">
                <SvgIcon iconName="icon-lishizuidi" />
              </el-icon>
              最低电价
            </span>
            <span
              style="font-size: 20px; font-family: ali-2; margin-left: 20px"
            >
              0.6元/千瓦时
            </span>
          </div>
          <div style="margin-top: 20px">
            <span style="font-size: 20px; color: #a1a3b4">
              <el-icon size="25">
                <SvgIcon iconName="icon-riqi" />
              </el-icon>
              预测适合购买日期
            </span>
            <span
              style="font-size: 20px; font-family: ali-2; margin-left: 20px"
            >
              4月09日
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#advice {
  position: absolute;
  width: 100%;
  height: 100%;
}

#energy {
  position: absolute;
  width: 500px;
  height: 300px;
  margin-top: 15px;
  margin-left: 90px;
  border-radius: 25px;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.1),
    -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  background-color: #fcfcfc;
}

#evaluate {
  position: absolute;
  width: 580px;
  height: 300px;
  margin-left: 610px;
  margin-top: 15px;
  border-radius: 25px;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.1),
    -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  background-color: #fcfcfc;
}

#price {
  position: absolute;
  width: 530px;
  height: 290px;
  margin-left: 20px;
  margin-top: 10px;
}

.el-input:deep(.el-input-group__prepend) {
  background-color: #f56c6c;
  color: #fef0f0;
}

.el-input {
  --el-input-border-color: #f56c6c;
  --el-input-hover-border-color: #f56c6c;
  --el-input-focus-border-color: #f6c445;
}

#priceDiv {
  position: absolute;
  display: block;
  width: 88%;
  height: 320px;
  margin-top: 335px;
  margin-left: 90px;
  border-radius: 25px;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.1),
    -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  background-color: #fcfcfc;
}

#dayEcharts {
  position: absolute;
  width: 100%;
  height: 90%;
  margin-top: 20px;
  margin-left: 30px;
}

#energy:hover,
#evaluate:hover,
#priceDiv:hover {
  box-shadow:
    2px 2px 10px rgba(186, 228, 244),
    -2px 0 10px rgba(186, 228, 244);
}
</style>
