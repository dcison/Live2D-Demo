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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/effect/cubismeyeblink.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/effect/cubismeyeblink.ts":
/*!********************************************!*\
  !*** ./Framework/effect/cubismeyeblink.ts ***!
  \********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmVector;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * 自動まばたき機能
     *
     * 自動まばたき機能を提供する。
     */
    var CubismEyeBlink = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param modelSetting モデルの設定情報
         */
        function CubismEyeBlink(modelSetting) {
            this._blinkingState = EyeState.EyeState_First;
            this._nextBlinkingTime = 0.0;
            this._stateStartTimeSeconds = 0.0;
            this._blinkingIntervalSeconds = 4.0;
            this._closingSeconds = 0.1;
            this._closedSeconds = 0.05;
            this._openingSeconds = 0.15;
            this._userTimeSeconds = 0.0;
            this._parameterIds = new csmVector();
            if (modelSetting == null) {
                return;
            }
            for (var i = 0; i < modelSetting.getEyeBlinkParameterCount(); ++i) {
                this._parameterIds.pushBack(modelSetting.getEyeBlinkParameterId(i));
            }
        }
        /**
         * インスタンスを作成する
         * @param modelSetting モデルの設定情報
         * @return 作成されたインスタンス
         * @note 引数がNULLの場合、パラメータIDが設定されていない空のインスタンスを作成する。
         */
        CubismEyeBlink.create = function (modelSetting) {
            if (modelSetting === void 0) { modelSetting = null; }
            return new CubismEyeBlink(modelSetting);
        };
        /**
         * インスタンスの破棄
         * @param eyeBlink 対象のCubismEyeBlink
         */
        CubismEyeBlink.delete = function (eyeBlink) {
            if (eyeBlink != null) {
                eyeBlink = null;
            }
        };
        /**
         * まばたきの間隔の設定
         * @param blinkingInterval まばたきの間隔の時間[秒]
         */
        CubismEyeBlink.prototype.setBlinkingInterval = function (blinkingInterval) {
            this._blinkingIntervalSeconds = blinkingInterval;
        };
        /**
         * まばたきのモーションの詳細設定
         * @param closing   まぶたを閉じる動作の所要時間[秒]
         * @param closed    まぶたを閉じている動作の所要時間[秒]
         * @param opening   まぶたを開く動作の所要時間[秒]
         */
        CubismEyeBlink.prototype.setBlinkingSetting = function (closing, closed, opening) {
            this._closingSeconds = closing;
            this._closedSeconds = closed;
            this._openingSeconds = opening;
        };
        /**
         * まばたきさせるパラメータIDのリストの設定
         * @param parameterIds パラメータのIDのリスト
         */
        CubismEyeBlink.prototype.setParameterIds = function (parameterIds) {
            this._parameterIds = parameterIds;
        };
        /**
         * まばたきさせるパラメータIDのリストの取得
         * @return パラメータIDのリスト
         */
        CubismEyeBlink.prototype.getParameterIds = function () {
            return this._parameterIds;
        };
        /**
         * モデルのパラメータの更新
         * @param model 対象のモデル
         * @param deltaTimeSeconds デルタ時間[秒]
         */
        CubismEyeBlink.prototype.updateParameters = function (model, deltaTimeSeconds) {
            this._userTimeSeconds += deltaTimeSeconds;
            var parameterValue;
            var t = 0.0;
            switch (this._blinkingState) {
                case EyeState.EyeState_Closing:
                    t = ((this._userTimeSeconds - this._stateStartTimeSeconds) / this._closingSeconds);
                    if (t >= 1.0) {
                        t = 1.0;
                        this._blinkingState = EyeState.EyeState_Closed;
                        this._stateStartTimeSeconds = this._userTimeSeconds;
                    }
                    parameterValue = 1.0 - t;
                    break;
                case EyeState.EyeState_Closed:
                    t = ((this._userTimeSeconds - this._stateStartTimeSeconds) / this._closedSeconds);
                    if (t >= 1.0) {
                        this._blinkingState = EyeState.EyeState_Opening;
                        this._stateStartTimeSeconds = this._userTimeSeconds;
                    }
                    parameterValue = 0.0;
                    break;
                case EyeState.EyeState_Opening:
                    t = ((this._userTimeSeconds - this._stateStartTimeSeconds) / this._openingSeconds);
                    if (t >= 1.0) {
                        t = 1.0;
                        this._blinkingState = EyeState.EyeState_Interval;
                        this._nextBlinkingTime = this.determinNextBlinkingTiming();
                    }
                    parameterValue = t;
                    break;
                case EyeState.EyeState_Interval:
                    if (this._nextBlinkingTime < this._userTimeSeconds) {
                        this._blinkingState = EyeState.EyeState_Closing;
                        this._stateStartTimeSeconds = this._userTimeSeconds;
                    }
                    parameterValue = 1.0;
                    break;
                case EyeState.EyeState_First:
                default:
                    this._blinkingState = EyeState.EyeState_Interval;
                    this._nextBlinkingTime = this.determinNextBlinkingTiming();
                    parameterValue = 1.0;
                    break;
            }
            if (!CubismEyeBlink.CloseIfZero) {
                parameterValue = -parameterValue;
            }
            for (var i = 0; i < this._parameterIds.getSize(); ++i) {
                model.setParameterValueById(this._parameterIds.at(i), parameterValue);
            }
        };
        /**
         * 次の瞬きのタイミングの決定
         *
         * @return 次のまばたきを行う時刻[秒]
         */
        CubismEyeBlink.prototype.determinNextBlinkingTiming = function () {
            var r = Math.random();
            return this._userTimeSeconds + (r * (2.0 * this._blinkingIntervalSeconds - 1.0));
        };
        /**
         * IDで指定された目のパラメータが、0のときに閉じるなら true 、1の時に閉じるなら false 。
         */
        CubismEyeBlink.CloseIfZero = true;
        return CubismEyeBlink;
    }());
    Live2DCubismFramework.CubismEyeBlink = CubismEyeBlink;
    /**
     * まばたきの状態
     *
     * まばたきの状態を表す列挙型
     */
    var EyeState;
    (function (EyeState) {
        EyeState[EyeState["EyeState_First"] = 0] = "EyeState_First";
        EyeState[EyeState["EyeState_Interval"] = 1] = "EyeState_Interval";
        EyeState[EyeState["EyeState_Closing"] = 2] = "EyeState_Closing";
        EyeState[EyeState["EyeState_Closed"] = 3] = "EyeState_Closed";
        EyeState[EyeState["EyeState_Opening"] = 4] = "EyeState_Opening"; // まぶたが開いていく途中の状態
    })(EyeState = Live2DCubismFramework.EyeState || (Live2DCubismFramework.EyeState = {}));
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmvector.ts":
/*!*************************************!*\
  !*** ./Framework/type/csmvector.ts ***!
  \*************************************/
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
     * ベクター型（可変配列型）
     */
    var csmVector = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         * @param iniitalCapacity 初期化後のキャパシティ。データサイズは_capacity * sizeof(T)
         * @param zeroClear trueなら初期化時に確保した領域を0で埋める
         */
        function csmVector(initialCapacity) {
            if (initialCapacity === void 0) { initialCapacity = 0; }
            if (initialCapacity < 1) {
                this._ptr = new Array();
                this._capacity = 0;
                this._size = 0;
            }
            else {
                this._ptr = new Array(initialCapacity);
                this._capacity = initialCapacity;
                this._size = 0;
            }
        }
        /**
         * インデックスで指定した要素を返す
         */
        csmVector.prototype.at = function (index) {
            return this._ptr[index];
        };
        /**
         * 要素をセット
         * @param index 要素をセットするインデックス
         * @param value セットする要素
         */
        csmVector.prototype.set = function (index, value) {
            this._ptr[index] = value;
        };
        /**
         * コンテナを取得する
         */
        csmVector.prototype.get = function (offset) {
            if (offset === void 0) { offset = 0; }
            var ret = new Array();
            for (var i = offset; i < this._size; i++) {
                ret.push(this._ptr[i]);
            }
            return ret;
        };
        /**
         * pushBack処理、コンテナに新たな要素を追加する
         * @param value PushBack処理で追加する値
         */
        csmVector.prototype.pushBack = function (value) {
            if (this._size >= this._capacity) {
                this.prepareCapacity(this._capacity == 0 ? csmVector.s_defaultSize : this._capacity * 2);
            }
            this._ptr[this._size++] = value;
        };
        /**
         * コンテナの全要素を解放する
         */
        csmVector.prototype.clear = function () {
            this._ptr.length = 0;
            this._size = 0;
        };
        /**
         * コンテナの要素数を返す
         * @return コンテナの要素数
         */
        csmVector.prototype.getSize = function () {
            return this._size;
        };
        /**
         * コンテナの全要素に対して代入処理を行う
         * @param newSize 代入処理後のサイズ
         * @param value 要素に代入する値
         */
        csmVector.prototype.assign = function (newSize, value) {
            var curSize = this._size;
            if (curSize < newSize) {
                this.prepareCapacity(newSize); // capacity更新
            }
            for (var i = 0; i < newSize; i++) {
                this._ptr[i] = value;
            }
            this._size = newSize;
        };
        /**
         * サイズ変更
         */
        csmVector.prototype.resize = function (newSize, value) {
            if (value === void 0) { value = null; }
            this.updateSize(newSize, value, true);
        };
        /**
         * サイズ変更
         */
        csmVector.prototype.updateSize = function (newSize, value, callPlacementNew) {
            if (value === void 0) { value = null; }
            if (callPlacementNew === void 0) { callPlacementNew = true; }
            var curSize = this._size;
            if (curSize < newSize) {
                this.prepareCapacity(newSize); // capacity更新
                if (callPlacementNew) {
                    for (var i = this._size; i < newSize; i++) {
                        if (typeof value == 'function') // new
                         {
                            this._ptr[i] = JSON.parse(JSON.stringify(new value()));
                        }
                        else // プリミティブ型なので値渡し
                         {
                            this._ptr[i] = value;
                        }
                    }
                }
                else {
                    for (var i = this._size; i < newSize; i++) {
                        this._ptr[i] = value;
                    }
                }
            }
            else {
                // newSize <= this._size
                //---
                var sub = this._size - newSize;
                this._ptr.splice(this._size - sub, sub); // 不要なので破棄する
            }
            this._size = newSize;
        };
        /**
         * コンテナにコンテナ要素を挿入する
         * @param position 挿入する位置
         * @param begin　挿入するコンテナの開始位置
         * @param end 挿入するコンテナの終端位置
         */
        csmVector.prototype.insert = function (position, begin, end) {
            var dstSi = position._index;
            var srcSi = begin._index;
            var srcEi = end._index;
            var addCount = srcEi - srcSi;
            this.prepareCapacity(this._size + addCount);
            // 挿入用の既存データをシフトして隙間を作る
            var addSize = this._size - dstSi;
            if (addSize > 0) {
                for (var i = 0; i < addSize; i++) {
                    this._ptr.splice(dstSi + i, 0, null);
                }
            }
            for (var i = srcSi; i < srcEi; i++, dstSi++) {
                this._ptr[dstSi] = begin._vector._ptr[i];
            }
            this._size = this._size + addCount;
        };
        /**
         * コンテナからインデックスで指定した要素を削除する
         * @param index インデックス値
         * @return true 削除実行
         * @return false 削除範囲外
         */
        csmVector.prototype.remove = function (index) {
            if (index < 0 || this._size <= index) {
                return false; // 削除範囲外
            }
            this._ptr.splice(index, 1);
            --this._size;
            return true;
        };
        /**
         * コンテナから要素を削除して他の要素をシフトする
         * @param ite 削除する要素
         */
        csmVector.prototype.erase = function (ite) {
            var index = ite._index;
            if (index < 0 || this._size <= index) {
                return ite; // 削除範囲外
            }
            // 削除
            this._ptr.splice(index, 1);
            --this._size;
            var ite2 = new iterator(this, index); // 終了
            return ite2;
        };
        /**
         * コンテナのキャパシティを確保する
         * @param newSize 新たなキャパシティ。引数の値が現在のサイズ未満の場合は何もしない.
         */
        csmVector.prototype.prepareCapacity = function (newSize) {
            if (newSize > this._capacity) {
                if (this._capacity == 0) {
                    this._ptr = new Array(newSize);
                    this._capacity = newSize;
                }
                else {
                    this._ptr.length = newSize;
                    this._capacity = newSize;
                }
            }
        };
        /**
         * コンテナの先頭要素を返す
         */
        csmVector.prototype.begin = function () {
            var ite = (this._size == 0)
                ? this.end()
                : new iterator(this, 0);
            return ite;
        };
        /**
         * コンテナの終端要素を返す
         */
        csmVector.prototype.end = function () {
            var ite = new iterator(this, this._size);
            return ite;
        };
        csmVector.prototype.getOffset = function (offset) {
            var newVector = new csmVector();
            newVector._ptr = this.get(offset);
            newVector._size = this.get(offset).length;
            newVector._capacity = this.get(offset).length;
            return newVector;
        };
        csmVector.s_defaultSize = 10; // コンテナ初期化のデフォルトサイズ
        return csmVector;
    }());
    Live2DCubismFramework.csmVector = csmVector;
    var iterator = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function iterator(v, index) {
            this._vector = (v != undefined) ? v : null;
            this._index = (index != undefined) ? index : 0;
        }
        /**
         * 代入
         */
        iterator.prototype.set = function (ite) {
            this._index = ite._index;
            this._vector = ite._vector;
            return this;
        };
        /**
         * 前置き++演算
         */
        iterator.prototype.preIncrement = function () {
            ++this._index;
            return this;
        };
        /**
         * 前置き--演算
         */
        iterator.prototype.preDecrement = function () {
            --this._index;
            return this;
        };
        /**
         * 後置き++演算子
         */
        iterator.prototype.increment = function () {
            var iteold = new iterator(this._vector, this._index++);
            this._vector = iteold._vector;
            this._index = iteold._index;
            return this;
        };
        /**
         * 後置き--演算子
         */
        iterator.prototype.decrement = function () {
            var iteold = new iterator(this._vector, this._index--); // 古い値を保存
            this._vector = iteold._vector;
            this._index = iteold._index;
            return this;
        };
        /**
         * ptr
         */
        iterator.prototype.ptr = function () {
            return this._vector._ptr[this._index];
        };
        /**
         * =演算子のオーバーロード
         */
        iterator.prototype.substitution = function (ite) {
            this._index = ite._index;
            this._vector = ite._vector;
            return this;
        };
        /**
         * !=演算子のオーバーロード
         */
        iterator.prototype.notEqual = function (ite) {
            return (this._index != ite._index) || (this._vector != ite._vector);
        };
        return iterator;
    }());
    Live2DCubismFramework.iterator = iterator;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2VmZmVjdC9jdWJpc21leWVibGluay50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdHlwZS9jc212ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVrRTtBQU9yRSxJQUFPLFNBQVMsR0FBRyxxRUFBUyxDQUFDLFNBQVMsQ0FBQztBQUVoQyxJQUFVLHFCQUFxQixDQTROckM7QUE1TkQsV0FBaUIscUJBQXFCO0lBRWxDOzs7O09BSUc7SUFDSDtRQWtKSTs7O1dBR0c7UUFDSCx3QkFBbUIsWUFBaUM7WUFFaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQzlDLElBQUksQ0FBQyxpQkFB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SSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLHNCQUFHLEdBQVY7WUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSwrQkFBWSxHQUFuQixVQUFvQixHQUFnQjtZQUVoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLDJCQUFRLEdBQWYsVUFBZ0IsR0FBZ0I7WUFFNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEUsQ0FBQztRQUlMLGVBQUM7SUFBRCxDQUFDO0lBekZZLDhCQUFRLFdBeUZwQjtBQUNMLENBQUMsRUFqWWdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUFpWXJDIiwiZmlsZSI6Ii9lZmZlY3QvY3ViaXNtZXllYmxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9lZmZlY3QvY3ViaXNtZXllYmxpbmsudHNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc212ZWN0b3J9IGZyb20gXCIuLi90eXBlL2NzbXZlY3RvclwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgaWN1YmlzbW1vZGVsc2V0dGluZ30gZnJvbSBcIi4uL2ljdWJpc21tb2RlbHNldHRpbmdcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkfSBmcm9tIFwiLi4vaWQvY3ViaXNtaWRcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1vZGVsfSBmcm9tIFwiLi4vbW9kZWwvY3ViaXNtbW9kZWxcIjtcbmltcG9ydCBDdWJpc21Nb2RlbCA9IGN1YmlzbW1vZGVsLkN1YmlzbU1vZGVsO1xuaW1wb3J0IEN1YmlzbUlkSGFuZGxlID0gY3ViaXNtaWQuQ3ViaXNtSWRIYW5kbGU7XG5pbXBvcnQgSUN1YmlzbU1vZGVsU2V0dGluZyA9IGljdWJpc21tb2RlbHNldHRpbmcuSUN1YmlzbU1vZGVsU2V0dGluZztcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIOiHquWLleOBvuOBsOOBn+OBjeapn+iDvVxuICAgICAqXG4gICAgICog6Ieq5YuV44G+44Gw44Gf44GN5qmf6IO944KS5o+Q5L6b44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUV5ZUJsaW5rXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kk44Oz44K544K/44Oz44K544KS5L2c5oiQ44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbFNldHRpbmcg44Oi44OH44Or44Gu6Kit5a6a5oOF5aCxXG4gICAgICAgICAqIEByZXR1cm4g5L2c5oiQ44GV44KM44Gf44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqIEBub3RlIOW8leaVsOOBjE5VTEzjga7loLTlkIjjgIHjg5Hjg6njg6Hjg7zjgr9JROOBjOioreWumuOBleOCjOOBpuOBhOOBquOBhOepuuOBruOCpOODs+OCueOCv+ODs+OCueOCkuS9nOaIkOOBmeOCi+OAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUobW9kZWxTZXR0aW5nOiBJQ3ViaXNtTW9kZWxTZXR0aW5nID0gbnVsbCk6IEN1YmlzbUV5ZUJsaW5rXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3ViaXNtRXllQmxpbmsobW9kZWxTZXR0aW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjga7noLTmo4RcbiAgICAgICAgICogQHBhcmFtIGV5ZUJsaW5rIOWvvuixoeOBrkN1YmlzbUV5ZUJsaW5rXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZShleWVCbGluazogQ3ViaXNtRXllQmxpbmspOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGV5ZUJsaW5rICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXllQmxpbmsgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOBvuOBsOOBn+OBjeOBrumWk+malOOBruioreWumlxuICAgICAgICAgKiBAcGFyYW0gYmxpbmtpbmdJbnRlcnZhbCDjgb7jgbDjgZ/jgY3jga7plpPpmpTjga7mmYLplpNb56eSXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldEJsaW5raW5nSW50ZXJ2YWwoYmxpbmtpbmdJbnRlcnZhbDogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9ibGlua2luZ0ludGVydmFsU2Vjb25kcyA9IGJsaW5raW5nSW50ZXJ2YWw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44G+44Gw44Gf44GN44Gu44Oi44O844K344On44Oz44Gu6Kmz57Sw6Kit5a6aXG4gICAgICAgICAqIEBwYXJhbSBjbG9zaW5nICAg44G+44G244Gf44KS6ZaJ44GY44KL5YuV5L2c44Gu5omA6KaB5pmC6ZaTW+enkl1cbiAgICAgICAgICogQHBhcmFtIGNsb3NlZCAgICDjgb7jgbbjgZ/jgpLplonjgZjjgabjgYTjgovli5XkvZzjga7miYDopoHmmYLplpNb56eSXVxuICAgICAgICAgKiBAcGFyYW0gb3BlbmluZyAgIOOBvuOBtuOBn+OCkumWi+OBj+WLleS9nOOBruaJgOimgeaZgumWk1vnp5JdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0QmxpbmtpbmdTZXR0aW5nKGNsb3Npbmc6IG51bWJlciwgY2xvc2VkOiBudW1iZXIsIG9wZW5pbmc6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fY2xvc2luZ1NlY29uZHMgPSBjbG9zaW5nO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkU2Vjb25kcyA9IGNsb3NlZDtcbiAgICAgICAgICAgIHRoaXMuX29wZW5pbmdTZWNvbmRzID0gb3BlbmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgb7jgbDjgZ/jgY3jgZXjgZvjgovjg5Hjg6njg6Hjg7zjgr9JROOBruODquOCueODiOOBruioreWumlxuICAgICAgICAgKiBAcGFyYW0gcGFyYW1ldGVySWRzIOODkeODqeODoeODvOOCv+OBrklE44Gu44Oq44K544OIXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0UGFyYW1ldGVySWRzKHBhcmFtZXRlcklkczogY3NtVmVjdG9yPEN1YmlzbUlkSGFuZGxlPik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fcGFyYW1ldGVySWRzID0gcGFyYW1ldGVySWRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOBvuOBsOOBn+OBjeOBleOBm+OCi+ODkeODqeODoeODvOOCv0lE44Gu44Oq44K544OI44Gu5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4g44OR44Op44Oh44O844K/SUTjga7jg6rjgrnjg4hcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRQYXJhbWV0ZXJJZHMoKTogY3NtVmVjdG9yPEN1YmlzbUlkSGFuZGxlPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVySWRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OBruODkeODqeODoeODvOOCv+OBruabtOaWsFxuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg5a++6LGh44Gu44Oi44OH44OrXG4gICAgICAgICAqIEBwYXJhbSBkZWx0YVRpbWVTZWNvbmRzIOODh+ODq+OCv+aZgumWk1vnp5JdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdXBkYXRlUGFyYW1ldGVycyhtb2RlbDogQ3ViaXNtTW9kZWwsIGRlbHRhVGltZVNlY29uZHM6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzICs9IGRlbHRhVGltZVNlY29uZHM7XG4gICAgICAgICAgICBsZXQgcGFyYW1ldGVyVmFsdWU6IG51bWJlcjtcbiAgICAgICAgICAgIGxldCB0OiBudW1iZXIgPSAwLjA7XG5cbiAgICAgICAgICAgIHN3aXRjaCh0aGlzLl9ibGlua2luZ1N0YXRlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgRXllU3RhdGUuRXllU3RhdGVfQ2xvc2luZzpcbiAgICAgICAgICAgICAgICAgICAgdCA9ICgodGhpcy5fdXNlclRpbWVTZWNvbmRzIC0gdGhpcy5fc3RhdGVTdGFydFRpbWVTZWNvbmRzKSAvIHRoaXMuX2Nsb3NpbmdTZWNvbmRzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZih0ID49IDEuMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2JsaW5raW5nU3RhdGUgPSBFeWVTdGF0ZS5FeWVTdGF0ZV9DbG9zZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVN0YXJ0VGltZVNlY29uZHMgPSB0aGlzLl91c2VyVGltZVNlY29uZHM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJWYWx1ZSA9IDEuMCAtIHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBFeWVTdGF0ZS5FeWVTdGF0ZV9DbG9zZWQ6XG4gICAgICAgICAgICAgICAgICAgIHQgPSAoKHRoaXMuX3VzZXJUaW1lU2Vjb25kcyAtIHRoaXMuX3N0YXRlU3RhcnRUaW1lU2Vjb25kcykgLyB0aGlzLl9jbG9zZWRTZWNvbmRzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZih0ID49IDEuMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxpbmtpbmdTdGF0ZSA9IEV5ZVN0YXRlLkV5ZVN0YXRlX09wZW5pbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVN0YXJ0VGltZVNlY29uZHMgPSB0aGlzLl91c2VyVGltZVNlY29uZHM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJWYWx1ZSA9IDAuMDtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEV5ZVN0YXRlLkV5ZVN0YXRlX09wZW5pbmc6XG4gICAgICAgICAgICAgICAgICAgIHQgPSAoKHRoaXMuX3VzZXJUaW1lU2Vjb25kcyAtIHRoaXMuX3N0YXRlU3RhcnRUaW1lU2Vjb25kcykgLyB0aGlzLl9vcGVuaW5nU2Vjb25kcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodCA+PSAxLjApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibGlua2luZ1N0YXRlID0gRXllU3RhdGUuRXllU3RhdGVfSW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZXh0QmxpbmtpbmdUaW1lID0gdGhpcy5kZXRlcm1pbk5leHRCbGlua2luZ1RpbWluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyVmFsdWUgPSB0O1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRXllU3RhdGUuRXllU3RhdGVfSW50ZXJ2YWw6XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX25leHRCbGlua2luZ1RpbWUgPCB0aGlzLl91c2VyVGltZVNlY29uZHMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2JsaW5raW5nU3RhdGUgPSBFeWVTdGF0ZS5FeWVTdGF0ZV9DbG9zaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVTdGFydFRpbWVTZWNvbmRzID0gdGhpcy5fdXNlclRpbWVTZWNvbmRzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyVmFsdWUgPSAxLjA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBFeWVTdGF0ZS5FeWVTdGF0ZV9GaXJzdDpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibGlua2luZ1N0YXRlID0gRXllU3RhdGUuRXllU3RhdGVfSW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25leHRCbGlua2luZ1RpbWUgPSB0aGlzLmRldGVybWluTmV4dEJsaW5raW5nVGltaW5nKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyVmFsdWUgPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighQ3ViaXNtRXllQmxpbmsuQ2xvc2VJZlplcm8pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyVmFsdWUgPSAtcGFyYW1ldGVyVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3BhcmFtZXRlcklkcy5nZXRTaXplKCk7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5fcGFyYW1ldGVySWRzLmF0KGkpLCBwYXJhbWV0ZXJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqIEBwYXJhbSBtb2RlbFNldHRpbmcg44Oi44OH44Or44Gu6Kit5a6a5oOF5aCxXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IobW9kZWxTZXR0aW5nOiBJQ3ViaXNtTW9kZWxTZXR0aW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9ibGlua2luZ1N0YXRlID0gRXllU3RhdGUuRXllU3RhdGVfRmlyc3Q7XG4gICAgICAgICAgICB0aGlzLl9uZXh0QmxpbmtpbmdUaW1lID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVTdGFydFRpbWVTZWNvbmRzID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fYmxpbmtpbmdJbnRlcnZhbFNlY29uZHMgPSA0LjA7XG4gICAgICAgICAgICB0aGlzLl9jbG9zaW5nU2Vjb25kcyA9IDAuMTtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZFNlY29uZHMgPSAwLjA1O1xuICAgICAgICAgICAgdGhpcy5fb3BlbmluZ1NlY29uZHMgPSAwLjE1O1xuICAgICAgICAgICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fcGFyYW1ldGVySWRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT4oKTtcblxuICAgICAgICAgICAgaWYobW9kZWxTZXR0aW5nID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtb2RlbFNldHRpbmcuZ2V0RXllQmxpbmtQYXJhbWV0ZXJDb3VudCgpOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyYW1ldGVySWRzLnB1c2hCYWNrKG1vZGVsU2V0dGluZy5nZXRFeWVCbGlua1BhcmFtZXRlcklkKGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmrKHjga7nnqzjgY3jga7jgr/jgqTjg5/jg7PjgrDjga7msbrlrppcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiDmrKHjga7jgb7jgbDjgZ/jgY3jgpLooYzjgYbmmYLliLtb56eSXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGRldGVybWluTmV4dEJsaW5raW5nVGltaW5nKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCByOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyArIChyICogKDIuMCAqIHRoaXMuX2JsaW5raW5nSW50ZXJ2YWxTZWNvbmRzIC0gMS4wKSk7XG4gICAgICAgIH1cblxuICAgICAgICBfYmxpbmtpbmdTdGF0ZTogbnVtYmVyOyAgICAgICAgICAgICAvLyDnj77lnKjjga7nirbmhYtcbiAgICAgICAgX3BhcmFtZXRlcklkczogY3NtVmVjdG9yPEN1YmlzbUlkSGFuZGxlPjsgLy8g5pON5L2c5a++6LGh44Gu44OR44Op44Oh44O844K/44GuSUTjga7jg6rjgrnjg4hcbiAgICAgICAgX25leHRCbGlua2luZ1RpbWU6IG51bWJlcjsgICAgICAgICAgLy8g5qyh44Gu44G+44Gw44Gf44GN44Gu5pmC5Yi7W+enkl1cbiAgICAgICAgX3N0YXRlU3RhcnRUaW1lU2Vjb25kczogbnVtYmVyOyAgICAgLy8g54++5Zyo44Gu54q25oWL44GM6ZaL5aeL44GX44Gf5pmC5Yi7W+enkl1cbiAgICAgICAgX2JsaW5raW5nSW50ZXJ2YWxTZWNvbmRzOiBudW1iZXI7ICAgLy8g44G+44Gw44Gf44GN44Gu6ZaT6ZqUW+enkl1cbiAgICAgICAgX2Nsb3NpbmdTZWNvbmRzOiBudW1iZXI7ICAgICAgICAgICAgLy8g44G+44G244Gf44KS6ZaJ44GY44KL5YuV5L2c44Gu5omA6KaB5pmC6ZaTW+enkl1cbiAgICAgICAgX2Nsb3NlZFNlY29uZHM6IG51bWJlcjsgICAgICAgICAgICAgLy8g44G+44G244Gf44KS6ZaJ44GY44Gm44GE44KL5YuV5L2c44Gu5omA6KaB5pmC6ZaTW+enkl1cbiAgICAgICAgX29wZW5pbmdTZWNvbmRzOiBudW1iZXI7ICAgICAgICAgICAgLy8g44G+44G244Gf44KS6ZaL44GP5YuV5L2c44Gu5omA6KaB5pmC6ZaTW+enkl1cbiAgICAgICAgX3VzZXJUaW1lU2Vjb25kczogbnVtYmVyOyAgICAgICAgICAgLy8g44OH44Or44K/5pmC6ZaT44Gu56mN566X5YCkW+enkl1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTjgafmjIflrprjgZXjgozjgZ/nm67jga7jg5Hjg6njg6Hjg7zjgr/jgYzjgIEw44Gu44Go44GN44Gr6ZaJ44GY44KL44Gq44KJIHRydWUg44CBMeOBruaZguOBq+mWieOBmOOCi+OBquOCiSBmYWxzZSDjgIJcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBDbG9zZUlmWmVybzogYm9vbGVhbiA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44G+44Gw44Gf44GN44Gu54q25oWLXG4gICAgICpcbiAgICAgKiDjgb7jgbDjgZ/jgY3jga7nirbmhYvjgpLooajjgZnliJfmjJnlnotcbiAgICAgKi9cbiAgICBleHBvcnQgZW51bSBFeWVTdGF0ZVxuICAgIHtcbiAgICAgICAgRXllU3RhdGVfRmlyc3QgPSAwLCAvLyDliJ3mnJ/nirbmhYtcbiAgICAgICAgRXllU3RhdGVfSW50ZXJ2YWwsICAvLyDjgb7jgbDjgZ/jgY3jgZfjgabjgYTjgarjgYTnirbmhYtcbiAgICAgICAgRXllU3RhdGVfQ2xvc2luZywgICAvLyDjgb7jgbbjgZ/jgYzplonjgZjjgabjgYTjgY/pgJTkuK3jga7nirbmhYtcbiAgICAgICAgRXllU3RhdGVfQ2xvc2VkLCAgICAvLyDjgb7jgbbjgZ/jgYzplonjgZjjgabjgYTjgovnirbmhYtcbiAgICAgICAgRXllU3RhdGVfT3BlbmluZyAgICAvLyDjgb7jgbbjgZ/jgYzplovjgYTjgabjgYTjgY/pgJTkuK3jga7nirbmhYtcbiAgICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIOODmeOCr+OCv+ODvOWei++8iOWPr+WkiemFjeWIl+Wei++8iVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBjc21WZWN0b3I8VD5cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICogQHBhcmFtIGluaWl0YWxDYXBhY2l0eSDliJ3mnJ/ljJblvozjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgILjg4fjg7zjgr/jgrXjgqTjgrrjga9fY2FwYWNpdHkgKiBzaXplb2YoVClcbiAgICAgICAgICogQHBhcmFtIHplcm9DbGVhciB0cnVl44Gq44KJ5Yid5pyf5YyW5pmC44Gr56K65L+d44GX44Gf6aCY5Z+f44KSMOOBp+Wfi+OCgeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IoaW5pdGlhbENhcGFjaXR5OiBudW1iZXIgPSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihpbml0aWFsQ2FwYWNpdHkgPCAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHIgPSBuZXcgQXJyYXkoaW5pdGlhbENhcGFjaXR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IGluaXRpYWxDYXBhY2l0eTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqTjg7Pjg4fjg4Pjgq/jgrnjgafmjIflrprjgZfjgZ/opoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhdChpbmRleDogbnVtYmVyKTogVFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHRyW2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLjgrvjg4Pjg4hcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOimgee0oOOCkuOCu+ODg+ODiOOBmeOCi+OCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg44K744OD44OI44GZ44KL6KaB57SgXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0KGluZGV4OiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9wdHJbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0KG9mZnNldDogbnVtYmVyID0gMCk6IFRbXVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBUW10gPSBuZXcgQXJyYXk8VD4oKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaCh0aGlzLl9wdHJbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwdXNoQmFja+WHpueQhuOAgeOCs+ODs+ODhuODiuOBq+aWsOOBn+OBquimgee0oOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgUHVzaEJhY2vlh6bnkIbjgafov73liqDjgZnjgovlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdXNoQmFjayh2YWx1ZTogVCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5fc2l6ZSA+PSB0aGlzLl9jYXBhY2l0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eSh0aGlzLl9jYXBhY2l0eSA9PSAwID8gY3NtVmVjdG9yLnNfZGVmYXVsdFNpemUgOiB0aGlzLl9jYXBhY2l0eSAqIDIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wdHJbdGhpcy5fc2l6ZSsrXSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFqOimgee0oOOCkuino+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNsZWFyKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fcHRyLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbDjgpLov5TjgZlcbiAgICAgICAgICogQHJldHVybiDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhajopoHntKDjgavlr77jgZfjgabku6PlhaXlh6bnkIbjgpLooYzjgYZcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5Luj5YWl5Yem55CG5b6M44Gu44K144Kk44K6XG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDopoHntKDjgavku6PlhaXjgZnjgovlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhc3NpZ24obmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogVCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGN1clNpemUgPSB0aGlzLl9zaXplO1xuXG4gICAgICAgICAgICBpZihjdXJTaXplIDwgbmV3U2l6ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eShuZXdTaXplKTsgIC8vIGNhcGFjaXR55pu05pawXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5ld1NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IG5ld1NpemU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K144Kk44K65aSJ5pu0XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVzaXplKG5ld1NpemU6IG51bWJlciwgdmFsdWU6IFQgPSBudWxsKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUobmV3U2l6ZSwgdmFsdWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCteOCpOOCuuWkieabtFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHVwZGF0ZVNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogYW55ID0gbnVsbCwgY2FsbFBsYWNlbWVudE5ldzogYm9vbGVhbiA9IHRydWUpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjdXJTaXplOiBudW1iZXIgPSB0aGlzLl9zaXplO1xuXG4gICAgICAgICAgICBpZihjdXJTaXplIDwgbmV3U2l6ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eShuZXdTaXplKTsgIC8vIGNhcGFjaXR55pu05pawXG5cbiAgICAgICAgICAgICAgICBpZihjYWxsUGxhY2VtZW50TmV3KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSB0aGlzLl9zaXplOyBpIDwgbmV3U2l6ZTsgaSsrKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykgIC8vIG5ld1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmV3IHZhbHVlKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgLy8g44OX44Oq44Of44OG44Kj44OW5Z6L44Gq44Gu44Gn5YCk5rih44GXXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSB0aGlzLl9zaXplOyBpIDwgbmV3U2l6ZTsgaSsrKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBuZXdTaXplIDw9IHRoaXMuX3NpemVcbiAgICAgICAgICAgICAgICAvLy0tLVxuICAgICAgICAgICAgICAgIGxldCBzdWIgPSB0aGlzLl9zaXplIC0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKHRoaXMuX3NpemUgLSBzdWIsIHN1Yik7ICAgIC8vIOS4jeimgeOBquOBruOBp+egtOajhOOBmeOCi1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IG5ld1NpemU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gr44Kz44Oz44OG44OK6KaB57Sg44KS5oy/5YWl44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBwb3NpdGlvbiDmjL/lhaXjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtIGJlZ2lu44CA5oy/5YWl44GZ44KL44Kz44Oz44OG44OK44Gu6ZaL5aeL5L2N572uXG4gICAgICAgICAqIEBwYXJhbSBlbmQg5oy/5YWl44GZ44KL44Kz44Oz44OG44OK44Gu57WC56uv5L2N572uXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5zZXJ0KHBvc2l0aW9uOiBpdGVyYXRvcjxUPiwgYmVnaW46IGl0ZXJhdG9yPFQ+LCBlbmQ6IGl0ZXJhdG9yPFQ+KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZHN0U2k6IG51bWJlciA9IHBvc2l0aW9uLl9pbmRleDtcbiAgICAgICAgICAgIGxldCBzcmNTaTogbnVtYmVyID0gYmVnaW4uX2luZGV4O1xuICAgICAgICAgICAgbGV0IHNyY0VpOiBudW1iZXIgPSBlbmQuX2luZGV4O1xuXG4gICAgICAgICAgICBsZXQgYWRkQ291bnQ6IG51bWJlciA9IHNyY0VpIC0gc3JjU2k7XG5cbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX3NpemUgKyBhZGRDb3VudCk7XG5cbiAgICAgICAgICAgIC8vIOaMv+WFpeeUqOOBruaXouWtmOODh+ODvOOCv+OCkuOCt+ODleODiOOBl+OBpumamemWk+OCkuS9nOOCi1xuICAgICAgICAgICAgbGV0IGFkZFNpemUgPSB0aGlzLl9zaXplIC0gZHN0U2k7XG4gICAgICAgICAgICBpZihhZGRTaXplID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBhZGRTaXplOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKGRzdFNpICsgaSwgMCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHNyY1NpOyBpIDwgc3JjRWk7IGkrKywgZHN0U2krKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHJbZHN0U2ldID0gYmVnaW4uX3ZlY3Rvci5fcHRyW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdGhpcy5fc2l6ZSArIGFkZENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBi+OCieOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkuWJiumZpOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDliYrpmaTlrp/ooYxcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDliYrpmaTnr4Tlm7LlpJZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZW1vdmUoaW5kZXg6IG51bWJlcik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgIC8vIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIC0tdGhpcy5fc2l6ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ6KaB57Sg44KS5YmK6Zmk44GX44Gm5LuW44Gu6KaB57Sg44KS44K344OV44OI44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpdGUg5YmK6Zmk44GZ44KL6KaB57SgXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXJhc2UoaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9zaXplIDw9IGluZGV4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGU7IC8vIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDliYrpmaRcbiAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xuXG4gICAgICAgICAgICBsZXQgaXRlMjogaXRlcmF0b3I8VD4gPSBuZXcgaXRlcmF0b3I8VD4odGhpcywgaW5kZXgpOyAgIC8vIOe1guS6hlxuICAgICAgICAgICAgcmV0dXJuIGl0ZTI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu44Kt44Oj44OR44K344OG44Kj44KS56K65L+d44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBuZXdTaXplIOaWsOOBn+OBquOCreODo+ODkeOCt+ODhuOCo+OAguW8leaVsOOBruWApOOBjOePvuWcqOOBruOCteOCpOOCuuacqua6gOOBruWgtOWQiOOBr+S9leOCguOBl+OBquOBhC5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZihuZXdTaXplID4gdGhpcy5fY2FwYWNpdHkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY2FwYWNpdHkgPT0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheShuZXdTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHIubGVuZ3RoID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhYjpoK3opoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBiZWdpbigpOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxUPiA9ICh0aGlzLl9zaXplID09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5lbmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBpdGVyYXRvcjxUPih0aGlzLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu57WC56uv6KaB57Sg44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZW5kKCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMsIHRoaXMuX3NpemUpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBnZXRPZmZzZXQob2Zmc2V0OiBudW1iZXIpOiBjc21WZWN0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG5ld1ZlY3RvciA9IG5ldyBjc21WZWN0b3I8VD4oKTtcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fcHRyID0gdGhpcy5nZXQob2Zmc2V0KTtcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fc2l6ZSA9IHRoaXMuZ2V0KG9mZnNldCkubGVuZ3RoO1xuICAgICAgICAgICAgbmV3VmVjdG9yLl9jYXBhY2l0eSA9IHRoaXMuZ2V0KG9mZnNldCkubGVuZ3RoO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3VmVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgX3B0cjogVFtdOyAgICAvLyDjgrPjg7Pjg4bjg4rjga7lhYjpoK3jgqLjg4njg6zjgrlcbiAgICAgICAgX3NpemU6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXG4gICAgICAgIF9jYXBhY2l0eTogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqNcblxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgc19kZWZhdWx0U2l6ZSA9IDEwOyAvLyDjgrPjg7Pjg4bjg4rliJ3mnJ/ljJbjga7jg4fjg5Xjgqnjg6vjg4jjgrXjgqTjgrpcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgaXRlcmF0b3I8VD5cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2PzogY3NtVmVjdG9yPFQ+LCBpbmRleD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gKHYgIT0gdW5kZWZpbmVkKSA/IHYgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSAoaW5kZXggIT0gdW5kZWZpbmVkKSA/IGluZGV4IDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDku6PlhaVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZS5fdmVjdG9yO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVJbmNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgKyt0aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWJjee9ruOBjS0t5ryU566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlRGVjcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIC0tdGhpcy5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvoznva7jgY0rK+a8lOeul+WtkFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGluY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMuX3ZlY3RvciwgdGhpcy5faW5kZXgrKyk7XG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGVvbGQuX3ZlY3RvcjtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW+jOe9ruOBjS0t5ryU566X5a2QXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZGVjcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8VD4odGhpcy5fdmVjdG9yLCB0aGlzLl9pbmRleC0tKTsgIC8vIOWPpOOBhOWApOOCkuS/neWtmFxuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlb2xkLl92ZWN0b3I7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwdHJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdHIoKTogVFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmVjdG9yLl9wdHJbdGhpcy5faW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqID3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdWJzdGl0dXRpb24oaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZS5fdmVjdG9yO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIT3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBub3RFcXVhbChpdGU6IGl0ZXJhdG9yPFQ+KTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2luZGV4ICE9IGl0ZS5faW5kZXgpIHx8ICh0aGlzLl92ZWN0b3IgIT0gaXRlLl92ZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgX2luZGV4OiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICBfdmVjdG9yOiBjc21WZWN0b3I8VD47ICAvLyDjgrPjg7Pjg4bjg4pcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9