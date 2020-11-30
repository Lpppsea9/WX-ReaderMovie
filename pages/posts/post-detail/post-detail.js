// pages/posts/post-detail/post-detail.js
var postsData = require('../../../data/posts-data')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let postId = options.id; // url ?之后的参数
    let postData = postsData.postList[postId];
    this.setData({postData});

    wx.setStorageSync('CF', {
      developer:'smile gate',
      games:'穿越火线'
    })
    wx.setStorageSync('lol', {
      developer:'拳头公司',
      games:'英雄联盟'
    })
  },
  
  oncollectionTap:function(){
    let cfstorage = wx.getStorageSync('CF');
    let lolstorage = wx.getStorageSync('lol');
    console.log(cfstorage)
    console.log(lolstorage)

  },

  onshareTap: function() {
    // wx.removeStorageSync('CF');  //10MB 1MB 带sync的是同步操作
    // wx.removeStorageSync('lol');
    wx.clearStorageSync()
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