<script setup lang="ts"></script>

<template>
  <div class="friends_list">
    <ul>
      <li v-for="item in 12" :key="item">
        <i class="iconfont icon-sanjiaoxing"></i>独孤九剑<span>上午10:02</span>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.friends_list {
  width: 100% !important;
  height: 100%;
  ul {
    li {
      display: flex;
      align-items: center;
      position: relative;
      font-size: 16px;
      margin: 10px 0;
      cursor: pointer;
      i {
        display: inline-block;
        font-size: 12px;
        margin-right: 5px;
      }
      span {
        position: absolute;
        right: 0;
        font-size: 12px;
      }
    }
    li:hover {
      color: deeppink;
    }
  }
}
</style>
