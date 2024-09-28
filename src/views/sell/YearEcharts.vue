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
      text: '2024' + '年各月份交易额'
    },
    tooltip: {},
    legend: {
      data: ['价格']
    },
    xAxis: {
      type: 'category',
      data: [
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
        '一月',
        '二月',
        '三月',
        '四月'
      ]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '价格',
        data: [
          120000, 200000, 150000, 120000, 130000, 140000, 150000, 120000,
          200000, 150000, 120000, 130000
        ],
        type: 'line'
      }
    ]
  }
  myChart.setOption(option)
}
</script>

<template>
  <div id="yearEcharts" ref="main"></div>
</template>

<style scoped></style>
