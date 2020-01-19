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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/effect/cubismbreath.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/effect/cubismbreath.ts":
/*!******************************************!*\
  !*** ./Framework/effect/cubismbreath.ts ***!
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
     * 呼吸機能
     *
     * 呼吸機能を提供する。
     */
    var CubismBreath = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismBreath() {
            this._currentTime = 0.0;
        }
        /**
         * インスタンスの作成
         */
        CubismBreath.create = function () {
            return new CubismBreath();
        };
        /**
         * インスタンスの破棄
         * @param instance 対象のCubismBreath
         */
        CubismBreath.delete = function (instance) {
            if (instance != null) {
                instance = null;
            }
        };
        /**
         * 呼吸のパラメータの紐づけ
         * @param breathParameters 呼吸を紐づけたいパラメータのリスト
         */
        CubismBreath.prototype.setParameters = function (breathParameters) {
            this._breathParameters = breathParameters;
        };
        /**
         * 呼吸に紐づいているパラメータの取得
         * @return 呼吸に紐づいているパラメータのリスト
         */
        CubismBreath.prototype.getParameters = function () {
            return this._breathParameters;
        };
        /**
         * モデルのパラメータの更新
         * @param model 対象のモデル
         * @param deltaTimeSeconds デルタ時間[秒]
         */
        CubismBreath.prototype.updateParameters = function (model, deltaTimeSeconds) {
            this._currentTime += deltaTimeSeconds;
            var t = this._currentTime * 2.0 * 3.14159;
            for (var i = 0; i < this._breathParameters.getSize(); ++i) {
                var data = this._breathParameters.at(i);
                model.addParameterValueById(data.parameterId, data.offset + (data.peak * Math.sin(t / data.cycle)), data.weight);
            }
        };
        return CubismBreath;
    }());
    Live2DCubismFramework.CubismBreath = CubismBreath;
    /**
     * 呼吸のパラメータ情報
     */
    var BreathParameterData = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param parameterId   呼吸をひもづけるパラメータID
         * @param offset        呼吸を正弦波としたときの、波のオフセット
         * @param peak          呼吸を正弦波としたときの、波の高さ
         * @param cycle         呼吸を正弦波としたときの、波の周期
         * @param weight        パラメータへの重み
         */
        function BreathParameterData(parameterId, offset, peak, cycle, weight) {
            this.parameterId = (parameterId == undefined)
                ? null
                : parameterId;
            this.offset = (offset == undefined)
                ? 0.0
                : offset;
            this.peak = (peak == undefined)
                ? 0.0
                : peak;
            this.cycle = (cycle == undefined)
                ? 0.0
                : cycle;
            this.weight = (weight == undefined)
                ? 0.0
                : weight;
        }
        return BreathParameterData;
    }());
    Live2DCubismFramework.BreathParameterData = BreathParameterData;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2VmZmVjdC9jdWJpc21icmVhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFVSSxJQUFVLHFCQUFxQixDQTBIckM7QUExSEQsV0FBaUIscUJBQXFCO0lBRWxDOzs7O09BSUc7SUFDSDtRQWlFSTs7V0FFRztRQUNIO1lBRUksSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDNUIsQ0FBQztRQXBFRDs7V0FFRztRQUNXLG1CQUFNLEdBQXBCO1lBRUksT0FBTyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFFRDs7O1dBR0c7UUFDVyxtQkFBTSxHQUFwQixVQUFxQixRQUFzQjtZQUV2QyxJQUFHLFFBQVEsSUFBSSxJQUFJLEVBQ25CO2dCQUNJLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDbkI7UUFDTCxDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksb0NBQWEsR0FBcEIsVUFBcUIsZ0JBQWdEO1lBRWpFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QyxDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksb0NBQWEsR0FBcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHVDQUFnQixHQUF2QixVQUF3QixLQUFrQixFQUFFLGdCQUF3QjtZQUVoRSxJQUFJLENBQUMsWUFBWSxJQUFJLGdCQUFnQixDQUFDO1lBRXRDLElBQU0sQ0FBQyxHQUFXLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztZQUVwRCxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNoRTtnQkFDSSxJQUFJLElBQUksR0FBd0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFN0QsS0FBSyxDQUFDLHFCQUFxQixDQUN2QixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FDZCxDQUFDO2FBQ0w7UUFDTCxDQUFDO1FBYUwsbUJBQUM7SUFBRCxDQUFDO0lBM0VZLGtDQUFZLGVBMkV4QjtJQUVEOztPQUVHO0lBQ0g7UUFFSTs7Ozs7OztXQU9HO1FBQ0gsNkJBQVksV0FBNEIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEtBQWMsRUFBRSxNQUFlO1lBRXJHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDO2dCQUNyQyxDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO2dCQUMzQixDQUFDLENBQUMsR0FBRztnQkFDTCxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDO2dCQUN2QixDQUFDLENBQUMsR0FBRztnQkFDTCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxHQUFHO2dCQUNMLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxHQUFHO2dCQUNMLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQztRQU9MLDBCQUFDO0lBQUQsQ0FBQztJQWxDWSx5Q0FBbUIsc0JBa0MvQjtBQUNMLENBQUMsRUExSGdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUEwSHJDIiwiZmlsZSI6Ii9lZmZlY3QvY3ViaXNtYnJlYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9GcmFtZXdvcmsvZWZmZWN0L2N1YmlzbWJyZWF0aC50c1wiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSBcIi4uL3R5cGUvY3NtdmVjdG9yXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tb2RlbH0gZnJvbSBcIi4uL21vZGVsL2N1YmlzbW1vZGVsXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZH0gZnJvbSBcIi4uL2lkL2N1YmlzbWlkXCI7XG5pbXBvcnQgQ3ViaXNtSWRIYW5kbGUgPSBjdWJpc21pZC5DdWJpc21JZEhhbmRsZTtcbmltcG9ydCBDdWJpc21Nb2RlbCA9IGN1YmlzbW1vZGVsLkN1YmlzbU1vZGVsO1xuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XG5cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDlkbzlkLjmqZ/og71cbiAgICAgKlxuICAgICAqIOWRvOWQuOapn+iDveOCkuaPkOS+m+OBmeOCi+OAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21CcmVhdGhcbiAgICB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCpOODs+OCueOCv+ODs+OCueOBruS9nOaIkFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTogQ3ViaXNtQnJlYXRoXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3ViaXNtQnJlYXRoKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kk44Oz44K544K/44Oz44K544Gu56C05qOEXG4gICAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSDlr77osaHjga5DdWJpc21CcmVhdGhcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKGluc3RhbmNlOiBDdWJpc21CcmVhdGgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGluc3RhbmNlICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWRvOWQuOOBruODkeODqeODoeODvOOCv+OBrue0kOOBpeOBkVxuICAgICAgICAgKiBAcGFyYW0gYnJlYXRoUGFyYW1ldGVycyDlkbzlkLjjgpLntJDjgaXjgZHjgZ/jgYTjg5Hjg6njg6Hjg7zjgr/jga7jg6rjgrnjg4hcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRQYXJhbWV0ZXJzKGJyZWF0aFBhcmFtZXRlcnM6IGNzbVZlY3RvcjxCcmVhdGhQYXJhbWV0ZXJEYXRhPik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fYnJlYXRoUGFyYW1ldGVycyA9IGJyZWF0aFBhcmFtZXRlcnM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5ZG85ZC444Gr57SQ44Gl44GE44Gm44GE44KL44OR44Op44Oh44O844K/44Gu5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4g5ZG85ZC444Gr57SQ44Gl44GE44Gm44GE44KL44OR44Op44Oh44O844K/44Gu44Oq44K544OIXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UGFyYW1ldGVycygpOiBjc21WZWN0b3I8QnJlYXRoUGFyYW1ldGVyRGF0YT5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JyZWF0aFBhcmFtZXRlcnM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or44Gu44OR44Op44Oh44O844K/44Gu5pu05pawXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbCDlr77osaHjga7jg6Ljg4fjg6tcbiAgICAgICAgICogQHBhcmFtIGRlbHRhVGltZVNlY29uZHMg44OH44Or44K/5pmC6ZaTW+enkl1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB1cGRhdGVQYXJhbWV0ZXJzKG1vZGVsOiBDdWJpc21Nb2RlbCwgZGVsdGFUaW1lU2Vjb25kczogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZSArPSBkZWx0YVRpbWVTZWNvbmRzO1xuXG4gICAgICAgICAgICBjb25zdCB0OiBudW1iZXIgPSB0aGlzLl9jdXJyZW50VGltZSAqIDIuMCAqIDMuMTQxNTk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2JyZWF0aFBhcmFtZXRlcnMuZ2V0U2l6ZSgpOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGE6IEJyZWF0aFBhcmFtZXRlckRhdGEgPSB0aGlzLl9icmVhdGhQYXJhbWV0ZXJzLmF0KGkpO1xuXG4gICAgICAgICAgICAgICAgbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLnBhcmFtZXRlcklkLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLm9mZnNldCArIChkYXRhLnBlYWsgKiBNYXRoLnNpbih0IC8gZGF0YS5jeWNsZSkpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLndlaWdodFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gMC4wO1xuICAgICAgICB9XG5cbiAgICAgICAgIF9icmVhdGhQYXJhbWV0ZXJzOiBjc21WZWN0b3I8QnJlYXRoUGFyYW1ldGVyRGF0YT47IC8vIOWRvOWQuOOBq+OBsuOCguOBpeOBhOOBpuOBhOOCi+ODkeODqeODoeODvOOCv+OBruODquOCueODiFxuICAgICAgICAgX2N1cnJlbnRUaW1lOiBudW1iZXI7ICAvLyDnqY3nrpfmmYLplpNb56eSXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWRvOWQuOOBruODkeODqeODoeODvOOCv+aDheWgsVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBCcmVhdGhQYXJhbWV0ZXJEYXRhXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJJZCAgIOWRvOWQuOOCkuOBsuOCguOBpeOBkeOCi+ODkeODqeODoeODvOOCv0lEXG4gICAgICAgICAqIEBwYXJhbSBvZmZzZXQgICAgICAgIOWRvOWQuOOCkuato+W8puazouOBqOOBl+OBn+OBqOOBjeOBruOAgeazouOBruOCquODleOCu+ODg+ODiFxuICAgICAgICAgKiBAcGFyYW0gcGVhayAgICAgICAgICDlkbzlkLjjgpLmraPlvKbms6LjgajjgZfjgZ/jgajjgY3jga7jgIHms6Ljga7pq5jjgZVcbiAgICAgICAgICogQHBhcmFtIGN5Y2xlICAgICAgICAg5ZG85ZC444KS5q2j5bym5rOi44Go44GX44Gf44Go44GN44Gu44CB5rOi44Gu5ZGo5pyfXG4gICAgICAgICAqIEBwYXJhbSB3ZWlnaHQgICAgICAgIOODkeODqeODoeODvOOCv+OBuOOBrumHjeOBv1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IocGFyYW1ldGVySWQ/OiBDdWJpc21JZEhhbmRsZSwgb2Zmc2V0PzogbnVtYmVyLCBwZWFrPzogbnVtYmVyLCBjeWNsZT86IG51bWJlciwgd2VpZ2h0PzogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcklkID0gKHBhcmFtZXRlcklkID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogcGFyYW1ldGVySWQ7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IChvZmZzZXQgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICA/IDAuMFxuICAgICAgICAgICAgICAgICAgICA6IG9mZnNldDtcbiAgICAgICAgICAgIHRoaXMucGVhayA9IChwZWFrID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgPyAwLjBcbiAgICAgICAgICAgICAgICAgICAgOiBwZWFrO1xuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IChjeWNsZSA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgID8gMC4wXG4gICAgICAgICAgICAgICAgICAgIDogY3ljbGU7XG4gICAgICAgICAgICB0aGlzLndlaWdodCA9ICh3ZWlnaHQgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICA/IDAuMFxuICAgICAgICAgICAgICAgICAgICA6IHdlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmFtZXRlcklkOiBDdWJpc21JZEhhbmRsZTsgIC8vIOWRvOWQuOOCkuOBsuOCguOBpeOBkeOCi+ODkeODqeODoeODvOOCv0lEXFxcbiAgICAgICAgb2Zmc2V0OiBudW1iZXI7ICAgICAgICAgLy8g5ZG85ZC444KS5q2j5bym5rOi44Go44GX44Gf44Go44GN44Gu44CB5rOi44Gu44Kq44OV44K744OD44OIXG4gICAgICAgIHBlYWs6IG51bWJlcjsgICAgICAgICAgIC8vIOWRvOWQuOOCkuato+W8puazouOBqOOBl+OBn+OBqOOBjeOBruOAgeazouOBrumrmOOBlVxuICAgICAgICBjeWNsZTogbnVtYmVyOyAgICAgICAgICAvLyDlkbzlkLjjgpLmraPlvKbms6LjgajjgZfjgZ/jgajjgY3jga7jgIHms6Ljga7lkajmnJ9cbiAgICAgICAgd2VpZ2h0OiBudW1iZXI7ICAgICAgICAgLy8g44OR44Op44Oh44O844K/44G444Gu6YeN44G/XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==