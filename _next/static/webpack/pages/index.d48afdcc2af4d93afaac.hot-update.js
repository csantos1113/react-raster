webpackHotUpdate_N_E("pages/index",{

/***/ "./raster/utils/getAlignmentXRest/index.ts":
/*!*************************************************!*\
  !*** ./raster/utils/getAlignmentXRest/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getAlignmentXRest; });\n/* harmony import */ var _getBreakpointRows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBreakpointRows */ \"./raster/utils/getAlignmentXRest/getBreakpointRows.ts\");\n\n\nfunction sumup(a, b, c) {\n  return a.map(function (el, i) {\n    return el + b[i] + c[i];\n  });\n}\n\nfunction getAlignmentXRest(_ref) {\n  var childBoxes = _ref.childBoxes,\n      alignX = _ref.alignX,\n      cssMode = _ref.cssMode,\n      cols = _ref.cols;\n  if (!childBoxes.length || cssMode === \"flex\") return null;\n\n  if (childBoxes.length === 1) {\n    return [{\n      ids: [childBoxes[0].id],\n      rest: sumup(childBoxes[0].cols, childBoxes[0].left, childBoxes[0].right).map(function (width, index) {\n        return alignX[index] === \"center\" ? (cols[index] - width) / 2 : null;\n      })\n    }];\n  }\n\n  var children = childBoxes.map(function (childBox) {\n    return {\n      width: sumup(childBox.cols, childBox.left, childBox.right),\n      id: childBox.id\n    };\n  });\n  var breakpoints = [0, 1, 2, 3, 4, 5];\n  var breakpointRows = breakpoints.map(function (_, bi) {\n    return Object(_getBreakpointRows__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      index: bi,\n      children: children,\n      cols: cols\n    });\n  });\n  children.map(function (child) {\n    return {\n      id: child.id,\n      width: breakpointRows.map(function (breakpointRow) {\n        return breakpointRow.find(function (row) {\n          return row.id;\n        });\n      })\n    };\n  });\n  console.log(breakpointRows); // children.reduce((acc, currentValue) => {\n  //   if (acc.width + currentValue.width <= cols) {\n  //     const currentRow = childrenRows[childrenRows.length - 1];\n  //     childrenRows[childrenRows.length - 1] = {\n  //       ids: [],\n  //     };\n  //   }\n  // });\n  // .reduce((acc, currentValue, _, array) => {\n  //   return acc.map((accWidth, index) =>\n  //     alignX[index] === \"center\"\n  //       ? (cols[index] - (accWidth + currentValue[index])) / 2\n  //       : null\n  //   );\n  // });\n  // return rest;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmFzdGVyL3V0aWxzL2dldEFsaWdubWVudFhSZXN0L2luZGV4LnRzP2QzYTkiXSwibmFtZXMiOlsic3VtdXAiLCJhIiwiYiIsImMiLCJtYXAiLCJlbCIsImkiLCJnZXRBbGlnbm1lbnRYUmVzdCIsImNoaWxkQm94ZXMiLCJhbGlnblgiLCJjc3NNb2RlIiwiY29scyIsImxlbmd0aCIsImlkcyIsImlkIiwicmVzdCIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaW5kZXgiLCJjaGlsZHJlbiIsImNoaWxkQm94IiwiYnJlYWtwb2ludHMiLCJicmVha3BvaW50Um93cyIsIl8iLCJiaSIsImdldEJyZWFrcG9pbnRSb3dzIiwiY2hpbGQiLCJicmVha3BvaW50Um93IiwiZmluZCIsInJvdyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLFNBQVNBLEtBQVQsQ0FBZUMsQ0FBZixFQUE0QkMsQ0FBNUIsRUFBeUNDLENBQXpDLEVBQWdFO0FBQzlELFNBQU9GLENBQUMsQ0FBQ0csR0FBRixDQUFNLFVBQUNDLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLFdBQVdELEVBQUUsR0FBR0gsQ0FBQyxDQUFDSSxDQUFELENBQU4sR0FBWUgsQ0FBQyxDQUFDRyxDQUFELENBQXhCO0FBQUEsR0FBTixDQUFQO0FBQ0Q7O0FBT2MsU0FBU0MsaUJBQVQsT0FLQztBQUFBLE1BSmRDLFVBSWMsUUFKZEEsVUFJYztBQUFBLE1BSGRDLE1BR2MsUUFIZEEsTUFHYztBQUFBLE1BRmRDLE9BRWMsUUFGZEEsT0FFYztBQUFBLE1BRGRDLElBQ2MsUUFEZEEsSUFDYztBQUNkLE1BQUksQ0FBQ0gsVUFBVSxDQUFDSSxNQUFaLElBQXNCRixPQUFPLEtBQUssTUFBdEMsRUFBOEMsT0FBTyxJQUFQOztBQUM5QyxNQUFJRixVQUFVLENBQUNJLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsV0FBTyxDQUNMO0FBQ0VDLFNBQUcsRUFBRSxDQUFDTCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNNLEVBQWYsQ0FEUDtBQUVFQyxVQUFJLEVBQUVmLEtBQUssQ0FDVFEsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjRyxJQURMLEVBRVRILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY1EsSUFGTCxFQUdUUixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNTLEtBSEwsQ0FBTCxDQUlKYixHQUpJLENBSUEsVUFBQ2MsS0FBRCxFQUFnQkMsS0FBaEIsRUFBa0M7QUFDdEMsZUFBT1YsTUFBTSxDQUFDVSxLQUFELENBQU4sS0FBa0IsUUFBbEIsR0FBNkIsQ0FBQ1IsSUFBSSxDQUFDUSxLQUFELENBQUosR0FBY0QsS0FBZixJQUF3QixDQUFyRCxHQUF5RCxJQUFoRTtBQUNELE9BTks7QUFGUixLQURLLENBQVA7QUFZRDs7QUFDRCxNQUFNRSxRQUFRLEdBQUdaLFVBQVUsQ0FBQ0osR0FBWCxDQUFlLFVBQUNpQixRQUFEO0FBQUEsV0FBZTtBQUM3Q0gsV0FBSyxFQUFFbEIsS0FBSyxDQUFDcUIsUUFBUSxDQUFDVixJQUFWLEVBQWdCVSxRQUFRLENBQUNMLElBQXpCLEVBQStCSyxRQUFRLENBQUNKLEtBQXhDLENBRGlDO0FBRTdDSCxRQUFFLEVBQUVPLFFBQVEsQ0FBQ1A7QUFGZ0MsS0FBZjtBQUFBLEdBQWYsQ0FBakI7QUFLQSxNQUFNUSxXQUFXLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFwQjtBQUNBLE1BQU1DLGNBQWMsR0FBR0QsV0FBVyxDQUFDbEIsR0FBWixDQUFnQixVQUFDb0IsQ0FBRCxFQUFJQyxFQUFKLEVBQVc7QUFDaEQsV0FBT0Msa0VBQWlCLENBQUM7QUFBRVAsV0FBSyxFQUFFTSxFQUFUO0FBQWFMLGNBQVEsRUFBUkEsUUFBYjtBQUF1QlQsVUFBSSxFQUFKQTtBQUF2QixLQUFELENBQXhCO0FBQ0QsR0FGc0IsQ0FBdkI7QUFJQVMsVUFBUSxDQUFDaEIsR0FBVCxDQUFhLFVBQUN1QixLQUFELEVBQVc7QUFDdEIsV0FBTztBQUNMYixRQUFFLEVBQUVhLEtBQUssQ0FBQ2IsRUFETDtBQUVMSSxXQUFLLEVBQUVLLGNBQWMsQ0FBQ25CLEdBQWYsQ0FBbUIsVUFBQ3dCLGFBQUQsRUFBbUI7QUFDM0MsZUFBT0EsYUFBYSxDQUFDQyxJQUFkLENBQW1CLFVBQUNDLEdBQUQ7QUFBQSxpQkFBU0EsR0FBRyxDQUFDaEIsRUFBYjtBQUFBLFNBQW5CLENBQVA7QUFDRCxPQUZNO0FBRkYsS0FBUDtBQU1ELEdBUEQ7QUFTQWlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxjQUFaLEVBbkNjLENBb0NkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QiLCJmaWxlIjoiLi9yYXN0ZXIvdXRpbHMvZ2V0QWxpZ25tZW50WFJlc3QvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0QnJlYWtwb2ludFJvd3MgZnJvbSBcIi4vZ2V0QnJlYWtwb2ludFJvd3NcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRCb3hlczogeyBsZWZ0OiBudW1iZXJbXTsgcmlnaHQ6IG51bWJlcltdOyBjb2xzOiBudW1iZXJbXTsgaWQ6IHN0cmluZyB9W107XG4gIGNvbHM6IG51bWJlcltdO1xuICBhbGlnblg6IHN0cmluZ1tdO1xuICBjc3NNb2RlOiBcImZsZXhcIiB8IFwiZ3JpZFwiO1xufVxuXG5mdW5jdGlvbiBzdW11cChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICByZXR1cm4gYS5tYXAoKGVsLCBpKSA9PiBlbCArIGJbaV0gKyBjW2ldKTtcbn1cblxudHlwZSBSZXN0ID0ge1xuICBpZHM6IHN0cmluZ1tdO1xuICByZXN0OiBudW1iZXJbXTtcbn1bXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWxpZ25tZW50WFJlc3Qoe1xuICBjaGlsZEJveGVzLFxuICBhbGlnblgsXG4gIGNzc01vZGUsXG4gIGNvbHMsXG59OiBQcm9wcyk6IFJlc3Qge1xuICBpZiAoIWNoaWxkQm94ZXMubGVuZ3RoIHx8IGNzc01vZGUgPT09IFwiZmxleFwiKSByZXR1cm4gbnVsbDtcbiAgaWYgKGNoaWxkQm94ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaWRzOiBbY2hpbGRCb3hlc1swXS5pZF0sXG4gICAgICAgIHJlc3Q6IHN1bXVwKFxuICAgICAgICAgIGNoaWxkQm94ZXNbMF0uY29scyxcbiAgICAgICAgICBjaGlsZEJveGVzWzBdLmxlZnQsXG4gICAgICAgICAgY2hpbGRCb3hlc1swXS5yaWdodFxuICAgICAgICApLm1hcCgod2lkdGg6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBhbGlnblhbaW5kZXhdID09PSBcImNlbnRlclwiID8gKGNvbHNbaW5kZXhdIC0gd2lkdGgpIC8gMiA6IG51bGw7XG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG4gIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRCb3hlcy5tYXAoKGNoaWxkQm94KSA9PiAoe1xuICAgIHdpZHRoOiBzdW11cChjaGlsZEJveC5jb2xzLCBjaGlsZEJveC5sZWZ0LCBjaGlsZEJveC5yaWdodCksXG4gICAgaWQ6IGNoaWxkQm94LmlkLFxuICB9KSk7XG5cbiAgY29uc3QgYnJlYWtwb2ludHMgPSBbMCwgMSwgMiwgMywgNCwgNV07XG4gIGNvbnN0IGJyZWFrcG9pbnRSb3dzID0gYnJlYWtwb2ludHMubWFwKChfLCBiaSkgPT4ge1xuICAgIHJldHVybiBnZXRCcmVha3BvaW50Um93cyh7IGluZGV4OiBiaSwgY2hpbGRyZW4sIGNvbHMgfSk7XG4gIH0pO1xuXG4gIGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNoaWxkLmlkLFxuICAgICAgd2lkdGg6IGJyZWFrcG9pbnRSb3dzLm1hcCgoYnJlYWtwb2ludFJvdykgPT4ge1xuICAgICAgICByZXR1cm4gYnJlYWtwb2ludFJvdy5maW5kKChyb3cpID0+IHJvdy5pZCk7XG4gICAgICB9KSxcbiAgICB9O1xuICB9KTtcblxuICBjb25zb2xlLmxvZyhicmVha3BvaW50Um93cyk7XG4gIC8vIGNoaWxkcmVuLnJlZHVjZSgoYWNjLCBjdXJyZW50VmFsdWUpID0+IHtcbiAgLy8gICBpZiAoYWNjLndpZHRoICsgY3VycmVudFZhbHVlLndpZHRoIDw9IGNvbHMpIHtcbiAgLy8gICAgIGNvbnN0IGN1cnJlbnRSb3cgPSBjaGlsZHJlblJvd3NbY2hpbGRyZW5Sb3dzLmxlbmd0aCAtIDFdO1xuICAvLyAgICAgY2hpbGRyZW5Sb3dzW2NoaWxkcmVuUm93cy5sZW5ndGggLSAxXSA9IHtcbiAgLy8gICAgICAgaWRzOiBbXSxcbiAgLy8gICAgIH07XG4gIC8vICAgfVxuICAvLyB9KTtcblxuICAvLyAucmVkdWNlKChhY2MsIGN1cnJlbnRWYWx1ZSwgXywgYXJyYXkpID0+IHtcbiAgLy8gICByZXR1cm4gYWNjLm1hcCgoYWNjV2lkdGgsIGluZGV4KSA9PlxuICAvLyAgICAgYWxpZ25YW2luZGV4XSA9PT0gXCJjZW50ZXJcIlxuICAvLyAgICAgICA/IChjb2xzW2luZGV4XSAtIChhY2NXaWR0aCArIGN1cnJlbnRWYWx1ZVtpbmRleF0pKSAvIDJcbiAgLy8gICAgICAgOiBudWxsXG4gIC8vICAgKTtcbiAgLy8gfSk7XG4gIC8vIHJldHVybiByZXN0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./raster/utils/getAlignmentXRest/index.ts\n");

/***/ })

})