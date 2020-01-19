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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/utils/cubismstring.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/utils/cubismstring.ts":
/*!*****************************************!*\
  !*** ./Framework/utils/cubismstring.ts ***!
  \*****************************************/
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
    var CubismString = /** @class */ (function () {
        /**
         * コンストラクタ呼び出し不可な静的クラスにする。
         */
        function CubismString() {
        }
        /**
         * 標準出力の書式を適用した文字列を取得する。
         * @param format    標準出力の書式指定文字列
         * @param ...args   書式指定文字列に渡す文字列
         * @return 書式を適用した文字列
         */
        CubismString.getFormatedString = function (format) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var ret = format;
            return ret.replace(/\{(\d+)\}/g, function (m, k) {
                return args[k];
            });
        };
        /**
         * textがstartWordで始まっているかどうかを返す
         * @param test 検査対象の文字列
         * @param startWord 比較対象の文字列
         * @return true textがstartWordで始まっている
         * @return false textがstartWordで始まっていない
         */
        CubismString.isStartWith = function (text, startWord) {
            var textIndex = 0;
            var startWordIndex = 0;
            while (startWord[startWordIndex] != '\0') {
                if (text[textIndex] == '\0' || text[textIndex++] != startWord[startWordIndex++]) {
                    return false;
                }
            }
            return false;
        };
        /**
         * position位置の文字から数字を解析する。
         *
         * @param string 文字列
         * @param length 文字列の長さ
         * @param position 解析したい文字の位置
         * @param outEndPos 一文字も読み込まなかった場合はエラー値(-1)が入る
         * @return 解析結果の数値
         */
        CubismString.stringToFloat = function (string, length, position, outEndPos) {
            var i = position;
            var minus = false; // マイナスフラグ
            var period = false;
            var v1 = 0;
            //負号の確認
            var c = parseInt(string[i]);
            if (c < 0) {
                minus = true;
                i++;
            }
            //整数部の確認
            for (; i < length; i++) {
                var c_1 = string[i];
                if (0 <= parseInt(c_1) && parseInt(c_1) <= 9) {
                    v1 = v1 * 10 + (parseInt(c_1) - 0);
                }
                else if (c_1 == '.') {
                    period = true;
                    i++;
                    break;
                }
                else {
                    break;
                }
            }
            //小数部の確認
            if (period) {
                var mul = 0.1;
                for (; i < length; i++) {
                    c = parseFloat(string[i]) & 0xFF;
                    if (0 <= c && c <= 9) {
                        v1 += mul * (c - 0);
                    }
                    else {
                        break;
                    }
                    mul *= 0.1; //一桁下げる
                    if (!c)
                        break;
                }
            }
            if (i == position) {
                //一文字も読み込まなかった場合
                outEndPos[0] = -1; //エラー値が入るので呼び出し元で適切な処理を行う
                return 0;
            }
            if (minus)
                v1 = -v1;
            outEndPos[0] = i;
            return v1;
        };
        return CubismString;
    }());
    Live2DCubismFramework.CubismString = CubismString;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3V0aWxzL2N1YmlzbXN0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVJLElBQVUscUJBQXFCLENBZ0lyQztBQWhJRCxXQUFpQixxQkFBcUI7SUFFbEM7UUFzSEk7O1dBRUc7UUFDSDtRQUdBLENBQUM7UUExSEQ7Ozs7O1dBS0c7UUFDVyw4QkFBaUIsR0FBL0IsVUFBZ0MsTUFBYztZQUFFLGNBQWU7aUJBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtnQkFBZiw2QkFBZTs7WUFFM0QsSUFBSSxHQUFHLEdBQVcsTUFBTSxDQUFDO1lBQ3pCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FDZCxZQUFZLEVBQ1osVUFBQyxDQUFDLEVB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QUFDO1FBQ2QsQ0FBQztRQVNMLG1CQUFDO0lBQUQsQ0FBQztJQTdIWSxrQ0FBWSxlQTZIeEI7QUFDTCxDQUFDLEVBaElnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBZ0lyQyIsImZpbGUiOiIvdXRpbHMvY3ViaXNtc3RyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9GcmFtZXdvcmsvdXRpbHMvY3ViaXNtc3RyaW5nLnRzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtU3RyaW5nXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog5qiZ5rqW5Ye65Yqb44Gu5pu45byP44KS6YGp55So44GX44Gf5paH5a2X5YiX44KS5Y+W5b6X44GZ44KL44CCXG4gICAgICAgICAqIEBwYXJhbSBmb3JtYXQgICAg5qiZ5rqW5Ye65Yqb44Gu5pu45byP5oyH5a6a5paH5a2X5YiXXG4gICAgICAgICAqIEBwYXJhbSAuLi5hcmdzICAg5pu45byP5oyH5a6a5paH5a2X5YiX44Gr5rih44GZ5paH5a2X5YiXXG4gICAgICAgICAqIEByZXR1cm4g5pu45byP44KS6YGp55So44GX44Gf5paH5a2X5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEZvcm1hdGVkU3RyaW5nKGZvcm1hdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJldDogc3RyaW5nID0gZm9ybWF0O1xuICAgICAgICAgICAgcmV0dXJuIHJldC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIC9cXHsoXFxkKylcXH0vZyxcbiAgICAgICAgICAgICAgICAobSwgaykgPT4gICAvLyBtPVwiezB9XCIsIGs9XCIwXCJcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmdzW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogdGV4dOOBjHN0YXJ0V29yZOOBp+Wni+OBvuOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkui/lOOBmVxuICAgICAgICAgKiBAcGFyYW0gdGVzdCDmpJzmn7vlr77osaHjga7mloflrZfliJdcbiAgICAgICAgICogQHBhcmFtIHN0YXJ0V29yZCDmr5TovIPlr77osaHjga7mloflrZfliJdcbiAgICAgICAgICogQHJldHVybiB0cnVlIHRleHTjgYxzdGFydFdvcmTjgaflp4vjgb7jgaPjgabjgYTjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSB0ZXh044GMc3RhcnRXb3Jk44Gn5aeL44G+44Gj44Gm44GE44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGlzU3RhcnRXaXRoKHRleHQ6IHN0cmluZywgc3RhcnRXb3JkOiBzdHJpbmcpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB0ZXh0SW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IHN0YXJ0V29yZEluZGV4ID0gMDtcbiAgICAgICAgICAgIHdoaWxlKHN0YXJ0V29yZFtzdGFydFdvcmRJbmRleF0gIT0gJ1xcMCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGV4dFt0ZXh0SW5kZXhdID09ICdcXDAnIHx8IHRleHRbdGV4dEluZGV4KytdICE9IHN0YXJ0V29yZFtzdGFydFdvcmRJbmRleCsrXSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogcG9zaXRpb27kvY3nva7jga7mloflrZfjgYvjgonmlbDlrZfjgpLop6PmnpDjgZnjgovjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHN0cmluZyDmloflrZfliJdcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCDmloflrZfliJfjga7plbfjgZVcbiAgICAgICAgICogQHBhcmFtIHBvc2l0aW9uIOino+aekOOBl+OBn+OBhOaWh+Wtl+OBruS9jee9rlxuICAgICAgICAgKiBAcGFyYW0gb3V0RW5kUG9zIOS4gOaWh+Wtl+OCguiqreOBv+i+vOOBvuOBquOBi+OBo+OBn+WgtOWQiOOBr+OCqOODqeODvOWApCgtMSnjgYzlhaXjgotcbiAgICAgICAgICogQHJldHVybiDop6PmnpDntZDmnpzjga7mlbDlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nVG9GbG9hdChzdHJpbmc6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIHBvc2l0aW9uOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IG1pbnVzOiBib29sZWFuID0gZmFsc2U7IC8vIOODnuOCpOODiuOCueODleODqeOCsFxuICAgICAgICAgICAgbGV0IHBlcmlvZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHYxOiBudW1iZXIgPSAwO1xuXG4gICAgICAgICAgICAvL+iyoOWPt+OBrueiuuiqjVxuICAgICAgICAgICAgbGV0IGM6IG51bWJlciA9IHBhcnNlSW50KHN0cmluZ1tpXSk7XG4gICAgICAgICAgICBpZiAoYyA8IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWludXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/mlbTmlbDpg6jjga7norroqo1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSBzdHJpbmdbaV07XG4gICAgICAgICAgICAgICAgaWYgKDAgPD0gcGFyc2VJbnQoYykgJiYgcGFyc2VJbnQoYykgPD0gOSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHYxID0gdjEgKiAxMCArIChwYXJzZUludChjKSAtIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjID09ICcuJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/lsI/mlbDpg6jjga7norroqo1cbiAgICAgICAgICAgIGlmIChwZXJpb2QpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IG11bDogbnVtYmVyID0gMC4xO1xuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjID0gcGFyc2VGbG9hdChzdHJpbmdbaV0pICYgMHhGRjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgPD0gYyAmJiBjIDw9IDkpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYxICs9IG11bCAqIChjIC0gMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtdWwgKj0gMC4xOyAvL+S4gOahgeS4i+OBkuOCi1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWMpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGkgPT0gcG9zaXRpb24pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy/kuIDmloflrZfjgoLoqq3jgb/ovrzjgb7jgarjgYvjgaPjgZ/loLTlkIhcbiAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSAtMTsgLy/jgqjjg6njg7zlgKTjgYzlhaXjgovjga7jgaflkbzjgbPlh7rjgZflhYPjgafpganliIfjgarlh6bnkIbjgpLooYzjgYZcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1pbnVzKSB2MSA9IC12MTtcblxuICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaTtcbiAgICAgICAgICAgIHJldHVybiB2MTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr/lkbzjgbPlh7rjgZfkuI3lj6/jgarpnZnnmoTjgq/jg6njgrnjgavjgZnjgovjgIJcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=