module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/repositories/RepoItem.js":
/*!*********************************************!*\
  !*** ./components/repositories/RepoItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _RepoItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RepoItem.module.css */ "./components/repositories/RepoItem.module.css");
/* harmony import */ var _RepoItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RepoItem_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\ranja\\Downloads\\autify-assessment\\components\\repositories\\RepoItem.js";




function RepoItem(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _RepoItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _RepoItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.image,
          alt: props.title,
          className: _RepoItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.github
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _RepoItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: props.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
          children: props.url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _RepoItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: showDetailsHandler,
          children: "Show Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RepoItem);

/***/ }),

/***/ "./components/repositories/RepoItem.module.css":
/*!*****************************************************!*\
  !*** ./components/repositories/RepoItem.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "RepoItem_item__37RCI",
	"image": "RepoItem_image__2rnNt",
	"github": "RepoItem_github__2szAO",
	"content": "RepoItem_content__2mqfJ",
	"actions": "RepoItem_actions__FtpHC"
};


/***/ }),

/***/ "./components/repositories/RepoList.js":
/*!*********************************************!*\
  !*** ./components/repositories/RepoList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RepoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RepoItem */ "./components/repositories/RepoItem.js");
/* harmony import */ var _RepoList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RepoList.module.css */ "./components/repositories/RepoList.module.css");
/* harmony import */ var _RepoList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RepoList_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\ranja\\Downloads\\autify-assessment\\components\\repositories\\RepoList.js";




function RepoList(props) {
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      placeholder: "Search your repository by name",
      className: _RepoList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.search,
      onChange: e => setQuery(e.target.value),
      value: query
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _RepoList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
      children: props.repos.filter(repo => repo.name.includes(query)).map(repo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RepoItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: repo.id,
        image: "https://pngimg.com/uploads/github/github_PNG28.png",
        name: repo.name,
        url: repo.url
      }, repo.id, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (RepoList);

/***/ }),

/***/ "./components/repositories/RepoList.module.css":
/*!*****************************************************!*\
  !*** ./components/repositories/RepoList.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "RepoList_list__3s7Q5",
	"search": "RepoList_search__1uQ5k"
};


/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ranja\\Downloads\\autify-assessment\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "./node_modules/@apollo/client/cache/cache.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/cache/cache.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "tslib");
var optimism = __webpack_require__(/*! optimism */ "optimism");
var utilities = __webpack_require__(/*! ../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var equality = __webpack_require__(/*! @wry/equality */ "@wry/equality");
var trie = __webpack_require__(/*! @wry/trie */ "@wry/trie");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var context = __webpack_require__(/*! @wry/context */ "@wry/context");

var ApolloCache = (function () {
    function ApolloCache() {
        this.getFragmentDoc = optimism.wrap(utilities.getFragmentQueryDocument);
    }
    ApolloCache.prototype.batch = function (options) {
        var _this = this;
        var optimisticId = typeof options.optimistic === "string" ? options.optimistic :
            options.optimistic === false ? null : void 0;
        var updateResult;
        this.performTransaction(function () { return updateResult = options.update(_this); }, optimisticId);
        return updateResult;
    };
    ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.identify = function (object) {
        return;
    };
    ApolloCache.prototype.gc = function () {
        return [];
    };
    ApolloCache.prototype.modify = function (options) {
        return false;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read(tslib.__assign(tslib.__assign({}, options), { rootId: options.id || 'ROOT_QUERY', optimistic: optimistic }));
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read(tslib.__assign(tslib.__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic: optimistic }));
    };
    ApolloCache.prototype.writeQuery = function (_a) {
        var id = _a.id, data = _a.data, options = tslib.__rest(_a, ["id", "data"]);
        return this.write(Object.assign(options, {
            dataId: id || 'ROOT_QUERY',
            result: data,
        }));
    };
    ApolloCache.prototype.writeFragment = function (_a) {
        var id = _a.id, data = _a.data, fragment = _a.fragment, fragmentName = _a.fragmentName, options = tslib.__rest(_a, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id,
            result: data,
        }));
    };
    ApolloCache.prototype.updateQuery = function (options, update) {
        return this.batch({
            update: function (cache) {
                var value = cache.readQuery(options);
                var data = update(value);
                if (data === void 0 || data === null)
                    return value;
                cache.writeQuery(tslib.__assign(tslib.__assign({}, options), { data: data }));
                return data;
            },
        });
    };
    ApolloCache.prototype.updateFragment = function (options, update) {
        return this.batch({
            update: function (cache) {
                var value = cache.readFragment(options);
                var data = update(value);
                if (data === void 0 || data === null)
                    return value;
                cache.writeFragment(tslib.__assign(tslib.__assign({}, options), { data: data }));
                return data;
            },
        });
    };
    return ApolloCache;
}());

exports.Cache = void 0;
(function (Cache) {
})(exports.Cache || (exports.Cache = {}));

var MissingFieldError = (function (_super) {
    tslib.__extends(MissingFieldError, _super);
    function MissingFieldError(message, path, query, variables) {
        var _a;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.path = path;
        _this.query = query;
        _this.variables = variables;
        if (Array.isArray(_this.path)) {
            _this.missing = _this.message;
            for (var i = _this.path.length - 1; i >= 0; --i) {
                _this.missing = (_a = {}, _a[_this.path[i]] = _this.missing, _a);
            }
        }
        else {
            _this.missing = _this.path;
        }
        _this.__proto__ = MissingFieldError.prototype;
        return _this;
    }
    return MissingFieldError;
}(Error));

var hasOwn = Object.prototype.hasOwnProperty;
function isNullish(value) {
    return value === null || value === void 0;
}
var isArray = Array.isArray;
function defaultDataIdFromObject(_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject =
                !isNullish(id) ? { id: id } :
                    !isNullish(_id) ? { _id: _id } :
                        void 0;
        }
        if (isNullish(id) && !isNullish(_id)) {
            id = _id;
        }
        if (!isNullish(id)) {
            return "".concat(__typename, ":").concat((typeof id === "number" ||
                typeof id === "string") ? id : JSON.stringify(id));
        }
    }
}
var defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    canonizeResults: false,
};
function normalizeConfig(config) {
    return utilities.compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
    var value = config.canonizeResults;
    return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
    return utilities.isReference(objectOrReference)
        ? store.get(objectOrReference.__ref, "__typename")
        : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if (utilities.isNonNullObject(result)) {
        return isArray(result)
            ? result.every(function (item) { return selectionSetMatchesResult(selectionSet, item, variables); })
            : selectionSet.selections.every(function (field) {
                if (utilities.isField(field) && utilities.shouldInclude(field, variables)) {
                    var key = utilities.resultKeyNameFromField(field);
                    return hasOwn.call(result, key) &&
                        (!field.selectionSet ||
                            selectionSetMatchesResult(field.selectionSet, result[key], variables));
                }
                return true;
            });
    }
    return false;
}
function storeValueIsStoreObject(value) {
    return utilities.isNonNullObject(value) &&
        !utilities.isReference(value) &&
        !isArray(value);
}
function makeProcessedFieldsMerger() {
    return new utilities.DeepMerger;
}
function extractFragmentContext(document, fragments) {
    var fragmentMap = utilities.createFragmentMap(utilities.getFragmentDefinitions(document));
    return {
        fragmentMap: fragmentMap,
        lookupFragment: function (name) {
            var def = fragmentMap[name];
            if (!def && fragments) {
                def = fragments.lookup(name);
            }
            return def || null;
        },
    };
}

var DELETE = Object.create(null);
var delModifier = function () { return DELETE; };
var INVALIDATE = Object.create(null);
exports.EntityStore = (function () {
    function EntityStore(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = Object.create(null);
        this.rootIds = Object.create(null);
        this.refs = Object.create(null);
        this.getFieldValue = function (objectOrReference, storeFieldName) { return utilities.maybeDeepFreeze(utilities.isReference(objectOrReference)
            ? _this.get(objectOrReference.__ref, storeFieldName)
            : objectOrReference && objectOrReference[storeFieldName]); };
        this.canRead = function (objOrRef) {
            return utilities.isReference(objOrRef)
                ? _this.has(objOrRef.__ref)
                : typeof objOrRef === "object";
        };
        this.toReference = function (objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") {
                return utilities.makeReference(objOrIdOrRef);
            }
            if (utilities.isReference(objOrIdOrRef)) {
                return objOrIdOrRef;
            }
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = utilities.makeReference(id);
                if (mergeIntoStore) {
                    _this.merge(id, objOrIdOrRef);
                }
                return ref;
            }
        };
    }
    EntityStore.prototype.toObject = function () {
        return tslib.__assign({}, this.data);
    };
    EntityStore.prototype.has = function (dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore.prototype.get = function (dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (hasOwn.call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && hasOwn.call(storeObject, fieldName)) {
                return storeObject[fieldName];
            }
        }
        if (fieldName === "__typename" &&
            hasOwn.call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
        }
    };
    EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
        if (dependOnExistence)
            this.group.depend(dataId, "__exists");
        if (hasOwn.call(this.data, dataId)) {
            return this.data[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.lookup(dataId, dependOnExistence);
        }
        if (this.policies.rootTypenamesById[dataId]) {
            return Object.create(null);
        }
    };
    EntityStore.prototype.merge = function (older, newer) {
        var _this = this;
        var dataId;
        if (utilities.isReference(older))
            older = older.__ref;
        if (utilities.isReference(newer))
            newer = newer.__ref;
        var existing = typeof older === "string"
            ? this.lookup(dataId = older)
            : older;
        var incoming = typeof newer === "string"
            ? this.lookup(dataId = newer)
            : newer;
        if (!incoming)
            return;
        __DEV__ ? globals.invariant(typeof dataId === "string", "store.merge expects a string ID") : globals.invariant(typeof dataId === "string", 1);
        var merged = new utilities.DeepMerger(storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = Object.create(null);
                if (!existing)
                    fieldsToDirty_1.__exists = 1;
                Object.keys(incoming).forEach(function (storeFieldName) {
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        fieldsToDirty_1[storeFieldName] = 1;
                        var fieldName = fieldNameFromStoreName(storeFieldName);
                        if (fieldName !== storeFieldName &&
                            !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                            fieldsToDirty_1[fieldName] = 1;
                        }
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                            delete merged[storeFieldName];
                        }
                    }
                });
                if (fieldsToDirty_1.__typename &&
                    !(existing && existing.__typename) &&
                    this.policies.rootTypenamesById[dataId] === merged.__typename) {
                    delete fieldsToDirty_1.__typename;
                }
                Object.keys(fieldsToDirty_1).forEach(function (fieldName) { return _this.group.dirty(dataId, fieldName); });
            }
        }
    };
    EntityStore.prototype.modify = function (dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
                DELETE: DELETE,
                INVALIDATE: INVALIDATE,
                isReference: utilities.isReference,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (fieldNameOrOptions, from) { return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                    fieldName: fieldNameOrOptions,
                    from: from || utilities.makeReference(dataId),
                } : fieldNameOrOptions, { store: _this }); },
            };
            Object.keys(storeObject).forEach(function (storeFieldName) {
                var fieldName = fieldNameFromStoreName(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0)
                    return;
                var modify = typeof fields === "function"
                    ? fields
                    : fields[storeFieldName] || fields[fieldName];
                if (modify) {
                    var newValue = modify === delModifier ? DELETE :
                        modify(utilities.maybeDeepFreeze(fieldValue), tslib.__assign(tslib.__assign({}, sharedDetails_1), { fieldName: fieldName, storeFieldName: storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
                    if (newValue === INVALIDATE) {
                        _this.group.dirty(dataId, storeFieldName);
                    }
                    else {
                        if (newValue === DELETE)
                            newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields_1[storeFieldName] = newValue;
                            needToMerge_1 = true;
                            fieldValue = newValue;
                        }
                    }
                }
                if (fieldValue !== void 0) {
                    allDeleted_1 = false;
                }
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) {
                        this.data[dataId] = void 0;
                    }
                    else {
                        delete this.data[dataId];
                    }
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    EntityStore.prototype.delete = function (dataId, fieldName, args) {
        var _a;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args
                ? this.policies.getStoreFieldName({ typename: typename, fieldName: fieldName, args: args })
                : fieldName;
            return this.modify(dataId, storeFieldName ? (_a = {},
                _a[storeFieldName] = delModifier,
                _a) : delModifier);
        }
        return false;
    };
    EntityStore.prototype.evict = function (options, limit) {
        var evicted = false;
        if (options.id) {
            if (hasOwn.call(this.data, options.id)) {
                evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer && this !== limit) {
                evicted = this.parent.evict(options, limit) || evicted;
            }
            if (options.fieldName || evicted) {
                this.group.dirty(options.id, options.fieldName || "__exists");
            }
        }
        return evicted;
    };
    EntityStore.prototype.clear = function () {
        this.replace(null);
    };
    EntityStore.prototype.extract = function () {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function (id) {
            if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
                extraRootIds.push(id);
            }
        });
        if (extraRootIds.length) {
            obj.__META = { extraRootIds: extraRootIds.sort() };
        }
        return obj;
    };
    EntityStore.prototype.replace = function (newData) {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) {
            if (!(newData && hasOwn.call(newData, dataId))) {
                _this.delete(dataId);
            }
        });
        if (newData) {
            var __META = newData.__META, rest_1 = tslib.__rest(newData, ["__META"]);
            Object.keys(rest_1).forEach(function (dataId) {
                _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) {
                __META.extraRootIds.forEach(this.retain, this);
            }
        }
    };
    EntityStore.prototype.retain = function (rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore.prototype.release = function (rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count)
                delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    EntityStore.prototype.getRootIdSet = function (ids) {
        if (ids === void 0) { ids = new Set(); }
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
        }
        else {
            Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        }
        return ids;
    };
    EntityStore.prototype.gc = function () {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function (id) {
            if (hasOwn.call(snapshot, id)) {
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while (root_1 instanceof Layer)
                root_1 = root_1.parent;
            idsToRemove.forEach(function (id) { return root_1.delete(id); });
        }
        return idsToRemove;
    };
    EntityStore.prototype.findChildRefIds = function (dataId) {
        if (!hasOwn.call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = Object.create(null);
            var root = this.data[dataId];
            if (!root)
                return found_1;
            var workSet_1 = new Set([root]);
            workSet_1.forEach(function (obj) {
                if (utilities.isReference(obj)) {
                    found_1[obj.__ref] = true;
                }
                if (utilities.isNonNullObject(obj)) {
                    Object.keys(obj).forEach(function (key) {
                        var child = obj[key];
                        if (utilities.isNonNullObject(child)) {
                            workSet_1.add(child);
                        }
                    });
                }
            });
        }
        return this.refs[dataId];
    };
    EntityStore.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore;
}());
var CacheGroup = (function () {
    function CacheGroup(caching, parent) {
        if (parent === void 0) { parent = null; }
        this.caching = caching;
        this.parent = parent;
        this.d = null;
        this.resetCaching();
    }
    CacheGroup.prototype.resetCaching = function () {
        this.d = this.caching ? optimism.dep() : null;
        this.keyMaker = new trie.Trie(utilities.canUseWeakMap);
    };
    CacheGroup.prototype.depend = function (dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName) {
                this.d(makeDepKey(dataId, fieldName));
            }
            if (this.parent) {
                this.parent.depend(dataId, storeFieldName);
            }
        }
    };
    CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
        if (this.d) {
            this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
        }
    };
    return CacheGroup;
}());
function makeDepKey(dataId, storeFieldName) {
    return storeFieldName + '#' + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) {
        store.group.depend(entityId, "__exists");
    }
}
(function (EntityStore) {
    var Root = (function (_super) {
        tslib.__extends(Root, _super);
        function Root(_a) {
            var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.stump = new Stump(_this);
            _this.storageTrie = new trie.Trie(utilities.canUseWeakMap);
            if (seed)
                _this.replace(seed);
            return _this;
        }
        Root.prototype.addLayer = function (layerId, replay) {
            return this.stump.addLayer(layerId, replay);
        };
        Root.prototype.removeLayer = function () {
            return this;
        };
        Root.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
        };
        return Root;
    }(EntityStore));
    EntityStore.Root = Root;
})(exports.EntityStore || (exports.EntityStore = {}));
var Layer = (function (_super) {
    tslib.__extends(Layer, _super);
    function Layer(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer.prototype.addLayer = function (layerId, replay) {
        return new Layer(layerId, this, replay, this.group);
    };
    Layer.prototype.removeLayer = function (layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) {
                Object.keys(this.data).forEach(function (dataId) {
                    var ownStoreObject = _this.data[dataId];
                    var parentStoreObject = parent["lookup"](dataId);
                    if (!parentStoreObject) {
                        _this.delete(dataId);
                    }
                    else if (!ownStoreObject) {
                        _this.group.dirty(dataId, "__exists");
                        Object.keys(parentStoreObject).forEach(function (storeFieldName) {
                            _this.group.dirty(dataId, storeFieldName);
                        });
                    }
                    else if (ownStoreObject !== parentStoreObject) {
                        Object.keys(ownStoreObject).forEach(function (storeFieldName) {
                            if (!equality.equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                                _this.group.dirty(dataId, storeFieldName);
                            }
                        });
                    }
                });
            }
            return parent;
        }
        if (parent === this.parent)
            return this;
        return parent.addLayer(this.id, this.replay);
    };
    Layer.prototype.toObject = function () {
        return tslib.__assign(tslib.__assign({}, this.parent.toObject()), this.data);
    };
    Layer.prototype.findChildRefIds = function (dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return hasOwn.call(this.data, dataId) ? tslib.__assign(tslib.__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer.prototype.getStorage = function () {
        var p = this.parent;
        while (p.parent)
            p = p.parent;
        return p.getStorage.apply(p, arguments);
    };
    return Layer;
}(exports.EntityStore));
var Stump = (function (_super) {
    tslib.__extends(Stump, _super);
    function Stump(root) {
        return _super.call(this, "EntityStore.Stump", root, function () { }, new CacheGroup(root.group.caching, root.group)) || this;
    }
    Stump.prototype.removeLayer = function () {
        return this;
    };
    Stump.prototype.merge = function () {
        return this.parent.merge.apply(this.parent, arguments);
    };
    return Stump;
}(Layer));
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return equality.equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    return !!(store instanceof exports.EntityStore && store.group.caching);
}

function shallowCopy(value) {
    if (utilities.isNonNullObject(value)) {
        return isArray(value)
            ? value.slice(0)
            : tslib.__assign({ __proto__: Object.getPrototypeOf(value) }, value);
    }
    return value;
}
var ObjectCanon = (function () {
    function ObjectCanon() {
        this.known = new (utilities.canUseWeakSet ? WeakSet : Set)();
        this.pool = new trie.Trie(utilities.canUseWeakMap);
        this.passes = new WeakMap();
        this.keysByJSON = new Map();
        this.empty = this.admit({});
    }
    ObjectCanon.prototype.isKnown = function (value) {
        return utilities.isNonNullObject(value) && this.known.has(value);
    };
    ObjectCanon.prototype.pass = function (value) {
        if (utilities.isNonNullObject(value)) {
            var copy = shallowCopy(value);
            this.passes.set(copy, value);
            return copy;
        }
        return value;
    };
    ObjectCanon.prototype.admit = function (value) {
        var _this = this;
        if (utilities.isNonNullObject(value)) {
            var original = this.passes.get(value);
            if (original)
                return original;
            var proto = Object.getPrototypeOf(value);
            switch (proto) {
                case Array.prototype: {
                    if (this.known.has(value))
                        return value;
                    var array = value.map(this.admit, this);
                    var node = this.pool.lookupArray(array);
                    if (!node.array) {
                        this.known.add(node.array = array);
                        if (__DEV__) {
                            Object.freeze(array);
                        }
                    }
                    return node.array;
                }
                case null:
                case Object.prototype: {
                    if (this.known.has(value))
                        return value;
                    var proto_1 = Object.getPrototypeOf(value);
                    var array_1 = [proto_1];
                    var keys = this.sortedKeys(value);
                    array_1.push(keys.json);
                    var firstValueIndex_1 = array_1.length;
                    keys.sorted.forEach(function (key) {
                        array_1.push(_this.admit(value[key]));
                    });
                    var node = this.pool.lookupArray(array_1);
                    if (!node.object) {
                        var obj_1 = node.object = Object.create(proto_1);
                        this.known.add(obj_1);
                        keys.sorted.forEach(function (key, i) {
                            obj_1[key] = array_1[firstValueIndex_1 + i];
                        });
                        if (__DEV__) {
                            Object.freeze(obj_1);
                        }
                    }
                    return node.object;
                }
            }
        }
        return value;
    };
    ObjectCanon.prototype.sortedKeys = function (obj) {
        var keys = Object.keys(obj);
        var node = this.pool.lookupArray(keys);
        if (!node.keys) {
            keys.sort();
            var json = JSON.stringify(keys);
            if (!(node.keys = this.keysByJSON.get(json))) {
                this.keysByJSON.set(json, node.keys = { sorted: keys, json: json });
            }
        }
        return node.keys;
    };
    return ObjectCanon;
}());
var canonicalStringify = Object.assign(function (value) {
    if (utilities.isNonNullObject(value)) {
        if (stringifyCanon === void 0) {
            resetCanonicalStringify();
        }
        var canonical = stringifyCanon.admit(value);
        var json = stringifyCache.get(canonical);
        if (json === void 0) {
            stringifyCache.set(canonical, json = JSON.stringify(canonical));
        }
        return json;
    }
    return JSON.stringify(value);
}, {
    reset: resetCanonicalStringify,
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
    stringifyCanon = new ObjectCanon;
    stringifyCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
}

function execSelectionSetKeyArgs(options) {
    return [
        options.selectionSet,
        options.objectOrReference,
        options.context,
        options.context.canonizeResults,
    ];
}
var StoreReader = (function () {
    function StoreReader(config) {
        var _this = this;
        this.knownResults = new (utilities.canUseWeakMap ? WeakMap : Map)();
        this.config = utilities.compact(config, {
            addTypename: config.addTypename !== false,
            canonizeResults: shouldCanonizeResults(config),
        });
        this.canon = config.canon || new ObjectCanon;
        this.executeSelectionSet = optimism.wrap(function (options) {
            var _a;
            var canonizeResults = options.context.canonizeResults;
            var peekArgs = execSelectionSetKeyArgs(options);
            peekArgs[3] = !canonizeResults;
            var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);
            if (other) {
                if (canonizeResults) {
                    return tslib.__assign(tslib.__assign({}, other), { result: _this.canon.admit(other.result) });
                }
                return other;
            }
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSelectionSetImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            keyArgs: execSelectionSetKeyArgs,
            makeCacheKey: function (selectionSet, parent, context, canonizeResults) {
                if (supportsResultCaching(context.store)) {
                    return context.store.makeCacheKey(selectionSet, utilities.isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
                }
            }
        });
        this.executeSubSelectedArray = optimism.wrap(function (options) {
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSubSelectedArrayImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (_a) {
                var field = _a.field, array = _a.array, context = _a.context;
                if (supportsResultCaching(context.store)) {
                    return context.store.makeCacheKey(field, array, context.varString);
                }
            }
        });
    }
    StoreReader.prototype.resetCanon = function () {
        this.canon = new ObjectCanon;
    };
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? 'ROOT_QUERY' : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
        var policies = this.config.cache.policies;
        variables = tslib.__assign(tslib.__assign({}, utilities.getDefaultValues(utilities.getQueryDefinition(query))), variables);
        var rootRef = utilities.makeReference(rootId);
        var execResult = this.executeSelectionSet({
            selectionSet: utilities.getMainDefinition(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: tslib.__assign({ store: store, query: query, policies: policies, variables: variables, varString: canonicalStringify(variables), canonizeResults: canonizeResults }, extractFragmentContext(query, this.config.fragments)),
        });
        var missing;
        if (execResult.missing) {
            missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];
            if (!returnPartialData) {
                throw missing[0];
            }
        }
        return {
            result: execResult.result,
            complete: !missing,
            missing: missing,
        };
    };
    StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
        if (supportsResultCaching(context.store) &&
            this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
            if (latest && result === latest.result) {
                return true;
            }
        }
        return false;
    };
    StoreReader.prototype.execSelectionSetImpl = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, enclosingRef = _a.enclosingRef, context = _a.context;
        if (utilities.isReference(objectOrReference) &&
            !context.policies.rootTypenamesById[objectOrReference.__ref] &&
            !context.store.has(objectOrReference.__ref)) {
            return {
                result: this.canon.empty,
                missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object"),
            };
        }
        var variables = context.variables, policies = context.policies, store = context.store;
        var typename = store.getFieldValue(objectOrReference, "__typename");
        var objectsToMerge = [];
        var missing;
        var missingMerger = new utilities.DeepMerger();
        if (this.config.addTypename &&
            typeof typename === "string" &&
            !policies.rootIdsByTypename[typename]) {
            objectsToMerge.push({ __typename: typename });
        }
        function handleMissing(result, resultName) {
            var _a;
            if (result.missing) {
                missing = missingMerger.merge(missing, (_a = {}, _a[resultName] = result.missing, _a));
            }
            return result.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a, _b;
            if (!utilities.shouldInclude(selection, variables))
                return;
            if (utilities.isField(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference,
                }, context);
                var resultName = utilities.resultKeyNameFromField(selection);
                if (fieldValue === void 0) {
                    if (!utilities.addTypenameToDocument.added(selection)) {
                        missing = missingMerger.merge(missing, (_a = {},
                            _a[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(utilities.isReference(objectOrReference)
                                ? objectOrReference.__ref + " object"
                                : "object " + JSON.stringify(objectOrReference, null, 2)),
                            _a));
                    }
                }
                else if (isArray(fieldValue)) {
                    fieldValue = handleMissing(_this.executeSubSelectedArray({
                        field: selection,
                        array: fieldValue,
                        enclosingRef: enclosingRef,
                        context: context,
                    }), resultName);
                }
                else if (!selection.selectionSet) {
                    if (context.canonizeResults) {
                        fieldValue = _this.canon.pass(fieldValue);
                    }
                }
                else if (fieldValue != null) {
                    fieldValue = handleMissing(_this.executeSelectionSet({
                        selectionSet: selection.selectionSet,
                        objectOrReference: fieldValue,
                        enclosingRef: utilities.isReference(fieldValue) ? fieldValue : enclosingRef,
                        context: context,
                    }), resultName);
                }
                if (fieldValue !== void 0) {
                    objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
                }
            }
            else {
                var fragment = utilities.getFragmentFromSelection(selection, context.lookupFragment);
                if (!fragment && selection.kind === graphql.Kind.FRAGMENT_SPREAD) {
                    throw __DEV__ ? new globals.InvariantError("No fragment named ".concat(selection.name.value)) : new globals.InvariantError(5);
                }
                if (fragment && policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        var result = utilities.mergeDeepArray(objectsToMerge);
        var finalResult = { result: result, missing: missing };
        var frozen = context.canonizeResults
            ? this.canon.admit(finalResult)
            : utilities.maybeDeepFreeze(finalResult);
        if (frozen.result) {
            this.knownResults.set(frozen.result, selectionSet);
        }
        return frozen;
    };
    StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
        var _this = this;
        var field = _a.field, array = _a.array, enclosingRef = _a.enclosingRef, context = _a.context;
        var missing;
        var missingMerger = new utilities.DeepMerger();
        function handleMissing(childResult, i) {
            var _a;
            if (childResult.missing) {
                missing = missingMerger.merge(missing, (_a = {}, _a[i] = childResult.missing, _a));
            }
            return childResult.result;
        }
        if (field.selectionSet) {
            array = array.filter(context.store.canRead);
        }
        array = array.map(function (item, i) {
            if (item === null) {
                return null;
            }
            if (isArray(item)) {
                return handleMissing(_this.executeSubSelectedArray({
                    field: field,
                    array: item,
                    enclosingRef: enclosingRef,
                    context: context,
                }), i);
            }
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    objectOrReference: item,
                    enclosingRef: utilities.isReference(item) ? item : enclosingRef,
                    context: context,
                }), i);
            }
            if (__DEV__) {
                assertSelectionSetForIdValue(context.store, field, item);
            }
            return item;
        });
        return {
            result: context.canonizeResults ? this.canon.admit(array) : array,
            missing: missing,
        };
    };
    return StoreReader;
}());
function firstMissing(tree) {
    try {
        JSON.stringify(tree, function (_, value) {
            if (typeof value === "string")
                throw value;
            return value;
        });
    }
    catch (result) {
        return result;
    }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = new Set([fieldValue]);
        workSet_1.forEach(function (value) {
            if (utilities.isNonNullObject(value)) {
                __DEV__ ? globals.invariant(!utilities.isReference(value), "Missing selection set for object of type ".concat(getTypenameFromStoreObject(store, value), " returned for query field ").concat(field.name.value)) : globals.invariant(!utilities.isReference(value), 6);
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}

var cacheSlot = new context.Slot();
var cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
    var info = cacheInfoMap.get(cache);
    if (!info) {
        cacheInfoMap.set(cache, info = {
            vars: new Set,
            dep: optimism.dep(),
        });
    }
    return info;
}
function forgetCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.forgetCache(cache); });
}
function recallCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.attachCache(cache); });
}
function makeVar(value) {
    var caches = new Set();
    var listeners = new Set();
    var rv = function (newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches.forEach(function (cache) {
                    getCacheInfo(cache).dep.dirty(rv);
                    broadcast(cache);
                });
                var oldListeners = Array.from(listeners);
                listeners.clear();
                oldListeners.forEach(function (listener) { return listener(value); });
            }
        }
        else {
            var cache = cacheSlot.getValue();
            if (cache) {
                attach(cache);
                getCacheInfo(cache).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = function (listener) {
        listeners.add(listener);
        return function () {
            listeners.delete(listener);
        };
    };
    var attach = rv.attachCache = function (cache) {
        caches.add(cache);
        getCacheInfo(cache).vars.add(rv);
        return rv;
    };
    rv.forgetCache = function (cache) { return caches.delete(cache); };
    return rv;
}
function broadcast(cache) {
    if (cache.broadcastWatches) {
        cache.broadcastWatches();
    }
}

var specifierInfoCache = Object.create(null);
function lookupSpecifierInfo(spec) {
    var cacheKey = JSON.stringify(spec);
    return specifierInfoCache[cacheKey] ||
        (specifierInfoCache[cacheKey] = Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyFieldsFn || (info.keyFieldsFn = function (object, context) {
        var extract = function (from, key) { return context.readField(key, from); };
        var keyObject = context.keyObject = collectSpecifierPaths(specifier, function (schemaKeyPath) {
            var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
            if (extracted === void 0 &&
                object !== context.storeObject &&
                hasOwn.call(object, schemaKeyPath[0])) {
                extracted = extractKeyPath(object, schemaKeyPath, extractKey);
            }
            __DEV__ ? globals.invariant(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join('.'), "' while extracting keyFields from ").concat(JSON.stringify(object))) : globals.invariant(extracted !== void 0, 2);
            return extracted;
        });
        return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
    });
}
function keyArgsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyArgsFn || (info.keyArgsFn = function (args, _a) {
        var field = _a.field, variables = _a.variables, fieldName = _a.fieldName;
        var collected = collectSpecifierPaths(specifier, function (keyPath) {
            var firstKey = keyPath[0];
            var firstChar = firstKey.charAt(0);
            if (firstChar === "@") {
                if (field && utilities.isNonEmptyArray(field.directives)) {
                    var directiveName_1 = firstKey.slice(1);
                    var d = field.directives.find(function (d) { return d.name.value === directiveName_1; });
                    var directiveArgs = d && utilities.argumentsObjectFromField(d, variables);
                    return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
                }
                return;
            }
            if (firstChar === "$") {
                var variableName = firstKey.slice(1);
                if (variables && hasOwn.call(variables, variableName)) {
                    var varKeyPath = keyPath.slice(0);
                    varKeyPath[0] = variableName;
                    return extractKeyPath(variables, varKeyPath);
                }
                return;
            }
            if (args) {
                return extractKeyPath(args, keyPath);
            }
        });
        var suffix = JSON.stringify(collected);
        if (args || suffix !== "{}") {
            fieldName += ":" + suffix;
        }
        return fieldName;
    });
}
function collectSpecifierPaths(specifier, extractor) {
    var merger = new utilities.DeepMerger;
    return getSpecifierPaths(specifier).reduce(function (collected, path) {
        var _a;
        var toMerge = extractor(path);
        if (toMerge !== void 0) {
            for (var i = path.length - 1; i >= 0; --i) {
                toMerge = (_a = {}, _a[path[i]] = toMerge, _a);
            }
            collected = merger.merge(collected, toMerge);
        }
        return collected;
    }, Object.create(null));
}
function getSpecifierPaths(spec) {
    var info = lookupSpecifierInfo(spec);
    if (!info.paths) {
        var paths_1 = info.paths = [];
        var currentPath_1 = [];
        spec.forEach(function (s, i) {
            if (isArray(s)) {
                getSpecifierPaths(s).forEach(function (p) { return paths_1.push(currentPath_1.concat(p)); });
                currentPath_1.length = 0;
            }
            else {
                currentPath_1.push(s);
                if (!isArray(spec[i + 1])) {
                    paths_1.push(currentPath_1.slice(0));
                    currentPath_1.length = 0;
                }
            }
        });
    }
    return info.paths;
}
function extractKey(object, key) {
    return object[key];
}
function extractKeyPath(object, path, extract) {
    extract = extract || extractKey;
    return normalize(path.reduce(function reducer(obj, key) {
        return isArray(obj)
            ? obj.map(function (child) { return reducer(child, key); })
            : obj && extract(obj, key);
    }, object));
}
function normalize(value) {
    if (utilities.isNonNullObject(value)) {
        if (isArray(value)) {
            return value.map(normalize);
        }
        return collectSpecifierPaths(Object.keys(value).sort(), function (path) { return extractKeyPath(value, path); });
    }
    return value;
}

utilities.getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args :
        spec.field ? utilities.argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function () { return void 0; };
var simpleKeyArgsFn = function (_args, context) { return context.fieldName; };
var mergeTrueFn = function (existing, incoming, _a) {
    var mergeObjects = _a.mergeObjects;
    return mergeObjects(existing, incoming);
};
var mergeFalseFn = function (_, incoming) { return incoming; };
var Policies = (function () {
    function Policies(config) {
        this.config = config;
        this.typePolicies = Object.create(null);
        this.toBeAdded = Object.create(null);
        this.supertypeMap = new Map();
        this.fuzzySubtypes = new Map();
        this.rootIdsByTypename = Object.create(null);
        this.rootTypenamesById = Object.create(null);
        this.usingPossibleTypes = false;
        this.config = tslib.__assign({ dataIdFromObject: defaultDataIdFromObject }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
        }
    }
    Policies.prototype.identify = function (object, partialContext) {
        var _a;
        var policies = this;
        var typename = partialContext && (partialContext.typename ||
            ((_a = partialContext.storeObject) === null || _a === void 0 ? void 0 : _a.__typename)) || object.__typename;
        if (typename === this.rootTypenamesById.ROOT_QUERY) {
            return ["ROOT_QUERY"];
        }
        var storeObject = partialContext && partialContext.storeObject || object;
        var context = tslib.__assign(tslib.__assign({}, partialContext), { typename: typename, storeObject: storeObject, readField: partialContext && partialContext.readField || function () {
                var options = normalizeReadFieldOptions(arguments, storeObject);
                return policies.readField(options, {
                    store: policies.cache["data"],
                    variables: options.variables,
                });
            } });
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while (keyFn) {
            var specifierOrId = keyFn(object, context);
            if (isArray(specifierOrId)) {
                keyFn = keyFieldsFnFromSpecifier(specifierOrId);
            }
            else {
                id = specifierOrId;
                break;
            }
        }
        id = id ? String(id) : void 0;
        return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies.prototype.addTypePolicies = function (typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function (typename) {
            var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = tslib.__rest(_a, ["queryType", "mutationType", "subscriptionType"]);
            if (queryType)
                _this.setRootTypename("Query", typename);
            if (mutationType)
                _this.setRootTypename("Mutation", typename);
            if (subscriptionType)
                _this.setRootTypename("Subscription", typename);
            if (hasOwn.call(_this.toBeAdded, typename)) {
                _this.toBeAdded[typename].push(incoming);
            }
            else {
                _this.toBeAdded[typename] = [incoming];
            }
        });
    };
    Policies.prototype.updateTypePolicy = function (typename, incoming) {
        var _this = this;
        var existing = this.getTypePolicy(typename);
        var keyFields = incoming.keyFields, fields = incoming.fields;
        function setMerge(existing, merge) {
            existing.merge =
                typeof merge === "function" ? merge :
                    merge === true ? mergeTrueFn :
                        merge === false ? mergeFalseFn :
                            existing.merge;
        }
        setMerge(existing, incoming.merge);
        existing.keyFn =
            keyFields === false ? nullKeyFieldsFn :
                isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) :
                    typeof keyFields === "function" ? keyFields :
                        existing.keyFn;
        if (fields) {
            Object.keys(fields).forEach(function (fieldName) {
                var existing = _this.getFieldPolicy(typename, fieldName, true);
                var incoming = fields[fieldName];
                if (typeof incoming === "function") {
                    existing.read = incoming;
                }
                else {
                    var keyArgs = incoming.keyArgs, read = incoming.read, merge = incoming.merge;
                    existing.keyFn =
                        keyArgs === false ? simpleKeyArgsFn :
                            isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) :
                                typeof keyArgs === "function" ? keyArgs :
                                    existing.keyFn;
                    if (typeof read === "function") {
                        existing.read = read;
                    }
                    setMerge(existing, merge);
                }
                if (existing.read && existing.merge) {
                    existing.keyFn = existing.keyFn || simpleKeyArgsFn;
                }
            });
        }
    };
    Policies.prototype.setRootTypename = function (which, typename) {
        if (typename === void 0) { typename = which; }
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
            __DEV__ ? globals.invariant(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : globals.invariant(!old || old === which, 3);
            if (old)
                delete this.rootIdsByTypename[old];
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies.prototype.addPossibleTypes = function (possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function (supertype) {
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function (subtype) {
                _this.getSupertypeSet(subtype, true).add(supertype);
                var match = subtype.match(TypeOrFieldNameRegExp);
                if (!match || match[0] !== subtype) {
                    _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
                }
            });
        });
    };
    Policies.prototype.getTypePolicy = function (typename) {
        var _this = this;
        if (!hasOwn.call(this.typePolicies, typename)) {
            var policy_1 = this.typePolicies[typename] = Object.create(null);
            policy_1.fields = Object.create(null);
            var supertypes = this.supertypeMap.get(typename);
            if (supertypes && supertypes.size) {
                supertypes.forEach(function (supertype) {
                    var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = tslib.__rest(_a, ["fields"]);
                    Object.assign(policy_1, rest);
                    Object.assign(policy_1.fields, fields);
                });
            }
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) {
            inbox.splice(0).forEach(function (policy) {
                _this.updateTypePolicy(typename, policy);
            });
        }
        return this.typePolicies[typename];
    };
    Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
        if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return fieldPolicies[fieldName] || (createIfMissing && (fieldPolicies[fieldName] = Object.create(null)));
        }
    };
    Policies.prototype.getSupertypeSet = function (subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) {
            this.supertypeMap.set(subtype, supertypeSet = new Set());
        }
        return supertypeSet;
    };
    Policies.prototype.fragmentMatches = function (fragment, typename, result, variables) {
        var _this = this;
        if (!fragment.typeCondition)
            return true;
        if (!typename)
            return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype)
            return true;
        if (this.usingPossibleTypes &&
            this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [typenameSupertypeSet];
            var maybeEnqueue_1 = function (subtype) {
                var supertypeSet = _this.getSupertypeSet(subtype, false);
                if (supertypeSet &&
                    supertypeSet.size &&
                    workQueue_1.indexOf(supertypeSet) < 0) {
                    workQueue_1.push(supertypeSet);
                }
            };
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            for (var i = 0; i < workQueue_1.length; ++i) {
                var supertypeSet = workQueue_1[i];
                if (supertypeSet.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) {
                            __DEV__ && globals.invariant.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
                        }
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet.forEach(maybeEnqueue_1);
                if (needToCheckFuzzySubtypes &&
                    i === workQueue_1.length - 1 &&
                    selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
                        var match = typename.match(regExp);
                        if (match && match[0] === typename) {
                            maybeEnqueue_1(fuzzyString);
                        }
                    });
                }
            }
        }
        return false;
    };
    Policies.prototype.hasKeyArgs = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
    };
    Policies.prototype.getStoreFieldName = function (fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename: typename,
                fieldName: fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables,
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while (keyFn) {
                var specifierOrString = keyFn(args, context);
                if (isArray(specifierOrString)) {
                    keyFn = keyArgsFnFromSpecifier(specifierOrString);
                }
                else {
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) {
            storeFieldName = fieldSpec.field
                ? utilities.storeKeyNameFromField(fieldSpec.field, fieldSpec.variables)
                : utilities.getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        if (storeFieldName === false) {
            return fieldName;
        }
        return fieldName === fieldNameFromStoreName(storeFieldName)
            ? storeFieldName
            : fieldName + ":" + storeFieldName;
    };
    Policies.prototype.readField = function (options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference)
            return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField)
            return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename)
                options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(utilities.isReference(objectOrReference)
                ? objectOrReference.__ref
                : objectOrReference, storeFieldName));
            return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
        }
        return existing;
    };
    Policies.prototype.getReadFunction = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return policy && policy.read;
    };
    Policies.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge = policy && policy.merge;
        if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
        }
        return merge;
    };
    Policies.prototype.runMergeFunction = function (existing, incoming, _a, context, storage) {
        var field = _a.field, typename = _a.typename, merge = _a.merge;
        if (merge === mergeTrueFn) {
            return makeMergeObjectsFunction(context.store)(existing, incoming);
        }
        if (merge === mergeFalseFn) {
            return incoming;
        }
        if (context.overwrite) {
            existing = void 0;
        }
        return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename: typename, fieldName: field.name.value, field: field, variables: context.variables }, context, storage || Object.create(null)));
    };
    return Policies;
}());
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a = context.store, toReference = _a.toReference, canRead = _a.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName: fieldName,
        storeFieldName: storeFieldName,
        variables: variables,
        isReference: utilities.isReference,
        toReference: toReference,
        storage: storage,
        cache: policies.cache,
        canRead: canRead,
        readField: function () {
            return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store),
    };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
    var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
    var options;
    if (typeof fieldNameOrOptions === "string") {
        options = {
            fieldName: fieldNameOrOptions,
            from: argc > 1 ? from : objectOrReference,
        };
    }
    else {
        options = tslib.__assign({}, fieldNameOrOptions);
        if (!hasOwn.call(options, "from")) {
            options.from = objectOrReference;
        }
    }
    if (__DEV__ && options.from === void 0) {
        __DEV__ && globals.invariant.warn("Undefined 'from' passed to readField with arguments ".concat(utilities.stringifyForDisplay(Array.from(readFieldArgs))));
    }
    if (void 0 === options.variables) {
        options.variables = variables;
    }
    return options;
}
function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
        if (isArray(existing) || isArray(incoming)) {
            throw __DEV__ ? new globals.InvariantError("Cannot automatically merge arrays") : new globals.InvariantError(4);
        }
        if (utilities.isNonNullObject(existing) &&
            utilities.isNonNullObject(incoming)) {
            var eType = store.getFieldValue(existing, "__typename");
            var iType = store.getFieldValue(incoming, "__typename");
            var typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer) {
                return incoming;
            }
            if (utilities.isReference(existing) &&
                storeValueIsStoreObject(incoming)) {
                store.merge(existing.__ref, incoming);
                return existing;
            }
            if (storeValueIsStoreObject(existing) &&
                utilities.isReference(incoming)) {
                store.merge(existing, incoming.__ref);
                return incoming;
            }
            if (storeValueIsStoreObject(existing) &&
                storeValueIsStoreObject(incoming)) {
                return tslib.__assign(tslib.__assign({}, existing), incoming);
            }
        }
        return incoming;
    };
}

function getContextFlavor(context, clientOnly, deferred) {
    var key = "".concat(clientOnly).concat(deferred);
    var flavored = context.flavors.get(key);
    if (!flavored) {
        context.flavors.set(key, flavored = (context.clientOnly === clientOnly &&
            context.deferred === deferred) ? context : tslib.__assign(tslib.__assign({}, context), { clientOnly: clientOnly, deferred: deferred }));
    }
    return flavored;
}
var StoreWriter = (function () {
    function StoreWriter(cache, reader, fragments) {
        this.cache = cache;
        this.reader = reader;
        this.fragments = fragments;
    }
    StoreWriter.prototype.writeToStore = function (store, _a) {
        var _this = this;
        var query = _a.query, result = _a.result, dataId = _a.dataId, variables = _a.variables, overwrite = _a.overwrite;
        var operationDefinition = utilities.getOperationDefinition(query);
        var merger = makeProcessedFieldsMerger();
        variables = tslib.__assign(tslib.__assign({}, utilities.getDefaultValues(operationDefinition)), variables);
        var context = tslib.__assign(tslib.__assign({ store: store, written: Object.create(null), merge: function (existing, incoming) {
                return merger.merge(existing, incoming);
            }, variables: variables, varString: canonicalStringify(variables) }, extractFragmentContext(query, this.fragments)), { overwrite: !!overwrite, incomingById: new Map, clientOnly: false, deferred: false, flavors: new Map });
        var ref = this.processSelectionSet({
            result: result || Object.create(null),
            dataId: dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: { map: new Map },
            context: context,
        });
        if (!utilities.isReference(ref)) {
            throw __DEV__ ? new globals.InvariantError("Could not identify object ".concat(JSON.stringify(result))) : new globals.InvariantError(7);
        }
        context.incomingById.forEach(function (_a, dataId) {
            var storeObject = _a.storeObject, mergeTree = _a.mergeTree, fieldNodeSet = _a.fieldNodeSet;
            var entityRef = utilities.makeReference(dataId);
            if (mergeTree && mergeTree.map.size) {
                var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
                if (utilities.isReference(applied)) {
                    return;
                }
                storeObject = applied;
            }
            if (__DEV__ && !context.overwrite) {
                var fieldsWithSelectionSets_1 = Object.create(null);
                fieldNodeSet.forEach(function (field) {
                    if (field.selectionSet) {
                        fieldsWithSelectionSets_1[field.name.value] = true;
                    }
                });
                var hasSelectionSet_1 = function (storeFieldName) {
                    return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
                };
                var hasMergeFunction_1 = function (storeFieldName) {
                    var childTree = mergeTree && mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(storeObject).forEach(function (storeFieldName) {
                    if (hasSelectionSet_1(storeFieldName) &&
                        !hasMergeFunction_1(storeFieldName)) {
                        warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
                    }
                });
            }
            store.merge(dataId, storeObject);
        });
        store.retain(ref.__ref);
        return ref;
    };
    StoreWriter.prototype.processSelectionSet = function (_a) {
        var _this = this;
        var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, mergeTree = _a.mergeTree;
        var policies = this.cache.policies;
        var incoming = Object.create(null);
        var typename = (dataId && policies.rootTypenamesById[dataId]) ||
            utilities.getTypenameFromResult(result, selectionSet, context.fragmentMap) ||
            (dataId && context.store.get(dataId, "__typename"));
        if ("string" === typeof typename) {
            incoming.__typename = typename;
        }
        var readField = function () {
            var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
            if (utilities.isReference(options.from)) {
                var info = context.incomingById.get(options.from.__ref);
                if (info) {
                    var result_1 = policies.readField(tslib.__assign(tslib.__assign({}, options), { from: info.storeObject }), context);
                    if (result_1 !== void 0) {
                        return result_1;
                    }
                }
            }
            return policies.readField(options, context);
        };
        var fieldNodeSet = new Set();
        this.flattenFields(selectionSet, result, context, typename).forEach(function (context, field) {
            var _a;
            var resultFieldKey = utilities.resultKeyNameFromField(field);
            var value = result[resultFieldKey];
            fieldNodeSet.add(field);
            if (value !== void 0) {
                var storeFieldName = policies.getStoreFieldName({
                    typename: typename,
                    fieldName: field.name.value,
                    field: field,
                    variables: context.variables,
                });
                var childTree = getChildMergeTree(mergeTree, storeFieldName);
                var incomingValue = _this.processFieldValue(value, field, field.selectionSet
                    ? getContextFlavor(context, false, false)
                    : context, childTree);
                var childTypename = void 0;
                if (field.selectionSet &&
                    (utilities.isReference(incomingValue) ||
                        storeValueIsStoreObject(incomingValue))) {
                    childTypename = readField("__typename", incomingValue);
                }
                var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
                if (merge) {
                    childTree.info = {
                        field: field,
                        typename: typename,
                        merge: merge,
                    };
                }
                else {
                    maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                }
                incoming = context.merge(incoming, (_a = {},
                    _a[storeFieldName] = incomingValue,
                    _a));
            }
            else if (__DEV__ &&
                !context.clientOnly &&
                !context.deferred &&
                !utilities.addTypenameToDocument.added(field) &&
                !policies.getReadFunction(typename, field.name.value)) {
                __DEV__ && globals.invariant.error("Missing field '".concat(utilities.resultKeyNameFromField(field), "' while writing result ").concat(JSON.stringify(result, null, 2)).substring(0, 1000));
            }
        });
        try {
            var _b = policies.identify(result, {
                typename: typename,
                selectionSet: selectionSet,
                fragmentMap: context.fragmentMap,
                storeObject: incoming,
                readField: readField,
            }), id = _b[0], keyObject = _b[1];
            dataId = dataId || id;
            if (keyObject) {
                incoming = context.merge(incoming, keyObject);
            }
        }
        catch (e) {
            if (!dataId)
                throw e;
        }
        if ("string" === typeof dataId) {
            var dataRef = utilities.makeReference(dataId);
            var sets = context.written[dataId] || (context.written[dataId] = []);
            if (sets.indexOf(selectionSet) >= 0)
                return dataRef;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
                return dataRef;
            }
            var previous_1 = context.incomingById.get(dataId);
            if (previous_1) {
                previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
                previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
                fieldNodeSet.forEach(function (field) { return previous_1.fieldNodeSet.add(field); });
            }
            else {
                context.incomingById.set(dataId, {
                    storeObject: incoming,
                    mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
                    fieldNodeSet: fieldNodeSet,
                });
            }
            return dataRef;
        }
        return incoming;
    };
    StoreWriter.prototype.processFieldValue = function (value, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value === null) {
            return __DEV__ ? utilities.cloneDeep(value) : value;
        }
        if (isArray(value)) {
            return value.map(function (item, i) {
                var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
                maybeRecycleChildMergeTree(mergeTree, i);
                return value;
            });
        }
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context: context,
            mergeTree: mergeTree,
        });
    };
    StoreWriter.prototype.flattenFields = function (selectionSet, result, context, typename) {
        if (typename === void 0) { typename = utilities.getTypenameFromResult(result, selectionSet, context.fragmentMap); }
        var fieldMap = new Map();
        var policies = this.cache.policies;
        var limitingTrie = new trie.Trie(false);
        (function flatten(selectionSet, inheritedContext) {
            var visitedNode = limitingTrie.lookup(selectionSet, inheritedContext.clientOnly, inheritedContext.deferred);
            if (visitedNode.visited)
                return;
            visitedNode.visited = true;
            selectionSet.selections.forEach(function (selection) {
                if (!utilities.shouldInclude(selection, context.variables))
                    return;
                var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
                if (!(clientOnly && deferred) &&
                    utilities.isNonEmptyArray(selection.directives)) {
                    selection.directives.forEach(function (dir) {
                        var name = dir.name.value;
                        if (name === "client")
                            clientOnly = true;
                        if (name === "defer") {
                            var args = utilities.argumentsObjectFromField(dir, context.variables);
                            if (!args || args.if !== false) {
                                deferred = true;
                            }
                        }
                    });
                }
                if (utilities.isField(selection)) {
                    var existing = fieldMap.get(selection);
                    if (existing) {
                        clientOnly = clientOnly && existing.clientOnly;
                        deferred = deferred && existing.deferred;
                    }
                    fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
                }
                else {
                    var fragment = utilities.getFragmentFromSelection(selection, context.lookupFragment);
                    if (!fragment && selection.kind === graphql.Kind.FRAGMENT_SPREAD) {
                        throw __DEV__ ? new globals.InvariantError("No fragment named ".concat(selection.name.value)) : new globals.InvariantError(8);
                    }
                    if (fragment &&
                        policies.fragmentMatches(fragment, typename, result, context.variables)) {
                        flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
                    }
                }
            });
        })(selectionSet, context);
        return fieldMap;
    };
    StoreWriter.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
        var _a;
        var _this = this;
        if (mergeTree.map.size && !utilities.isReference(incoming)) {
            var e_1 = (!isArray(incoming) &&
                (utilities.isReference(existing) || storeValueIsStoreObject(existing))) ? existing : void 0;
            var i_1 = incoming;
            if (e_1 && !getStorageArgs) {
                getStorageArgs = [utilities.isReference(e_1) ? e_1.__ref : e_1];
            }
            var changedFields_1;
            var getValue_1 = function (from, name) {
                return isArray(from)
                    ? (typeof name === "number" ? from[name] : void 0)
                    : context.store.getFieldValue(from, String(name));
            };
            mergeTree.map.forEach(function (childTree, storeFieldName) {
                var eVal = getValue_1(e_1, storeFieldName);
                var iVal = getValue_1(i_1, storeFieldName);
                if (void 0 === iVal)
                    return;
                if (getStorageArgs) {
                    getStorageArgs.push(storeFieldName);
                }
                var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields_1 = changedFields_1 || new Map;
                    changedFields_1.set(storeFieldName, aVal);
                }
                if (getStorageArgs) {
                    globals.invariant(getStorageArgs.pop() === storeFieldName);
                }
            });
            if (changedFields_1) {
                incoming = (isArray(i_1) ? i_1.slice(0) : tslib.__assign({}, i_1));
                changedFields_1.forEach(function (value, name) {
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) {
            return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
        }
        return incoming;
    };
    return StoreWriter;
}());
var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
    var map = _a.map;
    if (!map.has(name)) {
        map.set(name, emptyMergeTreePool.pop() || { map: new Map });
    }
    return map.get(name);
}
function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right))
        return left;
    if (!left || mergeTreeIsEmpty(left))
        return right;
    var info = left.info && right.info ? tslib.__assign(tslib.__assign({}, left.info), right.info) : left.info || right.info;
    var needToMergeMaps = left.map.size && right.map.size;
    var map = needToMergeMaps ? new Map :
        left.map.size ? left.map : right.map;
    var merged = { info: info, map: map };
    if (needToMergeMaps) {
        var remainingRightKeys_1 = new Set(right.map.keys());
        left.map.forEach(function (leftTree, key) {
            merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
            remainingRightKeys_1.delete(key);
        });
        remainingRightKeys_1.forEach(function (key) {
            merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
    }
    return merged;
}
function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a, name) {
    var map = _a.map;
    var childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
var warnings = new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function (objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing)
        return;
    var incoming = getChild(incomingObj);
    if (!incoming)
        return;
    if (utilities.isReference(existing))
        return;
    if (equality.equal(existing, incoming))
        return;
    if (Object.keys(existing).every(function (key) { return store.getFieldValue(incoming, key) !== void 0; })) {
        return;
    }
    var parentType = store.getFieldValue(existingRef, "__typename") ||
        store.getFieldValue(incomingObj, "__typename");
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var typeDotName = "".concat(parentType, ".").concat(fieldName);
    if (warnings.has(typeDotName))
        return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!isArray(existing) &&
        !isArray(incoming)) {
        [existing, incoming].forEach(function (child) {
            var typename = store.getFieldValue(child, "__typename");
            if (typeof typename === "string" &&
                !childTypenames.includes(typename)) {
                childTypenames.push(typename);
            }
        });
    }
    __DEV__ && globals.invariant.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length
        ? "either ensure all objects of type " +
            childTypenames.join(" and ") + " have an ID or a custom merge function, or "
        : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1000), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1000), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}

var InMemoryCache = (function (_super) {
    tslib.__extends(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.makeVar = makeVar;
        _this.txCount = 0;
        _this.config = normalizeConfig(config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new Policies({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies,
        });
        _this.init();
        return _this;
    }
    InMemoryCache.prototype.init = function () {
        var rootStore = this.data = new exports.EntityStore.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching,
        });
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
    };
    InMemoryCache.prototype.resetResultCache = function (resetResultIdentities) {
        var _this = this;
        var previousReader = this.storeReader;
        var fragments = this.config.fragments;
        this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: shouldCanonizeResults(this.config),
            canon: resetResultIdentities
                ? void 0
                : previousReader && previousReader.canon,
            fragments: fragments,
        }), fragments);
        this.maybeBroadcastWatch = optimism.wrap(function (c, options) {
            return _this.broadcastWatch(c, options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (c) {
                var store = c.optimistic ? _this.optimisticData : _this.data;
                if (supportsResultCaching(store)) {
                    var optimistic = c.optimistic, id = c.id, variables = c.variables;
                    return store.makeCacheKey(c.query, c.callback, canonicalStringify({ optimistic: optimistic, id: id, variables: variables }));
                }
            }
        });
        new Set([
            this.data.group,
            this.optimisticData.group,
        ]).forEach(function (group) { return group.resetCaching(); });
    };
    InMemoryCache.prototype.restore = function (data) {
        this.init();
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache.prototype.read = function (options) {
        var _a = options.returnPartialData, returnPartialData = _a === void 0 ? false : _a;
        try {
            return this.storeReader.diffQueryAgainstStore(tslib.__assign(tslib.__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: returnPartialData })).result || null;
        }
        catch (e) {
            if (e instanceof MissingFieldError) {
                return null;
            }
            throw e;
        }
    };
    InMemoryCache.prototype.write = function (options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.modify = function (options) {
        if (hasOwn.call(options, "id") && !options.id) {
            return false;
        }
        var store = options.optimistic
            ? this.optimisticData
            : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.diff = function (options) {
        return this.storeReader.diffQueryAgainstStore(tslib.__assign(tslib.__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        if (!this.watches.size) {
            recallCache(this);
        }
        this.watches.add(watch);
        if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
        }
        return function () {
            if (_this.watches.delete(watch) && !_this.watches.size) {
                forgetCache(_this);
            }
            _this.maybeBroadcastWatch.forget(watch);
        };
    };
    InMemoryCache.prototype.gc = function (options) {
        canonicalStringify.reset();
        var ids = this.optimisticData.gc();
        if (options && !this.txCount) {
            if (options.resetResultCache) {
                this.resetResultCache(options.resetResultIdentities);
            }
            else if (options.resetResultIdentities) {
                this.storeReader.resetCanon();
            }
        }
        return ids;
    };
    InMemoryCache.prototype.retain = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache.prototype.release = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache.prototype.identify = function (object) {
        if (utilities.isReference(object))
            return object.__ref;
        try {
            return this.policies.identify(object)[0];
        }
        catch (e) {
            __DEV__ && globals.invariant.warn(e);
        }
    };
    InMemoryCache.prototype.evict = function (options) {
        if (!options.id) {
            if (hasOwn.call(options, "id")) {
                return false;
            }
            options = tslib.__assign(tslib.__assign({}, options), { id: "ROOT_QUERY" });
        }
        try {
            ++this.txCount;
            return this.optimisticData.evict(options, this.data);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.reset = function (options) {
        var _this = this;
        this.init();
        canonicalStringify.reset();
        if (options && options.discardWatches) {
            this.watches.forEach(function (watch) { return _this.maybeBroadcastWatch.forget(watch); });
            this.watches.clear();
            forgetCache(this);
        }
        else {
            this.broadcastWatches();
        }
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.batch = function (options) {
        var _this = this;
        var update = options.update, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
        var updateResult;
        var perform = function (layer) {
            var _a = _this, data = _a.data, optimisticData = _a.optimisticData;
            ++_this.txCount;
            if (layer) {
                _this.data = _this.optimisticData = layer;
            }
            try {
                return updateResult = update(_this);
            }
            finally {
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        var alreadyDirty = new Set();
        if (onWatchUpdated && !this.txCount) {
            this.broadcastWatches(tslib.__assign(tslib.__assign({}, options), { onWatchUpdated: function (watch) {
                    alreadyDirty.add(watch);
                    return false;
                } }));
        }
        if (typeof optimistic === 'string') {
            this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        }
        else if (optimistic === false) {
            perform(this.data);
        }
        else {
            perform();
        }
        if (typeof removeOptimistic === "string") {
            this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        }
        if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches(tslib.__assign(tslib.__assign({}, options), { onWatchUpdated: function (watch, diff) {
                    var result = onWatchUpdated.call(this, watch, diff);
                    if (result !== false) {
                        alreadyDirty.delete(watch);
                    }
                    return result;
                } }));
            if (alreadyDirty.size) {
                alreadyDirty.forEach(function (watch) { return _this.maybeBroadcastWatch.dirty(watch); });
            }
        }
        else {
            this.broadcastWatches(options);
        }
        return updateResult;
    };
    InMemoryCache.prototype.performTransaction = function (update, optimisticId) {
        return this.batch({
            update: update,
            optimistic: optimisticId || (optimisticId !== null),
        });
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = utilities.addTypenameToDocument(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache.prototype.transformForLink = function (document) {
        var fragments = this.config.fragments;
        return fragments
            ? fragments.transform(document)
            : document;
    };
    InMemoryCache.prototype.broadcastWatches = function (options) {
        var _this = this;
        if (!this.txCount) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c, options); });
        }
    };
    InMemoryCache.prototype.broadcastWatch = function (c, options) {
        var lastDiff = c.lastDiff;
        var diff = this.diff(c);
        if (options) {
            if (c.optimistic &&
                typeof options.optimistic === "string") {
                diff.fromOptimisticTransaction = true;
            }
            if (options.onWatchUpdated &&
                options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
                return;
            }
        }
        if (!lastDiff || !equality.equal(lastDiff.result, diff.result)) {
            c.callback(c.lastDiff = diff, lastDiff);
        }
    };
    return InMemoryCache;
}(ApolloCache));

function createFragmentRegistry() {
    var fragments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fragments[_i] = arguments[_i];
    }
    return new (FragmentRegistry.bind.apply(FragmentRegistry, tslib.__spreadArray([void 0], fragments, false)))();
}
var arrayLikeForEach = Array.prototype.forEach;
var FragmentRegistry = (function () {
    function FragmentRegistry() {
        var fragments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fragments[_i] = arguments[_i];
        }
        this.registry = Object.create(null);
        this.resetCaches();
        if (fragments.length) {
            this.register.apply(this, fragments);
        }
    }
    FragmentRegistry.prototype.register = function () {
        var _this = this;
        var definitions = new Map();
        arrayLikeForEach.call(arguments, function (doc) {
            utilities.getFragmentDefinitions(doc).forEach(function (node) {
                definitions.set(node.name.value, node);
            });
        });
        definitions.forEach(function (node, name) {
            if (node !== _this.registry[name]) {
                _this.registry[name] = node;
                _this.invalidate(name);
            }
        });
        return this;
    };
    FragmentRegistry.prototype.invalidate = function (name) { };
    FragmentRegistry.prototype.resetCaches = function () {
        this.invalidate = (this.lookup = this.cacheUnaryMethod("lookup")).dirty;
        this.transform = this.cacheUnaryMethod("transform");
        this.findFragmentSpreads = this.cacheUnaryMethod("findFragmentSpreads");
    };
    FragmentRegistry.prototype.cacheUnaryMethod = function (name) {
        var registry = this;
        var originalMethod = FragmentRegistry.prototype[name];
        return optimism.wrap(function () {
            return originalMethod.apply(registry, arguments);
        }, {
            makeCacheKey: function (arg) { return arg; },
        });
    };
    FragmentRegistry.prototype.lookup = function (fragmentName) {
        return this.registry[fragmentName] || null;
    };
    FragmentRegistry.prototype.transform = function (document) {
        var _this = this;
        var defined = new Map();
        utilities.getFragmentDefinitions(document).forEach(function (def) {
            defined.set(def.name.value, def);
        });
        var unbound = new Set();
        var enqueue = function (spreadName) {
            if (!defined.has(spreadName)) {
                unbound.add(spreadName);
            }
        };
        var enqueueChildSpreads = function (node) { return Object.keys(_this.findFragmentSpreads(node)).forEach(enqueue); };
        enqueueChildSpreads(document);
        var missing = [];
        var map = Object.create(null);
        unbound.forEach(function (fragmentName) {
            var knownFragmentDef = defined.get(fragmentName);
            if (knownFragmentDef) {
                enqueueChildSpreads(map[fragmentName] = knownFragmentDef);
            }
            else {
                missing.push(fragmentName);
                var def = _this.lookup(fragmentName);
                if (def) {
                    enqueueChildSpreads(map[fragmentName] = def);
                }
            }
        });
        if (missing.length) {
            var defsToAppend_1 = [];
            missing.forEach(function (name) {
                var def = map[name];
                if (def) {
                    defsToAppend_1.push(def);
                }
            });
            if (defsToAppend_1.length) {
                document = tslib.__assign(tslib.__assign({}, document), { definitions: document.definitions.concat(defsToAppend_1) });
            }
        }
        return document;
    };
    FragmentRegistry.prototype.findFragmentSpreads = function (root) {
        var spreads = Object.create(null);
        graphql.visit(root, {
            FragmentSpread: function (node) {
                spreads[node.name.value] = node;
            },
        });
        return spreads;
    };
    return FragmentRegistry;
}());

exports.isReference = utilities.isReference;
exports.makeReference = utilities.makeReference;
exports.ApolloCache = ApolloCache;
exports.InMemoryCache = InMemoryCache;
exports.MissingFieldError = MissingFieldError;
exports.Policies = Policies;
exports.cacheSlot = cacheSlot;
exports.canonicalStringify = canonicalStringify;
exports.createFragmentRegistry = createFragmentRegistry;
exports.defaultDataIdFromObject = defaultDataIdFromObject;
exports.fieldNameFromStoreName = fieldNameFromStoreName;
exports.makeVar = makeVar;
//# sourceMappingURL=cache.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/core/core.cjs":
/*!***************************************************!*\
  !*** ./node_modules/@apollo/client/core/core.cjs ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "tslib");
var core = __webpack_require__(/*! ../link/core */ "./node_modules/@apollo/client/link/core/core.cjs");
var http = __webpack_require__(/*! ../link/http */ "./node_modules/@apollo/client/link/http/http.cjs");
var equality = __webpack_require__(/*! @wry/equality */ "@wry/equality");
var cache = __webpack_require__(/*! ../cache */ "./node_modules/@apollo/client/cache/cache.cjs");
var utilities = __webpack_require__(/*! ../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var errors = __webpack_require__(/*! ../errors */ "./node_modules/@apollo/client/errors/errors.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var utils = __webpack_require__(/*! ../link/utils */ "./node_modules/@apollo/client/link/utils/utils.cjs");
var tsInvariant = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.cjs");
var graphqlTag = __webpack_require__(/*! graphql-tag */ "graphql-tag");

var version = '3.7.8';

function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}

function isNonNullObject(obj) {
    return obj !== null && typeof obj === 'object';
}

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = isNonNullObject;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if (isNonNullObject(source) && isNonNullObject(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty$2.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, tslib.__spreadArray([target, source, sourceKey], context, false));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if (isNonNullObject(value)) {
            if (!this.pastCopies.has(value)) {
                if (Array.isArray(value)) {
                    value = value.slice(0);
                }
                else {
                    value = tslib.__assign({ __proto__: Object.getPrototypeOf(value) }, value);
                }
                this.pastCopies.add(value);
            }
        }
        return value;
    };
    return DeepMerger;
}());

function isExecutionPatchIncrementalResult(value) {
    return "incremental" in value;
}
function isExecutionPatchInitialResult(value) {
    return "hasNext" in value && "data" in value;
}
function isExecutionPatchResult(value) {
    return (isExecutionPatchIncrementalResult(value) ||
        isExecutionPatchInitialResult(value));
}
function mergeIncrementalData(prevResult, result) {
    var mergedData = prevResult;
    var merger = new DeepMerger();
    if (isExecutionPatchIncrementalResult(result) &&
        isNonEmptyArray(result.incremental)) {
        result.incremental.forEach(function (_a) {
            var data = _a.data, path = _a.path;
            for (var i = path.length - 1; i >= 0; --i) {
                var key = path[i];
                var isNumericKey = !isNaN(+key);
                var parent_1 = isNumericKey ? [] : {};
                parent_1[key] = data;
                data = parent_1;
            }
            mergedData = merger.merge(mergedData, data);
        });
    }
    return mergedData;
}

exports.NetworkStatus = void 0;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(exports.NetworkStatus || (exports.NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}

var assign = Object.assign, hasOwnProperty$1 = Object.hasOwnProperty;
var ObservableQuery = (function (_super) {
    tslib.__extends(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
        var _this = _super.call(this, function (observer) {
            try {
                var subObserver = observer._subscription._observer;
                if (subObserver && !subObserver.error) {
                    subObserver.error = defaultSubscriptionObserverErrorCallback;
                }
            }
            catch (_a) { }
            var first = !_this.observers.size;
            _this.observers.add(observer);
            var last = _this.last;
            if (last && last.error) {
                observer.error && observer.error(last.error);
            }
            else if (last && last.result) {
                observer.next && observer.next(last.result);
            }
            if (first) {
                _this.reobserve().catch(function () { });
            }
            return function () {
                if (_this.observers.delete(observer) && !_this.observers.size) {
                    _this.tearDownQuery();
                }
            };
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.queryInfo = queryInfo;
        _this.queryManager = queryManager;
        _this.isTornDown = false;
        var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
        var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? (fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy) : _f;
        _this.options = tslib.__assign(tslib.__assign({}, options), { initialFetchPolicy: initialFetchPolicy, fetchPolicy: fetchPolicy });
        _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
        var opDef = utilities.getOperationDefinition(_this.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        return _this;
    }
    Object.defineProperty(ObservableQuery.prototype, "query", {
        get: function () {
            return this.queryManager.transform(this.options.query).document;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservableQuery.prototype, "variables", {
        get: function () {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var observer = {
                next: function (result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery.prototype.getCurrentResult = function (saveAsLastResult) {
        if (saveAsLastResult === void 0) { saveAsLastResult = true; }
        var lastResult = this.getLastResult(true);
        var networkStatus = this.queryInfo.networkStatus ||
            (lastResult && lastResult.networkStatus) ||
            exports.NetworkStatus.ready;
        var result = tslib.__assign(tslib.__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus: networkStatus });
        var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a;
        if (fetchPolicy === 'network-only' ||
            fetchPolicy === 'no-cache' ||
            fetchPolicy === 'standby' ||
            this.queryManager.transform(this.options.query).hasForcedResolvers) ;
        else {
            var diff = this.queryInfo.getDiff();
            if (diff.complete || this.options.returnPartialData) {
                result.data = diff.result;
            }
            if (equality.equal(result.data, {})) {
                result.data = void 0;
            }
            if (diff.complete) {
                delete result.partial;
                if (diff.complete &&
                    result.networkStatus === exports.NetworkStatus.loading &&
                    (fetchPolicy === 'cache-first' ||
                        fetchPolicy === 'cache-only')) {
                    result.networkStatus = exports.NetworkStatus.ready;
                    result.loading = false;
                }
            }
            else {
                result.partial = true;
            }
            if (__DEV__ &&
                !diff.complete &&
                !this.options.partialRefetch &&
                !result.loading &&
                !result.data &&
                !result.error) {
                logMissingFieldErrors(diff.missing);
            }
        }
        if (saveAsLastResult) {
            this.updateLastResult(result);
        }
        return result;
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult, variables) {
        return (!this.last ||
            !equality.equal(this.last.result, newResult) ||
            (variables && !equality.equal(this.last.variables, variables)));
    };
    ObservableQuery.prototype.getLast = function (key, variablesMustMatch) {
        var last = this.last;
        if (last &&
            last[key] &&
            (!variablesMustMatch || equality.equal(last.variables, this.variables))) {
            return last[key];
        }
    };
    ObservableQuery.prototype.getLastResult = function (variablesMustMatch) {
        return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery.prototype.getLastError = function (variablesMustMatch) {
        return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.last;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var _a;
        var reobserveOptions = {
            pollInterval: 0,
        };
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'cache-and-network') {
            reobserveOptions.fetchPolicy = fetchPolicy;
        }
        else if (fetchPolicy === 'no-cache') {
            reobserveOptions.fetchPolicy = 'no-cache';
        }
        else {
            reobserveOptions.fetchPolicy = 'network-only';
        }
        if (__DEV__ && variables && hasOwnProperty$1.call(variables, "variables")) {
            var queryDef = utilities.getQueryDefinition(this.query);
            var vars = queryDef.variableDefinitions;
            if (!vars || !vars.some(function (v) { return v.variable.name.value === "variables"; })) {
                __DEV__ && globals.invariant.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a = queryDef.name) === null || _a === void 0 ? void 0 : _a.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
            }
        }
        if (variables && !equality.equal(this.options.variables, variables)) {
            reobserveOptions.variables = this.options.variables = tslib.__assign(tslib.__assign({}, this.options.variables), variables);
        }
        this.queryInfo.resetLastWrite();
        return this.reobserve(reobserveOptions, exports.NetworkStatus.refetch);
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        var combinedOptions = tslib.__assign(tslib.__assign({}, (fetchMoreOptions.query ? fetchMoreOptions : tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign({}, this.options), { query: this.query }), fetchMoreOptions), { variables: tslib.__assign(tslib.__assign({}, this.options.variables), fetchMoreOptions.variables) }))), { fetchPolicy: "no-cache" });
        var qid = this.queryManager.generateQueryId();
        var queryInfo = this.queryInfo;
        var originalNetworkStatus = queryInfo.networkStatus;
        queryInfo.networkStatus = exports.NetworkStatus.fetchMore;
        if (combinedOptions.notifyOnNetworkStatusChange) {
            this.observe();
        }
        var updatedQuerySet = new Set();
        return this.queryManager.fetchQuery(qid, combinedOptions, exports.NetworkStatus.fetchMore).then(function (fetchMoreResult) {
            _this.queryManager.removeQuery(qid);
            if (queryInfo.networkStatus === exports.NetworkStatus.fetchMore) {
                queryInfo.networkStatus = originalNetworkStatus;
            }
            _this.queryManager.cache.batch({
                update: function (cache) {
                    var updateQuery = fetchMoreOptions.updateQuery;
                    if (updateQuery) {
                        cache.updateQuery({
                            query: _this.query,
                            variables: _this.variables,
                            returnPartialData: true,
                            optimistic: false,
                        }, function (previous) { return updateQuery(previous, {
                            fetchMoreResult: fetchMoreResult.data,
                            variables: combinedOptions.variables,
                        }); });
                    }
                    else {
                        cache.writeQuery({
                            query: combinedOptions.query,
                            variables: combinedOptions.variables,
                            data: fetchMoreResult.data,
                        });
                    }
                },
                onWatchUpdated: function (watch) {
                    updatedQuerySet.add(watch.query);
                },
            });
            return fetchMoreResult;
        }).finally(function () {
            if (!updatedQuerySet.has(_this.query)) {
                reobserveCacheFirst(_this);
            }
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                __DEV__ && globals.invariant.error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery.prototype.setVariables = function (variables) {
        if (equality.equal(this.variables, variables)) {
            return this.observers.size
                ? this.result()
                : Promise.resolve();
        }
        this.options.variables = variables;
        if (!this.observers.size) {
            return Promise.resolve();
        }
        return this.reobserve({
            fetchPolicy: this.options.initialFetchPolicy,
            variables: variables,
        }, exports.NetworkStatus.setVariables);
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var queryManager = this.queryManager;
        var result = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
        var newResult = mapFn(result, {
            variables: this.variables,
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables,
            });
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
    };
    ObservableQuery.prototype.stopPolling = function () {
        this.options.pollInterval = 0;
        this.updatePolling();
    };
    ObservableQuery.prototype.applyNextFetchPolicy = function (reason, options) {
        if (options.nextFetchPolicy) {
            var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
            if (fetchPolicy === "standby") ;
            else if (typeof options.nextFetchPolicy === "function") {
                options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
                    reason: reason,
                    options: options,
                    observable: this,
                    initialFetchPolicy: initialFetchPolicy,
                });
            }
            else if (reason === "variables-changed") {
                options.fetchPolicy = initialFetchPolicy;
            }
            else {
                options.fetchPolicy = options.nextFetchPolicy;
            }
        }
        return options.fetchPolicy;
    };
    ObservableQuery.prototype.fetch = function (options, newNetworkStatus) {
        this.queryManager.setObservableQuery(this);
        return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
    };
    ObservableQuery.prototype.updatePolling = function () {
        var _this = this;
        if (this.queryManager.ssrMode) {
            return;
        }
        var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
        if (!pollInterval) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo &&
            pollingInfo.interval === pollInterval) {
            return;
        }
        __DEV__ ? globals.invariant(pollInterval, 'Attempted to start a polling query without a polling interval.') : globals.invariant(pollInterval, 13);
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function () {
            if (_this.pollingInfo) {
                if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
                    _this.reobserve({
                        fetchPolicy: _this.options.initialFetchPolicy === 'no-cache' ? 'no-cache' : 'network-only',
                    }, exports.NetworkStatus.poll).then(poll, poll);
                }
                else {
                    poll();
                }
            }
        };
        var poll = function () {
            var info = _this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    };
    ObservableQuery.prototype.updateLastResult = function (newResult, variables) {
        if (variables === void 0) { variables = this.variables; }
        this.last = tslib.__assign(tslib.__assign({}, this.last), { result: this.queryManager.assumeImmutableResults
                ? newResult
                : utilities.cloneDeep(newResult), variables: variables });
        if (!utilities.isNonEmptyArray(newResult.errors)) {
            delete this.last.error;
        }
        return this.last;
    };
    ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
        var _this = this;
        this.isTornDown = false;
        var useDisposableConcast = newNetworkStatus === exports.NetworkStatus.refetch ||
            newNetworkStatus === exports.NetworkStatus.fetchMore ||
            newNetworkStatus === exports.NetworkStatus.poll;
        var oldVariables = this.options.variables;
        var oldFetchPolicy = this.options.fetchPolicy;
        var mergedOptions = utilities.compact(this.options, newOptions || {});
        var options = useDisposableConcast
            ? mergedOptions
            : assign(this.options, mergedOptions);
        if (!useDisposableConcast) {
            this.updatePolling();
            if (newOptions &&
                newOptions.variables &&
                !equality.equal(newOptions.variables, oldVariables) &&
                options.fetchPolicy !== "standby" &&
                options.fetchPolicy === oldFetchPolicy) {
                this.applyNextFetchPolicy("variables-changed", options);
                if (newNetworkStatus === void 0) {
                    newNetworkStatus = exports.NetworkStatus.setVariables;
                }
            }
        }
        var variables = options.variables && tslib.__assign({}, options.variables);
        var concast = this.fetch(options, newNetworkStatus);
        var observer = {
            next: function (result) {
                _this.reportResult(result, variables);
            },
            error: function (error) {
                _this.reportError(error, variables);
            },
        };
        if (!useDisposableConcast) {
            if (this.concast && this.observer) {
                this.concast.removeObserver(this.observer);
            }
            this.concast = concast;
            this.observer = observer;
        }
        concast.addObserver(observer);
        return concast.promise;
    };
    ObservableQuery.prototype.observe = function () {
        this.reportResult(this.getCurrentResult(false), this.variables);
    };
    ObservableQuery.prototype.reportResult = function (result, variables) {
        var lastError = this.getLastError();
        if (lastError || this.isDifferentFromLastResult(result, variables)) {
            if (lastError || !result.partial || this.options.returnPartialData) {
                this.updateLastResult(result, variables);
            }
            utilities.iterateObserversSafely(this.observers, 'next', result);
        }
    };
    ObservableQuery.prototype.reportError = function (error, variables) {
        var errorResult = tslib.__assign(tslib.__assign({}, this.getLastResult()), { error: error, errors: error.graphQLErrors, networkStatus: exports.NetworkStatus.error, loading: false });
        this.updateLastResult(errorResult, variables);
        utilities.iterateObserversSafely(this.observers, 'error', this.last.error = error);
    };
    ObservableQuery.prototype.hasObservers = function () {
        return this.observers.size > 0;
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        if (this.isTornDown)
            return;
        if (this.concast && this.observer) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
            delete this.observer;
        }
        this.stopPolling();
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
    };
    return ObservableQuery;
}(utilities.Observable));
utilities.fixObservableSubclass(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
    var _a = obsQuery.options, fetchPolicy = _a.fetchPolicy, nextFetchPolicy = _a.nextFetchPolicy;
    if (fetchPolicy === "cache-and-network" ||
        fetchPolicy === "network-only") {
        return obsQuery.reobserve({
            fetchPolicy: "cache-first",
            nextFetchPolicy: function () {
                this.nextFetchPolicy = nextFetchPolicy;
                if (typeof nextFetchPolicy === "function") {
                    return nextFetchPolicy.apply(this, arguments);
                }
                return fetchPolicy;
            },
        });
    }
    return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error) {
    __DEV__ && globals.invariant.error('Unhandled error', error.message, error.stack);
}
function logMissingFieldErrors(missing) {
    if (__DEV__ && missing) {
        __DEV__ && globals.invariant.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
    }
}

var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.selectionsToResolveCache = new WeakMap();
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = utilities.mergeDeep(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = utilities.mergeDeep(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return (tslib.__assign(tslib.__assign({}, remoteResult), { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if (utilities.hasDirectives(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return utilities.removeClientSetsFromDocument(document);
    };
    LocalState.prototype.prepareContext = function (context) {
        var cache = this.cache;
        return tslib.__assign(tslib.__assign({}, context), { cache: cache, getCacheKey: function (obj) {
                return cache.identify(obj);
            } });
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return (tslib.__assign(tslib.__assign({}, variables), data.exportedVariables)); })];
                }
                return [2, tslib.__assign({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        graphql.visit(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql.BREAK;
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: utilities.buildQueryFromSelectionSet(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return tslib.__awaiter(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, selectionsToResolve, definitionOperation, defaultOperationType, _a, cache, client, execContext, isClientFieldDescendant;
            return tslib.__generator(this, function (_b) {
                mainDefinition = utilities.getMainDefinition(document);
                fragments = utilities.getFragmentDefinitions(document);
                fragmentMap = utilities.createFragmentMap(fragments);
                selectionsToResolve = this.collectSelectionsToResolve(mainDefinition, fragmentMap);
                definitionOperation = mainDefinition.operation;
                defaultOperationType = definitionOperation
                    ? definitionOperation.charAt(0).toUpperCase() +
                        definitionOperation.slice(1)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: tslib.__assign(tslib.__assign({}, context), { cache: cache, client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    selectionsToResolve: selectionsToResolve,
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                isClientFieldDescendant = false;
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, isClientFieldDescendant, rootValue, execContext) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return tslib.__awaiter(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return tslib.__generator(this, function (_a) {
                        if (!isClientFieldDescendant && !execContext.selectionsToResolve.has(selection)) {
                            return [2];
                        }
                        if (!utilities.shouldInclude(selection, variables)) {
                            return [2];
                        }
                        if (utilities.isField(selection)) {
                            return [2, this.resolveField(selection, isClientFieldDescendant, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[utilities.resultKeyNameFromField(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if (utilities.isInlineFragment(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                            __DEV__ ? globals.invariant(fragment, "No fragment named ".concat(selection.name.value)) : globals.invariant(fragment, 11);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return utilities.mergeDeepArray(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, isClientFieldDescendant, rootValue, execContext) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                if (!rootValue) {
                    return [2, null];
                }
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = utilities.resultKeyNameFromField(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(cache.cacheSlot.withValue(this.cache, resolve, [
                                rootValue,
                                utilities.argumentsObjectFromField(field, variables),
                                execContext.context,
                                { field: field, fragmentMap: execContext.fragmentMap },
                            ]));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        var _a, _b;
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        var isClientField = (_b = (_a = field.directives) === null || _a === void 0 ? void 0 : _a.some(function (d) { return d.name.value === 'client'; })) !== null && _b !== void 0 ? _b : false;
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, isClientFieldDescendant || isClientField, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant || isClientField, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, isClientFieldDescendant, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, isClientFieldDescendant, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant, item, execContext);
            }
        }));
    };
    LocalState.prototype.collectSelectionsToResolve = function (mainDefinition, fragmentMap) {
        var isSingleASTNode = function (node) { return !Array.isArray(node); };
        var selectionsToResolveCache = this.selectionsToResolveCache;
        function collectByDefinition(definitionNode) {
            if (!selectionsToResolveCache.has(definitionNode)) {
                var matches_1 = new Set();
                selectionsToResolveCache.set(definitionNode, matches_1);
                graphql.visit(definitionNode, {
                    Directive: function (node, _, __, ___, ancestors) {
                        if (node.name.value === 'client') {
                            ancestors.forEach(function (node) {
                                if (isSingleASTNode(node) && graphql.isSelectionNode(node)) {
                                    matches_1.add(node);
                                }
                            });
                        }
                    },
                    FragmentSpread: function (spread, _, __, ___, ancestors) {
                        var fragment = fragmentMap[spread.name.value];
                        __DEV__ ? globals.invariant(fragment, "No fragment named ".concat(spread.name.value)) : globals.invariant(fragment, 12);
                        var fragmentSelections = collectByDefinition(fragment);
                        if (fragmentSelections.size > 0) {
                            ancestors.forEach(function (node) {
                                if (isSingleASTNode(node) && graphql.isSelectionNode(node)) {
                                    matches_1.add(node);
                                }
                            });
                            matches_1.add(spread);
                            fragmentSelections.forEach(function (selection) {
                                matches_1.add(selection);
                            });
                        }
                    }
                });
            }
            return selectionsToResolveCache.get(definitionNode);
        }
        return collectByDefinition(mainDefinition);
    };
    return LocalState;
}());

var destructiveMethodCounts = new (utilities.canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
    var original = cache[methodName];
    if (typeof original === "function") {
        cache[methodName] = function () {
            destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
            return original.apply(this, arguments);
        };
    }
}
function cancelNotifyTimeout(info) {
    if (info["notifyTimeout"]) {
        clearTimeout(info["notifyTimeout"]);
        info["notifyTimeout"] = void 0;
    }
}
var QueryInfo = (function () {
    function QueryInfo(queryManager, queryId) {
        if (queryId === void 0) { queryId = queryManager.generateQueryId(); }
        this.queryId = queryId;
        this.listeners = new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = new Set();
        this.stopped = false;
        this.dirty = false;
        this.observableQuery = null;
        var cache = this.cache = queryManager.cache;
        if (!destructiveMethodCounts.has(cache)) {
            destructiveMethodCounts.set(cache, 0);
            wrapDestructiveCacheMethod(cache, "evict");
            wrapDestructiveCacheMethod(cache, "modify");
            wrapDestructiveCacheMethod(cache, "reset");
        }
    }
    QueryInfo.prototype.init = function (query) {
        var networkStatus = query.networkStatus || exports.NetworkStatus.loading;
        if (this.variables &&
            this.networkStatus !== exports.NetworkStatus.loading &&
            !equality.equal(this.variables, query.variables)) {
            networkStatus = exports.NetworkStatus.setVariables;
        }
        if (!equality.equal(query.variables, this.variables)) {
            this.lastDiff = void 0;
        }
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: networkStatus,
        });
        if (query.observableQuery) {
            this.setObservableQuery(query.observableQuery);
        }
        if (query.lastRequestId) {
            this.lastRequestId = query.lastRequestId;
        }
        return this;
    };
    QueryInfo.prototype.reset = function () {
        cancelNotifyTimeout(this);
        this.dirty = false;
    };
    QueryInfo.prototype.getDiff = function (variables) {
        if (variables === void 0) { variables = this.variables; }
        var options = this.getDiffOptions(variables);
        if (this.lastDiff && equality.equal(options, this.lastDiff.options)) {
            return this.lastDiff.diff;
        }
        this.updateWatch(this.variables = variables);
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return { complete: false };
        }
        var diff = this.cache.diff(options);
        this.updateLastDiff(diff, options);
        return diff;
    };
    QueryInfo.prototype.updateLastDiff = function (diff, options) {
        this.lastDiff = diff ? {
            diff: diff,
            options: options || this.getDiffOptions(),
        } : void 0;
    };
    QueryInfo.prototype.getDiffOptions = function (variables) {
        var _a;
        if (variables === void 0) { variables = this.variables; }
        return {
            query: this.document,
            variables: variables,
            returnPartialData: true,
            optimistic: true,
            canonizeResults: (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.options.canonizeResults,
        };
    };
    QueryInfo.prototype.setDiff = function (diff) {
        var _this = this;
        var oldDiff = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(diff);
        if (!this.dirty &&
            !equality.equal(oldDiff && oldDiff.result, diff && diff.result)) {
            this.dirty = true;
            if (!this.notifyTimeout) {
                this.notifyTimeout = setTimeout(function () { return _this.notify(); }, 0);
            }
        }
    };
    QueryInfo.prototype.setObservableQuery = function (oq) {
        var _this = this;
        if (oq === this.observableQuery)
            return;
        if (this.oqListener) {
            this.listeners.delete(this.oqListener);
        }
        this.observableQuery = oq;
        if (oq) {
            oq["queryInfo"] = this;
            this.listeners.add(this.oqListener = function () {
                var diff = _this.getDiff();
                if (diff.fromOptimisticTransaction) {
                    oq["observe"]();
                }
                else {
                    reobserveCacheFirst(oq);
                }
            });
        }
        else {
            delete this.oqListener;
        }
    };
    QueryInfo.prototype.notify = function () {
        var _this = this;
        cancelNotifyTimeout(this);
        if (this.shouldNotify()) {
            this.listeners.forEach(function (listener) { return listener(_this); });
        }
        this.dirty = false;
    };
    QueryInfo.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) {
            return false;
        }
        if (isNetworkRequestInFlight(this.networkStatus) &&
            this.observableQuery) {
            var fetchPolicy = this.observableQuery.options.fetchPolicy;
            if (fetchPolicy !== "cache-only" &&
                fetchPolicy !== "cache-and-network") {
                return false;
            }
        }
        return true;
    };
    QueryInfo.prototype.stop = function () {
        if (!this.stopped) {
            this.stopped = true;
            this.reset();
            this.cancel();
            this.cancel = QueryInfo.prototype.cancel;
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
            var oq = this.observableQuery;
            if (oq)
                oq.stopPolling();
        }
    };
    QueryInfo.prototype.cancel = function () { };
    QueryInfo.prototype.updateWatch = function (variables) {
        var _this = this;
        if (variables === void 0) { variables = this.variables; }
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return;
        }
        var watchOptions = tslib.__assign(tslib.__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function (diff) { return _this.setDiff(diff); } });
        if (!this.lastWatch ||
            !equality.equal(watchOptions, this.lastWatch)) {
            this.cancel();
            this.cancel = this.cache.watch(this.lastWatch = watchOptions);
        }
    };
    QueryInfo.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
    };
    QueryInfo.prototype.shouldWrite = function (result, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite &&
            lastWrite.dmCount === destructiveMethodCounts.get(this.cache) &&
            equality.equal(variables, lastWrite.variables) &&
            equality.equal(result.data, lastWrite.result.data));
    };
    QueryInfo.prototype.markResult = function (result, document, options, cacheWriteBehavior) {
        var _this = this;
        var merger = new utilities.DeepMerger();
        var graphQLErrors = utilities.isNonEmptyArray(result.errors)
            ? result.errors.slice(0)
            : [];
        this.reset();
        if ('incremental' in result && utilities.isNonEmptyArray(result.incremental)) {
            var mergedData = mergeIncrementalData(this.getDiff().result, result);
            result.data = mergedData;
        }
        else if ('hasNext' in result && result.hasNext) {
            var diff = this.getDiff();
            result.data = merger.merge(diff.result, result.data);
        }
        this.graphQLErrors = graphQLErrors;
        if (options.fetchPolicy === 'no-cache') {
            this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
        }
        else if (cacheWriteBehavior !== 0) {
            if (shouldWriteResult(result, options.errorPolicy)) {
                this.cache.performTransaction(function (cache) {
                    if (_this.shouldWrite(result, options.variables)) {
                        cache.writeQuery({
                            query: document,
                            data: result.data,
                            variables: options.variables,
                            overwrite: cacheWriteBehavior === 1,
                        });
                        _this.lastWrite = {
                            result: result,
                            variables: options.variables,
                            dmCount: destructiveMethodCounts.get(_this.cache),
                        };
                    }
                    else {
                        if (_this.lastDiff &&
                            _this.lastDiff.diff.complete) {
                            result.data = _this.lastDiff.diff.result;
                            return;
                        }
                    }
                    var diffOptions = _this.getDiffOptions(options.variables);
                    var diff = cache.diff(diffOptions);
                    if (!_this.stopped) {
                        _this.updateWatch(options.variables);
                    }
                    _this.updateLastDiff(diff, diffOptions);
                    if (diff.complete) {
                        result.data = diff.result;
                    }
                });
            }
            else {
                this.lastWrite = void 0;
            }
        }
    };
    QueryInfo.prototype.markReady = function () {
        this.networkError = null;
        return this.networkStatus = exports.NetworkStatus.ready;
    };
    QueryInfo.prototype.markError = function (error) {
        this.networkStatus = exports.NetworkStatus.error;
        this.lastWrite = void 0;
        this.reset();
        if (error.graphQLErrors) {
            this.graphQLErrors = error.graphQLErrors;
        }
        if (error.networkError) {
            this.networkError = error.networkError;
        }
        return error;
    };
    return QueryInfo;
}());
function shouldWriteResult(result, errorPolicy) {
    if (errorPolicy === void 0) { errorPolicy = "none"; }
    var ignoreErrors = errorPolicy === "ignore" ||
        errorPolicy === "all";
    var writeWithErrors = !utilities.graphQLResultHasError(result);
    if (!writeWithErrors && ignoreErrors && result.data) {
        writeWithErrors = true;
    }
    return writeWithErrors;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = (function () {
    function QueryManager(_a) {
        var cache = _a.cache, link = _a.link, defaultOptions = _a.defaultOptions, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a.onBroadcast, _c = _a.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.clientAwareness = {};
        this.queries = new Map();
        this.fetchCancelFns = new Map();
        this.transformCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = new Map();
        this.cache = cache;
        this.link = link;
        this.defaultOptions = defaultOptions || Object.create(null);
        this.queryDeduplication = queryDeduplication;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new LocalState({ cache: cache });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
        if ((this.onBroadcast = onBroadcast)) {
            this.mutationStore = Object.create(null);
        }
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches(__DEV__ ? new globals.InvariantError('QueryManager stopped while query was in flight') : new globals.InvariantError(14));
    };
    QueryManager.prototype.cancelPendingFetches = function (error) {
        this.fetchCancelFns.forEach(function (cancel) { return cancel(error); });
        this.fetchCancelFns.clear();
    };
    QueryManager.prototype.mutate = function (_a) {
        var _b, _c;
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueries = _a.updateQueries, _d = _a.refetchQueries, refetchQueries = _d === void 0 ? [] : _d, _e = _a.awaitRefetchQueries, awaitRefetchQueries = _e === void 0 ? false : _e, updateWithProxyFn = _a.update, onQueryUpdated = _a.onQueryUpdated, _f = _a.fetchPolicy, fetchPolicy = _f === void 0 ? ((_b = this.defaultOptions.mutate) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "network-only" : _f, _g = _a.errorPolicy, errorPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.errorPolicy) || "none" : _g, keepRootFields = _a.keepRootFields, context = _a.context;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var mutationId, _h, document, hasClientExports, mutationStoreValue, self;
            return tslib.__generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        __DEV__ ? globals.invariant(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.') : globals.invariant(mutation, 15);
                        __DEV__ ? globals.invariant(fetchPolicy === 'network-only' ||
                            fetchPolicy === 'no-cache', "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : globals.invariant(fetchPolicy === 'network-only' ||
                            fetchPolicy === 'no-cache', 16);
                        mutationId = this.generateMutationId();
                        _h = this.transform(mutation), document = _h.document, hasClientExports = _h.hasClientExports;
                        mutation = this.cache.transformForLink(document);
                        variables = this.getVariables(mutation, variables);
                        if (!hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = (_j.sent());
                        _j.label = 2;
                    case 2:
                        mutationStoreValue = this.mutationStore &&
                            (this.mutationStore[mutationId] = {
                                mutation: mutation,
                                variables: variables,
                                loading: true,
                                error: null,
                            });
                        if (optimisticResponse) {
                            this.markMutationOptimistic(optimisticResponse, {
                                mutationId: mutationId,
                                document: mutation,
                                variables: variables,
                                fetchPolicy: fetchPolicy,
                                errorPolicy: errorPolicy,
                                context: context,
                                updateQueries: updateQueries,
                                update: updateWithProxyFn,
                                keepRootFields: keepRootFields,
                            });
                        }
                        this.broadcastQueries();
                        self = this;
                        return [2, new Promise(function (resolve, reject) {
                                return utilities.asyncMap(self.getObservableFromLink(mutation, tslib.__assign(tslib.__assign({}, context), { optimisticResponse: optimisticResponse }), variables, false), function (result) {
                                    if (utilities.graphQLResultHasError(result) && errorPolicy === 'none') {
                                        throw new errors.ApolloError({
                                            graphQLErrors: utilities.getGraphQLErrorsFromResult(result),
                                        });
                                    }
                                    if (mutationStoreValue) {
                                        mutationStoreValue.loading = false;
                                        mutationStoreValue.error = null;
                                    }
                                    var storeResult = tslib.__assign({}, result);
                                    if (typeof refetchQueries === "function") {
                                        refetchQueries = refetchQueries(storeResult);
                                    }
                                    if (errorPolicy === 'ignore' &&
                                        utilities.graphQLResultHasError(storeResult)) {
                                        delete storeResult.errors;
                                    }
                                    return self.markMutationResult({
                                        mutationId: mutationId,
                                        result: storeResult,
                                        document: mutation,
                                        variables: variables,
                                        fetchPolicy: fetchPolicy,
                                        errorPolicy: errorPolicy,
                                        context: context,
                                        update: updateWithProxyFn,
                                        updateQueries: updateQueries,
                                        awaitRefetchQueries: awaitRefetchQueries,
                                        refetchQueries: refetchQueries,
                                        removeOptimistic: optimisticResponse ? mutationId : void 0,
                                        onQueryUpdated: onQueryUpdated,
                                        keepRootFields: keepRootFields,
                                    });
                                }).subscribe({
                                    next: function (storeResult) {
                                        self.broadcastQueries();
                                        if (!('hasNext' in storeResult) || storeResult.hasNext === false) {
                                            resolve(storeResult);
                                        }
                                    },
                                    error: function (err) {
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = err;
                                        }
                                        if (optimisticResponse) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        reject(err instanceof errors.ApolloError ? err : new errors.ApolloError({
                                            networkError: err,
                                        }));
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.markMutationResult = function (mutation, cache) {
        var _this = this;
        if (cache === void 0) { cache = this.cache; }
        var result = mutation.result;
        var cacheWrites = [];
        var skipCache = mutation.fetchPolicy === "no-cache";
        if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
            if (!isExecutionPatchIncrementalResult(result)) {
                cacheWrites.push({
                    result: result.data,
                    dataId: 'ROOT_MUTATION',
                    query: mutation.document,
                    variables: mutation.variables,
                });
            }
            if (isExecutionPatchIncrementalResult(result) && utilities.isNonEmptyArray(result.incremental)) {
                var diff = cache.diff({
                    id: "ROOT_MUTATION",
                    query: this.transform(mutation.document).asQuery,
                    variables: mutation.variables,
                    optimistic: false,
                    returnPartialData: true,
                });
                var mergedData = void 0;
                if (diff.result) {
                    mergedData = mergeIncrementalData(diff.result, result);
                }
                if (typeof mergedData !== 'undefined') {
                    result.data = mergedData;
                    cacheWrites.push({
                        result: mergedData,
                        dataId: 'ROOT_MUTATION',
                        query: mutation.document,
                        variables: mutation.variables,
                    });
                }
            }
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
                this.queries.forEach(function (_a, queryId) {
                    var observableQuery = _a.observableQuery;
                    var queryName = observableQuery && observableQuery.queryName;
                    if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
                        return;
                    }
                    var updater = updateQueries_1[queryName];
                    var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
                    var _c = cache.diff({
                        query: document,
                        variables: variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _c.result, complete = _c.complete;
                    if (complete && currentQueryResult) {
                        var nextQueryResult = updater(currentQueryResult, {
                            mutationResult: result,
                            queryName: document && utilities.getOperationName(document) || void 0,
                            queryVariables: variables,
                        });
                        if (nextQueryResult) {
                            cacheWrites.push({
                                result: nextQueryResult,
                                dataId: 'ROOT_QUERY',
                                query: document,
                                variables: variables,
                            });
                        }
                    }
                });
            }
        }
        if (cacheWrites.length > 0 ||
            mutation.refetchQueries ||
            mutation.update ||
            mutation.onQueryUpdated ||
            mutation.removeOptimistic) {
            var results_1 = [];
            this.refetchQueries({
                updateCache: function (cache) {
                    if (!skipCache) {
                        cacheWrites.forEach(function (write) { return cache.write(write); });
                    }
                    var update = mutation.update;
                    var isFinalResult = !isExecutionPatchResult(result) ||
                        (isExecutionPatchIncrementalResult(result) && !result.hasNext);
                    if (update) {
                        if (!skipCache) {
                            var diff = cache.diff({
                                id: "ROOT_MUTATION",
                                query: _this.transform(mutation.document).asQuery,
                                variables: mutation.variables,
                                optimistic: false,
                                returnPartialData: true,
                            });
                            if (diff.complete) {
                                result = tslib.__assign(tslib.__assign({}, result), { data: diff.result });
                                if ('incremental' in result) {
                                    delete result.incremental;
                                }
                                if ('hasNext' in result) {
                                    delete result.hasNext;
                                }
                            }
                        }
                        if (isFinalResult) {
                            update(cache, result, {
                                context: mutation.context,
                                variables: mutation.variables,
                            });
                        }
                    }
                    if (!skipCache && !mutation.keepRootFields && isFinalResult) {
                        cache.modify({
                            id: 'ROOT_MUTATION',
                            fields: function (value, _a) {
                                var fieldName = _a.fieldName, DELETE = _a.DELETE;
                                return fieldName === "__typename" ? value : DELETE;
                            },
                        });
                    }
                },
                include: mutation.refetchQueries,
                optimistic: false,
                removeOptimistic: mutation.removeOptimistic,
                onQueryUpdated: mutation.onQueryUpdated || null,
            }).forEach(function (result) { return results_1.push(result); });
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
                return Promise.all(results_1).then(function () { return result; });
            }
        }
        return Promise.resolve(result);
    };
    QueryManager.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function"
            ? optimisticResponse(mutation.variables)
            : optimisticResponse;
        return this.cache.recordOptimisticTransaction(function (cache) {
            try {
                _this.markMutationResult(tslib.__assign(tslib.__assign({}, mutation), { result: { data: data } }), cache);
            }
            catch (error) {
                __DEV__ && globals.invariant.error(error);
            }
        }, mutation.mutationId);
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager.prototype.getQueryStore = function () {
        var store = Object.create(null);
        this.queries.forEach(function (info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors,
            };
        });
        return store;
    };
    QueryManager.prototype.resetErrors = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
            queryInfo.networkError = undefined;
            queryInfo.graphQLErrors = [];
        }
    };
    QueryManager.prototype.transform = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var transformed = this.cache.transformDocument(document);
            var noConnection = utilities.removeConnectionDirectiveFromDocument(transformed);
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = noConnection && this.localState.serverQuery(noConnection);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: utilities.hasClientExports(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: utilities.getDefaultValues(utilities.getOperationDefinition(transformed)),
                asQuery: tslib.__assign(tslib.__assign({}, transformed), { definitions: transformed.definitions.map(function (def) {
                        if (def.kind === "OperationDefinition" &&
                            def.operation !== "query") {
                            return tslib.__assign(tslib.__assign({}, def), { operation: "query" });
                        }
                        return def;
                    }) })
            };
            var add = function (doc) {
                if (doc && !transformCache.has(doc)) {
                    transformCache.set(doc, cacheEntry_1);
                }
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return tslib.__assign(tslib.__assign({}, this.transform(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options) {
        options = tslib.__assign(tslib.__assign({}, options), { variables: this.getVariables(options.query, options.variables) });
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var queryInfo = new QueryInfo(this);
        var observable = new ObservableQuery({
            queryManager: this,
            queryInfo: queryInfo,
            options: options,
        });
        this.queries.set(observable.queryId, queryInfo);
        queryInfo.init({
            document: observable.query,
            observableQuery: observable,
            variables: observable.variables,
        });
        return observable;
    };
    QueryManager.prototype.query = function (options, queryId) {
        var _this = this;
        if (queryId === void 0) { queryId = this.generateQueryId(); }
        __DEV__ ? globals.invariant(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.') : globals.invariant(options.query, 17);
        __DEV__ ? globals.invariant(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.') : globals.invariant(options.query.kind === 'Document', 18);
        __DEV__ ? globals.invariant(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.') : globals.invariant(!options.returnPartialData, 19);
        __DEV__ ? globals.invariant(!options.pollInterval, 'pollInterval option only supported on watchQuery.') : globals.invariant(!options.pollInterval, 20);
        return this.fetchQuery(queryId, options).finally(function () { return _this.stopQuery(queryId); });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
    };
    QueryManager.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
    };
    QueryManager.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo)
            queryInfo.stop();
    };
    QueryManager.prototype.clearStore = function (options) {
        if (options === void 0) { options = {
            discardWatches: true,
        }; }
        this.cancelPendingFetches(__DEV__ ? new globals.InvariantError('Store reset while query was in flight (not completed in link chain)') : new globals.InvariantError(21));
        this.queries.forEach(function (queryInfo) {
            if (queryInfo.observableQuery) {
                queryInfo.networkStatus = exports.NetworkStatus.loading;
            }
            else {
                queryInfo.stop();
            }
        });
        if (this.mutationStore) {
            this.mutationStore = Object.create(null);
        }
        return this.cache.reset(options);
    };
    QueryManager.prototype.getObservableQueries = function (include) {
        var _this = this;
        if (include === void 0) { include = "active"; }
        var queries = new Map();
        var queryNamesAndDocs = new Map();
        var legacyQueryOptions = new Set();
        if (Array.isArray(include)) {
            include.forEach(function (desc) {
                if (typeof desc === "string") {
                    queryNamesAndDocs.set(desc, false);
                }
                else if (utilities.isDocumentNode(desc)) {
                    queryNamesAndDocs.set(_this.transform(desc).document, false);
                }
                else if (utilities.isNonNullObject(desc) && desc.query) {
                    legacyQueryOptions.add(desc);
                }
            });
        }
        this.queries.forEach(function (_a, queryId) {
            var oq = _a.observableQuery, document = _a.document;
            if (oq) {
                if (include === "all") {
                    queries.set(queryId, oq);
                    return;
                }
                var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
                if (fetchPolicy === "standby" ||
                    (include === "active" && !oq.hasObservers())) {
                    return;
                }
                if (include === "active" ||
                    (queryName && queryNamesAndDocs.has(queryName)) ||
                    (document && queryNamesAndDocs.has(document))) {
                    queries.set(queryId, oq);
                    if (queryName)
                        queryNamesAndDocs.set(queryName, true);
                    if (document)
                        queryNamesAndDocs.set(document, true);
                }
            }
        });
        if (legacyQueryOptions.size) {
            legacyQueryOptions.forEach(function (options) {
                var queryId = utilities.makeUniqueId("legacyOneTimeQuery");
                var queryInfo = _this.getQuery(queryId).init({
                    document: options.query,
                    variables: options.variables,
                });
                var oq = new ObservableQuery({
                    queryManager: _this,
                    queryInfo: queryInfo,
                    options: tslib.__assign(tslib.__assign({}, options), { fetchPolicy: "network-only" }),
                });
                globals.invariant(oq.queryId === queryId);
                queryInfo.setObservableQuery(oq);
                queries.set(queryId, oq);
            });
        }
        if (__DEV__ && queryNamesAndDocs.size) {
            queryNamesAndDocs.forEach(function (included, nameOrDoc) {
                if (!included) {
                    __DEV__ && globals.invariant.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
                }
            });
        }
        return queries;
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach(function (observableQuery, queryId) {
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (includeStandby ||
                (fetchPolicy !== "standby" &&
                    fetchPolicy !== "cache-only")) {
                observableQueryPromises.push(observableQuery.refetch());
            }
            _this.getQuery(queryId).setDiff(null);
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.setObservableQuery = function (observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager.prototype.startGraphQLSubscription = function (_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, errorPolicy = _a.errorPolicy, variables = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, context, variables).map(function (result) {
                if (fetchPolicy !== 'no-cache') {
                    if (shouldWriteResult(result, errorPolicy)) {
                        _this.cache.write({
                            query: query,
                            result: result.data,
                            dataId: 'ROOT_SUBSCRIPTION',
                            variables: variables,
                        });
                    }
                    _this.broadcastQueries();
                }
                if (utilities.graphQLResultHasError(result)) {
                    throw new errors.ApolloError({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
            return new utilities.Observable(function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return sub = observable.subscribe(observer); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        this.fetchCancelFns.delete(queryId);
        if (this.queries.has(queryId)) {
            this.getQuery(queryId).stop();
            this.queries.delete(queryId);
        }
    };
    QueryManager.prototype.broadcastQueries = function () {
        if (this.onBroadcast)
            this.onBroadcast();
        this.queries.forEach(function (info) { return info.notify(); });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
        var _this = this;
        var _a;
        if (deduplication === void 0) { deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication; }
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: utilities.getOperationName(serverQuery) || void 0,
                context: this.prepareContext(tslib.__assign(tslib.__assign({}, context), { forceFetch: !deduplication })),
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = cache.canonicalStringify(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    var concast = new utilities.Concast([
                        core.execute(link, operation)
                    ]);
                    byVariables_1.set(varJson_1, observable = concast);
                    concast.beforeNext(function () {
                        if (byVariables_1.delete(varJson_1) &&
                            byVariables_1.size < 1) {
                            inFlightLinkObservables_1.delete(serverQuery);
                        }
                    });
                }
            }
            else {
                observable = new utilities.Concast([
                    core.execute(link, operation)
                ]);
            }
        }
        else {
            observable = new utilities.Concast([
                utilities.Observable.of({ data: {} })
            ]);
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) {
            observable = utilities.asyncMap(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.getResultsFromLink = function (queryInfo, cacheWriteBehavior, options) {
        var requestId = queryInfo.lastRequestId = this.generateRequestId();
        var linkDocument = this.cache.transformForLink(this.transform(queryInfo.document).document);
        return utilities.asyncMap(this.getObservableFromLink(linkDocument, options.context, options.variables), function (result) {
            var graphQLErrors = utilities.getGraphQLErrorsFromResult(result);
            var hasErrors = graphQLErrors.length > 0;
            if (requestId >= queryInfo.lastRequestId) {
                if (hasErrors && options.errorPolicy === "none") {
                    throw queryInfo.markError(new errors.ApolloError({
                        graphQLErrors: graphQLErrors,
                    }));
                }
                queryInfo.markResult(result, linkDocument, options, cacheWriteBehavior);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: exports.NetworkStatus.ready,
            };
            if (hasErrors && options.errorPolicy !== "ignore") {
                aqr.errors = graphQLErrors;
                aqr.networkStatus = exports.NetworkStatus.error;
            }
            return aqr;
        }, function (networkError) {
            var error = errors.isApolloError(networkError)
                ? networkError
                : new errors.ApolloError({ networkError: networkError });
            if (requestId >= queryInfo.lastRequestId) {
                queryInfo.markError(error);
            }
            throw error;
        });
    };
    QueryManager.prototype.fetchQueryObservable = function (queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) { networkStatus = exports.NetworkStatus.loading; }
        var query = this.transform(options.query).document;
        var variables = this.getVariables(query, options.variables);
        var queryInfo = this.getQuery(queryId);
        var defaults = this.defaultOptions.watchQuery;
        var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? defaults && defaults.fetchPolicy || "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults && defaults.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var normalized = Object.assign({}, options, {
            query: query,
            variables: variables,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            returnPartialData: returnPartialData,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            context: context,
        });
        var fromVariables = function (variables) {
            normalized.variables = variables;
            var concastSources = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
            if (normalized.fetchPolicy !== "standby" &&
                concastSources.length > 0 &&
                queryInfo.observableQuery) {
                queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
            }
            return concastSources;
        };
        var cleanupCancelFn = function () { return _this.fetchCancelFns.delete(queryId); };
        this.fetchCancelFns.set(queryId, function (reason) {
            cleanupCancelFn();
            setTimeout(function () { return concast.cancel(reason); });
        });
        var concast = new utilities.Concast(this.transform(normalized.query).hasClientExports
            ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables)
            : fromVariables(normalized.variables));
        concast.promise.then(cleanupCancelFn, cleanupCancelFn);
        return concast;
    };
    QueryManager.prototype.refetchQueries = function (_a) {
        var _this = this;
        var updateCache = _a.updateCache, include = _a.include, _b = _a.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? utilities.makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a.onQueryUpdated;
        var includedQueriesById = new Map();
        if (include) {
            this.getObservableQueries(include).forEach(function (oq, queryId) {
                includedQueriesById.set(queryId, {
                    oq: oq,
                    lastDiff: _this.getQuery(queryId).getDiff(),
                });
            });
        }
        var results = new Map;
        if (updateCache) {
            this.cache.batch({
                update: updateCache,
                optimistic: optimistic && removeOptimistic || false,
                removeOptimistic: removeOptimistic,
                onWatchUpdated: function (watch, diff, lastDiff) {
                    var oq = watch.watcher instanceof QueryInfo &&
                        watch.watcher.observableQuery;
                    if (oq) {
                        if (onQueryUpdated) {
                            includedQueriesById.delete(oq.queryId);
                            var result = onQueryUpdated(oq, diff, lastDiff);
                            if (result === true) {
                                result = oq.refetch();
                            }
                            if (result !== false) {
                                results.set(oq, result);
                            }
                            return result;
                        }
                        if (onQueryUpdated !== null) {
                            includedQueriesById.set(oq.queryId, { oq: oq, lastDiff: lastDiff, diff: diff });
                        }
                    }
                },
            });
        }
        if (includedQueriesById.size) {
            includedQueriesById.forEach(function (_a, queryId) {
                var oq = _a.oq, lastDiff = _a.lastDiff, diff = _a.diff;
                var result;
                if (onQueryUpdated) {
                    if (!diff) {
                        var info = oq["queryInfo"];
                        info.reset();
                        diff = info.getDiff();
                    }
                    result = onQueryUpdated(oq, diff, lastDiff);
                }
                if (!onQueryUpdated || result === true) {
                    result = oq.refetch();
                }
                if (result !== false) {
                    results.set(oq, result);
                }
                if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
                    _this.stopQueryNoBroadcast(queryId);
                }
            });
        }
        if (removeOptimistic) {
            this.cache.removeOptimistic(removeOptimistic);
        }
        return results;
    };
    QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, _a, networkStatus) {
        var _this = this;
        var query = _a.query, variables = _a.variables, fetchPolicy = _a.fetchPolicy, refetchWritePolicy = _a.refetchWritePolicy, errorPolicy = _a.errorPolicy, returnPartialData = _a.returnPartialData, context = _a.context, notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
        var oldNetworkStatus = queryInfo.networkStatus;
        queryInfo.init({
            document: this.transform(query).document,
            variables: variables,
            networkStatus: networkStatus,
        });
        var readCache = function () { return queryInfo.getDiff(variables); };
        var resultsFromCache = function (diff, networkStatus) {
            if (networkStatus === void 0) { networkStatus = queryInfo.networkStatus || exports.NetworkStatus.loading; }
            var data = diff.result;
            if (__DEV__ &&
                !returnPartialData &&
                !equality.equal(data, {})) {
                logMissingFieldErrors(diff.missing);
            }
            var fromData = function (data) { return utilities.Observable.of(tslib.__assign({ data: data, loading: isNetworkRequestInFlight(networkStatus), networkStatus: networkStatus }, (diff.complete ? null : { partial: true }))); };
            if (data && _this.transform(query).hasForcedResolvers) {
                return _this.localState.runResolvers({
                    document: query,
                    remoteResult: { data: data },
                    context: context,
                    variables: variables,
                    onlyRunForcedResolvers: true,
                }).then(function (resolved) { return fromData(resolved.data || void 0); });
            }
            if (errorPolicy === 'none' &&
                networkStatus === exports.NetworkStatus.refetch &&
                Array.isArray(diff.missing)) {
                return fromData(void 0);
            }
            return fromData(data);
        };
        var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 :
            (networkStatus === exports.NetworkStatus.refetch &&
                refetchWritePolicy !== "merge") ? 1
                : 2;
        var resultsFromLink = function () { return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
            variables: variables,
            context: context,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
        }); };
        var shouldNotify = notifyOnNetworkStatusChange &&
            typeof oldNetworkStatus === "number" &&
            oldNetworkStatus !== networkStatus &&
            isNetworkRequestInFlight(networkStatus);
        switch (fetchPolicy) {
            default:
            case "cache-first": {
                var diff = readCache();
                if (diff.complete) {
                    return [
                        resultsFromCache(diff, queryInfo.markReady()),
                    ];
                }
                if (returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-and-network": {
                var diff = readCache();
                if (diff.complete || returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-only":
                return [
                    resultsFromCache(readCache(), queryInfo.markReady()),
                ];
            case "network-only":
                if (shouldNotify) {
                    return [
                        resultsFromCache(readCache()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "no-cache":
                if (shouldNotify) {
                    return [
                        resultsFromCache(queryInfo.getDiff()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "standby":
                return [];
        }
    };
    QueryManager.prototype.getQuery = function (queryId) {
        if (queryId && !this.queries.has(queryId)) {
            this.queries.set(queryId, new QueryInfo(this, queryId));
        }
        return this.queries.get(queryId);
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return tslib.__assign(tslib.__assign({}, newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager;
}());

var hasSuggestedDevtools = false;
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === 'object' &&
            !window.__APOLLO_CLIENT__ &&
            __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link) {
            link = uri
                ? new http.HttpLink({ uri: uri, credentials: credentials, headers: headers })
                : core.ApolloLink.empty();
        }
        if (!cache) {
            throw __DEV__ ? new globals.InvariantError("To initialize Apollo Client, you must specify a 'cache' property " +
                "in the options object. \n" +
                "For more information, please visit: https://go.apollo.dev/c/docs") : new globals.InvariantError(9);
        }
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || Object.create(null);
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        if (connectToDevTools && typeof window === 'object') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && connectToDevTools && __DEV__) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self &&
                !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                var nav = window.navigator;
                var ua = nav && nav.userAgent;
                var url = void 0;
                if (typeof ua === "string") {
                    if (ua.indexOf("Chrome/") > -1) {
                        url = "https://chrome.google.com/webstore/detail/" +
                            "apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                    }
                    else if (ua.indexOf("Firefox/") > -1) {
                        url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                    }
                }
                if (url) {
                    __DEV__ && globals.invariant.log("Download the Apollo DevTools for a better development " +
                        "experience: " + url);
                }
            }
        }
        this.version = version;
        this.localState = new LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new QueryManager({
            cache: this.cache,
            link: this.link,
            defaultOptions: this.defaultOptions,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: connectToDevTools ? function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.getQueryStore(),
                            mutations: _this.queryManager.mutationStore || {},
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            } : void 0,
        });
    }
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = utilities.mergeOptions(this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = tslib.__assign(tslib.__assign({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = utilities.mergeOptions(this.defaultOptions.query, options);
        }
        __DEV__ ? globals.invariant(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' +
            'client.query can only return a single result. Please use client.watchQuery ' +
            'to receive multiple results from the cache and the network, or consider ' +
            'using a different fetchPolicy, such as cache-first or network-only.') : globals.invariant(options.fetchPolicy !== 'cache-and-network', 10);
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = tslib.__assign(tslib.__assign({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = utilities.mergeOptions(this.defaultOptions.mutate, options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.writeFragment = function (options) {
        this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return core.execute(this.link, payload);
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore({
            discardWatches: false,
        }); })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore({
            discardWatches: true,
        }); })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient.prototype.refetchQueries = function (options) {
        var map = this.queryManager.refetchQueries(options);
        var queries = [];
        var results = [];
        map.forEach(function (result, obsQuery) {
            queries.push(obsQuery);
            results.push(result);
        });
        var result = Promise.all(results);
        result.queries = queries;
        result.results = results;
        result.catch(function (error) {
            __DEV__ && globals.invariant.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error));
        });
        return result;
    };
    ApolloClient.prototype.getObservableQueries = function (include) {
        if (include === void 0) { include = "active"; }
        return this.queryManager.getObservableQueries(include);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient.prototype.setLink = function (newLink) {
        this.link = this.queryManager.link = newLink;
    };
    return ApolloClient;
}());

tsInvariant.setVerbosity(globals.DEV ? "log" : "silent");

exports.ApolloCache = cache.ApolloCache;
exports.Cache = cache.Cache;
exports.InMemoryCache = cache.InMemoryCache;
exports.MissingFieldError = cache.MissingFieldError;
exports.defaultDataIdFromObject = cache.defaultDataIdFromObject;
exports.makeVar = cache.makeVar;
exports.Observable = utilities.Observable;
exports.isReference = utilities.isReference;
exports.makeReference = utilities.makeReference;
exports.mergeOptions = utilities.mergeOptions;
exports.ApolloError = errors.ApolloError;
exports.isApolloError = errors.isApolloError;
exports.fromError = utils.fromError;
exports.fromPromise = utils.fromPromise;
exports.throwServerError = utils.throwServerError;
exports.toPromise = utils.toPromise;
exports.setLogVerbosity = tsInvariant.setVerbosity;
exports.disableExperimentalFragmentVariables = graphqlTag.disableExperimentalFragmentVariables;
exports.disableFragmentWarnings = graphqlTag.disableFragmentWarnings;
exports.enableExperimentalFragmentVariables = graphqlTag.enableExperimentalFragmentVariables;
exports.gql = graphqlTag.gql;
exports.resetCaches = graphqlTag.resetCaches;
exports.ApolloClient = ApolloClient;
exports.ObservableQuery = ObservableQuery;
for (var k in core) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = core[k];
}
for (var k in http) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = http[k];
}
//# sourceMappingURL=core.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/errors/errors.cjs":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/errors/errors.cjs ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var utilities = __webpack_require__(/*! ../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");

function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (utilities.isNonEmptyArray(err.graphQLErrors) || utilities.isNonEmptyArray(err.clientErrors)) {
        var errors = (err.graphQLErrors || [])
            .concat(err.clientErrors || []);
        errors.forEach(function (error) {
            var errorMessage = error
                ? error.message
                : 'Error message not found.';
            message += "".concat(errorMessage, "\n");
        });
    }
    if (err.networkError) {
        message += "".concat(err.networkError.message, "\n");
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    tslib.__extends(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.name = 'ApolloError';
        _this.graphQLErrors = graphQLErrors || [];
        _this.clientErrors = clientErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

exports.ApolloError = ApolloError;
exports.isApolloError = isApolloError;
//# sourceMappingURL=errors.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/context/context.cjs":
/*!**************************************************************!*\
  !*** ./node_modules/@apollo/client/link/context/context.cjs ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "tslib");
var core = __webpack_require__(/*! ../core */ "./node_modules/@apollo/client/link/core/core.cjs");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");

function setContext(setter) {
    return new core.ApolloLink(function (operation, forward) {
        var request = tslib.__rest(operation, []);
        return new utilities.Observable(function (observer) {
            var handle;
            var closed = false;
            Promise.resolve(request)
                .then(function (req) { return setter(req, operation.getContext()); })
                .then(operation.setContext)
                .then(function () {
                if (closed)
                    return;
                handle = forward(operation).subscribe({
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer),
                });
            })
                .catch(observer.error.bind(observer));
            return function () {
                closed = true;
                if (handle)
                    handle.unsubscribe();
            };
        });
    });
}

exports.setContext = setContext;
//# sourceMappingURL=context.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/core/core.cjs":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/core.cjs ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "tslib");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/@apollo/client/link/utils/utils.cjs");

function passthrough(op, forward) {
    return (forward ? forward(op) : utilities.Observable.of());
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
    return link.request.length <= 1;
}
var LinkError = (function (_super) {
    tslib.__extends(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.empty = function () {
        return new ApolloLink(function () { return utilities.Observable.of(); });
    };
    ApolloLink.from = function (links) {
        if (links.length === 0)
            return ApolloLink.empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    ApolloLink.split = function (test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            return new ApolloLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || utilities.Observable.of()
                    : rightLink.request(operation) || utilities.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || utilities.Observable.of()
                    : rightLink.request(operation, forward) || utilities.Observable.of();
            });
        }
    };
    ApolloLink.execute = function (link, operation) {
        return (link.request(utils.createOperation(operation.context, utils.transformOperation(utils.validateOperation(operation)))) || utilities.Observable.of());
    };
    ApolloLink.concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            __DEV__ && globals.invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
            return new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || utilities.Observable.of(); }) || utilities.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || utilities.Observable.of();
                }) || utilities.Observable.of());
            });
        }
    };
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return ApolloLink.concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw __DEV__ ? new globals.InvariantError('request is not implemented') : new globals.InvariantError(22);
    };
    ApolloLink.prototype.onError = function (error, observer) {
        if (observer && observer.error) {
            observer.error(error);
            return false;
        }
        throw error;
    };
    ApolloLink.prototype.setOnError = function (fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink;
}());

var empty = ApolloLink.empty;

var from = ApolloLink.from;

var split = ApolloLink.split;

var concat = ApolloLink.concat;

var execute = ApolloLink.execute;

exports.ApolloLink = ApolloLink;
exports.concat = concat;
exports.empty = empty;
exports.execute = execute;
exports.from = from;
exports.split = split;
//# sourceMappingURL=core.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/http.cjs":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/http.cjs ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "tslib");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/@apollo/client/link/utils/utils.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var core = __webpack_require__(/*! ../core */ "./node_modules/@apollo/client/link/core/core.cjs");

typeof WeakMap === 'function' &&
    globals.maybe(function () { return navigator.product; }) !== 'ReactNative';
var canUseSymbol = typeof Symbol === 'function' &&
    typeof Symbol.for === 'function';
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
typeof globals.maybe(function () { return window.document.createElement; }) === "function";
globals.maybe(function () { return navigator.userAgent.indexOf("jsdom") >= 0; }) || false;

function isNodeResponse(value) {
    return !!value.body;
}
function isReadableStream(value) {
    return !!value.getReader;
}
function isAsyncIterableIterator(value) {
    return !!(canUseAsyncIteratorSymbol &&
        value[Symbol.asyncIterator]);
}
function isStreamableBlob(value) {
    return !!value.stream;
}
function isBlob(value) {
    return !!value.arrayBuffer;
}
function isNodeReadableStream(value) {
    return !!value.pipe;
}

function asyncIterator(source) {
    var _a;
    var iterator = source[Symbol.asyncIterator]();
    return _a = {
            next: function () {
                return iterator.next();
            }
        },
        _a[Symbol.asyncIterator] = function () {
            return this;
        },
        _a;
}

function nodeStreamIterator(stream) {
    var cleanup = null;
    var error = null;
    var done = false;
    var data = [];
    var waiting = [];
    function onData(chunk) {
        if (error)
            return;
        if (waiting.length) {
            var shiftedArr = waiting.shift();
            if (Array.isArray(shiftedArr) && shiftedArr[0]) {
                return shiftedArr[0]({ value: chunk, done: false });
            }
        }
        data.push(chunk);
    }
    function onError(err) {
        error = err;
        var all = waiting.slice();
        all.forEach(function (pair) {
            pair[1](err);
        });
        !cleanup || cleanup();
    }
    function onEnd() {
        done = true;
        var all = waiting.slice();
        all.forEach(function (pair) {
            pair[0]({ value: undefined, done: true });
        });
        !cleanup || cleanup();
    }
    cleanup = function () {
        cleanup = null;
        stream.removeListener("data", onData);
        stream.removeListener("error", onError);
        stream.removeListener("end", onEnd);
        stream.removeListener("finish", onEnd);
        stream.removeListener("close", onEnd);
    };
    stream.on("data", onData);
    stream.on("error", onError);
    stream.on("end", onEnd);
    stream.on("finish", onEnd);
    stream.on("close", onEnd);
    function getNext() {
        return new Promise(function (resolve, reject) {
            if (error)
                return reject(error);
            if (data.length)
                return resolve({ value: data.shift(), done: false });
            if (done)
                return resolve({ value: undefined, done: true });
            waiting.push([resolve, reject]);
        });
    }
    var iterator = {
        next: function () {
            return getNext();
        },
    };
    if (utilities.canUseAsyncIteratorSymbol) {
        iterator[Symbol.asyncIterator] = function () {
            return this;
        };
    }
    return iterator;
}

function promiseIterator(promise) {
    var resolved = false;
    var iterator = {
        next: function () {
            if (resolved)
                return Promise.resolve({
                    value: undefined,
                    done: true,
                });
            resolved = true;
            return new Promise(function (resolve, reject) {
                promise
                    .then(function (value) {
                    resolve({ value: value, done: false });
                })
                    .catch(reject);
            });
        },
    };
    if (utilities.canUseAsyncIteratorSymbol) {
        iterator[Symbol.asyncIterator] = function () {
            return this;
        };
    }
    return iterator;
}

function readerIterator(reader) {
    var iterator = {
        next: function () {
            return reader.read();
        },
    };
    if (utilities.canUseAsyncIteratorSymbol) {
        iterator[Symbol.asyncIterator] = function () {
            return this;
        };
    }
    return iterator;
}

function responseIterator(response) {
    var body = response;
    if (isNodeResponse(response))
        body = response.body;
    if (isAsyncIterableIterator(body))
        return asyncIterator(body);
    if (isReadableStream(body))
        return readerIterator(body.getReader());
    if (isStreamableBlob(body)) {
        return readerIterator(body.stream().getReader());
    }
    if (isBlob(body))
        return promiseIterator(body.arrayBuffer());
    if (isNodeReadableStream(body))
        return nodeStreamIterator(body);
    throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function readMultipartBody(response, observer) {
    var _a, _b, _c;
    return tslib.__awaiter(this, void 0, void 0, function () {
        var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _d, value, done, chunk, bi, message, i, headers, contentType_1, body, result;
        var _e;
        return tslib.__generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (TextDecoder === undefined) {
                        throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                    }
                    decoder = new TextDecoder("utf-8");
                    contentType = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.get('content-type');
                    delimiter = "boundary=";
                    boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter))
                        ? contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim()
                        : "-";
                    boundary = "--".concat(boundaryVal);
                    buffer = "";
                    iterator = responseIterator(response);
                    running = true;
                    _f.label = 1;
                case 1:
                    if (!running) return [3, 3];
                    return [4, iterator.next()];
                case 2:
                    _d = _f.sent(), value = _d.value, done = _d.done;
                    chunk = typeof value === "string" ? value : decoder.decode(value);
                    running = !done;
                    buffer += chunk;
                    bi = buffer.indexOf(boundary);
                    while (bi > -1) {
                        message = void 0;
                        _e = [
                            buffer.slice(0, bi),
                            buffer.slice(bi + boundary.length),
                        ], message = _e[0], buffer = _e[1];
                        if (message.trim()) {
                            i = message.indexOf("\r\n\r\n");
                            headers = parseHeaders(message.slice(0, i));
                            contentType_1 = headers["content-type"];
                            if (contentType_1 &&
                                contentType_1.toLowerCase().indexOf("application/json") === -1) {
                                throw new Error("Unsupported patch content type: application/json is required.");
                            }
                            body = message.slice(i);
                            try {
                                result = parseJsonBody(response, body.replace("\r\n", ""));
                                if (Object.keys(result).length > 1 ||
                                    "data" in result ||
                                    "incremental" in result ||
                                    "errors" in result) {
                                    (_b = observer.next) === null || _b === void 0 ? void 0 : _b.call(observer, result);
                                }
                            }
                            catch (err) {
                                handleError(err, observer);
                            }
                        }
                        bi = buffer.indexOf(boundary);
                    }
                    return [3, 1];
                case 3:
                    (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
                    return [2];
            }
        });
    });
}
function parseHeaders(headerText) {
    var headersInit = {};
    headerText.split("\n").forEach(function (line) {
        var i = line.indexOf(":");
        if (i > -1) {
            var name_1 = line.slice(0, i).trim().toLowerCase();
            var value = line.slice(i + 1).trim();
            headersInit[name_1] = value;
        }
    });
    return headersInit;
}
function parseJsonBody(response, bodyText) {
    if (response.status >= 300) {
        var getResult = function () {
            try {
                return JSON.parse(bodyText);
            }
            catch (err) {
                return bodyText;
            }
        };
        utils.throwServerError(response, getResult(), "Response not successful: Received status code ".concat(response.status));
    }
    try {
        return JSON.parse(bodyText);
    }
    catch (err) {
        var parseError = err;
        parseError.name = "ServerParseError";
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        throw parseError;
    }
}
function handleError(err, observer) {
    var _a, _b;
    if (err.name === "AbortError")
        return;
    if (err.result && err.result.errors && err.result.data) {
        (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, err.result);
    }
    (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, err);
}
function readJsonBody(response, operation, observer) {
    parseAndCheckHttpResponse(operation)(response)
        .then(function (result) {
        var _a, _b;
        (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, result);
        (_b = observer.complete) === null || _b === void 0 ? void 0 : _b.call(observer);
    })
        .catch(function (err) { return handleError(err, observer); });
}
function parseAndCheckHttpResponse(operations) {
    return function (response) {
        return response
            .text()
            .then(function (bodyText) { return parseJsonBody(response, bodyText); })
            .then(function (result) {
            if (response.status >= 300) {
                utils.throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
            }
            if (!Array.isArray(result) &&
                !hasOwnProperty.call(result, "data") &&
                !hasOwnProperty.call(result, "errors")) {
                utils.throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations)
                    ? operations.map(function (op) { return op.operationName; })
                    : operations.operationName, "'."));
            }
            return result;
        });
    };
}

var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError = __DEV__ ? new globals.InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e.message)) : new globals.InvariantError(24);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};

var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
    preserveHeaderCase: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var defaultPrinter = function (ast, printer) { return printer(ast); };
function selectHttpOptionsAndBody(operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    configs.unshift(fallbackConfig);
    return selectHttpOptionsAndBodyInternal.apply(void 0, tslib.__spreadArray([operation,
        defaultPrinter], configs, false));
}
function selectHttpOptionsAndBodyInternal(operation, printer) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = {};
    var http = {};
    configs.forEach(function (config) {
        options = tslib.__assign(tslib.__assign(tslib.__assign({}, options), config.options), { headers: tslib.__assign(tslib.__assign({}, options.headers), config.headers) });
        if (config.credentials) {
            options.credentials = config.credentials;
        }
        http = tslib.__assign(tslib.__assign({}, http), config.http);
    });
    if (options.headers) {
        options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
    }
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = printer(query, graphql.print);
    return {
        options: options,
        body: body,
    };
}
function removeDuplicateHeaders(headers, preserveHeaderCase) {
    if (!preserveHeaderCase) {
        var normalizedHeaders_1 = Object.create(null);
        Object.keys(Object(headers)).forEach(function (name) {
            normalizedHeaders_1[name.toLowerCase()] = headers[name];
        });
        return normalizedHeaders_1;
    }
    var headerData = Object.create(null);
    Object.keys(Object(headers)).forEach(function (name) {
        headerData[name.toLowerCase()] = { originalName: name, value: headers[name] };
    });
    var normalizedHeaders = Object.create(null);
    Object.keys(headerData).forEach(function (name) {
        normalizedHeaders[headerData[name].originalName] = headerData[name].value;
    });
    return normalizedHeaders;
}

var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        throw __DEV__ ? new globals.InvariantError("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new globals.InvariantError(23);
    }
};

var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};

var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};

function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = serializeFetchParameter(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = serializeFetchParameter(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}

var backupFetch = utilities.maybe(function () { return fetch; });
var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, preserveHeaderCase = linkOptions.preserveHeaderCase, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = tslib.__rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
    if (__DEV__) {
        checkFetcher(preferredFetch || backupFetch);
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions, preserveHeaderCase: preserveHeaderCase },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new core.ApolloLink(function (operation) {
        var chosenURI = selectURI(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders['apollographql-client-name'] = name_1;
            }
            if (version) {
                clientAwarenessHeaders['apollographql-client-version'] = version;
            }
        }
        var contextHeaders = tslib.__assign(tslib.__assign({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        var _b = selectHttpOptionsAndBodyInternal(operation, print, fallbackHttpConfig, linkConfig, contextConfig), options = _b.options, body = _b.body;
        if (body.variables && !includeUnusedVariables) {
            var unusedNames_1 = new Set(Object.keys(body.variables));
            graphql.visit(operation.query, {
                Variable: function (node, _key, parent) {
                    if (parent && parent.kind !== 'VariableDefinition') {
                        unusedNames_1.delete(node.name.value);
                    }
                },
            });
            if (unusedNames_1.size) {
                body.variables = tslib.__assign({}, body.variables);
                unusedNames_1.forEach(function (name) {
                    delete body.variables[name];
                });
            }
        }
        var controller;
        if (!options.signal) {
            var _c = createSignalIfSupported(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller)
                options.signal = signal;
        }
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if (utilities.hasDirectives(['defer'], operation.query)) {
            options.headers = options.headers || {};
            options.headers.accept = "multipart/mixed; deferSpec=20220824, application/json";
        }
        if (options.method === 'GET') {
            var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) {
                return utils.fromError(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = serializeFetchParameter(body, 'Payload');
            }
            catch (parseError) {
                return utils.fromError(parseError);
            }
        }
        return new utilities.Observable(function (observer) {
            var currentFetch = preferredFetch || utilities.maybe(function () { return fetch; }) || backupFetch;
            currentFetch(chosenURI, options)
                .then(function (response) {
                var _a;
                operation.setContext({ response: response });
                var ctype = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.get('content-type');
                if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
                    return readMultipartBody(response, observer);
                }
                else {
                    return readJsonBody(response, operation, observer);
                }
            })
                .catch(function (err) { return handleError(err, observer); });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};

var HttpLink = (function (_super) {
    tslib.__extends(HttpLink, _super);
    function HttpLink(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, createHttpLink(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink;
}(core.ApolloLink));

exports.HttpLink = HttpLink;
exports.checkFetcher = checkFetcher;
exports.createHttpLink = createHttpLink;
exports.createSignalIfSupported = createSignalIfSupported;
exports.defaultPrinter = defaultPrinter;
exports.fallbackHttpConfig = fallbackHttpConfig;
exports.parseAndCheckHttpResponse = parseAndCheckHttpResponse;
exports.rewriteURIForGET = rewriteURIForGET;
exports.selectHttpOptionsAndBody = selectHttpOptionsAndBody;
exports.selectHttpOptionsAndBodyInternal = selectHttpOptionsAndBodyInternal;
exports.selectURI = selectURI;
exports.serializeFetchParameter = serializeFetchParameter;
//# sourceMappingURL=http.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/utils.cjs":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/utils.cjs ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var tslib = __webpack_require__(/*! tslib */ "tslib");

function fromError(errorValue) {
    return new utilities.Observable(function (observer) {
        observer.error(errorValue);
    });
}

function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                    __DEV__ && globals.invariant.warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}

function fromPromise(promise) {
    return new utilities.Observable(function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}

var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};

function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw __DEV__ ? new globals.InvariantError("illegal argument: ".concat(key)) : new globals.InvariantError(27);
        }
    }
    return operation;
}

function createOperation(starting, operation) {
    var context = tslib.__assign({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = tslib.__assign(tslib.__assign({}, context), next(context));
        }
        else {
            context = tslib.__assign(tslib.__assign({}, context), next);
        }
    };
    var getContext = function () { return (tslib.__assign({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    return operation;
}

function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? utilities.getOperationName(transformedOperation.query) || undefined
                : '';
    }
    return transformedOperation;
}

exports.createOperation = createOperation;
exports.fromError = fromError;
exports.fromPromise = fromPromise;
exports.throwServerError = throwServerError;
exports.toPromise = toPromise;
exports.transformOperation = transformOperation;
exports.validateOperation = validateOperation;
//# sourceMappingURL=utils.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/main.cjs":
/*!**********************************************!*\
  !*** ./node_modules/@apollo/client/main.cjs ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! ./core */ "./node_modules/@apollo/client/core/core.cjs");
var react = __webpack_require__(/*! ./react */ "./node_modules/@apollo/client/react/react.cjs");



for (var k in core) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = core[k];
}
for (var k in react) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = react[k];
}
//# sourceMappingURL=main.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/context/context.cjs":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/context.cjs ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var React = __webpack_require__(/*! react */ "react");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        for (var k in e) {
            n[k] = e[k];
        }
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var contextKey = utilities.canUseSymbol
    ? Symbol.for('__APOLLO_CONTEXT__')
    : '__APOLLO_CONTEXT__';
function getApolloContext() {
    var context = React__namespace.createContext[contextKey];
    if (!context) {
        Object.defineProperty(React__namespace.createContext, contextKey, {
            value: context = React__namespace.createContext({}),
            enumerable: false,
            writable: false,
            configurable: true,
        });
        context.displayName = 'ApolloContext';
    }
    return context;
}

var ApolloConsumer = function (props) {
    var ApolloContext = getApolloContext();
    return (React__namespace.createElement(ApolloContext.Consumer, null, function (context) {
        __DEV__ ? globals.invariant(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' +
            'Wrap the root component in an <ApolloProvider>.') : globals.invariant(context && context.client, 28);
        return props.children(context.client);
    }));
};

var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = getApolloContext();
    return (React__namespace.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
        __DEV__ ? globals.invariant(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.') : globals.invariant(context.client, 29);
        return (React__namespace.createElement(ApolloContext.Provider, { value: context }, children));
    }));
};

exports.ApolloConsumer = ApolloConsumer;
exports.ApolloProvider = ApolloProvider;
exports.getApolloContext = getApolloContext;
exports.resetApolloContext = getApolloContext;
//# sourceMappingURL=context.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/hooks.cjs":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/hooks.cjs ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var React = __webpack_require__(/*! react */ "react");
var context = __webpack_require__(/*! ../context */ "./node_modules/@apollo/client/react/context/context.cjs");
var tslib = __webpack_require__(/*! tslib */ "tslib");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var equality = __webpack_require__(/*! @wry/equality */ "@wry/equality");
var core = __webpack_require__(/*! ../../core */ "./node_modules/@apollo/client/core/core.cjs");
var errors = __webpack_require__(/*! ../../errors */ "./node_modules/@apollo/client/errors/errors.cjs");
var parser = __webpack_require__(/*! ../parser */ "./node_modules/@apollo/client/react/parser/parser.cjs");

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        for (var k in e) {
            n[k] = e[k];
        }
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function useApolloClient(override) {
    var context$1 = React.useContext(context.getApolloContext());
    var client = override || context$1.client;
    __DEV__ ? globals.invariant(!!client, 'Could not find "client" in the context or passed in as an option. ' +
        'Wrap the root component in an <ApolloProvider>, or pass an ApolloClient ' +
        'instance in via options.') : globals.invariant(!!client, 32);
    return client;
}

var didWarnUncachedGetSnapshot = false;
var uSESKey = "useSyncExternalStore";
var realHook = React__namespace[uSESKey];
var useSyncExternalStore = realHook || (function (subscribe, getSnapshot, getServerSnapshot) {
    var value = getSnapshot();
    if (__DEV__ &&
        !didWarnUncachedGetSnapshot &&
        value !== getSnapshot()) {
        didWarnUncachedGetSnapshot = true;
        __DEV__ && globals.invariant.error('The result of getSnapshot should be cached to avoid an infinite loop');
    }
    var _a = React__namespace.useState({ inst: { value: value, getSnapshot: getSnapshot } }), inst = _a[0].inst, forceUpdate = _a[1];
    if (utilities.canUseLayoutEffect) {
        React__namespace.useLayoutEffect(function () {
            Object.assign(inst, { value: value, getSnapshot: getSnapshot });
            if (checkIfSnapshotChanged(inst)) {
                forceUpdate({ inst: inst });
            }
        }, [subscribe, value, getSnapshot]);
    }
    else {
        Object.assign(inst, { value: value, getSnapshot: getSnapshot });
    }
    React__namespace.useEffect(function () {
        if (checkIfSnapshotChanged(inst)) {
            forceUpdate({ inst: inst });
        }
        return subscribe(function handleStoreChange() {
            if (checkIfSnapshotChanged(inst)) {
                forceUpdate({ inst: inst });
            }
        });
    }, [subscribe]);
    return value;
});
function checkIfSnapshotChanged(_a) {
    var value = _a.value, getSnapshot = _a.getSnapshot;
    try {
        return value !== getSnapshot();
    }
    catch (_b) {
        return true;
    }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function useQuery(query, options) {
    if (options === void 0) { options = Object.create(null); }
    return useInternalState(useApolloClient(options.client), query).useQuery(options);
}
function useInternalState(client, query) {
    var stateRef = React.useRef();
    if (!stateRef.current ||
        client !== stateRef.current.client ||
        query !== stateRef.current.query) {
        stateRef.current = new InternalState(client, query, stateRef.current);
    }
    var state = stateRef.current;
    var _a = React.useState(0); _a[0]; var setTick = _a[1];
    state.forceUpdate = function () {
        setTick(function (tick) { return tick + 1; });
    };
    return state;
}
var InternalState = (function () {
    function InternalState(client, query, previous) {
        this.client = client;
        this.query = query;
        this.asyncResolveFns = new Set();
        this.optionsToIgnoreOnce = new (utilities.canUseWeakSet ? WeakSet : Set)();
        this.ssrDisabledResult = utilities.maybeDeepFreeze({
            loading: true,
            data: void 0,
            error: void 0,
            networkStatus: core.NetworkStatus.loading,
        });
        this.skipStandbyResult = utilities.maybeDeepFreeze({
            loading: false,
            data: void 0,
            error: void 0,
            networkStatus: core.NetworkStatus.ready,
        });
        this.toQueryResultCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
        parser.verifyDocumentType(query, parser.DocumentType.Query);
        var previousResult = previous && previous.result;
        var previousData = previousResult && previousResult.data;
        if (previousData) {
            this.previousData = previousData;
        }
    }
    InternalState.prototype.forceUpdate = function () {
        __DEV__ && globals.invariant.warn("Calling default no-op implementation of InternalState#forceUpdate");
    };
    InternalState.prototype.asyncUpdate = function (signal) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var watchQueryOptions = _this.watchQueryOptions;
            var handleAborted = function () {
                _this.asyncResolveFns.delete(resolve);
                _this.optionsToIgnoreOnce.delete(watchQueryOptions);
                signal.removeEventListener('abort', handleAborted);
                reject(signal.reason);
            };
            _this.asyncResolveFns.add(resolve);
            _this.optionsToIgnoreOnce.add(watchQueryOptions);
            signal.addEventListener('abort', handleAborted);
            _this.forceUpdate();
        });
    };
    InternalState.prototype.useQuery = function (options) {
        var _this = this;
        this.renderPromises = React.useContext(context.getApolloContext()).renderPromises;
        this.useOptions(options);
        var obsQuery = this.useObservableQuery();
        var result = useSyncExternalStore(React.useCallback(function () {
            if (_this.renderPromises) {
                return function () { };
            }
            var onNext = function () {
                var previousResult = _this.result;
                var result = obsQuery.getCurrentResult();
                if (previousResult &&
                    previousResult.loading === result.loading &&
                    previousResult.networkStatus === result.networkStatus &&
                    equality.equal(previousResult.data, result.data)) {
                    return;
                }
                _this.setResult(result);
            };
            var onError = function (error) {
                var last = obsQuery["last"];
                subscription.unsubscribe();
                try {
                    obsQuery.resetLastResults();
                    subscription = obsQuery.subscribe(onNext, onError);
                }
                finally {
                    obsQuery["last"] = last;
                }
                if (!hasOwnProperty.call(error, 'graphQLErrors')) {
                    throw error;
                }
                var previousResult = _this.result;
                if (!previousResult ||
                    (previousResult && previousResult.loading) ||
                    !equality.equal(error, previousResult.error)) {
                    _this.setResult({
                        data: (previousResult && previousResult.data),
                        error: error,
                        loading: false,
                        networkStatus: core.NetworkStatus.error,
                    });
                }
            };
            var subscription = obsQuery.subscribe(onNext, onError);
            return function () { return subscription.unsubscribe(); };
        }, [
            obsQuery,
            this.renderPromises,
            this.client.disableNetworkFetches,
        ]), function () { return _this.getCurrentResult(); }, function () { return _this.getCurrentResult(); });
        this.unsafeHandlePartialRefetch(result);
        var queryResult = this.toQueryResult(result);
        if (!queryResult.loading && this.asyncResolveFns.size) {
            this.asyncResolveFns.forEach(function (resolve) { return resolve(queryResult); });
            this.asyncResolveFns.clear();
        }
        return queryResult;
    };
    InternalState.prototype.useOptions = function (options) {
        var _a;
        var watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = options);
        var currentWatchQueryOptions = this.watchQueryOptions;
        if (this.optionsToIgnoreOnce.has(currentWatchQueryOptions) ||
            !equality.equal(watchQueryOptions, currentWatchQueryOptions)) {
            this.watchQueryOptions = watchQueryOptions;
            if (currentWatchQueryOptions && this.observable) {
                this.optionsToIgnoreOnce.delete(currentWatchQueryOptions);
                this.observable.reobserve(this.getObsQueryOptions());
                this.previousData = ((_a = this.result) === null || _a === void 0 ? void 0 : _a.data) || this.previousData;
                this.result = void 0;
            }
        }
        this.onCompleted = options.onCompleted || InternalState.prototype.onCompleted;
        this.onError = options.onError || InternalState.prototype.onError;
        if ((this.renderPromises || this.client.disableNetworkFetches) &&
            this.queryHookOptions.ssr === false &&
            !this.queryHookOptions.skip) {
            this.result = this.ssrDisabledResult;
        }
        else if (this.queryHookOptions.skip ||
            this.watchQueryOptions.fetchPolicy === 'standby') {
            this.result = this.skipStandbyResult;
        }
        else if (this.result === this.ssrDisabledResult ||
            this.result === this.skipStandbyResult) {
            this.result = void 0;
        }
    };
    InternalState.prototype.getObsQueryOptions = function () {
        var toMerge = [];
        var globalDefaults = this.client.defaultOptions.watchQuery;
        if (globalDefaults)
            toMerge.push(globalDefaults);
        if (this.queryHookOptions.defaultOptions) {
            toMerge.push(this.queryHookOptions.defaultOptions);
        }
        toMerge.push(utilities.compact(this.observable && this.observable.options, this.watchQueryOptions));
        return toMerge.reduce(core.mergeOptions);
    };
    InternalState.prototype.createWatchQueryOptions = function (_a) {
        var _b;
        if (_a === void 0) { _a = {}; }
        var skip = _a.skip; _a.ssr; _a.onCompleted; _a.onError; _a.defaultOptions; var otherOptions = tslib.__rest(_a, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
        var watchQueryOptions = Object.assign(otherOptions, { query: this.query });
        if (this.renderPromises &&
            (watchQueryOptions.fetchPolicy === 'network-only' ||
                watchQueryOptions.fetchPolicy === 'cache-and-network')) {
            watchQueryOptions.fetchPolicy = 'cache-first';
        }
        if (!watchQueryOptions.variables) {
            watchQueryOptions.variables = {};
        }
        if (skip) {
            var _c = watchQueryOptions.fetchPolicy, fetchPolicy = _c === void 0 ? this.getDefaultFetchPolicy() : _c, _d = watchQueryOptions.initialFetchPolicy, initialFetchPolicy = _d === void 0 ? fetchPolicy : _d;
            Object.assign(watchQueryOptions, {
                initialFetchPolicy: initialFetchPolicy,
                fetchPolicy: 'standby',
            });
        }
        else if (!watchQueryOptions.fetchPolicy) {
            watchQueryOptions.fetchPolicy =
                ((_b = this.observable) === null || _b === void 0 ? void 0 : _b.options.initialFetchPolicy) ||
                    this.getDefaultFetchPolicy();
        }
        return watchQueryOptions;
    };
    InternalState.prototype.getDefaultFetchPolicy = function () {
        var _a, _b;
        return (((_a = this.queryHookOptions.defaultOptions) === null || _a === void 0 ? void 0 : _a.fetchPolicy) ||
            ((_b = this.client.defaultOptions.watchQuery) === null || _b === void 0 ? void 0 : _b.fetchPolicy) ||
            "cache-first");
    };
    InternalState.prototype.onCompleted = function (data) { };
    InternalState.prototype.onError = function (error) { };
    InternalState.prototype.useObservableQuery = function () {
        var obsQuery = this.observable =
            this.renderPromises
                && this.renderPromises.getSSRObservable(this.watchQueryOptions)
                || this.observable
                || this.client.watchQuery(this.getObsQueryOptions());
        this.obsQueryFields = React.useMemo(function () { return ({
            refetch: obsQuery.refetch.bind(obsQuery),
            reobserve: obsQuery.reobserve.bind(obsQuery),
            fetchMore: obsQuery.fetchMore.bind(obsQuery),
            updateQuery: obsQuery.updateQuery.bind(obsQuery),
            startPolling: obsQuery.startPolling.bind(obsQuery),
            stopPolling: obsQuery.stopPolling.bind(obsQuery),
            subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery),
        }); }, [obsQuery]);
        var ssrAllowed = !(this.queryHookOptions.ssr === false ||
            this.queryHookOptions.skip);
        if (this.renderPromises && ssrAllowed) {
            this.renderPromises.registerSSRObservable(obsQuery);
            if (obsQuery.getCurrentResult().loading) {
                this.renderPromises.addObservableQueryPromise(obsQuery);
            }
        }
        return obsQuery;
    };
    InternalState.prototype.setResult = function (nextResult) {
        var previousResult = this.result;
        if (previousResult && previousResult.data) {
            this.previousData = previousResult.data;
        }
        this.result = nextResult;
        this.forceUpdate();
        this.handleErrorOrCompleted(nextResult);
    };
    InternalState.prototype.handleErrorOrCompleted = function (result) {
        var _this = this;
        if (!result.loading) {
            var error_1 = this.toApolloError(result);
            Promise.resolve().then(function () {
                if (error_1) {
                    _this.onError(error_1);
                }
                else if (result.data) {
                    _this.onCompleted(result.data);
                }
            }).catch(function (error) {
                __DEV__ && globals.invariant.warn(error);
            });
        }
    };
    InternalState.prototype.toApolloError = function (result) {
        return utilities.isNonEmptyArray(result.errors)
            ? new errors.ApolloError({ graphQLErrors: result.errors })
            : result.error;
    };
    InternalState.prototype.getCurrentResult = function () {
        if (!this.result) {
            this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult());
        }
        return this.result;
    };
    InternalState.prototype.toQueryResult = function (result) {
        var queryResult = this.toQueryResultCache.get(result);
        if (queryResult)
            return queryResult;
        var data = result.data; result.partial; var resultWithoutPartial = tslib.__rest(result, ["data", "partial"]);
        this.toQueryResultCache.set(result, queryResult = tslib.__assign(tslib.__assign(tslib.__assign({ data: data }, resultWithoutPartial), this.obsQueryFields), { client: this.client, observable: this.observable, variables: this.observable.variables, called: !this.queryHookOptions.skip, previousData: this.previousData }));
        if (!queryResult.error && utilities.isNonEmptyArray(result.errors)) {
            queryResult.error = new errors.ApolloError({ graphQLErrors: result.errors });
        }
        return queryResult;
    };
    InternalState.prototype.unsafeHandlePartialRefetch = function (result) {
        if (result.partial &&
            this.queryHookOptions.partialRefetch &&
            !result.loading &&
            (!result.data || Object.keys(result.data).length === 0) &&
            this.observable.options.fetchPolicy !== 'cache-only') {
            Object.assign(result, {
                loading: true,
                networkStatus: core.NetworkStatus.refetch,
            });
            this.observable.refetch();
        }
    };
    return InternalState;
}());

var EAGER_METHODS = [
    'refetch',
    'reobserve',
    'fetchMore',
    'updateQuery',
    'startPolling',
    'subscribeToMore',
];
function useLazyQuery(query, options) {
    var _a;
    var abortControllersRef = React.useRef(new Set());
    var execOptionsRef = React.useRef();
    var merged = execOptionsRef.current ? utilities.mergeOptions(options, execOptionsRef.current) : options;
    var internalState = useInternalState(useApolloClient(options && options.client), (_a = merged === null || merged === void 0 ? void 0 : merged.query) !== null && _a !== void 0 ? _a : query);
    var useQueryResult = internalState.useQuery(tslib.__assign(tslib.__assign({}, merged), { skip: !execOptionsRef.current }));
    var initialFetchPolicy = useQueryResult.observable.options.initialFetchPolicy ||
        internalState.getDefaultFetchPolicy();
    var result = Object.assign(useQueryResult, {
        called: !!execOptionsRef.current,
    });
    var eagerMethods = React.useMemo(function () {
        var eagerMethods = {};
        var _loop_1 = function (key) {
            var method = result[key];
            eagerMethods[key] = function () {
                if (!execOptionsRef.current) {
                    execOptionsRef.current = Object.create(null);
                    internalState.forceUpdate();
                }
                return method.apply(this, arguments);
            };
        };
        for (var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++) {
            var key = EAGER_METHODS_1[_i];
            _loop_1(key);
        }
        return eagerMethods;
    }, []);
    Object.assign(result, eagerMethods);
    React.useEffect(function () {
        return function () {
            abortControllersRef.current.forEach(function (controller) {
                controller.abort();
            });
        };
    }, []);
    var execute = React.useCallback(function (executeOptions) {
        var controller = new AbortController();
        abortControllersRef.current.add(controller);
        execOptionsRef.current = executeOptions ? tslib.__assign(tslib.__assign({}, executeOptions), { fetchPolicy: executeOptions.fetchPolicy || initialFetchPolicy }) : {
            fetchPolicy: initialFetchPolicy,
        };
        var promise = internalState
            .asyncUpdate(controller.signal)
            .then(function (queryResult) {
            abortControllersRef.current.delete(controller);
            return Object.assign(queryResult, eagerMethods);
        });
        promise.catch(function () {
            abortControllersRef.current.delete(controller);
        });
        return promise;
    }, []);
    return [execute, result];
}

function useMutation(mutation, options) {
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    parser.verifyDocumentType(mutation, parser.DocumentType.Mutation);
    var _a = React.useState({
        called: false,
        loading: false,
        client: client,
    }), result = _a[0], setResult = _a[1];
    var ref = React.useRef({
        result: result,
        mutationId: 0,
        isMounted: true,
        client: client,
        mutation: mutation,
        options: options,
    });
    {
        Object.assign(ref.current, { client: client, options: options, mutation: mutation });
    }
    var execute = React.useCallback(function (executeOptions) {
        if (executeOptions === void 0) { executeOptions = {}; }
        var _a = ref.current, client = _a.client, options = _a.options, mutation = _a.mutation;
        var baseOptions = tslib.__assign(tslib.__assign({}, options), { mutation: mutation });
        if (!ref.current.result.loading && !baseOptions.ignoreResults && ref.current.isMounted) {
            setResult(ref.current.result = {
                loading: true,
                error: void 0,
                data: void 0,
                called: true,
                client: client,
            });
        }
        var mutationId = ++ref.current.mutationId;
        var clientOptions = core.mergeOptions(baseOptions, executeOptions);
        return client.mutate(clientOptions).then(function (response) {
            var _a;
            var data = response.data, errors$1 = response.errors;
            var error = errors$1 && errors$1.length > 0
                ? new errors.ApolloError({ graphQLErrors: errors$1 })
                : void 0;
            if (mutationId === ref.current.mutationId &&
                !clientOptions.ignoreResults) {
                var result_1 = {
                    called: true,
                    loading: false,
                    data: data,
                    error: error,
                    client: client,
                };
                if (ref.current.isMounted && !equality.equal(ref.current.result, result_1)) {
                    setResult(ref.current.result = result_1);
                }
            }
            var onCompleted = executeOptions.onCompleted || ((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onCompleted);
            onCompleted === null || onCompleted === void 0 ? void 0 : onCompleted(response.data, clientOptions);
            return response;
        }).catch(function (error) {
            var _a;
            if (mutationId === ref.current.mutationId &&
                ref.current.isMounted) {
                var result_2 = {
                    loading: false,
                    error: error,
                    data: void 0,
                    called: true,
                    client: client,
                };
                if (!equality.equal(ref.current.result, result_2)) {
                    setResult(ref.current.result = result_2);
                }
            }
            var onError = executeOptions.onError || ((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onError);
            if (onError) {
                onError(error, clientOptions);
                return { data: void 0, errors: error };
            }
            throw error;
        });
    }, []);
    var reset = React.useCallback(function () {
        if (ref.current.isMounted) {
            setResult({ called: false, loading: false, client: client });
        }
    }, []);
    React.useEffect(function () {
        ref.current.isMounted = true;
        return function () {
            ref.current.isMounted = false;
        };
    }, []);
    return [execute, tslib.__assign({ reset: reset }, result)];
}

function useSubscription(subscription, options) {
    var hasIssuedDeprecationWarningRef = React.useRef(false);
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    parser.verifyDocumentType(subscription, parser.DocumentType.Subscription);
    var _a = React.useState({
        loading: !(options === null || options === void 0 ? void 0 : options.skip),
        error: void 0,
        data: void 0,
        variables: options === null || options === void 0 ? void 0 : options.variables,
    }), result = _a[0], setResult = _a[1];
    if (!hasIssuedDeprecationWarningRef.current) {
        hasIssuedDeprecationWarningRef.current = true;
        if (options === null || options === void 0 ? void 0 : options.onSubscriptionData) {
            __DEV__ && globals.invariant.warn(options.onData
                ? "'useSubscription' supports only the 'onSubscriptionData' or 'onData' option, but not both. Only the 'onData' option will be used."
                : "'onSubscriptionData' is deprecated and will be removed in a future major version. Please use the 'onData' option instead.");
        }
        if (options === null || options === void 0 ? void 0 : options.onSubscriptionComplete) {
            __DEV__ && globals.invariant.warn(options.onComplete
                ? "'useSubscription' supports only the 'onSubscriptionComplete' or 'onComplete' option, but not both. Only the 'onComplete' option will be used."
                : "'onSubscriptionComplete' is deprecated and will be removed in a future major version. Please use the 'onComplete' option instead.");
        }
    }
    var _b = React.useState(function () {
        if (options === null || options === void 0 ? void 0 : options.skip) {
            return null;
        }
        return client.subscribe({
            query: subscription,
            variables: options === null || options === void 0 ? void 0 : options.variables,
            fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
            context: options === null || options === void 0 ? void 0 : options.context,
        });
    }), observable = _b[0], setObservable = _b[1];
    var canResetObservableRef = React.useRef(false);
    React.useEffect(function () {
        return function () {
            canResetObservableRef.current = true;
        };
    }, []);
    var ref = React.useRef({ client: client, subscription: subscription, options: options });
    React.useEffect(function () {
        var _a, _b, _c, _d;
        var shouldResubscribe = options === null || options === void 0 ? void 0 : options.shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(options);
        }
        if (options === null || options === void 0 ? void 0 : options.skip) {
            if (!(options === null || options === void 0 ? void 0 : options.skip) !== !((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.skip) || canResetObservableRef.current) {
                setResult({
                    loading: false,
                    data: void 0,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                });
                setObservable(null);
                canResetObservableRef.current = false;
            }
        }
        else if ((shouldResubscribe !== false &&
            (client !== ref.current.client ||
                subscription !== ref.current.subscription ||
                (options === null || options === void 0 ? void 0 : options.fetchPolicy) !== ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.fetchPolicy) ||
                !(options === null || options === void 0 ? void 0 : options.skip) !== !((_c = ref.current.options) === null || _c === void 0 ? void 0 : _c.skip) ||
                !equality.equal(options === null || options === void 0 ? void 0 : options.variables, (_d = ref.current.options) === null || _d === void 0 ? void 0 : _d.variables))) ||
            canResetObservableRef.current) {
            setResult({
                loading: true,
                data: void 0,
                error: void 0,
                variables: options === null || options === void 0 ? void 0 : options.variables,
            });
            setObservable(client.subscribe({
                query: subscription,
                variables: options === null || options === void 0 ? void 0 : options.variables,
                fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
                context: options === null || options === void 0 ? void 0 : options.context,
            }));
            canResetObservableRef.current = false;
        }
        Object.assign(ref.current, { client: client, subscription: subscription, options: options });
    }, [client, subscription, options, canResetObservableRef.current]);
    React.useEffect(function () {
        if (!observable) {
            return;
        }
        var subscription = observable.subscribe({
            next: function (fetchResult) {
                var _a, _b;
                var result = {
                    loading: false,
                    data: fetchResult.data,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                };
                setResult(result);
                if ((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onData) {
                    ref.current.options.onData({
                        client: client,
                        data: result
                    });
                }
                else if ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.onSubscriptionData) {
                    ref.current.options.onSubscriptionData({
                        client: client,
                        subscriptionData: result
                    });
                }
            },
            error: function (error) {
                var _a, _b;
                setResult({
                    loading: false,
                    data: void 0,
                    error: error,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                });
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onError) === null || _b === void 0 ? void 0 : _b.call(_a, error);
            },
            complete: function () {
                var _a, _b;
                if ((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onComplete) {
                    ref.current.options.onComplete();
                }
                else if ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.onSubscriptionComplete) {
                    ref.current.options.onSubscriptionComplete();
                }
            },
        });
        return function () {
            subscription.unsubscribe();
        };
    }, [observable]);
    return result;
}

function useReactiveVar(rv) {
    var value = rv();
    var setValue = React.useState(value)[1];
    React.useEffect(function () {
        var probablySameValue = rv();
        if (value !== probablySameValue) {
            setValue(probablySameValue);
        }
        else {
            return rv.onNextChange(setValue);
        }
    }, [value]);
    return value;
}

function useFragment_experimental(options) {
    var cache = useApolloClient().cache;
    var fragment = options.fragment, fragmentName = options.fragmentName, from = options.from, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, rest = tslib.__rest(options, ["fragment", "fragmentName", "from", "optimistic"]);
    var diffOptions = tslib.__assign(tslib.__assign({}, rest), { id: typeof from === "string" ? from : cache.identify(from), query: cache["getFragmentDoc"](fragment, fragmentName), optimistic: optimistic });
    var resultRef = React.useRef();
    var latestDiff = cache.diff(diffOptions);
    var getSnapshot = function () {
        var latestDiffToResult = diffToResult(latestDiff);
        return resultRef.current &&
            equality.equal(resultRef.current.data, latestDiffToResult.data)
            ? resultRef.current
            : (resultRef.current = latestDiffToResult);
    };
    return useSyncExternalStore(function (forceUpdate) {
        return cache.watch(tslib.__assign(tslib.__assign({}, diffOptions), { immediate: true, callback: function (diff) {
                if (!equality.equal(diff, latestDiff)) {
                    resultRef.current = diffToResult((latestDiff = diff));
                    forceUpdate();
                }
            } }));
    }, getSnapshot, getSnapshot);
}
function diffToResult(diff) {
    var result = {
        data: diff.result,
        complete: !!diff.complete,
    };
    if (diff.missing) {
        result.missing = utilities.mergeDeepArray(diff.missing.map(function (error) { return error.missing; }));
    }
    return result;
}

exports.useApolloClient = useApolloClient;
exports.useFragment_experimental = useFragment_experimental;
exports.useLazyQuery = useLazyQuery;
exports.useMutation = useMutation;
exports.useQuery = useQuery;
exports.useReactiveVar = useReactiveVar;
exports.useSubscription = useSubscription;
//# sourceMappingURL=hooks.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/parser/parser.cjs":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/react/parser/parser.cjs ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");

exports.DocumentType = void 0;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(exports.DocumentType || (exports.DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case exports.DocumentType.Query:
            name = 'Query';
            break;
        case exports.DocumentType.Mutation:
            name = 'Mutation';
            break;
        case exports.DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
    __DEV__ ? globals.invariant(!!document && !!document.kind, "Argument of ".concat(document, " passed to parser was not a valid GraphQL ") +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document") : globals.invariant(!!document && !!document.kind, 33);
    var fragments = [];
    var queries = [];
    var mutations = [];
    var subscriptions = [];
    for (var _i = 0, _a = document.definitions; _i < _a.length; _i++) {
        var x = _a[_i];
        if (x.kind === 'FragmentDefinition') {
            fragments.push(x);
            continue;
        }
        if (x.kind === 'OperationDefinition') {
            switch (x.operation) {
                case 'query':
                    queries.push(x);
                    break;
                case 'mutation':
                    mutations.push(x);
                    break;
                case 'subscription':
                    subscriptions.push(x);
                    break;
            }
        }
    }
    __DEV__ ? globals.invariant(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well") : globals.invariant(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), 34);
    __DEV__ ? globals.invariant(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        "".concat(document, " had ").concat(queries.length, " queries, ").concat(subscriptions.length, " ") +
        "subscriptions and ".concat(mutations.length, " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component") : globals.invariant(queries.length + mutations.length + subscriptions.length <= 1, 35);
    type = queries.length ? exports.DocumentType.Query : exports.DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = exports.DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
    __DEV__ ? globals.invariant(definitions.length === 1, "react-apollo only supports one definition per HOC. ".concat(document, " had ") +
        "".concat(definitions.length, " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component") : globals.invariant(definitions.length === 1, 36);
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}
function verifyDocumentType(document, type) {
    var operation = parser(document);
    var requiredOperationName = operationName(type);
    var usedOperationName = operationName(operation.type);
    __DEV__ ? globals.invariant(operation.type === type, "Running a ".concat(requiredOperationName, " requires a graphql ") +
        "".concat(requiredOperationName, ", but a ").concat(usedOperationName, " was used instead.")) : globals.invariant(operation.type === type, 37);
}

exports.operationName = operationName;
exports.parser = parser;
exports.verifyDocumentType = verifyDocumentType;
//# sourceMappingURL=parser.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/react.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/react/react.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

__webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var context = __webpack_require__(/*! ./context */ "./node_modules/@apollo/client/react/context/context.cjs");
var hooks = __webpack_require__(/*! ./hooks */ "./node_modules/@apollo/client/react/hooks/hooks.cjs");
var parser = __webpack_require__(/*! ./parser */ "./node_modules/@apollo/client/react/parser/parser.cjs");



exports.ApolloConsumer = context.ApolloConsumer;
exports.ApolloProvider = context.ApolloProvider;
exports.getApolloContext = context.getApolloContext;
exports.resetApolloContext = context.resetApolloContext;
exports.DocumentType = parser.DocumentType;
exports.operationName = parser.operationName;
exports.parser = parser.parser;
for (var k in hooks) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = hooks[k];
}
//# sourceMappingURL=react.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/globals.cjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/globals.cjs ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tsInvariant = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.cjs");
var process$1 = __webpack_require__(/*! ts-invariant/process */ "./node_modules/ts-invariant/process/main.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");

function maybe(thunk) {
    try {
        return thunk();
    }
    catch (_a) { }
}

var global$1 = (maybe(function () { return globalThis; }) ||
    maybe(function () { return window; }) ||
    maybe(function () { return self; }) ||
    maybe(function () { return global; }) ||
    maybe(function () { return maybe.constructor("return this")(); }));

var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
    try {
        return Boolean(__DEV__);
    }
    catch (_a) {
        Object.defineProperty(global$1, GLOBAL_KEY, {
            value: maybe(function () { return "development"; }) !== "production",
            enumerable: false,
            configurable: true,
            writable: true,
        });
        return global$1[GLOBAL_KEY];
    }
}
var DEV = getDEV();

function removeTemporaryGlobals() {
    return typeof graphql.Source === "function" ? process$1.remove() : process$1.remove();
}

function checkDEV() {
    __DEV__ ? tsInvariant.invariant("boolean" === typeof DEV, DEV) : tsInvariant.invariant("boolean" === typeof DEV, 39);
}
removeTemporaryGlobals();
checkDEV();

exports.InvariantError = tsInvariant.InvariantError;
exports.invariant = tsInvariant.invariant;
exports.DEV = DEV;
exports.checkDEV = checkDEV;
exports.global = global$1;
exports.maybe = maybe;
//# sourceMappingURL=globals.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/utilities.cjs":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/utilities.cjs ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ./globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var tslib = __webpack_require__(/*! tslib */ "tslib");
var zenObservableTs = __webpack_require__(/*! zen-observable-ts */ "./node_modules/zen-observable-ts/index.cjs");
__webpack_require__(/*! symbol-observable */ "symbol-observable");

function shouldInclude(_a, variables) {
    var directives = _a.directives;
    if (!directives || !directives.length) {
        return true;
    }
    return getInclusionDirectives(directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables && variables[ifArgument.value.name.value];
            __DEV__ ? globals.invariant(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : globals.invariant(evaledValue !== void 0, 40);
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root) {
    var names = [];
    graphql.visit(root, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
var hasAnyDirectives = function (names, root) { return hasDirectives(names, root, false); };
var hasAllDirectives = function (names, root) { return hasDirectives(names, root, true); };
function hasDirectives(names, root, all) {
    var nameSet = new Set(names);
    var uniqueCount = nameSet.size;
    graphql.visit(root, {
        Directive: function (node) {
            if (nameSet.delete(node.name.value) &&
                (!all || !nameSet.size)) {
                return graphql.BREAK;
            }
        },
    });
    return all ? !nameSet.size : nameSet.size < uniqueCount;
}
function hasClientExports(document) {
    return document && hasDirectives(['client', 'export'], document, true);
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) {
        directives.forEach(function (directive) {
            if (!isInclusionDirective(directive))
                return;
            var directiveArguments = directive.arguments;
            var directiveName = directive.name.value;
            __DEV__ ? globals.invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : globals.invariant(directiveArguments && directiveArguments.length === 1, 41);
            var ifArgument = directiveArguments[0];
            __DEV__ ? globals.invariant(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @".concat(directiveName, " directive.")) : globals.invariant(ifArgument.name && ifArgument.name.value === 'if', 42);
            var ifValue = ifArgument.value;
            __DEV__ ? globals.invariant(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : globals.invariant(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 43);
            result.push({ directive: directive, ifArgument: ifArgument });
        });
    }
    return result;
}

function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw __DEV__ ? new globals.InvariantError("Found a ".concat(definition.operation, " operation").concat(definition.name ? " named '".concat(definition.name.value, "'") : '', ". ") +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.') : new globals.InvariantError(44);
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        __DEV__ ? globals.invariant(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : globals.invariant(fragments.length === 1, 45);
        actualFragmentName = fragments[0].name.value;
    }
    var query = tslib.__assign(tslib.__assign({}, document), { definitions: tslib.__spreadArray([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions, true) });
    return query;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch (selection.kind) {
        case 'InlineFragment':
            return selection;
        case 'FragmentSpread': {
            var fragmentName = selection.name.value;
            if (typeof fragmentMap === "function") {
                return fragmentMap(fragmentName);
            }
            var fragment = fragmentMap && fragmentMap[fragmentName];
            __DEV__ ? globals.invariant(fragment, "No fragment named ".concat(fragmentName)) : globals.invariant(fragment, 46);
            return fragment || null;
        }
        default:
            return null;
    }
}

function isNonNullObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function makeReference(id) {
    return { __ref: String(id) };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isDocumentNode(value) {
    return (isNonNullObject(value) &&
        value.kind === "Document" &&
        Array.isArray(value.definitions));
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw __DEV__ ? new globals.InvariantError("The inline argument \"".concat(name.value, "\" of kind \"").concat(value.kind, "\"") +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.') : new globals.InvariantError(55);
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
var getStoreKeyName = Object.assign(function (fieldName, args, directives) {
    if (args &&
        directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = args[key];
            });
            return "".concat(directives['connection']['key'], "(").concat(stringify(filteredArgs_1), ")");
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = stringify(args);
        completeFieldName += "(".concat(stringifiedArgs, ")");
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
            }
            else {
                completeFieldName += "@".concat(key);
            }
        });
    }
    return completeFieldName;
}, {
    setStringify: function (s) {
        var previous = stringify;
        stringify = s;
        return previous;
    },
});
var stringify = function defaultStringify(value) {
    return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
    if (isNonNullObject(value) && !Array.isArray(value)) {
        value = Object.keys(value).sort().reduce(function (copy, key) {
            copy[key] = value[key];
            return copy;
        }, {});
    }
    return value;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    if (typeof result.__typename === 'string') {
        return result.__typename;
    }
    for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
        var selection = _a[_i];
        if (isField(selection)) {
            if (selection.name.value === '__typename') {
                return result[resultKeyNameFromField(selection)];
            }
        }
        else {
            var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === 'string') {
                return typename;
            }
        }
    }
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}

function checkDocument(doc) {
    __DEV__ ? globals.invariant(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : globals.invariant(doc && doc.kind === 'Document', 47);
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw __DEV__ ? new globals.InvariantError("Schema type definitions not allowed in queries. Found: \"".concat(definition.kind, "\"")) : new globals.InvariantError(48);
        }
        return definition;
    });
    __DEV__ ? globals.invariant(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : globals.invariant(operations.length <= 1, 49);
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    __DEV__ ? globals.invariant(queryDef && queryDef.operation === 'query', 'Must contain a query definition.') : globals.invariant(queryDef && queryDef.operation === 'query', 50);
    return queryDef;
}
function getFragmentDefinition(doc) {
    __DEV__ ? globals.invariant(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : globals.invariant(doc.kind === 'Document', 51);
    __DEV__ ? globals.invariant(doc.definitions.length <= 1, 'Fragment must have exactly one definition.') : globals.invariant(doc.definitions.length <= 1, 52);
    var fragmentDef = doc.definitions[0];
    __DEV__ ? globals.invariant(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.') : globals.invariant(fragmentDef.kind === 'FragmentDefinition', 53);
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw __DEV__ ? new globals.InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.') : new globals.InvariantError(54);
}
function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
        defs.forEach(function (def) {
            if (def.defaultValue) {
                valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
            }
        });
    }
    return defaultValues;
}

function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function (elem, i) {
        if (test.call(this, elem, i, array)) {
            array[target++] = elem;
        }
    }, context);
    array.length = target;
    return array;
}

var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isEmpty(op, fragmentMap) {
    return !op || op.selectionSet.selections.every(function (selection) { return selection.kind === 'FragmentSpread' &&
        isEmpty(fragmentMap[selection.name.value], fragmentMap); });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            return (dir.name && dir.name === directive.name.value) ||
                (dir.test && dir.test(directive));
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(graphql.visit(doc, {
        Variable: {
            enter: function (node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') {
                    variablesInUse[node.name.value] = true;
                }
            },
        },
        Field: {
            enter: function (node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function (directive) { return directive.remove; });
                    if (shouldRemoveField &&
                        node.directives &&
                        node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) {
                            node.arguments.forEach(function (arg) {
                                if (arg.value.kind === 'Variable') {
                                    variablesToRemove.push({
                                        name: arg.value.name.value,
                                    });
                                }
                            });
                        }
                        if (node.selectionSet) {
                            getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                                fragmentSpreadsToRemove.push({
                                    name: frag.name.value,
                                });
                            });
                        }
                        return null;
                    }
                }
            },
        },
        FragmentSpread: {
            enter: function (node) {
                fragmentSpreadsInUse[node.name.value] = true;
            },
        },
        Directive: {
            enter: function (node) {
                if (getDirectiveMatcher(directives)(node)) {
                    return null;
                }
            },
        },
    }));
    if (modifiedDoc &&
        filterInPlace(variablesToRemove, function (v) { return !!v.name && !variablesInUse[v.name]; }).length) {
        modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc &&
        filterInPlace(fragmentSpreadsToRemove, function (fs) { return !!fs.name && !fragmentSpreadsInUse[fs.name]; })
            .length) {
        modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function (doc) {
    return graphql.visit(doc, {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === 'OperationDefinition') {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return (isField(selection) &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                var field = parent;
                if (isField(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === 'export'; })) {
                    return;
                }
                return tslib.__assign(tslib.__assign({}, node), { selections: tslib.__spreadArray(tslib.__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
            },
        },
    });
}, {
    added: function (field) {
        return field === TYPENAME_FIELD;
    },
});
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                __DEV__ && globals.invariant.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === 'Variable' &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(graphql.visit(doc, {
        OperationDefinition: {
            enter: function (node) {
                return tslib.__assign(tslib.__assign({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) : [] });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) {
                        node.arguments.forEach(function (arg) {
                            if (argMatcher(arg)) {
                                argMatchCount_1 += 1;
                            }
                        });
                    }
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty(graphql.visit(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function (selection) {
        if ((isField(selection) || isInlineFragment(selection)) &&
            selection.selectionSet) {
            getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) { return allFragments.push(frag); });
        }
        else if (selection.kind === 'FragmentSpread') {
            allFragments.push(selection);
        }
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = getMainDefinition(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = graphql.visit(document, {
        OperationDefinition: {
            enter: function (node) {
                return tslib.__assign(tslib.__assign({}, node), { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    checkDocument(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    if (modifiedDoc) {
        modifiedDoc = graphql.visit(modifiedDoc, {
            FragmentDefinition: {
                enter: function (node) {
                    if (node.selectionSet) {
                        var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
                            return isField(selection) && selection.name.value === '__typename';
                        });
                        if (isTypenameOnly) {
                            return null;
                        }
                    }
                },
            },
        });
    }
    return modifiedDoc;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for (var i = 1; i < count; ++i) {
            target = merger.merge(target, sources[i]);
        }
    }
    return target;
}
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = isNonNullObject;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if (isNonNullObject(source) && isNonNullObject(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, tslib.__spreadArray([target, source, sourceKey], context, false));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if (isNonNullObject(value)) {
            if (!this.pastCopies.has(value)) {
                if (Array.isArray(value)) {
                    value = value.slice(0);
                }
                else {
                    value = tslib.__assign({ __proto__: Object.getPrototypeOf(value) }, value);
                }
                this.pastCopies.add(value);
            }
        }
        return value;
    };
    return DeepMerger;
}());

function concatPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming) {
            return existing ? tslib.__spreadArray(tslib.__spreadArray([], existing, true), incoming, true) : incoming;
        },
    };
}
function offsetLimitPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming, _a) {
            var args = _a.args;
            var merged = existing ? existing.slice(0) : [];
            if (incoming) {
                if (args) {
                    var _b = args.offset, offset = _b === void 0 ? 0 : _b;
                    for (var i = 0; i < incoming.length; ++i) {
                        merged[offset + i] = incoming[i];
                    }
                }
                else {
                    merged.push.apply(merged, incoming);
                }
            }
            return merged;
        },
    };
}
function relayStylePagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        read: function (existing, _a) {
            var canRead = _a.canRead, readField = _a.readField;
            if (!existing)
                return existing;
            var edges = [];
            var firstEdgeCursor = "";
            var lastEdgeCursor = "";
            existing.edges.forEach(function (edge) {
                if (canRead(readField("node", edge))) {
                    edges.push(edge);
                    if (edge.cursor) {
                        firstEdgeCursor = firstEdgeCursor || edge.cursor || "";
                        lastEdgeCursor = edge.cursor || lastEdgeCursor;
                    }
                }
            });
            var _b = existing.pageInfo || {}, startCursor = _b.startCursor, endCursor = _b.endCursor;
            return tslib.__assign(tslib.__assign({}, getExtras(existing)), { edges: edges, pageInfo: tslib.__assign(tslib.__assign({}, existing.pageInfo), { startCursor: startCursor || firstEdgeCursor, endCursor: endCursor || lastEdgeCursor }) });
        },
        merge: function (existing, incoming, _a) {
            var args = _a.args, isReference = _a.isReference, readField = _a.readField;
            if (!existing) {
                existing = makeEmptyData();
            }
            if (!incoming) {
                return existing;
            }
            var incomingEdges = incoming.edges ? incoming.edges.map(function (edge) {
                if (isReference(edge = tslib.__assign({}, edge))) {
                    edge.cursor = readField("cursor", edge);
                }
                return edge;
            }) : [];
            if (incoming.pageInfo) {
                var pageInfo_1 = incoming.pageInfo;
                var startCursor = pageInfo_1.startCursor, endCursor = pageInfo_1.endCursor;
                var firstEdge = incomingEdges[0];
                var lastEdge = incomingEdges[incomingEdges.length - 1];
                if (firstEdge && startCursor) {
                    firstEdge.cursor = startCursor;
                }
                if (lastEdge && endCursor) {
                    lastEdge.cursor = endCursor;
                }
                var firstCursor = firstEdge && firstEdge.cursor;
                if (firstCursor && !startCursor) {
                    incoming = mergeDeep(incoming, {
                        pageInfo: {
                            startCursor: firstCursor,
                        },
                    });
                }
                var lastCursor = lastEdge && lastEdge.cursor;
                if (lastCursor && !endCursor) {
                    incoming = mergeDeep(incoming, {
                        pageInfo: {
                            endCursor: lastCursor,
                        },
                    });
                }
            }
            var prefix = existing.edges;
            var suffix = [];
            if (args && args.after) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.after; });
                if (index >= 0) {
                    prefix = prefix.slice(0, index + 1);
                }
            }
            else if (args && args.before) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.before; });
                suffix = index < 0 ? prefix : prefix.slice(index);
                prefix = [];
            }
            else if (incoming.edges) {
                prefix = [];
            }
            var edges = tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray([], prefix, true), incomingEdges, true), suffix, true);
            var pageInfo = tslib.__assign(tslib.__assign({}, incoming.pageInfo), existing.pageInfo);
            if (incoming.pageInfo) {
                var _b = incoming.pageInfo, hasPreviousPage = _b.hasPreviousPage, hasNextPage = _b.hasNextPage, startCursor = _b.startCursor, endCursor = _b.endCursor, extras = tslib.__rest(_b, ["hasPreviousPage", "hasNextPage", "startCursor", "endCursor"]);
                Object.assign(pageInfo, extras);
                if (!prefix.length) {
                    if (void 0 !== hasPreviousPage)
                        pageInfo.hasPreviousPage = hasPreviousPage;
                    if (void 0 !== startCursor)
                        pageInfo.startCursor = startCursor;
                }
                if (!suffix.length) {
                    if (void 0 !== hasNextPage)
                        pageInfo.hasNextPage = hasNextPage;
                    if (void 0 !== endCursor)
                        pageInfo.endCursor = endCursor;
                }
            }
            return tslib.__assign(tslib.__assign(tslib.__assign({}, getExtras(existing)), getExtras(incoming)), { edges: edges, pageInfo: pageInfo });
        },
    };
}
var getExtras = function (obj) { return tslib.__rest(obj, notExtras); };
var notExtras = ["edges", "pageInfo"];
function makeEmptyData() {
    return {
        edges: [],
        pageInfo: {
            hasPreviousPage: false,
            hasNextPage: true,
            startCursor: "",
            endCursor: "",
        },
    };
}

var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}

function deepFreeze(value) {
    var workSet = new Set([value]);
    workSet.forEach(function (obj) {
        if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
            Object.getOwnPropertyNames(obj).forEach(function (name) {
                if (isNonNullObject(obj[name]))
                    workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function shallowFreeze(obj) {
    if (__DEV__ && !Object.isFrozen(obj)) {
        try {
            Object.freeze(obj);
        }
        catch (e) {
            if (e instanceof TypeError)
                return null;
            throw e;
        }
    }
    return obj;
}
function maybeDeepFreeze(obj) {
    if (__DEV__) {
        deepFreeze(obj);
    }
    return obj;
}

function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}

function asyncMap(observable, mapFn, catchFn) {
    return new zenObservableTs.Observable(function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        var promiseQueue = {
            then: function (callback) {
                return new Promise(function (resolve) { return resolve(callback()); });
            },
        };
        function makeCallback(examiner, delegate) {
            if (examiner) {
                return function (arg) {
                    ++activeCallbackCount;
                    var both = function () { return examiner(arg); };
                    promiseQueue = promiseQueue.then(both, both).then(function (result) {
                        --activeCallbackCount;
                        next && next.call(observer, result);
                        if (completed) {
                            handler.complete();
                        }
                    }, function (error) {
                        --activeCallbackCount;
                        throw error;
                    }).catch(function (caught) {
                        error && error.call(observer, caught);
                    });
                };
            }
            else {
                return function (arg) { return delegate && delegate.call(observer, arg); };
            }
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error),
            complete: function () {
                completed = true;
                if (!activeCallbackCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}

var canUseWeakMap = typeof WeakMap === 'function' &&
    globals.maybe(function () { return navigator.product; }) !== 'ReactNative';
var canUseWeakSet = typeof WeakSet === 'function';
var canUseSymbol = typeof Symbol === 'function' &&
    typeof Symbol.for === 'function';
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
var canUseDOM = typeof globals.maybe(function () { return window.document.createElement; }) === "function";
var usingJSDOM = globals.maybe(function () { return navigator.userAgent.indexOf("jsdom") >= 0; }) || false;
var canUseLayoutEffect = canUseDOM && !usingJSDOM;

function fixObservableSubclass(subclass) {
    function set(key) {
        Object.defineProperty(subclass, key, { value: zenObservableTs.Observable });
    }
    if (canUseSymbol && Symbol.species) {
        set(Symbol.species);
    }
    set("@@species");
    return subclass;
}

function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
var Concast = (function (_super) {
    tslib.__extends(Concast, _super);
    function Concast(sources) {
        var _this = _super.call(this, function (observer) {
            _this.addObserver(observer);
            return function () { return _this.removeObserver(observer); };
        }) || this;
        _this.observers = new Set();
        _this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        _this.handlers = {
            next: function (result) {
                if (_this.sub !== null) {
                    _this.latest = ["next", result];
                    _this.notify("next", result);
                    iterateObserversSafely(_this.observers, "next", result);
                }
            },
            error: function (error) {
                var sub = _this.sub;
                if (sub !== null) {
                    if (sub)
                        setTimeout(function () { return sub.unsubscribe(); });
                    _this.sub = null;
                    _this.latest = ["error", error];
                    _this.reject(error);
                    _this.notify("error", error);
                    iterateObserversSafely(_this.observers, "error", error);
                }
            },
            complete: function () {
                var _a = _this, sub = _a.sub, _b = _a.sources, sources = _b === void 0 ? [] : _b;
                if (sub !== null) {
                    var value = sources.shift();
                    if (!value) {
                        if (sub)
                            setTimeout(function () { return sub.unsubscribe(); });
                        _this.sub = null;
                        if (_this.latest &&
                            _this.latest[0] === "next") {
                            _this.resolve(_this.latest[1]);
                        }
                        else {
                            _this.resolve();
                        }
                        _this.notify("complete");
                        iterateObserversSafely(_this.observers, "complete");
                    }
                    else if (isPromiseLike(value)) {
                        value.then(function (obs) { return _this.sub = obs.subscribe(_this.handlers); });
                    }
                    else {
                        _this.sub = value.subscribe(_this.handlers);
                    }
                }
            },
        };
        _this.nextResultListeners = new Set();
        _this.cancel = function (reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.complete();
        };
        _this.promise.catch(function (_) { });
        if (typeof sources === "function") {
            sources = [new zenObservableTs.Observable(sources)];
        }
        if (isPromiseLike(sources)) {
            sources.then(function (iterable) { return _this.start(iterable); }, _this.handlers.error);
        }
        else {
            _this.start(sources);
        }
        return _this;
    }
    Concast.prototype.start = function (sources) {
        if (this.sub !== void 0)
            return;
        this.sources = Array.from(sources);
        this.handlers.complete();
    };
    Concast.prototype.deliverLastMessage = function (observer) {
        if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) {
                method.call(observer, this.latest[1]);
            }
            if (this.sub === null &&
                nextOrError === "next" &&
                observer.complete) {
                observer.complete();
            }
        }
    };
    Concast.prototype.addObserver = function (observer) {
        if (!this.observers.has(observer)) {
            this.deliverLastMessage(observer);
            this.observers.add(observer);
        }
    };
    Concast.prototype.removeObserver = function (observer) {
        if (this.observers.delete(observer) &&
            this.observers.size < 1) {
            this.handlers.complete();
        }
    };
    Concast.prototype.notify = function (method, arg) {
        var nextResultListeners = this.nextResultListeners;
        if (nextResultListeners.size) {
            this.nextResultListeners = new Set;
            nextResultListeners.forEach(function (listener) { return listener(method, arg); });
        }
    };
    Concast.prototype.beforeNext = function (callback) {
        var called = false;
        this.nextResultListeners.add(function (method, arg) {
            if (!called) {
                called = true;
                callback(method, arg);
            }
        });
    };
    return Concast;
}(zenObservableTs.Observable));
fixObservableSubclass(Concast);

function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}

function isExecutionPatchIncrementalResult(value) {
    return "incremental" in value;
}

function graphQLResultHasError(result) {
    var errors = getGraphQLErrorsFromResult(result);
    return isNonEmptyArray(errors);
}
function getGraphQLErrorsFromResult(result) {
    var graphQLErrors = isNonEmptyArray(result.errors)
        ? result.errors.slice(0)
        : [];
    if (isExecutionPatchIncrementalResult(result) &&
        isNonEmptyArray(result.incremental)) {
        result.incremental.forEach(function (incrementalResult) {
            if (incrementalResult.errors) {
                graphQLErrors.push.apply(graphQLErrors, incrementalResult.errors);
            }
        });
    }
    return graphQLErrors;
}

function compact() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objects.forEach(function (obj) {
        if (!obj)
            return;
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (value !== void 0) {
                result[key] = value;
            }
        });
    });
    return result;
}

var prefixCounts = new Map();
function makeUniqueId(prefix) {
    var count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}

function stringifyForDisplay(value) {
    var undefId = makeUniqueId("stringifyForDisplay");
    return JSON.stringify(value, function (key, value) {
        return value === void 0 ? undefId : value;
    }).split(JSON.stringify(undefId)).join("<undefined>");
}

function mergeOptions(defaults, options) {
    return compact(defaults, options, options.variables && {
        variables: tslib.__assign(tslib.__assign({}, (defaults && defaults.variables)), options.variables),
    });
}

exports.DEV = globals.DEV;
exports.maybe = globals.maybe;
exports.Observable = zenObservableTs.Observable;
exports.Concast = Concast;
exports.DeepMerger = DeepMerger;
exports.addTypenameToDocument = addTypenameToDocument;
exports.argumentsObjectFromField = argumentsObjectFromField;
exports.asyncMap = asyncMap;
exports.buildQueryFromSelectionSet = buildQueryFromSelectionSet;
exports.canUseAsyncIteratorSymbol = canUseAsyncIteratorSymbol;
exports.canUseDOM = canUseDOM;
exports.canUseLayoutEffect = canUseLayoutEffect;
exports.canUseSymbol = canUseSymbol;
exports.canUseWeakMap = canUseWeakMap;
exports.canUseWeakSet = canUseWeakSet;
exports.checkDocument = checkDocument;
exports.cloneDeep = cloneDeep;
exports.compact = compact;
exports.concatPagination = concatPagination;
exports.createFragmentMap = createFragmentMap;
exports.fixObservableSubclass = fixObservableSubclass;
exports.getDefaultValues = getDefaultValues;
exports.getDirectiveNames = getDirectiveNames;
exports.getFragmentDefinition = getFragmentDefinition;
exports.getFragmentDefinitions = getFragmentDefinitions;
exports.getFragmentFromSelection = getFragmentFromSelection;
exports.getFragmentQueryDocument = getFragmentQueryDocument;
exports.getGraphQLErrorsFromResult = getGraphQLErrorsFromResult;
exports.getInclusionDirectives = getInclusionDirectives;
exports.getMainDefinition = getMainDefinition;
exports.getOperationDefinition = getOperationDefinition;
exports.getOperationName = getOperationName;
exports.getQueryDefinition = getQueryDefinition;
exports.getStoreKeyName = getStoreKeyName;
exports.getTypenameFromResult = getTypenameFromResult;
exports.graphQLResultHasError = graphQLResultHasError;
exports.hasAllDirectives = hasAllDirectives;
exports.hasAnyDirectives = hasAnyDirectives;
exports.hasClientExports = hasClientExports;
exports.hasDirectives = hasDirectives;
exports.isDocumentNode = isDocumentNode;
exports.isField = isField;
exports.isInlineFragment = isInlineFragment;
exports.isNonEmptyArray = isNonEmptyArray;
exports.isNonNullObject = isNonNullObject;
exports.isReference = isReference;
exports.iterateObserversSafely = iterateObserversSafely;
exports.makeReference = makeReference;
exports.makeUniqueId = makeUniqueId;
exports.maybeDeepFreeze = maybeDeepFreeze;
exports.mergeDeep = mergeDeep;
exports.mergeDeepArray = mergeDeepArray;
exports.mergeOptions = mergeOptions;
exports.offsetLimitPagination = offsetLimitPagination;
exports.relayStylePagination = relayStylePagination;
exports.removeArgumentsFromDocument = removeArgumentsFromDocument;
exports.removeClientSetsFromDocument = removeClientSetsFromDocument;
exports.removeConnectionDirectiveFromDocument = removeConnectionDirectiveFromDocument;
exports.removeDirectivesFromDocument = removeDirectivesFromDocument;
exports.removeFragmentSpreadFromDocument = removeFragmentSpreadFromDocument;
exports.resultKeyNameFromField = resultKeyNameFromField;
exports.shouldInclude = shouldInclude;
exports.storeKeyNameFromField = storeKeyNameFromField;
exports.stringifyForDisplay = stringifyForDisplay;
exports.valueToObjectRepresentation = valueToObjectRepresentation;
//# sourceMappingURL=utilities.cjs.map


/***/ }),

/***/ "./node_modules/ts-invariant/lib/invariant.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/ts-invariant/lib/invariant.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "tslib");

var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    tslib.__extends(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
    return function () {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
            // Default to console.log if this host environment happens not to provide
            // all the console.* methods we need.
            var method = console[name] || console.log;
            return method.apply(console, arguments);
        }
    };
}
(function (invariant) {
    invariant.debug = wrapConsoleMethod("debug");
    invariant.log = wrapConsoleMethod("log");
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
}
var invariant$1 = invariant;

exports.InvariantError = InvariantError;
exports["default"] = invariant$1;
exports.invariant = invariant;
exports.setVerbosity = setVerbosity;
//# sourceMappingURL=invariant.cjs.map


/***/ }),

/***/ "./node_modules/ts-invariant/process/main.cjs":
/*!****************************************************!*\
  !*** ./node_modules/ts-invariant/process/main.cjs ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function maybe(thunk) {
  try { return thunk() } catch (_) {}
}

var safeGlobal = (
  maybe(function() { return globalThis }) ||
  maybe(function() { return window }) ||
  maybe(function() { return self }) ||
  maybe(function() { return global }) ||
  // We don't expect the Function constructor ever to be invoked at runtime, as
  // long as at least one of globalThis, window, self, or global is defined, so
  // we are under no obligation to make it easy for static analysis tools to
  // detect syntactic usage of the Function constructor. If you think you can
  // improve your static analysis to detect this obfuscation, think again. This
  // is an arms race you cannot win, at least not in JavaScript.
  maybe(function() { return maybe.constructor("return this")() })
);

var needToRemove = false;

function install() {
  if (safeGlobal &&
      !maybe(function() { return "development" }) &&
      !maybe(function() { return process })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          // This default needs to be "production" instead of "development", to
          // avoid the problem https://github.com/graphql/graphql-js/pull/2894
          // will eventually solve, once merged and released.
          NODE_ENV: "production",
        },
      },
      // Let anyone else change global.process as they see fit, but hide it from
      // Object.keys(global) enumeration.
      configurable: true,
      enumerable: false,
      writable: true,
    });
    needToRemove = true;
  }
}

// Call install() at least once, when this module is imported.
install();

function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}

exports.install = install;
exports.remove = remove;
//# sourceMappingURL=main.cjs.map


/***/ }),

/***/ "./node_modules/zen-observable-ts/index.cjs":
/*!**************************************************!*\
  !*** ./node_modules/zen-observable-ts/index.cjs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.Observable = __webpack_require__(/*! zen-observable/index.js */ "zen-observable/index.js");


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_repositories_RepoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/repositories/RepoList */ "./components/repositories/RepoList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/link/context */ "./node_modules/@apollo/client/link/context/context.cjs");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\ranja\\Downloads\\autify-assessment\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function HomePage({
  pinnableItems
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "GitHub Repository with GraphQl"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Check my github repository with graphql api integration"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_repositories_RepoList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      repos: pinnableItems
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

async function getStaticProps() {
  const httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["createHttpLink"])({
    uri: 'https://api.github.com/graphql'
  });
  const authLink = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__["setContext"])((_, {
    headers
  }) => {
    return {
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
      })
    };
  });
  const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloClient"]({
    link: authLink.concat(httpLink),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]()
  });
  const {
    data
  } = await client.query({
    query: _apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"]`
    {
      user(login: "ranjanmanish95") {
        pinnableItems(first: 13) {
          totalCount
          edges {
            node {
              ... on Repository {
                id
                name
                url
                description
              }
            }
          }
        }
      }
    }  
    `
  });
  const {
    user
  } = data;
  const pinnableItems = user.pinnableItems.edges.map(({
    node
  }) => node);
  return {
    props: {
      pinnableItems
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "@wry/context":
/*!*******************************!*\
  !*** external "@wry/context" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wry/context");

/***/ }),

/***/ "@wry/equality":
/*!********************************!*\
  !*** external "@wry/equality" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wry/equality");

/***/ }),

/***/ "@wry/trie":
/*!****************************!*\
  !*** external "@wry/trie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wry/trie");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "optimism":
/*!***************************!*\
  !*** external "optimism" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("optimism");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "symbol-observable":
/*!************************************!*\
  !*** external "symbol-observable" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("symbol-observable");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "zen-observable/index.js":
/*!******************************************!*\
  !*** external "zen-observable/index.js" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zen-observable/index.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZXBvc2l0b3JpZXMvUmVwb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZXBvc2l0b3JpZXMvUmVwb0l0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9SZXBvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9SZXBvTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvY2FjaGUvY2FjaGUuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9jb3JlL2NvcmUuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9lcnJvcnMvZXJyb3JzLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay9jb250ZXh0L2NvbnRleHQuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL2NvcmUvY29yZS5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvaHR0cC9odHRwLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay91dGlscy91dGlscy5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L21haW4uY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9jb250ZXh0L2NvbnRleHQuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9ob29rcy9ob29rcy5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3JlYWN0L3BhcnNlci9wYXJzZXIuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9yZWFjdC5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcy9nbG9iYWxzL2dsb2JhbHMuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC91dGlsaXRpZXMvdXRpbGl0aWVzLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtaW52YXJpYW50L2xpYi9pbnZhcmlhbnQuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy1pbnZhcmlhbnQvcHJvY2Vzcy9tYWluLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVuLW9ic2VydmFibGUtdHMvaW5kZXguY2pzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3cnkvY29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3cnkvZXF1YWxpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd3J5L3RyaWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9wdGltaXNtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzeW1ib2wtb2JzZXJ2YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRzbGliXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiemVuLW9ic2VydmFibGUvaW5kZXguanNcIiJdLCJuYW1lcyI6WyJSZXBvSXRlbSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2hvd0RldGFpbHNIYW5kbGVyIiwicHVzaCIsImlkIiwiY2xhc3NlcyIsIml0ZW0iLCJpbWFnZSIsInRpdGxlIiwiZ2l0aHViIiwiY29udGVudCIsIm5hbWUiLCJ1cmwiLCJhY3Rpb25zIiwiUmVwb0xpc3QiLCJxdWVyeSIsInNldFF1ZXJ5IiwidXNlU3RhdGUiLCJzZWFyY2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsaXN0IiwicmVwb3MiLCJmaWx0ZXIiLCJyZXBvIiwiaW5jbHVkZXMiLCJtYXAiLCJDYXJkIiwiY2FyZCIsImNoaWxkcmVuIiwiSG9tZVBhZ2UiLCJwaW5uYWJsZUl0ZW1zIiwiZ2V0U3RhdGljUHJvcHMiLCJodHRwTGluayIsImNyZWF0ZUh0dHBMaW5rIiwidXJpIiwiYXV0aExpbmsiLCJzZXRDb250ZXh0IiwiXyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9BQ0NFU1NfVE9LRU4iLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiY29uY2F0IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiZGF0YSIsImdxbCIsInVzZXIiLCJlZGdlcyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNB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REFBc0Qsb0JBQW9CO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBLHlQQUF5UDtBQUN6UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLCtCQUErQixtQ0FBbUMsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDBDQUEwQyxFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QseUJBQXlCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMscUJBQXFCO0FB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0FBMEMsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw4QkFBOEIsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsOEJBQThCLEVBQUU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBRnVCLEdBQWpCLENBQWY7QUFLRixRQUFNO0FBQUVDO0FBQUYsTUFBWSxNQUFNTixNQUFNLENBQUM5QixLQUFQLENBQWE7QUFDakNBLFNBQUssRUFBRXFDLGtEQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJxQyxHQUFiLENBQXhCO0FBcUJDLFFBQU07QUFBQ0M7QUFBRCxNQUFTRixJQUFmO0FBQ0EsUUFBTW5CLGFBQWEsR0FBR3FCLElBQUksQ0FBQ3JCLGFBQUwsQ0FBbUJzQixLQUFuQixDQUF5QjNCLEdBQXpCLENBQTZCLENBQUM7QUFBQzRCO0FBQUQsR0FBRCxLQUFXQSxJQUF4QyxDQUF0QjtBQUNDLFNBQU07QUFDSnhELFNBQUssRUFBQztBQUNKaUM7QUFESTtBQURGLEdBQU47QUFLRDtBQUVjRCx1RUFBZixFOzs7Ozs7Ozs7OztBQ3ZFQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQ2FyZCBmcm9tICcuLi91aS9DYXJkJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vUmVwb0l0ZW0ubW9kdWxlLmNzcyc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5mdW5jdGlvbiBSZXBvSXRlbShwcm9wcykge1xuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbmZ1bmN0aW9uIHNob3dEZXRhaWxzSGFuZGxlcigpe1xuICAgICByb3V0ZXIucHVzaCgnLycrIHByb3BzLmlkKTtcbn1cblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmdpdGh1Yn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgPGgzPntwcm9wcy5uYW1lfTwvaDM+XG4gICAgICAgICAgPGFkZHJlc3M+e3Byb3BzLnVybH08L2FkZHJlc3M+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dEZXRhaWxzSGFuZGxlcn0+U2hvdyBEZXRhaWxzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9JdGVtO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbVwiOiBcIlJlcG9JdGVtX2l0ZW1fXzM3UkNJXCIsXG5cdFwiaW1hZ2VcIjogXCJSZXBvSXRlbV9pbWFnZV9fMnJuTnRcIixcblx0XCJnaXRodWJcIjogXCJSZXBvSXRlbV9naXRodWJfXzJzekFPXCIsXG5cdFwiY29udGVudFwiOiBcIlJlcG9JdGVtX2NvbnRlbnRfXzJtcWZKXCIsXG5cdFwiYWN0aW9uc1wiOiBcIlJlcG9JdGVtX2FjdGlvbnNfX0Z0cEhDXCJcbn07XG4iLCJpbXBvcnQgUmVwb0l0ZW0gZnJvbSAnLi9SZXBvSXRlbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1JlcG9MaXN0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBSZXBvTGlzdChwcm9wcykge1xuICBjb25zdCBbcXVlcnksc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGlucHV0IFxuICAgIHR5cGU9J3RleHQnIFxuICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggeW91ciByZXBvc2l0b3J5IGJ5IG5hbWUnIFxuICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9IFxuICAgIG9uQ2hhbmdlPXsoZSk9PnNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICB2YWx1ZT17cXVlcnl9Lz5cbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAge3Byb3BzLnJlcG9zLmZpbHRlcigocmVwbyk9PnJlcG8ubmFtZS5pbmNsdWRlcyhxdWVyeSkpLm1hcCgocmVwbykgPT4gKFxuICAgICAgICA8UmVwb0l0ZW1cbiAgICAgICAgICBrZXk9e3JlcG8uaWR9XG4gICAgICAgICAgaWQ9e3JlcG8uaWR9XG4gICAgICAgICAgaW1hZ2U9XCJodHRwczovL3BuZ2ltZy5jb20vdXBsb2Fkcy9naXRodWIvZ2l0aHViX1BORzI4LnBuZ1wiXG4gICAgICAgICAgbmFtZT17cmVwby5uYW1lfVxuICAgICAgICAgIHVybD17cmVwby51cmx9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXBvTGlzdDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpc3RcIjogXCJSZXBvTGlzdF9saXN0X18zczdRNVwiLFxuXHRcInNlYXJjaFwiOiBcIlJlcG9MaXN0X3NlYXJjaF9fMXVRNWtcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzNLU0xPXCJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgb3B0aW1pc20gPSByZXF1aXJlKCdvcHRpbWlzbScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcycpO1xudmFyIGVxdWFsaXR5ID0gcmVxdWlyZSgnQHdyeS9lcXVhbGl0eScpO1xudmFyIHRyaWUgPSByZXF1aXJlKCdAd3J5L3RyaWUnKTtcbnZhciBncmFwaHFsID0gcmVxdWlyZSgnZ3JhcGhxbCcpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCdAd3J5L2NvbnRleHQnKTtcblxudmFyIEFwb2xsb0NhY2hlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcG9sbG9DYWNoZSgpIHtcbiAgICAgICAgdGhpcy5nZXRGcmFnbWVudERvYyA9IG9wdGltaXNtLndyYXAodXRpbGl0aWVzLmdldEZyYWdtZW50UXVlcnlEb2N1bWVudCk7XG4gICAgfVxuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBvcHRpbWlzdGljSWQgPSB0eXBlb2Ygb3B0aW9ucy5vcHRpbWlzdGljID09PSBcInN0cmluZ1wiID8gb3B0aW9ucy5vcHRpbWlzdGljIDpcbiAgICAgICAgICAgIG9wdGlvbnMub3B0aW1pc3RpYyA9PT0gZmFsc2UgPyBudWxsIDogdm9pZCAwO1xuICAgICAgICB2YXIgdXBkYXRlUmVzdWx0O1xuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7IHJldHVybiB1cGRhdGVSZXN1bHQgPSBvcHRpb25zLnVwZGF0ZShfdGhpcyk7IH0sIG9wdGltaXN0aWNJZCk7XG4gICAgICAgIHJldHVybiB1cGRhdGVSZXN1bHQ7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUucmVjb3JkT3B0aW1pc3RpY1RyYW5zYWN0aW9uID0gZnVuY3Rpb24gKHRyYW5zYWN0aW9uLCBvcHRpbWlzdGljSWQpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24sIG9wdGltaXN0aWNJZCk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUudHJhbnNmb3JtRG9jdW1lbnQgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnRyYW5zZm9ybUZvckxpbmsgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUuZ2MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5tb2RpZnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUucmVhZFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gISFvcHRpb25zLm9wdGltaXN0aWM7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZCh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgcm9vdElkOiBvcHRpb25zLmlkIHx8ICdST09UX1FVRVJZJywgb3B0aW1pc3RpYzogb3B0aW1pc3RpYyB9KSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUucmVhZEZyYWdtZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gISFvcHRpb25zLm9wdGltaXN0aWM7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZCh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgcXVlcnk6IHRoaXMuZ2V0RnJhZ21lbnREb2Mob3B0aW9ucy5mcmFnbWVudCwgb3B0aW9ucy5mcmFnbWVudE5hbWUpLCByb290SWQ6IG9wdGlvbnMuaWQsIG9wdGltaXN0aWM6IG9wdGltaXN0aWMgfSkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLndyaXRlUXVlcnkgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGlkID0gX2EuaWQsIGRhdGEgPSBfYS5kYXRhLCBvcHRpb25zID0gdHNsaWIuX19yZXN0KF9hLCBbXCJpZFwiLCBcImRhdGFcIl0pO1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZShPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGRhdGFJZDogaWQgfHwgJ1JPT1RfUVVFUlknLFxuICAgICAgICAgICAgcmVzdWx0OiBkYXRhLFxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUud3JpdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgaWQgPSBfYS5pZCwgZGF0YSA9IF9hLmRhdGEsIGZyYWdtZW50ID0gX2EuZnJhZ21lbnQsIGZyYWdtZW50TmFtZSA9IF9hLmZyYWdtZW50TmFtZSwgb3B0aW9ucyA9IHRzbGliLl9fcmVzdChfYSwgW1wiaWRcIiwgXCJkYXRhXCIsIFwiZnJhZ21lbnRcIiwgXCJmcmFnbWVudE5hbWVcIl0pO1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZShPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLmdldEZyYWdtZW50RG9jKGZyYWdtZW50LCBmcmFnbWVudE5hbWUpLFxuICAgICAgICAgICAgZGF0YUlkOiBpZCxcbiAgICAgICAgICAgIHJlc3VsdDogZGF0YSxcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnVwZGF0ZVF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHVwZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXRjaCh7XG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNhY2hlLnJlYWRRdWVyeShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHVwZGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IHZvaWQgMCB8fCBkYXRhID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZGF0YTogZGF0YSB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS51cGRhdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zLCB1cGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmF0Y2goe1xuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjYWNoZS5yZWFkRnJhZ21lbnQob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB1cGRhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSB2b2lkIDAgfHwgZGF0YSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlRnJhZ21lbnQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGRhdGE6IGRhdGEgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQXBvbGxvQ2FjaGU7XG59KCkpO1xuXG5leHBvcnRzLkNhY2hlID0gdm9pZCAwO1xuKGZ1bmN0aW9uIChDYWNoZSkge1xufSkoZXhwb3J0cy5DYWNoZSB8fCAoZXhwb3J0cy5DYWNoZSA9IHt9KSk7XG5cbnZhciBNaXNzaW5nRmllbGRFcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKE1pc3NpbmdGaWVsZEVycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1pc3NpbmdGaWVsZEVycm9yKG1lc3NhZ2UsIHBhdGgsIHF1ZXJ5LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgX3RoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIF90aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIF90aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX3RoaXMucGF0aCkpIHtcbiAgICAgICAgICAgIF90aGlzLm1pc3NpbmcgPSBfdGhpcy5tZXNzYWdlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IF90aGlzLnBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5taXNzaW5nID0gKF9hID0ge30sIF9hW190aGlzLnBhdGhbaV1dID0gX3RoaXMubWlzc2luZywgX2EpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMubWlzc2luZyA9IF90aGlzLnBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX19wcm90b19fID0gTWlzc2luZ0ZpZWxkRXJyb3IucHJvdG90eXBlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBNaXNzaW5nRmllbGRFcnJvcjtcbn0oRXJyb3IpKTtcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBpc051bGxpc2godmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMDtcbn1cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0KF9hLCBjb250ZXh0KSB7XG4gICAgdmFyIF9fdHlwZW5hbWUgPSBfYS5fX3R5cGVuYW1lLCBpZCA9IF9hLmlkLCBfaWQgPSBfYS5faWQ7XG4gICAgaWYgKHR5cGVvZiBfX3R5cGVuYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmtleU9iamVjdCA9XG4gICAgICAgICAgICAgICAgIWlzTnVsbGlzaChpZCkgPyB7IGlkOiBpZCB9IDpcbiAgICAgICAgICAgICAgICAgICAgIWlzTnVsbGlzaChfaWQpID8geyBfaWQ6IF9pZCB9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdWxsaXNoKGlkKSAmJiAhaXNOdWxsaXNoKF9pZCkpIHtcbiAgICAgICAgICAgIGlkID0gX2lkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNOdWxsaXNoKGlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF9fdHlwZW5hbWUsIFwiOlwiKS5jb25jYXQoKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIikgPyBpZCA6IEpTT04uc3RyaW5naWZ5KGlkKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG52YXIgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBkYXRhSWRGcm9tT2JqZWN0OiBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdCxcbiAgICBhZGRUeXBlbmFtZTogdHJ1ZSxcbiAgICByZXN1bHRDYWNoaW5nOiB0cnVlLFxuICAgIGNhbm9uaXplUmVzdWx0czogZmFsc2UsXG59O1xuZnVuY3Rpb24gbm9ybWFsaXplQ29uZmlnKGNvbmZpZykge1xuICAgIHJldHVybiB1dGlsaXRpZXMuY29tcGFjdChkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xufVxuZnVuY3Rpb24gc2hvdWxkQ2Fub25pemVSZXN1bHRzKGNvbmZpZykge1xuICAgIHZhciB2YWx1ZSA9IGNvbmZpZy5jYW5vbml6ZVJlc3VsdHM7XG4gICAgcmV0dXJuIHZhbHVlID09PSB2b2lkIDAgPyBkZWZhdWx0Q29uZmlnLmNhbm9uaXplUmVzdWx0cyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0VHlwZW5hbWVGcm9tU3RvcmVPYmplY3Qoc3RvcmUsIG9iamVjdE9yUmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmplY3RPclJlZmVyZW5jZSlcbiAgICAgICAgPyBzdG9yZS5nZXQob2JqZWN0T3JSZWZlcmVuY2UuX19yZWYsIFwiX190eXBlbmFtZVwiKVxuICAgICAgICA6IG9iamVjdE9yUmVmZXJlbmNlICYmIG9iamVjdE9yUmVmZXJlbmNlLl9fdHlwZW5hbWU7XG59XG52YXIgVHlwZU9yRmllbGROYW1lUmVnRXhwID0gL15bX2Etel1bXzAtOWEtel0qL2k7XG5mdW5jdGlvbiBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKSB7XG4gICAgdmFyIG1hdGNoID0gc3RvcmVGaWVsZE5hbWUubWF0Y2goVHlwZU9yRmllbGROYW1lUmVnRXhwKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFswXSA6IHN0b3JlRmllbGROYW1lO1xufVxuZnVuY3Rpb24gc2VsZWN0aW9uU2V0TWF0Y2hlc1Jlc3VsdChzZWxlY3Rpb25TZXQsIHJlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gaXNBcnJheShyZXN1bHQpXG4gICAgICAgICAgICA/IHJlc3VsdC5ldmVyeShmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gc2VsZWN0aW9uU2V0TWF0Y2hlc1Jlc3VsdChzZWxlY3Rpb25TZXQsIGl0ZW0sIHZhcmlhYmxlcyk7IH0pXG4gICAgICAgICAgICA6IHNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmV2ZXJ5KGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNGaWVsZChmaWVsZCkgJiYgdXRpbGl0aWVzLnNob3VsZEluY2x1ZGUoZmllbGQsIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IHV0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhc093bi5jYWxsKHJlc3VsdCwga2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCFmaWVsZC5zZWxlY3Rpb25TZXQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXRNYXRjaGVzUmVzdWx0KGZpZWxkLnNlbGVjdGlvblNldCwgcmVzdWx0W2tleV0sIHZhcmlhYmxlcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBzdG9yZVZhbHVlSXNTdG9yZU9iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSAmJlxuICAgICAgICAhdXRpbGl0aWVzLmlzUmVmZXJlbmNlKHZhbHVlKSAmJlxuICAgICAgICAhaXNBcnJheSh2YWx1ZSk7XG59XG5mdW5jdGlvbiBtYWtlUHJvY2Vzc2VkRmllbGRzTWVyZ2VyKCkge1xuICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLkRlZXBNZXJnZXI7XG59XG5mdW5jdGlvbiBleHRyYWN0RnJhZ21lbnRDb250ZXh0KGRvY3VtZW50LCBmcmFnbWVudHMpIHtcbiAgICB2YXIgZnJhZ21lbnRNYXAgPSB1dGlsaXRpZXMuY3JlYXRlRnJhZ21lbnRNYXAodXRpbGl0aWVzLmdldEZyYWdtZW50RGVmaW5pdGlvbnMoZG9jdW1lbnQpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBmcmFnbWVudE1hcDogZnJhZ21lbnRNYXAsXG4gICAgICAgIGxvb2t1cEZyYWdtZW50OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIGRlZiA9IGZyYWdtZW50TWFwW25hbWVdO1xuICAgICAgICAgICAgaWYgKCFkZWYgJiYgZnJhZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgZGVmID0gZnJhZ21lbnRzLmxvb2t1cChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWYgfHwgbnVsbDtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG52YXIgREVMRVRFID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbnZhciBkZWxNb2RpZmllciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIERFTEVURTsgfTtcbnZhciBJTlZBTElEQVRFID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmV4cG9ydHMuRW50aXR5U3RvcmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVudGl0eVN0b3JlKHBvbGljaWVzLCBncm91cCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnBvbGljaWVzID0gcG9saWNpZXM7XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcbiAgICAgICAgdGhpcy5kYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5yb290SWRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5yZWZzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5nZXRGaWVsZFZhbHVlID0gZnVuY3Rpb24gKG9iamVjdE9yUmVmZXJlbmNlLCBzdG9yZUZpZWxkTmFtZSkgeyByZXR1cm4gdXRpbGl0aWVzLm1heWJlRGVlcEZyZWV6ZSh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpXG4gICAgICAgICAgICA/IF90aGlzLmdldChvYmplY3RPclJlZmVyZW5jZS5fX3JlZiwgc3RvcmVGaWVsZE5hbWUpXG4gICAgICAgICAgICA6IG9iamVjdE9yUmVmZXJlbmNlICYmIG9iamVjdE9yUmVmZXJlbmNlW3N0b3JlRmllbGROYW1lXSk7IH07XG4gICAgICAgIHRoaXMuY2FuUmVhZCA9IGZ1bmN0aW9uIChvYmpPclJlZikge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmpPclJlZilcbiAgICAgICAgICAgICAgICA/IF90aGlzLmhhcyhvYmpPclJlZi5fX3JlZilcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiBvYmpPclJlZiA9PT0gXCJvYmplY3RcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50b1JlZmVyZW5jZSA9IGZ1bmN0aW9uIChvYmpPcklkT3JSZWYsIG1lcmdlSW50b1N0b3JlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iak9ySWRPclJlZiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZShvYmpPcklkT3JSZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmpPcklkT3JSZWYpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iak9ySWRPclJlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpZCA9IF90aGlzLnBvbGljaWVzLmlkZW50aWZ5KG9iak9ySWRPclJlZilbMF07XG4gICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmID0gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2UoaWQpO1xuICAgICAgICAgICAgICAgIGlmIChtZXJnZUludG9TdG9yZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tZXJnZShpZCwgb2JqT3JJZE9yUmVmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24oe30sIHRoaXMuZGF0YSk7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb29rdXAoZGF0YUlkLCB0cnVlKSAhPT0gdm9pZCAwO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChkYXRhSWQsIGZpZWxkTmFtZSkge1xuICAgICAgICB0aGlzLmdyb3VwLmRlcGVuZChkYXRhSWQsIGZpZWxkTmFtZSk7XG4gICAgICAgIGlmIChoYXNPd24uY2FsbCh0aGlzLmRhdGEsIGRhdGFJZCkpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZU9iamVjdCA9IHRoaXMuZGF0YVtkYXRhSWRdO1xuICAgICAgICAgICAgaWYgKHN0b3JlT2JqZWN0ICYmIGhhc093bi5jYWxsKHN0b3JlT2JqZWN0LCBmaWVsZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlT2JqZWN0W2ZpZWxkTmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJfX3R5cGVuYW1lXCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWQsIGRhdGFJZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkW2RhdGFJZF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBMYXllcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldChkYXRhSWQsIGZpZWxkTmFtZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5sb29rdXAgPSBmdW5jdGlvbiAoZGF0YUlkLCBkZXBlbmRPbkV4aXN0ZW5jZSkge1xuICAgICAgICBpZiAoZGVwZW5kT25FeGlzdGVuY2UpXG4gICAgICAgICAgICB0aGlzLmdyb3VwLmRlcGVuZChkYXRhSWQsIFwiX19leGlzdHNcIik7XG4gICAgICAgIGlmIChoYXNPd24uY2FsbCh0aGlzLmRhdGEsIGRhdGFJZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbZGF0YUlkXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIExheWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQubG9va3VwKGRhdGFJZCwgZGVwZW5kT25FeGlzdGVuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkW2RhdGFJZF0pIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAob2xkZXIsIG5ld2VyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhSWQ7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2xkZXIpKVxuICAgICAgICAgICAgb2xkZXIgPSBvbGRlci5fX3JlZjtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShuZXdlcikpXG4gICAgICAgICAgICBuZXdlciA9IG5ld2VyLl9fcmVmO1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSB0eXBlb2Ygb2xkZXIgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gdGhpcy5sb29rdXAoZGF0YUlkID0gb2xkZXIpXG4gICAgICAgICAgICA6IG9sZGVyO1xuICAgICAgICB2YXIgaW5jb21pbmcgPSB0eXBlb2YgbmV3ZXIgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gdGhpcy5sb29rdXAoZGF0YUlkID0gbmV3ZXIpXG4gICAgICAgICAgICA6IG5ld2VyO1xuICAgICAgICBpZiAoIWluY29taW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQodHlwZW9mIGRhdGFJZCA9PT0gXCJzdHJpbmdcIiwgXCJzdG9yZS5tZXJnZSBleHBlY3RzIGEgc3RyaW5nIElEXCIpIDogZ2xvYmFscy5pbnZhcmlhbnQodHlwZW9mIGRhdGFJZCA9PT0gXCJzdHJpbmdcIiwgMSk7XG4gICAgICAgIHZhciBtZXJnZWQgPSBuZXcgdXRpbGl0aWVzLkRlZXBNZXJnZXIoc3RvcmVPYmplY3RSZWNvbmNpbGVyKS5tZXJnZShleGlzdGluZywgaW5jb21pbmcpO1xuICAgICAgICB0aGlzLmRhdGFbZGF0YUlkXSA9IG1lcmdlZDtcbiAgICAgICAgaWYgKG1lcmdlZCAhPT0gZXhpc3RpbmcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlZnNbZGF0YUlkXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwLmNhY2hpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGRzVG9EaXJ0eV8xID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4aXN0aW5nKVxuICAgICAgICAgICAgICAgICAgICBmaWVsZHNUb0RpcnR5XzEuX19leGlzdHMgPSAxO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGluY29taW5nKS5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4aXN0aW5nIHx8IGV4aXN0aW5nW3N0b3JlRmllbGROYW1lXSAhPT0gbWVyZ2VkW3N0b3JlRmllbGROYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzVG9EaXJ0eV8xW3N0b3JlRmllbGROYW1lXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGROYW1lICE9PSBzdG9yZUZpZWxkTmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdGhpcy5wb2xpY2llcy5oYXNLZXlBcmdzKG1lcmdlZC5fX3R5cGVuYW1lLCBmaWVsZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzVG9EaXJ0eV8xW2ZpZWxkTmFtZV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lcmdlZFtzdG9yZUZpZWxkTmFtZV0gPT09IHZvaWQgMCAmJiAhKF90aGlzIGluc3RhbmNlb2YgTGF5ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lcmdlZFtzdG9yZUZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRzVG9EaXJ0eV8xLl9fdHlwZW5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgIShleGlzdGluZyAmJiBleGlzdGluZy5fX3R5cGVuYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkW2RhdGFJZF0gPT09IG1lcmdlZC5fX3R5cGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNUb0RpcnR5XzEuX190eXBlbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzVG9EaXJ0eV8xKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZE5hbWUpIHsgcmV0dXJuIF90aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgZmllbGROYW1lKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5tb2RpZnkgPSBmdW5jdGlvbiAoZGF0YUlkLCBmaWVsZHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0b3JlT2JqZWN0ID0gdGhpcy5sb29rdXAoZGF0YUlkKTtcbiAgICAgICAgaWYgKHN0b3JlT2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZEZpZWxkc18xID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHZhciBuZWVkVG9NZXJnZV8xID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgYWxsRGVsZXRlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBzaGFyZWREZXRhaWxzXzEgPSB7XG4gICAgICAgICAgICAgICAgREVMRVRFOiBERUxFVEUsXG4gICAgICAgICAgICAgICAgSU5WQUxJREFURTogSU5WQUxJREFURSxcbiAgICAgICAgICAgICAgICBpc1JlZmVyZW5jZTogdXRpbGl0aWVzLmlzUmVmZXJlbmNlLFxuICAgICAgICAgICAgICAgIHRvUmVmZXJlbmNlOiB0aGlzLnRvUmVmZXJlbmNlLFxuICAgICAgICAgICAgICAgIGNhblJlYWQ6IHRoaXMuY2FuUmVhZCxcbiAgICAgICAgICAgICAgICByZWFkRmllbGQ6IGZ1bmN0aW9uIChmaWVsZE5hbWVPck9wdGlvbnMsIGZyb20pIHsgcmV0dXJuIF90aGlzLnBvbGljaWVzLnJlYWRGaWVsZCh0eXBlb2YgZmllbGROYW1lT3JPcHRpb25zID09PSBcInN0cmluZ1wiID8ge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZU9yT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogZnJvbSB8fCB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZShkYXRhSWQpLFxuICAgICAgICAgICAgICAgIH0gOiBmaWVsZE5hbWVPck9wdGlvbnMsIHsgc3RvcmU6IF90aGlzIH0pOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JlT2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IHN0b3JlT2JqZWN0W3N0b3JlRmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZSA9PT0gdm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdmFyIG1vZGlmeSA9IHR5cGVvZiBmaWVsZHMgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICA/IGZpZWxkc1xuICAgICAgICAgICAgICAgICAgICA6IGZpZWxkc1tzdG9yZUZpZWxkTmFtZV0gfHwgZmllbGRzW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmeSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBtb2RpZnkgPT09IGRlbE1vZGlmaWVyID8gREVMRVRFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeSh1dGlsaXRpZXMubWF5YmVEZWVwRnJlZXplKGZpZWxkVmFsdWUpLCB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgc2hhcmVkRGV0YWlsc18xKSwgeyBmaWVsZE5hbWU6IGZpZWxkTmFtZSwgc3RvcmVGaWVsZE5hbWU6IHN0b3JlRmllbGROYW1lLCBzdG9yYWdlOiBfdGhpcy5nZXRTdG9yYWdlKGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBJTlZBTElEQVRFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ncm91cC5kaXJ0eShkYXRhSWQsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gREVMRVRFKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBmaWVsZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZEZpZWxkc18xW3N0b3JlRmllbGROYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRUb01lcmdlXzEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbERlbGV0ZWRfMSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG5lZWRUb01lcmdlXzEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lcmdlKGRhdGFJZCwgY2hhbmdlZEZpZWxkc18xKTtcbiAgICAgICAgICAgICAgICBpZiAoYWxsRGVsZXRlZF8xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtkYXRhSWRdID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGF0YVtkYXRhSWRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuZGlydHkoZGF0YUlkLCBcIl9fZXhpc3RzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGRhdGFJZCwgZmllbGROYW1lLCBhcmdzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHN0b3JlT2JqZWN0ID0gdGhpcy5sb29rdXAoZGF0YUlkKTtcbiAgICAgICAgaWYgKHN0b3JlT2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgdHlwZW5hbWUgPSB0aGlzLmdldEZpZWxkVmFsdWUoc3RvcmVPYmplY3QsIFwiX190eXBlbmFtZVwiKTtcbiAgICAgICAgICAgIHZhciBzdG9yZUZpZWxkTmFtZSA9IGZpZWxkTmFtZSAmJiBhcmdzXG4gICAgICAgICAgICAgICAgPyB0aGlzLnBvbGljaWVzLmdldFN0b3JlRmllbGROYW1lKHsgdHlwZW5hbWU6IHR5cGVuYW1lLCBmaWVsZE5hbWU6IGZpZWxkTmFtZSwgYXJnczogYXJncyB9KVxuICAgICAgICAgICAgICAgIDogZmllbGROYW1lO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kaWZ5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUgPyAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVtzdG9yZUZpZWxkTmFtZV0gPSBkZWxNb2RpZmllcixcbiAgICAgICAgICAgICAgICBfYSkgOiBkZWxNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmV2aWN0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGxpbWl0KSB7XG4gICAgICAgIHZhciBldmljdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwodGhpcy5kYXRhLCBvcHRpb25zLmlkKSkge1xuICAgICAgICAgICAgICAgIGV2aWN0ZWQgPSB0aGlzLmRlbGV0ZShvcHRpb25zLmlkLCBvcHRpb25zLmZpZWxkTmFtZSwgb3B0aW9ucy5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTGF5ZXIgJiYgdGhpcyAhPT0gbGltaXQpIHtcbiAgICAgICAgICAgICAgICBldmljdGVkID0gdGhpcy5wYXJlbnQuZXZpY3Qob3B0aW9ucywgbGltaXQpIHx8IGV2aWN0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5maWVsZE5hbWUgfHwgZXZpY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuZGlydHkob3B0aW9ucy5pZCwgb3B0aW9ucy5maWVsZE5hbWUgfHwgXCJfX2V4aXN0c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZpY3RlZDtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlKG51bGwpO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICAgIHZhciBleHRyYVJvb3RJZHMgPSBbXTtcbiAgICAgICAgdGhpcy5nZXRSb290SWRTZXQoKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgaWYgKCFoYXNPd24uY2FsbChfdGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZCwgaWQpKSB7XG4gICAgICAgICAgICAgICAgZXh0cmFSb290SWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGV4dHJhUm9vdElkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG9iai5fX01FVEEgPSB7IGV4dHJhUm9vdElkczogZXh0cmFSb290SWRzLnNvcnQoKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChuZXdEYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgICAgICBpZiAoIShuZXdEYXRhICYmIGhhc093bi5jYWxsKG5ld0RhdGEsIGRhdGFJZCkpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGVsZXRlKGRhdGFJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmV3RGF0YSkge1xuICAgICAgICAgICAgdmFyIF9fTUVUQSA9IG5ld0RhdGEuX19NRVRBLCByZXN0XzEgPSB0c2xpYi5fX3Jlc3QobmV3RGF0YSwgW1wiX19NRVRBXCJdKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlc3RfMSkuZm9yRWFjaChmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubWVyZ2UoZGF0YUlkLCByZXN0XzFbZGF0YUlkXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChfX01FVEEpIHtcbiAgICAgICAgICAgICAgICBfX01FVEEuZXh0cmFSb290SWRzLmZvckVhY2godGhpcy5yZXRhaW4sIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUucmV0YWluID0gZnVuY3Rpb24gKHJvb3RJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290SWRzW3Jvb3RJZF0gPSAodGhpcy5yb290SWRzW3Jvb3RJZF0gfHwgMCkgKyAxO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbiAocm9vdElkKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3RJZHNbcm9vdElkXSA+IDApIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IC0tdGhpcy5yb290SWRzW3Jvb3RJZF07XG4gICAgICAgICAgICBpZiAoIWNvdW50KVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvb3RJZHNbcm9vdElkXTtcbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5nZXRSb290SWRTZXQgPSBmdW5jdGlvbiAoaWRzKSB7XG4gICAgICAgIGlmIChpZHMgPT09IHZvaWQgMCkgeyBpZHMgPSBuZXcgU2V0KCk7IH1cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5yb290SWRzKS5mb3JFYWNoKGlkcy5hZGQsIGlkcyk7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmdldFJvb3RJZFNldChpZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZCkuZm9yRWFjaChpZHMuYWRkLCBpZHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZ2MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpZHMgPSB0aGlzLmdldFJvb3RJZFNldCgpO1xuICAgICAgICB2YXIgc25hcHNob3QgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICAgIGlkcy5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKHNuYXBzaG90LCBpZCkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhfdGhpcy5maW5kQ2hpbGRSZWZJZHMoaWQpKS5mb3JFYWNoKGlkcy5hZGQsIGlkcyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNuYXBzaG90W2lkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBpZHNUb1JlbW92ZSA9IE9iamVjdC5rZXlzKHNuYXBzaG90KTtcbiAgICAgICAgaWYgKGlkc1RvUmVtb3ZlLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHJvb3RfMSA9IHRoaXM7XG4gICAgICAgICAgICB3aGlsZSAocm9vdF8xIGluc3RhbmNlb2YgTGF5ZXIpXG4gICAgICAgICAgICAgICAgcm9vdF8xID0gcm9vdF8xLnBhcmVudDtcbiAgICAgICAgICAgIGlkc1RvUmVtb3ZlLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7IHJldHVybiByb290XzEuZGVsZXRlKGlkKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkc1RvUmVtb3ZlO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmZpbmRDaGlsZFJlZklkcyA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgaWYgKCFoYXNPd24uY2FsbCh0aGlzLnJlZnMsIGRhdGFJZCkpIHtcbiAgICAgICAgICAgIHZhciBmb3VuZF8xID0gdGhpcy5yZWZzW2RhdGFJZF0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB0aGlzLmRhdGFbZGF0YUlkXTtcbiAgICAgICAgICAgIGlmICghcm9vdClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfMTtcbiAgICAgICAgICAgIHZhciB3b3JrU2V0XzEgPSBuZXcgU2V0KFtyb290XSk7XG4gICAgICAgICAgICB3b3JrU2V0XzEuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmopKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kXzFbb2JqLl9fcmVmXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya1NldF8xLmFkZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnNbZGF0YUlkXTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5tYWtlQ2FjaGVLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwLmtleU1ha2VyLmxvb2t1cEFycmF5KGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXR1cm4gRW50aXR5U3RvcmU7XG59KCkpO1xudmFyIENhY2hlR3JvdXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhY2hlR3JvdXAoY2FjaGluZywgcGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHZvaWQgMCkgeyBwYXJlbnQgPSBudWxsOyB9XG4gICAgICAgIHRoaXMuY2FjaGluZyA9IGNhY2hpbmc7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlc2V0Q2FjaGluZygpO1xuICAgIH1cbiAgICBDYWNoZUdyb3VwLnByb3RvdHlwZS5yZXNldENhY2hpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZCA9IHRoaXMuY2FjaGluZyA/IG9wdGltaXNtLmRlcCgpIDogbnVsbDtcbiAgICAgICAgdGhpcy5rZXlNYWtlciA9IG5ldyB0cmllLlRyaWUodXRpbGl0aWVzLmNhblVzZVdlYWtNYXApO1xuICAgIH07XG4gICAgQ2FjaGVHcm91cC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZCkge1xuICAgICAgICAgICAgdGhpcy5kKG1ha2VEZXBLZXkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSkpO1xuICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgaWYgKGZpZWxkTmFtZSAhPT0gc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmQobWFrZURlcEtleShkYXRhSWQsIGZpZWxkTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGVwZW5kKGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBDYWNoZUdyb3VwLnByb3RvdHlwZS5kaXJ0eSA9IGZ1bmN0aW9uIChkYXRhSWQsIHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmQpIHtcbiAgICAgICAgICAgIHRoaXMuZC5kaXJ0eShtYWtlRGVwS2V5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpLCBzdG9yZUZpZWxkTmFtZSA9PT0gXCJfX2V4aXN0c1wiID8gXCJmb3JnZXRcIiA6IFwic2V0RGlydHlcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDYWNoZUdyb3VwO1xufSgpKTtcbmZ1bmN0aW9uIG1ha2VEZXBLZXkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSkge1xuICAgIHJldHVybiBzdG9yZUZpZWxkTmFtZSArICcjJyArIGRhdGFJZDtcbn1cbmZ1bmN0aW9uIG1heWJlRGVwZW5kT25FeGlzdGVuY2VPZkVudGl0eShzdG9yZSwgZW50aXR5SWQpIHtcbiAgICBpZiAoc3VwcG9ydHNSZXN1bHRDYWNoaW5nKHN0b3JlKSkge1xuICAgICAgICBzdG9yZS5ncm91cC5kZXBlbmQoZW50aXR5SWQsIFwiX19leGlzdHNcIik7XG4gICAgfVxufVxuKGZ1bmN0aW9uIChFbnRpdHlTdG9yZSkge1xuICAgIHZhciBSb290ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgdHNsaWIuX19leHRlbmRzKFJvb3QsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIFJvb3QoX2EpIHtcbiAgICAgICAgICAgIHZhciBwb2xpY2llcyA9IF9hLnBvbGljaWVzLCBfYiA9IF9hLnJlc3VsdENhY2hpbmcsIHJlc3VsdENhY2hpbmcgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBzZWVkID0gX2Euc2VlZDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHBvbGljaWVzLCBuZXcgQ2FjaGVHcm91cChyZXN1bHRDYWNoaW5nKSkgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLnN0dW1wID0gbmV3IFN0dW1wKF90aGlzKTtcbiAgICAgICAgICAgIF90aGlzLnN0b3JhZ2VUcmllID0gbmV3IHRyaWUuVHJpZSh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCk7XG4gICAgICAgICAgICBpZiAoc2VlZClcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXBsYWNlKHNlZWQpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIFJvb3QucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24gKGxheWVySWQsIHJlcGxheSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R1bXAuYWRkTGF5ZXIobGF5ZXJJZCwgcmVwbGF5KTtcbiAgICAgICAgfTtcbiAgICAgICAgUm9vdC5wcm90b3R5cGUucmVtb3ZlTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgUm9vdC5wcm90b3R5cGUuZ2V0U3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VUcmllLmxvb2t1cEFycmF5KGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSb290O1xuICAgIH0oRW50aXR5U3RvcmUpKTtcbiAgICBFbnRpdHlTdG9yZS5Sb290ID0gUm9vdDtcbn0pKGV4cG9ydHMuRW50aXR5U3RvcmUgfHwgKGV4cG9ydHMuRW50aXR5U3RvcmUgPSB7fSkpO1xudmFyIExheWVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoTGF5ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGF5ZXIoaWQsIHBhcmVudCwgcmVwbGF5LCBncm91cCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwYXJlbnQucG9saWNpZXMsIGdyb3VwKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pZCA9IGlkO1xuICAgICAgICBfdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIF90aGlzLnJlcGxheSA9IHJlcGxheTtcbiAgICAgICAgX3RoaXMuZ3JvdXAgPSBncm91cDtcbiAgICAgICAgcmVwbGF5KF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMYXllci5wcm90b3R5cGUuYWRkTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXJJZCwgcmVwbGF5KSB7XG4gICAgICAgIHJldHVybiBuZXcgTGF5ZXIobGF5ZXJJZCwgdGhpcywgcmVwbGF5LCB0aGlzLmdyb3VwKTtcbiAgICB9O1xuICAgIExheWVyLnByb3RvdHlwZS5yZW1vdmVMYXllciA9IGZ1bmN0aW9uIChsYXllcklkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudC5yZW1vdmVMYXllcihsYXllcklkKTtcbiAgICAgICAgaWYgKGxheWVySWQgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwLmNhY2hpbmcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3duU3RvcmVPYmplY3QgPSBfdGhpcy5kYXRhW2RhdGFJZF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRTdG9yZU9iamVjdCA9IHBhcmVudFtcImxvb2t1cFwiXShkYXRhSWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudFN0b3JlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWxldGUoZGF0YUlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghb3duU3RvcmVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgXCJfX2V4aXN0c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmVudFN0b3JlT2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob3duU3RvcmVPYmplY3QgIT09IHBhcmVudFN0b3JlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvd25TdG9yZU9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVxdWFsaXR5LmVxdWFsKG93blN0b3JlT2JqZWN0W3N0b3JlRmllbGROYW1lXSwgcGFyZW50U3RvcmVPYmplY3Rbc3RvcmVGaWVsZE5hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ncm91cC5kaXJ0eShkYXRhSWQsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50ID09PSB0aGlzLnBhcmVudClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICByZXR1cm4gcGFyZW50LmFkZExheWVyKHRoaXMuaWQsIHRoaXMucmVwbGF5KTtcbiAgICB9O1xuICAgIExheWVyLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLnBhcmVudC50b09iamVjdCgpKSwgdGhpcy5kYXRhKTtcbiAgICB9O1xuICAgIExheWVyLnByb3RvdHlwZS5maW5kQ2hpbGRSZWZJZHMgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgIHZhciBmcm9tUGFyZW50ID0gdGhpcy5wYXJlbnQuZmluZENoaWxkUmVmSWRzKGRhdGFJZCk7XG4gICAgICAgIHJldHVybiBoYXNPd24uY2FsbCh0aGlzLmRhdGEsIGRhdGFJZCkgPyB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZnJvbVBhcmVudCksIF9zdXBlci5wcm90b3R5cGUuZmluZENoaWxkUmVmSWRzLmNhbGwodGhpcywgZGF0YUlkKSkgOiBmcm9tUGFyZW50O1xuICAgIH07XG4gICAgTGF5ZXIucHJvdG90eXBlLmdldFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgIHdoaWxlIChwLnBhcmVudClcbiAgICAgICAgICAgIHAgPSBwLnBhcmVudDtcbiAgICAgICAgcmV0dXJuIHAuZ2V0U3RvcmFnZS5hcHBseShwLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmV0dXJuIExheWVyO1xufShleHBvcnRzLkVudGl0eVN0b3JlKSk7XG52YXIgU3R1bXAgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhTdHVtcCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdHVtcChyb290KSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBcIkVudGl0eVN0b3JlLlN0dW1wXCIsIHJvb3QsIGZ1bmN0aW9uICgpIHsgfSwgbmV3IENhY2hlR3JvdXAocm9vdC5ncm91cC5jYWNoaW5nLCByb290Lmdyb3VwKSkgfHwgdGhpcztcbiAgICB9XG4gICAgU3R1bXAucHJvdG90eXBlLnJlbW92ZUxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFN0dW1wLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Lm1lcmdlLmFwcGx5KHRoaXMucGFyZW50LCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmV0dXJuIFN0dW1wO1xufShMYXllcikpO1xuZnVuY3Rpb24gc3RvcmVPYmplY3RSZWNvbmNpbGVyKGV4aXN0aW5nT2JqZWN0LCBpbmNvbWluZ09iamVjdCwgcHJvcGVydHkpIHtcbiAgICB2YXIgZXhpc3RpbmdWYWx1ZSA9IGV4aXN0aW5nT2JqZWN0W3Byb3BlcnR5XTtcbiAgICB2YXIgaW5jb21pbmdWYWx1ZSA9IGluY29taW5nT2JqZWN0W3Byb3BlcnR5XTtcbiAgICByZXR1cm4gZXF1YWxpdHkuZXF1YWwoZXhpc3RpbmdWYWx1ZSwgaW5jb21pbmdWYWx1ZSkgPyBleGlzdGluZ1ZhbHVlIDogaW5jb21pbmdWYWx1ZTtcbn1cbmZ1bmN0aW9uIHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhzdG9yZSkge1xuICAgIHJldHVybiAhIShzdG9yZSBpbnN0YW5jZW9mIGV4cG9ydHMuRW50aXR5U3RvcmUgJiYgc3RvcmUuZ3JvdXAuY2FjaGluZyk7XG59XG5cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5KHZhbHVlKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBpc0FycmF5KHZhbHVlKVxuICAgICAgICAgICAgPyB2YWx1ZS5zbGljZSgwKVxuICAgICAgICAgICAgOiB0c2xpYi5fX2Fzc2lnbih7IF9fcHJvdG9fXzogT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKSB9LCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbnZhciBPYmplY3RDYW5vbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JqZWN0Q2Fub24oKSB7XG4gICAgICAgIHRoaXMua25vd24gPSBuZXcgKHV0aWxpdGllcy5jYW5Vc2VXZWFrU2V0ID8gV2Vha1NldCA6IFNldCkoKTtcbiAgICAgICAgdGhpcy5wb29sID0gbmV3IHRyaWUuVHJpZSh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCk7XG4gICAgICAgIHRoaXMucGFzc2VzID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5rZXlzQnlKU09OID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVtcHR5ID0gdGhpcy5hZG1pdCh7fSk7XG4gICAgfVxuICAgIE9iamVjdENhbm9uLnByb3RvdHlwZS5pc0tub3duID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSAmJiB0aGlzLmtub3duLmhhcyh2YWx1ZSk7XG4gICAgfTtcbiAgICBPYmplY3RDYW5vbi5wcm90b3R5cGUucGFzcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gc2hhbGxvd0NvcHkodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wYXNzZXMuc2V0KGNvcHksIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIE9iamVjdENhbm9uLnByb3RvdHlwZS5hZG1pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbCA9IHRoaXMucGFzc2VzLmdldCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsO1xuICAgICAgICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgICAgICAgICAgIHN3aXRjaCAocHJvdG8pIHtcbiAgICAgICAgICAgICAgICBjYXNlIEFycmF5LnByb3RvdHlwZToge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5rbm93bi5oYXModmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyYXkgPSB2YWx1ZS5tYXAodGhpcy5hZG1pdCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5wb29sLmxvb2t1cEFycmF5KGFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLmFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtub3duLmFkZChub2RlLmFycmF5ID0gYXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5hcnJheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgICAgICAgIGNhc2UgT2JqZWN0LnByb3RvdHlwZToge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5rbm93bi5oYXModmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdG9fMSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJheV8xID0gW3Byb3RvXzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IHRoaXMuc29ydGVkS2V5cyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5XzEucHVzaChrZXlzLmpzb24pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3RWYWx1ZUluZGV4XzEgPSBhcnJheV8xLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5zb3J0ZWQuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheV8xLnB1c2goX3RoaXMuYWRtaXQodmFsdWVba2V5XSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBvb2wubG9va3VwQXJyYXkoYXJyYXlfMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZS5vYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmpfMSA9IG5vZGUub2JqZWN0ID0gT2JqZWN0LmNyZWF0ZShwcm90b18xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua25vd24uYWRkKG9ial8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuc29ydGVkLmZvckVhY2goZnVuY3Rpb24gKGtleSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ial8xW2tleV0gPSBhcnJheV8xW2ZpcnN0VmFsdWVJbmRleF8xICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShvYmpfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUub2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBPYmplY3RDYW5vbi5wcm90b3R5cGUuc29ydGVkS2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMucG9vbC5sb29rdXBBcnJheShrZXlzKTtcbiAgICAgICAgaWYgKCFub2RlLmtleXMpIHtcbiAgICAgICAgICAgIGtleXMuc29ydCgpO1xuICAgICAgICAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShrZXlzKTtcbiAgICAgICAgICAgIGlmICghKG5vZGUua2V5cyA9IHRoaXMua2V5c0J5SlNPTi5nZXQoanNvbikpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlzQnlKU09OLnNldChqc29uLCBub2RlLmtleXMgPSB7IHNvcnRlZDoga2V5cywganNvbjoganNvbiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZS5rZXlzO1xuICAgIH07XG4gICAgcmV0dXJuIE9iamVjdENhbm9uO1xufSgpKTtcbnZhciBjYW5vbmljYWxTdHJpbmdpZnkgPSBPYmplY3QuYXNzaWduKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICBpZiAoc3RyaW5naWZ5Q2Fub24gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmVzZXRDYW5vbmljYWxTdHJpbmdpZnkoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2Fub25pY2FsID0gc3RyaW5naWZ5Q2Fub24uYWRtaXQodmFsdWUpO1xuICAgICAgICB2YXIganNvbiA9IHN0cmluZ2lmeUNhY2hlLmdldChjYW5vbmljYWwpO1xuICAgICAgICBpZiAoanNvbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBzdHJpbmdpZnlDYWNoZS5zZXQoY2Fub25pY2FsLCBqc29uID0gSlNPTi5zdHJpbmdpZnkoY2Fub25pY2FsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG59LCB7XG4gICAgcmVzZXQ6IHJlc2V0Q2Fub25pY2FsU3RyaW5naWZ5LFxufSk7XG52YXIgc3RyaW5naWZ5Q2Fub247XG52YXIgc3RyaW5naWZ5Q2FjaGU7XG5mdW5jdGlvbiByZXNldENhbm9uaWNhbFN0cmluZ2lmeSgpIHtcbiAgICBzdHJpbmdpZnlDYW5vbiA9IG5ldyBPYmplY3RDYW5vbjtcbiAgICBzdHJpbmdpZnlDYWNoZSA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtNYXAgPyBXZWFrTWFwIDogTWFwKSgpO1xufVxuXG5mdW5jdGlvbiBleGVjU2VsZWN0aW9uU2V0S2V5QXJncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25TZXQsXG4gICAgICAgIG9wdGlvbnMub2JqZWN0T3JSZWZlcmVuY2UsXG4gICAgICAgIG9wdGlvbnMuY29udGV4dCxcbiAgICAgICAgb3B0aW9ucy5jb250ZXh0LmNhbm9uaXplUmVzdWx0cyxcbiAgICBdO1xufVxudmFyIFN0b3JlUmVhZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdG9yZVJlYWRlcihjb25maWcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5rbm93blJlc3VsdHMgPSBuZXcgKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwID8gV2Vha01hcCA6IE1hcCkoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB1dGlsaXRpZXMuY29tcGFjdChjb25maWcsIHtcbiAgICAgICAgICAgIGFkZFR5cGVuYW1lOiBjb25maWcuYWRkVHlwZW5hbWUgIT09IGZhbHNlLFxuICAgICAgICAgICAgY2Fub25pemVSZXN1bHRzOiBzaG91bGRDYW5vbml6ZVJlc3VsdHMoY29uZmlnKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2Fub24gPSBjb25maWcuY2Fub24gfHwgbmV3IE9iamVjdENhbm9uO1xuICAgICAgICB0aGlzLmV4ZWN1dGVTZWxlY3Rpb25TZXQgPSBvcHRpbWlzbS53cmFwKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgY2Fub25pemVSZXN1bHRzID0gb3B0aW9ucy5jb250ZXh0LmNhbm9uaXplUmVzdWx0cztcbiAgICAgICAgICAgIHZhciBwZWVrQXJncyA9IGV4ZWNTZWxlY3Rpb25TZXRLZXlBcmdzKG9wdGlvbnMpO1xuICAgICAgICAgICAgcGVla0FyZ3NbM10gPSAhY2Fub25pemVSZXN1bHRzO1xuICAgICAgICAgICAgdmFyIG90aGVyID0gKF9hID0gX3RoaXMuZXhlY3V0ZVNlbGVjdGlvblNldCkucGVlay5hcHBseShfYSwgcGVla0FyZ3MpO1xuICAgICAgICAgICAgaWYgKG90aGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbm9uaXplUmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG90aGVyKSwgeyByZXN1bHQ6IF90aGlzLmNhbm9uLmFkbWl0KG90aGVyLnJlc3VsdCkgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdGhlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1heWJlRGVwZW5kT25FeGlzdGVuY2VPZkVudGl0eShvcHRpb25zLmNvbnRleHQuc3RvcmUsIG9wdGlvbnMuZW5jbG9zaW5nUmVmLl9fcmVmKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5leGVjU2VsZWN0aW9uU2V0SW1wbChvcHRpb25zKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbWF4OiB0aGlzLmNvbmZpZy5yZXN1bHRDYWNoZU1heFNpemUsXG4gICAgICAgICAgICBrZXlBcmdzOiBleGVjU2VsZWN0aW9uU2V0S2V5QXJncyxcbiAgICAgICAgICAgIG1ha2VDYWNoZUtleTogZnVuY3Rpb24gKHNlbGVjdGlvblNldCwgcGFyZW50LCBjb250ZXh0LCBjYW5vbml6ZVJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3VwcG9ydHNSZXN1bHRDYWNoaW5nKGNvbnRleHQuc3RvcmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnN0b3JlLm1ha2VDYWNoZUtleShzZWxlY3Rpb25TZXQsIHV0aWxpdGllcy5pc1JlZmVyZW5jZShwYXJlbnQpID8gcGFyZW50Ll9fcmVmIDogcGFyZW50LCBjb250ZXh0LnZhclN0cmluZywgY2Fub25pemVSZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmV4ZWN1dGVTdWJTZWxlY3RlZEFycmF5ID0gb3B0aW1pc20ud3JhcChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgbWF5YmVEZXBlbmRPbkV4aXN0ZW5jZU9mRW50aXR5KG9wdGlvbnMuY29udGV4dC5zdG9yZSwgb3B0aW9ucy5lbmNsb3NpbmdSZWYuX19yZWYpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmV4ZWNTdWJTZWxlY3RlZEFycmF5SW1wbChvcHRpb25zKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbWF4OiB0aGlzLmNvbmZpZy5yZXN1bHRDYWNoZU1heFNpemUsXG4gICAgICAgICAgICBtYWtlQ2FjaGVLZXk6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IF9hLmZpZWxkLCBhcnJheSA9IF9hLmFycmF5LCBjb250ZXh0ID0gX2EuY29udGV4dDtcbiAgICAgICAgICAgICAgICBpZiAoc3VwcG9ydHNSZXN1bHRDYWNoaW5nKGNvbnRleHQuc3RvcmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnN0b3JlLm1ha2VDYWNoZUtleShmaWVsZCwgYXJyYXksIGNvbnRleHQudmFyU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBTdG9yZVJlYWRlci5wcm90b3R5cGUucmVzZXRDYW5vbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jYW5vbiA9IG5ldyBPYmplY3RDYW5vbjtcbiAgICB9O1xuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5kaWZmUXVlcnlBZ2FpbnN0U3RvcmUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHN0b3JlID0gX2Euc3RvcmUsIHF1ZXJ5ID0gX2EucXVlcnksIF9iID0gX2Eucm9vdElkLCByb290SWQgPSBfYiA9PT0gdm9pZCAwID8gJ1JPT1RfUVVFUlknIDogX2IsIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgX2MgPSBfYS5yZXR1cm5QYXJ0aWFsRGF0YSwgcmV0dXJuUGFydGlhbERhdGEgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IF9hLmNhbm9uaXplUmVzdWx0cywgY2Fub25pemVSZXN1bHRzID0gX2QgPT09IHZvaWQgMCA/IHRoaXMuY29uZmlnLmNhbm9uaXplUmVzdWx0cyA6IF9kO1xuICAgICAgICB2YXIgcG9saWNpZXMgPSB0aGlzLmNvbmZpZy5jYWNoZS5wb2xpY2llcztcbiAgICAgICAgdmFyaWFibGVzID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHV0aWxpdGllcy5nZXREZWZhdWx0VmFsdWVzKHV0aWxpdGllcy5nZXRRdWVyeURlZmluaXRpb24ocXVlcnkpKSksIHZhcmlhYmxlcyk7XG4gICAgICAgIHZhciByb290UmVmID0gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2Uocm9vdElkKTtcbiAgICAgICAgdmFyIGV4ZWNSZXN1bHQgPSB0aGlzLmV4ZWN1dGVTZWxlY3Rpb25TZXQoe1xuICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB1dGlsaXRpZXMuZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpLnNlbGVjdGlvblNldCxcbiAgICAgICAgICAgIG9iamVjdE9yUmVmZXJlbmNlOiByb290UmVmLFxuICAgICAgICAgICAgZW5jbG9zaW5nUmVmOiByb290UmVmLFxuICAgICAgICAgICAgY29udGV4dDogdHNsaWIuX19hc3NpZ24oeyBzdG9yZTogc3RvcmUsIHF1ZXJ5OiBxdWVyeSwgcG9saWNpZXM6IHBvbGljaWVzLCB2YXJpYWJsZXM6IHZhcmlhYmxlcywgdmFyU3RyaW5nOiBjYW5vbmljYWxTdHJpbmdpZnkodmFyaWFibGVzKSwgY2Fub25pemVSZXN1bHRzOiBjYW5vbml6ZVJlc3VsdHMgfSwgZXh0cmFjdEZyYWdtZW50Q29udGV4dChxdWVyeSwgdGhpcy5jb25maWcuZnJhZ21lbnRzKSksXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbWlzc2luZztcbiAgICAgICAgaWYgKGV4ZWNSZXN1bHQubWlzc2luZykge1xuICAgICAgICAgICAgbWlzc2luZyA9IFtuZXcgTWlzc2luZ0ZpZWxkRXJyb3IoZmlyc3RNaXNzaW5nKGV4ZWNSZXN1bHQubWlzc2luZyksIGV4ZWNSZXN1bHQubWlzc2luZywgcXVlcnksIHZhcmlhYmxlcyldO1xuICAgICAgICAgICAgaWYgKCFyZXR1cm5QYXJ0aWFsRGF0YSkge1xuICAgICAgICAgICAgICAgIHRocm93IG1pc3NpbmdbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3VsdDogZXhlY1Jlc3VsdC5yZXN1bHQsXG4gICAgICAgICAgICBjb21wbGV0ZTogIW1pc3NpbmcsXG4gICAgICAgICAgICBtaXNzaW5nOiBtaXNzaW5nLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgU3RvcmVSZWFkZXIucHJvdG90eXBlLmlzRnJlc2ggPSBmdW5jdGlvbiAocmVzdWx0LCBwYXJlbnQsIHNlbGVjdGlvblNldCwgY29udGV4dCkge1xuICAgICAgICBpZiAoc3VwcG9ydHNSZXN1bHRDYWNoaW5nKGNvbnRleHQuc3RvcmUpICYmXG4gICAgICAgICAgICB0aGlzLmtub3duUmVzdWx0cy5nZXQocmVzdWx0KSA9PT0gc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICB2YXIgbGF0ZXN0ID0gdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0LnBlZWsoc2VsZWN0aW9uU2V0LCBwYXJlbnQsIGNvbnRleHQsIHRoaXMuY2Fub24uaXNLbm93bihyZXN1bHQpKTtcbiAgICAgICAgICAgIGlmIChsYXRlc3QgJiYgcmVzdWx0ID09PSBsYXRlc3QucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgU3RvcmVSZWFkZXIucHJvdG90eXBlLmV4ZWNTZWxlY3Rpb25TZXRJbXBsID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzZWxlY3Rpb25TZXQgPSBfYS5zZWxlY3Rpb25TZXQsIG9iamVjdE9yUmVmZXJlbmNlID0gX2Eub2JqZWN0T3JSZWZlcmVuY2UsIGVuY2xvc2luZ1JlZiA9IF9hLmVuY2xvc2luZ1JlZiwgY29udGV4dCA9IF9hLmNvbnRleHQ7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpICYmXG4gICAgICAgICAgICAhY29udGV4dC5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZFtvYmplY3RPclJlZmVyZW5jZS5fX3JlZl0gJiZcbiAgICAgICAgICAgICFjb250ZXh0LnN0b3JlLmhhcyhvYmplY3RPclJlZmVyZW5jZS5fX3JlZikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0OiB0aGlzLmNhbm9uLmVtcHR5LFxuICAgICAgICAgICAgICAgIG1pc3Npbmc6IFwiRGFuZ2xpbmcgcmVmZXJlbmNlIHRvIG1pc3NpbmcgXCIuY29uY2F0KG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmLCBcIiBvYmplY3RcIiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSBjb250ZXh0LnZhcmlhYmxlcywgcG9saWNpZXMgPSBjb250ZXh0LnBvbGljaWVzLCBzdG9yZSA9IGNvbnRleHQuc3RvcmU7XG4gICAgICAgIHZhciB0eXBlbmFtZSA9IHN0b3JlLmdldEZpZWxkVmFsdWUob2JqZWN0T3JSZWZlcmVuY2UsIFwiX190eXBlbmFtZVwiKTtcbiAgICAgICAgdmFyIG9iamVjdHNUb01lcmdlID0gW107XG4gICAgICAgIHZhciBtaXNzaW5nO1xuICAgICAgICB2YXIgbWlzc2luZ01lcmdlciA9IG5ldyB1dGlsaXRpZXMuRGVlcE1lcmdlcigpO1xuICAgICAgICBpZiAodGhpcy5jb25maWcuYWRkVHlwZW5hbWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB0eXBlbmFtZSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgIXBvbGljaWVzLnJvb3RJZHNCeVR5cGVuYW1lW3R5cGVuYW1lXSkge1xuICAgICAgICAgICAgb2JqZWN0c1RvTWVyZ2UucHVzaCh7IF9fdHlwZW5hbWU6IHR5cGVuYW1lIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1pc3NpbmcocmVzdWx0LCByZXN1bHROYW1lKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lm1pc3NpbmcpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nID0gbWlzc2luZ01lcmdlci5tZXJnZShtaXNzaW5nLCAoX2EgPSB7fSwgX2FbcmVzdWx0TmFtZV0gPSByZXN1bHQubWlzc2luZywgX2EpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHZhciB3b3JrU2V0ID0gbmV3IFNldChzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucyk7XG4gICAgICAgIHdvcmtTZXQuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgaWYgKCF1dGlsaXRpZXMuc2hvdWxkSW5jbHVkZShzZWxlY3Rpb24sIHZhcmlhYmxlcykpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc0ZpZWxkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IHBvbGljaWVzLnJlYWRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogc2VsZWN0aW9uLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBzZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogY29udGV4dC52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIGZyb206IG9iamVjdE9yUmVmZXJlbmNlLFxuICAgICAgICAgICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHROYW1lID0gdXRpbGl0aWVzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXRpbGl0aWVzLmFkZFR5cGVuYW1lVG9Eb2N1bWVudC5hZGRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nID0gbWlzc2luZ01lcmdlci5tZXJnZShtaXNzaW5nLCAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYVtyZXN1bHROYW1lXSA9IFwiQ2FuJ3QgZmluZCBmaWVsZCAnXCIuY29uY2F0KHNlbGVjdGlvbi5uYW1lLnZhbHVlLCBcIicgb24gXCIpLmNvbmNhdCh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gb2JqZWN0T3JSZWZlcmVuY2UuX19yZWYgKyBcIiBvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwib2JqZWN0IFwiICsgSlNPTi5zdHJpbmdpZnkob2JqZWN0T3JSZWZlcmVuY2UsIG51bGwsIDIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyYXkoZmllbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZSA9IGhhbmRsZU1pc3NpbmcoX3RoaXMuZXhlY3V0ZVN1YlNlbGVjdGVkQXJyYXkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IHNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5OiBmaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5jbG9zaW5nUmVmOiBlbmNsb3NpbmdSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB9KSwgcmVzdWx0TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFzZWxlY3Rpb24uc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LmNhbm9uaXplUmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZSA9IF90aGlzLmNhbm9uLnBhc3MoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGRWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBoYW5kbGVNaXNzaW5nKF90aGlzLmV4ZWN1dGVTZWxlY3Rpb25TZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiBzZWxlY3Rpb24uc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0T3JSZWZlcmVuY2U6IGZpZWxkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNsb3NpbmdSZWY6IHV0aWxpdGllcy5pc1JlZmVyZW5jZShmaWVsZFZhbHVlKSA/IGZpZWxkVmFsdWUgOiBlbmNsb3NpbmdSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB9KSwgcmVzdWx0TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0c1RvTWVyZ2UucHVzaCgoX2IgPSB7fSwgX2JbcmVzdWx0TmFtZV0gPSBmaWVsZFZhbHVlLCBfYikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IHV0aWxpdGllcy5nZXRGcmFnbWVudEZyb21TZWxlY3Rpb24oc2VsZWN0aW9uLCBjb250ZXh0Lmxvb2t1cEZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoIWZyYWdtZW50ICYmIHNlbGVjdGlvbi5raW5kID09PSBncmFwaHFsLktpbmQuRlJBR01FTlRfU1BSRUFEKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIk5vIGZyYWdtZW50IG5hbWVkIFwiLmNvbmNhdChzZWxlY3Rpb24ubmFtZS52YWx1ZSkpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcmFnbWVudCAmJiBwb2xpY2llcy5mcmFnbWVudE1hdGNoZXMoZnJhZ21lbnQsIHR5cGVuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudC5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKHdvcmtTZXQuYWRkLCB3b3JrU2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdXRpbGl0aWVzLm1lcmdlRGVlcEFycmF5KG9iamVjdHNUb01lcmdlKTtcbiAgICAgICAgdmFyIGZpbmFsUmVzdWx0ID0geyByZXN1bHQ6IHJlc3VsdCwgbWlzc2luZzogbWlzc2luZyB9O1xuICAgICAgICB2YXIgZnJvemVuID0gY29udGV4dC5jYW5vbml6ZVJlc3VsdHNcbiAgICAgICAgICAgID8gdGhpcy5jYW5vbi5hZG1pdChmaW5hbFJlc3VsdClcbiAgICAgICAgICAgIDogdXRpbGl0aWVzLm1heWJlRGVlcEZyZWV6ZShmaW5hbFJlc3VsdCk7XG4gICAgICAgIGlmIChmcm96ZW4ucmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmtub3duUmVzdWx0cy5zZXQoZnJvemVuLnJlc3VsdCwgc2VsZWN0aW9uU2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJvemVuO1xuICAgIH07XG4gICAgU3RvcmVSZWFkZXIucHJvdG90eXBlLmV4ZWNTdWJTZWxlY3RlZEFycmF5SW1wbCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZmllbGQgPSBfYS5maWVsZCwgYXJyYXkgPSBfYS5hcnJheSwgZW5jbG9zaW5nUmVmID0gX2EuZW5jbG9zaW5nUmVmLCBjb250ZXh0ID0gX2EuY29udGV4dDtcbiAgICAgICAgdmFyIG1pc3Npbmc7XG4gICAgICAgIHZhciBtaXNzaW5nTWVyZ2VyID0gbmV3IHV0aWxpdGllcy5EZWVwTWVyZ2VyKCk7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1pc3NpbmcoY2hpbGRSZXN1bHQsIGkpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChjaGlsZFJlc3VsdC5taXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZyA9IG1pc3NpbmdNZXJnZXIubWVyZ2UobWlzc2luZywgKF9hID0ge30sIF9hW2ldID0gY2hpbGRSZXN1bHQubWlzc2luZywgX2EpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGlsZFJlc3VsdC5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgYXJyYXkgPSBhcnJheS5maWx0ZXIoY29udGV4dC5zdG9yZS5jYW5SZWFkKTtcbiAgICAgICAgfVxuICAgICAgICBhcnJheSA9IGFycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU1pc3NpbmcoX3RoaXMuZXhlY3V0ZVN1YlNlbGVjdGVkQXJyYXkoe1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgIGFycmF5OiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICBlbmNsb3NpbmdSZWY6IGVuY2xvc2luZ1JlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICB9KSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU1pc3NpbmcoX3RoaXMuZXhlY3V0ZVNlbGVjdGlvblNldCh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDogZmllbGQuc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgICAgICAgICBvYmplY3RPclJlZmVyZW5jZTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgZW5jbG9zaW5nUmVmOiB1dGlsaXRpZXMuaXNSZWZlcmVuY2UoaXRlbSkgPyBpdGVtIDogZW5jbG9zaW5nUmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIH0pLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0U2VsZWN0aW9uU2V0Rm9ySWRWYWx1ZShjb250ZXh0LnN0b3JlLCBmaWVsZCwgaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN1bHQ6IGNvbnRleHQuY2Fub25pemVSZXN1bHRzID8gdGhpcy5jYW5vbi5hZG1pdChhcnJheSkgOiBhcnJheSxcbiAgICAgICAgICAgIG1pc3Npbmc6IG1pc3NpbmcsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gU3RvcmVSZWFkZXI7XG59KCkpO1xuZnVuY3Rpb24gZmlyc3RNaXNzaW5nKHRyZWUpIHtcbiAgICB0cnkge1xuICAgICAgICBKU09OLnN0cmluZ2lmeSh0cmVlLCBmdW5jdGlvbiAoXywgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgdGhyb3cgdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuZnVuY3Rpb24gYXNzZXJ0U2VsZWN0aW9uU2V0Rm9ySWRWYWx1ZShzdG9yZSwgZmllbGQsIGZpZWxkVmFsdWUpIHtcbiAgICBpZiAoIWZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICB2YXIgd29ya1NldF8xID0gbmV3IFNldChbZmllbGRWYWx1ZV0pO1xuICAgICAgICB3b3JrU2V0XzEuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghdXRpbGl0aWVzLmlzUmVmZXJlbmNlKHZhbHVlKSwgXCJNaXNzaW5nIHNlbGVjdGlvbiBzZXQgZm9yIG9iamVjdCBvZiB0eXBlIFwiLmNvbmNhdChnZXRUeXBlbmFtZUZyb21TdG9yZU9iamVjdChzdG9yZSwgdmFsdWUpLCBcIiByZXR1cm5lZCBmb3IgcXVlcnkgZmllbGQgXCIpLmNvbmNhdChmaWVsZC5uYW1lLnZhbHVlKSkgOiBnbG9iYWxzLmludmFyaWFudCghdXRpbGl0aWVzLmlzUmVmZXJlbmNlKHZhbHVlKSwgNik7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh2YWx1ZSkuZm9yRWFjaCh3b3JrU2V0XzEuYWRkLCB3b3JrU2V0XzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbnZhciBjYWNoZVNsb3QgPSBuZXcgY29udGV4dC5TbG90KCk7XG52YXIgY2FjaGVJbmZvTWFwID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIGdldENhY2hlSW5mbyhjYWNoZSkge1xuICAgIHZhciBpbmZvID0gY2FjaGVJbmZvTWFwLmdldChjYWNoZSk7XG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICAgIGNhY2hlSW5mb01hcC5zZXQoY2FjaGUsIGluZm8gPSB7XG4gICAgICAgICAgICB2YXJzOiBuZXcgU2V0LFxuICAgICAgICAgICAgZGVwOiBvcHRpbWlzbS5kZXAoKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBpbmZvO1xufVxuZnVuY3Rpb24gZm9yZ2V0Q2FjaGUoY2FjaGUpIHtcbiAgICBnZXRDYWNoZUluZm8oY2FjaGUpLnZhcnMuZm9yRWFjaChmdW5jdGlvbiAocnYpIHsgcmV0dXJuIHJ2LmZvcmdldENhY2hlKGNhY2hlKTsgfSk7XG59XG5mdW5jdGlvbiByZWNhbGxDYWNoZShjYWNoZSkge1xuICAgIGdldENhY2hlSW5mbyhjYWNoZSkudmFycy5mb3JFYWNoKGZ1bmN0aW9uIChydikgeyByZXR1cm4gcnYuYXR0YWNoQ2FjaGUoY2FjaGUpOyB9KTtcbn1cbmZ1bmN0aW9uIG1ha2VWYXIodmFsdWUpIHtcbiAgICB2YXIgY2FjaGVzID0gbmV3IFNldCgpO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHJ2ID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgY2FjaGVzLmZvckVhY2goZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldENhY2hlSW5mbyhjYWNoZSkuZGVwLmRpcnR5KHJ2KTtcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0KGNhY2hlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgb2xkTGlzdGVuZXJzID0gQXJyYXkuZnJvbShsaXN0ZW5lcnMpO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIodmFsdWUpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjYWNoZSA9IGNhY2hlU2xvdC5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgaWYgKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoKGNhY2hlKTtcbiAgICAgICAgICAgICAgICBnZXRDYWNoZUluZm8oY2FjaGUpLmRlcChydik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgcnYub25OZXh0Q2hhbmdlID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgYXR0YWNoID0gcnYuYXR0YWNoQ2FjaGUgPSBmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgY2FjaGVzLmFkZChjYWNoZSk7XG4gICAgICAgIGdldENhY2hlSW5mbyhjYWNoZSkudmFycy5hZGQocnYpO1xuICAgICAgICByZXR1cm4gcnY7XG4gICAgfTtcbiAgICBydi5mb3JnZXRDYWNoZSA9IGZ1bmN0aW9uIChjYWNoZSkgeyByZXR1cm4gY2FjaGVzLmRlbGV0ZShjYWNoZSk7IH07XG4gICAgcmV0dXJuIHJ2O1xufVxuZnVuY3Rpb24gYnJvYWRjYXN0KGNhY2hlKSB7XG4gICAgaWYgKGNhY2hlLmJyb2FkY2FzdFdhdGNoZXMpIHtcbiAgICAgICAgY2FjaGUuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgIH1cbn1cblxudmFyIHNwZWNpZmllckluZm9DYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5mdW5jdGlvbiBsb29rdXBTcGVjaWZpZXJJbmZvKHNwZWMpIHtcbiAgICB2YXIgY2FjaGVLZXkgPSBKU09OLnN0cmluZ2lmeShzcGVjKTtcbiAgICByZXR1cm4gc3BlY2lmaWVySW5mb0NhY2hlW2NhY2hlS2V5XSB8fFxuICAgICAgICAoc3BlY2lmaWVySW5mb0NhY2hlW2NhY2hlS2V5XSA9IE9iamVjdC5jcmVhdGUobnVsbCkpO1xufVxuZnVuY3Rpb24ga2V5RmllbGRzRm5Gcm9tU3BlY2lmaWVyKHNwZWNpZmllcikge1xuICAgIHZhciBpbmZvID0gbG9va3VwU3BlY2lmaWVySW5mbyhzcGVjaWZpZXIpO1xuICAgIHJldHVybiBpbmZvLmtleUZpZWxkc0ZuIHx8IChpbmZvLmtleUZpZWxkc0ZuID0gZnVuY3Rpb24gKG9iamVjdCwgY29udGV4dCkge1xuICAgICAgICB2YXIgZXh0cmFjdCA9IGZ1bmN0aW9uIChmcm9tLCBrZXkpIHsgcmV0dXJuIGNvbnRleHQucmVhZEZpZWxkKGtleSwgZnJvbSk7IH07XG4gICAgICAgIHZhciBrZXlPYmplY3QgPSBjb250ZXh0LmtleU9iamVjdCA9IGNvbGxlY3RTcGVjaWZpZXJQYXRocyhzcGVjaWZpZXIsIGZ1bmN0aW9uIChzY2hlbWFLZXlQYXRoKSB7XG4gICAgICAgICAgICB2YXIgZXh0cmFjdGVkID0gZXh0cmFjdEtleVBhdGgoY29udGV4dC5zdG9yZU9iamVjdCwgc2NoZW1hS2V5UGF0aCwgZXh0cmFjdCk7XG4gICAgICAgICAgICBpZiAoZXh0cmFjdGVkID09PSB2b2lkIDAgJiZcbiAgICAgICAgICAgICAgICBvYmplY3QgIT09IGNvbnRleHQuc3RvcmVPYmplY3QgJiZcbiAgICAgICAgICAgICAgICBoYXNPd24uY2FsbChvYmplY3QsIHNjaGVtYUtleVBhdGhbMF0pKSB7XG4gICAgICAgICAgICAgICAgZXh0cmFjdGVkID0gZXh0cmFjdEtleVBhdGgob2JqZWN0LCBzY2hlbWFLZXlQYXRoLCBleHRyYWN0S2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChleHRyYWN0ZWQgIT09IHZvaWQgMCwgXCJNaXNzaW5nIGZpZWxkICdcIi5jb25jYXQoc2NoZW1hS2V5UGF0aC5qb2luKCcuJyksIFwiJyB3aGlsZSBleHRyYWN0aW5nIGtleUZpZWxkcyBmcm9tIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSkpIDogZ2xvYmFscy5pbnZhcmlhbnQoZXh0cmFjdGVkICE9PSB2b2lkIDAsIDIpO1xuICAgICAgICAgICAgcmV0dXJuIGV4dHJhY3RlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChjb250ZXh0LnR5cGVuYW1lLCBcIjpcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGtleU9iamVjdCkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24ga2V5QXJnc0ZuRnJvbVNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgICB2YXIgaW5mbyA9IGxvb2t1cFNwZWNpZmllckluZm8oc3BlY2lmaWVyKTtcbiAgICByZXR1cm4gaW5mby5rZXlBcmdzRm4gfHwgKGluZm8ua2V5QXJnc0ZuID0gZnVuY3Rpb24gKGFyZ3MsIF9hKSB7XG4gICAgICAgIHZhciBmaWVsZCA9IF9hLmZpZWxkLCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIGZpZWxkTmFtZSA9IF9hLmZpZWxkTmFtZTtcbiAgICAgICAgdmFyIGNvbGxlY3RlZCA9IGNvbGxlY3RTcGVjaWZpZXJQYXRocyhzcGVjaWZpZXIsIGZ1bmN0aW9uIChrZXlQYXRoKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RLZXkgPSBrZXlQYXRoWzBdO1xuICAgICAgICAgICAgdmFyIGZpcnN0Q2hhciA9IGZpcnN0S2V5LmNoYXJBdCgwKTtcbiAgICAgICAgICAgIGlmIChmaXJzdENoYXIgPT09IFwiQFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkICYmIHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkoZmllbGQuZGlyZWN0aXZlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZU5hbWVfMSA9IGZpcnN0S2V5LnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGZpZWxkLmRpcmVjdGl2ZXMuZmluZChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lLnZhbHVlID09PSBkaXJlY3RpdmVOYW1lXzE7IH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aXZlQXJncyA9IGQgJiYgdXRpbGl0aWVzLmFyZ3VtZW50c09iamVjdEZyb21GaWVsZChkLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlQXJncyAmJiBleHRyYWN0S2V5UGF0aChkaXJlY3RpdmVBcmdzLCBrZXlQYXRoLnNsaWNlKDEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0Q2hhciA9PT0gXCIkXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFyaWFibGVOYW1lID0gZmlyc3RLZXkuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlcyAmJiBoYXNPd24uY2FsbCh2YXJpYWJsZXMsIHZhcmlhYmxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhcktleVBhdGggPSBrZXlQYXRoLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgICAgICB2YXJLZXlQYXRoWzBdID0gdmFyaWFibGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXh0cmFjdEtleVBhdGgodmFyaWFibGVzLCB2YXJLZXlQYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXh0cmFjdEtleVBhdGgoYXJncywga2V5UGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc3VmZml4ID0gSlNPTi5zdHJpbmdpZnkoY29sbGVjdGVkKTtcbiAgICAgICAgaWYgKGFyZ3MgfHwgc3VmZml4ICE9PSBcInt9XCIpIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZSArPSBcIjpcIiArIHN1ZmZpeDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGROYW1lO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY29sbGVjdFNwZWNpZmllclBhdGhzKHNwZWNpZmllciwgZXh0cmFjdG9yKSB7XG4gICAgdmFyIG1lcmdlciA9IG5ldyB1dGlsaXRpZXMuRGVlcE1lcmdlcjtcbiAgICByZXR1cm4gZ2V0U3BlY2lmaWVyUGF0aHMoc3BlY2lmaWVyKS5yZWR1Y2UoZnVuY3Rpb24gKGNvbGxlY3RlZCwgcGF0aCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciB0b01lcmdlID0gZXh0cmFjdG9yKHBhdGgpO1xuICAgICAgICBpZiAodG9NZXJnZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIHRvTWVyZ2UgPSAoX2EgPSB7fSwgX2FbcGF0aFtpXV0gPSB0b01lcmdlLCBfYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2xsZWN0ZWQgPSBtZXJnZXIubWVyZ2UoY29sbGVjdGVkLCB0b01lcmdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGVjdGVkO1xuICAgIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xufVxuZnVuY3Rpb24gZ2V0U3BlY2lmaWVyUGF0aHMoc3BlYykge1xuICAgIHZhciBpbmZvID0gbG9va3VwU3BlY2lmaWVySW5mbyhzcGVjKTtcbiAgICBpZiAoIWluZm8ucGF0aHMpIHtcbiAgICAgICAgdmFyIHBhdGhzXzEgPSBpbmZvLnBhdGhzID0gW107XG4gICAgICAgIHZhciBjdXJyZW50UGF0aF8xID0gW107XG4gICAgICAgIHNwZWMuZm9yRWFjaChmdW5jdGlvbiAocywgaSkge1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkocykpIHtcbiAgICAgICAgICAgICAgICBnZXRTcGVjaWZpZXJQYXRocyhzKS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwYXRoc18xLnB1c2goY3VycmVudFBhdGhfMS5jb25jYXQocCkpOyB9KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGF0aF8xLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGF0aF8xLnB1c2gocyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0FycmF5KHNwZWNbaSArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRoc18xLnB1c2goY3VycmVudFBhdGhfMS5zbGljZSgwKSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoXzEubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaW5mby5wYXRocztcbn1cbmZ1bmN0aW9uIGV4dHJhY3RLZXkob2JqZWN0LCBrZXkpIHtcbiAgICByZXR1cm4gb2JqZWN0W2tleV07XG59XG5mdW5jdGlvbiBleHRyYWN0S2V5UGF0aChvYmplY3QsIHBhdGgsIGV4dHJhY3QpIHtcbiAgICBleHRyYWN0ID0gZXh0cmFjdCB8fCBleHRyYWN0S2V5O1xuICAgIHJldHVybiBub3JtYWxpemUocGF0aC5yZWR1Y2UoZnVuY3Rpb24gcmVkdWNlcihvYmosIGtleSkge1xuICAgICAgICByZXR1cm4gaXNBcnJheShvYmopXG4gICAgICAgICAgICA/IG9iai5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiByZWR1Y2VyKGNoaWxkLCBrZXkpOyB9KVxuICAgICAgICAgICAgOiBvYmogJiYgZXh0cmFjdChvYmosIGtleSk7XG4gICAgfSwgb2JqZWN0KSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWUpIHtcbiAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubWFwKG5vcm1hbGl6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxlY3RTcGVjaWZpZXJQYXRocyhPYmplY3Qua2V5cyh2YWx1ZSkuc29ydCgpLCBmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gZXh0cmFjdEtleVBhdGgodmFsdWUsIHBhdGgpOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG51dGlsaXRpZXMuZ2V0U3RvcmVLZXlOYW1lLnNldFN0cmluZ2lmeShjYW5vbmljYWxTdHJpbmdpZnkpO1xuZnVuY3Rpb24gYXJnc0Zyb21GaWVsZFNwZWNpZmllcihzcGVjKSB7XG4gICAgcmV0dXJuIHNwZWMuYXJncyAhPT0gdm9pZCAwID8gc3BlYy5hcmdzIDpcbiAgICAgICAgc3BlYy5maWVsZCA/IHV0aWxpdGllcy5hcmd1bWVudHNPYmplY3RGcm9tRmllbGQoc3BlYy5maWVsZCwgc3BlYy52YXJpYWJsZXMpIDogbnVsbDtcbn1cbnZhciBudWxsS2V5RmllbGRzRm4gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB2b2lkIDA7IH07XG52YXIgc2ltcGxlS2V5QXJnc0ZuID0gZnVuY3Rpb24gKF9hcmdzLCBjb250ZXh0KSB7IHJldHVybiBjb250ZXh0LmZpZWxkTmFtZTsgfTtcbnZhciBtZXJnZVRydWVGbiA9IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcsIF9hKSB7XG4gICAgdmFyIG1lcmdlT2JqZWN0cyA9IF9hLm1lcmdlT2JqZWN0cztcbiAgICByZXR1cm4gbWVyZ2VPYmplY3RzKGV4aXN0aW5nLCBpbmNvbWluZyk7XG59O1xudmFyIG1lcmdlRmFsc2VGbiA9IGZ1bmN0aW9uIChfLCBpbmNvbWluZykgeyByZXR1cm4gaW5jb21pbmc7IH07XG52YXIgUG9saWNpZXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvbGljaWVzKGNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy50eXBlUG9saWNpZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnRvQmVBZGRlZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuc3VwZXJ0eXBlTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmZ1enp5U3VidHlwZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucm9vdElkc0J5VHlwZW5hbWUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnJvb3RUeXBlbmFtZXNCeUlkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy51c2luZ1Bvc3NpYmxlVHlwZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0c2xpYi5fX2Fzc2lnbih7IGRhdGFJZEZyb21PYmplY3Q6IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0IH0sIGNvbmZpZyk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLmNvbmZpZy5jYWNoZTtcbiAgICAgICAgdGhpcy5zZXRSb290VHlwZW5hbWUoXCJRdWVyeVwiKTtcbiAgICAgICAgdGhpcy5zZXRSb290VHlwZW5hbWUoXCJNdXRhdGlvblwiKTtcbiAgICAgICAgdGhpcy5zZXRSb290VHlwZW5hbWUoXCJTdWJzY3JpcHRpb25cIik7XG4gICAgICAgIGlmIChjb25maWcucG9zc2libGVUeXBlcykge1xuICAgICAgICAgICAgdGhpcy5hZGRQb3NzaWJsZVR5cGVzKGNvbmZpZy5wb3NzaWJsZVR5cGVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLnR5cGVQb2xpY2llcykge1xuICAgICAgICAgICAgdGhpcy5hZGRUeXBlUG9saWNpZXMoY29uZmlnLnR5cGVQb2xpY2llcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24gKG9iamVjdCwgcGFydGlhbENvbnRleHQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgcG9saWNpZXMgPSB0aGlzO1xuICAgICAgICB2YXIgdHlwZW5hbWUgPSBwYXJ0aWFsQ29udGV4dCAmJiAocGFydGlhbENvbnRleHQudHlwZW5hbWUgfHxcbiAgICAgICAgICAgICgoX2EgPSBwYXJ0aWFsQ29udGV4dC5zdG9yZU9iamVjdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLl9fdHlwZW5hbWUpKSB8fCBvYmplY3QuX190eXBlbmFtZTtcbiAgICAgICAgaWYgKHR5cGVuYW1lID09PSB0aGlzLnJvb3RUeXBlbmFtZXNCeUlkLlJPT1RfUVVFUlkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXCJST09UX1FVRVJZXCJdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdG9yZU9iamVjdCA9IHBhcnRpYWxDb250ZXh0ICYmIHBhcnRpYWxDb250ZXh0LnN0b3JlT2JqZWN0IHx8IG9iamVjdDtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgcGFydGlhbENvbnRleHQpLCB7IHR5cGVuYW1lOiB0eXBlbmFtZSwgc3RvcmVPYmplY3Q6IHN0b3JlT2JqZWN0LCByZWFkRmllbGQ6IHBhcnRpYWxDb250ZXh0ICYmIHBhcnRpYWxDb250ZXh0LnJlYWRGaWVsZCB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVSZWFkRmllbGRPcHRpb25zKGFyZ3VtZW50cywgc3RvcmVPYmplY3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwb2xpY2llcy5yZWFkRmllbGQob3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZTogcG9saWNpZXMuY2FjaGVbXCJkYXRhXCJdLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgdmFyIGlkO1xuICAgICAgICB2YXIgcG9saWN5ID0gdHlwZW5hbWUgJiYgdGhpcy5nZXRUeXBlUG9saWN5KHR5cGVuYW1lKTtcbiAgICAgICAgdmFyIGtleUZuID0gcG9saWN5ICYmIHBvbGljeS5rZXlGbiB8fCB0aGlzLmNvbmZpZy5kYXRhSWRGcm9tT2JqZWN0O1xuICAgICAgICB3aGlsZSAoa2V5Rm4pIHtcbiAgICAgICAgICAgIHZhciBzcGVjaWZpZXJPcklkID0ga2V5Rm4ob2JqZWN0LCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KHNwZWNpZmllck9ySWQpKSB7XG4gICAgICAgICAgICAgICAga2V5Rm4gPSBrZXlGaWVsZHNGbkZyb21TcGVjaWZpZXIoc3BlY2lmaWVyT3JJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZCA9IHNwZWNpZmllck9ySWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWQgPSBpZCA/IFN0cmluZyhpZCkgOiB2b2lkIDA7XG4gICAgICAgIHJldHVybiBjb250ZXh0LmtleU9iamVjdCA/IFtpZCwgY29udGV4dC5rZXlPYmplY3RdIDogW2lkXTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5hZGRUeXBlUG9saWNpZXMgPSBmdW5jdGlvbiAodHlwZVBvbGljaWVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIE9iamVjdC5rZXlzKHR5cGVQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbiAodHlwZW5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHR5cGVQb2xpY2llc1t0eXBlbmFtZV0sIHF1ZXJ5VHlwZSA9IF9hLnF1ZXJ5VHlwZSwgbXV0YXRpb25UeXBlID0gX2EubXV0YXRpb25UeXBlLCBzdWJzY3JpcHRpb25UeXBlID0gX2Euc3Vic2NyaXB0aW9uVHlwZSwgaW5jb21pbmcgPSB0c2xpYi5fX3Jlc3QoX2EsIFtcInF1ZXJ5VHlwZVwiLCBcIm11dGF0aW9uVHlwZVwiLCBcInN1YnNjcmlwdGlvblR5cGVcIl0pO1xuICAgICAgICAgICAgaWYgKHF1ZXJ5VHlwZSlcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRSb290VHlwZW5hbWUoXCJRdWVyeVwiLCB0eXBlbmFtZSk7XG4gICAgICAgICAgICBpZiAobXV0YXRpb25UeXBlKVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJvb3RUeXBlbmFtZShcIk11dGF0aW9uXCIsIHR5cGVuYW1lKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb25UeXBlKVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJvb3RUeXBlbmFtZShcIlN1YnNjcmlwdGlvblwiLCB0eXBlbmFtZSk7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoX3RoaXMudG9CZUFkZGVkLCB0eXBlbmFtZSkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50b0JlQWRkZWRbdHlwZW5hbWVdLnB1c2goaW5jb21pbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudG9CZUFkZGVkW3R5cGVuYW1lXSA9IFtpbmNvbWluZ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLnVwZGF0ZVR5cGVQb2xpY3kgPSBmdW5jdGlvbiAodHlwZW5hbWUsIGluY29taW5nKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBleGlzdGluZyA9IHRoaXMuZ2V0VHlwZVBvbGljeSh0eXBlbmFtZSk7XG4gICAgICAgIHZhciBrZXlGaWVsZHMgPSBpbmNvbWluZy5rZXlGaWVsZHMsIGZpZWxkcyA9IGluY29taW5nLmZpZWxkcztcbiAgICAgICAgZnVuY3Rpb24gc2V0TWVyZ2UoZXhpc3RpbmcsIG1lcmdlKSB7XG4gICAgICAgICAgICBleGlzdGluZy5tZXJnZSA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIG1lcmdlID09PSBcImZ1bmN0aW9uXCIgPyBtZXJnZSA6XG4gICAgICAgICAgICAgICAgICAgIG1lcmdlID09PSB0cnVlID8gbWVyZ2VUcnVlRm4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2UgPT09IGZhbHNlID8gbWVyZ2VGYWxzZUZuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5tZXJnZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRNZXJnZShleGlzdGluZywgaW5jb21pbmcubWVyZ2UpO1xuICAgICAgICBleGlzdGluZy5rZXlGbiA9XG4gICAgICAgICAgICBrZXlGaWVsZHMgPT09IGZhbHNlID8gbnVsbEtleUZpZWxkc0ZuIDpcbiAgICAgICAgICAgICAgICBpc0FycmF5KGtleUZpZWxkcykgPyBrZXlGaWVsZHNGbkZyb21TcGVjaWZpZXIoa2V5RmllbGRzKSA6XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBrZXlGaWVsZHMgPT09IFwiZnVuY3Rpb25cIiA/IGtleUZpZWxkcyA6XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5rZXlGbjtcbiAgICAgICAgaWYgKGZpZWxkcykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmcgPSBfdGhpcy5nZXRGaWVsZFBvbGljeSh0eXBlbmFtZSwgZmllbGROYW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5jb21pbmcgPSBmaWVsZHNbZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluY29taW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcucmVhZCA9IGluY29taW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleUFyZ3MgPSBpbmNvbWluZy5rZXlBcmdzLCByZWFkID0gaW5jb21pbmcucmVhZCwgbWVyZ2UgPSBpbmNvbWluZy5tZXJnZTtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcua2V5Rm4gPVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5QXJncyA9PT0gZmFsc2UgPyBzaW1wbGVLZXlBcmdzRm4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXJyYXkoa2V5QXJncykgPyBrZXlBcmdzRm5Gcm9tU3BlY2lmaWVyKGtleUFyZ3MpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGtleUFyZ3MgPT09IFwiZnVuY3Rpb25cIiA/IGtleUFyZ3MgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcua2V5Rm47XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVhZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5yZWFkID0gcmVhZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRNZXJnZShleGlzdGluZywgbWVyZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcucmVhZCAmJiBleGlzdGluZy5tZXJnZSkge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5rZXlGbiA9IGV4aXN0aW5nLmtleUZuIHx8IHNpbXBsZUtleUFyZ3NGbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLnNldFJvb3RUeXBlbmFtZSA9IGZ1bmN0aW9uICh3aGljaCwgdHlwZW5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVuYW1lID09PSB2b2lkIDApIHsgdHlwZW5hbWUgPSB3aGljaDsgfVxuICAgICAgICB2YXIgcm9vdElkID0gXCJST09UX1wiICsgd2hpY2gudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdmFyIG9sZCA9IHRoaXMucm9vdFR5cGVuYW1lc0J5SWRbcm9vdElkXTtcbiAgICAgICAgaWYgKHR5cGVuYW1lICE9PSBvbGQpIHtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghb2xkIHx8IG9sZCA9PT0gd2hpY2gsIFwiQ2Fubm90IGNoYW5nZSByb290IFwiLmNvbmNhdCh3aGljaCwgXCIgX190eXBlbmFtZSBtb3JlIHRoYW4gb25jZVwiKSkgOiBnbG9iYWxzLmludmFyaWFudCghb2xkIHx8IG9sZCA9PT0gd2hpY2gsIDMpO1xuICAgICAgICAgICAgaWYgKG9sZClcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5yb290SWRzQnlUeXBlbmFtZVtvbGRdO1xuICAgICAgICAgICAgdGhpcy5yb290SWRzQnlUeXBlbmFtZVt0eXBlbmFtZV0gPSByb290SWQ7XG4gICAgICAgICAgICB0aGlzLnJvb3RUeXBlbmFtZXNCeUlkW3Jvb3RJZF0gPSB0eXBlbmFtZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmFkZFBvc3NpYmxlVHlwZXMgPSBmdW5jdGlvbiAocG9zc2libGVUeXBlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnVzaW5nUG9zc2libGVUeXBlcyA9IHRydWU7XG4gICAgICAgIE9iamVjdC5rZXlzKHBvc3NpYmxlVHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKHN1cGVydHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuZ2V0U3VwZXJ0eXBlU2V0KHN1cGVydHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgICBwb3NzaWJsZVR5cGVzW3N1cGVydHlwZV0uZm9yRWFjaChmdW5jdGlvbiAoc3VidHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmdldFN1cGVydHlwZVNldChzdWJ0eXBlLCB0cnVlKS5hZGQoc3VwZXJ0eXBlKTtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBzdWJ0eXBlLm1hdGNoKFR5cGVPckZpZWxkTmFtZVJlZ0V4cCk7XG4gICAgICAgICAgICAgICAgaWYgKCFtYXRjaCB8fCBtYXRjaFswXSAhPT0gc3VidHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5mdXp6eVN1YnR5cGVzLnNldChzdWJ0eXBlLCBuZXcgUmVnRXhwKHN1YnR5cGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZ2V0VHlwZVBvbGljeSA9IGZ1bmN0aW9uICh0eXBlbmFtZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWhhc093bi5jYWxsKHRoaXMudHlwZVBvbGljaWVzLCB0eXBlbmFtZSkpIHtcbiAgICAgICAgICAgIHZhciBwb2xpY3lfMSA9IHRoaXMudHlwZVBvbGljaWVzW3R5cGVuYW1lXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICBwb2xpY3lfMS5maWVsZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgdmFyIHN1cGVydHlwZXMgPSB0aGlzLnN1cGVydHlwZU1hcC5nZXQodHlwZW5hbWUpO1xuICAgICAgICAgICAgaWYgKHN1cGVydHlwZXMgJiYgc3VwZXJ0eXBlcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgc3VwZXJ0eXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdXBlcnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMuZ2V0VHlwZVBvbGljeShzdXBlcnR5cGUpLCBmaWVsZHMgPSBfYS5maWVsZHMsIHJlc3QgPSB0c2xpYi5fX3Jlc3QoX2EsIFtcImZpZWxkc1wiXSk7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocG9saWN5XzEsIHJlc3QpO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHBvbGljeV8xLmZpZWxkcywgZmllbGRzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5ib3ggPSB0aGlzLnRvQmVBZGRlZFt0eXBlbmFtZV07XG4gICAgICAgIGlmIChpbmJveCAmJiBpbmJveC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGluYm94LnNwbGljZSgwKS5mb3JFYWNoKGZ1bmN0aW9uIChwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVUeXBlUG9saWN5KHR5cGVuYW1lLCBwb2xpY3kpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZVBvbGljaWVzW3R5cGVuYW1lXTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRGaWVsZFBvbGljeSA9IGZ1bmN0aW9uICh0eXBlbmFtZSwgZmllbGROYW1lLCBjcmVhdGVJZk1pc3NpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVuYW1lKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRQb2xpY2llcyA9IHRoaXMuZ2V0VHlwZVBvbGljeSh0eXBlbmFtZSkuZmllbGRzO1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkUG9saWNpZXNbZmllbGROYW1lXSB8fCAoY3JlYXRlSWZNaXNzaW5nICYmIChmaWVsZFBvbGljaWVzW2ZpZWxkTmFtZV0gPSBPYmplY3QuY3JlYXRlKG51bGwpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRTdXBlcnR5cGVTZXQgPSBmdW5jdGlvbiAoc3VidHlwZSwgY3JlYXRlSWZNaXNzaW5nKSB7XG4gICAgICAgIHZhciBzdXBlcnR5cGVTZXQgPSB0aGlzLnN1cGVydHlwZU1hcC5nZXQoc3VidHlwZSk7XG4gICAgICAgIGlmICghc3VwZXJ0eXBlU2V0ICYmIGNyZWF0ZUlmTWlzc2luZykge1xuICAgICAgICAgICAgdGhpcy5zdXBlcnR5cGVNYXAuc2V0KHN1YnR5cGUsIHN1cGVydHlwZVNldCA9IG5ldyBTZXQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVydHlwZVNldDtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5mcmFnbWVudE1hdGNoZXMgPSBmdW5jdGlvbiAoZnJhZ21lbnQsIHR5cGVuYW1lLCByZXN1bHQsIHZhcmlhYmxlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWZyYWdtZW50LnR5cGVDb25kaXRpb24pXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKCF0eXBlbmFtZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHN1cGVydHlwZSA9IGZyYWdtZW50LnR5cGVDb25kaXRpb24ubmFtZS52YWx1ZTtcbiAgICAgICAgaWYgKHR5cGVuYW1lID09PSBzdXBlcnR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMudXNpbmdQb3NzaWJsZVR5cGVzICYmXG4gICAgICAgICAgICB0aGlzLnN1cGVydHlwZU1hcC5oYXMoc3VwZXJ0eXBlKSkge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lU3VwZXJ0eXBlU2V0ID0gdGhpcy5nZXRTdXBlcnR5cGVTZXQodHlwZW5hbWUsIHRydWUpO1xuICAgICAgICAgICAgdmFyIHdvcmtRdWV1ZV8xID0gW3R5cGVuYW1lU3VwZXJ0eXBlU2V0XTtcbiAgICAgICAgICAgIHZhciBtYXliZUVucXVldWVfMSA9IGZ1bmN0aW9uIChzdWJ0eXBlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1cGVydHlwZVNldCA9IF90aGlzLmdldFN1cGVydHlwZVNldChzdWJ0eXBlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydHlwZVNldCAmJlxuICAgICAgICAgICAgICAgICAgICBzdXBlcnR5cGVTZXQuc2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgICB3b3JrUXVldWVfMS5pbmRleE9mKHN1cGVydHlwZVNldCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtRdWV1ZV8xLnB1c2goc3VwZXJ0eXBlU2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG5lZWRUb0NoZWNrRnV6enlTdWJ0eXBlcyA9ICEhKHJlc3VsdCAmJiB0aGlzLmZ1enp5U3VidHlwZXMuc2l6ZSk7XG4gICAgICAgICAgICB2YXIgY2hlY2tpbmdGdXp6eVN1YnR5cGVzID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmtRdWV1ZV8xLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1cGVydHlwZVNldCA9IHdvcmtRdWV1ZV8xW2ldO1xuICAgICAgICAgICAgICAgIGlmIChzdXBlcnR5cGVTZXQuaGFzKHN1cGVydHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0eXBlbmFtZVN1cGVydHlwZVNldC5oYXMoc3VwZXJ0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNraW5nRnV6enlTdWJ0eXBlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIkluZmVycmluZyBzdWJ0eXBlIFwiLmNvbmNhdCh0eXBlbmFtZSwgXCIgb2Ygc3VwZXJ0eXBlIFwiKS5jb25jYXQoc3VwZXJ0eXBlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlbmFtZVN1cGVydHlwZVNldC5hZGQoc3VwZXJ0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3VwZXJ0eXBlU2V0LmZvckVhY2gobWF5YmVFbnF1ZXVlXzEpO1xuICAgICAgICAgICAgICAgIGlmIChuZWVkVG9DaGVja0Z1enp5U3VidHlwZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgaSA9PT0gd29ya1F1ZXVlXzEubGVuZ3RoIC0gMSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXRNYXRjaGVzUmVzdWx0KGZyYWdtZW50LnNlbGVjdGlvblNldCwgcmVzdWx0LCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5lZWRUb0NoZWNrRnV6enlTdWJ0eXBlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2luZ0Z1enp5U3VidHlwZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1enp5U3VidHlwZXMuZm9yRWFjaChmdW5jdGlvbiAocmVnRXhwLCBmdXp6eVN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gdHlwZW5hbWUubWF0Y2gocmVnRXhwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFswXSA9PT0gdHlwZW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXliZUVucXVldWVfMShmdXp6eVN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuaGFzS2V5QXJncyA9IGZ1bmN0aW9uICh0eXBlbmFtZSwgZmllbGROYW1lKSB7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0aGlzLmdldEZpZWxkUG9saWN5KHR5cGVuYW1lLCBmaWVsZE5hbWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuICEhKHBvbGljeSAmJiBwb2xpY3kua2V5Rm4pO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldFN0b3JlRmllbGROYW1lID0gZnVuY3Rpb24gKGZpZWxkU3BlYykge1xuICAgICAgICB2YXIgdHlwZW5hbWUgPSBmaWVsZFNwZWMudHlwZW5hbWUsIGZpZWxkTmFtZSA9IGZpZWxkU3BlYy5maWVsZE5hbWU7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0aGlzLmdldEZpZWxkUG9saWN5KHR5cGVuYW1lLCBmaWVsZE5hbWUsIGZhbHNlKTtcbiAgICAgICAgdmFyIHN0b3JlRmllbGROYW1lO1xuICAgICAgICB2YXIga2V5Rm4gPSBwb2xpY3kgJiYgcG9saWN5LmtleUZuO1xuICAgICAgICBpZiAoa2V5Rm4gJiYgdHlwZW5hbWUpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIHR5cGVuYW1lOiB0eXBlbmFtZSxcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZSxcbiAgICAgICAgICAgICAgICBmaWVsZDogZmllbGRTcGVjLmZpZWxkIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBmaWVsZFNwZWMudmFyaWFibGVzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBhcmdzID0gYXJnc0Zyb21GaWVsZFNwZWNpZmllcihmaWVsZFNwZWMpO1xuICAgICAgICAgICAgd2hpbGUgKGtleUZuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNwZWNpZmllck9yU3RyaW5nID0ga2V5Rm4oYXJncywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkoc3BlY2lmaWVyT3JTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleUZuID0ga2V5QXJnc0ZuRnJvbVNwZWNpZmllcihzcGVjaWZpZXJPclN0cmluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZUZpZWxkTmFtZSA9IHNwZWNpZmllck9yU3RyaW5nIHx8IGZpZWxkTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdG9yZUZpZWxkTmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBzdG9yZUZpZWxkTmFtZSA9IGZpZWxkU3BlYy5maWVsZFxuICAgICAgICAgICAgICAgID8gdXRpbGl0aWVzLnN0b3JlS2V5TmFtZUZyb21GaWVsZChmaWVsZFNwZWMuZmllbGQsIGZpZWxkU3BlYy52YXJpYWJsZXMpXG4gICAgICAgICAgICAgICAgOiB1dGlsaXRpZXMuZ2V0U3RvcmVLZXlOYW1lKGZpZWxkTmFtZSwgYXJnc0Zyb21GaWVsZFNwZWNpZmllcihmaWVsZFNwZWMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RvcmVGaWVsZE5hbWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGROYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZE5hbWUgPT09IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpXG4gICAgICAgICAgICA/IHN0b3JlRmllbGROYW1lXG4gICAgICAgICAgICA6IGZpZWxkTmFtZSArIFwiOlwiICsgc3RvcmVGaWVsZE5hbWU7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUucmVhZEZpZWxkID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIG9iamVjdE9yUmVmZXJlbmNlID0gb3B0aW9ucy5mcm9tO1xuICAgICAgICBpZiAoIW9iamVjdE9yUmVmZXJlbmNlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgbmFtZU9yRmllbGQgPSBvcHRpb25zLmZpZWxkIHx8IG9wdGlvbnMuZmllbGROYW1lO1xuICAgICAgICBpZiAoIW5hbWVPckZpZWxkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAob3B0aW9ucy50eXBlbmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB2YXIgdHlwZW5hbWUgPSBjb250ZXh0LnN0b3JlLmdldEZpZWxkVmFsdWUob2JqZWN0T3JSZWZlcmVuY2UsIFwiX190eXBlbmFtZVwiKTtcbiAgICAgICAgICAgIGlmICh0eXBlbmFtZSlcbiAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGVuYW1lID0gdHlwZW5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0b3JlRmllbGROYW1lID0gdGhpcy5nZXRTdG9yZUZpZWxkTmFtZShvcHRpb25zKTtcbiAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSBjb250ZXh0LnN0b3JlLmdldEZpZWxkVmFsdWUob2JqZWN0T3JSZWZlcmVuY2UsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgdmFyIHBvbGljeSA9IHRoaXMuZ2V0RmllbGRQb2xpY3kob3B0aW9ucy50eXBlbmFtZSwgZmllbGROYW1lLCBmYWxzZSk7XG4gICAgICAgIHZhciByZWFkID0gcG9saWN5ICYmIHBvbGljeS5yZWFkO1xuICAgICAgICBpZiAocmVhZCkge1xuICAgICAgICAgICAgdmFyIHJlYWRPcHRpb25zID0gbWFrZUZpZWxkRnVuY3Rpb25PcHRpb25zKHRoaXMsIG9iamVjdE9yUmVmZXJlbmNlLCBvcHRpb25zLCBjb250ZXh0LCBjb250ZXh0LnN0b3JlLmdldFN0b3JhZ2UodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdE9yUmVmZXJlbmNlKVxuICAgICAgICAgICAgICAgID8gb2JqZWN0T3JSZWZlcmVuY2UuX19yZWZcbiAgICAgICAgICAgICAgICA6IG9iamVjdE9yUmVmZXJlbmNlLCBzdG9yZUZpZWxkTmFtZSkpO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlU2xvdC53aXRoVmFsdWUodGhpcy5jYWNoZSwgcmVhZCwgW2V4aXN0aW5nLCByZWFkT3B0aW9uc10pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleGlzdGluZztcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRSZWFkRnVuY3Rpb24gPSBmdW5jdGlvbiAodHlwZW5hbWUsIGZpZWxkTmFtZSkge1xuICAgICAgICB2YXIgcG9saWN5ID0gdGhpcy5nZXRGaWVsZFBvbGljeSh0eXBlbmFtZSwgZmllbGROYW1lLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBwb2xpY3kgJiYgcG9saWN5LnJlYWQ7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZ2V0TWVyZ2VGdW5jdGlvbiA9IGZ1bmN0aW9uIChwYXJlbnRUeXBlbmFtZSwgZmllbGROYW1lLCBjaGlsZFR5cGVuYW1lKSB7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0aGlzLmdldEZpZWxkUG9saWN5KHBhcmVudFR5cGVuYW1lLCBmaWVsZE5hbWUsIGZhbHNlKTtcbiAgICAgICAgdmFyIG1lcmdlID0gcG9saWN5ICYmIHBvbGljeS5tZXJnZTtcbiAgICAgICAgaWYgKCFtZXJnZSAmJiBjaGlsZFR5cGVuYW1lKSB7XG4gICAgICAgICAgICBwb2xpY3kgPSB0aGlzLmdldFR5cGVQb2xpY3koY2hpbGRUeXBlbmFtZSk7XG4gICAgICAgICAgICBtZXJnZSA9IHBvbGljeSAmJiBwb2xpY3kubWVyZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lcmdlO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLnJ1bk1lcmdlRnVuY3Rpb24gPSBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nLCBfYSwgY29udGV4dCwgc3RvcmFnZSkge1xuICAgICAgICB2YXIgZmllbGQgPSBfYS5maWVsZCwgdHlwZW5hbWUgPSBfYS50eXBlbmFtZSwgbWVyZ2UgPSBfYS5tZXJnZTtcbiAgICAgICAgaWYgKG1lcmdlID09PSBtZXJnZVRydWVGbikge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VNZXJnZU9iamVjdHNGdW5jdGlvbihjb250ZXh0LnN0b3JlKShleGlzdGluZywgaW5jb21pbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXJnZSA9PT0gbWVyZ2VGYWxzZUZuKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQub3ZlcndyaXRlKSB7XG4gICAgICAgICAgICBleGlzdGluZyA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLCBtYWtlRmllbGRGdW5jdGlvbk9wdGlvbnModGhpcywgdm9pZCAwLCB7IHR5cGVuYW1lOiB0eXBlbmFtZSwgZmllbGROYW1lOiBmaWVsZC5uYW1lLnZhbHVlLCBmaWVsZDogZmllbGQsIHZhcmlhYmxlczogY29udGV4dC52YXJpYWJsZXMgfSwgY29udGV4dCwgc3RvcmFnZSB8fCBPYmplY3QuY3JlYXRlKG51bGwpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gUG9saWNpZXM7XG59KCkpO1xuZnVuY3Rpb24gbWFrZUZpZWxkRnVuY3Rpb25PcHRpb25zKHBvbGljaWVzLCBvYmplY3RPclJlZmVyZW5jZSwgZmllbGRTcGVjLCBjb250ZXh0LCBzdG9yYWdlKSB7XG4gICAgdmFyIHN0b3JlRmllbGROYW1lID0gcG9saWNpZXMuZ2V0U3RvcmVGaWVsZE5hbWUoZmllbGRTcGVjKTtcbiAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgdmFyIHZhcmlhYmxlcyA9IGZpZWxkU3BlYy52YXJpYWJsZXMgfHwgY29udGV4dC52YXJpYWJsZXM7XG4gICAgdmFyIF9hID0gY29udGV4dC5zdG9yZSwgdG9SZWZlcmVuY2UgPSBfYS50b1JlZmVyZW5jZSwgY2FuUmVhZCA9IF9hLmNhblJlYWQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXJnczogYXJnc0Zyb21GaWVsZFNwZWNpZmllcihmaWVsZFNwZWMpLFxuICAgICAgICBmaWVsZDogZmllbGRTcGVjLmZpZWxkIHx8IG51bGwsXG4gICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICBzdG9yZUZpZWxkTmFtZTogc3RvcmVGaWVsZE5hbWUsXG4gICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICBpc1JlZmVyZW5jZTogdXRpbGl0aWVzLmlzUmVmZXJlbmNlLFxuICAgICAgICB0b1JlZmVyZW5jZTogdG9SZWZlcmVuY2UsXG4gICAgICAgIHN0b3JhZ2U6IHN0b3JhZ2UsXG4gICAgICAgIGNhY2hlOiBwb2xpY2llcy5jYWNoZSxcbiAgICAgICAgY2FuUmVhZDogY2FuUmVhZCxcbiAgICAgICAgcmVhZEZpZWxkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9saWNpZXMucmVhZEZpZWxkKG5vcm1hbGl6ZVJlYWRGaWVsZE9wdGlvbnMoYXJndW1lbnRzLCBvYmplY3RPclJlZmVyZW5jZSwgdmFyaWFibGVzKSwgY29udGV4dCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlT2JqZWN0czogbWFrZU1lcmdlT2JqZWN0c0Z1bmN0aW9uKGNvbnRleHQuc3RvcmUpLFxuICAgIH07XG59XG5mdW5jdGlvbiBub3JtYWxpemVSZWFkRmllbGRPcHRpb25zKHJlYWRGaWVsZEFyZ3MsIG9iamVjdE9yUmVmZXJlbmNlLCB2YXJpYWJsZXMpIHtcbiAgICB2YXIgZmllbGROYW1lT3JPcHRpb25zID0gcmVhZEZpZWxkQXJnc1swXSwgZnJvbSA9IHJlYWRGaWVsZEFyZ3NbMV0sIGFyZ2MgPSByZWFkRmllbGRBcmdzLmxlbmd0aDtcbiAgICB2YXIgb3B0aW9ucztcbiAgICBpZiAodHlwZW9mIGZpZWxkTmFtZU9yT3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWVPck9wdGlvbnMsXG4gICAgICAgICAgICBmcm9tOiBhcmdjID4gMSA/IGZyb20gOiBvYmplY3RPclJlZmVyZW5jZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih7fSwgZmllbGROYW1lT3JPcHRpb25zKTtcbiAgICAgICAgaWYgKCFoYXNPd24uY2FsbChvcHRpb25zLCBcImZyb21cIikpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZnJvbSA9IG9iamVjdE9yUmVmZXJlbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChfX0RFVl9fICYmIG9wdGlvbnMuZnJvbSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIlVuZGVmaW5lZCAnZnJvbScgcGFzc2VkIHRvIHJlYWRGaWVsZCB3aXRoIGFyZ3VtZW50cyBcIi5jb25jYXQodXRpbGl0aWVzLnN0cmluZ2lmeUZvckRpc3BsYXkoQXJyYXkuZnJvbShyZWFkRmllbGRBcmdzKSkpKTtcbiAgICB9XG4gICAgaWYgKHZvaWQgMCA9PT0gb3B0aW9ucy52YXJpYWJsZXMpIHtcbiAgICAgICAgb3B0aW9ucy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xufVxuZnVuY3Rpb24gbWFrZU1lcmdlT2JqZWN0c0Z1bmN0aW9uKHN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhleGlzdGluZywgaW5jb21pbmcpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkoZXhpc3RpbmcpIHx8IGlzQXJyYXkoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJDYW5ub3QgYXV0b21hdGljYWxseSBtZXJnZSBhcnJheXNcIikgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdChleGlzdGluZykgJiZcbiAgICAgICAgICAgIHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICB2YXIgZVR5cGUgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKGV4aXN0aW5nLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICB2YXIgaVR5cGUgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKGluY29taW5nLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICB2YXIgdHlwZXNEaWZmZXIgPSBlVHlwZSAmJiBpVHlwZSAmJiBlVHlwZSAhPT0gaVR5cGU7XG4gICAgICAgICAgICBpZiAodHlwZXNEaWZmZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKGV4aXN0aW5nKSAmJlxuICAgICAgICAgICAgICAgIHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGluY29taW5nKSkge1xuICAgICAgICAgICAgICAgIHN0b3JlLm1lcmdlKGV4aXN0aW5nLl9fcmVmLCBpbmNvbWluZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGV4aXN0aW5nKSAmJlxuICAgICAgICAgICAgICAgIHV0aWxpdGllcy5pc1JlZmVyZW5jZShpbmNvbWluZykpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5tZXJnZShleGlzdGluZywgaW5jb21pbmcuX19yZWYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmNvbWluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChleGlzdGluZykgJiZcbiAgICAgICAgICAgICAgICBzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChpbmNvbWluZykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGV4aXN0aW5nKSwgaW5jb21pbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmNvbWluZztcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0Rmxhdm9yKGNvbnRleHQsIGNsaWVudE9ubHksIGRlZmVycmVkKSB7XG4gICAgdmFyIGtleSA9IFwiXCIuY29uY2F0KGNsaWVudE9ubHkpLmNvbmNhdChkZWZlcnJlZCk7XG4gICAgdmFyIGZsYXZvcmVkID0gY29udGV4dC5mbGF2b3JzLmdldChrZXkpO1xuICAgIGlmICghZmxhdm9yZWQpIHtcbiAgICAgICAgY29udGV4dC5mbGF2b3JzLnNldChrZXksIGZsYXZvcmVkID0gKGNvbnRleHQuY2xpZW50T25seSA9PT0gY2xpZW50T25seSAmJlxuICAgICAgICAgICAgY29udGV4dC5kZWZlcnJlZCA9PT0gZGVmZXJyZWQpID8gY29udGV4dCA6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyBjbGllbnRPbmx5OiBjbGllbnRPbmx5LCBkZWZlcnJlZDogZGVmZXJyZWQgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmxhdm9yZWQ7XG59XG52YXIgU3RvcmVXcml0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0b3JlV3JpdGVyKGNhY2hlLCByZWFkZXIsIGZyYWdtZW50cykge1xuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgIHRoaXMucmVhZGVyID0gcmVhZGVyO1xuICAgICAgICB0aGlzLmZyYWdtZW50cyA9IGZyYWdtZW50cztcbiAgICB9XG4gICAgU3RvcmVXcml0ZXIucHJvdG90eXBlLndyaXRlVG9TdG9yZSA9IGZ1bmN0aW9uIChzdG9yZSwgX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHF1ZXJ5ID0gX2EucXVlcnksIHJlc3VsdCA9IF9hLnJlc3VsdCwgZGF0YUlkID0gX2EuZGF0YUlkLCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIG92ZXJ3cml0ZSA9IF9hLm92ZXJ3cml0ZTtcbiAgICAgICAgdmFyIG9wZXJhdGlvbkRlZmluaXRpb24gPSB1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgIHZhciBtZXJnZXIgPSBtYWtlUHJvY2Vzc2VkRmllbGRzTWVyZ2VyKCk7XG4gICAgICAgIHZhcmlhYmxlcyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB1dGlsaXRpZXMuZ2V0RGVmYXVsdFZhbHVlcyhvcGVyYXRpb25EZWZpbml0aW9uKSksIHZhcmlhYmxlcyk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oeyBzdG9yZTogc3RvcmUsIHdyaXR0ZW46IE9iamVjdC5jcmVhdGUobnVsbCksIG1lcmdlOiBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlci5tZXJnZShleGlzdGluZywgaW5jb21pbmcpO1xuICAgICAgICAgICAgfSwgdmFyaWFibGVzOiB2YXJpYWJsZXMsIHZhclN0cmluZzogY2Fub25pY2FsU3RyaW5naWZ5KHZhcmlhYmxlcykgfSwgZXh0cmFjdEZyYWdtZW50Q29udGV4dChxdWVyeSwgdGhpcy5mcmFnbWVudHMpKSwgeyBvdmVyd3JpdGU6ICEhb3ZlcndyaXRlLCBpbmNvbWluZ0J5SWQ6IG5ldyBNYXAsIGNsaWVudE9ubHk6IGZhbHNlLCBkZWZlcnJlZDogZmFsc2UsIGZsYXZvcnM6IG5ldyBNYXAgfSk7XG4gICAgICAgIHZhciByZWYgPSB0aGlzLnByb2Nlc3NTZWxlY3Rpb25TZXQoe1xuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQgfHwgT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGRhdGFJZDogZGF0YUlkLFxuICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiBvcGVyYXRpb25EZWZpbml0aW9uLnNlbGVjdGlvblNldCxcbiAgICAgICAgICAgIG1lcmdlVHJlZTogeyBtYXA6IG5ldyBNYXAgfSxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXV0aWxpdGllcy5pc1JlZmVyZW5jZShyZWYpKSB7XG4gICAgICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJDb3VsZCBub3QgaWRlbnRpZnkgb2JqZWN0IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShyZXN1bHQpKSkgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig3KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmluY29taW5nQnlJZC5mb3JFYWNoKGZ1bmN0aW9uIChfYSwgZGF0YUlkKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmVPYmplY3QgPSBfYS5zdG9yZU9iamVjdCwgbWVyZ2VUcmVlID0gX2EubWVyZ2VUcmVlLCBmaWVsZE5vZGVTZXQgPSBfYS5maWVsZE5vZGVTZXQ7XG4gICAgICAgICAgICB2YXIgZW50aXR5UmVmID0gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2UoZGF0YUlkKTtcbiAgICAgICAgICAgIGlmIChtZXJnZVRyZWUgJiYgbWVyZ2VUcmVlLm1hcC5zaXplKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFwcGxpZWQgPSBfdGhpcy5hcHBseU1lcmdlcyhtZXJnZVRyZWUsIGVudGl0eVJlZiwgc3RvcmVPYmplY3QsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UoYXBwbGllZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdG9yZU9iamVjdCA9IGFwcGxpZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19ERVZfXyAmJiAhY29udGV4dC5vdmVyd3JpdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGRzV2l0aFNlbGVjdGlvblNldHNfMSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICAgICAgZmllbGROb2RlU2V0LmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1dpdGhTZWxlY3Rpb25TZXRzXzFbZmllbGQubmFtZS52YWx1ZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGhhc1NlbGVjdGlvblNldF8xID0gZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZHNXaXRoU2VsZWN0aW9uU2V0c18xW2ZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpXSA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBoYXNNZXJnZUZ1bmN0aW9uXzEgPSBmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkVHJlZSA9IG1lcmdlVHJlZSAmJiBtZXJnZVRyZWUubWFwLmdldChzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBCb29sZWFuKGNoaWxkVHJlZSAmJiBjaGlsZFRyZWUuaW5mbyAmJiBjaGlsZFRyZWUuaW5mby5tZXJnZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yZU9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1NlbGVjdGlvblNldF8xKHN0b3JlRmllbGROYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIWhhc01lcmdlRnVuY3Rpb25fMShzdG9yZUZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5BYm91dERhdGFMb3NzKGVudGl0eVJlZiwgc3RvcmVPYmplY3QsIHN0b3JlRmllbGROYW1lLCBjb250ZXh0LnN0b3JlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RvcmUubWVyZ2UoZGF0YUlkLCBzdG9yZU9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdG9yZS5yZXRhaW4ocmVmLl9fcmVmKTtcbiAgICAgICAgcmV0dXJuIHJlZjtcbiAgICB9O1xuICAgIFN0b3JlV3JpdGVyLnByb3RvdHlwZS5wcm9jZXNzU2VsZWN0aW9uU2V0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhSWQgPSBfYS5kYXRhSWQsIHJlc3VsdCA9IF9hLnJlc3VsdCwgc2VsZWN0aW9uU2V0ID0gX2Euc2VsZWN0aW9uU2V0LCBjb250ZXh0ID0gX2EuY29udGV4dCwgbWVyZ2VUcmVlID0gX2EubWVyZ2VUcmVlO1xuICAgICAgICB2YXIgcG9saWNpZXMgPSB0aGlzLmNhY2hlLnBvbGljaWVzO1xuICAgICAgICB2YXIgaW5jb21pbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgdHlwZW5hbWUgPSAoZGF0YUlkICYmIHBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkW2RhdGFJZF0pIHx8XG4gICAgICAgICAgICB1dGlsaXRpZXMuZ2V0VHlwZW5hbWVGcm9tUmVzdWx0KHJlc3VsdCwgc2VsZWN0aW9uU2V0LCBjb250ZXh0LmZyYWdtZW50TWFwKSB8fFxuICAgICAgICAgICAgKGRhdGFJZCAmJiBjb250ZXh0LnN0b3JlLmdldChkYXRhSWQsIFwiX190eXBlbmFtZVwiKSk7XG4gICAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgdHlwZW5hbWUpIHtcbiAgICAgICAgICAgIGluY29taW5nLl9fdHlwZW5hbWUgPSB0eXBlbmFtZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVhZEZpZWxkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVSZWFkRmllbGRPcHRpb25zKGFyZ3VtZW50cywgaW5jb21pbmcsIGNvbnRleHQudmFyaWFibGVzKTtcbiAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob3B0aW9ucy5mcm9tKSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmZvID0gY29udGV4dC5pbmNvbWluZ0J5SWQuZ2V0KG9wdGlvbnMuZnJvbS5fX3JlZik7XG4gICAgICAgICAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdF8xID0gcG9saWNpZXMucmVhZEZpZWxkKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBmcm9tOiBpbmZvLnN0b3JlT2JqZWN0IH0pLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdF8xICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRfMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwb2xpY2llcy5yZWFkRmllbGQob3B0aW9ucywgY29udGV4dCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBmaWVsZE5vZGVTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZmxhdHRlbkZpZWxkcyhzZWxlY3Rpb25TZXQsIHJlc3VsdCwgY29udGV4dCwgdHlwZW5hbWUpLmZvckVhY2goZnVuY3Rpb24gKGNvbnRleHQsIGZpZWxkKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgcmVzdWx0RmllbGRLZXkgPSB1dGlsaXRpZXMucmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHRbcmVzdWx0RmllbGRLZXldO1xuICAgICAgICAgICAgZmllbGROb2RlU2V0LmFkZChmaWVsZCk7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZUZpZWxkTmFtZSA9IHBvbGljaWVzLmdldFN0b3JlRmllbGROYW1lKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZW5hbWU6IHR5cGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBjb250ZXh0LnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRUcmVlID0gZ2V0Q2hpbGRNZXJnZVRyZWUobWVyZ2VUcmVlLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIGluY29taW5nVmFsdWUgPSBfdGhpcy5wcm9jZXNzRmllbGRWYWx1ZSh2YWx1ZSwgZmllbGQsIGZpZWxkLnNlbGVjdGlvblNldFxuICAgICAgICAgICAgICAgICAgICA/IGdldENvbnRleHRGbGF2b3IoY29udGV4dCwgZmFsc2UsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbnRleHQsIGNoaWxkVHJlZSk7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkVHlwZW5hbWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCAmJlxuICAgICAgICAgICAgICAgICAgICAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKGluY29taW5nVmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChpbmNvbWluZ1ZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUeXBlbmFtZSA9IHJlYWRGaWVsZChcIl9fdHlwZW5hbWVcIiwgaW5jb21pbmdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBtZXJnZSA9IHBvbGljaWVzLmdldE1lcmdlRnVuY3Rpb24odHlwZW5hbWUsIGZpZWxkLm5hbWUudmFsdWUsIGNoaWxkVHlwZW5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChtZXJnZSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyZWUuaW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVuYW1lOiB0eXBlbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlOiBtZXJnZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1heWJlUmVjeWNsZUNoaWxkTWVyZ2VUcmVlKG1lcmdlVHJlZSwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmNvbWluZyA9IGNvbnRleHQubWVyZ2UoaW5jb21pbmcsIChfYSA9IHt9LFxuICAgICAgICAgICAgICAgICAgICBfYVtzdG9yZUZpZWxkTmFtZV0gPSBpbmNvbWluZ1ZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBfYSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX19ERVZfXyAmJlxuICAgICAgICAgICAgICAgICFjb250ZXh0LmNsaWVudE9ubHkgJiZcbiAgICAgICAgICAgICAgICAhY29udGV4dC5kZWZlcnJlZCAmJlxuICAgICAgICAgICAgICAgICF1dGlsaXRpZXMuYWRkVHlwZW5hbWVUb0RvY3VtZW50LmFkZGVkKGZpZWxkKSAmJlxuICAgICAgICAgICAgICAgICFwb2xpY2llcy5nZXRSZWFkRnVuY3Rpb24odHlwZW5hbWUsIGZpZWxkLm5hbWUudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5lcnJvcihcIk1pc3NpbmcgZmllbGQgJ1wiLmNvbmNhdCh1dGlsaXRpZXMucmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCksIFwiJyB3aGlsZSB3cml0aW5nIHJlc3VsdCBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpLnN1YnN0cmluZygwLCAxMDAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIF9iID0gcG9saWNpZXMuaWRlbnRpZnkocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgdHlwZW5hbWU6IHR5cGVuYW1lLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDogc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwOiBjb250ZXh0LmZyYWdtZW50TWFwLFxuICAgICAgICAgICAgICAgIHN0b3JlT2JqZWN0OiBpbmNvbWluZyxcbiAgICAgICAgICAgICAgICByZWFkRmllbGQ6IHJlYWRGaWVsZCxcbiAgICAgICAgICAgIH0pLCBpZCA9IF9iWzBdLCBrZXlPYmplY3QgPSBfYlsxXTtcbiAgICAgICAgICAgIGRhdGFJZCA9IGRhdGFJZCB8fCBpZDtcbiAgICAgICAgICAgIGlmIChrZXlPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpbmNvbWluZyA9IGNvbnRleHQubWVyZ2UoaW5jb21pbmcsIGtleU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmICghZGF0YUlkKVxuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwic3RyaW5nXCIgPT09IHR5cGVvZiBkYXRhSWQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhUmVmID0gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2UoZGF0YUlkKTtcbiAgICAgICAgICAgIHZhciBzZXRzID0gY29udGV4dC53cml0dGVuW2RhdGFJZF0gfHwgKGNvbnRleHQud3JpdHRlbltkYXRhSWRdID0gW10pO1xuICAgICAgICAgICAgaWYgKHNldHMuaW5kZXhPZihzZWxlY3Rpb25TZXQpID49IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWY7XG4gICAgICAgICAgICBzZXRzLnB1c2goc2VsZWN0aW9uU2V0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWRlciAmJiB0aGlzLnJlYWRlci5pc0ZyZXNoKHJlc3VsdCwgZGF0YVJlZiwgc2VsZWN0aW9uU2V0LCBjb250ZXh0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhUmVmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByZXZpb3VzXzEgPSBjb250ZXh0LmluY29taW5nQnlJZC5nZXQoZGF0YUlkKTtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c18xKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNfMS5zdG9yZU9iamVjdCA9IGNvbnRleHQubWVyZ2UocHJldmlvdXNfMS5zdG9yZU9iamVjdCwgaW5jb21pbmcpO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzXzEubWVyZ2VUcmVlID0gbWVyZ2VNZXJnZVRyZWVzKHByZXZpb3VzXzEubWVyZ2VUcmVlLCBtZXJnZVRyZWUpO1xuICAgICAgICAgICAgICAgIGZpZWxkTm9kZVNldC5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gcHJldmlvdXNfMS5maWVsZE5vZGVTZXQuYWRkKGZpZWxkKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmluY29taW5nQnlJZC5zZXQoZGF0YUlkLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlT2JqZWN0OiBpbmNvbWluZyxcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VUcmVlOiBtZXJnZVRyZWVJc0VtcHR5KG1lcmdlVHJlZSkgPyB2b2lkIDAgOiBtZXJnZVRyZWUsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTm9kZVNldDogZmllbGROb2RlU2V0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgIH07XG4gICAgU3RvcmVXcml0ZXIucHJvdG90eXBlLnByb2Nlc3NGaWVsZFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmaWVsZCwgY29udGV4dCwgbWVyZ2VUcmVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghZmllbGQuc2VsZWN0aW9uU2V0IHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gX19ERVZfXyA/IHV0aWxpdGllcy5jbG9uZURlZXAodmFsdWUpIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubWFwKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMucHJvY2Vzc0ZpZWxkVmFsdWUoaXRlbSwgZmllbGQsIGNvbnRleHQsIGdldENoaWxkTWVyZ2VUcmVlKG1lcmdlVHJlZSwgaSkpO1xuICAgICAgICAgICAgICAgIG1heWJlUmVjeWNsZUNoaWxkTWVyZ2VUcmVlKG1lcmdlVHJlZSwgaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NlbGVjdGlvblNldCh7XG4gICAgICAgICAgICByZXN1bHQ6IHZhbHVlLFxuICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiBmaWVsZC5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgbWVyZ2VUcmVlOiBtZXJnZVRyZWUsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3RvcmVXcml0ZXIucHJvdG90eXBlLmZsYXR0ZW5GaWVsZHMgPSBmdW5jdGlvbiAoc2VsZWN0aW9uU2V0LCByZXN1bHQsIGNvbnRleHQsIHR5cGVuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlbmFtZSA9PT0gdm9pZCAwKSB7IHR5cGVuYW1lID0gdXRpbGl0aWVzLmdldFR5cGVuYW1lRnJvbVJlc3VsdChyZXN1bHQsIHNlbGVjdGlvblNldCwgY29udGV4dC5mcmFnbWVudE1hcCk7IH1cbiAgICAgICAgdmFyIGZpZWxkTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB2YXIgcG9saWNpZXMgPSB0aGlzLmNhY2hlLnBvbGljaWVzO1xuICAgICAgICB2YXIgbGltaXRpbmdUcmllID0gbmV3IHRyaWUuVHJpZShmYWxzZSk7XG4gICAgICAgIChmdW5jdGlvbiBmbGF0dGVuKHNlbGVjdGlvblNldCwgaW5oZXJpdGVkQ29udGV4dCkge1xuICAgICAgICAgICAgdmFyIHZpc2l0ZWROb2RlID0gbGltaXRpbmdUcmllLmxvb2t1cChzZWxlY3Rpb25TZXQsIGluaGVyaXRlZENvbnRleHQuY2xpZW50T25seSwgaW5oZXJpdGVkQ29udGV4dC5kZWZlcnJlZCk7XG4gICAgICAgICAgICBpZiAodmlzaXRlZE5vZGUudmlzaXRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2aXNpdGVkTm9kZS52aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICghdXRpbGl0aWVzLnNob3VsZEluY2x1ZGUoc2VsZWN0aW9uLCBjb250ZXh0LnZhcmlhYmxlcykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50T25seSA9IGluaGVyaXRlZENvbnRleHQuY2xpZW50T25seSwgZGVmZXJyZWQgPSBpbmhlcml0ZWRDb250ZXh0LmRlZmVycmVkO1xuICAgICAgICAgICAgICAgIGlmICghKGNsaWVudE9ubHkgJiYgZGVmZXJyZWQpICYmXG4gICAgICAgICAgICAgICAgICAgIHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkoc2VsZWN0aW9uLmRpcmVjdGl2ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5kaXJlY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBkaXIubmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBcImNsaWVudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudE9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiZGVmZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFyZ3VtZW50c09iamVjdEZyb21GaWVsZChkaXIsIGNvbnRleHQudmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFyZ3MgfHwgYXJncy5pZiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZyA9IGZpZWxkTWFwLmdldChzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudE9ubHkgPSBjbGllbnRPbmx5ICYmIGV4aXN0aW5nLmNsaWVudE9ubHk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZCA9IGRlZmVycmVkICYmIGV4aXN0aW5nLmRlZmVycmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTWFwLnNldChzZWxlY3Rpb24sIGdldENvbnRleHRGbGF2b3IoY29udGV4dCwgY2xpZW50T25seSwgZGVmZXJyZWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IHV0aWxpdGllcy5nZXRGcmFnbWVudEZyb21TZWxlY3Rpb24oc2VsZWN0aW9uLCBjb250ZXh0Lmxvb2t1cEZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmcmFnbWVudCAmJiBzZWxlY3Rpb24ua2luZCA9PT0gZ3JhcGhxbC5LaW5kLkZSQUdNRU5UX1NQUkVBRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiTm8gZnJhZ21lbnQgbmFtZWQgXCIuY29uY2F0KHNlbGVjdGlvbi5uYW1lLnZhbHVlKSkgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljaWVzLmZyYWdtZW50TWF0Y2hlcyhmcmFnbWVudCwgdHlwZW5hbWUsIHJlc3VsdCwgY29udGV4dC52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuKGZyYWdtZW50LnNlbGVjdGlvblNldCwgZ2V0Q29udGV4dEZsYXZvcihjb250ZXh0LCBjbGllbnRPbmx5LCBkZWZlcnJlZCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKHNlbGVjdGlvblNldCwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiBmaWVsZE1hcDtcbiAgICB9O1xuICAgIFN0b3JlV3JpdGVyLnByb3RvdHlwZS5hcHBseU1lcmdlcyA9IGZ1bmN0aW9uIChtZXJnZVRyZWUsIGV4aXN0aW5nLCBpbmNvbWluZywgY29udGV4dCwgZ2V0U3RvcmFnZUFyZ3MpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobWVyZ2VUcmVlLm1hcC5zaXplICYmICF1dGlsaXRpZXMuaXNSZWZlcmVuY2UoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICB2YXIgZV8xID0gKCFpc0FycmF5KGluY29taW5nKSAmJlxuICAgICAgICAgICAgICAgICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UoZXhpc3RpbmcpIHx8IHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGV4aXN0aW5nKSkpID8gZXhpc3RpbmcgOiB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgaV8xID0gaW5jb21pbmc7XG4gICAgICAgICAgICBpZiAoZV8xICYmICFnZXRTdG9yYWdlQXJncykge1xuICAgICAgICAgICAgICAgIGdldFN0b3JhZ2VBcmdzID0gW3V0aWxpdGllcy5pc1JlZmVyZW5jZShlXzEpID8gZV8xLl9fcmVmIDogZV8xXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGFuZ2VkRmllbGRzXzE7XG4gICAgICAgICAgICB2YXIgZ2V0VmFsdWVfMSA9IGZ1bmN0aW9uIChmcm9tLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkoZnJvbSlcbiAgICAgICAgICAgICAgICAgICAgPyAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIgPyBmcm9tW25hbWVdIDogdm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbnRleHQuc3RvcmUuZ2V0RmllbGRWYWx1ZShmcm9tLCBTdHJpbmcobmFtZSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1lcmdlVHJlZS5tYXAuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRUcmVlLCBzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBlVmFsID0gZ2V0VmFsdWVfMShlXzEsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgaVZhbCA9IGdldFZhbHVlXzEoaV8xLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gaVZhbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChnZXRTdG9yYWdlQXJncykge1xuICAgICAgICAgICAgICAgICAgICBnZXRTdG9yYWdlQXJncy5wdXNoKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGFWYWwgPSBfdGhpcy5hcHBseU1lcmdlcyhjaGlsZFRyZWUsIGVWYWwsIGlWYWwsIGNvbnRleHQsIGdldFN0b3JhZ2VBcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAoYVZhbCAhPT0gaVZhbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkRmllbGRzXzEgPSBjaGFuZ2VkRmllbGRzXzEgfHwgbmV3IE1hcDtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZEZpZWxkc18xLnNldChzdG9yZUZpZWxkTmFtZSwgYVZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChnZXRTdG9yYWdlQXJncykge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLmludmFyaWFudChnZXRTdG9yYWdlQXJncy5wb3AoKSA9PT0gc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNoYW5nZWRGaWVsZHNfMSkge1xuICAgICAgICAgICAgICAgIGluY29taW5nID0gKGlzQXJyYXkoaV8xKSA/IGlfMS5zbGljZSgwKSA6IHRzbGliLl9fYXNzaWduKHt9LCBpXzEpKTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkRmllbGRzXzEuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jb21pbmdbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWVyZ2VUcmVlLmluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnBvbGljaWVzLnJ1bk1lcmdlRnVuY3Rpb24oZXhpc3RpbmcsIGluY29taW5nLCBtZXJnZVRyZWUuaW5mbywgY29udGV4dCwgZ2V0U3RvcmFnZUFyZ3MgJiYgKF9hID0gY29udGV4dC5zdG9yZSkuZ2V0U3RvcmFnZS5hcHBseShfYSwgZ2V0U3RvcmFnZUFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgfTtcbiAgICByZXR1cm4gU3RvcmVXcml0ZXI7XG59KCkpO1xudmFyIGVtcHR5TWVyZ2VUcmVlUG9vbCA9IFtdO1xuZnVuY3Rpb24gZ2V0Q2hpbGRNZXJnZVRyZWUoX2EsIG5hbWUpIHtcbiAgICB2YXIgbWFwID0gX2EubWFwO1xuICAgIGlmICghbWFwLmhhcyhuYW1lKSkge1xuICAgICAgICBtYXAuc2V0KG5hbWUsIGVtcHR5TWVyZ2VUcmVlUG9vbC5wb3AoKSB8fCB7IG1hcDogbmV3IE1hcCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcC5nZXQobmFtZSk7XG59XG5mdW5jdGlvbiBtZXJnZU1lcmdlVHJlZXMobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAobGVmdCA9PT0gcmlnaHQgfHwgIXJpZ2h0IHx8IG1lcmdlVHJlZUlzRW1wdHkocmlnaHQpKVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICBpZiAoIWxlZnQgfHwgbWVyZ2VUcmVlSXNFbXB0eShsZWZ0KSlcbiAgICAgICAgcmV0dXJuIHJpZ2h0O1xuICAgIHZhciBpbmZvID0gbGVmdC5pbmZvICYmIHJpZ2h0LmluZm8gPyB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbGVmdC5pbmZvKSwgcmlnaHQuaW5mbykgOiBsZWZ0LmluZm8gfHwgcmlnaHQuaW5mbztcbiAgICB2YXIgbmVlZFRvTWVyZ2VNYXBzID0gbGVmdC5tYXAuc2l6ZSAmJiByaWdodC5tYXAuc2l6ZTtcbiAgICB2YXIgbWFwID0gbmVlZFRvTWVyZ2VNYXBzID8gbmV3IE1hcCA6XG4gICAgICAgIGxlZnQubWFwLnNpemUgPyBsZWZ0Lm1hcCA6IHJpZ2h0Lm1hcDtcbiAgICB2YXIgbWVyZ2VkID0geyBpbmZvOiBpbmZvLCBtYXA6IG1hcCB9O1xuICAgIGlmIChuZWVkVG9NZXJnZU1hcHMpIHtcbiAgICAgICAgdmFyIHJlbWFpbmluZ1JpZ2h0S2V5c18xID0gbmV3IFNldChyaWdodC5tYXAua2V5cygpKTtcbiAgICAgICAgbGVmdC5tYXAuZm9yRWFjaChmdW5jdGlvbiAobGVmdFRyZWUsIGtleSkge1xuICAgICAgICAgICAgbWVyZ2VkLm1hcC5zZXQoa2V5LCBtZXJnZU1lcmdlVHJlZXMobGVmdFRyZWUsIHJpZ2h0Lm1hcC5nZXQoa2V5KSkpO1xuICAgICAgICAgICAgcmVtYWluaW5nUmlnaHRLZXlzXzEuZGVsZXRlKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1haW5pbmdSaWdodEtleXNfMS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIG1lcmdlZC5tYXAuc2V0KGtleSwgbWVyZ2VNZXJnZVRyZWVzKHJpZ2h0Lm1hcC5nZXQoa2V5KSwgbGVmdC5tYXAuZ2V0KGtleSkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtZXJnZWQ7XG59XG5mdW5jdGlvbiBtZXJnZVRyZWVJc0VtcHR5KHRyZWUpIHtcbiAgICByZXR1cm4gIXRyZWUgfHwgISh0cmVlLmluZm8gfHwgdHJlZS5tYXAuc2l6ZSk7XG59XG5mdW5jdGlvbiBtYXliZVJlY3ljbGVDaGlsZE1lcmdlVHJlZShfYSwgbmFtZSkge1xuICAgIHZhciBtYXAgPSBfYS5tYXA7XG4gICAgdmFyIGNoaWxkVHJlZSA9IG1hcC5nZXQobmFtZSk7XG4gICAgaWYgKGNoaWxkVHJlZSAmJiBtZXJnZVRyZWVJc0VtcHR5KGNoaWxkVHJlZSkpIHtcbiAgICAgICAgZW1wdHlNZXJnZVRyZWVQb29sLnB1c2goY2hpbGRUcmVlKTtcbiAgICAgICAgbWFwLmRlbGV0ZShuYW1lKTtcbiAgICB9XG59XG52YXIgd2FybmluZ3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiB3YXJuQWJvdXREYXRhTG9zcyhleGlzdGluZ1JlZiwgaW5jb21pbmdPYmosIHN0b3JlRmllbGROYW1lLCBzdG9yZSkge1xuICAgIHZhciBnZXRDaGlsZCA9IGZ1bmN0aW9uIChvYmpPclJlZikge1xuICAgICAgICB2YXIgY2hpbGQgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKG9iak9yUmVmLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY2hpbGQgPT09IFwib2JqZWN0XCIgJiYgY2hpbGQ7XG4gICAgfTtcbiAgICB2YXIgZXhpc3RpbmcgPSBnZXRDaGlsZChleGlzdGluZ1JlZik7XG4gICAgaWYgKCFleGlzdGluZylcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciBpbmNvbWluZyA9IGdldENoaWxkKGluY29taW5nT2JqKTtcbiAgICBpZiAoIWluY29taW5nKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShleGlzdGluZykpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoZXF1YWxpdHkuZXF1YWwoZXhpc3RpbmcsIGluY29taW5nKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChPYmplY3Qua2V5cyhleGlzdGluZykuZXZlcnkoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gc3RvcmUuZ2V0RmllbGRWYWx1ZShpbmNvbWluZywga2V5KSAhPT0gdm9pZCAwOyB9KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwYXJlbnRUeXBlID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShleGlzdGluZ1JlZiwgXCJfX3R5cGVuYW1lXCIpIHx8XG4gICAgICAgIHN0b3JlLmdldEZpZWxkVmFsdWUoaW5jb21pbmdPYmosIFwiX190eXBlbmFtZVwiKTtcbiAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgdmFyIHR5cGVEb3ROYW1lID0gXCJcIi5jb25jYXQocGFyZW50VHlwZSwgXCIuXCIpLmNvbmNhdChmaWVsZE5hbWUpO1xuICAgIGlmICh3YXJuaW5ncy5oYXModHlwZURvdE5hbWUpKVxuICAgICAgICByZXR1cm47XG4gICAgd2FybmluZ3MuYWRkKHR5cGVEb3ROYW1lKTtcbiAgICB2YXIgY2hpbGRUeXBlbmFtZXMgPSBbXTtcbiAgICBpZiAoIWlzQXJyYXkoZXhpc3RpbmcpICYmXG4gICAgICAgICFpc0FycmF5KGluY29taW5nKSkge1xuICAgICAgICBbZXhpc3RpbmcsIGluY29taW5nXS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShjaGlsZCwgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0eXBlbmFtZSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgICFjaGlsZFR5cGVuYW1lcy5pbmNsdWRlcyh0eXBlbmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFR5cGVuYW1lcy5wdXNoKHR5cGVuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIkNhY2hlIGRhdGEgbWF5IGJlIGxvc3Qgd2hlbiByZXBsYWNpbmcgdGhlIFwiLmNvbmNhdChmaWVsZE5hbWUsIFwiIGZpZWxkIG9mIGEgXCIpLmNvbmNhdChwYXJlbnRUeXBlLCBcIiBvYmplY3QuXFxuXFxuVG8gYWRkcmVzcyB0aGlzIHByb2JsZW0gKHdoaWNoIGlzIG5vdCBhIGJ1ZyBpbiBBcG9sbG8gQ2xpZW50KSwgXCIpLmNvbmNhdChjaGlsZFR5cGVuYW1lcy5sZW5ndGhcbiAgICAgICAgPyBcImVpdGhlciBlbnN1cmUgYWxsIG9iamVjdHMgb2YgdHlwZSBcIiArXG4gICAgICAgICAgICBjaGlsZFR5cGVuYW1lcy5qb2luKFwiIGFuZCBcIikgKyBcIiBoYXZlIGFuIElEIG9yIGEgY3VzdG9tIG1lcmdlIGZ1bmN0aW9uLCBvciBcIlxuICAgICAgICA6IFwiXCIsIFwiZGVmaW5lIGEgY3VzdG9tIG1lcmdlIGZ1bmN0aW9uIGZvciB0aGUgXCIpLmNvbmNhdCh0eXBlRG90TmFtZSwgXCIgZmllbGQsIHNvIEluTWVtb3J5Q2FjaGUgY2FuIHNhZmVseSBtZXJnZSB0aGVzZSBvYmplY3RzOlxcblxcbiAgZXhpc3Rpbmc6IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmcpLnNsaWNlKDAsIDEwMDApLCBcIlxcbiAgaW5jb21pbmc6IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoaW5jb21pbmcpLnNsaWNlKDAsIDEwMDApLCBcIlxcblxcbkZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZXNlIG9wdGlvbnMsIHBsZWFzZSByZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbjpcXG5cXG4gICogRW5zdXJpbmcgZW50aXR5IG9iamVjdHMgaGF2ZSBJRHM6IGh0dHBzOi8vZ28uYXBvbGxvLmRldi9jL2dlbmVyYXRpbmctdW5pcXVlLWlkZW50aWZpZXJzXFxuICAqIERlZmluaW5nIGN1c3RvbSBtZXJnZSBmdW5jdGlvbnM6IGh0dHBzOi8vZ28uYXBvbGxvLmRldi9jL21lcmdpbmctbm9uLW5vcm1hbGl6ZWQtb2JqZWN0c1xcblwiKSk7XG59XG5cbnZhciBJbk1lbW9yeUNhY2hlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoSW5NZW1vcnlDYWNoZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeUNhY2hlKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud2F0Y2hlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgX3RoaXMudHlwZW5hbWVEb2N1bWVudENhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICBfdGhpcy5tYWtlVmFyID0gbWFrZVZhcjtcbiAgICAgICAgX3RoaXMudHhDb3VudCA9IDA7XG4gICAgICAgIF90aGlzLmNvbmZpZyA9IG5vcm1hbGl6ZUNvbmZpZyhjb25maWcpO1xuICAgICAgICBfdGhpcy5hZGRUeXBlbmFtZSA9ICEhX3RoaXMuY29uZmlnLmFkZFR5cGVuYW1lO1xuICAgICAgICBfdGhpcy5wb2xpY2llcyA9IG5ldyBQb2xpY2llcyh7XG4gICAgICAgICAgICBjYWNoZTogX3RoaXMsXG4gICAgICAgICAgICBkYXRhSWRGcm9tT2JqZWN0OiBfdGhpcy5jb25maWcuZGF0YUlkRnJvbU9iamVjdCxcbiAgICAgICAgICAgIHBvc3NpYmxlVHlwZXM6IF90aGlzLmNvbmZpZy5wb3NzaWJsZVR5cGVzLFxuICAgICAgICAgICAgdHlwZVBvbGljaWVzOiBfdGhpcy5jb25maWcudHlwZVBvbGljaWVzLFxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb290U3RvcmUgPSB0aGlzLmRhdGEgPSBuZXcgZXhwb3J0cy5FbnRpdHlTdG9yZS5Sb290KHtcbiAgICAgICAgICAgIHBvbGljaWVzOiB0aGlzLnBvbGljaWVzLFxuICAgICAgICAgICAgcmVzdWx0Q2FjaGluZzogdGhpcy5jb25maWcucmVzdWx0Q2FjaGluZyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub3B0aW1pc3RpY0RhdGEgPSByb290U3RvcmUuc3R1bXA7XG4gICAgICAgIHRoaXMucmVzZXRSZXN1bHRDYWNoZSgpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVzZXRSZXN1bHRDYWNoZSA9IGZ1bmN0aW9uIChyZXNldFJlc3VsdElkZW50aXRpZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHByZXZpb3VzUmVhZGVyID0gdGhpcy5zdG9yZVJlYWRlcjtcbiAgICAgICAgdmFyIGZyYWdtZW50cyA9IHRoaXMuY29uZmlnLmZyYWdtZW50cztcbiAgICAgICAgdGhpcy5zdG9yZVdyaXRlciA9IG5ldyBTdG9yZVdyaXRlcih0aGlzLCB0aGlzLnN0b3JlUmVhZGVyID0gbmV3IFN0b3JlUmVhZGVyKHtcbiAgICAgICAgICAgIGNhY2hlOiB0aGlzLFxuICAgICAgICAgICAgYWRkVHlwZW5hbWU6IHRoaXMuYWRkVHlwZW5hbWUsXG4gICAgICAgICAgICByZXN1bHRDYWNoZU1heFNpemU6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hlTWF4U2l6ZSxcbiAgICAgICAgICAgIGNhbm9uaXplUmVzdWx0czogc2hvdWxkQ2Fub25pemVSZXN1bHRzKHRoaXMuY29uZmlnKSxcbiAgICAgICAgICAgIGNhbm9uOiByZXNldFJlc3VsdElkZW50aXRpZXNcbiAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgIDogcHJldmlvdXNSZWFkZXIgJiYgcHJldmlvdXNSZWFkZXIuY2Fub24sXG4gICAgICAgICAgICBmcmFnbWVudHM6IGZyYWdtZW50cyxcbiAgICAgICAgfSksIGZyYWdtZW50cyk7XG4gICAgICAgIHRoaXMubWF5YmVCcm9hZGNhc3RXYXRjaCA9IG9wdGltaXNtLndyYXAoZnVuY3Rpb24gKGMsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5icm9hZGNhc3RXYXRjaChjLCBvcHRpb25zKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbWF4OiB0aGlzLmNvbmZpZy5yZXN1bHRDYWNoZU1heFNpemUsXG4gICAgICAgICAgICBtYWtlQ2FjaGVLZXk6IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gYy5vcHRpbWlzdGljID8gX3RoaXMub3B0aW1pc3RpY0RhdGEgOiBfdGhpcy5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c1Jlc3VsdENhY2hpbmcoc3RvcmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpbWlzdGljID0gYy5vcHRpbWlzdGljLCBpZCA9IGMuaWQsIHZhcmlhYmxlcyA9IGMudmFyaWFibGVzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUubWFrZUNhY2hlS2V5KGMucXVlcnksIGMuY2FsbGJhY2ssIGNhbm9uaWNhbFN0cmluZ2lmeSh7IG9wdGltaXN0aWM6IG9wdGltaXN0aWMsIGlkOiBpZCwgdmFyaWFibGVzOiB2YXJpYWJsZXMgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG5ldyBTZXQoW1xuICAgICAgICAgICAgdGhpcy5kYXRhLmdyb3VwLFxuICAgICAgICAgICAgdGhpcy5vcHRpbWlzdGljRGF0YS5ncm91cCxcbiAgICAgICAgXSkuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXApIHsgcmV0dXJuIGdyb3VwLnJlc2V0Q2FjaGluZygpOyB9KTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlc3RvcmUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgaWYgKGRhdGEpXG4gICAgICAgICAgICB0aGlzLmRhdGEucmVwbGFjZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIChvcHRpbWlzdGljID8gdGhpcy5vcHRpbWlzdGljRGF0YSA6IHRoaXMuZGF0YSkuZXh0cmFjdCgpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYSA9IG9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEsIHJldHVyblBhcnRpYWxEYXRhID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVJlYWRlci5kaWZmUXVlcnlBZ2FpbnN0U3RvcmUodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHN0b3JlOiBvcHRpb25zLm9wdGltaXN0aWMgPyB0aGlzLm9wdGltaXN0aWNEYXRhIDogdGhpcy5kYXRhLCBjb25maWc6IHRoaXMuY29uZmlnLCByZXR1cm5QYXJ0aWFsRGF0YTogcmV0dXJuUGFydGlhbERhdGEgfSkpLnJlc3VsdCB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1pc3NpbmdGaWVsZEVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICArK3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlV3JpdGVyLndyaXRlVG9TdG9yZSh0aGlzLmRhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKCEtLXRoaXMudHhDb3VudCAmJiBvcHRpb25zLmJyb2FkY2FzdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUubW9kaWZ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKG9wdGlvbnMsIFwiaWRcIikgJiYgIW9wdGlvbnMuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RvcmUgPSBvcHRpb25zLm9wdGltaXN0aWNcbiAgICAgICAgICAgID8gdGhpcy5vcHRpbWlzdGljRGF0YVxuICAgICAgICAgICAgOiB0aGlzLmRhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICArK3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZS5tb2RpZnkob3B0aW9ucy5pZCB8fCBcIlJPT1RfUVVFUllcIiwgb3B0aW9ucy5maWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKCEtLXRoaXMudHhDb3VudCAmJiBvcHRpb25zLmJyb2FkY2FzdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZGlmZiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlUmVhZGVyLmRpZmZRdWVyeUFnYWluc3RTdG9yZSh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgc3RvcmU6IG9wdGlvbnMub3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGEsIHJvb3RJZDogb3B0aW9ucy5pZCB8fCBcIlJPT1RfUVVFUllcIiwgY29uZmlnOiB0aGlzLmNvbmZpZyB9KSk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uICh3YXRjaCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMud2F0Y2hlcy5zaXplKSB7XG4gICAgICAgICAgICByZWNhbGxDYWNoZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndhdGNoZXMuYWRkKHdhdGNoKTtcbiAgICAgICAgaWYgKHdhdGNoLmltbWVkaWF0ZSkge1xuICAgICAgICAgICAgdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoKHdhdGNoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLndhdGNoZXMuZGVsZXRlKHdhdGNoKSAmJiAhX3RoaXMud2F0Y2hlcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgZm9yZ2V0Q2FjaGUoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMubWF5YmVCcm9hZGNhc3RXYXRjaC5mb3JnZXQod2F0Y2gpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZ2MgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBjYW5vbmljYWxTdHJpbmdpZnkucmVzZXQoKTtcbiAgICAgICAgdmFyIGlkcyA9IHRoaXMub3B0aW1pc3RpY0RhdGEuZ2MoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgIXRoaXMudHhDb3VudCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVzZXRSZXN1bHRDYWNoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRSZXN1bHRDYWNoZShvcHRpb25zLnJlc2V0UmVzdWx0SWRlbnRpdGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLnJlc2V0UmVzdWx0SWRlbnRpdGllcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVSZWFkZXIucmVzZXRDYW5vbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZXRhaW4gPSBmdW5jdGlvbiAocm9vdElkLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIHJldHVybiAob3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGEpLnJldGFpbihyb290SWQpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIChyb290SWQsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgcmV0dXJuIChvcHRpbWlzdGljID8gdGhpcy5vcHRpbWlzdGljRGF0YSA6IHRoaXMuZGF0YSkucmVsZWFzZShyb290SWQpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0KSlcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuX19yZWY7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2xpY2llcy5pZGVudGlmeShvYmplY3QpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmV2aWN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLmlkKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwob3B0aW9ucywgXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgaWQ6IFwiUk9PVF9RVUVSWVwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICArK3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGltaXN0aWNEYXRhLmV2aWN0KG9wdGlvbnMsIHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoIS0tdGhpcy50eENvdW50ICYmIG9wdGlvbnMuYnJvYWRjYXN0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICBjYW5vbmljYWxTdHJpbmdpZnkucmVzZXQoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kaXNjYXJkV2F0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy53YXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKHdhdGNoKSB7IHJldHVybiBfdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoLmZvcmdldCh3YXRjaCk7IH0pO1xuICAgICAgICAgICAgdGhpcy53YXRjaGVzLmNsZWFyKCk7XG4gICAgICAgICAgICBmb3JnZXRDYWNoZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlbW92ZU9wdGltaXN0aWMgPSBmdW5jdGlvbiAoaWRUb1JlbW92ZSkge1xuICAgICAgICB2YXIgbmV3T3B0aW1pc3RpY0RhdGEgPSB0aGlzLm9wdGltaXN0aWNEYXRhLnJlbW92ZUxheWVyKGlkVG9SZW1vdmUpO1xuICAgICAgICBpZiAobmV3T3B0aW1pc3RpY0RhdGEgIT09IHRoaXMub3B0aW1pc3RpY0RhdGEpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW1pc3RpY0RhdGEgPSBuZXdPcHRpbWlzdGljRGF0YTtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB1cGRhdGUgPSBvcHRpb25zLnVwZGF0ZSwgX2EgPSBvcHRpb25zLm9wdGltaXN0aWMsIG9wdGltaXN0aWMgPSBfYSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hLCByZW1vdmVPcHRpbWlzdGljID0gb3B0aW9ucy5yZW1vdmVPcHRpbWlzdGljLCBvbldhdGNoVXBkYXRlZCA9IG9wdGlvbnMub25XYXRjaFVwZGF0ZWQ7XG4gICAgICAgIHZhciB1cGRhdGVSZXN1bHQ7XG4gICAgICAgIHZhciBwZXJmb3JtID0gZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcywgZGF0YSA9IF9hLmRhdGEsIG9wdGltaXN0aWNEYXRhID0gX2Eub3B0aW1pc3RpY0RhdGE7XG4gICAgICAgICAgICArK190aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5kYXRhID0gX3RoaXMub3B0aW1pc3RpY0RhdGEgPSBsYXllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVJlc3VsdCA9IHVwZGF0ZShfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAtLV90aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW1pc3RpY0RhdGEgPSBvcHRpbWlzdGljRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGFscmVhZHlEaXJ0eSA9IG5ldyBTZXQoKTtcbiAgICAgICAgaWYgKG9uV2F0Y2hVcGRhdGVkICYmICF0aGlzLnR4Q291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcyh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgb25XYXRjaFVwZGF0ZWQ6IGZ1bmN0aW9uICh3YXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGlydHkuYWRkKHdhdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW1pc3RpYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW1pc3RpY0RhdGEgPSB0aGlzLm9wdGltaXN0aWNEYXRhLmFkZExheWVyKG9wdGltaXN0aWMsIHBlcmZvcm0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGltaXN0aWMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwZXJmb3JtKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwZXJmb3JtKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZW1vdmVPcHRpbWlzdGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGltaXN0aWNEYXRhID0gdGhpcy5vcHRpbWlzdGljRGF0YS5yZW1vdmVMYXllcihyZW1vdmVPcHRpbWlzdGljKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25XYXRjaFVwZGF0ZWQgJiYgYWxyZWFkeURpcnR5LnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcyh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgb25XYXRjaFVwZGF0ZWQ6IGZ1bmN0aW9uICh3YXRjaCwgZGlmZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gb25XYXRjaFVwZGF0ZWQuY2FsbCh0aGlzLCB3YXRjaCwgZGlmZik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGlydHkuZGVsZXRlKHdhdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICAgICAgaWYgKGFscmVhZHlEaXJ0eS5zaXplKSB7XG4gICAgICAgICAgICAgICAgYWxyZWFkeURpcnR5LmZvckVhY2goZnVuY3Rpb24gKHdhdGNoKSB7IHJldHVybiBfdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoLmRpcnR5KHdhdGNoKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVwZGF0ZVJlc3VsdDtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnBlcmZvcm1UcmFuc2FjdGlvbiA9IGZ1bmN0aW9uICh1cGRhdGUsIG9wdGltaXN0aWNJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXRjaCh7XG4gICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IG9wdGltaXN0aWNJZCB8fCAob3B0aW1pc3RpY0lkICE9PSBudWxsKSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS50cmFuc2Zvcm1Eb2N1bWVudCA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICBpZiAodGhpcy5hZGRUeXBlbmFtZSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudHlwZW5hbWVEb2N1bWVudENhY2hlLmdldChkb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHV0aWxpdGllcy5hZGRUeXBlbmFtZVRvRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZW5hbWVEb2N1bWVudENhY2hlLnNldChkb2N1bWVudCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVuYW1lRG9jdW1lbnRDYWNoZS5zZXQocmVzdWx0LCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS50cmFuc2Zvcm1Gb3JMaW5rID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHZhciBmcmFnbWVudHMgPSB0aGlzLmNvbmZpZy5mcmFnbWVudHM7XG4gICAgICAgIHJldHVybiBmcmFnbWVudHNcbiAgICAgICAgICAgID8gZnJhZ21lbnRzLnRyYW5zZm9ybShkb2N1bWVudClcbiAgICAgICAgICAgIDogZG9jdW1lbnQ7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5icm9hZGNhc3RXYXRjaGVzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLnR4Q291bnQpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBfdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoKGMsIG9wdGlvbnMpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuYnJvYWRjYXN0V2F0Y2ggPSBmdW5jdGlvbiAoYywgb3B0aW9ucykge1xuICAgICAgICB2YXIgbGFzdERpZmYgPSBjLmxhc3REaWZmO1xuICAgICAgICB2YXIgZGlmZiA9IHRoaXMuZGlmZihjKTtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChjLm9wdGltaXN0aWMgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5vcHRpbWlzdGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgZGlmZi5mcm9tT3B0aW1pc3RpY1RyYW5zYWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9uV2F0Y2hVcGRhdGVkICYmXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5vbldhdGNoVXBkYXRlZC5jYWxsKHRoaXMsIGMsIGRpZmYsIGxhc3REaWZmKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsYXN0RGlmZiB8fCAhZXF1YWxpdHkuZXF1YWwobGFzdERpZmYucmVzdWx0LCBkaWZmLnJlc3VsdCkpIHtcbiAgICAgICAgICAgIGMuY2FsbGJhY2soYy5sYXN0RGlmZiA9IGRpZmYsIGxhc3REaWZmKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEluTWVtb3J5Q2FjaGU7XG59KEFwb2xsb0NhY2hlKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50UmVnaXN0cnkoKSB7XG4gICAgdmFyIGZyYWdtZW50cyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGZyYWdtZW50c1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IChGcmFnbWVudFJlZ2lzdHJ5LmJpbmQuYXBwbHkoRnJhZ21lbnRSZWdpc3RyeSwgdHNsaWIuX19zcHJlYWRBcnJheShbdm9pZCAwXSwgZnJhZ21lbnRzLCBmYWxzZSkpKSgpO1xufVxudmFyIGFycmF5TGlrZUZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbnZhciBGcmFnbWVudFJlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGcmFnbWVudFJlZ2lzdHJ5KCkge1xuICAgICAgICB2YXIgZnJhZ21lbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBmcmFnbWVudHNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZ2lzdHJ5ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5yZXNldENhY2hlcygpO1xuICAgICAgICBpZiAoZnJhZ21lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlci5hcHBseSh0aGlzLCBmcmFnbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEZyYWdtZW50UmVnaXN0cnkucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGVmaW5pdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGFycmF5TGlrZUZvckVhY2guY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICAgIHV0aWxpdGllcy5nZXRGcmFnbWVudERlZmluaXRpb25zKGRvYykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zLnNldChub2RlLm5hbWUudmFsdWUsIG5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlLCBuYW1lKSB7XG4gICAgICAgICAgICBpZiAobm9kZSAhPT0gX3RoaXMucmVnaXN0cnlbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWdpc3RyeVtuYW1lXSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW52YWxpZGF0ZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRnJhZ21lbnRSZWdpc3RyeS5wcm90b3R5cGUuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7IH07XG4gICAgRnJhZ21lbnRSZWdpc3RyeS5wcm90b3R5cGUucmVzZXRDYWNoZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW52YWxpZGF0ZSA9ICh0aGlzLmxvb2t1cCA9IHRoaXMuY2FjaGVVbmFyeU1ldGhvZChcImxvb2t1cFwiKSkuZGlydHk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5jYWNoZVVuYXJ5TWV0aG9kKFwidHJhbnNmb3JtXCIpO1xuICAgICAgICB0aGlzLmZpbmRGcmFnbWVudFNwcmVhZHMgPSB0aGlzLmNhY2hlVW5hcnlNZXRob2QoXCJmaW5kRnJhZ21lbnRTcHJlYWRzXCIpO1xuICAgIH07XG4gICAgRnJhZ21lbnRSZWdpc3RyeS5wcm90b3R5cGUuY2FjaGVVbmFyeU1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciByZWdpc3RyeSA9IHRoaXM7XG4gICAgICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IEZyYWdtZW50UmVnaXN0cnkucHJvdG90eXBlW25hbWVdO1xuICAgICAgICByZXR1cm4gb3B0aW1pc20ud3JhcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxNZXRob2QuYXBwbHkocmVnaXN0cnksIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1ha2VDYWNoZUtleTogZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gYXJnOyB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEZyYWdtZW50UmVnaXN0cnkucHJvdG90eXBlLmxvb2t1cCA9IGZ1bmN0aW9uIChmcmFnbWVudE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0cnlbZnJhZ21lbnROYW1lXSB8fCBudWxsO1xuICAgIH07XG4gICAgRnJhZ21lbnRSZWdpc3RyeS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkZWZpbmVkID0gbmV3IE1hcCgpO1xuICAgICAgICB1dGlsaXRpZXMuZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhkb2N1bWVudCkuZm9yRWFjaChmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgICAgICBkZWZpbmVkLnNldChkZWYubmFtZS52YWx1ZSwgZGVmKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB1bmJvdW5kID0gbmV3IFNldCgpO1xuICAgICAgICB2YXIgZW5xdWV1ZSA9IGZ1bmN0aW9uIChzcHJlYWROYW1lKSB7XG4gICAgICAgICAgICBpZiAoIWRlZmluZWQuaGFzKHNwcmVhZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdW5ib3VuZC5hZGQoc3ByZWFkTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBlbnF1ZXVlQ2hpbGRTcHJlYWRzID0gZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIE9iamVjdC5rZXlzKF90aGlzLmZpbmRGcmFnbWVudFNwcmVhZHMobm9kZSkpLmZvckVhY2goZW5xdWV1ZSk7IH07XG4gICAgICAgIGVucXVldWVDaGlsZFNwcmVhZHMoZG9jdW1lbnQpO1xuICAgICAgICB2YXIgbWlzc2luZyA9IFtdO1xuICAgICAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdW5ib3VuZC5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnbWVudE5hbWUpIHtcbiAgICAgICAgICAgIHZhciBrbm93bkZyYWdtZW50RGVmID0gZGVmaW5lZC5nZXQoZnJhZ21lbnROYW1lKTtcbiAgICAgICAgICAgIGlmIChrbm93bkZyYWdtZW50RGVmKSB7XG4gICAgICAgICAgICAgICAgZW5xdWV1ZUNoaWxkU3ByZWFkcyhtYXBbZnJhZ21lbnROYW1lXSA9IGtub3duRnJhZ21lbnREZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZy5wdXNoKGZyYWdtZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIGRlZiA9IF90aGlzLmxvb2t1cChmcmFnbWVudE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChkZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5xdWV1ZUNoaWxkU3ByZWFkcyhtYXBbZnJhZ21lbnROYW1lXSA9IGRlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1pc3NpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgZGVmc1RvQXBwZW5kXzEgPSBbXTtcbiAgICAgICAgICAgIG1pc3NpbmcuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBkZWYgPSBtYXBbbmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGRlZikge1xuICAgICAgICAgICAgICAgICAgICBkZWZzVG9BcHBlbmRfMS5wdXNoKGRlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZGVmc1RvQXBwZW5kXzEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZG9jdW1lbnQpLCB7IGRlZmluaXRpb25zOiBkb2N1bWVudC5kZWZpbml0aW9ucy5jb25jYXQoZGVmc1RvQXBwZW5kXzEpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9O1xuICAgIEZyYWdtZW50UmVnaXN0cnkucHJvdG90eXBlLmZpbmRGcmFnbWVudFNwcmVhZHMgPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICB2YXIgc3ByZWFkcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGdyYXBocWwudmlzaXQocm9vdCwge1xuICAgICAgICAgICAgRnJhZ21lbnRTcHJlYWQ6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgc3ByZWFkc1tub2RlLm5hbWUudmFsdWVdID0gbm9kZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3ByZWFkcztcbiAgICB9O1xuICAgIHJldHVybiBGcmFnbWVudFJlZ2lzdHJ5O1xufSgpKTtcblxuZXhwb3J0cy5pc1JlZmVyZW5jZSA9IHV0aWxpdGllcy5pc1JlZmVyZW5jZTtcbmV4cG9ydHMubWFrZVJlZmVyZW5jZSA9IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlO1xuZXhwb3J0cy5BcG9sbG9DYWNoZSA9IEFwb2xsb0NhY2hlO1xuZXhwb3J0cy5Jbk1lbW9yeUNhY2hlID0gSW5NZW1vcnlDYWNoZTtcbmV4cG9ydHMuTWlzc2luZ0ZpZWxkRXJyb3IgPSBNaXNzaW5nRmllbGRFcnJvcjtcbmV4cG9ydHMuUG9saWNpZXMgPSBQb2xpY2llcztcbmV4cG9ydHMuY2FjaGVTbG90ID0gY2FjaGVTbG90O1xuZXhwb3J0cy5jYW5vbmljYWxTdHJpbmdpZnkgPSBjYW5vbmljYWxTdHJpbmdpZnk7XG5leHBvcnRzLmNyZWF0ZUZyYWdtZW50UmVnaXN0cnkgPSBjcmVhdGVGcmFnbWVudFJlZ2lzdHJ5O1xuZXhwb3J0cy5kZWZhdWx0RGF0YUlkRnJvbU9iamVjdCA9IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0O1xuZXhwb3J0cy5maWVsZE5hbWVGcm9tU3RvcmVOYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZTtcbmV4cG9ydHMubWFrZVZhciA9IG1ha2VWYXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWNoZS5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4uL2xpbmsvY29yZScpO1xudmFyIGh0dHAgPSByZXF1aXJlKCcuLi9saW5rL2h0dHAnKTtcbnZhciBlcXVhbGl0eSA9IHJlcXVpcmUoJ0B3cnkvZXF1YWxpdHknKTtcbnZhciBjYWNoZSA9IHJlcXVpcmUoJy4uL2NhY2hlJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzJyk7XG52YXIgZXJyb3JzID0gcmVxdWlyZSgnLi4vZXJyb3JzJyk7XG52YXIgZ3JhcGhxbCA9IHJlcXVpcmUoJ2dyYXBocWwnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2xpbmsvdXRpbHMnKTtcbnZhciB0c0ludmFyaWFudCA9IHJlcXVpcmUoJ3RzLWludmFyaWFudCcpO1xudmFyIGdyYXBocWxUYWcgPSByZXF1aXJlKCdncmFwaHFsLXRhZycpO1xuXG52YXIgdmVyc2lvbiA9ICczLjcuOCc7XG5cbmZ1bmN0aW9uIGlzTm9uRW1wdHlBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwO1xufVxuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxudmFyIGhhc093blByb3BlcnR5JDIgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGRlZmF1bHRSZWNvbmNpbGVyID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzLm1lcmdlKHRhcmdldFtwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xufTtcbnZhciBEZWVwTWVyZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWVwTWVyZ2VyKHJlY29uY2lsZXIpIHtcbiAgICAgICAgaWYgKHJlY29uY2lsZXIgPT09IHZvaWQgMCkgeyByZWNvbmNpbGVyID0gZGVmYXVsdFJlY29uY2lsZXI7IH1cbiAgICAgICAgdGhpcy5yZWNvbmNpbGVyID0gcmVjb25jaWxlcjtcbiAgICAgICAgdGhpcy5pc09iamVjdCA9IGlzTm9uTnVsbE9iamVjdDtcbiAgICAgICAgdGhpcy5wYXN0Q29waWVzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBEZWVwTWVyZ2VyLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29udGV4dCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29udGV4dFtfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KHNvdXJjZSkgJiYgaXNOb25OdWxsT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlS2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5JDIuY2FsbCh0YXJnZXQsIHNvdXJjZUtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFZhbHVlID0gdGFyZ2V0W3NvdXJjZUtleV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2Vbc291cmNlS2V5XSAhPT0gdGFyZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5yZWNvbmNpbGVyLmFwcGx5KF90aGlzLCB0c2xpYi5fX3NwcmVhZEFycmF5KFt0YXJnZXQsIHNvdXJjZSwgc291cmNlS2V5XSwgY29udGV4dCwgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRhcmdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gX3RoaXMuc2hhbGxvd0NvcHlGb3JNZXJnZSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtzb3VyY2VLZXldID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBfdGhpcy5zaGFsbG93Q29weUZvck1lcmdlKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtzb3VyY2VLZXldID0gc291cmNlW3NvdXJjZUtleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfTtcbiAgICBEZWVwTWVyZ2VyLnByb3RvdHlwZS5zaGFsbG93Q29weUZvck1lcmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChpc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFzdENvcGllcy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRzbGliLl9fYXNzaWduKHsgX19wcm90b19fOiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpIH0sIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wYXN0Q29waWVzLmFkZCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIERlZXBNZXJnZXI7XG59KCkpO1xuXG5mdW5jdGlvbiBpc0V4ZWN1dGlvblBhdGNoSW5jcmVtZW50YWxSZXN1bHQodmFsdWUpIHtcbiAgICByZXR1cm4gXCJpbmNyZW1lbnRhbFwiIGluIHZhbHVlO1xufVxuZnVuY3Rpb24gaXNFeGVjdXRpb25QYXRjaEluaXRpYWxSZXN1bHQodmFsdWUpIHtcbiAgICByZXR1cm4gXCJoYXNOZXh0XCIgaW4gdmFsdWUgJiYgXCJkYXRhXCIgaW4gdmFsdWU7XG59XG5mdW5jdGlvbiBpc0V4ZWN1dGlvblBhdGNoUmVzdWx0KHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc0V4ZWN1dGlvblBhdGNoSW5jcmVtZW50YWxSZXN1bHQodmFsdWUpIHx8XG4gICAgICAgIGlzRXhlY3V0aW9uUGF0Y2hJbml0aWFsUmVzdWx0KHZhbHVlKSk7XG59XG5mdW5jdGlvbiBtZXJnZUluY3JlbWVudGFsRGF0YShwcmV2UmVzdWx0LCByZXN1bHQpIHtcbiAgICB2YXIgbWVyZ2VkRGF0YSA9IHByZXZSZXN1bHQ7XG4gICAgdmFyIG1lcmdlciA9IG5ldyBEZWVwTWVyZ2VyKCk7XG4gICAgaWYgKGlzRXhlY3V0aW9uUGF0Y2hJbmNyZW1lbnRhbFJlc3VsdChyZXN1bHQpICYmXG4gICAgICAgIGlzTm9uRW1wdHlBcnJheShyZXN1bHQuaW5jcmVtZW50YWwpKSB7XG4gICAgICAgIHJlc3VsdC5pbmNyZW1lbnRhbC5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBfYS5kYXRhLCBwYXRoID0gX2EucGF0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHBhdGhbaV07XG4gICAgICAgICAgICAgICAgdmFyIGlzTnVtZXJpY0tleSA9ICFpc05hTigra2V5KTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50XzEgPSBpc051bWVyaWNLZXkgPyBbXSA6IHt9O1xuICAgICAgICAgICAgICAgIHBhcmVudF8xW2tleV0gPSBkYXRhO1xuICAgICAgICAgICAgICAgIGRhdGEgPSBwYXJlbnRfMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lcmdlZERhdGEgPSBtZXJnZXIubWVyZ2UobWVyZ2VkRGF0YSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkRGF0YTtcbn1cblxuZXhwb3J0cy5OZXR3b3JrU3RhdHVzID0gdm9pZCAwO1xuKGZ1bmN0aW9uIChOZXR3b3JrU3RhdHVzKSB7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wibG9hZGluZ1wiXSA9IDFdID0gXCJsb2FkaW5nXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wic2V0VmFyaWFibGVzXCJdID0gMl0gPSBcInNldFZhcmlhYmxlc1wiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcImZldGNoTW9yZVwiXSA9IDNdID0gXCJmZXRjaE1vcmVcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJyZWZldGNoXCJdID0gNF0gPSBcInJlZmV0Y2hcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJwb2xsXCJdID0gNl0gPSBcInBvbGxcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJyZWFkeVwiXSA9IDddID0gXCJyZWFkeVwiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcImVycm9yXCJdID0gOF0gPSBcImVycm9yXCI7XG59KShleHBvcnRzLk5ldHdvcmtTdGF0dXMgfHwgKGV4cG9ydHMuTmV0d29ya1N0YXR1cyA9IHt9KSk7XG5mdW5jdGlvbiBpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQobmV0d29ya1N0YXR1cykge1xuICAgIHJldHVybiBuZXR3b3JrU3RhdHVzID8gbmV0d29ya1N0YXR1cyA8IDcgOiBmYWxzZTtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24sIGhhc093blByb3BlcnR5JDEgPSBPYmplY3QuaGFzT3duUHJvcGVydHk7XG52YXIgT2JzZXJ2YWJsZVF1ZXJ5ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoT2JzZXJ2YWJsZVF1ZXJ5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVRdWVyeShfYSkge1xuICAgICAgICB2YXIgcXVlcnlNYW5hZ2VyID0gX2EucXVlcnlNYW5hZ2VyLCBxdWVyeUluZm8gPSBfYS5xdWVyeUluZm8sIG9wdGlvbnMgPSBfYS5vcHRpb25zO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1Yk9ic2VydmVyID0gb2JzZXJ2ZXIuX3N1YnNjcmlwdGlvbi5fb2JzZXJ2ZXI7XG4gICAgICAgICAgICAgICAgaWYgKHN1Yk9ic2VydmVyICYmICFzdWJPYnNlcnZlci5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzdWJPYnNlcnZlci5lcnJvciA9IGRlZmF1bHRTdWJzY3JpcHRpb25PYnNlcnZlckVycm9yQ2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7IH1cbiAgICAgICAgICAgIHZhciBmaXJzdCA9ICFfdGhpcy5vYnNlcnZlcnMuc2l6ZTtcbiAgICAgICAgICAgIF90aGlzLm9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgdmFyIGxhc3QgPSBfdGhpcy5sYXN0O1xuICAgICAgICAgICAgaWYgKGxhc3QgJiYgbGFzdC5lcnJvcikge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yICYmIG9ic2VydmVyLmVycm9yKGxhc3QuZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGFzdCAmJiBsYXN0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQgJiYgb2JzZXJ2ZXIubmV4dChsYXN0LnJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW9ic2VydmUoKS5jYXRjaChmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMub2JzZXJ2ZXJzLmRlbGV0ZShvYnNlcnZlcikgJiYgIV90aGlzLm9ic2VydmVycy5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRlYXJEb3duUXVlcnkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLnF1ZXJ5SW5mbyA9IHF1ZXJ5SW5mbztcbiAgICAgICAgX3RoaXMucXVlcnlNYW5hZ2VyID0gcXVlcnlNYW5hZ2VyO1xuICAgICAgICBfdGhpcy5pc1Rvcm5Eb3duID0gZmFsc2U7XG4gICAgICAgIHZhciBfYiA9IHF1ZXJ5TWFuYWdlci5kZWZhdWx0T3B0aW9ucy53YXRjaFF1ZXJ5LCBfYyA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iLCBfZCA9IF9jLmZldGNoUG9saWN5LCBkZWZhdWx0RmV0Y2hQb2xpY3kgPSBfZCA9PT0gdm9pZCAwID8gXCJjYWNoZS1maXJzdFwiIDogX2Q7XG4gICAgICAgIHZhciBfZSA9IG9wdGlvbnMuZmV0Y2hQb2xpY3ksIGZldGNoUG9saWN5ID0gX2UgPT09IHZvaWQgMCA/IGRlZmF1bHRGZXRjaFBvbGljeSA6IF9lLCBfZiA9IG9wdGlvbnMuaW5pdGlhbEZldGNoUG9saWN5LCBpbml0aWFsRmV0Y2hQb2xpY3kgPSBfZiA9PT0gdm9pZCAwID8gKGZldGNoUG9saWN5ID09PSBcInN0YW5kYnlcIiA/IGRlZmF1bHRGZXRjaFBvbGljeSA6IGZldGNoUG9saWN5KSA6IF9mO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGluaXRpYWxGZXRjaFBvbGljeTogaW5pdGlhbEZldGNoUG9saWN5LCBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3kgfSk7XG4gICAgICAgIF90aGlzLnF1ZXJ5SWQgPSBxdWVyeUluZm8ucXVlcnlJZCB8fCBxdWVyeU1hbmFnZXIuZ2VuZXJhdGVRdWVyeUlkKCk7XG4gICAgICAgIHZhciBvcERlZiA9IHV0aWxpdGllcy5nZXRPcGVyYXRpb25EZWZpbml0aW9uKF90aGlzLnF1ZXJ5KTtcbiAgICAgICAgX3RoaXMucXVlcnlOYW1lID0gb3BEZWYgJiYgb3BEZWYubmFtZSAmJiBvcERlZi5uYW1lLnZhbHVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLCBcInF1ZXJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIudHJhbnNmb3JtKHRoaXMub3B0aW9ucy5xdWVyeSkuZG9jdW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZSwgXCJ2YXJpYWJsZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudmFyaWFibGVzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLm9ic2VydmVycy5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5xdWVyeU1hbmFnZXIucmVtb3ZlUXVlcnkoX3RoaXMucXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBfdGhpcy5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuZ2V0Q3VycmVudFJlc3VsdCA9IGZ1bmN0aW9uIChzYXZlQXNMYXN0UmVzdWx0KSB7XG4gICAgICAgIGlmIChzYXZlQXNMYXN0UmVzdWx0ID09PSB2b2lkIDApIHsgc2F2ZUFzTGFzdFJlc3VsdCA9IHRydWU7IH1cbiAgICAgICAgdmFyIGxhc3RSZXN1bHQgPSB0aGlzLmdldExhc3RSZXN1bHQodHJ1ZSk7XG4gICAgICAgIHZhciBuZXR3b3JrU3RhdHVzID0gdGhpcy5xdWVyeUluZm8ubmV0d29ya1N0YXR1cyB8fFxuICAgICAgICAgICAgKGxhc3RSZXN1bHQgJiYgbGFzdFJlc3VsdC5uZXR3b3JrU3RhdHVzKSB8fFxuICAgICAgICAgICAgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlYWR5O1xuICAgICAgICB2YXIgcmVzdWx0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGxhc3RSZXN1bHQpLCB7IGxvYWRpbmc6IGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChuZXR3b3JrU3RhdHVzKSwgbmV0d29ya1N0YXR1czogbmV0d29ya1N0YXR1cyB9KTtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5vcHRpb25zLmZldGNoUG9saWN5LCBmZXRjaFBvbGljeSA9IF9hID09PSB2b2lkIDAgPyBcImNhY2hlLWZpcnN0XCIgOiBfYTtcbiAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPT09ICduby1jYWNoZScgfHxcbiAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSAnc3RhbmRieScgfHxcbiAgICAgICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnRyYW5zZm9ybSh0aGlzLm9wdGlvbnMucXVlcnkpLmhhc0ZvcmNlZFJlc29sdmVycykgO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkaWZmID0gdGhpcy5xdWVyeUluZm8uZ2V0RGlmZigpO1xuICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUgfHwgdGhpcy5vcHRpb25zLnJldHVyblBhcnRpYWxEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBkaWZmLnJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcXVhbGl0eS5lcXVhbChyZXN1bHQuZGF0YSwge30pKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHQucGFydGlhbDtcbiAgICAgICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSAmJlxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgKGZldGNoUG9saWN5ID09PSAnY2FjaGUtZmlyc3QnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ2NhY2hlLW9ubHknKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQubmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWFkeTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucGFydGlhbCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19ERVZfXyAmJlxuICAgICAgICAgICAgICAgICFkaWZmLmNvbXBsZXRlICYmXG4gICAgICAgICAgICAgICAgIXRoaXMub3B0aW9ucy5wYXJ0aWFsUmVmZXRjaCAmJlxuICAgICAgICAgICAgICAgICFyZXN1bHQubG9hZGluZyAmJlxuICAgICAgICAgICAgICAgICFyZXN1bHQuZGF0YSAmJlxuICAgICAgICAgICAgICAgICFyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBsb2dNaXNzaW5nRmllbGRFcnJvcnMoZGlmZi5taXNzaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2F2ZUFzTGFzdFJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMYXN0UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuaXNEaWZmZXJlbnRGcm9tTGFzdFJlc3VsdCA9IGZ1bmN0aW9uIChuZXdSZXN1bHQsIHZhcmlhYmxlcykge1xuICAgICAgICByZXR1cm4gKCF0aGlzLmxhc3QgfHxcbiAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbCh0aGlzLmxhc3QucmVzdWx0LCBuZXdSZXN1bHQpIHx8XG4gICAgICAgICAgICAodmFyaWFibGVzICYmICFlcXVhbGl0eS5lcXVhbCh0aGlzLmxhc3QudmFyaWFibGVzLCB2YXJpYWJsZXMpKSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmdldExhc3QgPSBmdW5jdGlvbiAoa2V5LCB2YXJpYWJsZXNNdXN0TWF0Y2gpIHtcbiAgICAgICAgdmFyIGxhc3QgPSB0aGlzLmxhc3Q7XG4gICAgICAgIGlmIChsYXN0ICYmXG4gICAgICAgICAgICBsYXN0W2tleV0gJiZcbiAgICAgICAgICAgICghdmFyaWFibGVzTXVzdE1hdGNoIHx8IGVxdWFsaXR5LmVxdWFsKGxhc3QudmFyaWFibGVzLCB0aGlzLnZhcmlhYmxlcykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFzdFtrZXldO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmdldExhc3RSZXN1bHQgPSBmdW5jdGlvbiAodmFyaWFibGVzTXVzdE1hdGNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldExhc3QoXCJyZXN1bHRcIiwgdmFyaWFibGVzTXVzdE1hdGNoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuZ2V0TGFzdEVycm9yID0gZnVuY3Rpb24gKHZhcmlhYmxlc011c3RNYXRjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMYXN0KFwiZXJyb3JcIiwgdmFyaWFibGVzTXVzdE1hdGNoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVzZXRMYXN0UmVzdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubGFzdDtcbiAgICAgICAgdGhpcy5pc1Rvcm5Eb3duID0gZmFsc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlc2V0UXVlcnlTdG9yZUVycm9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIucmVzZXRFcnJvcnModGhpcy5xdWVyeUlkKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVmZXRjaCA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgcmVvYnNlcnZlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHBvbGxJbnRlcnZhbDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGZldGNoUG9saWN5ID0gdGhpcy5vcHRpb25zLmZldGNoUG9saWN5O1xuICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1hbmQtbmV0d29yaycpIHtcbiAgICAgICAgICAgIHJlb2JzZXJ2ZU9wdGlvbnMuZmV0Y2hQb2xpY3kgPSBmZXRjaFBvbGljeTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJykge1xuICAgICAgICAgICAgcmVvYnNlcnZlT3B0aW9ucy5mZXRjaFBvbGljeSA9ICduby1jYWNoZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZW9ic2VydmVPcHRpb25zLmZldGNoUG9saWN5ID0gJ25ldHdvcmstb25seSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fREVWX18gJiYgdmFyaWFibGVzICYmIGhhc093blByb3BlcnR5JDEuY2FsbCh2YXJpYWJsZXMsIFwidmFyaWFibGVzXCIpKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnlEZWYgPSB1dGlsaXRpZXMuZ2V0UXVlcnlEZWZpbml0aW9uKHRoaXMucXVlcnkpO1xuICAgICAgICAgICAgdmFyIHZhcnMgPSBxdWVyeURlZi52YXJpYWJsZURlZmluaXRpb25zO1xuICAgICAgICAgICAgaWYgKCF2YXJzIHx8ICF2YXJzLnNvbWUoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYudmFyaWFibGUubmFtZS52YWx1ZSA9PT0gXCJ2YXJpYWJsZXNcIjsgfSkpIHtcbiAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJDYWxsZWQgcmVmZXRjaChcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkodmFyaWFibGVzKSwgXCIpIGZvciBxdWVyeSBcIikuY29uY2F0KCgoX2EgPSBxdWVyeURlZi5uYW1lKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpIHx8IEpTT04uc3RyaW5naWZ5KHF1ZXJ5RGVmKSwgXCIsIHdoaWNoIGRvZXMgbm90IGRlY2xhcmUgYSAkdmFyaWFibGVzIHZhcmlhYmxlLlxcbkRpZCB5b3UgbWVhbiB0byBjYWxsIHJlZmV0Y2godmFyaWFibGVzKSBpbnN0ZWFkIG9mIHJlZmV0Y2goeyB2YXJpYWJsZXMgfSk/XCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFyaWFibGVzICYmICFlcXVhbGl0eS5lcXVhbCh0aGlzLm9wdGlvbnMudmFyaWFibGVzLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICByZW9ic2VydmVPcHRpb25zLnZhcmlhYmxlcyA9IHRoaXMub3B0aW9ucy52YXJpYWJsZXMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zLnZhcmlhYmxlcyksIHZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5xdWVyeUluZm8ucmVzZXRMYXN0V3JpdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVvYnNlcnZlKHJlb2JzZXJ2ZU9wdGlvbnMsIGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWZldGNoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuZmV0Y2hNb3JlID0gZnVuY3Rpb24gKGZldGNoTW9yZU9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNvbWJpbmVkT3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCAoZmV0Y2hNb3JlT3B0aW9ucy5xdWVyeSA/IGZldGNoTW9yZU9wdGlvbnMgOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgeyBxdWVyeTogdGhpcy5xdWVyeSB9KSwgZmV0Y2hNb3JlT3B0aW9ucyksIHsgdmFyaWFibGVzOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zLnZhcmlhYmxlcyksIGZldGNoTW9yZU9wdGlvbnMudmFyaWFibGVzKSB9KSkpLCB7IGZldGNoUG9saWN5OiBcIm5vLWNhY2hlXCIgfSk7XG4gICAgICAgIHZhciBxaWQgPSB0aGlzLnF1ZXJ5TWFuYWdlci5nZW5lcmF0ZVF1ZXJ5SWQoKTtcbiAgICAgICAgdmFyIHF1ZXJ5SW5mbyA9IHRoaXMucXVlcnlJbmZvO1xuICAgICAgICB2YXIgb3JpZ2luYWxOZXR3b3JrU3RhdHVzID0gcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXM7XG4gICAgICAgIHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmZldGNoTW9yZTtcbiAgICAgICAgaWYgKGNvbWJpbmVkT3B0aW9ucy5ub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1cGRhdGVkUXVlcnlTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5mZXRjaFF1ZXJ5KHFpZCwgY29tYmluZWRPcHRpb25zLCBleHBvcnRzLk5ldHdvcmtTdGF0dXMuZmV0Y2hNb3JlKS50aGVuKGZ1bmN0aW9uIChmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICAgIF90aGlzLnF1ZXJ5TWFuYWdlci5yZW1vdmVRdWVyeShxaWQpO1xuICAgICAgICAgICAgaWYgKHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzID09PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMuZmV0Y2hNb3JlKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgPSBvcmlnaW5hbE5ldHdvcmtTdGF0dXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5xdWVyeU1hbmFnZXIuY2FjaGUuYmF0Y2goe1xuICAgICAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVRdWVyeSA9IGZldGNoTW9yZU9wdGlvbnMudXBkYXRlUXVlcnk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVRdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUudXBkYXRlUXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBfdGhpcy5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IF90aGlzLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChwcmV2aW91cykgeyByZXR1cm4gdXBkYXRlUXVlcnkocHJldmlvdXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaE1vcmVSZXN1bHQ6IGZldGNoTW9yZVJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogY29tYmluZWRPcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBjb21iaW5lZE9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBjb21iaW5lZE9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZldGNoTW9yZVJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uV2F0Y2hVcGRhdGVkOiBmdW5jdGlvbiAod2F0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFF1ZXJ5U2V0LmFkZCh3YXRjaC5xdWVyeSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTW9yZVJlc3VsdDtcbiAgICAgICAgfSkuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXVwZGF0ZWRRdWVyeVNldC5oYXMoX3RoaXMucXVlcnkpKSB7XG4gICAgICAgICAgICAgICAgcmVvYnNlcnZlQ2FjaGVGaXJzdChfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5zdWJzY3JpYmVUb01vcmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5xdWVyeU1hbmFnZXJcbiAgICAgICAgICAgIC5zdGFydEdyYXBoUUxTdWJzY3JpcHRpb24oe1xuICAgICAgICAgICAgcXVlcnk6IG9wdGlvbnMuZG9jdW1lbnQsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDogb3B0aW9ucy5jb250ZXh0LFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVRdWVyeSA9IG9wdGlvbnMudXBkYXRlUXVlcnk7XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZVF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVF1ZXJ5KGZ1bmN0aW9uIChwcmV2aW91cywgX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlUXVlcnkocHJldmlvdXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25EYXRhOiBzdWJzY3JpcHRpb25EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbkVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5lcnJvcignVW5oYW5kbGVkIEdyYXBoUUwgc3Vic2NyaXB0aW9uIGVycm9yJywgZXJyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuc3Vic2NyaXB0aW9ucy5kZWxldGUoc3Vic2NyaXB0aW9uKSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24gKG5ld09wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVvYnNlcnZlKG5ld09wdGlvbnMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5zZXRWYXJpYWJsZXMgPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIGlmIChlcXVhbGl0eS5lcXVhbCh0aGlzLnZhcmlhYmxlcywgdmFyaWFibGVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLnNpemVcbiAgICAgICAgICAgICAgICA/IHRoaXMucmVzdWx0KClcbiAgICAgICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgICAgIGlmICghdGhpcy5vYnNlcnZlcnMuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlb2JzZXJ2ZSh7XG4gICAgICAgICAgICBmZXRjaFBvbGljeTogdGhpcy5vcHRpb25zLmluaXRpYWxGZXRjaFBvbGljeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICB9LCBleHBvcnRzLk5ldHdvcmtTdGF0dXMuc2V0VmFyaWFibGVzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUudXBkYXRlUXVlcnkgPSBmdW5jdGlvbiAobWFwRm4pIHtcbiAgICAgICAgdmFyIHF1ZXJ5TWFuYWdlciA9IHRoaXMucXVlcnlNYW5hZ2VyO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcXVlcnlNYW5hZ2VyLmNhY2hlLmRpZmYoe1xuICAgICAgICAgICAgcXVlcnk6IHRoaXMub3B0aW9ucy5xdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdGhpcy52YXJpYWJsZXMsXG4gICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICB9KS5yZXN1bHQ7XG4gICAgICAgIHZhciBuZXdSZXN1bHQgPSBtYXBGbihyZXN1bHQsIHtcbiAgICAgICAgICAgIHZhcmlhYmxlczogdGhpcy52YXJpYWJsZXMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmV3UmVzdWx0KSB7XG4gICAgICAgICAgICBxdWVyeU1hbmFnZXIuY2FjaGUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMub3B0aW9ucy5xdWVyeSxcbiAgICAgICAgICAgICAgICBkYXRhOiBuZXdSZXN1bHQsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB0aGlzLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcXVlcnlNYW5hZ2VyLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5zdGFydFBvbGxpbmcgPSBmdW5jdGlvbiAocG9sbEludGVydmFsKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5wb2xsSW50ZXJ2YWwgPSBwb2xsSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlUG9sbGluZygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5zdG9wUG9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnBvbGxJbnRlcnZhbCA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlUG9sbGluZygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5hcHBseU5leHRGZXRjaFBvbGljeSA9IGZ1bmN0aW9uIChyZWFzb24sIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubmV4dEZldGNoUG9saWN5KSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBvcHRpb25zLmZldGNoUG9saWN5LCBmZXRjaFBvbGljeSA9IF9hID09PSB2b2lkIDAgPyBcImNhY2hlLWZpcnN0XCIgOiBfYSwgX2IgPSBvcHRpb25zLmluaXRpYWxGZXRjaFBvbGljeSwgaW5pdGlhbEZldGNoUG9saWN5ID0gX2IgPT09IHZvaWQgMCA/IGZldGNoUG9saWN5IDogX2I7XG4gICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgPT09IFwic3RhbmRieVwiKSA7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5uZXh0RmV0Y2hQb2xpY3kgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPSBvcHRpb25zLm5leHRGZXRjaFBvbGljeShmZXRjaFBvbGljeSwge1xuICAgICAgICAgICAgICAgICAgICByZWFzb246IHJlYXNvbixcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEZldGNoUG9saWN5OiBpbml0aWFsRmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWFzb24gPT09IFwidmFyaWFibGVzLWNoYW5nZWRcIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPSBpbml0aWFsRmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID0gb3B0aW9ucy5uZXh0RmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKG9wdGlvbnMsIG5ld05ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuc2V0T2JzZXJ2YWJsZVF1ZXJ5KHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIuZmV0Y2hRdWVyeU9ic2VydmFibGUodGhpcy5xdWVyeUlkLCBvcHRpb25zLCBuZXdOZXR3b3JrU3RhdHVzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUudXBkYXRlUG9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucXVlcnlNYW5hZ2VyLnNzck1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLCBwb2xsaW5nSW5mbyA9IF9hLnBvbGxpbmdJbmZvLCBwb2xsSW50ZXJ2YWwgPSBfYS5vcHRpb25zLnBvbGxJbnRlcnZhbDtcbiAgICAgICAgaWYgKCFwb2xsSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGlmIChwb2xsaW5nSW5mbykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChwb2xsaW5nSW5mby50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wb2xsaW5nSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9sbGluZ0luZm8gJiZcbiAgICAgICAgICAgIHBvbGxpbmdJbmZvLmludGVydmFsID09PSBwb2xsSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQocG9sbEludGVydmFsLCAnQXR0ZW1wdGVkIHRvIHN0YXJ0IGEgcG9sbGluZyBxdWVyeSB3aXRob3V0IGEgcG9sbGluZyBpbnRlcnZhbC4nKSA6IGdsb2JhbHMuaW52YXJpYW50KHBvbGxJbnRlcnZhbCwgMTMpO1xuICAgICAgICB2YXIgaW5mbyA9IHBvbGxpbmdJbmZvIHx8ICh0aGlzLnBvbGxpbmdJbmZvID0ge30pO1xuICAgICAgICBpbmZvLmludGVydmFsID0gcG9sbEludGVydmFsO1xuICAgICAgICB2YXIgbWF5YmVGZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wb2xsaW5nSW5mbykge1xuICAgICAgICAgICAgICAgIGlmICghaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KF90aGlzLnF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZW9ic2VydmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IF90aGlzLm9wdGlvbnMuaW5pdGlhbEZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnID8gJ25vLWNhY2hlJyA6ICduZXR3b3JrLW9ubHknLFxuICAgICAgICAgICAgICAgICAgICB9LCBleHBvcnRzLk5ldHdvcmtTdGF0dXMucG9sbCkudGhlbihwb2xsLCBwb2xsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBwb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluZm8gPSBfdGhpcy5wb2xsaW5nSW5mbztcbiAgICAgICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGluZm8udGltZW91dCk7XG4gICAgICAgICAgICAgICAgaW5mby50aW1lb3V0ID0gc2V0VGltZW91dChtYXliZUZldGNoLCBpbmZvLmludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcG9sbCgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS51cGRhdGVMYXN0UmVzdWx0ID0gZnVuY3Rpb24gKG5ld1Jlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlczsgfVxuICAgICAgICB0aGlzLmxhc3QgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5sYXN0KSwgeyByZXN1bHQ6IHRoaXMucXVlcnlNYW5hZ2VyLmFzc3VtZUltbXV0YWJsZVJlc3VsdHNcbiAgICAgICAgICAgICAgICA/IG5ld1Jlc3VsdFxuICAgICAgICAgICAgICAgIDogdXRpbGl0aWVzLmNsb25lRGVlcChuZXdSZXN1bHQpLCB2YXJpYWJsZXM6IHZhcmlhYmxlcyB9KTtcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KG5ld1Jlc3VsdC5lcnJvcnMpKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5sYXN0LmVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3Q7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlb2JzZXJ2ZSA9IGZ1bmN0aW9uIChuZXdPcHRpb25zLCBuZXdOZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgICAgICB2YXIgdXNlRGlzcG9zYWJsZUNvbmNhc3QgPSBuZXdOZXR3b3JrU3RhdHVzID09PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVmZXRjaCB8fFxuICAgICAgICAgICAgbmV3TmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmZldGNoTW9yZSB8fFxuICAgICAgICAgICAgbmV3TmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnBvbGw7XG4gICAgICAgIHZhciBvbGRWYXJpYWJsZXMgPSB0aGlzLm9wdGlvbnMudmFyaWFibGVzO1xuICAgICAgICB2YXIgb2xkRmV0Y2hQb2xpY3kgPSB0aGlzLm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgIHZhciBtZXJnZWRPcHRpb25zID0gdXRpbGl0aWVzLmNvbXBhY3QodGhpcy5vcHRpb25zLCBuZXdPcHRpb25zIHx8IHt9KTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB1c2VEaXNwb3NhYmxlQ29uY2FzdFxuICAgICAgICAgICAgPyBtZXJnZWRPcHRpb25zXG4gICAgICAgICAgICA6IGFzc2lnbih0aGlzLm9wdGlvbnMsIG1lcmdlZE9wdGlvbnMpO1xuICAgICAgICBpZiAoIXVzZURpc3Bvc2FibGVDb25jYXN0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvbGxpbmcoKTtcbiAgICAgICAgICAgIGlmIChuZXdPcHRpb25zICYmXG4gICAgICAgICAgICAgICAgbmV3T3B0aW9ucy52YXJpYWJsZXMgJiZcbiAgICAgICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwobmV3T3B0aW9ucy52YXJpYWJsZXMsIG9sZFZhcmlhYmxlcykgJiZcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ICE9PSBcInN0YW5kYnlcIiAmJlxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09IG9sZEZldGNoUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseU5leHRGZXRjaFBvbGljeShcInZhcmlhYmxlcy1jaGFuZ2VkXCIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdOZXR3b3JrU3RhdHVzID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5zZXRWYXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSBvcHRpb25zLnZhcmlhYmxlcyAmJiB0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICB2YXIgY29uY2FzdCA9IHRoaXMuZmV0Y2gob3B0aW9ucywgbmV3TmV0d29ya1N0YXR1cyk7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXBvcnRSZXN1bHQocmVzdWx0LCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXBvcnRFcnJvcihlcnJvciwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICghdXNlRGlzcG9zYWJsZUNvbmNhc3QpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNhc3QgJiYgdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uY2FzdC5yZW1vdmVPYnNlcnZlcih0aGlzLm9ic2VydmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29uY2FzdCA9IGNvbmNhc3Q7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29uY2FzdC5hZGRPYnNlcnZlcihvYnNlcnZlcik7XG4gICAgICAgIHJldHVybiBjb25jYXN0LnByb21pc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVwb3J0UmVzdWx0KHRoaXMuZ2V0Q3VycmVudFJlc3VsdChmYWxzZSksIHRoaXMudmFyaWFibGVzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVwb3J0UmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBsYXN0RXJyb3IgPSB0aGlzLmdldExhc3RFcnJvcigpO1xuICAgICAgICBpZiAobGFzdEVycm9yIHx8IHRoaXMuaXNEaWZmZXJlbnRGcm9tTGFzdFJlc3VsdChyZXN1bHQsIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgIGlmIChsYXN0RXJyb3IgfHwgIXJlc3VsdC5wYXJ0aWFsIHx8IHRoaXMub3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGFzdFJlc3VsdChyZXN1bHQsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1dGlsaXRpZXMuaXRlcmF0ZU9ic2VydmVyc1NhZmVseSh0aGlzLm9ic2VydmVycywgJ25leHQnLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlcG9ydEVycm9yID0gZnVuY3Rpb24gKGVycm9yLCB2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIGVycm9yUmVzdWx0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMuZ2V0TGFzdFJlc3VsdCgpKSwgeyBlcnJvcjogZXJyb3IsIGVycm9yczogZXJyb3IuZ3JhcGhRTEVycm9ycywgbmV0d29ya1N0YXR1czogZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmVycm9yLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVMYXN0UmVzdWx0KGVycm9yUmVzdWx0LCB2YXJpYWJsZXMpO1xuICAgICAgICB1dGlsaXRpZXMuaXRlcmF0ZU9ic2VydmVyc1NhZmVseSh0aGlzLm9ic2VydmVycywgJ2Vycm9yJywgdGhpcy5sYXN0LmVycm9yID0gZXJyb3IpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5oYXNPYnNlcnZlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVycy5zaXplID4gMDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUudGVhckRvd25RdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUb3JuRG93bilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuY29uY2FzdCAmJiB0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmNhc3QucmVtb3ZlT2JzZXJ2ZXIodGhpcy5vYnNlcnZlcik7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jb25jYXN0O1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMub2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wUG9sbGluZygpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5jbGVhcigpO1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5zdG9wUXVlcnkodGhpcy5xdWVyeUlkKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5pc1Rvcm5Eb3duID0gdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlUXVlcnk7XG59KHV0aWxpdGllcy5PYnNlcnZhYmxlKSk7XG51dGlsaXRpZXMuZml4T2JzZXJ2YWJsZVN1YmNsYXNzKE9ic2VydmFibGVRdWVyeSk7XG5mdW5jdGlvbiByZW9ic2VydmVDYWNoZUZpcnN0KG9ic1F1ZXJ5KSB7XG4gICAgdmFyIF9hID0gb2JzUXVlcnkub3B0aW9ucywgZmV0Y2hQb2xpY3kgPSBfYS5mZXRjaFBvbGljeSwgbmV4dEZldGNoUG9saWN5ID0gX2EubmV4dEZldGNoUG9saWN5O1xuICAgIGlmIChmZXRjaFBvbGljeSA9PT0gXCJjYWNoZS1hbmQtbmV0d29ya1wiIHx8XG4gICAgICAgIGZldGNoUG9saWN5ID09PSBcIm5ldHdvcmstb25seVwiKSB7XG4gICAgICAgIHJldHVybiBvYnNRdWVyeS5yZW9ic2VydmUoe1xuICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IFwiY2FjaGUtZmlyc3RcIixcbiAgICAgICAgICAgIG5leHRGZXRjaFBvbGljeTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dEZldGNoUG9saWN5ID0gbmV4dEZldGNoUG9saWN5O1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV4dEZldGNoUG9saWN5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRGZXRjaFBvbGljeS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9ic1F1ZXJ5LnJlb2JzZXJ2ZSgpO1xufVxuZnVuY3Rpb24gZGVmYXVsdFN1YnNjcmlwdGlvbk9ic2VydmVyRXJyb3JDYWxsYmFjayhlcnJvcikge1xuICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZXJyb3IoJ1VuaGFuZGxlZCBlcnJvcicsIGVycm9yLm1lc3NhZ2UsIGVycm9yLnN0YWNrKTtcbn1cbmZ1bmN0aW9uIGxvZ01pc3NpbmdGaWVsZEVycm9ycyhtaXNzaW5nKSB7XG4gICAgaWYgKF9fREVWX18gJiYgbWlzc2luZykge1xuICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmRlYnVnKFwiTWlzc2luZyBjYWNoZSByZXN1bHQgZmllbGRzOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkobWlzc2luZykpLCBtaXNzaW5nKTtcbiAgICB9XG59XG5cbnZhciBMb2NhbFN0YXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMb2NhbFN0YXRlKF9hKSB7XG4gICAgICAgIHZhciBjYWNoZSA9IF9hLmNhY2hlLCBjbGllbnQgPSBfYS5jbGllbnQsIHJlc29sdmVycyA9IF9hLnJlc29sdmVycywgZnJhZ21lbnRNYXRjaGVyID0gX2EuZnJhZ21lbnRNYXRjaGVyO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbnNUb1Jlc29sdmVDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgICAgICAgaWYgKGNsaWVudCkge1xuICAgICAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc29sdmVycykge1xuICAgICAgICAgICAgdGhpcy5hZGRSZXNvbHZlcnMocmVzb2x2ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJhZ21lbnRNYXRjaGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZyYWdtZW50TWF0Y2hlcihmcmFnbWVudE1hdGNoZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmFkZFJlc29sdmVycyA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSB0aGlzLnJlc29sdmVycyB8fCB7fTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzb2x2ZXJzKSkge1xuICAgICAgICAgICAgcmVzb2x2ZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlc29sdmVyR3JvdXApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlcnMgPSB1dGlsaXRpZXMubWVyZ2VEZWVwKF90aGlzLnJlc29sdmVycywgcmVzb2x2ZXJHcm91cCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZXJzID0gdXRpbGl0aWVzLm1lcmdlRGVlcCh0aGlzLnJlc29sdmVycywgcmVzb2x2ZXJzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuc2V0UmVzb2x2ZXJzID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IHt9O1xuICAgICAgICB0aGlzLmFkZFJlc29sdmVycyhyZXNvbHZlcnMpO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuZ2V0UmVzb2x2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlcnMgfHwge307XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5ydW5SZXNvbHZlcnMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGRvY3VtZW50ID0gX2EuZG9jdW1lbnQsIHJlbW90ZVJlc3VsdCA9IF9hLnJlbW90ZVJlc3VsdCwgY29udGV4dCA9IF9hLmNvbnRleHQsIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgX2IgPSBfYS5vbmx5UnVuRm9yY2VkUmVzb2x2ZXJzLCBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2I7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlc29sdmVEb2N1bWVudChkb2N1bWVudCwgcmVtb3RlUmVzdWx0LmRhdGEsIGNvbnRleHQsIHZhcmlhYmxlcywgdGhpcy5mcmFnbWVudE1hdGNoZXIsIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMpLnRoZW4oZnVuY3Rpb24gKGxvY2FsUmVzdWx0KSB7IHJldHVybiAodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHJlbW90ZVJlc3VsdCksIHsgZGF0YTogbG9jYWxSZXN1bHQucmVzdWx0IH0pKTsgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHJlbW90ZVJlc3VsdF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5zZXRGcmFnbWVudE1hdGNoZXIgPSBmdW5jdGlvbiAoZnJhZ21lbnRNYXRjaGVyKSB7XG4gICAgICAgIHRoaXMuZnJhZ21lbnRNYXRjaGVyID0gZnJhZ21lbnRNYXRjaGVyO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuZ2V0RnJhZ21lbnRNYXRjaGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mcmFnbWVudE1hdGNoZXI7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5jbGllbnRRdWVyeSA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICBpZiAodXRpbGl0aWVzLmhhc0RpcmVjdGl2ZXMoWydjbGllbnQnXSwgZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5zZXJ2ZXJRdWVyeSA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gdXRpbGl0aWVzLnJlbW92ZUNsaWVudFNldHNGcm9tRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucHJlcGFyZUNvbnRleHQgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlO1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IGNhY2hlOiBjYWNoZSwgZ2V0Q2FjaGVLZXk6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGUuaWRlbnRpZnkob2JqKTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5hZGRFeHBvcnRlZFZhcmlhYmxlcyA9IGZ1bmN0aW9uIChkb2N1bWVudCwgdmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB7fTsgfVxuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlRG9jdW1lbnQoZG9jdW1lbnQsIHRoaXMuYnVpbGRSb290VmFsdWVGcm9tQ2FjaGUoZG9jdW1lbnQsIHZhcmlhYmxlcykgfHwge30sIHRoaXMucHJlcGFyZUNvbnRleHQoY29udGV4dCksIHZhcmlhYmxlcykudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB2YXJpYWJsZXMpLCBkYXRhLmV4cG9ydGVkVmFyaWFibGVzKSk7IH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0c2xpYi5fX2Fzc2lnbih7fSwgdmFyaWFibGVzKV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5zaG91bGRGb3JjZVJlc29sdmVycyA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICB2YXIgZm9yY2VSZXNvbHZlcnMgPSBmYWxzZTtcbiAgICAgICAgZ3JhcGhxbC52aXNpdChkb2N1bWVudCwge1xuICAgICAgICAgICAgRGlyZWN0aXZlOiB7XG4gICAgICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5hbWUudmFsdWUgPT09ICdjbGllbnQnICYmIG5vZGUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVJlc29sdmVycyA9IG5vZGUuYXJndW1lbnRzLnNvbWUoZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmcubmFtZS52YWx1ZSA9PT0gJ2Fsd2F5cycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnLnZhbHVlLmtpbmQgPT09ICdCb29sZWFuVmFsdWUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZy52YWx1ZS52YWx1ZSA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcmNlUmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdyYXBocWwuQlJFQUs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3JjZVJlc29sdmVycztcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmJ1aWxkUm9vdFZhbHVlRnJvbUNhY2hlID0gZnVuY3Rpb24gKGRvY3VtZW50LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuZGlmZih7XG4gICAgICAgICAgICBxdWVyeTogdXRpbGl0aWVzLmJ1aWxkUXVlcnlGcm9tU2VsZWN0aW9uU2V0KGRvY3VtZW50KSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgfSkucmVzdWx0O1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZURvY3VtZW50ID0gZnVuY3Rpb24gKGRvY3VtZW50LCByb290VmFsdWUsIGNvbnRleHQsIHZhcmlhYmxlcywgZnJhZ21lbnRNYXRjaGVyLCBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzKSB7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB7fTsgfVxuICAgICAgICBpZiAoZnJhZ21lbnRNYXRjaGVyID09PSB2b2lkIDApIHsgZnJhZ21lbnRNYXRjaGVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfTsgfVxuICAgICAgICBpZiAob25seVJ1bkZvcmNlZFJlc29sdmVycyA9PT0gdm9pZCAwKSB7IG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWFpbkRlZmluaXRpb24sIGZyYWdtZW50cywgZnJhZ21lbnRNYXAsIHNlbGVjdGlvbnNUb1Jlc29sdmUsIGRlZmluaXRpb25PcGVyYXRpb24sIGRlZmF1bHRPcGVyYXRpb25UeXBlLCBfYSwgY2FjaGUsIGNsaWVudCwgZXhlY0NvbnRleHQsIGlzQ2xpZW50RmllbGREZXNjZW5kYW50O1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIG1haW5EZWZpbml0aW9uID0gdXRpbGl0aWVzLmdldE1haW5EZWZpbml0aW9uKGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICBmcmFnbWVudHMgPSB1dGlsaXRpZXMuZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhkb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRNYXAgPSB1dGlsaXRpZXMuY3JlYXRlRnJhZ21lbnRNYXAoZnJhZ21lbnRzKTtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25zVG9SZXNvbHZlID0gdGhpcy5jb2xsZWN0U2VsZWN0aW9uc1RvUmVzb2x2ZShtYWluRGVmaW5pdGlvbiwgZnJhZ21lbnRNYXApO1xuICAgICAgICAgICAgICAgIGRlZmluaXRpb25PcGVyYXRpb24gPSBtYWluRGVmaW5pdGlvbi5vcGVyYXRpb247XG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wZXJhdGlvblR5cGUgPSBkZWZpbml0aW9uT3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgID8gZGVmaW5pdGlvbk9wZXJhdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uT3BlcmF0aW9uLnNsaWNlKDEpXG4gICAgICAgICAgICAgICAgICAgIDogJ1F1ZXJ5JztcbiAgICAgICAgICAgICAgICBfYSA9IHRoaXMsIGNhY2hlID0gX2EuY2FjaGUsIGNsaWVudCA9IF9hLmNsaWVudDtcbiAgICAgICAgICAgICAgICBleGVjQ29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRNYXA6IGZyYWdtZW50TWFwLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIHsgY2FjaGU6IGNhY2hlLCBjbGllbnQ6IGNsaWVudCB9KSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50TWF0Y2hlcjogZnJhZ21lbnRNYXRjaGVyLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0T3BlcmF0aW9uVHlwZTogZGVmYXVsdE9wZXJhdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydGVkVmFyaWFibGVzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uc1RvUmVzb2x2ZTogc2VsZWN0aW9uc1RvUmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgb25seVJ1bkZvcmNlZFJlc29sdmVyczogb25seVJ1bkZvcmNlZFJlc29sdmVycyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlzQ2xpZW50RmllbGREZXNjZW5kYW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlc29sdmVTZWxlY3Rpb25TZXQobWFpbkRlZmluaXRpb24uc2VsZWN0aW9uU2V0LCBpc0NsaWVudEZpZWxkRGVzY2VuZGFudCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRlZFZhcmlhYmxlczogZXhlY0NvbnRleHQuZXhwb3J0ZWRWYXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pOyB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5yZXNvbHZlU2VsZWN0aW9uU2V0ID0gZnVuY3Rpb24gKHNlbGVjdGlvblNldCwgaXNDbGllbnRGaWVsZERlc2NlbmRhbnQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50TWFwLCBjb250ZXh0LCB2YXJpYWJsZXMsIHJlc3VsdHNUb01lcmdlLCBleGVjdXRlO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudE1hcCA9IGV4ZWNDb250ZXh0LmZyYWdtZW50TWFwLCBjb250ZXh0ID0gZXhlY0NvbnRleHQuY29udGV4dCwgdmFyaWFibGVzID0gZXhlY0NvbnRleHQudmFyaWFibGVzO1xuICAgICAgICAgICAgICAgIHJlc3VsdHNUb01lcmdlID0gW3Jvb3RWYWx1ZV07XG4gICAgICAgICAgICAgICAgZXhlY3V0ZSA9IGZ1bmN0aW9uIChzZWxlY3Rpb24pIHsgcmV0dXJuIHRzbGliLl9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyYWdtZW50LCB0eXBlQ29uZGl0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQ2xpZW50RmllbGREZXNjZW5kYW50ICYmICFleGVjQ29udGV4dC5zZWxlY3Rpb25zVG9SZXNvbHZlLmhhcyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXRpbGl0aWVzLnNob3VsZEluY2x1ZGUoc2VsZWN0aW9uLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlc29sdmVGaWVsZChzZWxlY3Rpb24sIGlzQ2xpZW50RmllbGREZXNjZW5kYW50LCByb290VmFsdWUsIGV4ZWNDb250ZXh0KS50aGVuKGZ1bmN0aW9uIChmaWVsZFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZFJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzVG9NZXJnZS5wdXNoKChfYSA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYVt1dGlsaXRpZXMucmVzdWx0S2V5TmFtZUZyb21GaWVsZChzZWxlY3Rpb24pXSA9IGZpZWxkUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzSW5saW5lRnJhZ21lbnQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gc2VsZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgPSBmcmFnbWVudE1hcFtzZWxlY3Rpb24ubmFtZS52YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50LCBcIk5vIGZyYWdtZW50IG5hbWVkIFwiLmNvbmNhdChzZWxlY3Rpb24ubmFtZS52YWx1ZSkpIDogZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnQsIDExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcmFnbWVudCAmJiBmcmFnbWVudC50eXBlQ29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUNvbmRpdGlvbiA9IGZyYWdtZW50LnR5cGVDb25kaXRpb24ubmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhlY0NvbnRleHQuZnJhZ21lbnRNYXRjaGVyKHJvb3RWYWx1ZSwgdHlwZUNvbmRpdGlvbiwgY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlc29sdmVTZWxlY3Rpb25TZXQoZnJhZ21lbnQuc2VsZWN0aW9uU2V0LCBpc0NsaWVudEZpZWxkRGVzY2VuZGFudCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkudGhlbihmdW5jdGlvbiAoZnJhZ21lbnRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzVG9NZXJnZS5wdXNoKGZyYWdtZW50UmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTsgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIFByb21pc2UuYWxsKHNlbGVjdGlvblNldC5zZWxlY3Rpb25zLm1hcChleGVjdXRlKSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbGl0aWVzLm1lcmdlRGVlcEFycmF5KHJlc3VsdHNUb01lcmdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZUZpZWxkID0gZnVuY3Rpb24gKGZpZWxkLCBpc0NsaWVudEZpZWxkRGVzY2VuZGFudCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkge1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFyaWFibGVzLCBmaWVsZE5hbWUsIGFsaWFzZWRGaWVsZE5hbWUsIGFsaWFzVXNlZCwgZGVmYXVsdFJlc3VsdCwgcmVzdWx0UHJvbWlzZSwgcmVzb2x2ZXJUeXBlLCByZXNvbHZlck1hcCwgcmVzb2x2ZTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyb290VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBudWxsXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzID0gZXhlY0NvbnRleHQudmFyaWFibGVzO1xuICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IGZpZWxkLm5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgYWxpYXNlZEZpZWxkTmFtZSA9IHV0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKGZpZWxkKTtcbiAgICAgICAgICAgICAgICBhbGlhc1VzZWQgPSBmaWVsZE5hbWUgIT09IGFsaWFzZWRGaWVsZE5hbWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdFJlc3VsdCA9IHJvb3RWYWx1ZVthbGlhc2VkRmllbGROYW1lXSB8fCByb290VmFsdWVbZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICByZXN1bHRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGRlZmF1bHRSZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmICghZXhlY0NvbnRleHQub25seVJ1bkZvcmNlZFJlc29sdmVycyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3VsZEZvcmNlUmVzb2x2ZXJzKGZpZWxkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlclR5cGUgPSByb290VmFsdWUuX190eXBlbmFtZSB8fCBleGVjQ29udGV4dC5kZWZhdWx0T3BlcmF0aW9uVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJNYXAgPSB0aGlzLnJlc29sdmVycyAmJiB0aGlzLnJlc29sdmVyc1tyZXNvbHZlclR5cGVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZXJNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUgPSByZXNvbHZlck1hcFthbGlhc1VzZWQgPyBmaWVsZE5hbWUgOiBhbGlhc2VkRmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjYWNoZS5jYWNoZVNsb3Qud2l0aFZhbHVlKHRoaXMuY2FjaGUsIHJlc29sdmUsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsaXRpZXMuYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKGZpZWxkLCB2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjQ29udGV4dC5jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZpZWxkOiBmaWVsZCwgZnJhZ21lbnRNYXA6IGV4ZWNDb250ZXh0LmZyYWdtZW50TWFwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgcmVzdWx0UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIHsgcmVzdWx0ID0gZGVmYXVsdFJlc3VsdDsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRpcmVjdGl2ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXJlY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aXZlLm5hbWUudmFsdWUgPT09ICdleHBvcnQnICYmIGRpcmVjdGl2ZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZS5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZy5uYW1lLnZhbHVlID09PSAnYXMnICYmIGFyZy52YWx1ZS5raW5kID09PSAnU3RyaW5nVmFsdWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWNDb250ZXh0LmV4cG9ydGVkVmFyaWFibGVzW2FyZy52YWx1ZS52YWx1ZV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNDbGllbnRGaWVsZCA9IChfYiA9IChfYSA9IGZpZWxkLmRpcmVjdGl2ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zb21lKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUudmFsdWUgPT09ICdjbGllbnQnOyB9KSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmVTdWJTZWxlY3RlZEFycmF5KGZpZWxkLCBpc0NsaWVudEZpZWxkRGVzY2VuZGFudCB8fCBpc0NsaWVudEZpZWxkLCByZXN1bHQsIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVNlbGVjdGlvblNldChmaWVsZC5zZWxlY3Rpb25TZXQsIGlzQ2xpZW50RmllbGREZXNjZW5kYW50IHx8IGlzQ2xpZW50RmllbGQsIHJlc3VsdCwgZXhlY0NvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5yZXNvbHZlU3ViU2VsZWN0ZWRBcnJheSA9IGZ1bmN0aW9uIChmaWVsZCwgaXNDbGllbnRGaWVsZERlc2NlbmRhbnQsIHJlc3VsdCwgZXhlY0NvbnRleHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU3ViU2VsZWN0ZWRBcnJheShmaWVsZCwgaXNDbGllbnRGaWVsZERlc2NlbmRhbnQsIGl0ZW0sIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVNlbGVjdGlvblNldChmaWVsZC5zZWxlY3Rpb25TZXQsIGlzQ2xpZW50RmllbGREZXNjZW5kYW50LCBpdGVtLCBleGVjQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmNvbGxlY3RTZWxlY3Rpb25zVG9SZXNvbHZlID0gZnVuY3Rpb24gKG1haW5EZWZpbml0aW9uLCBmcmFnbWVudE1hcCkge1xuICAgICAgICB2YXIgaXNTaW5nbGVBU1ROb2RlID0gZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuICFBcnJheS5pc0FycmF5KG5vZGUpOyB9O1xuICAgICAgICB2YXIgc2VsZWN0aW9uc1RvUmVzb2x2ZUNhY2hlID0gdGhpcy5zZWxlY3Rpb25zVG9SZXNvbHZlQ2FjaGU7XG4gICAgICAgIGZ1bmN0aW9uIGNvbGxlY3RCeURlZmluaXRpb24oZGVmaW5pdGlvbk5vZGUpIHtcbiAgICAgICAgICAgIGlmICghc2VsZWN0aW9uc1RvUmVzb2x2ZUNhY2hlLmhhcyhkZWZpbml0aW9uTm9kZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlc18xID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbnNUb1Jlc29sdmVDYWNoZS5zZXQoZGVmaW5pdGlvbk5vZGUsIG1hdGNoZXNfMSk7XG4gICAgICAgICAgICAgICAgZ3JhcGhxbC52aXNpdChkZWZpbml0aW9uTm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBEaXJlY3RpdmU6IGZ1bmN0aW9uIChub2RlLCBfLCBfXywgX19fLCBhbmNlc3RvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5hbWUudmFsdWUgPT09ICdjbGllbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jZXN0b3JzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2luZ2xlQVNUTm9kZShub2RlKSAmJiBncmFwaHFsLmlzU2VsZWN0aW9uTm9kZShub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc18xLmFkZChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBGcmFnbWVudFNwcmVhZDogZnVuY3Rpb24gKHNwcmVhZCwgXywgX18sIF9fXywgYW5jZXN0b3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBmcmFnbWVudE1hcFtzcHJlYWQubmFtZS52YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnQsIFwiTm8gZnJhZ21lbnQgbmFtZWQgXCIuY29uY2F0KHNwcmVhZC5uYW1lLnZhbHVlKSkgOiBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudCwgMTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyYWdtZW50U2VsZWN0aW9ucyA9IGNvbGxlY3RCeURlZmluaXRpb24oZnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50U2VsZWN0aW9ucy5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2VzdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NpbmdsZUFTVE5vZGUobm9kZSkgJiYgZ3JhcGhxbC5pc1NlbGVjdGlvbk5vZGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXNfMS5hZGQobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzXzEuYWRkKHNwcmVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRTZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzXzEuYWRkKHNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3Rpb25zVG9SZXNvbHZlQ2FjaGUuZ2V0KGRlZmluaXRpb25Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGVjdEJ5RGVmaW5pdGlvbihtYWluRGVmaW5pdGlvbik7XG4gICAgfTtcbiAgICByZXR1cm4gTG9jYWxTdGF0ZTtcbn0oKSk7XG5cbnZhciBkZXN0cnVjdGl2ZU1ldGhvZENvdW50cyA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtNYXAgPyBXZWFrTWFwIDogTWFwKSgpO1xuZnVuY3Rpb24gd3JhcERlc3RydWN0aXZlQ2FjaGVNZXRob2QoY2FjaGUsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgb3JpZ2luYWwgPSBjYWNoZVttZXRob2ROYW1lXTtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FjaGVbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5zZXQoY2FjaGUsIChkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5nZXQoY2FjaGUpICsgMSkgJSAxZTE1KTtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNhbmNlbE5vdGlmeVRpbWVvdXQoaW5mbykge1xuICAgIGlmIChpbmZvW1wibm90aWZ5VGltZW91dFwiXSkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaW5mb1tcIm5vdGlmeVRpbWVvdXRcIl0pO1xuICAgICAgICBpbmZvW1wibm90aWZ5VGltZW91dFwiXSA9IHZvaWQgMDtcbiAgICB9XG59XG52YXIgUXVlcnlJbmZvID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWVyeUluZm8ocXVlcnlNYW5hZ2VyLCBxdWVyeUlkKSB7XG4gICAgICAgIGlmIChxdWVyeUlkID09PSB2b2lkIDApIHsgcXVlcnlJZCA9IHF1ZXJ5TWFuYWdlci5nZW5lcmF0ZVF1ZXJ5SWQoKTsgfVxuICAgICAgICB0aGlzLnF1ZXJ5SWQgPSBxdWVyeUlkO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5kb2N1bWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdFJlcXVlc3RJZCA9IDE7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlUXVlcnkgPSBudWxsO1xuICAgICAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlID0gcXVlcnlNYW5hZ2VyLmNhY2hlO1xuICAgICAgICBpZiAoIWRlc3RydWN0aXZlTWV0aG9kQ291bnRzLmhhcyhjYWNoZSkpIHtcbiAgICAgICAgICAgIGRlc3RydWN0aXZlTWV0aG9kQ291bnRzLnNldChjYWNoZSwgMCk7XG4gICAgICAgICAgICB3cmFwRGVzdHJ1Y3RpdmVDYWNoZU1ldGhvZChjYWNoZSwgXCJldmljdFwiKTtcbiAgICAgICAgICAgIHdyYXBEZXN0cnVjdGl2ZUNhY2hlTWV0aG9kKGNhY2hlLCBcIm1vZGlmeVwiKTtcbiAgICAgICAgICAgIHdyYXBEZXN0cnVjdGl2ZUNhY2hlTWV0aG9kKGNhY2hlLCBcInJlc2V0XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICB2YXIgbmV0d29ya1N0YXR1cyA9IHF1ZXJ5Lm5ldHdvcmtTdGF0dXMgfHwgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmc7XG4gICAgICAgIGlmICh0aGlzLnZhcmlhYmxlcyAmJlxuICAgICAgICAgICAgdGhpcy5uZXR3b3JrU3RhdHVzICE9PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMubG9hZGluZyAmJlxuICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKHRoaXMudmFyaWFibGVzLCBxdWVyeS52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnNldFZhcmlhYmxlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVxdWFsaXR5LmVxdWFsKHF1ZXJ5LnZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3REaWZmID0gdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgICAgZG9jdW1lbnQ6IHF1ZXJ5LmRvY3VtZW50LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBxdWVyeS52YXJpYWJsZXMsXG4gICAgICAgICAgICBuZXR3b3JrRXJyb3I6IG51bGwsXG4gICAgICAgICAgICBncmFwaFFMRXJyb3JzOiB0aGlzLmdyYXBoUUxFcnJvcnMgfHwgW10sXG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBuZXR3b3JrU3RhdHVzLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHF1ZXJ5Lm9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICAgICAgdGhpcy5zZXRPYnNlcnZhYmxlUXVlcnkocXVlcnkub2JzZXJ2YWJsZVF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlcnkubGFzdFJlcXVlc3RJZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0UmVxdWVzdElkID0gcXVlcnkubGFzdFJlcXVlc3RJZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbmNlbE5vdGlmeVRpbWVvdXQodGhpcyk7XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuZ2V0RGlmZiA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzOyB9XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXREaWZmT3B0aW9ucyh2YXJpYWJsZXMpO1xuICAgICAgICBpZiAodGhpcy5sYXN0RGlmZiAmJiBlcXVhbGl0eS5lcXVhbChvcHRpb25zLCB0aGlzLmxhc3REaWZmLm9wdGlvbnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXN0RGlmZi5kaWZmO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlV2F0Y2godGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgb3EgPSB0aGlzLm9ic2VydmFibGVRdWVyeTtcbiAgICAgICAgaWYgKG9xICYmIG9xLm9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09IFwibm8tY2FjaGVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgY29tcGxldGU6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpZmYgPSB0aGlzLmNhY2hlLmRpZmYob3B0aW9ucyk7XG4gICAgICAgIHRoaXMudXBkYXRlTGFzdERpZmYoZGlmZiwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBkaWZmO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS51cGRhdGVMYXN0RGlmZiA9IGZ1bmN0aW9uIChkaWZmLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubGFzdERpZmYgPSBkaWZmID8ge1xuICAgICAgICAgICAgZGlmZjogZGlmZixcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwgdGhpcy5nZXREaWZmT3B0aW9ucygpLFxuICAgICAgICB9IDogdm9pZCAwO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5nZXREaWZmT3B0aW9ucyA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7IH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLmRvY3VtZW50LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IHRydWUsXG4gICAgICAgICAgICBjYW5vbml6ZVJlc3VsdHM6IChfYSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub3B0aW9ucy5jYW5vbml6ZVJlc3VsdHMsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNldERpZmYgPSBmdW5jdGlvbiAoZGlmZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgb2xkRGlmZiA9IHRoaXMubGFzdERpZmYgJiYgdGhpcy5sYXN0RGlmZi5kaWZmO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhc3REaWZmKGRpZmYpO1xuICAgICAgICBpZiAoIXRoaXMuZGlydHkgJiZcbiAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbChvbGREaWZmICYmIG9sZERpZmYucmVzdWx0LCBkaWZmICYmIGRpZmYucmVzdWx0KSkge1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm90aWZ5VGltZW91dCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubm90aWZ5KCk7IH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNldE9ic2VydmFibGVRdWVyeSA9IGZ1bmN0aW9uIChvcSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob3EgPT09IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5vcUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5kZWxldGUodGhpcy5vcUxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmFibGVRdWVyeSA9IG9xO1xuICAgICAgICBpZiAob3EpIHtcbiAgICAgICAgICAgIG9xW1wicXVlcnlJbmZvXCJdID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmFkZCh0aGlzLm9xTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpZmYgPSBfdGhpcy5nZXREaWZmKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYuZnJvbU9wdGltaXN0aWNUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBvcVtcIm9ic2VydmVcIl0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlb2JzZXJ2ZUNhY2hlRmlyc3Qob3EpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMub3FMaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNhbmNlbE5vdGlmeVRpbWVvdXQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZE5vdGlmeSgpKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoX3RoaXMpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNob3VsZE5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpcnR5IHx8ICF0aGlzLmxpc3RlbmVycy5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodCh0aGlzLm5ldHdvcmtTdGF0dXMpICYmXG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICAgICAgdmFyIGZldGNoUG9saWN5ID0gdGhpcy5vYnNlcnZhYmxlUXVlcnkub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgICAgIGlmIChmZXRjaFBvbGljeSAhPT0gXCJjYWNoZS1vbmx5XCIgJiZcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSAhPT0gXCJjYWNoZS1hbmQtbmV0d29ya1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCA9IFF1ZXJ5SW5mby5wcm90b3R5cGUuY2FuY2VsO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgICAgICAgICAgdmFyIG9xID0gdGhpcy5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgICAgICBpZiAob3EpXG4gICAgICAgICAgICAgICAgb3Euc3RvcFBvbGxpbmcoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS51cGRhdGVXYXRjaCA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzOyB9XG4gICAgICAgIHZhciBvcSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICBpZiAob3EgJiYgb3Eub3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gXCJuby1jYWNoZVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdhdGNoT3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLmdldERpZmZPcHRpb25zKHZhcmlhYmxlcykpLCB7IHdhdGNoZXI6IHRoaXMsIGNhbGxiYWNrOiBmdW5jdGlvbiAoZGlmZikgeyByZXR1cm4gX3RoaXMuc2V0RGlmZihkaWZmKTsgfSB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RXYXRjaCB8fFxuICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKHdhdGNoT3B0aW9ucywgdGhpcy5sYXN0V2F0Y2gpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwgPSB0aGlzLmNhY2hlLndhdGNoKHRoaXMubGFzdFdhdGNoID0gd2F0Y2hPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5yZXNldExhc3RXcml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYXN0V3JpdGUgPSB2b2lkIDA7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNob3VsZFdyaXRlID0gZnVuY3Rpb24gKHJlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBsYXN0V3JpdGUgPSB0aGlzLmxhc3RXcml0ZTtcbiAgICAgICAgcmV0dXJuICEobGFzdFdyaXRlICYmXG4gICAgICAgICAgICBsYXN0V3JpdGUuZG1Db3VudCA9PT0gZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMuZ2V0KHRoaXMuY2FjaGUpICYmXG4gICAgICAgICAgICBlcXVhbGl0eS5lcXVhbCh2YXJpYWJsZXMsIGxhc3RXcml0ZS52YXJpYWJsZXMpICYmXG4gICAgICAgICAgICBlcXVhbGl0eS5lcXVhbChyZXN1bHQuZGF0YSwgbGFzdFdyaXRlLnJlc3VsdC5kYXRhKSk7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLm1hcmtSZXN1bHQgPSBmdW5jdGlvbiAocmVzdWx0LCBkb2N1bWVudCwgb3B0aW9ucywgY2FjaGVXcml0ZUJlaGF2aW9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBtZXJnZXIgPSBuZXcgdXRpbGl0aWVzLkRlZXBNZXJnZXIoKTtcbiAgICAgICAgdmFyIGdyYXBoUUxFcnJvcnMgPSB1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KHJlc3VsdC5lcnJvcnMpXG4gICAgICAgICAgICA/IHJlc3VsdC5lcnJvcnMuc2xpY2UoMClcbiAgICAgICAgICAgIDogW107XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgaWYgKCdpbmNyZW1lbnRhbCcgaW4gcmVzdWx0ICYmIHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkocmVzdWx0LmluY3JlbWVudGFsKSkge1xuICAgICAgICAgICAgdmFyIG1lcmdlZERhdGEgPSBtZXJnZUluY3JlbWVudGFsRGF0YSh0aGlzLmdldERpZmYoKS5yZXN1bHQsIHJlc3VsdCk7XG4gICAgICAgICAgICByZXN1bHQuZGF0YSA9IG1lcmdlZERhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJ2hhc05leHQnIGluIHJlc3VsdCAmJiByZXN1bHQuaGFzTmV4dCkge1xuICAgICAgICAgICAgdmFyIGRpZmYgPSB0aGlzLmdldERpZmYoKTtcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gbWVyZ2VyLm1lcmdlKGRpZmYucmVzdWx0LCByZXN1bHQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmFwaFFMRXJyb3JzID0gZ3JhcGhRTEVycm9ycztcbiAgICAgICAgaWYgKG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICduby1jYWNoZScpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFzdERpZmYoeyByZXN1bHQ6IHJlc3VsdC5kYXRhLCBjb21wbGV0ZTogdHJ1ZSB9LCB0aGlzLmdldERpZmZPcHRpb25zKG9wdGlvbnMudmFyaWFibGVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FjaGVXcml0ZUJlaGF2aW9yICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkV3JpdGVSZXN1bHQocmVzdWx0LCBvcHRpb25zLmVycm9yUG9saWN5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucGVyZm9ybVRyYW5zYWN0aW9uKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc2hvdWxkV3JpdGUocmVzdWx0LCBvcHRpb25zLnZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBkb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJ3cml0ZTogY2FjaGVXcml0ZUJlaGF2aW9yID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXN0V3JpdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbUNvdW50OiBkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5nZXQoX3RoaXMuY2FjaGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYXN0RGlmZiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxhc3REaWZmLmRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGF0YSA9IF90aGlzLmxhc3REaWZmLmRpZmYucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlmZk9wdGlvbnMgPSBfdGhpcy5nZXREaWZmT3B0aW9ucyhvcHRpb25zLnZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWZmID0gY2FjaGUuZGlmZihkaWZmT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlV2F0Y2gob3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZUxhc3REaWZmKGRpZmYsIGRpZmZPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gZGlmZi5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFdyaXRlID0gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLm1hcmtSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5uZXR3b3JrRXJyb3IgPSBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlYWR5O1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5tYXJrRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5uZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmVycm9yO1xuICAgICAgICB0aGlzLmxhc3RXcml0ZSA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICBpZiAoZXJyb3IuZ3JhcGhRTEVycm9ycykge1xuICAgICAgICAgICAgdGhpcy5ncmFwaFFMRXJyb3JzID0gZXJyb3IuZ3JhcGhRTEVycm9ycztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IubmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICB0aGlzLm5ldHdvcmtFcnJvciA9IGVycm9yLm5ldHdvcmtFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfTtcbiAgICByZXR1cm4gUXVlcnlJbmZvO1xufSgpKTtcbmZ1bmN0aW9uIHNob3VsZFdyaXRlUmVzdWx0KHJlc3VsdCwgZXJyb3JQb2xpY3kpIHtcbiAgICBpZiAoZXJyb3JQb2xpY3kgPT09IHZvaWQgMCkgeyBlcnJvclBvbGljeSA9IFwibm9uZVwiOyB9XG4gICAgdmFyIGlnbm9yZUVycm9ycyA9IGVycm9yUG9saWN5ID09PSBcImlnbm9yZVwiIHx8XG4gICAgICAgIGVycm9yUG9saWN5ID09PSBcImFsbFwiO1xuICAgIHZhciB3cml0ZVdpdGhFcnJvcnMgPSAhdXRpbGl0aWVzLmdyYXBoUUxSZXN1bHRIYXNFcnJvcihyZXN1bHQpO1xuICAgIGlmICghd3JpdGVXaXRoRXJyb3JzICYmIGlnbm9yZUVycm9ycyAmJiByZXN1bHQuZGF0YSkge1xuICAgICAgICB3cml0ZVdpdGhFcnJvcnMgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVXaXRoRXJyb3JzO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFF1ZXJ5TWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUXVlcnlNYW5hZ2VyKF9hKSB7XG4gICAgICAgIHZhciBjYWNoZSA9IF9hLmNhY2hlLCBsaW5rID0gX2EubGluaywgZGVmYXVsdE9wdGlvbnMgPSBfYS5kZWZhdWx0T3B0aW9ucywgX2IgPSBfYS5xdWVyeURlZHVwbGljYXRpb24sIHF1ZXJ5RGVkdXBsaWNhdGlvbiA9IF9iID09PSB2b2lkIDAgPyBmYWxzZSA6IF9iLCBvbkJyb2FkY2FzdCA9IF9hLm9uQnJvYWRjYXN0LCBfYyA9IF9hLnNzck1vZGUsIHNzck1vZGUgPSBfYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYywgX2QgPSBfYS5jbGllbnRBd2FyZW5lc3MsIGNsaWVudEF3YXJlbmVzcyA9IF9kID09PSB2b2lkIDAgPyB7fSA6IF9kLCBsb2NhbFN0YXRlID0gX2EubG9jYWxTdGF0ZSwgYXNzdW1lSW1tdXRhYmxlUmVzdWx0cyA9IF9hLmFzc3VtZUltbXV0YWJsZVJlc3VsdHM7XG4gICAgICAgIHRoaXMuY2xpZW50QXdhcmVuZXNzID0ge307XG4gICAgICAgIHRoaXMucXVlcmllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1DYWNoZSA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtNYXAgPyBXZWFrTWFwIDogTWFwKSgpO1xuICAgICAgICB0aGlzLnF1ZXJ5SWRDb3VudGVyID0gMTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWRDb3VudGVyID0gMTtcbiAgICAgICAgdGhpcy5tdXRhdGlvbklkQ291bnRlciA9IDE7XG4gICAgICAgIHRoaXMuaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgICAgICAgdGhpcy5saW5rID0gbGluaztcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucXVlcnlEZWR1cGxpY2F0aW9uID0gcXVlcnlEZWR1cGxpY2F0aW9uO1xuICAgICAgICB0aGlzLmNsaWVudEF3YXJlbmVzcyA9IGNsaWVudEF3YXJlbmVzcztcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlID0gbG9jYWxTdGF0ZSB8fCBuZXcgTG9jYWxTdGF0ZSh7IGNhY2hlOiBjYWNoZSB9KTtcbiAgICAgICAgdGhpcy5zc3JNb2RlID0gc3NyTW9kZTtcbiAgICAgICAgdGhpcy5hc3N1bWVJbW11dGFibGVSZXN1bHRzID0gISFhc3N1bWVJbW11dGFibGVSZXN1bHRzO1xuICAgICAgICBpZiAoKHRoaXMub25Ccm9hZGNhc3QgPSBvbkJyb2FkY2FzdCkpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25TdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX2luZm8sIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgIF90aGlzLnN0b3BRdWVyeU5vQnJvYWRjYXN0KHF1ZXJ5SWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYW5jZWxQZW5kaW5nRmV0Y2hlcyhfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoJ1F1ZXJ5TWFuYWdlciBzdG9wcGVkIHdoaWxlIHF1ZXJ5IHdhcyBpbiBmbGlnaHQnKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDE0KSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmNhbmNlbFBlbmRpbmdGZXRjaGVzID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hDYW5jZWxGbnMuZm9yRWFjaChmdW5jdGlvbiAoY2FuY2VsKSB7IHJldHVybiBjYW5jZWwoZXJyb3IpOyB9KTtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucy5jbGVhcigpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5tdXRhdGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF9iLCBfYztcbiAgICAgICAgdmFyIG11dGF0aW9uID0gX2EubXV0YXRpb24sIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgb3B0aW1pc3RpY1Jlc3BvbnNlID0gX2Eub3B0aW1pc3RpY1Jlc3BvbnNlLCB1cGRhdGVRdWVyaWVzID0gX2EudXBkYXRlUXVlcmllcywgX2QgPSBfYS5yZWZldGNoUXVlcmllcywgcmVmZXRjaFF1ZXJpZXMgPSBfZCA9PT0gdm9pZCAwID8gW10gOiBfZCwgX2UgPSBfYS5hd2FpdFJlZmV0Y2hRdWVyaWVzLCBhd2FpdFJlZmV0Y2hRdWVyaWVzID0gX2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX2UsIHVwZGF0ZVdpdGhQcm94eUZuID0gX2EudXBkYXRlLCBvblF1ZXJ5VXBkYXRlZCA9IF9hLm9uUXVlcnlVcGRhdGVkLCBfZiA9IF9hLmZldGNoUG9saWN5LCBmZXRjaFBvbGljeSA9IF9mID09PSB2b2lkIDAgPyAoKF9iID0gdGhpcy5kZWZhdWx0T3B0aW9ucy5tdXRhdGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mZXRjaFBvbGljeSkgfHwgXCJuZXR3b3JrLW9ubHlcIiA6IF9mLCBfZyA9IF9hLmVycm9yUG9saWN5LCBlcnJvclBvbGljeSA9IF9nID09PSB2b2lkIDAgPyAoKF9jID0gdGhpcy5kZWZhdWx0T3B0aW9ucy5tdXRhdGUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5lcnJvclBvbGljeSkgfHwgXCJub25lXCIgOiBfZywga2VlcFJvb3RGaWVsZHMgPSBfYS5rZWVwUm9vdEZpZWxkcywgY29udGV4dCA9IF9hLmNvbnRleHQ7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtdXRhdGlvbklkLCBfaCwgZG9jdW1lbnQsIGhhc0NsaWVudEV4cG9ydHMsIG11dGF0aW9uU3RvcmVWYWx1ZSwgc2VsZjtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2opIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9qLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChtdXRhdGlvbiwgJ211dGF0aW9uIG9wdGlvbiBpcyByZXF1aXJlZC4gWW91IG11c3Qgc3BlY2lmeSB5b3VyIEdyYXBoUUwgZG9jdW1lbnQgaW4gdGhlIG11dGF0aW9uIG9wdGlvbi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KG11dGF0aW9uLCAxNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPT09ICduby1jYWNoZScsIFwiTXV0YXRpb25zIHN1cHBvcnQgb25seSAnbmV0d29yay1vbmx5JyBvciAnbm8tY2FjaGUnIGZldGNoUG9saWN5IHN0cmluZ3MuIFRoZSBkZWZhdWx0IGBuZXR3b3JrLW9ubHlgIGJlaGF2aW9yIGF1dG9tYXRpY2FsbHkgd3JpdGVzIG11dGF0aW9uIHJlc3VsdHMgdG8gdGhlIGNhY2hlLiBQYXNzaW5nIGBuby1jYWNoZWAgc2tpcHMgdGhlIGNhY2hlIHdyaXRlLlwiKSA6IGdsb2JhbHMuaW52YXJpYW50KGZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnLCAxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbklkID0gdGhpcy5nZW5lcmF0ZU11dGF0aW9uSWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oID0gdGhpcy50cmFuc2Zvcm0obXV0YXRpb24pLCBkb2N1bWVudCA9IF9oLmRvY3VtZW50LCBoYXNDbGllbnRFeHBvcnRzID0gX2guaGFzQ2xpZW50RXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uID0gdGhpcy5jYWNoZS50cmFuc2Zvcm1Gb3JMaW5rKGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKG11dGF0aW9uLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNDbGllbnRFeHBvcnRzKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmxvY2FsU3RhdGUuYWRkRXhwb3J0ZWRWYXJpYWJsZXMobXV0YXRpb24sIHZhcmlhYmxlcywgY29udGV4dCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMgPSAoX2ouc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9qLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25TdG9yZVZhbHVlID0gdGhpcy5tdXRhdGlvblN0b3JlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMubXV0YXRpb25TdG9yZVttdXRhdGlvbklkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb246IG11dGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW1pc3RpY1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrTXV0YXRpb25PcHRpbWlzdGljKG9wdGltaXN0aWNSZXNwb25zZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbklkOiBtdXRhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yUG9saWN5OiBlcnJvclBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUXVlcmllczogdXBkYXRlUXVlcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGVXaXRoUHJveHlGbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2VlcFJvb3RGaWVsZHM6IGtlZXBSb290RmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbGl0aWVzLmFzeW5jTWFwKHNlbGYuZ2V0T2JzZXJ2YWJsZUZyb21MaW5rKG11dGF0aW9uLCB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIHsgb3B0aW1pc3RpY1Jlc3BvbnNlOiBvcHRpbWlzdGljUmVzcG9uc2UgfSksIHZhcmlhYmxlcywgZmFsc2UpLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmdyYXBoUUxSZXN1bHRIYXNFcnJvcihyZXN1bHQpICYmIGVycm9yUG9saWN5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogdXRpbGl0aWVzLmdldEdyYXBoUUxFcnJvcnNGcm9tUmVzdWx0KHJlc3VsdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXV0YXRpb25TdG9yZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25TdG9yZVZhbHVlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblN0b3JlVmFsdWUuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlUmVzdWx0ID0gdHNsaWIuX19hc3NpZ24oe30sIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlZmV0Y2hRdWVyaWVzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllcyA9IHJlZmV0Y2hRdWVyaWVzKHN0b3JlUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvclBvbGljeSA9PT0gJ2lnbm9yZScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsaXRpZXMuZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHN0b3JlUmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVJlc3VsdC5lcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5tYXJrTXV0YXRpb25SZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uSWQ6IG11dGF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBzdG9yZVJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IGZldGNoUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yUG9saWN5OiBlcnJvclBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogdXBkYXRlV2l0aFByb3h5Rm4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUXVlcmllczogdXBkYXRlUXVlcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdFJlZmV0Y2hRdWVyaWVzOiBhd2FpdFJlZmV0Y2hRdWVyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiByZWZldGNoUXVlcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVPcHRpbWlzdGljOiBvcHRpbWlzdGljUmVzcG9uc2UgPyBtdXRhdGlvbklkIDogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUXVlcnlVcGRhdGVkOiBvblF1ZXJ5VXBkYXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwUm9vdEZpZWxkczoga2VlcFJvb3RGaWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChzdG9yZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCdoYXNOZXh0JyBpbiBzdG9yZVJlc3VsdCkgfHwgc3RvcmVSZXN1bHQuaGFzTmV4dCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzdG9yZVJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uU3RvcmVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblN0b3JlVmFsdWUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblN0b3JlVmFsdWUuZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpbWlzdGljUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWNoZS5yZW1vdmVPcHRpbWlzdGljKG11dGF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyIGluc3RhbmNlb2YgZXJyb3JzLkFwb2xsb0Vycm9yID8gZXJyIDogbmV3IGVycm9ycy5BcG9sbG9FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvcjogZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLm1hcmtNdXRhdGlvblJlc3VsdCA9IGZ1bmN0aW9uIChtdXRhdGlvbiwgY2FjaGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGNhY2hlID09PSB2b2lkIDApIHsgY2FjaGUgPSB0aGlzLmNhY2hlOyB9XG4gICAgICAgIHZhciByZXN1bHQgPSBtdXRhdGlvbi5yZXN1bHQ7XG4gICAgICAgIHZhciBjYWNoZVdyaXRlcyA9IFtdO1xuICAgICAgICB2YXIgc2tpcENhY2hlID0gbXV0YXRpb24uZmV0Y2hQb2xpY3kgPT09IFwibm8tY2FjaGVcIjtcbiAgICAgICAgaWYgKCFza2lwQ2FjaGUgJiYgc2hvdWxkV3JpdGVSZXN1bHQocmVzdWx0LCBtdXRhdGlvbi5lcnJvclBvbGljeSkpIHtcbiAgICAgICAgICAgIGlmICghaXNFeGVjdXRpb25QYXRjaEluY3JlbWVudGFsUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICBjYWNoZVdyaXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUlkOiAnUk9PVF9NVVRBVElPTicsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBtdXRhdGlvbi5kb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBtdXRhdGlvbi52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNFeGVjdXRpb25QYXRjaEluY3JlbWVudGFsUmVzdWx0KHJlc3VsdCkgJiYgdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShyZXN1bHQuaW5jcmVtZW50YWwpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpZmYgPSBjYWNoZS5kaWZmKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiUk9PVF9NVVRBVElPTlwiLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogdGhpcy50cmFuc2Zvcm0obXV0YXRpb24uZG9jdW1lbnQpLmFzUXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogbXV0YXRpb24udmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIG1lcmdlZERhdGEgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZERhdGEgPSBtZXJnZUluY3JlbWVudGFsRGF0YShkaWZmLnJlc3VsdCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXJnZWREYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGF0YSA9IG1lcmdlZERhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlV3JpdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBtZXJnZWREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUlkOiAnUk9PVF9NVVRBVElPTicsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogbXV0YXRpb24uZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG11dGF0aW9uLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHVwZGF0ZVF1ZXJpZXNfMSA9IG11dGF0aW9uLnVwZGF0ZVF1ZXJpZXM7XG4gICAgICAgICAgICBpZiAodXBkYXRlUXVlcmllc18xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9hLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlUXVlcnkgPSBfYS5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeU5hbWUgPSBvYnNlcnZhYmxlUXVlcnkgJiYgb2JzZXJ2YWJsZVF1ZXJ5LnF1ZXJ5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFxdWVyeU5hbWUgfHwgIWhhc093blByb3BlcnR5LmNhbGwodXBkYXRlUXVlcmllc18xLCBxdWVyeU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZXIgPSB1cGRhdGVRdWVyaWVzXzFbcXVlcnlOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9iID0gX3RoaXMucXVlcmllcy5nZXQocXVlcnlJZCksIGRvY3VtZW50ID0gX2IuZG9jdW1lbnQsIHZhcmlhYmxlcyA9IF9iLnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jID0gY2FjaGUuZGlmZih7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pLCBjdXJyZW50UXVlcnlSZXN1bHQgPSBfYy5yZXN1bHQsIGNvbXBsZXRlID0gX2MuY29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZSAmJiBjdXJyZW50UXVlcnlSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0UXVlcnlSZXN1bHQgPSB1cGRhdGVyKGN1cnJlbnRRdWVyeVJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uUmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lOiBkb2N1bWVudCAmJiB1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uTmFtZShkb2N1bWVudCkgfHwgdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UXVlcnlSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVdyaXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBuZXh0UXVlcnlSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJZDogJ1JPT1RfUVVFUlknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhY2hlV3JpdGVzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgIG11dGF0aW9uLnJlZmV0Y2hRdWVyaWVzIHx8XG4gICAgICAgICAgICBtdXRhdGlvbi51cGRhdGUgfHxcbiAgICAgICAgICAgIG11dGF0aW9uLm9uUXVlcnlVcGRhdGVkIHx8XG4gICAgICAgICAgICBtdXRhdGlvbi5yZW1vdmVPcHRpbWlzdGljKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0c18xID0gW107XG4gICAgICAgICAgICB0aGlzLnJlZmV0Y2hRdWVyaWVzKHtcbiAgICAgICAgICAgICAgICB1cGRhdGVDYWNoZTogZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2tpcENhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVdyaXRlcy5mb3JFYWNoKGZ1bmN0aW9uICh3cml0ZSkgeyByZXR1cm4gY2FjaGUud3JpdGUod3JpdGUpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlID0gbXV0YXRpb24udXBkYXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNGaW5hbFJlc3VsdCA9ICFpc0V4ZWN1dGlvblBhdGNoUmVzdWx0KHJlc3VsdCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChpc0V4ZWN1dGlvblBhdGNoSW5jcmVtZW50YWxSZXN1bHQocmVzdWx0KSAmJiAhcmVzdWx0Lmhhc05leHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNraXBDYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWZmID0gY2FjaGUuZGlmZih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIlJPT1RfTVVUQVRJT05cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IF90aGlzLnRyYW5zZm9ybShtdXRhdGlvbi5kb2N1bWVudCkuYXNRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBtdXRhdGlvbi52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgcmVzdWx0KSwgeyBkYXRhOiBkaWZmLnJlc3VsdCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdpbmNyZW1lbnRhbCcgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0LmluY3JlbWVudGFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnaGFzTmV4dCcgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0Lmhhc05leHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGaW5hbFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZShjYWNoZSwgcmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IG11dGF0aW9uLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogbXV0YXRpb24udmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2tpcENhY2hlICYmICFtdXRhdGlvbi5rZWVwUm9vdEZpZWxkcyAmJiBpc0ZpbmFsUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS5tb2RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnUk9PVF9NVVRBVElPTicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBfYS5maWVsZE5hbWUsIERFTEVURSA9IF9hLkRFTEVURTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkTmFtZSA9PT0gXCJfX3R5cGVuYW1lXCIgPyB2YWx1ZSA6IERFTEVURTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IG11dGF0aW9uLnJlZmV0Y2hRdWVyaWVzLFxuICAgICAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlbW92ZU9wdGltaXN0aWM6IG11dGF0aW9uLnJlbW92ZU9wdGltaXN0aWMsXG4gICAgICAgICAgICAgICAgb25RdWVyeVVwZGF0ZWQ6IG11dGF0aW9uLm9uUXVlcnlVcGRhdGVkIHx8IG51bGwsXG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdHNfMS5wdXNoKHJlc3VsdCk7IH0pO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmF3YWl0UmVmZXRjaFF1ZXJpZXMgfHwgbXV0YXRpb24ub25RdWVyeVVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0c18xKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc3VsdDsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5tYXJrTXV0YXRpb25PcHRpbWlzdGljID0gZnVuY3Rpb24gKG9wdGltaXN0aWNSZXNwb25zZSwgbXV0YXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGEgPSB0eXBlb2Ygb3B0aW1pc3RpY1Jlc3BvbnNlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gb3B0aW1pc3RpY1Jlc3BvbnNlKG11dGF0aW9uLnZhcmlhYmxlcylcbiAgICAgICAgICAgIDogb3B0aW1pc3RpY1Jlc3BvbnNlO1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZWNvcmRPcHRpbWlzdGljVHJhbnNhY3Rpb24oZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1hcmtNdXRhdGlvblJlc3VsdCh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbXV0YXRpb24pLCB7IHJlc3VsdDogeyBkYXRhOiBkYXRhIH0gfSksIGNhY2hlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBtdXRhdGlvbi5tdXRhdGlvbklkKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZmV0Y2hRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeUlkLCBvcHRpb25zLCBuZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoUXVlcnlPYnNlcnZhYmxlKHF1ZXJ5SWQsIG9wdGlvbnMsIG5ldHdvcmtTdGF0dXMpLnByb21pc2U7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldFF1ZXJ5U3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICBzdG9yZVtxdWVyeUlkXSA9IHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGluZm8udmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IGluZm8ubmV0d29ya1N0YXR1cyxcbiAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IGluZm8ubmV0d29ya0Vycm9yLFxuICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IGluZm8uZ3JhcGhRTEVycm9ycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlc2V0RXJyb3JzID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdmFyIHF1ZXJ5SW5mbyA9IHRoaXMucXVlcmllcy5nZXQocXVlcnlJZCk7XG4gICAgICAgIGlmIChxdWVyeUluZm8pIHtcbiAgICAgICAgICAgIHF1ZXJ5SW5mby5uZXR3b3JrRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBxdWVyeUluZm8uZ3JhcGhRTEVycm9ycyA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICB2YXIgdHJhbnNmb3JtQ2FjaGUgPSB0aGlzLnRyYW5zZm9ybUNhY2hlO1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUNhY2hlLmhhcyhkb2N1bWVudCkpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1lZCA9IHRoaXMuY2FjaGUudHJhbnNmb3JtRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgICAgICAgICAgdmFyIG5vQ29ubmVjdGlvbiA9IHV0aWxpdGllcy5yZW1vdmVDb25uZWN0aW9uRGlyZWN0aXZlRnJvbURvY3VtZW50KHRyYW5zZm9ybWVkKTtcbiAgICAgICAgICAgIHZhciBjbGllbnRRdWVyeSA9IHRoaXMubG9jYWxTdGF0ZS5jbGllbnRRdWVyeSh0cmFuc2Zvcm1lZCk7XG4gICAgICAgICAgICB2YXIgc2VydmVyUXVlcnkgPSBub0Nvbm5lY3Rpb24gJiYgdGhpcy5sb2NhbFN0YXRlLnNlcnZlclF1ZXJ5KG5vQ29ubmVjdGlvbik7XG4gICAgICAgICAgICB2YXIgY2FjaGVFbnRyeV8xID0ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50OiB0cmFuc2Zvcm1lZCxcbiAgICAgICAgICAgICAgICBoYXNDbGllbnRFeHBvcnRzOiB1dGlsaXRpZXMuaGFzQ2xpZW50RXhwb3J0cyh0cmFuc2Zvcm1lZCksXG4gICAgICAgICAgICAgICAgaGFzRm9yY2VkUmVzb2x2ZXJzOiB0aGlzLmxvY2FsU3RhdGUuc2hvdWxkRm9yY2VSZXNvbHZlcnModHJhbnNmb3JtZWQpLFxuICAgICAgICAgICAgICAgIGNsaWVudFF1ZXJ5OiBjbGllbnRRdWVyeSxcbiAgICAgICAgICAgICAgICBzZXJ2ZXJRdWVyeTogc2VydmVyUXVlcnksXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhcnM6IHV0aWxpdGllcy5nZXREZWZhdWx0VmFsdWVzKHV0aWxpdGllcy5nZXRPcGVyYXRpb25EZWZpbml0aW9uKHRyYW5zZm9ybWVkKSksXG4gICAgICAgICAgICAgICAgYXNRdWVyeTogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRyYW5zZm9ybWVkKSwgeyBkZWZpbml0aW9uczogdHJhbnNmb3JtZWQuZGVmaW5pdGlvbnMubWFwKGZ1bmN0aW9uIChkZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWYua2luZCA9PT0gXCJPcGVyYXRpb25EZWZpbml0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWYub3BlcmF0aW9uICE9PSBcInF1ZXJ5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGRlZiksIHsgb3BlcmF0aW9uOiBcInF1ZXJ5XCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICAgICAgICAgICAgICB9KSB9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBhZGQgPSBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvYyAmJiAhdHJhbnNmb3JtQ2FjaGUuaGFzKGRvYykpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtQ2FjaGUuc2V0KGRvYywgY2FjaGVFbnRyeV8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYWRkKGRvY3VtZW50KTtcbiAgICAgICAgICAgIGFkZCh0cmFuc2Zvcm1lZCk7XG4gICAgICAgICAgICBhZGQoY2xpZW50UXVlcnkpO1xuICAgICAgICAgICAgYWRkKHNlcnZlclF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KGRvY3VtZW50KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0VmFyaWFibGVzID0gZnVuY3Rpb24gKGRvY3VtZW50LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLnRyYW5zZm9ybShkb2N1bWVudCkuZGVmYXVsdFZhcnMpLCB2YXJpYWJsZXMpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS53YXRjaFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyB2YXJpYWJsZXM6IHRoaXMuZ2V0VmFyaWFibGVzKG9wdGlvbnMucXVlcnksIG9wdGlvbnMudmFyaWFibGVzKSB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHF1ZXJ5SW5mbyA9IG5ldyBRdWVyeUluZm8odGhpcyk7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGVRdWVyeSh7XG4gICAgICAgICAgICBxdWVyeU1hbmFnZXI6IHRoaXMsXG4gICAgICAgICAgICBxdWVyeUluZm86IHF1ZXJ5SW5mbyxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuc2V0KG9ic2VydmFibGUucXVlcnlJZCwgcXVlcnlJbmZvKTtcbiAgICAgICAgcXVlcnlJbmZvLmluaXQoe1xuICAgICAgICAgICAgZG9jdW1lbnQ6IG9ic2VydmFibGUucXVlcnksXG4gICAgICAgICAgICBvYnNlcnZhYmxlUXVlcnk6IG9ic2VydmFibGUsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9ic2VydmFibGUudmFyaWFibGVzLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHF1ZXJ5SWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHF1ZXJ5SWQgPT09IHZvaWQgMCkgeyBxdWVyeUlkID0gdGhpcy5nZW5lcmF0ZVF1ZXJ5SWQoKTsgfVxuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQob3B0aW9ucy5xdWVyeSwgJ3F1ZXJ5IG9wdGlvbiBpcyByZXF1aXJlZC4gWW91IG11c3Qgc3BlY2lmeSB5b3VyIEdyYXBoUUwgZG9jdW1lbnQgJyArXG4gICAgICAgICAgICAnaW4gdGhlIHF1ZXJ5IG9wdGlvbi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KG9wdGlvbnMucXVlcnksIDE3KTtcbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wdGlvbnMucXVlcnkua2luZCA9PT0gJ0RvY3VtZW50JywgJ1lvdSBtdXN0IHdyYXAgdGhlIHF1ZXJ5IHN0cmluZyBpbiBhIFwiZ3FsXCIgdGFnLicpIDogZ2xvYmFscy5pbnZhcmlhbnQob3B0aW9ucy5xdWVyeS5raW5kID09PSAnRG9jdW1lbnQnLCAxOCk7XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghb3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSwgJ3JldHVyblBhcnRpYWxEYXRhIG9wdGlvbiBvbmx5IHN1cHBvcnRlZCBvbiB3YXRjaFF1ZXJ5LicpIDogZ2xvYmFscy5pbnZhcmlhbnQoIW9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEsIDE5KTtcbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KCFvcHRpb25zLnBvbGxJbnRlcnZhbCwgJ3BvbGxJbnRlcnZhbCBvcHRpb24gb25seSBzdXBwb3J0ZWQgb24gd2F0Y2hRdWVyeS4nKSA6IGdsb2JhbHMuaW52YXJpYW50KCFvcHRpb25zLnBvbGxJbnRlcnZhbCwgMjApO1xuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFF1ZXJ5KHF1ZXJ5SWQsIG9wdGlvbnMpLmZpbmFsbHkoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc3RvcFF1ZXJ5KHF1ZXJ5SWQpOyB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVRdWVyeUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMucXVlcnlJZENvdW50ZXIrKyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdlbmVyYXRlUmVxdWVzdElkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SWRDb3VudGVyKys7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdlbmVyYXRlTXV0YXRpb25JZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLm11dGF0aW9uSWRDb3VudGVyKyspO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wUXVlcnlJblN0b3JlID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5zdG9wUXVlcnlJblN0b3JlTm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wUXVlcnlJblN0b3JlTm9Ccm9hZGNhc3QgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB2YXIgcXVlcnlJbmZvID0gdGhpcy5xdWVyaWVzLmdldChxdWVyeUlkKTtcbiAgICAgICAgaWYgKHF1ZXJ5SW5mbylcbiAgICAgICAgICAgIHF1ZXJ5SW5mby5zdG9wKCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmNsZWFyU3RvcmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkaXNjYXJkV2F0Y2hlczogdHJ1ZSxcbiAgICAgICAgfTsgfVxuICAgICAgICB0aGlzLmNhbmNlbFBlbmRpbmdGZXRjaGVzKF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcignU3RvcmUgcmVzZXQgd2hpbGUgcXVlcnkgd2FzIGluIGZsaWdodCAobm90IGNvbXBsZXRlZCBpbiBsaW5rIGNoYWluKScpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMjEpKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5SW5mbykge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5SW5mby5vYnNlcnZhYmxlUXVlcnkpIHtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8ubmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5sb2FkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uU3RvcmUpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25TdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVzZXQob3B0aW9ucyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldE9ic2VydmFibGVRdWVyaWVzID0gZnVuY3Rpb24gKGluY2x1ZGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGluY2x1ZGUgPT09IHZvaWQgMCkgeyBpbmNsdWRlID0gXCJhY3RpdmVcIjsgfVxuICAgICAgICB2YXIgcXVlcmllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdmFyIHF1ZXJ5TmFtZXNBbmREb2NzID0gbmV3IE1hcCgpO1xuICAgICAgICB2YXIgbGVnYWN5UXVlcnlPcHRpb25zID0gbmV3IFNldCgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbmNsdWRlKSkge1xuICAgICAgICAgICAgaW5jbHVkZS5mb3JFYWNoKGZ1bmN0aW9uIChkZXNjKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXNjID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZXNBbmREb2NzLnNldChkZXNjLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxpdGllcy5pc0RvY3VtZW50Tm9kZShkZXNjKSkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeU5hbWVzQW5kRG9jcy5zZXQoX3RoaXMudHJhbnNmb3JtKGRlc2MpLmRvY3VtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QoZGVzYykgJiYgZGVzYy5xdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICBsZWdhY3lRdWVyeU9wdGlvbnMuYWRkKGRlc2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSwgcXVlcnlJZCkge1xuICAgICAgICAgICAgdmFyIG9xID0gX2Eub2JzZXJ2YWJsZVF1ZXJ5LCBkb2N1bWVudCA9IF9hLmRvY3VtZW50O1xuICAgICAgICAgICAgaWYgKG9xKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluY2x1ZGUgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcmllcy5zZXQocXVlcnlJZCwgb3EpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBxdWVyeU5hbWUgPSBvcS5xdWVyeU5hbWUsIGZldGNoUG9saWN5ID0gb3Eub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgPT09IFwic3RhbmRieVwiIHx8XG4gICAgICAgICAgICAgICAgICAgIChpbmNsdWRlID09PSBcImFjdGl2ZVwiICYmICFvcS5oYXNPYnNlcnZlcnMoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZSA9PT0gXCJhY3RpdmVcIiB8fFxuICAgICAgICAgICAgICAgICAgICAocXVlcnlOYW1lICYmIHF1ZXJ5TmFtZXNBbmREb2NzLmhhcyhxdWVyeU5hbWUpKSB8fFxuICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQgJiYgcXVlcnlOYW1lc0FuZERvY3MuaGFzKGRvY3VtZW50KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcmllcy5zZXQocXVlcnlJZCwgb3EpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lc0FuZERvY3Muc2V0KHF1ZXJ5TmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZXNBbmREb2NzLnNldChkb2N1bWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxlZ2FjeVF1ZXJ5T3B0aW9ucy5zaXplKSB7XG4gICAgICAgICAgICBsZWdhY3lRdWVyeU9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeUlkID0gdXRpbGl0aWVzLm1ha2VVbmlxdWVJZChcImxlZ2FjeU9uZVRpbWVRdWVyeVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlJbmZvID0gX3RoaXMuZ2V0UXVlcnkocXVlcnlJZCkuaW5pdCh7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBvcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBvcSA9IG5ldyBPYnNlcnZhYmxlUXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeU1hbmFnZXI6IF90aGlzLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeUluZm86IHF1ZXJ5SW5mbyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGZldGNoUG9saWN5OiBcIm5ldHdvcmstb25seVwiIH0pLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGdsb2JhbHMuaW52YXJpYW50KG9xLnF1ZXJ5SWQgPT09IHF1ZXJ5SWQpO1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5zZXRPYnNlcnZhYmxlUXVlcnkob3EpO1xuICAgICAgICAgICAgICAgIHF1ZXJpZXMuc2V0KHF1ZXJ5SWQsIG9xKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX0RFVl9fICYmIHF1ZXJ5TmFtZXNBbmREb2NzLnNpemUpIHtcbiAgICAgICAgICAgIHF1ZXJ5TmFtZXNBbmREb2NzLmZvckVhY2goZnVuY3Rpb24gKGluY2x1ZGVkLCBuYW1lT3JEb2MpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWluY2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIlVua25vd24gcXVlcnkgXCIuY29uY2F0KHR5cGVvZiBuYW1lT3JEb2MgPT09IFwic3RyaW5nXCIgPyBcIm5hbWVkIFwiIDogXCJcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KG5hbWVPckRvYywgbnVsbCwgMiksIFwiIHJlcXVlc3RlZCBpbiByZWZldGNoUXVlcmllcyBvcHRpb25zLmluY2x1ZGUgYXJyYXlcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyaWVzO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMgPSBmdW5jdGlvbiAoaW5jbHVkZVN0YW5kYnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGluY2x1ZGVTdGFuZGJ5ID09PSB2b2lkIDApIHsgaW5jbHVkZVN0YW5kYnkgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgb2JzZXJ2YWJsZVF1ZXJ5UHJvbWlzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5nZXRPYnNlcnZhYmxlUXVlcmllcyhpbmNsdWRlU3RhbmRieSA/IFwiYWxsXCIgOiBcImFjdGl2ZVwiKS5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZhYmxlUXVlcnksIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgIHZhciBmZXRjaFBvbGljeSA9IG9ic2VydmFibGVRdWVyeS5vcHRpb25zLmZldGNoUG9saWN5O1xuICAgICAgICAgICAgb2JzZXJ2YWJsZVF1ZXJ5LnJlc2V0TGFzdFJlc3VsdHMoKTtcbiAgICAgICAgICAgIGlmIChpbmNsdWRlU3RhbmRieSB8fFxuICAgICAgICAgICAgICAgIChmZXRjaFBvbGljeSAhPT0gXCJzdGFuZGJ5XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgIT09IFwiY2FjaGUtb25seVwiKSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGVRdWVyeVByb21pc2VzLnB1c2gob2JzZXJ2YWJsZVF1ZXJ5LnJlZmV0Y2goKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5nZXRRdWVyeShxdWVyeUlkKS5zZXREaWZmKG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChvYnNlcnZhYmxlUXVlcnlQcm9taXNlcyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnNldE9ic2VydmFibGVRdWVyeSA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlUXVlcnkpIHtcbiAgICAgICAgdGhpcy5nZXRRdWVyeShvYnNlcnZhYmxlUXVlcnkucXVlcnlJZCkuc2V0T2JzZXJ2YWJsZVF1ZXJ5KG9ic2VydmFibGVRdWVyeSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0YXJ0R3JhcGhRTFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcXVlcnkgPSBfYS5xdWVyeSwgZmV0Y2hQb2xpY3kgPSBfYS5mZXRjaFBvbGljeSwgZXJyb3JQb2xpY3kgPSBfYS5lcnJvclBvbGljeSwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBfYiA9IF9hLmNvbnRleHQsIGNvbnRleHQgPSBfYiA9PT0gdm9pZCAwID8ge30gOiBfYjtcbiAgICAgICAgcXVlcnkgPSB0aGlzLnRyYW5zZm9ybShxdWVyeSkuZG9jdW1lbnQ7XG4gICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKHF1ZXJ5LCB2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgbWFrZU9ic2VydmFibGUgPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0T2JzZXJ2YWJsZUZyb21MaW5rKHF1ZXJ5LCBjb250ZXh0LCB2YXJpYWJsZXMpLm1hcChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGZldGNoUG9saWN5ICE9PSAnbm8tY2FjaGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRXcml0ZVJlc3VsdChyZXN1bHQsIGVycm9yUG9saWN5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2FjaGUud3JpdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJZDogJ1JPT1RfU1VCU0NSSVBUSU9OJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5ncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IHJlc3VsdC5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybShxdWVyeSkuaGFzQ2xpZW50RXhwb3J0cykge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGVQcm9taXNlXzEgPSB0aGlzLmxvY2FsU3RhdGUuYWRkRXhwb3J0ZWRWYXJpYWJsZXMocXVlcnksIHZhcmlhYmxlcywgY29udGV4dCkudGhlbihtYWtlT2JzZXJ2YWJsZSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHV0aWxpdGllcy5PYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBudWxsO1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGVQcm9taXNlXzEudGhlbihmdW5jdGlvbiAob2JzZXJ2YWJsZSkgeyByZXR1cm4gc3ViID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUob2JzZXJ2ZXIpOyB9LCBvYnNlcnZlci5lcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YiAmJiBzdWIudW5zdWJzY3JpYmUoKTsgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYWtlT2JzZXJ2YWJsZSh2YXJpYWJsZXMpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wUXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB0aGlzLnN0b3BRdWVyeU5vQnJvYWRjYXN0KHF1ZXJ5SWQpO1xuICAgICAgICB0aGlzLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcFF1ZXJ5Tm9Ccm9hZGNhc3QgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB0aGlzLnN0b3BRdWVyeUluU3RvcmVOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgdGhpcy5yZW1vdmVRdWVyeShxdWVyeUlkKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucmVtb3ZlUXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB0aGlzLmZldGNoQ2FuY2VsRm5zLmRlbGV0ZShxdWVyeUlkKTtcbiAgICAgICAgaWYgKHRoaXMucXVlcmllcy5oYXMocXVlcnlJZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UXVlcnkocXVlcnlJZCkuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5xdWVyaWVzLmRlbGV0ZShxdWVyeUlkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5icm9hZGNhc3RRdWVyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vbkJyb2FkY2FzdClcbiAgICAgICAgICAgIHRoaXMub25Ccm9hZGNhc3QoKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKGluZm8pIHsgcmV0dXJuIGluZm8ubm90aWZ5KCk7IH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRMb2NhbFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFN0YXRlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRPYnNlcnZhYmxlRnJvbUxpbmsgPSBmdW5jdGlvbiAocXVlcnksIGNvbnRleHQsIHZhcmlhYmxlcywgZGVkdXBsaWNhdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChkZWR1cGxpY2F0aW9uID09PSB2b2lkIDApIHsgZGVkdXBsaWNhdGlvbiA9IChfYSA9IGNvbnRleHQgPT09IG51bGwgfHwgY29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGV4dC5xdWVyeURlZHVwbGljYXRpb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRoaXMucXVlcnlEZWR1cGxpY2F0aW9uOyB9XG4gICAgICAgIHZhciBvYnNlcnZhYmxlO1xuICAgICAgICB2YXIgc2VydmVyUXVlcnkgPSB0aGlzLnRyYW5zZm9ybShxdWVyeSkuc2VydmVyUXVlcnk7XG4gICAgICAgIGlmIChzZXJ2ZXJRdWVyeSkge1xuICAgICAgICAgICAgdmFyIF9iID0gdGhpcywgaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXNfMSA9IF9iLmluRmxpZ2h0TGlua09ic2VydmFibGVzLCBsaW5rID0gX2IubGluaztcbiAgICAgICAgICAgIHZhciBvcGVyYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHNlcnZlclF1ZXJ5LFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbk5hbWU6IHV0aWxpdGllcy5nZXRPcGVyYXRpb25OYW1lKHNlcnZlclF1ZXJ5KSB8fCB2b2lkIDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogdGhpcy5wcmVwYXJlQ29udGV4dCh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIHsgZm9yY2VGZXRjaDogIWRlZHVwbGljYXRpb24gfSkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnRleHQgPSBvcGVyYXRpb24uY29udGV4dDtcbiAgICAgICAgICAgIGlmIChkZWR1cGxpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ5VmFyaWFibGVzXzEgPSBpbkZsaWdodExpbmtPYnNlcnZhYmxlc18xLmdldChzZXJ2ZXJRdWVyeSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgIGluRmxpZ2h0TGlua09ic2VydmFibGVzXzEuc2V0KHNlcnZlclF1ZXJ5LCBieVZhcmlhYmxlc18xKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFySnNvbl8xID0gY2FjaGUuY2Fub25pY2FsU3RyaW5naWZ5KHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IGJ5VmFyaWFibGVzXzEuZ2V0KHZhckpzb25fMSk7XG4gICAgICAgICAgICAgICAgaWYgKCFvYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jYXN0ID0gbmV3IHV0aWxpdGllcy5Db25jYXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcmUuZXhlY3V0ZShsaW5rLCBvcGVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICBieVZhcmlhYmxlc18xLnNldCh2YXJKc29uXzEsIG9ic2VydmFibGUgPSBjb25jYXN0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uY2FzdC5iZWZvcmVOZXh0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChieVZhcmlhYmxlc18xLmRlbGV0ZSh2YXJKc29uXzEpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlWYXJpYWJsZXNfMS5zaXplIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluRmxpZ2h0TGlua09ic2VydmFibGVzXzEuZGVsZXRlKHNlcnZlclF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IG5ldyB1dGlsaXRpZXMuQ29uY2FzdChbXG4gICAgICAgICAgICAgICAgICAgIGNvcmUuZXhlY3V0ZShsaW5rLCBvcGVyYXRpb24pXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gbmV3IHV0aWxpdGllcy5Db25jYXN0KFtcbiAgICAgICAgICAgICAgICB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZih7IGRhdGE6IHt9IH0pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLnByZXBhcmVDb250ZXh0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbGllbnRRdWVyeSA9IHRoaXMudHJhbnNmb3JtKHF1ZXJ5KS5jbGllbnRRdWVyeTtcbiAgICAgICAgaWYgKGNsaWVudFF1ZXJ5KSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gdXRpbGl0aWVzLmFzeW5jTWFwKG9ic2VydmFibGUsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubG9jYWxTdGF0ZS5ydW5SZXNvbHZlcnMoe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogY2xpZW50UXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZVJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRSZXN1bHRzRnJvbUxpbmsgPSBmdW5jdGlvbiAocXVlcnlJbmZvLCBjYWNoZVdyaXRlQmVoYXZpb3IsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3RJZCA9IHF1ZXJ5SW5mby5sYXN0UmVxdWVzdElkID0gdGhpcy5nZW5lcmF0ZVJlcXVlc3RJZCgpO1xuICAgICAgICB2YXIgbGlua0RvY3VtZW50ID0gdGhpcy5jYWNoZS50cmFuc2Zvcm1Gb3JMaW5rKHRoaXMudHJhbnNmb3JtKHF1ZXJ5SW5mby5kb2N1bWVudCkuZG9jdW1lbnQpO1xuICAgICAgICByZXR1cm4gdXRpbGl0aWVzLmFzeW5jTWFwKHRoaXMuZ2V0T2JzZXJ2YWJsZUZyb21MaW5rKGxpbmtEb2N1bWVudCwgb3B0aW9ucy5jb250ZXh0LCBvcHRpb25zLnZhcmlhYmxlcyksIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHZhciBncmFwaFFMRXJyb3JzID0gdXRpbGl0aWVzLmdldEdyYXBoUUxFcnJvcnNGcm9tUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgICB2YXIgaGFzRXJyb3JzID0gZ3JhcGhRTEVycm9ycy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RJZCA+PSBxdWVyeUluZm8ubGFzdFJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNFcnJvcnMgJiYgb3B0aW9ucy5lcnJvclBvbGljeSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgcXVlcnlJbmZvLm1hcmtFcnJvcihuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IGdyYXBoUUxFcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm1hcmtSZXN1bHQocmVzdWx0LCBsaW5rRG9jdW1lbnQsIG9wdGlvbnMsIGNhY2hlV3JpdGVCZWhhdmlvcik7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm1hcmtSZWFkeSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFxciA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVhZHksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGhhc0Vycm9ycyAmJiBvcHRpb25zLmVycm9yUG9saWN5ICE9PSBcImlnbm9yZVwiKSB7XG4gICAgICAgICAgICAgICAgYXFyLmVycm9ycyA9IGdyYXBoUUxFcnJvcnM7XG4gICAgICAgICAgICAgICAgYXFyLm5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXFyO1xuICAgICAgICB9LCBmdW5jdGlvbiAobmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBlcnJvcnMuaXNBcG9sbG9FcnJvcihuZXR3b3JrRXJyb3IpXG4gICAgICAgICAgICAgICAgPyBuZXR3b3JrRXJyb3JcbiAgICAgICAgICAgICAgICA6IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3IoeyBuZXR3b3JrRXJyb3I6IG5ldHdvcmtFcnJvciB9KTtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0SWQgPj0gcXVlcnlJbmZvLmxhc3RSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8ubWFya0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZmV0Y2hRdWVyeU9ic2VydmFibGUgPSBmdW5jdGlvbiAocXVlcnlJZCwgb3B0aW9ucywgbmV0d29ya1N0YXR1cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobmV0d29ya1N0YXR1cyA9PT0gdm9pZCAwKSB7IG5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMubG9hZGluZzsgfVxuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnRyYW5zZm9ybShvcHRpb25zLnF1ZXJ5KS5kb2N1bWVudDtcbiAgICAgICAgdmFyIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKHF1ZXJ5LCBvcHRpb25zLnZhcmlhYmxlcyk7XG4gICAgICAgIHZhciBxdWVyeUluZm8gPSB0aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpO1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRPcHRpb25zLndhdGNoUXVlcnk7XG4gICAgICAgIHZhciBfYSA9IG9wdGlvbnMuZmV0Y2hQb2xpY3ksIGZldGNoUG9saWN5ID0gX2EgPT09IHZvaWQgMCA/IGRlZmF1bHRzICYmIGRlZmF1bHRzLmZldGNoUG9saWN5IHx8IFwiY2FjaGUtZmlyc3RcIiA6IF9hLCBfYiA9IG9wdGlvbnMuZXJyb3JQb2xpY3ksIGVycm9yUG9saWN5ID0gX2IgPT09IHZvaWQgMCA/IGRlZmF1bHRzICYmIGRlZmF1bHRzLmVycm9yUG9saWN5IHx8IFwibm9uZVwiIDogX2IsIF9jID0gb3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSwgcmV0dXJuUGFydGlhbERhdGEgPSBfYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYywgX2QgPSBvcHRpb25zLm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSwgbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlID0gX2QgPT09IHZvaWQgMCA/IGZhbHNlIDogX2QsIF9lID0gb3B0aW9ucy5jb250ZXh0LCBjb250ZXh0ID0gX2UgPT09IHZvaWQgMCA/IHt9IDogX2U7XG4gICAgICAgIHZhciBub3JtYWxpemVkID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICBlcnJvclBvbGljeTogZXJyb3JQb2xpY3ksXG4gICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogcmV0dXJuUGFydGlhbERhdGEsXG4gICAgICAgICAgICBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2U6IG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZnJvbVZhcmlhYmxlcyA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgICAgICAgICAgdmFyIGNvbmNhc3RTb3VyY2VzID0gX3RoaXMuZmV0Y2hRdWVyeUJ5UG9saWN5KHF1ZXJ5SW5mbywgbm9ybWFsaXplZCwgbmV0d29ya1N0YXR1cyk7XG4gICAgICAgICAgICBpZiAobm9ybWFsaXplZC5mZXRjaFBvbGljeSAhPT0gXCJzdGFuZGJ5XCIgJiZcbiAgICAgICAgICAgICAgICBjb25jYXN0U291cmNlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5vYnNlcnZhYmxlUXVlcnlbXCJhcHBseU5leHRGZXRjaFBvbGljeVwiXShcImFmdGVyLWZldGNoXCIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNhc3RTb3VyY2VzO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY2xlYW51cENhbmNlbEZuID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZmV0Y2hDYW5jZWxGbnMuZGVsZXRlKHF1ZXJ5SWQpOyB9O1xuICAgICAgICB0aGlzLmZldGNoQ2FuY2VsRm5zLnNldChxdWVyeUlkLCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICBjbGVhbnVwQ2FuY2VsRm4oKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uY2FzdC5jYW5jZWwocmVhc29uKTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY29uY2FzdCA9IG5ldyB1dGlsaXRpZXMuQ29uY2FzdCh0aGlzLnRyYW5zZm9ybShub3JtYWxpemVkLnF1ZXJ5KS5oYXNDbGllbnRFeHBvcnRzXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxTdGF0ZS5hZGRFeHBvcnRlZFZhcmlhYmxlcyhub3JtYWxpemVkLnF1ZXJ5LCBub3JtYWxpemVkLnZhcmlhYmxlcywgbm9ybWFsaXplZC5jb250ZXh0KS50aGVuKGZyb21WYXJpYWJsZXMpXG4gICAgICAgICAgICA6IGZyb21WYXJpYWJsZXMobm9ybWFsaXplZC52YXJpYWJsZXMpKTtcbiAgICAgICAgY29uY2FzdC5wcm9taXNlLnRoZW4oY2xlYW51cENhbmNlbEZuLCBjbGVhbnVwQ2FuY2VsRm4pO1xuICAgICAgICByZXR1cm4gY29uY2FzdDtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucmVmZXRjaFF1ZXJpZXMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHVwZGF0ZUNhY2hlID0gX2EudXBkYXRlQ2FjaGUsIGluY2x1ZGUgPSBfYS5pbmNsdWRlLCBfYiA9IF9hLm9wdGltaXN0aWMsIG9wdGltaXN0aWMgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYiwgX2MgPSBfYS5yZW1vdmVPcHRpbWlzdGljLCByZW1vdmVPcHRpbWlzdGljID0gX2MgPT09IHZvaWQgMCA/IG9wdGltaXN0aWMgPyB1dGlsaXRpZXMubWFrZVVuaXF1ZUlkKFwicmVmZXRjaFF1ZXJpZXNcIikgOiB2b2lkIDAgOiBfYywgb25RdWVyeVVwZGF0ZWQgPSBfYS5vblF1ZXJ5VXBkYXRlZDtcbiAgICAgICAgdmFyIGluY2x1ZGVkUXVlcmllc0J5SWQgPSBuZXcgTWFwKCk7XG4gICAgICAgIGlmIChpbmNsdWRlKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9ic2VydmFibGVRdWVyaWVzKGluY2x1ZGUpLmZvckVhY2goZnVuY3Rpb24gKG9xLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICAgICAgaW5jbHVkZWRRdWVyaWVzQnlJZC5zZXQocXVlcnlJZCwge1xuICAgICAgICAgICAgICAgICAgICBvcTogb3EsXG4gICAgICAgICAgICAgICAgICAgIGxhc3REaWZmOiBfdGhpcy5nZXRRdWVyeShxdWVyeUlkKS5nZXREaWZmKCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0cyA9IG5ldyBNYXA7XG4gICAgICAgIGlmICh1cGRhdGVDYWNoZSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5iYXRjaCh7XG4gICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGVDYWNoZSxcbiAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBvcHRpbWlzdGljICYmIHJlbW92ZU9wdGltaXN0aWMgfHwgZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVtb3ZlT3B0aW1pc3RpYzogcmVtb3ZlT3B0aW1pc3RpYyxcbiAgICAgICAgICAgICAgICBvbldhdGNoVXBkYXRlZDogZnVuY3Rpb24gKHdhdGNoLCBkaWZmLCBsYXN0RGlmZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3EgPSB3YXRjaC53YXRjaGVyIGluc3RhbmNlb2YgUXVlcnlJbmZvICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXRjaC53YXRjaGVyLm9ic2VydmFibGVRdWVyeTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25RdWVyeVVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZFF1ZXJpZXNCeUlkLmRlbGV0ZShvcS5xdWVyeUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gb25RdWVyeVVwZGF0ZWQob3EsIGRpZmYsIGxhc3REaWZmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9xLnJlZmV0Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zZXQob3EsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25RdWVyeVVwZGF0ZWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZFF1ZXJpZXNCeUlkLnNldChvcS5xdWVyeUlkLCB7IG9xOiBvcSwgbGFzdERpZmY6IGxhc3REaWZmLCBkaWZmOiBkaWZmIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmNsdWRlZFF1ZXJpZXNCeUlkLnNpemUpIHtcbiAgICAgICAgICAgIGluY2x1ZGVkUXVlcmllc0J5SWQuZm9yRWFjaChmdW5jdGlvbiAoX2EsIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3EgPSBfYS5vcSwgbGFzdERpZmYgPSBfYS5sYXN0RGlmZiwgZGlmZiA9IF9hLmRpZmY7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAob25RdWVyeVVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IG9xW1wicXVlcnlJbmZvXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZiA9IGluZm8uZ2V0RGlmZigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9uUXVlcnlVcGRhdGVkKG9xLCBkaWZmLCBsYXN0RGlmZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghb25RdWVyeVVwZGF0ZWQgfHwgcmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9xLnJlZmV0Y2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zZXQob3EsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChxdWVyeUlkLmluZGV4T2YoXCJsZWdhY3lPbmVUaW1lUXVlcnlcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdG9wUXVlcnlOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVtb3ZlT3B0aW1pc3RpYykge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5yZW1vdmVPcHRpbWlzdGljKHJlbW92ZU9wdGltaXN0aWMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5mZXRjaFF1ZXJ5QnlQb2xpY3kgPSBmdW5jdGlvbiAocXVlcnlJbmZvLCBfYSwgbmV0d29ya1N0YXR1cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcXVlcnkgPSBfYS5xdWVyeSwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBmZXRjaFBvbGljeSA9IF9hLmZldGNoUG9saWN5LCByZWZldGNoV3JpdGVQb2xpY3kgPSBfYS5yZWZldGNoV3JpdGVQb2xpY3ksIGVycm9yUG9saWN5ID0gX2EuZXJyb3JQb2xpY3ksIHJldHVyblBhcnRpYWxEYXRhID0gX2EucmV0dXJuUGFydGlhbERhdGEsIGNvbnRleHQgPSBfYS5jb250ZXh0LCBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgPSBfYS5ub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2U7XG4gICAgICAgIHZhciBvbGROZXR3b3JrU3RhdHVzID0gcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXM7XG4gICAgICAgIHF1ZXJ5SW5mby5pbml0KHtcbiAgICAgICAgICAgIGRvY3VtZW50OiB0aGlzLnRyYW5zZm9ybShxdWVyeSkuZG9jdW1lbnQsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcmVhZENhY2hlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcXVlcnlJbmZvLmdldERpZmYodmFyaWFibGVzKTsgfTtcbiAgICAgICAgdmFyIHJlc3VsdHNGcm9tQ2FjaGUgPSBmdW5jdGlvbiAoZGlmZiwgbmV0d29ya1N0YXR1cykge1xuICAgICAgICAgICAgaWYgKG5ldHdvcmtTdGF0dXMgPT09IHZvaWQgMCkgeyBuZXR3b3JrU3RhdHVzID0gcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgfHwgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmc7IH1cbiAgICAgICAgICAgIHZhciBkYXRhID0gZGlmZi5yZXN1bHQ7XG4gICAgICAgICAgICBpZiAoX19ERVZfXyAmJlxuICAgICAgICAgICAgICAgICFyZXR1cm5QYXJ0aWFsRGF0YSAmJlxuICAgICAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbChkYXRhLCB7fSkpIHtcbiAgICAgICAgICAgICAgICBsb2dNaXNzaW5nRmllbGRFcnJvcnMoZGlmZi5taXNzaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmcm9tRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZih0c2xpYi5fX2Fzc2lnbih7IGRhdGE6IGRhdGEsIGxvYWRpbmc6IGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChuZXR3b3JrU3RhdHVzKSwgbmV0d29ya1N0YXR1czogbmV0d29ya1N0YXR1cyB9LCAoZGlmZi5jb21wbGV0ZSA/IG51bGwgOiB7IHBhcnRpYWw6IHRydWUgfSkpKTsgfTtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIF90aGlzLnRyYW5zZm9ybShxdWVyeSkuaGFzRm9yY2VkUmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxvY2FsU3RhdGUucnVuUmVzb2x2ZXJzKHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVSZXN1bHQ6IHsgZGF0YTogZGF0YSB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgb25seVJ1bkZvcmNlZFJlc29sdmVyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZCkgeyByZXR1cm4gZnJvbURhdGEocmVzb2x2ZWQuZGF0YSB8fCB2b2lkIDApOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnJvclBvbGljeSA9PT0gJ25vbmUnICYmXG4gICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlZmV0Y2ggJiZcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGRpZmYubWlzc2luZykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJvbURhdGEodm9pZCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmcm9tRGF0YShkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNhY2hlV3JpdGVCZWhhdmlvciA9IGZldGNoUG9saWN5ID09PSBcIm5vLWNhY2hlXCIgPyAwIDpcbiAgICAgICAgICAgIChuZXR3b3JrU3RhdHVzID09PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVmZXRjaCAmJlxuICAgICAgICAgICAgICAgIHJlZmV0Y2hXcml0ZVBvbGljeSAhPT0gXCJtZXJnZVwiKSA/IDFcbiAgICAgICAgICAgICAgICA6IDI7XG4gICAgICAgIHZhciByZXN1bHRzRnJvbUxpbmsgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5nZXRSZXN1bHRzRnJvbUxpbmsocXVlcnlJbmZvLCBjYWNoZVdyaXRlQmVoYXZpb3IsIHtcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiBmZXRjaFBvbGljeSxcbiAgICAgICAgICAgIGVycm9yUG9saWN5OiBlcnJvclBvbGljeSxcbiAgICAgICAgfSk7IH07XG4gICAgICAgIHZhciBzaG91bGROb3RpZnkgPSBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgJiZcbiAgICAgICAgICAgIHR5cGVvZiBvbGROZXR3b3JrU3RhdHVzID09PSBcIm51bWJlclwiICYmXG4gICAgICAgICAgICBvbGROZXR3b3JrU3RhdHVzICE9PSBuZXR3b3JrU3RhdHVzICYmXG4gICAgICAgICAgICBpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQobmV0d29ya1N0YXR1cyk7XG4gICAgICAgIHN3aXRjaCAoZmV0Y2hQb2xpY3kpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYXNlIFwiY2FjaGUtZmlyc3RcIjoge1xuICAgICAgICAgICAgICAgIHZhciBkaWZmID0gcmVhZENhY2hlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUoZGlmZiwgcXVlcnlJbmZvLm1hcmtSZWFkeSgpKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJldHVyblBhcnRpYWxEYXRhIHx8IHNob3VsZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShkaWZmKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tTGluaygpLFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNhY2hlLWFuZC1uZXR3b3JrXCI6IHtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IHJlYWRDYWNoZSgpO1xuICAgICAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlIHx8IHJldHVyblBhcnRpYWxEYXRhIHx8IHNob3VsZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShkaWZmKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tTGluaygpLFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNhY2hlLW9ubHlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUNhY2hlKHJlYWRDYWNoZSgpLCBxdWVyeUluZm8ubWFya1JlYWR5KCkpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjYXNlIFwibmV0d29yay1vbmx5XCI6XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShyZWFkQ2FjaGUoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtyZXN1bHRzRnJvbUxpbmsoKV07XG4gICAgICAgICAgICBjYXNlIFwibm8tY2FjaGVcIjpcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkTm90aWZ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUNhY2hlKHF1ZXJ5SW5mby5nZXREaWZmKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKCksXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbcmVzdWx0c0Zyb21MaW5rKCldO1xuICAgICAgICAgICAgY2FzZSBcInN0YW5kYnlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0UXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICBpZiAocXVlcnlJZCAmJiAhdGhpcy5xdWVyaWVzLmhhcyhxdWVyeUlkKSkge1xuICAgICAgICAgICAgdGhpcy5xdWVyaWVzLnNldChxdWVyeUlkLCBuZXcgUXVlcnlJbmZvKHRoaXMsIHF1ZXJ5SWQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLmdldChxdWVyeUlkKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucHJlcGFyZUNvbnRleHQgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgICAgICB2YXIgbmV3Q29udGV4dCA9IHRoaXMubG9jYWxTdGF0ZS5wcmVwYXJlQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBuZXdDb250ZXh0KSwgeyBjbGllbnRBd2FyZW5lc3M6IHRoaXMuY2xpZW50QXdhcmVuZXNzIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXJ5TWFuYWdlcjtcbn0oKSk7XG5cbnZhciBoYXNTdWdnZXN0ZWREZXZ0b29scyA9IGZhbHNlO1xudmFyIEFwb2xsb0NsaWVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBvbGxvQ2xpZW50KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzID0gW107XG4gICAgICAgIHRoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB2YXIgdXJpID0gb3B0aW9ucy51cmksIGNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscywgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycywgY2FjaGUgPSBvcHRpb25zLmNhY2hlLCBfYSA9IG9wdGlvbnMuc3NyTW9kZSwgc3NyTW9kZSA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3NyRm9yY2VGZXRjaERlbGF5LCBzc3JGb3JjZUZldGNoRGVsYXkgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLCBfYyA9IG9wdGlvbnMuY29ubmVjdFRvRGV2VG9vbHMsIGNvbm5lY3RUb0RldlRvb2xzID0gX2MgPT09IHZvaWQgMCA/IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAhd2luZG93Ll9fQVBPTExPX0NMSUVOVF9fICYmXG4gICAgICAgICAgICBfX0RFVl9fIDogX2MsIF9kID0gb3B0aW9ucy5xdWVyeURlZHVwbGljYXRpb24sIHF1ZXJ5RGVkdXBsaWNhdGlvbiA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2QsIGRlZmF1bHRPcHRpb25zID0gb3B0aW9ucy5kZWZhdWx0T3B0aW9ucywgX2UgPSBvcHRpb25zLmFzc3VtZUltbXV0YWJsZVJlc3VsdHMsIGFzc3VtZUltbXV0YWJsZVJlc3VsdHMgPSBfZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZSwgcmVzb2x2ZXJzID0gb3B0aW9ucy5yZXNvbHZlcnMsIHR5cGVEZWZzID0gb3B0aW9ucy50eXBlRGVmcywgZnJhZ21lbnRNYXRjaGVyID0gb3B0aW9ucy5mcmFnbWVudE1hdGNoZXIsIGNsaWVudEF3YXJlbmVzc05hbWUgPSBvcHRpb25zLm5hbWUsIGNsaWVudEF3YXJlbmVzc1ZlcnNpb24gPSBvcHRpb25zLnZlcnNpb247XG4gICAgICAgIHZhciBsaW5rID0gb3B0aW9ucy5saW5rO1xuICAgICAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgICAgIGxpbmsgPSB1cmlcbiAgICAgICAgICAgICAgICA/IG5ldyBodHRwLkh0dHBMaW5rKHsgdXJpOiB1cmksIGNyZWRlbnRpYWxzOiBjcmVkZW50aWFscywgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgICAgIDogY29yZS5BcG9sbG9MaW5rLmVtcHR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYWNoZSkge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiVG8gaW5pdGlhbGl6ZSBBcG9sbG8gQ2xpZW50LCB5b3UgbXVzdCBzcGVjaWZ5IGEgJ2NhY2hlJyBwcm9wZXJ0eSBcIiArXG4gICAgICAgICAgICAgICAgXCJpbiB0aGUgb3B0aW9ucyBvYmplY3QuIFxcblwiICtcbiAgICAgICAgICAgICAgICBcIkZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlzaXQ6IGh0dHBzOi8vZ28uYXBvbGxvLmRldi9jL2RvY3NcIikgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgIHRoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzID0gc3NyTW9kZSB8fCBzc3JGb3JjZUZldGNoRGVsYXkgPiAwO1xuICAgICAgICB0aGlzLnF1ZXJ5RGVkdXBsaWNhdGlvbiA9IHF1ZXJ5RGVkdXBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMudHlwZURlZnMgPSB0eXBlRGVmcztcbiAgICAgICAgaWYgKHNzckZvcmNlRmV0Y2hEZWxheSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiAoX3RoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzID0gZmFsc2UpOyB9LCBzc3JGb3JjZUZldGNoRGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2F0Y2hRdWVyeSA9IHRoaXMud2F0Y2hRdWVyeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm11dGF0ZSA9IHRoaXMubXV0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVzZXRTdG9yZSA9IHRoaXMucmVzZXRTdG9yZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcyA9IHRoaXMucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzLmJpbmQodGhpcyk7XG4gICAgICAgIGlmIChjb25uZWN0VG9EZXZUb29scyAmJiB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgd2luZG93Ll9fQVBPTExPX0NMSUVOVF9fID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhc1N1Z2dlc3RlZERldnRvb2xzICYmIGNvbm5lY3RUb0RldlRvb2xzICYmIF9fREVWX18pIHtcbiAgICAgICAgICAgIGhhc1N1Z2dlc3RlZERldnRvb2xzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudCAmJlxuICAgICAgICAgICAgICAgIHdpbmRvdy50b3AgPT09IHdpbmRvdy5zZWxmICYmXG4gICAgICAgICAgICAgICAgIXdpbmRvdy5fX0FQT0xMT19ERVZUT09MU19HTE9CQUxfSE9PS19fKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hdiA9IHdpbmRvdy5uYXZpZ2F0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHVhID0gbmF2ICYmIG5hdi51c2VyQWdlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1YS5pbmRleE9mKFwiQ2hyb21lL1wiKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBcImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwb2xsby1jbGllbnQtZGV2ZWxvcGVyLXQvamRra25ra2JlYmJhcGlsZ29lY2NjaWdsa2ZibWJuZm1cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh1YS5pbmRleE9mKFwiRmlyZWZveC9cIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gXCJodHRwczovL2FkZG9ucy5tb3ppbGxhLm9yZy9lbi1VUy9maXJlZm94L2FkZG9uL2Fwb2xsby1kZXZlbG9wZXItdG9vbHMvXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmxvZyhcIkRvd25sb2FkIHRoZSBBcG9sbG8gRGV2VG9vbHMgZm9yIGEgYmV0dGVyIGRldmVsb3BtZW50IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwZXJpZW5jZTogXCIgKyB1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUgPSBuZXcgTG9jYWxTdGF0ZSh7XG4gICAgICAgICAgICBjYWNoZTogY2FjaGUsXG4gICAgICAgICAgICBjbGllbnQ6IHRoaXMsXG4gICAgICAgICAgICByZXNvbHZlcnM6IHJlc29sdmVycyxcbiAgICAgICAgICAgIGZyYWdtZW50TWF0Y2hlcjogZnJhZ21lbnRNYXRjaGVyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIgPSBuZXcgUXVlcnlNYW5hZ2VyKHtcbiAgICAgICAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgICAgICAgbGluazogdGhpcy5saW5rLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHRoaXMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICAgICAgICBxdWVyeURlZHVwbGljYXRpb246IHF1ZXJ5RGVkdXBsaWNhdGlvbixcbiAgICAgICAgICAgIHNzck1vZGU6IHNzck1vZGUsXG4gICAgICAgICAgICBjbGllbnRBd2FyZW5lc3M6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBjbGllbnRBd2FyZW5lc3NOYW1lLFxuICAgICAgICAgICAgICAgIHZlcnNpb246IGNsaWVudEF3YXJlbmVzc1ZlcnNpb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9jYWxTdGF0ZTogdGhpcy5sb2NhbFN0YXRlLFxuICAgICAgICAgICAgYXNzdW1lSW1tdXRhYmxlUmVzdWx0czogYXNzdW1lSW1tdXRhYmxlUmVzdWx0cyxcbiAgICAgICAgICAgIG9uQnJvYWRjYXN0OiBjb25uZWN0VG9EZXZUb29scyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGV2VG9vbHNIb29rQ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGV2VG9vbHNIb29rQ2Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcmllczogX3RoaXMucXVlcnlNYW5hZ2VyLmdldFF1ZXJ5U3RvcmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnM6IF90aGlzLnF1ZXJ5TWFuYWdlci5tdXRhdGlvblN0b3JlIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFXaXRoT3B0aW1pc3RpY1Jlc3VsdHM6IF90aGlzLmNhY2hlLmV4dHJhY3QodHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gOiB2b2lkIDAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnN0b3AoKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUud2F0Y2hRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRPcHRpb25zLndhdGNoUXVlcnkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1dGlsaXRpZXMubWVyZ2VPcHRpb25zKHRoaXMuZGVmYXVsdE9wdGlvbnMud2F0Y2hRdWVyeSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzICYmXG4gICAgICAgICAgICAob3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScgfHxcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID09PSAnY2FjaGUtYW5kLW5ldHdvcmsnKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBmZXRjaFBvbGljeTogJ2NhY2hlLWZpcnN0JyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIud2F0Y2hRdWVyeShvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0T3B0aW9ucy5xdWVyeSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHV0aWxpdGllcy5tZXJnZU9wdGlvbnModGhpcy5kZWZhdWx0T3B0aW9ucy5xdWVyeSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wdGlvbnMuZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1hbmQtbmV0d29yaycsICdUaGUgY2FjaGUtYW5kLW5ldHdvcmsgZmV0Y2hQb2xpY3kgZG9lcyBub3Qgd29yayB3aXRoIGNsaWVudC5xdWVyeSwgYmVjYXVzZSAnICtcbiAgICAgICAgICAgICdjbGllbnQucXVlcnkgY2FuIG9ubHkgcmV0dXJuIGEgc2luZ2xlIHJlc3VsdC4gUGxlYXNlIHVzZSBjbGllbnQud2F0Y2hRdWVyeSAnICtcbiAgICAgICAgICAgICd0byByZWNlaXZlIG11bHRpcGxlIHJlc3VsdHMgZnJvbSB0aGUgY2FjaGUgYW5kIHRoZSBuZXR3b3JrLCBvciBjb25zaWRlciAnICtcbiAgICAgICAgICAgICd1c2luZyBhIGRpZmZlcmVudCBmZXRjaFBvbGljeSwgc3VjaCBhcyBjYWNoZS1maXJzdCBvciBuZXR3b3JrLW9ubHkuJykgOiBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLmZldGNoUG9saWN5ICE9PSAnY2FjaGUtYW5kLW5ldHdvcmsnLCAxMCk7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVOZXR3b3JrRmV0Y2hlcyAmJiBvcHRpb25zLmZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5Jykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBmZXRjaFBvbGljeTogJ2NhY2hlLWZpcnN0JyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIucXVlcnkob3B0aW9ucyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLm11dGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRPcHRpb25zLm11dGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHV0aWxpdGllcy5tZXJnZU9wdGlvbnModGhpcy5kZWZhdWx0T3B0aW9ucy5tdXRhdGUsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5tdXRhdGUob3B0aW9ucyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5zdGFydEdyYXBoUUxTdWJzY3JpcHRpb24ob3B0aW9ucyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlYWRRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnJlYWRRdWVyeShvcHRpb25zLCBvcHRpbWlzdGljKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVhZEZyYWdtZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVhZEZyYWdtZW50KG9wdGlvbnMsIG9wdGltaXN0aWMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS53cml0ZVF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jYWNoZS53cml0ZVF1ZXJ5KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLndyaXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNhY2hlLndyaXRlRnJhZ21lbnQob3B0aW9ucyk7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuX19hY3Rpb25Ib29rRm9yRGV2VG9vbHMgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdGhpcy5kZXZUb29sc0hvb2tDYiA9IGNiO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5fX3JlcXVlc3RSYXcgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gY29yZS5leGVjdXRlKHRoaXMubGluaywgcGF5bG9hZCk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlc2V0U3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucXVlcnlNYW5hZ2VyLmNsZWFyU3RvcmUoe1xuICAgICAgICAgICAgZGlzY2FyZFdhdGNoZXM6IGZhbHNlLFxuICAgICAgICB9KTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UuYWxsKF90aGlzLnJlc2V0U3RvcmVDYWxsYmFja3MubWFwKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfSkpOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzKCk7IH0pO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5jbGVhclN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnF1ZXJ5TWFuYWdlci5jbGVhclN0b3JlKHtcbiAgICAgICAgICAgIGRpc2NhcmRXYXRjaGVzOiB0cnVlLFxuICAgICAgICB9KTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UuYWxsKF90aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MubWFwKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfSkpOyB9KTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUub25SZXNldFN0b3JlID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucmVzZXRTdG9yZUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJlc2V0U3RvcmVDYWxsYmFja3MgPSBfdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gY2I7IH0pO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5vbkNsZWFyU3RvcmUgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhclN0b3JlQ2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcyA9IF90aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSBjYjsgfSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcyA9IGZ1bmN0aW9uIChpbmNsdWRlU3RhbmRieSkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzKGluY2x1ZGVTdGFuZGJ5KTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVmZXRjaFF1ZXJpZXMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgbWFwID0gdGhpcy5xdWVyeU1hbmFnZXIucmVmZXRjaFF1ZXJpZXMob3B0aW9ucyk7XG4gICAgICAgIHZhciBxdWVyaWVzID0gW107XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIG1hcC5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQsIG9ic1F1ZXJ5KSB7XG4gICAgICAgICAgICBxdWVyaWVzLnB1c2gob2JzUXVlcnkpO1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gUHJvbWlzZS5hbGwocmVzdWx0cyk7XG4gICAgICAgIHJlc3VsdC5xdWVyaWVzID0gcXVlcmllcztcbiAgICAgICAgcmVzdWx0LnJlc3VsdHMgPSByZXN1bHRzO1xuICAgICAgICByZXN1bHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmRlYnVnKFwiSW4gY2xpZW50LnJlZmV0Y2hRdWVyaWVzLCBQcm9taXNlLmFsbCBwcm9taXNlIHJlamVjdGVkIHdpdGggZXJyb3IgXCIuY29uY2F0KGVycm9yKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5nZXRPYnNlcnZhYmxlUXVlcmllcyA9IGZ1bmN0aW9uIChpbmNsdWRlKSB7XG4gICAgICAgIGlmIChpbmNsdWRlID09PSB2b2lkIDApIHsgaW5jbHVkZSA9IFwiYWN0aXZlXCI7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLmdldE9ic2VydmFibGVRdWVyaWVzKGluY2x1ZGUpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKG9wdGltaXN0aWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuZXh0cmFjdChvcHRpbWlzdGljKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVzdG9yZSA9IGZ1bmN0aW9uIChzZXJpYWxpemVkU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVzdG9yZShzZXJpYWxpemVkU3RhdGUpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5hZGRSZXNvbHZlcnMgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdGF0ZS5hZGRSZXNvbHZlcnMocmVzb2x2ZXJzKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc2V0UmVzb2x2ZXJzID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUuc2V0UmVzb2x2ZXJzKHJlc29sdmVycyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmdldFJlc29sdmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTdGF0ZS5nZXRSZXNvbHZlcnMoKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc2V0TG9jYWxTdGF0ZUZyYWdtZW50TWF0Y2hlciA9IGZ1bmN0aW9uIChmcmFnbWVudE1hdGNoZXIpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlLnNldEZyYWdtZW50TWF0Y2hlcihmcmFnbWVudE1hdGNoZXIpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5zZXRMaW5rID0gZnVuY3Rpb24gKG5ld0xpbmspIHtcbiAgICAgICAgdGhpcy5saW5rID0gdGhpcy5xdWVyeU1hbmFnZXIubGluayA9IG5ld0xpbms7XG4gICAgfTtcbiAgICByZXR1cm4gQXBvbGxvQ2xpZW50O1xufSgpKTtcblxudHNJbnZhcmlhbnQuc2V0VmVyYm9zaXR5KGdsb2JhbHMuREVWID8gXCJsb2dcIiA6IFwic2lsZW50XCIpO1xuXG5leHBvcnRzLkFwb2xsb0NhY2hlID0gY2FjaGUuQXBvbGxvQ2FjaGU7XG5leHBvcnRzLkNhY2hlID0gY2FjaGUuQ2FjaGU7XG5leHBvcnRzLkluTWVtb3J5Q2FjaGUgPSBjYWNoZS5Jbk1lbW9yeUNhY2hlO1xuZXhwb3J0cy5NaXNzaW5nRmllbGRFcnJvciA9IGNhY2hlLk1pc3NpbmdGaWVsZEVycm9yO1xuZXhwb3J0cy5kZWZhdWx0RGF0YUlkRnJvbU9iamVjdCA9IGNhY2hlLmRlZmF1bHREYXRhSWRGcm9tT2JqZWN0O1xuZXhwb3J0cy5tYWtlVmFyID0gY2FjaGUubWFrZVZhcjtcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IHV0aWxpdGllcy5PYnNlcnZhYmxlO1xuZXhwb3J0cy5pc1JlZmVyZW5jZSA9IHV0aWxpdGllcy5pc1JlZmVyZW5jZTtcbmV4cG9ydHMubWFrZVJlZmVyZW5jZSA9IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlO1xuZXhwb3J0cy5tZXJnZU9wdGlvbnMgPSB1dGlsaXRpZXMubWVyZ2VPcHRpb25zO1xuZXhwb3J0cy5BcG9sbG9FcnJvciA9IGVycm9ycy5BcG9sbG9FcnJvcjtcbmV4cG9ydHMuaXNBcG9sbG9FcnJvciA9IGVycm9ycy5pc0Fwb2xsb0Vycm9yO1xuZXhwb3J0cy5mcm9tRXJyb3IgPSB1dGlscy5mcm9tRXJyb3I7XG5leHBvcnRzLmZyb21Qcm9taXNlID0gdXRpbHMuZnJvbVByb21pc2U7XG5leHBvcnRzLnRocm93U2VydmVyRXJyb3IgPSB1dGlscy50aHJvd1NlcnZlckVycm9yO1xuZXhwb3J0cy50b1Byb21pc2UgPSB1dGlscy50b1Byb21pc2U7XG5leHBvcnRzLnNldExvZ1ZlcmJvc2l0eSA9IHRzSW52YXJpYW50LnNldFZlcmJvc2l0eTtcbmV4cG9ydHMuZGlzYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzID0gZ3JhcGhxbFRhZy5kaXNhYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXM7XG5leHBvcnRzLmRpc2FibGVGcmFnbWVudFdhcm5pbmdzID0gZ3JhcGhxbFRhZy5kaXNhYmxlRnJhZ21lbnRXYXJuaW5ncztcbmV4cG9ydHMuZW5hYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBncmFwaHFsVGFnLmVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzO1xuZXhwb3J0cy5ncWwgPSBncmFwaHFsVGFnLmdxbDtcbmV4cG9ydHMucmVzZXRDYWNoZXMgPSBncmFwaHFsVGFnLnJlc2V0Q2FjaGVzO1xuZXhwb3J0cy5BcG9sbG9DbGllbnQgPSBBcG9sbG9DbGllbnQ7XG5leHBvcnRzLk9ic2VydmFibGVRdWVyeSA9IE9ic2VydmFibGVRdWVyeTtcbmZvciAodmFyIGsgaW4gY29yZSkge1xuICAgIGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIGV4cG9ydHNba10gPSBjb3JlW2tdO1xufVxuZm9yICh2YXIgayBpbiBodHRwKSB7XG4gICAgaWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgZXhwb3J0c1trXSA9IGh0dHBba107XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnJlcXVpcmUoJy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzJyk7XG5cbmZ1bmN0aW9uIGlzQXBvbGxvRXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyci5oYXNPd25Qcm9wZXJ0eSgnZ3JhcGhRTEVycm9ycycpO1xufVxudmFyIGdlbmVyYXRlRXJyb3JNZXNzYWdlID0gZnVuY3Rpb24gKGVycikge1xuICAgIHZhciBtZXNzYWdlID0gJyc7XG4gICAgaWYgKHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkoZXJyLmdyYXBoUUxFcnJvcnMpIHx8IHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkoZXJyLmNsaWVudEVycm9ycykpIHtcbiAgICAgICAgdmFyIGVycm9ycyA9IChlcnIuZ3JhcGhRTEVycm9ycyB8fCBbXSlcbiAgICAgICAgICAgIC5jb25jYXQoZXJyLmNsaWVudEVycm9ycyB8fCBbXSk7XG4gICAgICAgIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yXG4gICAgICAgICAgICAgICAgPyBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgOiAnRXJyb3IgbWVzc2FnZSBub3QgZm91bmQuJztcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCJcIi5jb25jYXQoZXJyb3JNZXNzYWdlLCBcIlxcblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlcnIubmV0d29ya0Vycm9yKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gXCJcIi5jb25jYXQoZXJyLm5ldHdvcmtFcnJvci5tZXNzYWdlLCBcIlxcblwiKTtcbiAgICB9XG4gICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgvXFxuJC8sICcnKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbn07XG52YXIgQXBvbGxvRXJyb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhBcG9sbG9FcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcG9sbG9FcnJvcihfYSkge1xuICAgICAgICB2YXIgZ3JhcGhRTEVycm9ycyA9IF9hLmdyYXBoUUxFcnJvcnMsIGNsaWVudEVycm9ycyA9IF9hLmNsaWVudEVycm9ycywgbmV0d29ya0Vycm9yID0gX2EubmV0d29ya0Vycm9yLCBlcnJvck1lc3NhZ2UgPSBfYS5lcnJvck1lc3NhZ2UsIGV4dHJhSW5mbyA9IF9hLmV4dHJhSW5mbztcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZXJyb3JNZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gJ0Fwb2xsb0Vycm9yJztcbiAgICAgICAgX3RoaXMuZ3JhcGhRTEVycm9ycyA9IGdyYXBoUUxFcnJvcnMgfHwgW107XG4gICAgICAgIF90aGlzLmNsaWVudEVycm9ycyA9IGNsaWVudEVycm9ycyB8fCBbXTtcbiAgICAgICAgX3RoaXMubmV0d29ya0Vycm9yID0gbmV0d29ya0Vycm9yIHx8IG51bGw7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgfHwgZ2VuZXJhdGVFcnJvck1lc3NhZ2UoX3RoaXMpO1xuICAgICAgICBfdGhpcy5leHRyYUluZm8gPSBleHRyYUluZm87XG4gICAgICAgIF90aGlzLl9fcHJvdG9fXyA9IEFwb2xsb0Vycm9yLnByb3RvdHlwZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQXBvbGxvRXJyb3I7XG59KEVycm9yKSk7XG5cbmV4cG9ydHMuQXBvbGxvRXJyb3IgPSBBcG9sbG9FcnJvcjtcbmV4cG9ydHMuaXNBcG9sbG9FcnJvciA9IGlzQXBvbGxvRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvcnMuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuLi9jb3JlJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzJyk7XG5cbmZ1bmN0aW9uIHNldENvbnRleHQoc2V0dGVyKSB7XG4gICAgcmV0dXJuIG5ldyBjb3JlLkFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHRzbGliLl9fcmVzdChvcGVyYXRpb24sIFtdKTtcbiAgICAgICAgcmV0dXJuIG5ldyB1dGlsaXRpZXMuT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGU7XG4gICAgICAgICAgICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUocmVxdWVzdClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVxKSB7IHJldHVybiBzZXR0ZXIocmVxLCBvcGVyYXRpb24uZ2V0Q29udGV4dCgpKTsgfSlcbiAgICAgICAgICAgICAgICAudGhlbihvcGVyYXRpb24uc2V0Q29udGV4dClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsb3NlZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGhhbmRsZSA9IGZvcndhcmQob3BlcmF0aW9uKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBuZXh0OiBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogb2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBvYnNlcnZlci5jb21wbGV0ZS5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlKVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnRzLnNldENvbnRleHQgPSBzZXRDb250ZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGV4dC5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5mdW5jdGlvbiBwYXNzdGhyb3VnaChvcCwgZm9yd2FyZCkge1xuICAgIHJldHVybiAoZm9yd2FyZCA/IGZvcndhcmQob3ApIDogdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKSk7XG59XG5mdW5jdGlvbiB0b0xpbmsoaGFuZGxlcikge1xuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBBcG9sbG9MaW5rKGhhbmRsZXIpIDogaGFuZGxlcjtcbn1cbmZ1bmN0aW9uIGlzVGVybWluYXRpbmcobGluaykge1xuICAgIHJldHVybiBsaW5rLnJlcXVlc3QubGVuZ3RoIDw9IDE7XG59XG52YXIgTGlua0Vycm9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoTGlua0Vycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExpbmtFcnJvcihtZXNzYWdlLCBsaW5rKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1lc3NhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBMaW5rRXJyb3I7XG59KEVycm9yKSk7XG52YXIgQXBvbGxvTGluayA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBvbGxvTGluayhyZXF1ZXN0KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0KVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICB9XG4gICAgQXBvbGxvTGluay5lbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCk7IH0pO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5mcm9tID0gZnVuY3Rpb24gKGxpbmtzKSB7XG4gICAgICAgIGlmIChsaW5rcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gQXBvbGxvTGluay5lbXB0eSgpO1xuICAgICAgICByZXR1cm4gbGlua3MubWFwKHRvTGluaykucmVkdWNlKGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiB4LmNvbmNhdCh5KTsgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnNwbGl0ID0gZnVuY3Rpb24gKHRlc3QsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHZhciBsZWZ0TGluayA9IHRvTGluayhsZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0TGluayA9IHRvTGluayhyaWdodCB8fCBuZXcgQXBvbGxvTGluayhwYXNzdGhyb3VnaCkpO1xuICAgICAgICBpZiAoaXNUZXJtaW5hdGluZyhsZWZ0TGluaykgJiYgaXNUZXJtaW5hdGluZyhyaWdodExpbmspKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0KG9wZXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgPyBsZWZ0TGluay5yZXF1ZXN0KG9wZXJhdGlvbikgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKVxuICAgICAgICAgICAgICAgICAgICA6IHJpZ2h0TGluay5yZXF1ZXN0KG9wZXJhdGlvbikgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdChvcGVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgID8gbGVmdExpbmsucmVxdWVzdChvcGVyYXRpb24sIGZvcndhcmQpIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKClcbiAgICAgICAgICAgICAgICAgICAgOiByaWdodExpbmsucmVxdWVzdChvcGVyYXRpb24sIGZvcndhcmQpIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXBvbGxvTGluay5leGVjdXRlID0gZnVuY3Rpb24gKGxpbmssIG9wZXJhdGlvbikge1xuICAgICAgICByZXR1cm4gKGxpbmsucmVxdWVzdCh1dGlscy5jcmVhdGVPcGVyYXRpb24ob3BlcmF0aW9uLmNvbnRleHQsIHV0aWxzLnRyYW5zZm9ybU9wZXJhdGlvbih1dGlscy52YWxpZGF0ZU9wZXJhdGlvbihvcGVyYXRpb24pKSkpIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCkpO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5jb25jYXQgPSBmdW5jdGlvbiAoZmlyc3QsIHNlY29uZCkge1xuICAgICAgICB2YXIgZmlyc3RMaW5rID0gdG9MaW5rKGZpcnN0KTtcbiAgICAgICAgaWYgKGlzVGVybWluYXRpbmcoZmlyc3RMaW5rKSkge1xuICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKG5ldyBMaW5rRXJyb3IoXCJZb3UgYXJlIGNhbGxpbmcgY29uY2F0IG9uIGEgdGVybWluYXRpbmcgbGluaywgd2hpY2ggd2lsbCBoYXZlIG5vIGVmZmVjdFwiLCBmaXJzdExpbmspKTtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdExpbms7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5leHRMaW5rID0gdG9MaW5rKHNlY29uZCk7XG4gICAgICAgIGlmIChpc1Rlcm1pbmF0aW5nKG5leHRMaW5rKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlyc3RMaW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmdW5jdGlvbiAob3ApIHsgcmV0dXJuIG5leHRMaW5rLnJlcXVlc3Qob3ApIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCk7IH0pIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uLCBmb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChmaXJzdExpbmsucmVxdWVzdChvcGVyYXRpb24sIGZ1bmN0aW9uIChvcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dExpbmsucmVxdWVzdChvcCwgZm9yd2FyZCkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKTtcbiAgICAgICAgICAgICAgICB9KSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5zcGxpdCA9IGZ1bmN0aW9uICh0ZXN0LCBsZWZ0LCByaWdodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25jYXQoQXBvbGxvTGluay5zcGxpdCh0ZXN0LCBsZWZ0LCByaWdodCB8fCBuZXcgQXBvbGxvTGluayhwYXNzdGhyb3VnaCkpKTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG9MaW5rLmNvbmNhdCh0aGlzLCBuZXh0KTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiAob3BlcmF0aW9uLCBmb3J3YXJkKSB7XG4gICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigncmVxdWVzdCBpcyBub3QgaW1wbGVtZW50ZWQnKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDIyKTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIG9ic2VydmVyKSB7XG4gICAgICAgIGlmIChvYnNlcnZlciAmJiBvYnNlcnZlci5lcnJvcikge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUuc2V0T25FcnJvciA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB0aGlzLm9uRXJyb3IgPSBmbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gQXBvbGxvTGluaztcbn0oKSk7XG5cbnZhciBlbXB0eSA9IEFwb2xsb0xpbmsuZW1wdHk7XG5cbnZhciBmcm9tID0gQXBvbGxvTGluay5mcm9tO1xuXG52YXIgc3BsaXQgPSBBcG9sbG9MaW5rLnNwbGl0O1xuXG52YXIgY29uY2F0ID0gQXBvbGxvTGluay5jb25jYXQ7XG5cbnZhciBleGVjdXRlID0gQXBvbGxvTGluay5leGVjdXRlO1xuXG5leHBvcnRzLkFwb2xsb0xpbmsgPSBBcG9sbG9MaW5rO1xuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG5leHBvcnRzLmV4ZWN1dGUgPSBleGVjdXRlO1xuZXhwb3J0cy5mcm9tID0gZnJvbTtcbmV4cG9ydHMuc3BsaXQgPSBzcGxpdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBncmFwaHFsID0gcmVxdWlyZSgnZ3JhcGhxbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuLi9jb3JlJyk7XG5cbnR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmXG4gICAgZ2xvYmFscy5tYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBuYXZpZ2F0b3IucHJvZHVjdDsgfSkgIT09ICdSZWFjdE5hdGl2ZSc7XG52YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBTeW1ib2wuZm9yID09PSAnZnVuY3Rpb24nO1xudmFyIGNhblVzZUFzeW5jSXRlcmF0b3JTeW1ib2wgPSBjYW5Vc2VTeW1ib2wgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3I7XG50eXBlb2YgZ2xvYmFscy5tYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudDsgfSkgPT09IFwiZnVuY3Rpb25cIjtcbmdsb2JhbHMubWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwianNkb21cIikgPj0gMDsgfSkgfHwgZmFsc2U7XG5cbmZ1bmN0aW9uIGlzTm9kZVJlc3BvbnNlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUuYm9keTtcbn1cbmZ1bmN0aW9uIGlzUmVhZGFibGVTdHJlYW0odmFsdWUpIHtcbiAgICByZXR1cm4gISF2YWx1ZS5nZXRSZWFkZXI7XG59XG5mdW5jdGlvbiBpc0FzeW5jSXRlcmFibGVJdGVyYXRvcih2YWx1ZSkge1xuICAgIHJldHVybiAhIShjYW5Vc2VBc3luY0l0ZXJhdG9yU3ltYm9sICYmXG4gICAgICAgIHZhbHVlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG59XG5mdW5jdGlvbiBpc1N0cmVhbWFibGVCbG9iKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUuc3RyZWFtO1xufVxuZnVuY3Rpb24gaXNCbG9iKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUuYXJyYXlCdWZmZXI7XG59XG5mdW5jdGlvbiBpc05vZGVSZWFkYWJsZVN0cmVhbSh2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlLnBpcGU7XG59XG5cbmZ1bmN0aW9uIGFzeW5jSXRlcmF0b3Ioc291cmNlKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciBpdGVyYXRvciA9IHNvdXJjZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTtcbiAgICByZXR1cm4gX2EgPSB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX2FbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIF9hO1xufVxuXG5mdW5jdGlvbiBub2RlU3RyZWFtSXRlcmF0b3Ioc3RyZWFtKSB7XG4gICAgdmFyIGNsZWFudXAgPSBudWxsO1xuICAgIHZhciBlcnJvciA9IG51bGw7XG4gICAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIHZhciB3YWl0aW5nID0gW107XG4gICAgZnVuY3Rpb24gb25EYXRhKGNodW5rKSB7XG4gICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHdhaXRpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgc2hpZnRlZEFyciA9IHdhaXRpbmcuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNoaWZ0ZWRBcnIpICYmIHNoaWZ0ZWRBcnJbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpZnRlZEFyclswXSh7IHZhbHVlOiBjaHVuaywgZG9uZTogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5wdXNoKGNodW5rKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25FcnJvcihlcnIpIHtcbiAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgIHZhciBhbGwgPSB3YWl0aW5nLnNsaWNlKCk7XG4gICAgICAgIGFsbC5mb3JFYWNoKGZ1bmN0aW9uIChwYWlyKSB7XG4gICAgICAgICAgICBwYWlyWzFdKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICAhY2xlYW51cCB8fCBjbGVhbnVwKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uRW5kKCkge1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgdmFyIGFsbCA9IHdhaXRpbmcuc2xpY2UoKTtcbiAgICAgICAgYWxsLmZvckVhY2goZnVuY3Rpb24gKHBhaXIpIHtcbiAgICAgICAgICAgIHBhaXJbMF0oeyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgIWNsZWFudXAgfHwgY2xlYW51cCgpO1xuICAgIH1cbiAgICBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhbnVwID0gbnVsbDtcbiAgICAgICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKFwiZGF0YVwiLCBvbkRhdGEpO1xuICAgICAgICBzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcbiAgICAgICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKFwiZW5kXCIsIG9uRW5kKTtcbiAgICAgICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKFwiZmluaXNoXCIsIG9uRW5kKTtcbiAgICAgICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKFwiY2xvc2VcIiwgb25FbmQpO1xuICAgIH07XG4gICAgc3RyZWFtLm9uKFwiZGF0YVwiLCBvbkRhdGEpO1xuICAgIHN0cmVhbS5vbihcImVycm9yXCIsIG9uRXJyb3IpO1xuICAgIHN0cmVhbS5vbihcImVuZFwiLCBvbkVuZCk7XG4gICAgc3RyZWFtLm9uKFwiZmluaXNoXCIsIG9uRW5kKTtcbiAgICBzdHJlYW0ub24oXCJjbG9zZVwiLCBvbkVuZCk7XG4gICAgZnVuY3Rpb24gZ2V0TmV4dCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IHZhbHVlOiBkYXRhLnNoaWZ0KCksIGRvbmU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgaWYgKGRvbmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH0pO1xuICAgICAgICAgICAgd2FpdGluZy5wdXNoKFtyZXNvbHZlLCByZWplY3RdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldE5leHQoKTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGlmICh1dGlsaXRpZXMuY2FuVXNlQXN5bmNJdGVyYXRvclN5bWJvbCkge1xuICAgICAgICBpdGVyYXRvcltTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuXG5mdW5jdGlvbiBwcm9taXNlSXRlcmF0b3IocHJvbWlzZSkge1xuICAgIHZhciByZXNvbHZlZCA9IGZhbHNlO1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHJlc29sdmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgdmFsdWU6IHZhbHVlLCBkb25lOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgaWYgKHV0aWxpdGllcy5jYW5Vc2VBc3luY0l0ZXJhdG9yU3ltYm9sKSB7XG4gICAgICAgIGl0ZXJhdG9yW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gaXRlcmF0b3I7XG59XG5cbmZ1bmN0aW9uIHJlYWRlckl0ZXJhdG9yKHJlYWRlcikge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKCk7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAodXRpbGl0aWVzLmNhblVzZUFzeW5jSXRlcmF0b3JTeW1ib2wpIHtcbiAgICAgICAgaXRlcmF0b3JbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBpdGVyYXRvcjtcbn1cblxuZnVuY3Rpb24gcmVzcG9uc2VJdGVyYXRvcihyZXNwb25zZSkge1xuICAgIHZhciBib2R5ID0gcmVzcG9uc2U7XG4gICAgaWYgKGlzTm9kZVJlc3BvbnNlKHJlc3BvbnNlKSlcbiAgICAgICAgYm9keSA9IHJlc3BvbnNlLmJvZHk7XG4gICAgaWYgKGlzQXN5bmNJdGVyYWJsZUl0ZXJhdG9yKGJvZHkpKVxuICAgICAgICByZXR1cm4gYXN5bmNJdGVyYXRvcihib2R5KTtcbiAgICBpZiAoaXNSZWFkYWJsZVN0cmVhbShib2R5KSlcbiAgICAgICAgcmV0dXJuIHJlYWRlckl0ZXJhdG9yKGJvZHkuZ2V0UmVhZGVyKCkpO1xuICAgIGlmIChpc1N0cmVhbWFibGVCbG9iKGJvZHkpKSB7XG4gICAgICAgIHJldHVybiByZWFkZXJJdGVyYXRvcihib2R5LnN0cmVhbSgpLmdldFJlYWRlcigpKTtcbiAgICB9XG4gICAgaWYgKGlzQmxvYihib2R5KSlcbiAgICAgICAgcmV0dXJuIHByb21pc2VJdGVyYXRvcihib2R5LmFycmF5QnVmZmVyKCkpO1xuICAgIGlmIChpc05vZGVSZWFkYWJsZVN0cmVhbShib2R5KSlcbiAgICAgICAgcmV0dXJuIG5vZGVTdHJlYW1JdGVyYXRvcihib2R5KTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGJvZHkgdHlwZSBmb3IgcmVzcG9uc2VJdGVyYXRvci4gUGxlYXNlIHBhc3MgYSBzdHJlYW1hYmxlIHJlc3BvbnNlLlwiKTtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIHJlYWRNdWx0aXBhcnRCb2R5KHJlc3BvbnNlLCBvYnNlcnZlcikge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRlY29kZXIsIGNvbnRlbnRUeXBlLCBkZWxpbWl0ZXIsIGJvdW5kYXJ5VmFsLCBib3VuZGFyeSwgYnVmZmVyLCBpdGVyYXRvciwgcnVubmluZywgX2QsIHZhbHVlLCBkb25lLCBjaHVuaywgYmksIG1lc3NhZ2UsIGksIGhlYWRlcnMsIGNvbnRlbnRUeXBlXzEsIGJvZHksIHJlc3VsdDtcbiAgICAgICAgdmFyIF9lO1xuICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9mKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9mLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoVGV4dERlY29kZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGV4dERlY29kZXIgbXVzdCBiZSBkZWZpbmVkIGluIHRoZSBlbnZpcm9ubWVudDogcGxlYXNlIGltcG9ydCBhIHBvbHlmaWxsLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gKF9hID0gcmVzcG9uc2UuaGVhZGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGltaXRlciA9IFwiYm91bmRhcnk9XCI7XG4gICAgICAgICAgICAgICAgICAgIGJvdW5kYXJ5VmFsID0gKGNvbnRlbnRUeXBlID09PSBudWxsIHx8IGNvbnRlbnRUeXBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50VHlwZS5pbmNsdWRlcyhkZWxpbWl0ZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb250ZW50VHlwZSA9PT0gbnVsbCB8fCBjb250ZW50VHlwZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudFR5cGUuc3Vic3RyaW5nKChjb250ZW50VHlwZSA9PT0gbnVsbCB8fCBjb250ZW50VHlwZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudFR5cGUuaW5kZXhPZihkZWxpbWl0ZXIpKSArIGRlbGltaXRlci5sZW5ndGgpLnJlcGxhY2UoL1snXCJdL2csIFwiXCIpLnJlcGxhY2UoL1xcOyguKikvZ20sIFwiXCIpLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIjtcbiAgICAgICAgICAgICAgICAgICAgYm91bmRhcnkgPSBcIi0tXCIuY29uY2F0KGJvdW5kYXJ5VmFsKTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3IgPSByZXNwb25zZUl0ZXJhdG9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIF9mLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGlmICghcnVubmluZykgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpdGVyYXRvci5uZXh0KCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgX2QgPSBfZi5zZW50KCksIHZhbHVlID0gX2QudmFsdWUsIGRvbmUgPSBfZC5kb25lO1xuICAgICAgICAgICAgICAgICAgICBjaHVuayA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlIDogZGVjb2Rlci5kZWNvZGUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nID0gIWRvbmU7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBjaHVuaztcbiAgICAgICAgICAgICAgICAgICAgYmkgPSBidWZmZXIuaW5kZXhPZihib3VuZGFyeSk7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChiaSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyLnNsaWNlKDAsIGJpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIuc2xpY2UoYmkgKyBib3VuZGFyeS5sZW5ndGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSwgbWVzc2FnZSA9IF9lWzBdLCBidWZmZXIgPSBfZVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBtZXNzYWdlLmluZGV4T2YoXCJcXHJcXG5cXHJcXG5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IHBhcnNlSGVhZGVycyhtZXNzYWdlLnNsaWNlKDAsIGkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZV8xID0gaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGVfMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZV8xLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHBhdGNoIGNvbnRlbnQgdHlwZTogYXBwbGljYXRpb24vanNvbiBpcyByZXF1aXJlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSBtZXNzYWdlLnNsaWNlKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBhcnNlSnNvbkJvZHkocmVzcG9uc2UsIGJvZHkucmVwbGFjZShcIlxcclxcblwiLCBcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhyZXN1bHQpLmxlbmd0aCA+IDEgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiIGluIHJlc3VsdCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmNyZW1lbnRhbFwiIGluIHJlc3VsdCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvcnNcIiBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfYiA9IG9ic2VydmVyLm5leHQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKG9ic2VydmVyLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoZXJyLCBvYnNlcnZlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmkgPSBidWZmZXIuaW5kZXhPZihib3VuZGFyeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIChfYyA9IG9ic2VydmVyLmNvbXBsZXRlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbChvYnNlcnZlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlclRleHQpIHtcbiAgICB2YXIgaGVhZGVyc0luaXQgPSB7fTtcbiAgICBoZWFkZXJUZXh0LnNwbGl0KFwiXFxuXCIpLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgdmFyIGkgPSBsaW5lLmluZGV4T2YoXCI6XCIpO1xuICAgICAgICBpZiAoaSA+IC0xKSB7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gbGluZS5zbGljZSgwLCBpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGxpbmUuc2xpY2UoaSArIDEpLnRyaW0oKTtcbiAgICAgICAgICAgIGhlYWRlcnNJbml0W25hbWVfMV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBoZWFkZXJzSW5pdDtcbn1cbmZ1bmN0aW9uIHBhcnNlSnNvbkJvZHkocmVzcG9uc2UsIGJvZHlUZXh0KSB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgdmFyIGdldFJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYm9keVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBib2R5VGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdXRpbHMudGhyb3dTZXJ2ZXJFcnJvcihyZXNwb25zZSwgZ2V0UmVzdWx0KCksIFwiUmVzcG9uc2Ugbm90IHN1Y2Nlc3NmdWw6IFJlY2VpdmVkIHN0YXR1cyBjb2RlIFwiLmNvbmNhdChyZXNwb25zZS5zdGF0dXMpKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYm9keVRleHQpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHZhciBwYXJzZUVycm9yID0gZXJyO1xuICAgICAgICBwYXJzZUVycm9yLm5hbWUgPSBcIlNlcnZlclBhcnNlRXJyb3JcIjtcbiAgICAgICAgcGFyc2VFcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICBwYXJzZUVycm9yLnN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgIHBhcnNlRXJyb3IuYm9keVRleHQgPSBib2R5VGV4dDtcbiAgICAgICAgdGhyb3cgcGFyc2VFcnJvcjtcbiAgICB9XG59XG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnIsIG9ic2VydmVyKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBpZiAoZXJyLm5hbWUgPT09IFwiQWJvcnRFcnJvclwiKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKGVyci5yZXN1bHQgJiYgZXJyLnJlc3VsdC5lcnJvcnMgJiYgZXJyLnJlc3VsdC5kYXRhKSB7XG4gICAgICAgIChfYSA9IG9ic2VydmVyLm5leHQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKG9ic2VydmVyLCBlcnIucmVzdWx0KTtcbiAgICB9XG4gICAgKF9iID0gb2JzZXJ2ZXIuZXJyb3IpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKG9ic2VydmVyLCBlcnIpO1xufVxuZnVuY3Rpb24gcmVhZEpzb25Cb2R5KHJlc3BvbnNlLCBvcGVyYXRpb24sIG9ic2VydmVyKSB7XG4gICAgcGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZShvcGVyYXRpb24pKHJlc3BvbnNlKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYSA9IG9ic2VydmVyLm5leHQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKG9ic2VydmVyLCByZXN1bHQpO1xuICAgICAgICAoX2IgPSBvYnNlcnZlci5jb21wbGV0ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwob2JzZXJ2ZXIpO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBoYW5kbGVFcnJvcihlcnIsIG9ic2VydmVyKTsgfSk7XG59XG5mdW5jdGlvbiBwYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlKG9wZXJhdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICAgICAgLnRleHQoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGJvZHlUZXh0KSB7IHJldHVybiBwYXJzZUpzb25Cb2R5KHJlc3BvbnNlLCBib2R5VGV4dCk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgICAgICAgIHV0aWxzLnRocm93U2VydmVyRXJyb3IocmVzcG9uc2UsIHJlc3VsdCwgXCJSZXNwb25zZSBub3Qgc3VjY2Vzc2Z1bDogUmVjZWl2ZWQgc3RhdHVzIGNvZGUgXCIuY29uY2F0KHJlc3BvbnNlLnN0YXR1cykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlc3VsdCkgJiZcbiAgICAgICAgICAgICAgICAhaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQsIFwiZGF0YVwiKSAmJlxuICAgICAgICAgICAgICAgICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdCwgXCJlcnJvcnNcIikpIHtcbiAgICAgICAgICAgICAgICB1dGlscy50aHJvd1NlcnZlckVycm9yKHJlc3BvbnNlLCByZXN1bHQsIFwiU2VydmVyIHJlc3BvbnNlIHdhcyBtaXNzaW5nIGZvciBxdWVyeSAnXCIuY29uY2F0KEFycmF5LmlzQXJyYXkob3BlcmF0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgPyBvcGVyYXRpb25zLm1hcChmdW5jdGlvbiAob3ApIHsgcmV0dXJuIG9wLm9wZXJhdGlvbk5hbWU7IH0pXG4gICAgICAgICAgICAgICAgICAgIDogb3BlcmF0aW9ucy5vcGVyYXRpb25OYW1lLCBcIicuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbnZhciBzZXJpYWxpemVGZXRjaFBhcmFtZXRlciA9IGZ1bmN0aW9uIChwLCBsYWJlbCkge1xuICAgIHZhciBzZXJpYWxpemVkO1xuICAgIHRyeSB7XG4gICAgICAgIHNlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeShwKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgdmFyIHBhcnNlRXJyb3IgPSBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJOZXR3b3JrIHJlcXVlc3QgZmFpbGVkLiBcIi5jb25jYXQobGFiZWwsIFwiIGlzIG5vdCBzZXJpYWxpemFibGU6IFwiKS5jb25jYXQoZS5tZXNzYWdlKSkgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigyNCk7XG4gICAgICAgIHBhcnNlRXJyb3IucGFyc2VFcnJvciA9IGU7XG4gICAgICAgIHRocm93IHBhcnNlRXJyb3I7XG4gICAgfVxuICAgIHJldHVybiBzZXJpYWxpemVkO1xufTtcblxudmFyIGRlZmF1bHRIdHRwT3B0aW9ucyA9IHtcbiAgICBpbmNsdWRlUXVlcnk6IHRydWUsXG4gICAgaW5jbHVkZUV4dGVuc2lvbnM6IGZhbHNlLFxuICAgIHByZXNlcnZlSGVhZGVyQ2FzZTogZmFsc2UsXG59O1xudmFyIGRlZmF1bHRIZWFkZXJzID0ge1xuICAgIGFjY2VwdDogJyovKicsXG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbn07XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG59O1xudmFyIGZhbGxiYWNrSHR0cENvbmZpZyA9IHtcbiAgICBodHRwOiBkZWZhdWx0SHR0cE9wdGlvbnMsXG4gICAgaGVhZGVyczogZGVmYXVsdEhlYWRlcnMsXG4gICAgb3B0aW9uczogZGVmYXVsdE9wdGlvbnMsXG59O1xudmFyIGRlZmF1bHRQcmludGVyID0gZnVuY3Rpb24gKGFzdCwgcHJpbnRlcikgeyByZXR1cm4gcHJpbnRlcihhc3QpOyB9O1xuZnVuY3Rpb24gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5KG9wZXJhdGlvbiwgZmFsbGJhY2tDb25maWcpIHtcbiAgICB2YXIgY29uZmlncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGNvbmZpZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGNvbmZpZ3MudW5zaGlmdChmYWxsYmFja0NvbmZpZyk7XG4gICAgcmV0dXJuIHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keUludGVybmFsLmFwcGx5KHZvaWQgMCwgdHNsaWIuX19zcHJlYWRBcnJheShbb3BlcmF0aW9uLFxuICAgICAgICBkZWZhdWx0UHJpbnRlcl0sIGNvbmZpZ3MsIGZhbHNlKSk7XG59XG5mdW5jdGlvbiBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHlJbnRlcm5hbChvcGVyYXRpb24sIHByaW50ZXIpIHtcbiAgICB2YXIgY29uZmlncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGNvbmZpZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBvcHRpb25zID0ge307XG4gICAgdmFyIGh0dHAgPSB7fTtcbiAgICBjb25maWdzLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBvcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCBjb25maWcub3B0aW9ucyksIHsgaGVhZGVyczogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMuaGVhZGVycyksIGNvbmZpZy5oZWFkZXJzKSB9KTtcbiAgICAgICAgaWYgKGNvbmZpZy5jcmVkZW50aWFscykge1xuICAgICAgICAgICAgb3B0aW9ucy5jcmVkZW50aWFscyA9IGNvbmZpZy5jcmVkZW50aWFscztcbiAgICAgICAgfVxuICAgICAgICBodHRwID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGh0dHApLCBjb25maWcuaHR0cCk7XG4gICAgfSk7XG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSByZW1vdmVEdXBsaWNhdGVIZWFkZXJzKG9wdGlvbnMuaGVhZGVycywgaHR0cC5wcmVzZXJ2ZUhlYWRlckNhc2UpO1xuICAgIH1cbiAgICB2YXIgb3BlcmF0aW9uTmFtZSA9IG9wZXJhdGlvbi5vcGVyYXRpb25OYW1lLCBleHRlbnNpb25zID0gb3BlcmF0aW9uLmV4dGVuc2lvbnMsIHZhcmlhYmxlcyA9IG9wZXJhdGlvbi52YXJpYWJsZXMsIHF1ZXJ5ID0gb3BlcmF0aW9uLnF1ZXJ5O1xuICAgIHZhciBib2R5ID0geyBvcGVyYXRpb25OYW1lOiBvcGVyYXRpb25OYW1lLCB2YXJpYWJsZXM6IHZhcmlhYmxlcyB9O1xuICAgIGlmIChodHRwLmluY2x1ZGVFeHRlbnNpb25zKVxuICAgICAgICBib2R5LmV4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuICAgIGlmIChodHRwLmluY2x1ZGVRdWVyeSlcbiAgICAgICAgYm9keS5xdWVyeSA9IHByaW50ZXIocXVlcnksIGdyYXBocWwucHJpbnQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIGJvZHk6IGJvZHksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZUhlYWRlcnMoaGVhZGVycywgcHJlc2VydmVIZWFkZXJDYXNlKSB7XG4gICAgaWYgKCFwcmVzZXJ2ZUhlYWRlckNhc2UpIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRIZWFkZXJzXzEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBPYmplY3Qua2V5cyhPYmplY3QoaGVhZGVycykpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRIZWFkZXJzXzFbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IGhlYWRlcnNbbmFtZV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplZEhlYWRlcnNfMTtcbiAgICB9XG4gICAgdmFyIGhlYWRlckRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIE9iamVjdC5rZXlzKE9iamVjdChoZWFkZXJzKSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBoZWFkZXJEYXRhW25hbWUudG9Mb3dlckNhc2UoKV0gPSB7IG9yaWdpbmFsTmFtZTogbmFtZSwgdmFsdWU6IGhlYWRlcnNbbmFtZV0gfTtcbiAgICB9KTtcbiAgICB2YXIgbm9ybWFsaXplZEhlYWRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIE9iamVjdC5rZXlzKGhlYWRlckRhdGEpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgbm9ybWFsaXplZEhlYWRlcnNbaGVhZGVyRGF0YVtuYW1lXS5vcmlnaW5hbE5hbWVdID0gaGVhZGVyRGF0YVtuYW1lXS52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gbm9ybWFsaXplZEhlYWRlcnM7XG59XG5cbnZhciBjaGVja0ZldGNoZXIgPSBmdW5jdGlvbiAoZmV0Y2hlcikge1xuICAgIGlmICghZmV0Y2hlciAmJiB0eXBlb2YgZmV0Y2ggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIlxcblxcXCJmZXRjaFxcXCIgaGFzIG5vdCBiZWVuIGZvdW5kIGdsb2JhbGx5IGFuZCBubyBmZXRjaGVyIGhhcyBiZWVuIGNvbmZpZ3VyZWQuIFRvIGZpeCB0aGlzLCBpbnN0YWxsIGEgZmV0Y2ggcGFja2FnZSAobGlrZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9jcm9zcy1mZXRjaCksIGluc3RhbnRpYXRlIHRoZSBmZXRjaGVyLCBhbmQgcGFzcyBpdCBpbnRvIHlvdXIgSHR0cExpbmsgY29uc3RydWN0b3IuIEZvciBleGFtcGxlOlxcblxcbmltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCc7XFxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluayB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcXG4gIGxpbms6IG5ldyBIdHRwTGluayh7IHVyaTogJy9ncmFwaHFsJywgZmV0Y2ggfSlcXG59KTtcXG4gICAgXCIpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMjMpO1xuICAgIH1cbn07XG5cbnZhciBjcmVhdGVTaWduYWxJZlN1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIEFib3J0Q29udHJvbGxlciA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybiB7IGNvbnRyb2xsZXI6IGZhbHNlLCBzaWduYWw6IGZhbHNlIH07XG4gICAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgdmFyIHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsO1xuICAgIHJldHVybiB7IGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsIHNpZ25hbDogc2lnbmFsIH07XG59O1xuXG52YXIgc2VsZWN0VVJJID0gZnVuY3Rpb24gKG9wZXJhdGlvbiwgZmFsbGJhY2tVUkkpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wZXJhdGlvbi5nZXRDb250ZXh0KCk7XG4gICAgdmFyIGNvbnRleHRVUkkgPSBjb250ZXh0LnVyaTtcbiAgICBpZiAoY29udGV4dFVSSSkge1xuICAgICAgICByZXR1cm4gY29udGV4dFVSSTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGZhbGxiYWNrVVJJID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmYWxsYmFja1VSSShvcGVyYXRpb24pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrVVJJIHx8ICcvZ3JhcGhxbCc7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gcmV3cml0ZVVSSUZvckdFVChjaG9zZW5VUkksIGJvZHkpIHtcbiAgICB2YXIgcXVlcnlQYXJhbXMgPSBbXTtcbiAgICB2YXIgYWRkUXVlcnlQYXJhbSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLnB1c2goXCJcIi5jb25jYXQoa2V5LCBcIj1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpKTtcbiAgICB9O1xuICAgIGlmICgncXVlcnknIGluIGJvZHkpIHtcbiAgICAgICAgYWRkUXVlcnlQYXJhbSgncXVlcnknLCBib2R5LnF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKGJvZHkub3BlcmF0aW9uTmFtZSkge1xuICAgICAgICBhZGRRdWVyeVBhcmFtKCdvcGVyYXRpb25OYW1lJywgYm9keS5vcGVyYXRpb25OYW1lKTtcbiAgICB9XG4gICAgaWYgKGJvZHkudmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBzZXJpYWxpemVkVmFyaWFibGVzID0gdm9pZCAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VyaWFsaXplZFZhcmlhYmxlcyA9IHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyKGJvZHkudmFyaWFibGVzLCAnVmFyaWFibGVzIG1hcCcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChwYXJzZUVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBwYXJzZUVycm9yOiBwYXJzZUVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgYWRkUXVlcnlQYXJhbSgndmFyaWFibGVzJywgc2VyaWFsaXplZFZhcmlhYmxlcyk7XG4gICAgfVxuICAgIGlmIChib2R5LmV4dGVuc2lvbnMpIHtcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWRFeHRlbnNpb25zID0gdm9pZCAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VyaWFsaXplZEV4dGVuc2lvbnMgPSBzZXJpYWxpemVGZXRjaFBhcmFtZXRlcihib2R5LmV4dGVuc2lvbnMsICdFeHRlbnNpb25zIG1hcCcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChwYXJzZUVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBwYXJzZUVycm9yOiBwYXJzZUVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgYWRkUXVlcnlQYXJhbSgnZXh0ZW5zaW9ucycsIHNlcmlhbGl6ZWRFeHRlbnNpb25zKTtcbiAgICB9XG4gICAgdmFyIGZyYWdtZW50ID0gJycsIHByZUZyYWdtZW50ID0gY2hvc2VuVVJJO1xuICAgIHZhciBmcmFnbWVudFN0YXJ0ID0gY2hvc2VuVVJJLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoZnJhZ21lbnRTdGFydCAhPT0gLTEpIHtcbiAgICAgICAgZnJhZ21lbnQgPSBjaG9zZW5VUkkuc3Vic3RyKGZyYWdtZW50U3RhcnQpO1xuICAgICAgICBwcmVGcmFnbWVudCA9IGNob3NlblVSSS5zdWJzdHIoMCwgZnJhZ21lbnRTdGFydCk7XG4gICAgfVxuICAgIHZhciBxdWVyeVBhcmFtc1ByZWZpeCA9IHByZUZyYWdtZW50LmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJic7XG4gICAgdmFyIG5ld1VSSSA9IHByZUZyYWdtZW50ICsgcXVlcnlQYXJhbXNQcmVmaXggKyBxdWVyeVBhcmFtcy5qb2luKCcmJykgKyBmcmFnbWVudDtcbiAgICByZXR1cm4geyBuZXdVUkk6IG5ld1VSSSB9O1xufVxuXG52YXIgYmFja3VwRmV0Y2ggPSB1dGlsaXRpZXMubWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2g7IH0pO1xudmFyIGNyZWF0ZUh0dHBMaW5rID0gZnVuY3Rpb24gKGxpbmtPcHRpb25zKSB7XG4gICAgaWYgKGxpbmtPcHRpb25zID09PSB2b2lkIDApIHsgbGlua09wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IGxpbmtPcHRpb25zLnVyaSwgdXJpID0gX2EgPT09IHZvaWQgMCA/ICcvZ3JhcGhxbCcgOiBfYSwgcHJlZmVycmVkRmV0Y2ggPSBsaW5rT3B0aW9ucy5mZXRjaCwgX2IgPSBsaW5rT3B0aW9ucy5wcmludCwgcHJpbnQgPSBfYiA9PT0gdm9pZCAwID8gZGVmYXVsdFByaW50ZXIgOiBfYiwgaW5jbHVkZUV4dGVuc2lvbnMgPSBsaW5rT3B0aW9ucy5pbmNsdWRlRXh0ZW5zaW9ucywgcHJlc2VydmVIZWFkZXJDYXNlID0gbGlua09wdGlvbnMucHJlc2VydmVIZWFkZXJDYXNlLCB1c2VHRVRGb3JRdWVyaWVzID0gbGlua09wdGlvbnMudXNlR0VURm9yUXVlcmllcywgX2MgPSBsaW5rT3B0aW9ucy5pbmNsdWRlVW51c2VkVmFyaWFibGVzLCBpbmNsdWRlVW51c2VkVmFyaWFibGVzID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIHJlcXVlc3RPcHRpb25zID0gdHNsaWIuX19yZXN0KGxpbmtPcHRpb25zLCBbXCJ1cmlcIiwgXCJmZXRjaFwiLCBcInByaW50XCIsIFwiaW5jbHVkZUV4dGVuc2lvbnNcIiwgXCJwcmVzZXJ2ZUhlYWRlckNhc2VcIiwgXCJ1c2VHRVRGb3JRdWVyaWVzXCIsIFwiaW5jbHVkZVVudXNlZFZhcmlhYmxlc1wiXSk7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgY2hlY2tGZXRjaGVyKHByZWZlcnJlZEZldGNoIHx8IGJhY2t1cEZldGNoKTtcbiAgICB9XG4gICAgdmFyIGxpbmtDb25maWcgPSB7XG4gICAgICAgIGh0dHA6IHsgaW5jbHVkZUV4dGVuc2lvbnM6IGluY2x1ZGVFeHRlbnNpb25zLCBwcmVzZXJ2ZUhlYWRlckNhc2U6IHByZXNlcnZlSGVhZGVyQ2FzZSB9LFxuICAgICAgICBvcHRpb25zOiByZXF1ZXN0T3B0aW9ucy5mZXRjaE9wdGlvbnMsXG4gICAgICAgIGNyZWRlbnRpYWxzOiByZXF1ZXN0T3B0aW9ucy5jcmVkZW50aWFscyxcbiAgICAgICAgaGVhZGVyczogcmVxdWVzdE9wdGlvbnMuaGVhZGVycyxcbiAgICB9O1xuICAgIHJldHVybiBuZXcgY29yZS5BcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24pIHtcbiAgICAgICAgdmFyIGNob3NlblVSSSA9IHNlbGVjdFVSSShvcGVyYXRpb24sIHVyaSk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gb3BlcmF0aW9uLmdldENvbnRleHQoKTtcbiAgICAgICAgdmFyIGNsaWVudEF3YXJlbmVzc0hlYWRlcnMgPSB7fTtcbiAgICAgICAgaWYgKGNvbnRleHQuY2xpZW50QXdhcmVuZXNzKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBjb250ZXh0LmNsaWVudEF3YXJlbmVzcywgbmFtZV8xID0gX2EubmFtZSwgdmVyc2lvbiA9IF9hLnZlcnNpb247XG4gICAgICAgICAgICBpZiAobmFtZV8xKSB7XG4gICAgICAgICAgICAgICAgY2xpZW50QXdhcmVuZXNzSGVhZGVyc1snYXBvbGxvZ3JhcGhxbC1jbGllbnQtbmFtZSddID0gbmFtZV8xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBjbGllbnRBd2FyZW5lc3NIZWFkZXJzWydhcG9sbG9ncmFwaHFsLWNsaWVudC12ZXJzaW9uJ10gPSB2ZXJzaW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb250ZXh0SGVhZGVycyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjbGllbnRBd2FyZW5lc3NIZWFkZXJzKSwgY29udGV4dC5oZWFkZXJzKTtcbiAgICAgICAgdmFyIGNvbnRleHRDb25maWcgPSB7XG4gICAgICAgICAgICBodHRwOiBjb250ZXh0Lmh0dHAsXG4gICAgICAgICAgICBvcHRpb25zOiBjb250ZXh0LmZldGNoT3B0aW9ucyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBjb250ZXh0LmNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgaGVhZGVyczogY29udGV4dEhlYWRlcnMsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBfYiA9IHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keUludGVybmFsKG9wZXJhdGlvbiwgcHJpbnQsIGZhbGxiYWNrSHR0cENvbmZpZywgbGlua0NvbmZpZywgY29udGV4dENvbmZpZyksIG9wdGlvbnMgPSBfYi5vcHRpb25zLCBib2R5ID0gX2IuYm9keTtcbiAgICAgICAgaWYgKGJvZHkudmFyaWFibGVzICYmICFpbmNsdWRlVW51c2VkVmFyaWFibGVzKSB7XG4gICAgICAgICAgICB2YXIgdW51c2VkTmFtZXNfMSA9IG5ldyBTZXQoT2JqZWN0LmtleXMoYm9keS52YXJpYWJsZXMpKTtcbiAgICAgICAgICAgIGdyYXBocWwudmlzaXQob3BlcmF0aW9uLnF1ZXJ5LCB7XG4gICAgICAgICAgICAgICAgVmFyaWFibGU6IGZ1bmN0aW9uIChub2RlLCBfa2V5LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQua2luZCAhPT0gJ1ZhcmlhYmxlRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVudXNlZE5hbWVzXzEuZGVsZXRlKG5vZGUubmFtZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodW51c2VkTmFtZXNfMS5zaXplKSB7XG4gICAgICAgICAgICAgICAgYm9keS52YXJpYWJsZXMgPSB0c2xpYi5fX2Fzc2lnbih7fSwgYm9keS52YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgIHVudXNlZE5hbWVzXzEuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYm9keS52YXJpYWJsZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRyb2xsZXI7XG4gICAgICAgIGlmICghb3B0aW9ucy5zaWduYWwpIHtcbiAgICAgICAgICAgIHZhciBfYyA9IGNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkKCksIF9jb250cm9sbGVyID0gX2MuY29udHJvbGxlciwgc2lnbmFsID0gX2Muc2lnbmFsO1xuICAgICAgICAgICAgY29udHJvbGxlciA9IF9jb250cm9sbGVyO1xuICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIpXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zaWduYWwgPSBzaWduYWw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlZmluaXRpb25Jc011dGF0aW9uID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJyAmJiBkLm9wZXJhdGlvbiA9PT0gJ211dGF0aW9uJztcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHVzZUdFVEZvclF1ZXJpZXMgJiZcbiAgICAgICAgICAgICFvcGVyYXRpb24ucXVlcnkuZGVmaW5pdGlvbnMuc29tZShkZWZpbml0aW9uSXNNdXRhdGlvbikpIHtcbiAgICAgICAgICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHV0aWxpdGllcy5oYXNEaXJlY3RpdmVzKFsnZGVmZXInXSwgb3BlcmF0aW9uLnF1ZXJ5KSkge1xuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLmFjY2VwdCA9IFwibXVsdGlwYXJ0L21peGVkOyBkZWZlclNwZWM9MjAyMjA4MjQsIGFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICB2YXIgX2QgPSByZXdyaXRlVVJJRm9yR0VUKGNob3NlblVSSSwgYm9keSksIG5ld1VSSSA9IF9kLm5ld1VSSSwgcGFyc2VFcnJvciA9IF9kLnBhcnNlRXJyb3I7XG4gICAgICAgICAgICBpZiAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5mcm9tRXJyb3IocGFyc2VFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaG9zZW5VUkkgPSBuZXdVUkk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyKGJvZHksICdQYXlsb2FkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5mcm9tRXJyb3IocGFyc2VFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyB1dGlsaXRpZXMuT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RmV0Y2ggPSBwcmVmZXJyZWRGZXRjaCB8fCB1dGlsaXRpZXMubWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2g7IH0pIHx8IGJhY2t1cEZldGNoO1xuICAgICAgICAgICAgY3VycmVudEZldGNoKGNob3NlblVSSSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnNldENvbnRleHQoeyByZXNwb25zZTogcmVzcG9uc2UgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGN0eXBlID0gKF9hID0gcmVzcG9uc2UuaGVhZGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eXBlICE9PSBudWxsICYmIC9ebXVsdGlwYXJ0XFwvbWl4ZWQvaS50ZXN0KGN0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVhZE11bHRpcGFydEJvZHkocmVzcG9uc2UsIG9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWFkSnNvbkJvZHkocmVzcG9uc2UsIG9wZXJhdGlvbiwgb2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGVyciwgb2JzZXJ2ZXIpOyB9KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxudmFyIEh0dHBMaW5rID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoSHR0cExpbmssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSHR0cExpbmsob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjcmVhdGVIdHRwTGluayhvcHRpb25zKS5yZXF1ZXN0KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSHR0cExpbms7XG59KGNvcmUuQXBvbGxvTGluaykpO1xuXG5leHBvcnRzLkh0dHBMaW5rID0gSHR0cExpbms7XG5leHBvcnRzLmNoZWNrRmV0Y2hlciA9IGNoZWNrRmV0Y2hlcjtcbmV4cG9ydHMuY3JlYXRlSHR0cExpbmsgPSBjcmVhdGVIdHRwTGluaztcbmV4cG9ydHMuY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQgPSBjcmVhdGVTaWduYWxJZlN1cHBvcnRlZDtcbmV4cG9ydHMuZGVmYXVsdFByaW50ZXIgPSBkZWZhdWx0UHJpbnRlcjtcbmV4cG9ydHMuZmFsbGJhY2tIdHRwQ29uZmlnID0gZmFsbGJhY2tIdHRwQ29uZmlnO1xuZXhwb3J0cy5wYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlID0gcGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZTtcbmV4cG9ydHMucmV3cml0ZVVSSUZvckdFVCA9IHJld3JpdGVVUklGb3JHRVQ7XG5leHBvcnRzLnNlbGVjdEh0dHBPcHRpb25zQW5kQm9keSA9IHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keTtcbmV4cG9ydHMuc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5SW50ZXJuYWwgPSBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHlJbnRlcm5hbDtcbmV4cG9ydHMuc2VsZWN0VVJJID0gc2VsZWN0VVJJO1xuZXhwb3J0cy5zZXJpYWxpemVGZXRjaFBhcmFtZXRlciA9IHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG5cbmZ1bmN0aW9uIGZyb21FcnJvcihlcnJvclZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlsaXRpZXMuT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3JWYWx1ZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvUHJvbWlzZShvYnNlcnZhYmxlKSB7XG4gICAgdmFyIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJQcm9taXNlIFdyYXBwZXIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSByZXN1bHRzIGZyb20gT2JzZXJ2YWJsZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmcm9tUHJvbWlzZShwcm9taXNlKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlsaXRpZXMuT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2gob2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlcikpO1xuICAgIH0pO1xufVxuXG52YXIgdGhyb3dTZXJ2ZXJFcnJvciA9IGZ1bmN0aW9uIChyZXNwb25zZSwgcmVzdWx0LCBtZXNzYWdlKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIGVycm9yLm5hbWUgPSAnU2VydmVyRXJyb3InO1xuICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgZXJyb3Iuc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICBlcnJvci5yZXN1bHQgPSByZXN1bHQ7XG4gICAgdGhyb3cgZXJyb3I7XG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU9wZXJhdGlvbihvcGVyYXRpb24pIHtcbiAgICB2YXIgT1BFUkFUSU9OX0ZJRUxEUyA9IFtcbiAgICAgICAgJ3F1ZXJ5JyxcbiAgICAgICAgJ29wZXJhdGlvbk5hbWUnLFxuICAgICAgICAndmFyaWFibGVzJyxcbiAgICAgICAgJ2V4dGVuc2lvbnMnLFxuICAgICAgICAnY29udGV4dCcsXG4gICAgXTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMob3BlcmF0aW9uKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcbiAgICAgICAgaWYgKE9QRVJBVElPTl9GSUVMRFMuaW5kZXhPZihrZXkpIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiaWxsZWdhbCBhcmd1bWVudDogXCIuY29uY2F0KGtleSkpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMjcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcGVyYXRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wZXJhdGlvbihzdGFydGluZywgb3BlcmF0aW9uKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0c2xpYi5fX2Fzc2lnbih7fSwgc3RhcnRpbmcpO1xuICAgIHZhciBzZXRDb250ZXh0ID0gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCBuZXh0KGNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIG5leHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCkpOyB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcGVyYXRpb24sICdzZXRDb250ZXh0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHNldENvbnRleHQsXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9wZXJhdGlvbiwgJ2dldENvbnRleHQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogZ2V0Q29udGV4dCxcbiAgICB9KTtcbiAgICByZXR1cm4gb3BlcmF0aW9uO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1PcGVyYXRpb24ob3BlcmF0aW9uKSB7XG4gICAgdmFyIHRyYW5zZm9ybWVkT3BlcmF0aW9uID0ge1xuICAgICAgICB2YXJpYWJsZXM6IG9wZXJhdGlvbi52YXJpYWJsZXMgfHwge30sXG4gICAgICAgIGV4dGVuc2lvbnM6IG9wZXJhdGlvbi5leHRlbnNpb25zIHx8IHt9LFxuICAgICAgICBvcGVyYXRpb25OYW1lOiBvcGVyYXRpb24ub3BlcmF0aW9uTmFtZSxcbiAgICAgICAgcXVlcnk6IG9wZXJhdGlvbi5xdWVyeSxcbiAgICB9O1xuICAgIGlmICghdHJhbnNmb3JtZWRPcGVyYXRpb24ub3BlcmF0aW9uTmFtZSkge1xuICAgICAgICB0cmFuc2Zvcm1lZE9wZXJhdGlvbi5vcGVyYXRpb25OYW1lID1cbiAgICAgICAgICAgIHR5cGVvZiB0cmFuc2Zvcm1lZE9wZXJhdGlvbi5xdWVyeSAhPT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IHV0aWxpdGllcy5nZXRPcGVyYXRpb25OYW1lKHRyYW5zZm9ybWVkT3BlcmF0aW9uLnF1ZXJ5KSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA6ICcnO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRPcGVyYXRpb247XG59XG5cbmV4cG9ydHMuY3JlYXRlT3BlcmF0aW9uID0gY3JlYXRlT3BlcmF0aW9uO1xuZXhwb3J0cy5mcm9tRXJyb3IgPSBmcm9tRXJyb3I7XG5leHBvcnRzLmZyb21Qcm9taXNlID0gZnJvbVByb21pc2U7XG5leHBvcnRzLnRocm93U2VydmVyRXJyb3IgPSB0aHJvd1NlcnZlckVycm9yO1xuZXhwb3J0cy50b1Byb21pc2UgPSB0b1Byb21pc2U7XG5leHBvcnRzLnRyYW5zZm9ybU9wZXJhdGlvbiA9IHRyYW5zZm9ybU9wZXJhdGlvbjtcbmV4cG9ydHMudmFsaWRhdGVPcGVyYXRpb24gPSB2YWxpZGF0ZU9wZXJhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvcmUgPSByZXF1aXJlKCcuL2NvcmUnKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJy4vcmVhY3QnKTtcblxuXG5cbmZvciAodmFyIGsgaW4gY29yZSkge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBleHBvcnRzW2tdID0gY29yZVtrXTtcbn1cbmZvciAodmFyIGsgaW4gcmVhY3QpIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgZXhwb3J0c1trXSA9IHJlYWN0W2tdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wTmFtZXNwYWNlKGUpIHtcbiAgICBpZiAoZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICAgIHZhciBuID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBpZiAoZSkge1xuICAgICAgICBmb3IgKHZhciBrIGluIGUpIHtcbiAgICAgICAgICAgIG5ba10gPSBlW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5bXCJkZWZhdWx0XCJdID0gZTtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShuKTtcbn1cblxudmFyIFJlYWN0X19uYW1lc3BhY2UgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BOYW1lc3BhY2UoUmVhY3QpO1xuXG52YXIgY29udGV4dEtleSA9IHV0aWxpdGllcy5jYW5Vc2VTeW1ib2xcbiAgICA/IFN5bWJvbC5mb3IoJ19fQVBPTExPX0NPTlRFWFRfXycpXG4gICAgOiAnX19BUE9MTE9fQ09OVEVYVF9fJztcbmZ1bmN0aW9uIGdldEFwb2xsb0NvbnRleHQoKSB7XG4gICAgdmFyIGNvbnRleHQgPSBSZWFjdF9fbmFtZXNwYWNlLmNyZWF0ZUNvbnRleHRbY29udGV4dEtleV07XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFjdF9fbmFtZXNwYWNlLmNyZWF0ZUNvbnRleHQsIGNvbnRleHRLZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiBjb250ZXh0ID0gUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVDb250ZXh0KHt9KSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29udGV4dC5kaXNwbGF5TmFtZSA9ICdBcG9sbG9Db250ZXh0JztcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBBcG9sbG9Db25zdW1lciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dCgpO1xuICAgIHJldHVybiAoUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChjb250ZXh0ICYmIGNvbnRleHQuY2xpZW50LCAnQ291bGQgbm90IGZpbmQgXCJjbGllbnRcIiBpbiB0aGUgY29udGV4dCBvZiBBcG9sbG9Db25zdW1lci4gJyArXG4gICAgICAgICAgICAnV3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYW4gPEFwb2xsb1Byb3ZpZGVyPi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KGNvbnRleHQgJiYgY29udGV4dC5jbGllbnQsIDI4KTtcbiAgICAgICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuKGNvbnRleHQuY2xpZW50KTtcbiAgICB9KSk7XG59O1xuXG52YXIgQXBvbGxvUHJvdmlkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xpZW50ID0gX2EuY2xpZW50LCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgIHZhciBBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dCgpO1xuICAgIHJldHVybiAoUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgICAgIGlmIChjbGllbnQgJiYgY29udGV4dC5jbGllbnQgIT09IGNsaWVudCkge1xuICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHsgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGNvbnRleHQuY2xpZW50LCAnQXBvbGxvUHJvdmlkZXIgd2FzIG5vdCBwYXNzZWQgYSBjbGllbnQgaW5zdGFuY2UuIE1ha2UgJyArXG4gICAgICAgICAgICAnc3VyZSB5b3UgcGFzcyBpbiB5b3VyIGNsaWVudCB2aWEgdGhlIFwiY2xpZW50XCIgcHJvcC4nKSA6IGdsb2JhbHMuaW52YXJpYW50KGNvbnRleHQuY2xpZW50LCAyOSk7XG4gICAgICAgIHJldHVybiAoUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHQgfSwgY2hpbGRyZW4pKTtcbiAgICB9KSk7XG59O1xuXG5leHBvcnRzLkFwb2xsb0NvbnN1bWVyID0gQXBvbGxvQ29uc3VtZXI7XG5leHBvcnRzLkFwb2xsb1Byb3ZpZGVyID0gQXBvbGxvUHJvdmlkZXI7XG5leHBvcnRzLmdldEFwb2xsb0NvbnRleHQgPSBnZXRBcG9sbG9Db250ZXh0O1xuZXhwb3J0cy5yZXNldEFwb2xsb0NvbnRleHQgPSBnZXRBcG9sbG9Db250ZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGV4dC5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgY29udGV4dCA9IHJlcXVpcmUoJy4uL2NvbnRleHQnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzJyk7XG52YXIgZXF1YWxpdHkgPSByZXF1aXJlKCdAd3J5L2VxdWFsaXR5Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL2NvcmUnKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKCcuLi8uLi9lcnJvcnMnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BOYW1lc3BhY2UoZSkge1xuICAgIGlmIChlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgdmFyIG4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGlmIChlKSB7XG4gICAgICAgIGZvciAodmFyIGsgaW4gZSkge1xuICAgICAgICAgICAgbltrXSA9IGVba107XG4gICAgICAgIH1cbiAgICB9XG4gICAgbltcImRlZmF1bHRcIl0gPSBlO1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKG4pO1xufVxuXG52YXIgUmVhY3RfX25hbWVzcGFjZSA9IC8qI19fUFVSRV9fKi9faW50ZXJvcE5hbWVzcGFjZShSZWFjdCk7XG5cbmZ1bmN0aW9uIHVzZUFwb2xsb0NsaWVudChvdmVycmlkZSkge1xuICAgIHZhciBjb250ZXh0JDEgPSBSZWFjdC51c2VDb250ZXh0KGNvbnRleHQuZ2V0QXBvbGxvQ29udGV4dCgpKTtcbiAgICB2YXIgY2xpZW50ID0gb3ZlcnJpZGUgfHwgY29udGV4dCQxLmNsaWVudDtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoISFjbGllbnQsICdDb3VsZCBub3QgZmluZCBcImNsaWVudFwiIGluIHRoZSBjb250ZXh0IG9yIHBhc3NlZCBpbiBhcyBhbiBvcHRpb24uICcgK1xuICAgICAgICAnV3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYW4gPEFwb2xsb1Byb3ZpZGVyPiwgb3IgcGFzcyBhbiBBcG9sbG9DbGllbnQgJyArXG4gICAgICAgICdpbnN0YW5jZSBpbiB2aWEgb3B0aW9ucy4nKSA6IGdsb2JhbHMuaW52YXJpYW50KCEhY2xpZW50LCAzMik7XG4gICAgcmV0dXJuIGNsaWVudDtcbn1cblxudmFyIGRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90ID0gZmFsc2U7XG52YXIgdVNFU0tleSA9IFwidXNlU3luY0V4dGVybmFsU3RvcmVcIjtcbnZhciByZWFsSG9vayA9IFJlYWN0X19uYW1lc3BhY2VbdVNFU0tleV07XG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUgPSByZWFsSG9vayB8fCAoZnVuY3Rpb24gKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0U25hcHNob3QoKTtcbiAgICBpZiAoX19ERVZfXyAmJlxuICAgICAgICAhZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgJiZcbiAgICAgICAgdmFsdWUgIT09IGdldFNuYXBzaG90KCkpIHtcbiAgICAgICAgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSB0cnVlO1xuICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmVycm9yKCdUaGUgcmVzdWx0IG9mIGdldFNuYXBzaG90IHNob3VsZCBiZSBjYWNoZWQgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcCcpO1xuICAgIH1cbiAgICB2YXIgX2EgPSBSZWFjdF9fbmFtZXNwYWNlLnVzZVN0YXRlKHsgaW5zdDogeyB2YWx1ZTogdmFsdWUsIGdldFNuYXBzaG90OiBnZXRTbmFwc2hvdCB9IH0pLCBpbnN0ID0gX2FbMF0uaW5zdCwgZm9yY2VVcGRhdGUgPSBfYVsxXTtcbiAgICBpZiAodXRpbGl0aWVzLmNhblVzZUxheW91dEVmZmVjdCkge1xuICAgICAgICBSZWFjdF9fbmFtZXNwYWNlLnVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGluc3QsIHsgdmFsdWU6IHZhbHVlLCBnZXRTbmFwc2hvdDogZ2V0U25hcHNob3QgfSk7XG4gICAgICAgICAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgICAgICAgICAgIGZvcmNlVXBkYXRlKHsgaW5zdDogaW5zdCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3N1YnNjcmliZSwgdmFsdWUsIGdldFNuYXBzaG90XSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKGluc3QsIHsgdmFsdWU6IHZhbHVlLCBnZXRTbmFwc2hvdDogZ2V0U25hcHNob3QgfSk7XG4gICAgfVxuICAgIFJlYWN0X19uYW1lc3BhY2UudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgICAgICAgIGZvcmNlVXBkYXRlKHsgaW5zdDogaW5zdCB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaWJlKGZ1bmN0aW9uIGhhbmRsZVN0b3JlQ2hhbmdlKCkge1xuICAgICAgICAgICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgICAgICAgICAgICBmb3JjZVVwZGF0ZSh7IGluc3Q6IGluc3QgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtzdWJzY3JpYmVdKTtcbiAgICByZXR1cm4gdmFsdWU7XG59KTtcbmZ1bmN0aW9uIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoX2EpIHtcbiAgICB2YXIgdmFsdWUgPSBfYS52YWx1ZSwgZ2V0U25hcHNob3QgPSBfYS5nZXRTbmFwc2hvdDtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IGdldFNuYXBzaG90KCk7XG4gICAgfVxuICAgIGNhdGNoIChfYikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiB1c2VRdWVyeShxdWVyeSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7IH1cbiAgICByZXR1cm4gdXNlSW50ZXJuYWxTdGF0ZSh1c2VBcG9sbG9DbGllbnQob3B0aW9ucy5jbGllbnQpLCBxdWVyeSkudXNlUXVlcnkob3B0aW9ucyk7XG59XG5mdW5jdGlvbiB1c2VJbnRlcm5hbFN0YXRlKGNsaWVudCwgcXVlcnkpIHtcbiAgICB2YXIgc3RhdGVSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgICBpZiAoIXN0YXRlUmVmLmN1cnJlbnQgfHxcbiAgICAgICAgY2xpZW50ICE9PSBzdGF0ZVJlZi5jdXJyZW50LmNsaWVudCB8fFxuICAgICAgICBxdWVyeSAhPT0gc3RhdGVSZWYuY3VycmVudC5xdWVyeSkge1xuICAgICAgICBzdGF0ZVJlZi5jdXJyZW50ID0gbmV3IEludGVybmFsU3RhdGUoY2xpZW50LCBxdWVyeSwgc3RhdGVSZWYuY3VycmVudCk7XG4gICAgfVxuICAgIHZhciBzdGF0ZSA9IHN0YXRlUmVmLmN1cnJlbnQ7XG4gICAgdmFyIF9hID0gUmVhY3QudXNlU3RhdGUoMCk7IF9hWzBdOyB2YXIgc2V0VGljayA9IF9hWzFdO1xuICAgIHN0YXRlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRUaWNrKGZ1bmN0aW9uICh0aWNrKSB7IHJldHVybiB0aWNrICsgMTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gc3RhdGU7XG59XG52YXIgSW50ZXJuYWxTdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW50ZXJuYWxTdGF0ZShjbGllbnQsIHF1ZXJ5LCBwcmV2aW91cykge1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzeW5jUmVzb2x2ZUZucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zVG9JZ25vcmVPbmNlID0gbmV3ICh1dGlsaXRpZXMuY2FuVXNlV2Vha1NldCA/IFdlYWtTZXQgOiBTZXQpKCk7XG4gICAgICAgIHRoaXMuc3NyRGlzYWJsZWRSZXN1bHQgPSB1dGlsaXRpZXMubWF5YmVEZWVwRnJlZXplKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICAgICAgbmV0d29ya1N0YXR1czogY29yZS5OZXR3b3JrU3RhdHVzLmxvYWRpbmcsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNraXBTdGFuZGJ5UmVzdWx0ID0gdXRpbGl0aWVzLm1heWJlRGVlcEZyZWV6ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBjb3JlLk5ldHdvcmtTdGF0dXMucmVhZHksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvUXVlcnlSZXN1bHRDYWNoZSA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtNYXAgPyBXZWFrTWFwIDogTWFwKSgpO1xuICAgICAgICBwYXJzZXIudmVyaWZ5RG9jdW1lbnRUeXBlKHF1ZXJ5LCBwYXJzZXIuRG9jdW1lbnRUeXBlLlF1ZXJ5KTtcbiAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gcHJldmlvdXMgJiYgcHJldmlvdXMucmVzdWx0O1xuICAgICAgICB2YXIgcHJldmlvdXNEYXRhID0gcHJldmlvdXNSZXN1bHQgJiYgcHJldmlvdXNSZXN1bHQuZGF0YTtcbiAgICAgICAgaWYgKHByZXZpb3VzRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEgPSBwcmV2aW91c0RhdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIkNhbGxpbmcgZGVmYXVsdCBuby1vcCBpbXBsZW1lbnRhdGlvbiBvZiBJbnRlcm5hbFN0YXRlI2ZvcmNlVXBkYXRlXCIpO1xuICAgIH07XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUuYXN5bmNVcGRhdGUgPSBmdW5jdGlvbiAoc2lnbmFsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgd2F0Y2hRdWVyeU9wdGlvbnMgPSBfdGhpcy53YXRjaFF1ZXJ5T3B0aW9ucztcbiAgICAgICAgICAgIHZhciBoYW5kbGVBYm9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFzeW5jUmVzb2x2ZUZucy5kZWxldGUocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW9uc1RvSWdub3JlT25jZS5kZWxldGUod2F0Y2hRdWVyeU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGhhbmRsZUFib3J0ZWQpO1xuICAgICAgICAgICAgICAgIHJlamVjdChzaWduYWwucmVhc29uKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5hc3luY1Jlc29sdmVGbnMuYWRkKHJlc29sdmUpO1xuICAgICAgICAgICAgX3RoaXMub3B0aW9uc1RvSWdub3JlT25jZS5hZGQod2F0Y2hRdWVyeU9wdGlvbnMpO1xuICAgICAgICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgaGFuZGxlQWJvcnRlZCk7XG4gICAgICAgICAgICBfdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLnVzZVF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9taXNlcyA9IFJlYWN0LnVzZUNvbnRleHQoY29udGV4dC5nZXRBcG9sbG9Db250ZXh0KCkpLnJlbmRlclByb21pc2VzO1xuICAgICAgICB0aGlzLnVzZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHZhciBvYnNRdWVyeSA9IHRoaXMudXNlT2JzZXJ2YWJsZVF1ZXJ5KCk7XG4gICAgICAgIHZhciByZXN1bHQgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMucmVuZGVyUHJvbWlzZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9uTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNSZXN1bHQgPSBfdGhpcy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9ic1F1ZXJ5LmdldEN1cnJlbnRSZXN1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNSZXN1bHQgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNSZXN1bHQubG9hZGluZyA9PT0gcmVzdWx0LmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNSZXN1bHQubmV0d29ya1N0YXR1cyA9PT0gcmVzdWx0Lm5ldHdvcmtTdGF0dXMgJiZcbiAgICAgICAgICAgICAgICAgICAgZXF1YWxpdHkuZXF1YWwocHJldmlvdXNSZXN1bHQuZGF0YSwgcmVzdWx0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdCA9IG9ic1F1ZXJ5W1wibGFzdFwiXTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvYnNRdWVyeS5yZXNldExhc3RSZXN1bHRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG9ic1F1ZXJ5LnN1YnNjcmliZShvbk5leHQsIG9uRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzUXVlcnlbXCJsYXN0XCJdID0gbGFzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKGVycm9yLCAnZ3JhcGhRTEVycm9ycycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNSZXN1bHQgPSBfdGhpcy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2aW91c1Jlc3VsdCB8fFxuICAgICAgICAgICAgICAgICAgICAocHJldmlvdXNSZXN1bHQgJiYgcHJldmlvdXNSZXN1bHQubG9hZGluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKGVycm9yLCBwcmV2aW91c1Jlc3VsdC5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0UmVzdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IChwcmV2aW91c1Jlc3VsdCAmJiBwcmV2aW91c1Jlc3VsdC5kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogY29yZS5OZXR3b3JrU3RhdHVzLmVycm9yLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IG9ic1F1ZXJ5LnN1YnNjcmliZShvbk5leHQsIG9uRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpOyB9O1xuICAgICAgICB9LCBbXG4gICAgICAgICAgICBvYnNRdWVyeSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvbWlzZXMsXG4gICAgICAgICAgICB0aGlzLmNsaWVudC5kaXNhYmxlTmV0d29ya0ZldGNoZXMsXG4gICAgICAgIF0pLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5nZXRDdXJyZW50UmVzdWx0KCk7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmdldEN1cnJlbnRSZXN1bHQoKTsgfSk7XG4gICAgICAgIHRoaXMudW5zYWZlSGFuZGxlUGFydGlhbFJlZmV0Y2gocmVzdWx0KTtcbiAgICAgICAgdmFyIHF1ZXJ5UmVzdWx0ID0gdGhpcy50b1F1ZXJ5UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIGlmICghcXVlcnlSZXN1bHQubG9hZGluZyAmJiB0aGlzLmFzeW5jUmVzb2x2ZUZucy5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLmFzeW5jUmVzb2x2ZUZucy5mb3JFYWNoKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiByZXNvbHZlKHF1ZXJ5UmVzdWx0KTsgfSk7XG4gICAgICAgICAgICB0aGlzLmFzeW5jUmVzb2x2ZUZucy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeVJlc3VsdDtcbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLnVzZU9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciB3YXRjaFF1ZXJ5T3B0aW9ucyA9IHRoaXMuY3JlYXRlV2F0Y2hRdWVyeU9wdGlvbnModGhpcy5xdWVyeUhvb2tPcHRpb25zID0gb3B0aW9ucyk7XG4gICAgICAgIHZhciBjdXJyZW50V2F0Y2hRdWVyeU9wdGlvbnMgPSB0aGlzLndhdGNoUXVlcnlPcHRpb25zO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zVG9JZ25vcmVPbmNlLmhhcyhjdXJyZW50V2F0Y2hRdWVyeU9wdGlvbnMpIHx8XG4gICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwod2F0Y2hRdWVyeU9wdGlvbnMsIGN1cnJlbnRXYXRjaFF1ZXJ5T3B0aW9ucykpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hRdWVyeU9wdGlvbnMgPSB3YXRjaFF1ZXJ5T3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjdXJyZW50V2F0Y2hRdWVyeU9wdGlvbnMgJiYgdGhpcy5vYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zVG9JZ25vcmVPbmNlLmRlbGV0ZShjdXJyZW50V2F0Y2hRdWVyeU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2YWJsZS5yZW9ic2VydmUodGhpcy5nZXRPYnNRdWVyeU9wdGlvbnMoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEgPSAoKF9hID0gdGhpcy5yZXN1bHQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kYXRhKSB8fCB0aGlzLnByZXZpb3VzRGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uQ29tcGxldGVkID0gb3B0aW9ucy5vbkNvbXBsZXRlZCB8fCBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS5vbkNvbXBsZXRlZDtcbiAgICAgICAgdGhpcy5vbkVycm9yID0gb3B0aW9ucy5vbkVycm9yIHx8IEludGVybmFsU3RhdGUucHJvdG90eXBlLm9uRXJyb3I7XG4gICAgICAgIGlmICgodGhpcy5yZW5kZXJQcm9taXNlcyB8fCB0aGlzLmNsaWVudC5kaXNhYmxlTmV0d29ya0ZldGNoZXMpICYmXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5SG9va09wdGlvbnMuc3NyID09PSBmYWxzZSAmJlxuICAgICAgICAgICAgIXRoaXMucXVlcnlIb29rT3B0aW9ucy5za2lwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuc3NyRGlzYWJsZWRSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5xdWVyeUhvb2tPcHRpb25zLnNraXAgfHxcbiAgICAgICAgICAgIHRoaXMud2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICdzdGFuZGJ5Jykge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLnNraXBTdGFuZGJ5UmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucmVzdWx0ID09PSB0aGlzLnNzckRpc2FibGVkUmVzdWx0IHx8XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9PT0gdGhpcy5za2lwU3RhbmRieVJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLmdldE9ic1F1ZXJ5T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRvTWVyZ2UgPSBbXTtcbiAgICAgICAgdmFyIGdsb2JhbERlZmF1bHRzID0gdGhpcy5jbGllbnQuZGVmYXVsdE9wdGlvbnMud2F0Y2hRdWVyeTtcbiAgICAgICAgaWYgKGdsb2JhbERlZmF1bHRzKVxuICAgICAgICAgICAgdG9NZXJnZS5wdXNoKGdsb2JhbERlZmF1bHRzKTtcbiAgICAgICAgaWYgKHRoaXMucXVlcnlIb29rT3B0aW9ucy5kZWZhdWx0T3B0aW9ucykge1xuICAgICAgICAgICAgdG9NZXJnZS5wdXNoKHRoaXMucXVlcnlIb29rT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdG9NZXJnZS5wdXNoKHV0aWxpdGllcy5jb21wYWN0KHRoaXMub2JzZXJ2YWJsZSAmJiB0aGlzLm9ic2VydmFibGUub3B0aW9ucywgdGhpcy53YXRjaFF1ZXJ5T3B0aW9ucykpO1xuICAgICAgICByZXR1cm4gdG9NZXJnZS5yZWR1Y2UoY29yZS5tZXJnZU9wdGlvbnMpO1xuICAgIH07XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUuY3JlYXRlV2F0Y2hRdWVyeU9wdGlvbnMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF9iO1xuICAgICAgICBpZiAoX2EgPT09IHZvaWQgMCkgeyBfYSA9IHt9OyB9XG4gICAgICAgIHZhciBza2lwID0gX2Euc2tpcDsgX2Euc3NyOyBfYS5vbkNvbXBsZXRlZDsgX2Eub25FcnJvcjsgX2EuZGVmYXVsdE9wdGlvbnM7IHZhciBvdGhlck9wdGlvbnMgPSB0c2xpYi5fX3Jlc3QoX2EsIFtcInNraXBcIiwgXCJzc3JcIiwgXCJvbkNvbXBsZXRlZFwiLCBcIm9uRXJyb3JcIiwgXCJkZWZhdWx0T3B0aW9uc1wiXSk7XG4gICAgICAgIHZhciB3YXRjaFF1ZXJ5T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3RoZXJPcHRpb25zLCB7IHF1ZXJ5OiB0aGlzLnF1ZXJ5IH0pO1xuICAgICAgICBpZiAodGhpcy5yZW5kZXJQcm9taXNlcyAmJlxuICAgICAgICAgICAgKHdhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgICAgIHdhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5ID09PSAnY2FjaGUtYW5kLW5ldHdvcmsnKSkge1xuICAgICAgICAgICAgd2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3kgPSAnY2FjaGUtZmlyc3QnO1xuICAgICAgICB9XG4gICAgICAgIGlmICghd2F0Y2hRdWVyeU9wdGlvbnMudmFyaWFibGVzKSB7XG4gICAgICAgICAgICB3YXRjaFF1ZXJ5T3B0aW9ucy52YXJpYWJsZXMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2tpcCkge1xuICAgICAgICAgICAgdmFyIF9jID0gd2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3ksIGZldGNoUG9saWN5ID0gX2MgPT09IHZvaWQgMCA/IHRoaXMuZ2V0RGVmYXVsdEZldGNoUG9saWN5KCkgOiBfYywgX2QgPSB3YXRjaFF1ZXJ5T3B0aW9ucy5pbml0aWFsRmV0Y2hQb2xpY3ksIGluaXRpYWxGZXRjaFBvbGljeSA9IF9kID09PSB2b2lkIDAgPyBmZXRjaFBvbGljeSA6IF9kO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih3YXRjaFF1ZXJ5T3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGluaXRpYWxGZXRjaFBvbGljeTogaW5pdGlhbEZldGNoUG9saWN5LFxuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnc3RhbmRieScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghd2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3kpIHtcbiAgICAgICAgICAgIHdhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5ID1cbiAgICAgICAgICAgICAgICAoKF9iID0gdGhpcy5vYnNlcnZhYmxlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iub3B0aW9ucy5pbml0aWFsRmV0Y2hQb2xpY3kpIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGVmYXVsdEZldGNoUG9saWN5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdhdGNoUXVlcnlPcHRpb25zO1xuICAgIH07XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUuZ2V0RGVmYXVsdEZldGNoUG9saWN5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICByZXR1cm4gKCgoX2EgPSB0aGlzLnF1ZXJ5SG9va09wdGlvbnMuZGVmYXVsdE9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mZXRjaFBvbGljeSkgfHxcbiAgICAgICAgICAgICgoX2IgPSB0aGlzLmNsaWVudC5kZWZhdWx0T3B0aW9ucy53YXRjaFF1ZXJ5KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZmV0Y2hQb2xpY3kpIHx8XG4gICAgICAgICAgICBcImNhY2hlLWZpcnN0XCIpO1xuICAgIH07XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBmdW5jdGlvbiAoZGF0YSkgeyB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHsgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS51c2VPYnNlcnZhYmxlUXVlcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYnNRdWVyeSA9IHRoaXMub2JzZXJ2YWJsZSA9XG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb21pc2VzXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5yZW5kZXJQcm9taXNlcy5nZXRTU1JPYnNlcnZhYmxlKHRoaXMud2F0Y2hRdWVyeU9wdGlvbnMpXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5vYnNlcnZhYmxlXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5jbGllbnQud2F0Y2hRdWVyeSh0aGlzLmdldE9ic1F1ZXJ5T3B0aW9ucygpKTtcbiAgICAgICAgdGhpcy5vYnNRdWVyeUZpZWxkcyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgIHJlZmV0Y2g6IG9ic1F1ZXJ5LnJlZmV0Y2guYmluZChvYnNRdWVyeSksXG4gICAgICAgICAgICByZW9ic2VydmU6IG9ic1F1ZXJ5LnJlb2JzZXJ2ZS5iaW5kKG9ic1F1ZXJ5KSxcbiAgICAgICAgICAgIGZldGNoTW9yZTogb2JzUXVlcnkuZmV0Y2hNb3JlLmJpbmQob2JzUXVlcnkpLFxuICAgICAgICAgICAgdXBkYXRlUXVlcnk6IG9ic1F1ZXJ5LnVwZGF0ZVF1ZXJ5LmJpbmQob2JzUXVlcnkpLFxuICAgICAgICAgICAgc3RhcnRQb2xsaW5nOiBvYnNRdWVyeS5zdGFydFBvbGxpbmcuYmluZChvYnNRdWVyeSksXG4gICAgICAgICAgICBzdG9wUG9sbGluZzogb2JzUXVlcnkuc3RvcFBvbGxpbmcuYmluZChvYnNRdWVyeSksXG4gICAgICAgICAgICBzdWJzY3JpYmVUb01vcmU6IG9ic1F1ZXJ5LnN1YnNjcmliZVRvTW9yZS5iaW5kKG9ic1F1ZXJ5KSxcbiAgICAgICAgfSk7IH0sIFtvYnNRdWVyeV0pO1xuICAgICAgICB2YXIgc3NyQWxsb3dlZCA9ICEodGhpcy5xdWVyeUhvb2tPcHRpb25zLnNzciA9PT0gZmFsc2UgfHxcbiAgICAgICAgICAgIHRoaXMucXVlcnlIb29rT3B0aW9ucy5za2lwKTtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyUHJvbWlzZXMgJiYgc3NyQWxsb3dlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9taXNlcy5yZWdpc3RlclNTUk9ic2VydmFibGUob2JzUXVlcnkpO1xuICAgICAgICAgICAgaWYgKG9ic1F1ZXJ5LmdldEN1cnJlbnRSZXN1bHQoKS5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9taXNlcy5hZGRPYnNlcnZhYmxlUXVlcnlQcm9taXNlKG9ic1F1ZXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JzUXVlcnk7XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS5zZXRSZXN1bHQgPSBmdW5jdGlvbiAobmV4dFJlc3VsdCkge1xuICAgICAgICB2YXIgcHJldmlvdXNSZXN1bHQgPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgaWYgKHByZXZpb3VzUmVzdWx0ICYmIHByZXZpb3VzUmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNEYXRhID0gcHJldmlvdXNSZXN1bHQuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdCA9IG5leHRSZXN1bHQ7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvck9yQ29tcGxldGVkKG5leHRSZXN1bHQpO1xuICAgIH07XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUuaGFuZGxlRXJyb3JPckNvbXBsZXRlZCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFyZXN1bHQubG9hZGluZykge1xuICAgICAgICAgICAgdmFyIGVycm9yXzEgPSB0aGlzLnRvQXBvbGxvRXJyb3IocmVzdWx0KTtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcl8xKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9uRXJyb3IoZXJyb3JfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9uQ29tcGxldGVkKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLnRvQXBvbGxvRXJyb3IgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KHJlc3VsdC5lcnJvcnMpXG4gICAgICAgICAgICA/IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3IoeyBncmFwaFFMRXJyb3JzOiByZXN1bHQuZXJyb3JzIH0pXG4gICAgICAgICAgICA6IHJlc3VsdC5lcnJvcjtcbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLmdldEN1cnJlbnRSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JPckNvbXBsZXRlZCh0aGlzLnJlc3VsdCA9IHRoaXMub2JzZXJ2YWJsZS5nZXRDdXJyZW50UmVzdWx0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLnRvUXVlcnlSZXN1bHQgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBxdWVyeVJlc3VsdCA9IHRoaXMudG9RdWVyeVJlc3VsdENhY2hlLmdldChyZXN1bHQpO1xuICAgICAgICBpZiAocXVlcnlSZXN1bHQpXG4gICAgICAgICAgICByZXR1cm4gcXVlcnlSZXN1bHQ7XG4gICAgICAgIHZhciBkYXRhID0gcmVzdWx0LmRhdGE7IHJlc3VsdC5wYXJ0aWFsOyB2YXIgcmVzdWx0V2l0aG91dFBhcnRpYWwgPSB0c2xpYi5fX3Jlc3QocmVzdWx0LCBbXCJkYXRhXCIsIFwicGFydGlhbFwiXSk7XG4gICAgICAgIHRoaXMudG9RdWVyeVJlc3VsdENhY2hlLnNldChyZXN1bHQsIHF1ZXJ5UmVzdWx0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oeyBkYXRhOiBkYXRhIH0sIHJlc3VsdFdpdGhvdXRQYXJ0aWFsKSwgdGhpcy5vYnNRdWVyeUZpZWxkcyksIHsgY2xpZW50OiB0aGlzLmNsaWVudCwgb2JzZXJ2YWJsZTogdGhpcy5vYnNlcnZhYmxlLCB2YXJpYWJsZXM6IHRoaXMub2JzZXJ2YWJsZS52YXJpYWJsZXMsIGNhbGxlZDogIXRoaXMucXVlcnlIb29rT3B0aW9ucy5za2lwLCBwcmV2aW91c0RhdGE6IHRoaXMucHJldmlvdXNEYXRhIH0pKTtcbiAgICAgICAgaWYgKCFxdWVyeVJlc3VsdC5lcnJvciAmJiB1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KHJlc3VsdC5lcnJvcnMpKSB7XG4gICAgICAgICAgICBxdWVyeVJlc3VsdC5lcnJvciA9IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3IoeyBncmFwaFFMRXJyb3JzOiByZXN1bHQuZXJyb3JzIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeVJlc3VsdDtcbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLnVuc2FmZUhhbmRsZVBhcnRpYWxSZWZldGNoID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0LnBhcnRpYWwgJiZcbiAgICAgICAgICAgIHRoaXMucXVlcnlIb29rT3B0aW9ucy5wYXJ0aWFsUmVmZXRjaCAmJlxuICAgICAgICAgICAgIXJlc3VsdC5sb2FkaW5nICYmXG4gICAgICAgICAgICAoIXJlc3VsdC5kYXRhIHx8IE9iamVjdC5rZXlzKHJlc3VsdC5kYXRhKS5sZW5ndGggPT09IDApICYmXG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGUub3B0aW9ucy5mZXRjaFBvbGljeSAhPT0gJ2NhY2hlLW9ubHknKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogY29yZS5OZXR3b3JrU3RhdHVzLnJlZmV0Y2gsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2YWJsZS5yZWZldGNoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBJbnRlcm5hbFN0YXRlO1xufSgpKTtcblxudmFyIEVBR0VSX01FVEhPRFMgPSBbXG4gICAgJ3JlZmV0Y2gnLFxuICAgICdyZW9ic2VydmUnLFxuICAgICdmZXRjaE1vcmUnLFxuICAgICd1cGRhdGVRdWVyeScsXG4gICAgJ3N0YXJ0UG9sbGluZycsXG4gICAgJ3N1YnNjcmliZVRvTW9yZScsXG5dO1xuZnVuY3Rpb24gdXNlTGF6eVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciBhYm9ydENvbnRyb2xsZXJzUmVmID0gUmVhY3QudXNlUmVmKG5ldyBTZXQoKSk7XG4gICAgdmFyIGV4ZWNPcHRpb25zUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gICAgdmFyIG1lcmdlZCA9IGV4ZWNPcHRpb25zUmVmLmN1cnJlbnQgPyB1dGlsaXRpZXMubWVyZ2VPcHRpb25zKG9wdGlvbnMsIGV4ZWNPcHRpb25zUmVmLmN1cnJlbnQpIDogb3B0aW9ucztcbiAgICB2YXIgaW50ZXJuYWxTdGF0ZSA9IHVzZUludGVybmFsU3RhdGUodXNlQXBvbGxvQ2xpZW50KG9wdGlvbnMgJiYgb3B0aW9ucy5jbGllbnQpLCAoX2EgPSBtZXJnZWQgPT09IG51bGwgfHwgbWVyZ2VkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZXJnZWQucXVlcnkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHF1ZXJ5KTtcbiAgICB2YXIgdXNlUXVlcnlSZXN1bHQgPSBpbnRlcm5hbFN0YXRlLnVzZVF1ZXJ5KHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBtZXJnZWQpLCB7IHNraXA6ICFleGVjT3B0aW9uc1JlZi5jdXJyZW50IH0pKTtcbiAgICB2YXIgaW5pdGlhbEZldGNoUG9saWN5ID0gdXNlUXVlcnlSZXN1bHQub2JzZXJ2YWJsZS5vcHRpb25zLmluaXRpYWxGZXRjaFBvbGljeSB8fFxuICAgICAgICBpbnRlcm5hbFN0YXRlLmdldERlZmF1bHRGZXRjaFBvbGljeSgpO1xuICAgIHZhciByZXN1bHQgPSBPYmplY3QuYXNzaWduKHVzZVF1ZXJ5UmVzdWx0LCB7XG4gICAgICAgIGNhbGxlZDogISFleGVjT3B0aW9uc1JlZi5jdXJyZW50LFxuICAgIH0pO1xuICAgIHZhciBlYWdlck1ldGhvZHMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVhZ2VyTWV0aG9kcyA9IHt9O1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSByZXN1bHRba2V5XTtcbiAgICAgICAgICAgIGVhZ2VyTWV0aG9kc1trZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghZXhlY09wdGlvbnNSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBleGVjT3B0aW9uc1JlZi5jdXJyZW50ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxTdGF0ZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIEVBR0VSX01FVEhPRFNfMSA9IEVBR0VSX01FVEhPRFM7IF9pIDwgRUFHRVJfTUVUSE9EU18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IEVBR0VSX01FVEhPRFNfMVtfaV07XG4gICAgICAgICAgICBfbG9vcF8xKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhZ2VyTWV0aG9kcztcbiAgICB9LCBbXSk7XG4gICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIGVhZ2VyTWV0aG9kcyk7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcnNSZWYuY3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHZhciBleGVjdXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV4ZWN1dGVPcHRpb25zKSB7XG4gICAgICAgIHZhciBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICBhYm9ydENvbnRyb2xsZXJzUmVmLmN1cnJlbnQuYWRkKGNvbnRyb2xsZXIpO1xuICAgICAgICBleGVjT3B0aW9uc1JlZi5jdXJyZW50ID0gZXhlY3V0ZU9wdGlvbnMgPyB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZXhlY3V0ZU9wdGlvbnMpLCB7IGZldGNoUG9saWN5OiBleGVjdXRlT3B0aW9ucy5mZXRjaFBvbGljeSB8fCBpbml0aWFsRmV0Y2hQb2xpY3kgfSkgOiB7XG4gICAgICAgICAgICBmZXRjaFBvbGljeTogaW5pdGlhbEZldGNoUG9saWN5LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgcHJvbWlzZSA9IGludGVybmFsU3RhdGVcbiAgICAgICAgICAgIC5hc3luY1VwZGF0ZShjb250cm9sbGVyLnNpZ25hbClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChxdWVyeVJlc3VsdCkge1xuICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyc1JlZi5jdXJyZW50LmRlbGV0ZShjb250cm9sbGVyKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHF1ZXJ5UmVzdWx0LCBlYWdlck1ldGhvZHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhYm9ydENvbnRyb2xsZXJzUmVmLmN1cnJlbnQuZGVsZXRlKGNvbnRyb2xsZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBbZXhlY3V0ZSwgcmVzdWx0XTtcbn1cblxuZnVuY3Rpb24gdXNlTXV0YXRpb24obXV0YXRpb24sIG9wdGlvbnMpIHtcbiAgICB2YXIgY2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50KG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jbGllbnQpO1xuICAgIHBhcnNlci52ZXJpZnlEb2N1bWVudFR5cGUobXV0YXRpb24sIHBhcnNlci5Eb2N1bWVudFR5cGUuTXV0YXRpb24pO1xuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICAgICAgY2FsbGVkOiBmYWxzZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgIH0pLCByZXN1bHQgPSBfYVswXSwgc2V0UmVzdWx0ID0gX2FbMV07XG4gICAgdmFyIHJlZiA9IFJlYWN0LnVzZVJlZih7XG4gICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICBtdXRhdGlvbklkOiAwLFxuICAgICAgICBpc01vdW50ZWQ6IHRydWUsXG4gICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICBtdXRhdGlvbjogbXV0YXRpb24sXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgfSk7XG4gICAge1xuICAgICAgICBPYmplY3QuYXNzaWduKHJlZi5jdXJyZW50LCB7IGNsaWVudDogY2xpZW50LCBvcHRpb25zOiBvcHRpb25zLCBtdXRhdGlvbjogbXV0YXRpb24gfSk7XG4gICAgfVxuICAgIHZhciBleGVjdXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV4ZWN1dGVPcHRpb25zKSB7XG4gICAgICAgIGlmIChleGVjdXRlT3B0aW9ucyA9PT0gdm9pZCAwKSB7IGV4ZWN1dGVPcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIF9hID0gcmVmLmN1cnJlbnQsIGNsaWVudCA9IF9hLmNsaWVudCwgb3B0aW9ucyA9IF9hLm9wdGlvbnMsIG11dGF0aW9uID0gX2EubXV0YXRpb247XG4gICAgICAgIHZhciBiYXNlT3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBtdXRhdGlvbjogbXV0YXRpb24gfSk7XG4gICAgICAgIGlmICghcmVmLmN1cnJlbnQucmVzdWx0LmxvYWRpbmcgJiYgIWJhc2VPcHRpb25zLmlnbm9yZVJlc3VsdHMgJiYgcmVmLmN1cnJlbnQuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVmLmN1cnJlbnQucmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgY2FsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG11dGF0aW9uSWQgPSArK3JlZi5jdXJyZW50Lm11dGF0aW9uSWQ7XG4gICAgICAgIHZhciBjbGllbnRPcHRpb25zID0gY29yZS5tZXJnZU9wdGlvbnMoYmFzZU9wdGlvbnMsIGV4ZWN1dGVPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5tdXRhdGUoY2xpZW50T3B0aW9ucykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YSwgZXJyb3JzJDEgPSByZXNwb25zZS5lcnJvcnM7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBlcnJvcnMkMSAmJiBlcnJvcnMkMS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHsgZ3JhcGhRTEVycm9yczogZXJyb3JzJDEgfSlcbiAgICAgICAgICAgICAgICA6IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbklkID09PSByZWYuY3VycmVudC5tdXRhdGlvbklkICYmXG4gICAgICAgICAgICAgICAgIWNsaWVudE9wdGlvbnMuaWdub3JlUmVzdWx0cykge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHRfMSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChyZWYuY3VycmVudC5pc01vdW50ZWQgJiYgIWVxdWFsaXR5LmVxdWFsKHJlZi5jdXJyZW50LnJlc3VsdCwgcmVzdWx0XzEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZWYuY3VycmVudC5yZXN1bHQgPSByZXN1bHRfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9uQ29tcGxldGVkID0gZXhlY3V0ZU9wdGlvbnMub25Db21wbGV0ZWQgfHwgKChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbkNvbXBsZXRlZCk7XG4gICAgICAgICAgICBvbkNvbXBsZXRlZCA9PT0gbnVsbCB8fCBvbkNvbXBsZXRlZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25Db21wbGV0ZWQocmVzcG9uc2UuZGF0YSwgY2xpZW50T3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uSWQgPT09IHJlZi5jdXJyZW50Lm11dGF0aW9uSWQgJiZcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0XzIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICghZXF1YWxpdHkuZXF1YWwocmVmLmN1cnJlbnQucmVzdWx0LCByZXN1bHRfMikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlZi5jdXJyZW50LnJlc3VsdCA9IHJlc3VsdF8yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb25FcnJvciA9IGV4ZWN1dGVPcHRpb25zLm9uRXJyb3IgfHwgKChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbkVycm9yKTtcbiAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgb25FcnJvcihlcnJvciwgY2xpZW50T3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogdm9pZCAwLCBlcnJvcnM6IGVycm9yIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIHZhciByZXNldCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50LmlzTW91bnRlZCkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHsgY2FsbGVkOiBmYWxzZSwgbG9hZGluZzogZmFsc2UsIGNsaWVudDogY2xpZW50IH0pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZi5jdXJyZW50LmlzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWYuY3VycmVudC5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtleGVjdXRlLCB0c2xpYi5fX2Fzc2lnbih7IHJlc2V0OiByZXNldCB9LCByZXN1bHQpXTtcbn1cblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbiwgb3B0aW9ucykge1xuICAgIHZhciBoYXNJc3N1ZWREZXByZWNhdGlvbldhcm5pbmdSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgIHZhciBjbGllbnQgPSB1c2VBcG9sbG9DbGllbnQob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNsaWVudCk7XG4gICAgcGFyc2VyLnZlcmlmeURvY3VtZW50VHlwZShzdWJzY3JpcHRpb24sIHBhcnNlci5Eb2N1bWVudFR5cGUuU3Vic2NyaXB0aW9uKTtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6ICEob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApLFxuICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICB9KSwgcmVzdWx0ID0gX2FbMF0sIHNldFJlc3VsdCA9IF9hWzFdO1xuICAgIGlmICghaGFzSXNzdWVkRGVwcmVjYXRpb25XYXJuaW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgaGFzSXNzdWVkRGVwcmVjYXRpb25XYXJuaW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9uU3Vic2NyaXB0aW9uRGF0YSkge1xuICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKG9wdGlvbnMub25EYXRhXG4gICAgICAgICAgICAgICAgPyBcIid1c2VTdWJzY3JpcHRpb24nIHN1cHBvcnRzIG9ubHkgdGhlICdvblN1YnNjcmlwdGlvbkRhdGEnIG9yICdvbkRhdGEnIG9wdGlvbiwgYnV0IG5vdCBib3RoLiBPbmx5IHRoZSAnb25EYXRhJyBvcHRpb24gd2lsbCBiZSB1c2VkLlwiXG4gICAgICAgICAgICAgICAgOiBcIidvblN1YnNjcmlwdGlvbkRhdGEnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciB2ZXJzaW9uLiBQbGVhc2UgdXNlIHRoZSAnb25EYXRhJyBvcHRpb24gaW5zdGVhZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5vblN1YnNjcmlwdGlvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4ob3B0aW9ucy5vbkNvbXBsZXRlXG4gICAgICAgICAgICAgICAgPyBcIid1c2VTdWJzY3JpcHRpb24nIHN1cHBvcnRzIG9ubHkgdGhlICdvblN1YnNjcmlwdGlvbkNvbXBsZXRlJyBvciAnb25Db21wbGV0ZScgb3B0aW9uLCBidXQgbm90IGJvdGguIE9ubHkgdGhlICdvbkNvbXBsZXRlJyBvcHRpb24gd2lsbCBiZSB1c2VkLlwiXG4gICAgICAgICAgICAgICAgOiBcIidvblN1YnNjcmlwdGlvbkNvbXBsZXRlJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgdmVyc2lvbi4gUGxlYXNlIHVzZSB0aGUgJ29uQ29tcGxldGUnIG9wdGlvbiBpbnN0ZWFkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgX2IgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgcXVlcnk6IHN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICBjb250ZXh0OiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY29udGV4dCxcbiAgICAgICAgfSk7XG4gICAgfSksIG9ic2VydmFibGUgPSBfYlswXSwgc2V0T2JzZXJ2YWJsZSA9IF9iWzFdO1xuICAgIHZhciBjYW5SZXNldE9ic2VydmFibGVSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYW5SZXNldE9ic2VydmFibGVSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHZhciByZWYgPSBSZWFjdC51c2VSZWYoeyBjbGllbnQ6IGNsaWVudCwgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb24sIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICB2YXIgc2hvdWxkUmVzdWJzY3JpYmUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2hvdWxkUmVzdWJzY3JpYmU7XG4gICAgICAgIGlmICh0eXBlb2Ygc2hvdWxkUmVzdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHNob3VsZFJlc3Vic2NyaWJlID0gISFzaG91bGRSZXN1YnNjcmliZShvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApIHtcbiAgICAgICAgICAgIGlmICghKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5za2lwKSAhPT0gISgoX2EgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2tpcCkgfHwgY2FuUmVzZXRPYnNlcnZhYmxlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0T2JzZXJ2YWJsZShudWxsKTtcbiAgICAgICAgICAgICAgICBjYW5SZXNldE9ic2VydmFibGVSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChzaG91bGRSZXN1YnNjcmliZSAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgIChjbGllbnQgIT09IHJlZi5jdXJyZW50LmNsaWVudCB8fFxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiAhPT0gcmVmLmN1cnJlbnQuc3Vic2NyaXB0aW9uIHx8XG4gICAgICAgICAgICAgICAgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5mZXRjaFBvbGljeSkgIT09ICgoX2IgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZmV0Y2hQb2xpY3kpIHx8XG4gICAgICAgICAgICAgICAgIShvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCkgIT09ICEoKF9jID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNraXApIHx8XG4gICAgICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsIChfZCA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC52YXJpYWJsZXMpKSkgfHxcbiAgICAgICAgICAgIGNhblJlc2V0T2JzZXJ2YWJsZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQoe1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRPYnNlcnZhYmxlKGNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBzdWJzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICAgICAgY29udGV4dDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBjYW5SZXNldE9ic2VydmFibGVSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVmLmN1cnJlbnQsIHsgY2xpZW50OiBjbGllbnQsIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLCBvcHRpb25zOiBvcHRpb25zIH0pO1xuICAgIH0sIFtjbGllbnQsIHN1YnNjcmlwdGlvbiwgb3B0aW9ucywgY2FuUmVzZXRPYnNlcnZhYmxlUmVmLmN1cnJlbnRdKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIW9ic2VydmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKGZldGNoUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZmV0Y2hSZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgaWYgKChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbkRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQub3B0aW9ucy5vbkRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChfYiA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5vblN1YnNjcmlwdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQub3B0aW9ucy5vblN1YnNjcmlwdGlvbkRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25EYXRhOiByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIHNldFJlc3VsdCh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbkVycm9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgZXJyb3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICBpZiAoKF9hID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQub3B0aW9ucy5vbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChfYiA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5vblN1YnNjcmlwdGlvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50Lm9wdGlvbnMub25TdWJzY3JpcHRpb25Db21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW29ic2VydmFibGVdKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB1c2VSZWFjdGl2ZVZhcihydikge1xuICAgIHZhciB2YWx1ZSA9IHJ2KCk7XG4gICAgdmFyIHNldFZhbHVlID0gUmVhY3QudXNlU3RhdGUodmFsdWUpWzFdO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcm9iYWJseVNhbWVWYWx1ZSA9IHJ2KCk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gcHJvYmFibHlTYW1lVmFsdWUpIHtcbiAgICAgICAgICAgIHNldFZhbHVlKHByb2JhYmx5U2FtZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBydi5vbk5leHRDaGFuZ2Uoc2V0VmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwgW3ZhbHVlXSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB1c2VGcmFnbWVudF9leHBlcmltZW50YWwob3B0aW9ucykge1xuICAgIHZhciBjYWNoZSA9IHVzZUFwb2xsb0NsaWVudCgpLmNhY2hlO1xuICAgIHZhciBmcmFnbWVudCA9IG9wdGlvbnMuZnJhZ21lbnQsIGZyYWdtZW50TmFtZSA9IG9wdGlvbnMuZnJhZ21lbnROYW1lLCBmcm9tID0gb3B0aW9ucy5mcm9tLCBfYSA9IG9wdGlvbnMub3B0aW1pc3RpYywgb3B0aW1pc3RpYyA9IF9hID09PSB2b2lkIDAgPyB0cnVlIDogX2EsIHJlc3QgPSB0c2xpYi5fX3Jlc3Qob3B0aW9ucywgW1wiZnJhZ21lbnRcIiwgXCJmcmFnbWVudE5hbWVcIiwgXCJmcm9tXCIsIFwib3B0aW1pc3RpY1wiXSk7XG4gICAgdmFyIGRpZmZPcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHJlc3QpLCB7IGlkOiB0eXBlb2YgZnJvbSA9PT0gXCJzdHJpbmdcIiA/IGZyb20gOiBjYWNoZS5pZGVudGlmeShmcm9tKSwgcXVlcnk6IGNhY2hlW1wiZ2V0RnJhZ21lbnREb2NcIl0oZnJhZ21lbnQsIGZyYWdtZW50TmFtZSksIG9wdGltaXN0aWM6IG9wdGltaXN0aWMgfSk7XG4gICAgdmFyIHJlc3VsdFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICAgIHZhciBsYXRlc3REaWZmID0gY2FjaGUuZGlmZihkaWZmT3B0aW9ucyk7XG4gICAgdmFyIGdldFNuYXBzaG90ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGF0ZXN0RGlmZlRvUmVzdWx0ID0gZGlmZlRvUmVzdWx0KGxhdGVzdERpZmYpO1xuICAgICAgICByZXR1cm4gcmVzdWx0UmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICAgIGVxdWFsaXR5LmVxdWFsKHJlc3VsdFJlZi5jdXJyZW50LmRhdGEsIGxhdGVzdERpZmZUb1Jlc3VsdC5kYXRhKVxuICAgICAgICAgICAgPyByZXN1bHRSZWYuY3VycmVudFxuICAgICAgICAgICAgOiAocmVzdWx0UmVmLmN1cnJlbnQgPSBsYXRlc3REaWZmVG9SZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIHVzZVN5bmNFeHRlcm5hbFN0b3JlKGZ1bmN0aW9uIChmb3JjZVVwZGF0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGUud2F0Y2godHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGRpZmZPcHRpb25zKSwgeyBpbW1lZGlhdGU6IHRydWUsIGNhbGxiYWNrOiBmdW5jdGlvbiAoZGlmZikge1xuICAgICAgICAgICAgICAgIGlmICghZXF1YWxpdHkuZXF1YWwoZGlmZiwgbGF0ZXN0RGlmZikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0UmVmLmN1cnJlbnQgPSBkaWZmVG9SZXN1bHQoKGxhdGVzdERpZmYgPSBkaWZmKSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB9KSk7XG4gICAgfSwgZ2V0U25hcHNob3QsIGdldFNuYXBzaG90KTtcbn1cbmZ1bmN0aW9uIGRpZmZUb1Jlc3VsdChkaWZmKSB7XG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgZGF0YTogZGlmZi5yZXN1bHQsXG4gICAgICAgIGNvbXBsZXRlOiAhIWRpZmYuY29tcGxldGUsXG4gICAgfTtcbiAgICBpZiAoZGlmZi5taXNzaW5nKSB7XG4gICAgICAgIHJlc3VsdC5taXNzaW5nID0gdXRpbGl0aWVzLm1lcmdlRGVlcEFycmF5KGRpZmYubWlzc2luZy5tYXAoZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBlcnJvci5taXNzaW5nOyB9KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydHMudXNlQXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50O1xuZXhwb3J0cy51c2VGcmFnbWVudF9leHBlcmltZW50YWwgPSB1c2VGcmFnbWVudF9leHBlcmltZW50YWw7XG5leHBvcnRzLnVzZUxhenlRdWVyeSA9IHVzZUxhenlRdWVyeTtcbmV4cG9ydHMudXNlTXV0YXRpb24gPSB1c2VNdXRhdGlvbjtcbmV4cG9ydHMudXNlUXVlcnkgPSB1c2VRdWVyeTtcbmV4cG9ydHMudXNlUmVhY3RpdmVWYXIgPSB1c2VSZWFjdGl2ZVZhcjtcbmV4cG9ydHMudXNlU3Vic2NyaXB0aW9uID0gdXNlU3Vic2NyaXB0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG5cbmV4cG9ydHMuRG9jdW1lbnRUeXBlID0gdm9pZCAwO1xuKGZ1bmN0aW9uIChEb2N1bWVudFR5cGUpIHtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiUXVlcnlcIl0gPSAwXSA9IFwiUXVlcnlcIjtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiTXV0YXRpb25cIl0gPSAxXSA9IFwiTXV0YXRpb25cIjtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiU3Vic2NyaXB0aW9uXCJdID0gMl0gPSBcIlN1YnNjcmlwdGlvblwiO1xufSkoZXhwb3J0cy5Eb2N1bWVudFR5cGUgfHwgKGV4cG9ydHMuRG9jdW1lbnRUeXBlID0ge30pKTtcbnZhciBjYWNoZSA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIG9wZXJhdGlvbk5hbWUodHlwZSkge1xuICAgIHZhciBuYW1lO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIGV4cG9ydHMuRG9jdW1lbnRUeXBlLlF1ZXJ5OlxuICAgICAgICAgICAgbmFtZSA9ICdRdWVyeSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBleHBvcnRzLkRvY3VtZW50VHlwZS5NdXRhdGlvbjpcbiAgICAgICAgICAgIG5hbWUgPSAnTXV0YXRpb24nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZXhwb3J0cy5Eb2N1bWVudFR5cGUuU3Vic2NyaXB0aW9uOlxuICAgICAgICAgICAgbmFtZSA9ICdTdWJzY3JpcHRpb24nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gcGFyc2VyKGRvY3VtZW50KSB7XG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlLmdldChkb2N1bWVudCk7XG4gICAgaWYgKGNhY2hlZClcbiAgICAgICAgcmV0dXJuIGNhY2hlZDtcbiAgICB2YXIgdmFyaWFibGVzLCB0eXBlLCBuYW1lO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghIWRvY3VtZW50ICYmICEhZG9jdW1lbnQua2luZCwgXCJBcmd1bWVudCBvZiBcIi5jb25jYXQoZG9jdW1lbnQsIFwiIHBhc3NlZCB0byBwYXJzZXIgd2FzIG5vdCBhIHZhbGlkIEdyYXBoUUwgXCIpICtcbiAgICAgICAgXCJEb2N1bWVudE5vZGUuIFlvdSBtYXkgbmVlZCB0byB1c2UgJ2dyYXBocWwtdGFnJyBvciBhbm90aGVyIG1ldGhvZCBcIiArXG4gICAgICAgIFwidG8gY29udmVydCB5b3VyIG9wZXJhdGlvbiBpbnRvIGEgZG9jdW1lbnRcIikgOiBnbG9iYWxzLmludmFyaWFudCghIWRvY3VtZW50ICYmICEhZG9jdW1lbnQua2luZCwgMzMpO1xuICAgIHZhciBmcmFnbWVudHMgPSBbXTtcbiAgICB2YXIgcXVlcmllcyA9IFtdO1xuICAgIHZhciBtdXRhdGlvbnMgPSBbXTtcbiAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBkb2N1bWVudC5kZWZpbml0aW9uczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHggPSBfYVtfaV07XG4gICAgICAgIGlmICh4LmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nKSB7XG4gICAgICAgICAgICBmcmFnbWVudHMucHVzaCh4KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4LmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgc3dpdGNoICh4Lm9wZXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgICAgICAgICAgICAgICAgcXVlcmllcy5wdXNoKHgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtdXRhdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9ucy5wdXNoKHgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzdWJzY3JpcHRpb24nOlxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25zLnB1c2goeCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghZnJhZ21lbnRzLmxlbmd0aCB8fFxuICAgICAgICAocXVlcmllcy5sZW5ndGggfHwgbXV0YXRpb25zLmxlbmd0aCB8fCBzdWJzY3JpcHRpb25zLmxlbmd0aCksIFwiUGFzc2luZyBvbmx5IGEgZnJhZ21lbnQgdG8gJ2dyYXBocWwnIGlzIG5vdCB5ZXQgc3VwcG9ydGVkLiBcIiArXG4gICAgICAgIFwiWW91IG11c3QgaW5jbHVkZSBhIHF1ZXJ5LCBzdWJzY3JpcHRpb24gb3IgbXV0YXRpb24gYXMgd2VsbFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KCFmcmFnbWVudHMubGVuZ3RoIHx8XG4gICAgICAgIChxdWVyaWVzLmxlbmd0aCB8fCBtdXRhdGlvbnMubGVuZ3RoIHx8IHN1YnNjcmlwdGlvbnMubGVuZ3RoKSwgMzQpO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChxdWVyaWVzLmxlbmd0aCArIG11dGF0aW9ucy5sZW5ndGggKyBzdWJzY3JpcHRpb25zLmxlbmd0aCA8PSAxLCBcInJlYWN0LWFwb2xsbyBvbmx5IHN1cHBvcnRzIGEgcXVlcnksIHN1YnNjcmlwdGlvbiwgb3IgYSBtdXRhdGlvbiBwZXIgSE9DLiBcIiArXG4gICAgICAgIFwiXCIuY29uY2F0KGRvY3VtZW50LCBcIiBoYWQgXCIpLmNvbmNhdChxdWVyaWVzLmxlbmd0aCwgXCIgcXVlcmllcywgXCIpLmNvbmNhdChzdWJzY3JpcHRpb25zLmxlbmd0aCwgXCIgXCIpICtcbiAgICAgICAgXCJzdWJzY3JpcHRpb25zIGFuZCBcIi5jb25jYXQobXV0YXRpb25zLmxlbmd0aCwgXCIgbXV0YXRpb25zLiBcIikgK1xuICAgICAgICBcIllvdSBjYW4gdXNlICdjb21wb3NlJyB0byBqb2luIG11bHRpcGxlIG9wZXJhdGlvbiB0eXBlcyB0byBhIGNvbXBvbmVudFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KHF1ZXJpZXMubGVuZ3RoICsgbXV0YXRpb25zLmxlbmd0aCArIHN1YnNjcmlwdGlvbnMubGVuZ3RoIDw9IDEsIDM1KTtcbiAgICB0eXBlID0gcXVlcmllcy5sZW5ndGggPyBleHBvcnRzLkRvY3VtZW50VHlwZS5RdWVyeSA6IGV4cG9ydHMuRG9jdW1lbnRUeXBlLk11dGF0aW9uO1xuICAgIGlmICghcXVlcmllcy5sZW5ndGggJiYgIW11dGF0aW9ucy5sZW5ndGgpXG4gICAgICAgIHR5cGUgPSBleHBvcnRzLkRvY3VtZW50VHlwZS5TdWJzY3JpcHRpb247XG4gICAgdmFyIGRlZmluaXRpb25zID0gcXVlcmllcy5sZW5ndGhcbiAgICAgICAgPyBxdWVyaWVzXG4gICAgICAgIDogbXV0YXRpb25zLmxlbmd0aFxuICAgICAgICAgICAgPyBtdXRhdGlvbnNcbiAgICAgICAgICAgIDogc3Vic2NyaXB0aW9ucztcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZGVmaW5pdGlvbnMubGVuZ3RoID09PSAxLCBcInJlYWN0LWFwb2xsbyBvbmx5IHN1cHBvcnRzIG9uZSBkZWZpbml0aW9uIHBlciBIT0MuIFwiLmNvbmNhdChkb2N1bWVudCwgXCIgaGFkIFwiKSArXG4gICAgICAgIFwiXCIuY29uY2F0KGRlZmluaXRpb25zLmxlbmd0aCwgXCIgZGVmaW5pdGlvbnMuIFwiKSArXG4gICAgICAgIFwiWW91IGNhbiB1c2UgJ2NvbXBvc2UnIHRvIGpvaW4gbXVsdGlwbGUgb3BlcmF0aW9uIHR5cGVzIHRvIGEgY29tcG9uZW50XCIpIDogZ2xvYmFscy5pbnZhcmlhbnQoZGVmaW5pdGlvbnMubGVuZ3RoID09PSAxLCAzNik7XG4gICAgdmFyIGRlZmluaXRpb24gPSBkZWZpbml0aW9uc1swXTtcbiAgICB2YXJpYWJsZXMgPSBkZWZpbml0aW9uLnZhcmlhYmxlRGVmaW5pdGlvbnMgfHwgW107XG4gICAgaWYgKGRlZmluaXRpb24ubmFtZSAmJiBkZWZpbml0aW9uLm5hbWUua2luZCA9PT0gJ05hbWUnKSB7XG4gICAgICAgIG5hbWUgPSBkZWZpbml0aW9uLm5hbWUudmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBuYW1lID0gJ2RhdGEnO1xuICAgIH1cbiAgICB2YXIgcGF5bG9hZCA9IHsgbmFtZTogbmFtZSwgdHlwZTogdHlwZSwgdmFyaWFibGVzOiB2YXJpYWJsZXMgfTtcbiAgICBjYWNoZS5zZXQoZG9jdW1lbnQsIHBheWxvYWQpO1xuICAgIHJldHVybiBwYXlsb2FkO1xufVxuZnVuY3Rpb24gdmVyaWZ5RG9jdW1lbnRUeXBlKGRvY3VtZW50LCB0eXBlKSB7XG4gICAgdmFyIG9wZXJhdGlvbiA9IHBhcnNlcihkb2N1bWVudCk7XG4gICAgdmFyIHJlcXVpcmVkT3BlcmF0aW9uTmFtZSA9IG9wZXJhdGlvbk5hbWUodHlwZSk7XG4gICAgdmFyIHVzZWRPcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZShvcGVyYXRpb24udHlwZSk7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wZXJhdGlvbi50eXBlID09PSB0eXBlLCBcIlJ1bm5pbmcgYSBcIi5jb25jYXQocmVxdWlyZWRPcGVyYXRpb25OYW1lLCBcIiByZXF1aXJlcyBhIGdyYXBocWwgXCIpICtcbiAgICAgICAgXCJcIi5jb25jYXQocmVxdWlyZWRPcGVyYXRpb25OYW1lLCBcIiwgYnV0IGEgXCIpLmNvbmNhdCh1c2VkT3BlcmF0aW9uTmFtZSwgXCIgd2FzIHVzZWQgaW5zdGVhZC5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQob3BlcmF0aW9uLnR5cGUgPT09IHR5cGUsIDM3KTtcbn1cblxuZXhwb3J0cy5vcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZTtcbmV4cG9ydHMucGFyc2VyID0gcGFyc2VyO1xuZXhwb3J0cy52ZXJpZnlEb2N1bWVudFR5cGUgPSB2ZXJpZnlEb2N1bWVudFR5cGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZXIuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5yZXF1aXJlKCcuLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKTtcbnZhciBob29rcyA9IHJlcXVpcmUoJy4vaG9va3MnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCcuL3BhcnNlcicpO1xuXG5cblxuZXhwb3J0cy5BcG9sbG9Db25zdW1lciA9IGNvbnRleHQuQXBvbGxvQ29uc3VtZXI7XG5leHBvcnRzLkFwb2xsb1Byb3ZpZGVyID0gY29udGV4dC5BcG9sbG9Qcm92aWRlcjtcbmV4cG9ydHMuZ2V0QXBvbGxvQ29udGV4dCA9IGNvbnRleHQuZ2V0QXBvbGxvQ29udGV4dDtcbmV4cG9ydHMucmVzZXRBcG9sbG9Db250ZXh0ID0gY29udGV4dC5yZXNldEFwb2xsb0NvbnRleHQ7XG5leHBvcnRzLkRvY3VtZW50VHlwZSA9IHBhcnNlci5Eb2N1bWVudFR5cGU7XG5leHBvcnRzLm9wZXJhdGlvbk5hbWUgPSBwYXJzZXIub3BlcmF0aW9uTmFtZTtcbmV4cG9ydHMucGFyc2VyID0gcGFyc2VyLnBhcnNlcjtcbmZvciAodmFyIGsgaW4gaG9va3MpIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgZXhwb3J0c1trXSA9IGhvb2tzW2tdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNJbnZhcmlhbnQgPSByZXF1aXJlKCd0cy1pbnZhcmlhbnQnKTtcbnZhciBwcm9jZXNzJDEgPSByZXF1aXJlKCd0cy1pbnZhcmlhbnQvcHJvY2VzcycpO1xudmFyIGdyYXBocWwgPSByZXF1aXJlKCdncmFwaHFsJyk7XG5cbmZ1bmN0aW9uIG1heWJlKHRodW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRodW5rKCk7XG4gICAgfVxuICAgIGNhdGNoIChfYSkgeyB9XG59XG5cbnZhciBnbG9iYWwkMSA9IChtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBnbG9iYWxUaGlzOyB9KSB8fFxuICAgIG1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdzsgfSkgfHxcbiAgICBtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmOyB9KSB8fFxuICAgIG1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdsb2JhbDsgfSkgfHxcbiAgICBtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBtYXliZS5jb25zdHJ1Y3RvcihcInJldHVybiB0aGlzXCIpKCk7IH0pKTtcblxudmFyIF9fID0gXCJfX1wiO1xudmFyIEdMT0JBTF9LRVkgPSBbX18sIF9fXS5qb2luKFwiREVWXCIpO1xuZnVuY3Rpb24gZ2V0REVWKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKF9fREVWX18pO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCQxLCBHTE9CQUxfS0VZLCB7XG4gICAgICAgICAgICB2YWx1ZTogbWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7IH0pICE9PSBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ2xvYmFsJDFbR0xPQkFMX0tFWV07XG4gICAgfVxufVxudmFyIERFViA9IGdldERFVigpO1xuXG5mdW5jdGlvbiByZW1vdmVUZW1wb3JhcnlHbG9iYWxzKCkge1xuICAgIHJldHVybiB0eXBlb2YgZ3JhcGhxbC5Tb3VyY2UgPT09IFwiZnVuY3Rpb25cIiA/IHByb2Nlc3MkMS5yZW1vdmUoKSA6IHByb2Nlc3MkMS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tERVYoKSB7XG4gICAgX19ERVZfXyA/IHRzSW52YXJpYW50LmludmFyaWFudChcImJvb2xlYW5cIiA9PT0gdHlwZW9mIERFViwgREVWKSA6IHRzSW52YXJpYW50LmludmFyaWFudChcImJvb2xlYW5cIiA9PT0gdHlwZW9mIERFViwgMzkpO1xufVxucmVtb3ZlVGVtcG9yYXJ5R2xvYmFscygpO1xuY2hlY2tERVYoKTtcblxuZXhwb3J0cy5JbnZhcmlhbnRFcnJvciA9IHRzSW52YXJpYW50LkludmFyaWFudEVycm9yO1xuZXhwb3J0cy5pbnZhcmlhbnQgPSB0c0ludmFyaWFudC5pbnZhcmlhbnQ7XG5leHBvcnRzLkRFViA9IERFVjtcbmV4cG9ydHMuY2hlY2tERVYgPSBjaGVja0RFVjtcbmV4cG9ydHMuZ2xvYmFsID0gZ2xvYmFsJDE7XG5leHBvcnRzLm1heWJlID0gbWF5YmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nbG9iYWxzLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuL2dsb2JhbHMnKTtcbnZhciBncmFwaHFsID0gcmVxdWlyZSgnZ3JhcGhxbCcpO1xudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciB6ZW5PYnNlcnZhYmxlVHMgPSByZXF1aXJlKCd6ZW4tb2JzZXJ2YWJsZS10cycpO1xucmVxdWlyZSgnc3ltYm9sLW9ic2VydmFibGUnKTtcblxuZnVuY3Rpb24gc2hvdWxkSW5jbHVkZShfYSwgdmFyaWFibGVzKSB7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSBfYS5kaXJlY3RpdmVzO1xuICAgIGlmICghZGlyZWN0aXZlcyB8fCAhZGlyZWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBnZXRJbmNsdXNpb25EaXJlY3RpdmVzKGRpcmVjdGl2ZXMpLmV2ZXJ5KGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgZGlyZWN0aXZlID0gX2EuZGlyZWN0aXZlLCBpZkFyZ3VtZW50ID0gX2EuaWZBcmd1bWVudDtcbiAgICAgICAgdmFyIGV2YWxlZFZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmIChpZkFyZ3VtZW50LnZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZScpIHtcbiAgICAgICAgICAgIGV2YWxlZFZhbHVlID0gdmFyaWFibGVzICYmIHZhcmlhYmxlc1tpZkFyZ3VtZW50LnZhbHVlLm5hbWUudmFsdWVdO1xuICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGV2YWxlZFZhbHVlICE9PSB2b2lkIDAsIFwiSW52YWxpZCB2YXJpYWJsZSByZWZlcmVuY2VkIGluIEBcIi5jb25jYXQoZGlyZWN0aXZlLm5hbWUudmFsdWUsIFwiIGRpcmVjdGl2ZS5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQoZXZhbGVkVmFsdWUgIT09IHZvaWQgMCwgNDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZhbGVkVmFsdWUgPSBpZkFyZ3VtZW50LnZhbHVlLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJlY3RpdmUubmFtZS52YWx1ZSA9PT0gJ3NraXAnID8gIWV2YWxlZFZhbHVlIDogZXZhbGVkVmFsdWU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXREaXJlY3RpdmVOYW1lcyhyb290KSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZ3JhcGhxbC52aXNpdChyb290LCB7XG4gICAgICAgIERpcmVjdGl2ZTogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIG5hbWVzLnB1c2gobm9kZS5uYW1lLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmFtZXM7XG59XG52YXIgaGFzQW55RGlyZWN0aXZlcyA9IGZ1bmN0aW9uIChuYW1lcywgcm9vdCkgeyByZXR1cm4gaGFzRGlyZWN0aXZlcyhuYW1lcywgcm9vdCwgZmFsc2UpOyB9O1xudmFyIGhhc0FsbERpcmVjdGl2ZXMgPSBmdW5jdGlvbiAobmFtZXMsIHJvb3QpIHsgcmV0dXJuIGhhc0RpcmVjdGl2ZXMobmFtZXMsIHJvb3QsIHRydWUpOyB9O1xuZnVuY3Rpb24gaGFzRGlyZWN0aXZlcyhuYW1lcywgcm9vdCwgYWxsKSB7XG4gICAgdmFyIG5hbWVTZXQgPSBuZXcgU2V0KG5hbWVzKTtcbiAgICB2YXIgdW5pcXVlQ291bnQgPSBuYW1lU2V0LnNpemU7XG4gICAgZ3JhcGhxbC52aXNpdChyb290LCB7XG4gICAgICAgIERpcmVjdGl2ZTogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChuYW1lU2V0LmRlbGV0ZShub2RlLm5hbWUudmFsdWUpICYmXG4gICAgICAgICAgICAgICAgKCFhbGwgfHwgIW5hbWVTZXQuc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JhcGhxbC5CUkVBSztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gYWxsID8gIW5hbWVTZXQuc2l6ZSA6IG5hbWVTZXQuc2l6ZSA8IHVuaXF1ZUNvdW50O1xufVxuZnVuY3Rpb24gaGFzQ2xpZW50RXhwb3J0cyhkb2N1bWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudCAmJiBoYXNEaXJlY3RpdmVzKFsnY2xpZW50JywgJ2V4cG9ydCddLCBkb2N1bWVudCwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBpc0luY2x1c2lvbkRpcmVjdGl2ZShfYSkge1xuICAgIHZhciB2YWx1ZSA9IF9hLm5hbWUudmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnc2tpcCcgfHwgdmFsdWUgPT09ICdpbmNsdWRlJztcbn1cbmZ1bmN0aW9uIGdldEluY2x1c2lvbkRpcmVjdGl2ZXMoZGlyZWN0aXZlcykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBpZiAoZGlyZWN0aXZlcyAmJiBkaXJlY3RpdmVzLmxlbmd0aCkge1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKCFpc0luY2x1c2lvbkRpcmVjdGl2ZShkaXJlY3RpdmUpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmVBcmd1bWVudHMgPSBkaXJlY3RpdmUuYXJndW1lbnRzO1xuICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZU5hbWUgPSBkaXJlY3RpdmUubmFtZS52YWx1ZTtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChkaXJlY3RpdmVBcmd1bWVudHMgJiYgZGlyZWN0aXZlQXJndW1lbnRzLmxlbmd0aCA9PT0gMSwgXCJJbmNvcnJlY3QgbnVtYmVyIG9mIGFyZ3VtZW50cyBmb3IgdGhlIEBcIi5jb25jYXQoZGlyZWN0aXZlTmFtZSwgXCIgZGlyZWN0aXZlLlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChkaXJlY3RpdmVBcmd1bWVudHMgJiYgZGlyZWN0aXZlQXJndW1lbnRzLmxlbmd0aCA9PT0gMSwgNDEpO1xuICAgICAgICAgICAgdmFyIGlmQXJndW1lbnQgPSBkaXJlY3RpdmVBcmd1bWVudHNbMF07XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoaWZBcmd1bWVudC5uYW1lICYmIGlmQXJndW1lbnQubmFtZS52YWx1ZSA9PT0gJ2lmJywgXCJJbnZhbGlkIGFyZ3VtZW50IGZvciB0aGUgQFwiLmNvbmNhdChkaXJlY3RpdmVOYW1lLCBcIiBkaXJlY3RpdmUuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KGlmQXJndW1lbnQubmFtZSAmJiBpZkFyZ3VtZW50Lm5hbWUudmFsdWUgPT09ICdpZicsIDQyKTtcbiAgICAgICAgICAgIHZhciBpZlZhbHVlID0gaWZBcmd1bWVudC52YWx1ZTtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChpZlZhbHVlICYmXG4gICAgICAgICAgICAgICAgKGlmVmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJyB8fCBpZlZhbHVlLmtpbmQgPT09ICdCb29sZWFuVmFsdWUnKSwgXCJBcmd1bWVudCBmb3IgdGhlIEBcIi5jb25jYXQoZGlyZWN0aXZlTmFtZSwgXCIgZGlyZWN0aXZlIG11c3QgYmUgYSB2YXJpYWJsZSBvciBhIGJvb2xlYW4gdmFsdWUuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KGlmVmFsdWUgJiZcbiAgICAgICAgICAgICAgICAoaWZWYWx1ZS5raW5kID09PSAnVmFyaWFibGUnIHx8IGlmVmFsdWUua2luZCA9PT0gJ0Jvb2xlYW5WYWx1ZScpLCA0Myk7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGRpcmVjdGl2ZTogZGlyZWN0aXZlLCBpZkFyZ3VtZW50OiBpZkFyZ3VtZW50IH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2V0RnJhZ21lbnRRdWVyeURvY3VtZW50KGRvY3VtZW50LCBmcmFnbWVudE5hbWUpIHtcbiAgICB2YXIgYWN0dWFsRnJhZ21lbnROYW1lID0gZnJhZ21lbnROYW1lO1xuICAgIHZhciBmcmFnbWVudHMgPSBbXTtcbiAgICBkb2N1bWVudC5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiRm91bmQgYSBcIi5jb25jYXQoZGVmaW5pdGlvbi5vcGVyYXRpb24sIFwiIG9wZXJhdGlvblwiKS5jb25jYXQoZGVmaW5pdGlvbi5uYW1lID8gXCIgbmFtZWQgJ1wiLmNvbmNhdChkZWZpbml0aW9uLm5hbWUudmFsdWUsIFwiJ1wiKSA6ICcnLCBcIi4gXCIpICtcbiAgICAgICAgICAgICAgICAnTm8gb3BlcmF0aW9ucyBhcmUgYWxsb3dlZCB3aGVuIHVzaW5nIGEgZnJhZ21lbnQgYXMgYSBxdWVyeS4gT25seSBmcmFnbWVudHMgYXJlIGFsbG93ZWQuJykgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig0NCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIGZyYWdtZW50cy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBhY3R1YWxGcmFnbWVudE5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudHMubGVuZ3RoID09PSAxLCBcIkZvdW5kIFwiLmNvbmNhdChmcmFnbWVudHMubGVuZ3RoLCBcIiBmcmFnbWVudHMuIGBmcmFnbWVudE5hbWVgIG11c3QgYmUgcHJvdmlkZWQgd2hlbiB0aGVyZSBpcyBub3QgZXhhY3RseSAxIGZyYWdtZW50LlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudHMubGVuZ3RoID09PSAxLCA0NSk7XG4gICAgICAgIGFjdHVhbEZyYWdtZW50TmFtZSA9IGZyYWdtZW50c1swXS5uYW1lLnZhbHVlO1xuICAgIH1cbiAgICB2YXIgcXVlcnkgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZG9jdW1lbnQpLCB7IGRlZmluaXRpb25zOiB0c2xpYi5fX3NwcmVhZEFycmF5KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBraW5kOiAnT3BlcmF0aW9uRGVmaW5pdGlvbicsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiAncXVlcnknLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGcmFnbWVudFNwcmVhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhY3R1YWxGcmFnbWVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSwgZG9jdW1lbnQuZGVmaW5pdGlvbnMsIHRydWUpIH0pO1xuICAgIHJldHVybiBxdWVyeTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50TWFwKGZyYWdtZW50cykge1xuICAgIGlmIChmcmFnbWVudHMgPT09IHZvaWQgMCkgeyBmcmFnbWVudHMgPSBbXTsgfVxuICAgIHZhciBzeW1UYWJsZSA9IHt9O1xuICAgIGZyYWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnbWVudCkge1xuICAgICAgICBzeW1UYWJsZVtmcmFnbWVudC5uYW1lLnZhbHVlXSA9IGZyYWdtZW50O1xuICAgIH0pO1xuICAgIHJldHVybiBzeW1UYWJsZTtcbn1cbmZ1bmN0aW9uIGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbihzZWxlY3Rpb24sIGZyYWdtZW50TWFwKSB7XG4gICAgc3dpdGNoIChzZWxlY3Rpb24ua2luZCkge1xuICAgICAgICBjYXNlICdJbmxpbmVGcmFnbWVudCc6XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgICAgICBjYXNlICdGcmFnbWVudFNwcmVhZCc6IHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudE5hbWUgPSBzZWxlY3Rpb24ubmFtZS52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhZ21lbnRNYXAgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmcmFnbWVudE1hcChmcmFnbWVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZnJhZ21lbnRNYXAgJiYgZnJhZ21lbnRNYXBbZnJhZ21lbnROYW1lXTtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudCwgXCJObyBmcmFnbWVudCBuYW1lZCBcIi5jb25jYXQoZnJhZ21lbnROYW1lKSkgOiBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudCwgNDYpO1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50IHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIG1ha2VSZWZlcmVuY2UoaWQpIHtcbiAgICByZXR1cm4geyBfX3JlZjogU3RyaW5nKGlkKSB9O1xufVxuZnVuY3Rpb24gaXNSZWZlcmVuY2Uob2JqKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4ob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmouX19yZWYgPT09ICdzdHJpbmcnKTtcbn1cbmZ1bmN0aW9uIGlzRG9jdW1lbnROb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc05vbk51bGxPYmplY3QodmFsdWUpICYmXG4gICAgICAgIHZhbHVlLmtpbmQgPT09IFwiRG9jdW1lbnRcIiAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHZhbHVlLmRlZmluaXRpb25zKSk7XG59XG5mdW5jdGlvbiBpc1N0cmluZ1ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdTdHJpbmdWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0Jvb2xlYW5WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnQm9vbGVhblZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzSW50VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0ludFZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzRmxvYXRWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnRmxvYXRWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc1ZhcmlhYmxlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZSc7XG59XG5mdW5jdGlvbiBpc09iamVjdFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdPYmplY3RWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0xpc3RWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnTGlzdFZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzRW51bVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdFbnVtVmFsdWUnO1xufVxuZnVuY3Rpb24gaXNOdWxsVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ051bGxWYWx1ZSc7XG59XG5mdW5jdGlvbiB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24oYXJnT2JqLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKSB7XG4gICAgaWYgKGlzSW50VmFsdWUodmFsdWUpIHx8IGlzRmxvYXRWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gTnVtYmVyKHZhbHVlLnZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNCb29sZWFuVmFsdWUodmFsdWUpIHx8IGlzU3RyaW5nVmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdFZhbHVlKHZhbHVlKSkge1xuICAgICAgICB2YXIgbmVzdGVkQXJnT2JqXzEgPSB7fTtcbiAgICAgICAgdmFsdWUuZmllbGRzLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKG5lc3RlZEFyZ09ial8xLCBvYmoubmFtZSwgb2JqLnZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gbmVzdGVkQXJnT2JqXzE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVmFyaWFibGUodmFsdWUpKSB7XG4gICAgICAgIHZhciB2YXJpYWJsZVZhbHVlID0gKHZhcmlhYmxlcyB8fCB7fSlbdmFsdWUubmFtZS52YWx1ZV07XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IHZhcmlhYmxlVmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTGlzdFZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YWx1ZS52YWx1ZXMubWFwKGZ1bmN0aW9uIChsaXN0VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBuZXN0ZWRBcmdBcnJheU9iaiA9IHt9O1xuICAgICAgICAgICAgdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKG5lc3RlZEFyZ0FycmF5T2JqLCBuYW1lLCBsaXN0VmFsdWUsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkQXJnQXJyYXlPYmpbbmFtZS52YWx1ZV07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0VudW1WYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTnVsbFZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiVGhlIGlubGluZSBhcmd1bWVudCBcXFwiXCIuY29uY2F0KG5hbWUudmFsdWUsIFwiXFxcIiBvZiBraW5kIFxcXCJcIikuY29uY2F0KHZhbHVlLmtpbmQsIFwiXFxcIlwiKSArXG4gICAgICAgICAgICAnaXMgbm90IHN1cHBvcnRlZC4gVXNlIHZhcmlhYmxlcyBpbnN0ZWFkIG9mIGlubGluZSBhcmd1bWVudHMgdG8gJyArXG4gICAgICAgICAgICAnb3ZlcmNvbWUgdGhpcyBsaW1pdGF0aW9uLicpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNTUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0b3JlS2V5TmFtZUZyb21GaWVsZChmaWVsZCwgdmFyaWFibGVzKSB7XG4gICAgdmFyIGRpcmVjdGl2ZXNPYmogPSBudWxsO1xuICAgIGlmIChmaWVsZC5kaXJlY3RpdmVzKSB7XG4gICAgICAgIGRpcmVjdGl2ZXNPYmogPSB7fTtcbiAgICAgICAgZmllbGQuZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXNPYmpbZGlyZWN0aXZlLm5hbWUudmFsdWVdID0ge307XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3VtZW50cykge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZS5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lLCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGRpcmVjdGl2ZXNPYmpbZGlyZWN0aXZlLm5hbWUudmFsdWVdLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBhcmdPYmogPSBudWxsO1xuICAgIGlmIChmaWVsZC5hcmd1bWVudHMgJiYgZmllbGQuYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBhcmdPYmogPSB7fTtcbiAgICAgICAgZmllbGQuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09iaiwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0U3RvcmVLZXlOYW1lKGZpZWxkLm5hbWUudmFsdWUsIGFyZ09iaiwgZGlyZWN0aXZlc09iaik7XG59XG52YXIgS05PV05fRElSRUNUSVZFUyA9IFtcbiAgICAnY29ubmVjdGlvbicsXG4gICAgJ2luY2x1ZGUnLFxuICAgICdza2lwJyxcbiAgICAnY2xpZW50JyxcbiAgICAncmVzdCcsXG4gICAgJ2V4cG9ydCcsXG5dO1xudmFyIGdldFN0b3JlS2V5TmFtZSA9IE9iamVjdC5hc3NpZ24oZnVuY3Rpb24gKGZpZWxkTmFtZSwgYXJncywgZGlyZWN0aXZlcykge1xuICAgIGlmIChhcmdzICYmXG4gICAgICAgIGRpcmVjdGl2ZXMgJiZcbiAgICAgICAgZGlyZWN0aXZlc1snY29ubmVjdGlvbiddICYmXG4gICAgICAgIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsna2V5J10pIHtcbiAgICAgICAgaWYgKGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsnZmlsdGVyJ10gJiZcbiAgICAgICAgICAgIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsnZmlsdGVyJ10ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGZpbHRlcktleXMgPSBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddXG4gICAgICAgICAgICAgICAgPyBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddXG4gICAgICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgICAgIGZpbHRlcktleXMuc29ydCgpO1xuICAgICAgICAgICAgdmFyIGZpbHRlcmVkQXJnc18xID0ge307XG4gICAgICAgICAgICBmaWx0ZXJLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkQXJnc18xW2tleV0gPSBhcmdzW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2tleSddLCBcIihcIikuY29uY2F0KHN0cmluZ2lmeShmaWx0ZXJlZEFyZ3NfMSksIFwiKVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2tleSddO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBjb21wbGV0ZUZpZWxkTmFtZSA9IGZpZWxkTmFtZTtcbiAgICBpZiAoYXJncykge1xuICAgICAgICB2YXIgc3RyaW5naWZpZWRBcmdzID0gc3RyaW5naWZ5KGFyZ3MpO1xuICAgICAgICBjb21wbGV0ZUZpZWxkTmFtZSArPSBcIihcIi5jb25jYXQoc3RyaW5naWZpZWRBcmdzLCBcIilcIik7XG4gICAgfVxuICAgIGlmIChkaXJlY3RpdmVzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRpcmVjdGl2ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKEtOT1dOX0RJUkVDVElWRVMuaW5kZXhPZihrZXkpICE9PSAtMSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlc1trZXldICYmIE9iamVjdC5rZXlzKGRpcmVjdGl2ZXNba2V5XSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVGaWVsZE5hbWUgKz0gXCJAXCIuY29uY2F0KGtleSwgXCIoXCIpLmNvbmNhdChzdHJpbmdpZnkoZGlyZWN0aXZlc1trZXldKSwgXCIpXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVGaWVsZE5hbWUgKz0gXCJAXCIuY29uY2F0KGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29tcGxldGVGaWVsZE5hbWU7XG59LCB7XG4gICAgc2V0U3RyaW5naWZ5OiBmdW5jdGlvbiAocykge1xuICAgICAgICB2YXIgcHJldmlvdXMgPSBzdHJpbmdpZnk7XG4gICAgICAgIHN0cmluZ2lmeSA9IHM7XG4gICAgICAgIHJldHVybiBwcmV2aW91cztcbiAgICB9LFxufSk7XG52YXIgc3RyaW5naWZ5ID0gZnVuY3Rpb24gZGVmYXVsdFN0cmluZ2lmeSh2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgc3RyaW5naWZ5UmVwbGFjZXIpO1xufTtcbmZ1bmN0aW9uIHN0cmluZ2lmeVJlcGxhY2VyKF9rZXksIHZhbHVlKSB7XG4gICAgaWYgKGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gT2JqZWN0LmtleXModmFsdWUpLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24gKGNvcHksIGtleSkge1xuICAgICAgICAgICAgY29weVtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGFyZ3VtZW50c09iamVjdEZyb21GaWVsZChmaWVsZCwgdmFyaWFibGVzKSB7XG4gICAgaWYgKGZpZWxkLmFyZ3VtZW50cyAmJiBmaWVsZC5hcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBhcmdPYmpfMSA9IHt9O1xuICAgICAgICBmaWVsZC5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24oYXJnT2JqXzEsIG5hbWUsIHZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFyZ09ial8xO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHJlc3VsdEtleU5hbWVGcm9tRmllbGQoZmllbGQpIHtcbiAgICByZXR1cm4gZmllbGQuYWxpYXMgPyBmaWVsZC5hbGlhcy52YWx1ZSA6IGZpZWxkLm5hbWUudmFsdWU7XG59XG5mdW5jdGlvbiBnZXRUeXBlbmFtZUZyb21SZXN1bHQocmVzdWx0LCBzZWxlY3Rpb25TZXQsIGZyYWdtZW50TWFwKSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQuX190eXBlbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5fX3R5cGVuYW1lO1xuICAgIH1cbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSBfYVtfaV07XG4gICAgICAgIGlmIChpc0ZpZWxkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubmFtZS52YWx1ZSA9PT0gJ19fdHlwZW5hbWUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFtyZXN1bHRLZXlOYW1lRnJvbUZpZWxkKHNlbGVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lID0gZ2V0VHlwZW5hbWVGcm9tUmVzdWx0KHJlc3VsdCwgZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uKHNlbGVjdGlvbiwgZnJhZ21lbnRNYXApLnNlbGVjdGlvblNldCwgZnJhZ21lbnRNYXApO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0eXBlbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBpc0ZpZWxkKHNlbGVjdGlvbikge1xuICAgIHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0ZpZWxkJztcbn1cbmZ1bmN0aW9uIGlzSW5saW5lRnJhZ21lbnQoc2VsZWN0aW9uKSB7XG4gICAgcmV0dXJuIHNlbGVjdGlvbi5raW5kID09PSAnSW5saW5lRnJhZ21lbnQnO1xufVxuXG5mdW5jdGlvbiBjaGVja0RvY3VtZW50KGRvYykge1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChkb2MgJiYgZG9jLmtpbmQgPT09ICdEb2N1bWVudCcsIFwiRXhwZWN0aW5nIGEgcGFyc2VkIEdyYXBoUUwgZG9jdW1lbnQuIFBlcmhhcHMgeW91IG5lZWQgdG8gd3JhcCB0aGUgcXVlcnkgc3RyaW5nIGluIGEgXFxcImdxbFxcXCIgdGFnPyBodHRwOi8vZG9jcy5hcG9sbG9zdGFjay5jb20vYXBvbGxvLWNsaWVudC9jb3JlLmh0bWwjZ3FsXCIpIDogZ2xvYmFscy5pbnZhcmlhbnQoZG9jICYmIGRvYy5raW5kID09PSAnRG9jdW1lbnQnLCA0Nyk7XG4gICAgdmFyIG9wZXJhdGlvbnMgPSBkb2MuZGVmaW5pdGlvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJzsgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kICE9PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIlNjaGVtYSB0eXBlIGRlZmluaXRpb25zIG5vdCBhbGxvd2VkIGluIHF1ZXJpZXMuIEZvdW5kOiBcXFwiXCIuY29uY2F0KGRlZmluaXRpb24ua2luZCwgXCJcXFwiXCIpKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDQ4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICB9KTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQob3BlcmF0aW9ucy5sZW5ndGggPD0gMSwgXCJBbWJpZ3VvdXMgR3JhcGhRTCBkb2N1bWVudDogY29udGFpbnMgXCIuY29uY2F0KG9wZXJhdGlvbnMubGVuZ3RoLCBcIiBvcGVyYXRpb25zXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KG9wZXJhdGlvbnMubGVuZ3RoIDw9IDEsIDQ5KTtcbiAgICByZXR1cm4gZG9jO1xufVxuZnVuY3Rpb24gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihkb2MpIHtcbiAgICBjaGVja0RvY3VtZW50KGRvYyk7XG4gICAgcmV0dXJuIGRvYy5kZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGRlZmluaXRpb24pIHsgcmV0dXJuIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nOyB9KVswXTtcbn1cbmZ1bmN0aW9uIGdldE9wZXJhdGlvbk5hbWUoZG9jKSB7XG4gICAgcmV0dXJuIChkb2MuZGVmaW5pdGlvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiYgZGVmaW5pdGlvbi5uYW1lO1xuICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgubmFtZS52YWx1ZTsgfSlbMF0gfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBnZXRGcmFnbWVudERlZmluaXRpb25zKGRvYykge1xuICAgIHJldHVybiBkb2MuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7IHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nOyB9KTtcbn1cbmZ1bmN0aW9uIGdldFF1ZXJ5RGVmaW5pdGlvbihkb2MpIHtcbiAgICB2YXIgcXVlcnlEZWYgPSBnZXRPcGVyYXRpb25EZWZpbml0aW9uKGRvYyk7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KHF1ZXJ5RGVmICYmIHF1ZXJ5RGVmLm9wZXJhdGlvbiA9PT0gJ3F1ZXJ5JywgJ011c3QgY29udGFpbiBhIHF1ZXJ5IGRlZmluaXRpb24uJykgOiBnbG9iYWxzLmludmFyaWFudChxdWVyeURlZiAmJiBxdWVyeURlZi5vcGVyYXRpb24gPT09ICdxdWVyeScsIDUwKTtcbiAgICByZXR1cm4gcXVlcnlEZWY7XG59XG5mdW5jdGlvbiBnZXRGcmFnbWVudERlZmluaXRpb24oZG9jKSB7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGRvYy5raW5kID09PSAnRG9jdW1lbnQnLCBcIkV4cGVjdGluZyBhIHBhcnNlZCBHcmFwaFFMIGRvY3VtZW50LiBQZXJoYXBzIHlvdSBuZWVkIHRvIHdyYXAgdGhlIHF1ZXJ5IHN0cmluZyBpbiBhIFxcXCJncWxcXFwiIHRhZz8gaHR0cDovL2RvY3MuYXBvbGxvc3RhY2suY29tL2Fwb2xsby1jbGllbnQvY29yZS5odG1sI2dxbFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KGRvYy5raW5kID09PSAnRG9jdW1lbnQnLCA1MSk7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGRvYy5kZWZpbml0aW9ucy5sZW5ndGggPD0gMSwgJ0ZyYWdtZW50IG11c3QgaGF2ZSBleGFjdGx5IG9uZSBkZWZpbml0aW9uLicpIDogZ2xvYmFscy5pbnZhcmlhbnQoZG9jLmRlZmluaXRpb25zLmxlbmd0aCA8PSAxLCA1Mik7XG4gICAgdmFyIGZyYWdtZW50RGVmID0gZG9jLmRlZmluaXRpb25zWzBdO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudERlZi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJywgJ011c3QgYmUgYSBmcmFnbWVudCBkZWZpbml0aW9uLicpIDogZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnREZWYua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicsIDUzKTtcbiAgICByZXR1cm4gZnJhZ21lbnREZWY7XG59XG5mdW5jdGlvbiBnZXRNYWluRGVmaW5pdGlvbihxdWVyeURvYykge1xuICAgIGNoZWNrRG9jdW1lbnQocXVlcnlEb2MpO1xuICAgIHZhciBmcmFnbWVudERlZmluaXRpb247XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHF1ZXJ5RG9jLmRlZmluaXRpb25zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgZGVmaW5pdGlvbiA9IF9hW19pXTtcbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nKSB7XG4gICAgICAgICAgICB2YXIgb3BlcmF0aW9uID0gZGVmaW5pdGlvbi5vcGVyYXRpb247XG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAncXVlcnknIHx8XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uID09PSAnbXV0YXRpb24nIHx8XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nICYmICFmcmFnbWVudERlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGZyYWdtZW50RGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWdtZW50RGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gZnJhZ21lbnREZWZpbml0aW9uO1xuICAgIH1cbiAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoJ0V4cGVjdGVkIGEgcGFyc2VkIEdyYXBoUUwgcXVlcnkgd2l0aCBhIHF1ZXJ5LCBtdXRhdGlvbiwgc3Vic2NyaXB0aW9uLCBvciBhIGZyYWdtZW50LicpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNTQpO1xufVxuZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlcyhkZWZpbml0aW9uKSB7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBkZWZzID0gZGVmaW5pdGlvbiAmJiBkZWZpbml0aW9uLnZhcmlhYmxlRGVmaW5pdGlvbnM7XG4gICAgaWYgKGRlZnMgJiYgZGVmcy5sZW5ndGgpIHtcbiAgICAgICAgZGVmcy5mb3JFYWNoKGZ1bmN0aW9uIChkZWYpIHtcbiAgICAgICAgICAgIGlmIChkZWYuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGRlZmF1bHRWYWx1ZXMsIGRlZi52YXJpYWJsZS5uYW1lLCBkZWYuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0VmFsdWVzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJJblBsYWNlKGFycmF5LCB0ZXN0LCBjb250ZXh0KSB7XG4gICAgdmFyIHRhcmdldCA9IDA7XG4gICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSwgaSkge1xuICAgICAgICBpZiAodGVzdC5jYWxsKHRoaXMsIGVsZW0sIGksIGFycmF5KSkge1xuICAgICAgICAgICAgYXJyYXlbdGFyZ2V0KytdID0gZWxlbTtcbiAgICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuICAgIGFycmF5Lmxlbmd0aCA9IHRhcmdldDtcbiAgICByZXR1cm4gYXJyYXk7XG59XG5cbnZhciBUWVBFTkFNRV9GSUVMRCA9IHtcbiAgICBraW5kOiAnRmllbGQnLFxuICAgIG5hbWU6IHtcbiAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICB2YWx1ZTogJ19fdHlwZW5hbWUnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gaXNFbXB0eShvcCwgZnJhZ21lbnRNYXApIHtcbiAgICByZXR1cm4gIW9wIHx8IG9wLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmV2ZXJ5KGZ1bmN0aW9uIChzZWxlY3Rpb24pIHsgcmV0dXJuIHNlbGVjdGlvbi5raW5kID09PSAnRnJhZ21lbnRTcHJlYWQnICYmXG4gICAgICAgIGlzRW1wdHkoZnJhZ21lbnRNYXBbc2VsZWN0aW9uLm5hbWUudmFsdWVdLCBmcmFnbWVudE1hcCk7IH0pO1xufVxuZnVuY3Rpb24gbnVsbElmRG9jSXNFbXB0eShkb2MpIHtcbiAgICByZXR1cm4gaXNFbXB0eShnZXRPcGVyYXRpb25EZWZpbml0aW9uKGRvYykgfHwgZ2V0RnJhZ21lbnREZWZpbml0aW9uKGRvYyksIGNyZWF0ZUZyYWdtZW50TWFwKGdldEZyYWdtZW50RGVmaW5pdGlvbnMoZG9jKSkpXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IGRvYztcbn1cbmZ1bmN0aW9uIGdldERpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiBkaXJlY3RpdmVNYXRjaGVyKGRpcmVjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoZGlyLm5hbWUgJiYgZGlyLm5hbWUgPT09IGRpcmVjdGl2ZS5uYW1lLnZhbHVlKSB8fFxuICAgICAgICAgICAgICAgIChkaXIudGVzdCAmJiBkaXIudGVzdChkaXJlY3RpdmUpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQoZGlyZWN0aXZlcywgZG9jKSB7XG4gICAgdmFyIHZhcmlhYmxlc0luVXNlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgdmFyaWFibGVzVG9SZW1vdmUgPSBbXTtcbiAgICB2YXIgZnJhZ21lbnRTcHJlYWRzSW5Vc2UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBmcmFnbWVudFNwcmVhZHNUb1JlbW92ZSA9IFtdO1xuICAgIHZhciBtb2RpZmllZERvYyA9IG51bGxJZkRvY0lzRW1wdHkoZ3JhcGhxbC52aXNpdChkb2MsIHtcbiAgICAgICAgVmFyaWFibGU6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSwgX2tleSwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5raW5kICE9PSAnVmFyaWFibGVEZWZpbml0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNJblVzZVtub2RlLm5hbWUudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBGaWVsZDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZXMgJiYgbm9kZS5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaG91bGRSZW1vdmVGaWVsZCA9IGRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbiAoZGlyZWN0aXZlKSB7IHJldHVybiBkaXJlY3RpdmUucmVtb3ZlOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFJlbW92ZUZpZWxkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRpcmVjdGl2ZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGlyZWN0aXZlcy5zb21lKGdldERpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlcykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZy52YWx1ZS5raW5kID09PSAnVmFyaWFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNUb1JlbW92ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcmcudmFsdWUubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRBbGxGcmFnbWVudFNwcmVhZHNGcm9tU2VsZWN0aW9uU2V0KG5vZGUuc2VsZWN0aW9uU2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U3ByZWFkc1RvUmVtb3ZlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZnJhZy5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRnJhZ21lbnRTcHJlYWQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50U3ByZWFkc0luVXNlW25vZGUubmFtZS52YWx1ZV0gPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRGlyZWN0aXZlOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0RGlyZWN0aXZlTWF0Y2hlcihkaXJlY3RpdmVzKShub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pKTtcbiAgICBpZiAobW9kaWZpZWREb2MgJiZcbiAgICAgICAgZmlsdGVySW5QbGFjZSh2YXJpYWJsZXNUb1JlbW92ZSwgZnVuY3Rpb24gKHYpIHsgcmV0dXJuICEhdi5uYW1lICYmICF2YXJpYWJsZXNJblVzZVt2Lm5hbWVdOyB9KS5sZW5ndGgpIHtcbiAgICAgICAgbW9kaWZpZWREb2MgPSByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQodmFyaWFibGVzVG9SZW1vdmUsIG1vZGlmaWVkRG9jKTtcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVkRG9jICYmXG4gICAgICAgIGZpbHRlckluUGxhY2UoZnJhZ21lbnRTcHJlYWRzVG9SZW1vdmUsIGZ1bmN0aW9uIChmcykgeyByZXR1cm4gISFmcy5uYW1lICYmICFmcmFnbWVudFNwcmVhZHNJblVzZVtmcy5uYW1lXTsgfSlcbiAgICAgICAgICAgIC5sZW5ndGgpIHtcbiAgICAgICAgbW9kaWZpZWREb2MgPSByZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudChmcmFnbWVudFNwcmVhZHNUb1JlbW92ZSwgbW9kaWZpZWREb2MpO1xuICAgIH1cbiAgICByZXR1cm4gbW9kaWZpZWREb2M7XG59XG52YXIgYWRkVHlwZW5hbWVUb0RvY3VtZW50ID0gT2JqZWN0LmFzc2lnbihmdW5jdGlvbiAoZG9jKSB7XG4gICAgcmV0dXJuIGdyYXBocWwudmlzaXQoZG9jLCB7XG4gICAgICAgIFNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlLCBfa2V5LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9ucyA9IG5vZGUuc2VsZWN0aW9ucztcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc2tpcCA9IHNlbGVjdGlvbnMuc29tZShmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXNGaWVsZChzZWxlY3Rpb24pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uLm5hbWUudmFsdWUgPT09ICdfX3R5cGVuYW1lJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5uYW1lLnZhbHVlLmxhc3RJbmRleE9mKCdfXycsIDApID09PSAwKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNraXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmllbGQoZmllbGQpICYmXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUudmFsdWUgPT09ICdleHBvcnQnOyB9KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbm9kZSksIHsgc2VsZWN0aW9uczogdHNsaWIuX19zcHJlYWRBcnJheSh0c2xpYi5fX3NwcmVhZEFycmF5KFtdLCBzZWxlY3Rpb25zLCB0cnVlKSwgW1RZUEVOQU1FX0ZJRUxEXSwgZmFsc2UpIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbn0sIHtcbiAgICBhZGRlZDogZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBmaWVsZCA9PT0gVFlQRU5BTUVfRklFTEQ7XG4gICAgfSxcbn0pO1xudmFyIGNvbm5lY3Rpb25SZW1vdmVDb25maWcgPSB7XG4gICAgdGVzdDogZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICB2YXIgd2lsbFJlbW92ZSA9IGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnY29ubmVjdGlvbic7XG4gICAgICAgIGlmICh3aWxsUmVtb3ZlKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGl2ZS5hcmd1bWVudHMgfHxcbiAgICAgICAgICAgICAgICAhZGlyZWN0aXZlLmFyZ3VtZW50cy5zb21lKGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGFyZy5uYW1lLnZhbHVlID09PSAna2V5JzsgfSkpIHtcbiAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oJ1JlbW92aW5nIGFuIEBjb25uZWN0aW9uIGRpcmVjdGl2ZSBldmVuIHRob3VnaCBpdCBkb2VzIG5vdCBoYXZlIGEga2V5LiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1lvdSBtYXkgd2FudCB0byB1c2UgdGhlIGtleSBwYXJhbWV0ZXIgdG8gc3BlY2lmeSBhIHN0b3JlIGtleS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lsbFJlbW92ZTtcbiAgICB9LFxufTtcbmZ1bmN0aW9uIHJlbW92ZUNvbm5lY3Rpb25EaXJlY3RpdmVGcm9tRG9jdW1lbnQoZG9jKSB7XG4gICAgcmV0dXJuIHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQoW2Nvbm5lY3Rpb25SZW1vdmVDb25maWddLCBjaGVja0RvY3VtZW50KGRvYykpO1xufVxuZnVuY3Rpb24gZ2V0QXJndW1lbnRNYXRjaGVyKGNvbmZpZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBhcmd1bWVudE1hdGNoZXIoYXJndW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZy5zb21lKGZ1bmN0aW9uIChhQ29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJndW1lbnQudmFsdWUgJiZcbiAgICAgICAgICAgICAgICBhcmd1bWVudC52YWx1ZS5raW5kID09PSAnVmFyaWFibGUnICYmXG4gICAgICAgICAgICAgICAgYXJndW1lbnQudmFsdWUubmFtZSAmJlxuICAgICAgICAgICAgICAgIChhQ29uZmlnLm5hbWUgPT09IGFyZ3VtZW50LnZhbHVlLm5hbWUudmFsdWUgfHxcbiAgICAgICAgICAgICAgICAgICAgKGFDb25maWcudGVzdCAmJiBhQ29uZmlnLnRlc3QoYXJndW1lbnQpKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQoY29uZmlnLCBkb2MpIHtcbiAgICB2YXIgYXJnTWF0Y2hlciA9IGdldEFyZ3VtZW50TWF0Y2hlcihjb25maWcpO1xuICAgIHJldHVybiBudWxsSWZEb2NJc0VtcHR5KGdyYXBocWwudmlzaXQoZG9jLCB7XG4gICAgICAgIE9wZXJhdGlvbkRlZmluaXRpb246IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbm9kZSksIHsgdmFyaWFibGVEZWZpbml0aW9uczogbm9kZS52YXJpYWJsZURlZmluaXRpb25zID8gbm9kZS52YXJpYWJsZURlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAodmFyRGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWNvbmZpZy5zb21lKGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGFyZy5uYW1lID09PSB2YXJEZWYudmFyaWFibGUubmFtZS52YWx1ZTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pIDogW10gfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBGaWVsZDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNob3VsZFJlbW92ZUZpZWxkID0gY29uZmlnLnNvbWUoZnVuY3Rpb24gKGFyZ0NvbmZpZykgeyByZXR1cm4gYXJnQ29uZmlnLnJlbW92ZTsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFJlbW92ZUZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdNYXRjaENvdW50XzEgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdNYXRjaGVyKGFyZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnTWF0Y2hDb3VudF8xICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ01hdGNoQ291bnRfMSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBBcmd1bWVudDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ01hdGNoZXIobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KSk7XG59XG5mdW5jdGlvbiByZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudChjb25maWcsIGRvYykge1xuICAgIGZ1bmN0aW9uIGVudGVyKG5vZGUpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zb21lKGZ1bmN0aW9uIChkZWYpIHsgcmV0dXJuIGRlZi5uYW1lID09PSBub2RlLm5hbWUudmFsdWU7IH0pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbElmRG9jSXNFbXB0eShncmFwaHFsLnZpc2l0KGRvYywge1xuICAgICAgICBGcmFnbWVudFNwcmVhZDogeyBlbnRlcjogZW50ZXIgfSxcbiAgICAgICAgRnJhZ21lbnREZWZpbml0aW9uOiB7IGVudGVyOiBlbnRlciB9LFxuICAgIH0pKTtcbn1cbmZ1bmN0aW9uIGdldEFsbEZyYWdtZW50U3ByZWFkc0Zyb21TZWxlY3Rpb25TZXQoc2VsZWN0aW9uU2V0KSB7XG4gICAgdmFyIGFsbEZyYWdtZW50cyA9IFtdO1xuICAgIHNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoKGlzRmllbGQoc2VsZWN0aW9uKSB8fCBpc0lubGluZUZyYWdtZW50KHNlbGVjdGlvbikpICYmXG4gICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICBnZXRBbGxGcmFnbWVudFNwcmVhZHNGcm9tU2VsZWN0aW9uU2V0KHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQpLmZvckVhY2goZnVuY3Rpb24gKGZyYWcpIHsgcmV0dXJuIGFsbEZyYWdtZW50cy5wdXNoKGZyYWcpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxlY3Rpb24ua2luZCA9PT0gJ0ZyYWdtZW50U3ByZWFkJykge1xuICAgICAgICAgICAgYWxsRnJhZ21lbnRzLnB1c2goc2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxGcmFnbWVudHM7XG59XG5mdW5jdGlvbiBidWlsZFF1ZXJ5RnJvbVNlbGVjdGlvblNldChkb2N1bWVudCkge1xuICAgIHZhciBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24oZG9jdW1lbnQpO1xuICAgIHZhciBkZWZpbml0aW9uT3BlcmF0aW9uID0gZGVmaW5pdGlvbi5vcGVyYXRpb247XG4gICAgaWYgKGRlZmluaXRpb25PcGVyYXRpb24gPT09ICdxdWVyeScpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH1cbiAgICB2YXIgbW9kaWZpZWREb2MgPSBncmFwaHFsLnZpc2l0KGRvY3VtZW50LCB7XG4gICAgICAgIE9wZXJhdGlvbkRlZmluaXRpb246IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbm9kZSksIHsgb3BlcmF0aW9uOiAncXVlcnknIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbW9kaWZpZWREb2M7XG59XG5mdW5jdGlvbiByZW1vdmVDbGllbnRTZXRzRnJvbURvY3VtZW50KGRvY3VtZW50KSB7XG4gICAgY2hlY2tEb2N1bWVudChkb2N1bWVudCk7XG4gICAgdmFyIG1vZGlmaWVkRG9jID0gcmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudChbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChkaXJlY3RpdmUpIHsgcmV0dXJuIGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnY2xpZW50JzsgfSxcbiAgICAgICAgICAgIHJlbW92ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLCBkb2N1bWVudCk7XG4gICAgaWYgKG1vZGlmaWVkRG9jKSB7XG4gICAgICAgIG1vZGlmaWVkRG9jID0gZ3JhcGhxbC52aXNpdChtb2RpZmllZERvYywge1xuICAgICAgICAgICAgRnJhZ21lbnREZWZpbml0aW9uOiB7XG4gICAgICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVHlwZW5hbWVPbmx5ID0gbm9kZS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5ldmVyeShmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzRmllbGQoc2VsZWN0aW9uKSAmJiBzZWxlY3Rpb24ubmFtZS52YWx1ZSA9PT0gJ19fdHlwZW5hbWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNUeXBlbmFtZU9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGlmaWVkRG9jO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gbWVyZ2VEZWVwKCkge1xuICAgIHZhciBzb3VyY2VzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgc291cmNlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VEZWVwQXJyYXkoc291cmNlcyk7XG59XG5mdW5jdGlvbiBtZXJnZURlZXBBcnJheShzb3VyY2VzKSB7XG4gICAgdmFyIHRhcmdldCA9IHNvdXJjZXNbMF0gfHwge307XG4gICAgdmFyIGNvdW50ID0gc291cmNlcy5sZW5ndGg7XG4gICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgICB2YXIgbWVyZ2VyID0gbmV3IERlZXBNZXJnZXIoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtZXJnZXIubWVyZ2UodGFyZ2V0LCBzb3VyY2VzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxudmFyIGRlZmF1bHRSZWNvbmNpbGVyID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzLm1lcmdlKHRhcmdldFtwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xufTtcbnZhciBEZWVwTWVyZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWVwTWVyZ2VyKHJlY29uY2lsZXIpIHtcbiAgICAgICAgaWYgKHJlY29uY2lsZXIgPT09IHZvaWQgMCkgeyByZWNvbmNpbGVyID0gZGVmYXVsdFJlY29uY2lsZXI7IH1cbiAgICAgICAgdGhpcy5yZWNvbmNpbGVyID0gcmVjb25jaWxlcjtcbiAgICAgICAgdGhpcy5pc09iamVjdCA9IGlzTm9uTnVsbE9iamVjdDtcbiAgICAgICAgdGhpcy5wYXN0Q29waWVzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBEZWVwTWVyZ2VyLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29udGV4dCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29udGV4dFtfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KHNvdXJjZSkgJiYgaXNOb25OdWxsT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlS2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBzb3VyY2VLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRWYWx1ZSA9IHRhcmdldFtzb3VyY2VLZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlW3NvdXJjZUtleV0gIT09IHRhcmdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gX3RoaXMucmVjb25jaWxlci5hcHBseShfdGhpcywgdHNsaWIuX19zcHJlYWRBcnJheShbdGFyZ2V0LCBzb3VyY2UsIHNvdXJjZUtleV0sIGNvbnRleHQsIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0YXJnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IF90aGlzLnNoYWxsb3dDb3B5Rm9yTWVyZ2UodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gX3RoaXMuc2hhbGxvd0NvcHlGb3JNZXJnZSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlS2V5XSA9IHNvdXJjZVtzb3VyY2VLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH07XG4gICAgRGVlcE1lcmdlci5wcm90b3R5cGUuc2hhbGxvd0NvcHlGb3JNZXJnZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhc3RDb3BpZXMuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0c2xpYi5fX2Fzc2lnbih7IF9fcHJvdG9fXzogT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKSB9LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGFzdENvcGllcy5hZGQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiBEZWVwTWVyZ2VyO1xufSgpKTtcblxuZnVuY3Rpb24gY29uY2F0UGFnaW5hdGlvbihrZXlBcmdzKSB7XG4gICAgaWYgKGtleUFyZ3MgPT09IHZvaWQgMCkgeyBrZXlBcmdzID0gZmFsc2U7IH1cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXlBcmdzOiBrZXlBcmdzLFxuICAgICAgICBtZXJnZTogZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZykge1xuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nID8gdHNsaWIuX19zcHJlYWRBcnJheSh0c2xpYi5fX3NwcmVhZEFycmF5KFtdLCBleGlzdGluZywgdHJ1ZSksIGluY29taW5nLCB0cnVlKSA6IGluY29taW5nO1xuICAgICAgICB9LFxuICAgIH07XG59XG5mdW5jdGlvbiBvZmZzZXRMaW1pdFBhZ2luYXRpb24oa2V5QXJncykge1xuICAgIGlmIChrZXlBcmdzID09PSB2b2lkIDApIHsga2V5QXJncyA9IGZhbHNlOyB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5QXJnczoga2V5QXJncyxcbiAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcsIF9hKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IF9hLmFyZ3M7XG4gICAgICAgICAgICB2YXIgbWVyZ2VkID0gZXhpc3RpbmcgPyBleGlzdGluZy5zbGljZSgwKSA6IFtdO1xuICAgICAgICAgICAgaWYgKGluY29taW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9iID0gYXJncy5vZmZzZXQsIG9mZnNldCA9IF9iID09PSB2b2lkIDAgPyAwIDogX2I7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5jb21pbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZFtvZmZzZXQgKyBpXSA9IGluY29taW5nW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXJnZWQucHVzaC5hcHBseShtZXJnZWQsIGluY29taW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9LFxuICAgIH07XG59XG5mdW5jdGlvbiByZWxheVN0eWxlUGFnaW5hdGlvbihrZXlBcmdzKSB7XG4gICAgaWYgKGtleUFyZ3MgPT09IHZvaWQgMCkgeyBrZXlBcmdzID0gZmFsc2U7IH1cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXlBcmdzOiBrZXlBcmdzLFxuICAgICAgICByZWFkOiBmdW5jdGlvbiAoZXhpc3RpbmcsIF9hKSB7XG4gICAgICAgICAgICB2YXIgY2FuUmVhZCA9IF9hLmNhblJlYWQsIHJlYWRGaWVsZCA9IF9hLnJlYWRGaWVsZDtcbiAgICAgICAgICAgIGlmICghZXhpc3RpbmcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgICAgICAgICAgdmFyIGVkZ2VzID0gW107XG4gICAgICAgICAgICB2YXIgZmlyc3RFZGdlQ3Vyc29yID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBsYXN0RWRnZUN1cnNvciA9IFwiXCI7XG4gICAgICAgICAgICBleGlzdGluZy5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uIChlZGdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhblJlYWQocmVhZEZpZWxkKFwibm9kZVwiLCBlZGdlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVkZ2UuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEVkZ2VDdXJzb3IgPSBmaXJzdEVkZ2VDdXJzb3IgfHwgZWRnZS5jdXJzb3IgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFZGdlQ3Vyc29yID0gZWRnZS5jdXJzb3IgfHwgbGFzdEVkZ2VDdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBfYiA9IGV4aXN0aW5nLnBhZ2VJbmZvIHx8IHt9LCBzdGFydEN1cnNvciA9IF9iLnN0YXJ0Q3Vyc29yLCBlbmRDdXJzb3IgPSBfYi5lbmRDdXJzb3I7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGdldEV4dHJhcyhleGlzdGluZykpLCB7IGVkZ2VzOiBlZGdlcywgcGFnZUluZm86IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBleGlzdGluZy5wYWdlSW5mbyksIHsgc3RhcnRDdXJzb3I6IHN0YXJ0Q3Vyc29yIHx8IGZpcnN0RWRnZUN1cnNvciwgZW5kQ3Vyc29yOiBlbmRDdXJzb3IgfHwgbGFzdEVkZ2VDdXJzb3IgfSkgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nLCBfYSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBfYS5hcmdzLCBpc1JlZmVyZW5jZSA9IF9hLmlzUmVmZXJlbmNlLCByZWFkRmllbGQgPSBfYS5yZWFkRmllbGQ7XG4gICAgICAgICAgICBpZiAoIWV4aXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmcgPSBtYWtlRW1wdHlEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWluY29taW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluY29taW5nRWRnZXMgPSBpbmNvbWluZy5lZGdlcyA/IGluY29taW5nLmVkZ2VzLm1hcChmdW5jdGlvbiAoZWRnZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc1JlZmVyZW5jZShlZGdlID0gdHNsaWIuX19hc3NpZ24oe30sIGVkZ2UpKSkge1xuICAgICAgICAgICAgICAgICAgICBlZGdlLmN1cnNvciA9IHJlYWRGaWVsZChcImN1cnNvclwiLCBlZGdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgICAgICAgICB9KSA6IFtdO1xuICAgICAgICAgICAgaWYgKGluY29taW5nLnBhZ2VJbmZvKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhZ2VJbmZvXzEgPSBpbmNvbWluZy5wYWdlSW5mbztcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRDdXJzb3IgPSBwYWdlSW5mb18xLnN0YXJ0Q3Vyc29yLCBlbmRDdXJzb3IgPSBwYWdlSW5mb18xLmVuZEN1cnNvcjtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RFZGdlID0gaW5jb21pbmdFZGdlc1swXTtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEVkZ2UgPSBpbmNvbWluZ0VkZ2VzW2luY29taW5nRWRnZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0RWRnZSAmJiBzdGFydEN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdEVkZ2UuY3Vyc29yID0gc3RhcnRDdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsYXN0RWRnZSAmJiBlbmRDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEVkZ2UuY3Vyc29yID0gZW5kQ3Vyc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RDdXJzb3IgPSBmaXJzdEVkZ2UgJiYgZmlyc3RFZGdlLmN1cnNvcjtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RDdXJzb3IgJiYgIXN0YXJ0Q3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY29taW5nID0gbWVyZ2VEZWVwKGluY29taW5nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0Q3Vyc29yOiBmaXJzdEN1cnNvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbGFzdEN1cnNvciA9IGxhc3RFZGdlICYmIGxhc3RFZGdlLmN1cnNvcjtcbiAgICAgICAgICAgICAgICBpZiAobGFzdEN1cnNvciAmJiAhZW5kQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY29taW5nID0gbWVyZ2VEZWVwKGluY29taW5nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEN1cnNvcjogbGFzdEN1cnNvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBleGlzdGluZy5lZGdlcztcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBbXTtcbiAgICAgICAgICAgIGlmIChhcmdzICYmIGFyZ3MuYWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwcmVmaXguZmluZEluZGV4KGZ1bmN0aW9uIChlZGdlKSB7IHJldHVybiBlZGdlLmN1cnNvciA9PT0gYXJncy5hZnRlcjsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4ID0gcHJlZml4LnNsaWNlKDAsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJncyAmJiBhcmdzLmJlZm9yZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHByZWZpeC5maW5kSW5kZXgoZnVuY3Rpb24gKGVkZ2UpIHsgcmV0dXJuIGVkZ2UuY3Vyc29yID09PSBhcmdzLmJlZm9yZTsgfSk7XG4gICAgICAgICAgICAgICAgc3VmZml4ID0gaW5kZXggPCAwID8gcHJlZml4IDogcHJlZml4LnNsaWNlKGluZGV4KTtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluY29taW5nLmVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZWRnZXMgPSB0c2xpYi5fX3NwcmVhZEFycmF5KHRzbGliLl9fc3ByZWFkQXJyYXkodHNsaWIuX19zcHJlYWRBcnJheShbXSwgcHJlZml4LCB0cnVlKSwgaW5jb21pbmdFZGdlcywgdHJ1ZSksIHN1ZmZpeCwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgcGFnZUluZm8gPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgaW5jb21pbmcucGFnZUluZm8pLCBleGlzdGluZy5wYWdlSW5mbyk7XG4gICAgICAgICAgICBpZiAoaW5jb21pbmcucGFnZUluZm8pIHtcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBpbmNvbWluZy5wYWdlSW5mbywgaGFzUHJldmlvdXNQYWdlID0gX2IuaGFzUHJldmlvdXNQYWdlLCBoYXNOZXh0UGFnZSA9IF9iLmhhc05leHRQYWdlLCBzdGFydEN1cnNvciA9IF9iLnN0YXJ0Q3Vyc29yLCBlbmRDdXJzb3IgPSBfYi5lbmRDdXJzb3IsIGV4dHJhcyA9IHRzbGliLl9fcmVzdChfYiwgW1wiaGFzUHJldmlvdXNQYWdlXCIsIFwiaGFzTmV4dFBhZ2VcIiwgXCJzdGFydEN1cnNvclwiLCBcImVuZEN1cnNvclwiXSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwYWdlSW5mbywgZXh0cmFzKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaGFzUHJldmlvdXNQYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUluZm8uaGFzUHJldmlvdXNQYWdlID0gaGFzUHJldmlvdXNQYWdlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBzdGFydEN1cnNvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvLnN0YXJ0Q3Vyc29yID0gc3RhcnRDdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc3VmZml4Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBoYXNOZXh0UGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvLmhhc05leHRQYWdlID0gaGFzTmV4dFBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGVuZEN1cnNvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvLmVuZEN1cnNvciA9IGVuZEN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGdldEV4dHJhcyhleGlzdGluZykpLCBnZXRFeHRyYXMoaW5jb21pbmcpKSwgeyBlZGdlczogZWRnZXMsIHBhZ2VJbmZvOiBwYWdlSW5mbyB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxudmFyIGdldEV4dHJhcyA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHRzbGliLl9fcmVzdChvYmosIG5vdEV4dHJhcyk7IH07XG52YXIgbm90RXh0cmFzID0gW1wiZWRnZXNcIiwgXCJwYWdlSW5mb1wiXTtcbmZ1bmN0aW9uIG1ha2VFbXB0eURhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWRnZXM6IFtdLFxuICAgICAgICBwYWdlSW5mbzoge1xuICAgICAgICAgICAgaGFzUHJldmlvdXNQYWdlOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc05leHRQYWdlOiB0cnVlLFxuICAgICAgICAgICAgc3RhcnRDdXJzb3I6IFwiXCIsXG4gICAgICAgICAgICBlbmRDdXJzb3I6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICAgIHJldHVybiBjbG9uZURlZXBIZWxwZXIodmFsdWUpO1xufVxuZnVuY3Rpb24gY2xvbmVEZWVwSGVscGVyKHZhbCwgc2Vlbikge1xuICAgIHN3aXRjaCAodG9TdHJpbmcuY2FsbCh2YWwpKSB7XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IEFycmF5XVwiOiB7XG4gICAgICAgICAgICBzZWVuID0gc2VlbiB8fCBuZXcgTWFwO1xuICAgICAgICAgICAgaWYgKHNlZW4uaGFzKHZhbCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlZW4uZ2V0KHZhbCk7XG4gICAgICAgICAgICB2YXIgY29weV8xID0gdmFsLnNsaWNlKDApO1xuICAgICAgICAgICAgc2Vlbi5zZXQodmFsLCBjb3B5XzEpO1xuICAgICAgICAgICAgY29weV8xLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgICAgICAgICAgY29weV8xW2ldID0gY2xvbmVEZWVwSGVscGVyKGNoaWxkLCBzZWVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHlfMTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiW29iamVjdCBPYmplY3RdXCI6IHtcbiAgICAgICAgICAgIHNlZW4gPSBzZWVuIHx8IG5ldyBNYXA7XG4gICAgICAgICAgICBpZiAoc2Vlbi5oYXModmFsKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5nZXQodmFsKTtcbiAgICAgICAgICAgIHZhciBjb3B5XzIgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpKTtcbiAgICAgICAgICAgIHNlZW4uc2V0KHZhbCwgY29weV8yKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY29weV8yW2tleV0gPSBjbG9uZURlZXBIZWxwZXIodmFsW2tleV0sIHNlZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY29weV8yO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVlcEZyZWV6ZSh2YWx1ZSkge1xuICAgIHZhciB3b3JrU2V0ID0gbmV3IFNldChbdmFsdWVdKTtcbiAgICB3b3JrU2V0LmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KG9iaikgJiYgc2hhbGxvd0ZyZWV6ZShvYmopID09PSBvYmopIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc05vbk51bGxPYmplY3Qob2JqW25hbWVdKSlcbiAgICAgICAgICAgICAgICAgICAgd29ya1NldC5hZGQob2JqW25hbWVdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gc2hhbGxvd0ZyZWV6ZShvYmopIHtcbiAgICBpZiAoX19ERVZfXyAmJiAhT2JqZWN0LmlzRnJvemVuKG9iaikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIE9iamVjdC5mcmVlemUob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBUeXBlRXJyb3IpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBtYXliZURlZXBGcmVlemUob2JqKSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgZGVlcEZyZWV6ZShvYmopO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5KG9ic2VydmVycywgbWV0aG9kLCBhcmd1bWVudCkge1xuICAgIHZhciBvYnNlcnZlcnNXaXRoTWV0aG9kID0gW107XG4gICAgb2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9icykgeyByZXR1cm4gb2JzW21ldGhvZF0gJiYgb2JzZXJ2ZXJzV2l0aE1ldGhvZC5wdXNoKG9icyk7IH0pO1xuICAgIG9ic2VydmVyc1dpdGhNZXRob2QuZm9yRWFjaChmdW5jdGlvbiAob2JzKSB7IHJldHVybiBvYnNbbWV0aG9kXShhcmd1bWVudCk7IH0pO1xufVxuXG5mdW5jdGlvbiBhc3luY01hcChvYnNlcnZhYmxlLCBtYXBGbiwgY2F0Y2hGbikge1xuICAgIHJldHVybiBuZXcgemVuT2JzZXJ2YWJsZVRzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBuZXh0ID0gb2JzZXJ2ZXIubmV4dCwgZXJyb3IgPSBvYnNlcnZlci5lcnJvciwgY29tcGxldGUgPSBvYnNlcnZlci5jb21wbGV0ZTtcbiAgICAgICAgdmFyIGFjdGl2ZUNhbGxiYWNrQ291bnQgPSAwO1xuICAgICAgICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBwcm9taXNlUXVldWUgPSB7XG4gICAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUoY2FsbGJhY2soKSk7IH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gbWFrZUNhbGxiYWNrKGV4YW1pbmVyLCBkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgaWYgKGV4YW1pbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgKythY3RpdmVDYWxsYmFja0NvdW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm90aCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGV4YW1pbmVyKGFyZyk7IH07XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VRdWV1ZSA9IHByb21pc2VRdWV1ZS50aGVuKGJvdGgsIGJvdGgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1hY3RpdmVDYWxsYmFja0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCAmJiBuZXh0LmNhbGwob2JzZXJ2ZXIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYWN0aXZlQ2FsbGJhY2tDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoY2F1Z2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciAmJiBlcnJvci5jYWxsKG9ic2VydmVyLCBjYXVnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGRlbGVnYXRlICYmIGRlbGVnYXRlLmNhbGwob2JzZXJ2ZXIsIGFyZyk7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhbmRsZXIgPSB7XG4gICAgICAgICAgICBuZXh0OiBtYWtlQ2FsbGJhY2sobWFwRm4sIG5leHQpLFxuICAgICAgICAgICAgZXJyb3I6IG1ha2VDYWxsYmFjayhjYXRjaEZuLCBlcnJvciksXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVDYWxsYmFja0NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlICYmIGNvbXBsZXRlLmNhbGwob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHZhciBzdWIgPSBvYnNlcnZhYmxlLnN1YnNjcmliZShoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1Yi51bnN1YnNjcmliZSgpOyB9O1xuICAgIH0pO1xufVxuXG52YXIgY2FuVXNlV2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmXG4gICAgZ2xvYmFscy5tYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBuYXZpZ2F0b3IucHJvZHVjdDsgfSkgIT09ICdSZWFjdE5hdGl2ZSc7XG52YXIgY2FuVXNlV2Vha1NldCA9IHR5cGVvZiBXZWFrU2V0ID09PSAnZnVuY3Rpb24nO1xudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgU3ltYm9sLmZvciA9PT0gJ2Z1bmN0aW9uJztcbnZhciBjYW5Vc2VBc3luY0l0ZXJhdG9yU3ltYm9sID0gY2FuVXNlU3ltYm9sICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yO1xudmFyIGNhblVzZURPTSA9IHR5cGVvZiBnbG9iYWxzLm1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50OyB9KSA9PT0gXCJmdW5jdGlvblwiO1xudmFyIHVzaW5nSlNET00gPSBnbG9iYWxzLm1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcImpzZG9tXCIpID49IDA7IH0pIHx8IGZhbHNlO1xudmFyIGNhblVzZUxheW91dEVmZmVjdCA9IGNhblVzZURPTSAmJiAhdXNpbmdKU0RPTTtcblxuZnVuY3Rpb24gZml4T2JzZXJ2YWJsZVN1YmNsYXNzKHN1YmNsYXNzKSB7XG4gICAgZnVuY3Rpb24gc2V0KGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViY2xhc3MsIGtleSwgeyB2YWx1ZTogemVuT2JzZXJ2YWJsZVRzLk9ic2VydmFibGUgfSk7XG4gICAgfVxuICAgIGlmIChjYW5Vc2VTeW1ib2wgJiYgU3ltYm9sLnNwZWNpZXMpIHtcbiAgICAgICAgc2V0KFN5bWJvbC5zcGVjaWVzKTtcbiAgICB9XG4gICAgc2V0KFwiQEBzcGVjaWVzXCIpO1xuICAgIHJldHVybiBzdWJjbGFzcztcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlTGlrZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xufVxudmFyIENvbmNhc3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhDb25jYXN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbmNhc3Qoc291cmNlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIF90aGlzLmFkZE9ic2VydmVyKG9ic2VydmVyKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yZW1vdmVPYnNlcnZlcihvYnNlcnZlcik7IH07XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgX3RoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIF90aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgX3RoaXMucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuaGFuZGxlcnMgPSB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXRlc3QgPSBbXCJuZXh0XCIsIHJlc3VsdF07XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm5vdGlmeShcIm5leHRcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZU9ic2VydmVyc1NhZmVseShfdGhpcy5vYnNlcnZlcnMsIFwibmV4dFwiLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YiA9IF90aGlzLnN1YjtcbiAgICAgICAgICAgICAgICBpZiAoc3ViICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1Yi51bnN1YnNjcmliZSgpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3ViID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF0ZXN0ID0gW1wiZXJyb3JcIiwgZXJyb3JdO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ub3RpZnkoXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkoX3RoaXMub2JzZXJ2ZXJzLCBcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBfdGhpcywgc3ViID0gX2Euc3ViLCBfYiA9IF9hLnNvdXJjZXMsIHNvdXJjZXMgPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYjtcbiAgICAgICAgICAgICAgICBpZiAoc3ViICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1YilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1Yi51bnN1YnNjcmliZSgpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN1YiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGF0ZXN0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF0ZXN0WzBdID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmUoX3RoaXMubGF0ZXN0WzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm5vdGlmeShcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZU9ic2VydmVyc1NhZmVseShfdGhpcy5vYnNlcnZlcnMsIFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNQcm9taXNlTGlrZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnRoZW4oZnVuY3Rpb24gKG9icykgeyByZXR1cm4gX3RoaXMuc3ViID0gb2JzLnN1YnNjcmliZShfdGhpcy5oYW5kbGVycyk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3ViID0gdmFsdWUuc3Vic2NyaWJlKF90aGlzLmhhbmRsZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm5leHRSZXN1bHRMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLmNhbmNlbCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICAgIF90aGlzLnJlamVjdChyZWFzb24pO1xuICAgICAgICAgICAgX3RoaXMuc291cmNlcyA9IFtdO1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlcnMuY29tcGxldGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoXykgeyB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHNvdXJjZXMgPSBbbmV3IHplbk9ic2VydmFibGVUcy5PYnNlcnZhYmxlKHNvdXJjZXMpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcm9taXNlTGlrZShzb3VyY2VzKSkge1xuICAgICAgICAgICAgc291cmNlcy50aGVuKGZ1bmN0aW9uIChpdGVyYWJsZSkgeyByZXR1cm4gX3RoaXMuc3RhcnQoaXRlcmFibGUpOyB9LCBfdGhpcy5oYW5kbGVycy5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFydChzb3VyY2VzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbmNhc3QucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKHNvdXJjZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViICE9PSB2b2lkIDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuc291cmNlcyA9IEFycmF5LmZyb20oc291cmNlcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuY29tcGxldGUoKTtcbiAgICB9O1xuICAgIENvbmNhc3QucHJvdG90eXBlLmRlbGl2ZXJMYXN0TWVzc2FnZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBpZiAodGhpcy5sYXRlc3QpIHtcbiAgICAgICAgICAgIHZhciBuZXh0T3JFcnJvciA9IHRoaXMubGF0ZXN0WzBdO1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IG9ic2VydmVyW25leHRPckVycm9yXTtcbiAgICAgICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QuY2FsbChvYnNlcnZlciwgdGhpcy5sYXRlc3RbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3ViID09PSBudWxsICYmXG4gICAgICAgICAgICAgICAgbmV4dE9yRXJyb3IgPT09IFwibmV4dFwiICYmXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25jYXN0LnByb3RvdHlwZS5hZGRPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzLmhhcyhvYnNlcnZlcikpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsaXZlckxhc3RNZXNzYWdlKG9ic2VydmVyKTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmFkZChvYnNlcnZlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbmNhc3QucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpICYmXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5zaXplIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25jYXN0LnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgdmFyIG5leHRSZXN1bHRMaXN0ZW5lcnMgPSB0aGlzLm5leHRSZXN1bHRMaXN0ZW5lcnM7XG4gICAgICAgIGlmIChuZXh0UmVzdWx0TGlzdGVuZXJzLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFJlc3VsdExpc3RlbmVycyA9IG5ldyBTZXQ7XG4gICAgICAgICAgICBuZXh0UmVzdWx0TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBsaXN0ZW5lcihtZXRob2QsIGFyZyk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25jYXN0LnByb3RvdHlwZS5iZWZvcmVOZXh0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZXh0UmVzdWx0TGlzdGVuZXJzLmFkZChmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhtZXRob2QsIGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIENvbmNhc3Q7XG59KHplbk9ic2VydmFibGVUcy5PYnNlcnZhYmxlKSk7XG5maXhPYnNlcnZhYmxlU3ViY2xhc3MoQ29uY2FzdCk7XG5cbmZ1bmN0aW9uIGlzTm9uRW1wdHlBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwO1xufVxuXG5mdW5jdGlvbiBpc0V4ZWN1dGlvblBhdGNoSW5jcmVtZW50YWxSZXN1bHQodmFsdWUpIHtcbiAgICByZXR1cm4gXCJpbmNyZW1lbnRhbFwiIGluIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KSB7XG4gICAgdmFyIGVycm9ycyA9IGdldEdyYXBoUUxFcnJvcnNGcm9tUmVzdWx0KHJlc3VsdCk7XG4gICAgcmV0dXJuIGlzTm9uRW1wdHlBcnJheShlcnJvcnMpO1xufVxuZnVuY3Rpb24gZ2V0R3JhcGhRTEVycm9yc0Zyb21SZXN1bHQocmVzdWx0KSB7XG4gICAgdmFyIGdyYXBoUUxFcnJvcnMgPSBpc05vbkVtcHR5QXJyYXkocmVzdWx0LmVycm9ycylcbiAgICAgICAgPyByZXN1bHQuZXJyb3JzLnNsaWNlKDApXG4gICAgICAgIDogW107XG4gICAgaWYgKGlzRXhlY3V0aW9uUGF0Y2hJbmNyZW1lbnRhbFJlc3VsdChyZXN1bHQpICYmXG4gICAgICAgIGlzTm9uRW1wdHlBcnJheShyZXN1bHQuaW5jcmVtZW50YWwpKSB7XG4gICAgICAgIHJlc3VsdC5pbmNyZW1lbnRhbC5mb3JFYWNoKGZ1bmN0aW9uIChpbmNyZW1lbnRhbFJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGluY3JlbWVudGFsUmVzdWx0LmVycm9ycykge1xuICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnMucHVzaC5hcHBseShncmFwaFFMRXJyb3JzLCBpbmNyZW1lbnRhbFJlc3VsdC5lcnJvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdyYXBoUUxFcnJvcnM7XG59XG5cbmZ1bmN0aW9uIGNvbXBhY3QoKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBvYmplY3RzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGlmICghb2JqKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBwcmVmaXhDb3VudHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBtYWtlVW5pcXVlSWQocHJlZml4KSB7XG4gICAgdmFyIGNvdW50ID0gcHJlZml4Q291bnRzLmdldChwcmVmaXgpIHx8IDE7XG4gICAgcHJlZml4Q291bnRzLnNldChwcmVmaXgsIGNvdW50ICsgMSk7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHByZWZpeCwgXCI6XCIpLmNvbmNhdChjb3VudCwgXCI6XCIpLmNvbmNhdChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUZvckRpc3BsYXkodmFsdWUpIHtcbiAgICB2YXIgdW5kZWZJZCA9IG1ha2VVbmlxdWVJZChcInN0cmluZ2lmeUZvckRpc3BsYXlcIik7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHZvaWQgMCA/IHVuZGVmSWQgOiB2YWx1ZTtcbiAgICB9KS5zcGxpdChKU09OLnN0cmluZ2lmeSh1bmRlZklkKSkuam9pbihcIjx1bmRlZmluZWQ+XCIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZU9wdGlvbnMoZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29tcGFjdChkZWZhdWx0cywgb3B0aW9ucywgb3B0aW9ucy52YXJpYWJsZXMgJiYge1xuICAgICAgICB2YXJpYWJsZXM6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCAoZGVmYXVsdHMgJiYgZGVmYXVsdHMudmFyaWFibGVzKSksIG9wdGlvbnMudmFyaWFibGVzKSxcbiAgICB9KTtcbn1cblxuZXhwb3J0cy5ERVYgPSBnbG9iYWxzLkRFVjtcbmV4cG9ydHMubWF5YmUgPSBnbG9iYWxzLm1heWJlO1xuZXhwb3J0cy5PYnNlcnZhYmxlID0gemVuT2JzZXJ2YWJsZVRzLk9ic2VydmFibGU7XG5leHBvcnRzLkNvbmNhc3QgPSBDb25jYXN0O1xuZXhwb3J0cy5EZWVwTWVyZ2VyID0gRGVlcE1lcmdlcjtcbmV4cG9ydHMuYWRkVHlwZW5hbWVUb0RvY3VtZW50ID0gYWRkVHlwZW5hbWVUb0RvY3VtZW50O1xuZXhwb3J0cy5hcmd1bWVudHNPYmplY3RGcm9tRmllbGQgPSBhcmd1bWVudHNPYmplY3RGcm9tRmllbGQ7XG5leHBvcnRzLmFzeW5jTWFwID0gYXN5bmNNYXA7XG5leHBvcnRzLmJ1aWxkUXVlcnlGcm9tU2VsZWN0aW9uU2V0ID0gYnVpbGRRdWVyeUZyb21TZWxlY3Rpb25TZXQ7XG5leHBvcnRzLmNhblVzZUFzeW5jSXRlcmF0b3JTeW1ib2wgPSBjYW5Vc2VBc3luY0l0ZXJhdG9yU3ltYm9sO1xuZXhwb3J0cy5jYW5Vc2VET00gPSBjYW5Vc2VET007XG5leHBvcnRzLmNhblVzZUxheW91dEVmZmVjdCA9IGNhblVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMuY2FuVXNlU3ltYm9sID0gY2FuVXNlU3ltYm9sO1xuZXhwb3J0cy5jYW5Vc2VXZWFrTWFwID0gY2FuVXNlV2Vha01hcDtcbmV4cG9ydHMuY2FuVXNlV2Vha1NldCA9IGNhblVzZVdlYWtTZXQ7XG5leHBvcnRzLmNoZWNrRG9jdW1lbnQgPSBjaGVja0RvY3VtZW50O1xuZXhwb3J0cy5jbG9uZURlZXAgPSBjbG9uZURlZXA7XG5leHBvcnRzLmNvbXBhY3QgPSBjb21wYWN0O1xuZXhwb3J0cy5jb25jYXRQYWdpbmF0aW9uID0gY29uY2F0UGFnaW5hdGlvbjtcbmV4cG9ydHMuY3JlYXRlRnJhZ21lbnRNYXAgPSBjcmVhdGVGcmFnbWVudE1hcDtcbmV4cG9ydHMuZml4T2JzZXJ2YWJsZVN1YmNsYXNzID0gZml4T2JzZXJ2YWJsZVN1YmNsYXNzO1xuZXhwb3J0cy5nZXREZWZhdWx0VmFsdWVzID0gZ2V0RGVmYXVsdFZhbHVlcztcbmV4cG9ydHMuZ2V0RGlyZWN0aXZlTmFtZXMgPSBnZXREaXJlY3RpdmVOYW1lcztcbmV4cG9ydHMuZ2V0RnJhZ21lbnREZWZpbml0aW9uID0gZ2V0RnJhZ21lbnREZWZpbml0aW9uO1xuZXhwb3J0cy5nZXRGcmFnbWVudERlZmluaXRpb25zID0gZ2V0RnJhZ21lbnREZWZpbml0aW9ucztcbmV4cG9ydHMuZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uID0gZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uO1xuZXhwb3J0cy5nZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQgPSBnZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQ7XG5leHBvcnRzLmdldEdyYXBoUUxFcnJvcnNGcm9tUmVzdWx0ID0gZ2V0R3JhcGhRTEVycm9yc0Zyb21SZXN1bHQ7XG5leHBvcnRzLmdldEluY2x1c2lvbkRpcmVjdGl2ZXMgPSBnZXRJbmNsdXNpb25EaXJlY3RpdmVzO1xuZXhwb3J0cy5nZXRNYWluRGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uO1xuZXhwb3J0cy5nZXRPcGVyYXRpb25EZWZpbml0aW9uID0gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbjtcbmV4cG9ydHMuZ2V0T3BlcmF0aW9uTmFtZSA9IGdldE9wZXJhdGlvbk5hbWU7XG5leHBvcnRzLmdldFF1ZXJ5RGVmaW5pdGlvbiA9IGdldFF1ZXJ5RGVmaW5pdGlvbjtcbmV4cG9ydHMuZ2V0U3RvcmVLZXlOYW1lID0gZ2V0U3RvcmVLZXlOYW1lO1xuZXhwb3J0cy5nZXRUeXBlbmFtZUZyb21SZXN1bHQgPSBnZXRUeXBlbmFtZUZyb21SZXN1bHQ7XG5leHBvcnRzLmdyYXBoUUxSZXN1bHRIYXNFcnJvciA9IGdyYXBoUUxSZXN1bHRIYXNFcnJvcjtcbmV4cG9ydHMuaGFzQWxsRGlyZWN0aXZlcyA9IGhhc0FsbERpcmVjdGl2ZXM7XG5leHBvcnRzLmhhc0FueURpcmVjdGl2ZXMgPSBoYXNBbnlEaXJlY3RpdmVzO1xuZXhwb3J0cy5oYXNDbGllbnRFeHBvcnRzID0gaGFzQ2xpZW50RXhwb3J0cztcbmV4cG9ydHMuaGFzRGlyZWN0aXZlcyA9IGhhc0RpcmVjdGl2ZXM7XG5leHBvcnRzLmlzRG9jdW1lbnROb2RlID0gaXNEb2N1bWVudE5vZGU7XG5leHBvcnRzLmlzRmllbGQgPSBpc0ZpZWxkO1xuZXhwb3J0cy5pc0lubGluZUZyYWdtZW50ID0gaXNJbmxpbmVGcmFnbWVudDtcbmV4cG9ydHMuaXNOb25FbXB0eUFycmF5ID0gaXNOb25FbXB0eUFycmF5O1xuZXhwb3J0cy5pc05vbk51bGxPYmplY3QgPSBpc05vbk51bGxPYmplY3Q7XG5leHBvcnRzLmlzUmVmZXJlbmNlID0gaXNSZWZlcmVuY2U7XG5leHBvcnRzLml0ZXJhdGVPYnNlcnZlcnNTYWZlbHkgPSBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5O1xuZXhwb3J0cy5tYWtlUmVmZXJlbmNlID0gbWFrZVJlZmVyZW5jZTtcbmV4cG9ydHMubWFrZVVuaXF1ZUlkID0gbWFrZVVuaXF1ZUlkO1xuZXhwb3J0cy5tYXliZURlZXBGcmVlemUgPSBtYXliZURlZXBGcmVlemU7XG5leHBvcnRzLm1lcmdlRGVlcCA9IG1lcmdlRGVlcDtcbmV4cG9ydHMubWVyZ2VEZWVwQXJyYXkgPSBtZXJnZURlZXBBcnJheTtcbmV4cG9ydHMubWVyZ2VPcHRpb25zID0gbWVyZ2VPcHRpb25zO1xuZXhwb3J0cy5vZmZzZXRMaW1pdFBhZ2luYXRpb24gPSBvZmZzZXRMaW1pdFBhZ2luYXRpb247XG5leHBvcnRzLnJlbGF5U3R5bGVQYWdpbmF0aW9uID0gcmVsYXlTdHlsZVBhZ2luYXRpb247XG5leHBvcnRzLnJlbW92ZUFyZ3VtZW50c0Zyb21Eb2N1bWVudCA9IHJlbW92ZUFyZ3VtZW50c0Zyb21Eb2N1bWVudDtcbmV4cG9ydHMucmVtb3ZlQ2xpZW50U2V0c0Zyb21Eb2N1bWVudCA9IHJlbW92ZUNsaWVudFNldHNGcm9tRG9jdW1lbnQ7XG5leHBvcnRzLnJlbW92ZUNvbm5lY3Rpb25EaXJlY3RpdmVGcm9tRG9jdW1lbnQgPSByZW1vdmVDb25uZWN0aW9uRGlyZWN0aXZlRnJvbURvY3VtZW50O1xuZXhwb3J0cy5yZW1vdmVEaXJlY3RpdmVzRnJvbURvY3VtZW50ID0gcmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudDtcbmV4cG9ydHMucmVtb3ZlRnJhZ21lbnRTcHJlYWRGcm9tRG9jdW1lbnQgPSByZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudDtcbmV4cG9ydHMucmVzdWx0S2V5TmFtZUZyb21GaWVsZCA9IHJlc3VsdEtleU5hbWVGcm9tRmllbGQ7XG5leHBvcnRzLnNob3VsZEluY2x1ZGUgPSBzaG91bGRJbmNsdWRlO1xuZXhwb3J0cy5zdG9yZUtleU5hbWVGcm9tRmllbGQgPSBzdG9yZUtleU5hbWVGcm9tRmllbGQ7XG5leHBvcnRzLnN0cmluZ2lmeUZvckRpc3BsYXkgPSBzdHJpbmdpZnlGb3JEaXNwbGF5O1xuZXhwb3J0cy52YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24gPSB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsaXRpZXMuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xuXG52YXIgZ2VuZXJpY01lc3NhZ2UgPSBcIkludmFyaWFudCBWaW9sYXRpb25cIjtcbnZhciBfYSA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiwgc2V0UHJvdG90eXBlT2YgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKG9iaiwgcHJvdG8pIHtcbiAgICBvYmouX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIG9iajtcbn0gOiBfYTtcbnZhciBJbnZhcmlhbnRFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoSW52YXJpYW50RXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW52YXJpYW50RXJyb3IobWVzc2FnZSkge1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gdm9pZCAwKSB7IG1lc3NhZ2UgPSBnZW5lcmljTWVzc2FnZTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0eXBlb2YgbWVzc2FnZSA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgPyBnZW5lcmljTWVzc2FnZSArIFwiOiBcIiArIG1lc3NhZ2UgKyBcIiAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hcG9sbG9ncmFwaHFsL2ludmFyaWFudC1wYWNrYWdlcylcIlxuICAgICAgICAgICAgOiBtZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5mcmFtZXNUb1BvcCA9IDE7XG4gICAgICAgIF90aGlzLm5hbWUgPSBnZW5lcmljTWVzc2FnZTtcbiAgICAgICAgc2V0UHJvdG90eXBlT2YoX3RoaXMsIEludmFyaWFudEVycm9yLnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEludmFyaWFudEVycm9yO1xufShFcnJvcikpO1xuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBJbnZhcmlhbnRFcnJvcihtZXNzYWdlKTtcbiAgICB9XG59XG52YXIgdmVyYm9zaXR5TGV2ZWxzID0gW1wiZGVidWdcIiwgXCJsb2dcIiwgXCJ3YXJuXCIsIFwiZXJyb3JcIiwgXCJzaWxlbnRcIl07XG52YXIgdmVyYm9zaXR5TGV2ZWwgPSB2ZXJib3NpdHlMZXZlbHMuaW5kZXhPZihcImxvZ1wiKTtcbmZ1bmN0aW9uIHdyYXBDb25zb2xlTWV0aG9kKG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodmVyYm9zaXR5TGV2ZWxzLmluZGV4T2YobmFtZSkgPj0gdmVyYm9zaXR5TGV2ZWwpIHtcbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gY29uc29sZS5sb2cgaWYgdGhpcyBob3N0IGVudmlyb25tZW50IGhhcHBlbnMgbm90IHRvIHByb3ZpZGVcbiAgICAgICAgICAgIC8vIGFsbCB0aGUgY29uc29sZS4qIG1ldGhvZHMgd2UgbmVlZC5cbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBjb25zb2xlW25hbWVdIHx8IGNvbnNvbGUubG9nO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZC5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbihmdW5jdGlvbiAoaW52YXJpYW50KSB7XG4gICAgaW52YXJpYW50LmRlYnVnID0gd3JhcENvbnNvbGVNZXRob2QoXCJkZWJ1Z1wiKTtcbiAgICBpbnZhcmlhbnQubG9nID0gd3JhcENvbnNvbGVNZXRob2QoXCJsb2dcIik7XG4gICAgaW52YXJpYW50Lndhcm4gPSB3cmFwQ29uc29sZU1ldGhvZChcIndhcm5cIik7XG4gICAgaW52YXJpYW50LmVycm9yID0gd3JhcENvbnNvbGVNZXRob2QoXCJlcnJvclwiKTtcbn0pKGludmFyaWFudCB8fCAoaW52YXJpYW50ID0ge30pKTtcbmZ1bmN0aW9uIHNldFZlcmJvc2l0eShsZXZlbCkge1xuICAgIHZhciBvbGQgPSB2ZXJib3NpdHlMZXZlbHNbdmVyYm9zaXR5TGV2ZWxdO1xuICAgIHZlcmJvc2l0eUxldmVsID0gTWF0aC5tYXgoMCwgdmVyYm9zaXR5TGV2ZWxzLmluZGV4T2YobGV2ZWwpKTtcbiAgICByZXR1cm4gb2xkO1xufVxudmFyIGludmFyaWFudCQxID0gaW52YXJpYW50O1xuXG5leHBvcnRzLkludmFyaWFudEVycm9yID0gSW52YXJpYW50RXJyb3I7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGludmFyaWFudCQxO1xuZXhwb3J0cy5pbnZhcmlhbnQgPSBpbnZhcmlhbnQ7XG5leHBvcnRzLnNldFZlcmJvc2l0eSA9IHNldFZlcmJvc2l0eTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludmFyaWFudC5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIG1heWJlKHRodW5rKSB7XG4gIHRyeSB7IHJldHVybiB0aHVuaygpIH0gY2F0Y2ggKF8pIHt9XG59XG5cbnZhciBzYWZlR2xvYmFsID0gKFxuICBtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIGdsb2JhbFRoaXMgfSkgfHxcbiAgbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiB3aW5kb3cgfSkgfHxcbiAgbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiBzZWxmIH0pIHx8XG4gIG1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gZ2xvYmFsIH0pIHx8XG4gIC8vIFdlIGRvbid0IGV4cGVjdCB0aGUgRnVuY3Rpb24gY29uc3RydWN0b3IgZXZlciB0byBiZSBpbnZva2VkIGF0IHJ1bnRpbWUsIGFzXG4gIC8vIGxvbmcgYXMgYXQgbGVhc3Qgb25lIG9mIGdsb2JhbFRoaXMsIHdpbmRvdywgc2VsZiwgb3IgZ2xvYmFsIGlzIGRlZmluZWQsIHNvXG4gIC8vIHdlIGFyZSB1bmRlciBubyBvYmxpZ2F0aW9uIHRvIG1ha2UgaXQgZWFzeSBmb3Igc3RhdGljIGFuYWx5c2lzIHRvb2xzIHRvXG4gIC8vIGRldGVjdCBzeW50YWN0aWMgdXNhZ2Ugb2YgdGhlIEZ1bmN0aW9uIGNvbnN0cnVjdG9yLiBJZiB5b3UgdGhpbmsgeW91IGNhblxuICAvLyBpbXByb3ZlIHlvdXIgc3RhdGljIGFuYWx5c2lzIHRvIGRldGVjdCB0aGlzIG9iZnVzY2F0aW9uLCB0aGluayBhZ2Fpbi4gVGhpc1xuICAvLyBpcyBhbiBhcm1zIHJhY2UgeW91IGNhbm5vdCB3aW4sIGF0IGxlYXN0IG5vdCBpbiBKYXZhU2NyaXB0LlxuICBtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIG1heWJlLmNvbnN0cnVjdG9yKFwicmV0dXJuIHRoaXNcIikoKSB9KVxuKTtcblxudmFyIG5lZWRUb1JlbW92ZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiBpbnN0YWxsKCkge1xuICBpZiAoc2FmZUdsb2JhbCAmJlxuICAgICAgIW1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfSkgJiZcbiAgICAgICFtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIHByb2Nlc3MgfSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2FmZUdsb2JhbCwgXCJwcm9jZXNzXCIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGVudjoge1xuICAgICAgICAgIC8vIFRoaXMgZGVmYXVsdCBuZWVkcyB0byBiZSBcInByb2R1Y3Rpb25cIiBpbnN0ZWFkIG9mIFwiZGV2ZWxvcG1lbnRcIiwgdG9cbiAgICAgICAgICAvLyBhdm9pZCB0aGUgcHJvYmxlbSBodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL3B1bGwvMjg5NFxuICAgICAgICAgIC8vIHdpbGwgZXZlbnR1YWxseSBzb2x2ZSwgb25jZSBtZXJnZWQgYW5kIHJlbGVhc2VkLlxuICAgICAgICAgIE5PREVfRU5WOiBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBMZXQgYW55b25lIGVsc2UgY2hhbmdlIGdsb2JhbC5wcm9jZXNzIGFzIHRoZXkgc2VlIGZpdCwgYnV0IGhpZGUgaXQgZnJvbVxuICAgICAgLy8gT2JqZWN0LmtleXMoZ2xvYmFsKSBlbnVtZXJhdGlvbi5cbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSk7XG4gICAgbmVlZFRvUmVtb3ZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vLyBDYWxsIGluc3RhbGwoKSBhdCBsZWFzdCBvbmNlLCB3aGVuIHRoaXMgbW9kdWxlIGlzIGltcG9ydGVkLlxuaW5zdGFsbCgpO1xuXG5mdW5jdGlvbiByZW1vdmUoKSB7XG4gIGlmIChuZWVkVG9SZW1vdmUpIHtcbiAgICBkZWxldGUgc2FmZUdsb2JhbC5wcm9jZXNzO1xuICAgIG5lZWRUb1JlbW92ZSA9IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGluc3RhbGw7XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uY2pzLm1hcFxuIiwiZXhwb3J0cy5PYnNlcnZhYmxlID0gcmVxdWlyZShcInplbi1vYnNlcnZhYmxlL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlcG9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVwb3NpdG9yaWVzL1JlcG9MaXN0JztcclxuaW1wb3J0IHtGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIGdxbCwgY3JlYXRlSHR0cExpbmsgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHQnO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2Uoe3Bpbm5hYmxlSXRlbXN9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+ICBcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+R2l0SHViIFJlcG9zaXRvcnkgd2l0aCBHcmFwaFFsPC90aXRsZT5cclxuICAgICAgPG1ldGEgXHJcbiAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgIGNvbnRlbnQ9J0NoZWNrIG15IGdpdGh1YiByZXBvc2l0b3J5IHdpdGggZ3JhcGhxbCBhcGkgaW50ZWdyYXRpb24nXHJcbiAgICAgIC8+ICBcclxuICAgIDwvSGVhZD4gICBcclxuICAgIDxSZXBvTGlzdCByZXBvcz17cGlubmFibGVJdGVtc30vPlxyXG4gICAgPC9GcmFnbWVudD4gIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuXHJcbiAgY29uc3QgaHR0cExpbmsgPSBjcmVhdGVIdHRwTGluayh7XHJcbiAgICB1cmk6ICdodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWwnLFxyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXywgeyBoZWFkZXJzIH0pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5HSVRIVUJfQUNDRVNTX1RPS0VOfWAsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIGxpbms6IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG4gIH0pO1xyXG5cclxuY29uc3QgeyBkYXRhIH0gPSAgYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBncWxgXHJcbiAgICB7XHJcbiAgICAgIHVzZXIobG9naW46IFwicmFuamFubWFuaXNoOTVcIikge1xyXG4gICAgICAgIHBpbm5hYmxlSXRlbXMoZmlyc3Q6IDEzKSB7XHJcbiAgICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIC4uLiBvbiBSZXBvc2l0b3J5IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9ICBcclxuICAgIGBcclxuICB9KVxyXG4gY29uc3Qge3VzZXJ9ID0gZGF0YTtcclxuIGNvbnN0IHBpbm5hYmxlSXRlbXMgPSB1c2VyLnBpbm5hYmxlSXRlbXMuZWRnZXMubWFwKCh7bm9kZX0pPT4gbm9kZSk7XHJcbiAgcmV0dXJue1xyXG4gICAgcHJvcHM6e1xyXG4gICAgICBwaW5uYWJsZUl0ZW1zXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd3J5L2NvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdyeS9lcXVhbGl0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd3J5L3RyaWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3B0aW1pc21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN5bWJvbC1vYnNlcnZhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRzbGliXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInplbi1vYnNlcnZhYmxlL2luZGV4LmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=