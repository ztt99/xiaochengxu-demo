<template>
  <view class="s-search">
    <view class="s-search-input">
      <input
        class="s-input"
        :placeholder="placeholder"
        @focus="search"
        @input="searchResult"
        @confirm="confirm"
        confirm-type='搜索'
        v-model="searchName"
      />
      <text @click="cancelSearch" class="s-cancel" v-show="focused">取消</text>
    </view>
    <view class="search-history" v-show="focused">
      <text @click="removeHistory">清空历史</text>
      <navigator
        :url="`/pages/list/index?query=${item}`"
        v-for="(item,index) in history"
        :key="index"
      >{{item}}</navigator>
    </view>
    <scroll-view scroll-y v-if="resultList.length" class="result">
      <navigator
        :key="item.goods_id"
        v-for="item in resultList"
        :url="'/pages/goods/index?id=' + item.goods_id"
      >{{item.goods_name}}</navigator>
    </scroll-view>
  </view>
</template>

<script>
export default {
  props: {
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      focused: false,
      placeholder: '搜索',
      searchName: '',
      history: uni.getStorageSync('history') || [],
      resultList: []
    }
  },
  methods: {

    //清空历史
    removeHistory() {
      uni.removeStorageSync('history')
      this.history = []
    },
    // 模拟手机键盘的而确认按钮
    confirm() {
      this.history.push(this.searchName)
      uni.setStorageSync('history', [...new Set(this.history)])
      console.log(1234);
      uni.navigateTo({
        url: '/pages/list/index?query=' + this.searchName
      })
    },
    async searchResult() {
      const { data: { message } } = await this.request({
        url: 'goods/search',
        data: {
          query: this.searchName
        }
      })
      this.resultList = message.goods || []
      console.log(message);
    },
    search() {
      uni.hideTabBar()
      this.focused = true
      this.placeholder = '请输入搜索内容'
      this.$emit('update:isSearch', true)
    },
    cancelSearch() {
      uni.showTabBar()
      this.focused = false
      this.resultList = []
      this.searchName = ''
      this.placeholder = '搜索'
      this.$emit('update:isSearch', false)

    }
  }
}
</script>

<style scoped lang='less'>
.result {
  position: absolute;
  left: 0;
  right: 0;
  top: 100rpx;
  bottom: 0;
  z-index: 4;
  background-color: #fff;

  navigator {
    line-height: 1;
    padding: 20rpx 30rpx;
    font-size: 24rpx;
    color: #666;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  }
}
.search-history {
  width: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 100rpx;
  bottom: 0;
  z-index: 2;

  & > navigator {
    float: left;
    height: 50rpx;
    line-height: 50rpx;
    background: #ccc;
    padding: 10rpx 20rpx;
    margin: 20rpx 0 20rpx 20rpx;
    border-radius: 10rpx;
  }
}
.s-search-input {
  display: flex;
}
.s-search {
  padding: 20rpx 16rpx;
  background-color: #ff2d4a;
  .s-input {
    background: #fff;
    padding: 0 10rpx;
    height: 60rpx;
    border-radius: 5rpx;
    flex: 1;
  }
  .s-cancel {
    width: 100rpx;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    color: rgb(41, 40, 40);
  }
}
</style>