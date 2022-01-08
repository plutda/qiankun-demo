import app from '../App'
import Menu1 from '../views/menu1'
import Path1 from '../views/menu1/path1'
import Path2 from '../views/menu1/path2'

export const menu = [
  {
    id: 1,
    path: '/',
    component: app,
    children: null,
    name: '首页',
    icon: 'el-icon-star-on',
    prefix: '/sub-vue-cli2'
  },
  {
    id: 526,
    name: 'Vue-cli2 app',
    path: 'menu1',
    component: Menu1,
    icon: 'el-icon-s-data',
    prefix: '/sub-vue-cli2',
    children: [
      {
        id: 527,
        name: '菜单1-1',
        path: 'path1',
        component: Path1
      },
      {
        id: 528,
        name: '菜单1-2',
        path: 'path2',
        component: Path2
      }
    ]
  },
  {
    id: 626,
    name: 'Vue-cli4 app',
    path: 'menu2',
    component: Menu1,
    icon: 'el-icon-help',
    prefix: '/sub-vue-cli4',
    children: [
      {
        id: 627,
        name: '菜单2-1',
        path: 'path1',
        component: Path1
      },
      {
        id: 628,
        name: '菜单2-2',
        path: 'path2',
        component: Path2
      }
    ]
  },
  {
    id: 726,
    name: 'React app',
    path: 'menu3',
    component: Menu1,
    icon: 'el-icon-c-scale-to-original',
    prefix: '/sub-react',
    children: [
      {
        id: 627,
        name: '菜单3-1',
        path: 'path1',
        component: Path1
      }
    ]
  }
]

export const userInfo = {
  name: 'Pluto',
  permissions: ['admin'],
  roles: ['admin'],
  department: '研发部',
  id: 'NC01291523'
}
