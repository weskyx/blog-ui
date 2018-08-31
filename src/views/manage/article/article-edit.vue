<template>
<div class="article-editor">
  <el-form :model="articleForm" :rules="articleRules" ref="articleForm" label-width="0">
    <el-form-item class="form-title" prop="title">
      <el-input v-model="articleForm.title" placeholder="输入文章标题"></el-input>
      <el-button type="primary" class="save-blog" @click="submitBlog('articleForm', false)">存为草稿</el-button>
      <el-button type="primary" class="publish-blog" @click="submitBlog('articleForm', true)">发表博客</el-button>
    </el-form-item>
    <el-form-item class="markdown-editor" prop="content">
      <mavon-editor ref=md v-model="articleForm.content" :boxShadow="false"
                    @imgAdd="addImg" @imgDel="delImg"></mavon-editor>
    </el-form-item>
    <!--<el-form-item label="">
      <el-button type="primary" @click="submitBlog('articleForm')">发布</el-button>
    </el-form-item>-->
  </el-form>
</div>
</template>

<script>
import $http from '@/services/http'
import $api from '@/services/api'
// import {mavonEditor} from ...
export default {
  name: 'article-edit',
  data () {
    return {
      articleForm: {
        title: '',
        author: 'jinxin',
        images: [],
        content: ''
      },
      articleRules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { max: 50, message: '最大长度为50个字符', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    getData () {
      console.log(this.article)
    },
    addImg (pos, $file) {
      // 第一步.将图片上传到服务器.
      let formdata = new FormData()
      formdata.append('image', $file)
      $http.post('server url', null, formdata).then(url => {
        // 将md中的图片名更换为url
        this.$refs.md.$img2Url(pos, url)
      })
    },
    delImg () {
      // delete
    },
    submitBlog (formName, doPublish) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let articlebody = {
            title: this.articleForm.title,
            author: 'jinxin',
            image_url: this.articleForm.images.join(';'),
            content: this.articleForm.content,
            status: 1
          }
          $http.post($api.add_article, null, articlebody).then(res => {
            if (!doPublish) {
              this.$message({
                message: '保存为草稿成功',
                type: 'success'
              })
            } else {
              $http.post($api.publish_article, res.id).then(response => {
                this.$message({
                  message: '发布成功',
                  type: 'success'
                })
              })
            }
          }).catch(error => {
            this.$message({
              message: error.error,
              type: 'danger'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.article-editor
  position: fixed
  z-index 2
  background #fff
  top 0
  bottom 0
  left 0
  right 0
  .el-form
    height 100%
    display flex
    flex-direction column
    .form-title .el-form-item__content
      display flex
      .el-input
        flex 1
        margin 16px 8px 16px 16px
      .el-button
        margin 16px 8px 16px 8px
      .el-button.publish-blog
        margin-right 16px
    .el-form-item--small.el-form-item
      margin-bottom 0
  .markdown-editor
    flex 1
    display flex
    flex-direction column
    .el-form-item__content
      height 100%
  .v-note-wrapper.markdown-body
    box-shadow: 0 1px 3px rgba(26,26,26,0.1);
    height 100%
    min-height 500px
    width 100%
  .v-right-item
    max-width 24% !important
  .v-note-wrapper .v-note-op
    border 0 !important
  .action
    margin-top 12px
</style>
