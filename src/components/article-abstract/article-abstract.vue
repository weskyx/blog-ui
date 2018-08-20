<template>
<div class="article-abstract">
  <header>
    <img src="@/../static/img/thumb.gif"/>
    <div class="article-info">
      <p class="title">{{title}}</p>
      <p class="author">{{author}} / {{postedTime}}</p>
    </div>
  </header>
  <section>
    {{content}}...<a>阅读全文</a>
  </section>
</div>
</template>

<script>
export default {
  name: 'article-abstract',
  props: ['articleInfo'],
  data () {
    return {
      userLogo: this.articleInfo.userLogo,
      title: this.articleInfo.title,
      author: this.articleInfo.author,
      postedTime: this.articleInfo.postedTime,
      content: this.articleInfo.content.trim().toLowerCase()
    }
  }
}
</script>

<style scoped>

</style>
