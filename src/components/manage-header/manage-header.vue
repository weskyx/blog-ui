<template>
<div class="manage-header-inner">
  <section class="header-left">
    <img src=""/>
    <div class="userInfo">
      <h4>{{userInfo.name}}</h4>
      <ul>
        <li><i></i>{{userInfo.introduction}}</li>
        <li><i></i>{{userInfo.sex}}</li>
        <li><i></i>{{userInfo.email}}</li>
      </ul>
    </div>
  </section>
  <section class="header-right">
    <el-button type="primary">编辑资料</el-button>
  </section>
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
        sex: '男',
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
  .header-left
    width 850px
    height 100%
  .header-right
    width 150px
    height 100%
</style>
