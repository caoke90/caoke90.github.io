## #bus 组件与组件之间的通信

### #功能
vue2中废弃了$dispatch和$broadcast广播和分发事件的方法。父子组件中可以用props和$emit()。如何实现非父子组件间的通信，可以通过实例一个vue实例Bus作为媒介，要相互通信的兄弟组件之中，都引入Bus，之后通过分别调用Bus事件触发和监听来实现组件之间的通信和参数传递。



### #基础用法
```
<template>
    <div id="emit">
        <button @click="bus">按钮</button>
    </div>
 </template>

import Bus from './bus.js'
export default {
    data() {
        return {
            message: ''"
        }
     },
　　methods: {
       bus () {
          Bus.$emit('msg', '我要传给兄弟组件们，你收到没有')
       }
    }
}
```

### #bus.js源码
```
/*
* 相当于全局变量
* 通信bus*/
import Vue from 'vue';
const Bus = new Vue();
export default Bus;

```
