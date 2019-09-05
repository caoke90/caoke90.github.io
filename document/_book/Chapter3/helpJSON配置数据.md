# 第11节：helpJSON配置数据

编辑器的组件配置数据，包含所有组件

```javascript
import Bus from '../marvel/bus';

export default {
  'box':{
    "help":"box:单容器",
    'getMkey':function (card) {
      return card.mkey;
    },
    //编辑字段
    "editHelp":{
      "title":"标题",
      'mkey':'容器mkey',
    },
    //数据映射
    "dataMap":{
      "title":"title",
      "mkey":"mkey",
    },
    //属性类型
    "propsType":{
      "mkey":"Selector",
      "mkeyOptions":[
        {key: "home", value: 'home'},
        {key: "shop", value: 'shop'},
        {key: "person", value: 'person'},
      ],
    },
  },
  'tabview':{
    "help":"tabview:多容器",
    'getMkey':function (card) {
      return card.mkeyArr[card.tabIndex].mkey;
    },
    "editHelp":{
      "title":"标题",
      "tabIndex":"当前tab",
      "mkeyArr":"数据来源",
      "mkeyArr.name":"子标题",
      "mkeyArr.mkey":"容器mkey",
    },
    "dataMap":{
      "title":"title",
      "tabIndex":"tabIndex",
      "mkeyArr":"mkeyArr",
    },
    //属性类型
    "propsType":{
      "tabIndex":"Number",
      "mkeyArr.mkey":"Selector",
      "mkeyArr.mkeyOptions":[
        {key: "home", value: 'home'},
        {key: "shop", value: 'shop'},
        {key: "person", value: 'person'},
      ],
    },
  },

  "card7":{
    "help":"card7:动画容器",
    "showDom":true,
    "dataMap":{
      "title":"title",
      "mbottom":"mbottom",
    },
    "editHelp":{
      "title":"标题",
      "mbottom":"下边距离",
    },
    //属性类型
    "propsType":{
    },
  },
  "animate":{
    "opacity":"1",
    "effect":"fadeInDown",
    "duration":"0.5",
    "delay":"0.5",
    "style":{
      "position":"",
      "top":"",
      "left":"",
    }
  },
  "card1":{
    "help": "card1:ui类的容器",
  },
  "card2":{
    "help": "card2:宫格图文",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3Ze6s.png',
    //数据映射
    "dataMap":{
      "col":"col",
      "items":"items",
    },
    "editHelp":{
      "col":"每行展示的数量",
      "items":"图文数据",
      "items.pic":"图片地址",
      "items.scheme":"跳转地址",
      "items.desc1":"第一行文字",
      "items.desc2":"第二行文字",
    },
    //属性类型
    "propsType":{
      "col":"Selector",
      "colOptions":[
        {key: "1", value: '1'},
        {key: "2", value: '2'},
        {key: "3", value: '3'},
        {key: "4", value: '4'},
        {key: "5", value: '5'},
        {key: "6", value: '6'},
        {key: "7", value: '7'},
        {key: "8", value: '8'},
        {key: "9", value: '9'},
        {key: "10", value: '10'},
      ],
      "items.pic":"imgUrl",
      "items.scheme":"Url",
    },
  },
  "card3":{
    "help": "card3:高度可调的轮播图",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3e0rn.png',
    //数据映射
    "dataMap":{
      // "defaultIndex":"defaultIndex",
      "height":"height",
      "pic_items":"pic_items",
    },
    //属性说明
    "editHelp":{
      // "defaultIndex":"默认显示第几张图",
      "height":"banner高度",
      "pic_items":"banner中的图片和url",
      "pic_items.src":"图片地址",
      "pic_items.openurl":"跳转url",
    },
    //属性类型
    "propsType":{
      "defaultIndex":"Number",
      "height":"Rem",
      "pic_items.src":"imgUrl",
    },

  },
  "card8":{
    "help":"card8:图文",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3ecPU.png',
    "dataMap":{
      "pic":"pic",
      "title_sub":"title_sub",
      "desc1":"desc1",
      "desc2":"desc2",
      "scheme":"scheme",
      "button.name":"buttonName",
      "button.pic":"buttonPic",
      "button.params.scheme":"buttonUrl",
    },
    //属性类型
    "propsType":{
      "scheme":"Url",
      "buttonUrl":"Url",
      "pic":"imgUrl",
      "buttonPic":"imgUrl",
    },
    "editHelp":{
      "pic":"左边图片",
      "title_sub":"标题",
      "desc1":"右边文字1",
      "desc2":"右边文字2",
      "scheme":"右边链接跳转",
      "buttonName":"按钮文字",
      "buttonPic":"按钮图片",
      "buttonUrl":"按钮跳转",
    }
  },
  "card9":{
    "help":"card9:表示一条微博",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3e224.png',
    "dataMap":{
      "weibo_info.url":"url"
    },
    "editHelp":{
      "url":"该微博的url地址"
    },
    rules:{
      url: [
        { required: true,message:"需填入微博的url地址", trigger: 'change' }
      ],
    },
  },
  "card10":{
    "help":"card10:卡片容器",
    "showDom":true,
    "dataMap":{
      "title":"title",
      "mbottom":"mbottom",
    },
    "editHelp":{
      "title":"标题",
      "mbottom":"下边距离",
    },
    //属性类型
    "propsType":{
      "mbottom":"Rem",
    },
  },
  "card11":{
    "help":"card11:页面设置",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3mSdP.png',
    //数据映射
    "dataMap":{
      "status":"status",
      "src":"src",
      "openurl":"openurl",
      "duration":"duration",
    },
    "editHelp":{
      "status":"全屏动画",
      "src":"图片的地址",
      "openurl":"跳转地址",
      "duration":"多少毫秒消失"
    },
    "hide":{
      src:false,
      openurl:false,
      duration:false,
    },
    "watch":{
      "status":function (nval,oval,editVue) {
        if(!nval){
          this.hide["src"]=true;
          this.hide["openurl"]=true;
          this.hide["duration"]=true;
        }else{
          this.hide["src"]=false;
          this.hide["openurl"]=false;
          this.hide["duration"]=false;
        }
      }
    },
    //属性类型
    "propsType":{
      "status":"Switch",
      "src":"imgUrl",
      "duration":"plusInt",
      "openurl":"Url",
    },
  },
  "card14":{
    "help":"card14:图片动画",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3mFzQ.png',
    "showDom":true,
    //数据映射
    "dataMap":{
      "style.zIndex":"zIndex",
      "src":"src",
      "openurl":"openurl",
      "width":"width",
      "height":"height",
      // "style.left":"left",
      // "style.top":"top",

    },
    "editHelp":{
      "position":"定位方式",
      "src":"图片",
      "openurl":"跳转",
      "width":"宽度",
      "height":"高度",
      // "left":"距离左边",
      // "top":"距离上面",
    },
    //属性类型
    "propsType":{
      "src":"imgUrl",
      "width":"Rem",
      "height":"Rem",
      "zIndex":"Number",
      // "top":"Rem",
      // "left":"Rem",
      "openurl":"Url",
    },
  },
  "card13":{
    "help":"card13:可移动、可调整大小的图片",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3mFzQ.png',
    "showDom":true,
    //数据映射
    "dataMap":{
      "style.position":"position",
      "src":"src",
      "openurl":"openurl",
      "width":"width",
      "height":"height",
      "style.zIndex":"zIndex",
      // "style.left":"left",
      // "style.top":"top",

    },
    "editHelp":{
      "position":"定位方式",
      "src":"图片",
      "openurl":"跳转",
      "width":"宽度",
      "height":"高度",
      "zIndex":"z轴",
      // "left":"距离左边",
      // "top":"距离上面",
    },
    "watch":{
      "position":function(nval,oval,editVue){
        var style=JSON.parse(JSON.stringify(editVue.card.style))

        if(nval=="fixed"){
          if(parseFloat(style.top)>window.innerHeight/50){
            style.top=parseFloat(style.top)%window.innerHeight/50;
          }
          if(parseFloat(style.top)>window.innerHeight/100){
            style.bottom=window.innerHeight/50-parseFloat(style.top)-parseFloat(editVue.card.height)+"rem";
            delete style.top;
          }
        }else{
          if(style.bottom){
            style.top=window.innerHeight/50-parseFloat(style.bottom)-parseFloat(editVue.card.height)+"rem";
            delete style.bottom;
          }

        }
        editVue.card.style=style;

      }
    },
    //属性类型
    "propsType":{
      "src":"imgUrl",
      "width":"Rem",
      "height":"Rem",
      "zIndex":"plusInt",
      // "top":"Rem",
      // "left":"Rem",
      "openurl":"Url",
      "position":"Selector",
      "positionOptions":[{key: "absolute", value: '普通'}, {key: "fixed", value: '固定在页面'}],
    },
  },

  "card20":{
    "help":"card20:投票card",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3mKiT.png',
    //数据映射
    "dataMap":{
      "title":"title",
      "pic_height":"pic_height",
      "sort_type":"sort_type",
      "left_themeid":"left_themeid",
      "right_themeid":"right_themeid",
      "vote_url":"vote_url",
      "vote_item_start":"vote_item_start",
      "vote_item_end":"vote_item_end",
      "left_votenum_lefttext":"left_votenum_lefttext",
      "left_votenum_righttext":"left_votenum_righttext",
      "right_votenum_lefttext":"right_votenum_lefttext",
      "right_votenum_righttext":"right_votenum_righttext",

      "left_bottom_pic_url":"left_bottom_pic_url",
      "left_bottom_text":"left_bottom_text",
      "right_bottom_pic_url":"right_bottom_pic_url",
      "right_bottom_text":"right_bottom_text",
    },
    "watch":{

    },
    "editHelp":{
      "title":"标题",
      "pic_height":"图片高度",
      "vote_url":"投票结果页地址",
      "left_themeid":"左边投票主题ID",
      "right_themeid":"右边投票主题ID",
      "vote_item_start":"投票项开始序号",
      "vote_item_end":"投票项结束序号",
      "sort_type":"投票展示顺序",
      "left_votenum_lefttext":"左边票数项-左边文案",
      "left_votenum_righttext":"左边票数项-右边文案",
      "right_votenum_lefttext":"右边票数项-右边文案",
      "right_votenum_righttext":"右边票数项-右边文案",

      "left_bottom_pic_url":"左边投票项底部图片",
      "left_bottom_text":"左边投票项底部文案",
      "right_bottom_pic_url":"右边投票项底部图片",
      "right_bottom_text":"右边投票项底部文案",

    },
    //异步获取完数据，然后再进行编辑
    "sync":async function () {
      const data=await fetch("/admin/mobile_page/ajax_getpolllist").then(function(response) {
        return response.json();
      });
      if (data) {
        this.propsType.left_themeidOptions=[];
        this.propsType.right_themeidOptions=[];
        for(var k in data.votethemelist){
          this.propsType.left_themeidOptions.push({key: k, value: data.votethemelist[k]})
          this.propsType.right_themeidOptions.push({key: k, value: data.votethemelist[k]})
        }
      }
    },
    //属性类型
    "propsType":{
      "pic_height":"Rem",
      "left_bottom_pic_url":"imgUrl",
      "right_bottom_pic_url":"imgUrl",
      "left_themeid":"Selector",
      "right_themeid":"Selector",
      "sort_type":"Selector",
      "vote_item_start":"plusInt",
      "vote_item_end":"plusInt",

      "left_themeidOptions":["异步获取的"],
      "right_themeidOptions":["异步获取的"],
      "sort_typeOptions":[
        {key: "desc", value: '票数倒序'},
        {key: "asc", value: '票数顺序'},
        {key: "rand", value: '随机'},
        {key: "default", value: '按选项顺序'},
        {key: "default_desc", value: '按选项倒序'},
      ],
    },
  },
  "card21":{
    "help":"card21:四图投票",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3mYe1.jpg',
    //数据映射
    "dataMap":{
      "title":"title",
      "pic_height":"pic_height",
      "themeid":"themeid",
      "vote_url":"vote_url",
      "vote_item_start":"vote_item_start",
      "vote_item_end":"vote_item_end",
      "sort_type":"sort_type",
      "votenum_lefttext":"votenum_lefttext",
      "votenum_righttext":"votenum_righttext",
      // "bottom_pic_url":"bottom_pic_url",
      "bottom_text":"bottom_text",

    },
    "editHelp":{
      "title":"标题",
      "pic_height":"图片高度",
      "themeid":"投票主题ID",
      "vote_url":"投票结果页地址",
      "vote_item_start":"投票项开始序号",
      "vote_item_end":"投票项结束序号",
      "sort_type":"投票展示顺序",
      "votenum_lefttext":"票数项title_sub左边文案",
      "votenum_righttext":"票数项title_sub右边文案",
      "bottom_pic_url":"投票项底部图片",
      "bottom_text":"投票项底部文案",

    },
    //异步获取完数据，然后再进行编辑
    "sync":async function () {
      const data=await fetch("/admin/mobile_page/ajax_getpolllist").then(function(response) {
        return response.json();
      });
      if (data) {
        this.propsType.themeidOptions=[];
        for(var k in data.votethemelist){
          this.propsType.themeidOptions.push({key: k, value: data.votethemelist[k]})
        }
      }
    },
    //属性类型
    "propsType":{
      "pic_height":"Rem",
      "vote_url":"Url",
      "sort_type":"Selector",
      "vote_item_start":"Number",
      "vote_item_end":"Number",
      "bottom_pic_url":"imgUrl",

      "themeid":"Selector",
      "themeidOptions":["异步获取的"],
      "sort_typeOptions":[
        {key: "desc", value: '票数倒序'},
        {key: "asc", value: '票数顺序'},
        {key: "rand", value: '随机'},
        {key: "default", value: '按选项顺序'},
        {key: "default_desc", value: '按选项倒序'},
      ],
    },
  },
  "card22":{
    "help":"card22:单行",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3mdJO.png',
    "dataMap":{
      "pic":"pic",
      "desc":"desc",
      "scheme":"scheme",
    },
    "editHelp":{
      "pic":"左边图片",
      "desc":"文案",
      "scheme":"点击跳转",
    },
    //属性类型
    "propsType":{
      "pic":"imgUrl",
      "scheme":"Url",
    }
  },
  "card23":{
    "help":"card23:单行按钮",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3mBSe.png',
    "dataMap":{
      "show_color":"show_color",
      "desc":"desc",
      "scheme":"scheme",
    },
    "editHelp":{
      "show_color":"按钮颜色",
      "desc":"文案",
      "scheme":"点击跳转",
    },
    //属性类型
    "propsType":{
      "scheme":"Url",
      "show_color":"Selector",
      "show_colorOptions":[
        {key: "m-btn-white", value: '白按钮'},
        {key: "m-btn-blue", value: '蓝按钮'},
        {key: "m-btn-ltgreen", value: '绿按钮'},
        {key: "m-btn-ltred", value: '红按钮'},
      ],
    }
  },
  "card24":{
    "labelWidth":"80px",
    "help":"card24: 纯文本",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3mDQH.png',
    "dataMap":{
      "title":"title",
      "desc":"desc",
      "source":"source",
      "scheme":"scheme",
    },
    "editHelp":{
      "title":"标题",
      "desc":"文案",
      "source":"来源文案",
      "scheme":"点击跳转",
    },
    //属性类型
    "propsType":{
      "scheme":"Url",
      "desc":"Textarea",
    }
  },
  "card25":{
    "help":"card25: 用户",
    "dataMap":{
      "uid":"uid",
    },
    "editHelp":{
      "uid":"用户uid",
    },
    "rules":{
      uid: [
        { required: true,message:"需填入用户的uid", trigger: 'blur' }
      ],
    },
    //属性类型
    "propsType":{

    }
  },
  "card26":{
    "help":"card26: 宫格按钮",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3mcwt.png',
    "dataMap":{
      "col":"col",
      "items":"items",
    },
    "editHelp":{
      "col":"每行展示的数量",
      "items":"按钮组",
      "items.title_sub":"标题",
      "items.pic":"左边图片",
      "items.scheme":"跳转地址",
    },
    //属性类型
    "propsType":{
      "col":"Selector",
      "colOptions":[
        {key: "1", value: '1'},
        {key: "2", value: '2'},
        {key: "3", value: '3'},
        {key: "4", value: '4'},
        {key: "5", value: '5'},
        {key: "6", value: '6'},
        {key: "7", value: '7'},
        {key: "8", value: '8'},
        {key: "9", value: '9'},
        {key: "10", value: '10'},
      ],
      "group.pic":"imgUrl",
      "items.scheme":"Url",
    }
  },
  "card28":{
    "help":"card28: 宫格",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3mgTP.png',
    "dataMap":{
      "col":"col",
      "items":"items",
    },
    "editHelp":{
      "col":"每行展示的数量",
      "items":"按钮组",
      "items.title_sub":"标题",
      "items.pic":"左边图片",
      "items.scheme":"跳转地址",
    },
    //属性类型
    "propsType":{
      "col":"Selector",
      "colOptions":[
        {key: "1", value: '1'},
        {key: "2", value: '2'},
        {key: "3", value: '3'},
        {key: "4", value: '4'},
        {key: "5", value: '5'},
        {key: "6", value: '6'},
        {key: "7", value: '7'},
        {key: "8", value: '8'},
        {key: "9", value: '9'},
        {key: "10", value: '10'},
      ],
      "items.pic":"imgUrl",
      "items.scheme":"Url",
    }
  },
  "card29":{
    "help":"card29: 标题",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3m7mn.png',
    "dataMap":{
      "pic":"pic",
      "desc":"desc",
      "title_extra_text":"title_extra_text",
      "scheme":"scheme",
    },
    "editHelp":{
      "pic":"左边图片",
      "desc":"文案",
      "scheme":"点击跳转",
      "title_extra_text":"右侧副标题",
    },
    //属性类型
    "propsType":{
      "pic":"imgUrl",
      "scheme":"Url",
    }
  },
  "card30":{
    "help":"card30: 分割线",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3m7mn.png',
    "dataMap":{
      "name":"name",
      "scheme":"scheme",
    },
    "editHelp":{
      "name":"文案",
      "scheme":"点击跳转",
    },
    //属性类型
    "propsType":{
      "scheme":"Url"
    },
  },
  "card33":{
    "help":"card33: 投票card，仅能投票一次",
    "height":"6rem",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3mvpF.jpg',
    "dataMap":{
      "title":"title",
      "launch_uid":"launch_uid",
      "desc":"desc",
      "is_pic":"is_pic",
      "width":"width",
      "height":"height",
      "button_vote_text":"button_vote_text",
      "button_have_vote_text":"button_have_vote_text",
      "themeid":"themeid",
      "sort_type":"sort_type",
    },
    "rules":{
      title: [
        { required: true,message:"不能为空", trigger: 'change' }
      ],
      launch_uid: [
        { required: true,message:"需填入发起人的uid", trigger: 'change' }
      ],
    },
    "hide":{
      width:true,
      height:true,
    },
    "watch":{
      "is_pic":function (nval,oval,editVue) {
        if(nval==0){
          this.hide["width"]=true;
          this.hide["height"]=true;
        }else{
          this.hide["width"]=false;
          this.hide["height"]=false;
        }

      }
    },
    "editHelp":{
      "title":"标题",
      "launch_uid":"发起人uid",
      "desc":"投票详情描述",
      "is_pic":"是否包含图片",
      "width":"图片宽度",
      "height":"图片高度",
      "button_vote_text":"底部投票文案",
      "button_have_vote_text":"底部已完成投票文案",
      "themeid":"投票主题ID",
      "sort_type":"投票项展示顺序",
    },
    //异步获取完数据，然后再进行编辑
    "sync":async function () {

      const data=await fetch("/admin/mobile_page/ajax_getpolllist").then(function(response) {
        return response.json();
      });
      if (data) {
        this.propsType.themeidOptions=[];
        for(var k in data.votethemelist){
          this.propsType.themeidOptions.push({key: k, value: data.votethemelist[k]})
        }
      }
    },

    //属性类型
    "propsType":{
      "width":"Rem",
      "widthHide":true,
      "height":"Rem",
      "heightHide":true,
      "desc":"Textarea",
      "themeid":"Selector",
      "themeidOptions":[],
      "is_pic":"Selector",
      "is_picOptions":[
        {key: "0", value: '否'},
        {key: "1", value: '是'},
      ],
      "sort_type":"Selector",
      "sort_typeOptions":[
        {key: "desc", value: '票数倒序'},
        {key: "asc", value: '票数顺序'},
        {key: "rand", value: '随机'},
        {key: "default", value: '按选项顺序'},
        {key: "default_desc", value: '按选项倒序'},
      ],
    },
  },
  "card31":{
    "help":"card31: 倒计时card",
    "dataMap":{
      "title":"title",
      "scheme":"scheme",
      "end_time":"end_time",
      "warning_time":"warning_time",
      "number_color":"number_color",
      "unit_color":"unit_color",
      "number_warning_color":"number_warning_color",
    },
    rules:{
      end_time: [
        {
          validator: function (rule, value, callback) {
            if(!value){
              callback(new Error('请输入结束时间'));
            }else{
              if(Bus.editVue.cardShow.warning_time){
                Bus.editVue.$refs.ruleForm.validateField("warning_time")
              }
              callback()
            }

          }, trigger: 'blur'
        }
      ],
      warning_time: [
        {
          validator:  (rule, value, callback)=> {

            if(Bus.editVue.cardShow.end_time&&new Date(value)>new Date(Bus.editVue.cardShow.end_time)){
              callback(new Error('警告时间不能大于结束时间'));
            }else{
              callback()
            }

          }, trigger: 'blur'
        }
      ],
    },
    // "watch":{
    //   "warning_time":function (nval,oval,editVue) {
    //     if(!nval){
    //       return;
    //     }
    //     if(!editVue.cardShow.end_time){
    //       Toast("结束时间不存在");
    //       editVue.cardShow.warning_time=oval;
    //     }
    //     if(new Date(nval)>new Date(editVue.cardShow.end_time)){
    //       Toast("警告时间不能大于结束时间");
    //       editVue.cardShow.warning_time=oval;
    //     }
    //   }
    // },
    "editHelp":{
      "title":"标题",
      "scheme":"点击跳转地址",
      "end_time":"结束时间",
      "warning_time":"警告时间",
      "number_color":"数字颜色编码",
      "unit_color":"时间单位字体颜色编码",
      "number_warning_color":"数字警告时颜色编码",
    },

    //属性类型
    "propsType":{
      "scheme":"Url",
      "end_time":"Time",
      "number_color":"Color",
      "unit_color":"Color",
      "number_warning_color":"Color",
      "warning_time":"Time",

    },
  },
  "card32":{
    "help":"card32: 计数card",
    "dataMap":{
      "title":"title",
      "scheme":"scheme",
      "total":"total",
      "number_color":"number_color",
      // "auto_add_number":"auto_add_number",
      // "auto_add_number_freq":"auto_add_number_freq",
      // "auto_max_min":"auto_max_min",
      "update_url":"update_url",
      "update_url_freq":"update_url_freq",
      "isshow_rate":"isshow_rate",
    },


    "editHelp":{
      "title":"标题",
      "scheme":"点击跳转地址",
      "total":"总目标值",
      "number_color":"数字颜色编码",
      // "auto_add_number":"自动更新时 每次增加的数值,可以为负整数",
      // "auto_add_number_freq":"自动更新的更新频率，单位:s",
      // "auto_max_min":"自动更新值为正时为最大值，自动更新值为负时最小值",
      "update_url":"数据更新地址",
      "update_url_freq":"请求更新方式时的更新频率",
      "isshow_rate":"是否展示完成比例",
    },

    //属性类型
    "propsType":{
      "scheme":"Url",
      "update_url":"Url",
      "total":"plusInt",
      "number_color":"Color",
      "end_time":"Time",
      "update_url_freq":"plusInt",
      "update_url_freqUnit":"秒",
      "isshow_rate":"Selector",
      "isshow_rateOptions":[
        {key: "0", value: '不展示'},
        {key: "1", value: '展示'},
      ],

    },
  },
 "card2008":{
    "help":"card2008:图文",
    "dataMap":{
      "film_id":"film_id",
      "button_type":"button_type"
    },
    //属性类型
    "propsType":{
      "button_type":"Selector",
      "button_typeOptions":[
       {key: "0", value: '不配置'},
        {key: "1", value: '点评'},
        {key: "2", value: '购票'}
      ],
    },
   rules:{
     film_id: [
       { required: true,message:"需填入电影id", trigger: 'change' }
     ],
   },
    "editHelp":{
    	  "film_id":"电影ID",
      "button_type":"按钮类型"
    }
  },
  "card3001":{
    "help":"card3001:话题流card",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3nmXd.jpg',
    "dataMap":{
      "topic_name":"topic_name",
      "sort_type":"sort_type",
      "num":"num",
    },
    //属性类型
    "propsType":{
      "num":"Number",
      "sort_type":"Selector",
      "sort_typeOptions":[
        {key: "time", value: '时间倒序'},
        {key: "social", value: '社会化排序'},
        {key: "hot", value: '热门度'},
        {key: "fwnum", value: '按转发数倒序'},
        {key: "cmtnum", value: '按评论数倒序'},
      ],
    },
    "editHelp":{
      "topic_name":"话题词",
      "sort_type":"排序类型",
      "num":"展示数量",
      "object_type":"组合类业务编号",
    }
  },
  "card100":{
    "help":"card100:任务卡片",
    "demo_url":'https://s2.ax1x.com/2019/08/19/m3nVpD.png',
    "dataMap":{
      "user_id":"user_id",
      "task_id":"task_id",
      "desc":"desc",
      "scheme":"scheme",
    },
    //属性类型
    "propsType":{
      "scheme":"Url",
      "user_id":"Selector",
      "user_idOptions":["异步获取的"],
      "task_id":"Selector",
      "task_idOptions":["异步获取的"],
    },
    //异步获取完数据，然后再进行编辑
    "sync":async function () {
      const data=await fetch("/getuserandtask").then(function(response) {
        return response.json();
      });
      if (data) {
        this.propsType.user_idOptions=[];
        this.propsType.task_idOptions=[];
        for(var k in data.user){
          this.propsType.user_idOptions.push({key: k, value: data.user[k]})
        }
        for(var k in data.task){
          this.propsType.task_idOptions.push({key: k, value: data.task[k]})

        }
      }
    },
    "editHelp":{
      user_id:"教师名称",
      task_id:"任务名称",
      desc:"描叙",
      scheme:"跳转",
    }
  },
  getCardData:function(name) {
    if(typeof name=="number"){
      name="card"+name;
    }
    for(var k in this){
      if(name==k){
        return Object.create(this[k]);
      }
    }
  }
}

```

