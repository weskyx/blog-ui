import Vue from 'vue'
import Router from 'vue-router'

/**
 * 全局路由
 * index为容器，包含header和二级路由内容
 */
const index = r => require.ensure([], () => r(require('@/index')), 'index')

/**
 * 前台路由，目前包含主页和博客详情
 */
const home = r => require.ensure([], () => r(require('@/views/front/home/home')), 'home')
const article = r => require.ensure([], () => r(require('@/views/front/article/article')), 'article')

/**
 * 后台管理路由
 * 个人全部博客展示，添加编辑
 */
const manage = r => require.ensure([], () => r(require('@/views/manage/home/manage-home')), 'manage')
// const articleList = r => require.ensure([], () => r(require('@/views/manage/article-list/article-list')), 'articleList')
const articleEdit = r => require.ensure([], () => r(require('@/views/manage/article/article-edit')), 'article-edit')

// 登陆
const login = r => require.ensure([], () => r(require('@/components/login/login')), 'login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {path: '/', index: 'home', name: 'home', component: home},
        {path: '/article/detail/:articleId', name: 'article-detail', component: article},
        {path: '/manage', name: 'manage', component: manage},
        {path: '/article/add', name: 'article-edit', component: articleEdit}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
