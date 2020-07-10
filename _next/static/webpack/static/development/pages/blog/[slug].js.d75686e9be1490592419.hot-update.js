webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_general_BlogHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/general/BlogHeader */ \"./components/general/BlogHeader.js\");\n/* harmony import */ var _components_general_GeneralFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/general/GeneralFooter */ \"./components/general/GeneralFooter.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/munirap/Work/personal-blog/pages/blog/[slug].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar BlogDetail = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(BlogDetail, _Component);\n\n  var _super = _createSuper(BlogDetail);\n\n  function BlogDetail(props) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, BlogDetail);\n\n    return _super.call(this, props);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(BlogDetail, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.querySelectorAll(\"pre code\").forEach(function (block) {\n        highlight_js__WEBPACK_IMPORTED_MODULE_7___default.a.highlightBlock(block);\n      });\n      document.querySelectorAll(\"input[type=checkbox]\").forEach(function (list) {\n        list.parentElement.style.listStyle = \"none\";\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          content = _this$props.content,\n          meta = _this$props.meta;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 7\n        }\n      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }\n      }, meta.title), __jsx(\"meta\", {\n        name: \"author\",\n        content: meta.author,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        name: \"og:url\",\n        content: \"https://munirapp.github.io/blog/\".concat(meta.date).concat(meta.slug),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        name: \"description\",\n        content: meta.desc,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        name: \"og:title\",\n        content: meta.title,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        name: \"og:description\",\n        content: meta.desc,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        name: \"og:image\",\n        content: meta.image,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }\n      })), __jsx(_components_general_BlogHeader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        linkBack: \"/blog\",\n        textBack: \"Back to Blog\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        className: \"blog-wrapper\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"blog-header\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: \"title\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }\n      }, meta.title), __jsx(\"div\", {\n        className: \"desc\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }\n      }, \"Author: \", meta.author, \" | Date: \", meta.date), __jsx(\"img\", {\n        src: meta.image,\n        alt: meta.title,\n        className: \"animate__animated animate__zoomIn\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }\n      })), __jsx(\"div\", {\n        className: \"container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: \"blog-body\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        dangerouslySetInnerHTML: {\n          __html: content\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 15\n        }\n      })))), __jsx(_components_general_GeneralFooter__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return BlogDetail;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDetail);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS5qcz8yOTM0Il0sIm5hbWVzIjpbIkJsb2dEZXRhaWwiLCJwcm9wcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJibG9jayIsImhsanMiLCJoaWdobGlnaHRCbG9jayIsImxpc3QiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJsaXN0U3R5bGUiLCJjb250ZW50IiwibWV0YSIsInRpdGxlIiwiYXV0aG9yIiwiZGF0ZSIsInNsdWciLCJkZXNjIiwiaW1hZ2UiLCJfX2h0bWwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFFQTtBQUNBOztJQUVNQSxVOzs7OztBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1hBLEtBRFc7QUFFbEI7Ozs7d0NBRW1CO0FBQ2xCQyxjQUFRLENBQUNDLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDQyxPQUF0QyxDQUE4QyxVQUFDQyxLQUFELEVBQVc7QUFDdkRDLDJEQUFJLENBQUNDLGNBQUwsQ0FBb0JGLEtBQXBCO0FBQ0QsT0FGRDtBQUlBSCxjQUFRLENBQUNDLGdCQUFULENBQTBCLHNCQUExQixFQUFrREMsT0FBbEQsQ0FBMEQsVUFBQ0ksSUFBRCxFQUFVO0FBQ2xFQSxZQUFJLENBQUNDLGFBQUwsQ0FBbUJDLEtBQW5CLENBQXlCQyxTQUF6QixHQUFxQyxNQUFyQztBQUNELE9BRkQ7QUFHRDs7OzZCQUVRO0FBQUEsd0JBQ21CLEtBQUtWLEtBRHhCO0FBQUEsVUFDQ1csT0FERCxlQUNDQSxPQUREO0FBQUEsVUFDVUMsSUFEVixlQUNVQSxJQURWO0FBR1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFRQSxJQUFJLENBQUNDLEtBQWIsQ0FERixFQUVFO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBb0IsZUFBTyxFQUFFRCxJQUFJLENBQUNFLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixFQUdFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFPLDRDQUFxQ0YsSUFBSSxDQUFDRyxJQUExQyxTQUFpREgsSUFBSSxDQUFDSSxJQUF0RCxDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixFQU9FO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFSixJQUFJLENBQUNLLElBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQRixFQVFFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFFTCxJQUFJLENBQUNDLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSRixFQVNFO0FBQU0sWUFBSSxFQUFDLGdCQUFYO0FBQTRCLGVBQU8sRUFBRUQsSUFBSSxDQUFDSyxJQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEYsRUFVRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBRUwsSUFBSSxDQUFDTSxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVkYsQ0FERixFQWNFLE1BQUMsc0VBQUQ7QUFBWSxnQkFBUSxFQUFDLE9BQXJCO0FBQTZCLGdCQUFRLEVBQUMsY0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWRGLEVBZ0JFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF3Qk4sSUFBSSxDQUFDQyxLQUE3QixDQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDV0QsSUFBSSxDQUFDRSxNQURoQixlQUNpQ0YsSUFBSSxDQUFDRyxJQUR0QyxDQUZGLEVBS0U7QUFDRSxXQUFHLEVBQUVILElBQUksQ0FBQ00sS0FEWjtBQUVFLFdBQUcsRUFBRU4sSUFBSSxDQUFDQyxLQUZaO0FBR0UsaUJBQVMsRUFBQyxtQ0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEYsQ0FERixFQVlFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSywrQkFBdUIsRUFBRTtBQUFFTSxnQkFBTSxFQUFFUjtBQUFWLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLENBWkYsQ0FoQkYsRUFtQ0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbkNGLENBREY7QUF1Q0Q7Ozs7RUF6RHNCUywrQzs7O0FBcUZWckIseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgbWFya2VkIGZyb20gXCJtYXJrZWRcIjtcbmltcG9ydCBobGpzIGZyb20gXCJoaWdobGlnaHQuanNcIjtcblxuaW1wb3J0IEJsb2dIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9CbG9nSGVhZGVyXCI7XG5pbXBvcnQgR2VuZXJhbEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsL0dlbmVyYWxGb290ZXJcIjtcblxuY2xhc3MgQmxvZ0RldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInByZSBjb2RlXCIpLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKS5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICBsaXN0LnBhcmVudEVsZW1lbnQuc3R5bGUubGlzdFN0eWxlID0gXCJub25lXCI7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250ZW50LCBtZXRhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57bWV0YS50aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PXttZXRhLmF1dGhvcn0gLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cIm9nOnVybFwiXG4gICAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly9tdW5pcmFwcC5naXRodWIuaW8vYmxvZy8ke21ldGEuZGF0ZX0ke21ldGEuc2x1Z31gfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YS5kZXNjfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e21ldGEudGl0bGV9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YS5kZXNjfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e21ldGEuaW1hZ2V9IC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8QmxvZ0hlYWRlciBsaW5rQmFjaz1cIi9ibG9nXCIgdGV4dEJhY2s9XCJCYWNrIHRvIEJsb2dcIiAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnttZXRhLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+XG4gICAgICAgICAgICAgIEF1dGhvcjoge21ldGEuYXV0aG9yfSB8IERhdGU6IHttZXRhLmRhdGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXttZXRhLmltYWdlfVxuICAgICAgICAgICAgICBhbHQ9e21ldGEudGl0bGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudCB9fT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8R2VuZXJhbEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoXCJkYXRhL2FydGlrZWxcIik7XG4gIGNvbnN0IHBhdGhzID0gZmlsZXMubWFwKChpdGVtKSA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgc2x1ZzogaXRlbS5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpLFxuICAgIH0sXG4gIH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pID0+IHtcbiAgY29uc3QgcmF3TWFya0Rvd24gPSBmc1xuICAgIC5yZWFkRmlsZVN5bmMocGF0aC5qb2luKFwiZGF0YS9hcnRpa2VsXCIsIGAke3NsdWd9Lm1kYCkpXG4gICAgLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHBhcnNlTWFya0Rvd24gPSBtYXR0ZXIocmF3TWFya0Rvd24pO1xuICBjb25zdCBodG1sU3RyaW5nID0gbWFya2VkKHBhcnNlTWFya0Rvd24uY29udGVudCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBzbHVnLCBjb250ZW50OiBodG1sU3RyaW5nLCBtZXRhOiBwYXJzZU1hcmtEb3duLmRhdGEgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dEZXRhaWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ })

})