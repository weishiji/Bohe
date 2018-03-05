//index.js
//获取应用实例
const app = getApp();
import config from '../../config.js';

Page({
  data: {
    data : {},
    loading : true,
    imgPath: config.imgPath,
  },
  onLoad: function (option) {
    let url = config.api + '/doctor/doctorone?id=' + option.id;
    wx.showLoading({
      title: '加载中...',
    });
    wx.request({
      url,
      success: (res) => {
        let {data:{data}} = res;
        this.setData({
          data,
          loading : false,
        });
        wx.hideLoading();
        wx.setNavigationBarTitle({
          title: data.name,
        });
        console.log(res.data)
      }
    });
    
  }
})
