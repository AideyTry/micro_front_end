import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router
}).$mount('#app')


// 微前端应用
registerMicroApps([
  {
    name: 'react-app', // app name registered
    entry: 'http://localhost:7700',
    container: '#reactContainer',
    activeRule: '/react-app',
  },
  {
    name: 'vue-app',
    entry: 'http://localhost:8800', 
    container: '#vueContainer',
    activeRule: '/vue-app',
  },
]);

start( {
  // fetch(url, ...args) {
  //   // 给指定的微应用 entry 开启跨域请求
  //   if (url.includes('http://127.0.0.1:3000')) {
  //     return window.fetch(url, {
  //       ...args,
  //       mode: 'cors',
  //       credentials: 'include',
  //     });
  //   }

  //   return window.fetch(url, ...args);
  // },
});