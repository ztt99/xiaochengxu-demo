<template>
  <view class="s-shop">
    <view class="s-shop-user">
      <view class="user">
        <text>收货人：张</text>
        <text>17600000000 <text>></text></text> 
      </view>
      <view class="address">
        <text>收货地址:</text>
        <text>收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址</text>
      </view>
    </view>
    <view class="s-shop-list">
      <view class="list-title">我的小车</view>
      <view class="list-item clearfix" v-for="item in 10" :key="item">
        <image src="/static/uploads/pic_floor01_1@2x.png"/>
        <view class="list-desc">
        <view>我的小车我的小车我的小车我的小车我的小车我的小车我的小车我的小车我的小车</view>
        <view class="list-count">
          <text>￥200</text>
          <view>
              <button class="mini-btn" type="default" size="mini">-</button>
            <text>2</text>
              <button class="mini-btn" type="default" size="mini">+</button>
          </view>
        </view>
        </view>
      </view>
    </view>
    <view class="s-shop-count">
      合计：1200
       <button class="mini-btn" type="default" size="mini">结账</button>
    </view>
  </view>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.s-shop-count{
  height: 100rpx;
  line-height: 100rpx;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.s-shop{
  background: #f5f5f5;
}
.s-shop-list{
  margin-top: 20rpx;
  margin-bottom: 120rpx;
  background: #fff;
  .list-title{
    padding-left: 20rpx;
    height: 80rpx;
    line-height: 80rpx;
    border-bottom: 1px solid rgb(182, 180, 180);
  }
  .list-item{
    padding: 20rpx;
    &>image,
    &>view{
      float: left;
    }
    image{
      width: 150rpx;
      height: 200rpx;
    }
    .list-count{
      &>view:only-of-type{
        float:right;

      }
    }

  }
  .list-desc{
    padding-left: 20rpx;
    width: 540rpx;

  }
}
.s-shop-user{
  background: #fff;
  padding:0 20rpx ;
  border-bottom: 10rpx dashed rgb(92, 0, 240);
  &>view{
    padding: 20rpx;
    line-height: 1.5;
  }
  .address,.user{
    display: flex;
    &>text:first-child{
      width: 330rpx;
    }
  }
  .user{
    justify-content: space-between;
  }

}
</style>