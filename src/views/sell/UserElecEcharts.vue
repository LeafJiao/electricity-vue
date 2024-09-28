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
    title: {
      text: '近期使用电荷量'
    },
    tooltip: {},
    legend: {
      data: ['用电量']
    },
    xAxis: {
      data: [
        '2月12号-2月18号',
        '2月19号-2月25号',
        '2月26号-3月3号',
        '3月4号-3月10号',
        '3月11号-3月17号',
        '3月18号-3月24号',
        '3月25号-3月31号'
      ]
    },
    yAxis: {},
    dataZoom: [
      {
        type: 'inside'
      },
      {
        type: 'slider'
      }
    ],
    series: [
      {
        name: '用电量',
        type: 'bar',
        data: [200, 230, 210, 205, 220, 218, 238]
      }
    ]
  }
  myChart.setOption(option)
}
</script>

<template>
  <div id="userElecEcharts" ref="main"></div>
</template>

<style scoped></style>
