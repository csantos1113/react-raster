webpackHotUpdate_N_E("pages/index",{

/***/ "./raster/utils/getAlignmentXRest/getBreakpointRows.ts":
/*!*************************************************************!*\
  !*** ./raster/utils/getAlignmentXRest/getBreakpointRows.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getBreakpointRows; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\nfunction getBreakpointRows(_ref) {\n  var index = _ref.index,\n      cols = _ref.cols,\n      children = _ref.children;\n  var rows = [{\n    ids: [],\n    width: 0\n  }];\n  children.map(function (child) {\n    var currentRow = rows[rows.length - 1];\n\n    if (currentRow.width + child.width[index] <= cols[index]) {\n      rows[rows.length - 1] = {\n        ids: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentRow.ids), [child.id]),\n        width: currentRow.width + child.width[index]\n      };\n    } else {\n      rows.push({\n        ids: [child.id],\n        width: child.width[index]\n      });\n    }\n  });\n  return rows;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmFzdGVyL3V0aWxzL2dldEFsaWdubWVudFhSZXN0L2dldEJyZWFrcG9pbnRSb3dzLnRzPzRjYTQiXSwibmFtZXMiOlsiZ2V0QnJlYWtwb2ludFJvd3MiLCJpbmRleCIsImNvbHMiLCJjaGlsZHJlbiIsInJvd3MiLCJpZHMiLCJ3aWR0aCIsIm1hcCIsImNoaWxkIiwiY3VycmVudFJvdyIsImxlbmd0aCIsImlkIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7OztBQVdlLFNBQVNBLGlCQUFULE9BSUU7QUFBQSxNQUhmQyxLQUdlLFFBSGZBLEtBR2U7QUFBQSxNQUZmQyxJQUVlLFFBRmZBLElBRWU7QUFBQSxNQURmQyxRQUNlLFFBRGZBLFFBQ2U7QUFDZixNQUFNQyxJQUFJLEdBQUcsQ0FBQztBQUFFQyxPQUFHLEVBQUUsRUFBUDtBQUFXQyxTQUFLLEVBQUU7QUFBbEIsR0FBRCxDQUFiO0FBRUFILFVBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLEtBQUQsRUFBVztBQUN0QixRQUFNQyxVQUFVLEdBQUdMLElBQUksQ0FBQ0EsSUFBSSxDQUFDTSxNQUFMLEdBQWMsQ0FBZixDQUF2Qjs7QUFDQSxRQUFJRCxVQUFVLENBQUNILEtBQVgsR0FBbUJFLEtBQUssQ0FBQ0YsS0FBTixDQUFZTCxLQUFaLENBQW5CLElBQXlDQyxJQUFJLENBQUNELEtBQUQsQ0FBakQsRUFBMEQ7QUFDeERHLFVBQUksQ0FBQ0EsSUFBSSxDQUFDTSxNQUFMLEdBQWMsQ0FBZixDQUFKLEdBQXdCO0FBQ3RCTCxXQUFHLHlHQUFNSSxVQUFVLENBQUNKLEdBQWpCLElBQXNCRyxLQUFLLENBQUNHLEVBQTVCLEVBRG1CO0FBRXRCTCxhQUFLLEVBQUVHLFVBQVUsQ0FBQ0gsS0FBWCxHQUFtQkUsS0FBSyxDQUFDRixLQUFOLENBQVlMLEtBQVo7QUFGSixPQUF4QjtBQUlELEtBTEQsTUFLTztBQUNMRyxVQUFJLENBQUNRLElBQUwsQ0FBVTtBQUNSUCxXQUFHLEVBQUUsQ0FBQ0csS0FBSyxDQUFDRyxFQUFQLENBREc7QUFFUkwsYUFBSyxFQUFFRSxLQUFLLENBQUNGLEtBQU4sQ0FBWUwsS0FBWjtBQUZDLE9BQVY7QUFJRDtBQUNGLEdBYkQ7QUFlQSxTQUFPRyxJQUFQO0FBQ0QiLCJmaWxlIjoiLi9yYXN0ZXIvdXRpbHMvZ2V0QWxpZ25tZW50WFJlc3QvZ2V0QnJlYWtwb2ludFJvd3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogeyB3aWR0aDogbnVtYmVyW107IGlkOiBzdHJpbmcgfVtdO1xuICBjb2xzOiBudW1iZXJbXTtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxudHlwZSBSb3cgPSB7XG4gIGlkczogc3RyaW5nW107XG4gIHdpZHRoOiBudW1iZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCcmVha3BvaW50Um93cyh7XG4gIGluZGV4LFxuICBjb2xzLFxuICBjaGlsZHJlbixcbn06IFByb3BzKTogUm93W10ge1xuICBjb25zdCByb3dzID0gW3sgaWRzOiBbXSwgd2lkdGg6IDAgfV07XG5cbiAgY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRSb3cgPSByb3dzW3Jvd3MubGVuZ3RoIC0gMV07XG4gICAgaWYgKGN1cnJlbnRSb3cud2lkdGggKyBjaGlsZC53aWR0aFtpbmRleF0gPD0gY29sc1tpbmRleF0pIHtcbiAgICAgIHJvd3Nbcm93cy5sZW5ndGggLSAxXSA9IHtcbiAgICAgICAgaWRzOiBbLi4uY3VycmVudFJvdy5pZHMsIGNoaWxkLmlkXSxcbiAgICAgICAgd2lkdGg6IGN1cnJlbnRSb3cud2lkdGggKyBjaGlsZC53aWR0aFtpbmRleF0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByb3dzLnB1c2goe1xuICAgICAgICBpZHM6IFtjaGlsZC5pZF0sXG4gICAgICAgIHdpZHRoOiBjaGlsZC53aWR0aFtpbmRleF0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByb3dzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./raster/utils/getAlignmentXRest/getBreakpointRows.ts\n");

/***/ })

})