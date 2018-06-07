/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./inputFormer.js":
/*!************************!*\
  !*** ./inputFormer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getInput() {\r\n    var result = [];\r\n    var length = input.value.length;\r\n    var lastSymbol = input.value[length - 1];\r\n    if (!Number.isInteger(+lastSymbol) || lastSymbol == \" \")\r\n        input.value = input.value.substring(0, length - 1);\r\n    for (var i = 0; i < input.value.length; i++)\r\n        result.push(input.value[i]);\r\n    return result;\r\n}\r\n\r\nmodule.exports = getInput;\n\n//# sourceURL=webpack:///./inputFormer.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar getInput = __webpack_require__(/*! ./inputFormer */ \"./inputFormer.js\");\r\nvar Sorter = __webpack_require__(/*! ./sorter */ \"./sorter.js\");\r\nvar Visualizer = __webpack_require__(/*! ./visualizer */ \"./visualizer.js\");\r\n\r\nvar sorter;\r\nvisualizer = new Visualizer();\r\n\r\ninput.oninput = function() {\r\n    var array = getInput();\r\n    sorter = new Sorter(array)\r\n    visualizer.createNodes(array);\r\n}\r\n\r\nnext.onclick = function() {\r\n    if (sorter) {\r\n        var i = sorter.next();\r\n        if (i != undefined)\r\n            visualizer.swap(i);\r\n    }\r\n}\r\n\r\nprev.onclick = function() {\r\n    if (sorter) {\r\n        var i = sorter.prev();\r\n        if (i != undefined)\r\n            visualizer.swap(i);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./sorter.js":
/*!*******************!*\
  !*** ./sorter.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Sorter(array) {\r\n    this.array = array;\r\n    var stack = [];\r\n    stack.i = [];\r\n    stack.j = [];\r\n    var i = 0;\r\n    var j = 1;\r\n    this.next = function() {\r\n        var length = array.length;\r\n        if (length - i >= 0) {\r\n            while (array[j] >= array[j - 1] && i < length) {\r\n                j++;\r\n                if (j == length && i < length) {\r\n                    j = 1;\r\n                    i++;\r\n                }\r\n            }\r\n            if (array[j] < array[j - 1]) {\r\n                stack.push(array.slice());\r\n                stack.i.push(i);\r\n                stack.j.push(j);\r\n                var temp = array[j];\r\n                array[j] = array[j - 1];\r\n                array[j - 1] = temp;\r\n                return j;\r\n            }\r\n        }\r\n    }\r\n    this.prev = function() {\r\n        if (stack.length != 0) {\r\n            this.array = array = stack.pop();\r\n            i = stack.i.pop();\r\n            j = stack.j.pop();\r\n            return j;\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Sorter;\n\n//# sourceURL=webpack:///./sorter.js?");

/***/ }),

/***/ "./visualizer.js":
/*!***********************!*\
  !*** ./visualizer.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Visualizer() {\r\n    var div = document.getElementsByClassName('list')[0];\r\n    var positionsList = [];\r\n    var index = 0;\r\n    this.createNodes = function(array) {\r\n        var children = document.getElementsByClassName('array');\r\n        if (array.length == 0 || array.length == 1 && array.length + 1 < children.length) {\r\n            while (div.hasChildNodes()) {\r\n                div.removeChild(children[0]);\r\n            }\r\n            index = 0;\r\n            positionsList = [];\r\n        } else if (array.length > children.length) {\r\n            positionsList.push(index * 17 + 10);\r\n            var span = document.createElement('span');\r\n            span.className = 'array';\r\n            span.style.backgroundColor = 'rgb(255, 0, 0, 0.9)';\r\n            span.id = index;\r\n            span.style.left = positionsList[index] + 'px';\r\n            span.style.height = (array[index] + 1) * 2 + 23 + 'px';\r\n            span.innerHTML = array[index];\r\n            div.appendChild(span);\r\n            setTimeout(function() {\r\n                span.style.backgroundColor = 'rgb(0, 0, 255, 0.2)'\r\n            }, 10);\r\n            index++;\r\n        } else if (array.length < children.length) {\r\n            div.removeChild(children[--index]);\r\n            positionsList.pop();\r\n        }\r\n    }\r\n    this.swap = function(i) {\r\n        var spans = document.getElementsByClassName('array');\r\n        var span1 = document.getElementById(i);\r\n        var span2 = document.getElementById(i - 1);\r\n        span1.style.backgroundColor = span2.style.backgroundColor = 'rgb(255, 0, 0, 0.9)';\r\n        setTimeout(function() {\r\n            span1.style.backgroundColor = span2.style.backgroundColor = 'rgb(0, 0, 255, 0.2)'\r\n        }, 700);\r\n        span1.style.left = positionsList[i - 1];\r\n        span2.style.left = positionsList[i];\r\n        var tempId = span1.id;\r\n        span1.id = span2.id;\r\n        span2.id = tempId;\r\n    }\r\n}\r\n\r\nmodule.exports = Visualizer;\n\n//# sourceURL=webpack:///./visualizer.js?");

/***/ })

/******/ });