<script setup lang="ts">
import { reactive } from 'vue';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import img01 from './assets/image/bgi01.jpg';
import img02 from './assets/image/bgi02.jpg';
import img03 from './assets/image/bgi03.jpg';
import img04 from './assets/image/bgi04.jpg';
import img05 from './assets/image/bgi05.png';
import img06 from './assets/image/bgi06.jpg';
import img07 from './assets/image/bgi07.jpg';
import img08 from './assets/image/bgi08.png';
import img09 from './assets/image/bgi09.png';
import img10 from './assets/image/bgi10.png';
import img11 from './assets/image/daojian.jpg';

const a = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
const arr = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
];
const b = arr[a];
console.log(b);

// 粒子
const particlesInit = async (engine: Engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container: any) => {
  console.log('Particles container loaded', container);
};
const options = reactive({
  background: {
    color: {
      value: '', // 粒子颜色
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push', // 可用的click模式有: "push", "remove", "repulse", "bubble"。
      },
      onHover: {
        enable: true,
        mode: 'grab', // 可用的hover模式有: "grab", "repulse", "bubble"。
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      remove: {
        quantity: 2,
      },
      push: {
        quantity: 0,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff', // '#dedede'。线条颜色。
      distance: 150, // 线条长度
      enable: true, // 是否有线条
      opacity: 0.5, // 线条透明度。
      width: 1, // 线条宽度。
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 2, // 粒子运动速度。
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 60, // 粒子数量。
    },
    opacity: {
      value: 1, // 粒子透明度。
    },
    shape: {
      type: 'circle', // 可用的粒子外观类型有："circle","edge","triangle", "polygon","star"
    },
    size: {
      random: true,
      value: 4,
    },
  },
  detectRetina: true,
});
</script>
<template>
  <div class="container" v-lazy:background-image="img11">
    <el-scrollbar class="ad">
      <transition name="panel">
        <router-view name="common"></router-view>
      </transition>
      <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="options"
      />
    </el-scrollbar>
  </div>
</template>

<style lang="less" scoped>
.panel-enter-from {
  opacity: 0;
}
.panel-enter-active {
  transition: all 0.3s linear;
}
.panel-enter-to {
  opacity: 1;
}

.container {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  :deep(.el-scrollbar__bar.is-vertical) {
    width: 6px;
    background-color: rgba(0, 229, 255, 0.374);
  }
  :deep(.el-scrollbar__thumb) {
    background-color: rgb(0, 123, 255);
  }
}
</style>
