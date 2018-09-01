<template>
 <div class="article">article</div>
</template>

<script>
export default {
  name: 'article-detail',
  data () {
    return {
      articleId: null
    }
  },
  created () {
    console.log(this.$router)
    console.log(this.$route)
  },
  methods: {
    initArticle () {
      // const articleId = this.$router
    }
  }
}
</script>

<style scoped>

</style>
