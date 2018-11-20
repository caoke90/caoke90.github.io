
### #功能
获取上传文件,返回file对象


### #基础用法
```
Bus.$emit("getFile",function (file) {
    console.log(file)
  })
```

### #demo源码
```
<template>
  <div class="card "  >
    <button @click="click1">点击获取文件</button>
  </div>
</template>
<script>
  //引入服务
  import Bus from '../modals/file';

  export default {
    data() {
      return {};
    },
    name: "fileDemo",
    props: ['card'],
    components: {
    },
    methods: {
      click1:function () {
        //调用服务
        Bus.$emit("getFile",function (file) {
          console.log(file)
        })
      }
    },
  };
</script>
<style  >

</style>

```
