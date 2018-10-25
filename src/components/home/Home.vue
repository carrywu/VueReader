<template>
<div>
<home-header></home-header>
<header-swipe></header-swipe>
</div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HeaderSwipe from './components/Swipe.vue'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HeaderSwipe
  },
  data () {
    return {
      banner: [
        'http://statics.zhuishushenqi.com/recommendPage/15313940968984',
        'http://statics.zhuishushenqi.com/recommendPage/153139416791777',
        'http://statics.zhuishushenqi.com/recommendPage/153139401503529',
        'http://statics.zhuishushenqi.com/recommendPage/153139406636473'

      ]
    }
  }
}

</script>
<style  scoped lang="stylus" rel="stylesheet/stylus">
.mint-swipe
  height 200px;
  overflow hidden;
.banner
    width: 100%
    height: 100px;
    .banner-item
      width: 100%
      height: 100%
</style>
