webpackJsonp([4],{

/***/ "/Bf6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parentMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return childMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_router__ = __webpack_require__("adVT");


var parentMixin = {
  mounted: function mounted() {
    if (this.value >= 0) {
      this.currentIndex = this.value;
    }
    this.updateIndex();
  },

  methods: {
    updateIndex: function updateIndex() {
      if (!this.$children || !this.$children.length) return;
      this.number = this.$children.length;
      var children = this.$children;
      for (var i = 0; i < children.length; i++) {
        children[i].currentIndex = i;
        if (children[i].currentSelected) {
          this.index = i;
        }
      }
    }
  },
  props: {
    value: Number
  },
  watch: {
    currentIndex: function currentIndex(val, oldVal) {
      oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false);
      val > -1 && this.$children[val] && (this.$children[val].currentSelected = true);
      this.$emit('input', val);
      this.$emit('on-index-change', val, oldVal);
    },
    index: function index(val) {
      this.currentIndex = val;
    },
    value: function value(val) {
      this.index = val;
    }
  },
  data: function data() {
    return {
      index: -1,
      currentIndex: this.index,
      number: this.$children.length
    };
  }
};

var childMixin = {
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.$parent.updateIndex();
  },
  beforeDestroy: function beforeDestroy() {
    var $parent = this.$parent;
    this.$nextTick(function () {
      $parent.updateIndex();
    });
  },

  methods: {
    onItemClick: function onItemClick(hasLink) {
      var _this = this;

      if (this.$parent.preventDefault) {
        this.$parent.$emit('on-before-index-change', this.currentIndex);
        return;
      }
      if (typeof this.disabled === 'undefined' || this.disabled === false) {
        this.currentSelected = true;
        this.$parent.currentIndex = this.currentIndex;
        this.$nextTick(function () {
          _this.$emit('on-item-click', _this.currentIndex);
        });
      }
      if (hasLink === true) {
        Object(__WEBPACK_IMPORTED_MODULE_0__libs_router__["a" /* go */])(this.link, this.$router);
      }
    }
  },
  watch: {
    currentSelected: function currentSelected(val) {
      if (val) {
        this.$parent.index = this.currentIndex;
      }
    },
    selected: function selected(val) {
      this.currentSelected = val;
    }
  },
  data: function data() {
    return {
      currentIndex: -1,
      currentSelected: this.selected
    };
  }
};



/***/ }),

/***/ "241+":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('tab',_vm._l((_vm.card.mkeyArr),function(v,k){return _c('tab-item',{key:k,attrs:{"selected":_vm.tabIndex==k,"path":v.mkey},on:{"on-item-click":_vm.handler}},[_vm._v(_vm._s(v.name))])}),1),_vm._v(" "),_vm._l((_vm.card.mkeyArr),function(v,k){return _c('div',{key:k},[_c('container',{directives:[{name:"show",rawName:"v-show",value:(_vm.tabIndex===k),expression:"tabIndex===k"}],attrs:{"mkey":v.mkey}})],1)})],2)}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "2IKC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6ONn":
/***/ (function(module, exports, __webpack_require__) {

var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("tfs3")
/* template */
var __vue_template__ = __webpack_require__("PZPG")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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

/***/ "GPfv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PZPG":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-tab-item",class:[_vm.currentSelected ? _vm.activeClass : '', {
    'vux-tab-selected': _vm.currentSelected,
    'vux-tab-disabled': _vm.disabled 
  }],style:(_vm.style),on:{"click":_vm.onItemClick}},[_vm._t("default"),_vm._v(" "),(typeof _vm.badgeLabel !== 'undefined' && _vm.badgeLabel !== '')?_c('span',{staticClass:"vux-tab-item-badge",style:({
      background: _vm.badgeBackground,
      color: _vm.badgeColor
    })},[_vm._v("\n  "+_vm._s(_vm.badgeLabel))]):_vm._e()],2)}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "QVMv":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-tab-wrap",class:_vm.barPosition === 'top' ? 'vux-tab-bar-top' : ''},[_c('div',{staticClass:"vux-tab-container"},[_c('div',{ref:"nav",staticClass:"vux-tab",class:[{'vux-tab-no-animate': !_vm.animate},{ scrollable: _vm.scrollable }]},[_vm._t("default"),_vm._v(" "),(_vm.animate)?_c('div',{staticClass:"vux-tab-ink-bar",class:_vm.barClass,style:(_vm.barStyle)},[(_vm.customBarWidth)?_c('span',{staticClass:"vux-tab-bar-inner",style:(_vm.innerBarStyle)}):_vm._e()]):_vm._e()],2)])])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "VawC":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("2IKC")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("n+ay")
/* template */
var __vue_template__ = __webpack_require__("QVMv")
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

/***/ "adVT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = go;
/* unused harmony export getUrl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("hRKE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

function go(url, $router) {
  if (/^javas/.test(url) || !url) return;
  var useRouter = (typeof url === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(url)) === 'object' || $router && typeof url === 'string' && !/http/.test(url);
  if (useRouter) {
    if ((typeof url === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(url)) === 'object' && url.replace === true) {
      $router.replace(url);
    } else {
      url === 'BACK' ? $router.go(-1) : $router.push(url);
    }
  } else {
    window.location.href = url;
  }
}

function getUrl(url, $router) {
  // Make sure the href is right in hash mode
  if ($router && !$router._history && typeof url === 'string' && !/http/.test(url)) {
    return '#!' + url;
  }
  return url && (typeof url === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(url)) !== 'object' ? url : 'javascript:void(0);';
}

/***/ }),

/***/ "fff2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue__ = __webpack_require__("VawC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue__ = __webpack_require__("6ONn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {

    return {
      tabIndex: this.card.tabIndex || 0
    };
  },

  props: ['card'],
  components: {
    Tab: __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue___default.a,
    TabItem: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue___default.a
  },
  methods: {
    handler: function handler(tabIndex) {
      this.tabIndex = tabIndex;
    }
  },
  watch: {
    'card.tabIndex': function cardTabIndex(nval) {
      this.tabIndex = nval;
    }
  }
});

/***/ }),

/***/ "n+ay":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__ = __webpack_require__("/Bf6");
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
  name: 'tab',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__["b" /* parentMixin */]],
  mounted: function mounted() {
    var _this = this;

    // stop bar anmination on first loading
    this.$nextTick(function () {
      setTimeout(function () {
        _this.hasReady = true;
      }, 0);
    });
  },

  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String],
    preventDefault: Boolean,
    scrollThreshold: {
      type: Number,
      default: 4
    },
    barPosition: {
      type: String,
      default: 'bottom',
      validator: function validator(val) {
        return ['bottom', 'top'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    barLeft: function barLeft() {
      if (this.hasReady) {
        var nav = this.$refs.nav;
        var count = this.scrollable ? nav.offsetWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return this.currentIndex * (100 / count) + '%';
      }
    },
    barRight: function barRight() {
      if (this.hasReady) {
        var nav = this.$refs.nav;
        var count = this.scrollable ? nav.offsetWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return (count - this.currentIndex - 1) * (100 / count) + '%';
      }
    },

    // when prop:custom-bar-width
    innerBarStyle: function innerBarStyle() {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        background: this.barActiveColor || this.activeColor
      };
    },

    // end
    barStyle: function barStyle() {
      var commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      };
      if (!this.customBarWidth) {
        commonStyle.background = this.barActiveColor || this.activeColor;
      } else {
        commonStyle.background = 'transparent'; // when=prop:custom-bar-width
      }
      return commonStyle;
    },
    barClass: function barClass() {
      return {
        'vux-tab-ink-bar-transition-forward': this.direction === 'forward',
        'vux-tab-ink-bar-transition-backward': this.direction === 'backward'
      };
    },
    scrollable: function scrollable() {
      return this.number > this.scrollThreshold;
    }
  },
  watch: {
    currentIndex: function currentIndex(newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward';
      this.$emit('on-index-change', newIndex, oldIndex);
      this.hasReady && this.scrollToActiveTab();
    }
  },
  data: function data() {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    };
  },

  methods: {
    scrollToActiveTab: function scrollToActiveTab() {
      var _this2 = this;

      if (!this.scrollable || !this.$children || !this.$children.length) {
        return;
      }
      var currentIndexTab = this.$children[this.currentIndex].$el;
      var count = 0;
      // scroll animation
      var step = function step() {
        var scrollDuration = 15;
        var nav = _this2.$refs.nav;
        nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration;
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }
});

/***/ }),

/***/ "oIZF":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("GPfv")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("fff2")
/* template */
var __vue_template__ = __webpack_require__("241+")
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

/***/ "tfs3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__ = __webpack_require__("/Bf6");
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
  name: 'tab-item',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__["a" /* childMixin */]],
  props: {
    activeClass: String,
    disabled: Boolean,
    badgeBackground: {
      type: String,
      default: '#f74c31'
    },
    badgeColor: {
      type: String,
      default: '#fff'
    },
    badgeLabel: String
  },
  computed: {
    style: function style() {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      };
    }
  }
});

/***/ })

});