// 路由入口文件
import combineRouters from 'koa-combine-routers'
// 用webpack的context可以一次性导入所有路由js文件
if (typeof require.context === 'undefined') {
  const fs = require('fs');
  const path = require('path');

  require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
    const files = {};

    function readDirectory(directory) {
      fs.readdirSync(directory).forEach((file) => {
        const fullPath = path.resolve(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);

          return;
        }

        if (!regularExpression.test(fullPath)) return;

        files[fullPath] = true;
      });
    }

    readDirectory(path.resolve(__dirname, base));

    function Module(file) {
      return require(file);
    }

    Module.keys = () => Object.keys(files);

    return Module;
  };
}



const routerFiles = require.context('./models', true, /\.js$/)
// 然后koa-combine-routers需要object[]类型的数据，所以遍历处理出所需要的数据格式
const resultRouter = []
routerFiles.keys().forEach(path => {
  const value = routerFiles(path)
  resultRouter.push(value.default)
})
const router = combineRouters(
  resultRouter
)
export default router
