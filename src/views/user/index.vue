<script setup>
import { ref } from 'vue'
const imageUrl = ref(
  new URL('../../assets/image/userAva.jpg', import.meta.url).href
)

const idea = ref(
  '致力于提供可靠、高效和可持续的电力供应，以创造更美好的生活为使命。其核心价值观包括可靠性、高效性、可持续性、客户关注、创新领导和社会责任。通过关注客户需求、推动清洁能源利用、提供个性化解决方案、鼓励员工创新和履行社会责任，公司努力成为受人尊敬的企业，为社会、客户和员工创造价值，推动可持续发展。'
)
</script>

<template>
  <div id="user">
    <div id="header2">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <div
        style="
          position: absolute;
          margin-top: -150px;
          width: 700px;
          margin-left: 300px;
        "
      >
        <div style="position: absolute; margin-top: 20px">
          <span style="font-size: 20px; color: #a1a3b4">
            <el-icon size="25">
              <SvgIcon iconName="icon-yonghuming" />
            </el-icon>
            用户名
          </span>
          <span style="font-size: 20px; font-family: ali-2; margin-left: 20px">
            SuperPower
          </span>
        </div>
        <div style="position: absolute; margin-top: 20px; margin-left: 300px">
          <span style="font-size: 20px; color: #a1a3b4">
            <el-icon size="25">
              <SvgIcon iconName="icon-lianxifangshi" />
            </el-icon>
            联系方式
          </span>
          <span style="font-size: 20px; font-family: ali-2; margin-left: 20px">
            19837018081
          </span>
        </div>
        <div style="position: absolute; margin-top: 70px">
          <span style="font-size: 20px; color: #a1a3b4">
            <el-icon size="25">
              <SvgIcon iconName="icon-he_57hangyefenlei" />
            </el-icon>
            行业分类
          </span>
          <span style="font-size: 20px; font-family: ali-2; margin-left: 20px">
            电力类
          </span>
        </div>
        <div style="position: absolute; margin-top: 70px; margin-left: 300px">
          <span style="font-size: 20px; color: #a1a3b4">
            <el-icon size="25">
              <SvgIcon iconName="icon-beizhu" />
            </el-icon>
            备注
          </span>
          <span style="font-size: 20px; font-family: ali-2; margin-left: 20px">
            公司
          </span>
        </div>
        <div style="position: absolute; margin-top: 120px">
          <span style="font-size: 20px; color: #a1a3b4">
            <el-icon size="25">
              <SvgIcon iconName="icon-a-013_gongsidizhi" />
            </el-icon>
            公司地址
          </span>
          <span style="font-size: 20px; font-family: ali-2; margin-left: 20px">
            长沙市
          </span>
        </div>
      </div>
    </div>
    <div id="main">
      <div
        style="
          position: absolute;
          font-size: 25px;
          margin-left: 20px;
          margin-top: 20px;
        "
      >
        公司概况
      </div>
      <div style="position: absolute; margin-top: 100px; margin-left: 50px">
        <span style="font-size: 20px; color: #a1a3b4">
          <el-icon size="25">
            <SvgIcon iconName="icon-renshu" />
          </el-icon>
          在职人数
        </span>
        <span style="font-size: 20px; font-family: ali-2; margin-left: 20px">
          1000人
        </span>
      </div>
      <div style="position: absolute; margin-top: 170px; margin-left: 50px">
        <span style="font-size: 20px; color: #a1a3b4">
          <el-icon size="25">
            <SvgIcon iconName="icon-emijiage" />
          </el-icon>
          公司资产
        </span>
        <span style="font-size: 20px; font-family: ali-2; margin-left: 20px">
          1000000元
        </span>
      </div>
      <div style="position: absolute; margin-top: 250px; margin-left: 50px">
        <span style="font-size: 20px; color: #a1a3b4">
          <el-icon size="25">
            <SvgIcon iconName="icon-riqi" />
          </el-icon>
          注册时间
        </span>
        <span style="font-size: 20px; font-family: ali-2; margin-left: 20px">
          2024年04月09日
        </span>
      </div>
      <div style="position: absolute; margin-top: 100px; margin-left: 50%">
        <span style="font-size: 20px; color: #a1a3b4">
          <el-icon size="25">
            <SvgIcon iconName="icon-baoxianleixing" />
          </el-icon>
          公司理念
        </span>
      </div>
      <span
        style="
          position: absolute;
          font-size: 20px;
          font-family: ali-2;
          margin-left: 20px;
          width: 40%;
          margin-top: 150px;
          margin-left: 50%;
        "
      >
        {{ idea }}
      </span>
    </div>
  </div>
</template>

<style scoped>
#user {
  position: absolute;
  width: 85%;
  height: 100%;
  margin-left: 90px;
}

#header2 {
  position: relative;
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  background-color: #fff;
  /* background-color: #cadde4; */
  margin-top: 15px;
  border-radius: 10px;
}

#main {
  position: relative;
  width: 100%;
  height: 50%;
  margin-top: 30px;
  background-color: #fff;
  border-radius: 10px;
}

.avatar-uploader {
  margin-left: 50px;
}
.avatar-uploader:deep(.el-upload) {
  background-color: #fff;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader:deep(.el-upload:hover) {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.el-descriptions:deep(.el-descriptions__label) {
  background-color: rgb(136, 172, 188, 0.1);
}
</style>
