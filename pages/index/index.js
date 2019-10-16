//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    silderList:[],
    navList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // $.ajax({
    //   url:'',
    //   success:function(){

    //   }
    // })
    // console.log('wx',wx)
    // wx.request({
    //   url: 'https://locally.uieee.com/slides',
    //   // data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   // responseType: 'text',

    //   //成功请求执行的回调函数
    //   success: function(res) {
    //     console.log(res);
    //   },

    //   //失败执行的回调函数
    //   fail: function(res) {},

    //   //接口调用结束回调函数（调用成功、失败都会执行）
    //   complete: function(res) {},
    // })

    /***请求轮播图的***/
    wx.request({
      url: 'https://locally.uieee.com/slides',
      success:(res)=>{
         //设置页面的data数据
        // res.data
        console.log(this.data)
        // this.data.silderList = res.data

        /**
         * this.setData两功能1.更新视图 2.更新数据
         * **/
         this.setData({
           silderList : res.data
         })
      }
    })

    /***请求导航的***/
    wx.request({
      url: 'https://locally.uieee.com/categories',
      success: (res)=> {
        console.log(res);
        this.setData({
          navList : res.data
        })
      }
    })

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
