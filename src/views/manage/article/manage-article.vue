<template>
<div class="article-editor">
  <mavon-editor v-model="article" :boxShadow="false"></mavon-editor>
</div>
</template>

<script>
export default {
  name: 'manageArticle',
  data () {
    return {
      article: ''
    }
  },
  created () {
  },
  methods: {
    getData () {
      console.log(this.article)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.v-right-item
  max-width 24% !important
.v-note-wrapper .v-note-op
  border 0 !important
</style>
