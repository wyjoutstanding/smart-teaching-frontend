/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
// import router from './router';
import router from './starterRouter';
import NowUiKit from './plugins/now-ui-kit';
// 完整引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;
// 注册elementUI
Vue.use(ElementUI);
Vue.use(NowUiKit); // 插件注册

// 创建并挂载根实例
new Vue({
  router, // 导入的路由实例
  render: h => h(App) // 渲染
}).$mount('#app');   // 挂载到app
