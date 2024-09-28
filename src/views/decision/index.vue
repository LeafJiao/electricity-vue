<script setup>
import DecisionEcharts from './DecisionEcharts.vue'
import { ElNotification } from 'element-plus'

import { ref, h } from 'vue'

const value = ref('')
const options = [
  {
    value: '单一电价',
    label: '单一电价'
  },
  {
    value: '迎峰型',
    label: '迎峰型'
  },
  {
    value: '逆峰型',
    label: '逆峰型'
  },
  {
    value: '其他',
    label: '其他'
  }
]

const priceType = ref('')
const options2 = [
  {
    value: '月结',
    label: '月结'
  },
  {
    value: '周结',
    label: '周结'
  },
  {
    value: '日结',
    label: '日结'
  }
]

const electricity = ref('')
const price = ref('')

const add = () => {
  if (
    electricity.value != '' &&
    price.value != '' &&
    value.value != '' &&
    priceType.value != ''
  ) {
    const data = {
      electricity: electricity.value,
      price: price.value,
      type: value.value,
      date: '2024/04/07',
      priceType: priceType.value,
      people: 0
    }
    info.value.push(data)
  } else {
    ElNotification({
      title: '提示',
      message: h('i', { style: 'color: #f56c6c' }, '信息输入不完整')
    })
  }
}

const info = ref([
  {
    electricity: 1000,
    price: 0.8,
    type: '单一电价',
    date: '2024/04/07',
    priceType: '月结',
    people: 10000
  },
  {
    electricity: 1000,
    price: 0.8,
    type: '迎峰型',
    date: '2024/04/03',
    priceType: '周结',
    people: 10000
  },
  {
    electricity: 1200,
    price: 0.8,
    type: '逆峰型',
    date: '2024/04/07',
    priceType: '月结',
    people: 12000
  },
  {
    electricity: 1100,
    price: 0.8,
    type: '迎峰型',
    date: '2024/04/07',
    priceType: '月结',
    people: 8000
  },
  {
    electricity: 1000,
    price: 0.9,
    type: '单一电价',
    date: '2024/04/18',
    priceType: '月结',
    people: 100
  },
  {
    electricity: 1000,
    price: 0.8,
    type: '其他',
    date: '2024/04/15',
    priceType: '周结',
    people: 10000
  }
])
</script>

<template>
  <div id="decision">
    <div
      style="
        position: relative;
        width: 85%;
        height: 380px;
        margin-top: 20px;
        margin-left: 90px;
        border-radius: 20px;
        background-color: #fff;
      "
    >
      <DecisionEcharts></DecisionEcharts>
      <div
        style="
          position: absolute;
          width: 400px;
          height: 100%;
          margin-left: 60%;
          display: flex;
          justify-content: center;
        "
      >
        <div style="margin-top: 20px; font-size: 20px">自定义套餐</div>
        <el-input
          v-model="electricity"
          placeholder="请输入单次售出电量"
          style="position: absolute; width: 60%; height: 40px; margin-top: 70px"
        >
        </el-input>
        <el-input
          v-model="price"
          placeholder="请输入单次售出电价"
          style="
            position: absolute;
            width: 60%;
            height: 40px;
            margin-top: 130px;
          "
        >
        </el-input>
        <el-select
          v-model="value"
          placeholder="选择套餐类型"
          size="large"
          style="position: absolute; width: 60%; margin-top: 190px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select
          v-model="priceType"
          placeholder="选择结算方式"
          size="large"
          style="position: absolute; width: 60%; margin-top: 250px"
        >
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-button
          plain
          type="primary"
          @click="add"
          style="
            position: absolute;
            width: 60%;
            height: 40px;
            margin-top: 310px;
            border-radius: 10px;
          "
          >发布</el-button
        >
      </div>
    </div>
    <div id="forecast">
      <el-row :gutter="20">
        <el-col :span="8" class="content" v-for="item in info" :key="item">
          <el-card
            :body-style="{ padding: '20px 50px' }"
            shadow="hover"
            style="border-radius: 10px"
          >
            <div style="margin-top: 40px">
              <span style="font-size: 20px; color: #a1a3b4">
                <el-icon size="25">
                  <SvgIcon iconName="icon-a-iconyongdianliang" />
                </el-icon>
                售出电量
              </span>
              <span
                style="font-size: 20px; font-family: ali-2; margin-left: 20px"
              >
                {{ item.electricity }}千瓦时
              </span>
            </div>
            <div style="margin-top: 40px">
              <span style="font-size: 20px; color: #a1a3b4">
                <el-icon size="25">
                  <SvgIcon iconName="icon-jiage" />
                </el-icon>
                售出电价
              </span>
              <span
                style="font-size: 20px; font-family: ali-2; margin-left: 20px"
              >
                {{ item.price }}元/千瓦时
              </span>
            </div>
            <div style="margin-top: 40px">
              <span style="font-size: 20px; color: #a1a3b4">
                <el-icon size="25">
                  <SvgIcon iconName="icon-baoxianleixing" />
                </el-icon>
                套餐类型
              </span>
              <span
                style="font-size: 20px; font-family: ali-2; margin-left: 20px"
              >
                {{ item.type }}
              </span>
            </div>
            <div style="margin-top: 40px">
              <span style="font-size: 20px; color: #a1a3b4">
                <el-icon size="25">
                  <SvgIcon iconName="icon-riqi" />
                </el-icon>
                发布日期
              </span>
              <span
                style="font-size: 20px; font-family: ali-2; margin-left: 20px"
              >
                {{ item.date }}
              </span>
            </div>
            <div style="margin-top: 40px">
              <span style="font-size: 20px; color: #a1a3b4">
                <el-icon size="25">
                  <SvgIcon iconName="icon-a-jiaoyifangshi2x" />
                </el-icon>
                结算方式
              </span>
              <span
                style="font-size: 20px; font-family: ali-2; margin-left: 20px"
              >
                {{ item.priceType }}
              </span>
            </div>
            <div style="margin-top: 40px">
              <span style="font-size: 20px; color: #a1a3b4">
                <el-icon size="25">
                  <SvgIcon iconName="icon-renshu" />
                </el-icon>
                购买人数
              </span>
              <span
                style="font-size: 20px; font-family: ali-2; margin-left: 20px"
              >
                {{ item.people }}
              </span>
            </div>
            <div style="padding: 14px">
              <!-- <div class="bottom">
                <el-button type="primary" plain class="button">
                  查看
                  <el-icon class="el-icon--right"><Promotion /></el-icon>
                </el-button>
              </div> -->
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
#decision {
  position: absolute;
  width: 100%;
  height: 100%;
}

#decisionEcharts {
  position: absolute;
  width: 700px;
  height: 350px;
  margin-top: 30px;
}

#forecast {
  position: relative;
  width: 85%;
  margin-left: 90px;
  margin-top: 20px;
}

.content {
  /* position: relative;
  padding: 150px 50px; */
  margin-top: 20px;
  /* border: solid; */
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 5px 10px;
  min-height: auto;
}
</style>
