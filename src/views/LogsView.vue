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
