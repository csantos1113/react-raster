webpackHotUpdate_N_E("pages/test",{

/***/ "./raster/utils/resetter.tsx":
/*!***********************************!*\
  !*** ./raster/utils/resetter.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/components/react-raster/raster/utils/resetter.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      width: calc(100% + (\", \"));      \\n      margin-left: calc(-\", \" / 2);\\n      margin-right: calc(-\", \" / 2);\\n      margin-top: calc(-\", \" / 2);\\n      margin-bottom: calc(-\", \" / 2);\\n\\n      align-items: \", \";\\n      justify-content: \", \";    \\n      \\n      padding: \", \";\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// @ts-nocheck\n\n\n\nvar ResetterTag = function ResetterTag(_ref) {\n  var className = _ref.className,\n      children = _ref.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: className,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = ResetterTag;\nvar StyledResetter = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ResetterTag).withConfig({\n  displayName: \"resetter__StyledResetter\",\n  componentId: \"tmzi43-0\"\n})([\"position:relative;display:flex;flex-wrap:wrap;\", \"\"], function (props) {\n  return props.media.map(function (media, index) {\n    return media(_templateObject(), props.gutterX[index], props.gutterX[index], props.gutterX[index], props.gutterY[index], props.gutterY[index], props.alignY[index], props.alignX[index], props.padding && props.padding[index]);\n  });\n});\n_c2 = StyledResetter;\n\nvar Resetter = function Resetter(props) {\n  if (props.cssMode === \"grid\" || !props.hasChildBoxes) return props.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(StyledResetter, _objectSpread({}, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 10\n  }, _this);\n};\n\n_c3 = Resetter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resetter);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ResetterTag\");\n$RefreshReg$(_c2, \"StyledResetter\");\n$RefreshReg$(_c3, \"Resetter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmFzdGVyL3V0aWxzL3Jlc2V0dGVyLnRzeD82YjNjIl0sIm5hbWVzIjpbIlJlc2V0dGVyVGFnIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJTdHlsZWRSZXNldHRlciIsInN0eWxlZCIsInByb3BzIiwibWVkaWEiLCJtYXAiLCJpbmRleCIsImd1dHRlclgiLCJndXR0ZXJZIiwiYWxpZ25ZIiwiYWxpZ25YIiwicGFkZGluZyIsIlJlc2V0dGVyIiwiY3NzTW9kZSIsImhhc0NoaWxkQm94ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTZCO0FBQUEsTUFBMUJDLFNBQTBCLFFBQTFCQSxTQUEwQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUMvQyxzQkFBTztBQUFLLGFBQVMsRUFBRUQsU0FBaEI7QUFBQSxjQUE0QkM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGRDs7S0FBTUYsVztBQWlCTixJQUFNRyxjQUFjLEdBQUdDLGlFQUFNLENBQUNKLFdBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwyREFJaEIsVUFBQ0ssS0FBRDtBQUFBLFNBQ0FBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNELEtBQUQsRUFBUUUsS0FBUixFQUFrQjtBQUNoQyxXQUFPRixLQUFQLG9CQUNzQkQsS0FBSyxDQUFDSSxPQUFOLENBQWNELEtBQWQsQ0FEdEIsRUFFcUJILEtBQUssQ0FBQ0ksT0FBTixDQUFjRCxLQUFkLENBRnJCLEVBR3NCSCxLQUFLLENBQUNJLE9BQU4sQ0FBY0QsS0FBZCxDQUh0QixFQUlvQkgsS0FBSyxDQUFDSyxPQUFOLENBQWNGLEtBQWQsQ0FKcEIsRUFLdUJILEtBQUssQ0FBQ0ssT0FBTixDQUFjRixLQUFkLENBTHZCLEVBT2VILEtBQUssQ0FBQ00sTUFBTixDQUFhSCxLQUFiLENBUGYsRUFRbUJILEtBQUssQ0FBQ08sTUFBTixDQUFhSixLQUFiLENBUm5CLEVBVVdILEtBQUssQ0FBQ1EsT0FBTixJQUFpQlIsS0FBSyxDQUFDUSxPQUFOLENBQWNMLEtBQWQsQ0FWNUI7QUFZRCxHQWJELENBREE7QUFBQSxDQUpnQixDQUFwQjtNQUFNTCxjOztBQXFCTixJQUFNVyxRQUF5QixHQUFHLFNBQTVCQSxRQUE0QixDQUFDVCxLQUFELEVBQVc7QUFDM0MsTUFBSUEsS0FBSyxDQUFDVSxPQUFOLEtBQWtCLE1BQWxCLElBQTRCLENBQUNWLEtBQUssQ0FBQ1csYUFBdkMsRUFBc0QsT0FBT1gsS0FBSyxDQUFDSCxRQUFiO0FBQ3RELHNCQUFPLHFFQUFDLGNBQUQsb0JBQW9CRyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUhEOztNQUFNUyxRO0FBS1NBLHVFQUFmIiwiZmlsZSI6Ii4vcmFzdGVyL3V0aWxzL3Jlc2V0dGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBSZXNldHRlclRhZyA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNzc01vZGU6IFwiZ3JpZFwiIHwgXCJmbGV4XCI7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBoYXNDaGlsZEJveGVzOiBib29sZWFuO1xuICBndXR0ZXJYOiBzdHJpbmdbXTtcbiAgZ3V0dGVyWTogc3RyaW5nW107XG4gIGFsaWduWDogc3RyaW5nW107XG4gIGFsaWduWTogc3RyaW5nW107XG4gIG1lZGlhOiBhbnlbXTtcbiAgcGFkZGluZz86IHN0cmluZ1tdIHwgbnVtYmVyW107XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IFN0eWxlZFJlc2V0dGVyID0gc3R5bGVkKFJlc2V0dGVyVGFnKTxQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5tZWRpYS5tYXAoKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIG1lZGlhYFxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSArICgke3Byb3BzLmd1dHRlclhbaW5kZXhdfSkpOyAgICAgIFxuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoLSR7cHJvcHMuZ3V0dGVyWFtpbmRleF19IC8gMik7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoLSR7cHJvcHMuZ3V0dGVyWFtpbmRleF19IC8gMik7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKC0ke3Byb3BzLmd1dHRlcllbaW5kZXhdfSAvIDIpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygtJHtwcm9wcy5ndXR0ZXJZW2luZGV4XX0gLyAyKTtcblxuICAgICAgYWxpZ24taXRlbXM6ICR7cHJvcHMuYWxpZ25ZW2luZGV4XX07XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuYWxpZ25YW2luZGV4XX07ICAgIFxuICAgICAgXG4gICAgICBwYWRkaW5nOiAke3Byb3BzLnBhZGRpbmcgJiYgcHJvcHMucGFkZGluZ1tpbmRleF19O1xuICAgIGA7XG4gICAgfSl9XG5gO1xuXG5jb25zdCBSZXNldHRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGlmIChwcm9wcy5jc3NNb2RlID09PSBcImdyaWRcIiB8fCAhcHJvcHMuaGFzQ2hpbGRCb3hlcykgcmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuICByZXR1cm4gPFN0eWxlZFJlc2V0dGVyIHsuLi5wcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXNldHRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./raster/utils/resetter.tsx\n");

/***/ })

})