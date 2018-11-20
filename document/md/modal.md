## #服务容器

### #功能
存放服务的容器，也是根据数据去生产不同的组件


### #基础用法
```
/*
  注册 服务容器 mv-modal
* */

Vue.component('mv-modal', require('../marvel/modal.vue'));

/*
  在组件中使用
* */
 //引入服务
  import Bus from '../modals/file';

  //调用服务
  Bus.$emit("getFile",function (file) {
    console.log(file)
  })
```

### #modal.vue源码
```
<template>
<div id="servers">
  <component v-for="name in modalcomponent" :is="'mv-'+name" :key="name"></component>
</div>
</template>
<script>
  import Vue from 'vue'
  import Bus from './bus';

  /*
    增加服务的接口
  * */
  Bus.modalComponent=[];
  Bus.addModalComponent=function (model) {
    if(Bus.modalComponent.indexOf(model.name)==-1){
      Bus.modalComponent.push(model.name)
      Vue.component("mv-"+model.name, model);
    }
  }
  export default{
    name: 'modal',
    data:function () {
      return {
        "modalcomponent":Bus.modalComponent
      }
    },

    props: {
    },
  };
</script>

```
