
  Page({
    data: {
      latitude: 31.230370,
      longitude: 121.4737,
      markers: [{
        id: 1,
        latitude: 31.230370,
        longitude: 121.4737,
        name: '上海市政府'
    }],
      covers: [{
        latitude: 31.230370,
        longitude: 121.4737,
        iconPath: '/pages/image/location.png'
    }, {
          latitude: 31.230370,
          longitude: 121.4737,
          iconPath: '/pages/image/location.png'
    }]
    },
    onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 31.230370,
        longitude: 121.4737,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  goout:function(){
    wx.redirectTo({
      url: '../index/index',
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 31.230370,
        longitude: 121.4737,
      }, {
          latitude: 31.230370,
          longitude: 121.4737,
      }]
    })
  }
})