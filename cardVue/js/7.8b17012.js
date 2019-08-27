webpackJsonp([7],{

/***/ "+xJn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6CHS":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card card33 m-panel"},[_c('div',{staticClass:"mod"},[_c('div',{staticClass:"mod_list"},[_c('div',{staticClass:"vote_block line-around"},[_c('div',{staticClass:"layout-box media-graphic"},[_c('div',{staticClass:"box-col item-list vo_tit"},[_c('div',{staticClass:"item-main txt-m mct-a txt-cut-2"},[_vm._v(_vm._s(_vm.card.title))]),_vm._v(" "),_c('div',{staticClass:"item-minor txt-s mct-d txt-cut"},[_c('span',{staticClass:"v_tim_box"},[_c('a',{staticClass:"v_timl",attrs:{"href":_vm.card.launch_user_url}},[_vm._v(_vm._s(_vm.card.launch_user))]),_c('i',{staticClass:"begi"},[_vm._v("发起")])]),_vm._v(" "),_c('span',{staticClass:"v_timr",domProps:{"textContent":_vm._s(_vm.left_time_text)}})])]),_vm._v(" "),_c('div',{staticClass:"v_hint"},[_c('span',{staticClass:"item-main txt-m mct-a hint_t"},[_vm._v(_vm._s(_vm.card.all_vote_users))]),_vm._v(" "),_c('span',{staticClass:"txt-xs hint_b vot-ct"},[_vm._v("参与人数")])])]),_vm._v(" "),_c('div',{staticClass:"layout-box v_syno"},[_c('div',{staticClass:"box-col content-text txt-s",domProps:{"textContent":_vm._s(_vm.card.desc)}})])])])]),_vm._v(" "),_c('div',{staticClass:"mod"},[_c('div',{staticClass:"mod_list"},[_c('div',{key:_vm.key,staticClass:"vote_block"},[_c('div',{staticClass:"layout-box tit_box"},[_vm._m(0),_vm._v(" "),_c('span',{staticClass:"txt-xs vot-ct",domProps:{"textContent":_vm._s(_vm.max_select_text)}})]),_vm._v(" "),(_vm.card.is_pic==1&&_vm.card.is_vote!=1)?_c('div',{staticClass:"line-around big_img"},_vm._l((_vm.card.items),function(item){return _c('div',{staticClass:"item-box mod-media",class:{'big_select':_vm.option_ids.indexOf(item.option_id)>-1}},[_c('label',[_c('div',{staticClass:"media-main"},[_c('img',{attrs:{"src":item.pic}}),_vm._v(" "),_vm._m(1,true),_vm._v(" "),_c('span',{staticClass:"lay_inpu"},[_c('input',{attrs:{"type":"checkbox"},domProps:{"value":item.option_id},on:{"change":_vm.select}})])]),_vm._v(" "),_c('div',{staticClass:"big_txt"},[_c('div',{staticClass:"txt-m mct-a sel_tit",domProps:{"textContent":_vm._s(item.title)}})])])])}),0):(_vm.card.is_pic==1)?_c('div',{staticClass:"line-around vote_block"},[(_vm.card.items.length>0)?_c('div',{staticClass:"v_res_box"},_vm._l((_vm.card.items),function(item){return _c('div',{staticClass:"layout-box media-graphic v_result v_res_img",class:{v_sel_bac:item.is_vote}},[_c('div',{staticClass:"mod-media"},[_c('div',{staticClass:"media-main"},[_c('img',{style:({width:_vm.card.width,height:_vm.card.height}),attrs:{"src":item.pic}})])]),_vm._v(" "),_c('div',{staticClass:"box-col item-list img_bg"},[_c('div',{staticClass:"box-col item-list txt_main"},[_c('div',{staticClass:"txt-s mct-a sel_tit",domProps:{"textContent":_vm._s(item.title)}}),_vm._v(" "),_c('div',{staticClass:"item-minor"},[_c('em',{staticClass:"mct-d txt-s",domProps:{"textContent":_vm._s(item.vote_num)}}),_c('em',{staticClass:"mct-d txt-s"},[_vm._v("("+_vm._s(item.vote_num_rate)+")")])])]),_vm._v(" "),_c('div',{staticClass:"inner-line v_prog",style:({width:parseFloat(item.vote_num_rate)/100*6.2+'rem'})})])])}),0):_vm._e()]):(_vm.card.is_vote!=1)?_c('div',{staticClass:"line-around txt_sel"},[_c('ul',_vm._l((_vm.card.items),function(item){return _c('li',{staticClass:"sel_li",class:{'lay_bac':_vm.option_ids.indexOf(item.option_id)>-1}},[_c('label',{staticClass:"layout-box v_lay"},[_c('div',{staticClass:"box-col"},[_c('span',{staticClass:"mct-a txt-s"},[_vm._v(_vm._s(item.title))])]),_vm._v(" "),_c('span',{staticClass:"lay_inpu"},[_c('input',{attrs:{"type":"checkbox"},domProps:{"value":item.option_id},on:{"change":_vm.select}})])])])}),0)]):_c('div',{staticClass:"line-around txt_sel"},[_c('ul',_vm._l((_vm.card.items),function(item){return _c('div',{staticClass:"layout-box media-graphic v_result v_res_txt",class:{v_sel_bac:item.is_vote}},[_c('div',{staticClass:"box-col item-list img_bg"},[_c('div',{staticClass:"box-col item-list txt_main"},[_c('div',{staticClass:"txt-s mct-a sel_tit txt-cut"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('div',{staticClass:"item-minor"},[_c('em',{staticClass:"mct-d txt-s",domProps:{"textContent":_vm._s(item.vote_num)}}),_c('em',{staticClass:"mct-d txt-s"},[_vm._v("("+_vm._s(item.vote_num_rate)+")")])])]),_vm._v(" "),_c('div',{staticClass:"inner-line v_prog",style:({width:parseFloat(item.vote_num_rate)/100*7.3+'rem'})})])])}),0)])])])]),_vm._v(" "),_c('div',{staticClass:"mod"},[_c('div',{staticClass:"mod-list"},[_c('div',{staticClass:"vote_block"},[_c('div',{staticClass:"optimi_but"},[_c('div',{staticClass:"btn_buy"},[_c('a',{staticClass:"btnA",class:{disable:_vm.option_ids.length==0||_vm.card.act_status!=1||_vm.card.is_vote==1},attrs:{"href":"javascript:void(0);"},on:{"click":_vm.toupiao}},[_c('span',{staticClass:"txt_con txt-l",domProps:{"textContent":_vm._s(_vm.vote_text)}})])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box-col"},[_c('h3',{staticClass:"title mct-a txt-xs"},[_vm._v("投票选项")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"big_inpu"},[_c('div',{staticClass:"inner_rin"})])}]
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "QlVs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YatP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__marvel_bus__ = __webpack_require__("gVHq");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      key: 0,
      option_ids: []
    };
  },

  name: "card33",
  props: ['card'],
  computed: {
    //投票按钮文案
    vote_text: function vote_text() {
      if (this.card.act_status == 0) {
        return "投票尚未开始";
      } else if (this.card.act_status == 1) {
        if (this.card.is_vote == 1) {
          return this.card.button_have_vote_text;
        }
        return this.card.button_vote_text;
      } else {
        return "已结束";
      }
    },
    //最多可投票
    max_select_text: function max_select_text() {
      if (this.card.max_select_num == 1) {
        return "单选";
      } else {
        return "最多选" + this.card.max_select_num + "项";
      }
    },
    left_time_text: function left_time_text() {
      if (this.card.left_time > 0) {
        var t = this.card.left_time;
        var d = 0;
        var h = 0;
        var m = 0;
        var s = 0;
        d = Math.floor(t / 60 / 60 / 24);

        if (d > 10) {
          return "剩余" + d + "天";
        } else {
          h = Math.floor(t / 60 / 60 % 24);
          m = Math.floor(t / 60 % 60);
          h = h < 10 ? "0" + h : h;
          m = m < 10 ? "0" + m : m;
          if (d > 0) {
            d = d < 10 ? "0" + d : d;
            return "剩余" + d + "天" + h + "时" + m + "分";
          } else {
            s = Math.floor(t % 60);
            s = s < 10 ? "0" + s : s;
            return "剩余" + h + "时" + m + "分" + s + "秒";
          }
        }
      } else {
        this.card.act_status = 2;
        return "";
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    var setInter = setInterval(function () {
      _this.card.left_time--;
      if (_this.card.left_time < 0) {
        clearInterval(setInter);
      }
    }, 1000);
  },

  components: {},
  methods: {
    select: function select($event) {
      if (!$event.target.checked) {
        var index = this.option_ids.indexOf($event.target.defaultValue);
        if (index > -1) {
          this.option_ids.splice(index, 1);
        }
      } else {
        if (this.option_ids.length < this.card.max_select_num) {
          this.option_ids.push($event.target.defaultValue);
        } else {
          $event.target.checked = false;
        }
      }
    },
    toupiao: function toupiao() {
      if (this.option_ids.length > 0 && this.card.is_vote != 1 && this.card.act_status == 1) {
        var the = this;
        this.$http.post("/subject/h5/callbackoperator", {
          option_ids: this.option_ids.join(","),
          theme_id: this.card.theme_id,
          sort_type: this.card.sort_type,
          callback_type: "vote"
        }).then(function (rst) {
          if (rst.data && rst.data.status == 1) {
            the.card.is_vote = 1;
            the.card.items = rst.data.data.items;
          } else {
            if (rst.data.data && rst.data.data.msg) {
              Toast(rst.data.data.msg);
            } else {
              Toast("投票失败，请重试！");
            }
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "griX":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("+xJn")
  __webpack_require__("QlVs")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("YatP")
/* template */
var __vue_template__ = __webpack_require__("6CHS")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-204a31fa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

module.exports = Component.exports


/***/ })

});