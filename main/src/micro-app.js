import store from './store'

const host = location.host
const env = process.env.NODE_ENV
const entry_url_1 = env === 'development' ? '//localhost:8081/subapp/sub-vue-cli2/' : `//${host}/subapp/sub-vue-cli2/`
const entry_url_2 = env === 'development' ? '//localhost:8010/subapp/sub-vue-cli4/' : `//${host}/subapp/sub-vue-cli4/`
const entry_url_3 = env === 'development' ? '//localhost:8020/subapp/sub-react/' : `//${host}/subapp/sub-react/`

const microApps = [
  {
    name: 'sub-vue-cli2',
    entry: entry_url_1,
    routerBase: '/sub-vue-cli2',
    defaultRegister: true
  },
  {
    name: 'sub-vue-cli4',
    entry: entry_url_2,
    routerBase: '/sub-vue-cli4'
  },
  {
    name: 'sub-react',
    entry: entry_url_3,
    routerBase: '/sub-react'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.routerBase, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps
