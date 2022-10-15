<script setup lang="ts">
import HeadNav from '../components/header/HeadNav.vue';
</script>

<template>
  <div class="home_container">
    <header>
      <HeadNav />
    </header>
    <body>
      <transition name="panel">
        <router-view name="content"></router-view>
      </transition>
    </body>
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
</style>
