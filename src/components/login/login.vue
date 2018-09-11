<template>
<div class="login">
  <div class="content">
    <section class="login-header">
      <h1>weSkyx blog</h1>
      <span>learn by writing down</span>
    </section>
    <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm" label-width="0">
      <el-form-item prop="account">
        <el-input size="medium" v-model="loginForm.account" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input size="medium" type="password" v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="medium" type="primary" style="width: 100%" @click="login('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import $http from '@/services/http'
import $api from '@/services/api'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      loginFormRules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {max: 16, message: '最多16个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {max: 16, message: '最多16个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate(value => {
        if (value) {
          $http.post($api.login, null, this.loginForm).then(res => {
            console.log(res)
            // cookie 存基本信息
            // this.$router.replace({name: 'home'})
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.login
  position: absolute
  left 0
  right 0
  top 0
  bottom 0
  background url("../../../static/img/login.jpg") 100% 100% no-repeat
  display flex
  justify-content center
  align-items center
.login .content
  background: rgba(255,255,255,0.1);
  padding 24px
  width 350px
  height 280px
  .login-header
    display flex
    flex-direction column
    align-items center
    > h1
      font-size 40px
      line-height 56px
    > span
      font-size 20px
      line-height 28px
  .el-form
    margin-top 12px
</style>
