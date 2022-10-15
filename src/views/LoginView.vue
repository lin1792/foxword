<script setup lang="ts">
import LoginLeft from '../components/login/LoginLeft.vue';
import { useLoginStore } from '@/stores/login';
import { storeToRefs } from 'pinia';
import LoginRight from '../components/login/LoginRight.vue';
import LoginCover from '../components/login/LoginCover.vue';
const useLogin = useLoginStore();
const { site } = storeToRefs(useLogin);
</script>

<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 登录 -->
      <div class="left">
        <LoginLeft />
      </div>
      <!-- 注册 -->
      <div class="right">
        <LoginRight />
      </div>
      <!-- 遮罩 -->
      <div :class="site === 'left' ? 'cover_left' : 'cover_right'">
        <LoginCover />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  color: #ffffff;
}
.login_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .login_box {
    display: flex;
    position: relative;
    width: 800px;
    height: 500px;
    .left {
      flex: 1;
      background-color: rgba(0, 255, 255, 0.832);
      box-shadow: -2px 0px 10px 3px rgba(0, 255, 255, 0.832);
    }
    .right {
      flex: 1;
      background-color: rgba(250, 235, 215, 0.645);
      box-shadow: 2px 0px 10px 3px rgba(250, 235, 215, 0.645);
    }
    .cover_left {
      position: absolute;
      left: 0;
      width: 50%;
      height: 100%;
      background-color: rgba(250, 235, 215);
      box-shadow: -2px 0px 10px 3px rgba(250, 235, 215);
      transition: all 0.2s ease;
    }
    .cover_right {
      position: absolute;
      left: 50%;
      width: 50%;
      height: 100%;
      background-color: rgba(0, 255, 255);
      box-shadow: 2px 0px 10px 3px rgba(0, 255, 255);
      transition: all 0.2s ease;
    }
  }
}
</style>
