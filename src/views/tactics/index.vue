<script setup>
import { ref } from 'vue'
import SelectTactics from '@/views/tactics/SelectTactics.vue'
import TaticElecEcharts from '@/views/tactics/TaticElecEcharts.vue'
const dialogVisible = ref(false)

const infoDetail = ref()
const viewInfo = (index) => {
  dialogVisible.value = true
  infoDetail.value = info.value[index]
}

const info = ref([
  {
    electricity: 10000,
    purchasedPrice: 0.7,
    soldedPrice: 0.9,
    profit: 2000,
    accuracy: 92
  },
  {
    electricity: 12000,
    purchasedPrice: 0.9,
    soldedPrice: 1.2,
    profit: 3600,
    accuracy: 88
  },
  {
    electricity: 9000,
    purchasedPrice: 0.8,
    soldedPrice: 1.0,
    profit: 1800,
    accuracy: 87
  },
  {
    electricity: 11000,
    purchasedPrice: 0.9,
    soldedPrice: 1.2,
    profit: 3300,
    accuracy: 85
  },
  {
    electricity: 80000,
    purchasedPrice: 0.7,
    soldedPrice: 1.0,
    profit: 2400,
    accuracy: 92
  },
  {
    electricity: 13000,
    purchasedPrice: 0.9,
    soldedPrice: 1.0,
    profit: 1300,
    accuracy: 90
  }
])
</script>

<template>
  <div id="tactics">
    <SelectTactics></SelectTactics>
    <div id="moreTactics">
      <el-row :gutter="20">
        <el-col
          :span="8"
          class="content"
          v-for="(item, index) in info"
          :key="item"
        >
          <el-card
            style="border-radius: 15px"
            :body-style="{ padding: '50px' }"
            shadow="hover"
          >
            <div>
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
                  {{ item.electricity }}千瓦时
                </span>
              </div>
              <div style="margin-top: 40px">
                <span style="font-size: 20px; color: #a1a3b4">
                  <el-icon size="25">
                    <SvgIcon iconName="icon-jiage" />
                  </el-icon>
                  购入电价
                </span>
                <span
                  style="font-size: 20px; font-family: ali-2; margin-left: 20px"
                >
                  {{ item.purchasedPrice }}元/千瓦时
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
                  {{ item.soldedPrice }}元/千瓦时
                </span>
              </div>
              <div style="margin-top: 40px">
                <span style="font-size: 20px; color: #a1a3b4">
                  <el-icon size="25">
                    <SvgIcon iconName="icon-kaidianyinglicesuan" />
                  </el-icon>
                  预计盈利
                </span>
                <span
                  style="font-size: 20px; font-family: ali-2; margin-left: 20px"
                >
                  {{ item.profit }}元
                </span>
              </div>
              <div style="margin-top: 40px">
                <span style="font-size: 20px; color: #a1a3b4">
                  <el-icon style="color: #f56c6c; font-size: 25px">
                    <PieChart />
                  </el-icon>
                  <span
                    style="margin-left: 10px; color: #a1a3b4; font-size: 20px"
                  >
                    准确度
                  </span>
                  <span style="font-size: 20px; margin-left: 30px">
                    {{ item.accuracy }}%
                  </span>
                </span>
              </div>
              <div class="bottom" style="margin-top: 40px">
                <el-button
                  type="info"
                  plain
                  class="button"
                  @click="viewInfo(index)"
                  style="
                    display: block;
                    width: 230px;
                    height: 40px;
                    border-radius: 20px;
                  "
                >
                  查看
                  <el-icon class="el-icon--right"><Promotion /></el-icon>
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-dialog v-model="dialogVisible" title="策略" width="800">
        <div style="width: 80%; margin-left: 45px; margin-top: 20px">
          <div style="display: inline-block">
            <span style="font-size: 20px; color: #a1a3b4">
              <el-icon size="25">
                <SvgIcon iconName="icon-a-iconyongdianliang" />
              </el-icon>
              电量
            </span>
            <span
              style="font-size: 20px; font-family: ali-2; margin-left: 30px"
            >
              {{ infoDetail.electricity }}千瓦时
            </span>
          </div>
          <div style="display: inline-block; margin-left: 150px">
            <span style="font-size: 20px; color: #a1a3b4">
              <el-icon size="25">
                <SvgIcon iconName="icon-jiage" />
              </el-icon>
              购入电价
            </span>
            <span
              style="font-size: 20px; font-family: ali-2; margin-left: 20px"
            >
              {{ infoDetail.purchasedPrice }}元/千瓦时
            </span>
          </div>
          <div style="margin-top: 40px; display: inline-block">
            <span style="font-size: 20px; color: #a1a3b4">
              <el-icon size="25">
                <SvgIcon iconName="icon-emijiage" />
              </el-icon>
              出售电价
            </span>
            <span
              style="font-size: 20px; font-family: ali-2; margin-left: 20px"
            >
              {{ infoDetail.soldedPrice }}元/千瓦时
            </span>
          </div>
          <div style="display: inline-block; margin-left: 120px">
            <span style="font-size: 20px; color: #a1a3b4">
              <el-icon size="25">
                <SvgIcon iconName="icon-kaidianyinglicesuan" />
              </el-icon>
              预计盈利
            </span>
            <span
              style="font-size: 20px; font-family: ali-2; margin-left: 20px"
            >
              {{ infoDetail.profit }}元
            </span>
          </div>
          <div style="margin-top: 40px">
            <span style="font-size: 20px; color: #a1a3b4">
              <el-icon style="color: #b3e19d; font-size: 25px">
                <Avatar />
              </el-icon>
              <span style="margin-left: 10px; color: #a1a3b4; font-size: 20px">
                选择人数
              </span>
              <TaticElecEcharts></TaticElecEcharts>
            </span>
          </div>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">选择</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped>
#decision {
  position: absolute;
  width: 100%;
  height: 100%;
}

#selectTactics {
  position: relative;
  width: 85%;
  height: 400px;
  margin-top: 15px;
  margin-left: 90px;
  border-radius: 10px;
  background-color: #fff;
}

#moreTactics {
  position: relative;
  width: 85%;
  margin-left: 90px;
}

.content {
  margin-top: 20px;
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

#taticElecEcharts {
  /* position: absolute; */
  width: 700px;
  height: 400px;
}
</style>
