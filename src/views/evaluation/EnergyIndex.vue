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
    color: ['#a0cfff', '#b3e19d', '#f3d19e', '#f89898'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: '能源占比',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10
        },
        label: {
          show: false,
          position: 'center'
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: 40,
        //     fontWeight: 'bold'
        //   }
        // },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '传统能源' },
          { value: 735, name: '水利能源' },
          { value: 580, name: '风力能源' },
          { value: 300, name: '光伏能源' }
        ]
      }
    ]
  }
  option && myChart.setOption(option)
}
</script>

<template>
  <div id="energy" ref="main"></div>
</template>

<style scoped></style>
