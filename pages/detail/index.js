//index.js
//获取应用实例
const app = getApp();
import config from '../../config.js';

Page({
  data: {
    data : {},
    imgPath: config.imgPath,
  },
  onLoad: function (option) {
    let url = config.api + '/doctor/doctorone?id=' + option.id;
    wx.request({
      url,
      success: (res) => {
        let {data:{data}} = res;
        this.setData({
          data,
        });
        wx.setNavigationBarTitle({
          title: data.name,
        });
        console.log(res.data)
      }
    });
    
  }
})
