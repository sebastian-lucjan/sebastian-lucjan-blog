"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_comments_Disqus_js"],{

/***/ "./components/comments/Disqus.js":
/*!***************************************!*\
  !*** ./components/comments/Disqus.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/siteMetadata */ \"./data/siteMetadata.js\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/sebastian-lucjan/Code/blog/components/comments/Disqus.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Disqus = function Disqus(_ref) {\n  _s();\n\n  var frontMatter = _ref.frontMatter;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      enableLoadComments = _useState[0],\n      setEnabledLoadComments = _useState[1];\n\n  var COMMENTS_ID = 'disqus_thread';\n\n  function LoadComments() {\n    setEnabledLoadComments(false);\n\n    window.disqus_config = function () {\n      this.page.url = window.location.href;\n      this.page.identifier = frontMatter.slug;\n    };\n\n    if (window.DISQUS === undefined) {\n      var script = document.createElement('script');\n      script.src = 'https://' + (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.disqus.shortname) + '.disqus.com/embed.js';\n      script.setAttribute('data-timestamp', +new Date());\n      script.setAttribute('crossorigin', 'anonymous');\n      script.async = true;\n      document.body.appendChild(script);\n    } else {\n      window.DISQUS.reset({\n        reload: true\n      });\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300\",\n    children: [enableLoadComments && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      onClick: LoadComments,\n      children: \"Load Comments\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 30\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"disqus-frame\",\n      id: COMMENTS_ID\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Disqus, \"dfMgWeNM1bRlPC8jqT+DpE1ITEA=\");\n\n_c = Disqus;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Disqus);\n\nvar _c;\n\n$RefreshReg$(_c, \"Disqus\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1lbnRzL0Rpc3F1cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOzs7QUFFQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFxQjtBQUFBOztBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQ2xDLGtCQUFxREgsK0NBQVEsQ0FBQyxJQUFELENBQTdEO0FBQUEsTUFBT0ksa0JBQVA7QUFBQSxNQUEyQkMsc0JBQTNCOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxlQUFwQjs7QUFFQSxXQUFTQyxZQUFULEdBQXdCO0FBQ3RCRixJQUFBQSxzQkFBc0IsQ0FBQyxLQUFELENBQXRCOztBQUVBRyxJQUFBQSxNQUFNLENBQUNDLGFBQVAsR0FBdUIsWUFBWTtBQUNqQyxXQUFLQyxJQUFMLENBQVVDLEdBQVYsR0FBZ0JILE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkMsSUFBaEM7QUFDQSxXQUFLSCxJQUFMLENBQVVJLFVBQVYsR0FBdUJYLFdBQVcsQ0FBQ1ksSUFBbkM7QUFDRCxLQUhEOztBQUlBLFFBQUlQLE1BQU0sQ0FBQ1EsTUFBUCxLQUFrQkMsU0FBdEIsRUFBaUM7QUFDL0IsVUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRixNQUFBQSxNQUFNLENBQUNHLEdBQVAsR0FBYSxhQUFhcEIsb0ZBQWIsR0FBcUQsc0JBQWxFO0FBQ0FpQixNQUFBQSxNQUFNLENBQUNPLFlBQVAsQ0FBb0IsZ0JBQXBCLEVBQXNDLENBQUMsSUFBSUMsSUFBSixFQUF2QztBQUNBUixNQUFBQSxNQUFNLENBQUNPLFlBQVAsQ0FBb0IsYUFBcEIsRUFBbUMsV0FBbkM7QUFDQVAsTUFBQUEsTUFBTSxDQUFDUyxLQUFQLEdBQWUsSUFBZjtBQUNBUixNQUFBQSxRQUFRLENBQUNTLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlgsTUFBMUI7QUFDRCxLQVBELE1BT087QUFDTFYsTUFBQUEsTUFBTSxDQUFDUSxNQUFQLENBQWNjLEtBQWQsQ0FBb0I7QUFBRUMsUUFBQUEsTUFBTSxFQUFFO0FBQVYsT0FBcEI7QUFDRDtBQUNGOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFDLHdEQUFmO0FBQUEsZUFDRzNCLGtCQUFrQixpQkFBSTtBQUFRLGFBQU8sRUFBRUcsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEekIsZUFFRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQThCLFFBQUUsRUFBRUQ7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0E5QkQ7O0dBQU1KOztLQUFBQTtBQWdDTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1lbnRzL0Rpc3F1cy5qcz82N2VlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc2l0ZU1ldGFkYXRhIGZyb20gJ0AvZGF0YS9zaXRlTWV0YWRhdGEnXG5cbmNvbnN0IERpc3F1cyA9ICh7IGZyb250TWF0dGVyIH0pID0+IHtcbiAgY29uc3QgW2VuYWJsZUxvYWRDb21tZW50cywgc2V0RW5hYmxlZExvYWRDb21tZW50c10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IENPTU1FTlRTX0lEID0gJ2Rpc3F1c190aHJlYWQnXG5cbiAgZnVuY3Rpb24gTG9hZENvbW1lbnRzKCkge1xuICAgIHNldEVuYWJsZWRMb2FkQ29tbWVudHMoZmFsc2UpXG5cbiAgICB3aW5kb3cuZGlzcXVzX2NvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucGFnZS51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgICAgdGhpcy5wYWdlLmlkZW50aWZpZXIgPSBmcm9udE1hdHRlci5zbHVnXG4gICAgfVxuICAgIGlmICh3aW5kb3cuRElTUVVTID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vJyArIHNpdGVNZXRhZGF0YS5jb21tZW50LmRpc3F1cy5zaG9ydG5hbWUgKyAnLmRpc3F1cy5jb20vZW1iZWQuanMnXG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLXRpbWVzdGFtcCcsICtuZXcgRGF0ZSgpKVxuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCAnYW5vbnltb3VzJylcbiAgICAgIHNjcmlwdC5hc3luYyA9IHRydWVcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuRElTUVVTLnJlc2V0KHsgcmVsb2FkOiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgcGItNiB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAge2VuYWJsZUxvYWRDb21tZW50cyAmJiA8YnV0dG9uIG9uQ2xpY2s9e0xvYWRDb21tZW50c30+TG9hZCBDb21tZW50czwvYnV0dG9uPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcXVzLWZyYW1lXCIgaWQ9e0NPTU1FTlRTX0lEfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpc3F1c1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzaXRlTWV0YWRhdGEiLCJEaXNxdXMiLCJmcm9udE1hdHRlciIsImVuYWJsZUxvYWRDb21tZW50cyIsInNldEVuYWJsZWRMb2FkQ29tbWVudHMiLCJDT01NRU5UU19JRCIsIkxvYWRDb21tZW50cyIsIndpbmRvdyIsImRpc3F1c19jb25maWciLCJwYWdlIiwidXJsIiwibG9jYXRpb24iLCJocmVmIiwiaWRlbnRpZmllciIsInNsdWciLCJESVNRVVMiLCJ1bmRlZmluZWQiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJjb21tZW50IiwiZGlzcXVzIiwic2hvcnRuYW1lIiwic2V0QXR0cmlidXRlIiwiRGF0ZSIsImFzeW5jIiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVzZXQiLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/comments/Disqus.js\n");

/***/ })

}]);