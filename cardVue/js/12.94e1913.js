webpackJsonp([12],{

/***/ "+vi0":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.card)?_c('div',{staticClass:"card31",on:{"click":function($event){return _vm.openUrl(_vm.card.scheme)}}},[_c('p',{staticClass:"agotime"},[_vm._v(_vm._s(_vm.card.title))]),_vm._v(" "),_c('div',{staticClass:"time"},[_c('span',{staticClass:"t_c",style:({'color':_vm.warning?_vm.card.number_warning_color:_vm.card.number_color })},[_vm._v(_vm._s(_vm.d))]),_c('span',{staticClass:"t_t",style:({'color':_vm.card.unit_color })},[_vm._v("天")]),_vm._v(" "),_c('span',{staticClass:"t_c",style:({'color':_vm.warning?_vm.card.number_warning_color:_vm.card.number_color })},[_vm._v(_vm._s(_vm.h))]),_c('span',{staticClass:"t_t",style:({'color':_vm.card.unit_color })},[_vm._v("时")]),_vm._v(" "),_c('span',{staticClass:"t_c",style:({'color':_vm.warning?_vm.card.number_warning_color:_vm.card.number_color })},[_vm._v(_vm._s(_vm.m))]),_c('span',{staticClass:"t_t",style:({'color':_vm.card.unit_color })},[_vm._v("分")]),_vm._v(" "),_c('span',{staticClass:"t_c",style:({'color':_vm.warning?_vm.card.number_warning_color:_vm.card.number_color })},[_vm._v(_vm._s(_vm.s))]),_c('span',{staticClass:"t_t",style:({'color':_vm.card.unit_color })},[_vm._v("秒")])])]):_vm._e()}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "Ixs5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cEm2":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("Ixs5")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("fcS+")
/* template */
var __vue_template__ = __webpack_require__("+vi0")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b38261c"
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

/***/ "fcS+":
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "card31",
  props: ['card'],
  data: function data() {
    return {
      d: "",
      h: "",
      m: "",
      s: "",
      warning: false
    };
  },

  methods: {
    openUrl: function openUrl(url) {
      if (url) {
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].$emit("openScheme", url);
      }
    },
    init: function init() {
      var _this = this;

      var t = this.card.diff_endtime;
      var setInter = setInterval(function () {
        if (0 > _this.card.diff_warningtime) {
          _this.warning = true;
        }
        var d = 0;
        var h = 0;
        var m = 0;
        var s = 0;
        if (t > 0) {
          d = Math.floor(t / 60 / 60 / 24);
          h = Math.floor(t / 60 / 60 % 24);
          m = Math.floor(t / 60 % 60);
          s = Math.floor(t % 60);
        } else {
          clearInterval(setInter);
        }
        _this.d = d;
        _this.h = h < 10 ? '0' + h : h;
        _this.m = m < 10 ? '0' + m : m;
        _this.s = s < 10 ? '0' + s : s;
        t--;
        _this.card.diff_warningtime--;
      }, 1000);
    }
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ })

});