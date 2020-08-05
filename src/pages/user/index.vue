<template>
  <div class='container'>
    <rich-text nodes=' <h3>个人中心</h3>'></rich-text>
    <button type="primary" open-type="getUserInfo" @getuserinfo='getuserinfo'>获取信息</button>
    <button type="primary" @click="phone">打电话</button>
    <button type="primary" open-type="feedback">反馈建议</button>
    <open-data class="pic" type="userAvatarUrl"></open-data>
    <open-data  type="userNickName"></open-data>
  </div>
</template>

<script>
export default {
  methods:{
    getuserinfo(res){
      console.log(res);
    },
    phone(){
      //api=>设备=>makePhoneCall
      uni.makePhoneCall({
        phoneNumber:'18686958162'
      })
    }
  },
 async onLoad(){
  const [err , info] = await  uni.getUserInfo()
  console.log(err,info);
  }
}
</script>

<style scoped lang='less'>
.pic{
  display: block;
  width: 250rpx;
  height: 250rpx;
  border-radius: 50%;
  overflow: hidden;
}
</style>