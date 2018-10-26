<template>
<div class="mainbox">
<home-header></home-header>
<header-swipe></header-swipe>
<home-input></home-input>
</div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HeaderSwipe from './components/Swipe.vue'
import HomeInput from './components/Input.vue'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HeaderSwipe,
    HomeInput
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
.mainbox
    background #f6f7f9
.banner
    width: 100%
    height: 100px;
    .banner-item
      width: 100%
      height: 100%
</style>
