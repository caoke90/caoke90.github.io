webpackJsonp([16],{

/***/ "/Hs+":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("G3Dl")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("9gwO")
/* template */
var __vue_template__ = __webpack_require__("nP5X")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-31b04ba1"
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

/***/ "9gwO":
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

  name: "card26",
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
    addFollow: function addFollow(button) {
      button.sub_type = 1;
      this.$http.post(button.params.callback_url).then(function (resp) {
        if (resp.data && resp.data.status == 1) {} else {
          button.sub_type = 0;
        }
      }, function () {
        button.sub_type = 0;
      });
    },
    openUrl: function openUrl(url) {
      if (url) {
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].$emit("openScheme", url);
      }
    }
  }
});

/***/ }),

/***/ "G3Dl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nP5X":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card m-panel card26",class:['m-col-'+_vm.card.col]},[_c('div',{staticClass:"card-wrap"},[_c('div',{staticClass:"card-main"},_vm._l((_vm.card.items),function(button){return _c('div',{staticClass:"m-item-box",on:{"touchstart":function($event){return _vm.touchstart($event)},"touchmove":function($event){return _vm.touchmove($event)},"touchend":function($event){return _vm.touchmove($event)}}},[(button.pic)?_c('div',{staticClass:"m-diy-btn m-box-col m-box-center0 m-box-center-a",on:{"click":function($event){return _vm.openUrl(button.scheme)}}},[_c('mv-img',{attrs:{"needlazy":true,"src":button.pic}}),_c('h4',{domProps:{"textContent":_vm._s(button.title_sub)}})],1):_c('div',{staticClass:"m-diy-btn m-box-col m-box-center0 m-box-center-a",on:{"click":function($event){return _vm.openUrl(button.scheme)}}},[_c('h4',{staticClass:"m-text-cut",domProps:{"textContent":_vm._s(button.title_sub)}})])])}),0)])])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ })

});