<template>
<div class="mainbox">
<home-header></home-header>
<home-nav></home-nav>
<header-swipe></header-swipe>
<home-input></home-input>

</div>
</template>

<script>
import HomeHeader from '@/components/common/Header.vue'
import HeaderSwipe from '@/components/common/Swipe.vue'
import HomeInput from './components/Input.vue'
import HomeNav from './components/Nav.vue'
import axios from 'axios'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HeaderSwipe,
    HomeInput,
    HomeNav
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
  },

  methods: {
    getHomeInfo () {
      axios.get('/readApi/sub-categories')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
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
