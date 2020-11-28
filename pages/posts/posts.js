// pages/posts/posts.js
var postsData = require('../../data/posts-data')
Page({
  //产生事件 捕捉事件 回调函数 处理事件
  /**
   * 页面的初始数据
   */
  data: {
    //数据优先思想
    // posts_key:[

    // ]
    //单向数据绑定（小程序）不能自动
    // 双向数据绑定
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    this.setData({
      posts_key: postsData.postList
    }) //ES6
  },
})