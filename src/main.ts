import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/index.css';
import '../flexible.js';
// import '../src/assets/font-pic/iconfont.css';

import Particles from 'particles.vue3';

import VueLazyload from 'vue-lazyload';

import hljs from 'highlight.js'; //导入代码高亮文件
import 'highlight.js/styles/monokai-sublime.css'; //导入代码高亮样式
import { lineNumbersBlock } from '@/highlight-line-number.js';

const app = createApp(App);

// 代码片
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block: any) => {
    if (block.getAttribute('highlighted') == 'true') {
      return;
    }
    //防止已经高亮处理过的block再次被处理
    block.setAttribute('highlighted', 'true');
    hljs.highlightBlock(block);
    lineNumbersBlock(block);
  });
});

app.use(VueLazyload, {
  preLoad: 1.3,
  error: '../src/assets/image/moreng.jpg',
  loading: '../src/assets/image/moreng.jpg', // 成功加载图片前，预加载的本地图片
  attempt: 1,
});
app.use(createPinia());
app.use(router);
app.use(Particles);
app.mount('#app');
