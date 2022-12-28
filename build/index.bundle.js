/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/arrow.png */ "./src/assets/arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*style.css*/\r\nbody {\r\n  background-color: darkcyan;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.game {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n.player {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: lightblue;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  transform-origin: center;\r\n}\r\n\r\n.asteroid {\r\n  position: absolute;\r\n  width: 80px;\r\n  height: 80px;\r\n  background-color: lightgray;\r\n  border-radius: 50%;\r\n  transform-origin: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;EACE,0BAA0B;EAC1B,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,yDAA2C;EAC3C,4BAA4B;EAC5B,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;EAClB,wBAAwB;AAC1B","sourcesContent":["/*style.css*/\r\nbody {\r\n  background-color: darkcyan;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.game {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n.player {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: lightblue;\r\n  background-image: url(\"./assets/arrow.png\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  transform-origin: center;\r\n}\r\n\r\n.asteroid {\r\n  position: absolute;\r\n  width: 80px;\r\n  height: 80px;\r\n  background-color: lightgray;\r\n  border-radius: 50%;\r\n  transform-origin: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/arrow.png":
/*!******************************!*\
  !*** ./src/assets/arrow.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b685dd8f14084ce487b.png";

/***/ }),

/***/ "./node_modules/@peasy-lib/peasy-input/dist/esm/index.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@peasy-lib/peasy-input/dist/esm/index.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard),
/* harmony export */   "KeyboardMapping": () => (/* binding */ KeyboardMapping)
/* harmony export */ });
class KeyboardMapping {
  constructor(mappings, callback, effectMode, keymapMode) {
    this.mappings = mappings;
    this.callback = callback;
    this.effectMode = effectMode;
    this.keymapMode = keymapMode;
    if (typeof this.mappings === "string") {
      this.mappings = [this.mappings];
    }
    if (Array.isArray(this.mappings)) {
      this.mappings = [...this.mappings].reduce((mappings2, value) => {
        mappings2[value] = value;
        return mappings2;
      }, {});
    }
    for (const key in this.mappings) {
      const action = this.mappings[key];
      if (typeof action === "string") {
        this.mappings[key] = {
          action,
          repeat: true
        };
      }
      this.mappings[key].mapping = this;
    }
  }
  maps(keys) {
    return this.mappings[keys];
  }
  unmap() {
    Keyboard.unmap(this);
  }
}

const _Keyboard = class {
  static initialize(element) {
    this.element = element;
    this.element.addEventListener("keydown", this.keyChange);
    this.element.addEventListener("keyup", this.keyChange);
    return this;
  }
  static terminate() {
    this.element?.removeEventListener("keydown", this.keyChange);
    this.element?.removeEventListener("keyup", this.keyChange);
    this.element = null;
  }
  static map(mappings, callback, effectMode = "interval", keymapMode = "add") {
    const mapping = new KeyboardMapping(mappings, callback, effectMode, keymapMode);
    this.mappings.unshift(mapping);
    return mapping;
  }
  static unmap(mapping) {
    this.mappings = this.mappings.filter((m) => m !== mapping);
    for (const key of this.pressed.keys()) {
      if (this.pressed.get(key)?.keymap.mapping === mapping) {
        this.pressed.delete(key);
      }
    }
    this.lastPressed = [...this.pressed.keys()];
  }
  static resolve(keys, eventType) {
    const mapped = this.mapped(keys);
    if (mapped == null) {
      return;
    }
    if (mapped.mapping?.effectMode === "instant") {
      mapped.mapping.callback?.(mapped.action, eventType === "keydown", 0);
      return;
    }
    if (eventType === "keydown") {
      if (!this.pressed.has(keys)) {
        this.pressed.set(keys, { keymap: mapped, repeat: 0, done: false, doneIs: false });
      }
    } else if (eventType === "keyup") {
      this.pressed.delete(keys);
    }
  }
  static update(deltaTime) {
    this.pressed.forEach((mapped, key) => {
      if (mapped.repeat === 0 || mapped.keymap.repeat && mapped.repeat <= 0) {
        mapped.keymap.mapping?.callback?.(mapped.keymap.action, true, deltaTime);
        mapped.repeat += Input.rps;
      } else {
        if (!mapped.keymap.repeat) {
          if (!mapped.done) {
            mapped.done = true;
          }
        } else {
          mapped.repeat -= deltaTime * 1e3;
        }
      }
    });
    this.lastPressed.forEach((keys) => {
      if (!this.pressed.has(keys)) {
        const mapped = this.mapped(keys);
        mapped?.mapping.callback?.(mapped.action, false, deltaTime);
      }
    });
    this.lastPressed = [...this.pressed.keys()];
  }
  static mapped(keys) {
    let mapped;
    for (const mapping of this.mappings) {
      mapped = mapping.maps(keys);
      if (mapped != null || mapping.keymapMode === "replace") {
        break;
      }
    }
    return mapped;
  }
  static is(action) {
    for (const pressed of this.pressed.values()) {
      if (pressed.keymap.action !== action) {
        continue;
      }
      if (pressed.repeat === 0 || pressed.keymap.repeat && pressed.repeat <= 0) {
        return true;
      } else {
        if (!pressed.keymap.repeat && !pressed.doneIs) {
          pressed.doneIs = true;
          return true;
        }
      }
      return false;
    }
    return false;
  }
};
let Keyboard = _Keyboard;
Keyboard.mappings = [];
Keyboard.pressed = /* @__PURE__ */ new Map();
Keyboard.lastPressed = [];
Keyboard.keyChange = (event) => {
  let keys = event.key;
  if (["Control", "Alt", "Shift"].includes(keys)) {
    if (event.type === "keydown") {
      for (const pressed of _Keyboard.pressed.keys()) {
        const pressedKeys = pressed.split("+");
        if (pressedKeys.includes(keys)) {
          continue;
        }
        let modifiedPressed = pressedKeys.pop();
        for (const modifier of ["Shift", "Alt", "Control"]) {
          if (keys === modifier || pressedKeys.includes(modifier)) {
            modifiedPressed = `${modifier}+${modifiedPressed}`;
          }
        }
        _Keyboard.resolve(pressed, "keyup");
        _Keyboard.resolve(modifiedPressed, "keydown");
      }
    } else if (event.type === "keyup") {
      for (const pressed of _Keyboard.pressed.keys()) {
        const pressedKeys = pressed.split("+");
        if (!pressedKeys.includes(keys)) {
          continue;
        }
        const modifiedPressed = pressedKeys.filter((key) => key !== keys).join("+");
        _Keyboard.resolve(pressed, "keyup");
        _Keyboard.resolve(modifiedPressed, "keydown");
      }
    }
  } else {
    if (event.shiftKey) {
      keys = `Shift+${keys}`;
    }
    if (event.altKey) {
      keys = `Alt+${keys}`;
    }
    if (event.ctrlKey) {
      keys = `Control+${keys}`;
    }
    _Keyboard.resolve(keys, event.type);
  }
};

class MouseMapping {
  constructor() {
  }
  unmap() {
    Mouse.unmap(this);
  }
}

class Mouse {
  static initialize() {
    return this;
  }
  static terminate() {
  }
  static map() {
    const mapping = new MouseMapping();
    this.mappings.unshift(mapping);
    return mapping;
  }
  static unmap(mapping) {
    this.mappings = this.mappings.filter((m) => m !== mapping);
  }
  static update(deltaTime) {
  }
  static is(action) {
    return false;
  }
}
Mouse.mappings = [];

const _Input = class {
  static initialize(rps, rAF = true, element = document.body) {
    _Input.initialized = true;
    this.rps = rps;
    Keyboard.initialize(element);
    if (rAF === true) {
      let last;
      const start = (now) => {
        last = now;
        requestAnimationFrame(tick);
      };
      const tick = (now) => {
        const deltaTime = (now - last) / 1e3;
        last = now;
        _Input.update(deltaTime);
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(start);
      return;
    }
    return this;
  }
  static terminate() {
    Keyboard.terminate();
  }
  static map(mappings, callback, effectMode = "interval", keymapMode = "add") {
    if (!_Input.initialized) {
      _Input.initialize(60);
    }
    return Keyboard.map(mappings, callback, effectMode, keymapMode);
  }
  static unmap(mapping) {
    if (mapping instanceof KeyboardMapping) {
      Keyboard.unmap(mapping);
    } else {
      Mouse.unmap(mapping);
    }
  }
  static update(deltaTime) {
    Keyboard.update(deltaTime);
  }
  static is(action) {
    if (!_Input.initialized) {
      _Input.initialize(60);
    }
    return Keyboard.is(action) || Mouse.is(action);
  }
};
let Input = _Input;
Input.initialized = false;


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMva2V5Ym9hcmQtbWFwcGluZy50cyIsIi4uLy4uL3NyYy9rZXlib2FyZC50cyIsIi4uLy4uL3NyYy9tb3VzZS1tYXBwaW5nLnRzIiwiLi4vLi4vc3JjL21vdXNlLnRzIiwiLi4vLi4vc3JjL2lucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElLZXlNYXBwaW5nLCBLZXlib2FyZCwgS2V5Q2FsbGJhY2ssIEtleUVmZmVjdE1vZGUsIEtleW1hcE1vZGUgfSBmcm9tIFwiLi9rZXlib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRNYXBwaW5nIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBtYXBwaW5nczogc3RyaW5nIHwgc3RyaW5nW10gfCBSZWNvcmQ8c3RyaW5nLCBJS2V5TWFwcGluZz4sXG4gICAgcHVibGljIGNhbGxiYWNrOiBLZXlDYWxsYmFjayB8IHVuZGVmaW5lZCxcbiAgICBwdWJsaWMgZWZmZWN0TW9kZTogS2V5RWZmZWN0TW9kZSxcbiAgICBwdWJsaWMga2V5bWFwTW9kZTogS2V5bWFwTW9kZSxcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcHBpbmdzID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5tYXBwaW5ncyA9IFt0aGlzLm1hcHBpbmdzXTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5tYXBwaW5ncykpIHtcbiAgICAgIHRoaXMubWFwcGluZ3MgPSBbLi4udGhpcy5tYXBwaW5nc10ucmVkdWNlKChtYXBwaW5ncywgdmFsdWUpID0+IHtcbiAgICAgICAgKG1hcHBpbmdzIGFzIGFueSlbdmFsdWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBtYXBwaW5ncztcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5tYXBwaW5ncykge1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5tYXBwaW5nc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMubWFwcGluZ3Nba2V5XSA9IHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICByZXBlYXQ6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0aGlzLm1hcHBpbmdzW2tleV0ubWFwcGluZyA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1hcHMoa2V5czogc3RyaW5nKTogSUtleU1hcHBpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiAodGhpcy5tYXBwaW5ncyBhcyBhbnkpW2tleXNdO1xuICB9XG5cbiAgcHVibGljIHVubWFwKCk6IHZvaWQge1xuICAgIEtleWJvYXJkLnVubWFwKHRoaXMpO1xuICB9XG5cbiAgLy8gcHVibGljIGFkZE1hcHBpbmcoa2V5czogc3RyaW5nIHwgc3RyaW5nW10sIGNhbGxiYWNrOiBLZXlDYWxsYmFjaykge1xuICAvLyAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAvLyAgICAga2V5cyA9IFtrZXlzXTtcbiAgLy8gICB9XG4gIC8vICAga2V5cy5mb3JFYWNoKGtleSA9PiB0aGlzLm1hcHBpbmdzLnNldChrZXksIGNhbGxiYWNrKSk7XG4gIC8vIH1cbiAgLy8gcHVibGljIHJlbW92ZU1hcHBpbmcoa2V5OiBzdHJpbmcpIHtcbiAgLy8gICB0aGlzLm1hcHBpbmdzLmRlbGV0ZShrZXkpO1xuICAvLyB9XG59XG4iLCJpbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL2lucHV0XCI7XG5pbXBvcnQgeyBLZXlib2FyZE1hcHBpbmcgfSBmcm9tIFwiLi9rZXlib2FyZC1tYXBwaW5nXCI7XG5cbmV4cG9ydCB0eXBlIEtleUNhbGxiYWNrID0gKGtleTogc3RyaW5nLCBwcmVzc2VkOiBib29sZWFuLCBkZWx0YVRpbWU6IG51bWJlcikgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIEtleW1hcE1vZGUgPSAnYWRkJyB8ICdyZXBsYWNlJztcbmV4cG9ydCB0eXBlIEtleUVmZmVjdE1vZGUgPSAnaW5zdGFudCcgfCAnaW50ZXJ2YWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElLZXlNYXBwaW5nIHtcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIHJlcGVhdDogYm9vbGVhbjtcbiAgbWFwcGluZz86IEtleWJvYXJkTWFwcGluZztcbn1cbi8vIFRPRE86IEFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBrZXlzIGZvciBvbmUgYWN0aW9uXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xuICBwcml2YXRlIHN0YXRpYyBlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIHByaXZhdGUgc3RhdGljIG1hcHBpbmdzOiBLZXlib2FyZE1hcHBpbmdbXSA9IFtdO1xuICAvLyBwcml2YXRlIHN0YXRpYyBtYXBwaW5nczogTWFwPHN0cmluZywgS2V5Q2FsbGJhY2s+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBwcmVzc2VkOiBNYXA8c3RyaW5nLCB7IGtleW1hcDogSUtleU1hcHBpbmcsIHJlcGVhdDogbnVtYmVyLCBkb25lOiBib29sZWFuLCBkb25lSXM6IGJvb2xlYW4gfT4gPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgc3RhdGljIGxhc3RQcmVzc2VkOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleUNoYW5nZSk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlDaGFuZ2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0ZXJtaW5hdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlDaGFuZ2UpO1xuICAgIHRoaXMuZWxlbWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleUNoYW5nZSk7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbWFwKG1hcHBpbmdzOiBzdHJpbmcgfCBzdHJpbmdbXSB8IFJlY29yZDxzdHJpbmcsIElLZXlNYXBwaW5nPiwgY2FsbGJhY2s/OiBLZXlDYWxsYmFjaywgZWZmZWN0TW9kZTogS2V5RWZmZWN0TW9kZSA9ICdpbnRlcnZhbCcsIGtleW1hcE1vZGU6IEtleW1hcE1vZGUgPSAnYWRkJyk6IEtleWJvYXJkTWFwcGluZyB7XG4gICAgY29uc3QgbWFwcGluZyA9IG5ldyBLZXlib2FyZE1hcHBpbmcobWFwcGluZ3MsIGNhbGxiYWNrLCBlZmZlY3RNb2RlLCBrZXltYXBNb2RlKTtcbiAgICB0aGlzLm1hcHBpbmdzLnVuc2hpZnQobWFwcGluZyk7XG4gICAgcmV0dXJuIG1hcHBpbmc7XG4gIH1cbiAgcHVibGljIHN0YXRpYyB1bm1hcChtYXBwaW5nOiBLZXlib2FyZE1hcHBpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm1hcHBpbmdzID0gdGhpcy5tYXBwaW5ncy5maWx0ZXIobSA9PiBtICE9PSBtYXBwaW5nKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLnByZXNzZWQua2V5cygpKSB7XG4gICAgICBpZiAodGhpcy5wcmVzc2VkLmdldChrZXkpPy5rZXltYXAubWFwcGluZyA9PT0gbWFwcGluZykge1xuICAgICAgICB0aGlzLnByZXNzZWQuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubGFzdFByZXNzZWQgPSBbLi4udGhpcy5wcmVzc2VkLmtleXMoKV07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGtleUNoYW5nZSA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGxldCBrZXlzID0gZXZlbnQua2V5O1xuICAgIGlmIChbJ0NvbnRyb2wnLCAnQWx0JywgJ1NoaWZ0J10uaW5jbHVkZXMoa2V5cykpIHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgZm9yIChjb25zdCBwcmVzc2VkIG9mIHRoaXMucHJlc3NlZC5rZXlzKCkpIHtcbiAgICAgICAgICBjb25zdCBwcmVzc2VkS2V5cyA9IHByZXNzZWQuc3BsaXQoJysnKTtcbiAgICAgICAgICBpZiAocHJlc3NlZEtleXMuaW5jbHVkZXMoa2V5cykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbW9kaWZpZWRQcmVzc2VkID0gcHJlc3NlZEtleXMucG9wKCk7XG4gICAgICAgICAgZm9yIChjb25zdCBtb2RpZmllciBvZiBbJ1NoaWZ0JywgJ0FsdCcsICdDb250cm9sJ10pIHtcbiAgICAgICAgICAgIGlmIChrZXlzID09PSBtb2RpZmllciB8fCBwcmVzc2VkS2V5cy5pbmNsdWRlcyhtb2RpZmllcikpIHtcbiAgICAgICAgICAgICAgbW9kaWZpZWRQcmVzc2VkID0gYCR7bW9kaWZpZXJ9KyR7bW9kaWZpZWRQcmVzc2VkfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgS2V5Ym9hcmQucmVzb2x2ZShwcmVzc2VkLCAna2V5dXAnKTtcbiAgICAgICAgICBLZXlib2FyZC5yZXNvbHZlKG1vZGlmaWVkUHJlc3NlZCBhcyBzdHJpbmcsICdrZXlkb3duJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJykge1xuICAgICAgICBmb3IgKGNvbnN0IHByZXNzZWQgb2YgdGhpcy5wcmVzc2VkLmtleXMoKSkge1xuICAgICAgICAgIGNvbnN0IHByZXNzZWRLZXlzID0gcHJlc3NlZC5zcGxpdCgnKycpO1xuICAgICAgICAgIGlmICghcHJlc3NlZEtleXMuaW5jbHVkZXMoa2V5cykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBtb2RpZmllZFByZXNzZWQgPSBwcmVzc2VkS2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPT0ga2V5cykuam9pbignKycpO1xuXG4gICAgICAgICAgS2V5Ym9hcmQucmVzb2x2ZShwcmVzc2VkLCAna2V5dXAnKTtcbiAgICAgICAgICBLZXlib2FyZC5yZXNvbHZlKG1vZGlmaWVkUHJlc3NlZCwgJ2tleWRvd24nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAga2V5cyA9IGBTaGlmdCske2tleXN9YDtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAga2V5cyA9IGBBbHQrJHtrZXlzfWA7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICBrZXlzID0gYENvbnRyb2wrJHtrZXlzfWA7XG4gICAgICB9XG4gICAgICBLZXlib2FyZC5yZXNvbHZlKGtleXMsIGV2ZW50LnR5cGUpO1xuICAgIH1cbiAgfTtcblxuICBwdWJsaWMgc3RhdGljIHJlc29sdmUoa2V5czogc3RyaW5nLCBldmVudFR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IG1hcHBlZCA9IHRoaXMubWFwcGVkKGtleXMpO1xuICAgIGlmIChtYXBwZWQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtYXBwZWQubWFwcGluZz8uZWZmZWN0TW9kZSA9PT0gJ2luc3RhbnQnKSB7XG4gICAgICBtYXBwZWQubWFwcGluZy5jYWxsYmFjaz8uKG1hcHBlZC5hY3Rpb24sIGV2ZW50VHlwZSA9PT0gJ2tleWRvd24nLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgIGlmICghdGhpcy5wcmVzc2VkLmhhcyhrZXlzKSkge1xuICAgICAgICB0aGlzLnByZXNzZWQuc2V0KGtleXMsIHsga2V5bWFwOiBtYXBwZWQsIHJlcGVhdDogMCwgZG9uZTogZmFsc2UsIGRvbmVJczogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdrZXl1cCcpIHtcbiAgICAgIHRoaXMucHJlc3NlZC5kZWxldGUoa2V5cyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLnByZXNzZWQuZm9yRWFjaCgobWFwcGVkLCBrZXkpID0+IHtcbiAgICAgIGlmIChtYXBwZWQucmVwZWF0ID09PSAwIHx8IChtYXBwZWQua2V5bWFwLnJlcGVhdCAmJiBtYXBwZWQucmVwZWF0IDw9IDApKSB7XG4gICAgICAgIG1hcHBlZC5rZXltYXAubWFwcGluZz8uY2FsbGJhY2s/LihtYXBwZWQua2V5bWFwLmFjdGlvbiwgdHJ1ZSwgZGVsdGFUaW1lKTtcbiAgICAgICAgbWFwcGVkLnJlcGVhdCArPSBJbnB1dC5ycHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnTk8gUkVQRUFUJywgbWFwcGVkLnJlcGVhdCk7XG4gICAgICAgIGlmICghbWFwcGVkLmtleW1hcC5yZXBlYXQpIHtcbiAgICAgICAgICBpZiAoIW1hcHBlZC5kb25lKSB7XG4gICAgICAgICAgICAvLyBtYXBwZWQua2V5bWFwLm1hcHBpbmcuY2FsbGJhY2sobWFwcGVkLmtleW1hcC5hY3Rpb24sIGZhbHNlLCBkZWx0YVRpbWUpO1xuICAgICAgICAgICAgbWFwcGVkLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXBwZWQucmVwZWF0IC09IGRlbHRhVGltZSAqIDEwMDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxhc3RQcmVzc2VkLmZvckVhY2goa2V5cyA9PiB7XG4gICAgICBpZiAoIXRoaXMucHJlc3NlZC5oYXMoa2V5cykpIHtcbiAgICAgICAgY29uc3QgbWFwcGVkID0gdGhpcy5tYXBwZWQoa2V5cyk7XG4gICAgICAgIG1hcHBlZD8ubWFwcGluZyEuY2FsbGJhY2s/LihtYXBwZWQuYWN0aW9uLCBmYWxzZSwgZGVsdGFUaW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxhc3RQcmVzc2VkID0gWy4uLnRoaXMucHJlc3NlZC5rZXlzKCldO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtYXBwZWQoa2V5czogc3RyaW5nKTogSUtleU1hcHBpbmcgfCB1bmRlZmluZWQge1xuICAgIGxldCBtYXBwZWQ7XG4gICAgZm9yIChjb25zdCBtYXBwaW5nIG9mIHRoaXMubWFwcGluZ3MpIHtcbiAgICAgIG1hcHBlZCA9IG1hcHBpbmcubWFwcyhrZXlzKTtcbiAgICAgIGlmIChtYXBwZWQgIT0gbnVsbCB8fCBtYXBwaW5nLmtleW1hcE1vZGUgPT09ICdyZXBsYWNlJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hcHBlZDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXMoYWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IHByZXNzZWQgb2YgdGhpcy5wcmVzc2VkLnZhbHVlcygpKSB7XG4gICAgICBpZiAocHJlc3NlZC5rZXltYXAuYWN0aW9uICE9PSBhY3Rpb24pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAocHJlc3NlZC5yZXBlYXQgPT09IDAgfHwgKHByZXNzZWQua2V5bWFwLnJlcGVhdCAmJiBwcmVzc2VkLnJlcGVhdCA8PSAwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghcHJlc3NlZC5rZXltYXAucmVwZWF0ICYmICFwcmVzc2VkLmRvbmVJcykge1xuICAgICAgICAgIHByZXNzZWQuZG9uZUlzID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vdXNlIH0gZnJvbSBcIi4vbW91c2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3VzZU1hcHBpbmcge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICApIHtcclxuICB9XHJcbiAgcHVibGljIHVubWFwKCk6IHZvaWQge1xyXG4gICAgTW91c2UudW5tYXAodGhpcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1vdXNlTWFwcGluZyB9IGZyb20gXCIuL21vdXNlLW1hcHBpbmdcIjtcclxuXHJcbmV4cG9ydCB0eXBlIE1vdXNlQ2FsbGJhY2sgPSAoa2V5OiBzdHJpbmcsIHByZXNzZWQ6IGJvb2xlYW4sIGRlbHRhVGltZTogbnVtYmVyKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBNb3VzZUVmZmVjdE1vZGUgPSAnaW5zdGFudCcgfCAnaW50ZXJ2YWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlIHtcclxuICBwcml2YXRlIHN0YXRpYyBtYXBwaW5nczogTW91c2VNYXBwaW5nW10gPSBbXTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRlcm1pbmF0ZSgpIHsgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG1hcCgpOiBNb3VzZU1hcHBpbmcge1xyXG4gICAgY29uc3QgbWFwcGluZyA9IG5ldyBNb3VzZU1hcHBpbmcoKTtcclxuICAgIHRoaXMubWFwcGluZ3MudW5zaGlmdChtYXBwaW5nKTtcclxuICAgIHJldHVybiBtYXBwaW5nO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHVubWFwKG1hcHBpbmc6IE1vdXNlTWFwcGluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXBwaW5ncyA9IHRoaXMubWFwcGluZ3MuZmlsdGVyKG0gPT4gbSAhPT0gbWFwcGluZyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikgeyB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXMoYWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUtleU1hcHBpbmcsIEtleWJvYXJkLCBLZXlDYWxsYmFjaywgS2V5RWZmZWN0TW9kZSwgS2V5bWFwTW9kZSB9IGZyb20gXCIuL2tleWJvYXJkXCI7XG5pbXBvcnQgeyBLZXlib2FyZE1hcHBpbmcgfSBmcm9tIFwiLi9rZXlib2FyZC1tYXBwaW5nXCI7XG5pbXBvcnQgeyBNb3VzZSB9IGZyb20gXCIuL21vdXNlXCI7XG5pbXBvcnQgeyBNb3VzZU1hcHBpbmcgfSBmcm9tIFwiLi9tb3VzZS1tYXBwaW5nXCI7XG5cbmV4cG9ydCB0eXBlIElucHV0Q2FsbGJhY2sgPSBLZXlDYWxsYmFjaztcbmV4cG9ydCB0eXBlIElucHV0RWZmZWN0TW9kZSA9IEtleUVmZmVjdE1vZGU7XG5cbmV4cG9ydCBjbGFzcyBJbnB1dCB7XG4gIHByaXZhdGUgc3RhdGljIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIHB1YmxpYyBzdGF0aWMgcnBzOiBudW1iZXI7XG5cbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKHJwczogbnVtYmVyLCByQUYgPSB0cnVlLCBlbGVtZW50ID0gZG9jdW1lbnQuYm9keSkge1xuICAgIElucHV0LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLnJwcyA9IHJwcztcbiAgICBLZXlib2FyZC5pbml0aWFsaXplKGVsZW1lbnQpO1xuICAgIE1vdXNlLmluaXRpYWxpemUoKTtcblxuICAgIGlmIChyQUYgPT09IHRydWUpIHtcbiAgICAgIGxldCBsYXN0OiBudW1iZXI7XG4gICAgICBjb25zdCBzdGFydCA9IChub3c6IG51bWJlcikgPT4ge1xuICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgICB9O1xuICAgICAgY29uc3QgdGljayA9IChub3c6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSAobm93IC0gbGFzdCkgLyAxMDAwO1xuICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICBJbnB1dC51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgfTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGFydCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0ZXJtaW5hdGUoKSB7XG4gICAgS2V5Ym9hcmQudGVybWluYXRlKCk7XG4gICAgTW91c2UudGVybWluYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG1hcChtYXBwaW5nczogYW55LCBjYWxsYmFjaz86IElucHV0Q2FsbGJhY2ssIGVmZmVjdE1vZGU6IElucHV0RWZmZWN0TW9kZSA9ICdpbnRlcnZhbCcsIGtleW1hcE1vZGU6IEtleW1hcE1vZGUgPSAnYWRkJyk6IEtleWJvYXJkTWFwcGluZyB7XG4gICAgaWYgKCFJbnB1dC5pbml0aWFsaXplZCkge1xuICAgICAgSW5wdXQuaW5pdGlhbGl6ZSg2MCk7XG4gICAgfVxuICAgIHJldHVybiBLZXlib2FyZC5tYXAobWFwcGluZ3MsIGNhbGxiYWNrLCBlZmZlY3RNb2RlLCBrZXltYXBNb2RlKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIHVubWFwKG1hcHBpbmc6IEtleWJvYXJkTWFwcGluZyB8IE1vdXNlTWFwcGluZyk6IHZvaWQge1xuICAgIGlmIChtYXBwaW5nIGluc3RhbmNlb2YgS2V5Ym9hcmRNYXBwaW5nKSB7XG4gICAgICBLZXlib2FyZC51bm1hcChtYXBwaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTW91c2UudW5tYXAobWFwcGluZyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICBLZXlib2FyZC51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICBNb3VzZS51cGRhdGUoZGVsdGFUaW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXMoYWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIUlucHV0LmluaXRpYWxpemVkKSB7XG4gICAgICBJbnB1dC5pbml0aWFsaXplKDYwKTtcbiAgICB9XG4gICAgcmV0dXJuIEtleWJvYXJkLmlzKGFjdGlvbikgfHwgTW91c2UuaXMoYWN0aW9uKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1hcHBpbmdzIl0sIm1hcHBpbmdzIjoiQUFFTyxNQUFNLGVBQWdCLENBQUE7QUFBQSxFQUNwQixXQUNFLENBQUEsUUFBQSxFQUNBLFFBQ0EsRUFBQSxVQUFBLEVBQ0EsVUFDUCxFQUFBO0FBSk8sSUFBQSxJQUFBLENBQUEsUUFBQSxHQUFBLFFBQUEsQ0FBQTtBQUNBLElBQUEsSUFBQSxDQUFBLFFBQUEsR0FBQSxRQUFBLENBQUE7QUFDQSxJQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQSxDQUFBO0FBQ0EsSUFBQSxJQUFBLENBQUEsVUFBQSxHQUFBLFVBQUEsQ0FBQTtBQUVQLElBQUksSUFBQSxPQUFPLElBQUssQ0FBQSxRQUFBLEtBQWEsUUFBVSxFQUFBO0FBQ3JDLE1BQUssSUFBQSxDQUFBLFFBQUEsR0FBVyxDQUFDLElBQUEsQ0FBSyxRQUFRLENBQUEsQ0FBQTtBQUFBLEtBQ2hDO0FBQ0EsSUFBQSxJQUFJLEtBQU0sQ0FBQSxPQUFBLENBQVEsSUFBSyxDQUFBLFFBQVEsQ0FBRyxFQUFBO0FBQ2hDLE1BQUssSUFBQSxDQUFBLFFBQUEsR0FBVyxDQUFDLEdBQUcsSUFBQSxDQUFLLFFBQVEsQ0FBRSxDQUFBLE1BQUEsQ0FBTyxDQUFDQSxTQUFBQSxFQUFVLEtBQVUsS0FBQTtBQUM3RCxRQUFD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


/***/ }),

/***/ "./node_modules/@peasy-lib/peasy-physics/dist/esm/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@peasy-lib/peasy-physics/dist/esm/index.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "Entity": () => (/* binding */ Entity),
/* harmony export */   "Force": () => (/* binding */ Force),
/* harmony export */   "Intersection": () => (/* binding */ Intersection),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Physics": () => (/* binding */ Physics),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "Polygon": () => (/* binding */ Polygon),
/* harmony export */   "Ray": () => (/* binding */ Ray),
/* harmony export */   "Rect": () => (/* binding */ Rect),
/* harmony export */   "RoundedRect": () => (/* binding */ RoundedRect),
/* harmony export */   "Stadium": () => (/* binding */ Stadium),
/* harmony export */   "Vector": () => (/* binding */ Vector)
/* harmony export */ });
class Vector3 {
    constructor(t = 0, s = 0, i = 0) {
        this.x = t;
        this.y = s;
        this.z = i;
    }
    get zero() {
        return 0 === Math.abs(this.x) && 0 === Math.abs(this.y) && 0 === Math.abs(this.z);
    }
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    get half() {
        return this.multiply(.5);
    }
    get negHalf() {
        return this.multiply(-.5);
    }
    static from(t = 0, s = 0, i = 0) {
        if (t instanceof Vector3) {
            s = t.y;
            i = t.z;
            t = t.x;
        } else if (Array.isArray(t)) {
            s = t[1];
            i = t[2];
            t = t[0];
        } else if ("string" === typeof t && t.includes(",")) [t, s, i] = t.split(",").map((t => +t)); else if ("number" !== typeof t && "string" !== typeof t && "x" in t && "y" in t && "z" in t) {
            s = t.y;
            i = t.z;
            t = t.x;
        }
        return new Vector3(t, s, i);
    }
    equals(t) {
        if (this.x !== t.x || this.y !== t.y || this.z !== t.z) return false;
        return true;
    }
    add(t, s = false) {
        const i = s ? this : this.clone();
        const {x: e, y: n, z: h} = Array.isArray(t) ? {
            x: t[0],
            y: t[1],
            z: t[2]
        } : t;
        i.x += e;
        i.y += n;
        i.z += h;
        return i;
    }
    subtract(t, s = false) {
        const i = s ? this : this.clone();
        const {x: e, y: n, z: h} = Array.isArray(t) ? {
            x: t[0],
            y: t[1],
            z: t[2]
        } : t;
        i.x -= e;
        i.y -= n;
        i.z -= h;
        return i;
    }
    multiply(t, s = false) {
        const i = s ? this : this.clone();
        const e = t instanceof Vector3 ? t : new Vector3(t, t, t);
        i.x *= e.x;
        i.y *= e.y;
        i.z *= e.z;
        return i;
    }
    divide(t, s = false) {
        const i = s ? this : this.clone();
        const e = t instanceof Vector3 ? t : new Vector(t, t, t);
        i.x /= e.x;
        i.y /= e.y;
        i.z /= e.z;
        return i;
    }
    modulus(t, s = false) {
        const i = s ? this : this.clone();
        const e = t instanceof Vector3 ? t : new Vector3(t, t, t);
        i.x %= e.x;
        i.y %= e.y;
        i.z %= e.z;
        return i;
    }
    normalize(t = false) {
        const s = t ? this : this.clone();
        const i = this.magnitude;
        if (i > 0) s.divide(i, true);
        return s;
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z;
    }
    sign(t = false) {
        const s = t ? this : this.clone();
        s.x = Math.sign(s.x);
        s.y = Math.sign(s.y);
        s.z = Math.sign(s.z);
        return s;
    }
    clamp(t, s, i = false) {
        const e = i ? this : this.clone();
        e.x = Math.max(t.x, Math.min(e.x, s.x));
        e.y = Math.max(t.y, Math.min(e.y, s.y));
        e.z = Math.max(t.z, Math.min(e.z, s.z));
        return e;
    }
    floor(t = false) {
        const s = t ? this : this.clone();
        s.x = Math.floor(s.x);
        s.y = Math.floor(s.y);
        s.z = Math.floor(s.z);
        return s;
    }
    rotate(t, s = false) {
        const i = s ? this : this.clone();
        const e = t * (Math.PI / 180);
        const n = Math.sin(e);
        const h = Math.cos(e);
        const {x: r, y: o} = i;
        i.x = r * h - o * n;
        i.y = r * n + o * h;
        return i;
    }
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    toArray() {
        return [ this.x, this.y, this.z ];
    }
    toString() {
        return `${this.x}, ${this.y},${this.z}`;
    }
    toVector2() {
        return new Vector(this.x, this.y, this.z);
    }
}

class Vector {
    constructor(t = 0, s = 0, i = 0) {
        this.x = t;
        this.y = s;
        this.z = i;
    }
    get zero() {
        return 0 === Math.abs(this.x) && 0 === Math.abs(this.y);
    }
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    get half() {
        return this.multiply(.5);
    }
    get negHalf() {
        return this.multiply(-.5);
    }
    static from(t = 0, s = 0, i = 0) {
        if (t instanceof Vector) {
            s = t.y;
            i = t.z;
            t = t.x;
        } else if (Array.isArray(t)) {
            s = t[1];
            i = t[2] ?? 0;
            t = t[0];
        } else if ("string" === typeof t && t.includes(",")) [t, s, i] = t.split(",").map((t => +t)); else if ("number" !== typeof t && "string" !== typeof t && "x" in t && "y" in t) {
            s = t.y;
            i = t.z;
            t = t.x;
        }
        return new Vector(t, s, i);
    }
    equals(t) {
        if (this.x !== t.x || this.y !== t.y || this.z !== t.z) return false;
        return true;
    }
    add(t, s = false) {
        const i = s ? this : this.clone();
        const {x: e, y: n, z: h} = Array.isArray(t) ? {
            x: t[0],
            y: t[1],
            z: t[2]
        } : t;
        i.x += e;
        i.y += n;
        return i;
    }
    subtract(t, s = false) {
        const i = s ? this : this.clone();
        const {x: e, y: n, z: h} = Array.isArray(t) ? {
            x: t[0],
            y: t[1],
            z: t[2]
        } : t;
        i.x -= e;
        i.y -= n;
        return i;
    }
    multiply(t, s = false) {
        const i = s ? this : this.clone();
        const e = t instanceof Vector ? t : new Vector(t, t, t);
        i.x *= e.x;
        i.y *= e.y;
        return i;
    }
    divide(t, s = false) {
        const i = s ? this : this.clone();
        const e = t instanceof Vector ? t : new Vector(t, t, t);
        i.x /= e.x;
        i.y /= e.y;
        return i;
    }
    modulus(t, s = false) {
        const i = s ? this : this.clone();
        const e = t instanceof Vector ? t : new Vector(t, t, t);
        i.x %= e.x;
        i.y %= e.y;
        return i;
    }
    normalize(t = false) {
        const s = t ? this : this.clone();
        const i = this.magnitude;
        if (i > 0) s.divide(i, true);
        return s;
    }
    dot(t) {
        return this.x * t.x + this.y * t.y;
    }
    sign(t = false) {
        const s = t ? this : this.clone();
        s.x = Math.sign(s.x);
        s.y = Math.sign(s.y);
        return s;
    }
    clamp(t, s, i = false) {
        const e = i ? this : this.clone();
        e.x = Math.max(t.x, Math.min(e.x, s.x));
        e.y = Math.max(t.y, Math.min(e.y, s.y));
        return e;
    }
    floor(t = false) {
        const s = t ? this : this.clone();
        s.x = Math.floor(s.x);
        s.y = Math.floor(s.y);
        return s;
    }
    rotate(t, s = false) {
        const i = s ? this : this.clone();
        const e = t * (Math.PI / 180);
        const n = Math.sin(e);
        const h = Math.cos(e);
        const {x: r, y: o} = i;
        i.x = r * h - o * n;
        i.y = r * n + o * h;
        return i;
    }
    clone() {
        return new Vector(this.x, this.y, this.z);
    }
    toArray() {
        return [ this.x, this.y ];
    }
    toString() {
        return `${this.x}, ${this.y}`;
    }
    toVector3() {
        return new Vector3(this.x, this.y, this.z);
    }
}

class RoundedRect {
    constructor(t, s, i, e = 0) {
        this.position = t;
        this.size = s;
        this.radius = i;
        this.orientation = e;
        this.worldSpace = false;
        this.t = [];
    }
    get half() {
        return this.size.half;
    }
    get left() {
        return this.position.x - this.half.x;
    }
    set left(t) {
        this.position.x = t + this.half.x;
    }
    get right() {
        return this.position.x + this.half.x;
    }
    set right(t) {
        this.position.x = t - this.half.x;
    }
    get top() {
        return this.position.y - this.half.y;
    }
    set top(t) {
        this.position.y = t + this.half.y;
    }
    get bottom() {
        return this.position.y + this.half.y;
    }
    set bottom(t) {
        this.position.y = t - this.half.y;
    }
    get width() {
        return this.size.x;
    }
    set width(t) {
        this.size.x = t;
    }
    get height() {
        return this.size.y;
    }
    set height(t) {
        this.size.y = t;
    }
    get vertices() {
        if (this.t.length > 0) return this.t;
        this.t = [ new Vector(-this.half.x, -this.half.y), new Vector(+this.half.x, -this.half.y), new Vector(+this.half.x, +this.half.y), new Vector(-this.half.x, +this.half.y) ];
        const t = this.position;
        const s = this.orientation;
        this.position = new Vector(0, 0);
        this.orientation = 0;
        this.transform(t, s);
        return this.t;
    }
    equals(t) {
        if (!this.position.equals(t.position) || !this.size.equals(t.size)) return false;
        return true;
    }
    rotate(t) {
        const s = this.vertices;
        if (0 !== Math.abs(t)) {
            s.forEach((s => s.rotate(t, true)));
            this.position.rotate(t, true);
            this.orientation += t;
        }
        this.t = s;
    }
    translate(t) {
        const s = this.vertices;
        s.forEach((s => s.add(t, true)));
        this.position.add(t, true);
        this.t = s;
    }
    transform(t, s) {
        this.rotate(s);
        this.translate(t);
    }
    resetVertices() {
        this.t = [];
    }
    toString() {
        return `[${this.position}] (${this.size})`;
    }
    clone() {
        return new RoundedRect(this.position.clone(), this.size.clone(), this.orientation);
    }
}

class Stadium {
    constructor(t, s, i, e = 0) {
        this.position = t;
        this.size = s;
        this.orientation = e;
        this.worldSpace = false;
        this.t = [];
        this.horizontal = "horizontal" === i;
    }
    get radius() {
        return (this.horizontal ? this.height : this.width) / 2;
    }
    get half() {
        return this.size.half;
    }
    get left() {
        return this.position.x - this.half.x;
    }
    set left(t) {
        this.position.x = t + this.half.x;
    }
    get right() {
        return this.position.x + this.half.x;
    }
    set right(t) {
        this.position.x = t - this.half.x;
    }
    get top() {
        return this.position.y - this.half.y;
    }
    set top(t) {
        this.position.y = t + this.half.y;
    }
    get bottom() {
        return this.position.y + this.half.y;
    }
    set bottom(t) {
        this.position.y = t - this.half.y;
    }
    get width() {
        return this.size.x;
    }
    set width(t) {
        this.size.x = t;
    }
    get height() {
        return this.size.y;
    }
    set height(t) {
        this.size.y = t;
    }
    get area() {
        const t = this.radius;
        const s = Math.PI * t * t;
        const i = this.horizontal ? (this.width - 2 * t) * this.height : (this.height - 2 * t) * this.width;
        return s + i;
    }
    get boundingRadius() {
        return Math.max(this.half.x, this.half.y);
    }
    get boundingBox() {
        return new Rect(this.position.clone(), this.size.clone());
    }
    get vertices() {
        if (this.t.length > 0) return this.t;
        this.t = [ new Vector(-this.half.x, -this.half.y), new Vector(+this.half.x, -this.half.y), new Vector(+this.half.x, +this.half.y), new Vector(-this.half.x, +this.half.y) ];
        const t = this.position;
        const s = this.orientation;
        this.position = new Vector(0, 0);
        this.orientation = 0;
        this.transform(t, s);
        return this.t;
    }
    equals(t) {
        if (!this.position.equals(t.position) || !this.size.equals(t.size)) return false;
        return true;
    }
    rotate(t) {
        const s = this.vertices;
        if (0 !== Math.abs(t)) {
            s.forEach((s => s.rotate(t, true)));
            this.position.rotate(t, true);
            this.orientation += t;
        }
        this.t = s;
    }
    translate(t) {
        const s = this.vertices;
        s.forEach((s => s.add(t, true)));
        this.position.add(t, true);
        this.t = s;
    }
    transform(t, s) {
        this.rotate(s);
        this.translate(t);
    }
    resetVertices() {
        this.t = [];
    }
    overlaps(t) {
        const s = Point.from(this.position);
        const i = this.getSweptShape(t);
        return s.within(i);
    }
    getSweptShape(t) {
        if (t instanceof Circle) {
            const s = this.clone();
            s.size.add(new Vector(2 * t.radius, 2 * t.radius), true);
            s.position = t.position.clone();
            return s;
        }
        if (t instanceof Stadium) {
            let s;
            if (this.horizontal === t.horizontal) {
                s = t.clone();
                s.size.add(this.size, true);
            } else s = new RoundedRect(t.position.clone(), t.size.add(this.size), this.radius + t.radius);
            return s;
        }
        if (t instanceof Rect) {
            const s = new RoundedRect(t.position.clone(), t.size.add(this.size), this.radius);
            return s;
        }
        return this;
    }
    toString() {
        return `[${this.position}] (${this.size})`;
    }
    clone() {
        return new Stadium(this.position.clone(), this.size.clone(), this.horizontal ? "horizontal" : "vertical", this.orientation);
    }
}

class Point extends Vector {
    static from(t = 0, s = 0, i = 0) {
        const e = Vector.from(t, s, i);
        return new Point(e.x, e.y, e.z);
    }
    within(t) {
        if (t instanceof Rect) return !(this.x < t.left || this.x > t.right || this.y < t.top || this.y > t.bottom);
        if (t instanceof Circle) {
            const s = t.position.subtract(this);
            const i = s.magnitude;
            return i * i < t.radius * t.radius;
        }
        if (t instanceof Stadium) if (t.horizontal) return this.within(new Rect(t.position, t.size.subtract(new Vector(2 * t.radius, 0)))) || this.within(new Circle(new Vector(t.left + t.radius, t.position.y), t.radius)) || this.within(new Circle(new Vector(t.right - t.radius, t.position.y), t.radius)); else return this.within(new Rect(t.position, t.size.subtract(new Vector(0, 2 * t.radius)))) || this.within(new Circle(new Vector(t.position.x, t.top + t.radius), t.radius)) || this.within(new Circle(new Vector(t.position.x, t.bottom - t.radius), t.radius));
        if (t instanceof RoundedRect) {
            const s = t.radius;
            const i = 2 * s;
            return this.within(new Circle(new Vector(t.left + s, t.top + s), s)) || this.within(new Circle(new Vector(t.right - s, t.top + s), s)) || this.within(new Circle(new Vector(t.right - s, t.bottom - s), s)) || this.within(new Circle(new Vector(t.left + s, t.bottom - s), s)) || this.within(new Rect(t.position, t.size.subtract(new Vector(i, 0)))) || this.within(new Rect(t.position, t.size.subtract(new Vector(0, i))));
        }
        return false;
    }
}

class Circle {
    constructor(t, s, i = 0) {
        this.position = t;
        this.radius = s;
        this.orientation = i;
    }
    get size() {
        return new Vector(2 * this.radius, 2 * this.radius);
    }
    get half() {
        return this.size.half;
    }
    get left() {
        return this.position.x - this.half.x;
    }
    get right() {
        return this.position.x + this.half.x;
    }
    get top() {
        return this.position.y - this.half.y;
    }
    get bottom() {
        return this.position.y + this.half.y;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
    get boundingRadius() {
        return this.radius;
    }
    get boundingBox() {
        return new Rect(this.position.clone(), new Vector(2 * this.radius, 2 * this.radius));
    }
    get vertices() {
        return [];
    }
    equals(t) {
        if (!this.position.equals(t.position) || this.radius !== t.radius) return false;
        return true;
    }
    rotate(t) {
        this.orientation += t;
    }
    translate(t) {
        this.position.add(t, true);
    }
    transform(t, s) {
        this.rotate(s);
        this.translate(t);
    }
    overlaps(t) {
        const s = Point.from(this.position);
        const i = this.getSweptShape(t);
        return s.within(i);
    }
    getSweptShape(t) {
        if (t instanceof Circle) {
            const s = t.clone();
            s.radius += this.radius;
            return s;
        }
        if (t instanceof Stadium) {
            const s = t.getSweptShape(this);
            s.position = t.position.clone();
            return s;
        }
        if (t instanceof Rect) {
            const s = new RoundedRect(t.position.clone(), t.size.add(new Vector(2 * this.radius, 2 * this.radius)), this.radius);
            return s;
        }
        return this;
    }
    clone() {
        return new Circle(this.position.clone(), this.radius);
    }
}

class Rect {
    constructor(t, s, i = 0) {
        this.worldSpace = false;
        this.i = 0;
        this.t = [];
        this.h = t;
        this.u = s;
        this.i = i;
    }
    get position() {
        return this.h;
    }
    set position(t) {
        this.h = t;
        this.t = [];
    }
    get size() {
        return this.u;
    }
    set size(t) {
        this.u = t;
        this.t = [];
    }
    get orientation() {
        return this.i;
    }
    set orientation(t) {
        this.i = t;
        this.t = [];
    }
    get half() {
        return this.u.half;
    }
    get left() {
        return this.h.x - this.half.x;
    }
    set left(t) {
        this.h.x = t + this.half.x;
        this.t = [];
    }
    get right() {
        return this.h.x + this.half.x;
    }
    set right(t) {
        this.h.x = t - this.half.x;
        this.t = [];
    }
    get top() {
        return this.h.y - this.half.y;
    }
    set top(t) {
        this.h.y = t + this.half.y;
        this.t = [];
    }
    get bottom() {
        return this.h.y + this.half.y;
    }
    set bottom(t) {
        this.h.y = t - this.half.y;
        this.t = [];
    }
    get width() {
        return this.u.x;
    }
    set width(t) {
        this.u.x = t;
        this.t = [];
    }
    get height() {
        return this.u.y;
    }
    set height(t) {
        this.u.y = t;
        this.t = [];
    }
    get area() {
        return this.size.x * this.size.y;
    }
    get boundingRadius() {
        const t = this.half.multiply(this.half);
        return Math.sqrt(t.x + t.y);
    }
    get boundingBox() {
        return this;
    }
    get vertices() {
        if (this.t.length > 0) return this.t;
        this.t = [ new Vector(-this.half.x, -this.half.y), new Vector(+this.half.x, -this.half.y), new Vector(+this.half.x, +this.half.y), new Vector(-this.half.x, +this.half.y) ];
        const t = this.h;
        const s = this.i;
        this.h = new Vector(0, 0);
        this.i = 0;
        this.transform(t, s);
        return this.t;
    }
    equals(t) {
        if (!this.h.equals(t.position) || !this.u.equals(t.size)) return false;
        return true;
    }
    rotate(t) {
        const s = this.vertices;
        if (0 !== Math.abs(t)) {
            s.forEach((s => s.rotate(t, true)));
            this.h.rotate(t, true);
            this.i += t;
        }
        this.t = s;
    }
    translate(t) {
        const s = this.vertices;
        s.forEach((s => s.add(t, true)));
        this.h.add(t, true);
        this.t = s;
    }
    transform(t, s) {
        this.rotate(s);
        this.translate(t);
    }
    resetVertices() {
        this.t = [];
    }
    overlaps(t) {
        if (t instanceof Rect) return !(this.left > t.right || this.right < t.left || this.top > t.bottom || this.bottom < t.top);
        const s = Point.from(this.position);
        const i = this.getSweptShape(t);
        return s.within(i);
    }
    within(t) {
        return !(this.left < t.left || this.right > t.right || this.top < t.top || this.bottom > t.bottom);
    }
    getSweptShape(t) {
        if (t instanceof Stadium) {
            const s = t.getSweptShape(this);
            s.position = t.position.clone();
            return s;
        }
        if (t instanceof Rect) {
            const s = t.clone();
            s.size.add(this.size, true);
            return s;
        }
        if (t instanceof Circle) {
            const s = t.getSweptShape(this);
            s.position = t.position.clone();
            return s;
        }
        return this;
    }
    toString() {
        return `[${this.h}] (${this.u})`;
    }
    clone() {
        return new Rect(this.h.clone(), this.u.clone(), this.i);
    }
}

var t;

class QuadTreeResolver {
    constructor(t, s) {
        this.V = new WeakMap;
        this.R = new QuadTree(new Rect(t, s));
    }
    updateEntityProximities(t, s) {
        t.forEach((t => {
            const i = new Rect(t.position, t.movementBox.size);
            const e = this.R.search(i);
            e.forEach((i => {
                t.near.add(i);
                s.proximities++;
            }));
            t.near.delete(t);
            s.proximities--;
        }));
    }
    addEntity(t) {
        const s = new Rect(t.position, t.movementBox.size);
        const i = new QuadTreeItem(t, s);
        i.quadtree = this.R.add(i);
        while (null == i.quadtree) {
            this.R = this.R.createParent(t.position);
            i.quadtree = this.R.add(i);
        }
        this.V.set(t, i);
    }
    updateEntity(t) {
        const s = this.V.get(t);
        const i = new Rect(t.position, t.movementBox.size);
        s.area = i;
        s.quadtree = s.quadtree.update(s);
        while (null == s.quadtree) {
            this.R = this.R.createParent(t.position);
            s.quadtree = this.R.update(s);
        }
        this.V.set(t, s);
    }
    removeEntity(t) {
        const s = this.V.get(t);
        s.quadtree.remove(s);
        this.V.delete(t);
    }
    findEntities(t) {
        const s = new Rect(t.position, new Vector(t.radius, t.radius));
        return this.R.search(s);
    }
}

class QuadTreeItem {
    constructor(t, s, i) {
        this.entity = t;
        this.area = s;
        this.quadtree = i;
    }
    static getKey(t) {
        return `${t.position.x},${t.position.y},${t.size.x},${t.size.y}`;
    }
}

class QuadTree {
    constructor(s, i = null) {
        this.area = s;
        this.parent = i;
        t.add(this);
        this.M = [];
        const e = this.area.half;
        const n = e.half;
        this.P = [ new Rect(this.area.position.add(new Vector(+n.x, -n.y)), e), new Rect(this.area.position.add(new Vector(-n.x, +n.y)), e), new Rect(this.area.position.add(new Vector(+n.x, +n.y)), e), new Rect(this.area.position.add(new Vector(-n.x, -n.y)), e) ];
        this.C = [ null, null, null, null ];
        console.log("Created new quadtree", s);
    }
    add(t, s) {
        for (let i = 0; i < 4; i++) {
            if (this.C[i] === s) continue;
            if (t.area.within(this.P[i])) {
                if (null == this.C[i]) this.C[i] = new QuadTree(this.P[i], this);
                return this.C[i]?.add(t);
            }
        }
        if (t.area.within(this.area)) {
            this.M.push(t);
            return this;
        }
        if (null == this.parent) console.log("CREATE NEW QUADTREE ROOT");
        return this.parent?.add(t, this);
    }
    remove(t) {
        const s = this.M.indexOf(t);
        if (s > -1) this.M.splice(s, 1);
    }
    update(t) {
        this.remove(t);
        return this.add(t);
    }
    search(t) {
        const s = [];
        for (const i of this.M) if (t.overlaps(i.area)) s.push(i.entity);
        for (const i of this.C) {
            if (null == i) continue;
            if (i.area.within(t)) s.push(...i.entities); else if (t.overlaps(i.area)) s.push(...i.search(t));
        }
        return s;
    }
    get entities() {
        const t = [ ...this.M.map((t => t.entity)) ];
        for (const s of this.C) if (null != s) t.push(...s.entities);
        return t;
    }
    createParent(t) {
        const s = this.area.half;
        const i = s.half;
        this.C.push(new QuadTree(new Rect(this.area.position.add(new Vector(-i.x, -i.y)), s), this));
        this.C.push(new QuadTree(new Rect(this.area.position.add(new Vector(+i.x, -i.y)), s), this));
        this.C.push(new QuadTree(new Rect(this.area.position.add(new Vector(-i.x, +i.y)), s), this));
        this.C.push(new QuadTree(new Rect(this.area.position.add(new Vector(+i.x, +i.y)), s), this));
        return this;
    }
}

t = new WeakSet;

class Force {
    constructor(t, s) {
        this.name = t;
        this.duration = s;
        this.startTime = null;
        this.magnitude = 0;
    }
    static create(t) {
        const s = new Force(t.name, t.duration ?? 0);
        s.direction = t.direction;
        s.maxMagnitude = t.maxMagnitude ?? 1;
        s.acceleration = t.acceleration;
        s.deceleration = t.deceleration;
        s.callback = t.callback;
        return s;
    }
    update(t, s) {
        if ("gravity" === this.name) console.log("Force", this.magnitude);
        if (0 !== this.duration && this.duration !== 1 / 0) {
            if (null == this.startTime) this.startTime = s;
            if (this.startTime + this.duration > s) if (this.magnitude > 0) if (null == this.deceleration) this.magnitude = 0; else this.magnitude -= this.deceleration * t; else return;
        }
        if (null != this.callback) return;
        if (this.magnitude < this.maxMagnitude) if (null == this.acceleration) this.magnitude = this.maxMagnitude; else {
            this.magnitude += this.acceleration * t;
            if (this.magnitude > this.maxMagnitude) this.magnitude = this.maxMagnitude;
        }
    }
    effect(t) {
        return null != this.callback ? (() => this.callback(this, t))() : new Vector((this.direction?.x ?? 1) * this.magnitude, (this.direction?.y ?? 1) * this.magnitude);
    }
    reset() {
        this.startTime = null;
        this.magnitude = 0;
        return this;
    }
    clone() {
        return Force.create(this);
    }
    static Drag(t = {}) {
        t.density ?? (t.density = 1);
        t.coefficient ?? (t.coefficient = .1);
        t.surface ?? (t.surface = (t, s) => s.getSurfaceArea?.() ?? 500);
        const s = -.5 * t.density * (t.coefficient / 1e6);
        return Force.create({
            name: "drag",
            duration: 1 / 0,
            callback: (i, e) => function(t, s, i, e) {
                const n = s.velocity.normalize();
                const h = s.velocity.magnitude;
                const r = e(t, s);
                return n.multiply(i * r * h * h, true);
            }(i, e, s, t.surface)
        });
    }
    static Gravity(t = {}) {
        t.G ?? (t.G = 1);
        t.direction ?? (t.direction = new Vector(0, 1));
        return Force.create({
            name: "gravity",
            duration: 1 / 0,
            direction: t.direction,
            magnitude: 1e4 * t.G
        });
    }
}

class Shape {
    constructor(t) {
        this.entity = t;
        this.types = [];
    }
    get worldPosition() {
        const t = this.entity.position.add(this.shape.position);
        t.z += this.shape.position.z;
        return t;
    }
    get worldShape() {
        const t = this.clone();
        t.shape.worldSpace = true;
        t.shape.transform(this.entity.position, this.entity.orientation);
        return t;
    }
    get renderPosition() {
        return this.shape.size.negHalf.add(this.shape.position);
    }
    static create(t, s) {
        const i = new Shape(t);
        if (null == s.shape) if (null != s.alignment) s.shape = "stadium"; else if (null != s.radius) s.shape = "circle"; else if (null != s.size) s.shape = "rect"; else throw new Error(`Failed to infer shape: ${JSON.stringify(s)}!`);
        switch (s.shape) {
          case "rect":
            {
                const t = Vector.from(s.size);
                const e = Vector.from(s.position ?? [ 0, 0 ]);
                i.shape = new Rect(e, t, s.orientation);
                break;
            }

          case "circle":
            {
                const t = s.radius;
                const e = Vector.from(s.position ?? [ 0, 0 ]);
                i.shape = new Circle(e, t);
                break;
            }

          case "stadium":
            {
                const t = Vector.from(s.size);
                const e = Vector.from(s.position ?? [ 0, 0 ]);
                i.shape = new Stadium(e, t, s.alignment, s.orientation);
                break;
            }
        }
        i.name = s.name ?? "";
        i.color = s.color;
        i.signal = s.signal;
        i.types = Array.isArray(s.types) ? [ ...s.types ] : [ s.types ?? "collision" ];
        return i;
    }
    clone() {
        const t = new Shape(this.entity);
        t.localShape = this;
        t.shape = this.shape.clone();
        t.types = this.types;
        t.signal = this.signal;
        return t;
    }
}

class Entity {
    constructor() {
        this.velocity = new Vector;
        this.movements = 0;
        this.mass = 1;
        this.forces = [];
        this.maxSpeed = 1e6;
        this.shapes = [];
        this.worldShapes = [];
        this.collisionTypes = {};
        this.signalTypes = {};
        this.near = new Set;
        this.i = 0;
        this.h = new Vector;
    }
    get left() {
        return this.position.x + this.shapes[0].shape.size.negHalf.x;
    }
    get top() {
        return this.position.y + this.shapes[0].shape.size.negHalf.y;
    }
    get position() {
        return this.h;
    }
    set position(t) {
        if (t.x === this.h.x && t.y === this.h.y) {
            if (t instanceof Vector) this.h = t;
            return;
        }
        this.h = t instanceof Vector ? t : new Vector(t.x, t.y);
    }
    get orientation() {
        return this.i;
    }
    set orientation(t) {
        if (this.i === t) return;
        this.i = t;
    }
    static create(t) {
        const s = new Entity;
        s.entity = t.entity ?? t;
        s.position = new Vector(s.entity.position.x, s.entity.position.y);
        s.orientation = t.orientation ?? s.i;
        s.mass = t.mass ?? s.mass;
        s.forces = (t.forces ?? []).map((t => t instanceof Force ? t : t = Force.create(t)));
        s.maxSpeed = t.maxSpeed ?? s.maxSpeed;
        s.color = t.color;
        (t.shapes ?? []).forEach((t => s.addShape(t)));
        return s;
    }
    addForce(t) {
        if (!(t instanceof Force)) t = Force.create(t);
        this.forces.push(t);
    }
    applyForces(t, s) {
        if (null == this.position) return false;
        for (let i = 0; i < this.forces.length; i++) {
            const e = this.forces[i];
            e.update(t, s);
            const n = e.effect(this);
            this.velocity.add(n, true);
            if (e.duration <= 0) this.forces.splice(i--, 1);
        }
        this.movements = 0;
        return true;
    }
    addShape(t) {
        if (!(t instanceof Shape)) t = Shape.create(this, t);
        this.shapes.push(t);
        this.I();
        this.boundingRadius = this.F();
        this.movementRadius = this.$(1 / 60);
        this.boundingBox = this.A();
        this.movementBox = this.N(1 / 60);
        return t;
    }
    prepareMovement(t, s) {
        this.direction = this.velocity.normalize();
        if (++this.movements < 15) this.speed = Math.abs(this.velocity.magnitude); else if (this.movements >= 20) this.speed = 0;
        if (this.speed < 1e-5) {
            this.speed = 0;
            this.velocity = new Vector;
        }
        if (this.speed > this.maxSpeed && this.movements < 15) {
            this.speed = this.maxSpeed;
            this.velocity = this.direction.multiply(this.speed);
        }
        this.movementBox = this.N(t);
        const i = this.$(t);
        if (i !== this.movementRadius) {
            this.movementRadius = i;
            Physics.updateEntity(this);
        }
        return this.speed > 0;
    }
    move(t) {
        this.position.add(this.direction.multiply(this.speed * t), true);
        Physics.updateEntity(this);
    }
    moveTo(t) {
        this.position.x = t.x;
        this.position.y = t.y;
        this.worldShapes = this.shapes.map((t => t.worldShape));
        Physics.updateEntity(this);
    }
    getSurfaceArea() {
        return this.shapes[0].shape.area;
    }
    I() {
        this.collisionTypes = {};
        this.signalTypes = {};
        for (const t of this.shapes) for (const s of t.types) {
            if (null != Physics.collisions[s]) {
                if (null == this.collisionTypes[s]) this.collisionTypes[s] = [];
                this.collisionTypes[s].push(t);
            }
            if (null != Physics.signals[s]) {
                if (null == this.signalTypes[s]) this.signalTypes[s] = [];
                this.signalTypes[s].push(t);
            }
        }
    }
    F() {
        return Math.max(...this.shapes.map((t => t.shape.boundingRadius)));
    }
    A() {
        const t = Math.min(...this.shapes.map((t => t.shape.left)));
        const s = Math.max(...this.shapes.map((t => t.shape.right)));
        const i = Math.min(...this.shapes.map((t => t.shape.top)));
        const e = Math.max(...this.shapes.map((t => t.shape.bottom)));
        return new Rect(new Vector, new Vector(s - t, e - i));
    }
    $(t) {
        const s = Math.min(this.maxSpeed * Math.min(4 * t, .1), this.maxSpeed);
        const i = this.boundingRadius + s;
        this.movementRadiusDebug = i;
        return i * i;
    }
    N(t) {
        const s = 2 * Math.min(this.maxSpeed * Math.min(t, .1), this.maxSpeed);
        const i = this.boundingBox.clone();
        i.size.add(new Vector(s, s), true);
        return i;
    }
}

class Intersection {
    constructor() {
        this.intersects = false;
        this.time = 1 / 0;
    }
}

class RadiusResolver {
    constructor(t) {
        this.T = t;
        this.V = new Set;
    }
    updateEntityProximities(t, s) {
        for (let i = 0, e = t.length; i < e; i++) {
            const e = t[i];
            if (null != this.T) {
                this.T?.drawShape(e.shapes[0].worldShape.shape, 0 === e.mass ? "red" : "black", e.color);
                if (Physics.showAreas) this.T.drawShape(new Circle(e.position, e.movementRadiusDebug), "red");
            }
            for (let n = i + 1, h = t.length; n < h; n++) {
                const i = t[n];
                const h = i.position.subtract(e.position).magnitude;
                if (e.movementRadius + i.movementRadius < h * h) {
                    s.skipped++;
                    continue;
                }
                e.near.add(i);
                i.near.add(e);
                s.proximities++;
            }
        }
    }
    addEntity(t) {
        this.V.add(t);
    }
    updateEntity(t) {
        this.V.add(t);
    }
    removeEntity(t) {
        this.V.delete(t);
    }
    findEntities(t) {
        return [];
    }
}

class Line {
    constructor(t, s) {
        this.start = t;
        this.end = s;
    }
    get normal() {
        return new Vector(-(this.end.y - this.start.y), this.end.x - this.start.x);
    }
    get direction() {
        return this.end.subtract(this.start);
    }
    get magnitude() {
        return this.direction.magnitude;
    }
    get directionVector() {
        return this.direction.divide(this.magnitude);
    }
}

class Ray {
    constructor(t, s, i) {
        this.origin = t;
        if (s instanceof Vector) {
            this.magnitude = i ?? s.magnitude;
            this.q = s.normalize();
        } else {
            this.H = s;
            this.magnitude = i ?? 1;
        }
    }
    get normal() {
        const t = this.directionVector;
        return new Vector(-t.y, t.x);
    }
    get directionVector() {
        return null != this.q ? this.q : new Vector;
    }
    get directionAngle() {
        return null != this.H ? this.H : (Math.atan2(this.q.y, this.q.x) * Ray.B + Ray.O) % 360;
    }
    set direction(t) {
        if (t instanceof Vector) {
            this.q = t;
            this.H = void 0;
        } else {
            this.H = t;
            this.q = void 0;
        }
    }
    get end() {
        return this.origin.add(this.directionVector.multiply(this.magnitude));
    }
    set end(t) {
        const s = t.subtract(this.origin);
        this.direction = s.normalize();
        this.magnitude = s.magnitude;
    }
    getIntersection(t) {
        if (t instanceof Stadium) return this.getIntersectionStadium(t);
        if (t instanceof RoundedRect) return this.getIntersectionRoundedRect(t);
        if (t instanceof Rect) return this.getIntersectionRect(t);
        if (t instanceof Circle) return this.getIntersectionCircle(t);
        return new Intersection;
    }
    getIntersectionRect(t) {
        const s = new Intersection;
        const i = this.origin;
        const e = this.end.subtract(this.origin);
        const n = t.position.subtract(t.half).subtract(i).divide(e);
        const h = t.position.add(t.half).subtract(i).divide(e);
        if (isNaN(n.x) || isNaN(n.y) || isNaN(h.x) || isNaN(h.y)) {
            h.y = 1 / 0;
            return s;
        }
        if (n.x > h.x) [n.x, h.x] = [ h.x, n.x ];
        if (n.y > h.y) [n.y, h.y] = [ h.y, n.y ];
        if (n.x > h.y || n.y > h.x) return s;
        const r = Math.max(n.x, n.y);
        if (r < 0 || r > 1) return s;
        s.normal = e.sign();
        if (this.directionVector.multiply(s.normal).zero) {
            console.log("%%% No movement in normal direction.");
            return s;
        }
        s.time = r;
        s.point = i.add(e.multiply(s.time));
        if (s.point.x > t.left && s.point.x < t.right && s.point.y > t.top && s.point.y < t.bottom) ;
        if (n.x < n.y) {
            if (0 === Math.abs(s.normal.y)) {
                console.log("IGNORING y");
                return s;
            }
            s.normal.multiply(new Vector(0, -1), true);
            s.tangent = new Vector(-s.normal.y, s.normal.x);
        } else {
            if (0 === Math.abs(s.normal.x)) {
                console.log("IGNORING x");
                return s;
            }
            s.normal.multiply(new Vector(-1, 0), true);
            s.tangent = new Vector(-s.normal.y, s.normal.x);
        }
        s.intersects = true;
        return s;
    }
    getIntersectionCircle(t) {
        const s = new Intersection;
        new Line(this.origin, t.position);
        const i = this.origin.subtract(t.position);
        const e = i.dot(this.directionVector);
        const n = i.dot(i) - t.radius * t.radius;
        let h = e * e - n;
        if (h < 0) return s;
        h = Math.sqrt(h);
        const r = -e - h;
        if (r < 0 || r > this.magnitude) return s;
        s.point = this.origin.add(this.directionVector.multiply(r));
        s.time = r / this.magnitude;
        s.normal = s.point.subtract(t.position).normalize();
        s.tangent = new Vector(-s.normal.y, s.normal.x);
        s.intersects = true;
        return s;
    }
    getIntersectionStadium(t) {
        let s = new Intersection;
        const i = [];
        if (t.horizontal) i.push(new Rect(t.position, t.size.subtract(new Vector(2 * t.radius, 0))), new Circle(new Vector(t.left + t.radius, t.position.y), t.radius), new Circle(new Vector(t.right - t.radius, t.position.y), t.radius)); else i.push(new Rect(t.position, t.size.subtract(new Vector(0, 2 * t.radius))), new Circle(new Vector(t.position.x, t.top + t.radius), t.radius), new Circle(new Vector(t.position.x, t.bottom - t.radius), t.radius));
        i.forEach((t => {
            const i = this.getIntersection(t);
            if (i.intersects) if (i.time < s.time) s = i;
        }));
        s.shapes = i;
        return s;
    }
    getIntersectionRoundedRect(t) {
        let s = new Intersection;
        const i = t.radius;
        const e = 2 * i;
        const n = [ new Circle(new Vector(t.left + i, t.top + i), i), new Circle(new Vector(t.right - i, t.top + i), i), new Circle(new Vector(t.right - i, t.bottom - i), i), new Circle(new Vector(t.left + i, t.bottom - i), i), new Rect(t.position, t.size.subtract(new Vector(e, 0))), new Rect(t.position, t.size.subtract(new Vector(0, e))) ];
        n.forEach((t => {
            const i = this.getIntersection(t);
            if (i.intersects) if (i.time < s.time) s = i;
        }));
        s.shapes = n;
        return s;
    }
}

Ray.B = 180 / Math.PI;

Ray.O = 360 + 90;

class SpatialHashGridResolver {
    constructor(t, s) {
        this.size = t;
        this.T = s;
        this.V = new WeakMap;
        this.W = new SpatialHashGrid(t);
    }
    updateEntityProximities(t, s) {
        t.forEach((t => {
            const i = new Rect(t.position, t.movementBox.size);
            if (null != this.T) {
                this.T?.drawShape(t.shapes[0].worldShape.shape, "black", t.color);
                this.T.drawShape(i, "red");
            }
            const e = this.W.search(i);
            e.forEach((i => {
                if (i === t) return;
                const e = i.position.subtract(t.position).magnitude;
                if (t.movementRadius + i.movementRadius < e * e) return;
                t.near.add(i);
                s.proximities++;
            }));
            s.proximities--;
        }));
    }
    addEntity(t) {
        const s = new Rect(t.position, t.movementBox.size);
        const i = new SpatialHashGridItem(t, s);
        this.W.add(i);
        this.V.set(t, i);
    }
    updateEntity(t) {
        const s = this.V.get(t);
        const i = new Rect(t.position, t.movementBox.size);
        s.area = i;
        this.W.update(s);
    }
    removeEntity(t) {
        const s = this.V.get(t);
        this.W.remove(s);
        this.V.delete(t);
    }
    findEntities(t) {
        const s = new Rect(t.position, new Vector(t.radius, t.radius));
        return this.W.search(s);
    }
}

class SpatialHashGridItem {
    constructor(t, s) {
        this.entity = t;
        this.area = s;
        this.query = -1;
    }
}

class SpatialHashGrid {
    constructor(t) {
        this.size = t;
        this.W = new Map;
        this._ = 0;
        this.M = new Map;
    }
    add(t) {
        t.keys = this.getKeys(t.area);
        t.key = t.keys.join("/");
        t.locations = t.keys.map((s => {
            let i = this.W.get(s);
            if (null == i) {
                i = new Set;
                this.W.set(s, i);
            }
            i.add(t);
            return i;
        }));
    }
    remove(t) {
        t.locations.forEach((s => s.delete(t)));
        t.locations = [];
        t.keys = [];
    }
    update(t) {
        const s = this.getKeys(t.area);
        if (s.join("/") === t.key) return;
        this.remove(t);
        this.add(t);
    }
    search(t) {
        const s = this._++;
        const i = [];
        const e = this.getKeys(t);
        for (const t of e) {
            const e = this.W.get(t);
            if (null == e) continue;
            for (const t of e) {
                if (t.query === s) continue;
                i.push(t.entity);
                t.query = s;
            }
        }
        return i;
    }
    getKeys(t) {
        const s = [];
        const i = Math.floor(t.left / this.size.x);
        const e = Math.floor(t.right / this.size.x) + 1;
        const n = Math.floor(t.top / this.size.y);
        const h = Math.floor(t.bottom / this.size.y) + 1;
        for (let t = i; t < e; t++) for (let i = n; i < h; i++) s.push(`${t},${i}`);
        return s;
    }
}

class Polygon {
    constructor(t, s, i = 0) {
        this.position = t;
        this.vertices = s;
        this.orientation = i;
        this.worldSpace = false;
    }
    get left() {
        return this.position.x + Math.min(...this.vertices.map((t => t.x)));
    }
    set left(t) {
        this.position.x = t - Math.min(...this.vertices.map((t => t.x)));
    }
    get right() {
        return this.position.x + Math.max(...this.vertices.map((t => t.x)));
    }
    set right(t) {
        this.position.x = t - Math.max(...this.vertices.map((t => t.x)));
    }
    get top() {
        return this.position.y + Math.min(...this.vertices.map((t => t.y)));
    }
    set top(t) {
        this.position.y = t - Math.min(...this.vertices.map((t => t.y)));
    }
    get bottom() {
        return this.position.y + Math.max(...this.vertices.map((t => t.y)));
    }
    set bottom(t) {
        this.position.y = t - Math.max(...this.vertices.map((t => t.y)));
    }
    get width() {
        return this.right - this.left;
    }
    get height() {
        return this.bottom - this.top;
    }
    rotate(t) {
        if (0 !== t) {
            this.vertices.forEach((s => s.rotate(t, true)));
            this.orientation += t;
        }
        return this;
    }
    translate(t) {
        this.vertices.forEach((s => s.add(t, true)));
        this.position.add(t, true);
        return this;
    }
    clone() {
        return new Polygon(this.position.clone(), this.vertices.map((t => t.clone())), this.orientation);
    }
}

class Canvas {
    constructor(t) {
        this.ctx = t;
        this.logging = false;
    }
    clear() {
        const t = this.ctx;
        const s = t.canvas;
        this.ctx.clearRect(0, 0, s.width, s.height);
    }
    drawShape(t, s, i, e = true) {
        const n = this.ctx;
        n.strokeStyle = s;
        if (null != i) n.fillStyle = i;
        if (t instanceof Line) {
            n.beginPath();
            n.moveTo(t.start.x, t.start.y);
            n.lineTo(t.end.x, t.end.y);
            n.stroke();
        } else if (t instanceof Ray) {
            n.strokeStyle = s;
            n.beginPath();
            n.moveTo(t.origin.x, t.origin.y);
            n.lineTo(t.end.x, t.end.y);
            if (null != i) n.fill();
            n.stroke();
            this.drawCross(t.origin, s, 2);
        } else if (t instanceof Stadium) {
            const e = Math.PI;
            const h = t.position;
            const r = t.radius;
            n.beginPath();
            if (t.horizontal) {
                n.arc(t.right - r, h.y, r, e / 2, 1.5 * e, true);
                n.lineTo(t.left + r, t.top);
                n.arc(t.left + r, h.y, r, 1.5 * e, .5 * e, true);
                n.lineTo(t.right - r, t.bottom);
            } else {
                n.arc(h.x, t.top + r, r, 0, e, true);
                n.lineTo(t.left, t.bottom - r);
                n.arc(h.x, t.bottom - r, r, e, 0, true);
                n.lineTo(t.right, t.top + r);
            }
            if (null != i) n.fill();
            n.stroke();
            this.drawCross(h, s, 2);
        } else if (t instanceof RoundedRect) {
            const e = t.radius;
            n.beginPath();
            n.arc(t.left + e, t.top + e, e, -.5 * Math.PI, Math.PI, true);
            n.lineTo(t.left, t.bottom - e);
            n.arc(t.left + e, t.bottom - e, e, Math.PI, .5 * Math.PI, true);
            n.lineTo(t.right - e, t.bottom);
            n.arc(t.right - e, t.bottom - e, e, .5 * Math.PI, 0, true);
            n.lineTo(t.right, t.top + e);
            n.arc(t.right - e, t.top + e, e, 0, .5 * -Math.PI, true);
            n.lineTo(t.left + e, t.top);
            if (null != i) n.fill();
            n.stroke();
            this.drawCross(t.position, s, 2);
        } else if (t instanceof Rect || t instanceof Polygon) {
            n.beginPath();
            const e = t.vertices;
            for (let t = 0; t < e.length; t++) n.lineTo(e[t].x, e[t].y);
            n.lineTo(e[0].x, e[0].y);
            if (null != i) n.fill();
            n.stroke();
            this.drawCross(t.position, s, 2);
        } else if (t instanceof Circle) {
            n.beginPath();
            n.arc(t.position.x, t.position.y, t.radius, 0, 2 * Math.PI);
            if (null != i) n.fill();
            n.stroke();
            this.drawCross(t.position, s, 2);
        }
    }
    drawCross(t, s, i, e = true) {
        const n = this.ctx;
        n.strokeStyle = s;
        n.beginPath();
        n.moveTo(t.x, t.y - i);
        n.lineTo(t.x, t.y + i);
        n.stroke();
        n.beginPath();
        n.moveTo(t.x - i, t.y);
        n.lineTo(t.x + i, t.y);
        n.stroke();
    }
    drawText(t, s, i, e = "11px Arial", n = true) {
        const h = this.ctx;
        h.fillStyle = i;
        h.font = e;
        h.fillText(t, s.x, s.y);
    }
    log(...t) {
        if (!this.logging) return;
        console.log(...t);
    }
}

class Physics {
    static initialize(t) {
        t = t ?? {};
        const s = t.collisions ?? {
            collision: [ "collision" ]
        };
        t.signals ?? {};
        for (const t in s) for (const i of s[t]) {
            if (null == Physics.collisions[t]) Physics.collisions[t] = {};
            Physics.collisions[t][i] = true;
            if (null == Physics.collisions[i]) Physics.collisions[i] = {};
            Physics.collisions[i][t] = true;
        }
        if (null != t.ctx) {
            Physics.canvas = new Canvas(t.ctx);
            Physics.showAreas = t.showAreas ?? Physics.showAreas;
        }
        switch (t.resolver) {
          case "quadtree":
            Physics.L = new QuadTreeResolver(new Vector(500, 500), new Vector(2e3, 2e3));
            break;

          case "spatial-hash-grid":
            Physics.L = new SpatialHashGridResolver(new Vector(100, 100), Physics.canvas);
            break;

          default:
            Physics.L = new RadiusResolver(Physics.canvas);
            break;
        }
    }
    static update(t, s) {
        const i = performance.now();
        const e = {
            time: -1,
            movers: 0,
            moving: 0,
            totalChecks: 0,
            skipped: 0,
            solitaires: 0,
            collisionCandidates: 0,
            proximities: 0,
            checks: 0,
            moved: new Set
        };
        if (t > .5) return e;
        if (Physics.dontClear) {
            debugger;
            Physics.dontClear = false;
        }
        Physics.canvas?.clear();
        const n = new Set;
        const h = this.entities.filter((i => {
            if (!i.applyForces(t, s)) return false;
            i.prepareMovement(t, s);
            if (i.speed > 0) n.add(i);
            i.near.clear();
            return true;
        }));
        e.movers = h.length;
        e.moving = n.size;
        e.totalChecks = h.length * h.length;
        this.L.updateEntityProximities(h, e);
        let r = t;
        while (r > 1e-4) {
            let t = r;
            let i = [ new Intersection ];
            const h = new WeakMap;
            for (const s of n) {
                e.collisionCandidates++;
                for (const n of s.near) {
                    if (!h.has(n)) h.set(n, new Set);
                    if (h.get(s)?.has(n)) continue;
                    h.get(n)?.add(s);
                    e.checks++;
                    const r = s.velocity.multiply(t).subtract((n.velocity ?? new Vector).multiply(t));
                    const o = new Ray(s.position, r.normalize(), r.magnitude);
                    const c = s.shapes[0].worldShape.shape;
                    const a = n.shapes[0].worldShape.shape;
                    const u = c.getSweptShape(a);
                    const l = o.getIntersection(u);
                    if (l.intersects) {
                        l.mover = s;
                        l.entity = n;
                        if (l.time === i[0].time) i.push(l); else if (l.time < i[0].time) i = [ l ];
                    }
                }
            }
            if (i[0].intersects) t *= i[0].time;
            if (t > 0) {
                n.forEach((s => {
                    s.move(t);
                    e.moved.add(s);
                }));
                r -= t;
            }
            if (i[0].intersects) for (const t of i) {
                const i = t.mover;
                const e = t.entity;
                const h = t.tangent;
                const o = t.normal;
                const c = {};
                if (0 !== i.mass) {
                    c.mass = i.mass;
                    c.direction = i.direction;
                    c.speed = i.speed;
                } else {
                    c.mass = e.mass;
                    c.direction = e.direction.multiply(-1);
                    c.speed = e.speed;
                }
                const a = {};
                if (0 !== e.mass) {
                    a.mass = e.mass;
                    a.direction = e.direction;
                    a.speed = e.speed;
                } else {
                    a.mass = i.mass;
                    a.direction = i.direction.multiply(-1);
                    a.speed = i.speed;
                }
                const u = c.direction.multiply(c.speed).dot(h);
                const l = a.direction.multiply(a.speed).dot(h);
                const f = c.direction.multiply(c.speed).dot(o);
                const w = a.direction.multiply(a.speed).dot(o);
                const d = (f * (c.mass - a.mass) + 2 * a.mass * w) / (c.mass + a.mass);
                const g = (w * (a.mass - c.mass) + 2 * c.mass * f) / (c.mass + a.mass);
                if (0 !== i.mass) i.velocity = h.multiply(u).add(o.multiply(d));
                if (i.prepareMovement(r, s)) n.add(i); else n.delete(i);
                if (0 !== e.mass) e.velocity = h.multiply(l).add(o.multiply(g));
                if (e.prepareMovement(r, s)) n.add(e); else n.delete(e);
            }
            if (0 === n.size) break;
        }
        e.time = performance.now() - i;
        return e;
    }
    static update_WORKING(t, s) {
        const i = [];
        for (let e = 0, n = this.entities.length; e < n; e++) {
            const n = this.entities[e];
            if (!n.applyForces(t, s)) continue;
            n.prepareMovement(t, s);
            i.push(n);
            n.near.clear();
            for (let t = e + 1, s = this.entities.length; t < s; t++) {
                const s = this.entities[t];
                if (null == s.position) continue;
                const i = s.position.subtract(n.position).magnitude;
                if (n.movementRadius + s.movementRadius < i * i) {
                    console.log("skipping");
                    continue;
                }
                n.near.add(s);
                s.near.add(n);
            }
        }
        let e = t;
        const n = new Set;
        while (e > 1e-4) {
            let t = e;
            let h = [ new Intersection ];
            for (const s of i) {
                if (0 === s.speed) continue;
                n.add(s);
                console.log("Checking near", s.near.size);
                for (const i of s.near) {
                    i.near.delete(s);
                    const e = s.velocity.multiply(t).subtract((i.velocity ?? new Vector).multiply(t));
                    const n = new Ray(s.position, e.normalize(), e.magnitude);
                    const r = s.shapes[0].worldShape.shape;
                    const o = i.shapes[0].worldShape.shape;
                    const c = r.getSweptShape(o);
                    const a = n.getIntersection(c);
                    if (a.intersects) {
                        a.mover = s;
                        a.entity = i;
                        if (a.time === h[0].time) h.push(a); else if (a.time < h[0].time) h = [ a ];
                    }
                }
            }
            if (h[0].intersects) t *= h[0].time;
            n.forEach((s => {
                s.move(t);
            }));
            e -= t;
            if (h[0].intersects) for (const t of h) {
                const i = t.mover;
                const h = t.entity;
                const r = t.tangent;
                const o = t.normal;
                const c = 1;
                const a = 1;
                const u = i.direction.multiply(i.speed).dot(r);
                const l = h.direction.multiply(h.speed).dot(r);
                const f = i.direction.multiply(i.speed).dot(o);
                const w = h.direction.multiply(h.speed).dot(o);
                const d = (f * (c - a) + 2 * a * w) / (c + a);
                const g = (w * (a - c) + 2 * c * f) / (c + a);
                i.velocity = r.multiply(u).add(o.multiply(d));
                h.velocity = r.multiply(l).add(o.multiply(g));
                if (i.prepareMovement(e, s)) n.add(i); else n.delete(i);
                if (!h.prepareMovement(e, s)) n.add(h); else n.delete(h);
            }
            if (0 === n.size) break;
            for (const t of i) {
                t.position.add([ 1100, 1100 ], true).modulus(1100, true);
                const s = t.shapes[0].worldShape.shape;
                if (s.position.x < 0) t.velocity.x = -t.velocity.x; else if (s.position.x > 1100) t.velocity.x = -t.velocity.x;
                if (s.position.y < 0) t.velocity.y = -t.velocity.y; else if (s.position.y > 1100) t.velocity.y = -t.velocity.y;
            }
        }
    }
    static addForce(t) {
        if (!(t instanceof Force)) t = Force.create(t);
        Physics.forces.push(t);
    }
    static removeForce(t, s = Physics) {
        const i = Physics.forces.findIndex((t => t === s));
        if (i < 0) return;
        Physics.forces.splice(i, 1);
    }
    static addEntities(t) {
        if (!Array.isArray(t)) t = [ t ];
        console.log("addEntities", t);
        return t.map((t => {
            const s = t instanceof Entity ? t : Entity.create(t);
            Physics.forces.forEach((t => s.addForce(t.clone().reset())));
            Physics.entities.push(s);
            if (null != s.position) Physics.L.addEntity(s);
            console.log("addEntities map", s);
            return s;
        }));
    }
    static updateEntity(t) {
        Physics.L.updateEntity(t);
    }
    static removeEntities(t) {
        if (!Array.isArray(t)) t = [ t ];
        t.forEach((t => {
            const s = Physics.entities.findIndex((s => s === t));
            if (s > -1) Physics.entities.splice(s, 1);
            Physics.L.removeEntity(t);
        }));
    }
}

Physics.entities = [];

Physics.forces = [];

Physics.collisions = {};

Physics.signals = {};

Physics.showAreas = false;

Physics.dontClear = false;


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@peasy-lib/peasy-ui/dist/esm/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@peasy-lib/peasy-ui/dist/esm/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI),
/* harmony export */   "UIView": () => (/* binding */ UIView)
/* harmony export */ });
class UIView {
    constructor() {
        this.state = "created";
        this.bindings = [];
        this.animations = [];
        this.animationQueue = [];
        this.destroyed = "";
        this.moved = "";
    }
    static create(t, i, e = {}, s = {
        parent: null,
        prepare: true,
        sibling: null
    }) {
        const n = new UIView;
        n.model = e;
        n.element = i;
        n.bindings.push(...UI.parse(n.element, e, n, s.parent));
        n.parentElement = t;
        n.sibling = s.sibling;
        n.parent = s.parent ?? UI;
        n.attached = new Promise((t => {
            n.attachResolve = t;
        }));
        return n;
    }
    destroy() {
        this.element.classList.add("pui-removing");
        this.destroyed = "queue";
        UI.destroyed.push(this);
    }
    terminate() {
        Promise.all(this.getAnimations()).then((() => {
            this.element.parentElement?.removeChild(this.element);
            this.bindings.forEach((t => t.unbind()));
            const t = this.parent.views.findIndex((t => t === this));
            if (t > -1) this.parent.views.splice(t, 1);
        }));
        this.destroyed = "destroyed";
    }
    move(t) {
        this.moved = "queue";
        this.element.classList.add("pui-moving");
        this.sibling = t;
    }
    play(t, i) {
        if ("string" === typeof t) t = this.animations.find((i => i.name === t)).clone();
        t.element = i;
        t.state = "pending";
        this.animationQueue.push(t);
        this.updateAnimations(performance.now());
        return t;
    }
    updateFromUI() {
        this.bindings.forEach((t => t.updateFromUI()));
    }
    updateToUI() {
        this.bindings.forEach((t => t.updateToUI()));
        switch (this.state) {
          case "created":
            this.element.classList.add("pui-adding");
            if (!this.element.hasAttribute("PUI-UNRENDERED")) (this.parentElement ?? UI.parentElement(this.element, this.parent)).insertBefore(this.element, this.sibling?.nextSibling ?? null);
            this.attachResolve();
            this.state = "attaching";
            break;

          case "attaching":
            if (0 === this.getAnimations(false).length) {
                this.element.classList.remove("pui-adding");
                this.state = "attached";
            }
            break;

          case "attached":
            this.state = "rendered";
            break;
        }
    }
    updateAtEvents() {
        this.bindings.forEach((t => t.updateAtEvents()));
    }
    updateAnimations(t) {
        while ("finished" === this.animationQueue[0]?.state ?? false) {
            const t = this.animationQueue.shift();
            t.destroy();
        }
        for (let i = 0; i < this.animationQueue.length; i++) {
            const e = this.animationQueue[i];
            if ("pending" !== e.state) continue;
            if (e.isBlocked(t)) continue;
            e.state = "playing";
            e.startTime = t;
            e.animation = e.element.animate(e.keyframes, e.options);
            e.finished = e.animation.finished;
            e.finished.then((() => {
                e.state = "finished";
                this.updateAnimations(performance.now());
            }));
        }
    }
    updateMove() {
        switch (this.moved) {
          case "queue":
            this.moved = "move";
            break;

          case "move":
            if (0 === this.getAnimations().length) {
                const t = UI.parentElement(this.element, this.parent);
                t.insertBefore(this.element, this.sibling.nextSibling);
                this.element.classList.remove("pui-moving");
                this.moved = "";
                this.sibling = null;
            }
            break;
        }
        this.bindings.forEach((t => t.updateMove()));
    }
    getAnimations(t = true) {
        return this.element.getAnimations({
            subtree: t
        }).filter((t => "finished" !== t.playState && t.effect?.getTiming().iterations !== 1 / 0)).map((t => t.finished));
    }
}

class UIBinding {
    constructor() {
        this.fromUI = false;
        this.toUI = true;
        this.atEvent = false;
        this.oneTime = false;
        this.views = [];
        this.firstUpdate = true;
        this.events = [];
        this.triggerAtEvent = t => {
            this.events.push(t);
        };
        this.id = ++UI.id;
    }
    get element() {
        if (null == this.$element) this.$element = "string" === typeof this.selector ? this.context.querySelector(this.selector) : this.selector;
        return this.$element;
    }
    set element(t) {
        this.$element = t;
    }
    static create(t) {
        const i = new UIBinding;
        const e = t.property?.split(":") ?? [];
        const s = e.shift();
        i.object = "$model" in t.object ? t.object : {
            $model: t.object
        };
        i.property = s;
        i.arguments = e;
        i.context = t.context ?? document;
        i.selector = t.selector;
        i.attribute = t.attribute ?? "innerText";
        i.value = t.value ?? i.value;
        i.template = t.template ?? i.template;
        i.fromUI = t.fromUI ?? i.fromUI;
        i.toUI = t.toUI ?? i.toUI;
        i.atEvent = t.atEvent ?? i.atEvent;
        i.oneTime = t.oneTime ?? i.oneTime;
        i.parent = t.parent ?? UI;
        i.addListener();
        if ("boolean" !== typeof i.fromUI) i.fromUI = i.fromUI.bind(i);
        if ("boolean" !== typeof i.toUI) i.toUI = i.toUI.bind(i);
        return i;
    }
    destroy() {
        this.element = null;
        this.removeListener();
        this.views.forEach((t => t.destroy()));
    }
    unbind() {
        UI.unbind(this);
    }
    addListener() {
        if (this.atEvent) {
            this.toUI = false;
            this.fromUI = false;
            this.element.addEventListener(this.attribute, this.triggerAtEvent);
        }
    }
    removeListener() {
        if (this.atEvent) this.element.removeEventListener(this.attribute, this.triggerAtEvent);
    }
    updateFromUI() {
        if (false === this.fromUI || this.firstUpdate) {
            this.firstUpdate = false;
            this.views.forEach((t => t.updateFromUI()));
            return;
        }
        const {target: t, property: i} = UI.resolveProperty(this.element, this.attribute);
        const e = t[i];
        if (e !== this.lastUIValue) {
            let t = true !== this.fromUI ? this.fromUI(e, this.lastUIValue, this.property, this.object) : e;
            this.lastUIValue = e;
            if (void 0 !== t && t !== this.lastValue) {
                this.lastValue = t;
                const {target: i, property: e} = UI.resolveProperty(this.object, this.property);
                if ("number" === UI.resolveValue(this.object, this.property) && !isNaN(t)) t = +t;
                i[e] = t;
            } else this.lastValue = t;
        }
        this.views.forEach((t => t.updateFromUI()));
    }
    updateToUI() {
        if (false === this.toUI) {
            this.views.forEach((t => t.updateToUI()));
            return;
        }
        let t = UI.resolveValue(this.object, this.property);
        let i = false;
        if (null != this.template) {
            if (this.template instanceof HTMLElement) if ("boolean" === typeof this.attribute) {
                t = false === (t ?? false) ? false : true;
                if (t !== this.lastValue) {
                    const i = true !== this.toUI ? this.toUI(t, this.lastValue, this.property, this.object) : t;
                    if (void 0 !== i && i !== this.lastUIValue) {
                        if (i === this.attribute) this.views.push(UIView.create(this.element.parentElement, this.template.cloneNode(true), this.object, {
                            parent: this,
                            prepare: false,
                            sibling: this.element
                        })); else {
                            const t = this.views.pop();
                            t?.destroy();
                        }
                        this.lastValue = t;
                        this.lastUIValue = i;
                    }
                }
            } else {
                if (null == t) t = [];
                const e = this.arguments[0];
                const s = this.lastValue ?? [];
                if (t.length !== s.length) i = true; else for (let n = 0, h = t.length; n < h; n++) {
                    let h, r;
                    if (null == e) {
                        h = t[n];
                        r = s[n];
                    } else {
                        h = UI.resolveValue(t[n] ?? {}, e);
                        r = UI.resolveValue(s[n] ?? {}, e);
                    }
                    if (h !== r) {
                        i = true;
                        break;
                    }
                }
                if (!i) {
                    this.views.forEach((t => t.updateToUI()));
                    if (this.oneTime) this.oneTimeDone();
                    return;
                }
                const n = true !== this.toUI ? this.toUI(t, s, this.property, this.object) : t;
                if (null == n) {
                    this.views.forEach((t => t.updateToUI()));
                    if (this.oneTime) this.oneTimeDone();
                    return;
                }
                const h = this.lastUIValue ?? [];
                let r = 0;
                for (let t = 0, i = n.length, s = 0; t < i; t++, s++) {
                    let i, l;
                    if (null == e) {
                        i = n[t];
                        l = h[s];
                    } else {
                        i = UI.resolveValue(n[t] ?? {}, e);
                        l = UI.resolveValue(h[s] ?? {}, e);
                    }
                    if (i === l) r++; else break;
                }
                if (r === n.length && n.length === h.length) {
                    this.views.forEach((t => t.updateToUI()));
                    if (this.oneTime) this.oneTimeDone();
                    return;
                }
                const l = this.views.splice(0, r);
                let o = l[l.length - 1];
                for (let t = r, i = n.length, s = r; t < i; t++, s++) {
                    const i = n[t];
                    if ("string" !== typeof i) i.$index = t;
                    const s = this.views.shift();
                    if (null == s) {
                        const t = {
                            $model: {
                                [this.attribute]: i
                            },
                            $parent: this.object
                        };
                        const e = UIView.create(this.element.parentElement, this.template.cloneNode(true), t, {
                            parent: this,
                            prepare: false,
                            sibling: o?.element ?? this.element
                        });
                        l.push(e);
                        o = e;
                        continue;
                    }
                    const h = null == e ? i : UI.resolveValue(i ?? {}, e);
                    const r = s?.model.$model[this.attribute];
                    const a = null == e ? r : UI.resolveValue(r ?? {}, e);
                    if (h === a) {
                        l.push(s);
                        s.move(o?.element ?? this.element);
                        o = s;
                        continue;
                    }
                    if (!n.slice(t).map((t => null == e ? t : UI.resolveValue(t ?? {}, e))).includes(a)) {
                        s.destroy();
                        t--;
                        o = s;
                        continue;
                    }
                    this.views.unshift(s);
                    let u = false;
                    for (let t = 0, i = this.views.length; t < i; t++) {
                        const i = this.views[t];
                        const s = i?.model.$model[this.attribute];
                        const n = null == e ? s : UI.resolveValue(s ?? {}, e);
                        if (h === n) {
                            l.push(...this.views.splice(t, 1));
                            i.move(o?.element ?? this.element);
                            u = true;
                            o = i;
                            break;
                        }
                    }
                    if (!u) {
                        const t = {
                            $model: {
                                [this.attribute]: i
                            },
                            $parent: this.object
                        };
                        const e = UIView.create(this.element.parentElement, this.template.cloneNode(true), t, {
                            parent: this,
                            prepare: false,
                            sibling: o?.element ?? this.element
                        });
                        l.push(e);
                        o = e;
                    }
                }
                this.views.forEach((t => t.destroy()));
                this.views = l;
                this.lastValue = [ ...t ];
                this.lastUIValue = [ ...n ];
            } else if (null == this.value) {
                const i = UI.resolveValue(this.object, this.attribute);
                const e = i.template;
                const s = null == t ? i : i.create(t);
                this.value = t ?? i;
                this.views.push(UI.create(this.element.parentElement, e, s, {
                    parent: this,
                    prepare: true,
                    sibling: this.element
                }));
            }
        } else if (t !== this.lastValue) {
            const i = true !== this.toUI ? this.toUI(t, this.lastValue, this.property, this.object) : t;
            if (void 0 !== i && i !== this.lastUIValue) {
                const {target: e, property: s} = UI.resolveProperty(this.element, this.attribute);
                e[s] = i;
                this.lastValue = t;
                this.lastUIValue = i;
            }
        }
        this.views.forEach((t => t.updateToUI()));
        if (this.oneTime) this.oneTimeDone();
    }
    oneTimeDone() {
        this.toUI = false;
        this.fromUI = false;
    }
    updateAtEvents() {
        let t = this.events.shift();
        while (null != t) {
            const i = UI.resolveValue(this.object, this.property);
            i(t, this.object.$model, this.element, this.attribute, this.object);
            t = this.events.shift();
        }
        this.views.forEach((t => t.updateAtEvents()));
    }
    updateMove() {
        this.views.forEach((t => t.updateMove()));
    }
}

class UI {
    static initialize(t = true) {
        UI.initialized = true;
        if (false === t) return;
        if (true === t) {
            const t = () => {
                UI.update();
                requestAnimationFrame(t);
            };
            requestAnimationFrame(t);
            return;
        }
        setInterval((() => UI.update()), 1e3 / t);
    }
    static create(t, i, e = {}, s = {
        parent: null,
        prepare: true,
        sibling: null
    }) {
        if ("string" === typeof i) {
            const e = t?.ownerDocument ?? document;
            if (i.startsWith("#")) i = e.querySelector(i).innerHTML;
            const n = e.createElement("div");
            n.innerHTML = s.prepare ? UI.prepare(i) : i;
            i = n.firstElementChild;
        }
        const n = UIView.create(t, i, e, s);
        if (n.parent === UI) UI.views.push(n);
        if (!UI.initialized) UI.initialize();
        return n;
    }
    static play(t, i) {
        if ("string" === typeof t) {
            t = this.globals.animations.find((i => i.name === t)).clone();
            return t.play(i);
        }
        return t.play();
    }
    static parse(t, i, e, s) {
        const n = [];
        if (3 === t.nodeType) {
            let h = t.textContent;
            let r = h.match(UI.regexValue);
            while (null != r) {
                const l = r[1];
                let o = r[2];
                h = r[3];
                let a = false;
                if (o.startsWith("|")) {
                    a = true;
                    o = o.slice(1).trimStart();
                }
                let u = t.cloneNode();
                t.textContent = l;
                UI.parentElement(t, s).insertBefore(u, t.nextSibling);
                n.push(UI.bind({
                    selector: u,
                    attribute: "textContent",
                    object: i,
                    property: o,
                    parent: e,
                    oneTime: a
                }));
                t = u;
                u = t.cloneNode();
                u.textContent = h;
                UI.parentElement(t, s).insertBefore(u, t.nextSibling);
                t = u;
                r = h.match(UI.regexValue);
            }
        } else {
            n.push(...Object.keys(t.attributes ?? []).reverse().map((n => {
                const h = [];
                if (t instanceof Comment) return [];
                const r = t.attributes[n];
                if (r.name.startsWith("pui.")) {
                    const n = r.value.match(UI.regexAttribute);
                    let [h, l, o, a, u] = n;
                    let f;
                    let c;
                    let U = false;
                    if ("@" !== o) {
                        const e = l.match(/^'(.*?)'$/);
                        if (null != e) {
                            f = e[1];
                            t.setAttribute("value", f);
                            l = "option" === t.nodeName.toLowerCase() ? "selected" : "checked";
                            a = t => t ? f : void 0;
                            o = t => t === f;
                        } else if ("" === l) if (">" === a) {
                            const {target: e, property: s} = UI.resolveProperty(i, u);
                            e[s] = t;
                            return [];
                        } else {
                            const i = document.createComment(r.name);
                            UI.parentNode(t, s).insertBefore(i, t);
                            UI.parentNode(t, s).removeChild(t);
                            t.removeAttribute(r.name);
                            c = t;
                            t = i;
                            l = "=" === o;
                            o = true;
                            if ("|" === a) U = true;
                        } else if ("=" === a && "=" === o) {
                            const i = UI.parentNode(t, s);
                            if (8 !== i.nodeType) {
                                const e = document.createComment(r.name);
                                i.insertBefore(e, t);
                                i.removeChild(t);
                                t.removeAttribute(r.name);
                                t = e;
                            } else t = i;
                            c = l;
                            U = true;
                            o = true;
                        } else if ("*" === a) {
                            const i = document.createComment(r.name);
                            UI.parentNode(t, s).insertBefore(i, t);
                            UI.parentNode(t, s).removeChild(t);
                            t.removeAttribute(r.name);
                            c = t;
                            t = i;
                        } else if ("|" === a) U = true; else if ("checked" !== l) t.setAttribute(l, "");
                    }
                    return [ UI.bind({
                        selector: t,
                        attribute: l,
                        value: f,
                        object: i,
                        property: u,
                        template: c,
                        toUI: "string" === typeof o ? "<" === o : o,
                        fromUI: "string" === typeof a ? ">" === a : a,
                        atEvent: "@" === o,
                        parent: e,
                        oneTime: U
                    }) ];
                }
                const l = [ r.value ];
                let o = 0;
                let a = l[o].match(UI.regexValue);
                while (null != a) {
                    let {before: s, property: n, after: u} = a.groups;
                    let f = false;
                    if (n.startsWith("|")) {
                        f = true;
                        n = n.slice(1).trimStart();
                    }
                    h.push(UI.bind({
                        selector: t,
                        attribute: r.name,
                        object: i,
                        property: n,
                        oneTime: f,
                        toUI(i, e, s, n) {
                            if (this.oneTime) {
                                const t = l.indexOf(s);
                                if (t > -1) {
                                    l[t] = UI.resolveValue(n, s);
                                    l[t - 1] += l[t] + l[t + 1];
                                    l.splice(t, 2);
                                }
                            }
                            const h = l.map(((t, i) => {
                                if (i % 2 === 0) return t;
                                return UI.resolveValue(n, t);
                            })).join("");
                            t.setAttribute(r.name, h);
                            return h;
                        },
                        parent: e
                    }));
                    l[o++] = s;
                    l[o++] = n;
                    l[o] = u;
                    a = l[o].match(UI.regexValue);
                }
                return h;
            })).flat());
            if (t instanceof Comment) return n.filter((t => {
                if (null != t.template) return true;
                t.unbind();
                return false;
            }));
            if (!UI.leaveAttributes) for (let i = Object.keys(t.attributes ?? []).length - 1; i >= 0; i--) {
                const e = t.attributes[Object.keys(t.attributes ?? [])[i]];
                if (e.name.startsWith("pui.")) t.removeAttribute(e.name);
            }
            n.push(...Array.from(t.childNodes).map((t => UI.parse(t, i, e, s))).flat());
        }
        return n;
    }
    static bind(t) {
        const i = UIBinding.create(t);
        return i;
    }
    static unbind(t) {
        t.destroy();
        if (t.parent !== UI) {
            const i = t.parent.bindings;
            const e = i.indexOf(t);
            if (e > -1) i.splice(e, 1);
        }
    }
    static update() {
        this.views.forEach((t => t.updateFromUI()));
        this.views.forEach((t => t.updateToUI()));
        this.views.forEach((t => t.updateAtEvents()));
        const t = performance.now();
        [ ...this.views, this.globals ].forEach((i => i.updateAnimations(t)));
        this.views.forEach((t => {
            t.updateMove();
        }));
        this.destroyed.forEach((t => {
            switch (t.destroyed) {
              case "queue":
                if ("rendered" === t.state) t.destroyed = "destroy"; else t.updateToUI();
                break;

              case "destroy":
                {
                    t.terminate();
                    const i = this.destroyed.findIndex((i => t === i));
                    if (i > -1) this.destroyed.splice(i, 1);
                }
            }
        }));
    }
    static resolveProperty(t, i) {
        i = i.replace("[", ".").replace("]", ".");
        const e = i.split(".").filter((t => (t ?? "").length > 0));
        while ("$parent" === e[0] && null != t.$parent) {
            t = t.$parent;
            e.shift();
        }
        let s = "$model" in t ? t.$model : t;
        while (e.length > 1) s = s[e.shift()];
        return {
            target: s,
            property: e[0]
        };
    }
    static resolveValue(t, i) {
        let e = 0;
        do {
            const {target: e, property: s} = UI.resolveProperty(t, i);
            if (null != e && s in e) return e[s];
            t = t.$parent;
        } while (null != t && e++ < 1e3);
    }
    static parentElement(t, i) {
        const e = t.parentElement;
        if (null != e) return e;
        while (null != i && (null == i.element || i.element === t)) i = i.parent;
        return i?.element;
    }
    static parentNode(t, i) {
        const e = t.parentNode;
        if (null != e) return e;
        while (null != i && (null == i.element || i.element === t)) i = i.parent;
        return i?.element;
    }
    static prepare(t) {
        let i = t;
        t = "";
        let e = i.match(UI.regexReplace);
        while (null != e) {
            const [s, n, h, r] = e;
            if (h.match(/\S\s*===/)) t += `${n.trimEnd()}br PUI-UNRENDERED PUI.${UI.bindingCounter++}="${h}"`; else t += `${n} PUI.${UI.bindingCounter++}="${h}" `;
            i = r;
            e = i.match(UI.regexReplace);
        }
        t += i;
        return t;
    }
}

UI.initialized = false;

UI.id = 0;

UI.views = [];

UI.destroyed = [];

UI.globals = new UIView;

UI.leaveAttributes = false;

UI.regexReplace = /([\S\s]*?)\$\{([^}]*?[<=@!]=[*=>|][^}]*?)\}([\S\s]*)/m;

UI.regexAttribute = /^\s*(\S*?)\s*([<=@!])=([*=>|])\s*(\S*?)\s*$/;

UI.regexValue = /(?<before>[\S\s]*?)\$\{\s*(?<property>[\s\S]*?)\s*\}(?<after>[\S\s]*)/m;

UI.bindingCounter = 0;


//# sourceMappingURL=index.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @peasy-lib/peasy-physics */ "./node_modules/@peasy-lib/peasy-physics/dist/esm/index.mjs");
/* harmony import */ var _peasy_lib_peasy_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @peasy-lib/peasy-ui */ "./node_modules/@peasy-lib/peasy-ui/dist/esm/index.mjs");
/* harmony import */ var _peasy_lib_peasy_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @peasy-lib/peasy-input */ "./node_modules/@peasy-lib/peasy-input/dist/esm/index.mjs");




/********************************************** */
//PEASY-UI
/************************************************/
var template = "\n<div class=\"game\">\n  <div class=\"player\" ${ ==> player.element} style=\"translate: ${player.position.x}px ${player.position.y}px; left: -25px; top: -25px; rotate: ${player.angle}deg;\"></div>\n  <div class=\"asteroid\" ${ ==> asteroid.element} style=\"translate: ${asteroid.position.x}px ${asteroid.position.y}px; left: -40px; top: -40px;\"></div>\n  <canvas ${ ==> canvas}></canvas>\n</div>\n";
var THRUSTFORCE = 20;
var model = {
    canvas: null,
    player: {
        element: null,
        position: { x: 50, y: 50 },
        angle: 0,
    },
    asteroid: {
        element: null,
        position: { x: 120, y: 50 },
    },
};
_peasy_lib_peasy_ui__WEBPACK_IMPORTED_MODULE_1__.UI.create(document.body, template, model);
_peasy_lib_peasy_ui__WEBPACK_IMPORTED_MODULE_1__.UI.initialize(false);
var screenWidth;
var screenHeight;
window.addEventListener("DOMContentLoaded", function () {
    model.canvas.setAttribute("width", window.innerWidth.toString());
    model.canvas.setAttribute("height", window.innerHeight.toString());
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
});
window.addEventListener("resize", function () {
    model.canvas.setAttribute("width", window.innerWidth.toString());
    model.canvas.setAttribute("height", window.innerHeight.toString());
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
});
/********************************************** */
//PEASY-Physics
/************************************************/
var playerShape = {
    position: { x: 0, y: 0 },
    radius: undefined,
    size: undefined,
    alignment: undefined,
};
playerShape.size = new _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Vector(50, 50);
var asteroidShape = {
    position: { x: 0, y: 0 },
    radius: undefined,
    size: undefined,
    alignment: undefined,
};
asteroidShape.radius = 40;
var Entity = /** @class */ (function () {
    function Entity(position, orientation) {
        if (orientation === void 0) { orientation = 0; }
        this.position = position;
        this.orientation = orientation;
        this.shapes = [];
        this.forces = [];
        this.mass = 1;
        this.color = "";
    }
    return Entity;
}());
_peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.initialize({
    ctx: model.canvas.getContext("2d"),
    showAreas: true,
});
var player = new Entity(new _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Vector(250, 250));
player.shapes = [playerShape];
player.forces = [];
player.maxSpeed = 500;
player.color = "blue";
var asteroid = new Entity(new _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Vector(450, 450));
asteroid.shapes = [asteroidShape];
asteroid.forces = [];
asteroid.maxSpeed = 500;
asteroid.color = "red";
var entities = _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.addEntities([player, asteroid]);
player = entities[0];
asteroid = entities[1];
player.mass = 3;
asteroid.mass = 10;
var ang2Rad = function (a) {
    return a * (Math.PI / 180);
};
var thrust = function () {
    var tempX = THRUSTFORCE * Math.cos(ang2Rad(_peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].orientation));
    var tempY = THRUSTFORCE * Math.sin(ang2Rad(_peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].orientation));
    var dir = new _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Vector(tempX, tempY);
    _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].addForce({
        name: "thrust",
        direction: dir,
        duration: 0,
        magnitude: 500,
    });
};
var reverse = function () {
    var currentAngle = _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].orientation;
    var reverseAngle = currentAngle + 180;
    var tempX = THRUSTFORCE * Math.cos(ang2Rad(reverseAngle));
    var tempY = THRUSTFORCE * Math.sin(ang2Rad(reverseAngle));
    var dir = new _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Vector(tempX, tempY);
    _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].addForce({
        name: "reverse",
        direction: dir,
        duration: 0,
        magnitude: 500,
    });
};
var turnLeft = function () {
    _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].orientation += -3;
    console.log("turn L");
};
var turnRight = function () {
    _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].orientation += 3;
    console.log("turn R");
};
/*************************************************/
// Peasy-Input
/*************************************************/
var mapping = _peasy_lib_peasy_input__WEBPACK_IMPORTED_MODULE_3__.Input.map({
    ArrowUp: "thrust",
    ArrowDown: "reverse",
    ArrowLeft: "turnL",
    ArrowRight: "turnR",
});
/**************************************************
 *  Screen Collision Management
 **************************************************/
var playerScreenCollision = function () {
    //check for screen collision
    if (model.player.position.x > screenWidth) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].position.x = -10;
        model.player.position.x = -10;
    }
    if (model.player.position.x < -25) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].position.x = screenWidth;
        model.player.position.x = screenWidth;
    }
    if (model.player.position.y > screenHeight) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].position.y = -10;
        model.player.position.y = -10;
    }
    if (model.player.position.y < -25) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].position.y = screenHeight;
        model.player.position.y = screenHeight;
    }
};
var asteroidScreenCollision = function () {
    //check for screen collision
    if (model.asteroid.position.x > screenWidth) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[1].position.x = -10;
        model.asteroid.position.x = -10;
    }
    if (model.asteroid.position.x < -25) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[1].position.x = screenWidth;
        model.asteroid.position.x = screenWidth;
    }
    if (model.asteroid.position.y > screenHeight) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[1].position.y = -10;
        model.asteroid.position.y = -10;
    }
    if (model.asteroid.position.y < -25) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[1].position.y = screenHeight;
        model.asteroid.position.y = screenHeight;
    }
};
/********************************************** */
//Game Loop
/************************************************/
var startime, lasttime;
var game_loop = function (timestamp) {
    if (startime == undefined) {
        startime = timestamp;
        lasttime = timestamp;
    }
    var deltaTime = (timestamp - lasttime) / 1000;
    if (deltaTime > 1.5) {
        deltaTime = 0;
        lasttime = timestamp;
    }
    //check inputs
    if (_peasy_lib_peasy_input__WEBPACK_IMPORTED_MODULE_3__.Input.is("thrust"))
        thrust();
    if (_peasy_lib_peasy_input__WEBPACK_IMPORTED_MODULE_3__.Input.is("reverse"))
        reverse();
    if (_peasy_lib_peasy_input__WEBPACK_IMPORTED_MODULE_3__.Input.is("turnL"))
        turnLeft();
    if (_peasy_lib_peasy_input__WEBPACK_IMPORTED_MODULE_3__.Input.is("turnR"))
        turnRight();
    _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.update(deltaTime, timestamp);
    model.player.position = _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].position;
    model.player.angle = _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[0].orientation;
    model.asteroid.position = _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_2__.Physics.entities[1].position;
    playerScreenCollision();
    asteroidScreenCollision();
    _peasy_lib_peasy_ui__WEBPACK_IMPORTED_MODULE_1__.UI.update();
    requestAnimationFrame(game_loop);
    lasttime = timestamp;
};
requestAnimationFrame(game_loop);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWMsS0FBSyxVQUFVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYyxLQUFLLFVBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpVEFBaVQ7QUFDalQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU8sS0FBSyxPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixhQUFhLEdBQUcsYUFBYSxHQUFHLFNBQVMsR0FBRyxTQUFTO0FBQ3ZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0hBQStILDhDQUE4QztBQUM3SztBQUNBO0FBQ0EsbUhBQW1IO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLCtDQUErQywyQ0FBMkMsK0NBQStDLGtCQUFrQjtBQUN0TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNk9BQTZPO0FBQzdPO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTyxxQkFBcUIsT0FBTyxlQUFlLEVBQUUsR0FBRyxFQUFFO0FBQ2pGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsT0FBTztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELE9BQU87QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZELHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUV1SDtBQUN2SDs7Ozs7Ozs7Ozs7Ozs7OztBQ3IxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQ0FBZ0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FB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QyxLQUFLLEdBQUcscUZBQStCLENBQUM7SUFDckQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsa0ZBQTRCLENBQUM7SUFFdkQscUJBQXFCLEVBQUUsQ0FBQztJQUN4Qix1QkFBdUIsRUFBRSxDQUFDO0lBRTFCLDBEQUFTLEVBQUUsQ0FBQztJQUNaLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLFFBQVEsR0FBRyxTQUFTLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUYscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BlYXN5LXBoeXNpY3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BlYXN5LXBoeXNpY3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BlYXN5LXBoeXNpY3MvLi9ub2RlX21vZHVsZXMvQHBlYXN5LWxpYi9wZWFzeS1pbnB1dC9kaXN0L2VzbS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy8uL25vZGVfbW9kdWxlcy9AcGVhc3ktbGliL3BlYXN5LXBoeXNpY3MvZGlzdC9lc20vaW5kZXgubWpzIiwid2VicGFjazovL3BlYXN5LXBoeXNpY3MvLi9ub2RlX21vZHVsZXMvQHBlYXN5LWxpYi9wZWFzeS11aS9kaXN0L2VzbS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BlYXN5LXBoeXNpY3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BlYXN5LXBoeXNpY3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BlYXN5LXBoeXNpY3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9hcnJvdy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKnN0eWxlLmNzcyovXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFzdGVyb2lkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFlBQVk7QUFDWjtFQUNFLDBCQUEwQjtFQUMxQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQix5REFBMkM7RUFDM0MsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKnN0eWxlLmNzcyovXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvYXJyb3cucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFzdGVyb2lkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgS2V5Ym9hcmRNYXBwaW5nIHtcbiAgY29uc3RydWN0b3IobWFwcGluZ3MsIGNhbGxiYWNrLCBlZmZlY3RNb2RlLCBrZXltYXBNb2RlKSB7XG4gICAgdGhpcy5tYXBwaW5ncyA9IG1hcHBpbmdzO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLmVmZmVjdE1vZGUgPSBlZmZlY3RNb2RlO1xuICAgIHRoaXMua2V5bWFwTW9kZSA9IGtleW1hcE1vZGU7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcHBpbmdzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aGlzLm1hcHBpbmdzID0gW3RoaXMubWFwcGluZ3NdO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm1hcHBpbmdzKSkge1xuICAgICAgdGhpcy5tYXBwaW5ncyA9IFsuLi50aGlzLm1hcHBpbmdzXS5yZWR1Y2UoKG1hcHBpbmdzMiwgdmFsdWUpID0+IHtcbiAgICAgICAgbWFwcGluZ3MyW3ZhbHVlXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbWFwcGluZ3MyO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLm1hcHBpbmdzKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLm1hcHBpbmdzW2tleV07XG4gICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aGlzLm1hcHBpbmdzW2tleV0gPSB7XG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIHJlcGVhdDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdGhpcy5tYXBwaW5nc1trZXldLm1hcHBpbmcgPSB0aGlzO1xuICAgIH1cbiAgfVxuICBtYXBzKGtleXMpIHtcbiAgICByZXR1cm4gdGhpcy5tYXBwaW5nc1trZXlzXTtcbiAgfVxuICB1bm1hcCgpIHtcbiAgICBLZXlib2FyZC51bm1hcCh0aGlzKTtcbiAgfVxufVxuXG5jb25zdCBfS2V5Ym9hcmQgPSBjbGFzcyB7XG4gIHN0YXRpYyBpbml0aWFsaXplKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleUNoYW5nZSk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleUNoYW5nZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc3RhdGljIHRlcm1pbmF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5Q2hhbmdlKTtcbiAgICB0aGlzLmVsZW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleUNoYW5nZSk7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgfVxuICBzdGF0aWMgbWFwKG1hcHBpbmdzLCBjYWxsYmFjaywgZWZmZWN0TW9kZSA9IFwiaW50ZXJ2YWxcIiwga2V5bWFwTW9kZSA9IFwiYWRkXCIpIHtcbiAgICBjb25zdCBtYXBwaW5nID0gbmV3IEtleWJvYXJkTWFwcGluZyhtYXBwaW5ncywgY2FsbGJhY2ssIGVmZmVjdE1vZGUsIGtleW1hcE1vZGUpO1xuICAgIHRoaXMubWFwcGluZ3MudW5zaGlmdChtYXBwaW5nKTtcbiAgICByZXR1cm4gbWFwcGluZztcbiAgfVxuICBzdGF0aWMgdW5tYXAobWFwcGluZykge1xuICAgIHRoaXMubWFwcGluZ3MgPSB0aGlzLm1hcHBpbmdzLmZpbHRlcigobSkgPT4gbSAhPT0gbWFwcGluZyk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5wcmVzc2VkLmtleXMoKSkge1xuICAgICAgaWYgKHRoaXMucHJlc3NlZC5nZXQoa2V5KT8ua2V5bWFwLm1hcHBpbmcgPT09IG1hcHBpbmcpIHtcbiAgICAgICAgdGhpcy5wcmVzc2VkLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxhc3RQcmVzc2VkID0gWy4uLnRoaXMucHJlc3NlZC5rZXlzKCldO1xuICB9XG4gIHN0YXRpYyByZXNvbHZlKGtleXMsIGV2ZW50VHlwZSkge1xuICAgIGNvbnN0IG1hcHBlZCA9IHRoaXMubWFwcGVkKGtleXMpO1xuICAgIGlmIChtYXBwZWQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWFwcGVkLm1hcHBpbmc/LmVmZmVjdE1vZGUgPT09IFwiaW5zdGFudFwiKSB7XG4gICAgICBtYXBwZWQubWFwcGluZy5jYWxsYmFjaz8uKG1hcHBlZC5hY3Rpb24sIGV2ZW50VHlwZSA9PT0gXCJrZXlkb3duXCIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXZlbnRUeXBlID09PSBcImtleWRvd25cIikge1xuICAgICAgaWYgKCF0aGlzLnByZXNzZWQuaGFzKGtleXMpKSB7XG4gICAgICAgIHRoaXMucHJlc3NlZC5zZXQoa2V5cywgeyBrZXltYXA6IG1hcHBlZCwgcmVwZWF0OiAwLCBkb25lOiBmYWxzZSwgZG9uZUlzOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gXCJrZXl1cFwiKSB7XG4gICAgICB0aGlzLnByZXNzZWQuZGVsZXRlKGtleXMpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgdXBkYXRlKGRlbHRhVGltZSkge1xuICAgIHRoaXMucHJlc3NlZC5mb3JFYWNoKChtYXBwZWQsIGtleSkgPT4ge1xuICAgICAgaWYgKG1hcHBlZC5yZXBlYXQgPT09IDAgfHwgbWFwcGVkLmtleW1hcC5yZXBlYXQgJiYgbWFwcGVkLnJlcGVhdCA8PSAwKSB7XG4gICAgICAgIG1hcHBlZC5rZXltYXAubWFwcGluZz8uY2FsbGJhY2s/LihtYXBwZWQua2V5bWFwLmFjdGlvbiwgdHJ1ZSwgZGVsdGFUaW1lKTtcbiAgICAgICAgbWFwcGVkLnJlcGVhdCArPSBJbnB1dC5ycHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIW1hcHBlZC5rZXltYXAucmVwZWF0KSB7XG4gICAgICAgICAgaWYgKCFtYXBwZWQuZG9uZSkge1xuICAgICAgICAgICAgbWFwcGVkLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXBwZWQucmVwZWF0IC09IGRlbHRhVGltZSAqIDFlMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubGFzdFByZXNzZWQuZm9yRWFjaCgoa2V5cykgPT4ge1xuICAgICAgaWYgKCF0aGlzLnByZXNzZWQuaGFzKGtleXMpKSB7XG4gICAgICAgIGNvbnN0IG1hcHBlZCA9IHRoaXMubWFwcGVkKGtleXMpO1xuICAgICAgICBtYXBwZWQ/Lm1hcHBpbmcuY2FsbGJhY2s/LihtYXBwZWQuYWN0aW9uLCBmYWxzZSwgZGVsdGFUaW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxhc3RQcmVzc2VkID0gWy4uLnRoaXMucHJlc3NlZC5rZXlzKCldO1xuICB9XG4gIHN0YXRpYyBtYXBwZWQoa2V5cykge1xuICAgIGxldCBtYXBwZWQ7XG4gICAgZm9yIChjb25zdCBtYXBwaW5nIG9mIHRoaXMubWFwcGluZ3MpIHtcbiAgICAgIG1hcHBlZCA9IG1hcHBpbmcubWFwcyhrZXlzKTtcbiAgICAgIGlmIChtYXBwZWQgIT0gbnVsbCB8fCBtYXBwaW5nLmtleW1hcE1vZGUgPT09IFwicmVwbGFjZVwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFwcGVkO1xuICB9XG4gIHN0YXRpYyBpcyhhY3Rpb24pIHtcbiAgICBmb3IgKGNvbnN0IHByZXNzZWQgb2YgdGhpcy5wcmVzc2VkLnZhbHVlcygpKSB7XG4gICAgICBpZiAocHJlc3NlZC5rZXltYXAuYWN0aW9uICE9PSBhY3Rpb24pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAocHJlc3NlZC5yZXBlYXQgPT09IDAgfHwgcHJlc3NlZC5rZXltYXAucmVwZWF0ICYmIHByZXNzZWQucmVwZWF0IDw9IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXByZXNzZWQua2V5bWFwLnJlcGVhdCAmJiAhcHJlc3NlZC5kb25lSXMpIHtcbiAgICAgICAgICBwcmVzc2VkLmRvbmVJcyA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xubGV0IEtleWJvYXJkID0gX0tleWJvYXJkO1xuS2V5Ym9hcmQubWFwcGluZ3MgPSBbXTtcbktleWJvYXJkLnByZXNzZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuS2V5Ym9hcmQubGFzdFByZXNzZWQgPSBbXTtcbktleWJvYXJkLmtleUNoYW5nZSA9IChldmVudCkgPT4ge1xuICBsZXQga2V5cyA9IGV2ZW50LmtleTtcbiAgaWYgKFtcIkNvbnRyb2xcIiwgXCJBbHRcIiwgXCJTaGlmdFwiXS5pbmNsdWRlcyhrZXlzKSkge1xuICAgIGlmIChldmVudC50eXBlID09PSBcImtleWRvd25cIikge1xuICAgICAgZm9yIChjb25zdCBwcmVzc2VkIG9mIF9LZXlib2FyZC5wcmVzc2VkLmtleXMoKSkge1xuICAgICAgICBjb25zdCBwcmVzc2VkS2V5cyA9IHByZXNzZWQuc3BsaXQoXCIrXCIpO1xuICAgICAgICBpZiAocHJlc3NlZEtleXMuaW5jbHVkZXMoa2V5cykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW9kaWZpZWRQcmVzc2VkID0gcHJlc3NlZEtleXMucG9wKCk7XG4gICAgICAgIGZvciAoY29uc3QgbW9kaWZpZXIgb2YgW1wiU2hpZnRcIiwgXCJBbHRcIiwgXCJDb250cm9sXCJdKSB7XG4gICAgICAgICAgaWYgKGtleXMgPT09IG1vZGlmaWVyIHx8IHByZXNzZWRLZXlzLmluY2x1ZGVzKG1vZGlmaWVyKSkge1xuICAgICAgICAgICAgbW9kaWZpZWRQcmVzc2VkID0gYCR7bW9kaWZpZXJ9KyR7bW9kaWZpZWRQcmVzc2VkfWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9LZXlib2FyZC5yZXNvbHZlKHByZXNzZWQsIFwia2V5dXBcIik7XG4gICAgICAgIF9LZXlib2FyZC5yZXNvbHZlKG1vZGlmaWVkUHJlc3NlZCwgXCJrZXlkb3duXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gXCJrZXl1cFwiKSB7XG4gICAgICBmb3IgKGNvbnN0IHByZXNzZWQgb2YgX0tleWJvYXJkLnByZXNzZWQua2V5cygpKSB7XG4gICAgICAgIGNvbnN0IHByZXNzZWRLZXlzID0gcHJlc3NlZC5zcGxpdChcIitcIik7XG4gICAgICAgIGlmICghcHJlc3NlZEtleXMuaW5jbHVkZXMoa2V5cykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RpZmllZFByZXNzZWQgPSBwcmVzc2VkS2V5cy5maWx0ZXIoKGtleSkgPT4ga2V5ICE9PSBrZXlzKS5qb2luKFwiK1wiKTtcbiAgICAgICAgX0tleWJvYXJkLnJlc29sdmUocHJlc3NlZCwgXCJrZXl1cFwiKTtcbiAgICAgICAgX0tleWJvYXJkLnJlc29sdmUobW9kaWZpZWRQcmVzc2VkLCBcImtleWRvd25cIik7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAga2V5cyA9IGBTaGlmdCske2tleXN9YDtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmFsdEtleSkge1xuICAgICAga2V5cyA9IGBBbHQrJHtrZXlzfWA7XG4gICAgfVxuICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICBrZXlzID0gYENvbnRyb2wrJHtrZXlzfWA7XG4gICAgfVxuICAgIF9LZXlib2FyZC5yZXNvbHZlKGtleXMsIGV2ZW50LnR5cGUpO1xuICB9XG59O1xuXG5jbGFzcyBNb3VzZU1hcHBpbmcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICB1bm1hcCgpIHtcbiAgICBNb3VzZS51bm1hcCh0aGlzKTtcbiAgfVxufVxuXG5jbGFzcyBNb3VzZSB7XG4gIHN0YXRpYyBpbml0aWFsaXplKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHN0YXRpYyB0ZXJtaW5hdGUoKSB7XG4gIH1cbiAgc3RhdGljIG1hcCgpIHtcbiAgICBjb25zdCBtYXBwaW5nID0gbmV3IE1vdXNlTWFwcGluZygpO1xuICAgIHRoaXMubWFwcGluZ3MudW5zaGlmdChtYXBwaW5nKTtcbiAgICByZXR1cm4gbWFwcGluZztcbiAgfVxuICBzdGF0aWMgdW5tYXAobWFwcGluZykge1xuICAgIHRoaXMubWFwcGluZ3MgPSB0aGlzLm1hcHBpbmdzLmZpbHRlcigobSkgPT4gbSAhPT0gbWFwcGluZyk7XG4gIH1cbiAgc3RhdGljIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgfVxuICBzdGF0aWMgaXMoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5Nb3VzZS5tYXBwaW5ncyA9IFtdO1xuXG5jb25zdCBfSW5wdXQgPSBjbGFzcyB7XG4gIHN0YXRpYyBpbml0aWFsaXplKHJwcywgckFGID0gdHJ1ZSwgZWxlbWVudCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgICBfSW5wdXQuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMucnBzID0gcnBzO1xuICAgIEtleWJvYXJkLmluaXRpYWxpemUoZWxlbWVudCk7XG4gICAgaWYgKHJBRiA9PT0gdHJ1ZSkge1xuICAgICAgbGV0IGxhc3Q7XG4gICAgICBjb25zdCBzdGFydCA9IChub3cpID0+IHtcbiAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHRpY2sgPSAobm93KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IChub3cgLSBsYXN0KSAvIDFlMztcbiAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgX0lucHV0LnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgICB9O1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0YXJ0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc3RhdGljIHRlcm1pbmF0ZSgpIHtcbiAgICBLZXlib2FyZC50ZXJtaW5hdGUoKTtcbiAgfVxuICBzdGF0aWMgbWFwKG1hcHBpbmdzLCBjYWxsYmFjaywgZWZmZWN0TW9kZSA9IFwiaW50ZXJ2YWxcIiwga2V5bWFwTW9kZSA9IFwiYWRkXCIpIHtcbiAgICBpZiAoIV9JbnB1dC5pbml0aWFsaXplZCkge1xuICAgICAgX0lucHV0LmluaXRpYWxpemUoNjApO1xuICAgIH1cbiAgICByZXR1cm4gS2V5Ym9hcmQubWFwKG1hcHBpbmdzLCBjYWxsYmFjaywgZWZmZWN0TW9kZSwga2V5bWFwTW9kZSk7XG4gIH1cbiAgc3RhdGljIHVubWFwKG1hcHBpbmcpIHtcbiAgICBpZiAobWFwcGluZyBpbnN0YW5jZW9mIEtleWJvYXJkTWFwcGluZykge1xuICAgICAgS2V5Ym9hcmQudW5tYXAobWFwcGluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE1vdXNlLnVubWFwKG1hcHBpbmcpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgdXBkYXRlKGRlbHRhVGltZSkge1xuICAgIEtleWJvYXJkLnVwZGF0ZShkZWx0YVRpbWUpO1xuICB9XG4gIHN0YXRpYyBpcyhhY3Rpb24pIHtcbiAgICBpZiAoIV9JbnB1dC5pbml0aWFsaXplZCkge1xuICAgICAgX0lucHV0LmluaXRpYWxpemUoNjApO1xuICAgIH1cbiAgICByZXR1cm4gS2V5Ym9hcmQuaXMoYWN0aW9uKSB8fCBNb3VzZS5pcyhhY3Rpb24pO1xuICB9XG59O1xubGV0IElucHV0ID0gX0lucHV0O1xuSW5wdXQuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuZXhwb3J0IHsgSW5wdXQsIEtleWJvYXJkLCBLZXlib2FyZE1hcHBpbmcgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3ViV3B6SWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhMlY1WW05aGNtUXRiV0Z3Y0dsdVp5NTBjeUlzSWk0dUx5NHVMM055WXk5clpYbGliMkZ5WkM1MGN5SXNJaTR1THk0dUwzTnlZeTl0YjNWelpTMXRZWEJ3YVc1bkxuUnpJaXdpTGk0dkxpNHZjM0pqTDIxdmRYTmxMblJ6SWl3aUxpNHZMaTR2YzNKakwybHVjSFYwTG5SeklsMHNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJRWxMWlhsTllYQndhVzVuTENCTFpYbGliMkZ5WkN3Z1MyVjVRMkZzYkdKaFkyc3NJRXRsZVVWbVptVmpkRTF2WkdVc0lFdGxlVzFoY0UxdlpHVWdmU0JtY205dElGd2lMaTlyWlhsaWIyRnlaRndpTzF4dVhHNWxlSEJ2Y25RZ1kyeGhjM01nUzJWNVltOWhjbVJOWVhCd2FXNW5JSHRjYmlBZ2NIVmliR2xqSUdOdmJuTjBjblZqZEc5eUtGeHVJQ0FnSUhCMVlteHBZeUJ0WVhCd2FXNW5jem9nYzNSeWFXNW5JSHdnYzNSeWFXNW5XMTBnZkNCU1pXTnZjbVE4YzNSeWFXNW5MQ0JKUzJWNVRXRndjR2x1Wno0c1hHNGdJQ0FnY0hWaWJHbGpJR05oYkd4aVlXTnJPaUJMWlhsRFlXeHNZbUZqYXlCOElIVnVaR1ZtYVc1bFpDeGNiaUFnSUNCd2RXSnNhV01nWldabVpXTjBUVzlrWlRvZ1MyVjVSV1ptWldOMFRXOWtaU3hjYmlBZ0lDQndkV0pzYVdNZ2EyVjViV0Z3VFc5a1pUb2dTMlY1YldGd1RXOWtaU3hjYmlBZ0tTQjdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQjBhR2x6TG0xaGNIQnBibWR6SUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYQndhVzVuY3lBOUlGdDBhR2x6TG0xaGNIQnBibWR6WFR0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0VGeWNtRjVMbWx6UVhKeVlYa29kR2hwY3k1dFlYQndhVzVuY3lrcElIdGNiaUFnSUNBZ0lIUm9hWE11YldGd2NHbHVaM01nUFNCYkxpNHVkR2hwY3k1dFlYQndhVzVuYzEwdWNtVmtkV05sS0NodFlYQndhVzVuY3l3Z2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdLRzFoY0hCcGJtZHpJR0Z6SUdGdWVTbGJkbUZzZFdWZElEMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdFlYQndhVzVuY3p0Y2JpQWdJQ0FnSUgwc0lIdDlLVHRjYmlBZ0lDQjlYRzRnSUNBZ1ptOXlJQ2hqYjI1emRDQnJaWGtnYVc0Z2RHaHBjeTV0WVhCd2FXNW5jeWtnZTF4dUlDQWdJQ0FnWTI5dWMzUWdZV04wYVc5dUlEMGdkR2hwY3k1dFlYQndhVzVuYzF0clpYbGRPMXh1SUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJoWTNScGIyNGdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldGd2NHbHVaM05iYTJWNVhTQTlJSHRjYmlBZ0lDQWdJQ0FnSUNCaFkzUnBiMjQ2SUdGamRHbHZiaXhjYmlBZ0lDQWdJQ0FnSUNCeVpYQmxZWFE2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0IwYUdsekxtMWhjSEJwYm1kelcydGxlVjB1YldGd2NHbHVaeUE5SUhSb2FYTTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjSFZpYkdsaklHMWhjSE1vYTJWNWN6b2djM1J5YVc1bktUb2dTVXRsZVUxaGNIQnBibWNnZkNCMWJtUmxabWx1WldRZ2UxeHVJQ0FnSUhKbGRIVnliaUFvZEdocGN5NXRZWEJ3YVc1bmN5QmhjeUJoYm5rcFcydGxlWE5kTzF4dUlDQjlYRzVjYmlBZ2NIVmliR2xqSUhWdWJXRndLQ2s2SUhadmFXUWdlMXh1SUNBZ0lFdGxlV0p2WVhKa0xuVnViV0Z3S0hSb2FYTXBPMXh1SUNCOVhHNWNiaUFnTHk4Z2NIVmliR2xqSUdGa1pFMWhjSEJwYm1jb2EyVjVjem9nYzNSeWFXNW5JSHdnYzNSeWFXNW5XMTBzSUdOaGJHeGlZV05yT2lCTFpYbERZV3hzWW1GamF5a2dlMXh1SUNBdkx5QWdJR2xtSUNnaFFYSnlZWGt1YVhOQmNuSmhlU2hyWlhsektTa2dlMXh1SUNBdkx5QWdJQ0FnYTJWNWN5QTlJRnRyWlhselhUdGNiaUFnTHk4Z0lDQjlYRzRnSUM4dklDQWdhMlY1Y3k1bWIzSkZZV05vS0d0bGVTQTlQaUIwYUdsekxtMWhjSEJwYm1kekxuTmxkQ2hyWlhrc0lHTmhiR3hpWVdOcktTazdYRzRnSUM4dklIMWNiaUFnTHk4Z2NIVmliR2xqSUhKbGJXOTJaVTFoY0hCcGJtY29hMlY1T2lCemRISnBibWNwSUh0Y2JpQWdMeThnSUNCMGFHbHpMbTFoY0hCcGJtZHpMbVJsYkdWMFpTaHJaWGtwTzF4dUlDQXZMeUI5WEc1OVhHNGlMQ0pwYlhCdmNuUWdleUJKYm5CMWRDQjlJR1p5YjIwZ1hDSXVMMmx1Y0hWMFhDSTdYRzVwYlhCdmNuUWdleUJMWlhsaWIyRnlaRTFoY0hCcGJtY2dmU0JtY205dElGd2lMaTlyWlhsaWIyRnlaQzF0WVhCd2FXNW5YQ0k3WEc1Y2JtVjRjRzl5ZENCMGVYQmxJRXRsZVVOaGJHeGlZV05ySUQwZ0tHdGxlVG9nYzNSeWFXNW5MQ0J3Y21WemMyVmtPaUJpYjI5c1pXRnVMQ0JrWld4MFlWUnBiV1U2SUc1MWJXSmxjaWtnUFQ0Z2RtOXBaRHRjYm1WNGNHOXlkQ0IwZVhCbElFdGxlVzFoY0UxdlpHVWdQU0FuWVdSa0p5QjhJQ2R5WlhCc1lXTmxKenRjYm1WNGNHOXlkQ0IwZVhCbElFdGxlVVZtWm1WamRFMXZaR1VnUFNBbmFXNXpkR0Z1ZENjZ2ZDQW5hVzUwWlhKMllXd25PMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVsTFpYbE5ZWEJ3YVc1bklIdGNiaUFnWVdOMGFXOXVPaUJ6ZEhKcGJtYzdYRzRnSUhKbGNHVmhkRG9nWW05dmJHVmhianRjYmlBZ2JXRndjR2x1Wno4NklFdGxlV0p2WVhKa1RXRndjR2x1Wnp0Y2JuMWNiaTh2SUZSUFJFODZJRUZrWkNCemRYQndiM0owSUdadmNpQnRkV3gwYVhCc1pTQnJaWGx6SUdadmNpQnZibVVnWVdOMGFXOXVYRzVsZUhCdmNuUWdZMnhoYzNNZ1MyVjVZbTloY21RZ2UxeHVJQ0J3Y21sMllYUmxJSE4wWVhScFl5QmxiR1Z0Wlc1ME9pQklWRTFNUld4bGJXVnVkQ0I4SUc1MWJHdzdYRzRnSUhCeWFYWmhkR1VnYzNSaGRHbGpJRzFoY0hCcGJtZHpPaUJMWlhsaWIyRnlaRTFoY0hCcGJtZGJYU0E5SUZ0ZE8xeHVJQ0F2THlCd2NtbDJZWFJsSUhOMFlYUnBZeUJ0WVhCd2FXNW5jem9nVFdGd1BITjBjbWx1Wnl3Z1MyVjVRMkZzYkdKaFkycytJRDBnYm1WM0lFMWhjQ2dwTzF4dUlDQndjbWwyWVhSbElITjBZWFJwWXlCeVpXRmtiMjVzZVNCd2NtVnpjMlZrT2lCTllYQThjM1J5YVc1bkxDQjdJR3RsZVcxaGNEb2dTVXRsZVUxaGNIQnBibWNzSUhKbGNHVmhkRG9nYm5WdFltVnlMQ0JrYjI1bE9pQmliMjlzWldGdUxDQmtiMjVsU1hNNklHSnZiMnhsWVc0Z2ZUNGdQU0J1WlhjZ1RXRndLQ2s3WEc0Z0lIQnlhWFpoZEdVZ2MzUmhkR2xqSUd4aGMzUlFjbVZ6YzJWa09pQnpkSEpwYm1kYlhTQTlJRnRkTzF4dVhHNGdJSEIxWW14cFl5QnpkR0YwYVdNZ2FXNXBkR2xoYkdsNlpTaGxiR1Z0Wlc1ME9pQklWRTFNUld4bGJXVnVkQ2tnZTF4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZENBOUlHVnNaVzFsYm5RN1hHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oydGxlV1J2ZDI0bkxDQjBhR2x6TG10bGVVTm9ZVzVuWlNrN1hHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oydGxlWFZ3Snl3Z2RHaHBjeTVyWlhsRGFHRnVaMlVwTzF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2NIVmliR2xqSUhOMFlYUnBZeUIwWlhKdGFXNWhkR1VvS1NCN1hHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFB5NXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLQ2RyWlhsa2IzZHVKeXdnZEdocGN5NXJaWGxEYUdGdVoyVXBPMXh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkRDh1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lnbmEyVjVkWEFuTENCMGFHbHpMbXRsZVVOb1lXNW5aU2s3WEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwSUQwZ2JuVnNiRHRjYmlBZ2ZWeHVYRzRnSUhCMVlteHBZeUJ6ZEdGMGFXTWdiV0Z3S0cxaGNIQnBibWR6T2lCemRISnBibWNnZkNCemRISnBibWRiWFNCOElGSmxZMjl5WkR4emRISnBibWNzSUVsTFpYbE5ZWEJ3YVc1blBpd2dZMkZzYkdKaFkycy9PaUJMWlhsRFlXeHNZbUZqYXl3Z1pXWm1aV04wVFc5a1pUb2dTMlY1UldabVpXTjBUVzlrWlNBOUlDZHBiblJsY25aaGJDY3NJR3RsZVcxaGNFMXZaR1U2SUV0bGVXMWhjRTF2WkdVZ1BTQW5ZV1JrSnlrNklFdGxlV0p2WVhKa1RXRndjR2x1WnlCN1hHNGdJQ0FnWTI5dWMzUWdiV0Z3Y0dsdVp5QTlJRzVsZHlCTFpYbGliMkZ5WkUxaGNIQnBibWNvYldGd2NHbHVaM01zSUdOaGJHeGlZV05yTENCbFptWmxZM1JOYjJSbExDQnJaWGx0WVhCTmIyUmxLVHRjYmlBZ0lDQjBhR2x6TG0xaGNIQnBibWR6TG5WdWMyaHBablFvYldGd2NHbHVaeWs3WEc0Z0lDQWdjbVYwZFhKdUlHMWhjSEJwYm1jN1hHNGdJSDFjYmlBZ2NIVmliR2xqSUhOMFlYUnBZeUIxYm0xaGNDaHRZWEJ3YVc1bk9pQkxaWGxpYjJGeVpFMWhjSEJwYm1jcE9pQjJiMmxrSUh0Y2JpQWdJQ0IwYUdsekxtMWhjSEJwYm1keklEMGdkR2hwY3k1dFlYQndhVzVuY3k1bWFXeDBaWElvYlNBOVBpQnRJQ0U5UFNCdFlYQndhVzVuS1R0Y2JpQWdJQ0JtYjNJZ0tHTnZibk4wSUd0bGVTQnZaaUIwYUdsekxuQnlaWE56WldRdWEyVjVjeWdwS1NCN1hHNGdJQ0FnSUNCcFppQW9kR2hwY3k1d2NtVnpjMlZrTG1kbGRDaHJaWGtwUHk1clpYbHRZWEF1YldGd2NHbHVaeUE5UFQwZ2JXRndjR2x1WnlrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CeVpYTnpaV1F1WkdWc1pYUmxLR3RsZVNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdWJHRnpkRkJ5WlhOelpXUWdQU0JiTGk0dWRHaHBjeTV3Y21WemMyVmtMbXRsZVhNb0tWMDdYRzRnSUgxY2JseHVJQ0J3ZFdKc2FXTWdjM1JoZEdsaklHdGxlVU5vWVc1blpTQTlJQ2hsZG1WdWREb2dTMlY1WW05aGNtUkZkbVZ1ZENrNklIWnZhV1FnUFQ0Z2UxeHVJQ0FnSUd4bGRDQnJaWGx6SUQwZ1pYWmxiblF1YTJWNU8xeHVJQ0FnSUdsbUlDaGJKME52Ym5SeWIyd25MQ0FuUVd4MEp5d2dKMU5vYVdaMEoxMHVhVzVqYkhWa1pYTW9hMlY1Y3lrcElIdGNiaUFnSUNBZ0lHbG1JQ2hsZG1WdWRDNTBlWEJsSUQwOVBTQW5hMlY1Wkc5M2JpY3BJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaGpiMjV6ZENCd2NtVnpjMlZrSUc5bUlIUm9hWE11Y0hKbGMzTmxaQzVyWlhsektDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J3Y21WemMyVmtTMlY1Y3lBOUlIQnlaWE56WldRdWMzQnNhWFFvSnlzbktUdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2NISmxjM05sWkV0bGVYTXVhVzVqYkhWa1pYTW9hMlY1Y3lrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuUnBiblZsTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0JzWlhRZ2JXOWthV1pwWldSUWNtVnpjMlZrSUQwZ2NISmxjM05sWkV0bGVYTXVjRzl3S0NrN1hHNGdJQ0FnSUNBZ0lDQWdabTl5SUNoamIyNXpkQ0J0YjJScFptbGxjaUJ2WmlCYkoxTm9hV1owSnl3Z0owRnNkQ2NzSUNkRGIyNTBjbTlzSjEwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHJaWGx6SUQwOVBTQnRiMlJwWm1sbGNpQjhmQ0J3Y21WemMyVmtTMlY1Y3k1cGJtTnNkV1JsY3lodGIyUnBabWxsY2lrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2JXOWthV1pwWldSUWNtVnpjMlZrSUQwZ1lDUjdiVzlrYVdacFpYSjlLeVI3Ylc5a2FXWnBaV1JRY21WemMyVmtmV0E3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdTMlY1WW05aGNtUXVjbVZ6YjJ4MlpTaHdjbVZ6YzJWa0xDQW5hMlY1ZFhBbktUdGNiaUFnSUNBZ0lDQWdJQ0JMWlhsaWIyRnlaQzV5WlhOdmJIWmxLRzF2WkdsbWFXVmtVSEpsYzNObFpDQmhjeUJ6ZEhKcGJtY3NJQ2RyWlhsa2IzZHVKeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1pYWmxiblF1ZEhsd1pTQTlQVDBnSjJ0bGVYVndKeWtnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR052Ym5OMElIQnlaWE56WldRZ2IyWWdkR2hwY3k1d2NtVnpjMlZrTG10bGVYTW9LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTnZibk4wSUhCeVpYTnpaV1JMWlhseklEMGdjSEpsYzNObFpDNXpjR3hwZENnbkt5Y3BPMXh1SUNBZ0lDQWdJQ0FnSUdsbUlDZ2hjSEpsYzNObFpFdGxlWE11YVc1amJIVmtaWE1vYTJWNWN5a3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJwYm5WbE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J0YjJScFptbGxaRkJ5WlhOelpXUWdQU0J3Y21WemMyVmtTMlY1Y3k1bWFXeDBaWElvYTJWNUlEMCtJR3RsZVNBaFBUMGdhMlY1Y3lrdWFtOXBiaWduS3ljcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnUzJWNVltOWhjbVF1Y21WemIyeDJaU2h3Y21WemMyVmtMQ0FuYTJWNWRYQW5LVHRjYmlBZ0lDQWdJQ0FnSUNCTFpYbGliMkZ5WkM1eVpYTnZiSFpsS0cxdlpHbG1hV1ZrVUhKbGMzTmxaQ3dnSjJ0bGVXUnZkMjRuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JwWmlBb1pYWmxiblF1YzJocFpuUkxaWGtwSUh0Y2JpQWdJQ0FnSUNBZ2EyVjVjeUE5SUdCVGFHbG1kQ3NrZTJ0bGVYTjlZRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR2xtSUNobGRtVnVkQzVoYkhSTFpYa3BJSHRjYmlBZ0lDQWdJQ0FnYTJWNWN5QTlJR0JCYkhRckpIdHJaWGx6ZldBN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCcFppQW9aWFpsYm5RdVkzUnliRXRsZVNrZ2UxeHVJQ0FnSUNBZ0lDQnJaWGx6SUQwZ1lFTnZiblJ5YjJ3ckpIdHJaWGx6ZldBN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCTFpYbGliMkZ5WkM1eVpYTnZiSFpsS0d0bGVYTXNJR1YyWlc1MExuUjVjR1VwTzF4dUlDQWdJSDFjYmlBZ2ZUdGNibHh1SUNCd2RXSnNhV01nYzNSaGRHbGpJSEpsYzI5c2RtVW9hMlY1Y3pvZ2MzUnlhVzVuTENCbGRtVnVkRlI1Y0dVNklITjBjbWx1WnlrZ2UxeHVJQ0FnSUdOdmJuTjBJRzFoY0hCbFpDQTlJSFJvYVhNdWJXRndjR1ZrS0d0bGVYTXBPMXh1SUNBZ0lHbG1JQ2h0WVhCd1pXUWdQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaHRZWEJ3WldRdWJXRndjR2x1Wno4dVpXWm1aV04wVFc5a1pTQTlQVDBnSjJsdWMzUmhiblFuS1NCN1hHNGdJQ0FnSUNCdFlYQndaV1F1YldGd2NHbHVaeTVqWVd4c1ltRmphejh1S0cxaGNIQmxaQzVoWTNScGIyNHNJR1YyWlc1MFZIbHdaU0E5UFQwZ0oydGxlV1J2ZDI0bkxDQXdLVHRjYmlBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9aWFpsYm5SVWVYQmxJRDA5UFNBbmEyVjVaRzkzYmljcElIdGNiaUFnSUNBZ0lHbG1JQ2doZEdocGN5NXdjbVZ6YzJWa0xtaGhjeWhyWlhsektTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnlaWE56WldRdWMyVjBLR3RsZVhNc0lIc2dhMlY1YldGd09pQnRZWEJ3WldRc0lISmxjR1ZoZERvZ01Dd2daRzl1WlRvZ1ptRnNjMlVzSUdSdmJtVkpjem9nWm1Gc2MyVWdmU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hsZG1WdWRGUjVjR1VnUFQwOUlDZHJaWGwxY0NjcElIdGNiaUFnSUNBZ0lIUm9hWE11Y0hKbGMzTmxaQzVrWld4bGRHVW9hMlY1Y3lrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NIVmliR2xqSUhOMFlYUnBZeUIxY0dSaGRHVW9aR1ZzZEdGVWFXMWxPaUJ1ZFcxaVpYSXBJSHRjYmlBZ0lDQjBhR2x6TG5CeVpYTnpaV1F1Wm05eVJXRmphQ2dvYldGd2NHVmtMQ0JyWlhrcElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNodFlYQndaV1F1Y21Wd1pXRjBJRDA5UFNBd0lIeDhJQ2h0WVhCd1pXUXVhMlY1YldGd0xuSmxjR1ZoZENBbUppQnRZWEJ3WldRdWNtVndaV0YwSUR3OUlEQXBLU0I3WEc0Z0lDQWdJQ0FnSUcxaGNIQmxaQzVyWlhsdFlYQXViV0Z3Y0dsdVp6OHVZMkZzYkdKaFkycy9MaWh0WVhCd1pXUXVhMlY1YldGd0xtRmpkR2x2Yml3Z2RISjFaU3dnWkdWc2RHRlVhVzFsS1R0Y2JpQWdJQ0FnSUNBZ2JXRndjR1ZrTG5KbGNHVmhkQ0FyUFNCSmJuQjFkQzV5Y0hNN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBdkx5QmpiMjV6YjJ4bExteHZaeWduVGs4Z1VrVlFSVUZVSnl3Z2JXRndjR1ZrTG5KbGNHVmhkQ2s3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hiV0Z3Y0dWa0xtdGxlVzFoY0M1eVpYQmxZWFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvSVcxaGNIQmxaQzVrYjI1bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QnRZWEJ3WldRdWEyVjViV0Z3TG0xaGNIQnBibWN1WTJGc2JHSmhZMnNvYldGd2NHVmtMbXRsZVcxaGNDNWhZM1JwYjI0c0lHWmhiSE5sTENCa1pXeDBZVlJwYldVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYldGd2NHVmtMbVJ2Ym1VZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0J0WVhCd1pXUXVjbVZ3WldGMElDMDlJR1JsYkhSaFZHbHRaU0FxSURFd01EQTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVHRjYmlBZ0lDQjBhR2x6TG14aGMzUlFjbVZ6YzJWa0xtWnZja1ZoWTJnb2EyVjVjeUE5UGlCN1hHNGdJQ0FnSUNCcFppQW9JWFJvYVhNdWNISmxjM05sWkM1b1lYTW9hMlY1Y3lrcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JXRndjR1ZrSUQwZ2RHaHBjeTV0WVhCd1pXUW9hMlY1Y3lrN1hHNGdJQ0FnSUNBZ0lHMWhjSEJsWkQ4dWJXRndjR2x1WnlFdVkyRnNiR0poWTJzL0xpaHRZWEJ3WldRdVlXTjBhVzl1TENCbVlXeHpaU3dnWkdWc2RHRlVhVzFsS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5S1R0Y2JpQWdJQ0IwYUdsekxteGhjM1JRY21WemMyVmtJRDBnV3k0dUxuUm9hWE11Y0hKbGMzTmxaQzVyWlhsektDbGRPMXh1SUNCOVhHNWNiaUFnY0hWaWJHbGpJSE4wWVhScFl5QnRZWEJ3WldRb2EyVjVjem9nYzNSeWFXNW5LVG9nU1V0bGVVMWhjSEJwYm1jZ2ZDQjFibVJsWm1sdVpXUWdlMXh1SUNBZ0lHeGxkQ0J0WVhCd1pXUTdYRzRnSUNBZ1ptOXlJQ2hqYjI1emRDQnRZWEJ3YVc1bklHOW1JSFJvYVhNdWJXRndjR2x1WjNNcElIdGNiaUFnSUNBZ0lHMWhjSEJsWkNBOUlHMWhjSEJwYm1jdWJXRndjeWhyWlhsektUdGNiaUFnSUNBZ0lHbG1JQ2h0WVhCd1pXUWdJVDBnYm5Wc2JDQjhmQ0J0WVhCd2FXNW5MbXRsZVcxaGNFMXZaR1VnUFQwOUlDZHlaWEJzWVdObEp5a2dlMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJRzFoY0hCbFpEdGNiaUFnZlZ4dVhHNGdJSEIxWW14cFl5QnpkR0YwYVdNZ2FYTW9ZV04wYVc5dU9pQnpkSEpwYm1jcE9pQmliMjlzWldGdUlIdGNiaUFnSUNCbWIzSWdLR052Ym5OMElIQnlaWE56WldRZ2IyWWdkR2hwY3k1d2NtVnpjMlZrTG5aaGJIVmxjeWdwS1NCN1hHNGdJQ0FnSUNCcFppQW9jSEpsYzNObFpDNXJaWGx0WVhBdVlXTjBhVzl1SUNFOVBTQmhZM1JwYjI0cElIdGNiaUFnSUNBZ0lDQWdZMjl1ZEdsdWRXVTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnBaaUFvY0hKbGMzTmxaQzV5WlhCbFlYUWdQVDA5SURBZ2ZId2dLSEJ5WlhOelpXUXVhMlY1YldGd0xuSmxjR1ZoZENBbUppQndjbVZ6YzJWa0xuSmxjR1ZoZENBOFBTQXdLU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doY0hKbGMzTmxaQzVyWlhsdFlYQXVjbVZ3WldGMElDWW1JQ0Z3Y21WemMyVmtMbVJ2Ym1WSmN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUhCeVpYTnpaV1F1Wkc5dVpVbHpJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUgxY2JuMWNiaUlzSW1sdGNHOXlkQ0I3SUUxdmRYTmxJSDBnWm5KdmJTQmNJaTR2Ylc5MWMyVmNJanRjY2x4dVhISmNibVY0Y0c5eWRDQmpiR0Z6Y3lCTmIzVnpaVTFoY0hCcGJtY2dlMXh5WEc0Z0lIQjFZbXhwWXlCamIyNXpkSEoxWTNSdmNpaGNjbHh1SUNBcElIdGNjbHh1SUNCOVhISmNiaUFnY0hWaWJHbGpJSFZ1YldGd0tDazZJSFp2YVdRZ2UxeHlYRzRnSUNBZ1RXOTFjMlV1ZFc1dFlYQW9kR2hwY3lrN1hISmNiaUFnZlZ4eVhHNTlYSEpjYmlJc0ltbHRjRzl5ZENCN0lFMXZkWE5sVFdGd2NHbHVaeUI5SUdaeWIyMGdYQ0l1TDIxdmRYTmxMVzFoY0hCcGJtZGNJanRjY2x4dVhISmNibVY0Y0c5eWRDQjBlWEJsSUUxdmRYTmxRMkZzYkdKaFkyc2dQU0FvYTJWNU9pQnpkSEpwYm1jc0lIQnlaWE56WldRNklHSnZiMnhsWVc0c0lHUmxiSFJoVkdsdFpUb2diblZ0WW1WeUtTQTlQaUIyYjJsa08xeHlYRzVsZUhCdmNuUWdkSGx3WlNCTmIzVnpaVVZtWm1WamRFMXZaR1VnUFNBbmFXNXpkR0Z1ZENjZ2ZDQW5hVzUwWlhKMllXd25PMXh5WEc1Y2NseHVaWGh3YjNKMElHTnNZWE56SUUxdmRYTmxJSHRjY2x4dUlDQndjbWwyWVhSbElITjBZWFJwWXlCdFlYQndhVzVuY3pvZ1RXOTFjMlZOWVhCd2FXNW5XMTBnUFNCYlhUdGNjbHh1WEhKY2JpQWdjSFZpYkdsaklITjBZWFJwWXlCcGJtbDBhV0ZzYVhwbEtDa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J3ZFdKc2FXTWdjM1JoZEdsaklIUmxjbTFwYm1GMFpTZ3BJSHNnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nYzNSaGRHbGpJRzFoY0NncE9pQk5iM1Z6WlUxaGNIQnBibWNnZTF4eVhHNGdJQ0FnWTI5dWMzUWdiV0Z3Y0dsdVp5QTlJRzVsZHlCTmIzVnpaVTFoY0hCcGJtY29LVHRjY2x4dUlDQWdJSFJvYVhNdWJXRndjR2x1WjNNdWRXNXphR2xtZENodFlYQndhVzVuS1R0Y2NseHVJQ0FnSUhKbGRIVnliaUJ0WVhCd2FXNW5PMXh5WEc0Z0lIMWNjbHh1SUNCd2RXSnNhV01nYzNSaGRHbGpJSFZ1YldGd0tHMWhjSEJwYm1jNklFMXZkWE5sVFdGd2NHbHVaeWs2SUhadmFXUWdlMXh5WEc0Z0lDQWdkR2hwY3k1dFlYQndhVzVuY3lBOUlIUm9hWE11YldGd2NHbHVaM011Wm1sc2RHVnlLRzBnUFQ0Z2JTQWhQVDBnYldGd2NHbHVaeWs3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J3ZFdKc2FXTWdjM1JoZEdsaklIVndaR0YwWlNoa1pXeDBZVlJwYldVNklHNTFiV0psY2lrZ2V5QjlYSEpjYmx4eVhHNGdJSEIxWW14cFl5QnpkR0YwYVdNZ2FYTW9ZV04wYVc5dU9pQnpkSEpwYm1jcE9pQmliMjlzWldGdUlIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjY2x4dUlDQjlYSEpjYm4xY2NseHVJaXdpYVcxd2IzSjBJSHNnU1V0bGVVMWhjSEJwYm1jc0lFdGxlV0p2WVhKa0xDQkxaWGxEWVd4c1ltRmpheXdnUzJWNVJXWm1aV04wVFc5a1pTd2dTMlY1YldGd1RXOWtaU0I5SUdaeWIyMGdYQ0l1TDJ0bGVXSnZZWEprWENJN1hHNXBiWEJ2Y25RZ2V5QkxaWGxpYjJGeVpFMWhjSEJwYm1jZ2ZTQm1jbTl0SUZ3aUxpOXJaWGxpYjJGeVpDMXRZWEJ3YVc1blhDSTdYRzVwYlhCdmNuUWdleUJOYjNWelpTQjlJR1p5YjIwZ1hDSXVMMjF2ZFhObFhDSTdYRzVwYlhCdmNuUWdleUJOYjNWelpVMWhjSEJwYm1jZ2ZTQm1jbTl0SUZ3aUxpOXRiM1Z6WlMxdFlYQndhVzVuWENJN1hHNWNibVY0Y0c5eWRDQjBlWEJsSUVsdWNIVjBRMkZzYkdKaFkyc2dQU0JMWlhsRFlXeHNZbUZqYXp0Y2JtVjRjRzl5ZENCMGVYQmxJRWx1Y0hWMFJXWm1aV04wVFc5a1pTQTlJRXRsZVVWbVptVmpkRTF2WkdVN1hHNWNibVY0Y0c5eWRDQmpiR0Z6Y3lCSmJuQjFkQ0I3WEc0Z0lIQnlhWFpoZEdVZ2MzUmhkR2xqSUdsdWFYUnBZV3hwZW1Wa0lEMGdabUZzYzJVN1hHNGdJSEIxWW14cFl5QnpkR0YwYVdNZ2NuQnpPaUJ1ZFcxaVpYSTdYRzVjYmlBZ2NIVmliR2xqSUhOMFlYUnBZeUJwYm1sMGFXRnNhWHBsS0hKd2N6b2diblZ0WW1WeUxDQnlRVVlnUFNCMGNuVmxMQ0JsYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WW05a2VTa2dlMXh1SUNBZ0lFbHVjSFYwTG1sdWFYUnBZV3hwZW1Wa0lEMGdkSEoxWlR0Y2JpQWdJQ0IwYUdsekxuSndjeUE5SUhKd2N6dGNiaUFnSUNCTFpYbGliMkZ5WkM1cGJtbDBhV0ZzYVhwbEtHVnNaVzFsYm5RcE8xeHVJQ0FnSUUxdmRYTmxMbWx1YVhScFlXeHBlbVVvS1R0Y2JseHVJQ0FnSUdsbUlDaHlRVVlnUFQwOUlIUnlkV1VwSUh0Y2JpQWdJQ0FnSUd4bGRDQnNZWE4wT2lCdWRXMWlaWEk3WEc0Z0lDQWdJQ0JqYjI1emRDQnpkR0Z5ZENBOUlDaHViM2M2SUc1MWJXSmxjaWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNZWE4wSUQwZ2JtOTNPMXh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb2RHbGpheWs3WEc0Z0lDQWdJQ0I5TzF4dUlDQWdJQ0FnWTI5dWMzUWdkR2xqYXlBOUlDaHViM2M2SUc1MWJXSmxjaWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXeDBZVlJwYldVZ1BTQW9ibTkzSUMwZ2JHRnpkQ2tnTHlBeE1EQXdPMXh1SUNBZ0lDQWdJQ0JzWVhOMElEMGdibTkzTzF4dUlDQWdJQ0FnSUNCSmJuQjFkQzUxY0dSaGRHVW9aR1ZzZEdGVWFXMWxLVHRjYmlBZ0lDQWdJQ0FnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtIUnBZMnNwTzF4dUlDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTaHpkR0Z5ZENrN1hHNGdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnY0hWaWJHbGpJSE4wWVhScFl5QjBaWEp0YVc1aGRHVW9LU0I3WEc0Z0lDQWdTMlY1WW05aGNtUXVkR1Z5YldsdVlYUmxLQ2s3WEc0Z0lDQWdUVzkxYzJVdWRHVnliV2x1WVhSbEtDazdYRzRnSUgxY2JseHVJQ0J3ZFdKc2FXTWdjM1JoZEdsaklHMWhjQ2h0WVhCd2FXNW5jem9nWVc1NUxDQmpZV3hzWW1GamF6ODZJRWx1Y0hWMFEyRnNiR0poWTJzc0lHVm1abVZqZEUxdlpHVTZJRWx1Y0hWMFJXWm1aV04wVFc5a1pTQTlJQ2RwYm5SbGNuWmhiQ2NzSUd0bGVXMWhjRTF2WkdVNklFdGxlVzFoY0UxdlpHVWdQU0FuWVdSa0p5azZJRXRsZVdKdllYSmtUV0Z3Y0dsdVp5QjdYRzRnSUNBZ2FXWWdLQ0ZKYm5CMWRDNXBibWwwYVdGc2FYcGxaQ2tnZTF4dUlDQWdJQ0FnU1c1d2RYUXVhVzVwZEdsaGJHbDZaU2cyTUNrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQkxaWGxpYjJGeVpDNXRZWEFvYldGd2NHbHVaM01zSUdOaGJHeGlZV05yTENCbFptWmxZM1JOYjJSbExDQnJaWGx0WVhCTmIyUmxLVHRjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjM1JoZEdsaklIVnViV0Z3S0cxaGNIQnBibWM2SUV0bGVXSnZZWEprVFdGd2NHbHVaeUI4SUUxdmRYTmxUV0Z3Y0dsdVp5azZJSFp2YVdRZ2UxeHVJQ0FnSUdsbUlDaHRZWEJ3YVc1bklHbHVjM1JoYm1ObGIyWWdTMlY1WW05aGNtUk5ZWEJ3YVc1bktTQjdYRzRnSUNBZ0lDQkxaWGxpYjJGeVpDNTFibTFoY0NodFlYQndhVzVuS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdUVzkxYzJVdWRXNXRZWEFvYldGd2NHbHVaeWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY0hWaWJHbGpJSE4wWVhScFl5QjFjR1JoZEdVb1pHVnNkR0ZVYVcxbE9pQnVkVzFpWlhJcElIdGNiaUFnSUNCTFpYbGliMkZ5WkM1MWNHUmhkR1VvWkdWc2RHRlVhVzFsS1R0Y2JpQWdJQ0JOYjNWelpTNTFjR1JoZEdVb1pHVnNkR0ZVYVcxbEtUdGNiaUFnZlZ4dVhHNGdJSEIxWW14cFl5QnpkR0YwYVdNZ2FYTW9ZV04wYVc5dU9pQnpkSEpwYm1jcE9pQmliMjlzWldGdUlIdGNiaUFnSUNCcFppQW9JVWx1Y0hWMExtbHVhWFJwWVd4cGVtVmtLU0I3WEc0Z0lDQWdJQ0JKYm5CMWRDNXBibWwwYVdGc2FYcGxLRFl3S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlFdGxlV0p2WVhKa0xtbHpLR0ZqZEdsdmJpa2dmSHdnVFc5MWMyVXVhWE1vWVdOMGFXOXVLVHRjYmlBZ2ZWeHVmVnh1SWwwc0ltNWhiV1Z6SWpwYkltMWhjSEJwYm1keklsMHNJbTFoY0hCcGJtZHpJam9pUVVGRlR5eE5RVUZOTEdWQlFXZENMRU5CUVVFN1FVRkJRU3hGUVVOd1FpeFhRVU5GTEVOQlFVRXNVVUZCUVN4RlFVTkJMRkZCUTBFc1JVRkJRU3hWUVVGQkxFVkJRMEVzVlVGRFVDeEZRVUZCTzBGQlNrOHNTVUZCUVN4SlFVRkJMRU5CUVVFc1VVRkJRU3hIUVVGQkxGRkJRVUVzUTBGQlFUdEJRVU5CTEVsQlFVRXNTVUZCUVN4RFFVRkJMRkZCUVVFc1IwRkJRU3hSUVVGQkxFTkJRVUU3UVVGRFFTeEpRVUZCTEVsQlFVRXNRMEZCUVN4VlFVRkJMRWRCUVVFc1ZVRkJRU3hEUVVGQk8wRkJRMEVzU1VGQlFTeEpRVUZCTEVOQlFVRXNWVUZCUVN4SFFVRkJMRlZCUVVFc1EwRkJRVHRCUVVWUUxFbEJRVWtzU1VGQlFTeFBRVUZQTEVsQlFVc3NRMEZCUVN4UlFVRkJMRXRCUVdFc1VVRkJWU3hGUVVGQk8wRkJRM0pETEUxQlFVc3NTVUZCUVN4RFFVRkJMRkZCUVVFc1IwRkJWeXhEUVVGRExFbEJRVUVzUTBGQlN5eFJRVUZSTEVOQlFVRXNRMEZCUVR0QlFVRkJMRXRCUTJoRE8wRkJRMEVzU1VGQlFTeEpRVUZKTEV0QlFVMHNRMEZCUVN4UFFVRkJMRU5CUVZFc1NVRkJTeXhEUVVGQkxGRkJRVkVzUTBGQlJ5eEZRVUZCTzBGQlEyaERMRTFCUVVzc1NVRkJRU3hEUVVGQkxGRkJRVUVzUjBGQlZ5eERRVUZETEVkQlFVY3NTVUZCUVN4RFFVRkxMRkZCUVZFc1EwRkJSU3hEUVVGQkxFMUJRVUVzUTBGQlR5eERRVUZEUVN4VFFVRkJRU3hGUVVGVkxFdEJRVlVzUzBGQlFUdEJRVU0zUkN4UlFVRkRRU3hWUVVGcFFpeExRVUZUTEVOQlFVRXNSMEZCUVN4TFFVRkJMRU5CUVVFN1FVRkRNMElzVVVGQlQwRXNUMEZCUVVFc1UwRkJRVUVzUTBGQlFVRTdRVUZCUVN4UFFVTlVMRVZCUVVjc1JVRkJSU3hEUVVGQkxFTkJRVUU3UVVGQlFTeExRVU5RTzBGQlEwRXNTVUZCVnl4TFFVRkJMRTFCUVVFc1IwRkJRU3hKUVVGUExFdEJRVXNzVVVGQlZTeEZRVUZCTzBGQlF5OUNMRTFCUVUwc1RVRkJRU3hOUVVGQkxFZEJRVk1zUzBGQlN5eFJRVUZUTEVOQlFVRXNSMEZCUVN4RFFVRkJMRU5CUVVFN1FVRkROMElzVFVGQlNTeEpRVUZCTEU5QlFVOHNWMEZCVnl4UlFVRlZMRVZCUVVFN1FVRkRPVUlzVVVGQlFTeEpRVUZCTEVOQlFVc3NVMEZCVXl4SFFVRlBMRU5CUVVFc1IwRkJRVHRCUVVGQkxGVkJRMjVDTEUxQlFVRTdRVUZCUVN4VlFVTkJMRTFCUVZFc1JVRkJRU3hKUVVGQk8wRkJRVUVzVTBGRFZpeERRVUZCTzBGQlFVRXNUMEZEUmp0QlFVTkJMRTFCUVVzc1NVRkJRU3hEUVVGQkxGRkJRVUVzUTBGQlV5eExRVUZMTEU5QlFWVXNSMEZCUVN4SlFVRkJMRU5CUVVFN1FVRkJRU3hMUVVNdlFqdEJRVUZCTEVkQlEwWTdRVUZCUVN4RlFVVlBMRXRCUVVzc1NVRkJkVU1zUlVGQlFUdEJRVU5xUkN4SlFVRkJMRTlCUVZFc1MwRkJTeXhSUVVGcFFpeERRVUZCTEVsQlFVRXNRMEZCUVN4RFFVRkJPMEZCUVVFc1IwRkRhRU03UVVGQlFTeEZRVVZQTEV0QlFXTXNSMEZCUVR0QlFVTnVRaXhKUVVGQkxGRkJRVUVzUTBGQlV5eE5RVUZOTEVsQlFVa3NRMEZCUVN4RFFVRkJPMEZCUVVFc1IwRkRja0k3UVVGWFJqczdRVU5zUTA4c1RVRkJUU3haUVVGT0xFMUJRV1U3UVVGQlFTeEZRVTl3UWl4UFFVRmpMRmRCUVZjc1QwRkJjMElzUlVGQlFUdEJRVU0zUXl4SlFVRkJMRWxCUVVFc1EwRkJTeXhQUVVGVkxFZEJRVUVzVDBGQlFTeERRVUZCTzBGQlEyWXNTVUZCUVN4SlFVRkJMRU5CUVVzc1QwRkJVU3hEUVVGQkxHZENRVUZCTEVOQlFXbENMRk5CUVZjc1JVRkJRU3hKUVVGQkxFTkJRVXNzVTBGQlV5eERRVUZCTEVOQlFVRTdRVUZEZGtRc1NVRkJRU3hKUVVGQkxFTkJRVXNzVDBGQlVTeERRVUZCTEdkQ1FVRkJMRU5CUVdsQ0xFOUJRVk1zUlVGQlFTeEpRVUZCTEVOQlFVc3NVMEZCVXl4RFFVRkJMRU5CUVVFN1FVRkRja1FzU1VGQlR5eFBRVUZCTEVsQlFVRXNRMEZCUVR0QlFVRkJMRWRCUTFRN1FVRkJRU3hGUVVWQkxFOUJRV01zVTBGQldTeEhRVUZCTzBGQlEzaENMRWxCUVVFc1NVRkJRU3hEUVVGTExFOUJRVk1zUlVGQlFTeHRRa0ZCUVN4RFFVRnZRaXhUUVVGWExFVkJRVUVzU1VGQlFTeERRVUZMTEZOQlFWTXNRMEZCUVN4RFFVRkJPMEZCUXpORUxFbEJRVUVzU1VGQlFTeERRVUZMTEU5QlFWTXNSVUZCUVN4dFFrRkJRU3hEUVVGdlFpeFBRVUZUTEVWQlFVRXNTVUZCUVN4RFFVRkxMRk5CUVZNc1EwRkJRU3hEUVVGQk8wRkJRM3BFTEVsQlFVRXNTVUZCUVN4RFFVRkxMRTlCUVZVc1IwRkJRU3hKUVVGQkxFTkJRVUU3UVVGQlFTeEhRVU5xUWp0QlFVRkJMRVZCUlVFc1QwRkJZeXhIUVVGSkxFTkJRVUVzVVVGQlFTeEZRVUV5UkN4VlFVRjNRaXhWUVVFMFFpeEhRVUZCTEZWQlFVRXNSVUZCV1N4aFFVRjVRaXhMUVVGM1FpeEZRVUZCTzBGQlF6Vk1MRWxCUVVFc1RVRkJUU3hWUVVGVkxFbEJRVWtzWlVGQlFTeERRVUZuUWl4UlFVRlZMRVZCUVVFc1VVRkJRU3hGUVVGVkxGbEJRVmtzVlVGQlZTeERRVUZCTEVOQlFVRTdRVUZET1VVc1NVRkJTeXhKUVVGQkxFTkJRVUVzVVVGQlFTeERRVUZUTEZGQlFWRXNUMEZCVHl4RFFVRkJMRU5CUVVFN1FVRkROMElzU1VGQlR5eFBRVUZCTEU5QlFVRXNRMEZCUVR0QlFVRkJMRWRCUTFRN1FVRkJRU3hGUVVOQkxFOUJRV01zVFVGQlRTeFBRVUZuUXl4RlFVRkJPMEZCUTJ4RUxFbEJRVUVzU1VGQlFTeERRVUZMTEZkQlFWY3NTVUZCU3l4RFFVRkJMRkZCUVVFc1EwRkJVeXhOUVVGUExFTkJRVUVzUTBGQlFTeERRVUZCTEV0QlFVc3NUVUZCVFN4UFFVRlBMRU5CUVVFc1EwRkJRVHRCUVVOMlJDeEpRVUZCTEV0QlFVRXNUVUZCVnl4SFFVRlBMRWxCUVVFc1NVRkJRU3hEUVVGTExFOUJRVkVzUTBGQlFTeEpRVUZCTEVWQlFWRXNSVUZCUVR0QlFVTnlReXhOUVVGQkxFbEJRVWtzUzBGQlN5eFBRVUZSTEVOQlFVRXNSMEZCUVN4RFFVRkpMRWRCUVVjc1EwRkJSeXhGUVVGQkxFMUJRVUVzUTBGQlR5eFpRVUZaTEU5QlFWTXNSVUZCUVR0QlFVTnlSQ3hSUVVGTExFbEJRVUVzUTBGQlFTeFBRVUZCTEVOQlFWRXNUMEZCVHl4SFFVRkhMRU5CUVVFc1EwRkJRVHRCUVVGQkxFOUJRM3BDTzBGQlFVRXNTMEZEUmp0QlFVTkJMRWxCUVVFc1NVRkJRU3hEUVVGTExHTkJRV01zUTBGQlF5eEhRVUZITEVsQlFVc3NRMEZCUVN4UFFVRkJMRU5CUVZFc1RVRkJUU3hEUVVGQkxFTkJRVUU3UVVGQlFTeEhRVU0xUXp0QlFVRkJMRVZCSzBOQkxFOUJRV01zVDBGQlVTeERRVUZCTEVsQlFVRXNSVUZCWXl4VFFVRnRRaXhGUVVGQk8wRkJRM0pFTEVsQlFVMHNUVUZCUVN4TlFVRkJMRWRCUVZNc1NVRkJTeXhEUVVGQkxFMUJRVUVzUTBGQlR5eEpRVUZKTEVOQlFVRXNRMEZCUVR0QlFVTXZRaXhKUVVGQkxFbEJRVWtzVlVGQlZTeEpRVUZOTEVWQlFVRTdRVUZEYkVJc1RVRkJRU3hQUVVGQk8wRkJRVUVzUzBGRFJqdEJRVVZCTEVsQlFVa3NTVUZCUVN4TlFVRkJMRU5CUVU4c1QwRkJVeXhGUVVGQkxGVkJRVUVzUzBGQlpTeFRRVUZYTEVWQlFVRTdRVUZETlVNc1RVRkJRU3hOUVVGQkxFTkJRVThzVVVGQlVTeFJRVUZYTEVkQlFVRXNUVUZCUVN4RFFVRlBMRTFCUVZFc1JVRkJRU3hUUVVGQkxFdEJRV01zVjBGQlZ5eERRVUZETEVOQlFVRXNRMEZCUVR0QlFVTnVSU3hOUVVGQkxFOUJRVUU3UVVGQlFTeExRVU5HTzBGQlJVRXNTVUZCUVN4SlFVRkpMR05CUVdNc1UwRkJWeXhGUVVGQk8wRkJRek5DTEUxQlFVRXNTVUZCU1N4RFFVRkRMRWxCUVVFc1EwRkJTeXhQUVVGUkxFTkJRVUVzUjBGQlFTeERRVUZKTEVsQlFVa3NRMEZCUnl4RlFVRkJPMEZCUXpOQ0xGRkJRVUVzU1VGQlFTeERRVUZMTEU5QlFWRXNRMEZCUVN4SFFVRkJMRU5CUVVrc1NVRkJUU3hGUVVGQkxFVkJRVVVzVFVGQlVTeEZRVUZCTEUxQlFVRXNSVUZCVVN4TlFVRlJMRVZCUVVFc1EwRkJRU3hGUVVGSExFbEJRVTBzUlVGQlFTeExRVUZCTEVWQlFVOHNUVUZCVVN4RlFVRkJMRXRCUVVFc1JVRkJUeXhEUVVGQkxFTkJRVUU3UVVGQlFTeFBRVU5zUmp0QlFVRkJMRXRCUTBZc1RVRkJRU3hKUVVGWExHTkJRV01zVDBGQlV5eEZRVUZCTzBGQlEyaERMRTFCUVVzc1NVRkJRU3hEUVVGQkxFOUJRVUVzUTBGQlVTeFBRVUZQTEVsQlFVa3NRMEZCUVN4RFFVRkJPMEZCUVVFc1MwRkRNVUk3UVVGQlFTeEhRVU5HTzBGQlFVRXNSVUZGUVN4UFFVRmpMRTlCUVU4c1UwRkJiVUlzUlVGQlFUdEJRVU4wUXl4SlFVRkJMRWxCUVVFc1EwRkJTeXhQUVVGUkxFTkJRVUVzVDBGQlFTeERRVUZSTEVOQlFVTXNUVUZCUVN4RlFVRlJMRWRCUVZFc1MwRkJRVHRCUVVOd1F5eE5RVUZKTEVsQlFVRXNUVUZCUVN4RFFVRlBMRmRCUVZjc1EwRkJUU3hKUVVGQkxFMUJRVUVzUTBGQlR5eFBRVUZQTEUxQlFWVXNTVUZCUVN4TlFVRkJMRU5CUVU4c1ZVRkJWU3hEUVVGSkxFVkJRVUU3UVVGRGRrVXNVVUZCUVN4TlFVRkJMRU5CUVU4c1QwRkJUeXhQUVVGVExFVkJRVUVzVVVGQlFTeEhRVUZYTEU5QlFVOHNUVUZCVHl4RFFVRkJMRTFCUVVFc1JVRkJVU3hOUVVGTkxGTkJRVk1zUTBGQlFTeERRVUZCTzBGQlEzWkZMRkZCUVVFc1RVRkJRU3hEUVVGUExGVkJRVlVzUzBGQlRTeERRVUZCTEVkQlFVRXNRMEZCUVR0QlFVRkJMRTlCUTJ4Q0xFMUJRVUU3UVVGRlRDeFJRVUZKTEVsQlFVRXNRMEZCUXl4TlFVRlBMRU5CUVVFc1RVRkJRU3hEUVVGUExFMUJRVkVzUlVGQlFUdEJRVU42UWl4VlFVRkpMRWxCUVVFc1EwRkJReXhQUVVGUExFbEJRVTBzUlVGQlFUdEJRVVZvUWl4WlFVRkJMRTFCUVVFc1EwRkJUeXhKUVVGUExFZEJRVUVzU1VGQlFTeERRVUZCTzBGQlFVRXNWMEZEYUVJN1FVRkJRU3hUUVVOTExFMUJRVUU3UVVGRFRDeFZRVUZCTEUxQlFVRXNRMEZCVHl4VlFVRlZMRk5CUVZrc1IwRkJRU3hIUVVGQkxFTkJRVUU3UVVGQlFTeFRRVU12UWp0QlFVRkJMRTlCUTBZN1FVRkJRU3hMUVVORUxFTkJRVUVzUTBGQlFUdEJRVU5FTEVsQlFVc3NTVUZCUVN4RFFVRkJMRmRCUVVFc1EwRkJXU3hSUVVGUkxFTkJRVkVzU1VGQlFTeExRVUZCTzBGQlF5OUNMRTFCUVVFc1NVRkJTU3hEUVVGRExFbEJRVUVzUTBGQlN5eFBRVUZSTEVOQlFVRXNSMEZCUVN4RFFVRkpMRWxCUVVrc1EwRkJSeXhGUVVGQk8wRkJRek5DTEZGQlFVMHNUVUZCUVN4TlFVRkJMRWRCUVZNc1NVRkJTeXhEUVVGQkxFMUJRVUVzUTBGQlR5eEpRVUZKTEVOQlFVRXNRMEZCUVR0QlFVTXZRaXhSUVVGQkxFMUJRVUVzUlVGQlVTeFBRVUZUTEVOQlFVRXNVVUZCUVN4SFFVRlhMRTFCUVU4c1EwRkJRU3hOUVVGQkxFVkJRVkVzVDBGQlR5eFRRVUZUTEVOQlFVRXNRMEZCUVR0QlFVRkJMRTlCUXpkRU8wRkJRVUVzUzBGRFJDeERRVUZCTEVOQlFVRTdRVUZEUkN4SlFVRkJMRWxCUVVFc1EwRkJTeXhqUVVGakxFTkJRVU1zUjBGQlJ5eEpRVUZMTEVOQlFVRXNUMEZCUVN4RFFVRlJMRTFCUVUwc1EwRkJRU3hEUVVGQk8wRkJRVUVzUjBGRE5VTTdRVUZCUVN4RlFVVkJMRTlCUVdNc1QwRkJUeXhKUVVGMVF5eEZRVUZCTzBGQlF6RkVMRWxCUVVrc1NVRkJRU3hOUVVGQkxFTkJRVUU3UVVGRFNpeEpRVUZYTEV0QlFVRXNUVUZCUVN4UFFVRkJMRWxCUVZjc1MwRkJTeXhSUVVGVkxFVkJRVUU3UVVGRGJrTXNUVUZCVXl4TlFVRkJMRWRCUVVFc1QwRkJRU3hEUVVGUkxFdEJRVXNzU1VGQlNTeERRVUZCTEVOQlFVRTdRVUZETVVJc1RVRkJRU3hKUVVGSkxFMUJRVlVzU1VGQlFTeEpRVUZCTEVsQlFWRXNUMEZCVVN4RFFVRkJMRlZCUVVFc1MwRkJaU3hUUVVGWExFVkJRVUU3UVVGRGRFUXNVVUZCUVN4TlFVRkJPMEZCUVVFc1QwRkRSanRCUVVGQkxFdEJRMFk3UVVGRFFTeEpRVUZQTEU5QlFVRXNUVUZCUVN4RFFVRkJPMEZCUVVFc1IwRkRWRHRCUVVGQkxFVkJSVUVzVDBGQll5eEhRVUZITEUxQlFYbENMRVZCUVVFN1FVRkRlRU1zU1VGQlFTeExRVUZCTEUxQlFWY3NUMEZCVnl4SlFVRkJMRWxCUVVFc1EwRkJTeXhQUVVGUkxFTkJRVUVzVFVGQlFTeEZRVUZWTEVWQlFVRTdRVUZETTBNc1RVRkJTU3hKUVVGQkxFOUJRVUVzUTBGQlVTeE5RVUZQTEVOQlFVRXNUVUZCUVN4TFFVRlhMRTFCUVZFc1JVRkJRVHRCUVVOd1F5eFJRVUZCTEZOQlFVRTdRVUZCUVN4UFFVTkdPMEZCUTBFc1RVRkJTU3hKUVVGQkxFOUJRVUVzUTBGQlVTeFhRVUZYTEVOQlFVMHNTVUZCUVN4UFFVRkJMRU5CUVZFc1QwRkJUeXhOUVVGVkxFbEJRVUVzVDBGQlFTeERRVUZSTEZWQlFWVXNRMEZCU1N4RlFVRkJPMEZCUXpGRkxGRkJRVThzVDBGQlFTeEpRVUZCTEVOQlFVRTdRVUZCUVN4UFFVTkdMRTFCUVVFN1FVRkRUQ3hSUVVGQkxFbEJRVWtzUTBGQlF5eFBRVUZSTEVOQlFVRXNUVUZCUVN4RFFVRlBMRTFCUVZVc1NVRkJRU3hEUVVGRExGRkJRVkVzVFVGQlVTeEZRVUZCTzBGQlF6ZERMRlZCUVVFc1QwRkJRU3hEUVVGUkxFMUJRVk1zUjBGQlFTeEpRVUZCTEVOQlFVRTdRVUZEYWtJc1ZVRkJUeXhQUVVGQkxFbEJRVUVzUTBGQlFUdEJRVUZCTEZOQlExUTdRVUZCUVN4UFFVTkdPMEZCUTBFc1RVRkJUeXhQUVVGQkxFdEJRVUVzUTBGQlFUdEJRVUZCTEV0QlExUTdRVUZEUVN4SlFVRlBMRTlCUVVFc1MwRkJRU3hEUVVGQk8wRkJRVUVzUjBGRFZEdEJRVU5HTEVOQlFVRXNRMEZCUVR0QlFURktUeXhKUVVGTkxGRkJRVTRzUjBGQlFTeFZRVUZCTzBGQlFVMHNVVUZCUVN4RFFVVkpMRmRCUVRoQ0xFVkJRVU1zUTBGQlFUdEJRVVp1UXl4UlFVbGhMRU5CUVVFc1QwRkJRU3gxUWtGQmIwY3NSMEZCU1N4RlFVRkJMRU5CUVVFN1FVRktja2dzVVVGQlFTeERRVXRKTEdOQlFYZENMRVZCUVVNc1EwRkJRVHRCUVV3M1FpeFJRVzFEUnl4RFFVRkJMRk5CUVVFc1IwRkJXU3hEUVVGRExFdEJRU3RDTEV0QlFVRTdRVUZEZUVRc1JVRkJRU3hKUVVGSkxFOUJRVThzUzBGQlRTeERRVUZCTEVkQlFVRXNRMEZCUVR0QlFVTnFRaXhGUVVGQkxFbEJRVWtzUTBGQlF5eFRRVUZYTEVWQlFVRXNTMEZCUVN4RlFVRlBMRTlCUVU4c1EwRkJSU3hEUVVGQkxGRkJRVUVzUTBGQlV5eEpRVUZKTEVOQlFVY3NSVUZCUVR0QlFVTTVReXhKUVVGSkxFbEJRVUVzUzBGQlFTeERRVUZOTEZOQlFWTXNVMEZCVnl4RlFVRkJPMEZCUXpWQ0xFMUJRVUVzUzBGQlFTeE5RVUZYTEU5QlFWY3NTVUZCUVN4VFFVRkJMRU5CUVVzc1QwRkJVU3hEUVVGQkxFbEJRVUVzUlVGQlVTeEZRVUZCTzBGQlEzcERMRkZCUVUwc1RVRkJRU3hYUVVGQkxFZEJRV01zVDBGQlVTeERRVUZCTEV0QlFVRXNRMEZCVFN4SFFVRkhMRU5CUVVFc1EwRkJRVHRCUVVOeVF5eFJRVUZKTEVsQlFVRXNWMEZCUVN4RFFVRlpMRkZCUVZNc1EwRkJRU3hKUVVGSkxFTkJRVWNzUlVGQlFUdEJRVU01UWl4VlFVRkJMRk5CUVVFN1FVRkJRU3hUUVVOR08wRkJRMEVzVVVGQlNTeEpRVUZCTEdWQlFVRXNSMEZCYTBJc1dVRkJXU3hIUVVGSkxFVkJRVUVzUTBGQlFUdEJRVU4wUXl4UlFVRkJMRXRCUVVFc1RVRkJWeXhSUVVGWkxFbEJRVUVzUTBGQlF5eFBRVUZUTEVWQlFVRXNTMEZCUVN4RlFVRlBMRk5CUVZNc1EwRkJSeXhGUVVGQk8wRkJRMnhFTEZWQlFVRXNTVUZCU1N4SlFVRlRMRXRCUVVFc1VVRkJRU3hKUVVGWkxGZEJRVmtzUTBGQlFTeFJRVUZCTEVOQlFWTXNVVUZCVVN4RFFVRkhMRVZCUVVFN1FVRkRka1FzV1VGQlFTeGxRVUZCTEVkQlFXdENMRWRCUVVjc1VVRkJXU3hEUVVGQkxFTkJRVUVzUlVGQlFTeGxRVUZCTEVOQlFVRXNRMEZCUVN4RFFVRkJPMEZCUVVFc1YwRkRia003UVVGQlFTeFRRVU5HTzBGQlJVRXNVVUZCVXl4VFFVRkJMRU5CUVVFc1QwRkJRU3hEUVVGUkxGTkJRVk1zVDBGQlR5eERRVUZCTEVOQlFVRTdRVUZEYWtNc1VVRkJVeXhUUVVGQkxFTkJRVUVzVDBGQlFTeERRVUZSTEdsQ1FVRXlRaXhUUVVGVExFTkJRVUVzUTBGQlFUdEJRVUZCTEU5QlEzWkVPMEZCUVVFc1MwRkRSaXhOUVVGQkxFbEJRVmNzUzBGQlRTeERRVUZCTEVsQlFVRXNTMEZCVXl4UFFVRlRMRVZCUVVFN1FVRkRha01zVFVGQlFTeExRVUZCTEUxQlFWY3NUMEZCVnl4SlFVRkJMRk5CUVVFc1EwRkJTeXhQUVVGUkxFTkJRVUVzU1VGQlFTeEZRVUZSTEVWQlFVRTdRVUZEZWtNc1VVRkJUU3hOUVVGQkxGZEJRVUVzUjBGQll5eFBRVUZSTEVOQlFVRXNTMEZCUVN4RFFVRk5MRWRCUVVjc1EwRkJRU3hEUVVGQk8wRkJRM0pETEZGQlFVRXNTVUZCU1N4RFFVRkRMRmRCUVVFc1EwRkJXU3hSUVVGVExFTkJRVUVzU1VGQlNTeERRVUZITEVWQlFVRTdRVUZETDBJc1ZVRkJRU3hUUVVGQk8wRkJRVUVzVTBGRFJqdEJRVU5CTEZGQlFVMHNUVUZCUVN4bFFVRkJMRWRCUVd0Q0xGbEJRVmtzVFVGQlR5eERRVUZCTEVOQlFVRXNSMEZCUVN4TFFVRlBMRkZCUVZFc1NVRkJTU3hEUVVGQkxFTkJRVVVzUzBGQlN5eEhRVUZITEVOQlFVRXNRMEZCUVR0QlFVVjRSU3hSUVVGVExGTkJRVUVzUTBGQlFTeFBRVUZCTEVOQlFWRXNVMEZCVXl4UFFVRlBMRU5CUVVFc1EwRkJRVHRCUVVOcVF5eFJRVUZUTEZOQlFVRXNRMEZCUVN4UFFVRkJMRU5CUVZFc2FVSkJRV2xDTEZOQlFWTXNRMEZCUVN4RFFVRkJPMEZCUVVFc1QwRkROME03UVVGQlFTeExRVU5HTzBGQlFVRXNSMEZEU3l4TlFVRkJPMEZCUTB3c1NVRkJRU3hKUVVGSkxFMUJRVTBzVVVGQlZTeEZRVUZCTzBGQlEyeENMRTFCUVVFc1NVRkJRU3hIUVVGUExFTkJRVk1zVFVGQlFTeEZRVUZCTEVsQlFVRXNRMEZCUVN4RFFVRkJMRU5CUVVFN1FVRkJRU3hMUVVOc1FqdEJRVU5CTEVsQlFVRXNTVUZCU1N4TlFVRk5MRTFCUVZFc1JVRkJRVHRCUVVOb1FpeE5RVUZCTEVsQlFVRXNSMEZCVHl4RFFVRlBMRWxCUVVFc1JVRkJRU3hKUVVGQkxFTkJRVUVzUTBGQlFTeERRVUZCTzBGQlFVRXNTMEZEYUVJN1FVRkRRU3hKUVVGQkxFbEJRVWtzVFVGQlRTeFBRVUZUTEVWQlFVRTdRVUZEYWtJc1RVRkJRU3hKUVVGQkxFZEJRVThzUTBGQlZ5eFJRVUZCTEVWQlFVRXNTVUZCUVN4RFFVRkJMRU5CUVVFc1EwRkJRVHRCUVVGQkxFdEJRM0JDTzBGQlEwRXNTVUZCVXl4VFFVRkJMRU5CUVVFc1QwRkJRU3hEUVVGUkxFbEJRVTBzUlVGQlFTeExRVUZCTEVOQlFVMHNTVUZCU1N4RFFVRkJMRU5CUVVFN1FVRkJRU3hIUVVOdVF6dEJRVU5HTEVOQlFVRTdPMEZEZWtaTExFMUJRVTBzV1VGQllTeERRVUZCTzBGQlFVRXNSVUZEYWtJc1YwRkRUQ3hIUVVGQk8wRkJRVUVzUjBGRFJqdEJRVUZCTEVWQlEwOHNTMEZCWXl4SFFVRkJPMEZCUTI1Q0xFbEJRVUVzUzBGQlFTeERRVUZOTEUxQlFVMHNTVUZCU1N4RFFVRkJMRU5CUVVFN1FVRkJRU3hIUVVOc1FqdEJRVU5HT3p0QlEwcFBMRTFCUVUwc1MwRkJUU3hEUVVGQk8wRkJRVUVzUlVGSGFrSXNUMEZCWXl4VlFVRmhMRWRCUVVFN1FVRkRla0lzU1VGQlR5eFBRVUZCTEVsQlFVRXNRMEZCUVR0QlFVRkJMRWRCUTFRN1FVRkJRU3hGUVVWQkxFOUJRV01zVTBGQldTeEhRVUZCTzBGQlFVRXNSMEZCUlR0QlFVRkJMRVZCUlRWQ0xFOUJRV01zUjBGQmIwSXNSMEZCUVR0QlFVTm9ReXhKUVVGTkxFMUJRVUVzVDBGQlFTeEhRVUZWTEVsQlFVa3NXVUZCWVN4RlFVRkJMRU5CUVVFN1FVRkRha01zU1VGQlN5eEpRVUZCTEVOQlFVRXNVVUZCUVN4RFFVRlRMRkZCUVZFc1QwRkJUeXhEUVVGQkxFTkJRVUU3UVVGRE4wSXNTVUZCVHl4UFFVRkJMRTlCUVVFc1EwRkJRVHRCUVVGQkxFZEJRMVE3UVVGQlFTeEZRVU5CTEU5QlFXTXNUVUZCVFN4UFFVRTJRaXhGUVVGQk8wRkJReTlETEVsQlFVRXNTVUZCUVN4RFFVRkxMRmRCUVZjc1NVRkJTeXhEUVVGQkxGRkJRVUVzUTBGQlV5eE5RVUZQTEVOQlFVRXNRMEZCUVN4RFFVRkJMRXRCUVVzc1RVRkJUU3hQUVVGUExFTkJRVUVzUTBGQlFUdEJRVUZCTEVkQlEzcEVPMEZCUVVFc1JVRkZRU3hQUVVGakxFOUJRVThzVTBGQmJVSXNSVUZCUVR0QlFVRkJMRWRCUVVVN1FVRkJRU3hGUVVVeFF5eFBRVUZqTEVkQlFVY3NUVUZCZVVJc1JVRkJRVHRCUVVONFF5eEpRVUZQTEU5QlFVRXNTMEZCUVN4RFFVRkJPMEZCUVVFc1IwRkRWRHRCUVVOR0xFTkJRVUU3UVVGMlFtRXNTMEZCUVN4RFFVTkpMRmRCUVRKQ0xFVkJRVU03TzBGRFJYUkRMRTFCUVUwc1UwRkJUaXhOUVVGWk8wRkJRVUVzUlVGSmFrSXNUMEZCWXl4VlFVRlhMRU5CUVVFc1IwRkJRU3hGUVVGaExFMUJRVTBzU1VGQlRTeEZRVUZCTEU5QlFVRXNSMEZCVlN4VFFVRlRMRWxCUVUwc1JVRkJRVHRCUVVONlJTeEpRVUZCTEUxQlFVRXNRMEZCVFN4WFFVRmpMRWRCUVVFc1NVRkJRU3hEUVVGQk8wRkJRM0JDTEVsQlFVRXNTVUZCUVN4RFFVRkxMRWRCUVUwc1IwRkJRU3hIUVVGQkxFTkJRVUU3UVVGRFdDeEpRVUZCTEZGQlFVRXNRMEZCVXl4WFFVRlhMRTlCUVU4c1EwRkJRU3hEUVVGQk8wRkJSek5DTEVsQlFVRXNTVUZCU1N4UlFVRlJMRWxCUVUwc1JVRkJRVHRCUVVOb1FpeE5RVUZKTEVsQlFVRXNTVUZCUVN4RFFVRkJPMEZCUTBvc1RVRkJUU3hOUVVGQkxFdEJRVUVzUjBGQlVTeERRVUZETEVkQlFXZENMRXRCUVVFN1FVRkROMElzVVVGQlR5eEpRVUZCTEVkQlFVRXNSMEZCUVN4RFFVRkJPMEZCUTFBc1VVRkJRU3h4UWtGQlFTeERRVUZ6UWl4SlFVRkpMRU5CUVVFc1EwRkJRVHRCUVVGQkxFOUJRelZDTEVOQlFVRTdRVUZEUVN4TlFVRk5MRTFCUVVFc1NVRkJRU3hIUVVGUExFTkJRVU1zUjBGQlowSXNTMEZCUVR0QlFVTTFRaXhSUVVGTkxFMUJRVUVzVTBGQlFTeEhRVUZCTEVOQlFXRXNUVUZCVFN4SlFVRlJMRWxCUVVFc1IwRkJRU3hEUVVGQk8wRkJRMnBETEZGQlFVOHNTVUZCUVN4SFFVRkJMRWRCUVVFc1EwRkJRVHRCUVVOUUxGRkJRVUVzVFVGQlFTeERRVUZOTEU5QlFVOHNVMEZCVXl4RFFVRkJMRU5CUVVFN1FVRkRkRUlzVVVGQlFTeHhRa0ZCUVN4RFFVRnpRaXhKUVVGSkxFTkJRVUVzUTBGQlFUdEJRVUZCTEU5QlF6VkNMRU5CUVVFN1FVRkRRU3hOUVVGQkxIRkNRVUZCTEVOQlFYTkNMRXRCUVVzc1EwRkJRU3hEUVVGQk8wRkJRek5DTEUxQlFVRXNUMEZCUVR0QlFVRkJMRXRCUTBZN1FVRkRRU3hKUVVGUExFOUJRVUVzU1VGQlFTeERRVUZCTzBGQlFVRXNSMEZEVkR0QlFVRkJMRVZCUlVFc1QwRkJZeXhUUVVGWkxFZEJRVUU3UVVGRGVFSXNTVUZCUVN4UlFVRkJMRU5CUVZNc1UwRkJWU3hGUVVGQkxFTkJRVUU3UVVGRFNDeEhRVU5zUWp0QlFVRkJMRVZCUlVFc1QwRkJZeXhIUVVGSkxFTkJRVUVzVVVGQlFTeEZRVUZsTEZWQlFUQkNMRlZCUVRoQ0xFZEJRVUVzVlVGQlFTeEZRVUZaTEdGQlFYbENMRXRCUVhkQ0xFVkJRVUU3UVVGRGNFb3NTVUZCU1N4SlFVRkJMRU5CUVVNc1QwRkJUU3hYUVVGaExFVkJRVUU3UVVGRGRFSXNUVUZCUVN4TlFVRkJMRU5CUVUwc1YwRkJWeXhGUVVGRkxFTkJRVUVzUTBGQlFUdEJRVUZCTEV0QlEzSkNPMEZCUTBFc1NVRkJRU3hQUVVGUExGRkJRVk1zUTBGQlFTeEhRVUZCTEVOQlFVa3NVVUZCVlN4RlFVRkJMRkZCUVVFc1JVRkJWU3haUVVGWkxGVkJRVlVzUTBGQlFTeERRVUZCTzBGQlFVRXNSMEZEYUVVN1FVRkJRU3hGUVVOQkxFOUJRV01zVFVGQlRTeFBRVUVyUXl4RlFVRkJPMEZCUTJwRkxFbEJRVUVzU1VGQlNTeHRRa0ZCYlVJc1pVRkJhVUlzUlVGQlFUdEJRVU4wUXl4TlFVRkJMRkZCUVVFc1EwRkJVeXhOUVVGTkxFOUJRVThzUTBGQlFTeERRVUZCTzBGQlFVRXNTMEZEYWtJc1RVRkJRVHRCUVVOTUxFMUJRVUVzUzBGQlFTeERRVUZOTEUxQlFVMHNUMEZCVHl4RFFVRkJMRU5CUVVFN1FVRkJRU3hMUVVOeVFqdEJRVUZCTEVkQlEwWTdRVUZCUVN4RlFVVkJMRTlCUVdNc1QwRkJUeXhUUVVGdFFpeEZRVUZCTzBGQlEzUkRMRWxCUVVFc1VVRkJRU3hEUVVGVExFOUJRVThzVTBGQlV5eERRVUZCTEVOQlFVRTdRVUZEU0N4SFFVTjRRanRCUVVGQkxFVkJSVUVzVDBGQll5eEhRVUZITEUxQlFYbENMRVZCUVVFN1FVRkRlRU1zU1VGQlNTeEpRVUZCTEVOQlFVTXNUMEZCVFN4WFFVRmhMRVZCUVVFN1FVRkRkRUlzVFVGQlFTeE5RVUZCTEVOQlFVMHNWMEZCVnl4RlFVRkZMRU5CUVVFc1EwRkJRVHRCUVVGQkxFdEJRM0pDTzBGQlEwRXNTVUZCUVN4UFFVRlBMRk5CUVZNc1JVRkJSeXhEUVVGQkxFMUJRVTBzUTBGQlN5eEpRVUZCTEV0QlFVRXNRMEZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRU3hEUVVGQk8wRkJRVUVzUjBGREwwTTdRVUZEUml4RFFVRkJMRU5CUVVFN1FVRXhSRThzU1VGQlRTeExRVUZPTEVkQlFVRXNUMEZCUVR0QlFVRk5MRXRCUVVFc1EwRkRTU3hYUVVGakxFZEJRVUVzUzBGQlFUczdPenNpZlE9PVxuIiwiY2xhc3MgVmVjdG9yMyB7XG4gICAgY29uc3RydWN0b3IodCA9IDAsIHMgPSAwLCBpID0gMCkge1xuICAgICAgICB0aGlzLnggPSB0O1xuICAgICAgICB0aGlzLnkgPSBzO1xuICAgICAgICB0aGlzLnogPSBpO1xuICAgIH1cbiAgICBnZXQgemVybygpIHtcbiAgICAgICAgcmV0dXJuIDAgPT09IE1hdGguYWJzKHRoaXMueCkgJiYgMCA9PT0gTWF0aC5hYnModGhpcy55KSAmJiAwID09PSBNYXRoLmFicyh0aGlzLnopO1xuICAgIH1cbiAgICBnZXQgbWFnbml0dWRlKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueik7XG4gICAgfVxuICAgIGdldCBoYWxmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseSguNSk7XG4gICAgfVxuICAgIGdldCBuZWdIYWxmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseSgtLjUpO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbSh0ID0gMCwgcyA9IDAsIGkgPSAwKSB7XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgVmVjdG9yMykge1xuICAgICAgICAgICAgcyA9IHQueTtcbiAgICAgICAgICAgIGkgPSB0Lno7XG4gICAgICAgICAgICB0ID0gdC54O1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodCkpIHtcbiAgICAgICAgICAgIHMgPSB0WzFdO1xuICAgICAgICAgICAgaSA9IHRbMl07XG4gICAgICAgICAgICB0ID0gdFswXTtcbiAgICAgICAgfSBlbHNlIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgdCAmJiB0LmluY2x1ZGVzKFwiLFwiKSkgW3QsIHMsIGldID0gdC5zcGxpdChcIixcIikubWFwKCh0ID0+ICt0KSk7IGVsc2UgaWYgKFwibnVtYmVyXCIgIT09IHR5cGVvZiB0ICYmIFwic3RyaW5nXCIgIT09IHR5cGVvZiB0ICYmIFwieFwiIGluIHQgJiYgXCJ5XCIgaW4gdCAmJiBcInpcIiBpbiB0KSB7XG4gICAgICAgICAgICBzID0gdC55O1xuICAgICAgICAgICAgaSA9IHQuejtcbiAgICAgICAgICAgIHQgPSB0Lng7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHQsIHMsIGkpO1xuICAgIH1cbiAgICBlcXVhbHModCkge1xuICAgICAgICBpZiAodGhpcy54ICE9PSB0LnggfHwgdGhpcy55ICE9PSB0LnkgfHwgdGhpcy56ICE9PSB0LnopIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGFkZCh0LCBzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgaSA9IHMgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBjb25zdCB7eDogZSwgeTogbiwgejogaH0gPSBBcnJheS5pc0FycmF5KHQpID8ge1xuICAgICAgICAgICAgeDogdFswXSxcbiAgICAgICAgICAgIHk6IHRbMV0sXG4gICAgICAgICAgICB6OiB0WzJdXG4gICAgICAgIH0gOiB0O1xuICAgICAgICBpLnggKz0gZTtcbiAgICAgICAgaS55ICs9IG47XG4gICAgICAgIGkueiArPSBoO1xuICAgICAgICByZXR1cm4gaTtcbiAgICB9XG4gICAgc3VidHJhY3QodCwgcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGkgPSBzID8gdGhpcyA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgY29uc3Qge3g6IGUsIHk6IG4sIHo6IGh9ID0gQXJyYXkuaXNBcnJheSh0KSA/IHtcbiAgICAgICAgICAgIHg6IHRbMF0sXG4gICAgICAgICAgICB5OiB0WzFdLFxuICAgICAgICAgICAgejogdFsyXVxuICAgICAgICB9IDogdDtcbiAgICAgICAgaS54IC09IGU7XG4gICAgICAgIGkueSAtPSBuO1xuICAgICAgICBpLnogLT0gaDtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIG11bHRpcGx5KHQsIHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBpID0gcyA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGUgPSB0IGluc3RhbmNlb2YgVmVjdG9yMyA/IHQgOiBuZXcgVmVjdG9yMyh0LCB0LCB0KTtcbiAgICAgICAgaS54ICo9IGUueDtcbiAgICAgICAgaS55ICo9IGUueTtcbiAgICAgICAgaS56ICo9IGUuejtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIGRpdmlkZSh0LCBzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgaSA9IHMgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBjb25zdCBlID0gdCBpbnN0YW5jZW9mIFZlY3RvcjMgPyB0IDogbmV3IFZlY3Rvcih0LCB0LCB0KTtcbiAgICAgICAgaS54IC89IGUueDtcbiAgICAgICAgaS55IC89IGUueTtcbiAgICAgICAgaS56IC89IGUuejtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIG1vZHVsdXModCwgcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGkgPSBzID8gdGhpcyA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgZSA9IHQgaW5zdGFuY2VvZiBWZWN0b3IzID8gdCA6IG5ldyBWZWN0b3IzKHQsIHQsIHQpO1xuICAgICAgICBpLnggJT0gZS54O1xuICAgICAgICBpLnkgJT0gZS55O1xuICAgICAgICBpLnogJT0gZS56O1xuICAgICAgICByZXR1cm4gaTtcbiAgICB9XG4gICAgbm9ybWFsaXplKHQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBzID0gdCA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLm1hZ25pdHVkZTtcbiAgICAgICAgaWYgKGkgPiAwKSBzLmRpdmlkZShpLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIGRvdCh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0LnggKyB0aGlzLnkgKiB0LnkgKyB0aGlzLnogKiB0Lno7XG4gICAgfVxuICAgIHNpZ24odCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHMgPSB0ID8gdGhpcyA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgcy54ID0gTWF0aC5zaWduKHMueCk7XG4gICAgICAgIHMueSA9IE1hdGguc2lnbihzLnkpO1xuICAgICAgICBzLnogPSBNYXRoLnNpZ24ocy56KTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIGNsYW1wKHQsIHMsIGkgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlID0gaSA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGUueCA9IE1hdGgubWF4KHQueCwgTWF0aC5taW4oZS54LCBzLngpKTtcbiAgICAgICAgZS55ID0gTWF0aC5tYXgodC55LCBNYXRoLm1pbihlLnksIHMueSkpO1xuICAgICAgICBlLnogPSBNYXRoLm1heCh0LnosIE1hdGgubWluKGUueiwgcy56KSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBmbG9vcih0ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcyA9IHQgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBzLnggPSBNYXRoLmZsb29yKHMueCk7XG4gICAgICAgIHMueSA9IE1hdGguZmxvb3Iocy55KTtcbiAgICAgICAgcy56ID0gTWF0aC5mbG9vcihzLnopO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgcm90YXRlKHQsIHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBpID0gcyA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGUgPSB0ICogKE1hdGguUEkgLyAxODApO1xuICAgICAgICBjb25zdCBuID0gTWF0aC5zaW4oZSk7XG4gICAgICAgIGNvbnN0IGggPSBNYXRoLmNvcyhlKTtcbiAgICAgICAgY29uc3Qge3g6IHIsIHk6IG99ID0gaTtcbiAgICAgICAgaS54ID0gciAqIGggLSBvICogbjtcbiAgICAgICAgaS55ID0gciAqIG4gKyBvICogaDtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy54LCB0aGlzLnksIHRoaXMueik7XG4gICAgfVxuICAgIHRvQXJyYXkoKSB7XG4gICAgICAgIHJldHVybiBbIHRoaXMueCwgdGhpcy55LCB0aGlzLnogXTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnh9LCAke3RoaXMueX0sJHt0aGlzLnp9YDtcbiAgICB9XG4gICAgdG9WZWN0b3IyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSwgdGhpcy56KTtcbiAgICB9XG59XG5cbmNsYXNzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IodCA9IDAsIHMgPSAwLCBpID0gMCkge1xuICAgICAgICB0aGlzLnggPSB0O1xuICAgICAgICB0aGlzLnkgPSBzO1xuICAgICAgICB0aGlzLnogPSBpO1xuICAgIH1cbiAgICBnZXQgemVybygpIHtcbiAgICAgICAgcmV0dXJuIDAgPT09IE1hdGguYWJzKHRoaXMueCkgJiYgMCA9PT0gTWF0aC5hYnModGhpcy55KTtcbiAgICB9XG4gICAgZ2V0IG1hZ25pdHVkZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH1cbiAgICBnZXQgaGFsZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHkoLjUpO1xuICAgIH1cbiAgICBnZXQgbmVnSGFsZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHkoLS41KTtcbiAgICB9XG4gICAgc3RhdGljIGZyb20odCA9IDAsIHMgPSAwLCBpID0gMCkge1xuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFZlY3Rvcikge1xuICAgICAgICAgICAgcyA9IHQueTtcbiAgICAgICAgICAgIGkgPSB0Lno7XG4gICAgICAgICAgICB0ID0gdC54O1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodCkpIHtcbiAgICAgICAgICAgIHMgPSB0WzFdO1xuICAgICAgICAgICAgaSA9IHRbMl0gPz8gMDtcbiAgICAgICAgICAgIHQgPSB0WzBdO1xuICAgICAgICB9IGVsc2UgaWYgKFwic3RyaW5nXCIgPT09IHR5cGVvZiB0ICYmIHQuaW5jbHVkZXMoXCIsXCIpKSBbdCwgcywgaV0gPSB0LnNwbGl0KFwiLFwiKS5tYXAoKHQgPT4gK3QpKTsgZWxzZSBpZiAoXCJudW1iZXJcIiAhPT0gdHlwZW9mIHQgJiYgXCJzdHJpbmdcIiAhPT0gdHlwZW9mIHQgJiYgXCJ4XCIgaW4gdCAmJiBcInlcIiBpbiB0KSB7XG4gICAgICAgICAgICBzID0gdC55O1xuICAgICAgICAgICAgaSA9IHQuejtcbiAgICAgICAgICAgIHQgPSB0Lng7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodCwgcywgaSk7XG4gICAgfVxuICAgIGVxdWFscyh0KSB7XG4gICAgICAgIGlmICh0aGlzLnggIT09IHQueCB8fCB0aGlzLnkgIT09IHQueSB8fCB0aGlzLnogIT09IHQueikgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgYWRkKHQsIHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBpID0gcyA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IHt4OiBlLCB5OiBuLCB6OiBofSA9IEFycmF5LmlzQXJyYXkodCkgPyB7XG4gICAgICAgICAgICB4OiB0WzBdLFxuICAgICAgICAgICAgeTogdFsxXSxcbiAgICAgICAgICAgIHo6IHRbMl1cbiAgICAgICAgfSA6IHQ7XG4gICAgICAgIGkueCArPSBlO1xuICAgICAgICBpLnkgKz0gbjtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIHN1YnRyYWN0KHQsIHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBpID0gcyA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IHt4OiBlLCB5OiBuLCB6OiBofSA9IEFycmF5LmlzQXJyYXkodCkgPyB7XG4gICAgICAgICAgICB4OiB0WzBdLFxuICAgICAgICAgICAgeTogdFsxXSxcbiAgICAgICAgICAgIHo6IHRbMl1cbiAgICAgICAgfSA6IHQ7XG4gICAgICAgIGkueCAtPSBlO1xuICAgICAgICBpLnkgLT0gbjtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIG11bHRpcGx5KHQsIHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBpID0gcyA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGUgPSB0IGluc3RhbmNlb2YgVmVjdG9yID8gdCA6IG5ldyBWZWN0b3IodCwgdCwgdCk7XG4gICAgICAgIGkueCAqPSBlLng7XG4gICAgICAgIGkueSAqPSBlLnk7XG4gICAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgICBkaXZpZGUodCwgcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGkgPSBzID8gdGhpcyA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgZSA9IHQgaW5zdGFuY2VvZiBWZWN0b3IgPyB0IDogbmV3IFZlY3Rvcih0LCB0LCB0KTtcbiAgICAgICAgaS54IC89IGUueDtcbiAgICAgICAgaS55IC89IGUueTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIG1vZHVsdXModCwgcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGkgPSBzID8gdGhpcyA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgZSA9IHQgaW5zdGFuY2VvZiBWZWN0b3IgPyB0IDogbmV3IFZlY3Rvcih0LCB0LCB0KTtcbiAgICAgICAgaS54ICU9IGUueDtcbiAgICAgICAgaS55ICU9IGUueTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIG5vcm1hbGl6ZSh0ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcyA9IHQgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBjb25zdCBpID0gdGhpcy5tYWduaXR1ZGU7XG4gICAgICAgIGlmIChpID4gMCkgcy5kaXZpZGUoaSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBkb3QodCkge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdC54ICsgdGhpcy55ICogdC55O1xuICAgIH1cbiAgICBzaWduKHQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBzID0gdCA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIHMueCA9IE1hdGguc2lnbihzLngpO1xuICAgICAgICBzLnkgPSBNYXRoLnNpZ24ocy55KTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIGNsYW1wKHQsIHMsIGkgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlID0gaSA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGUueCA9IE1hdGgubWF4KHQueCwgTWF0aC5taW4oZS54LCBzLngpKTtcbiAgICAgICAgZS55ID0gTWF0aC5tYXgodC55LCBNYXRoLm1pbihlLnksIHMueSkpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgZmxvb3IodCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHMgPSB0ID8gdGhpcyA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgcy54ID0gTWF0aC5mbG9vcihzLngpO1xuICAgICAgICBzLnkgPSBNYXRoLmZsb29yKHMueSk7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICByb3RhdGUodCwgcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGkgPSBzID8gdGhpcyA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgZSA9IHQgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIGNvbnN0IG4gPSBNYXRoLnNpbihlKTtcbiAgICAgICAgY29uc3QgaCA9IE1hdGguY29zKGUpO1xuICAgICAgICBjb25zdCB7eDogciwgeTogb30gPSBpO1xuICAgICAgICBpLnggPSByICogaCAtIG8gKiBuO1xuICAgICAgICBpLnkgPSByICogbiArIG8gKiBoO1xuICAgICAgICByZXR1cm4gaTtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xuICAgIH1cbiAgICB0b0FycmF5KCkge1xuICAgICAgICByZXR1cm4gWyB0aGlzLngsIHRoaXMueSBdO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0sICR7dGhpcy55fWA7XG4gICAgfVxuICAgIHRvVmVjdG9yMygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xuICAgIH1cbn1cblxuY2xhc3MgUm91bmRlZFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKHQsIHMsIGksIGUgPSAwKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0O1xuICAgICAgICB0aGlzLnNpemUgPSBzO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IGk7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBlO1xuICAgICAgICB0aGlzLndvcmxkU3BhY2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50ID0gW107XG4gICAgfVxuICAgIGdldCBoYWxmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplLmhhbGY7XG4gICAgfVxuICAgIGdldCBsZWZ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5oYWxmLng7XG4gICAgfVxuICAgIHNldCBsZWZ0KHQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdCArIHRoaXMuaGFsZi54O1xuICAgIH1cbiAgICBnZXQgcmlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmhhbGYueDtcbiAgICB9XG4gICAgc2V0IHJpZ2h0KHQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdCAtIHRoaXMuaGFsZi54O1xuICAgIH1cbiAgICBnZXQgdG9wKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oYWxmLnk7XG4gICAgfVxuICAgIHNldCB0b3AodCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0ICsgdGhpcy5oYWxmLnk7XG4gICAgfVxuICAgIGdldCBib3R0b20oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhhbGYueTtcbiAgICB9XG4gICAgc2V0IGJvdHRvbSh0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHQgLSB0aGlzLmhhbGYueTtcbiAgICB9XG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplLng7XG4gICAgfVxuICAgIHNldCB3aWR0aCh0KSB7XG4gICAgICAgIHRoaXMuc2l6ZS54ID0gdDtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS55O1xuICAgIH1cbiAgICBzZXQgaGVpZ2h0KHQpIHtcbiAgICAgICAgdGhpcy5zaXplLnkgPSB0O1xuICAgIH1cbiAgICBnZXQgdmVydGljZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnQubGVuZ3RoID4gMCkgcmV0dXJuIHRoaXMudDtcbiAgICAgICAgdGhpcy50ID0gWyBuZXcgVmVjdG9yKC10aGlzLmhhbGYueCwgLXRoaXMuaGFsZi55KSwgbmV3IFZlY3RvcigrdGhpcy5oYWxmLngsIC10aGlzLmhhbGYueSksIG5ldyBWZWN0b3IoK3RoaXMuaGFsZi54LCArdGhpcy5oYWxmLnkpLCBuZXcgVmVjdG9yKC10aGlzLmhhbGYueCwgK3RoaXMuaGFsZi55KSBdO1xuICAgICAgICBjb25zdCB0ID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gMDtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0odCwgcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnQ7XG4gICAgfVxuICAgIGVxdWFscyh0KSB7XG4gICAgICAgIGlmICghdGhpcy5wb3NpdGlvbi5lcXVhbHModC5wb3NpdGlvbikgfHwgIXRoaXMuc2l6ZS5lcXVhbHModC5zaXplKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcm90YXRlKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMudmVydGljZXM7XG4gICAgICAgIGlmICgwICE9PSBNYXRoLmFicyh0KSkge1xuICAgICAgICAgICAgcy5mb3JFYWNoKChzID0+IHMucm90YXRlKHQsIHRydWUpKSk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnJvdGF0ZSh0LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub3JpZW50YXRpb24gKz0gdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnQgPSBzO1xuICAgIH1cbiAgICB0cmFuc2xhdGUodCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy52ZXJ0aWNlcztcbiAgICAgICAgcy5mb3JFYWNoKChzID0+IHMuYWRkKHQsIHRydWUpKSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkKHQsIHRydWUpO1xuICAgICAgICB0aGlzLnQgPSBzO1xuICAgIH1cbiAgICB0cmFuc2Zvcm0odCwgcykge1xuICAgICAgICB0aGlzLnJvdGF0ZShzKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUodCk7XG4gICAgfVxuICAgIHJlc2V0VmVydGljZXMoKSB7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLnBvc2l0aW9ufV0gKCR7dGhpcy5zaXplfSlgO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSb3VuZGVkUmVjdCh0aGlzLnBvc2l0aW9uLmNsb25lKCksIHRoaXMuc2l6ZS5jbG9uZSgpLCB0aGlzLm9yaWVudGF0aW9uKTtcbiAgICB9XG59XG5cbmNsYXNzIFN0YWRpdW0ge1xuICAgIGNvbnN0cnVjdG9yKHQsIHMsIGksIGUgPSAwKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0O1xuICAgICAgICB0aGlzLnNpemUgPSBzO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gZTtcbiAgICAgICAgdGhpcy53b3JsZFNwYWNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgICAgICB0aGlzLmhvcml6b250YWwgPSBcImhvcml6b250YWxcIiA9PT0gaTtcbiAgICB9XG4gICAgZ2V0IHJhZGl1cygpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmhvcml6b250YWwgPyB0aGlzLmhlaWdodCA6IHRoaXMud2lkdGgpIC8gMjtcbiAgICB9XG4gICAgZ2V0IGhhbGYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemUuaGFsZjtcbiAgICB9XG4gICAgZ2V0IGxlZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmhhbGYueDtcbiAgICB9XG4gICAgc2V0IGxlZnQodCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0ICsgdGhpcy5oYWxmLng7XG4gICAgfVxuICAgIGdldCByaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCArIHRoaXMuaGFsZi54O1xuICAgIH1cbiAgICBzZXQgcmlnaHQodCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0IC0gdGhpcy5oYWxmLng7XG4gICAgfVxuICAgIGdldCB0b3AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhhbGYueTtcbiAgICB9XG4gICAgc2V0IHRvcCh0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHQgKyB0aGlzLmhhbGYueTtcbiAgICB9XG4gICAgZ2V0IGJvdHRvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGFsZi55O1xuICAgIH1cbiAgICBzZXQgYm90dG9tKHQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdCAtIHRoaXMuaGFsZi55O1xuICAgIH1cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemUueDtcbiAgICB9XG4gICAgc2V0IHdpZHRoKHQpIHtcbiAgICAgICAgdGhpcy5zaXplLnggPSB0O1xuICAgIH1cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplLnk7XG4gICAgfVxuICAgIHNldCBoZWlnaHQodCkge1xuICAgICAgICB0aGlzLnNpemUueSA9IHQ7XG4gICAgfVxuICAgIGdldCBhcmVhKCkge1xuICAgICAgICBjb25zdCB0ID0gdGhpcy5yYWRpdXM7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLlBJICogdCAqIHQ7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmhvcml6b250YWwgPyAodGhpcy53aWR0aCAtIDIgKiB0KSAqIHRoaXMuaGVpZ2h0IDogKHRoaXMuaGVpZ2h0IC0gMiAqIHQpICogdGhpcy53aWR0aDtcbiAgICAgICAgcmV0dXJuIHMgKyBpO1xuICAgIH1cbiAgICBnZXQgYm91bmRpbmdSYWRpdXMoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLmhhbGYueCwgdGhpcy5oYWxmLnkpO1xuICAgIH1cbiAgICBnZXQgYm91bmRpbmdCb3goKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh0aGlzLnBvc2l0aW9uLmNsb25lKCksIHRoaXMuc2l6ZS5jbG9uZSgpKTtcbiAgICB9XG4gICAgZ2V0IHZlcnRpY2VzKCkge1xuICAgICAgICBpZiAodGhpcy50Lmxlbmd0aCA+IDApIHJldHVybiB0aGlzLnQ7XG4gICAgICAgIHRoaXMudCA9IFsgbmV3IFZlY3RvcigtdGhpcy5oYWxmLngsIC10aGlzLmhhbGYueSksIG5ldyBWZWN0b3IoK3RoaXMuaGFsZi54LCAtdGhpcy5oYWxmLnkpLCBuZXcgVmVjdG9yKCt0aGlzLmhhbGYueCwgK3RoaXMuaGFsZi55KSwgbmV3IFZlY3RvcigtdGhpcy5oYWxmLngsICt0aGlzLmhhbGYueSkgXTtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtKHQsIHMpO1xuICAgICAgICByZXR1cm4gdGhpcy50O1xuICAgIH1cbiAgICBlcXVhbHModCkge1xuICAgICAgICBpZiAoIXRoaXMucG9zaXRpb24uZXF1YWxzKHQucG9zaXRpb24pIHx8ICF0aGlzLnNpemUuZXF1YWxzKHQuc2l6ZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJvdGF0ZSh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLnZlcnRpY2VzO1xuICAgICAgICBpZiAoMCAhPT0gTWF0aC5hYnModCkpIHtcbiAgICAgICAgICAgIHMuZm9yRWFjaCgocyA9PiBzLnJvdGF0ZSh0LCB0cnVlKSkpO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5yb3RhdGUodCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm9yaWVudGF0aW9uICs9IHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ID0gcztcbiAgICB9XG4gICAgdHJhbnNsYXRlKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMudmVydGljZXM7XG4gICAgICAgIHMuZm9yRWFjaCgocyA9PiBzLmFkZCh0LCB0cnVlKSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZCh0LCB0cnVlKTtcbiAgICAgICAgdGhpcy50ID0gcztcbiAgICB9XG4gICAgdHJhbnNmb3JtKHQsIHMpIHtcbiAgICAgICAgdGhpcy5yb3RhdGUocyk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlKHQpO1xuICAgIH1cbiAgICByZXNldFZlcnRpY2VzKCkge1xuICAgICAgICB0aGlzLnQgPSBbXTtcbiAgICB9XG4gICAgb3ZlcmxhcHModCkge1xuICAgICAgICBjb25zdCBzID0gUG9pbnQuZnJvbSh0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuZ2V0U3dlcHRTaGFwZSh0KTtcbiAgICAgICAgcmV0dXJuIHMud2l0aGluKGkpO1xuICAgIH1cbiAgICBnZXRTd2VwdFNoYXBlKHQpIHtcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBDaXJjbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLmNsb25lKCk7XG4gICAgICAgICAgICBzLnNpemUuYWRkKG5ldyBWZWN0b3IoMiAqIHQucmFkaXVzLCAyICogdC5yYWRpdXMpLCB0cnVlKTtcbiAgICAgICAgICAgIHMucG9zaXRpb24gPSB0LnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFN0YWRpdW0pIHtcbiAgICAgICAgICAgIGxldCBzO1xuICAgICAgICAgICAgaWYgKHRoaXMuaG9yaXpvbnRhbCA9PT0gdC5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgcyA9IHQuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBzLnNpemUuYWRkKHRoaXMuc2l6ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgcyA9IG5ldyBSb3VuZGVkUmVjdCh0LnBvc2l0aW9uLmNsb25lKCksIHQuc2l6ZS5hZGQodGhpcy5zaXplKSwgdGhpcy5yYWRpdXMgKyB0LnJhZGl1cyk7XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBuZXcgUm91bmRlZFJlY3QodC5wb3NpdGlvbi5jbG9uZSgpLCB0LnNpemUuYWRkKHRoaXMuc2l6ZSksIHRoaXMucmFkaXVzKTtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLnBvc2l0aW9ufV0gKCR7dGhpcy5zaXplfSlgO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdGFkaXVtKHRoaXMucG9zaXRpb24uY2xvbmUoKSwgdGhpcy5zaXplLmNsb25lKCksIHRoaXMuaG9yaXpvbnRhbCA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiLCB0aGlzLm9yaWVudGF0aW9uKTtcbiAgICB9XG59XG5cbmNsYXNzIFBvaW50IGV4dGVuZHMgVmVjdG9yIHtcbiAgICBzdGF0aWMgZnJvbSh0ID0gMCwgcyA9IDAsIGkgPSAwKSB7XG4gICAgICAgIGNvbnN0IGUgPSBWZWN0b3IuZnJvbSh0LCBzLCBpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChlLngsIGUueSwgZS56KTtcbiAgICB9XG4gICAgd2l0aGluKHQpIHtcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBSZWN0KSByZXR1cm4gISh0aGlzLnggPCB0LmxlZnQgfHwgdGhpcy54ID4gdC5yaWdodCB8fCB0aGlzLnkgPCB0LnRvcCB8fCB0aGlzLnkgPiB0LmJvdHRvbSk7XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgQ2lyY2xlKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdC5wb3NpdGlvbi5zdWJ0cmFjdCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBzLm1hZ25pdHVkZTtcbiAgICAgICAgICAgIHJldHVybiBpICogaSA8IHQucmFkaXVzICogdC5yYWRpdXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBTdGFkaXVtKSBpZiAodC5ob3Jpem9udGFsKSByZXR1cm4gdGhpcy53aXRoaW4obmV3IFJlY3QodC5wb3NpdGlvbiwgdC5zaXplLnN1YnRyYWN0KG5ldyBWZWN0b3IoMiAqIHQucmFkaXVzLCAwKSkpKSB8fCB0aGlzLndpdGhpbihuZXcgQ2lyY2xlKG5ldyBWZWN0b3IodC5sZWZ0ICsgdC5yYWRpdXMsIHQucG9zaXRpb24ueSksIHQucmFkaXVzKSkgfHwgdGhpcy53aXRoaW4obmV3IENpcmNsZShuZXcgVmVjdG9yKHQucmlnaHQgLSB0LnJhZGl1cywgdC5wb3NpdGlvbi55KSwgdC5yYWRpdXMpKTsgZWxzZSByZXR1cm4gdGhpcy53aXRoaW4obmV3IFJlY3QodC5wb3NpdGlvbiwgdC5zaXplLnN1YnRyYWN0KG5ldyBWZWN0b3IoMCwgMiAqIHQucmFkaXVzKSkpKSB8fCB0aGlzLndpdGhpbihuZXcgQ2lyY2xlKG5ldyBWZWN0b3IodC5wb3NpdGlvbi54LCB0LnRvcCArIHQucmFkaXVzKSwgdC5yYWRpdXMpKSB8fCB0aGlzLndpdGhpbihuZXcgQ2lyY2xlKG5ldyBWZWN0b3IodC5wb3NpdGlvbi54LCB0LmJvdHRvbSAtIHQucmFkaXVzKSwgdC5yYWRpdXMpKTtcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBSb3VuZGVkUmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcyA9IHQucmFkaXVzO1xuICAgICAgICAgICAgY29uc3QgaSA9IDIgKiBzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2l0aGluKG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LmxlZnQgKyBzLCB0LnRvcCArIHMpLCBzKSkgfHwgdGhpcy53aXRoaW4obmV3IENpcmNsZShuZXcgVmVjdG9yKHQucmlnaHQgLSBzLCB0LnRvcCArIHMpLCBzKSkgfHwgdGhpcy53aXRoaW4obmV3IENpcmNsZShuZXcgVmVjdG9yKHQucmlnaHQgLSBzLCB0LmJvdHRvbSAtIHMpLCBzKSkgfHwgdGhpcy53aXRoaW4obmV3IENpcmNsZShuZXcgVmVjdG9yKHQubGVmdCArIHMsIHQuYm90dG9tIC0gcyksIHMpKSB8fCB0aGlzLndpdGhpbihuZXcgUmVjdCh0LnBvc2l0aW9uLCB0LnNpemUuc3VidHJhY3QobmV3IFZlY3RvcihpLCAwKSkpKSB8fCB0aGlzLndpdGhpbihuZXcgUmVjdCh0LnBvc2l0aW9uLCB0LnNpemUuc3VidHJhY3QobmV3IFZlY3RvcigwLCBpKSkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5jbGFzcyBDaXJjbGUge1xuICAgIGNvbnN0cnVjdG9yKHQsIHMsIGkgPSAwKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHM7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBpO1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMiAqIHRoaXMucmFkaXVzLCAyICogdGhpcy5yYWRpdXMpO1xuICAgIH1cbiAgICBnZXQgaGFsZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS5oYWxmO1xuICAgIH1cbiAgICBnZXQgbGVmdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCAtIHRoaXMuaGFsZi54O1xuICAgIH1cbiAgICBnZXQgcmlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmhhbGYueDtcbiAgICB9XG4gICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGFsZi55O1xuICAgIH1cbiAgICBnZXQgYm90dG9tKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oYWxmLnk7XG4gICAgfVxuICAgIGdldCBhcmVhKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5QSSAqIHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXM7XG4gICAgfVxuICAgIGdldCBib3VuZGluZ1JhZGl1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaXVzO1xuICAgIH1cbiAgICBnZXQgYm91bmRpbmdCb3goKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh0aGlzLnBvc2l0aW9uLmNsb25lKCksIG5ldyBWZWN0b3IoMiAqIHRoaXMucmFkaXVzLCAyICogdGhpcy5yYWRpdXMpKTtcbiAgICB9XG4gICAgZ2V0IHZlcnRpY2VzKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGVxdWFscyh0KSB7XG4gICAgICAgIGlmICghdGhpcy5wb3NpdGlvbi5lcXVhbHModC5wb3NpdGlvbikgfHwgdGhpcy5yYWRpdXMgIT09IHQucmFkaXVzKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByb3RhdGUodCkge1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uICs9IHQ7XG4gICAgfVxuICAgIHRyYW5zbGF0ZSh0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkKHQsIHRydWUpO1xuICAgIH1cbiAgICB0cmFuc2Zvcm0odCwgcykge1xuICAgICAgICB0aGlzLnJvdGF0ZShzKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUodCk7XG4gICAgfVxuICAgIG92ZXJsYXBzKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IFBvaW50LmZyb20odGhpcy5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmdldFN3ZXB0U2hhcGUodCk7XG4gICAgICAgIHJldHVybiBzLndpdGhpbihpKTtcbiAgICB9XG4gICAgZ2V0U3dlcHRTaGFwZSh0KSB7XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgQ2lyY2xlKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdC5jbG9uZSgpO1xuICAgICAgICAgICAgcy5yYWRpdXMgKz0gdGhpcy5yYWRpdXM7XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFN0YWRpdW0pIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0LmdldFN3ZXB0U2hhcGUodGhpcyk7XG4gICAgICAgICAgICBzLnBvc2l0aW9uID0gdC5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBzID0gbmV3IFJvdW5kZWRSZWN0KHQucG9zaXRpb24uY2xvbmUoKSwgdC5zaXplLmFkZChuZXcgVmVjdG9yKDIgKiB0aGlzLnJhZGl1cywgMiAqIHRoaXMucmFkaXVzKSksIHRoaXMucmFkaXVzKTtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDaXJjbGUodGhpcy5wb3NpdGlvbi5jbG9uZSgpLCB0aGlzLnJhZGl1cyk7XG4gICAgfVxufVxuXG5jbGFzcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0LCBzLCBpID0gMCkge1xuICAgICAgICB0aGlzLndvcmxkU3BhY2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pID0gMDtcbiAgICAgICAgdGhpcy50ID0gW107XG4gICAgICAgIHRoaXMuaCA9IHQ7XG4gICAgICAgIHRoaXMudSA9IHM7XG4gICAgICAgIHRoaXMuaSA9IGk7XG4gICAgfVxuICAgIGdldCBwb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaDtcbiAgICB9XG4gICAgc2V0IHBvc2l0aW9uKHQpIHtcbiAgICAgICAgdGhpcy5oID0gdDtcbiAgICAgICAgdGhpcy50ID0gW107XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51O1xuICAgIH1cbiAgICBzZXQgc2l6ZSh0KSB7XG4gICAgICAgIHRoaXMudSA9IHQ7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgIH1cbiAgICBnZXQgb3JpZW50YXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmk7XG4gICAgfVxuICAgIHNldCBvcmllbnRhdGlvbih0KSB7XG4gICAgICAgIHRoaXMuaSA9IHQ7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgIH1cbiAgICBnZXQgaGFsZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudS5oYWxmO1xuICAgIH1cbiAgICBnZXQgbGVmdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaC54IC0gdGhpcy5oYWxmLng7XG4gICAgfVxuICAgIHNldCBsZWZ0KHQpIHtcbiAgICAgICAgdGhpcy5oLnggPSB0ICsgdGhpcy5oYWxmLng7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgIH1cbiAgICBnZXQgcmlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmgueCArIHRoaXMuaGFsZi54O1xuICAgIH1cbiAgICBzZXQgcmlnaHQodCkge1xuICAgICAgICB0aGlzLmgueCA9IHQgLSB0aGlzLmhhbGYueDtcbiAgICAgICAgdGhpcy50ID0gW107XG4gICAgfVxuICAgIGdldCB0b3AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmgueSAtIHRoaXMuaGFsZi55O1xuICAgIH1cbiAgICBzZXQgdG9wKHQpIHtcbiAgICAgICAgdGhpcy5oLnkgPSB0ICsgdGhpcy5oYWxmLnk7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgIH1cbiAgICBnZXQgYm90dG9tKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oLnkgKyB0aGlzLmhhbGYueTtcbiAgICB9XG4gICAgc2V0IGJvdHRvbSh0KSB7XG4gICAgICAgIHRoaXMuaC55ID0gdCAtIHRoaXMuaGFsZi55O1xuICAgICAgICB0aGlzLnQgPSBbXTtcbiAgICB9XG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51Lng7XG4gICAgfVxuICAgIHNldCB3aWR0aCh0KSB7XG4gICAgICAgIHRoaXMudS54ID0gdDtcbiAgICAgICAgdGhpcy50ID0gW107XG4gICAgfVxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnUueTtcbiAgICB9XG4gICAgc2V0IGhlaWdodCh0KSB7XG4gICAgICAgIHRoaXMudS55ID0gdDtcbiAgICAgICAgdGhpcy50ID0gW107XG4gICAgfVxuICAgIGdldCBhcmVhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueTtcbiAgICB9XG4gICAgZ2V0IGJvdW5kaW5nUmFkaXVzKCkge1xuICAgICAgICBjb25zdCB0ID0gdGhpcy5oYWxmLm11bHRpcGx5KHRoaXMuaGFsZik7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodC54ICsgdC55KTtcbiAgICB9XG4gICAgZ2V0IGJvdW5kaW5nQm94KCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0IHZlcnRpY2VzKCkge1xuICAgICAgICBpZiAodGhpcy50Lmxlbmd0aCA+IDApIHJldHVybiB0aGlzLnQ7XG4gICAgICAgIHRoaXMudCA9IFsgbmV3IFZlY3RvcigtdGhpcy5oYWxmLngsIC10aGlzLmhhbGYueSksIG5ldyBWZWN0b3IoK3RoaXMuaGFsZi54LCAtdGhpcy5oYWxmLnkpLCBuZXcgVmVjdG9yKCt0aGlzLmhhbGYueCwgK3RoaXMuaGFsZi55KSwgbmV3IFZlY3RvcigtdGhpcy5oYWxmLngsICt0aGlzLmhhbGYueSkgXTtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMuaDtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuaTtcbiAgICAgICAgdGhpcy5oID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICAgICAgdGhpcy5pID0gMDtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0odCwgcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnQ7XG4gICAgfVxuICAgIGVxdWFscyh0KSB7XG4gICAgICAgIGlmICghdGhpcy5oLmVxdWFscyh0LnBvc2l0aW9uKSB8fCAhdGhpcy51LmVxdWFscyh0LnNpemUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByb3RhdGUodCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy52ZXJ0aWNlcztcbiAgICAgICAgaWYgKDAgIT09IE1hdGguYWJzKHQpKSB7XG4gICAgICAgICAgICBzLmZvckVhY2goKHMgPT4gcy5yb3RhdGUodCwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIHRoaXMuaC5yb3RhdGUodCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmkgKz0gdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnQgPSBzO1xuICAgIH1cbiAgICB0cmFuc2xhdGUodCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy52ZXJ0aWNlcztcbiAgICAgICAgcy5mb3JFYWNoKChzID0+IHMuYWRkKHQsIHRydWUpKSk7XG4gICAgICAgIHRoaXMuaC5hZGQodCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudCA9IHM7XG4gICAgfVxuICAgIHRyYW5zZm9ybSh0LCBzKSB7XG4gICAgICAgIHRoaXMucm90YXRlKHMpO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSh0KTtcbiAgICB9XG4gICAgcmVzZXRWZXJ0aWNlcygpIHtcbiAgICAgICAgdGhpcy50ID0gW107XG4gICAgfVxuICAgIG92ZXJsYXBzKHQpIHtcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBSZWN0KSByZXR1cm4gISh0aGlzLmxlZnQgPiB0LnJpZ2h0IHx8IHRoaXMucmlnaHQgPCB0LmxlZnQgfHwgdGhpcy50b3AgPiB0LmJvdHRvbSB8fCB0aGlzLmJvdHRvbSA8IHQudG9wKTtcbiAgICAgICAgY29uc3QgcyA9IFBvaW50LmZyb20odGhpcy5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmdldFN3ZXB0U2hhcGUodCk7XG4gICAgICAgIHJldHVybiBzLndpdGhpbihpKTtcbiAgICB9XG4gICAgd2l0aGluKHQpIHtcbiAgICAgICAgcmV0dXJuICEodGhpcy5sZWZ0IDwgdC5sZWZ0IHx8IHRoaXMucmlnaHQgPiB0LnJpZ2h0IHx8IHRoaXMudG9wIDwgdC50b3AgfHwgdGhpcy5ib3R0b20gPiB0LmJvdHRvbSk7XG4gICAgfVxuICAgIGdldFN3ZXB0U2hhcGUodCkge1xuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFN0YWRpdW0pIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0LmdldFN3ZXB0U2hhcGUodGhpcyk7XG4gICAgICAgICAgICBzLnBvc2l0aW9uID0gdC5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdC5jbG9uZSgpO1xuICAgICAgICAgICAgcy5zaXplLmFkZCh0aGlzLnNpemUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBDaXJjbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0LmdldFN3ZXB0U2hhcGUodGhpcyk7XG4gICAgICAgICAgICBzLnBvc2l0aW9uID0gdC5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFske3RoaXMuaH1dICgke3RoaXMudX0pYDtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh0aGlzLmguY2xvbmUoKSwgdGhpcy51LmNsb25lKCksIHRoaXMuaSk7XG4gICAgfVxufVxuXG52YXIgdDtcblxuY2xhc3MgUXVhZFRyZWVSZXNvbHZlciB7XG4gICAgY29uc3RydWN0b3IodCwgcykge1xuICAgICAgICB0aGlzLlYgPSBuZXcgV2Vha01hcDtcbiAgICAgICAgdGhpcy5SID0gbmV3IFF1YWRUcmVlKG5ldyBSZWN0KHQsIHMpKTtcbiAgICB9XG4gICAgdXBkYXRlRW50aXR5UHJveGltaXRpZXModCwgcykge1xuICAgICAgICB0LmZvckVhY2goKHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaSA9IG5ldyBSZWN0KHQucG9zaXRpb24sIHQubW92ZW1lbnRCb3guc2l6ZSk7XG4gICAgICAgICAgICBjb25zdCBlID0gdGhpcy5SLnNlYXJjaChpKTtcbiAgICAgICAgICAgIGUuZm9yRWFjaCgoaSA9PiB7XG4gICAgICAgICAgICAgICAgdC5uZWFyLmFkZChpKTtcbiAgICAgICAgICAgICAgICBzLnByb3hpbWl0aWVzKys7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB0Lm5lYXIuZGVsZXRlKHQpO1xuICAgICAgICAgICAgcy5wcm94aW1pdGllcy0tO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGFkZEVudGl0eSh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSBuZXcgUmVjdCh0LnBvc2l0aW9uLCB0Lm1vdmVtZW50Qm94LnNpemUpO1xuICAgICAgICBjb25zdCBpID0gbmV3IFF1YWRUcmVlSXRlbSh0LCBzKTtcbiAgICAgICAgaS5xdWFkdHJlZSA9IHRoaXMuUi5hZGQoaSk7XG4gICAgICAgIHdoaWxlIChudWxsID09IGkucXVhZHRyZWUpIHtcbiAgICAgICAgICAgIHRoaXMuUiA9IHRoaXMuUi5jcmVhdGVQYXJlbnQodC5wb3NpdGlvbik7XG4gICAgICAgICAgICBpLnF1YWR0cmVlID0gdGhpcy5SLmFkZChpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlYuc2V0KHQsIGkpO1xuICAgIH1cbiAgICB1cGRhdGVFbnRpdHkodCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy5WLmdldCh0KTtcbiAgICAgICAgY29uc3QgaSA9IG5ldyBSZWN0KHQucG9zaXRpb24sIHQubW92ZW1lbnRCb3guc2l6ZSk7XG4gICAgICAgIHMuYXJlYSA9IGk7XG4gICAgICAgIHMucXVhZHRyZWUgPSBzLnF1YWR0cmVlLnVwZGF0ZShzKTtcbiAgICAgICAgd2hpbGUgKG51bGwgPT0gcy5xdWFkdHJlZSkge1xuICAgICAgICAgICAgdGhpcy5SID0gdGhpcy5SLmNyZWF0ZVBhcmVudCh0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIHMucXVhZHRyZWUgPSB0aGlzLlIudXBkYXRlKHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuVi5zZXQodCwgcyk7XG4gICAgfVxuICAgIHJlbW92ZUVudGl0eSh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLlYuZ2V0KHQpO1xuICAgICAgICBzLnF1YWR0cmVlLnJlbW92ZShzKTtcbiAgICAgICAgdGhpcy5WLmRlbGV0ZSh0KTtcbiAgICB9XG4gICAgZmluZEVudGl0aWVzKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBSZWN0KHQucG9zaXRpb24sIG5ldyBWZWN0b3IodC5yYWRpdXMsIHQucmFkaXVzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLlIuc2VhcmNoKHMpO1xuICAgIH1cbn1cblxuY2xhc3MgUXVhZFRyZWVJdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0LCBzLCBpKSB7XG4gICAgICAgIHRoaXMuZW50aXR5ID0gdDtcbiAgICAgICAgdGhpcy5hcmVhID0gcztcbiAgICAgICAgdGhpcy5xdWFkdHJlZSA9IGk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRLZXkodCkge1xuICAgICAgICByZXR1cm4gYCR7dC5wb3NpdGlvbi54fSwke3QucG9zaXRpb24ueX0sJHt0LnNpemUueH0sJHt0LnNpemUueX1gO1xuICAgIH1cbn1cblxuY2xhc3MgUXVhZFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKHMsIGkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXJlYSA9IHM7XG4gICAgICAgIHRoaXMucGFyZW50ID0gaTtcbiAgICAgICAgdC5hZGQodGhpcyk7XG4gICAgICAgIHRoaXMuTSA9IFtdO1xuICAgICAgICBjb25zdCBlID0gdGhpcy5hcmVhLmhhbGY7XG4gICAgICAgIGNvbnN0IG4gPSBlLmhhbGY7XG4gICAgICAgIHRoaXMuUCA9IFsgbmV3IFJlY3QodGhpcy5hcmVhLnBvc2l0aW9uLmFkZChuZXcgVmVjdG9yKCtuLngsIC1uLnkpKSwgZSksIG5ldyBSZWN0KHRoaXMuYXJlYS5wb3NpdGlvbi5hZGQobmV3IFZlY3Rvcigtbi54LCArbi55KSksIGUpLCBuZXcgUmVjdCh0aGlzLmFyZWEucG9zaXRpb24uYWRkKG5ldyBWZWN0b3IoK24ueCwgK24ueSkpLCBlKSwgbmV3IFJlY3QodGhpcy5hcmVhLnBvc2l0aW9uLmFkZChuZXcgVmVjdG9yKC1uLngsIC1uLnkpKSwgZSkgXTtcbiAgICAgICAgdGhpcy5DID0gWyBudWxsLCBudWxsLCBudWxsLCBudWxsIF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlZCBuZXcgcXVhZHRyZWVcIiwgcyk7XG4gICAgfVxuICAgIGFkZCh0LCBzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5DW2ldID09PSBzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICh0LmFyZWEud2l0aGluKHRoaXMuUFtpXSkpIHtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSB0aGlzLkNbaV0pIHRoaXMuQ1tpXSA9IG5ldyBRdWFkVHJlZSh0aGlzLlBbaV0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNbaV0/LmFkZCh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodC5hcmVhLndpdGhpbih0aGlzLmFyZWEpKSB7XG4gICAgICAgICAgICB0aGlzLk0ucHVzaCh0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudWxsID09IHRoaXMucGFyZW50KSBjb25zb2xlLmxvZyhcIkNSRUFURSBORVcgUVVBRFRSRUUgUk9PVFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Py5hZGQodCwgdGhpcyk7XG4gICAgfVxuICAgIHJlbW92ZSh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLk0uaW5kZXhPZih0KTtcbiAgICAgICAgaWYgKHMgPiAtMSkgdGhpcy5NLnNwbGljZShzLCAxKTtcbiAgICB9XG4gICAgdXBkYXRlKHQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUodCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZCh0KTtcbiAgICB9XG4gICAgc2VhcmNoKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgdGhpcy5NKSBpZiAodC5vdmVybGFwcyhpLmFyZWEpKSBzLnB1c2goaS5lbnRpdHkpO1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgdGhpcy5DKSB7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChpLmFyZWEud2l0aGluKHQpKSBzLnB1c2goLi4uaS5lbnRpdGllcyk7IGVsc2UgaWYgKHQub3ZlcmxhcHMoaS5hcmVhKSkgcy5wdXNoKC4uLmkuc2VhcmNoKHQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgZ2V0IGVudGl0aWVzKCkge1xuICAgICAgICBjb25zdCB0ID0gWyAuLi50aGlzLk0ubWFwKCh0ID0+IHQuZW50aXR5KSkgXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHRoaXMuQykgaWYgKG51bGwgIT0gcykgdC5wdXNoKC4uLnMuZW50aXRpZXMpO1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG4gICAgY3JlYXRlUGFyZW50KHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuYXJlYS5oYWxmO1xuICAgICAgICBjb25zdCBpID0gcy5oYWxmO1xuICAgICAgICB0aGlzLkMucHVzaChuZXcgUXVhZFRyZWUobmV3IFJlY3QodGhpcy5hcmVhLnBvc2l0aW9uLmFkZChuZXcgVmVjdG9yKC1pLngsIC1pLnkpKSwgcyksIHRoaXMpKTtcbiAgICAgICAgdGhpcy5DLnB1c2gobmV3IFF1YWRUcmVlKG5ldyBSZWN0KHRoaXMuYXJlYS5wb3NpdGlvbi5hZGQobmV3IFZlY3RvcigraS54LCAtaS55KSksIHMpLCB0aGlzKSk7XG4gICAgICAgIHRoaXMuQy5wdXNoKG5ldyBRdWFkVHJlZShuZXcgUmVjdCh0aGlzLmFyZWEucG9zaXRpb24uYWRkKG5ldyBWZWN0b3IoLWkueCwgK2kueSkpLCBzKSwgdGhpcykpO1xuICAgICAgICB0aGlzLkMucHVzaChuZXcgUXVhZFRyZWUobmV3IFJlY3QodGhpcy5hcmVhLnBvc2l0aW9uLmFkZChuZXcgVmVjdG9yKCtpLngsICtpLnkpKSwgcyksIHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG50ID0gbmV3IFdlYWtTZXQ7XG5cbmNsYXNzIEZvcmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0LCBzKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHQ7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBzO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMubWFnbml0dWRlID0gMDtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZSh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSBuZXcgRm9yY2UodC5uYW1lLCB0LmR1cmF0aW9uID8/IDApO1xuICAgICAgICBzLmRpcmVjdGlvbiA9IHQuZGlyZWN0aW9uO1xuICAgICAgICBzLm1heE1hZ25pdHVkZSA9IHQubWF4TWFnbml0dWRlID8/IDE7XG4gICAgICAgIHMuYWNjZWxlcmF0aW9uID0gdC5hY2NlbGVyYXRpb247XG4gICAgICAgIHMuZGVjZWxlcmF0aW9uID0gdC5kZWNlbGVyYXRpb247XG4gICAgICAgIHMuY2FsbGJhY2sgPSB0LmNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgdXBkYXRlKHQsIHMpIHtcbiAgICAgICAgaWYgKFwiZ3Jhdml0eVwiID09PSB0aGlzLm5hbWUpIGNvbnNvbGUubG9nKFwiRm9yY2VcIiwgdGhpcy5tYWduaXR1ZGUpO1xuICAgICAgICBpZiAoMCAhPT0gdGhpcy5kdXJhdGlvbiAmJiB0aGlzLmR1cmF0aW9uICE9PSAxIC8gMCkge1xuICAgICAgICAgICAgaWYgKG51bGwgPT0gdGhpcy5zdGFydFRpbWUpIHRoaXMuc3RhcnRUaW1lID0gcztcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0VGltZSArIHRoaXMuZHVyYXRpb24gPiBzKSBpZiAodGhpcy5tYWduaXR1ZGUgPiAwKSBpZiAobnVsbCA9PSB0aGlzLmRlY2VsZXJhdGlvbikgdGhpcy5tYWduaXR1ZGUgPSAwOyBlbHNlIHRoaXMubWFnbml0dWRlIC09IHRoaXMuZGVjZWxlcmF0aW9uICogdDsgZWxzZSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bGwgIT0gdGhpcy5jYWxsYmFjaykgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5tYWduaXR1ZGUgPCB0aGlzLm1heE1hZ25pdHVkZSkgaWYgKG51bGwgPT0gdGhpcy5hY2NlbGVyYXRpb24pIHRoaXMubWFnbml0dWRlID0gdGhpcy5tYXhNYWduaXR1ZGU7IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYWduaXR1ZGUgKz0gdGhpcy5hY2NlbGVyYXRpb24gKiB0O1xuICAgICAgICAgICAgaWYgKHRoaXMubWFnbml0dWRlID4gdGhpcy5tYXhNYWduaXR1ZGUpIHRoaXMubWFnbml0dWRlID0gdGhpcy5tYXhNYWduaXR1ZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWZmZWN0KHQpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgIT0gdGhpcy5jYWxsYmFjayA/ICgoKSA9PiB0aGlzLmNhbGxiYWNrKHRoaXMsIHQpKSgpIDogbmV3IFZlY3RvcigodGhpcy5kaXJlY3Rpb24/LnggPz8gMSkgKiB0aGlzLm1hZ25pdHVkZSwgKHRoaXMuZGlyZWN0aW9uPy55ID8/IDEpICogdGhpcy5tYWduaXR1ZGUpO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1hZ25pdHVkZSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIEZvcmNlLmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgc3RhdGljIERyYWcodCA9IHt9KSB7XG4gICAgICAgIHQuZGVuc2l0eSA/PyAodC5kZW5zaXR5ID0gMSk7XG4gICAgICAgIHQuY29lZmZpY2llbnQgPz8gKHQuY29lZmZpY2llbnQgPSAuMSk7XG4gICAgICAgIHQuc3VyZmFjZSA/PyAodC5zdXJmYWNlID0gKHQsIHMpID0+IHMuZ2V0U3VyZmFjZUFyZWE/LigpID8/IDUwMCk7XG4gICAgICAgIGNvbnN0IHMgPSAtLjUgKiB0LmRlbnNpdHkgKiAodC5jb2VmZmljaWVudCAvIDFlNik7XG4gICAgICAgIHJldHVybiBGb3JjZS5jcmVhdGUoe1xuICAgICAgICAgICAgbmFtZTogXCJkcmFnXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMSAvIDAsXG4gICAgICAgICAgICBjYWxsYmFjazogKGksIGUpID0+IGZ1bmN0aW9uKHQsIHMsIGksIGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gcy52ZWxvY2l0eS5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoID0gcy52ZWxvY2l0eS5tYWduaXR1ZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgciA9IGUodCwgcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG4ubXVsdGlwbHkoaSAqIHIgKiBoICogaCwgdHJ1ZSk7XG4gICAgICAgICAgICB9KGksIGUsIHMsIHQuc3VyZmFjZSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBHcmF2aXR5KHQgPSB7fSkge1xuICAgICAgICB0LkcgPz8gKHQuRyA9IDEpO1xuICAgICAgICB0LmRpcmVjdGlvbiA/PyAodC5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yKDAsIDEpKTtcbiAgICAgICAgcmV0dXJuIEZvcmNlLmNyZWF0ZSh7XG4gICAgICAgICAgICBuYW1lOiBcImdyYXZpdHlcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxIC8gMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogdC5kaXJlY3Rpb24sXG4gICAgICAgICAgICBtYWduaXR1ZGU6IDFlNCAqIHQuR1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFNoYXBlIHtcbiAgICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgICAgIHRoaXMuZW50aXR5ID0gdDtcbiAgICAgICAgdGhpcy50eXBlcyA9IFtdO1xuICAgIH1cbiAgICBnZXQgd29ybGRQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMuZW50aXR5LnBvc2l0aW9uLmFkZCh0aGlzLnNoYXBlLnBvc2l0aW9uKTtcbiAgICAgICAgdC56ICs9IHRoaXMuc2hhcGUucG9zaXRpb24uejtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICAgIGdldCB3b3JsZFNoYXBlKCkge1xuICAgICAgICBjb25zdCB0ID0gdGhpcy5jbG9uZSgpO1xuICAgICAgICB0LnNoYXBlLndvcmxkU3BhY2UgPSB0cnVlO1xuICAgICAgICB0LnNoYXBlLnRyYW5zZm9ybSh0aGlzLmVudGl0eS5wb3NpdGlvbiwgdGhpcy5lbnRpdHkub3JpZW50YXRpb24pO1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG4gICAgZ2V0IHJlbmRlclBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGFwZS5zaXplLm5lZ0hhbGYuYWRkKHRoaXMuc2hhcGUucG9zaXRpb24pO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKHQsIHMpIHtcbiAgICAgICAgY29uc3QgaSA9IG5ldyBTaGFwZSh0KTtcbiAgICAgICAgaWYgKG51bGwgPT0gcy5zaGFwZSkgaWYgKG51bGwgIT0gcy5hbGlnbm1lbnQpIHMuc2hhcGUgPSBcInN0YWRpdW1cIjsgZWxzZSBpZiAobnVsbCAhPSBzLnJhZGl1cykgcy5zaGFwZSA9IFwiY2lyY2xlXCI7IGVsc2UgaWYgKG51bGwgIT0gcy5zaXplKSBzLnNoYXBlID0gXCJyZWN0XCI7IGVsc2UgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gaW5mZXIgc2hhcGU6ICR7SlNPTi5zdHJpbmdpZnkocyl9IWApO1xuICAgICAgICBzd2l0Y2ggKHMuc2hhcGUpIHtcbiAgICAgICAgICBjYXNlIFwicmVjdFwiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBWZWN0b3IuZnJvbShzLnNpemUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBWZWN0b3IuZnJvbShzLnBvc2l0aW9uID8/IFsgMCwgMCBdKTtcbiAgICAgICAgICAgICAgICBpLnNoYXBlID0gbmV3IFJlY3QoZSwgdCwgcy5vcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFwiY2lyY2xlXCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHMucmFkaXVzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBWZWN0b3IuZnJvbShzLnBvc2l0aW9uID8/IFsgMCwgMCBdKTtcbiAgICAgICAgICAgICAgICBpLnNoYXBlID0gbmV3IENpcmNsZShlLCB0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgXCJzdGFkaXVtXCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IFZlY3Rvci5mcm9tKHMuc2l6ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IFZlY3Rvci5mcm9tKHMucG9zaXRpb24gPz8gWyAwLCAwIF0pO1xuICAgICAgICAgICAgICAgIGkuc2hhcGUgPSBuZXcgU3RhZGl1bShlLCB0LCBzLmFsaWdubWVudCwgcy5vcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaS5uYW1lID0gcy5uYW1lID8/IFwiXCI7XG4gICAgICAgIGkuY29sb3IgPSBzLmNvbG9yO1xuICAgICAgICBpLnNpZ25hbCA9IHMuc2lnbmFsO1xuICAgICAgICBpLnR5cGVzID0gQXJyYXkuaXNBcnJheShzLnR5cGVzKSA/IFsgLi4ucy50eXBlcyBdIDogWyBzLnR5cGVzID8/IFwiY29sbGlzaW9uXCIgXTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCB0ID0gbmV3IFNoYXBlKHRoaXMuZW50aXR5KTtcbiAgICAgICAgdC5sb2NhbFNoYXBlID0gdGhpcztcbiAgICAgICAgdC5zaGFwZSA9IHRoaXMuc2hhcGUuY2xvbmUoKTtcbiAgICAgICAgdC50eXBlcyA9IHRoaXMudHlwZXM7XG4gICAgICAgIHQuc2lnbmFsID0gdGhpcy5zaWduYWw7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH1cbn1cblxuY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3I7XG4gICAgICAgIHRoaXMubW92ZW1lbnRzID0gMDtcbiAgICAgICAgdGhpcy5tYXNzID0gMTtcbiAgICAgICAgdGhpcy5mb3JjZXMgPSBbXTtcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDFlNjtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICAgICAgdGhpcy53b3JsZFNoYXBlcyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblR5cGVzID0ge307XG4gICAgICAgIHRoaXMuc2lnbmFsVHlwZXMgPSB7fTtcbiAgICAgICAgdGhpcy5uZWFyID0gbmV3IFNldDtcbiAgICAgICAgdGhpcy5pID0gMDtcbiAgICAgICAgdGhpcy5oID0gbmV3IFZlY3RvcjtcbiAgICB9XG4gICAgZ2V0IGxlZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNoYXBlc1swXS5zaGFwZS5zaXplLm5lZ0hhbGYueDtcbiAgICB9XG4gICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2hhcGVzWzBdLnNoYXBlLnNpemUubmVnSGFsZi55O1xuICAgIH1cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmg7XG4gICAgfVxuICAgIHNldCBwb3NpdGlvbih0KSB7XG4gICAgICAgIGlmICh0LnggPT09IHRoaXMuaC54ICYmIHQueSA9PT0gdGhpcy5oLnkpIHtcbiAgICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgVmVjdG9yKSB0aGlzLmggPSB0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaCA9IHQgaW5zdGFuY2VvZiBWZWN0b3IgPyB0IDogbmV3IFZlY3Rvcih0LngsIHQueSk7XG4gICAgfVxuICAgIGdldCBvcmllbnRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaTtcbiAgICB9XG4gICAgc2V0IG9yaWVudGF0aW9uKHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaSA9PT0gdCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmkgPSB0O1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBFbnRpdHk7XG4gICAgICAgIHMuZW50aXR5ID0gdC5lbnRpdHkgPz8gdDtcbiAgICAgICAgcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3Iocy5lbnRpdHkucG9zaXRpb24ueCwgcy5lbnRpdHkucG9zaXRpb24ueSk7XG4gICAgICAgIHMub3JpZW50YXRpb24gPSB0Lm9yaWVudGF0aW9uID8/IHMuaTtcbiAgICAgICAgcy5tYXNzID0gdC5tYXNzID8/IHMubWFzcztcbiAgICAgICAgcy5mb3JjZXMgPSAodC5mb3JjZXMgPz8gW10pLm1hcCgodCA9PiB0IGluc3RhbmNlb2YgRm9yY2UgPyB0IDogdCA9IEZvcmNlLmNyZWF0ZSh0KSkpO1xuICAgICAgICBzLm1heFNwZWVkID0gdC5tYXhTcGVlZCA/PyBzLm1heFNwZWVkO1xuICAgICAgICBzLmNvbG9yID0gdC5jb2xvcjtcbiAgICAgICAgKHQuc2hhcGVzID8/IFtdKS5mb3JFYWNoKCh0ID0+IHMuYWRkU2hhcGUodCkpKTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIGFkZEZvcmNlKHQpIHtcbiAgICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZvcmNlKSkgdCA9IEZvcmNlLmNyZWF0ZSh0KTtcbiAgICAgICAgdGhpcy5mb3JjZXMucHVzaCh0KTtcbiAgICB9XG4gICAgYXBwbHlGb3JjZXModCwgcykge1xuICAgICAgICBpZiAobnVsbCA9PSB0aGlzLnBvc2l0aW9uKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mb3JjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSB0aGlzLmZvcmNlc1tpXTtcbiAgICAgICAgICAgIGUudXBkYXRlKHQsIHMpO1xuICAgICAgICAgICAgY29uc3QgbiA9IGUuZWZmZWN0KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5hZGQobiwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZS5kdXJhdGlvbiA8PSAwKSB0aGlzLmZvcmNlcy5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVtZW50cyA9IDA7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBhZGRTaGFwZSh0KSB7XG4gICAgICAgIGlmICghKHQgaW5zdGFuY2VvZiBTaGFwZSkpIHQgPSBTaGFwZS5jcmVhdGUodGhpcywgdCk7XG4gICAgICAgIHRoaXMuc2hhcGVzLnB1c2godCk7XG4gICAgICAgIHRoaXMuSSgpO1xuICAgICAgICB0aGlzLmJvdW5kaW5nUmFkaXVzID0gdGhpcy5GKCk7XG4gICAgICAgIHRoaXMubW92ZW1lbnRSYWRpdXMgPSB0aGlzLiQoMSAvIDYwKTtcbiAgICAgICAgdGhpcy5ib3VuZGluZ0JveCA9IHRoaXMuQSgpO1xuICAgICAgICB0aGlzLm1vdmVtZW50Qm94ID0gdGhpcy5OKDEgLyA2MCk7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH1cbiAgICBwcmVwYXJlTW92ZW1lbnQodCwgcykge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMudmVsb2NpdHkubm9ybWFsaXplKCk7XG4gICAgICAgIGlmICgrK3RoaXMubW92ZW1lbnRzIDwgMTUpIHRoaXMuc3BlZWQgPSBNYXRoLmFicyh0aGlzLnZlbG9jaXR5Lm1hZ25pdHVkZSk7IGVsc2UgaWYgKHRoaXMubW92ZW1lbnRzID49IDIwKSB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgaWYgKHRoaXMuc3BlZWQgPCAxZS01KSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNwZWVkID4gdGhpcy5tYXhTcGVlZCAmJiB0aGlzLm1vdmVtZW50cyA8IDE1KSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5tYXhTcGVlZDtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLmRpcmVjdGlvbi5tdWx0aXBseSh0aGlzLnNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVtZW50Qm94ID0gdGhpcy5OKHQpO1xuICAgICAgICBjb25zdCBpID0gdGhpcy4kKHQpO1xuICAgICAgICBpZiAoaSAhPT0gdGhpcy5tb3ZlbWVudFJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudFJhZGl1cyA9IGk7XG4gICAgICAgICAgICBQaHlzaWNzLnVwZGF0ZUVudGl0eSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zcGVlZCA+IDA7XG4gICAgfVxuICAgIG1vdmUodCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmRpcmVjdGlvbi5tdWx0aXBseSh0aGlzLnNwZWVkICogdCksIHRydWUpO1xuICAgICAgICBQaHlzaWNzLnVwZGF0ZUVudGl0eSh0aGlzKTtcbiAgICB9XG4gICAgbW92ZVRvKHQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdC54O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0Lnk7XG4gICAgICAgIHRoaXMud29ybGRTaGFwZXMgPSB0aGlzLnNoYXBlcy5tYXAoKHQgPT4gdC53b3JsZFNoYXBlKSk7XG4gICAgICAgIFBoeXNpY3MudXBkYXRlRW50aXR5KHRoaXMpO1xuICAgIH1cbiAgICBnZXRTdXJmYWNlQXJlYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hhcGVzWzBdLnNoYXBlLmFyZWE7XG4gICAgfVxuICAgIEkoKSB7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uVHlwZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zaWduYWxUeXBlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdGhpcy5zaGFwZXMpIGZvciAoY29uc3QgcyBvZiB0LnR5cGVzKSB7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSBQaHlzaWNzLmNvbGxpc2lvbnNbc10pIHtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSB0aGlzLmNvbGxpc2lvblR5cGVzW3NdKSB0aGlzLmNvbGxpc2lvblR5cGVzW3NdID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25UeXBlc1tzXS5wdXNoKHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG51bGwgIT0gUGh5c2ljcy5zaWduYWxzW3NdKSB7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gdGhpcy5zaWduYWxUeXBlc1tzXSkgdGhpcy5zaWduYWxUeXBlc1tzXSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2lnbmFsVHlwZXNbc10ucHVzaCh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBGKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoLi4udGhpcy5zaGFwZXMubWFwKCh0ID0+IHQuc2hhcGUuYm91bmRpbmdSYWRpdXMpKSk7XG4gICAgfVxuICAgIEEoKSB7XG4gICAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbiguLi50aGlzLnNoYXBlcy5tYXAoKHQgPT4gdC5zaGFwZS5sZWZ0KSkpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5tYXgoLi4udGhpcy5zaGFwZXMubWFwKCh0ID0+IHQuc2hhcGUucmlnaHQpKSk7XG4gICAgICAgIGNvbnN0IGkgPSBNYXRoLm1pbiguLi50aGlzLnNoYXBlcy5tYXAoKHQgPT4gdC5zaGFwZS50b3ApKSk7XG4gICAgICAgIGNvbnN0IGUgPSBNYXRoLm1heCguLi50aGlzLnNoYXBlcy5tYXAoKHQgPT4gdC5zaGFwZS5ib3R0b20pKSk7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdChuZXcgVmVjdG9yLCBuZXcgVmVjdG9yKHMgLSB0LCBlIC0gaSkpO1xuICAgIH1cbiAgICAkKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IE1hdGgubWluKHRoaXMubWF4U3BlZWQgKiBNYXRoLm1pbig0ICogdCwgLjEpLCB0aGlzLm1heFNwZWVkKTtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuYm91bmRpbmdSYWRpdXMgKyBzO1xuICAgICAgICB0aGlzLm1vdmVtZW50UmFkaXVzRGVidWcgPSBpO1xuICAgICAgICByZXR1cm4gaSAqIGk7XG4gICAgfVxuICAgIE4odCkge1xuICAgICAgICBjb25zdCBzID0gMiAqIE1hdGgubWluKHRoaXMubWF4U3BlZWQgKiBNYXRoLm1pbih0LCAuMSksIHRoaXMubWF4U3BlZWQpO1xuICAgICAgICBjb25zdCBpID0gdGhpcy5ib3VuZGluZ0JveC5jbG9uZSgpO1xuICAgICAgICBpLnNpemUuYWRkKG5ldyBWZWN0b3IocywgcyksIHRydWUpO1xuICAgICAgICByZXR1cm4gaTtcbiAgICB9XG59XG5cbmNsYXNzIEludGVyc2VjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWUgPSAxIC8gMDtcbiAgICB9XG59XG5cbmNsYXNzIFJhZGl1c1Jlc29sdmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgICAgIHRoaXMuVCA9IHQ7XG4gICAgICAgIHRoaXMuViA9IG5ldyBTZXQ7XG4gICAgfVxuICAgIHVwZGF0ZUVudGl0eVByb3hpbWl0aWVzKHQsIHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGUgPSB0Lmxlbmd0aDsgaSA8IGU7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZSA9IHRbaV07XG4gICAgICAgICAgICBpZiAobnVsbCAhPSB0aGlzLlQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlQ/LmRyYXdTaGFwZShlLnNoYXBlc1swXS53b3JsZFNoYXBlLnNoYXBlLCAwID09PSBlLm1hc3MgPyBcInJlZFwiIDogXCJibGFja1wiLCBlLmNvbG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoUGh5c2ljcy5zaG93QXJlYXMpIHRoaXMuVC5kcmF3U2hhcGUobmV3IENpcmNsZShlLnBvc2l0aW9uLCBlLm1vdmVtZW50UmFkaXVzRGVidWcpLCBcInJlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IG4gPSBpICsgMSwgaCA9IHQubGVuZ3RoOyBuIDwgaDsgbisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IHRbbl07XG4gICAgICAgICAgICAgICAgY29uc3QgaCA9IGkucG9zaXRpb24uc3VidHJhY3QoZS5wb3NpdGlvbikubWFnbml0dWRlO1xuICAgICAgICAgICAgICAgIGlmIChlLm1vdmVtZW50UmFkaXVzICsgaS5tb3ZlbWVudFJhZGl1cyA8IGggKiBoKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2tpcHBlZCsrO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5uZWFyLmFkZChpKTtcbiAgICAgICAgICAgICAgICBpLm5lYXIuYWRkKGUpO1xuICAgICAgICAgICAgICAgIHMucHJveGltaXRpZXMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRFbnRpdHkodCkge1xuICAgICAgICB0aGlzLlYuYWRkKHQpO1xuICAgIH1cbiAgICB1cGRhdGVFbnRpdHkodCkge1xuICAgICAgICB0aGlzLlYuYWRkKHQpO1xuICAgIH1cbiAgICByZW1vdmVFbnRpdHkodCkge1xuICAgICAgICB0aGlzLlYuZGVsZXRlKHQpO1xuICAgIH1cbiAgICBmaW5kRW50aXRpZXModCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG5jbGFzcyBMaW5lIHtcbiAgICBjb25zdHJ1Y3Rvcih0LCBzKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSB0O1xuICAgICAgICB0aGlzLmVuZCA9IHM7XG4gICAgfVxuICAgIGdldCBub3JtYWwoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC0odGhpcy5lbmQueSAtIHRoaXMuc3RhcnQueSksIHRoaXMuZW5kLnggLSB0aGlzLnN0YXJ0LngpO1xuICAgIH1cbiAgICBnZXQgZGlyZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmQuc3VidHJhY3QodGhpcy5zdGFydCk7XG4gICAgfVxuICAgIGdldCBtYWduaXR1ZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbi5tYWduaXR1ZGU7XG4gICAgfVxuICAgIGdldCBkaXJlY3Rpb25WZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbi5kaXZpZGUodGhpcy5tYWduaXR1ZGUpO1xuICAgIH1cbn1cblxuY2xhc3MgUmF5IHtcbiAgICBjb25zdHJ1Y3Rvcih0LCBzLCBpKSB7XG4gICAgICAgIHRoaXMub3JpZ2luID0gdDtcbiAgICAgICAgaWYgKHMgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMubWFnbml0dWRlID0gaSA/PyBzLm1hZ25pdHVkZTtcbiAgICAgICAgICAgIHRoaXMucSA9IHMubm9ybWFsaXplKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLkggPSBzO1xuICAgICAgICAgICAgdGhpcy5tYWduaXR1ZGUgPSBpID8/IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG5vcm1hbCgpIHtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMuZGlyZWN0aW9uVmVjdG9yO1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtdC55LCB0LngpO1xuICAgIH1cbiAgICBnZXQgZGlyZWN0aW9uVmVjdG9yKCkge1xuICAgICAgICByZXR1cm4gbnVsbCAhPSB0aGlzLnEgPyB0aGlzLnEgOiBuZXcgVmVjdG9yO1xuICAgIH1cbiAgICBnZXQgZGlyZWN0aW9uQW5nbGUoKSB7XG4gICAgICAgIHJldHVybiBudWxsICE9IHRoaXMuSCA/IHRoaXMuSCA6IChNYXRoLmF0YW4yKHRoaXMucS55LCB0aGlzLnEueCkgKiBSYXkuQiArIFJheS5PKSAlIDM2MDtcbiAgICB9XG4gICAgc2V0IGRpcmVjdGlvbih0KSB7XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnEgPSB0O1xuICAgICAgICAgICAgdGhpcy5IID0gdm9pZCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5IID0gdDtcbiAgICAgICAgICAgIHRoaXMucSA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW4uYWRkKHRoaXMuZGlyZWN0aW9uVmVjdG9yLm11bHRpcGx5KHRoaXMubWFnbml0dWRlKSk7XG4gICAgfVxuICAgIHNldCBlbmQodCkge1xuICAgICAgICBjb25zdCBzID0gdC5zdWJ0cmFjdCh0aGlzLm9yaWdpbik7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcy5ub3JtYWxpemUoKTtcbiAgICAgICAgdGhpcy5tYWduaXR1ZGUgPSBzLm1hZ25pdHVkZTtcbiAgICB9XG4gICAgZ2V0SW50ZXJzZWN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBTdGFkaXVtKSByZXR1cm4gdGhpcy5nZXRJbnRlcnNlY3Rpb25TdGFkaXVtKHQpO1xuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFJvdW5kZWRSZWN0KSByZXR1cm4gdGhpcy5nZXRJbnRlcnNlY3Rpb25Sb3VuZGVkUmVjdCh0KTtcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBSZWN0KSByZXR1cm4gdGhpcy5nZXRJbnRlcnNlY3Rpb25SZWN0KHQpO1xuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIENpcmNsZSkgcmV0dXJuIHRoaXMuZ2V0SW50ZXJzZWN0aW9uQ2lyY2xlKHQpO1xuICAgICAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbjtcbiAgICB9XG4gICAgZ2V0SW50ZXJzZWN0aW9uUmVjdCh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSBuZXcgSW50ZXJzZWN0aW9uO1xuICAgICAgICBjb25zdCBpID0gdGhpcy5vcmlnaW47XG4gICAgICAgIGNvbnN0IGUgPSB0aGlzLmVuZC5zdWJ0cmFjdCh0aGlzLm9yaWdpbik7XG4gICAgICAgIGNvbnN0IG4gPSB0LnBvc2l0aW9uLnN1YnRyYWN0KHQuaGFsZikuc3VidHJhY3QoaSkuZGl2aWRlKGUpO1xuICAgICAgICBjb25zdCBoID0gdC5wb3NpdGlvbi5hZGQodC5oYWxmKS5zdWJ0cmFjdChpKS5kaXZpZGUoZSk7XG4gICAgICAgIGlmIChpc05hTihuLngpIHx8IGlzTmFOKG4ueSkgfHwgaXNOYU4oaC54KSB8fCBpc05hTihoLnkpKSB7XG4gICAgICAgICAgICBoLnkgPSAxIC8gMDtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuLnggPiBoLngpIFtuLngsIGgueF0gPSBbIGgueCwgbi54IF07XG4gICAgICAgIGlmIChuLnkgPiBoLnkpIFtuLnksIGgueV0gPSBbIGgueSwgbi55IF07XG4gICAgICAgIGlmIChuLnggPiBoLnkgfHwgbi55ID4gaC54KSByZXR1cm4gcztcbiAgICAgICAgY29uc3QgciA9IE1hdGgubWF4KG4ueCwgbi55KTtcbiAgICAgICAgaWYgKHIgPCAwIHx8IHIgPiAxKSByZXR1cm4gcztcbiAgICAgICAgcy5ub3JtYWwgPSBlLnNpZ24oKTtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVmVjdG9yLm11bHRpcGx5KHMubm9ybWFsKS56ZXJvKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiUlJSBObyBtb3ZlbWVudCBpbiBub3JtYWwgZGlyZWN0aW9uLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgICAgIHMudGltZSA9IHI7XG4gICAgICAgIHMucG9pbnQgPSBpLmFkZChlLm11bHRpcGx5KHMudGltZSkpO1xuICAgICAgICBpZiAocy5wb2ludC54ID4gdC5sZWZ0ICYmIHMucG9pbnQueCA8IHQucmlnaHQgJiYgcy5wb2ludC55ID4gdC50b3AgJiYgcy5wb2ludC55IDwgdC5ib3R0b20pIDtcbiAgICAgICAgaWYgKG4ueCA8IG4ueSkge1xuICAgICAgICAgICAgaWYgKDAgPT09IE1hdGguYWJzKHMubm9ybWFsLnkpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJR05PUklORyB5XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5ub3JtYWwubXVsdGlwbHkobmV3IFZlY3RvcigwLCAtMSksIHRydWUpO1xuICAgICAgICAgICAgcy50YW5nZW50ID0gbmV3IFZlY3Rvcigtcy5ub3JtYWwueSwgcy5ub3JtYWwueCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoMCA9PT0gTWF0aC5hYnMocy5ub3JtYWwueCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIklHTk9SSU5HIHhcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLm5vcm1hbC5tdWx0aXBseShuZXcgVmVjdG9yKC0xLCAwKSwgdHJ1ZSk7XG4gICAgICAgICAgICBzLnRhbmdlbnQgPSBuZXcgVmVjdG9yKC1zLm5vcm1hbC55LCBzLm5vcm1hbC54KTtcbiAgICAgICAgfVxuICAgICAgICBzLmludGVyc2VjdHMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgZ2V0SW50ZXJzZWN0aW9uQ2lyY2xlKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBJbnRlcnNlY3Rpb247XG4gICAgICAgIG5ldyBMaW5lKHRoaXMub3JpZ2luLCB0LnBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMub3JpZ2luLnN1YnRyYWN0KHQucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBlID0gaS5kb3QodGhpcy5kaXJlY3Rpb25WZWN0b3IpO1xuICAgICAgICBjb25zdCBuID0gaS5kb3QoaSkgLSB0LnJhZGl1cyAqIHQucmFkaXVzO1xuICAgICAgICBsZXQgaCA9IGUgKiBlIC0gbjtcbiAgICAgICAgaWYgKGggPCAwKSByZXR1cm4gcztcbiAgICAgICAgaCA9IE1hdGguc3FydChoKTtcbiAgICAgICAgY29uc3QgciA9IC1lIC0gaDtcbiAgICAgICAgaWYgKHIgPCAwIHx8IHIgPiB0aGlzLm1hZ25pdHVkZSkgcmV0dXJuIHM7XG4gICAgICAgIHMucG9pbnQgPSB0aGlzLm9yaWdpbi5hZGQodGhpcy5kaXJlY3Rpb25WZWN0b3IubXVsdGlwbHkocikpO1xuICAgICAgICBzLnRpbWUgPSByIC8gdGhpcy5tYWduaXR1ZGU7XG4gICAgICAgIHMubm9ybWFsID0gcy5wb2ludC5zdWJ0cmFjdCh0LnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcbiAgICAgICAgcy50YW5nZW50ID0gbmV3IFZlY3Rvcigtcy5ub3JtYWwueSwgcy5ub3JtYWwueCk7XG4gICAgICAgIHMuaW50ZXJzZWN0cyA9IHRydWU7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBnZXRJbnRlcnNlY3Rpb25TdGFkaXVtKHQpIHtcbiAgICAgICAgbGV0IHMgPSBuZXcgSW50ZXJzZWN0aW9uO1xuICAgICAgICBjb25zdCBpID0gW107XG4gICAgICAgIGlmICh0Lmhvcml6b250YWwpIGkucHVzaChuZXcgUmVjdCh0LnBvc2l0aW9uLCB0LnNpemUuc3VidHJhY3QobmV3IFZlY3RvcigyICogdC5yYWRpdXMsIDApKSksIG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LmxlZnQgKyB0LnJhZGl1cywgdC5wb3NpdGlvbi55KSwgdC5yYWRpdXMpLCBuZXcgQ2lyY2xlKG5ldyBWZWN0b3IodC5yaWdodCAtIHQucmFkaXVzLCB0LnBvc2l0aW9uLnkpLCB0LnJhZGl1cykpOyBlbHNlIGkucHVzaChuZXcgUmVjdCh0LnBvc2l0aW9uLCB0LnNpemUuc3VidHJhY3QobmV3IFZlY3RvcigwLCAyICogdC5yYWRpdXMpKSksIG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LnBvc2l0aW9uLngsIHQudG9wICsgdC5yYWRpdXMpLCB0LnJhZGl1cyksIG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LnBvc2l0aW9uLngsIHQuYm90dG9tIC0gdC5yYWRpdXMpLCB0LnJhZGl1cykpO1xuICAgICAgICBpLmZvckVhY2goKHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXMuZ2V0SW50ZXJzZWN0aW9uKHQpO1xuICAgICAgICAgICAgaWYgKGkuaW50ZXJzZWN0cykgaWYgKGkudGltZSA8IHMudGltZSkgcyA9IGk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcy5zaGFwZXMgPSBpO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgZ2V0SW50ZXJzZWN0aW9uUm91bmRlZFJlY3QodCkge1xuICAgICAgICBsZXQgcyA9IG5ldyBJbnRlcnNlY3Rpb247XG4gICAgICAgIGNvbnN0IGkgPSB0LnJhZGl1cztcbiAgICAgICAgY29uc3QgZSA9IDIgKiBpO1xuICAgICAgICBjb25zdCBuID0gWyBuZXcgQ2lyY2xlKG5ldyBWZWN0b3IodC5sZWZ0ICsgaSwgdC50b3AgKyBpKSwgaSksIG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LnJpZ2h0IC0gaSwgdC50b3AgKyBpKSwgaSksIG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LnJpZ2h0IC0gaSwgdC5ib3R0b20gLSBpKSwgaSksIG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LmxlZnQgKyBpLCB0LmJvdHRvbSAtIGkpLCBpKSwgbmV3IFJlY3QodC5wb3NpdGlvbiwgdC5zaXplLnN1YnRyYWN0KG5ldyBWZWN0b3IoZSwgMCkpKSwgbmV3IFJlY3QodC5wb3NpdGlvbiwgdC5zaXplLnN1YnRyYWN0KG5ldyBWZWN0b3IoMCwgZSkpKSBdO1xuICAgICAgICBuLmZvckVhY2goKHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXMuZ2V0SW50ZXJzZWN0aW9uKHQpO1xuICAgICAgICAgICAgaWYgKGkuaW50ZXJzZWN0cykgaWYgKGkudGltZSA8IHMudGltZSkgcyA9IGk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcy5zaGFwZXMgPSBuO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG59XG5cblJheS5CID0gMTgwIC8gTWF0aC5QSTtcblxuUmF5Lk8gPSAzNjAgKyA5MDtcblxuY2xhc3MgU3BhdGlhbEhhc2hHcmlkUmVzb2x2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHQsIHMpIHtcbiAgICAgICAgdGhpcy5zaXplID0gdDtcbiAgICAgICAgdGhpcy5UID0gcztcbiAgICAgICAgdGhpcy5WID0gbmV3IFdlYWtNYXA7XG4gICAgICAgIHRoaXMuVyA9IG5ldyBTcGF0aWFsSGFzaEdyaWQodCk7XG4gICAgfVxuICAgIHVwZGF0ZUVudGl0eVByb3hpbWl0aWVzKHQsIHMpIHtcbiAgICAgICAgdC5mb3JFYWNoKCh0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBuZXcgUmVjdCh0LnBvc2l0aW9uLCB0Lm1vdmVtZW50Qm94LnNpemUpO1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gdGhpcy5UKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5UPy5kcmF3U2hhcGUodC5zaGFwZXNbMF0ud29ybGRTaGFwZS5zaGFwZSwgXCJibGFja1wiLCB0LmNvbG9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLlQuZHJhd1NoYXBlKGksIFwicmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZSA9IHRoaXMuVy5zZWFyY2goaSk7XG4gICAgICAgICAgICBlLmZvckVhY2goKGkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSB0KSByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IGkucG9zaXRpb24uc3VidHJhY3QodC5wb3NpdGlvbikubWFnbml0dWRlO1xuICAgICAgICAgICAgICAgIGlmICh0Lm1vdmVtZW50UmFkaXVzICsgaS5tb3ZlbWVudFJhZGl1cyA8IGUgKiBlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdC5uZWFyLmFkZChpKTtcbiAgICAgICAgICAgICAgICBzLnByb3hpbWl0aWVzKys7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBzLnByb3hpbWl0aWVzLS07XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgYWRkRW50aXR5KHQpIHtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBSZWN0KHQucG9zaXRpb24sIHQubW92ZW1lbnRCb3guc2l6ZSk7XG4gICAgICAgIGNvbnN0IGkgPSBuZXcgU3BhdGlhbEhhc2hHcmlkSXRlbSh0LCBzKTtcbiAgICAgICAgdGhpcy5XLmFkZChpKTtcbiAgICAgICAgdGhpcy5WLnNldCh0LCBpKTtcbiAgICB9XG4gICAgdXBkYXRlRW50aXR5KHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuVi5nZXQodCk7XG4gICAgICAgIGNvbnN0IGkgPSBuZXcgUmVjdCh0LnBvc2l0aW9uLCB0Lm1vdmVtZW50Qm94LnNpemUpO1xuICAgICAgICBzLmFyZWEgPSBpO1xuICAgICAgICB0aGlzLlcudXBkYXRlKHMpO1xuICAgIH1cbiAgICByZW1vdmVFbnRpdHkodCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy5WLmdldCh0KTtcbiAgICAgICAgdGhpcy5XLnJlbW92ZShzKTtcbiAgICAgICAgdGhpcy5WLmRlbGV0ZSh0KTtcbiAgICB9XG4gICAgZmluZEVudGl0aWVzKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBSZWN0KHQucG9zaXRpb24sIG5ldyBWZWN0b3IodC5yYWRpdXMsIHQucmFkaXVzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLlcuc2VhcmNoKHMpO1xuICAgIH1cbn1cblxuY2xhc3MgU3BhdGlhbEhhc2hHcmlkSXRlbSB7XG4gICAgY29uc3RydWN0b3IodCwgcykge1xuICAgICAgICB0aGlzLmVudGl0eSA9IHQ7XG4gICAgICAgIHRoaXMuYXJlYSA9IHM7XG4gICAgICAgIHRoaXMucXVlcnkgPSAtMTtcbiAgICB9XG59XG5cbmNsYXNzIFNwYXRpYWxIYXNoR3JpZCB7XG4gICAgY29uc3RydWN0b3IodCkge1xuICAgICAgICB0aGlzLnNpemUgPSB0O1xuICAgICAgICB0aGlzLlcgPSBuZXcgTWFwO1xuICAgICAgICB0aGlzLl8gPSAwO1xuICAgICAgICB0aGlzLk0gPSBuZXcgTWFwO1xuICAgIH1cbiAgICBhZGQodCkge1xuICAgICAgICB0LmtleXMgPSB0aGlzLmdldEtleXModC5hcmVhKTtcbiAgICAgICAgdC5rZXkgPSB0LmtleXMuam9pbihcIi9cIik7XG4gICAgICAgIHQubG9jYXRpb25zID0gdC5rZXlzLm1hcCgocyA9PiB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMuVy5nZXQocyk7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG5ldyBTZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5XLnNldChzLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkuYWRkKHQpO1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgcmVtb3ZlKHQpIHtcbiAgICAgICAgdC5sb2NhdGlvbnMuZm9yRWFjaCgocyA9PiBzLmRlbGV0ZSh0KSkpO1xuICAgICAgICB0LmxvY2F0aW9ucyA9IFtdO1xuICAgICAgICB0LmtleXMgPSBbXTtcbiAgICB9XG4gICAgdXBkYXRlKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuZ2V0S2V5cyh0LmFyZWEpO1xuICAgICAgICBpZiAocy5qb2luKFwiL1wiKSA9PT0gdC5rZXkpIHJldHVybjtcbiAgICAgICAgdGhpcy5yZW1vdmUodCk7XG4gICAgICAgIHRoaXMuYWRkKHQpO1xuICAgIH1cbiAgICBzZWFyY2godCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy5fKys7XG4gICAgICAgIGNvbnN0IGkgPSBbXTtcbiAgICAgICAgY29uc3QgZSA9IHRoaXMuZ2V0S2V5cyh0KTtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSB0aGlzLlcuZ2V0KHQpO1xuICAgICAgICAgICAgaWYgKG51bGwgPT0gZSkgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2YgZSkge1xuICAgICAgICAgICAgICAgIGlmICh0LnF1ZXJ5ID09PSBzKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpLnB1c2godC5lbnRpdHkpO1xuICAgICAgICAgICAgICAgIHQucXVlcnkgPSBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgICBnZXRLZXlzKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IFtdO1xuICAgICAgICBjb25zdCBpID0gTWF0aC5mbG9vcih0LmxlZnQgLyB0aGlzLnNpemUueCk7XG4gICAgICAgIGNvbnN0IGUgPSBNYXRoLmZsb29yKHQucmlnaHQgLyB0aGlzLnNpemUueCkgKyAxO1xuICAgICAgICBjb25zdCBuID0gTWF0aC5mbG9vcih0LnRvcCAvIHRoaXMuc2l6ZS55KTtcbiAgICAgICAgY29uc3QgaCA9IE1hdGguZmxvb3IodC5ib3R0b20gLyB0aGlzLnNpemUueSkgKyAxO1xuICAgICAgICBmb3IgKGxldCB0ID0gaTsgdCA8IGU7IHQrKykgZm9yIChsZXQgaSA9IG47IGkgPCBoOyBpKyspIHMucHVzaChgJHt0fSwke2l9YCk7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbn1cblxuY2xhc3MgUG9seWdvbiB7XG4gICAgY29uc3RydWN0b3IodCwgcywgaSA9IDApIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHQ7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSBzO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gaTtcbiAgICAgICAgdGhpcy53b3JsZFNwYWNlID0gZmFsc2U7XG4gICAgfVxuICAgIGdldCBsZWZ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54ICsgTWF0aC5taW4oLi4udGhpcy52ZXJ0aWNlcy5tYXAoKHQgPT4gdC54KSkpO1xuICAgIH1cbiAgICBzZXQgbGVmdCh0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHQgLSBNYXRoLm1pbiguLi50aGlzLnZlcnRpY2VzLm1hcCgodCA9PiB0LngpKSk7XG4gICAgfVxuICAgIGdldCByaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCArIE1hdGgubWF4KC4uLnRoaXMudmVydGljZXMubWFwKCh0ID0+IHQueCkpKTtcbiAgICB9XG4gICAgc2V0IHJpZ2h0KHQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdCAtIE1hdGgubWF4KC4uLnRoaXMudmVydGljZXMubWFwKCh0ID0+IHQueCkpKTtcbiAgICB9XG4gICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSArIE1hdGgubWluKC4uLnRoaXMudmVydGljZXMubWFwKCh0ID0+IHQueSkpKTtcbiAgICB9XG4gICAgc2V0IHRvcCh0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHQgLSBNYXRoLm1pbiguLi50aGlzLnZlcnRpY2VzLm1hcCgodCA9PiB0LnkpKSk7XG4gICAgfVxuICAgIGdldCBib3R0b20oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnkgKyBNYXRoLm1heCguLi50aGlzLnZlcnRpY2VzLm1hcCgodCA9PiB0LnkpKSk7XG4gICAgfVxuICAgIHNldCBib3R0b20odCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0IC0gTWF0aC5tYXgoLi4udGhpcy52ZXJ0aWNlcy5tYXAoKHQgPT4gdC55KSkpO1xuICAgIH1cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0O1xuICAgIH1cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib3R0b20gLSB0aGlzLnRvcDtcbiAgICB9XG4gICAgcm90YXRlKHQpIHtcbiAgICAgICAgaWYgKDAgIT09IHQpIHtcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgocyA9PiBzLnJvdGF0ZSh0LCB0cnVlKSkpO1xuICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiArPSB0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0cmFuc2xhdGUodCkge1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHMgPT4gcy5hZGQodCwgdHJ1ZSkpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5hZGQodCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2x5Z29uKHRoaXMucG9zaXRpb24uY2xvbmUoKSwgdGhpcy52ZXJ0aWNlcy5tYXAoKHQgPT4gdC5jbG9uZSgpKSksIHRoaXMub3JpZW50YXRpb24pO1xuICAgIH1cbn1cblxuY2xhc3MgQ2FudmFzIHtcbiAgICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gdDtcbiAgICAgICAgdGhpcy5sb2dnaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB0ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IHMgPSB0LmNhbnZhcztcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHMud2lkdGgsIHMuaGVpZ2h0KTtcbiAgICB9XG4gICAgZHJhd1NoYXBlKHQsIHMsIGksIGUgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLmN0eDtcbiAgICAgICAgbi5zdHJva2VTdHlsZSA9IHM7XG4gICAgICAgIGlmIChudWxsICE9IGkpIG4uZmlsbFN0eWxlID0gaTtcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBMaW5lKSB7XG4gICAgICAgICAgICBuLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgbi5tb3ZlVG8odC5zdGFydC54LCB0LnN0YXJ0LnkpO1xuICAgICAgICAgICAgbi5saW5lVG8odC5lbmQueCwgdC5lbmQueSk7XG4gICAgICAgICAgICBuLnN0cm9rZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHQgaW5zdGFuY2VvZiBSYXkpIHtcbiAgICAgICAgICAgIG4uc3Ryb2tlU3R5bGUgPSBzO1xuICAgICAgICAgICAgbi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIG4ubW92ZVRvKHQub3JpZ2luLngsIHQub3JpZ2luLnkpO1xuICAgICAgICAgICAgbi5saW5lVG8odC5lbmQueCwgdC5lbmQueSk7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSBpKSBuLmZpbGwoKTtcbiAgICAgICAgICAgIG4uc3Ryb2tlKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdDcm9zcyh0Lm9yaWdpbiwgcywgMik7XG4gICAgICAgIH0gZWxzZSBpZiAodCBpbnN0YW5jZW9mIFN0YWRpdW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBNYXRoLlBJO1xuICAgICAgICAgICAgY29uc3QgaCA9IHQucG9zaXRpb247XG4gICAgICAgICAgICBjb25zdCByID0gdC5yYWRpdXM7XG4gICAgICAgICAgICBuLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKHQuaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIG4uYXJjKHQucmlnaHQgLSByLCBoLnksIHIsIGUgLyAyLCAxLjUgKiBlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBuLmxpbmVUbyh0LmxlZnQgKyByLCB0LnRvcCk7XG4gICAgICAgICAgICAgICAgbi5hcmModC5sZWZ0ICsgciwgaC55LCByLCAxLjUgKiBlLCAuNSAqIGUsIHRydWUpO1xuICAgICAgICAgICAgICAgIG4ubGluZVRvKHQucmlnaHQgLSByLCB0LmJvdHRvbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG4uYXJjKGgueCwgdC50b3AgKyByLCByLCAwLCBlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBuLmxpbmVUbyh0LmxlZnQsIHQuYm90dG9tIC0gcik7XG4gICAgICAgICAgICAgICAgbi5hcmMoaC54LCB0LmJvdHRvbSAtIHIsIHIsIGUsIDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIG4ubGluZVRvKHQucmlnaHQsIHQudG9wICsgcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobnVsbCAhPSBpKSBuLmZpbGwoKTtcbiAgICAgICAgICAgIG4uc3Ryb2tlKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdDcm9zcyhoLCBzLCAyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0IGluc3RhbmNlb2YgUm91bmRlZFJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSB0LnJhZGl1cztcbiAgICAgICAgICAgIG4uYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBuLmFyYyh0LmxlZnQgKyBlLCB0LnRvcCArIGUsIGUsIC0uNSAqIE1hdGguUEksIE1hdGguUEksIHRydWUpO1xuICAgICAgICAgICAgbi5saW5lVG8odC5sZWZ0LCB0LmJvdHRvbSAtIGUpO1xuICAgICAgICAgICAgbi5hcmModC5sZWZ0ICsgZSwgdC5ib3R0b20gLSBlLCBlLCBNYXRoLlBJLCAuNSAqIE1hdGguUEksIHRydWUpO1xuICAgICAgICAgICAgbi5saW5lVG8odC5yaWdodCAtIGUsIHQuYm90dG9tKTtcbiAgICAgICAgICAgIG4uYXJjKHQucmlnaHQgLSBlLCB0LmJvdHRvbSAtIGUsIGUsIC41ICogTWF0aC5QSSwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICBuLmxpbmVUbyh0LnJpZ2h0LCB0LnRvcCArIGUpO1xuICAgICAgICAgICAgbi5hcmModC5yaWdodCAtIGUsIHQudG9wICsgZSwgZSwgMCwgLjUgKiAtTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgICAgICBuLmxpbmVUbyh0LmxlZnQgKyBlLCB0LnRvcCk7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSBpKSBuLmZpbGwoKTtcbiAgICAgICAgICAgIG4uc3Ryb2tlKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdDcm9zcyh0LnBvc2l0aW9uLCBzLCAyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0IGluc3RhbmNlb2YgUmVjdCB8fCB0IGluc3RhbmNlb2YgUG9seWdvbikge1xuICAgICAgICAgICAgbi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGUgPSB0LnZlcnRpY2VzO1xuICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCBlLmxlbmd0aDsgdCsrKSBuLmxpbmVUbyhlW3RdLngsIGVbdF0ueSk7XG4gICAgICAgICAgICBuLmxpbmVUbyhlWzBdLngsIGVbMF0ueSk7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSBpKSBuLmZpbGwoKTtcbiAgICAgICAgICAgIG4uc3Ryb2tlKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdDcm9zcyh0LnBvc2l0aW9uLCBzLCAyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0IGluc3RhbmNlb2YgQ2lyY2xlKSB7XG4gICAgICAgICAgICBuLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgbi5hcmModC5wb3NpdGlvbi54LCB0LnBvc2l0aW9uLnksIHQucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSBpKSBuLmZpbGwoKTtcbiAgICAgICAgICAgIG4uc3Ryb2tlKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdDcm9zcyh0LnBvc2l0aW9uLCBzLCAyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3Q3Jvc3ModCwgcywgaSwgZSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgbiA9IHRoaXMuY3R4O1xuICAgICAgICBuLnN0cm9rZVN0eWxlID0gcztcbiAgICAgICAgbi5iZWdpblBhdGgoKTtcbiAgICAgICAgbi5tb3ZlVG8odC54LCB0LnkgLSBpKTtcbiAgICAgICAgbi5saW5lVG8odC54LCB0LnkgKyBpKTtcbiAgICAgICAgbi5zdHJva2UoKTtcbiAgICAgICAgbi5iZWdpblBhdGgoKTtcbiAgICAgICAgbi5tb3ZlVG8odC54IC0gaSwgdC55KTtcbiAgICAgICAgbi5saW5lVG8odC54ICsgaSwgdC55KTtcbiAgICAgICAgbi5zdHJva2UoKTtcbiAgICB9XG4gICAgZHJhd1RleHQodCwgcywgaSwgZSA9IFwiMTFweCBBcmlhbFwiLCBuID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBoID0gdGhpcy5jdHg7XG4gICAgICAgIGguZmlsbFN0eWxlID0gaTtcbiAgICAgICAgaC5mb250ID0gZTtcbiAgICAgICAgaC5maWxsVGV4dCh0LCBzLngsIHMueSk7XG4gICAgfVxuICAgIGxvZyguLi50KSB7XG4gICAgICAgIGlmICghdGhpcy5sb2dnaW5nKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKC4uLnQpO1xuICAgIH1cbn1cblxuY2xhc3MgUGh5c2ljcyB7XG4gICAgc3RhdGljIGluaXRpYWxpemUodCkge1xuICAgICAgICB0ID0gdCA/PyB7fTtcbiAgICAgICAgY29uc3QgcyA9IHQuY29sbGlzaW9ucyA/PyB7XG4gICAgICAgICAgICBjb2xsaXNpb246IFsgXCJjb2xsaXNpb25cIiBdXG4gICAgICAgIH07XG4gICAgICAgIHQuc2lnbmFscyA/PyB7fTtcbiAgICAgICAgZm9yIChjb25zdCB0IGluIHMpIGZvciAoY29uc3QgaSBvZiBzW3RdKSB7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBQaHlzaWNzLmNvbGxpc2lvbnNbdF0pIFBoeXNpY3MuY29sbGlzaW9uc1t0XSA9IHt9O1xuICAgICAgICAgICAgUGh5c2ljcy5jb2xsaXNpb25zW3RdW2ldID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChudWxsID09IFBoeXNpY3MuY29sbGlzaW9uc1tpXSkgUGh5c2ljcy5jb2xsaXNpb25zW2ldID0ge307XG4gICAgICAgICAgICBQaHlzaWNzLmNvbGxpc2lvbnNbaV1bdF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudWxsICE9IHQuY3R4KSB7XG4gICAgICAgICAgICBQaHlzaWNzLmNhbnZhcyA9IG5ldyBDYW52YXModC5jdHgpO1xuICAgICAgICAgICAgUGh5c2ljcy5zaG93QXJlYXMgPSB0LnNob3dBcmVhcyA/PyBQaHlzaWNzLnNob3dBcmVhcztcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHQucmVzb2x2ZXIpIHtcbiAgICAgICAgICBjYXNlIFwicXVhZHRyZWVcIjpcbiAgICAgICAgICAgIFBoeXNpY3MuTCA9IG5ldyBRdWFkVHJlZVJlc29sdmVyKG5ldyBWZWN0b3IoNTAwLCA1MDApLCBuZXcgVmVjdG9yKDJlMywgMmUzKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJzcGF0aWFsLWhhc2gtZ3JpZFwiOlxuICAgICAgICAgICAgUGh5c2ljcy5MID0gbmV3IFNwYXRpYWxIYXNoR3JpZFJlc29sdmVyKG5ldyBWZWN0b3IoMTAwLCAxMDApLCBQaHlzaWNzLmNhbnZhcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBQaHlzaWNzLkwgPSBuZXcgUmFkaXVzUmVzb2x2ZXIoUGh5c2ljcy5jYW52YXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHVwZGF0ZSh0LCBzKSB7XG4gICAgICAgIGNvbnN0IGkgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgY29uc3QgZSA9IHtcbiAgICAgICAgICAgIHRpbWU6IC0xLFxuICAgICAgICAgICAgbW92ZXJzOiAwLFxuICAgICAgICAgICAgbW92aW5nOiAwLFxuICAgICAgICAgICAgdG90YWxDaGVja3M6IDAsXG4gICAgICAgICAgICBza2lwcGVkOiAwLFxuICAgICAgICAgICAgc29saXRhaXJlczogMCxcbiAgICAgICAgICAgIGNvbGxpc2lvbkNhbmRpZGF0ZXM6IDAsXG4gICAgICAgICAgICBwcm94aW1pdGllczogMCxcbiAgICAgICAgICAgIGNoZWNrczogMCxcbiAgICAgICAgICAgIG1vdmVkOiBuZXcgU2V0XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0ID4gLjUpIHJldHVybiBlO1xuICAgICAgICBpZiAoUGh5c2ljcy5kb250Q2xlYXIpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgUGh5c2ljcy5kb250Q2xlYXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBQaHlzaWNzLmNhbnZhcz8uY2xlYXIoKTtcbiAgICAgICAgY29uc3QgbiA9IG5ldyBTZXQ7XG4gICAgICAgIGNvbnN0IGggPSB0aGlzLmVudGl0aWVzLmZpbHRlcigoaSA9PiB7XG4gICAgICAgICAgICBpZiAoIWkuYXBwbHlGb3JjZXModCwgcykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGkucHJlcGFyZU1vdmVtZW50KHQsIHMpO1xuICAgICAgICAgICAgaWYgKGkuc3BlZWQgPiAwKSBuLmFkZChpKTtcbiAgICAgICAgICAgIGkubmVhci5jbGVhcigpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgZS5tb3ZlcnMgPSBoLmxlbmd0aDtcbiAgICAgICAgZS5tb3ZpbmcgPSBuLnNpemU7XG4gICAgICAgIGUudG90YWxDaGVja3MgPSBoLmxlbmd0aCAqIGgubGVuZ3RoO1xuICAgICAgICB0aGlzLkwudXBkYXRlRW50aXR5UHJveGltaXRpZXMoaCwgZSk7XG4gICAgICAgIGxldCByID0gdDtcbiAgICAgICAgd2hpbGUgKHIgPiAxZS00KSB7XG4gICAgICAgICAgICBsZXQgdCA9IHI7XG4gICAgICAgICAgICBsZXQgaSA9IFsgbmV3IEludGVyc2VjdGlvbiBdO1xuICAgICAgICAgICAgY29uc3QgaCA9IG5ldyBXZWFrTWFwO1xuICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIG4pIHtcbiAgICAgICAgICAgICAgICBlLmNvbGxpc2lvbkNhbmRpZGF0ZXMrKztcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG4gb2Ygcy5uZWFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaC5oYXMobikpIGguc2V0KG4sIG5ldyBTZXQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaC5nZXQocyk/LmhhcyhuKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGguZ2V0KG4pPy5hZGQocyk7XG4gICAgICAgICAgICAgICAgICAgIGUuY2hlY2tzKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzLnZlbG9jaXR5Lm11bHRpcGx5KHQpLnN1YnRyYWN0KChuLnZlbG9jaXR5ID8/IG5ldyBWZWN0b3IpLm11bHRpcGx5KHQpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbyA9IG5ldyBSYXkocy5wb3NpdGlvbiwgci5ub3JtYWxpemUoKSwgci5tYWduaXR1ZGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gcy5zaGFwZXNbMF0ud29ybGRTaGFwZS5zaGFwZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYSA9IG4uc2hhcGVzWzBdLndvcmxkU2hhcGUuc2hhcGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHUgPSBjLmdldFN3ZXB0U2hhcGUoYSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGwgPSBvLmdldEludGVyc2VjdGlvbih1KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwuaW50ZXJzZWN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbC5tb3ZlciA9IHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBsLmVudGl0eSA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobC50aW1lID09PSBpWzBdLnRpbWUpIGkucHVzaChsKTsgZWxzZSBpZiAobC50aW1lIDwgaVswXS50aW1lKSBpID0gWyBsIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaVswXS5pbnRlcnNlY3RzKSB0ICo9IGlbMF0udGltZTtcbiAgICAgICAgICAgIGlmICh0ID4gMCkge1xuICAgICAgICAgICAgICAgIG4uZm9yRWFjaCgocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHMubW92ZSh0KTtcbiAgICAgICAgICAgICAgICAgICAgZS5tb3ZlZC5hZGQocyk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHIgLT0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpWzBdLmludGVyc2VjdHMpIGZvciAoY29uc3QgdCBvZiBpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IHQubW92ZXI7XG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IHQuZW50aXR5O1xuICAgICAgICAgICAgICAgIGNvbnN0IGggPSB0LnRhbmdlbnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbyA9IHQubm9ybWFsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAoMCAhPT0gaS5tYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGMubWFzcyA9IGkubWFzcztcbiAgICAgICAgICAgICAgICAgICAgYy5kaXJlY3Rpb24gPSBpLmRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgYy5zcGVlZCA9IGkuc3BlZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYy5tYXNzID0gZS5tYXNzO1xuICAgICAgICAgICAgICAgICAgICBjLmRpcmVjdGlvbiA9IGUuZGlyZWN0aW9uLm11bHRpcGx5KC0xKTtcbiAgICAgICAgICAgICAgICAgICAgYy5zcGVlZCA9IGUuc3BlZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAoMCAhPT0gZS5tYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGEubWFzcyA9IGUubWFzcztcbiAgICAgICAgICAgICAgICAgICAgYS5kaXJlY3Rpb24gPSBlLmRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgYS5zcGVlZCA9IGUuc3BlZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYS5tYXNzID0gaS5tYXNzO1xuICAgICAgICAgICAgICAgICAgICBhLmRpcmVjdGlvbiA9IGkuZGlyZWN0aW9uLm11bHRpcGx5KC0xKTtcbiAgICAgICAgICAgICAgICAgICAgYS5zcGVlZCA9IGkuc3BlZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHUgPSBjLmRpcmVjdGlvbi5tdWx0aXBseShjLnNwZWVkKS5kb3QoaCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbCA9IGEuZGlyZWN0aW9uLm11bHRpcGx5KGEuc3BlZWQpLmRvdChoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmID0gYy5kaXJlY3Rpb24ubXVsdGlwbHkoYy5zcGVlZCkuZG90KG8pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHcgPSBhLmRpcmVjdGlvbi5tdWx0aXBseShhLnNwZWVkKS5kb3Qobyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IChmICogKGMubWFzcyAtIGEubWFzcykgKyAyICogYS5tYXNzICogdykgLyAoYy5tYXNzICsgYS5tYXNzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnID0gKHcgKiAoYS5tYXNzIC0gYy5tYXNzKSArIDIgKiBjLm1hc3MgKiBmKSAvIChjLm1hc3MgKyBhLm1hc3MpO1xuICAgICAgICAgICAgICAgIGlmICgwICE9PSBpLm1hc3MpIGkudmVsb2NpdHkgPSBoLm11bHRpcGx5KHUpLmFkZChvLm11bHRpcGx5KGQpKTtcbiAgICAgICAgICAgICAgICBpZiAoaS5wcmVwYXJlTW92ZW1lbnQociwgcykpIG4uYWRkKGkpOyBlbHNlIG4uZGVsZXRlKGkpO1xuICAgICAgICAgICAgICAgIGlmICgwICE9PSBlLm1hc3MpIGUudmVsb2NpdHkgPSBoLm11bHRpcGx5KGwpLmFkZChvLm11bHRpcGx5KGcpKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5wcmVwYXJlTW92ZW1lbnQociwgcykpIG4uYWRkKGUpOyBlbHNlIG4uZGVsZXRlKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKDAgPT09IG4uc2l6ZSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZS50aW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgc3RhdGljIHVwZGF0ZV9XT1JLSU5HKHQsIHMpIHtcbiAgICAgICAgY29uc3QgaSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBlID0gMCwgbiA9IHRoaXMuZW50aXRpZXMubGVuZ3RoOyBlIDwgbjsgZSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gdGhpcy5lbnRpdGllc1tlXTtcbiAgICAgICAgICAgIGlmICghbi5hcHBseUZvcmNlcyh0LCBzKSkgY29udGludWU7XG4gICAgICAgICAgICBuLnByZXBhcmVNb3ZlbWVudCh0LCBzKTtcbiAgICAgICAgICAgIGkucHVzaChuKTtcbiAgICAgICAgICAgIG4ubmVhci5jbGVhcigpO1xuICAgICAgICAgICAgZm9yIChsZXQgdCA9IGUgKyAxLCBzID0gdGhpcy5lbnRpdGllcy5sZW5ndGg7IHQgPCBzOyB0KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gdGhpcy5lbnRpdGllc1t0XTtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBzLnBvc2l0aW9uKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gcy5wb3NpdGlvbi5zdWJ0cmFjdChuLnBvc2l0aW9uKS5tYWduaXR1ZGU7XG4gICAgICAgICAgICAgICAgaWYgKG4ubW92ZW1lbnRSYWRpdXMgKyBzLm1vdmVtZW50UmFkaXVzIDwgaSAqIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJza2lwcGluZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG4ubmVhci5hZGQocyk7XG4gICAgICAgICAgICAgICAgcy5uZWFyLmFkZChuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZSA9IHQ7XG4gICAgICAgIGNvbnN0IG4gPSBuZXcgU2V0O1xuICAgICAgICB3aGlsZSAoZSA+IDFlLTQpIHtcbiAgICAgICAgICAgIGxldCB0ID0gZTtcbiAgICAgICAgICAgIGxldCBoID0gWyBuZXcgSW50ZXJzZWN0aW9uIF07XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHMgb2YgaSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBzLnNwZWVkKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBuLmFkZChzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIG5lYXJcIiwgcy5uZWFyLnNpemUpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaSBvZiBzLm5lYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaS5uZWFyLmRlbGV0ZShzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZSA9IHMudmVsb2NpdHkubXVsdGlwbHkodCkuc3VidHJhY3QoKGkudmVsb2NpdHkgPz8gbmV3IFZlY3RvcikubXVsdGlwbHkodCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuID0gbmV3IFJheShzLnBvc2l0aW9uLCBlLm5vcm1hbGl6ZSgpLCBlLm1hZ25pdHVkZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzLnNoYXBlc1swXS53b3JsZFNoYXBlLnNoYXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvID0gaS5zaGFwZXNbMF0ud29ybGRTaGFwZS5zaGFwZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IHIuZ2V0U3dlcHRTaGFwZShvKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYSA9IG4uZ2V0SW50ZXJzZWN0aW9uKGMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5pbnRlcnNlY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhLm1vdmVyID0gcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZW50aXR5ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLnRpbWUgPT09IGhbMF0udGltZSkgaC5wdXNoKGEpOyBlbHNlIGlmIChhLnRpbWUgPCBoWzBdLnRpbWUpIGggPSBbIGEgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoWzBdLmludGVyc2VjdHMpIHQgKj0gaFswXS50aW1lO1xuICAgICAgICAgICAgbi5mb3JFYWNoKChzID0+IHtcbiAgICAgICAgICAgICAgICBzLm1vdmUodCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBlIC09IHQ7XG4gICAgICAgICAgICBpZiAoaFswXS5pbnRlcnNlY3RzKSBmb3IgKGNvbnN0IHQgb2YgaCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB0Lm1vdmVyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGggPSB0LmVudGl0eTtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gdC50YW5nZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IG8gPSB0Lm5vcm1hbDtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCB1ID0gaS5kaXJlY3Rpb24ubXVsdGlwbHkoaS5zcGVlZCkuZG90KHIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGwgPSBoLmRpcmVjdGlvbi5tdWx0aXBseShoLnNwZWVkKS5kb3Qocik7XG4gICAgICAgICAgICAgICAgY29uc3QgZiA9IGkuZGlyZWN0aW9uLm11bHRpcGx5KGkuc3BlZWQpLmRvdChvKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3ID0gaC5kaXJlY3Rpb24ubXVsdGlwbHkoaC5zcGVlZCkuZG90KG8pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSAoZiAqIChjIC0gYSkgKyAyICogYSAqIHcpIC8gKGMgKyBhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnID0gKHcgKiAoYSAtIGMpICsgMiAqIGMgKiBmKSAvIChjICsgYSk7XG4gICAgICAgICAgICAgICAgaS52ZWxvY2l0eSA9IHIubXVsdGlwbHkodSkuYWRkKG8ubXVsdGlwbHkoZCkpO1xuICAgICAgICAgICAgICAgIGgudmVsb2NpdHkgPSByLm11bHRpcGx5KGwpLmFkZChvLm11bHRpcGx5KGcpKTtcbiAgICAgICAgICAgICAgICBpZiAoaS5wcmVwYXJlTW92ZW1lbnQoZSwgcykpIG4uYWRkKGkpOyBlbHNlIG4uZGVsZXRlKGkpO1xuICAgICAgICAgICAgICAgIGlmICghaC5wcmVwYXJlTW92ZW1lbnQoZSwgcykpIG4uYWRkKGgpOyBlbHNlIG4uZGVsZXRlKGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKDAgPT09IG4uc2l6ZSkgYnJlYWs7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2YgaSkge1xuICAgICAgICAgICAgICAgIHQucG9zaXRpb24uYWRkKFsgMTEwMCwgMTEwMCBdLCB0cnVlKS5tb2R1bHVzKDExMDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSB0LnNoYXBlc1swXS53b3JsZFNoYXBlLnNoYXBlO1xuICAgICAgICAgICAgICAgIGlmIChzLnBvc2l0aW9uLnggPCAwKSB0LnZlbG9jaXR5LnggPSAtdC52ZWxvY2l0eS54OyBlbHNlIGlmIChzLnBvc2l0aW9uLnggPiAxMTAwKSB0LnZlbG9jaXR5LnggPSAtdC52ZWxvY2l0eS54O1xuICAgICAgICAgICAgICAgIGlmIChzLnBvc2l0aW9uLnkgPCAwKSB0LnZlbG9jaXR5LnkgPSAtdC52ZWxvY2l0eS55OyBlbHNlIGlmIChzLnBvc2l0aW9uLnkgPiAxMTAwKSB0LnZlbG9jaXR5LnkgPSAtdC52ZWxvY2l0eS55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBhZGRGb3JjZSh0KSB7XG4gICAgICAgIGlmICghKHQgaW5zdGFuY2VvZiBGb3JjZSkpIHQgPSBGb3JjZS5jcmVhdGUodCk7XG4gICAgICAgIFBoeXNpY3MuZm9yY2VzLnB1c2godCk7XG4gICAgfVxuICAgIHN0YXRpYyByZW1vdmVGb3JjZSh0LCBzID0gUGh5c2ljcykge1xuICAgICAgICBjb25zdCBpID0gUGh5c2ljcy5mb3JjZXMuZmluZEluZGV4KCh0ID0+IHQgPT09IHMpKTtcbiAgICAgICAgaWYgKGkgPCAwKSByZXR1cm47XG4gICAgICAgIFBoeXNpY3MuZm9yY2VzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgc3RhdGljIGFkZEVudGl0aWVzKHQpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHQpKSB0ID0gWyB0IF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkRW50aXRpZXNcIiwgdCk7XG4gICAgICAgIHJldHVybiB0Lm1hcCgodCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzID0gdCBpbnN0YW5jZW9mIEVudGl0eSA/IHQgOiBFbnRpdHkuY3JlYXRlKHQpO1xuICAgICAgICAgICAgUGh5c2ljcy5mb3JjZXMuZm9yRWFjaCgodCA9PiBzLmFkZEZvcmNlKHQuY2xvbmUoKS5yZXNldCgpKSkpO1xuICAgICAgICAgICAgUGh5c2ljcy5lbnRpdGllcy5wdXNoKHMpO1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gcy5wb3NpdGlvbikgUGh5c2ljcy5MLmFkZEVudGl0eShzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkRW50aXRpZXMgbWFwXCIsIHMpO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgc3RhdGljIHVwZGF0ZUVudGl0eSh0KSB7XG4gICAgICAgIFBoeXNpY3MuTC51cGRhdGVFbnRpdHkodCk7XG4gICAgfVxuICAgIHN0YXRpYyByZW1vdmVFbnRpdGllcyh0KSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0KSkgdCA9IFsgdCBdO1xuICAgICAgICB0LmZvckVhY2goKHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcyA9IFBoeXNpY3MuZW50aXRpZXMuZmluZEluZGV4KChzID0+IHMgPT09IHQpKTtcbiAgICAgICAgICAgIGlmIChzID4gLTEpIFBoeXNpY3MuZW50aXRpZXMuc3BsaWNlKHMsIDEpO1xuICAgICAgICAgICAgUGh5c2ljcy5MLnJlbW92ZUVudGl0eSh0KTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblxuUGh5c2ljcy5lbnRpdGllcyA9IFtdO1xuXG5QaHlzaWNzLmZvcmNlcyA9IFtdO1xuXG5QaHlzaWNzLmNvbGxpc2lvbnMgPSB7fTtcblxuUGh5c2ljcy5zaWduYWxzID0ge307XG5cblBoeXNpY3Muc2hvd0FyZWFzID0gZmFsc2U7XG5cblBoeXNpY3MuZG9udENsZWFyID0gZmFsc2U7XG5cbmV4cG9ydCB7IENpcmNsZSwgRW50aXR5LCBGb3JjZSwgSW50ZXJzZWN0aW9uLCBMaW5lLCBQaHlzaWNzLCBQb2ludCwgUG9seWdvbiwgUmF5LCBSZWN0LCBSb3VuZGVkUmVjdCwgU3RhZGl1bSwgVmVjdG9yIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iLCJjbGFzcyBVSVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJjcmVhdGVkXCI7XG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSBbXTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSBcIlwiO1xuICAgICAgICB0aGlzLm1vdmVkID0gXCJcIjtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZSh0LCBpLCBlID0ge30sIHMgPSB7XG4gICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgcHJlcGFyZTogdHJ1ZSxcbiAgICAgICAgc2libGluZzogbnVsbFxuICAgIH0pIHtcbiAgICAgICAgY29uc3QgbiA9IG5ldyBVSVZpZXc7XG4gICAgICAgIG4ubW9kZWwgPSBlO1xuICAgICAgICBuLmVsZW1lbnQgPSBpO1xuICAgICAgICBuLmJpbmRpbmdzLnB1c2goLi4uVUkucGFyc2Uobi5lbGVtZW50LCBlLCBuLCBzLnBhcmVudCkpO1xuICAgICAgICBuLnBhcmVudEVsZW1lbnQgPSB0O1xuICAgICAgICBuLnNpYmxpbmcgPSBzLnNpYmxpbmc7XG4gICAgICAgIG4ucGFyZW50ID0gcy5wYXJlbnQgPz8gVUk7XG4gICAgICAgIG4uYXR0YWNoZWQgPSBuZXcgUHJvbWlzZSgodCA9PiB7XG4gICAgICAgICAgICBuLmF0dGFjaFJlc29sdmUgPSB0O1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInB1aS1yZW1vdmluZ1wiKTtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSBcInF1ZXVlXCI7XG4gICAgICAgIFVJLmRlc3Ryb3llZC5wdXNoKHRoaXMpO1xuICAgIH1cbiAgICB0ZXJtaW5hdGUoKSB7XG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMuZ2V0QW5pbWF0aW9ucygpKS50aGVuKCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaCgodCA9PiB0LnVuYmluZCgpKSk7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy5wYXJlbnQudmlld3MuZmluZEluZGV4KCh0ID0+IHQgPT09IHRoaXMpKTtcbiAgICAgICAgICAgIGlmICh0ID4gLTEpIHRoaXMucGFyZW50LnZpZXdzLnNwbGljZSh0LCAxKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IFwiZGVzdHJveWVkXCI7XG4gICAgfVxuICAgIG1vdmUodCkge1xuICAgICAgICB0aGlzLm1vdmVkID0gXCJxdWV1ZVwiO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInB1aS1tb3ZpbmdcIik7XG4gICAgICAgIHRoaXMuc2libGluZyA9IHQ7XG4gICAgfVxuICAgIHBsYXkodCwgaSkge1xuICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHQpIHQgPSB0aGlzLmFuaW1hdGlvbnMuZmluZCgoaSA9PiBpLm5hbWUgPT09IHQpKS5jbG9uZSgpO1xuICAgICAgICB0LmVsZW1lbnQgPSBpO1xuICAgICAgICB0LnN0YXRlID0gXCJwZW5kaW5nXCI7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUXVldWUucHVzaCh0KTtcbiAgICAgICAgdGhpcy51cGRhdGVBbmltYXRpb25zKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICAgIHVwZGF0ZUZyb21VSSgpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKCh0ID0+IHQudXBkYXRlRnJvbVVJKCkpKTtcbiAgICB9XG4gICAgdXBkYXRlVG9VSSgpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKCh0ID0+IHQudXBkYXRlVG9VSSgpKSk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICAgIGNhc2UgXCJjcmVhdGVkXCI6XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInB1aS1hZGRpbmdcIik7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJQVUktVU5SRU5ERVJFRFwiKSkgKHRoaXMucGFyZW50RWxlbWVudCA/PyBVSS5wYXJlbnRFbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5wYXJlbnQpKS5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50LCB0aGlzLnNpYmxpbmc/Lm5leHRTaWJsaW5nID8/IG51bGwpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hSZXNvbHZlKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gXCJhdHRhY2hpbmdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImF0dGFjaGluZ1wiOlxuICAgICAgICAgICAgaWYgKDAgPT09IHRoaXMuZ2V0QW5pbWF0aW9ucyhmYWxzZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwdWktYWRkaW5nXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcImF0dGFjaGVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJhdHRhY2hlZFwiOlxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFwicmVuZGVyZWRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZUF0RXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVBdEV2ZW50cygpKSk7XG4gICAgfVxuICAgIHVwZGF0ZUFuaW1hdGlvbnModCkge1xuICAgICAgICB3aGlsZSAoXCJmaW5pc2hlZFwiID09PSB0aGlzLmFuaW1hdGlvblF1ZXVlWzBdPy5zdGF0ZSA/PyBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMuYW5pbWF0aW9uUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIHQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbmltYXRpb25RdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZSA9IHRoaXMuYW5pbWF0aW9uUXVldWVbaV07XG4gICAgICAgICAgICBpZiAoXCJwZW5kaW5nXCIgIT09IGUuc3RhdGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGUuaXNCbG9ja2VkKHQpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGUuc3RhdGUgPSBcInBsYXlpbmdcIjtcbiAgICAgICAgICAgIGUuc3RhcnRUaW1lID0gdDtcbiAgICAgICAgICAgIGUuYW5pbWF0aW9uID0gZS5lbGVtZW50LmFuaW1hdGUoZS5rZXlmcmFtZXMsIGUub3B0aW9ucyk7XG4gICAgICAgICAgICBlLmZpbmlzaGVkID0gZS5hbmltYXRpb24uZmluaXNoZWQ7XG4gICAgICAgICAgICBlLmZpbmlzaGVkLnRoZW4oKCgpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0YXRlID0gXCJmaW5pc2hlZFwiO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQW5pbWF0aW9ucyhwZXJmb3JtYW5jZS5ub3coKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlTW92ZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm1vdmVkKSB7XG4gICAgICAgICAgY2FzZSBcInF1ZXVlXCI6XG4gICAgICAgICAgICB0aGlzLm1vdmVkID0gXCJtb3ZlXCI7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJtb3ZlXCI6XG4gICAgICAgICAgICBpZiAoMCA9PT0gdGhpcy5nZXRBbmltYXRpb25zKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IFVJLnBhcmVudEVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLnBhcmVudCk7XG4gICAgICAgICAgICAgICAgdC5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50LCB0aGlzLnNpYmxpbmcubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicHVpLW1vdmluZ1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVkID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnNpYmxpbmcgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKCh0ID0+IHQudXBkYXRlTW92ZSgpKSk7XG4gICAgfVxuICAgIGdldEFuaW1hdGlvbnModCA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBbmltYXRpb25zKHtcbiAgICAgICAgICAgIHN1YnRyZWU6IHRcbiAgICAgICAgfSkuZmlsdGVyKCh0ID0+IFwiZmluaXNoZWRcIiAhPT0gdC5wbGF5U3RhdGUgJiYgdC5lZmZlY3Q/LmdldFRpbWluZygpLml0ZXJhdGlvbnMgIT09IDEgLyAwKSkubWFwKCh0ID0+IHQuZmluaXNoZWQpKTtcbiAgICB9XG59XG5cbmNsYXNzIFVJQmluZGluZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZnJvbVVJID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG9VSSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXRFdmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZVRpbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aWV3cyA9IFtdO1xuICAgICAgICB0aGlzLmZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy50cmlnZ2VyQXRFdmVudCA9IHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaCh0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pZCA9ICsrVUkuaWQ7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICBpZiAobnVsbCA9PSB0aGlzLiRlbGVtZW50KSB0aGlzLiRlbGVtZW50ID0gXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHRoaXMuc2VsZWN0b3IgPyB0aGlzLmNvbnRleHQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKSA6IHRoaXMuc2VsZWN0b3I7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgIH1cbiAgICBzZXQgZWxlbWVudCh0KSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSB0O1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKHQpIHtcbiAgICAgICAgY29uc3QgaSA9IG5ldyBVSUJpbmRpbmc7XG4gICAgICAgIGNvbnN0IGUgPSB0LnByb3BlcnR5Py5zcGxpdChcIjpcIikgPz8gW107XG4gICAgICAgIGNvbnN0IHMgPSBlLnNoaWZ0KCk7XG4gICAgICAgIGkub2JqZWN0ID0gXCIkbW9kZWxcIiBpbiB0Lm9iamVjdCA/IHQub2JqZWN0IDoge1xuICAgICAgICAgICAgJG1vZGVsOiB0Lm9iamVjdFxuICAgICAgICB9O1xuICAgICAgICBpLnByb3BlcnR5ID0gcztcbiAgICAgICAgaS5hcmd1bWVudHMgPSBlO1xuICAgICAgICBpLmNvbnRleHQgPSB0LmNvbnRleHQgPz8gZG9jdW1lbnQ7XG4gICAgICAgIGkuc2VsZWN0b3IgPSB0LnNlbGVjdG9yO1xuICAgICAgICBpLmF0dHJpYnV0ZSA9IHQuYXR0cmlidXRlID8/IFwiaW5uZXJUZXh0XCI7XG4gICAgICAgIGkudmFsdWUgPSB0LnZhbHVlID8/IGkudmFsdWU7XG4gICAgICAgIGkudGVtcGxhdGUgPSB0LnRlbXBsYXRlID8/IGkudGVtcGxhdGU7XG4gICAgICAgIGkuZnJvbVVJID0gdC5mcm9tVUkgPz8gaS5mcm9tVUk7XG4gICAgICAgIGkudG9VSSA9IHQudG9VSSA/PyBpLnRvVUk7XG4gICAgICAgIGkuYXRFdmVudCA9IHQuYXRFdmVudCA/PyBpLmF0RXZlbnQ7XG4gICAgICAgIGkub25lVGltZSA9IHQub25lVGltZSA/PyBpLm9uZVRpbWU7XG4gICAgICAgIGkucGFyZW50ID0gdC5wYXJlbnQgPz8gVUk7XG4gICAgICAgIGkuYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgaWYgKFwiYm9vbGVhblwiICE9PSB0eXBlb2YgaS5mcm9tVUkpIGkuZnJvbVVJID0gaS5mcm9tVUkuYmluZChpKTtcbiAgICAgICAgaWYgKFwiYm9vbGVhblwiICE9PSB0eXBlb2YgaS50b1VJKSBpLnRvVUkgPSBpLnRvVUkuYmluZChpKTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy52aWV3cy5mb3JFYWNoKCh0ID0+IHQuZGVzdHJveSgpKSk7XG4gICAgfVxuICAgIHVuYmluZCgpIHtcbiAgICAgICAgVUkudW5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBhZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYXRFdmVudCkge1xuICAgICAgICAgICAgdGhpcy50b1VJID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZyb21VSSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5hdHRyaWJ1dGUsIHRoaXMudHJpZ2dlckF0RXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5hdEV2ZW50KSB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmF0dHJpYnV0ZSwgdGhpcy50cmlnZ2VyQXRFdmVudCk7XG4gICAgfVxuICAgIHVwZGF0ZUZyb21VSSgpIHtcbiAgICAgICAgaWYgKGZhbHNlID09PSB0aGlzLmZyb21VSSB8fCB0aGlzLmZpcnN0VXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVGcm9tVUkoKSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHt0YXJnZXQ6IHQsIHByb3BlcnR5OiBpfSA9IFVJLnJlc29sdmVQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsIHRoaXMuYXR0cmlidXRlKTtcbiAgICAgICAgY29uc3QgZSA9IHRbaV07XG4gICAgICAgIGlmIChlICE9PSB0aGlzLmxhc3RVSVZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdCA9IHRydWUgIT09IHRoaXMuZnJvbVVJID8gdGhpcy5mcm9tVUkoZSwgdGhpcy5sYXN0VUlWYWx1ZSwgdGhpcy5wcm9wZXJ0eSwgdGhpcy5vYmplY3QpIDogZTtcbiAgICAgICAgICAgIHRoaXMubGFzdFVJVmFsdWUgPSBlO1xuICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gdCAmJiB0ICE9PSB0aGlzLmxhc3RWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFZhbHVlID0gdDtcbiAgICAgICAgICAgICAgICBjb25zdCB7dGFyZ2V0OiBpLCBwcm9wZXJ0eTogZX0gPSBVSS5yZXNvbHZlUHJvcGVydHkodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIGlmIChcIm51bWJlclwiID09PSBVSS5yZXNvbHZlVmFsdWUodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpICYmICFpc05hTih0KSkgdCA9ICt0O1xuICAgICAgICAgICAgICAgIGlbZV0gPSB0O1xuICAgICAgICAgICAgfSBlbHNlIHRoaXMubGFzdFZhbHVlID0gdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVGcm9tVUkoKSkpO1xuICAgIH1cbiAgICB1cGRhdGVUb1VJKCkge1xuICAgICAgICBpZiAoZmFsc2UgPT09IHRoaXMudG9VSSkge1xuICAgICAgICAgICAgdGhpcy52aWV3cy5mb3JFYWNoKCh0ID0+IHQudXBkYXRlVG9VSSgpKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHQgPSBVSS5yZXNvbHZlVmFsdWUodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICBsZXQgaSA9IGZhbHNlO1xuICAgICAgICBpZiAobnVsbCAhPSB0aGlzLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSBpZiAoXCJib29sZWFuXCIgPT09IHR5cGVvZiB0aGlzLmF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIHQgPSBmYWxzZSA9PT0gKHQgPz8gZmFsc2UpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0ICE9PSB0aGlzLmxhc3RWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gdHJ1ZSAhPT0gdGhpcy50b1VJID8gdGhpcy50b1VJKHQsIHRoaXMubGFzdFZhbHVlLCB0aGlzLnByb3BlcnR5LCB0aGlzLm9iamVjdCkgOiB0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBpICYmIGkgIT09IHRoaXMubGFzdFVJVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLmF0dHJpYnV0ZSkgdGhpcy52aWV3cy5wdXNoKFVJVmlldy5jcmVhdGUodGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQsIHRoaXMudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpLCB0aGlzLm9iamVjdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwYXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nOiB0aGlzLmVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMudmlld3MucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdD8uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VUlWYWx1ZSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChudWxsID09IHQpIHQgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gdGhpcy5hcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMubGFzdFZhbHVlID8/IFtdO1xuICAgICAgICAgICAgICAgIGlmICh0Lmxlbmd0aCAhPT0gcy5sZW5ndGgpIGkgPSB0cnVlOyBlbHNlIGZvciAobGV0IG4gPSAwLCBoID0gdC5sZW5ndGg7IG4gPCBoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGgsIHI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudWxsID09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSB0W25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgciA9IHNbbl07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gVUkucmVzb2x2ZVZhbHVlKHRbbl0gPz8ge30sIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgciA9IFVJLnJlc29sdmVWYWx1ZShzW25dID8/IHt9LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaCAhPT0gcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3cy5mb3JFYWNoKCh0ID0+IHQudXBkYXRlVG9VSSgpKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uZVRpbWUpIHRoaXMub25lVGltZURvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuID0gdHJ1ZSAhPT0gdGhpcy50b1VJID8gdGhpcy50b1VJKHQsIHMsIHRoaXMucHJvcGVydHksIHRoaXMub2JqZWN0KSA6IHQ7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVUb1VJKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25lVGltZSkgdGhpcy5vbmVUaW1lRG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGggPSB0aGlzLmxhc3RVSVZhbHVlID8/IFtdO1xuICAgICAgICAgICAgICAgIGxldCByID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMCwgaSA9IG4ubGVuZ3RoLCBzID0gMDsgdCA8IGk7IHQrKywgcysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpLCBsO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gblt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBoW3NdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IFVJLnJlc29sdmVWYWx1ZShuW3RdID8/IHt9LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBVSS5yZXNvbHZlVmFsdWUoaFtzXSA/PyB7fSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGwpIHIrKzsgZWxzZSBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHIgPT09IG4ubGVuZ3RoICYmIG4ubGVuZ3RoID09PSBoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVUb1VJKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25lVGltZSkgdGhpcy5vbmVUaW1lRG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGwgPSB0aGlzLnZpZXdzLnNwbGljZSgwLCByKTtcbiAgICAgICAgICAgICAgICBsZXQgbyA9IGxbbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gciwgaSA9IG4ubGVuZ3RoLCBzID0gcjsgdCA8IGk7IHQrKywgcysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBuW3RdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiAhPT0gdHlwZW9mIGkpIGkuJGluZGV4ID0gdDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMudmlld3Muc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMuYXR0cmlidXRlXTogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhcmVudDogdGhpcy5vYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gVUlWaWV3LmNyZWF0ZSh0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudCwgdGhpcy50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSksIHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGFyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZzogbz8uZWxlbWVudCA/PyB0aGlzLmVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoID0gbnVsbCA9PSBlID8gaSA6IFVJLnJlc29sdmVWYWx1ZShpID8/IHt9LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHM/Lm1vZGVsLiRtb2RlbFt0aGlzLmF0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBudWxsID09IGUgPyByIDogVUkucmVzb2x2ZVZhbHVlKHIgPz8ge30sIGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaCA9PT0gYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5tb3ZlKG8/LmVsZW1lbnQgPz8gdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuLnNsaWNlKHQpLm1hcCgodCA9PiBudWxsID09IGUgPyB0IDogVUkucmVzb2x2ZVZhbHVlKHQgPz8ge30sIGUpKSkuaW5jbHVkZXMoYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdzLnVuc2hpZnQocyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwLCBpID0gdGhpcy52aWV3cy5sZW5ndGg7IHQgPCBpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzLnZpZXdzW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IGk/Lm1vZGVsLiRtb2RlbFt0aGlzLmF0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuID0gbnVsbCA9PSBlID8gcyA6IFVJLnJlc29sdmVWYWx1ZShzID8/IHt9LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoID09PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKC4uLnRoaXMudmlld3Muc3BsaWNlKHQsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLm1vdmUobz8uZWxlbWVudCA/PyB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMuYXR0cmlidXRlXTogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhcmVudDogdGhpcy5vYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gVUlWaWV3LmNyZWF0ZSh0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudCwgdGhpcy50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSksIHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGFyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZzogbz8uZWxlbWVudCA/PyB0aGlzLmVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3cy5mb3JFYWNoKCh0ID0+IHQuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3cyA9IGw7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSBbIC4uLnQgXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RVSVZhbHVlID0gWyAuLi5uIF07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bGwgPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBVSS5yZXNvbHZlVmFsdWUodGhpcy5vYmplY3QsIHRoaXMuYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gaS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gbnVsbCA9PSB0ID8gaSA6IGkuY3JlYXRlKHQpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0ID8/IGk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3cy5wdXNoKFVJLmNyZWF0ZSh0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudCwgZSwgcywge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmc6IHRoaXMuZWxlbWVudFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0ICE9PSB0aGlzLmxhc3RWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRydWUgIT09IHRoaXMudG9VSSA/IHRoaXMudG9VSSh0LCB0aGlzLmxhc3RWYWx1ZSwgdGhpcy5wcm9wZXJ0eSwgdGhpcy5vYmplY3QpIDogdDtcbiAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGkgJiYgaSAhPT0gdGhpcy5sYXN0VUlWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHt0YXJnZXQ6IGUsIHByb3BlcnR5OiBzfSA9IFVJLnJlc29sdmVQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsIHRoaXMuYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICBlW3NdID0gaTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RWYWx1ZSA9IHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VUlWYWx1ZSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3cy5mb3JFYWNoKCh0ID0+IHQudXBkYXRlVG9VSSgpKSk7XG4gICAgICAgIGlmICh0aGlzLm9uZVRpbWUpIHRoaXMub25lVGltZURvbmUoKTtcbiAgICB9XG4gICAgb25lVGltZURvbmUoKSB7XG4gICAgICAgIHRoaXMudG9VSSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyb21VSSA9IGZhbHNlO1xuICAgIH1cbiAgICB1cGRhdGVBdEV2ZW50cygpIHtcbiAgICAgICAgbGV0IHQgPSB0aGlzLmV2ZW50cy5zaGlmdCgpO1xuICAgICAgICB3aGlsZSAobnVsbCAhPSB0KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gVUkucmVzb2x2ZVZhbHVlKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgIGkodCwgdGhpcy5vYmplY3QuJG1vZGVsLCB0aGlzLmVsZW1lbnQsIHRoaXMuYXR0cmlidXRlLCB0aGlzLm9iamVjdCk7XG4gICAgICAgICAgICB0ID0gdGhpcy5ldmVudHMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVBdEV2ZW50cygpKSk7XG4gICAgfVxuICAgIHVwZGF0ZU1vdmUoKSB7XG4gICAgICAgIHRoaXMudmlld3MuZm9yRWFjaCgodCA9PiB0LnVwZGF0ZU1vdmUoKSkpO1xuICAgIH1cbn1cblxuY2xhc3MgVUkge1xuICAgIHN0YXRpYyBpbml0aWFsaXplKHQgPSB0cnVlKSB7XG4gICAgICAgIFVJLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZhbHNlID09PSB0KSByZXR1cm47XG4gICAgICAgIGlmICh0cnVlID09PSB0KSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIFVJLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0SW50ZXJ2YWwoKCgpID0+IFVJLnVwZGF0ZSgpKSwgMWUzIC8gdCk7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUodCwgaSwgZSA9IHt9LCBzID0ge1xuICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgIHByZXBhcmU6IHRydWUsXG4gICAgICAgIHNpYmxpbmc6IG51bGxcbiAgICB9KSB7XG4gICAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgaSkge1xuICAgICAgICAgICAgY29uc3QgZSA9IHQ/Lm93bmVyRG9jdW1lbnQgPz8gZG9jdW1lbnQ7XG4gICAgICAgICAgICBpZiAoaS5zdGFydHNXaXRoKFwiI1wiKSkgaSA9IGUucXVlcnlTZWxlY3RvcihpKS5pbm5lckhUTUw7XG4gICAgICAgICAgICBjb25zdCBuID0gZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbi5pbm5lckhUTUwgPSBzLnByZXBhcmUgPyBVSS5wcmVwYXJlKGkpIDogaTtcbiAgICAgICAgICAgIGkgPSBuLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG4gPSBVSVZpZXcuY3JlYXRlKHQsIGksIGUsIHMpO1xuICAgICAgICBpZiAobi5wYXJlbnQgPT09IFVJKSBVSS52aWV3cy5wdXNoKG4pO1xuICAgICAgICBpZiAoIVVJLmluaXRpYWxpemVkKSBVSS5pbml0aWFsaXplKCk7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBzdGF0aWMgcGxheSh0LCBpKSB7XG4gICAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgdCkge1xuICAgICAgICAgICAgdCA9IHRoaXMuZ2xvYmFscy5hbmltYXRpb25zLmZpbmQoKGkgPT4gaS5uYW1lID09PSB0KSkuY2xvbmUoKTtcbiAgICAgICAgICAgIHJldHVybiB0LnBsYXkoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQucGxheSgpO1xuICAgIH1cbiAgICBzdGF0aWMgcGFyc2UodCwgaSwgZSwgcykge1xuICAgICAgICBjb25zdCBuID0gW107XG4gICAgICAgIGlmICgzID09PSB0Lm5vZGVUeXBlKSB7XG4gICAgICAgICAgICBsZXQgaCA9IHQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgciA9IGgubWF0Y2goVUkucmVnZXhWYWx1ZSk7XG4gICAgICAgICAgICB3aGlsZSAobnVsbCAhPSByKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbCA9IHJbMV07XG4gICAgICAgICAgICAgICAgbGV0IG8gPSByWzJdO1xuICAgICAgICAgICAgICAgIGggPSByWzNdO1xuICAgICAgICAgICAgICAgIGxldCBhID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKG8uc3RhcnRzV2l0aChcInxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG8gPSBvLnNsaWNlKDEpLnRyaW1TdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdSA9IHQuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgdC50ZXh0Q29udGVudCA9IGw7XG4gICAgICAgICAgICAgICAgVUkucGFyZW50RWxlbWVudCh0LCBzKS5pbnNlcnRCZWZvcmUodSwgdC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgbi5wdXNoKFVJLmJpbmQoe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogdSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiBcInRleHRDb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogaSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IG8sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogZSxcbiAgICAgICAgICAgICAgICAgICAgb25lVGltZTogYVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB0ID0gdTtcbiAgICAgICAgICAgICAgICB1ID0gdC5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgICAgICB1LnRleHRDb250ZW50ID0gaDtcbiAgICAgICAgICAgICAgICBVSS5wYXJlbnRFbGVtZW50KHQsIHMpLmluc2VydEJlZm9yZSh1LCB0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB0ID0gdTtcbiAgICAgICAgICAgICAgICByID0gaC5tYXRjaChVSS5yZWdleFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG4ucHVzaCguLi5PYmplY3Qua2V5cyh0LmF0dHJpYnV0ZXMgPz8gW10pLnJldmVyc2UoKS5tYXAoKG4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGggPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIENvbW1lbnQpIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gdC5hdHRyaWJ1dGVzW25dO1xuICAgICAgICAgICAgICAgIGlmIChyLm5hbWUuc3RhcnRzV2l0aChcInB1aS5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbiA9IHIudmFsdWUubWF0Y2goVUkucmVnZXhBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgW2gsIGwsIG8sIGEsIHVdID0gbjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGY7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjO1xuICAgICAgICAgICAgICAgICAgICBsZXQgVSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJAXCIgIT09IG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBsLm1hdGNoKC9eJyguKj8pJyQvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmID0gZVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBcIm9wdGlvblwiID09PSB0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPyBcInNlbGVjdGVkXCIgOiBcImNoZWNrZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gdCA9PiB0ID8gZiA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gdCA9PiB0ID09PSBmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIlwiID09PSBsKSBpZiAoXCI+XCIgPT09IGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7dGFyZ2V0OiBlLCBwcm9wZXJ0eTogc30gPSBVSS5yZXNvbHZlUHJvcGVydHkoaSwgdSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVtzXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJLnBhcmVudE5vZGUodCwgcykuaW5zZXJ0QmVmb3JlKGksIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJLnBhcmVudE5vZGUodCwgcykucmVtb3ZlQ2hpbGQodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVBdHRyaWJ1dGUoci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gXCI9XCIgPT09IG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwifFwiID09PSBhKSBVID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCI9XCIgPT09IGEgJiYgXCI9XCIgPT09IG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gVUkucGFyZW50Tm9kZSh0LCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoOCAhPT0gaS5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmluc2VydEJlZm9yZShlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5yZW1vdmVDaGlsZCh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVBdHRyaWJ1dGUoci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIipcIiA9PT0gYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHIubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVUkucGFyZW50Tm9kZSh0LCBzKS5pbnNlcnRCZWZvcmUoaSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVUkucGFyZW50Tm9kZSh0LCBzKS5yZW1vdmVDaGlsZCh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnJlbW92ZUF0dHJpYnV0ZShyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcInxcIiA9PT0gYSkgVSA9IHRydWU7IGVsc2UgaWYgKFwiY2hlY2tlZFwiICE9PSBsKSB0LnNldEF0dHJpYnV0ZShsLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyBVSS5iaW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGYsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogdSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9VSTogXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG8gPyBcIjxcIiA9PT0gbyA6IG8sXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tVUk6IFwic3RyaW5nXCIgPT09IHR5cGVvZiBhID8gXCI+XCIgPT09IGEgOiBhLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXRFdmVudDogXCJAXCIgPT09IG8sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVUaW1lOiBVXG4gICAgICAgICAgICAgICAgICAgIH0pIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGwgPSBbIHIudmFsdWUgXTtcbiAgICAgICAgICAgICAgICBsZXQgbyA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IGEgPSBsW29dLm1hdGNoKFVJLnJlZ2V4VmFsdWUpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChudWxsICE9IGEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHtiZWZvcmU6IHMsIHByb3BlcnR5OiBuLCBhZnRlcjogdX0gPSBhLmdyb3VwcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGYgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uc3RhcnRzV2l0aChcInxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IG4uc2xpY2UoMSkudHJpbVN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaC5wdXNoKFVJLmJpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IHIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdDogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25lVGltZTogZixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvVUkoaSwgZSwgcywgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGwuaW5kZXhPZihzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbFt0XSA9IFVJLnJlc29sdmVWYWx1ZShuLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxbdCAtIDFdICs9IGxbdF0gKyBsW3QgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwuc3BsaWNlKHQsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGggPSBsLm1hcCgoKHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFVJLnJlc29sdmVWYWx1ZShuLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnNldEF0dHJpYnV0ZShyLm5hbWUsIGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogZVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIGxbbysrXSA9IHM7XG4gICAgICAgICAgICAgICAgICAgIGxbbysrXSA9IG47XG4gICAgICAgICAgICAgICAgICAgIGxbb10gPSB1O1xuICAgICAgICAgICAgICAgICAgICBhID0gbFtvXS5tYXRjaChVSS5yZWdleFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgICAgICB9KSkuZmxhdCgpKTtcbiAgICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgQ29tbWVudCkgcmV0dXJuIG4uZmlsdGVyKCh0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCAhPSB0LnRlbXBsYXRlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0LnVuYmluZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGlmICghVUkubGVhdmVBdHRyaWJ1dGVzKSBmb3IgKGxldCBpID0gT2JqZWN0LmtleXModC5hdHRyaWJ1dGVzID8/IFtdKS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSB0LmF0dHJpYnV0ZXNbT2JqZWN0LmtleXModC5hdHRyaWJ1dGVzID8/IFtdKVtpXV07XG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZS5zdGFydHNXaXRoKFwicHVpLlwiKSkgdC5yZW1vdmVBdHRyaWJ1dGUoZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4ucHVzaCguLi5BcnJheS5mcm9tKHQuY2hpbGROb2RlcykubWFwKCh0ID0+IFVJLnBhcnNlKHQsIGksIGUsIHMpKSkuZmxhdCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgc3RhdGljIGJpbmQodCkge1xuICAgICAgICBjb25zdCBpID0gVUlCaW5kaW5nLmNyZWF0ZSh0KTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIHN0YXRpYyB1bmJpbmQodCkge1xuICAgICAgICB0LmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHQucGFyZW50ICE9PSBVSSkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHQucGFyZW50LmJpbmRpbmdzO1xuICAgICAgICAgICAgY29uc3QgZSA9IGkuaW5kZXhPZih0KTtcbiAgICAgICAgICAgIGlmIChlID4gLTEpIGkuc3BsaWNlKGUsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMudmlld3MuZm9yRWFjaCgodCA9PiB0LnVwZGF0ZUZyb21VSSgpKSk7XG4gICAgICAgIHRoaXMudmlld3MuZm9yRWFjaCgodCA9PiB0LnVwZGF0ZVRvVUkoKSkpO1xuICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVBdEV2ZW50cygpKSk7XG4gICAgICAgIGNvbnN0IHQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgWyAuLi50aGlzLnZpZXdzLCB0aGlzLmdsb2JhbHMgXS5mb3JFYWNoKChpID0+IGkudXBkYXRlQW5pbWF0aW9ucyh0KSkpO1xuICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4ge1xuICAgICAgICAgICAgdC51cGRhdGVNb3ZlKCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQuZm9yRWFjaCgodCA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHQuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJxdWV1ZVwiOlxuICAgICAgICAgICAgICAgIGlmIChcInJlbmRlcmVkXCIgPT09IHQuc3RhdGUpIHQuZGVzdHJveWVkID0gXCJkZXN0cm95XCI7IGVsc2UgdC51cGRhdGVUb1VJKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImRlc3Ryb3lcIjpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHQudGVybWluYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzLmRlc3Ryb3llZC5maW5kSW5kZXgoKGkgPT4gdCA9PT0gaSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IC0xKSB0aGlzLmRlc3Ryb3llZC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHN0YXRpYyByZXNvbHZlUHJvcGVydHkodCwgaSkge1xuICAgICAgICBpID0gaS5yZXBsYWNlKFwiW1wiLCBcIi5cIikucmVwbGFjZShcIl1cIiwgXCIuXCIpO1xuICAgICAgICBjb25zdCBlID0gaS5zcGxpdChcIi5cIikuZmlsdGVyKCh0ID0+ICh0ID8/IFwiXCIpLmxlbmd0aCA+IDApKTtcbiAgICAgICAgd2hpbGUgKFwiJHBhcmVudFwiID09PSBlWzBdICYmIG51bGwgIT0gdC4kcGFyZW50KSB7XG4gICAgICAgICAgICB0ID0gdC4kcGFyZW50O1xuICAgICAgICAgICAgZS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzID0gXCIkbW9kZWxcIiBpbiB0ID8gdC4kbW9kZWwgOiB0O1xuICAgICAgICB3aGlsZSAoZS5sZW5ndGggPiAxKSBzID0gc1tlLnNoaWZ0KCldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFyZ2V0OiBzLFxuICAgICAgICAgICAgcHJvcGVydHk6IGVbMF1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIHJlc29sdmVWYWx1ZSh0LCBpKSB7XG4gICAgICAgIGxldCBlID0gMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3Qge3RhcmdldDogZSwgcHJvcGVydHk6IHN9ID0gVUkucmVzb2x2ZVByb3BlcnR5KHQsIGkpO1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gZSAmJiBzIGluIGUpIHJldHVybiBlW3NdO1xuICAgICAgICAgICAgdCA9IHQuJHBhcmVudDtcbiAgICAgICAgfSB3aGlsZSAobnVsbCAhPSB0ICYmIGUrKyA8IDFlMyk7XG4gICAgfVxuICAgIHN0YXRpYyBwYXJlbnRFbGVtZW50KHQsIGkpIHtcbiAgICAgICAgY29uc3QgZSA9IHQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKG51bGwgIT0gZSkgcmV0dXJuIGU7XG4gICAgICAgIHdoaWxlIChudWxsICE9IGkgJiYgKG51bGwgPT0gaS5lbGVtZW50IHx8IGkuZWxlbWVudCA9PT0gdCkpIGkgPSBpLnBhcmVudDtcbiAgICAgICAgcmV0dXJuIGk/LmVsZW1lbnQ7XG4gICAgfVxuICAgIHN0YXRpYyBwYXJlbnROb2RlKHQsIGkpIHtcbiAgICAgICAgY29uc3QgZSA9IHQucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKG51bGwgIT0gZSkgcmV0dXJuIGU7XG4gICAgICAgIHdoaWxlIChudWxsICE9IGkgJiYgKG51bGwgPT0gaS5lbGVtZW50IHx8IGkuZWxlbWVudCA9PT0gdCkpIGkgPSBpLnBhcmVudDtcbiAgICAgICAgcmV0dXJuIGk/LmVsZW1lbnQ7XG4gICAgfVxuICAgIHN0YXRpYyBwcmVwYXJlKHQpIHtcbiAgICAgICAgbGV0IGkgPSB0O1xuICAgICAgICB0ID0gXCJcIjtcbiAgICAgICAgbGV0IGUgPSBpLm1hdGNoKFVJLnJlZ2V4UmVwbGFjZSk7XG4gICAgICAgIHdoaWxlIChudWxsICE9IGUpIHtcbiAgICAgICAgICAgIGNvbnN0IFtzLCBuLCBoLCByXSA9IGU7XG4gICAgICAgICAgICBpZiAoaC5tYXRjaCgvXFxTXFxzKj09PS8pKSB0ICs9IGAke24udHJpbUVuZCgpfWJyIFBVSS1VTlJFTkRFUkVEIFBVSS4ke1VJLmJpbmRpbmdDb3VudGVyKyt9PVwiJHtofVwiYDsgZWxzZSB0ICs9IGAke259IFBVSS4ke1VJLmJpbmRpbmdDb3VudGVyKyt9PVwiJHtofVwiIGA7XG4gICAgICAgICAgICBpID0gcjtcbiAgICAgICAgICAgIGUgPSBpLm1hdGNoKFVJLnJlZ2V4UmVwbGFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgdCArPSBpO1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG59XG5cblVJLmluaXRpYWxpemVkID0gZmFsc2U7XG5cblVJLmlkID0gMDtcblxuVUkudmlld3MgPSBbXTtcblxuVUkuZGVzdHJveWVkID0gW107XG5cblVJLmdsb2JhbHMgPSBuZXcgVUlWaWV3O1xuXG5VSS5sZWF2ZUF0dHJpYnV0ZXMgPSBmYWxzZTtcblxuVUkucmVnZXhSZXBsYWNlID0gLyhbXFxTXFxzXSo/KVxcJFxceyhbXn1dKj9bPD1AIV09Wyo9PnxdW159XSo/KVxcfShbXFxTXFxzXSopL207XG5cblVJLnJlZ2V4QXR0cmlidXRlID0gL15cXHMqKFxcUyo/KVxccyooWzw9QCFdKT0oWyo9PnxdKVxccyooXFxTKj8pXFxzKiQvO1xuXG5VSS5yZWdleFZhbHVlID0gLyg/PGJlZm9yZT5bXFxTXFxzXSo/KVxcJFxce1xccyooPzxwcm9wZXJ0eT5bXFxzXFxTXSo/KVxccypcXH0oPzxhZnRlcj5bXFxTXFxzXSopL207XG5cblVJLmJpbmRpbmdDb3VudGVyID0gMDtcblxuZXhwb3J0IHsgVUksIFVJVmlldyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgUGh5c2ljcywgVmVjdG9yLCBTdGFkaXVtLCBDaXJjbGUsIEVudGl0eSBhcyBQaHlzaWNzRW50aXR5IH0gZnJvbSBcIkBwZWFzeS1saWIvcGVhc3ktcGh5c2ljc1wiO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gXCJAcGVhc3ktbGliL3BlYXN5LXVpXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBwZWFzeS1saWIvcGVhc3ktaW5wdXRcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8vUEVBU1ktVUlcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuY29uc3QgdGVtcGxhdGUgPSBgXHJcbjxkaXYgY2xhc3M9XCJnYW1lXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBsYXllclwiIFxcJHsgPT0+IHBsYXllci5lbGVtZW50fSBzdHlsZT1cInRyYW5zbGF0ZTogXFwke3BsYXllci5wb3NpdGlvbi54fXB4IFxcJHtwbGF5ZXIucG9zaXRpb24ueX1weDsgbGVmdDogLTI1cHg7IHRvcDogLTI1cHg7IHJvdGF0ZTogXFwke3BsYXllci5hbmdsZX1kZWc7XCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFzdGVyb2lkXCIgXFwkeyA9PT4gYXN0ZXJvaWQuZWxlbWVudH0gc3R5bGU9XCJ0cmFuc2xhdGU6IFxcJHthc3Rlcm9pZC5wb3NpdGlvbi54fXB4IFxcJHthc3Rlcm9pZC5wb3NpdGlvbi55fXB4OyBsZWZ0OiAtNDBweDsgdG9wOiAtNDBweDtcIj48L2Rpdj5cclxuICA8Y2FudmFzIFxcJHsgPT0+IGNhbnZhc30+PC9jYW52YXM+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgVEhSVVNURk9SQ0UgPSAyMDtcclxuXHJcbmNvbnN0IG1vZGVsID0ge1xyXG4gIGNhbnZhczogPEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbD5udWxsLFxyXG4gIHBsYXllcjoge1xyXG4gICAgZWxlbWVudDogPGFueT5udWxsLFxyXG4gICAgcG9zaXRpb246IHsgeDogNTAsIHk6IDUwIH0sXHJcbiAgICBhbmdsZTogMCxcclxuICB9LFxyXG4gIGFzdGVyb2lkOiB7XHJcbiAgICBlbGVtZW50OiA8YW55Pm51bGwsXHJcbiAgICBwb3NpdGlvbjogeyB4OiAxMjAsIHk6IDUwIH0sXHJcbiAgfSxcclxufTtcclxuVUkuY3JlYXRlKGRvY3VtZW50LmJvZHksIHRlbXBsYXRlLCBtb2RlbCk7XHJcblVJLmluaXRpYWxpemUoZmFsc2UpO1xyXG5cclxubGV0IHNjcmVlbldpZHRoOiBudW1iZXI7XHJcbmxldCBzY3JlZW5IZWlnaHQ6IG51bWJlcjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbW9kZWwuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpbmRvdy5pbm5lcldpZHRoLnRvU3RyaW5nKCkpO1xyXG4gIG1vZGVsLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgd2luZG93LmlubmVySGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG4gIHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICBtb2RlbC5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2luZG93LmlubmVyV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgbW9kZWwuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCB3aW5kb3cuaW5uZXJIZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLy9QRUFTWS1QaHlzaWNzXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmNvbnN0IHBsYXllclNoYXBlID0ge1xyXG4gIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcclxuICByYWRpdXM6IDxhbnk+dW5kZWZpbmVkLFxyXG4gIHNpemU6IDxhbnk+dW5kZWZpbmVkLFxyXG4gIGFsaWdubWVudDogPGFueT51bmRlZmluZWQsXHJcbn07XHJcbnBsYXllclNoYXBlLnNpemUgPSBuZXcgVmVjdG9yKDUwLCA1MCk7XHJcblxyXG5jb25zdCBhc3Rlcm9pZFNoYXBlID0ge1xyXG4gIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcclxuICByYWRpdXM6IDxhbnk+dW5kZWZpbmVkLFxyXG4gIHNpemU6IDxhbnk+dW5kZWZpbmVkLFxyXG4gIGFsaWdubWVudDogPGFueT51bmRlZmluZWQsXHJcbn07XHJcbmFzdGVyb2lkU2hhcGUucmFkaXVzID0gNDA7XHJcblxyXG5jbGFzcyBFbnRpdHkge1xyXG4gIHB1YmxpYyBzaGFwZXMgPSA8YW55PltdO1xyXG4gIHB1YmxpYyBmb3JjZXMgPSA8YW55PltdO1xyXG4gIHB1YmxpYyBtYXNzOiBudW1iZXIgPSAxO1xyXG4gIHB1YmxpYyBjb2xvcj8gPSBcIlwiO1xyXG4gIHB1YmxpYyBtYXhTcGVlZD86IGFueTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBvc2l0aW9uOiBWZWN0b3IsIHB1YmxpYyBvcmllbnRhdGlvbiA9IDApIHt9XHJcbn1cclxuXHJcblBoeXNpY3MuaW5pdGlhbGl6ZSh7XHJcbiAgY3R4OiBtb2RlbC5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gIHNob3dBcmVhczogdHJ1ZSxcclxufSk7XHJcblxyXG5sZXQgcGxheWVyID0gbmV3IEVudGl0eShuZXcgVmVjdG9yKDI1MCwgMjUwKSk7XHJcbnBsYXllci5zaGFwZXMgPSBbcGxheWVyU2hhcGVdO1xyXG5wbGF5ZXIuZm9yY2VzID0gW107XHJcbnBsYXllci5tYXhTcGVlZCA9IDUwMDtcclxucGxheWVyLmNvbG9yID0gXCJibHVlXCI7XHJcblxyXG5sZXQgYXN0ZXJvaWQgPSBuZXcgRW50aXR5KG5ldyBWZWN0b3IoNDUwLCA0NTApKTtcclxuYXN0ZXJvaWQuc2hhcGVzID0gW2FzdGVyb2lkU2hhcGVdO1xyXG5hc3Rlcm9pZC5mb3JjZXMgPSBbXTtcclxuYXN0ZXJvaWQubWF4U3BlZWQgPSA1MDA7XHJcbmFzdGVyb2lkLmNvbG9yID0gXCJyZWRcIjtcclxuXHJcbmxldCBlbnRpdGllcyA9IFBoeXNpY3MuYWRkRW50aXRpZXMoW3BsYXllciwgYXN0ZXJvaWRdKTtcclxucGxheWVyID0gZW50aXRpZXNbMF07XHJcbmFzdGVyb2lkID0gZW50aXRpZXNbMV07XHJcbnBsYXllci5tYXNzID0gMztcclxuYXN0ZXJvaWQubWFzcyA9IDEwO1xyXG5cclxuY29uc3QgYW5nMlJhZCA9IChhOiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4gIHJldHVybiBhICogKE1hdGguUEkgLyAxODApO1xyXG59O1xyXG5cclxuY29uc3QgdGhydXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRlbXBYID0gVEhSVVNURk9SQ0UgKiBNYXRoLmNvcyhhbmcyUmFkKFBoeXNpY3MuZW50aXRpZXNbMF0ub3JpZW50YXRpb24pKTtcclxuICBjb25zdCB0ZW1wWSA9IFRIUlVTVEZPUkNFICogTWF0aC5zaW4oYW5nMlJhZChQaHlzaWNzLmVudGl0aWVzWzBdLm9yaWVudGF0aW9uKSk7XHJcbiAgY29uc3QgZGlyID0gbmV3IFZlY3Rvcih0ZW1wWCwgdGVtcFkpO1xyXG5cclxuICBQaHlzaWNzLmVudGl0aWVzWzBdLmFkZEZvcmNlKHtcclxuICAgIG5hbWU6IFwidGhydXN0XCIsXHJcbiAgICBkaXJlY3Rpb246IGRpcixcclxuICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgbWFnbml0dWRlOiA1MDAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCByZXZlcnNlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRBbmdsZSA9IFBoeXNpY3MuZW50aXRpZXNbMF0ub3JpZW50YXRpb247XHJcbiAgbGV0IHJldmVyc2VBbmdsZSA9IGN1cnJlbnRBbmdsZSArIDE4MDtcclxuXHJcbiAgY29uc3QgdGVtcFggPSBUSFJVU1RGT1JDRSAqIE1hdGguY29zKGFuZzJSYWQocmV2ZXJzZUFuZ2xlKSk7XHJcbiAgY29uc3QgdGVtcFkgPSBUSFJVU1RGT1JDRSAqIE1hdGguc2luKGFuZzJSYWQocmV2ZXJzZUFuZ2xlKSk7XHJcbiAgY29uc3QgZGlyID0gbmV3IFZlY3Rvcih0ZW1wWCwgdGVtcFkpO1xyXG5cclxuICBQaHlzaWNzLmVudGl0aWVzWzBdLmFkZEZvcmNlKHtcclxuICAgIG5hbWU6IFwicmV2ZXJzZVwiLFxyXG4gICAgZGlyZWN0aW9uOiBkaXIsXHJcbiAgICBkdXJhdGlvbjogMCxcclxuICAgIG1hZ25pdHVkZTogNTAwLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdHVybkxlZnQgPSAoKSA9PiB7XHJcbiAgUGh5c2ljcy5lbnRpdGllc1swXS5vcmllbnRhdGlvbiArPSAtMztcclxuICBjb25zb2xlLmxvZyhcInR1cm4gTFwiKTtcclxufTtcclxuXHJcbmNvbnN0IHR1cm5SaWdodCA9ICgpID0+IHtcclxuICBQaHlzaWNzLmVudGl0aWVzWzBdLm9yaWVudGF0aW9uICs9IDM7XHJcbiAgY29uc29sZS5sb2coXCJ0dXJuIFJcIik7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gUGVhc3ktSW5wdXRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5jb25zdCBtYXBwaW5nID0gSW5wdXQubWFwKHtcclxuICBBcnJvd1VwOiBcInRocnVzdFwiLFxyXG4gIEFycm93RG93bjogXCJyZXZlcnNlXCIsXHJcbiAgQXJyb3dMZWZ0OiBcInR1cm5MXCIsXHJcbiAgQXJyb3dSaWdodDogXCJ0dXJuUlwiLFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiAgU2NyZWVuIENvbGxpc2lvbiBNYW5hZ2VtZW50XHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmNvbnN0IHBsYXllclNjcmVlbkNvbGxpc2lvbiA9ICgpID0+IHtcclxuICAvL2NoZWNrIGZvciBzY3JlZW4gY29sbGlzaW9uXHJcbiAgaWYgKG1vZGVsLnBsYXllci5wb3NpdGlvbi54ID4gc2NyZWVuV2lkdGgpIHtcclxuICAgIFBoeXNpY3MuZW50aXRpZXNbMF0ucG9zaXRpb24ueCA9IC0xMDtcclxuICAgIG1vZGVsLnBsYXllci5wb3NpdGlvbi54ID0gLTEwO1xyXG4gIH1cclxuICBpZiAobW9kZWwucGxheWVyLnBvc2l0aW9uLnggPCAtMjUpIHtcclxuICAgIFBoeXNpY3MuZW50aXRpZXNbMF0ucG9zaXRpb24ueCA9IHNjcmVlbldpZHRoO1xyXG4gICAgbW9kZWwucGxheWVyLnBvc2l0aW9uLnggPSBzY3JlZW5XaWR0aDtcclxuICB9XHJcbiAgaWYgKG1vZGVsLnBsYXllci5wb3NpdGlvbi55ID4gc2NyZWVuSGVpZ2h0KSB7XHJcbiAgICBQaHlzaWNzLmVudGl0aWVzWzBdLnBvc2l0aW9uLnkgPSAtMTA7XHJcbiAgICBtb2RlbC5wbGF5ZXIucG9zaXRpb24ueSA9IC0xMDtcclxuICB9XHJcbiAgaWYgKG1vZGVsLnBsYXllci5wb3NpdGlvbi55IDwgLTI1KSB7XHJcbiAgICBQaHlzaWNzLmVudGl0aWVzWzBdLnBvc2l0aW9uLnkgPSBzY3JlZW5IZWlnaHQ7XHJcbiAgICBtb2RlbC5wbGF5ZXIucG9zaXRpb24ueSA9IHNjcmVlbkhlaWdodDtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBhc3Rlcm9pZFNjcmVlbkNvbGxpc2lvbiA9ICgpID0+IHtcclxuICAvL2NoZWNrIGZvciBzY3JlZW4gY29sbGlzaW9uXHJcbiAgaWYgKG1vZGVsLmFzdGVyb2lkLnBvc2l0aW9uLnggPiBzY3JlZW5XaWR0aCkge1xyXG4gICAgUGh5c2ljcy5lbnRpdGllc1sxXS5wb3NpdGlvbi54ID0gLTEwO1xyXG4gICAgbW9kZWwuYXN0ZXJvaWQucG9zaXRpb24ueCA9IC0xMDtcclxuICB9XHJcbiAgaWYgKG1vZGVsLmFzdGVyb2lkLnBvc2l0aW9uLnggPCAtMjUpIHtcclxuICAgIFBoeXNpY3MuZW50aXRpZXNbMV0ucG9zaXRpb24ueCA9IHNjcmVlbldpZHRoO1xyXG4gICAgbW9kZWwuYXN0ZXJvaWQucG9zaXRpb24ueCA9IHNjcmVlbldpZHRoO1xyXG4gIH1cclxuICBpZiAobW9kZWwuYXN0ZXJvaWQucG9zaXRpb24ueSA+IHNjcmVlbkhlaWdodCkge1xyXG4gICAgUGh5c2ljcy5lbnRpdGllc1sxXS5wb3NpdGlvbi55ID0gLTEwO1xyXG4gICAgbW9kZWwuYXN0ZXJvaWQucG9zaXRpb24ueSA9IC0xMDtcclxuICB9XHJcbiAgaWYgKG1vZGVsLmFzdGVyb2lkLnBvc2l0aW9uLnkgPCAtMjUpIHtcclxuICAgIFBoeXNpY3MuZW50aXRpZXNbMV0ucG9zaXRpb24ueSA9IHNjcmVlbkhlaWdodDtcclxuICAgIG1vZGVsLmFzdGVyb2lkLnBvc2l0aW9uLnkgPSBzY3JlZW5IZWlnaHQ7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLy9HYW1lIExvb3BcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxubGV0IHN0YXJ0aW1lOiBudW1iZXIsIGxhc3R0aW1lOiBudW1iZXI7XHJcblxyXG5jb25zdCBnYW1lX2xvb3AgPSAodGltZXN0YW1wOiBudW1iZXIpID0+IHtcclxuICBpZiAoc3RhcnRpbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBzdGFydGltZSA9IHRpbWVzdGFtcDtcclxuICAgIGxhc3R0aW1lID0gdGltZXN0YW1wO1xyXG4gIH1cclxuICBsZXQgZGVsdGFUaW1lID0gKHRpbWVzdGFtcCAtIGxhc3R0aW1lKSAvIDEwMDA7XHJcbiAgaWYgKGRlbHRhVGltZSA+IDEuNSkge1xyXG4gICAgZGVsdGFUaW1lID0gMDtcclxuICAgIGxhc3R0aW1lID0gdGltZXN0YW1wO1xyXG4gIH1cclxuXHJcbiAgLy9jaGVjayBpbnB1dHNcclxuICBpZiAoSW5wdXQuaXMoXCJ0aHJ1c3RcIikpIHRocnVzdCgpO1xyXG4gIGlmIChJbnB1dC5pcyhcInJldmVyc2VcIikpIHJldmVyc2UoKTtcclxuICBpZiAoSW5wdXQuaXMoXCJ0dXJuTFwiKSkgdHVybkxlZnQoKTtcclxuICBpZiAoSW5wdXQuaXMoXCJ0dXJuUlwiKSkgdHVyblJpZ2h0KCk7XHJcblxyXG4gIFBoeXNpY3MudXBkYXRlKGRlbHRhVGltZSwgdGltZXN0YW1wKTtcclxuICBtb2RlbC5wbGF5ZXIucG9zaXRpb24gPSBQaHlzaWNzLmVudGl0aWVzWzBdLnBvc2l0aW9uO1xyXG4gIG1vZGVsLnBsYXllci5hbmdsZSA9IFBoeXNpY3MuZW50aXRpZXNbMF0ub3JpZW50YXRpb247XHJcbiAgbW9kZWwuYXN0ZXJvaWQucG9zaXRpb24gPSBQaHlzaWNzLmVudGl0aWVzWzFdLnBvc2l0aW9uO1xyXG5cclxuICBwbGF5ZXJTY3JlZW5Db2xsaXNpb24oKTtcclxuICBhc3Rlcm9pZFNjcmVlbkNvbGxpc2lvbigpO1xyXG5cclxuICBVSS51cGRhdGUoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZV9sb29wKTtcclxuICBsYXN0dGltZSA9IHRpbWVzdGFtcDtcclxufTtcclxuXHJcbnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lX2xvb3ApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=