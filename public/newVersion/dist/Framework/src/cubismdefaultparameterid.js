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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/cubismdefaultparameterid.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/cubismdefaultparameterid.ts":
/*!***********************************************!*\
  !*** ./Framework/cubismdefaultparameterid.ts ***!
  \***********************************************/
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
/**
 * @brief パラメータIDのデフォルト値を保持する定数<br>
 *         デフォルト値の仕様は以下のマニュアルに基づく<br>
 *         https://docs.live2d.com/cubism-editor-manual/standard-parametor-list/
 */
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    // パーツID
    Live2DCubismFramework.HitAreaPrefix = "HitArea";
    Live2DCubismFramework.HitAreaHead = "Head";
    Live2DCubismFramework.HitAreaBody = "Body";
    Live2DCubismFramework.PartsIdCore = "Parts01Core";
    Live2DCubismFramework.PartsArmPrefix = "Parts01Arm_";
    Live2DCubismFramework.PartsArmLPrefix = "Parts01ArmL_";
    Live2DCubismFramework.PartsArmRPrefix = "Parts01ArmR_";
    // パラメータID
    Live2DCubismFramework.ParamAngleX = "ParamAngleX";
    Live2DCubismFramework.ParamAngleY = "ParamAngleY";
    Live2DCubismFramework.ParamAngleZ = "ParamAngleZ";
    Live2DCubismFramework.ParamEyeLOpen = "ParamEyeLOpen";
    Live2DCubismFramework.ParamEyeLSmile = "ParamEyeLSmile";
    Live2DCubismFramework.ParamEyeROpen = "ParamEyeROpen";
    Live2DCubismFramework.ParamEyeRSmile = "ParamEyeRSmile";
    Live2DCubismFramework.ParamEyeBallX = "ParamEyeBallX";
    Live2DCubismFramework.ParamEyeBallY = "ParamEyeBallY";
    Live2DCubismFramework.ParamEyeBallForm = "ParamEyeBallForm";
    Live2DCubismFramework.ParamBrowLY = "ParamBrowLY";
    Live2DCubismFramework.ParamBrowRY = "ParamBrowRY";
    Live2DCubismFramework.ParamBrowLX = "ParamBrowLX";
    Live2DCubismFramework.ParamBrowRX = "ParamBrowRX";
    Live2DCubismFramework.ParamBrowLAngle = "ParamBrowLAngle";
    Live2DCubismFramework.ParamBrowRAngle = "ParamBrowRAngle";
    Live2DCubismFramework.ParamBrowLForm = "ParamBrowLForm";
    Live2DCubismFramework.ParamBrowRForm = "ParamBrowRForm";
    Live2DCubismFramework.ParamMouthForm = "ParamMouthForm";
    Live2DCubismFramework.ParamMouthOpenY = "ParamMouthOpenY";
    Live2DCubismFramework.ParamCheek = "ParamCheek";
    Live2DCubismFramework.ParamBodyAngleX = "ParamBodyAngleX";
    Live2DCubismFramework.ParamBodyAngleY = "ParamBodyAngleY";
    Live2DCubismFramework.ParamBodyAngleZ = "ParamBodyAngleZ";
    Live2DCubismFramework.ParamBreath = "ParamBreath";
    Live2DCubismFramework.ParamArmLA = "ParamArmLA";
    Live2DCubismFramework.ParamArmRA = "ParamArmRA";
    Live2DCubismFramework.ParamArmLB = "ParamArmLB";
    Live2DCubismFramework.ParamArmRB = "ParamArmRB";
    Live2DCubismFramework.ParamHandL = "ParamHandL";
    Live2DCubismFramework.ParamHandR = "ParamHandR";
    Live2DCubismFramework.ParamHairFront = "ParamHairFront";
    Live2DCubismFramework.ParamHairSide = "ParamHairSide";
    Live2DCubismFramework.ParamHairBack = "ParamHairBack";
    Live2DCubismFramework.ParamHairFluffy = "ParamHairFluffy";
    Live2DCubismFramework.ParamShoulderY = "ParamShoulderY";
    Live2DCubismFramework.ParamBustX = "ParamBustX";
    Live2DCubismFramework.ParamBustY = "ParamBustY";
    Live2DCubismFramework.ParamBaseX = "ParamBaseX";
    Live2DCubismFramework.ParamBaseY = "ParamBaseY";
    Live2DCubismFramework.ParamNONE = "NONE:";
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2N1YmlzbWRlZmF1bHRwYXJhbWV0ZXJpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVIOzs7O0dBSUc7QUFDSSxJQUFVLHFCQUFxQixDQXFEckM7QUFyREQsV0FBaUIscUJBQXFCO0lBRWxDLFFBQVE7SUFDSyxtQ0FBYSxHQUFXLFNBQVMsQ0FBQztJQUNsQyxpQ0FBVyxHQUFXLE1BQU0sQ0FBQztJQUM3QixpQ0FBVyxHQUFXLE1BQU0sQ0FBQztJQUM3QixpQ0FBVyxHQUFXLGFBQWEsQ0FBQztJQUNwQyxvQ0FBYyxHQUFXLGFBQWEsQ0FBQztJQUN2QyxxQ0FBZSxHQUFXLGNBQWMsQ0FBQztJQUN6QyxxQ0FBZSxHQUFXLGNBQWMsQ0FBQztJQUV0RCxVQUFVO0lBQ0csaUNBQVcsR0FBVyxhQUFhLENBQUM7SUFDcEMsaUNBQVcsR0FBVyxhQUFhLENBQUM7SUFDcEMsaUNBQVcsR0FBVyxhQUFhLENBQUM7SUFDcEMsbUNBQWEsR0FBVyxlQUFlLENBQUM7SUFDeEMsb0NBQWMsR0FBVyxnQkFBZ0IsQ0FBQztJQUMxQyxtQ0FBYSxHQUFXLGVBQWUsQ0FBQztJQUN4QyxvQ0FBYyxHQUFXLGdCQUFnQixDQUFDO0lBQzFDLG1DQUFhLEdBQVcsZUFBZSxDQUFDO0lBQ3hDLG1DQUFhLEdBQVcsZUFBZSxDQUFDO0lBQ3hDLHNDQUFnQixHQUFXLGtCQUFrQixDQUFDO0lBQzlDLGlDQUFXLEdBQVcsYUFBYSxDQUFDO0lBQ3BDLGlDQUFXLEdBQVcsYUFBYSxDQUFDO0lBQ3BDLGlDQUFXLEdBQVcsYUFBYSxDQUFDO0lBQ3BDLGlDQUFXLEdBQVcsYUFBYSxDQUFDO0lBQ3BDLHFDQUFlLEdBQVcsaUJBQWlCLENBQUM7SUFDNUMscUNBQWUsR0FBVyxpQkFBaUIsQ0FBQztJQUM1QyxvQ0FBYyxHQUFXLGdCQUFnQixDQUFDO0lBQzFDLG9DQUFjLEdBQVcsZ0JBQWdCLENBQUM7SUFDMUMsb0NBQWMsR0FBVyxnQkFBZ0IsQ0FBQztJQUMxQyxxQ0FBZSxHQUFXLGlCQUFpQixDQUFDO0lBQzVDLGdDQUFVLEdBQVcsWUFBWSxDQUFDO0lBQ2xDLHFDQUFlLEdBQVcsaUJBQWlCLENBQUM7SUFDNUMscUNBQWUsR0FBVyxpQkFBaUIsQ0FBQztJQUM1QyxxQ0FBZSxHQUFXLGlCQUFpQixDQUFDO0lBQzVDLGlDQUFXLEdBQVcsYUFBYSxDQUFDO0lBQ3BDLGdDQUFVLEdBQVcsWUFBWSxDQUFDO0lBQ2xDLGdDQUFVLEdBQVcsWUFBWSxDQUFDO0lBQ2xDLGdDQUFVLEdBQVcsWUFBWSxDQUFDO0lBQ2xDLGdDQUFVLEdBQVcsWUFBWSxDQUFDO0lBQ2xDLGdDQUFVLEdBQVcsWUFBWSxDQUFDO0lBQ2xDLGdDQUFVLEdBQVcsWUFBWSxDQUFDO0lBQ2xDLG9DQUFjLEdBQVcsZ0JBQWdCLENBQUM7SUFDMUMsbUNBQWEsR0FBVyxlQUFlLENBQUM7SUFDeEMsbUNBQWEsR0FBVyxlQUFlLENBQUM7SUFDeEMscUNBQWUsR0FBVyxpQkFBaUIsQ0FBQztJQUM1QyxvQ0FBYyxHQUFXLGdCQUFnQixDQUFDO0lBQzFDLGdDQUFVLEdBQVcsWUFBWSxDQUFDO0lBQ2xDLGdDQUFVLEdBQVcsWUFBWSxDQUFDO0lBQ2xDLGdDQUFVLEdBQVcsWUFBWSxDQUFDO0lBQ2xDLGdDQUFVLEdBQVcsWUFBWSxDQUFDO0lBQ2xDLCtCQUFTLEdBQVcsT0FBTyxDQUFDO0FBQzdDLENBQUMsRUFyRGdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUFxRHJDIiwiZmlsZSI6Ii9jdWJpc21kZWZhdWx0cGFyYW1ldGVyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9jdWJpc21kZWZhdWx0cGFyYW1ldGVyaWQudHNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG4vKipcbiAqIEBicmllZiDjg5Hjg6njg6Hjg7zjgr9JROOBruODh+ODleOCqeODq+ODiOWApOOCkuS/neaMgeOBmeOCi+WumuaVsDxicj5cbiAqICAgICAgICAg44OH44OV44Kp44Or44OI5YCk44Gu5LuV5qeY44Gv5Lul5LiL44Gu44Oe44OL44Ol44Ki44Or44Gr5Z+644Gl44GPPGJyPlxuICogICAgICAgICBodHRwczovL2RvY3MubGl2ZTJkLmNvbS9jdWJpc20tZWRpdG9yLW1hbnVhbC9zdGFuZGFyZC1wYXJhbWV0b3ItbGlzdC9cbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvLyDjg5Hjg7zjg4RJRFxuICAgIGV4cG9ydCBjb25zdCBIaXRBcmVhUHJlZml4OiBzdHJpbmcgPSBcIkhpdEFyZWFcIjtcbiAgICBleHBvcnQgY29uc3QgSGl0QXJlYUhlYWQ6IHN0cmluZyA9IFwiSGVhZFwiO1xuICAgIGV4cG9ydCBjb25zdCBIaXRBcmVhQm9keTogc3RyaW5nID0gXCJCb2R5XCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcnRzSWRDb3JlOiBzdHJpbmcgPSBcIlBhcnRzMDFDb3JlXCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcnRzQXJtUHJlZml4OiBzdHJpbmcgPSBcIlBhcnRzMDFBcm1fXCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcnRzQXJtTFByZWZpeDogc3RyaW5nID0gXCJQYXJ0czAxQXJtTF9cIjtcbiAgICBleHBvcnQgY29uc3QgUGFydHNBcm1SUHJlZml4OiBzdHJpbmcgPSBcIlBhcnRzMDFBcm1SX1wiO1xuXG4gICAgLy8g44OR44Op44Oh44O844K/SURcbiAgICBleHBvcnQgY29uc3QgUGFyYW1BbmdsZVg6IHN0cmluZyA9IFwiUGFyYW1BbmdsZVhcIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1BbmdsZVk6IHN0cmluZyA9IFwiUGFyYW1BbmdsZVlcIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1BbmdsZVo6IHN0cmluZyA9IFwiUGFyYW1BbmdsZVpcIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1FeWVMT3Blbjogc3RyaW5nID0gXCJQYXJhbUV5ZUxPcGVuXCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcmFtRXllTFNtaWxlOiBzdHJpbmcgPSBcIlBhcmFtRXllTFNtaWxlXCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcmFtRXllUk9wZW46IHN0cmluZyA9IFwiUGFyYW1FeWVST3BlblwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUV5ZVJTbWlsZTogc3RyaW5nID0gXCJQYXJhbUV5ZVJTbWlsZVwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUV5ZUJhbGxYOiBzdHJpbmcgPSBcIlBhcmFtRXllQmFsbFhcIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1FeWVCYWxsWTogc3RyaW5nID0gXCJQYXJhbUV5ZUJhbGxZXCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcmFtRXllQmFsbEZvcm06IHN0cmluZyA9IFwiUGFyYW1FeWVCYWxsRm9ybVwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUJyb3dMWTogc3RyaW5nID0gXCJQYXJhbUJyb3dMWVwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUJyb3dSWTogc3RyaW5nID0gXCJQYXJhbUJyb3dSWVwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUJyb3dMWDogc3RyaW5nID0gXCJQYXJhbUJyb3dMWFwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUJyb3dSWDogc3RyaW5nID0gXCJQYXJhbUJyb3dSWFwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUJyb3dMQW5nbGU6IHN0cmluZyA9IFwiUGFyYW1Ccm93TEFuZ2xlXCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcmFtQnJvd1JBbmdsZTogc3RyaW5nID0gXCJQYXJhbUJyb3dSQW5nbGVcIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1Ccm93TEZvcm06IHN0cmluZyA9IFwiUGFyYW1Ccm93TEZvcm1cIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1Ccm93UkZvcm06IHN0cmluZyA9IFwiUGFyYW1Ccm93UkZvcm1cIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1Nb3V0aEZvcm06IHN0cmluZyA9IFwiUGFyYW1Nb3V0aEZvcm1cIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1Nb3V0aE9wZW5ZOiBzdHJpbmcgPSBcIlBhcmFtTW91dGhPcGVuWVwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUNoZWVrOiBzdHJpbmcgPSBcIlBhcmFtQ2hlZWtcIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1Cb2R5QW5nbGVYOiBzdHJpbmcgPSBcIlBhcmFtQm9keUFuZ2xlWFwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUJvZHlBbmdsZVk6IHN0cmluZyA9IFwiUGFyYW1Cb2R5QW5nbGVZXCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcmFtQm9keUFuZ2xlWjogc3RyaW5nID0gXCJQYXJhbUJvZHlBbmdsZVpcIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1CcmVhdGg6IHN0cmluZyA9IFwiUGFyYW1CcmVhdGhcIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1Bcm1MQTogc3RyaW5nID0gXCJQYXJhbUFybUxBXCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcmFtQXJtUkE6IHN0cmluZyA9IFwiUGFyYW1Bcm1SQVwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUFybUxCOiBzdHJpbmcgPSBcIlBhcmFtQXJtTEJcIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1Bcm1SQjogc3RyaW5nID0gXCJQYXJhbUFybVJCXCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcmFtSGFuZEw6IHN0cmluZyA9IFwiUGFyYW1IYW5kTFwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUhhbmRSOiBzdHJpbmcgPSBcIlBhcmFtSGFuZFJcIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1IYWlyRnJvbnQ6IHN0cmluZyA9IFwiUGFyYW1IYWlyRnJvbnRcIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1IYWlyU2lkZTogc3RyaW5nID0gXCJQYXJhbUhhaXJTaWRlXCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcmFtSGFpckJhY2s6IHN0cmluZyA9IFwiUGFyYW1IYWlyQmFja1wiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUhhaXJGbHVmZnk6IHN0cmluZyA9IFwiUGFyYW1IYWlyRmx1ZmZ5XCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcmFtU2hvdWxkZXJZOiBzdHJpbmcgPSBcIlBhcmFtU2hvdWxkZXJZXCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcmFtQnVzdFg6IHN0cmluZyA9IFwiUGFyYW1CdXN0WFwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbUJ1c3RZOiBzdHJpbmcgPSBcIlBhcmFtQnVzdFlcIjtcbiAgICBleHBvcnQgY29uc3QgUGFyYW1CYXNlWDogc3RyaW5nID0gXCJQYXJhbUJhc2VYXCI7XG4gICAgZXhwb3J0IGNvbnN0IFBhcmFtQmFzZVk6IHN0cmluZyA9IFwiUGFyYW1CYXNlWVwiO1xuICAgIGV4cG9ydCBjb25zdCBQYXJhbU5PTkU6IHN0cmluZyA9IFwiTk9ORTpcIjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=