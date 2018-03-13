//index.js
//获取应用实例
const app = getApp();
import config from '../../config.js';
import doctors from '../doctors.js';
import casesData from './cases.js';
Page({
  data: {
    data : {},
    caseData : undefined,
    loading : true,
  },
  mergeDoctorData : (data) => {
    let filterData = doctors.filter(doctor => doctor.id == data.id)[0] || {};
    return {
      ...data,
      photo : config.imgPath + data.photo,
      ...filterData,
    }
  },
  filterCase : (data) => {
    return casesData.filter(cd => cd.id == data.id)[0];
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
          data: this.mergeDoctorData(data),
          caseData: this.filterCase(data),
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
