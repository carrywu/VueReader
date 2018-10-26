<template>
<div>
    <div class="inputbox">
        <form action="">
            <input type="text" placeholder="斗罗大陆" class="input iconfont">
            <button class="search-btn iconfont icon-search">&#xe651;搜索</button>
        </form>
    </div>
        <div class="module-header">
            <div class="module-title">
                男生最爱
            </div>
        </div>
        <ol class="bookol">
            <li v-for="(item,index) in booklist" :key="index" class="book-layout">
                <img :src="item.imgurl" alt="imgurl" class="book-cover">
                <div class="book-cell">
                <div class="book-title">{{item.title}}</div>
                <p class="book-desc">{{item.desc}}</p>
                <span class="book-author">{{item.author}}</span>
                <span class="book-tag">{{item.tag}}</span>
                </div>
            </li>
            <div class="book-more">
                查看更多>>>
            </div>
        </ol>
         <div class="module-header">
            <div class="module-title">
                女生最爱
            </div>
        </div>
        <ol class="bookol">
            <li v-for="(item,index) in booklist" :key="index" class="book-layout">
                <img :src="item.imgurl" alt="imgurl" class="book-cover">
                <div class="book-cell">
                <div class="book-title">{{item.title}}</div>
                <p class="book-desc">{{item.desc}}</p>
                <span class="book-author">{{item.author}}</span>
                <span class="book-tag">{{item.tag}}</span>
                </div>
            </li>
            <div class="book-more">
                查看更多>>>
            </div>
        </ol>
    </div>
</template>

<script>
export default{
  name: 'Homeinput',
  data () {
    return {
      booklist: [
        {
          'title': '民国谍影',
          'imgurl': 'http://bookcover.yuewen.com/qdbimg/349573/1011489683/150',
          'desc': '一个平凡普通的公务员，机缘巧合回到了民国二十五年，被迫加入军统，寻找地下组织，追查日本间谍，在波澜壮阔的大时代中为祖国，为民族的解放与复兴贡献着自己的一份力量，开始了他传奇的谍海生涯。QQ群833528943。',
          'author': '寻青藤',
          'tag': '军事'
        },
        {
          'title': '民国谍影',
          'imgurl': 'http://bookcover.yuewen.com/qdbimg/349573/1011489683/150',
          'desc': '一个平凡普通的公务员，机缘巧合回到了民国二十五年，被迫加入军统，寻找地下组织，追查日本间谍，在波澜壮阔的大时代中为祖国，为民族的解放与复兴贡献着自己的一份力量，开始了他传奇的谍海生涯。QQ群833528943。',
          'author': '寻青藤',
          'tag': '军事'
        },
        {
          'title': '民国谍影',
          'imgurl': 'http://bookcover.yuewen.com/qdbimg/349573/1011489683/150',
          'desc': '一个平凡普通的公务员，机缘巧合回到了民国二十五年，被迫加入军统，寻找地下组织，追查日本间谍，在波澜壮阔的大时代中为祖国，为民族的解放与复兴贡献着自己的一份力量，开始了他传奇的谍海生涯。QQ群833528943。',
          'author': '寻青藤',
          'tag': '军事'
        }
      ]
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
 @import '~@/assets/style/varibles.styl'
.inputbox
     width 17.5rem
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
        border none;
        color: white;
        padding: 0.5rem 0.5rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 0.6rem;
        margin-left 0.5rem
        box-sizing border-box
        border-radius 2rem
        -webkit-box-shadow:0px 3px 3px #c8c8c8 
        -moz-box-shadow:0px 3px 3px #c8c8c8 
        box-shadow:0px 3px 3px #c8c8c8 
    .icon-search
        font-size 15px;
.module-header
    width 100%
    .module-title
        font-family: FZZCYSK;
        font-weight: 300;
        display: inline;
        color: #33373d;
        font-size 0.8rem
    .module-title::before
        display: inline-block
        box-sizing: border-box
        width: 0.7rem
        height: 1em
        content: ''
        vertical-align: -.22ex
        color: transparent
        border-left: 4px solid #ed424b
li
    list-style none
    border-bottom:0.13rem solid #fff;
.book-layout
    position: relative;
    display: block;
    overflow: hidden;
    padding: 1rem;
    height 90px
    -webkit-transition: padding-left .15s;
    transition: padding-left .15s
.book-cover
    font-size: 0
    float: left
    width: 3.9rem
    height: 5.5rem
    margin:0 .5rem 0 0;
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
.book-cell
    overflow hidden
    .book-title
        line-height: .8rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size 0.8rem
    p
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
    .book-desc,.book-author,.book-tag
        font-size: .6rem;
        line-height: 2.125rem;
        overflow: hidden;
        color: #969ba3;
    .book-author
        color #696969
    .book-tag
        color #808080

.book-more
    height 1.5rem
    width 95%
    background $bgcolor
    text-align center
    line-height 1.5rem
    font-size .7rem;
    color #fff;
    margin  0.5rem auto
    box-sizing border-box
    border-radius 2rem
    -webkit-box-shadow:0px 3px 3px #c8c8c8 ;
    -moz-box-shadow:0px 3px 3px #c8c8c8 ;
    box-shadow:0px 3px 3px #c8c8c8 ;
</style>
