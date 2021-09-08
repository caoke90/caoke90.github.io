## demo
<a href='makeChunk.html' target='_blank'>makeChunk.html</a>

## 原理

`diff算法`本质是`diff`两个文件（`s1,s2`）的不同，输出`指令chunk`

让本地版本`文件s1`通过`指令chunk`,内容变成`文件s2`


## 指令chunk

`文件s1`

```js
console.log('hello world!')
```

`文件s2`

```js
console.log('hello LCache.js!')
```

`diff`后输出的`指令chunk`为

```json
[[0,19],"LCache.js",[24,3]]
```

* 输入`s1内容`和`指令chunk`

* 输出`s2内容`

* `s2内容` === `execChunk(s1内容+指令)` === `s1.substr(0,19)`+`LCache.js`+`s1.substr(24,3)`


## `execChunk`增量函数：
```js
  function execChunk(s1,chunk){
    var ns='';
    for(var i=0;i<chunk.length;i++){
      var arr=chunk[i];
      if(Object.prototype.toString.call(arr)==='[object Array]'){
        ns=ns+s1.substr(arr[0],arr[1])
      }else{
        ns=ns+arr
      }
    }
    return ns;
  }
```
