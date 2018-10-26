<template>
<div>
    <div class="header-tab">
      <router-link tag="a" class="tab-item" to="/home">首页</router-link>
      <router-link tag="a" class="tab-item" to="/categories">分类</router-link>
      <router-link tag="a" class="tab-item" to="/rank">排行</router-link>
      <router-link tag="a" class="tab-item" to="/bookLists" >书单</router-link>
    </div>
</div>
</template>

<script>
export default{
  name: 'HomeNav'
}

</script>
<style lang='stylus' scoped>
 @import '~@/assets/style/varibles.styl'
    .header-tab
        margin 0.5rem auto
        height 2rem
        line-height 2rem
        width 100%
        display flex
        justify-content space-around
        font-size 0.8rem
        background $bgcolor
        .tab-item
            color #F8F8FF
        .router-link-active
            color #fff
</style>
