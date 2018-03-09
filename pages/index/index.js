//index.js
//获取应用实例
const app = getApp();
import config from '../../config.js';
import doctors from '../doctors.js';
const util = require('../../utils/util.js');

Page({
  data: {
    loading : true,
    doctorList : [],
    imgPath: config.imgPath,
    //canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  handleToTeam : () => {
    wx.navigateTo({
      url: '../team/index'
    })
  },
  handleCustomerService : () => {
    console.log('go to customer service');
    wx.navigateTo({
      url: '../customerService/index',
    });
  },
  mergeDoctorData : (data) => {
    return data.reduce((origin,item) => {
      let filterData = doctors.filter(doctor => item.id == doctor.id)[0];
      if(filterData) origin.push({
        ...item,
        photo: config.imgPath + item.photo,
        ...filterData,
      })
      return origin;
    },[]);
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
          doctorList: this.mergeDoctorData(util.getFromObject(res,'data.data',[])),
          loading : false,
        });
        wx.hideLoading();
        console.log(this.mergeDoctorData(util.getFromObject(res, 'data.data', [])))
      }
    })
    //if (app.globalData.userInfo) {
    //  this.setData({
    //    userInfo: app.globalData.userInfo,
    //    hasUserInfo: true
    //  })
    //} else if (this.data.canIUse){
    //  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //  // 所以此处加入 callback 以防止这种情况
    //  app.userInfoReadyCallback = res => {
    //    this.setData({
    //      userInfo: res.userInfo,
    //      hasUserInfo: true
    //    })
    //  }
    //} else {
    //  // 在没有 open-type=getUserInfo 版本的兼容处理
    //  wx.getUserInfo({
    //    success: res => {
    //      app.globalData.userInfo = res.userInfo
    //      this.setData({
    //        userInfo: res.userInfo,
    //        hasUserInfo: true
    //      })
    //    }
    //  })
    //}
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
