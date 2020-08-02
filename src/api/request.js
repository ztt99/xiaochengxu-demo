module.exports = function (config) {
  const {baseUrl} = config
  return function (Vue) {
    

    Vue.prototype.request =async function (params) {
      const { url } = params
      // 显示加载状态
      uni.showLoading({
        title: '正在加载...',
        mask: true
      });
      const data =  await  uni.request({
        url:baseUrl + url
      })
      if (!data[0]) {
      uni.hideLoading();
        return data[1]
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