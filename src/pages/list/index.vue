<template>
  <view>
    <view class="tabs">
      <view>销量</view>
      <view>销量</view>
      <view>销量</view>
    </view>
    <scroll-view class="container" scroll-y @scrolltolower="scrollY">
      <view
        class="container-item"
        v-for="(item,index) in queryList"
        :key="index"
        @click="handleDetails"
      >{{item.goods_name}}</view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      queryList: [],
      pagenum:1,
      flog:false
    }
  },
  onLoad(params) {
    this.query = params.query
    this.getList()
  },
  // 页面触底事件
  onReachBottom() {
    this.getList({
      pagenum: 1,
      pagesize: 10,
    })
  },

  methods: {

    handleDetails(){
      uni.navigateTo({
        url:'/pages/goods/index'
      })
    },
    scrollY() {
      if(this.flog) return 
      this.pagenum++
      this.flog = true
      this.getList()
    this.flog = false
    },
    async getList() {
      const { data: { message } } = await this.request({
        url: 'goods/search',
        data: {
          query: this.query,
          pagenum: this.pagenum,
          pagesize: 10,
        }
      })
      if(this.pagenum === 1){
      this.queryList = message.goods

      }else{
        this.queryList = this.queryList.concat(message.goods)
      }
    }
  }
}
</script>

<style scoped lang='less'>
.tabs {
  display: flex;
  height: 60rpx;
  line-height: 60rpx;
  & > view {
    flex: 1;
    text-align: center;
  }
}
.container {
  position: absolute;
  top: 60rpx;
  left: 0;
  bottom: 0;
  right: 0;
}
.container-item {
  padding: 20rpx;
}
</style>