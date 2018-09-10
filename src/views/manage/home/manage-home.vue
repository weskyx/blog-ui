<template>
  <div class="manage-container">
    <template v-for="article in articles">
      <x-article :key="article.id" :articleInfo="article"></x-article>
    </template>
  </div>
</template>

<script>
import xArticle from '@/components/article/article-abstract.vue'
import $http from '@/services/http.js'
import $api from '@/services/api.js'
export default {
  name: 'manage',
  data () {
    return {
      articles: []
    }
  },
  components: {
    xArticle
  },
  created () {
    this.queryData()
  },
  methods: {
    queryData () {
      $http.get($api.get_all_articles).then(res => {
        this.articles = res
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.manage-container
  margin-top 12px
</style>
