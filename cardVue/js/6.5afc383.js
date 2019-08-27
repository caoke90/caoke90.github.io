webpackJsonp([6],{

/***/ "CFjt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LSZE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RwWh":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("LSZE")
  __webpack_require__("CFjt")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("ZKIn")
/* template */
var __vue_template__ = __webpack_require__("kUbr")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-185bec9a"
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


/***/ }),

/***/ "ZKIn":
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  name: "card20",
  props: ['card'],
  components: {},
  created: function created() {
    if (!this.card.col) {
      this.card.col = 2;
    }
  },
  computed: {
    itemsNum: function itemsNum() {
      var arr = [];
      var col = this.card.col;
      this.card.items.forEach(function (item, num) {
        if (num % col == 0) {
          arr[parseInt(num / col)] = [];
        }
        arr[parseInt(num / col)].push(num);
      });
      return arr;
    }
  },
  methods: {
    touchstart: function touchstart(e) {
      if (__WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive) {
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive.classList.remove("m-active");
      }
      __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive = e.currentTarget;
      __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive.classList.add("m-active");
    },
    touchmove: function touchmove(e) {
      if (__WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive) {
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive.classList.remove("m-active");
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive = null;
      }
    },
    imgclick: function imgclick(item) {
      if (item.media_info && item.media_info.stream_url) {
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].$emit("openScheme", item.media_info.stream_url);
      } else {
        this.openUrl(item.scheme);
      }
    },
    openUrl: function openUrl(url) {
      if (url) {
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].$emit("openScheme", url);
      }
    }
  }
});

/***/ }),

/***/ "kUbr":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card m-panel card20",class:['m-col-'+_vm.card.col]},[_c('div',{staticClass:"card-wrap"},[_c('div',{staticClass:"card-main"},[(_vm.card.title)?_c('h2',{staticClass:"card-title",domProps:{"textContent":_vm._s(_vm.card.title)}}):_vm._e(),_vm._v(" "),_vm._l((_vm.itemsNum),function(itemNum){return _c('div',[_c('div',{staticClass:" m-auto-list"},_vm._l((itemNum),function(index){return _c('div',{staticClass:"m-auto-box",on:{"touchstart":function($event){return _vm.touchstart($event)},"touchmove":function($event){return _vm.touchmove($event)},"touchend":function($event){return _vm.touchmove($event)}}},[_c('div',{staticClass:"m-img-box m-imghold-wide",on:{"click":function($event){return _vm.imgclick(_vm.card.items[index])}}},[_c('mv-img',{style:({height:_vm.card.height}),attrs:{"needlazy":true,"src":_vm.card.items[index].pic}}),_vm._v(" "),(_vm.card.items[index].media_info)?_c('div',{staticClass:"m-btn-round m-btn-media"},[_c('img',{attrs:{"src":__webpack_require__("v+Mm")}})]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"m-text-box",on:{"click":function($event){return _vm.openUrl(_vm.card.items[index].scheme)}}},[_c('h3',{staticClass:"m-text-cut",domProps:{"textContent":_vm._s(_vm.card.items[index].title)}}),_vm._v(" "),_c('h4',{domProps:{"innerHTML":_vm._s(_vm.card.items[index].title_sub)}})])])}),0),_vm._v(" "),_c('div',{staticClass:"m-panel"},[_vm._l((itemNum),function(index){return (_vm.card.col==2)?_c('div',{staticClass:"m-item-box"},[(_vm.card.items[index].bottom_info.scheme)?_c('div',{staticClass:"m-diy-btn m-box-col  m-box-center-a",on:{"touchstart":function($event){return _vm.touchstart($event)},"touchmove":function($event){return _vm.touchmove($event)},"touchend":function($event){return _vm.touchmove($event)},"click":function($event){return _vm.openUrl(_vm.card.items[index].bottom_info.scheme)}}},[_c('mv-img',{attrs:{"src":_vm.card.items[index].bottom_info.pic}}),_c('h4',{domProps:{"textContent":_vm._s(_vm.card.items[index].bottom_info.text)}})],1):_c('div',{staticClass:"m-diy-btn m-box-col  m-box-center-a"},[_c('mv-img',{attrs:{"src":_vm.card.items[index].bottom_info.pic}}),_c('h4',{domProps:{"textContent":_vm._s(_vm.card.items[index].bottom_info.text)}})],1)]):_vm._e()}),_vm._v(" "),_vm._l((itemNum),function(index){return (_vm.card.col==4)?_c('div',{staticClass:"m-item-box"},[(_vm.card.items[index].bottom_info.scheme)?_c('div',{staticClass:"m-diy-btn m-box-col m-box-center",on:{"touchstart":function($event){return _vm.touchstart($event)},"touchmove":function($event){return _vm.touchmove($event)},"touchend":function($event){return _vm.touchmove($event)},"click":function($event){return _vm.openUrl(_vm.card.items[index].bottom_info.scheme)}}},[_c('h4',{domProps:{"textContent":_vm._s(_vm.card.items[index].bottom_info.text)}})]):_c('div',{staticClass:"m-diy-btn m-box-col  m-box-center"},[_c('h4',{domProps:{"textContent":_vm._s(_vm.card.items[index].bottom_info.text)}})])]):_vm._e()})],2)])})],2)])])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "v+Mm":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

});