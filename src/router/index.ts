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
  ],
});

export default router;
