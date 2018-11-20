## #组件容器

### #功能
存放组件的容器，也是根据数据去生产不同的组件


### #基础用法
```
/*
  注册 组件容器
* */
Vue.component('card', require('../marvel/card.vue'));

/*
  页面上使用
* */
<template>
  <div class="hello">
    <div v-for="(v,k) in card_group"  :key="k">
      <card :card="v"></card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        card_group: [
          {
            card_type:1,
            md_type:'load'
          }
        ]
      }
    }
  }
</script>
```

### #card.vue源码
```
<template>
  <component :style="style" :is="page_type" :card="card" :cid="this._uid"></component>
</template>

<script>
  // const component = require.context('../marvel/cards', false, /\.vue$/);
  // const requireAll = context => context.keys().map(context);
  // const components={}
  // requireAll(component).forEach((card) => {
  //   const name = (card.name || /(\S+\/)(\S+)\.vue/.exec(card.hotID)[2]).toLowerCase();
  //   components[name]=card;
  // })
  export default{
    props:['card'],
    // components,
    computed: {
      style:function () {
        let card=this.card;
        if(card.style&&card.style.position=='fixed'&&window.innerWidth>750){
          if(card.style.left&&card.style.left.indexOf("rem")>-1){
            card.style.left=((window.innerWidth-750)/200+parseFloat(card.style.left))+"rem";
          }
          if(card.style.right&&card.style.right.indexOf("rem")>-1){
            card.style.right=((window.innerWidth-750)/200+parseFloat(card.style.right))+"rem";
          }
        }
        return card.style;
      },
      page_type: function () {
        let type = '';
        if (this.card && this.card.card_type) {
          if(typeof this.card.card_type=="string"){
            type=this.card.card_type;
          }else{
            type="card"+this.card.card_type;
          }
        }
        return type;
      }
    }
  };

</script>

```
