<template>
  <div class="manage-nav">
    <el-menu :default-active="onRoutes" class="el-menu-demo" mode="horizontal" router
             text-color="#1a1a1a">
      <template v-for="item in items">
        <el-menu-item :index="item.index" :key="item.index">{{item.title}}</el-menu-item>
      </template>
    </el-menu>
    <el-button type="primary" plain @click="addBlog()">添加</el-button>
  </div>
</template>

<script>
export default {
  name: 'manageMenu',
  data () {
    return {
      items: [
        {
          index: 'blogs',
          title: '博客'
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.items[0].index
    }
  },
  methods: {
    addBlog () {
      this.$router.push({'name': 'manageArticle'})
    }
  }
}
</script>

<style scoped lang="stylus">
.manage-nav
  position relative
  border-bottom: solid 1px #e6e6e6;
  .el-button
    position absolute
    top 10px
    right 10px
.el-menu--horizontal
  border 0
.el-menu--horizontal>.el-menu-item
  height 50px
  line-height 50px
  font-size 16px
.el-menu--horizontal>.el-menu-item.is-active
  font-weight 600
</style>
