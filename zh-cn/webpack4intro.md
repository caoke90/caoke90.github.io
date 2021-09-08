## 单页面history 模式（非hash模式）

`dev环境`:生产一个`test.html`文件，通过mock将所有`xx.html`映射到该页面，减少webpack的编译过程

`prd环境`:生产n个`xx.html`文件，每个文件对应一个页面地址，除了标题不一样，其他内容一致

`md5.js`:配置文件，为了避免被编译，`dev环境`为`md5.html`，`prd环境`为`md5.js`

## 本地mock

在`webpack.dev.js`插入`Express`中间件实现，具体mock需求根据业务来，`api`参考`Express`官网

mock目录包含所有json文件
```js
...
module.exports = merge(common, {
  output:{
    filename: 'js/[name].js?[hash:8]',
    chunkFilename: 'js/[name].js?[hash:8]',
  },
  mode:'development',
  devServer: {
    useLocalIp: true,
    host: '0.0.0.0',
    hot:true,
    before:require('../mock'),
    contentBase: './static'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css?[contenthash:8]',
      chunkFilename: 'css/[name].css?[contenthash:8]'
    }),
  ],
});
```

## 打包命令
本demo只存在部分命令，需要的可以自己添加
* `npm run dev`:开发环境打包
* `npm run build`:buildEnv=test表示开启vconsole调试工具
* `npm run buildPRD`:生产环境打包，之后执行`postbuildPRD`
* `npm run postbuildPRD`:增量包打包，需要有历史版本，每日打包都会有一个历史版本,具体查看[增量包打包](#增量包打包)
* `npm run isOnline`:对比线上内容，检测代码是否完全上线
* `npm run lint`:js格式检测
* `npm run fix:eslint`:修复js格式
* `npm run fix:style`:修复css格式

```package.json
"scripts": {
    "start": "npm run dev",
    "dev": "cross-env NODE_ENV='development' webpack-dev-server --config build/webpack.dev.js",
    "build": "cross-env NODE_ENV='production' buildEnv=test webpack --config build/webpack.prod.js",
    "buildPRD": "cross-env NODE_ENV='production' webpack --config build/webpack.prod.js",
    "postbuildPRD": "node buildChunk/buildChunk.js",
    "isOnline": "node build/isOnline.js",
    "lint": "eslint --ext .js.vue src/**/*.{js,vue}",
    "fix:eslint": "eslint --fix --ext .ts.vue src/**/*.{js,vue}",
    "fix:style": "stylelint --fix src/**/*.{less,vue,css}"
  }
```

## 入口文件md5.js
判断资源是否有更新，起到更新资源
* 模板来源于`templates/md5.js`
* 引入了`ejs-compiled-loader-webpack4`处理模块

## 系统配置文件`app.config.js`
路径：`config/app.config.js`
```
module.exports = {
  NODE_ENV: NODE_ENV,
  curVersion:dayjs().format('YYMMDD'),
  path: NODE_ENV==='development'?'dist':'dist/front',//打包发布目录
  publicPath:NODE_ENV==='development'?'/':'/static/wlhfqk/front/',//资源根目录
  drop_console: process.env.buildEnv==='test'?false:true,//打开vconsole
  UrlNode:UrlNode,
};

```
* 用于nodejs打包，获取环境变量`process.env.xxx`，比如
```js
const appConfig=require('../config/app.config');
const UrlNode=appConfig.NODE_ENV==='development'?{
  test:appConfig.UrlNode.test,
  md5:{
    template:'md5.js',
  }
}:appConfig.UrlNode;
```
* 用于`Config.js`,输出环境变量`process.env.xxx`，比如
```
const Config={
  UrlNode: process.env.UrlNode,
  query: query,
  firstData: {},
  firstName: '',//第一次进入的页面
  prePageName: '',//上一个页面
  pageName: '',//当前进入页面的name
}
export default Config;
```

## 应用配置文件`Config.js`
路径：`src/common/Config.js`
* `Config.UrlNode`:记录所有的页面配置
* `Config.query`: 记录首次进入的`url`中`get参数`
* `Config.firstData`: 一个公共的用户状态接口，可以在所有页面用到，返回用户id、登录状态、vip状态等，只请求一次，页面`spa跳转`不再请求
* `Config.firstName`: 记录首次进入的`url`的名称
* `Config.pageName`: 记录当前`spa跳转`的`url`的名称
* `Config.prePageName`: 记录上次`spa跳转`的`url`的名称
```
const Config={
  UrlNode: process.env.UrlNode,
  query: query,
  firstData: {},
  firstName: '',//第一次进入的页面
  prePageName: '',//上一个页面
  pageName: '',//当前进入页面的name
}
export default Config;
```

## 配置execFromNode-loader
`execFromNode`是一个在编译前让前端js能执行nodejs的框架

* 安装`npm i execFromNode`
* 在`webpack`引入`execfromnode-loader`的配置文件`execFromNodeOptions.js`
```
{
        test: /\.js$/,
        exclude:resolve('src/lib'),
        use:[
          {
            loader: "babel-loader",
          },
          {
            loader: 'execfromnode-loader',
            options:require('../config/execFromNodeOptions')
          },

        ]
      }
```
* 使用demo，你可以在配置文件`config/execFromNodeOptions.js`中自定义方法
```
<!--execFromNode{return getText('axios.min.js');}-->
```

配置文件:`config/execFromNodeOptions.js`
```js
const fs=require('fs')
const path=require('path')
const glob=require('glob')
const qs=require('qs')
//获取views目录的页面配置
function getUrlNode(){
  const vuedirPath=glob.sync(__dirname+'/../src/views/')[0]
  const arr1 = glob.sync(vuedirPath+'**/*.vue')
  const UrlNode={}
  arr1.forEach(function (file) {
    const urlName=path.basename(file,'.vue');
    const temp=fs.readFileSync(file).toString();
    const obj={}
    if(/\/\/页面配置 *(.+) */.test(temp)){
      const nobj=qs.parse(RegExp.$1)
      Object.assign(obj,nobj)
    }
    UrlNode[urlName]=obj
  })
  return UrlNode;
}
//__dirname表示子模块的目录
module.exports={
  path,
  fs,
  getUrlNode,
  getText:function(url){
    return fs.readFileSync(path.join(this.__dirname,url)).toString()
  },
}
```

## 公共js和公共less

`src/common/vendor.js`：做一些公共处理，比如兼容es6，以及其他问题

`src/common/vendor.less`：做一些公共处理，比如vant组件的样式修改，以及iphonex兼容

```js
//fastclick
const str = navigator.userAgent.toLowerCase();
let ver = str.match(/ os (.*?) like mac os/);
ver = ver ? ver[1].replace(/_/g,".") : '';
if(!ver || parseInt(ver) < 11){
  FastClick.attach(document.body);
}
...
/**
 * iOS键盘收起页面未下移bug
 */
(/iphone|ipod|ipad/i.test(navigator.appVersion))&&document.addEventListener('blur', (e) => {
  // 这里加了个类型判断，因为a等元素也会触发blur事件
  ['input', 'textarea'].includes(e.target.localName) && document.body.scrollIntoView(false)
}, true)
```

## 更换默认加载方式
`webpack项目`会在`manifest.js`中加载`js、css`文件，需要用`LCache.loadAll`替换默认加载过程，换成离线应用方案，需要用到一个`插件ChangeManifest.js`

`插件ChangeManifest.js`替换过程如下
* 1、替换`webpack`默认加载方式(用正则替换内容)
* 2、更新资源的`md5戳`
* 3、将`md5.html`名称换成`md5.js`（因`webpack`会自动编译`js文件`，在开发模式不能用`js`后缀）

```js
//uglify-js 依赖3.6.0
const fs=require('fs')
const path=require('path')
const uglifyPath=path.join(__dirname,'../node_modules/uglifyjs-webpack-plugin/node_modules/uglify-js')
try {
  if(fs.existsSync(uglifyPath)){
    if(fs.lstatSync(uglifyPath).isDirectory()){
      fs.rmdirSync(uglifyPath)
    }else{
      fs.unlinkSync(uglifyPath)
    }
    console.log('文件夹删除成功',uglifyPath)
  }
}catch (e) {
  console.log('文件夹删除失败')
}
function ChangeManifest(options) {}
const crypto = require('crypto');

var cryptoPassFunc = function(password) {
  const md5 = crypto.createHash('md5');
  return md5.update(password).digest('hex');
};
ChangeManifest.prototype.apply = function(compiler) {

  compiler.hooks.emit.tap('MyPlugin',function (compilation,params) {

    const reg1=/var \w+,(\w+)=document.createElement\("script"\);\w+\.charset="utf-8",\w+\.timeout=120,\w+\.nc&&\w+\.setAttribute\("nonce",\w+\.nc\),\w+\.src=/;
    const reg2=/var \w+=new Error;.+?\w+\.onerror=\w+.onload=\w+,document\.head\.appendChild\(\w+\)/;
    const reg3=/var \w+=document\.createElement\("link"\);\w+\.rel="stylesheet",\w+\.type="text\/css",\w+\.onload=(\w+),\w+\.onerror=function\(\w\)\{.+\},\w+.href=(\w+),document.getElementsByTagName\("head"\)\[0\]\.appendChild\(\w+\)/;
    const arr=Object.keys(compilation.assets).filter(function (filename) {
      if(/\.js$/.test(filename)){
        const info=compilation.assets[filename].source()
        if(reg1.test(info)&&reg2.test(info)&&reg3.test(info)){
          return true
        }
      }
      return false
    })
    if(arr.length === 0) {
      throw 'changeMainfest打包异常';
    }
    arr.forEach(function (filename) {
      let text=compilation.assets[filename].source();
      //修改jschunk
      text=text.replace(reg1,'var $1=')
      const o=RegExp.$1;
      text=text.replace(reg2,'LCache.loadAll('+o+')')
      //修改css
      text=text.replace(reg3,'LCache.loadAll($2,$1)')

      const nfilename= filename.replace(/\w{8}\.js/,cryptoPassFunc(text).substr(0,8)+'.js')
      if(nfilename!==filename){
        compilation.assets[nfilename]={
          source:function () {
            return text
          },
          size:function () {
            return text.length;
          }
        }
        delete compilation.assets[filename];

        for(let key in compilation.assets){
          if(/\.(js|json|html|css)$/.test(key)){
            const text2=compilation.assets[key].source().toString()
            const text3=text2.replace(filename,nfilename)
            if(text2!==text3){
              compilation.assets[key].source=function(){
                return text3
              }
            }
          }
        }
      }
    })

    compilation.assets['md5.js']=compilation.assets['md5.html'];
    delete compilation.assets['md5.html'];
  })
};

module.exports = ChangeManifest;

```
## `css、js`文件名约定

为了让`LCache.js`能更新`css、js`文件，对文件名做约定

* `dev`环境:`css、js`文件按约定，`?`后面是`8位md5字符`
```js
rules: [
      {
        test: /\.css/,
        include:resolve('src/lib'),
        use:[
          {
            loader: 'file-loader',
            options: {
              name: process.env.NODE_ENV === 'production' ? 'lib/[name].[hash:8].[ext]':'lib/[name].[ext]?[hash:8]',
            },
          },
          ...
      {
              test: /\.js$/,
              include:resolve('src/lib'),
              use:[
                {
                  loader: 'file-loader',
                  options: {
                    name: process.env.NODE_ENV === 'production' ? 'lib/[name].[hash:8].[ext]':'lib/[name].[ext]?[hash:8]',
                  },
                },
```

* `prd`环境:`css、js`文件按约定，中间是`8位md5字符`
```js
output: {
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].js',
    path: resolve(appConfig.path)
  },
  plugins: [
    new CleanWebpackPlugin(),//实例化，参数为目录
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    ...
```

## 图片路径约定
当运行`js、css文件`时，此时的根路径是为页面根路径，`css`中的相对路径丢失，所以需要对图片路径处理成`img/xx.xxxxxxxx.png`
* `?max_age=31449600`是cdn的缓存时间设置，你可以按需更换
```js
    {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,

        use:[{
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]?max_age=31449600',
            // publicPath:appConfig.publicPath
          }
        }
        ]
      }
```

## 第三方库lib目录

为避免`babel`重复编译，将第三方插件放入`src/lib`目录，对其中的`js插件`只做引入和`uglify`压缩操作

* 引入其他文件,`execFromNode`是一个在编译前让前端js能执行nodejs的框架
```js
<!--execFromNode{return getText('axios.min.js');}-->
```
* 引入和压缩配置
```js
 {
        test: /\.js$/,
        include:resolve('src/lib'),
        use:[
          {
            loader: 'file-loader',
            options: {
              name: process.env.NODE_ENV === 'production' ? 'lib/[name].[hash:8].[ext]':'lib/[name].[ext]?[hash:8]',
            },
          },
          {
            loader:'uglify-loader',
            options:{
              compress: {
                drop_debugger: true,
                drop_console: appConfig.drop_console===true?false:true,
              },
            }
          },
          {
            loader: 'execfromnode-loader',
            options:require('../config/execFromNodeOptions')
          },
        ]
      },
```

## 增量包打包

* `demo项目`带了历史目录`historyVersion`，你可以尝试下`npm run buildPRD`，完成后查看`dist/front/chunk`目录
* 历史版本最多存在10个以及60天内，如果你需要更多，可以修改`buildChunk/buildChunk.js`
* 输出的增量包存放在`dist/front/chunk`目录,例如`210830-210902.json`、`xxxxxx-210902.json`
* `210830-210902.json`：版本从`2021年08月30号`升级到`2021年09月02号`
* 用到的`diff`算法为`后缀数组算法`，已优化到最佳，可查看[diff算法](zh-cn/diff)

## 图片懒加载组件
在页面图片可见的时候加载图片，你也可以用其他替代`utils/img.vue`
```js
import mvimg from '../utils/img.vue';
Vue.component('mv-img', mvimg);
```
参考使用
```
<mv-img src="xxx.png"></mv-img>
```

## 全局dialog组件
路径：`utils/modal.vue`
```js
import mvmodal from '../utils/modal.vue';
Vue.component('mv-modal', mvmodal);//服务层
```
注册位置：组件显示的时候`dom`渲染在这。
* `spa跳转`页面不会消失，需要触发消失或者`beforeDestroyed`触发消失
* 全局组件只存在一个
* 比如`alert、conform`以及登录失败弹窗
* 按需注册，全局使用
```
<div ref="root" :class="[IS_IPHONE, $route.name, 'view', IS_ANDROID]">
    <mv-modal mkey="header" />
    <router-view :key="$route.fullPath" />
    <mv-modal mkey="footer" />
</div>
```

注册和使用,具体可以查看`views/demo1.vue`
```
<template>
    <div class="hello">
        <van-button @click="clickBtn" type="primary">点击全局组件alert</van-button>
    </div>
</template>

<script>
  //页面配置title=全局组件demo
  import Vue from 'vue';
  import { Button } from 'vant';
  import BModal from "BModal";

  Vue.use(Button);
  import alert from '../componets/alert';
  BModal.addModalComponent(alert,'footer')

  export default {
    name: 'HelloWorld',
    methods:{
      async clickBtn(){
        const back=await BModal.alert.show('我是全局组件alert')
        console.log('确认')
      }
    }
  }
</script>
```

## 页面dialog组件
在`page组件`中弄个`slot`插槽`<slot name="footer" />`实现，或者直接注册在页面
* 页面销毁时，组件也销毁
* 可以传入属性，或者用`this.$refs.xxx`方式获取实例

注册和使用,具体可以查看`views/demo1.vue`
```
<template>
    <div class="hello">
        <van-button @click="clickBtn" type="primary">点击全局组件alert</van-button>
        <mv-alert ref="alert"></mv-alert>
    </div>
</template>

<script>
  //页面配置title=页面组件demo
  import Vue from 'vue';
  import { Button } from 'vant';

  Vue.use(Button);
  import alert from '../componets/alert';

  export default {
    name: 'HelloWorld',
    components:{
      'mv-alert':alert
    },
    methods:{
      async clickBtn(){
        const back=await this.$refs.alert.show('我是全局组件alert')
        console.log('确认')
      }
    }
  }
</script>
```


