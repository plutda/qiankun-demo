
<template>
  <div class="themenu-sidebar" :class="is_collapse ? 'is_collapse' : ''">
    <el-menu
      class="the-menu"
      :collapse="is_collapse"
      :text-color="themeMenu.text"
      :active-text-color="themeMenu.active_text"
      :default-active="routerPath"
      unique-opened
    >
      <template v-for="sub of menu">
        <el-menu-item
          v-if="!sub.children || (sub.children && !sub.children.length)"
          @click="handleClickLevel1(sub)"
          :key="sub.id"
          :index="sub.prefix + sub.path"
        >
          <i class="menu-icon" :class="sub.icon"></i>
          <span class="menu-sub-title">{{sub.name}}</span>
        </el-menu-item>
        <el-submenu v-else :key="sub.id" :index="`/${sub.path}`">
          <template slot="title">
            <i class="menu-icon" :class="sub.icon"></i>
            <span class="menu-sub-title">{{sub.name}}</span>
          </template>
          <el-menu-item
            v-for="item of sub.children"
            :key="item.id"
            :index="`${sub.prefix}/${sub.path}/${item.path}`"
            @click="goto('', `${sub.prefix}/${sub.path}/${item.path}`)"
          >
            <span class="menu-sub-title">{{ item.name }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
    <div class="sidebar-footer" @click="setMenuCollapseStatus">
      <i :class="is_collapse ? 'el-icon-right' : 'el-icon-back'"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { routerGo } from '@/utils/utils.js'

export default {
  name: 'theMenu',
  data () {
    return {
      theme_menu: {
        text: '#fff',
        active_text: '#ffd04b'
      }
    }
  },
  computed: {
    // 左侧菜单主题
    themeMenu () {
      return this.theme_menu
    },
    routerPath () {
      return this.$route.path
    },
    // 导入vuex菜单数据，菜单折叠状态
    ...mapGetters(['menu', 'is_collapse'])
  },
  methods: {
    // 跨应用路由跳转
    goto (title, href) {
      routerGo(href, title)
    },
    handleClickLevel1 (sub) {
      const children = sub.children && sub.children.length
      if (!children) {
        this.goto('', sub.prefix + sub.path)
      }
    },
    setMenuCollapseStatus () {
      this.$store.dispatch('menu/setCollapseStatus', !this.is_collapse)
    }
  }
}
</script>

<style lang="scss">
.themenu-sidebar {
  height: calc(100% - 50px);
  position: absolute;
  // float: left;
  transition: 0.2s linear 0.06s;
  width: $menu_width;
  z-index: 100;
  overflow: hidden;
  width: 200px;
}
.themenu-sidebar.is_collapse {
  width: $menu_width_collapse;
}
.sidebar-footer {
  width: 100%;
  color: #fff;
  height: 40px;
  line-height: 40px;
  background: #192e50;
  cursor: pointer;
  text-align: center;
  font-size: 1.4rem;
  position: absolute;
  bottom: 0px;
}
.el-menu--popup.el-menu--popup-right-start {
  background: #17233d;
}
.the-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.the-menu.el-menu {
  overflow: auto;
  height: 100%;
  width: 100%;
  background: $menu-background;
  border-color: #2a3f54;
  .el-menu--inline .el-menu-item {
    background: #0e1524 !important;
  }
  .el-menu-item, .el-submenu__title {
    height: 40px;
    line-height: 40px;
  }
  .el-submenu .el-submenu__title:hover {
    background-color: #17233d !important;
    color: #409EFF !important;
  }
  .el-menu-item:hover, .el-menu-item:focus {
    background: url('../assets/images/menu-bg.png') left top no-repeat !important;
    background-color: #0e1524 !important;
  }
  .el-submenu .el-menu-item {
    padding: 0 45px;
    color: #a7b4c3;
  }
  .menu-sub-title {
    margin-left: 6px;
    font-weight: 600;
  }
}
</style>
