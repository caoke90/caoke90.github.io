# 第8节：adminJSON初始数据

组件默认数据，包含所有组件

```javascript
var adminJSON=[
  {
    "card_type": "box",
    "title": '标题',
    "mkey": 'home',
  },
  {
    "card_type": "tabview",
    "title": '标题',
    "tabIndex": 0,
    "mkeyArr": [{
      name:'首页',
      mkey:'home',
    },{
      name:'商城',
      mkey:'shop',
    },{
      name:'个人中心',
      mkey:'person',
    }],
  },
  {
    "card_type":"card100",
    "user_id":"",
    "task_id":"",
    "desc":"这是一段任务描叙的文本<a href='https://www.baidu.com'>查看详情</a>",
    "scheme":"",
  },
  {
    "card_type":"card3001",
    "topic_name":"",
    "sort_type":"time",
    "num":"0",
    "object_type":"3",
  },
  {
    "card_type":"card2008",
    "film_id":"",
    "object_type":"2",
    "button_type":"0"
  },
  {
    "card_type":"card33",
    "title":"",
    "launch_uid":"",
    "desc":"",
    "is_pic":"0",
    "width":"1rem",
    "height":"1rem",
    "button_vote_text":"投票",
    "button_have_vote_text":"已投票",
    "themeid":"",
    "sort_type":"desc",
  },
  {
    "card_type":"card32",
    "title":"标题",
    "scheme":"#",
    "total":"0",
    "number_color":"#fe8200",
    "auto_add_number":"1",
    "auto_add_number_freq":"1",
    "auto_max_min":"1000",
    "update_url":"",
    "update_url_freq":"60",
    "isshow_rate":"0",
  },
  {
    "card_type":"card31",
    "title":"距离电影上映还有",
    "scheme":"",
    "end_time":"2018-9-9",
    "warning_time":"",
    "number_color":"#333333",
    "unit_color":"#333333",
    "number_warning_color":"#FF8200",
  },
  {
    "card_type":"card30",
    "name":"更多热门评论",
    "scheme":"",
  },
  {
    "card_type":"card29",
    "pic":"",
    "desc":"标题",
    "title_extra_text":"副标题",
    "scheme":"",
  },
  {
    "card_type":"card28",
    "col":4,
    "items":[
      {
        "pic":"http://image2.sina.com.cn/music/web/icon/card_icon_201503231534_default.png",
        "title_sub":"标题",
        "scheme":"",
      },
      {
        "pic":"http://image2.sina.com.cn/music/web/ting2013/page/icon/icon-start.png",
        "title_sub":"标题",
        "scheme":"",
      },
      {
        "pic":"http://image2.sina.com.cn/music/web/icon/card_icon_201503231534_default.png",
        "title_sub":"标题",
        "scheme":"",
      },
      {
        "pic":"http://image2.sina.com.cn/music/web/ting2013/page/icon/icon-start.png",
        "title_sub":"标题",
        "scheme":"",
      },
    ],
  },
  {
    "card_type":"card26",
    "col":2,
    "items":[
      {
        "pic":"https://mu1.sinaimg.cn/frame.150x200/weiyinyue.music.sina.com.cn/movie_poster/183380_vertical.jpg",
        "title_sub":"文字",
        "scheme":"",
      },
      {
        "pic":"https://mu1.sinaimg.cn/frame.150x200/weiyinyue.music.sina.com.cn/movie_poster/183380_vertical.jpg",
        "title_sub":"文字",
        "scheme":"",
      }
    ],
  },
  {
    "card_type":"card25",
    "uid":"3506400592",
  },
  {
    "card_type":"card24",
    "title":"话题主持人",
    "desc":"身为摄影师的Sonja Lovdal在面对作品中所谓的「美」与「吸引人」时，也无可避免的在内心产生冲突。在她的摄影作品《Body Notes》里，她用了大胆",
    "source":"虾米音乐",
    "scheme":"",
  },
  {
    "card_type":"card23",
    "show_color":"m-btn-white",
    "desc":"",
    "scheme":"",
  },
  {
    "card_type":"card22",
    "pic":"",
    "desc":"",
    "scheme":"",
  },
  {
    "card_type":"card21",
    "card_id": 0,
    "title": "",
    "pic_height": "1.5rem",
    "themeid": "",
    "vote_url": "",
    "vote_item_start": 1,
    "vote_item_end": 3,

    "sort_type": "desc",
    "votenum_lefttext": "",
    "votenum_righttext": "",

    "bottom_pic_url": "",
    "bottom_text": "立即投票",

  },
  {
    "card_type":"card20",
    "card_id": 0,
    "title": "",
    "pic_height": "1.5rem",
    "left_themeid": "",
    "right_themeid": "",
    "vote_url": "",
    "vote_item_start": 1,
    "vote_item_end": 3,

    "sort_type": "desc",
    "left_votenum_lefttext": "",
    "left_votenum_righttext": "",

    "right_votenum_lefttext": "",
    "right_votenum_righttext": "",

    "left_bottom_pic_url": "",
    "left_bottom_text": "立即投票",
    "right_bottom_pic_url": "",
    "right_bottom_text": "立即投票",


  },
  //可移动、可调整大小的图片
  {
    "card_type": "card14",
    "style":{
      "position":"absolute",
      "top":"0rem",
      "left":"0rem",
      "zIndex":10,
    },
    "width":"1rem",
    "height":"1rem",
    "card_id": 0,
    "src":"https://mu1.sinaimg.cn/original/weiyinyue.music.sina.com.cn/movie_game/1517809788560.jpg",
    "openurl": ""
  },
  //可移动、可调整大小的图片
  {
    "card_type": "card13",
    "type": "ui",
    "style":{
      "position":"fixed",
      "top":"0rem",
      "left":"0rem",
      "zIndex":10,
    },
    "width":"1rem",
    "height":"1rem",
    "card_id": 0,
    "src":"https://mu1.sinaimg.cn/original/weiyinyue.music.sina.com.cn/movie_game/1517809788560.jpg",
    "openurl": ""
  },

  //开屏动画，3秒后消失
  {
    "card_type": "card11",
    "type": "page",
    "card_id": 0,
    "status": 0,
    "openurl": "",
    "duration": 3000,
    "src":"http://mu1.sinaimg.cn/original/weiyinyue.music.sina.com.cn/h5_subject/6225_461ae3.png",

  },
  {
    card_group:[],
    "type": "box",
    "card_type": "card7",
    "card_id": 0,
  },
  //一个空的容器，可以在里面放入卡片
  {
    card_group:[],
    "type": "box",
    "card_type": "card10",
    "card_id": 0,
    "title": "",
    "mbottom": "0.18rem",
  },
  // {
  //   "card_group":[],
  //   "type": "uibox",
  //   "col": "4",
  //   "card_type": "card1",
  //   "card_id": 0,
  // },
  {
    "card_type":"card9",
    "card_id": 0,
    "weibo_info":{
      "url":"",
    },
  },
  //图文card
  {
    "card_type":"card8",
    "card_id": 0,
    "pic":"https://mu1.sinaimg.cn/frame.150x200/weiyinyue.music.sina.com.cn/movie_poster/183380_vertical.jpg",
    "title_sub":"标题",
    "desc1":"购票",
    "desc2":"测试",
    "scheme":"http://weibo.com",
    "button":{
      name:"购票",
      pic:"https://mu1.sinaimg.cn/frame.150x200/weiyinyue.music.sina.com.cn/movie_poster/183380_vertical.jpg",
      type:"link",
      params:{
        scheme:"http://weibo.com"
      },
    },

  },
  //可滑动、可调高度的轮播图
  {
    "card_type": "card3",
    "defaultIndex": 0,
    "height": "1.68rem",
    "pic_items": [
      {
        "src": "https://mu1.sinaimg.cn/original/weiyinyue.music.sina.com.cn/operation/focusphoto/d113439950455a333801337c33243af5.jpg",
        "openurl": "sinaweibo://userinfo?uid=1252397723",

      },
      {
        "src": "https://mu1.sinaimg.cn/original/weiyinyue.music.sina.com.cn/operation/focusphoto/4871eeb931119a827760931d2dce21d6.jpg",
        "openurl": "sinaweibo://userinfo?uid=1252397723",

      },
      {
        "src": "https://mu1.sinaimg.cn/original/weiyinyue.music.sina.com.cn/operation/focusphoto/4871eeb931119a827760931d2dce21d6.jpg",
        "openurl": "sinaweibo://userinfo?uid=1252397723",

      },
      {
        "src": "https://mu1.sinaimg.cn/original/weiyinyue.music.sina.com.cn/operation/focusphoto/4871eeb931119a827760931d2dce21d6.jpg",
        "openurl": "sinaweibo://userinfo?uid=1252397723",

      },
    ]
  },
  //宫格图文
  {
    "card_type": "card2",
    "col":4,
    "items": [
      {
        "pic": "http://ww2.sinaimg.cn/thumb150/64b384f6jw1endrotx73qj20ha0pxq98.jpg",
        "scheme": "",
        "desc1": "宫格文字1",
        "desc2": "",
      },
      {
        "pic": "http://ww3.sinaimg.cn/thumb150/88c37718gw1etpt495p8sj20sg0iz4ql.jpg",
        "scheme": "",
        "desc1": "宫格文字1",
        "desc2": "",
      },
      {
        "pic": "http://ww2.sinaimg.cn/square/67c3553fgw1epc4qivvbbj20qo0qoaw0.jpg",
        "scheme": "",
        "desc1": "宫格文字1",
        "desc2": "",
      },
      {
        "pic": "http://ww2.sinaimg.cn/square/6f055540gw1er1hta1rl4j20go0p07a4.jpg",
        "scheme": "",
        "desc1": "宫格文字1",
        "desc2": "",
      },

    ]
  },
]
export default {
  cardsDic:adminJSON,
  getCardData:function getCardData(name) {
    if(typeof name=="number"){
      name="card"+name;
    }
    for(var i=0; i<adminJSON.length; i++){
      if(name==adminJSON[i].card_type){
        const card=JSON.parse(JSON.stringify(adminJSON[i]));
        card.key=0;
        return card;
      }
    }
  }
}


```

