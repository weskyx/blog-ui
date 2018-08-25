<template>
  <el-form class="x-search">
    <i class="sky icon-man"></i>
    <el-input></el-input>
  </el-form>
</template>

<script>
export default {
  name: 'search',
  props: {},
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
.x-search
  position relative
  > i
    position absolute
    z-index 1
    right 6px
    top 50%
    transform translateY(-50%)
  .el-input--small .el-input__inner
    padding-right 24px
</style>
