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
</script>

<template>
  <div :class="'home_container' + (next === true ? ' nextpage' : '')">
    <h1>{{ newword }}</h1>
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
  height: 100%;
  // background-color: rgb(250, 235, 215);

  background-size: cover;
  transition: top 3s ease;
  h1 {
    font-family: YouSheBiaoTiHei;
    font-size: 50px;
    font-weight: 400;
    color: #fff;
  }
}
</style>
