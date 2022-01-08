import './core/public-path'
import { lifeCycle, render } from './core/life-cycle'

const { bootstrap, mount, unmount } = lifeCycle()
export { bootstrap, mount, unmount }

const __qiankun__ = window.__POWERED_BY_QIANKUN__
__qiankun__ || render()
