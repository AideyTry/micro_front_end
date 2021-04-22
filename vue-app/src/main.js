import './public-path';
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null;

function render({container}){
  console.log('container=', container)
 instance = new Vue({
  render: h => h(App),
  router
}).$mount(container ? (container && container.querySelector('#vueContainer')) : '#vueContainer');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  const container = false
  render({ container });
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
