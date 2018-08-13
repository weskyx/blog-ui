<template>
  <el-container>
    <el-header style="height: 52px">
      <front-header></front-header>
    </el-header>
    <el-main></el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import frontHeader from '@/pages/front/frontHeader.vue'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    frontHeader
  }
}
</script>

<style scoped lang="stylus">
.el-header
  padding 0
</style>
