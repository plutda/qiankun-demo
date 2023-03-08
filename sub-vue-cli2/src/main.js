// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './public-path.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// qiankun通信方法
import appStore from '@/utils/app-store'

Vue.config.productionTip = false

let instance = null

function render (props = {}) {
  const { container } = props
  instance = new Vue({
    router,
    store,
    components: { App },
    template: '<App/>'
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue] sub-vue-cli2 app bootstraped')
}

export async function mount (props) {
  console.log('[vue] props from main framework', props)
  // 注册应用间通信
  appStore(props)
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
