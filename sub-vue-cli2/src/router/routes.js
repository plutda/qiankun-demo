
import Index from '@/views/index'
import Menu1 from '@/views/menu1'
import Path1 from '@/views/menu1/path1'
import Path2 from '@/views/menu1/path2'

export default [
  {
    id: 1,
    hidden: false,
    path: '/',
    component: Index,
    children: null,
    name: '首页',
    icon: 'el-icon-star-on'
  },
  {
    id: 526,
    name: '菜单1',
    path: '/menu1',
    component: Menu1,
    icon: 'el-icon-s-data',
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
  }
]
