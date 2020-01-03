const WXAPI = require('../../utils/apifm-ttapi')
let goodsDetail;
const clientWidth = tt.getSystemInfoSync().screenWidth;
var ctx;

function px(number) {
  return number * clientWidth / 750;
}

function init(page) {
  page._createPoster = this._createPoster;
  page._drawQrcode = this._drawQrcode;
  page._saveToMobile = this._saveToMobile;
}

function _createPoster(e) {
  wx.showLoading({
    title: '正在生成海报',
  });
  ctx = tt.createCanvasContext('firstCanvas');
  ctx.setFillStyle('#ffffff');
  ctx.fillRect(0, 0, px(600), px(1000));
  this._drawQrcode();
}
async function _drawQrcode() {
  const _this = this
  const ttaQrcodeParams = {
    path: 'pages%2fgoods-details%2findex%3fid%3d'+ _this.data.goodsDetail.basicInfo.id +'%26inviter_id%3d' + wx.getStorageSync('uid'),
  }
  const qrcodeRes = await WXAPI.ttaQrcode({
    content: JSON.stringify(ttaQrcodeParams),
    expireHours: 1
  })
  if (qrcodeRes.code != 0) {
    wx.showModal({
      title: '错误',
      content: '无法获取小程序码',
      showCancel: false,
    })
    return
  }

  let x = 0,
    y = 0;
  wx.getImageInfo({
    src: _this.data.goodsDetail.basicInfo.pic,
    success(res) {
      ctx.drawImage(res.path, 0, 0, res.width, res.height, x, y, px(600), px(600))
      y += px(600)

      // x = px(300);
      // y = y + 20;
      // ctx.setFontSize(14)
      // ctx.setFillStyle('#333')
      // ctx.setTextAlign('center')
      // let name = _this.data.goodsDetail.basicInfo.name
      // ctx.fillText(name, x, y)

      // x = px(300);
      // y = y + 30;
      // ctx.setFontSize(12)
      // ctx.setFillStyle('#ccc')
      // ctx.setTextAlign('center')
      // name = wx.getStorageSync('mallName')
      // ctx.fillText(name, x, y)
      y = y - 20

      // 写入二维码
      wx.getImageInfo({
        src: qrcodeRes.data,
        success(qrRes) {
          x = px(150)
          y = y + 30
          ctx.drawImage(qrRes.path, 0, 0, qrRes.width, qrRes.height, x, y, px(300), px(300))
          x = px(300);
          y = y + px(300) + 20;
          ctx.setFontSize(12)
          ctx.setFillStyle('#aaaaaa')
          ctx.setTextAlign('center')
          ctx.fillText('长按识别小程序码查看详情', x, y)

          ctx.draw()
          wx.hideLoading();
          _this.setData({
            posterShow: true
          })
        }
      })
    }
  })
}
function _saveToMobile() {
  const _this = this
  wx.canvasToTempFilePath({
    canvasId: 'firstCanvas',
    success: function (res) {
      let tempFilePath = res.tempFilePath
      wx.saveImageToPhotosAlbum({
        filePath: tempFilePath,
        success: (res) => {
          wx.showModal({
            content: '图片已保存到手机相册',
            showCancel: false,
            confirmText: '知道了',
            confirmColor: '#333'
          })
        },
        complete: () => {
          _this.setData({
            posterShow: false
          })
        },
        fail: (res) => {
          wx.showToast({
            title: res.errMsg,
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  })
}

module.exports = {
  init: init,
  _createPoster: _createPoster,
  _drawQrcode: _drawQrcode,
  _saveToMobile: _saveToMobile
}
