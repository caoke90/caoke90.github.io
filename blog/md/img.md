## #延迟按需加载图片

### #功能
延迟按需加载图片，减少网络请求，加快渲染速度


### #基础用法
```
/*
* 全局声明 图片懒加载
*/
Vue.component('mv-img', require('../marvel/img.vue'));

```

### #demo
```

<mv-img :src="pic.url"></mv-img>

```
