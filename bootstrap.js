// 获取框架
const WebFramework = require('@midwayjs/web').Framework;
// 初始化 web 框架并传入启动参数
const web = new WebFramework().configure({
  port: 7001,
});

const { Bootstrap } = require('@midwayjs/bootstrap');
Bootstrap.load(web).run();
