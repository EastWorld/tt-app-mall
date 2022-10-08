# 今日头条/抖音小程序商城

今日头条/抖音小程序商城，长期维护版本，欢迎大家踊跃提交贡献代码；

使用说明和常见问题，可参阅下面的说明，如还有疑问，可访问工厂官网 [https://www.it120.cc/](https://www.it120.cc/) 寻求帮助！

# 微信小程序版本

本项目的微信小程序版本，请移步至下面的地址：

[https://github.com/EastWorld/wechat-app-mall](https://github.com/EastWorld/wechat-app-mall)

## 扫码体验

请使用今日头条扫码访问小程序（抖音内测名额已满，等开放后在公布抖音码）

<img src="https://dcdn.it120.cc/2020/02/17/bc2a3aed-9a9a-48cf-b61d-90baa79ca9c1.jpeg" width="200px">

## 其他优秀开源模板推荐
- [天使童装](https://github.com/EastWorld/wechat-app-mall) [码云镜像](https://gitee.com/javazj/wechat-app-mall)
- [天使童装（uni-app版本）](https://github.com/gooking/uni-app-mall) [码云镜像](https://gitee.com/javazj/uni-app-mall)
- [舔果果小铺（升级版）](https://github.com/gooking/TianguoguoXiaopu)
- [面馆风格小程序](https://gitee.com/javazj/noodle_shop_procedures)
- [AI名片](https://github.com/gooking/visitingCard)
- [仿海底捞订座排队 (uni-app)](https://github.com/gooking/dingzuopaidui) [码云镜像](https://gitee.com/javazj/dingzuopaidui)

## 联系作者

<img src="https://dcdn.it120.cc/2021/06/23/3cf5a664-90d8-484f-9652-ef4ca46a926d.jpeg" width="200px">

## 接口 & 后台声明

本项目为小程序商城纯前端项目，由于人力和精力所限，本项目并未有开发配套的后台系统，而是直接使用了 [api 工厂](https://www.it120.cc/) 提供的免费接口和后台，可以完全满足本项目的所有功能需求。

- [接口 SDK](https://github.com/gooking/apifm-wxapi)

- [免费后台](https://admin.it120.cc)

- [WeUI](https://github.com/Tencent/weui.ttss/)

底部ICON图标使用：
https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=13163


## 初始化测试数据

登录后台，左侧菜单 “工厂设置” --> “数据克隆” --> “将别人的数据克隆给我”

对方商户ID填写  951

点击 “立即克隆” ，然后退出后台重新登录

你将立即享有初始化测试数据，方便你进行测试

## 编译说明

开发工具中，不要打钩 ES6转ES5，本项目需要用到 ES6 的支持，所以如果你打钩了，请把钩去掉即可。

## 使用说明

1、申请后台账号/获取专属域名

2、开通商城模块

<img src="https://cdn.it120.cc/apifactory/2018/11/14/b61fe6ffb2460f7e4554758b394814f5.png">

3、修改根目录下 config.js 文件

```javascript
module.exports = {
  version: "7.4.0",
  note: '内页增加快速浮动导航、我的页面UI优化', // 版本说明，无需修改
  subDomain: "tz", // 根据教程 https://www.yuque.com/apifm/doc/qr6l4m 查看你自己的 subDomain
  shareProfile: '百款精品商品，总有一款适合您', // 首页转发的时候话术
  goodsDetailSkuShowType: 0, // 0 为点击立即购买按钮后出现规格尺寸、数量的选择； 1为直接在商品详情页面显示规格尺寸、数量的选择，而不弹框
}
```

4、[设置小程序合法服务器域名](https://www.yuque.com/apifm/doc/tvpou9)

5、重启您的小程序开发工具，完成

6、如何在后台管理小程序启动图和首页头部的轮播 banner 图片

```
这两个功能都是使用后台 “系统设置” --> “banner” 管理功能来实现的；
后台发布banner的时候，自定义类型请分别填写  app  和  index
小程序会自动读取类型为 app 的banner图片作为启动展示图片；
小程序会自动读取类型为 index 的banner图片作为首页的轮播图；
```

7、订阅消息(以前的模板消息)如何使用？请查阅 “api工厂” 的教程：

[https://www.yuque.com/apifm/doc/sw1dg9](https://www.yuque.com/apifm/doc/sw1dg9)

## 系统参数设置

*登录后台，左侧菜单“系统设置” --> “系统参数” 菜单；如果你找不到该菜单，那是因为你还没启用 “系统参数设置” 的模块，左侧菜单“系统设置” --> “模块管理”，启用 “系统参数设置” 模块，然后F5刷新网页即可*

- tt_vet_open （开关类型）
  
  **头条/抖音审核的时候，如果你的小程序有充值功能会导致审核不通过，所以默认情况下，小程序将隐藏充值提现功能，通过该参数可开启充值提现的显示**

- ROLE_FOR_SHOP （开关类型）
  
  **如果你有多店铺功能，改功能将开启店铺管理员功能，届时，每个店铺管理员将只能管理自己店铺下的商品和订单，而无法查看并管理其他店铺的订单**

- ALLOW_SELF_COLLECTION （开关类型）
  
  **是否开启到店自提功能（快递和到店自提客户自己可以选择）**

- WITHDRAW_FEE_PERCENT （文本参数）
  
  **提现手续费比例，填1为 1%**

- free_shipping_for_purchases （文本参数）
  
  **下单金额满多少后实现包邮**

- mallName （文本参数）
  
  **小程序名称（商城名称）**

- REGISTER_OPEN_SELLER （开关类型）
  
  **新注册用户是否自动成为分销商，如果不开启该参数，分销商需要自己申请，你进行审核**
  
  [《api工厂三级分销插件使用教程》](https://www.yuque.com/apifm/doc/pgfwvu)

## 常见问题

- 如何修改小程序商城的标题？

  请查看上面的系统设置中的 **mallName**

- “无法登录” / Token 无效 ？

  1. config.js 里面的 subDomain 改成你自己的，保存；
  2. 登录你的小程序后台（MP 那个地址），Request 域名处增加 api.it120.cc
  3. 确保小程序后台（MP 那个地址） 的 appid，工厂后台填写的 appid ，开发工具右上角 “项目详情” 打开后显示的 appid ，这 3 个 appid 是一模一样的；
  4. 开发工具上点击 “清除缓存” —> “编译”

- 登录后台发布您自己的商品

- [如何给 Banner 增加链接，点击打开某个商品？](https://www.yuque.com/apifm/doc/wv5p5l)

- 工厂后台设置 appid、secret、微信支付商户号和秘钥时候的 token 怎么填？

  **不要填！**

  **不要填！**

  **不要填！**

  **重要的事情说三遍，这个小程序用不到，是给服务号使用的，所以大家空着不要填**

- 微信支付时候，提示 50000 错误，不能获取到预支付 id

  > 这个错误是无法获取到微信支付的预支付信息

  - 可能是你没有在后台配置您的微信支付商户号和秘钥，或者配置错误
  - 可能是你配置的微信支付不是当前小程序申请的（微信支付目前无法跨小程序调用）
  - 确保微信开发工具上面登录的 APPID 和你在后台配置的 APPID 是同一个

- 能否帮我免费添加功能？

  可以！


  1. 点击页面顶部的 Star ，关注后，项目有最新动态 github 会提醒您，不错过重要更新；
  2. 点击页面顶部的 Fork， 将您需要增加的功能完成 小程序 端界面的调整，然后在 github 上请求将您的代码合并到 EastWorld；
  3. 您的代码合并请求审核通过后，我们将会为您完善配套的后台功能；
  4. 开源项目离不开您的支持和代码共享，我们一起把 EastWorld 项目长期维护下去；

- 下单的时候没有地方填写收货地址？

  1. 添加一个“物流模板”，只有需要快递的商品才会提示用户填写收货地址
  2. 发布商品的时候，选择刚才添加的“物流模板”
  3. 重新下单，将会需要用户输入收货地址

- 后台设置 appid 和 secret 的时候提示不正确？

  1. 请确认您填写的 appid 和 secret 是否正确
  2. 输入的时候确保没有空格（复制的时候可能会多复制了空格）
  3. 在微信后台设置服务器 IP 地址白名单（106.14.43.122）

- 如何使用退款功能？

  1. 后台支持针对订单指定退款多少金额；
  2. 可选择退款至用户可用余额或者按照用户支付原路退还第三方或者银行卡；
  3. 如果选用原路退还，需要在商户号和秘钥设置的地方上传您的微信支付证书文件（PK12 格式文件）

- 如何设置满多少包邮？

  1. 后台系统设置 -- 系统参数，增加系统参数；
  2. 参数名 free_shipping_for_purchases （注意不要有空格）
  3. 参数值填写您希望的买满金额即可

- 如何修改或者关闭订单超过 30 分钟未付款自动关闭？

  1. 创建订单接口增加 expireMinutes 参数；
  2. 代表多少分钟未支付自动关闭本订单，传 0 不自动关闭订单；

- 如何删除小程序源码中的广告位？

  1. 在小程序开发工具中全局搜索关键词: <ad
  2. 找到以后，将这一行广告位的代码删除即可

- android看得到图片，ios手机看不到图片
  
  这是wxparse解析器的问题 很多人都中枪~

  全局搜索并注释掉 console.dir 就好了

- [更多问题？](https://www.yuque.com/apifm/doc)
  
## 如何升级到最新版

- 小程序程序的修改和您后台的数据是独立的，所以不用担心您会丢失数据
- 先把你开发工具下的现有版本程序备份
- 下载最新版的程序，直接覆盖您本地的程序
- 用开发工具修改域名 mall 为你自己的域名
- 开发工具里面上传代码提交微信审核
- 审核通过后，小程序后台去发布新版本即可
- 用户无需重新扫码，关闭小程序重新打开就是新版本了
