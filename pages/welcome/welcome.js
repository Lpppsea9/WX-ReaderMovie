Page({
  onTap:function() {
    // wx.navigateTo({ //页面隐藏
    //   url: '../posts/posts',
    // })
    // wx.redirectTo({ //页面卸载，已经不存在了
    //   url: '../posts/posts',
    // })
    // 冒泡和非冒泡

    wx.switchTab({
      url: '../posts/posts',
    })
  },
})