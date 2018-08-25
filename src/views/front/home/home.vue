<template>
  <div class="blog-home">这里是博客首页主体</div>
</template>

<script>
import frontHeader from '@/components/front-header/front-header.vue'
import $http from '@/services/http.js'
import $api from '@/services/api.js'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    frontHeader
  },
  created () {
    // this.testApi()
  },
  methods: {
    testApi () {
      $http.get($api.article_test).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.blog-home
  padding-top 16px
</style>
