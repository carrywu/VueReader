<template>
<div>
    <div class="header">
        <span class="header-text">
            终点中文网
        </span>
        <div class="header-icon">
            <span class="iconfont icon-user">&#xe610;</span>
             <span class="iconfont icon-booklist">&#xe625;</span>
        </div>
        <!-- <router-link tag="a" class="tab-item" >首页</router-link>
        <router-link tag="a" class="tab-item" >分类</router-link>
        <router-link tag="a" class="tab-item" >排行</router-link>
        <router-link tag="a" class="tab-item">书单</router-link> -->
    </div>
</div>
</template>

<script>
import '@/assets/style/varibles.styl'
export default{
  name: 'HomeHeader'
}

</script>
<style lang='stylus' rel="stylesheet/stylus" scoped>
 @import '~@/assets/style/varibles.styl'
    .header
      font-size 1.1rem
      height 2rem
      width 100%
      display flex
      justify-content space-between
      color $bgcolor
    .header-text
        text-align center
        line-height 2rem
        font-weight 800
    .header-icon
        padding 4px
        text-align center
        line-height 1.6rem
        color $bgcolor
        font-size 1.25rem
        .iconfont
            padding 0.25rem
    .icon-user
        font-size 1rem
        font-weight 600
    .icon-booklist
        font-size 1rem
        font-weight 500

</style>
