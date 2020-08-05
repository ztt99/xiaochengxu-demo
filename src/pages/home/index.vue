<template>
  <view class="h-home" :class="{isSearch:isSearch}">
    <Search :isSearch.sync="isSearch" />
    <view class="h-home-swiper">
      <swiper
        indicator-dots
        indicator-color="rgba(253,253,253,0.5)"
        indicator-active-color="#fff"
        autoplay
        interval="3000"
      >
        <block v-for="item in swiperList" :key="item.goods_id">
          <swiper-item>
            <navigator url="/pages/goods/index">
              <image :src="item.image_src" />
            </navigator>
          </swiper-item>
        </block>
      </swiper>
    </view>
    <view class="h-home-category">
      <view class="category-item" v-for="(item,index) in categoryList" :key="index">
        <view>
        </view>
        <text>{{item.name}}</text>
      </view>
    </view>
    <view v-for="item in 4" :key="item">
      <view class="h-home-navigat1"></view>
      <view class="h-home-navigat1_1 clearfix">
        <view class="navigat1_1-item" v-for="item in 5" :key="item">
          <navigator>
            <image :src="`/static/uploads/pic_floor01_${item+1}@2x.png`" />
          </navigator>
        </view>
      </view>
    </view>
    <view class="h-home-top" v-show="scrollTop > 200" @click="backTop">top</view>
  </view>
</template>

<script>
import Search from '@/components/search'
export default {
  data() {
    return {
      isSearch: false,
      scrollTop:'',
      swiperList: [],
      categoryList: []
    }
  },
  methods: {
    backTop(){
      wx.pageScrollTo({
        scrollTop:0
      })
    },
    async getCategoryList() {
       const { data: { message } } = await this.request({
        url: 'home/catitems'
      })
      this.categoryList = message
     },
    async getSwiperList() {
      const { data: { message } } = await this.request({
        url: 'home/swiperdata'
      })
      this.swiperList = message
    }
  },
   onShareAppMessage(res) {
    return {
      title: '自定义标题',
      imageUrl: 'https://pics7.baidu.com/feed/64380cd7912397ddee15ce4bf0a6a2b0d0a28738.jpeg?token=632d34fec4d27374225d5481c48ba8d4',
    }
  },
  onLoad() {
    uni.showShareMenu()
    this.getSwiperList()
    this.getCategoryList()
  },
  // 框架 / 框架接口 / page
  onPageScroll(e){
    this.scrollTop=  e.scrollTop
  },
  async onPullDownRefresh(){
   await this.getSwiperList()
   await this.getCategoryList()
    uni.stopPullDownRefresh()
  },
  components: {
    Search
  }
}
</script>

<style scoped lang='less'>
.h-home-top {
  position: fixed;
  bottom: 10rpx;
  right: 10rpx;
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  text-align: center;
  line-height: 100rpx;
  background: rgb(218, 211, 211);
  color: rgb(83, 80, 80);
  z-index: 9999;
}
.h-home-navigat1_1 {
  padding: 16rpx;
  .navigat1_1-item {
    float: left;
    &:first-child image {
      vertical-align: middle;
      width: 232rpx;
      height: 386rpx;
    }
    &:nth-child(n + 2) image {
      vertical-align: middle;
      width: 233rpx;
      height: 188rpx;
    }
    &:nth-child(2) image,
    &:nth-child(4) image {
      margin: 0 10rpx;
    }
    &:nth-child(2) image,
    &:nth-child(3) image {
      margin-bottom: 10rpx;
    }
  }
}
.h-home-navigat1 {
  height: 100rpx;
  padding-top: 40rpx;
  background: #f4f4f4 url("/static/uploads/pic_floor01_title.png") no-repeat
    left/cover;
  background-origin: content-box;
  box-sizing: border-box;
}
.h-home-swiper {
  image {
    width: 100%;
    height: 340rpx;
  }
}
.h-home-category {
  height: 180rpx;
  padding: 24rpx 0;
  display: flex;
  .category-item {
    width: 25%;
    text-align: center;
    & > text {
      display: block;
      margin-top: 10rpx;
    }
    & > view {
      width: 128rpx;
      height: 128rpx;
      margin: auto;
      border-radius: 50%;
    }
    &:nth-child(2n) > view {
      background-color: pink;
    }
    &:nth-child(2n-1) > view {
      background-color: rgb(102, 185, 233);
    }
  }
}
</style>
