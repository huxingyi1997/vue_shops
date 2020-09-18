import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [{ path: '/welcome', component: Welcome },
      { path: '/users', component: Users }
      ]
    }
  ]
})

// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是一个函数下一个要做的操作
router.beforeEach((to, from, next) => {
  // 访问登陆页
  if (to.path === '/login') { return next(); }

  // 获取token
  const tokenStr = window.sessionStorage.getItem('token');

  if (!tokenStr) { return next('/login'); }

  next();
})

export default router