<template>
<div class="article-editor">
  <mavon-editor v-model="article"></mavon-editor>
</div>
</template>

<script>
export default {
  name: 'article-write',
  data () {
    return {
      article: ''
    }
  }
}
</script>

<style scoped>

</style>
