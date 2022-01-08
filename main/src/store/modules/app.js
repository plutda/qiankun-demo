import Cookie from 'js-cookie'
import { logOut, clearSession } from '@/api/app-configs'
import { Loading } from 'element-ui'

let _global_loading_instance = null

export default {
  namespaced: true,
  state: {
    size: 10, // 分页 页大小
    auth_token: '',
    user_info: {},
    app_config: {
      showAppHeader: true,
      showAppSidebar: true
    }
  },
  mutations: {
    // 设置分页大小
    SET_PAGE_SIZE (state, data) {
      state.size = data
    },
    // 设置token
    SET_TOKEN (state, data) {
      state.auth_token = data
      Cookie.set('auth_token', data)
    },
    // 移除token
    REMOVE_TOKEN (state, data) {
      Cookie.remove('auth_token')
    },
    SET_USER_INFO (state, data) {
      state.user_info = data
    },
    SET_APP_CONFIG (state, data) {
      state.app_config = { ...state.app_config, ...data }
    },
    SET_APP_GLOBAL_LOADING (state, data) {
      if (data && data.show) {
        delete data.show
        _global_loading_instance = Loading.service({
          lock: true,
          text: 'loading...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
          ...data
        })
      } else {
        _global_loading_instance && _global_loading_instance.close()
        _global_loading_instance = null
      }
    }
  },
  actions: {
    // 设置分页大小
    setPageSize ({ commit }, data) {
      commit('SET_PAGE_SIZE', data)
    },
    // 设置token
    setAuthToken ({ commit }, data) {
      commit('SET_TOKEN', data)
    },
    setUserInfo ({ commit }, data) {
      commit('SET_USER_INFO', data)
    },
    setAppConfig ({ commit }, data) {
      commit('SET_APP_CONFIG', data)
    },
    // logout
    async logOut ({ commit }) {
      await logOut()
      commit('REMOVE_TOKEN')
    },
    // 开启关闭 全局loading
    setAppGlobalLoading ({ commit }, data) {
      commit('SET_APP_GLOBAL_LOADING', data)
    }
  }
}
