//index.js
//获取应用实例
const app = getApp();
import config from '../../config.js';
import doctors from '../doctors.js';
const util = require('../../utils/util.js');

Page({
  data: {
    process: [
      {
        image: '../../assets/about/1.jpg',
        content: '术前检查（影像+面型照+口内模型）'
      },
      {
        image: '../../assets/about/2.jpg',
        content: '确定治疗设计'
      },
      {
        image: '../../assets/about/3.jpg',
        content: '口内卫生状况全面评估'
      },
      {
        image: '../../assets/about/4.jpg',
        content: '术前正畸治疗'
      },
      {
        image: '../../assets/about/5.jpg',
        content: '完成术前正畸治疗'
      },
      {
        image: '../../assets/about/6.jpg',
        content: '再次术前分析'
      },
      {
        image: '../../assets/about/7.jpg',
        content: '预约手术'
      },
      {
        image: '../../assets/about/8.jpg',
        content: '手术和术后恢复'
      },
      {
        image: '../../assets/about/9.jpg',
        content: '术后正畸'
      },
      {
        image: '../../assets/about/10.jpg',
        content: '正畸结束戴保持器'
      },
      {
        image: '../../assets/about/11.jpg',
        content: '定期口腔检查及其他面部精细调整'
      },
    ]
  },
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
