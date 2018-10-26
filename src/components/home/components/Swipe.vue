<template>
<div class="wrapperbox">
  <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in banner" :key=index>
          <img class="swiper-img" :src="item" alt="img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</div>
</template>

<script>
export default{
  name: 'HeaderSwipe',
  data () {
    return {
      banner: [
        'http://qidian.qpic.cn/qidian_common/349573/b5960c8cee61cb32b37f75536d6528e3/0',
        'http://qidian.qpic.cn/qidian_common/349573/47389503bedeb7e024425aaf86ec757c/0',
        'http://qidian.qpic.cn/qidian_common/349573/b0d55d653cad3058272f93e84d83bf97/0',
        'http://qidian.qpic.cn/qidian_common/349573/b4d9fbb70ef0b7add5bd26b69e52113f/0'
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true,
        speed: 2000
      }

    }
  }

}

</script>
<style  scoped lang="stylus" rel="stylesheet/stylus">
 @import '~@/assets/style/varibles.styl'
 .wrapperbox
  margin 0.5rem auto 0 auto;
  width 17rem
  box-sizing: border-box;
  .wrapper >>>  .swiper-pagination-bullet-active
    background $bgcolor !important
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 30%
    .swiper-img
      width 100%;
</style>
