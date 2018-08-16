<template>
  <el-container>
    <el-header style="height: 52px">
      <front-header></front-header>
    </el-header>
    <el-main></el-main>
    <el-footer></el-footer>
  </el-container>
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
.el-header
  padding 0
  background #f0f7f8
</style>
