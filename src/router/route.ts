const routes = [{
        path: '',
        redirect: () => {
          return {path: '/home'};
        }
      },
      {
        path: '/home',
        name: 'Home',
        component: ()=> import('@/views/home/index.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () =>
          import(/* webpackChunkName: "Login" */ '@/views/login/index.vue')
      }]
export default routes