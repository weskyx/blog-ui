<template>
<div class="article-editor">
  <mavon-editor ref=md v-model="article" :boxShadow="false"
                @imgAdd="addImg" @imgDel="delImg"></mavon-editor>
  <div class="test-article">
    <mavon-editor ref=md v-model="article" :toolbarsFlag="false" :editable="false" :subfield="false"></mavon-editor>
  </div>
</div>
</template>

<script>
import $http from '@/services/http'
// import {mavonEditor} from ...
export default {
  name: 'manageArticle',
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
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.article-editor
  flex 1
  display flex
  flex-direction column
  .v-note-wrapper.markdown-body
    flex 1 !important
  .v-right-item
    max-width 24% !important
  .v-note-wrapper .v-note-op
    border 0 !important
</style>
