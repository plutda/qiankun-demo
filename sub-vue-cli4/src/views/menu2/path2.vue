<template>
  <div class="container">
    <router-link
      :to="`/without-sidebar/path3`"
      target="_blank"
    >
      <v-btn type="primary" size="mini">跳转到不带侧边栏的新页面</v-btn>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
</style>
