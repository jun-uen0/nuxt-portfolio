module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/button-see-project-and-code","2":"components/introduction","3":"components/projects","4":"components/search","5":"components/tech-stack","6":"lang-ja.json","7":"pages/_slug","8":"pages/about","9":"pages/blog","10":"pages/contact","11":"pages/index","12":"pages/portfolio"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = {
  overflow: "Overflow Error",
  "not-basic": "Illegal Input",
  "invalid-input": "Invalid Input"
};
const e = Math.floor;
const r = String.fromCharCode;

function s(n2) {
  throw new RangeError(o[n2]);
}

const c = function (n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};

const u = function (n2, t2, o2) {
  let r2 = 0;

  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }

  return e(r2 + 36 * n2 / (n2 + 38));
};

function toASCII(o2) {
  return function (n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);

    const s2 = function (n3, t2) {
      const o4 = [];
      let e3 = n3.length;

      for (; e3--;) {
        o4[e3] = t2(n3[e3]);
      }

      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");

    return r2 + s2;
  }(o2, function (t2) {
    return n.test(t2) ? "xn--" + function (n2) {
      const t3 = [];

      const o3 = (n2 = function (n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;

        for (; o4 < e2;) {
          const r2 = n3.charCodeAt(o4++);

          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }

        return t4;
      }(n2)).length;

      let f = 128;
      let i = 0;
      let l = 72;

      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }

      const h = t3.length;
      let p = h;

      for (h && t3.push("-"); p < o3;) {
        let o4 = 2147483647;

        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }

        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;

        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;

            for (let o6 = 36;; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;

              if (n3 < s2) {
                break;
              }

              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }

            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }

        ++i, ++f;
      }

      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;

function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}

function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}

function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}

function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}

function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}

function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}

function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}

function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}

function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};

  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }

  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];

    if (s.length < 2) {
      continue;
    }

    const key = decode(s[1]);

    if (key === "__proto__" || key === "constructor") {
      continue;
    }

    const value = decodeQueryValue(s[2] || "");

    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }

  if (Array.isArray(val)) {
    return val.map(_val => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }

  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}

function stringifyQuery(query) {
  return Object.keys(query).map(k => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};

    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }

    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }

  get hostname() {
    return parseHost(this.host).hostname;
  }

  get port() {
    return parseHost(this.host).port || "";
  }

  get username() {
    return parseAuth(this.auth).username;
  }

  get password() {
    return parseAuth(this.auth).password || "";
  }

  get hasProtocol() {
    return this.protocol.length;
  }

  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }

  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }

  get searchParams() {
    const p = new URLSearchParams();

    for (const name in this.query) {
      const value = this.query[name];

      if (Array.isArray(value)) {
        value.forEach(v => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }

    return p;
  }

  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }

  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }

  get encodedAuth() {
    if (!this.auth) {
      return "";
    }

    const {
      username,
      password
    } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }

  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }

  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }

    Object.assign(this.query, url.query);

    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }

    if (url.hash) {
      this.hash = url.hash;
    }
  }

  toJSON() {
    return this.href;
  }

  toString() {
    return this.href;
  }

}

function isRelative(inputStr) {
  return ["./", "../"].some(str => inputStr.startsWith(str));
}

function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}

const TRAILING_SLASH_RE = /\/$|\/\?/;

function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }

  return TRAILING_SLASH_RE.test(input);
}

function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }

  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }

  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}

function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }

  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }

  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}

function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}

function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}

function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}

function cleanDoubleSlashes(input = "") {
  return input.split("://").map(str => str.replace(/\/{2,}/g, "/")).join("://");
}

function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }

  const _base = withoutTrailingSlash(base);

  if (input.startsWith(_base)) {
    return input;
  }

  return joinURL(_base, input);
}

function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }

  const _base = withoutTrailingSlash(base);

  if (input.startsWith(_base)) {
    return input.substr(_base.length) || "/";
  }

  return input;
}

function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search),
    ...query
  };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}

function getQuery(input) {
  return parseQuery(parseURL(input).search);
}

function isEmptyURL(url) {
  return !url || url === "/";
}

function isNonEmptyURL(url) {
  return url && url !== "/";
}

function joinURL(base, ...input) {
  let url = base || "";

  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }

  return url;
}

function createURL(input) {
  return new $URL(input);
}

function normalizeURL(input) {
  return createURL(input).toString();
}

function resolveURL(base, ...input) {
  const url = createURL(base);

  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }

  return url.toString();
}

function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }

  const [protocol = "", auth, hostAndPath] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?]*)(.*)?/) || []).splice(1);
  const {
    pathname,
    search,
    hash
  } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}

function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}

function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}

function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}

function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;

  if (!parsed.protocol) {
    return fullpath;
  }

  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withLeadingSlash = withLeadingSlash;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutTrailingSlash = withoutTrailingSlash;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)["URLSearchParams"]))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Social.vue?vue&type=template&id=16c1eb04&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper text-center"},[_vm._ssrNode("<a href=\"https://github.com/jun-uen0\" target=\"_blank\" aria-label=\"Github\" class=\"social-link hover:text-primary\"><i class=\"bx bxl-github\"></i></a> <a href=\"https://gitlab.com/jun-uen0\" target=\"_blank\" aria-label=\"Gitlab\" class=\"social-link hover:text-primary\"><i class=\"bx bxl-gitlab\"></i></a> <a href=\"https://twitter.com/home\" target=\"_blank\" aria-label=\"Twitter\" class=\"social-link hover:text-primary\"><i class=\"bx bxl-twitter\"></i></a> <a href=\"https://www.linkedin.com/in/jun-uen0/\" target=\"_blank\" aria-label=\"LinkedIn\" class=\"social-link hover:text-primary\"><i class=\"bx bxl-linkedin-square\"></i></a>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Social.vue?vue&type=template&id=16c1eb04&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Social.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Socialvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Social.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Socialvue_type_script_lang_js_ = (Socialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Social.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Socialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "468967fc"
  
)

/* harmony default export */ var Social = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const info = __webpack_require__(66);

const rootKeys = ['class-name', 'class', 'style'];

function propsToData(props, doc) {
  return Object.keys(props).reduce(function (data, key) {
    const k = key.replace(/.*:/, '');
    let obj = rootKeys.includes(k) ? data : data.attrs;
    const value = props[key];
    const {
      attribute
    } = info.find(info.html, key);

    if (key === 'v-bind') {
      let val = doc[value];

      if (!val) {
        val = eval(`(${value})`);
      }

      obj = Object.assign(obj, val);
    } else if (key.indexOf(':') === 0 || key.indexOf('v-bind:') === 0) {
      key = key.replace('v-bind:', '').replace(':', '');

      if (doc[value]) {
        obj[key] = doc[value];
      } else {
        obj[key] = eval(`(${value})`);
      }
    } else if (Array.isArray(value)) {
      obj[attribute] = value.join(' ');
    } else {
      obj[attribute] = value;
    }

    return data;
  }, {
    attrs: {}
  });
}
/**
 * Create the scoped slots from `node` template children. Templates for default
 * slots are processed as regular children in `processNode`.
 */


function slotsToData(node, h, doc) {
  const data = {};
  const children = node.children || [];
  children.forEach(child => {
    // Regular children and default templates are processed inside `processNode`.
    if (!isTemplate(child) || isDefaultTemplate(child)) {
      return;
    } // Non-default templates are converted into slots.


    data.scopedSlots = data.scopedSlots || {};
    const template = child;
    const name = getSlotName(template);
    const vDomTree = template.content.map(tmplNode => processNode(tmplNode, h, doc));

    data.scopedSlots[name] = function () {
      return vDomTree;
    };
  });
  return data;
}

function processNode(node, h, doc) {
  /**
   * Return raw value as it is
   */
  if (node.type === 'text') {
    return node.value;
  }

  const slotData = slotsToData(node || {}, h, doc);
  const propData = propsToData(node.props, doc);
  const data = Object.assign({}, slotData, propData);
  /**
   * Process child nodes, flat-mapping templates pointing to default slots.
   */

  const children = [];

  for (const child of node.children) {
    // Template nodes pointing to non-default slots are processed inside `slotsToData`.
    if (isTemplate(child) && !isDefaultTemplate(child)) {
      continue;
    }

    const processQueue = isDefaultTemplate(child) ? child.content : [child];
    children.push(...processQueue.map(node => processNode(node, h, doc)));
  }

  return h(node.tag, data, children);
}

const DEFAULT_SLOT = 'default';

function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}

function isTemplate(node) {
  return node.tag === 'template';
}

function getSlotName(node) {
  let name = '';

  for (const propName of Object.keys(node.props)) {
    if (!propName.startsWith('#') && !propName.startsWith('v-slot:')) {
      continue;
    }

    name = propName.split(/[:#]/, 2)[1];
    break;
  }

  return name || DEFAULT_SLOT;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'NuxtContent',
  functional: true,
  props: {
    document: {
      required: true
    }
  },

  render(h, {
    data,
    props
  }) {
    const {
      document
    } = props;
    const {
      body
    } = document || {};

    if (!body || !body.children || !Array.isArray(body.children)) {
      return;
    }

    let classes = [];

    if (Array.isArray(data.class)) {
      classes = data.class;
    } else if (typeof data.class === 'object') {
      const keys = Object.keys(data.class);
      classes = keys.filter(key => data.class[key]);
    } else {
      classes = [data.class];
    }

    data.class = classes.concat('nuxt-content');
    data.props = Object.assign({ ...body.props
    }, data.props);
    return h('div', data, body.children.map(child => processNode(child, h, document)));
  }

});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = obj[key].concat(val);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function extend(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = extend();
defu.fn = extend((obj, key, currentValue, _namespace) => {
  if (typeof obj[key] !== "undefined" && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.arrayFn = extend((obj, key, currentValue, _namespace) => {
  if (Array.isArray(obj[key]) && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.extend = extend;

module.exports = defu;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (context, inject) => inject('mail', {
  send: async config => {
    try {
      await context.app.$axios.$post('/mail/send', config);
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
});

exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("722116c3", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("014a34fa", content, true, context)
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("fe3d1842", content, true, context)
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("008470c0", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1bbc9cc0", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 23 */
/***/ (function(module) {

module.exports = JSON.parse("{\"ja\":\"日本語\",\"hello\":\"Hello, I am jun\",\"developer\":\"I am a Web Software Developer\",\"work\":\"I build websites and web apps\",\"situation\":\"One of my dreams is to become a blockchain developer. Work hard, study hard.\",\"see\":\"See Project\",\"code\":\"Source Code\",\"my-project\":\"Featured Projects\",\"techstacks\":\"Tech Stacks I use \",\"read-more\":\"Read more\",\"portfolio\":\"Portfolio\",\"blog\":\"Blog\",\"contact\":\"Contact\",\"about\":{\"title\":\"About me\",\"name\":\"Jun Ueno\",\"description\":\"Love camping, programming. I’m currently open to a new job opportunely. My favorite language is JavaScript, and frame-work is Vue.js/Nuxt.js. Also, I am a big fan of blockchain technology. My gaol as a web developer is becoming a blockchain developer. Backend-dev is for Laravel/PHP <3\"},\"project\":{\"gas\":{\"title\":\"Free Translate Web API using Google Apps Script\",\"description\":\"Nowadays, you can translate text files into any language. GCP, Bing Microsoft Translator, and so on. However, it costs a lot. You can use them freely until the limit. Although, someone figured out that you can use GCP translate for free. Google Apps Script has its original methods to use Google API, such as Maps API, YouTube API, and Translate API. They are all free. Each method has limitations. It would just stop. You don't need to register your credit card. In this project, you can create your own translate web API. See source code and try it.\"},\"videochat\":{\"title\":\"Video chat app (Text and Translate)\",\"description\":\"I created a video app that interprets a speaker's language into the listener's language. It's using Google Cloud Translate, but it's completely free. It's because I use Google Translate App as one of the Backend systems that translates the text.\"},\"smartcontract\":{\"title\":\"Smart Contract App using Nuxt.js\",\"description\":\"You can make a smart contract with Ethereum and connect to your Metamask account. The framework is Nuxt.js. You can create your own chian with AWS.\"},\"example\":{\"title\":\"\",\"description\":\"\"}}}");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;

  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;

  if (protoCheck) {
    return true;
  }

  const _encrypted = req.connection ? req.connection.encrypted : void 0;

  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;

  if (encryptedCheck) {
    return true;
  }

  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }

  return false;
}

module.exports = isHTTPS;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function isObject(val) {
  return val !== null && _typeof(val) === 'object' && !Array.isArray(val);
}

function _defu(baseObj, defaults) {
  if (!isObject(baseObj)) {
    return _defu({}, defaults);
  }

  if (!isObject(defaults)) {
    return _defu(baseObj, {});
  }

  var obj = Object.assign({}, defaults);

  for (var key in baseObj) {
    if (key === '__proto__' || key === 'constructor') {
      continue;
    }

    var val = baseObj[key];

    if (val === null) {
      continue;
    }

    if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key]);
    } else {
      obj[key] = val;
    }
  }

  return obj;
}

function defu() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(_defu, {});
}

module.exports = defu;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
module.exports = __webpack_require__(67);


/***/ }),
/* 27 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("0211d3d2", content, true)

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.prose{color:#4a5568;max-width:65ch}.prose [class~=lead]{color:#718096;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.prose a{color:#1a202c;text-decoration:underline;font-weight:500}.prose strong{color:#1a202c;font-weight:600}.prose ol[type=A]{--list-counter-style:upper-alpha}.prose ol[type=a]{--list-counter-style:lower-alpha}.prose ol[type=\"A s\"]{--list-counter-style:upper-alpha}.prose ol[type=\"a s\"]{--list-counter-style:lower-alpha}.prose ol[type=I]{--list-counter-style:upper-roman}.prose ol[type=i]{--list-counter-style:lower-roman}.prose ol[type=\"I s\"]{--list-counter-style:upper-roman}.prose ol[type=\"i s\"]{--list-counter-style:lower-roman}.prose ol[type=\"1\"]{--list-counter-style:decimal}.prose ol>li{position:relative;padding-left:1.75em}.prose ol>li:before{content:counter(list-item,decimal) \".\";content:counter(list-item,var(--list-counter-style,decimal)) \".\";position:absolute;font-weight:400;color:#a0aec0;left:0}.prose ul>li{position:relative;padding-left:1.75em}.prose ul>li:before{content:\"\";position:absolute;background-color:#e2e8f0;border-radius:50%;width:.375em;height:.375em;top:.6875em;left:.25em}.prose hr{border-color:#edf2f7;border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose blockquote{font-weight:500;font-style:italic;color:#1a202c;border-left-width:.25rem;border-left-color:#edf2f7;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.prose blockquote p:first-of-type:before{content:open-quote}.prose blockquote p:last-of-type:after{content:close-quote}.prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.prose h2{color:#1a202c;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.prose h3{font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.prose h3,.prose h4{color:#1a202c;font-weight:600}.prose h4{margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.prose figure figcaption{color:#a0aec0;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.prose code{color:#1a202c;font-weight:600;font-size:.875em}.prose code:after,.prose code:before{content:\"`\"}.prose a code{color:#1a202c}.prose pre{color:#edf2f7;background-color:#2d3748;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.prose pre code:after,.prose pre code:before{content:none}.prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.prose thead{color:#1a202c;font-weight:600;border-bottom-width:1px;border-bottom-color:#e2e8f0}.prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.prose tbody tr{border-bottom-width:1px;border-bottom-color:#edf2f7}.prose tbody tr:last-child{border-bottom-width:0}.prose tbody td{vertical-align:top;padding:.5714286em}.prose{font-size:1rem;line-height:1.75}.prose p{margin-top:1.25em;margin-bottom:1.25em}.prose figure,.prose img,.prose video{margin-top:2em;margin-bottom:2em}.prose figure>*{margin-top:0;margin-bottom:0}.prose h2 code{font-size:.875em}.prose h3 code{font-size:.9em}.prose ol,.prose ul{margin-top:1.25em;margin-bottom:1.25em}.prose li{margin-top:.5em;margin-bottom:.5em}.prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.prose>ul>li>:first-child{margin-top:1.25em}.prose>ul>li>:last-child{margin-bottom:1.25em}.prose>ol>li>:first-child{margin-top:1.25em}.prose>ol>li>:last-child{margin-bottom:1.25em}.prose ol ol,.prose ol ul,.prose ul ol,.prose ul ul{margin-top:.75em;margin-bottom:.75em}.prose h2+*,.prose h3+*,.prose h4+*,.prose hr+*{margin-top:0}.prose thead th:first-child{padding-left:0}.prose thead th:last-child{padding-right:0}.prose tbody td:first-child{padding-left:0}.prose tbody td:last-child{padding-right:0}.prose>:first-child{margin-top:0}.prose>:last-child{margin-bottom:0}.prose-sm{font-size:.875rem;line-height:1.7142857}.prose-sm p{margin-top:1.1428571em;margin-bottom:1.1428571em}.prose-sm [class~=lead]{font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.prose-sm blockquote{margin-top:1.3333333em;margin-bottom:1.3333333em;padding-left:1.1111111em}.prose-sm h1{font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.prose-sm h2{font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.prose-sm h3{font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.prose-sm h4{margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.prose-sm figure,.prose-sm img,.prose-sm video{margin-top:1.7142857em;margin-bottom:1.7142857em}.prose-sm figure>*{margin-top:0;margin-bottom:0}.prose-sm figure figcaption{font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.prose-sm code{font-size:.8571429em}.prose-sm h2 code{font-size:.9em}.prose-sm h3 code{font-size:.8888889em}.prose-sm pre{font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding:.6666667em 1em}.prose-sm ol,.prose-sm ul{margin-top:1.1428571em;margin-bottom:1.1428571em}.prose-sm li{margin-top:.2857143em;margin-bottom:.2857143em}.prose-sm ol>li{padding-left:1.5714286em}.prose-sm ol>li:before{left:0}.prose-sm ul>li{padding-left:1.5714286em}.prose-sm ul>li:before{height:.3571429em;width:.3571429em;top:.67857em;left:.2142857em}.prose-sm>ul>li p{margin-top:.5714286em;margin-bottom:.5714286em}.prose-sm>ul>li>:first-child{margin-top:1.1428571em}.prose-sm>ul>li>:last-child{margin-bottom:1.1428571em}.prose-sm>ol>li>:first-child{margin-top:1.1428571em}.prose-sm>ol>li>:last-child{margin-bottom:1.1428571em}.prose-sm ol ol,.prose-sm ol ul,.prose-sm ul ol,.prose-sm ul ul{margin-top:.5714286em;margin-bottom:.5714286em}.prose-sm hr{margin-top:2.8571429em;margin-bottom:2.8571429em}.prose-sm h2+*,.prose-sm h3+*,.prose-sm h4+*,.prose-sm hr+*{margin-top:0}.prose-sm table{font-size:.8571429em;line-height:1.5}.prose-sm thead th{padding-right:1em;padding-bottom:.6666667em;padding-left:1em}.prose-sm thead th:first-child{padding-left:0}.prose-sm thead th:last-child{padding-right:0}.prose-sm tbody td{padding:.6666667em 1em}.prose-sm tbody td:first-child{padding-left:0}.prose-sm tbody td:last-child{padding-right:0}.prose-sm>:first-child{margin-top:0}.prose-sm>:last-child{margin-bottom:0}.prose-lg{font-size:1.125rem;line-height:1.7777778}.prose-lg p{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-lg [class~=lead]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.prose-lg blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em}.prose-lg h1{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.prose-lg h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.prose-lg h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.prose-lg h4{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.prose-lg figure,.prose-lg img,.prose-lg video{margin-top:1.7777778em;margin-bottom:1.7777778em}.prose-lg figure>*{margin-top:0;margin-bottom:0}.prose-lg figure figcaption{font-size:.8888889em;line-height:1.5;margin-top:1em}.prose-lg code{font-size:.8888889em}.prose-lg h2 code{font-size:.8666667em}.prose-lg h3 code{font-size:.875em}.prose-lg pre{font-size:.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:.375rem;padding:1em 1.5em}.prose-lg ol,.prose-lg ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-lg li{margin-top:.6666667em;margin-bottom:.6666667em}.prose-lg ol>li{padding-left:1.6666667em}.prose-lg ol>li:before{left:0}.prose-lg ul>li{padding-left:1.6666667em}.prose-lg ul>li:before{width:.3333333em;height:.3333333em;top:.72222em;left:.2222222em}.prose-lg>ul>li p{margin-top:.8888889em;margin-bottom:.8888889em}.prose-lg>ul>li>:first-child{margin-top:1.3333333em}.prose-lg>ul>li>:last-child{margin-bottom:1.3333333em}.prose-lg>ol>li>:first-child{margin-top:1.3333333em}.prose-lg>ol>li>:last-child{margin-bottom:1.3333333em}.prose-lg ol ol,.prose-lg ol ul,.prose-lg ul ol,.prose-lg ul ul{margin-top:.8888889em;margin-bottom:.8888889em}.prose-lg hr{margin-top:3.1111111em;margin-bottom:3.1111111em}.prose-lg h2+*,.prose-lg h3+*,.prose-lg h4+*,.prose-lg hr+*{margin-top:0}.prose-lg table{font-size:.8888889em;line-height:1.5}.prose-lg thead th{padding-right:.75em;padding-bottom:.75em;padding-left:.75em}.prose-lg thead th:first-child{padding-left:0}.prose-lg thead th:last-child{padding-right:0}.prose-lg tbody td{padding:.75em}.prose-lg tbody td:first-child{padding-left:0}.prose-lg tbody td:last-child{padding-right:0}.prose-lg>:first-child{margin-top:0}.prose-lg>:last-child{margin-bottom:0}.prose-xl{font-size:1.25rem;line-height:1.8}.prose-xl p{margin-top:1.2em;margin-bottom:1.2em}.prose-xl [class~=lead]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em}.prose-xl blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em}.prose-xl h1{font-size:2.8em;margin-top:0;margin-bottom:.8571429em;line-height:1}.prose-xl h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:.8888889em;line-height:1.1111111}.prose-xl h3{font-size:1.5em;margin-top:1.6em;margin-bottom:.6666667em;line-height:1.3333333}.prose-xl h4{margin-top:1.8em;margin-bottom:.6em;line-height:1.6}.prose-xl figure,.prose-xl img,.prose-xl video{margin-top:2em;margin-bottom:2em}.prose-xl figure>*{margin-top:0;margin-bottom:0}.prose-xl figure figcaption{font-size:.9em;line-height:1.5555556;margin-top:1em}.prose-xl code{font-size:.9em}.prose-xl h2 code{font-size:.8611111em}.prose-xl h3 code,.prose-xl pre{font-size:.9em}.prose-xl pre{line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.1111111em 1.3333333em}.prose-xl ol,.prose-xl ul{margin-top:1.2em;margin-bottom:1.2em}.prose-xl li{margin-top:.6em;margin-bottom:.6em}.prose-xl ol>li{padding-left:1.8em}.prose-xl ol>li:before{left:0}.prose-xl ul>li{padding-left:1.8em}.prose-xl ul>li:before{width:.35em;height:.35em;top:.725em;left:.25em}.prose-xl>ul>li p{margin-top:.8em;margin-bottom:.8em}.prose-xl>ul>li>:first-child{margin-top:1.2em}.prose-xl>ul>li>:last-child{margin-bottom:1.2em}.prose-xl>ol>li>:first-child{margin-top:1.2em}.prose-xl>ol>li>:last-child{margin-bottom:1.2em}.prose-xl ol ol,.prose-xl ol ul,.prose-xl ul ol,.prose-xl ul ul{margin-top:.8em;margin-bottom:.8em}.prose-xl hr{margin-top:2.8em;margin-bottom:2.8em}.prose-xl h2+*,.prose-xl h3+*,.prose-xl h4+*,.prose-xl hr+*{margin-top:0}.prose-xl table{font-size:.9em;line-height:1.5555556}.prose-xl thead th{padding-right:.6666667em;padding-bottom:.8888889em;padding-left:.6666667em}.prose-xl thead th:first-child{padding-left:0}.prose-xl thead th:last-child{padding-right:0}.prose-xl tbody td{padding:.8888889em .6666667em}.prose-xl tbody td:first-child{padding-left:0}.prose-xl tbody td:last-child{padding-right:0}.prose-xl>:first-child{margin-top:0}.prose-xl>:last-child{margin-bottom:0}.prose-2xl{font-size:1.5rem;line-height:1.6666667}.prose-2xl p{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-2xl [class~=lead]{font-size:1.25em;line-height:1.4666667;margin-top:1.0666667em;margin-bottom:1.0666667em}.prose-2xl blockquote{margin-top:1.7777778em;margin-bottom:1.7777778em;padding-left:1.1111111em}.prose-2xl h1{font-size:2.6666667em;margin-top:0;margin-bottom:.875em;line-height:1}.prose-2xl h2{font-size:2em;margin-top:1.5em;margin-bottom:.8333333em;line-height:1.0833333}.prose-2xl h3{font-size:1.5em;margin-top:1.5555556em;margin-bottom:.6666667em;line-height:1.2222222}.prose-2xl h4{margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.prose-2xl figure,.prose-2xl img,.prose-2xl video{margin-top:2em;margin-bottom:2em}.prose-2xl figure>*{margin-top:0;margin-bottom:0}.prose-2xl figure figcaption{font-size:.8333333em;line-height:1.6;margin-top:1em}.prose-2xl code{font-size:.8333333em}.prose-2xl h2 code{font-size:.875em}.prose-2xl h3 code{font-size:.8888889em}.prose-2xl pre{font-size:.8333333em;line-height:1.8;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.2em 1.6em}.prose-2xl ol,.prose-2xl ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-2xl li{margin-top:.5em;margin-bottom:.5em}.prose-2xl ol>li{padding-left:1.6666667em}.prose-2xl ol>li:before{left:0}.prose-2xl ul>li{padding-left:1.6666667em}.prose-2xl ul>li:before{width:.3333333em;height:.3333333em;top:.66667em;left:.25em}.prose-2xl>ul>li p{margin-top:.8333333em;margin-bottom:.8333333em}.prose-2xl>ul>li>:first-child{margin-top:1.3333333em}.prose-2xl>ul>li>:last-child{margin-bottom:1.3333333em}.prose-2xl>ol>li>:first-child{margin-top:1.3333333em}.prose-2xl>ol>li>:last-child{margin-bottom:1.3333333em}.prose-2xl ol ol,.prose-2xl ol ul,.prose-2xl ul ol,.prose-2xl ul ul{margin-top:.6666667em;margin-bottom:.6666667em}.prose-2xl hr{margin-top:3em;margin-bottom:3em}.prose-2xl h2+*,.prose-2xl h3+*,.prose-2xl h4+*,.prose-2xl hr+*{margin-top:0}.prose-2xl table{font-size:.8333333em;line-height:1.4}.prose-2xl thead th{padding-right:.6em;padding-bottom:.8em;padding-left:.6em}.prose-2xl thead th:first-child{padding-left:0}.prose-2xl thead th:last-child{padding-right:0}.prose-2xl tbody td{padding:.8em .6em}.prose-2xl tbody td:first-child{padding-left:0}.prose-2xl tbody td:last-child{padding-right:0}.prose-2xl>:first-child{margin-top:0}.prose-2xl>:last-child{margin-bottom:0}.prose-red a,.prose-red a code{color:#e53e3e}.prose-orange a,.prose-orange a code{color:#dd6b20}.prose-yellow a,.prose-yellow a code{color:#d69e2e}.prose-green a,.prose-green a code{color:#38a169}.prose-teal a,.prose-teal a code{color:#319795}.prose-blue a,.prose-blue a code{color:#3182ce}.prose-indigo a,.prose-indigo a code{color:#5a67d8}.prose-purple a,.prose-purple a code{color:#805ad5}.prose-pink a,.prose-pink a code{color:#d53f8c}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-100{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.bg-gray-300{--bg-opacity:1;background-color:#e2e8f0;background-color:rgba(226,232,240,var(--bg-opacity))}.bg-gray-600{--bg-opacity:1;background-color:#718096;background-color:rgba(113,128,150,var(--bg-opacity))}.bg-indigo-600{--bg-opacity:1;background-color:#5a67d8;background-color:rgba(90,103,216,var(--bg-opacity))}.bg-primary{--bg-opacity:1;background-color:#4c942c;background-color:rgba(76,148,44,var(--bg-opacity))}.hover\\:bg-indigo-700:hover{--bg-opacity:1;background-color:#4c51bf;background-color:rgba(76,81,191,var(--bg-opacity))}.focus\\:bg-white:focus{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.border-gray-300{--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}.border-gray-500{--border-opacity:1;border-color:#a0aec0;border-color:rgba(160,174,192,var(--border-opacity))}.focus\\:border-gray-300:focus{--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded-full{border-radius:9999px}.border-2{border-width:2px}.border{border-width:1px}.border-b-2{border-bottom-width:2px}.block{display:block}.flex{display:flex}.table{display:table}.hidden{display:none}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-1{flex:1 1 0%}.order-last{order:9999}.font-normal{font-weight:400}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.h-6{height:1.5rem}.h-10{height:2.5rem}.h-32{height:8rem}.h-px{height:1px}.h-screen{height:100vh}.text-sm{font-size:.875rem}.text-base{font-size:1rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-2xl{font-size:1.5rem}.text-4xl{font-size:2.25rem}.leading-5{line-height:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.mx-3{margin-left:.75rem;margin-right:.75rem}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.my-8{margin-top:2rem;margin-bottom:2rem}.my-10{margin-top:2.5rem;margin-bottom:2.5rem}.mx-auto{margin-left:auto;margin-right:auto}.mt-1{margin-top:.25rem}.ml-1{margin-left:.25rem}.mt-2{margin-top:.5rem}.ml-3{margin-left:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.ml-6{margin-left:1.5rem}.mt-8{margin-top:2rem}.mb-8{margin-bottom:2rem}.ml-12{margin-left:3rem}.mt-16{margin-top:4rem}.mb-auto{margin-bottom:auto}.max-w-lg{max-width:32rem}.max-w-xl{max-width:36rem}.max-w-screen-lg{max-width:1024px}.max-w-screen-xl{max-width:1280px}.object-contain{-o-object-fit:contain;object-fit:contain}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.overflow-hidden{overflow:hidden}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-2{padding-top:.5rem}.pr-3{padding-right:.75rem}.pb-3{padding-bottom:.75rem}.pl-10{padding-left:2.5rem}.placeholder-gray-500::-moz-placeholder{--placeholder-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--placeholder-opacity))}.placeholder-gray-500:-ms-input-placeholder{--placeholder-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--placeholder-opacity))}.placeholder-gray-500::placeholder{--placeholder-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--placeholder-opacity))}.static{position:static}.absolute{position:absolute}.shadow-md{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.focus\\:shadow-outline:focus{box-shadow:0 0 0 3px rgba(66,153,225,.5)}.text-left{text-align:left}.text-center{text-align:center}.text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.text-gray-100{--text-opacity:1;color:#f7fafc;color:rgba(247,250,252,var(--text-opacity))}.text-gray-200{--text-opacity:1;color:#edf2f7;color:rgba(237,242,247,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-800{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.text-indigo-600{--text-opacity:1;color:#5a67d8;color:rgba(90,103,216,var(--text-opacity))}.text-primary{--text-opacity:1;color:#4c942c;color:rgba(76,148,44,var(--text-opacity))}.hover\\:text-black:hover{--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity))}.hover\\:text-gray-500:hover{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.hover\\:text-gray-600:hover{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.hover\\:text-primary:hover{--text-opacity:1;color:#4c942c;color:rgba(76,148,44,var(--text-opacity))}.uppercase{text-transform:uppercase}.hover\\:underline:hover{text-decoration:underline}.tracking-wide{letter-spacing:.025em}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.w-6{width:1.5rem}.w-auto{width:auto}.w-full{width:100%}.z-10{z-index:10}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-150{transition-duration:.15s}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:640px){.sm\\:container{width:100%}}@media (min-width:640px) and (min-width:640px){.sm\\:container{max-width:640px}}@media (min-width:640px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:640px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:640px) and (min-width:1280px){.sm\\:container{max-width:1280px}}@media (min-width:640px){.sm\\:prose{color:#4a5568;max-width:65ch}.sm\\:prose [class~=lead]{color:#718096;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.sm\\:prose a{color:#1a202c;text-decoration:underline;font-weight:500}.sm\\:prose strong{color:#1a202c;font-weight:600}.sm\\:prose ol[type=A]{--list-counter-style:upper-alpha}.sm\\:prose ol[type=a]{--list-counter-style:lower-alpha}.sm\\:prose ol[type=\"A s\"]{--list-counter-style:upper-alpha}.sm\\:prose ol[type=\"a s\"]{--list-counter-style:lower-alpha}.sm\\:prose ol[type=I]{--list-counter-style:upper-roman}.sm\\:prose ol[type=i]{--list-counter-style:lower-roman}.sm\\:prose ol[type=\"I s\"]{--list-counter-style:upper-roman}.sm\\:prose ol[type=\"i s\"]{--list-counter-style:lower-roman}.sm\\:prose ol[type=\"1\"]{--list-counter-style:decimal}.sm\\:prose ol>li{position:relative;padding-left:1.75em}.sm\\:prose ol>li:before{content:counter(list-item,decimal) \".\";content:counter(list-item,var(--list-counter-style,decimal)) \".\";position:absolute;font-weight:400;color:#a0aec0;left:0}.sm\\:prose ul>li{position:relative;padding-left:1.75em}.sm\\:prose ul>li:before{content:\"\";position:absolute;background-color:#e2e8f0;border-radius:50%;width:.375em;height:.375em;top:.6875em;left:.25em}.sm\\:prose hr{border-color:#edf2f7;border-top-width:1px;margin-top:3em;margin-bottom:3em}.sm\\:prose blockquote{font-weight:500;font-style:italic;color:#1a202c;border-left-width:.25rem;border-left-color:#edf2f7;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.sm\\:prose blockquote p:first-of-type:before{content:open-quote}.sm\\:prose blockquote p:last-of-type:after{content:close-quote}.sm\\:prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.sm\\:prose h2{color:#1a202c;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.sm\\:prose h3{font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.sm\\:prose h3,.sm\\:prose h4{color:#1a202c;font-weight:600}.sm\\:prose h4{margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.sm\\:prose figure figcaption{color:#a0aec0;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.sm\\:prose code{color:#1a202c;font-weight:600;font-size:.875em}.sm\\:prose code:after,.sm\\:prose code:before{content:\"`\"}.sm\\:prose a code{color:#1a202c}.sm\\:prose pre{color:#edf2f7;background-color:#2d3748;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.sm\\:prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.sm\\:prose pre code:after,.sm\\:prose pre code:before{content:none}.sm\\:prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.sm\\:prose thead{color:#1a202c;font-weight:600;border-bottom-width:1px;border-bottom-color:#e2e8f0}.sm\\:prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.sm\\:prose tbody tr{border-bottom-width:1px;border-bottom-color:#edf2f7}.sm\\:prose tbody tr:last-child{border-bottom-width:0}.sm\\:prose tbody td{vertical-align:top;padding:.5714286em}.sm\\:prose{font-size:1rem;line-height:1.75}.sm\\:prose p{margin-top:1.25em;margin-bottom:1.25em}.sm\\:prose figure,.sm\\:prose img,.sm\\:prose video{margin-top:2em;margin-bottom:2em}.sm\\:prose figure>*{margin-top:0;margin-bottom:0}.sm\\:prose h2 code{font-size:.875em}.sm\\:prose h3 code{font-size:.9em}.sm\\:prose ol,.sm\\:prose ul{margin-top:1.25em;margin-bottom:1.25em}.sm\\:prose li{margin-top:.5em;margin-bottom:.5em}.sm\\:prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.sm\\:prose>ul>li>:first-child{margin-top:1.25em}.sm\\:prose>ul>li>:last-child{margin-bottom:1.25em}.sm\\:prose>ol>li>:first-child{margin-top:1.25em}.sm\\:prose>ol>li>:last-child{margin-bottom:1.25em}.sm\\:prose ol ol,.sm\\:prose ol ul,.sm\\:prose ul ol,.sm\\:prose ul ul{margin-top:.75em;margin-bottom:.75em}.sm\\:prose h2+*,.sm\\:prose h3+*,.sm\\:prose h4+*,.sm\\:prose hr+*{margin-top:0}.sm\\:prose thead th:first-child{padding-left:0}.sm\\:prose thead th:last-child{padding-right:0}.sm\\:prose tbody td:first-child{padding-left:0}.sm\\:prose tbody td:last-child{padding-right:0}.sm\\:prose>:first-child{margin-top:0}.sm\\:prose>:last-child{margin-bottom:0}.sm\\:prose-sm{font-size:.875rem;line-height:1.7142857}.sm\\:prose-sm p{margin-top:1.1428571em;margin-bottom:1.1428571em}.sm\\:prose-sm [class~=lead]{font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.sm\\:prose-sm blockquote{margin-top:1.3333333em;margin-bottom:1.3333333em;padding-left:1.1111111em}.sm\\:prose-sm h1{font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.sm\\:prose-sm h2{font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.sm\\:prose-sm h3{font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.sm\\:prose-sm h4{margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.sm\\:prose-sm figure,.sm\\:prose-sm img,.sm\\:prose-sm video{margin-top:1.7142857em;margin-bottom:1.7142857em}.sm\\:prose-sm figure>*{margin-top:0;margin-bottom:0}.sm\\:prose-sm figure figcaption{font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.sm\\:prose-sm code{font-size:.8571429em}.sm\\:prose-sm h2 code{font-size:.9em}.sm\\:prose-sm h3 code{font-size:.8888889em}.sm\\:prose-sm pre{font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding:.6666667em 1em}.sm\\:prose-sm ol,.sm\\:prose-sm ul{margin-top:1.1428571em;margin-bottom:1.1428571em}.sm\\:prose-sm li{margin-top:.2857143em;margin-bottom:.2857143em}.sm\\:prose-sm ol>li{padding-left:1.5714286em}.sm\\:prose-sm ol>li:before{left:0}.sm\\:prose-sm ul>li{padding-left:1.5714286em}.sm\\:prose-sm ul>li:before{height:.3571429em;width:.3571429em;top:.67857em;left:.2142857em}.sm\\:prose-sm>ul>li p{margin-top:.5714286em;margin-bottom:.5714286em}.sm\\:prose-sm>ul>li>:first-child{margin-top:1.1428571em}.sm\\:prose-sm>ul>li>:last-child{margin-bottom:1.1428571em}.sm\\:prose-sm>ol>li>:first-child{margin-top:1.1428571em}.sm\\:prose-sm>ol>li>:last-child{margin-bottom:1.1428571em}.sm\\:prose-sm ol ol,.sm\\:prose-sm ol ul,.sm\\:prose-sm ul ol,.sm\\:prose-sm ul ul{margin-top:.5714286em;margin-bottom:.5714286em}.sm\\:prose-sm hr{margin-top:2.8571429em;margin-bottom:2.8571429em}.sm\\:prose-sm h2+*,.sm\\:prose-sm h3+*,.sm\\:prose-sm h4+*,.sm\\:prose-sm hr+*{margin-top:0}.sm\\:prose-sm table{font-size:.8571429em;line-height:1.5}.sm\\:prose-sm thead th{padding-right:1em;padding-bottom:.6666667em;padding-left:1em}.sm\\:prose-sm thead th:first-child{padding-left:0}.sm\\:prose-sm thead th:last-child{padding-right:0}.sm\\:prose-sm tbody td{padding:.6666667em 1em}.sm\\:prose-sm tbody td:first-child{padding-left:0}.sm\\:prose-sm tbody td:last-child{padding-right:0}.sm\\:prose-sm>:first-child{margin-top:0}.sm\\:prose-sm>:last-child{margin-bottom:0}.sm\\:prose-lg{font-size:1.125rem;line-height:1.7777778}.sm\\:prose-lg p{margin-top:1.3333333em;margin-bottom:1.3333333em}.sm\\:prose-lg [class~=lead]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.sm\\:prose-lg blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em}.sm\\:prose-lg h1{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.sm\\:prose-lg h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.sm\\:prose-lg h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.sm\\:prose-lg h4{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.sm\\:prose-lg figure,.sm\\:prose-lg img,.sm\\:prose-lg video{margin-top:1.7777778em;margin-bottom:1.7777778em}.sm\\:prose-lg figure>*{margin-top:0;margin-bottom:0}.sm\\:prose-lg figure figcaption{font-size:.8888889em;line-height:1.5;margin-top:1em}.sm\\:prose-lg code{font-size:.8888889em}.sm\\:prose-lg h2 code{font-size:.8666667em}.sm\\:prose-lg h3 code{font-size:.875em}.sm\\:prose-lg pre{font-size:.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:.375rem;padding:1em 1.5em}.sm\\:prose-lg ol,.sm\\:prose-lg ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.sm\\:prose-lg li{margin-top:.6666667em;margin-bottom:.6666667em}.sm\\:prose-lg ol>li{padding-left:1.6666667em}.sm\\:prose-lg ol>li:before{left:0}.sm\\:prose-lg ul>li{padding-left:1.6666667em}.sm\\:prose-lg ul>li:before{width:.3333333em;height:.3333333em;top:.72222em;left:.2222222em}.sm\\:prose-lg>ul>li p{margin-top:.8888889em;margin-bottom:.8888889em}.sm\\:prose-lg>ul>li>:first-child{margin-top:1.3333333em}.sm\\:prose-lg>ul>li>:last-child{margin-bottom:1.3333333em}.sm\\:prose-lg>ol>li>:first-child{margin-top:1.3333333em}.sm\\:prose-lg>ol>li>:last-child{margin-bottom:1.3333333em}.sm\\:prose-lg ol ol,.sm\\:prose-lg ol ul,.sm\\:prose-lg ul ol,.sm\\:prose-lg ul ul{margin-top:.8888889em;margin-bottom:.8888889em}.sm\\:prose-lg hr{margin-top:3.1111111em;margin-bottom:3.1111111em}.sm\\:prose-lg h2+*,.sm\\:prose-lg h3+*,.sm\\:prose-lg h4+*,.sm\\:prose-lg hr+*{margin-top:0}.sm\\:prose-lg table{font-size:.8888889em;line-height:1.5}.sm\\:prose-lg thead th{padding-right:.75em;padding-bottom:.75em;padding-left:.75em}.sm\\:prose-lg thead th:first-child{padding-left:0}.sm\\:prose-lg thead th:last-child{padding-right:0}.sm\\:prose-lg tbody td{padding:.75em}.sm\\:prose-lg tbody td:first-child{padding-left:0}.sm\\:prose-lg tbody td:last-child{padding-right:0}.sm\\:prose-lg>:first-child{margin-top:0}.sm\\:prose-lg>:last-child{margin-bottom:0}.sm\\:prose-xl{font-size:1.25rem;line-height:1.8}.sm\\:prose-xl p{margin-top:1.2em;margin-bottom:1.2em}.sm\\:prose-xl [class~=lead]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em}.sm\\:prose-xl blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em}.sm\\:prose-xl h1{font-size:2.8em;margin-top:0;margin-bottom:.8571429em;line-height:1}.sm\\:prose-xl h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:.8888889em;line-height:1.1111111}.sm\\:prose-xl h3{font-size:1.5em;margin-top:1.6em;margin-bottom:.6666667em;line-height:1.3333333}.sm\\:prose-xl h4{margin-top:1.8em;margin-bottom:.6em;line-height:1.6}.sm\\:prose-xl figure,.sm\\:prose-xl img,.sm\\:prose-xl video{margin-top:2em;margin-bottom:2em}.sm\\:prose-xl figure>*{margin-top:0;margin-bottom:0}.sm\\:prose-xl figure figcaption{font-size:.9em;line-height:1.5555556;margin-top:1em}.sm\\:prose-xl code{font-size:.9em}.sm\\:prose-xl h2 code{font-size:.8611111em}.sm\\:prose-xl h3 code{font-size:.9em}.sm\\:prose-xl pre{font-size:.9em;line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.1111111em 1.3333333em}.sm\\:prose-xl ol,.sm\\:prose-xl ul{margin-top:1.2em;margin-bottom:1.2em}.sm\\:prose-xl li{margin-top:.6em;margin-bottom:.6em}.sm\\:prose-xl ol>li{padding-left:1.8em}.sm\\:prose-xl ol>li:before{left:0}.sm\\:prose-xl ul>li{padding-left:1.8em}.sm\\:prose-xl ul>li:before{width:.35em;height:.35em;top:.725em;left:.25em}.sm\\:prose-xl>ul>li p{margin-top:.8em;margin-bottom:.8em}.sm\\:prose-xl>ul>li>:first-child{margin-top:1.2em}.sm\\:prose-xl>ul>li>:last-child{margin-bottom:1.2em}.sm\\:prose-xl>ol>li>:first-child{margin-top:1.2em}.sm\\:prose-xl>ol>li>:last-child{margin-bottom:1.2em}.sm\\:prose-xl ol ol,.sm\\:prose-xl ol ul,.sm\\:prose-xl ul ol,.sm\\:prose-xl ul ul{margin-top:.8em;margin-bottom:.8em}.sm\\:prose-xl hr{margin-top:2.8em;margin-bottom:2.8em}.sm\\:prose-xl h2+*,.sm\\:prose-xl h3+*,.sm\\:prose-xl h4+*,.sm\\:prose-xl hr+*{margin-top:0}.sm\\:prose-xl table{font-size:.9em;line-height:1.5555556}.sm\\:prose-xl thead th{padding-right:.6666667em;padding-bottom:.8888889em;padding-left:.6666667em}.sm\\:prose-xl thead th:first-child{padding-left:0}.sm\\:prose-xl thead th:last-child{padding-right:0}.sm\\:prose-xl tbody td{padding:.8888889em .6666667em}.sm\\:prose-xl tbody td:first-child{padding-left:0}.sm\\:prose-xl tbody td:last-child{padding-right:0}.sm\\:prose-xl>:first-child{margin-top:0}.sm\\:prose-xl>:last-child{margin-bottom:0}.sm\\:prose-2xl{font-size:1.5rem;line-height:1.6666667}.sm\\:prose-2xl p{margin-top:1.3333333em;margin-bottom:1.3333333em}.sm\\:prose-2xl [class~=lead]{font-size:1.25em;line-height:1.4666667;margin-top:1.0666667em;margin-bottom:1.0666667em}.sm\\:prose-2xl blockquote{margin-top:1.7777778em;margin-bottom:1.7777778em;padding-left:1.1111111em}.sm\\:prose-2xl h1{font-size:2.6666667em;margin-top:0;margin-bottom:.875em;line-height:1}.sm\\:prose-2xl h2{font-size:2em;margin-top:1.5em;margin-bottom:.8333333em;line-height:1.0833333}.sm\\:prose-2xl h3{font-size:1.5em;margin-top:1.5555556em;margin-bottom:.6666667em;line-height:1.2222222}.sm\\:prose-2xl h4{margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.sm\\:prose-2xl figure,.sm\\:prose-2xl img,.sm\\:prose-2xl video{margin-top:2em;margin-bottom:2em}.sm\\:prose-2xl figure>*{margin-top:0;margin-bottom:0}.sm\\:prose-2xl figure figcaption{font-size:.8333333em;line-height:1.6;margin-top:1em}.sm\\:prose-2xl code{font-size:.8333333em}.sm\\:prose-2xl h2 code{font-size:.875em}.sm\\:prose-2xl h3 code{font-size:.8888889em}.sm\\:prose-2xl pre{font-size:.8333333em;line-height:1.8;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.2em 1.6em}.sm\\:prose-2xl ol,.sm\\:prose-2xl ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.sm\\:prose-2xl li{margin-top:.5em;margin-bottom:.5em}.sm\\:prose-2xl ol>li{padding-left:1.6666667em}.sm\\:prose-2xl ol>li:before{left:0}.sm\\:prose-2xl ul>li{padding-left:1.6666667em}.sm\\:prose-2xl ul>li:before{width:.3333333em;height:.3333333em;top:.66667em;left:.25em}.sm\\:prose-2xl>ul>li p{margin-top:.8333333em;margin-bottom:.8333333em}.sm\\:prose-2xl>ul>li>:first-child{margin-top:1.3333333em}.sm\\:prose-2xl>ul>li>:last-child{margin-bottom:1.3333333em}.sm\\:prose-2xl>ol>li>:first-child{margin-top:1.3333333em}.sm\\:prose-2xl>ol>li>:last-child{margin-bottom:1.3333333em}.sm\\:prose-2xl ol ol,.sm\\:prose-2xl ol ul,.sm\\:prose-2xl ul ol,.sm\\:prose-2xl ul ul{margin-top:.6666667em;margin-bottom:.6666667em}.sm\\:prose-2xl hr{margin-top:3em;margin-bottom:3em}.sm\\:prose-2xl h2+*,.sm\\:prose-2xl h3+*,.sm\\:prose-2xl h4+*,.sm\\:prose-2xl hr+*{margin-top:0}.sm\\:prose-2xl table{font-size:.8333333em;line-height:1.4}.sm\\:prose-2xl thead th{padding-right:.6em;padding-bottom:.8em;padding-left:.6em}.sm\\:prose-2xl thead th:first-child{padding-left:0}.sm\\:prose-2xl thead th:last-child{padding-right:0}.sm\\:prose-2xl tbody td{padding:.8em .6em}.sm\\:prose-2xl tbody td:first-child{padding-left:0}.sm\\:prose-2xl tbody td:last-child{padding-right:0}.sm\\:prose-2xl>:first-child{margin-top:0}.sm\\:prose-2xl>:last-child{margin-bottom:0}.sm\\:prose-red a,.sm\\:prose-red a code{color:#e53e3e}.sm\\:prose-orange a,.sm\\:prose-orange a code{color:#dd6b20}.sm\\:prose-yellow a,.sm\\:prose-yellow a code{color:#d69e2e}.sm\\:prose-green a,.sm\\:prose-green a code{color:#38a169}.sm\\:prose-teal a,.sm\\:prose-teal a code{color:#319795}.sm\\:prose-blue a,.sm\\:prose-blue a code{color:#3182ce}.sm\\:prose-indigo a,.sm\\:prose-indigo a code{color:#5a67d8}.sm\\:prose-purple a,.sm\\:prose-purple a code{color:#805ad5}.sm\\:prose-pink a,.sm\\:prose-pink a code{color:#d53f8c}.sm\\:px-3{padding-left:.75rem;padding-right:.75rem}}@media (min-width:768px){.md\\:container{width:100%}}@media (min-width:768px) and (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1280px){.md\\:container{max-width:1280px}}@media (min-width:768px){.md\\:prose{color:#4a5568;max-width:65ch}.md\\:prose [class~=lead]{color:#718096;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.md\\:prose a{color:#1a202c;text-decoration:underline;font-weight:500}.md\\:prose strong{color:#1a202c;font-weight:600}.md\\:prose ol[type=A]{--list-counter-style:upper-alpha}.md\\:prose ol[type=a]{--list-counter-style:lower-alpha}.md\\:prose ol[type=\"A s\"]{--list-counter-style:upper-alpha}.md\\:prose ol[type=\"a s\"]{--list-counter-style:lower-alpha}.md\\:prose ol[type=I]{--list-counter-style:upper-roman}.md\\:prose ol[type=i]{--list-counter-style:lower-roman}.md\\:prose ol[type=\"I s\"]{--list-counter-style:upper-roman}.md\\:prose ol[type=\"i s\"]{--list-counter-style:lower-roman}.md\\:prose ol[type=\"1\"]{--list-counter-style:decimal}.md\\:prose ol>li{position:relative;padding-left:1.75em}.md\\:prose ol>li:before{content:counter(list-item,decimal) \".\";content:counter(list-item,var(--list-counter-style,decimal)) \".\";position:absolute;font-weight:400;color:#a0aec0;left:0}.md\\:prose ul>li{position:relative;padding-left:1.75em}.md\\:prose ul>li:before{content:\"\";position:absolute;background-color:#e2e8f0;border-radius:50%;width:.375em;height:.375em;top:.6875em;left:.25em}.md\\:prose hr{border-color:#edf2f7;border-top-width:1px;margin-top:3em;margin-bottom:3em}.md\\:prose blockquote{font-weight:500;font-style:italic;color:#1a202c;border-left-width:.25rem;border-left-color:#edf2f7;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.md\\:prose blockquote p:first-of-type:before{content:open-quote}.md\\:prose blockquote p:last-of-type:after{content:close-quote}.md\\:prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.md\\:prose h2{color:#1a202c;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.md\\:prose h3{font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.md\\:prose h3,.md\\:prose h4{color:#1a202c;font-weight:600}.md\\:prose h4{margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.md\\:prose figure figcaption{color:#a0aec0;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.md\\:prose code{color:#1a202c;font-weight:600;font-size:.875em}.md\\:prose code:after,.md\\:prose code:before{content:\"`\"}.md\\:prose a code{color:#1a202c}.md\\:prose pre{color:#edf2f7;background-color:#2d3748;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.md\\:prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.md\\:prose pre code:after,.md\\:prose pre code:before{content:none}.md\\:prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.md\\:prose thead{color:#1a202c;font-weight:600;border-bottom-width:1px;border-bottom-color:#e2e8f0}.md\\:prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.md\\:prose tbody tr{border-bottom-width:1px;border-bottom-color:#edf2f7}.md\\:prose tbody tr:last-child{border-bottom-width:0}.md\\:prose tbody td{vertical-align:top;padding:.5714286em}.md\\:prose{font-size:1rem;line-height:1.75}.md\\:prose p{margin-top:1.25em;margin-bottom:1.25em}.md\\:prose figure,.md\\:prose img,.md\\:prose video{margin-top:2em;margin-bottom:2em}.md\\:prose figure>*{margin-top:0;margin-bottom:0}.md\\:prose h2 code{font-size:.875em}.md\\:prose h3 code{font-size:.9em}.md\\:prose ol,.md\\:prose ul{margin-top:1.25em;margin-bottom:1.25em}.md\\:prose li{margin-top:.5em;margin-bottom:.5em}.md\\:prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.md\\:prose>ul>li>:first-child{margin-top:1.25em}.md\\:prose>ul>li>:last-child{margin-bottom:1.25em}.md\\:prose>ol>li>:first-child{margin-top:1.25em}.md\\:prose>ol>li>:last-child{margin-bottom:1.25em}.md\\:prose ol ol,.md\\:prose ol ul,.md\\:prose ul ol,.md\\:prose ul ul{margin-top:.75em;margin-bottom:.75em}.md\\:prose h2+*,.md\\:prose h3+*,.md\\:prose h4+*,.md\\:prose hr+*{margin-top:0}.md\\:prose thead th:first-child{padding-left:0}.md\\:prose thead th:last-child{padding-right:0}.md\\:prose tbody td:first-child{padding-left:0}.md\\:prose tbody td:last-child{padding-right:0}.md\\:prose>:first-child{margin-top:0}.md\\:prose>:last-child{margin-bottom:0}.md\\:prose-sm{font-size:.875rem;line-height:1.7142857}.md\\:prose-sm p{margin-top:1.1428571em;margin-bottom:1.1428571em}.md\\:prose-sm [class~=lead]{font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.md\\:prose-sm blockquote{margin-top:1.3333333em;margin-bottom:1.3333333em;padding-left:1.1111111em}.md\\:prose-sm h1{font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.md\\:prose-sm h2{font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.md\\:prose-sm h3{font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.md\\:prose-sm h4{margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.md\\:prose-sm figure,.md\\:prose-sm img,.md\\:prose-sm video{margin-top:1.7142857em;margin-bottom:1.7142857em}.md\\:prose-sm figure>*{margin-top:0;margin-bottom:0}.md\\:prose-sm figure figcaption{font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.md\\:prose-sm code{font-size:.8571429em}.md\\:prose-sm h2 code{font-size:.9em}.md\\:prose-sm h3 code{font-size:.8888889em}.md\\:prose-sm pre{font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding:.6666667em 1em}.md\\:prose-sm ol,.md\\:prose-sm ul{margin-top:1.1428571em;margin-bottom:1.1428571em}.md\\:prose-sm li{margin-top:.2857143em;margin-bottom:.2857143em}.md\\:prose-sm ol>li{padding-left:1.5714286em}.md\\:prose-sm ol>li:before{left:0}.md\\:prose-sm ul>li{padding-left:1.5714286em}.md\\:prose-sm ul>li:before{height:.3571429em;width:.3571429em;top:.67857em;left:.2142857em}.md\\:prose-sm>ul>li p{margin-top:.5714286em;margin-bottom:.5714286em}.md\\:prose-sm>ul>li>:first-child{margin-top:1.1428571em}.md\\:prose-sm>ul>li>:last-child{margin-bottom:1.1428571em}.md\\:prose-sm>ol>li>:first-child{margin-top:1.1428571em}.md\\:prose-sm>ol>li>:last-child{margin-bottom:1.1428571em}.md\\:prose-sm ol ol,.md\\:prose-sm ol ul,.md\\:prose-sm ul ol,.md\\:prose-sm ul ul{margin-top:.5714286em;margin-bottom:.5714286em}.md\\:prose-sm hr{margin-top:2.8571429em;margin-bottom:2.8571429em}.md\\:prose-sm h2+*,.md\\:prose-sm h3+*,.md\\:prose-sm h4+*,.md\\:prose-sm hr+*{margin-top:0}.md\\:prose-sm table{font-size:.8571429em;line-height:1.5}.md\\:prose-sm thead th{padding-right:1em;padding-bottom:.6666667em;padding-left:1em}.md\\:prose-sm thead th:first-child{padding-left:0}.md\\:prose-sm thead th:last-child{padding-right:0}.md\\:prose-sm tbody td{padding:.6666667em 1em}.md\\:prose-sm tbody td:first-child{padding-left:0}.md\\:prose-sm tbody td:last-child{padding-right:0}.md\\:prose-sm>:first-child{margin-top:0}.md\\:prose-sm>:last-child{margin-bottom:0}.md\\:prose-lg{font-size:1.125rem;line-height:1.7777778}.md\\:prose-lg p{margin-top:1.3333333em;margin-bottom:1.3333333em}.md\\:prose-lg [class~=lead]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.md\\:prose-lg blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em}.md\\:prose-lg h1{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.md\\:prose-lg h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.md\\:prose-lg h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.md\\:prose-lg h4{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.md\\:prose-lg figure,.md\\:prose-lg img,.md\\:prose-lg video{margin-top:1.7777778em;margin-bottom:1.7777778em}.md\\:prose-lg figure>*{margin-top:0;margin-bottom:0}.md\\:prose-lg figure figcaption{font-size:.8888889em;line-height:1.5;margin-top:1em}.md\\:prose-lg code{font-size:.8888889em}.md\\:prose-lg h2 code{font-size:.8666667em}.md\\:prose-lg h3 code{font-size:.875em}.md\\:prose-lg pre{font-size:.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:.375rem;padding:1em 1.5em}.md\\:prose-lg ol,.md\\:prose-lg ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.md\\:prose-lg li{margin-top:.6666667em;margin-bottom:.6666667em}.md\\:prose-lg ol>li{padding-left:1.6666667em}.md\\:prose-lg ol>li:before{left:0}.md\\:prose-lg ul>li{padding-left:1.6666667em}.md\\:prose-lg ul>li:before{width:.3333333em;height:.3333333em;top:.72222em;left:.2222222em}.md\\:prose-lg>ul>li p{margin-top:.8888889em;margin-bottom:.8888889em}.md\\:prose-lg>ul>li>:first-child{margin-top:1.3333333em}.md\\:prose-lg>ul>li>:last-child{margin-bottom:1.3333333em}.md\\:prose-lg>ol>li>:first-child{margin-top:1.3333333em}.md\\:prose-lg>ol>li>:last-child{margin-bottom:1.3333333em}.md\\:prose-lg ol ol,.md\\:prose-lg ol ul,.md\\:prose-lg ul ol,.md\\:prose-lg ul ul{margin-top:.8888889em;margin-bottom:.8888889em}.md\\:prose-lg hr{margin-top:3.1111111em;margin-bottom:3.1111111em}.md\\:prose-lg h2+*,.md\\:prose-lg h3+*,.md\\:prose-lg h4+*,.md\\:prose-lg hr+*{margin-top:0}.md\\:prose-lg table{font-size:.8888889em;line-height:1.5}.md\\:prose-lg thead th{padding-right:.75em;padding-bottom:.75em;padding-left:.75em}.md\\:prose-lg thead th:first-child{padding-left:0}.md\\:prose-lg thead th:last-child{padding-right:0}.md\\:prose-lg tbody td{padding:.75em}.md\\:prose-lg tbody td:first-child{padding-left:0}.md\\:prose-lg tbody td:last-child{padding-right:0}.md\\:prose-lg>:first-child{margin-top:0}.md\\:prose-lg>:last-child{margin-bottom:0}.md\\:prose-xl{font-size:1.25rem;line-height:1.8}.md\\:prose-xl p{margin-top:1.2em;margin-bottom:1.2em}.md\\:prose-xl [class~=lead]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em}.md\\:prose-xl blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em}.md\\:prose-xl h1{font-size:2.8em;margin-top:0;margin-bottom:.8571429em;line-height:1}.md\\:prose-xl h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:.8888889em;line-height:1.1111111}.md\\:prose-xl h3{font-size:1.5em;margin-top:1.6em;margin-bottom:.6666667em;line-height:1.3333333}.md\\:prose-xl h4{margin-top:1.8em;margin-bottom:.6em;line-height:1.6}.md\\:prose-xl figure,.md\\:prose-xl img,.md\\:prose-xl video{margin-top:2em;margin-bottom:2em}.md\\:prose-xl figure>*{margin-top:0;margin-bottom:0}.md\\:prose-xl figure figcaption{font-size:.9em;line-height:1.5555556;margin-top:1em}.md\\:prose-xl code{font-size:.9em}.md\\:prose-xl h2 code{font-size:.8611111em}.md\\:prose-xl h3 code{font-size:.9em}.md\\:prose-xl pre{font-size:.9em;line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.1111111em 1.3333333em}.md\\:prose-xl ol,.md\\:prose-xl ul{margin-top:1.2em;margin-bottom:1.2em}.md\\:prose-xl li{margin-top:.6em;margin-bottom:.6em}.md\\:prose-xl ol>li{padding-left:1.8em}.md\\:prose-xl ol>li:before{left:0}.md\\:prose-xl ul>li{padding-left:1.8em}.md\\:prose-xl ul>li:before{width:.35em;height:.35em;top:.725em;left:.25em}.md\\:prose-xl>ul>li p{margin-top:.8em;margin-bottom:.8em}.md\\:prose-xl>ul>li>:first-child{margin-top:1.2em}.md\\:prose-xl>ul>li>:last-child{margin-bottom:1.2em}.md\\:prose-xl>ol>li>:first-child{margin-top:1.2em}.md\\:prose-xl>ol>li>:last-child{margin-bottom:1.2em}.md\\:prose-xl ol ol,.md\\:prose-xl ol ul,.md\\:prose-xl ul ol,.md\\:prose-xl ul ul{margin-top:.8em;margin-bottom:.8em}.md\\:prose-xl hr{margin-top:2.8em;margin-bottom:2.8em}.md\\:prose-xl h2+*,.md\\:prose-xl h3+*,.md\\:prose-xl h4+*,.md\\:prose-xl hr+*{margin-top:0}.md\\:prose-xl table{font-size:.9em;line-height:1.5555556}.md\\:prose-xl thead th{padding-right:.6666667em;padding-bottom:.8888889em;padding-left:.6666667em}.md\\:prose-xl thead th:first-child{padding-left:0}.md\\:prose-xl thead th:last-child{padding-right:0}.md\\:prose-xl tbody td{padding:.8888889em .6666667em}.md\\:prose-xl tbody td:first-child{padding-left:0}.md\\:prose-xl tbody td:last-child{padding-right:0}.md\\:prose-xl>:first-child{margin-top:0}.md\\:prose-xl>:last-child{margin-bottom:0}.md\\:prose-2xl{font-size:1.5rem;line-height:1.6666667}.md\\:prose-2xl p{margin-top:1.3333333em;margin-bottom:1.3333333em}.md\\:prose-2xl [class~=lead]{font-size:1.25em;line-height:1.4666667;margin-top:1.0666667em;margin-bottom:1.0666667em}.md\\:prose-2xl blockquote{margin-top:1.7777778em;margin-bottom:1.7777778em;padding-left:1.1111111em}.md\\:prose-2xl h1{font-size:2.6666667em;margin-top:0;margin-bottom:.875em;line-height:1}.md\\:prose-2xl h2{font-size:2em;margin-top:1.5em;margin-bottom:.8333333em;line-height:1.0833333}.md\\:prose-2xl h3{font-size:1.5em;margin-top:1.5555556em;margin-bottom:.6666667em;line-height:1.2222222}.md\\:prose-2xl h4{margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.md\\:prose-2xl figure,.md\\:prose-2xl img,.md\\:prose-2xl video{margin-top:2em;margin-bottom:2em}.md\\:prose-2xl figure>*{margin-top:0;margin-bottom:0}.md\\:prose-2xl figure figcaption{font-size:.8333333em;line-height:1.6;margin-top:1em}.md\\:prose-2xl code{font-size:.8333333em}.md\\:prose-2xl h2 code{font-size:.875em}.md\\:prose-2xl h3 code{font-size:.8888889em}.md\\:prose-2xl pre{font-size:.8333333em;line-height:1.8;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.2em 1.6em}.md\\:prose-2xl ol,.md\\:prose-2xl ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.md\\:prose-2xl li{margin-top:.5em;margin-bottom:.5em}.md\\:prose-2xl ol>li{padding-left:1.6666667em}.md\\:prose-2xl ol>li:before{left:0}.md\\:prose-2xl ul>li{padding-left:1.6666667em}.md\\:prose-2xl ul>li:before{width:.3333333em;height:.3333333em;top:.66667em;left:.25em}.md\\:prose-2xl>ul>li p{margin-top:.8333333em;margin-bottom:.8333333em}.md\\:prose-2xl>ul>li>:first-child{margin-top:1.3333333em}.md\\:prose-2xl>ul>li>:last-child{margin-bottom:1.3333333em}.md\\:prose-2xl>ol>li>:first-child{margin-top:1.3333333em}.md\\:prose-2xl>ol>li>:last-child{margin-bottom:1.3333333em}.md\\:prose-2xl ol ol,.md\\:prose-2xl ol ul,.md\\:prose-2xl ul ol,.md\\:prose-2xl ul ul{margin-top:.6666667em;margin-bottom:.6666667em}.md\\:prose-2xl hr{margin-top:3em;margin-bottom:3em}.md\\:prose-2xl h2+*,.md\\:prose-2xl h3+*,.md\\:prose-2xl h4+*,.md\\:prose-2xl hr+*{margin-top:0}.md\\:prose-2xl table{font-size:.8333333em;line-height:1.4}.md\\:prose-2xl thead th{padding-right:.6em;padding-bottom:.8em;padding-left:.6em}.md\\:prose-2xl thead th:first-child{padding-left:0}.md\\:prose-2xl thead th:last-child{padding-right:0}.md\\:prose-2xl tbody td{padding:.8em .6em}.md\\:prose-2xl tbody td:first-child{padding-left:0}.md\\:prose-2xl tbody td:last-child{padding-right:0}.md\\:prose-2xl>:first-child{margin-top:0}.md\\:prose-2xl>:last-child{margin-bottom:0}.md\\:prose-red a,.md\\:prose-red a code{color:#e53e3e}.md\\:prose-orange a,.md\\:prose-orange a code{color:#dd6b20}.md\\:prose-yellow a,.md\\:prose-yellow a code{color:#d69e2e}.md\\:prose-green a,.md\\:prose-green a code{color:#38a169}.md\\:prose-teal a,.md\\:prose-teal a code{color:#319795}.md\\:prose-blue a,.md\\:prose-blue a code{color:#3182ce}.md\\:prose-indigo a,.md\\:prose-indigo a code{color:#5a67d8}.md\\:prose-purple a,.md\\:prose-purple a code{color:#805ad5}.md\\:prose-pink a,.md\\:prose-pink a code{color:#d53f8c}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:flex-row{flex-direction:row}.md\\:order-none{order:0}.md\\:text-base{font-size:1rem}.md\\:text-2xl{font-size:1.5rem}.md\\:text-3xl{font-size:1.875rem}.md\\:text-5xl{font-size:3rem}.md\\:my-0{margin-top:0;margin-bottom:0}.md\\:mx-4{margin-left:1rem;margin-right:1rem}.md\\:mt-0{margin-top:0}.md\\:mt-24{margin-top:6rem}.md\\:max-w-sm{max-width:24rem}.md\\:p-6{padding:1.5rem}.md\\:px-5{padding-left:1.25rem;padding-right:1.25rem}.md\\:py-10{padding-top:2.5rem;padding-bottom:2.5rem}.md\\:px-10{padding-left:2.5rem;padding-right:2.5rem}}@media (min-width:1024px){.lg\\:container{width:100%}}@media (min-width:1024px) and (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1024px){.lg\\:prose{color:#4a5568;max-width:65ch}.lg\\:prose [class~=lead]{color:#718096;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.lg\\:prose a{color:#1a202c;text-decoration:underline;font-weight:500}.lg\\:prose strong{color:#1a202c;font-weight:600}.lg\\:prose ol[type=A]{--list-counter-style:upper-alpha}.lg\\:prose ol[type=a]{--list-counter-style:lower-alpha}.lg\\:prose ol[type=\"A s\"]{--list-counter-style:upper-alpha}.lg\\:prose ol[type=\"a s\"]{--list-counter-style:lower-alpha}.lg\\:prose ol[type=I]{--list-counter-style:upper-roman}.lg\\:prose ol[type=i]{--list-counter-style:lower-roman}.lg\\:prose ol[type=\"I s\"]{--list-counter-style:upper-roman}.lg\\:prose ol[type=\"i s\"]{--list-counter-style:lower-roman}.lg\\:prose ol[type=\"1\"]{--list-counter-style:decimal}.lg\\:prose ol>li{position:relative;padding-left:1.75em}.lg\\:prose ol>li:before{content:counter(list-item,decimal) \".\";content:counter(list-item,var(--list-counter-style,decimal)) \".\";position:absolute;font-weight:400;color:#a0aec0;left:0}.lg\\:prose ul>li{position:relative;padding-left:1.75em}.lg\\:prose ul>li:before{content:\"\";position:absolute;background-color:#e2e8f0;border-radius:50%;width:.375em;height:.375em;top:.6875em;left:.25em}.lg\\:prose hr{border-color:#edf2f7;border-top-width:1px;margin-top:3em;margin-bottom:3em}.lg\\:prose blockquote{font-weight:500;font-style:italic;color:#1a202c;border-left-width:.25rem;border-left-color:#edf2f7;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.lg\\:prose blockquote p:first-of-type:before{content:open-quote}.lg\\:prose blockquote p:last-of-type:after{content:close-quote}.lg\\:prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.lg\\:prose h2{color:#1a202c;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.lg\\:prose h3{font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.lg\\:prose h3,.lg\\:prose h4{color:#1a202c;font-weight:600}.lg\\:prose h4{margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.lg\\:prose figure figcaption{color:#a0aec0;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.lg\\:prose code{color:#1a202c;font-weight:600;font-size:.875em}.lg\\:prose code:after,.lg\\:prose code:before{content:\"`\"}.lg\\:prose a code{color:#1a202c}.lg\\:prose pre{color:#edf2f7;background-color:#2d3748;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.lg\\:prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.lg\\:prose pre code:after,.lg\\:prose pre code:before{content:none}.lg\\:prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.lg\\:prose thead{color:#1a202c;font-weight:600;border-bottom-width:1px;border-bottom-color:#e2e8f0}.lg\\:prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.lg\\:prose tbody tr{border-bottom-width:1px;border-bottom-color:#edf2f7}.lg\\:prose tbody tr:last-child{border-bottom-width:0}.lg\\:prose tbody td{vertical-align:top;padding:.5714286em}.lg\\:prose{font-size:1rem;line-height:1.75}.lg\\:prose p{margin-top:1.25em;margin-bottom:1.25em}.lg\\:prose figure,.lg\\:prose img,.lg\\:prose video{margin-top:2em;margin-bottom:2em}.lg\\:prose figure>*{margin-top:0;margin-bottom:0}.lg\\:prose h2 code{font-size:.875em}.lg\\:prose h3 code{font-size:.9em}.lg\\:prose ol,.lg\\:prose ul{margin-top:1.25em;margin-bottom:1.25em}.lg\\:prose li{margin-top:.5em;margin-bottom:.5em}.lg\\:prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.lg\\:prose>ul>li>:first-child{margin-top:1.25em}.lg\\:prose>ul>li>:last-child{margin-bottom:1.25em}.lg\\:prose>ol>li>:first-child{margin-top:1.25em}.lg\\:prose>ol>li>:last-child{margin-bottom:1.25em}.lg\\:prose ol ol,.lg\\:prose ol ul,.lg\\:prose ul ol,.lg\\:prose ul ul{margin-top:.75em;margin-bottom:.75em}.lg\\:prose h2+*,.lg\\:prose h3+*,.lg\\:prose h4+*,.lg\\:prose hr+*{margin-top:0}.lg\\:prose thead th:first-child{padding-left:0}.lg\\:prose thead th:last-child{padding-right:0}.lg\\:prose tbody td:first-child{padding-left:0}.lg\\:prose tbody td:last-child{padding-right:0}.lg\\:prose>:first-child{margin-top:0}.lg\\:prose>:last-child{margin-bottom:0}.lg\\:prose-sm{font-size:.875rem;line-height:1.7142857}.lg\\:prose-sm p{margin-top:1.1428571em;margin-bottom:1.1428571em}.lg\\:prose-sm [class~=lead]{font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.lg\\:prose-sm blockquote{margin-top:1.3333333em;margin-bottom:1.3333333em;padding-left:1.1111111em}.lg\\:prose-sm h1{font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.lg\\:prose-sm h2{font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.lg\\:prose-sm h3{font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.lg\\:prose-sm h4{margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.lg\\:prose-sm figure,.lg\\:prose-sm img,.lg\\:prose-sm video{margin-top:1.7142857em;margin-bottom:1.7142857em}.lg\\:prose-sm figure>*{margin-top:0;margin-bottom:0}.lg\\:prose-sm figure figcaption{font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.lg\\:prose-sm code{font-size:.8571429em}.lg\\:prose-sm h2 code{font-size:.9em}.lg\\:prose-sm h3 code{font-size:.8888889em}.lg\\:prose-sm pre{font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding:.6666667em 1em}.lg\\:prose-sm ol,.lg\\:prose-sm ul{margin-top:1.1428571em;margin-bottom:1.1428571em}.lg\\:prose-sm li{margin-top:.2857143em;margin-bottom:.2857143em}.lg\\:prose-sm ol>li{padding-left:1.5714286em}.lg\\:prose-sm ol>li:before{left:0}.lg\\:prose-sm ul>li{padding-left:1.5714286em}.lg\\:prose-sm ul>li:before{height:.3571429em;width:.3571429em;top:.67857em;left:.2142857em}.lg\\:prose-sm>ul>li p{margin-top:.5714286em;margin-bottom:.5714286em}.lg\\:prose-sm>ul>li>:first-child{margin-top:1.1428571em}.lg\\:prose-sm>ul>li>:last-child{margin-bottom:1.1428571em}.lg\\:prose-sm>ol>li>:first-child{margin-top:1.1428571em}.lg\\:prose-sm>ol>li>:last-child{margin-bottom:1.1428571em}.lg\\:prose-sm ol ol,.lg\\:prose-sm ol ul,.lg\\:prose-sm ul ol,.lg\\:prose-sm ul ul{margin-top:.5714286em;margin-bottom:.5714286em}.lg\\:prose-sm hr{margin-top:2.8571429em;margin-bottom:2.8571429em}.lg\\:prose-sm h2+*,.lg\\:prose-sm h3+*,.lg\\:prose-sm h4+*,.lg\\:prose-sm hr+*{margin-top:0}.lg\\:prose-sm table{font-size:.8571429em;line-height:1.5}.lg\\:prose-sm thead th{padding-right:1em;padding-bottom:.6666667em;padding-left:1em}.lg\\:prose-sm thead th:first-child{padding-left:0}.lg\\:prose-sm thead th:last-child{padding-right:0}.lg\\:prose-sm tbody td{padding:.6666667em 1em}.lg\\:prose-sm tbody td:first-child{padding-left:0}.lg\\:prose-sm tbody td:last-child{padding-right:0}.lg\\:prose-sm>:first-child{margin-top:0}.lg\\:prose-sm>:last-child{margin-bottom:0}.lg\\:prose-lg{font-size:1.125rem;line-height:1.7777778}.lg\\:prose-lg p{margin-top:1.3333333em;margin-bottom:1.3333333em}.lg\\:prose-lg [class~=lead]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.lg\\:prose-lg blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em}.lg\\:prose-lg h1{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.lg\\:prose-lg h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.lg\\:prose-lg h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.lg\\:prose-lg h4{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.lg\\:prose-lg figure,.lg\\:prose-lg img,.lg\\:prose-lg video{margin-top:1.7777778em;margin-bottom:1.7777778em}.lg\\:prose-lg figure>*{margin-top:0;margin-bottom:0}.lg\\:prose-lg figure figcaption{font-size:.8888889em;line-height:1.5;margin-top:1em}.lg\\:prose-lg code{font-size:.8888889em}.lg\\:prose-lg h2 code{font-size:.8666667em}.lg\\:prose-lg h3 code{font-size:.875em}.lg\\:prose-lg pre{font-size:.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:.375rem;padding:1em 1.5em}.lg\\:prose-lg ol,.lg\\:prose-lg ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.lg\\:prose-lg li{margin-top:.6666667em;margin-bottom:.6666667em}.lg\\:prose-lg ol>li{padding-left:1.6666667em}.lg\\:prose-lg ol>li:before{left:0}.lg\\:prose-lg ul>li{padding-left:1.6666667em}.lg\\:prose-lg ul>li:before{width:.3333333em;height:.3333333em;top:.72222em;left:.2222222em}.lg\\:prose-lg>ul>li p{margin-top:.8888889em;margin-bottom:.8888889em}.lg\\:prose-lg>ul>li>:first-child{margin-top:1.3333333em}.lg\\:prose-lg>ul>li>:last-child{margin-bottom:1.3333333em}.lg\\:prose-lg>ol>li>:first-child{margin-top:1.3333333em}.lg\\:prose-lg>ol>li>:last-child{margin-bottom:1.3333333em}.lg\\:prose-lg ol ol,.lg\\:prose-lg ol ul,.lg\\:prose-lg ul ol,.lg\\:prose-lg ul ul{margin-top:.8888889em;margin-bottom:.8888889em}.lg\\:prose-lg hr{margin-top:3.1111111em;margin-bottom:3.1111111em}.lg\\:prose-lg h2+*,.lg\\:prose-lg h3+*,.lg\\:prose-lg h4+*,.lg\\:prose-lg hr+*{margin-top:0}.lg\\:prose-lg table{font-size:.8888889em;line-height:1.5}.lg\\:prose-lg thead th{padding-right:.75em;padding-bottom:.75em;padding-left:.75em}.lg\\:prose-lg thead th:first-child{padding-left:0}.lg\\:prose-lg thead th:last-child{padding-right:0}.lg\\:prose-lg tbody td{padding:.75em}.lg\\:prose-lg tbody td:first-child{padding-left:0}.lg\\:prose-lg tbody td:last-child{padding-right:0}.lg\\:prose-lg>:first-child{margin-top:0}.lg\\:prose-lg>:last-child{margin-bottom:0}.lg\\:prose-xl{font-size:1.25rem;line-height:1.8}.lg\\:prose-xl p{margin-top:1.2em;margin-bottom:1.2em}.lg\\:prose-xl [class~=lead]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em}.lg\\:prose-xl blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em}.lg\\:prose-xl h1{font-size:2.8em;margin-top:0;margin-bottom:.8571429em;line-height:1}.lg\\:prose-xl h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:.8888889em;line-height:1.1111111}.lg\\:prose-xl h3{font-size:1.5em;margin-top:1.6em;margin-bottom:.6666667em;line-height:1.3333333}.lg\\:prose-xl h4{margin-top:1.8em;margin-bottom:.6em;line-height:1.6}.lg\\:prose-xl figure,.lg\\:prose-xl img,.lg\\:prose-xl video{margin-top:2em;margin-bottom:2em}.lg\\:prose-xl figure>*{margin-top:0;margin-bottom:0}.lg\\:prose-xl figure figcaption{font-size:.9em;line-height:1.5555556;margin-top:1em}.lg\\:prose-xl code{font-size:.9em}.lg\\:prose-xl h2 code{font-size:.8611111em}.lg\\:prose-xl h3 code{font-size:.9em}.lg\\:prose-xl pre{font-size:.9em;line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.1111111em 1.3333333em}.lg\\:prose-xl ol,.lg\\:prose-xl ul{margin-top:1.2em;margin-bottom:1.2em}.lg\\:prose-xl li{margin-top:.6em;margin-bottom:.6em}.lg\\:prose-xl ol>li{padding-left:1.8em}.lg\\:prose-xl ol>li:before{left:0}.lg\\:prose-xl ul>li{padding-left:1.8em}.lg\\:prose-xl ul>li:before{width:.35em;height:.35em;top:.725em;left:.25em}.lg\\:prose-xl>ul>li p{margin-top:.8em;margin-bottom:.8em}.lg\\:prose-xl>ul>li>:first-child{margin-top:1.2em}.lg\\:prose-xl>ul>li>:last-child{margin-bottom:1.2em}.lg\\:prose-xl>ol>li>:first-child{margin-top:1.2em}.lg\\:prose-xl>ol>li>:last-child{margin-bottom:1.2em}.lg\\:prose-xl ol ol,.lg\\:prose-xl ol ul,.lg\\:prose-xl ul ol,.lg\\:prose-xl ul ul{margin-top:.8em;margin-bottom:.8em}.lg\\:prose-xl hr{margin-top:2.8em;margin-bottom:2.8em}.lg\\:prose-xl h2+*,.lg\\:prose-xl h3+*,.lg\\:prose-xl h4+*,.lg\\:prose-xl hr+*{margin-top:0}.lg\\:prose-xl table{font-size:.9em;line-height:1.5555556}.lg\\:prose-xl thead th{padding-right:.6666667em;padding-bottom:.8888889em;padding-left:.6666667em}.lg\\:prose-xl thead th:first-child{padding-left:0}.lg\\:prose-xl thead th:last-child{padding-right:0}.lg\\:prose-xl tbody td{padding:.8888889em .6666667em}.lg\\:prose-xl tbody td:first-child{padding-left:0}.lg\\:prose-xl tbody td:last-child{padding-right:0}.lg\\:prose-xl>:first-child{margin-top:0}.lg\\:prose-xl>:last-child{margin-bottom:0}.lg\\:prose-2xl{font-size:1.5rem;line-height:1.6666667}.lg\\:prose-2xl p{margin-top:1.3333333em;margin-bottom:1.3333333em}.lg\\:prose-2xl [class~=lead]{font-size:1.25em;line-height:1.4666667;margin-top:1.0666667em;margin-bottom:1.0666667em}.lg\\:prose-2xl blockquote{margin-top:1.7777778em;margin-bottom:1.7777778em;padding-left:1.1111111em}.lg\\:prose-2xl h1{font-size:2.6666667em;margin-top:0;margin-bottom:.875em;line-height:1}.lg\\:prose-2xl h2{font-size:2em;margin-top:1.5em;margin-bottom:.8333333em;line-height:1.0833333}.lg\\:prose-2xl h3{font-size:1.5em;margin-top:1.5555556em;margin-bottom:.6666667em;line-height:1.2222222}.lg\\:prose-2xl h4{margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.lg\\:prose-2xl figure,.lg\\:prose-2xl img,.lg\\:prose-2xl video{margin-top:2em;margin-bottom:2em}.lg\\:prose-2xl figure>*{margin-top:0;margin-bottom:0}.lg\\:prose-2xl figure figcaption{font-size:.8333333em;line-height:1.6;margin-top:1em}.lg\\:prose-2xl code{font-size:.8333333em}.lg\\:prose-2xl h2 code{font-size:.875em}.lg\\:prose-2xl h3 code{font-size:.8888889em}.lg\\:prose-2xl pre{font-size:.8333333em;line-height:1.8;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.2em 1.6em}.lg\\:prose-2xl ol,.lg\\:prose-2xl ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.lg\\:prose-2xl li{margin-top:.5em;margin-bottom:.5em}.lg\\:prose-2xl ol>li{padding-left:1.6666667em}.lg\\:prose-2xl ol>li:before{left:0}.lg\\:prose-2xl ul>li{padding-left:1.6666667em}.lg\\:prose-2xl ul>li:before{width:.3333333em;height:.3333333em;top:.66667em;left:.25em}.lg\\:prose-2xl>ul>li p{margin-top:.8333333em;margin-bottom:.8333333em}.lg\\:prose-2xl>ul>li>:first-child{margin-top:1.3333333em}.lg\\:prose-2xl>ul>li>:last-child{margin-bottom:1.3333333em}.lg\\:prose-2xl>ol>li>:first-child{margin-top:1.3333333em}.lg\\:prose-2xl>ol>li>:last-child{margin-bottom:1.3333333em}.lg\\:prose-2xl ol ol,.lg\\:prose-2xl ol ul,.lg\\:prose-2xl ul ol,.lg\\:prose-2xl ul ul{margin-top:.6666667em;margin-bottom:.6666667em}.lg\\:prose-2xl hr{margin-top:3em;margin-bottom:3em}.lg\\:prose-2xl h2+*,.lg\\:prose-2xl h3+*,.lg\\:prose-2xl h4+*,.lg\\:prose-2xl hr+*{margin-top:0}.lg\\:prose-2xl table{font-size:.8333333em;line-height:1.4}.lg\\:prose-2xl thead th{padding-right:.6em;padding-bottom:.8em;padding-left:.6em}.lg\\:prose-2xl thead th:first-child{padding-left:0}.lg\\:prose-2xl thead th:last-child{padding-right:0}.lg\\:prose-2xl tbody td{padding:.8em .6em}.lg\\:prose-2xl tbody td:first-child{padding-left:0}.lg\\:prose-2xl tbody td:last-child{padding-right:0}.lg\\:prose-2xl>:first-child{margin-top:0}.lg\\:prose-2xl>:last-child{margin-bottom:0}.lg\\:prose-red a,.lg\\:prose-red a code{color:#e53e3e}.lg\\:prose-orange a,.lg\\:prose-orange a code{color:#dd6b20}.lg\\:prose-yellow a,.lg\\:prose-yellow a code{color:#d69e2e}.lg\\:prose-green a,.lg\\:prose-green a code{color:#38a169}.lg\\:prose-teal a,.lg\\:prose-teal a code{color:#319795}.lg\\:prose-blue a,.lg\\:prose-blue a code{color:#3182ce}.lg\\:prose-indigo a,.lg\\:prose-indigo a code{color:#5a67d8}.lg\\:prose-purple a,.lg\\:prose-purple a code{color:#805ad5}.lg\\:prose-pink a,.lg\\:prose-pink a code{color:#d53f8c}.lg\\:text-lg{font-size:1.125rem}.lg\\:text-xl{font-size:1.25rem}.lg\\:text-3xl{font-size:1.875rem}.lg\\:text-4xl{font-size:2.25rem}.lg\\:px-0{padding-left:0;padding-right:0}}@media (min-width:1280px){.xl\\:container{width:100%}}@media (min-width:1280px) and (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:1280px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1280px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px) and (min-width:1280px){.xl\\:container{max-width:1280px}}@media (min-width:1280px){.xl\\:prose{color:#4a5568;max-width:65ch}.xl\\:prose [class~=lead]{color:#718096;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.xl\\:prose a{color:#1a202c;text-decoration:underline;font-weight:500}.xl\\:prose strong{color:#1a202c;font-weight:600}.xl\\:prose ol[type=A]{--list-counter-style:upper-alpha}.xl\\:prose ol[type=a]{--list-counter-style:lower-alpha}.xl\\:prose ol[type=\"A s\"]{--list-counter-style:upper-alpha}.xl\\:prose ol[type=\"a s\"]{--list-counter-style:lower-alpha}.xl\\:prose ol[type=I]{--list-counter-style:upper-roman}.xl\\:prose ol[type=i]{--list-counter-style:lower-roman}.xl\\:prose ol[type=\"I s\"]{--list-counter-style:upper-roman}.xl\\:prose ol[type=\"i s\"]{--list-counter-style:lower-roman}.xl\\:prose ol[type=\"1\"]{--list-counter-style:decimal}.xl\\:prose ol>li{position:relative;padding-left:1.75em}.xl\\:prose ol>li:before{content:counter(list-item,decimal) \".\";content:counter(list-item,var(--list-counter-style,decimal)) \".\";position:absolute;font-weight:400;color:#a0aec0;left:0}.xl\\:prose ul>li{position:relative;padding-left:1.75em}.xl\\:prose ul>li:before{content:\"\";position:absolute;background-color:#e2e8f0;border-radius:50%;width:.375em;height:.375em;top:.6875em;left:.25em}.xl\\:prose hr{border-color:#edf2f7;border-top-width:1px;margin-top:3em;margin-bottom:3em}.xl\\:prose blockquote{font-weight:500;font-style:italic;color:#1a202c;border-left-width:.25rem;border-left-color:#edf2f7;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.xl\\:prose blockquote p:first-of-type:before{content:open-quote}.xl\\:prose blockquote p:last-of-type:after{content:close-quote}.xl\\:prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.xl\\:prose h2{color:#1a202c;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.xl\\:prose h3{font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.xl\\:prose h3,.xl\\:prose h4{color:#1a202c;font-weight:600}.xl\\:prose h4{margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.xl\\:prose figure figcaption{color:#a0aec0;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.xl\\:prose code{color:#1a202c;font-weight:600;font-size:.875em}.xl\\:prose code:after,.xl\\:prose code:before{content:\"`\"}.xl\\:prose a code{color:#1a202c}.xl\\:prose pre{color:#edf2f7;background-color:#2d3748;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.xl\\:prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.xl\\:prose pre code:after,.xl\\:prose pre code:before{content:none}.xl\\:prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.xl\\:prose thead{color:#1a202c;font-weight:600;border-bottom-width:1px;border-bottom-color:#e2e8f0}.xl\\:prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.xl\\:prose tbody tr{border-bottom-width:1px;border-bottom-color:#edf2f7}.xl\\:prose tbody tr:last-child{border-bottom-width:0}.xl\\:prose tbody td{vertical-align:top;padding:.5714286em}.xl\\:prose{font-size:1rem;line-height:1.75}.xl\\:prose p{margin-top:1.25em;margin-bottom:1.25em}.xl\\:prose figure,.xl\\:prose img,.xl\\:prose video{margin-top:2em;margin-bottom:2em}.xl\\:prose figure>*{margin-top:0;margin-bottom:0}.xl\\:prose h2 code{font-size:.875em}.xl\\:prose h3 code{font-size:.9em}.xl\\:prose ol,.xl\\:prose ul{margin-top:1.25em;margin-bottom:1.25em}.xl\\:prose li{margin-top:.5em;margin-bottom:.5em}.xl\\:prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.xl\\:prose>ul>li>:first-child{margin-top:1.25em}.xl\\:prose>ul>li>:last-child{margin-bottom:1.25em}.xl\\:prose>ol>li>:first-child{margin-top:1.25em}.xl\\:prose>ol>li>:last-child{margin-bottom:1.25em}.xl\\:prose ol ol,.xl\\:prose ol ul,.xl\\:prose ul ol,.xl\\:prose ul ul{margin-top:.75em;margin-bottom:.75em}.xl\\:prose h2+*,.xl\\:prose h3+*,.xl\\:prose h4+*,.xl\\:prose hr+*{margin-top:0}.xl\\:prose thead th:first-child{padding-left:0}.xl\\:prose thead th:last-child{padding-right:0}.xl\\:prose tbody td:first-child{padding-left:0}.xl\\:prose tbody td:last-child{padding-right:0}.xl\\:prose>:first-child{margin-top:0}.xl\\:prose>:last-child{margin-bottom:0}.xl\\:prose-sm{font-size:.875rem;line-height:1.7142857}.xl\\:prose-sm p{margin-top:1.1428571em;margin-bottom:1.1428571em}.xl\\:prose-sm [class~=lead]{font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.xl\\:prose-sm blockquote{margin-top:1.3333333em;margin-bottom:1.3333333em;padding-left:1.1111111em}.xl\\:prose-sm h1{font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.xl\\:prose-sm h2{font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.xl\\:prose-sm h3{font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.xl\\:prose-sm h4{margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.xl\\:prose-sm figure,.xl\\:prose-sm img,.xl\\:prose-sm video{margin-top:1.7142857em;margin-bottom:1.7142857em}.xl\\:prose-sm figure>*{margin-top:0;margin-bottom:0}.xl\\:prose-sm figure figcaption{font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.xl\\:prose-sm code{font-size:.8571429em}.xl\\:prose-sm h2 code{font-size:.9em}.xl\\:prose-sm h3 code{font-size:.8888889em}.xl\\:prose-sm pre{font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding:.6666667em 1em}.xl\\:prose-sm ol,.xl\\:prose-sm ul{margin-top:1.1428571em;margin-bottom:1.1428571em}.xl\\:prose-sm li{margin-top:.2857143em;margin-bottom:.2857143em}.xl\\:prose-sm ol>li{padding-left:1.5714286em}.xl\\:prose-sm ol>li:before{left:0}.xl\\:prose-sm ul>li{padding-left:1.5714286em}.xl\\:prose-sm ul>li:before{height:.3571429em;width:.3571429em;top:.67857em;left:.2142857em}.xl\\:prose-sm>ul>li p{margin-top:.5714286em;margin-bottom:.5714286em}.xl\\:prose-sm>ul>li>:first-child{margin-top:1.1428571em}.xl\\:prose-sm>ul>li>:last-child{margin-bottom:1.1428571em}.xl\\:prose-sm>ol>li>:first-child{margin-top:1.1428571em}.xl\\:prose-sm>ol>li>:last-child{margin-bottom:1.1428571em}.xl\\:prose-sm ol ol,.xl\\:prose-sm ol ul,.xl\\:prose-sm ul ol,.xl\\:prose-sm ul ul{margin-top:.5714286em;margin-bottom:.5714286em}.xl\\:prose-sm hr{margin-top:2.8571429em;margin-bottom:2.8571429em}.xl\\:prose-sm h2+*,.xl\\:prose-sm h3+*,.xl\\:prose-sm h4+*,.xl\\:prose-sm hr+*{margin-top:0}.xl\\:prose-sm table{font-size:.8571429em;line-height:1.5}.xl\\:prose-sm thead th{padding-right:1em;padding-bottom:.6666667em;padding-left:1em}.xl\\:prose-sm thead th:first-child{padding-left:0}.xl\\:prose-sm thead th:last-child{padding-right:0}.xl\\:prose-sm tbody td{padding:.6666667em 1em}.xl\\:prose-sm tbody td:first-child{padding-left:0}.xl\\:prose-sm tbody td:last-child{padding-right:0}.xl\\:prose-sm>:first-child{margin-top:0}.xl\\:prose-sm>:last-child{margin-bottom:0}.xl\\:prose-lg{font-size:1.125rem;line-height:1.7777778}.xl\\:prose-lg p{margin-top:1.3333333em;margin-bottom:1.3333333em}.xl\\:prose-lg [class~=lead]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.xl\\:prose-lg blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em}.xl\\:prose-lg h1{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.xl\\:prose-lg h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.xl\\:prose-lg h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.xl\\:prose-lg h4{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.xl\\:prose-lg figure,.xl\\:prose-lg img,.xl\\:prose-lg video{margin-top:1.7777778em;margin-bottom:1.7777778em}.xl\\:prose-lg figure>*{margin-top:0;margin-bottom:0}.xl\\:prose-lg figure figcaption{font-size:.8888889em;line-height:1.5;margin-top:1em}.xl\\:prose-lg code{font-size:.8888889em}.xl\\:prose-lg h2 code{font-size:.8666667em}.xl\\:prose-lg h3 code{font-size:.875em}.xl\\:prose-lg pre{font-size:.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:.375rem;padding:1em 1.5em}.xl\\:prose-lg ol,.xl\\:prose-lg ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.xl\\:prose-lg li{margin-top:.6666667em;margin-bottom:.6666667em}.xl\\:prose-lg ol>li{padding-left:1.6666667em}.xl\\:prose-lg ol>li:before{left:0}.xl\\:prose-lg ul>li{padding-left:1.6666667em}.xl\\:prose-lg ul>li:before{width:.3333333em;height:.3333333em;top:.72222em;left:.2222222em}.xl\\:prose-lg>ul>li p{margin-top:.8888889em;margin-bottom:.8888889em}.xl\\:prose-lg>ul>li>:first-child{margin-top:1.3333333em}.xl\\:prose-lg>ul>li>:last-child{margin-bottom:1.3333333em}.xl\\:prose-lg>ol>li>:first-child{margin-top:1.3333333em}.xl\\:prose-lg>ol>li>:last-child{margin-bottom:1.3333333em}.xl\\:prose-lg ol ol,.xl\\:prose-lg ol ul,.xl\\:prose-lg ul ol,.xl\\:prose-lg ul ul{margin-top:.8888889em;margin-bottom:.8888889em}.xl\\:prose-lg hr{margin-top:3.1111111em;margin-bottom:3.1111111em}.xl\\:prose-lg h2+*,.xl\\:prose-lg h3+*,.xl\\:prose-lg h4+*,.xl\\:prose-lg hr+*{margin-top:0}.xl\\:prose-lg table{font-size:.8888889em;line-height:1.5}.xl\\:prose-lg thead th{padding-right:.75em;padding-bottom:.75em;padding-left:.75em}.xl\\:prose-lg thead th:first-child{padding-left:0}.xl\\:prose-lg thead th:last-child{padding-right:0}.xl\\:prose-lg tbody td{padding:.75em}.xl\\:prose-lg tbody td:first-child{padding-left:0}.xl\\:prose-lg tbody td:last-child{padding-right:0}.xl\\:prose-lg>:first-child{margin-top:0}.xl\\:prose-lg>:last-child{margin-bottom:0}.xl\\:prose-xl{font-size:1.25rem;line-height:1.8}.xl\\:prose-xl p{margin-top:1.2em;margin-bottom:1.2em}.xl\\:prose-xl [class~=lead]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em}.xl\\:prose-xl blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em}.xl\\:prose-xl h1{font-size:2.8em;margin-top:0;margin-bottom:.8571429em;line-height:1}.xl\\:prose-xl h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:.8888889em;line-height:1.1111111}.xl\\:prose-xl h3{font-size:1.5em;margin-top:1.6em;margin-bottom:.6666667em;line-height:1.3333333}.xl\\:prose-xl h4{margin-top:1.8em;margin-bottom:.6em;line-height:1.6}.xl\\:prose-xl figure,.xl\\:prose-xl img,.xl\\:prose-xl video{margin-top:2em;margin-bottom:2em}.xl\\:prose-xl figure>*{margin-top:0;margin-bottom:0}.xl\\:prose-xl figure figcaption{font-size:.9em;line-height:1.5555556;margin-top:1em}.xl\\:prose-xl code{font-size:.9em}.xl\\:prose-xl h2 code{font-size:.8611111em}.xl\\:prose-xl h3 code{font-size:.9em}.xl\\:prose-xl pre{font-size:.9em;line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.1111111em 1.3333333em}.xl\\:prose-xl ol,.xl\\:prose-xl ul{margin-top:1.2em;margin-bottom:1.2em}.xl\\:prose-xl li{margin-top:.6em;margin-bottom:.6em}.xl\\:prose-xl ol>li{padding-left:1.8em}.xl\\:prose-xl ol>li:before{left:0}.xl\\:prose-xl ul>li{padding-left:1.8em}.xl\\:prose-xl ul>li:before{width:.35em;height:.35em;top:.725em;left:.25em}.xl\\:prose-xl>ul>li p{margin-top:.8em;margin-bottom:.8em}.xl\\:prose-xl>ul>li>:first-child{margin-top:1.2em}.xl\\:prose-xl>ul>li>:last-child{margin-bottom:1.2em}.xl\\:prose-xl>ol>li>:first-child{margin-top:1.2em}.xl\\:prose-xl>ol>li>:last-child{margin-bottom:1.2em}.xl\\:prose-xl ol ol,.xl\\:prose-xl ol ul,.xl\\:prose-xl ul ol,.xl\\:prose-xl ul ul{margin-top:.8em;margin-bottom:.8em}.xl\\:prose-xl hr{margin-top:2.8em;margin-bottom:2.8em}.xl\\:prose-xl h2+*,.xl\\:prose-xl h3+*,.xl\\:prose-xl h4+*,.xl\\:prose-xl hr+*{margin-top:0}.xl\\:prose-xl table{font-size:.9em;line-height:1.5555556}.xl\\:prose-xl thead th{padding-right:.6666667em;padding-bottom:.8888889em;padding-left:.6666667em}.xl\\:prose-xl thead th:first-child{padding-left:0}.xl\\:prose-xl thead th:last-child{padding-right:0}.xl\\:prose-xl tbody td{padding:.8888889em .6666667em}.xl\\:prose-xl tbody td:first-child{padding-left:0}.xl\\:prose-xl tbody td:last-child{padding-right:0}.xl\\:prose-xl>:first-child{margin-top:0}.xl\\:prose-xl>:last-child{margin-bottom:0}.xl\\:prose-2xl{font-size:1.5rem;line-height:1.6666667}.xl\\:prose-2xl p{margin-top:1.3333333em;margin-bottom:1.3333333em}.xl\\:prose-2xl [class~=lead]{font-size:1.25em;line-height:1.4666667;margin-top:1.0666667em;margin-bottom:1.0666667em}.xl\\:prose-2xl blockquote{margin-top:1.7777778em;margin-bottom:1.7777778em;padding-left:1.1111111em}.xl\\:prose-2xl h1{font-size:2.6666667em;margin-top:0;margin-bottom:.875em;line-height:1}.xl\\:prose-2xl h2{font-size:2em;margin-top:1.5em;margin-bottom:.8333333em;line-height:1.0833333}.xl\\:prose-2xl h3{font-size:1.5em;margin-top:1.5555556em;margin-bottom:.6666667em;line-height:1.2222222}.xl\\:prose-2xl h4{margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.xl\\:prose-2xl figure,.xl\\:prose-2xl img,.xl\\:prose-2xl video{margin-top:2em;margin-bottom:2em}.xl\\:prose-2xl figure>*{margin-top:0;margin-bottom:0}.xl\\:prose-2xl figure figcaption{font-size:.8333333em;line-height:1.6;margin-top:1em}.xl\\:prose-2xl code{font-size:.8333333em}.xl\\:prose-2xl h2 code{font-size:.875em}.xl\\:prose-2xl h3 code{font-size:.8888889em}.xl\\:prose-2xl pre{font-size:.8333333em;line-height:1.8;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.2em 1.6em}.xl\\:prose-2xl ol,.xl\\:prose-2xl ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.xl\\:prose-2xl li{margin-top:.5em;margin-bottom:.5em}.xl\\:prose-2xl ol>li{padding-left:1.6666667em}.xl\\:prose-2xl ol>li:before{left:0}.xl\\:prose-2xl ul>li{padding-left:1.6666667em}.xl\\:prose-2xl ul>li:before{width:.3333333em;height:.3333333em;top:.66667em;left:.25em}.xl\\:prose-2xl>ul>li p{margin-top:.8333333em;margin-bottom:.8333333em}.xl\\:prose-2xl>ul>li>:first-child{margin-top:1.3333333em}.xl\\:prose-2xl>ul>li>:last-child{margin-bottom:1.3333333em}.xl\\:prose-2xl>ol>li>:first-child{margin-top:1.3333333em}.xl\\:prose-2xl>ol>li>:last-child{margin-bottom:1.3333333em}.xl\\:prose-2xl ol ol,.xl\\:prose-2xl ol ul,.xl\\:prose-2xl ul ol,.xl\\:prose-2xl ul ul{margin-top:.6666667em;margin-bottom:.6666667em}.xl\\:prose-2xl hr{margin-top:3em;margin-bottom:3em}.xl\\:prose-2xl h2+*,.xl\\:prose-2xl h3+*,.xl\\:prose-2xl h4+*,.xl\\:prose-2xl hr+*{margin-top:0}.xl\\:prose-2xl table{font-size:.8333333em;line-height:1.4}.xl\\:prose-2xl thead th{padding-right:.6em;padding-bottom:.8em;padding-left:.6em}.xl\\:prose-2xl thead th:first-child{padding-left:0}.xl\\:prose-2xl thead th:last-child{padding-right:0}.xl\\:prose-2xl tbody td{padding:.8em .6em}.xl\\:prose-2xl tbody td:first-child{padding-left:0}.xl\\:prose-2xl tbody td:last-child{padding-right:0}.xl\\:prose-2xl>:first-child{margin-top:0}.xl\\:prose-2xl>:last-child{margin-bottom:0}.xl\\:prose-red a,.xl\\:prose-red a code{color:#e53e3e}.xl\\:prose-orange a,.xl\\:prose-orange a code{color:#dd6b20}.xl\\:prose-yellow a,.xl\\:prose-yellow a code{color:#d69e2e}.xl\\:prose-green a,.xl\\:prose-green a code{color:#38a169}.xl\\:prose-teal a,.xl\\:prose-teal a code{color:#319795}.xl\\:prose-blue a,.xl\\:prose-blue a code{color:#3182ce}.xl\\:prose-indigo a,.xl\\:prose-indigo a code{color:#5a67d8}.xl\\:prose-purple a,.xl\\:prose-purple a code{color:#805ad5}.xl\\:prose-pink a,.xl\\:prose-pink a code{color:#d53f8c}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("54b3487d", content, true)

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(39);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(41);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(42);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: "?#boxicons" });
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"boxicons\";font-weight:400;font-style:normal;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\")}.bx{font-family:\"boxicons\"!important;font-weight:400;font-style:normal;font-feature-settings:normal;font-variant:normal;line-height:1;display:inline-block;text-transform:none;speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bx-ul{margin-left:2em;padding-left:0;list-style:none}.bx-ul>li{position:relative}.bx-ul .bx{font-size:inherit;line-height:inherit;position:absolute;left:-2em;width:2em;text-align:center}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@-webkit-keyframes burst{0%{transform:scale(1);opacity:1}90%{transform:scale(1.5);opacity:0}}@keyframes burst{0%{transform:scale(1);opacity:1}90%{transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{transform:translateX(0);opacity:1}75%{transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{transform:translateX(0);opacity:1}75%{transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{transform:translateX(0);opacity:1}75%{transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{transform:translateX(0);opacity:1}75%{transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{transform:translateY(0);opacity:1}75%{transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{transform:translateY(0);opacity:1}75%{transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{transform:translateY(0);opacity:1}75%{transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{transform:translateY(0);opacity:1}75%{transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{transform:scaleX(1) rotate(10deg)}40%,60%,80%{transform:scaleX(1) rotate(-10deg)}to{transform:scaleX(1)}}@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{transform:scaleX(1) rotate(10deg)}40%,60%,80%{transform:rotate(-10deg)}to{transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s linear infinite;animation:flashing 1.5s linear infinite}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s linear infinite;animation:burst 1.5s linear infinite}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s linear infinite;animation:fade-up 1.5s linear infinite}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s linear infinite;animation:fade-down 1.5s linear infinite}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s linear infinite;animation:fade-left 1.5s linear infinite}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s linear infinite;animation:fade-right 1.5s linear infinite}.bx-xs{font-size:1rem!important}.bx-sm{font-size:1.55rem!important}.bx-md{font-size:2.25rem!important}.bx-fw{font-size:1.2857142857em;line-height:.8em;width:1.2857142857em;height:.8em;margin-top:-.2em!important;vertical-align:middle}.bx-lg{font-size:3!important}.bx-pull-left{float:left;margin-right:.3em!important}.bx-pull-right{float:right;margin-left:.3em!important}.bx-rotate-90{transform:rotate(90deg);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0,mirror=1)\"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2,mirror=1)\"}.bx-border{padding:.25em;border:.07em solid rgba(0,0,0,.1);border-radius:.25em}.bx-border-circle{padding:.25em;border:.07em solid rgba(0,0,0,.1);border-radius:50%}.bx-abacus:before{content:\"\\e900\"}.bx-accessibility:before{content:\"\\e901\"}.bx-add-to-queue:before{content:\"\\e902\"}.bx-adjust:before{content:\"\\e903\"}.bx-alarm:before{content:\"\\e904\"}.bx-alarm-add:before{content:\"\\e905\"}.bx-alarm-exclamation:before{content:\"\\e906\"}.bx-alarm-off:before{content:\"\\e907\"}.bx-alarm-snooze:before{content:\"\\e908\"}.bx-album:before{content:\"\\e909\"}.bx-align-justify:before{content:\"\\e90a\"}.bx-align-left:before{content:\"\\e90b\"}.bx-align-middle:before{content:\"\\e90c\"}.bx-align-right:before{content:\"\\e90d\"}.bx-analyse:before{content:\"\\e90e\"}.bx-anchor:before{content:\"\\e90f\"}.bx-angry:before{content:\"\\e910\"}.bx-aperture:before{content:\"\\e911\"}.bx-arch:before{content:\"\\e912\"}.bx-archive:before{content:\"\\e913\"}.bx-archive-in:before{content:\"\\e914\"}.bx-archive-out:before{content:\"\\e915\"}.bx-area:before{content:\"\\e916\"}.bx-arrow-back:before{content:\"\\e917\"}.bx-arrow-from-bottom:before{content:\"\\e918\"}.bx-arrow-from-left:before{content:\"\\e919\"}.bx-arrow-from-right:before{content:\"\\e91a\"}.bx-arrow-from-top:before{content:\"\\e91b\"}.bx-arrow-to-bottom:before{content:\"\\e91c\"}.bx-arrow-to-left:before{content:\"\\e91d\"}.bx-arrow-to-right:before{content:\"\\e91e\"}.bx-arrow-to-top:before{content:\"\\e91f\"}.bx-at:before{content:\"\\e920\"}.bx-atom:before{content:\"\\e921\"}.bx-award:before{content:\"\\e922\"}.bx-badge:before{content:\"\\e923\"}.bx-badge-check:before{content:\"\\e924\"}.bx-ball:before{content:\"\\e925\"}.bx-band-aid:before{content:\"\\e926\"}.bx-bar-chart:before{content:\"\\e927\"}.bx-bar-chart-alt:before{content:\"\\e928\"}.bx-bar-chart-alt-2:before{content:\"\\e929\"}.bx-bar-chart-square:before{content:\"\\e92a\"}.bx-barcode:before{content:\"\\e92b\"}.bx-barcode-reader:before{content:\"\\e92c\"}.bx-baseball:before{content:\"\\e92d\"}.bx-basket:before{content:\"\\e92e\"}.bx-basketball:before{content:\"\\e92f\"}.bx-bath:before{content:\"\\e930\"}.bx-battery:before{content:\"\\e931\"}.bx-bed:before{content:\"\\e932\"}.bx-been-here:before{content:\"\\e933\"}.bx-beer:before{content:\"\\e934\"}.bx-bell:before{content:\"\\e935\"}.bx-bell-minus:before{content:\"\\e936\"}.bx-bell-off:before{content:\"\\e937\"}.bx-bell-plus:before{content:\"\\e938\"}.bx-bible:before{content:\"\\e939\"}.bx-bitcoin:before{content:\"\\e93a\"}.bx-blanket:before{content:\"\\e93b\"}.bx-block:before{content:\"\\e93c\"}.bx-bluetooth:before{content:\"\\e93d\"}.bx-body:before{content:\"\\e93e\"}.bx-bold:before{content:\"\\e93f\"}.bx-bolt-circle:before{content:\"\\e940\"}.bx-bomb:before{content:\"\\e941\"}.bx-bone:before{content:\"\\e942\"}.bx-bong:before{content:\"\\e943\"}.bx-book:before{content:\"\\e944\"}.bx-book-add:before{content:\"\\e945\"}.bx-book-alt:before{content:\"\\e946\"}.bx-book-bookmark:before{content:\"\\e947\"}.bx-book-content:before{content:\"\\e948\"}.bx-book-heart:before{content:\"\\e949\"}.bx-bookmark:before{content:\"\\e94a\"}.bx-bookmark-alt:before{content:\"\\e94b\"}.bx-bookmark-alt-minus:before{content:\"\\e94c\"}.bx-bookmark-alt-plus:before{content:\"\\e94d\"}.bx-bookmark-heart:before{content:\"\\e94e\"}.bx-bookmark-minus:before{content:\"\\e94f\"}.bx-bookmark-plus:before{content:\"\\e950\"}.bx-bookmarks:before{content:\"\\e951\"}.bx-book-open:before{content:\"\\e952\"}.bx-book-reader:before{content:\"\\e953\"}.bx-border-all:before{content:\"\\e954\"}.bx-border-bottom:before{content:\"\\e955\"}.bx-border-inner:before{content:\"\\e956\"}.bx-border-left:before{content:\"\\e957\"}.bx-border-none:before{content:\"\\e958\"}.bx-border-outer:before{content:\"\\e959\"}.bx-border-radius:before{content:\"\\e95a\"}.bx-border-right:before{content:\"\\e95b\"}.bx-border-top:before{content:\"\\e95c\"}.bx-bot:before{content:\"\\e95d\"}.bx-bowling-ball:before{content:\"\\e95e\"}.bx-box:before{content:\"\\e95f\"}.bx-bracket:before{content:\"\\e960\"}.bx-braille:before{content:\"\\e961\"}.bx-brain:before{content:\"\\e962\"}.bx-briefcase:before{content:\"\\e963\"}.bx-briefcase-alt:before{content:\"\\e964\"}.bx-briefcase-alt-2:before{content:\"\\e965\"}.bx-brightness:before{content:\"\\e966\"}.bx-brightness-half:before{content:\"\\e967\"}.bx-broadcast:before{content:\"\\e968\"}.bx-brush:before{content:\"\\e969\"}.bx-brush-alt:before{content:\"\\e96a\"}.bx-bug:before{content:\"\\e96b\"}.bx-bug-alt:before{content:\"\\e96c\"}.bx-building:before{content:\"\\e96d\"}.bx-building-house:before{content:\"\\e96e\"}.bx-buildings:before{content:\"\\e96f\"}.bx-bulb:before{content:\"\\e970\"}.bx-bullseye:before{content:\"\\e971\"}.bx-buoy:before{content:\"\\e972\"}.bx-bus:before{content:\"\\e973\"}.bx-bus-school:before{content:\"\\e974\"}.bx-cabinet:before{content:\"\\e975\"}.bx-cake:before{content:\"\\e976\"}.bx-calculator:before{content:\"\\e977\"}.bx-calendar:before{content:\"\\e978\"}.bx-calendar-alt:before{content:\"\\e979\"}.bx-calendar-check:before{content:\"\\e97a\"}.bx-calendar-edit:before{content:\"\\e97b\"}.bx-calendar-event:before{content:\"\\e97c\"}.bx-calendar-exclamation:before{content:\"\\e97d\"}.bx-calendar-heart:before{content:\"\\e97e\"}.bx-calendar-minus:before{content:\"\\e97f\"}.bx-calendar-plus:before{content:\"\\e980\"}.bx-calendar-star:before{content:\"\\e981\"}.bx-calendar-week:before{content:\"\\e982\"}.bx-calendar-x:before{content:\"\\e983\"}.bx-camera:before{content:\"\\e984\"}.bx-camera-home:before{content:\"\\e985\"}.bx-camera-movie:before{content:\"\\e986\"}.bx-camera-off:before{content:\"\\e987\"}.bx-capsule:before{content:\"\\e988\"}.bx-captions:before{content:\"\\e989\"}.bx-car:before{content:\"\\e98a\"}.bx-card:before{content:\"\\e98b\"}.bx-caret-down:before{content:\"\\e98c\"}.bx-caret-down-circle:before{content:\"\\e98d\"}.bx-caret-down-square:before{content:\"\\e98e\"}.bx-caret-left:before{content:\"\\e98f\"}.bx-caret-left-circle:before{content:\"\\e990\"}.bx-caret-left-square:before{content:\"\\e991\"}.bx-caret-right:before{content:\"\\e992\"}.bx-caret-right-circle:before{content:\"\\e993\"}.bx-caret-right-square:before{content:\"\\e994\"}.bx-caret-up:before{content:\"\\e995\"}.bx-caret-up-circle:before{content:\"\\e996\"}.bx-caret-up-square:before{content:\"\\e997\"}.bx-carousel:before{content:\"\\e998\"}.bx-cart:before{content:\"\\e999\"}.bx-cart-alt:before{content:\"\\e99a\"}.bx-cast:before{content:\"\\e99b\"}.bx-category:before{content:\"\\e99c\"}.bx-category-alt:before{content:\"\\e99d\"}.bx-cctv:before{content:\"\\e99e\"}.bx-certification:before{content:\"\\e99f\"}.bx-chair:before{content:\"\\e9a0\"}.bx-chalkboard:before{content:\"\\e9a1\"}.bx-chart:before{content:\"\\e9a2\"}.bx-chat:before{content:\"\\e9a3\"}.bx-check:before{content:\"\\e9a4\"}.bx-checkbox:before{content:\"\\e9a5\"}.bx-checkbox-checked:before{content:\"\\e9a6\"}.bx-checkbox-square:before{content:\"\\e9a7\"}.bx-check-circle:before{content:\"\\e9a8\"}.bx-check-double:before{content:\"\\e9a9\"}.bx-check-shield:before{content:\"\\e9aa\"}.bx-check-square:before{content:\"\\e9ab\"}.bx-chevron-down:before{content:\"\\e9ac\"}.bx-chevron-down-circle:before{content:\"\\e9ad\"}.bx-chevron-down-square:before{content:\"\\e9ae\"}.bx-chevron-left:before{content:\"\\e9af\"}.bx-chevron-left-circle:before{content:\"\\e9b0\"}.bx-chevron-left-square:before{content:\"\\e9b1\"}.bx-chevron-right:before{content:\"\\e9b2\"}.bx-chevron-right-circle:before{content:\"\\e9b3\"}.bx-chevron-right-square:before{content:\"\\e9b4\"}.bx-chevrons-down:before{content:\"\\e9b5\"}.bx-chevrons-left:before{content:\"\\e9b6\"}.bx-chevrons-right:before{content:\"\\e9b7\"}.bx-chevrons-up:before{content:\"\\e9b8\"}.bx-chevron-up:before{content:\"\\e9b9\"}.bx-chevron-up-circle:before{content:\"\\e9ba\"}.bx-chevron-up-square:before{content:\"\\e9bb\"}.bx-chip:before{content:\"\\e9bc\"}.bx-church:before{content:\"\\e9bd\"}.bx-circle:before{content:\"\\e9be\"}.bx-clinic:before{content:\"\\e9bf\"}.bx-clipboard:before{content:\"\\e9c0\"}.bx-closet:before{content:\"\\e9c1\"}.bx-cloud:before{content:\"\\e9c2\"}.bx-cloud-download:before{content:\"\\e9c3\"}.bx-cloud-drizzle:before{content:\"\\e9c4\"}.bx-cloud-lightning:before{content:\"\\e9c5\"}.bx-cloud-light-rain:before{content:\"\\e9c6\"}.bx-cloud-rain:before{content:\"\\e9c7\"}.bx-cloud-snow:before{content:\"\\e9c8\"}.bx-cloud-upload:before{content:\"\\e9c9\"}.bx-code:before{content:\"\\e9ca\"}.bx-code-alt:before{content:\"\\e9cb\"}.bx-code-block:before{content:\"\\e9cc\"}.bx-code-curly:before{content:\"\\e9cd\"}.bx-coffee:before{content:\"\\e9ce\"}.bx-coffee-togo:before{content:\"\\e9cf\"}.bx-cog:before{content:\"\\e9d0\"}.bx-coin:before{content:\"\\e9d1\"}.bx-coin-stack:before{content:\"\\e9d2\"}.bx-collapse:before{content:\"\\e9d3\"}.bx-collection:before{content:\"\\e9d4\"}.bx-color-fill:before{content:\"\\e9d5\"}.bx-columns:before{content:\"\\e9d6\"}.bx-command:before{content:\"\\e9d7\"}.bx-comment:before{content:\"\\e9d8\"}.bx-comment-add:before{content:\"\\e9d9\"}.bx-comment-check:before{content:\"\\e9da\"}.bx-comment-detail:before{content:\"\\e9db\"}.bx-comment-dots:before{content:\"\\e9dc\"}.bx-comment-edit:before{content:\"\\e9dd\"}.bx-comment-error:before{content:\"\\e9de\"}.bx-comment-minus:before{content:\"\\e9df\"}.bx-comment-x:before{content:\"\\e9e0\"}.bx-compass:before{content:\"\\e9e1\"}.bx-confused:before{content:\"\\e9e2\"}.bx-conversation:before{content:\"\\e9e3\"}.bx-cookie:before{content:\"\\e9e4\"}.bx-cool:before{content:\"\\e9e5\"}.bx-copy:before{content:\"\\e9e6\"}.bx-copy-alt:before{content:\"\\e9e7\"}.bx-copyright:before{content:\"\\e9e8\"}.bx-credit-card:before{content:\"\\e9e9\"}.bx-credit-card-alt:before{content:\"\\e9ea\"}.bx-credit-card-front:before{content:\"\\e9eb\"}.bx-crop:before{content:\"\\e9ec\"}.bx-crosshair:before{content:\"\\e9ed\"}.bx-crown:before{content:\"\\e9ee\"}.bx-cube:before{content:\"\\e9ef\"}.bx-cube-alt:before{content:\"\\e9f0\"}.bx-cuboid:before{content:\"\\e9f1\"}.bx-current-location:before{content:\"\\e9f2\"}.bx-customize:before{content:\"\\e9f3\"}.bx-cut:before{content:\"\\e9f4\"}.bx-cycling:before{content:\"\\e9f5\"}.bx-cylinder:before{content:\"\\e9f6\"}.bx-data:before{content:\"\\e9f7\"}.bx-desktop:before{content:\"\\e9f8\"}.bx-detail:before{content:\"\\e9f9\"}.bx-devices:before{content:\"\\e9fa\"}.bx-dialpad:before{content:\"\\e9fb\"}.bx-dialpad-alt:before{content:\"\\e9fc\"}.bx-diamond:before{content:\"\\e9fd\"}.bx-dice-1:before{content:\"\\e9fe\"}.bx-dice-2:before{content:\"\\e9ff\"}.bx-dice-3:before{content:\"\\ea00\"}.bx-dice-4:before{content:\"\\ea01\"}.bx-dice-5:before{content:\"\\ea02\"}.bx-dice-6:before{content:\"\\ea03\"}.bx-directions:before{content:\"\\ea04\"}.bx-disc:before{content:\"\\ea05\"}.bx-dish:before{content:\"\\ea06\"}.bx-dislike:before{content:\"\\ea07\"}.bx-dizzy:before{content:\"\\ea08\"}.bx-dna:before{content:\"\\ea09\"}.bx-dock-bottom:before{content:\"\\ea0a\"}.bx-dock-left:before{content:\"\\ea0b\"}.bx-dock-right:before{content:\"\\ea0c\"}.bx-dock-top:before{content:\"\\ea0d\"}.bx-dollar:before{content:\"\\ea0e\"}.bx-dollar-circle:before{content:\"\\ea0f\"}.bx-donate-blood:before{content:\"\\ea10\"}.bx-donate-heart:before{content:\"\\ea11\"}.bx-door-open:before{content:\"\\ea12\"}.bx-dots-horizontal:before{content:\"\\ea13\"}.bx-dots-horizontal-rounded:before{content:\"\\ea14\"}.bx-dots-vertical:before{content:\"\\ea15\"}.bx-dots-vertical-rounded:before{content:\"\\ea16\"}.bx-doughnut-chart:before{content:\"\\ea17\"}.bx-down-arrow:before{content:\"\\ea18\"}.bx-down-arrow-alt:before{content:\"\\ea19\"}.bx-down-arrow-circle:before{content:\"\\ea1a\"}.bx-download:before{content:\"\\ea1b\"}.bx-downvote:before{content:\"\\ea1c\"}.bx-drink:before{content:\"\\ea1d\"}.bx-droplet:before{content:\"\\ea1e\"}.bx-dumbbell:before{content:\"\\ea1f\"}.bx-duplicate:before{content:\"\\ea20\"}.bx-edit:before{content:\"\\ea21\"}.bx-edit-alt:before{content:\"\\ea22\"}.bx-envelope:before{content:\"\\ea23\"}.bx-envelope-open:before{content:\"\\ea24\"}.bx-equalizer:before{content:\"\\ea25\"}.bx-eraser:before{content:\"\\ea26\"}.bx-error:before{content:\"\\ea27\"}.bx-error-alt:before{content:\"\\ea28\"}.bx-error-circle:before{content:\"\\ea29\"}.bx-euro:before{content:\"\\ea2a\"}.bx-exclude:before{content:\"\\ea2b\"}.bx-exit:before{content:\"\\ea2c\"}.bx-exit-fullscreen:before{content:\"\\ea2d\"}.bx-expand:before{content:\"\\ea2e\"}.bx-expand-alt:before{content:\"\\ea2f\"}.bx-export:before{content:\"\\ea30\"}.bx-extension:before{content:\"\\ea31\"}.bx-face:before{content:\"\\ea32\"}.bx-fast-forward:before{content:\"\\ea33\"}.bx-fast-forward-circle:before{content:\"\\ea34\"}.bx-female:before{content:\"\\ea35\"}.bx-female-sign:before{content:\"\\ea36\"}.bx-file:before{content:\"\\ea37\"}.bx-file-blank:before{content:\"\\ea38\"}.bx-file-find:before{content:\"\\ea39\"}.bx-film:before{content:\"\\ea3a\"}.bx-filter:before{content:\"\\ea3b\"}.bx-filter-alt:before{content:\"\\ea3c\"}.bx-fingerprint:before{content:\"\\ea3d\"}.bx-first-aid:before{content:\"\\ea3e\"}.bx-first-page:before{content:\"\\ea3f\"}.bx-flag:before{content:\"\\ea40\"}.bx-folder:before{content:\"\\ea41\"}.bx-folder-minus:before{content:\"\\ea42\"}.bx-folder-open:before{content:\"\\ea43\"}.bx-folder-plus:before{content:\"\\ea44\"}.bx-font:before{content:\"\\ea45\"}.bx-font-color:before{content:\"\\ea46\"}.bx-font-family:before{content:\"\\ea47\"}.bx-font-size:before{content:\"\\ea48\"}.bx-food-menu:before{content:\"\\ea49\"}.bx-food-tag:before{content:\"\\ea4a\"}.bx-football:before{content:\"\\ea4b\"}.bx-fridge:before{content:\"\\ea4c\"}.bx-fullscreen:before{content:\"\\ea4d\"}.bx-game:before{content:\"\\ea4e\"}.bx-gas-pump:before{content:\"\\ea4f\"}.bx-ghost:before{content:\"\\ea50\"}.bx-gift:before{content:\"\\ea51\"}.bx-git-branch:before{content:\"\\ea52\"}.bx-git-commit:before{content:\"\\ea53\"}.bx-git-compare:before{content:\"\\ea54\"}.bx-git-merge:before{content:\"\\ea55\"}.bx-git-pull-request:before{content:\"\\ea56\"}.bx-git-repo-forked:before{content:\"\\ea57\"}.bx-glasses:before{content:\"\\ea58\"}.bx-glasses-alt:before{content:\"\\ea59\"}.bx-globe:before{content:\"\\ea5a\"}.bx-globe-alt:before{content:\"\\ea5b\"}.bx-grid:before{content:\"\\ea5c\"}.bx-grid-alt:before{content:\"\\ea5d\"}.bx-grid-horizontal:before{content:\"\\ea5e\"}.bx-grid-small:before{content:\"\\ea5f\"}.bx-grid-vertical:before{content:\"\\ea60\"}.bx-group:before{content:\"\\ea61\"}.bx-handicap:before{content:\"\\ea62\"}.bx-happy:before{content:\"\\ea63\"}.bx-happy-alt:before{content:\"\\ea64\"}.bx-happy-beaming:before{content:\"\\ea65\"}.bx-happy-heart-eyes:before{content:\"\\ea66\"}.bx-hash:before{content:\"\\ea67\"}.bx-hdd:before{content:\"\\ea68\"}.bx-heading:before{content:\"\\ea69\"}.bx-headphone:before{content:\"\\ea6a\"}.bx-health:before{content:\"\\ea6b\"}.bx-heart:before{content:\"\\ea6c\"}.bx-heart-circle:before{content:\"\\ea6d\"}.bx-heart-square:before{content:\"\\ea6e\"}.bx-help-circle:before{content:\"\\ea6f\"}.bx-hide:before{content:\"\\ea70\"}.bx-highlight:before{content:\"\\ea71\"}.bx-history:before{content:\"\\ea72\"}.bx-hive:before{content:\"\\ea73\"}.bx-home:before{content:\"\\ea74\"}.bx-home-alt:before{content:\"\\ea75\"}.bx-home-circle:before{content:\"\\ea76\"}.bx-home-heart:before{content:\"\\ea77\"}.bx-home-smile:before{content:\"\\ea78\"}.bx-horizontal-center:before{content:\"\\ea79\"}.bx-hotel:before{content:\"\\ea7a\"}.bx-hourglass:before{content:\"\\ea7b\"}.bx-id-card:before{content:\"\\ea7c\"}.bx-image:before{content:\"\\ea7d\"}.bx-image-add:before{content:\"\\ea7e\"}.bx-image-alt:before{content:\"\\ea7f\"}.bx-images:before{content:\"\\ea80\"}.bx-import:before{content:\"\\ea81\"}.bx-infinite:before{content:\"\\ea82\"}.bx-info-circle:before{content:\"\\ea83\"}.bx-info-square:before{content:\"\\ea84\"}.bx-intersect:before{content:\"\\ea85\"}.bx-italic:before{content:\"\\ea86\"}.bx-joystick:before{content:\"\\ea87\"}.bx-joystick-alt:before{content:\"\\ea88\"}.bx-joystick-button:before{content:\"\\ea89\"}.bx-key:before{content:\"\\ea8a\"}.bx-label:before{content:\"\\ea8b\"}.bx-landscape:before{content:\"\\ea8c\"}.bx-laptop:before{content:\"\\ea8d\"}.bx-last-page:before{content:\"\\ea8e\"}.bx-laugh:before{content:\"\\ea8f\"}.bx-layer:before{content:\"\\ea90\"}.bx-layer-minus:before{content:\"\\ea91\"}.bx-layer-plus:before{content:\"\\ea92\"}.bx-layout:before{content:\"\\ea93\"}.bx-left-arrow:before{content:\"\\ea94\"}.bx-left-arrow-alt:before{content:\"\\ea95\"}.bx-left-arrow-circle:before{content:\"\\ea96\"}.bx-left-down-arrow-circle:before{content:\"\\ea97\"}.bx-left-indent:before{content:\"\\ea98\"}.bx-left-top-arrow-circle:before{content:\"\\ea99\"}.bx-library:before{content:\"\\ea9a\"}.bx-like:before{content:\"\\ea9b\"}.bx-line-chart:before{content:\"\\ea9c\"}.bx-line-chart-down:before{content:\"\\ea9d\"}.bx-link:before{content:\"\\ea9e\"}.bx-link-alt:before{content:\"\\ea9f\"}.bx-link-external:before{content:\"\\eaa0\"}.bx-lira:before{content:\"\\eaa1\"}.bx-list-check:before{content:\"\\eaa2\"}.bx-list-minus:before{content:\"\\eaa3\"}.bx-list-ol:before{content:\"\\eaa4\"}.bx-list-plus:before{content:\"\\eaa5\"}.bx-list-ul:before{content:\"\\eaa6\"}.bx-loader:before{content:\"\\eaa7\"}.bx-loader-alt:before{content:\"\\eaa8\"}.bx-loader-circle:before{content:\"\\eaa9\"}.bx-location-plus:before{content:\"\\eaaa\"}.bx-lock:before{content:\"\\eaab\"}.bx-lock-alt:before{content:\"\\eaac\"}.bx-lock-open:before{content:\"\\eaad\"}.bx-lock-open-alt:before{content:\"\\eaae\"}.bx-log-in:before{content:\"\\eaaf\"}.bx-log-in-circle:before{content:\"\\eab0\"}.bx-log-out:before{content:\"\\eab1\"}.bx-log-out-circle:before{content:\"\\eab2\"}.bx-low-vision:before{content:\"\\eab3\"}.bx-magnet:before{content:\"\\eab4\"}.bx-mail-send:before{content:\"\\eab5\"}.bx-male:before{content:\"\\eab6\"}.bx-male-sign:before{content:\"\\eab7\"}.bx-map:before{content:\"\\eab8\"}.bx-map-alt:before{content:\"\\eab9\"}.bx-map-pin:before{content:\"\\eaba\"}.bx-mask:before{content:\"\\eabb\"}.bx-medal:before{content:\"\\eabc\"}.bx-meh:before{content:\"\\eabd\"}.bx-meh-alt:before{content:\"\\eabe\"}.bx-meh-blank:before{content:\"\\eabf\"}.bx-memory-card:before{content:\"\\eac0\"}.bx-menu:before{content:\"\\eac1\"}.bx-menu-alt-left:before{content:\"\\eac2\"}.bx-menu-alt-right:before{content:\"\\eac3\"}.bx-merge:before{content:\"\\eac4\"}.bx-message:before{content:\"\\eac5\"}.bx-message-add:before{content:\"\\eac6\"}.bx-message-alt:before{content:\"\\eac7\"}.bx-message-alt-add:before{content:\"\\eac8\"}.bx-message-alt-check:before{content:\"\\eac9\"}.bx-message-alt-detail:before{content:\"\\eaca\"}.bx-message-alt-dots:before{content:\"\\eacb\"}.bx-message-alt-edit:before{content:\"\\eacc\"}.bx-message-alt-error:before{content:\"\\eacd\"}.bx-message-alt-minus:before{content:\"\\eace\"}.bx-message-alt-x:before{content:\"\\eacf\"}.bx-message-check:before{content:\"\\ead0\"}.bx-message-detail:before{content:\"\\ead1\"}.bx-message-dots:before{content:\"\\ead2\"}.bx-message-edit:before{content:\"\\ead3\"}.bx-message-error:before{content:\"\\ead4\"}.bx-message-minus:before{content:\"\\ead5\"}.bx-message-rounded:before{content:\"\\ead6\"}.bx-message-rounded-add:before{content:\"\\ead7\"}.bx-message-rounded-check:before{content:\"\\ead8\"}.bx-message-rounded-detail:before{content:\"\\ead9\"}.bx-message-rounded-dots:before{content:\"\\eada\"}.bx-message-rounded-edit:before{content:\"\\eadb\"}.bx-message-rounded-error:before{content:\"\\eadc\"}.bx-message-rounded-minus:before{content:\"\\eadd\"}.bx-message-rounded-x:before{content:\"\\eade\"}.bx-message-square:before{content:\"\\eadf\"}.bx-message-square-add:before{content:\"\\eae0\"}.bx-message-square-check:before{content:\"\\eae1\"}.bx-message-square-detail:before{content:\"\\eae2\"}.bx-message-square-dots:before{content:\"\\eae3\"}.bx-message-square-edit:before{content:\"\\eae4\"}.bx-message-square-error:before{content:\"\\eae5\"}.bx-message-square-minus:before{content:\"\\eae6\"}.bx-message-square-x:before{content:\"\\eae7\"}.bx-message-x:before{content:\"\\eae8\"}.bx-meteor:before{content:\"\\eae9\"}.bx-microchip:before{content:\"\\eaea\"}.bx-microphone:before{content:\"\\eaeb\"}.bx-microphone-off:before{content:\"\\eaec\"}.bx-minus:before{content:\"\\eaed\"}.bx-minus-back:before{content:\"\\eaee\"}.bx-minus-circle:before{content:\"\\eaef\"}.bx-minus-front:before{content:\"\\eaf0\"}.bx-mobile:before{content:\"\\eaf1\"}.bx-mobile-alt:before{content:\"\\eaf2\"}.bx-mobile-landscape:before{content:\"\\eaf3\"}.bx-mobile-vibration:before{content:\"\\eaf4\"}.bx-money:before{content:\"\\eaf5\"}.bx-moon:before{content:\"\\eaf6\"}.bx-mouse:before{content:\"\\eaf7\"}.bx-mouse-alt:before{content:\"\\eaf8\"}.bx-move:before{content:\"\\eaf9\"}.bx-move-horizontal:before{content:\"\\eafa\"}.bx-move-vertical:before{content:\"\\eafb\"}.bx-movie:before{content:\"\\eafc\"}.bx-movie-play:before{content:\"\\eafd\"}.bx-music:before{content:\"\\eafe\"}.bx-navigation:before{content:\"\\eaff\"}.bx-network-chart:before{content:\"\\eb00\"}.bx-news:before{content:\"\\eb01\"}.bx-no-entry:before{content:\"\\eb02\"}.bx-note:before{content:\"\\eb03\"}.bx-notepad:before{content:\"\\eb04\"}.bx-notification:before{content:\"\\eb05\"}.bx-notification-off:before{content:\"\\eb06\"}.bx-outline:before{content:\"\\eb07\"}.bx-package:before{content:\"\\eb08\"}.bx-paint:before{content:\"\\eb09\"}.bx-paint-roll:before{content:\"\\eb0a\"}.bx-palette:before{content:\"\\eb0b\"}.bx-paperclip:before{content:\"\\eb0c\"}.bx-paper-plane:before{content:\"\\eb0d\"}.bx-paragraph:before{content:\"\\eb0e\"}.bx-paste:before{content:\"\\eb0f\"}.bx-pause:before{content:\"\\eb10\"}.bx-pause-circle:before{content:\"\\eb11\"}.bx-pen:before{content:\"\\eb12\"}.bx-pencil:before{content:\"\\eb13\"}.bx-phone:before{content:\"\\eb14\"}.bx-phone-call:before{content:\"\\eb15\"}.bx-phone-incoming:before{content:\"\\eb16\"}.bx-phone-outgoing:before{content:\"\\eb17\"}.bx-photo-album:before{content:\"\\eb18\"}.bx-pie-chart:before{content:\"\\eb19\"}.bx-pie-chart-alt:before{content:\"\\eb1a\"}.bx-pie-chart-alt-2:before{content:\"\\eb1b\"}.bx-pin:before{content:\"\\eb1c\"}.bx-planet:before{content:\"\\eb1d\"}.bx-play:before{content:\"\\eb1e\"}.bx-play-circle:before{content:\"\\eb1f\"}.bx-plug:before{content:\"\\eb20\"}.bx-plus:before{content:\"\\eb21\"}.bx-plus-circle:before{content:\"\\eb22\"}.bx-plus-medical:before{content:\"\\eb23\"}.bx-pointer:before{content:\"\\eb24\"}.bx-poll:before{content:\"\\eb25\"}.bx-polygon:before{content:\"\\eb26\"}.bx-pound:before{content:\"\\eb27\"}.bx-power-off:before{content:\"\\eb28\"}.bx-printer:before{content:\"\\eb29\"}.bx-pulse:before{content:\"\\eb2a\"}.bx-purchase-tag:before{content:\"\\eb2b\"}.bx-purchase-tag-alt:before{content:\"\\eb2c\"}.bx-pyramid:before{content:\"\\eb2d\"}.bx-question-mark:before{content:\"\\eb2e\"}.bx-radar:before{content:\"\\eb2f\"}.bx-radio:before{content:\"\\eb30\"}.bx-radio-circle:before{content:\"\\eb31\"}.bx-radio-circle-marked:before{content:\"\\eb32\"}.bx-receipt:before{content:\"\\eb33\"}.bx-rectangle:before{content:\"\\eb34\"}.bx-recycle:before{content:\"\\eb35\"}.bx-redo:before{content:\"\\eb36\"}.bx-refresh:before{content:\"\\eb37\"}.bx-rename:before{content:\"\\eb38\"}.bx-repeat:before{content:\"\\eb39\"}.bx-reply:before{content:\"\\eb3a\"}.bx-reply-all:before{content:\"\\eb3b\"}.bx-repost:before{content:\"\\eb3c\"}.bx-reset:before{content:\"\\eb3d\"}.bx-restaurant:before{content:\"\\eb3e\"}.bx-revision:before{content:\"\\eb3f\"}.bx-rewind:before{content:\"\\eb40\"}.bx-rewind-circle:before{content:\"\\eb41\"}.bx-right-arrow:before{content:\"\\eb42\"}.bx-right-arrow-alt:before{content:\"\\eb43\"}.bx-right-arrow-circle:before{content:\"\\eb44\"}.bx-right-down-arrow-circle:before{content:\"\\eb45\"}.bx-right-indent:before{content:\"\\eb46\"}.bx-right-top-arrow-circle:before{content:\"\\eb47\"}.bx-rocket:before{content:\"\\eb48\"}.bx-rotate-left:before{content:\"\\eb49\"}.bx-rotate-right:before{content:\"\\eb4a\"}.bx-rss:before{content:\"\\eb4b\"}.bx-ruble:before{content:\"\\eb4c\"}.bx-ruler:before{content:\"\\eb4d\"}.bx-run:before{content:\"\\eb4e\"}.bx-rupee:before{content:\"\\eb4f\"}.bx-sad:before{content:\"\\eb50\"}.bx-save:before{content:\"\\eb51\"}.bx-scan:before{content:\"\\eb52\"}.bx-screenshot:before{content:\"\\eb53\"}.bx-search:before{content:\"\\eb54\"}.bx-search-alt:before{content:\"\\eb55\"}.bx-search-alt-2:before{content:\"\\eb56\"}.bx-selection:before{content:\"\\eb57\"}.bx-select-multiple:before{content:\"\\eb58\"}.bx-send:before{content:\"\\eb59\"}.bx-server:before{content:\"\\eb5a\"}.bx-shape-circle:before{content:\"\\eb5b\"}.bx-shape-polygon:before{content:\"\\eb5c\"}.bx-shape-square:before{content:\"\\eb5d\"}.bx-shape-triangle:before{content:\"\\eb5e\"}.bx-share:before{content:\"\\eb5f\"}.bx-share-alt:before{content:\"\\eb60\"}.bx-shekel:before{content:\"\\eb61\"}.bx-shield:before{content:\"\\eb62\"}.bx-shield-alt:before{content:\"\\eb63\"}.bx-shield-alt-2:before{content:\"\\eb64\"}.bx-shield-quarter:before{content:\"\\eb65\"}.bx-shield-x:before{content:\"\\eb66\"}.bx-shocked:before{content:\"\\eb67\"}.bx-shopping-bag:before{content:\"\\eb68\"}.bx-show:before{content:\"\\eb69\"}.bx-show-alt:before{content:\"\\eb6a\"}.bx-shuffle:before{content:\"\\eb6b\"}.bx-sidebar:before{content:\"\\eb6c\"}.bx-sitemap:before{content:\"\\eb6d\"}.bx-skip-next:before{content:\"\\eb6e\"}.bx-skip-next-circle:before{content:\"\\eb6f\"}.bx-skip-previous:before{content:\"\\eb70\"}.bx-skip-previous-circle:before{content:\"\\eb71\"}.bx-sleepy:before{content:\"\\eb72\"}.bx-slider:before{content:\"\\eb73\"}.bx-slider-alt:before{content:\"\\eb74\"}.bx-slideshow:before{content:\"\\eb75\"}.bx-smile:before{content:\"\\eb76\"}.bx-sort:before{content:\"\\eb77\"}.bx-sort-alt-2:before{content:\"\\eb78\"}.bx-sort-a-z:before{content:\"\\eb79\"}.bx-sort-down:before{content:\"\\eb7a\"}.bx-sort-up:before{content:\"\\eb7b\"}.bx-sort-z-a:before{content:\"\\eb7c\"}.bx-spa:before{content:\"\\eb7d\"}.bx-space-bar:before{content:\"\\eb7e\"}.bx-spray-can:before{content:\"\\eb7f\"}.bx-spreadsheet:before{content:\"\\eb80\"}.bx-square:before{content:\"\\eb81\"}.bx-square-rounded:before{content:\"\\eb82\"}.bx-star:before{content:\"\\eb83\"}.bx-station:before{content:\"\\eb84\"}.bx-stats:before{content:\"\\eb85\"}.bx-sticker:before{content:\"\\eb86\"}.bx-stop:before{content:\"\\eb87\"}.bx-stop-circle:before{content:\"\\eb88\"}.bx-stopwatch:before{content:\"\\eb89\"}.bx-store:before{content:\"\\eb8a\"}.bx-store-alt:before{content:\"\\eb8b\"}.bx-street-view:before{content:\"\\eb8c\"}.bx-strikethrough:before{content:\"\\eb8d\"}.bx-subdirectory-left:before{content:\"\\eb8e\"}.bx-subdirectory-right:before{content:\"\\eb8f\"}.bx-sun:before{content:\"\\eb90\"}.bx-support:before{content:\"\\eb91\"}.bx-swim:before{content:\"\\eb92\"}.bx-sync:before{content:\"\\eb93\"}.bx-tab:before{content:\"\\eb94\"}.bx-table:before{content:\"\\eb95\"}.bx-tachometer:before{content:\"\\eb96\"}.bx-tag:before{content:\"\\eb97\"}.bx-tag-alt:before{content:\"\\eb98\"}.bx-target-lock:before{content:\"\\eb99\"}.bx-task:before{content:\"\\eb9a\"}.bx-task-x:before{content:\"\\eb9b\"}.bx-taxi:before{content:\"\\eb9c\"}.bx-tennis-ball:before{content:\"\\eb9d\"}.bx-terminal:before{content:\"\\eb9e\"}.bx-test-tube:before{content:\"\\eb9f\"}.bx-text:before{content:\"\\eba0\"}.bx-time:before{content:\"\\eba1\"}.bx-time-five:before{content:\"\\eba2\"}.bx-timer:before{content:\"\\eba3\"}.bx-tired:before{content:\"\\eba4\"}.bx-toggle-left:before{content:\"\\eba5\"}.bx-toggle-right:before{content:\"\\eba6\"}.bx-tone:before{content:\"\\eba7\"}.bx-traffic-cone:before{content:\"\\eba8\"}.bx-train:before{content:\"\\eba9\"}.bx-transfer:before{content:\"\\ebaa\"}.bx-transfer-alt:before{content:\"\\ebab\"}.bx-trash:before{content:\"\\ebac\"}.bx-trash-alt:before{content:\"\\ebad\"}.bx-trending-down:before{content:\"\\ebae\"}.bx-trending-up:before{content:\"\\ebaf\"}.bx-trim:before{content:\"\\ebb0\"}.bx-trip:before{content:\"\\ebb1\"}.bx-trophy:before{content:\"\\ebb2\"}.bx-tv:before{content:\"\\ebb3\"}.bx-underline:before{content:\"\\ebb4\"}.bx-undo:before{content:\"\\ebb5\"}.bx-unite:before{content:\"\\ebb6\"}.bx-unlink:before{content:\"\\ebb7\"}.bx-up-arrow:before{content:\"\\ebb8\"}.bx-up-arrow-alt:before{content:\"\\ebb9\"}.bx-up-arrow-circle:before{content:\"\\ebba\"}.bx-upload:before{content:\"\\ebbb\"}.bx-upside-down:before{content:\"\\ebbc\"}.bx-upvote:before{content:\"\\ebbd\"}.bx-usb:before{content:\"\\ebbe\"}.bx-user:before{content:\"\\ebbf\"}.bx-user-check:before{content:\"\\ebc0\"}.bx-user-circle:before{content:\"\\ebc1\"}.bx-user-minus:before{content:\"\\ebc2\"}.bx-user-pin:before{content:\"\\ebc3\"}.bx-user-plus:before{content:\"\\ebc4\"}.bx-user-voice:before{content:\"\\ebc5\"}.bx-user-x:before{content:\"\\ebc6\"}.bx-vector:before{content:\"\\ebc7\"}.bx-vertical-center:before{content:\"\\ebc8\"}.bx-vial:before{content:\"\\ebc9\"}.bx-video:before{content:\"\\ebca\"}.bx-video-off:before{content:\"\\ebcb\"}.bx-video-plus:before{content:\"\\ebcc\"}.bx-video-recording:before{content:\"\\ebcd\"}.bx-voicemail:before{content:\"\\ebce\"}.bx-volume:before{content:\"\\ebcf\"}.bx-volume-full:before{content:\"\\ebd0\"}.bx-volume-low:before{content:\"\\ebd1\"}.bx-volume-mute:before{content:\"\\ebd2\"}.bx-walk:before{content:\"\\ebd3\"}.bx-wallet:before{content:\"\\ebd4\"}.bx-wallet-alt:before{content:\"\\ebd5\"}.bx-water:before{content:\"\\ebd6\"}.bx-webcam:before{content:\"\\ebd7\"}.bx-wifi:before{content:\"\\ebd8\"}.bx-wifi-0:before{content:\"\\ebd9\"}.bx-wifi-1:before{content:\"\\ebda\"}.bx-wifi-2:before{content:\"\\ebdb\"}.bx-wifi-off:before{content:\"\\ebdc\"}.bx-wind:before{content:\"\\ebdd\"}.bx-window:before{content:\"\\ebde\"}.bx-window-alt:before{content:\"\\ebdf\"}.bx-window-close:before{content:\"\\ebe0\"}.bx-window-open:before{content:\"\\ebe1\"}.bx-windows:before{content:\"\\ebe2\"}.bx-wine:before{content:\"\\ebe3\"}.bx-wink-smile:before{content:\"\\ebe4\"}.bx-wink-tongue:before{content:\"\\ebe5\"}.bx-won:before{content:\"\\ebe6\"}.bx-world:before{content:\"\\ebe7\"}.bx-wrench:before{content:\"\\ebe8\"}.bx-x:before{content:\"\\ebe9\"}.bx-x-circle:before{content:\"\\ebea\"}.bx-yen:before{content:\"\\ebeb\"}.bx-zoom-in:before{content:\"\\ebec\"}.bx-zoom-out:before{content:\"\\ebed\"}.bxs-add-to-queue:before{content:\"\\ebee\"}.bxs-adjust:before{content:\"\\ebef\"}.bxs-adjust-alt:before{content:\"\\ebf0\"}.bxs-alarm:before{content:\"\\ebf1\"}.bxs-alarm-add:before{content:\"\\ebf2\"}.bxs-alarm-exclamation:before{content:\"\\ebf3\"}.bxs-alarm-off:before{content:\"\\ebf4\"}.bxs-alarm-snooze:before{content:\"\\ebf5\"}.bxs-album:before{content:\"\\ebf6\"}.bxs-ambulance:before{content:\"\\ebf7\"}.bxs-analyse:before{content:\"\\ebf8\"}.bxs-angry:before{content:\"\\ebf9\"}.bxs-arch:before{content:\"\\ebfa\"}.bxs-archive:before{content:\"\\ebfb\"}.bxs-archive-in:before{content:\"\\ebfc\"}.bxs-archive-out:before{content:\"\\ebfd\"}.bxs-area:before{content:\"\\ebfe\"}.bxs-arrow-from-bottom:before{content:\"\\ebff\"}.bxs-arrow-from-left:before{content:\"\\ec00\"}.bxs-arrow-from-right:before{content:\"\\ec01\"}.bxs-arrow-from-top:before{content:\"\\ec02\"}.bxs-arrow-to-bottom:before{content:\"\\ec03\"}.bxs-arrow-to-left:before{content:\"\\ec04\"}.bxs-arrow-to-right:before{content:\"\\ec05\"}.bxs-arrow-to-top:before{content:\"\\ec06\"}.bxs-award:before{content:\"\\ec07\"}.bxs-baby-carriage:before{content:\"\\ec08\"}.bxs-backpack:before{content:\"\\ec09\"}.bxs-badge:before{content:\"\\ec0a\"}.bxs-badge-check:before{content:\"\\ec0b\"}.bxs-badge-dollar:before{content:\"\\ec0c\"}.bxs-ball:before{content:\"\\ec0d\"}.bxs-band-aid:before{content:\"\\ec0e\"}.bxs-bank:before{content:\"\\ec0f\"}.bxs-bar-chart-alt-2:before{content:\"\\ec10\"}.bxs-bar-chart-square:before{content:\"\\ec11\"}.bxs-barcode:before{content:\"\\ec12\"}.bxs-baseball:before{content:\"\\ec13\"}.bxs-basket:before{content:\"\\ec14\"}.bxs-basketball:before{content:\"\\ec15\"}.bxs-bath:before{content:\"\\ec16\"}.bxs-battery:before{content:\"\\ec17\"}.bxs-battery-charging:before{content:\"\\ec18\"}.bxs-battery-full:before{content:\"\\ec19\"}.bxs-battery-low:before{content:\"\\ec1a\"}.bxs-bed:before{content:\"\\ec1b\"}.bxs-been-here:before{content:\"\\ec1c\"}.bxs-beer:before{content:\"\\ec1d\"}.bxs-bell:before{content:\"\\ec1e\"}.bxs-bell-minus:before{content:\"\\ec1f\"}.bxs-bell-off:before{content:\"\\ec20\"}.bxs-bell-plus:before{content:\"\\ec21\"}.bxs-bell-ring:before{content:\"\\ec22\"}.bxs-bible:before{content:\"\\ec23\"}.bxs-binoculars:before{content:\"\\ec24\"}.bxs-blanket:before{content:\"\\ec25\"}.bxs-bolt:before{content:\"\\ec26\"}.bxs-bolt-circle:before{content:\"\\ec27\"}.bxs-bomb:before{content:\"\\ec28\"}.bxs-bone:before{content:\"\\ec29\"}.bxs-bong:before{content:\"\\ec2a\"}.bxs-book:before{content:\"\\ec2b\"}.bxs-book-add:before{content:\"\\ec2c\"}.bxs-book-alt:before{content:\"\\ec2d\"}.bxs-book-bookmark:before{content:\"\\ec2e\"}.bxs-book-content:before{content:\"\\ec2f\"}.bxs-book-heart:before{content:\"\\ec30\"}.bxs-bookmark:before{content:\"\\ec31\"}.bxs-bookmark-alt:before{content:\"\\ec32\"}.bxs-bookmark-alt-minus:before{content:\"\\ec33\"}.bxs-bookmark-alt-plus:before{content:\"\\ec34\"}.bxs-bookmark-heart:before{content:\"\\ec35\"}.bxs-bookmark-minus:before{content:\"\\ec36\"}.bxs-bookmark-plus:before{content:\"\\ec37\"}.bxs-bookmarks:before{content:\"\\ec38\"}.bxs-bookmark-star:before{content:\"\\ec39\"}.bxs-book-open:before{content:\"\\ec3a\"}.bxs-book-reader:before{content:\"\\ec3b\"}.bxs-bot:before{content:\"\\ec3c\"}.bxs-bowling-ball:before{content:\"\\ec3d\"}.bxs-box:before{content:\"\\ec3e\"}.bxs-brain:before{content:\"\\ec3f\"}.bxs-briefcase:before{content:\"\\ec40\"}.bxs-briefcase-alt:before{content:\"\\ec41\"}.bxs-briefcase-alt-2:before{content:\"\\ec42\"}.bxs-brightness:before{content:\"\\ec43\"}.bxs-brightness-half:before{content:\"\\ec44\"}.bxs-brush:before{content:\"\\ec45\"}.bxs-brush-alt:before{content:\"\\ec46\"}.bxs-bug:before{content:\"\\ec47\"}.bxs-bug-alt:before{content:\"\\ec48\"}.bxs-building:before{content:\"\\ec49\"}.bxs-building-house:before{content:\"\\ec4a\"}.bxs-buildings:before{content:\"\\ec4b\"}.bxs-bulb:before{content:\"\\ec4c\"}.bxs-bullseye:before{content:\"\\ec4d\"}.bxs-buoy:before{content:\"\\ec4e\"}.bxs-bus:before{content:\"\\ec4f\"}.bxs-business:before{content:\"\\ec50\"}.bxs-bus-school:before{content:\"\\ec51\"}.bxs-cabinet:before{content:\"\\ec52\"}.bxs-cake:before{content:\"\\ec53\"}.bxs-calculator:before{content:\"\\ec54\"}.bxs-calendar:before{content:\"\\ec55\"}.bxs-calendar-alt:before{content:\"\\ec56\"}.bxs-calendar-check:before{content:\"\\ec57\"}.bxs-calendar-edit:before{content:\"\\ec58\"}.bxs-calendar-event:before{content:\"\\ec59\"}.bxs-calendar-exclamation:before{content:\"\\ec5a\"}.bxs-calendar-heart:before{content:\"\\ec5b\"}.bxs-calendar-minus:before{content:\"\\ec5c\"}.bxs-calendar-plus:before{content:\"\\ec5d\"}.bxs-calendar-star:before{content:\"\\ec5e\"}.bxs-calendar-week:before{content:\"\\ec5f\"}.bxs-calendar-x:before{content:\"\\ec60\"}.bxs-camera:before{content:\"\\ec61\"}.bxs-camera-home:before{content:\"\\ec62\"}.bxs-camera-movie:before{content:\"\\ec63\"}.bxs-camera-off:before{content:\"\\ec64\"}.bxs-camera-plus:before{content:\"\\ec65\"}.bxs-capsule:before{content:\"\\ec66\"}.bxs-captions:before{content:\"\\ec67\"}.bxs-car:before{content:\"\\ec68\"}.bxs-car-battery:before{content:\"\\ec69\"}.bxs-car-crash:before{content:\"\\ec6a\"}.bxs-card:before{content:\"\\ec6b\"}.bxs-caret-down-circle:before{content:\"\\ec6c\"}.bxs-caret-down-square:before{content:\"\\ec6d\"}.bxs-caret-left-circle:before{content:\"\\ec6e\"}.bxs-caret-left-square:before{content:\"\\ec6f\"}.bxs-caret-right-circle:before{content:\"\\ec70\"}.bxs-caret-right-square:before{content:\"\\ec71\"}.bxs-caret-up-circle:before{content:\"\\ec72\"}.bxs-caret-up-square:before{content:\"\\ec73\"}.bxs-car-garage:before{content:\"\\ec74\"}.bxs-car-mechanic:before{content:\"\\ec75\"}.bxs-carousel:before{content:\"\\ec76\"}.bxs-cart:before{content:\"\\ec77\"}.bxs-cart-add:before{content:\"\\ec78\"}.bxs-cart-alt:before{content:\"\\ec79\"}.bxs-cart-download:before{content:\"\\ec7a\"}.bxs-car-wash:before{content:\"\\ec7b\"}.bxs-category:before{content:\"\\ec7c\"}.bxs-category-alt:before{content:\"\\ec7d\"}.bxs-cctv:before{content:\"\\ec7e\"}.bxs-certification:before{content:\"\\ec7f\"}.bxs-chalkboard:before{content:\"\\ec80\"}.bxs-chart:before{content:\"\\ec81\"}.bxs-chat:before{content:\"\\ec82\"}.bxs-checkbox:before{content:\"\\ec83\"}.bxs-checkbox-checked:before{content:\"\\ec84\"}.bxs-check-circle:before{content:\"\\ec85\"}.bxs-check-shield:before{content:\"\\ec86\"}.bxs-check-square:before{content:\"\\ec87\"}.bxs-chess:before{content:\"\\ec88\"}.bxs-chevron-down:before{content:\"\\ec89\"}.bxs-chevron-down-circle:before{content:\"\\ec8a\"}.bxs-chevron-down-square:before{content:\"\\ec8b\"}.bxs-chevron-left:before{content:\"\\ec8c\"}.bxs-chevron-left-circle:before{content:\"\\ec8d\"}.bxs-chevron-left-square:before{content:\"\\ec8e\"}.bxs-chevron-right:before{content:\"\\ec8f\"}.bxs-chevron-right-circle:before{content:\"\\ec90\"}.bxs-chevron-right-square:before{content:\"\\ec91\"}.bxs-chevrons-down:before{content:\"\\ec92\"}.bxs-chevrons-left:before{content:\"\\ec93\"}.bxs-chevrons-right:before{content:\"\\ec94\"}.bxs-chevrons-up:before{content:\"\\ec95\"}.bxs-chevron-up:before{content:\"\\ec96\"}.bxs-chevron-up-circle:before{content:\"\\ec97\"}.bxs-chevron-up-square:before{content:\"\\ec98\"}.bxs-chip:before{content:\"\\ec99\"}.bxs-church:before{content:\"\\ec9a\"}.bxs-circle:before{content:\"\\ec9b\"}.bxs-city:before{content:\"\\ec9c\"}.bxs-clinic:before{content:\"\\ec9d\"}.bxs-cloud:before{content:\"\\ec9e\"}.bxs-cloud-download:before{content:\"\\ec9f\"}.bxs-cloud-lightning:before{content:\"\\eca0\"}.bxs-cloud-rain:before{content:\"\\eca1\"}.bxs-cloud-upload:before{content:\"\\eca2\"}.bxs-coffee:before{content:\"\\eca3\"}.bxs-coffee-alt:before{content:\"\\eca4\"}.bxs-coffee-togo:before{content:\"\\eca5\"}.bxs-cog:before{content:\"\\eca6\"}.bxs-coin:before{content:\"\\eca7\"}.bxs-coin-stack:before{content:\"\\eca8\"}.bxs-collection:before{content:\"\\eca9\"}.bxs-color-fill:before{content:\"\\ecaa\"}.bxs-comment:before{content:\"\\ecab\"}.bxs-comment-add:before{content:\"\\ecac\"}.bxs-comment-check:before{content:\"\\ecad\"}.bxs-comment-detail:before{content:\"\\ecae\"}.bxs-comment-dots:before{content:\"\\ecaf\"}.bxs-comment-edit:before{content:\"\\ecb0\"}.bxs-comment-error:before{content:\"\\ecb1\"}.bxs-comment-minus:before{content:\"\\ecb2\"}.bxs-comment-x:before{content:\"\\ecb3\"}.bxs-compass:before{content:\"\\ecb4\"}.bxs-component:before{content:\"\\ecb5\"}.bxs-confused:before{content:\"\\ecb6\"}.bxs-contact:before{content:\"\\ecb7\"}.bxs-conversation:before{content:\"\\ecb8\"}.bxs-cookie:before{content:\"\\ecb9\"}.bxs-cool:before{content:\"\\ecba\"}.bxs-copy:before{content:\"\\ecbb\"}.bxs-copy-alt:before{content:\"\\ecbc\"}.bxs-copyright:before{content:\"\\ecbd\"}.bxs-coupon:before{content:\"\\ecbe\"}.bxs-credit-card:before{content:\"\\ecbf\"}.bxs-credit-card-alt:before{content:\"\\ecc0\"}.bxs-credit-card-front:before{content:\"\\ecc1\"}.bxs-crop:before{content:\"\\ecc2\"}.bxs-crown:before{content:\"\\ecc3\"}.bxs-cube:before{content:\"\\ecc4\"}.bxs-cube-alt:before{content:\"\\ecc5\"}.bxs-cuboid:before{content:\"\\ecc6\"}.bxs-customize:before{content:\"\\ecc7\"}.bxs-cylinder:before{content:\"\\ecc8\"}.bxs-dashboard:before{content:\"\\ecc9\"}.bxs-data:before{content:\"\\ecca\"}.bxs-detail:before{content:\"\\eccb\"}.bxs-devices:before{content:\"\\eccc\"}.bxs-diamond:before{content:\"\\eccd\"}.bxs-dice-1:before{content:\"\\ecce\"}.bxs-dice-2:before{content:\"\\eccf\"}.bxs-dice-3:before{content:\"\\ecd0\"}.bxs-dice-4:before{content:\"\\ecd1\"}.bxs-dice-5:before{content:\"\\ecd2\"}.bxs-dice-6:before{content:\"\\ecd3\"}.bxs-direction-left:before{content:\"\\ecd4\"}.bxs-direction-right:before{content:\"\\ecd5\"}.bxs-directions:before{content:\"\\ecd6\"}.bxs-disc:before{content:\"\\ecd7\"}.bxs-discount:before{content:\"\\ecd8\"}.bxs-dish:before{content:\"\\ecd9\"}.bxs-dislike:before{content:\"\\ecda\"}.bxs-dizzy:before{content:\"\\ecdb\"}.bxs-dock-bottom:before{content:\"\\ecdc\"}.bxs-dock-left:before{content:\"\\ecdd\"}.bxs-dock-right:before{content:\"\\ecde\"}.bxs-dock-top:before{content:\"\\ecdf\"}.bxs-dollar-circle:before{content:\"\\ece0\"}.bxs-donate-blood:before{content:\"\\ece1\"}.bxs-donate-heart:before{content:\"\\ece2\"}.bxs-door-open:before{content:\"\\ece3\"}.bxs-doughnut-chart:before{content:\"\\ece4\"}.bxs-down-arrow:before{content:\"\\ece5\"}.bxs-down-arrow-alt:before{content:\"\\ece6\"}.bxs-down-arrow-circle:before{content:\"\\ece7\"}.bxs-down-arrow-square:before{content:\"\\ece8\"}.bxs-download:before{content:\"\\ece9\"}.bxs-downvote:before{content:\"\\ecea\"}.bxs-drink:before{content:\"\\eceb\"}.bxs-droplet:before{content:\"\\ecec\"}.bxs-droplet-half:before{content:\"\\eced\"}.bxs-dryer:before{content:\"\\ecee\"}.bxs-duplicate:before{content:\"\\ecef\"}.bxs-edit:before{content:\"\\ecf0\"}.bxs-edit-alt:before{content:\"\\ecf1\"}.bxs-edit-location:before{content:\"\\ecf2\"}.bxs-eject:before{content:\"\\ecf3\"}.bxs-envelope:before{content:\"\\ecf4\"}.bxs-envelope-open:before{content:\"\\ecf5\"}.bxs-eraser:before{content:\"\\ecf6\"}.bxs-error:before{content:\"\\ecf7\"}.bxs-error-alt:before{content:\"\\ecf8\"}.bxs-error-circle:before{content:\"\\ecf9\"}.bxs-ev-station:before{content:\"\\ecfa\"}.bxs-exit:before{content:\"\\ecfb\"}.bxs-extension:before{content:\"\\ecfc\"}.bxs-eyedropper:before{content:\"\\ecfd\"}.bxs-face:before{content:\"\\ecfe\"}.bxs-face-mask:before{content:\"\\ecff\"}.bxs-factory:before{content:\"\\ed00\"}.bxs-fast-forward-circle:before{content:\"\\ed01\"}.bxs-file:before{content:\"\\ed02\"}.bxs-file-archive:before{content:\"\\ed03\"}.bxs-file-blank:before{content:\"\\ed04\"}.bxs-file-css:before{content:\"\\ed05\"}.bxs-file-doc:before{content:\"\\ed06\"}.bxs-file-export:before{content:\"\\ed07\"}.bxs-file-find:before{content:\"\\ed08\"}.bxs-file-gif:before{content:\"\\ed09\"}.bxs-file-html:before{content:\"\\ed0a\"}.bxs-file-image:before{content:\"\\ed0b\"}.bxs-file-import:before{content:\"\\ed0c\"}.bxs-file-jpg:before{content:\"\\ed0d\"}.bxs-file-js:before{content:\"\\ed0e\"}.bxs-file-json:before{content:\"\\ed0f\"}.bxs-file-md:before{content:\"\\ed10\"}.bxs-file-pdf:before{content:\"\\ed11\"}.bxs-file-plus:before{content:\"\\ed12\"}.bxs-file-png:before{content:\"\\ed13\"}.bxs-file-txt:before{content:\"\\ed14\"}.bxs-film:before{content:\"\\ed15\"}.bxs-filter-alt:before{content:\"\\ed16\"}.bxs-first-aid:before{content:\"\\ed17\"}.bxs-flag:before{content:\"\\ed18\"}.bxs-flag-alt:before{content:\"\\ed19\"}.bxs-flag-checkered:before{content:\"\\ed1a\"}.bxs-flame:before{content:\"\\ed1b\"}.bxs-flask:before{content:\"\\ed1c\"}.bxs-florist:before{content:\"\\ed1d\"}.bxs-folder:before{content:\"\\ed1e\"}.bxs-folder-minus:before{content:\"\\ed1f\"}.bxs-folder-open:before{content:\"\\ed20\"}.bxs-folder-plus:before{content:\"\\ed21\"}.bxs-food-menu:before{content:\"\\ed22\"}.bxs-fridge:before{content:\"\\ed23\"}.bxs-game:before{content:\"\\ed24\"}.bxs-gas-pump:before{content:\"\\ed25\"}.bxs-ghost:before{content:\"\\ed26\"}.bxs-gift:before{content:\"\\ed27\"}.bxs-graduation:before{content:\"\\ed28\"}.bxs-grid:before{content:\"\\ed29\"}.bxs-grid-alt:before{content:\"\\ed2a\"}.bxs-group:before{content:\"\\ed2b\"}.bxs-guitar-amp:before{content:\"\\ed2c\"}.bxs-hand-down:before{content:\"\\ed2d\"}.bxs-hand-left:before{content:\"\\ed2e\"}.bxs-hand-right:before{content:\"\\ed2f\"}.bxs-hand-up:before{content:\"\\ed30\"}.bxs-happy:before{content:\"\\ed31\"}.bxs-happy-alt:before{content:\"\\ed32\"}.bxs-happy-beaming:before{content:\"\\ed33\"}.bxs-happy-heart-eyes:before{content:\"\\ed34\"}.bxs-hdd:before{content:\"\\ed35\"}.bxs-heart:before{content:\"\\ed36\"}.bxs-heart-circle:before{content:\"\\ed37\"}.bxs-heart-square:before{content:\"\\ed38\"}.bxs-help-circle:before{content:\"\\ed39\"}.bxs-hide:before{content:\"\\ed3a\"}.bxs-home:before{content:\"\\ed3b\"}.bxs-home-circle:before{content:\"\\ed3c\"}.bxs-home-heart:before{content:\"\\ed3d\"}.bxs-home-smile:before{content:\"\\ed3e\"}.bxs-hot:before{content:\"\\ed3f\"}.bxs-hotel:before{content:\"\\ed40\"}.bxs-hourglass:before{content:\"\\ed41\"}.bxs-hourglass-bottom:before{content:\"\\ed42\"}.bxs-hourglass-top:before{content:\"\\ed43\"}.bxs-id-card:before{content:\"\\ed44\"}.bxs-image:before{content:\"\\ed45\"}.bxs-image-add:before{content:\"\\ed46\"}.bxs-image-alt:before{content:\"\\ed47\"}.bxs-inbox:before{content:\"\\ed48\"}.bxs-info-circle:before{content:\"\\ed49\"}.bxs-info-square:before{content:\"\\ed4a\"}.bxs-institution:before{content:\"\\ed4b\"}.bxs-joystick:before{content:\"\\ed4c\"}.bxs-joystick-alt:before{content:\"\\ed4d\"}.bxs-joystick-button:before{content:\"\\ed4e\"}.bxs-key:before{content:\"\\ed4f\"}.bxs-keyboard:before{content:\"\\ed50\"}.bxs-label:before{content:\"\\ed51\"}.bxs-landmark:before{content:\"\\ed52\"}.bxs-landscape:before{content:\"\\ed53\"}.bxs-laugh:before{content:\"\\ed54\"}.bxs-layer:before{content:\"\\ed55\"}.bxs-layer-minus:before{content:\"\\ed56\"}.bxs-layer-plus:before{content:\"\\ed57\"}.bxs-layout:before{content:\"\\ed58\"}.bxs-left-arrow:before{content:\"\\ed59\"}.bxs-left-arrow-alt:before{content:\"\\ed5a\"}.bxs-left-arrow-circle:before{content:\"\\ed5b\"}.bxs-left-arrow-square:before{content:\"\\ed5c\"}.bxs-left-down-arrow-circle:before{content:\"\\ed5d\"}.bxs-left-top-arrow-circle:before{content:\"\\ed5e\"}.bxs-like:before{content:\"\\ed5f\"}.bxs-location-plus:before{content:\"\\ed60\"}.bxs-lock:before{content:\"\\ed61\"}.bxs-lock-alt:before{content:\"\\ed62\"}.bxs-lock-open:before{content:\"\\ed63\"}.bxs-lock-open-alt:before{content:\"\\ed64\"}.bxs-log-in:before{content:\"\\ed65\"}.bxs-log-in-circle:before{content:\"\\ed66\"}.bxs-log-out:before{content:\"\\ed67\"}.bxs-log-out-circle:before{content:\"\\ed68\"}.bxs-low-vision:before{content:\"\\ed69\"}.bxs-magic-wand:before{content:\"\\ed6a\"}.bxs-magnet:before{content:\"\\ed6b\"}.bxs-map:before{content:\"\\ed6c\"}.bxs-map-alt:before{content:\"\\ed6d\"}.bxs-map-pin:before{content:\"\\ed6e\"}.bxs-mask:before{content:\"\\ed6f\"}.bxs-medal:before{content:\"\\ed70\"}.bxs-megaphone:before{content:\"\\ed71\"}.bxs-meh:before{content:\"\\ed72\"}.bxs-meh-alt:before{content:\"\\ed73\"}.bxs-meh-blank:before{content:\"\\ed74\"}.bxs-memory-card:before{content:\"\\ed75\"}.bxs-message:before{content:\"\\ed76\"}.bxs-message-add:before{content:\"\\ed77\"}.bxs-message-alt:before{content:\"\\ed78\"}.bxs-message-alt-add:before{content:\"\\ed79\"}.bxs-message-alt-check:before{content:\"\\ed7a\"}.bxs-message-alt-detail:before{content:\"\\ed7b\"}.bxs-message-alt-dots:before{content:\"\\ed7c\"}.bxs-message-alt-edit:before{content:\"\\ed7d\"}.bxs-message-alt-error:before{content:\"\\ed7e\"}.bxs-message-alt-minus:before{content:\"\\ed7f\"}.bxs-message-alt-x:before{content:\"\\ed80\"}.bxs-message-check:before{content:\"\\ed81\"}.bxs-message-detail:before{content:\"\\ed82\"}.bxs-message-dots:before{content:\"\\ed83\"}.bxs-message-edit:before{content:\"\\ed84\"}.bxs-message-error:before{content:\"\\ed85\"}.bxs-message-minus:before{content:\"\\ed86\"}.bxs-message-rounded:before{content:\"\\ed87\"}.bxs-message-rounded-add:before{content:\"\\ed88\"}.bxs-message-rounded-check:before{content:\"\\ed89\"}.bxs-message-rounded-detail:before{content:\"\\ed8a\"}.bxs-message-rounded-dots:before{content:\"\\ed8b\"}.bxs-message-rounded-edit:before{content:\"\\ed8c\"}.bxs-message-rounded-error:before{content:\"\\ed8d\"}.bxs-message-rounded-minus:before{content:\"\\ed8e\"}.bxs-message-rounded-x:before{content:\"\\ed8f\"}.bxs-message-square:before{content:\"\\ed90\"}.bxs-message-square-add:before{content:\"\\ed91\"}.bxs-message-square-check:before{content:\"\\ed92\"}.bxs-message-square-detail:before{content:\"\\ed93\"}.bxs-message-square-dots:before{content:\"\\ed94\"}.bxs-message-square-edit:before{content:\"\\ed95\"}.bxs-message-square-error:before{content:\"\\ed96\"}.bxs-message-square-minus:before{content:\"\\ed97\"}.bxs-message-square-x:before{content:\"\\ed98\"}.bxs-message-x:before{content:\"\\ed99\"}.bxs-meteor:before{content:\"\\ed9a\"}.bxs-microchip:before{content:\"\\ed9b\"}.bxs-microphone:before{content:\"\\ed9c\"}.bxs-microphone-alt:before{content:\"\\ed9d\"}.bxs-microphone-off:before{content:\"\\ed9e\"}.bxs-minus-circle:before{content:\"\\ed9f\"}.bxs-minus-square:before{content:\"\\eda0\"}.bxs-mobile:before{content:\"\\eda1\"}.bxs-mobile-vibration:before{content:\"\\eda2\"}.bxs-moon:before{content:\"\\eda3\"}.bxs-mouse:before{content:\"\\eda4\"}.bxs-mouse-alt:before{content:\"\\eda5\"}.bxs-movie:before{content:\"\\eda6\"}.bxs-movie-play:before{content:\"\\eda7\"}.bxs-music:before{content:\"\\eda8\"}.bxs-navigation:before{content:\"\\eda9\"}.bxs-network-chart:before{content:\"\\edaa\"}.bxs-news:before{content:\"\\edab\"}.bxs-no-entry:before{content:\"\\edac\"}.bxs-note:before{content:\"\\edad\"}.bxs-notepad:before{content:\"\\edae\"}.bxs-notification:before{content:\"\\edaf\"}.bxs-notification-off:before{content:\"\\edb0\"}.bxs-offer:before{content:\"\\edb1\"}.bxs-package:before{content:\"\\edb2\"}.bxs-paint:before{content:\"\\edb3\"}.bxs-paint-roll:before{content:\"\\edb4\"}.bxs-palette:before{content:\"\\edb5\"}.bxs-paper-plane:before{content:\"\\edb6\"}.bxs-parking:before{content:\"\\edb7\"}.bxs-paste:before{content:\"\\edb8\"}.bxs-pen:before{content:\"\\edb9\"}.bxs-pencil:before{content:\"\\edba\"}.bxs-phone:before{content:\"\\edbb\"}.bxs-phone-call:before{content:\"\\edbc\"}.bxs-phone-incoming:before{content:\"\\edbd\"}.bxs-phone-outgoing:before{content:\"\\edbe\"}.bxs-photo-album:before{content:\"\\edbf\"}.bxs-piano:before{content:\"\\edc0\"}.bxs-pie-chart:before{content:\"\\edc1\"}.bxs-pie-chart-alt:before{content:\"\\edc2\"}.bxs-pie-chart-alt-2:before{content:\"\\edc3\"}.bxs-pin:before{content:\"\\edc4\"}.bxs-pizza:before{content:\"\\edc5\"}.bxs-plane:before{content:\"\\edc6\"}.bxs-plane-alt:before{content:\"\\edc7\"}.bxs-plane-land:before{content:\"\\edc8\"}.bxs-planet:before{content:\"\\edc9\"}.bxs-plane-take-off:before{content:\"\\edca\"}.bxs-playlist:before{content:\"\\edcb\"}.bxs-plug:before{content:\"\\edcc\"}.bxs-plus-circle:before{content:\"\\edcd\"}.bxs-plus-square:before{content:\"\\edce\"}.bxs-pointer:before{content:\"\\edcf\"}.bxs-polygon:before{content:\"\\edd0\"}.bxs-printer:before{content:\"\\edd1\"}.bxs-purchase-tag:before{content:\"\\edd2\"}.bxs-purchase-tag-alt:before{content:\"\\edd3\"}.bxs-pyramid:before{content:\"\\edd4\"}.bxs-quote-alt-left:before{content:\"\\edd5\"}.bxs-quote-alt-right:before{content:\"\\edd6\"}.bxs-quote-left:before{content:\"\\edd7\"}.bxs-quote-right:before{content:\"\\edd8\"}.bxs-quote-single-left:before{content:\"\\edd9\"}.bxs-quote-single-right:before{content:\"\\edda\"}.bxs-radiation:before{content:\"\\eddb\"}.bxs-radio:before{content:\"\\eddc\"}.bxs-receipt:before{content:\"\\eddd\"}.bxs-rectangle:before{content:\"\\edde\"}.bxs-rename:before{content:\"\\eddf\"}.bxs-report:before{content:\"\\ede0\"}.bxs-rewind-circle:before{content:\"\\ede1\"}.bxs-right-arrow:before{content:\"\\ede2\"}.bxs-right-arrow-alt:before{content:\"\\ede3\"}.bxs-right-arrow-circle:before{content:\"\\ede4\"}.bxs-right-arrow-square:before{content:\"\\ede5\"}.bxs-right-down-arrow-circle:before{content:\"\\ede6\"}.bxs-right-top-arrow-circle:before{content:\"\\ede7\"}.bxs-rocket:before{content:\"\\ede8\"}.bxs-ruler:before{content:\"\\ede9\"}.bxs-sad:before{content:\"\\edea\"}.bxs-save:before{content:\"\\edeb\"}.bxs-school:before{content:\"\\edec\"}.bxs-search:before{content:\"\\eded\"}.bxs-search-alt-2:before{content:\"\\edee\"}.bxs-select-multiple:before{content:\"\\edef\"}.bxs-send:before{content:\"\\edf0\"}.bxs-server:before{content:\"\\edf1\"}.bxs-shapes:before{content:\"\\edf2\"}.bxs-share:before{content:\"\\edf3\"}.bxs-share-alt:before{content:\"\\edf4\"}.bxs-shield:before{content:\"\\edf5\"}.bxs-shield-alt-2:before{content:\"\\edf6\"}.bxs-shield-x:before{content:\"\\edf7\"}.bxs-ship:before{content:\"\\edf8\"}.bxs-shocked:before{content:\"\\edf9\"}.bxs-shopping-bag:before{content:\"\\edfa\"}.bxs-shopping-bag-alt:before{content:\"\\edfb\"}.bxs-shopping-bags:before{content:\"\\edfc\"}.bxs-show:before{content:\"\\edfd\"}.bxs-skip-next-circle:before{content:\"\\edfe\"}.bxs-skip-previous-circle:before{content:\"\\edff\"}.bxs-skull:before{content:\"\\ee00\"}.bxs-sleepy:before{content:\"\\ee01\"}.bxs-slideshow:before{content:\"\\ee02\"}.bxs-smile:before{content:\"\\ee03\"}.bxs-sort-alt:before{content:\"\\ee04\"}.bxs-spa:before{content:\"\\ee05\"}.bxs-spray-can:before{content:\"\\ee06\"}.bxs-spreadsheet:before{content:\"\\ee07\"}.bxs-square:before{content:\"\\ee08\"}.bxs-square-rounded:before{content:\"\\ee09\"}.bxs-star:before{content:\"\\ee0a\"}.bxs-star-half:before{content:\"\\ee0b\"}.bxs-sticker:before{content:\"\\ee0c\"}.bxs-stopwatch:before{content:\"\\ee0d\"}.bxs-store:before{content:\"\\ee0e\"}.bxs-store-alt:before{content:\"\\ee0f\"}.bxs-sun:before{content:\"\\ee10\"}.bxs-tachometer:before{content:\"\\ee11\"}.bxs-tag:before{content:\"\\ee12\"}.bxs-tag-alt:before{content:\"\\ee13\"}.bxs-tag-x:before{content:\"\\ee14\"}.bxs-taxi:before{content:\"\\ee15\"}.bxs-tennis-ball:before{content:\"\\ee16\"}.bxs-terminal:before{content:\"\\ee17\"}.bxs-thermometer:before{content:\"\\ee18\"}.bxs-time:before{content:\"\\ee19\"}.bxs-time-five:before{content:\"\\ee1a\"}.bxs-timer:before{content:\"\\ee1b\"}.bxs-tired:before{content:\"\\ee1c\"}.bxs-toggle-left:before{content:\"\\ee1d\"}.bxs-toggle-right:before{content:\"\\ee1e\"}.bxs-tone:before{content:\"\\ee1f\"}.bxs-torch:before{content:\"\\ee20\"}.bxs-to-top:before{content:\"\\ee21\"}.bxs-traffic:before{content:\"\\ee22\"}.bxs-traffic-barrier:before{content:\"\\ee23\"}.bxs-traffic-cone:before{content:\"\\ee24\"}.bxs-train:before{content:\"\\ee25\"}.bxs-trash:before{content:\"\\ee26\"}.bxs-trash-alt:before{content:\"\\ee27\"}.bxs-tree:before{content:\"\\ee28\"}.bxs-trophy:before{content:\"\\ee29\"}.bxs-truck:before{content:\"\\ee2a\"}.bxs-t-shirt:before{content:\"\\ee2b\"}.bxs-tv:before{content:\"\\ee2c\"}.bxs-up-arrow:before{content:\"\\ee2d\"}.bxs-up-arrow-alt:before{content:\"\\ee2e\"}.bxs-up-arrow-circle:before{content:\"\\ee2f\"}.bxs-up-arrow-square:before{content:\"\\ee30\"}.bxs-upside-down:before{content:\"\\ee31\"}.bxs-upvote:before{content:\"\\ee32\"}.bxs-user:before{content:\"\\ee33\"}.bxs-user-account:before{content:\"\\ee34\"}.bxs-user-badge:before{content:\"\\ee35\"}.bxs-user-check:before{content:\"\\ee36\"}.bxs-user-circle:before{content:\"\\ee37\"}.bxs-user-detail:before{content:\"\\ee38\"}.bxs-user-minus:before{content:\"\\ee39\"}.bxs-user-pin:before{content:\"\\ee3a\"}.bxs-user-plus:before{content:\"\\ee3b\"}.bxs-user-rectangle:before{content:\"\\ee3c\"}.bxs-user-voice:before{content:\"\\ee3d\"}.bxs-user-x:before{content:\"\\ee3e\"}.bxs-vector:before{content:\"\\ee3f\"}.bxs-vial:before{content:\"\\ee40\"}.bxs-video:before{content:\"\\ee41\"}.bxs-video-off:before{content:\"\\ee42\"}.bxs-video-plus:before{content:\"\\ee43\"}.bxs-video-recording:before{content:\"\\ee44\"}.bxs-videos:before{content:\"\\ee45\"}.bxs-virus:before{content:\"\\ee46\"}.bxs-virus-block:before{content:\"\\ee47\"}.bxs-volume:before{content:\"\\ee48\"}.bxs-volume-full:before{content:\"\\ee49\"}.bxs-volume-low:before{content:\"\\ee4a\"}.bxs-volume-mute:before{content:\"\\ee4b\"}.bxs-wallet:before{content:\"\\ee4c\"}.bxs-wallet-alt:before{content:\"\\ee4d\"}.bxs-washer:before{content:\"\\ee4e\"}.bxs-watch:before{content:\"\\ee4f\"}.bxs-watch-alt:before{content:\"\\ee50\"}.bxs-webcam:before{content:\"\\ee51\"}.bxs-widget:before{content:\"\\ee52\"}.bxs-window-alt:before{content:\"\\ee53\"}.bxs-wine:before{content:\"\\ee54\"}.bxs-wink-smile:before{content:\"\\ee55\"}.bxs-wink-tongue:before{content:\"\\ee56\"}.bxs-wrench:before{content:\"\\ee57\"}.bxs-x-circle:before{content:\"\\ee58\"}.bxs-x-square:before{content:\"\\ee59\"}.bxs-yin-yang:before{content:\"\\ee5a\"}.bxs-zap:before{content:\"\\ee5b\"}.bxs-zoom-in:before{content:\"\\ee5c\"}.bxs-zoom-out:before{content:\"\\ee5d\"}.bxl-500px:before{content:\"\\ee5e\"}.bxl-adobe:before{content:\"\\ee5f\"}.bxl-airbnb:before{content:\"\\ee60\"}.bxl-algolia:before{content:\"\\ee61\"}.bxl-amazon:before{content:\"\\ee62\"}.bxl-android:before{content:\"\\ee63\"}.bxl-angular:before{content:\"\\ee64\"}.bxl-apple:before{content:\"\\ee65\"}.bxl-audible:before{content:\"\\ee66\"}.bxl-baidu:before{content:\"\\ee67\"}.bxl-behance:before{content:\"\\ee68\"}.bxl-bing:before{content:\"\\ee69\"}.bxl-bitcoin:before{content:\"\\ee6a\"}.bxl-blender:before{content:\"\\ee6b\"}.bxl-blogger:before{content:\"\\ee6c\"}.bxl-bootstrap:before{content:\"\\ee6d\"}.bxl-chrome:before{content:\"\\ee6e\"}.bxl-codepen:before{content:\"\\ee6f\"}.bxl-c-plus-plus:before{content:\"\\ee70\"}.bxl-creative-commons:before{content:\"\\ee71\"}.bxl-css3:before{content:\"\\ee72\"}.bxl-dailymotion:before{content:\"\\ee73\"}.bxl-deviantart:before{content:\"\\ee74\"}.bxl-dev-to:before{content:\"\\ee75\"}.bxl-digg:before{content:\"\\ee76\"}.bxl-digitalocean:before{content:\"\\ee77\"}.bxl-discord:before{content:\"\\ee78\"}.bxl-discourse:before{content:\"\\ee79\"}.bxl-django:before{content:\"\\ee7a\"}.bxl-dribbble:before{content:\"\\ee7b\"}.bxl-dropbox:before{content:\"\\ee7c\"}.bxl-drupal:before{content:\"\\ee7d\"}.bxl-ebay:before{content:\"\\ee7e\"}.bxl-edge:before{content:\"\\ee7f\"}.bxl-etsy:before{content:\"\\ee80\"}.bxl-facebook:before{content:\"\\ee81\"}.bxl-facebook-circle:before{content:\"\\ee82\"}.bxl-facebook-square:before{content:\"\\ee83\"}.bxl-figma:before{content:\"\\ee84\"}.bxl-firebase:before{content:\"\\ee85\"}.bxl-firefox:before{content:\"\\ee86\"}.bxl-flickr:before{content:\"\\ee87\"}.bxl-flickr-square:before{content:\"\\ee88\"}.bxl-foursquare:before{content:\"\\ee89\"}.bxl-git:before{content:\"\\ee8a\"}.bxl-github:before{content:\"\\ee8b\"}.bxl-gitlab:before{content:\"\\ee8c\"}.bxl-google:before{content:\"\\ee8d\"}.bxl-google-cloud:before{content:\"\\ee8e\"}.bxl-google-plus:before{content:\"\\ee8f\"}.bxl-google-plus-circle:before{content:\"\\ee90\"}.bxl-html5:before{content:\"\\ee91\"}.bxl-imdb:before{content:\"\\ee92\"}.bxl-instagram:before{content:\"\\ee93\"}.bxl-instagram-alt:before{content:\"\\ee94\"}.bxl-internet-explorer:before{content:\"\\ee95\"}.bxl-invision:before{content:\"\\ee96\"}.bxl-javascript:before{content:\"\\ee97\"}.bxl-joomla:before{content:\"\\ee98\"}.bxl-jquery:before{content:\"\\ee99\"}.bxl-jsfiddle:before{content:\"\\ee9a\"}.bxl-kickstarter:before{content:\"\\ee9b\"}.bxl-kubernetes:before{content:\"\\ee9c\"}.bxl-less:before{content:\"\\ee9d\"}.bxl-linkedin:before{content:\"\\ee9e\"}.bxl-linkedin-square:before{content:\"\\ee9f\"}.bxl-magento:before{content:\"\\eea0\"}.bxl-mailchimp:before{content:\"\\eea1\"}.bxl-markdown:before{content:\"\\eea2\"}.bxl-mastercard:before{content:\"\\eea3\"}.bxl-medium:before{content:\"\\eea4\"}.bxl-medium-old:before{content:\"\\eea5\"}.bxl-medium-square:before{content:\"\\eea6\"}.bxl-messenger:before{content:\"\\eea7\"}.bxl-microsoft:before{content:\"\\eea8\"}.bxl-microsoft-teams:before{content:\"\\eea9\"}.bxl-nodejs:before{content:\"\\eeaa\"}.bxl-ok-ru:before{content:\"\\eeab\"}.bxl-opera:before{content:\"\\eeac\"}.bxl-patreon:before{content:\"\\eead\"}.bxl-paypal:before{content:\"\\eeae\"}.bxl-periscope:before{content:\"\\eeaf\"}.bxl-pinterest:before{content:\"\\eeb0\"}.bxl-pinterest-alt:before{content:\"\\eeb1\"}.bxl-play-store:before{content:\"\\eeb2\"}.bxl-pocket:before{content:\"\\eeb3\"}.bxl-product-hunt:before{content:\"\\eeb4\"}.bxl-python:before{content:\"\\eeb5\"}.bxl-quora:before{content:\"\\eeb6\"}.bxl-react:before{content:\"\\eeb7\"}.bxl-redbubble:before{content:\"\\eeb8\"}.bxl-reddit:before{content:\"\\eeb9\"}.bxl-redux:before{content:\"\\eeba\"}.bxl-sass:before{content:\"\\eebb\"}.bxl-shopify:before{content:\"\\eebc\"}.bxl-skype:before{content:\"\\eebd\"}.bxl-slack:before{content:\"\\eebe\"}.bxl-slack-old:before{content:\"\\eebf\"}.bxl-snapchat:before{content:\"\\eec0\"}.bxl-soundcloud:before{content:\"\\eec1\"}.bxl-spotify:before{content:\"\\eec2\"}.bxl-spring-boot:before{content:\"\\eec3\"}.bxl-squarespace:before{content:\"\\eec4\"}.bxl-stack-overflow:before{content:\"\\eec5\"}.bxl-stripe:before{content:\"\\eec6\"}.bxl-telegram:before{content:\"\\eec7\"}.bxl-trello:before{content:\"\\eec8\"}.bxl-tumblr:before{content:\"\\eec9\"}.bxl-tux:before{content:\"\\eeca\"}.bxl-twitch:before{content:\"\\eecb\"}.bxl-twitter:before{content:\"\\eecc\"}.bxl-unsplash:before{content:\"\\eecd\"}.bxl-vimeo:before{content:\"\\eece\"}.bxl-visa:before{content:\"\\eecf\"}.bxl-vk:before{content:\"\\eed0\"}.bxl-vuejs:before{content:\"\\eed1\"}.bxl-whatsapp:before{content:\"\\eed2\"}.bxl-whatsapp-square:before{content:\"\\eed3\"}.bxl-wikipedia:before{content:\"\\eed4\"}.bxl-windows:before{content:\"\\eed5\"}.bxl-wix:before{content:\"\\eed6\"}.bxl-wordpress:before{content:\"\\eed7\"}.bxl-yahoo:before{content:\"\\eed8\"}.bxl-yelp:before{content:\"\\eed9\"}.bxl-youtube:before{content:\"\\eeda\"}.bxl-zoom:before{content:\"\\eedb\"}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/boxicons.092b785.eot";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/boxicons.8d76574.woff2";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/boxicons.0f4528c.woff";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/boxicons.cbd149c.ttf";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/boxicons.045b05b.svg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("517a8dd7", content, true)

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,\"Andale Mono\",\"Ubuntu Mono\",monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper{max-width:1280px}.wrapper,.wrapper-small{margin-left:auto;margin-right:auto}.wrapper-small{max-width:1024px;padding-left:1.5rem;padding-right:1.5rem}.flex-center{display:flex;justify-content:center;align-items:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".mobile-link{display:block;padding:.5rem .75rem;color:#1a202c;color:rgba(26,32,44,var(--text-opacity));border-radius:.375rem;color:#fff;color:rgba(255,255,255,var(--text-opacity));text-align:center}.mobile-link,.nav-link{font-size:1.125rem;--text-opacity:1;font-weight:500}.nav-link{margin-left:3rem;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.nuxt-link-exact-active{--text-opacity:1;color:#4c942c;color:rgba(76,148,44,var(--text-opacity))}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".social-link{margin-left:.75rem;margin-right:.75rem;font-size:1.5rem;--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity))}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.delete-all.js");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.every.js");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.filter.js");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find.js");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find-key.js");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.includes.js");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.key-of.js");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-keys.js");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-values.js");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.merge.js");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.reduce.js");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.some.js");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.update.js");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("property-information");

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer; });
__webpack_require__.d(components_namespaceObject, "Header", function() { return Header; });
__webpack_require__.d(components_namespaceObject, "Introduction", function() { return Introduction; });
__webpack_require__.d(components_namespaceObject, "Projects", function() { return Projects; });
__webpack_require__.d(components_namespaceObject, "Search", function() { return Search; });
__webpack_require__.d(components_namespaceObject, "Social", function() { return Social; });
__webpack_require__.d(components_namespaceObject, "TechStack", function() { return TechStack; });
__webpack_require__.d(components_namespaceObject, "ButtonSeeProjectAndCode", function() { return ButtonSeeProjectAndCode; });

// NAMESPACE OBJECT: ./node_modules/@nuxt/image/dist/runtime/providers/static.js
var static_namespaceObject = {};
__webpack_require__.r(static_namespaceObject);
__webpack_require__.d(static_namespaceObject, "getImage", function() { return static_getImage; });
__webpack_require__.d(static_namespaceObject, "supportsAlias", function() { return static_supportsAlias; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/ufo/dist/index.js
var dist = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(22);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(dist["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(dist["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = dist["joinURL"];
const stripTrailingSlash = dist["withoutTrailingSlash"];
const isSamePath = dist["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(5);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(10);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(7);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(11);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _787682fe = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 8).then(__webpack_require__.bind(null, 86)));

const _a04f0244 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog */ 9).then(__webpack_require__.bind(null, 87)));

const _2fe812d8 = () => interopDefault(__webpack_require__.e(/* import() | pages/contact */ 10).then(__webpack_require__.bind(null, 88)));

const _06007cbc = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio */ 12).then(__webpack_require__.bind(null, 89)));

const _3906cd74 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 11).then(__webpack_require__.bind(null, 90)));

const _3c741004 = () => interopDefault(__webpack_require__.e(/* import() | pages/_slug */ 7).then(__webpack_require__.bind(null, 91)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about",
    component: _787682fe,
    name: "about"
  }, {
    path: "/blog",
    component: _a04f0244,
    name: "blog"
  }, {
    path: "/contact",
    component: _2fe812d8,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _06007cbc,
    name: "portfolio"
  }, {
    path: "/",
    component: _3906cd74,
    name: "index"
  }, {
    path: "/:slug",
    component: _3c741004,
    name: "slug"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(dist["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6d361f62"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "7a4115c3"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/lib/files/tailwind.css
var tailwind = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/boxicons/css/boxicons.min.css
var boxicons_min = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/prismjs/themes/prism.css
var prism = __webpack_require__(43);

// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=de05e7c4&
var defaultvue_type_template_id_de05e7c4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-col h-screen justify-between"},[_vm._ssrNode("<div>","</div>",[_c('Header')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mb-auto\">","</div>",[_c('Nuxt')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"h-10\">","</div>",[_c('Footer')],1)],2)}
var defaultvue_type_template_id_de05e7c4_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=de05e7c4&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}
function default_injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_de05e7c4_render,
  defaultvue_type_template_id_de05e7c4_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "27d43511"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Header: __webpack_require__(68).default,Footer: __webpack_require__(69).default})

// CONCATENATED MODULE: ./.nuxt/App.js









const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return Object(dist["withoutTrailingSlash"])(this.$router.options.base);
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(dist["withoutTrailingSlash"])(Object(dist["withoutBase"])(Object(dist["parsePath"])(route).pathname, base));
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(dist["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },

    async fetchPayload(route, prefetch) {
      const path = Object(dist["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();

      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw new Error(`Route ${path} is not pre-rendered`);
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(dist["normalizeURL"])(src));

        if (!prefetch) {
          this.setPagePayload(payload);
        }

        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const Footer = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 69)).then(c => wrapFunctional(c.default || c));
const Header = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 68)).then(c => wrapFunctional(c.default || c));
const Introduction = () => __webpack_require__.e(/* import() | components/introduction */ 2).then(__webpack_require__.bind(null, 80)).then(c => wrapFunctional(c.default || c));
const Projects = () => __webpack_require__.e(/* import() | components/projects */ 3).then(__webpack_require__.bind(null, 75)).then(c => wrapFunctional(c.default || c));
const Search = () => __webpack_require__.e(/* import() | components/search */ 4).then(__webpack_require__.bind(null, 79)).then(c => wrapFunctional(c.default || c));
const Social = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 8)).then(c => wrapFunctional(c.default || c));
const TechStack = () => __webpack_require__.e(/* import() | components/tech-stack */ 5).then(__webpack_require__.bind(null, 81)).then(c => wrapFunctional(c.default || c));
const ButtonSeeProjectAndCode = () => __webpack_require__.e(/* import() | components/button-see-project-and-code */ 1).then(__webpack_require__.bind(null, 92)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./node_modules/is-https/dist/index.js
var is_https_dist = __webpack_require__(24);
var is_https_dist_default = /*#__PURE__*/__webpack_require__.n(is_https_dist);

// EXTERNAL MODULE: ./locales/en.json
var en = __webpack_require__(23);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/options.js

const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {
    "PREFIX": "prefix",
    "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
    "PREFIX_AND_DEFAULT": "prefix_and_default",
    "NO_PREFIX": "no_prefix"
  }
};
const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined
};
const options_options = {
  vueI18n: {
    "fallbackLocale": "en"
  },
  vueI18nLoader: true,
  locales: [{
    "code": "ja",
    "name": "Japanese",
    "iso": "ja_JP",
    "file": "ja.json"
  }, {
    "code": "en",
    "name": "英語",
    "iso": "en-US",
    "file": "en.json"
  }],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "no_prefix",
  lazy: true,
  langDir: "/Users/junueno/Documents/dev/private/nuxt-portfolio/locales",
  rootRedirect: null,
  detectBrowserLanguage: {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "onlyOnNoPrefix": false,
    "onlyOnRoot": false,
    "useCookie": true
  },
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {
    "moduleName": "i18n",
    "syncLocale": false,
    "syncMessages": false,
    "syncRouteParams": true
  },
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{
    "code": "ja",
    "name": "Japanese",
    "iso": "ja_JP",
    "file": "ja.json"
  }, {
    "code": "en",
    "name": "英語",
    "iso": "en-US",
    "file": "en.json"
  }],
  localeCodes: ["ja", "en"]
};
const localeMessages = {
  'en.json': () => Promise.resolve(en),
  'ja.json': () => __webpack_require__.e(/* import() | lang-ja.json */ 6).then(__webpack_require__.t.bind(null, 85, 3))
};
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(12);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(51);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/utils-common.js


/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */

/**
 * Formats a log message, prefixing module's name to it.
 *
 * @param {string} text
 * @return {string}
 */

function formatMessage(text) {
  return `[nuxt-i18n] ${text}`;
}
/**
 * Parses locales provided from browser through `accept-language` header.
 *
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */

function parseAcceptLanguage(input) {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(',').map(tag => tag.split(';')[0]);
}
/**
 * Find locale code that best matches provided list of browser locales.
 *
 * @param {ResolvedOptions['normalizedLocales']} appLocales The user-configured locales that are to be matched.
 * @param {readonly string[]} browserLocales The locales to match against configured.
 * @return {string | undefined}
 */

function matchBrowserLocale(appLocales, browserLocales) {
  /** @type {{ code: string, score: number }[]} */
  const matchedLocales = []; // Normalise appLocales input

  /** @type {{ code: string, iso: string }[]} */

  const normalizedAppLocales = [];

  for (const appLocale of appLocales) {
    const {
      code
    } = appLocale;
    const iso = appLocale.iso || code;
    normalizedAppLocales.push({
      code,
      iso
    });
  } // First pass: match exact locale.


  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.toLowerCase() === browserCode.toLowerCase());

    if (matchedLocale) {
      matchedLocales.push({
        code: matchedLocale.code,
        score: 1 - index / browserLocales.length
      });
      break;
    }
  } // Second pass: match only locale code part of the browser locale (not including country).


  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split('-')[0].toLowerCase();
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.split('-')[0].toLowerCase() === languageCode);

    if (matchedLocale) {
      // Deduct a thousandth for being non-exact match.
      matchedLocales.push({
        code: matchedLocale.code,
        score: 0.999 - index / browserLocales.length
      });
      break;
    }
  } // Sort the list by score (0 - lowest, 1 - highest).


  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        // If scores are equal then pick more specific (longer) code.
        return localeB.code.length - localeA.code.length;
      }

      return localeB.score - localeA.score;
    });
  }

  return matchedLocales.length ? matchedLocales[0].code : undefined;
}
/**
 * Get locale code that corresponds to current hostname
 *
 * @param  {ResolvedOptions['normalizedLocales']} locales
 * @param  {import('http').IncomingMessage | undefined} req
 * @return {string} Locale code found if any
 */

function getLocaleDomain(locales, req) {
  /** @type {string | undefined} */
  let host;

  if (false) {} else if (req) {
    const detectedHost = req.headers['x-forwarded-host'] || req.headers.host;
    host = Array.isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }

  if (host) {
    const matchingLocale = locales.find(l => l.domain === host);

    if (matchingLocale) {
      return matchingLocale.code;
    }
  }

  return '';
}
/**
 * Creates a RegExp for route paths
 *
 * @param  {readonly string[]} localeCodes
 * @return {RegExp}
 */

function getLocalesRegex(localeCodes) {
  return new RegExp(`^/(${localeCodes.join('|')})(?:/|$)`, 'i');
}
/**
 * Creates getter for getLocaleFromRoute
 *
 * @param  {readonly string[]} localeCodes
 * @param  {Pick<ResolvedOptions, 'routesNameSeparator' | 'defaultLocaleRouteNameSuffix'>} options
 */

function createLocaleFromRouteGetter(localeCodes, {
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, 'i');
  const regexpPath = getLocalesRegex(localeCodes);
  /**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {import('vue-router').Route} route
   * @return {string} Locale code found if any
   */

  const getLocaleFromRoute = route => {
    // Extract from route name
    if (route.name) {
      const matches = route.name.match(regexpName);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      // Extract from path
      const matches = route.path.match(regexpPath);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    }

    return '';
  };

  return getLocaleFromRoute;
}
/**
 * @param {import('http').IncomingMessage | undefined} req
 * @param {{ useCookie: boolean, cookieKey: string, localeCodes: readonly string[] }} options
 * @return {string | undefined}
 */

function getLocaleCookie(req, {
  useCookie,
  cookieKey,
  localeCodes
}) {
  if (useCookie) {
    let localeCode;

    if (false) {} else if (req && typeof req.headers.cookie !== 'undefined') {
      const cookies = req.headers && req.headers.cookie ? external_cookie_default.a.parse(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }

    if (localeCode && localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
}
/**
 * @param {string} locale
 * @param {import('http').ServerResponse | undefined} res
 * @param {{ useCookie: boolean, cookieDomain: string | null, cookieKey: string, cookieSecure: boolean, cookieCrossOrigin: boolean}} options
 */

function setLocaleCookie(locale, res, {
  useCookie,
  cookieDomain,
  cookieKey,
  cookieSecure,
  cookieCrossOrigin
}) {
  if (!useCookie) {
    return;
  }

  const date = new Date();
  /** @type {import('cookie').CookieSerializeOptions} */

  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: '/',
    sameSite: cookieCrossOrigin ? 'none' : 'lax',
    secure: cookieCrossOrigin || cookieSecure
  };

  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }

  if (false) {} else if (res) {
    let headers = res.getHeader('Set-Cookie') || [];

    if (!Array.isArray(headers)) {
      headers = [String(headers)];
    }

    const redirectCookie = external_cookie_default.a.serialize(cookieKey, locale, cookieOptions);
    headers.push(redirectCookie);
    res.setHeader('Set-Cookie', headers);
  }
}
// CONCATENATED MODULE: ./node_modules/ufo/dist/index.mjs
const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = {
  overflow: "Overflow Error",
  "not-basic": "Illegal Input",
  "invalid-input": "Invalid Input"
};
const e = Math.floor;
const r = String.fromCharCode;

function s(n2) {
  throw new RangeError(o[n2]);
}

const c = function (n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};

const u = function (n2, t2, o2) {
  let r2 = 0;

  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }

  return e(r2 + 36 * n2 / (n2 + 38));
};

function toASCII(o2) {
  return function (n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);

    const s2 = function (n3, t2) {
      const o4 = [];
      let e3 = n3.length;

      for (; e3--;) {
        o4[e3] = t2(n3[e3]);
      }

      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");

    return r2 + s2;
  }(o2, function (t2) {
    return n.test(t2) ? "xn--" + function (n2) {
      const t3 = [];

      const o3 = (n2 = function (n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;

        for (; o4 < e2;) {
          const r2 = n3.charCodeAt(o4++);

          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }

        return t4;
      }(n2)).length;

      let f = 128;
      let i = 0;
      let l = 72;

      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }

      const h = t3.length;
      let p = h;

      for (h && t3.push("-"); p < o3;) {
        let o4 = 2147483647;

        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }

        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;

        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;

            for (let o6 = 36;; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;

              if (n3 < s2) {
                break;
              }

              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }

            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }

        ++i, ++f;
      }

      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;

function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}

function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}

function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}

function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}

function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}

function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}

function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}

function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}

function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};

  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }

  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];

    if (s.length < 2) {
      continue;
    }

    const key = decode(s[1]);

    if (key === "__proto__" || key === "constructor") {
      continue;
    }

    const value = decodeQueryValue(s[2] || "");

    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }

  if (Array.isArray(val)) {
    return val.map(_val => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }

  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}

function stringifyQuery(query) {
  return Object.keys(query).map(k => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};

    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }

    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }

  get hostname() {
    return parseHost(this.host).hostname;
  }

  get port() {
    return parseHost(this.host).port || "";
  }

  get username() {
    return parseAuth(this.auth).username;
  }

  get password() {
    return parseAuth(this.auth).password || "";
  }

  get hasProtocol() {
    return this.protocol.length;
  }

  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }

  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }

  get searchParams() {
    const p = new URLSearchParams();

    for (const name in this.query) {
      const value = this.query[name];

      if (Array.isArray(value)) {
        value.forEach(v => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }

    return p;
  }

  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }

  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }

  get encodedAuth() {
    if (!this.auth) {
      return "";
    }

    const {
      username,
      password
    } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }

  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }

  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }

    Object.assign(this.query, url.query);

    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }

    if (url.hash) {
      this.hash = url.hash;
    }
  }

  toJSON() {
    return this.href;
  }

  toString() {
    return this.href;
  }

}

function isRelative(inputStr) {
  return ["./", "../"].some(str => inputStr.startsWith(str));
}

function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}

const TRAILING_SLASH_RE = /\/$|\/\?/;

function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }

  return TRAILING_SLASH_RE.test(input);
}

function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }

  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }

  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}

function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }

  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }

  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}

function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}

function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}

function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}

function cleanDoubleSlashes(input = "") {
  return input.split("://").map(str => str.replace(/\/{2,}/g, "/")).join("://");
}

function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }

  const _base = withoutTrailingSlash(base);

  if (input.startsWith(_base)) {
    return input;
  }

  return joinURL(_base, input);
}

function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }

  const _base = withoutTrailingSlash(base);

  if (input.startsWith(_base)) {
    return input.substr(_base.length) || "/";
  }

  return input;
}

function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search),
    ...query
  };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}

function getQuery(input) {
  return parseQuery(parseURL(input).search);
}

function isEmptyURL(url) {
  return !url || url === "/";
}

function isNonEmptyURL(url) {
  return url && url !== "/";
}

function joinURL(base, ...input) {
  let url = base || "";

  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }

  return url;
}

function createURL(input) {
  return new $URL(input);
}

function normalizeURL(input) {
  return createURL(input).toString();
}

function resolveURL(base, ...input) {
  const url = createURL(base);

  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }

  return url.toString();
}

function dist_isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }

  const [protocol = "", auth, hostAndPath] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?]*)(.*)?/) || []).splice(1);
  const {
    pathname,
    search,
    hash
  } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}

function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}

function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}

function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}

function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;

  if (!parsed.protocol) {
    return fullpath;
  }

  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}


// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.utils.js


 // @ts-ignore


/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */

/**
 * Asynchronously load messages from translation files
 *
 * @param {import('@nuxt/types').Context} context
 * @param {string} locale Language code to load
 * @return {Promise<void>}
 */

async function loadLanguageAsync(context, locale) {
  const {
    app
  } = context;
  const {
    i18n
  } = app;

  if (!i18n.loadedLanguages) {
    i18n.loadedLanguages = [];
  }

  if (!i18n.loadedLanguages.includes(locale)) {
    const localeObject = options_options.normalizedLocales.find(l => l.code === locale);

    if (localeObject) {
      const {
        file
      } = localeObject;

      if (file) {
        /*  */

        /** @type {import('vue-i18n').LocaleMessageObject | undefined} */
        let messages;

        if (false) {}

        if (!messages) {
          try {
            // @ts-ignore
            const getter = await localeMessages[file]().then(m => m.default || m);
            messages = typeof getter === 'function' ? await Promise.resolve(getter(context, locale)) : getter;
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(formatMessage(`Failed loading async locale export: ${error.message}`));
          }
        }

        if (messages) {
          i18n.setLocaleMessage(locale, messages);
          i18n.loadedLanguages.push(locale);
        }
        /*  */

      } else {
        console.warn(formatMessage(`Could not find lang file for locale ${locale}`));
      }
    } else {
      console.warn(formatMessage(`Attempted to load messages for non-existant locale code "${locale}"`));
    }
  }
}
/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 *
 * @param {string | ((context: import('@nuxt/types').Context) => string)} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @param {import('../../types').Locale} localeCode
 * @param {Pick<ResolvedOptions, 'differentDomains' | 'normalizedLocales'>} options
 * @return {string}
 */

function resolveBaseUrl(baseUrl, context, localeCode, {
  differentDomains,
  normalizedLocales
}) {
  if (typeof baseUrl === 'function') {
    return baseUrl(context);
  }

  if (differentDomains && localeCode) {
    // Lookup the `differentDomain` origin associated with given locale.
    const domain = getDomainFromLocale(localeCode, context.req, {
      normalizedLocales
    });

    if (domain) {
      return domain;
    }
  }

  return baseUrl;
}
/**
 * Gets the `differentDomain` domain from locale.
 *
 * @param {string} localeCode
 * @param {import('http').IncomingMessage | undefined} req
 * @param {Pick<ResolvedOptions, 'normalizedLocales'>} options
 * @return {string | undefined}
 */

function getDomainFromLocale(localeCode, req, {
  normalizedLocales
}) {
  // Lookup the `differentDomain` origin associated with given locale.
  const lang = normalizedLocales.find(locale => locale.code === localeCode);

  if (lang && lang.domain) {
    if (hasProtocol(lang.domain)) {
      return lang.domain;
    }

    let protocol;

    if (true) {
      protocol = req && is_https_dist_default()(req) ? 'https' : 'http';
    } else {}

    return `${protocol}://${lang.domain}`;
  } // eslint-disable-next-line no-console


  console.warn(formatMessage(`Could not find domain name for locale ${localeCode}`));
}
/**
 * @param {import('vuex').Store<Record<string, boolean>>} store
 * @param {Required<import('../../types').VuexOptions>} vuex
 * @param {readonly string[]} localeCodes
 */

function registerStore(store, vuex, localeCodes) {
  /** @typedef {{
   *    locale?: string
   *    messages?: Record<string, string>
   *    routeParams?: Record<string, Record<string, string>>
   * }} ModuleStore
   *
   * @type {import('vuex').Module<ModuleStore, {}>}
   */
  const storeModule = {
    namespaced: true,
    state: () => ({ ...(vuex.syncLocale ? {
        locale: ''
      } : {}),
      ...(vuex.syncMessages ? {
        messages: {}
      } : {}),
      ...(vuex.syncRouteParams ? {
        routeParams: {}
      } : {})
    }),
    actions: { ...(vuex.syncLocale ? {
        setLocale({
          commit
        }, locale) {
          commit('setLocale', locale);
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages({
          commit
        }, messages) {
          commit('setMessages', messages);
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams({
          commit
        }, params) {
          if (false) {}

          commit('setRouteParams', params);
        }

      } : {})
    },
    mutations: { ...(vuex.syncLocale ? {
        setLocale(state, locale) {
          state.locale = locale;
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages(state, messages) {
          state.messages = messages;
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams(state, params) {
          state.routeParams = params;
        }

      } : {})
    },
    getters: { ...(vuex.syncRouteParams ? {
        localeRouteParams: ({
          routeParams
        }) => {
          /** @type {(locale: string) => Record<string, string>} */
          const paramsGetter = locale => routeParams && routeParams[locale] || {};

          return paramsGetter;
        }
      } : {})
    }
  };
  store.registerModule(vuex.moduleName, storeModule, {
    preserveState: !!store.state[vuex.moduleName]
  });
}
/**
 * Dispatch store module actions to keep it in sync with app's locale data
 *
 * @param  {import('vuex').Store<void>} store
 * @param  {string | null} locale The current locale
 * @param  {object | null} messages Current messages
 * @param  {ResolvedOptions['vuex']} vuex
 * @return {Promise<void>}
 */

async function syncVuex(store, locale = null, messages = null, vuex) {
  if (vuex && store) {
    if (locale !== null && vuex.syncLocale) {
      await store.dispatch(vuex.moduleName + '/setLocale', locale);
    }

    if (messages !== null && vuex.syncMessages) {
      await store.dispatch(vuex.moduleName + '/setMessages', messages);
    }
  }
}
/**
 * Validate setRouteParams action's payload
 *
 * @param {object} routeParams The action's payload
 * @param {readonly string[]} localeCodes
 */

function validateRouteParams(routeParams, localeCodes) {
  if (!isObject(routeParams)) {
    // eslint-disable-next-line no-console
    console.warn(formatMessage('Route params should be an object'));
    return;
  }

  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(formatMessage(`Trying to set route params for key ${key} which is not a valid locale`));
    } else if (!isObject(value)) {
      // eslint-disable-next-line no-console
      console.warn(formatMessage(`Trying to set route params for locale ${key} with a non-object value`));
    }
  }
}
/**
 * @param {any} value
 * @return {boolean}
 */

function isObject(value) {
  return value && !Array.isArray(value) && typeof value === 'object';
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/middleware.js
// @ts-ignore

/** @type {import('@nuxt/types').Middleware} */

const i18nMiddleware = async context => {
  const {
    app,
    isHMR
  } = context;

  if (isHMR) {
    return;
  }

  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);

  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : undefined;
    context.redirect(status, redirectPath, query);
  }
};

_nuxt_middleware.nuxti18n = i18nMiddleware;
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.routing.js



 // @ts-ignore


/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localePath']}
 */

function plugin_routing_localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute ? localizedRoute.route.fullPath : '';
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeRoute']}
 */


function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.route : undefined;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeLocation']}
 */


function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.location : undefined;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @param {import('vue-router').RawLocation} route
 * @param {string} [locale]
 * @return {ReturnType<import('vue-router').default['resolve']> | undefined}
 */


function resolveRoute(route, locale) {
  // Abort if no route or no locale
  if (!route) {
    return;
  }

  const {
    i18n
  } = this;
  locale = locale || i18n.locale;

  if (!locale) {
    return;
  } // If route parameter is a string, check if it's a path or name of route.


  if (typeof route === 'string') {
    if (route[0] === '/') {
      // If route parameter is a path, create route object with path.
      route = {
        path: route
      };
    } else {
      // Else use it as route name.
      route = {
        name: route
      };
    }
  }

  let localizedRoute = Object.assign({}, route);

  if (localizedRoute.path && !localizedRoute.name) {
    const resolvedRoute = this.router.resolve(localizedRoute).route;
    const resolvedRouteName = this.getRouteBaseName(resolvedRoute);

    if (resolvedRouteName) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, locale),
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
    } else {
      const isDefaultLocale = locale === options_options.defaultLocale; // if route has a path defined but no name, resolve full route using the path

      const isPrefixed = // don't prefix default locale
      !(isDefaultLocale && [Constants.STRATEGIES.PREFIX_EXCEPT_DEFAULT, Constants.STRATEGIES.PREFIX_AND_DEFAULT].includes(options_options.strategy)) && // no prefix for any language
      !(options_options.strategy === Constants.STRATEGIES.NO_PREFIX) && // no prefix for different domains
      !i18n.differentDomains;

      if (isPrefixed) {
        localizedRoute.path = `/${locale}${localizedRoute.path}`;
      }

      localizedRoute.path = nuxtOptions.trailingSlash ? withTrailingSlash(localizedRoute.path, true) : withoutTrailingSlash(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !localizedRoute.path) {
      localizedRoute.name = this.getRouteBaseName();
    }

    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const {
      params
    } = localizedRoute;

    if (params && params['0'] === undefined && params.pathMatch) {
      params['0'] = params.pathMatch;
    }
  }

  const resolvedRoute = this.router.resolve(localizedRoute);

  if (resolvedRoute.route.name) {
    return resolvedRoute;
  } // If didn't resolve to an existing route then just return resolved route based on original input.


  return this.router.resolve(route);
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['switchLocalePath']}
 */


function switchLocalePath(locale) {
  const name = this.getRouteBaseName();

  if (!name) {
    return '';
  }

  const {
    i18n,
    route,
    store
  } = this;
  const {
    params,
    ...routeCopy
  } = route;
  let langSwitchParams = {};

  if (options_options.vuex && options_options.vuex.syncRouteParams && store) {
    langSwitchParams = store.getters[`${options_options.vuex.moduleName}/localeRouteParams`](locale);
  }

  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: { ...params,
      ...langSwitchParams,
      0: params.pathMatch
    }
  });
  let path = this.localePath(baseRoute, locale); // Handle different domains

  if (i18n.differentDomains) {
    const getDomainOptions = {
      differentDomains: i18n.differentDomains,
      normalizedLocales: options_options.normalizedLocales
    };
    const domain = getDomainFromLocale(locale, this.req, getDomainOptions);

    if (domain) {
      path = domain + path;
    }
  }

  return path;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['getRouteBaseName']}
 */


function getRouteBaseName(givenRoute) {
  const route = givenRoute !== undefined ? givenRoute : this.route;

  if (!route || !route.name) {
    return;
  }

  return route.name.split(options_options.routesNameSeparator)[0];
}
/**
 * @param {string | undefined} routeName
 * @param {string} locale
 */


function getLocaleRouteName(routeName, locale) {
  let name = routeName + (options_options.strategy === Constants.STRATEGIES.NO_PREFIX ? '' : options_options.routesNameSeparator + locale);

  if (locale === options_options.defaultLocale && options_options.strategy === Constants.STRATEGIES.PREFIX_AND_DEFAULT) {
    name += options_options.routesNameSeparator + options_options.defaultLocaleRouteNameSuffix;
  }

  return name;
}
/**
 * @template {(...args: any[]) => any} T
 * @param {T} targetFunction
 * @return {(this: Vue, ...args: Parameters<T>) => ReturnType<T>}
 */


const VueInstanceProxy = function (targetFunction) {
  return function () {
    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      localeRoute: this.localeRoute,
      localeLocation: this.localeLocation,
      req:  true ? this.$ssrContext.req : undefined,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};
/**
 * @template {(...args: any[]) => any} T
 * @param {import('@nuxt/types').Context} context
 * @param {T} targetFunction
 * @return {(...args: Parameters<T>) => ReturnType<T>}
 */


const NuxtContextProxy = function (context, targetFunction) {
  return function () {
    const {
      app,
      req,
      route,
      store
    } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      localeLocation: app.localeLocation,
      localeRoute: app.localeRoute,
      req:  true ? req : undefined,
      route,
      router: app.router,
      store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};
/** @type {import('vue').PluginObject<void>} */


const plugin_routing_plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localePath: VueInstanceProxy(plugin_routing_localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        localeLocation: VueInstanceProxy(localeLocation),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }

};
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_routing = (context => {
  external_vue_default.a.use(plugin_routing_plugin);
  const {
    app,
    store
  } = context;
  app.localePath = context.localePath = NuxtContextProxy(context, plugin_routing_localePath);
  app.localeRoute = context.localeRoute = NuxtContextProxy(context, localeRoute);
  app.localeLocation = context.localeLocation = NuxtContextProxy(context, localeLocation);
  app.switchLocalePath = context.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = context.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);

  if (store) {
    store.localePath = app.localePath;
    store.localeRoute = app.localeRoute;
    store.localeLocation = app.localeLocation;
    store.switchLocalePath = app.switchLocalePath;
    store.getRouteBaseName = app.getRouteBaseName;
  }
});
// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(13);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(52);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(53);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(54);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(55);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(56);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(57);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(58);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(59);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(60);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(61);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(62);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(63);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(64);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/head-meta.js
















/**
 * @this {import('vue/types/vue').Vue}
 * @return {import('vue-meta').MetaInfo}
 */

function nuxtI18nHead({
  addDirAttribute = true,
  addSeoAttributes = false
} = {}) {
  // Can happen when using from a global mixin.
  if (!this.$i18n) {
    return {};
  }
  /** @type {import('../../types/vue').NuxtI18nMeta} */


  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.localeProperties;
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || options_options.defaultDirection;
  /**
   * Adding Direction Attribute:
   */

  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }
  /**
   * Adding SEO Meta:
   */


  if (addSeoAttributes && ( // @ts-ignore
  external_vue_meta_default.a.hasMetaInfo ? external_vue_meta_default.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales && this.$options[Constants.COMPONENT_OPTIONS_KEY] !== false && // @ts-ignore
  !(this.$options[Constants.COMPONENT_OPTIONS_KEY] && this.$options[Constants.COMPONENT_OPTIONS_KEY].seo === false)) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso; // TODO: simple lang or "specific" lang with territory?
    }

    const locales =
    /** @type {import('../../types').LocaleObject[]} */
    this.$i18n.locales;
    addHreflangLinks.bind(this)(locales, this.$i18n.__baseUrl, metaObject.link);
    addCanonicalLinks.bind(this)(this.$i18n.__baseUrl, metaObject.link);
    addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
    addAlternateOgLocales.bind(this)(locales, currentLocaleIso, metaObject.meta);
  }
  /**
   * Internals:
   */

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */


  function addHreflangLinks(locales, baseUrl, link) {
    if (options_options.strategy === Constants.STRATEGIES.NO_PREFIX) {
      return;
    }
    /** @type {Map<string, import('../../types').LocaleObject>} */


    const localeMap = new Map();

    for (const locale of locales) {
      const localeIso = locale.iso;

      if (!localeIso) {
        // eslint-disable-next-line no-console
        console.warn(formatMessage('Locale ISO code is required to generate alternate link'));
        continue;
      }

      const [language, region] = localeIso.split('-');

      if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
        localeMap.set(language, locale);
      }

      localeMap.set(localeIso, locale);
    }

    for (const [iso, mapLocale] of localeMap.entries()) {
      const localePath = this.switchLocalePath(mapLocale.code);

      if (localePath) {
        link.push({
          hid: `i18n-alt-${iso}`,
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: iso
        });
      }
    }

    if (options_options.defaultLocale) {
      const localePath = this.switchLocalePath(options_options.defaultLocale);

      if (localePath) {
        link.push({
          hid: 'i18n-xd',
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: 'x-default'
        });
      }
    }
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */


  function addCanonicalLinks(baseUrl, link) {
    const currentRoute = this.localeRoute({ ...this.$route,
      name: this.getRouteBaseName()
    });
    const canonicalPath = currentRoute ? currentRoute.path : null;

    if (canonicalPath) {
      link.push({
        hid: 'i18n-can',
        rel: 'canonical',
        href: toAbsoluteUrl(canonicalPath, baseUrl)
      });
    }
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject} currentLocale
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */


  function addCurrentOgLocale(currentLocale, currentLocaleIso, meta) {
    const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;

    if (!hasCurrentLocaleAndIso) {
      return;
    }

    meta.push({
      hid: 'i18n-og',
      property: 'og:locale',
      // Replace dash with underscore as defined in spec: language_TERRITORY
      content: hypenToUnderscore(currentLocaleIso)
    });
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */


  function addAlternateOgLocales(locales, currentLocaleIso, meta) {
    const localesWithoutCurrent = locales.filter(locale => {
      const localeIso = locale.iso;
      return localeIso && localeIso !== currentLocaleIso;
    });

    if (localesWithoutCurrent.length) {
      const alternateLocales = localesWithoutCurrent.map(locale => ({
        hid: `i18n-og-alt-${locale.iso}`,
        property: 'og:locale:alternate',
        content: hypenToUnderscore(locale.iso)
      }));
      meta.push(...alternateLocales);
    }
  }
  /**
   * @param {string | undefined} str
   * @return {string}
   */


  function hypenToUnderscore(str) {
    return (str || '').replace(/-/g, '_');
  }
  /**
   * @param {string} urlOrPath
   * @param {string} baseUrl
   */


  function toAbsoluteUrl(urlOrPath, baseUrl) {
    if (urlOrPath.match(/^https?:\/\//)) {
      return urlOrPath;
    }

    return baseUrl + urlOrPath;
  }

  return metaObject;
}
/**
 * @deprecated Use `nuxtI18nHead()` instead.
 * @this {import('vue/types/vue').Vue}
 */

function nuxtI18nSeo() {
  return nuxtI18nHead.call(this, {
    addDirAttribute: false,
    addSeoAttributes: true
  });
}
// CONCATENATED MODULE: ./node_modules/klona/full/index.mjs
function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.main.js





 // @ts-ignore

 // @ts-ignore


external_vue_default.a.use(external_vue_i18n_default.a);
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_main = (async context => {
  const {
    app,
    route,
    store,
    req,
    res,
    redirect
  } = context;

  if (options_options.vuex && store) {
    registerStore(store, options_options.vuex, options_options.localeCodes);
  }

  const {
    lazy
  } = options_options;
  const injectInNuxtState = lazy && (lazy === true || lazy.skipNuxtState !== true);

  if ( true && injectInNuxtState) {
    const devalue = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 73, 7))).default;
    context.beforeNuxtRender(({
      nuxtState
    }) => {
      /** @type {Record<string, import('vue-i18n').LocaleMessageObject>} */
      const langs = {};
      const {
        fallbackLocale,
        locale
      } = app.i18n;

      if (locale && locale !== fallbackLocale) {
        // @ts-ignore Using internal API to avoid unnecessary cloning.
        const messages = app.i18n._getMessages()[locale];

        if (messages) {
          try {
            devalue(messages);
            langs[locale] = messages;
          } catch {// Ignore - client-side will load the chunk asynchronously.
          }
        }
      }

      nuxtState.__i18n = {
        langs
      };
    });
  }

  const {
    alwaysRedirect,
    fallbackLocale,
    onlyOnNoPrefix,
    onlyOnRoot,
    useCookie,
    cookieKey,
    cookieDomain,
    cookieSecure,
    cookieCrossOrigin
  } =
  /** @type {Required<import('../../types').DetectBrowserLanguageOptions>} */
  options_options.detectBrowserLanguage;
  /**
   * @param {string | undefined} newLocale
   * @param {{ initialSetup?: boolean }} [options=false]
   */

  const loadAndSetLocale = async (newLocale, {
    initialSetup = false
  } = {}) => {
    if (!newLocale) {
      return;
    } // Abort if different domains option enabled


    if (!initialSetup && app.i18n.differentDomains) {
      return;
    }

    const oldLocale = app.i18n.locale;

    if (newLocale === oldLocale) {
      return;
    }

    const localeOverride = app.i18n.onBeforeLanguageSwitch(oldLocale, newLocale, initialSetup, context);

    if (localeOverride && app.i18n.localeCodes.includes(localeOverride)) {
      if (localeOverride === oldLocale) {
        return;
      }

      newLocale = localeOverride;
    }

    if (!initialSetup) {
      app.i18n.beforeLanguageSwitch(oldLocale, newLocale);
    }

    if (useCookie) {
      app.i18n.setLocaleCookie(newLocale);
    }

    if (options_options.langDir) {
      const i18nFallbackLocale = app.i18n.fallbackLocale;

      if (options_options.lazy) {
        // Load fallback locale(s).
        if (i18nFallbackLocale) {
          /** @type {Promise<void>[]} */
          let localesToLoadPromises = [];

          if (Array.isArray(i18nFallbackLocale)) {
            localesToLoadPromises = i18nFallbackLocale.map(fbLocale => loadLanguageAsync(context, fbLocale));
          } else if (typeof i18nFallbackLocale === 'object') {
            if (i18nFallbackLocale[newLocale]) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale[newLocale].map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }

            if (i18nFallbackLocale.default) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale.default.map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }
          } else if (newLocale !== i18nFallbackLocale) {
            localesToLoadPromises.push(loadLanguageAsync(context, i18nFallbackLocale));
          }

          await Promise.all(localesToLoadPromises);
        }

        await loadLanguageAsync(context, newLocale);
      } else {
        // Load all locales.
        await Promise.all(options_options.localeCodes.map(locale => loadLanguageAsync(context, locale)));
      }
    }

    app.i18n.locale = newLocale;
    /** @type {import('../../types').LocaleObject} */

    const newLocaleProperties = options_options.normalizedLocales.find(l => l.code === newLocale) || {
      code: newLocale
    }; // In case certain locale has more properties than another, reset all the properties.

    for (const key of Object.keys(app.i18n.localeProperties)) {
      app.i18n.localeProperties[key] = undefined;
    } // Copy properties of the new locale


    for (const [key, value] of Object.entries(newLocaleProperties)) {
      external_vue_default.a.set(app.i18n.localeProperties, key, klona(value));
    }

    if (options_options.vuex) {
      await syncVuex(store, newLocale, app.i18n.getLocaleMessage(newLocale), options_options.vuex);
    } // Must retrieve from context as it might have changed since plugin initialization.


    const {
      route
    } = context;
    const redirectPath = getRedirectPathForLocale(route, newLocale);

    if (initialSetup) {
      // Redirect will be delayed until middleware runs as redirecting from plugin does not
      // work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);

      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };

  const getLocaleFromRoute = createLocaleFromRouteGetter(options_options.localeCodes, {
    routesNameSeparator: options_options.routesNameSeparator,
    defaultLocaleRouteNameSuffix: options_options.defaultLocaleRouteNameSuffix
  });
  /**
   * Gets the redirect path for locale.
   *
   * @param {import("vue-router").Route} route
   * @param {string | undefined} locale
   * @return {string} The redirect path for locale.
   */

  const getRedirectPathForLocale = (route, locale) => {
    // Redirects are ignored if it is a nuxt generate.
    if (true) {
      return '';
    }

    if (!locale || app.i18n.differentDomains || options_options.strategy === Constants.STRATEGIES.NO_PREFIX) {
      return '';
    }

    if (getLocaleFromRoute(route) === locale) {
      // If "onlyOnRoot" or "onlyOnNoPrefix" is set and strategy is "prefix_and_default", prefer unprefixed route for
      // default locale.
      if (!(onlyOnRoot || onlyOnNoPrefix) || locale !== options_options.defaultLocale || options_options.strategy !== Constants.STRATEGIES.PREFIX_AND_DEFAULT) {
        return '';
      }
    } // At this point we are left with route that either has no or different locale.


    let redirectPath = app.switchLocalePath(locale);

    if (!redirectPath) {
      // Current route could be 404 in which case attempt to find matching route for given locale.
      redirectPath = app.localePath(route.fullPath, locale);
    }

    if (!redirectPath || redirectPath === route.fullPath || redirectPath.startsWith('//')) {
      return '';
    }

    return redirectPath;
  };
  /**
   * Called by middleware on navigation (also on the initial one).
   *
   * @type {import('../../types/internal').onNavigateInternal}
   */


  const onNavigate = async route => {
    // Handle root path redirect
    if (route.path === '/' && options_options.rootRedirect) {
      let statusCode = 302;
      let path = options_options.rootRedirect;

      if (typeof options_options.rootRedirect !== 'string') {
        statusCode = options_options.rootRedirect.statusCode;
        path = options_options.rootRedirect.path;
      }

      return [statusCode, `/${path}`,
      /* preserve query */
      true];
    }

    const storedRedirect = app.i18n.__redirect;

    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }

    const resolveBaseUrlOptions = {
      differentDomains: options_options.differentDomains,
      normalizedLocales: options_options.normalizedLocales
    };
    app.i18n.__baseUrl = resolveBaseUrl(options_options.baseUrl, context, app.i18n.locale, resolveBaseUrlOptions);
    const finalLocale = options_options.detectBrowserLanguage && doDetectBrowserLanguage(route) || getLocaleFromRoute(route) || app.i18n.locale || app.i18n.defaultLocale || '';

    if (options_options.skipSettingLocaleOnNavigate) {
      app.i18n.__pendingLocale = finalLocale;
      app.i18n.__pendingLocalePromise = new Promise(resolve => {
        app.i18n.__resolvePendingLocalePromise = resolve;
      });
    } else {
      await app.i18n.setLocale(finalLocale);
    }

    return [null, null];
  };

  const finalizePendingLocaleChange = async () => {
    if (!app.i18n.__pendingLocale) {
      return;
    }

    await app.i18n.setLocale(app.i18n.__pendingLocale);

    app.i18n.__resolvePendingLocalePromise('');

    app.i18n.__pendingLocale = null;
  };

  const waitForPendingLocaleChange = async () => {
    if (app.i18n.__pendingLocale) {
      await app.i18n.__pendingLocalePromise;
    }
  };

  const getBrowserLocale = () => {
    if (false) {} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      return matchBrowserLocale(options_options.normalizedLocales, parseAcceptLanguage(req.headers['accept-language']));
    } else {
      return undefined;
    }
  };
  /**
   * @param {import('vue-router').Route} route
   * @return {string} Returns the browser locale that was detected or an empty string otherwise.
   */


  const doDetectBrowserLanguage = route => {
    // Browser detection is ignored if it is a nuxt generate.
    if (true) {
      return '';
    }

    if (options_options.strategy !== Constants.STRATEGIES.NO_PREFIX) {
      if (onlyOnRoot) {
        if (route.path !== '/') {
          return '';
        }
      } else if (onlyOnNoPrefix) {
        if (!alwaysRedirect && route.path.match(getLocalesRegex(options_options.localeCodes))) {
          return '';
        }
      }
    }

    let matchedLocale;

    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie())) {// Get preferred language from cookie if present and enabled
    } else {
      // Try to get locale from either navigator or header detection
      matchedLocale = getBrowserLocale();
    }

    const finalLocale = matchedLocale || fallbackLocale; // Handle cookie option to prevent multiple redirections

    if (finalLocale && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale !== app.i18n.locale) {
        return finalLocale;
      }
    }

    return '';
  };
  /**
   * Extends the newly created vue-i18n instance with nuxt-i18n properties.
   *
   * @param {import('vue-i18n').IVueI18n} i18n
   */


  const extendVueI18nInstance = i18n => {
    i18n.locales = klona(options_options.locales);
    i18n.localeCodes = klona(options_options.localeCodes);
    i18n.localeProperties = external_vue_default.a.observable(klona(options_options.normalizedLocales.find(l => l.code === i18n.locale) || {
      code: i18n.locale
    }));
    i18n.defaultLocale = options_options.defaultLocale;
    i18n.differentDomains = options_options.differentDomains;
    i18n.beforeLanguageSwitch = options_options.beforeLanguageSwitch;
    i18n.onBeforeLanguageSwitch = options_options.onBeforeLanguageSwitch;
    i18n.onLanguageSwitched = options_options.onLanguageSwitched;

    i18n.setLocaleCookie = locale => setLocaleCookie(locale, res, {
      useCookie,
      cookieDomain,
      cookieKey,
      cookieSecure,
      cookieCrossOrigin
    });

    i18n.getLocaleCookie = () => getLocaleCookie(req, {
      useCookie,
      cookieKey,
      localeCodes: options_options.localeCodes
    });

    i18n.setLocale = locale => loadAndSetLocale(locale);

    i18n.getBrowserLocale = () => getBrowserLocale();

    i18n.finalizePendingLocaleChange = finalizePendingLocaleChange;
    i18n.waitForPendingLocaleChange = waitForPendingLocaleChange;
    i18n.__baseUrl = app.i18n.__baseUrl;
    i18n.__pendingLocale = app.i18n.__pendingLocale;
    i18n.__pendingLocalePromise = app.i18n.__pendingLocalePromise;
    i18n.__resolvePendingLocalePromise = app.i18n.__resolvePendingLocalePromise;
  }; // Set instance options


  const vueI18nOptions = typeof options_options.vueI18n === 'function' ? await options_options.vueI18n(context) : klona(options_options.vueI18n);
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance; // @ts-ignore

  app.i18n = context.i18n = new external_vue_i18n_default.a(vueI18nOptions); // Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey

  app.i18n.locale = '';
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || '';
  extendVueI18nInstance(app.i18n);
  const resolveBaseUrlOptions = {
    differentDomains: options_options.differentDomains,
    normalizedLocales: options_options.normalizedLocales
  };
  app.i18n.__baseUrl = resolveBaseUrl(options_options.baseUrl, context, '', resolveBaseUrlOptions);
  app.i18n.__onNavigate = onNavigate;
  external_vue_default.a.prototype.$nuxtI18nSeo = nuxtI18nSeo;
  external_vue_default.a.prototype.$nuxtI18nHead = nuxtI18nHead;

  if (store) {
    // Inject in store.
    store.$i18n = app.i18n;

    if (store.state.localeDomains) {
      for (const locale of app.i18n.locales) {
        if (typeof locale === 'string') {
          continue;
        }

        locale.domain = store.state.localeDomains[locale.code];
      }
    }
  }
  /** @type {string | undefined} */


  let finalLocale = options_options.detectBrowserLanguage ? doDetectBrowserLanguage(route) : '';

  if (!finalLocale) {
    const {
      vuex
    } = options_options;

    if (vuex && vuex.syncLocale && store && store.state[vuex.moduleName].locale !== '') {
      finalLocale = store.state[vuex.moduleName].locale;
    } else if (app.i18n.differentDomains) {
      const domainLocale = getLocaleDomain(options_options.normalizedLocales, req);
      finalLocale = domainLocale;
    } else if (options_options.strategy !== Constants.STRATEGIES.NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    }
  }

  if (!finalLocale && useCookie) {
    finalLocale = app.i18n.getLocaleCookie();
  }

  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || '';
  }

  await loadAndSetLocale(finalLocale, {
    initialSetup: true
  });

  if (false) {}
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./node_modules/defu/dist/defu.js
var defu = __webpack_require__(25);
var defu_default = /*#__PURE__*/__webpack_require__.n(defu);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(65);

// EXTERNAL MODULE: ./.nuxt/content/nuxt-content.js
var nuxt_content = __webpack_require__(14);

// CONCATENATED MODULE: ./.nuxt/content/plugin.server.js


external_vue_default.a.component(nuxt_content["a" /* default */].name, nuxt_content["a" /* default */]);
/* harmony default export */ var plugin_server = ((ctx, inject) => {
  const $content = ctx.ssrContext.$content;
  inject('content', $content);
  ctx.$content = $content;
});
// EXTERNAL MODULE: ./node_modules/@nuxt/image/node_modules/defu/dist/defu.cjs
var dist_defu = __webpack_require__(15);
var dist_defu_default = /*#__PURE__*/__webpack_require__.n(dist_defu);

// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/meta.js
async function imageMeta(ctx, url) {
  const cache = getCache(ctx);
  const cacheKey = "image:meta:" + url;

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const meta = await _imageMeta(url).catch(err => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  cache.set(cacheKey, meta);
  return meta;
}

async function _imageMeta(url) {
  if (true) {
    const imageMeta2 = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 74, 7)).then(r => r.default || r);
    const data = await fetch(url).then(res => res.buffer());
    const metadata = imageMeta2(data);

    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }

    const {
      width,
      height
    } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }

  if (typeof Image === "undefined") {
    throw new TypeError("Image not supported");
  }

  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const meta = {
        width: img.width,
        height: img.height,
        ratio: img.width / img.height
      };
      resolve(meta);
    };

    img.onerror = err => reject(err);

    img.src = url;
  });
}

function getCache(ctx) {
  if (!ctx.nuxtContext.cache) {
    if (ctx.nuxtContext.ssrContext && ctx.nuxtContext.ssrContext.cache) {
      ctx.nuxtContext.cache = ctx.nuxtContext.ssrContext.cache;
    } else {
      const _cache = {};
      ctx.nuxtContext.cache = {
        get: id => _cache[id],
        set: (id, value) => {
          _cache[id] = value;
        },
        has: id => typeof _cache[id] !== "undefined"
      };
    }
  }

  return ctx.nuxtContext.cache;
}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/index.js
function imageFetch(url) {
  return fetch(utils_cleanDoubleSlashes(url));
}
function getInt(x) {
  if (typeof x === "number") {
    return x;
  }

  if (typeof x === "string") {
    return parseInt(x, 10);
  }

  return void 0;
}
function getFileExtension(url = "") {
  const extension = url.split(/[?#]/).shift().split("/").pop().split(".").pop();
  return extension;
}
function utils_cleanDoubleSlashes(path = "") {
  return path.replace(/(https?:\/\/)|(\/)+/g, "$1$2");
}
function createMapper(map) {
  return key => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({
  formatter,
  keyMap,
  joinWith = "/",
  valueMap
} = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }

  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }

  const map = valueMap || {};
  Object.keys(map).forEach(valueKey => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];

      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }

      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function renderAttributesToString(attributes = {}) {
  return Object.entries(attributes).map(([key, value]) => value ? `${key}="${value}"` : "").filter(Boolean).join(" ");
}
function renderTag(tag, attrs, contents) {
  const html = `<${tag} ${renderAttributesToString(attrs)}>`;

  if (!contents) {
    return html;
  }

  return html + contents + `</${tag}>`;
}
function generateAlt(src = "") {
  return src.split(/[?#]/).shift().split("/").pop().split(".").shift();
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }

  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/image.js





function createImage(globalOptions, nuxtContext) {
  const staticImageManifest =  false ? undefined : {};
  const ctx = {
    options: globalOptions,
    nuxtContext
  };

  const getImage = function (input, options = {}) {
    const image = resolveImage(ctx, input, options);

    if (image.isStatic) {
      handleStaticImage(image, input);
    }

    return image;
  };

  const $img = function $img2(input, modifiers = {}, options = {}) {
    return getImage(input, { ...options,
      modifiers: dist_defu_default()(modifiers, options.modifiers || {})
    }).url;
  };

  function handleStaticImage(image, input) {
    if (true) {
      if (false) {}

      if (true) {
        const {
          ssrContext
        } = ctx.nuxtContext;

        if (ssrContext) {
          var _ssrState$data, _ssrContext$image;

          const ssrState = ssrContext.nuxt || {};
          const staticImages = ssrState._img = ssrState._img || {};
          const ssrData = (_ssrState$data = ssrState.data) === null || _ssrState$data === void 0 ? void 0 : _ssrState$data[0];

          if (ssrData) {
            ssrData._img = staticImages;
          }

          const mapToStatic = (_ssrContext$image = ssrContext.image) === null || _ssrContext$image === void 0 ? void 0 : _ssrContext$image.mapToStatic;

          if (typeof mapToStatic === "function") {
            const mappedURL = mapToStatic(image, input);

            if (mappedURL) {
              staticImages[image.url] = mappedURL;
              image.url = mappedURL;
            }
          }
        }
      }
    } else {}
  }

  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName],
      ...options
    });
  }

  $img.options = globalOptions;
  $img.getImage = getImage;

  $img.getMeta = (input, options) => getMeta(ctx, input, options);

  $img.getSizes = (input, options) => getSizes(ctx, input, options);

  ctx.$img = $img;
  return $img;
}

async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options
  });

  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}

function resolveImage(ctx, input, options) {
  var _options$modifiers, _options$modifiers2;

  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }

  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }

  const {
    provider,
    defaults
  } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = Object(dist["hasProtocol"])(input) ? input : Object(dist["withLeadingSlash"])(input);

  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = Object(dist["joinURL"])(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }

  if (provider.validateDomains && Object(dist["hasProtocol"])(input)) {
    const inputHost = Object(dist["parseURL"])(input).host;

    if (!ctx.options.domains.find(d => d === inputHost)) {
      return {
        url: input
      };
    }
  }

  const _options = dist_defu_default()(options, preset, defaults);

  _options.modifiers = { ..._options.modifiers
  };
  const expectedFormat = _options.modifiers.format;

  if ((_options$modifiers = _options.modifiers) !== null && _options$modifiers !== void 0 && _options$modifiers.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }

  if ((_options$modifiers2 = _options.modifiers) !== null && _options$modifiers2 !== void 0 && _options$modifiers2.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }

  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}

function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];

  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }

  return provider;
}

function getPreset(ctx, name) {
  if (!name) {
    return {};
  }

  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }

  return ctx.options.presets[name];
}

function getSizes(ctx, input, opts) {
  var _opts$modifiers, _opts$modifiers2;

  const width = parseSize((_opts$modifiers = opts.modifiers) === null || _opts$modifiers === void 0 ? void 0 : _opts$modifiers.width);
  const height = parseSize((_opts$modifiers2 = opts.modifiers) === null || _opts$modifiers2 === void 0 ? void 0 : _opts$modifiers2.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};

  if (typeof opts.sizes === "string") {
    for (const entry of opts.sizes.split(/[\s,]+/).filter(e => e)) {
      const s = entry.split(":");

      if (s.length !== 2) {
        continue;
      }

      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }

  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");

    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }

    if (!isFluid && !size.endsWith("px")) {
      continue;
    }

    let _cWidth = parseInt(size);

    if (!screenMaxWidth || !_cWidth) {
      continue;
    }

    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }

    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;

    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers,
        width: _cWidth,
        height: _cHeight
      }, opts)
    });
  }

  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];

  if (defaultVar) {
    defaultVar.media = "";
  }

  return {
    sizes: variants.map(v => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map(v => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar === null || defaultVar === void 0 ? void 0 : defaultVar.src
  };
}
// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=template&id=356cdf12&
var nuxt_imgvue_type_template_id_356cdf12_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',_vm._g(_vm._b({key:_vm.nSrc,attrs:{"src":_vm.nSrc}},'img',_vm.nAttrs,false),_vm.$listeners),[])}
var nuxt_imgvue_type_template_id_356cdf12_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/image.mixin.js


const defineMixin = opts => opts;

const imageMixin = defineMixin({
  props: {
    src: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: void 0
    },
    quality: {
      type: [Number, String],
      default: void 0
    },
    background: {
      type: String,
      default: void 0
    },
    fit: {
      type: String,
      default: void 0
    },
    modifiers: {
      type: Object,
      default: void 0
    },
    preset: {
      type: String,
      default: void 0
    },
    provider: {
      type: String,
      default: void 0
    },
    sizes: {
      type: [Object, String],
      default: void 0
    },
    preload: {
      type: Boolean,
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    alt: {
      type: String,
      default: void 0
    },
    referrerpolicy: {
      type: String,
      default: void 0
    },
    usemap: {
      type: String,
      default: void 0
    },
    longdesc: {
      type: String,
      default: void 0
    },
    ismap: {
      type: Boolean,
      default: void 0
    },
    crossorigin: {
      type: [Boolean, String],
      default: void 0,
      validator: val => ["anonymous", "use-credentials", "", true, false].includes(val)
    },
    loading: {
      type: String,
      default: void 0
    },
    decoding: {
      type: String,
      default: void 0,
      validator: val => ["async", "auto", "sync"].includes(val)
    }
  },
  computed: {
    nImgAttrs() {
      return {
        width: parseSize(this.width),
        height: parseSize(this.height),
        alt: this.alt,
        referrerpolicy: this.referrerpolicy,
        usemap: this.usemap,
        longdesc: this.longdesc,
        ismap: this.ismap,
        crossorigin: this.crossorigin === true ? "anonymous" : this.crossorigin || void 0,
        loading: this.loading,
        decoding: this.decoding
      };
    },

    nModifiers() {
      return { ...this.modifiers,
        width: parseSize(this.width),
        height: parseSize(this.height),
        format: this.format,
        quality: this.quality,
        background: this.background,
        fit: this.fit
      };
    },

    nOptions() {
      return {
        provider: this.provider,
        preset: this.preset
      };
    }

  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&
//
//
//
//



const defineComponent = opts => opts;

/* harmony default export */ var nuxt_imgvue_type_script_lang_js_ = (defineComponent({
  name: "NuxtImg",
  mixins: [imageMixin],

  head() {
    if (this.preload === true) {
      return {
        link: [{
          rel: "preload",
          as: "image",
          href: this.nSrc
        }]
      };
    }
  },

  computed: {
    nAttrs() {
      const attrs = this.nImgAttrs;

      if (this.sizes) {
        const {
          sizes,
          srcset
        } = this.nSizes;
        attrs.sizes = sizes;
        attrs.srcset = srcset;
      }

      return attrs;
    },

    nSrc() {
      return this.sizes ? this.nSizes.src : this.$img(this.src, this.nModifiers, this.nOptions);
    },

    nSizes() {
      return this.$img.getSizes(this.src, { ...this.nOptions,
        sizes: this.sizes,
        modifiers: { ...this.nModifiers,
          width: parseSize(this.width),
          height: parseSize(this.height)
        }
      });
    }

  },

  created() {
    if (true) {
      if (this.sizes) {
        this.nSizes;
      }
    }
  }

}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_imgvue_type_script_lang_js_ = (nuxt_imgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue





/* normalize component */

var nuxt_img_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_imgvue_type_script_lang_js_,
  nuxt_imgvue_type_template_id_356cdf12_render,
  nuxt_imgvue_type_template_id_356cdf12_staticRenderFns,
  false,
  null,
  null,
  "ed3763a6"
  
)

/* harmony default export */ var nuxt_img = (nuxt_img_component.exports);
// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=template&id=88bec26c&
var nuxt_picturevue_type_template_id_88bec26c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('picture',{key:_vm.nSources[0].src},[_vm._ssrNode(((_vm.nSources[1])?("<source"+(_vm._ssrAttr("type",_vm.nSources[1].type))+(_vm._ssrAttr("srcset",_vm.nSources[1].srcset))+(_vm._ssrAttr("sizes",_vm.nSources[1].sizes))+">"):"<!---->")+" <img"+(_vm._ssrAttr("src",_vm.nSources[0].src))+(_vm._ssrAttr("srcset",_vm.nSources[0].srcset))+(_vm._ssrAttr("sizes",_vm.nSources[0].sizes))+(_vm._ssrAttrs(Object.assign({}, _vm.nImgAttrs, _vm.imgAttrs)))+">")])}
var nuxt_picturevue_type_template_id_88bec26c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const nuxt_picturevue_type_script_lang_js_defineComponent = opts => opts;

/* harmony default export */ var nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_defineComponent({
  name: "NuxtPicture",
  mixins: [imageMixin],
  props: {
    legacyFormat: {
      type: String,
      default: null
    },
    imgAttrs: {
      type: Object,
      default: null
    }
  },

  head() {
    if (this.preload === true) {
      const srcKey = typeof this.nSources[1] !== "undefined" ? 1 : 0;
      const link = {
        rel: "preload",
        as: "image",
        imagesrcset: this.nSources[srcKey].srcset
      };

      if (typeof this.nSources[srcKey].sizes !== "undefined") {
        link.imagesizes = this.nSources[srcKey].sizes;
      }

      return {
        link: [link]
      };
    }
  },

  computed: {
    isTransparent() {
      return ["png", "webp", "gif"].includes(this.originalFormat);
    },

    originalFormat() {
      return getFileExtension(this.src);
    },

    nFormat() {
      if (this.format) {
        return this.format;
      }

      if (this.originalFormat === "svg") {
        return "svg";
      }

      return "webp";
    },

    nLegacyFormat() {
      if (this.legacyFormat) {
        return this.legacyFormat;
      }

      const formats = {
        webp: this.isTransparent ? "png" : "jpeg",
        svg: "png"
      };
      return formats[this.nFormat] || this.originalFormat;
    },

    nSources() {
      if (this.nFormat === "svg") {
        return [{
          srcset: this.src
        }];
      }

      const formats = this.nLegacyFormat !== this.nFormat ? [this.nLegacyFormat, this.nFormat] : [this.nFormat];
      const sources = formats.map(format => {
        const {
          srcset,
          sizes,
          src
        } = this.$img.getSizes(this.src, { ...this.nOptions,
          sizes: this.sizes || this.$img.options.screens,
          modifiers: { ...this.nModifiers,
            format
          }
        });
        return {
          src,
          type: `image/${format}`,
          sizes,
          srcset
        };
      });
      return sources;
    }

  },

  created() {
    if (true) {
      this.nSources;
    }
  }

}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue





/* normalize component */

var nuxt_picture_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_picturevue_type_script_lang_js_,
  nuxt_picturevue_type_template_id_88bec26c_render,
  nuxt_picturevue_type_template_id_88bec26c_staticRenderFns,
  false,
  null,
  null,
  "ba95f630"
  
)

/* harmony default export */ var nuxt_picture = (nuxt_picture_component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/ipx.js


const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: ",",
  formatter: (key, val) => Object(dist["encodeParam"])(key) + "_" + Object(dist["encodeParam"])(val)
});
const ipx_getImage = (src, {
  modifiers = {},
  baseURL = "/_ipx"
} = {}, {
  nuxtContext: {
    base: nuxtBase = "/"
  } = {}
}) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }

  const params = operationsGenerator(modifiers) || "_";
  return {
    url: Object(dist["joinURL"])(nuxtBase, baseURL, params, Object(dist["encodePath"])(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/static.js

const static_getImage = (src, options, ctx) => ({ ...ipx_getImage(src, options, ctx),
  isStatic: true
});
const static_supportsAlias = true;
// CONCATENATED MODULE: ./.nuxt/image.js





const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {
    "avatar": {
      "modifiers": {
        "format": "jpg",
        "width": 50,
        "height": 50
      }
    }
  },
  "provider": "static",
  "domains": [],
  "alias": {}
};
imageOptions.providers = {
  ['static']: {
    provider: static_namespaceObject,
    defaults: {}
  }
};
external_vue_default.a.component(nuxt_img.name, nuxt_img);
external_vue_default.a.component(nuxt_picture.name, nuxt_picture);
external_vue_default.a.component('NImg', nuxt_img);
external_vue_default.a.component('NPicture', nuxt_picture);
/* harmony default export */ var _nuxt_image = (function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext);

  if (true) {
    nuxtContext.beforeNuxtRender(({
      nuxtState
    }) => {
      const ssrData = nuxtState.data[0] || {};
      ssrData._img = nuxtState._img || {};
    });
  }

  inject('img', $img);
});
// EXTERNAL MODULE: ./.nuxt/dist.plugin.7e0bfad6.js
var dist_plugin_7e0bfad6 = __webpack_require__(16);
var dist_plugin_7e0bfad6_default = /*#__PURE__*/__webpack_require__.n(dist_plugin_7e0bfad6);

// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ./content/plugin.client.js (mode: 'client')

 // Source: ./content/plugin.server.js (mode: 'server')

 // Source: ./image.js (mode: 'all')

 // Source: ./dist.plugin.7e0bfad6.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Jun Ueno",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore syncVuex validateRouteParams, known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore syncVuex validateRouteParams, known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof plugin_routing === 'function') {
    await plugin_routing(app.context, inject);
  }

  if (typeof plugin_main === 'function') {
    await plugin_main(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (false) {}

  if ( true && typeof plugin_server === 'function') {
    await plugin_server(app.context, inject);
  }

  if (typeof _nuxt_image === 'function') {
    await _nuxt_image(app.context, inject);
  }

  if (typeof dist_plugin_7e0bfad6_default.a === 'function') {
    await dist_plugin_7e0bfad6_default()(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(dist["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(dist["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(dist["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(dist["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = ["nuxti18n"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=44dd07b1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<nav class=\"wrapper py-6\">","</nav>",[_vm._ssrNode("<div class=\"px-10 flex justify-between items-center\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('h1',{staticClass:"text-2xl font-semibold text-gray-700"},[_vm._v("Jun Ueno")])])],1),_vm._ssrNode(" "),_vm._l((_vm.availableLocales),function(locale){return _vm._ssrNode("<div class=\"navbar hidden md:block\">","</div>",[_c('nuxt-link',{staticClass:"nav-link hover:text-primary",attrs:{"to":"portfolio"}},[_vm._v(_vm._s(_vm.$t('portfolio')))]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"nav-link hover:text-primary",attrs:{"to":"blog"}},[_vm._v(_vm._s(_vm.$t('blog')))]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"nav-link hover:text-primary",attrs:{"to":"about"}},[_vm._v(_vm._s(_vm.$t('about.title')))]),_vm._ssrNode(" <button class=\"nav-link hover:text-primary\">"+_vm._ssrEscape(_vm._s(_vm.$t(locale.name)))+"</button>")],2)}),_vm._ssrNode(" <div class=\"ml-3 flex md:hidden\"><button class=\"flex-center rounded-md\"><svg stroke=\"currentColor\" fill=\"none\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\""+(_vm._ssrClass(null,[_vm.isOpen ? 'hidden' : 'block', 'h-6 w-6']))+"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"></path></svg> <svg stroke=\"currentColor\" fill=\"none\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\""+(_vm._ssrClass(null,[_vm.isOpen ? 'block' : 'hidden', 'h-6 w-6']))+"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"></path></svg></button></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,[_vm.isOpen ? '' : 'hidden', 'md:hidden']))+">","</div>",_vm._l((_vm.availableLocales),function(locale){return _vm._ssrNode("<div class=\"px-2 pt-2 pb-3 sm:px-3 bg-primary\">","</div>",[_c('nuxt-link',{staticClass:"mobile-link focus:outline-none hover:text-gray-500",attrs:{"to":"portfolio"}},[_vm._v(_vm._s(_vm.$t('portfolio'))+"\n      ")]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-500",attrs:{"to":"blog"}},[_vm._v(_vm._s(_vm.$t('blog'))+"\n      ")]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-500",attrs:{"to":"about"}},[_vm._v(_vm._s(_vm.$t('about'))+"\n      ")]),_vm._ssrNode(" <a class=\"mt-1 mobile-link focus:outline-none hover:text-gray-500\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t(locale.name))+"\n      ")+"</a>")],2)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=44dd07b1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }

  },
  components: {},

  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },

    async changeLocale(locale) {
      await this.$i18n.setLocale(locale);
    }

  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2b9ba31c"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=6f81c5b6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper mx-auto px-10"},[_vm._ssrNode("<hr class=\"h-px mt-6 border-gray-300 max-w-screen-xl mx-auto\"> "),_vm._ssrNode("<div class=\"md:py-10\">","</div>",[_vm._ssrNode("<div class=\"flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('h1',{staticClass:"text-xl font-semibold text-gray-700"},[_vm._v("Jun Ueno")])])],1),_vm._ssrNode(" <div class=\"my-5 md:my-0 order-last md:order-none text-center\"><p class=\"text-lg font-semibold text-gray-600\">"+_vm._ssrEscape("© "+_vm._s(_vm.thisYear)+" Jun Ueno - All rights reserved.")+"</p></div> "),_vm._ssrNode("<div>","</div>",[_c('Social')],1)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=6f81c5b6&

// EXTERNAL MODULE: ./components/Social.vue + 4 modules
var Social = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  components: {
    Social: Social["default"]
  },

  data() {
    return {
      thisYear: '2022'
    };
  }

});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0a693f2a"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Social: __webpack_require__(8).default})


/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports) {

module.exports = require("devalue");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("image-meta");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map