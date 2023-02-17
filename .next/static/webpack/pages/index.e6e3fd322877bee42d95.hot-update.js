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
    return repo.name.includes(query);
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
      children: props.repos.filter(function (repo) {
        return repo.name.includes(query);
      }).map(function (repo) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXBvc2l0b3JpZXMvUmVwb0xpc3QuanMiXSwibmFtZXMiOlsiUmVwb0xpc3QiLCJwcm9wcyIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJyZXBvcyIsImZpbHRlciIsInJlcG8iLCJuYW1lIiwiaW5jbHVkZXMiLCJjbGFzc2VzIiwic2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwibGlzdCIsIm1hcCIsImlkIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUNoQkMsS0FEZ0I7QUFBQSxNQUNWQyxRQURVOztBQUV2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxNQUFaLENBQW1CLFVBQUNDLElBQUQsRUFBUTtBQUN0QyxXQUFPQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsUUFBVixDQUFtQlIsS0FBbkIsQ0FBUDtBQUNBLEdBRlcsQ0FBWjtBQUdBLHNCQUNFO0FBQUEsNEJBQ0E7QUFDQSxVQUFJLEVBQUMsTUFETDtBQUVBLGlCQUFXLEVBQUMsZ0NBRlo7QUFHQSxlQUFTLEVBQUVTLDJEQUFPLENBQUNDLE1BSG5CO0FBSUEsY0FBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsZUFBS1YsUUFBUSxDQUFDVSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUEsT0FKVjtBQUtBLFdBQUssRUFBRWI7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFPQTtBQUFJLGVBQVMsRUFBRVMsMkRBQU8sQ0FBQ0ssSUFBdkI7QUFBQSxnQkFDR2hCLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxNQUFaLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxlQUFRQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsUUFBVixDQUFtQlIsS0FBbkIsQ0FBUjtBQUFBLE9BQW5CLEVBQXNEZSxHQUF0RCxDQUEwRCxVQUFDVCxJQUFEO0FBQUEsNEJBQ3pELHFFQUFDLGlEQUFEO0FBRUUsWUFBRSxFQUFFQSxJQUFJLENBQUNVLEVBRlg7QUFHRSxlQUFLLEVBQUMsb0RBSFI7QUFJRSxjQUFJLEVBQUVWLElBQUksQ0FBQ0MsSUFKYjtBQUtFLGFBQUcsRUFBRUQsSUFBSSxDQUFDVztBQUxaLFdBQ09YLElBQUksQ0FBQ1UsRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR5RDtBQUFBLE9BQTFEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBBO0FBQUEsa0JBREY7QUFxQkQ7O0dBMUJRbkIsUTs7S0FBQUEsUTtBQTRCTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTZlM2ZkMzIyODc3YmVlNDJkOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXBvSXRlbSBmcm9tICcuL1JlcG9JdGVtJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vUmVwb0xpc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFJlcG9MaXN0KHByb3BzKSB7XG4gIGNvbnN0IFtxdWVyeSxzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnNvbGUubG9nKHByb3BzLnJlcG9zLmZpbHRlcigocmVwbyk9PntcbiAgIHJldHVybiByZXBvLm5hbWUuaW5jbHVkZXMocXVlcnkpO1xuICB9KSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxpbnB1dCBcbiAgICB0eXBlPSd0ZXh0JyBcbiAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIHlvdXIgcmVwb3NpdG9yeSBieSBuYW1lJyBcbiAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofSBcbiAgICBvbkNoYW5nZT17KGUpPT5zZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgdmFsdWU9e3F1ZXJ5fS8+XG4gICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgIHtwcm9wcy5yZXBvcy5maWx0ZXIoKHJlcG8pPT5yZXBvLm5hbWUuaW5jbHVkZXMocXVlcnkpKS5tYXAoKHJlcG8pID0+IChcbiAgICAgICAgPFJlcG9JdGVtXG4gICAgICAgICAga2V5PXtyZXBvLmlkfVxuICAgICAgICAgIGlkPXtyZXBvLmlkfVxuICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9wbmdpbWcuY29tL3VwbG9hZHMvZ2l0aHViL2dpdGh1Yl9QTkcyOC5wbmdcIlxuICAgICAgICAgIG5hbWU9e3JlcG8ubmFtZX1cbiAgICAgICAgICB1cmw9e3JlcG8udXJsfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVwb0xpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9