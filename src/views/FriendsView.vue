<script setup lang="ts">
import { useHeaderNavStore } from '@/stores/HeaderNav';
import { storeToRefs } from 'pinia';
import FriendsList from '../components/friend/FriendsList.vue';

const useHeaderNav = useHeaderNavStore();
const { friends_open, add_friend } = storeToRefs(useHeaderNav);

const close = () => {
  friends_open.value = false;
};
</script>

<template>
  <div class="friends_container">
    <img src="@/assets/avatar/avatar.jpg" alt="" />
    <span class="close" title="最小化" @click="close()">—</span>
    <div class="sort">
      <span :class="'is_active'">好友列表</span>
      <i>|</i>
      <span>特别关心</span>
      <i>|</i>
      <span @click="add_friend = true">添加</span>
    </div>
    <div class="friends_list">
      <FriendsList />
    </div>
  </div>
</template>

<style lang="less" scoped>
.friends_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 16px;
  background-color: #000;
  padding: 20px 0;
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-weight: 1500;
    cursor: pointer;
  }
  .close:hover {
    color: deeppink;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-bottom: 20px;
  }
  .sort {
    margin-bottom: 20px;
    span:hover {
      cursor: pointer;
      color: pink;
    }
    i {
      margin: 0 5px;
      font-style: normal;
    }
    .is_active {
      color: deeppink;
    }
  }
  .friends_list {
    width: 90%;
    height: 340px;
    // background-color: #fff;
  }
}
</style>
