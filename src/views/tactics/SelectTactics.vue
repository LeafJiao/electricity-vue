<script setup>
import { ref, h } from 'vue'
import { ElNotification } from 'element-plus'
import UserElecEcharts from '@/views/tactics/UserElecEcharts.vue'
const electricity = ref('')
const price = ref('')
// const prePricebBegin = ref(0)
// const prePriceAfter = ref(0)
const dialogVisible = ref(false)

const evaluate = () => {
  if (electricity.value != '' && price.value != '') {
    dialogVisible.value = true
  } else {
    ElNotification({
      title: '提示',
      message: h('i', { style: 'color: #f56c6c' }, '信息输入不完整')
    })
  }
}

const info = ref([
  {
    profit: 1000,
    accuary: 90
  },
  {
    profit: 1100,
    accuary: 85
  },
  {
    profit: 1200,
    accuary: 80
  },
  {
    profit: 1300,
    accuary: 70
  }
])
</script>

<template>
  <div id="selectTactics">
    <UserElecEcharts></UserElecEcharts>
    <div style="position: absolute; width: 30%; height: 100%; margin-left: 62%">
      <h1
        style="
          font-family: ali-2;
          color: #73767a;
          margin-top: 30px;
          margin-left: 100px;
        "
      >
        智能决策
      </h1>
      <div
        style="
          position: absolute;
          top: 120px;
          border: 1px solid #409eff;
          border-radius: 50px;
          padding: 5px 30px;
          background-color: #fff;
        "
      >
        <span style="color: #409eff"> 电量: </span>
        <el-input
          v-model="electricity"
          placeholder="请输入电量（千瓦时）"
          style="width: 200px; height: 40px; margin-left: 10px; border: none"
        />
      </div>

      <div
        style="
          position: absolute;
          top: 210px;
          border: 1px solid #409eff;
          border-radius: 50px;
          padding: 5px 30px;
          background-color: #fff;
        "
      >
        <span style="color: #409eff">电价:</span>
        <el-input
          v-model="price"
          placeholder="请输入电价（元/千瓦时）"
          style="width: 200px; height: 40px; margin-left: 10px; border: none"
        />
      </div>
      <el-button
        type="primary"
        plain
        @click="evaluate"
        style="
          position: absolute;
          top: 300px;
          padding: 24px 140px;
          border-radius: 50px;
        "
      >
        评估
      </el-button>
      <el-dialog v-model="dialogVisible" title="经济性评估" width="500">
        <div style="width: 80%; margin-left: 45px; margin-top: 20px">
          <div>
            <span style="font-size: 20px; color: #a1a3b4">
              <el-icon size="25">
                <SvgIcon iconName="icon-a-iconyongdianliang" />
              </el-icon>
              电量
            </span>
            <span
              style="font-size: 20px; font-family: ali-2; margin-left: 30px"
            >
              {{ electricity }}千瓦时
            </span>
          </div>

          <div style="margin-top: 40px">
            <span style="font-size: 20px; color: #a1a3b4">
              <el-icon size="25">
                <SvgIcon iconName="icon-emijiage" />
              </el-icon>
              出售电价
            </span>
            <span
              style="font-size: 20px; font-family: ali-2; margin-left: 20px"
            >
              {{ price }}元/千瓦时
            </span>
          </div>

          <div style="margin-top: 40px">
            <span style="font-size: 20px; color: #a1a3b4">
              <el-icon size="25">
                <SvgIcon iconName="icon-kaidianyinglicesuan" />
              </el-icon>
              预计盈利
            </span>
            <div
              style="
                font-size: 18px;
                color: #a1a3b4;
                margin-left: 50px;
                margin-top: 20px;
              "
            >
              计算方式：
              <span style="display: block; font-size: 15px">
                （出售电价 - 未来一周的平均电价）× （输入电量 或
                用电侧使用的电量）
              </span>
            </div>
            <div style="margin-top: 40px" v-for="item in info" :key="item">
              <el-icon size="20" color="#f56c6c"><CaretRight /></el-icon>
              <span
                style="font-size: 20px; font-family: ali-2; margin-left: 10px"
              >
                {{ item.profit }} 元
              </span>
              <span style="font-size: 20px; color: #a1a3b4; margin-left: 50px">
                <el-icon style="color: #f56c6c; font-size: 25px">
                  <PieChart />
                </el-icon>
                <span
                  style="margin-left: 10px; color: #a1a3b4; font-size: 20px"
                >
                  准确度
                </span>
                <span style="font-size: 20px; margin-left: 50px">
                  {{ item.accuary }}%
                </span>
              </span>
            </div>
          </div>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">确实</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped>
#userElecEcharts {
  position: absolute;
  width: 500px;
  height: 350px;
  margin-top: 20px;
  margin-left: 80px;
}

.el-input {
  --el-input-border-color: none;
  --el-input-text-color: none;
  --el-input-hover-border-color: none;
  --el-input-focus-border-color: none;
}
</style>
