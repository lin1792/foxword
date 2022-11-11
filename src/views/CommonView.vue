<script setup lang="ts">
import HeaderNav from '../components/header/HeaderNav.vue';
import FriendsView from './FriendsView.vue';
import { useHeaderNavStore } from '@/stores/HeaderNav';
import { storeToRefs } from 'pinia';
import AddFriends from '../components/friend/AddFriends.vue';

const useHeaderNav = useHeaderNavStore();
const { friends_open, add_friend } = storeToRefs(useHeaderNav);
</script>

<template>
  <div class="home_container">
    <header>
      <HeaderNav />
    </header>

    <main>
      <transition name="panel">
        <router-view name="content"></router-view>
      </transition>
    </main>
    <div :class="'friends' + (friends_open === true ? ' open' : '')">
      <FriendsView />
    </div>
    <transition name="panel">
      <div v-if="add_friend" class="addfriend">
        <AddFriends />
      </div>
    </transition>
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
    bottom: 90px;
    right: -230px;
    // right: 100px;
    width: 0px;
    height: 500px;
    overflow: hidden;
    // background-color: #fff;
    transition: all 0.5s ease;
  }
  .open {
    right: 100px;
    width: 230px;
    transition: all 0.5s linear;
  }

  main {
    height: calc(100vh - 65px);
  }
  .addfriend {
    position: absolute;
    left: 20%;
    top: calc(20%);
    width: 50%;
    height: 60%;
    border-radius: 10px;
    overflow: hidden;
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
</style>
