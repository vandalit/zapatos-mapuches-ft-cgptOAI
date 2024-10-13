import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'), // Asegúrate de que este componente exista
    },
    {
      path: '/zapatos',
      name: 'Zapatos',
      component: () => import('../views/ZapatosView.vue'), // Asegúrate de que este componente exista
    },
    {
      path: '/promocion',
      name: 'Promocion',
      component: () => import('../views/PromocionView.vue'), // Asegúrate de que este componente exista
    },
    {
      path: '/accesorios',
      name: 'Accesorios',
      component: () => import('../views/AccesoriosView.vue'), // Asegúrate de que este componente exista
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/CheckoutView.vue'), // Asegúrate de que este componente exista
    },
    {
      path: '/confirmacion',
      name: 'Confirmacion',
      component: () => import('../views/ConfirmacionView.vue'), // Asegúrate de que este componente exista
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'), // Asegúrate de que este componente exista
    },
  ]
})

export default router
