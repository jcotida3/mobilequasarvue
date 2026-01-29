const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('pages/LoginPage.vue'),
  },

  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/enlistment',
        component: () => import('pages/EnlistmentModule.vue'),
      },
    ],
  },

  {
    path: '/profile',
    component: () => import('layouts/ProfileLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ProfileInformation.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
