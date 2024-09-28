<script setup>
import UserElecEcharts from '@/views/sell/UserElecEcharts.vue'
import { computed, onMounted, ref } from 'vue'
import { User } from '@element-plus/icons-vue'

const search = ref('')

const filterTableData = computed(() =>
  userInfor.value.filter(
    (data) =>
      (!search.value ||
        data.account.toLowerCase().includes(search.value.toLowerCase())) &&
      (data.date == dateValue.value || dateValue.value == null)
  )
)

const dateValue = ref(null)

const dateDefault = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = ('0' + (now.getMonth() + 1)).slice(-2)
  const day = ('0' + now.getDate()).slice(-2)
  dateValue.value = year + '-' + month + '-' + day
}

onMounted(() => {
  dateDefault()
})

const userEdit = ref('')

const handleEdit = (row) => {
  dialogFormVisible.value = true
  userEdit.value = row
}

const handleDelete = (index, row) => {
  console.log(index, row)
  userInfor.value.splice(index, 1)
}

const dialogFormVisible = ref(false)

const userInfor = ref([
  {
    date: '2024-04-08',
    account: '15945632812',
    expenses: '140',
    electricity: '200',
    sellPrice: '0.7',
    profit: '46',
    payStyle: '支付宝'
  },
  {
    date: '2024-04-08',
    account: '52368456125',
    expenses: '80',
    electricity: '80',
    sellPrice: '1.0',
    profit: '46',
    payStyle: '微信'
  },
  {
    date: '2024-04-08',
    account: '15328456456',
    expenses: '140',
    electricity: '200',
    sellPrice: '0.7',
    profit: '46',
    payStyle: '支付宝'
  },
  {
    date: '2024-04-08',
    account: '12358964236',
    expenses: '96',
    electricity: '120',
    sellPrice: '0.9',
    profit: '46',
    payStyle: '微信'
  },
  {
    date: '2024-04-08',
    account: '12589643267',
    expenses: '100',
    electricity: '100',
    sellPrice: '1.0',
    profit: '46',
    payStyle: '支付宝'
  },
  {
    date: '2024-04-08',
    account: '15666548965',
    expenses: '151',
    electricity: '230',
    sellPrice: '0.7',
    profit: '46',
    payStyle: '微信'
  },
  {
    date: '2024-04-08',
    account: '15896347889',
    expenses: '120',
    electricity: '150',
    sellPrice: '0.8',
    profit: '46',
    payStyle: '支付宝'
  },
  {
    date: '2024-04-08',
    account: '15693489654',
    expenses: '112',
    electricity: '160',
    sellPrice: '0.7',
    profit: '46',
    payStyle: '微信'
  },
  {
    date: '2024-04-08',
    account: '1563247856',
    expenses: '100',
    electricity: '230',
    sellPrice: '0.7',
    profit: '46',
    payStyle: '支付宝'
  },
  {
    date: '2024-04-08',
    account: '19546324556',
    expenses: '80',
    electricity: '230',
    sellPrice: '0.7',
    profit: '46',
    payStyle: '微信'
  },
  {
    date: '2024-04-08',
    account: '13578963245',
    expenses: '100',
    electricity: '230',
    sellPrice: '0.7',
    profit: '46',
    payStyle: '支付宝'
  },
  {
    date: '2024-04-08',
    account: '16987463254',
    expenses: '80',
    electricity: '230',
    sellPrice: '0.7',
    profit: '46',
    payStyle: '微信'
  },
  {
    date: '2024-04-08',
    account: '19874563241',
    expenses: '100',
    electricity: '230',
    sellPrice: '0.7',
    profit: '46',
    payStyle: '支付宝'
  },
  {
    date: '2024-04-08',
    account: '16894562341',
    expenses: '80',
    electricity: '230',
    sellPrice: '0.7',
    profit: '46',
    payStyle: '微信'
  }
])
</script>

<template>
  <div id="userElectricity">
    <el-table
      :data="filterTableData"
      border
      height="370"
      empty-text="当前时间没有相关信息"
      style="width: 100%"
    >
      <el-table-column align="center" fixed width="200">
        <template #header>
          <el-date-picker
            v-model="dateValue"
            type="date"
            placeholder="选择日期"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            style="width: 150px"
          />
        </template>
        <template #default="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
      <el-table-column label="户号" prop="account" align="center" width="200">
        <template #default="scope">
          <el-tag type="primary">{{ scope.row.account }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="费用"
        prop="expenses"
        align="center"
        width="150"
      />
      <el-table-column
        label="电量"
        prop="electricity"
        align="center"
        width="150"
      />
      <el-table-column
        label="出售价格"
        prop="sellPrice"
        align="center"
        width="150"
      />
      <el-table-column
        label="支付方式"
        prop="payStyle"
        align="center"
        width="150"
      />
      <el-table-column fixed="right" align="center" width="140">
        <template #header>
          <el-input v-model="search" size="small" placeholder="输入户号" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)"
            >查看</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogFormVisible" title="" width="850">
      <div
        style="
          width: 810px;
          height: 400px;
          display: flex;
          justify-content: center;
        "
      >
        <UserElecEcharts></UserElecEcharts>
        <el-descriptions
          class="margin-top"
          title="用户信息"
          :column="1"
          size="large"
          border
          style="position: relative; width: 300px"
        >
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon>
                  <user />
                </el-icon>
                户号
              </div>
            </template>
            <el-tag type="primary">
              {{ userEdit.account }}
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <!-- <el-icon>
                  <user />
                </el-icon> -->
                费用
              </div>
            </template>
            {{ userEdit.expenses }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <!-- <el-icon>
                  <user />
                </el-icon> -->
                电量
              </div>
            </template>
            {{ userEdit.electricity }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <!-- <el-icon>
                  <user />
                </el-icon> -->
                出售价格
              </div>
            </template>
            {{ userEdit.sellPrice }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
#userElecEcharts {
  position: relative;
  width: 400px;
  height: 400px;
}
</style>
