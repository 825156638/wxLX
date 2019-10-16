// pages/shopsList/shopsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoopList:[],

    //由于第一次加载时就要自增1，所以默认值设置为0
    pageIndex:0,
    pageSize:10,
    catId:1,

    //2.1记录是否还有更多数据
    hasMore:true
  },

  //3.自己定义的函数，用来加载数据
  loadMore:function(){

    //2.2如果没有跟多数据，直接返回
    if(!this.data.hasMore)return;

    wx.request({
      url: 'https://locally.uieee.com/categories/' + this.data.catId + '/shops',
      data: {
        _limit: this.data.pageSize,
        _page: ++this.data.pageIndex
      },
      success: (res) => {
        console.log(res)

        //6.bug：请求过来的数据吧本来的替换掉了
        //解决bug思路：先获取本来的数据，在通过concat()吧新数据拼接起来
        var newList = this.data.shoopList.concat(res.data)

        //2.3获取数据的整数
        var count = parseInt(res.header['x-Total-Count']);
        //2.4用于判断比较是否有更多数据
        var flag = this.data.pageIndex * this.data.pageSize < count

        this.setData({
          shoopList: newList,
          hasMore:flag
        })

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    //1.根据首页传递过来的参数。设置导航条标题
    if(options.title){
      wx.setNavigationBarTitle({
        title: options.title,
      })
    }

    //2.把获取到的参数设置到data中,方便复用
    this.setData({
      catId:options.cat
    })
    
    //4.调用自己定义的函数
    this.loadMore();

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
    console.log('下拉事件')
    //3.1下拉刷新
    //把数据设置回默认值
    this.setData({
      shoopList:[],
      pageIndex:0,
      hasMore:true
    })
    //再重新请求数据的函数
    this.loadMore();
    //3.3 记得停止，否则在手机端一直存在
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('上拉触底')
    //触底再调用加载数据的函数
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */  onShareAppMessage: function () {

  }
})