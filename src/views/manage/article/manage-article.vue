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
.article-editor
  flex 1
  display flex
  .v-note-wrapper.markdown-body
    flex 1 !important
  .v-right-item
    max-width 24% !important
  .v-note-wrapper .v-note-op
    border 0 !important
</style>
