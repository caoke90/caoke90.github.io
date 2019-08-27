webpackJsonp([2],{

/***/ "+pMz":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{staticStyle:{"display":"none"},attrs:{"type":"file","value":""},on:{"change":function($event){return _vm.change($event)}}})}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "26cA":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("pUO/")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("Vpk8")
/* template */
var __vue_template__ = __webpack_require__("7Fv8")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9c23b66e"
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

/***/ "71vJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "7Fv8":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"weibo-title"},[_c('div',{staticClass:"m-img-box",on:{"click":_vm.jump_url}},[_c('mv-img',{attrs:{"needlazy":true,"src":_vm.card.user.avatar_large}}),_vm._v(" "),(_vm.card.user.verified_color)?_c('i',{staticClass:"m-icon",class:"m-icon-"+_vm.card.user.verified_color+"v"}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"m-box-col"},[_c('div',{ref:"msgbox",staticClass:"m-text-box"},[_c('a',{staticClass:"bouser",on:{"click":function($event){return _vm.openScheme('sinaweibo://userinfo?uid='+_vm.card.user.id)}}},[_vm._v(_vm._s(_vm.card.user.name))]),_vm._v(" "),_c('span',[_vm._v("被指派了任务")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{staticClass:"filmName",on:{"touchstart":function($event){return _vm.touchstart($event)},"touchmove":function($event){return _vm.touchmove($event)},"touchend":function($event){return _vm.touchmove($event)},"click":function($event){return _vm.openScheme('sinaweibo://pageinfo?containerid=100120'+_vm.card.film_id)}}},[_vm._v("\n\t\t\t\t  "+_vm._s(_vm.nameSplit(_vm.card.film_name))+"\n\t\t\t\t")]),_vm._v(" "),_c('span',{staticClass:"score"},[_vm._v(_vm._s(_vm.card.score))])])]),_vm._v(" "),_c('aside')])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "7xKp":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("oyUf")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("p778")
/* template */
var __vue_template__ = __webpack_require__("qz7I")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4f11c393"
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

/***/ "87qJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BBWU":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("TFP1")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("txW0")
/* template */
var __vue_template__ = __webpack_require__("DxHp")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-696c07e8"
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

/***/ "DxHp":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"m-ctrl-box"},[_c('div',{staticClass:"box-center",on:{"click":_vm.uplodClick,"touchstart":function($event){return _vm.touchstart($event)},"touchmove":function($event){return _vm.touchmove($event)},"touchend":function($event){return _vm.touchmove($event)}}},[_vm._v("\n    上传文件\n  ")]),_vm._v(" "),_c('span',{staticClass:"m-line-gradient"}),_vm._v(" "),_c('div',{staticClass:"box-center",on:{"click":_vm.uplodimgClick,"touchstart":function($event){return _vm.touchstart($event)},"touchmove":function($event){return _vm.touchmove($event)},"touchend":function($event){return _vm.touchmove($event)}}},[_vm._v("\n    上传图片\n  ")]),_vm._v(" "),_c('span',{staticClass:"m-line-gradient",on:{"touchstart":function($event){return _vm.touchstart($event)},"touchmove":function($event){return _vm.touchmove($event)},"touchend":function($event){return _vm.touchmove($event)}}}),_vm._v(" "),_c('div',{staticClass:"box-center"},[_vm._v("\n    提交\n  ")])])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "IM03":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("f6HV")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("tJty")
/* template */
var __vue_template__ = __webpack_require__("yus2")
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

/***/ "LAZ0":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("ZOAn")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("xw0m")
/* template */
var __vue_template__ = __webpack_require__("+pMz")
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

/***/ "TFP1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "UoQS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Vpk8":
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
	props: ['card', 'showTriangle', 'gomore'],
	data: function data() {
		return {
			isfollowed: false,
			conW: 0
		};
	},

	computed: {
		profileUrl: function profileUrl() {
			return this.card.user.profile_url.replace(/^http(|s):\/\/m.weibo.cn/, '');
		}
	},
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
		jump_url: function jump_url() {
			__WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].$emit("openScheme", 'sinaweibo://userinfo?uid=' + this.card.user.id);
		},
		openScheme: function openScheme(url) {
			__WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].$emit("openScheme", url);
		},
		nameSplit: function nameSplit(val) {
			var L = (val + "").trim().length;
			var W = 16;
			var H = 0;
			var clientW = document.documentElement.offsetWidth;
			if (clientW >= 320 && clientW < 375) {
				H = 12;
			} else if (clientW >= 375 && clientW < 414) {
				H = 14;
			} else if (clientW >= 414 && clientW < 768) {
				H = 16;
			}
			if (L < 14) {
				return val.trim();
			}
			return val.trim().substr(0, H) + "...";
		}
	},
	components: {},
	mounted: function mounted() {
		var conW = this.$refs.msgbox.offsetWidth;
		this.conW = conW;
	}
});

/***/ }),

/***/ "WbA8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__("71vJ");

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),

/***/ "YArK":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weibo-media"},[_c('ul',{staticClass:"m-auto-list"},_vm._l((_vm.card.card_info.big_card.object.small_pics),function(pic,index){return _c('li',{staticClass:"m-auto-box"},[_c('div',{staticClass:"m-img-box",on:{"click":function($event){return _vm.thumbnails($event, index, _vm.card.card_info.big_card.object.large_pics)}}},[_c('mv-img',{attrs:{"needlazy":true,"src":pic.url}}),_vm._v(" "),_c('span',{staticClass:"feed-mark",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.delImg(index)}}},[_vm._v("X")])],1)])}),0)])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "ZI5+":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("UoQS")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("ziqy")
/* template */
var __vue_template__ = __webpack_require__("YArK")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4206882f"
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

/***/ "ZOAn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "d9jh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("71vJ");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (val && options.comma && val.indexOf(',') > -1) {
            val = val.split(',');
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "f6HV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gBzA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__("xLi8");
var parse = __webpack_require__("d9jh");
var formats = __webpack_require__("WbA8");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "oyUf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "p778":
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
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['card'],
  components: {
    weiboMedia: __webpack_require__("ZI5+")
  },
  methods: {
    touchstart: function touchstart(e) {
      if (__WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive) {
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive.classList.remove("m-active");
      }
      __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive = e.target;
      __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive.classList.add("m-active");
    },
    touchmove: function touchmove(e) {
      if (__WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive) {
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive.classList.remove("m-active");
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].mActive = null;
      }
    },
    getBlogLink: function getBlogLink(e, card) {
      if (e.target.nodeName !== "A") {
        var schemeClient = 'sinaweibo://detail?mblogid=' + card.strid;
        __WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].$emit("openScheme", schemeClient);
      }
    }
  }
});

/***/ }),

/***/ "pUO/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qz7I":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"weibo-main"},[_c('div',{staticClass:"weibo-og"},[_c('div',{staticClass:"weibo-text",domProps:{"innerHTML":_vm._s(_vm.card.card_info.html)},on:{"touchstart":function($event){return _vm.touchstart($event)},"touchmove":function($event){return _vm.touchmove($event)},"touchend":function($event){return _vm.touchmove($event)},"click":function($event){return _vm.getBlogLink($event, _vm.card)}}}),_vm._v(" "),_c('weibo-media',{attrs:{"card":_vm.card}})],1)])}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "qzOD":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.card)?_c('div',{staticClass:"card card9 m-panel"},[_c('div',{staticClass:"card-wrap"},[_c('div',{staticClass:"card-main"},[_c('weibo-title',{attrs:{"card":_vm.card}}),_vm._v(" "),_c('weibo-article',{attrs:{"card":_vm.card}}),_vm._v(" "),_c('weibo-footer',{attrs:{"card":_vm.card}})],1)])]):_vm._e()}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "rzJ4":
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "card9",
  data: function data() {
    return {};
  },

  props: ['card'],
  components: {
    weiboTitle: __webpack_require__("26cA"),
    weiboArticle: __webpack_require__("7xKp"),
    weiboFooter: __webpack_require__("BBWU")

  }
});

/***/ }),

/***/ "tJty":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__marvel_bus__ = __webpack_require__("gVHq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__marvel_components_file__ = __webpack_require__("LAZ0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__marvel_components_file___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__marvel_components_file__);
//
//
//


//添加依赖的公共组件

__WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].addModalComponent(__WEBPACK_IMPORTED_MODULE_1__marvel_components_file___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  name: "card100",
  props: ['card'],
  components: {
    other: __webpack_require__("vh36")
  },
  methods: {}
});

/***/ }),

/***/ "txW0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/marvel/bus.js
var bus = __webpack_require__("gVHq");

// EXTERNAL MODULE: ./node_modules/_qs@6.8.0@qs/lib/index.js
var lib = __webpack_require__("gBzA");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/utils/image.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * 检查图片是否有被压扁，如果有，返回比率
 * ref to http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 */
function detectVerticalSquash(img) {
  // 拍照在IOS7或以下的机型会出现照片被压扁的bug
  var data;
  var ih = img.naturalHeight;
  var canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  try {
    data = ctx.getImageData(0, 0, 1, ih).data;
  } catch (err) {
    console.log('Cannot check verticalSquash: CORS?');
    return 1;
  }
  var sy = 0;
  var ey = ih;
  var py = ih;
  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];
    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }
    py = ey + sy >> 1; // py = parseInt((ey + sy) / 2)
  }
  var ratio = py / ih;
  return ratio === 0 ? 1 : ratio;
}

/**
 * dataURI to blob, ref to https://gist.github.com/fupslot/5015897
 * @param dataURI
 */
function dataURItoBuffer(dataURI) {
  var byteString = atob(dataURI.split(',')[1]);
  var buffer = new ArrayBuffer(byteString.length);
  var view = new Uint8Array(buffer);
  for (var i = 0; i < byteString.length; i++) {
    view[i] = byteString.charCodeAt(i);
  }
  return buffer;
}
function dataURItoBlob(dataURI) {
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  var buffer = dataURItoBuffer(dataURI);
  return new Blob([buffer], { type: mimeString });
}

/**
 * 获取图片的orientation
 * ref to http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
 */
function getOrientation(buffer) {
  var view = new DataView(buffer);
  if (view.getUint16(0, false) != 0xFFD8) return -2;
  var length = view.byteLength,
      offset = 2;
  while (offset < length) {
    var marker = view.getUint16(offset, false);
    offset += 2;
    if (marker == 0xFFE1) {
      if (view.getUint32(offset += 2, false) != 0x45786966) return -1;
      var little = view.getUint16(offset += 6, false) == 0x4949;
      offset += view.getUint32(offset + 4, little);
      var tags = view.getUint16(offset, little);
      offset += 2;
      for (var i = 0; i < tags; i++) {
        if (view.getUint16(offset + i * 12, little) == 0x0112) return view.getUint16(offset + i * 12 + 8, little);
      }
    } else if ((marker & 0xFF00) != 0xFF00) break;else offset += view.getUint16(offset, false);
  }
  return -1;
}

/**
 * 修正拍照时图片的方向
 * ref to http://stackoverflow.com/questions/19463126/how-to-draw-photo-with-correct-orientation-in-canvas-after-capture-photo-by-usin
 */
function orientationHelper(canvas, ctx, orientation) {
  var w = canvas.width,
      h = canvas.height;
  if (orientation > 4) {
    canvas.width = h;
    canvas.height = w;
  }
  switch (orientation) {
    case 2:
      ctx.translate(w, 0);
      ctx.scale(-1, 1);
      break;
    case 3:
      ctx.translate(w, h);
      ctx.rotate(Math.PI);
      break;
    case 4:
      ctx.translate(0, h);
      ctx.scale(1, -1);
      break;
    case 5:
      ctx.rotate(0.5 * Math.PI);
      ctx.scale(1, -1);
      break;
    case 6:
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(0, -h);
      break;
    case 7:
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(w, -h);
      ctx.scale(-1, 1);
      break;
    case 8:
      ctx.rotate(-0.5 * Math.PI);
      ctx.translate(-w, 0);
      break;
  }
}

/**
 * 压缩图片
 */
function compress(file, options, callback) {
  var reader = new FileReader();
  reader.onload = function (evt) {
    if (options.compress === false) {
      // 不启用压缩 & base64上传 的分支，不做任何处理，直接返回文件的base64编码
      file.base64 = evt.target.result;
      callback(file);
      return;
    }

    // 启用压缩的分支
    var img = new Image();
    img.onload = function () {
      var ratio = detectVerticalSquash(img);
      var orientation = getOrientation(dataURItoBuffer(img.src));
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');

      var maxW = options.compress.width;
      var maxH = options.compress.height;
      var w = img.width;
      var h = img.height;
      var dataURL = void 0;

      if (w < h && h > maxH) {
        w = parseInt(maxH * img.width / img.height);
        h = maxH;
      } else if (w >= h && w > maxW) {
        h = parseInt(maxW * img.height / img.width);
        w = maxW;
      }

      canvas.width = w;
      canvas.height = h;

      if (orientation > 0) {
        orientationHelper(canvas, ctx, orientation);
      }
      ctx.drawImage(img, 0, 0, w, h / ratio);

      if (/image\/jpeg/.test(file.type) || /image\/jpg/.test(file.type)) {
        dataURL = canvas.toDataURL('image/jpeg', options.compress.quality);
      } else {
        dataURL = canvas.toDataURL(file.type);
      }

      if (options.type == 'file') {
        if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
          // 压缩出错，以文件方式上传的，采用原文件上传
          console.warn('Compress fail, dataURL is ' + dataURL + '. Next will use origin file to upload.');
          callback(file);
        } else {
          var blob = dataURItoBlob(dataURL);
          blob.id = file.id;
          blob.name = file.name;
          blob.lastModified = file.lastModified;
          blob.lastModifiedDate = file.lastModifiedDate;
          callback(blob);
        }
      } else {
        if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
          // 压缩失败，以base64上传的，直接报错不上传
          options.onError(file, new Error('Compress fail, dataURL is ' + dataURL + '.'));
          callback();
        } else {
          file.base64 = dataURL;
          callback(file);
        }
      }
    };
    img.src = evt.target.result;
  };
  reader.readAsDataURL(file);
}

/* harmony default export */ var utils_image = ({
  compress: compress
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/other/weibo-footer.vue
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





/* harmony default export */ var weibo_footer = __webpack_exports__["default"] = ({
  props: ['card'],
  data: function data() {
    return {};
  },
  created: function created() {},

  watch: {},
  components: {},
  computed: {},
  methods: {

    uplodClick: function uplodClick() {
      var self = this;
      //获取一个文件
      bus["a" /* default */].$emit("getFile", function (file) {
        var formData = new FormData();
        formData.append("file", file);
        formData.append("dat", "sdsdsd");
        var config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        bus["a" /* default */].$http.post("/upload", formData, config).then(function (rst) {
          self.card.card_info.big_card.object.small_pics.push(rst.data.file);
          self.card.card_info.big_card.object.large_pics.push(rst.data.file);
        });
      });
    },
    uplodimgClick: function uplodimgClick() {
      var self = this;
      //获取一个文件
      bus["a" /* default */].$emit("getFile", function (imgfile) {

        var options = {
          //图片的最大宽高
          compress: {
            width: 1600,
            height: 1600,
            quality: 1
          }
        };

        utils_image.compress(imgfile, options, function (file) {
          if (file) {
            var formData = new FormData();
            formData.append("file", file);
            var config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            };
            bus["a" /* default */].$http.post("/upload", formData, config).then(function (rst) {
              self.card.card_info.big_card.object.small_pics.push(rst.data.file);
              self.card.card_info.big_card.object.large_pics.push(rst.data.file);
            });
          }
        });
        //          var formData = new FormData();
        //          formData.append("file", file)
        //          let config = {
        //            headers: {
        //              'Content-Type': 'multipart/form-data'
        //            }
        //          }
        //          Bus.$http.post("/upload",formData,config).then(function (rst) {
        //            self.card.card_info.big_card.object.small_pics.push(rst.data.file)
        //            self.card.card_info.big_card.object.large_pics.push(rst.data.file)
        //          })
      });
    },
    touchstart: function touchstart(e) {
      if (bus["a" /* default */].mActive) {
        bus["a" /* default */].mActive.classList.remove("m-active");
      }
      bus["a" /* default */].mActive = e.currentTarget;
      bus["a" /* default */].mActive.classList.add("m-active");
    },
    touchmove: function touchmove(e) {
      if (bus["a" /* default */].mActive) {
        bus["a" /* default */].mActive.classList.remove("m-active");
        bus["a" /* default */].mActive = null;
      }
    }

  }
});

/***/ }),

/***/ "vh36":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("87qJ")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */
var __vue_script__ = __webpack_require__("rzJ4")
/* template */
var __vue_template__ = __webpack_require__("qzOD")
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

/***/ "xLi8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("71vJ");
var formats = __webpack_require__("WbA8");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) { // eslint-disable-line func-name-matching
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint'; // eslint-disable-line valid-typeof
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "xw0m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bus__ = __webpack_require__("gVHq");
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "file",
  data: function data() {
    return {
      callback: null
    };
  },

  props: ['card'],
  methods: {
    change: function change(e) {
      var self = this;
      var file = this.$el.files[0];

      self.callback(file);
    }

  },
  created: function created() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('getFile', function (callback) {
      _this.$el.click();
      _this.callback = callback;
    });
  },

  components: {}
});

/***/ }),

/***/ "yus2":
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('other',{attrs:{"card":_vm.card.weibo_info}})}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }

/***/ }),

/***/ "ziqy":
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
		return {
			showMark: false
		};
	},

	props: ['card'],
	computed: {
		// 多图情况下的布局模式。4张图为四宫格(type=a),其他为九宫格(type=b)。
		type: function type() {
			if (this.card.card_info.big_card.object.small_pics && this.card.card_info.big_card.object.small_pics.length === 4) {
				return 'a';
			}
			return 'b';
		},

		styles: function styles() {
			var W = 150;
			var w = this.card.pics[0].geo.width;
			var h = this.card.pics[0].geo.height;
			if (h / w > 16 / 9) {
				this.showMark = true;
			}
			return {
				singleImg: {
					width: w > W ? W / 16 + 'rem' : w / 16 + 'rem',
					height: w > W ? W * h / w / 16 + 'rem' : h / 16 + 'rem'
				}
			};
		}
	},
	components: {},
	methods: {
		delImg: function delImg(index) {
			this.card.card_info.big_card.object.small_pics.splice(index, 1);
			this.card.card_info.big_card.object.large_pics.splice(index, 1);
		},
		thumbnails: function thumbnails(e, index, cardList) {
			var eTarget = e.target || e.srcElement;
			var list = this.formatThumbItem(eTarget, cardList, index);
			__WEBPACK_IMPORTED_MODULE_0__marvel_bus__["a" /* default */].$emit('moviePic', index, list);
		},

		// 拼出pswp需要的数据格式
		formatThumbItem: function formatThumbItem(target, cardList, index) {
			// 找出父结点
			var clickedListItem = this.closest(target, function (el) {
				return el.classList.contains('weibo-media');
			});

			var cards = cardList.map(function (card, i) {
				if (!card.width) {
					var style = window.getComputedStyle ? window.getComputedStyle(target, null) : null || target.currentStyle;
					var windowWidth = document.documentElement.clientWidth || window.innerWidth;
					card.width = windowWidth;
					card.height = parseFloat(style.height) / parseFloat(style.width) * windowWidth;
				}
				return {
					src: card.url, // 大图
					w: card.width, // 大图宽度
					h: card.height, // 大图高度
					msrc: card.url, // 缩略图
					el: clickedListItem.getElementsByTagName('img')[i] // 缩略图对应的img DOM
				};
			});
			return cards;
		},
		closest: function closest(el, fn) {
			return el && (fn(el) ? el : this.closest(el.parentNode, fn));
		}
	}
});

/***/ })

});