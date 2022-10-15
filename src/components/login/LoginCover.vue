<script setup lang="ts">
import { useLoginStore } from '@/stores/login';
import { storeToRefs } from 'pinia';
const useLogin = useLoginStore();
const { site } = storeToRefs(useLogin);
</script>

<template>
  <div class="login_cover">
    <div class="welcom1">Welcom</div>
    <div v-show="site === 'left'" class="welcom2">Join us</div>
    <div v-show="site === 'right'" class="welcom2">To Fox</div>
    <img src="@/assets/avatar/avatar.jpg" alt="" />
  </div>
</template>

<style lang="less" scoped>
* {
  color: #ffffff;
}
.login_cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  div {
    margin-bottom: 10px;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 600;
  }
  img {
    width: 150px;
    border-radius: 100%;
  }
}
</style>
