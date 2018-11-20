## #markdown文档展示

### * card1 数据结构

| 属性名 | 数据类型 | 是否必须 | 默认值 |字段说明 | 备注 |
| :----------- | :------| :------------ | :----------- |:----------- | :------ |
| card_type       | int  | 是        | 1 |  card标识符     |   markdown文档展示 |
| md_type   | string  | 是        |  | 组件的文档名     |    | 比如card1

### *ue样例:
图片地址:http://wx3.sinaimg.cn/mw690/7f54c80fly1fh1vo3dqmrj208j04vjss.jpg

###  * 样例及对应的json串

```
<template>
  <div class="main">
    <!--card 容器层-->
    <div v-for="(v,k) in card_group" :key="k">
      <card :card="v"></card>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        //card 数据
        card_group: [
          {
               card_type:1,
               md_type:'card1'
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*当页面样式*/
  .main{
    padding: 0 10%;
  }
</style>

```
