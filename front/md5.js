//版本控制

var LCacheLib = "lib/LCache.e54fe792.js";
var LCacheName = 'LCache-' + LCacheLib;

if (!localStorage[LCacheName]) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", LCacheLib, false);
  xmlhttp.send();

  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    var UpLCacheLib = localStorage.getItem('UpLCacheLib');

    if (UpLCacheLib) {
      localStorage.removeItem(UpLCacheLib); //移除之前的缓存
    }

    localStorage.setItem('UpLCacheLib', LCacheName); //移除之前的缓存

    localStorage.setItem(LCacheName, xmlhttp.responseText);
  }
}

var script = document.createElement('script');
script.text = localStorage.getItem(LCacheName);
document.getElementsByTagName('head')[0].appendChild(script);
console.log(LCacheLib);
var curVersion = '210619';
LCache.loadChunk(curVersion, 'wlhVersion'); //增量包

window.Native = {};
LCache.dataArr = ["lib/md5.a2d9cc8b.css", "js/manifest.485f3141.js", "lib/es6-promise.80d8dfc4.js", "lib/axios.43ad9e12.js", "lib/vue.a9013cdc.js", "lib/vue-router.c216dc3c.js", "css/spa.7209bcbe.css", "js/spa.6d152e07.js"];
LCache.loadAll(LCache.dataArr);