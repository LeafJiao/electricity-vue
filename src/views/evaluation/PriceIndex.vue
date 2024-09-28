<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
const main = ref()
const emit = defineEmits(['nowPrice'])
onMounted(() => {
  init()
})

const init = () => {
  var myChart = echarts.init(main.value)
  let data = []
  let now
  let priceValue
  function randomData() {
    priceValue = Math.random()
    if (priceValue < 0.5) {
      priceValue += 0.8
    }
    now = new Date()
    return [now.getHours() + ':' + now.getMinutes(), priceValue.toFixed(2)]
  }
  let begin = new Date()
  let fiveMin = 60 * 1000 * 15
  begin = new Date(begin - 7 * fiveMin)
  for (var i = 0; i < 7; i++) {
    begin = new Date(+begin + fiveMin)
    priceValue = Math.random()
    if (priceValue < 0.5) {
      priceValue += 0.8
    }
    data.push([
      begin.getHours() + ':' + begin.getMinutes(),
      priceValue.toFixed(2)
    ])
  }
  emit('nowPrice', data[6][1])

  let data2 = []
  let priceValue2
  let now2
  function randomData2() {
    priceValue2 = Math.random()
    if (priceValue2 < 0.5) {
      priceValue2 += 0.8
    }
    now2 = new Date(+now + 7 * fiveMin2)
    return [now2.getHours() + ':' + now2.getMinutes(), priceValue2.toFixed(2)]
  }
  let begin2 = new Date()
  let fiveMin2 = 60 * 1000 * 15
  for (i = 0; i < 7; i++) {
    begin2 = new Date(+begin2 + fiveMin2)
    priceValue2 = Math.random()
    if (priceValue2 < 0.5) {
      priceValue2 += 0.8
    }
    data2.push([
      begin2.getHours() + ':' + begin2.getMinutes(),
      priceValue2.toFixed(2)
    ])
  }
  var option = {
    color: ['#37A2FF', '#FFBF00'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false
      }
    },
    legend: {
      data: ['实时电价', '预测电价']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        splitLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '实时电价',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(55, 162, 255,0.8)'
            },
            {
              offset: 1,
              color: 'rgb(116, 21, 219,0.8)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: data
      },
      {
        name: '预测电价',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 191, 0,0.8)'
            },
            {
              offset: 1,
              color: 'rgb(224, 62, 76,0.8)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: data2
      }
    ]
  }
  setInterval(
    function () {
      data.shift()
      data.push(randomData())
      emit('nowPrice', data[6][1])
      data2.shift()
      data2.push(randomData2())
      myChart.setOption({
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            data: data
          },
          {
            data: data2
          }
        ]
      })
    },
    1000 * 60 * 15
  )
  option && myChart.setOption(option)
}
</script>

<template>
  <div id="price" ref="main"></div>
</template>

<style scoped></style>
