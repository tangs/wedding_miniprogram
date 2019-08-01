// miniprogram/pages/site/site.js
const QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
let qqmapsdk;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIcon: '../../images/nav.png',
    latitude: 30.5426921411,
    longitude: 104.0772628784,
    markers: [{
      id: "1",
      latitude: 30.5426921411,
      longitude: 104.0772628784,
      width: 50,
      height: 50,
      iconPath: '../../images/wedding.png',
      title: "婚礼酒店"
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'MXTBZ-G6VKP-LH6DA-VLLPN-XBMQ6-OBBC3'
    });
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

  },

  markertap: function () {
    wx.openLocation({
      latitude: this.data.latitude, // 纬度，浮点数，范围为90 ~ -90
      longitude: this.data.longitude, // 经度，浮点数，范围为180 ~ -180。
      name: '十八步岛酒店', // 地图上显示的位置名
      address: '', // 地址详情说明
      scale: 14, // 地图缩放级别,整形值,范围从1~28。默认为最大
      infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
    });
  }
})