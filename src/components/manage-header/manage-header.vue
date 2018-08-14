<template>
<div class="manage-header-inner">
  <div class="user-logo">
    <img src="../../../static/img/admin.jpg" style="width: 120px"/>
  </div>
  <div class="user-info">
    <h1>
      <span>{{userInfo.name}}</span>
      <i></i>
    </h1>
    <ul class="detail">
      <li><i class="sky icon-introduction"></i>{{userInfo.introduction}}</li>
      <li><i class="sky" :class="{'icon-man':userInfo.sex === 'man', 'icon-women':userInfo.sex === 'women', 'icon-secret':userInfo.sex === 'secret'}"></i></li>
      <li><i class="sky icon-email"></i>{{userInfo.email}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'manage-header',
  data () {
    return {
      userInfo: {
        img: '',
        name: '管理员',
        introduction: '管理员的自我介绍',
        sex: 'man',
        email: 'admin.qq.com'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.manage-header-inner
  width 1000px
  margin 0 auto
  height 100%
  display flex
  justify-content space-between
  .user-logo
    width 150px
    display flex
    justify-content center
    align-items center
  .user-info
    width 830px
    h1
      line-height 30px
    .detail
      list-style none
</style>
