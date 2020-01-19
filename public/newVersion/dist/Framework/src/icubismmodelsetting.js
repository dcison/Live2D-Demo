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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/icubismmodelsetting.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/icubismmodelsetting.ts":
/*!******************************************!*\
  !*** ./Framework/icubismmodelsetting.ts ***!
  \******************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モデル設定情報を取り扱う関数を宣言した純粋仮想クラス。
     *
     * このクラスを継承することで、モデル設定情報を取り扱うクラスになる。
     */
    var ICubismModelSetting = /** @class */ (function () {
        function ICubismModelSetting() {
        }
        return ICubismModelSetting;
    }());
    Live2DCubismFramework.ICubismModelSetting = ICubismModelSetting;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2ljdWJpc21tb2RlbHNldHRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFPSSxJQUFVLHFCQUFxQixDQW9MckM7QUFwTEQsV0FBaUIscUJBQXFCO0lBRWxDOzs7O09BSUc7SUFDSDtRQUFBO1FBNEtBLENBQUM7UUFBRCwwQkFBQztJQUFELENBQUM7SUE1S3FCLHlDQUFtQixzQkE0S3hDO0FBQ0wsQ0FBQyxFQXBMZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQW9MckMiLCJmaWxlIjoiL2ljdWJpc21tb2RlbHNldHRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9pY3ViaXNtbW9kZWxzZXR0aW5nLnRzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWR9IGZyb20gJy4vaWQvY3ViaXNtaWQnO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtbWFwfSBmcm9tICcuL3R5cGUvY3NtbWFwJztcbmltcG9ydCBjc21NYXAgPSBjc21tYXAuY3NtTWFwO1xuaW1wb3J0IEN1YmlzbUlkSGFuZGxlID0gY3ViaXNtaWQuQ3ViaXNtSWRIYW5kbGU7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44Oi44OH44Or6Kit5a6a5oOF5aCx44KS5Y+W44KK5omx44GG6Zai5pWw44KS5a6j6KiA44GX44Gf57SU57KL5Luu5oOz44Kv44Op44K544CCXG4gICAgICpcbiAgICAgKiDjgZPjga7jgq/jg6njgrnjgpLntpnmib/jgZnjgovjgZPjgajjgafjgIHjg6Ljg4fjg6voqK3lrprmg4XloLHjgpLlj5bjgormibHjgYbjgq/jg6njgrnjgavjgarjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgSUN1YmlzbU1vZGVsU2V0dGluZ1xuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vY+ODleOCoeOCpOODq+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIE1vY+ODleOCoeOCpOODq+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldE1vZGVsRmlsZU5hbWUoKTogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjgYzkvb/nlKjjgZnjgovjg4bjgq/jgrnjg4Hjg6Pjga7mlbDjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICog44OG44Kv44K544OB44Oj44Gu5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0VGV4dHVyZUNvdW50KCk6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog44OG44Kv44K544OB44Oj44GM6YWN572u44GV44KM44Gf44OH44Kj44Os44Kv44OI44Oq44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44OG44Kv44K544OB44Oj44GM6YWN572u44GV44KM44Gf44OH44Kj44Os44Kv44OI44Oq44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0VGV4dHVyZURpcmVjdG9yeSgpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OBjOS9v+eUqOOBmeOCi+ODhuOCr+OCueODgeODo+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44OG44Kv44K544OB44Oj44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0VGV4dHVyZUZpbGVOYW1lKGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OBq+ioreWumuOBleOCjOOBn+W9k+OBn+OCiuWIpOWumuOBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODouODh+ODq+OBq+ioreWumuOBleOCjOOBn+W9k+OBn+OCiuWIpOWumuOBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldEhpdEFyZWFzQ291bnQoKTogbnVtYmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvZPjgZ/jgorliKTlrprjgavoqK3lrprjgZXjgozjgZ9JROOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44GuaW5kZXhcbiAgICAgICAgICogQHJldHVybiDlvZPjgZ/jgorliKTlrprjgavoqK3lrprjgZXjgozjgZ9JRFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldEhpdEFyZWFJZChpbmRleDogbnVtYmVyKTogQ3ViaXNtSWRIYW5kbGU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW9k+OBn+OCiuWIpOWumuOBq+ioreWumuOBleOCjOOBn+WQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g5b2T44Gf44KK5Yik5a6a44Gr6Kit5a6a44GV44KM44Gf5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0SGl0QXJlYU5hbWUoaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog54mp55CG5ryU566X6Kit5a6a44OV44Kh44Kk44Or44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g54mp55CG5ryU566X6Kit5a6a44OV44Kh44Kk44Or44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGh5c2ljc0ZpbGVOYW1lKCk6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844OE5YiH44KK5pu/44GI6Kit5a6a44OV44Kh44Kk44Or44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44OR44O844OE5YiH44KK5pu/44GI6Kit5a6a44OV44Kh44Kk44Or44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0UG9zZUZpbGVOYW1lKCk6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGo5oOF6Kit5a6a44OV44Kh44Kk44Or44Gu5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g6KGo5oOF6Kit5a6a44OV44Kh44Kk44Or44Gu5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0RXhwcmVzc2lvbkNvdW50KCk6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGo5oOF6Kit5a6a44OV44Kh44Kk44Or44KS6K2Y5Yil44GZ44KL5ZCN5YmN77yI5Yil5ZCN77yJ44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiDooajmg4Xjga7lkI3liY1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRFeHByZXNzaW9uTmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDooajmg4XoqK3lrprjg5XjgqHjgqTjg6vjga7lkI3liY3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOihqOaDheioreWumuODleOCoeOCpOODq+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldEV4cHJlc3Npb25GaWxlTmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7mlbDjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7mlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRNb3Rpb25Hcm91cENvdW50KCk6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7lkI3liY1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRNb3Rpb25Hcm91cE5hbWUoaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44O844K344On44Oz44Kw44Or44O844OX44Gr5ZCr44G+44KM44KL44Oi44O844K344On44Oz44Gu5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBncm91cE5hbWUg44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5ZCN5YmNXG4gICAgICAgICAqIEByZXR1cm4g44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW90aW9uQ291bnQoZ3JvdXBOYW1lOiBzdHJpbmcpOiBudW1iZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCsOODq+ODvOODl+WQjeOBqOOCpOODs+ODh+ODg+OCr+OCueWApOOBi+OCieODouODvOOCt+ODp+ODs+ODleOCoeOCpOODq+WQjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBOYW1lIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjVxuICAgICAgICAgKiBAcGFyYW0gaW5kZXggICAgIOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+ODleOCoeOCpOODq+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldE1vdGlvbkZpbGVOYW1lKGdyb3VwTmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjgavlr77lv5zjgZnjgovjgrXjgqbjg7Pjg4njg5XjgqHjgqTjg6vjga7lkI3liY3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGdyb3VwTmFtZSDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7lkI3liY1cbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOOCteOCpuODs+ODieODleOCoeOCpOODq+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldE1vdGlvblNvdW5kRmlsZU5hbWUoZ3JvdXBOYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+mWi+Wni+aZguOBruODleOCp+ODvOODieOCpOODs+WHpueQhuaZgumWk+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBOYW1lIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjVxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44OV44Kn44O844OJ44Kk44Oz5Yem55CG5pmC6ZaTW+enkl1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRNb3Rpb25GYWRlSW5UaW1lVmFsdWUoZ3JvdXBOYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBudW1iZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+e1guS6huaZguOBruODleOCp+ODvOODieOCouOCpuODiOWHpueQhuaZgumWk+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBOYW1lIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjVxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44OV44Kn44O844OJ44Ki44Km44OI5Yem55CG5pmC6ZaTW+enkl1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRNb3Rpb25GYWRlT3V0VGltZVZhbHVlKGdyb3VwTmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogbnVtYmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6bjg7zjgrbjg7zjg4fjg7zjgr/jga7jg5XjgqHjgqTjg6vlkI3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDjg6bjg7zjgrbjg7zjg4fjg7zjgr/jga7jg5XjgqHjgqTjg6vlkI1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRVc2VyRGF0YUZpbGUoKTogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjgqTjgqLjgqbjg4jmg4XloLHjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIG91dExheW91dE1hcCBjc21NYXDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICogQHJldHVybiB0cnVlIOODrOOCpOOCouOCpuODiOaDheWgseOBjOWtmOWcqOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOODrOOCpOOCouOCpuODiOaDheWgseOBjOWtmOWcqOOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldExheW91dE1hcChvdXRMYXlvdXRNYXA6IGNzbU1hcDxzdHJpbmcsIG51bWJlcj4pOiBib29sZWFuO1xuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOebruODkeODgeOBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOebruODkeODgeOBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldEV5ZUJsaW5rUGFyYW1ldGVyQ291bnQoKTogbnVtYmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnm67jg5Hjg4HjgavplqLpgKPku5jjgZHjgonjgozjgZ/jg5Hjg6njg6Hjg7zjgr/jga5JROOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44OR44Op44Oh44O844K/SURcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRFeWVCbGlua1BhcmFtZXRlcklkKGluZGV4OiBudW1iZXIpOiBDdWJpc21JZEhhbmRsZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oq44OD44OX44K344Oz44Kv44Gr6Zai6YCj5LuY44GR44KJ44KM44Gf44OR44Op44Oh44O844K/44Gu5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44Oq44OD44OX44K344Oz44Kv44Gr6Zai6YCj5LuY44GR44KJ44KM44Gf44OR44Op44Oh44O844K/44Gu5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TGlwU3luY1BhcmFtZXRlckNvdW50KCk6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oq44OD44OX44K344Oz44Kv44Gr6Zai6YCj5LuY44GR44KJ44KM44Gf44OR44Op44Oh44O844K/44Gu5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiDjg5Hjg6njg6Hjg7zjgr9JRFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldExpcFN5bmNQYXJhbWV0ZXJJZChpbmRleDogbnVtYmVyKTogQ3ViaXNtSWRIYW5kbGU7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==