<template>
<div class="article-editor">
  <mavon-editor ref=md v-model="article" :boxShadow="false"
                @imgAdd="addImg" @imgDel="delImg"></mavon-editor>
  <div class="action">
    <el-button type="primary" @click="submitBlog()">发布</el-button>
  </div>
</div>
</template>

<script>
import $http from '@/services/http'
// import {mavonEditor} from ...
export default {
  name: 'articleEdit',
  data () {
    return {
      article: ''
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
    submitBlog () {
      console.log(this.article)
      // 提交博客
      // $http.post('api', null, this.article).then(res => {
      //   // 处理回调
      // })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.article-editor
  .v-note-wrapper.markdown-body
    box-shadow: 0 1px 3px rgba(26,26,26,0.1);
    min-height 500px
  .v-right-item
    max-width 24% !important
  .v-note-wrapper .v-note-op
    border 0 !important
  .action
    margin-top 12px
</style>
