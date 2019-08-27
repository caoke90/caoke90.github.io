webpackJsonp([24],{

/***/ "5crF":
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


/* harmony default export */ __webpack_exports__["default"] = ({
	name: "card11",
	props: ['card'],
	data: function data() {
		return {
			show2: false
		};
	},
	components: {},
	methods: {
		load: function load() {
			var the = this;
			this.show2 = true;
			document.body.style.overflowY = "hidden";
			setTimeout(function () {
				the.show2 = false;
				document.body.style.overflowY = "scroll";
			}, the.card.duration || 3000);
		},

		jump: function jump() {
			this.show2 = false;
		}
	},
	mounted: function mounted() {
		var the = this;
		if (this.card.status) {
			this.$refs.img.onload = function () {
				the.load();
			};
		}
	}
});

/***/ }),

/***/ "9Ue+":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("yKen")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("5crF")
/* template */
var __vue_template__ = __webpack_require__("Je8N")
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

/***/ "Je8N":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show2),expression:"show2"}],staticClass:"card11"},[_c('div',{staticClass:"m-mask",on:{"touchstart":function($event){$event.stopPropagation();$event.preventDefault();}}}),_vm._v(" "),_c('div',{staticClass:"dialog"},[_c('div',{staticClass:"img-box"},[_c('a',{attrs:{"href":_vm.card.openurl}},[_c('img',{ref:"img",attrs:{"src":_vm.card.src}})])]),_vm._v(" "),_c('div',{staticClass:"close",on:{"click":function($event){_vm.show2=false}}},[_vm._v("\n        X\n      ")])])])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "yKen":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});