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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/cubismmodelsettingjson.ts");
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

/***/ "./Framework/cubismmodelsettingjson.ts":
/*!*********************************************!*\
  !*** ./Framework/cubismmodelsettingjson.ts ***!
  \*********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/* harmony import */ var _icubismmodelsetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icubismmodelsetting */ "./Framework/icubismmodelsetting.ts");
/* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/cubismjson */ "./Framework/utils/cubismjson.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type/csmvector */ "./Framework/type/csmvector.ts");
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




var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].csmVector;
var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework;
var CubismJson = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismJson;
var ICubismModelSetting = _icubismmodelsetting__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].ICubismModelSetting;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * Model3Jsonのキー文字列
     */
    // JSON Keys
    var Version = "Version";
    var FileReferences = "FileReferences";
    var Groups = "Groups";
    var Layout = "Layout";
    var HitAreas = "HitAreas";
    var Moc = "Moc";
    var Textures = "Textures";
    var Physics = "Physics";
    var Pose = "Pose";
    var Expressions = "Expressions";
    var Motions = "Motions";
    var UserData = "UserData";
    var Name = "Name";
    var FilePath = "File";
    var Id = "Id";
    var Ids = "Ids";
    var Target = "Target";
    // Motions
    var Idle = "Idle";
    var TapBody = "TapBody";
    var PinchIn = "PinchIn";
    var PinchOut = "PinchOut";
    var Shake = "Shake";
    var FlickHead = "FlickHead";
    var Parameter = "Parameter";
    var SoundPath = "Sound";
    var FadeInTime = "FadeInTime";
    var FadeOutTime = "FadeOutTime";
    // Layout
    var CenterX = "CenterX";
    var CenterY = "CenterY";
    var X = "X";
    var Y = "Y";
    var Width = "Width";
    var Height = "Height";
    var LipSync = "LipSync";
    var EyeBlink = "EyeBlink";
    var InitParameter = "init_param";
    var InitPartsVisible = "init_parts_visible";
    var Val = "val";
    var FrequestNode;
    (function (FrequestNode) {
        FrequestNode[FrequestNode["FrequestNode_Groups"] = 0] = "FrequestNode_Groups";
        FrequestNode[FrequestNode["FrequestNode_Moc"] = 1] = "FrequestNode_Moc";
        FrequestNode[FrequestNode["FrequestNode_Motions"] = 2] = "FrequestNode_Motions";
        FrequestNode[FrequestNode["FrequestNode_Expressions"] = 3] = "FrequestNode_Expressions";
        FrequestNode[FrequestNode["FrequestNode_Textures"] = 4] = "FrequestNode_Textures";
        FrequestNode[FrequestNode["FrequestNode_Physics"] = 5] = "FrequestNode_Physics";
        FrequestNode[FrequestNode["FrequestNode_Pose"] = 6] = "FrequestNode_Pose";
        FrequestNode[FrequestNode["FrequestNode_HitAreas"] = 7] = "FrequestNode_HitAreas"; // getRoot().getValueByString(HitAreas)
    })(FrequestNode || (FrequestNode = {}));
    ;
    /**
     * Model3Jsonパーサー
     *
     * model3.jsonファイルをパースして値を取得する
     */
    var CubismModelSettingJson = /** @class */ (function (_super) {
        __extends(CubismModelSettingJson, _super);
        /**
         * 引数付きコンストラクタ
         *
         * @param buffer    Model3Jsonをバイト配列として読み込んだデータバッファ
         * @param size      Model3Jsonのデータサイズ
         */
        function CubismModelSettingJson(buffer, size) {
            var _this = _super.call(this) || this;
            _this._json = CubismJson.create(buffer, size);
            if (_this._json) {
                _this._jsonValue = new csmVector();
                // 順番はenum FrequestNodeと一致させる
                _this._jsonValue.pushBack(_this._json.getRoot().getValueByString(Groups));
                _this._jsonValue.pushBack(_this._json.getRoot().getValueByString(FileReferences).getValueByString(Moc));
                _this._jsonValue.pushBack(_this._json.getRoot().getValueByString(FileReferences).getValueByString(Motions));
                _this._jsonValue.pushBack(_this._json.getRoot().getValueByString(FileReferences).getValueByString(Expressions));
                _this._jsonValue.pushBack(_this._json.getRoot().getValueByString(FileReferences).getValueByString(Textures));
                _this._jsonValue.pushBack(_this._json.getRoot().getValueByString(FileReferences).getValueByString(Physics));
                _this._jsonValue.pushBack(_this._json.getRoot().getValueByString(FileReferences).getValueByString(Pose));
                _this._jsonValue.pushBack(_this._json.getRoot().getValueByString(HitAreas));
            }
            return _this;
        }
        /**
         * デストラクタ相当の処理
         */
        CubismModelSettingJson.prototype.release = function () {
            CubismJson.delete(this._json);
            this._jsonValue = null;
        };
        /**
         * CubismJsonオブジェクトを取得する
         *
         * @return CubismJson
         */
        CubismModelSettingJson.prototype.GetJson = function () {
            return this._json;
        };
        /**
         * Mocファイルの名前を取得する
         * @return Mocファイルの名前
         */
        CubismModelSettingJson.prototype.getModelFileName = function () {
            if (!this.isExistModelFile()) {
                return "";
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_Moc).getRawString();
        };
        /**
         * モデルが使用するテクスチャの数を取得する
         * テクスチャの数
         */
        CubismModelSettingJson.prototype.getTextureCount = function () {
            if (!this.isExistTextureFiles()) {
                return 0;
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_Textures).getSize();
        };
        /**
         * テクスチャが配置されたディレクトリの名前を取得する
         * @return テクスチャが配置されたディレクトリの名前
         */
        CubismModelSettingJson.prototype.getTextureDirectory = function () {
            return this._jsonValue.at(FrequestNode.FrequestNode_Textures).getRawString();
        };
        /**
         * モデルが使用するテクスチャの名前を取得する
         * @param index 配列のインデックス値
         * @return テクスチャの名前
         */
        CubismModelSettingJson.prototype.getTextureFileName = function (index) {
            return this._jsonValue.at(FrequestNode.FrequestNode_Textures).getValueByIndex(index).getRawString();
        };
        /**
         * モデルに設定された当たり判定の数を取得する
         * @return モデルに設定された当たり判定の数
         */
        CubismModelSettingJson.prototype.getHitAreasCount = function () {
            if (!this.isExistHitAreas()) {
                return 0;
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_HitAreas).getSize();
        };
        /**
         * 当たり判定に設定されたIDを取得する
         *
         * @param index 配列のindex
         * @return 当たり判定に設定されたID
         */
        CubismModelSettingJson.prototype.getHitAreaId = function (index) {
            return CubismFramework.getIdManager().getId(this._jsonValue.at(FrequestNode.FrequestNode_HitAreas).getValueByIndex(index).getValueByString(Id).getRawString());
        };
        /**
         * 当たり判定に設定された名前を取得する
         * @param index 配列のインデックス値
         * @return 当たり判定に設定された名前
         */
        CubismModelSettingJson.prototype.getHitAreaName = function (index) {
            return this._jsonValue.at(FrequestNode.FrequestNode_HitAreas).getValueByIndex(index).getValueByString(Name).getRawString();
        };
        /**
         * 物理演算設定ファイルの名前を取得する
         * @return 物理演算設定ファイルの名前
         */
        CubismModelSettingJson.prototype.getPhysicsFileName = function () {
            if (!this.isExistPhysicsFile()) {
                return "";
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_Physics).getRawString();
        };
        /**
         * パーツ切り替え設定ファイルの名前を取得する
         * @return パーツ切り替え設定ファイルの名前
         */
        CubismModelSettingJson.prototype.getPoseFileName = function () {
            if (!this.isExistPoseFile()) {
                return "";
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_Pose).getRawString();
        };
        /**
         * 表情設定ファイルの数を取得する
         * @return 表情設定ファイルの数
         */
        CubismModelSettingJson.prototype.getExpressionCount = function () {
            if (!this.isExistExpressionFile()) {
                return 0;
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_Expressions).getSize();
        };
        /**
         * 表情設定ファイルを識別する名前（別名）を取得する
         * @param index 配列のインデックス値
         * @return 表情の名前
         */
        CubismModelSettingJson.prototype.getExpressionName = function (index) {
            return this._jsonValue.at(FrequestNode.FrequestNode_Expressions).getValueByIndex(index).getValueByString(Name).getRawString();
        };
        /**
         * 表情設定ファイルの名前を取得する
         * @param index 配列のインデックス値
         * @return 表情設定ファイルの名前
         */
        CubismModelSettingJson.prototype.getExpressionFileName = function (index) {
            return this._jsonValue.at(FrequestNode.FrequestNode_Expressions).getValueByIndex(index).getValueByString(FilePath).getRawString();
        };
        /**
         * モーショングループの数を取得する
         * @return モーショングループの数
         */
        CubismModelSettingJson.prototype.getMotionGroupCount = function () {
            if (!this.isExistMotionGroups()) {
                return 0;
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_Motions).getKeys().getSize();
        };
        /**
         * モーショングループの名前を取得する
         * @param index 配列のインデックス値
         * @return モーショングループの名前
         */
        CubismModelSettingJson.prototype.getMotionGroupName = function (index) {
            if (!this.isExistMotionGroups()) {
                return null;
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_Motions).getKeys().at(index);
        };
        /**
         * モーショングループに含まれるモーションの数を取得する
         * @param groupName モーショングループの名前
         * @return モーショングループの数
         */
        CubismModelSettingJson.prototype.getMotionCount = function (groupName) {
            if (!this.isExistMotionGroupName(groupName)) {
                return 0;
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_Motions).getValueByString(groupName).getSize();
        };
        /**
         * グループ名とインデックス値からモーションファイル名を取得する
         * @param groupName モーショングループの名前
         * @param index     配列のインデックス値
         * @return モーションファイルの名前
         */
        CubismModelSettingJson.prototype.getMotionFileName = function (groupName, index) {
            if (!this.isExistMotionGroupName(groupName)) {
                return "";
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_Motions).getValueByString(groupName).getValueByIndex(index).getValueByString(FilePath).getRawString();
        };
        /**
         * モーションに対応するサウンドファイルの名前を取得する
         * @param groupName モーショングループの名前
         * @param index 配列のインデックス値
         * @return サウンドファイルの名前
         */
        CubismModelSettingJson.prototype.getMotionSoundFileName = function (groupName, index) {
            if (!this.isExistMotionSoundFile(groupName, index)) {
                return "";
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_Motions).getValueByString(groupName).getValueByIndex(index).getValueByString(SoundPath).getRawString();
        };
        /**
         * モーション開始時のフェードイン処理時間を取得する
         * @param groupName モーショングループの名前
         * @param index 配列のインデックス値
         * @return フェードイン処理時間[秒]
         */
        CubismModelSettingJson.prototype.getMotionFadeInTimeValue = function (groupName, index) {
            if (!this.isExistMotionFadeIn(groupName, index)) {
                return -1.0;
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_Motions).getValueByString(groupName).getValueByIndex(index).getValueByString(FadeInTime).toFloat();
        };
        /**
         * モーション終了時のフェードアウト処理時間を取得する
         * @param groupName モーショングループの名前
         * @param index 配列のインデックス値
         * @return フェードアウト処理時間[秒]
         */
        CubismModelSettingJson.prototype.getMotionFadeOutTimeValue = function (groupName, index) {
            if (!this.isExistMotionFadeOut(groupName, index)) {
                return -1.0;
            }
            return this._jsonValue.at(FrequestNode.FrequestNode_Motions).getValueByString(groupName).getValueByIndex(index).getValueByString(FadeOutTime).toFloat();
        };
        /**
         * ユーザーデータのファイル名を取得する
         * @return ユーザーデータのファイル名
         */
        CubismModelSettingJson.prototype.getUserDataFile = function () {
            if (!this.isExistUserDataFile()) {
                return "";
            }
            return this._json.getRoot().getValueByString(FileReferences).getValueByString(UserData).getRawString();
        };
        /**
         * レイアウト情報を取得する
         * @param outLayoutMap csmMapクラスのインスタンス
         * @return true レイアウト情報が存在する
         * @return false レイアウト情報が存在しない
         */
        CubismModelSettingJson.prototype.getLayoutMap = function (outLayoutMap) {
            // 存在しない要素にアクセスするとエラーになるためValueがnullの場合はnullを代入する
            var map = this._json.getRoot().getValueByString(Layout).getMap();
            if (map == null) {
                return false;
            }
            var ret = false;
            for (var ite = map.begin(); ite.notEqual(map.end()); ite.preIncrement()) {
                outLayoutMap.setValue(ite.ptr().first, ite.ptr().second.toFloat());
                ret = true;
            }
            return ret;
        };
        /**
         * 目パチに関連付けられたパラメータの数を取得する
         * @return 目パチに関連付けられたパラメータの数
         */
        CubismModelSettingJson.prototype.getEyeBlinkParameterCount = function () {
            if (!this.isExistEyeBlinkParameters()) {
                return 0;
            }
            var num = 0;
            for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); i++) {
                var refI = this._jsonValue.at(FrequestNode.FrequestNode_Groups).getValueByIndex(i);
                if (refI.isNull() || refI.isError()) {
                    continue;
                }
                if (refI.getValueByString(Name).getRawString() == EyeBlink) {
                    num = refI.getValueByString(Ids).getVector().getSize();
                    break;
                }
            }
            return num;
        };
        /**
         * 目パチに関連付けられたパラメータのIDを取得する
         * @param index 配列のインデックス値
         * @return パラメータID
         */
        CubismModelSettingJson.prototype.getEyeBlinkParameterId = function (index) {
            if (!this.isExistEyeBlinkParameters()) {
                return null;
            }
            for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); i++) {
                var refI = this._jsonValue.at(FrequestNode.FrequestNode_Groups).getValueByIndex(i);
                if (refI.isNull() || refI.isError()) {
                    continue;
                }
                if (refI.getValueByString(Name).getRawString() == EyeBlink) {
                    return CubismFramework.getIdManager().getId(refI.getValueByString(Ids).getValueByIndex(index).getRawString());
                }
            }
            return null;
        };
        /**
         * リップシンクに関連付けられたパラメータの数を取得する
         * @return リップシンクに関連付けられたパラメータの数
         */
        CubismModelSettingJson.prototype.getLipSyncParameterCount = function () {
            if (!this.isExistLipSyncParameters()) {
                return 0;
            }
            var num = 0;
            for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); i++) {
                var refI = this._jsonValue.at(FrequestNode.FrequestNode_Groups).getValueByIndex(i);
                if (refI.isNull() || refI.isError()) {
                    continue;
                }
                if (refI.getValueByString(Name).getRawString() == LipSync) {
                    num = refI.getValueByString(Ids).getVector().getSize();
                    break;
                }
            }
            return num;
        };
        /**
         * リップシンクに関連付けられたパラメータの数を取得する
         * @param index 配列のインデックス値
         * @return パラメータID
         */
        CubismModelSettingJson.prototype.getLipSyncParameterId = function (index) {
            if (!this.isExistLipSyncParameters()) {
                return null;
            }
            for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); i++) {
                var refI = this._jsonValue.at(FrequestNode.FrequestNode_Groups).getValueByIndex(i);
                if (refI.isNull() || refI.isError()) {
                    continue;
                }
                if (refI.getValueByString(Name).getRawString() == LipSync) {
                    return CubismFramework.getIdManager().getId(refI.getValueByString(Ids).getValueByIndex(index).getRawString());
                }
            }
            return null;
        };
        /**
         * モデルファイルのキーが存在するかどうかを確認する
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistModelFile = function () {
            var node = this._jsonValue.at(FrequestNode.FrequestNode_Moc);
            return !node.isNull() && !node.isError();
        };
        /**
         * テクスチャファイルのキーが存在するかどうかを確認する
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistTextureFiles = function () {
            var node = this._jsonValue.at(FrequestNode.FrequestNode_Textures);
            return !node.isNull() && !node.isError();
        };
        /**
         * 当たり判定のキーが存在するかどうかを確認する
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistHitAreas = function () {
            var node = this._jsonValue.at(FrequestNode.FrequestNode_HitAreas);
            return !node.isNull() && !node.isError();
        };
        /**
         * 物理演算ファイルのキーが存在するかどうかを確認する
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistPhysicsFile = function () {
            var node = this._jsonValue.at(FrequestNode.FrequestNode_Physics);
            return !node.isNull() && !node.isError();
        };
        /**
         * ポーズ設定ファイルのキーが存在するかどうかを確認する
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistPoseFile = function () {
            var node = this._jsonValue.at(FrequestNode.FrequestNode_Pose);
            return !node.isNull() && !node.isError();
        };
        /**
         * 表情設定ファイルのキーが存在するかどうかを確認する
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistExpressionFile = function () {
            var node = this._jsonValue.at(FrequestNode.FrequestNode_Expressions);
            return !node.isNull() && !node.isError();
        };
        /**
         * モーショングループのキーが存在するかどうかを確認する
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistMotionGroups = function () {
            var node = this._jsonValue.at(FrequestNode.FrequestNode_Motions);
            return !node.isNull() && !node.isError();
        };
        /**
         * 引数で指定したモーショングループのキーが存在するかどうかを確認する
         * @param groupName  グループ名
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistMotionGroupName = function (groupName) {
            var node = this._jsonValue.at(FrequestNode.FrequestNode_Motions).getValueByString(groupName);
            return !node.isNull() && !node.isError();
        };
        /**
         * 引数で指定したモーションに対応するサウンドファイルのキーが存在するかどうかを確認する
         * @param groupName  グループ名
         * @param index 配列のインデックス値
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistMotionSoundFile = function (groupName, index) {
            var node = this._jsonValue.at(FrequestNode.FrequestNode_Motions).getValueByString(groupName).getValueByIndex(index).getValueByString(SoundPath);
            return !node.isNull() && !node.isError();
        };
        /**
         * 引数で指定したモーションに対応するフェードイン時間のキーが存在するかどうかを確認する
         * @param groupName  グループ名
         * @param index 配列のインデックス値
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistMotionFadeIn = function (groupName, index) {
            var node = this._jsonValue.at(FrequestNode.FrequestNode_Motions).getValueByString(groupName).getValueByIndex(index).getValueByString(FadeInTime);
            return !node.isNull() && !node.isError();
        };
        /**
         * 引数で指定したモーションに対応するフェードアウト時間のキーが存在するかどうかを確認する
         * @param groupName  グループ名
         * @param index 配列のインデックス値
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistMotionFadeOut = function (groupName, index) {
            var node = this._jsonValue.at(FrequestNode.FrequestNode_Motions).getValueByString(groupName).getValueByIndex(index).getValueByString(FadeOutTime);
            return !node.isNull() && !node.isError();
        };
        /**
         * UserDataのファイル名が存在するかどうかを確認する
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistUserDataFile = function () {
            var node = this._json.getRoot().getValueByString(FileReferences).getValueByString(UserData);
            return !node.isNull() && !node.isError();
        };
        /**
         * 目ぱちに対応付けられたパラメータが存在するかどうかを確認する
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistEyeBlinkParameters = function () {
            if (this._jsonValue.at(FrequestNode.FrequestNode_Groups).isNull() || this._jsonValue.at(FrequestNode.FrequestNode_Groups).isError()) {
                return false;
            }
            for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); ++i) {
                if (this._jsonValue.at(FrequestNode.FrequestNode_Groups).getValueByIndex(i).getValueByString(Name).getRawString() == EyeBlink) {
                    return true;
                }
            }
            return false;
        };
        /**
         * リップシンクに対応付けられたパラメータが存在するかどうかを確認する
         * @return true キーが存在する
         * @return false キーが存在しない
         */
        CubismModelSettingJson.prototype.isExistLipSyncParameters = function () {
            if (this._jsonValue.at(FrequestNode.FrequestNode_Groups).isNull() || this._jsonValue.at(FrequestNode.FrequestNode_Groups).isError()) {
                return false;
            }
            for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); ++i) {
                if (this._jsonValue.at(FrequestNode.FrequestNode_Groups).getValueByIndex(i).getValueByString(Name).getRawString() == LipSync) {
                    return true;
                }
            }
            return false;
        };
        return CubismModelSettingJson;
    }(ICubismModelSetting));
    Live2DCubismFramework.CubismModelSettingJson = CubismModelSettingJson;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2N1YmlzbWZyYW1ld29ya2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvY3ViaXNtbW9kZWxzZXR0aW5nanNvbi50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvaWN1YmlzbW1vZGVsc2V0dGluZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvaWQvY3ViaXNtaWQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tYXRoL2N1YmlzbW1hdHJpeDQ0LnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3NtbWFwLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay90eXBlL2NzbXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdHlwZS9jc212ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3V0aWxzL2N1YmlzbWRlYnVnLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay91dGlscy9jdWJpc21qc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FB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QUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQyxDQUFDO1FBS0wsY0FBQztJQUFELENBQUMsQ0FwSjRCLEtBQUssR0FvSmpDO0lBcEpZLDZCQUFPLFVBb0puQjtBQUNMLENBQUMsRUE3ekNnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBNnpDckMiLCJmaWxlIjoiL2N1YmlzbW1vZGVsc2V0dGluZ2pzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9jdWJpc21tb2RlbHNldHRpbmdqc29uLnRzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIOODreOCsOWHuuWKm+mWouaVsOOBruioreWumlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLy0tLS0tLS0tLS0g44Ot44Kw5Ye65Yqb44Os44OZ44OrIOmBuOaKnumgheebriDlrprnvqkgLS0tLS0tLS0tLVxuLy8vIOips+e0sOODreOCsOWHuuWKm+ioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfVkVSQk9TRTogbnVtYmVyID0gMDtcbi8vLyDjg4fjg5Djg4PjgrDjg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0RFQlVHOiBudW1iZXIgPSAxO1xuLy8vIEluZm/jg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0lORk86IG51bWJlciA9IDI7XG4vLy8g6K2m5ZGK44Ot44Kw5Ye65Yqb6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9XQVJOSU5HOiBudW1iZXIgPSAzO1xuLy8vIOOCqOODqeODvOODreOCsOWHuuWKm+ioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfRVJST1I6IG51bWJlciA9IDQ7XG4vLy8g44Ot44Kw5Ye65Yqb44Kq44OV6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9PRkY6IG51bWJlciA9IDU7XG5cbi8qKlxuKiDjg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjgIJcbipcbiog5by35Yi255qE44Gr44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5aSJ44GI44KL5pmC44Gr5a6a576p44KS5pyJ5Yq544Gr44GZ44KL44CCXG4qIENTTV9MT0dfTEVWRUxfVkVSQk9TRSDvvZ4gQ1NNX0xPR19MRVZFTF9PRkYg44KS6YG45oqe44GZ44KL44CCXG4qL1xuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUw6IG51bWJlciA9IENTTV9MT0dfTEVWRUxfVkVSQk9TRTtcbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWZyYW1ld29ya30gZnJvbSBcIi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBpY3ViaXNtbW9kZWxzZXR0aW5nfSBmcm9tIFwiLi9pY3ViaXNtbW9kZWxzZXR0aW5nXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZH0gZnJvbSBcIi4vaWQvY3ViaXNtaWRcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWpzb259IGZyb20gXCIuL3V0aWxzL2N1YmlzbWpzb25cIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbW1hcH0gZnJvbSBcIi4vdHlwZS9jc21tYXBcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSBcIi4vdHlwZS9jc212ZWN0b3JcIjtcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xuaW1wb3J0IGNzbU1hcCA9IGNzbW1hcC5jc21NYXA7XG5pbXBvcnQgaXRlcmF0b3IgPSBjc21tYXAuaXRlcmF0b3I7XG5pbXBvcnQgQ3ViaXNtRnJhbWV3b3JrID0gY3ViaXNtZnJhbWV3b3JrLkN1YmlzbUZyYW1ld29yaztcbmltcG9ydCBDdWJpc21JZEhhbmRsZSA9IGN1YmlzbWlkLkN1YmlzbUlkSGFuZGxlO1xuaW1wb3J0IEN1YmlzbUpzb24gPSBjdWJpc21qc29uLkN1YmlzbUpzb247XG5pbXBvcnQgVmFsdWUgPSBjdWJpc21qc29uLlZhbHVlO1xuaW1wb3J0IElDdWJpc21Nb2RlbFNldHRpbmcgPSBpY3ViaXNtbW9kZWxzZXR0aW5nLklDdWJpc21Nb2RlbFNldHRpbmc7XG5cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiBNb2RlbDNKc29u44Gu44Kt44O85paH5a2X5YiXXG4gICAgICovXG5cbiAgICAgLy8gSlNPTiBLZXlzXG4gICAgIGNvbnN0IFZlcnNpb246IHN0cmluZyA9IFwiVmVyc2lvblwiO1xuICAgICBjb25zdCBGaWxlUmVmZXJlbmNlczogc3RyaW5nID0gXCJGaWxlUmVmZXJlbmNlc1wiO1xuICAgICBjb25zdCBHcm91cHM6IHN0cmluZyA9IFwiR3JvdXBzXCI7XG4gICAgIGNvbnN0IExheW91dDogc3RyaW5nID0gXCJMYXlvdXRcIjtcbiAgICAgY29uc3QgSGl0QXJlYXM6IHN0cmluZyA9IFwiSGl0QXJlYXNcIjtcblxuICAgICBjb25zdCBNb2M6IHN0cmluZyA9IFwiTW9jXCI7XG4gICAgIGNvbnN0IFRleHR1cmVzOiBzdHJpbmcgPSBcIlRleHR1cmVzXCI7XG4gICAgIGNvbnN0IFBoeXNpY3M6IHN0cmluZyA9IFwiUGh5c2ljc1wiO1xuICAgICBjb25zdCBQb3NlOiBzdHJpbmcgPSBcIlBvc2VcIjtcbiAgICAgY29uc3QgRXhwcmVzc2lvbnM6IHN0cmluZyA9IFwiRXhwcmVzc2lvbnNcIjtcbiAgICAgY29uc3QgTW90aW9uczogc3RyaW5nID0gXCJNb3Rpb25zXCI7XG5cbiAgICAgY29uc3QgVXNlckRhdGE6IHN0cmluZyA9IFwiVXNlckRhdGFcIjtcbiAgICAgY29uc3QgTmFtZTogc3RyaW5nID0gXCJOYW1lXCI7XG4gICAgIGNvbnN0IEZpbGVQYXRoOiBzdHJpbmcgPSBcIkZpbGVcIjtcbiAgICAgY29uc3QgSWQ6IHN0cmluZyA9IFwiSWRcIjtcbiAgICAgY29uc3QgSWRzOiBzdHJpbmcgPSBcIklkc1wiO1xuICAgICBjb25zdCBUYXJnZXQ6IHN0cmluZyA9IFwiVGFyZ2V0XCI7XG5cbiAgICAgLy8gTW90aW9uc1xuICAgICBjb25zdCBJZGxlOiBzdHJpbmcgPSBcIklkbGVcIjtcbiAgICAgY29uc3QgVGFwQm9keTogc3RyaW5nID0gXCJUYXBCb2R5XCI7XG4gICAgIGNvbnN0IFBpbmNoSW46IHN0cmluZyA9IFwiUGluY2hJblwiO1xuICAgICBjb25zdCBQaW5jaE91dDogc3RyaW5nID0gXCJQaW5jaE91dFwiO1xuICAgICBjb25zdCBTaGFrZTogc3RyaW5nID0gXCJTaGFrZVwiO1xuICAgICBjb25zdCBGbGlja0hlYWQ6IHN0cmluZyA9IFwiRmxpY2tIZWFkXCI7XG4gICAgIGNvbnN0IFBhcmFtZXRlcjogc3RyaW5nID0gXCJQYXJhbWV0ZXJcIjtcblxuICAgICBjb25zdCBTb3VuZFBhdGg6IHN0cmluZyA9IFwiU291bmRcIjtcbiAgICAgY29uc3QgRmFkZUluVGltZTogc3RyaW5nID0gXCJGYWRlSW5UaW1lXCI7XG4gICAgIGNvbnN0IEZhZGVPdXRUaW1lOiBzdHJpbmcgPSBcIkZhZGVPdXRUaW1lXCI7XG5cbiAgICAgLy8gTGF5b3V0XG4gICAgIGNvbnN0IENlbnRlclg6IHN0cmluZyA9IFwiQ2VudGVyWFwiO1xuICAgICBjb25zdCBDZW50ZXJZOiBzdHJpbmcgPSBcIkNlbnRlcllcIjtcbiAgICAgY29uc3QgWDogc3RyaW5nID0gXCJYXCI7XG4gICAgIGNvbnN0IFk6IHN0cmluZyA9IFwiWVwiO1xuICAgICBjb25zdCBXaWR0aDogc3RyaW5nID0gXCJXaWR0aFwiO1xuICAgICBjb25zdCBIZWlnaHQ6IHN0cmluZyA9IFwiSGVpZ2h0XCI7XG5cbiAgICAgY29uc3QgTGlwU3luYzogc3RyaW5nID0gXCJMaXBTeW5jXCI7XG4gICAgIGNvbnN0IEV5ZUJsaW5rOiBzdHJpbmcgPSBcIkV5ZUJsaW5rXCI7XG5cbiAgICAgY29uc3QgSW5pdFBhcmFtZXRlcjogc3RyaW5nID0gXCJpbml0X3BhcmFtXCI7XG4gICAgIGNvbnN0IEluaXRQYXJ0c1Zpc2libGU6IHN0cmluZyA9IFwiaW5pdF9wYXJ0c192aXNpYmxlXCI7XG4gICAgIGNvbnN0IFZhbDogc3RyaW5nID0gXCJ2YWxcIjtcblxuICAgICBlbnVtIEZyZXF1ZXN0Tm9kZVxuICAgICB7XG4gICAgICAgICBGcmVxdWVzdE5vZGVfR3JvdXBzLCAgICAgICAvLyBnZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhHcm91cHMpXG4gICAgICAgICBGcmVxdWVzdE5vZGVfTW9jLCAgICAgICAgICAvLyBnZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhGaWxlUmVmZXJlbmNlcykuZ2V0VmFsdWVCeVN0cmluZyhNb2MpXG4gICAgICAgICBGcmVxdWVzdE5vZGVfTW90aW9ucywgICAgICAvLyBnZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhGaWxlUmVmZXJlbmNlcykuZ2V0VmFsdWVCeVN0cmluZyhNb3Rpb25zKVxuICAgICAgICAgRnJlcXVlc3ROb2RlX0V4cHJlc3Npb25zLCAgLy8gZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoRmlsZVJlZmVyZW5jZXMpLmdldFZhbHVlQnlTdHJpbmcoRXhwcmVzc2lvbnMpXG4gICAgICAgICBGcmVxdWVzdE5vZGVfVGV4dHVyZXMsICAgICAvLyBnZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhGaWxlUmVmZXJlbmNlcykuZ2V0VmFsdWVCeVN0cmluZyhUZXh0dXJlcylcbiAgICAgICAgIEZyZXF1ZXN0Tm9kZV9QaHlzaWNzLCAgICAgIC8vIGdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKEZpbGVSZWZlcmVuY2VzKS5nZXRWYWx1ZUJ5U3RyaW5nKFBoeXNpY3MpXG4gICAgICAgICBGcmVxdWVzdE5vZGVfUG9zZSwgICAgICAgICAvLyBnZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhGaWxlUmVmZXJlbmNlcykuZ2V0VmFsdWVCeVN0cmluZyhQb3NlKVxuICAgICAgICAgRnJlcXVlc3ROb2RlX0hpdEFyZWFzICAgICAgLy8gZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoSGl0QXJlYXMpXG4gICAgIH07XG5cblxuICAgICAvKipcbiAgICAgICogTW9kZWwzSnNvbuODkeODvOOCteODvFxuICAgICAgKlxuICAgICAgKiBtb2RlbDMuanNvbuODleOCoeOCpOODq+OCkuODkeODvOOCueOBl+OBpuWApOOCkuWPluW+l+OBmeOCi1xuICAgICAgKi9cbiAgICAgZXhwb3J0IGNsYXNzIEN1YmlzbU1vZGVsU2V0dGluZ0pzb24gZXh0ZW5kcyBJQ3ViaXNtTW9kZWxTZXR0aW5nXG4gICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIE1vZGVsM0pzb27jgpLjg5DjgqTjg4jphY3liJfjgajjgZfjgaboqq3jgb/ovrzjgpPjgaDjg4fjg7zjgr/jg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtIHNpemUgICAgICBNb2RlbDNKc29u44Gu44OH44O844K/44K144Kk44K6XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoYnVmZmVyOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5fanNvbiA9IEN1YmlzbUpzb24uY3JlYXRlKGJ1ZmZlciwgc2l6ZSk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuX2pzb24pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fanNvblZhbHVlID0gbmV3IGNzbVZlY3RvcjxWYWx1ZT4oKTtcblxuICAgICAgICAgICAgICAgIC8vIOmghueVquOBr2VudW0gRnJlcXVlc3ROb2Rl44Go5LiA6Ie044GV44Gb44KLXG4gICAgICAgICAgICAgICAgdGhpcy5fanNvblZhbHVlLnB1c2hCYWNrKHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoR3JvdXBzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fanNvblZhbHVlLnB1c2hCYWNrKHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoRmlsZVJlZmVyZW5jZXMpLmdldFZhbHVlQnlTdHJpbmcoTW9jKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fanNvblZhbHVlLnB1c2hCYWNrKHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoRmlsZVJlZmVyZW5jZXMpLmdldFZhbHVlQnlTdHJpbmcoTW90aW9ucykpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2pzb25WYWx1ZS5wdXNoQmFjayh0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKEZpbGVSZWZlcmVuY2VzKS5nZXRWYWx1ZUJ5U3RyaW5nKEV4cHJlc3Npb25zKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fanNvblZhbHVlLnB1c2hCYWNrKHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoRmlsZVJlZmVyZW5jZXMpLmdldFZhbHVlQnlTdHJpbmcoVGV4dHVyZXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9qc29uVmFsdWUucHVzaEJhY2sodGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhGaWxlUmVmZXJlbmNlcykuZ2V0VmFsdWVCeVN0cmluZyhQaHlzaWNzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fanNvblZhbHVlLnB1c2hCYWNrKHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoRmlsZVJlZmVyZW5jZXMpLmdldFZhbHVlQnlTdHJpbmcoUG9zZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2pzb25WYWx1ZS5wdXNoQmFjayh0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKEhpdEFyZWFzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIEN1YmlzbUpzb24uZGVsZXRlKHRoaXMuX2pzb24pO1xuXG4gICAgICAgICAgICB0aGlzLl9qc29uVmFsdWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbUpzb27jgqrjg5bjgrjjgqfjgq/jg4jjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBDdWJpc21Kc29uXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgR2V0SnNvbigpOiBDdWJpc21Kc29uXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vY+ODleOCoeOCpOODq+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIE1vY+ODleOCoeOCpOODq+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vZGVsRmlsZU5hbWUoKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRXhpc3RNb2RlbEZpbGUoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9Nb2MpLmdldFJhd1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OBjOS9v+eUqOOBmeOCi+ODhuOCr+OCueODgeODo+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7mlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRUZXh0dXJlQ291bnQoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRXhpc3RUZXh0dXJlRmlsZXMoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX1RleHR1cmVzKS5nZXRTaXplKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OG44Kv44K544OB44Oj44GM6YWN572u44GV44KM44Gf44OH44Kj44Os44Kv44OI44Oq44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44OG44Kv44K544OB44Oj44GM6YWN572u44GV44KM44Gf44OH44Kj44Os44Kv44OI44Oq44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VGV4dHVyZURpcmVjdG9yeSgpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX1RleHR1cmVzKS5nZXRSYXdTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjgYzkvb/nlKjjgZnjgovjg4bjgq/jgrnjg4Hjg6Pjga7lkI3liY3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOODhuOCr+OCueODgeODo+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFRleHR1cmVGaWxlTmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9UZXh0dXJlcykuZ2V0VmFsdWVCeUluZGV4KGluZGV4KS5nZXRSYXdTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjgavoqK3lrprjgZXjgozjgZ/lvZPjgZ/jgorliKTlrprjga7mlbDjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDjg6Ljg4fjg6vjgavoqK3lrprjgZXjgozjgZ/lvZPjgZ/jgorliKTlrprjga7mlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRIaXRBcmVhc0NvdW50KCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBpZighdGhpcy5pc0V4aXN0SGl0QXJlYXMoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX0hpdEFyZWFzKS5nZXRTaXplKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b2T44Gf44KK5Yik5a6a44Gr6Kit5a6a44GV44KM44GfSUTjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBrmluZGV4XG4gICAgICAgICAqIEByZXR1cm4g5b2T44Gf44KK5Yik5a6a44Gr6Kit5a6a44GV44KM44GfSURcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRIaXRBcmVhSWQoaW5kZXg6IG51bWJlcik6IEN1YmlzbUlkSGFuZGxlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQodGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfSGl0QXJlYXMpLmdldFZhbHVlQnlJbmRleChpbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhJZCkuZ2V0UmF3U3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW9k+OBn+OCiuWIpOWumuOBq+ioreWumuOBleOCjOOBn+WQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g5b2T44Gf44KK5Yik5a6a44Gr6Kit5a6a44GV44KM44Gf5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0SGl0QXJlYU5hbWUoaW5kZXg6IG51bWJlcik6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfSGl0QXJlYXMpLmdldFZhbHVlQnlJbmRleChpbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhOYW1lKS5nZXRSYXdTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDniannkIbmvJTnrpfoqK3lrprjg5XjgqHjgqTjg6vjga7lkI3liY3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDniannkIbmvJTnrpfoqK3lrprjg5XjgqHjgqTjg6vjga7lkI3liY1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRQaHlzaWNzRmlsZU5hbWUoKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRXhpc3RQaHlzaWNzRmlsZSgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfUGh5c2ljcykuZ2V0UmF3U3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844OE5YiH44KK5pu/44GI6Kit5a6a44OV44Kh44Kk44Or44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44OR44O844OE5YiH44KK5pu/44GI6Kit5a6a44OV44Kh44Kk44Or44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UG9zZUZpbGVOYW1lKCk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICBpZighdGhpcy5pc0V4aXN0UG9zZUZpbGUoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX1Bvc2UpLmdldFJhd1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihqOaDheioreWumuODleOCoeOCpOODq+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOihqOaDheioreWumuODleOCoeOCpOODq+OBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEV4cHJlc3Npb25Db3VudCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIXRoaXMuaXNFeGlzdEV4cHJlc3Npb25GaWxlKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9FeHByZXNzaW9ucykuZ2V0U2l6ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihqOaDheioreWumuODleOCoeOCpOODq+OCkuitmOWIpeOBmeOCi+WQjeWJje+8iOWIpeWQje+8ieOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g6KGo5oOF44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RXhwcmVzc2lvbk5hbWUoaW5kZXg6IG51bWJlcik6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfRXhwcmVzc2lvbnMpLmdldFZhbHVlQnlJbmRleChpbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhOYW1lKS5nZXRSYXdTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDooajmg4XoqK3lrprjg5XjgqHjgqTjg6vjga7lkI3liY3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOihqOaDheioreWumuODleOCoeOCpOODq+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEV4cHJlc3Npb25GaWxlTmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9FeHByZXNzaW9ucykuZ2V0VmFsdWVCeUluZGV4KGluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKEZpbGVQYXRoKS5nZXRSYXdTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7mlbDjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7mlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNb3Rpb25Hcm91cENvdW50KCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBpZighdGhpcy5pc0V4aXN0TW90aW9uR3JvdXBzKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9Nb3Rpb25zKS5nZXRLZXlzKCkuZ2V0U2l6ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TW90aW9uR3JvdXBOYW1lKGluZGV4OiBudW1iZXIpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIXRoaXMuaXNFeGlzdE1vdGlvbkdyb3VwcygpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfTW90aW9ucykuZ2V0S2V5cygpLmF0KGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjgavlkKvjgb7jgozjgovjg6Ljg7zjgrfjg6fjg7Pjga7mlbDjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGdyb3VwTmFtZSDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7lkI3liY1cbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7mlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNb3Rpb25Db3VudChncm91cE5hbWU6IHN0cmluZyk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBpZighdGhpcy5pc0V4aXN0TW90aW9uR3JvdXBOYW1lKGdyb3VwTmFtZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9Nb3Rpb25zKS5nZXRWYWx1ZUJ5U3RyaW5nKGdyb3VwTmFtZSkuZ2V0U2l6ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCsOODq+ODvOODl+WQjeOBqOOCpOODs+ODh+ODg+OCr+OCueWApOOBi+OCieODouODvOOCt+ODp+ODs+ODleOCoeOCpOODq+WQjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBOYW1lIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjVxuICAgICAgICAgKiBAcGFyYW0gaW5kZXggICAgIOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+ODleOCoeOCpOODq+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vdGlvbkZpbGVOYW1lKGdyb3VwTmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRXhpc3RNb3Rpb25Hcm91cE5hbWUoZ3JvdXBOYW1lKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX01vdGlvbnMpLmdldFZhbHVlQnlTdHJpbmcoZ3JvdXBOYW1lKS5nZXRWYWx1ZUJ5SW5kZXgoaW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoRmlsZVBhdGgpLmdldFJhd1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBq+WvvuW/nOOBmeOCi+OCteOCpuODs+ODieODleOCoeOCpOODq+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBOYW1lIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjVxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44K144Km44Oz44OJ44OV44Kh44Kk44Or44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TW90aW9uU291bmRGaWxlTmFtZShncm91cE5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICBpZighdGhpcy5pc0V4aXN0TW90aW9uU291bmRGaWxlKGdyb3VwTmFtZSwgaW5kZXgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfTW90aW9ucykuZ2V0VmFsdWVCeVN0cmluZyhncm91cE5hbWUpLmdldFZhbHVlQnlJbmRleChpbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhTb3VuZFBhdGgpLmdldFJhd1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+mWi+Wni+aZguOBruODleOCp+ODvOODieOCpOODs+WHpueQhuaZgumWk+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBOYW1lIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjVxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44OV44Kn44O844OJ44Kk44Oz5Yem55CG5pmC6ZaTW+enkl1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNb3Rpb25GYWRlSW5UaW1lVmFsdWUoZ3JvdXBOYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIXRoaXMuaXNFeGlzdE1vdGlvbkZhZGVJbihncm91cE5hbWUsIGluZGV4KSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTEuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX01vdGlvbnMpLmdldFZhbHVlQnlTdHJpbmcoZ3JvdXBOYW1lKS5nZXRWYWx1ZUJ5SW5kZXgoaW5kZXgpLmdldFZhbHVlQnlTdHJpbmcoRmFkZUluVGltZSkudG9GbG9hdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+e1guS6huaZguOBruODleOCp+ODvOODieOCouOCpuODiOWHpueQhuaZgumWk+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBOYW1lIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjVxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44OV44Kn44O844OJ44Ki44Km44OI5Yem55CG5pmC6ZaTW+enkl1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNb3Rpb25GYWRlT3V0VGltZVZhbHVlKGdyb3VwTmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRXhpc3RNb3Rpb25GYWRlT3V0KGdyb3VwTmFtZSwgaW5kZXgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMS4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfTW90aW9ucykuZ2V0VmFsdWVCeVN0cmluZyhncm91cE5hbWUpLmdldFZhbHVlQnlJbmRleChpbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhGYWRlT3V0VGltZSkudG9GbG9hdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODpuODvOOCtuODvOODh+ODvOOCv+OBruODleOCoeOCpOODq+WQjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODpuODvOOCtuODvOODh+ODvOOCv+OBruODleOCoeOCpOODq+WQjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFVzZXJEYXRhRmlsZSgpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIXRoaXMuaXNFeGlzdFVzZXJEYXRhRmlsZSgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhGaWxlUmVmZXJlbmNlcykuZ2V0VmFsdWVCeVN0cmluZyhVc2VyRGF0YSkuZ2V0UmF3U3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Kk44Ki44Km44OI5oOF5aCx44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBvdXRMYXlvdXRNYXAgY3NtTWFw44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjg6zjgqTjgqLjgqbjg4jmg4XloLHjgYzlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjg6zjgqTjgqLjgqbjg4jmg4XloLHjgYzlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRMYXlvdXRNYXAob3V0TGF5b3V0TWFwOiBjc21NYXA8c3RyaW5nLCBudW1iZXI+KTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICAvLyDlrZjlnKjjgZfjgarjgYTopoHntKDjgavjgqLjgq/jgrvjgrnjgZnjgovjgajjgqjjg6njg7zjgavjgarjgovjgZ/jgoFWYWx1ZeOBjG51bGzjga7loLTlkIjjga9udWxs44KS5Luj5YWl44GZ44KLXG4gICAgICAgICAgICBsZXQgbWFwOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT4gPSB0aGlzLl9qc29uLmdldFJvb3QoKS5nZXRWYWx1ZUJ5U3RyaW5nKExheW91dCkuZ2V0TWFwKCk7XG5cbiAgICAgICAgICAgIGlmKG1hcCA9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJldDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IoY29uc3QgaXRlOiBpdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IG1hcC5iZWdpbigpOyBpdGUubm90RXF1YWwobWFwLmVuZCgpKTsgaXRlLnByZUluY3JlbWVudCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG91dExheW91dE1hcC5zZXRWYWx1ZShpdGUucHRyKCkuZmlyc3QsIGl0ZS5wdHIoKS5zZWNvbmQudG9GbG9hdCgpKTtcbiAgICAgICAgICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOebruODkeODgeOBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOebruODkeODgeOBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEV5ZUJsaW5rUGFyYW1ldGVyQ291bnQoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0V4aXN0RXllQmxpbmtQYXJhbWV0ZXJzKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBudW06IG51bWJlciA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX0dyb3VwcykuZ2V0U2l6ZSgpOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHJlZkk6IFZhbHVlID0gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfR3JvdXBzKS5nZXRWYWx1ZUJ5SW5kZXgoaSk7XG4gICAgICAgICAgICAgICAgaWYocmVmSS5pc051bGwoKSB8fCByZWZJLmlzRXJyb3IoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZWZJLmdldFZhbHVlQnlTdHJpbmcoTmFtZSkuZ2V0UmF3U3RyaW5nKCkgPT0gRXllQmxpbmspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBudW0gPSByZWZJLmdldFZhbHVlQnlTdHJpbmcoSWRzKS5nZXRWZWN0b3IoKS5nZXRTaXplKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnm67jg5Hjg4HjgavplqLpgKPku5jjgZHjgonjgozjgZ/jg5Hjg6njg6Hjg7zjgr/jga5JROOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44OR44Op44Oh44O844K/SURcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRFeWVCbGlua1BhcmFtZXRlcklkKGluZGV4OiBudW1iZXIpOiBDdWJpc21JZEhhbmRsZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNFeGlzdEV5ZUJsaW5rUGFyYW1ldGVycygpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX0dyb3VwcykuZ2V0U2l6ZSgpOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHJlZkk6IFZhbHVlID0gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfR3JvdXBzKS5nZXRWYWx1ZUJ5SW5kZXgoaSk7XG4gICAgICAgICAgICAgICAgaWYocmVmSS5pc051bGwoKSB8fCByZWZJLmlzRXJyb3IoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZWZJLmdldFZhbHVlQnlTdHJpbmcoTmFtZSkuZ2V0UmF3U3RyaW5nKCkgPT0gRXllQmxpbmspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKHJlZkkuZ2V0VmFsdWVCeVN0cmluZyhJZHMpLmdldFZhbHVlQnlJbmRleChpbmRleCkuZ2V0UmF3U3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODquODg+ODl+OCt+ODs+OCr+OBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODquODg+ODl+OCt+ODs+OCr+OBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldExpcFN5bmNQYXJhbWV0ZXJDb3VudCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRXhpc3RMaXBTeW5jUGFyYW1ldGVycygpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbnVtOiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX0dyb3VwcykuZ2V0U2l6ZSgpOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHJlZkk6IFZhbHVlID0gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfR3JvdXBzKS5nZXRWYWx1ZUJ5SW5kZXgoaSk7XG4gICAgICAgICAgICAgICAgaWYocmVmSS5pc051bGwoKSB8fCByZWZJLmlzRXJyb3IoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZWZJLmdldFZhbHVlQnlTdHJpbmcoTmFtZSkuZ2V0UmF3U3RyaW5nKCkgPT0gTGlwU3luYylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG51bSA9IHJlZkkuZ2V0VmFsdWVCeVN0cmluZyhJZHMpLmdldFZlY3RvcigpLmdldFNpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODquODg+ODl+OCt+ODs+OCr+OBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44OR44Op44Oh44O844K/SURcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRMaXBTeW5jUGFyYW1ldGVySWQoaW5kZXg6IG51bWJlcik6IEN1YmlzbUlkSGFuZGxlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0V4aXN0TGlwU3luY1BhcmFtZXRlcnMoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX0dyb3VwcykuZ2V0U2l6ZSgpOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHJlZkk6IFZhbHVlID0gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfR3JvdXBzKS5nZXRWYWx1ZUJ5SW5kZXgoaSk7XG4gICAgICAgICAgICAgICAgaWYocmVmSS5pc051bGwoKSB8fCByZWZJLmlzRXJyb3IoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZWZJLmdldFZhbHVlQnlTdHJpbmcoTmFtZSkuZ2V0UmF3U3RyaW5nKCkgPT0gTGlwU3luYylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQocmVmSS5nZXRWYWx1ZUJ5U3RyaW5nKElkcykuZ2V0VmFsdWVCeUluZGV4KGluZGV4KS5nZXRSYXdTdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or44OV44Kh44Kk44Or44Gu44Kt44O844GM5a2Y5Zyo44GZ44KL44GL44Gp44GG44GL44KS56K66KqN44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjgq3jg7zjgYzlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjgq3jg7zjgYzlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgaXNFeGlzdE1vZGVsRmlsZSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBub2RlOiBWYWx1ZSA9IHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX01vYyk7XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuaXNOdWxsKCkgJiYgIW5vZGUuaXNFcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODhuOCr+OCueODgeODo+ODleOCoeOCpOODq+OBruOCreODvOOBjOWtmOWcqOOBmeOCi+OBi+OBqeOBhuOBi+OCkueiuuiqjeOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIHRydWUg44Kt44O844GM5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Kt44O844GM5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGlzRXhpc3RUZXh0dXJlRmlsZXMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbm9kZTogVmFsdWUgPSB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9UZXh0dXJlcyk7XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuaXNOdWxsKCkgJiYgIW5vZGUuaXNFcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW9k+OBn+OCiuWIpOWumuOBruOCreODvOOBjOWtmOWcqOOBmeOCi+OBi+OBqeOBhuOBi+OCkueiuuiqjeOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIHRydWUg44Kt44O844GM5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Kt44O844GM5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGlzRXhpc3RIaXRBcmVhcygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBub2RlOiBWYWx1ZSA9IHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX0hpdEFyZWFzKTtcbiAgICAgICAgICAgIHJldHVybiAhbm9kZS5pc051bGwoKSAmJiAhbm9kZS5pc0Vycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54mp55CG5ryU566X44OV44Kh44Kk44Or44Gu44Kt44O844GM5a2Y5Zyo44GZ44KL44GL44Gp44GG44GL44KS56K66KqN44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjgq3jg7zjgYzlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjgq3jg7zjgYzlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgaXNFeGlzdFBoeXNpY3NGaWxlKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG5vZGU6IFZhbHVlID0gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfUGh5c2ljcyk7XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuaXNOdWxsKCkgJiYgIW5vZGUuaXNFcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODneODvOOCuuioreWumuODleOCoeOCpOODq+OBruOCreODvOOBjOWtmOWcqOOBmeOCi+OBi+OBqeOBhuOBi+OCkueiuuiqjeOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIHRydWUg44Kt44O844GM5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Kt44O844GM5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGlzRXhpc3RQb3NlRmlsZSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBub2RlOiBWYWx1ZSA9IHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX1Bvc2UpO1xuICAgICAgICAgICAgcmV0dXJuICFub2RlLmlzTnVsbCgpICYmICFub2RlLmlzRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDooajmg4XoqK3lrprjg5XjgqHjgqTjg6vjga7jgq3jg7zjgYzlrZjlnKjjgZnjgovjgYvjganjgYbjgYvjgpLnorroqo3jgZnjgotcbiAgICAgICAgICogQHJldHVybiB0cnVlIOOCreODvOOBjOWtmOWcqOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOOCreODvOOBjOWtmOWcqOOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBpc0V4aXN0RXhwcmVzc2lvbkZpbGUoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbm9kZTogVmFsdWUgPSB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9FeHByZXNzaW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuaXNOdWxsKCkgJiYgIW5vZGUuaXNFcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruOCreODvOOBjOWtmOWcqOOBmeOCi+OBi+OBqeOBhuOBi+OCkueiuuiqjeOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIHRydWUg44Kt44O844GM5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Kt44O844GM5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGlzRXhpc3RNb3Rpb25Hcm91cHMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbm9kZTogVmFsdWUgPSB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9Nb3Rpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAhbm9kZS5pc051bGwoKSAmJiAhbm9kZS5pc0Vycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gn5oyH5a6a44GX44Gf44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu44Kt44O844GM5a2Y5Zyo44GZ44KL44GL44Gp44GG44GL44KS56K66KqN44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBncm91cE5hbWUgIOOCsOODq+ODvOODl+WQjVxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg44Kt44O844GM5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Kt44O844GM5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGlzRXhpc3RNb3Rpb25Hcm91cE5hbWUoZ3JvdXBOYW1lOiBzdHJpbmcpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBub2RlOiBWYWx1ZSA9IHRoaXMuX2pzb25WYWx1ZS5hdChGcmVxdWVzdE5vZGUuRnJlcXVlc3ROb2RlX01vdGlvbnMpLmdldFZhbHVlQnlTdHJpbmcoZ3JvdXBOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiAhbm9kZS5pc051bGwoKSAmJiAhbm9kZS5pc0Vycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gn5oyH5a6a44GX44Gf44Oi44O844K344On44Oz44Gr5a++5b+c44GZ44KL44K144Km44Oz44OJ44OV44Kh44Kk44Or44Gu44Kt44O844GM5a2Y5Zyo44GZ44KL44GL44Gp44GG44GL44KS56K66KqN44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBncm91cE5hbWUgIOOCsOODq+ODvOODl+WQjVxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjgq3jg7zjgYzlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjgq3jg7zjgYzlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgaXNFeGlzdE1vdGlvblNvdW5kRmlsZShncm91cE5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG5vZGU6IFZhbHVlID0gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfTW90aW9ucykuZ2V0VmFsdWVCeVN0cmluZyhncm91cE5hbWUpLmdldFZhbHVlQnlJbmRleChpbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhTb3VuZFBhdGgpO1xuICAgICAgICAgICAgcmV0dXJuICFub2RlLmlzTnVsbCgpICYmICFub2RlLmlzRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDjgafmjIflrprjgZfjgZ/jg6Ljg7zjgrfjg6fjg7Pjgavlr77lv5zjgZnjgovjg5Xjgqfjg7zjg4njgqTjg7PmmYLplpPjga7jgq3jg7zjgYzlrZjlnKjjgZnjgovjgYvjganjgYbjgYvjgpLnorroqo3jgZnjgotcbiAgICAgICAgICogQHBhcmFtIGdyb3VwTmFtZSAg44Kw44Or44O844OX5ZCNXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiB0cnVlIOOCreODvOOBjOWtmOWcqOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOOCreODvOOBjOWtmOWcqOOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBpc0V4aXN0TW90aW9uRmFkZUluKGdyb3VwTmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbm9kZTogVmFsdWUgPSB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9Nb3Rpb25zKS5nZXRWYWx1ZUJ5U3RyaW5nKGdyb3VwTmFtZSkuZ2V0VmFsdWVCeUluZGV4KGluZGV4KS5nZXRWYWx1ZUJ5U3RyaW5nKEZhZGVJblRpbWUpO1xuICAgICAgICAgICAgcmV0dXJuICFub2RlLmlzTnVsbCgpICYmICFub2RlLmlzRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDjgafmjIflrprjgZfjgZ/jg6Ljg7zjgrfjg6fjg7Pjgavlr77lv5zjgZnjgovjg5Xjgqfjg7zjg4njgqLjgqbjg4jmmYLplpPjga7jgq3jg7zjgYzlrZjlnKjjgZnjgovjgYvjganjgYbjgYvjgpLnorroqo3jgZnjgotcbiAgICAgICAgICogQHBhcmFtIGdyb3VwTmFtZSAg44Kw44Or44O844OX5ZCNXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiB0cnVlIOOCreODvOOBjOWtmOWcqOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOOCreODvOOBjOWtmOWcqOOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBpc0V4aXN0TW90aW9uRmFkZU91dChncm91cE5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG5vZGU6IFZhbHVlID0gdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfTW90aW9ucykuZ2V0VmFsdWVCeVN0cmluZyhncm91cE5hbWUpLmdldFZhbHVlQnlJbmRleChpbmRleCkuZ2V0VmFsdWVCeVN0cmluZyhGYWRlT3V0VGltZSk7XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuaXNOdWxsKCkgJiYgIW5vZGUuaXNFcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVzZXJEYXRh44Gu44OV44Kh44Kk44Or5ZCN44GM5a2Y5Zyo44GZ44KL44GL44Gp44GG44GL44KS56K66KqN44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjgq3jg7zjgYzlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjgq3jg7zjgYzlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgaXNFeGlzdFVzZXJEYXRhRmlsZSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBub2RlOiBWYWx1ZSA9IHRoaXMuX2pzb24uZ2V0Um9vdCgpLmdldFZhbHVlQnlTdHJpbmcoRmlsZVJlZmVyZW5jZXMpLmdldFZhbHVlQnlTdHJpbmcoVXNlckRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuICFub2RlLmlzTnVsbCgpICYmICFub2RlLmlzRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnm67jgbHjgaHjgavlr77lv5zku5jjgZHjgonjgozjgZ/jg5Hjg6njg6Hjg7zjgr/jgYzlrZjlnKjjgZnjgovjgYvjganjgYbjgYvjgpLnorroqo3jgZnjgotcbiAgICAgICAgICogQHJldHVybiB0cnVlIOOCreODvOOBjOWtmOWcqOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOOCreODvOOBjOWtmOWcqOOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBpc0V4aXN0RXllQmxpbmtQYXJhbWV0ZXJzKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfR3JvdXBzKS5pc051bGwoKSB8fCB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9Hcm91cHMpLmlzRXJyb3IoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9Hcm91cHMpLmdldFNpemUoKTsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9Hcm91cHMpLmdldFZhbHVlQnlJbmRleChpKS5nZXRWYWx1ZUJ5U3RyaW5nKE5hbWUpLmdldFJhd1N0cmluZygpID09IEV5ZUJsaW5rKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oq44OD44OX44K344Oz44Kv44Gr5a++5b+c5LuY44GR44KJ44KM44Gf44OR44Op44Oh44O844K/44GM5a2Y5Zyo44GZ44KL44GL44Gp44GG44GL44KS56K66KqN44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjgq3jg7zjgYzlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjgq3jg7zjgYzlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgaXNFeGlzdExpcFN5bmNQYXJhbWV0ZXJzKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfR3JvdXBzKS5pc051bGwoKSB8fCB0aGlzLl9qc29uVmFsdWUuYXQoRnJlcXVlc3ROb2RlLkZyZXF1ZXN0Tm9kZV9Hcm91cHMpLmlzRXJyb3IoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfR3JvdXBzKS5nZXRTaXplKCk7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fanNvblZhbHVlLmF0KEZyZXF1ZXN0Tm9kZS5GcmVxdWVzdE5vZGVfR3JvdXBzKS5nZXRWYWx1ZUJ5SW5kZXgoaSkuZ2V0VmFsdWVCeVN0cmluZyhOYW1lKS5nZXRSYXdTdHJpbmcoKSA9PSBMaXBTeW5jKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cblxuICAgICAgICBwcml2YXRlIF9qc29uOiBDdWJpc21Kc29uO1xuICAgICAgICBwcml2YXRlIF9qc29uVmFsdWU6IGNzbVZlY3RvcjxWYWx1ZT47XG4gICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkfSBmcm9tICcuL2lkL2N1YmlzbWlkJztcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbW1hcH0gZnJvbSAnLi90eXBlL2NzbW1hcCc7XG5pbXBvcnQgY3NtTWFwID0gY3NtbWFwLmNzbU1hcDtcbmltcG9ydCBDdWJpc21JZEhhbmRsZSA9IGN1YmlzbWlkLkN1YmlzbUlkSGFuZGxlO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIOODouODh+ODq+ioreWumuaDheWgseOCkuWPluOCiuaJseOBhumWouaVsOOCkuWuo+iogOOBl+OBn+e0lOeyi+S7ruaDs+OCr+ODqeOCueOAglxuICAgICAqXG4gICAgICog44GT44Gu44Kv44Op44K544KS57aZ5om/44GZ44KL44GT44Go44Gn44CB44Oi44OH44Or6Kit5a6a5oOF5aCx44KS5Y+W44KK5omx44GG44Kv44Op44K544Gr44Gq44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIElDdWJpc21Nb2RlbFNldHRpbmdcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2Pjg5XjgqHjgqTjg6vjga7lkI3liY3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiBNb2Pjg5XjgqHjgqTjg6vjga7lkI3liY1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRNb2RlbEZpbGVOYW1lKCk6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or44GM5L2/55So44GZ44KL44OG44Kv44K544OB44Oj44Gu5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIOODhuOCr+OCueODgeODo+OBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFRleHR1cmVDb3VudCgpOiBudW1iZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODhuOCr+OCueODgeODo+OBjOmFjee9ruOBleOCjOOBn+ODh+OCo+ODrOOCr+ODiOODquOBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODhuOCr+OCueODgeODo+OBjOmFjee9ruOBleOCjOOBn+ODh+OCo+ODrOOCr+ODiOODquOBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFRleHR1cmVEaXJlY3RvcnkoKTogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjgYzkvb/nlKjjgZnjgovjg4bjgq/jgrnjg4Hjg6Pjga7lkI3liY3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOODhuOCr+OCueODgeODo+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFRleHR1cmVGaWxlTmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjgavoqK3lrprjgZXjgozjgZ/lvZPjgZ/jgorliKTlrprjga7mlbDjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDjg6Ljg4fjg6vjgavoqK3lrprjgZXjgozjgZ/lvZPjgZ/jgorliKTlrprjga7mlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRIaXRBcmVhc0NvdW50KCk6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5b2T44Gf44KK5Yik5a6a44Gr6Kit5a6a44GV44KM44GfSUTjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBrmluZGV4XG4gICAgICAgICAqIEByZXR1cm4g5b2T44Gf44KK5Yik5a6a44Gr6Kit5a6a44GV44KM44GfSURcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRIaXRBcmVhSWQoaW5kZXg6IG51bWJlcik6IEN1YmlzbUlkSGFuZGxlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvZPjgZ/jgorliKTlrprjgavoqK3lrprjgZXjgozjgZ/lkI3liY3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOW9k+OBn+OCiuWIpOWumuOBq+ioreWumuOBleOCjOOBn+WQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldEhpdEFyZWFOYW1lKGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeJqeeQhua8lOeul+ioreWumuODleOCoeOCpOODq+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOeJqeeQhua8lOeul+ioreWumuODleOCoeOCpOODq+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFBoeXNpY3NGaWxlTmFtZSgpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODvOODhOWIh+OCiuabv+OBiOioreWumuODleOCoeOCpOODq+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODkeODvOODhOWIh+OCiuabv+OBiOioreWumuODleOCoeOCpOODq+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFBvc2VGaWxlTmFtZSgpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihqOaDheioreWumuODleOCoeOCpOODq+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOihqOaDheioreWumuODleOCoeOCpOODq+OBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldEV4cHJlc3Npb25Db3VudCgpOiBudW1iZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihqOaDheioreWumuODleOCoeOCpOODq+OCkuitmOWIpeOBmeOCi+WQjeWJje+8iOWIpeWQje+8ieOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g6KGo5oOF44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0RXhwcmVzc2lvbk5hbWUoaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGo5oOF6Kit5a6a44OV44Kh44Kk44Or44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiDooajmg4XoqK3lrprjg5XjgqHjgqTjg6vjga7lkI3liY1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRFeHByZXNzaW9uRmlsZU5hbWUoaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW90aW9uR3JvdXBDb3VudCgpOiBudW1iZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW90aW9uR3JvdXBOYW1lKGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBq+WQq+OBvuOCjOOCi+ODouODvOOCt+ODp+ODs+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBOYW1lIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjVxuICAgICAgICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldE1vdGlvbkNvdW50KGdyb3VwTmFtZTogc3RyaW5nKTogbnVtYmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrDjg6vjg7zjg5flkI3jgajjgqTjg7Pjg4fjg4Pjgq/jgrnlgKTjgYvjgonjg6Ljg7zjgrfjg6fjg7Pjg5XjgqHjgqTjg6vlkI3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGdyb3VwTmFtZSDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7lkI3liY1cbiAgICAgICAgICogQHBhcmFtIGluZGV4ICAgICDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjg5XjgqHjgqTjg6vjga7lkI3liY1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRNb3Rpb25GaWxlTmFtZShncm91cE5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gr5a++5b+c44GZ44KL44K144Km44Oz44OJ44OV44Kh44Kk44Or44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBncm91cE5hbWUg44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5ZCN5YmNXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiDjgrXjgqbjg7Pjg4njg5XjgqHjgqTjg6vjga7lkI3liY1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRNb3Rpb25Tb3VuZEZpbGVOYW1lKGdyb3VwTmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pplovlp4vmmYLjga7jg5Xjgqfjg7zjg4njgqTjg7Plh6bnkIbmmYLplpPjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGdyb3VwTmFtZSDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7lkI3liY1cbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOODleOCp+ODvOODieOCpOODs+WHpueQhuaZgumWk1vnp5JdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW90aW9uRmFkZUluVGltZVZhbHVlKGdyb3VwTmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogbnVtYmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PntYLkuobmmYLjga7jg5Xjgqfjg7zjg4njgqLjgqbjg4jlh6bnkIbmmYLplpPjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGdyb3VwTmFtZSDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7lkI3liY1cbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOODleOCp+ODvOODieOCouOCpuODiOWHpueQhuaZgumWk1vnp5JdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW90aW9uRmFkZU91dFRpbWVWYWx1ZShncm91cE5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Om44O844K244O844OH44O844K/44Gu44OV44Kh44Kk44Or5ZCN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44Om44O844K244O844OH44O844K/44Gu44OV44Kh44Kk44Or5ZCNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0VXNlckRhdGFGaWxlKCk6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Kk44Ki44Km44OI5oOF5aCx44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBvdXRMYXlvdXRNYXAgY3NtTWFw44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjg6zjgqTjgqLjgqbjg4jmg4XloLHjgYzlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjg6zjgqTjgqLjgqbjg4jmg4XloLHjgYzlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRMYXlvdXRNYXAob3V0TGF5b3V0TWFwOiBjc21NYXA8c3RyaW5nLCBudW1iZXI+KTogYm9vbGVhbjtcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnm67jg5Hjg4HjgavplqLpgKPku5jjgZHjgonjgozjgZ/jg5Hjg6njg6Hjg7zjgr/jga7mlbDjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDnm67jg5Hjg4HjgavplqLpgKPku5jjgZHjgonjgozjgZ/jg5Hjg6njg6Hjg7zjgr/jga7mlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRFeWVCbGlua1BhcmFtZXRlckNvdW50KCk6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog55uu44OR44OB44Gr6Zai6YCj5LuY44GR44KJ44KM44Gf44OR44Op44Oh44O844K/44GuSUTjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOODkeODqeODoeODvOOCv0lEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0RXllQmxpbmtQYXJhbWV0ZXJJZChpbmRleDogbnVtYmVyKTogQ3ViaXNtSWRIYW5kbGU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODquODg+ODl+OCt+ODs+OCr+OBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODquODg+ODl+OCt+ODs+OCr+OBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldExpcFN5bmNQYXJhbWV0ZXJDb3VudCgpOiBudW1iZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODquODg+ODl+OCt+ODs+OCr+OBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44OR44Op44Oh44O844K/SURcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRMaXBTeW5jUGFyYW1ldGVySWQoaW5kZXg6IG51bWJlcik6IEN1YmlzbUlkSGFuZGxlO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDjg5Hjg6njg6Hjg7zjgr/lkI3jg7vjg5Hjg7zjg4TlkI3jg7tEcmF3YWJsZeWQjeOCkuS/neaMgVxuICAgICAqXG4gICAgICog44OR44Op44Oh44O844K/5ZCN44O744OR44O844OE5ZCN44O7RHJhd2FibGXlkI3jgpLkv53mjIHjgZnjgovjgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtSWRcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZygpOiBjc21TdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcgfCBjc21TdHJpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZihpZCkgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gbmV3IGNzbVN0cmluZyhpZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlk44KS5q+U6LyDXG4gICAgICAgICAqIEBwYXJhbSBjIOavlOi8g+OBmeOCi2lkXG4gICAgICAgICAqIEByZXR1cm4g5ZCM44GY44Gq44KJ44GwdHJ1ZSznlbDjgarjgaPjgabjgYTjgozjgbBmYWxzZeOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXF1YWwoYzogc3RyaW5nIHwgY3NtU3RyaW5nIHwgQ3ViaXNtSWQpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYykgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIGNzbVN0cmluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjLnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIEN1YmlzbUlkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMuX2lkLnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlk44KS5q+U6LyDXG4gICAgICAgICAqIEBwYXJhbSBjIOavlOi8g+OBmeOCi2lkXG4gICAgICAgICAqIEByZXR1cm4g5ZCM44GY44Gq44KJ44GwdHJ1ZSznlbDjgarjgaPjgabjgYTjgozjgbBmYWxzZeOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzTm90RXF1YWwoYzogc3RyaW5nIHwgY3NtU3RyaW5nIHwgQ3ViaXNtSWQpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYykgPT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIGNzbVN0cmluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYy5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBDdWJpc21JZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYy5faWQucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9pZDogY3NtU3RyaW5nOyAvLyBJROWQjVxuICAgIH1cblxuICAgIGV4cG9ydCBkZWNsYXJlIHR5cGUgQ3ViaXNtSWRIYW5kbGUgPSBDdWJpc21JZDtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSBcIi4uL3R5cGUvY3NtdmVjdG9yXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZH0gZnJvbSBcIi4vY3ViaXNtaWRcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcbmltcG9ydCBDdWJpc21JZCA9IGN1YmlzbWlkLkN1YmlzbUlkO1xuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICogSUTlkI3jga7nrqHnkIZcbiAgICAgKlxuICAgICAqIElE5ZCN44KS566h55CG44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUlkTWFuYWdlclxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faWRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21JZD4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5faWRzLmdldFNpemUoKTsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lkcy5zZXQoaSwgdm9pZCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkcyA9ICBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44KS44Oq44K544OI44GL44KJ55m76YyyXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpZHMgSUTlkI3jg6rjgrnjg4hcbiAgICAgICAgICogQHBhcmFtIGNvdW50IElE44Gu5YCL5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJJZHMoaWRzOiBzdHJpbmdbXSB8IGNzbVN0cmluZ1tdKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcklkKGlkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgpLnmbvpjLJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJJZChpZDogc3RyaW5nIHwgY3NtU3RyaW5nKTogQ3ViaXNtSWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDogQ3ViaXNtSWQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mKGlkKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoKHJlc3VsdCA9IHRoaXMuZmluZElkKGlkKSkgIT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEN1YmlzbUlkKGlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pZHMucHVzaEJhY2socmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcklkKGlkLnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0SWQoaWQ6IGNzbVN0cmluZyB8IHN0cmluZyk6IEN1YmlzbUlkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVySWQoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjga7norroqo1cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWtmOWcqOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWtmOWcqOOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXhpc3QoaWQ6IGNzbVN0cmluZyB8IHN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZihpZCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmZpbmRJZChpZCkgIT0gbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0V4aXN0KGlkLnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjgpLmpJzntKLjgZnjgovjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXG4gICAgICAgICAqIEByZXR1cm4g55m76Yyy44GV44KM44Gm44GE44KLSUTjgILjgarjgZHjgozjgbBOVUxM44CCXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGZpbmRJZChpZDogc3RyaW5nKTogQ3ViaXNtSWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5faWRzLmdldFNpemUoKTsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2lkcy5hdChpKS5nZXRTdHJpbmcoKS5pc0VxdWFsKGlkKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZHMuYXQoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX2lkczogY3NtVmVjdG9yPEN1YmlzbUlkPjsgICAvLyDnmbvpjLLjgZXjgozjgabjgYTjgotJROOBruODquOCueODiFxuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db3JlL2xpdmUyZGN1YmlzbWNvcmUuZC50c1wiIC8+XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21qc29ufSBmcm9tIFwiLi91dGlscy9jdWJpc21qc29uXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZG1hbmFnZXJ9IGZyb20gXCIuL2lkL2N1YmlzbWlkbWFuYWdlclwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtcmVuZGVyZXJ9IGZyb20gXCIuL3JlbmRlcmluZy9jdWJpc21yZW5kZXJlclwiO1xuaW1wb3J0IHtDdWJpc21Mb2dJbmZvLCBDdWJpc21Mb2dXYXJuaW5nLCBDU01fQVNTRVJUfSBmcm9tIFwiLi91dGlscy9jdWJpc21kZWJ1Z1wiO1xuaW1wb3J0IFZhbHVlID0gY3ViaXNtanNvbi5WYWx1ZTtcbmltcG9ydCBDdWJpc21JZE1hbmFnZXIgPSBjdWJpc21pZG1hbmFnZXIuQ3ViaXNtSWRNYW5hZ2VyO1xuaW1wb3J0IEN1YmlzbVJlbmRlcmVyID0gY3ViaXNtcmVuZGVyZXIuQ3ViaXNtUmVuZGVyZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJ0b2Qoczogc3RyaW5nLCBlbmRQdHI6IHN0cmluZ1tdKTogbnVtYmVyXG57XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgIGZvcihsZXQgaTogbnVtYmVyID0gMTsgOyBpKyspXG4gICAge1xuICAgICAgICBsZXQgdGVzdEM6IHN0cmluZyA9IHMuc2xpY2UoaSAtIDEsIGkpO1xuXG4gICAgICAgIC8vIOaMh+aVsOODu+ODnuOCpOODiuOCueOBruWPr+iDveaAp+OBjOOBguOCi+OBruOBp+OCueOCreODg+ODl+OBmeOCi1xuICAgICAgICBpZih0ZXN0Qz09J2UnIHx8IHRlc3RDPT0nLScgfHwgdGVzdEMgPT0gJ0UnKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG7jgIDjgIDjgIAgIC8vIOaWh+Wtl+WIl+OBruevhOWbsuOCkuW6g+OBkuOBpuOBhOOBj1xuICAgICAgICBsZXQgdGVzdDogc3RyaW5nID0gcy5zdWJzdHJpbmcoMCwgaSk7XG4gICAgICAgIGxldCBudW1iZXI6IG51bWJlciA9IE51bWJlcih0ZXN0KTtcbiAgICAgICAgaWYoaXNOYU4obnVtYmVyKSlcbiAgICAgICAge1xu44CA44CA44CA44CAICAgIC8vIOaVsOWApOOBqOOBl+OBpuiqjeitmOOBp+OBjeOBquOBj+OBquOBo+OBn+OBruOBp+e1guS6hlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxu44CA44CA44CAIC8vIOacgOW+jOOBq+aVsOWApOOBqOOBl+OBpuOBp+OBjeOBn2luZGV444KS5qC857SN44GX44Gm44GK44GPXG4gICAgICAgIGluZGV4ID0gaTtcbiAgICB9XG4gICAgbGV0IGQgPSBwYXJzZUZsb2F0KHMpOyAgLy8g44OR44O844K544GX44Gf5pWw5YCkXG5cbiAgICBpZihpc05hTihkKSlcbiAgICB7XG7jgIDjgIDjgIDjgIAgLy8g5pWw5YCk44Go44GX44Gm6KqN6K2Y44Gn44GN44Gq44GP44Gq44Gj44Gf44Gu44Gn57WC5LqGXG4gICAgICAgIGQgPSBOYU47XG4gICAgfVxuXG4gICAgZW5kUHRyWzBdID0gcy5zbGljZShpbmRleCk744CALy8g5b6M57aa44Gu5paH5a2X5YiXXG5cbiAgICByZXR1cm4gZDtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvLyDjg5XjgqHjgqTjg6vjgrnjgrPjg7zjg5fjga7lpInmlbDjgpLliJ3mnJ/ljJZcblxuICAgIGxldCBzX2lzU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBzX2lzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgc19vcHRpb246IE9wdGlvbiA9IG51bGw7XG4gICAgbGV0IHNfY3ViaXNtSWRNYW5hZ2VyOiBDdWJpc21JZE1hbmFnZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogRnJhbWV3b3Jr5YaF44Gn5L2/44GG5a6a5pWw44Gu5a6j6KiAXG4gICAgICovXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDb25zdGFudFxuICAgIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IHZlcnRleE9mZnNldDogbnVtYmVyID0gMDsgICAgIC8vIOODoeODg+OCt+ODpemggueCueOBruOCquODleOCu+ODg+ODiOWApFxuICAgICAgICBleHBvcnQgY29uc3QgdmVydGV4U3RlcDogbnVtYmVyID0gMjsgICAgICAgLy8g44Oh44OD44K344Ol6aCC54K544Gu44K544OG44OD44OX5YCkXG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGNzbURlbGV0ZTxUPihhZGRyZXNzOiBUKTogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoIWFkZHJlc3MpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZHJlc3MgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGl2ZTJEIEN1YmlzbSBTREsgT3JpZ2luYWwgV29ya2Zsb3cgU0RL44Gu44Ko44Oz44OI44Oq44Od44Kk44Oz44OIXG4gICAgICog5Yip55So6ZaL5aeL5pmC44GvQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKeOCkuWRvOOBs+OAgUN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCnjgafntYLkuobjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtRnJhbWV3b3JrXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+OBrkFQSeOCkuS9v+eUqOWPr+iDveOBq+OBmeOCi+OAglxuICAgICAgICAgKiAgQVBJ44KS5a6f6KGM44GZ44KL5YmN44Gr5b+F44Ga44GT44Gu6Zai5pWw44KS5a6f6KGM44GZ44KL44GT44Go44CCXG4gICAgICAgICAqICDkuIDluqbmupblgpnjgYzlrozkuobjgZfjgabku6XpmY3jga/jgIHlho3jgbPlrp/ooYzjgZfjgabjgoLlhoXpg6jlh6bnkIbjgYzjgrnjgq3jg4Pjg5fjgZXjgozjgb7jgZnjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICAgIG9wdGlvbiAgICAgIE9wdGlvbuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICAg5rqW5YKZ5Yem55CG44GM5a6M5LqG44GX44Gf44KJdHJ1ZeOBjOi/lOOCiuOBvuOBmeOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGFydFVwKG9wdGlvbjogT3B0aW9uID0gbnVsbCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYoc19pc1N0YXJ0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5zdGFydFVwKCkgaXMgYWxyZWFkeSBkb25lLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNfb3B0aW9uID0gb3B0aW9uO1xuXG4gICAgICAgICAgICBpZihzX29wdGlvbiAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIExpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21TZXRMb2dGdW5jdGlvbihzX29wdGlvbi5sb2dGdW5jdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNfaXNTdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gTGl2ZTJEIEN1YmlzbSBDb3Jl44OQ44O844K444On44Oz5oOF5aCx44KS6KGo56S6XG4gICAgICAgICAgICBpZihzX2lzU3RhcnRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJzaW9uOiBudW1iZXIgPSBMaXZlMkRDdWJpc21Db3JlLlZlcnNpb24uY3NtR2V0VmVyc2lvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ham9yOiBudW1iZXIgPSAoKHZlcnNpb24gJiAweEZGMDAwMDAwKSA+PiAyNCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlub3I6IG51bWJlciA9ICgodmVyc2lvbiAmIDB4MDBGRjAwMDApID4+IDE2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRjaDogbnVtYmVyID0gKCh2ZXJzaW9uICYgMHgwMDAwRkZGRikpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb25OdW1iZXI6IG51bWJlciA9IHZlcnNpb247XG5cbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dJbmZvKGBMaXZlMkQgQ3ViaXNtIENvcmUgdmVyc2lvbjogezB9LnsxfS57Mn0gKHszfSlgLFxuICAgICAgICAgICAgICAgICAgICAoJzAwJyArIG1ham9yKS5zbGljZSgtMiksXG4gICAgICAgICAgICAgICAgICAgICgnMDAnICsgbWlub3IpLnNsaWNlKC0yKSxcbiAgICAgICAgICAgICAgICAgICAgKCcwMDAwJyArIHBhdGNoKS5zbGljZSgtNCksXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb25OdW1iZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLnN0YXJ0VXAoKSBpcyBjb21wbGV0ZS5cIik7XG5cbiAgICAgICAgICAgIHJldHVybiBzX2lzU3RhcnRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGFydFVwKCnjgafliJ3mnJ/ljJbjgZfjgZ9DdWJpc21GcmFtZXdvcmvjga7lkITjg5Hjg6njg6Hjg7zjgr/jgpLjgq/jg6rjgqLjgZfjgb7jgZnjgIJcbiAgICAgICAgICogRGlzcG9zZSgp44GX44GfQ3ViaXNtRnJhbWV3b3Jr44KS5YaN5Yip55So44GZ44KL6Zqb44Gr5Yip55So44GX44Gm44GP44Gg44GV44GE44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGNsZWFuVXAoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBzX2lzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc19pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgICAgICBzX29wdGlvbiA9IG51bGw7XG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+WGheOBruODquOCveODvOOCueOCkuWIneacn+WMluOBl+OBpuODouODh+ODq+OCkuihqOekuuWPr+iDveOBqueKtuaFi+OBq+OBl+OBvuOBmeOAgjxicj5cbiAgICAgICAgICogICAgIOWGjeW6pkluaXRpYWxpemUoKeOBmeOCi+OBq+OBr+WFiOOBq0Rpc3Bvc2UoKeOCkuWun+ihjOOBmeOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgQ1NNX0FTU0VSVChzX2lzU3RhcnRlZCk7XG4gICAgICAgICAgICBpZighc19pc1N0YXJ0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yayBpcyBub3Qgc3RhcnRlZC5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0gc19pc0luaXRpYWxpemVk44Gr44KI44KL6YCj57aa5Yid5pyf5YyW44Ks44O844OJIC0tLVxuICAgICAgICAgICAgLy8g6YCj57aa44GX44Gm44Oq44K944O844K556K65L+d44GM6KGM44KP44KM44Gq44GE44KI44GG44Gr44GZ44KL44CCXG4gICAgICAgICAgICAvLyDlho3luqZJbml0aWFsaXplKCnjgZnjgovjgavjga/lhYjjgatEaXNwb3NlKCnjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgovjgIJcbiAgICAgICAgICAgIGlmIChzX2lzSW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCkgc2tpcHBlZCwgYWxyZWFkeSBpbml0aWFsaXplZC5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLy0tLS0gc3RhdGljIOWIneacn+WMliAtLS0tXG4gICAgICAgICAgICBWYWx1ZS5zdGF0aWNJbml0aWFsaXplTm90Rm9yQ2xpZW50Q2FsbCgpO1xuXG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlciA9IG5ldyBDdWJpc21JZE1hbmFnZXIoKTtcblxuICAgICAgICAgICAgc19pc0luaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCkgaXMgY29tcGxldGUuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvlhoXjga7lhajjgabjga7jg6rjgr3jg7zjgrnjgpLop6PmlL7jgZfjgb7jgZnjgIJcbiAgICAgICAgICogICAgICDjgZ/jgaDjgZfjgIHlpJbpg6jjgafnorrkv53jgZXjgozjgZ/jg6rjgr3jg7zjgrnjgavjgaTjgYTjgabjga/op6PmlL7jgZfjgb7jgZvjgpPjgIJcbiAgICAgICAgICogICAgICDlpJbpg6jjgafpganliIfjgavnoLTmo4TjgZnjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGlzcG9zZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIENTTV9BU1NFUlQoc19pc1N0YXJ0ZWQpO1xuICAgICAgICAgICAgaWYoIXNfaXNTdGFydGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsgaXMgbm90IHN0YXJ0ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tIHNfaXNJbml0aWFsaXplZOOBq+OCiOOCi+acquWIneacn+WMluino+aUvuOCrOODvOODiSAtLS1cbiAgICAgICAgICAgIC8vIGRpc3Bvc2UoKeOBmeOCi+OBq+OBr+WFiOOBq2luaXRpYWxpemUoKeOCkuWun+ihjOOBmeOCi+W/heimgeOBjOOBguOCi+OAglxuICAgICAgICAgICAgaWYoIXNfaXNJbml0aWFsaXplZCkgICAgLy8gZmFsc2UuLi7jg6rjgr3jg7zjgrnmnKrnorrkv53jga7loLTlkIhcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrLmRpc3Bvc2UoKSBza2lwcGVkLCBub3QgaW5pdGlhbGl6ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVmFsdWUuc3RhdGljUmVsZWFzZU5vdEZvckNsaWVudENhbGwoKTtcblxuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIucmVsZWFzZSgpO1xuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyDjg6zjg7Pjg4Djg6njga7pnZnnmoTjg6rjgr3jg7zjgrnvvIjjgrfjgqfjg7zjg4Djg5fjg63jgrDjg6njg6Dku5bvvInjgpLop6PmlL7jgZnjgotcbiAgICAgICAgICAgIEN1YmlzbVJlbmRlcmVyLnN0YXRpY1JlbGVhc2UoKTtcblxuICAgICAgICAgICAgc19pc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgpIGlzIGNvbXBsZXRlLlwiKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga5BUEnjgpLkvb/nlKjjgZnjgovmupblgpnjgYzlrozkuobjgZfjgZ/jgYvjganjgYbjgYtcbiAgICAgICAgICogQHJldHVybiBBUEnjgpLkvb/nlKjjgZnjgovmupblgpnjgYzlrozkuobjgZfjgabjgYTjgozjgbB0cnVl44GM6L+U44KK44G+44GZ44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGlzU3RhcnRlZCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBzX2lzU3RhcnRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr44Gu44Oq44K944O844K55Yid5pyf5YyW44GM44GZ44Gn44Gr6KGM44KP44KM44Gm44GE44KL44GL44Gp44GG44GLXG4gICAgICAgICAqIEByZXR1cm4g44Oq44K944O844K556K65L+d44GM5a6M5LqG44GX44Gm44GE44KM44GwdHJ1ZeOBjOi/lOOCiuOBvuOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBpc0luaXRpYWxpemVkKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHNfaXNJbml0aWFsaXplZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb3JlIEFQSeOBq+ODkOOCpOODs+ODieOBl+OBn+ODreOCsOmWouaVsOOCkuWun+ihjOOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJhcmFtIG1lc3NhZ2Ug44Ot44Kw44Oh44OD44K744O844K4XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGNvcmVMb2dGdW5jdGlvbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFJldHVybiBpZiBsb2dnaW5nIG5vdCBwb3NzaWJsZS5cbiAgICAgICAgICAgIGlmKCFMaXZlMkRDdWJpc21Db3JlLkxvZ2dpbmcuY3NtR2V0TG9nRnVuY3Rpb24oKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21HZXRMb2dGdW5jdGlvbigpKG1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruODreOCsOWHuuWKm+ODrOODmeODq+ioreWumuOBruWApOOCkui/lOOBmeOAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICDnj77lnKjjga7jg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0TG9nZ2luZ0xldmVsKCk6IExvZ0xldmVsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChzX29wdGlvbiAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBzX29wdGlvbi5sb2dnaW5nTGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gTG9nTGV2ZWwuTG9nTGV2ZWxfT2ZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE44Oe44ON44O844K444Oj44Gu44Kk44Oz44K544K/44Oz44K544KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gQ3ViaXNtTWFuYWdlcuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJZE1hbmFnZXIoKTogQ3ViaXNtSWRNYW5hZ2VyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBzX2N1YmlzbUlkTWFuYWdlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDpnZnnmoTjgq/jg6njgrnjgajjgZfjgabkvb/nlKjjgZnjgotcbiAgICAgICAgICog44Kk44Oz44K544K/44Oz44K55YyW44GV44Gb44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPcHRpb25cbntcbiAgICBsb2dGdW5jdGlvbjogTGl2ZTJEQ3ViaXNtQ29yZS5jc21Mb2dGdW5jdGlvbjsgICAvLyDjg63jgrDlh7rlipvjga7plqLmlbDjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICBsb2dnaW5nTGV2ZWw6IExvZ0xldmVsOyAgLy8g44Ot44Kw5Ye65Yqb44Os44OZ44Or44Gu6Kit5a6aXG59XG5cbi8qKlxuICog44Ot44Kw5Ye65Yqb44Gu44Os44OZ44OrXG4gKi9cbmV4cG9ydCBlbnVtIExvZ0xldmVsXG57XG4gICAgTG9nTGV2ZWxfVmVyYm9zZSA9IDAsICAgLy8g6Kmz57Sw44Ot44KwXG4gICAgTG9nTGV2ZWxfRGVidWcsICAgICAgICAgLy8g44OH44OQ44OD44Kw44Ot44KwXG4gICAgTG9nTGV2ZWxfSW5mbywgICAgICAgICAgLy8gSW5mb+ODreOCsFxuICAgIExvZ0xldmVsX1dhcm5pbmcsICAgICAgIC8vIOitpuWRiuODreOCsFxuICAgIExvZ0xldmVsX0Vycm9yLCAgICAgICAgIC8vIOOCqOODqeODvOODreOCsFxuICAgIExvZ0xldmVsX09mZiAgICAgICAgICAgIC8vIOODreOCsOWHuuWKm+eEoeWKuVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiA0eDTjga7ooYzliJdcbiAgICAgKlxuICAgICAqIDR4NOihjOWIl+OBruS+v+WIqeOCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21NYXRyaXg0NFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHIgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTsgICAgLy8gNCAqIDTjga7jgrXjgqTjgrpcbiAgICAgICAgICAgIHRoaXMubG9hZElkZW50aXR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y+X44GR5Y+W44Gj44Gf77yS44Gk44Gu6KGM5YiX44Gu5LmX566X44KS6KGM44GG44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBhIOihjOWIl2FcbiAgICAgICAgICogQHBhcmFtIGIg6KGM5YiXYlxuICAgICAgICAgKiBAcmV0dXJuIOS5l+eul+e1kOaenOOBruihjOWIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBtdWx0aXBseShhOiBGbG9hdDMyQXJyYXksIGI6IEZsb2F0MzJBcnJheSwgZHN0OiBGbG9hdDMyQXJyYXkpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IG46IG51bWJlciA9IDQ7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbjsgKytqKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrOiBudW1iZXIgPSAwOyBrIDwgbjsgKytrKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjW2ogKyBpICogNF0gKz0gYVtrICsgaSAqIDRdICogYltqICsgayAqIDRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCAxNjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRzdFtpXSA9IGNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y2Y5L2N6KGM5YiX44Gr5Yid5pyf5YyW44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgbG9hZElkZW50aXR5KCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGM6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAxLjAsIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAxLjBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLnNldE1hdHJpeChjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDooYzliJfjgpLoqK3lrppcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHRyIDE25YCL44Gu5rWu5YuV5bCP5pWw54K55pWw44Gn6KGo44GV44KM44KLNHg044Gu6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0TWF0cml4KHRyOiBGbG9hdDMyQXJyYXkpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxNjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyW2ldID0gdHJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGM5YiX44KS5rWu5YuV5bCP5pWw54K55pWw44Gu6YWN5YiX44Gn5Y+W5b6XXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gMTblgIvjga7mta7li5XlsI/mlbDngrnmlbDjgafooajjgZXjgozjgos0eDTjga7ooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRBcnJheSgpOiBGbG9hdDMyQXJyYXlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjou7jjga7mi6HlpKfnjofjgpLlj5blvpdcbiAgICAgICAgICogQHJldHVybiBY6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2NhbGVYKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWei7uOOBruaLoeWkp+eOh+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIFnou7jjga7mi6HlpKfnjodcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTY2FsZVkoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cls1XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu56e75YuV6YeP44KS5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gWOi7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFRyYW5zbGF0ZVgoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clsxMl07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWei7uOOBruenu+WLlemHj+OCkuWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIFnou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRUcmFuc2xhdGVZKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMTNdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafoqIjnrpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHNyYyBY6Lu444Gu5YCkXG4gICAgICAgICAqIEByZXR1cm4g54++5Zyo44Gu6KGM5YiX44Gn6KiI566X44GV44KM44GfWOi7uOOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zZm9ybVgoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzBdICogc3JjICsgdGhpcy5fdHJbMTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafoqIjnrpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHNyYyBZ6Lu444Gu5YCkXG4gICAgICAgICAqIEByZXR1cm7jgIDnj77lnKjjga7ooYzliJfjgafoqIjnrpfjgZXjgozjgZ9Z6Lu444Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNmb3JtWShzcmM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbNV0gKiBzcmMgKyB0aGlzLl90clsxM107XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+mAhuioiOeul1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGludmVydFRyYW5zZm9ybVgoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIChzcmMgLSB0aGlzLl90clsxMl0pIC8gdGhpcy5fdHJbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWei7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+mAhuioiOeul1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGludmVydFRyYW5zZm9ybVkoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIChzcmMgLSB0aGlzLl90clsxM10pIC8gdGhpcy5fdHJbNV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS6LW354K544Gr44GX44Gm56e75YuVXG4gICAgICAgICAqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkui1t+eCueOBq+OBl+OBpuebuOWvvueahOOBq+enu+WLleOBmeOCi+OAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGVSZWxhdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHRyMTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgICAgMC4wLCAgICAwLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAxLjAsICAgIDAuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMS4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIHgsICAgICAgeSwgICAgICAwLjAsICAgIDEuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KHRyMSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLnp7vli5VcbiAgICAgICAgICpcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS5oyH5a6a44GX44Gf5L2N572u44G456e75YuV44GZ44KLXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cbiAgICAgICAgICogQHBhcmFtIHkgeei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHJbMTJdID0geDtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEzXSA9IHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44GuWOi7uOOBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlWCh4OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEyXSA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44GuWei7uOOBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlWSh5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEzXSA9IHk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7mi6HlpKfnjofjgpLnm7jlr77nmoTjgavoqK3lrprjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2NhbGVSZWxhdGl2ZSh4OiBudW1iZXIsIHk6bnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgeCwgICAgICAwLjAsICAgIDAuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIHksICAgICAgMC4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAxLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDAuMCwgICAgMS4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkodHIxLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruaLoeWkp+eOh+OCkuaMh+WumuOBl+OBn+WAjeeOh+OBq+ioreWumuOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7mi6HlpKfnjodcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHJbMF0gPSB4O1xuICAgICAgICAgICAgdGhpcy5fdHJbNV0gPSB5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBq+ihjOWIl+OCkuS5l+eul1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbSDooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseUJ5TWF0cml4KG06IEN1YmlzbU1hdHJpeDQ0KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseShtLmdldEFycmF5KCksIHRoaXMuX3RyLCB0aGlzLl90cik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kq44OW44K444Kn44Kv44OI44Gu44Kz44OU44O844KS55Sf5oiQ44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2xvbmUoKTogQ3ViaXNtTWF0cml4NDRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGNsb25lTWF0cml4OiBDdWJpc21NYXRyaXg0NCA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl90ci5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbG9uZU1hdHJpeC5fdHJbaV0gPSB0aGlzLl90cltpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lTWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIF90cjogRmxvYXQzMkFycmF5OyAgICAvLyA0eDTooYzliJfjg4fjg7zjgr9cbiAgICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tYXRyaXg0NH0gZnJvbSAnLi4vbWF0aC9jdWJpc21tYXRyaXg0NCc7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tb2RlbH0gZnJvbSAnLi4vbW9kZWwvY3ViaXNtbW9kZWwnO1xuaW1wb3J0IEN1YmlzbU1vZGVsID0gY3ViaXNtbW9kZWwuQ3ViaXNtTW9kZWw7XG5pbXBvcnQgQ3ViaXNtTWF0cml4NDQgPSBjdWJpc21tYXRyaXg0NC5DdWJpc21NYXRyaXg0NDtcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDjg6Ljg4fjg6vmj4/nlLvjgpLlh6bnkIbjgZnjgovjg6zjg7Pjg4Djg6lcbiAgICAgKlxuICAgICAqIOOCteODluOCr+ODqeOCueOBq+eSsOWig+S+neWtmOOBruaPj+eUu+WRveS7pOOCkuiomOi/sOOBmeOCi+OAglxuICAgICAqL1xuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDdWJpc21SZW5kZXJlclxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCueOCkueUn+aIkOOBl+OBpuWPluW+l+OBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTogQ3ViaXNtUmVuZGVyZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K544KS6Kej5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZShyZW5kZXJlcjogQ3ViaXNtUmVuZGVyZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlcmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7liJ3mnJ/ljJblh6bnkIbjgpLlrp/ooYzjgZnjgotcbiAgICAgICAgICog5byV5pWw44Gr5rih44GX44Gf44Oi44OH44Or44GL44KJ44Os44Oz44OA44Op44Gu5Yid5pyf5YyW5Yem55CG44Gr5b+F6KaB44Gq5oOF5aCx44KS5Y+W44KK5Ye644GZ44GT44Go44GM44Gn44GN44KLXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbCDjg6Ljg4fjg6vjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbml0aWFsaXplKG1vZGVsOiBDdWJpc21Nb2RlbCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkcmF3TW9kZWwoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLmdldE1vZGVsKCkgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmRvRHJhd01vZGVsKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl+OCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiDphY3liJfjga/opIfoo73jgZXjgozjgovjga7jgafjgIHlhYPjga7phY3liJfjga/lpJbjgafnoLTmo4TjgZfjgaboia/jgYRcbiAgICAgICAgICogQHBhcmFtIG1hdHJpeDQ0IE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRNdnBNYXRyaXgobWF0cml4NDQ6IEN1YmlzbU1hdHJpeDQ0KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tdnBNYXRyaXg0eDQuc2V0TWF0cml4KG1hdHJpeDQ0LmdldEFycmF5KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJfjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TXZwTWF0cml4KCk6IEN1YmlzbU1hdHJpeDQ0XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tdnBNYXRyaXg0eDQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or44Gu6Imy44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqIOWQhOiJsjAuMH4xLjDjga7plpPjgafmjIflrprjgZnjgovvvIgxLjDjgYzmqJnmupbjga7nirbmhYvvvIlcbiAgICAgICAgICogQHBhcmFtIHJlZCDotaTjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcbiAgICAgICAgICogQHBhcmFtIGdyZWVuIOe3keODgeODo+ODs+ODjeODq+OBruWApFxuICAgICAgICAgKiBAcGFyYW0gYmx1ZSDpnZLjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcbiAgICAgICAgICogQHBhcmFtIGFscGhhIM6x44OB44Oj44Oz44ON44Or44Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0TW9kZWxDb2xvcihyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyLCBhbHBoYTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZihyZWQgPCAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVkID0gMC4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihyZWQgPiAxLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVkID0gMS4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihncmVlbiA8IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBncmVlbiA9IDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZ3JlZW4gPiAxLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ3JlZW4gPSAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGJsdWUgPCAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmx1ZSA9IDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYmx1ZSA+IDEuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBibHVlID0gMS4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihhbHBoYSA8IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYWxwaGEgPiAxLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuUiA9IHJlZDtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuRyA9IGdyZWVuO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5CID0gYmx1ZTtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuQSA9IGFscGhhO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OBruiJsuOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiDlkIToibIwLjB+MS4w44Gu6ZaT44Gn5oyH5a6a44GZ44KLKDEuMOOBjOaomea6luOBrueKtuaFiylcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBSR0JB44Gu44Kr44Op44O85oOF5aCxXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TW9kZWxDb2xvcigpOiBDdWJpc21UZXh0dXJlQ29sb3JcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fbW9kZWxDb2xvcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS5l+eul+a4iOOBv86x44Gu5pyJ5Yq544O754Sh5Yq544KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqIOacieWKueOBq+OBmeOCi+OBquOCiXRydWXjgIHnhKHlirnjgavjgZnjgovjgarjgolmYWxzZeOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldElzUHJlbXVsdGlwbGllZEFscGhhKGVuYWJsZTogYm9vbGVhbik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGEgPSBlbmFibGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5LmX566X5riI44G/zrHjga7mnInlirnjg7vnhKHlirnjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiB0cnVlIOS5l+eul+a4iOOBv+OBrs6x5pyJ5Yq5XG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5LmX566X5riI44G/44GuzrHnhKHlirlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1ByZW11bHRpcGxpZWRBbHBoYSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1ByZW11bHRpcGxpZWRBbHBoYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqvjg6rjg7PjgrDvvIjniYfpnaLmj4/nlLvvvInjga7mnInlirnjg7vnhKHlirnjgpLjgrvjg4Pjg4jjgZnjgovjgIJcbiAgICAgICAgICog5pyJ5Yq544Gr44GZ44KL44Gq44KJdHJ1ZeOAgeeEoeWKueOBq+OBmeOCi+OBquOCiWZhbHNl44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0SXNDdWxsaW5nKGN1bGxpbmc6IGJvb2xlYW4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ3VsbGluZyA9IGN1bGxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kr44Oq44Oz44Kw77yI54mH6Z2i5o+P55S777yJ44Gu5pyJ5Yq544O754Sh5Yq544KS5Y+W5b6X44GZ44KL44CCXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjgqvjg6rjg7PjgrDmnInlirlcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjgqvjg6rjg7PjgrDnhKHlirlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0N1bGxpbmcoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNDdWxsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODhuOCr+OCueODgeODo+OBrueVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv+OCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/lgKTjga7lvbHpn7/luqbjga/jg6zjg7Pjg4Djg6njga7lrp/oo4Xjgavkvp3lrZjjgZnjgotcbiAgICAgICAgICogQHBhcmFtIG4g44OR44Op44Oh44O844K/44Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0QW5pc290cm9weShuOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2FuaXNvcnRvcHkgPSBuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODhuOCr+OCueODgeODo+OBrueVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv+OCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOeVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEFuaXNvdHJvcHkoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmlzb3J0b3B5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODquODs+OCsOOBmeOCi+ODouODh+ODq+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODrOODs+ODgOODquODs+OCsOOBmeOCi+ODouODh+ODq1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vZGVsKCk6IEN1YmlzbU1vZGVsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ3VsbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGEgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2FuaXNvcnRvcHkgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yID0gbmV3IEN1YmlzbVRleHR1cmVDb2xvcigpO1xuXG4gICAgICAgICAgICAvLyDljZjkvY3ooYzliJfjgavliJ3mnJ/ljJZcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NCA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xuICAgICAgICAgICAgdGhpcy5fbXZwTWF0cml4NHg0LmxvYWRJZGVudGl0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+aPj+eUu+OBruWun+ijhVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGRvRHJhd01vZGVsKCk6IHZvaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaPj+eUu+OCquODluOCuOOCp+OCr+ODiO+8iOOCouODvOODiOODoeODg+OCt+ODpe+8ieOCkuaPj+eUu+OBmeOCi1xuICAgICAgICAgKiDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjgajjg4bjgq/jgrnjg4Hjg6Pnlarlj7fjgpLjgrvjg4Pjg4jjgafmuKHjgZnjgIJcbiAgICAgICAgICogQHBhcmFtIHRleHR1cmVObyDmj4/nlLvjgZnjgovjg4bjgq/jgrnjg4Hjg6Pnlarlj7dcbiAgICAgICAgICogQHBhcmFtIGluZGV4Q291bnQg5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhDb3VudCDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjga7poILngrnmlbBcbiAgICAgICAgICogQHBhcmFtIGluZGV4QXJyYXkg44Od44Oq44K044Oz44Oh44OD44K344Ol6aCC54K544Gu44Kk44Oz44OH44OD44Kv44K56YWN5YiXXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhBcnJheSDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjga7poILngrnphY3liJdcbiAgICAgICAgICogQHBhcmFtIHV2QXJyYXkgdXbphY3liJdcbiAgICAgICAgICogQHBhcmFtIG9wYWNpdHkg5LiN6YCP5piO5bqmXG4gICAgICAgICAqIEBwYXJhbSBjb2xvckJsZW5kTW9kZSDjgqvjg6njg7zjg5bjg6zjg7Pjg4fjgqPjg7PjgrDjga7jgr/jgqTjg5dcbiAgICAgICAgICogQHBhcmFtIGludmVydGVkTWFzayDjg57jgrnjgq/kvb/nlKjmmYLjga7jg57jgrnjgq/jga7lj43ou6Lkvb/nlKhcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3TWVzaCh0ZXh0dXJlTm86IG51bWJlciwgaW5kZXhDb3VudDogbnVtYmVyLCB2ZXJ0ZXhDb3VudDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhBcnJheTogVWludDE2QXJyYXksIHZlcnRleEFycmF5OiBGbG9hdDMyQXJyYXksIHV2QXJyYXk6IEZsb2F0MzJBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IG51bWJlciwgY29sb3JCbGVuZE1vZGU6IEN1YmlzbUJsZW5kTW9kZSwgaW52ZXJ0ZWRNYXNrOiBib29sZWFuKTogdm9pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Op44GM5L+d5oyB44GZ44KL6Z2Z55qE44Gq44Oq44K944O844K544KS6ZaL5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIHN0YXRpY1JlbGVhc2U6IEZ1bmN0aW9uO1xuXG4gICAgICAgIHByb3RlY3RlZCBfbXZwTWF0cml4NHg0OiBDdWJpc21NYXRyaXg0NDsgICAgICAgICAgICAgICAgICAvLyBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXG4gICAgICAgIHByb3RlY3RlZCBfbW9kZWxDb2xvcjogQ3ViaXNtVGV4dHVyZUNvbG9yOyAgICAgICAgICAgICAgICAvLyDjg6Ljg4fjg6voh6rkvZPjga7jgqvjg6njg7zvvIhSR0JB77yJXG4gICAgICAgIHByb3RlY3RlZCBfaXNDdWxsaW5nOiBib29sZWFuOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgqvjg6rjg7PjgrDjgYzmnInlirnjgarjgol0cnVlXG4gICAgICAgIHByb3RlY3RlZCBfaXNQcmVtdWx0aXBsaWVkQWxwaGE6IGJvb2xlYW47ICAgICAgICAgICAgICAgICAvLyDkuZfnrpfmuIjjgb/OseOBquOCiXRydWVcbiAgICAgICAgcHJvdGVjdGVkIF9hbmlzb3J0b3B5OiBhbnk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODhuOCr+OCueODgeODo+OBrueVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv1xuICAgICAgICBwcm90ZWN0ZWQgX21vZGVsOiBDdWJpc21Nb2RlbDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Os44Oz44OA44Oq44Oz44Kw5a++6LGh44Gu44Oi44OH44OrXG4gICAgfVxuXG4gICAgZXhwb3J0IGVudW0gQ3ViaXNtQmxlbmRNb2RlXG4gICAge1xuICAgICAgICBDdWJpc21CbGVuZE1vZGVfTm9ybWFsID0gMCwgICAgICAgICAvLyDpgJrluLhcbiAgICAgICAgQ3ViaXNtQmxlbmRNb2RlX0FkZGl0aXZlID0gMSwgICAgICAgLy8g5Yqg566XXG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9NdWx0aXBsaWNhdGl2ZSA9IDIsIC8vIOS5l+eul1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7oibLjgpJSR0JB44Gn5omx44GG44Gf44KB44Gu44Kv44Op44K5XG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVRleHR1cmVDb2xvclxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLlIgPSAxLjA7XG4gICAgICAgICAgICB0aGlzLkcgPSAxLjA7XG4gICAgICAgICAgICB0aGlzLkIgPSAxLjA7XG4gICAgICAgICAgICB0aGlzLkEgPSAxLjA7XG4gICAgICAgIH1cblxuICAgICAgICBSOiBudW1iZXI7ICAvLyDotaTjg4Hjg6Pjg7Pjg43jg6tcbiAgICAgICAgRzogbnVtYmVyOyAgLy8g57eR44OB44Oj44Oz44ON44OrXG4gICAgICAgIEI6IG51bWJlcjsgIC8vIOmdkuODgeODo+ODs+ODjeODq1xuICAgICAgICBBOiBudW1iZXI7ICAvLyDOseODgeODo+ODs+ODjeODq1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IEN1YmlzbUxvZ0RlYnVnIH0gZnJvbSBcIi4uL3V0aWxzL2N1YmlzbWRlYnVnXCI7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICogS2V5LVZhbHVl44Gu44Oa44Ki44KS5a6a576p44GZ44KL44Kv44Op44K5XG4gICAgICogY3NtTWFw44Kv44Op44K544Gu5YaF6YOo44OH44O844K/44Gn5L2/55So44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbVBhaXI8X0tleVQsIF9WYWxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0ga2V5IEtleeOBqOOBl+OBpuOCu+ODg+ODiOOBmeOCi+WApFxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWXjgajjgZfjgabjgrvjg4Pjg4jjgZnjgovlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihrZXk/OiBfS2V5VCwgdmFsdWU/OiBfVmFsVClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5maXJzdCA9IChrZXkgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgIDoga2V5O1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZCA9ICh2YWx1ZSA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgOiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBmaXJzdDogX0tleVQ7ICAgLy8ga2V544Go44GX44Gm55So44GE44KL5aSJ5pWwXG4gICAgICAgIHB1YmxpYyBzZWNvbmQ6IF9WYWxUOyAgLy8gdmFsdWXjgajjgZfjgabnlKjjgYTjgovlpInmlbBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg57jg4Pjg5flnotcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgY3NtTWFwPF9LZXlULCBfVmFsVD5cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICogQHBhcmFtIHNpemUg5Yid5pyf5YyW5pmC54K544Gn56K65L+d44GZ44KL44K144Kk44K6XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZT86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoc2l6ZSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoc2l6ZSA8IDEpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHVtbXlWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kdW1teVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCreODvOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0ga2V5IOaWsOOBn+OBq+i/veWKoOOBmeOCi+OCreODvFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFwcGVuZEtleShrZXk6IF9LZXlUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyDmlrDjgZfjgY9LZXkvVmFsdWXjga7jg5rjgqLjgpLkvZzjgotcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX3NpemUgKyAxLCBmYWxzZSk7IC8vIDHjgaTku6XkuIrlhaXjgovpmpnplpPjgpLkvZzjgotcbiAgICAgICAgICAgIC8vIOaWsOOBl+OBhGtleS92YWx1ZeOBruOCpOODs+ODh+ODg+OCr+OCueOBr19zaXplXG5cbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlc1t0aGlzLl9zaXplXSA9IG5ldyBjc21QYWlyPF9LZXlULCBfVmFsVD4oa2V5KTtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBba2V5XeOBruOCquODvOODkOODvOODreODvOODiShnZXQpXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5re75a2X44GL44KJ54m55a6a44GV44KM44KLVmFsdWXlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZShrZXk6IF9LZXlUKTogX1ZhbFRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGZvdW5kID0gLTE7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXNbaV0uZmlyc3QgPT0ga2V5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGZvdW5kID49IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleVZhbHVlc1tmb3VuZF0uc2Vjb25kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kS2V5KGtleSk7IC8vIOaWsOimj+OCreODvOOCkui/veWKoFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlWYWx1ZXNbdGhpcy5fc2l6ZSAtIDFdLnNlY29uZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBba2V5XeOBruOCquODvOODkOODvOODreODvOODiShzZXQpXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5re75a2X44GL44KJ54m55a6a44GV44KM44KLVmFsdWXlgKRcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOS7o+WFpeOBmeOCi1ZhbHVl5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0VmFsdWUoa2V5OiBfS2V5VCwgdmFsdWU6IF9WYWxUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZm91bmQgPSAtMTtcblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2tleVZhbHVlc1tpXS5maXJzdCA9PSBrZXkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoZm91bmQgPj0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXNbZm91bmRdLnNlY29uZCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kS2V5KGtleSk7IC8vIOaWsOimj+OCreODvOOCkui/veWKoFxuICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlc1t0aGlzLl9zaXplIC0gMV0uc2Vjb25kID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gn5rih44GX44GfS2V544KS5oyB44Gk6KaB57Sg44GM5a2Y5Zyo44GZ44KL44GLXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5a2Y5Zyo44KS56K66KqN44GZ44KLa2V5XG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlvJXmlbDjgafmuKHjgZfjgZ9rZXnjgpLmjIHjgaTopoHntKDjgYzlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDlvJXmlbDjgafmuKHjgZfjgZ9rZXnjgpLmjIHjgaTopoHntKDjgYzlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0V4aXN0KGtleTogX0tleVQpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXNbaV0uZmlyc3QgPT0ga2V5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGtleVZhbHVl44Gu44Od44Kk44Oz44K/44KS5YWo44Gm6Kej5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruOCteOCpOOCuuOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIOOCs+ODs+ODhuODiuOBruOCteOCpOOCulxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruOCreODo+ODkeOCt+ODhuOCo+OCkueiuuS/neOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gbmV3U2l6ZSDmlrDjgZ/jgarjgq3jg6Pjg5Hjgrfjg4bjgqPjgILlvJXmlbDjga7lgKTjgYznj77lnKjjga7jgrXjgqTjgrrmnKrmuoDjga7loLTlkIjjga/kvZXjgoLjgZfjgarjgYTjgIJcbiAgICAgICAgICogQHBhcmFtIGZpdFRvU2l6ZSB0cnVl44Gq44KJ5oyH5a6a44GX44Gf44K144Kk44K644Gr5ZCI44KP44Gb44KL44CCZmFsc2XjgarjgonjgrXjgqTjgrrjgpIy5YCN56K65L+d44GX44Gm44GK44GP44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlcGFyZUNhcGFjaXR5KG5ld1NpemU6IG51bWJlciwgZml0VG9TaXplOiBib29sZWFuKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZihuZXdTaXplID4gdGhpcy5fa2V5VmFsdWVzLmxlbmd0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZighZml0VG9TaXplICYmIG5ld1NpemUgPCBjc21NYXAuRGVmYXVsdFNpemUpIG5ld1NpemUgPSBjc21NYXAuRGVmYXVsdFNpemU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcy5sZW5ndGggPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZighZml0VG9TaXplICYmIG5ld1NpemUgPCB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoICogMikgbmV3U2l6ZSA9IHRoaXMuX2tleVZhbHVlcy5sZW5ndGggKiAyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWI6aCt6KaB57Sg44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYmVnaW4oKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+ID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcywgMCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBrue1guerr+imgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVuZCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4gPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLCB0aGlzLl9zaXplKTsgLy8g57WC5LqGXG4gICAgICAgICAgICByZXR1cm4gaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBi+OCieimgee0oOOCkuWJiumZpOOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaXRlIOWJiumZpOOBmeOCi+imgee0oFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVyYXNlKGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPik6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZTsgLy8g5YmK6Zmk56+E5Zuy5aSWXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWJiumZpFxuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAtLXRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGxldCBpdGUyOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+ID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcywgaW5kZXgpOyAvLyDntYLkuoZcbiAgICAgICAgICAgIHJldHVybiBpdGUyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWApOOCkjMy44OT44OD44OI56ym5Y+35LuY44GN5pW05pWw5Z6L44Gn44OA44Oz44OX44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZHVtcEFzSW50KClcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dEZWJ1ZyhcInswfSAsXCIsIHRoaXMuX2tleVZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nRGVidWcoXCJcXG5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERlZmF1bHRTaXplID0gMTA7IC8vIOOCs+ODs+ODhuODiuOBruWIneacn+WMluOBruODh+ODleOCqeODq+ODiOOCteOCpOOCulxuICAgICAgICBwdWJsaWMgX2tleVZhbHVlczogY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+W107Ly8ga2V5LXZhbHVl44Oa44Ki44Gu6YWN5YiXXG4gICAgICAgIHB1YmxpYyBfZHVtbXlWYWx1ZTogX1ZhbFQ7ICAvLyDnqbrjga7lgKTjgpLov5TjgZnngrrjga7jg4Djg5/jg7xcbiAgICAgICAgcHVibGljIF9zaXplOiBudW1iZXI7ICAgICAgIC8vIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogY3NtTWFwPFQ+44Gu44Kk44OG44Os44O844K/XG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0cnVjdG9yKHY/OiBjc21NYXA8X0tleVQsIF9WYWxUPiwgaWR4PzogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tYXAgPSAodiAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyB2XG4gICAgICAgICAgICAgICAgOiBuZXcgY3NtTWFwPF9LZXlULCBfVmFsVD4oKTtcblxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSAoaWR4ICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IGlkeFxuICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiA95ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0KGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPik6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgdGhpcy5fbWFwID0gaXRlLl9tYXA7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliY3nva7jgY0rK+a8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZUluY3JlbWVudCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgICsrdGhpcy5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliY3nva7jgY0tLea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZURlY3JlbWVudCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIC0tdGhpcy5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvoznva7jgY0rK+a8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGluY3JlbWVudCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLl9tYXAsIHRoaXMuX2luZGV4KyspOyAgLy8g5Y+k44GE5YCk44KS5L+d5a2YXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBpdGVvbGQuX21hcDtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW+jOe9ruOBjS0t5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZGVjcmVtZW50KCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMuX21hcCwgdGhpcy5faW5kZXgpOyAvLyDlj6TjgYTlgKTjgpLkv53lrZhcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IGl0ZW9sZC5fbWFwO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogKua8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHB0cigpOiBjc21QYWlyPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcC5fa2V5VmFsdWVzW3RoaXMuX2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhPea8lOeul1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG5vdEVxdWFsKGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9pbmRleCAhPSBpdGUuX2luZGV4KSB8fCAodGhpcy5fbWFwICE9IGl0ZS5fbWFwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9pbmRleDogbnVtYmVyOyAgICAgICAgICAgICAvLyDjgrPjg7Pjg4bjg4rjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgX21hcDogY3NtTWFwPF9LZXlULCBfVmFsVD47IC8vIOOCs+ODs+ODhuODilxuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog5paH5a2X5YiX44Kv44Op44K544CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbVN0cmluZ1xuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OCkuW+jOaWueOBq+i/veWKoOOBmeOCi1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gYyDov73liqDjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiDmm7TmlrDjgZXjgozjgZ/mloflrZfliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhcHBlbmQoYzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIpOiBjc21TdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zICs9IChsZW5ndGggIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IGMuc3Vic3RyKDAsIGxlbmd0aClcbiAgICAgICAgICAgICAgICA6IGM7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+OCteOCpOOCuuOCkuaLoeW8teOBl+OBpuaWh+Wtl+OCkuWfi+OCgeOCi1xuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoICAgIOaLoeW8teOBmeOCi+aWh+Wtl+aVsFxuICAgICAgICAgKiBAcGFyYW0gdiAgICAgICAgIOWfi+OCgeOCi+aWh+Wtl1xuICAgICAgICAgKiBAcmV0dXJuIOabtOaWsOOBleOCjOOBn+aWh+Wtl+WIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGV4cGFuc2lvbihsZW5ndGg6IG51bWJlciwgdjogc3RyaW5nKTogY3NtU3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IGNzbVN0cmluZyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBrumVt+OBleOCkuODkOOCpOODiOaVsOOBp+WPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEJ5dGVzKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucykgLnJlcGxhY2UoLyUuLi9nLCBcInhcIikubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBrumVt+OBleOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldExlbmd0aCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX5q+U6LyD44CAPFxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlsI/jgZXjgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlpKfjgY3jgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0xlc3MoczogY3NtU3RyaW5nKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zIDwgcy5zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8gyA+XG4gICAgICAgICAqIEBwYXJhbSBzIOavlOi8g+OBmeOCi+aWh+Wtl+WIl1xuICAgICAgICAgKiBAcmV0dXJuIHRydWU6ICAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWkp+OBjeOBhFxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWwj+OBleOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzR3JlYXQoczogY3NtU3RyaW5nKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zID4gcy5zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8gyA9PVxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgajnrYnjgZfjgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgajnlbDjgarjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKHM6IHN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA9PSBzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBjOepuuOBi+OBqeOBhuOBi1xuICAgICAgICAgKiBAcmV0dXJuIHRydWU6IOepuuOBruaWh+Wtl+WIl1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiDlgKTjgYzoqK3lrprjgZXjgozjgabjgYTjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucy5sZW5ndGggPT0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucyA9IHM7XG4gICAgICAgIH1cblxuICAgICAgICBzOiBzdHJpbmc7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDjg5njgq/jgr/jg7zlnovvvIjlj6/lpInphY3liJflnovvvIlcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgY3NtVmVjdG9yPFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqIEBwYXJhbSBpbmlpdGFsQ2FwYWNpdHkg5Yid5pyf5YyW5b6M44Gu44Kt44Oj44OR44K344OG44Kj44CC44OH44O844K/44K144Kk44K644GvX2NhcGFjaXR5ICogc2l6ZW9mKFQpXG4gICAgICAgICAqIEBwYXJhbSB6ZXJvQ2xlYXIgdHJ1ZeOBquOCieWIneacn+WMluaZguOBq+eiuuS/neOBl+OBn+mgmOWfn+OCkjDjgafln4vjgoHjgotcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRpYWxDYXBhY2l0eTogbnVtYmVyID0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoaW5pdGlhbENhcGFjaXR5IDwgMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHIgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KGluaXRpYWxDYXBhY2l0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBpbml0aWFsQ2FwYWNpdHk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kk44Oz44OH44OD44Kv44K544Gn5oyH5a6a44GX44Gf6KaB57Sg44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYXQoaW5kZXg6IG51bWJlcik6IFRcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3B0cltpbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS44K744OD44OIXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDopoHntKDjgpLjgrvjg4Pjg4jjgZnjgovjgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOOCu+ODg+ODiOOBmeOCi+imgee0oFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldChpbmRleDogbnVtYmVyLCB2YWx1ZTogVCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fcHRyW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldChvZmZzZXQ6IG51bWJlciA9IDApOiBUW11cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJldDogVFtdID0gbmV3IEFycmF5PFQ+KCk7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2godGhpcy5fcHRyW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogcHVzaEJhY2vlh6bnkIbjgIHjgrPjg7Pjg4bjg4rjgavmlrDjgZ/jgaropoHntKDjgpLov73liqDjgZnjgotcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIFB1c2hCYWNr5Yem55CG44Gn6L+95Yqg44GZ44KL5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHVzaEJhY2sodmFsdWU6IFQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX3NpemUgPj0gdGhpcy5fY2FwYWNpdHkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkodGhpcy5fY2FwYWNpdHkgPT0gMCA/IGNzbVZlY3Rvci5zX2RlZmF1bHRTaXplIDogdGhpcy5fY2FwYWNpdHkgKiAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcHRyW3RoaXMuX3NpemUrK10gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhajopoHntKDjgpLop6PmlL7jgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3B0ci5sZW5ndGggPSAwO1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu6KaB57Sg5pWw44KS6L+U44GZXG4gICAgICAgICAqIEByZXR1cm4g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWo6KaB57Sg44Gr5a++44GX44Gm5Luj5YWl5Yem55CG44KS6KGM44GGXG4gICAgICAgICAqIEBwYXJhbSBuZXdTaXplIOS7o+WFpeWHpueQhuW+jOOBruOCteOCpOOCulxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg6KaB57Sg44Gr5Luj5YWl44GZ44KL5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYXNzaWduKG5ld1NpemU6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjdXJTaXplID0gdGhpcy5fc2l6ZTtcblxuICAgICAgICAgICAgaWYoY3VyU2l6ZSA8IG5ld1NpemUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZSk7ICAvLyBjYXBhY2l0eeabtOaWsFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuZXdTaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSBuZXdTaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCteOCpOOCuuWkieabtFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlc2l6ZShuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBUID0gbnVsbCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKG5ld1NpemUsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrXjgqTjgrrlpInmm7RcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB1cGRhdGVTaXplKG5ld1NpemU6IG51bWJlciwgdmFsdWU6IGFueSA9IG51bGwsIGNhbGxQbGFjZW1lbnROZXc6IGJvb2xlYW4gPSB0cnVlKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY3VyU2l6ZTogbnVtYmVyID0gdGhpcy5fc2l6ZTtcblxuICAgICAgICAgICAgaWYoY3VyU2l6ZSA8IG5ld1NpemUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZSk7ICAvLyBjYXBhY2l0eeabtOaWsFxuXG4gICAgICAgICAgICAgICAgaWYoY2FsbFBsYWNlbWVudE5ldylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gdGhpcy5fc2l6ZTsgaSA8IG5ld1NpemU7IGkrKylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpICAvLyBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5ldyB2YWx1ZSgpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIC8vIOODl+ODquODn+ODhuOCo+ODluWei+OBquOBruOBp+WApOa4oeOBl1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gdGhpcy5fc2l6ZTsgaSA8IG5ld1NpemU7IGkrKylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gbmV3U2l6ZSA8PSB0aGlzLl9zaXplXG4gICAgICAgICAgICAgICAgLy8tLS1cbiAgICAgICAgICAgICAgICBsZXQgc3ViID0gdGhpcy5fc2l6ZSAtIG5ld1NpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZSh0aGlzLl9zaXplIC0gc3ViLCBzdWIpOyAgICAvLyDkuI3opoHjgarjga7jgafnoLTmo4TjgZnjgotcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSBuZXdTaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBq+OCs+ODs+ODhuODiuimgee0oOOCkuaMv+WFpeOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gcG9zaXRpb24g5oy/5YWl44GZ44KL5L2N572uXG4gICAgICAgICAqIEBwYXJhbSBiZWdpbuOAgOaMv+WFpeOBmeOCi+OCs+ODs+ODhuODiuOBrumWi+Wni+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gZW5kIOaMv+WFpeOBmeOCi+OCs+ODs+ODhuODiuOBrue1guerr+S9jee9rlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGluc2VydChwb3NpdGlvbjogaXRlcmF0b3I8VD4sIGJlZ2luOiBpdGVyYXRvcjxUPiwgZW5kOiBpdGVyYXRvcjxUPik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGRzdFNpOiBudW1iZXIgPSBwb3NpdGlvbi5faW5kZXg7XG4gICAgICAgICAgICBsZXQgc3JjU2k6IG51bWJlciA9IGJlZ2luLl9pbmRleDtcbiAgICAgICAgICAgIGxldCBzcmNFaTogbnVtYmVyID0gZW5kLl9pbmRleDtcblxuICAgICAgICAgICAgbGV0IGFkZENvdW50OiBudW1iZXIgPSBzcmNFaSAtIHNyY1NpO1xuXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eSh0aGlzLl9zaXplICsgYWRkQ291bnQpO1xuXG4gICAgICAgICAgICAvLyDmjL/lhaXnlKjjga7ml6LlrZjjg4fjg7zjgr/jgpLjgrfjg5Xjg4jjgZfjgabpmpnplpPjgpLkvZzjgotcbiAgICAgICAgICAgIGxldCBhZGRTaXplID0gdGhpcy5fc2l6ZSAtIGRzdFNpO1xuICAgICAgICAgICAgaWYoYWRkU2l6ZSA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgYWRkU2l6ZTsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShkc3RTaSArIGksIDAsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSBzcmNTaTsgaSA8IHNyY0VpOyBpKyssIGRzdFNpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyW2RzdFNpXSA9IGJlZ2luLl92ZWN0b3IuX3B0cltpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHRoaXMuX3NpemUgKyBhZGRDb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonjgqTjg7Pjg4fjg4Pjgq/jgrnjgafmjIflrprjgZfjgZ/opoHntKDjgpLliYrpmaTjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5YmK6Zmk5a6f6KGMXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5YmK6Zmk56+E5Zuy5aSWXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVtb3ZlKGluZGV4OiBudW1iZXIpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9zaXplIDw9IGluZGV4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgICAvLyDliYrpmaTnr4Tlm7LlpJZcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAtLXRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBi+OCieimgee0oOOCkuWJiumZpOOBl+OBpuS7luOBruimgee0oOOCkuOCt+ODleODiOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaXRlIOWJiumZpOOBmeOCi+imgee0oFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVyYXNlKGl0ZTogaXRlcmF0b3I8VD4pOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IGl0ZS5faW5kZXg7XG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlOyAvLyDliYrpmaTnr4Tlm7LlpJZcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5YmK6ZmkXG4gICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIC0tdGhpcy5fc2l6ZTtcblxuICAgICAgICAgICAgbGV0IGl0ZTI6IGl0ZXJhdG9yPFQ+ID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMsIGluZGV4KTsgICAvLyDntYLkuoZcbiAgICAgICAgICAgIHJldHVybiBpdGUyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruOCreODo+ODkeOCt+ODhuOCo+OCkueiuuS/neOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gbmV3U2l6ZSDmlrDjgZ/jgarjgq3jg6Pjg5Hjgrfjg4bjgqPjgILlvJXmlbDjga7lgKTjgYznj77lnKjjga7jgrXjgqTjgrrmnKrmuoDjga7loLTlkIjjga/kvZXjgoLjgZfjgarjgYQuXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlcGFyZUNhcGFjaXR5KG5ld1NpemU6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYobmV3U2l6ZSA+IHRoaXMuX2NhcGFjaXR5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2NhcGFjaXR5ID09IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHIgPSBuZXcgQXJyYXkobmV3U2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyLmxlbmd0aCA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWI6aCt6KaB57Sg44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYmVnaW4oKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8VD4gPSAodGhpcy5fc2l6ZSA9PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZW5kKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgaXRlcmF0b3I8VD4odGhpcywgMCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBrue1guerr+imgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVuZCgpOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCB0aGlzLl9zaXplKTtcbiAgICAgICAgICAgIHJldHVybiBpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZ2V0T2Zmc2V0KG9mZnNldDogbnVtYmVyKTogY3NtVmVjdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBuZXdWZWN0b3IgPSBuZXcgY3NtVmVjdG9yPFQ+KCk7XG4gICAgICAgICAgICBuZXdWZWN0b3IuX3B0ciA9IHRoaXMuZ2V0KG9mZnNldCk7XG4gICAgICAgICAgICBuZXdWZWN0b3IuX3NpemUgPSB0aGlzLmdldChvZmZzZXQpLmxlbmd0aDtcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fY2FwYWNpdHkgPSB0aGlzLmdldChvZmZzZXQpLmxlbmd0aDtcblxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZlY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIF9wdHI6IFRbXTsgICAgLy8g44Kz44Oz44OG44OK44Gu5YWI6aCt44Ki44OJ44Os44K5XG4gICAgICAgIF9zaXplOiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxuICAgICAgICBfY2FwYWNpdHk6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu44Kt44Oj44OR44K344OG44KjXG5cbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IHNfZGVmYXVsdFNpemUgPSAxMDsgLy8g44Kz44Oz44OG44OK5Yid5pyf5YyW44Gu44OH44OV44Kp44Or44OI44K144Kk44K6XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIGl0ZXJhdG9yPFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Iodj86IGNzbVZlY3RvcjxUPiwgaW5kZXg/OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9ICh2ICE9IHVuZGVmaW5lZCkgPyB2IDogbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gKGluZGV4ICE9IHVuZGVmaW5lZCkgPyBpbmRleCA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Luj5YWlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0KGl0ZTogaXRlcmF0b3I8VD4pOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZS5faW5kZXg7XG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGUuX3ZlY3RvcjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWJjee9ruOBjSsr5ryU566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlSW5jcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgICsrdGhpcy5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliY3nva7jgY0tLea8lOeul1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZURlY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICAtLXRoaXMuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b6M572u44GNKyvmvJTnrpflrZBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbmNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLl92ZWN0b3IsIHRoaXMuX2luZGV4KyspO1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlb2xkLl92ZWN0b3I7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvoznva7jgY0tLea8lOeul+WtkFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGRlY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMuX3ZlY3RvciwgdGhpcy5faW5kZXgtLSk7ICAvLyDlj6TjgYTlgKTjgpLkv53lrZhcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZW9sZC5fdmVjdG9yO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogcHRyXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHRyKCk6IFRcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZlY3Rvci5fcHRyW3RoaXMuX2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiA95ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3Vic3RpdHV0aW9uKGl0ZTogaXRlcmF0b3I8VD4pOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZS5faW5kZXg7XG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGUuX3ZlY3RvcjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICE95ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgbm90RXF1YWwoaXRlOiBpdGVyYXRvcjxUPik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9pbmRleCAhPSBpdGUuX2luZGV4KSB8fCAodGhpcy5fdmVjdG9yICE9IGl0ZS5fdmVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9pbmRleDogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgX3ZlY3RvcjogY3NtVmVjdG9yPFQ+OyAgLy8g44Kz44Oz44OG44OKXG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtZnJhbWV3b3JrLCBMb2dMZXZlbH0gZnJvbSBcIi4uL2xpdmUyZGN1YmlzbWZyYW1ld29ya1wiO1xuaW1wb3J0IHtDU01fTE9HX0xFVkVMLCBDU01fTE9HX0xFVkVMX1ZFUkJPU0UsIENTTV9MT0dfTEVWRUxfREVCVUcsIENTTV9MT0dfTEVWRUxfSU5GTywgQ1NNX0xPR19MRVZFTF9XQVJOSU5HLCBDU01fTE9HX0xFVkVMX0VSUk9SfSBmcm9tIFwiLi4vY3ViaXNtZnJhbWV3b3JrY29uZmlnXCI7XG5cblxuZXhwb3J0IGNvbnN0IEN1YmlzbUxvZ1ByaW50ID0gKGxldmVsOiBMb2dMZXZlbCwgZm10OiBzdHJpbmcsIGFyZ3M6IGFueVtdKSA9Plxue1xuICAgIExpdmUyREN1YmlzbUZyYW1ld29yay5DdWJpc21EZWJ1Zy5wcmludChsZXZlbCwgXCJbQ1NNXVwiICsgZm10LCBhcmdzKTtcbn1cblxuZXhwb3J0IGNvbnN0IEN1YmlzbUxvZ1ByaW50SW4gPSAobGV2ZWw6IExvZ0xldmVsLCBmbXQ6IHN0cmluZywgYXJnczogYW55W10pID0+XG57XG4gICAgQ3ViaXNtTG9nUHJpbnQobGV2ZWwsIGZtdCArIFwiXFxuXCIsIGFyZ3MpO1xufVxuXG5leHBvcnQgbGV0IENTTV9BU1NFUlQgPSAoZXhwcjogYW55KSA9Plxue1xuICAgIGNvbnNvbGUuYXNzZXJ0KGV4cHIpO1xufTtcblxuXG5leHBvcnQgbGV0IEN1YmlzbUxvZ1ZlcmJvc2UgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XG5leHBvcnQgbGV0IEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcblxuaWYoQ1NNX0xPR19MRVZFTCA8PSBDU01fTE9HX0xFVkVMX1ZFUkJPU0UpXG57XG4gICAgQ3ViaXNtTG9nVmVyYm9zZSA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9WZXJib3NlLCBcIltWXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRGVidWcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRGVidWcsIFwiW0RdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0luZm8sIFwiW0ldXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX0RFQlVHKVxue1xuICAgIEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0RlYnVnLCBcIltEXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9JbmZvLCBcIltJXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG59XG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9JTkZPKVxue1xuICAgIEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfSW5mbywgXCJbSV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xufVxuZWxzZSBpZihDU01fTE9HX0xFVkVMID09IENTTV9MT0dfTEVWRUxfV0FSTklORylcbntcbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX0VSUk9SKVxue1xuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xufVxuXG4vLy0tLS0tLS0tLS0tLSBMSVZFMkQgTkFNRVNQQUNFIC0tLS0tLS0tLS0tLVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcblxuICAgIC8qKlxuICAgICAqIOODh+ODkOODg+OCsOeUqOOBruODpuODvOODhuOCo+ODquODhuOCo+OCr+ODqeOCueOAglxuICAgICAqIOODreOCsOOBruWHuuWKm+OAgeODkOOCpOODiOOBruODgOODs+ODl+OBquOBqVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21EZWJ1Z1xuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODreOCsOOCkuWHuuWKm+OBmeOCi+OAguesrOS4gOW8leaVsOOBq+ODreOCsOODrOODmeODq+OCkuioreWumuOBmeOCi+OAglxuICAgICAgICAgKiBDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp5pmC44Gr44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GE44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBsb2dMZXZlbCDjg63jgrDjg6zjg5njg6vjga7oqK3lrppcbiAgICAgICAgICogQHBhcmFtIGZvcm1hdCDmm7jlvI/ku5jjgY3mloflrZfliJdcbiAgICAgICAgICogQHBhcmFtIGFyZ3Mg5Y+v5aSJ6ZW35byV5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIHByaW50KGxvZ0xldmVsOiBMb2dMZXZlbCwgZm9ybWF0OiBzdHJpbmcsIGFyZ3M/OiBhbnlbXSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgLy8g44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GEXG4gICAgICAgICAgICBpZihsb2dMZXZlbCA8IGN1YmlzbWZyYW1ld29yay5DdWJpc21GcmFtZXdvcmsuZ2V0TG9nZ2luZ0xldmVsKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsb2dQcmludDogTGl2ZTJEQ3ViaXNtQ29yZS5jc21Mb2dGdW5jdGlvbiA9IGN1YmlzbWZyYW1ld29yay5DdWJpc21GcmFtZXdvcmsuY29yZUxvZ0Z1bmN0aW9uO1xuXG4gICAgICAgICAgICBpZiAoIWxvZ1ByaW50KVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgbGV0IGJ1ZmZlcjogc3RyaW5nID1cbiAgICAgICAgICAgICAgICBmb3JtYXQucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgL1xceyhcXGQrKVxcfS9nLFxuICAgICAgICAgICAgICAgICAgICAobSwgaykgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3Nba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgbG9nUHJpbnQoYnVmZmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjg7zjgr/jgYvjgonmjIflrprjgZfjgZ/plbfjgZXjgaDjgZHjg4Djg7Pjg5flh7rlipvjgZnjgovjgIJcbiAgICAgICAgICogQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKeaZguOBq+OCquODl+OCt+ODp+ODs+OBp+ioreWumuOBleOCjOOBn+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuS4i+WbnuOCi+WgtOWQiOOBr+ODreOCsOOBq+WHuuOBleOBquOBhOOAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbG9nTGV2ZWwg44Ot44Kw44Os44OZ44Or44Gu6Kit5a6aXG4gICAgICAgICAqIEBwYXJhbSBkYXRhIOODgOODs+ODl+OBmeOCi+ODh+ODvOOCv1xuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoIOODgOODs+ODl+OBmeOCi+mVt+OBlVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBkdW1wQnl0ZXMobG9nTGV2ZWw6IExvZ0xldmVsLCBkYXRhOiBVaW50OEFycmF5LCBsZW5ndGg6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChpICUgMTYgPT0gMCAmJiBpID4gMCkgdGhpcy5wcmludChsb2dMZXZlbCwgXCJcXG5cIik7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSAlIDggPT0gMCAmJiBpID4gMCkgdGhpcy5wcmludChsb2dMZXZlbCwgXCIgIFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50KGxvZ0xldmVsLCBcInswfSBcIiwgWyhkYXRhW2ldICYgMHhGRildKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmludChsb2dMZXZlbCwgXCJcXG5cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogcHJpdmF0ZSDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8tLS0tLS0tLS0tLS0gTElWRTJEIE5BTUVTUEFDRSAtLS0tLS0tLS0tLS1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21tYXB9IGZyb20gXCIuLi90eXBlL2NzbW1hcFwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tIFwiLi4vdHlwZS9jc212ZWN0b3JcIjtcbmltcG9ydCB7Q3ViaXNtTG9nSW5mb30gZnJvbSBcIi4vY3ViaXNtZGVidWdcIjtcbmltcG9ydCB7c3RydG9kfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XG5pbXBvcnQgY3NtVmVjdG9yID0gY3NtdmVjdG9yLmNzbVZlY3RvcjtcbmltcG9ydCBjc21WZWN0b3JfaXRlcmF0b3IgPSBjc212ZWN0b3IuaXRlcmF0b3I7XG5pbXBvcnQgY3NtTWFwID0gY3NtbWFwLmNzbU1hcDtcbmltcG9ydCBjc21NYXBfaXRlcmF0b3IgPSBjc21tYXAuaXRlcmF0b3I7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvLyBTdGF0aWNJbml0aWFsaXplTm90Rm9yQ2xpZW50Q2FsbCgp44Gn5Yid5pyf5YyW44GZ44KLXG4gICAgY29uc3QgQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSDogc3RyaW5nID0gXCJFcnJvcjogdHlwZSBtaXNtYXRjaFwiO1xuICAgIGNvbnN0IENTTV9KU09OX0VSUk9SX0lOREVYX09GX0JPVU5EUzogc3RyaW5nID0gXCJFcnJvcjogaW5kZXggb3V0IG9mIGJvdW5kc1wiO1xuXG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Ko44Os44Oh44Oz44OI44Gu6KaB57Sg44Gu5Z+65bqV44Kv44Op44K544CCXG4gICAgICovXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhbHVlXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJflnovjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFN0cmluZyhkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIGluZGVudD86IHN0cmluZyk6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX5Z6L44Gn6L+U44GZKHN0cmluZylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRSYXdTdHJpbmcoZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBpbmRlbnQ/OiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZSwgaW5kZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRvSW50KGRlZmF1bHRWYWx1ZTogbnVtYmVyID0gMCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9GbG9hdChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLnnJ/lgb3lgKTjgafov5TjgZkoYm9vbGVhbilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0Jvb2xlYW4oZGVmYXVsdFZhbHVlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K144Kk44K644KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS6YWN5YiX44Gn6L+U44GZKFZhbHVlW10pXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0QXJyYXkoZGVmYXVsdFZhbHVlOiBWYWx1ZVtdID0gbnVsbCk6IFZhbHVlW11cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZkoYXJyYXkpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmVjdG9yKGRlZmF1bHRWYWx1ZT86IGNzbVZlY3RvcjxWYWx1ZT4pOiBjc21WZWN0b3I8VmFsdWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS44Oe44OD44OX44Gn6L+U44GZKGNzbU1hcDxjc21TdHJpbmcsIFZhbHVlPilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNYXAoZGVmYXVsdFZhbHVlPzogY3NtTWFwPHN0cmluZywgVmFsdWU+KTogY3NtTWFwPHN0cmluZywgVmFsdWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtzdHJpbmcgfCBjc21TdHJpbmddXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeVN0cmluZyhzOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg57jg4Pjg5fjga7jgq3jg7zkuIDopqfjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZlcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiDjg57jg4Pjg5fjga7jgq3jg7zjga7kuIDopqdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRLZXlzKCk6IGNzbVZlY3RvcjxzdHJpbmc+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5zX2R1bW15S2V5cztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOOCqOODqeODvOWApOOBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Vycm9yKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GMbnVsbOOBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc051bGwoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYznnJ/lgb3lgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNCb29sKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5pWw5YCk5Z6L44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRmxvYXQoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzmloflrZfliJfjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdHJpbmcoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzphY3liJfjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNBcnJheSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOODnuODg+ODl+Wei+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc01hcCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDjga7lgKTjgajnrYnjgZfjgZHjgozjgbB0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBjc21TdHJpbmcpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBudW1iZXIpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBib29sZWFuKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYW55KTpib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWXjgIHpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBq+OCqOODqeODvOWApOOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChlcnJvclN0cjogc3RyaW5nKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIEpzb25FcnJvci5lcnJvclZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWIneacn+WMlueUqOODoeOCveODg+ODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGF0aWNJbml0aWFsaXplTm90Rm9yQ2xpZW50Q2FsbCgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLnRydWVWYWx1ZSA9IG5ldyBKc29uQm9vbGVhbih0cnVlKTtcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLmZhbHNlVmFsdWUgPSBuZXcgSnNvbkJvb2xlYW4oZmFsc2UpO1xuXG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG5ldyBKc29uRXJyb3IoXCJFUlJPUlwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMubnVsbFZhbHVlID0gbmV3IEpzb25OdWxsdmFsdWUoKTtcblxuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBuZXcgY3NtVmVjdG9yPHN0cmluZz4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6rjg6rjg7zjgrnnlKjjg6Hjgr3jg4Pjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljUmVsZWFzZU5vdEZvckNsaWVudENhbGwoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBWYWx1ZS5udWxsVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBudWxsO1xuXG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBWYWx1ZS5udWxsVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIF9zdHJpbmdCdWZmZXI6IHN0cmluZzsgLy8g5paH5a2X5YiX44OQ44OD44OV44KhXG5cbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc19kdW1teUtleXM6IGNzbVZlY3RvcjxzdHJpbmc+OyAvLyDjg4Djg5/jg7zjgq3jg7xcblxuICAgICAgICBwdWJsaWMgc3RhdGljIGVycm9yVmFsdWU6IFZhbHVlOyAgIC8vIOS4gOaZgueahOOBqui/lOOCiuWApOOBqOOBl+OBpui/lOOBmeOCqOODqeODvOOAgiBDdWJpc21GcmFtZXdvcms6OkRpc3Bvc2XjgZnjgovjgb7jgafjga9kZWxldGXjgZfjgarjgYRcbiAgICAgICAgcHVibGljIHN0YXRpYyBudWxsVmFsdWU6IFZhbHVlOyAgICAvLyDkuIDmmYLnmoTjgarov5TjgorlgKTjgajjgZfjgabov5TjgZlOVUxM44CCICAgQ3ViaXNtRnJhbWV3b3JrOjpEaXNwb3Nl44GZ44KL44G+44Gn44GvZGVsZXRl44GX44Gq44GEXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNjaWnmloflrZfjga7jgb/lr77lv5zjgZfjgZ/mnIDlsI/pmZDjga7ou73ph49KU09O44OR44O844K144CCXG4gICAgICog5LuV5qeY44GvSlNPTuOBruOCteODluOCu+ODg+ODiOOBqOOBquOCi+OAglxuICAgICAqIOioreWumuODleOCoeOCpOODqyhtb2RlbDMuanNvbinjgarjganjga7jg63jg7zjg4nnlKhcbiAgICAgKlxuICAgICAqIFvmnKrlr77lv5zpoIXnm65dXG4gICAgICog44O75pel5pys6Kqe44Gq44Gp44Gu6Z2eQVNDSUnmloflrZdcbiAgICAgKiDjg7tl44Gr44KI44KL5oyH5pWw6KGo54++XG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUpzb25cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihidWZmZXI/OiBBcnJheUJ1ZmZlciwgbGVuZ3RoPzogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9saW5lQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmKGJ1ZmZlciAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZUJ5dGVzKGJ1ZmZlciwgbGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5DjgqTjg4jjg4fjg7zjgr/jgYvjgonnm7TmjqXjg63jg7zjg4njgZfjgabjg5Hjg7zjgrnjgZnjgotcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciDjg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtIHNpemUg44OQ44OD44OV44Kh44K144Kk44K6XG4gICAgICAgICAqIEByZXR1cm4gQ3ViaXNtSnNvbuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCueOAguWkseaVl+OBl+OBn+OCiU5VTExcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGJ1ZmZlcjogQXJyYXlCdWZmZXIsIHNpemU6IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGpzb24gPSBuZXcgQ3ViaXNtSnNvbigpO1xuICAgICAgICAgICAgY29uc3Qgc3VjY2VlZGVkOiBib29sZWFuID0ganNvbi5wYXJzZUJ5dGVzKGJ1ZmZlciwgc2l6ZSk7XG5cbiAgICAgICAgICAgIGlmKCFzdWNjZWVkZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtSnNvbi5kZWxldGUoanNvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844K544GX44GfSlNPTuOCquODluOCuOOCp+OCr+ODiOOBruino+aUvuWHpueQhlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgQ3ViaXNtSnNvbuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBkZWxldGUoaW5zdGFuY2U6IEN1YmlzbUpzb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu44Or44O844OI6KaB57Sg44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0Um9vdCgpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcm9vdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgVW5pY29kZeOBruODkOOCpOODiuODquOCklN0cmluZ+OBq+WkieaPm1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyIOWkieaPm+OBmeOCi+ODkOOCpOODiuODquODh+ODvOOCv1xuICAgICAgICAgKiBAcmV0dXJuIOWkieaPm+W+jOOBruaWh+Wtl+WIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFycmF5QnVmZmVyVG9TdHJpbmcoYnVmZmVyOiBBcnJheUJ1ZmZlcik6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdWludDhBcnJheTogVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgICAgICBsZXQgc3RyOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDAsIGxlbjogbnVtYmVyID0gdWludDhBcnJheS5sZW5ndGg7IGkgPCBsZW47ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gKFwiJVwiICsgdGhpcy5wYWQodWludDhBcnJheVtpXS50b1N0cmluZygxNikpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KHN0cik7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCqOODs+OCs+ODvOODieOAgeODkeODh+OCo+ODs+OCsFxuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBwYWQobjogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBuLmxlbmd0aCA8IDJcbiAgICAgICAgICAgICAgICA/IFwiMFwiICsgblxuICAgICAgICAgICAgICAgIDogbjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSlNPTuOBruODkeODvOOCueOCkuWun+ihjOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIOODkeODvOOCueWvvuixoeOBruODh+ODvOOCv+ODkOOCpOODiFxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSAgICAgIOODh+ODvOOCv+ODkOOCpOODiOOBruOCteOCpOOCulxuICAgICAgICAgKiByZXR1cm4gdHJ1ZSA6IOaIkOWKn1xuICAgICAgICAgKiByZXR1cm4gZmFsc2U6IOWkseaVl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHBhcnNlQnl0ZXMoYnVmZmVyOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZW5kUG9zOiBudW1iZXJbXSA9IG5ldyBBcnJheSgxKTsgLy8g5Y+C54Wn5rih44GX44Gr44GZ44KL44Gf44KB6YWN5YiXXG4gICAgICAgICAgICBsZXQgZGVjb2RlQnVmZmVyOiBzdHJpbmcgPSB0aGlzLmFycmF5QnVmZmVyVG9TdHJpbmcoYnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLnBhcnNlVmFsdWUoZGVjb2RlQnVmZmVyLCBzaXplLCAwLCBlbmRQb3MpO1xuXG4gICAgICAgICAgICBpZih0aGlzLl9lcnJvcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RyYnVmOiBzdHJpbmcgPSAnXFwwJztcbiAgICAgICAgICAgICAgICBzdHJidWYgPSBcIkpzb24gcGFyc2UgZXJyb3IgOiBAbGluZSBcIiArICh0aGlzLl9saW5lQ291bnQgKyAxKSArIFwiXFxuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdCA9IG5ldyBKc29uU3RyaW5nKHN0cmJ1Zik7XG5cbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiezB9XCIsIHRoaXMuX3Jvb3QuZ2V0UmF3U3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5fcm9vdCA9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBuZXcgSnNvbkVycm9yKG5ldyBjc21TdHJpbmcodGhpcy5fZXJyb3IpLCBmYWxzZSk7IC8vIHJvb3Tjga/op6PmlL7jgZXjgozjgovjga7jgafjgqjjg6njg7zjgqrjg5bjgrjjgqfjgq/jg4jjgpLliKXpgJTkvZzmiJDjgZnjgotcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg7zjgrnmmYLjga7jgqjjg6njg7zlgKTjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRQYXJzZUVycm9yKCk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Or44O844OI6KaB57Sg44Gu5qyh44Gu6KaB57Sg44GM44OV44Kh44Kk44Or44Gu57WC56uv44Gg44Gj44Gf44KJdHJ1ZeOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNoZWNrRW5kT2ZGaWxlKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3QuZ2V0QXJyYXkoKVsxXS5lcXVhbHMoXCJFT0ZcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSlNPTuOCqOODrOODoeODs+ODiOOBi+OCiVZhbHVlKGZsb2F0LFN0cmluZyxWYWx1ZSosQXJyYXksbnVsbCx0cnVlLGZhbHNlKeOCkuODkeODvOOCueOBmeOCi1xuICAgICAgICAgKiDjgqjjg6zjg6Hjg7Pjg4jjga7mm7jlvI/jgavlv5zjgZjjgablhoXpg6jjgadQYXJzZVN0cmluZygpLCBQYXJzZU9iamVjdCgpLCBQYXJzZUFycmF5KCnjgpLlkbzjgbZcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICAgYnVmZmVyICAgICAgSlNPTuOCqOODrOODoeODs+ODiOOBruODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gICBsZW5ndGggICAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtICAgYmVnaW4gICAgICAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXG4gICAgICAgICAqIEBwYXJhbSAgIG91dEVuZFBvcyAgIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxuICAgICAgICAgKiBAcmV0dXJuICAgICAg44OR44O844K544GL44KJ5Y+W5b6X44GX44GfVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZVZhbHVlKGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgbGV0IG86IFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSBiZWdpbjtcbiAgICAgICAgICAgIGxldCBmOiBudW1iZXI7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGM6IHN0cmluZyA9IGJ1ZmZlcltpXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnNic6XG4gICAgICAgICAgICAgICAgY2FzZSAnNyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnOCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnOSc6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclN0cmluZzogc3RyaW5nW10gPSBuZXcgQXJyYXkoMSk7IC8vIOWPgueFp+a4oeOBl+OBq+OBmeOCi+OBn+OCgVxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IHN0cnRvZChidWZmZXIuc2xpY2UoaSksIGFmdGVyU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGJ1ZmZlci5pbmRleE9mKGFmdGVyU3RyaW5nWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSnNvbkZsb2F0KGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSnNvblN0cmluZyh0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgb3V0RW5kUG9zKSk7IC8vIFxcXCLjga7mrKHjga7mloflrZfjgYvjgolcbiAgICAgICAgICAgICAgICBjYXNlICdbJzpcbiAgICAgICAgICAgICAgICAgICAgbyA9IHRoaXMucGFyc2VBcnJheShidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgICAgICAgICAgICBvID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJ24nOiAvLyBudWxs5Lul5aSW44Gr44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyAzIDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gbmV3IEpzb25OdWxsdmFsdWUoKTsgICAgLy8g6Kej5pS+44Gn44GN44KL44KI44GG44Gr44GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBudWxsXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAndCc6IC8vIHRydWXku6XlpJbjgavjgarjgYRcbiAgICAgICAgICAgICAgICAgICAgaWYoaSArIDMgPCBsZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBKc29uQm9vbGVhbi50cnVlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSB0cnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAnZic6IC8vIGZhbHNl5Lul5aSW44Gr44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyA0IDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyA1O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJywnIHBvc2l0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAnLCc6IC8vIEFycmF5IHNlcGFyYXRvclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnLCcgcG9zaXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgY2FzZSAnXSc6IC8vIOS4jeato+OBqu+9neOBoOOBjOOCueOCreODg+ODl+OBmeOCi+OAgumFjeWIl+OBruacgOW+jOOBq+S4jeimgeOBqiAsIOOBjOOBguOCi+OBqOaAneOCj+OCjOOCi1xuICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpOyAgLy8g5ZCM44GY5paH5a2X44KS5YaN5Yem55CGXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCsrO1xuICAgICAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxyJzpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAvLyDjgrnjgq3jg4Pjg5dcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCBlbmQgb2YgdmFsdWVcIjtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOasoeOBruOAjFwi44CN44G+44Gn44Gu5paH5a2X5YiX44KS44OR44O844K544GZ44KL44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAgIHN0cmluZyAgLT4gIOODkeODvOOCueWvvuixoeOBruaWh+Wtl+WIl1xuICAgICAgICAgKiBAcGFyYW0gICBsZW5ndGggIC0+ICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtICAgYmVnaW4gICAtPiAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXG4gICAgICAgICAqIEBwYXJhbSAgb3V0RW5kUG9zICAgLT4gIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxuICAgICAgICAgKiBAcmV0dXJuICAgICAg44OR44O844K544GX44Gf5paHRuWtl+WIl+imgee0oFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlU3RyaW5nKHN0cmluZzogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSk6IHN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBsZXQgaSA9IGJlZ2luO1xuICAgICAgICAgICAgbGV0IGM6IHN0cmluZywgYzI6IHN0cmluZztcbiAgICAgICAgICAgIGxldCByZXQ6IGNzbVN0cmluZyA9IG5ldyBjc21TdHJpbmcoXCJcIik7XG4gICAgICAgICAgICBsZXQgYnVmU3RhcnQ6IG51bWJlciA9IGJlZ2luOyAvLyBzYnVm44Gr55m76Yyy44GV44KM44Gm44GE44Gq44GE5paH5a2X44Gu6ZaL5aeL5L2N572uXG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYyA9IHN0cmluZ1tpXTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaChjKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlICdcXFwiJzrjgIAvLyDntYLnq6/jga7igJ3jgIHjgqjjgrnjgrHjg7zjg5fmloflrZfjga/liKXjgavlh6bnkIbjgZXjgozjgovjga7jgafjgZPjgZPjgavmnaXjgarjgYRcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDE7ICAvLyDigJ3jga7mrKHjga7mloflrZdcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5hcHBlbmQoc3RyaW5nLnNsaWNlKGJ1ZlN0YXJ0KSwgKGkgLSBidWZTdGFydCkpOyAvLyDliY3jga7mloflrZfjgb7jgafjgpLnmbvpjLLjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQucztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJy8vJzogIC8vIOOCqOOCueOCseODvOODl+OBruWgtOWQiFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7IC8vIO+8kuaWh+Wtl+OCkuOCu+ODg+ODiOOBp+aJseOBhlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpIC0gMSA+IGJ1ZlN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5hcHBlbmQoc3RyaW5nLnNsaWNlKGJ1ZlN0YXJ0KSwgKGkgLSBidWZTdGFydCkpOyAvLyDliY3jga7mloflrZfjgb7jgafjgpLnmbvpjLLjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZlN0YXJ0ID0gaSArIDE7IC8vIOOCqOOCueOCseODvOODl++8iO+8kuaWh+Wtlynjga7mrKHjga7mloflrZfjgYvjgolcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBsZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzIgPSBzdHJpbmdbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYzIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcXFwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXFxcJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcXCInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXFwiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICcvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXGInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcZicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICduJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXHInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd1JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHN0cmluZy91bmljb3JkIGVzY2FwZSBub3Qgc3VwcG9ydGVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2Ugc3RyaW5nL2VzY2FwZSBlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBzdHJpbmcvaWxsZWdhbCBlbmRcIjtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEpTT07jga7jgqrjg5bjgrjjgqfjgq/jg4jjgqjjg6zjg6Hjg7Pjg4jjgpLjg5Hjg7zjgrnjgZfjgaZWYWx1ZeOCquODluOCuOOCp+OCr+ODiOOCkui/lOOBmVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtIGJlZ2luICAgICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtIG91dEVuZFBvcyDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlT2JqZWN0KGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXQ6IEpzb25NYXAgPSBuZXcgSnNvbk1hcCgpO1xuXG4gICAgICAgICAgICAvLyBLZXk6IFZhbHVlXG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xuICAgICAgICAgICAgbGV0IGM6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbG9jYWxSZXRFbmRQb3MyOiBudW1iZXJbXSA9IEFycmF5KDEpO1xuICAgICAgICAgICAgbGV0IG9rOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vICwg44GM57aa44GP6ZmQ44KK44Or44O844OXXG4gICAgICAgICAgICBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgRk9SX0xPT1A6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgbG9jYWxSZXRFbmRQb3MyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gbG9jYWxSZXRFbmRQb3MyWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1A7IC8vLS0gbG9vcOOBi+OCieWHuuOCi1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd9JzogLy8g6ZaJ44GY44Kr44OD44KzXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7IC8vIOepulxuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICc6JyBwb3NpdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgLy8g44K544Kt44OD44OX44GZ44KL5paH5a2XXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIW9rKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImtleSBub3QgZm91bmRcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIDog44KS44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgRk9SX0xPT1AyOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjID0gYnVmZmVyW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzonOlxuICAgICAgICAgICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1AyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd9JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICd9JyBwb3NpdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IHRoaXMuX2xpbmVDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnICc6IGNhc2UgJ1xcdCcgOiBjYXNlICdcXHInOlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAvLyDjgrnjgq3jg4Pjg5fjgZnjgovmloflrZdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCFvaylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCInOicgbm90IGZvdW5kXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOWApOOCkuODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTogVmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBsZW5ndGgsIGksIGxvY2FsUmV0RW5kUG9zMik7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpID0gbG9jYWxSZXRFbmRQb3MyWzBdO1xuXG4gICAgICAgICAgICAgICAgLy8gcmV0LnB1dChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXQucHV0KGtleSwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgRk9SX0xPT1AzOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjID0gYnVmZmVyW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJywnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1AzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd9JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDsgLy8g5q2j5bi457WC5LqGXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgLy8g44K544Kt44OD44OXXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsIGVuZCBvZiBwZXJzZU9iamVjdFwiO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5qyh44Gu44CMXCLjgI3jgb7jgafjga7mloflrZfliJfjgpLjg5Hjg7zjgrnjgZnjgovjgIJcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciAgICBKU09O44Ko44Os44Oh44Oz44OI44Gu44OQ44OD44OV44KhXG4gICAgICAgICAqIEBwYXJhbSBsZW5ndGggICAg44OR44O844K544GZ44KL6ZW344GVXG4gICAgICAgICAqIEBwYXJhbSBiZWdpbiAgICAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXG4gICAgICAgICAqIEBwYXJhbSBvdXRFbmRQb3Mg44OR44O844K557WC5LqG5pmC44Gu5L2N572uXG4gICAgICAgICAqIEByZXR1cm4g44OR44O844K544GL44KJ5Y+W5b6X44GX44GfVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZUFycmF5KGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKSAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBsZXQgcmV0Okpzb25BcnJheSA9IG5ldyBKc29uQXJyYXkoKTtcblxuICAgICAgICAgICAgLy8ga2V5IDogdmFsdWVcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSBiZWdpbjtcbiAgICAgICAgICAgIGxldCBjOiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgbG9jYWxSZXRFbmRwb3MyOiBudW1iZXJbXSA9IG5ldyBBcnJheSgxKTtcblxuICAgICAgICAgICAgLy8gLCDjgYzntprjgY/pmZDjgorjg6vjg7zjg5dcbiAgICAgICAgICAgIGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyA6IOOCkuODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTogVmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBsZW5ndGgsIGksIGxvY2FsUmV0RW5kcG9zMik7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLl9lcnJvcilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpID0gbG9jYWxSZXRFbmRwb3MyWzBdO1xuXG4gICAgICAgICAgICAgICAgaWYodmFsdWUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXQuYWRkKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBGT1JfTE9PUDM6XG4gICAgICAgICAgICAgICAgLy8gYm9vbGVhbiBicmVha2ZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBGT1JfTE9PUDogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWtmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBicmVhazsgLy8g5qyh44GuS0VZLCBWQWxVReOBuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDsgLy8g57WC5LqGXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrdGhpcy5fbGluZUNvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2FzZSAnICc6IGNhc2UgJ1xcdCc6IGNhc2UgJ1xccic6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyDjgrnjgq3jg4Pjg5dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0ID0gdm9pZCAwO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHBhcnNlT2JqZWN0XCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9lcnJvcjogc3RyaW5nOyAgICAgLy8g44OR44O844K55pmC44Gu44Ko44Op44O8XG4gICAgICAgIF9saW5lQ291bnQ6IG51bWJlcjsgLy8g44Ko44Op44O85aCx5ZGK44Gr55So44GE44KL6KGM5pWw44Kr44Km44Oz44OIXG4gICAgICAgIF9yb290OiBWYWx1ZTsgICAgICAgLy8g44OR44O844K544GV44KM44Gf44Or44O844OI6KaB57SgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkmZsb2F05YCk44Go44GX44Gm5omx44GGXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25GbG9hdCBleHRlbmRzIFZhbHVlXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcih2OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaVsOWApOWei+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Zsb2F0KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzdHJidWY6IHN0cmluZyA9ICdcXDAnO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBwYXJzZUZsb2F0KHN0cmJ1Zik7XG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzdHJidWY7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0ludChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX3ZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9GbG9hdChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDAuMCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZih2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gaW50XG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucm91bmQodmFsdWUpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmbG9hdFxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PSB0aGlzLl92YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyOyAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuecn+WBveWApOOBqOOBl+OBpuaJseOBhlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uQm9vbGVhbiBleHRlbmRzIFZhbHVlXG4gICAge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOecn+WBveWApOOBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Jvb2woKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLnnJ/lgb3lgKTjgafov5TjgZkoYm9vbGVhbilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0Jvb2xlYW4oZGVmYXVsdFZhbHVlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ib29sVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHRoaXMuX2Jvb2xWYWx1ZVxuICAgICAgICAgICAgICAgICAgICA/IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJmYWxzZVwiO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCdib29sZWFuJyA9PT0gdHlwZW9mKHZhbHVlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gdGhpcy5fYm9vbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZSwg6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2OiBib29sZWFuKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICB0aGlzLl9ib29sVmFsdWUgPSB2O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHRydWVWYWx1ZTogSnNvbkJvb2xlYW47ICAvLyB0cnVlXG4gICAgICAgIHN0YXRpYyBmYWxzZVZhbHVlOiBKc29uQm9vbGVhbjsgLy8gZmFsc2VcblxuICAgICAgICBwcml2YXRlIF9ib29sVmFsdWU6IGJvb2xlYW47IC8vIEpTT07opoHntKDjga7lgKRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KS5paH5a2X5YiX44Go44GX44Gm5omx44GGXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25TdHJpbmcgZXh0ZW5kcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IHN0cmluZyk7XG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBjc21TdHJpbmcpXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBhbnkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgICAgIGlmKCdzdHJpbmcnID09PSB0eXBlb2YocykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocyBpbnN0YW5jZW9mIGNzbVN0cmluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzLnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzmloflrZfliJfjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdHJpbmcoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDjga7lgKTjgajnrYnjgZfjgZHjgozjgbB0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBjc21TdHJpbmcpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBudW1iZXIpOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBib29sZWFuKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYW55KTpib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mKHZhbHVlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyID09IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9zdHJpbmdCdWZmZXIgPT0gdmFsdWUucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEpTT07jg5Hjg7zjgrnmmYLjga7jgqjjg6njg7zntZDmnpzjgILmloflrZfliJflnovjga7jgojjgYbjgavjgbXjgovjgb7jgYZcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgSnNvbkVycm9yIGV4dGVuZHMgSnNvblN0cmluZ1xuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZeOAgemdmeeahOOBquOCieino+aUvuOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RhdGljKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzU3RhdGljO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCqOODqeODvOaDheWgseOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChzOiBzdHJpbmcpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogY3NtU3RyaW5nfHN0cmluZywgaXNTdGF0aWM6IGJvb2xlYW4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKFwic3RyaW5nXCIgPT09IHR5cGVvZihzKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdXBlcihzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdXBlcihzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lzU3RhdGljID0gaXNTdGF0aWM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjgqjjg6njg7zlgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFcnJvcigpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cblxuICAgICAgICBwcm90ZWN0ZWQgX2lzU3RhdGljOiBib29sZWFuOyAvLyDpnZnnmoTjgapWYWx1ZeOBi+OBqeOBhuOBi1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpJOVUxM5YCk44Go44GX44Gm5oyB44GkXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25OdWxsdmFsdWUgZXh0ZW5kcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GMTlVMTOWApOOBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc051bGwoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWUsIOmdmeeahOOBquOCieino+aUvuOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RhdGljKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBcIk51bGxWYWx1ZVwiO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KS6YWN5YiX44Go44GX44Gm5oyB44GkXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25BcnJheSBleHRlbmRzIFZhbHVlXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5fYXJyYXkgPSBuZXcgY3NtVmVjdG9yPFZhbHVlPigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGl0ZTogY3NtVmVjdG9yX2l0ZXJhdG9yPFZhbHVlPiA9IHRoaXMuX2FycmF5LmJlZ2luKCk7IGl0ZS5ub3RFcXVhbCh0aGlzLl9hcnJheS5lbmQoKSk7IGl0ZS5wcmVJbmNyZW1lbnQoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgdjogVmFsdWUgPSBpdGUucHRyKCk7XG5cbiAgICAgICAgICAgICAgICBpZih2ICYmICF2LmlzU3RhdGljKCkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICB2ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzphY3liJfjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNBcnJheSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtpbmRleF1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9hcnJheS5nZXRTaXplKCkgPD0gaW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX0lOREVYX09GX0JPVU5EUyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IHRoaXMuX2FycmF5LmF0KGluZGV4KTtcblxuICAgICAgICAgICAgaWYodiA9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtzdHJpbmcgfCBjc21TdHJpbmddXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeVN0cmluZyhzOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWUuZXJyb3JWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzdHJpbmdCdWZmZXI6IHN0cmluZyA9IGluZGVudCArIFwiW1xcblwiO1xuXG4gICAgICAgICAgICBmb3IobGV0IGl0ZTogY3NtVmVjdG9yX2l0ZXJhdG9yPFZhbHVlPiA9IHRoaXMuX2FycmF5LmJlZ2luKCk7IGl0ZS5ub3RFcXVhbCh0aGlzLl9hcnJheS5lbmQoKSk7IGl0ZS5pbmNyZW1lbnQoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgdjogVmFsdWUgPSBpdGUucHRyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyICs9IGluZGVudCArIFwiXCIgKyB2LmdldFN0cmluZyhpbmRlbnQgKyBcIiBcIikgKyBcIlxcblwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzdHJpbmdCdWZmZXIgKyBpbmRlbnQgKyBcIl1cXG5cIjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDphY3liJfopoHntKDjgpLov73liqDjgZnjgotcbiAgICAgICAgICogQHBhcmFtIHYg6L+95Yqg44GZ44KL6KaB57SgXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWRkKHY6IFZhbHVlKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9hcnJheS5wdXNoQmFjayh2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZkoY3NtVmVjdG9yPFZhbHVlPilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWZWN0b3IoZGVmYXVsdFZhbHVlOiBjc21WZWN0b3I8VmFsdWU+ID0gbnVsbCk6IGNzbVZlY3RvcjxWYWx1ZT5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOBruaVsOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hcnJheS5nZXRTaXplKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9hcnJheTogY3NtVmVjdG9yPFZhbHVlPjsgLy8gSlNPTuimgee0oOOBruWApFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpLjg57jg4Pjg5fjgajjgZfjgabmjIHjgaRcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgSnNvbk1hcCBleHRlbmRzIFZhbHVlXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5fbWFwID0gbmV3IGNzbU1hcDxzdHJpbmcsIFZhbHVlPigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBpdGU6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpO1xuXG4gICAgICAgICAgICB3aGlsZShpdGUubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgdjogVmFsdWUgPSBpdGUucHRyKCkuc2Vjb25kO1xuXG4gICAgICAgICAgICAgICAgaWYodiAmJiAhdi5pc1N0YXRpYygpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GMTWFw5Z6L44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzTWFwKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHJldDogVmFsdWUgPSB0aGlzLl9tYXAuZ2V0VmFsdWUocy5zKTtcbiAgICAgICAgICAgICAgICBpZihyZXQgPT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaXRlcjogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7IGl0ZXIubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKTsgaXRlci5wcmVJbmNyZW1lbnQoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihpdGVyLnB0cigpLmZpcnN0ID09IHMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZihpdGVyLnB0cigpLnNlY29uZCA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVyLnB0cigpLnNlY29uZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gaW5kZW50ICsgXCJ7XFxuXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XG4gICAgICAgICAgICB3aGlsZShpdGUubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpdGUucHRyKCkuZmlyc3Q7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpLnNlY29uZDtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciArPSBpbmRlbnQgKyBcIiBcIiArIGtleSArIFwiIDogXCIgKyB2LmdldFN0cmluZyhpbmRlbnQgKyBcIiAgIFwiKSArIFwiIFxcblwiO1xuICAgICAgICAgICAgICAgIGl0ZS5wcmVJbmNyZW1lbnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyICs9IGluZGVudCArIFwifVxcblwiO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkk1hcOWei+OBp+i/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1hcChkZWZhdWx0VmFsdWU/OiBjc21NYXA8c3RyaW5nLCBWYWx1ZT4pOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXDjgavopoHntKDjgpLov73liqDjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdXQoa2V5OiBzdHJpbmcsIHY6IFZhbHVlKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tYXAuc2V0VmFsdWUoa2V5LCB2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXDjgYvjgonjgq3jg7zjga7jg6rjgrnjg4jjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRLZXlzKCk6IGNzbVZlY3RvcjxzdHJpbmc+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fa2V5cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gbmV3IGNzbVZlY3RvcjxzdHJpbmc+KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpdGU6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUoaXRlLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IGl0ZS5wdHIoKS5maXJzdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5wdXNoQmFjayhrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpdGUucHJlSW5jcmVtZW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFw44Gu6KaB57Sg5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleXMuZ2V0U2l6ZSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBwcml2YXRlIF9tYXA6IGNzbU1hcDxzdHJpbmcsIFZhbHVlPjsgICAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgICAgIHByaXZhdGUgX2tleXM6IGNzbVZlY3RvcjxzdHJpbmc+OyAgICAgICAgICAgICAgIC8vIEpTT07opoHntKDjga7lgKRcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9