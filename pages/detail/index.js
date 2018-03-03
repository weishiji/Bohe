//index.js
//获取应用实例
const app = getApp();
import config from '../../config.js';

Page({
  data: {
    data : {},
  },
  onLoad: function (option) {
    let url = config.api + '/doctor/doctorone?id=' + option.id;
    wx.request({
      url,
      success: (res) => {
        this.setData({
          data : res.data.data,
        });
        wx.setNavigationBarTitle({
          title: res.data.data.name,
        });
        console.log(res.data)
      }
    });
    
  }
})
