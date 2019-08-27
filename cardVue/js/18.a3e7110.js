webpackJsonp([18],{

/***/ "M2jt":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card card23"},[_c('a',{staticClass:"m-btn m-btn-block m-btn-white",class:[_vm.card.show_color,{'m-btn-disabled': !_vm.card.scheme }],on:{"click":function($event){return _vm.openUrl(_vm.card.scheme)}}},[_vm._v(_vm._s(_vm.card.desc))])])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "e1St":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kXD/":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("e1St")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("oyrR")
/* template */
var __vue_template__ = __webpack_require__("M2jt")
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


/***/ }),

/***/ "oyrR":
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  name: "card23",
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