<template>
<div class="weskyx-blog">
  <div class="weskyx-header">
    <x-header></x-header>
  </div>
  <div class="weskyx-main">
    <router-view/>
  </div>
</div>
</template>

<script>
import xHeader from '@/components/header/header.vue'
export default {
  name: 'index',
  data () {
    return {}
  },
  components: {
    xHeader
  }
}
</script>

<style scoped lang="stylus">
.weskyx-header
  height 40px
  background #fff
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05)
.weskyx-main
  width 1200px
  margin 0 auto
</style>
