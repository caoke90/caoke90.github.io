webpackJsonp([11],{

/***/ "MkJW":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("xLQo")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("TTRd")
/* template */
var __vue_template__ = __webpack_require__("pHKz")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4e5823e4"
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

/***/ "TTRd":
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


/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {};
	},

	name: "card32",
	props: ['card'],
	components: {},
	methods: {
		openUrl: function openUrl(url) {
			if (url) {
				__WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].$emit("openScheme", url);
			}
		}
	},
	computed: {
		rate: function rate() {
			return parseInt(this.card.count * 10000 / this.card.total) / 100 + "%";
		},
		curcount: function curcount() {
			//数字三位分割
			return (this.card.count || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,').replace(/,/g, "<span style='font-size: 0.44rem;padding: 0 0.05rem'>,</span>");
		}
	},
	mounted: function mounted() {
		var _this = this;

		this.card.count = parseInt(this.card.count);
		this.card.update_url_freq = parseInt(this.card.update_url_freq) || 60;
		if (this.card.update_url) {
			var timer = setInterval(function () {
				_this.$http.get(_this.card.update_url).then(function (rst) {
					_this.card.count = rst.data.count;
				});
			}, this.card.update_url_freq * 1000);
		} else {
			//        this.card.auto_add_number_freq=parseInt(this.card.auto_add_number_freq)||60;
			//
			//				var timer = setInterval(() => {
			//					if(this.card.auto_add_number > 0) {
			//						if(this.card.count > this.card.auto_max_min) {
			//							clearInterval(timer);
			//						}else{
			//              this.card.count += parseInt(this.card.auto_add_number);
			//            }
			//					}else{
			//						if(this.card.count < this.card.auto_max_min) {
			//							clearInterval(timer);
			//						}else{
			//              this.card.count += parseInt(this.card.auto_add_number);
			//            }
			//					}
			//
			//				}, this.card.auto_add_number_freq * 1000)
		}
	}
});

/***/ }),

/***/ "pHKz":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card card32",on:{"click":function($event){return _vm.openUrl(_vm.card.scheme)}}},[_c('p',{staticClass:"agotime"},[_vm._v(_vm._s(_vm.card.title))]),_vm._v(" "),_c('div',{staticClass:"time",style:({'color':_vm.card.number_color }),domProps:{"innerHTML":_vm._s(_vm.curcount)}}),_vm._v(" "),(_vm.card.total&&_vm.card.isshow_rate==1)?_c('p',{staticClass:"wcbl"},[_vm._v("当前完成比例"),_c('span',{staticClass:"num"},[_vm._v(_vm._s(_vm.rate))])]):_vm._e()])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "xLQo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});