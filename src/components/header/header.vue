<template>
  <header class="blog-header">
    <div class="left-part">
      <span class="title">weSkyx</span>
      <el-menu class="header-menu" mode="horizontal" router>
        <template v-for="item in items">
          <el-menu-item :key="item.index" :index="item.index">{{item.name}}</el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="right-part">
      <x-search></x-search>
      <i class="sky icon-write"></i>
      <el-button type="text" class="dark1a1a1">写博客</el-button>
      <template v-if="isLogin">
        <section class="user-info"></section>
      </template>
      <template v-else>
        <el-button type="text" class="dark1a1a1">登录</el-button>
        <el-button type="text" class="dark1a1a1">注册</el-button>
      </template>
    </div>
  </header>
</template>

<script>
import xSearch from '@/components/search/search'
export default {
  name: 'blog-header',
  data () {
    return {
      items: [
        {index: '', name: '博客'}
      ],
      isLogin: false
    }
  },
  components: {
    xSearch
  }
}
</script>

<style scoped lang="stylus">
.blog-header
  width 1200px
  margin 0 auto
  height 40px
  display flex
  justify-content space-between
.left-part
  display flex
  justify-content flex-start
  align-items center
  .title
    font-size 18px
  .el-menu--horizontal
    border 0
  .el-menu--horizontal .el-menu-item
    color $dark1a1a1
    height 40px
    line-height 40px
    &:hover
      color #c92027
  .el-menu--horizontal .el-menu-item.is-active
    color $dark1a1a1
    border 0
.right-part
  display flex
  justify-content flex-start
  align-items center
  .x-search
    margin-right 10px
</style>
