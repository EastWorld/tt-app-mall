const WXAPI = require('apifm-ttapi.js')

// 检测登录状态，返回 true / false
async function checkHasLogined() {
  const token = wx.getStorageSync('token')
  if (!token) {
    return false
  }
  wx.checkSession({
    fail() {
      return false
    }
  })
  const checkTokenRes = await WXAPI.checkToken(token)
  if (checkTokenRes.code != 0) {
    wx.removeStorageSync('token')
    return false
  }
  return true
}

async function login(page){
  const _this = this
  wx.login({
    success: function (res) {
      WXAPI.login_tt(res.code).then(function (res) {
        if (res.code == 10000) {
          // 去注册
          //_this.register(page)
          return;
        }
        if (res.code != 0) {
          // 登录错误
          wx.showModal({
            title: '无法登录',
            content: res.msg,
            showCancel: false
          })
          return;
        }
        wx.setStorageSync('token', res.data.token)
        wx.setStorageSync('uid', res.data.uid)
        if ( page ) {
          page.onShow()
        }
      })
    },
    fail(res) {
      console.log('登录失败：', res);
    }
  })
}

async function register(page) {
  let _this = this;  
  tt.login({
    success: function (res) {
      let code = res.code; // 微信登录接口返回的 code 参数，下面注册接口需要用到
      tt.getUserInfo({
        success: function (res) {
          console.log(res)
          let referrer = '' // 推荐人
          let referrer_storge = wx.getStorageSync('referrer');
          if (referrer_storge) {
            referrer = referrer_storge;
          }
          // 下面开始调用注册接口
          WXAPI.register_tt({
            code: code,
            avatarUrl: res.userInfo.avatarUrl,
            nickName: res.userInfo.nickName,
            province: res.userInfo.province,
            city: res.userInfo.city,
            referrer: referrer
          }).then(function (res) {
            _this.login(page);
          })
        },
        fail(res) {
          tt.authorize({
            scope: "scope.userInfo"
          })
        }
      })
    }
  })
}

function loginOut(){
  wx.removeStorageSync('token')
  wx.removeStorageSync('uid')
}

module.exports = {
  checkHasLogined: checkHasLogined,
  login: login,
  register: register,
  loginOut: loginOut
}