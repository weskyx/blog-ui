<template>
<div class="article-abstract">
  <p class="article-title"><a class="article-title-link">{{title}}</a></p>
  <p class="article-info">
    <span class="author"><i class="sky icon-author"></i>{{author}}</span>
    <span class="create-time"><i class="sky icon-calendarx"></i>{{createdTime}}</span>
  </p>
  <section class="content">
    <span>{{content}}...</span>
    <el-button type="text" @click="readDetail()">阅读全文</el-button>
  </section>
</div>
</template>

<script>
export default {
  name: 'article-abstract',
  props: ['articleInfo'],
  data () {
    return {
    }
  },
  computed: {
    articleId: function () {
      return this.articleInfo.id
    },
    title: function () {
      return this.articleInfo.title
    },
    author: function () {
      return this.articleInfo.author
    },
    createdTime: function () {
      return this.articleInfo.create_time
    },
    content: function () {
      return this.articleInfo.content
    }
  },
  methods: {
    readDetail () {
      this.$router.push({name: 'article-detail', params: {articleId: this.articleId}})
    }
  }
}
</script>

<style scoped lang="stylus">
.article-abstract
  display flex
  flex-direction column
  justify-content flex-start
  background #fff
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  border-radius 2px
  margin-bottom 12px
  padding 16px 20px
  .article-title
    font-size 18px
    line-height 28px
    font-weight 600
  .article-title .article-title-link
    position relative
    display inline-block
    &::before
      visibility hidden
      content ''
      position absolute
      width 100%
      height 2px
      left 0
      bottom 0
      background $dark1a1a1
      transform: scaleX(0);
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
    &:hover::before
      visibility visible
      transform: scaleX(1);
  .article-info
    font-size 12px
    line-height 20px
    margin-top 5px
    color $gray999
  .article-info .author
  .article-info .create-time
    position relative
    display inline-block
    margin-right 24px
    > i
      margin-right 5px
  .article-info .author
    &::after
      content ''
      position absolute
      right -12px
      top 2px
      width 1px
      height 18px
      background #999
  .content
    font-size 15px
    line-height 1.6
    margin-top 8px
    .el-button
      font-size 14px
      color #175199
</style>
