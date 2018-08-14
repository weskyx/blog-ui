<template>
  <div class="sky-header">
    <div class="header-inner">
      <section class="header-left">
        <a class="header-caption">Sky</a>
        <el-form :inline="true" :model="headerForm" style="margin-left: 20px">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </section>
      <section class="header-right">
        <div class="user-info">
          <template v-if="userInfo.img">
            <img :src="userInfo.img"/>
          </template>
          <template v-else>
            <!--<span>请登录</span>
            <i class="iconfont icon-user"></i>-->
            <i class="iconfont icon-76"></i>
          </template>
        </div>
      </section>
    </div>
  </div>

</template>

<script>
import $http from '@/services/http.js'
import $api from '@/services/api.js'
export default {
  name: 'frontHeader',
  data () {
    return {
      userInfo: {
        id: null,
        img: ''
      },
      headerForm: {}
    }
  },
  created () {
    this.userInfo.id = this.$cookies.get('user_id')
    this.checkUser(this.userInfo.id)
  },
  methods: {
    getUserInfo () {
      // get user info
      $http.get($api)
    },
    checkUser (userId) {
      if (userId) {
        this.getUserInfo()
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .sky-header
    background #f0f7f8
  .header-inner
    height 52px
    width 1000px
    margin 0 auto
    display flex
    justify-content space-between
  .header-left
    display flex
    justify-content flex-start
    align-items center
    .header-caption
      color #0084ff
      font-size 20px
    .el-form-item
      margin-bottom 0
  .header-right
    display flex
    align-items center
</style>
