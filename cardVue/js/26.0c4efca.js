webpackJsonp([26],{

/***/ "0inE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1P9d":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card10"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card m-panel card28",class:['m-col-'+_vm.card.col]},[_c('div',{staticClass:"card-wrap"},[_c('div',{staticClass:"card-main"},_vm._l((_vm.card.items),function(item){return _c('div',{staticClass:"m-item-box",on:{"click":function($event){return _vm.openUrl(item)}}},[_vm._m(1,true)])}),0)])]),_vm._v(" "),_c('container',{attrs:{"mkey":"page"}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('h2',{staticClass:"card-title"},[_vm._v("标题")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-diy-btn m-box-col m-box-center m-box-center-a"},[_c('h4',[_vm._v("页面1 "),_c('i',{staticClass:"m-font m-font-plus"})])])}]
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "UGTx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

  name: "card2",
  props: ['card'],
  components: {},
  methods: {
    openUrl: function openUrl(url) {}
  }
});

/***/ }),

/***/ "csAt":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("0inE")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("UGTx")
/* template */
var __vue_template__ = __webpack_require__("1P9d")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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