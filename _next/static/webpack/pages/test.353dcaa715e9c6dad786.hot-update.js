webpackHotUpdate_N_E("pages/test",{

/***/ "./pages/test.tsx":
/*!************************!*\
  !*** ./pages/test.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _raster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../raster */ \"./raster/index.ts\");\n\n\nvar _jsxFileName = \"/Users/andreasfaust/components/react-raster/pages/test.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar ImageBox = function ImageBox() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_2__[\"Box\"] // top={0.5}\n  // left={0.5}\n  , {\n    cols: 2,\n    alignY: \"center\",\n    onClick: function onClick() {\n      console.log(\"HALLO!\");\n    },\n    style: \"\\n      background: pink;\\n      height: 300px;\\n\\n      img {\\n        display: block;\\n        width: 100%;\\n      }\\n    \"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = ImageBox;\n\nvar Testpage = function Testpage(props) {\n  _s();\n\n  var boxRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();\n  var gridRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {// console.log(boxRef.current);\n    // console.log(gridRef.current);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    tag: \"section\",\n    breakpoints: [0, 500, 768, 1024, 1200, 1400],\n    left: \"1.5vw\",\n    right: \"3vw\",\n    top: \"10vw\",\n    bottom: \"20vw\",\n    gutterX: [\"0px\", \"0px\", \"1.5vw\"] // gutterY={\"3vw\"}\n    ,\n    colspan: 12,\n    alignX: \"center\" // alignY={\"center\"}\n    ,\n    control: true // styleOuter={`width: 80%;`}\n    ,\n    style: \"\\n        background: blue;\\n        &.bp-768 {\\n          // background: black;\\n        }\\n      \",\n    cssMode: \"flex\",\n    ref: gridRef,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_2__[\"Box\"] // ref={boxRef}\n    , {\n      className: \"Box--2\",\n      tag: \"a\",\n      cols: [4],\n      left: [0],\n      alignX: \"center\",\n      style: \"\\n            background: pink;\\n            height: 200px;\\n          \",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Hall!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Testpage, \"+hKORm3PB9qcbpDrqbrvDvno3RM=\");\n\n_c2 = Testpage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testpage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ImageBox\");\n$RefreshReg$(_c2, \"Testpage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC50c3g/NTRlMSJdLCJuYW1lcyI6WyJJbWFnZUJveCIsImNvbnNvbGUiLCJsb2ciLCJUZXN0cGFnZSIsInByb3BzIiwiYm94UmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJncmlkUmVmIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsc0JBQ2YscUVBQUMsMkNBQUQsQ0FDRTtBQUNBO0FBRkY7QUFHRSxRQUFJLEVBQUUsQ0FIUjtBQUlFLFVBQU0sRUFBRSxRQUpWO0FBS0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDRCxLQVBIO0FBUUUsU0FBSztBQVJQO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEZTtBQUFBLENBQWpCOztLQUFNRixROztBQXlCTixJQUFNRyxRQUF5QixHQUFHLFNBQTVCQSxRQUE0QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDM0MsTUFBTUMsTUFBTSxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLEVBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLDRDQUFLLENBQUNDLE1BQU4sRUFBaEI7QUFFQUQsOENBQUssQ0FBQ0csU0FBTixDQUFnQixZQUFNLENBQ3BCO0FBQ0E7QUFDRCxHQUhELEVBR0csRUFISDtBQUtBLHNCQUNFLHFFQUFDLDRDQUFEO0FBQ0UsT0FBRyxFQUFDLFNBRE47QUFFRSxlQUFXLEVBQUUsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLElBQTFCLENBRmY7QUFHRSxRQUFJLEVBQUUsT0FIUjtBQUlFLFNBQUssRUFBRSxLQUpUO0FBS0UsT0FBRyxFQUFFLE1BTFA7QUFNRSxVQUFNLEVBQUUsTUFOVjtBQU9FLFdBQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsT0FBZixDQVBYLENBUUU7QUFSRjtBQVNFLFdBQU8sRUFBRSxFQVRYO0FBVUUsVUFBTSxFQUFFLFFBVlYsQ0FXRTtBQVhGO0FBWUUsV0FBTyxNQVpULENBYUU7QUFiRjtBQWNFLFNBQUssdUdBZFA7QUFvQkUsV0FBTyxFQUFDLE1BcEJWO0FBcUJFLE9BQUcsRUFBRUQsT0FyQlA7QUFBQSwyQkF3QkUscUVBQUMsMkNBQUQsQ0FDRTtBQURGO0FBRUUsZUFBUyxFQUFDLFFBRlo7QUFHRSxTQUFHLEVBQUMsR0FITjtBQUlFLFVBQUksRUFBRSxDQUFDLENBQUQsQ0FKUjtBQUtFLFVBQUksRUFBRSxDQUFDLENBQUQsQ0FMUjtBQU1FLFlBQU0sRUFBQyxRQU5UO0FBT0UsV0FBSywyRUFQUDtBQUFBLDZCQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRkQsQ0F6RkQ7O0dBQU1MLFE7O01BQUFBLFE7QUEyRlNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGVzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBHcmlkLCBCb3ggfSBmcm9tIFwiLi4vcmFzdGVyXCI7XG5cbmNvbnN0IEltYWdlQm94ID0gKCkgPT4gKFxuICA8Qm94XG4gICAgLy8gdG9wPXswLjV9XG4gICAgLy8gbGVmdD17MC41fVxuICAgIGNvbHM9ezJ9XG4gICAgYWxpZ25ZPXtcImNlbnRlclwifVxuICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSEFMTE8hXCIpO1xuICAgIH19XG4gICAgc3R5bGU9e2BcbiAgICAgIGJhY2tncm91bmQ6IHBpbms7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYH1cbiAgPlxuICAgIHsvKiA8aW1nIHNyYz17aW1hZ2UyfSBhbHQ9J1NhbXBsZSBJbWFnZScgLz4gKi99XG4gIDwvQm94PlxuKTtcblxuaW50ZXJmYWNlIFByb3BzIHt9XG5cbmNvbnN0IFRlc3RwYWdlOiBOZXh0UGFnZTxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgYm94UmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IGdyaWRSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGJveFJlZi5jdXJyZW50KTtcbiAgICAvLyBjb25zb2xlLmxvZyhncmlkUmVmLmN1cnJlbnQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZFxuICAgICAgdGFnPVwic2VjdGlvblwiXG4gICAgICBicmVha3BvaW50cz17WzAsIDUwMCwgNzY4LCAxMDI0LCAxMjAwLCAxNDAwXX1cbiAgICAgIGxlZnQ9e1wiMS41dndcIn1cbiAgICAgIHJpZ2h0PXtcIjN2d1wifVxuICAgICAgdG9wPXtcIjEwdndcIn1cbiAgICAgIGJvdHRvbT17XCIyMHZ3XCJ9XG4gICAgICBndXR0ZXJYPXtbXCIwcHhcIiwgXCIwcHhcIiwgXCIxLjV2d1wiXX1cbiAgICAgIC8vIGd1dHRlclk9e1wiM3Z3XCJ9XG4gICAgICBjb2xzcGFuPXsxMn1cbiAgICAgIGFsaWduWD17XCJjZW50ZXJcIn1cbiAgICAgIC8vIGFsaWduWT17XCJjZW50ZXJcIn1cbiAgICAgIGNvbnRyb2xcbiAgICAgIC8vIHN0eWxlT3V0ZXI9e2B3aWR0aDogODAlO2B9XG4gICAgICBzdHlsZT17YFxuICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgICAmLmJwLTc2OCB7XG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICBjc3NNb2RlPVwiZmxleFwiXG4gICAgICByZWY9e2dyaWRSZWZ9XG4gICAgPlxuICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+ICovfVxuICAgICAgPEJveFxuICAgICAgICAvLyByZWY9e2JveFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwiQm94LS0yXCJcbiAgICAgICAgdGFnPVwiYVwiXG4gICAgICAgIGNvbHM9e1s0XX1cbiAgICAgICAgbGVmdD17WzBdfVxuICAgICAgICBhbGlnblg9XCJjZW50ZXJcIlxuICAgICAgICBzdHlsZT17YFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcGluaztcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPGgxPkhhbGwhPC9oMT5cbiAgICAgICAgey8qIDxCb3ggY29scz17Mn0gdGFnPVwiaDJcIiBjbGFzc05hbWU9XCJCb3gtLTNcIj5cbiAgICAgICAgICAgIEhhbGxvIVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggY29scz17Mn0gdGFnPVwiaDJcIiBjbGFzc05hbWU9XCJCb3gtLTRcIj5cbiAgICAgICAgICAgIEhhbGxvIVxuICAgICAgICAgIDwvQm94PiAqL31cbiAgICAgIDwvQm94PlxuICAgICAgey8qIDwvTGluaz4gKi99XG4gICAgICB7LyogPEJveFxuICAgICAgICByZWY9e2JveFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwiQm94LS0xXCJcbiAgICAgICAgY29scz17WzRdfVxuICAgICAgICBsZWZ0PXtbMl19XG4gICAgICAgIHJpZ2h0PXtbMV19XG4gICAgICAgIGFsaWduWT1cImNlbnRlclwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkhBTExPIVwiKTtcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e2BcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgICAgICAgXG4gICAgICAgICAgLmJwLTc2OCAmJiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxJbWFnZUJveCAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgY2xhc3NOYW1lPVwiQm94LS0zXCJcbiAgICAgICAgICBjb2xzPXtbMV19XG4gICAgICAgICAgbGVmdD17WzFdfVxuICAgICAgICAgIGFsaWduWT1cImNlbnRlclwiXG4gICAgICAgICAgc3R5bGU9e2BcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICBgfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+ICovfVxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RwYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.tsx\n");

/***/ })

})