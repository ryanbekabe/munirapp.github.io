webpackHotUpdate(1,{

/***/ "./components/blog/BlogContent.js":
/*!****************************************!*\
  !*** ./components/blog/BlogContent.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_iobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/iobs */ \"./lib/iobs.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/munirap/Work/personal-blog/components/blog/BlogContent.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar BlogContent = function BlogContent(_ref) {\n  _s();\n\n  var content = _ref.content;\n\n  var _iobs = Object(_lib_iobs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    threshold: 0.25,\n    root: null\n  }),\n      _iobs2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_iobs, 3),\n      observer = _iobs2[0],\n      setElements = _iobs2[1],\n      entries = _iobs2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    document.querySelectorAll(\"pre\").forEach(function (code) {\n      code.classList.add(\"lazy-code\");\n    });\n    var blockCode = Array.from(document.querySelectorAll(\".lazy-code\"));\n    setElements(blockCode);\n  }, [setElements]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        var lazyBlockCode = entry.target;\n        Object(highlight_js__WEBPACK_IMPORTED_MODULE_2__[\"highlightBlock\"])(lazyBlockCode);\n        lazyBlockCode.classList.remove(\"lazy-code\");\n        observer.unobserve(lazyBlockCode);\n      }\n    });\n  }, [entries, observer]);\n  return __jsx(\"div\", {\n    className: \"blog-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: content\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }));\n}; // class BlogContent extends Component {\n//   constructor(props) {\n//     super(props);\n//   }\n//   componentDidMount() {\n//     // document.querySelectorAll(\"pre code\").forEach((block) => {\n//     //   highlightBlock(block);\n//     // });\n//     document.querySelectorAll(\"pre\").forEach((code) => {\n//       code.classList.add(\"lazy-code\");\n//     });\n//     document.querySelectorAll(\"input[type=checkbox]\").forEach((list) => {\n//       list.parentElement.style.listStyle = \"none\";\n//     });\n//   }\n//   render() {\n//     const [observer, setElements, entries] = iobs({\n//       threshold: 0.25,\n//       root: null,\n//     });\n//     const { content } = this.props;\n//     return (\n//       <div className=\"blog-body\">\n//         <div dangerouslySetInnerHTML={{ __html: content }}></div>\n//       </div>\n//     );\n//   }\n// }\n\n\n_s(BlogContent, \"3ubReDTFssvu4DHeldAg55cW/CI=\");\n\n_c = BlogContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogContent);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2cvQmxvZ0NvbnRlbnQuanM/NmQ5NyJdLCJuYW1lcyI6WyJCbG9nQ29udGVudCIsImNvbnRlbnQiLCJpb2JzIiwidGhyZXNob2xkIiwicm9vdCIsIm9ic2VydmVyIiwic2V0RWxlbWVudHMiLCJlbnRyaWVzIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNvZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJibG9ja0NvZGUiLCJBcnJheSIsImZyb20iLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwibGF6eUJsb2NrQ29kZSIsInRhcmdldCIsImhpZ2hsaWdodEJsb2NrIiwicmVtb3ZlIiwidW5vYnNlcnZlIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsY0FDTUMseURBQUksQ0FBQztBQUM1Q0MsYUFBUyxFQUFFLElBRGlDO0FBRTVDQyxRQUFJLEVBQUU7QUFGc0MsR0FBRCxDQURWO0FBQUE7QUFBQSxNQUM1QkMsUUFENEI7QUFBQSxNQUNsQkMsV0FEa0I7QUFBQSxNQUNMQyxPQURLOztBQU1uQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsS0FBMUIsRUFBaUNDLE9BQWpDLENBQXlDLFVBQUNDLElBQUQsRUFBVTtBQUNqREEsVUFBSSxDQUFDQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsV0FBbkI7QUFDRCxLQUZEO0FBR0EsUUFBSUMsU0FBUyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV1IsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixDQUFYLENBQWhCO0FBQ0FKLGVBQVcsQ0FBQ1MsU0FBRCxDQUFYO0FBQ0QsR0FOUSxFQU1OLENBQUNULFdBQUQsQ0FOTSxDQUFUO0FBUUFFLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxXQUFPLENBQUNJLE9BQVIsQ0FBZ0IsVUFBQ08sS0FBRCxFQUFXO0FBQ3pCLFVBQUlBLEtBQUssQ0FBQ0MsY0FBVixFQUEwQjtBQUN4QixZQUFJQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csTUFBMUI7QUFDQUMsMkVBQWMsQ0FBQ0YsYUFBRCxDQUFkO0FBQ0FBLHFCQUFhLENBQUNQLFNBQWQsQ0FBd0JVLE1BQXhCLENBQStCLFdBQS9CO0FBQ0FsQixnQkFBUSxDQUFDbUIsU0FBVCxDQUFtQkosYUFBbkI7QUFDRDtBQUNGLEtBUEQ7QUFRRCxHQVRRLEVBU04sQ0FBQ2IsT0FBRCxFQUFVRixRQUFWLENBVE0sQ0FBVDtBQVdBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSywyQkFBdUIsRUFBRTtBQUFFb0IsWUFBTSxFQUFFeEI7QUFBVixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtELENBOUJELEMsQ0FnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQWpFTUQsVzs7S0FBQUEsVztBQW1FU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jsb2cvQmxvZ0NvbnRlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaGlnaGxpZ2h0QmxvY2sgfSBmcm9tIFwiaGlnaGxpZ2h0LmpzXCI7XG5pbXBvcnQgaW9icyBmcm9tIFwiLi4vLi4vbGliL2lvYnNcIjtcblxuY29uc3QgQmxvZ0NvbnRlbnQgPSAoeyBjb250ZW50IH0pID0+IHtcbiAgY29uc3QgW29ic2VydmVyLCBzZXRFbGVtZW50cywgZW50cmllc10gPSBpb2JzKHtcbiAgICB0aHJlc2hvbGQ6IDAuMjUsXG4gICAgcm9vdDogbnVsbCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicHJlXCIpLmZvckVhY2goKGNvZGUpID0+IHtcbiAgICAgIGNvZGUuY2xhc3NMaXN0LmFkZChcImxhenktY29kZVwiKTtcbiAgICB9KTtcbiAgICBsZXQgYmxvY2tDb2RlID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhenktY29kZVwiKSk7XG4gICAgc2V0RWxlbWVudHMoYmxvY2tDb2RlKTtcbiAgfSwgW3NldEVsZW1lbnRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgbGV0IGxhenlCbG9ja0NvZGUgPSBlbnRyeS50YXJnZXQ7XG4gICAgICAgIGhpZ2hsaWdodEJsb2NrKGxhenlCbG9ja0NvZGUpO1xuICAgICAgICBsYXp5QmxvY2tDb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJsYXp5LWNvZGVcIik7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShsYXp5QmxvY2tDb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW2VudHJpZXMsIG9ic2VydmVyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctYm9keVwiPlxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQgfX0+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBjbGFzcyBCbG9nQ29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpO1xuLy8gICB9XG5cbi8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4vLyAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInByZSBjb2RlXCIpLmZvckVhY2goKGJsb2NrKSA9PiB7XG4vLyAgICAgLy8gICBoaWdobGlnaHRCbG9jayhibG9jayk7XG4vLyAgICAgLy8gfSk7XG5cbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicHJlXCIpLmZvckVhY2goKGNvZGUpID0+IHtcbi8vICAgICAgIGNvZGUuY2xhc3NMaXN0LmFkZChcImxhenktY29kZVwiKTtcbi8vICAgICB9KTtcblxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKS5mb3JFYWNoKChsaXN0KSA9PiB7XG4vLyAgICAgICBsaXN0LnBhcmVudEVsZW1lbnQuc3R5bGUubGlzdFN0eWxlID0gXCJub25lXCI7XG4vLyAgICAgfSk7XG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgY29uc3QgW29ic2VydmVyLCBzZXRFbGVtZW50cywgZW50cmllc10gPSBpb2JzKHtcbi8vICAgICAgIHRocmVzaG9sZDogMC4yNSxcbi8vICAgICAgIHJvb3Q6IG51bGwsXG4vLyAgICAgfSk7XG5cbi8vICAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMucHJvcHM7XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWJvZHlcIj5cbi8vICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQgfX0+PC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dDb250ZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/blog/BlogContent.js\n");

/***/ })

})