## 资源是否有更新
每次启动应用，都会请求最新的`md5.js`
如果`md5.js`内容有变化，就说明资源有更新，应用发版了

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width,viewport-fit=cover" />
  <title>离线应用</title>

</head>

<body>
</body>
<script>
  var script = document.createElement('script');
  script.src='md5.js?'+(new Date().getTime())
  document.getElementsByTagName('head')[0].appendChild(script);
</script>
</html>
```


## 首先增量包更新

如果`wlhVersion`与`curVersion`不同，则下载增量包 `20210812-20210819.json`

更新`localStorage`中的`key`和`value`，并删掉旧版本文件

* `wlhVersion`是本地存储的版本`20210812`

* `curVersion`是线上发布的版本`20210819`

* `<%=process.env.curVersion%>`是项目打包的时候今天的日期

* 增量包最多存在`10`个，以及只包含最近`2个月`

```js
var curVersion='<%=process.env.curVersion%>';
LCache.loadChunk(curVersion,'wlhVersion');//增量包
```
增量包会更新本地存在的文件，让本地文件内容更新成线上内容

增量包`20210812-20210819.json`数据结构如下
```json
[
    {"a":"css/10.531e17e3.css","b":"css/10.d69f6aec.css","c":[[784,21],"31a78866",[813,65],"31a78866",[886,57],"31a78866"]},
    {"a":"css/12.b7122ca7.css","b":"css/12.8eba0302.css","c":[[2522,5],"swipe",[4759,19],[2438,16],"cursor:grab",[3916,9]]}
    ...
]
```
* 字段`a`表示上个版本的文件名，`b`表示当前版本的文件名，`c`表示`指令chunk`
* 当本地存在文件名，通过`指令c`，将内容更新，同时文件名更新成`c`
* 当本地增量更新完成或，本地已存在该文件

```js
 //加载增量包
  function loadChunk(curVersion,name) {
    var chunkVersion=localStorage.getItem(name);
    localStorage.setItem(name,curVersion);
    if(LCache.useCache&&chunkVersion&&chunkVersion!==curVersion){
      try {
        var text=getText('chunk/'+chunkVersion+'-'+curVersion+'.json')
        var chunkArr=JSON.parse(text);

        for(var i=0;i<chunkArr.length;i++){
          var obj=chunkArr[i]
          var preKey=LCache.storagePrefix+obj.a;
          var key=LCache.storagePrefix+obj.b;
          var s1=localStorage.getItem(preKey);

          if(s1){
            var s2=execChunk(s1,obj.c);
            LCache.cacheMap[getFileKey(preKey)]=key;
            localStorage.removeItem(preKey);
            localStorage.setItem(key,s2);
          }
        }
      }catch (e) {

      }
    }

  }
```
## 其次单文件更新

框架会根据`文件路径`，首先以`存储规则`判断本地是否存在该文件,做如下操作

1、本地不存在该文件

* 1、ajax方式下载文件内容
* 2、按照存储规则，将文件存储到本地
* 3、从localStorage获取文件内容，执行代码逻辑


2、 本地存在该文件
* 1、从`localStorage`获取文件内容，执行代码逻辑




