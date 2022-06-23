/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/src/app.js":
/*!*************************************!*\
  !*** ./resources/assets/src/app.js ***!
  \*************************************/
/***/ (() => {

eval("window.addEventListener('load', function (event) {\n  loadMaps();\n});\nvar timeOutFunctionId;\nwindow.addEventListener(\"resize\", function () {\n  clearTimeout(timeOutFunctionId);\n  timeOutFunctionId = setTimeout(loadMaps, 500);\n});\n/**\n * Load map logic\n */\n\nfunction loadMaps() {\n  getMap();\n  getImage();\n}\n/**\n * Get the image of the map\n */\n\n\nfunction getImage() {\n  document.querySelectorAll('.js-buienradar-image-wrapper').forEach(function (node) {\n    var imageWrapper = node.querySelector(\".js-buienradar-image\");\n    imageWrapper.innerHTML = '';\n    var img = document.createElement(\"img\");\n    img.src = \"https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=\" + node.offsetHeight + \"&width=\" + node.offsetWidth + \"&renderBackground=True&renderBranding=false&renderText=True\";\n    img.style = 'margin:0; width:100%;height:100%;';\n    imageWrapper.appendChild(img);\n  });\n}\n/**\n * Get the map and set its size equal to parent div\n */\n\n\nfunction getMap() {\n  document.querySelectorAll('.js-buienradar-map-wrapper').forEach(function (node) {\n    var frame = node.querySelector(\"iframe\");\n    frame.height = node.offsetHeight;\n    frame.width = node.offsetWidth;\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3NyYy9hcHAuanMuanMiLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJsb2FkTWFwcyIsInRpbWVPdXRGdW5jdGlvbklkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImdldE1hcCIsImdldEltYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm5vZGUiLCJpbWFnZVdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiaW1nIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsImZyYW1lIiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2xhcmF2ZWwtYm9pbGVycGxhdGUvLi9yZXNvdXJjZXMvYXNzZXRzL3NyYy9hcHAuanM/NmE5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudCkgPT4ge1xuICAgIGxvYWRNYXBzKClcbn0pO1xuXG5sZXQgdGltZU91dEZ1bmN0aW9uSWQ7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVPdXRGdW5jdGlvbklkKTtcbiAgICB0aW1lT3V0RnVuY3Rpb25JZCA9IHNldFRpbWVvdXQobG9hZE1hcHMsIDUwMCk7XG59KTtcblxuLyoqXG4gKiBMb2FkIG1hcCBsb2dpY1xuICovXG5mdW5jdGlvbiBsb2FkTWFwcygpIHtcbiAgICBnZXRNYXAoKVxuICAgIGdldEltYWdlKClcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGltYWdlIG9mIHRoZSBtYXBcbiAqL1xuZnVuY3Rpb24gZ2V0SW1hZ2UoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJ1aWVucmFkYXItaW1hZ2Utd3JhcHBlcicpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlV3JhcHBlciA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5qcy1idWllbnJhZGFyLWltYWdlXCIpO1xuICAgICAgICBpbWFnZVdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGltZy5zcmMgPSBcImh0dHBzOi8vaW1hZ2UuYnVpZW5yYWRhci5ubC8yLjAvaW1hZ2Uvc2luZ2xlL1JhZGFyTWFwUmFpbk5MP2hlaWdodD1cIiArIG5vZGUub2Zmc2V0SGVpZ2h0ICsgXCImd2lkdGg9XCIgKyBub2RlLm9mZnNldFdpZHRoICsgXCImcmVuZGVyQmFja2dyb3VuZD1UcnVlJnJlbmRlckJyYW5kaW5nPWZhbHNlJnJlbmRlclRleHQ9VHJ1ZVwiO1xuXG4gICAgICAgIGltZy5zdHlsZSA9ICdtYXJnaW46MDsgd2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTsnO1xuICAgICAgICBpbWFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9KVxufVxuXG4vKipcbiAqIEdldCB0aGUgbWFwIGFuZCBzZXQgaXRzIHNpemUgZXF1YWwgdG8gcGFyZW50IGRpdlxuICovXG5mdW5jdGlvbiBnZXRNYXAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJ1aWVucmFkYXItbWFwLXdyYXBwZXInKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBjb25zdCBmcmFtZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKTtcbiAgICAgICAgZnJhbWUuaGVpZ2h0ID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGZyYW1lLndpZHRoID0gbm9kZS5vZmZzZXRXaWR0aDtcbiAgICB9KVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxVQUFDQyxLQUFELEVBQVc7RUFDdkNDLFFBQVE7QUFDWCxDQUZEO0FBSUEsSUFBSUMsaUJBQUo7QUFDQUosTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFZO0VBQzFDSSxZQUFZLENBQUNELGlCQUFELENBQVo7RUFDQUEsaUJBQWlCLEdBQUdFLFVBQVUsQ0FBQ0gsUUFBRCxFQUFXLEdBQVgsQ0FBOUI7QUFDSCxDQUhEO0FBS0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLFFBQVQsR0FBb0I7RUFDaEJJLE1BQU07RUFDTkMsUUFBUTtBQUNYO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTQSxRQUFULEdBQW9CO0VBQ2hCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLDhCQUExQixFQUEwREMsT0FBMUQsQ0FBa0UsVUFBQUMsSUFBSSxFQUFJO0lBQ3RFLElBQU1DLFlBQVksR0FBR0QsSUFBSSxDQUFDRSxhQUFMLENBQW1CLHNCQUFuQixDQUFyQjtJQUNBRCxZQUFZLENBQUNFLFNBQWIsR0FBeUIsRUFBekI7SUFDQSxJQUFNQyxHQUFHLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixLQUF2QixDQUFaO0lBQ0FELEdBQUcsQ0FBQ0UsR0FBSixHQUFVLHdFQUF3RU4sSUFBSSxDQUFDTyxZQUE3RSxHQUE0RixTQUE1RixHQUF3R1AsSUFBSSxDQUFDUSxXQUE3RyxHQUEySCw2REFBckk7SUFFQUosR0FBRyxDQUFDSyxLQUFKLEdBQVksbUNBQVo7SUFDQVIsWUFBWSxDQUFDUyxXQUFiLENBQXlCTixHQUF6QjtFQUNILENBUkQ7QUFTSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU1QsTUFBVCxHQUFrQjtFQUNkRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLDRCQUExQixFQUF3REMsT0FBeEQsQ0FBZ0UsVUFBQUMsSUFBSSxFQUFJO0lBQ3BFLElBQU1XLEtBQUssR0FBR1gsSUFBSSxDQUFDRSxhQUFMLENBQW1CLFFBQW5CLENBQWQ7SUFDQVMsS0FBSyxDQUFDQyxNQUFOLEdBQWVaLElBQUksQ0FBQ08sWUFBcEI7SUFDQUksS0FBSyxDQUFDRSxLQUFOLEdBQWNiLElBQUksQ0FBQ1EsV0FBbkI7RUFDSCxDQUpEO0FBS0gifQ==\n//# sourceURL=webpack-internal:///./resources/assets/src/app.js\n");

/***/ }),

/***/ "./resources/assets/src/app.css":
/*!**************************************!*\
  !*** ./resources/assets/src/app.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3NyYy9hcHAuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhcmF2ZWwtYm9pbGVycGxhdGUvLi9yZXNvdXJjZXMvYXNzZXRzL3NyYy9hcHAuY3NzPzdiZjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/src/app.css\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklaravel_boilerplate"] = self["webpackChunklaravel_boilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/assets/src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/assets/src/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;