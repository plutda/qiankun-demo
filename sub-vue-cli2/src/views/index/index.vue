<template>
  <div class="container">
    <div>
      来自父应用的状态: {{ msg.user_info.name }} - {{ msg.user_info.department }}
    </div>
    <div>
      改变全局状态: <button @click="change">change</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { setState } from '@/utils/app-store'

export default {
  computed: {
    ...mapGetters({ msg: 'appstore/msg' })
  },
  methods: {
    change () {
      setState({
        mainConfing: {
          user_info: {
            name: 'Leo',
            department: '设计部'
          }
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
