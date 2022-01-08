import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import appStore from '@/utils/app-store'
import Vue from 'vue'
import vuetify from '@/plugins/vuetify'

// let router = null
let instance = null

const lifeCycle = () => {
  return {
    async bootstrap (props) {
      console.log('props:', props)
    },
    async mount (props) {
      appStore(props)
      render(props)
    },
    async unmount () {
      instance.$destroy()
      instance = null
      // router = null;
    },
    async update (props) {
      console.log('update props', props)
    }
  }
}

const render = ({ routes, routerBase, container } = {}) => {
  Vue.config.productionTip = false
  instance = new Vue({
    vuetify,
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

export { lifeCycle, render }
