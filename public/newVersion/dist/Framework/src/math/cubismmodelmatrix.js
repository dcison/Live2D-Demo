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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/math/cubismmodelmatrix.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/math/cubismmatrix44.ts":
/*!******************************************!*\
  !*** ./Framework/math/cubismmatrix44.ts ***!
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
     * 4x4の行列
     *
     * 4x4行列の便利クラス。
     */
    var CubismMatrix44 = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismMatrix44() {
            this._tr = new Float32Array(16); // 4 * 4のサイズ
            this.loadIdentity();
        }
        /**
         * 受け取った２つの行列の乗算を行う。
         *
         * @param a 行列a
         * @param b 行列b
         * @return 乗算結果の行列
         */
        CubismMatrix44.multiply = function (a, b, dst) {
            var c = new Float32Array([
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0
            ]);
            var n = 4;
            for (var i = 0; i < n; ++i) {
                for (var j = 0; j < n; ++j) {
                    for (var k = 0; k < n; ++k) {
                        c[j + i * 4] += a[k + i * 4] * b[j + k * 4];
                    }
                }
            }
            for (var i = 0; i < 16; ++i) {
                dst[i] = c[i];
            }
        };
        /**
         * 単位行列に初期化する
         */
        CubismMatrix44.prototype.loadIdentity = function () {
            var c = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
            ]);
            this.setMatrix(c);
        };
        /**
         * 行列を設定
         *
         * @param tr 16個の浮動小数点数で表される4x4の行列
         */
        CubismMatrix44.prototype.setMatrix = function (tr) {
            for (var i = 0; i < 16; ++i) {
                this._tr[i] = tr[i];
            }
        };
        /**
         * 行列を浮動小数点数の配列で取得
         *
         * @return 16個の浮動小数点数で表される4x4の行列
         */
        CubismMatrix44.prototype.getArray = function () {
            return this._tr;
        };
        /**
         * X軸の拡大率を取得
         * @return X軸の拡大率
         */
        CubismMatrix44.prototype.getScaleX = function () {
            return this._tr[0];
        };
        /**
         * Y軸の拡大率を取得する
         *
         * @return Y軸の拡大率
         */
        CubismMatrix44.prototype.getScaleY = function () {
            return this._tr[5];
        };
        /**
         * X軸の移動量を取得
         * @return X軸の移動量
         */
        CubismMatrix44.prototype.getTranslateX = function () {
            return this._tr[12];
        };
        /**
         * Y軸の移動量を取得
         * @return Y軸の移動量
         */
        CubismMatrix44.prototype.getTranslateY = function () {
            return this._tr[13];
        };
        /**
         * X軸の値を現在の行列で計算
         *
         * @param src X軸の値
         * @return 現在の行列で計算されたX軸の値
         */
        CubismMatrix44.prototype.transformX = function (src) {
            return this._tr[0] * src + this._tr[12];
        };
        /**
         * Y軸の値を現在の行列で計算
         *
         * @param src Y軸の値
         * @return　現在の行列で計算されたY軸の値
         */
        CubismMatrix44.prototype.transformY = function (src) {
            return this._tr[5] * src + this._tr[13];
        };
        /**
         * X軸の値を現在の行列で逆計算
         */
        CubismMatrix44.prototype.invertTransformX = function (src) {
            return (src - this._tr[12]) / this._tr[0];
        };
        /**
         * Y軸の値を現在の行列で逆計算
         */
        CubismMatrix44.prototype.invertTransformY = function (src) {
            return (src - this._tr[13]) / this._tr[5];
        };
        /**
         * 現在の行列の位置を起点にして移動
         *
         * 現在の行列の位置を起点にして相対的に移動する。
         *
         * @param x X軸の移動量
         * @param y Y軸の移動量
         */
        CubismMatrix44.prototype.translateRelative = function (x, y) {
            var tr1 = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                x, y, 0.0, 1.0
            ]);
            CubismMatrix44.multiply(tr1, this._tr, this._tr);
        };
        /**
         * 現在の行列の位置を移動
         *
         * 現在の行列の位置を指定した位置へ移動する
         *
         * @param x X軸の移動量
         * @param y y軸の移動量
         */
        CubismMatrix44.prototype.translate = function (x, y) {
            this._tr[12] = x;
            this._tr[13] = y;
        };
        /**
         * 現在の行列のX軸の位置を指定した位置へ移動する
         *
         * @param x X軸の移動量
         */
        CubismMatrix44.prototype.translateX = function (x) {
            this._tr[12] = x;
        };
        /**
         * 現在の行列のY軸の位置を指定した位置へ移動する
         *
         * @param y Y軸の移動量
         */
        CubismMatrix44.prototype.translateY = function (y) {
            this._tr[13] = y;
        };
        /**
         * 現在の行列の拡大率を相対的に設定する
         *
         * @param x X軸の拡大率
         * @param y Y軸の拡大率
         */
        CubismMatrix44.prototype.scaleRelative = function (x, y) {
            var tr1 = new Float32Array([
                x, 0.0, 0.0, 0.0,
                0.0, y, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
            ]);
            CubismMatrix44.multiply(tr1, this._tr, this._tr);
        };
        /**
         * 現在の行列の拡大率を指定した倍率に設定する
         *
         * @param x X軸の拡大率
         * @param y Y軸の拡大率
         */
        CubismMatrix44.prototype.scale = function (x, y) {
            this._tr[0] = x;
            this._tr[5] = y;
        };
        /**
         * 現在の行列に行列を乗算
         *
         * @param m 行列
         */
        CubismMatrix44.prototype.multiplyByMatrix = function (m) {
            CubismMatrix44.multiply(m.getArray(), this._tr, this._tr);
        };
        /**
         * オブジェクトのコピーを生成する
         */
        CubismMatrix44.prototype.clone = function () {
            var cloneMatrix = new CubismMatrix44();
            for (var i = 0; i < this._tr.length; i++) {
                cloneMatrix._tr[i] = this._tr[i];
            }
            return cloneMatrix;
        };
        return CubismMatrix44;
    }());
    Live2DCubismFramework.CubismMatrix44 = CubismMatrix44;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/math/cubismmodelmatrix.ts":
/*!*********************************************!*\
  !*** ./Framework/math/cubismmodelmatrix.ts ***!
  \*********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CubismMatrix44 = _cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モデル座標設定用の4x4行列
     *
     * モデル座標設定用の4x4行列クラス
     */
    var CubismModelMatrix = /** @class */ (function (_super) {
        __extends(CubismModelMatrix, _super);
        /**
         * コンストラクタ
         *
         * @param w 横幅
         * @param h 縦幅
         */
        function CubismModelMatrix(w, h) {
            var _this = _super.call(this) || this;
            _this._width = (w !== undefined)
                ? w
                : 0.0;
            _this._height = (h !== undefined)
                ? h
                : 0.0;
            _this.setHeight(1.0);
            return _this;
        }
        /**
         * 横幅を設定
         *
         * @param w 横幅
         */
        CubismModelMatrix.prototype.setWidth = function (w) {
            var scaleX = w / this._width;
            var scaleY = scaleX;
            this.scale(scaleX, scaleY);
        };
        /**
         * 縦幅を設定
         * @param h 縦幅
         */
        CubismModelMatrix.prototype.setHeight = function (h) {
            var scaleX = h / this._height;
            var scaleY = scaleX;
            this.scale(scaleX, scaleY);
        };
        /**
         * 位置を設定
         *
         * @param x X軸の位置
         * @param y Y軸の位置
         */
        CubismModelMatrix.prototype.setPosition = function (x, y) {
            this.translate(x, y);
        };
        /**
         * 中心位置を設定
         *
         * @param x X軸の中心位置
         * @param y Y軸の中心位置
         *
         * @note widthかheightを設定したあとでないと、拡大率が正しく取得できないためずれる。
         */
        CubismModelMatrix.prototype.setCenterPosition = function (x, y) {
            this.centerX(x);
            this.centerY(y);
        };
        /**
         * 上辺の位置を設定する
         *
         * @param y 上辺のY軸位置
         */
        CubismModelMatrix.prototype.top = function (y) {
            this.setY(y);
        };
        /**
         * 下辺の位置を設定する
         *
         * @param y 下辺のY軸位置
         */
        CubismModelMatrix.prototype.bottom = function (y) {
            var h = this._height * this.getScaleY();
            this.translateY(y - h);
        };
        /**
         * 左辺の位置を設定
         *
         * @param x 左辺のX軸位置
         */
        CubismModelMatrix.prototype.left = function (x) {
            this.setX(x);
        };
        /**
         * 右辺の位置を設定
         *
         * @param x 右辺のX軸位置
         */
        CubismModelMatrix.prototype.right = function (x) {
            var w = this._width * this.getScaleX();
            this.translateX(x - w);
        };
        /**
         * X軸の中心位置を設定
         *
         * @param x X軸の中心位置
         */
        CubismModelMatrix.prototype.centerX = function (x) {
            var w = this._width * this.getScaleX();
            this.translateX(x - (w / 2.0));
        };
        /**
         * X軸の位置を設定
         *
         * @param x X軸の位置
         */
        CubismModelMatrix.prototype.setX = function (x) {
            this.translateX(x);
        };
        /**
         * Y軸の中心位置を設定
         *
         * @param y Y軸の中心位置
         */
        CubismModelMatrix.prototype.centerY = function (y) {
            var h = this._height * this.getScaleY();
            this.translateY(y - (h / 2.0));
        };
        /**
         * Y軸の位置を設定する
         *
         * @param y Y軸の位置
         */
        CubismModelMatrix.prototype.setY = function (y) {
            this.translateY(y);
        };
        /**
         * レイアウト情報から位置を設定
         *
         * @param layout レイアウト情報
         */
        CubismModelMatrix.prototype.setupFromLayout = function (layout) {
            var keyWidth = "width";
            var keyHeight = "height";
            var keyX = "x";
            var keyY = "y";
            var keyCenterX = "center_x";
            var keyCenterY = "center_y";
            var keyTop = "top";
            var keyBottom = "bottom";
            var keyLeft = "left";
            var keyRight = "right";
            for (var ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()) {
                var key = ite.ptr().first;
                var value = ite.ptr().second;
                if (key == keyWidth) {
                    this.setWidth(value);
                }
                else if (key == keyHeight) {
                    this.setHeight(value);
                }
            }
            for (var ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()) {
                var key = ite.ptr().first;
                var value = ite.ptr().second;
                if (key == keyX) {
                    this.setX(value);
                }
                else if (key == keyY) {
                    this.setY(value);
                }
                else if (key == keyCenterX) {
                    this.centerX(value);
                }
                else if (key == keyCenterY) {
                    this.centerY(value);
                }
                else if (key == keyTop) {
                    this.top(value);
                }
                else if (key == keyBottom) {
                    this.bottom(value);
                }
                else if (key == keyLeft) {
                    this.left(value);
                }
                else if (key == keyRight) {
                    this.right(value);
                }
            }
        };
        return CubismModelMatrix;
    }(CubismMatrix44));
    Live2DCubismFramework.CubismModelMatrix = CubismModelMatrix;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbW9kZWxtYXRyaXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFSSxJQUFVLHFCQUFxQixDQThSckM7QUE5UkQsV0FBaUIscUJBQXFCO0lBRWxDOzs7O09BSUc7SUFDSDtRQUVJOztXQUVHO1FBQ0g7WUFFSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUksWUFBWTtZQUNoRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNXLHVC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bW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9tYXRoL2N1YmlzbW1vZGVsbWF0cml4LnRzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiA0eDTjga7ooYzliJdcbiAgICAgKlxuICAgICAqIDR4NOihjOWIl+OBruS+v+WIqeOCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21NYXRyaXg0NFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHIgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTsgICAgLy8gNCAqIDTjga7jgrXjgqTjgrpcbiAgICAgICAgICAgIHRoaXMubG9hZElkZW50aXR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y+X44GR5Y+W44Gj44Gf77yS44Gk44Gu6KGM5YiX44Gu5LmX566X44KS6KGM44GG44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBhIOihjOWIl2FcbiAgICAgICAgICogQHBhcmFtIGIg6KGM5YiXYlxuICAgICAgICAgKiBAcmV0dXJuIOS5l+eul+e1kOaenOOBruihjOWIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBtdWx0aXBseShhOiBGbG9hdDMyQXJyYXksIGI6IEZsb2F0MzJBcnJheSwgZHN0OiBGbG9hdDMyQXJyYXkpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IG46IG51bWJlciA9IDQ7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbjsgKytqKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrOiBudW1iZXIgPSAwOyBrIDwgbjsgKytrKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjW2ogKyBpICogNF0gKz0gYVtrICsgaSAqIDRdICogYltqICsgayAqIDRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCAxNjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRzdFtpXSA9IGNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y2Y5L2N6KGM5YiX44Gr5Yid5pyf5YyW44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgbG9hZElkZW50aXR5KCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGM6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAxLjAsIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAxLjBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLnNldE1hdHJpeChjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDooYzliJfjgpLoqK3lrppcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHRyIDE25YCL44Gu5rWu5YuV5bCP5pWw54K55pWw44Gn6KGo44GV44KM44KLNHg044Gu6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0TWF0cml4KHRyOiBGbG9hdDMyQXJyYXkpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxNjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyW2ldID0gdHJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGM5YiX44KS5rWu5YuV5bCP5pWw54K55pWw44Gu6YWN5YiX44Gn5Y+W5b6XXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gMTblgIvjga7mta7li5XlsI/mlbDngrnmlbDjgafooajjgZXjgozjgos0eDTjga7ooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRBcnJheSgpOiBGbG9hdDMyQXJyYXlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjou7jjga7mi6HlpKfnjofjgpLlj5blvpdcbiAgICAgICAgICogQHJldHVybiBY6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2NhbGVYKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWei7uOOBruaLoeWkp+eOh+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIFnou7jjga7mi6HlpKfnjodcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTY2FsZVkoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cls1XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu56e75YuV6YeP44KS5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gWOi7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFRyYW5zbGF0ZVgoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clsxMl07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWei7uOOBruenu+WLlemHj+OCkuWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIFnou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRUcmFuc2xhdGVZKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMTNdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafoqIjnrpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHNyYyBY6Lu444Gu5YCkXG4gICAgICAgICAqIEByZXR1cm4g54++5Zyo44Gu6KGM5YiX44Gn6KiI566X44GV44KM44GfWOi7uOOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zZm9ybVgoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzBdICogc3JjICsgdGhpcy5fdHJbMTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafoqIjnrpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHNyYyBZ6Lu444Gu5YCkXG4gICAgICAgICAqIEByZXR1cm7jgIDnj77lnKjjga7ooYzliJfjgafoqIjnrpfjgZXjgozjgZ9Z6Lu444Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNmb3JtWShzcmM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbNV0gKiBzcmMgKyB0aGlzLl90clsxM107XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+mAhuioiOeul1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGludmVydFRyYW5zZm9ybVgoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIChzcmMgLSB0aGlzLl90clsxMl0pIC8gdGhpcy5fdHJbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWei7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+mAhuioiOeul1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGludmVydFRyYW5zZm9ybVkoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIChzcmMgLSB0aGlzLl90clsxM10pIC8gdGhpcy5fdHJbNV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS6LW354K544Gr44GX44Gm56e75YuVXG4gICAgICAgICAqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkui1t+eCueOBq+OBl+OBpuebuOWvvueahOOBq+enu+WLleOBmeOCi+OAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGVSZWxhdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHRyMTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgICAgMC4wLCAgICAwLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAxLjAsICAgIDAuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMS4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIHgsICAgICAgeSwgICAgICAwLjAsICAgIDEuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KHRyMSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLnp7vli5VcbiAgICAgICAgICpcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS5oyH5a6a44GX44Gf5L2N572u44G456e75YuV44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cbiAgICAgICAgICogQHBhcmFtIHkgeei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHJbMTJdID0geDtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEzXSA9IHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44GuWOi7uOOBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlWCh4OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEyXSA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44GuWei7uOOBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlWSh5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEzXSA9IHk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7mi6HlpKfnjofjgpLnm7jlr77nmoTjgavoqK3lrprjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2NhbGVSZWxhdGl2ZSh4OiBudW1iZXIsIHk6bnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgeCwgICAgICAwLjAsICAgIDAuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIHksICAgICAgMC4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAxLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDAuMCwgICAgMS4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkodHIxLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruaLoeWkp+eOh+OCkuaMh+WumuOBl+OBn+WAjeeOh+OBq+ioreWumuOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7mi6HlpKfnjodcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHJbMF0gPSB4O1xuICAgICAgICAgICAgdGhpcy5fdHJbNV0gPSB5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBq+ihjOWIl+OCkuS5l+eul1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbSDooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseUJ5TWF0cml4KG06IEN1YmlzbU1hdHJpeDQ0KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseShtLmdldEFycmF5KCksIHRoaXMuX3RyLCB0aGlzLl90cik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kq44OW44K444Kn44Kv44OI44Gu44Kz44OU44O844KS55Sf5oiQ44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2xvbmUoKTogQ3ViaXNtTWF0cml4NDRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGNsb25lTWF0cml4OiBDdWJpc21NYXRyaXg0NCA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl90ci5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbG9uZU1hdHJpeC5fdHJbaV0gPSB0aGlzLl90cltpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lTWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIF90cjogRmxvYXQzMkFycmF5OyAgICAvLyA0eDTooYzliJfjg4fjg7zjgr9cbiAgICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21tYXB9IGZyb20gXCIuLi90eXBlL2NzbW1hcFwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbWF0cml4NDR9IGZyb20gXCIuL2N1YmlzbW1hdHJpeDQ0XCI7XG5pbXBvcnQgY3NtTWFwID0gY3NtbWFwLmNzbU1hcDtcbmltcG9ydCBpdGVyYXRvciA9IGNzbW1hcC5pdGVyYXRvcjtcbmltcG9ydCBDdWJpc21NYXRyaXg0NCA9IGN1YmlzbW1hdHJpeDQ0LkN1YmlzbU1hdHJpeDQ0O1xuXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44Oi44OH44Or5bqn5qiZ6Kit5a6a55So44GuNHg06KGM5YiXXG4gICAgICpcbiAgICAgKiDjg6Ljg4fjg6vluqfmqJnoqK3lrprnlKjjga40eDTooYzliJfjgq/jg6njgrlcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTW9kZWxNYXRyaXggZXh0ZW5kcyBDdWJpc21NYXRyaXg0NFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gdyDmqKrluYVcbiAgICAgICAgICogQHBhcmFtIGgg57im5bmFXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcih3PzogbnVtYmVyLCBoPzogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICB0aGlzLl93aWR0aCA9ICh3ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyB3XG4gICAgICAgICAgICAgICAgOiAwLjA7XG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSAoaCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gaFxuICAgICAgICAgICAgICAgIDogMC4wO1xuXG4gICAgICAgICAgICB0aGlzLnNldEhlaWdodCgxLjApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaoquW5heOCkuioreWumlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gdyDmqKrluYVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRXaWR0aCh3OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWDogbnVtYmVyID0gdyAvIHRoaXMuX3dpZHRoO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVZOiBudW1iZXIgPSBzY2FsZVg7XG4gICAgICAgICAgICB0aGlzLnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnuKbluYXjgpLoqK3lrppcbiAgICAgICAgICogQHBhcmFtIGgg57im5bmFXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0SGVpZ2h0KGg6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVYOiBudW1iZXIgPSBoIC8gdGhpcy5faGVpZ2h0O1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVZOiBudW1iZXIgPSBzY2FsZVg7XG4gICAgICAgICAgICB0aGlzLnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDkvY3nva7jgpLoqK3lrppcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruS9jee9rlxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5L2N572uXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS4reW/g+S9jee9ruOCkuioreWumlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu5Lit5b+D5L2N572uXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7kuK3lv4PkvY3nva5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5vdGUgd2lkdGjjgYtoZWlnaHTjgpLoqK3lrprjgZfjgZ/jgYLjgajjgafjgarjgYTjgajjgIHmi6HlpKfnjofjgYzmraPjgZfjgY/lj5blvpfjgafjgY3jgarjgYTjgZ/jgoHjgZrjgozjgovjgIJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRDZW50ZXJQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jZW50ZXJYKHgpO1xuICAgICAgICAgICAgdGhpcy5jZW50ZXJZKHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS4iui+uuOBruS9jee9ruOCkuioreWumuOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geSDkuIrovrrjga5Z6Lu45L2N572uXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9wKHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zZXRZKHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS4i+i+uuOBruS9jee9ruOCkuioreWumuOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geSDkuIvovrrjga5Z6Lu45L2N572uXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYm90dG9tKHk6IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaDogbnVtYmVyID0gdGhpcy5faGVpZ2h0ICogdGhpcy5nZXRTY2FsZVkoKTtcblxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVZKHkgLSBoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlt6bovrrjga7kvY3nva7jgpLoqK3lrppcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHgg5bem6L6644GuWOi7uOS9jee9rlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGxlZnQoeDogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNldFgoeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y+z6L6644Gu5L2N572u44KS6Kit5a6aXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB4IOWPs+i+uuOBrljou7jkvY3nva5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByaWdodCh4OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHcgPSB0aGlzLl93aWR0aCAqIHRoaXMuZ2V0U2NhbGVYKCk7XG5cbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlWCh4IC0gdyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBruS4reW/g+S9jee9ruOCkuioreWumlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu5Lit5b+D5L2N572uXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2VudGVyWCh4OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHcgPSB0aGlzLl93aWR0aCAqIHRoaXMuZ2V0U2NhbGVYKCk7XG5cbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlWCh4IC0gKHcgLyAyLjApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu5L2N572u44KS6Kit5a6aXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7kvY3nva5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRYKHg6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVYKHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7kuK3lv4PkvY3nva7jgpLoqK3lrppcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruS4reW/g+S9jee9rlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNlbnRlclkoeTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBoOiBudW1iZXIgPSB0aGlzLl9oZWlnaHQgKiB0aGlzLmdldFNjYWxlWSgpO1xuXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVkoeSAtIChoIC8gMi4wKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWei7uOOBruS9jee9ruOCkuioreWumuOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5L2N572uXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0WSh5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlWSh5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjgqTjgqLjgqbjg4jmg4XloLHjgYvjgonkvY3nva7jgpLoqK3lrppcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGxheW91dCDjg6zjgqTjgqLjgqbjg4jmg4XloLFcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXR1cEZyb21MYXlvdXQobGF5b3V0OiBjc21NYXA8c3RyaW5nLCBudW1iZXI+KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBrZXlXaWR0aCA9IFwid2lkdGhcIjtcbiAgICAgICAgICAgIGNvbnN0IGtleUhlaWdodCA9IFwiaGVpZ2h0XCI7XG4gICAgICAgICAgICBjb25zdCBrZXlYID0gXCJ4XCI7XG4gICAgICAgICAgICBjb25zdCBrZXlZID0gXCJ5XCI7XG4gICAgICAgICAgICBjb25zdCBrZXlDZW50ZXJYID0gXCJjZW50ZXJfeFwiO1xuICAgICAgICAgICAgY29uc3Qga2V5Q2VudGVyWSA9IFwiY2VudGVyX3lcIjtcbiAgICAgICAgICAgIGNvbnN0IGtleVRvcCA9IFwidG9wXCI7XG4gICAgICAgICAgICBjb25zdCBrZXlCb3R0b20gPSBcImJvdHRvbVwiO1xuICAgICAgICAgICAgY29uc3Qga2V5TGVmdCA9IFwibGVmdFwiO1xuICAgICAgICAgICAgY29uc3Qga2V5UmlnaHQgPSBcInJpZ2h0XCI7XG5cbiAgICAgICAgICAgIGZvcihjb25zdCBpdGU6IGl0ZXJhdG9yPHN0cmluZywgbnVtYmVyPiA9IGxheW91dC5iZWdpbigpOyBpdGUubm90RXF1YWwobGF5b3V0LmVuZCgpKTsgaXRlLnByZUluY3JlbWVudCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gaXRlLnB0cigpLmZpcnN0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBudW1iZXIgPSBpdGUucHRyKCkuc2Vjb25kO1xuXG4gICAgICAgICAgICAgICAgaWYoa2V5ID09IGtleVdpZHRoKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRXaWR0aCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoa2V5ID09IGtleUhlaWdodClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SGVpZ2h0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihjb25zdCBpdGU6IGl0ZXJhdG9yPHN0cmluZywgbnVtYmVyPiA9IGxheW91dC5iZWdpbigpOyBpdGUubm90RXF1YWwobGF5b3V0LmVuZCgpKTsgaXRlLnByZUluY3JlbWVudCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gaXRlLnB0cigpLmZpcnN0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBudW1iZXIgPSBpdGUucHRyKCkuc2Vjb25kO1xuXG4gICAgICAgICAgICAgICAgaWYoa2V5ID09IGtleVgpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFgodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGtleSA9PSBrZXlZKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRZKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihrZXkgPT0ga2V5Q2VudGVyWClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoa2V5ID09IGtleUNlbnRlclkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclkodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGtleSA9PSBrZXlUb3ApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoa2V5ID09IGtleUJvdHRvbSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihrZXkgPT0ga2V5TGVmdClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoa2V5ID09IGtleVJpZ2h0KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjsgICAgIC8vIOaoquW5hVxuICAgICAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjsgICAgLy8g57im5bmFXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==