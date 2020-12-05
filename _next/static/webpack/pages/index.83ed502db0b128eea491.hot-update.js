webpackHotUpdate_N_E("pages/index",{

/***/ "./raster/utils/getAlignmentXRest/index.ts":
/*!*************************************************!*\
  !*** ./raster/utils/getAlignmentXRest/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getAlignmentXRest; });\n/* harmony import */ var _getBreakpointRows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBreakpointRows */ \"./raster/utils/getAlignmentXRest/getBreakpointRows.ts\");\n\n\nfunction sumup(a, b, c) {\n  return a.map(function (el, i) {\n    return el + b[i] + c[i];\n  });\n}\n\nfunction getAlignmentXRest(_ref) {\n  var childBoxes = _ref.childBoxes,\n      alignX = _ref.alignX,\n      cssMode = _ref.cssMode,\n      cols = _ref.cols,\n      breakpoints = _ref.breakpoints;\n  if (!childBoxes.length || cssMode === \"flex\") return null;\n\n  if (childBoxes.length === 1) {\n    return [{\n      id: childBoxes[0].id,\n      width: sumup(childBoxes[0].cols, childBoxes[0].left, childBoxes[0].right).map(function (width, index) {\n        return alignX[index] === \"center\" ? (cols[index] - width) / 2 : null;\n      })\n    }];\n  }\n\n  var children = childBoxes.map(function (childBox) {\n    return {\n      width: sumup(childBox.cols, childBox.left, childBox.right),\n      id: childBox.id\n    };\n  });\n  var breakpointRows = breakpoints.map(function (_, index) {\n    return Object(_getBreakpointRows__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      index: index,\n      children: children,\n      cols: cols[index],\n      alignX: alignX[index]\n    });\n  });\n  return children.map(function (child) {\n    return {\n      id: child.id,\n      width: breakpointRows.map(function (breakpointRow) {\n        return breakpointRow.find(function (row) {\n          return row.ids.find(function (id) {\n            return id === child.id;\n          });\n        }).width;\n      })\n    };\n  });\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmFzdGVyL3V0aWxzL2dldEFsaWdubWVudFhSZXN0L2luZGV4LnRzP2QzYTkiXSwibmFtZXMiOlsic3VtdXAiLCJhIiwiYiIsImMiLCJtYXAiLCJlbCIsImkiLCJnZXRBbGlnbm1lbnRYUmVzdCIsImNoaWxkQm94ZXMiLCJhbGlnblgiLCJjc3NNb2RlIiwiY29scyIsImJyZWFrcG9pbnRzIiwibGVuZ3RoIiwiaWQiLCJ3aWR0aCIsImxlZnQiLCJyaWdodCIsImluZGV4IiwiY2hpbGRyZW4iLCJjaGlsZEJveCIsImJyZWFrcG9pbnRSb3dzIiwiXyIsImdldEJyZWFrcG9pbnRSb3dzIiwiY2hpbGQiLCJicmVha3BvaW50Um93IiwiZmluZCIsInJvdyIsImlkcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVUEsU0FBU0EsS0FBVCxDQUFlQyxDQUFmLEVBQTRCQyxDQUE1QixFQUF5Q0MsQ0FBekMsRUFBZ0U7QUFDOUQsU0FBT0YsQ0FBQyxDQUFDRyxHQUFGLENBQU0sVUFBQ0MsRUFBRCxFQUFLQyxDQUFMO0FBQUEsV0FBV0QsRUFBRSxHQUFHSCxDQUFDLENBQUNJLENBQUQsQ0FBTixHQUFZSCxDQUFDLENBQUNHLENBQUQsQ0FBeEI7QUFBQSxHQUFOLENBQVA7QUFDRDs7QUFFYyxTQUFTQyxpQkFBVCxPQU04QjtBQUFBLE1BTDNDQyxVQUsyQyxRQUwzQ0EsVUFLMkM7QUFBQSxNQUozQ0MsTUFJMkMsUUFKM0NBLE1BSTJDO0FBQUEsTUFIM0NDLE9BRzJDLFFBSDNDQSxPQUcyQztBQUFBLE1BRjNDQyxJQUUyQyxRQUYzQ0EsSUFFMkM7QUFBQSxNQUQzQ0MsV0FDMkMsUUFEM0NBLFdBQzJDO0FBQzNDLE1BQUksQ0FBQ0osVUFBVSxDQUFDSyxNQUFaLElBQXNCSCxPQUFPLEtBQUssTUFBdEMsRUFBOEMsT0FBTyxJQUFQOztBQUM5QyxNQUFJRixVQUFVLENBQUNLLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsV0FBTyxDQUNMO0FBQ0VDLFFBQUUsRUFBRU4sVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjTSxFQURwQjtBQUVFQyxXQUFLLEVBQUVmLEtBQUssQ0FDVlEsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjRyxJQURKLEVBRVZILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY1EsSUFGSixFQUdWUixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNTLEtBSEosQ0FBTCxDQUlMYixHQUpLLENBSUQsVUFBQ1csS0FBRCxFQUFnQkcsS0FBaEIsRUFBa0M7QUFDdEMsZUFBT1QsTUFBTSxDQUFDUyxLQUFELENBQU4sS0FBa0IsUUFBbEIsR0FBNkIsQ0FBQ1AsSUFBSSxDQUFDTyxLQUFELENBQUosR0FBY0gsS0FBZixJQUF3QixDQUFyRCxHQUF5RCxJQUFoRTtBQUNELE9BTk07QUFGVCxLQURLLENBQVA7QUFZRDs7QUFDRCxNQUFNSSxRQUFRLEdBQUdYLFVBQVUsQ0FBQ0osR0FBWCxDQUFlLFVBQUNnQixRQUFEO0FBQUEsV0FBZTtBQUM3Q0wsV0FBSyxFQUFFZixLQUFLLENBQUNvQixRQUFRLENBQUNULElBQVYsRUFBZ0JTLFFBQVEsQ0FBQ0osSUFBekIsRUFBK0JJLFFBQVEsQ0FBQ0gsS0FBeEMsQ0FEaUM7QUFFN0NILFFBQUUsRUFBRU0sUUFBUSxDQUFDTjtBQUZnQyxLQUFmO0FBQUEsR0FBZixDQUFqQjtBQUtBLE1BQU1PLGNBQWMsR0FBR1QsV0FBVyxDQUFDUixHQUFaLENBQWdCLFVBQUNrQixDQUFELEVBQUlKLEtBQUosRUFBYztBQUNuRCxXQUFPSyxrRUFBaUIsQ0FBQztBQUN2QkwsV0FBSyxFQUFMQSxLQUR1QjtBQUV2QkMsY0FBUSxFQUFSQSxRQUZ1QjtBQUd2QlIsVUFBSSxFQUFFQSxJQUFJLENBQUNPLEtBQUQsQ0FIYTtBQUl2QlQsWUFBTSxFQUFFQSxNQUFNLENBQUNTLEtBQUQ7QUFKUyxLQUFELENBQXhCO0FBTUQsR0FQc0IsQ0FBdkI7QUFTQSxTQUFPQyxRQUFRLENBQUNmLEdBQVQsQ0FBYSxVQUFDb0IsS0FBRCxFQUFXO0FBQzdCLFdBQU87QUFDTFYsUUFBRSxFQUFFVSxLQUFLLENBQUNWLEVBREw7QUFFTEMsV0FBSyxFQUFFTSxjQUFjLENBQUNqQixHQUFmLENBQW1CLFVBQUNxQixhQUFELEVBQW1CO0FBQzNDLGVBQU9BLGFBQWEsQ0FBQ0MsSUFBZCxDQUFtQixVQUFDQyxHQUFEO0FBQUEsaUJBQ3hCQSxHQUFHLENBQUNDLEdBQUosQ0FBUUYsSUFBUixDQUFhLFVBQUNaLEVBQUQ7QUFBQSxtQkFBZ0JBLEVBQUUsS0FBS1UsS0FBSyxDQUFDVixFQUE3QjtBQUFBLFdBQWIsQ0FEd0I7QUFBQSxTQUFuQixFQUVMQyxLQUZGO0FBR0QsT0FKTTtBQUZGLEtBQVA7QUFRRCxHQVRNLENBQVA7QUFVRCIsImZpbGUiOiIuL3Jhc3Rlci91dGlscy9nZXRBbGlnbm1lbnRYUmVzdC9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRCcmVha3BvaW50Um93cyBmcm9tIFwiLi9nZXRCcmVha3BvaW50Um93c1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZEJveGVzOiB7IGxlZnQ6IG51bWJlcltdOyByaWdodDogbnVtYmVyW107IGNvbHM6IG51bWJlcltdOyBpZDogc3RyaW5nIH1bXTtcbiAgY29sczogbnVtYmVyW107XG4gIGJyZWFrcG9pbnRzOiBudW1iZXJbXTtcbiAgYWxpZ25YOiBzdHJpbmdbXTtcbiAgY3NzTW9kZTogXCJmbGV4XCIgfCBcImdyaWRcIjtcbn1cblxuZnVuY3Rpb24gc3VtdXAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgcmV0dXJuIGEubWFwKChlbCwgaSkgPT4gZWwgKyBiW2ldICsgY1tpXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFsaWdubWVudFhSZXN0KHtcbiAgY2hpbGRCb3hlcyxcbiAgYWxpZ25YLFxuICBjc3NNb2RlLFxuICBjb2xzLFxuICBicmVha3BvaW50cyxcbn06IFByb3BzKTogeyBpZDogc3RyaW5nOyB3aWR0aDogbnVtYmVyW10gfVtdIHtcbiAgaWYgKCFjaGlsZEJveGVzLmxlbmd0aCB8fCBjc3NNb2RlID09PSBcImZsZXhcIikgcmV0dXJuIG51bGw7XG4gIGlmIChjaGlsZEJveGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBjaGlsZEJveGVzWzBdLmlkLFxuICAgICAgICB3aWR0aDogc3VtdXAoXG4gICAgICAgICAgY2hpbGRCb3hlc1swXS5jb2xzLFxuICAgICAgICAgIGNoaWxkQm94ZXNbMF0ubGVmdCxcbiAgICAgICAgICBjaGlsZEJveGVzWzBdLnJpZ2h0XG4gICAgICAgICkubWFwKCh3aWR0aDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFsaWduWFtpbmRleF0gPT09IFwiY2VudGVyXCIgPyAoY29sc1tpbmRleF0gLSB3aWR0aCkgLyAyIDogbnVsbDtcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIF07XG4gIH1cbiAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZEJveGVzLm1hcCgoY2hpbGRCb3gpID0+ICh7XG4gICAgd2lkdGg6IHN1bXVwKGNoaWxkQm94LmNvbHMsIGNoaWxkQm94LmxlZnQsIGNoaWxkQm94LnJpZ2h0KSxcbiAgICBpZDogY2hpbGRCb3guaWQsXG4gIH0pKTtcblxuICBjb25zdCBicmVha3BvaW50Um93cyA9IGJyZWFrcG9pbnRzLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gZ2V0QnJlYWtwb2ludFJvd3Moe1xuICAgICAgaW5kZXgsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbHM6IGNvbHNbaW5kZXhdLFxuICAgICAgYWxpZ25YOiBhbGlnblhbaW5kZXhdLFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2hpbGQuaWQsXG4gICAgICB3aWR0aDogYnJlYWtwb2ludFJvd3MubWFwKChicmVha3BvaW50Um93KSA9PiB7XG4gICAgICAgIHJldHVybiBicmVha3BvaW50Um93LmZpbmQoKHJvdykgPT5cbiAgICAgICAgICByb3cuaWRzLmZpbmQoKGlkOiBzdHJpbmcpID0+IGlkID09PSBjaGlsZC5pZClcbiAgICAgICAgKS53aWR0aDtcbiAgICAgIH0pLFxuICAgIH07XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./raster/utils/getAlignmentXRest/index.ts\n");

/***/ })

})