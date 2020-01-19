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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/physics/cubismphysics.ts");
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

/***/ "./Framework/physics/cubismphysics.ts":
/*!********************************************!*\
  !*** ./Framework/physics/cubismphysics.ts ***!
  \********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismphysicsinternal */ "./Framework/physics/cubismphysicsinternal.ts");
/* harmony import */ var _math_cubismvector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/cubismvector2 */ "./Framework/math/cubismvector2.ts");
/* harmony import */ var _math_cubismmath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/cubismmath */ "./Framework/math/cubismmath.ts");
/* harmony import */ var _cubismphysicsjson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubismphysicsjson */ "./Framework/physics/cubismphysicsjson.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */




var CubismPhysicsJson = _cubismphysicsjson__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].CubismPhysicsJson;
var CubismMath = _math_cubismmath__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismMath;
var CubismPhysicsRig = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsRig;
var CubismPhysicsSubRig = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsSubRig;
var CubismPhysicsInput = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsInput;
var CubismPhysicsOutput = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsOutput;
var CubismPhysicsParticle = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsParticle;
var CubismPhysicsSource = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsSource;
var CubismPhysicsTargetType = _cubismphysicsinternal__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismPhysicsTargetType;
var CubismVector2 = _math_cubismvector2__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismVector2;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /// physics types tags.
    var PhysicsTypeTagX = "X";
    var PhysicsTypeTagY = "Y";
    var PhysicsTypeTagAngle = "Angle";
    /// Constant of air resistance.
    var AirResistance = 5.0;
    /// Constant of maximum weight of input and output ratio.
    var MaximumWeight = 100.0;
    /// Constant of threshold of movement.
    var MovementThreshold = 0.001;
    /**
     * 物理演算クラス
     */
    var CubismPhysics = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismPhysics() {
            this._physicsRig = null;
            // set default options
            this._options = new Options();
            this._options.gravity.y = -1.0;
            this._options.gravity.x = 0;
            this._options.wind.x = 0;
            this._options.wind.y = 0;
        }
        /**
         * インスタンスの作成
         * @param buffer    physics3.jsonが読み込まれているバッファ
         * @param size      バッファのサイズ
         * @return 作成されたインスタンス
         */
        CubismPhysics.create = function (buffer, size) {
            var ret = new CubismPhysics();
            ret.parse(buffer, size);
            ret._physicsRig.gravity.y = 0;
            return ret;
        };
        /**
         * インスタンスを破棄する
         * @param physics 破棄するインスタンス
         */
        CubismPhysics.delete = function (physics) {
            if (physics != null) {
                physics.release();
                physics = null;
            }
        };
        /**
         * 物理演算の評価
         * @param model 物理演算の結果を適用するモデル
         * @param deltaTimeSeconds デルタ時間[秒]
         */
        CubismPhysics.prototype.evaluate = function (model, deltaTimeSeconds) {
            var totalAngle;
            var weight;
            var radAngle;
            var outputValue;
            var totalTranslation = new CubismVector2();
            var currentSetting;
            var currentInput;
            var currentOutput;
            var currentParticles;
            var parameterValue;
            var parameterMaximumValue;
            var parameterMinimumValue;
            var parameterDefaultValue;
            parameterValue = model.getModel().parameters.values;
            parameterMaximumValue = model.getModel().parameters.maximumValues;
            parameterMinimumValue = model.getModel().parameters.minimumValues;
            parameterDefaultValue = model.getModel().parameters.defaultValues;
            for (var settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex) {
                totalAngle = { angle: 0.0 };
                totalTranslation.x = 0.0;
                totalTranslation.y = 0.0;
                currentSetting = this._physicsRig.settings.at(settingIndex);
                currentInput = this._physicsRig.inputs.get(currentSetting.baseInputIndex);
                currentOutput = this._physicsRig.outputs.get(currentSetting.baseOutputIndex);
                currentParticles = this._physicsRig.particles.get(currentSetting.baseParticleIndex);
                // Load input parameters
                for (var i = 0; i < currentSetting.inputCount; ++i) {
                    weight = currentInput[i].weight / MaximumWeight;
                    if (currentInput[i].sourceParameterIndex == -1) {
                        currentInput[i].sourceParameterIndex = model.getParameterIndex(currentInput[i].source.id);
                    }
                    currentInput[i].getNormalizedParameterValue(totalTranslation, totalAngle, parameterValue[currentInput[i].sourceParameterIndex], parameterMinimumValue[currentInput[i].sourceParameterIndex], parameterMaximumValue[currentInput[i].sourceParameterIndex], parameterDefaultValue[currentInput[i].sourceParameterIndex], currentSetting.normalizationPosition, currentSetting.normalizationAngle, currentInput[0].reflect, weight);
                }
                radAngle = CubismMath.degreesToRadian(-totalAngle.angle);
                totalTranslation.x = (totalTranslation.x * CubismMath.cos(radAngle) - totalTranslation.y * CubismMath.sin(radAngle));
                totalTranslation.y = (totalTranslation.x * CubismMath.sin(radAngle) + totalTranslation.y * CubismMath.cos(radAngle));
                // Calculate particles position.
                updateParticles(currentParticles, currentSetting.particleCount, totalTranslation, totalAngle.angle, this._options.wind, MovementThreshold * currentSetting.normalizationPosition.maximum, deltaTimeSeconds, AirResistance);
                // Update output parameters.
                for (var i = 0; i < currentSetting.outputCount; ++i) {
                    var particleIndex = currentOutput[i].vertexIndex;
                    if (particleIndex < 1 || particleIndex >= currentSetting.particleCount) {
                        break;
                    }
                    if (currentOutput[i].destinationParameterIndex == -1) {
                        currentOutput[i].destinationParameterIndex = model.getParameterIndex(currentOutput[i].destination.id);
                    }
                    var translation = new CubismVector2();
                    translation.x = currentParticles[particleIndex].position.x - currentParticles[particleIndex - 1].position.x;
                    translation.y = currentParticles[particleIndex].position.y - currentParticles[particleIndex - 1].position.y;
                    outputValue = currentOutput[i].getValue(translation, currentParticles, particleIndex, currentOutput[i].reflect, this._options.gravity);
                    var destinationParameterIndex = currentOutput[i].destinationParameterIndex;
                    var outParameterValue = (!Float32Array.prototype.slice && 'subarray' in Float32Array.prototype)
                        ? JSON.parse(JSON.stringify(parameterValue.subarray(destinationParameterIndex))) // 値渡しするため、JSON.parse, JSON.stringify
                        : parameterValue.slice(destinationParameterIndex);
                    updateOutputParameterValue(outParameterValue, parameterMinimumValue[destinationParameterIndex], parameterMaximumValue[destinationParameterIndex], outputValue, currentOutput[i]);
                    // 値を反映
                    for (var offset = destinationParameterIndex, outParamIndex = 0; offset < parameterValue.length; offset++, outParamIndex++) {
                        parameterValue[offset] = outParameterValue[outParamIndex];
                    }
                }
            }
        };
        /**
         * オプションの設定
         * @param options オプション
         */
        CubismPhysics.prototype.setOptions = function (options) {
            this._options = options;
        };
        /**
         * オプションの取得
         * @return オプション
         */
        CubismPhysics.prototype.getOption = function () {
            return this._options;
        };
        /**
         * デストラクタ相当の処理
         */
        CubismPhysics.prototype.release = function () {
            this._physicsRig = void 0;
            this._physicsRig = null;
        };
        /**
         * physics3.jsonをパースする。
         * @param physicsJson physics3.jsonが読み込まれているバッファ
         * @param size バッファのサイズ
         */
        CubismPhysics.prototype.parse = function (physicsJson, size) {
            this._physicsRig = new CubismPhysicsRig();
            var json = new CubismPhysicsJson(physicsJson, size);
            this._physicsRig.gravity = json.getGravity();
            this._physicsRig.wind = json.getWind();
            this._physicsRig.subRigCount = json.getSubRigCount();
            this._physicsRig.settings.updateSize(this._physicsRig.subRigCount, CubismPhysicsSubRig, true);
            this._physicsRig.inputs.updateSize(json.getTotalInputCount(), CubismPhysicsInput, true);
            this._physicsRig.outputs.updateSize(json.getTotalOutputCount(), CubismPhysicsOutput, true);
            this._physicsRig.particles.updateSize(json.getVertexCount(), CubismPhysicsParticle, true);
            var inputIndex = 0, outputIndex = 0, particleIndex = 0;
            for (var i = 0; i < this._physicsRig.settings.getSize(); ++i) {
                this._physicsRig.settings.at(i).normalizationPosition.minimum = json.getNormalizationPositionMinimumValue(i);
                this._physicsRig.settings.at(i).normalizationPosition.maximum = json.getNormalizationPositionMaximumValue(i);
                this._physicsRig.settings.at(i).normalizationPosition.defalut = json.getNormalizationPositionDefaultValue(i);
                this._physicsRig.settings.at(i).normalizationAngle.minimum = json.getNormalizationAngleMinimumValue(i);
                this._physicsRig.settings.at(i).normalizationAngle.maximum = json.getNormalizationAngleMaximumValue(i);
                this._physicsRig.settings.at(i).normalizationAngle.defalut = json.getNormalizationAngleDefaultValue(i);
                // Input
                this._physicsRig.settings.at(i).inputCount = json.getInputCount(i);
                this._physicsRig.settings.at(i).baseInputIndex = inputIndex;
                for (var j = 0; j < this._physicsRig.settings.at(i).inputCount; ++j) {
                    this._physicsRig.inputs.at(inputIndex + j).sourceParameterIndex = -1;
                    this._physicsRig.inputs.at(inputIndex + j).weight = json.getInputWeight(i, j);
                    this._physicsRig.inputs.at(inputIndex + j).reflect = json.getInputReflect(i, j);
                    if (json.getInputType(i, j) == PhysicsTypeTagX) {
                        this._physicsRig.inputs.at(inputIndex + j).type = CubismPhysicsSource.CubismPhysicsSource_X;
                        this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputTranslationXFromNormalizedParameterValue;
                    }
                    else if (json.getInputType(i, j) == PhysicsTypeTagY) {
                        this._physicsRig.inputs.at(inputIndex + j).type = CubismPhysicsSource.CubismPhysicsSource_Y;
                        this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputTranslationYFromNormalizedParamterValue;
                    }
                    else if (json.getInputType(i, j) == PhysicsTypeTagAngle) {
                        this._physicsRig.inputs.at(inputIndex + j).type = CubismPhysicsSource.CubismPhysicsSource_Angle;
                        this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputAngleFromNormalizedParameterValue;
                    }
                    this._physicsRig.inputs.at(inputIndex + j).source.targetType = CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
                    this._physicsRig.inputs.at(inputIndex + j).source.id = json.getInputSourceId(i, j);
                }
                inputIndex += this._physicsRig.settings.at(i).inputCount;
                // Output
                this._physicsRig.settings.at(i).outputCount = json.getOutputCount(i);
                this._physicsRig.settings.at(i).baseOutputIndex = outputIndex;
                for (var j = 0; j < this._physicsRig.settings.at(i).outputCount; ++j) {
                    this._physicsRig.outputs.at(outputIndex + j).destinationParameterIndex = -1;
                    this._physicsRig.outputs.at(outputIndex + j).vertexIndex = json.getOutputVertexIndex(i, j);
                    this._physicsRig.outputs.at(outputIndex + j).angleScale = json.getOutputAngleScale(i, j);
                    this._physicsRig.outputs.at(outputIndex + j).weight = json.getOutputWeight(i, j);
                    this._physicsRig.outputs.at(outputIndex + j).destination.targetType = CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
                    this._physicsRig.outputs.at(outputIndex + j).destination.id = json.getOutputDestinationId(i, j);
                    if (json.getOutputType(i, j) == PhysicsTypeTagX) {
                        this._physicsRig.outputs.at(outputIndex + j).type = CubismPhysicsSource.CubismPhysicsSource_X;
                        this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputTranslationX;
                        this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleTranslationX;
                    }
                    else if (json.getOutputType(i, j) == PhysicsTypeTagY) {
                        this._physicsRig.outputs.at(outputIndex + j).type = CubismPhysicsSource.CubismPhysicsSource_Y;
                        this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputTranslationY;
                        this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleTranslationY;
                    }
                    else if (json.getOutputType(i, j) == PhysicsTypeTagAngle) {
                        this._physicsRig.outputs.at(outputIndex + j).type = CubismPhysicsSource.CubismPhysicsSource_Angle;
                        this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputAngle;
                        this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleAngle;
                    }
                    this._physicsRig.outputs.at(outputIndex + j).reflect = json.getOutputReflect(i, j);
                }
                outputIndex += this._physicsRig.settings.at(i).outputCount;
                // Particle
                this._physicsRig.settings.at(i).particleCount = json.getParticleCount(i);
                this._physicsRig.settings.at(i).baseParticleIndex = particleIndex;
                for (var j = 0; j < this._physicsRig.settings.at(i).particleCount; ++j) {
                    this._physicsRig.particles.at(particleIndex + j).mobility = json.getParticleMobility(i, j);
                    this._physicsRig.particles.at(particleIndex + j).delay = json.getParticleDelay(i, j);
                    this._physicsRig.particles.at(particleIndex + j).acceleration = json.getParticleAcceleration(i, j);
                    this._physicsRig.particles.at(particleIndex + j).radius = json.getParticleRadius(i, j);
                    this._physicsRig.particles.at(particleIndex + j).position = json.getParticlePosition(i, j);
                }
                particleIndex += this._physicsRig.settings.at(i).particleCount;
            }
            this.initialize();
            json.release();
            json = void 0;
            json = null;
        };
        /**
         * 初期化する
         */
        CubismPhysics.prototype.initialize = function () {
            var strand;
            var currentSetting;
            var radius;
            for (var settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex) {
                currentSetting = this._physicsRig.settings.at(settingIndex);
                strand = this._physicsRig.particles.get(currentSetting.baseParticleIndex);
                // Initialize the top of particle.
                strand[0].initialPosition = new CubismVector2(0.0, 0.0);
                strand[0].lastPosition = new CubismVector2(strand[0].initialPosition.x, strand[0].initialPosition.y);
                strand[0].lastGravity = new CubismVector2(0.0, -1.0);
                strand[0].lastGravity.y *= -1.0;
                strand[0].velocity = new CubismVector2(0.0, 0.0);
                strand[0].force = new CubismVector2(0.0, 0.0);
                // Initialize paritcles.
                for (var i = 1; i < currentSetting.particleCount; ++i) {
                    radius = new CubismVector2(0.0, 0.0);
                    radius.y = strand[i].radius;
                    strand[i].initialPosition = new CubismVector2(strand[i - 1].initialPosition.x + radius.x, strand[i - 1].initialPosition.y + radius.y);
                    strand[i].position = new CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
                    strand[i].lastPosition = new CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
                    strand[i].lastGravity = new CubismVector2(0.0, -1.0);
                    strand[i].lastGravity.y *= -1.0;
                    strand[i].velocity = new CubismVector2(0.0, 0.0);
                    strand[i].force = new CubismVector2(0.0, 0.0);
                }
            }
        };
        return CubismPhysics;
    }());
    Live2DCubismFramework.CubismPhysics = CubismPhysics;
    /**
     * 物理演算のオプション
     */
    var Options = /** @class */ (function () {
        function Options() {
            this.gravity = new CubismVector2(0, 0);
            this.wind = new CubismVector2(0, 0);
        }
        return Options;
    }());
    Live2DCubismFramework.Options = Options;
    /**
     * Gets sign.
     *
     * @param value Evaluation target value.
     *
     * @return Sign of value.
     */
    function sign(value) {
        var ret = 0;
        if (value > 0.0) {
            ret = 1;
        }
        else if (value < 0.0) {
            ret = -1;
        }
        return ret;
    }
    function getInputTranslationXFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
        targetTranslation.x += normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
    }
    function getInputTranslationYFromNormalizedParamterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
        targetTranslation.y += normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
    }
    function getInputAngleFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizaitionPosition, normalizationAngle, isInverted, weight) {
        targetAngle.angle += normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationAngle.minimum, normalizationAngle.maximum, normalizationAngle.defalut, isInverted) * weight;
    }
    function getOutputTranslationX(translation, particles, particleIndex, isInverted, parentGravity) {
        var outputValue = translation.x;
        if (isInverted) {
            outputValue *= -1.0;
        }
        return outputValue;
    }
    function getOutputTranslationY(translation, particles, particleIndex, isInverted, parentGravity) {
        var outputValue = translation.y;
        if (isInverted) {
            outputValue *= -1.0;
        }
        return outputValue;
    }
    function getOutputAngle(translation, particles, particleIndex, isInverted, parentGravity) {
        var outputValue;
        if (particleIndex >= 2) {
            parentGravity = particles[particleIndex - 1].position.substract(particles[particleIndex - 2].position);
        }
        else {
            parentGravity = parentGravity.multiplyByScaler(-1.0);
        }
        outputValue = CubismMath.directionToRadian(parentGravity, translation);
        if (isInverted) {
            outputValue *= -1.0;
        }
        return outputValue;
    }
    function getRangeValue(min, max) {
        var maxValue = CubismMath.max(min, max);
        var minValue = CubismMath.min(min, max);
        return CubismMath.abs(maxValue - minValue);
    }
    function getDefaultValue(min, max) {
        var minValue = CubismMath.min(min, max);
        return minValue + (getRangeValue(min, max) / 2.0);
    }
    function getOutputScaleTranslationX(translationScale, angleScale) {
        return JSON.parse(JSON.stringify(translationScale.x));
    }
    function getOutputScaleTranslationY(translationScale, angleScale) {
        return JSON.parse(JSON.stringify(translationScale.y));
    }
    function getOutputScaleAngle(translationScale, angleScale) {
        return JSON.parse(JSON.stringify(angleScale));
    }
    /**
     * Updates particles.
     *
     * @param strand                Target array of particle.
     * @param strandCount           Count of particle.
     * @param totalTranslation      Total translation value.
     * @param totalAngle            Total angle.
     * @param windDirection         Direction of Wind.
     * @param thresholdValue        Threshold of movement.
     * @param deltaTimeSeconds      Delta time.
     * @param airResistance         Air resistance.
     */
    function updateParticles(strand, strandCount, totalTranslation, totalAngle, windDirection, thresholdValue, deltaTimeSeconds, airResistance) {
        var totalRadian;
        var delay;
        var radian;
        var currentGravity;
        var direction = new CubismVector2(0.0, 0.0);
        var velocity = new CubismVector2(0.0, 0.0);
        var force = new CubismVector2(0.0, 0.0);
        var newDirection = new CubismVector2(0.0, 0.0);
        strand[0].position = new CubismVector2(totalTranslation.x, totalTranslation.y);
        totalRadian = CubismMath.degreesToRadian(totalAngle);
        currentGravity = CubismMath.radianToDirection(totalRadian);
        currentGravity.normalize();
        for (var i = 1; i < strandCount; ++i) {
            strand[i].force = currentGravity.multiplyByScaler(strand[i].acceleration).add(windDirection);
            strand[i].lastPosition = new CubismVector2(strand[i].position.x, strand[i].position.y);
            delay = strand[i].delay * deltaTimeSeconds * 30.0;
            direction = strand[i].position.substract(strand[i - 1].position);
            radian = CubismMath.directionToRadian(strand[i].lastGravity, currentGravity) / airResistance;
            direction.x = ((CubismMath.cos(radian) * direction.x) - (direction.y * CubismMath.sin(radian)));
            direction.y = ((CubismMath.sin(radian) * direction.x) + (direction.y * CubismMath.cos(radian)));
            strand[i].position = strand[i - 1].position.add(direction);
            velocity = strand[i].velocity.multiplyByScaler(delay);
            force = strand[i].force.multiplyByScaler(delay).multiplyByScaler(delay);
            strand[i].position = strand[i].position.add(velocity).add(force);
            newDirection = strand[i].position.substract(strand[i - 1].position);
            newDirection.normalize();
            strand[i].position = strand[i - 1].position.add(newDirection.multiplyByScaler(strand[i].radius));
            if (CubismMath.abs(strand[i].position.x) < thresholdValue) {
                strand[i].position.x = 0.0;
            }
            if (delay != 0.0) {
                strand[i].velocity = strand[i].position.substract(strand[i].lastPosition);
                strand[i].velocity = strand[i].velocity.divisionByScalar(delay);
                strand[i].velocity = strand[i].velocity.multiplyByScaler(strand[i].mobility);
            }
            strand[i].force = new CubismVector2(0.0, 0.0);
            strand[i].lastGravity = new CubismVector2(currentGravity.x, currentGravity.y);
        }
    }
    /**
     * Updates output parameter value.
     * @param parameterValue            Target parameter value.
     * @param parameterValueMinimum     Minimum of parameter value.
     * @param parameterValueMaximum     Maximum of parameter value.
     * @param translation               Translation value.
     */
    function updateOutputParameterValue(parameterValue, parameterValueMinimum, parameterValueMaximum, translation, output) {
        var outputScale;
        var value;
        var weight;
        outputScale = output.getScale(output.translationScale, output.angleScale);
        value = translation * outputScale;
        if (value < parameterValueMinimum) {
            if (value < output.valueBelowMinimum) {
                output.valueBelowMinimum = value;
            }
            value = parameterValueMinimum;
        }
        else if (value > parameterValueMaximum) {
            if (value > output.valueExceededMaximum) {
                output.valueExceededMaximum = value;
            }
            value = parameterValueMaximum;
        }
        weight = (output.weight / MaximumWeight);
        if (weight >= 1.0) {
            parameterValue[0] = value;
        }
        else {
            value = (parameterValue[0] * (1.0 - weight)) + (value * weight);
            parameterValue[0] = value;
        }
    }
    function normalizeParameterValue(value, parameterMinimum, parameterMaximum, parameterDefault, normalizedMinimum, normalizedMaximum, normalizedDefault, isInverted) {
        var result = 0.0;
        var maxValue = CubismMath.max(parameterMaximum, parameterMinimum);
        if (maxValue < value) {
            value = maxValue;
        }
        var minValue = CubismMath.min(parameterMaximum, parameterMinimum);
        if (minValue > value) {
            value = minValue;
        }
        var minNormValue = CubismMath.min(normalizedMinimum, normalizedMaximum);
        var maxNormValue = CubismMath.max(normalizedMinimum, normalizedMaximum);
        var middleNormValue = normalizedDefault;
        var middleValue = getDefaultValue(minValue, maxValue);
        var paramValue = value - middleValue;
        switch (sign(paramValue)) {
            case 1:
                {
                    var nLength = maxNormValue - middleNormValue;
                    var pLength = maxValue - middleValue;
                    if (pLength != 0.0) {
                        result = paramValue * (nLength / pLength);
                        result += middleNormValue;
                    }
                    break;
                }
            case -1:
                {
                    var nLength = minNormValue - middleNormValue;
                    var pLength = minValue - middleValue;
                    if (pLength != 0.0) {
                        result = paramValue * (nLength / pLength);
                        result += middleNormValue;
                    }
                    break;
                }
            case 0:
                {
                    result = middleNormValue;
                    break;
                }
            default:
                {
                    break;
                }
        }
        return (isInverted)
            ? result
            : (result * -1.0);
    }
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/physics/cubismphysicsinternal.ts":
/*!****************************************************!*\
  !*** ./Framework/physics/cubismphysicsinternal.ts ***!
  \****************************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _math_cubismvector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/cubismvector2 */ "./Framework/math/cubismvector2.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmVector;
var CubismVector2 = _math_cubismvector2__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismVector2;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * 物理演算の適用先の種類
     */
    var CubismPhysicsTargetType;
    (function (CubismPhysicsTargetType) {
        CubismPhysicsTargetType[CubismPhysicsTargetType["CubismPhysicsTargetType_Parameter"] = 0] = "CubismPhysicsTargetType_Parameter";
    })(CubismPhysicsTargetType = Live2DCubismFramework.CubismPhysicsTargetType || (Live2DCubismFramework.CubismPhysicsTargetType = {}));
    /**
     * 物理演算の入力の種類
     */
    var CubismPhysicsSource;
    (function (CubismPhysicsSource) {
        CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_X"] = 0] = "CubismPhysicsSource_X";
        CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Y"] = 1] = "CubismPhysicsSource_Y";
        CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Angle"] = 2] = "CubismPhysicsSource_Angle";
    })(CubismPhysicsSource = Live2DCubismFramework.CubismPhysicsSource || (Live2DCubismFramework.CubismPhysicsSource = {}));
    /**
     * @brief 物理演算で使用する外部の力
     *
     * 物理演算で使用する外部の力。
     */
    var PhysicsJsonEffectiveForces = /** @class */ (function () {
        function PhysicsJsonEffectiveForces() {
            this.gravity = new CubismVector2(0, 0);
            this.wind = new CubismVector2(0, 0);
        }
        return PhysicsJsonEffectiveForces;
    }());
    Live2DCubismFramework.PhysicsJsonEffectiveForces = PhysicsJsonEffectiveForces;
    /**
     * 物理演算のパラメータ情報
     */
    var CubismPhysicsParameter = /** @class */ (function () {
        function CubismPhysicsParameter() {
        }
        return CubismPhysicsParameter;
    }());
    Live2DCubismFramework.CubismPhysicsParameter = CubismPhysicsParameter;
    /**
     * 物理演算の正規化情報
     */
    var CubismPhysicsNormalization = /** @class */ (function () {
        function CubismPhysicsNormalization() {
        }
        return CubismPhysicsNormalization;
    }());
    Live2DCubismFramework.CubismPhysicsNormalization = CubismPhysicsNormalization;
    /**
     * 物理演算の演算委使用する物理点の情報
     */
    var CubismPhysicsParticle = /** @class */ (function () {
        function CubismPhysicsParticle() {
            this.initialPosition = new CubismVector2(0, 0);
            this.position = new CubismVector2(0, 0);
            this.lastPosition = new CubismVector2(0, 0);
            this.lastGravity = new CubismVector2(0, 0);
            this.force = new CubismVector2(0, 0);
            this.velocity = new CubismVector2(0, 0);
        }
        return CubismPhysicsParticle;
    }());
    Live2DCubismFramework.CubismPhysicsParticle = CubismPhysicsParticle;
    /**
     * 物理演算の物理点の管理
     */
    var CubismPhysicsSubRig = /** @class */ (function () {
        function CubismPhysicsSubRig() {
            this.normalizationPosition = new CubismPhysicsNormalization();
            this.normalizationAngle = new CubismPhysicsNormalization();
        }
        return CubismPhysicsSubRig;
    }());
    Live2DCubismFramework.CubismPhysicsSubRig = CubismPhysicsSubRig;
    /**
     * 物理演算の入力情報
     */
    var CubismPhysicsInput = /** @class */ (function () {
        function CubismPhysicsInput() {
            this.source = new CubismPhysicsParameter();
        }
        return CubismPhysicsInput;
    }());
    Live2DCubismFramework.CubismPhysicsInput = CubismPhysicsInput;
    /**
     * @brief 物理演算の出力情報
     *
     * 物理演算の出力情報。
     */
    var CubismPhysicsOutput = /** @class */ (function () {
        function CubismPhysicsOutput() {
            this.destination = new CubismPhysicsParameter();
            this.translationScale = new CubismVector2(0, 0);
        }
        return CubismPhysicsOutput;
    }());
    Live2DCubismFramework.CubismPhysicsOutput = CubismPhysicsOutput;
    /**
     * @brief 物理演算のデータ
     *
     * 物理演算のデータ。
     */
    var CubismPhysicsRig = /** @class */ (function () {
        function CubismPhysicsRig() {
            this.settings = new csmVector();
            this.inputs = new csmVector();
            this.outputs = new csmVector();
            this.particles = new csmVector();
            this.gravity = new CubismVector2(0, 0);
            this.wind = new CubismVector2(0, 0);
        }
        return CubismPhysicsRig;
    }());
    Live2DCubismFramework.CubismPhysicsRig = CubismPhysicsRig;
    ;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/physics/cubismphysicsjson.ts":
/*!************************************************!*\
  !*** ./Framework/physics/cubismphysicsjson.ts ***!
  \************************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubismjson */ "./Framework/utils/cubismjson.ts");
/* harmony import */ var _math_cubismvector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/cubismvector2 */ "./Framework/math/cubismvector2.ts");
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */



var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismFramework;
var CubismVector2 = _math_cubismvector2__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismVector2;
var CubismJson = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismJson;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    // JSON keys
    var Position = "Position";
    var X = "X";
    var Y = "Y";
    var Angle = "Angle";
    var Type = "Type";
    var Id = "Id";
    // Meta
    var Meta = "Meta";
    var EffectiveForces = "EffectiveForces";
    var TotalInputCount = "TotalInputCount";
    var TotalOutputCount = "TotalOutputCount";
    var PhysicsSettingCount = "PhysicsSettingCount";
    var Gravity = "Gravity";
    var Wind = "Wind";
    var VertexCount = "VertexCount";
    // PhysicsSettings
    var PhysicsSettings = "PhysicsSettings";
    var Normalization = "Normalization";
    var Minimum = "Minimum";
    var Maximum = "Maximum";
    var Default = "Default";
    var Reflect = "Reflect";
    var Weight = "Weight";
    // Input
    var Input = "Input";
    var Source = "Source";
    // Output
    var Output = "Output";
    var Scale = "Scale";
    var VertexIndex = "VertexIndex";
    var Destination = "Destination";
    // Particle
    var Vertices = "Vertices";
    var Mobility = "Mobility";
    var Delay = "Delay";
    var Radius = "Radius";
    var Acceleration = "Acceleration";
    /**
     * physics3.jsonのコンテナ。
     */
    var CubismPhysicsJson = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param buffer physics3.jsonが読み込まれているバッファ
         * @param size バッファのサイズ
         */
        function CubismPhysicsJson(buffer, size) {
            this._json = CubismJson.create(buffer, size);
        }
        /**
         * デストラクタ相当の処理
         */
        CubismPhysicsJson.prototype.release = function () {
            CubismJson.delete(this._json);
        };
        /**
         * 重力の取得
         * @return 重力
         */
        CubismPhysicsJson.prototype.getGravity = function () {
            var ret = new CubismVector2(0, 0);
            ret.x = this._json.getRoot().getValueByString(Meta).getValueByString(EffectiveForces).getValueByString(Gravity).getValueByString(X).toFloat();
            ret.y = this._json.getRoot().getValueByString(Meta).getValueByString(EffectiveForces).getValueByString(Gravity).getValueByString(Y).toFloat();
            return ret;
        };
        /**
         * 風の取得
         * @return 風
         */
        CubismPhysicsJson.prototype.getWind = function () {
            var ret = new CubismVector2(0, 0);
            ret.x = this._json.getRoot().getValueByString(Meta).getValueByString(EffectiveForces).getValueByString(Wind).getValueByString(X).toFloat();
            ret.y = this._json.getRoot().getValueByString(Meta).getValueByString(EffectiveForces).getValueByString(Wind).getValueByString(Y).toFloat();
            return ret;
        };
        /**
         * 物理店の管理の個数の取得
         * @return 物理店の管理の個数
         */
        CubismPhysicsJson.prototype.getSubRigCount = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(PhysicsSettingCount).toInt();
        };
        /**
         * 入力の総合計の取得
         * @return 入力の総合計
         */
        CubismPhysicsJson.prototype.getTotalInputCount = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(TotalInputCount).toInt();
        };
        /**
         * 出力の総合計の取得
         * @return 出力の総合計
         */
        CubismPhysicsJson.prototype.getTotalOutputCount = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(TotalOutputCount).toInt();
        };
        /**
         * 物理点の個数の取得
         * @return 物理点の個数
         */
        CubismPhysicsJson.prototype.getVertexCount = function () {
            return this._json.getRoot().getValueByString(Meta).getValueByString(VertexCount).toInt();
        };
        /**
         * 正規化された位置の最小値の取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @return 正規化された位置の最小値
         */
        CubismPhysicsJson.prototype.getNormalizationPositionMinimumValue = function (physicsSettingIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Position).getValueByString(Minimum).toFloat();
        };
        /**
         * 正規化された位置の最大値の取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @return 正規化された位置の最大値
         */
        CubismPhysicsJson.prototype.getNormalizationPositionMaximumValue = function (physicsSettingIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Position).getValueByString(Maximum).toFloat();
        };
        /**
         * 正規化された位置のデフォルト値の取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @return 正規化された位置のデフォルト値
         */
        CubismPhysicsJson.prototype.getNormalizationPositionDefaultValue = function (physicsSettingIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Position).getValueByString(Default).toFloat();
        };
        /**
         * 正規化された角度の最小値の取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @return 正規化された角度の最小値
         */
        CubismPhysicsJson.prototype.getNormalizationAngleMinimumValue = function (physicsSettingIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Angle).getValueByString(Minimum).toFloat();
        };
        /**
         * 正規化された角度の最大値の取得
         * @param physicsSettingIndex
         * @return 正規化された角度の最大値
         */
        CubismPhysicsJson.prototype.getNormalizationAngleMaximumValue = function (physicsSettingIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Angle).getValueByString(Maximum).toFloat();
        };
        /**
         * 正規化された角度のデフォルト値の取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @return 正規化された角度のデフォルト値
         */
        CubismPhysicsJson.prototype.getNormalizationAngleDefaultValue = function (physicsSettingIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Angle).getValueByString(Default).toFloat();
        };
        /**
         * 入力の個数の取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @return 入力の個数
         */
        CubismPhysicsJson.prototype.getInputCount = function (physicsSettingIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getVector().getSize();
        };
        /**
         * 入力の重みの取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param inputIndex 入力のインデックス
         * @return 入力の重み
         */
        CubismPhysicsJson.prototype.getInputWeight = function (physicsSettingIndex, inputIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getValueByIndex(inputIndex).getValueByString(Weight).toFloat();
        };
        /**
         * 入力の反転の取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param inputIndex 入力のインデックス
         * @return 入力の反転
         */
        CubismPhysicsJson.prototype.getInputReflect = function (physicsSettingIndex, inputIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getValueByIndex(inputIndex).getValueByString(Reflect).toBoolean();
        };
        /**
         * 入力の種類の取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param inputIndex 入力のインデックス
         * @return 入力の種類
         */
        CubismPhysicsJson.prototype.getInputType = function (physicsSettingIndex, inputIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getValueByIndex(inputIndex).getValueByString(Type).getRawString();
        };
        /**
         * 入力元のIDの取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param inputIndex 入力のインデックス
         * @return 入力元のID
         */
        CubismPhysicsJson.prototype.getInputSourceId = function (physicsSettingIndex, inputIndex) {
            return CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getValueByIndex(inputIndex).getValueByString(Source).getValueByString(Id).getRawString());
        };
        /**
         * 出力の個数の取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @return 出力の個数
         */
        CubismPhysicsJson.prototype.getOutputCount = function (physicsSettingIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getVector().getSize();
        };
        /**
         * 出力の物理点のインデックスの取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param outputIndex 出力のインデックス
         * @return 出力の物理点のインデックス
         */
        CubismPhysicsJson.prototype.getOutputVertexIndex = function (physicsSettingIndex, outputIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(VertexIndex).toInt();
        };
        /**
         * 出力の角度のスケールを取得する
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param outputIndex 出力のインデックス
         * @return 出力の角度のスケール
         */
        CubismPhysicsJson.prototype.getOutputAngleScale = function (physicsSettingIndex, outputIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Scale).toFloat();
        };
        /**
         * 出力の重みの取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param outputIndex 出力のインデックス
         * @return 出力の重み
         */
        CubismPhysicsJson.prototype.getOutputWeight = function (physicsSettingIndex, outputIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Weight).toFloat();
        };
        /**
         * 出力先のIDの取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param outputIndex　出力のインデックス
         * @return 出力先のID
         */
        CubismPhysicsJson.prototype.getOutputDestinationId = function (physicsSettingIndex, outputIndex) {
            return CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Destination).getValueByString(Id).getRawString());
        };
        /**
         * 出力の種類の取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param outputIndex 出力のインデックス
         * @return 出力の種類
         */
        CubismPhysicsJson.prototype.getOutputType = function (physicsSettingIndex, outputIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Type).getRawString();
        };
        /**
         * 出力の反転の取得
         * @param physicsSettingIndex 物理演算のインデックス
         * @param outputIndex 出力のインデックス
         * @return 出力の反転
         */
        CubismPhysicsJson.prototype.getOutputReflect = function (physicsSettingIndex, outputIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Reflect).toBoolean();
        };
        /**
         * 物理点の個数の取得
         * @param physicsSettingIndex 物理演算男設定のインデックス
         * @return 物理点の個数
         */
        CubismPhysicsJson.prototype.getParticleCount = function (physicsSettingIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getVector().getSize();
        };
        /**
         * 物理点の動きやすさの取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param vertexIndex 物理点のインデックス
         * @return 物理点の動きやすさ
         */
        CubismPhysicsJson.prototype.getParticleMobility = function (physicsSettingIndex, vertexIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Mobility).toFloat();
        };
        /**
         * 物理点の遅れの取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param vertexIndex 物理点のインデックス
         * @return 物理点の遅れ
         */
        CubismPhysicsJson.prototype.getParticleDelay = function (physicsSettingIndex, vertexIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Delay).toFloat();
        };
        /**
         * 物理点の加速度の取得
         * @param physicsSettingIndex 物理演算の設定
         * @param vertexIndex 物理点のインデックス
         * @return 物理点の加速度
         */
        CubismPhysicsJson.prototype.getParticleAcceleration = function (physicsSettingIndex, vertexIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Acceleration).toFloat();
        };
        /**
         * 物理点の距離の取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param vertexIndex 物理点のインデックス
         * @return 物理点の距離
         */
        CubismPhysicsJson.prototype.getParticleRadius = function (physicsSettingIndex, vertexIndex) {
            return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Radius).toInt();
        };
        /**
         * 物理点の位置の取得
         * @param physicsSettingIndex 物理演算の設定のインデックス
         * @param vertexInde 物理点のインデックス
         * @return 物理点の位置
         */
        CubismPhysicsJson.prototype.getParticlePosition = function (physicsSettingIndex, vertexIndex) {
            var ret = new CubismVector2(0, 0);
            ret.x = this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Position).getValueByString(X).toFloat();
            ret.y = this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Position).getValueByString(Y).toFloat();
            return ret;
        };
        return CubismPhysicsJson;
    }());
    Live2DCubismFramework.CubismPhysicsJson = CubismPhysicsJson;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2N1YmlzbWZyYW1ld29ya2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvaWQvY3ViaXNtaWQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tYXRoL2N1YmlzbW1hdGgudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtdmVjdG9yMi50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvcGh5c2ljcy9jdWJpc21waHlzaWNzLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9waHlzaWNzL2N1YmlzbXBoeXNpY3NpbnRlcm5hbC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvcGh5c2ljcy9jdWJpc21waHlzaWNzanNvbi50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvcmVuZGVyaW5nL2N1YmlzbXJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay90eXBlL2NzbW1hcC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdHlwZS9jc21zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay91dGlscy9jdWJpc21kZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdXRpbHMvY3ViaXNtanNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFaEcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFM0QsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFeEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFakUsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEUsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRXpCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFD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RUFDZjtnQkFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxFQUFVLENBQUM7Z0JBRXJDLElBQU0sR0FBRyxHQUFtQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUU5RCxPQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNuQztvQkFDSSxJQUFNLEdBQUcsR0FBVyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO29CQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekIsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUN0QjthQUNKO1lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRDs7V0FFRztRQUNJLHlCQUFPLEdBQWQ7WUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEMsQ0FBQztRQUtMLGNBQUM7SUFBRCxDQUFDLENBcEo0QixLQUFLLEdBb0pqQztJQXBKWSw2QkFBTyxVQW9KbkI7QUFDTCxDQUFDLEVBN3pDZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQTZ6Q3JDIiwiZmlsZSI6Ii9waHlzaWNzL2N1YmlzbXBoeXNpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9waHlzaWNzL2N1YmlzbXBoeXNpY3MudHNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAg44Ot44Kw5Ye65Yqb6Zai5pWw44Gu6Kit5a6aXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vLS0tLS0tLS0tLSDjg63jgrDlh7rlipvjg6zjg5njg6sg6YG45oqe6aCF55uuIOWumue+qSAtLS0tLS0tLS0tXG4vLy8g6Kmz57Sw44Ot44Kw5Ye65Yqb6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9WRVJCT1NFOiBudW1iZXIgPSAwO1xuLy8vIOODh+ODkOODg+OCsOODreOCsOWHuuWKm+ioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfREVCVUc6IG51bWJlciA9IDE7XG4vLy8gSW5mb+ODreOCsOWHuuWKm+ioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfSU5GTzogbnVtYmVyID0gMjtcbi8vLyDorablkYrjg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX1dBUk5JTkc6IG51bWJlciA9IDM7XG4vLy8g44Ko44Op44O844Ot44Kw5Ye65Yqb6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9FUlJPUjogbnVtYmVyID0gNDtcbi8vLyDjg63jgrDlh7rlipvjgqrjg5XoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX09GRjogbnVtYmVyID0gNTtcblxuLyoqXG4qIOODreOCsOWHuuWKm+ODrOODmeODq+ioreWumuOAglxuKlxuKiDlvLfliLbnmoTjgavjg63jgrDlh7rlipvjg6zjg5njg6vjgpLlpInjgYjjgovmmYLjgavlrprnvqnjgpLmnInlirnjgavjgZnjgovjgIJcbiogQ1NNX0xPR19MRVZFTF9WRVJCT1NFIO+9niBDU01fTE9HX0xFVkVMX09GRiDjgpLpgbjmip7jgZnjgovjgIJcbiovXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTDogbnVtYmVyID0gQ1NNX0xPR19MRVZFTF9WRVJCT1NFO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3Ntc3RyaW5nfSBmcm9tIFwiLi4vdHlwZS9jc21zdHJpbmdcIjtcbmltcG9ydCBjc21TdHJpbmcgPSBjc21zdHJpbmcuY3NtU3RyaW5nO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIOODkeODqeODoeODvOOCv+WQjeODu+ODkeODvOODhOWQjeODu0RyYXdhYmxl5ZCN44KS5L+d5oyBXG4gICAgICpcbiAgICAgKiDjg5Hjg6njg6Hjg7zjgr/lkI3jg7vjg5Hjg7zjg4TlkI3jg7tEcmF3YWJsZeWQjeOCkuS/neaMgeOBmeOCi+OCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21JZFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKCk6IGNzbVN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IHN0cmluZyB8IGNzbVN0cmluZylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodHlwZW9mKGlkKSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5faWQgPSBuZXcgY3NtU3RyaW5nKGlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogaWTjgpLmr5TovINcbiAgICAgICAgICogQHBhcmFtIGMg5q+U6LyD44GZ44KLaWRcbiAgICAgICAgICogQHJldHVybiDlkIzjgZjjgarjgonjgbB0cnVlLOeVsOOBquOBo+OBpuOBhOOCjOOBsGZhbHNl44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFcXVhbChjOiBzdHJpbmcgfCBjc21TdHJpbmcgfCBDdWJpc21JZCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHR5cGVvZihjKSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkLmlzRXF1YWwoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgQ3ViaXNtSWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkLmlzRXF1YWwoYy5faWQucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogaWTjgpLmr5TovINcbiAgICAgICAgICogQHBhcmFtIGMg5q+U6LyD44GZ44KLaWRcbiAgICAgICAgICogQHJldHVybiDlkIzjgZjjgarjgonjgbB0cnVlLOeVsOOBquOBo+OBpuOBhOOCjOOBsGZhbHNl44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOb3RFcXVhbChjOiBzdHJpbmcgfCBjc21TdHJpbmcgfCBDdWJpc21JZCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHR5cGVvZihjKSA9PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5faWQuaXNFcXVhbChjLnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIEN1YmlzbUlkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5faWQuaXNFcXVhbChjLl9pZC5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX2lkOiBjc21TdHJpbmc7IC8vIElE5ZCNXG4gICAgfVxuXG4gICAgZXhwb3J0IGRlY2xhcmUgdHlwZSBDdWJpc21JZEhhbmRsZSA9IEN1YmlzbUlkO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tIFwiLi4vdHlwZS9jc212ZWN0b3JcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkfSBmcm9tIFwiLi9jdWJpc21pZFwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3Ntc3RyaW5nfSBmcm9tIFwiLi4vdHlwZS9jc21zdHJpbmdcIjtcbmltcG9ydCBjc21TdHJpbmcgPSBjc21zdHJpbmcuY3NtU3RyaW5nO1xuaW1wb3J0IEN1YmlzbUlkID0gY3ViaXNtaWQuQ3ViaXNtSWQ7XG5pbXBvcnQgY3NtVmVjdG9yID0gY3NtdmVjdG9yLmNzbVZlY3RvcjtcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiBJROWQjeOBrueuoeeQhlxuICAgICAqXG4gICAgICogSUTlkI3jgpLnrqHnkIbjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtSWRNYW5hZ2VyXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pZHMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbUlkPigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9pZHMuZ2V0U2l6ZSgpOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5faWRzLnNldChpLCB2b2lkIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWRzID0gIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgpLjg6rjgrnjg4jjgYvjgonnmbvpjLJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGlkcyBJROWQjeODquOCueODiFxuICAgICAgICAgKiBAcGFyYW0gY291bnQgSUTjga7lgIvmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWdpc3RlcklkcyhpZHM6IHN0cmluZ1tdIHwgY3NtU3RyaW5nW10pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVySWQoaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOCkueZu+mMslxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaWQgSUTlkI1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWdpc3RlcklkKGlkOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBDdWJpc21JZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBDdWJpc21JZCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YoaWQpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICgocmVzdWx0ID0gdGhpcy5maW5kSWQoaWQpKSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgQ3ViaXNtSWQoaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lkcy5wdXNoQmFjayhyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVySWQoaWQucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgYvjgolJROOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaWQgSUTlkI1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRJZChpZDogY3NtU3RyaW5nIHwgc3RyaW5nKTogQ3ViaXNtSWRcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJJZChpZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgYvjgolJROOBrueiuuiqjVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFeGlzdChpZDogY3NtU3RyaW5nIHwgc3RyaW5nKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mKGlkKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuZmluZElkKGlkKSAhPSBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRXhpc3QoaWQucyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgYvjgolJROOCkuaknOe0ouOBmeOCi+OAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaWQgSUTlkI1cbiAgICAgICAgICogQHJldHVybiDnmbvpjLLjgZXjgozjgabjgYTjgotJROOAguOBquOBkeOCjOOBsE5VTEzjgIJcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgZmluZElkKGlkOiBzdHJpbmcpOiBDdWJpc21JZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9pZHMuZ2V0U2l6ZSgpOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5faWRzLmF0KGkpLmdldFN0cmluZygpLmlzRXF1YWwoaWQpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkcy5hdChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfaWRzOiBjc21WZWN0b3I8Q3ViaXNtSWQ+OyAgIC8vIOeZu+mMsuOBleOCjOOBpuOBhOOCi0lE44Gu44Oq44K544OIXG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvcmUvbGl2ZTJkY3ViaXNtY29yZS5kLnRzXCIgLz5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWpzb259IGZyb20gXCIuL3V0aWxzL2N1YmlzbWpzb25cIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkbWFuYWdlcn0gZnJvbSBcIi4vaWQvY3ViaXNtaWRtYW5hZ2VyXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21yZW5kZXJlcn0gZnJvbSBcIi4vcmVuZGVyaW5nL2N1YmlzbXJlbmRlcmVyXCI7XG5pbXBvcnQge0N1YmlzbUxvZ0luZm8sIEN1YmlzbUxvZ1dhcm5pbmcsIENTTV9BU1NFUlR9IGZyb20gXCIuL3V0aWxzL2N1YmlzbWRlYnVnXCI7XG5pbXBvcnQgVmFsdWUgPSBjdWJpc21qc29uLlZhbHVlO1xuaW1wb3J0IEN1YmlzbUlkTWFuYWdlciA9IGN1YmlzbWlkbWFuYWdlci5DdWJpc21JZE1hbmFnZXI7XG5pbXBvcnQgQ3ViaXNtUmVuZGVyZXIgPSBjdWJpc21yZW5kZXJlci5DdWJpc21SZW5kZXJlcjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cnRvZChzOiBzdHJpbmcsIGVuZFB0cjogc3RyaW5nW10pOiBudW1iZXJcbntcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XG4gICAgZm9yKGxldCBpOiBudW1iZXIgPSAxOyA7IGkrKylcbiAgICB7XG4gICAgICAgIGxldCB0ZXN0Qzogc3RyaW5nID0gcy5zbGljZShpIC0gMSwgaSk7XG5cbiAgICAgICAgLy8g5oyH5pWw44O744Oe44Kk44OK44K544Gu5Y+v6IO95oCn44GM44GC44KL44Gu44Gn44K544Kt44OD44OX44GZ44KLXG4gICAgICAgIGlmKHRlc3RDPT0nZScgfHwgdGVzdEM9PSctJyB8fCB0ZXN0QyA9PSAnRScpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbuOAgOOAgOOAgCAgLy8g5paH5a2X5YiX44Gu56+E5Zuy44KS5bqD44GS44Gm44GE44GPXG4gICAgICAgIGxldCB0ZXN0OiBzdHJpbmcgPSBzLnN1YnN0cmluZygwLCBpKTtcbiAgICAgICAgbGV0IG51bWJlcjogbnVtYmVyID0gTnVtYmVyKHRlc3QpO1xuICAgICAgICBpZihpc05hTihudW1iZXIpKVxuICAgICAgICB7XG7jgIDjgIDjgIDjgIAgICAgLy8g5pWw5YCk44Go44GX44Gm6KqN6K2Y44Gn44GN44Gq44GP44Gq44Gj44Gf44Gu44Gn57WC5LqGXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG7jgIDjgIDjgIAgLy8g5pyA5b6M44Gr5pWw5YCk44Go44GX44Gm44Gn44GN44GfaW5kZXjjgpLmoLzntI3jgZfjgabjgYrjgY9cbiAgICAgICAgaW5kZXggPSBpO1xuICAgIH1cbiAgICBsZXQgZCA9IHBhcnNlRmxvYXQocyk7ICAvLyDjg5Hjg7zjgrnjgZfjgZ/mlbDlgKRcblxuICAgIGlmKGlzTmFOKGQpKVxuICAgIHtcbuOAgOOAgOOAgOOAgCAvLyDmlbDlgKTjgajjgZfjgaboqo3orZjjgafjgY3jgarjgY/jgarjgaPjgZ/jga7jgafntYLkuoZcbiAgICAgICAgZCA9IE5hTjtcbiAgICB9XG5cbiAgICBlbmRQdHJbMF0gPSBzLnNsaWNlKGluZGV4KTvjgIAvLyDlvozntprjga7mloflrZfliJdcblxuICAgIHJldHVybiBkO1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8vIOODleOCoeOCpOODq+OCueOCs+ODvOODl+OBruWkieaVsOOCkuWIneacn+WMllxuXG4gICAgbGV0IHNfaXNTdGFydGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IHNfaXNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBzX29wdGlvbjogT3B0aW9uID0gbnVsbDtcbiAgICBsZXQgc19jdWJpc21JZE1hbmFnZXI6IEN1YmlzbUlkTWFuYWdlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBGcmFtZXdvcmvlhoXjgafkvb/jgYblrprmlbDjga7lrqPoqIBcbiAgICAgKi9cbiAgICBleHBvcnQgbmFtZXNwYWNlIENvbnN0YW50XG4gICAge1xuICAgICAgICBleHBvcnQgY29uc3QgdmVydGV4T2Zmc2V0OiBudW1iZXIgPSAwOyAgICAgLy8g44Oh44OD44K344Ol6aCC54K544Gu44Kq44OV44K744OD44OI5YCkXG4gICAgICAgIGV4cG9ydCBjb25zdCB2ZXJ0ZXhTdGVwOiBudW1iZXIgPSAyOyAgICAgICAvLyDjg6Hjg4Pjgrfjg6XpoILngrnjga7jgrnjg4bjg4Pjg5flgKRcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gY3NtRGVsZXRlPFQ+KGFkZHJlc3M6IFQpOiB2b2lkXG4gICAge1xuICAgICAgICBpZighYWRkcmVzcylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkcmVzcyA9IHZvaWQgMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXZlMkQgQ3ViaXNtIFNESyBPcmlnaW5hbCBXb3JrZmxvdyBTREvjga7jgqjjg7Pjg4jjg6rjg53jgqTjg7Pjg4hcbiAgICAgKiDliKnnlKjplovlp4vmmYLjga9DdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp44KS5ZG844Gz44CBQ3ViaXNtRnJhbWV3b3JrLmRpc3Bvc2UoKeOBp+e1guS6huOBmeOCi+OAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21GcmFtZXdvcmtcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr44GuQVBJ44KS5L2/55So5Y+v6IO944Gr44GZ44KL44CCXG4gICAgICAgICAqICBBUEnjgpLlrp/ooYzjgZnjgovliY3jgavlv4XjgZrjgZPjga7plqLmlbDjgpLlrp/ooYzjgZnjgovjgZPjgajjgIJcbiAgICAgICAgICogIOS4gOW6pua6luWCmeOBjOWujOS6huOBl+OBpuS7pemZjeOBr+OAgeWGjeOBs+Wun+ihjOOBl+OBpuOCguWGhemDqOWHpueQhuOBjOOCueOCreODg+ODl+OBleOCjOOBvuOBmeOAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gICAgb3B0aW9uICAgICAgT3B0aW9u44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gICDmupblgpnlh6bnkIbjgYzlrozkuobjgZfjgZ/jgol0cnVl44GM6L+U44KK44G+44GZ44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIHN0YXJ0VXAob3B0aW9uOiBPcHRpb24gPSBudWxsKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZihzX2lzU3RhcnRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLnN0YXJ0VXAoKSBpcyBhbHJlYWR5IGRvbmUuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzX2lzU3RhcnRlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc19vcHRpb24gPSBvcHRpb247XG5cbiAgICAgICAgICAgIGlmKHNfb3B0aW9uICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgTGl2ZTJEQ3ViaXNtQ29yZS5Mb2dnaW5nLmNzbVNldExvZ0Z1bmN0aW9uKHNfb3B0aW9uLmxvZ0Z1bmN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc19pc1N0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBMaXZlMkQgQ3ViaXNtIENvcmXjg5Djg7zjgrjjg6fjg7Pmg4XloLHjgpLooajnpLpcbiAgICAgICAgICAgIGlmKHNfaXNTdGFydGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb246IG51bWJlciA9IExpdmUyREN1YmlzbUNvcmUuVmVyc2lvbi5jc21HZXRWZXJzaW9uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFqb3I6IG51bWJlciA9ICgodmVyc2lvbiAmIDB4RkYwMDAwMDApID4+IDI0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBtaW5vcjogbnVtYmVyID0gKCh2ZXJzaW9uICYgMHgwMEZGMDAwMCkgPj4gMTYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGNoOiBudW1iZXIgPSAoKHZlcnNpb24gJiAweDAwMDBGRkZGKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyc2lvbk51bWJlcjogbnVtYmVyID0gdmVyc2lvbjtcblxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oYExpdmUyRCBDdWJpc20gQ29yZSB2ZXJzaW9uOiB7MH0uezF9LnsyfSAoezN9KWAsXG4gICAgICAgICAgICAgICAgICAgICgnMDAnICsgbWFqb3IpLnNsaWNlKC0yKSxcbiAgICAgICAgICAgICAgICAgICAgKCcwMCcgKyBtaW5vcikuc2xpY2UoLTIpLFxuICAgICAgICAgICAgICAgICAgICAoJzAwMDAnICsgcGF0Y2gpLnNsaWNlKC00KSxcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbk51bWJlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuc3RhcnRVcCgpIGlzIGNvbXBsZXRlLlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNfaXNTdGFydGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXJ0VXAoKeOBp+WIneacn+WMluOBl+OBn0N1YmlzbUZyYW1ld29ya+OBruWQhOODkeODqeODoeODvOOCv+OCkuOCr+ODquOCouOBl+OBvuOBmeOAglxuICAgICAgICAgKiBEaXNwb3NlKCnjgZfjgZ9DdWJpc21GcmFtZXdvcmvjgpLlho3liKnnlKjjgZnjgovpmpvjgavliKnnlKjjgZfjgabjgY/jgaDjgZXjgYTjgIJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY2xlYW5VcCgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNfaXNTdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICBzX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNfb3B0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr5YaF44Gu44Oq44K944O844K544KS5Yid5pyf5YyW44GX44Gm44Oi44OH44Or44KS6KGo56S65Y+v6IO944Gq54q25oWL44Gr44GX44G+44GZ44CCPGJyPlxuICAgICAgICAgKiAgICAg5YaN5bqmSW5pdGlhbGl6ZSgp44GZ44KL44Gr44Gv5YWI44GrRGlzcG9zZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBDU01fQVNTRVJUKHNfaXNTdGFydGVkKTtcbiAgICAgICAgICAgIGlmKCFzX2lzU3RhcnRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrIGlzIG5vdCBzdGFydGVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLSBzX2lzSW5pdGlhbGl6ZWTjgavjgojjgovpgKPntprliJ3mnJ/ljJbjgqzjg7zjg4kgLS0tXG4gICAgICAgICAgICAvLyDpgKPntprjgZfjgabjg6rjgr3jg7zjgrnnorrkv53jgYzooYzjgo/jgozjgarjgYTjgojjgYbjgavjgZnjgovjgIJcbiAgICAgICAgICAgIC8vIOWGjeW6pkluaXRpYWxpemUoKeOBmeOCi+OBq+OBr+WFiOOBq0Rpc3Bvc2UoKeOCkuWun+ihjOOBmeOCi+W/heimgeOBjOOBguOCi+OAglxuICAgICAgICAgICAgaWYgKHNfaXNJbml0aWFsaXplZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKSBza2lwcGVkLCBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vLS0tLSBzdGF0aWMg5Yid5pyf5YyWIC0tLS1cbiAgICAgICAgICAgIFZhbHVlLnN0YXRpY0luaXRpYWxpemVOb3RGb3JDbGllbnRDYWxsKCk7XG5cbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyID0gbmV3IEN1YmlzbUlkTWFuYWdlcigpO1xuXG4gICAgICAgICAgICBzX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKSBpcyBjb21wbGV0ZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+WGheOBruWFqOOBpuOBruODquOCveODvOOCueOCkuino+aUvuOBl+OBvuOBmeOAglxuICAgICAgICAgKiAgICAgIOOBn+OBoOOBl+OAgeWklumDqOOBp+eiuuS/neOBleOCjOOBn+ODquOCveODvOOCueOBq+OBpOOBhOOBpuOBr+ino+aUvuOBl+OBvuOBm+OCk+OAglxuICAgICAgICAgKiAgICAgIOWklumDqOOBp+mBqeWIh+OBq+egtOajhOOBmeOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBkaXNwb3NlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgQ1NNX0FTU0VSVChzX2lzU3RhcnRlZCk7XG4gICAgICAgICAgICBpZighc19pc1N0YXJ0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yayBpcyBub3Qgc3RhcnRlZC5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0gc19pc0luaXRpYWxpemVk44Gr44KI44KL5pyq5Yid5pyf5YyW6Kej5pS+44Ks44O844OJIC0tLVxuICAgICAgICAgICAgLy8gZGlzcG9zZSgp44GZ44KL44Gr44Gv5YWI44GraW5pdGlhbGl6ZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KL44CCXG4gICAgICAgICAgICBpZighc19pc0luaXRpYWxpemVkKSAgICAvLyBmYWxzZS4uLuODquOCveODvOOCueacqueiuuS/neOBruWgtOWQiFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgpIHNraXBwZWQsIG5vdCBpbml0aWFsaXplZC5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBWYWx1ZS5zdGF0aWNSZWxlYXNlTm90Rm9yQ2xpZW50Q2FsbCgpO1xuXG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlci5yZWxlYXNlKCk7XG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlciA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIOODrOODs+ODgOODqeOBrumdmeeahOODquOCveODvOOCue+8iOOCt+OCp+ODvOODgOODl+ODreOCsOODqeODoOS7lu+8ieOCkuino+aUvuOBmeOCi1xuICAgICAgICAgICAgQ3ViaXNtUmVuZGVyZXIuc3RhdGljUmVsZWFzZSgpO1xuXG4gICAgICAgICAgICBzX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCkgaXMgY29tcGxldGUuXCIpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+OBrkFQSeOCkuS9v+eUqOOBmeOCi+a6luWCmeOBjOWujOS6huOBl+OBn+OBi+OBqeOBhuOBi1xuICAgICAgICAgKiBAcmV0dXJuIEFQSeOCkuS9v+eUqOOBmeOCi+a6luWCmeOBjOWujOS6huOBl+OBpuOBhOOCjOOBsHRydWXjgYzov5Tjgorjgb7jgZnjgIJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNTdGFydGVkKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHNfaXNTdGFydGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga7jg6rjgr3jg7zjgrnliJ3mnJ/ljJbjgYzjgZnjgafjgavooYzjgo/jgozjgabjgYTjgovjgYvjganjgYbjgYtcbiAgICAgICAgICogQHJldHVybiDjg6rjgr3jg7zjgrnnorrkv53jgYzlrozkuobjgZfjgabjgYTjgozjgbB0cnVl44GM6L+U44KK44G+44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGlzSW5pdGlhbGl6ZWQoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gc19pc0luaXRpYWxpemVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvcmUgQVBJ44Gr44OQ44Kk44Oz44OJ44GX44Gf44Ot44Kw6Zai5pWw44KS5a6f6KGM44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcmFyYW0gbWVzc2FnZSDjg63jgrDjg6Hjg4Pjgrvjg7zjgrhcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY29yZUxvZ0Z1bmN0aW9uKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gUmV0dXJuIGlmIGxvZ2dpbmcgbm90IHBvc3NpYmxlLlxuICAgICAgICAgICAgaWYoIUxpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21HZXRMb2dGdW5jdGlvbigpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTGl2ZTJEQ3ViaXNtQ29yZS5Mb2dnaW5nLmNzbUdldExvZ0Z1bmN0aW9uKCkobWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu44Ot44Kw5Ye65Yqb44Os44OZ44Or6Kit5a6a44Gu5YCk44KS6L+U44GZ44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gIOePvuWcqOOBruODreOCsOWHuuWKm+ODrOODmeODq+ioreWumuOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRMb2dnaW5nTGV2ZWwoKTogTG9nTGV2ZWxcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHNfb3B0aW9uICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNfb3B0aW9uLmxvZ2dpbmdMZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBMb2dMZXZlbC5Mb2dMZXZlbF9PZmY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTjg57jg43jg7zjgrjjg6Pjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiBDdWJpc21NYW5hZ2Vy44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGdldElkTWFuYWdlcigpOiBDdWJpc21JZE1hbmFnZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHNfY3ViaXNtSWRNYW5hZ2VyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmdmeeahOOCr+ODqeOCueOBqOOBl+OBpuS9v+eUqOOBmeOCi1xuICAgICAgICAgKiDjgqTjg7Pjgrnjgr/jg7PjgrnljJbjgZXjgZvjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvblxue1xuICAgIGxvZ0Z1bmN0aW9uOiBMaXZlMkRDdWJpc21Db3JlLmNzbUxvZ0Z1bmN0aW9uOyAgIC8vIOODreOCsOWHuuWKm+OBrumWouaVsOOCquODluOCuOOCp+OCr+ODiFxuICAgIGxvZ2dpbmdMZXZlbDogTG9nTGV2ZWw7ICAvLyDjg63jgrDlh7rlipvjg6zjg5njg6vjga7oqK3lrppcbn1cblxuLyoqXG4gKiDjg63jgrDlh7rlipvjga7jg6zjg5njg6tcbiAqL1xuZXhwb3J0IGVudW0gTG9nTGV2ZWxcbntcbiAgICBMb2dMZXZlbF9WZXJib3NlID0gMCwgICAvLyDoqbPntLDjg63jgrBcbiAgICBMb2dMZXZlbF9EZWJ1ZywgICAgICAgICAvLyDjg4fjg5Djg4PjgrDjg63jgrBcbiAgICBMb2dMZXZlbF9JbmZvLCAgICAgICAgICAvLyBJbmZv44Ot44KwXG4gICAgTG9nTGV2ZWxfV2FybmluZywgICAgICAgLy8g6K2m5ZGK44Ot44KwXG4gICAgTG9nTGV2ZWxfRXJyb3IsICAgICAgICAgLy8g44Ko44Op44O844Ot44KwXG4gICAgTG9nTGV2ZWxfT2ZmICAgICAgICAgICAgLy8g44Ot44Kw5Ye65Yqb54Sh5Yq5XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc212ZWN0b3IyfSBmcm9tIFwiLi9jdWJpc212ZWN0b3IyXCI7XG5pbXBvcnQgQ3ViaXNtVmVjdG9yMiA9IGN1YmlzbXZlY3RvcjIuQ3ViaXNtVmVjdG9yMjtcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDmlbDlgKToqIjnrpfjgarjganjgavkvb/nlKjjgZnjgovjg6bjg7zjg4bjgqPjg6rjg4bjgqPjgq/jg6njgrlcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTWF0aFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOesrOS4gOW8leaVsOOBruWApOOCkuacgOWwj+WApOOBqOacgOWkp+WApOOBruevhOWbsuOBq+WPjuOCgeOBn+WApOOCkui/lOOBmVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg5Y+O44KB44KJ44KM44KL5YCkXG4gICAgICAgICAqIEBwYXJhbSBtaW4gICDnr4Tlm7Ljga7mnIDlsI/lgKRcbiAgICAgICAgICogQHBhcmFtIG1heCAgIOevhOWbsuOBruacgOWkp+WApFxuICAgICAgICAgKiBAcmV0dXJuIOacgOWwj+WApOOBqOacgOWkp+WApOOBruevhOWbsuOBq+WPjuOCgeOBn+WApFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHJhbmdlKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBtaW4pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtaW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG1heClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG1heDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCteOCpOODs+mWouaVsOOBruWApOOCkuaxguOCgeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geCDop5LluqblgKTvvIjjg6njgrjjgqLjg7PvvIlcbiAgICAgICAgICogQHJldHVybiDjgrXjgqTjg7PplqLmlbBzaW4oeCnjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBzaW4oeDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNpbih4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjgrXjgqTjg7PplqLmlbDjga7lgKTjgpLmsYLjgoHjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHgg6KeS5bqm5YCkKOODqeOCuOOCouODsylcbiAgICAgICAgICogQHJldHVybiDjgrPjgrXjgqTjg7PplqLmlbBjb3MoeCnjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBjb3MoeDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNvcyh4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlgKTjga7ntbblr77lgKTjgpLmsYLjgoHjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHgg57W25a++5YCk44KS5rGC44KB44KL5YCkXG4gICAgICAgICAqIEByZXR1cm4g5YCk44Gu57W25a++5YCkXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgYWJzKHg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hYnMoeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5bmz5pa55qC5KOODq+ODvOODiCnjgpLmsYLjgoHjgotcbiAgICAgICAgICogQHBhcmFtIHggLT4g5bmz5pa55qC544KS5rGC44KB44KL5YCkXG4gICAgICAgICAqIEByZXR1cm4g5YCk44Gu5bmz5pa55qC5XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgc3FydCh4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqTjg7zjgrjjg7PjgrDlh6bnkIbjgZXjgozjgZ/jgrXjgqTjg7PjgpLmsYLjgoHjgotcbiAgICAgICAgICog44OV44Kn44O844OJ44Kk44Oz44O744Ki44Km44OI5pmC44Gu44Kk44O844K444Oz44Kw44Gr5Yip55So44Gn44GN44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDjgqTjg7zjgrjjg7PjgrDjgpLooYzjgYblgKRcbiAgICAgICAgICogQHJldHVybiDjgqTjg7zjgrjjg7PjgrDlh6bnkIbjgZXjgozjgZ/jgrXjgqTjg7PlgKRcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBnZXRFYXNpbmdTaW5lKHZhbHVlOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMC4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAwLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IDEuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMS4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gMC41IC0gMC41ICogdGhpcy5jb3ModmFsdWUgKiBNYXRoLlBJKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlpKfjgY3jgYTmlrnjga7lgKTjgpLov5TjgZlcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGxlZnQg5bem6L6644Gu5YCkXG4gICAgICAgICAqIEBwYXJhbSByaWdodCDlj7Povrrjga7lgKRcbiAgICAgICAgICogQHJldHVybiDlpKfjgY3jgYTmlrnjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBtYXgobGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAobGVmdCA+IHJpZ2h0KVxuICAgICAgICAgICAgICAgID8gbGVmdFxuICAgICAgICAgICAgICAgIDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5bCP44GV44GE5pa544Gu5YCk44KS6L+U44GZXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBsZWZ0ICDlt6bovrrjga7lgKRcbiAgICAgICAgICogQHBhcmFtIHJpZ2h0IOWPs+i+uuOBruWApOOAgFxuICAgICAgICAgKiBAcmV0dXJuIOWwj+OBleOBhOaWueOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIG1pbihsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIChsZWZ0ID4gcmlnaHQpXG4gICAgICAgICAgICAgICAgPyByaWdodFxuICAgICAgICAgICAgICAgIDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop5LluqblgKTjgpLjg6njgrjjgqLjg7PlgKTjgavlpInmj5vjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGRlZ3JlZXMgICDop5LluqblgKRcbiAgICAgICAgICogQHJldHVybiDop5LluqblgKTjgYvjgonlpInmj5vjgZfjgZ/jg6njgrjjgqLjg7PlgKRcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBkZWdyZWVzVG9SYWRpYW4oZGVncmVlczogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAoZGVncmVlcyAvIDE4MC4wKSAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Op44K444Ki44Oz5YCk44KS6KeS5bqm5YCk44Gr5aSJ5o+b44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSByYWRpYW4gICAg44Op44K444Ki44Oz5YCkXG4gICAgICAgICAqIEByZXR1cm4g44Op44K444Ki44Oz5YCk44GL44KJ5aSJ5o+b44GX44Gf6KeS5bqm5YCkXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgcmFkaWFuVG9EZWdyZWVzKHJhZGlhbjogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAocmFkaWFuICogMTgwLjApIC8gTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDvvJLjgaTjga7jg5njgq/jg4jjg6vjgYvjgonjg6njgrjjgqLjg7PlgKTjgpLmsYLjgoHjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGZyb20gIOWni+eCueODmeOCr+ODiOODq1xuICAgICAgICAgKiBAcGFyYW0gdG8gICAg57WC54K544OZ44Kv44OI44OrXG4gICAgICAgICAqIEByZXR1cm4g44Op44K444Ki44Oz5YCk44GL44KJ5rGC44KB44Gf5pa55ZCR44OZ44Kv44OI44OrXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZGlyZWN0aW9uVG9SYWRpYW4oZnJvbTogQ3ViaXNtVmVjdG9yMiwgdG86IEN1YmlzbVZlY3RvcjIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgcTE6IG51bWJlciA9IE1hdGguYXRhbjIodG8ueSwgdG8ueCk7XG4gICAgICAgICAgICBjb25zdCBxMjogbnVtYmVyID0gTWF0aC5hdGFuMihmcm9tLnksIGZyb20ueCk7XG5cbiAgICAgICAgICAgIGxldCByZXQ6IG51bWJlciA9IHExIC0gcTI7XG5cbiAgICAgICAgICAgIHdoaWxlKHJldCA8IC1NYXRoLlBJKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldCArPSBNYXRoLlBJICogMi4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aGlsZShyZXQgPiBNYXRoLlBJKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldCAtPSBNYXRoLlBJICogMi4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIO+8kuOBpOOBruODmeOCr+ODiOODq+OBi+OCieinkuW6puWApOOCkuaxguOCgeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZnJvbSAg5aeL54K544OZ44Kv44OI44OrXG4gICAgICAgICAqIEBwYXJhbSB0byAgICDntYLngrnjg5njgq/jg4jjg6tcbiAgICAgICAgICogQHJldHVybiDop5LluqblgKTjgYvjgonmsYLjgoHjgZ/mlrnlkJHjg5njgq/jg4jjg6tcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBkaXJlY3Rpb25Ub0RlZ3JlZXMoZnJvbTogQ3ViaXNtVmVjdG9yMiwgdG86IEN1YmlzbVZlY3RvcjIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgcmFkaWFuOiBudW1iZXIgPSB0aGlzLmRpcmVjdGlvblRvUmFkaWFuKGZyb20sIHRvKTtcbiAgICAgICAgICAgIGxldCBkZWdyZWU6IG51bWJlciA9IHRoaXMucmFkaWFuVG9EZWdyZWVzKHJhZGlhbik7XG5cbiAgICAgICAgICAgIGlmICgodG8ueCAtIGZyb20ueCkgPiAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGVncmVlID0gLWRlZ3JlZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZ3JlZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6njgrjjgqLjg7PlgKTjgpLmlrnlkJHjg5njgq/jg4jjg6vjgavlpInmj5vjgZnjgovjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHRvdGFsQW5nbGUgICAg44Op44K444Ki44Oz5YCkXG4gICAgICAgICAqIEByZXR1cm4g44Op44K444Ki44Oz5YCk44GL44KJ5aSJ5o+b44GX44Gf5pa55ZCR44OZ44Kv44OI44OrXG4gICAgICAgICAqL1xuXG4gICAgICAgICBzdGF0aWMgcmFkaWFuVG9EaXJlY3Rpb24odG90YWxBbmdsZTogbnVtYmVyKTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKCk7XG5cbiAgICAgICAgICAgIHJldC54ID0gdGhpcy5zaW4odG90YWxBbmdsZSk7XG4gICAgICAgICAgICByZXQueSA9IHRoaXMuY29zKHRvdGFsQW5nbGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgfVxuXG4gICAgICAgICAvKipcbiAgICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgICovXG4gICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcbiAgICAgICAgIHtcblxuICAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICogNHg044Gu6KGM5YiXXG4gICAgICpcbiAgICAgKiA0eDTooYzliJfjga7kvr/liKnjgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTWF0cml4NDRcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyID0gbmV3IEZsb2F0MzJBcnJheSgxNik7ICAgIC8vIDQgKiA044Gu44K144Kk44K6XG4gICAgICAgICAgICB0aGlzLmxvYWRJZGVudGl0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWPl+OBkeWPluOBo+OBn++8kuOBpOOBruihjOWIl+OBruS5l+eul+OCkuihjOOBhuOAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gYSDooYzliJdhXG4gICAgICAgICAqIEBwYXJhbSBiIOihjOWIl2JcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjga7ooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHkoYTogRmxvYXQzMkFycmF5LCBiOiBGbG9hdDMyQXJyYXksIGRzdDogRmxvYXQzMkFycmF5KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgYzogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBuOiBudW1iZXIgPSA0O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgajogbnVtYmVyID0gMDsgaiA8IG47ICsrailcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgazogbnVtYmVyID0gMDsgayA8IG47ICsraylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY1tqICsgaSAqIDRdICs9IGFbayArIGkgKiA0XSAqIGJbaiArIGsgKiA0XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMTY7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSBjW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWNmOS9jeihjOWIl+OBq+WIneacn+WMluOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGxvYWRJZGVudGl0eSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMS4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMS4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRNYXRyaXgoYyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGM5YiX44KS6Kit5a6aXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB0ciAxNuWAi+OBrua1ruWLleWwj+aVsOeCueaVsOOBp+ihqOOBleOCjOOCizR4NOOBruihjOWIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldE1hdHJpeCh0cjogRmxvYXQzMkFycmF5KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTY7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cltpXSA9IHRyW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihjOWIl+OCkua1ruWLleWwj+aVsOeCueaVsOOBrumFjeWIl+OBp+WPluW+l1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIDE25YCL44Gu5rWu5YuV5bCP5pWw54K55pWw44Gn6KGo44GV44KM44KLNHg044Gu6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0QXJyYXkoKTogRmxvYXQzMkFycmF5XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu5ouh5aSn546H44KS5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gWOi7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNjYWxlWCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7mi6HlpKfnjofjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBZ6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2NhbGVZKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbNV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBruenu+WLlemHj+OCkuWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIFjou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRUcmFuc2xhdGVYKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7np7vli5Xph4/jgpLlj5blvpdcbiAgICAgICAgICogQHJldHVybiBZ6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VHJhbnNsYXRlWSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzEzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6KiI566XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBzcmMgWOi7uOOBruWApFxuICAgICAgICAgKiBAcmV0dXJuIOePvuWcqOOBruihjOWIl+OBp+ioiOeul+OBleOCjOOBn1jou7jjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2Zvcm1YKHNyYzogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clswXSAqIHNyYyArIHRoaXMuX3RyWzEyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6KiI566XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBzcmMgWei7uOOBruWApFxuICAgICAgICAgKiBAcmV0dXJu44CA54++5Zyo44Gu6KGM5YiX44Gn6KiI566X44GV44KM44GfWei7uOOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zZm9ybVkoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzVdICogc3JjICsgdGhpcy5fdHJbMTNdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafpgIboqIjnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnZlcnRUcmFuc2Zvcm1YKHNyYzogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAoc3JjIC0gdGhpcy5fdHJbMTJdKSAvIHRoaXMuX3RyWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafpgIboqIjnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnZlcnRUcmFuc2Zvcm1ZKHNyYzogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAoc3JjIC0gdGhpcy5fdHJbMTNdKSAvIHRoaXMuX3RyWzVdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkui1t+eCueOBq+OBl+OBpuenu+WLlVxuICAgICAgICAgKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLotbfngrnjgavjgZfjgabnm7jlr77nmoTjgavnp7vli5XjgZnjgovjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlUmVsYXRpdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB0cjE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAxLjAsICAgIDAuMCwgICAgMC4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMS4wLCAgICAwLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDEuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICB4LCAgICAgIHksICAgICAgMC4wLCAgICAxLjBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseSh0cjEsIHRoaXMuX3RyLCB0aGlzLl90cik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS56e75YuVXG4gICAgICAgICAqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqIEBwYXJhbSB5IHnou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEyXSA9IHg7XG4gICAgICAgICAgICB0aGlzLl90clsxM10gPSB5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrljou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVgoeDogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90clsxMl0gPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrlnou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVkoeTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90clsxM10gPSB5O1xuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5ouh5aSn546H44KS55u45a++55qE44Gr6Kit5a6a44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7mi6HlpKfnjodcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNjYWxlUmVsYXRpdmUoeDogbnVtYmVyLCB5Om51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHRyMTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHgsICAgICAgMC4wLCAgICAwLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICB5LCAgICAgIDAuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMS4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAwLjAsICAgIDEuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KHRyMSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7mi6HlpKfnjofjgpLmjIflrprjgZfjgZ/lgI3njofjgavoqK3lrprjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyWzBdID0geDtcbiAgICAgICAgICAgIHRoaXMuX3RyWzVdID0geTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjgavooYzliJfjgpLkuZfnrpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIG0g6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgbXVsdGlwbHlCeU1hdHJpeChtOiBDdWJpc21NYXRyaXg0NCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkobS5nZXRBcnJheSgpLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCquODluOCuOOCp+OCr+ODiOOBruOCs+ODlOODvOOCkueUn+aIkOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNsb25lKCk6IEN1YmlzbU1hdHJpeDQ0XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjbG9uZU1hdHJpeDogQ3ViaXNtTWF0cml4NDQgPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fdHIubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xvbmVNYXRyaXguX3RyW2ldID0gdGhpcy5fdHJbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZU1hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBfdHI6IEZsb2F0MzJBcnJheTsgICAgLy8gNHg06KGM5YiX44OH44O844K/XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiAy5qyh5YWD44OZ44Kv44OI44Or5Z6LXG4gICAgICpcbiAgICAgKiAy5qyh5YWD44OZ44Kv44OI44Or5Z6L44Gu5qmf6IO944KS5o+Q5L6b44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVZlY3RvcjJcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgeD86IG51bWJlciwgcHVibGljIHk/OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMueCA9ICh4ID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IDAuMFxuICAgICAgICAgICAgICAgIDogeDtcblxuICAgICAgICAgICAgdGhpcy55ID0gKHkgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gMC4wXG4gICAgICAgICAgICAgICAgOiB5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBruWKoOeul1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gdmVjdG9yMiDliqDnrpfjgZnjgovjg5njgq/jg4jjg6vlgKRcbiAgICAgICAgICogQHJldHVybiDliqDnrpfntZDmnpwg44OZ44Kv44OI44Or5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWRkKHZlY3RvcjI6IEN1YmlzbVZlY3RvcjIpOiBDdWJpc21WZWN0b3IyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XG4gICAgICAgICAgICByZXQueCA9IHRoaXMueCArIHZlY3RvcjIueDtcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55ICsgdmVjdG9yMi55O1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7muJvnrpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHZlY3RvcjIg5rib566X44GZ44KL44OZ44Kv44OI44Or5YCkXG4gICAgICAgICAqIEByZXR1cm4g5rib566X57WQ5p6cIOODmeOCr+ODiOODq+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN1YnN0cmFjdCh2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggLSB2ZWN0b3IyLng7XG4gICAgICAgICAgICByZXQueSA9IHRoaXMueSAtIHZlY3RvcjIueTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu5LmX566XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB2ZWN0b3IyIOS5l+eul+OBmeOCi+ODmeOCr+ODiOODq+WApFxuICAgICAgICAgKiBAcmV0dXJuIOS5l+eul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG11bHRpcGx5KHZlY3RvcjI6IEN1YmlzbVZlY3RvcjIpOiBDdWJpc21WZWN0b3IyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XG4gICAgICAgICAgICByZXQueCA9IHRoaXMueCAqIHZlY3RvcjIueDtcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55ICogdmVjdG9yMi55O1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7kuZfnrpco44K544Kr44Op44O8KVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gc2NhbGFyIOS5l+eul+OBmeOCi+OCueOCq+ODqeODvOWApFxuICAgICAgICAgKiBAcmV0dXJuIOS5l+eul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG11bHRpcGx5QnlTY2FsZXIoc2NhbGFyOiBudW1iZXIpOiBDdWJpc21WZWN0b3IyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG5ldyBDdWJpc21WZWN0b3IyKHNjYWxhciwgc2NhbGFyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6Zmk566XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB2ZWN0b3IyIOmZpOeul+OBmeOCi+ODmeOCr+ODiOODq+WApFxuICAgICAgICAgKiBAcmV0dXJuIOmZpOeul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGRpdmlzaW9uKHZlY3RvcjI6IEN1YmlzbVZlY3RvcjIpOiBDdWJpc21WZWN0b3IyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XG4gICAgICAgICAgICByZXQueCA9IHRoaXMueCAvIHZlY3RvcjIueDtcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55IC8gdmVjdG9yMi55O1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7pmaTnrpco44K544Kr44Op44O8KVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gc2NhbGFyIOmZpOeul+OBmeOCi+OCueOCq+ODqeODvOWApFxuICAgICAgICAgKiBAcmV0dXJuIOmZpOeul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGRpdmlzaW9uQnlTY2FsYXIoc2NhbGFyOiBudW1iZXIpOiBDdWJpc21WZWN0b3IyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpdmlzaW9uKG5ldyBDdWJpc21WZWN0b3IyKHNjYWxhciwgc2NhbGFyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6ZW344GV44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4g44OZ44Kv44OI44Or44Gu6ZW344GVXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TGVuZ3RoKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6Led6Zui44Gu5Y+W5b6XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBhIOeCuVxuICAgICAgICAgKiBAcmV0dXJuIOODmeOCr+ODiOODq+OBrui3nembolxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldERpc3RhbmNlV2l0aChhOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoKCh0aGlzLnggLSBhLngpICogKHRoaXMueCAtIGEueCkpICsgKCh0aGlzLnkgLSBhLnkpICogKHRoaXMueSAtIGEueSkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4njg4Pjg4jnqY3jga7oqIjnrpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGEg5YCkXG4gICAgICAgICAqIEByZXR1cm4g57WQ5p6cXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZG90KGE6IEN1YmlzbVZlY3RvcjIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnggKiBhLngpICsgKHRoaXMueSAqIGEueSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5q2j6KaP5YyW44Gu6YGp55SoXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgbm9ybWFsaXplKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoOiBudW1iZXIgPSBNYXRoLnBvdygodGhpcy54ICogdGhpcy54KSArICh0aGlzLnkgKiB0aGlzLnkpLCAwLjUpO1xuXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggLyBsZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgLyBsZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog562J44GX44GV44Gu56K66KqN77yI562J44GX44GE44GL77yf77yJXG4gICAgICAgICAqXG4gICAgICAgICAqIOWApOOBjOetieOBl+OBhOOBi++8n1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gcmhzIOeiuuiqjeOBmeOCi+WApFxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5YCk44Gv562J44GX44GEXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5YCk44Gv562J44GX44GP44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFcXVhbChyaHM6IEN1YmlzbVZlY3RvcjIpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy54ID09IHJocy54KSAmJiAodGhpcy55ID09IHJocy55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnrYnjgZfjgZXjga7norroqo3vvIjnrYnjgZfjgY/jgarjgYTjgYvvvJ/vvIlcbiAgICAgICAgICpcbiAgICAgICAgICog5YCk44GM562J44GX44GP44Gq44GE44GL77yfXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSByaHMg56K66KqN44GZ44KL5YCkXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlgKTjga/nrYnjgZfjgY/jgarjgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDlgKTjga/nrYnjgZfjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc05vdEVxdWFsKHJoczogQ3ViaXNtVmVjdG9yMik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICEodGhpcy5pc0VxdWFsKHJocykpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtcGh5c2ljc2ludGVybmFsfSBmcm9tICcuL2N1YmlzbXBoeXNpY3NpbnRlcm5hbCc7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tb2RlbH0gZnJvbSAnLi4vbW9kZWwvY3ViaXNtbW9kZWwnO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtdmVjdG9yMn0gZnJvbSAnLi4vbWF0aC9jdWJpc212ZWN0b3IyJztcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1hdGh9IGZyb20gJy4uL21hdGgvY3ViaXNtbWF0aCc7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21waHlzaWNzanNvbn0gZnJvbSAnLi9jdWJpc21waHlzaWNzanNvbic7XG5pbXBvcnQgQ3ViaXNtUGh5c2ljc0pzb24gPSBjdWJpc21waHlzaWNzanNvbi5DdWJpc21QaHlzaWNzSnNvbjtcbmltcG9ydCBDdWJpc21NYXRoID0gY3ViaXNtbWF0aC5DdWJpc21NYXRoO1xuaW1wb3J0IEN1YmlzbVBoeXNpY3NSaWcgPSBjdWJpc21waHlzaWNzaW50ZXJuYWwuQ3ViaXNtUGh5c2ljc1JpZztcbmltcG9ydCBDdWJpc21QaHlzaWNzU3ViUmlnID0gY3ViaXNtcGh5c2ljc2ludGVybmFsLkN1YmlzbVBoeXNpY3NTdWJSaWc7XG5pbXBvcnQgQ3ViaXNtUGh5c2ljc0lucHV0ID0gY3ViaXNtcGh5c2ljc2ludGVybmFsLkN1YmlzbVBoeXNpY3NJbnB1dDtcbmltcG9ydCBDdWJpc21QaHlzaWNzT3V0cHV0ID0gY3ViaXNtcGh5c2ljc2ludGVybmFsLkN1YmlzbVBoeXNpY3NPdXRwdXQ7XG5pbXBvcnQgQ3ViaXNtUGh5c2ljc1BhcnRpY2xlID0gY3ViaXNtcGh5c2ljc2ludGVybmFsLkN1YmlzbVBoeXNpY3NQYXJ0aWNsZTtcbmltcG9ydCBDdWJpc21QaHlzaWNzU291cmNlID0gY3ViaXNtcGh5c2ljc2ludGVybmFsLkN1YmlzbVBoeXNpY3NTb3VyY2U7XG5pbXBvcnQgQ3ViaXNtUGh5c2ljc1RhcmdldFR5cGUgPSBjdWJpc21waHlzaWNzaW50ZXJuYWwuQ3ViaXNtUGh5c2ljc1RhcmdldFR5cGU7XG5pbXBvcnQgQ3ViaXNtUGh5c2ljc05vcm1hbGl6YXRpb24gPSBjdWJpc21waHlzaWNzaW50ZXJuYWwuQ3ViaXNtUGh5c2ljc05vcm1hbGl6YXRpb247XG5pbXBvcnQgQ3ViaXNtVmVjdG9yMiA9IGN1YmlzbXZlY3RvcjIuQ3ViaXNtVmVjdG9yMjtcbmltcG9ydCBDdWJpc21Nb2RlbCA9IGN1YmlzbW1vZGVsLkN1YmlzbU1vZGVsO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuXG4gICAgLy8vIHBoeXNpY3MgdHlwZXMgdGFncy5cbiAgICBjb25zdCBQaHlzaWNzVHlwZVRhZ1g6IHN0cmluZyA9IFwiWFwiO1xuICAgIGNvbnN0IFBoeXNpY3NUeXBlVGFnWTogc3RyaW5nID0gXCJZXCI7XG4gICAgY29uc3QgUGh5c2ljc1R5cGVUYWdBbmdsZTogc3RyaW5nID0gXCJBbmdsZVwiO1xuXG4gICAgLy8vIENvbnN0YW50IG9mIGFpciByZXNpc3RhbmNlLlxuICAgIGNvbnN0IEFpclJlc2lzdGFuY2U6IG51bWJlciA9IDUuMDtcblxuICAgIC8vLyBDb25zdGFudCBvZiBtYXhpbXVtIHdlaWdodCBvZiBpbnB1dCBhbmQgb3V0cHV0IHJhdGlvLlxuICAgIGNvbnN0IE1heGltdW1XZWlnaHQ6IG51bWJlciA9IDEwMC4wO1xuXG4gICAgLy8vIENvbnN0YW50IG9mIHRocmVzaG9sZCBvZiBtb3ZlbWVudC5cbiAgICBjb25zdCBNb3ZlbWVudFRocmVzaG9sZDogbnVtYmVyID0gMC4wMDE7XG5cbiAgICAvKipcbiAgICAgKiDniannkIbmvJTnrpfjgq/jg6njgrlcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtUGh5c2ljc1xuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCpOODs+OCueOCv+ODs+OCueOBruS9nOaIkFxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIHBoeXNpY3MzLmpzb27jgYzoqq3jgb/ovrzjgb7jgozjgabjgYTjgovjg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtIHNpemUgICAgICDjg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcbiAgICAgICAgICogQHJldHVybiDkvZzmiJDjgZXjgozjgZ/jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGJ1ZmZlcjogQXJyYXlCdWZmZXIsIHNpemU6IG51bWJlcik6IEN1YmlzbVBoeXNpY3NcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtUGh5c2ljcyA9IG5ldyBDdWJpc21QaHlzaWNzKCk7XG5cbiAgICAgICAgICAgIHJldC5wYXJzZShidWZmZXIsIHNpemUpO1xuICAgICAgICAgICAgcmV0Ll9waHlzaWNzUmlnLmdyYXZpdHkueSA9IDA7XG5cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kk44Oz44K544K/44Oz44K544KS56C05qOE44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBwaHlzaWNzIOegtOajhOOBmeOCi+OCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBkZWxldGUocGh5c2ljczogQ3ViaXNtUGh5c2ljcyk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYocGh5c2ljcyAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBoeXNpY3MucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIHBoeXNpY3MgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeJqeeQhua8lOeul+OBruipleS+oVxuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg54mp55CG5ryU566X44Gu57WQ5p6c44KS6YGp55So44GZ44KL44Oi44OH44OrXG4gICAgICAgICAqIEBwYXJhbSBkZWx0YVRpbWVTZWNvbmRzIOODh+ODq+OCv+aZgumWk1vnp5JdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXZhbHVhdGUobW9kZWw6IEN1YmlzbU1vZGVsLCBkZWx0YVRpbWVTZWNvbmRzOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB0b3RhbEFuZ2xlOiB7YW5nbGU6IG51bWJlcn07XG4gICAgICAgICAgICBsZXQgd2VpZ2h0OiBudW1iZXI7XG4gICAgICAgICAgICBsZXQgcmFkQW5nbGU6IG51bWJlcjtcbiAgICAgICAgICAgIGxldCBvdXRwdXRWYWx1ZTogbnVtYmVyO1xuICAgICAgICAgICAgbGV0IHRvdGFsVHJhbnNsYXRpb246IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTZXR0aW5nOiBDdWJpc21QaHlzaWNzU3ViUmlnO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbnB1dDogQ3ViaXNtUGh5c2ljc0lucHV0W107XG4gICAgICAgICAgICBsZXQgY3VycmVudE91dHB1dDogQ3ViaXNtUGh5c2ljc091dHB1dFtdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRQYXJ0aWNsZXM6IEN1YmlzbVBoeXNpY3NQYXJ0aWNsZVtdO1xuXG4gICAgICAgICAgICBsZXQgcGFyYW1ldGVyVmFsdWU6IEZsb2F0MzJBcnJheTtcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJNYXhpbXVtVmFsdWU6IEZsb2F0MzJBcnJheTtcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJNaW5pbXVtVmFsdWU6IEZsb2F0MzJBcnJheTtcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJEZWZhdWx0VmFsdWU6IEZsb2F0MzJBcnJheTtcblxuICAgICAgICAgICAgcGFyYW1ldGVyVmFsdWUgPSBtb2RlbC5nZXRNb2RlbCgpLnBhcmFtZXRlcnMudmFsdWVzO1xuICAgICAgICAgICAgcGFyYW1ldGVyTWF4aW11bVZhbHVlID0gbW9kZWwuZ2V0TW9kZWwoKS5wYXJhbWV0ZXJzLm1heGltdW1WYWx1ZXM7XG4gICAgICAgICAgICBwYXJhbWV0ZXJNaW5pbXVtVmFsdWUgPSBtb2RlbC5nZXRNb2RlbCgpLnBhcmFtZXRlcnMubWluaW11bVZhbHVlcztcbiAgICAgICAgICAgIHBhcmFtZXRlckRlZmF1bHRWYWx1ZSA9IG1vZGVsLmdldE1vZGVsKCkucGFyYW1ldGVycy5kZWZhdWx0VmFsdWVzO1xuXG4gICAgICAgICAgICBmb3IobGV0IHNldHRpbmdJbmRleDogbnVtYmVyID0gMDsgc2V0dGluZ0luZGV4IDwgdGhpcy5fcGh5c2ljc1JpZy5zdWJSaWdDb3VudDsgKytzZXR0aW5nSW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG90YWxBbmdsZSA9IHthbmdsZTogMC4wfTtcbiAgICAgICAgICAgICAgICB0b3RhbFRyYW5zbGF0aW9uLnggPSAwLjA7XG4gICAgICAgICAgICAgICAgdG90YWxUcmFuc2xhdGlvbi55ID0gMC4wO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTZXR0aW5nID0gdGhpcy5fcGh5c2ljc1JpZy5zZXR0aW5ncy5hdChzZXR0aW5nSW5kZXgpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbnB1dCA9IHRoaXMuX3BoeXNpY3NSaWcuaW5wdXRzLmdldChjdXJyZW50U2V0dGluZy5iYXNlSW5wdXRJbmRleCk7XG4gICAgICAgICAgICAgICAgY3VycmVudE91dHB1dCA9IHRoaXMuX3BoeXNpY3NSaWcub3V0cHV0cy5nZXQoY3VycmVudFNldHRpbmcuYmFzZU91dHB1dEluZGV4KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFydGljbGVzID0gdGhpcy5fcGh5c2ljc1JpZy5wYXJ0aWNsZXMuZ2V0KGN1cnJlbnRTZXR0aW5nLmJhc2VQYXJ0aWNsZUluZGV4KTtcblxuICAgICAgICAgICAgICAgIC8vIExvYWQgaW5wdXQgcGFyYW1ldGVyc1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGN1cnJlbnRTZXR0aW5nLmlucHV0Q291bnQ7ICsraSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHdlaWdodCA9IGN1cnJlbnRJbnB1dFtpXS53ZWlnaHQgLyBNYXhpbXVtV2VpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRJbnB1dFtpXS5zb3VyY2VQYXJhbWV0ZXJJbmRleCA9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudElucHV0W2ldLnNvdXJjZVBhcmFtZXRlckluZGV4ID0gbW9kZWwuZ2V0UGFyYW1ldGVySW5kZXgoY3VycmVudElucHV0W2ldLnNvdXJjZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5wdXRbaV0uZ2V0Tm9ybWFsaXplZFBhcmFtZXRlclZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxUcmFuc2xhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQW5nbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJWYWx1ZVtjdXJyZW50SW5wdXRbaV0uc291cmNlUGFyYW1ldGVySW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyTWluaW11bVZhbHVlW2N1cnJlbnRJbnB1dFtpXS5zb3VyY2VQYXJhbWV0ZXJJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJNYXhpbXVtVmFsdWVbY3VycmVudElucHV0W2ldLnNvdXJjZVBhcmFtZXRlckluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlckRlZmF1bHRWYWx1ZVtjdXJyZW50SW5wdXRbaV0uc291cmNlUGFyYW1ldGVySW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNldHRpbmcubm9ybWFsaXphdGlvblBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNldHRpbmcubm9ybWFsaXphdGlvbkFuZ2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudElucHV0WzBdLnJlZmxlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByYWRBbmdsZSA9IEN1YmlzbU1hdGguZGVncmVlc1RvUmFkaWFuKC10b3RhbEFuZ2xlLmFuZ2xlKTtcblxuICAgICAgICAgICAgICAgIHRvdGFsVHJhbnNsYXRpb24ueCA9ICh0b3RhbFRyYW5zbGF0aW9uLnggKiBDdWJpc21NYXRoLmNvcyhyYWRBbmdsZSkgLSB0b3RhbFRyYW5zbGF0aW9uLnkgKiBDdWJpc21NYXRoLnNpbihyYWRBbmdsZSkpO1xuICAgICAgICAgICAgICAgIHRvdGFsVHJhbnNsYXRpb24ueSA9ICh0b3RhbFRyYW5zbGF0aW9uLnggKiBDdWJpc21NYXRoLnNpbihyYWRBbmdsZSkgKyB0b3RhbFRyYW5zbGF0aW9uLnkgKiBDdWJpc21NYXRoLmNvcyhyYWRBbmdsZSkpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHBhcnRpY2xlcyBwb3NpdGlvbi5cbiAgICAgICAgICAgICAgICB1cGRhdGVQYXJ0aWNsZXMoXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYXJ0aWNsZXMsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZXR0aW5nLnBhcnRpY2xlQ291bnQsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsVHJhbnNsYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQW5nbGUuYW5nbGUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMud2luZCxcbiAgICAgICAgICAgICAgICAgICAgTW92ZW1lbnRUaHJlc2hvbGQgKiBjdXJyZW50U2V0dGluZy5ub3JtYWxpemF0aW9uUG9zaXRpb24ubWF4aW11bSxcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFUaW1lU2Vjb25kcyxcbiAgICAgICAgICAgICAgICAgICAgQWlyUmVzaXN0YW5jZVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgb3V0cHV0IHBhcmFtZXRlcnMuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGN1cnJlbnRTZXR0aW5nLm91dHB1dENvdW50OyArK2kpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFydGljbGVJbmRleCA9IGN1cnJlbnRPdXRwdXRbaV0udmVydGV4SW5kZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYocGFydGljbGVJbmRleCA8IDEgfHwgcGFydGljbGVJbmRleCA+PSBjdXJyZW50U2V0dGluZy5wYXJ0aWNsZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRPdXRwdXRbaV0uZGVzdGluYXRpb25QYXJhbWV0ZXJJbmRleCA9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE91dHB1dFtpXS5kZXN0aW5hdGlvblBhcmFtZXRlckluZGV4ID0gbW9kZWwuZ2V0UGFyYW1ldGVySW5kZXgoY3VycmVudE91dHB1dFtpXS5kZXN0aW5hdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRpb246IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbi54ID0gY3VycmVudFBhcnRpY2xlc1twYXJ0aWNsZUluZGV4XS5wb3NpdGlvbi54IC0gY3VycmVudFBhcnRpY2xlc1twYXJ0aWNsZUluZGV4IC0gMV0ucG9zaXRpb24ueDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb24ueSA9IGN1cnJlbnRQYXJ0aWNsZXNbcGFydGljbGVJbmRleF0ucG9zaXRpb24ueSAtIGN1cnJlbnRQYXJ0aWNsZXNbcGFydGljbGVJbmRleCAtIDFdLnBvc2l0aW9uLnk7XG5cbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0VmFsdWUgPSBjdXJyZW50T3V0cHV0W2ldLmdldFZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFydGljbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPdXRwdXRbaV0ucmVmbGVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuZ3Jhdml0eVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXN0aW5hdGlvblBhcmFtZXRlckluZGV4OiBudW1iZXIgPSBjdXJyZW50T3V0cHV0W2ldLmRlc3RpbmF0aW9uUGFyYW1ldGVySW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvdXRQYXJhbWV0ZXJWYWx1ZTogRmxvYXQzMkFycmF5ID0gKCFGbG9hdDMyQXJyYXkucHJvdG90eXBlLnNsaWNlICYmICdzdWJhcnJheScgaW4gRmxvYXQzMkFycmF5LnByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwYXJhbWV0ZXJWYWx1ZS5zdWJhcnJheShkZXN0aW5hdGlvblBhcmFtZXRlckluZGV4KSkpIC8vIOWApOa4oeOBl+OBmeOCi+OBn+OCgeOAgUpTT04ucGFyc2UsIEpTT04uc3RyaW5naWZ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhcmFtZXRlclZhbHVlLnNsaWNlKGRlc3RpbmF0aW9uUGFyYW1ldGVySW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU91dHB1dFBhcmFtZXRlclZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0UGFyYW1ldGVyVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJNaW5pbXVtVmFsdWVbZGVzdGluYXRpb25QYXJhbWV0ZXJJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJNYXhpbXVtVmFsdWVbZGVzdGluYXRpb25QYXJhbWV0ZXJJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPdXRwdXRbaV1cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDlgKTjgpLlj43mmKBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBvZmZzZXQ6IG51bWJlciA9IGRlc3RpbmF0aW9uUGFyYW1ldGVySW5kZXgsIG91dFBhcmFtSW5kZXg6IG51bWJlciA9IDA7IG9mZnNldCA8IHBhcmFtZXRlclZhbHVlLmxlbmd0aDsgb2Zmc2V0KyssIG91dFBhcmFtSW5kZXgrKylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyVmFsdWVbb2Zmc2V0XSA9IG91dFBhcmFtZXRlclZhbHVlW291dFBhcmFtSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCquODl+OCt+ODp+ODs+OBruioreWumlxuICAgICAgICAgKiBAcGFyYW0gb3B0aW9ucyDjgqrjg5fjgrfjg6fjg7NcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRPcHRpb25zKG9wdGlvbnM6IE9wdGlvbnMpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCquODl+OCt+ODp+ODs+OBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOOCquODl+OCt+ODp+ODs1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE9wdGlvbigpOiBPcHRpb25zXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5ncmF2aXR5LnkgPSAtMS4wO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5ncmF2aXR5LnggPSAwO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy53aW5kLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy53aW5kLnkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnID0gdm9pZCAwO1xuICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogcGh5c2ljczMuanNvbuOCkuODkeODvOOCueOBmeOCi+OAglxuICAgICAgICAgKiBAcGFyYW0gcGh5c2ljc0pzb24gcGh5c2ljczMuanNvbuOBjOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDjg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwYXJzZShwaHlzaWNzSnNvbjogQXJyYXlCdWZmZXIsIHNpemU6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZyA9IG5ldyBDdWJpc21QaHlzaWNzUmlnKCk7XG5cbiAgICAgICAgICAgIGxldCBqc29uOiBDdWJpc21QaHlzaWNzSnNvbiA9IG5ldyBDdWJpc21QaHlzaWNzSnNvbihwaHlzaWNzSnNvbiwgc2l6ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcuZ3Jhdml0eSA9IGpzb24uZ2V0R3Jhdml0eSgpO1xuICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZy53aW5kID0ganNvbi5nZXRXaW5kKCk7XG4gICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLnN1YlJpZ0NvdW50ID0ganNvbi5nZXRTdWJSaWdDb3VudCgpO1xuXG4gICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLnNldHRpbmdzLnVwZGF0ZVNpemUodGhpcy5fcGh5c2ljc1JpZy5zdWJSaWdDb3VudCwgQ3ViaXNtUGh5c2ljc1N1YlJpZywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLmlucHV0cy51cGRhdGVTaXplKGpzb24uZ2V0VG90YWxJbnB1dENvdW50KCksIEN1YmlzbVBoeXNpY3NJbnB1dCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLm91dHB1dHMudXBkYXRlU2l6ZShqc29uLmdldFRvdGFsT3V0cHV0Q291bnQoKSwgQ3ViaXNtUGh5c2ljc091dHB1dCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLnBhcnRpY2xlcy51cGRhdGVTaXplKGpzb24uZ2V0VmVydGV4Q291bnQoKSwgQ3ViaXNtUGh5c2ljc1BhcnRpY2xlLCB0cnVlKTtcblxuICAgICAgICAgICAgbGV0IGlucHV0SW5kZXg6IG51bWJlciA9IDAsIG91dHB1dEluZGV4OiBudW1iZXIgPSAwLCBwYXJ0aWNsZUluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9waHlzaWNzUmlnLnNldHRpbmdzLmdldFNpemUoKTsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcuc2V0dGluZ3MuYXQoaSkubm9ybWFsaXphdGlvblBvc2l0aW9uLm1pbmltdW0gPSBqc29uLmdldE5vcm1hbGl6YXRpb25Qb3NpdGlvbk1pbmltdW1WYWx1ZShpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLnNldHRpbmdzLmF0KGkpLm5vcm1hbGl6YXRpb25Qb3NpdGlvbi5tYXhpbXVtID0ganNvbi5nZXROb3JtYWxpemF0aW9uUG9zaXRpb25NYXhpbXVtVmFsdWUoaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZy5zZXR0aW5ncy5hdChpKS5ub3JtYWxpemF0aW9uUG9zaXRpb24uZGVmYWx1dCA9IGpzb24uZ2V0Tm9ybWFsaXphdGlvblBvc2l0aW9uRGVmYXVsdFZhbHVlKGkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZy5zZXR0aW5ncy5hdChpKS5ub3JtYWxpemF0aW9uQW5nbGUubWluaW11bSA9IGpzb24uZ2V0Tm9ybWFsaXphdGlvbkFuZ2xlTWluaW11bVZhbHVlKGkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcuc2V0dGluZ3MuYXQoaSkubm9ybWFsaXphdGlvbkFuZ2xlLm1heGltdW0gPSBqc29uLmdldE5vcm1hbGl6YXRpb25BbmdsZU1heGltdW1WYWx1ZShpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLnNldHRpbmdzLmF0KGkpLm5vcm1hbGl6YXRpb25BbmdsZS5kZWZhbHV0ID0ganNvbi5nZXROb3JtYWxpemF0aW9uQW5nbGVEZWZhdWx0VmFsdWUoaSk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbnB1dFxuICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcuc2V0dGluZ3MuYXQoaSkuaW5wdXRDb3VudCA9IGpzb24uZ2V0SW5wdXRDb3VudChpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLnNldHRpbmdzLmF0KGkpLmJhc2VJbnB1dEluZGV4ID0gaW5wdXRJbmRleDtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMuX3BoeXNpY3NSaWcuc2V0dGluZ3MuYXQoaSkuaW5wdXRDb3VudDsgKytqKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZy5pbnB1dHMuYXQoaW5wdXRJbmRleCArIGopLnNvdXJjZVBhcmFtZXRlckluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcuaW5wdXRzLmF0KGlucHV0SW5kZXggKyBqKS53ZWlnaHQgPSBqc29uLmdldElucHV0V2VpZ2h0KGksIGopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLmlucHV0cy5hdChpbnB1dEluZGV4ICsgaikucmVmbGVjdCA9IGpzb24uZ2V0SW5wdXRSZWZsZWN0KGksIGopO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGpzb24uZ2V0SW5wdXRUeXBlKGksIGopID09IFBoeXNpY3NUeXBlVGFnWClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZy5pbnB1dHMuYXQoaW5wdXRJbmRleCArIGopLnR5cGUgPSBDdWJpc21QaHlzaWNzU291cmNlLkN1YmlzbVBoeXNpY3NTb3VyY2VfWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcuaW5wdXRzLmF0KGlucHV0SW5kZXggKyBqKS5nZXROb3JtYWxpemVkUGFyYW1ldGVyVmFsdWUgPSBnZXRJbnB1dFRyYW5zbGF0aW9uWEZyb21Ob3JtYWxpemVkUGFyYW1ldGVyVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihqc29uLmdldElucHV0VHlwZShpLCBqKSA9PSBQaHlzaWNzVHlwZVRhZ1kpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcuaW5wdXRzLmF0KGlucHV0SW5kZXggKyBqKS50eXBlID0gQ3ViaXNtUGh5c2ljc1NvdXJjZS5DdWJpc21QaHlzaWNzU291cmNlX1k7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLmlucHV0cy5hdChpbnB1dEluZGV4ICsgaikuZ2V0Tm9ybWFsaXplZFBhcmFtZXRlclZhbHVlID0gZ2V0SW5wdXRUcmFuc2xhdGlvbllGcm9tTm9ybWFsaXplZFBhcmFtdGVyVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihqc29uLmdldElucHV0VHlwZShpLCBqKSA9PSBQaHlzaWNzVHlwZVRhZ0FuZ2xlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLmlucHV0cy5hdChpbnB1dEluZGV4ICsgaikudHlwZSA9IEN1YmlzbVBoeXNpY3NTb3VyY2UuQ3ViaXNtUGh5c2ljc1NvdXJjZV9BbmdsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcuaW5wdXRzLmF0KGlucHV0SW5kZXggKyBqKS5nZXROb3JtYWxpemVkUGFyYW1ldGVyVmFsdWUgPSBnZXRJbnB1dEFuZ2xlRnJvbU5vcm1hbGl6ZWRQYXJhbWV0ZXJWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcuaW5wdXRzLmF0KGlucHV0SW5kZXggKyBqKS5zb3VyY2UudGFyZ2V0VHlwZSA9IEN1YmlzbVBoeXNpY3NUYXJnZXRUeXBlLkN1YmlzbVBoeXNpY3NUYXJnZXRUeXBlX1BhcmFtZXRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZy5pbnB1dHMuYXQoaW5wdXRJbmRleCArIGopLnNvdXJjZS5pZCA9IGpzb24uZ2V0SW5wdXRTb3VyY2VJZChpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXRJbmRleCArPSB0aGlzLl9waHlzaWNzUmlnLnNldHRpbmdzLmF0KGkpLmlucHV0Q291bnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBPdXRwdXRcbiAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLnNldHRpbmdzLmF0KGkpLm91dHB1dENvdW50ID0ganNvbi5nZXRPdXRwdXRDb3VudChpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLnNldHRpbmdzLmF0KGkpLmJhc2VPdXRwdXRJbmRleCA9IG91dHB1dEluZGV4O1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5fcGh5c2ljc1JpZy5zZXR0aW5ncy5hdChpKS5vdXRwdXRDb3VudDsgKytqKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZy5vdXRwdXRzLmF0KG91dHB1dEluZGV4ICsgaikuZGVzdGluYXRpb25QYXJhbWV0ZXJJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLm91dHB1dHMuYXQob3V0cHV0SW5kZXggKyBqKS52ZXJ0ZXhJbmRleCA9IGpzb24uZ2V0T3V0cHV0VmVydGV4SW5kZXgoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcub3V0cHV0cy5hdChvdXRwdXRJbmRleCArIGopLmFuZ2xlU2NhbGUgPSBqc29uLmdldE91dHB1dEFuZ2xlU2NhbGUoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcub3V0cHV0cy5hdChvdXRwdXRJbmRleCArIGopLndlaWdodCA9IGpzb24uZ2V0T3V0cHV0V2VpZ2h0KGksIGopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLm91dHB1dHMuYXQob3V0cHV0SW5kZXggKyBqKS5kZXN0aW5hdGlvbi50YXJnZXRUeXBlID0gQ3ViaXNtUGh5c2ljc1RhcmdldFR5cGUuQ3ViaXNtUGh5c2ljc1RhcmdldFR5cGVfUGFyYW1ldGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcub3V0cHV0cy5hdChvdXRwdXRJbmRleCArIGopLmRlc3RpbmF0aW9uLmlkID0ganNvbi5nZXRPdXRwdXREZXN0aW5hdGlvbklkKGksIGopO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGpzb24uZ2V0T3V0cHV0VHlwZShpLCBqKSA9PSBQaHlzaWNzVHlwZVRhZ1gpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcub3V0cHV0cy5hdChvdXRwdXRJbmRleCArIGopLnR5cGUgPSBDdWJpc21QaHlzaWNzU291cmNlLkN1YmlzbVBoeXNpY3NTb3VyY2VfWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcub3V0cHV0cy5hdChvdXRwdXRJbmRleCArIGopLmdldFZhbHVlID0gZ2V0T3V0cHV0VHJhbnNsYXRpb25YO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZy5vdXRwdXRzLmF0KG91dHB1dEluZGV4ICsgaikuZ2V0U2NhbGUgPSBnZXRPdXRwdXRTY2FsZVRyYW5zbGF0aW9uWDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGpzb24uZ2V0T3V0cHV0VHlwZShpLCBqKSA9PSBQaHlzaWNzVHlwZVRhZ1kpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcub3V0cHV0cy5hdChvdXRwdXRJbmRleCArIGopLnR5cGUgPSBDdWJpc21QaHlzaWNzU291cmNlLkN1YmlzbVBoeXNpY3NTb3VyY2VfWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcub3V0cHV0cy5hdChvdXRwdXRJbmRleCArIGopLmdldFZhbHVlID0gZ2V0T3V0cHV0VHJhbnNsYXRpb25ZO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZy5vdXRwdXRzLmF0KG91dHB1dEluZGV4ICsgaikuZ2V0U2NhbGUgPSBnZXRPdXRwdXRTY2FsZVRyYW5zbGF0aW9uWTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGpzb24uZ2V0T3V0cHV0VHlwZShpLCBqKSA9PSBQaHlzaWNzVHlwZVRhZ0FuZ2xlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLm91dHB1dHMuYXQob3V0cHV0SW5kZXggKyBqKS50eXBlID0gQ3ViaXNtUGh5c2ljc1NvdXJjZS5DdWJpc21QaHlzaWNzU291cmNlX0FuZ2xlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZy5vdXRwdXRzLmF0KG91dHB1dEluZGV4ICsgaikuZ2V0VmFsdWUgPSBnZXRPdXRwdXRBbmdsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcub3V0cHV0cy5hdChvdXRwdXRJbmRleCArIGopLmdldFNjYWxlID0gZ2V0T3V0cHV0U2NhbGVBbmdsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcub3V0cHV0cy5hdChvdXRwdXRJbmRleCArIGopLnJlZmxlY3QgPSBqc29uLmdldE91dHB1dFJlZmxlY3QoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dHB1dEluZGV4ICs9IHRoaXMuX3BoeXNpY3NSaWcuc2V0dGluZ3MuYXQoaSkub3V0cHV0Q291bnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBQYXJ0aWNsZVxuICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcuc2V0dGluZ3MuYXQoaSkucGFydGljbGVDb3VudCA9IGpzb24uZ2V0UGFydGljbGVDb3VudChpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLnNldHRpbmdzLmF0KGkpLmJhc2VQYXJ0aWNsZUluZGV4ID0gcGFydGljbGVJbmRleDtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMuX3BoeXNpY3NSaWcuc2V0dGluZ3MuYXQoaSkucGFydGljbGVDb3VudDsgKytqKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZy5wYXJ0aWNsZXMuYXQocGFydGljbGVJbmRleCArIGopLm1vYmlsaXR5ID0ganNvbi5nZXRQYXJ0aWNsZU1vYmlsaXR5KGksIGopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLnBhcnRpY2xlcy5hdChwYXJ0aWNsZUluZGV4ICsgaikuZGVsYXkgPSBqc29uLmdldFBhcnRpY2xlRGVsYXkoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NSaWcucGFydGljbGVzLmF0KHBhcnRpY2xlSW5kZXggKyBqKS5hY2NlbGVyYXRpb24gPSBqc29uLmdldFBhcnRpY2xlQWNjZWxlcmF0aW9uKGksIGopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzUmlnLnBhcnRpY2xlcy5hdChwYXJ0aWNsZUluZGV4ICsgaikucmFkaXVzID0ganNvbi5nZXRQYXJ0aWNsZVJhZGl1cyhpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc1JpZy5wYXJ0aWNsZXMuYXQocGFydGljbGVJbmRleCArIGopLnBvc2l0aW9uID0ganNvbi5nZXRQYXJ0aWNsZVBvc2l0aW9uKGksIGopO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcnRpY2xlSW5kZXggKz0gdGhpcy5fcGh5c2ljc1JpZy5zZXR0aW5ncy5hdChpKS5wYXJ0aWNsZUNvdW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcblxuICAgICAgICAgICAganNvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICBqc29uID0gdm9pZCAwO1xuICAgICAgICAgICAganNvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Yid5pyf5YyW44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzdHJhbmQ6IEN1YmlzbVBoeXNpY3NQYXJ0aWNsZVtdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTZXR0aW5nOiBDdWJpc21QaHlzaWNzU3ViUmlnO1xuICAgICAgICAgICAgbGV0IHJhZGl1czogQ3ViaXNtVmVjdG9yMjtcblxuICAgICAgICAgICAgZm9yIChsZXQgc2V0dGluZ0luZGV4OiBudW1iZXIgPSAwOyBzZXR0aW5nSW5kZXggPCB0aGlzLl9waHlzaWNzUmlnLnN1YlJpZ0NvdW50OyArK3NldHRpbmdJbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2V0dGluZyA9IHRoaXMuX3BoeXNpY3NSaWcuc2V0dGluZ3MuYXQoc2V0dGluZ0luZGV4KTtcbiAgICAgICAgICAgICAgICBzdHJhbmQgPSB0aGlzLl9waHlzaWNzUmlnLnBhcnRpY2xlcy5nZXQoY3VycmVudFNldHRpbmcuYmFzZVBhcnRpY2xlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgdG9wIG9mIHBhcnRpY2xlLlxuICAgICAgICAgICAgICAgIHN0cmFuZFswXS5pbml0aWFsUG9zaXRpb24gPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XG4gICAgICAgICAgICAgICAgc3RyYW5kWzBdLmxhc3RQb3NpdGlvbiA9IG5ldyBDdWJpc21WZWN0b3IyKHN0cmFuZFswXS5pbml0aWFsUG9zaXRpb24ueCwgc3RyYW5kWzBdLmluaXRpYWxQb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICBzdHJhbmRbMF0ubGFzdEdyYXZpdHkgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIC0xLjApO1xuICAgICAgICAgICAgICAgIHN0cmFuZFswXS5sYXN0R3Jhdml0eS55ICo9IC0xLjA7XG4gICAgICAgICAgICAgICAgc3RyYW5kWzBdLnZlbG9jaXR5ID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xuICAgICAgICAgICAgICAgIHN0cmFuZFswXS5mb3JjZSA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcblxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgcGFyaXRjbGVzLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCBjdXJyZW50U2V0dGluZy5wYXJ0aWNsZUNvdW50OyArK2kpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgIHJhZGl1cy55ID0gc3RyYW5kW2ldLnJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgc3RyYW5kW2ldLmluaXRpYWxQb3NpdGlvbiA9IG5ldyBDdWJpc21WZWN0b3IyKHN0cmFuZFtpIC0gMV0uaW5pdGlhbFBvc2l0aW9uLnggKyByYWRpdXMueCwgc3RyYW5kW2kgLSAxXS5pbml0aWFsUG9zaXRpb24ueSArIHJhZGl1cy55KTtcbiAgICAgICAgICAgICAgICAgICAgc3RyYW5kW2ldLnBvc2l0aW9uID0gbmV3IEN1YmlzbVZlY3RvcjIoc3RyYW5kW2ldLmluaXRpYWxQb3NpdGlvbi54LCBzdHJhbmRbaV0uaW5pdGlhbFBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgICAgICBzdHJhbmRbaV0ubGFzdFBvc2l0aW9uID0gbmV3IEN1YmlzbVZlY3RvcjIoc3RyYW5kW2ldLmluaXRpYWxQb3NpdGlvbi54LCBzdHJhbmRbaV0uaW5pdGlhbFBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgICAgICBzdHJhbmRbaV0ubGFzdEdyYXZpdHkgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIC0xLjApO1xuICAgICAgICAgICAgICAgICAgICBzdHJhbmRbaV0ubGFzdEdyYXZpdHkueSAqPSAtMS4wO1xuICAgICAgICAgICAgICAgICAgICBzdHJhbmRbaV0udmVsb2NpdHkgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgIHN0cmFuZFtpXS5mb3JjZSA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfcGh5c2ljc1JpZzogQ3ViaXNtUGh5c2ljc1JpZzsgICAgICAvLyDniannkIbmvJTnrpfjga7jg4fjg7zjgr9cbiAgICAgICAgX29wdGlvbnM6IE9wdGlvbnM7ICAgIC8vIOOCquODl+OCt+ODp+ODs1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeJqeeQhua8lOeul+OBruOCquODl+OCt+ODp+ODs1xuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBPcHRpb25zXG4gICAge1xuICAgICAgICBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eSA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xuICAgICAgICAgICAgdGhpcy53aW5kID0gbmV3IEN1YmlzbVZlY3RvcjIoMCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmF2aXR5OiBDdWJpc21WZWN0b3IyOyAvLyDph43lipvmlrnlkJFcbiAgICAgICAgd2luZDogQ3ViaXNtVmVjdG9yMjsgICAgLy8g6aKo44Gu5pa55ZCRXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBzaWduLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlIEV2YWx1YXRpb24gdGFyZ2V0IHZhbHVlLlxuICAgICAqXG4gICAgICogQHJldHVybiBTaWduIG9mIHZhbHVlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNpZ24odmFsdWU6IG51bWJlcik6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IHJldDogbnVtYmVyID0gMDtcblxuICAgICAgICBpZih2YWx1ZSA+IDAuMClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHZhbHVlIDwgMC4wKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXQgPSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5wdXRUcmFuc2xhdGlvblhGcm9tTm9ybWFsaXplZFBhcmFtZXRlclZhbHVlKFxuICAgICAgICB0YXJnZXRUcmFuc2xhdGlvbjogQ3ViaXNtVmVjdG9yMixcbiAgICAgICAgdGFyZ2V0QW5nbGU6IHthbmdsZTogbnVtYmVyfSxcbiAgICAgICAgdmFsdWU6IG51bWJlcixcbiAgICAgICAgcGFyYW1ldGVyTWluaW11bVZhbHVlOiBudW1iZXIsXG4gICAgICAgIHBhcmFtZXRlck1heGltdW1WYWx1ZTogbnVtYmVyLFxuICAgICAgICBwYXJhbWV0ZXJEZWZhdWx0VmFsdWU6IG51bWJlcixcbiAgICAgICAgbm9ybWFsaXphdGlvblBvc2l0aW9uOiBDdWJpc21QaHlzaWNzTm9ybWFsaXphdGlvbixcbiAgICAgICAgbm9ybWFsaXphdGlvbkFuZ2xlOiBDdWJpc21QaHlzaWNzTm9ybWFsaXphdGlvbixcbiAgICAgICAgaXNJbnZlcnRlZDogYm9vbGVhbixcbiAgICAgICAgd2VpZ2h0OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICB0YXJnZXRUcmFuc2xhdGlvbi54ICs9IG5vcm1hbGl6ZVBhcmFtZXRlclZhbHVlKFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBwYXJhbWV0ZXJNaW5pbXVtVmFsdWUsXG4gICAgICAgICAgICBwYXJhbWV0ZXJNYXhpbXVtVmFsdWUsXG4gICAgICAgICAgICBwYXJhbWV0ZXJEZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICBub3JtYWxpemF0aW9uUG9zaXRpb24ubWluaW11bSxcbiAgICAgICAgICAgIG5vcm1hbGl6YXRpb25Qb3NpdGlvbi5tYXhpbXVtLFxuICAgICAgICAgICAgbm9ybWFsaXphdGlvblBvc2l0aW9uLmRlZmFsdXQsXG4gICAgICAgICAgICBpc0ludmVydGVkXG4gICAgICAgICkgKiB3ZWlnaHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5wdXRUcmFuc2xhdGlvbllGcm9tTm9ybWFsaXplZFBhcmFtdGVyVmFsdWUoXG4gICAgICAgIHRhcmdldFRyYW5zbGF0aW9uOiBDdWJpc21WZWN0b3IyLFxuICAgICAgICB0YXJnZXRBbmdsZToge2FuZ2xlOiBudW1iZXJ9LFxuICAgICAgICB2YWx1ZTogbnVtYmVyLFxuICAgICAgICBwYXJhbWV0ZXJNaW5pbXVtVmFsdWU6IG51bWJlcixcbiAgICAgICAgcGFyYW1ldGVyTWF4aW11bVZhbHVlOiBudW1iZXIsXG4gICAgICAgIHBhcmFtZXRlckRlZmF1bHRWYWx1ZTogbnVtYmVyLFxuICAgICAgICBub3JtYWxpemF0aW9uUG9zaXRpb246IEN1YmlzbVBoeXNpY3NOb3JtYWxpemF0aW9uLFxuICAgICAgICBub3JtYWxpemF0aW9uQW5nbGU6IEN1YmlzbVBoeXNpY3NOb3JtYWxpemF0aW9uLFxuICAgICAgICBpc0ludmVydGVkOiBib29sZWFuLFxuICAgICAgICB3ZWlnaHQ6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIHRhcmdldFRyYW5zbGF0aW9uLnkgKz0gbm9ybWFsaXplUGFyYW1ldGVyVmFsdWUoXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHBhcmFtZXRlck1pbmltdW1WYWx1ZSxcbiAgICAgICAgICAgIHBhcmFtZXRlck1heGltdW1WYWx1ZSxcbiAgICAgICAgICAgIHBhcmFtZXRlckRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIG5vcm1hbGl6YXRpb25Qb3NpdGlvbi5taW5pbXVtLFxuICAgICAgICAgICAgbm9ybWFsaXphdGlvblBvc2l0aW9uLm1heGltdW0sXG4gICAgICAgICAgICBub3JtYWxpemF0aW9uUG9zaXRpb24uZGVmYWx1dCxcbiAgICAgICAgICAgIGlzSW52ZXJ0ZWRcbiAgICAgICAgKSAqIHdlaWdodDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbnB1dEFuZ2xlRnJvbU5vcm1hbGl6ZWRQYXJhbWV0ZXJWYWx1ZShcbiAgICAgICAgdGFyZ2V0VHJhbnNsYXRpb246IEN1YmlzbVZlY3RvcjIsXG4gICAgICAgIHRhcmdldEFuZ2xlOiB7YW5nbGU6IG51bWJlcn0sXG4gICAgICAgIHZhbHVlOiBudW1iZXIsXG4gICAgICAgIHBhcmFtZXRlck1pbmltdW1WYWx1ZTogbnVtYmVyLFxuICAgICAgICBwYXJhbWV0ZXJNYXhpbXVtVmFsdWU6IG51bWJlcixcbiAgICAgICAgcGFyYW1ldGVyRGVmYXVsdFZhbHVlOiBudW1iZXIsXG4gICAgICAgIG5vcm1hbGl6YWl0aW9uUG9zaXRpb246IEN1YmlzbVBoeXNpY3NOb3JtYWxpemF0aW9uLFxuICAgICAgICBub3JtYWxpemF0aW9uQW5nbGU6IEN1YmlzbVBoeXNpY3NOb3JtYWxpemF0aW9uLFxuICAgICAgICBpc0ludmVydGVkOiBib29sZWFuLFxuICAgICAgICB3ZWlnaHQ6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIHRhcmdldEFuZ2xlLmFuZ2xlICs9IG5vcm1hbGl6ZVBhcmFtZXRlclZhbHVlKFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBwYXJhbWV0ZXJNaW5pbXVtVmFsdWUsXG4gICAgICAgICAgICBwYXJhbWV0ZXJNYXhpbXVtVmFsdWUsXG4gICAgICAgICAgICBwYXJhbWV0ZXJEZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICBub3JtYWxpemF0aW9uQW5nbGUubWluaW11bSxcbiAgICAgICAgICAgIG5vcm1hbGl6YXRpb25BbmdsZS5tYXhpbXVtLFxuICAgICAgICAgICAgbm9ybWFsaXphdGlvbkFuZ2xlLmRlZmFsdXQsXG4gICAgICAgICAgICBpc0ludmVydGVkLFxuICAgICAgICApICogd2VpZ2h0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE91dHB1dFRyYW5zbGF0aW9uWChcbiAgICAgICAgdHJhbnNsYXRpb246IEN1YmlzbVZlY3RvcjIsXG4gICAgICAgIHBhcnRpY2xlczogQ3ViaXNtUGh5c2ljc1BhcnRpY2xlW10sXG4gICAgICAgIHBhcnRpY2xlSW5kZXg6IG51bWJlcixcbiAgICAgICAgaXNJbnZlcnRlZDogYm9vbGVhbixcbiAgICAgICAgcGFyZW50R3Jhdml0eTogQ3ViaXNtVmVjdG9yMik6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IG91dHB1dFZhbHVlOiBudW1iZXIgPSB0cmFuc2xhdGlvbi54O1xuXG4gICAgICAgIGlmKGlzSW52ZXJ0ZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG91dHB1dFZhbHVlICo9IC0xLjA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0cHV0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T3V0cHV0VHJhbnNsYXRpb25ZKFxuICAgICAgICB0cmFuc2xhdGlvbjogQ3ViaXNtVmVjdG9yMixcbiAgICAgICAgcGFydGljbGVzOiBDdWJpc21QaHlzaWNzUGFydGljbGVbXSxcbiAgICAgICAgcGFydGljbGVJbmRleDogbnVtYmVyLFxuICAgICAgICBpc0ludmVydGVkOiBib29sZWFuLFxuICAgICAgICBwYXJlbnRHcmF2aXR5OiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgb3V0cHV0VmFsdWU6IG51bWJlciA9IHRyYW5zbGF0aW9uLnk7XG5cbiAgICAgICAgaWYoaXNJbnZlcnRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgb3V0cHV0VmFsdWUgKj0gLTEuMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T3V0cHV0QW5nbGUoXG4gICAgICAgIHRyYW5zbGF0aW9uOiBDdWJpc21WZWN0b3IyLFxuICAgICAgICBwYXJ0aWNsZXM6IEN1YmlzbVBoeXNpY3NQYXJ0aWNsZVtdLFxuICAgICAgICBwYXJ0aWNsZUluZGV4OiBudW1iZXIsXG4gICAgICAgIGlzSW52ZXJ0ZWQ6IGJvb2xlYW4sXG4gICAgICAgIHBhcmVudEdyYXZpdHk6IEN1YmlzbVZlY3RvcjIpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCBvdXRwdXRWYWx1ZTogbnVtYmVyO1xuXG4gICAgICAgIGlmKHBhcnRpY2xlSW5kZXggPj0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgcGFyZW50R3Jhdml0eSA9IHBhcnRpY2xlc1twYXJ0aWNsZUluZGV4IC0gMV0ucG9zaXRpb24uc3Vic3RyYWN0KHBhcnRpY2xlc1twYXJ0aWNsZUluZGV4IC0gMl0ucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcGFyZW50R3Jhdml0eSA9IHBhcmVudEdyYXZpdHkubXVsdGlwbHlCeVNjYWxlcigtMS4wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dHB1dFZhbHVlID0gQ3ViaXNtTWF0aC5kaXJlY3Rpb25Ub1JhZGlhbihwYXJlbnRHcmF2aXR5LCB0cmFuc2xhdGlvbik7XG5cbiAgICAgICAgaWYoaXNJbnZlcnRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgb3V0cHV0VmFsdWUgKj0gLTEuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSYW5nZVZhbHVlKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IG1heFZhbHVlOiBudW1iZXIgPSBDdWJpc21NYXRoLm1heChtaW4sIG1heCk7XG4gICAgICAgIGxldCBtaW5WYWx1ZTogbnVtYmVyID0gQ3ViaXNtTWF0aC5taW4obWluLCBtYXgpO1xuXG4gICAgICAgIHJldHVybiBDdWJpc21NYXRoLmFicyhtYXhWYWx1ZSAtIG1pblZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyXG4gICAge1xuICAgICAgICBjb25zdCBtaW5WYWx1ZTogbnVtYmVyID0gQ3ViaXNtTWF0aC5taW4obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gbWluVmFsdWUgKyAoZ2V0UmFuZ2VWYWx1ZShtaW4sIG1heCkgLyAyLjApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE91dHB1dFNjYWxlVHJhbnNsYXRpb25YKHRyYW5zbGF0aW9uU2NhbGU6IEN1YmlzbVZlY3RvcjIsIGFuZ2xlU2NhbGU6IG51bWJlcik6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNsYXRpb25TY2FsZS54KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T3V0cHV0U2NhbGVUcmFuc2xhdGlvblkodHJhbnNsYXRpb25TY2FsZTogQ3ViaXNtVmVjdG9yMiwgYW5nbGVTY2FsZTogbnVtYmVyKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2xhdGlvblNjYWxlLnkpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRPdXRwdXRTY2FsZUFuZ2xlKHRyYW5zbGF0aW9uU2NhbGU6IEN1YmlzbVZlY3RvcjIsIGFuZ2xlU2NhbGU6IG51bWJlcik6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYW5nbGVTY2FsZSkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBwYXJ0aWNsZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyYW5kICAgICAgICAgICAgICAgIFRhcmdldCBhcnJheSBvZiBwYXJ0aWNsZS5cbiAgICAgKiBAcGFyYW0gc3RyYW5kQ291bnQgICAgICAgICAgIENvdW50IG9mIHBhcnRpY2xlLlxuICAgICAqIEBwYXJhbSB0b3RhbFRyYW5zbGF0aW9uICAgICAgVG90YWwgdHJhbnNsYXRpb24gdmFsdWUuXG4gICAgICogQHBhcmFtIHRvdGFsQW5nbGUgICAgICAgICAgICBUb3RhbCBhbmdsZS5cbiAgICAgKiBAcGFyYW0gd2luZERpcmVjdGlvbiAgICAgICAgIERpcmVjdGlvbiBvZiBXaW5kLlxuICAgICAqIEBwYXJhbSB0aHJlc2hvbGRWYWx1ZSAgICAgICAgVGhyZXNob2xkIG9mIG1vdmVtZW50LlxuICAgICAqIEBwYXJhbSBkZWx0YVRpbWVTZWNvbmRzICAgICAgRGVsdGEgdGltZS5cbiAgICAgKiBAcGFyYW0gYWlyUmVzaXN0YW5jZSAgICAgICAgIEFpciByZXNpc3RhbmNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVBhcnRpY2xlcyhcbiAgICAgICAgc3RyYW5kOiBDdWJpc21QaHlzaWNzUGFydGljbGVbXSxcbiAgICAgICAgc3RyYW5kQ291bnQ6IG51bWJlcixcbiAgICAgICAgdG90YWxUcmFuc2xhdGlvbjogQ3ViaXNtVmVjdG9yMixcbiAgICAgICAgdG90YWxBbmdsZTogbnVtYmVyLFxuICAgICAgICB3aW5kRGlyZWN0aW9uOiBDdWJpc21WZWN0b3IyLFxuICAgICAgICB0aHJlc2hvbGRWYWx1ZTogbnVtYmVyLFxuICAgICAgICBkZWx0YVRpbWVTZWNvbmRzOiBudW1iZXIsXG4gICAgICAgIGFpclJlc2lzdGFuY2U6IG51bWJlcilcbiAgICB7XG4gICAgICAgIGxldCB0b3RhbFJhZGlhbjogbnVtYmVyO1xuICAgICAgICBsZXQgZGVsYXk6IG51bWJlcjtcbiAgICAgICAgbGV0IHJhZGlhbjogbnVtYmVyO1xuICAgICAgICBsZXQgY3VycmVudEdyYXZpdHk6IEN1YmlzbVZlY3RvcjI7XG4gICAgICAgIGxldCBkaXJlY3Rpb246IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XG4gICAgICAgIGxldCB2ZWxvY2l0eTogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcbiAgICAgICAgbGV0IGZvcmNlOiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xuICAgICAgICBsZXQgbmV3RGlyZWN0aW9uOiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xuXG4gICAgICAgIHN0cmFuZFswXS5wb3NpdGlvbiA9IG5ldyBDdWJpc21WZWN0b3IyKHRvdGFsVHJhbnNsYXRpb24ueCwgdG90YWxUcmFuc2xhdGlvbi55KTtcblxuICAgICAgICB0b3RhbFJhZGlhbiA9IEN1YmlzbU1hdGguZGVncmVlc1RvUmFkaWFuKHRvdGFsQW5nbGUpO1xuICAgICAgICBjdXJyZW50R3Jhdml0eSA9IEN1YmlzbU1hdGgucmFkaWFuVG9EaXJlY3Rpb24odG90YWxSYWRpYW4pO1xuICAgICAgICBjdXJyZW50R3Jhdml0eS5ub3JtYWxpemUoKTtcblxuICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDE7IGkgPCBzdHJhbmRDb3VudDsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdHJhbmRbaV0uZm9yY2UgPSBjdXJyZW50R3Jhdml0eS5tdWx0aXBseUJ5U2NhbGVyKHN0cmFuZFtpXS5hY2NlbGVyYXRpb24pLmFkZCh3aW5kRGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgc3RyYW5kW2ldLmxhc3RQb3NpdGlvbiA9IG5ldyBDdWJpc21WZWN0b3IyKHN0cmFuZFtpXS5wb3NpdGlvbi54LCBzdHJhbmRbaV0ucG9zaXRpb24ueSk7XG5cbiAgICAgICAgICAgIGRlbGF5ID0gc3RyYW5kW2ldLmRlbGF5ICogZGVsdGFUaW1lU2Vjb25kcyAqIDMwLjA7XG5cbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IHN0cmFuZFtpXS5wb3NpdGlvbi5zdWJzdHJhY3Qoc3RyYW5kW2kgLSAxXS5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgIHJhZGlhbiA9IEN1YmlzbU1hdGguZGlyZWN0aW9uVG9SYWRpYW4oc3RyYW5kW2ldLmxhc3RHcmF2aXR5LCBjdXJyZW50R3Jhdml0eSkgLyBhaXJSZXNpc3RhbmNlO1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24ueCA9ICgoQ3ViaXNtTWF0aC5jb3MocmFkaWFuKSAqIGRpcmVjdGlvbi54KSAtIChkaXJlY3Rpb24ueSAqIEN1YmlzbU1hdGguc2luKHJhZGlhbikpKTtcbiAgICAgICAgICAgIGRpcmVjdGlvbi55ID0gKChDdWJpc21NYXRoLnNpbihyYWRpYW4pICogZGlyZWN0aW9uLngpICsgKGRpcmVjdGlvbi55ICogQ3ViaXNtTWF0aC5jb3MocmFkaWFuKSkpO1xuXG4gICAgICAgICAgICBzdHJhbmRbaV0ucG9zaXRpb24gPSBzdHJhbmRbaSAtIDFdLnBvc2l0aW9uLmFkZChkaXJlY3Rpb24pO1xuXG4gICAgICAgICAgICB2ZWxvY2l0eSA9IHN0cmFuZFtpXS52ZWxvY2l0eS5tdWx0aXBseUJ5U2NhbGVyKGRlbGF5KTtcbiAgICAgICAgICAgIGZvcmNlID0gc3RyYW5kW2ldLmZvcmNlLm11bHRpcGx5QnlTY2FsZXIoZGVsYXkpLm11bHRpcGx5QnlTY2FsZXIoZGVsYXkpO1xuXG4gICAgICAgICAgICBzdHJhbmRbaV0ucG9zaXRpb24gPSBzdHJhbmRbaV0ucG9zaXRpb24uYWRkKHZlbG9jaXR5KS5hZGQoZm9yY2UpO1xuXG4gICAgICAgICAgICBuZXdEaXJlY3Rpb24gPSBzdHJhbmRbaV0ucG9zaXRpb24uc3Vic3RyYWN0KHN0cmFuZFtpIC0gMV0ucG9zaXRpb24pO1xuICAgICAgICAgICAgbmV3RGlyZWN0aW9uLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgICAgICBzdHJhbmRbaV0ucG9zaXRpb24gPSBzdHJhbmRbaSAtIDFdLnBvc2l0aW9uLmFkZChuZXdEaXJlY3Rpb24ubXVsdGlwbHlCeVNjYWxlcihzdHJhbmRbaV0ucmFkaXVzKSk7XG5cbiAgICAgICAgICAgIGlmIChDdWJpc21NYXRoLmFicyhzdHJhbmRbaV0ucG9zaXRpb24ueCkgPCB0aHJlc2hvbGRWYWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJhbmRbaV0ucG9zaXRpb24ueCA9IDAuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlbGF5ICE9IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJhbmRbaV0udmVsb2NpdHkgPSBzdHJhbmRbaV0ucG9zaXRpb24uc3Vic3RyYWN0KHN0cmFuZFtpXS5sYXN0UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHN0cmFuZFtpXS52ZWxvY2l0eSA9IHN0cmFuZFtpXS52ZWxvY2l0eS5kaXZpc2lvbkJ5U2NhbGFyKGRlbGF5KTtcbiAgICAgICAgICAgICAgICBzdHJhbmRbaV0udmVsb2NpdHkgPSBzdHJhbmRbaV0udmVsb2NpdHkubXVsdGlwbHlCeVNjYWxlcihzdHJhbmRbaV0ubW9iaWxpdHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHJhbmRbaV0uZm9yY2UgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XG4gICAgICAgICAgICBzdHJhbmRbaV0ubGFzdEdyYXZpdHkgPSBuZXcgQ3ViaXNtVmVjdG9yMihjdXJyZW50R3Jhdml0eS54LCBjdXJyZW50R3Jhdml0eS55KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBvdXRwdXQgcGFyYW1ldGVyIHZhbHVlLlxuICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJWYWx1ZSAgICAgICAgICAgIFRhcmdldCBwYXJhbWV0ZXIgdmFsdWUuXG4gICAgICogQHBhcmFtIHBhcmFtZXRlclZhbHVlTWluaW11bSAgICAgTWluaW11bSBvZiBwYXJhbWV0ZXIgdmFsdWUuXG4gICAgICogQHBhcmFtIHBhcmFtZXRlclZhbHVlTWF4aW11bSAgICAgTWF4aW11bSBvZiBwYXJhbWV0ZXIgdmFsdWUuXG4gICAgICogQHBhcmFtIHRyYW5zbGF0aW9uICAgICAgICAgICAgICAgVHJhbnNsYXRpb24gdmFsdWUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gdXBkYXRlT3V0cHV0UGFyYW1ldGVyVmFsdWUoXG4gICAgICAgIHBhcmFtZXRlclZhbHVlOiBGbG9hdDMyQXJyYXksXG4gICAgICAgIHBhcmFtZXRlclZhbHVlTWluaW11bTogbnVtYmVyLFxuICAgICAgICBwYXJhbWV0ZXJWYWx1ZU1heGltdW06IG51bWJlcixcbiAgICAgICAgdHJhbnNsYXRpb246IG51bWJlcixcbiAgICAgICAgb3V0cHV0OiBDdWJpc21QaHlzaWNzT3V0cHV0KTogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IG91dHB1dFNjYWxlOiBudW1iZXI7XG4gICAgICAgIGxldCB2YWx1ZTogbnVtYmVyO1xuICAgICAgICBsZXQgd2VpZ2h0OiBudW1iZXI7XG5cbiAgICAgICAgb3V0cHV0U2NhbGUgPSBvdXRwdXQuZ2V0U2NhbGUob3V0cHV0LnRyYW5zbGF0aW9uU2NhbGUsIG91dHB1dC5hbmdsZVNjYWxlKTtcblxuICAgICAgICB2YWx1ZSA9IHRyYW5zbGF0aW9uICogb3V0cHV0U2NhbGU7XG5cbiAgICAgICAgaWYgKHZhbHVlIDwgcGFyYW1ldGVyVmFsdWVNaW5pbXVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBvdXRwdXQudmFsdWVCZWxvd01pbmltdW0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlQmVsb3dNaW5pbXVtID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlID0gcGFyYW1ldGVyVmFsdWVNaW5pbXVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID4gcGFyYW1ldGVyVmFsdWVNYXhpbXVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPiBvdXRwdXQudmFsdWVFeGNlZWRlZE1heGltdW0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlRXhjZWVkZWRNYXhpbXVtID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlID0gcGFyYW1ldGVyVmFsdWVNYXhpbXVtO1xuICAgICAgICB9XG5cbiAgICAgICAgd2VpZ2h0ID0gKG91dHB1dC53ZWlnaHQgLyBNYXhpbXVtV2VpZ2h0KTtcblxuICAgICAgICBpZiAod2VpZ2h0ID49IDEuMClcbiAgICAgICAge1xuICAgICAgICAgICAgcGFyYW1ldGVyVmFsdWVbMF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlID0gKHBhcmFtZXRlclZhbHVlWzBdICogKDEuMCAtIHdlaWdodCkpICsgKHZhbHVlICogd2VpZ2h0KTtcbiAgICAgICAgICAgIHBhcmFtZXRlclZhbHVlWzBdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtZXRlclZhbHVlKFxuICAgICAgICB2YWx1ZTogbnVtYmVyLFxuICAgICAgICBwYXJhbWV0ZXJNaW5pbXVtOiBudW1iZXIsXG4gICAgICAgIHBhcmFtZXRlck1heGltdW06IG51bWJlcixcbiAgICAgICAgcGFyYW1ldGVyRGVmYXVsdDogbnVtYmVyLFxuICAgICAgICBub3JtYWxpemVkTWluaW11bTogbnVtYmVyLFxuICAgICAgICBub3JtYWxpemVkTWF4aW11bTogbnVtYmVyLFxuICAgICAgICBub3JtYWxpemVkRGVmYXVsdDogbnVtYmVyLFxuICAgICAgICBpc0ludmVydGVkOiBib29sZWFuKVxuICAgIHtcbiAgICAgICAgbGV0IHJlc3VsdDogbnVtYmVyID0gMC4wO1xuXG4gICAgICAgIGNvbnN0IG1heFZhbHVlOiBudW1iZXIgPSBDdWJpc21NYXRoLm1heChwYXJhbWV0ZXJNYXhpbXVtLCBwYXJhbWV0ZXJNaW5pbXVtKTtcblxuICAgICAgICBpZihtYXhWYWx1ZSA8IHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1heFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWluVmFsdWU6IG51bWJlciA9IEN1YmlzbU1hdGgubWluKHBhcmFtZXRlck1heGltdW0sIHBhcmFtZXRlck1pbmltdW0pO1xuXG4gICAgICAgIGlmKG1pblZhbHVlID4gdmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlID0gbWluVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaW5Ob3JtVmFsdWU6IG51bWJlciA9IEN1YmlzbU1hdGgubWluKG5vcm1hbGl6ZWRNaW5pbXVtLCBub3JtYWxpemVkTWF4aW11bSk7XG4gICAgICAgIGNvbnN0IG1heE5vcm1WYWx1ZTogbnVtYmVyID0gQ3ViaXNtTWF0aC5tYXgobm9ybWFsaXplZE1pbmltdW0sIG5vcm1hbGl6ZWRNYXhpbXVtKTtcbiAgICAgICAgY29uc3QgbWlkZGxlTm9ybVZhbHVlOiBudW1iZXIgPSBub3JtYWxpemVkRGVmYXVsdDtcblxuICAgICAgICBjb25zdCBtaWRkbGVWYWx1ZTogbnVtYmVyID0gZ2V0RGVmYXVsdFZhbHVlKG1pblZhbHVlLCBtYXhWYWx1ZSk7XG4gICAgICAgIGNvbnN0IHBhcmFtVmFsdWU6IG51bWJlciA9IHZhbHVlIC0gbWlkZGxlVmFsdWU7XG5cbiAgICAgICAgc3dpdGNoKHNpZ24ocGFyYW1WYWx1ZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5MZW5ndGg6IG51bWJlciA9IG1heE5vcm1WYWx1ZSAtIG1pZGRsZU5vcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcExlbmd0aDogbnVtYmVyID0gbWF4VmFsdWUgLSBtaWRkbGVWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZihwTGVuZ3RoICE9IDAuMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcGFyYW1WYWx1ZSAqIChuTGVuZ3RoIC8gcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gbWlkZGxlTm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5MZW5ndGg6IG51bWJlciA9IG1pbk5vcm1WYWx1ZSAtIG1pZGRsZU5vcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcExlbmd0aDogbnVtYmVyID0gbWluVmFsdWUgLSBtaWRkbGVWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZihwTGVuZ3RoICE9IDAuMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcGFyYW1WYWx1ZSAqIChuTGVuZ3RoIC8gcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gbWlkZGxlTm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbWlkZGxlTm9ybVZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKGlzSW52ZXJ0ZWQpXG4gICAgICAgICAgICA/IHJlc3VsdFxuICAgICAgICAgICAgOiAocmVzdWx0ICogLTEuMCk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtdmVjdG9yMn0gZnJvbSAnLi4vbWF0aC9jdWJpc212ZWN0b3IyJztcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkfSBmcm9tICcuLi9pZC9jdWJpc21pZCc7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc212ZWN0b3J9IGZyb20gJy4uL3R5cGUvY3NtdmVjdG9yJztcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xuaW1wb3J0IEN1YmlzbUlkSGFuZGxlID0gY3ViaXNtaWQuQ3ViaXNtSWRIYW5kbGU7XG5pbXBvcnQgQ3ViaXNtVmVjdG9yMiA9IGN1YmlzbXZlY3RvcjIuQ3ViaXNtVmVjdG9yMjtcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDniannkIbmvJTnrpfjga7pgannlKjlhYjjga7nqK7poZ5cbiAgICAgKi9cbiAgICBleHBvcnQgZW51bSBDdWJpc21QaHlzaWNzVGFyZ2V0VHlwZVxuICAgIHtcbiAgICAgICAgQ3ViaXNtUGh5c2ljc1RhcmdldFR5cGVfUGFyYW1ldGVyLCAgLy8g44OR44Op44Oh44O844K/44Gr5a++44GX44Gm6YGp55SoXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog54mp55CG5ryU566X44Gu5YWl5Yqb44Gu56iu6aGeXG4gICAgICovXG4gICAgZXhwb3J0IGVudW0gQ3ViaXNtUGh5c2ljc1NvdXJjZVxuICAgIHtcbiAgICAgICAgQ3ViaXNtUGh5c2ljc1NvdXJjZV9YLCAgICAgICAgICAvLyBY6Lu444Gu5L2N572u44GL44KJXG4gICAgICAgIEN1YmlzbVBoeXNpY3NTb3VyY2VfWSwgICAgICAgICAgLy8gWei7uOOBruS9jee9ruOBi+OCiVxuICAgICAgICBDdWJpc21QaHlzaWNzU291cmNlX0FuZ2xlLCAgICAgIC8vIOinkuW6puOBi+OCiVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBicmllZiDniannkIbmvJTnrpfjgafkvb/nlKjjgZnjgovlpJbpg6jjga7liptcbiAgICAgKlxuICAgICAqIOeJqeeQhua8lOeul+OBp+S9v+eUqOOBmeOCi+WklumDqOOBruWKm+OAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBQaHlzaWNzSnNvbkVmZmVjdGl2ZUZvcmNlc1xuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdyYXZpdHkgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLCAwKTtcbiAgICAgICAgICAgIHRoaXMud2luZCA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIGdyYXZpdHk6ICAgIEN1YmlzbVZlY3RvcjI7ICAgICAgICAgIC8vLzwg6YeN5YqbXG4gICAgICAgIHdpbmQ6ICAgICAgIEN1YmlzbVZlY3RvcjI7ICAgICAgICAgIC8vLzwg6aKoXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog54mp55CG5ryU566X44Gu44OR44Op44Oh44O844K/5oOF5aCxXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVBoeXNpY3NQYXJhbWV0ZXJcbiAgICB7XG4gICAgICAgIGlkOiBDdWJpc21JZEhhbmRsZTsgICAvLyDjg5Hjg6njg6Hjg7zjgr9cbiAgICAgICAgdGFyZ2V0VHlwZTogQ3ViaXNtUGh5c2ljc1RhcmdldFR5cGU7ICAgIC8vIOmBqeeUqOWFiOOBrueorumhnlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeJqeeQhua8lOeul+OBruato+imj+WMluaDheWgsVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21QaHlzaWNzTm9ybWFsaXphdGlvblxuICAgIHtcbiAgICAgICAgbWluaW11bTogbnVtYmVyOyAgICAvLyDmnIDlpKflgKRcbiAgICAgICAgbWF4aW11bTogbnVtYmVyOyAgICAvLyDmnIDlsI/lgKRcbiAgICAgICAgZGVmYWx1dDogbnVtYmVyOyAgICAvLyDjg4fjg5Xjgqnjg6vjg4jlgKRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDniannkIbmvJTnrpfjga7mvJTnrpflp5Tkvb/nlKjjgZnjgovniannkIbngrnjga7mg4XloLFcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtUGh5c2ljc1BhcnRpY2xlXG4gICAge1xuICAgICAgICBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gbmV3IEN1YmlzbVZlY3RvcjIoMCwgMCk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IEN1YmlzbVZlY3RvcjIoMCwgMCk7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xuICAgICAgICAgICAgdGhpcy5sYXN0R3Jhdml0eSA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xuICAgICAgICAgICAgdGhpcy5mb3JjZSA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdGlhbFBvc2l0aW9uOiBDdWJpc21WZWN0b3IyOyAvLyDliJ3mnJ/kvY3nva5cbiAgICAgICAgbW9iaWxpdHk6IG51bWJlcjsgICAgICAgICAgICAgICAvLyDli5XjgY3jgoTjgZnjgZVcbiAgICAgICAgZGVsYXk6IG51bWJlcjsgICAgICAgICAgICAgICAgICAvLyDpgYXjgoxcbiAgICAgICAgYWNjZWxlcmF0aW9uOiBudW1iZXI7ICAgICAgICAgICAvLyDliqDpgJ/luqZcbiAgICAgICAgcmFkaXVzOiBudW1iZXI7ICAgICAgICAgICAgICAgICAvLyDot53pm6JcbiAgICAgICAgcG9zaXRpb246IEN1YmlzbVZlY3RvcjI7ICAgICAgICAvLyDnj77lnKjjga7kvY3nva5cbiAgICAgICAgbGFzdFBvc2l0aW9uOiBDdWJpc21WZWN0b3IyOyAgICAvLyDmnIDlvozjga7kvY3nva5cbiAgICAgICAgbGFzdEdyYXZpdHk6IEN1YmlzbVZlY3RvcjI7ICAgICAvLyDmnIDlvozjga7ph43liptcbiAgICAgICAgZm9yY2U6IEN1YmlzbVZlY3RvcjI7ICAgICAgICAgICAvLyDnj77lnKjjgYvjgYvjgaPjgabjgYTjgovliptcbiAgICAgICAgdmVsb2NpdHk6IEN1YmlzbVZlY3RvcjI7ICAgICAgICAvLyDnj77lnKjjga7pgJ/luqZcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDniannkIbmvJTnrpfjga7niannkIbngrnjga7nrqHnkIZcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtUGh5c2ljc1N1YlJpZ1xuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5vcm1hbGl6YXRpb25Qb3NpdGlvbiA9IG5ldyBDdWJpc21QaHlzaWNzTm9ybWFsaXphdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5ub3JtYWxpemF0aW9uQW5nbGUgPSBuZXcgQ3ViaXNtUGh5c2ljc05vcm1hbGl6YXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dENvdW50OiBudW1iZXI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YWl5Yqb44Gu5YCL5pWwXG4gICAgICAgIG91dHB1dENvdW50OiBudW1iZXI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlh7rlipvjga7lgIvmlbBcbiAgICAgICAgcGFydGljbGVDb3VudDogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeJqeeQhueCueOBruWAi+aVsFxuICAgICAgICBiYXNlSW5wdXRJbmRleDogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YWl5Yqb44Gu5pyA5Yid44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgIGJhc2VPdXRwdXRJbmRleDogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlh7rlipvjga7mnIDliJ3jga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgYmFzZVBhcnRpY2xlSW5kZXg6IG51bWJlcjsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeJqeeQhueCueOBruacgOWIneOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICBub3JtYWxpemF0aW9uUG9zaXRpb246IEN1YmlzbVBoeXNpY3NOb3JtYWxpemF0aW9uOyAgLy8g5q2j6KaP5YyW44GV44KM44Gf5L2N572uXG4gICAgICAgIG5vcm1hbGl6YXRpb25BbmdsZTogQ3ViaXNtUGh5c2ljc05vcm1hbGl6YXRpb247ICAgICAvLyDmraPopo/ljJbjgZXjgozjgZ/op5LluqZcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmraPopo/ljJbjgZXjgozjgZ/jg5Hjg6njg6Hjg7zjgr/jga7lj5blvpfplqLmlbDjga7lrqPoqIBcbiAgICAgKiBAcGFyYW0gdGFyZ2V0VHJhbnNsYXRpb24gICAgIC8vIOa8lOeul+e1kOaenOOBruenu+WLleWApFxuICAgICAqIEBwYXJhbSB0YXJnZXRBbmdsZSAgICAgICAgICAgLy8g5ryU566X57WQ5p6c44Gu6KeS5bqmXG4gICAgICogQHBhcmFtIHZhbHVlICAgICAgICAgICAgICAgICAvLyDjg5Hjg6njg6Hjg7zjgr/jga7lgKRcbiAgICAgKiBAcGFyYW0gcGFyYW1ldGVyTWluaW11blZhbHVlIC8vIOODkeODqeODoeODvOOCv+OBruacgOWwj+WApFxuICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJNYXhpbXVtVmFsdWUgLy8g44OR44Op44Oh44O844K/44Gu5pyA5aSn5YCkXG4gICAgICogQHBhcmFtIHBhcmFtZXRlckRlZmF1bHRWYWx1ZSAvLyDjg5Hjg6njg6Hjg7zjgr/jga7jg4fjg5Xjgqnjg6vjg4jlgKRcbiAgICAgKiBAcGFyYW0gbm9ybWFsaXphdGlvblBvc2l0aW9uIC8vIOato+imj+WMluOBleOCjOOBn+S9jee9rlxuICAgICAqIEBwYXJhbSBub3JtYWxpemF0aW9uQW5nbGUgICAgLy8g5q2j6KaP5YyW44GV44KM44Gf6KeS5bqmXG4gICAgICogQHBhcmFtIGlzSW52ZXJ0ZWQgICAgICAgICAgICAvLyDlgKTjgYzlj43ou6LjgZXjgozjgabjgYTjgovjgYvvvJ9cbiAgICAgKiBAcGFyYW0gd2VpZ2h0ICAgICAgICAgICAgICAgIC8vIOmHjeOBv1xuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2Ugbm9ybWFsaXplZFBoeXNpY3NQYXJhbWV0ZXJWYWx1ZUdldHRlclxuICAgIHtcbiAgICAgICAgKFxuICAgICAgICAgICAgdGFyZ2V0VHJhbnNsYXRpb246IEN1YmlzbVZlY3RvcjIsXG4gICAgICAgICAgICB0YXJnZXRBbmdsZToge2FuZ2xlOiBudW1iZXJ9LFxuICAgICAgICAgICAgdmFsdWU6IG51bWJlcixcbiAgICAgICAgICAgIHBhcmFtZXRlck1pbmltdW5WYWx1ZTogbnVtYmVyLFxuICAgICAgICAgICAgcGFyYW1ldGVyTWF4aW11bVZhbHVlOiBudW1iZXIsXG4gICAgICAgICAgICBwYXJhbWV0ZXJEZWZhdWx0VmFsdWU6IG51bWJlcixcbiAgICAgICAgICAgIG5vcm1hbGl6YXRpb25Qb3NpdGlvbjogQ3ViaXNtUGh5c2ljc05vcm1hbGl6YXRpb24sXG4gICAgICAgICAgICBub3JtYWxpemF0aW9uQW5nbGU6IEN1YmlzbVBoeXNpY3NOb3JtYWxpemF0aW9uLFxuICAgICAgICAgICAgaXNJbnZlcnRlZDogYm9vbGVhbixcbiAgICAgICAgICAgIHdlaWdodDogbnVtYmVyXG4gICAgICAgICk6IHZvaWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDniannkIbmvJTnrpfjga7lgKTjga7lj5blvpfplqLmlbDjga7lrqPoqIBcbiAgICAgKiBAcGFyYW0gdHJhbnNsYXRpb24g56e75YuV5YCkXG4gICAgICogQHBhcmFtIHBhcnRpY2xlcyDniannkIbngrnjga7jg6rjgrnjg4hcbiAgICAgKiBAcGFyYW0gaXNJbnZlcnRlZCDlgKTjgYzlj43mmKDjgZXjgozjgabjgYTjgovjgYtcbiAgICAgKiBAcGFyYW0gcGFyZW50R3Jhdml0eSDph43liptcbiAgICAgKiBAcmV0dXJuIOWApFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgcGh5c2ljc1ZhbHVlR2V0dGVyXG4gICAge1xuICAgICAgICAoXG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogQ3ViaXNtVmVjdG9yMixcbiAgICAgICAgICAgIHBhcnRpY2xlczogQ3ViaXNtUGh5c2ljc1BhcnRpY2xlW10sXG4gICAgICAgICAgICBwYXJ0aWNsZUluZGV4OiBudW1iZXIsXG4gICAgICAgICAgICBpc0ludmVydGVkOiBib29sZWFuLFxuICAgICAgICAgICAgcGFyZW50R3Jhdml0eTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICApOiBudW1iZXJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDniannkIbmvJTnrpfjga7jgrnjgrHjg7zjg6vjga7lj5blvpfplqLmlbDjga7lrqPoqIBcbiAgICAgKiBAcGFyYW0gdHJhbnNsYXRpb25TY2FsZSDnp7vli5XlgKTjga7jgrnjgrHjg7zjg6tcbiAgICAgKiBAcGFyYW0gYW5nbGVTY2FsZSAgICDop5Lluqbjga7jgrnjgrHjg7zjg6tcbiAgICAgKiBAcmV0dXJuIOOCueOCseODvOODq+WApFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgcGh5c2ljc1NjYWxlR2V0dGVyXG4gICAge1xuICAgICAgICAoXG4gICAgICAgICAgICB0cmFuc2xhdGlvblNjYWxlOiBDdWJpc21WZWN0b3IyLFxuICAgICAgICAgICAgYW5nbGVTY2FsZTogbnVtYmVyXG4gICAgICAgICk6IG51bWJlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDniannkIbmvJTnrpfjga7lhaXlipvmg4XloLFcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtUGh5c2ljc0lucHV0XG4gICAge1xuICAgICAgICBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gbmV3IEN1YmlzbVBoeXNpY3NQYXJhbWV0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBzb3VyY2U6IEN1YmlzbVBoeXNpY3NQYXJhbWV0ZXI7ICAgICAvLyDlhaXlipvlhYPjga7jg5Hjg6njg6Hjg7zjgr9cbiAgICAgICAgc291cmNlUGFyYW1ldGVySW5kZXg6IG51bWJlcjsgICAgICAgLy8g5YWl5Yqb5YWD44Gu44OR44Op44Oh44O844K/44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgIHdlaWdodDogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgIC8vIOmHjeOBv1xuICAgICAgICB0eXBlOiBudW1iZXI7ICAgICAgICAgICAgICAgICAgICAgICAvLyDlhaXlipvjga7nqK7poZ5cbiAgICAgICAgcmVmbGVjdDogYm9vbGVhbjsgICAgICAgICAgICAgICAgICAgLy8g5YCk44GM5Y+N6Lui44GV44KM44Gm44GE44KL44GL44Gp44GG44GLXG4gICAgICAgIGdldE5vcm1hbGl6ZWRQYXJhbWV0ZXJWYWx1ZTogbm9ybWFsaXplZFBoeXNpY3NQYXJhbWV0ZXJWYWx1ZUdldHRlcjsgICAvLyDmraPopo/ljJbjgZXjgozjgZ/jg5Hjg6njg6Hjg7zjgr/lgKTjga7lj5blvpfplqLmlbBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYnJpZWYg54mp55CG5ryU566X44Gu5Ye65Yqb5oOF5aCxXG4gICAgICpcbiAgICAgKiDniannkIbmvJTnrpfjga7lh7rlipvmg4XloLHjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtUGh5c2ljc091dHB1dFxuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IEN1YmlzbVBoeXNpY3NQYXJhbWV0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25TY2FsZSA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVzdGluYXRpb246IEN1YmlzbVBoeXNpY3NQYXJhbWV0ZXI7ICAgICAgICAvLy88IOWHuuWKm+WFiOOBruODkeODqeODoeODvOOCv1xuICAgICAgICBkZXN0aW5hdGlvblBhcmFtZXRlckluZGV4OiBudW1iZXI7ICAgICAgICAgIC8vLzwg5Ye65Yqb5YWI44Gu44OR44Op44Oh44O844K/44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgIHZlcnRleEluZGV4OiBudW1iZXI7ICAgICAgICAgICAgICAgICAgICAgICAgLy8vPCDmjK/jgorlrZDjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgdHJhbnNsYXRpb25TY2FsZTogQ3ViaXNtVmVjdG9yMjsgICAgICAgICAgICAvLy88IOenu+WLleWApOOBruOCueOCseODvOODq1xuICAgICAgICBhbmdsZVNjYWxlOiBudW1iZXI7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vLzwg6KeS5bqm44Gu44K544Kx44O844OrXG4gICAgICAgIHdlaWdodDogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vIOmHjeOBv1xuICAgICAgICB0eXBlOiBDdWJpc21QaHlzaWNzU291cmNlOyAgICAgICAgICAgICAgICAgIC8vLzwg5Ye65Yqb44Gu56iu6aGeXG4gICAgICAgIHJlZmxlY3Q6IGJvb2xlYW47ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vPCDlgKTjgYzlj43ou6LjgZXjgozjgabjgYTjgovjgYvjganjgYbjgYtcbiAgICAgICAgdmFsdWVCZWxvd01pbmltdW06IG51bWJlcjsgICAgICAgICAgICAgICAgICAvLy88IOacgOWwj+WApOOCkuS4i+WbnuOBo+OBn+aZguOBruWApFxuICAgICAgICB2YWx1ZUV4Y2VlZGVkTWF4aW11bTogbnVtYmVyOyAgICAgICAgICAgICAgIC8vLzwg5pyA5aSn5YCk44KS44GT44GI44Gf5pmC44Gu5YCkXG4gICAgICAgIGdldFZhbHVlOiBwaHlzaWNzVmFsdWVHZXR0ZXI7ICAgICAgICAgICAgIC8vLzwg54mp55CG5ryU566X44Gu5YCk44Gu5Y+W5b6X6Zai5pWwXG4gICAgICAgIGdldFNjYWxlOiBwaHlzaWNzU2NhbGVHZXR0ZXI7ICAgICAgICAgICAgIC8vLzwg54mp55CG5ryU566X44Gu44K544Kx44O844Or5YCk44Gu5Y+W5b6X6Zai5pWwXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGJyaWVmIOeJqeeQhua8lOeul+OBruODh+ODvOOCv1xuICAgICAqXG4gICAgICog54mp55CG5ryU566X44Gu44OH44O844K/44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVBoeXNpY3NSaWdcbiAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtUGh5c2ljc1N1YlJpZz4oKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21QaHlzaWNzSW5wdXQ+KCk7XG4gICAgICAgICAgICB0aGlzLm91dHB1dHMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbVBoeXNpY3NPdXRwdXQ+KCk7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtUGh5c2ljc1BhcnRpY2xlPigpO1xuICAgICAgICAgICAgdGhpcy5ncmF2aXR5ID0gbmV3IEN1YmlzbVZlY3RvcjIoMCwgMCk7XG4gICAgICAgICAgICB0aGlzLndpbmQgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YlJpZ0NvdW50OiBudW1iZXI7ICAgICAgICAgICAgICAgICAgICAvLy88IOeJqeeQhua8lOeul+OBrueJqeeQhueCueOBruWAi+aVsFxuICAgICAgICBzZXR0aW5nczogY3NtVmVjdG9yPEN1YmlzbVBoeXNpY3NTdWJSaWc+OyAgICAgICAgLy8vPCDniannkIbmvJTnrpfjga7niannkIbngrnjga7nrqHnkIbjga7jg6rjgrnjg4hcbiAgICAgICAgaW5wdXRzOiBjc21WZWN0b3I8Q3ViaXNtUGh5c2ljc0lucHV0PjsgICAgICAgICAgIC8vLzwg54mp55CG5ryU566X44Gu5YWl5Yqb44Gu44Oq44K544OIXG4gICAgICAgIG91dHB1dHM6IGNzbVZlY3RvcjxDdWJpc21QaHlzaWNzT3V0cHV0PjsgICAgICAgICAvLy88IOeJqeeQhua8lOeul+OBruWHuuWKm+OBruODquOCueODiFxuICAgICAgICBwYXJ0aWNsZXM6IGNzbVZlY3RvcjxDdWJpc21QaHlzaWNzUGFydGljbGU+OyAgICAgLy8vPCDniannkIbmvJTnrpfjga7niannkIbngrnjga7jg6rjgrnjg4hcbiAgICAgICAgZ3Jhdml0eTogQ3ViaXNtVmVjdG9yMjsgICAgICAgICAgICAgICAgIC8vLzwg6YeN5YqbXG4gICAgICAgIHdpbmQ6IEN1YmlzbVZlY3RvcjI7ICAgICAgICAgICAgICAgICAgICAvLy88IOmiqFxuICAgIH07XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21qc29ufSBmcm9tICcuLi91dGlscy9jdWJpc21qc29uJztcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbXZlY3RvcjJ9IGZyb20gJy4uL21hdGgvY3ViaXNtdmVjdG9yMic7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZH0gZnJvbSAnLi4vaWQvY3ViaXNtaWQnO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtZnJhbWV3b3JrfSBmcm9tICcuLi9saXZlMmRjdWJpc21mcmFtZXdvcmsnO1xuaW1wb3J0IEN1YmlzbUZyYW1ld29yayA9IGN1YmlzbWZyYW1ld29yay5DdWJpc21GcmFtZXdvcms7XG5pbXBvcnQgQ3ViaXNtSWRIYW5kbGUgPSBjdWJpc21pZC5DdWJpc21JZEhhbmRsZTtcbmltcG9ydCBDdWJpc21WZWN0b3IyID0gY3ViaXNtdmVjdG9yMi5DdWJpc21WZWN0b3IyO1xuaW1wb3J0IEN1YmlzbUpzb24gPSBjdWJpc21qc29uLkN1YmlzbUpzb247XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLy8gSlNPTiBrZXlzXG4gICAgY29uc3QgUG9zaXRpb246IHN0cmluZyA9IFwiUG9zaXRpb25cIjtcbiAgICBjb25zdCBYOiBzdHJpbmcgPSBcIlhcIjtcbiAgICBjb25zdCBZOiBzdHJpbmcgPSBcIllcIjtcbiAgICBjb25zdCBBbmdsZTogc3RyaW5nID0gXCJBbmdsZVwiO1xuICAgIGNvbnN0IFR5cGU6IHN0cmluZyA9IFwiVHlwZVwiO1xuICAgIGNvbnN0IElkOiBzdHJpbmcgPSBcIklkXCI7XG5cbiAgICAvLyBNZXRhXG4gICAgY29uc3QgTWV0YTogc3RyaW5nID0gXCJNZXRhXCI7XG4gICAgY29uc3QgRWZmZWN0aXZlRm9yY2VzOiBzdHJpbmcgPSBcIkVmZmVjdGl2ZUZvcmNlc1wiO1xuICAgIGNvbnN0IFRvdGFsSW5wdXRDb3VudDogc3RyaW5nID0gXCJUb3RhbElucHV0Q291bnRcIjtcbiAgICBjb25zdCBUb3RhbE91dHB1dENvdW50OiBzdHJpbmcgPSBcIlRvdGFsT3V0cHV0Q291bnRcIjtcbiAgICBjb25zdCBQaHlzaWNzU2V0dGluZ0NvdW50OiBzdHJpbmcgPSBcIlBoeXNpY3NTZXR0aW5nQ291bnRcIjtcbiAgICBjb25zdCBHcmF2aXR5OiBzdHJpbmcgPSBcIkdyYXZpdHlcIjtcbiAgICBjb25zdCBXaW5kOiBzdHJpbmcgPSBcIldpbmRcIjtcbiAgICBjb25zdCBWZXJ0ZXhDb3VudDogc3RyaW5nID0gXCJWZXJ0ZXhDb3VudFwiO1xuXG4gICAgLy8gUGh5c2ljc1NldHRpbmdzXG4gICAgY29uc3QgUGh5c2ljc1NldHRpbmdzOiBzdHJpbmcgPSBcIlBoeXNpY3NTZXR0aW5nc1wiO1xuICAgIGNvbnN0IE5vcm1hbGl6YXRpb246IHN0cmluZyA9IFwiTm9ybWFsaXphdGlvblwiO1xuICAgIGNvbnN0IE1pbmltdW06IHN0cmluZyA9IFwiTWluaW11bVwiO1xuICAgIGNvbnN0IE1heGltdW06IHN0cmluZyA9IFwiTWF4aW11bVwiO1xuICAgIGNvbnN0IERlZmF1bHQ6IHN0cmluZyA9IFwiRGVmYXVsdFwiO1xuICAgIGNvbnN0IFJlZmxlY3Q6IHN0cmluZyA9IFwiUmVmbGVjdFwiO1xuICAgIGNvbnN0IFdlaWdodDogc3RyaW5nID0gXCJXZWlnaHRcIjtcblxuICAgIC8vIElucHV0XG4gICAgY29uc3QgSW5wdXQ6IHN0cmluZyA9IFwiSW5wdXRcIjtcbiAgICBjb25zdCBTb3VyY2U6IHN0cmluZyA9IFwiU291cmNlXCI7XG5cbiAgICAvLyBPdXRwdXRcbiAgICBjb25zdCBPdXRwdXQ6IHN0cmluZyA9IFwiT3V0cHV0XCI7XG4gICAgY29uc3QgU2NhbGU6IHN0cmluZyA9IFwiU2NhbGVcIjtcbiAgICBjb25zdCBWZXJ0ZXhJbmRleDogc3RyaW5nID0gXCJWZXJ0ZXhJbmRleFwiO1xuICAgIGNvbnN0IERlc3RpbmF0aW9uOiBzdHJpbmcgPSBcIkRlc3RpbmF0aW9uXCI7XG5cbiAgICAvLyBQYXJ0aWNsZVxuICAgIGNvbnN0IFZlcnRpY2VzOiBzdHJpbmcgPSBcIlZlcnRpY2VzXCI7XG4gICAgY29uc3QgTW9iaWxpdHk6IHN0cmluZyA9IFwiTW9iaWxpdHlcIjtcbiAgICBjb25zdCBEZWxheTogc3RyaW5nID0gXCJEZWxheVwiO1xuICAgIGNvbnN0IFJhZGl1czogc3RyaW5nID0gXCJSYWRpdXNcIjtcbiAgICBjb25zdCBBY2NlbGVyYXRpb246IHN0cmluZyA9IFwiQWNjZWxlcmF0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBwaHlzaWNzMy5qc29u44Gu44Kz44Oz44OG44OK44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVBoeXNpY3NKc29uXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIgcGh5c2ljczMuanNvbuOBjOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDjg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2pzb24gPSBDdWJpc21Kc29uLmNyZWF0ZShidWZmZXIsIHNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBDdWJpc21Kc29uLmRlbGV0ZSh0aGlzLl9qc29uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDph43lipvjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDph43liptcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRHcmF2aXR5KCk6IEN1YmlzbVZlY3RvcjJcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xuICAgICAgICAgICAgcmV0LnggPSB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKE1ldGEpLmdldFZhbHVlQnlTdHJpbmcoRWZmZWN0aXZlRm9yY2VzKS5nZXRWYWx1ZUJ5U3RyaW5nKEdyYXZpdHkpLmdldFZhbHVlQnlTdHJpbmcoWCkudG9GbG9hdCgpO1xuICAgICAgICAgICAgcmV0LnkgPSB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKE1ldGEpLmdldFZhbHVlQnlTdHJpbmcoRWZmZWN0aXZlRm9yY2VzKS5nZXRWYWx1ZUJ5U3RyaW5nKEdyYXZpdHkpLmdldFZhbHVlQnlTdHJpbmcoWSkudG9GbG9hdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDpoqjjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDpoqhcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRXaW5kKCk6IEN1YmlzbVZlY3RvcjJcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xuICAgICAgICAgICAgcmV0LnggPSB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKE1ldGEpLmdldFZhbHVlQnlTdHJpbmcoRWZmZWN0aXZlRm9yY2VzKS5nZXRWYWx1ZUJ5U3RyaW5nKFdpbmQpLmdldFZhbHVlQnlTdHJpbmcoWCkudG9GbG9hdCgpO1xuICAgICAgICAgICAgcmV0LnkgPSB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKE1ldGEpLmdldFZhbHVlQnlTdHJpbmcoRWZmZWN0aXZlRm9yY2VzKS5nZXRWYWx1ZUJ5U3RyaW5nKFdpbmQpLmdldFZhbHVlQnlTdHJpbmcoWSkudG9GbG9hdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDniannkIblupfjga7nrqHnkIbjga7lgIvmlbDjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDniannkIblupfjga7nrqHnkIbjga7lgIvmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdWJSaWdDb3VudCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoTWV0YSkuZ2V0VmFsdWVCeVN0cmluZyhQaHlzaWNzU2V0dGluZ0NvdW50KS50b0ludCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWFpeWKm+OBrue3j+WQiOioiOOBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOWFpeWKm+OBrue3j+WQiOioiFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFRvdGFsSW5wdXRDb3VudCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoTWV0YSkuZ2V0VmFsdWVCeVN0cmluZyhUb3RhbElucHV0Q291bnQpLnRvSW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Ye65Yqb44Gu57eP5ZCI6KiI44Gu5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4g5Ye65Yqb44Gu57eP5ZCI6KiIXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VG90YWxPdXRwdXRDb3VudCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoTWV0YSkuZ2V0VmFsdWVCeVN0cmluZyhUb3RhbE91dHB1dENvdW50KS50b0ludCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeJqeeQhueCueOBruWAi+aVsOOBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOeJqeeQhueCueOBruWAi+aVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZlcnRleENvdW50KCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhNZXRhKS5nZXRWYWx1ZUJ5U3RyaW5nKFZlcnRleENvdW50KS50b0ludCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOato+imj+WMluOBleOCjOOBn+S9jee9ruOBruacgOWwj+WApOOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gcGh5c2ljc1NldHRpbmdJbmRleCDniannkIbmvJTnrpfjga7oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDmraPopo/ljJbjgZXjgozjgZ/kvY3nva7jga7mnIDlsI/lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXROb3JtYWxpemF0aW9uUG9zaXRpb25NaW5pbXVtVmFsdWUocGh5c2ljc1NldHRpbmdJbmRleDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKFBoeXNpY3NTZXR0aW5ncykuZ2V0VmFsdWVCeUluZGV4KHBoeXNpY3NTZXR0aW5nSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoTm9ybWFsaXphdGlvbikuZ2V0VmFsdWVCeVN0cmluZyhQb3NpdGlvbikuZ2V0VmFsdWVCeVN0cmluZyhNaW5pbXVtKS50b0Zsb2F0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5q2j6KaP5YyW44GV44KM44Gf5L2N572u44Gu5pyA5aSn5YCk44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBwaHlzaWNzU2V0dGluZ0luZGV4IOeJqeeQhua8lOeul+OBruioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOato+imj+WMluOBleOCjOOBn+S9jee9ruOBruacgOWkp+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE5vcm1hbGl6YXRpb25Qb3NpdGlvbk1heGltdW1WYWx1ZShwaHlzaWNzU2V0dGluZ0luZGV4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoUGh5c2ljc1NldHRpbmdzKS5nZXRWYWx1ZUJ5SW5kZXgocGh5c2ljc1NldHRpbmdJbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhOb3JtYWxpemF0aW9uKS5nZXRWYWx1ZUJ5U3RyaW5nKFBvc2l0aW9uKS5nZXRWYWx1ZUJ5U3RyaW5nKE1heGltdW0pLnRvRmxvYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmraPopo/ljJbjgZXjgozjgZ/kvY3nva7jga7jg4fjg5Xjgqnjg6vjg4jlgKTjga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIHBoeXNpY3NTZXR0aW5nSW5kZXgg54mp55CG5ryU566X44Gu6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4g5q2j6KaP5YyW44GV44KM44Gf5L2N572u44Gu44OH44OV44Kp44Or44OI5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0Tm9ybWFsaXphdGlvblBvc2l0aW9uRGVmYXVsdFZhbHVlKHBoeXNpY3NTZXR0aW5nSW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhQaHlzaWNzU2V0dGluZ3MpLmdldFZhbHVlQnlJbmRleChwaHlzaWNzU2V0dGluZ0luZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKE5vcm1hbGl6YXRpb24pLmdldFZhbHVlQnlTdHJpbmcoUG9zaXRpb24pLmdldFZhbHVlQnlTdHJpbmcoRGVmYXVsdCkudG9GbG9hdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOato+imj+WMluOBleOCjOOBn+inkuW6puOBruacgOWwj+WApOOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gcGh5c2ljc1NldHRpbmdJbmRleCDniannkIbmvJTnrpfjga7oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDmraPopo/ljJbjgZXjgozjgZ/op5Lluqbjga7mnIDlsI/lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXROb3JtYWxpemF0aW9uQW5nbGVNaW5pbXVtVmFsdWUocGh5c2ljc1NldHRpbmdJbmRleDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKFBoeXNpY3NTZXR0aW5ncykuZ2V0VmFsdWVCeUluZGV4KHBoeXNpY3NTZXR0aW5nSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoTm9ybWFsaXphdGlvbikuZ2V0VmFsdWVCeVN0cmluZyhBbmdsZSkuZ2V0VmFsdWVCeVN0cmluZyhNaW5pbXVtKS50b0Zsb2F0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5q2j6KaP5YyW44GV44KM44Gf6KeS5bqm44Gu5pyA5aSn5YCk44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBwaHlzaWNzU2V0dGluZ0luZGV4XG4gICAgICAgICAqIEByZXR1cm4g5q2j6KaP5YyW44GV44KM44Gf6KeS5bqm44Gu5pyA5aSn5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0Tm9ybWFsaXphdGlvbkFuZ2xlTWF4aW11bVZhbHVlKHBoeXNpY3NTZXR0aW5nSW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhQaHlzaWNzU2V0dGluZ3MpLmdldFZhbHVlQnlJbmRleChwaHlzaWNzU2V0dGluZ0luZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKE5vcm1hbGl6YXRpb24pLmdldFZhbHVlQnlTdHJpbmcoQW5nbGUpLmdldFZhbHVlQnlTdHJpbmcoTWF4aW11bSkudG9GbG9hdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOato+imj+WMluOBleOCjOOBn+inkuW6puOBruODh+ODleOCqeODq+ODiOWApOOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gcGh5c2ljc1NldHRpbmdJbmRleCDniannkIbmvJTnrpfjga7oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDmraPopo/ljJbjgZXjgozjgZ/op5Lluqbjga7jg4fjg5Xjgqnjg6vjg4jlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXROb3JtYWxpemF0aW9uQW5nbGVEZWZhdWx0VmFsdWUocGh5c2ljc1NldHRpbmdJbmRleDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKFBoeXNpY3NTZXR0aW5ncykuZ2V0VmFsdWVCeUluZGV4KHBoeXNpY3NTZXR0aW5nSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoTm9ybWFsaXphdGlvbikuZ2V0VmFsdWVCeVN0cmluZyhBbmdsZSkuZ2V0VmFsdWVCeVN0cmluZyhEZWZhdWx0KS50b0Zsb2F0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YWl5Yqb44Gu5YCL5pWw44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBwaHlzaWNzU2V0dGluZ0luZGV4IOeJqeeQhua8lOeul+OBruioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOWFpeWKm+OBruWAi+aVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldElucHV0Q291bnQocGh5c2ljc1NldHRpbmdJbmRleDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKFBoeXNpY3NTZXR0aW5ncykuZ2V0VmFsdWVCeUluZGV4KHBoeXNpY3NTZXR0aW5nSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoSW5wdXQpLmdldFZlY3RvcigpLmdldFNpemUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlhaXlipvjga7ph43jgb/jga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIHBoeXNpY3NTZXR0aW5nSW5kZXgg54mp55CG5ryU566X44Gu6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSBpbnB1dEluZGV4IOWFpeWKm+OBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOWFpeWKm+OBrumHjeOBv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldElucHV0V2VpZ2h0KHBoeXNpY3NTZXR0aW5nSW5kZXg6IG51bWJlciwgaW5wdXRJbmRleDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKFBoeXNpY3NTZXR0aW5ncykuZ2V0VmFsdWVCeUluZGV4KHBoeXNpY3NTZXR0aW5nSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoSW5wdXQpLmdldFZhbHVlQnlJbmRleChpbnB1dEluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKFdlaWdodCkudG9GbG9hdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWFpeWKm+OBruWPjei7ouOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gcGh5c2ljc1NldHRpbmdJbmRleCDniannkIbmvJTnrpfjga7oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHBhcmFtIGlucHV0SW5kZXgg5YWl5Yqb44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4g5YWl5Yqb44Gu5Y+N6LuiXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0SW5wdXRSZWZsZWN0KHBoeXNpY3NTZXR0aW5nSW5kZXg6IG51bWJlciwgaW5wdXRJbmRleDogbnVtYmVyKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhQaHlzaWNzU2V0dGluZ3MpLmdldFZhbHVlQnlJbmRleChwaHlzaWNzU2V0dGluZ0luZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKElucHV0KS5nZXRWYWx1ZUJ5SW5kZXgoaW5wdXRJbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhSZWZsZWN0KS50b0Jvb2xlYW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlhaXlipvjga7nqK7poZ7jga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIHBoeXNpY3NTZXR0aW5nSW5kZXgg54mp55CG5ryU566X44Gu6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSBpbnB1dEluZGV4IOWFpeWKm+OBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOWFpeWKm+OBrueorumhnlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldElucHV0VHlwZShwaHlzaWNzU2V0dGluZ0luZGV4OiBudW1iZXIsIGlucHV0SW5kZXg6IG51bWJlcik6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhQaHlzaWNzU2V0dGluZ3MpLmdldFZhbHVlQnlJbmRleChwaHlzaWNzU2V0dGluZ0luZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKElucHV0KS5nZXRWYWx1ZUJ5SW5kZXgoaW5wdXRJbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhUeXBlKS5nZXRSYXdTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlhaXlipvlhYPjga5JROOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gcGh5c2ljc1NldHRpbmdJbmRleCDniannkIbmvJTnrpfjga7oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHBhcmFtIGlucHV0SW5kZXgg5YWl5Yqb44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4g5YWl5Yqb5YWD44GuSURcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRJbnB1dFNvdXJjZUlkKHBoeXNpY3NTZXR0aW5nSW5kZXg6IG51bWJlciwgaW5wdXRJbmRleDogbnVtYmVyKTogQ3ViaXNtSWRIYW5kbGVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZCh0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKFBoeXNpY3NTZXR0aW5ncykuZ2V0VmFsdWVCeUluZGV4KHBoeXNpY3NTZXR0aW5nSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoSW5wdXQpLmdldFZhbHVlQnlJbmRleChpbnB1dEluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKFNvdXJjZSkuZ2V0VmFsdWVCeVN0cmluZyhJZCkuZ2V0UmF3U3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWHuuWKm+OBruWAi+aVsOOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gcGh5c2ljc1NldHRpbmdJbmRleCDniannkIbmvJTnrpfjga7oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDlh7rlipvjga7lgIvmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRPdXRwdXRDb3VudChwaHlzaWNzU2V0dGluZ0luZGV4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoUGh5c2ljc1NldHRpbmdzKS5nZXRWYWx1ZUJ5SW5kZXgocGh5c2ljc1NldHRpbmdJbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhPdXRwdXQpLmdldFZlY3RvcigpLmdldFNpemUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlh7rlipvjga7niannkIbngrnjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIHBoeXNpY3NTZXR0aW5nSW5kZXgg54mp55CG5ryU566X44Gu6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSBvdXRwdXRJbmRleCDlh7rlipvjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDlh7rlipvjga7niannkIbngrnjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRPdXRwdXRWZXJ0ZXhJbmRleChwaHlzaWNzU2V0dGluZ0luZGV4OiBudW1iZXIsIG91dHB1dEluZGV4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoUGh5c2ljc1NldHRpbmdzKS5nZXRWYWx1ZUJ5SW5kZXgocGh5c2ljc1NldHRpbmdJbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhPdXRwdXQpLmdldFZhbHVlQnlJbmRleChvdXRwdXRJbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhWZXJ0ZXhJbmRleCkudG9JbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlh7rlipvjga7op5Lluqbjga7jgrnjgrHjg7zjg6vjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIHBoeXNpY3NTZXR0aW5nSW5kZXgg54mp55CG5ryU566X44Gu6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSBvdXRwdXRJbmRleCDlh7rlipvjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDlh7rlipvjga7op5Lluqbjga7jgrnjgrHjg7zjg6tcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRPdXRwdXRBbmdsZVNjYWxlKHBoeXNpY3NTZXR0aW5nSW5kZXg6IG51bWJlciwgb3V0cHV0SW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhQaHlzaWNzU2V0dGluZ3MpLmdldFZhbHVlQnlJbmRleChwaHlzaWNzU2V0dGluZ0luZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKE91dHB1dCkuZ2V0VmFsdWVCeUluZGV4KG91dHB1dEluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKFNjYWxlKS50b0Zsb2F0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Ye65Yqb44Gu6YeN44G/44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBwaHlzaWNzU2V0dGluZ0luZGV4IOeJqeeQhua8lOeul+OBruioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcGFyYW0gb3V0cHV0SW5kZXgg5Ye65Yqb44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4g5Ye65Yqb44Gu6YeN44G/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0T3V0cHV0V2VpZ2h0KHBoeXNpY3NTZXR0aW5nSW5kZXg6IG51bWJlciwgb3V0cHV0SW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhQaHlzaWNzU2V0dGluZ3MpLmdldFZhbHVlQnlJbmRleChwaHlzaWNzU2V0dGluZ0luZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKE91dHB1dCkuZ2V0VmFsdWVCeUluZGV4KG91dHB1dEluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKFdlaWdodCkudG9GbG9hdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWHuuWKm+WFiOOBrklE44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBwaHlzaWNzU2V0dGluZ0luZGV4IOeJqeeQhua8lOeul+OBruioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcGFyYW0gb3V0cHV0SW5kZXjjgIDlh7rlipvjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDlh7rlipvlhYjjga5JRFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE91dHB1dERlc3RpbmF0aW9uSWQocGh5c2ljc1NldHRpbmdJbmRleDogbnVtYmVyLCBvdXRwdXRJbmRleDogbnVtYmVyKTogQ3ViaXNtSWRIYW5kbGVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZCh0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKFBoeXNpY3NTZXR0aW5ncykuZ2V0VmFsdWVCeUluZGV4KHBoeXNpY3NTZXR0aW5nSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoT3V0cHV0KS5nZXRWYWx1ZUJ5SW5kZXgob3V0cHV0SW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoRGVzdGluYXRpb24pLmdldFZhbHVlQnlTdHJpbmcoSWQpLmdldFJhd1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlh7rlipvjga7nqK7poZ7jga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIHBoeXNpY3NTZXR0aW5nSW5kZXgg54mp55CG5ryU566X44Gu6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSBvdXRwdXRJbmRleCDlh7rlipvjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDlh7rlipvjga7nqK7poZ5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRPdXRwdXRUeXBlKHBoeXNpY3NTZXR0aW5nSW5kZXg6IG51bWJlciwgb3V0cHV0SW5kZXg6IG51bWJlcik6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhQaHlzaWNzU2V0dGluZ3MpLmdldFZhbHVlQnlJbmRleChwaHlzaWNzU2V0dGluZ0luZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKE91dHB1dCkuZ2V0VmFsdWVCeUluZGV4KG91dHB1dEluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKFR5cGUpLmdldFJhd1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWHuuWKm+OBruWPjei7ouOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gcGh5c2ljc1NldHRpbmdJbmRleCDniannkIbmvJTnrpfjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHBhcmFtIG91dHB1dEluZGV4IOWHuuWKm+OBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOWHuuWKm+OBruWPjei7olxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE91dHB1dFJlZmxlY3QocGh5c2ljc1NldHRpbmdJbmRleDogbnVtYmVyLCBvdXRwdXRJbmRleDogbnVtYmVyKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhQaHlzaWNzU2V0dGluZ3MpLmdldFZhbHVlQnlJbmRleChwaHlzaWNzU2V0dGluZ0luZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKE91dHB1dCkuZ2V0VmFsdWVCeUluZGV4KG91dHB1dEluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKFJlZmxlY3QpLnRvQm9vbGVhbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeJqeeQhueCueOBruWAi+aVsOOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gcGh5c2ljc1NldHRpbmdJbmRleCDniannkIbmvJTnrpfnlLfoqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDniannkIbngrnjga7lgIvmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRQYXJ0aWNsZUNvdW50KHBoeXNpY3NTZXR0aW5nSW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhQaHlzaWNzU2V0dGluZ3MpLmdldFZhbHVlQnlJbmRleChwaHlzaWNzU2V0dGluZ0luZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKFZlcnRpY2VzKS5nZXRWZWN0b3IoKS5nZXRTaXplKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54mp55CG54K544Gu5YuV44GN44KE44GZ44GV44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBwaHlzaWNzU2V0dGluZ0luZGV4IOeJqeeQhua8lOeul+OBruioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcGFyYW0gdmVydGV4SW5kZXgg54mp55CG54K544Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4g54mp55CG54K544Gu5YuV44GN44KE44GZ44GVXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UGFydGljbGVNb2JpbGl0eShwaHlzaWNzU2V0dGluZ0luZGV4OiBudW1iZXIsIHZlcnRleEluZGV4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoUGh5c2ljc1NldHRpbmdzKS5nZXRWYWx1ZUJ5SW5kZXgocGh5c2ljc1NldHRpbmdJbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhWZXJ0aWNlcykuZ2V0VmFsdWVCeUluZGV4KHZlcnRleEluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKE1vYmlsaXR5KS50b0Zsb2F0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54mp55CG54K544Gu6YGF44KM44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBwaHlzaWNzU2V0dGluZ0luZGV4IOeJqeeQhua8lOeul+OBruioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcGFyYW0gdmVydGV4SW5kZXgg54mp55CG54K544Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4g54mp55CG54K544Gu6YGF44KMXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UGFydGljbGVEZWxheShwaHlzaWNzU2V0dGluZ0luZGV4OiBudW1iZXIsIHZlcnRleEluZGV4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoUGh5c2ljc1NldHRpbmdzKS5nZXRWYWx1ZUJ5SW5kZXgocGh5c2ljc1NldHRpbmdJbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhWZXJ0aWNlcykuZ2V0VmFsdWVCeUluZGV4KHZlcnRleEluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKERlbGF5KS50b0Zsb2F0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54mp55CG54K544Gu5Yqg6YCf5bqm44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBwaHlzaWNzU2V0dGluZ0luZGV4IOeJqeeQhua8lOeul+OBruioreWumlxuICAgICAgICAgKiBAcGFyYW0gdmVydGV4SW5kZXgg54mp55CG54K544Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4g54mp55CG54K544Gu5Yqg6YCf5bqmXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UGFydGljbGVBY2NlbGVyYXRpb24ocGh5c2ljc1NldHRpbmdJbmRleDogbnVtYmVyLCB2ZXJ0ZXhJbmRleDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKFBoeXNpY3NTZXR0aW5ncykuZ2V0VmFsdWVCeUluZGV4KHBoeXNpY3NTZXR0aW5nSW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoVmVydGljZXMpLmdldFZhbHVlQnlJbmRleCh2ZXJ0ZXhJbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhBY2NlbGVyYXRpb24pLnRvRmxvYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDniannkIbngrnjga7ot53pm6Ljga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIHBoeXNpY3NTZXR0aW5nSW5kZXgg54mp55CG5ryU566X44Gu6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhJbmRleCDniannkIbngrnjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDniannkIbngrnjga7ot53pm6JcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRQYXJ0aWNsZVJhZGl1cyhwaHlzaWNzU2V0dGluZ0luZGV4OiBudW1iZXIsIHZlcnRleEluZGV4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoUGh5c2ljc1NldHRpbmdzKS5nZXRWYWx1ZUJ5SW5kZXgocGh5c2ljc1NldHRpbmdJbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhWZXJ0aWNlcykuZ2V0VmFsdWVCeUluZGV4KHZlcnRleEluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKFJhZGl1cykudG9JbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDniannkIbngrnjga7kvY3nva7jga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIHBoeXNpY3NTZXR0aW5nSW5kZXgg54mp55CG5ryU566X44Gu6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhJbmRlIOeJqeeQhueCueOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOeJqeeQhueCueOBruS9jee9rlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFBhcnRpY2xlUG9zaXRpb24ocGh5c2ljc1NldHRpbmdJbmRleDogbnVtYmVyLCB2ZXJ0ZXhJbmRleDogbnVtYmVyKTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMCwgMCk7XG4gICAgICAgICAgICByZXQueCA9IHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoUGh5c2ljc1NldHRpbmdzKS5nZXRWYWx1ZUJ5SW5kZXgocGh5c2ljc1NldHRpbmdJbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhWZXJ0aWNlcykuZ2V0VmFsdWVCeUluZGV4KHZlcnRleEluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKFBvc2l0aW9uKS5nZXRWYWx1ZUJ5U3RyaW5nKFgpLnRvRmxvYXQoKTtcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhQaHlzaWNzU2V0dGluZ3MpLmdldFZhbHVlQnlJbmRleChwaHlzaWNzU2V0dGluZ0luZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKFZlcnRpY2VzKS5nZXRWYWx1ZUJ5SW5kZXgodmVydGV4SW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoUG9zaXRpb24pLmdldFZhbHVlQnlTdHJpbmcoWSkudG9GbG9hdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9qc29uOiBDdWJpc21Kc29uOyAgLy8gcGh5c2ljczMuanNvbuODh+ODvOOCv1xuICAgIH1cblxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbWF0cml4NDR9IGZyb20gJy4uL21hdGgvY3ViaXNtbWF0cml4NDQnO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW9kZWx9IGZyb20gJy4uL21vZGVsL2N1YmlzbW1vZGVsJztcbmltcG9ydCBDdWJpc21Nb2RlbCA9IGN1YmlzbW1vZGVsLkN1YmlzbU1vZGVsO1xuaW1wb3J0IEN1YmlzbU1hdHJpeDQ0ID0gY3ViaXNtbWF0cml4NDQuQ3ViaXNtTWF0cml4NDQ7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44Oi44OH44Or5o+P55S744KS5Yem55CG44GZ44KL44Os44Oz44OA44OpXG4gICAgICpcbiAgICAgKiDjgrXjg5bjgq/jg6njgrnjgavnkrDlooPkvp3lrZjjga7mj4/nlLvlkb3ku6TjgpLoqJjov7DjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3ViaXNtUmVuZGVyZXJcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZfjgablj5blvpfjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiDjg6zjg7Pjg4Djg6njga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6IEN1YmlzbVJlbmRlcmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCueOCkuino+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBkZWxldGUocmVuZGVyZXI6IEN1YmlzbVJlbmRlcmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICByZW5kZXJlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu5Yid5pyf5YyW5Yem55CG44KS5a6f6KGM44GZ44KLXG4gICAgICAgICAqIOW8leaVsOOBq+a4oeOBl+OBn+ODouODh+ODq+OBi+OCieODrOODs+ODgOODqeOBruWIneacn+WMluWHpueQhuOBq+W/heimgeOBquaDheWgseOCkuWPluOCiuWHuuOBmeOBk+OBqOOBjOOBp+OBjeOCi1xuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg44Oi44OH44Or44Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5pdGlhbGl6ZShtb2RlbDogQ3ViaXNtTW9kZWwpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsID0gbW9kZWw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or44KS5o+P55S744GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZHJhd01vZGVsKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5nZXRNb2RlbCgpID09IG51bGwpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5kb0RyYXdNb2RlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJfjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICog6YWN5YiX44Gv6KSH6KO944GV44KM44KL44Gu44Gn44CB5YWD44Gu6YWN5YiX44Gv5aSW44Gn56C05qOE44GX44Gm6Imv44GEXG4gICAgICAgICAqIEBwYXJhbSBtYXRyaXg0NCBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0TXZwTWF0cml4KG1hdHJpeDQ0OiBDdWJpc21NYXRyaXg0NCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbXZwTWF0cml4NHg0LnNldE1hdHJpeChtYXRyaXg0NC5nZXRBcnJheSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiX44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE12cE1hdHJpeCgpOiBDdWJpc21NYXRyaXg0NFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbXZwTWF0cml4NHg0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OBruiJsuOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiDlkIToibIwLjB+MS4w44Gu6ZaT44Gn5oyH5a6a44GZ44KL77yIMS4w44GM5qiZ5rqW44Gu54q25oWL77yJXG4gICAgICAgICAqIEBwYXJhbSByZWQg6LWk44OB44Oj44Oz44ON44Or44Gu5YCkXG4gICAgICAgICAqIEBwYXJhbSBncmVlbiDnt5Hjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcbiAgICAgICAgICogQHBhcmFtIGJsdWUg6Z2S44OB44Oj44Oz44ON44Or44Gu5YCkXG4gICAgICAgICAqIEBwYXJhbSBhbHBoYSDOseODgeODo+ODs+ODjeODq+OBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldE1vZGVsQ29sb3IocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlciwgYWxwaGE6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYocmVkIDwgMC4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZCA9IDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocmVkID4gMS4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZCA9IDEuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoZ3JlZW4gPCAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ3JlZW4gPSAwLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGdyZWVuID4gMS4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdyZWVuID0gMS4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihibHVlIDwgMC4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJsdWUgPSAwLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGJsdWUgPiAxLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmx1ZSA9IDEuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoYWxwaGEgPCAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSAwLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGFscGhhID4gMS4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFscGhhID0gMS4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLlIgPSByZWQ7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLkcgPSBncmVlbjtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuQiA9IGJsdWU7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLkEgPSBhbHBoYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7oibLjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICog5ZCE6ImyMC4wfjEuMOOBrumWk+OBp+aMh+WumuOBmeOCiygxLjDjgYzmqJnmupbjga7nirbmhYspXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gUkdCQeOBruOCq+ODqeODvOaDheWgsVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vZGVsQ29sb3IoKTogQ3ViaXNtVGV4dHVyZUNvbG9yXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX21vZGVsQ29sb3IpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDkuZfnrpfmuIjjgb/OseOBruacieWKueODu+eEoeWKueOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiDmnInlirnjgavjgZnjgovjgarjgol0cnVl44CB54Sh5Yq544Gr44GZ44KL44Gq44KJZmFsc2XjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRJc1ByZW11bHRpcGxpZWRBbHBoYShlbmFibGU6IGJvb2xlYW4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJlbXVsdGlwbGllZEFscGhhID0gZW5hYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS5l+eul+a4iOOBv86x44Gu5pyJ5Yq544O754Sh5Yq544KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDkuZfnrpfmuIjjgb/jga7OseacieWKuVxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOS5l+eul+a4iOOBv+OBrs6x54Sh5Yq5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNQcmVtdWx0aXBsaWVkQWxwaGEoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kr44Oq44Oz44Kw77yI54mH6Z2i5o+P55S777yJ44Gu5pyJ5Yq544O754Sh5Yq544KS44K744OD44OI44GZ44KL44CCXG4gICAgICAgICAqIOacieWKueOBq+OBmeOCi+OBquOCiXRydWXjgIHnhKHlirnjgavjgZnjgovjgarjgolmYWxzZeOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldElzQ3VsbGluZyhjdWxsaW5nOiBib29sZWFuKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pc0N1bGxpbmcgPSBjdWxsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCq+ODquODs+OCsO+8iOeJh+mdouaPj+eUu++8ieOBruacieWKueODu+eEoeWKueOCkuWPluW+l+OBmeOCi+OAglxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg44Kr44Oq44Oz44Kw5pyJ5Yq5XG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Kr44Oq44Oz44Kw54Sh5Yq5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNDdWxsaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ3VsbGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr/jgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICog44OR44Op44Oh44O844K/5YCk44Gu5b2x6Z+/5bqm44Gv44Os44Oz44OA44Op44Gu5a6f6KOF44Gr5L6d5a2Y44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBuIOODkeODqeODoeODvOOCv+OBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldEFuaXNvdHJvcHkobjogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9hbmlzb3J0b3B5ID0gbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr/jgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICogQHJldHVybiDnlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRBbmlzb3Ryb3B5KCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5pc29ydG9weTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6rjg7PjgrDjgZnjgovjg6Ljg4fjg6vjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDjg6zjg7Pjg4Djg6rjg7PjgrDjgZnjgovjg6Ljg4fjg6tcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNb2RlbCgpOiBDdWJpc21Nb2RlbFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pc0N1bGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJlbXVsdGlwbGllZEFscGhhID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9hbmlzb3J0b3B5ID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvciA9IG5ldyBDdWJpc21UZXh0dXJlQ29sb3IoKTtcblxuICAgICAgICAgICAgLy8g5Y2Y5L2N6KGM5YiX44Gr5Yid5pyf5YyWXG4gICAgICAgICAgICB0aGlzLl9tdnBNYXRyaXg0eDQgPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NC5sb2FkSWRlbnRpdHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vmj4/nlLvjga7lrp/oo4VcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBkb0RyYXdNb2RlbCgpOiB2b2lkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jvvIjjgqLjg7zjg4jjg6Hjg4Pjgrfjg6XvvInjgpLmj4/nlLvjgZnjgotcbiAgICAgICAgICog44Od44Oq44K044Oz44Oh44OD44K344Ol44Go44OG44Kv44K544OB44Oj55Wq5Y+344KS44K744OD44OI44Gn5rih44GZ44CCXG4gICAgICAgICAqIEBwYXJhbSB0ZXh0dXJlTm8g5o+P55S744GZ44KL44OG44Kv44K544OB44Oj55Wq5Y+3XG4gICAgICAgICAqIEBwYXJhbSBpbmRleENvdW50IOaPj+eUu+OCquODluOCuOOCp+OCr+ODiOOBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcGFyYW0gdmVydGV4Q291bnQg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu6aCC54K55pWwXG4gICAgICAgICAqIEBwYXJhbSBpbmRleEFycmF5IOODneODquOCtOODs+ODoeODg+OCt+ODpemggueCueOBruOCpOODs+ODh+ODg+OCr+OCuemFjeWIl1xuICAgICAgICAgKiBAcGFyYW0gdmVydGV4QXJyYXkg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu6aCC54K56YWN5YiXXG4gICAgICAgICAqIEBwYXJhbSB1dkFycmF5IHV26YWN5YiXXG4gICAgICAgICAqIEBwYXJhbSBvcGFjaXR5IOS4jemAj+aYjuW6plxuICAgICAgICAgKiBAcGFyYW0gY29sb3JCbGVuZE1vZGUg44Kr44Op44O844OW44Os44Oz44OH44Kj44Oz44Kw44Gu44K/44Kk44OXXG4gICAgICAgICAqIEBwYXJhbSBpbnZlcnRlZE1hc2sg44Oe44K544Kv5L2/55So5pmC44Gu44Oe44K544Kv44Gu5Y+N6Lui5L2/55SoXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZHJhd01lc2godGV4dHVyZU5vOiBudW1iZXIsIGluZGV4Q291bnQ6IG51bWJlciwgdmVydGV4Q291bnQ6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4QXJyYXk6IFVpbnQxNkFycmF5LCB2ZXJ0ZXhBcnJheTogRmxvYXQzMkFycmF5LCB1dkFycmF5OiBGbG9hdDMyQXJyYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBudW1iZXIsIGNvbG9yQmxlbmRNb2RlOiBDdWJpc21CbGVuZE1vZGUsIGludmVydGVkTWFzazogYm9vbGVhbik6IHZvaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBjOS/neaMgeOBmeOCi+mdmeeahOOBquODquOCveODvOOCueOCkumWi+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGF0aWNSZWxlYXNlOiBGdW5jdGlvbjtcblxuICAgICAgICBwcm90ZWN0ZWQgX212cE1hdHJpeDR4NDogQ3ViaXNtTWF0cml4NDQ7ICAgICAgICAgICAgICAgICAgLy8gTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xuICAgICAgICBwcm90ZWN0ZWQgX21vZGVsQ29sb3I6IEN1YmlzbVRleHR1cmVDb2xvcjsgICAgICAgICAgICAgICAgLy8g44Oi44OH44Or6Ieq5L2T44Gu44Kr44Op44O877yIUkdCQe+8iVxuICAgICAgICBwcm90ZWN0ZWQgX2lzQ3VsbGluZzogYm9vbGVhbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Kr44Oq44Oz44Kw44GM5pyJ5Yq544Gq44KJdHJ1ZVxuICAgICAgICBwcm90ZWN0ZWQgX2lzUHJlbXVsdGlwbGllZEFscGhhOiBib29sZWFuOyAgICAgICAgICAgICAgICAgLy8g5LmX566X5riI44G/zrHjgarjgol0cnVlXG4gICAgICAgIHByb3RlY3RlZCBfYW5pc29ydG9weTogYW55OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr9cbiAgICAgICAgcHJvdGVjdGVkIF9tb2RlbDogQ3ViaXNtTW9kZWw7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODrOODs+ODgOODquODs+OCsOWvvuixoeOBruODouODh+ODq1xuICAgIH1cblxuICAgIGV4cG9ydCBlbnVtIEN1YmlzbUJsZW5kTW9kZVxuICAgIHtcbiAgICAgICAgQ3ViaXNtQmxlbmRNb2RlX05vcm1hbCA9IDAsICAgICAgICAgLy8g6YCa5bi4XG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9BZGRpdGl2ZSA9IDEsICAgICAgIC8vIOWKoOeul1xuICAgICAgICBDdWJpc21CbGVuZE1vZGVfTXVsdGlwbGljYXRpdmUgPSAyLCAvLyDkuZfnrpdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog44OG44Kv44K544OB44Oj44Gu6Imy44KSUkdCQeOBp+aJseOBhuOBn+OCgeOBruOCr+ODqeOCuVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21UZXh0dXJlQ29sb3JcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5SID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5HID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5CID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5BID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgUjogbnVtYmVyOyAgLy8g6LWk44OB44Oj44Oz44ON44OrXG4gICAgICAgIEc6IG51bWJlcjsgIC8vIOe3keODgeODo+ODs+ODjeODq1xuICAgICAgICBCOiBudW1iZXI7ICAvLyDpnZLjg4Hjg6Pjg7Pjg43jg6tcbiAgICAgICAgQTogbnVtYmVyOyAgLy8gzrHjg4Hjg6Pjg7Pjg43jg6tcbiAgICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBDdWJpc21Mb2dEZWJ1ZyB9IGZyb20gXCIuLi91dGlscy9jdWJpc21kZWJ1Z1wiO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIEtleS1WYWx1ZeOBruODmuOCouOCkuWumue+qeOBmeOCi+OCr+ODqeOCuVxuICAgICAqIGNzbU1hcOOCr+ODqeOCueOBruWGhemDqOODh+ODvOOCv+OBp+S9v+eUqOOBmeOCi+OAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBjc21QYWlyPF9LZXlULCBfVmFsVD5cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICogQHBhcmFtIGtleSBLZXnjgajjgZfjgabjgrvjg4Pjg4jjgZnjgovlgKRcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIFZhbHVl44Go44GX44Gm44K744OD44OI44GZ44KL5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Ioa2V5PzogX0tleVQsIHZhbHVlPzogX1ZhbFQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3QgPSAoa2V5ID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICA6IGtleTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSAodmFsdWUgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgIDogdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZmlyc3Q6IF9LZXlUOyAgIC8vIGtleeOBqOOBl+OBpueUqOOBhOOCi+WkieaVsFxuICAgICAgICBwdWJsaWMgc2Vjb25kOiBfVmFsVDsgIC8vIHZhbHVl44Go44GX44Gm55So44GE44KL5aSJ5pWwXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44Oe44OD44OX5Z6LXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbU1hcDxfS2V5VCwgX1ZhbFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqIEBwYXJhbSBzaXplIOWIneacn+WMluaZgueCueOBp+eiuuS/neOBmeOCi+OCteOCpOOCulxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU/OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHNpemUgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHNpemUgPCAxKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2R1bW15VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHVtbXlWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgq3jg7zjgpLov73liqDjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGtleSDmlrDjgZ/jgavov73liqDjgZnjgovjgq3jg7xcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhcHBlbmRLZXkoa2V5OiBfS2V5VCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgLy8g5paw44GX44GPS2V5L1ZhbHVl44Gu44Oa44Ki44KS5L2c44KLXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eSh0aGlzLl9zaXplICsgMSwgZmFsc2UpOyAvLyAx44Gk5Lul5LiK5YWl44KL6ZqZ6ZaT44KS5L2c44KLXG4gICAgICAgICAgICAvLyDmlrDjgZfjgYRrZXkvdmFsdWXjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjga9fc2l6ZVxuXG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXNbdGhpcy5fc2l6ZV0gPSBuZXcgY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+KGtleSk7XG4gICAgICAgICAgICB0aGlzLl9zaXplICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2tleV3jga7jgqrjg7zjg5Djg7zjg63jg7zjg4koZ2V0KVxuICAgICAgICAgKiBAcGFyYW0ga2V5IOa3u+Wtl+OBi+OCieeJueWumuOBleOCjOOCi1ZhbHVl5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWUoa2V5OiBfS2V5VCk6IF9WYWxUXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IC0xO1xuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihmb3VuZCA+PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlWYWx1ZXNbZm91bmRdLnNlY29uZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZEtleShrZXkpOyAvLyDmlrDopo/jgq3jg7zjgpLov73liqBcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5VmFsdWVzW3RoaXMuX3NpemUgLSAxXS5zZWNvbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2tleV3jga7jgqrjg7zjg5Djg7zjg63jg7zjg4koc2V0KVxuICAgICAgICAgKiBAcGFyYW0ga2V5IOa3u+Wtl+OBi+OCieeJueWumuOBleOCjOOCi1ZhbHVl5YCkXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDku6PlhaXjgZnjgotWYWx1ZeWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldFZhbHVlKGtleTogX0tleVQsIHZhbHVlOiBfVmFsVCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGZvdW5kID0gLTE7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXNbaV0uZmlyc3QgPT0ga2V5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGZvdW5kID49IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzW2ZvdW5kXS5zZWNvbmQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZEtleShrZXkpOyAvLyDmlrDopo/jgq3jg7zjgpLov73liqBcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXNbdGhpcy5fc2l6ZSAtIDFdLnNlY29uZCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOOBp+a4oeOBl+OBn0tleeOCkuaMgeOBpOimgee0oOOBjOWtmOWcqOOBmeOCi+OBi1xuICAgICAgICAgKiBAcGFyYW0ga2V5IOWtmOWcqOOCkueiuuiqjeOBmeOCi2tleVxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5byV5pWw44Gn5rih44GX44Gfa2V544KS5oyB44Gk6KaB57Sg44GM5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5byV5pWw44Gn5rih44GX44Gfa2V544KS5oyB44Gk6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFeGlzdChrZXk6IF9LZXlUKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBrZXlWYWx1ZeOBruODneOCpOODs+OCv+OCkuWFqOOBpuino+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNsZWFyKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gdm9pZCAwO1xuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgrXjgqTjgrrjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiDjgrPjg7Pjg4bjg4rjga7jgrXjgqTjgrpcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgpLnorrkv53jgZnjgotcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5paw44Gf44Gq44Kt44Oj44OR44K344OG44Kj44CC5byV5pWw44Gu5YCk44GM54++5Zyo44Gu44K144Kk44K65pyq5rqA44Gu5aC05ZCI44Gv5L2V44KC44GX44Gq44GE44CCXG4gICAgICAgICAqIEBwYXJhbSBmaXRUb1NpemUgdHJ1ZeOBquOCieaMh+WumuOBl+OBn+OCteOCpOOCuuOBq+WQiOOCj+OBm+OCi+OAgmZhbHNl44Gq44KJ44K144Kk44K644KSMuWAjeeiuuS/neOBl+OBpuOBiuOBj+OAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZXBhcmVDYXBhY2l0eShuZXdTaXplOiBudW1iZXIsIGZpdFRvU2l6ZTogYm9vbGVhbik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYobmV3U2l6ZSA+IHRoaXMuX2tleVZhbHVlcy5sZW5ndGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZpdFRvU2l6ZSAmJiBuZXdTaXplIDwgY3NtTWFwLkRlZmF1bHRTaXplKSBuZXdTaXplID0gY3NtTWFwLkRlZmF1bHRTaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZpdFRvU2l6ZSAmJiBuZXdTaXplIDwgdGhpcy5fa2V5VmFsdWVzLmxlbmd0aCAqIDIpIG5ld1NpemUgPSB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoICogMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzLmxlbmd0aCA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFiOmgreimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGJlZ2luKCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPiA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMsIDApO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7ntYLnq6/opoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlbmQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+ID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcywgdGhpcy5fc2l6ZSk7IC8vIOe1guS6hlxuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonopoHntKDjgpLliYrpmaTjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGl0ZSDliYrpmaTjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9zaXplIDw9IGluZGV4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGU7IC8vIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDliYrpmaRcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xuXG4gICAgICAgICAgICBsZXQgaXRlMjogaXRlcmF0b3I8X0tleVQsIF9WYWxUPiA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMsIGluZGV4KTsgLy8g57WC5LqGXG4gICAgICAgICAgICByZXR1cm4gaXRlMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lgKTjgpIzMuODk+ODg+ODiOespuWPt+S7mOOBjeaVtOaVsOWei+OBp+ODgOODs+ODl+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGR1bXBBc0ludCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nRGVidWcoXCJ7MH0gLFwiLCB0aGlzLl9rZXlWYWx1ZXNbaV0pO1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0RlYnVnKFwiXFxuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZWZhdWx0U2l6ZSA9IDEwOyAvLyDjgrPjg7Pjg4bjg4rjga7liJ3mnJ/ljJbjga7jg4fjg5Xjgqnjg6vjg4jjgrXjgqTjgrpcbiAgICAgICAgcHVibGljIF9rZXlWYWx1ZXM6IGNzbVBhaXI8X0tleVQsIF9WYWxUPltdOy8vIGtleS12YWx1ZeODmuOCouOBrumFjeWIl1xuICAgICAgICBwdWJsaWMgX2R1bW15VmFsdWU6IF9WYWxUOyAgLy8g56m644Gu5YCk44KS6L+U44GZ54K644Gu44OA44Of44O8XG4gICAgICAgIHB1YmxpYyBfc2l6ZTogbnVtYmVyOyAgICAgICAvLyDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGNzbU1hcDxUPuOBruOCpOODhuODrOODvOOCv1xuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcih2PzogY3NtTWFwPF9LZXlULCBfVmFsVD4sIGlkeD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbWFwID0gKHYgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gdlxuICAgICAgICAgICAgICAgIDogbmV3IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+KCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gKGlkeCAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyBpZHhcbiAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldChpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IGl0ZS5fbWFwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVJbmNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICArK3RoaXMuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVEZWNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICAtLXRoaXMuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b6M572u44GNKyvmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbmNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcy5fbWFwLCB0aGlzLl9pbmRleCsrKTsgIC8vIOWPpOOBhOWApOOCkuS/neWtmFxuICAgICAgICAgICAgdGhpcy5fbWFwID0gaXRlb2xkLl9tYXA7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvoznva7jgY0tLea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGRlY3JlbWVudCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLl9tYXAsIHRoaXMuX2luZGV4KTsgLy8g5Y+k44GE5YCk44KS5L+d5a2YXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBpdGVvbGQuX21hcDtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICrmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdHIoKTogY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXAuX2tleVZhbHVlc1t0aGlzLl9pbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIT3mvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBub3RFcXVhbChpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5faW5kZXggIT0gaXRlLl9pbmRleCkgfHwgKHRoaXMuX21hcCAhPSBpdGUuX21hcCk7XG4gICAgICAgIH1cblxuICAgICAgICBfaW5kZXg6IG51bWJlcjsgICAgICAgICAgICAgLy8g44Kz44Oz44OG44OK44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgIF9tYXA6IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+OyAvLyDjgrPjg7Pjg4bjg4pcbiAgICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIOaWh+Wtl+WIl+OCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBjc21TdHJpbmdcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfjgpLlvozmlrnjgavov73liqDjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGMg6L+95Yqg44GZ44KL5paH5a2X5YiXXG4gICAgICAgICAqIEByZXR1cm4g5pu05paw44GV44KM44Gf5paH5a2X5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYXBwZW5kKGM6IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyKTogY3NtU3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucyArPSAobGVuZ3RoICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyBjLnN1YnN0cigwLCBsZW5ndGgpXG4gICAgICAgICAgICAgICAgOiBjO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfjgrXjgqTjgrrjgpLmi6HlvLXjgZfjgabmloflrZfjgpLln4vjgoHjgotcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDmi6HlvLXjgZnjgovmloflrZfmlbBcbiAgICAgICAgICogQHBhcmFtIHYgICAgICAgICDln4vjgoHjgovmloflrZdcbiAgICAgICAgICogQHJldHVybiDmm7TmlrDjgZXjgozjgZ/mloflrZfliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBleHBhbnNpb24obGVuZ3RoOiBudW1iZXIsIHY6IHN0cmluZyk6IGNzbVN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBjc21TdHJpbmcgPSB0aGlzO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0LmFwcGVuZCh2KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfjga7plbfjgZXjgpLjg5DjgqTjg4jmlbDjgaflj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRCeXRlcygpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnMpIC5yZXBsYWNlKC8lLi4vZywgXCJ4XCIpLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfjga7plbfjgZXjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRMZW5ndGgoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8g+OAgDxcbiAgICAgICAgICogQHBhcmFtIHMg5q+U6LyD44GZ44KL5paH5a2X5YiXXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTogICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5bCP44GV44GEXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6ICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5aSn44GN44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNMZXNzKHM6IGNzbVN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA8IHMucztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfmr5TovIMgPlxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlpKfjgY3jgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlsI/jgZXjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0dyZWF0KHM6IGNzbVN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA+IHMucztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfmr5TovIMgPT1cbiAgICAgICAgICogQHBhcmFtIHMg5q+U6LyD44GZ44KL5paH5a2X5YiXXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTogICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44Go562J44GX44GEXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6ICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44Go55Ww44Gq44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFcXVhbChzOiBzdHJpbmcpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMgPT0gcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfjgYznqbrjgYvjganjgYbjgYtcbiAgICAgICAgICogQHJldHVybiB0cnVlOiDnqbrjga7mloflrZfliJdcbiAgICAgICAgICogQHJldHVybiBmYWxzZTog5YCk44GM6Kit5a6a44GV44KM44Gm44GE44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFbXB0eSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMubGVuZ3RoID09IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Ioczogc3RyaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnMgPSBzO1xuICAgICAgICB9XG5cbiAgICAgICAgczogc3RyaW5nO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44OZ44Kv44K/44O85Z6L77yI5Y+v5aSJ6YWN5YiX5Z6L77yJXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbVZlY3RvcjxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0gaW5paXRhbENhcGFjaXR5IOWIneacn+WMluW+jOOBruOCreODo+ODkeOCt+ODhuOCo+OAguODh+ODvOOCv+OCteOCpOOCuuOBr19jYXBhY2l0eSAqIHNpemVvZihUKVxuICAgICAgICAgKiBAcGFyYW0gemVyb0NsZWFyIHRydWXjgarjgonliJ3mnJ/ljJbmmYLjgavnorrkv53jgZfjgZ/poJjln5/jgpIw44Gn5Z+L44KB44KLXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0aWFsQ2FwYWNpdHk6IG51bWJlciA9IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGluaXRpYWxDYXBhY2l0eSA8IDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheShpbml0aWFsQ2FwYWNpdHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gaW5pdGlhbENhcGFjaXR5O1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGF0KGluZGV4OiBudW1iZXIpOiBUXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdHJbaW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuOCu+ODg+ODiFxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6KaB57Sg44KS44K744OD44OI44GZ44KL44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDjgrvjg4Pjg4jjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoaW5kZXg6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3B0cltpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXQob2Zmc2V0OiBudW1iZXIgPSAwKTogVFtdXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IFRbXSA9IG5ldyBBcnJheTxUPigpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKHRoaXMuX3B0cltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHB1c2hCYWNr5Yem55CG44CB44Kz44Oz44OG44OK44Gr5paw44Gf44Gq6KaB57Sg44KS6L+95Yqg44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSBQdXNoQmFja+WHpueQhuOBp+i/veWKoOOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHB1c2hCYWNrKHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9zaXplID49IHRoaXMuX2NhcGFjaXR5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX2NhcGFjaXR5ID09IDAgPyBjc21WZWN0b3Iuc19kZWZhdWx0U2l6ZSA6IHRoaXMuX2NhcGFjaXR5ICogMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3B0clt0aGlzLl9zaXplKytdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWo6KaB57Sg44KS6Kej5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9wdHIubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruimgee0oOaVsOOCkui/lOOBmVxuICAgICAgICAgKiBAcmV0dXJuIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFqOimgee0oOOBq+WvvuOBl+OBpuS7o+WFpeWHpueQhuOCkuihjOOBhlxuICAgICAgICAgKiBAcGFyYW0gbmV3U2l6ZSDku6PlhaXlh6bnkIblvozjga7jgrXjgqTjgrpcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOimgee0oOOBq+S7o+WFpeOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFzc2lnbihuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY3VyU2l6ZSA9IHRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KG5ld1NpemUpOyAgLy8gY2FwYWNpdHnmm7TmlrBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbmV3U2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrXjgqTjgrrlpInmm7RcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZXNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogVCA9IG51bGwpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZShuZXdTaXplLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K144Kk44K65aSJ5pu0XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdXBkYXRlU2l6ZShuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBhbnkgPSBudWxsLCBjYWxsUGxhY2VtZW50TmV3OiBib29sZWFuID0gdHJ1ZSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGN1clNpemU6IG51bWJlciA9IHRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KG5ld1NpemUpOyAgLy8gY2FwYWNpdHnmm7TmlrBcblxuICAgICAgICAgICAgICAgIGlmKGNhbGxQbGFjZW1lbnROZXcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAgLy8gbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuZXcgdmFsdWUoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSAvLyDjg5fjg6rjg5/jg4bjgqPjg5blnovjgarjga7jgaflgKTmuKHjgZdcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIG5ld1NpemUgPD0gdGhpcy5fc2l6ZVxuICAgICAgICAgICAgICAgIC8vLS0tXG4gICAgICAgICAgICAgICAgbGV0IHN1YiA9IHRoaXMuX3NpemUgLSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UodGhpcy5fc2l6ZSAtIHN1Yiwgc3ViKTsgICAgLy8g5LiN6KaB44Gq44Gu44Gn56C05qOE44GZ44KLXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgavjgrPjg7Pjg4bjg4ropoHntKDjgpLmjL/lhaXjgZnjgotcbiAgICAgICAgICogQHBhcmFtIHBvc2l0aW9uIOaMv+WFpeOBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gYmVnaW7jgIDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7plovlp4vkvY3nva5cbiAgICAgICAgICogQHBhcmFtIGVuZCDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7ntYLnq6/kvY3nva5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnNlcnQocG9zaXRpb246IGl0ZXJhdG9yPFQ+LCBiZWdpbjogaXRlcmF0b3I8VD4sIGVuZDogaXRlcmF0b3I8VD4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBkc3RTaTogbnVtYmVyID0gcG9zaXRpb24uX2luZGV4O1xuICAgICAgICAgICAgbGV0IHNyY1NpOiBudW1iZXIgPSBiZWdpbi5faW5kZXg7XG4gICAgICAgICAgICBsZXQgc3JjRWk6IG51bWJlciA9IGVuZC5faW5kZXg7XG5cbiAgICAgICAgICAgIGxldCBhZGRDb3VudDogbnVtYmVyID0gc3JjRWkgLSBzcmNTaTtcblxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkodGhpcy5fc2l6ZSArIGFkZENvdW50KTtcblxuICAgICAgICAgICAgLy8g5oy/5YWl55So44Gu5pei5a2Y44OH44O844K/44KS44K344OV44OI44GX44Gm6ZqZ6ZaT44KS5L2c44KLXG4gICAgICAgICAgICBsZXQgYWRkU2l6ZSA9IHRoaXMuX3NpemUgLSBkc3RTaTtcbiAgICAgICAgICAgIGlmKGFkZFNpemUgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGFkZFNpemU7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoZHN0U2kgKyBpLCAwLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gc3JjU2k7IGkgPCBzcmNFaTsgaSsrLCBkc3RTaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltkc3RTaV0gPSBiZWdpbi5fdmVjdG9yLl9wdHJbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB0aGlzLl9zaXplICsgYWRkQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ44Kk44Oz44OH44OD44Kv44K544Gn5oyH5a6a44GX44Gf6KaB57Sg44KS5YmK6Zmk44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWJiumZpOWun+ihjFxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbW92ZShpbmRleDogbnVtYmVyKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgLy8g5YmK6Zmk56+E5Zuy5aSWXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonopoHntKDjgpLliYrpmaTjgZfjgabku5bjga7opoHntKDjgpLjgrfjg5Xjg4jjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGl0ZSDliYrpmaTjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZTsgLy8g5YmK6Zmk56+E5Zuy5aSWXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWJiumZpFxuICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAtLXRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGxldCBpdGUyOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCBpbmRleCk7ICAgLy8g57WC5LqGXG4gICAgICAgICAgICByZXR1cm4gaXRlMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgpLnorrkv53jgZnjgotcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5paw44Gf44Gq44Kt44Oj44OR44K344OG44Kj44CC5byV5pWw44Gu5YCk44GM54++5Zyo44Gu44K144Kk44K65pyq5rqA44Gu5aC05ZCI44Gv5L2V44KC44GX44Gq44GELlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZXBhcmVDYXBhY2l0eShuZXdTaXplOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKG5ld1NpemUgPiB0aGlzLl9jYXBhY2l0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jYXBhY2l0eSA9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KG5ld1NpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5sZW5ndGggPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFiOmgreimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGJlZ2luKCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gKHRoaXMuX3NpemUgPT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmVuZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IGl0ZXJhdG9yPFQ+KHRoaXMsIDApO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7ntYLnq6/opoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlbmQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8VD4gPSBuZXcgaXRlcmF0b3I8VD4odGhpcywgdGhpcy5fc2l6ZSk7XG4gICAgICAgICAgICByZXR1cm4gaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGdldE9mZnNldChvZmZzZXQ6IG51bWJlcik6IGNzbVZlY3RvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbmV3VmVjdG9yID0gbmV3IGNzbVZlY3RvcjxUPigpO1xuICAgICAgICAgICAgbmV3VmVjdG9yLl9wdHIgPSB0aGlzLmdldChvZmZzZXQpO1xuICAgICAgICAgICAgbmV3VmVjdG9yLl9zaXplID0gdGhpcy5nZXQob2Zmc2V0KS5sZW5ndGg7XG4gICAgICAgICAgICBuZXdWZWN0b3IuX2NhcGFjaXR5ID0gdGhpcy5nZXQob2Zmc2V0KS5sZW5ndGg7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdWZWN0b3I7XG4gICAgICAgIH1cblxuICAgICAgICBfcHRyOiBUW107ICAgIC8vIOOCs+ODs+ODhuODiuOBruWFiOmgreOCouODieODrOOCuVxuICAgICAgICBfc2l6ZTogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcbiAgICAgICAgX2NhcGFjaXR5OiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruOCreODo+ODkeOCt+ODhuOCo1xuXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBzX2RlZmF1bHRTaXplID0gMTA7IC8vIOOCs+ODs+ODhuODiuWIneacn+WMluOBruODh+ODleOCqeODq+ODiOOCteOCpOOCulxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBpdGVyYXRvcjxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHY/OiBjc21WZWN0b3I8VD4sIGluZGV4PzogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSAodiAhPSB1bmRlZmluZWQpID8gdiA6IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IChpbmRleCAhPSB1bmRlZmluZWQpID8gaW5kZXggOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS7o+WFpVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldChpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlLl92ZWN0b3I7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliY3nva7jgY0rK+a8lOeul1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZUluY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICArK3RoaXMuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVEZWNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgLS10aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW+jOe9ruOBjSsr5ryU566X5a2QXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5jcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8VD4odGhpcy5fdmVjdG9yLCB0aGlzLl9pbmRleCsrKTtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZW9sZC5fdmVjdG9yO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b6M572u44GNLS3mvJTnrpflrZBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkZWNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLl92ZWN0b3IsIHRoaXMuX2luZGV4LS0pOyAgLy8g5Y+k44GE5YCk44KS5L+d5a2YXG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGVvbGQuX3ZlY3RvcjtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHB0clxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHB0cigpOiBUXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92ZWN0b3IuX3B0clt0aGlzLl9pbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN1YnN0aXR1dGlvbihpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlLl92ZWN0b3I7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG5vdEVxdWFsKGl0ZTogaXRlcmF0b3I8VD4pOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5faW5kZXggIT0gaXRlLl9pbmRleCkgfHwgKHRoaXMuX3ZlY3RvciAhPSBpdGUuX3ZlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBfaW5kZXg6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgIF92ZWN0b3I6IGNzbVZlY3RvcjxUPjsgIC8vIOOCs+ODs+ODhuODilxuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWZyYW1ld29yaywgTG9nTGV2ZWx9IGZyb20gXCIuLi9saXZlMmRjdWJpc21mcmFtZXdvcmtcIjtcbmltcG9ydCB7Q1NNX0xPR19MRVZFTCwgQ1NNX0xPR19MRVZFTF9WRVJCT1NFLCBDU01fTE9HX0xFVkVMX0RFQlVHLCBDU01fTE9HX0xFVkVMX0lORk8sIENTTV9MT0dfTEVWRUxfV0FSTklORywgQ1NNX0xPR19MRVZFTF9FUlJPUn0gZnJvbSBcIi4uL2N1YmlzbWZyYW1ld29ya2NvbmZpZ1wiO1xuXG5cbmV4cG9ydCBjb25zdCBDdWJpc21Mb2dQcmludCA9IChsZXZlbDogTG9nTGV2ZWwsIGZtdDogc3RyaW5nLCBhcmdzOiBhbnlbXSkgPT5cbntcbiAgICBMaXZlMkRDdWJpc21GcmFtZXdvcmsuQ3ViaXNtRGVidWcucHJpbnQobGV2ZWwsIFwiW0NTTV1cIiArIGZtdCwgYXJncyk7XG59XG5cbmV4cG9ydCBjb25zdCBDdWJpc21Mb2dQcmludEluID0gKGxldmVsOiBMb2dMZXZlbCwgZm10OiBzdHJpbmcsIGFyZ3M6IGFueVtdKSA9Plxue1xuICAgIEN1YmlzbUxvZ1ByaW50KGxldmVsLCBmbXQgKyBcIlxcblwiLCBhcmdzKTtcbn1cblxuZXhwb3J0IGxldCBDU01fQVNTRVJUID0gKGV4cHI6IGFueSkgPT5cbntcbiAgICBjb25zb2xlLmFzc2VydChleHByKTtcbn07XG5cblxuZXhwb3J0IGxldCBDdWJpc21Mb2dWZXJib3NlID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dEZWJ1ZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XG5cbmlmKENTTV9MT0dfTEVWRUwgPD0gQ1NNX0xPR19MRVZFTF9WRVJCT1NFKVxue1xuICAgIEN1YmlzbUxvZ1ZlcmJvc2UgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfVmVyYm9zZSwgXCJbVl1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0RlYnVnLCBcIltEXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9JbmZvLCBcIltJXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG59XG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9ERUJVRylcbntcbiAgICBDdWJpc21Mb2dEZWJ1ZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9EZWJ1ZywgXCJbRF1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfSW5mbywgXCJbSV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xufVxuZWxzZSBpZihDU01fTE9HX0xFVkVMID09IENTTV9MT0dfTEVWRUxfSU5GTylcbntcbiAgICBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0luZm8sIFwiW0ldXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX1dBUk5JTkcpXG57XG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG59XG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9FUlJPUilcbntcbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cblxuLy8tLS0tLS0tLS0tLS0gTElWRTJEIE5BTUVTUEFDRSAtLS0tLS0tLS0tLS1cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG5cbiAgICAvKipcbiAgICAgKiDjg4fjg5Djg4PjgrDnlKjjga7jg6bjg7zjg4bjgqPjg6rjg4bjgqPjgq/jg6njgrnjgIJcbiAgICAgKiDjg63jgrDjga7lh7rlipvjgIHjg5DjgqTjg4jjga7jg4Djg7Pjg5fjgarjgalcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtRGVidWdcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg63jgrDjgpLlh7rlipvjgZnjgovjgILnrKzkuIDlvJXmlbDjgavjg63jgrDjg6zjg5njg6vjgpLoqK3lrprjgZnjgovjgIJcbiAgICAgICAgICogQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKeaZguOBq+OCquODl+OCt+ODp+ODs+OBp+ioreWumuOBleOCjOOBn+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuS4i+WbnuOCi+WgtOWQiOOBr+ODreOCsOOBq+WHuuOBleOBquOBhOOAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbG9nTGV2ZWwg44Ot44Kw44Os44OZ44Or44Gu6Kit5a6aXG4gICAgICAgICAqIEBwYXJhbSBmb3JtYXQg5pu45byP5LuY44GN5paH5a2X5YiXXG4gICAgICAgICAqIEBwYXJhbSBhcmdzIOWPr+WkiemVt+W8leaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBwcmludChsb2dMZXZlbDogTG9nTGV2ZWwsIGZvcm1hdDogc3RyaW5nLCBhcmdzPzogYW55W10pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIOOCquODl+OCt+ODp+ODs+OBp+ioreWumuOBleOCjOOBn+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuS4i+WbnuOCi+WgtOWQiOOBr+ODreOCsOOBq+WHuuOBleOBquOBhFxuICAgICAgICAgICAgaWYobG9nTGV2ZWwgPCBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmdldExvZ2dpbmdMZXZlbCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbG9nUHJpbnQ6IExpdmUyREN1YmlzbUNvcmUuY3NtTG9nRnVuY3Rpb24gPSBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmNvcmVMb2dGdW5jdGlvbjtcblxuICAgICAgICAgICAgaWYgKCFsb2dQcmludClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBidWZmZXI6IHN0cmluZyA9XG4gICAgICAgICAgICAgICAgZm9ybWF0LnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgIC9cXHsoXFxkKylcXH0vZyxcbiAgICAgICAgICAgICAgICAgICAgKG0sIGspID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmdzW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxvZ1ByaW50KGJ1ZmZlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44O844K/44GL44KJ5oyH5a6a44GX44Gf6ZW344GV44Gg44GR44OA44Oz44OX5Ye65Yqb44GZ44KL44CCXG4gICAgICAgICAqIEN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCnmmYLjgavjgqrjg5fjgrfjg6fjg7PjgafoqK3lrprjgZXjgozjgZ/jg63jgrDlh7rlipvjg6zjg5njg6vjgpLkuIvlm57jgovloLTlkIjjga/jg63jgrDjgavlh7rjgZXjgarjgYTjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGxvZ0xldmVsIOODreOCsOODrOODmeODq+OBruioreWumlxuICAgICAgICAgKiBAcGFyYW0gZGF0YSDjg4Djg7Pjg5fjgZnjgovjg4fjg7zjgr9cbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCDjg4Djg7Pjg5fjgZnjgovplbfjgZVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZHVtcEJ5dGVzKGxvZ0xldmVsOiBMb2dMZXZlbCwgZGF0YTogVWludDhBcnJheSwgbGVuZ3RoOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoaSAlIDE2ID09IDAgJiYgaSA+IDApIHRoaXMucHJpbnQobG9nTGV2ZWwsIFwiXFxuXCIpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgJSA4ID09IDAgJiYgaSA+IDApIHRoaXMucHJpbnQobG9nTGV2ZWwsIFwiICBcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmludChsb2dMZXZlbCwgXCJ7MH0gXCIsIFsoZGF0YVtpXSAmIDB4RkYpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJpbnQobG9nTGV2ZWwsIFwiXFxuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHByaXZhdGUg44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vLS0tLS0tLS0tLS0tIExJVkUyRCBOQU1FU1BBQ0UgLS0tLS0tLS0tLS0tXG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gXCIuLi90eXBlL2NzbXN0cmluZ1wiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtbWFwfSBmcm9tIFwiLi4vdHlwZS9jc21tYXBcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSBcIi4uL3R5cGUvY3NtdmVjdG9yXCI7XG5pbXBvcnQge0N1YmlzbUxvZ0luZm99IGZyb20gXCIuL2N1YmlzbWRlYnVnXCI7XG5pbXBvcnQge3N0cnRvZH0gZnJvbSBcIi4uL2xpdmUyZGN1YmlzbWZyYW1ld29ya1wiO1xuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XG5pbXBvcnQgY3NtVmVjdG9yX2l0ZXJhdG9yID0gY3NtdmVjdG9yLml0ZXJhdG9yO1xuaW1wb3J0IGNzbU1hcCA9IGNzbW1hcC5jc21NYXA7XG5pbXBvcnQgY3NtTWFwX2l0ZXJhdG9yID0gY3NtbWFwLml0ZXJhdG9yO1xuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLy8gU3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKeOBp+WIneacn+WMluOBmeOCi1xuICAgIGNvbnN0IENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0g6IHN0cmluZyA9IFwiRXJyb3I6IHR5cGUgbWlzbWF0Y2hcIjtcbiAgICBjb25zdCBDU01fSlNPTl9FUlJPUl9JTkRFWF9PRl9CT1VORFM6IHN0cmluZyA9IFwiRXJyb3I6IGluZGV4IG91dCBvZiBib3VuZHNcIjtcblxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOCqOODrOODoeODs+ODiOOBruimgee0oOOBruWfuuW6leOCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX5Z6L44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBpbmRlbnQ/OiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+Wei+OBp+i/lOOBmShzdHJpbmcpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UmF3U3RyaW5nKGRlZmF1bHRWYWx1ZT86IHN0cmluZywgaW5kZW50Pzogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0cmluZyhkZWZhdWx0VmFsdWUsIGluZGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0ludChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRvRmxvYXQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS55yf5YG95YCk44Gn6L+U44GZKGJvb2xlYW4pXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9Cb29sZWFuKGRlZmF1bHRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCteOCpOOCuuOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkumFjeWIl+OBp+i/lOOBmShWYWx1ZVtdKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEFycmF5KGRlZmF1bHRWYWx1ZTogVmFsdWVbXSA9IG51bGwpOiBWYWx1ZVtdXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS44Kz44Oz44OG44OK44Gn6L+U44GZKGFycmF5KVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZlY3RvcihkZWZhdWx0VmFsdWU/OiBjc21WZWN0b3I8VmFsdWU+KTogY3NtVmVjdG9yPFZhbHVlPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuODnuODg+ODl+OBp+i/lOOBmShjc21NYXA8Y3NtU3RyaW5nLCBWYWx1ZT4pXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TWFwKGRlZmF1bHRWYWx1ZT86IGNzbU1hcDxzdHJpbmcsIFZhbHVlPik6IGNzbU1hcDxzdHJpbmcsIFZhbHVlPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtpbmRleF1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbc3RyaW5nIHwgY3NtU3RyaW5nXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlTdHJpbmcoczogc3RyaW5nIHwgY3NtU3RyaW5nKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oe44OD44OX44Gu44Kt44O85LiA6Kan44KS44Kz44Oz44OG44OK44Gn6L+U44GZXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4g44Oe44OD44OX44Gu44Kt44O844Gu5LiA6KanXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0S2V5cygpOiBjc21WZWN0b3I8c3RyaW5nPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWUuc19kdW1teUtleXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjgqjjg6njg7zlgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFcnJvcigpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjG51bGzjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM55yf5YG95YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQm9vbCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaVsOWApOWei+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Zsb2F0KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM6YWN5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQXJyYXkoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjg57jg4Pjg5flnovjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNNYXAoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVl44CB6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjgavjgqjjg6njg7zlgKTjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoZXJyb3JTdHI6IHN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBKc29uRXJyb3IuZXJyb3JWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJ3mnJ/ljJbnlKjjg6Hjgr3jg4Pjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBuZXcgSnNvbkJvb2xlYW4odHJ1ZSk7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi5mYWxzZVZhbHVlID0gbmV3IEpzb25Cb29sZWFuKGZhbHNlKTtcblxuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBuZXcgSnNvbkVycm9yKFwiRVJST1JcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm51bGxWYWx1ZSA9IG5ldyBKc29uTnVsbHZhbHVlKCk7XG5cbiAgICAgICAgICAgIFZhbHVlLnNfZHVtbXlLZXlzID0gbmV3IGNzbVZlY3RvcjxzdHJpbmc+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oq44Oq44O844K555So44Oh44K944OD44OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIHN0YXRpY1JlbGVhc2VOb3RGb3JDbGllbnRDYWxsKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgSnNvbkJvb2xlYW4udHJ1ZVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLmZhbHNlVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgVmFsdWUubnVsbFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIFZhbHVlLnNfZHVtbXlLZXlzID0gbnVsbDtcblxuICAgICAgICAgICAgSnNvbkJvb2xlYW4udHJ1ZVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLmZhbHNlVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgVmFsdWUubnVsbFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIFZhbHVlLnNfZHVtbXlLZXlzID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBfc3RyaW5nQnVmZmVyOiBzdHJpbmc7IC8vIOaWh+Wtl+WIl+ODkOODg+ODleOCoVxuXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNfZHVtbXlLZXlzOiBjc21WZWN0b3I8c3RyaW5nPjsgLy8g44OA44Of44O844Kt44O8XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBlcnJvclZhbHVlOiBWYWx1ZTsgICAvLyDkuIDmmYLnmoTjgarov5TjgorlgKTjgajjgZfjgabov5TjgZnjgqjjg6njg7zjgIIgQ3ViaXNtRnJhbWV3b3JrOjpEaXNwb3Nl44GZ44KL44G+44Gn44GvZGVsZXRl44GX44Gq44GEXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbnVsbFZhbHVlOiBWYWx1ZTsgICAgLy8g5LiA5pmC55qE44Gq6L+U44KK5YCk44Go44GX44Gm6L+U44GZTlVMTOOAgiAgIEN1YmlzbUZyYW1ld29yazo6RGlzcG9zZeOBmeOCi+OBvuOBp+OBr2RlbGV0ZeOBl+OBquOBhFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzY2lp5paH5a2X44Gu44G/5a++5b+c44GX44Gf5pyA5bCP6ZmQ44Gu6Lu96YePSlNPTuODkeODvOOCteOAglxuICAgICAqIOS7leanmOOBr0pTT07jga7jgrXjg5bjgrvjg4Pjg4jjgajjgarjgovjgIJcbiAgICAgKiDoqK3lrprjg5XjgqHjgqTjg6sobW9kZWwzLmpzb24p44Gq44Gp44Gu44Ot44O844OJ55SoXG4gICAgICpcbiAgICAgKiBb5pyq5a++5b+c6aCF55uuXVxuICAgICAqIOODu+aXpeacrOiqnuOBquOBqeOBrumdnkFTQ0lJ5paH5a2XXG4gICAgICog44O7ZeOBq+OCiOOCi+aMh+aVsOihqOePvlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21Kc29uXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoYnVmZmVyPzogQXJyYXlCdWZmZXIsIGxlbmd0aD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihidWZmZXIgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VCeXRlcyhidWZmZXIsIGxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OQ44Kk44OI44OH44O844K/44GL44KJ55u05o6l44Ot44O844OJ44GX44Gm44OR44O844K544GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIg44OQ44OD44OV44KhXG4gICAgICAgICAqIEBwYXJhbSBzaXplIOODkOODg+ODleOCoeOCteOCpOOCulxuICAgICAgICAgKiBAcmV0dXJuIEN1YmlzbUpzb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgILlpLHmlZfjgZfjgZ/jgolOVUxMXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBqc29uID0gbmV3IEN1YmlzbUpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2NlZWRlZDogYm9vbGVhbiA9IGpzb24ucGFyc2VCeXRlcyhidWZmZXIsIHNpemUpO1xuXG4gICAgICAgICAgICBpZighc3VjY2VlZGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUpzb24uZGVsZXRlKGpzb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jgqrjg5bjgrjjgqfjgq/jg4jjga7op6PmlL7lh6bnkIZcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIEN1YmlzbUpzb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKGluc3RhbmNlOiBDdWJpc21Kc29uKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844K544GX44GfSlNPTuOBruODq+ODvOODiOimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFJvb3QoKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIFVuaWNvZGXjga7jg5DjgqTjg4rjg6rjgpJTdHJpbmfjgavlpInmj5tcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciDlpInmj5vjgZnjgovjg5DjgqTjg4rjg6rjg4fjg7zjgr9cbiAgICAgICAgICogQHJldHVybiDlpInmj5vlvozjga7mloflrZfliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHVpbnQ4QXJyYXk6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICAgICAgbGV0IHN0cjogc3RyaW5nID0gXCJcIjtcblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwLCBsZW46IG51bWJlciA9IHVpbnQ4QXJyYXkubGVuZ3RoOyBpIDwgbGVuOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RyICs9IChcIiVcIiArIHRoaXMucGFkKHVpbnQ4QXJyYXlbaV0udG9TdHJpbmcoMTYpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudChzdHIpO1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqjjg7PjgrPjg7zjg4njgIHjg5Hjg4fjgqPjg7PjgrBcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgcGFkKG46IHN0cmluZyk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbi5sZW5ndGggPCAyXG4gICAgICAgICAgICAgICAgPyBcIjBcIiArIG5cbiAgICAgICAgICAgICAgICA6IG47XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEpTT07jga7jg5Hjg7zjgrnjgpLlrp/ooYzjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciAgICDjg5Hjg7zjgrnlr77osaHjga7jg4fjg7zjgr/jg5DjgqTjg4hcbiAgICAgICAgICogQHBhcmFtIHNpemUgICAgICDjg4fjg7zjgr/jg5DjgqTjg4jjga7jgrXjgqTjgrpcbiAgICAgICAgICogcmV0dXJuIHRydWUgOiDmiJDlip9cbiAgICAgICAgICogcmV0dXJuIGZhbHNlOiDlpLHmlZdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwYXJzZUJ5dGVzKGJ1ZmZlcjogQXJyYXlCdWZmZXIsIHNpemU6IG51bWJlcik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGVuZFBvczogbnVtYmVyW10gPSBuZXcgQXJyYXkoMSk7IC8vIOWPgueFp+a4oeOBl+OBq+OBmeOCi+OBn+OCgemFjeWIl1xuICAgICAgICAgICAgbGV0IGRlY29kZUJ1ZmZlcjogc3RyaW5nID0gdGhpcy5hcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5wYXJzZVZhbHVlKGRlY29kZUJ1ZmZlciwgc2l6ZSwgMCwgZW5kUG9zKTtcblxuICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHN0cmJ1Zjogc3RyaW5nID0gJ1xcMCc7XG4gICAgICAgICAgICAgICAgc3RyYnVmID0gXCJKc29uIHBhcnNlIGVycm9yIDogQGxpbmUgXCIgKyAodGhpcy5fbGluZUNvdW50ICsgMSkgKyBcIlxcblwiO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBuZXcgSnNvblN0cmluZyhzdHJidWYpO1xuXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcInswfVwiLCB0aGlzLl9yb290LmdldFJhd1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuX3Jvb3QgPT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290ID0gbmV3IEpzb25FcnJvcihuZXcgY3NtU3RyaW5nKHRoaXMuX2Vycm9yKSwgZmFsc2UpOyAvLyByb29044Gv6Kej5pS+44GV44KM44KL44Gu44Gn44Ko44Op44O844Kq44OW44K444Kn44Kv44OI44KS5Yil6YCU5L2c5oiQ44GZ44KLXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844K55pmC44Gu44Ko44Op44O85YCk44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UGFyc2VFcnJvcigpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODq+ODvOODiOimgee0oOOBruasoeOBruimgee0oOOBjOODleOCoeOCpOODq+OBrue1guerr+OBoOOBo+OBn+OCiXRydWXjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjaGVja0VuZE9mRmlsZSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yb290LmdldEFycmF5KClbMV0uZXF1YWxzKFwiRU9GXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEpTT07jgqjjg6zjg6Hjg7Pjg4jjgYvjgolWYWx1ZShmbG9hdCxTdHJpbmcsVmFsdWUqLEFycmF5LG51bGwsdHJ1ZSxmYWxzZSnjgpLjg5Hjg7zjgrnjgZnjgotcbiAgICAgICAgICog44Ko44Os44Oh44Oz44OI44Gu5pu45byP44Gr5b+c44GY44Gm5YaF6YOo44GnUGFyc2VTdHJpbmcoKSwgUGFyc2VPYmplY3QoKSwgUGFyc2VBcnJheSgp44KS5ZG844G2XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAgIGJ1ZmZlciAgICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtICAgbGVuZ3RoICAgICAg44OR44O844K544GZ44KL6ZW344GVXG4gICAgICAgICAqIEBwYXJhbSAgIGJlZ2luICAgICAgIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gICBvdXRFbmRQb3MgICDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiAgICAgIOODkeODvOOCueOBi+OCieWPluW+l+OBl+OBn1ZhbHVl44Kq44OW44K444Kn44Kv44OIXG4gICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgcGFyc2VWYWx1ZShidWZmZXI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcikgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGxldCBvOiBWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gYmVnaW47XG4gICAgICAgICAgICBsZXQgZjogbnVtYmVyO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBjOiBzdHJpbmcgPSBidWZmZXJbaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzUnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzYnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzcnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzgnOlxuICAgICAgICAgICAgICAgIGNhc2UgJzknOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWZ0ZXJTdHJpbmc6IHN0cmluZ1tdID0gbmV3IEFycmF5KDEpOyAvLyDlj4LnhafmuKHjgZfjgavjgZnjgovjgZ/jgoFcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBzdHJ0b2QoYnVmZmVyLnNsaWNlKGkpLCBhZnRlclN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBidWZmZXIuaW5kZXhPZihhZnRlclN0cmluZ1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpzb25GbG9hdChmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ1xcXCInOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpzb25TdHJpbmcodGhpcy5wYXJzZVN0cmluZyhidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcykpOyAvLyBcXFwi44Gu5qyh44Gu5paH5a2X44GL44KJXG4gICAgICAgICAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgICAgICAgICAgIG8gPSB0aGlzLnBhcnNlQXJyYXkoYnVmZmVyLCBsZW5ndGgsIGkgKyAxLCBvdXRFbmRQb3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICBjYXNlICd7JzpcbiAgICAgICAgICAgICAgICAgICAgbyA9IHRoaXMucGFyc2VPYmplY3QoYnVmZmVyLCBsZW5ndGgsIGkgKyAxLCBvdXRFbmRQb3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICBjYXNlICduJzogLy8gbnVsbOS7peWkluOBq+OBquOBhFxuICAgICAgICAgICAgICAgICAgICBpZihpICsgMyA8IGxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IG5ldyBKc29uTnVsbHZhbHVlKCk7ICAgIC8vIOino+aUvuOBp+OBjeOCi+OCiOOBhuOBq+OBmeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2UgbnVsbFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3QnOiAvLyB0cnVl5Lul5aSW44Gr44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyAzIDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gSnNvbkJvb2xlYW4udHJ1ZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2UgdHJ1ZVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2YnOiAvLyBmYWxzZeS7peWkluOBq+OBquOBhFxuICAgICAgICAgICAgICAgICAgICBpZihpICsgNCA8IGxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IEpzb25Cb29sZWFuLmZhbHNlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICcsJyBwb3NpdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJywnOiAvLyBBcnJheSBzZXBhcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJywnIHBvc2l0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIGNhc2UgJ10nOiAvLyDkuI3mraPjgarvvZ3jgaDjgYzjgrnjgq3jg4Pjg5fjgZnjgovjgILphY3liJfjga7mnIDlvozjgavkuI3opoHjgaogLCDjgYzjgYLjgovjgajmgJ3jgo/jgozjgotcbiAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaTsgIC8vIOWQjOOBmOaWh+Wtl+OCkuWGjeWHpueQhlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ291bnQrKztcbiAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICBjYXNlICdcXHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1xccic6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogLy8g44K544Kt44OD44OXXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHZhbHVlXCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmrKHjga7jgIxcIuOAjeOBvuOBp+OBruaWh+Wtl+WIl+OCkuODkeODvOOCueOBmeOCi+OAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gICBzdHJpbmcgIC0+ICDjg5Hjg7zjgrnlr77osaHjga7mloflrZfliJdcbiAgICAgICAgICogQHBhcmFtICAgbGVuZ3RoICAtPiAg44OR44O844K544GZ44KL6ZW344GVXG4gICAgICAgICAqIEBwYXJhbSAgIGJlZ2luICAgLT4gIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gIG91dEVuZFBvcyAgIC0+ICDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiAgICAgIOODkeODvOOCueOBl+OBn+aWh0blrZfliJfopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZVN0cmluZyhzdHJpbmc6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgbGV0IGkgPSBiZWdpbjtcbiAgICAgICAgICAgIGxldCBjOiBzdHJpbmcsIGMyOiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgcmV0OiBjc21TdHJpbmcgPSBuZXcgY3NtU3RyaW5nKFwiXCIpO1xuICAgICAgICAgICAgbGV0IGJ1ZlN0YXJ0OiBudW1iZXIgPSBiZWdpbjsgLy8gc2J1ZuOBq+eZu+mMsuOBleOCjOOBpuOBhOOBquOBhOaWh+Wtl+OBrumWi+Wni+S9jee9rlxuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGMgPSBzdHJpbmdbaV07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxcIic644CALy8g57WC56uv44Gu4oCd44CB44Ko44K544Kx44O844OX5paH5a2X44Gv5Yil44Gr5Yem55CG44GV44KM44KL44Gu44Gn44GT44GT44Gr5p2l44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxOyAgLy8g4oCd44Gu5qyh44Gu5paH5a2XXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHN0cmluZy5zbGljZShidWZTdGFydCksIChpIC0gYnVmU3RhcnQpKTsgLy8g5YmN44Gu5paH5a2X44G+44Gn44KS55m76Yyy44GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0LnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICcvLyc6ICAvLyDjgqjjgrnjgrHjg7zjg5fjga7loLTlkIhcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrOyAvLyDvvJLmloflrZfjgpLjgrvjg4Pjg4jjgafmibHjgYZcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSAtIDEgPiBidWZTdGFydClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHN0cmluZy5zbGljZShidWZTdGFydCksIChpIC0gYnVmU3RhcnQpKTsgLy8g5YmN44Gu5paH5a2X44G+44Gn44KS55m76Yyy44GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZTdGFydCA9IGkgKyAxOyAvLyDjgqjjgrnjgrHjg7zjg5fvvIjvvJLmloflrZcp44Gu5qyh44Gu5paH5a2X44GL44KJXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyID0gc3RyaW5nW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdcXFxcJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxcXCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdcXFwiJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxcIicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnLycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXGYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBzdHJpbmcvdW5pY29yZCBlc2NhcGUgbm90IHN1cHBvcnRlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHN0cmluZy9lc2NhcGUgZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2Ugc3RyaW5nL2lsbGVnYWwgZW5kXCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBKU09O44Gu44Kq44OW44K444Kn44Kv44OI44Ko44Os44Oh44Oz44OI44KS44OR44O844K544GX44GmVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TjgZlcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciAgICBKU09O44Ko44Os44Oh44Oz44OI44Gu44OQ44OD44OV44KhXG4gICAgICAgICAqIEBwYXJhbSBsZW5ndGggICAg44OR44O844K544GZ44KL6ZW344GVXG4gICAgICAgICAqIEBwYXJhbSBiZWdpbiAgICAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXG4gICAgICAgICAqIEBwYXJhbSBvdXRFbmRQb3Mg44OR44O844K557WC5LqG5pmC44Gu5L2N572uXG4gICAgICAgICAqIEByZXR1cm4g44OR44O844K544GL44KJ5Y+W5b6X44GX44GfVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZU9iamVjdChidWZmZXI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9lcnJvcikgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBsZXQgcmV0OiBKc29uTWFwID0gbmV3IEpzb25NYXAoKTtcblxuICAgICAgICAgICAgLy8gS2V5OiBWYWx1ZVxuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSBiZWdpbjtcbiAgICAgICAgICAgIGxldCBjOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IGxvY2FsUmV0RW5kUG9zMjogbnVtYmVyW10gPSBBcnJheSgxKTtcbiAgICAgICAgICAgIGxldCBvazogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyAsIOOBjOe2muOBj+mZkOOCiuODq+ODvOODl1xuICAgICAgICAgICAgZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEZPUl9MT09QOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjID0gYnVmZmVyW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcXCInOlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5wYXJzZVN0cmluZyhidWZmZXIsIGxlbmd0aCwgaSArIDEsIGxvY2FsUmV0RW5kUG9zMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9lcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGxvY2FsUmV0RW5kUG9zMlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QOyAvLy0tIGxvb3DjgYvjgonlh7rjgotcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6IC8vIOmWieOBmOOCq+ODg+OCs1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDnqbpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnOic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnOicgcG9zaXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl+OBmeOCi+aWh+Wtl1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCFvaylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJrZXkgbm90IGZvdW5kXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9rID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyA6IOOCkuODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgIEZPUl9MT09QMjogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnfScgcG9zaXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOiB0aGlzLl9saW5lQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJyAnOiBjYXNlICdcXHQnIDogY2FzZSAnXFxyJzpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgLy8g44K544Kt44OD44OX44GZ44KL5paH5a2XXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZighb2spXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiJzonIG5vdCBmb3VuZFwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDlgKTjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IFZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgbGVuZ3RoLCBpLCBsb2NhbFJldEVuZFBvczIpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaSA9IGxvY2FsUmV0RW5kUG9zMlswXTtcblxuICAgICAgICAgICAgICAgIC8vIHJldC5wdXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0LnB1dChrZXksIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIEZPUl9MT09QMzogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7IC8vIOato+W4uOe1guS6hlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCBlbmQgb2YgcGVyc2VPYmplY3RcIjtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOasoeOBruOAjFwi44CN44G+44Gn44Gu5paH5a2X5YiX44KS44OR44O844K544GZ44KL44CCXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIgICAgSlNPTuOCqOODrOODoeODs+ODiOOBruODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoICAgIOODkeODvOOCueOBmeOCi+mVt+OBlVxuICAgICAgICAgKiBAcGFyYW0gYmVnaW4gICAgIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gb3V0RW5kUG9zIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxuICAgICAgICAgKiBAcmV0dXJuIOODkeODvOOCueOBi+OCieWPluW+l+OBl+OBn1ZhbHVl44Kq44OW44K444Kn44Kv44OIXG4gICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgcGFyc2VBcnJheShidWZmZXI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9lcnJvcikgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgbGV0IHJldDpKc29uQXJyYXkgPSBuZXcgSnNvbkFycmF5KCk7XG5cbiAgICAgICAgICAgIC8vIGtleSA6IHZhbHVlXG4gICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gYmVnaW47XG4gICAgICAgICAgICBsZXQgYzogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IGxvY2FsUmV0RW5kcG9zMjogbnVtYmVyW10gPSBuZXcgQXJyYXkoMSk7XG5cbiAgICAgICAgICAgIC8vICwg44GM57aa44GP6ZmQ44KK44Or44O844OXXG4gICAgICAgICAgICBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gOiDjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IFZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgbGVuZ3RoLCBpLCBsb2NhbFJldEVuZHBvczIpO1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSA9IGxvY2FsUmV0RW5kcG9zMlswXTtcblxuICAgICAgICAgICAgICAgIGlmKHZhbHVlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0LmFkZCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRk9SX0xPT1AzOlxuICAgICAgICAgICAgICAgIC8vIGJvb2xlYW4gYnJlYWtmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgRk9SX0xPT1A6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJywnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFrZmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWs7IC8vIOasoeOBrktFWSwgVkFsVUXjgbhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ10nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7IC8vIOe1guS6hlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxuJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3RoaXMuX2xpbmVDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Nhc2UgJyAnOiBjYXNlICdcXHQnOiBjYXNlICdcXHInOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8g44K544Kt44OD44OXXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldCA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsIGVuZCBvZiBwYXJzZU9iamVjdFwiO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBfZXJyb3I6IHN0cmluZzsgICAgIC8vIOODkeODvOOCueaZguOBruOCqOODqeODvFxuICAgICAgICBfbGluZUNvdW50OiBudW1iZXI7IC8vIOOCqOODqeODvOWgseWRiuOBq+eUqOOBhOOCi+ihjOaVsOOCq+OCpuODs+ODiFxuICAgICAgICBfcm9vdDogVmFsdWU7ICAgICAgIC8vIOODkeODvOOCueOBleOCjOOBn+ODq+ODvOODiOimgee0oFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpJmbG9hdOWApOOBqOOBl+OBpuaJseOBhlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uRmxvYXQgZXh0ZW5kcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IodjogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzmlbDlgKTlnovjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNGbG9hdCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgc3RyYnVmOiBzdHJpbmcgPSAnXFwwJztcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gcGFyc2VGbG9hdChzdHJidWYpO1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gc3RyYnVmO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9JbnQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLl92YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRvRmxvYXQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwLjApOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCdudW1iZXInID09PSB0eXBlb2YodmFsdWUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGludFxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKHZhbHVlKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmxvYXRcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gdGhpcy5fdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjsgLy8gSlNPTuimgee0oOOBruWApFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpLnnJ/lgb3lgKTjgajjgZfjgabmibHjgYZcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgSnNvbkJvb2xlYW4gZXh0ZW5kcyBWYWx1ZVxuICAgIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYznnJ/lgb3lgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNCb29sKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS55yf5YG95YCk44Gn6L+U44GZKGJvb2xlYW4pXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9Cb29sZWFuKGRlZmF1bHRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYm9vbFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSB0aGlzLl9ib29sVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgPyBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiZmFsc2VcIjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDjga7lgKTjgajnrYnjgZfjgZHjgozjgbB0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBjc21TdHJpbmcpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBudW1iZXIpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBib29sZWFuKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYW55KTpib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgnYm9vbGVhbicgPT09IHR5cGVvZih2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09IHRoaXMuX2Jvb2xWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWUsIOmdmeeahOOBquOCieino+aUvuOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RhdGljKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IodjogYm9vbGVhbilcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5fYm9vbFZhbHVlID0gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyB0cnVlVmFsdWU6IEpzb25Cb29sZWFuOyAgLy8gdHJ1ZVxuICAgICAgICBzdGF0aWMgZmFsc2VWYWx1ZTogSnNvbkJvb2xlYW47IC8vIGZhbHNlXG5cbiAgICAgICAgcHJpdmF0ZSBfYm9vbFZhbHVlOiBib29sZWFuOyAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuaWh+Wtl+WIl+OBqOOBl+OBpuaJseOBhlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uU3RyaW5nIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpO1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogY3NtU3RyaW5nKVxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogYW55KVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICBpZignc3RyaW5nJyA9PT0gdHlwZW9mKHMpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcy5zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZih2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlciA9PSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5fc3RyaW5nQnVmZmVyID09IHZhbHVlLnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBKU09O44OR44O844K55pmC44Gu44Ko44Op44O857WQ5p6c44CC5paH5a2X5YiX5Z6L44Gu44KI44GG44Gr44G144KL44G+44GGXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25FcnJvciBleHRlbmRzIEpzb25TdHJpbmdcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWXjgIHpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1N0YXRpYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqjjg6njg7zmg4XloLHjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoczogc3RyaW5nKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IGNzbVN0cmluZ3xzdHJpbmcsIGlzU3RhdGljOiBib29sZWFuKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihcInN0cmluZ1wiID09PSB0eXBlb2YocykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VwZXIocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VwZXIocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pc1N0YXRpYyA9IGlzU3RhdGljO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM44Ko44Op44O85YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXJyb3IoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcHJvdGVjdGVkIF9pc1N0YXRpYzogYm9vbGVhbjsgLy8g6Z2Z55qE44GqVmFsdWXjgYvjganjgYbjgYtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KSTlVMTOWApOOBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uTnVsbHZhbHVlIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjE5VTEzlgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVlLCDpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gXCJOdWxsVmFsdWVcIjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkumFjeWIl+OBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uQXJyYXkgZXh0ZW5kcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5ID0gbmV3IGNzbVZlY3RvcjxWYWx1ZT4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpdGU6IGNzbVZlY3Rvcl9pdGVyYXRvcjxWYWx1ZT4gPSB0aGlzLl9hcnJheS5iZWdpbigpOyBpdGUubm90RXF1YWwodGhpcy5fYXJyYXkuZW5kKCkpOyBpdGUucHJlSW5jcmVtZW50KCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpO1xuXG4gICAgICAgICAgICAgICAgaWYodiAmJiAhdi5pc1N0YXRpYygpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM6YWN5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQXJyYXkoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbaW5kZXhdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeUluZGV4KGluZGV4OiBudW1iZXIpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fYXJyYXkuZ2V0U2l6ZSgpIDw9IGluZGV4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9JTkRFWF9PRl9CT1VORFMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdjogVmFsdWUgPSB0aGlzLl9hcnJheS5hdChpbmRleCk7XG5cbiAgICAgICAgICAgIGlmKHYgPT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbc3RyaW5nIHwgY3NtU3RyaW5nXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlTdHJpbmcoczogc3RyaW5nIHwgY3NtU3RyaW5nKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgc3RyaW5nQnVmZmVyOiBzdHJpbmcgPSBpbmRlbnQgKyBcIltcXG5cIjtcblxuICAgICAgICAgICAgZm9yKGxldCBpdGU6IGNzbVZlY3Rvcl9pdGVyYXRvcjxWYWx1ZT4gPSB0aGlzLl9hcnJheS5iZWdpbigpOyBpdGUubm90RXF1YWwodGhpcy5fYXJyYXkuZW5kKCkpOyBpdGUuaW5jcmVtZW50KCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciArPSBpbmRlbnQgKyBcIlwiICsgdi5nZXRTdHJpbmcoaW5kZW50ICsgXCIgXCIpICsgXCJcXG5cIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gc3RyaW5nQnVmZmVyICsgaW5kZW50ICsgXCJdXFxuXCI7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6YWN5YiX6KaB57Sg44KS6L+95Yqg44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSB2IOi/veWKoOOBmeOCi+imgee0oFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFkZCh2OiBWYWx1ZSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fYXJyYXkucHVzaEJhY2sodik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS44Kz44Oz44OG44OK44Gn6L+U44GZKGNzbVZlY3RvcjxWYWx1ZT4pXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmVjdG9yKGRlZmF1bHRWYWx1ZTogY3NtVmVjdG9yPFZhbHVlPiA9IG51bGwpOiBjc21WZWN0b3I8VmFsdWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hcnJheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjga7mlbDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXkuZ2V0U2l6ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfYXJyYXk6IGNzbVZlY3RvcjxWYWx1ZT47IC8vIEpTT07opoHntKDjga7lgKRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KS44Oe44OD44OX44Go44GX44Gm5oyB44GkXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25NYXAgZXh0ZW5kcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IG5ldyBjc21NYXA8c3RyaW5nLCBWYWx1ZT4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaXRlOiBjc21NYXBfaXRlcmF0b3I8c3RyaW5nLCBWYWx1ZT4gPSB0aGlzLl9tYXAuYmVnaW4oKTtcblxuICAgICAgICAgICAgd2hpbGUoaXRlLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpLnNlY29uZDtcblxuICAgICAgICAgICAgICAgIGlmKHYgJiYgIXYuaXNTdGF0aWMoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZS5wcmVJbmNyZW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjE1hcOWei+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc01hcCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtzdHJpbmcgfCBjc21TdHJpbmddXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeVN0cmluZyhzOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihzIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCByZXQ6IFZhbHVlID0gdGhpcy5fbWFwLmdldFZhbHVlKHMucyk7XG4gICAgICAgICAgICAgICAgaWYocmV0ID09IG51bGwpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGl0ZXI6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpOyBpdGVyLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSk7IGl0ZXIucHJlSW5jcmVtZW50KCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoaXRlci5wdHIoKS5maXJzdCA9PSBzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlci5wdHIoKS5zZWNvbmQgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlci5wdHIoKS5zZWNvbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtpbmRleF1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IGluZGVudCArIFwie1xcblwiO1xuXG4gICAgICAgICAgICBjb25zdCBpdGU6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpO1xuICAgICAgICAgICAgd2hpbGUoaXRlLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gaXRlLnB0cigpLmZpcnN0O1xuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKS5zZWNvbmQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgKz0gaW5kZW50ICsgXCIgXCIgKyBrZXkgKyBcIiA6IFwiICsgdi5nZXRTdHJpbmcoaW5kZW50ICsgXCIgICBcIikgKyBcIiBcXG5cIjtcbiAgICAgICAgICAgICAgICBpdGUucHJlSW5jcmVtZW50KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciArPSBpbmRlbnQgKyBcIn1cXG5cIjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpJNYXDlnovjgafov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNYXAoZGVmYXVsdFZhbHVlPzogY3NtTWFwPHN0cmluZywgVmFsdWU+KTogY3NtTWFwPHN0cmluZywgVmFsdWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFw44Gr6KaB57Sg44KS6L+95Yqg44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHV0KGtleTogc3RyaW5nLCB2OiBWYWx1ZSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbWFwLnNldFZhbHVlKGtleSwgdik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFw44GL44KJ44Kt44O844Gu44Oq44K544OI44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0S2V5cygpOiBjc21WZWN0b3I8c3RyaW5nPlxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2tleXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IG5ldyBjc21WZWN0b3I8c3RyaW5nPigpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlOiBjc21NYXBfaXRlcmF0b3I8c3RyaW5nLCBWYWx1ZT4gPSB0aGlzLl9tYXAuYmVnaW4oKTtcblxuICAgICAgICAgICAgICAgIHdoaWxlKGl0ZS5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSBpdGUucHRyKCkuZmlyc3Q7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMucHVzaEJhY2soa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcOOBruimgee0oOaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlzLmdldFNpemUoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcHJpdmF0ZSBfbWFwOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT47ICAgLy8gSlNPTuimgee0oOOBruWApFxuICAgICAgICBwcml2YXRlIF9rZXlzOiBjc21WZWN0b3I8c3RyaW5nPjsgICAgICAgICAgICAgICAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==