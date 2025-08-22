import { createRouter, createWebHistory } from 'vue-router';


import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import DashboardView from '../views/DashboardView.vue';
// import { useAuthStore } from '../stores/auth'; // A store de autenticação

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login', // Redireciona a rota raiz para a página de login
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }, // Protege esta rota
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   // Se a rota requer autenticação e o usuário não está autenticado, redireciona para o login
//   if (requiresAuth && !authStore.isAuthenticated) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;