<template>
  <el-container>
    <el-header style="height: 150px">
      <manage-header></manage-header>
    </el-header>
    <el-main>
      <manage-menu></manage-menu>
      <router-view/>
    </el-main>
    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>
import manageHeader from '@/components/manage-header/manage-header.vue'
import manageMenu from '@/components/manage-menu/menu.vue'
export default {
  name: 'manageHome',
  data () {
    return {
    }
  },
  components: {
    manageHeader, manageMenu
  }
}
</script>

<style scoped lang="stylus">
.el-header
  padding 0
.el-main
  width 1000px
  margin 12px auto
  padding 0
  background: #fff;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  box-sizing: border-box;
</style>
