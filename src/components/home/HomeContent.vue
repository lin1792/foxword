<script setup lang="ts"></script>
<template>
  <!-- <div class="home_content"> -->
  <div class="left_content">
    <ul>
      <li class="one_title">
        <div><span class="iconfont icon-huaduo">一级标题</span></div>
        <ul>
          <li class="body_text">
            A vuepress-based animation blog theme, simple, beautiful,
            multi-color, multiple custom functions, providing article poster
            sharing, talk, photo album, comment and other features
          </li>
          <li v-highlight>
            <pre><code>block
              asdasd
              asd
            </code></pre>
          </li>
        </ul>
      </li>
      <li class="tow_title">
        <div><span class="iconfont icon-qitahuodong">二级标题</span></div>
      </li>
      <li class="three_title">
        <div><span class="iconfont icon-huaduo1">三级标题</span></div>
      </li>
    </ul>
  </div>
  <!-- </div> -->
</template>

<style lang="less" scoped>
/*修改行号列样式*/
.hljs-ln-numbers {
  text-align: center;
  color: #ccc;
  border-right: 1px solid #ccc;
  vertical-align: top;
  padding-right: 5px !important;

  /* your custom style here */
}

/* 修改代码列样式 */
.hljs-ln-code {
  padding-left: 5px !important;
}
.left_content {
  position: relative;
  padding: 20px;
  word-wrap: break-word;
  width: 100%;
  box-sizing: border-box;
  animation: leftcontent 1s ease 0s 1 normal forwards;
  ul {
    li {
      div {
        margin-bottom: 12px;
      }
      ul {
        padding: 0 20px;
        font-size: 18px;
        li {
          margin-bottom: 20px;
        }
      }
    }
    .one_title {
      margin-bottom: 20px;
      .iconfont {
        font-size: 24px;
      }
    }
    .tow_title {
      margin-bottom: 20px;
      .iconfont {
        font-size: 21px;
      }
    }
    .three_title {
      .iconfont {
        font-size: 18px;
      }
    }
  }
}
@keyframes leftcontent {
  0% {
    top: -500px;
  }
  100% {
    top: 0px;
  }
}
</style>
