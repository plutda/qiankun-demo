<template>
  <div id='root' class='main-container'>
    <!-- 登陆后视图 -->
    <template v-if='isLogin'>
      <!-- 上部导航区 -->
      <the-nav v-if='app_config.showAppHeader' />
      <!-- 右侧视图 -->
      <div class='main-container-content'>
        <!-- 左侧菜单区 -->
        <the-menu v-if='app_config.showAppSidebar' class='main-menu-box' />
        <!-- 子应用渲染区 -->
        <div class='main-container-view' :class="!app_config.showAppSidebar ? 'total_collapse' : is_collapse ? 'collapse' : ''">
          <!-- <el-scrollbar class='wl-scroll'> -->
            <!-- qiankun2.0  container 模式-->
            <div id='subapp-viewport' class='app-view-box'></div>
          <!-- </el-scrollbar> -->
        </div>
      </div>
    </template>
    <!-- 非登录视图 -->
    <div v-else id='subapp-viewport' class='app-view-box'></div>
  </div>
</template>

<script>
import TheMenu from '@/components/TheMenu.vue'
import TheNav from '@/components/TheNav.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'rootView',
  components: {
    TheMenu,
    TheNav
  },
  computed: {
    isLogin () {
      return true
    },
    ...mapGetters(['app', 'app_config', 'is_collapse'])
  }
}
</script>

<style lang='scss'>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.main-container-content {
  flex: 1;
  > .main-container-view.total_collapse {
    margin-left: 0;
  }
  > .main-container-view.collapse {
    margin-left: $menu_width_collapse;
  }
  > .main-container-view {
    margin-left: $menu_width;
    height: calc(100% - 0px);
    background: $main-base-color;
    box-sizing: border-box;
    .app-view-box {
      width: 100%;
      box-sizing: border-box;
    }
  }
}
.subapp-loading {
  background: url('~@/assets/images/loading.gif');
}
</style>
