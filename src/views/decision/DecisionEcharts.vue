<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
const main = ref()
onMounted(() => {
  init()
})
const init = () => {
  var myChart = echarts.init(main.value)
  const rawData = [
    [100, 302, 301, 334, 390, 330, 320],
    [220, 182, 191, 234, 290, 330, 310],
    [150, 212, 201, 154, 190, 330, 410],
    [820, 832, 901, 934, 1290, 1330, 1320]
  ]
  const totalData = []
  for (let i = 0; i < rawData[0].length; ++i) {
    let sum = 0
    for (let j = 0; j < rawData.length; ++j) {
      sum += rawData[j][i]
    }
    totalData.push(sum)
  }
  const grid = {
    left: 100,
    right: 100,
    top: 50,
    bottom: 50
  }
  const series = ['其他', '逆峰型', '迎峰型', '单一电价'].map((name, sid) => {
    return {
      name,
      type: 'bar',
      stack: 'total',
      barWidth: '60%',
      label: {
        show: true,
        formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
      },
      data: rawData[sid].map((d, did) =>
        totalData[did] <= 0 ? 0 : d / totalData[did]
      )
    }
  })
  var option = {
    color: ['#a0cfff', '#b3e19d', '#f3d19e', '#f89898'],
    legend: {
      selectedMode: false
    },
    grid,
    yAxis: {
      type: 'value'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series
  }
  myChart.setOption(option)
}
</script>

<template>
  <div id="decisionEcharts" ref="main"></div>
</template>

<style scoped></style>
