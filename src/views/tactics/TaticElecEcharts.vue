<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
const main = ref()
onMounted(() => {
  init()
})
const init = () => {
  var myChart = echarts.init(main.value)
  var option = {
    color: '#95d475',
    tooltip: {},
    legend: {
      data: ['人数']
    },
    xAxis: {
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
    },
    yAxis: {},
    dataZoom: [
      // {
      //   type: 'inside'
      // },
      // {
      //   type: 'slider'
      // }
    ],
    series: [
      {
        name: '人数',
        type: 'bar',
        data: [60, 80, 90, 85, 80, 90, 85]
      }
    ]
  }
  myChart.setOption(option)
}
</script>

<template>
  <div id="taticElecEcharts" ref="main"></div>
</template>

<style scoped></style>
