import Vue from 'vue'
import Router from 'vue-router'

/**
 * 默认展示前台页面
 */
const Home = r => require.ensure([], () => r(require('@/pages/front/Home')), 'Home')
const article = r => require.ensure([], () => r(require('@/pages/front/article')), 'article')

const manageHome = r => require.ensure([], () => r(require('@/pages/manage/manageHome')), 'manageHome')
const articleWrite = r => require.ensure([], () => r(require('@/pages/manage/articleWrite')), 'articleWrite')
const login = r => require.ensure([], () => r(require('@/pages/manage/login')), 'login')

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/article/:articleId', name: 'article', component: article},
    {
      path: '/manage',
      name: 'manageHome',
      component: manageHome,
      children: [
        {path: 'article', name: 'articleWrite', component: articleWrite, props: true}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
