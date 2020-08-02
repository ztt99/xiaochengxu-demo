<template>
  <view class="s-search">
    <view class="s-search-input">
      <input class="s-input" :placeholder="placeholder" @focus="search" />
      <text @click="cancelSearch" class="s-cancel" v-show="focused">取消</text>
    </view>
    <view class="search-result" v-show="focused"></view>
  </view>
</template>

<script>
export default {
  props:{
    isSearch:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      focused: false,
      placeholder: '搜索'
    }
  },
  methods: {
    search() {
      this.focused = true
      this.placeholder = '请输入搜索内容'
      this.$emit('update:isSearch',true)
    },
    cancelSearch() {
      this.focused = false
      this.placeholder = '搜索'
      this.$emit('update:isSearch',false)

    }
  }
}
</script>

<style scoped lang='less'>
.search-result {
  width: 100%;
  background: pink;
  position: absolute;
  left: 0;
  right: 0;
  top: 100rpx;
  bottom: 0;
  z-index: 2;
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