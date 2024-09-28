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
    color: '#79bbff',
    title: {
      text: '近期盈利'
    },
    tooltip: {},
    legend: {
      data: ['盈利额']
    },
    xAxis: {
      data: [
        '2月01号-2月15号',
        '2月16号-2月29号',
        '3月01号-3月15号',
        '3月16号-3月31号',
        '4月01号-4月15号',
        '4月16号-4月30号',
        '5月01号-5月15号'
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
        name: '盈利额',
        type: 'bar',
        data: [50000, 56156, 51534, 53255, 60123, 54654, 51325]
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
