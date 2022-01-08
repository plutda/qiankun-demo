import router from './router'
import store from '@/store'

router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/sub-vue-cli4/without-sidebar')) {
    store.dispatch('app/setAppConfig', { showAppSidebar: false })
    store.dispatch('menu/setCollapseStatus', true)
  } else {
    store.dispatch('app/setAppConfig', { showAppHeader: true, showAppSidebar: true })
    store.dispatch('menu/setCollapseStatus', false)
  }
  next()
})
