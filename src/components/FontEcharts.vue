<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
const main = ref()
onMounted(() => {
  init()
})

const props = defineProps({
  fontSize: Number
})

const init = () => {
  var myChart = echarts.init(main.value)
  var option = {
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: '电力现货交易',
            fontSize: props.fontSize,
            fontWeight: 'bold',
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: 'transparent',
            stroke: '#000',
            lineWidth: 1
          },
          keyframeAnimation: {
            duration: 10000,
            loop: true,
            keyframes: [
              {
                percent: 0.4,
                style: {
                  fill: 'transparent',
                  lineDashOffset: 200,
                  lineDash: [200, 0]
                }
              },
              {
                percent: 0.6,
                style: {
                  fill: 'transparent'
                }
              },
              {
                percent: 1,
                style: {
                  fill: 'transparent'
                }
              }
            ]
          }
        }
      ]
    }
  }
  myChart.setOption(option)
}
</script>

<template>
  <div id="fontEcharts" ref="main"></div>
</template>

<style scoped></style>
