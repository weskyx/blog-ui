import Vue from 'vue'
import Router from 'vue-router'

/**
 * 默认展示前台页面
 */
const home = r => require.ensure([], () => r(require('@/views/front/home/home')), 'home')
const article = r => require.ensure([], () => r(require('@/views/front/article/article')), 'article')

const manageHome = r => require.ensure([], () => r(require('@/views/manage/home/manage-home')), 'manageHome')
const articleList = r => require.ensure([], () => r(require('@/views/manage/article-list/article-list')), 'articleList')
const articleEdit = r => require.ensure([], () => r(require('@/views/manage/article-edit/article-edit')), 'articleEdit')

const login = r => require.ensure([], () => r(require('@/components/login/login')), 'login')

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: home},
    {path: '/article/:articleId', name: 'article', component: article},
    {
      path: '/manage',
      name: 'manageHome',
      component: manageHome,
      children: [
        {path: '', redirect: 'articles'},
        {path: 'articles', name: 'articleList', component: articleList},
        {path: 'edit', name: 'articleEdit', component: articleEdit, props: true}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
