import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/fox',
    },
    {
      path: '/fox',
      name: 'fox',
      // meta: { requireAuth: true },
      components: { common: () => import('@/views/CommonView.vue') },
      redirect: '/fox/home',
      children: [
        {
          path: 'home',
          name: 'home',
          components: { content: () => import('@/views/HomeView.vue') },
        },
        {
          path: 'logs',
          name: 'logs',
          components: { content: () => import('@/views/LogsView.vue') },
        },
        {
          path: 'wisdom',
          name: 'wisdom',
          components: { content: () => import('@/views/WisdomView.vue') },
        },
        {
          path: 'secret',
          name: 'secret',
          components: { content: () => import('@/views/SecretView.vue') },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      components: { common: () => import('@/views/LoginView.vue') },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    // 判断该路由是否需要登录权限
    console.log('需要登录');
    if (sessionStorage.token) {
      // 判断当前的token是否存在 ； 登录存入的token
      if (sessionStorage.token === '登录成功') {
        next();
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
      }
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    next();
  }
});
export default router;
