import Vue from 'vue';
import Router from 'vue-router';
// 引入3个页面组件
import Starter from './pages/StarterPage.vue';
import StarterNavbar from './layout/StarterNavbar.vue';
import StarterFooter from './layout/StarterFooter.vue';
import myfooter from './pages/MyFooter.vue';
// import StarterFooter from './layout/StarterFooter.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Test from './pages/test.vue';
import MainNavbar from './layout/MainNavbar.vue';
import Layout from './layout/Layout.vue';
import EmptyNavbar from './layout/EmptyNavbar.vue';

import Landing from './pages/Landing.vue';
import Profile from './pages/Profile.vue';
import Baidu from './pages/OutPage.vue';

// import myLogin from './login.vue';
Vue.use(Router); // 引入路由插件

// 创建路由实例
export default new Router({
  mode: 'history',
  routes: [ // 路由配置
    {
      path: '/index',
      name: 'index',
      components: {
        default: Starter,
        // header: StarterNavbar,
        header: myfooter,
        footer: StarterFooter
        // footer: MyFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/', 
      redirect: '/login' // 重定向为登录界面
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        default: Login,
        header: EmptyNavbar
      },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/register',
      name: 'Register',
      components: {
        default: Register, 
        header: EmptyNavbar
      },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/test',
      name: 'Test',
      components: {
        default: Test, 
        // header: StarterNavbar
        header: EmptyNavbar
      }
    },
    {
      path: '/layout',
      name: 'layout',
      components: {
        default: Layout,
        // header: StarterNavbar
        header: EmptyNavbar
      },
      children: [ // 嵌套路由
        {
          path: '/',
          name: 'Landing',
          component: Landing
        },
        {
          path: '/Profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: '/Baidu',
          name: 'Baidu',
          component: Baidu
        }
      ],
      props: {
        header: { colorOnScroll: 400 }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
