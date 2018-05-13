//index.js
//获取应用实例
const app = getApp();
import config from '../../config.js';
import doctors from '../doctors.js';
const util = require('../../utils/util.js');

Page({
  bannerLoad: function (e) {
    var imageSize = util.imageUtil(e)
    this.setData({
      bannerWidth: imageSize.imageWidth,
      bannerHeight: imageSize.imageHeight
    })
  },
  diffLoad: function (e) {
    var imageSize = util.imageUtil(e)
    this.setData({
      diffWidth: imageSize.imageWidth,
      diffHeight: imageSize.imageHeight
    })
  },
  questionLoad: function (e) {
    var imageSize = util.imageUtil(e)
    this.setData({
      questionWidth: imageSize.imageWidth,
      questionHeight: imageSize.imageHeight
    })
  },
})
