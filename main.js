/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://file/./src/css/style.scss?");

/***/ }),

/***/ "./js/content.ts":
/*!***********************!*\
  !*** ./js/content.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Body: () => (/* binding */ Body),\n/* harmony export */   Switch: () => (/* binding */ Switch),\n/* harmony export */   Time: () => (/* binding */ Time),\n/* harmony export */   arrImg: () => (/* binding */ arrImg),\n/* harmony export */   hours: () => (/* binding */ hours),\n/* harmony export */   minutes: () => (/* binding */ minutes),\n/* harmony export */   p: () => (/* binding */ p),\n/* harmony export */   routingArray: () => (/* binding */ routingArray),\n/* harmony export */   seconds: () => (/* binding */ seconds),\n/* harmony export */   show: () => (/* binding */ show),\n/* harmony export */   showWork: () => (/* binding */ showWork),\n/* harmony export */   sp1: () => (/* binding */ sp1),\n/* harmony export */   sp2: () => (/* binding */ sp2),\n/* harmony export */   sp3: () => (/* binding */ sp3),\n/* harmony export */   sp4: () => (/* binding */ sp4),\n/* harmony export */   sp5: () => (/* binding */ sp5),\n/* harmony export */   week: () => (/* binding */ week)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nvar _a, _b;\nvar array = [\n    \"https://ks.wjx.top/vm/hnjIsNz.aspx# \", //1\n    \"https://ks.wjx.top/vm/eIITPhl.aspx# \", //2\n    \"https://ks.wjx.top/vm/exHnT97.aspx# \", //3\n    \"https://ks.wjx.top/vm/wF3N1zT.aspx# \", //4\n    \"https://ks.wjx.top/vm/rLVDHfG.aspx# \", //5\n    \"https://ks.wjx.top/vm/rXmTGED.aspx# \", //6\n    \"https://ks.wjx.top/vm/eq3Tqhf.aspx# \", //7\n    \"https://ks.wjx.top/vm/Y3piBsx.aspx# \", //8\n    \"https://ks.wjx.top/vm/Y0yB0Qv.aspx# \", //9\n    \"https://ks.wjx.top/vm/ewnNdT7.aspx#\", //10\n    \"https://ks.wjx.top/vm/Q0HSi8d.aspx#\", //11\n    \"https://ks.wjx.top/vm/eqT78FF.aspx#\", //12\n    \"https://ks.wjx.top/vm/ey3BKTQ.aspx#\", //13\n    \"https://ks.wjx.top/vm/OtUcsUF.aspx#\", //14\n    \"https://ks.wjx.top/vm/YatDBuV.aspx#\", //15\n    \"https://ks.wjx.top/vm/OvLNGfc.aspx#\", //16\n    \"https://ks.wjx.top/vm/ek82d8T.aspx#\", //17\n    \"https://ks.wjx.top/vm/tGejJy4.aspx#\", //18\n    \"https://ks.wjx.top/vm/OtU70Yc.aspx#\", //19\n    \"https://ks.wjx.top/vm/eSTraTV.aspx#\", //20\n];\nvar additionalArr = [\n    {\n        path: 'https://ks.wjx.top/vm/hxweI3Y.aspx#',\n        title: '1-5'\n    },\n    {\n        path: 'https://ks.wjx.top/vm/ww1N7Kp.aspx#',\n        title: '6-10'\n    },\n    {\n        path: 'https://ks.wjx.top/vm/rXRb4DM.aspx#',\n        title: '11-15'\n    },\n    {\n        path: 'https://ks.wjx.top/vm/wMLN7Ud.aspx#',\n        title: '16-19'\n    }\n];\nvar imgArray = array.map(function (item, index) {\n    return {\n        path: item,\n        title: \"\".concat(index + 1)\n    };\n});\nvar routingArray = __spreadArray(__spreadArray([], imgArray, true), additionalArr, true);\nvar arrImg = [\n    \"bgimg1.jpg\", \"bgimg2.jpg\", \"bgimg3.jpg\", \"bgimg4.jpg\", \"bgimg5.jpg\",\n    \"bgimg6.jpg\", \"bgimg7.jpg\", \"bgimg8.jpg\", \"bgimg9.jpg\", \"bgimg10.jpg\",\n];\nvar Time = document.querySelector('.Time');\nvar p = Time === null || Time === void 0 ? void 0 : Time.children[0];\nvar week = [\n    \"日\", \"一\", \"二\", \"三\", \"四\", \"五\", \"六\"\n];\nvar sp1 = (_a = __spreadArray([], p.children, true), _a[0]), sp2 = _a[1], sp3 = _a[2], sp4 = _a[3], sp5 = _a[4];\nvar hoursMinutesSeconds = sp4.children;\nvar hours = (_b = __spreadArray([], hoursMinutesSeconds, true), _b[0]), minutes = _b[1], seconds = _b[2];\nvar Switch = document.querySelector('.switch');\nvar Body = document.body;\nvar show = document.querySelector('.show');\nvar showWork = document.querySelector('.show-work');\n\n\n//# sourceURL=webpack://file/./js/content.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.ts\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _js_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/content */ \"./js/content.ts\");\n// import TheData from '../utils/fun'; //* 功能文件\n// noinspection SpellCheckingInspection\n //* 页面渲染类\n //* 样式文件\n\nvar eContent = window.document.querySelector('.Econtent');\nvar renderPage = new _modules_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    week: _js_content__WEBPACK_IMPORTED_MODULE_2__.week,\n    Time: _js_content__WEBPACK_IMPORTED_MODULE_2__.Time,\n    p: _js_content__WEBPACK_IMPORTED_MODULE_2__.p,\n    eContent: eContent,\n    routingArray: _js_content__WEBPACK_IMPORTED_MODULE_2__.routingArray,\n    sp1: _js_content__WEBPACK_IMPORTED_MODULE_2__.sp1,\n    sp2: _js_content__WEBPACK_IMPORTED_MODULE_2__.sp2,\n    sp3: _js_content__WEBPACK_IMPORTED_MODULE_2__.sp3,\n    sp4: _js_content__WEBPACK_IMPORTED_MODULE_2__.sp4,\n    sp5: _js_content__WEBPACK_IMPORTED_MODULE_2__.sp5,\n    hours: _js_content__WEBPACK_IMPORTED_MODULE_2__.hours,\n    minutes: _js_content__WEBPACK_IMPORTED_MODULE_2__.minutes,\n    seconds: _js_content__WEBPACK_IMPORTED_MODULE_2__.seconds,\n    Switch: _js_content__WEBPACK_IMPORTED_MODULE_2__.Switch,\n    Body: _js_content__WEBPACK_IMPORTED_MODULE_2__.Body,\n    show: _js_content__WEBPACK_IMPORTED_MODULE_2__.show,\n    arrImg: _js_content__WEBPACK_IMPORTED_MODULE_2__.arrImg,\n    showWork: _js_content__WEBPACK_IMPORTED_MODULE_2__.showWork\n});\n\n\n//# sourceURL=webpack://file/./src/index.ts?");

/***/ }),

/***/ "./src/modules/render.ts":
/*!*******************************!*\
  !*** ./src/modules/render.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nvar ClassFun = /** @class */ (function () {\n    function ClassFun(obj) {\n        var _this = this;\n        this.arrImg = [];\n        this.routingArray = [\n            {\n                path: '',\n                title: ''\n            }\n        ];\n        this.timer = setInterval(function () {\n            _this.timeFunction();\n        }, 1000);\n        this.randomBackground = function () {\n            //* 背景图刷新\n            var num = _this.randomNumberFunction(9, 0);\n            var imgC = __spreadArray([], _this[\"show\"].children, true);\n            var ac = _this.show.querySelector(\".imgAc\");\n            ac.classList.remove(\"imgAc\");\n            imgC[num].classList.add(\"imgAc\");\n        };\n        Object.assign(this, obj);\n        this.week = obj.week;\n        this.Time = obj.Time;\n        this.p = obj.p;\n        this.eContent = obj.eContent;\n        this.sp1 = obj.sp1;\n        this.sp2 = obj.sp2;\n        this.sp3 = obj.sp3;\n        this.sp4 = obj.sp4;\n        this.sp5 = obj.sp5;\n        this.hours = obj.hours;\n        this.minutes = obj.minutes;\n        this.seconds = obj.seconds;\n        this.Switch = obj.Switch;\n        this.Body = obj.Body;\n        this.show = obj.show;\n        this.start();\n    }\n    /**\n     *\n     *  初始化实例\n     *\n     * */\n    ClassFun.prototype.start = function () {\n        this.render();\n        this.timeFunction();\n        this.changeClassName();\n    };\n    /**\n     *  @param {number} max 随机数上限\n     *  @param  {number} min 随机数下限\n     *\n     *  @return {number} 随机数\n     * */\n    ClassFun.prototype.randomNumberFunction = function (max, min) {\n        //* 随机数函数\n        return Math.floor(Math.random() * (max + 1 - min)) + min;\n    };\n    ClassFun.prototype.zero = function (item) {\n        //* 取零 功能函数\n        var nStr = String(item);\n        nStr.padStart(2, '0');\n        return nStr;\n    };\n    /**\n     *\n     * @param {Object} options 渲染器配置项\n     * @private\n     * @return {HTMLElement} 返回一个html元素\n     */\n    ClassFun.prototype.createElement = function (options) {\n        var _this = this;\n        options.tag = options.tag.toUpperCase();\n        var node = document.createElement(options.tag);\n        //* 标准根元素\n        for (var i in options) {\n            if (Object.hasOwnProperty.call(options, i)) {\n                switch (i) {\n                    case 'class':\n                        for (var classKey in options.class) {\n                            if (Object.hasOwnProperty.call(options.class, classKey)) {\n                                var classItem = options.class[classKey];\n                                classItem && node.classList.add(classKey);\n                            }\n                        }\n                        break;\n                    case 'text':\n                        var text = document.createTextNode(options.text);\n                        node.appendChild(text);\n                        break;\n                    case 'children':\n                        options.children.forEach(function (item, index) {\n                            var nodeItem = _this.createElement(item);\n                            node.appendChild(nodeItem);\n                        });\n                        break;\n                    case 'on':\n                        for (var eventKey in options.on) {\n                            if (Object.hasOwnProperty.call(options.on, eventKey)) {\n                                var eventItem = options.on[eventKey];\n                                node.addEventListener(eventKey, eventItem, false);\n                            }\n                        }\n                        break;\n                    default:\n                        break;\n                }\n            }\n        }\n        return node;\n    };\n    ClassFun.prototype.render = function () {\n        var _this = this;\n        //* 渲染至页面\n        this.routingArray.forEach(function (item, index) {\n            var describe = {\n                tag: 'div',\n                on: {\n                    click: function (e) {\n                        window.open(item.path, '_blank');\n                    }\n                },\n                children: [\n                    {\n                        tag: 'div',\n                        class: {\n                            'jump-project': true\n                        },\n                        text: \" \\u7B2C\".concat(item.title, \"\\u5355\\u5143\\u7406\\u8BBA\")\n                    }\n                ]\n            };\n            _this.eContent.appendChild(_this.createElement(describe));\n        });\n        var _a = this.timeFun(), week = _a.week, month = _a.month, date = _a.date, year = _a.year;\n        this.sp1.innerHTML = year + \"年\";\n        this.sp2.innerHTML = (month + 1) + \"月\";\n        this.sp3.innerHTML = date + \"日\";\n        this.sp5.innerHTML = \"星期\" + this.week[week];\n        var tt = this.randomNumberFunction(this.arrImg.length, 0);\n        this.week.forEach(function (item, index) {\n            console.log('this.showWork', _this.timeFun().week);\n            // console.log(item);\n            var describe = {\n                tag: 'div',\n                on: {\n                    click: function (e) {\n                        console.log(1123);\n                    }\n                },\n                class: {\n                    'week-item': true,\n                    'week-item-ac': index === _this.timeFun().week\n                },\n                children: [\n                    {\n                        tag: 'div',\n                        text: \" \\u661F\\u671F\".concat(item, \" \"),\n                    }\n                ]\n            };\n            _this.showWork.appendChild(_this.createElement(describe));\n        });\n        this.arrImg.forEach(function (item, index) {\n            var newNode = document.createElement('DIV');\n            if (index === tt - 1) {\n                newNode.classList.add(\"imgAc\");\n            }\n            _this.show.appendChild(newNode);\n        });\n    };\n    ClassFun.prototype.timeFunction = function () {\n        //* 初始化时间\n        var _a = this.timeFun(), hour = _a.hour, minute = _a.minute, second = _a.second;\n        this.hours.innerHTML = this.zero(hour) + '';\n        this.minutes.innerHTML = this.zero(minute) + '';\n        this.seconds.innerHTML = this.zero(second) + '';\n    };\n    ClassFun.prototype.timeFun = function () {\n        //* 时间格式化\n        var now = new Date();\n        return {\n            year: now.getFullYear(),\n            month: now.getMonth(),\n            date: now.getDate(),\n            week: now.getDay(),\n            hour: now.getHours(),\n            minute: now.getMinutes(),\n            second: now.getSeconds()\n        };\n    };\n    ClassFun.prototype.changeClassName = function () {\n        var _this = this;\n        this.Switch.addEventListener('click', function (e) {\n            var item = e.target;\n            _this.randomBackground();\n        }, true);\n    };\n    return ClassFun;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassFun);\n\n\n//# sourceURL=webpack://file/./src/modules/render.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;