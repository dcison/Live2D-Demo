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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/motion/cubismmotion.ts");
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

/***/ "./Framework/math/cubismmath.ts":
/*!**************************************!*\
  !*** ./Framework/math/cubismmath.ts ***!
  \**************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _cubismvector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismvector2 */ "./Framework/math/cubismvector2.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var CubismVector2 = _cubismvector2__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismVector2;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * 数値計算などに使用するユーティリティクラス
     */
    var CubismMath = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismMath() {
        }
        /**
         * 第一引数の値を最小値と最大値の範囲に収めた値を返す
         *
         * @param value 収められる値
         * @param min   範囲の最小値
         * @param max   範囲の最大値
         * @return 最小値と最大値の範囲に収めた値
         */
        CubismMath.range = function (value, min, max) {
            if (value < min) {
                value = min;
            }
            else if (value > max) {
                value = max;
            }
            return value;
        };
        /**
         * サイン関数の値を求める
         *
         * @param x 角度値（ラジアン）
         * @return サイン関数sin(x)の値
         */
        CubismMath.sin = function (x) {
            return Math.sin(x);
        };
        /**
         * コサイン関数の値を求める
         *
         * @param x 角度値(ラジアン)
         * @return コサイン関数cos(x)の値
         */
        CubismMath.cos = function (x) {
            return Math.cos(x);
        };
        /**
         * 値の絶対値を求める
         *
         * @param x 絶対値を求める値
         * @return 値の絶対値
         */
        CubismMath.abs = function (x) {
            return Math.abs(x);
        };
        /**
         * 平方根(ルート)を求める
         * @param x -> 平方根を求める値
         * @return 値の平方根
         */
        CubismMath.sqrt = function (x) {
            return Math.sqrt(x);
        };
        /**
         * イージング処理されたサインを求める
         * フェードイン・アウト時のイージングに利用できる
         *
         * @param value イージングを行う値
         * @return イージング処理されたサイン値
         */
        CubismMath.getEasingSine = function (value) {
            if (value < 0.0) {
                return 0.0;
            }
            else if (value > 1.0) {
                return 1.0;
            }
            return 0.5 - 0.5 * this.cos(value * Math.PI);
        };
        /**
         * 大きい方の値を返す
         *
         * @param left 左辺の値
         * @param right 右辺の値
         * @return 大きい方の値
         */
        CubismMath.max = function (left, right) {
            return (left > right)
                ? left
                : right;
        };
        /**
         * 小さい方の値を返す
         *
         * @param left  左辺の値
         * @param right 右辺の値
         * @return 小さい方の値
         */
        CubismMath.min = function (left, right) {
            return (left > right)
                ? right
                : left;
        };
        /**
         * 角度値をラジアン値に変換する
         *
         * @param degrees   角度値
         * @return 角度値から変換したラジアン値
         */
        CubismMath.degreesToRadian = function (degrees) {
            return (degrees / 180.0) * Math.PI;
        };
        /**
         * ラジアン値を角度値に変換する
         *
         * @param radian    ラジアン値
         * @return ラジアン値から変換した角度値
         */
        CubismMath.radianToDegrees = function (radian) {
            return (radian * 180.0) / Math.PI;
        };
        /**
         * ２つのベクトルからラジアン値を求める
         *
         * @param from  始点ベクトル
         * @param to    終点ベクトル
         * @return ラジアン値から求めた方向ベクトル
         */
        CubismMath.directionToRadian = function (from, to) {
            var q1 = Math.atan2(to.y, to.x);
            var q2 = Math.atan2(from.y, from.x);
            var ret = q1 - q2;
            while (ret < -Math.PI) {
                ret += Math.PI * 2.0;
            }
            while (ret > Math.PI) {
                ret -= Math.PI * 2.0;
            }
            return ret;
        };
        /**
         * ２つのベクトルから角度値を求める
         *
         * @param from  始点ベクトル
         * @param to    終点ベクトル
         * @return 角度値から求めた方向ベクトル
         */
        CubismMath.directionToDegrees = function (from, to) {
            var radian = this.directionToRadian(from, to);
            var degree = this.radianToDegrees(radian);
            if ((to.x - from.x) > 0.0) {
                degree = -degree;
            }
            return degree;
        };
        /**
         * ラジアン値を方向ベクトルに変換する。
         *
         * @param totalAngle    ラジアン値
         * @return ラジアン値から変換した方向ベクトル
         */
        CubismMath.radianToDirection = function (totalAngle) {
            var ret = new CubismVector2();
            ret.x = this.sin(totalAngle);
            ret.y = this.cos(totalAngle);
            return ret;
        };
        return CubismMath;
    }());
    Live2DCubismFramework.CubismMath = CubismMath;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


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

/***/ "./Framework/math/cubismvector2.ts":
/*!*****************************************!*\
  !*** ./Framework/math/cubismvector2.ts ***!
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
    /**
     * 2次元ベクトル型
     *
     * 2次元ベクトル型の機能を提供する。
     */
    var CubismVector2 = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismVector2(x, y) {
            this.x = x;
            this.y = y;
            this.x = (x == undefined)
                ? 0.0
                : x;
            this.y = (y == undefined)
                ? 0.0
                : y;
        }
        /**
         * ベクトルの加算
         *
         * @param vector2 加算するベクトル値
         * @return 加算結果 ベクトル値
         */
        CubismVector2.prototype.add = function (vector2) {
            var ret = new CubismVector2(0.0, 0.0);
            ret.x = this.x + vector2.x;
            ret.y = this.y + vector2.y;
            return ret;
        };
        /**
         * ベクトルの減算
         *
         * @param vector2 減算するベクトル値
         * @return 減算結果 ベクトル値
         */
        CubismVector2.prototype.substract = function (vector2) {
            var ret = new CubismVector2(0.0, 0.0);
            ret.x = this.x - vector2.x;
            ret.y = this.y - vector2.y;
            return ret;
        };
        /**
         * ベクトルの乗算
         *
         * @param vector2 乗算するベクトル値
         * @return 乗算結果　ベクトル値
         */
        CubismVector2.prototype.multiply = function (vector2) {
            var ret = new CubismVector2(0.0, 0.0);
            ret.x = this.x * vector2.x;
            ret.y = this.y * vector2.y;
            return ret;
        };
        /**
         * ベクトルの乗算(スカラー)
         *
         * @param scalar 乗算するスカラー値
         * @return 乗算結果　ベクトル値
         */
        CubismVector2.prototype.multiplyByScaler = function (scalar) {
            return this.multiply(new CubismVector2(scalar, scalar));
        };
        /**
         * ベクトルの除算
         *
         * @param vector2 除算するベクトル値
         * @return 除算結果　ベクトル値
         */
        CubismVector2.prototype.division = function (vector2) {
            var ret = new CubismVector2(0.0, 0.0);
            ret.x = this.x / vector2.x;
            ret.y = this.y / vector2.y;
            return ret;
        };
        /**
         * ベクトルの除算(スカラー)
         *
         * @param scalar 除算するスカラー値
         * @return 除算結果　ベクトル値
         */
        CubismVector2.prototype.divisionByScalar = function (scalar) {
            return this.division(new CubismVector2(scalar, scalar));
        };
        /**
         * ベクトルの長さを取得する
         *
         * @return ベクトルの長さ
         */
        CubismVector2.prototype.getLength = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        /**
         * ベクトルの距離の取得
         *
         * @param a 点
         * @return ベクトルの距離
         */
        CubismVector2.prototype.getDistanceWith = function (a) {
            return Math.sqrt(((this.x - a.x) * (this.x - a.x)) + ((this.y - a.y) * (this.y - a.y)));
        };
        /**
         * ドット積の計算
         *
         * @param a 値
         * @return 結果
         */
        CubismVector2.prototype.dot = function (a) {
            return (this.x * a.x) + (this.y * a.y);
        };
        /**
         * 正規化の適用
         */
        CubismVector2.prototype.normalize = function () {
            var length = Math.pow((this.x * this.x) + (this.y * this.y), 0.5);
            this.x = this.x / length;
            this.y = this.y / length;
        };
        /**
         * 等しさの確認（等しいか？）
         *
         * 値が等しいか？
         *
         * @param rhs 確認する値
         * @return true 値は等しい
         * @return false 値は等しくない
         */
        CubismVector2.prototype.isEqual = function (rhs) {
            return (this.x == rhs.x) && (this.y == rhs.y);
        };
        /**
         * 等しさの確認（等しくないか？）
         *
         * 値が等しくないか？
         *
         * @param rhs 確認する値
         * @return true 値は等しくない
         * @return false 値は等しい
         */
        CubismVector2.prototype.isNotEqual = function (rhs) {
            return !(this.isEqual(rhs));
        };
        return CubismVector2;
    }());
    Live2DCubismFramework.CubismVector2 = CubismVector2;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/motion/acubismmotion.ts":
/*!*******************************************!*\
  !*** ./Framework/motion/acubismmotion.ts ***!
  \*******************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _math_cubismmath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/cubismmath */ "./Framework/math/cubismmath.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */



var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmVector;
var CubismMath = _math_cubismmath__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMath;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モーションの抽象基底クラス
     *
     * モーションの抽象基底クラス。MotionQueueManagerによってモーションの再生を管理する。
     */
    var ACubismMotion = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function ACubismMotion() {
            this._fadeInSeconds = -1.0;
            this._fadeOutSeconds = -1.0;
            this._weight = 1.0;
            this._offsetSeconds = 0.0; // 再生の開始時刻
            this._firedEventValues = new csmVector();
        }
        /**
         * インスタンスの破棄
         */
        ACubismMotion.delete = function (motion) {
            motion.release();
            motion = void 0;
            motion = null;
        };
        /**
         * デストラクタ相当の処理
         */
        ACubismMotion.prototype.release = function () {
            this._weight = 0.0;
        };
        /**
         * モデルのパラメータ
         * @param model 対象のモデル
         * @param motionQueueEntry CubismMotionQueueManagerで管理されているモーション
         * @param userTimeSeconds デルタ時間の積算値[秒]
         */
        ACubismMotion.prototype.updateParameters = function (model, motionQueueEntry, userTimeSeconds) {
            if (!motionQueueEntry.isAvailable() || motionQueueEntry.isFinished()) {
                return;
            }
            if (!motionQueueEntry.isStarted()) {
                motionQueueEntry.setIsStarted(true);
                motionQueueEntry.setStartTime(userTimeSeconds - this._offsetSeconds); // モーションの開始時刻を記録
                motionQueueEntry.setFadeInStartTime(userTimeSeconds); // フェードインの開始時刻
                var duration = this.getDuration();
                if (motionQueueEntry.getEndTime() < 0) {
                    // 開始していないうちに終了設定している場合がある。
                    motionQueueEntry.setEndTime((duration <= 0) ? -1 : motionQueueEntry.getStartTime() + duration);
                    // duration == -1 の場合はループする
                }
            }
            var fadeWeight = this._weight; // 現在の値と掛け合わせる割合
            //---- フェードイン・アウトの処理 ----
            // 単純なサイン関数でイージングする
            var fadeIn = this._fadeInSeconds == 0.0
                ? 1.0
                : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / this._fadeInSeconds);
            var fadeOut = (this._fadeOutSeconds == 0.0 || motionQueueEntry.getEndTime() < 0.0)
                ? 1.0
                : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / this._fadeOutSeconds);
            fadeWeight = fadeWeight * fadeIn * fadeOut;
            motionQueueEntry.setState(userTimeSeconds, fadeWeight);
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_2__["CSM_ASSERT"])(0.0 <= fadeWeight && fadeWeight <= 1.0);
            //---- 全てのパラメータIDをループする ----
            this.doUpdateParameters(model, userTimeSeconds, fadeWeight, motionQueueEntry);
            // 後処理
            // 終了時刻を過ぎたら終了フラグを立てる(CubismMotionQueueManager)
            if ((motionQueueEntry.getEndTime() > 0) && (motionQueueEntry.getEndTime() < userTimeSeconds)) {
                motionQueueEntry.setIsFinished(true); // 終了
            }
        };
        /**
         * フェードインの時間を設定する
         * @param fadeInSeconds フェードインにかかる時間[秒]
         */
        ACubismMotion.prototype.setFadeInTime = function (fadeInSeconds) {
            this._fadeInSeconds = fadeInSeconds;
        };
        /**
         * フェードアウトの時間を設定する
         * @param fadeOutSeconds フェードアウトにかかる時間[秒]
         */
        ACubismMotion.prototype.setFadeOutTime = function (fadeOutSeconds) {
            this._fadeOutSeconds = fadeOutSeconds;
        };
        /**
         * フェードアウトにかかる時間の取得
         * @return フェードアウトにかかる時間[秒]
         */
        ACubismMotion.prototype.getFadeOutTime = function () {
            return this._fadeOutSeconds;
        };
        /**
         * フェードインにかかる時間の取得
         * @return フェードインにかかる時間[秒]
         */
        ACubismMotion.prototype.getFadeInTime = function () {
            return this._fadeInSeconds;
        };
        /**
         * モーション適用の重みの設定
         * @param weight 重み（0.0 - 1.0）
         */
        ACubismMotion.prototype.setWeight = function (weight) {
            this._weight = weight;
        };
        /**
         * モーション適用の重みの取得
         * @return 重み（0.0 - 1.0）
         */
        ACubismMotion.prototype.getWeight = function () {
            return this._weight;
        };
        /**
         * モーションの長さの取得
         * @return モーションの長さ[秒]
         *
         * @note ループの時は「-1」。
         *       ループでない場合は、オーバーライドする。
         *       正の値の時は取得される時間で終了する。
         *       「-1」の時は外部から停止命令がない限り終わらない処理となる。
         */
        ACubismMotion.prototype.getDuration = function () {
            return -1.0;
        };
        /**
         * モーションのループ1回分の長さの取得
         * @return モーションのループ一回分の長さ[秒]
         *
         * @note ループしない場合は、getDuration()と同じ値を返す
         *       ループ一回分の長さが定義できない場合(プログラム的に動き続けるサブクラスなど)の場合は「-1」を返す
         */
        ACubismMotion.prototype.getLoopDuration = function () {
            return -1.0;
        };
        /**
         * モーション再生の開始時刻の設定
         * @param offsetSeconds モーション再生の開始時刻[秒]
         */
        ACubismMotion.prototype.setOffsetTime = function (offsetSeconds) {
            this._offsetSeconds = offsetSeconds;
        };
        /**
         * モデルのパラメータ更新
         *
         * イベント発火のチェック。
         * 入力する時間は呼ばれるモーションタイミングを０とした秒数で行う。
         *
         * @param beforeCheckTimeSeconds 前回のイベントチェック時間[秒]
         * @param motionTimeSeconds 今回の再生時間[秒]
         */
        ACubismMotion.prototype.getFiredEvent = function (beforeCheckTimeSeconds, motionTimeSeconds) {
            return this._firedEventValues;
        };
        return ACubismMotion;
    }());
    Live2DCubismFramework.ACubismMotion = ACubismMotion;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/motion/cubismmotion.ts":
/*!******************************************!*\
  !*** ./Framework/motion/cubismmotion.ts ***!
  \******************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _cubismmotionjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmotionjson */ "./Framework/motion/cubismmotionjson.ts");
/* harmony import */ var _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cubismmotioninternal */ "./Framework/motion/cubismmotioninternal.ts");
/* harmony import */ var _acubismmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acubismmotion */ "./Framework/motion/acubismmotion.ts");
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/* harmony import */ var _math_cubismmath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math/cubismmath */ "./Framework/math/cubismmath.ts");
/* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
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







var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_5__["Live2DCubismFramework"].csmString;
var CubismMotionData = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionData;
var CubismMotionSegment = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionSegment;
var CubismMotionPoint = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionPoint;
var CubismMotionEvent = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionEvent;
var CubismMotionSegmentType = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionSegmentType;
var CubismMotionCurve = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionCurve;
var CubismMotionCurveTarget = _cubismmotioninternal__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismMotionCurveTarget;
var CubismMath = _math_cubismmath__WEBPACK_IMPORTED_MODULE_4__["Live2DCubismFramework"].CubismMath;
var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].CubismFramework;
var ACubismMotion = _acubismmotion__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].ACubismMotion;
var CubismMotionJson = _cubismmotionjson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMotionJson;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    var EffectNameEyeBlink = "EyeBlink";
    var EffectNameLipSync = "LipSync";
    var TargetNameModel = "Model";
    var TargetNameParameter = "Parameter";
    var TargetNamePartOpacity = "PartOpacity";
    function lerpPoints(a, b, t) {
        var result = new CubismMotionPoint();
        result.time = a.time + ((b.time - a.time) * t);
        result.value = a.value + ((b.value - a.value) * t);
        return result;
    }
    function linearEvaluate(points, time) {
        var t = (time - points[0].time) / (points[1].time - points[0].time);
        if (t < 0.0) {
            t = 0.0;
        }
        return points[0].value + ((points[1].value - points[0].value) * t);
    }
    function bezierEvaluate(points, time) {
        var t = (time - points[0].time) / (points[3].time - points[0].time);
        if (t < 0.0) {
            t = 0.0;
        }
        var p01 = lerpPoints(points[0], points[1], t);
        var p12 = lerpPoints(points[1], points[2], t);
        var p23 = lerpPoints(points[2], points[3], t);
        var p012 = lerpPoints(p01, p12, t);
        var p123 = lerpPoints(p12, p23, t);
        return lerpPoints(p012, p123, t).value;
    }
    function steppedEvaluate(points, time) {
        return points[0].value;
    }
    function inverseSteppedEvaluate(points, time) {
        return points[1].value;
    }
    function evaluateCurve(motionData, index, time) {
        // Find segment to evaluate.
        var curve = motionData.curves.at(index);
        var target = -1;
        var totalSegmentCount = curve.baseSegmentIndex + curve.segmentCount;
        var pointPosition = 0;
        for (var i = curve.baseSegmentIndex; i < totalSegmentCount; ++i) {
            // Get first point of next segment.
            pointPosition = motionData.segments.at(i).basePointIndex
                + (motionData.segments.at(i).segmentType == CubismMotionSegmentType.CubismMotionSegmentType_Bezier
                    ? 3
                    : 1);
            // Break if time lies within current segment.
            if (motionData.points.at(pointPosition).time > time) {
                target = i;
                break;
            }
        }
        if (target == -1) {
            return motionData.points.at(pointPosition).value;
        }
        var segment = motionData.segments.at(target);
        return segment.evaluate(motionData.points.get(segment.basePointIndex), time);
    }
    /**
     * モーションクラス
     *
     * モーションのクラス。
     */
    var CubismMotion = /** @class */ (function (_super) {
        __extends(CubismMotion, _super);
        /**
         * コンストラクタ
         */
        function CubismMotion() {
            var _this = _super.call(this) || this;
            _this._sourceFrameRate = 30.0;
            _this._loopDurationSeconds = -1.0;
            _this._isLoop = false; // trueから false へデフォルトを変更
            _this._isLoopFadeIn = true; // ループ時にフェードインが有効かどうかのフラグ
            _this._lastWeight = 0.0;
            _this._motionData = null;
            _this._modelCurveIdEyeBlink = null;
            _this._modelCurveIdLipSync = null;
            _this._eyeBlinkParameterIds = null;
            _this._lipSyncParameterIds = null;
            return _this;
        }
        /**
         * インスタンスを作成する
         *
         * @param buffer motion3.jsonが読み込まれているバッファ
         * @param size バッファのサイズ
         * @return 作成されたインスタンス
         */
        CubismMotion.create = function (buffer, size) {
            var ret = new CubismMotion();
            ret.parse(buffer, size);
            ret._sourceFrameRate = ret._motionData.fps;
            ret._loopDurationSeconds = ret._motionData.duration;
            // NOTE: Editorではループありのモーション書き出しは非対応
            // ret->_loop = (ret->_motionData->Loop > 0);
            return ret;
        };
        /**
         * モデルのパラメータの更新の実行
         * @param model             対象のモデル
         * @param userTimeSeconds   現在の時刻[秒]
         * @param fadeWeight        モーションの重み
         * @param motionQueueEntry  CubismMotionQueueManagerで管理されているモーション
         */
        CubismMotion.prototype.doUpdateParameters = function (model, userTimeSeconds, fadeWeight, motionQueueEntry) {
            if (this._modelCurveIdEyeBlink == null) {
                this._modelCurveIdEyeBlink = CubismFramework.getIdManager().getId(EffectNameEyeBlink);
            }
            if (this._modelCurveIdLipSync == null) {
                this._modelCurveIdLipSync = CubismFramework.getIdManager().getId(EffectNameLipSync);
            }
            var timeOffsetSeconds = userTimeSeconds - motionQueueEntry.getStartTime();
            if (timeOffsetSeconds < 0.0) {
                timeOffsetSeconds = 0.0; // エラー回避
            }
            var lipSyncValue = Number.MAX_VALUE;
            var eyeBlinkValue = Number.MAX_VALUE;
            //まばたき、リップシンクのうちモーションの適用を検出するためのビット（maxFlagCount個まで
            var MaxTargetSize = 64;
            var lipSyncFlags = 0;
            var eyeBlinkFlags = 0;
            //瞬き、リップシンクのターゲット数が上限を超えている場合
            if (this._eyeBlinkParameterIds.getSize() > MaxTargetSize) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogDebug"])("too many eye blink targets : {0}", this._eyeBlinkParameterIds.getSize());
            }
            if (this._lipSyncParameterIds.getSize() > MaxTargetSize) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogDebug"])("too many lip sync targets : {0}", this._lipSyncParameterIds.getSize());
            }
            var tmpFadeIn = (this._fadeInSeconds <= 0.0)
                ? 1.0
                : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / this._fadeInSeconds);
            var tmpFadeOut = (this._fadeOutSeconds <= 0.0 || motionQueueEntry.getEndTime() < 0.0)
                ? 1.0
                : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / this._fadeOutSeconds);
            var value;
            var c, parameterIndex;
            // 'Repeat' time as necessary.
            var time = timeOffsetSeconds;
            if (this._isLoop) {
                while (time > this._motionData.duration) {
                    time -= this._motionData.duration;
                }
            }
            var curves = this._motionData.curves;
            // Evaluate model curves.
            for (c = 0; c < this._motionData.curveCount && curves.at(c).type == CubismMotionCurveTarget.CubismMotionCurveTarget_Model; ++c) {
                // Evaluate curve and call handler.
                value = evaluateCurve(this._motionData, c, time);
                if (curves.at(c).id == this._modelCurveIdEyeBlink) {
                    eyeBlinkValue = value;
                }
                else if (curves.at(c).id == this._modelCurveIdLipSync) {
                    lipSyncValue = value;
                }
            }
            var parameterMotionCurveCount = 0;
            for (; c < this._motionData.curveCount && curves.at(c).type == CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter; ++c) {
                parameterMotionCurveCount++;
                // Find parameter index.
                parameterIndex = model.getParameterIndex(curves.at(c).id);
                // Skip curve evaluation if no value in sink.
                if (parameterIndex == -1) {
                    continue;
                }
                var sourceValue = model.getParameterValueByIndex(parameterIndex);
                // Evaluate curve and apply value.
                value = evaluateCurve(this._motionData, c, time);
                if (eyeBlinkValue != Number.MAX_VALUE) {
                    for (var i = 0; i < this._eyeBlinkParameterIds.getSize() && i < MaxTargetSize; ++i) {
                        if (this._eyeBlinkParameterIds.at(i) == curves.at(c).id) {
                            value *= eyeBlinkValue;
                            eyeBlinkFlags |= 1 << i;
                            break;
                        }
                    }
                }
                if (lipSyncValue != Number.MAX_VALUE) {
                    for (var i = 0; i < this._lipSyncParameterIds.getSize() && i < MaxTargetSize; ++i) {
                        if (this._lipSyncParameterIds.at(i) == curves.at(c).id) {
                            value += lipSyncValue;
                            lipSyncFlags |= 1 << i;
                            break;
                        }
                    }
                }
                var v = void 0;
                // パラメータごとのフェード
                if (curves.at(c).fadeInTime < 0.0 && curves.at(c).fadeOutTime < 0.0) {
                    // モーションのフェードを適用
                    v = sourceValue + (value - sourceValue) * fadeWeight;
                }
                else {
                    // パラメータに対してフェードインかフェードアウトが設定してある場合はそちらを適用
                    var fin = void 0;
                    var fout = void 0;
                    if (curves.at(c).fadeInTime < 0.0) {
                        fin = tmpFadeIn;
                    }
                    else {
                        fin = curves.at(c).fadeInTime == 0.0
                            ? 1.0
                            : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / curves.at(c).fadeInTime);
                    }
                    if (curves.at(c).fadeOutTime < 0.0) {
                        fout = tmpFadeOut;
                    }
                    else {
                        fout = (curves.at(c).fadeOutTime == 0.0 || motionQueueEntry.getEndTime() < 0.0)
                            ? 1.0
                            : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / curves.at(c).fadeOutTime);
                    }
                    var paramWeight = this._weight * fin * fout;
                    // パラメータごとのフェードを適用
                    v = sourceValue + (value - sourceValue) * paramWeight;
                }
                model.setParameterValueByIndex(parameterIndex, v, 1.0);
            }
            {
                if (eyeBlinkValue != Number.MAX_VALUE) {
                    for (var i = 0; i < this._eyeBlinkParameterIds.getSize() && i < MaxTargetSize; ++i) {
                        var sourceValue = model.getParameterValueById(this._eyeBlinkParameterIds.at(i));
                        // モーションでの上書きがあった時にはまばたきは適用しない
                        if ((eyeBlinkFlags >> i) & 0x01) {
                            continue;
                        }
                        var v = sourceValue + (eyeBlinkValue - sourceValue) * fadeWeight;
                        model.setParameterValueById(this._eyeBlinkParameterIds.at(i), v);
                    }
                }
                if (lipSyncValue != Number.MAX_VALUE) {
                    for (var i = 0; i < this._lipSyncParameterIds.getSize() && i < MaxTargetSize; ++i) {
                        var sourceValue = model.getParameterValueById(this._lipSyncParameterIds.at(i));
                        // モーションでの上書きがあった時にはリップシンクは適用しない
                        if ((lipSyncFlags >> i) & 0x01) {
                            continue;
                        }
                        var v = sourceValue + (lipSyncValue - sourceValue) * fadeWeight;
                        model.setParameterValueById(this._lipSyncParameterIds.at(i), v);
                    }
                }
            }
            for (; c < this._motionData.curveCount && curves.at(c).type == CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity; ++c) {
                // Find parameter index.
                parameterIndex = model.getParameterIndex(curves.at(c).id);
                // Skip curve evaluation if no value in sink.
                if (parameterIndex == -1) {
                    continue;
                }
                // Evaluate curve and apply value.
                value = evaluateCurve(this._motionData, c, time);
                model.setParameterValueByIndex(parameterIndex, value);
            }
            if (timeOffsetSeconds >= this._motionData.duration) {
                if (this._isLoop) {
                    motionQueueEntry.setStartTime(userTimeSeconds); // 最初の状態へ
                    if (this._isLoopFadeIn) {
                        // ループ内でループ用フェードインが有効の時は、フェードイン設定し直し
                        motionQueueEntry.setFadeInStartTime(userTimeSeconds);
                    }
                }
                else {
                    motionQueueEntry.setIsFinished(true);
                }
            }
            this._lastWeight = fadeWeight;
        };
        /**
         * ループ情報の設定
         * @param loop ループ情報
         */
        CubismMotion.prototype.setIsLoop = function (loop) {
            this._isLoop = loop;
        };
        /**
         * ループ情報の取得
         * @return true ループする
         * @return false ループしない
         */
        CubismMotion.prototype.isLoop = function () {
            return this._isLoop;
        };
        /**
         * ループ時のフェードイン情報の設定
         * @param loopFadeIn  ループ時のフェードイン情報
         */
        CubismMotion.prototype.setIsLoopFadeIn = function (loopFadeIn) {
            this._isLoopFadeIn = loopFadeIn;
        };
        /**
         * ループ時のフェードイン情報の取得
         *
         * @return  true    する
         * @return  false   しない
         */
        CubismMotion.prototype.isLoopFadeIn = function () {
            return this._isLoopFadeIn;
        };
        /**
         * モーションの長さを取得する。
         *
         * @return  モーションの長さ[秒]
         */
        CubismMotion.prototype.getDuration = function () {
            return this._isLoop ? -1.0 : this._loopDurationSeconds;
        };
        /**
         * モーションのループ時の長さを取得する。
         *
         * @return  モーションのループ時の長さ[秒]
         */
        CubismMotion.prototype.getLoopDuration = function () {
            return this._loopDurationSeconds;
        };
        /**
         * パラメータに対するフェードインの時間を設定する。
         *
         * @param parameterId     パラメータID
         * @param value           フェードインにかかる時間[秒]
         */
        CubismMotion.prototype.setParameterFadeInTime = function (parameterId, value) {
            var curves = this._motionData.curves;
            for (var i = 0; i < this._motionData.curveCount; ++i) {
                if (parameterId == curves.at(i).id) {
                    curves.at(i).fadeInTime = value;
                    return;
                }
            }
        };
        /**
        * パラメータに対するフェードアウトの時間の設定
        * @param parameterId     パラメータID
        * @param value           フェードアウトにかかる時間[秒]
        */
        CubismMotion.prototype.setParameterFadeOutTime = function (parameterId, value) {
            var curves = this._motionData.curves;
            for (var i = 0; i < this._motionData.curveCount; ++i) {
                if (parameterId == curves.at(i).id) {
                    curves.at(i).fadeOutTime = value;
                    return;
                }
            }
        };
        /**
        * パラメータに対するフェードインの時間の取得
        * @param    parameterId     パラメータID
        * @return   フェードインにかかる時間[秒]
        */
        CubismMotion.prototype.getParameterFadeInTime = function (parameterId) {
            var curves = this._motionData.curves;
            for (var i = 0; i < this._motionData.curveCount; ++i) {
                if (parameterId == curves.at(i).id) {
                    return curves.at(i).fadeInTime;
                }
            }
            return -1;
        };
        /**
        * パラメータに対するフェードアウトの時間を取得
        *
        * @param   parameterId     パラメータID
        * @return   フェードアウトにかかる時間[秒]
        */
        CubismMotion.prototype.getParameterFadeOutTime = function (parameterId) {
            var curves = this._motionData.curves;
            for (var i = 0; i < this._motionData.curveCount; ++i) {
                if (parameterId == curves.at(i).id) {
                    return curves.at(i).fadeOutTime;
                }
            }
            return -1;
        };
        /**
         * 自動エフェクトがかかっているパラメータIDリストの設定
         * @param eyeBlinkParameterIds    自動まばたきがかかっているパラメータIDのリスト
         * @param lipSyncParameterIds     リップシンクがかかっているパラメータIDのリスト
         */
        CubismMotion.prototype.setEffectIds = function (eyeBlinkParameterIds, lipSyncParameterIds) {
            this._eyeBlinkParameterIds = eyeBlinkParameterIds;
            this._lipSyncParameterIds = lipSyncParameterIds;
        };
        /**
         * デストラクタ相当の処理
         */
        CubismMotion.prototype.release = function () {
            this._motionData = void 0;
            this._motionData = null;
        };
        /**
         * motion3.jsonをパースする。
         *
         * @param motionJson  motion3.jsonが読み込まれているバッファ
         * @param size        バッファのサイズ
         */
        CubismMotion.prototype.parse = function (motionJson, size) {
            this._motionData = new CubismMotionData();
            var json = new CubismMotionJson(motionJson, size);
            this._motionData.duration = json.getMotionDuration();
            this._motionData.loop = json.isMotionLoop();
            this._motionData.curveCount = json.getMotionCurveCount();
            this._motionData.fps = json.getMotionFps();
            this._motionData.eventCount = json.getEventCount();
            if (json.isExistMotionFadeInTime()) {
                this._fadeInSeconds = (json.getMotionFadeInTime() < 0.0)
                    ? 1.0
                    : json.getMotionFadeInTime();
            }
            else {
                this._fadeInSeconds = 1.0;
            }
            if (json.isExistMotionFadeOutTime()) {
                this._fadeOutSeconds = (json.getMotionFadeOutTime() < 0.0)
                    ? 1.0
                    : json.getMotionFadeOutTime();
            }
            else {
                this._fadeOutSeconds = 1.0;
            }
            this._motionData.curves.updateSize(this._motionData.curveCount, CubismMotionCurve, true);
            this._motionData.segments.updateSize(json.getMotionTotalSegmentCount(), CubismMotionSegment, true);
            this._motionData.points.updateSize(json.getMotionTotalPointCount(), CubismMotionPoint, true);
            this._motionData.events.updateSize(this._motionData.eventCount, CubismMotionEvent, true);
            var totalPointCount = 0;
            var totalSegmentCount = 0;
            // Curves
            for (var curveCount = 0; curveCount < this._motionData.curveCount; ++curveCount) {
                if (json.getMotionCurveTarget(curveCount) == TargetNameModel) {
                    this._motionData.curves.at(curveCount).type = CubismMotionCurveTarget.CubismMotionCurveTarget_Model;
                }
                else if (json.getMotionCurveTarget(curveCount) == TargetNameParameter) {
                    this._motionData.curves.at(curveCount).type = CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter;
                }
                else if (json.getMotionCurveTarget(curveCount) == TargetNamePartOpacity) {
                    this._motionData.curves.at(curveCount).type = CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity;
                }
                this._motionData.curves.at(curveCount).id = json.getMotionCurveId(curveCount);
                this._motionData.curves.at(curveCount).baseSegmentIndex = totalSegmentCount;
                this._motionData.curves.at(curveCount).fadeInTime =
                    (json.isExistMotionCurveFadeInTime(curveCount))
                        ? json.getMotionCurveFadeInTime(curveCount)
                        : -1.0;
                this._motionData.curves.at(curveCount).fadeOutTime =
                    (json.isExistMotionCurveFadeOutTime(curveCount))
                        ? json.getMotionCurveFadeOutTime(curveCount)
                        : -1.0;
                // Segments
                for (var segmentPosition = 0; segmentPosition < json.getMotionCurveSegmentCount(curveCount);) {
                    if (segmentPosition == 0) {
                        this._motionData.segments.at(totalSegmentCount).basePointIndex = totalPointCount;
                        this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition);
                        this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
                        totalPointCount += 1;
                        segmentPosition += 2;
                    }
                    else {
                        this._motionData.segments.at(totalSegmentCount).basePointIndex = totalPointCount - 1;
                    }
                    var segment = json.getMotionCurveSegment(curveCount, segmentPosition);
                    switch (segment) {
                        case CubismMotionSegmentType.CubismMotionSegmentType_Linear:
                            {
                                this._motionData.segments.at(totalSegmentCount).segmentType = CubismMotionSegmentType.CubismMotionSegmentType_Linear;
                                this._motionData.segments.at(totalSegmentCount).evaluate = linearEvaluate;
                                this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, (segmentPosition + 1));
                                this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, (segmentPosition + 2));
                                totalPointCount += 1;
                                segmentPosition += 3;
                                break;
                            }
                        case CubismMotionSegmentType.CubismMotionSegmentType_Bezier:
                            {
                                this._motionData.segments.at(totalSegmentCount).segmentType = CubismMotionSegmentType.CubismMotionSegmentType_Bezier;
                                this._motionData.segments.at(totalSegmentCount).evaluate = bezierEvaluate;
                                this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, (segmentPosition + 1));
                                this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, (segmentPosition + 2));
                                this._motionData.points.at(totalPointCount + 1).time = json.getMotionCurveSegment(curveCount, (segmentPosition + 3));
                                this._motionData.points.at(totalPointCount + 1).value = json.getMotionCurveSegment(curveCount, (segmentPosition + 4));
                                this._motionData.points.at(totalPointCount + 2).time = json.getMotionCurveSegment(curveCount, (segmentPosition + 5));
                                this._motionData.points.at(totalPointCount + 2).value = json.getMotionCurveSegment(curveCount, (segmentPosition + 6));
                                totalPointCount += 3;
                                segmentPosition += 7;
                                break;
                            }
                        case CubismMotionSegmentType.CubismMotionSegmentType_Stepped:
                            {
                                this._motionData.segments.at(totalSegmentCount).segmentType = CubismMotionSegmentType.CubismMotionSegmentType_Stepped;
                                this._motionData.segments.at(totalSegmentCount).evaluate = steppedEvaluate;
                                this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, (segmentPosition + 1));
                                this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, (segmentPosition + 2));
                                totalPointCount += 1;
                                segmentPosition += 3;
                                break;
                            }
                        case CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped:
                            {
                                this._motionData.segments.at(totalSegmentCount).segmentType = CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped;
                                this._motionData.segments.at(totalSegmentCount).evaluate = inverseSteppedEvaluate;
                                this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, (segmentPosition + 1));
                                this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, (segmentPosition + 2));
                                totalPointCount += 1;
                                segmentPosition += 3;
                                break;
                            }
                        default:
                            {
                                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CSM_ASSERT"])(0);
                                break;
                            }
                    }
                    ++this._motionData.curves.at(curveCount).segmentCount;
                    ++totalSegmentCount;
                }
            }
            for (var userdatacount = 0; userdatacount < json.getEventCount(); ++userdatacount) {
                this._motionData.events.at(userdatacount).fireTime = json.getEventTime(userdatacount);
                this._motionData.events.at(userdatacount).value = json.getEventValue(userdatacount);
            }
            json.release();
            json = void 0;
            json = null;
        };
        /**
         * モデルのパラメータ更新
         *
         * イベント発火のチェック。
         * 入力する時間は呼ばれるモーションタイミングを０とした秒数で行う。
         *
         * @param beforeCheckTimeSeconds   前回のイベントチェック時間[秒]
         * @param motionTimeSeconds        今回の再生時間[秒]
         */
        CubismMotion.prototype.getFiredEvent = function (beforeCheckTimeSeconds, motionTimeSeconds) {
            this._firedEventValues.updateSize(0);
            // イベントの発火チェック
            for (var u = 0; u < this._motionData.eventCount; ++u) {
                if ((this._motionData.events.at(u).fireTime > beforeCheckTimeSeconds) &&
                    (this._motionData.events.at(u).fireTime <= motionTimeSeconds)) {
                    this._firedEventValues.pushBack(new csmString(this._motionData.events.at(u).value.s));
                }
            }
            return this._firedEventValues;
        };
        return CubismMotion;
    }(ACubismMotion));
    Live2DCubismFramework.CubismMotion = CubismMotion;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/motion/cubismmotioninternal.ts":
/*!**************************************************!*\
  !*** ./Framework/motion/cubismmotioninternal.ts ***!
  \**************************************************/
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
     * @brief モーションカーブの種類
     *
     * モーションカーブの種類。
     */
    var CubismMotionCurveTarget;
    (function (CubismMotionCurveTarget) {
        CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_Model"] = 0] = "CubismMotionCurveTarget_Model";
        CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_Parameter"] = 1] = "CubismMotionCurveTarget_Parameter";
        CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_PartOpacity"] = 2] = "CubismMotionCurveTarget_PartOpacity"; // パーツの不透明度に対して
    })(CubismMotionCurveTarget = Live2DCubismFramework.CubismMotionCurveTarget || (Live2DCubismFramework.CubismMotionCurveTarget = {}));
    ;
    /**
     * @brief モーションカーブのセグメントの種類
     *
     * モーションカーブのセグメントの種類。
     */
    var CubismMotionSegmentType;
    (function (CubismMotionSegmentType) {
        CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Linear"] = 0] = "CubismMotionSegmentType_Linear";
        CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Bezier"] = 1] = "CubismMotionSegmentType_Bezier";
        CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Stepped"] = 2] = "CubismMotionSegmentType_Stepped";
        CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_InverseStepped"] = 3] = "CubismMotionSegmentType_InverseStepped"; // インバースステップ
    })(CubismMotionSegmentType = Live2DCubismFramework.CubismMotionSegmentType || (Live2DCubismFramework.CubismMotionSegmentType = {}));
    ;
    /**
     * @brief モーションカーブの制御点
     *
     * モーションカーブの制御点。
     */
    var CubismMotionPoint = /** @class */ (function () {
        function CubismMotionPoint() {
            this.time = 0.0; // 時間[秒]
            this.value = 0.0; // 値
        }
        return CubismMotionPoint;
    }());
    Live2DCubismFramework.CubismMotionPoint = CubismMotionPoint;
    ;
    /**
     * @brief モーションカーブのセグメント
     *
     * モーションカーブのセグメント。
     */
    var CubismMotionSegment = /** @class */ (function () {
        /**
         * @brief コンストラクタ
         *
         * コンストラクタ。
         */
        function CubismMotionSegment() {
            this.evaluate = null;
            this.basePointIndex = 0;
            this.segmentType = 0;
        }
        return CubismMotionSegment;
    }());
    Live2DCubismFramework.CubismMotionSegment = CubismMotionSegment;
    ;
    /**
     * @brief モーションカーブ
     *
     * モーションカーブ。
     */
    var CubismMotionCurve = /** @class */ (function () {
        function CubismMotionCurve() {
            this.type = CubismMotionCurveTarget.CubismMotionCurveTarget_Model;
            this.segmentCount = 0;
            this.baseSegmentIndex = 0;
            this.fadeInTime = 0.0;
            this.fadeOutTime = 0.0;
        }
        return CubismMotionCurve;
    }());
    Live2DCubismFramework.CubismMotionCurve = CubismMotionCurve;
    ;
    /**
    * イベント。
    */
    var CubismMotionEvent = /** @class */ (function () {
        function CubismMotionEvent() {
            this.fireTime = 0.0;
        }
        return CubismMotionEvent;
    }());
    Live2DCubismFramework.CubismMotionEvent = CubismMotionEvent;
    ;
    /**
     * @brief モーションデータ
     *
     * モーションデータ。
     */
    var CubismMotionData = /** @class */ (function () {
        function CubismMotionData() {
            this.duration = 0.0;
            this.loop = false;
            this.curveCount = 0;
            this.eventCount = 0;
            this.fps = 0.0;
            this.curves = new csmVector();
            this.segments = new csmVector();
            this.points = new csmVector();
            this.events = new csmVector();
        }
        return CubismMotionData;
    }());
    Live2DCubismFramework.CubismMotionData = CubismMotionData;
    ;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/motion/cubismmotionjson.ts":
/*!**********************************************!*\
  !*** ./Framework/motion/cubismmotionjson.ts ***!
  \**********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubismjson */ "./Framework/utils/cubismjson.ts");
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */



var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].csmString;
var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismFramework;
var CubismJson = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismJson;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    // JSON keys
    var Meta = "Meta";
    var Duration = "Duration";
    var Loop = "Loop";
    var CurveCount = "CurveCount";
    var Fps = "Fps";
    var TotalSegmentCount = "TotalSegmentCount";
    var TotalPointCount = "TotalPointCount";
    var Curves = "Curves";
    var Target = "Target";
    var Id = "Id";
    var FadeInTime = "FadeInTime";
    var FadeOutTime = "FadeOutTime";
    var Segments = "Segments";
    var UserData = "UserData";
    var UserDataCount = "UserDataCount";
    var TotalUserDataSize = "TotalUserDataSize";
    var Time = "Time";
    var Value = "Value";
    /**
     * motion3.jsonのコンテナ。
     */
    var CubismMotionJson = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param buffer motion3.jsonが読み込まれているバッファ
         * @param size バッファのサイズ
         */
        function CubismMotionJson(buffer, size) {
            this._json = CubismJson.create(buffer, size);
        }
        /**
         * デストラクタ相当の処理
         */
        CubismMotionJson.prototype.release = function () {
            CubismJson.delete(this._json);
        };
        /**
         * モーションの長さを取得する
         * @return モーションの長さ[秒]
         */
        CubismMotionJson.prototype.getMotionDuration = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(Duration).toFloat();
        };
        /**
         * モーションのループ情報の取得
         * @return true ループする
         * @return false ループしない
         */
        CubismMotionJson.prototype.isMotionLoop = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(Loop).toBoolean();
        };
        /**
         * モーションカーブの個数の取得
         * @return モーションカーブの個数
         */
        CubismMotionJson.prototype.getMotionCurveCount = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(CurveCount).toInt();
        };
        /**
         * モーションのフレームレートの取得
         * @return フレームレート[FPS]
         */
        CubismMotionJson.prototype.getMotionFps = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(Fps).toFloat();
        };
        /**
         * モーションのセグメントの総合計の取得
         * @return モーションのセグメントの取得
         */
        CubismMotionJson.prototype.getMotionTotalSegmentCount = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(TotalSegmentCount).toInt();
        };
        /**
         * モーションのカーブの制御店の総合計の取得
         * @return モーションのカーブの制御点の総合計
         */
        CubismMotionJson.prototype.getMotionTotalPointCount = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(TotalPointCount).toInt();
        };
        /**
         * モーションのフェードイン時間の存在
         * @return true 存在する
         * @return false 存在しない
         */
        CubismMotionJson.prototype.isExistMotionFadeInTime = function () {
            return !this._json.getRoot().getValueByString(Meta).getValueByString(FadeInTime).isNull();
        };
        /**
         * モーションのフェードアウト時間の存在
         * @return true 存在する
         * @return false 存在しない
         */
        CubismMotionJson.prototype.isExistMotionFadeOutTime = function () {
            return !this._json.getRoot().getValueByString(Meta).getValueByString(FadeOutTime).isNull();
        };
        /**
         * モーションのフェードイン時間の取得
         * @return フェードイン時間[秒]
         */
        CubismMotionJson.prototype.getMotionFadeInTime = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(FadeInTime).toFloat();
        };
        /**
         * モーションのフェードアウト時間の取得
         * @return フェードアウト時間[秒]
         */
        CubismMotionJson.prototype.getMotionFadeOutTime = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(FadeOutTime).toFloat();
        };
        /**
         * モーションのカーブの種類の取得
         * @param curveIndex カーブのインデックス
         * @return カーブの種類
         */
        CubismMotionJson.prototype.getMotionCurveTarget = function (curveIndex) {
            return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(Target).getRawString();
        };
        /**
         * モーションのカーブのIDの取得
         * @param curveIndex カーブのインデックス
         * @return カーブのID
         */
        CubismMotionJson.prototype.getMotionCurveId = function (curveIndex) {
            return CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(Id).getRawString());
        };
        /**
         * モーションのカーブのフェードイン時間の存在
         * @param curveIndex カーブのインデックス
         * @return true 存在する
         * @return false 存在しない
         */
        CubismMotionJson.prototype.isExistMotionCurveFadeInTime = function (curveIndex) {
            return !this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(FadeInTime).isNull();
        };
        /**
         * モーションのカーブのフェードアウト時間の存在
         * @param curveIndex カーブのインデックス
         * @return true 存在する
         * @return false 存在しない
         */
        CubismMotionJson.prototype.isExistMotionCurveFadeOutTime = function (curveIndex) {
            return !this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(FadeOutTime).isNull();
        };
        /**
         * モーションのカーブのフェードイン時間の取得
         * @param curveIndex カーブのインデックス
         * @return フェードイン時間[秒]
         */
        CubismMotionJson.prototype.getMotionCurveFadeInTime = function (curveIndex) {
            return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(FadeInTime).toFloat();
        };
        /**
         * モーションのカーブのフェードアウト時間の取得
         * @param curveIndex カーブのインデックス
         * @return フェードアウト時間[秒]
         */
        CubismMotionJson.prototype.getMotionCurveFadeOutTime = function (curveIndex) {
            return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(FadeOutTime).toFloat();
        };
        /**
         * モーションのカーブのセグメントの個数を取得する
         * @param curveIndex カーブのインデックス
         * @return モーションのカーブのセグメントの個数
         */
        CubismMotionJson.prototype.getMotionCurveSegmentCount = function (curveIndex) {
            return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(Segments).getVector().getSize();
        };
        /**
         * モーションのカーブのセグメントの値の取得
         * @param curveIndex カーブのインデックス
         * @param segmentIndex セグメントのインデックス
         * @return セグメントの値
         */
        CubismMotionJson.prototype.getMotionCurveSegment = function (curveIndex, segmentIndex) {
            return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(Segments).getValueByIndex(segmentIndex).toFloat();
        };
        /**
         * イベントの個数の取得
         * @return イベントの個数
         */
        CubismMotionJson.prototype.getEventCount = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(UserDataCount).toInt();
        };
        /**
         *  イベントの総文字数の取得
         * @return イベントの総文字数
         */
        CubismMotionJson.prototype.getTotalEventValueSize = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(TotalUserDataSize).toInt();
        };
        /**
         * イベントの時間の取得
         * @param userDataIndex イベントのインデックス
         * @return イベントの時間[秒]
         */
        CubismMotionJson.prototype.getEventTime = function (userDataIndex) {
            return this._json.getRoot().getValueByString(UserData).getValueByIndex(userDataIndex).getValueByString(Time).toInt();
        };
        /**
         * イベントの取得
         * @param userDataIndex イベントのインデックス
         * @return イベントの文字列
         */
        CubismMotionJson.prototype.getEventValue = function (userDataIndex) {
            return new csmString(this._json.getRoot().getValueByString(UserData).getValueByIndex(userDataIndex).getValueByString(Value).getRawString());
        };
        return CubismMotionJson;
    }());
    Live2DCubismFramework.CubismMotionJson = CubismMotionJson;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2N1YmlzbWZyYW1ld29ya2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvaWQvY3ViaXNtaWQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tYXRoL2N1YmlzbW1hdGgudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtdmVjdG9yMi50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbW90aW9uL2FjdWJpc21tb3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21vdGlvbi9jdWJpc21tb3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21vdGlvbi9jdWJpc21tb3Rpb25pbnRlcm5hbC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbW90aW9uL2N1YmlzbW1vdGlvbmpzb24udHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3JlbmRlcmluZy9jdWJpc21yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdHlwZS9jc21tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3Ntc3RyaW5nLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay90eXBlL2NzbXZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdXRpbHMvY3ViaXNtZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3V0aWxzL2N1YmlzbWpzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFD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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9tb3Rpb24vY3ViaXNtbW90aW9uLnRzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIOODreOCsOWHuuWKm+mWouaVsOOBruioreWumlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLy0tLS0tLS0tLS0g44Ot44Kw5Ye65Yqb44Os44OZ44OrIOmBuOaKnumgheebriDlrprnvqkgLS0tLS0tLS0tLVxuLy8vIOips+e0sOODreOCsOWHuuWKm+ioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfVkVSQk9TRTogbnVtYmVyID0gMDtcbi8vLyDjg4fjg5Djg4PjgrDjg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0RFQlVHOiBudW1iZXIgPSAxO1xuLy8vIEluZm/jg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0lORk86IG51bWJlciA9IDI7XG4vLy8g6K2m5ZGK44Ot44Kw5Ye65Yqb6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9XQVJOSU5HOiBudW1iZXIgPSAzO1xuLy8vIOOCqOODqeODvOODreOCsOWHuuWKm+ioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfRVJST1I6IG51bWJlciA9IDQ7XG4vLy8g44Ot44Kw5Ye65Yqb44Kq44OV6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9PRkY6IG51bWJlciA9IDU7XG5cbi8qKlxuKiDjg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjgIJcbipcbiog5by35Yi255qE44Gr44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5aSJ44GI44KL5pmC44Gr5a6a576p44KS5pyJ5Yq544Gr44GZ44KL44CCXG4qIENTTV9MT0dfTEVWRUxfVkVSQk9TRSDvvZ4gQ1NNX0xPR19MRVZFTF9PRkYg44KS6YG45oqe44GZ44KL44CCXG4qL1xuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUw6IG51bWJlciA9IENTTV9MT0dfTEVWRUxfVkVSQk9TRTtcbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDjg5Hjg6njg6Hjg7zjgr/lkI3jg7vjg5Hjg7zjg4TlkI3jg7tEcmF3YWJsZeWQjeOCkuS/neaMgVxuICAgICAqXG4gICAgICog44OR44Op44Oh44O844K/5ZCN44O744OR44O844OE5ZCN44O7RHJhd2FibGXlkI3jgpLkv53mjIHjgZnjgovjgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtSWRcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZygpOiBjc21TdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcgfCBjc21TdHJpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZihpZCkgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gbmV3IGNzbVN0cmluZyhpZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlk44KS5q+U6LyDXG4gICAgICAgICAqIEBwYXJhbSBjIOavlOi8g+OBmeOCi2lkXG4gICAgICAgICAqIEByZXR1cm4g5ZCM44GY44Gq44KJ44GwdHJ1ZSznlbDjgarjgaPjgabjgYTjgozjgbBmYWxzZeOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXF1YWwoYzogc3RyaW5nIHwgY3NtU3RyaW5nIHwgQ3ViaXNtSWQpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYykgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIGNzbVN0cmluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjLnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIEN1YmlzbUlkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMuX2lkLnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlk44KS5q+U6LyDXG4gICAgICAgICAqIEBwYXJhbSBjIOavlOi8g+OBmeOCi2lkXG4gICAgICAgICAqIEByZXR1cm4g5ZCM44GY44Gq44KJ44GwdHJ1ZSznlbDjgarjgaPjgabjgYTjgozjgbBmYWxzZeOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzTm90RXF1YWwoYzogc3RyaW5nIHwgY3NtU3RyaW5nIHwgQ3ViaXNtSWQpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYykgPT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIGNzbVN0cmluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYy5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBDdWJpc21JZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYy5faWQucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9pZDogY3NtU3RyaW5nOyAvLyBJROWQjVxuICAgIH1cblxuICAgIGV4cG9ydCBkZWNsYXJlIHR5cGUgQ3ViaXNtSWRIYW5kbGUgPSBDdWJpc21JZDtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSBcIi4uL3R5cGUvY3NtdmVjdG9yXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZH0gZnJvbSBcIi4vY3ViaXNtaWRcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcbmltcG9ydCBDdWJpc21JZCA9IGN1YmlzbWlkLkN1YmlzbUlkO1xuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICogSUTlkI3jga7nrqHnkIZcbiAgICAgKlxuICAgICAqIElE5ZCN44KS566h55CG44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUlkTWFuYWdlclxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faWRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21JZD4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5faWRzLmdldFNpemUoKTsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lkcy5zZXQoaSwgdm9pZCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkcyA9ICBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44KS44Oq44K544OI44GL44KJ55m76YyyXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpZHMgSUTlkI3jg6rjgrnjg4hcbiAgICAgICAgICogQHBhcmFtIGNvdW50IElE44Gu5YCL5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJJZHMoaWRzOiBzdHJpbmdbXSB8IGNzbVN0cmluZ1tdKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcklkKGlkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgpLnmbvpjLJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJJZChpZDogc3RyaW5nIHwgY3NtU3RyaW5nKTogQ3ViaXNtSWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDogQ3ViaXNtSWQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mKGlkKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoKHJlc3VsdCA9IHRoaXMuZmluZElkKGlkKSkgIT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEN1YmlzbUlkKGlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pZHMucHVzaEJhY2socmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcklkKGlkLnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0SWQoaWQ6IGNzbVN0cmluZyB8IHN0cmluZyk6IEN1YmlzbUlkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVySWQoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjga7norroqo1cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWtmOWcqOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWtmOWcqOOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXhpc3QoaWQ6IGNzbVN0cmluZyB8IHN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZihpZCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmZpbmRJZChpZCkgIT0gbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0V4aXN0KGlkLnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjgpLmpJzntKLjgZnjgovjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXG4gICAgICAgICAqIEByZXR1cm4g55m76Yyy44GV44KM44Gm44GE44KLSUTjgILjgarjgZHjgozjgbBOVUxM44CCXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGZpbmRJZChpZDogc3RyaW5nKTogQ3ViaXNtSWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5faWRzLmdldFNpemUoKTsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2lkcy5hdChpKS5nZXRTdHJpbmcoKS5pc0VxdWFsKGlkKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZHMuYXQoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX2lkczogY3NtVmVjdG9yPEN1YmlzbUlkPjsgICAvLyDnmbvpjLLjgZXjgozjgabjgYTjgotJROOBruODquOCueODiFxuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db3JlL2xpdmUyZGN1YmlzbWNvcmUuZC50c1wiIC8+XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21qc29ufSBmcm9tIFwiLi91dGlscy9jdWJpc21qc29uXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZG1hbmFnZXJ9IGZyb20gXCIuL2lkL2N1YmlzbWlkbWFuYWdlclwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtcmVuZGVyZXJ9IGZyb20gXCIuL3JlbmRlcmluZy9jdWJpc21yZW5kZXJlclwiO1xuaW1wb3J0IHtDdWJpc21Mb2dJbmZvLCBDdWJpc21Mb2dXYXJuaW5nLCBDU01fQVNTRVJUfSBmcm9tIFwiLi91dGlscy9jdWJpc21kZWJ1Z1wiO1xuaW1wb3J0IFZhbHVlID0gY3ViaXNtanNvbi5WYWx1ZTtcbmltcG9ydCBDdWJpc21JZE1hbmFnZXIgPSBjdWJpc21pZG1hbmFnZXIuQ3ViaXNtSWRNYW5hZ2VyO1xuaW1wb3J0IEN1YmlzbVJlbmRlcmVyID0gY3ViaXNtcmVuZGVyZXIuQ3ViaXNtUmVuZGVyZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJ0b2Qoczogc3RyaW5nLCBlbmRQdHI6IHN0cmluZ1tdKTogbnVtYmVyXG57XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgIGZvcihsZXQgaTogbnVtYmVyID0gMTsgOyBpKyspXG4gICAge1xuICAgICAgICBsZXQgdGVzdEM6IHN0cmluZyA9IHMuc2xpY2UoaSAtIDEsIGkpO1xuXG4gICAgICAgIC8vIOaMh+aVsOODu+ODnuOCpOODiuOCueOBruWPr+iDveaAp+OBjOOBguOCi+OBruOBp+OCueOCreODg+ODl+OBmeOCi1xuICAgICAgICBpZih0ZXN0Qz09J2UnIHx8IHRlc3RDPT0nLScgfHwgdGVzdEMgPT0gJ0UnKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG7jgIDjgIDjgIAgIC8vIOaWh+Wtl+WIl+OBruevhOWbsuOCkuW6g+OBkuOBpuOBhOOBj1xuICAgICAgICBsZXQgdGVzdDogc3RyaW5nID0gcy5zdWJzdHJpbmcoMCwgaSk7XG4gICAgICAgIGxldCBudW1iZXI6IG51bWJlciA9IE51bWJlcih0ZXN0KTtcbiAgICAgICAgaWYoaXNOYU4obnVtYmVyKSlcbiAgICAgICAge1xu44CA44CA44CA44CAICAgIC8vIOaVsOWApOOBqOOBl+OBpuiqjeitmOOBp+OBjeOBquOBj+OBquOBo+OBn+OBruOBp+e1guS6hlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxu44CA44CA44CAIC8vIOacgOW+jOOBq+aVsOWApOOBqOOBl+OBpuOBp+OBjeOBn2luZGV444KS5qC857SN44GX44Gm44GK44GPXG4gICAgICAgIGluZGV4ID0gaTtcbiAgICB9XG4gICAgbGV0IGQgPSBwYXJzZUZsb2F0KHMpOyAgLy8g44OR44O844K544GX44Gf5pWw5YCkXG5cbiAgICBpZihpc05hTihkKSlcbiAgICB7XG7jgIDjgIDjgIDjgIAgLy8g5pWw5YCk44Go44GX44Gm6KqN6K2Y44Gn44GN44Gq44GP44Gq44Gj44Gf44Gu44Gn57WC5LqGXG4gICAgICAgIGQgPSBOYU47XG4gICAgfVxuXG4gICAgZW5kUHRyWzBdID0gcy5zbGljZShpbmRleCk744CALy8g5b6M57aa44Gu5paH5a2X5YiXXG5cbiAgICByZXR1cm4gZDtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvLyDjg5XjgqHjgqTjg6vjgrnjgrPjg7zjg5fjga7lpInmlbDjgpLliJ3mnJ/ljJZcblxuICAgIGxldCBzX2lzU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBzX2lzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgc19vcHRpb246IE9wdGlvbiA9IG51bGw7XG4gICAgbGV0IHNfY3ViaXNtSWRNYW5hZ2VyOiBDdWJpc21JZE1hbmFnZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogRnJhbWV3b3Jr5YaF44Gn5L2/44GG5a6a5pWw44Gu5a6j6KiAXG4gICAgICovXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDb25zdGFudFxuICAgIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IHZlcnRleE9mZnNldDogbnVtYmVyID0gMDsgICAgIC8vIOODoeODg+OCt+ODpemggueCueOBruOCquODleOCu+ODg+ODiOWApFxuICAgICAgICBleHBvcnQgY29uc3QgdmVydGV4U3RlcDogbnVtYmVyID0gMjsgICAgICAgLy8g44Oh44OD44K344Ol6aCC54K544Gu44K544OG44OD44OX5YCkXG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGNzbURlbGV0ZTxUPihhZGRyZXNzOiBUKTogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoIWFkZHJlc3MpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZHJlc3MgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGl2ZTJEIEN1YmlzbSBTREsgT3JpZ2luYWwgV29ya2Zsb3cgU0RL44Gu44Ko44Oz44OI44Oq44Od44Kk44Oz44OIXG4gICAgICog5Yip55So6ZaL5aeL5pmC44GvQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKeOCkuWRvOOBs+OAgUN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCnjgafntYLkuobjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtRnJhbWV3b3JrXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+OBrkFQSeOCkuS9v+eUqOWPr+iDveOBq+OBmeOCi+OAglxuICAgICAgICAgKiAgQVBJ44KS5a6f6KGM44GZ44KL5YmN44Gr5b+F44Ga44GT44Gu6Zai5pWw44KS5a6f6KGM44GZ44KL44GT44Go44CCXG4gICAgICAgICAqICDkuIDluqbmupblgpnjgYzlrozkuobjgZfjgabku6XpmY3jga/jgIHlho3jgbPlrp/ooYzjgZfjgabjgoLlhoXpg6jlh6bnkIbjgYzjgrnjgq3jg4Pjg5fjgZXjgozjgb7jgZnjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICAgIG9wdGlvbiAgICAgIE9wdGlvbuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICAg5rqW5YKZ5Yem55CG44GM5a6M5LqG44GX44Gf44KJdHJ1ZeOBjOi/lOOCiuOBvuOBmeOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGFydFVwKG9wdGlvbjogT3B0aW9uID0gbnVsbCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYoc19pc1N0YXJ0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5zdGFydFVwKCkgaXMgYWxyZWFkeSBkb25lLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNfb3B0aW9uID0gb3B0aW9uO1xuXG4gICAgICAgICAgICBpZihzX29wdGlvbiAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIExpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21TZXRMb2dGdW5jdGlvbihzX29wdGlvbi5sb2dGdW5jdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNfaXNTdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gTGl2ZTJEIEN1YmlzbSBDb3Jl44OQ44O844K444On44Oz5oOF5aCx44KS6KGo56S6XG4gICAgICAgICAgICBpZihzX2lzU3RhcnRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJzaW9uOiBudW1iZXIgPSBMaXZlMkRDdWJpc21Db3JlLlZlcnNpb24uY3NtR2V0VmVyc2lvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ham9yOiBudW1iZXIgPSAoKHZlcnNpb24gJiAweEZGMDAwMDAwKSA+PiAyNCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlub3I6IG51bWJlciA9ICgodmVyc2lvbiAmIDB4MDBGRjAwMDApID4+IDE2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRjaDogbnVtYmVyID0gKCh2ZXJzaW9uICYgMHgwMDAwRkZGRikpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb25OdW1iZXI6IG51bWJlciA9IHZlcnNpb247XG5cbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dJbmZvKGBMaXZlMkQgQ3ViaXNtIENvcmUgdmVyc2lvbjogezB9LnsxfS57Mn0gKHszfSlgLFxuICAgICAgICAgICAgICAgICAgICAoJzAwJyArIG1ham9yKS5zbGljZSgtMiksXG4gICAgICAgICAgICAgICAgICAgICgnMDAnICsgbWlub3IpLnNsaWNlKC0yKSxcbiAgICAgICAgICAgICAgICAgICAgKCcwMDAwJyArIHBhdGNoKS5zbGljZSgtNCksXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb25OdW1iZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLnN0YXJ0VXAoKSBpcyBjb21wbGV0ZS5cIik7XG5cbiAgICAgICAgICAgIHJldHVybiBzX2lzU3RhcnRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGFydFVwKCnjgafliJ3mnJ/ljJbjgZfjgZ9DdWJpc21GcmFtZXdvcmvjga7lkITjg5Hjg6njg6Hjg7zjgr/jgpLjgq/jg6rjgqLjgZfjgb7jgZnjgIJcbiAgICAgICAgICogRGlzcG9zZSgp44GX44GfQ3ViaXNtRnJhbWV3b3Jr44KS5YaN5Yip55So44GZ44KL6Zqb44Gr5Yip55So44GX44Gm44GP44Gg44GV44GE44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGNsZWFuVXAoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBzX2lzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc19pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgICAgICBzX29wdGlvbiA9IG51bGw7XG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+WGheOBruODquOCveODvOOCueOCkuWIneacn+WMluOBl+OBpuODouODh+ODq+OCkuihqOekuuWPr+iDveOBqueKtuaFi+OBq+OBl+OBvuOBmeOAgjxicj5cbiAgICAgICAgICogICAgIOWGjeW6pkluaXRpYWxpemUoKeOBmeOCi+OBq+OBr+WFiOOBq0Rpc3Bvc2UoKeOCkuWun+ihjOOBmeOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgQ1NNX0FTU0VSVChzX2lzU3RhcnRlZCk7XG4gICAgICAgICAgICBpZighc19pc1N0YXJ0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yayBpcyBub3Qgc3RhcnRlZC5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0gc19pc0luaXRpYWxpemVk44Gr44KI44KL6YCj57aa5Yid5pyf5YyW44Ks44O844OJIC0tLVxuICAgICAgICAgICAgLy8g6YCj57aa44GX44Gm44Oq44K944O844K556K65L+d44GM6KGM44KP44KM44Gq44GE44KI44GG44Gr44GZ44KL44CCXG4gICAgICAgICAgICAvLyDlho3luqZJbml0aWFsaXplKCnjgZnjgovjgavjga/lhYjjgatEaXNwb3NlKCnjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgovjgIJcbiAgICAgICAgICAgIGlmIChzX2lzSW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCkgc2tpcHBlZCwgYWxyZWFkeSBpbml0aWFsaXplZC5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLy0tLS0gc3RhdGljIOWIneacn+WMliAtLS0tXG4gICAgICAgICAgICBWYWx1ZS5zdGF0aWNJbml0aWFsaXplTm90Rm9yQ2xpZW50Q2FsbCgpO1xuXG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlciA9IG5ldyBDdWJpc21JZE1hbmFnZXIoKTtcblxuICAgICAgICAgICAgc19pc0luaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCkgaXMgY29tcGxldGUuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvlhoXjga7lhajjgabjga7jg6rjgr3jg7zjgrnjgpLop6PmlL7jgZfjgb7jgZnjgIJcbiAgICAgICAgICogICAgICDjgZ/jgaDjgZfjgIHlpJbpg6jjgafnorrkv53jgZXjgozjgZ/jg6rjgr3jg7zjgrnjgavjgaTjgYTjgabjga/op6PmlL7jgZfjgb7jgZvjgpPjgIJcbiAgICAgICAgICogICAgICDlpJbpg6jjgafpganliIfjgavnoLTmo4TjgZnjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGlzcG9zZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIENTTV9BU1NFUlQoc19pc1N0YXJ0ZWQpO1xuICAgICAgICAgICAgaWYoIXNfaXNTdGFydGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsgaXMgbm90IHN0YXJ0ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tIHNfaXNJbml0aWFsaXplZOOBq+OCiOOCi+acquWIneacn+WMluino+aUvuOCrOODvOODiSAtLS1cbiAgICAgICAgICAgIC8vIGRpc3Bvc2UoKeOBmeOCi+OBq+OBr+WFiOOBq2luaXRpYWxpemUoKeOCkuWun+ihjOOBmeOCi+W/heimgeOBjOOBguOCi+OAglxuICAgICAgICAgICAgaWYoIXNfaXNJbml0aWFsaXplZCkgICAgLy8gZmFsc2UuLi7jg6rjgr3jg7zjgrnmnKrnorrkv53jga7loLTlkIhcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrLmRpc3Bvc2UoKSBza2lwcGVkLCBub3QgaW5pdGlhbGl6ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVmFsdWUuc3RhdGljUmVsZWFzZU5vdEZvckNsaWVudENhbGwoKTtcblxuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIucmVsZWFzZSgpO1xuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyDjg6zjg7Pjg4Djg6njga7pnZnnmoTjg6rjgr3jg7zjgrnvvIjjgrfjgqfjg7zjg4Djg5fjg63jgrDjg6njg6Dku5bvvInjgpLop6PmlL7jgZnjgotcbiAgICAgICAgICAgIEN1YmlzbVJlbmRlcmVyLnN0YXRpY1JlbGVhc2UoKTtcblxuICAgICAgICAgICAgc19pc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgpIGlzIGNvbXBsZXRlLlwiKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga5BUEnjgpLkvb/nlKjjgZnjgovmupblgpnjgYzlrozkuobjgZfjgZ/jgYvjganjgYbjgYtcbiAgICAgICAgICogQHJldHVybiBBUEnjgpLkvb/nlKjjgZnjgovmupblgpnjgYzlrozkuobjgZfjgabjgYTjgozjgbB0cnVl44GM6L+U44KK44G+44GZ44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGlzU3RhcnRlZCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBzX2lzU3RhcnRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr44Gu44Oq44K944O844K55Yid5pyf5YyW44GM44GZ44Gn44Gr6KGM44KP44KM44Gm44GE44KL44GL44Gp44GG44GLXG4gICAgICAgICAqIEByZXR1cm4g44Oq44K944O844K556K65L+d44GM5a6M5LqG44GX44Gm44GE44KM44GwdHJ1ZeOBjOi/lOOCiuOBvuOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBpc0luaXRpYWxpemVkKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHNfaXNJbml0aWFsaXplZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb3JlIEFQSeOBq+ODkOOCpOODs+ODieOBl+OBn+ODreOCsOmWouaVsOOCkuWun+ihjOOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJhcmFtIG1lc3NhZ2Ug44Ot44Kw44Oh44OD44K744O844K4XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGNvcmVMb2dGdW5jdGlvbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFJldHVybiBpZiBsb2dnaW5nIG5vdCBwb3NzaWJsZS5cbiAgICAgICAgICAgIGlmKCFMaXZlMkRDdWJpc21Db3JlLkxvZ2dpbmcuY3NtR2V0TG9nRnVuY3Rpb24oKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21HZXRMb2dGdW5jdGlvbigpKG1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruODreOCsOWHuuWKm+ODrOODmeODq+ioreWumuOBruWApOOCkui/lOOBmeOAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICDnj77lnKjjga7jg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0TG9nZ2luZ0xldmVsKCk6IExvZ0xldmVsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChzX29wdGlvbiAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBzX29wdGlvbi5sb2dnaW5nTGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gTG9nTGV2ZWwuTG9nTGV2ZWxfT2ZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE44Oe44ON44O844K444Oj44Gu44Kk44Oz44K544K/44Oz44K544KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gQ3ViaXNtTWFuYWdlcuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJZE1hbmFnZXIoKTogQ3ViaXNtSWRNYW5hZ2VyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBzX2N1YmlzbUlkTWFuYWdlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDpnZnnmoTjgq/jg6njgrnjgajjgZfjgabkvb/nlKjjgZnjgotcbiAgICAgICAgICog44Kk44Oz44K544K/44Oz44K55YyW44GV44Gb44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPcHRpb25cbntcbiAgICBsb2dGdW5jdGlvbjogTGl2ZTJEQ3ViaXNtQ29yZS5jc21Mb2dGdW5jdGlvbjsgICAvLyDjg63jgrDlh7rlipvjga7plqLmlbDjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICBsb2dnaW5nTGV2ZWw6IExvZ0xldmVsOyAgLy8g44Ot44Kw5Ye65Yqb44Os44OZ44Or44Gu6Kit5a6aXG59XG5cbi8qKlxuICog44Ot44Kw5Ye65Yqb44Gu44Os44OZ44OrXG4gKi9cbmV4cG9ydCBlbnVtIExvZ0xldmVsXG57XG4gICAgTG9nTGV2ZWxfVmVyYm9zZSA9IDAsICAgLy8g6Kmz57Sw44Ot44KwXG4gICAgTG9nTGV2ZWxfRGVidWcsICAgICAgICAgLy8g44OH44OQ44OD44Kw44Ot44KwXG4gICAgTG9nTGV2ZWxfSW5mbywgICAgICAgICAgLy8gSW5mb+ODreOCsFxuICAgIExvZ0xldmVsX1dhcm5pbmcsICAgICAgIC8vIOitpuWRiuODreOCsFxuICAgIExvZ0xldmVsX0Vycm9yLCAgICAgICAgIC8vIOOCqOODqeODvOODreOCsFxuICAgIExvZ0xldmVsX09mZiAgICAgICAgICAgIC8vIOODreOCsOWHuuWKm+eEoeWKuVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtdmVjdG9yMn0gZnJvbSBcIi4vY3ViaXNtdmVjdG9yMlwiO1xuaW1wb3J0IEN1YmlzbVZlY3RvcjIgPSBjdWJpc212ZWN0b3IyLkN1YmlzbVZlY3RvcjI7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog5pWw5YCk6KiI566X44Gq44Gp44Gr5L2/55So44GZ44KL44Om44O844OG44Kj44Oq44OG44Kj44Kv44Op44K5XG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbU1hdGhcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnrKzkuIDlvJXmlbDjga7lgKTjgpLmnIDlsI/lgKTjgajmnIDlpKflgKTjga7nr4Tlm7Ljgavlj47jgoHjgZ/lgKTjgpLov5TjgZlcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOWPjuOCgeOCieOCjOOCi+WApFxuICAgICAgICAgKiBAcGFyYW0gbWluICAg56+E5Zuy44Gu5pyA5bCP5YCkXG4gICAgICAgICAqIEBwYXJhbSBtYXggICDnr4Tlm7Ljga7mnIDlpKflgKRcbiAgICAgICAgICogQHJldHVybiDmnIDlsI/lgKTjgajmnIDlpKflgKTjga7nr4Tlm7Ljgavlj47jgoHjgZ/lgKRcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyByYW5nZSh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgbWluKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBtYXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtYXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrXjgqTjg7PplqLmlbDjga7lgKTjgpLmsYLjgoHjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHgg6KeS5bqm5YCk77yI44Op44K444Ki44Oz77yJXG4gICAgICAgICAqIEByZXR1cm4g44K144Kk44Oz6Zai5pWwc2luKHgp44Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgc2luKHg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zaW4oeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44K144Kk44Oz6Zai5pWw44Gu5YCk44KS5rGC44KB44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB4IOinkuW6puWApCjjg6njgrjjgqLjg7MpXG4gICAgICAgICAqIEByZXR1cm4g44Kz44K144Kk44Oz6Zai5pWwY29zKHgp44Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgY29zKHg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jb3MoeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YCk44Gu57W25a++5YCk44KS5rGC44KB44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB4IOe1tuWvvuWApOOCkuaxguOCgeOCi+WApFxuICAgICAgICAgKiBAcmV0dXJuIOWApOOBrue1tuWvvuWApFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGFicyh4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW5s+aWueaguSjjg6vjg7zjg4gp44KS5rGC44KB44KLXG4gICAgICAgICAqIEBwYXJhbSB4IC0+IOW5s+aWueagueOCkuaxguOCgeOCi+WApFxuICAgICAgICAgKiBAcmV0dXJuIOWApOOBruW5s+aWueaguVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHNxcnQoeDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kk44O844K444Oz44Kw5Yem55CG44GV44KM44Gf44K144Kk44Oz44KS5rGC44KB44KLXG4gICAgICAgICAqIOODleOCp+ODvOODieOCpOODs+ODu+OCouOCpuODiOaZguOBruOCpOODvOOCuOODs+OCsOOBq+WIqeeUqOOBp+OBjeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg44Kk44O844K444Oz44Kw44KS6KGM44GG5YCkXG4gICAgICAgICAqIEByZXR1cm4g44Kk44O844K444Oz44Kw5Yem55CG44GV44KM44Gf44K144Kk44Oz5YCkXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZ2V0RWFzaW5nU2luZSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMC4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiAxLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDEuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIDAuNSAtIDAuNSAqIHRoaXMuY29zKHZhbHVlICogTWF0aC5QSSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5aSn44GN44GE5pa544Gu5YCk44KS6L+U44GZXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBsZWZ0IOW3pui+uuOBruWApFxuICAgICAgICAgKiBAcGFyYW0gcmlnaHQg5Y+z6L6644Gu5YCkXG4gICAgICAgICAqIEByZXR1cm4g5aSn44GN44GE5pa544Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgbWF4KGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKGxlZnQgPiByaWdodClcbiAgICAgICAgICAgICAgICA/IGxlZnRcbiAgICAgICAgICAgICAgICA6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWwj+OBleOBhOaWueOBruWApOOCkui/lOOBmVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbGVmdCAg5bem6L6644Gu5YCkXG4gICAgICAgICAqIEBwYXJhbSByaWdodCDlj7Povrrjga7lgKTjgIBcbiAgICAgICAgICogQHJldHVybiDlsI/jgZXjgYTmlrnjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBtaW4obGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAobGVmdCA+IHJpZ2h0KVxuICAgICAgICAgICAgICAgID8gcmlnaHRcbiAgICAgICAgICAgICAgICA6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KeS5bqm5YCk44KS44Op44K444Ki44Oz5YCk44Gr5aSJ5o+b44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBkZWdyZWVzICAg6KeS5bqm5YCkXG4gICAgICAgICAqIEByZXR1cm4g6KeS5bqm5YCk44GL44KJ5aSJ5o+b44GX44Gf44Op44K444Ki44Oz5YCkXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZGVncmVlc1RvUmFkaWFuKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKGRlZ3JlZXMgLyAxODAuMCkgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODqeOCuOOCouODs+WApOOCkuinkuW6puWApOOBq+WkieaPm+OBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gcmFkaWFuICAgIOODqeOCuOOCouODs+WApFxuICAgICAgICAgKiBAcmV0dXJuIOODqeOCuOOCouODs+WApOOBi+OCieWkieaPm+OBl+OBn+inkuW6puWApFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHJhZGlhblRvRGVncmVlcyhyYWRpYW46IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHJhZGlhbiAqIDE4MC4wKSAvIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog77yS44Gk44Gu44OZ44Kv44OI44Or44GL44KJ44Op44K444Ki44Oz5YCk44KS5rGC44KB44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBmcm9tICDlp4vngrnjg5njgq/jg4jjg6tcbiAgICAgICAgICogQHBhcmFtIHRvICAgIOe1gueCueODmeOCr+ODiOODq1xuICAgICAgICAgKiBAcmV0dXJuIOODqeOCuOOCouODs+WApOOBi+OCieaxguOCgeOBn+aWueWQkeODmeOCr+ODiOODq1xuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGRpcmVjdGlvblRvUmFkaWFuKGZyb206IEN1YmlzbVZlY3RvcjIsIHRvOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHExOiBudW1iZXIgPSBNYXRoLmF0YW4yKHRvLnksIHRvLngpO1xuICAgICAgICAgICAgY29uc3QgcTI6IG51bWJlciA9IE1hdGguYXRhbjIoZnJvbS55LCBmcm9tLngpO1xuXG4gICAgICAgICAgICBsZXQgcmV0OiBudW1iZXIgPSBxMSAtIHEyO1xuXG4gICAgICAgICAgICB3aGlsZShyZXQgPCAtTWF0aC5QSSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXQgKz0gTWF0aC5QSSAqIDIuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUocmV0ID4gTWF0aC5QSSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXQgLT0gTWF0aC5QSSAqIDIuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDvvJLjgaTjga7jg5njgq/jg4jjg6vjgYvjgonop5LluqblgKTjgpLmsYLjgoHjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGZyb20gIOWni+eCueODmeOCr+ODiOODq1xuICAgICAgICAgKiBAcGFyYW0gdG8gICAg57WC54K544OZ44Kv44OI44OrXG4gICAgICAgICAqIEByZXR1cm4g6KeS5bqm5YCk44GL44KJ5rGC44KB44Gf5pa55ZCR44OZ44Kv44OI44OrXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZGlyZWN0aW9uVG9EZWdyZWVzKGZyb206IEN1YmlzbVZlY3RvcjIsIHRvOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHJhZGlhbjogbnVtYmVyID0gdGhpcy5kaXJlY3Rpb25Ub1JhZGlhbihmcm9tLCB0byk7XG4gICAgICAgICAgICBsZXQgZGVncmVlOiBudW1iZXIgPSB0aGlzLnJhZGlhblRvRGVncmVlcyhyYWRpYW4pO1xuXG4gICAgICAgICAgICBpZiAoKHRvLnggLSBmcm9tLngpID4gMC4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRlZ3JlZSA9IC1kZWdyZWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWdyZWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Op44K444Ki44Oz5YCk44KS5pa55ZCR44OZ44Kv44OI44Or44Gr5aSJ5o+b44GZ44KL44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB0b3RhbEFuZ2xlICAgIOODqeOCuOOCouODs+WApFxuICAgICAgICAgKiBAcmV0dXJuIOODqeOCuOOCouODs+WApOOBi+OCieWkieaPm+OBl+OBn+aWueWQkeODmeOCr+ODiOODq1xuICAgICAgICAgKi9cblxuICAgICAgICAgc3RhdGljIHJhZGlhblRvRGlyZWN0aW9uKHRvdGFsQW5nbGU6IG51bWJlcik6IEN1YmlzbVZlY3RvcjJcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigpO1xuXG4gICAgICAgICAgICByZXQueCA9IHRoaXMuc2luKHRvdGFsQW5nbGUpO1xuICAgICAgICAgICAgcmV0LnkgPSB0aGlzLmNvcyh0b3RhbEFuZ2xlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgIH1cblxuICAgICAgICAgLyoqXG4gICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICAqL1xuICAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpXG4gICAgICAgICB7XG5cbiAgICAgICAgIH1cbiAgICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIDR4NOOBruihjOWIl1xuICAgICAqXG4gICAgICogNHg06KGM5YiX44Gu5L6/5Yip44Kv44Op44K544CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbU1hdHJpeDQ0XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90ciA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpOyAgICAvLyA0ICogNOOBruOCteOCpOOCulxuICAgICAgICAgICAgdGhpcy5sb2FkSWRlbnRpdHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlj5fjgZHlj5bjgaPjgZ/vvJLjgaTjga7ooYzliJfjga7kuZfnrpfjgpLooYzjgYbjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGEg6KGM5YiXYVxuICAgICAgICAgKiBAcGFyYW0gYiDooYzliJdiXG4gICAgICAgICAqIEByZXR1cm4g5LmX566X57WQ5p6c44Gu6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIG11bHRpcGx5KGE6IEZsb2F0MzJBcnJheSwgYjogRmxvYXQzMkFycmF5LCBkc3Q6IEZsb2F0MzJBcnJheSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGM6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgbjogbnVtYmVyID0gNDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG47ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo6IG51bWJlciA9IDA7IGogPCBuOyArK2opXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGs6IG51bWJlciA9IDA7IGsgPCBuOyArK2spXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNbaiArIGkgKiA0XSArPSBhW2sgKyBpICogNF0gKiBiW2ogKyBrICogNF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IDE2OyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZHN0W2ldID0gY1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDljZjkvY3ooYzliJfjgavliJ3mnJ/ljJbjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBsb2FkSWRlbnRpdHkoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgYzogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDEuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0TWF0cml4KGMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihjOWIl+OCkuioreWumlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gdHIgMTblgIvjga7mta7li5XlsI/mlbDngrnmlbDjgafooajjgZXjgozjgos0eDTjga7ooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRNYXRyaXgodHI6IEZsb2F0MzJBcnJheSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDE2OyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJbaV0gPSB0cltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDooYzliJfjgpLmta7li5XlsI/mlbDngrnmlbDjga7phY3liJfjgaflj5blvpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiAxNuWAi+OBrua1ruWLleWwj+aVsOeCueaVsOOBp+ihqOOBleOCjOOCizR4NOOBruihjOWIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEFycmF5KCk6IEZsb2F0MzJBcnJheVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBruaLoeWkp+eOh+OCkuWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIFjou7jjga7mi6HlpKfnjodcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTY2FsZVgoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6Lu444Gu5ouh5aSn546H44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gWei7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNjYWxlWSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzVdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjou7jjga7np7vli5Xph4/jgpLlj5blvpdcbiAgICAgICAgICogQHJldHVybiBY6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VHJhbnNsYXRlWCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzEyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6Lu444Gu56e75YuV6YeP44KS5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gWei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFRyYW5zbGF0ZVkoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clsxM107XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+ioiOeul1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gc3JjIFjou7jjga7lgKRcbiAgICAgICAgICogQHJldHVybiDnj77lnKjjga7ooYzliJfjgafoqIjnrpfjgZXjgozjgZ9Y6Lu444Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNmb3JtWChzcmM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMF0gKiBzcmMgKyB0aGlzLl90clsxMl07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWei7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+ioiOeul1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gc3JjIFnou7jjga7lgKRcbiAgICAgICAgICogQHJldHVybuOAgOePvuWcqOOBruihjOWIl+OBp+ioiOeul+OBleOCjOOBn1nou7jjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2Zvcm1ZKHNyYzogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cls1XSAqIHNyYyArIHRoaXMuX3RyWzEzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6YCG6KiI566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW52ZXJ0VHJhbnNmb3JtWChzcmM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHNyYyAtIHRoaXMuX3RyWzEyXSkgLyB0aGlzLl90clswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6YCG6KiI566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW52ZXJ0VHJhbnNmb3JtWShzcmM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHNyYyAtIHRoaXMuX3RyWzEzXSkgLyB0aGlzLl90cls1XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLotbfngrnjgavjgZfjgabnp7vli5VcbiAgICAgICAgICpcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS6LW354K544Gr44GX44Gm55u45a++55qE44Gr56e75YuV44GZ44KL44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVJlbGF0aXZlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMS4wLCAgICAwLjAsICAgIDAuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDEuMCwgICAgMC4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAxLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgeCwgICAgICB5LCAgICAgIDAuMCwgICAgMS4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkodHIxLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkuenu+WLlVxuICAgICAgICAgKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xuICAgICAgICAgKiBAcGFyYW0geSB56Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90clsxMl0gPSB4O1xuICAgICAgICAgICAgdGhpcy5fdHJbMTNdID0geTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga5Y6Lu444Gu5L2N572u44KS5oyH5a6a44GX44Gf5L2N572u44G456e75YuV44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGVYKHg6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHJbMTJdID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga5Z6Lu444Gu5L2N572u44KS5oyH5a6a44GX44Gf5L2N572u44G456e75YuV44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGVZKHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHJbMTNdID0geTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruaLoeWkp+eOh+OCkuebuOWvvueahOOBq+ioreWumuOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7mi6HlpKfnjodcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzY2FsZVJlbGF0aXZlKHg6IG51bWJlciwgeTpudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB0cjE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB4LCAgICAgIDAuMCwgICAgMC4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgeSwgICAgICAwLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDEuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMC4wLCAgICAxLjBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseSh0cjEsIHRoaXMuX3RyLCB0aGlzLl90cik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5ouh5aSn546H44KS5oyH5a6a44GX44Gf5YCN546H44Gr6Kit5a6a44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7mi6HlpKfnjodcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNjYWxlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90clswXSA9IHg7XG4gICAgICAgICAgICB0aGlzLl90cls1XSA9IHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gr6KGM5YiX44KS5LmX566XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBtIOihjOWIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG11bHRpcGx5QnlNYXRyaXgobTogQ3ViaXNtTWF0cml4NDQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KG0uZ2V0QXJyYXkoKSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqrjg5bjgrjjgqfjgq/jg4jjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjbG9uZSgpOiBDdWJpc21NYXRyaXg0NFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY2xvbmVNYXRyaXg6IEN1YmlzbU1hdHJpeDQ0ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3RyLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsb25lTWF0cml4Ll90cltpXSA9IHRoaXMuX3RyW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVNYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICBwcm90ZWN0ZWQgX3RyOiBGbG9hdDMyQXJyYXk7ICAgIC8vIDR4NOihjOWIl+ODh+ODvOOCv1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICogMuasoeWFg+ODmeOCr+ODiOODq+Wei1xuICAgICAqXG4gICAgICogMuasoeWFg+ODmeOCr+ODiOODq+Wei+OBruapn+iDveOCkuaPkOS+m+OBmeOCi+OAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21WZWN0b3IyXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHg/OiBudW1iZXIsIHB1YmxpYyB5PzogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnggPSAoeCA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyAwLjBcbiAgICAgICAgICAgICAgICA6IHg7XG5cbiAgICAgICAgICAgIHRoaXMueSA9ICh5ID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IDAuMFxuICAgICAgICAgICAgICAgIDogeTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7liqDnrpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHZlY3RvcjIg5Yqg566X44GZ44KL44OZ44Kv44OI44Or5YCkXG4gICAgICAgICAqIEByZXR1cm4g5Yqg566X57WQ5p6cIOODmeOCr+ODiOODq+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFkZCh2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggKyB2ZWN0b3IyLng7XG4gICAgICAgICAgICByZXQueSA9IHRoaXMueSArIHZlY3RvcjIueTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu5rib566XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB2ZWN0b3IyIOa4m+eul+OBmeOCi+ODmeOCr+ODiOODq+WApFxuICAgICAgICAgKiBAcmV0dXJuIOa4m+eul+e1kOaenCDjg5njgq/jg4jjg6vlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdWJzdHJhY3QodmVjdG9yMjogQ3ViaXNtVmVjdG9yMik6IEN1YmlzbVZlY3RvcjJcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcbiAgICAgICAgICAgIHJldC54ID0gdGhpcy54IC0gdmVjdG9yMi54O1xuICAgICAgICAgICAgcmV0LnkgPSB0aGlzLnkgLSB2ZWN0b3IyLnk7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBruS5l+eul1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gdmVjdG9yMiDkuZfnrpfjgZnjgovjg5njgq/jg4jjg6vlgKRcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjgIDjg5njgq/jg4jjg6vlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseSh2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggKiB2ZWN0b3IyLng7XG4gICAgICAgICAgICByZXQueSA9IHRoaXMueSAqIHZlY3RvcjIueTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu5LmX566XKOOCueOCq+ODqeODvClcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHNjYWxhciDkuZfnrpfjgZnjgovjgrnjgqvjg6njg7zlgKRcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjgIDjg5njgq/jg4jjg6vlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseUJ5U2NhbGVyKHNjYWxhcjogbnVtYmVyKTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseShuZXcgQ3ViaXNtVmVjdG9yMihzY2FsYXIsIHNjYWxhcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBrumZpOeul1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gdmVjdG9yMiDpmaTnrpfjgZnjgovjg5njgq/jg4jjg6vlgKRcbiAgICAgICAgICogQHJldHVybiDpmaTnrpfntZDmnpzjgIDjg5njgq/jg4jjg6vlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkaXZpc2lvbih2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggLyB2ZWN0b3IyLng7XG4gICAgICAgICAgICByZXQueSA9IHRoaXMueSAvIHZlY3RvcjIueTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6Zmk566XKOOCueOCq+ODqeODvClcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHNjYWxhciDpmaTnrpfjgZnjgovjgrnjgqvjg6njg7zlgKRcbiAgICAgICAgICogQHJldHVybiDpmaTnrpfntZDmnpzjgIDjg5njgq/jg4jjg6vlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkaXZpc2lvbkJ5U2NhbGFyKHNjYWxhcjogbnVtYmVyKTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXZpc2lvbihuZXcgQ3ViaXNtVmVjdG9yMihzY2FsYXIsIHNjYWxhcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBrumVt+OBleOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIOODmeOCr+ODiOODq+OBrumVt+OBlVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldExlbmd0aCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBrui3nembouOBruWPluW+l1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gYSDngrlcbiAgICAgICAgICogQHJldHVybiDjg5njgq/jg4jjg6vjga7ot53pm6JcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXREaXN0YW5jZVdpdGgoYTogQ3ViaXNtVmVjdG9yMik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCgodGhpcy54IC0gYS54KSAqICh0aGlzLnggLSBhLngpKSArICgodGhpcy55IC0gYS55KSAqICh0aGlzLnkgLSBhLnkpKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OJ44OD44OI56mN44Gu6KiI566XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBhIOWApFxuICAgICAgICAgKiBAcmV0dXJuIOe1kOaenFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGRvdChhOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy54ICogYS54KSArICh0aGlzLnkgKiBhLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOato+imj+WMluOBrumBqeeUqFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG5vcm1hbGl6ZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aDogbnVtYmVyID0gTWF0aC5wb3coKHRoaXMueCAqIHRoaXMueCkgKyAodGhpcy55ICogdGhpcy55KSwgMC41KTtcblxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy54IC8gbGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55IC8gbGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOetieOBl+OBleOBrueiuuiqje+8iOetieOBl+OBhOOBi++8n++8iVxuICAgICAgICAgKlxuICAgICAgICAgKiDlgKTjgYznrYnjgZfjgYTjgYvvvJ9cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHJocyDnorroqo3jgZnjgovlgKRcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWApOOBr+etieOBl+OBhFxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWApOOBr+etieOBl+OBj+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXF1YWwocmhzOiBDdWJpc21WZWN0b3IyKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMueCA9PSByaHMueCkgJiYgKHRoaXMueSA9PSByaHMueSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog562J44GX44GV44Gu56K66KqN77yI562J44GX44GP44Gq44GE44GL77yf77yJXG4gICAgICAgICAqXG4gICAgICAgICAqIOWApOOBjOetieOBl+OBj+OBquOBhOOBi++8n1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gcmhzIOeiuuiqjeOBmeOCi+WApFxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5YCk44Gv562J44GX44GP44Gq44GEXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5YCk44Gv562J44GX44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOb3RFcXVhbChyaHM6IEN1YmlzbVZlY3RvcjIpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAhKHRoaXMuaXNFcXVhbChyaHMpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1hdGh9IGZyb20gJy4uL21hdGgvY3ViaXNtbWF0aCc7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tb2RlbH0gZnJvbSAnLi4vbW9kZWwvY3ViaXNtbW9kZWwnO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW90aW9ucXVldWVlbnRyeX0gZnJvbSAnLi9jdWJpc21tb3Rpb25xdWV1ZWVudHJ5JztcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSAnLi4vdHlwZS9jc21zdHJpbmcnO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tICcuLi90eXBlL2NzbXZlY3Rvcic7XG5pbXBvcnQgeyBDU01fQVNTRVJUIH0gZnJvbSAnLi4vdXRpbHMvY3ViaXNtZGVidWcnO1xuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcbmltcG9ydCBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5ID0gY3ViaXNtbW90aW9ucXVldWVlbnRyeS5DdWJpc21Nb3Rpb25RdWV1ZUVudHJ5O1xuaW1wb3J0IEN1YmlzbU1vZGVsID0gY3ViaXNtbW9kZWwuQ3ViaXNtTW9kZWw7XG5pbXBvcnQgQ3ViaXNtTWF0aCA9IGN1YmlzbW1hdGguQ3ViaXNtTWF0aDtcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7mir3osaHln7rlupXjgq/jg6njgrlcbiAgICAgKlxuICAgICAqIOODouODvOOCt+ODp+ODs+OBruaKveixoeWfuuW6leOCr+ODqeOCueOAgk1vdGlvblF1ZXVlTWFuYWdlcuOBq+OCiOOBo+OBpuODouODvOOCt+ODp+ODs+OBruWGjeeUn+OCkueuoeeQhuOBmeOCi+OAglxuICAgICAqL1xuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBQ3ViaXNtTW90aW9uXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kk44Oz44K544K/44Oz44K544Gu56C05qOEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZShtb3Rpb246IEFDdWJpc21Nb3Rpb24pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1vdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICBtb3Rpb24gPSB2b2lkIDA7XG4gICAgICAgICAgICBtb3Rpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZmFkZUluU2Vjb25kcyA9IC0xLjA7XG4gICAgICAgICAgICB0aGlzLl9mYWRlT3V0U2Vjb25kcyA9IC0xLjA7XG4gICAgICAgICAgICB0aGlzLl93ZWlnaHQgPSAxLjA7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXRTZWNvbmRzID0gMC4wOyAgLy8g5YaN55Sf44Gu6ZaL5aeL5pmC5Yi7XG4gICAgICAgICAgICB0aGlzLl9maXJlZEV2ZW50VmFsdWVzID0gbmV3IGNzbVZlY3Rvcjxjc21TdHJpbmc+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3dlaWdodCA9IDAuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7jg5Hjg6njg6Hjg7zjgr9cbiAgICAgICAgICogQHBhcmFtIG1vZGVsIOWvvuixoeOBruODouODh+ODq1xuICAgICAgICAgKiBAcGFyYW0gbW90aW9uUXVldWVFbnRyeSBDdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXLjgafnrqHnkIbjgZXjgozjgabjgYTjgovjg6Ljg7zjgrfjg6fjg7NcbiAgICAgICAgICogQHBhcmFtIHVzZXJUaW1lU2Vjb25kcyDjg4fjg6vjgr/mmYLplpPjga7nqY3nrpflgKRb56eSXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHVwZGF0ZVBhcmFtZXRlcnMobW9kZWw6IEN1YmlzbU1vZGVsLCBtb3Rpb25RdWV1ZUVudHJ5OiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5LCB1c2VyVGltZVNlY29uZHM6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIW1vdGlvblF1ZXVlRW50cnkuaXNBdmFpbGFibGUoKSB8fCBtb3Rpb25RdWV1ZUVudHJ5LmlzRmluaXNoZWQoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFtb3Rpb25RdWV1ZUVudHJ5LmlzU3RhcnRlZCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkuc2V0SXNTdGFydGVkKHRydWUpO1xuICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkuc2V0U3RhcnRUaW1lKHVzZXJUaW1lU2Vjb25kcyAtIHRoaXMuX29mZnNldFNlY29uZHMpOyAvLyDjg6Ljg7zjgrfjg6fjg7Pjga7plovlp4vmmYLliLvjgpLoqJjpjLJcbiAgICAgICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5LnNldEZhZGVJblN0YXJ0VGltZSh1c2VyVGltZVNlY29uZHMpOyAvLyDjg5Xjgqfjg7zjg4njgqTjg7Pjga7plovlp4vmmYLliLtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uOiBudW1iZXIgPSB0aGlzLmdldER1cmF0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBpZihtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSA8IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyDplovlp4vjgZfjgabjgYTjgarjgYTjgYbjgaHjgavntYLkuoboqK3lrprjgZfjgabjgYTjgovloLTlkIjjgYzjgYLjgovjgIJcbiAgICAgICAgICAgICAgICAgICAgbW90aW9uUXVldWVFbnRyeS5zZXRFbmRUaW1lKChkdXJhdGlvbiA8PSAwKSA/IC0xIDogbW90aW9uUXVldWVFbnRyeS5nZXRTdGFydFRpbWUoKSArIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZHVyYXRpb24gPT0gLTEg44Gu5aC05ZCI44Gv44Or44O844OX44GZ44KLXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZmFkZVdlaWdodDogbnVtYmVyID0gdGhpcy5fd2VpZ2h0OyAvLyDnj77lnKjjga7lgKTjgajmjpvjgZHlkIjjgo/jgZvjgovlibLlkIhcblxuICAgICAgICAgICAgLy8tLS0tIOODleOCp+ODvOODieOCpOODs+ODu+OCouOCpuODiOOBruWHpueQhiAtLS0tXG4gICAgICAgICAgICAvLyDljZjntJTjgarjgrXjgqTjg7PplqLmlbDjgafjgqTjg7zjgrjjg7PjgrDjgZnjgotcbiAgICAgICAgICAgIGNvbnN0IGZhZGVJbjogbnVtYmVyID0gdGhpcy5fZmFkZUluU2Vjb25kcyA9PSAwLjBcbiAgICAgICAgICAgICAgICAgICAgPyAxLjBcbiAgICAgICAgICAgICAgICAgICAgOiBDdWJpc21NYXRoLmdldEVhc2luZ1NpbmUoKHVzZXJUaW1lU2Vjb25kcyAtIG1vdGlvblF1ZXVlRW50cnkuZ2V0RmFkZUluU3RhcnRUaW1lKCkpIC8gdGhpcy5fZmFkZUluU2Vjb25kcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZhZGVPdXQ6IG51bWJlciA9ICh0aGlzLl9mYWRlT3V0U2Vjb25kcyA9PSAwLjAgfHwgbW90aW9uUXVldWVFbnRyeS5nZXRFbmRUaW1lKCkgPCAwLjApXG4gICAgICAgICAgICAgICAgICAgID8gMS4wXG4gICAgICAgICAgICAgICAgICAgIDogQ3ViaXNtTWF0aC5nZXRFYXNpbmdTaW5lKChtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSAtIHVzZXJUaW1lU2Vjb25kcykgLyB0aGlzLl9mYWRlT3V0U2Vjb25kcyk7XG5cbiAgICAgICAgICAgIGZhZGVXZWlnaHQgPSBmYWRlV2VpZ2h0ICogZmFkZUluICogZmFkZU91dDtcblxuICAgICAgICAgICAgbW90aW9uUXVldWVFbnRyeS5zZXRTdGF0ZSh1c2VyVGltZVNlY29uZHMsIGZhZGVXZWlnaHQpO1xuXG4gICAgICAgICAgICBDU01fQVNTRVJUKDAuMCA8PSBmYWRlV2VpZ2h0ICYmIGZhZGVXZWlnaHQgPD0gMS4wKTtcblxuICAgICAgICAgICAgLy8tLS0tIOWFqOOBpuOBruODkeODqeODoeODvOOCv0lE44KS44Or44O844OX44GZ44KLIC0tLS1cbiAgICAgICAgICAgIHRoaXMuZG9VcGRhdGVQYXJhbWV0ZXJzKG1vZGVsLCB1c2VyVGltZVNlY29uZHMsIGZhZGVXZWlnaHQsIG1vdGlvblF1ZXVlRW50cnkpO1xuXG4gICAgICAgICAgICAvLyDlvozlh6bnkIZcbiAgICAgICAgICAgIC8vIOe1guS6huaZguWIu+OCkumBjuOBjuOBn+OCiee1guS6huODleODqeOCsOOCkueri+OBpuOCiyhDdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXIpXG4gICAgICAgICAgICBpZigobW90aW9uUXVldWVFbnRyeS5nZXRFbmRUaW1lKCkgPiAwKSAmJiAobW90aW9uUXVldWVFbnRyeS5nZXRFbmRUaW1lKCkgPCB1c2VyVGltZVNlY29uZHMpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkuc2V0SXNGaW5pc2hlZCh0cnVlKTsgLy8g57WC5LqGXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OV44Kn44O844OJ44Kk44Oz44Gu5pmC6ZaT44KS6Kit5a6a44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBmYWRlSW5TZWNvbmRzIOODleOCp+ODvOODieOCpOODs+OBq+OBi+OBi+OCi+aZgumWk1vnp5JdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0RmFkZUluVGltZShmYWRlSW5TZWNvbmRzOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2ZhZGVJblNlY29uZHMgPSBmYWRlSW5TZWNvbmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODleOCp+ODvOODieOCouOCpuODiOOBruaZgumWk+OCkuioreWumuOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZmFkZU91dFNlY29uZHMg44OV44Kn44O844OJ44Ki44Km44OI44Gr44GL44GL44KL5pmC6ZaTW+enkl1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRGYWRlT3V0VGltZShmYWRlT3V0U2Vjb25kczogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9mYWRlT3V0U2Vjb25kcyA9IGZhZGVPdXRTZWNvbmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODleOCp+ODvOODieOCouOCpuODiOOBq+OBi+OBi+OCi+aZgumWk+OBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOODleOCp+ODvOODieOCouOCpuODiOOBq+OBi+OBi+OCi+aZgumWk1vnp5JdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RmFkZU91dFRpbWUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mYWRlT3V0U2Vjb25kcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Xjgqfjg7zjg4njgqTjg7PjgavjgYvjgYvjgovmmYLplpPjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDjg5Xjgqfjg7zjg4njgqTjg7PjgavjgYvjgYvjgovmmYLplpNb56eSXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEZhZGVJblRpbWUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mYWRlSW5TZWNvbmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+mBqeeUqOOBrumHjeOBv+OBruioreWumlxuICAgICAgICAgKiBAcGFyYW0gd2VpZ2h0IOmHjeOBv++8iDAuMCAtIDEuMO+8iVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldFdlaWdodCh3ZWlnaHQ6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ID0gd2VpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+mBqeeUqOOBrumHjeOBv+OBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOmHjeOBv++8iDAuMCAtIDEuMO+8iVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFdlaWdodCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7plbfjgZXjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjga7plbfjgZVb56eSXVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbm90ZSDjg6vjg7zjg5fjga7mmYLjga/jgIwtMeOAjeOAglxuICAgICAgICAgKiAgICAgICDjg6vjg7zjg5fjgafjgarjgYTloLTlkIjjga/jgIHjgqrjg7zjg5Djg7zjg6njgqTjg4njgZnjgovjgIJcbiAgICAgICAgICogICAgICAg5q2j44Gu5YCk44Gu5pmC44Gv5Y+W5b6X44GV44KM44KL5pmC6ZaT44Gn57WC5LqG44GZ44KL44CCXG4gICAgICAgICAqICAgICAgIOOAjC0x44CN44Gu5pmC44Gv5aSW6YOo44GL44KJ5YGc5q2i5ZG95Luk44GM44Gq44GE6ZmQ44KK57WC44KP44KJ44Gq44GE5Yem55CG44Go44Gq44KL44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RHVyYXRpb24oKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAtMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBruODq+ODvOODlzHlm57liIbjga7plbfjgZXjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjga7jg6vjg7zjg5fkuIDlm57liIbjga7plbfjgZVb56eSXVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbm90ZSDjg6vjg7zjg5fjgZfjgarjgYTloLTlkIjjga/jgIFnZXREdXJhdGlvbigp44Go5ZCM44GY5YCk44KS6L+U44GZXG4gICAgICAgICAqICAgICAgIOODq+ODvOODl+S4gOWbnuWIhuOBrumVt+OBleOBjOWumue+qeOBp+OBjeOBquOBhOWgtOWQiCjjg5fjg63jgrDjg6njg6DnmoTjgavli5XjgY3ntprjgZHjgovjgrXjg5bjgq/jg6njgrnjgarjgakp44Gu5aC05ZCI44Gv44CMLTHjgI3jgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRMb29wRHVyYXRpb24oKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAtMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+WGjeeUn+OBrumWi+Wni+aZguWIu+OBruioreWumlxuICAgICAgICAgKiBAcGFyYW0gb2Zmc2V0U2Vjb25kcyDjg6Ljg7zjgrfjg6fjg7Plho3nlJ/jga7plovlp4vmmYLliLtb56eSXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldE9mZnNldFRpbWUob2Zmc2V0U2Vjb25kczogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXRTZWNvbmRzID0gb2Zmc2V0U2Vjb25kcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7jg5Hjg6njg6Hjg7zjgr/mm7TmlrBcbiAgICAgICAgICpcbiAgICAgICAgICog44Kk44OZ44Oz44OI55m654Gr44Gu44OB44Kn44OD44Kv44CCXG4gICAgICAgICAqIOWFpeWKm+OBmeOCi+aZgumWk+OBr+WRvOOBsOOCjOOCi+ODouODvOOCt+ODp+ODs+OCv+OCpOODn+ODs+OCsOOCku+8kOOBqOOBl+OBn+enkuaVsOOBp+ihjOOBhuOAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gYmVmb3JlQ2hlY2tUaW1lU2Vjb25kcyDliY3lm57jga7jgqTjg5njg7Pjg4jjg4Hjgqfjg4Pjgq/mmYLplpNb56eSXVxuICAgICAgICAgKiBAcGFyYW0gbW90aW9uVGltZVNlY29uZHMg5LuK5Zue44Gu5YaN55Sf5pmC6ZaTW+enkl1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRGaXJlZEV2ZW50KGJlZm9yZUNoZWNrVGltZVNlY29uZHM6IG51bWJlciwgbW90aW9uVGltZVNlY29uZHM6IG51bWJlcik6IGNzbVZlY3Rvcjxjc21TdHJpbmc+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maXJlZEV2ZW50VmFsdWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OCkuabtOaWsOOBl+OBpuOAgeODouODh+ODq+OBq+ODkeODqeODoeODvOOCv+WApOOCkuWPjeaYoOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg5a++6LGh44Gu44Oi44OH44OrXG4gICAgICAgICAqIEBwYXJhbSB1c2VyVGltZVNlY29uZHMg44OH44Or44K/5pmC6ZaT44Gu56mN566X5YCkW+enkl1cbiAgICAgICAgICogQHBhcmFtIHdlaWdodCDjg6Ljg7zjgrfjg6fjg7Pjga7ph43jgb9cbiAgICAgICAgICogQHBhcmFtIG1vdGlvblF1ZXVlRW50cnkgQ3ViaXNtTW90aW9uUXVldWVNYW5hZ2Vy44Gn566h55CG44GV44KM44Gm44GE44KL44Oi44O844K344On44OzXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjg6Ljg4fjg6vjgbjjg5Hjg6njg6Hjg7zjgr/lgKTjga7lj43mmKDjgYLjgopcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjg6Ljg4fjg6vjgbjjga7jg5Hjg6njg6Hjg7zjgr/lgKTjga7lj43mmKDjgarjgZfvvIjjg6Ljg7zjgrfjg6fjg7Pjga7lpInljJbjgarjgZfvvIlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBkb1VwZGF0ZVBhcmFtZXRlcnMobW9kZWw6IEN1YmlzbU1vZGVsLCB1c2VyVGltZVNlY29uZHM6IG51bWJlciwgd2VpZ2h0OiBudW1iZXIsIG1vdGlvblF1ZXVlRW50cnk6IEN1YmlzbU1vdGlvblF1ZXVlRW50cnkpOiB2b2lkO1xuXG5cbiAgICAgICAgcHVibGljIF9mYWRlSW5TZWNvbmRzOiBudW1iZXI7IC8vIOODleOCp+ODvOODieOCpOODs+OBq+OBi+OBi+OCi+aZgumWk1vnp5JdXG4gICAgICAgIHB1YmxpYyBfZmFkZU91dFNlY29uZHM6IG51bWJlcjsgLy8g44OV44Kn44O844OJ44Ki44Km44OI44Gr44GL44GL44KL5pmC6ZaTW+enkl1cbiAgICAgICAgcHVibGljIF93ZWlnaHQ6IG51bWJlcjsgLy8g44Oi44O844K344On44Oz44Gu6YeN44G/XG4gICAgICAgIHB1YmxpYyBfb2Zmc2V0U2Vjb25kczogbnVtYmVyOyAvLyDjg6Ljg7zjgrfjg6fjg7Plho3nlJ/jga7plovlp4vmmYLplpNb56eSXVxuXG4gICAgICAgIHB1YmxpYyBfZmlyZWRFdmVudFZhbHVlczogY3NtVmVjdG9yPGNzbVN0cmluZz47XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW90aW9uanNvbn0gZnJvbSAnLi9jdWJpc21tb3Rpb25qc29uJztcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1vdGlvbmludGVybmFsfSBmcm9tICcuL2N1YmlzbW1vdGlvbmludGVybmFsJztcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGFjdWJpc21tb3Rpb259IGZyb20gJy4vYWN1YmlzbW1vdGlvbic7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tb2RlbH0gZnJvbSAnLi4vbW9kZWwvY3ViaXNtbW9kZWwnO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtZnJhbWV3b3JrfSBmcm9tICcuLi9saXZlMmRjdWJpc21mcmFtZXdvcmsnO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW90aW9ucXVldWVlbnRyeX0gZnJvbSAnLi9jdWJpc21tb3Rpb25xdWV1ZWVudHJ5JztcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1hdGh9IGZyb20gJy4uL21hdGgvY3ViaXNtbWF0aCc7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc212ZWN0b3J9IGZyb20gJy4uL3R5cGUvY3NtdmVjdG9yJztcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkfSBmcm9tICcuLi9pZC9jdWJpc21pZCc7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gJy4uL3R5cGUvY3Ntc3RyaW5nJztcbmltcG9ydCB7Q3ViaXNtTG9nRGVidWcsIENTTV9BU1NFUlR9IGZyb20gJy4uL3V0aWxzL2N1YmlzbWRlYnVnJztcbmltcG9ydCBjc21TdHJpbmcgPSBjc21zdHJpbmcuY3NtU3RyaW5nO1xuaW1wb3J0IEN1YmlzbU1vdGlvbkRhdGEgPSBjdWJpc21tb3Rpb25pbnRlcm5hbC5DdWJpc21Nb3Rpb25EYXRhO1xuaW1wb3J0IEN1YmlzbU1vdGlvblNlZ21lbnQgPSBjdWJpc21tb3Rpb25pbnRlcm5hbC5DdWJpc21Nb3Rpb25TZWdtZW50O1xuaW1wb3J0IEN1YmlzbU1vdGlvblBvaW50ID0gY3ViaXNtbW90aW9uaW50ZXJuYWwuQ3ViaXNtTW90aW9uUG9pbnQ7XG5pbXBvcnQgQ3ViaXNtTW90aW9uRXZlbnQgPSBjdWJpc21tb3Rpb25pbnRlcm5hbC5DdWJpc21Nb3Rpb25FdmVudDtcbmltcG9ydCBDdWJpc21Nb3Rpb25TZWdtZW50VHlwZSA9IGN1YmlzbW1vdGlvbmludGVybmFsLkN1YmlzbU1vdGlvblNlZ21lbnRUeXBlO1xuaW1wb3J0IEN1YmlzbUlkSGFuZGxlID0gY3ViaXNtaWQuQ3ViaXNtSWRIYW5kbGU7XG5pbXBvcnQgQ3ViaXNtTW90aW9uQ3VydmUgPSBjdWJpc21tb3Rpb25pbnRlcm5hbC5DdWJpc21Nb3Rpb25DdXJ2ZTtcbmltcG9ydCBDdWJpc21Nb3Rpb25DdXJ2ZVRhcmdldCA9IGN1YmlzbW1vdGlvbmludGVybmFsLkN1YmlzbU1vdGlvbkN1cnZlVGFyZ2V0O1xuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XG5pbXBvcnQgQ3ViaXNtTWF0aCA9IGN1YmlzbW1hdGguQ3ViaXNtTWF0aDtcbmltcG9ydCBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5ID0gY3ViaXNtbW90aW9ucXVldWVlbnRyeS5DdWJpc21Nb3Rpb25RdWV1ZUVudHJ5O1xuaW1wb3J0IEN1YmlzbUZyYW1ld29yayA9IGN1YmlzbWZyYW1ld29yay5DdWJpc21GcmFtZXdvcms7XG5pbXBvcnQgQ3ViaXNtTW9kZWwgPSBjdWJpc21tb2RlbC5DdWJpc21Nb2RlbDtcbmltcG9ydCBBQ3ViaXNtTW90aW9uID0gYWN1YmlzbW1vdGlvbi5BQ3ViaXNtTW90aW9uO1xuaW1wb3J0IEN1YmlzbU1vdGlvbkpzb24gPSBjdWJpc21tb3Rpb25qc29uLkN1YmlzbU1vdGlvbkpzb247XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgY29uc3QgRWZmZWN0TmFtZUV5ZUJsaW5rOiBzdHJpbmcgPSBcIkV5ZUJsaW5rXCI7XG4gICAgY29uc3QgRWZmZWN0TmFtZUxpcFN5bmM6IHN0cmluZyAgPSBcIkxpcFN5bmNcIjtcbiAgICBjb25zdCBUYXJnZXROYW1lTW9kZWw6IHN0cmluZyA9IFwiTW9kZWxcIjtcbiAgICBjb25zdCBUYXJnZXROYW1lUGFyYW1ldGVyOiBzdHJpbmcgPSBcIlBhcmFtZXRlclwiO1xuICAgIGNvbnN0IFRhcmdldE5hbWVQYXJ0T3BhY2l0eTogc3RyaW5nID0gXCJQYXJ0T3BhY2l0eVwiO1xuXG4gICAgZnVuY3Rpb24gbGVycFBvaW50cyhhOiBDdWJpc21Nb3Rpb25Qb2ludCwgYjogQ3ViaXNtTW90aW9uUG9pbnQsIHQ6IG51bWJlcik6IEN1YmlzbU1vdGlvblBvaW50XG4gICAge1xuICAgICAgICBsZXQgcmVzdWx0OiBDdWJpc21Nb3Rpb25Qb2ludCA9IG5ldyBDdWJpc21Nb3Rpb25Qb2ludCgpO1xuXG4gICAgICAgIHJlc3VsdC50aW1lID0gYS50aW1lICsgKChiLnRpbWUgLSBhLnRpbWUpICogdCk7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGEudmFsdWUgKyAoKGIudmFsdWUgLSBhLnZhbHVlKSAqIHQpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZWFyRXZhbHVhdGUocG9pbnRzOiBDdWJpc21Nb3Rpb25Qb2ludFtdLCB0aW1lOiBudW1iZXIpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCB0OiBudW1iZXIgPSAodGltZSAtIHBvaW50c1swXS50aW1lKSAvIChwb2ludHNbMV0udGltZSAtIHBvaW50c1swXS50aW1lKTtcblxuICAgICAgICBpZiAodCA8IDAuMClcbiAgICAgICAge1xuICAgICAgICAgICAgdCA9IDAuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb2ludHNbMF0udmFsdWUgKyAoKHBvaW50c1sxXS52YWx1ZSAtIHBvaW50c1swXS52YWx1ZSkgKiB0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiZXppZXJFdmFsdWF0ZShwb2ludHM6IEN1YmlzbU1vdGlvblBvaW50W10sIHRpbWU6IG51bWJlcik6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IHQ6IG51bWJlciA9ICh0aW1lIC0gcG9pbnRzWzBdLnRpbWUpIC8gKHBvaW50c1szXS50aW1lIC0gcG9pbnRzWzBdLnRpbWUpO1xuXG4gICAgICAgIGlmICh0IDwgMC4wKVxuICAgICAgICB7XG4gICAgICAgICAgICB0ID0gMC4wO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcDAxOiBDdWJpc21Nb3Rpb25Qb2ludCA9IGxlcnBQb2ludHMocG9pbnRzWzBdLCBwb2ludHNbMV0sIHQpO1xuICAgICAgICBjb25zdCBwMTI6IEN1YmlzbU1vdGlvblBvaW50ID0gbGVycFBvaW50cyhwb2ludHNbMV0sIHBvaW50c1syXSwgdCk7XG4gICAgICAgIGNvbnN0IHAyMzogQ3ViaXNtTW90aW9uUG9pbnQgPSBsZXJwUG9pbnRzKHBvaW50c1syXSwgcG9pbnRzWzNdLCB0KTtcblxuICAgICAgICBjb25zdCBwMDEyOiBDdWJpc21Nb3Rpb25Qb2ludCA9IGxlcnBQb2ludHMocDAxLCBwMTIsIHQpO1xuICAgICAgICBjb25zdCBwMTIzOiBDdWJpc21Nb3Rpb25Qb2ludCA9IGxlcnBQb2ludHMocDEyLCBwMjMsIHQpO1xuXG4gICAgICAgIHJldHVybiBsZXJwUG9pbnRzKHAwMTIsIHAxMjMsIHQpLnZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0ZXBwZWRFdmFsdWF0ZShwb2ludHM6IEN1YmlzbU1vdGlvblBvaW50W10sIHRpbWU6IG51bWJlcik6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHBvaW50c1swXS52YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZlcnNlU3RlcHBlZEV2YWx1YXRlKHBvaW50czogQ3ViaXNtTW90aW9uUG9pbnRbXSwgdGltZTogbnVtYmVyKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gcG9pbnRzWzFdLnZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV2YWx1YXRlQ3VydmUobW90aW9uRGF0YTogQ3ViaXNtTW90aW9uRGF0YSwgaW5kZXg6IG51bWJlciwgdGltZTogbnVtYmVyKTogbnVtYmVyXG4gICAge1xuICAgICAgICAvLyBGaW5kIHNlZ21lbnQgdG8gZXZhbHVhdGUuXG4gICAgICAgIGNvbnN0IGN1cnZlOiBDdWJpc21Nb3Rpb25DdXJ2ZSA9IG1vdGlvbkRhdGEuY3VydmVzLmF0KGluZGV4KTtcblxuICAgICAgICBsZXQgdGFyZ2V0OiBudW1iZXIgPSAtMTtcbiAgICAgICAgY29uc3QgdG90YWxTZWdtZW50Q291bnQ6IG51bWJlciA9IGN1cnZlLmJhc2VTZWdtZW50SW5kZXggKyBjdXJ2ZS5zZWdtZW50Q291bnQ7XG4gICAgICAgIGxldCBwb2ludFBvc2l0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjdXJ2ZS5iYXNlU2VnbWVudEluZGV4OyBpIDwgdG90YWxTZWdtZW50Q291bnQ7ICsraSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gR2V0IGZpcnN0IHBvaW50IG9mIG5leHQgc2VnbWVudC5cbiAgICAgICAgICAgIHBvaW50UG9zaXRpb24gPSBtb3Rpb25EYXRhLnNlZ21lbnRzLmF0KGkpLmJhc2VQb2ludEluZGV4XG4gICAgICAgICAgICAgICAgKyAobW90aW9uRGF0YS5zZWdtZW50cy5hdChpKS5zZWdtZW50VHlwZSA9PSBDdWJpc21Nb3Rpb25TZWdtZW50VHlwZS5DdWJpc21Nb3Rpb25TZWdtZW50VHlwZV9CZXppZXJcbiAgICAgICAgICAgICAgICAgICAgPyAzXG4gICAgICAgICAgICAgICAgICAgIDogMSk7XG5cblxuICAgICAgICAgICAgLy8gQnJlYWsgaWYgdGltZSBsaWVzIHdpdGhpbiBjdXJyZW50IHNlZ21lbnQuXG4gICAgICAgICAgICBpZiAobW90aW9uRGF0YS5wb2ludHMuYXQocG9pbnRQb3NpdGlvbikudGltZSA+IHRpbWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRhcmdldCA9PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG1vdGlvbkRhdGEucG9pbnRzLmF0KHBvaW50UG9zaXRpb24pLnZhbHVlO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBzZWdtZW50OiBDdWJpc21Nb3Rpb25TZWdtZW50ID0gbW90aW9uRGF0YS5zZWdtZW50cy5hdCh0YXJnZXQpO1xuXG4gICAgICAgIHJldHVybiBzZWdtZW50LmV2YWx1YXRlKG1vdGlvbkRhdGEucG9pbnRzLmdldChzZWdtZW50LmJhc2VQb2ludEluZGV4KSwgdGltZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44Oi44O844K344On44Oz44Kv44Op44K5XG4gICAgICpcbiAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7jgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTW90aW9uIGV4dGVuZHMgQUN1YmlzbU1vdGlvblxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCpOODs+OCueOCv+ODs+OCueOCkuS9nOaIkOOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyIG1vdGlvbjMuanNvbuOBjOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDjg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcbiAgICAgICAgICogQHJldHVybiDkvZzmiJDjgZXjgozjgZ/jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGJ1ZmZlcjogQXJyYXlCdWZmZXIsIHNpemU6IG51bWJlcik6IEN1YmlzbU1vdGlvblxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21Nb3Rpb24gPSBuZXcgQ3ViaXNtTW90aW9uKCk7XG5cbiAgICAgICAgICAgIHJldC5wYXJzZShidWZmZXIsIHNpemUpO1xuICAgICAgICAgICAgcmV0Ll9zb3VyY2VGcmFtZVJhdGUgPSByZXQuX21vdGlvbkRhdGEuZnBzO1xuICAgICAgICAgICAgcmV0Ll9sb29wRHVyYXRpb25TZWNvbmRzID0gcmV0Ll9tb3Rpb25EYXRhLmR1cmF0aW9uO1xuXG4gICAgICAgICAgICAvLyBOT1RFOiBFZGl0b3Ljgafjga/jg6vjg7zjg5fjgYLjgorjga7jg6Ljg7zjgrfjg6fjg7Pmm7jjgY3lh7rjgZfjga/pnZ7lr77lv5xcbiAgICAgICAgICAgIC8vIHJldC0+X2xvb3AgPSAocmV0LT5fbW90aW9uRGF0YS0+TG9vcCA+IDApO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7jg5Hjg6njg6Hjg7zjgr/jga7mm7TmlrDjga7lrp/ooYxcbiAgICAgICAgICogQHBhcmFtIG1vZGVsICAgICAgICAgICAgIOWvvuixoeOBruODouODh+ODq1xuICAgICAgICAgKiBAcGFyYW0gdXNlclRpbWVTZWNvbmRzICAg54++5Zyo44Gu5pmC5Yi7W+enkl1cbiAgICAgICAgICogQHBhcmFtIGZhZGVXZWlnaHQgICAgICAgIOODouODvOOCt+ODp+ODs+OBrumHjeOBv1xuICAgICAgICAgKiBAcGFyYW0gbW90aW9uUXVldWVFbnRyeSAgQ3ViaXNtTW90aW9uUXVldWVNYW5hZ2Vy44Gn566h55CG44GV44KM44Gm44GE44KL44Oi44O844K344On44OzXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZG9VcGRhdGVQYXJhbWV0ZXJzKG1vZGVsOiBDdWJpc21Nb2RlbCwgdXNlclRpbWVTZWNvbmRzOiBudW1iZXIsIGZhZGVXZWlnaHQ6IG51bWJlciwgbW90aW9uUXVldWVFbnRyeTogQ3ViaXNtTW90aW9uUXVldWVFbnRyeSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21vZGVsQ3VydmVJZEV5ZUJsaW5rID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kZWxDdXJ2ZUlkRXllQmxpbmsgPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoRWZmZWN0TmFtZUV5ZUJsaW5rKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX21vZGVsQ3VydmVJZExpcFN5bmMgPT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbEN1cnZlSWRMaXBTeW5jID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKEVmZmVjdE5hbWVMaXBTeW5jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRpbWVPZmZzZXRTZWNvbmRzOiBudW1iZXIgPSB1c2VyVGltZVNlY29uZHMgLSBtb3Rpb25RdWV1ZUVudHJ5LmdldFN0YXJ0VGltZSgpO1xuXG4gICAgICAgICAgICBpZiAodGltZU9mZnNldFNlY29uZHMgPCAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZU9mZnNldFNlY29uZHMgPSAwLjA7IC8vIOOCqOODqeODvOWbnumBv1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbGlwU3luY1ZhbHVlOiBudW1iZXIgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgbGV0IGV5ZUJsaW5rVmFsdWU6IG51bWJlciA9IE51bWJlci5NQVhfVkFMVUU7XG5cbiAgICAgICAgICAgIC8v44G+44Gw44Gf44GN44CB44Oq44OD44OX44K344Oz44Kv44Gu44GG44Gh44Oi44O844K344On44Oz44Gu6YGp55So44KS5qSc5Ye644GZ44KL44Gf44KB44Gu44OT44OD44OI77yIbWF4RmxhZ0NvdW505YCL44G+44GnXG4gICAgICAgICAgICBjb25zdCAgTWF4VGFyZ2V0U2l6ZSA9IDY0O1xuICAgICAgICAgICAgbGV0IGxpcFN5bmNGbGFncyA9IDA7XG4gICAgICAgICAgICBsZXQgZXllQmxpbmtGbGFncyA9IDA7XG5cbiAgICAgICAgICAgIC8v556s44GN44CB44Oq44OD44OX44K344Oz44Kv44Gu44K/44O844Ky44OD44OI5pWw44GM5LiK6ZmQ44KS6LaF44GI44Gm44GE44KL5aC05ZCIXG4gICAgICAgICAgICBpZiAodGhpcy5fZXllQmxpbmtQYXJhbWV0ZXJJZHMuZ2V0U2l6ZSgpID4gTWF4VGFyZ2V0U2l6ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dEZWJ1ZyhcInRvbyBtYW55IGV5ZSBibGluayB0YXJnZXRzIDogezB9XCIsIHRoaXMuX2V5ZUJsaW5rUGFyYW1ldGVySWRzLmdldFNpemUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fbGlwU3luY1BhcmFtZXRlcklkcy5nZXRTaXplKCkgPiBNYXhUYXJnZXRTaXplKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0RlYnVnKFwidG9vIG1hbnkgbGlwIHN5bmMgdGFyZ2V0cyA6IHswfVwiLCB0aGlzLl9saXBTeW5jUGFyYW1ldGVySWRzLmdldFNpemUoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRtcEZhZGVJbjogbnVtYmVyID0gKHRoaXMuX2ZhZGVJblNlY29uZHMgPD0gMC4wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDEuMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IEN1YmlzbU1hdGguZ2V0RWFzaW5nU2luZSgodXNlclRpbWVTZWNvbmRzIC0gbW90aW9uUXVldWVFbnRyeS5nZXRGYWRlSW5TdGFydFRpbWUoKSkgLyB0aGlzLl9mYWRlSW5TZWNvbmRzKTtcblxuICAgICAgICAgICAgY29uc3QgdG1wRmFkZU91dDogbnVtYmVyID0gKHRoaXMuX2ZhZGVPdXRTZWNvbmRzIDw9IDAuMCB8fCBtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSA8IDAuMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxLjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBDdWJpc21NYXRoLmdldEVhc2luZ1NpbmUoKG1vdGlvblF1ZXVlRW50cnkuZ2V0RW5kVGltZSgpIC0gdXNlclRpbWVTZWNvbmRzKSAvIHRoaXMuX2ZhZGVPdXRTZWNvbmRzKTtcbiAgICAgICAgICAgIGxldCB2YWx1ZTogbnVtYmVyO1xuICAgICAgICAgICAgbGV0IGM6IG51bWJlciwgcGFyYW1ldGVySW5kZXg6IG51bWJlcjtcblxuICAgICAgICAgICAgLy8gJ1JlcGVhdCcgdGltZSBhcyBuZWNlc3NhcnkuXG4gICAgICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gdGltZU9mZnNldFNlY29uZHM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0xvb3ApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRpbWUgPiB0aGlzLl9tb3Rpb25EYXRhLmR1cmF0aW9uKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZSAtPSB0aGlzLl9tb3Rpb25EYXRhLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGN1cnZlczogY3NtVmVjdG9yPEN1YmlzbU1vdGlvbkN1cnZlPiA9IHRoaXMuX21vdGlvbkRhdGEuY3VydmVzO1xuXG4gICAgICAgICAgICAvLyBFdmFsdWF0ZSBtb2RlbCBjdXJ2ZXMuXG4gICAgICAgICAgICBmb3IgKGMgPSAwOyBjIDwgdGhpcy5fbW90aW9uRGF0YS5jdXJ2ZUNvdW50ICYmIGN1cnZlcy5hdChjKS50eXBlID09IEN1YmlzbU1vdGlvbkN1cnZlVGFyZ2V0LkN1YmlzbU1vdGlvbkN1cnZlVGFyZ2V0X01vZGVsOyArK2MpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gRXZhbHVhdGUgY3VydmUgYW5kIGNhbGwgaGFuZGxlci5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGV2YWx1YXRlQ3VydmUodGhpcy5fbW90aW9uRGF0YSwgYywgdGltZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VydmVzLmF0KGMpLmlkID09IHRoaXMuX21vZGVsQ3VydmVJZEV5ZUJsaW5rKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZXllQmxpbmtWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJ2ZXMuYXQoYykuaWQgPT0gdGhpcy5fbW9kZWxDdXJ2ZUlkTGlwU3luYylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxpcFN5bmNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHBhcmFtZXRlck1vdGlvbkN1cnZlQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoOyBjIDwgdGhpcy5fbW90aW9uRGF0YS5jdXJ2ZUNvdW50ICYmIGN1cnZlcy5hdChjKS50eXBlID09IEN1YmlzbU1vdGlvbkN1cnZlVGFyZ2V0LkN1YmlzbU1vdGlvbkN1cnZlVGFyZ2V0X1BhcmFtZXRlcjsgKytjKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlck1vdGlvbkN1cnZlQ291bnQrKztcblxuICAgICAgICAgICAgICAgIC8vIEZpbmQgcGFyYW1ldGVyIGluZGV4LlxuICAgICAgICAgICAgICAgIHBhcmFtZXRlckluZGV4ID0gbW9kZWwuZ2V0UGFyYW1ldGVySW5kZXgoY3VydmVzLmF0KGMpLmlkKTtcblxuICAgICAgICAgICAgICAgIC8vIFNraXAgY3VydmUgZXZhbHVhdGlvbiBpZiBubyB2YWx1ZSBpbiBzaW5rLlxuICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJJbmRleCA9PSAtMSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVZhbHVlOiBudW1iZXIgPSBtb2RlbC5nZXRQYXJhbWV0ZXJWYWx1ZUJ5SW5kZXgocGFyYW1ldGVySW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gRXZhbHVhdGUgY3VydmUgYW5kIGFwcGx5IHZhbHVlLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gZXZhbHVhdGVDdXJ2ZSh0aGlzLl9tb3Rpb25EYXRhLCBjLCB0aW1lKTtcblxuICAgICAgICAgICAgICAgIGlmIChleWVCbGlua1ZhbHVlICE9IE51bWJlci5NQVhfVkFMVUUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fZXllQmxpbmtQYXJhbWV0ZXJJZHMuZ2V0U2l6ZSgpICYmIGkgPCBNYXhUYXJnZXRTaXplOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9leWVCbGlua1BhcmFtZXRlcklkcy5hdChpKSA9PSBjdXJ2ZXMuYXQoYykuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKj0gZXllQmxpbmtWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleWVCbGlua0ZsYWdzIHw9IDEgPDwgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGxpcFN5bmNWYWx1ZSAhPSBOdW1iZXIuTUFYX1ZBTFVFKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fbGlwU3luY1BhcmFtZXRlcklkcy5nZXRTaXplKCkgJiYgaSA8IE1heFRhcmdldFNpemU7ICsraSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fbGlwU3luY1BhcmFtZXRlcklkcy5hdChpKSA9PSBjdXJ2ZXMuYXQoYykuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gbGlwU3luY1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpcFN5bmNGbGFncyB8PSAxIDw8IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgdjogbnVtYmVyO1xuXG4gICAgICAgICAgICAgICAgLy8g44OR44Op44Oh44O844K/44GU44Go44Gu44OV44Kn44O844OJXG4gICAgICAgICAgICAgICAgaWYoY3VydmVzLmF0KGMpLmZhZGVJblRpbWUgPCAwLjAgJiYgY3VydmVzLmF0KGMpLmZhZGVPdXRUaW1lIDwgMC4wKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g44Oi44O844K344On44Oz44Gu44OV44Kn44O844OJ44KS6YGp55SoXG4gICAgICAgICAgICAgICAgICAgIHYgPSBzb3VyY2VWYWx1ZSArICh2YWx1ZSAtIHNvdXJjZVZhbHVlKSAqIGZhZGVXZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOODkeODqeODoeODvOOCv+OBq+WvvuOBl+OBpuODleOCp+ODvOODieOCpOODs+OBi+ODleOCp+ODvOODieOCouOCpuODiOOBjOioreWumuOBl+OBpuOBguOCi+WgtOWQiOOBr+OBneOBoeOCieOCkumBqeeUqFxuICAgICAgICAgICAgICAgICAgICBsZXQgZmluOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3V0OiBudW1iZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoY3VydmVzLmF0KGMpLmZhZGVJblRpbWUgPCAwLjApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbiA9IHRtcEZhZGVJbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbiA9IGN1cnZlcy5hdChjKS5mYWRlSW5UaW1lID09IDAuMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMS4wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOkN1YmlzbU1hdGguZ2V0RWFzaW5nU2luZSgodXNlclRpbWVTZWNvbmRzIC0gbW90aW9uUXVldWVFbnRyeS5nZXRGYWRlSW5TdGFydFRpbWUoKSkgLyBjdXJ2ZXMuYXQoYykuZmFkZUluVGltZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihjdXJ2ZXMuYXQoYykuZmFkZU91dFRpbWUgPCAwLjApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdXQgPSB0bXBGYWRlT3V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91dCA9IChjdXJ2ZXMuYXQoYykuZmFkZU91dFRpbWUgPT0gMC4wIHx8IG1vdGlvblF1ZXVlRW50cnkuZ2V0RW5kVGltZSgpIDwgMC4wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDEuMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IEN1YmlzbU1hdGguZ2V0RWFzaW5nU2luZSgobW90aW9uUXVldWVFbnRyeS5nZXRFbmRUaW1lKCkgLSB1c2VyVGltZVNlY29uZHMpIC8gY3VydmVzLmF0KGMpLmZhZGVPdXRUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtV2VpZ2h0OiBudW1iZXIgPSB0aGlzLl93ZWlnaHQgKiBmaW4gKiBmb3V0O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOODkeODqeODoeODvOOCv+OBlOOBqOOBruODleOCp+ODvOODieOCkumBqeeUqFxuICAgICAgICAgICAgICAgICAgICB2ID0gc291cmNlVmFsdWUgKyAodmFsdWUgLSBzb3VyY2VWYWx1ZSkgKiBwYXJhbVdlaWdodDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SW5kZXgocGFyYW1ldGVySW5kZXgsIHYsIDEuMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihleWVCbGlua1ZhbHVlICE9IE51bWJlci5NQVhfVkFMVUUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9leWVCbGlua1BhcmFtZXRlcklkcy5nZXRTaXplKCkgJiYgaSA8IE1heFRhcmdldFNpemU7ICsraSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlVmFsdWU6IG51bWJlciA9IG1vZGVsLmdldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9leWVCbGlua1BhcmFtZXRlcklkcy5hdChpKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODouODvOOCt+ODp+ODs+OBp+OBruS4iuabuOOBjeOBjOOBguOBo+OBn+aZguOBq+OBr+OBvuOBsOOBn+OBjeOBr+mBqeeUqOOBl+OBquOBhFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKGV5ZUJsaW5rRmxhZ3MgPj4gaSkgJiAweDAxKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2OiBudW1iZXIgPSBzb3VyY2VWYWx1ZSArIChleWVCbGlua1ZhbHVlIC0gc291cmNlVmFsdWUpICogZmFkZVdlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2V5ZUJsaW5rUGFyYW1ldGVySWRzLmF0KGkpLCB2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGxpcFN5bmNWYWx1ZSAhPSBOdW1iZXIuTUFYX1ZBTFVFKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fbGlwU3luY1BhcmFtZXRlcklkcy5nZXRTaXplKCkgJiYgaSA8IE1heFRhcmdldFNpemU7ICsraSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlVmFsdWU6IG51bWJlciA9IG1vZGVsLmdldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9saXBTeW5jUGFyYW1ldGVySWRzLmF0KGkpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Oi44O844K344On44Oz44Gn44Gu5LiK5pu444GN44GM44GC44Gj44Gf5pmC44Gr44Gv44Oq44OD44OX44K344Oz44Kv44Gv6YGp55So44GX44Gq44GEXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigobGlwU3luY0ZsYWdzID4+IGkpICYgMHgwMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdjogbnVtYmVyID0gc291cmNlVmFsdWUgKyAobGlwU3luY1ZhbHVlIC0gc291cmNlVmFsdWUpICogZmFkZVdlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2xpcFN5bmNQYXJhbWV0ZXJJZHMuYXQoaSksIHYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IoOyBjIDwgdGhpcy5fbW90aW9uRGF0YS5jdXJ2ZUNvdW50ICYmIGN1cnZlcy5hdChjKS50eXBlID09IEN1YmlzbU1vdGlvbkN1cnZlVGFyZ2V0LkN1YmlzbU1vdGlvbkN1cnZlVGFyZ2V0X1BhcnRPcGFjaXR5OyArK2MpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gRmluZCBwYXJhbWV0ZXIgaW5kZXguXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVySW5kZXggPSBtb2RlbC5nZXRQYXJhbWV0ZXJJbmRleChjdXJ2ZXMuYXQoYykuaWQpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2tpcCBjdXJ2ZSBldmFsdWF0aW9uIGlmIG5vIHZhbHVlIGluIHNpbmsuXG4gICAgICAgICAgICAgICAgaWYocGFyYW1ldGVySW5kZXggPT0gLTEpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBFdmFsdWF0ZSBjdXJ2ZSBhbmQgYXBwbHkgdmFsdWUuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBldmFsdWF0ZUN1cnZlKHRoaXMuX21vdGlvbkRhdGEsIGMsIHRpbWUpO1xuXG4gICAgICAgICAgICAgICAgbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUluZGV4KHBhcmFtZXRlckluZGV4LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRpbWVPZmZzZXRTZWNvbmRzID49IHRoaXMuX21vdGlvbkRhdGEuZHVyYXRpb24pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5faXNMb29wKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbW90aW9uUXVldWVFbnRyeS5zZXRTdGFydFRpbWUodXNlclRpbWVTZWNvbmRzKTsgLy8g5pyA5Yid44Gu54q25oWL44G4XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX2lzTG9vcEZhZGVJbilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Or44O844OX5YaF44Gn44Or44O844OX55So44OV44Kn44O844OJ44Kk44Oz44GM5pyJ5Yq544Gu5pmC44Gv44CB44OV44Kn44O844OJ44Kk44Oz6Kit5a6a44GX55u044GXXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5LnNldEZhZGVJblN0YXJ0VGltZSh1c2VyVGltZVNlY29uZHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkuc2V0SXNGaW5pc2hlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9sYXN0V2VpZ2h0ID0gZmFkZVdlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6vjg7zjg5fmg4XloLHjga7oqK3lrppcbiAgICAgICAgICogQHBhcmFtIGxvb3Ag44Or44O844OX5oOF5aCxXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0SXNMb29wKGxvb3A6IGJvb2xlYW4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lzTG9vcCA9IGxvb3A7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Or44O844OX5oOF5aCx44Gu5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjg6vjg7zjg5fjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjg6vjg7zjg5fjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0xvb3AoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNMb29wO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODq+ODvOODl+aZguOBruODleOCp+ODvOODieOCpOODs+aDheWgseOBruioreWumlxuICAgICAgICAgKiBAcGFyYW0gbG9vcEZhZGVJbiAg44Or44O844OX5pmC44Gu44OV44Kn44O844OJ44Kk44Oz5oOF5aCxXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0SXNMb29wRmFkZUluKGxvb3BGYWRlSW46IGJvb2xlYW4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lzTG9vcEZhZGVJbiA9IGxvb3BGYWRlSW47XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Or44O844OX5pmC44Gu44OV44Kn44O844OJ44Kk44Oz5oOF5aCx44Gu5Y+W5b6XXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gIHRydWUgICAg44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gIGZhbHNlICAg44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNMb29wRmFkZUluKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzTG9vcEZhZGVJbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7plbfjgZXjgpLlj5blvpfjgZnjgovjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiAg44Oi44O844K344On44Oz44Gu6ZW344GVW+enkl1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXREdXJhdGlvbigpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzTG9vcCA/IC0xLjAgOiB0aGlzLl9sb29wRHVyYXRpb25TZWNvbmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBruODq+ODvOODl+aZguOBrumVt+OBleOCkuWPluW+l+OBmeOCi+OAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICDjg6Ljg7zjgrfjg6fjg7Pjga7jg6vjg7zjg5fmmYLjga7plbfjgZVb56eSXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldExvb3BEdXJhdGlvbigpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvb3BEdXJhdGlvblNlY29uZHM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44Op44Oh44O844K/44Gr5a++44GZ44KL44OV44Kn44O844OJ44Kk44Oz44Gu5pmC6ZaT44KS6Kit5a6a44GZ44KL44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJJZCAgICAg44OR44Op44Oh44O844K/SURcbiAgICAgICAgICogQHBhcmFtIHZhbHVlICAgICAgICAgICDjg5Xjgqfjg7zjg4njgqTjg7PjgavjgYvjgYvjgovmmYLplpNb56eSXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldFBhcmFtZXRlckZhZGVJblRpbWUocGFyYW1ldGVySWQ6IEN1YmlzbUlkSGFuZGxlLCB2YWx1ZTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY3VydmVzOiBjc21WZWN0b3I8Q3ViaXNtTW90aW9uQ3VydmU+ID0gdGhpcy5fbW90aW9uRGF0YS5jdXJ2ZXM7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9tb3Rpb25EYXRhLmN1cnZlQ291bnQ7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVySWQgPT0gY3VydmVzLmF0KGkpLmlkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVzLmF0KGkpLmZhZGVJblRpbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIOODkeODqeODoeODvOOCv+OBq+WvvuOBmeOCi+ODleOCp+ODvOODieOCouOCpuODiOOBruaZgumWk+OBruioreWumlxuICAgICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJJZCAgICAg44OR44Op44Oh44O844K/SURcbiAgICAgICAgKiBAcGFyYW0gdmFsdWUgICAgICAgICAgIOODleOCp+ODvOODieOCouOCpuODiOOBq+OBi+OBi+OCi+aZgumWk1vnp5JdXG4gICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRQYXJhbWV0ZXJGYWRlT3V0VGltZShwYXJhbWV0ZXJJZDogQ3ViaXNtSWRIYW5kbGUsIHZhbHVlOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjdXJ2ZXM6IGNzbVZlY3RvcjxDdWJpc21Nb3Rpb25DdXJ2ZT4gPSB0aGlzLl9tb3Rpb25EYXRhLmN1cnZlcztcblxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX21vdGlvbkRhdGEuY3VydmVDb3VudDsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJJZCA9PSBjdXJ2ZXMuYXQoaSkuaWQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZXMuYXQoaSkuZmFkZU91dFRpbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIOODkeODqeODoeODvOOCv+OBq+WvvuOBmeOCi+ODleOCp+ODvOODieOCpOODs+OBruaZgumWk+OBruWPluW+l1xuICAgICAgICAqIEBwYXJhbSAgICBwYXJhbWV0ZXJJZCAgICAg44OR44Op44Oh44O844K/SURcbiAgICAgICAgKiBAcmV0dXJuICAg44OV44Kn44O844OJ44Kk44Oz44Gr44GL44GL44KL5pmC6ZaTW+enkl1cbiAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFBhcmFtZXRlckZhZGVJblRpbWUocGFyYW1ldGVySWQ6IEN1YmlzbUlkSGFuZGxlKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjdXJ2ZXM6IGNzbVZlY3RvcjxDdWJpc21Nb3Rpb25DdXJ2ZT4gPSB0aGlzLl9tb3Rpb25EYXRhLmN1cnZlcztcblxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX21vdGlvbkRhdGEuY3VydmVDb3VudDsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJJZCA9PSBjdXJ2ZXMuYXQoaSkuaWQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VydmVzLmF0KGkpLmZhZGVJblRpbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/jgavlr77jgZnjgovjg5Xjgqfjg7zjg4njgqLjgqbjg4jjga7mmYLplpPjgpLlj5blvpdcbiAgICAgICAgKlxuICAgICAgICAqIEBwYXJhbSAgIHBhcmFtZXRlcklkICAgICDjg5Hjg6njg6Hjg7zjgr9JRFxuICAgICAgICAqIEByZXR1cm4gICDjg5Xjgqfjg7zjg4njgqLjgqbjg4jjgavjgYvjgYvjgovmmYLplpNb56eSXVxuICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UGFyYW1ldGVyRmFkZU91dFRpbWUocGFyYW1ldGVySWQ6IEN1YmlzbUlkSGFuZGxlKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjdXJ2ZXM6IGNzbVZlY3RvcjxDdWJpc21Nb3Rpb25DdXJ2ZT4gPSB0aGlzLl9tb3Rpb25EYXRhLmN1cnZlcztcblxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX21vdGlvbkRhdGEuY3VydmVDb3VudDsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJJZCA9PSBjdXJ2ZXMuYXQoaSkuaWQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VydmVzLmF0KGkpLmZhZGVPdXRUaW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiHquWLleOCqOODleOCp+OCr+ODiOOBjOOBi+OBi+OBo+OBpuOBhOOCi+ODkeODqeODoeODvOOCv0lE44Oq44K544OI44Gu6Kit5a6aXG4gICAgICAgICAqIEBwYXJhbSBleWVCbGlua1BhcmFtZXRlcklkcyAgICDoh6rli5Xjgb7jgbDjgZ/jgY3jgYzjgYvjgYvjgaPjgabjgYTjgovjg5Hjg6njg6Hjg7zjgr9JROOBruODquOCueODiFxuICAgICAgICAgKiBAcGFyYW0gbGlwU3luY1BhcmFtZXRlcklkcyAgICAg44Oq44OD44OX44K344Oz44Kv44GM44GL44GL44Gj44Gm44GE44KL44OR44Op44Oh44O844K/SUTjga7jg6rjgrnjg4hcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRFZmZlY3RJZHMoZXllQmxpbmtQYXJhbWV0ZXJJZHM6IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT4sIGxpcFN5bmNQYXJhbWV0ZXJJZHM6IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2V5ZUJsaW5rUGFyYW1ldGVySWRzID0gZXllQmxpbmtQYXJhbWV0ZXJJZHM7XG4gICAgICAgICAgICB0aGlzLl9saXBTeW5jUGFyYW1ldGVySWRzID0gbGlwU3luY1BhcmFtZXRlcklkcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2VGcmFtZVJhdGUgPSAzMC4wO1xuICAgICAgICAgICAgdGhpcy5fbG9vcER1cmF0aW9uU2Vjb25kcyA9IC0xLjA7XG4gICAgICAgICAgICB0aGlzLl9pc0xvb3AgPSBmYWxzZTsgICAgICAgICAgIC8vIHRydWXjgYvjgokgZmFsc2Ug44G444OH44OV44Kp44Or44OI44KS5aSJ5pu0XG4gICAgICAgICAgICB0aGlzLl9pc0xvb3BGYWRlSW4gPSB0cnVlOyAgICAgIC8vIOODq+ODvOODl+aZguOBq+ODleOCp+ODvOODieOCpOODs+OBjOacieWKueOBi+OBqeOBhuOBi+OBruODleODqeOCsFxuICAgICAgICAgICAgdGhpcy5fbGFzdFdlaWdodCA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWxDdXJ2ZUlkRXllQmxpbmsgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWxDdXJ2ZUlkTGlwU3luYyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9leWVCbGlua1BhcmFtZXRlcklkcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9saXBTeW5jUGFyYW1ldGVySWRzID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbW90aW9uRGF0YSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG1vdGlvbjMuanNvbuOCkuODkeODvOOCueOBmeOCi+OAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbW90aW9uSnNvbiAgbW90aW9uMy5qc29u44GM6Kqt44G/6L6844G+44KM44Gm44GE44KL44OQ44OD44OV44KhXG4gICAgICAgICAqIEBwYXJhbSBzaXplICAgICAgICDjg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwYXJzZShtb3Rpb25Kc29uOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhID0gbmV3IEN1YmlzbU1vdGlvbkRhdGEoKTtcblxuICAgICAgICAgICAgbGV0IGpzb246IEN1YmlzbU1vdGlvbkpzb24gPSBuZXcgQ3ViaXNtTW90aW9uSnNvbihtb3Rpb25Kc29uLCBzaXplKTtcblxuICAgICAgICAgICAgdGhpcy5fbW90aW9uRGF0YS5kdXJhdGlvbiA9IGpzb24uZ2V0TW90aW9uRHVyYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEubG9vcCA9IGpzb24uaXNNb3Rpb25Mb29wKCk7XG4gICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLmN1cnZlQ291bnQgPSBqc29uLmdldE1vdGlvbkN1cnZlQ291bnQoKTtcbiAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEuZnBzID0ganNvbi5nZXRNb3Rpb25GcHMoKTtcbiAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEuZXZlbnRDb3VudCA9IGpzb24uZ2V0RXZlbnRDb3VudCgpO1xuXG4gICAgICAgICAgICBpZiAoanNvbi5pc0V4aXN0TW90aW9uRmFkZUluVGltZSgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZhZGVJblNlY29uZHMgPSAoanNvbi5nZXRNb3Rpb25GYWRlSW5UaW1lKCkgPCAwLjApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxLjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGpzb24uZ2V0TW90aW9uRmFkZUluVGltZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZhZGVJblNlY29uZHMgPSAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChqc29uLmlzRXhpc3RNb3Rpb25GYWRlT3V0VGltZSgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZhZGVPdXRTZWNvbmRzID0gKGpzb24uZ2V0TW90aW9uRmFkZU91dFRpbWUoKSA8IDAuMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxLjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBqc29uLmdldE1vdGlvbkZhZGVPdXRUaW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmFkZU91dFNlY29uZHMgPSAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEuY3VydmVzLnVwZGF0ZVNpemUodGhpcy5fbW90aW9uRGF0YS5jdXJ2ZUNvdW50LCBDdWJpc21Nb3Rpb25DdXJ2ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLnNlZ21lbnRzLnVwZGF0ZVNpemUoanNvbi5nZXRNb3Rpb25Ub3RhbFNlZ21lbnRDb3VudCgpLCBDdWJpc21Nb3Rpb25TZWdtZW50LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEucG9pbnRzLnVwZGF0ZVNpemUoanNvbi5nZXRNb3Rpb25Ub3RhbFBvaW50Q291bnQoKSwgQ3ViaXNtTW90aW9uUG9pbnQsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5fbW90aW9uRGF0YS5ldmVudHMudXBkYXRlU2l6ZSh0aGlzLl9tb3Rpb25EYXRhLmV2ZW50Q291bnQsIEN1YmlzbU1vdGlvbkV2ZW50LCB0cnVlKTtcblxuICAgICAgICAgICAgbGV0IHRvdGFsUG9pbnRDb3VudDogbnVtYmVyID0gMDtcbiAgICAgICAgICAgIGxldCB0b3RhbFNlZ21lbnRDb3VudDogbnVtYmVyID0gMDtcblxuICAgICAgICAgICAgLy8gQ3VydmVzXG4gICAgICAgICAgICBmb3IgKGxldCBjdXJ2ZUNvdW50OiBudW1iZXIgPSAwOyBjdXJ2ZUNvdW50IDwgdGhpcy5fbW90aW9uRGF0YS5jdXJ2ZUNvdW50OyArK2N1cnZlQ291bnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGpzb24uZ2V0TW90aW9uQ3VydmVUYXJnZXQoY3VydmVDb3VudCkgPT0gVGFyZ2V0TmFtZU1vZGVsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW90aW9uRGF0YS5jdXJ2ZXMuYXQoY3VydmVDb3VudCkudHlwZSA9IEN1YmlzbU1vdGlvbkN1cnZlVGFyZ2V0LkN1YmlzbU1vdGlvbkN1cnZlVGFyZ2V0X01vZGVsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChqc29uLmdldE1vdGlvbkN1cnZlVGFyZ2V0KGN1cnZlQ291bnQpID09IFRhcmdldE5hbWVQYXJhbWV0ZXIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLmN1cnZlcy5hdChjdXJ2ZUNvdW50KS50eXBlID0gQ3ViaXNtTW90aW9uQ3VydmVUYXJnZXQuQ3ViaXNtTW90aW9uQ3VydmVUYXJnZXRfUGFyYW1ldGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChqc29uLmdldE1vdGlvbkN1cnZlVGFyZ2V0KGN1cnZlQ291bnQpID09IFRhcmdldE5hbWVQYXJ0T3BhY2l0eSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEuY3VydmVzLmF0KGN1cnZlQ291bnQpLnR5cGUgPSBDdWJpc21Nb3Rpb25DdXJ2ZVRhcmdldC5DdWJpc21Nb3Rpb25DdXJ2ZVRhcmdldF9QYXJ0T3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLmN1cnZlcy5hdChjdXJ2ZUNvdW50KS5pZCA9IGpzb24uZ2V0TW90aW9uQ3VydmVJZChjdXJ2ZUNvdW50KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEuY3VydmVzLmF0KGN1cnZlQ291bnQpLmJhc2VTZWdtZW50SW5kZXggPSB0b3RhbFNlZ21lbnRDb3VudDtcblxuICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEuY3VydmVzLmF0KGN1cnZlQ291bnQpLmZhZGVJblRpbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgKGpzb24uaXNFeGlzdE1vdGlvbkN1cnZlRmFkZUluVGltZShjdXJ2ZUNvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGpzb24uZ2V0TW90aW9uQ3VydmVGYWRlSW5UaW1lKGN1cnZlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAtMS4wIDtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLmN1cnZlcy5hdChjdXJ2ZUNvdW50KS5mYWRlT3V0VGltZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAoanNvbi5pc0V4aXN0TW90aW9uQ3VydmVGYWRlT3V0VGltZShjdXJ2ZUNvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGpzb24uZ2V0TW90aW9uQ3VydmVGYWRlT3V0VGltZShjdXJ2ZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogLTEuMDtcblxuICAgICAgICAgICAgICAgIC8vIFNlZ21lbnRzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudFBvc2l0aW9uOiBudW1iZXIgPSAwOyBzZWdtZW50UG9zaXRpb24gPCBqc29uLmdldE1vdGlvbkN1cnZlU2VnbWVudENvdW50KGN1cnZlQ291bnQpOylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWdtZW50UG9zaXRpb24gPT0gMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW90aW9uRGF0YS5zZWdtZW50cy5hdCh0b3RhbFNlZ21lbnRDb3VudCkuYmFzZVBvaW50SW5kZXggPSB0b3RhbFBvaW50Q291bnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEucG9pbnRzLmF0KHRvdGFsUG9pbnRDb3VudCkudGltZSA9IGpzb24uZ2V0TW90aW9uQ3VydmVTZWdtZW50KGN1cnZlQ291bnQsIHNlZ21lbnRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLnBvaW50cy5hdCh0b3RhbFBvaW50Q291bnQpLnZhbHVlID0ganNvbi5nZXRNb3Rpb25DdXJ2ZVNlZ21lbnQoY3VydmVDb3VudCwgc2VnbWVudFBvc2l0aW9uICsgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUG9pbnRDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudFBvc2l0aW9uICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLnNlZ21lbnRzLmF0KHRvdGFsU2VnbWVudENvdW50KS5iYXNlUG9pbnRJbmRleCA9IHRvdGFsUG9pbnRDb3VudCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50OiBudW1iZXIgPSBqc29uLmdldE1vdGlvbkN1cnZlU2VnbWVudChjdXJ2ZUNvdW50LCBzZWdtZW50UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDdWJpc21Nb3Rpb25TZWdtZW50VHlwZS5DdWJpc21Nb3Rpb25TZWdtZW50VHlwZV9MaW5lYXI6XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW90aW9uRGF0YS5zZWdtZW50cy5hdCh0b3RhbFNlZ21lbnRDb3VudCkuc2VnbWVudFR5cGUgPSBDdWJpc21Nb3Rpb25TZWdtZW50VHlwZS5DdWJpc21Nb3Rpb25TZWdtZW50VHlwZV9MaW5lYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW90aW9uRGF0YS5zZWdtZW50cy5hdCh0b3RhbFNlZ21lbnRDb3VudCkuZXZhbHVhdGUgPSBsaW5lYXJFdmFsdWF0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEucG9pbnRzLmF0KHRvdGFsUG9pbnRDb3VudCkudGltZSA9IGpzb24uZ2V0TW90aW9uQ3VydmVTZWdtZW50KGN1cnZlQ291bnQsIChzZWdtZW50UG9zaXRpb24gKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW90aW9uRGF0YS5wb2ludHMuYXQodG90YWxQb2ludENvdW50KS52YWx1ZSA9IGpzb24uZ2V0TW90aW9uQ3VydmVTZWdtZW50KGN1cnZlQ291bnQsIChzZWdtZW50UG9zaXRpb24gKyAyKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBvaW50Q291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50UG9zaXRpb24gKz0gMztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIEN1YmlzbU1vdGlvblNlZ21lbnRUeXBlLkN1YmlzbU1vdGlvblNlZ21lbnRUeXBlX0JlemllcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLnNlZ21lbnRzLmF0KHRvdGFsU2VnbWVudENvdW50KS5zZWdtZW50VHlwZSA9IEN1YmlzbU1vdGlvblNlZ21lbnRUeXBlLkN1YmlzbU1vdGlvblNlZ21lbnRUeXBlX0JlemllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLnNlZ21lbnRzLmF0KHRvdGFsU2VnbWVudENvdW50KS5ldmFsdWF0ZSA9IGJlemllckV2YWx1YXRlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW90aW9uRGF0YS5wb2ludHMuYXQodG90YWxQb2ludENvdW50KS50aW1lID0ganNvbi5nZXRNb3Rpb25DdXJ2ZVNlZ21lbnQoY3VydmVDb3VudCwgKHNlZ21lbnRQb3NpdGlvbiArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLnBvaW50cy5hdCh0b3RhbFBvaW50Q291bnQpLnZhbHVlID0ganNvbi5nZXRNb3Rpb25DdXJ2ZVNlZ21lbnQoY3VydmVDb3VudCwgKHNlZ21lbnRQb3NpdGlvbiArIDIpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEucG9pbnRzLmF0KHRvdGFsUG9pbnRDb3VudCArIDEpLnRpbWUgPSBqc29uLmdldE1vdGlvbkN1cnZlU2VnbWVudChjdXJ2ZUNvdW50LCAoc2VnbWVudFBvc2l0aW9uICsgMykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEucG9pbnRzLmF0KHRvdGFsUG9pbnRDb3VudCArIDEpLnZhbHVlID0ganNvbi5nZXRNb3Rpb25DdXJ2ZVNlZ21lbnQoY3VydmVDb3VudCwgKHNlZ21lbnRQb3NpdGlvbiArIDQpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEucG9pbnRzLmF0KHRvdGFsUG9pbnRDb3VudCArIDIpLnRpbWUgPSBqc29uLmdldE1vdGlvbkN1cnZlU2VnbWVudChjdXJ2ZUNvdW50LCAoc2VnbWVudFBvc2l0aW9uICsgNSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEucG9pbnRzLmF0KHRvdGFsUG9pbnRDb3VudCArIDIpLnZhbHVlID0ganNvbi5nZXRNb3Rpb25DdXJ2ZVNlZ21lbnQoY3VydmVDb3VudCwgKHNlZ21lbnRQb3NpdGlvbiArIDYpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUG9pbnRDb3VudCArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRQb3NpdGlvbiArPSA3O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDdWJpc21Nb3Rpb25TZWdtZW50VHlwZS5DdWJpc21Nb3Rpb25TZWdtZW50VHlwZV9TdGVwcGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEuc2VnbWVudHMuYXQodG90YWxTZWdtZW50Q291bnQpLnNlZ21lbnRUeXBlID0gQ3ViaXNtTW90aW9uU2VnbWVudFR5cGUuQ3ViaXNtTW90aW9uU2VnbWVudFR5cGVfU3RlcHBlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLnNlZ21lbnRzLmF0KHRvdGFsU2VnbWVudENvdW50KS5ldmFsdWF0ZSA9IHN0ZXBwZWRFdmFsdWF0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEucG9pbnRzLmF0KHRvdGFsUG9pbnRDb3VudCkudGltZSA9IGpzb24uZ2V0TW90aW9uQ3VydmVTZWdtZW50KGN1cnZlQ291bnQsIChzZWdtZW50UG9zaXRpb24gKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW90aW9uRGF0YS5wb2ludHMuYXQodG90YWxQb2ludENvdW50KS52YWx1ZSA9IGpzb24uZ2V0TW90aW9uQ3VydmVTZWdtZW50KGN1cnZlQ291bnQsIChzZWdtZW50UG9zaXRpb24gKyAyKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBvaW50Q291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50UG9zaXRpb24gKz0gMztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ3ViaXNtTW90aW9uU2VnbWVudFR5cGUuQ3ViaXNtTW90aW9uU2VnbWVudFR5cGVfSW52ZXJzZVN0ZXBwZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW90aW9uRGF0YS5zZWdtZW50cy5hdCh0b3RhbFNlZ21lbnRDb3VudCkuc2VnbWVudFR5cGUgPSBDdWJpc21Nb3Rpb25TZWdtZW50VHlwZS5DdWJpc21Nb3Rpb25TZWdtZW50VHlwZV9JbnZlcnNlU3RlcHBlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLnNlZ21lbnRzLmF0KHRvdGFsU2VnbWVudENvdW50KS5ldmFsdWF0ZSA9IGludmVyc2VTdGVwcGVkRXZhbHVhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLnBvaW50cy5hdCh0b3RhbFBvaW50Q291bnQpLnRpbWUgPSBqc29uLmdldE1vdGlvbkN1cnZlU2VnbWVudChjdXJ2ZUNvdW50LCAoc2VnbWVudFBvc2l0aW9uICsgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEucG9pbnRzLmF0KHRvdGFsUG9pbnRDb3VudCkudmFsdWUgPSBqc29uLmdldE1vdGlvbkN1cnZlU2VnbWVudChjdXJ2ZUNvdW50LCAoc2VnbWVudFBvc2l0aW9uICsgMikpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQb2ludENvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudFBvc2l0aW9uICs9IDM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDU01fQVNTRVJUKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgKyt0aGlzLl9tb3Rpb25EYXRhLmN1cnZlcy5hdChjdXJ2ZUNvdW50KS5zZWdtZW50Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICsrdG90YWxTZWdtZW50Q291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCB1c2VyZGF0YWNvdW50OiBudW1iZXIgPSAwOyB1c2VyZGF0YWNvdW50IDwganNvbi5nZXRFdmVudENvdW50KCk7ICsrdXNlcmRhdGFjb3VudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3Rpb25EYXRhLmV2ZW50cy5hdCh1c2VyZGF0YWNvdW50KS5maXJlVGltZSA9IGpzb24uZ2V0RXZlbnRUaW1lKHVzZXJkYXRhY291bnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbkRhdGEuZXZlbnRzLmF0KHVzZXJkYXRhY291bnQpLnZhbHVlID0ganNvbi5nZXRFdmVudFZhbHVlKHVzZXJkYXRhY291bnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBqc29uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIGpzb24gPSB2b2lkIDA7XG4gICAgICAgICAgICBqc29uID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7jg5Hjg6njg6Hjg7zjgr/mm7TmlrBcbiAgICAgICAgICpcbiAgICAgICAgICog44Kk44OZ44Oz44OI55m654Gr44Gu44OB44Kn44OD44Kv44CCXG4gICAgICAgICAqIOWFpeWKm+OBmeOCi+aZgumWk+OBr+WRvOOBsOOCjOOCi+ODouODvOOCt+ODp+ODs+OCv+OCpOODn+ODs+OCsOOCku+8kOOBqOOBl+OBn+enkuaVsOOBp+ihjOOBhuOAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gYmVmb3JlQ2hlY2tUaW1lU2Vjb25kcyAgIOWJjeWbnuOBruOCpOODmeODs+ODiOODgeOCp+ODg+OCr+aZgumWk1vnp5JdXG4gICAgICAgICAqIEBwYXJhbSBtb3Rpb25UaW1lU2Vjb25kcyAgICAgICAg5LuK5Zue44Gu5YaN55Sf5pmC6ZaTW+enkl1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRGaXJlZEV2ZW50KGJlZm9yZUNoZWNrVGltZVNlY29uZHM6IG51bWJlciwgbW90aW9uVGltZVNlY29uZHM6IG51bWJlcik6IGNzbVZlY3Rvcjxjc21TdHJpbmc+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpcmVkRXZlbnRWYWx1ZXMudXBkYXRlU2l6ZSgwKTtcblxuICAgICAgICAgICAgLy8g44Kk44OZ44Oz44OI44Gu55m654Gr44OB44Kn44OD44KvXG4gICAgICAgICAgICBmb3IgKGxldCB1OiBudW1iZXIgPSAwOyB1IDwgdGhpcy5fbW90aW9uRGF0YS5ldmVudENvdW50OyArK3UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLl9tb3Rpb25EYXRhLmV2ZW50cy5hdCh1KS5maXJlVGltZSA+IGJlZm9yZUNoZWNrVGltZVNlY29uZHMpICYmXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLl9tb3Rpb25EYXRhLmV2ZW50cy5hdCh1KS5maXJlVGltZSA8PSBtb3Rpb25UaW1lU2Vjb25kcykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maXJlZEV2ZW50VmFsdWVzLnB1c2hCYWNrKG5ldyBjc21TdHJpbmcodGhpcy5fbW90aW9uRGF0YS5ldmVudHMuYXQodSkudmFsdWUucykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcmVkRXZlbnRWYWx1ZXM7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgX3NvdXJjZUZyYW1lUmF0ZTogbnVtYmVyOyAgICAgICAgICAgLy8g44Ot44O844OJ44GX44Gf44OV44Kh44Kk44Or44GuRlBT44CC6KiY6L+w44GM54Sh44GR44KM44Gw44OH44OV44Kp44Or44OI5YCkMTVmcHPjgajjgarjgotcbiAgICAgICAgcHVibGljIF9sb29wRHVyYXRpb25TZWNvbmRzOiBudW1iZXI7ICAgICAgIC8vIG10buODleOCoeOCpOODq+OBp+Wumue+qeOBleOCjOOCi+S4gOmAo+OBruODouODvOOCt+ODp+ODs+OBrumVt+OBlVxuICAgICAgICBwdWJsaWMgX2lzTG9vcDogYm9vbGVhbjsgICAgICAgICAgICAgICAgICAgLy8g44Or44O844OX44GZ44KL44GLP1xuICAgICAgICBwdWJsaWMgX2lzTG9vcEZhZGVJbjogYm9vbGVhbjsgICAgICAgICAgICAgLy8g44Or44O844OX5pmC44Gr44OV44Kn44O844OJ44Kk44Oz44GM5pyJ5Yq544GL44Gp44GG44GL44Gu44OV44Op44Kw44CC5Yid5pyf5YCk44Gn44Gv5pyJ5Yq544CCXG4gICAgICAgIHB1YmxpYyBfbGFzdFdlaWdodDogbnVtYmVyOyAgICAgICAgICAgICAgICAvLyDmnIDlvozjgavoqK3lrprjgZXjgozjgZ/ph43jgb9cblxuICAgICAgICBwdWJsaWMgX21vdGlvbkRhdGE6IEN1YmlzbU1vdGlvbkRhdGE7ICAgICAgICAgICAgICAgICAgICAgICAgLy8g5a6f6Zqb44Gu44Oi44O844K344On44Oz44OH44O844K/5pys5L2TXG5cbiAgICAgICAgcHVibGljIF9leWVCbGlua1BhcmFtZXRlcklkczogY3NtVmVjdG9yPEN1YmlzbUlkSGFuZGxlPjsgIC8vIOiHquWLleOBvuOBsOOBn+OBjeOCkumBqeeUqOOBmeOCi+ODkeODqeODoeODvOOCv0lE44OP44Oz44OJ44Or44Gu44Oq44K544OI44CCICDjg6Ljg4fjg6vvvIjjg6Ljg4fjg6vjgrvjg4Pjg4bjgqPjg7PjgrDvvInjgajjg5Hjg6njg6Hjg7zjgr/jgpLlr77lv5zku5jjgZHjgovjgIJcbiAgICAgICAgcHVibGljIF9saXBTeW5jUGFyYW1ldGVySWRzOiBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+OyAgIC8vIOODquODg+ODl+OCt+ODs+OCr+OCkumBqeeUqOOBmeOCi+ODkeODqeODoeODvOOCv0lE44OP44Oz44OJ44Or44Gu44Oq44K544OI44CCICDjg6Ljg4fjg6vvvIjjg6Ljg4fjg6vjgrvjg4Pjg4bjgqPjg7PjgrDvvInjgajjg5Hjg6njg6Hjg7zjgr/jgpLlr77lv5zku5jjgZHjgovjgIJcblxuICAgICAgICBwdWJsaWMgX21vZGVsQ3VydmVJZEV5ZUJsaW5rOiBDdWJpc21JZEhhbmRsZTsgICAgLy8g44Oi44OH44Or44GM5oyB44Gk6Ieq5YuV44G+44Gw44Gf44GN55So44OR44Op44Oh44O844K/SUTjga7jg4/jg7Pjg4njg6vjgIIgIOODouODh+ODq+OBqOODouODvOOCt+ODp+ODs+OCkuWvvuW/nOS7mOOBkeOCi+OAglxuICAgICAgICBwdWJsaWMgX21vZGVsQ3VydmVJZExpcFN5bmM6IEN1YmlzbUlkSGFuZGxlOyAgICAgLy8g44Oi44OH44Or44GM5oyB44Gk44Oq44OD44OX44K344Oz44Kv55So44OR44Op44Oh44O844K/SUTjga7jg4/jg7Pjg4njg6vjgIIgIOODouODh+ODq+OBqOODouODvOOCt+ODp+ODs+OCkuWvvuW/nOS7mOOBkeOCi+OAglxuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkfSBmcm9tICcuLi9pZC9jdWJpc21pZCc7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gJy4uL3R5cGUvY3Ntc3RyaW5nJztcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSAnLi4vdHlwZS9jc212ZWN0b3InO1xuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcbmltcG9ydCBDdWJpc21JZEhhbmRsZSA9IGN1YmlzbWlkLkN1YmlzbUlkSGFuZGxlO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIEBicmllZiDjg6Ljg7zjgrfjg6fjg7Pjgqvjg7zjg5bjga7nqK7poZ5cbiAgICAgKlxuICAgICAqIOODouODvOOCt+ODp+ODs+OCq+ODvOODluOBrueorumhnuOAglxuICAgICAqL1xuICAgIGV4cG9ydCBlbnVtIEN1YmlzbU1vdGlvbkN1cnZlVGFyZ2V0XG4gICAge1xuICAgICAgICBDdWJpc21Nb3Rpb25DdXJ2ZVRhcmdldF9Nb2RlbCwgICAgICAgICAgLy8g44Oi44OH44Or44Gr5a++44GX44GmXG4gICAgICAgIEN1YmlzbU1vdGlvbkN1cnZlVGFyZ2V0X1BhcmFtZXRlciwgICAgICAvLyDjg5Hjg6njg6Hjg7zjgr/jgavlr77jgZfjgaZcbiAgICAgICAgQ3ViaXNtTW90aW9uQ3VydmVUYXJnZXRfUGFydE9wYWNpdHkgICAgIC8vIOODkeODvOODhOOBruS4jemAj+aYjuW6puOBq+WvvuOBl+OBplxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIEBicmllZiDjg6Ljg7zjgrfjg6fjg7Pjgqvjg7zjg5bjga7jgrvjgrDjg6Hjg7Pjg4jjga7nqK7poZ5cbiAgICAgKlxuICAgICAqIOODouODvOOCt+ODp+ODs+OCq+ODvOODluOBruOCu+OCsOODoeODs+ODiOOBrueorumhnuOAglxuICAgICAqL1xuICAgIGV4cG9ydCBlbnVtIEN1YmlzbU1vdGlvblNlZ21lbnRUeXBlXG4gICAge1xuICAgICAgICBDdWJpc21Nb3Rpb25TZWdtZW50VHlwZV9MaW5lYXIgPSAwLCAgICAgICAgIC8vIOODquODi+OColxuICAgICAgICBDdWJpc21Nb3Rpb25TZWdtZW50VHlwZV9CZXppZXIgPSAxLCAgICAgICAgIC8vIOODmeOCuOOCp+absue3mlxuICAgICAgICBDdWJpc21Nb3Rpb25TZWdtZW50VHlwZV9TdGVwcGVkID0gMiwgICAgICAgIC8vIOOCueODhuODg+ODl1xuICAgICAgICBDdWJpc21Nb3Rpb25TZWdtZW50VHlwZV9JbnZlcnNlU3RlcHBlZCA9IDMgIC8vIOOCpOODs+ODkOODvOOCueOCueODhuODg+ODl1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAYnJpZWYg44Oi44O844K344On44Oz44Kr44O844OW44Gu5Yi25b6h54K5XG4gICAgICpcbiAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjgqvjg7zjg5bjga7liLblvqHngrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTW90aW9uUG9pbnRcbiAgICB7XG4gICAgICAgIHRpbWU6IG51bWJlciA9IDAuMDsgICAgICAgICAvLyDmmYLplpNb56eSXVxuICAgICAgICB2YWx1ZTogbnVtYmVyID0gMC4wOyAgICAgICAgLy8g5YCkXG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog44Oi44O844K344On44Oz44Kr44O844OW44Gu44K744Kw44Oh44Oz44OI44Gu6KmV5L6h6Zai5pWwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICBwb2ludHMgICAgICDjg6Ljg7zjgrfjg6fjg7Pjgqvjg7zjg5bjga7liLblvqHngrnjg6rjgrnjg4hcbiAgICAgKiBAcGFyYW0gICB0aW1lICAgICAgICDoqZXkvqHjgZnjgovmmYLplpNb56eSXVxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgY3NtTW90aW9uU2VnbWVudEV2YWx1YXRpb25GdW5jdGlvblxuICAgIHtcbiAgICAgICAgKFxuICAgICAgICAgICAgcG9pbnRzOiBDdWJpc21Nb3Rpb25Qb2ludFtdLFxuICAgICAgICAgICAgdGltZTogbnVtYmVyXG4gICAgICAgICk6IG51bWJlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYnJpZWYg44Oi44O844K344On44Oz44Kr44O844OW44Gu44K744Kw44Oh44Oz44OIXG4gICAgICpcbiAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjgqvjg7zjg5bjga7jgrvjgrDjg6Hjg7Pjg4jjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTW90aW9uU2VnbWVudFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBicmllZiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICpcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmV2YWx1YXRlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuYmFzZVBvaW50SW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWdtZW50VHlwZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBldmFsdWF0ZTogY3NtTW90aW9uU2VnbWVudEV2YWx1YXRpb25GdW5jdGlvbjsgICAvLyDkvb/nlKjjgZnjgovoqZXkvqHplqLmlbBcbiAgICAgICAgYmFzZVBvaW50SW5kZXg6IG51bWJlcjsgICAgIC8vIOacgOWIneOBruOCu+OCsOODoeODs+ODiOOBuOOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICBzZWdtZW50VHlwZTogbnVtYmVyOyAgICAvLyDjgrvjgrDjg6Hjg7Pjg4jjga7nqK7poZ5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGJyaWVmIOODouODvOOCt+ODp+ODs+OCq+ODvOODllxuICAgICAqXG4gICAgICog44Oi44O844K344On44Oz44Kr44O844OW44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbU1vdGlvbkN1cnZlXG4gICAge1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBDdWJpc21Nb3Rpb25DdXJ2ZVRhcmdldC5DdWJpc21Nb3Rpb25DdXJ2ZVRhcmdldF9Nb2RlbDtcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudENvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuYmFzZVNlZ21lbnRJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZhZGVJblRpbWUgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLmZhZGVPdXRUaW1lID0gMC4wO1xuICAgICAgICB9XG5cbiAgICAgICAgdHlwZTogQ3ViaXNtTW90aW9uQ3VydmVUYXJnZXQ7ICAgICAgICAgICAgICAgLy8g44Kr44O844OW44Gu56iu6aGeXG4gICAgICAgIGlkOiBDdWJpc21JZEhhbmRsZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Kr44O844OW44GuSURcbiAgICAgICAgc2VnbWVudENvdW50OiBudW1iZXI7ICAgICAgICAgICAgICAgICAgICAgIC8vIOOCu+OCsOODoeODs+ODiOOBruWAi+aVsFxuICAgICAgICBiYXNlU2VnbWVudEluZGV4OiBudW1iZXI7ICAgICAgICAgICAgICAgICAgLy8g5pyA5Yid44Gu44K744Kw44Oh44Oz44OI44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgIGZhZGVJblRpbWU6IG51bWJlcjsgICAgICAgICAgICAgICAgICAgICAgLy8g44OV44Kn44O844OJ44Kk44Oz44Gr44GL44GL44KL5pmC6ZaTW+enkl1cbiAgICAgICAgZmFkZU91dFRpbWU6IG51bWJlcjsgICAgICAgICAgICAgICAgICAgICAvLyDjg5Xjgqfjg7zjg4njgqLjgqbjg4jjgavjgYvjgYvjgovmmYLplpNb56eSXVxuICAgIH07XG5cbiAgICAvKipcbiAgICAqIOOCpOODmeODs+ODiOOAglxuICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbU1vdGlvbkV2ZW50XG4gICAge1xuICAgICAgICBmaXJlVGltZTogbnVtYmVyID0gMC4wO1xuICAgICAgICB2YWx1ZTogY3NtU3RyaW5nO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAYnJpZWYg44Oi44O844K344On44Oz44OH44O844K/XG4gICAgICpcbiAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjg4fjg7zjgr/jgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTW90aW9uRGF0YVxuICAgIHtcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMubG9vcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jdXJ2ZUNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRDb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZwcyA9IDAuMDtcblxuICAgICAgICAgICAgdGhpcy5jdXJ2ZXMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbU1vdGlvbkN1cnZlPigpO1xuICAgICAgICAgICAgdGhpcy5zZWdtZW50cyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtTW90aW9uU2VnbWVudD4oKTtcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21Nb3Rpb25Qb2ludD4oKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21Nb3Rpb25FdmVudD4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg6Ljg7zjgrfjg6fjg7Pjga7plbfjgZVb56eSXVxuICAgICAgICBsb29wOiBib29sZWFuOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Or44O844OX44GZ44KL44GL44Gp44GG44GLXG4gICAgICAgIGN1cnZlQ291bnQ6IG51bWJlcjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgqvjg7zjg5bjga7lgIvmlbBcbiAgICAgICAgZXZlbnRDb3VudDogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZXJEYXRh44Gu5YCL5pWwXG4gICAgICAgIGZwczogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg5Xjg6zjg7zjg6Djg6zjg7zjg4hcbiAgICAgICAgY3VydmVzOiBjc21WZWN0b3I8Q3ViaXNtTW90aW9uQ3VydmU+OyAgICAgICAgICAgICAgIC8vIOOCq+ODvOODluOBruODquOCueODiFxuICAgICAgICBzZWdtZW50czogY3NtVmVjdG9yPEN1YmlzbU1vdGlvblNlZ21lbnQ+OyAgICAgICAgICAgLy8g44K744Kw44Oh44Oz44OI44Gu44Oq44K544OIXG4gICAgICAgIHBvaW50czogY3NtVmVjdG9yPEN1YmlzbU1vdGlvblBvaW50PjsgICAgICAgICAgICAgICAvLyDjg53jgqTjg7Pjg4jjga7jg6rjgrnjg4hcbiAgICAgICAgZXZlbnRzOiBjc21WZWN0b3I8Q3ViaXNtTW90aW9uRXZlbnQ+OyAgICAgICAgICAgICAgIC8vIOOCpOODmeODs+ODiOOBruODquOCueODiFxuICAgIH07XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21qc29ufSBmcm9tICcuLi91dGlscy9jdWJpc21qc29uJztcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkfSBmcm9tICcuLi9pZC9jdWJpc21pZCc7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21mcmFtZXdvcmt9IGZyb20gJy4uL2xpdmUyZGN1YmlzbWZyYW1ld29yayc7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gJy4uL3R5cGUvY3Ntc3RyaW5nJztcbmltcG9ydCBjc21TdHJpbmcgPSBjc21zdHJpbmcuY3NtU3RyaW5nO1xuaW1wb3J0IEN1YmlzbUZyYW1ld29yayA9IGN1YmlzbWZyYW1ld29yay5DdWJpc21GcmFtZXdvcms7XG5pbXBvcnQgQ3ViaXNtSWRIYW5kbGUgPSBjdWJpc21pZC5DdWJpc21JZEhhbmRsZTtcbmltcG9ydCBDdWJpc21Kc29uID0gY3ViaXNtanNvbi5DdWJpc21Kc29uO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8vIEpTT04ga2V5c1xuICAgIGNvbnN0IE1ldGE6IHN0cmluZyA9IFwiTWV0YVwiO1xuICAgIGNvbnN0IER1cmF0aW9uOiBzdHJpbmcgPSBcIkR1cmF0aW9uXCI7XG4gICAgY29uc3QgTG9vcDogc3RyaW5nID0gXCJMb29wXCI7XG4gICAgY29uc3QgQ3VydmVDb3VudDogc3RyaW5nID0gXCJDdXJ2ZUNvdW50XCI7XG4gICAgY29uc3QgRnBzOiBzdHJpbmcgPSBcIkZwc1wiO1xuICAgIGNvbnN0IFRvdGFsU2VnbWVudENvdW50OiBzdHJpbmcgPSBcIlRvdGFsU2VnbWVudENvdW50XCI7XG4gICAgY29uc3QgVG90YWxQb2ludENvdW50OiBzdHJpbmcgPSBcIlRvdGFsUG9pbnRDb3VudFwiO1xuICAgIGNvbnN0IEN1cnZlczogc3RyaW5nID0gXCJDdXJ2ZXNcIjtcbiAgICBjb25zdCBUYXJnZXQ6IHN0cmluZyA9IFwiVGFyZ2V0XCI7XG4gICAgY29uc3QgSWQ6IHN0cmluZyA9IFwiSWRcIjtcbiAgICBjb25zdCBGYWRlSW5UaW1lOiBzdHJpbmcgPSBcIkZhZGVJblRpbWVcIjtcbiAgICBjb25zdCBGYWRlT3V0VGltZTogc3RyaW5nID0gXCJGYWRlT3V0VGltZVwiO1xuICAgIGNvbnN0IFNlZ21lbnRzOiBzdHJpbmcgPSBcIlNlZ21lbnRzXCI7XG4gICAgY29uc3QgVXNlckRhdGE6IHN0cmluZyA9IFwiVXNlckRhdGFcIjtcbiAgICBjb25zdCBVc2VyRGF0YUNvdW50OiBzdHJpbmcgPSBcIlVzZXJEYXRhQ291bnRcIjtcbiAgICBjb25zdCBUb3RhbFVzZXJEYXRhU2l6ZTogc3RyaW5nID0gXCJUb3RhbFVzZXJEYXRhU2l6ZVwiO1xuICAgIGNvbnN0IFRpbWU6IHN0cmluZyA9IFwiVGltZVwiO1xuICAgIGNvbnN0IFZhbHVlOiBzdHJpbmcgPSBcIlZhbHVlXCI7XG5cbiAgICAvKipcbiAgICAgKiBtb3Rpb24zLmpzb27jga7jgrPjg7Pjg4bjg4rjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTW90aW9uSnNvblxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyIG1vdGlvbjMuanNvbuOBjOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDjg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2pzb24gPSBDdWJpc21Kc29uLmNyZWF0ZShidWZmZXIsIHNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBDdWJpc21Kc29uLmRlbGV0ZSh0aGlzLl9qc29uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7plbfjgZXjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjga7plbfjgZVb56eSXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vdGlvbkR1cmF0aW9uKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhNZXRhKS5nZXRWYWx1ZUJ5U3RyaW5nKER1cmF0aW9uKS50b0Zsb2F0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gu44Or44O844OX5oOF5aCx44Gu5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjg6vjg7zjg5fjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjg6vjg7zjg5fjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc01vdGlvbkxvb3AoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhNZXRhKS5nZXRWYWx1ZUJ5U3RyaW5nKExvb3ApLnRvQm9vbGVhbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OCq+ODvOODluOBruWAi+aVsOOBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+OCq+ODvOODluOBruWAi+aVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vdGlvbkN1cnZlQ291bnQoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKE1ldGEpLmdldFZhbHVlQnlTdHJpbmcoQ3VydmVDb3VudCkudG9JbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7jg5Xjg6zjg7zjg6Djg6zjg7zjg4jjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDjg5Xjg6zjg7zjg6Djg6zjg7zjg4hbRlBTXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vdGlvbkZwcygpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoTWV0YSkuZ2V0VmFsdWVCeVN0cmluZyhGcHMpLnRvRmxvYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7jgrvjgrDjg6Hjg7Pjg4jjga7nt4/lkIjoqIjjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjga7jgrvjgrDjg6Hjg7Pjg4jjga7lj5blvpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNb3Rpb25Ub3RhbFNlZ21lbnRDb3VudCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoTWV0YSkuZ2V0VmFsdWVCeVN0cmluZyhUb3RhbFNlZ21lbnRDb3VudCkudG9JbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7jgqvjg7zjg5bjga7liLblvqHlupfjga7nt4/lkIjoqIjjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjga7jgqvjg7zjg5bjga7liLblvqHngrnjga7nt4/lkIjoqIhcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNb3Rpb25Ub3RhbFBvaW50Q291bnQoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKE1ldGEpLmdldFZhbHVlQnlTdHJpbmcoVG90YWxQb2ludENvdW50KS50b0ludCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBruODleOCp+ODvOODieOCpOODs+aZgumWk+OBruWtmOWcqFxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFeGlzdE1vdGlvbkZhZGVJblRpbWUoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoTWV0YSkuZ2V0VmFsdWVCeVN0cmluZyhGYWRlSW5UaW1lKS5pc051bGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7jg5Xjgqfjg7zjg4njgqLjgqbjg4jmmYLplpPjga7lrZjlnKhcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWtmOWcqOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWtmOWcqOOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXhpc3RNb3Rpb25GYWRlT3V0VGltZSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhNZXRhKS5nZXRWYWx1ZUJ5U3RyaW5nKEZhZGVPdXRUaW1lKS5pc051bGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7jg5Xjgqfjg7zjg4njgqTjg7PmmYLplpPjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDjg5Xjgqfjg7zjg4njgqTjg7PmmYLplpNb56eSXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vdGlvbkZhZGVJblRpbWUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKE1ldGEpLmdldFZhbHVlQnlTdHJpbmcoRmFkZUluVGltZSkudG9GbG9hdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBruODleOCp+ODvOODieOCouOCpuODiOaZgumWk+OBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOODleOCp+ODvOODieOCouOCpuODiOaZgumWk1vnp5JdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TW90aW9uRmFkZU91dFRpbWUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKE1ldGEpLmdldFZhbHVlQnlTdHJpbmcoRmFkZU91dFRpbWUpLnRvRmxvYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7jgqvjg7zjg5bjga7nqK7poZ7jga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIGN1cnZlSW5kZXgg44Kr44O844OW44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4g44Kr44O844OW44Gu56iu6aGeXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TW90aW9uQ3VydmVUYXJnZXQoY3VydmVJbmRleDogbnVtYmVyKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKEN1cnZlcykuZ2V0VmFsdWVCeUluZGV4KGN1cnZlSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoVGFyZ2V0KS5nZXRSYXdTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7jgqvjg7zjg5bjga5JROOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gY3VydmVJbmRleCDjgqvjg7zjg5bjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDjgqvjg7zjg5bjga5JRFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vdGlvbkN1cnZlSWQoY3VydmVJbmRleDogbnVtYmVyKTogQ3ViaXNtSWRIYW5kbGVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZCh0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKEN1cnZlcykuZ2V0VmFsdWVCeUluZGV4KGN1cnZlSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoSWQpLmdldFJhd1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7jgqvjg7zjg5bjga7jg5Xjgqfjg7zjg4njgqTjg7PmmYLplpPjga7lrZjlnKhcbiAgICAgICAgICogQHBhcmFtIGN1cnZlSW5kZXgg44Kr44O844OW44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0V4aXN0TW90aW9uQ3VydmVGYWRlSW5UaW1lKGN1cnZlSW5kZXg6IG51bWJlcik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKEN1cnZlcykuZ2V0VmFsdWVCeUluZGV4KGN1cnZlSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoRmFkZUluVGltZSkuaXNOdWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gu44Kr44O844OW44Gu44OV44Kn44O844OJ44Ki44Km44OI5pmC6ZaT44Gu5a2Y5ZyoXG4gICAgICAgICAqIEBwYXJhbSBjdXJ2ZUluZGV4IOOCq+ODvOODluOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFeGlzdE1vdGlvbkN1cnZlRmFkZU91dFRpbWUoY3VydmVJbmRleDogbnVtYmVyKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoQ3VydmVzKS5nZXRWYWx1ZUJ5SW5kZXgoY3VydmVJbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhGYWRlT3V0VGltZSkuaXNOdWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gu44Kr44O844OW44Gu44OV44Kn44O844OJ44Kk44Oz5pmC6ZaT44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBjdXJ2ZUluZGV4IOOCq+ODvOODluOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOODleOCp+ODvOODieOCpOODs+aZgumWk1vnp5JdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TW90aW9uQ3VydmVGYWRlSW5UaW1lKGN1cnZlSW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhDdXJ2ZXMpLmdldFZhbHVlQnlJbmRleChjdXJ2ZUluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKEZhZGVJblRpbWUpLnRvRmxvYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7jgqvjg7zjg5bjga7jg5Xjgqfjg7zjg4njgqLjgqbjg4jmmYLplpPjga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIGN1cnZlSW5kZXgg44Kr44O844OW44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4g44OV44Kn44O844OJ44Ki44Km44OI5pmC6ZaTW+enkl1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNb3Rpb25DdXJ2ZUZhZGVPdXRUaW1lKGN1cnZlSW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhDdXJ2ZXMpLmdldFZhbHVlQnlJbmRleChjdXJ2ZUluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKEZhZGVPdXRUaW1lKS50b0Zsb2F0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gu44Kr44O844OW44Gu44K744Kw44Oh44Oz44OI44Gu5YCL5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBjdXJ2ZUluZGV4IOOCq+ODvOODluOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+OBruOCq+ODvOODluOBruOCu+OCsOODoeODs+ODiOOBruWAi+aVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vdGlvbkN1cnZlU2VnbWVudENvdW50KGN1cnZlSW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhDdXJ2ZXMpLmdldFZhbHVlQnlJbmRleChjdXJ2ZUluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKFNlZ21lbnRzKS5nZXRWZWN0b3IoKS5nZXRTaXplKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gu44Kr44O844OW44Gu44K744Kw44Oh44Oz44OI44Gu5YCk44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBjdXJ2ZUluZGV4IOOCq+ODvOODluOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcGFyYW0gc2VnbWVudEluZGV4IOOCu+OCsOODoeODs+ODiOOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOOCu+OCsOODoeODs+ODiOOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vdGlvbkN1cnZlU2VnbWVudChjdXJ2ZUluZGV4OiBudW1iZXIsIHNlZ21lbnRJbmRleDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKEN1cnZlcykuZ2V0VmFsdWVCeUluZGV4KGN1cnZlSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoU2VnbWVudHMpLmdldFZhbHVlQnlJbmRleChzZWdtZW50SW5kZXgpLnRvRmxvYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqTjg5njg7Pjg4jjga7lgIvmlbDjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDjgqTjg5njg7Pjg4jjga7lgIvmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRFdmVudENvdW50KCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhNZXRhKS5nZXRWYWx1ZUJ5U3RyaW5nKFVzZXJEYXRhQ291bnQpLnRvSW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIOOCpOODmeODs+ODiOOBrue3j+aWh+Wtl+aVsOOBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOOCpOODmeODs+ODiOOBrue3j+aWh+Wtl+aVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFRvdGFsRXZlbnRWYWx1ZVNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKE1ldGEpLmdldFZhbHVlQnlTdHJpbmcoVG90YWxVc2VyRGF0YVNpemUpLnRvSW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kk44OZ44Oz44OI44Gu5pmC6ZaT44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSB1c2VyRGF0YUluZGV4IOOCpOODmeODs+ODiOOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOOCpOODmeODs+ODiOOBruaZgumWk1vnp5JdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RXZlbnRUaW1lKHVzZXJEYXRhSW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhVc2VyRGF0YSkuZ2V0VmFsdWVCeUluZGV4KHVzZXJEYXRhSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoVGltZSkudG9JbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqTjg5njg7Pjg4jjga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIHVzZXJEYXRhSW5kZXgg44Kk44OZ44Oz44OI44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4g44Kk44OZ44Oz44OI44Gu5paH5a2X5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RXZlbnRWYWx1ZSh1c2VyRGF0YUluZGV4OiBudW1iZXIpOiBjc21TdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBjc21TdHJpbmcodGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhVc2VyRGF0YSkuZ2V0VmFsdWVCeUluZGV4KHVzZXJEYXRhSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoVmFsdWUpLmdldFJhd1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9qc29uOiBDdWJpc21Kc29uOyAgLy8gbW90aW9uMy5qc29u44Gu44OH44O844K/XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbWF0cml4NDR9IGZyb20gJy4uL21hdGgvY3ViaXNtbWF0cml4NDQnO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW9kZWx9IGZyb20gJy4uL21vZGVsL2N1YmlzbW1vZGVsJztcbmltcG9ydCBDdWJpc21Nb2RlbCA9IGN1YmlzbW1vZGVsLkN1YmlzbU1vZGVsO1xuaW1wb3J0IEN1YmlzbU1hdHJpeDQ0ID0gY3ViaXNtbWF0cml4NDQuQ3ViaXNtTWF0cml4NDQ7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44Oi44OH44Or5o+P55S744KS5Yem55CG44GZ44KL44Os44Oz44OA44OpXG4gICAgICpcbiAgICAgKiDjgrXjg5bjgq/jg6njgrnjgavnkrDlooPkvp3lrZjjga7mj4/nlLvlkb3ku6TjgpLoqJjov7DjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3ViaXNtUmVuZGVyZXJcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZfjgablj5blvpfjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiDjg6zjg7Pjg4Djg6njga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6IEN1YmlzbVJlbmRlcmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCueOCkuino+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBkZWxldGUocmVuZGVyZXI6IEN1YmlzbVJlbmRlcmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICByZW5kZXJlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu5Yid5pyf5YyW5Yem55CG44KS5a6f6KGM44GZ44KLXG4gICAgICAgICAqIOW8leaVsOOBq+a4oeOBl+OBn+ODouODh+ODq+OBi+OCieODrOODs+ODgOODqeOBruWIneacn+WMluWHpueQhuOBq+W/heimgeOBquaDheWgseOCkuWPluOCiuWHuuOBmeOBk+OBqOOBjOOBp+OBjeOCi1xuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg44Oi44OH44Or44Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5pdGlhbGl6ZShtb2RlbDogQ3ViaXNtTW9kZWwpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsID0gbW9kZWw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or44KS5o+P55S744GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZHJhd01vZGVsKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5nZXRNb2RlbCgpID09IG51bGwpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5kb0RyYXdNb2RlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJfjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICog6YWN5YiX44Gv6KSH6KO944GV44KM44KL44Gu44Gn44CB5YWD44Gu6YWN5YiX44Gv5aSW44Gn56C05qOE44GX44Gm6Imv44GEXG4gICAgICAgICAqIEBwYXJhbSBtYXRyaXg0NCBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0TXZwTWF0cml4KG1hdHJpeDQ0OiBDdWJpc21NYXRyaXg0NCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbXZwTWF0cml4NHg0LnNldE1hdHJpeChtYXRyaXg0NC5nZXRBcnJheSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiX44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE12cE1hdHJpeCgpOiBDdWJpc21NYXRyaXg0NFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbXZwTWF0cml4NHg0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OBruiJsuOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiDlkIToibIwLjB+MS4w44Gu6ZaT44Gn5oyH5a6a44GZ44KL77yIMS4w44GM5qiZ5rqW44Gu54q25oWL77yJXG4gICAgICAgICAqIEBwYXJhbSByZWQg6LWk44OB44Oj44Oz44ON44Or44Gu5YCkXG4gICAgICAgICAqIEBwYXJhbSBncmVlbiDnt5Hjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcbiAgICAgICAgICogQHBhcmFtIGJsdWUg6Z2S44OB44Oj44Oz44ON44Or44Gu5YCkXG4gICAgICAgICAqIEBwYXJhbSBhbHBoYSDOseODgeODo+ODs+ODjeODq+OBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldE1vZGVsQ29sb3IocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlciwgYWxwaGE6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYocmVkIDwgMC4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZCA9IDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocmVkID4gMS4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZCA9IDEuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoZ3JlZW4gPCAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ3JlZW4gPSAwLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGdyZWVuID4gMS4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdyZWVuID0gMS4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihibHVlIDwgMC4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJsdWUgPSAwLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGJsdWUgPiAxLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmx1ZSA9IDEuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoYWxwaGEgPCAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSAwLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGFscGhhID4gMS4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFscGhhID0gMS4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLlIgPSByZWQ7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLkcgPSBncmVlbjtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuQiA9IGJsdWU7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLkEgPSBhbHBoYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7oibLjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICog5ZCE6ImyMC4wfjEuMOOBrumWk+OBp+aMh+WumuOBmeOCiygxLjDjgYzmqJnmupbjga7nirbmhYspXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gUkdCQeOBruOCq+ODqeODvOaDheWgsVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vZGVsQ29sb3IoKTogQ3ViaXNtVGV4dHVyZUNvbG9yXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX21vZGVsQ29sb3IpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDkuZfnrpfmuIjjgb/OseOBruacieWKueODu+eEoeWKueOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiDmnInlirnjgavjgZnjgovjgarjgol0cnVl44CB54Sh5Yq544Gr44GZ44KL44Gq44KJZmFsc2XjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRJc1ByZW11bHRpcGxpZWRBbHBoYShlbmFibGU6IGJvb2xlYW4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJlbXVsdGlwbGllZEFscGhhID0gZW5hYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS5l+eul+a4iOOBv86x44Gu5pyJ5Yq544O754Sh5Yq544KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDkuZfnrpfmuIjjgb/jga7OseacieWKuVxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOS5l+eul+a4iOOBv+OBrs6x54Sh5Yq5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNQcmVtdWx0aXBsaWVkQWxwaGEoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kr44Oq44Oz44Kw77yI54mH6Z2i5o+P55S777yJ44Gu5pyJ5Yq544O754Sh5Yq544KS44K744OD44OI44GZ44KL44CCXG4gICAgICAgICAqIOacieWKueOBq+OBmeOCi+OBquOCiXRydWXjgIHnhKHlirnjgavjgZnjgovjgarjgolmYWxzZeOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldElzQ3VsbGluZyhjdWxsaW5nOiBib29sZWFuKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pc0N1bGxpbmcgPSBjdWxsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCq+ODquODs+OCsO+8iOeJh+mdouaPj+eUu++8ieOBruacieWKueODu+eEoeWKueOCkuWPluW+l+OBmeOCi+OAglxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg44Kr44Oq44Oz44Kw5pyJ5Yq5XG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Kr44Oq44Oz44Kw54Sh5Yq5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNDdWxsaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ3VsbGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr/jgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICog44OR44Op44Oh44O844K/5YCk44Gu5b2x6Z+/5bqm44Gv44Os44Oz44OA44Op44Gu5a6f6KOF44Gr5L6d5a2Y44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBuIOODkeODqeODoeODvOOCv+OBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldEFuaXNvdHJvcHkobjogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9hbmlzb3J0b3B5ID0gbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr/jgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICogQHJldHVybiDnlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRBbmlzb3Ryb3B5KCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5pc29ydG9weTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6rjg7PjgrDjgZnjgovjg6Ljg4fjg6vjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDjg6zjg7Pjg4Djg6rjg7PjgrDjgZnjgovjg6Ljg4fjg6tcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNb2RlbCgpOiBDdWJpc21Nb2RlbFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pc0N1bGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJlbXVsdGlwbGllZEFscGhhID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9hbmlzb3J0b3B5ID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvciA9IG5ldyBDdWJpc21UZXh0dXJlQ29sb3IoKTtcblxuICAgICAgICAgICAgLy8g5Y2Y5L2N6KGM5YiX44Gr5Yid5pyf5YyWXG4gICAgICAgICAgICB0aGlzLl9tdnBNYXRyaXg0eDQgPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NC5sb2FkSWRlbnRpdHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vmj4/nlLvjga7lrp/oo4VcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBkb0RyYXdNb2RlbCgpOiB2b2lkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jvvIjjgqLjg7zjg4jjg6Hjg4Pjgrfjg6XvvInjgpLmj4/nlLvjgZnjgotcbiAgICAgICAgICog44Od44Oq44K044Oz44Oh44OD44K344Ol44Go44OG44Kv44K544OB44Oj55Wq5Y+344KS44K744OD44OI44Gn5rih44GZ44CCXG4gICAgICAgICAqIEBwYXJhbSB0ZXh0dXJlTm8g5o+P55S744GZ44KL44OG44Kv44K544OB44Oj55Wq5Y+3XG4gICAgICAgICAqIEBwYXJhbSBpbmRleENvdW50IOaPj+eUu+OCquODluOCuOOCp+OCr+ODiOOBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcGFyYW0gdmVydGV4Q291bnQg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu6aCC54K55pWwXG4gICAgICAgICAqIEBwYXJhbSBpbmRleEFycmF5IOODneODquOCtOODs+ODoeODg+OCt+ODpemggueCueOBruOCpOODs+ODh+ODg+OCr+OCuemFjeWIl1xuICAgICAgICAgKiBAcGFyYW0gdmVydGV4QXJyYXkg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu6aCC54K56YWN5YiXXG4gICAgICAgICAqIEBwYXJhbSB1dkFycmF5IHV26YWN5YiXXG4gICAgICAgICAqIEBwYXJhbSBvcGFjaXR5IOS4jemAj+aYjuW6plxuICAgICAgICAgKiBAcGFyYW0gY29sb3JCbGVuZE1vZGUg44Kr44Op44O844OW44Os44Oz44OH44Kj44Oz44Kw44Gu44K/44Kk44OXXG4gICAgICAgICAqIEBwYXJhbSBpbnZlcnRlZE1hc2sg44Oe44K544Kv5L2/55So5pmC44Gu44Oe44K544Kv44Gu5Y+N6Lui5L2/55SoXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZHJhd01lc2godGV4dHVyZU5vOiBudW1iZXIsIGluZGV4Q291bnQ6IG51bWJlciwgdmVydGV4Q291bnQ6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4QXJyYXk6IFVpbnQxNkFycmF5LCB2ZXJ0ZXhBcnJheTogRmxvYXQzMkFycmF5LCB1dkFycmF5OiBGbG9hdDMyQXJyYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBudW1iZXIsIGNvbG9yQmxlbmRNb2RlOiBDdWJpc21CbGVuZE1vZGUsIGludmVydGVkTWFzazogYm9vbGVhbik6IHZvaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBjOS/neaMgeOBmeOCi+mdmeeahOOBquODquOCveODvOOCueOCkumWi+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGF0aWNSZWxlYXNlOiBGdW5jdGlvbjtcblxuICAgICAgICBwcm90ZWN0ZWQgX212cE1hdHJpeDR4NDogQ3ViaXNtTWF0cml4NDQ7ICAgICAgICAgICAgICAgICAgLy8gTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xuICAgICAgICBwcm90ZWN0ZWQgX21vZGVsQ29sb3I6IEN1YmlzbVRleHR1cmVDb2xvcjsgICAgICAgICAgICAgICAgLy8g44Oi44OH44Or6Ieq5L2T44Gu44Kr44Op44O877yIUkdCQe+8iVxuICAgICAgICBwcm90ZWN0ZWQgX2lzQ3VsbGluZzogYm9vbGVhbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Kr44Oq44Oz44Kw44GM5pyJ5Yq544Gq44KJdHJ1ZVxuICAgICAgICBwcm90ZWN0ZWQgX2lzUHJlbXVsdGlwbGllZEFscGhhOiBib29sZWFuOyAgICAgICAgICAgICAgICAgLy8g5LmX566X5riI44G/zrHjgarjgol0cnVlXG4gICAgICAgIHByb3RlY3RlZCBfYW5pc29ydG9weTogYW55OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr9cbiAgICAgICAgcHJvdGVjdGVkIF9tb2RlbDogQ3ViaXNtTW9kZWw7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODrOODs+ODgOODquODs+OCsOWvvuixoeOBruODouODh+ODq1xuICAgIH1cblxuICAgIGV4cG9ydCBlbnVtIEN1YmlzbUJsZW5kTW9kZVxuICAgIHtcbiAgICAgICAgQ3ViaXNtQmxlbmRNb2RlX05vcm1hbCA9IDAsICAgICAgICAgLy8g6YCa5bi4XG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9BZGRpdGl2ZSA9IDEsICAgICAgIC8vIOWKoOeul1xuICAgICAgICBDdWJpc21CbGVuZE1vZGVfTXVsdGlwbGljYXRpdmUgPSAyLCAvLyDkuZfnrpdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog44OG44Kv44K544OB44Oj44Gu6Imy44KSUkdCQeOBp+aJseOBhuOBn+OCgeOBruOCr+ODqeOCuVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21UZXh0dXJlQ29sb3JcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5SID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5HID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5CID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5BID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgUjogbnVtYmVyOyAgLy8g6LWk44OB44Oj44Oz44ON44OrXG4gICAgICAgIEc6IG51bWJlcjsgIC8vIOe3keODgeODo+ODs+ODjeODq1xuICAgICAgICBCOiBudW1iZXI7ICAvLyDpnZLjg4Hjg6Pjg7Pjg43jg6tcbiAgICAgICAgQTogbnVtYmVyOyAgLy8gzrHjg4Hjg6Pjg7Pjg43jg6tcbiAgICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBDdWJpc21Mb2dEZWJ1ZyB9IGZyb20gXCIuLi91dGlscy9jdWJpc21kZWJ1Z1wiO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIEtleS1WYWx1ZeOBruODmuOCouOCkuWumue+qeOBmeOCi+OCr+ODqeOCuVxuICAgICAqIGNzbU1hcOOCr+ODqeOCueOBruWGhemDqOODh+ODvOOCv+OBp+S9v+eUqOOBmeOCi+OAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBjc21QYWlyPF9LZXlULCBfVmFsVD5cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICogQHBhcmFtIGtleSBLZXnjgajjgZfjgabjgrvjg4Pjg4jjgZnjgovlgKRcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIFZhbHVl44Go44GX44Gm44K744OD44OI44GZ44KL5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Ioa2V5PzogX0tleVQsIHZhbHVlPzogX1ZhbFQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3QgPSAoa2V5ID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICA6IGtleTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSAodmFsdWUgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgIDogdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZmlyc3Q6IF9LZXlUOyAgIC8vIGtleeOBqOOBl+OBpueUqOOBhOOCi+WkieaVsFxuICAgICAgICBwdWJsaWMgc2Vjb25kOiBfVmFsVDsgIC8vIHZhbHVl44Go44GX44Gm55So44GE44KL5aSJ5pWwXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44Oe44OD44OX5Z6LXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbU1hcDxfS2V5VCwgX1ZhbFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqIEBwYXJhbSBzaXplIOWIneacn+WMluaZgueCueOBp+eiuuS/neOBmeOCi+OCteOCpOOCulxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU/OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHNpemUgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHNpemUgPCAxKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2R1bW15VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHVtbXlWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgq3jg7zjgpLov73liqDjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGtleSDmlrDjgZ/jgavov73liqDjgZnjgovjgq3jg7xcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhcHBlbmRLZXkoa2V5OiBfS2V5VCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgLy8g5paw44GX44GPS2V5L1ZhbHVl44Gu44Oa44Ki44KS5L2c44KLXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eSh0aGlzLl9zaXplICsgMSwgZmFsc2UpOyAvLyAx44Gk5Lul5LiK5YWl44KL6ZqZ6ZaT44KS5L2c44KLXG4gICAgICAgICAgICAvLyDmlrDjgZfjgYRrZXkvdmFsdWXjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjga9fc2l6ZVxuXG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXNbdGhpcy5fc2l6ZV0gPSBuZXcgY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+KGtleSk7XG4gICAgICAgICAgICB0aGlzLl9zaXplICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2tleV3jga7jgqrjg7zjg5Djg7zjg63jg7zjg4koZ2V0KVxuICAgICAgICAgKiBAcGFyYW0ga2V5IOa3u+Wtl+OBi+OCieeJueWumuOBleOCjOOCi1ZhbHVl5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWUoa2V5OiBfS2V5VCk6IF9WYWxUXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IC0xO1xuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihmb3VuZCA+PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlWYWx1ZXNbZm91bmRdLnNlY29uZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZEtleShrZXkpOyAvLyDmlrDopo/jgq3jg7zjgpLov73liqBcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5VmFsdWVzW3RoaXMuX3NpemUgLSAxXS5zZWNvbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2tleV3jga7jgqrjg7zjg5Djg7zjg63jg7zjg4koc2V0KVxuICAgICAgICAgKiBAcGFyYW0ga2V5IOa3u+Wtl+OBi+OCieeJueWumuOBleOCjOOCi1ZhbHVl5YCkXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDku6PlhaXjgZnjgotWYWx1ZeWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldFZhbHVlKGtleTogX0tleVQsIHZhbHVlOiBfVmFsVCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGZvdW5kID0gLTE7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXNbaV0uZmlyc3QgPT0ga2V5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGZvdW5kID49IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzW2ZvdW5kXS5zZWNvbmQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZEtleShrZXkpOyAvLyDmlrDopo/jgq3jg7zjgpLov73liqBcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXNbdGhpcy5fc2l6ZSAtIDFdLnNlY29uZCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOOBp+a4oeOBl+OBn0tleeOCkuaMgeOBpOimgee0oOOBjOWtmOWcqOOBmeOCi+OBi1xuICAgICAgICAgKiBAcGFyYW0ga2V5IOWtmOWcqOOCkueiuuiqjeOBmeOCi2tleVxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5byV5pWw44Gn5rih44GX44Gfa2V544KS5oyB44Gk6KaB57Sg44GM5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5byV5pWw44Gn5rih44GX44Gfa2V544KS5oyB44Gk6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFeGlzdChrZXk6IF9LZXlUKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBrZXlWYWx1ZeOBruODneOCpOODs+OCv+OCkuWFqOOBpuino+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNsZWFyKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gdm9pZCAwO1xuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgrXjgqTjgrrjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiDjgrPjg7Pjg4bjg4rjga7jgrXjgqTjgrpcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgpLnorrkv53jgZnjgotcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5paw44Gf44Gq44Kt44Oj44OR44K344OG44Kj44CC5byV5pWw44Gu5YCk44GM54++5Zyo44Gu44K144Kk44K65pyq5rqA44Gu5aC05ZCI44Gv5L2V44KC44GX44Gq44GE44CCXG4gICAgICAgICAqIEBwYXJhbSBmaXRUb1NpemUgdHJ1ZeOBquOCieaMh+WumuOBl+OBn+OCteOCpOOCuuOBq+WQiOOCj+OBm+OCi+OAgmZhbHNl44Gq44KJ44K144Kk44K644KSMuWAjeeiuuS/neOBl+OBpuOBiuOBj+OAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZXBhcmVDYXBhY2l0eShuZXdTaXplOiBudW1iZXIsIGZpdFRvU2l6ZTogYm9vbGVhbik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYobmV3U2l6ZSA+IHRoaXMuX2tleVZhbHVlcy5sZW5ndGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZpdFRvU2l6ZSAmJiBuZXdTaXplIDwgY3NtTWFwLkRlZmF1bHRTaXplKSBuZXdTaXplID0gY3NtTWFwLkRlZmF1bHRTaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZpdFRvU2l6ZSAmJiBuZXdTaXplIDwgdGhpcy5fa2V5VmFsdWVzLmxlbmd0aCAqIDIpIG5ld1NpemUgPSB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoICogMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzLmxlbmd0aCA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFiOmgreimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGJlZ2luKCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPiA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMsIDApO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7ntYLnq6/opoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlbmQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+ID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcywgdGhpcy5fc2l6ZSk7IC8vIOe1guS6hlxuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonopoHntKDjgpLliYrpmaTjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGl0ZSDliYrpmaTjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9zaXplIDw9IGluZGV4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGU7IC8vIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDliYrpmaRcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xuXG4gICAgICAgICAgICBsZXQgaXRlMjogaXRlcmF0b3I8X0tleVQsIF9WYWxUPiA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMsIGluZGV4KTsgLy8g57WC5LqGXG4gICAgICAgICAgICByZXR1cm4gaXRlMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lgKTjgpIzMuODk+ODg+ODiOespuWPt+S7mOOBjeaVtOaVsOWei+OBp+ODgOODs+ODl+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGR1bXBBc0ludCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nRGVidWcoXCJ7MH0gLFwiLCB0aGlzLl9rZXlWYWx1ZXNbaV0pO1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0RlYnVnKFwiXFxuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZWZhdWx0U2l6ZSA9IDEwOyAvLyDjgrPjg7Pjg4bjg4rjga7liJ3mnJ/ljJbjga7jg4fjg5Xjgqnjg6vjg4jjgrXjgqTjgrpcbiAgICAgICAgcHVibGljIF9rZXlWYWx1ZXM6IGNzbVBhaXI8X0tleVQsIF9WYWxUPltdOy8vIGtleS12YWx1ZeODmuOCouOBrumFjeWIl1xuICAgICAgICBwdWJsaWMgX2R1bW15VmFsdWU6IF9WYWxUOyAgLy8g56m644Gu5YCk44KS6L+U44GZ54K644Gu44OA44Of44O8XG4gICAgICAgIHB1YmxpYyBfc2l6ZTogbnVtYmVyOyAgICAgICAvLyDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGNzbU1hcDxUPuOBruOCpOODhuODrOODvOOCv1xuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcih2PzogY3NtTWFwPF9LZXlULCBfVmFsVD4sIGlkeD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbWFwID0gKHYgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gdlxuICAgICAgICAgICAgICAgIDogbmV3IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+KCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gKGlkeCAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyBpZHhcbiAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldChpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IGl0ZS5fbWFwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVJbmNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICArK3RoaXMuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVEZWNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICAtLXRoaXMuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b6M572u44GNKyvmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbmNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcy5fbWFwLCB0aGlzLl9pbmRleCsrKTsgIC8vIOWPpOOBhOWApOOCkuS/neWtmFxuICAgICAgICAgICAgdGhpcy5fbWFwID0gaXRlb2xkLl9tYXA7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvoznva7jgY0tLea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGRlY3JlbWVudCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLl9tYXAsIHRoaXMuX2luZGV4KTsgLy8g5Y+k44GE5YCk44KS5L+d5a2YXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBpdGVvbGQuX21hcDtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICrmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdHIoKTogY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXAuX2tleVZhbHVlc1t0aGlzLl9pbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIT3mvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBub3RFcXVhbChpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5faW5kZXggIT0gaXRlLl9pbmRleCkgfHwgKHRoaXMuX21hcCAhPSBpdGUuX21hcCk7XG4gICAgICAgIH1cblxuICAgICAgICBfaW5kZXg6IG51bWJlcjsgICAgICAgICAgICAgLy8g44Kz44Oz44OG44OK44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgIF9tYXA6IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+OyAvLyDjgrPjg7Pjg4bjg4pcbiAgICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIOaWh+Wtl+WIl+OCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBjc21TdHJpbmdcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfjgpLlvozmlrnjgavov73liqDjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGMg6L+95Yqg44GZ44KL5paH5a2X5YiXXG4gICAgICAgICAqIEByZXR1cm4g5pu05paw44GV44KM44Gf5paH5a2X5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYXBwZW5kKGM6IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyKTogY3NtU3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucyArPSAobGVuZ3RoICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyBjLnN1YnN0cigwLCBsZW5ndGgpXG4gICAgICAgICAgICAgICAgOiBjO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfjgrXjgqTjgrrjgpLmi6HlvLXjgZfjgabmloflrZfjgpLln4vjgoHjgotcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDmi6HlvLXjgZnjgovmloflrZfmlbBcbiAgICAgICAgICogQHBhcmFtIHYgICAgICAgICDln4vjgoHjgovmloflrZdcbiAgICAgICAgICogQHJldHVybiDmm7TmlrDjgZXjgozjgZ/mloflrZfliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBleHBhbnNpb24obGVuZ3RoOiBudW1iZXIsIHY6IHN0cmluZyk6IGNzbVN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBjc21TdHJpbmcgPSB0aGlzO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0LmFwcGVuZCh2KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfjga7plbfjgZXjgpLjg5DjgqTjg4jmlbDjgaflj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRCeXRlcygpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnMpIC5yZXBsYWNlKC8lLi4vZywgXCJ4XCIpLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfjga7plbfjgZXjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRMZW5ndGgoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8g+OAgDxcbiAgICAgICAgICogQHBhcmFtIHMg5q+U6LyD44GZ44KL5paH5a2X5YiXXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTogICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5bCP44GV44GEXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6ICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5aSn44GN44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNMZXNzKHM6IGNzbVN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA8IHMucztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfmr5TovIMgPlxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlpKfjgY3jgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlsI/jgZXjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0dyZWF0KHM6IGNzbVN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA+IHMucztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfmr5TovIMgPT1cbiAgICAgICAgICogQHBhcmFtIHMg5q+U6LyD44GZ44KL5paH5a2X5YiXXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTogICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44Go562J44GX44GEXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6ICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44Go55Ww44Gq44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFcXVhbChzOiBzdHJpbmcpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMgPT0gcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfjgYznqbrjgYvjganjgYbjgYtcbiAgICAgICAgICogQHJldHVybiB0cnVlOiDnqbrjga7mloflrZfliJdcbiAgICAgICAgICogQHJldHVybiBmYWxzZTog5YCk44GM6Kit5a6a44GV44KM44Gm44GE44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFbXB0eSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMubGVuZ3RoID09IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Ioczogc3RyaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnMgPSBzO1xuICAgICAgICB9XG5cbiAgICAgICAgczogc3RyaW5nO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44OZ44Kv44K/44O85Z6L77yI5Y+v5aSJ6YWN5YiX5Z6L77yJXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbVZlY3RvcjxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0gaW5paXRhbENhcGFjaXR5IOWIneacn+WMluW+jOOBruOCreODo+ODkeOCt+ODhuOCo+OAguODh+ODvOOCv+OCteOCpOOCuuOBr19jYXBhY2l0eSAqIHNpemVvZihUKVxuICAgICAgICAgKiBAcGFyYW0gemVyb0NsZWFyIHRydWXjgarjgonliJ3mnJ/ljJbmmYLjgavnorrkv53jgZfjgZ/poJjln5/jgpIw44Gn5Z+L44KB44KLXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0aWFsQ2FwYWNpdHk6IG51bWJlciA9IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGluaXRpYWxDYXBhY2l0eSA8IDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheShpbml0aWFsQ2FwYWNpdHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gaW5pdGlhbENhcGFjaXR5O1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGF0KGluZGV4OiBudW1iZXIpOiBUXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdHJbaW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuOCu+ODg+ODiFxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6KaB57Sg44KS44K744OD44OI44GZ44KL44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDjgrvjg4Pjg4jjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoaW5kZXg6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3B0cltpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXQob2Zmc2V0OiBudW1iZXIgPSAwKTogVFtdXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IFRbXSA9IG5ldyBBcnJheTxUPigpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKHRoaXMuX3B0cltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHB1c2hCYWNr5Yem55CG44CB44Kz44Oz44OG44OK44Gr5paw44Gf44Gq6KaB57Sg44KS6L+95Yqg44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSBQdXNoQmFja+WHpueQhuOBp+i/veWKoOOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHB1c2hCYWNrKHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9zaXplID49IHRoaXMuX2NhcGFjaXR5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX2NhcGFjaXR5ID09IDAgPyBjc21WZWN0b3Iuc19kZWZhdWx0U2l6ZSA6IHRoaXMuX2NhcGFjaXR5ICogMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3B0clt0aGlzLl9zaXplKytdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWo6KaB57Sg44KS6Kej5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9wdHIubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruimgee0oOaVsOOCkui/lOOBmVxuICAgICAgICAgKiBAcmV0dXJuIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFqOimgee0oOOBq+WvvuOBl+OBpuS7o+WFpeWHpueQhuOCkuihjOOBhlxuICAgICAgICAgKiBAcGFyYW0gbmV3U2l6ZSDku6PlhaXlh6bnkIblvozjga7jgrXjgqTjgrpcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOimgee0oOOBq+S7o+WFpeOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFzc2lnbihuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY3VyU2l6ZSA9IHRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KG5ld1NpemUpOyAgLy8gY2FwYWNpdHnmm7TmlrBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbmV3U2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrXjgqTjgrrlpInmm7RcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZXNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogVCA9IG51bGwpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZShuZXdTaXplLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K144Kk44K65aSJ5pu0XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdXBkYXRlU2l6ZShuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBhbnkgPSBudWxsLCBjYWxsUGxhY2VtZW50TmV3OiBib29sZWFuID0gdHJ1ZSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGN1clNpemU6IG51bWJlciA9IHRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KG5ld1NpemUpOyAgLy8gY2FwYWNpdHnmm7TmlrBcblxuICAgICAgICAgICAgICAgIGlmKGNhbGxQbGFjZW1lbnROZXcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAgLy8gbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuZXcgdmFsdWUoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSAvLyDjg5fjg6rjg5/jg4bjgqPjg5blnovjgarjga7jgaflgKTmuKHjgZdcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIG5ld1NpemUgPD0gdGhpcy5fc2l6ZVxuICAgICAgICAgICAgICAgIC8vLS0tXG4gICAgICAgICAgICAgICAgbGV0IHN1YiA9IHRoaXMuX3NpemUgLSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UodGhpcy5fc2l6ZSAtIHN1Yiwgc3ViKTsgICAgLy8g5LiN6KaB44Gq44Gu44Gn56C05qOE44GZ44KLXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgavjgrPjg7Pjg4bjg4ropoHntKDjgpLmjL/lhaXjgZnjgotcbiAgICAgICAgICogQHBhcmFtIHBvc2l0aW9uIOaMv+WFpeOBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gYmVnaW7jgIDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7plovlp4vkvY3nva5cbiAgICAgICAgICogQHBhcmFtIGVuZCDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7ntYLnq6/kvY3nva5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnNlcnQocG9zaXRpb246IGl0ZXJhdG9yPFQ+LCBiZWdpbjogaXRlcmF0b3I8VD4sIGVuZDogaXRlcmF0b3I8VD4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBkc3RTaTogbnVtYmVyID0gcG9zaXRpb24uX2luZGV4O1xuICAgICAgICAgICAgbGV0IHNyY1NpOiBudW1iZXIgPSBiZWdpbi5faW5kZXg7XG4gICAgICAgICAgICBsZXQgc3JjRWk6IG51bWJlciA9IGVuZC5faW5kZXg7XG5cbiAgICAgICAgICAgIGxldCBhZGRDb3VudDogbnVtYmVyID0gc3JjRWkgLSBzcmNTaTtcblxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkodGhpcy5fc2l6ZSArIGFkZENvdW50KTtcblxuICAgICAgICAgICAgLy8g5oy/5YWl55So44Gu5pei5a2Y44OH44O844K/44KS44K344OV44OI44GX44Gm6ZqZ6ZaT44KS5L2c44KLXG4gICAgICAgICAgICBsZXQgYWRkU2l6ZSA9IHRoaXMuX3NpemUgLSBkc3RTaTtcbiAgICAgICAgICAgIGlmKGFkZFNpemUgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGFkZFNpemU7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoZHN0U2kgKyBpLCAwLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gc3JjU2k7IGkgPCBzcmNFaTsgaSsrLCBkc3RTaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltkc3RTaV0gPSBiZWdpbi5fdmVjdG9yLl9wdHJbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB0aGlzLl9zaXplICsgYWRkQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ44Kk44Oz44OH44OD44Kv44K544Gn5oyH5a6a44GX44Gf6KaB57Sg44KS5YmK6Zmk44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWJiumZpOWun+ihjFxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbW92ZShpbmRleDogbnVtYmVyKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgLy8g5YmK6Zmk56+E5Zuy5aSWXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonopoHntKDjgpLliYrpmaTjgZfjgabku5bjga7opoHntKDjgpLjgrfjg5Xjg4jjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGl0ZSDliYrpmaTjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZTsgLy8g5YmK6Zmk56+E5Zuy5aSWXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWJiumZpFxuICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAtLXRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGxldCBpdGUyOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCBpbmRleCk7ICAgLy8g57WC5LqGXG4gICAgICAgICAgICByZXR1cm4gaXRlMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgpLnorrkv53jgZnjgotcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5paw44Gf44Gq44Kt44Oj44OR44K344OG44Kj44CC5byV5pWw44Gu5YCk44GM54++5Zyo44Gu44K144Kk44K65pyq5rqA44Gu5aC05ZCI44Gv5L2V44KC44GX44Gq44GELlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZXBhcmVDYXBhY2l0eShuZXdTaXplOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKG5ld1NpemUgPiB0aGlzLl9jYXBhY2l0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jYXBhY2l0eSA9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KG5ld1NpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5sZW5ndGggPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFiOmgreimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGJlZ2luKCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gKHRoaXMuX3NpemUgPT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmVuZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IGl0ZXJhdG9yPFQ+KHRoaXMsIDApO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7ntYLnq6/opoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlbmQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8VD4gPSBuZXcgaXRlcmF0b3I8VD4odGhpcywgdGhpcy5fc2l6ZSk7XG4gICAgICAgICAgICByZXR1cm4gaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGdldE9mZnNldChvZmZzZXQ6IG51bWJlcik6IGNzbVZlY3RvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbmV3VmVjdG9yID0gbmV3IGNzbVZlY3RvcjxUPigpO1xuICAgICAgICAgICAgbmV3VmVjdG9yLl9wdHIgPSB0aGlzLmdldChvZmZzZXQpO1xuICAgICAgICAgICAgbmV3VmVjdG9yLl9zaXplID0gdGhpcy5nZXQob2Zmc2V0KS5sZW5ndGg7XG4gICAgICAgICAgICBuZXdWZWN0b3IuX2NhcGFjaXR5ID0gdGhpcy5nZXQob2Zmc2V0KS5sZW5ndGg7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdWZWN0b3I7XG4gICAgICAgIH1cblxuICAgICAgICBfcHRyOiBUW107ICAgIC8vIOOCs+ODs+ODhuODiuOBruWFiOmgreOCouODieODrOOCuVxuICAgICAgICBfc2l6ZTogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcbiAgICAgICAgX2NhcGFjaXR5OiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruOCreODo+ODkeOCt+ODhuOCo1xuXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBzX2RlZmF1bHRTaXplID0gMTA7IC8vIOOCs+ODs+ODhuODiuWIneacn+WMluOBruODh+ODleOCqeODq+ODiOOCteOCpOOCulxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBpdGVyYXRvcjxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHY/OiBjc21WZWN0b3I8VD4sIGluZGV4PzogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSAodiAhPSB1bmRlZmluZWQpID8gdiA6IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IChpbmRleCAhPSB1bmRlZmluZWQpID8gaW5kZXggOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS7o+WFpVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldChpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlLl92ZWN0b3I7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliY3nva7jgY0rK+a8lOeul1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZUluY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICArK3RoaXMuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVEZWNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgLS10aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW+jOe9ruOBjSsr5ryU566X5a2QXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5jcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8VD4odGhpcy5fdmVjdG9yLCB0aGlzLl9pbmRleCsrKTtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZW9sZC5fdmVjdG9yO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b6M572u44GNLS3mvJTnrpflrZBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkZWNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLl92ZWN0b3IsIHRoaXMuX2luZGV4LS0pOyAgLy8g5Y+k44GE5YCk44KS5L+d5a2YXG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGVvbGQuX3ZlY3RvcjtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHB0clxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHB0cigpOiBUXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92ZWN0b3IuX3B0clt0aGlzLl9pbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN1YnN0aXR1dGlvbihpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlLl92ZWN0b3I7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG5vdEVxdWFsKGl0ZTogaXRlcmF0b3I8VD4pOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5faW5kZXggIT0gaXRlLl9pbmRleCkgfHwgKHRoaXMuX3ZlY3RvciAhPSBpdGUuX3ZlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBfaW5kZXg6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgIF92ZWN0b3I6IGNzbVZlY3RvcjxUPjsgIC8vIOOCs+ODs+ODhuODilxuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWZyYW1ld29yaywgTG9nTGV2ZWx9IGZyb20gXCIuLi9saXZlMmRjdWJpc21mcmFtZXdvcmtcIjtcbmltcG9ydCB7Q1NNX0xPR19MRVZFTCwgQ1NNX0xPR19MRVZFTF9WRVJCT1NFLCBDU01fTE9HX0xFVkVMX0RFQlVHLCBDU01fTE9HX0xFVkVMX0lORk8sIENTTV9MT0dfTEVWRUxfV0FSTklORywgQ1NNX0xPR19MRVZFTF9FUlJPUn0gZnJvbSBcIi4uL2N1YmlzbWZyYW1ld29ya2NvbmZpZ1wiO1xuXG5cbmV4cG9ydCBjb25zdCBDdWJpc21Mb2dQcmludCA9IChsZXZlbDogTG9nTGV2ZWwsIGZtdDogc3RyaW5nLCBhcmdzOiBhbnlbXSkgPT5cbntcbiAgICBMaXZlMkRDdWJpc21GcmFtZXdvcmsuQ3ViaXNtRGVidWcucHJpbnQobGV2ZWwsIFwiW0NTTV1cIiArIGZtdCwgYXJncyk7XG59XG5cbmV4cG9ydCBjb25zdCBDdWJpc21Mb2dQcmludEluID0gKGxldmVsOiBMb2dMZXZlbCwgZm10OiBzdHJpbmcsIGFyZ3M6IGFueVtdKSA9Plxue1xuICAgIEN1YmlzbUxvZ1ByaW50KGxldmVsLCBmbXQgKyBcIlxcblwiLCBhcmdzKTtcbn1cblxuZXhwb3J0IGxldCBDU01fQVNTRVJUID0gKGV4cHI6IGFueSkgPT5cbntcbiAgICBjb25zb2xlLmFzc2VydChleHByKTtcbn07XG5cblxuZXhwb3J0IGxldCBDdWJpc21Mb2dWZXJib3NlID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dEZWJ1ZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XG5cbmlmKENTTV9MT0dfTEVWRUwgPD0gQ1NNX0xPR19MRVZFTF9WRVJCT1NFKVxue1xuICAgIEN1YmlzbUxvZ1ZlcmJvc2UgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfVmVyYm9zZSwgXCJbVl1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0RlYnVnLCBcIltEXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9JbmZvLCBcIltJXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG59XG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9ERUJVRylcbntcbiAgICBDdWJpc21Mb2dEZWJ1ZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9EZWJ1ZywgXCJbRF1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfSW5mbywgXCJbSV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xufVxuZWxzZSBpZihDU01fTE9HX0xFVkVMID09IENTTV9MT0dfTEVWRUxfSU5GTylcbntcbiAgICBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0luZm8sIFwiW0ldXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX1dBUk5JTkcpXG57XG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG59XG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9FUlJPUilcbntcbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cblxuLy8tLS0tLS0tLS0tLS0gTElWRTJEIE5BTUVTUEFDRSAtLS0tLS0tLS0tLS1cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG5cbiAgICAvKipcbiAgICAgKiDjg4fjg5Djg4PjgrDnlKjjga7jg6bjg7zjg4bjgqPjg6rjg4bjgqPjgq/jg6njgrnjgIJcbiAgICAgKiDjg63jgrDjga7lh7rlipvjgIHjg5DjgqTjg4jjga7jg4Djg7Pjg5fjgarjgalcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtRGVidWdcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg63jgrDjgpLlh7rlipvjgZnjgovjgILnrKzkuIDlvJXmlbDjgavjg63jgrDjg6zjg5njg6vjgpLoqK3lrprjgZnjgovjgIJcbiAgICAgICAgICogQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKeaZguOBq+OCquODl+OCt+ODp+ODs+OBp+ioreWumuOBleOCjOOBn+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuS4i+WbnuOCi+WgtOWQiOOBr+ODreOCsOOBq+WHuuOBleOBquOBhOOAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbG9nTGV2ZWwg44Ot44Kw44Os44OZ44Or44Gu6Kit5a6aXG4gICAgICAgICAqIEBwYXJhbSBmb3JtYXQg5pu45byP5LuY44GN5paH5a2X5YiXXG4gICAgICAgICAqIEBwYXJhbSBhcmdzIOWPr+WkiemVt+W8leaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBwcmludChsb2dMZXZlbDogTG9nTGV2ZWwsIGZvcm1hdDogc3RyaW5nLCBhcmdzPzogYW55W10pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIOOCquODl+OCt+ODp+ODs+OBp+ioreWumuOBleOCjOOBn+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuS4i+WbnuOCi+WgtOWQiOOBr+ODreOCsOOBq+WHuuOBleOBquOBhFxuICAgICAgICAgICAgaWYobG9nTGV2ZWwgPCBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmdldExvZ2dpbmdMZXZlbCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbG9nUHJpbnQ6IExpdmUyREN1YmlzbUNvcmUuY3NtTG9nRnVuY3Rpb24gPSBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmNvcmVMb2dGdW5jdGlvbjtcblxuICAgICAgICAgICAgaWYgKCFsb2dQcmludClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBidWZmZXI6IHN0cmluZyA9XG4gICAgICAgICAgICAgICAgZm9ybWF0LnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgIC9cXHsoXFxkKylcXH0vZyxcbiAgICAgICAgICAgICAgICAgICAgKG0sIGspID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmdzW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxvZ1ByaW50KGJ1ZmZlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44O844K/44GL44KJ5oyH5a6a44GX44Gf6ZW344GV44Gg44GR44OA44Oz44OX5Ye65Yqb44GZ44KL44CCXG4gICAgICAgICAqIEN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCnmmYLjgavjgqrjg5fjgrfjg6fjg7PjgafoqK3lrprjgZXjgozjgZ/jg63jgrDlh7rlipvjg6zjg5njg6vjgpLkuIvlm57jgovloLTlkIjjga/jg63jgrDjgavlh7rjgZXjgarjgYTjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGxvZ0xldmVsIOODreOCsOODrOODmeODq+OBruioreWumlxuICAgICAgICAgKiBAcGFyYW0gZGF0YSDjg4Djg7Pjg5fjgZnjgovjg4fjg7zjgr9cbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCDjg4Djg7Pjg5fjgZnjgovplbfjgZVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZHVtcEJ5dGVzKGxvZ0xldmVsOiBMb2dMZXZlbCwgZGF0YTogVWludDhBcnJheSwgbGVuZ3RoOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoaSAlIDE2ID09IDAgJiYgaSA+IDApIHRoaXMucHJpbnQobG9nTGV2ZWwsIFwiXFxuXCIpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgJSA4ID09IDAgJiYgaSA+IDApIHRoaXMucHJpbnQobG9nTGV2ZWwsIFwiICBcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmludChsb2dMZXZlbCwgXCJ7MH0gXCIsIFsoZGF0YVtpXSAmIDB4RkYpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJpbnQobG9nTGV2ZWwsIFwiXFxuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHByaXZhdGUg44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vLS0tLS0tLS0tLS0tIExJVkUyRCBOQU1FU1BBQ0UgLS0tLS0tLS0tLS0tXG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gXCIuLi90eXBlL2NzbXN0cmluZ1wiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtbWFwfSBmcm9tIFwiLi4vdHlwZS9jc21tYXBcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSBcIi4uL3R5cGUvY3NtdmVjdG9yXCI7XG5pbXBvcnQge0N1YmlzbUxvZ0luZm99IGZyb20gXCIuL2N1YmlzbWRlYnVnXCI7XG5pbXBvcnQge3N0cnRvZH0gZnJvbSBcIi4uL2xpdmUyZGN1YmlzbWZyYW1ld29ya1wiO1xuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XG5pbXBvcnQgY3NtVmVjdG9yX2l0ZXJhdG9yID0gY3NtdmVjdG9yLml0ZXJhdG9yO1xuaW1wb3J0IGNzbU1hcCA9IGNzbW1hcC5jc21NYXA7XG5pbXBvcnQgY3NtTWFwX2l0ZXJhdG9yID0gY3NtbWFwLml0ZXJhdG9yO1xuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLy8gU3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKeOBp+WIneacn+WMluOBmeOCi1xuICAgIGNvbnN0IENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0g6IHN0cmluZyA9IFwiRXJyb3I6IHR5cGUgbWlzbWF0Y2hcIjtcbiAgICBjb25zdCBDU01fSlNPTl9FUlJPUl9JTkRFWF9PRl9CT1VORFM6IHN0cmluZyA9IFwiRXJyb3I6IGluZGV4IG91dCBvZiBib3VuZHNcIjtcblxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOCqOODrOODoeODs+ODiOOBruimgee0oOOBruWfuuW6leOCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX5Z6L44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBpbmRlbnQ/OiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+Wei+OBp+i/lOOBmShzdHJpbmcpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UmF3U3RyaW5nKGRlZmF1bHRWYWx1ZT86IHN0cmluZywgaW5kZW50Pzogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0cmluZyhkZWZhdWx0VmFsdWUsIGluZGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0ludChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRvRmxvYXQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS55yf5YG95YCk44Gn6L+U44GZKGJvb2xlYW4pXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9Cb29sZWFuKGRlZmF1bHRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCteOCpOOCuuOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkumFjeWIl+OBp+i/lOOBmShWYWx1ZVtdKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEFycmF5KGRlZmF1bHRWYWx1ZTogVmFsdWVbXSA9IG51bGwpOiBWYWx1ZVtdXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS44Kz44Oz44OG44OK44Gn6L+U44GZKGFycmF5KVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZlY3RvcihkZWZhdWx0VmFsdWU/OiBjc21WZWN0b3I8VmFsdWU+KTogY3NtVmVjdG9yPFZhbHVlPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuODnuODg+ODl+OBp+i/lOOBmShjc21NYXA8Y3NtU3RyaW5nLCBWYWx1ZT4pXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TWFwKGRlZmF1bHRWYWx1ZT86IGNzbU1hcDxzdHJpbmcsIFZhbHVlPik6IGNzbU1hcDxzdHJpbmcsIFZhbHVlPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtpbmRleF1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbc3RyaW5nIHwgY3NtU3RyaW5nXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlTdHJpbmcoczogc3RyaW5nIHwgY3NtU3RyaW5nKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oe44OD44OX44Gu44Kt44O85LiA6Kan44KS44Kz44Oz44OG44OK44Gn6L+U44GZXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4g44Oe44OD44OX44Gu44Kt44O844Gu5LiA6KanXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0S2V5cygpOiBjc21WZWN0b3I8c3RyaW5nPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWUuc19kdW1teUtleXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjgqjjg6njg7zlgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFcnJvcigpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjG51bGzjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM55yf5YG95YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQm9vbCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaVsOWApOWei+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Zsb2F0KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM6YWN5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQXJyYXkoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjg57jg4Pjg5flnovjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNNYXAoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVl44CB6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjgavjgqjjg6njg7zlgKTjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoZXJyb3JTdHI6IHN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBKc29uRXJyb3IuZXJyb3JWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJ3mnJ/ljJbnlKjjg6Hjgr3jg4Pjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBuZXcgSnNvbkJvb2xlYW4odHJ1ZSk7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi5mYWxzZVZhbHVlID0gbmV3IEpzb25Cb29sZWFuKGZhbHNlKTtcblxuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBuZXcgSnNvbkVycm9yKFwiRVJST1JcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm51bGxWYWx1ZSA9IG5ldyBKc29uTnVsbHZhbHVlKCk7XG5cbiAgICAgICAgICAgIFZhbHVlLnNfZHVtbXlLZXlzID0gbmV3IGNzbVZlY3RvcjxzdHJpbmc+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oq44Oq44O844K555So44Oh44K944OD44OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIHN0YXRpY1JlbGVhc2VOb3RGb3JDbGllbnRDYWxsKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgSnNvbkJvb2xlYW4udHJ1ZVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLmZhbHNlVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgVmFsdWUubnVsbFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIFZhbHVlLnNfZHVtbXlLZXlzID0gbnVsbDtcblxuICAgICAgICAgICAgSnNvbkJvb2xlYW4udHJ1ZVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLmZhbHNlVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgVmFsdWUubnVsbFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIFZhbHVlLnNfZHVtbXlLZXlzID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBfc3RyaW5nQnVmZmVyOiBzdHJpbmc7IC8vIOaWh+Wtl+WIl+ODkOODg+ODleOCoVxuXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNfZHVtbXlLZXlzOiBjc21WZWN0b3I8c3RyaW5nPjsgLy8g44OA44Of44O844Kt44O8XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBlcnJvclZhbHVlOiBWYWx1ZTsgICAvLyDkuIDmmYLnmoTjgarov5TjgorlgKTjgajjgZfjgabov5TjgZnjgqjjg6njg7zjgIIgQ3ViaXNtRnJhbWV3b3JrOjpEaXNwb3Nl44GZ44KL44G+44Gn44GvZGVsZXRl44GX44Gq44GEXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbnVsbFZhbHVlOiBWYWx1ZTsgICAgLy8g5LiA5pmC55qE44Gq6L+U44KK5YCk44Go44GX44Gm6L+U44GZTlVMTOOAgiAgIEN1YmlzbUZyYW1ld29yazo6RGlzcG9zZeOBmeOCi+OBvuOBp+OBr2RlbGV0ZeOBl+OBquOBhFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzY2lp5paH5a2X44Gu44G/5a++5b+c44GX44Gf5pyA5bCP6ZmQ44Gu6Lu96YePSlNPTuODkeODvOOCteOAglxuICAgICAqIOS7leanmOOBr0pTT07jga7jgrXjg5bjgrvjg4Pjg4jjgajjgarjgovjgIJcbiAgICAgKiDoqK3lrprjg5XjgqHjgqTjg6sobW9kZWwzLmpzb24p44Gq44Gp44Gu44Ot44O844OJ55SoXG4gICAgICpcbiAgICAgKiBb5pyq5a++5b+c6aCF55uuXVxuICAgICAqIOODu+aXpeacrOiqnuOBquOBqeOBrumdnkFTQ0lJ5paH5a2XXG4gICAgICog44O7ZeOBq+OCiOOCi+aMh+aVsOihqOePvlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21Kc29uXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoYnVmZmVyPzogQXJyYXlCdWZmZXIsIGxlbmd0aD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihidWZmZXIgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VCeXRlcyhidWZmZXIsIGxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OQ44Kk44OI44OH44O844K/44GL44KJ55u05o6l44Ot44O844OJ44GX44Gm44OR44O844K544GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIg44OQ44OD44OV44KhXG4gICAgICAgICAqIEBwYXJhbSBzaXplIOODkOODg+ODleOCoeOCteOCpOOCulxuICAgICAgICAgKiBAcmV0dXJuIEN1YmlzbUpzb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgILlpLHmlZfjgZfjgZ/jgolOVUxMXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBqc29uID0gbmV3IEN1YmlzbUpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2NlZWRlZDogYm9vbGVhbiA9IGpzb24ucGFyc2VCeXRlcyhidWZmZXIsIHNpemUpO1xuXG4gICAgICAgICAgICBpZighc3VjY2VlZGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUpzb24uZGVsZXRlKGpzb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jgqrjg5bjgrjjgqfjgq/jg4jjga7op6PmlL7lh6bnkIZcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIEN1YmlzbUpzb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKGluc3RhbmNlOiBDdWJpc21Kc29uKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844K544GX44GfSlNPTuOBruODq+ODvOODiOimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFJvb3QoKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIFVuaWNvZGXjga7jg5DjgqTjg4rjg6rjgpJTdHJpbmfjgavlpInmj5tcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciDlpInmj5vjgZnjgovjg5DjgqTjg4rjg6rjg4fjg7zjgr9cbiAgICAgICAgICogQHJldHVybiDlpInmj5vlvozjga7mloflrZfliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHVpbnQ4QXJyYXk6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICAgICAgbGV0IHN0cjogc3RyaW5nID0gXCJcIjtcblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwLCBsZW46IG51bWJlciA9IHVpbnQ4QXJyYXkubGVuZ3RoOyBpIDwgbGVuOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RyICs9IChcIiVcIiArIHRoaXMucGFkKHVpbnQ4QXJyYXlbaV0udG9TdHJpbmcoMTYpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudChzdHIpO1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqjjg7PjgrPjg7zjg4njgIHjg5Hjg4fjgqPjg7PjgrBcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgcGFkKG46IHN0cmluZyk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbi5sZW5ndGggPCAyXG4gICAgICAgICAgICAgICAgPyBcIjBcIiArIG5cbiAgICAgICAgICAgICAgICA6IG47XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEpTT07jga7jg5Hjg7zjgrnjgpLlrp/ooYzjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciAgICDjg5Hjg7zjgrnlr77osaHjga7jg4fjg7zjgr/jg5DjgqTjg4hcbiAgICAgICAgICogQHBhcmFtIHNpemUgICAgICDjg4fjg7zjgr/jg5DjgqTjg4jjga7jgrXjgqTjgrpcbiAgICAgICAgICogcmV0dXJuIHRydWUgOiDmiJDlip9cbiAgICAgICAgICogcmV0dXJuIGZhbHNlOiDlpLHmlZdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwYXJzZUJ5dGVzKGJ1ZmZlcjogQXJyYXlCdWZmZXIsIHNpemU6IG51bWJlcik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGVuZFBvczogbnVtYmVyW10gPSBuZXcgQXJyYXkoMSk7IC8vIOWPgueFp+a4oeOBl+OBq+OBmeOCi+OBn+OCgemFjeWIl1xuICAgICAgICAgICAgbGV0IGRlY29kZUJ1ZmZlcjogc3RyaW5nID0gdGhpcy5hcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5wYXJzZVZhbHVlKGRlY29kZUJ1ZmZlciwgc2l6ZSwgMCwgZW5kUG9zKTtcblxuICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHN0cmJ1Zjogc3RyaW5nID0gJ1xcMCc7XG4gICAgICAgICAgICAgICAgc3RyYnVmID0gXCJKc29uIHBhcnNlIGVycm9yIDogQGxpbmUgXCIgKyAodGhpcy5fbGluZUNvdW50ICsgMSkgKyBcIlxcblwiO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBuZXcgSnNvblN0cmluZyhzdHJidWYpO1xuXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcInswfVwiLCB0aGlzLl9yb290LmdldFJhd1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuX3Jvb3QgPT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290ID0gbmV3IEpzb25FcnJvcihuZXcgY3NtU3RyaW5nKHRoaXMuX2Vycm9yKSwgZmFsc2UpOyAvLyByb29044Gv6Kej5pS+44GV44KM44KL44Gu44Gn44Ko44Op44O844Kq44OW44K444Kn44Kv44OI44KS5Yil6YCU5L2c5oiQ44GZ44KLXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844K55pmC44Gu44Ko44Op44O85YCk44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UGFyc2VFcnJvcigpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODq+ODvOODiOimgee0oOOBruasoeOBruimgee0oOOBjOODleOCoeOCpOODq+OBrue1guerr+OBoOOBo+OBn+OCiXRydWXjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjaGVja0VuZE9mRmlsZSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yb290LmdldEFycmF5KClbMV0uZXF1YWxzKFwiRU9GXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEpTT07jgqjjg6zjg6Hjg7Pjg4jjgYvjgolWYWx1ZShmbG9hdCxTdHJpbmcsVmFsdWUqLEFycmF5LG51bGwsdHJ1ZSxmYWxzZSnjgpLjg5Hjg7zjgrnjgZnjgotcbiAgICAgICAgICog44Ko44Os44Oh44Oz44OI44Gu5pu45byP44Gr5b+c44GY44Gm5YaF6YOo44GnUGFyc2VTdHJpbmcoKSwgUGFyc2VPYmplY3QoKSwgUGFyc2VBcnJheSgp44KS5ZG844G2XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAgIGJ1ZmZlciAgICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtICAgbGVuZ3RoICAgICAg44OR44O844K544GZ44KL6ZW344GVXG4gICAgICAgICAqIEBwYXJhbSAgIGJlZ2luICAgICAgIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gICBvdXRFbmRQb3MgICDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiAgICAgIOODkeODvOOCueOBi+OCieWPluW+l+OBl+OBn1ZhbHVl44Kq44OW44K444Kn44Kv44OIXG4gICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgcGFyc2VWYWx1ZShidWZmZXI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcikgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGxldCBvOiBWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gYmVnaW47XG4gICAgICAgICAgICBsZXQgZjogbnVtYmVyO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBjOiBzdHJpbmcgPSBidWZmZXJbaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzUnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzYnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzcnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzgnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzknOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWZ0ZXJTdHJpbmc6IHN0cmluZ1tdID0gbmV3IEFycmF5KDEpOyAvLyDlj4LnhafmuKHjgZfjgavjgZnjgovjgZ/jgoFcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBzdHJ0b2QoYnVmZmVyLnNsaWNlKGkpLCBhZnRlclN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBidWZmZXIuaW5kZXhPZihhZnRlclN0cmluZ1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpzb25GbG9hdChmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ1xcXCInOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpzb25TdHJpbmcodGhpcy5wYXJzZVN0cmluZyhidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcykpOyAvLyBcXFwi44Gu5qyh44Gu5paH5a2X44GL44KJXG4gICAgICAgICAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgICAgICAgICAgIG8gPSB0aGlzLnBhcnNlQXJyYXkoYnVmZmVyLCBsZW5ndGgsIGkgKyAxLCBvdXRFbmRQb3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICBjYXNlICd7JzpcbiAgICAgICAgICAgICAgICAgICAgbyA9IHRoaXMucGFyc2VPYmplY3QoYnVmZmVyLCBsZW5ndGgsIGkgKyAxLCBvdXRFbmRQb3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICBjYXNlICduJzogLy8gbnVsbOS7peWkluOBq+OBquOBhFxuICAgICAgICAgICAgICAgICAgICBpZihpICsgMyA8IGxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IG5ldyBKc29uTnVsbHZhbHVlKCk7ICAgIC8vIOino+aUvuOBp+OBjeOCi+OCiOOBhuOBq+OBmeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2UgbnVsbFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3QnOiAvLyB0cnVl5Lul5aSW44Gr44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyAzIDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gSnNvbkJvb2xlYW4udHJ1ZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2UgdHJ1ZVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2YnOiAvLyBmYWxzZeS7peWkluOBq+OBquOBhFxuICAgICAgICAgICAgICAgICAgICBpZihpICsgNCA8IGxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IEpzb25Cb29sZWFuLmZhbHNlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICcsJyBwb3NpdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJywnOiAvLyBBcnJheSBzZXBhcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJywnIHBvc2l0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIGNhc2UgJ10nOiAvLyDkuI3mraPjgarvvZ3jgaDjgYzjgrnjgq3jg4Pjg5fjgZnjgovjgILphY3liJfjga7mnIDlvozjgavkuI3opoHjgaogLCDjgYzjgYLjgovjgajmgJ3jgo/jgozjgotcbiAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaTsgIC8vIOWQjOOBmOaWh+Wtl+OCkuWGjeWHpueQhlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ291bnQrKztcbiAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICBjYXNlICdcXHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1xccic6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogLy8g44K544Kt44OD44OXXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHZhbHVlXCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmrKHjga7jgIxcIuOAjeOBvuOBp+OBruaWh+Wtl+WIl+OCkuODkeODvOOCueOBmeOCi+OAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gICBzdHJpbmcgIC0+ICDjg5Hjg7zjgrnlr77osaHjga7mloflrZfliJdcbiAgICAgICAgICogQHBhcmFtICAgbGVuZ3RoICAtPiAg44OR44O844K544GZ44KL6ZW344GVXG4gICAgICAgICAqIEBwYXJhbSAgIGJlZ2luICAgLT4gIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gIG91dEVuZFBvcyAgIC0+ICDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiAgICAgIOODkeODvOOCueOBl+OBn+aWh0blrZfliJfopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZVN0cmluZyhzdHJpbmc6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgbGV0IGkgPSBiZWdpbjtcbiAgICAgICAgICAgIGxldCBjOiBzdHJpbmcsIGMyOiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgcmV0OiBjc21TdHJpbmcgPSBuZXcgY3NtU3RyaW5nKFwiXCIpO1xuICAgICAgICAgICAgbGV0IGJ1ZlN0YXJ0OiBudW1iZXIgPSBiZWdpbjsgLy8gc2J1ZuOBq+eZu+mMsuOBleOCjOOBpuOBhOOBquOBhOaWh+Wtl+OBrumWi+Wni+S9jee9rlxuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGMgPSBzdHJpbmdbaV07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxcIic644CALy8g57WC56uv44Gu4oCd44CB44Ko44K544Kx44O844OX5paH5a2X44Gv5Yil44Gr5Yem55CG44GV44KM44KL44Gu44Gn44GT44GT44Gr5p2l44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxOyAgLy8g4oCd44Gu5qyh44Gu5paH5a2XXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHN0cmluZy5zbGljZShidWZTdGFydCksIChpIC0gYnVmU3RhcnQpKTsgLy8g5YmN44Gu5paH5a2X44G+44Gn44KS55m76Yyy44GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0LnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICcvLyc6ICAvLyDjgqjjgrnjgrHjg7zjg5fjga7loLTlkIhcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrOyAvLyDvvJLmloflrZfjgpLjgrvjg4Pjg4jjgafmibHjgYZcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSAtIDEgPiBidWZTdGFydClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHN0cmluZy5zbGljZShidWZTdGFydCksIChpIC0gYnVmU3RhcnQpKTsgLy8g5YmN44Gu5paH5a2X44G+44Gn44KS55m76Yyy44GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZTdGFydCA9IGkgKyAxOyAvLyDjgqjjgrnjgrHjg7zjg5fvvIjvvJLmloflrZcp44Gu5qyh44Gu5paH5a2X44GL44KJXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyID0gc3RyaW5nW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdcXFxcJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxcXCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdcXFwiJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxcIicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnLycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXGYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBzdHJpbmcvdW5pY29yZCBlc2NhcGUgbm90IHN1cHBvcnRlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHN0cmluZy9lc2NhcGUgZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2Ugc3RyaW5nL2lsbGVnYWwgZW5kXCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBKU09O44Gu44Kq44OW44K444Kn44Kv44OI44Ko44Os44Oh44Oz44OI44KS44OR44O844K544GX44GmVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TjgZlcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciAgICBKU09O44Ko44Os44Oh44Oz44OI44Gu44OQ44OD44OV44KhXG4gICAgICAgICAqIEBwYXJhbSBsZW5ndGggICAg44OR44O844K544GZ44KL6ZW344GVXG4gICAgICAgICAqIEBwYXJhbSBiZWdpbiAgICAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXG4gICAgICAgICAqIEBwYXJhbSBvdXRFbmRQb3Mg44OR44O844K557WC5LqG5pmC44Gu5L2N572uXG4gICAgICAgICAqIEByZXR1cm4g44OR44O844K544GL44KJ5Y+W5b6X44GX44GfVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZU9iamVjdChidWZmZXI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9lcnJvcikgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBsZXQgcmV0OiBKc29uTWFwID0gbmV3IEpzb25NYXAoKTtcblxuICAgICAgICAgICAgLy8gS2V5OiBWYWx1ZVxuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSBiZWdpbjtcbiAgICAgICAgICAgIGxldCBjOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IGxvY2FsUmV0RW5kUG9zMjogbnVtYmVyW10gPSBBcnJheSgxKTtcbiAgICAgICAgICAgIGxldCBvazogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyAsIOOBjOe2muOBj+mZkOOCiuODq+ODvOODl1xuICAgICAgICAgICAgZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEZPUl9MT09QOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjID0gYnVmZmVyW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcXCInOlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5wYXJzZVN0cmluZyhidWZmZXIsIGxlbmd0aCwgaSArIDEsIGxvY2FsUmV0RW5kUG9zMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9lcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGxvY2FsUmV0RW5kUG9zMlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QOyAvLy0tIGxvb3DjgYvjgonlh7rjgotcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6IC8vIOmWieOBmOOCq+ODg+OCs1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDnqbpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnOic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnOicgcG9zaXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl+OBmeOCi+aWh+Wtl1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCFvaylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJrZXkgbm90IGZvdW5kXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9rID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyA6IOOCkuODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgIEZPUl9MT09QMjogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnfScgcG9zaXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOiB0aGlzLl9saW5lQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJyAnOiBjYXNlICdcXHQnIDogY2FzZSAnXFxyJzpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgLy8g44K544Kt44OD44OX44GZ44KL5paH5a2XXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZighb2spXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiJzonIG5vdCBmb3VuZFwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDlgKTjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IFZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgbGVuZ3RoLCBpLCBsb2NhbFJldEVuZFBvczIpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaSA9IGxvY2FsUmV0RW5kUG9zMlswXTtcblxuICAgICAgICAgICAgICAgIC8vIHJldC5wdXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0LnB1dChrZXksIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIEZPUl9MT09QMzogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7IC8vIOato+W4uOe1guS6hlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCBlbmQgb2YgcGVyc2VPYmplY3RcIjtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOasoeOBruOAjFwi44CN44G+44Gn44Gu5paH5a2X5YiX44KS44OR44O844K544GZ44KL44CCXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIgICAgSlNPTuOCqOODrOODoeODs+ODiOOBruODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoICAgIOODkeODvOOCueOBmeOCi+mVt+OBlVxuICAgICAgICAgKiBAcGFyYW0gYmVnaW4gICAgIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gb3V0RW5kUG9zIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxuICAgICAgICAgKiBAcmV0dXJuIOODkeODvOOCueOBi+OCieWPluW+l+OBl+OBn1ZhbHVl44Kq44OW44K444Kn44Kv44OIXG4gICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgcGFyc2VBcnJheShidWZmZXI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9lcnJvcikgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgbGV0IHJldDpKc29uQXJyYXkgPSBuZXcgSnNvbkFycmF5KCk7XG5cbiAgICAgICAgICAgIC8vIGtleSA6IHZhbHVlXG4gICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gYmVnaW47XG4gICAgICAgICAgICBsZXQgYzogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IGxvY2FsUmV0RW5kcG9zMjogbnVtYmVyW10gPSBuZXcgQXJyYXkoMSk7XG5cbiAgICAgICAgICAgIC8vICwg44GM57aa44GP6ZmQ44KK44Or44O844OXXG4gICAgICAgICAgICBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gOiDjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IFZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgbGVuZ3RoLCBpLCBsb2NhbFJldEVuZHBvczIpO1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSA9IGxvY2FsUmV0RW5kcG9zMlswXTtcblxuICAgICAgICAgICAgICAgIGlmKHZhbHVlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0LmFkZCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRk9SX0xPT1AzOlxuICAgICAgICAgICAgICAgIC8vIGJvb2xlYW4gYnJlYWtmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgRk9SX0xPT1A6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJywnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFrZmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWs7IC8vIOasoeOBrktFWSwgVkFsVUXjgbhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ10nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7IC8vIOe1guS6hlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxuJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3RoaXMuX2xpbmVDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Nhc2UgJyAnOiBjYXNlICdcXHQnOiBjYXNlICdcXHInOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8g44K544Kt44OD44OXXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldCA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsIGVuZCBvZiBwYXJzZU9iamVjdFwiO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBfZXJyb3I6IHN0cmluZzsgICAgIC8vIOODkeODvOOCueaZguOBruOCqOODqeODvFxuICAgICAgICBfbGluZUNvdW50OiBudW1iZXI7IC8vIOOCqOODqeODvOWgseWRiuOBq+eUqOOBhOOCi+ihjOaVsOOCq+OCpuODs+ODiFxuICAgICAgICBfcm9vdDogVmFsdWU7ICAgICAgIC8vIOODkeODvOOCueOBleOCjOOBn+ODq+ODvOODiOimgee0oFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpJmbG9hdOWApOOBqOOBl+OBpuaJseOBhlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uRmxvYXQgZXh0ZW5kcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IodjogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzmlbDlgKTlnovjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNGbG9hdCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgc3RyYnVmOiBzdHJpbmcgPSAnXFwwJztcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gcGFyc2VGbG9hdChzdHJidWYpO1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gc3RyYnVmO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9JbnQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLl92YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRvRmxvYXQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwLjApOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCdudW1iZXInID09PSB0eXBlb2YodmFsdWUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGludFxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKHZhbHVlKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmxvYXRcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gdGhpcy5fdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjsgLy8gSlNPTuimgee0oOOBruWApFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpLnnJ/lgb3lgKTjgajjgZfjgabmibHjgYZcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgSnNvbkJvb2xlYW4gZXh0ZW5kcyBWYWx1ZVxuICAgIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYznnJ/lgb3lgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNCb29sKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS55yf5YG95YCk44Gn6L+U44GZKGJvb2xlYW4pXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9Cb29sZWFuKGRlZmF1bHRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYm9vbFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSB0aGlzLl9ib29sVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgPyBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiZmFsc2VcIjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDjga7lgKTjgajnrYnjgZfjgZHjgozjgbB0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBjc21TdHJpbmcpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBudW1iZXIpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBib29sZWFuKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYW55KTpib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgnYm9vbGVhbicgPT09IHR5cGVvZih2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09IHRoaXMuX2Jvb2xWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWUsIOmdmeeahOOBquOCieino+aUvuOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RhdGljKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IodjogYm9vbGVhbilcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5fYm9vbFZhbHVlID0gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyB0cnVlVmFsdWU6IEpzb25Cb29sZWFuOyAgLy8gdHJ1ZVxuICAgICAgICBzdGF0aWMgZmFsc2VWYWx1ZTogSnNvbkJvb2xlYW47IC8vIGZhbHNlXG5cbiAgICAgICAgcHJpdmF0ZSBfYm9vbFZhbHVlOiBib29sZWFuOyAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuaWh+Wtl+WIl+OBqOOBl+OBpuaJseOBhlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uU3RyaW5nIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpO1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogY3NtU3RyaW5nKVxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogYW55KVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICBpZignc3RyaW5nJyA9PT0gdHlwZW9mKHMpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcy5zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZih2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlciA9PSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5fc3RyaW5nQnVmZmVyID09IHZhbHVlLnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBKU09O44OR44O844K55pmC44Gu44Ko44Op44O857WQ5p6c44CC5paH5a2X5YiX5Z6L44Gu44KI44GG44Gr44G144KL44G+44GGXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25FcnJvciBleHRlbmRzIEpzb25TdHJpbmdcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWXjgIHpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1N0YXRpYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqjjg6njg7zmg4XloLHjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoczogc3RyaW5nKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IGNzbVN0cmluZ3xzdHJpbmcsIGlzU3RhdGljOiBib29sZWFuKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihcInN0cmluZ1wiID09PSB0eXBlb2YocykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VwZXIocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VwZXIocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pc1N0YXRpYyA9IGlzU3RhdGljO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM44Ko44Op44O85YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXJyb3IoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcHJvdGVjdGVkIF9pc1N0YXRpYzogYm9vbGVhbjsgLy8g6Z2Z55qE44GqVmFsdWXjgYvjganjgYbjgYtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KSTlVMTOWApOOBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uTnVsbHZhbHVlIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjE5VTEzlgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVlLCDpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gXCJOdWxsVmFsdWVcIjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkumFjeWIl+OBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uQXJyYXkgZXh0ZW5kcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5ID0gbmV3IGNzbVZlY3RvcjxWYWx1ZT4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpdGU6IGNzbVZlY3Rvcl9pdGVyYXRvcjxWYWx1ZT4gPSB0aGlzLl9hcnJheS5iZWdpbigpOyBpdGUubm90RXF1YWwodGhpcy5fYXJyYXkuZW5kKCkpOyBpdGUucHJlSW5jcmVtZW50KCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpO1xuXG4gICAgICAgICAgICAgICAgaWYodiAmJiAhdi5pc1N0YXRpYygpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM6YWN5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQXJyYXkoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbaW5kZXhdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeUluZGV4KGluZGV4OiBudW1iZXIpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fYXJyYXkuZ2V0U2l6ZSgpIDw9IGluZGV4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9JTkRFWF9PRl9CT1VORFMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdjogVmFsdWUgPSB0aGlzLl9hcnJheS5hdChpbmRleCk7XG5cbiAgICAgICAgICAgIGlmKHYgPT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbc3RyaW5nIHwgY3NtU3RyaW5nXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlTdHJpbmcoczogc3RyaW5nIHwgY3NtU3RyaW5nKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgc3RyaW5nQnVmZmVyOiBzdHJpbmcgPSBpbmRlbnQgKyBcIltcXG5cIjtcblxuICAgICAgICAgICAgZm9yKGxldCBpdGU6IGNzbVZlY3Rvcl9pdGVyYXRvcjxWYWx1ZT4gPSB0aGlzLl9hcnJheS5iZWdpbigpOyBpdGUubm90RXF1YWwodGhpcy5fYXJyYXkuZW5kKCkpOyBpdGUuaW5jcmVtZW50KCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciArPSBpbmRlbnQgKyBcIlwiICsgdi5nZXRTdHJpbmcoaW5kZW50ICsgXCIgXCIpICsgXCJcXG5cIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gc3RyaW5nQnVmZmVyICsgaW5kZW50ICsgXCJdXFxuXCI7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6YWN5YiX6KaB57Sg44KS6L+95Yqg44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSB2IOi/veWKoOOBmeOCi+imgee0oFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFkZCh2OiBWYWx1ZSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fYXJyYXkucHVzaEJhY2sodik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS44Kz44Oz44OG44OK44Gn6L+U44GZKGNzbVZlY3RvcjxWYWx1ZT4pXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmVjdG9yKGRlZmF1bHRWYWx1ZTogY3NtVmVjdG9yPFZhbHVlPiA9IG51bGwpOiBjc21WZWN0b3I8VmFsdWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hcnJheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjga7mlbDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXkuZ2V0U2l6ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfYXJyYXk6IGNzbVZlY3RvcjxWYWx1ZT47IC8vIEpTT07opoHntKDjga7lgKRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KS44Oe44OD44OX44Go44GX44Gm5oyB44GkXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25NYXAgZXh0ZW5kcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IG5ldyBjc21NYXA8c3RyaW5nLCBWYWx1ZT4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaXRlOiBjc21NYXBfaXRlcmF0b3I8c3RyaW5nLCBWYWx1ZT4gPSB0aGlzLl9tYXAuYmVnaW4oKTtcblxuICAgICAgICAgICAgd2hpbGUoaXRlLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpLnNlY29uZDtcblxuICAgICAgICAgICAgICAgIGlmKHYgJiYgIXYuaXNTdGF0aWMoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZS5wcmVJbmNyZW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjE1hcOWei+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc01hcCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtzdHJpbmcgfCBjc21TdHJpbmddXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeVN0cmluZyhzOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihzIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCByZXQ6IFZhbHVlID0gdGhpcy5fbWFwLmdldFZhbHVlKHMucyk7XG4gICAgICAgICAgICAgICAgaWYocmV0ID09IG51bGwpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGl0ZXI6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpOyBpdGVyLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSk7IGl0ZXIucHJlSW5jcmVtZW50KCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoaXRlci5wdHIoKS5maXJzdCA9PSBzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlci5wdHIoKS5zZWNvbmQgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlci5wdHIoKS5zZWNvbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtpbmRleF1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IGluZGVudCArIFwie1xcblwiO1xuXG4gICAgICAgICAgICBjb25zdCBpdGU6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpO1xuICAgICAgICAgICAgd2hpbGUoaXRlLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gaXRlLnB0cigpLmZpcnN0O1xuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKS5zZWNvbmQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgKz0gaW5kZW50ICsgXCIgXCIgKyBrZXkgKyBcIiA6IFwiICsgdi5nZXRTdHJpbmcoaW5kZW50ICsgXCIgICBcIikgKyBcIiBcXG5cIjtcbiAgICAgICAgICAgICAgICBpdGUucHJlSW5jcmVtZW50KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciArPSBpbmRlbnQgKyBcIn1cXG5cIjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpJNYXDlnovjgafov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNYXAoZGVmYXVsdFZhbHVlPzogY3NtTWFwPHN0cmluZywgVmFsdWU+KTogY3NtTWFwPHN0cmluZywgVmFsdWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFw44Gr6KaB57Sg44KS6L+95Yqg44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHV0KGtleTogc3RyaW5nLCB2OiBWYWx1ZSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbWFwLnNldFZhbHVlKGtleSwgdik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFw44GL44KJ44Kt44O844Gu44Oq44K544OI44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0S2V5cygpOiBjc21WZWN0b3I8c3RyaW5nPlxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2tleXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IG5ldyBjc21WZWN0b3I8c3RyaW5nPigpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlOiBjc21NYXBfaXRlcmF0b3I8c3RyaW5nLCBWYWx1ZT4gPSB0aGlzLl9tYXAuYmVnaW4oKTtcblxuICAgICAgICAgICAgICAgIHdoaWxlKGl0ZS5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSBpdGUucHRyKCkuZmlyc3Q7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMucHVzaEJhY2soa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcOOBruimgee0oOaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlzLmdldFNpemUoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcHJpdmF0ZSBfbWFwOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT47ICAgLy8gSlNPTuimgee0oOOBruWApFxuICAgICAgICBwcml2YXRlIF9rZXlzOiBjc21WZWN0b3I8c3RyaW5nPjsgICAgICAgICAgICAgICAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==