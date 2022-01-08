<template>
  <div class="container">
    <div>隐藏掉侧边栏的页面:</div>
    <div>{{ appConfig }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ appConfig: 'appStore/msg' })
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: auto;
}
</style>
