<script setup lang="ts">
import HeaderNav from '../components/header/HeaderNav.vue';
import FriendsView from './FriendsView.vue';
import { useHeaderNavStore } from '@/stores/HeaderNav';
import { storeToRefs } from 'pinia';

const useHeaderNav = useHeaderNavStore();
const { friends_open } = storeToRefs(useHeaderNav);
</script>

<template>
  <div class="home_container">
    <header>
      <HeaderNav />
    </header>
    <transition name="friend">
      <div v-if="friends_open" class="friends">
        <FriendsView />
      </div>
    </transition>
    <main>
      <transition name="panel">
        <router-view name="content"></router-view>
      </transition>
    </main>
  </div>
</template>

<style lang="less" scoped>
.home_container {
  position: relative;
  background-color: pink;
  header {
    height: 65px;
  }
  .friends {
    position: absolute;
    bottom: 0;
    right: 0;
    height: calc(100vh - 60px);
    z-index: 99;
  }
  main {
    height: calc(100vh - 65px);
  }
}
.panel-enter-from {
  opacity: 0;
}
.panel-enter-active {
  transition: all 0.3s linear;
}
.panel-enter-to {
  opacity: 1;
}

.friend-enter-from {
  width: 0;
}
.friend-enter-active {
  transition: all 0.2s ease;
}
.friend-enter-to {
  width: 230px;
}
.friend-leave-from {
  width: 230px;
}
.friend-leave-active {
  transition: all 0.2s ease;
}
.friend-leave-to {
  width: 0;
}
</style>
