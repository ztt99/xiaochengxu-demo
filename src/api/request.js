module.exports = function (config) {
  const {baseUrl} = config
  return function (Vue) {
    

    Vue.prototype.request =async function (params) {
      const { url,data,method } = params
      // 显示加载状态
      uni.showLoading({
        title: '正在加载...',
        mask: true
      });
      const res =  await  uni.request({
        url: baseUrl + url,
        [method==='post'? 'params':'data']:data
      })
      if (!res[0]) {
      uni.hideLoading();
        return res[1]
      } else {
        uni.showLoading({
          title: '请求失败',
          mask: true
        });
      uni.hideLoading();
      }

    }
  }
}