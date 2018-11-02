const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage;

function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl = envPublicUrl ||
    (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}


module.exports = {
  // public
  publicPath: '/',

  // server
  // 源码
  serverSrc: resolveApp('src/'),
  // 编译入口文件
  serverEntry: resolveApp('src/nodeui/index'),
  // 编译出口文件
  serverOutput: resolveApp('build'),

  // cilent
  // 源码
  cilentSrc: resolveApp('src/webui/'),
  // 编译入口文件
  cilentEntry: resolveApp('src/webui/index'),
  // 编译出口文件
  cilentOutput: resolveApp('build/static'),
  
};
