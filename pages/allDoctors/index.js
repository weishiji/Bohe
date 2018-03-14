//index.js
//获取应用实例
const app = getApp();
import config from '../../config.js';
import doctors from '../doctors.js';
import list from '../list.js';
const util = require('../../utils/util.js');

Page({
  data: {
    loading: true,
    doctorList: [],
    //canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  handleToTeam: () => {
    wx.navigateTo({
      url: '../team/index'
    })
  },
  handleCustomerService: () => {
    console.log('go to customer service');
    wx.navigateTo({
      url: '../customerService/index',
    });
  },
  mergeDoctorData: (data) => {
    return data.reduce((origin, item) => {
      let filterData = doctors.filter(doctor => item.id == doctor.id)[0] || {};
      let listData = list.filter(l => l.id == item.id)[0] || {};
      origin.push({
        ...item,
        photo: config.imgPath + item.photo,
        ...filterData,
        ...listData,
      })
      return origin;
    }, []).sort((a, b) => {
      return a.sort - b.sort;
    });
  },
  onLoad: function () {
    let url = config.api + '/doctor/doctorlist?num=999';
    wx.showLoading({
      title: '加载中...',
    });
    wx.request({
      url,
      success: (res) => {
        this.setData({
          doctorList: this.mergeDoctorData(util.getFromObject(res, 'data.data', [])),
          loading: false,
        });
        wx.hideLoading();
        console.log(this.mergeDoctorData(util.getFromObject(res, 'data.data', [])))
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
