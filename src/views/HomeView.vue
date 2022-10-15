<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const oldword = '宁静中包含极致的丰富';
let newword = ref('');
let i = 1;

const as = setInterval(() => {
  newword.value = oldword.slice(0, i);
  i++;
  if (i === 11) {
    clearInterval(as);
  }
}, 100);

let next = ref(false);
const nextpage = () => {
  next.value = true;
  console.log(next);

  setTimeout(() => {
    router.push('/fox/logs');
  }, 1000);
};
</script>

<template>
  <div :class="'home_container' + (next === true ? ' nextpage' : '')">
    <h1>{{ newword }}</h1>
    <div class="iconfont icon-jiantouxia" @click="nextpage"></div>
  </div>
</template>

<style lang="less" scoped>
.nextpage {
  top: 100vh !important;
}
.home_container {
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  transition: top 3s ease;
  h1 {
    font-family: YouSheBiaoTiHei;
    font-size: 50px;
    font-weight: 400;
    color: aqua;
  }
  .iconfont {
    position: absolute;
    bottom: 0;
    left: 48vw;
    font-size: 50px;
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.5s linear;
  }
  .iconfont:hover {
    opacity: 1;
  }
}
</style>
