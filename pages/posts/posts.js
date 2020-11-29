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
  onLoad(options) {  //es6的写法
    this.setData({
      posts_key: postsData.postList
    }) //ES6
  },
  onpostTap:function(event){
    // console.log(event) //打印出点击的事件对象
    let postId = event.currentTarget.dataset.postid; //找到每个文章的postid，非常重要
    wx.navigateTo({
      url: '../posts/post-detail/post-detail',
    })
  }
})