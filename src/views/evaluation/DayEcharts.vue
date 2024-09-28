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
      text: '未来15天电价'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['最低电价', '平均电价', '最高电价']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '4月06日',
        '4月07日',
        '4月08日',
        '4月09日',
        '4月10日',
        '4月11日',
        '4月12日',
        '4月13日',
        '4月14日',
        '4月15日',
        '4月16日',
        '4月17日',
        '4月18日',
        '4月19日',
        '4月20日'
      ]
    },
    yAxis: {
      show: false
    },
    series: [
      {
        name: '最低电价',
        type: 'line',
        stack: 'Total',
        data: [
          0.6, 0.7, 0.9, 0.6, 0.8, 1.0, 1.2, 1.3, 0.8, 0.9, 0.7, 0.9, 1.0, 1.1,
          1.0
        ],
        markPoint: {
          data: [{ type: 'min', name: 'Min' }]
        }
      },
      {
        name: '平均电价',
        type: 'line',
        stack: 'Total',
        data: [
          0.8, 0.9, 1.0, 0.8, 0.9, 1.2, 1.3, 1.3, 0.9, 1.0, 0.8, 1.0, 1.0, 1.2,
          1.0
        ],
        markPoint: {
          data: [
            { type: 'min', name: 'Min' },
            { type: 'max', name: 'Max' }
          ]
        }
      },
      {
        name: '最高电价',
        type: 'line',
        stack: 'Total',
        data: [
          1.0, 1.2, 1.1, 0.9, 1.0, 1.2, 1.3, 1.3, 1.1, 1.2, 0.9, 1.1, 1.1, 1.2,
          1.2
        ],
        markPoint: {
          data: [{ type: 'max', name: 'Max' }]
        }
      }
    ]
  }
  myChart.setOption(option)
}
</script>

<template>
  <div id="dayEcharts" ref="main"></div>
</template>

<style scoped></style>
