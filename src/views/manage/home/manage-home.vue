<template>
  <el-container>
    <el-header style="height: 150px">
      <manage-header></manage-header>
    </el-header>
    <el-main></el-main>
    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>
import manageHeader from '../../../components/manage-header/manage-header.vue'
export default {
  name: 'manageHome',
  data () {
    return {
    }
  },
  components: {
    manageHeader
  }
}
</script>

<style scoped lang="stylus">
.el-header
  padding 0
</style>
