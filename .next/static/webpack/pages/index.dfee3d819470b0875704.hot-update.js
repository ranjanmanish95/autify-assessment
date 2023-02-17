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
    return repo.name.toLowerString().includes(query);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXBvc2l0b3JpZXMvUmVwb0xpc3QuanMiXSwibmFtZXMiOlsiUmVwb0xpc3QiLCJwcm9wcyIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJyZXBvcyIsImZpbHRlciIsInJlcG8iLCJuYW1lIiwidG9Mb3dlclN0cmluZyIsImluY2x1ZGVzIiwiY2xhc3NlcyIsInNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxpc3QiLCJtYXAiLCJpZCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDaEJDLEtBRGdCO0FBQUEsTUFDVkMsUUFEVTs7QUFFdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixVQUFDQyxJQUFELEVBQVE7QUFDdEMsV0FBT0EsSUFBSSxDQUFDQyxJQUFMLENBQVVDLGFBQVYsR0FBMEJDLFFBQTFCLENBQW1DVCxLQUFuQyxDQUFQO0FBQ0EsR0FGVyxDQUFaO0FBR0Esc0JBQ0U7QUFBQSw0QkFDQTtBQUNBLFVBQUksRUFBQyxNQURMO0FBRUEsaUJBQVcsRUFBQyxnQ0FGWjtBQUdBLGVBQVMsRUFBRVUsMkRBQU8sQ0FBQ0MsTUFIbkI7QUFJQSxjQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxlQUFLWCxRQUFRLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQSxPQUpWO0FBS0EsV0FBSyxFQUFFZDtBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQU9BO0FBQUksZUFBUyxFQUFFVSwyREFBTyxDQUFDSyxJQUF2QjtBQUFBLGdCQUNHakIsS0FBSyxDQUFDTSxLQUFOLENBQVlZLEdBQVosQ0FBZ0IsVUFBQ1YsSUFBRDtBQUFBLDRCQUNmLHFFQUFDLGlEQUFEO0FBRUUsWUFBRSxFQUFFQSxJQUFJLENBQUNXLEVBRlg7QUFHRSxlQUFLLEVBQUMsb0RBSFI7QUFJRSxjQUFJLEVBQUVYLElBQUksQ0FBQ0MsSUFKYjtBQUtFLGFBQUcsRUFBRUQsSUFBSSxDQUFDWTtBQUxaLFdBQ09aLElBQUksQ0FBQ1csRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEE7QUFBQSxrQkFERjtBQXFCRDs7R0ExQlFwQixROztLQUFBQSxRO0FBNEJNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZmVlM2Q4MTk0NzBiMDg3NTcwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcG9JdGVtIGZyb20gJy4vUmVwb0l0ZW0nO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9SZXBvTGlzdC5tb2R1bGUuY3NzJztcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gUmVwb0xpc3QocHJvcHMpIHtcbiAgY29uc3QgW3F1ZXJ5LHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc29sZS5sb2cocHJvcHMucmVwb3MuZmlsdGVyKChyZXBvKT0+e1xuICAgcmV0dXJuIHJlcG8ubmFtZS50b0xvd2VyU3RyaW5nKCkuaW5jbHVkZXMocXVlcnkpO1xuICB9KSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxpbnB1dCBcbiAgICB0eXBlPSd0ZXh0JyBcbiAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIHlvdXIgcmVwb3NpdG9yeSBieSBuYW1lJyBcbiAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofSBcbiAgICBvbkNoYW5nZT17KGUpPT5zZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgdmFsdWU9e3F1ZXJ5fS8+XG4gICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgIHtwcm9wcy5yZXBvcy5tYXAoKHJlcG8pID0+IChcbiAgICAgICAgPFJlcG9JdGVtXG4gICAgICAgICAga2V5PXtyZXBvLmlkfVxuICAgICAgICAgIGlkPXtyZXBvLmlkfVxuICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9wbmdpbWcuY29tL3VwbG9hZHMvZ2l0aHViL2dpdGh1Yl9QTkcyOC5wbmdcIlxuICAgICAgICAgIG5hbWU9e3JlcG8ubmFtZX1cbiAgICAgICAgICB1cmw9e3JlcG8udXJsfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVwb0xpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9