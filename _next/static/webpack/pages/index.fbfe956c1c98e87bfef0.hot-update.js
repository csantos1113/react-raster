webpackHotUpdate_N_E("pages/index",{

/***/ "./raster/utils/getAlignmentXRest/getBreakpointRows.ts":
/*!*************************************************************!*\
  !*** ./raster/utils/getAlignmentXRest/getBreakpointRows.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getBreakpointRows; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\nfunction getBreakpointRows(_ref) {\n  var index = _ref.index,\n      cols = _ref.cols,\n      children = _ref.children;\n  var rows = [{\n    ids: [],\n    width: 0\n  }];\n  children.map(function (child) {\n    var currentRow = rows[rows.length - 1];\n\n    if (currentRow.width + child.width[index] <= cols[index]) {\n      rows[rows.length - 1] = {\n        ids: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentRow.ids), [child.id]),\n        width: currentRow.width + child.width[index]\n      };\n    } else {\n      rows[rows.length - 1].width = (cols[index] - currentRow.width) / 2;\n      rows.push({\n        ids: [child.id],\n        width: child.width[index]\n      });\n    }\n  });\n  return rows;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmFzdGVyL3V0aWxzL2dldEFsaWdubWVudFhSZXN0L2dldEJyZWFrcG9pbnRSb3dzLnRzPzRjYTQiXSwibmFtZXMiOlsiZ2V0QnJlYWtwb2ludFJvd3MiLCJpbmRleCIsImNvbHMiLCJjaGlsZHJlbiIsInJvd3MiLCJpZHMiLCJ3aWR0aCIsIm1hcCIsImNoaWxkIiwiY3VycmVudFJvdyIsImxlbmd0aCIsImlkIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7OztBQVdlLFNBQVNBLGlCQUFULE9BSUU7QUFBQSxNQUhmQyxLQUdlLFFBSGZBLEtBR2U7QUFBQSxNQUZmQyxJQUVlLFFBRmZBLElBRWU7QUFBQSxNQURmQyxRQUNlLFFBRGZBLFFBQ2U7QUFDZixNQUFNQyxJQUFJLEdBQUcsQ0FBQztBQUFFQyxPQUFHLEVBQUUsRUFBUDtBQUFXQyxTQUFLLEVBQUU7QUFBbEIsR0FBRCxDQUFiO0FBRUFILFVBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLEtBQUQsRUFBVztBQUN0QixRQUFNQyxVQUFVLEdBQUdMLElBQUksQ0FBQ0EsSUFBSSxDQUFDTSxNQUFMLEdBQWMsQ0FBZixDQUF2Qjs7QUFDQSxRQUFJRCxVQUFVLENBQUNILEtBQVgsR0FBbUJFLEtBQUssQ0FBQ0YsS0FBTixDQUFZTCxLQUFaLENBQW5CLElBQXlDQyxJQUFJLENBQUNELEtBQUQsQ0FBakQsRUFBMEQ7QUFDeERHLFVBQUksQ0FBQ0EsSUFBSSxDQUFDTSxNQUFMLEdBQWMsQ0FBZixDQUFKLEdBQXdCO0FBQ3RCTCxXQUFHLHlHQUFNSSxVQUFVLENBQUNKLEdBQWpCLElBQXNCRyxLQUFLLENBQUNHLEVBQTVCLEVBRG1CO0FBRXRCTCxhQUFLLEVBQUVHLFVBQVUsQ0FBQ0gsS0FBWCxHQUFtQkUsS0FBSyxDQUFDRixLQUFOLENBQVlMLEtBQVo7QUFGSixPQUF4QjtBQUlELEtBTEQsTUFLTztBQUNMRyxVQUFJLENBQUNBLElBQUksQ0FBQ00sTUFBTCxHQUFjLENBQWYsQ0FBSixDQUFzQkosS0FBdEIsR0FBOEIsQ0FBQ0osSUFBSSxDQUFDRCxLQUFELENBQUosR0FBY1EsVUFBVSxDQUFDSCxLQUExQixJQUFtQyxDQUFqRTtBQUNBRixVQUFJLENBQUNRLElBQUwsQ0FBVTtBQUNSUCxXQUFHLEVBQUUsQ0FBQ0csS0FBSyxDQUFDRyxFQUFQLENBREc7QUFFUkwsYUFBSyxFQUFFRSxLQUFLLENBQUNGLEtBQU4sQ0FBWUwsS0FBWjtBQUZDLE9BQVY7QUFJRDtBQUNGLEdBZEQ7QUFnQkEsU0FBT0csSUFBUDtBQUNEIiwiZmlsZSI6Ii4vcmFzdGVyL3V0aWxzL2dldEFsaWdubWVudFhSZXN0L2dldEJyZWFrcG9pbnRSb3dzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IHsgd2lkdGg6IG51bWJlcltdOyBpZDogc3RyaW5nIH1bXTtcbiAgY29sczogbnVtYmVyW107XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbnR5cGUgUm93ID0ge1xuICBpZHM6IHN0cmluZ1tdO1xuICB3aWR0aDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QnJlYWtwb2ludFJvd3Moe1xuICBpbmRleCxcbiAgY29scyxcbiAgY2hpbGRyZW4sXG59OiBQcm9wcyk6IFJvd1tdIHtcbiAgY29uc3Qgcm93cyA9IFt7IGlkczogW10sIHdpZHRoOiAwIH1dO1xuXG4gIGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50Um93ID0gcm93c1tyb3dzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChjdXJyZW50Um93LndpZHRoICsgY2hpbGQud2lkdGhbaW5kZXhdIDw9IGNvbHNbaW5kZXhdKSB7XG4gICAgICByb3dzW3Jvd3MubGVuZ3RoIC0gMV0gPSB7XG4gICAgICAgIGlkczogWy4uLmN1cnJlbnRSb3cuaWRzLCBjaGlsZC5pZF0sXG4gICAgICAgIHdpZHRoOiBjdXJyZW50Um93LndpZHRoICsgY2hpbGQud2lkdGhbaW5kZXhdLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm93c1tyb3dzLmxlbmd0aCAtIDFdLndpZHRoID0gKGNvbHNbaW5kZXhdIC0gY3VycmVudFJvdy53aWR0aCkgLyAyO1xuICAgICAgcm93cy5wdXNoKHtcbiAgICAgICAgaWRzOiBbY2hpbGQuaWRdLFxuICAgICAgICB3aWR0aDogY2hpbGQud2lkdGhbaW5kZXhdLFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcm93cztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./raster/utils/getAlignmentXRest/getBreakpointRows.ts\n");

/***/ })

})