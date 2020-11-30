// pages/posts/post-detail/post-detail.js
var postsData = require('../../../data/posts-data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let postId = options.id; // url ?之后的参数
    let postData = postsData.postList[postId];
    this.data.currentPostId = postId //把postId值传到data中
    this.setData({ postData });
    var postsCollected = wx.getStorageSync('postsCollected');
    if (postsCollected) {
      let collected = postsCollected[postId];
      if (collected) {
        this.setData({
          collected: postsCollected[postId]
        })
      }
    } else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('postsCollected', postsCollected)
    }
  },

  oncollectionTap: function () {


    // wx.showToast({
    //   title: collected ? '收藏成功' : '取消成功',
    //   duration: 1000,
    //   icon:'success'
    // })

    //如果文章是收藏：是否取消收藏
    //如果文章是未收藏：是否收藏
    var that = this; 
    var postsCollected = wx.getStorageSync('postsCollected');
    var collected = postsCollected[this.data.currentPostId];
    wx.showModal({
      // title: '收藏',
      content: collected ? '是否取消收藏' : '是否收藏',
      confirmText: '确认',
      cancelText: '取消',
      cancelColor: 'cancelColor',
      success: function(res) {
        if (res.confirm) {
          collected = !collected;
          postsCollected[that.data.currentPostId] = collected;
          wx.setStorageSync('postsCollected', postsCollected);
          that.setData({collected});
        }
      }
    })
  },

  onshareTap: function () {
    // wx.removeStorageSync('CF');  //10MB 1MB 带sync的是同步操作
    // wx.removeStorageSync('lol');
    // wx.clearStorageSync()
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})