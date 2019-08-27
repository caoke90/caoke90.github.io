webpackJsonp([8],{

/***/ "AUiJ":
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  name: "card25",
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

/***/ "Bm0k":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card m-panel card25 m-avatar-box",on:{"touchstart":function($event){return _vm.touchstart($event)},"touchmove":function($event){return _vm.touchmove($event)},"touchend":function($event){return _vm.touchmove($event)}}},[_c('div',{staticClass:"card-wrap"},[_c('div',{staticClass:"card-main"},[_c('div',{staticClass:"m-box"},[_c('div',{staticClass:"m-img-box",on:{"click":function($event){return _vm.openUrl(_vm.card.scheme)}}},[_c('mv-img',{attrs:{"needlazy":true,"src":_vm.card.user_profile_pic}}),_vm._v(" "),(_vm.card.user_verified_color)?_c('i',{staticClass:"m-icon",class:"m-icon-"+_vm.card.user_verified_color+"v"}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"m-box-col m-box-dir m-box-center"},[_c('div',{staticClass:"m-text-box",on:{"click":function($event){return _vm.openUrl(_vm.card.scheme)}}},[_c('h3',{staticClass:"m-text-cut",domProps:{"textContent":_vm._s(_vm.card.user_name)}}),_vm._v(" "),_c('h4',{staticClass:"m-text-cut",domProps:{"textContent":_vm._s(_vm.card.desc1)}}),_vm._v(" "),_c('h4',{staticClass:"m-text-cut",domProps:{"textContent":_vm._s(_vm.card.desc2)}})])]),_vm._v(" "),(_vm.card.button)?_c('div',{staticClass:"box-right m-box-center-a m-box-center m-btn-box",on:{"touchstart":function($event){$event.stopPropagation();return _vm.touchstart($event)}}},[(_vm.card.button.sub_type==0)?_c('span',{staticClass:"m-add-box",on:{"click":function($event){return _vm.addFollow(_vm.card.button)}}},[_c('i',{staticClass:"m-font m-font-follow"}),_vm._v(" "),_c('h4',[_vm._v("加关注")])]):_c('span',{staticClass:"m-add-box m-add-al"},[_c('i',{staticClass:"m-font m-font-followed"}),_vm._v(" "),_c('h4',[_vm._v("已关注")])])]):_vm._e()])])])])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "IgfS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dx0a":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "itXC":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("dx0a")
  __webpack_require__("IgfS")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("AUiJ")
/* template */
var __vue_template__ = __webpack_require__("Bm0k")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-16b33ca7"
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