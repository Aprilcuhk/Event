//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    text:'改变文字',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')

  },
 changeText:function(event){
   console.log(event)
   var name=event.target.dataset.name;
   this.setData({
     text:name+':文字已经发生改变'
   })
 }
})
