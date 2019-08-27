webpackJsonp([15],{

/***/ "B7kK":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("X7/o")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("fxxi")
/* template */
var __vue_template__ = __webpack_require__("MfwA")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0011bbf0"
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

/***/ "MfwA":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card m-panel card28",class:['m-col-'+_vm.card.col]},[_c('div',{staticClass:"card-wrap"},[_c('div',{staticClass:"card-main"},_vm._l((_vm.card.items),function(item){return _c('div',{staticClass:"m-item-box",on:{"touchstart":function($event){return _vm.touchstart($event)},"touchmove":function($event){return _vm.touchmove($event)},"touchend":function($event){return _vm.touchmove($event)}}},[(item.pic)?_c('div',{staticClass:"m-diy-btn m-box-col m-box-center m-box-center-a",on:{"click":function($event){return _vm.openUrl(item.scheme)}}},[_c('mv-img',{attrs:{"needlazy":true,"src":item.pic}}),_c('h4',{domProps:{"textContent":_vm._s(item.title_sub)}})],1):_c('div',{staticClass:"m-diy-btn m-box-col m-box-center0 m-box-center-a",on:{"click":function($event){return _vm.openUrl(item.scheme)}}},[_c('h4',{staticClass:"m-text-cut",domProps:{"textContent":_vm._s(item.title_sub)}})])])}),0)])])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "X7/o":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fxxi":
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  name: "card28",
  props: ['card'],
  components: {},
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

    openUrl: function openUrl(url) {
      if (url) {
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].$emit("openScheme", url);
      }
    }
  }
});

/***/ })

});