webpackJsonp([17],{

/***/ "JmNi":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card m-panel card24"},[_c('div',{staticClass:"card-wrap"},[_c('div',{staticClass:"card-main"},[(_vm.card.title)?_c('header',[_c('h2',{domProps:{"textContent":_vm._s(_vm.card.title)}})]):_vm._e(),_vm._v(" "),_c('article',{domProps:{"textContent":_vm._s(_vm.card.desc)},on:{"click":function($event){return _vm.openUrl(_vm.card.scheme)}}}),_vm._v(" "),(_vm.card.source)?_c('footer',[_vm._v("\n        来源："+_vm._s(_vm.card.source)+"\n      ")]):_vm._e()])])])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "LePs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dyQL":
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  name: "card24",
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

/***/ }),

/***/ "q5Q8":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("LePs")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("dyQL")
/* template */
var __vue_template__ = __webpack_require__("JmNi")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ef35ec54"
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