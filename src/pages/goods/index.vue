<template>
  <view class="goods">
    我是详情页面
  <button @click="handelGoShop" type="primary">go购物车</button>
  <button type="primary" open-type='contact'>联系客服</button>
  <button  type="primary" @click="add">加入购物车</button>
  <button  type="primary">立即购买 </button>
  <view>购物车中的数量{{carts.length}}</view>
  </view>
</template>

<script>
export default {
  data(){
    return {
      shopItem:{
        name:'当前商品',
        count:1,
        check:true
      },
      carts:uni.getStorageSync('carts') ||  []
    }
  },
  methods:{
    add(){
      this.carts.push(this.shopItem)
      uni.setStorageSync('carts',this.carts)
    },
    handelGoShop(){
      // uni.showTabBar()
      uni.switchTab({
        url:'/pages/shop/index'
      })
    }
  }
}
</script>

<style scoped lang='less'>
.goods{
  width: 100%;
  height: 500rpx;
  background: pink;
}
</style>