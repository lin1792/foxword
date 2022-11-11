<script setup lang="ts">
import { ref } from 'vue';
import { useHeaderNavStore } from '@/stores/HeaderNav';
import { storeToRefs } from 'pinia';

const userinfo = ref(false);

const useHeaderNav = useHeaderNavStore();
const { friends_open, add_friend } = storeToRefs(useHeaderNav);

const close = () => {
  add_friend.value = false;
};

const seeuser = () => {
  userinfo.value = true;
};

const senduser = () => {
  userinfo.value = false;
};
</script>

<template>
  <div class="add_friend">
    <div class="head">
      <div class="search">
        <input type="text" placeholder="请输入用户账号" /><span
          class="iconfont icon-sousuo"
        ></span>
      </div>
      <div class="close iconfont icon-guanbi" @click="close"></div>
    </div>

    <div class="body">
      <ul>
        <li v-for="item in 10" :key="item" @click="seeuser">
          <i></i>
          <div class="info"><span>独孤九剑</span><span>1241432</span></div>
        </li>
      </ul>
      <div v-if="userinfo" class="userinfo">
        <i class="close iconfont icon-guanbi" @click="userinfo = false"></i>
        <img src="@/assets/avatar/avatar.jpg" alt="" />
        <div class="nickname">昵称:&nbsp;&nbsp;独孤九剑</div>
        <div class="account">账号:&nbsp;&nbsp;12331231</div>
        <div class="sex">性别:&nbsp;&nbsp;男</div>
        <button @click="senduser()">发送好友申请</button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.add_friend {
  width: 100%;
  height: 100%;
  background-color: #000;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 50px;
    border-bottom: 1px solid deeppink;
    .search {
      display: flex;
      width: 330px;
      height: 30px;
      // background-color: pink;
      border-radius: 5px;
      overflow: hidden;
      input {
        width: 300px;
        height: 30px !important;
        outline: none;
        border: none;
        padding: 0 20px;
        // background-color: aqua;
        color: deeppink;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.5px;
      }
      input::placeholder {
        color: rgba(255, 20, 145, 0.558);
      }
      span {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: #fff;
        color: pink;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
      }
      span:hover {
        color: deeppink;
      }
    }
    .close {
      font-size: 30px;
      cursor: pointer;
      color: pink;
    }
    .close:hover {
      color: deeppink;
    }
  }
  .body {
    position: relative;
    height: calc(100% - 52px);
    padding: 20px 30px;
    // background-color: #fff;
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      // height: 100%;
      // background-color: aqua;
      li {
        display: flex;
        align-items: center;
        width: 200px;
        height: 50px;
        // background-color: pink;
        margin-right: 20px;
        margin-bottom: 20px;
        cursor: pointer;
        i {
          display: inline-block;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background-color: aquamarine;
          margin-right: 8px;
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }
    }
    .userinfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      padding: 20px 20px;
      position: absolute;
      top: calc(50% - 150px);
      left: calc(50% - 150px);
      width: 300px;
      height: 260px;
      background-color: #fff;
      border-radius: 10px;
      i {
        position: absolute;
        right: 20px;
        top: 10px;
        color: pink;
        font-size: 22px;
        cursor: pointer;
      }
      i:hover {
        color: deeppink;
      }
      img {
        width: 60px;
        height: 60px;
        border-radius: 100px;
        margin-bottom: 10px;
      }
      .nickname {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 600;
        color: pink;
      }
      .account {
        font-size: 18px;
        margin-bottom: 10px;
        color: pink;
        font-weight: 600;
      }
      .sex {
        font-size: 18px;
        font-weight: 600;
        color: pink;
        margin-bottom: 20px;
      }
      button {
        border: none;
        width: 180px;
        height: 34px;
        border-radius: 6px;
        background-color: pink;
        color: deeppink;
        font-size: 16px;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.3s linear;
      }
      button:hover {
        background-color: rgb(243, 148, 163);
      }
    }
  }
}
</style>
