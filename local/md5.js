//版本控制

var LCacheLib = "lib/LCache.480731ea.js";
var LCacheName = 'LCache-' + LCacheLib;

if (!localStorage[LCacheName]) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", LCacheLib, false);
  xmlhttp.send();

  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    localStorage.setItem('UpLCacheLib', LCacheName); //移除之前的缓存

    localStorage.setItem(LCacheName, xmlhttp.responseText);
  }
}

var script = document.createElement('script');
script.text = localStorage.getItem(LCacheName);
document.getElementsByTagName('head')[0].appendChild(script);
var curVersion = '210619';
LCache.loadChunk(curVersion, 'wlhVersion'); //增量包

window.Native = {};
var appChannel = 'app';
location.search.replace(/appChannel=([a-z]+)/, function (m, p1) {
  appChannel = p1;
});
var isApp = 'production' !== 'development' && appChannel !== 'dev';
LCache.dataArr = ["lib/axios.540056b4.js", "lib/es6-promise.a88f2440.js", "lib/vue.f156a86b.js", "lib/vue-router.4dd7048f.js", "lib/fastclick.df47033b.js", "css/spa.6f5f1ca4.css", "js/spa.dbf92e00.js"];
LCache.loadAll(LCache.dataArr);