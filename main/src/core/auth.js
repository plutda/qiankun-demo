import store from '../store'
import qianKunStart from './app-register'
import microApps from '../micro-app'
import { userInfo, menu } from './local_info'

const TOKEN = 'token'

const microAppStart = () => {
  store.dispatch('menu/setMenu', menu)
  store.dispatch('app/setAuthToken', TOKEN)
  store.dispatch('app/setUserInfo', userInfo)
  qianKunStart([...microApps])
}

export default microAppStart
