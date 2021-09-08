## 存储方式

`localStorage.setItem(key,value)`

## 文件命名规则

文件更新是约定原则，所以需要严格遵守文件命名规则，否则本地资源无法更新

生产环境：`[name].[md5:8].[js/css]`

开发环境：`[name].[js/css]?[md5:8]`

* [name]是`文件名`
* [md5:8]是`8`位字符的`md5戳`（根据内容生成`16`或`32`长度的`md5字符`,截取前面`8位`）
* [js/css]是`js`或者`css`后缀
* 两种命名规则都可以更新使用，一种是方便cdn部署，一种是本地开发


例如
>`app.2e991ef7.js` `app.481d88f5.css`

>`app.js?2e991ef7` `app.css?481d88f5`


## 存储规则

前缀是框架自带的，默认为'LCache-'

`key`为`前缀(LCache-)`+`文件路径名(js/app.2e991ef7.js)`，例如 `LCache-js/app.2e991ef7.js`,

`value`为文件内容，例如 `console.log('hello LCache.js!')`

```js
localStorage.setItem('LCache-js/app.2e991ef7.js',"console.log('hello LCache.js!')")
```

## 单文件更新

框架会根据`文件路径`，首先以`存储规则`判断本地是否存在该文件,做如下操作

1、本地不存在该文件

* 1、ajax方式下载文件内容
* 2、按照存储规则，将文件存储到本地
* 3、从localStorage获取文件内容，执行代码逻辑


2、 本地存在该文件
* 1、从`localStorage`获取文件内容，执行代码逻辑

