<template>
  <view class="s-shop">
    <view class="s-shop-user">
      <block v-if="address">
        <view class="user">
          <text>收货人：{{address.userName}}</text>
          <text>
            {{address.telNumber}}
            <text>></text>
          </text>
        </view>
        <view class="address">
          <text>收货地址:</text>
          <text>{{address.cityName}}</text>
        </view>
      </block>
      <button v-else type="primary" @click="getAddress">获取微信收获地址</button>
    </view>
    <view class="s-shop-list">
      <view class="list-title">我的小车</view>
      <view class="list-item clearfix" v-for="(item,index) in shopList" :key="index">
        <image src="/static/uploads/pic_floor01_1@2x.png" />
        <view class="list-desc">
          <view>{{item.name + index}}</view>
          <view class="list-count">
            <text>￥200</text>
            <icon type="success" :color="item.check ?  '#ff2d4a' :'#ccc'" @click="taggle(index)"></icon>
            <view>
              <button class="mini-btn" type="default" size="mini" @click="handleCount('-',index)">-</button>
              <text>{{item.count}}</text>
              <button class="mini-btn" type="default" size="mini" @click="handleCount('+',index)">+</button>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="s-shop-count">
      合计：{{countAll}}
      <button class="mini-btn" type="default" size="mini">结账</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      address:  uni.getStorageSync('address') || null,
      shopList: [],
    }
  },
  onLoad() {
   

  },
  onShow(){
     uni.showTabBar()
    this.getShopList()
  },
  computed: {
    countAll() {
      let mycount = 0
      this.shopList && this.shopList.forEach(item => {
        if (item.check) {
          mycount += item.count * 200
        }
      })
      return mycount
    }
  },
  methods: {
    getAddress() {
      uni.chooseAddress({
        success: (res) => {
          this.address = res
          console.log(res);
          uni.setStorageSync('address',res)

        }
      })
    },
    taggle(index) {
      this.shopList[index].check = !this.shopList[index].check
      uni.setStorageSync('carts', this.shopList)

    },
    handleCount(type, index) {
      if (type === '+') {
        this.shopList[index].count = this.shopList[index].count + 1
        uni.setStorageSync('carts', this.shopList)
      } else {
        if (this.shopList[index].count === 1) {
          uni.enableAlertBeforeUnload({
            message: '去212'
          })
          return
        }
        this.shopList[index].count = this.shopList[index].count - 1
        uni.setStorageSync('carts', this.shopList)
      }

    },
    getShopList() {
      this.shopList = uni.getStorageSync('carts')

    }
  }
}
</script>

<style scoped lang='less'>
.s-shop-count {
  height: 100rpx;
  line-height: 100rpx;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.s-shop {
  background: #f5f5f5;
}
.s-shop-list {
  margin-top: 20rpx;
  margin-bottom: 120rpx;
  background: #fff;
  .list-title {
    padding-left: 20rpx;
    height: 80rpx;
    line-height: 80rpx;
    border-bottom: 1px solid rgb(182, 180, 180);
  }
  .list-item {
    padding: 20rpx;
    & > image,
    & > view {
      float: left;
    }
    image {
      width: 150rpx;
      height: 200rpx;
    }
    .list-count {
      & > view:only-of-type {
        float: right;
      }
    }
  }
  .list-desc {
    padding-left: 20rpx;
    width: 540rpx;
  }
}
.s-shop-user {
  background: #fff;
  padding: 0 20rpx;
  border-bottom: 10rpx dashed rgb(92, 0, 240);
  & > view {
    padding: 20rpx;
    line-height: 1.5;
  }
  .address,
  .user {
    display: flex;
    & > text:first-child {
      width: 330rpx;
    }
  }
  .user {
    justify-content: space-between;
  }
}
</style>