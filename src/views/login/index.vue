<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FontEcharts from '@/components/FontEcharts.vue'
import { ElMessage } from 'element-plus'
import { register, login } from '@/api/login.js'

const router = useRouter()

const phone = ref('')
const password = ref('')

const registerUser = () => {
  const data = { phone: phone.value, password: password.value }
  register(data).then((res) => {
    if (res.data.code === 200) {
      ElMessage.success('注册成功')
    } else {
      ElMessage.error(res.data.msg)
    }
  })
}

const loginUser = () => {
  const data = { phone: phone.value, password: password.value }
  login(data).then((res) => {
    if (res.data.code === 200) {
      sessionStorage.setItem('sessionId', res.data.data.token)
      ElMessage.success('登录成功')
      router.push('/index/home')
    } else {
      ElMessage.error('账号或密码错误')
    }
  })
}
</script>

<template>
  <div id="login">
    <div id="loginImage">
      <img
        src="../../assets/image/login.jpg"
        alt=""
        style="width: 95%; height: 99%"
      />
    </div>
    <div id="loginForm">
      <FontEcharts fontSize="60"></FontEcharts>
      <div
        style="
          position: absolute;
          top: 280px;
          border-radius: 50px;
          padding: 5px 30px;
          background-color: #fff;
        "
      >
        <span>账号:</span>
        <el-input
          v-model="phone"
          placeholder="参考账号 'user'"
          style="width: 250px; height: 40px; margin-left: 10px; border: none"
        />
      </div>

      <div
        style="
          position: absolute;
          top: 370px;
          border-radius: 50px;
          padding: 5px 30px;
          background-color: #fff;
        "
      >
        <span>密码:</span>
        <el-input
          type="password"
          v-model="password"
          placeholder="参考密码 'user'"
          style="width: 250px; height: 40px; margin-left: 10px; border: none"
        />
      </div>
      <el-button
        type="primary"
        @click="loginUser"
        style="
          position: absolute;
          top: 460px;
          padding: 22px 160px;
          border-radius: 50px;
        "
        >登录</el-button
      >
    </div>
  </div>
</template>

<style scoped>
#login {
  position: absolute;
  width: 100%;
  height: 100%;
}

#loginImage {
  position: absolute;
  width: 60%;
  height: 100%;
}

#loginForm {
  position: absolute;
  width: 50%;
  height: 100%;
  margin-left: 50%;
  display: flex;
  justify-content: center;
}

#fontEcharts {
  position: absolute;
  width: 100%;
  height: 100px;
  top: 100px;
}

.el-input {
  --el-input-border-color: none;
  --el-input-text-color: none;
  --el-input-hover-border-color: none;
  --el-input-focus-border-color: none;
}
</style>
