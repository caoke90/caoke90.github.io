webpackJsonp([19],{

/***/ "/4VO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VbnY":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("/4VO")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("soKQ")
/* template */
var __vue_template__ = __webpack_require__("kytw")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b391f1e"
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

/***/ "kytw":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card m-panel card22"},[_c('a',{attrs:{"href":"javascript:;"}},[_c('div',{staticClass:"card-wrap"},[_c('div',{staticClass:"card-main",on:{"click":function($event){return _vm.openUrl(_vm.card.scheme)}}},[_c('div',{staticClass:"m-box"},[_c('div',{staticClass:"box-left m-box-col m-box-center-a"},[_c('span',{staticClass:"m-img-icon"},[_c('mv-img',{attrs:{"needlazy":true,"src":_vm.card.pic}})],1),_c('span',{staticClass:"main-link m-box m-box-center-a"},[_c('span',{staticClass:"main-text m-text-cut",domProps:{"textContent":_vm._s(_vm.card.desc)}})])]),_vm._v(" "),(_vm.card.scheme)?_c('div',{staticClass:"box-right m-box-center-a"},[_c('i',{staticClass:"m-font m-font-arrow-right"})]):_vm._e()])])])])])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "soKQ":
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  name: "card22",
  props: ['card'],
  components: {},
  methods: {
    openUrl: function openUrl(url) {
      if (url) {
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].$emit("openScheme", url);
      }
    }
  }
});

/***/ })

});