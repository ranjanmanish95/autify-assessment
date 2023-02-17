webpackHotUpdate_N_E("pages/index",{

/***/ "./components/repositories/RepoList.js":
/*!*********************************************!*\
  !*** ./components/repositories/RepoList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RepoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RepoItem */ "./components/repositories/RepoItem.js");
/* harmony import */ var _RepoList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RepoList.module.css */ "./components/repositories/RepoList.module.css");
/* harmony import */ var _RepoList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RepoList_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\ranja\\Downloads\\autify-assessment\\components\\repositories\\RepoList.js",
    _s = $RefreshSig$();





function RepoList(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      query = _useState[0],
      setQuery = _useState[1];

  console.log(props.repos.filter(function (repo) {
    repo.name === query;
  }));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      placeholder: "Search your repository by name",
      className: _RepoList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.search,
      onChange: function onChange(e) {
        return setQuery(e.target.value);
      },
      value: query
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _RepoList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
      children: props.repos.map(function (repo) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RepoItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
          id: repo.id,
          image: "https://pngimg.com/uploads/github/github_PNG28.png",
          name: repo.name,
          url: repo.url
        }, repo.id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(RepoList, "PNEVuHGtnYn3je/EAJ61GECte4U=");

_c = RepoList;
/* harmony default export */ __webpack_exports__["default"] = (RepoList);

var _c;

$RefreshReg$(_c, "RepoList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXBvc2l0b3JpZXMvUmVwb0xpc3QuanMiXSwibmFtZXMiOlsiUmVwb0xpc3QiLCJwcm9wcyIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJyZXBvcyIsImZpbHRlciIsInJlcG8iLCJuYW1lIiwiY2xhc3NlcyIsInNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxpc3QiLCJtYXAiLCJpZCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDaEJDLEtBRGdCO0FBQUEsTUFDVkMsUUFEVTs7QUFFdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixVQUFDQyxJQUFELEVBQVE7QUFDckNBLFFBQUksQ0FBQ0MsSUFBTCxLQUFjUCxLQUFkO0FBQ0QsR0FGVyxDQUFaO0FBR0Esc0JBQ0U7QUFBQSw0QkFDQTtBQUNBLFVBQUksRUFBQyxNQURMO0FBRUEsaUJBQVcsRUFBQyxnQ0FGWjtBQUdBLGVBQVMsRUFBRVEsMkRBQU8sQ0FBQ0MsTUFIbkI7QUFJQSxjQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxlQUFLVCxRQUFRLENBQUNTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQSxPQUpWO0FBS0EsV0FBSyxFQUFFWjtBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQU9BO0FBQUksZUFBUyxFQUFFUSwyREFBTyxDQUFDSyxJQUF2QjtBQUFBLGdCQUNHZixLQUFLLENBQUNNLEtBQU4sQ0FBWVUsR0FBWixDQUFnQixVQUFDUixJQUFEO0FBQUEsNEJBQ2YscUVBQUMsaURBQUQ7QUFFRSxZQUFFLEVBQUVBLElBQUksQ0FBQ1MsRUFGWDtBQUdFLGVBQUssRUFBQyxvREFIUjtBQUlFLGNBQUksRUFBRVQsSUFBSSxDQUFDQyxJQUpiO0FBS0UsYUFBRyxFQUFFRCxJQUFJLENBQUNVO0FBTFosV0FDT1YsSUFBSSxDQUFDUyxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQQTtBQUFBLGtCQURGO0FBcUJEOztHQTFCUWxCLFE7O0tBQUFBLFE7QUE0Qk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdlYWVhNjgwNGMyYTQzMTg1MzNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVwb0l0ZW0gZnJvbSAnLi9SZXBvSXRlbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1JlcG9MaXN0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBSZXBvTGlzdChwcm9wcykge1xuICBjb25zdCBbcXVlcnksc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xuICBjb25zb2xlLmxvZyhwcm9wcy5yZXBvcy5maWx0ZXIoKHJlcG8pPT57XG4gICAgcmVwby5uYW1lID09PSBxdWVyeTtcbiAgfSkpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aW5wdXQgXG4gICAgdHlwZT0ndGV4dCcgXG4gICAgcGxhY2Vob2xkZXI9J1NlYXJjaCB5b3VyIHJlcG9zaXRvcnkgYnkgbmFtZScgXG4gICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0gXG4gICAgb25DaGFuZ2U9eyhlKT0+c2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgIHZhbHVlPXtxdWVyeX0vPlxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICB7cHJvcHMucmVwb3MubWFwKChyZXBvKSA9PiAoXG4gICAgICAgIDxSZXBvSXRlbVxuICAgICAgICAgIGtleT17cmVwby5pZH1cbiAgICAgICAgICBpZD17cmVwby5pZH1cbiAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vcG5naW1nLmNvbS91cGxvYWRzL2dpdGh1Yi9naXRodWJfUE5HMjgucG5nXCJcbiAgICAgICAgICBuYW1lPXtyZXBvLm5hbWV9XG4gICAgICAgICAgdXJsPXtyZXBvLnVybH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9MaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==