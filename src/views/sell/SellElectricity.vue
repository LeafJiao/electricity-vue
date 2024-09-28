<script setup>
import { CaretBottom, CaretTop, Warning } from '@element-plus/icons-vue'
import YearEcharts from '@/views/sell/YearEcharts.vue'
import { ref } from 'vue'

const drawer = ref(false)
const dateValue = ref('2024年4月')
</script>

<template>
  <div id="sellElectricity">
    <el-row :gutter="16">
      <el-col :span="8">
        <div class="statistic-card">
          <el-statistic :value="58500">
            <template #title>
              <div
                style="
                  display: inline-flex;
                  align-items: center;
                  font-size: 20px;
                "
              >
                本月总电量
                <el-tooltip
                  effect="dark"
                  content="所有用户在本月所使用的电量"
                  placement="top"
                >
                  <el-icon style="margin-left: 4px" :size="15">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item" style="font-size: 15px">
              <span>相比上个月</span>
              <span class="green">
                24%
                <el-icon>
                  <CaretTop />
                </el-icon>
              </span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="statistic-card">
          <el-statistic :value="193700">
            <template #title>
              <div
                style="
                  display: inline-flex;
                  align-items: center;
                  font-size: 20px;
                "
              >
                本月营业额
                <el-tooltip
                  effect="dark"
                  content="用户用于支付电力的收入"
                  placement="top"
                >
                  <el-icon style="margin-left: 4px" :size="15">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item" style="font-size: 15px">
              <span>相比上个月</span>
              <span class="red">
                12%
                <el-icon>
                  <CaretBottom />
                </el-icon>
              </span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="statistic-card">
          <el-statistic :value="72000">
            <template #title>
              <div
                style="
                  display: inline-flex;
                  align-items: center;
                  font-size: 20px;
                "
              >
                本月净收入
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item" style="font-size: 15px">
              <span>相比上个月</span>
              <span class="green">
                16%
                <el-icon>
                  <CaretTop />
                </el-icon>
              </span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-button
      type="info"
      plain
      @click="drawer = true"
      style="width: 120px; height: 30px; margin-top: 10px; float: right"
    >
      历史交易额
      <el-icon class="el-icon--right"><CaretRight /></el-icon>
    </el-button>
    <el-drawer v-model="drawer" direction="rtl">
      <template #header>
        <h4>历史交易额</h4>
      </template>
      <template #default>
        <div>
          <el-form label-width="50px">
            <el-form-item label="时间">
              <el-date-picker
                v-model="dateValue"
                type="month"
                value-format="YYYY年MM月"
                placeholder="选择月份"
              />
            </el-form-item>
          </el-form>
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item>
              <el-card
                class="box-card"
                style="height: 250px; display: flex; justify-content: center"
              >
                <el-text class="mx-1" style="font-size: 25px">
                  {{ dateValue }}
                </el-text>
                <el-text
                  class="mx-1"
                  type="primary"
                  style="display: block; font-size: 20px; margin-top: 10px"
                >
                  总电量
                </el-text>
                <el-text
                  class="mx-1"
                  style="
                    display: block;
                    color: #303133;
                    font-size: 30px;
                    margin-top: 10px;
                  "
                >
                  51635
                </el-text>
                <el-text
                  class="mx-1"
                  style="display: block; font-size: 20px; margin-top: 10px"
                >
                  全年占比
                  <span style="color: #e6a23c">10%</span>
                </el-text>
              </el-card>
            </el-carousel-item>
            <el-carousel-item>
              <el-card
                class="box-card"
                style="height: 250px; display: flex; justify-content: center"
              >
                <el-text class="mx-1" style="font-size: 25px">
                  {{ dateValue }}
                </el-text>
                <el-text
                  class="mx-1"
                  type="primary"
                  style="display: block; font-size: 20px; margin-top: 10px"
                >
                  营业额
                </el-text>
                <el-text
                  class="mx-1"
                  style="
                    display: block;
                    color: #303133;
                    font-size: 30px;
                    margin-top: 10px;
                  "
                >
                  98000
                </el-text>
                <el-text
                  class="mx-1"
                  style="display: block; font-size: 20px; margin-top: 10px"
                >
                  全年占比
                  <span style="color: #e6a23c">20%</span>
                </el-text>
              </el-card>
            </el-carousel-item>
            <el-carousel-item>
              <el-card
                class="box-card"
                style="height: 250px; display: flex; justify-content: center"
              >
                <el-text class="mx-1" style="font-size: 25px">
                  {{ dateValue }}
                </el-text>
                <el-text
                  class="mx-1"
                  type="primary"
                  style="display: block; font-size: 20px; margin-top: 10px"
                >
                  净收入
                </el-text>
                <el-text
                  class="mx-1"
                  style="
                    display: block;
                    color: #303133;
                    font-size: 30px;
                    margin-top: 10px;
                  "
                >
                  13213
                </el-text>
                <el-text
                  class="mx-1"
                  style="display: block; font-size: 20px; margin-top: 10px"
                >
                  全年占比
                  <span style="color: #e6a23c">15%</span>
                </el-text>
              </el-card>
            </el-carousel-item>
          </el-carousel>
          <YearEcharts></YearEcharts>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 35px;
}

.statistic-card {
  padding: 60px 0px 60px 105px;
  border-radius: 25px;
  background-color: var(--el-bg-color-overlay);
  /* border: solid; */
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.1),
    -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.statistic-card:hover {
  box-shadow:
    2px 2px 10px rgba(186, 228, 244),
    -2px 0 10px rgba(186, 228, 244);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}
.red {
  color: var(--el-color-error);
}

#yearEcharts {
  position: relative;
  width: 420px;
  height: 400px;
}
</style>
