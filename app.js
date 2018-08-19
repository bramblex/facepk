//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        console.log(res.code);
      }
    })
  },
  globalData: {
    userInfo: null
  }
})