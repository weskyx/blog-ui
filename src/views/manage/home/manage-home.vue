<template>
  <div class="manage-container">
    <div class="manage-header">
      <manage-header></manage-header>
    </div>
    <div class="manage-body">
      <manage-menu></manage-menu>
      <router-view/>
    </div>
  </div>
</template>

<script>
import manageHeader from '@/components/manage-header/manage-header.vue'
import manageMenu from '@/components/manage-menu/menu.vue'
export default {
  name: 'manageHome',
  data () {
    return {
    }
  },
  components: {
    manageHeader, manageMenu
  }
}
</script>

<style scoped lang="stylus">
.manage-header
  height 150px
.manage-body
  width 1000px
  margin 12px auto
</style>
