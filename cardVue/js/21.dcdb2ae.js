webpackJsonp([21],{

/***/ "O099":
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
    openUrl: function openUrl(url) {
      if (url) {
        Bus.$emit("openScheme", url);
      }
    }
  }
});

/***/ }),

/***/ "RmvG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vDTy":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card m-panel card2",class:['m-col-'+_vm.card.col]},[_c('div',{staticClass:"card-wrap"},[_c('div',{staticClass:"card-main"},[(_vm.card.title)?_c('h2',{staticClass:"card-title"},[_vm._v("\n        "+_vm._s(_vm.card.title)+"\n      ")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"m-auto-list"},_vm._l((_vm.card.items),function(item){return _c('div',{staticClass:"m-auto-box",on:{"click":function($event){return _vm.openUrl(item.scheme)}}},[_c('div',{staticClass:"m-img-box m-imghold-square"},[_c('mv-img',{attrs:{"needlazy":true,"src":item.pic}})],1),_vm._v(" "),_c('div',{staticClass:"m-text-box"},[_c('h3',{staticClass:"m-text-cut"},[_vm._v(_vm._s(item.desc1))]),_vm._v(" "),_c('h4',{staticClass:"m-text-cut"},[_vm._v(_vm._s(item.desc2))])])])}),0)])])])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "vi2v":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("RmvG")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("O099")
/* template */
var __vue_template__ = __webpack_require__("vDTy")
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