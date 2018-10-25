<template>
<div>
    <div class="header">
        <span class="header-text">
            终点中文网
        </span>
        <div class="header-icon">
             <i class="fa fa-user"></i>
            <i class="fa fa-book"></i>
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
      font-size:22px;
      height: 40px;
      display:flex;
      justify-content:space-between;
      color :$bgcolor;
    .header-text
        text-align:center;
        line-height :40px;
        font-weight 800;
    .header-icon
        padding :4px;
        text-align :center;
        line-height :32px;
        color:$bgcolor;
        font-size :25px;
        .fa
            padding :5px;

</style>
