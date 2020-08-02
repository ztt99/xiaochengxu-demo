<template>
  <view class="c-category" :class="{isSearch:isSearch}">
    <Search :isSearch.sync="isSearch" />
    <view class="c-category-all">
      <view class="c-category-slide">
        <view
          class="slide-item"
          :class="{'current-item':index===currentIndex}"
          v-for="(item,index) in categoryList"
          :key="item.cat_id"
          @click="handleClick(index)"
        >{{item.cat_name}}</view>
      </view>
      <view class="c-category-container" >
        <view v-for="brand in categoryItem" :key="brand.cat_id" class="clearfix">
          <view class="container-title">{{brand.cat_name}}</view>
          <view class="container-item" v-for="item in brand.children" :key="item.cat_id">
            <image :src="item.cat_icon" />
            <text>{{item.cat_name}}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Search from '@/components/search'
export default {
  data() {
    return {
      currentIndex :0,
      isSearch: false,
      categoryList: []
    }
  },
  components: {
    Search
  },
  computed: {
    categoryItem() {
      return this.categoryList.length && this.categoryList[this.currentIndex].children
    }
  },
  methods: {
    handleClick(i){
      this.currentIndex = i
    },
    async getCategoryList() {
      const { data: { message } } = await this.request({
        url: 'categories'
      })
      this.categoryList = message
      console.log(message);
    }
  },
  onLoad() {
    this.getCategoryList()
  }
}
</script>

<style scoped lang='less'>
.c-category {
  .c-category-all {
    display: flex;
  }
  .c-category-container {
    .container-title {
      width: 100%;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
    }
    .container-item {
      float: left;
      text-align: center;
      font-size: 24rpx;
      padding: 30rpx;
      box-sizing: border-box;
      width: 193rpx;
      height: 210rpx;
      image {
        width: 133rpx;
        height: 133rpx;
      }
    }
  }
  .c-category-slide {
    .slide-item {
      font-size: 26rpx;
      width: 170rpx;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
      border-bottom: 1px solid #ccc;
      background: #f5f5f5;
    }
    .current-item {
      background: #fff;
    }
  }
}
</style>