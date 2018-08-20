<template>
<div class="manage-header-inner">
  <div class="user-logo">
    <img src="@/../static/img/weskyx.png" style="height: 120px"/>
  </div>
  <div class="user-info">
    <h1>
      <span :title="userInfo.name">{{userInfo.name}}</span>
      <i></i>
    </h1>
    <ul class="detail">
      <li><i class="sky icon-introduction" title="简介"></i>{{userInfo.introduction}}</li>
      <li><i class="sky" title="性别"
             :class="{'icon-man':userInfo.sex === 'man', 'icon-women':userInfo.sex === 'women', 'icon-secret':userInfo.sex === 'secret'}"></i></li>
      <li><i class="sky icon-email" title="邮箱"></i>{{userInfo.email}}</li>
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
        sex: 'secret',
        email: 'admin.qq.com'
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.manage-header-inner
  width 1000px
  margin 0 auto
  height 100%
  background white
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  display flex
  justify-content flex-start
  .user-logo
    height 100%
    margin-left 20px
    display flex
    justify-content center
    align-items center
    >img
      width 120px
      border-radius 4px
  .user-info
    margin-left 24px
    h1
      line-height 30px
      margin-top 18px
    .detail
      list-style none
      margin-top 10px
      li
        line-height 24px
      li > i
        padding-right 10px
</style>
