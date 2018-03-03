//index.js
//获取应用实例
const app = getApp();
import config from '../../config.js';

Page({
  data: {
  },
  onLoad: function (option) {
    wx.setNavigationBarTitle({
      title: '宋先生',
    });
    console.log(option.id);
    let url = config.api + '/doctor/doctorlist'
    wx.request({
      url,
      success: (res) => {
        this.setData({
          doctorList : res.data,
        });
        console.log(res.data)
      }
    })
    
  }
})
