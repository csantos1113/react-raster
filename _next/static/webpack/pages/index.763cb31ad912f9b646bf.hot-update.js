webpackHotUpdate_N_E("pages/index",{

/***/ "./raster/utils/getAlignmentXRest/index.ts":
/*!*************************************************!*\
  !*** ./raster/utils/getAlignmentXRest/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getAlignmentXRest; });\n/* harmony import */ var _getBreakpointRows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBreakpointRows */ \"./raster/utils/getAlignmentXRest/getBreakpointRows.ts\");\n\n\nfunction sumup(a, b, c) {\n  return a.map(function (el, i) {\n    return el + b[i] + c[i];\n  });\n}\n\nfunction getAlignmentXRest(_ref) {\n  var childBoxes = _ref.childBoxes,\n      alignX = _ref.alignX,\n      cssMode = _ref.cssMode,\n      cols = _ref.cols;\n  if (!childBoxes.length || cssMode === \"flex\") return null;\n\n  if (childBoxes.length === 1) {\n    return [{\n      ids: [childBoxes[0].id],\n      rest: sumup(childBoxes[0].cols, childBoxes[0].left, childBoxes[0].right).map(function (width, index) {\n        return alignX[index] === \"center\" ? (cols[index] - width) / 2 : null;\n      })\n    }];\n  }\n\n  var children = childBoxes.map(function (childBox) {\n    return {\n      width: sumup(childBox.cols, childBox.left, childBox.right),\n      id: childBox.id\n    };\n  });\n  var breakpoints = [0, 1, 2, 3, 4, 5];\n  var breakpointRows = breakpoints.map(function (_, bi) {\n    return Object(_getBreakpointRows__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      index: bi,\n      children: children,\n      cols: cols\n    });\n  });\n  children.map(function (child) {\n    return {\n      id: child.id,\n      width: breakpointRows.map(function (breakpointRow) {\n        console.log(row); // return breakpointRow.find((row) => row.ids === child.id).width;\n      })\n    };\n  });\n  console.log(breakpointRows); // children.reduce((acc, currentValue) => {\n  //   if (acc.width + currentValue.width <= cols) {\n  //     const currentRow = childrenRows[childrenRows.length - 1];\n  //     childrenRows[childrenRows.length - 1] = {\n  //       ids: [],\n  //     };\n  //   }\n  // });\n  // .reduce((acc, currentValue, _, array) => {\n  //   return acc.map((accWidth, index) =>\n  //     alignX[index] === \"center\"\n  //       ? (cols[index] - (accWidth + currentValue[index])) / 2\n  //       : null\n  //   );\n  // });\n  // return rest;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmFzdGVyL3V0aWxzL2dldEFsaWdubWVudFhSZXN0L2luZGV4LnRzP2QzYTkiXSwibmFtZXMiOlsic3VtdXAiLCJhIiwiYiIsImMiLCJtYXAiLCJlbCIsImkiLCJnZXRBbGlnbm1lbnRYUmVzdCIsImNoaWxkQm94ZXMiLCJhbGlnblgiLCJjc3NNb2RlIiwiY29scyIsImxlbmd0aCIsImlkcyIsImlkIiwicmVzdCIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaW5kZXgiLCJjaGlsZHJlbiIsImNoaWxkQm94IiwiYnJlYWtwb2ludHMiLCJicmVha3BvaW50Um93cyIsIl8iLCJiaSIsImdldEJyZWFrcG9pbnRSb3dzIiwiY2hpbGQiLCJicmVha3BvaW50Um93IiwiY29uc29sZSIsImxvZyIsInJvdyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU0EsU0FBU0EsS0FBVCxDQUFlQyxDQUFmLEVBQTRCQyxDQUE1QixFQUF5Q0MsQ0FBekMsRUFBZ0U7QUFDOUQsU0FBT0YsQ0FBQyxDQUFDRyxHQUFGLENBQU0sVUFBQ0MsRUFBRCxFQUFLQyxDQUFMO0FBQUEsV0FBV0QsRUFBRSxHQUFHSCxDQUFDLENBQUNJLENBQUQsQ0FBTixHQUFZSCxDQUFDLENBQUNHLENBQUQsQ0FBeEI7QUFBQSxHQUFOLENBQVA7QUFDRDs7QUFPYyxTQUFTQyxpQkFBVCxPQUtDO0FBQUEsTUFKZEMsVUFJYyxRQUpkQSxVQUljO0FBQUEsTUFIZEMsTUFHYyxRQUhkQSxNQUdjO0FBQUEsTUFGZEMsT0FFYyxRQUZkQSxPQUVjO0FBQUEsTUFEZEMsSUFDYyxRQURkQSxJQUNjO0FBQ2QsTUFBSSxDQUFDSCxVQUFVLENBQUNJLE1BQVosSUFBc0JGLE9BQU8sS0FBSyxNQUF0QyxFQUE4QyxPQUFPLElBQVA7O0FBQzlDLE1BQUlGLFVBQVUsQ0FBQ0ksTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUMzQixXQUFPLENBQ0w7QUFDRUMsU0FBRyxFQUFFLENBQUNMLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY00sRUFBZixDQURQO0FBRUVDLFVBQUksRUFBRWYsS0FBSyxDQUNUUSxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNHLElBREwsRUFFVEgsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjUSxJQUZMLEVBR1RSLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY1MsS0FITCxDQUFMLENBSUpiLEdBSkksQ0FJQSxVQUFDYyxLQUFELEVBQWdCQyxLQUFoQixFQUFrQztBQUN0QyxlQUFPVixNQUFNLENBQUNVLEtBQUQsQ0FBTixLQUFrQixRQUFsQixHQUE2QixDQUFDUixJQUFJLENBQUNRLEtBQUQsQ0FBSixHQUFjRCxLQUFmLElBQXdCLENBQXJELEdBQXlELElBQWhFO0FBQ0QsT0FOSztBQUZSLEtBREssQ0FBUDtBQVlEOztBQUNELE1BQU1FLFFBQVEsR0FBR1osVUFBVSxDQUFDSixHQUFYLENBQWUsVUFBQ2lCLFFBQUQ7QUFBQSxXQUFlO0FBQzdDSCxXQUFLLEVBQUVsQixLQUFLLENBQUNxQixRQUFRLENBQUNWLElBQVYsRUFBZ0JVLFFBQVEsQ0FBQ0wsSUFBekIsRUFBK0JLLFFBQVEsQ0FBQ0osS0FBeEMsQ0FEaUM7QUFFN0NILFFBQUUsRUFBRU8sUUFBUSxDQUFDUDtBQUZnQyxLQUFmO0FBQUEsR0FBZixDQUFqQjtBQUtBLE1BQU1RLFdBQVcsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBQXBCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHRCxXQUFXLENBQUNsQixHQUFaLENBQWdCLFVBQUNvQixDQUFELEVBQUlDLEVBQUosRUFBVztBQUNoRCxXQUFPQyxrRUFBaUIsQ0FBQztBQUFFUCxXQUFLLEVBQUVNLEVBQVQ7QUFBYUwsY0FBUSxFQUFSQSxRQUFiO0FBQXVCVCxVQUFJLEVBQUpBO0FBQXZCLEtBQUQsQ0FBeEI7QUFDRCxHQUZzQixDQUF2QjtBQUlBUyxVQUFRLENBQUNoQixHQUFULENBQWEsVUFBQ3VCLEtBQUQsRUFBVztBQUN0QixXQUFPO0FBQ0xiLFFBQUUsRUFBRWEsS0FBSyxDQUFDYixFQURMO0FBRUxJLFdBQUssRUFBRUssY0FBYyxDQUFDbkIsR0FBZixDQUFtQixVQUFDd0IsYUFBRCxFQUFtQjtBQUMzQ0MsZUFBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVosRUFEMkMsQ0FFM0M7QUFDRCxPQUhNO0FBRkYsS0FBUDtBQU9ELEdBUkQ7QUFVQUYsU0FBTyxDQUFDQyxHQUFSLENBQVlQLGNBQVosRUFwQ2MsQ0FxQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCIsImZpbGUiOiIuL3Jhc3Rlci91dGlscy9nZXRBbGlnbm1lbnRYUmVzdC9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRCcmVha3BvaW50Um93cyBmcm9tIFwiLi9nZXRCcmVha3BvaW50Um93c1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZEJveGVzOiB7IGxlZnQ6IG51bWJlcltdOyByaWdodDogbnVtYmVyW107IGNvbHM6IG51bWJlcltdOyBpZDogc3RyaW5nIH1bXTtcbiAgY29sczogbnVtYmVyW107XG4gIGFsaWduWDogc3RyaW5nW107XG4gIGNzc01vZGU6IFwiZmxleFwiIHwgXCJncmlkXCI7XG59XG5cbmZ1bmN0aW9uIHN1bXVwKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gIHJldHVybiBhLm1hcCgoZWwsIGkpID0+IGVsICsgYltpXSArIGNbaV0pO1xufVxuXG50eXBlIFJlc3QgPSB7XG4gIGlkczogc3RyaW5nW107XG4gIHJlc3Q6IG51bWJlcltdO1xufVtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbGlnbm1lbnRYUmVzdCh7XG4gIGNoaWxkQm94ZXMsXG4gIGFsaWduWCxcbiAgY3NzTW9kZSxcbiAgY29scyxcbn06IFByb3BzKTogUmVzdCB7XG4gIGlmICghY2hpbGRCb3hlcy5sZW5ndGggfHwgY3NzTW9kZSA9PT0gXCJmbGV4XCIpIHJldHVybiBudWxsO1xuICBpZiAoY2hpbGRCb3hlcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBpZHM6IFtjaGlsZEJveGVzWzBdLmlkXSxcbiAgICAgICAgcmVzdDogc3VtdXAoXG4gICAgICAgICAgY2hpbGRCb3hlc1swXS5jb2xzLFxuICAgICAgICAgIGNoaWxkQm94ZXNbMF0ubGVmdCxcbiAgICAgICAgICBjaGlsZEJveGVzWzBdLnJpZ2h0XG4gICAgICAgICkubWFwKCh3aWR0aDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFsaWduWFtpbmRleF0gPT09IFwiY2VudGVyXCIgPyAoY29sc1tpbmRleF0gLSB3aWR0aCkgLyAyIDogbnVsbDtcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIF07XG4gIH1cbiAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZEJveGVzLm1hcCgoY2hpbGRCb3gpID0+ICh7XG4gICAgd2lkdGg6IHN1bXVwKGNoaWxkQm94LmNvbHMsIGNoaWxkQm94LmxlZnQsIGNoaWxkQm94LnJpZ2h0KSxcbiAgICBpZDogY2hpbGRCb3guaWQsXG4gIH0pKTtcblxuICBjb25zdCBicmVha3BvaW50cyA9IFswLCAxLCAyLCAzLCA0LCA1XTtcbiAgY29uc3QgYnJlYWtwb2ludFJvd3MgPSBicmVha3BvaW50cy5tYXAoKF8sIGJpKSA9PiB7XG4gICAgcmV0dXJuIGdldEJyZWFrcG9pbnRSb3dzKHsgaW5kZXg6IGJpLCBjaGlsZHJlbiwgY29scyB9KTtcbiAgfSk7XG5cbiAgY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2hpbGQuaWQsXG4gICAgICB3aWR0aDogYnJlYWtwb2ludFJvd3MubWFwKChicmVha3BvaW50Um93KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvdyk7XG4gICAgICAgIC8vIHJldHVybiBicmVha3BvaW50Um93LmZpbmQoKHJvdykgPT4gcm93LmlkcyA9PT0gY2hpbGQuaWQpLndpZHRoO1xuICAgICAgfSksXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coYnJlYWtwb2ludFJvd3MpO1xuICAvLyBjaGlsZHJlbi5yZWR1Y2UoKGFjYywgY3VycmVudFZhbHVlKSA9PiB7XG4gIC8vICAgaWYgKGFjYy53aWR0aCArIGN1cnJlbnRWYWx1ZS53aWR0aCA8PSBjb2xzKSB7XG4gIC8vICAgICBjb25zdCBjdXJyZW50Um93ID0gY2hpbGRyZW5Sb3dzW2NoaWxkcmVuUm93cy5sZW5ndGggLSAxXTtcbiAgLy8gICAgIGNoaWxkcmVuUm93c1tjaGlsZHJlblJvd3MubGVuZ3RoIC0gMV0gPSB7XG4gIC8vICAgICAgIGlkczogW10sXG4gIC8vICAgICB9O1xuICAvLyAgIH1cbiAgLy8gfSk7XG5cbiAgLy8gLnJlZHVjZSgoYWNjLCBjdXJyZW50VmFsdWUsIF8sIGFycmF5KSA9PiB7XG4gIC8vICAgcmV0dXJuIGFjYy5tYXAoKGFjY1dpZHRoLCBpbmRleCkgPT5cbiAgLy8gICAgIGFsaWduWFtpbmRleF0gPT09IFwiY2VudGVyXCJcbiAgLy8gICAgICAgPyAoY29sc1tpbmRleF0gLSAoYWNjV2lkdGggKyBjdXJyZW50VmFsdWVbaW5kZXhdKSkgLyAyXG4gIC8vICAgICAgIDogbnVsbFxuICAvLyAgICk7XG4gIC8vIH0pO1xuICAvLyByZXR1cm4gcmVzdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./raster/utils/getAlignmentXRest/index.ts\n");

/***/ })

})