// miniprogram/pages/invate/invate.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1644.jpg' },
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1621-.jpg' },
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1586.jpg' },
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1521.jpg' },
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1430.jpg' },
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1810-.jpg' },
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1810.jpg' },
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1811.jpg' },
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1815.jpg' },
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1823.jpg' },
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1825.jpg' },
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1827.jpg' },
      { url: 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/H_H_1834.jpg' }
    ],
    animationData: {},
    isPlaying: getApp().isBackMusicPlaying()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.anim = wx.createAnimation({
      duartion: 1000 * 10000
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
    this.updateAnims()
    db.collection('books').where({
      author: 'J. D. Salinger'
    }).get({
      success: function(res) {
        console.log(res)
      }
    })
  },

  onGotUserInfo: function() {
    wx.cloud.callFunction({
      name: 'login',
      data: {
        a: 1,
        b: 2,
      },
      success: function (res1) {
        console.dir(res1)
        wx.getUserInfo({
          success: function (res) {
            console.dir(res)
          },
          fail: console.error
        })
      },
      fail: console.error
    })
    
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

  updateAnims: function () {
    const anim = this.anim
    anim.rotate(360 * 10000).step({
      duration: 1000 * 10000
    })
    this.setData({
      animationData: anim.export()
    })
  },

  switchBackMusic: function () {
    const ret = getApp().switchBackMusic()
    this.updateMusicSwitch(ret)
  },

  closeBackMusic: function () {
    this.setData({
      isPlaying: false
    })
    getApp().closeBackMusic()
  },

  openBackMusic: function () {
    this.setData({
      isPlaying: true
    })
    getApp().openBackMusic()
  }
})
