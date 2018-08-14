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
import frontHeader from '@/components/front-header/front-header.vue'
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
  background #f0f7f8
</style>
