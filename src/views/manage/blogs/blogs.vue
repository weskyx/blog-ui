<template>
  <div class="blog-list">
    <section class="blog-abstract" v-for="item in items" :key="item.id">
      <h2>{{item.title}}</h2>
      <p class="content">
        <span>{{item.abstract}}</span>
        <el-button>阅读全文</el-button>
      </p>
      <hr>
      <section class="footer">
        <span class="post-time">{{item.createdTime}}</span>
        <span class="author">{{item.author}}</span>
        <el-button class="edit">编辑</el-button>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'blogs',
  data () {
    return {
      items: [
        {
          id: 1,
          title: 'test',
          abstract: '123',
          author: 'jinxin',
          createdTime: '2018-1-1'
        },
        {
          id: 2,
          title: 'test2',
          abstract: '12334556777777777',
          author: 'jinxin',
          createdTime: '2018-1-1'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.blog-abstract
  padding 16px 20px
  position relative
.blog-abstract:after
  content ''
  position absolute
  left 0
  right 0
  bottom 0
  margin 0 20px
  border-bottom: 1px solid #e6e6e6;
.blog-abstract:last-child:after
  border 0
</style>
