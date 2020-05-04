// 判断获取全局 & 用户设置
//学 axios的属性mergin （默认值与用户配置相匹配）
let defaultsConfig = {
  url: 'https://cnzz.qingting.fm/logger',  // 日志
  headers: {

  },
  data: {  // 日志数据
    label: "new_log",
    _deviceId: "pctest", // 此处允许注入其他值
    _id: null, 
    page_id: null 
  }
};

export default defaultsConfig;