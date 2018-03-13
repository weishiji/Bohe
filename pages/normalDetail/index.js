//index.js
//获取应用实例
const app = getApp();
import config from '../../config.js';
import doctors from '../doctors.js';

Page({
  data: {
    data: {},
    loading: true,
  },
  mergeDoctorData: (data) => {
    let filterData = doctors.filter(doctor => doctor.id == data.id)[0] || {};
    return {
      ...data,
      photo: config.imgPath + data.photo,
      ...filterData,
    }
  },
  onLoad: function (option) {
    let url = config.api + '/doctor/doctorone?id=' + option.id;
    wx.showLoading({
      title: '加载中...',
    });
    wx.request({
      url,
      success: (res) => {
        let { data: { data } } = res;
        this.setData({
          data: this.mergeDoctorData(data),
          loading: false,
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
