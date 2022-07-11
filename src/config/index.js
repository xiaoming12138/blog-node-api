export default {
  // 数据库连接地址
  MONGO_URL: 'mongodb://xiaoming:Liming123456@localhost:27017/community?authSource=admin',
  // redis连接地址
  REDIS_URL: 'redis://:123456@localhost:6379',
  // jwt秘钥
  JWT_SECRET: 'QWEFJIOJCV189CIOEWF1FSDFJIOWFV456RFGJIOQWD54VCVBJIUESFJIO',
  // 文件上传路径地址
  UPLOAD_PATH: 'public',
  // 前端访问地址
  FRONT_URL: process.env.NODE_ENV === 'production' ? 'http://116.205.136.108:11006/#/reset' : 'http://116.205.136.108:8080/#/reset',
  // 邮件服务账号密码配置
  NODE_MAIL_USER: '13716103242@163.com',
  NODE_MAIL_PASS: 'L15939606467',
  // websocket端口
  WS_PORT: 3001
}
