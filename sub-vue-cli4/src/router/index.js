import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    id: 726,
    name: '菜单2',
    path: '/menu2',
    component: () => import('../views/menu2'),
    icon: 'el-icon-help',
    prefix: '/sub-vue-cli4',
    children: [
      {
        id: 727,
        name: '菜单2-1',
        path: 'path1',
        component: () => import(/* webpackChunkName: "path1" */ '../views/menu2/path1')
      },
      {
        id: 728,
        name: '菜单2-2',
        path: 'path2',
        component: () => import(/* webpackChunkName: "path2" */ '../views/menu2/path2')
      }
    ]
  },
  {
    id: 728,
    name: '不带侧边栏的路由页',
    path: '/without-sidebar/path3',
    component: () => import('../views/without-sidebar'),
    icon: 'el-icon-help',
    prefix: '/sub-vue-cli4'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/sub-vue-cli4',
  routes
})

export default router
