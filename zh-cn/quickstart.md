## 快速开始

下载 <a href="fast-demo.zip">fast-demo.zip</a>，解压后，目录下有几个文件

- `index.html` 入口文件
- `LCache.js` 本框架
- `app.5b60a288.js,app.5b60a288.css` 线上环境的资源
- `app.0c60a289.js','app.0c60a289.css` 预发布环境的资源(待上线)

浏览器直接打开 `index.html` 就能查下内容。

## 首页

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>单文件更新demo</title>
</head>
<body>
<div id="log"></div>
<button onclick="upload()">单文件更新</button>
</body>
<script src="LCache.js"></script>
<script>
  /*
  app.5b60a288.js == 文件名(app.js)+md5戳(5b60a288)
   */
  LCache.loadAll(['app.5b60a288.js','app.5b60a288.css'],function () {
    console.log('5b60a288 load')
  })
  function upload() {
    LCache.loadAll(['app.0c60a289.js','app.0c60a289.css'],function () {
      console.log('0c60a289 load')
    })
  }
</script>
</html>
```

## 更新原理

文件同名，md5戳不一样,就对文件做更新，例如

`app.5b60a288.js`是已发布到线上，用户访问后存储在本地
* 文件名是`app.js`,md5戳是`5b60a288`

`app.0c60a289.js`是预发布，准备今日上线
* 文件名是`app.js`,md5戳是`0c60a289`

当app.0c60a289.js发布上线后，用户访问index.html页面，页面内容中资源md5戳发生变化
```变化前
<script>
LCache.loadAll(['app.5b60a288.js','app.5b60a288.css'],function () {
    console.log('5b60a288 load')
  })
</script>
```

```变化后
<script>
LCache.loadAll(['app.0c60a289.js','app.0c60a289.css'],function () {
    console.log('5b60a288 load')
  })
</script>
```

此时，LCache框架对比用户本地存储的`app.5b60a288.js`和已上线的`app.0c60a289.js`，

发现文件同名，md5戳不一样，下载`app.0c60a289.js`后，

将`app.5b60a288.js`更新为`app.0c60a289.js`，代码内容同步更新执行

## 更新过程

首次访问`index.html`，ajax方式下载`js、css`文件后，将内容存储到本地`localStorage.setItem(文件名,代码内容)`，然后执行`代码内容`

再次访问`index.html`，通过`文件名`获取本地`代码内容`，然后执行`代码内容`

执行过程如下

```js
 function exec(item){
    if(/\.css/.test(item.url)){
      var s = document.createElement("style");
      s.setAttribute('data-href',item.url)
      s.innerHTML = item.text;
      head.appendChild(s)
    }else if(/\.js/.test(item.url)){
      var script = document.createElement('script');
      script.text = item.text;
      head.appendChild( script );
    }
  }
```
