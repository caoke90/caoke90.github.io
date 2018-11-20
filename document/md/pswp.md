
### #功能
点击图片，查看大图


### #基础用法
```
Bus.$emit('mvGallery', index, list);

list数组参数：
   {
     src: card.url, // 大图
     w: card.width, // 大图宽度
     h: card.height, // 大图高度
     msrc: card.url, // 缩略图
     el: clickedListItem.getElementsByTagName('img')[i], // 缩略图对应的img DOM
    }

```

### #demo源码
```
<template>
  <div class="card markdown weibo-media" >
    <h2>图片全屏预览</h2>
    <h3>#demo</h3>
    <ul class="m-auto-list">
      <li class="m-auto-box" v-for="(pic, index) in big_card.object.small_pics">
        <div class="m-img-box" @click="thumbnails($event, index, big_card.object.large_pics)">
          <img :src="pic.url" />
          <span class="feed-mark" @click.stop.prevent="delImg(index)">X</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

  import Bus from '../modals/pswp'
  export default {
    data() {
      return {
        big_card:null
      };
    },
    name: "card3",
    props: ['card'],
    components: {
    },
    created:function(){
      this.big_card={
        "text":"",
        "type":"big_card",
        "object_type":"picture",
        "object":{
          "large_pics":[
            {
              "url":"http://wx1.sinaimg.cn/large/7c83ac9bgy1fn5jvvww4bj20xc0m9n3s.jpg",
              "width":1200,
              "height":801
            },
            {
              "url":"http://wx4.sinaimg.cn/large/7c83ac9bgy1fn5jvwidlaj20xc0m847a.jpg",
              "width":1200,
              "height":800
            },
            {
              "url":"http://wx1.sinaimg.cn/large/7c83ac9bgy1fn5jvx560wj20xc0m9gv5.jpg",
              "width":1200,
              "height":801
            },
            {
              "url":"http://wx3.sinaimg.cn/large/7c83ac9bgy1fn5jvxs2d9j20xc0m9wm8.jpg",
              "width":1200,
              "height":801
            },
            {
              "url":"http://wx3.sinaimg.cn/large/7c83ac9bgy1fn5jvyah8jj20xc0oy0yk.jpg",
              "width":1200,
              "height":898
            },
            {
              "url":"http://wx2.sinaimg.cn/large/7c83ac9bgy1fn5jvyrbguj20m80xcjy1.jpg",
              "width":800,
              "height":1200
            },
            {
              "url":"http://wx2.sinaimg.cn/large/7c83ac9bgy1fn5jvzd77dj20xc0m9wls.jpg",
              "width":1200,
              "height":801
            },
            {
              "url":"http://wx4.sinaimg.cn/large/7c83ac9bgy1fn5jvvf99pj20xc0m9wiw.jpg",
              "width":1200,
              "height":801
            },
            {
              "url":"http://wx4.sinaimg.cn/large/7c83ac9bgy1fn5jw07ok8j20xc0m9n4t.jpg",
              "width":1200,
              "height":801
            }
          ],
          "small_pics":[
            {
              "url":"http://wx1.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvvww4bj20xc0m9n3s.jpg",
              "width":0,
              "height":0
            },
            {
              "url":"http://wx4.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvwidlaj20xc0m847a.jpg",
              "width":0,
              "height":0
            },
            {
              "url":"http://wx1.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvx560wj20xc0m9gv5.jpg",
              "width":0,
              "height":0
            },
            {
              "url":"http://wx3.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvxs2d9j20xc0m9wm8.jpg",
              "width":0,
              "height":0
            },
            {
              "url":"http://wx3.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvyah8jj20xc0oy0yk.jpg",
              "width":0,
              "height":0
            },
            {
              "url":"http://wx2.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvyrbguj20m80xcjy1.jpg",
              "width":0,
              "height":0
            },
            {
              "url":"http://wx2.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvzd77dj20xc0m9wls.jpg",
              "width":0,
              "height":0
            },
            {
              "url":"http://wx4.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvvf99pj20xc0m9wiw.jpg",
              "width":0,
              "height":0
            },
            {
              "url":"http://wx4.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jw07ok8j20xc0m9n4t.jpg",
              "width":0,
              "height":0
            }
          ]
        }
      }
    },
    methods: {
      delImg:function (index) {
        this.card.card_info.big_card.object.small_pics.splice(index,1)
        this.card.card_info.big_card.object.large_pics.splice(index,1)
      },
      thumbnails(e, index, cardList) {
        const eTarget = e.target || e.srcElement;
        const list = this.formatThumbItem(eTarget, cardList, index);
        Bus.$emit('mvGallery', index, list);
      },
      // 拼出pswp需要的数据格式
      formatThumbItem(target, cardList, index) {
        // 找出父结点
        const clickedListItem = this.closest(target, (el) => {
          return el.classList.contains('weibo-media');
        });

        const cards = cardList.map((card, i) => {
          if(!card.width) {
            const style = window.getComputedStyle ? window.getComputedStyle(target, null) : null || target.currentStyle;
            const windowWidth = document.documentElement.clientWidth || window.innerWidth;
            card.width = windowWidth;
            card.height = parseFloat(style.height) / parseFloat(style.width) * windowWidth;
          }
          return {
            src: card.url, // 大图
            w: card.width, // 大图宽度
            h: card.height, // 大图高度
            msrc: card.url, // 缩略图
            el: clickedListItem.getElementsByTagName('img')[i], // 缩略图对应的img DOM
          };
        });
        return cards;
      },
      closest(el, fn) {
        return el && (fn(el) ? el : this.closest(el.parentNode, fn));
      }
    },
  };
</script>
<style  >
  .card2{
    overflow: hidden;
  }
  .m-auto-list{
    width: 100%;
  }
  .m-auto-box{
    width: 200px;
    height: 200px;
    overflow: hidden;
    float: left;
    padding:10px 20px;
  }
  .m-img-box{

  }
</style>


```
