<template>
  <div class="the-nav">
    <div class="the-menu-logo">
      <router-link to="/">
        <img class="logo-img" src="https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png" />
      </router-link>
    </div>
    <div class="info">
      <div class="cur-time">{{ curTime }}</div>
      <el-divider direction="vertical"></el-divider>
      <div class="user-content">
        <span class="user-name">{{ userInfo.name }}</span> -
        <span class="department">{{ userInfo.department }}</span>
      </div>
    </div>
    <div class="header-opr">
      <el-divider direction="vertical"></el-divider>
      <div class="contact-content">
        <span class="log-out" @click="handleLogout">
          <i class="el-icon-switch-button" style="font-size:14px"></i>
          <span class="out">退出</span>
        </span>
      </div>
    </div>
    <!-- 菜单折叠按钮 -->
    <!-- <div class="nav-handle-collapse">
      <i
        class="nav-icon"
        :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"
        @click="setMenuCollapseStatus()"
      ></i>
    </div> -->
    <!-- <div class="pager-msg">广播：{{subappMsg}}</div> -->
    <!-- 右侧操作区 -->
    <!-- <div class="nav-handle-box">
      <i class="nav-icon nav-handle-item el-icon-bell"></i>
      <i class="nav-icon nav-handle-item el-icon-rank" @click="handleFullScreen"></i>
      <span class="nav-handle-item nav-user-name">{{user_name}}</span>
      <i class="nav-icon nav-handle-item el-icon-switch-button" @click="logOut()"></i>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import dayjs from 'dayjs'

export default {
  name: 'theNav',
  data () {
    return {
      user_name: 'Admin', // 名称 // 用户信息
      full_screen: false, // 是否全屏
      curTime: ''
    }
  },
  computed: {
    isCollapse () {
      return this.$store.getters.is_collapse
    },
    ...mapGetters({ subappMsg: 'msg', userInfo: 'user_info' })
  },
  created () {
    const map = ['日', '一', '二', '三', '四', '五', '六']
    setInterval(() => {
      const w = dayjs().day()
      this.curTime = `${dayjs().format('YYYY-MM-DD HH:mm:ss')} 星期${map[w]}`
    }, 1000)
  },
  methods: {
    // 设置左侧菜单折叠状态
    setMenuCollapseStatus () {
      this.$store.dispatch('menu/setCollapseStatus', !this.isCollapse)
    },
    // 全屏操作
    handleFullScreen () {
      const element = document.documentElement
      if (this.full_screen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen()
        }
      }
      this.full_screen = !this.full_screen
    },
    // 暂未开通，敬请期待
    notYetOpened () {
      this.$message({})
    },
    // 退出登录
    async handleLogout () {
      // const _confirm = await this.wlConfirm('确定要退出吗?')
      // if (!_confirm) return
      await this.$store.dispatch('app/logOut')
      location.reload()
    }
  }
}
</script>

<style lang="scss">
.the-nav {
  display: flex;
  z-index: 1;
  height: $header-height;
  padding: $header-padding;
  line-height: $header-height - ($header-padding * 2);
  background: $header-background;
  color: $header-color;
  box-sizing: border-box;
  .the-menu-logo {
    margin-left: 20px;
    height: 100%;
    .logo-img {
      // width: 100%;
      height: 100%;
      display: inline-flex;
    }
  }
  .info {
    font-size: 12px;
  }
  .info, .opr {
    display: flex;
    align-items: center;
  }
  .header-opr {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
  }
  .nav-icon,
  .nav-user-name {
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
  }

  .nav-handle-item + .nav-handle-item {
    margin-left: 12px;
  }

  .pager-msg {
    font-weight: 600;
    font-size: 16px;
  }
  .cur-time {
    margin-left: 100px;
  }
  .user-content {
    display: inline-block;
    color: #ffffff;
  }
  .contact-content {
    margin-right: 20px;
    &:hover {
      cursor: pointer;
    }
    .log-out {
      margin-left: 5px;
      .out {
        font-weight: bold;
      }
    }
  }
}
</style>
