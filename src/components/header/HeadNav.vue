<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const logs = () => {
  router.push('/fox/logs');
};
const home = () => {
  router.push('/fox/home');
};
const wisdom = () => {
  router.push('/fox/wisdom');
};
const secret = () => {
  router.push('/fox/secret');
};
const logout = () => {
  sessionStorage.clear();
  router.push('/login');
};
</script>

<template>
  <div class="head_box">
    <header>
      <div class="headNav">
        <div class="left">
          <div class="logo">FoxWord</div>
        </div>
        <div class="right">
          <div
            :class="
              'home' +
              ' iconfont' +
              ' icon-shouyefill' +
              (router.currentRoute.value.fullPath === '/fox/home'
                ? ' active'
                : '')
            "
            @click="home"
          >
            <span>首页</span>
          </div>
          <div
            :class="
              'logs' +
              ' iconfont' +
              ' icon-jilu' +
              (router.currentRoute.value.fullPath === '/fox/logs'
                ? ' active'
                : '')
            "
            @click="logs"
          >
            <span>学习日记</span>
          </div>
          <div
            :class="
              'wisdom' +
              ' iconfont' +
              ' icon-jurassic_hat' +
              (router.currentRoute.value.fullPath === '/fox/wisdom'
                ? ' active'
                : '')
            "
            @click="wisdom"
          >
            <span>长一智</span>
          </div>
          <div
            :class="
              'secret' +
              ' iconfont' +
              ' icon-tianchongxing-' +
              (router.currentRoute.value.fullPath === '/fox/secret'
                ? ' active'
                : '')
            "
            @click="secret"
          >
            <span>生人勿入</span>
          </div>
          <div class="search iconfont icon-sousuo">
            <input type="text" placeholder="搜索" />
          </div>
          <div class="user" @click="logout">退出</div>
        </div>
      </div>
    </header>
  </div>
</template>
<style lang="less" scoped>
.head_box {
  position: relative;
  // height: 200px;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 70px;
    z-index: 999;
    .headNav:hover {
      background-color: rgba(7, 247, 235, 0.8);
      cursor: pointer;
    }
    .headNav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 98vw;
      height: 50px;
      border: 1px solid rgba(7, 247, 235, 0.5);
      border-radius: 10px;
      background-color: rgba(7, 247, 235, 0.4);
      transition: all 0.3s linear;
      z-index: 999;
      .left {
        padding-left: 30px;
        .logo {
          // margin-right: 200px;
          font-family: YouSheBiaoTiHei;
          font-size: 25px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.892);
        }
      }
      .right {
        display: flex;
        align-items: center;
        padding-right: 30px;

        div {
          margin-left: 30px;
          padding: 0 10px;
          font-size: 19px;
          line-height: 30px;
          letter-spacing: 2px;
          word-spacing: -1em;
          span {
            font-family: YouSheBiaoTiHei;
          }
        }
        .active {
          border-bottom: 3px solid rgb(232, 28, 27);
        }
        .search {
          display: flex;
          align-items: center;
          width: 200px;
          height: 30px;
          border: 1px solid black;
          border-radius: 999px;
          input {
            height: 25px;
            border: none;
            background-color: transparent;
            padding-left: 5px;
          }
        }
        .user {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
