const WXAPI = require('apifm-ttapi')

/**
 * type: order 支付订单 recharge 充值 paybill 优惠买单
 * data: 扩展数据对象，用于保存参数
 */
function wxpay(type, money, orderId, redirectUrl, data) {
  const postData = {
    token: wx.getStorageSync('token'),
    money: money,
    remark: "在线充值",
  }
  if (type === 'order') {
    postData.remark = "支付订单 ：" + orderId;
    postData.nextAction = {
      type: 0,
      id: orderId
    };
  }
  if (type === 'paybill') {
    postData.remark = "优惠买单 ：" + data.money;
    postData.nextAction = {
      type: 4,
      uid: wx.getStorageSync('uid'),
      money: data.money
    };
  }
  postData.payName = postData.remark;
  if (postData.nextAction) {
    postData.nextAction = JSON.stringify(postData.nextAction);  
  }
  WXAPI.ttpay(postData).then(function (res) {
    if (res.code == 0) {
      // 发起支付
      tt.pay({
        orderInfo: res.data,
        service: 1,
        getOrderStatus(res) {
          let { out_order_no } = res;
          return new Promise(function(resolve, reject) {
            
          });
        },
        fail: function (err) {
          wx.showModal({
            title: '支付失败',
            content: JSON.stringify(err),
            showCancel: false
          })
        },
        success: function (res) {
          console.log(res)
          // 提示支付成功
          if (res.code == 0) {
            wx.showToast({
              title: '支付成功',
              icon: 'success'
            })
            wx.redirectTo({
              url: redirectUrl
            });
          } else {
            wx.showToast({
              title: '取消支付',
              icon: 'none'
            })
          }
        }
      })
    } else {
      wx.showModal({
        title: '出错了',
        content: JSON.stringify(res),
        showCancel: false
      })
    }
  })
}

module.exports = {
  wxpay: wxpay
}
