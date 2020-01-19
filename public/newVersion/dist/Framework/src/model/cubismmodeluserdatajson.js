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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/model/cubismmodeluserdatajson.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/cubismframeworkconfig.ts":
/*!********************************************!*\
  !*** ./Framework/cubismframeworkconfig.ts ***!
  \********************************************/
/*! exports provided: CSM_LOG_LEVEL_VERBOSE, CSM_LOG_LEVEL_DEBUG, CSM_LOG_LEVEL_INFO, CSM_LOG_LEVEL_WARNING, CSM_LOG_LEVEL_ERROR, CSM_LOG_LEVEL_OFF, CSM_LOG_LEVEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_VERBOSE", function() { return CSM_LOG_LEVEL_VERBOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_DEBUG", function() { return CSM_LOG_LEVEL_DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_INFO", function() { return CSM_LOG_LEVEL_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_WARNING", function() { return CSM_LOG_LEVEL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_ERROR", function() { return CSM_LOG_LEVEL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_OFF", function() { return CSM_LOG_LEVEL_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL", function() { return CSM_LOG_LEVEL; });
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
//========================================================
//  ログ出力関数の設定
//========================================================
//---------- ログ出力レベル 選択項目 定義 ----------
/// 詳細ログ出力設定
var CSM_LOG_LEVEL_VERBOSE = 0;
/// デバッグログ出力設定
var CSM_LOG_LEVEL_DEBUG = 1;
/// Infoログ出力設定
var CSM_LOG_LEVEL_INFO = 2;
/// 警告ログ出力設定
var CSM_LOG_LEVEL_WARNING = 3;
/// エラーログ出力設定
var CSM_LOG_LEVEL_ERROR = 4;
/// ログ出力オフ設定
var CSM_LOG_LEVEL_OFF = 5;
/**
* ログ出力レベル設定。
*
* 強制的にログ出力レベルを変える時に定義を有効にする。
* CSM_LOG_LEVEL_VERBOSE ～ CSM_LOG_LEVEL_OFF を選択する。
*/
var CSM_LOG_LEVEL = CSM_LOG_LEVEL_VERBOSE;


/***/ }),

/***/ "./Framework/id/cubismid.ts":
/*!**********************************!*\
  !*** ./Framework/id/cubismid.ts ***!
  \**********************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmString;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * パラメータ名・パーツ名・Drawable名を保持
     *
     * パラメータ名・パーツ名・Drawable名を保持するクラス。
     */
    var CubismId = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismId(id) {
            if (typeof (id) === 'string') {
                this._id = new csmString(id);
                return;
            }
            this._id = id;
        }
        /**
         * ID名を取得する
         */
        CubismId.prototype.getString = function () {
            return this._id;
        };
        /**
         * idを比較
         * @param c 比較するid
         * @return 同じならばtrue,異なっていればfalseを返す
         */
        CubismId.prototype.isEqual = function (c) {
            if (typeof (c) === 'string') {
                return this._id.isEqual(c);
            }
            else if (c instanceof csmString) {
                return this._id.isEqual(c.s);
            }
            else if (c instanceof CubismId) {
                return this._id.isEqual(c._id.s);
            }
            return false;
        };
        /**
         * idを比較
         * @param c 比較するid
         * @return 同じならばtrue,異なっていればfalseを返す
         */
        CubismId.prototype.isNotEqual = function (c) {
            if (typeof (c) == 'string') {
                return !this._id.isEqual(c);
            }
            else if (c instanceof csmString) {
                return !this._id.isEqual(c.s);
            }
            else if (c instanceof CubismId) {
                return !this._id.isEqual(c._id.s);
            }
            return false;
        };
        return CubismId;
    }());
    Live2DCubismFramework.CubismId = CubismId;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/id/cubismidmanager.ts":
/*!*****************************************!*\
  !*** ./Framework/id/cubismidmanager.ts ***!
  \*****************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _cubismid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cubismid */ "./Framework/id/cubismid.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


var CubismId = _cubismid__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismId;
var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmVector;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * ID名の管理
     *
     * ID名を管理する。
     */
    var CubismIdManager = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismIdManager() {
            this._ids = new csmVector();
        }
        /**
         * デストラクタ相当の処理
         */
        CubismIdManager.prototype.release = function () {
            for (var i = 0; i < this._ids.getSize(); ++i) {
                this._ids.set(i, void 0);
            }
            this._ids = null;
        };
        /**
         * ID名をリストから登録
         *
         * @param ids ID名リスト
         * @param count IDの個数
         */
        CubismIdManager.prototype.registerIds = function (ids) {
            for (var i = 0; i < ids.length; i++) {
                this.registerId(ids[i]);
            }
        };
        /**
         * ID名を登録
         *
         * @param id ID名
         */
        CubismIdManager.prototype.registerId = function (id) {
            var result = null;
            if ('string' == typeof (id)) {
                if ((result = this.findId(id)) != null) {
                    return result;
                }
                result = new CubismId(id);
                this._ids.pushBack(result);
            }
            else {
                return this.registerId(id.s);
            }
            return result;
        };
        /**
         * ID名からIDを取得する
         *
         * @param id ID名
         */
        CubismIdManager.prototype.getId = function (id) {
            return this.registerId(id);
        };
        /**
         * ID名からIDの確認
         *
         * @return true 存在する
         * @return false 存在しない
         */
        CubismIdManager.prototype.isExist = function (id) {
            if ('string' == typeof (id)) {
                return (this.findId(id) != null);
            }
            return this.isExist(id.s);
        };
        /**
         * ID名からIDを検索する。
         *
         * @param id ID名
         * @return 登録されているID。なければNULL。
         */
        CubismIdManager.prototype.findId = function (id) {
            for (var i = 0; i < this._ids.getSize(); ++i) {
                if (this._ids.at(i).getString().isEqual(id)) {
                    return this._ids.at(i);
                }
            }
            return null;
        };
        return CubismIdManager;
    }());
    Live2DCubismFramework.CubismIdManager = CubismIdManager;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/live2dcubismframework.ts":
/*!********************************************!*\
  !*** ./Framework/live2dcubismframework.ts ***!
  \********************************************/
/*! exports provided: strtod, Live2DCubismFramework, Option, LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strtod", function() { return strtod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cubismjson */ "./Framework/utils/cubismjson.ts");
/* harmony import */ var _id_cubismidmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id/cubismidmanager */ "./Framework/id/cubismidmanager.ts");
/* harmony import */ var _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rendering/cubismrenderer */ "./Framework/rendering/cubismrenderer.ts");
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference path="../Core/live2dcubismcore.d.ts" />




var Value = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].Value;
var CubismIdManager = _id_cubismidmanager__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismIdManager;
var CubismRenderer = _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismRenderer;
function strtod(s, endPtr) {
    var index = 0;
    for (var i = 1;; i++) {
        var testC = s.slice(i - 1, i);
        // 指数・マイナスの可能性があるのでスキップする
        if (testC == 'e' || testC == '-' || testC == 'E') {
            continue;
        }
        // 文字列の範囲を広げていく
        var test = s.substring(0, i);
        var number = Number(test);
        if (isNaN(number)) {
            // 数値として認識できなくなったので終了
            break;
        }
        // 最後に数値としてできたindexを格納しておく
        index = i;
    }
    var d = parseFloat(s); // パースした数値
    if (isNaN(d)) {
        // 数値として認識できなくなったので終了
        d = NaN;
    }
    endPtr[0] = s.slice(index); // 後続の文字列
    return d;
}
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    // ファイルスコープの変数を初期化
    var s_isStarted = false;
    var s_isInitialized = false;
    var s_option = null;
    var s_cubismIdManager = null;
    /**
     * Framework内で使う定数の宣言
     */
    var Constant;
    (function (Constant) {
        Constant.vertexOffset = 0; // メッシュ頂点のオフセット値
        Constant.vertexStep = 2; // メッシュ頂点のステップ値
    })(Constant = Live2DCubismFramework.Constant || (Live2DCubismFramework.Constant = {}));
    function csmDelete(address) {
        if (!address) {
            return;
        }
        address = void 0;
    }
    Live2DCubismFramework.csmDelete = csmDelete;
    /**
     * Live2D Cubism SDK Original Workflow SDKのエントリポイント
     * 利用開始時はCubismFramework.initialize()を呼び、CubismFramework.dispose()で終了する。
     */
    var CubismFramework = /** @class */ (function () {
        /**
         * 静的クラスとして使用する
         * インスタンス化させない
         */
        function CubismFramework() {
        }
        /**
         * Cubism FrameworkのAPIを使用可能にする。
         *  APIを実行する前に必ずこの関数を実行すること。
         *  一度準備が完了して以降は、再び実行しても内部処理がスキップされます。
         *
         * @param    option      Optionクラスのインスタンス
         *
         * @return   準備処理が完了したらtrueが返ります。
         */
        CubismFramework.startUp = function (option) {
            if (option === void 0) { option = null; }
            if (s_isStarted) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.startUp() is already done.");
                return s_isStarted;
            }
            s_option = option;
            if (s_option != null) {
                Live2DCubismCore.Logging.csmSetLogFunction(s_option.logFunction);
            }
            s_isStarted = true;
            // Live2D Cubism Coreバージョン情報を表示
            if (s_isStarted) {
                var version = Live2DCubismCore.Version.csmGetVersion();
                var major = ((version & 0xFF000000) >> 24);
                var minor = ((version & 0x00FF0000) >> 16);
                var patch = ((version & 0x0000FFFF));
                var versionNumber = version;
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("Live2D Cubism Core version: {0}.{1}.{2} ({3})", ('00' + major).slice(-2), ('00' + minor).slice(-2), ('0000' + patch).slice(-4), versionNumber);
            }
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.startUp() is complete.");
            return s_isStarted;
        };
        /**
         * StartUp()で初期化したCubismFrameworkの各パラメータをクリアします。
         * Dispose()したCubismFrameworkを再利用する際に利用してください。
         */
        CubismFramework.cleanUp = function () {
            s_isStarted = false;
            s_isInitialized = false;
            s_option = null;
            s_cubismIdManager = null;
        };
        /**
         * Cubism Framework内のリソースを初期化してモデルを表示可能な状態にします。<br>
         *     再度Initialize()するには先にDispose()を実行する必要があります。
         */
        CubismFramework.initialize = function () {
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CSM_ASSERT"])(s_isStarted);
            if (!s_isStarted) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework is not started.");
                return;
            }
            // --- s_isInitializedによる連続初期化ガード ---
            // 連続してリソース確保が行われないようにする。
            // 再度Initialize()するには先にDispose()を実行する必要がある。
            if (s_isInitialized) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework.initialize() skipped, already initialized.");
                return;
            }
            //---- static 初期化 ----
            Value.staticInitializeNotForClientCall();
            s_cubismIdManager = new CubismIdManager();
            s_isInitialized = true;
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.initialize() is complete.");
        };
        /**
         * Cubism Framework内の全てのリソースを解放します。
         *      ただし、外部で確保されたリソースについては解放しません。
         *      外部で適切に破棄する必要があります。
         */
        CubismFramework.dispose = function () {
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CSM_ASSERT"])(s_isStarted);
            if (!s_isStarted) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework is not started.");
                return;
            }
            // --- s_isInitializedによる未初期化解放ガード ---
            // dispose()するには先にinitialize()を実行する必要がある。
            if (!s_isInitialized) // false...リソース未確保の場合
             {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework.dispose() skipped, not initialized.");
                return;
            }
            Value.staticReleaseNotForClientCall();
            s_cubismIdManager.release();
            s_cubismIdManager = null;
            // レンダラの静的リソース（シェーダプログラム他）を解放する
            CubismRenderer.staticRelease();
            s_isInitialized = false;
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.dispose() is complete.");
        };
        /**
         * Cubism FrameworkのAPIを使用する準備が完了したかどうか
         * @return APIを使用する準備が完了していればtrueが返ります。
         */
        CubismFramework.isStarted = function () {
            return s_isStarted;
        };
        /**
         * Cubism Frameworkのリソース初期化がすでに行われているかどうか
         * @return リソース確保が完了していればtrueが返ります
         */
        CubismFramework.isInitialized = function () {
            return s_isInitialized;
        };
        /**
         * Core APIにバインドしたログ関数を実行する
         *
         * @praram message ログメッセージ
         */
        CubismFramework.coreLogFunction = function (message) {
            // Return if logging not possible.
            if (!Live2DCubismCore.Logging.csmGetLogFunction()) {
                return;
            }
            Live2DCubismCore.Logging.csmGetLogFunction()(message);
        };
        /**
         * 現在のログ出力レベル設定の値を返す。
         *
         * @return  現在のログ出力レベル設定の値
         */
        CubismFramework.getLoggingLevel = function () {
            if (s_option != null) {
                return s_option.loggingLevel;
            }
            return LogLevel.LogLevel_Off;
        };
        /**
         * IDマネージャのインスタンスを取得する
         * @return CubismManagerクラスのインスタンス
         */
        CubismFramework.getIdManager = function () {
            return s_cubismIdManager;
        };
        return CubismFramework;
    }());
    Live2DCubismFramework.CubismFramework = CubismFramework;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));
var Option = /** @class */ (function () {
    function Option() {
    }
    return Option;
}());

/**
 * ログ出力のレベル
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["LogLevel_Verbose"] = 0] = "LogLevel_Verbose";
    LogLevel[LogLevel["LogLevel_Debug"] = 1] = "LogLevel_Debug";
    LogLevel[LogLevel["LogLevel_Info"] = 2] = "LogLevel_Info";
    LogLevel[LogLevel["LogLevel_Warning"] = 3] = "LogLevel_Warning";
    LogLevel[LogLevel["LogLevel_Error"] = 4] = "LogLevel_Error";
    LogLevel[LogLevel["LogLevel_Off"] = 5] = "LogLevel_Off"; // ログ出力無効
})(LogLevel || (LogLevel = {}));


/***/ }),

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

/***/ "./Framework/model/cubismmodeluserdatajson.ts":
/*!****************************************************!*\
  !*** ./Framework/model/cubismmodeluserdatajson.ts ***!
  \****************************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubismjson */ "./Framework/utils/cubismjson.ts");
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismFramework;
var CubismJson = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismJson;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    var Meta = "Meta";
    var UserDataCount = "UserDataCount";
    var TotalUserDataSize = "TotalUserDataSize";
    var UserData = "UserData";
    var Target = "Target";
    var Id = "Id";
    var Value = "Value";
    var CubismModelUserDataJson = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param buffer    userdata3.jsonが読み込まれているバッファ
         * @param size      バッファのサイズ
         */
        function CubismModelUserDataJson(buffer, size) {
            this._json = CubismJson.create(buffer, size);
        }
        /**
         * デストラクタ相当の処理
         */
        CubismModelUserDataJson.prototype.release = function () {
            CubismJson.delete(this._json);
        };
        /**
         * ユーザーデータ個数の取得
         * @return ユーザーデータの個数
         */
        CubismModelUserDataJson.prototype.getUserDataCount = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(UserDataCount).toInt();
        };
        /**
         * ユーザーデータ総文字列数の取得
         *
         * @return ユーザーデータ総文字列数
         */
        CubismModelUserDataJson.prototype.getTotalUserDataSize = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(TotalUserDataSize).toInt();
        };
        /**
         * ユーザーデータのタイプの取得
         *
         * @return ユーザーデータのタイプ
         */
        CubismModelUserDataJson.prototype.getUserDataTargetType = function (i) {
            return this._json.getRoot().getValueByString(UserData).getValueByIndex(i).getValueByString(Target).getRawString();
        };
        /**
         * ユーザーデータのターゲットIDの取得
         *
         * @param i インデックス
         * @return ユーザーデータターゲットID
         */
        CubismModelUserDataJson.prototype.getUserDataId = function (i) {
            return CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(UserData).getValueByIndex(i).getValueByString(Id).getRawString());
        };
        /**
         * ユーザーデータの文字列の取得
         *
         * @param i インデックス
         * @return ユーザーデータ
         */
        CubismModelUserDataJson.prototype.getUserDataValue = function (i) {
            return this._json.getRoot().getValueByString(UserData).getValueByIndex(i).getValueByString(Value).getRawString();
        };
        return CubismModelUserDataJson;
    }());
    Live2DCubismFramework.CubismModelUserDataJson = CubismModelUserDataJson;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/rendering/cubismrenderer.ts":
/*!***********************************************!*\
  !*** ./Framework/rendering/cubismrenderer.ts ***!
  \***********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var CubismMatrix44 = _math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モデル描画を処理するレンダラ
     *
     * サブクラスに環境依存の描画命令を記述する。
     */
    var CubismRenderer = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismRenderer() {
            this._isCulling = false;
            this._isPremultipliedAlpha = false;
            this._anisortopy = 0.0;
            this._model = null;
            this._modelColor = new CubismTextureColor();
            // 単位行列に初期化
            this._mvpMatrix4x4 = new CubismMatrix44();
            this._mvpMatrix4x4.loadIdentity();
        }
        /**
         * レンダラのインスタンスを生成して取得する
         *
         * @return レンダラのインスタンス
         */
        CubismRenderer.create = function () {
            return null;
        };
        /**
         * レンダラのインスタンスを解放する
         */
        CubismRenderer.delete = function (renderer) {
            renderer = null;
        };
        /**
         * レンダラの初期化処理を実行する
         * 引数に渡したモデルからレンダラの初期化処理に必要な情報を取り出すことができる
         * @param model モデルのインスタンス
         */
        CubismRenderer.prototype.initialize = function (model) {
            this._model = model;
        };
        /**
         * モデルを描画する
         */
        CubismRenderer.prototype.drawModel = function () {
            if (this.getModel() == null)
                return;
            this.doDrawModel();
        };
        /**
         * Model-View-Projection 行列をセットする
         * 配列は複製されるので、元の配列は外で破棄して良い
         * @param matrix44 Model-View-Projection 行列
         */
        CubismRenderer.prototype.setMvpMatrix = function (matrix44) {
            this._mvpMatrix4x4.setMatrix(matrix44.getArray());
        };
        /**
         * Model-View-Projection 行列を取得する
         * @return Model-View-Projection 行列
         */
        CubismRenderer.prototype.getMvpMatrix = function () {
            return this._mvpMatrix4x4;
        };
        /**
         * モデルの色をセットする
         * 各色0.0~1.0の間で指定する（1.0が標準の状態）
         * @param red 赤チャンネルの値
         * @param green 緑チャンネルの値
         * @param blue 青チャンネルの値
         * @param alpha αチャンネルの値
         */
        CubismRenderer.prototype.setModelColor = function (red, green, blue, alpha) {
            if (red < 0.0) {
                red = 0.0;
            }
            else if (red > 1.0) {
                red = 1.0;
            }
            if (green < 0.0) {
                green = 0.0;
            }
            else if (green > 1.0) {
                green = 1.0;
            }
            if (blue < 0.0) {
                blue = 0.0;
            }
            else if (blue > 1.0) {
                blue = 1.0;
            }
            if (alpha < 0.0) {
                alpha = 0.0;
            }
            else if (alpha > 1.0) {
                alpha = 1.0;
            }
            this._modelColor.R = red;
            this._modelColor.G = green;
            this._modelColor.B = blue;
            this._modelColor.A = alpha;
        };
        /**
         * モデルの色を取得する
         * 各色0.0~1.0の間で指定する(1.0が標準の状態)
         *
         * @return RGBAのカラー情報
         */
        CubismRenderer.prototype.getModelColor = function () {
            return JSON.parse(JSON.stringify(this._modelColor));
        };
        /**
         * 乗算済みαの有効・無効をセットする
         * 有効にするならtrue、無効にするならfalseをセットする
         */
        CubismRenderer.prototype.setIsPremultipliedAlpha = function (enable) {
            this._isPremultipliedAlpha = enable;
        };
        /**
         * 乗算済みαの有効・無効を取得する
         * @return true 乗算済みのα有効
         * @return false 乗算済みのα無効
         */
        CubismRenderer.prototype.isPremultipliedAlpha = function () {
            return this._isPremultipliedAlpha;
        };
        /**
         * カリング（片面描画）の有効・無効をセットする。
         * 有効にするならtrue、無効にするならfalseをセットする
         */
        CubismRenderer.prototype.setIsCulling = function (culling) {
            this._isCulling = culling;
        };
        /**
         * カリング（片面描画）の有効・無効を取得する。
         * @return true カリング有効
         * @return false カリング無効
         */
        CubismRenderer.prototype.isCulling = function () {
            return this._isCulling;
        };
        /**
         * テクスチャの異方性フィルタリングのパラメータをセットする
         * パラメータ値の影響度はレンダラの実装に依存する
         * @param n パラメータの値
         */
        CubismRenderer.prototype.setAnisotropy = function (n) {
            this._anisortopy = n;
        };
        /**
         * テクスチャの異方性フィルタリングのパラメータをセットする
         * @return 異方性フィルタリングのパラメータ
         */
        CubismRenderer.prototype.getAnisotropy = function () {
            return this._anisortopy;
        };
        /**
         * レンダリングするモデルを取得する
         * @return レンダリングするモデル
         */
        CubismRenderer.prototype.getModel = function () {
            return this._model;
        };
        return CubismRenderer;
    }());
    Live2DCubismFramework.CubismRenderer = CubismRenderer;
    var CubismBlendMode;
    (function (CubismBlendMode) {
        CubismBlendMode[CubismBlendMode["CubismBlendMode_Normal"] = 0] = "CubismBlendMode_Normal";
        CubismBlendMode[CubismBlendMode["CubismBlendMode_Additive"] = 1] = "CubismBlendMode_Additive";
        CubismBlendMode[CubismBlendMode["CubismBlendMode_Multiplicative"] = 2] = "CubismBlendMode_Multiplicative";
    })(CubismBlendMode = Live2DCubismFramework.CubismBlendMode || (Live2DCubismFramework.CubismBlendMode = {}));
    ;
    /**
     * テクスチャの色をRGBAで扱うためのクラス
     */
    var CubismTextureColor = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismTextureColor() {
            this.R = 1.0;
            this.G = 1.0;
            this.B = 1.0;
            this.A = 1.0;
        }
        return CubismTextureColor;
    }());
    Live2DCubismFramework.CubismTextureColor = CubismTextureColor;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmmap.ts":
/*!**********************************!*\
  !*** ./Framework/type/csmmap.ts ***!
  \**********************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * Key-Valueのペアを定義するクラス
     * csmMapクラスの内部データで使用する。
     */
    var csmPair = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param key Keyとしてセットする値
         * @param value Valueとしてセットする値
         */
        function csmPair(key, value) {
            this.first = (key == undefined)
                ? null
                : key;
            this.second = (value == undefined)
                ? null
                : value;
        }
        return csmPair;
    }());
    Live2DCubismFramework.csmPair = csmPair;
    /**
     * マップ型
     */
    var csmMap = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         * @param size 初期化時点で確保するサイズ
         */
        function csmMap(size) {
            if (size != undefined) {
                if (size < 1) {
                    this._keyValues = new Array();
                    this._dummyValue = null;
                    this._size = 0;
                }
                else {
                    this._keyValues = new Array(size);
                    this._size = size;
                }
            }
            else {
                this._keyValues = new Array();
                this._dummyValue = null;
                this._size = 0;
            }
        }
        /**
         * デストラクタ
         */
        csmMap.prototype.release = function () {
            this.clear();
        };
        /**
         * キーを追加する
         * @param key 新たに追加するキー
         */
        csmMap.prototype.appendKey = function (key) {
            // 新しくKey/Valueのペアを作る
            this.prepareCapacity(this._size + 1, false); // 1つ以上入る隙間を作る
            // 新しいkey/valueのインデックスは_size
            this._keyValues[this._size] = new csmPair(key);
            this._size += 1;
        };
        /**
         * 添字演算子[key]のオーバーロード(get)
         * @param key 添字から特定されるValue値
         */
        csmMap.prototype.getValue = function (key) {
            var found = -1;
            for (var i = 0; i < this._size; i++) {
                if (this._keyValues[i].first == key) {
                    found = i;
                    break;
                }
            }
            if (found >= 0) {
                return this._keyValues[found].second;
            }
            else {
                this.appendKey(key); // 新規キーを追加
                return this._keyValues[this._size - 1].second;
            }
        };
        /**
         * 添字演算子[key]のオーバーロード(set)
         * @param key 添字から特定されるValue値
         * @param value 代入するValue値
         */
        csmMap.prototype.setValue = function (key, value) {
            var found = -1;
            for (var i = 0; i < this._size; i++) {
                if (this._keyValues[i].first == key) {
                    found = i;
                    break;
                }
            }
            if (found >= 0) {
                this._keyValues[found].second = value;
            }
            else {
                this.appendKey(key); // 新規キーを追加
                this._keyValues[this._size - 1].second = value;
            }
        };
        /**
         * 引数で渡したKeyを持つ要素が存在するか
         * @param key 存在を確認するkey
         * @return true 引数で渡したkeyを持つ要素が存在する
         * @return false 引数で渡したkeyを持つ要素が存在しない
         */
        csmMap.prototype.isExist = function (key) {
            for (var i = 0; i < this._size; i++) {
                if (this._keyValues[i].first == key) {
                    return true;
                }
            }
            return false;
        };
        /**
         * keyValueのポインタを全て解放する
         */
        csmMap.prototype.clear = function () {
            this._keyValues = void 0;
            this._keyValues = null;
            this._keyValues = new Array();
            this._size = 0;
        };
        /**
         * コンテナのサイズを取得する
         *
         * @return コンテナのサイズ
         */
        csmMap.prototype.getSize = function () {
            return this._size;
        };
        /**
         * コンテナのキャパシティを確保する
         * @param newSize 新たなキャパシティ。引数の値が現在のサイズ未満の場合は何もしない。
         * @param fitToSize trueなら指定したサイズに合わせる。falseならサイズを2倍確保しておく。
         */
        csmMap.prototype.prepareCapacity = function (newSize, fitToSize) {
            if (newSize > this._keyValues.length) {
                if (this._keyValues.length == 0) {
                    if (!fitToSize && newSize < csmMap.DefaultSize)
                        newSize = csmMap.DefaultSize;
                    this._keyValues.length = newSize;
                }
                else {
                    if (!fitToSize && newSize < this._keyValues.length * 2)
                        newSize = this._keyValues.length * 2;
                    this._keyValues.length = newSize;
                }
            }
        };
        /**
         * コンテナの先頭要素を返す
         */
        csmMap.prototype.begin = function () {
            var ite = new iterator(this, 0);
            return ite;
        };
        /**
         * コンテナの終端要素を返す
         */
        csmMap.prototype.end = function () {
            var ite = new iterator(this, this._size); // 終了
            return ite;
        };
        /**
         * コンテナから要素を削除する
         *
         * @param ite 削除する要素
         */
        csmMap.prototype.erase = function (ite) {
            var index = ite._index;
            if (index < 0 || this._size <= index) {
                return ite; // 削除範囲外
            }
            // 削除
            this._keyValues.splice(index, 1);
            --this._size;
            var ite2 = new iterator(this, index); // 終了
            return ite2;
        };
        /**
         * コンテナの値を32ビット符号付き整数型でダンプする
         */
        csmMap.prototype.dumpAsInt = function () {
            for (var i = 0; i < this._size; i++) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__["CubismLogDebug"])("{0} ,", this._keyValues[i]);
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__["CubismLogDebug"])("\n");
            }
        };
        csmMap.DefaultSize = 10; // コンテナの初期化のデフォルトサイズ
        return csmMap;
    }());
    Live2DCubismFramework.csmMap = csmMap;
    /**
     * csmMap<T>のイテレータ
     */
    var iterator = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function iterator(v, idx) {
            this._map = (v != undefined)
                ? v
                : new csmMap();
            this._index = (idx != undefined)
                ? idx
                : 0;
        }
        /**
         * =演算子のオーバーロード
         */
        iterator.prototype.set = function (ite) {
            this._index = ite._index;
            this._map = ite._map;
            return this;
        };
        /**
         * 前置き++演算子のオーバーロード
         */
        iterator.prototype.preIncrement = function () {
            ++this._index;
            return this;
        };
        /**
         * 前置き--演算子のオーバーロード
         */
        iterator.prototype.preDecrement = function () {
            --this._index;
            return this;
        };
        /**
         * 後置き++演算子のオーバーロード
         */
        iterator.prototype.increment = function () {
            var iteold = new iterator(this._map, this._index++); // 古い値を保存
            this._map = iteold._map;
            this._index = iteold._index;
            return this;
        };
        /**
         * 後置き--演算子のオーバーロード
         */
        iterator.prototype.decrement = function () {
            var iteold = new iterator(this._map, this._index); // 古い値を保存
            this._map = iteold._map;
            this._index = iteold._index;
            return this;
        };
        /**
         * *演算子のオーバーロード
         */
        iterator.prototype.ptr = function () {
            return this._map._keyValues[this._index];
        };
        /**
         * !=演算
         */
        iterator.prototype.notEqual = function (ite) {
            return (this._index != ite._index) || (this._map != ite._map);
        };
        return iterator;
    }());
    Live2DCubismFramework.iterator = iterator;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmstring.ts":
/*!*************************************!*\
  !*** ./Framework/type/csmstring.ts ***!
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
     * 文字列クラス。
     */
    var csmString = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         */
        function csmString(s) {
            this.s = s;
        }
        /**
         * 文字列を後方に追加する
         *
         * @param c 追加する文字列
         * @return 更新された文字列
         */
        csmString.prototype.append = function (c, length) {
            this.s += (length !== undefined)
                ? c.substr(0, length)
                : c;
            return this;
        };
        /**
         * 文字サイズを拡張して文字を埋める
         * @param length    拡張する文字数
         * @param v         埋める文字
         * @return 更新された文字列
         */
        csmString.prototype.expansion = function (length, v) {
            var ret = this;
            for (var i = 0; i < length; i++) {
                ret.append(v);
            }
            return ret;
        };
        /**
         * 文字列の長さをバイト数で取得する
         */
        csmString.prototype.getBytes = function () {
            return encodeURIComponent(this.s).replace(/%../g, "x").length;
        };
        /**
         * 文字列の長さを返す
         */
        csmString.prototype.getLength = function () {
            return this.s.length;
        };
        /**
         * 文字列比較　<
         * @param s 比較する文字列
         * @return true:    比較する文字列より小さい
         * @return false:   比較する文字列より大きい
         */
        csmString.prototype.isLess = function (s) {
            return this.s < s.s;
        };
        /**
         * 文字列比較 >
         * @param s 比較する文字列
         * @return true:    比較する文字列より大きい
         * @return false:   比較する文字列より小さい
         */
        csmString.prototype.isGreat = function (s) {
            return this.s > s.s;
        };
        /**
         * 文字列比較 ==
         * @param s 比較する文字列
         * @return true:    比較する文字列と等しい
         * @return false:   比較する文字列と異なる
         */
        csmString.prototype.isEqual = function (s) {
            return this.s == s;
        };
        /**
         * 文字列が空かどうか
         * @return true: 空の文字列
         * @return false: 値が設定されている
         */
        csmString.prototype.isEmpty = function () {
            return this.s.length == 0;
        };
        return csmString;
    }());
    Live2DCubismFramework.csmString = csmString;
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


/***/ }),

/***/ "./Framework/utils/cubismdebug.ts":
/*!****************************************!*\
  !*** ./Framework/utils/cubismdebug.ts ***!
  \****************************************/
/*! exports provided: CubismLogPrint, CubismLogPrintIn, CSM_ASSERT, CubismLogVerbose, CubismLogDebug, CubismLogInfo, CubismLogWarning, CubismLogError, Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogPrint", function() { return CubismLogPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogPrintIn", function() { return CubismLogPrintIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_ASSERT", function() { return CSM_ASSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogVerbose", function() { return CubismLogVerbose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogDebug", function() { return CubismLogDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogInfo", function() { return CubismLogInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogWarning", function() { return CubismLogWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogError", function() { return CubismLogError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/* harmony import */ var _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cubismframeworkconfig */ "./Framework/cubismframeworkconfig.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


var CubismLogPrint = function (level, fmt, args) {
    Live2DCubismFramework.CubismDebug.print(level, "[CSM]" + fmt, args);
};
var CubismLogPrintIn = function (level, fmt, args) {
    CubismLogPrint(level, fmt + "\n", args);
};
var CSM_ASSERT = function (expr) {
    console.assert(expr);
};
var CubismLogVerbose = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogDebug = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogInfo = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogWarning = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogError = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] <= _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_VERBOSE"]) {
    CubismLogVerbose = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Verbose, "[V]" + fmt, args);
    };
    CubismLogDebug = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Debug, "[D]" + fmt, args);
    };
    CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
    };
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_DEBUG"]) {
    CubismLogDebug = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Debug, "[D]" + fmt, args);
    };
    CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
    };
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_INFO"]) {
    CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
    };
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_WARNING"]) {
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_ERROR"]) {
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
//------------ LIVE2D NAMESPACE ------------
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * デバッグ用のユーティリティクラス。
     * ログの出力、バイトのダンプなど
     */
    var CubismDebug = /** @class */ (function () {
        /**
         * private コンストラクタ
         */
        function CubismDebug() {
        }
        /**
         * ログを出力する。第一引数にログレベルを設定する。
         * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
         *
         * @param logLevel ログレベルの設定
         * @param format 書式付き文字列
         * @param args 可変長引数
         */
        CubismDebug.print = function (logLevel, format, args) {
            // オプションで設定されたログ出力レベルを下回る場合はログに出さない
            if (logLevel < _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework.getLoggingLevel()) {
                return;
            }
            var logPrint = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework.coreLogFunction;
            if (!logPrint)
                return;
            var buffer = format.replace(/\{(\d+)\}/g, function (m, k) {
                return args[k];
            });
            logPrint(buffer);
        };
        /**
         * データから指定した長さだけダンプ出力する。
         * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
         *
         * @param logLevel ログレベルの設定
         * @param data ダンプするデータ
         * @param length ダンプする長さ
         */
        CubismDebug.dumpBytes = function (logLevel, data, length) {
            for (var i = 0; i < length; i++) {
                if (i % 16 == 0 && i > 0)
                    this.print(logLevel, "\n");
                else if (i % 8 == 0 && i > 0)
                    this.print(logLevel, "  ");
                this.print(logLevel, "{0} ", [(data[i] & 0xFF)]);
            }
            this.print(logLevel, "\n");
        };
        return CubismDebug;
    }());
    Live2DCubismFramework.CubismDebug = CubismDebug;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));
//------------ LIVE2D NAMESPACE ------------


/***/ }),

/***/ "./Framework/utils/cubismjson.ts":
/*!***************************************!*\
  !*** ./Framework/utils/cubismjson.ts ***!
  \***************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
/* harmony import */ var _type_csmmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmmap */ "./Framework/type/csmmap.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _cubismdebug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubismdebug */ "./Framework/utils/cubismdebug.ts");
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
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





var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].csmVector;
var csmMap = _type_csmmap__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmMap;
var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmString;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    // StaticInitializeNotForClientCall()で初期化する
    var CSM_JSON_ERROR_TYPE_MISMATCH = "Error: type mismatch";
    var CSM_JSON_ERROR_INDEX_OF_BOUNDS = "Error: index out of bounds";
    /**
     * パースしたJSONエレメントの要素の基底クラス。
     */
    var Value = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function Value() {
        }
        /**
         * 要素を文字列型で返す(string)
         */
        Value.prototype.getRawString = function (defaultValue, indent) {
            return this.getString(defaultValue, indent);
        };
        /**
         * 要素を数値型で返す(number)
         */
        Value.prototype.toInt = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            return defaultValue;
        };
        /**
         * 要素を数値型で返す(number)
         */
        Value.prototype.toFloat = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            return defaultValue;
        };
        /**
         * 要素を真偽値で返す(boolean)
         */
        Value.prototype.toBoolean = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            return defaultValue;
        };
        /**
         * サイズを返す
         */
        Value.prototype.getSize = function () {
            return 0;
        };
        /**
         * 要素を配列で返す(Value[])
         */
        Value.prototype.getArray = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = null; }
            return defaultValue;
        };
        /**
         * 要素をコンテナで返す(array)
         */
        Value.prototype.getVector = function (defaultValue) {
            return defaultValue;
        };
        /**
         * 要素をマップで返す(csmMap<csmString, Value>)
         */
        Value.prototype.getMap = function (defaultValue) {
            return defaultValue;
        };
        /**
         * 添字演算子[index]
         */
        Value.prototype.getValueByIndex = function (index) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * 添字演算子[string | csmString]
         */
        Value.prototype.getValueByString = function (s) {
            return Value.nullValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * マップのキー一覧をコンテナで返す
         *
         * @return マップのキーの一覧
         */
        Value.prototype.getKeys = function () {
            return Value.s_dummyKeys;
        };
        /**
         * Valueの種類がエラー値ならtrue
         */
        Value.prototype.isError = function () {
            return false;
        };
        /**
         * Valueの種類がnullならtrue
         */
        Value.prototype.isNull = function () {
            return false;
        };
        /**
         * Valueの種類が真偽値ならtrue
         */
        Value.prototype.isBool = function () {
            return false;
        };
        /**
         * Valueの種類が数値型ならtrue
         */
        Value.prototype.isFloat = function () {
            return false;
        };
        /**
         * Valueの種類が文字列ならtrue
         */
        Value.prototype.isString = function () {
            return false;
        };
        /**
         * Valueの種類が配列ならtrue
         */
        Value.prototype.isArray = function () {
            return false;
        };
        /**
         * Valueの種類がマップ型ならtrue
         */
        Value.prototype.isMap = function () {
            return false;
        };
        Value.prototype.equals = function (value) {
            return false;
        };
        /**
         * Valueの値が静的ならtrue、静的なら解放しない
         */
        Value.prototype.isStatic = function () {
            return false;
        };
        /**
         * Valueにエラー値をセットする
         */
        Value.prototype.setErrorNotForClientCall = function (errorStr) {
            return JsonError.errorValue;
        };
        /**
         * 初期化用メソッド
         */
        Value.staticInitializeNotForClientCall = function () {
            JsonBoolean.trueValue = new JsonBoolean(true);
            JsonBoolean.falseValue = new JsonBoolean(false);
            JsonError.errorValue = new JsonError("ERROR", true);
            this.nullValue = new JsonNullvalue();
            Value.s_dummyKeys = new csmVector();
        };
        /**
         * リリース用メソッド
         */
        Value.staticReleaseNotForClientCall = function () {
            JsonBoolean.trueValue = null;
            JsonBoolean.falseValue = null;
            JsonError.errorValue = null;
            Value.nullValue = null;
            Value.s_dummyKeys = null;
            JsonBoolean.trueValue = null;
            JsonBoolean.falseValue = null;
            JsonError.errorValue = null;
            Value.nullValue = null;
            Value.s_dummyKeys = null;
        };
        return Value;
    }());
    Live2DCubismFramework.Value = Value;
    /**
     * Ascii文字のみ対応した最小限の軽量JSONパーサ。
     * 仕様はJSONのサブセットとなる。
     * 設定ファイル(model3.json)などのロード用
     *
     * [未対応項目]
     * ・日本語などの非ASCII文字
     * ・eによる指数表現
     */
    var CubismJson = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismJson(buffer, length) {
            this._error = null;
            this._lineCount = 0;
            this._root = null;
            if (buffer != undefined) {
                this.parseBytes(buffer, length);
            }
        }
        /**
         * バイトデータから直接ロードしてパースする
         *
         * @param buffer バッファ
         * @param size バッファサイズ
         * @return CubismJsonクラスのインスタンス。失敗したらNULL
         */
        CubismJson.create = function (buffer, size) {
            var json = new CubismJson();
            var succeeded = json.parseBytes(buffer, size);
            if (!succeeded) {
                CubismJson.delete(json);
                return null;
            }
            else {
                return json;
            }
        };
        /**
         * パースしたJSONオブジェクトの解放処理
         *
         * @param instance CubismJsonクラスのインスタンス
         */
        CubismJson.delete = function (instance) {
            instance = null;
        };
        /**
         * パースしたJSONのルート要素を返す
         */
        CubismJson.prototype.getRoot = function () {
            return this._root;
        };
        /**
         *  UnicodeのバイナリをStringに変換
         *
         * @param buffer 変換するバイナリデータ
         * @return 変換後の文字列
         */
        CubismJson.prototype.arrayBufferToString = function (buffer) {
            var uint8Array = new Uint8Array(buffer);
            var str = "";
            for (var i = 0, len = uint8Array.length; i < len; ++i) {
                str += ("%" + this.pad(uint8Array[i].toString(16)));
            }
            str = decodeURIComponent(str);
            return str;
        };
        /**
         * エンコード、パディング
         */
        CubismJson.prototype.pad = function (n) {
            return n.length < 2
                ? "0" + n
                : n;
        };
        ;
        /**
         * JSONのパースを実行する
         * @param buffer    パース対象のデータバイト
         * @param size      データバイトのサイズ
         * return true : 成功
         * return false: 失敗
         */
        CubismJson.prototype.parseBytes = function (buffer, size) {
            var endPos = new Array(1); // 参照渡しにするため配列
            var decodeBuffer = this.arrayBufferToString(buffer);
            this._root = this.parseValue(decodeBuffer, size, 0, endPos);
            if (this._error) {
                var strbuf = '\0';
                strbuf = "Json parse error : @line " + (this._lineCount + 1) + "\n";
                this._root = new JsonString(strbuf);
                Object(_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("{0}", this._root.getRawString());
                return false;
            }
            else if (this._root == null) {
                this._root = new JsonError(new csmString(this._error), false); // rootは解放されるのでエラーオブジェクトを別途作成する
                return false;
            }
            return true;
        };
        /**
         * パース時のエラー値を返す
         */
        CubismJson.prototype.getParseError = function () {
            return this._error;
        };
        /**
         * ルート要素の次の要素がファイルの終端だったらtrueを返す
         */
        CubismJson.prototype.checkEndOfFile = function () {
            return this._root.getArray()[1].equals("EOF");
        };
        /**
         * JSONエレメントからValue(float,String,Value*,Array,null,true,false)をパースする
         * エレメントの書式に応じて内部でParseString(), ParseObject(), ParseArray()を呼ぶ
         *
         * @param   buffer      JSONエレメントのバッファ
         * @param   length      パースする長さ
         * @param   begin       パースを開始する位置
         * @param   outEndPos   パース終了時の位置
         * @return      パースから取得したValueオブジェクト
         */
        CubismJson.prototype.parseValue = function (buffer, length, begin, outEndPos) {
            if (this._error)
                return null;
            var o = null;
            var i = begin;
            var f;
            for (; i < length; i++) {
                var c = buffer[i];
                switch (c) {
                    case '-':
                    case '.':
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        {
                            var afterString = new Array(1); // 参照渡しにするため
                            f = Object(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_4__["strtod"])(buffer.slice(i), afterString);
                            outEndPos[0] = buffer.indexOf(afterString[0]);
                            return new JsonFloat(f);
                        }
                    case '\"':
                        return new JsonString(this.parseString(buffer, length, i + 1, outEndPos)); // \"の次の文字から
                    case '[':
                        o = this.parseArray(buffer, length, i + 1, outEndPos);
                        return o;
                    case '{':
                        o = this.parseObject(buffer, length, i + 1, outEndPos);
                        return o;
                    case 'n': // null以外にない
                        if (i + 3 < length) {
                            o = new JsonNullvalue(); // 解放できるようにする
                            outEndPos[0] = i + 4;
                        }
                        else {
                            this._error = "parse null";
                        }
                        return o;
                    case 't': // true以外にない
                        if (i + 3 < length) {
                            o = JsonBoolean.trueValue;
                            outEndPos[0] = i + 4;
                        }
                        else {
                            this._error = "parse true";
                        }
                        return o;
                    case 'f': // false以外にない
                        if (i + 4 < length) {
                            o = JsonBoolean.falseValue;
                            outEndPos[0] = i + 5;
                        }
                        else {
                            this._error = "illegal ',' position";
                        }
                        return o;
                    case ',': // Array separator
                        this._error = "illegal ',' position";
                        return null;
                    case ']': // 不正な｝だがスキップする。配列の最後に不要な , があると思われる
                        outEndPos[0] = i; // 同じ文字を再処理
                        return null;
                    case '\n':
                        this._lineCount++;
                    case ' ':
                    case '\t':
                    case '\r':
                    default: // スキップ
                        break;
                }
            }
            this._error = "illegal end of value";
            return null;
        };
        /**
         * 次の「"」までの文字列をパースする。
         *
         * @param   string  ->  パース対象の文字列
         * @param   length  ->  パースする長さ
         * @param   begin   ->  パースを開始する位置
         * @param  outEndPos   ->  パース終了時の位置
         * @return      パースした文F字列要素
         */
        CubismJson.prototype.parseString = function (string, length, begin, outEndPos) {
            if (this._error)
                return null;
            var i = begin;
            var c, c2;
            var ret = new csmString("");
            var bufStart = begin; // sbufに登録されていない文字の開始位置
            for (; i < length; i++) {
                c = string[i];
                switch (c) {
                    case '\"': // 終端の”、エスケープ文字は別に処理されるのでここに来ない
                        {
                            outEndPos[0] = i + 1; // ”の次の文字
                            ret.append(string.slice(bufStart), (i - bufStart)); // 前の文字までを登録する
                            return ret.s;
                        }
                    case '//': // エスケープの場合
                        {
                            i++; // ２文字をセットで扱う
                            if (i - 1 > bufStart) {
                                ret.append(string.slice(bufStart), (i - bufStart)); // 前の文字までを登録する
                            }
                            bufStart = i + 1; // エスケープ（２文字)の次の文字から
                            if (i < length) {
                                c2 = string[i];
                                switch (c2) {
                                    case '\\':
                                        ret.expansion(1, '\\');
                                        break;
                                    case '\"':
                                        ret.expansion(1, '\"');
                                        break;
                                    case '/':
                                        ret.expansion(1, '/');
                                        break;
                                    case 'b':
                                        ret.expansion(1, '\b');
                                        break;
                                    case 'f':
                                        ret.expansion(1, '\f');
                                        break;
                                    case 'n':
                                        ret.expansion(1, '\n');
                                        break;
                                    case 'r':
                                        ret.expansion(1, '\r');
                                        break;
                                    case 't':
                                        ret.expansion(1, '\t');
                                        break;
                                    case 'u':
                                        this._error = "parse string/unicord escape not supported";
                                        break;
                                    default:
                                        break;
                                }
                            }
                            else {
                                this._error = "parse string/escape error";
                            }
                        }
                    default:
                        {
                            break;
                        }
                }
            }
            this._error = "parse string/illegal end";
            return null;
        };
        /**
         * JSONのオブジェクトエレメントをパースしてValueオブジェクトを返す
         *
         * @param buffer    JSONエレメントのバッファ
         * @param length    パースする長さ
         * @param begin     パースを開始する位置
         * @param outEndPos パース終了時の位置
         * @return パースから取得したValueオブジェクト
         */
        CubismJson.prototype.parseObject = function (buffer, length, begin, outEndPos) {
            if (this._error)
                return null;
            var ret = new JsonMap();
            // Key: Value
            var key = "";
            var i = begin;
            var c = "";
            var localRetEndPos2 = Array(1);
            var ok = false;
            // , が続く限りループ
            for (; i < length; i++) {
                FOR_LOOP: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case '\"':
                            key = this.parseString(buffer, length, i + 1, localRetEndPos2);
                            if (this._error) {
                                return null;
                            }
                            i = localRetEndPos2[0];
                            ok = true;
                            break FOR_LOOP; //-- loopから出る
                        case '}': // 閉じカッコ
                            outEndPos[0] = i + 1;
                            return ret; // 空
                        case ':':
                            this._error = "illegal ':' position";
                            break;
                        case '\n':
                            this._lineCount++;
                        default:
                            break; // スキップする文字
                    }
                }
                if (!ok) {
                    this._error = "key not found";
                    return null;
                }
                ok = false;
                // : をチェック
                FOR_LOOP2: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case ':':
                            ok = true;
                            i++;
                            break FOR_LOOP2;
                        case '}':
                            this._error = "illegal '}' position";
                            break;
                        case '\n': this._lineCount++;
                        // case ' ': case '\t' : case '\r':
                        default:
                            break; // スキップする文字
                    }
                }
                if (!ok) {
                    this._error = "':' not found";
                    return null;
                }
                // 値をチェック
                var value = this.parseValue(buffer, length, i, localRetEndPos2);
                if (this._error) {
                    return null;
                }
                i = localRetEndPos2[0];
                // ret.put(key, value);
                ret.put(key, value);
                FOR_LOOP3: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case ',':
                            break FOR_LOOP3;
                        case '}':
                            outEndPos[0] = i + 1;
                            return ret; // 正常終了
                        case '\n':
                            this._lineCount++;
                        default:
                            break; // スキップ
                    }
                }
            }
            this._error = "illegal end of perseObject";
            return null;
        };
        /**
         * 次の「"」までの文字列をパースする。
         * @param buffer    JSONエレメントのバッファ
         * @param length    パースする長さ
         * @param begin     パースを開始する位置
         * @param outEndPos パース終了時の位置
         * @return パースから取得したValueオブジェクト
         */
        CubismJson.prototype.parseArray = function (buffer, length, begin, outEndPos) {
            if (this._error)
                return null;
            var ret = new JsonArray();
            // key : value
            var i = begin;
            var c;
            var localRetEndpos2 = new Array(1);
            // , が続く限りループ
            for (; i < length; i++) {
                // : をチェック
                var value = this.parseValue(buffer, length, i, localRetEndpos2);
                if (this._error) {
                    return null;
                }
                i = localRetEndpos2[0];
                if (value) {
                    ret.add(value);
                }
                // FOR_LOOP3:
                // boolean breakflag = false;
                FOR_LOOP: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case ',':
                            // breakflag = true;
                            // break; // 次のKEY, VAlUEへ
                            break FOR_LOOP;
                        case ']':
                            outEndPos[0] = i + 1;
                            return ret; // 終了
                        case '\n':
                            ++this._lineCount;
                        //case ' ': case '\t': case '\r':
                        default:
                            break; // スキップ
                    }
                }
            }
            ret = void 0;
            this._error = "illegal end of parseObject";
            return null;
        };
        return CubismJson;
    }());
    Live2DCubismFramework.CubismJson = CubismJson;
    /**
     * パースしたJSONの要素をfloat値として扱う
     */
    var JsonFloat = /** @class */ (function (_super) {
        __extends(JsonFloat, _super);
        /**
         * コンストラクタ
         */
        function JsonFloat(v) {
            var _this = _super.call(this) || this;
            _this._value = v;
            return _this;
        }
        /**
         * Valueの種類が数値型ならtrue
         */
        JsonFloat.prototype.isFloat = function () {
            return true;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonFloat.prototype.getString = function (defaultValue, indent) {
            var strbuf = '\0';
            this._value = parseFloat(strbuf);
            this._stringBuffer = strbuf;
            return this._stringBuffer;
        };
        /**
         * 要素を数値型で返す(number)
         */
        JsonFloat.prototype.toInt = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            return parseInt(this._value.toString());
        };
        /**
         * 要素を数値型で返す(number)
         */
        JsonFloat.prototype.toFloat = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0.0; }
            return this._value;
        };
        JsonFloat.prototype.equals = function (value) {
            if ('number' === typeof (value)) {
                // int
                if (Math.round(value)) {
                    return false;
                }
                // float
                else {
                    return value == this._value;
                }
            }
            return false;
        };
        return JsonFloat;
    }(Value));
    Live2DCubismFramework.JsonFloat = JsonFloat;
    /**
     * パースしたJSONの要素を真偽値として扱う
     */
    var JsonBoolean = /** @class */ (function (_super) {
        __extends(JsonBoolean, _super);
        /**
         * 引数付きコンストラクタ
         */
        function JsonBoolean(v) {
            var _this = _super.call(this) || this;
            _this._boolValue = v;
            return _this;
        }
        /**
         * Valueの種類が真偽値ならtrue
         */
        JsonBoolean.prototype.isBool = function () {
            return true;
        };
        /**
         * 要素を真偽値で返す(boolean)
         */
        JsonBoolean.prototype.toBoolean = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            return this._boolValue;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonBoolean.prototype.getString = function (defaultValue, indent) {
            this._stringBuffer = this._boolValue
                ? "true"
                : "false";
            return this._stringBuffer;
        };
        JsonBoolean.prototype.equals = function (value) {
            if ('boolean' === typeof (value)) {
                return value == this._boolValue;
            }
            return false;
        };
        /**
         * Valueの値が静的ならtrue, 静的なら解放しない
         */
        JsonBoolean.prototype.isStatic = function () {
            return true;
        };
        return JsonBoolean;
    }(Value));
    Live2DCubismFramework.JsonBoolean = JsonBoolean;
    /**
     * パースしたJSONの要素を文字列として扱う
     */
    var JsonString = /** @class */ (function (_super) {
        __extends(JsonString, _super);
        function JsonString(s) {
            var _this = _super.call(this) || this;
            if ('string' === typeof (s)) {
                _this._stringBuffer = s;
            }
            if (s instanceof csmString) {
                _this._stringBuffer = s.s;
            }
            return _this;
        }
        /**
         * Valueの種類が文字列ならtrue
         */
        JsonString.prototype.isString = function () {
            return true;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonString.prototype.getString = function (defaultValue, indent) {
            return this._stringBuffer;
        };
        JsonString.prototype.equals = function (value) {
            if ('string' === typeof (value)) {
                return this._stringBuffer == value;
            }
            if (value instanceof csmString) {
                return (this._stringBuffer == value.s);
            }
            return false;
        };
        return JsonString;
    }(Value));
    Live2DCubismFramework.JsonString = JsonString;
    /**
     * JSONパース時のエラー結果。文字列型のようにふるまう
     */
    var JsonError = /** @class */ (function (_super) {
        __extends(JsonError, _super);
        /**
         * 引数付きコンストラクタ
         */
        function JsonError(s, isStatic) {
            var _this = this;
            if ("string" === typeof (s)) {
                _this = _super.call(this, s) || this;
            }
            else {
                _this = _super.call(this, s) || this;
            }
            _this._isStatic = isStatic;
            return _this;
        }
        /**
         * Valueの値が静的ならtrue、静的なら解放しない
         */
        JsonError.prototype.isStatic = function () {
            return this._isStatic;
        };
        /**
         * エラー情報をセットする
         */
        JsonError.prototype.setErrorNotForClientCall = function (s) {
            this._stringBuffer = s;
            return this;
        };
        /**
         * Valueの種類がエラー値ならtrue
         */
        JsonError.prototype.isError = function () {
            return true;
        };
        return JsonError;
    }(JsonString));
    Live2DCubismFramework.JsonError = JsonError;
    /**
     * パースしたJSONの要素をNULL値として持つ
     */
    var JsonNullvalue = /** @class */ (function (_super) {
        __extends(JsonNullvalue, _super);
        /**
         * コンストラクタ
         */
        function JsonNullvalue() {
            var _this = _super.call(this) || this;
            _this._stringBuffer = "NullValue";
            return _this;
        }
        /**
         * Valueの種類がNULL値ならtrue
         */
        JsonNullvalue.prototype.isNull = function () {
            return true;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonNullvalue.prototype.getString = function (defaultValue, indent) {
            return this._stringBuffer;
        };
        /**
         * Valueの値が静的ならtrue, 静的なら解放しない
         */
        JsonNullvalue.prototype.isStatic = function () {
            return true;
        };
        return JsonNullvalue;
    }(Value));
    Live2DCubismFramework.JsonNullvalue = JsonNullvalue;
    /**
     * パースしたJSONの要素を配列として持つ
     */
    var JsonArray = /** @class */ (function (_super) {
        __extends(JsonArray, _super);
        /**
         * コンストラクタ
         */
        function JsonArray() {
            var _this = _super.call(this) || this;
            _this._array = new csmVector();
            return _this;
        }
        /**
         * デストラクタ相当の処理
         */
        JsonArray.prototype.release = function () {
            for (var ite = this._array.begin(); ite.notEqual(this._array.end()); ite.preIncrement()) {
                var v = ite.ptr();
                if (v && !v.isStatic()) {
                    v = void 0;
                    v = null;
                }
            }
        };
        /**
         * Valueの種類が配列ならtrue
         */
        JsonArray.prototype.isArray = function () {
            return true;
        };
        /**
         * 添字演算子[index]
         */
        JsonArray.prototype.getValueByIndex = function (index) {
            if (index < 0 || this._array.getSize() <= index) {
                return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_INDEX_OF_BOUNDS);
            }
            var v = this._array.at(index);
            if (v == null) {
                return Value.nullValue;
            }
            return v;
        };
        /**
         * 添字演算子[string | csmString]
         */
        JsonArray.prototype.getValueByString = function (s) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonArray.prototype.getString = function (defaultValue, indent) {
            var stringBuffer = indent + "[\n";
            for (var ite = this._array.begin(); ite.notEqual(this._array.end()); ite.increment()) {
                var v = ite.ptr();
                this._stringBuffer += indent + "" + v.getString(indent + " ") + "\n";
            }
            this._stringBuffer = stringBuffer + indent + "]\n";
            return this._stringBuffer;
        };
        /**
         * 配列要素を追加する
         * @param v 追加する要素
         */
        JsonArray.prototype.add = function (v) {
            this._array.pushBack(v);
        };
        /**
         * 要素をコンテナで返す(csmVector<Value>)
         */
        JsonArray.prototype.getVector = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = null; }
            return this._array;
        };
        /**
         * 要素の数を返す
         */
        JsonArray.prototype.getSize = function () {
            return this._array.getSize();
        };
        return JsonArray;
    }(Value));
    Live2DCubismFramework.JsonArray = JsonArray;
    /**
     * パースしたJSONの要素をマップとして持つ
     */
    var JsonMap = /** @class */ (function (_super) {
        __extends(JsonMap, _super);
        /**
         * コンストラクタ
         */
        function JsonMap() {
            var _this = _super.call(this) || this;
            _this._map = new csmMap();
            return _this;
        }
        /**
         * デストラクタ相当の処理
         */
        JsonMap.prototype.release = function () {
            var ite = this._map.begin();
            while (ite.notEqual(this._map.end())) {
                var v = ite.ptr().second;
                if (v && !v.isStatic()) {
                    v = void 0;
                    v = null;
                }
                ite.preIncrement();
            }
        };
        /**
         * Valueの値がMap型ならtrue
         */
        JsonMap.prototype.isMap = function () {
            return true;
        };
        /**
         * 添字演算子[string | csmString]
         */
        JsonMap.prototype.getValueByString = function (s) {
            if (s instanceof csmString) {
                var ret = this._map.getValue(s.s);
                if (ret == null) {
                    return Value.nullValue;
                }
                return ret;
            }
            for (var iter = this._map.begin(); iter.notEqual(this._map.end()); iter.preIncrement()) {
                if (iter.ptr().first == s) {
                    if (iter.ptr().second == null) {
                        return Value.nullValue;
                    }
                    return iter.ptr().second;
                }
            }
            return Value.nullValue;
        };
        /**
         * 添字演算子[index]
         */
        JsonMap.prototype.getValueByIndex = function (index) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonMap.prototype.getString = function (defaultValue, indent) {
            this._stringBuffer = indent + "{\n";
            var ite = this._map.begin();
            while (ite.notEqual(this._map.end())) {
                var key = ite.ptr().first;
                var v = ite.ptr().second;
                this._stringBuffer += indent + " " + key + " : " + v.getString(indent + "   ") + " \n";
                ite.preIncrement();
            }
            this._stringBuffer += indent + "}\n";
            return this._stringBuffer;
        };
        /**
         * 要素をMap型で返す
         */
        JsonMap.prototype.getMap = function (defaultValue) {
            return this._map;
        };
        /**
         * Mapに要素を追加する
         */
        JsonMap.prototype.put = function (key, v) {
            this._map.setValue(key, v);
        };
        /**
         * Mapからキーのリストを取得する
         */
        JsonMap.prototype.getKeys = function () {
            if (!this._keys) {
                this._keys = new csmVector();
                var ite = this._map.begin();
                while (ite.notEqual(this._map.end())) {
                    var key = ite.ptr().first;
                    this._keys.pushBack(key);
                    ite.preIncrement();
                }
            }
            return this._keys;
        };
        /**
         * Mapの要素数を取得する
         */
        JsonMap.prototype.getSize = function () {
            return this._keys.getSize();
        };
        return JsonMap;
    }(Value));
    Live2DCubismFramework.JsonMap = JsonMap;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2N1YmlzbWZyYW1ld29ya2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvaWQvY3ViaXNtaWQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tYXRoL2N1YmlzbW1hdHJpeDQ0LnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tb2RlbC9jdWJpc21tb2RlbHVzZXJkYXRhanNvbi50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvcmVuZGVyaW5nL2N1YmlzbXJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay90eXBlL2NzbW1hcC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdHlwZS9jc21zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay91dGlscy9jdWJpc21kZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdXRpbHMvY3ViaXNtanNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFD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TSxHQUFHLEdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDdEI7YUFDSjtZQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5QkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFLTCxjQUFDO0lBQUQsQ0FBQyxDQXBKNEIsS0FBSyxHQW9KakM7SUFwSlksNkJBQU8sVUFvSm5CO0FBQ0wsQ0FBQyxFQTd6Q2dCLHFCQUFxQixLQUFyQixxQkFBcUIsUUE2ekNyQyIsImZpbGUiOiIvbW9kZWwvY3ViaXNtbW9kZWx1c2VyZGF0YWpzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9tb2RlbC9jdWJpc21tb2RlbHVzZXJkYXRhanNvbi50c1wiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICDjg63jgrDlh7rlipvplqLmlbDjga7oqK3lrppcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8tLS0tLS0tLS0tIOODreOCsOWHuuWKm+ODrOODmeODqyDpgbjmip7poIXnm64g5a6a576pIC0tLS0tLS0tLS1cbi8vLyDoqbPntLDjg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX1ZFUkJPU0U6IG51bWJlciA9IDA7XG4vLy8g44OH44OQ44OD44Kw44Ot44Kw5Ye65Yqb6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9ERUJVRzogbnVtYmVyID0gMTtcbi8vLyBJbmZv44Ot44Kw5Ye65Yqb6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9JTkZPOiBudW1iZXIgPSAyO1xuLy8vIOitpuWRiuODreOCsOWHuuWKm+ioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfV0FSTklORzogbnVtYmVyID0gMztcbi8vLyDjgqjjg6njg7zjg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0VSUk9SOiBudW1iZXIgPSA0O1xuLy8vIOODreOCsOWHuuWKm+OCquODleioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfT0ZGOiBudW1iZXIgPSA1O1xuXG4vKipcbiog44Ot44Kw5Ye65Yqb44Os44OZ44Or6Kit5a6a44CCXG4qXG4qIOW8t+WItueahOOBq+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuWkieOBiOOCi+aZguOBq+Wumue+qeOCkuacieWKueOBq+OBmeOCi+OAglxuKiBDU01fTE9HX0xFVkVMX1ZFUkJPU0Ug772eIENTTV9MT0dfTEVWRUxfT0ZGIOOCkumBuOaKnuOBmeOCi+OAglxuKi9cbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMOiBudW1iZXIgPSBDU01fTE9HX0xFVkVMX1ZFUkJPU0U7XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gXCIuLi90eXBlL2NzbXN0cmluZ1wiO1xuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44OR44Op44Oh44O844K/5ZCN44O744OR44O844OE5ZCN44O7RHJhd2FibGXlkI3jgpLkv53mjIFcbiAgICAgKlxuICAgICAqIOODkeODqeODoeODvOOCv+WQjeODu+ODkeODvOODhOWQjeODu0RyYXdhYmxl5ZCN44KS5L+d5oyB44GZ44KL44Kv44Op44K544CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUlkXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoKTogY3NtU3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogc3RyaW5nIHwgY3NtU3RyaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0eXBlb2YoaWQpID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IG5ldyBjc21TdHJpbmcoaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZOOCkuavlOi8g1xuICAgICAgICAgKiBAcGFyYW0gYyDmr5TovIPjgZnjgotpZFxuICAgICAgICAgKiBAcmV0dXJuIOWQjOOBmOOBquOCieOBsHRydWUs55Ww44Gq44Gj44Gm44GE44KM44GwZmFsc2XjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKGM6IHN0cmluZyB8IGNzbVN0cmluZyB8IEN1YmlzbUlkKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKGMpID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkLmlzRXF1YWwoYy5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBDdWJpc21JZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjLl9pZC5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZOOCkuavlOi8g1xuICAgICAgICAgKiBAcGFyYW0gYyDmr5TovIPjgZnjgotpZFxuICAgICAgICAgKiBAcmV0dXJuIOWQjOOBmOOBquOCieOBsHRydWUs55Ww44Gq44Gj44Gm44GE44KM44GwZmFsc2XjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc05vdEVxdWFsKGM6IHN0cmluZyB8IGNzbVN0cmluZyB8IEN1YmlzbUlkKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKGMpID09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5faWQuaXNFcXVhbChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgQ3ViaXNtSWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMuX2lkLnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfaWQ6IGNzbVN0cmluZzsgLy8gSUTlkI1cbiAgICB9XG5cbiAgICBleHBvcnQgZGVjbGFyZSB0eXBlIEN1YmlzbUlkSGFuZGxlID0gQ3ViaXNtSWQ7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc212ZWN0b3J9IGZyb20gXCIuLi90eXBlL2NzbXZlY3RvclwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWR9IGZyb20gXCIuL2N1YmlzbWlkXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gXCIuLi90eXBlL2NzbXN0cmluZ1wiO1xuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XG5pbXBvcnQgQ3ViaXNtSWQgPSBjdWJpc21pZC5DdWJpc21JZDtcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIElE5ZCN44Gu566h55CGXG4gICAgICpcbiAgICAgKiBJROWQjeOCkueuoeeQhuOBmeOCi+OAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21JZE1hbmFnZXJcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lkcyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtSWQ+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2lkcy5nZXRTaXplKCk7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pZHMuc2V0KGksIHZvaWQgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHMgPSAgbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOCkuODquOCueODiOOBi+OCieeZu+mMslxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaWRzIElE5ZCN44Oq44K544OIXG4gICAgICAgICAqIEBwYXJhbSBjb3VudCBJROOBruWAi+aVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlZ2lzdGVySWRzKGlkczogc3RyaW5nW10gfCBjc21TdHJpbmdbXSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJZChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44KS55m76YyyXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpZCBJROWQjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlZ2lzdGVySWQoaWQ6IHN0cmluZyB8IGNzbVN0cmluZyk6IEN1YmlzbUlkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IEN1YmlzbUlkID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZihpZCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKChyZXN1bHQgPSB0aGlzLmZpbmRJZChpZCkpICE9IG51bGwpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBDdWJpc21JZChpZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faWRzLnB1c2hCYWNrKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJJZChpZC5zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOBi+OCiUlE44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpZCBJROWQjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldElkKGlkOiBjc21TdHJpbmcgfCBzdHJpbmcpOiBDdWJpc21JZFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcklkKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOBi+OCiUlE44Gu56K66KqNXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0V4aXN0KGlkOiBjc21TdHJpbmcgfCBzdHJpbmcpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YoaWQpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5maW5kSWQoaWQpICE9IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNFeGlzdChpZC5zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOBi+OCiUlE44KS5qSc57Si44GZ44KL44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpZCBJROWQjVxuICAgICAgICAgKiBAcmV0dXJuIOeZu+mMsuOBleOCjOOBpuOBhOOCi0lE44CC44Gq44GR44KM44GwTlVMTOOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBmaW5kSWQoaWQ6IHN0cmluZyk6IEN1YmlzbUlkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2lkcy5nZXRTaXplKCk7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9pZHMuYXQoaSkuZ2V0U3RyaW5nKCkuaXNFcXVhbChpZCkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWRzLmF0KGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9pZHM6IGNzbVZlY3RvcjxDdWJpc21JZD47ICAgLy8g55m76Yyy44GV44KM44Gm44GE44KLSUTjga7jg6rjgrnjg4hcbiAgICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29yZS9saXZlMmRjdWJpc21jb3JlLmQudHNcIiAvPlxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtanNvbn0gZnJvbSBcIi4vdXRpbHMvY3ViaXNtanNvblwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWRtYW5hZ2VyfSBmcm9tIFwiLi9pZC9jdWJpc21pZG1hbmFnZXJcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbXJlbmRlcmVyfSBmcm9tIFwiLi9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXJcIjtcbmltcG9ydCB7Q3ViaXNtTG9nSW5mbywgQ3ViaXNtTG9nV2FybmluZywgQ1NNX0FTU0VSVH0gZnJvbSBcIi4vdXRpbHMvY3ViaXNtZGVidWdcIjtcbmltcG9ydCBWYWx1ZSA9IGN1YmlzbWpzb24uVmFsdWU7XG5pbXBvcnQgQ3ViaXNtSWRNYW5hZ2VyID0gY3ViaXNtaWRtYW5hZ2VyLkN1YmlzbUlkTWFuYWdlcjtcbmltcG9ydCBDdWJpc21SZW5kZXJlciA9IGN1YmlzbXJlbmRlcmVyLkN1YmlzbVJlbmRlcmVyO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RydG9kKHM6IHN0cmluZywgZW5kUHRyOiBzdHJpbmdbXSk6IG51bWJlclxue1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcbiAgICBmb3IobGV0IGk6IG51bWJlciA9IDE7IDsgaSsrKVxuICAgIHtcbiAgICAgICAgbGV0IHRlc3RDOiBzdHJpbmcgPSBzLnNsaWNlKGkgLSAxLCBpKTtcblxuICAgICAgICAvLyDmjIfmlbDjg7vjg57jgqTjg4rjgrnjga7lj6/og73mgKfjgYzjgYLjgovjga7jgafjgrnjgq3jg4Pjg5fjgZnjgotcbiAgICAgICAgaWYodGVzdEM9PSdlJyB8fCB0ZXN0Qz09Jy0nIHx8IHRlc3RDID09ICdFJylcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxu44CA44CA44CAICAvLyDmloflrZfliJfjga7nr4Tlm7LjgpLluoPjgZLjgabjgYTjgY9cbiAgICAgICAgbGV0IHRlc3Q6IHN0cmluZyA9IHMuc3Vic3RyaW5nKDAsIGkpO1xuICAgICAgICBsZXQgbnVtYmVyOiBudW1iZXIgPSBOdW1iZXIodGVzdCk7XG4gICAgICAgIGlmKGlzTmFOKG51bWJlcikpXG4gICAgICAgIHtcbuOAgOOAgOOAgOOAgCAgICAvLyDmlbDlgKTjgajjgZfjgaboqo3orZjjgafjgY3jgarjgY/jgarjgaPjgZ/jga7jgafntYLkuoZcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbuOAgOOAgOOAgCAvLyDmnIDlvozjgavmlbDlgKTjgajjgZfjgabjgafjgY3jgZ9pbmRleOOCkuagvOe0jeOBl+OBpuOBiuOBj1xuICAgICAgICBpbmRleCA9IGk7XG4gICAgfVxuICAgIGxldCBkID0gcGFyc2VGbG9hdChzKTsgIC8vIOODkeODvOOCueOBl+OBn+aVsOWApFxuXG4gICAgaWYoaXNOYU4oZCkpXG4gICAge1xu44CA44CA44CA44CAIC8vIOaVsOWApOOBqOOBl+OBpuiqjeitmOOBp+OBjeOBquOBj+OBquOBo+OBn+OBruOBp+e1guS6hlxuICAgICAgICBkID0gTmFOO1xuICAgIH1cblxuICAgIGVuZFB0clswXSA9IHMuc2xpY2UoaW5kZXgpO+OAgC8vIOW+jOe2muOBruaWh+Wtl+WIl1xuXG4gICAgcmV0dXJuIGQ7XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLy8g44OV44Kh44Kk44Or44K544Kz44O844OX44Gu5aSJ5pWw44KS5Yid5pyf5YyWXG5cbiAgICBsZXQgc19pc1N0YXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgc19pc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IHNfb3B0aW9uOiBPcHRpb24gPSBudWxsO1xuICAgIGxldCBzX2N1YmlzbUlkTWFuYWdlcjogQ3ViaXNtSWRNYW5hZ2VyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEZyYW1ld29ya+WGheOBp+S9v+OBhuWumuaVsOOBruWuo+iogFxuICAgICAqL1xuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ29uc3RhbnRcbiAgICB7XG4gICAgICAgIGV4cG9ydCBjb25zdCB2ZXJ0ZXhPZmZzZXQ6IG51bWJlciA9IDA7ICAgICAvLyDjg6Hjg4Pjgrfjg6XpoILngrnjga7jgqrjg5Xjgrvjg4Pjg4jlgKRcbiAgICAgICAgZXhwb3J0IGNvbnN0IHZlcnRleFN0ZXA6IG51bWJlciA9IDI7ICAgICAgIC8vIOODoeODg+OCt+ODpemggueCueOBruOCueODhuODg+ODl+WApFxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBjc21EZWxldGU8VD4oYWRkcmVzczogVCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKCFhZGRyZXNzKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhZGRyZXNzID0gdm9pZCAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpdmUyRCBDdWJpc20gU0RLIE9yaWdpbmFsIFdvcmtmbG93IFNES+OBruOCqOODs+ODiOODquODneOCpOODs+ODiFxuICAgICAqIOWIqeeUqOmWi+Wni+aZguOBr0N1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCnjgpLlkbzjgbPjgIFDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgp44Gn57WC5LqG44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUZyYW1ld29ya1xuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga5BUEnjgpLkvb/nlKjlj6/og73jgavjgZnjgovjgIJcbiAgICAgICAgICogIEFQSeOCkuWun+ihjOOBmeOCi+WJjeOBq+W/heOBmuOBk+OBrumWouaVsOOCkuWun+ihjOOBmeOCi+OBk+OBqOOAglxuICAgICAgICAgKiAg5LiA5bqm5rqW5YKZ44GM5a6M5LqG44GX44Gm5Lul6ZmN44Gv44CB5YaN44Gz5a6f6KGM44GX44Gm44KC5YaF6YOo5Yem55CG44GM44K544Kt44OD44OX44GV44KM44G+44GZ44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAgICBvcHRpb24gICAgICBPcHRpb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiAgIOa6luWCmeWHpueQhuOBjOWujOS6huOBl+OBn+OCiXRydWXjgYzov5Tjgorjgb7jgZnjgIJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhcnRVcChvcHRpb246IE9wdGlvbiA9IG51bGwpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHNfaXNTdGFydGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuc3RhcnRVcCgpIGlzIGFscmVhZHkgZG9uZS5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNfaXNTdGFydGVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzX29wdGlvbiA9IG9wdGlvbjtcblxuICAgICAgICAgICAgaWYoc19vcHRpb24gIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBMaXZlMkRDdWJpc21Db3JlLkxvZ2dpbmcuY3NtU2V0TG9nRnVuY3Rpb24oc19vcHRpb24ubG9nRnVuY3Rpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzX2lzU3RhcnRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIExpdmUyRCBDdWJpc20gQ29yZeODkOODvOOCuOODp+ODs+aDheWgseOCkuihqOekulxuICAgICAgICAgICAgaWYoc19pc1N0YXJ0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyc2lvbjogbnVtYmVyID0gTGl2ZTJEQ3ViaXNtQ29yZS5WZXJzaW9uLmNzbUdldFZlcnNpb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYWpvcjogbnVtYmVyID0gKCh2ZXJzaW9uICYgMHhGRjAwMDAwMCkgPj4gMjQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbm9yOiBudW1iZXIgPSAoKHZlcnNpb24gJiAweDAwRkYwMDAwKSA+PiAxNik7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF0Y2g6IG51bWJlciA9ICgodmVyc2lvbiAmIDB4MDAwMEZGRkYpKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJzaW9uTnVtYmVyOiBudW1iZXIgPSB2ZXJzaW9uO1xuXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhgTGl2ZTJEIEN1YmlzbSBDb3JlIHZlcnNpb246IHswfS57MX0uezJ9ICh7M30pYCxcbiAgICAgICAgICAgICAgICAgICAgKCcwMCcgKyBtYWpvcikuc2xpY2UoLTIpLFxuICAgICAgICAgICAgICAgICAgICAoJzAwJyArIG1pbm9yKS5zbGljZSgtMiksXG4gICAgICAgICAgICAgICAgICAgICgnMDAwMCcgKyBwYXRjaCkuc2xpY2UoLTQpLFxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uTnVtYmVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5zdGFydFVwKCkgaXMgY29tcGxldGUuXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RhcnRVcCgp44Gn5Yid5pyf5YyW44GX44GfQ3ViaXNtRnJhbWV3b3Jr44Gu5ZCE44OR44Op44Oh44O844K/44KS44Kv44Oq44Ki44GX44G+44GZ44CCXG4gICAgICAgICAqIERpc3Bvc2UoKeOBl+OBn0N1YmlzbUZyYW1ld29ya+OCkuWGjeWIqeeUqOOBmeOCi+mam+OBq+WIqeeUqOOBl+OBpuOBj+OBoOOBleOBhOOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjbGVhblVwKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgc19pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICAgICAgc19vcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvlhoXjga7jg6rjgr3jg7zjgrnjgpLliJ3mnJ/ljJbjgZfjgabjg6Ljg4fjg6vjgpLooajnpLrlj6/og73jgarnirbmhYvjgavjgZfjgb7jgZnjgII8YnI+XG4gICAgICAgICAqICAgICDlho3luqZJbml0aWFsaXplKCnjgZnjgovjgavjga/lhYjjgatEaXNwb3NlKCnjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIENTTV9BU1NFUlQoc19pc1N0YXJ0ZWQpO1xuICAgICAgICAgICAgaWYoIXNfaXNTdGFydGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsgaXMgbm90IHN0YXJ0ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tIHNfaXNJbml0aWFsaXplZOOBq+OCiOOCi+mAo+e2muWIneacn+WMluOCrOODvOODiSAtLS1cbiAgICAgICAgICAgIC8vIOmAo+e2muOBl+OBpuODquOCveODvOOCueeiuuS/neOBjOihjOOCj+OCjOOBquOBhOOCiOOBhuOBq+OBmeOCi+OAglxuICAgICAgICAgICAgLy8g5YaN5bqmSW5pdGlhbGl6ZSgp44GZ44KL44Gr44Gv5YWI44GrRGlzcG9zZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KL44CCXG4gICAgICAgICAgICBpZiAoc19pc0luaXRpYWxpemVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgpIHNraXBwZWQsIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8tLS0tIHN0YXRpYyDliJ3mnJ/ljJYgLS0tLVxuICAgICAgICAgICAgVmFsdWUuc3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKTtcblxuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIgPSBuZXcgQ3ViaXNtSWRNYW5hZ2VyKCk7XG5cbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgpIGlzIGNvbXBsZXRlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr5YaF44Gu5YWo44Gm44Gu44Oq44K944O844K544KS6Kej5pS+44GX44G+44GZ44CCXG4gICAgICAgICAqICAgICAg44Gf44Gg44GX44CB5aSW6YOo44Gn56K65L+d44GV44KM44Gf44Oq44K944O844K544Gr44Gk44GE44Gm44Gv6Kej5pS+44GX44G+44Gb44KT44CCXG4gICAgICAgICAqICAgICAg5aSW6YOo44Gn6YGp5YiH44Gr56C05qOE44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGRpc3Bvc2UoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBDU01fQVNTRVJUKHNfaXNTdGFydGVkKTtcbiAgICAgICAgICAgIGlmKCFzX2lzU3RhcnRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrIGlzIG5vdCBzdGFydGVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLSBzX2lzSW5pdGlhbGl6ZWTjgavjgojjgovmnKrliJ3mnJ/ljJbop6PmlL7jgqzjg7zjg4kgLS0tXG4gICAgICAgICAgICAvLyBkaXNwb3NlKCnjgZnjgovjgavjga/lhYjjgatpbml0aWFsaXplKCnjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgovjgIJcbiAgICAgICAgICAgIGlmKCFzX2lzSW5pdGlhbGl6ZWQpICAgIC8vIGZhbHNlLi4u44Oq44K944O844K55pyq56K65L+d44Gu5aC05ZCIXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCkgc2tpcHBlZCwgbm90IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFZhbHVlLnN0YXRpY1JlbGVhc2VOb3RGb3JDbGllbnRDYWxsKCk7XG5cbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyID0gbnVsbDtcblxuICAgICAgICAgICAgLy8g44Os44Oz44OA44Op44Gu6Z2Z55qE44Oq44K944O844K577yI44K344Kn44O844OA44OX44Ot44Kw44Op44Og5LuW77yJ44KS6Kej5pS+44GZ44KLXG4gICAgICAgICAgICBDdWJpc21SZW5kZXJlci5zdGF0aWNSZWxlYXNlKCk7XG5cbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLmRpc3Bvc2UoKSBpcyBjb21wbGV0ZS5cIik7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr44GuQVBJ44KS5L2/55So44GZ44KL5rqW5YKZ44GM5a6M5LqG44GX44Gf44GL44Gp44GG44GLXG4gICAgICAgICAqIEByZXR1cm4gQVBJ44KS5L2/55So44GZ44KL5rqW5YKZ44GM5a6M5LqG44GX44Gm44GE44KM44GwdHJ1ZeOBjOi/lOOCiuOBvuOBmeOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBpc1N0YXJ0ZWQoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+OBruODquOCveODvOOCueWIneacn+WMluOBjOOBmeOBp+OBq+ihjOOCj+OCjOOBpuOBhOOCi+OBi+OBqeOBhuOBi1xuICAgICAgICAgKiBAcmV0dXJuIOODquOCveODvOOCueeiuuS/neOBjOWujOS6huOBl+OBpuOBhOOCjOOBsHRydWXjgYzov5Tjgorjgb7jgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNJbml0aWFsaXplZCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBzX2lzSW5pdGlhbGl6ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29yZSBBUEnjgavjg5DjgqTjg7Pjg4njgZfjgZ/jg63jgrDplqLmlbDjgpLlrp/ooYzjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHByYXJhbSBtZXNzYWdlIOODreOCsOODoeODg+OCu+ODvOOCuFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjb3JlTG9nRnVuY3Rpb24obWVzc2FnZTogc3RyaW5nKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gaWYgbG9nZ2luZyBub3QgcG9zc2libGUuXG4gICAgICAgICAgICBpZighTGl2ZTJEQ3ViaXNtQ29yZS5Mb2dnaW5nLmNzbUdldExvZ0Z1bmN0aW9uKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMaXZlMkRDdWJpc21Db3JlLkxvZ2dpbmcuY3NtR2V0TG9nRnVuY3Rpb24oKShtZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7jg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjga7lgKTjgpLov5TjgZnjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiAg54++5Zyo44Gu44Ot44Kw5Ye65Yqb44Os44OZ44Or6Kit5a6a44Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGdldExvZ2dpbmdMZXZlbCgpOiBMb2dMZXZlbFxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoc19vcHRpb24gIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc19vcHRpb24ubG9nZ2luZ0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIExvZ0xldmVsLkxvZ0xldmVsX09mZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROODnuODjeODvOOCuOODo+OBruOCpOODs+OCueOCv+ODs+OCueOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIEN1YmlzbU1hbmFnZXLjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SWRNYW5hZ2VyKCk6IEN1YmlzbUlkTWFuYWdlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gc19jdWJpc21JZE1hbmFnZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6Z2Z55qE44Kv44Op44K544Go44GX44Gm5L2/55So44GZ44KLXG4gICAgICAgICAqIOOCpOODs+OCueOCv+ODs+OCueWMluOBleOBm+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3B0aW9uXG57XG4gICAgbG9nRnVuY3Rpb246IExpdmUyREN1YmlzbUNvcmUuY3NtTG9nRnVuY3Rpb247ICAgLy8g44Ot44Kw5Ye65Yqb44Gu6Zai5pWw44Kq44OW44K444Kn44Kv44OIXG4gICAgbG9nZ2luZ0xldmVsOiBMb2dMZXZlbDsgIC8vIOODreOCsOWHuuWKm+ODrOODmeODq+OBruioreWumlxufVxuXG4vKipcbiAqIOODreOCsOWHuuWKm+OBruODrOODmeODq1xuICovXG5leHBvcnQgZW51bSBMb2dMZXZlbFxue1xuICAgIExvZ0xldmVsX1ZlcmJvc2UgPSAwLCAgIC8vIOips+e0sOODreOCsFxuICAgIExvZ0xldmVsX0RlYnVnLCAgICAgICAgIC8vIOODh+ODkOODg+OCsOODreOCsFxuICAgIExvZ0xldmVsX0luZm8sICAgICAgICAgIC8vIEluZm/jg63jgrBcbiAgICBMb2dMZXZlbF9XYXJuaW5nLCAgICAgICAvLyDorablkYrjg63jgrBcbiAgICBMb2dMZXZlbF9FcnJvciwgICAgICAgICAvLyDjgqjjg6njg7zjg63jgrBcbiAgICBMb2dMZXZlbF9PZmYgICAgICAgICAgICAvLyDjg63jgrDlh7rlipvnhKHlirlcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICogNHg044Gu6KGM5YiXXG4gICAgICpcbiAgICAgKiA0eDTooYzliJfjga7kvr/liKnjgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTWF0cml4NDRcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyID0gbmV3IEZsb2F0MzJBcnJheSgxNik7ICAgIC8vIDQgKiA044Gu44K144Kk44K6XG4gICAgICAgICAgICB0aGlzLmxvYWRJZGVudGl0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWPl+OBkeWPluOBo+OBn++8kuOBpOOBruihjOWIl+OBruS5l+eul+OCkuihjOOBhuOAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gYSDooYzliJdhXG4gICAgICAgICAqIEBwYXJhbSBiIOihjOWIl2JcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjga7ooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHkoYTogRmxvYXQzMkFycmF5LCBiOiBGbG9hdDMyQXJyYXksIGRzdDogRmxvYXQzMkFycmF5KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgYzogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBuOiBudW1iZXIgPSA0O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgajogbnVtYmVyID0gMDsgaiA8IG47ICsrailcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgazogbnVtYmVyID0gMDsgayA8IG47ICsraylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY1tqICsgaSAqIDRdICs9IGFbayArIGkgKiA0XSAqIGJbaiArIGsgKiA0XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMTY7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSBjW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWNmOS9jeihjOWIl+OBq+WIneacn+WMluOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGxvYWRJZGVudGl0eSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMS4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMS4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRNYXRyaXgoYyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGM5YiX44KS6Kit5a6aXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB0ciAxNuWAi+OBrua1ruWLleWwj+aVsOeCueaVsOOBp+ihqOOBleOCjOOCizR4NOOBruihjOWIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldE1hdHJpeCh0cjogRmxvYXQzMkFycmF5KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTY7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cltpXSA9IHRyW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihjOWIl+OCkua1ruWLleWwj+aVsOeCueaVsOOBrumFjeWIl+OBp+WPluW+l1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIDE25YCL44Gu5rWu5YuV5bCP5pWw54K55pWw44Gn6KGo44GV44KM44KLNHg044Gu6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0QXJyYXkoKTogRmxvYXQzMkFycmF5XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu5ouh5aSn546H44KS5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gWOi7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNjYWxlWCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7mi6HlpKfnjofjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBZ6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2NhbGVZKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbNV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBruenu+WLlemHj+OCkuWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIFjou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRUcmFuc2xhdGVYKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7np7vli5Xph4/jgpLlj5blvpdcbiAgICAgICAgICogQHJldHVybiBZ6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VHJhbnNsYXRlWSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzEzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6KiI566XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBzcmMgWOi7uOOBruWApFxuICAgICAgICAgKiBAcmV0dXJuIOePvuWcqOOBruihjOWIl+OBp+ioiOeul+OBleOCjOOBn1jou7jjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2Zvcm1YKHNyYzogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clswXSAqIHNyYyArIHRoaXMuX3RyWzEyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6KiI566XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBzcmMgWei7uOOBruWApFxuICAgICAgICAgKiBAcmV0dXJu44CA54++5Zyo44Gu6KGM5YiX44Gn6KiI566X44GV44KM44GfWei7uOOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zZm9ybVkoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzVdICogc3JjICsgdGhpcy5fdHJbMTNdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafpgIboqIjnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnZlcnRUcmFuc2Zvcm1YKHNyYzogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAoc3JjIC0gdGhpcy5fdHJbMTJdKSAvIHRoaXMuX3RyWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafpgIboqIjnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnZlcnRUcmFuc2Zvcm1ZKHNyYzogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAoc3JjIC0gdGhpcy5fdHJbMTNdKSAvIHRoaXMuX3RyWzVdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkui1t+eCueOBq+OBl+OBpuenu+WLlVxuICAgICAgICAgKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLotbfngrnjgavjgZfjgabnm7jlr77nmoTjgavnp7vli5XjgZnjgovjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlUmVsYXRpdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB0cjE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAxLjAsICAgIDAuMCwgICAgMC4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMS4wLCAgICAwLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDEuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICB4LCAgICAgIHksICAgICAgMC4wLCAgICAxLjBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseSh0cjEsIHRoaXMuX3RyLCB0aGlzLl90cik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS56e75YuVXG4gICAgICAgICAqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqIEBwYXJhbSB5IHnou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEyXSA9IHg7XG4gICAgICAgICAgICB0aGlzLl90clsxM10gPSB5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrljou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVgoeDogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90clsxMl0gPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrlnou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVkoeTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90clsxM10gPSB5O1xuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5ouh5aSn546H44KS55u45a++55qE44Gr6Kit5a6a44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7mi6HlpKfnjodcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNjYWxlUmVsYXRpdmUoeDogbnVtYmVyLCB5Om51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHRyMTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHgsICAgICAgMC4wLCAgICAwLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICB5LCAgICAgIDAuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMS4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAwLjAsICAgIDEuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KHRyMSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7mi6HlpKfnjofjgpLmjIflrprjgZfjgZ/lgI3njofjgavoqK3lrprjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyWzBdID0geDtcbiAgICAgICAgICAgIHRoaXMuX3RyWzVdID0geTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjgavooYzliJfjgpLkuZfnrpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIG0g6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgbXVsdGlwbHlCeU1hdHJpeChtOiBDdWJpc21NYXRyaXg0NCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkobS5nZXRBcnJheSgpLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCquODluOCuOOCp+OCr+ODiOOBruOCs+ODlOODvOOCkueUn+aIkOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNsb25lKCk6IEN1YmlzbU1hdHJpeDQ0XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjbG9uZU1hdHJpeDogQ3ViaXNtTWF0cml4NDQgPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fdHIubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xvbmVNYXRyaXguX3RyW2ldID0gdGhpcy5fdHJbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZU1hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBfdHI6IEZsb2F0MzJBcnJheTsgICAgLy8gNHg06KGM5YiX44OH44O844K/XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtanNvbn0gZnJvbSBcIi4uL3V0aWxzL2N1YmlzbWpzb25cIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkfSBmcm9tIFwiLi4vaWQvY3ViaXNtaWRcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWZyYW1ld29ya30gZnJvbSBcIi4uL2xpdmUyZGN1YmlzbWZyYW1ld29ya1wiO1xuaW1wb3J0IEN1YmlzbUZyYW1ld29yayA9IGN1YmlzbWZyYW1ld29yay5DdWJpc21GcmFtZXdvcms7XG5pbXBvcnQgQ3ViaXNtSWRIYW5kbGUgPSBjdWJpc21pZC5DdWJpc21JZEhhbmRsZTtcbmltcG9ydCBDdWJpc21Kc29uID0gY3ViaXNtanNvbi5DdWJpc21Kc29uO1xuXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgY29uc3QgTWV0YTogc3RyaW5nID0gXCJNZXRhXCI7XG4gICAgY29uc3QgVXNlckRhdGFDb3VudDogc3RyaW5nID0gXCJVc2VyRGF0YUNvdW50XCI7XG4gICAgY29uc3QgVG90YWxVc2VyRGF0YVNpemU6IHN0cmluZyA9IFwiVG90YWxVc2VyRGF0YVNpemVcIjtcbiAgICBjb25zdCBVc2VyRGF0YTogc3RyaW5nID0gXCJVc2VyRGF0YVwiO1xuICAgIGNvbnN0IFRhcmdldDogc3RyaW5nID0gXCJUYXJnZXRcIjtcbiAgICBjb25zdCBJZDogc3RyaW5nID0gXCJJZFwiO1xuICAgIGNvbnN0IFZhbHVlOiBzdHJpbmcgPSBcIlZhbHVlXCI7XG5cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTW9kZWxVc2VyRGF0YUpzb25cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciAgICB1c2VyZGF0YTMuanNvbuOBjOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSAgICAgIOODkOODg+ODleOCoeOBruOCteOCpOOCulxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGJ1ZmZlcjogQXJyYXlCdWZmZXIsIHNpemU6IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fanNvbiA9IEN1YmlzbUpzb24uY3JlYXRlKGJ1ZmZlciwgc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIEN1YmlzbUpzb24uZGVsZXRlKHRoaXMuX2pzb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODpuODvOOCtuODvOODh+ODvOOCv+WAi+aVsOOBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOODpuODvOOCtuODvOODh+ODvOOCv+OBruWAi+aVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFVzZXJEYXRhQ291bnQoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKE1ldGEpLmdldFZhbHVlQnlTdHJpbmcoVXNlckRhdGFDb3VudCkudG9JbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6bjg7zjgrbjg7zjg4fjg7zjgr/nt4/mloflrZfliJfmlbDjga7lj5blvpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiDjg6bjg7zjgrbjg7zjg4fjg7zjgr/nt4/mloflrZfliJfmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRUb3RhbFVzZXJEYXRhU2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoTWV0YSkuZ2V0VmFsdWVCeVN0cmluZyhUb3RhbFVzZXJEYXRhU2l6ZSkudG9JbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6bjg7zjgrbjg7zjg4fjg7zjgr/jga7jgr/jgqTjg5fjga7lj5blvpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiDjg6bjg7zjgrbjg7zjg4fjg7zjgr/jga7jgr/jgqTjg5dcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRVc2VyRGF0YVRhcmdldFR5cGUoaTogbnVtYmVyKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKFVzZXJEYXRhKS5nZXRWYWx1ZUJ5SW5kZXgoaSkuZ2V0VmFsdWVCeVN0cmluZyhUYXJnZXQpLmdldFJhd1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODpuODvOOCtuODvOODh+ODvOOCv+OBruOCv+ODvOOCsuODg+ODiElE44Gu5Y+W5b6XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpIOOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOODpuODvOOCtuODvOODh+ODvOOCv+OCv+ODvOOCsuODg+ODiElEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VXNlckRhdGFJZChpOiBudW1iZXIpOiBDdWJpc21JZEhhbmRsZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoVXNlckRhdGEpLmdldFZhbHVlQnlJbmRleChpKS5nZXRWYWx1ZUJ5U3RyaW5nKElkKS5nZXRSYXdTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Om44O844K244O844OH44O844K/44Gu5paH5a2X5YiX44Gu5Y+W5b6XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpIOOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOODpuODvOOCtuODvOODh+ODvOOCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFVzZXJEYXRhVmFsdWUoaTogbnVtYmVyKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKFVzZXJEYXRhKS5nZXRWYWx1ZUJ5SW5kZXgoaSkuZ2V0VmFsdWVCeVN0cmluZyhWYWx1ZSkuZ2V0UmF3U3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9qc29uOiBDdWJpc21Kc29uO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1hdHJpeDQ0fSBmcm9tICcuLi9tYXRoL2N1YmlzbW1hdHJpeDQ0JztcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1vZGVsfSBmcm9tICcuLi9tb2RlbC9jdWJpc21tb2RlbCc7XG5pbXBvcnQgQ3ViaXNtTW9kZWwgPSBjdWJpc21tb2RlbC5DdWJpc21Nb2RlbDtcbmltcG9ydCBDdWJpc21NYXRyaXg0NCA9IGN1YmlzbW1hdHJpeDQ0LkN1YmlzbU1hdHJpeDQ0O1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIOODouODh+ODq+aPj+eUu+OCkuWHpueQhuOBmeOCi+ODrOODs+ODgOODqVxuICAgICAqXG4gICAgICog44K144OW44Kv44Op44K544Gr55Kw5aKD5L6d5a2Y44Gu5o+P55S75ZG95Luk44KS6KiY6L+w44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEN1YmlzbVJlbmRlcmVyXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K544KS55Sf5oiQ44GX44Gm5Y+W5b6X44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4g44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOiBDdWJpc21SZW5kZXJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLop6PmlL7jgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKHJlbmRlcmVyOiBDdWJpc21SZW5kZXJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgcmVuZGVyZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBruWIneacn+WMluWHpueQhuOCkuWun+ihjOOBmeOCi1xuICAgICAgICAgKiDlvJXmlbDjgavmuKHjgZfjgZ/jg6Ljg4fjg6vjgYvjgonjg6zjg7Pjg4Djg6njga7liJ3mnJ/ljJblh6bnkIbjgavlv4XopoHjgarmg4XloLHjgpLlj5bjgorlh7rjgZnjgZPjgajjgYzjgafjgY3jgotcbiAgICAgICAgICogQHBhcmFtIG1vZGVsIOODouODh+ODq+OBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGluaXRpYWxpemUobW9kZWw6IEN1YmlzbU1vZGVsKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbCA9IG1vZGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OCkuaPj+eUu+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGRyYXdNb2RlbCgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0TW9kZWwoKSA9PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuZG9EcmF3TW9kZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiX44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqIOmFjeWIl+OBr+ikh+ijveOBleOCjOOCi+OBruOBp+OAgeWFg+OBrumFjeWIl+OBr+WkluOBp+egtOajhOOBl+OBpuiJr+OBhFxuICAgICAgICAgKiBAcGFyYW0gbWF0cml4NDQgTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldE12cE1hdHJpeChtYXRyaXg0NDogQ3ViaXNtTWF0cml4NDQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NC5zZXRNYXRyaXgobWF0cml4NDQuZ2V0QXJyYXkoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNdnBNYXRyaXgoKTogQ3ViaXNtTWF0cml4NDRcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX212cE1hdHJpeDR4NDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7oibLjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICog5ZCE6ImyMC4wfjEuMOOBrumWk+OBp+aMh+WumuOBmeOCi++8iDEuMOOBjOaomea6luOBrueKtuaFi++8iVxuICAgICAgICAgKiBAcGFyYW0gcmVkIOi1pOODgeODo+ODs+ODjeODq+OBruWApFxuICAgICAgICAgKiBAcGFyYW0gZ3JlZW4g57eR44OB44Oj44Oz44ON44Or44Gu5YCkXG4gICAgICAgICAqIEBwYXJhbSBibHVlIOmdkuODgeODo+ODs+ODjeODq+OBruWApFxuICAgICAgICAgKiBAcGFyYW0gYWxwaGEgzrHjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRNb2RlbENvbG9yKHJlZDogbnVtYmVyLCBncmVlbjogbnVtYmVyLCBibHVlOiBudW1iZXIsIGFscGhhOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlZCA8IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWQgPSAwLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHJlZCA+IDEuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWQgPSAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGdyZWVuIDwgMC4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdyZWVuID0gMC4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihncmVlbiA+IDEuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBncmVlbiA9IDEuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoYmx1ZSA8IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBibHVlID0gMC4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihibHVlID4gMS4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJsdWUgPSAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGFscGhhIDwgMC4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFscGhhID0gMC4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihhbHBoYSA+IDEuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IDEuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5SID0gcmVkO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5HID0gZ3JlZW47XG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLkIgPSBibHVlO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5BID0gYWxwaGE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or44Gu6Imy44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIOWQhOiJsjAuMH4xLjDjga7plpPjgafmjIflrprjgZnjgosoMS4w44GM5qiZ5rqW44Gu54q25oWLKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIFJHQkHjga7jgqvjg6njg7zmg4XloLFcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNb2RlbENvbG9yKCk6IEN1YmlzbVRleHR1cmVDb2xvclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9tb2RlbENvbG9yKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5LmX566X5riI44G/zrHjga7mnInlirnjg7vnhKHlirnjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICog5pyJ5Yq544Gr44GZ44KL44Gq44KJdHJ1ZeOAgeeEoeWKueOBq+OBmeOCi+OBquOCiWZhbHNl44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0SXNQcmVtdWx0aXBsaWVkQWxwaGEoZW5hYmxlOiBib29sZWFuKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pc1ByZW11bHRpcGxpZWRBbHBoYSA9IGVuYWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDkuZfnrpfmuIjjgb/OseOBruacieWKueODu+eEoeWKueOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5LmX566X5riI44G/44GuzrHmnInlirlcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDkuZfnrpfmuIjjgb/jga7OseeEoeWKuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzUHJlbXVsdGlwbGllZEFscGhhKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzUHJlbXVsdGlwbGllZEFscGhhO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCq+ODquODs+OCsO+8iOeJh+mdouaPj+eUu++8ieOBruacieWKueODu+eEoeWKueOCkuOCu+ODg+ODiOOBmeOCi+OAglxuICAgICAgICAgKiDmnInlirnjgavjgZnjgovjgarjgol0cnVl44CB54Sh5Yq544Gr44GZ44KL44Gq44KJZmFsc2XjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRJc0N1bGxpbmcoY3VsbGluZzogYm9vbGVhbik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faXNDdWxsaW5nID0gY3VsbGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqvjg6rjg7PjgrDvvIjniYfpnaLmj4/nlLvvvInjga7mnInlirnjg7vnhKHlirnjgpLlj5blvpfjgZnjgovjgIJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOOCq+ODquODs+OCsOacieWKuVxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOOCq+ODquODs+OCsOeEoeWKuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQ3VsbGluZygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0N1bGxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OG44Kv44K544OB44Oj44Gu55Ww5pa55oCn44OV44Kj44Or44K/44Oq44Oz44Kw44Gu44OR44Op44Oh44O844K/44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+WApOOBruW9semfv+W6puOBr+ODrOODs+ODgOODqeOBruWun+ijheOBq+S+neWtmOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gbiDjg5Hjg6njg6Hjg7zjgr/jga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRBbmlzb3Ryb3B5KG46IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fYW5pc29ydG9weSA9IG47XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OG44Kv44K544OB44Oj44Gu55Ww5pa55oCn44OV44Kj44Or44K/44Oq44Oz44Kw44Gu44OR44Op44Oh44O844K/44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g55Ww5pa55oCn44OV44Kj44Or44K/44Oq44Oz44Kw44Gu44OR44Op44Oh44O844K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0QW5pc290cm9weSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FuaXNvcnRvcHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Oq44Oz44Kw44GZ44KL44Oi44OH44Or44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44Os44Oz44OA44Oq44Oz44Kw44GZ44KL44Oi44OH44OrXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TW9kZWwoKTogQ3ViaXNtTW9kZWxcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faXNDdWxsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9pc1ByZW11bHRpcGxpZWRBbHBoYSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fYW5pc29ydG9weSA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IgPSBuZXcgQ3ViaXNtVGV4dHVyZUNvbG9yKCk7XG5cbiAgICAgICAgICAgIC8vIOWNmOS9jeihjOWIl+OBq+WIneacn+WMllxuICAgICAgICAgICAgdGhpcy5fbXZwTWF0cml4NHg0ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XG4gICAgICAgICAgICB0aGlzLl9tdnBNYXRyaXg0eDQubG9hZElkZW50aXR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or5o+P55S744Gu5a6f6KOFXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZG9EcmF3TW9kZWwoKTogdm9pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5o+P55S744Kq44OW44K444Kn44Kv44OI77yI44Ki44O844OI44Oh44OD44K344Ol77yJ44KS5o+P55S744GZ44KLXG4gICAgICAgICAqIOODneODquOCtOODs+ODoeODg+OCt+ODpeOBqOODhuOCr+OCueODgeODo+eVquWPt+OCkuOCu+ODg+ODiOOBp+a4oeOBmeOAglxuICAgICAgICAgKiBAcGFyYW0gdGV4dHVyZU5vIOaPj+eUu+OBmeOCi+ODhuOCr+OCueODgeODo+eVquWPt1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXhDb3VudCDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHBhcmFtIHZlcnRleENvdW50IOODneODquOCtOODs+ODoeODg+OCt+ODpeOBrumggueCueaVsFxuICAgICAgICAgKiBAcGFyYW0gaW5kZXhBcnJheSDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6XpoILngrnjga7jgqTjg7Pjg4fjg4Pjgq/jgrnphY3liJdcbiAgICAgICAgICogQHBhcmFtIHZlcnRleEFycmF5IOODneODquOCtOODs+ODoeODg+OCt+ODpeOBrumggueCuemFjeWIl1xuICAgICAgICAgKiBAcGFyYW0gdXZBcnJheSB1dumFjeWIl1xuICAgICAgICAgKiBAcGFyYW0gb3BhY2l0eSDkuI3pgI/mmI7luqZcbiAgICAgICAgICogQHBhcmFtIGNvbG9yQmxlbmRNb2RlIOOCq+ODqeODvOODluODrOODs+ODh+OCo+ODs+OCsOOBruOCv+OCpOODl1xuICAgICAgICAgKiBAcGFyYW0gaW52ZXJ0ZWRNYXNrIOODnuOCueOCr+S9v+eUqOaZguOBruODnuOCueOCr+OBruWPjei7ouS9v+eUqFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGRyYXdNZXNoKHRleHR1cmVObzogbnVtYmVyLCBpbmRleENvdW50OiBudW1iZXIsIHZlcnRleENvdW50OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleEFycmF5OiBVaW50MTZBcnJheSwgdmVydGV4QXJyYXk6IEZsb2F0MzJBcnJheSwgdXZBcnJheTogRmxvYXQzMkFycmF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogbnVtYmVyLCBjb2xvckJsZW5kTW9kZTogQ3ViaXNtQmxlbmRNb2RlLCBpbnZlcnRlZE1hc2s6IGJvb2xlYW4pOiB2b2lkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njgYzkv53mjIHjgZnjgovpnZnnmoTjgarjg6rjgr3jg7zjgrnjgpLplovmlL7jgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljUmVsZWFzZTogRnVuY3Rpb247XG5cbiAgICAgICAgcHJvdGVjdGVkIF9tdnBNYXRyaXg0eDQ6IEN1YmlzbU1hdHJpeDQ0OyAgICAgICAgICAgICAgICAgIC8vIE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJdcbiAgICAgICAgcHJvdGVjdGVkIF9tb2RlbENvbG9yOiBDdWJpc21UZXh0dXJlQ29sb3I7ICAgICAgICAgICAgICAgIC8vIOODouODh+ODq+iHquS9k+OBruOCq+ODqeODvO+8iFJHQkHvvIlcbiAgICAgICAgcHJvdGVjdGVkIF9pc0N1bGxpbmc6IGJvb2xlYW47ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOCq+ODquODs+OCsOOBjOacieWKueOBquOCiXRydWVcbiAgICAgICAgcHJvdGVjdGVkIF9pc1ByZW11bHRpcGxpZWRBbHBoYTogYm9vbGVhbjsgICAgICAgICAgICAgICAgIC8vIOS5l+eul+a4iOOBv86x44Gq44KJdHJ1ZVxuICAgICAgICBwcm90ZWN0ZWQgX2FuaXNvcnRvcHk6IGFueTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44OG44Kv44K544OB44Oj44Gu55Ww5pa55oCn44OV44Kj44Or44K/44Oq44Oz44Kw44Gu44OR44Op44Oh44O844K/XG4gICAgICAgIHByb3RlY3RlZCBfbW9kZWw6IEN1YmlzbU1vZGVsOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg6zjg7Pjg4Djg6rjg7PjgrDlr77osaHjga7jg6Ljg4fjg6tcbiAgICB9XG5cbiAgICBleHBvcnQgZW51bSBDdWJpc21CbGVuZE1vZGVcbiAgICB7XG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9Ob3JtYWwgPSAwLCAgICAgICAgIC8vIOmAmuW4uFxuICAgICAgICBDdWJpc21CbGVuZE1vZGVfQWRkaXRpdmUgPSAxLCAgICAgICAvLyDliqDnrpdcbiAgICAgICAgQ3ViaXNtQmxlbmRNb2RlX011bHRpcGxpY2F0aXZlID0gMiwgLy8g5LmX566XXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOODhuOCr+OCueODgeODo+OBruiJsuOCklJHQkHjgafmibHjgYbjgZ/jgoHjga7jgq/jg6njgrlcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtVGV4dHVyZUNvbG9yXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuUiA9IDEuMDtcbiAgICAgICAgICAgIHRoaXMuRyA9IDEuMDtcbiAgICAgICAgICAgIHRoaXMuQiA9IDEuMDtcbiAgICAgICAgICAgIHRoaXMuQSA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIFI6IG51bWJlcjsgIC8vIOi1pOODgeODo+ODs+ODjeODq1xuICAgICAgICBHOiBudW1iZXI7ICAvLyDnt5Hjg4Hjg6Pjg7Pjg43jg6tcbiAgICAgICAgQjogbnVtYmVyOyAgLy8g6Z2S44OB44Oj44Oz44ON44OrXG4gICAgICAgIEE6IG51bWJlcjsgIC8vIM6x44OB44Oj44Oz44ON44OrXG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtTG9nRGVidWcgfSBmcm9tIFwiLi4vdXRpbHMvY3ViaXNtZGVidWdcIjtcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiBLZXktVmFsdWXjga7jg5rjgqLjgpLlrprnvqnjgZnjgovjgq/jg6njgrlcbiAgICAgKiBjc21NYXDjgq/jg6njgrnjga7lhoXpg6jjg4fjg7zjgr/jgafkvb/nlKjjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqIEBwYXJhbSBrZXkgS2V544Go44GX44Gm44K744OD44OI44GZ44KL5YCkXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZeOBqOOBl+OBpuOCu+ODg+ODiOOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGtleT86IF9LZXlULCB2YWx1ZT86IF9WYWxUKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0ID0gKGtleSA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgOiBrZXk7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kID0gKHZhbHVlID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICA6IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGZpcnN0OiBfS2V5VDsgICAvLyBrZXnjgajjgZfjgabnlKjjgYTjgovlpInmlbBcbiAgICAgICAgcHVibGljIHNlY29uZDogX1ZhbFQ7ICAvLyB2YWx1ZeOBqOOBl+OBpueUqOOBhOOCi+WkieaVsFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODnuODg+ODl+Wei1xuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBjc21NYXA8X0tleVQsIF9WYWxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDliJ3mnJ/ljJbmmYLngrnjgafnorrkv53jgZnjgovjgrXjgqTjgrpcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplPzogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihzaXplICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihzaXplIDwgMSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kdW1teVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheShzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2R1bW15VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbGVhc2UoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kt44O844KS6L+95Yqg44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5paw44Gf44Gr6L+95Yqg44GZ44KL44Kt44O8XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYXBwZW5kS2V5KGtleTogX0tleVQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIOaWsOOBl+OBj0tleS9WYWx1ZeOBruODmuOCouOCkuS9nOOCi1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkodGhpcy5fc2l6ZSArIDEsIGZhbHNlKTsgLy8gMeOBpOS7peS4iuWFpeOCi+mamemWk+OCkuS9nOOCi1xuICAgICAgICAgICAgLy8g5paw44GX44GEa2V5L3ZhbHVl44Gu44Kk44Oz44OH44OD44Kv44K544GvX3NpemVcblxuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzW3RoaXMuX3NpemVdID0gbmV3IGNzbVBhaXI8X0tleVQsIF9WYWxUPihrZXkpO1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtrZXld44Gu44Kq44O844OQ44O844Ot44O844OJKGdldClcbiAgICAgICAgICogQHBhcmFtIGtleSDmt7vlrZfjgYvjgonnibnlrprjgZXjgozjgotWYWx1ZeWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlKGtleTogX0tleVQpOiBfVmFsVFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZm91bmQgPSAtMTtcblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2tleVZhbHVlc1tpXS5maXJzdCA9PSBrZXkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoZm91bmQgPj0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5VmFsdWVzW2ZvdW5kXS5zZWNvbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRLZXkoa2V5KTsgLy8g5paw6KaP44Kt44O844KS6L+95YqgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleVZhbHVlc1t0aGlzLl9zaXplIC0gMV0uc2Vjb25kO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtrZXld44Gu44Kq44O844OQ44O844Ot44O844OJKHNldClcbiAgICAgICAgICogQHBhcmFtIGtleSDmt7vlrZfjgYvjgonnibnlrprjgZXjgozjgotWYWx1ZeWApFxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg5Luj5YWl44GZ44KLVmFsdWXlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRWYWx1ZShrZXk6IF9LZXlULCB2YWx1ZTogX1ZhbFQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IC0xO1xuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihmb3VuZCA+PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlc1tmb3VuZF0uc2Vjb25kID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRLZXkoa2V5KTsgLy8g5paw6KaP44Kt44O844KS6L+95YqgXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzW3RoaXMuX3NpemUgLSAxXS5zZWNvbmQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDjgafmuKHjgZfjgZ9LZXnjgpLmjIHjgaTopoHntKDjgYzlrZjlnKjjgZnjgovjgYtcbiAgICAgICAgICogQHBhcmFtIGtleSDlrZjlnKjjgpLnorroqo3jgZnjgotrZXlcbiAgICAgICAgICogQHJldHVybiB0cnVlIOW8leaVsOOBp+a4oeOBl+OBn2tleeOCkuaMgeOBpOimgee0oOOBjOWtmOWcqOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOW8leaVsOOBp+a4oeOBl+OBn2tleeOCkuaMgeOBpOimgee0oOOBjOWtmOWcqOOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXhpc3Qoa2V5OiBfS2V5VCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2tleVZhbHVlc1tpXS5maXJzdCA9PSBrZXkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICoga2V5VmFsdWXjga7jg53jgqTjg7Pjgr/jgpLlhajjgabop6PmlL7jgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu44K144Kk44K644KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4g44Kz44Oz44OG44OK44Gu44K144Kk44K6XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu44Kt44Oj44OR44K344OG44Kj44KS56K65L+d44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBuZXdTaXplIOaWsOOBn+OBquOCreODo+ODkeOCt+ODhuOCo+OAguW8leaVsOOBruWApOOBjOePvuWcqOOBruOCteOCpOOCuuacqua6gOOBruWgtOWQiOOBr+S9leOCguOBl+OBquOBhOOAglxuICAgICAgICAgKiBAcGFyYW0gZml0VG9TaXplIHRydWXjgarjgonmjIflrprjgZfjgZ/jgrXjgqTjgrrjgavlkIjjgo/jgZvjgovjgIJmYWxzZeOBquOCieOCteOCpOOCuuOCkjLlgI3norrkv53jgZfjgabjgYrjgY/jgIJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZTogbnVtYmVyLCBmaXRUb1NpemU6IGJvb2xlYW4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKG5ld1NpemUgPiB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2tleVZhbHVlcy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFmaXRUb1NpemUgJiYgbmV3U2l6ZSA8IGNzbU1hcC5EZWZhdWx0U2l6ZSkgbmV3U2l6ZSA9IGNzbU1hcC5EZWZhdWx0U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzLmxlbmd0aCA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFmaXRUb1NpemUgJiYgbmV3U2l6ZSA8IHRoaXMuX2tleVZhbHVlcy5sZW5ndGggKiAyKSBuZXdTaXplID0gdGhpcy5fa2V5VmFsdWVzLmxlbmd0aCAqIDI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcy5sZW5ndGggPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhYjpoK3opoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBiZWdpbigpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4gPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu57WC56uv6KaB57Sg44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZW5kKCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPiA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMsIHRoaXMuX3NpemUpOyAvLyDntYLkuoZcbiAgICAgICAgICAgIHJldHVybiBpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ6KaB57Sg44KS5YmK6Zmk44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpdGUg5YmK6Zmk44GZ44KL6KaB57SgXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXJhc2UoaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IGl0ZS5faW5kZXg7XG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlOyAvLyDliYrpmaTnr4Tlm7LlpJZcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5YmK6ZmkXG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIC0tdGhpcy5fc2l6ZTtcblxuICAgICAgICAgICAgbGV0IGl0ZTI6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4gPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLCBpbmRleCk7IC8vIOe1guS6hlxuICAgICAgICAgICAgcmV0dXJuIGl0ZTI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YCk44KSMzLjg5Pjg4Pjg4jnrKblj7fku5jjgY3mlbTmlbDlnovjgafjg4Djg7Pjg5fjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkdW1wQXNJbnQoKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0RlYnVnKFwiezB9ICxcIiwgdGhpcy5fa2V5VmFsdWVzW2ldKTtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dEZWJ1ZyhcIlxcblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRGVmYXVsdFNpemUgPSAxMDsgLy8g44Kz44Oz44OG44OK44Gu5Yid5pyf5YyW44Gu44OH44OV44Kp44Or44OI44K144Kk44K6XG4gICAgICAgIHB1YmxpYyBfa2V5VmFsdWVzOiBjc21QYWlyPF9LZXlULCBfVmFsVD5bXTsvLyBrZXktdmFsdWXjg5rjgqLjga7phY3liJdcbiAgICAgICAgcHVibGljIF9kdW1teVZhbHVlOiBfVmFsVDsgIC8vIOepuuOBruWApOOCkui/lOOBmeeCuuOBruODgOODn+ODvFxuICAgICAgICBwdWJsaWMgX3NpemU6IG51bWJlcjsgICAgICAgLy8g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBjc21NYXA8VD7jga7jgqTjg4bjg6zjg7zjgr9cbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3Iodj86IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+LCBpZHg/OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX21hcCA9ICh2ICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IHZcbiAgICAgICAgICAgICAgICA6IG5ldyBjc21NYXA8X0tleVQsIF9WYWxUPigpO1xuXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IChpZHggIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gaWR4XG4gICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqID3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZS5faW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBpdGUuX21hcDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWJjee9ruOBjSsr5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlSW5jcmVtZW50KCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgKyt0aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWJjee9ruOBjS0t5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlRGVjcmVtZW50KCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgLS10aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW+jOe9ruOBjSsr5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5jcmVtZW50KCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMuX21hcCwgdGhpcy5faW5kZXgrKyk7ICAvLyDlj6TjgYTlgKTjgpLkv53lrZhcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IGl0ZW9sZC5fbWFwO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b6M572u44GNLS3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkZWNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcy5fbWFwLCB0aGlzLl9pbmRleCk7IC8vIOWPpOOBhOWApOOCkuS/neWtmFxuICAgICAgICAgICAgdGhpcy5fbWFwID0gaXRlb2xkLl9tYXA7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAq5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHRyKCk6IGNzbVBhaXI8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwLl9rZXlWYWx1ZXNbdGhpcy5faW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICE95ryU566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgbm90RXF1YWwoaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2luZGV4ICE9IGl0ZS5faW5kZXgpIHx8ICh0aGlzLl9tYXAgIT0gaXRlLl9tYXApO1xuICAgICAgICB9XG5cbiAgICAgICAgX2luZGV4OiBudW1iZXI7ICAgICAgICAgICAgIC8vIOOCs+ODs+ODhuODiuOBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICBfbWFwOiBjc21NYXA8X0tleVQsIF9WYWxUPjsgLy8g44Kz44Oz44OG44OKXG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDmloflrZfliJfjgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgY3NtU3RyaW5nXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX44KS5b6M5pa544Gr6L+95Yqg44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBjIOi/veWKoOOBmeOCi+aWh+Wtl+WIl1xuICAgICAgICAgKiBAcmV0dXJuIOabtOaWsOOBleOCjOOBn+aWh+Wtl+WIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFwcGVuZChjOiBzdHJpbmcsIGxlbmd0aD86IG51bWJlcik6IGNzbVN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnMgKz0gKGxlbmd0aCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gYy5zdWJzdHIoMCwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgIDogYztcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X44K144Kk44K644KS5ouh5by144GX44Gm5paH5a2X44KS5Z+L44KB44KLXG4gICAgICAgICAqIEBwYXJhbSBsZW5ndGggICAg5ouh5by144GZ44KL5paH5a2X5pWwXG4gICAgICAgICAqIEBwYXJhbSB2ICAgICAgICAg5Z+L44KB44KL5paH5a2XXG4gICAgICAgICAqIEByZXR1cm4g5pu05paw44GV44KM44Gf5paH5a2X5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXhwYW5zaW9uKGxlbmd0aDogbnVtYmVyLCB2OiBzdHJpbmcpOiBjc21TdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJldDogY3NtU3RyaW5nID0gdGhpcztcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldC5hcHBlbmQodik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX44Gu6ZW344GV44KS44OQ44Kk44OI5pWw44Gn5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0Qnl0ZXMoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zKSAucmVwbGFjZSgvJS4uL2csIFwieFwiKS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX44Gu6ZW344GV44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TGVuZ3RoKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfmr5TovIPjgIA8XG4gICAgICAgICAqIEBwYXJhbSBzIOavlOi8g+OBmeOCi+aWh+Wtl+WIl1xuICAgICAgICAgKiBAcmV0dXJuIHRydWU6ICAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWwj+OBleOBhFxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWkp+OBjeOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzTGVzcyhzOiBjc21TdHJpbmcpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMgPCBzLnM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX5q+U6LyDID5cbiAgICAgICAgICogQHBhcmFtIHMg5q+U6LyD44GZ44KL5paH5a2X5YiXXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTogICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5aSn44GN44GEXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6ICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5bCP44GV44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNHcmVhdChzOiBjc21TdHJpbmcpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMgPiBzLnM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX5q+U6LyDID09XG4gICAgICAgICAqIEBwYXJhbSBzIOavlOi8g+OBmeOCi+aWh+Wtl+WIl1xuICAgICAgICAgKiBAcmV0dXJuIHRydWU6ICAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OBqOetieOBl+OBhFxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OBqOeVsOOBquOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXF1YWwoczogc3RyaW5nKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zID09IHM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX44GM56m644GL44Gp44GG44GLXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTog56m644Gu5paH5a2X5YiXXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6IOWApOOBjOioreWumuOBleOCjOOBpuOBhOOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRW1wdHkoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zLmxlbmd0aCA9PSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IHN0cmluZylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zID0gcztcbiAgICAgICAgfVxuXG4gICAgICAgIHM6IHN0cmluZztcbiAgICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIOODmeOCr+OCv+ODvOWei++8iOWPr+WkiemFjeWIl+Wei++8iVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBjc21WZWN0b3I8VD5cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICogQHBhcmFtIGluaWl0YWxDYXBhY2l0eSDliJ3mnJ/ljJblvozjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgILjg4fjg7zjgr/jgrXjgqTjgrrjga9fY2FwYWNpdHkgKiBzaXplb2YoVClcbiAgICAgICAgICogQHBhcmFtIHplcm9DbGVhciB0cnVl44Gq44KJ5Yid5pyf5YyW5pmC44Gr56K65L+d44GX44Gf6aCY5Z+f44KSMOOBp+Wfi+OCgeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IoaW5pdGlhbENhcGFjaXR5OiBudW1iZXIgPSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihpbml0aWFsQ2FwYWNpdHkgPCAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHIgPSBuZXcgQXJyYXkoaW5pdGlhbENhcGFjaXR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IGluaXRpYWxDYXBhY2l0eTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqTjg7Pjg4fjg4Pjgq/jgrnjgafmjIflrprjgZfjgZ/opoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhdChpbmRleDogbnVtYmVyKTogVFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHRyW2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLjgrvjg4Pjg4hcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOimgee0oOOCkuOCu+ODg+ODiOOBmeOCi+OCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg44K744OD44OI44GZ44KL6KaB57SgXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0KGluZGV4OiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9wdHJbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0KG9mZnNldDogbnVtYmVyID0gMCk6IFRbXVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBUW10gPSBuZXcgQXJyYXk8VD4oKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaCh0aGlzLl9wdHJbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwdXNoQmFja+WHpueQhuOAgeOCs+ODs+ODhuODiuOBq+aWsOOBn+OBquimgee0oOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgUHVzaEJhY2vlh6bnkIbjgafov73liqDjgZnjgovlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdXNoQmFjayh2YWx1ZTogVCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5fc2l6ZSA+PSB0aGlzLl9jYXBhY2l0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eSh0aGlzLl9jYXBhY2l0eSA9PSAwID8gY3NtVmVjdG9yLnNfZGVmYXVsdFNpemUgOiB0aGlzLl9jYXBhY2l0eSAqIDIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wdHJbdGhpcy5fc2l6ZSsrXSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFqOimgee0oOOCkuino+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNsZWFyKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fcHRyLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbDjgpLov5TjgZlcbiAgICAgICAgICogQHJldHVybiDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhajopoHntKDjgavlr77jgZfjgabku6PlhaXlh6bnkIbjgpLooYzjgYZcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5Luj5YWl5Yem55CG5b6M44Gu44K144Kk44K6XG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDopoHntKDjgavku6PlhaXjgZnjgovlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhc3NpZ24obmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogVCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGN1clNpemUgPSB0aGlzLl9zaXplO1xuXG4gICAgICAgICAgICBpZihjdXJTaXplIDwgbmV3U2l6ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eShuZXdTaXplKTsgIC8vIGNhcGFjaXR55pu05pawXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5ld1NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IG5ld1NpemU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K144Kk44K65aSJ5pu0XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVzaXplKG5ld1NpemU6IG51bWJlciwgdmFsdWU6IFQgPSBudWxsKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUobmV3U2l6ZSwgdmFsdWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCteOCpOOCuuWkieabtFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHVwZGF0ZVNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogYW55ID0gbnVsbCwgY2FsbFBsYWNlbWVudE5ldzogYm9vbGVhbiA9IHRydWUpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjdXJTaXplOiBudW1iZXIgPSB0aGlzLl9zaXplO1xuXG4gICAgICAgICAgICBpZihjdXJTaXplIDwgbmV3U2l6ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eShuZXdTaXplKTsgIC8vIGNhcGFjaXR55pu05pawXG5cbiAgICAgICAgICAgICAgICBpZihjYWxsUGxhY2VtZW50TmV3KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSB0aGlzLl9zaXplOyBpIDwgbmV3U2l6ZTsgaSsrKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykgIC8vIG5ld1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmV3IHZhbHVlKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgLy8g44OX44Oq44Of44OG44Kj44OW5Z6L44Gq44Gu44Gn5YCk5rih44GXXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSB0aGlzLl9zaXplOyBpIDwgbmV3U2l6ZTsgaSsrKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBuZXdTaXplIDw9IHRoaXMuX3NpemVcbiAgICAgICAgICAgICAgICAvLy0tLVxuICAgICAgICAgICAgICAgIGxldCBzdWIgPSB0aGlzLl9zaXplIC0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKHRoaXMuX3NpemUgLSBzdWIsIHN1Yik7ICAgIC8vIOS4jeimgeOBquOBruOBp+egtOajhOOBmeOCi1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IG5ld1NpemU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gr44Kz44Oz44OG44OK6KaB57Sg44KS5oy/5YWl44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBwb3NpdGlvbiDmjL/lhaXjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtIGJlZ2lu44CA5oy/5YWl44GZ44KL44Kz44Oz44OG44OK44Gu6ZaL5aeL5L2N572uXG4gICAgICAgICAqIEBwYXJhbSBlbmQg5oy/5YWl44GZ44KL44Kz44Oz44OG44OK44Gu57WC56uv5L2N572uXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5zZXJ0KHBvc2l0aW9uOiBpdGVyYXRvcjxUPiwgYmVnaW46IGl0ZXJhdG9yPFQ+LCBlbmQ6IGl0ZXJhdG9yPFQ+KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZHN0U2k6IG51bWJlciA9IHBvc2l0aW9uLl9pbmRleDtcbiAgICAgICAgICAgIGxldCBzcmNTaTogbnVtYmVyID0gYmVnaW4uX2luZGV4O1xuICAgICAgICAgICAgbGV0IHNyY0VpOiBudW1iZXIgPSBlbmQuX2luZGV4O1xuXG4gICAgICAgICAgICBsZXQgYWRkQ291bnQ6IG51bWJlciA9IHNyY0VpIC0gc3JjU2k7XG5cbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX3NpemUgKyBhZGRDb3VudCk7XG5cbiAgICAgICAgICAgIC8vIOaMv+WFpeeUqOOBruaXouWtmOODh+ODvOOCv+OCkuOCt+ODleODiOOBl+OBpumamemWk+OCkuS9nOOCi1xuICAgICAgICAgICAgbGV0IGFkZFNpemUgPSB0aGlzLl9zaXplIC0gZHN0U2k7XG4gICAgICAgICAgICBpZihhZGRTaXplID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBhZGRTaXplOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKGRzdFNpICsgaSwgMCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHNyY1NpOyBpIDwgc3JjRWk7IGkrKywgZHN0U2krKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHJbZHN0U2ldID0gYmVnaW4uX3ZlY3Rvci5fcHRyW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdGhpcy5fc2l6ZSArIGFkZENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBi+OCieOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkuWJiumZpOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDliYrpmaTlrp/ooYxcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDliYrpmaTnr4Tlm7LlpJZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZW1vdmUoaW5kZXg6IG51bWJlcik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgIC8vIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIC0tdGhpcy5fc2l6ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ6KaB57Sg44KS5YmK6Zmk44GX44Gm5LuW44Gu6KaB57Sg44KS44K344OV44OI44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpdGUg5YmK6Zmk44GZ44KL6KaB57SgXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXJhc2UoaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9zaXplIDw9IGluZGV4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGU7IC8vIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDliYrpmaRcbiAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xuXG4gICAgICAgICAgICBsZXQgaXRlMjogaXRlcmF0b3I8VD4gPSBuZXcgaXRlcmF0b3I8VD4odGhpcywgaW5kZXgpOyAgIC8vIOe1guS6hlxuICAgICAgICAgICAgcmV0dXJuIGl0ZTI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu44Kt44Oj44OR44K344OG44Kj44KS56K65L+d44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBuZXdTaXplIOaWsOOBn+OBquOCreODo+ODkeOCt+ODhuOCo+OAguW8leaVsOOBruWApOOBjOePvuWcqOOBruOCteOCpOOCuuacqua6gOOBruWgtOWQiOOBr+S9leOCguOBl+OBquOBhC5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZihuZXdTaXplID4gdGhpcy5fY2FwYWNpdHkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY2FwYWNpdHkgPT0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheShuZXdTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHIubGVuZ3RoID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhYjpoK3opoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBiZWdpbigpOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxUPiA9ICh0aGlzLl9zaXplID09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5lbmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBpdGVyYXRvcjxUPih0aGlzLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu57WC56uv6KaB57Sg44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZW5kKCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMsIHRoaXMuX3NpemUpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBnZXRPZmZzZXQob2Zmc2V0OiBudW1iZXIpOiBjc21WZWN0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG5ld1ZlY3RvciA9IG5ldyBjc21WZWN0b3I8VD4oKTtcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fcHRyID0gdGhpcy5nZXQob2Zmc2V0KTtcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fc2l6ZSA9IHRoaXMuZ2V0KG9mZnNldCkubGVuZ3RoO1xuICAgICAgICAgICAgbmV3VmVjdG9yLl9jYXBhY2l0eSA9IHRoaXMuZ2V0KG9mZnNldCkubGVuZ3RoO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3VmVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgX3B0cjogVFtdOyAgICAvLyDjgrPjg7Pjg4bjg4rjga7lhYjpoK3jgqLjg4njg6zjgrlcbiAgICAgICAgX3NpemU6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXG4gICAgICAgIF9jYXBhY2l0eTogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqNcblxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgc19kZWZhdWx0U2l6ZSA9IDEwOyAvLyDjgrPjg7Pjg4bjg4rliJ3mnJ/ljJbjga7jg4fjg5Xjgqnjg6vjg4jjgrXjgqTjgrpcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgaXRlcmF0b3I8VD5cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2PzogY3NtVmVjdG9yPFQ+LCBpbmRleD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gKHYgIT0gdW5kZWZpbmVkKSA/IHYgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSAoaW5kZXggIT0gdW5kZWZpbmVkKSA/IGluZGV4IDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDku6PlhaVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZS5fdmVjdG9yO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVJbmNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgKyt0aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWJjee9ruOBjS0t5ryU566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlRGVjcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIC0tdGhpcy5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvoznva7jgY0rK+a8lOeul+WtkFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGluY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMuX3ZlY3RvciwgdGhpcy5faW5kZXgrKyk7XG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGVvbGQuX3ZlY3RvcjtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW+jOe9ruOBjS0t5ryU566X5a2QXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZGVjcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8VD4odGhpcy5fdmVjdG9yLCB0aGlzLl9pbmRleC0tKTsgIC8vIOWPpOOBhOWApOOCkuS/neWtmFxuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlb2xkLl92ZWN0b3I7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwdHJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdHIoKTogVFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmVjdG9yLl9wdHJbdGhpcy5faW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqID3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdWJzdGl0dXRpb24oaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZS5fdmVjdG9yO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIT3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBub3RFcXVhbChpdGU6IGl0ZXJhdG9yPFQ+KTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2luZGV4ICE9IGl0ZS5faW5kZXgpIHx8ICh0aGlzLl92ZWN0b3IgIT0gaXRlLl92ZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgX2luZGV4OiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICBfdmVjdG9yOiBjc21WZWN0b3I8VD47ICAvLyDjgrPjg7Pjg4bjg4pcbiAgICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21mcmFtZXdvcmssIExvZ0xldmVsfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XG5pbXBvcnQge0NTTV9MT0dfTEVWRUwsIENTTV9MT0dfTEVWRUxfVkVSQk9TRSwgQ1NNX0xPR19MRVZFTF9ERUJVRywgQ1NNX0xPR19MRVZFTF9JTkZPLCBDU01fTE9HX0xFVkVMX1dBUk5JTkcsIENTTV9MT0dfTEVWRUxfRVJST1J9IGZyb20gXCIuLi9jdWJpc21mcmFtZXdvcmtjb25maWdcIjtcblxuXG5leHBvcnQgY29uc3QgQ3ViaXNtTG9nUHJpbnQgPSAobGV2ZWw6IExvZ0xldmVsLCBmbXQ6IHN0cmluZywgYXJnczogYW55W10pID0+XG57XG4gICAgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrLkN1YmlzbURlYnVnLnByaW50KGxldmVsLCBcIltDU01dXCIgKyBmbXQsIGFyZ3MpO1xufVxuXG5leHBvcnQgY29uc3QgQ3ViaXNtTG9nUHJpbnRJbiA9IChsZXZlbDogTG9nTGV2ZWwsIGZtdDogc3RyaW5nLCBhcmdzOiBhbnlbXSkgPT5cbntcbiAgICBDdWJpc21Mb2dQcmludChsZXZlbCwgZm10ICsgXCJcXG5cIiwgYXJncyk7XG59XG5cbmV4cG9ydCBsZXQgQ1NNX0FTU0VSVCA9IChleHByOiBhbnkpID0+XG57XG4gICAgY29uc29sZS5hc3NlcnQoZXhwcik7XG59O1xuXG5cbmV4cG9ydCBsZXQgQ3ViaXNtTG9nVmVyYm9zZSA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nRGVidWcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XG5leHBvcnQgbGV0IEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XG5leHBvcnQgbGV0IEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XG5leHBvcnQgbGV0IEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuXG5pZihDU01fTE9HX0xFVkVMIDw9IENTTV9MT0dfTEVWRUxfVkVSQk9TRSlcbntcbiAgICBDdWJpc21Mb2dWZXJib3NlID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1ZlcmJvc2UsIFwiW1ZdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dEZWJ1ZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9EZWJ1ZywgXCJbRF1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfSW5mbywgXCJbSV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xufVxuZWxzZSBpZihDU01fTE9HX0xFVkVMID09IENTTV9MT0dfTEVWRUxfREVCVUcpXG57XG4gICAgQ3ViaXNtTG9nRGVidWcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRGVidWcsIFwiW0RdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0luZm8sIFwiW0ldXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX0lORk8pXG57XG4gICAgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9JbmZvLCBcIltJXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG59XG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9XQVJOSU5HKVxue1xuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xufVxuZWxzZSBpZihDU01fTE9HX0xFVkVMID09IENTTV9MT0dfTEVWRUxfRVJST1IpXG57XG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG59XG5cbi8vLS0tLS0tLS0tLS0tIExJVkUyRCBOQU1FU1BBQ0UgLS0tLS0tLS0tLS0tXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuXG4gICAgLyoqXG4gICAgICog44OH44OQ44OD44Kw55So44Gu44Om44O844OG44Kj44Oq44OG44Kj44Kv44Op44K544CCXG4gICAgICog44Ot44Kw44Gu5Ye65Yqb44CB44OQ44Kk44OI44Gu44OA44Oz44OX44Gq44GpXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbURlYnVnXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Ot44Kw44KS5Ye65Yqb44GZ44KL44CC56ys5LiA5byV5pWw44Gr44Ot44Kw44Os44OZ44Or44KS6Kit5a6a44GZ44KL44CCXG4gICAgICAgICAqIEN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCnmmYLjgavjgqrjg5fjgrfjg6fjg7PjgafoqK3lrprjgZXjgozjgZ/jg63jgrDlh7rlipvjg6zjg5njg6vjgpLkuIvlm57jgovloLTlkIjjga/jg63jgrDjgavlh7rjgZXjgarjgYTjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGxvZ0xldmVsIOODreOCsOODrOODmeODq+OBruioreWumlxuICAgICAgICAgKiBAcGFyYW0gZm9ybWF0IOabuOW8j+S7mOOBjeaWh+Wtl+WIl1xuICAgICAgICAgKiBAcGFyYW0gYXJncyDlj6/lpInplbflvJXmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcHJpbnQobG9nTGV2ZWw6IExvZ0xldmVsLCBmb3JtYXQ6IHN0cmluZywgYXJncz86IGFueVtdKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyDjgqrjg5fjgrfjg6fjg7PjgafoqK3lrprjgZXjgozjgZ/jg63jgrDlh7rlipvjg6zjg5njg6vjgpLkuIvlm57jgovloLTlkIjjga/jg63jgrDjgavlh7rjgZXjgarjgYRcbiAgICAgICAgICAgIGlmKGxvZ0xldmVsIDwgY3ViaXNtZnJhbWV3b3JrLkN1YmlzbUZyYW1ld29yay5nZXRMb2dnaW5nTGV2ZWwoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxvZ1ByaW50OiBMaXZlMkRDdWJpc21Db3JlLmNzbUxvZ0Z1bmN0aW9uID0gY3ViaXNtZnJhbWV3b3JrLkN1YmlzbUZyYW1ld29yay5jb3JlTG9nRnVuY3Rpb247XG5cbiAgICAgICAgICAgIGlmICghbG9nUHJpbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBsZXQgYnVmZmVyOiBzdHJpbmcgPVxuICAgICAgICAgICAgICAgIGZvcm1hdC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAvXFx7KFxcZCspXFx9L2csXG4gICAgICAgICAgICAgICAgICAgIChtLCBrKSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnc1trXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2dQcmludChidWZmZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+ODvOOCv+OBi+OCieaMh+WumuOBl+OBn+mVt+OBleOBoOOBkeODgOODs+ODl+WHuuWKm+OBmeOCi+OAglxuICAgICAgICAgKiBDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp5pmC44Gr44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GE44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBsb2dMZXZlbCDjg63jgrDjg6zjg5njg6vjga7oqK3lrppcbiAgICAgICAgICogQHBhcmFtIGRhdGEg44OA44Oz44OX44GZ44KL44OH44O844K/XG4gICAgICAgICAqIEBwYXJhbSBsZW5ndGgg44OA44Oz44OX44GZ44KL6ZW344GVXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGR1bXBCeXRlcyhsb2dMZXZlbDogTG9nTGV2ZWwsIGRhdGE6IFVpbnQ4QXJyYXksIGxlbmd0aDogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSAxNiA9PSAwICYmIGkgPiAwKSB0aGlzLnByaW50KGxvZ0xldmVsLCBcIlxcblwiKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpICUgOCA9PSAwICYmIGkgPiAwKSB0aGlzLnByaW50KGxvZ0xldmVsLCBcIiAgXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnQobG9nTGV2ZWwsIFwiezB9IFwiLCBbKGRhdGFbaV0gJiAweEZGKV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByaW50KGxvZ0xldmVsLCBcIlxcblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwcml2YXRlIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLy0tLS0tLS0tLS0tLSBMSVZFMkQgTkFNRVNQQUNFIC0tLS0tLS0tLS0tLVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3Ntc3RyaW5nfSBmcm9tIFwiLi4vdHlwZS9jc21zdHJpbmdcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbW1hcH0gZnJvbSBcIi4uL3R5cGUvY3NtbWFwXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc212ZWN0b3J9IGZyb20gXCIuLi90eXBlL2NzbXZlY3RvclwiO1xuaW1wb3J0IHtDdWJpc21Mb2dJbmZvfSBmcm9tIFwiLi9jdWJpc21kZWJ1Z1wiO1xuaW1wb3J0IHtzdHJ0b2R9IGZyb20gXCIuLi9saXZlMmRjdWJpc21mcmFtZXdvcmtcIjtcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xuaW1wb3J0IGNzbVZlY3Rvcl9pdGVyYXRvciA9IGNzbXZlY3Rvci5pdGVyYXRvcjtcbmltcG9ydCBjc21NYXAgPSBjc21tYXAuY3NtTWFwO1xuaW1wb3J0IGNzbU1hcF9pdGVyYXRvciA9IGNzbW1hcC5pdGVyYXRvcjtcbmltcG9ydCBjc21TdHJpbmcgPSBjc21zdHJpbmcuY3NtU3RyaW5nO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8vIFN0YXRpY0luaXRpYWxpemVOb3RGb3JDbGllbnRDYWxsKCnjgafliJ3mnJ/ljJbjgZnjgotcbiAgICBjb25zdCBDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIOiBzdHJpbmcgPSBcIkVycm9yOiB0eXBlIG1pc21hdGNoXCI7XG4gICAgY29uc3QgQ1NNX0pTT05fRVJST1JfSU5ERVhfT0ZfQk9VTkRTOiBzdHJpbmcgPSBcIkVycm9yOiBpbmRleCBvdXQgb2YgYm91bmRzXCI7XG5cblxuICAgIC8qKlxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jgqjjg6zjg6Hjg7Pjg4jjga7opoHntKDjga7ln7rlupXjgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+Wei+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZT86IHN0cmluZywgaW5kZW50Pzogc3RyaW5nKTogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJflnovjgafov5TjgZkoc3RyaW5nKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFJhd1N0cmluZyhkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIGluZGVudD86IHN0cmluZyk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmcoZGVmYXVsdFZhbHVlLCBpbmRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9JbnQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0Zsb2F0KGRlZmF1bHRWYWx1ZTogbnVtYmVyID0gMCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuecn+WBveWApOOBp+i/lOOBmShib29sZWFuKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRvQm9vbGVhbihkZWZhdWx0VmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrXjgqTjgrrjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLphY3liJfjgafov5TjgZkoVmFsdWVbXSlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRBcnJheShkZWZhdWx0VmFsdWU6IFZhbHVlW10gPSBudWxsKTogVmFsdWVbXVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuOCs+ODs+ODhuODiuOBp+i/lOOBmShhcnJheSlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWZWN0b3IoZGVmYXVsdFZhbHVlPzogY3NtVmVjdG9yPFZhbHVlPik6IGNzbVZlY3RvcjxWYWx1ZT5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLjg57jg4Pjg5fjgafov5TjgZkoY3NtTWFwPGNzbVN0cmluZywgVmFsdWU+KVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1hcChkZWZhdWx0VmFsdWU/OiBjc21NYXA8c3RyaW5nLCBWYWx1ZT4pOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbaW5kZXhdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeUluZGV4KGluZGV4OiBudW1iZXIpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWUuZXJyb3JWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODnuODg+ODl+OBruOCreODvOS4gOimp+OCkuOCs+ODs+ODhuODiuOBp+i/lOOBmVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIOODnuODg+ODl+OBruOCreODvOOBruS4gOimp1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEtleXMoKTogY3NtVmVjdG9yPHN0cmluZz5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLnNfZHVtbXlLZXlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM44Ko44Op44O85YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXJyb3IoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYxudWxs44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzTnVsbCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOecn+WBveWApOOBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Jvb2woKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzmlbDlgKTlnovjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNGbG9hdCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaWh+Wtl+WIl+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0cmluZygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOmFjeWIl+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0FycmF5KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM44Oe44OD44OX5Z6L44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzTWFwKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZeOAgemdmeeahOOBquOCieino+aUvuOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RhdGljKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gr44Ko44Op44O85YCk44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKGVycm9yU3RyOiBzdHJpbmcpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gSnNvbkVycm9yLmVycm9yVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Yid5pyf5YyW55So44Oh44K944OD44OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIHN0YXRpY0luaXRpYWxpemVOb3RGb3JDbGllbnRDYWxsKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgSnNvbkJvb2xlYW4udHJ1ZVZhbHVlID0gbmV3IEpzb25Cb29sZWFuKHRydWUpO1xuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG5ldyBKc29uQm9vbGVhbihmYWxzZSk7XG5cbiAgICAgICAgICAgIEpzb25FcnJvci5lcnJvclZhbHVlID0gbmV3IEpzb25FcnJvcihcIkVSUk9SXCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5udWxsVmFsdWUgPSBuZXcgSnNvbk51bGx2YWx1ZSgpO1xuXG4gICAgICAgICAgICBWYWx1ZS5zX2R1bW15S2V5cyA9IG5ldyBjc21WZWN0b3I8c3RyaW5nPigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODquODquODvOOCueeUqOODoeOCveODg+ODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGF0aWNSZWxlYXNlTm90Rm9yQ2xpZW50Q2FsbCgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLnRydWVWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi5mYWxzZVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIEpzb25FcnJvci5lcnJvclZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIFZhbHVlLm51bGxWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBWYWx1ZS5zX2R1bW15S2V5cyA9IG51bGw7XG5cbiAgICAgICAgICAgIEpzb25Cb29sZWFuLnRydWVWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi5mYWxzZVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIEpzb25FcnJvci5lcnJvclZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIFZhbHVlLm51bGxWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBWYWx1ZS5zX2R1bW15S2V5cyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBwcm90ZWN0ZWQgX3N0cmluZ0J1ZmZlcjogc3RyaW5nOyAvLyDmloflrZfliJfjg5Djg4Pjg5XjgqFcblxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzX2R1bW15S2V5czogY3NtVmVjdG9yPHN0cmluZz47IC8vIOODgOODn+ODvOOCreODvFxuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZXJyb3JWYWx1ZTogVmFsdWU7ICAgLy8g5LiA5pmC55qE44Gq6L+U44KK5YCk44Go44GX44Gm6L+U44GZ44Ko44Op44O844CCIEN1YmlzbUZyYW1ld29yazo6RGlzcG9zZeOBmeOCi+OBvuOBp+OBr2RlbGV0ZeOBl+OBquOBhFxuICAgICAgICBwdWJsaWMgc3RhdGljIG51bGxWYWx1ZTogVmFsdWU7ICAgIC8vIOS4gOaZgueahOOBqui/lOOCiuWApOOBqOOBl+OBpui/lOOBmU5VTEzjgIIgICBDdWJpc21GcmFtZXdvcms6OkRpc3Bvc2XjgZnjgovjgb7jgafjga9kZWxldGXjgZfjgarjgYRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc2NpaeaWh+Wtl+OBruOBv+WvvuW/nOOBl+OBn+acgOWwj+mZkOOBrui7vemHj0pTT07jg5Hjg7zjgrXjgIJcbiAgICAgKiDku5Xmp5jjga9KU09O44Gu44K144OW44K744OD44OI44Go44Gq44KL44CCXG4gICAgICog6Kit5a6a44OV44Kh44Kk44OrKG1vZGVsMy5qc29uKeOBquOBqeOBruODreODvOODieeUqFxuICAgICAqXG4gICAgICogW+acquWvvuW/nOmgheebrl1cbiAgICAgKiDjg7vml6XmnKzoqp7jgarjganjga7pnZ5BU0NJSeaWh+Wtl1xuICAgICAqIOODu2XjgavjgojjgovmjIfmlbDooajnj75cbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtSnNvblxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGJ1ZmZlcj86IEFycmF5QnVmZmVyLCBsZW5ndGg/OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9yb290ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYoYnVmZmVyICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlQnl0ZXMoYnVmZmVyLCBsZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkOOCpOODiOODh+ODvOOCv+OBi+OCieebtOaOpeODreODvOODieOBl+OBpuODkeODvOOCueOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyIOODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDjg5Djg4Pjg5XjgqHjgrXjgqTjgrpcbiAgICAgICAgICogQHJldHVybiBDdWJpc21Kc29u44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K544CC5aSx5pWX44GX44Gf44KJTlVMTFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoYnVmZmVyOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQganNvbiA9IG5ldyBDdWJpc21Kc29uKCk7XG4gICAgICAgICAgICBjb25zdCBzdWNjZWVkZWQ6IGJvb2xlYW4gPSBqc29uLnBhcnNlQnl0ZXMoYnVmZmVyLCBzaXplKTtcblxuICAgICAgICAgICAgaWYoIXN1Y2NlZWRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Kc29uLmRlbGV0ZShqc29uKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Kq44OW44K444Kn44Kv44OI44Gu6Kej5pS+5Yem55CGXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBDdWJpc21Kc29u44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZShpbnN0YW5jZTogQ3ViaXNtSnNvbilcbiAgICAgICAge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7jg6vjg7zjg4jopoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRSb290KCk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yb290O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBVbmljb2Rl44Gu44OQ44Kk44OK44Oq44KSU3RyaW5n44Gr5aSJ5o+bXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIg5aSJ5o+b44GZ44KL44OQ44Kk44OK44Oq44OH44O844K/XG4gICAgICAgICAqIEByZXR1cm4g5aSJ5o+b5b6M44Gu5paH5a2X5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB1aW50OEFycmF5OiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIGxldCBzdHI6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMCwgbGVuOiBudW1iZXIgPSB1aW50OEFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0ciArPSAoXCIlXCIgKyB0aGlzLnBhZCh1aW50OEFycmF5W2ldLnRvU3RyaW5nKDE2KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQoc3RyKTtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Ko44Oz44Kz44O844OJ44CB44OR44OH44Kj44Oz44KwXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIHBhZChuOiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG4ubGVuZ3RoIDwgMlxuICAgICAgICAgICAgICAgID8gXCIwXCIgKyBuXG4gICAgICAgICAgICAgICAgOiBuO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBKU09O44Gu44OR44O844K544KS5a6f6KGM44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIgICAg44OR44O844K55a++6LGh44Gu44OH44O844K/44OQ44Kk44OIXG4gICAgICAgICAqIEBwYXJhbSBzaXplICAgICAg44OH44O844K/44OQ44Kk44OI44Gu44K144Kk44K6XG4gICAgICAgICAqIHJldHVybiB0cnVlIDog5oiQ5YqfXG4gICAgICAgICAqIHJldHVybiBmYWxzZTog5aSx5pWXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcGFyc2VCeXRlcyhidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBlbmRQb3M6IG51bWJlcltdID0gbmV3IEFycmF5KDEpOyAvLyDlj4LnhafmuKHjgZfjgavjgZnjgovjgZ/jgoHphY3liJdcbiAgICAgICAgICAgIGxldCBkZWNvZGVCdWZmZXI6IHN0cmluZyA9IHRoaXMuYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMucGFyc2VWYWx1ZShkZWNvZGVCdWZmZXIsIHNpemUsIDAsIGVuZFBvcyk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBzdHJidWY6IHN0cmluZyA9ICdcXDAnO1xuICAgICAgICAgICAgICAgIHN0cmJ1ZiA9IFwiSnNvbiBwYXJzZSBlcnJvciA6IEBsaW5lIFwiICsgKHRoaXMuX2xpbmVDb3VudCArIDEpICsgXCJcXG5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290ID0gbmV3IEpzb25TdHJpbmcoc3RyYnVmKTtcblxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJ7MH1cIiwgdGhpcy5fcm9vdC5nZXRSYXdTdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLl9yb290ID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdCA9IG5ldyBKc29uRXJyb3IobmV3IGNzbVN0cmluZyh0aGlzLl9lcnJvciksIGZhbHNlKTsgLy8gcm9vdOOBr+ino+aUvuOBleOCjOOCi+OBruOBp+OCqOODqeODvOOCquODluOCuOOCp+OCr+ODiOOCkuWIpemAlOS9nOaIkOOBmeOCi1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODvOOCueaZguOBruOCqOODqeODvOWApOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFBhcnNlRXJyb3IoKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6vjg7zjg4jopoHntKDjga7mrKHjga7opoHntKDjgYzjg5XjgqHjgqTjg6vjga7ntYLnq6/jgaDjgaPjgZ/jgol0cnVl44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2hlY2tFbmRPZkZpbGUoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcm9vdC5nZXRBcnJheSgpWzFdLmVxdWFscyhcIkVPRlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBKU09O44Ko44Os44Oh44Oz44OI44GL44KJVmFsdWUoZmxvYXQsU3RyaW5nLFZhbHVlKixBcnJheSxudWxsLHRydWUsZmFsc2Up44KS44OR44O844K544GZ44KLXG4gICAgICAgICAqIOOCqOODrOODoeODs+ODiOOBruabuOW8j+OBq+W/nOOBmOOBpuWGhemDqOOBp1BhcnNlU3RyaW5nKCksIFBhcnNlT2JqZWN0KCksIFBhcnNlQXJyYXkoKeOCkuWRvOOBtlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gICBidWZmZXIgICAgICBKU09O44Ko44Os44Oh44Oz44OI44Gu44OQ44OD44OV44KhXG4gICAgICAgICAqIEBwYXJhbSAgIGxlbmd0aCAgICAgIOODkeODvOOCueOBmeOCi+mVt+OBlVxuICAgICAgICAgKiBAcGFyYW0gICBiZWdpbiAgICAgICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtICAgb3V0RW5kUG9zICAg44OR44O844K557WC5LqG5pmC44Gu5L2N572uXG4gICAgICAgICAqIEByZXR1cm4gICAgICDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlVmFsdWUoYnVmZmVyOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBsZXQgbzogVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xuICAgICAgICAgICAgbGV0IGY6IG51bWJlcjtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgYzogc3RyaW5nID0gYnVmZmVyW2ldO1xuICAgICAgICAgICAgICAgIHN3aXRjaChjKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgICAgICBjYXNlICc1JzpcbiAgICAgICAgICAgICAgICBjYXNlICc2JzpcbiAgICAgICAgICAgICAgICBjYXNlICc3JzpcbiAgICAgICAgICAgICAgICBjYXNlICc4JzpcbiAgICAgICAgICAgICAgICBjYXNlICc5JzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFmdGVyU3RyaW5nOiBzdHJpbmdbXSA9IG5ldyBBcnJheSgxKTsgLy8g5Y+C54Wn5rih44GX44Gr44GZ44KL44Gf44KBXG4gICAgICAgICAgICAgICAgICAgICAgICBmID0gc3RydG9kKGJ1ZmZlci5zbGljZShpKSwgYWZ0ZXJTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gYnVmZmVyLmluZGV4T2YoYWZ0ZXJTdHJpbmdbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBKc29uRmxvYXQoZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdcXFwiJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBKc29uU3RyaW5nKHRoaXMucGFyc2VTdHJpbmcoYnVmZmVyLCBsZW5ndGgsIGkgKyAxLCBvdXRFbmRQb3MpKTsgLy8gXFxcIuOBruasoeOBruaWh+Wtl+OBi+OCiVxuICAgICAgICAgICAgICAgIGNhc2UgJ1snOlxuICAgICAgICAgICAgICAgICAgICBvID0gdGhpcy5wYXJzZUFycmF5KGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgb3V0RW5kUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAneyc6XG4gICAgICAgICAgICAgICAgICAgIG8gPSB0aGlzLnBhcnNlT2JqZWN0KGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgb3V0RW5kUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAnbic6IC8vIG51bGzku6XlpJbjgavjgarjgYRcbiAgICAgICAgICAgICAgICAgICAgaWYoaSArIDMgPCBsZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBuZXcgSnNvbk51bGx2YWx1ZSgpOyAgICAvLyDop6PmlL7jgafjgY3jgovjgojjgYbjgavjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyA0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIG51bGxcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICBjYXNlICd0JzogLy8gdHJ1ZeS7peWkluOBq+OBquOBhFxuICAgICAgICAgICAgICAgICAgICBpZihpICsgMyA8IGxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IEpzb25Cb29sZWFuLnRydWVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyA0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHRydWVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICBjYXNlICdmJzogLy8gZmFsc2Xku6XlpJbjgavjgarjgYRcbiAgICAgICAgICAgICAgICAgICAgaWYoaSArIDQgPCBsZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBKc29uQm9vbGVhbi5mYWxzZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnLCcgcG9zaXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICBjYXNlICcsJzogLy8gQXJyYXkgc2VwYXJhdG9yXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICcsJyBwb3NpdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICBjYXNlICddJzogLy8g5LiN5q2j44Gq772d44Gg44GM44K544Kt44OD44OX44GZ44KL44CC6YWN5YiX44Gu5pyA5b6M44Gr5LiN6KaB44GqICwg44GM44GC44KL44Go5oCd44KP44KM44KLXG4gICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGk7ICAvLyDlkIzjgZjmloflrZfjgpLlho3lh6bnkIZcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxuJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgY2FzZSAnXFx0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdcXHInOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IC8vIOOCueOCreODg+ODl1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsIGVuZCBvZiB2YWx1ZVwiO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5qyh44Gu44CMXCLjgI3jgb7jgafjga7mloflrZfliJfjgpLjg5Hjg7zjgrnjgZnjgovjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICAgc3RyaW5nICAtPiAg44OR44O844K55a++6LGh44Gu5paH5a2X5YiXXG4gICAgICAgICAqIEBwYXJhbSAgIGxlbmd0aCAgLT4gIOODkeODvOOCueOBmeOCi+mVt+OBlVxuICAgICAgICAgKiBAcGFyYW0gICBiZWdpbiAgIC0+ICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtICBvdXRFbmRQb3MgICAtPiAg44OR44O844K557WC5LqG5pmC44Gu5L2N572uXG4gICAgICAgICAqIEByZXR1cm4gICAgICDjg5Hjg7zjgrnjgZfjgZ/mlodG5a2X5YiX6KaB57SgXG4gICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgcGFyc2VTdHJpbmcoc3RyaW5nOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcikgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGxldCBpID0gYmVnaW47XG4gICAgICAgICAgICBsZXQgYzogc3RyaW5nLCBjMjogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHJldDogY3NtU3RyaW5nID0gbmV3IGNzbVN0cmluZyhcIlwiKTtcbiAgICAgICAgICAgIGxldCBidWZTdGFydDogbnVtYmVyID0gYmVnaW47IC8vIHNidWbjgavnmbvpjLLjgZXjgozjgabjgYTjgarjgYTmloflrZfjga7plovlp4vkvY3nva5cblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjID0gc3RyaW5nW2ldO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgJ1xcXCInOuOAgC8vIOe1guerr+OBruKAneOAgeOCqOOCueOCseODvOODl+aWh+Wtl+OBr+WIpeOBq+WHpueQhuOBleOCjOOCi+OBruOBp+OBk+OBk+OBq+adpeOBquOBhFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTsgIC8vIOKAneOBruasoeOBruaWh+Wtl1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmFwcGVuZChzdHJpbmcuc2xpY2UoYnVmU3RhcnQpLCAoaSAtIGJ1ZlN0YXJ0KSk7IC8vIOWJjeOBruaWh+Wtl+OBvuOBp+OCkueZu+mMsuOBmeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldC5zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnLy8nOiAgLy8g44Ko44K544Kx44O844OX44Gu5aC05ZCIXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKzsgLy8g77yS5paH5a2X44KS44K744OD44OI44Gn5omx44GGXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgLSAxID4gYnVmU3RhcnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmFwcGVuZChzdHJpbmcuc2xpY2UoYnVmU3RhcnQpLCAoaSAtIGJ1ZlN0YXJ0KSk7IC8vIOWJjeOBruaWh+Wtl+OBvuOBp+OCkueZu+mMsuOBmeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmU3RhcnQgPSBpICsgMTsgLy8g44Ko44K544Kx44O844OX77yI77yS5paH5a2XKeOBruasoeOBruaWh+Wtl+OBi+OCiVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IGxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMiA9IHN0cmluZ1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChjMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcXFwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcXCInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcYicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXG4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xccicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFx0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2Ugc3RyaW5nL3VuaWNvcmQgZXNjYXBlIG5vdCBzdXBwb3J0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBzdHJpbmcvZXNjYXBlIGVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHN0cmluZy9pbGxlZ2FsIGVuZFwiO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSlNPTuOBruOCquODluOCuOOCp+OCr+ODiOOCqOODrOODoeODs+ODiOOCkuODkeODvOOCueOBl+OBplZhbHVl44Kq44OW44K444Kn44Kv44OI44KS6L+U44GZXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIgICAgSlNPTuOCqOODrOODoeODs+ODiOOBruODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoICAgIOODkeODvOOCueOBmeOCi+mVt+OBlVxuICAgICAgICAgKiBAcGFyYW0gYmVnaW4gICAgIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gb3V0RW5kUG9zIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxuICAgICAgICAgKiBAcmV0dXJuIOODkeODvOOCueOBi+OCieWPluW+l+OBl+OBn1ZhbHVl44Kq44OW44K444Kn44Kv44OIXG4gICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgcGFyc2VPYmplY3QoYnVmZmVyOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgbGV0IHJldDogSnNvbk1hcCA9IG5ldyBKc29uTWFwKCk7XG5cbiAgICAgICAgICAgIC8vIEtleTogVmFsdWVcbiAgICAgICAgICAgIGxldCBrZXk6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gYmVnaW47XG4gICAgICAgICAgICBsZXQgYzogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBsb2NhbFJldEVuZFBvczI6IG51bWJlcltdID0gQXJyYXkoMSk7XG4gICAgICAgICAgICBsZXQgb2s6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gLCDjgYzntprjgY/pmZDjgorjg6vjg7zjg5dcbiAgICAgICAgICAgIGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBGT1JfTE9PUDogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXFwiJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMucGFyc2VTdHJpbmcoYnVmZmVyLCBsZW5ndGgsIGkgKyAxLCBsb2NhbFJldEVuZFBvczIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZFBvczJbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDsgLy8tLSBsb29w44GL44KJ5Ye644KLXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ30nOiAvLyDplonjgZjjgqvjg4PjgrNcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDsgLy8g56m6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzonOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJzonIHBvc2l0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxuJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAvLyDjgrnjgq3jg4Pjg5fjgZnjgovmloflrZdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZighb2spXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwia2V5IG5vdCBmb3VuZFwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvayA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gOiDjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICBGT1JfTE9PUDI6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnOic6XG4gICAgICAgICAgICAgICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ30nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJ30nIHBvc2l0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxuJzogdGhpcy5fbGluZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICcgJzogY2FzZSAnXFx0JyA6IGNhc2UgJ1xccic6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl+OBmeOCi+aWh+Wtl1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIW9rKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcIic6JyBub3QgZm91bmRcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g5YCk44KS44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShidWZmZXIsIGxlbmd0aCwgaSwgbG9jYWxSZXRFbmRQb3MyKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9lcnJvcilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZFBvczJbMF07XG5cbiAgICAgICAgICAgICAgICAvLyByZXQucHV0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldC5wdXQoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBGT1JfTE9PUDM6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ30nOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDmraPluLjntYLkuoZcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxuJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAvLyDjgrnjgq3jg4Pjg5dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHBlcnNlT2JqZWN0XCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmrKHjga7jgIxcIuOAjeOBvuOBp+OBruaWh+Wtl+WIl+OCkuODkeODvOOCueOBmeOCi+OAglxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtIGJlZ2luICAgICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtIG91dEVuZFBvcyDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlQXJyYXkoYnVmZmVyOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXQ6SnNvbkFycmF5ID0gbmV3IEpzb25BcnJheSgpO1xuXG4gICAgICAgICAgICAvLyBrZXkgOiB2YWx1ZVxuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xuICAgICAgICAgICAgbGV0IGM6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBsb2NhbFJldEVuZHBvczI6IG51bWJlcltdID0gbmV3IEFycmF5KDEpO1xuXG4gICAgICAgICAgICAvLyAsIOOBjOe2muOBj+mZkOOCiuODq+ODvOODl1xuICAgICAgICAgICAgZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIDog44KS44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShidWZmZXIsIGxlbmd0aCwgaSwgbG9jYWxSZXRFbmRwb3MyKTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZHBvczJbMF07XG5cbiAgICAgICAgICAgICAgICBpZih2YWx1ZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldC5hZGQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEZPUl9MT09QMzpcbiAgICAgICAgICAgICAgICAvLyBib29sZWFuIGJyZWFrZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEZPUl9MT09QOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjID0gYnVmZmVyW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBicmVha2ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFrOyAvLyDmrKHjga5LRVksIFZBbFVF44G4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1A7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICddJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDntYLkuoZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyt0aGlzLl9saW5lQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYXNlICcgJzogY2FzZSAnXFx0JzogY2FzZSAnXFxyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIOOCueOCreODg+ODl1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXQgPSB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCBlbmQgb2YgcGFyc2VPYmplY3RcIjtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgX2Vycm9yOiBzdHJpbmc7ICAgICAvLyDjg5Hjg7zjgrnmmYLjga7jgqjjg6njg7xcbiAgICAgICAgX2xpbmVDb3VudDogbnVtYmVyOyAvLyDjgqjjg6njg7zloLHlkYrjgavnlKjjgYTjgovooYzmlbDjgqvjgqbjg7Pjg4hcbiAgICAgICAgX3Jvb3Q6IFZhbHVlOyAgICAgICAvLyDjg5Hjg7zjgrnjgZXjgozjgZ/jg6vjg7zjg4jopoHntKBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KSZmxvYXTlgKTjgajjgZfjgabmibHjgYZcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgSnNvbkZsb2F0IGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0cnVjdG9yKHY6IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5pWw5YCk5Z6L44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRmxvYXQoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0cmJ1Zjogc3RyaW5nID0gJ1xcMCc7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHBhcnNlRmxvYXQoc3RyYnVmKTtcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHN0cmJ1ZjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRvSW50KGRlZmF1bHRWYWx1ZTogbnVtYmVyID0gMCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5fdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0Zsb2F0KGRlZmF1bHRWYWx1ZTogbnVtYmVyID0gMC4wKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDjga7lgKTjgajnrYnjgZfjgZHjgozjgbB0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBjc21TdHJpbmcpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBudW1iZXIpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBib29sZWFuKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYW55KTpib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgnbnVtYmVyJyA9PT0gdHlwZW9mKHZhbHVlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBpbnRcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yb3VuZCh2YWx1ZSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZsb2F0XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09IHRoaXMuX3ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7IC8vIEpTT07opoHntKDjga7lgKRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KS55yf5YG95YCk44Go44GX44Gm5omx44GGXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25Cb29sZWFuIGV4dGVuZHMgVmFsdWVcbiAgICB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM55yf5YG95YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQm9vbCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuecn+WBveWApOOBp+i/lOOBmShib29sZWFuKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRvQm9vbGVhbihkZWZhdWx0VmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jvb2xWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gdGhpcy5fYm9vbFZhbHVlXG4gICAgICAgICAgICAgICAgICAgID8gXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImZhbHNlXCI7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoJ2Jvb2xlYW4nID09PSB0eXBlb2YodmFsdWUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PSB0aGlzLl9ib29sVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVlLCDpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHY6IGJvb2xlYW4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2Jvb2xWYWx1ZSA9IHY7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgdHJ1ZVZhbHVlOiBKc29uQm9vbGVhbjsgIC8vIHRydWVcbiAgICAgICAgc3RhdGljIGZhbHNlVmFsdWU6IEpzb25Cb29sZWFuOyAvLyBmYWxzZVxuXG4gICAgICAgIHByaXZhdGUgX2Jvb2xWYWx1ZTogYm9vbGVhbjsgLy8gSlNPTuimgee0oOOBruWApFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpLmloflrZfliJfjgajjgZfjgabmibHjgYZcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgSnNvblN0cmluZyBleHRlbmRzIFZhbHVlXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Ioczogc3RyaW5nKTtcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IGNzbVN0cmluZylcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IGFueSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAgICAgaWYoJ3N0cmluZycgPT09IHR5cGVvZihzKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihzIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHMucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaWh+Wtl+WIl+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0cmluZygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YodmFsdWUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXIgPT0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNzbVN0cmluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuX3N0cmluZ0J1ZmZlciA9PSB2YWx1ZS5zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSlNPTuODkeODvOOCueaZguOBruOCqOODqeODvOe1kOaenOOAguaWh+Wtl+WIl+Wei+OBruOCiOOBhuOBq+OBteOCi+OBvuOBhlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uRXJyb3IgZXh0ZW5kcyBKc29uU3RyaW5nXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVl44CB6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNTdGF0aWM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Ko44Op44O85oOF5aCx44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKHM6IHN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBjc21TdHJpbmd8c3RyaW5nLCBpc1N0YXRpYzogYm9vbGVhbilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoXCJzdHJpbmdcIiA9PT0gdHlwZW9mKHMpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN1cGVyKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN1cGVyKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faXNTdGF0aWMgPSBpc1N0YXRpYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOOCqOODqeODvOWApOOBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Vycm9yKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHByb3RlY3RlZCBfaXNTdGF0aWM6IGJvb2xlYW47IC8vIOmdmeeahOOBqlZhbHVl44GL44Gp44GG44GLXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkk5VTEzlgKTjgajjgZfjgabmjIHjgaRcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgSnNvbk51bGx2YWx1ZSBleHRlbmRzIFZhbHVlXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYxOVUxM5YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzTnVsbCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZSwg6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IFwiTnVsbFZhbHVlXCI7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpLphY3liJfjgajjgZfjgabmjIHjgaRcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgSnNvbkFycmF5IGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9hcnJheSA9IG5ldyBjc21WZWN0b3I8VmFsdWU+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaXRlOiBjc21WZWN0b3JfaXRlcmF0b3I8VmFsdWU+ID0gdGhpcy5fYXJyYXkuYmVnaW4oKTsgaXRlLm5vdEVxdWFsKHRoaXMuX2FycmF5LmVuZCgpKTsgaXRlLnByZUluY3JlbWVudCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKTtcblxuICAgICAgICAgICAgICAgIGlmKHYgJiYgIXYuaXNTdGF0aWMoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOmFjeWIl+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0FycmF5KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX2FycmF5LmdldFNpemUoKSA8PSBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUuZXJyb3JWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfSU5ERVhfT0ZfQk9VTkRTKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gdGhpcy5fYXJyYXkuYXQoaW5kZXgpO1xuXG4gICAgICAgICAgICBpZih2ID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0cmluZ0J1ZmZlcjogc3RyaW5nID0gaW5kZW50ICsgXCJbXFxuXCI7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaXRlOiBjc21WZWN0b3JfaXRlcmF0b3I8VmFsdWU+ID0gdGhpcy5fYXJyYXkuYmVnaW4oKTsgaXRlLm5vdEVxdWFsKHRoaXMuX2FycmF5LmVuZCgpKTsgaXRlLmluY3JlbWVudCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgKz0gaW5kZW50ICsgXCJcIiArIHYuZ2V0U3RyaW5nKGluZGVudCArIFwiIFwiKSArIFwiXFxuXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHN0cmluZ0J1ZmZlciArIGluZGVudCArIFwiXVxcblwiO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmFjeWIl+imgee0oOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gdiDov73liqDjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhZGQodjogVmFsdWUpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5LnB1c2hCYWNrKHYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuOCs+ODs+ODhuODiuOBp+i/lOOBmShjc21WZWN0b3I8VmFsdWU+KVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZlY3RvcihkZWZhdWx0VmFsdWU6IGNzbVZlY3RvcjxWYWx1ZT4gPSBudWxsKTogY3NtVmVjdG9yPFZhbHVlPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44Gu5pWw44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5LmdldFNpemUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX2FycmF5OiBjc21WZWN0b3I8VmFsdWU+OyAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuODnuODg+ODl+OBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uTWFwIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBuZXcgY3NtTWFwPHN0cmluZywgVmFsdWU+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XG5cbiAgICAgICAgICAgIHdoaWxlKGl0ZS5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKS5zZWNvbmQ7XG5cbiAgICAgICAgICAgICAgICBpZih2ICYmICF2LmlzU3RhdGljKCkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICB2ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpdGUucHJlSW5jcmVtZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYxNYXDlnovjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNNYXAoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbc3RyaW5nIHwgY3NtU3RyaW5nXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlTdHJpbmcoczogc3RyaW5nIHwgY3NtU3RyaW5nKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgaWYocyBpbnN0YW5jZW9mIGNzbVN0cmluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0OiBWYWx1ZSA9IHRoaXMuX21hcC5nZXRWYWx1ZShzLnMpO1xuICAgICAgICAgICAgICAgIGlmKHJldCA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpdGVyOiBjc21NYXBfaXRlcmF0b3I8c3RyaW5nLCBWYWx1ZT4gPSB0aGlzLl9tYXAuYmVnaW4oKTsgaXRlci5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpOyBpdGVyLnByZUluY3JlbWVudCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKGl0ZXIucHRyKCkuZmlyc3QgPT0gcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZXIucHRyKCkuc2Vjb25kID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXIucHRyKCkuc2Vjb25kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbaW5kZXhdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeUluZGV4KGluZGV4OiBudW1iZXIpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWUuZXJyb3JWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBpbmRlbnQgKyBcIntcXG5cIjtcblxuICAgICAgICAgICAgY29uc3QgaXRlOiBjc21NYXBfaXRlcmF0b3I8c3RyaW5nLCBWYWx1ZT4gPSB0aGlzLl9tYXAuYmVnaW4oKTtcbiAgICAgICAgICAgIHdoaWxlKGl0ZS5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGl0ZS5wdHIoKS5maXJzdDtcbiAgICAgICAgICAgICAgICBsZXQgdjogVmFsdWUgPSBpdGUucHRyKCkuc2Vjb25kO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyICs9IGluZGVudCArIFwiIFwiICsga2V5ICsgXCIgOiBcIiArIHYuZ2V0U3RyaW5nKGluZGVudCArIFwiICAgXCIpICsgXCIgXFxuXCI7XG4gICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgKz0gaW5kZW50ICsgXCJ9XFxuXCI7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KSTWFw5Z6L44Gn6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TWFwKGRlZmF1bHRWYWx1ZT86IGNzbU1hcDxzdHJpbmcsIFZhbHVlPik6IGNzbU1hcDxzdHJpbmcsIFZhbHVlPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcOOBq+imgee0oOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHB1dChrZXk6IHN0cmluZywgdjogVmFsdWUpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX21hcC5zZXRWYWx1ZShrZXksIHYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcOOBi+OCieOCreODvOOBruODquOCueODiOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEtleXMoKTogY3NtVmVjdG9yPHN0cmluZz5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9rZXlzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBuZXcgY3NtVmVjdG9yPHN0cmluZz4oKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XG5cbiAgICAgICAgICAgICAgICB3aGlsZShpdGUubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gaXRlLnB0cigpLmZpcnN0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLnB1c2hCYWNrKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZS5wcmVJbmNyZW1lbnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5cztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXDjga7opoHntKDmlbDjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5cy5nZXRTaXplKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHByaXZhdGUgX21hcDogY3NtTWFwPHN0cmluZywgVmFsdWU+OyAgIC8vIEpTT07opoHntKDjga7lgKRcbiAgICAgICAgcHJpdmF0ZSBfa2V5czogY3NtVmVjdG9yPHN0cmluZz47ICAgICAgICAgICAgICAgLy8gSlNPTuimgee0oOOBruWApFxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=