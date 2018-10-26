<template>
<div class="inputbox">
    <form action="">
        <input type="text" placeholder="斗罗大陆" class="input iconfont">
        <button class="search-btn iconfont icon-search">&#xe651;搜索</button>
    </form>
</div>
</template>

<script>
export default{
  name: 'Homeinput'
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
 @import '~@/assets/style/varibles.styl'
.inputbox
     width 17.8rem
     height 2rem
     margin 0.5rem 1rem 1rem 1rem
    .input
        height 1.5rem
        width 70%;
        margin  0.2rem ;
        border 0.05rem solid #FF6347;
        border-radius: 1rem
        outline none
        padding-left 0.6rem
    .search-btn
        background $bgcolor;
        padding 0
        border none;
        color: white;
        border-radius: 1rem
        padding: 0.5rem 0.5rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 0.6rem;
        margin-left -0.4rem
    .icon-search
        font-size 15px;
</style>
