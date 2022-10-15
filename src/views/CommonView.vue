<script setup lang="ts">
import HeadNav from '../components/header/HeadNav.vue';
</script>

<template>
  <div class="home_container">
    <header>
      <HeadNav />
    </header>
    <body>
      <router-view name="content"></router-view>
    </body>
  </div>
</template>

<style lang="less" scoped></style>
