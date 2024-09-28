import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index.vue'),
      meta: {
        title: '电力现货交易'
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: 'evaluation',
          name: 'evaluation',
          component: () => import('@/views/evaluation/index.vue')
        },
        {
          path: 'sell',
          name: 'sell',
          component: () => import('@/views/sell/index.vue')
        },
        {
          path: 'trade',
          name: 'trade',
          component: () => import('@/views/trade/index.vue')
        },
        {
          path: 'decision',
          name: 'decision',
          component: () => import('@/views/decision/index.vue')
        },
        {
          path: 'tactics',
          name: 'tactics',
          component: () => import('@/views/tactics/index.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/views/user/index.vue')
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('@/views/setting/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/components/TestIndex.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
