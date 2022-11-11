<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useHeaderNavStore } from '@/stores/HeaderNav';
import { storeToRefs } from 'pinia';

const useHeaderNav = useHeaderNavStore();
const { friends_open } = storeToRefs(useHeaderNav);
const router = useRouter();

const rot = ref(false);
const rotate = () => {
  rot.value = !rot.value;
};

const home = () => {
  router.push('/fox/home');
};
const logs = () => {
  router.push('/fox/logs');
};
const study = () => {
  router.push('/fox/study');
};
const colect = () => {
  router.push('/fox/colect');
};
const friends = () => {
  friends_open.value = !friends_open.value;
};
const logout = () => {
  sessionStorage.clear();
  router.push('/login');
};
</script>

<template>
  <div class="header_box">
    <div
      :class="
        'menu_toggle' + ' menu_toggle_click' + (rot === true ? ' site' : '')
      "
      @click="rotate"
    >
      <span
        :class="'iconfont' + ' icon-jiahao' + (rot === false ? ' click' : '')"
      ></span>
    </div>
    <!-- 主菜单 -->
    <div
      :class="
        'menu' +
        (rot === false ? ' radius' : '') +
        (rot === true ? ' menu_click' : '')
      "
    >
      <div class="logo">fox</div>
      <ul class="main_menu">
        <li class="search">
          <span class="iconfont icon-sousuo"></span>
          <input type="text" placeholder="搜索" />
        </li>
        <li
          :class="
            router.currentRoute.value.fullPath === '/fox/home'
              ? 'is_active'
              : ''
          "
          @click="home"
        >
          <span
            :class="
              ' iconfont' +
              ' icon-shouye' +
              (router.currentRoute.value.fullPath === '/fox/home'
                ? ' is_acitve_img'
                : '')
            "
          ></span
          >首页
        </li>
        <li
          :class="
            router.currentRoute.value.fullPath === '/fox/logs'
              ? 'is_active'
              : ''
          "
          @click="logs"
        >
          <span
            :class="
              ' iconfont' +
              ' icon-rizhi' +
              (router.currentRoute.value.fullPath === '/fox/logs'
                ? ' is_acitve_img'
                : '')
            "
          ></span
          >日志
        </li>
        <li
          :class="
            router.currentRoute.value.fullPath === '/fox/study'
              ? 'is_active'
              : ''
          "
          @click="study"
        >
          <span
            :class="
              ' iconfont' +
              ' icon-xuexizhongxin' +
              (router.currentRoute.value.fullPath === '/fox/study'
                ? ' is_acitve_img'
                : '')
            "
          ></span
          >学习
        </li>
        <li
          @click="colect"
          :class="
            router.currentRoute.value.fullPath === '/fox/colect'
              ? 'is_active'
              : ''
          "
        >
          <span
            :class="
              ' iconfont' +
              ' icon-shoucang' +
              (router.currentRoute.value.fullPath === '/fox/colect'
                ? ' is_acitve_img'
                : '')
            "
          ></span
          >收藏
        </li>
        <li @click="friends">
          <span class="iconfont icon-gerenzhongxin-gerenxinxi"></span>王Rong
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
//导航栏样式
.header_box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  // height: 60px;
  border-radius: 60px;
  .menu_toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 65px;
    height: 65px;
    background-color: deeppink;
    border-radius: 100%;
    border: 5px solid pink;
    z-index: 10;
    cursor: pointer;
    translate: 0 30px;

    transition: all 0.5s ease;
    // transition: translate 0.5 ease 0.5;
    span {
      font-size: 35px;
      color: #000 !important;
      transition: all 0.5s ease;
    }
    .click {
      transform: rotate(225deg);
    }
  }
  .site {
    background-color: rgb(248, 142, 199);
    translate: 0 0px;
    transition: translate 0.5s ease 0.5s, background-color 0.5s ease;
  }
  .site:hover {
    background-color: deeppink;
  }
  .menu_toggle_click::before {
    content: ' ';
    position: absolute;
    right: 58px;
    top: 13px;
    width: 17px;
    height: 15px;
    background-color: transparent;
    border-bottom-right-radius: 100%;
    box-shadow: 3px 6px pink;
  }
  .menu_toggle_click::after {
    content: ' ';
    position: absolute;
    right: -20px;
    top: 12px;
    width: 17px;
    height: 16px;
    background-color: transparent;
    border-bottom-left-radius: 100%;
    box-shadow: -3px 6px pink;
  }

  .menu {
    width: 100%;
    height: 60px;
    border-radius: 99px;
    background-color: #000;
    transition: width 0.5s ease 0.3s;
  }
  .radius {
    animation: radius 0.2s ease 0.6s 1 normal forwards;
  }
  @keyframes radius {
    0% {
      border-radius: 99px;
    }
    100% {
      border-radius: 0;
    }
  }
  .menu_click {
    width: 64px;
    border-radius: 99px;
    transition: width 0.5s ease;
  }
}
// logo菜单
.header_box {
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    overflow: hidden;
    font-size: 26px;
    .logo {
      font-family: 'YunFengfeiyunti';
      font-weight: 900;
      font-style: italic;
      letter-spacing: 3px;
      cursor: pointer;
    }
    .main_menu {
      display: flex;
      li {
        display: flex;
        align-items: center;
        height: 30px;
        margin-left: 30px;
        font-size: 20px;
        font-weight: 500;
        // font-family: 'zhankucangeryuyang';
        font-family: 'YunFengfeiyunti';
        cursor: pointer;
        transition: all 0.3s ease;
        span {
          margin-right: 5px;
          transition: all 0.3s ease;
        }
        .is_acitve_img {
          color: deeppink;
        }
      }
      .is_active {
        padding-bottom: 10px;
        color: deeppink;
      }
      .search {
        position: relative;
        span {
          position: absolute;
          top: 6px;
          left: 10px;
          font-size: 18px;
          color: #000;
        }
        input {
          width: 200px;
          height: 30px;
          border: none;
          vertical-align: middle;
          border-radius: 30px;
          background-color: #e2dddd;
          padding-left: 36px;
          padding-right: 20px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
