webpackHotUpdate_N_E("pages/test",{

/***/ "./raster/utils/inner.tsx":
/*!********************************!*\
  !*** ./raster/utils/inner.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/components/react-raster/raster/utils/inner.tsx\",\n    _this = undefined;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n          \", \"\\n          \", \"\\n          \", \"\\n          \", \"\\n        \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n          display: flex;\\n          align-items: stretch;\\n          justify-content: stretch;\\n          \", \"\\n        \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar InnerTag = function InnerTag(_ref) {\n  var className = _ref.className,\n      children = _ref.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: className,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = InnerTag;\nvar StyledInner = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(InnerTag).withConfig({\n  displayName: \"inner__StyledInner\",\n  componentId: \"sc-190zeux-0\"\n})([\"position:relative;width:100%;\", \"\"], function (props) {\n  return props.media.map(function (media, index) {\n    return props.hasChildBoxes ? media(_templateObject(), props.style && props.style[index]) : media(_templateObject2(), (props.alignX[index] || props.alignY[index]) && \"display: flex;\", props.alignX[index] && \"justify-content: \".concat(props.alignX[index], \";\"), props.alignY[index] && \"align-items: \".concat(props.alignY[index], \";\"), props.style[index]);\n  });\n});\n_c2 = StyledInner;\n\nvar Inner = function Inner(_ref2) {\n  var media = _ref2.media,\n      className = _ref2.className,\n      alignX = _ref2.alignX,\n      alignY = _ref2.alignY,\n      style = _ref2.style,\n      children = _ref2.children,\n      cssMode = _ref2.cssMode,\n      hasChildBoxes = _ref2.hasChildBoxes;\n  if (cssMode === \"grid\") return children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledInner, {\n    className: className,\n    media: media,\n    alignX: alignX,\n    alignY: alignY,\n    style: style,\n    hasChildBoxes: hasChildBoxes,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = Inner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Inner);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"InnerTag\");\n$RefreshReg$(_c2, \"StyledInner\");\n$RefreshReg$(_c3, \"Inner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmFzdGVyL3V0aWxzL2lubmVyLnRzeD8wNDk4Il0sIm5hbWVzIjpbIklubmVyVGFnIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJTdHlsZWRJbm5lciIsInN0eWxlZCIsInByb3BzIiwibWVkaWEiLCJtYXAiLCJpbmRleCIsImhhc0NoaWxkQm94ZXMiLCJzdHlsZSIsImFsaWduWCIsImFsaWduWSIsIklubmVyIiwiY3NzTW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLE1BQWNDLFFBQWQsUUFBY0EsUUFBZDtBQUFBLHNCQUNmO0FBQUssYUFBUyxFQUFFRCxTQUFoQjtBQUFBLGNBQTRCQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGU7QUFBQSxDQUFqQjs7S0FBTUYsUTtBQWFOLElBQU1HLFdBQVcsR0FBR0MsaUVBQU0sQ0FBQ0osUUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDBDQUliLFVBQUNLLEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDRCxLQUFELEVBQWFFLEtBQWIsRUFBK0I7QUFDN0MsV0FBT0gsS0FBSyxDQUFDSSxhQUFOLEdBQ0hILEtBREcsb0JBS0RELEtBQUssQ0FBQ0ssS0FBTixJQUFlTCxLQUFLLENBQUNLLEtBQU4sQ0FBWUYsS0FBWixDQUxkLElBT0hGLEtBUEcscUJBUUQsQ0FBQ0QsS0FBSyxDQUFDTSxNQUFOLENBQWFILEtBQWIsS0FBdUJILEtBQUssQ0FBQ08sTUFBTixDQUFhSixLQUFiLENBQXhCLHFCQVJDLEVBU0RILEtBQUssQ0FBQ00sTUFBTixDQUFhSCxLQUFiLGdDQUEyQ0gsS0FBSyxDQUFDTSxNQUFOLENBQWFILEtBQWIsQ0FBM0MsTUFUQyxFQVVESCxLQUFLLENBQUNPLE1BQU4sQ0FBYUosS0FBYiw0QkFBdUNILEtBQUssQ0FBQ08sTUFBTixDQUFhSixLQUFiLENBQXZDLE1BVkMsRUFXREgsS0FBSyxDQUFDSyxLQUFOLENBQVlGLEtBQVosQ0FYQyxDQUFQO0FBYUQsR0FkRCxDQURBO0FBQUEsQ0FKYSxDQUFqQjtNQUFNTCxXOztBQWlDTixJQUFNVSxLQUFzQixHQUFHLFNBQXpCQSxLQUF5QixRQVN6QjtBQUFBLE1BUkpQLEtBUUksU0FSSkEsS0FRSTtBQUFBLE1BUEpMLFNBT0ksU0FQSkEsU0FPSTtBQUFBLE1BTkpVLE1BTUksU0FOSkEsTUFNSTtBQUFBLE1BTEpDLE1BS0ksU0FMSkEsTUFLSTtBQUFBLE1BSkpGLEtBSUksU0FKSkEsS0FJSTtBQUFBLE1BSEpSLFFBR0ksU0FISkEsUUFHSTtBQUFBLE1BRkpZLE9BRUksU0FGSkEsT0FFSTtBQUFBLE1BREpMLGFBQ0ksU0FESkEsYUFDSTtBQUNKLE1BQUlLLE9BQU8sS0FBSyxNQUFoQixFQUF3QixPQUFPWixRQUFQO0FBQ3hCLHNCQUNFLHFFQUFDLFdBQUQ7QUFDRSxhQUFTLEVBQUVELFNBRGI7QUFFRSxTQUFLLEVBQUVLLEtBRlQ7QUFHRSxVQUFNLEVBQUVLLE1BSFY7QUFJRSxVQUFNLEVBQUVDLE1BSlY7QUFLRSxTQUFLLEVBQUVGLEtBTFQ7QUFNRSxpQkFBYSxFQUFFRCxhQU5qQjtBQUFBLGNBUUdQO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0F2QkQ7O01BQU1XLEs7QUF5QlNBLG9FQUFmIiwiZmlsZSI6Ii4vcmFzdGVyL3V0aWxzL2lubmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IElubmVyVGFnID0gKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L2Rpdj5cbik7XG5cbmludGVyZmFjZSBTdHlsZWRQcm9wcyB7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBtZWRpYTogYW55W107XG4gIGFsaWduWDogc3RyaW5nW107XG4gIGFsaWduWTogc3RyaW5nW107XG4gIHN0eWxlOiBzdHJpbmdbXTtcbiAgaGFzQ2hpbGRCb3hlczogYm9vbGVhbjtcbn1cblxuY29uc3QgU3R5bGVkSW5uZXIgPSBzdHlsZWQoSW5uZXJUYWcpPFN0eWxlZFByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5tZWRpYS5tYXAoKG1lZGlhOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5oYXNDaGlsZEJveGVzXG4gICAgICAgID8gbWVkaWFgXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgICAgJHtwcm9wcy5zdHlsZSAmJiBwcm9wcy5zdHlsZVtpbmRleF19XG4gICAgICAgIGBcbiAgICAgICAgOiBtZWRpYWBcbiAgICAgICAgICAkeyhwcm9wcy5hbGlnblhbaW5kZXhdIHx8IHByb3BzLmFsaWduWVtpbmRleF0pICYmIGBkaXNwbGF5OiBmbGV4O2B9XG4gICAgICAgICAgJHtwcm9wcy5hbGlnblhbaW5kZXhdICYmIGBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuYWxpZ25YW2luZGV4XX07YH1cbiAgICAgICAgICAke3Byb3BzLmFsaWduWVtpbmRleF0gJiYgYGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduWVtpbmRleF19O2B9XG4gICAgICAgICAgJHtwcm9wcy5zdHlsZVtpbmRleF19XG4gICAgICAgIGA7XG4gICAgfSl9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjc3NNb2RlOiBcImdyaWRcIiB8IFwiZmxleFwiO1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgYWxpZ25YOiBzdHJpbmdbXTtcbiAgYWxpZ25ZOiBzdHJpbmdbXTtcbiAgc3R5bGU6IHN0cmluZ1tdO1xuICBtZWRpYTogYW55W107XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIGhhc0NoaWxkQm94ZXM6IGJvb2xlYW47XG59XG5cbmNvbnN0IElubmVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBtZWRpYSxcbiAgY2xhc3NOYW1lLFxuICBhbGlnblgsXG4gIGFsaWduWSxcbiAgc3R5bGUsXG4gIGNoaWxkcmVuLFxuICBjc3NNb2RlLFxuICBoYXNDaGlsZEJveGVzLFxufSkgPT4ge1xuICBpZiAoY3NzTW9kZSA9PT0gXCJncmlkXCIpIHJldHVybiBjaGlsZHJlbjtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkSW5uZXJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgbWVkaWE9e21lZGlhfVxuICAgICAgYWxpZ25YPXthbGlnblh9XG4gICAgICBhbGlnblk9e2FsaWduWX1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGhhc0NoaWxkQm94ZXM9e2hhc0NoaWxkQm94ZXN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3R5bGVkSW5uZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbm5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./raster/utils/inner.tsx\n");

/***/ })

})