//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
    this.playBackMuisc()
    this.globalData = {}
  },

  backmusic: function () {
    const player = wx.getBackgroundAudioManager()
    player.title = '往后余生'
    player.src = 'cloud://ts-yj-wedding-tluor.7473-ts-yj-wedding-tluor/back.mp3'
    player.onEnded(() => this.backmusic())
    // player.onPlay(() => this.isPalying = true)
    // player.onPause(() => this.isPalying = false)
    // player.onStop(() => this.isPalying = false)
    // this.isPalying = true
  },

  playBackMuisc: function () {
    this.isPalying = true;
    this.backmusic()
  },

  switchBackMusic: function () {
    const player = wx.getBackgroundAudioManager()
    if (this.isPalying) {
      player.pause()
      this.isPalying = false
      return false
    } else {
      player.play()
      this.isPalying = true
      return true
    }
  },

  isBackMusicPlaying: function () {
    return this.isPalying
  }
})
