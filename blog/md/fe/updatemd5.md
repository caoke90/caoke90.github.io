
## 解决版本更新问题的4种方法（引入第三方组件）

> * 方法一：venus生成不带版本号的js、css文件
> * 方法二：venus生成带md5的js、css文件，以及资源目录文件webpack-assets.json
> * 方法三：后端对js、css资源302重定向
> * 方法四：npm包安装

被引入的第三方组件名叫venus、当前项目名叫zx-frontend, venus和zx-frontend关联性比较强

### 方法一：venus生成不带版本号的js、css文件。如下

```
http:/test.caoke.xyz/zx-frontend/venus.min.js
http:/test.caoke.xyz/zx-frontend/venus.min.css
```
zx-frontend项目在每次编译中对引入的资源加上时间戳，如下 build_md5 为每次编译的版本号

```
<link rel="stylesheet" href="http:/test.caoke.xyz/zx-frontend/venus.min.js?build_md5" />
<script src='http:/test.caoke.xyz/zx-frontend/venus.min.js?build_md5'></script>
```

缺点：

1、zx-frontend项目每次上线发布的时候，都会导致venus资源更新（不论有没有修改），费流量了

2、venus只能在线上存在一个版本，无法进行小流量的版本测试

优点：

工作量低，解决版本更新问题

### 方法二：venus生成带md5的js、css文件，以及资源目录文件webpack-assets.json。如下

```

http:/test.caoke.xyz/zx-frontend/venus.432a26efdcc87ec41b85.js
http:/test.caoke.xyz/zx-frontend/venus.7bff1f7883679f0ae375700f23902265.css
http:/test.caoke.xyz/zx-frontend/webpack-assets.json

```
zx-frontend项目在每次编译中

1、用axios模块get资源目录文件webpack-assets.json

2、解析json中venus的js、css文件url地址，赋值给全局静态常量${venus_md5_js}、${venus_md5_css}

3、对工程中的常量进行替换

优点：

1、前端解决版本更新问题
2、zx-frontend项目稳定性好，venus项目的更新不会导致zx-frontend的变化

缺点：

venus项目的更新不会导致zx-frontend的变化，需要zx-frontend项目编译更新

zx-frontend项目无法指定venus的版本号

### 方法三：后端读取webpack-assets.json对js、css资源302重定向。如下

```
http:/test.caoke.xyz/zx-frontend/venus.432a26efdcc87ec41b85.js
http:/test.caoke.xyz/zx-frontend/venus.7bff1f7883679f0ae375700f23902265.css
http:/test.caoke.xyz/zx-frontend/webpack-assets.json

```
后端配置js、css文件的url，当页面请求改url的时候，后端读取webpack-assets.json，返回相应带md5的js、css文件。

```
<link rel="stylesheet" href="http:/redirect.caoke.xyz/zx-frontend/venus.min.js" />
<script src='http:/redirect.caoke.xyz/zx-frontend/venus.min.js'></script>
```
优点：

1、解决版本更新问题，以正常习惯一样固定引入js、css文件

2、venus项目的更新会导致zx-frontend项目的变化

缺点：

后端解决版本更新问题,需要跨部门沟通。发生302跳转，需要服务器转发

zx-frontend项目无法指定venus的版本号，

### 方法四：npm包安装

前端生成npm包，publish到官方，之后zx-frontend项目安装相应的包

缺点：

对zx-frontend项目不适用，项目不支持require方式加载打包。…………

优点：

1、支持指定版本

2、venus项目可以控制强制更新(通过编译NODE_ENV过程执行cmd命令,强制更新)

