/**
 * api地址管理
 */
export default {
  /**
   * article controller
   */
  // post 添加博客
  add_article: 'article/add',
  // get 删除博客
  delete_article: 'article/delete/{id}',
  // get 获取博客详情
  get_article_info: 'article/get/{id}',
  // get 获取用户博客列表
  get_user_article_list: 'article/list/{account}',
  // get 首页获取所有博客
  get_all_articles: 'article/listAll',
  // post 发布博客
  publish_article: 'article/publish/{id}',
  // post 更新博客
  update_article: 'article/update',

  /**
   * image controller
   */
  // get 在线查看图片
  view_image: 'img/{imageId}',
  // post 上传图片
  upload_image: 'img/uploadImage'
}
