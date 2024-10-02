<script setup>
import { ref } from 'vue'
import { getUserList } from '@/api/user.js'

const eleImg = ref([
  new URL('../../assets/eleImage/ele1.jpg', import.meta.url).href,
  new URL('../../assets/eleImage/ele2.jpg', import.meta.url).href,
  new URL('../../assets/eleImage/ele3.jpg', import.meta.url).href,
  new URL('../../assets/eleImage/ele4.jpg', import.meta.url).href
])
const fit = ref('contain')
const weatherSrc = ref(new URL('./weather.html', import.meta.url).href)
const info = ref([
  '电力行业作为工业社会基础产业，是国民经济发展和人民正常生活的重要能源保障。电价 作为电力供需的标杆和优化电力资源配置的杠杆，',
  '辅助服务费用：指为维护电力系统的安全稳定运行，保证电能质量，除正常电能生产、 输送、使用外，由发电企业、电网经营企业和电力用户提供的服务而产生的成本。',
  '上网电价：主要受政策及成本影响，与市场联动加强，但仍受行政指令管制。',
  '在高校学生宿舍用电管理中，要实现远程抄表，自动收缴费的功能，到底是采用485的抄表方案好，还是采用无线载波的抄表方案好呢，我们根据实际经验告诉您，485抄表方案比载波方案要切合高校实际，效果好的多，',
  '目前各地区新建的大量高档住宅、集中小区实行封闭式管理.多数电能表安装在有安全门的楼道内，人工抄表极为不便。'
])

const ellipsis = (value) => {
  if (!value) return ''
  if (value.length > 35) {
    return value.slice(0, 35) + '...'
  }
  return value
}

const shop = ref([
  {
    name: '嘉兴发电厂',
    img: new URL('../../assets/eleImage/ele1.jpg', import.meta.url).href,
    electricity: 50000,
    price: 0.52
  },
  {
    name: '玉环发电厂',
    img: new URL('../../assets/eleImage/ele2.jpg', import.meta.url).href,
    electricity: 35000,
    price: 0.53
  },
  {
    name: '台山发电厂',
    img: new URL('../../assets/eleImage/ele3.jpg', import.meta.url).href,
    electricity: 30000,
    price: 0.52
  },
  {
    name: '阳西发电厂',
    img: new URL('../../assets/eleImage/ele4.jpg', import.meta.url).href,
    electricity: 30000,
    price: 0.51
  },
  {
    name: '宁海发电厂',
    img: '',
    electricity: 20000,
    price: 0.53
  },
  {
    name: '海门发电厂',
    img: '',
    electricity: 10000,
    price: 0.54
  },
  {
    name: '泰州发电厂',
    img: '',
    electricity: 10000,
    price: 0.56
  }
])

const getUserId = () => {
  getUserList().then((res) => {
    console.log(res.data.data)
  })
}
</script>

<template>
  <div id="home">
    <div id="carousel">
      <el-carousel height="300px">
        <el-carousel-item v-for="item in eleImg" :key="item">
          <el-image :src="item" :fit="fit" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="card">
      <span
        style="
          position: absolute;
          font-size: 25px;
          margin-left: 20px;
          margin-top: 10px;
        "
      >
        资讯
      </span>
      <el-divider style="position: absolute; margin-top: 60px">
        <el-icon><star-filled /></el-icon>
      </el-divider>
      <div
        style="
          position: absolute;
          margin-top: 80px;
          margin-left: 30px;
          height: 70%;
          width: 90%;
          overflow: auto;
        "
      >
        <li v-for="item in info" :key="item" style="margin-top: 15px">
          <el-link>
            {{ ellipsis(item) }}
          </el-link>
        </li>
      </div>
    </div>
    <div id="weather">
      <iframe
        :src="weatherSrc"
        frameborder="0"
        style="width: 100%; height: 100%"
      ></iframe>
    </div>
    <div
      style="
        position: absolute;
        width: 440px;
        height: 380px;
        margin-left: 95px;
        margin-top: 270px;
        background-color: #fff;
        display: flex;
        justify-content: center;
      "
    >
      <span
        style="
          position: absolute;
          font-size: 20px;
          margin-left: 20px;
          margin-top: 20px;
        "
      >
        电力现货
      </span>
      <el-divider style="position: absolute; margin-top: 70px">
        <el-icon><Shop /></el-icon>
      </el-divider>
      <div
        style="
          position: absolute;
          margin-top: 80px;
          height: 75%;
          width: 90%;
          overflow: auto;
        "
      >
        <div style="margin-top: 5px">
          <span style="font-size: 20px; margin-left: 50px; font-family: ali-2">
            电厂名称
          </span>
          <span style="font-size: 20px; margin-left: 50px; font-family: ali-2">
            发售电量
          </span>
          <span style="font-size: 20px; margin-left: 20px; font-family: ali-2">
            售出价格
          </span>
        </div>
        <div v-for="item in shop" :key="item" style="margin-top: 20px">
          <el-avatar
            :size="30"
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
            v-if="item.img == ''"
          >
          </el-avatar>
          <el-avatar :size="30" :src="item.img" v-if="item.img != ''">
          </el-avatar>
          <span style="font-size: 20px; color: #a1a3b4; margin-left: 20px">
            {{ item.name }}
          </span>
          <span style="font-size: 20px; color: #a1a3b4; margin-left: 20px">
            {{ item.electricity }}
          </span>
          <span style="font-size: 20px; color: #a1a3b4; margin-left: 20px">
            {{ item.price }}
          </span>
          <el-button
            plain
            type="info"
            @click="getUserId"
            style="margin-left: 20px"
            >查看</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#home {
  position: absolute;
  width: 100%;
  height: 100%;
}

#carousel {
  position: absolute;
  width: 600px;
  height: 300px;
  margin-top: 15px;
  margin-left: 580px;
}

#card {
  position: absolute;
  margin-top: 350px;
  margin-left: 580px;
  width: 600px;
  height: 300px;
  background-color: #fff;
}

#weather {
  position: absolute;
  margin-top: 15px;
  margin-left: 90px;
  width: 460px;
  height: 250px;
}
</style>
