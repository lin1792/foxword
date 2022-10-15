<script setup lang="ts">
import { ref, onMounted } from 'vue';

import img01 from '../assets/image/bgi01.jpg';
import img02 from '../assets/image/bgi02.jpg';
import img03 from '../assets/image/bgi03.jpg';
import img04 from '../assets/image/bgi04.jpg';
import img05 from '../assets/image/bgi05.png';
import img06 from '../assets/image/bgi06.jpg';
import img07 from '../assets/image/bgi07.jpg';
import img08 from '../assets/image/bgi08.png';
import img09 from '../assets/image/bgi09.png';
import img10 from '../assets/image/bgi10.png';
import HomeContent from '../components/home/HomeContent.vue';

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

let as = ref();
const welcom = '欢迎来到FoxWord';
let newWelcom = ref('');
onMounted(() => {
  setTimeout(() => {
    as.value = img04;
  }, 0);
  setTimeout(() => {
    let i = 1;

    const type = setInterval(() => {
      newWelcom.value = welcom.slice(0, i++);
      console.log(newWelcom.value);
      if (i === welcom.length + 1) {
        clearInterval(type);
      }
    }, 100);
  }, 1000);
});
</script>
<template>
  <div class="container">
    <div class="cover"></div>
    <div class="img" v-lazy:background-image="as">
      {{ newWelcom }}
      <div class="total">
        <div class="top">
          <span class="iconfont icon-word">总字数 1232</span
          ><span class="iconfont icon-zonghaoshishichang">时长 5</span>
        </div>
        <div class="bottom">
          <span class="iconfont icon-qiapianshuliang">发布数 2</span
          ><span class="iconfont icon-tongji">总阅读数 2</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="main">
        <div class="left">
          <HomeContent />
        </div>
        <div class="right">
          <div class="info">
            <img src="../assets/avatar/avatar.jpg" alt="" />

            <div class="name">Fox</div>
            <div class="class">
              <ul>
                <li><span>文章</span><span>12</span></li>
                <li><span>标签</span><span>12</span></li>
                <li><span>类别</span><span>32</span></li>
              </ul>
            </div>
            <div class="target">Github</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  position: relative;
  .cover {
    width: 100vw;
    height: 330px;
    background-color: transparent;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: rgb(0 0 0 / 20%) 0px 18px 50px -10px;
  }
  .img {
    position: absolute;
    top: -100px;
    width: 100vw;
    height: 330px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 -15vh;
    text-align: center;
    line-height: 260px;
    font-size: 50px;
    font-style: italic;
    letter-spacing: 2px;
    color: #00fefe;
    transition: background-image 1s linear;
    animation: imgheight 1s linear 0s 1 normal forwards;
    .total {
      position: absolute;
      left: calc(50vw - 150px);
      bottom: 20px;
      width: 350px;
      height: 50px;
      // background-color: #fff;
      z-index: 999;
      div {
        display: flex;
        justify-content: center;
        span {
          margin-right: 30px;
          font-size: 18px;
          line-height: 30px;
          color: #00fefe;
        }
        span:nth-last-child(1) {
          margin-right: 0;
        }
      }
    }
  }
  @keyframes imgheight {
    0% {
      opacity: 0;
      top: -100px;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    // padding-left: 200px;
    padding-bottom: 20px;
    width: 100vw;
    .main {
      // position: relative;
      display: flex;
      justify-content: center;
      width: 70vw;
      .left {
        flex: 7;
        border-radius: 20px;
        margin-right: 50px;
        overflow: hidden;
        // background-color: rgba(1, 1, 1, 0.2);
        background-color: #fff;
      }
      .right {
        position: sticky;
        top: 100px;
        flex: 3;
        height: 500px;
        // padding: 20px 20px;
        border-radius: 20px;
        background-color: rgba(1, 1, 1, 0.2);
        .info {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          height: 250px;
          border-radius: 20px;
          background-color: #fff;

          img {
            width: 70px;
            height: 70px;
            border-radius: 100%;
          }
          .name {
            font-size: 20px;
            line-height: 40px;
          }
          .class {
            width: 100%;
            margin-bottom: 20px;
            ul {
              display: flex;
              li {
                flex: 1;
                display: flex;
                flex-direction: column;
                border-right: 1px solid black;
                span {
                  font-size: 16px;
                  text-align: center;
                }
              }
              li:nth-last-child(1) {
                border-right: none;
              }
            }
          }
          .target {
            width: 70%;
            height: 30px;
            background-color: rgb(7, 247, 235);
            text-align: center;
            border-radius: 99px;
            font-size: 18px;
            line-height: 30px;
            letter-spacing: 2px;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
