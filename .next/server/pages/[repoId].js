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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[repoId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/repositories/RepoDetail.js":
/*!***********************************************!*\
  !*** ./components/repositories/RepoDetail.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RepoDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RepoDetail.module.css */ "./components/repositories/RepoDetail.module.css");
/* harmony import */ var _RepoDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RepoDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ranja\\Downloads\\autify-assessment\\components\\repositories\\RepoDetail.js";


function RepoDetail(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _RepoDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("url", {
      children: props.url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RepoDetail);

/***/ }),

/***/ "./components/repositories/RepoDetail.module.css":
/*!*******************************************************!*\
  !*** ./components/repositories/RepoDetail.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail": "RepoDetail_detail__1YUrk"
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

/***/ "./pages/[repoId]/index.js":
/*!*********************************!*\
  !*** ./pages/[repoId]/index.js ***!
  \*********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_repositories_RepoDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/repositories/RepoDetail */ "./components/repositories/RepoDetail.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/link/context */ "./node_modules/@apollo/client/link/context/context.cjs");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\ranja\\Downloads\\autify-assessment\\pages\\[repoId]\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function RepoDetails(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props.repoData.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: props.repoData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_repositories_RepoDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: props.repoData.image,
      name: props.repoData.name,
      url: props.repoData.url,
      description: props.repoData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

async function getStaticPaths() {
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
  console.log(data);
  const {
    user
  } = data;
  const repos = user.pinnableItems.edges.map(({
    node
  }) => node);
  return {
    fallback: 'blocking',
    paths: repos.map(repo => ({
      params: {
        repoId: repo.id.toString()
      }
    }))
  };
}
async function getStaticProps(context) {
  //fetch data for a single meetup
  const repoId = context.params.repoId;
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
  }); //  console.log(data);

  const {
    user
  } = data;
  const repos = user.pinnableItems.edges.map(({
    node
  }) => node);
  const selectedRepo = repos.find(repo => repo.id === repoId);
  return {
    props: {
      repoData: {
        id: selectedRepo.id.toString(),
        name: selectedRepo.name,
        url: selectedRepo.url,
        image: "https://pngimg.com/uploads/github/github_PNG28.png",
        description: selectedRepo.description
      }
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (RepoDetails);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZXBvc2l0b3JpZXMvUmVwb0RldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9SZXBvRGV0YWlsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2NhY2hlL2NhY2hlLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvY29yZS9jb3JlLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvZXJyb3JzL2Vycm9ycy5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvY29udGV4dC9jb250ZXh0LmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay9jb3JlL2NvcmUuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL2h0dHAvaHR0cC5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvdXRpbHMvdXRpbHMuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9tYWluLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvY29udGV4dC9jb250ZXh0LmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvaG9va3MvaG9va3MuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9wYXJzZXIvcGFyc2VyLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvcmVhY3QuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC91dGlsaXRpZXMvZ2xvYmFscy9nbG9iYWxzLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzL3V0aWxpdGllcy5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzLWludmFyaWFudC9saWIvaW52YXJpYW50LmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtaW52YXJpYW50L3Byb2Nlc3MvbWFpbi5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plbi1vYnNlcnZhYmxlLXRzL2luZGV4LmNqcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9bcmVwb0lkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd3J5L2NvbnRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd3J5L2VxdWFsaXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdyeS90cmllXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib3B0aW1pc21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN5bWJvbC1vYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHNsaWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6ZW4tb2JzZXJ2YWJsZS9pbmRleC5qc1wiIl0sIm5hbWVzIjpbIlJlcG9EZXRhaWwiLCJwcm9wcyIsImNsYXNzZXMiLCJkZXRhaWwiLCJpbWFnZSIsInRpdGxlIiwibmFtZSIsInVybCIsImRlc2NyaXB0aW9uIiwiUmVwb0RldGFpbHMiLCJyZXBvRGF0YSIsImdldFN0YXRpY1BhdGhzIiwiaHR0cExpbmsiLCJjcmVhdGVIdHRwTGluayIsInVyaSIsImF1dGhMaW5rIiwic2V0Q29udGV4dCIsIl8iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfQUNDRVNTX1RPS0VOIiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwibGluayIsImNvbmNhdCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImRhdGEiLCJxdWVyeSIsImdxbCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwicmVwb3MiLCJwaW5uYWJsZUl0ZW1zIiwiZWRnZXMiLCJtYXAiLCJub2RlIiwiZmFsbGJhY2siLCJwYXRocyIsInJlcG8iLCJwYXJhbXMiLCJyZXBvSWQiLCJpZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0Iiwic2VsZWN0ZWRSZXBvIiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsb0JBQW9CO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlQQUF5UDtBQUN6UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLCtCQUErQixtQ0FBbUMsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDBDQUEwQyxFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QseUJBQXlCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxD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QUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw4QkFBOEIsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsOEJBQThCLEVBQUU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LFFBQWhCLEVBREU7QUFFTnhDLFlBQUksRUFBRTJDLFlBQVksQ0FBQzNDLElBRmI7QUFHTkMsV0FBRyxFQUFFMEMsWUFBWSxDQUFDMUMsR0FIWjtBQUlOSCxhQUFLLEVBQUUsb0RBSkQ7QUFLTkksbUJBQVcsRUFBRXlDLFlBQVksQ0FBQ3pDO0FBTHBCO0FBRFI7QUFESCxHQUFQO0FBV0g7QUFFY0MsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUN4SUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoicGFnZXMvW3JlcG9JZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1tyZXBvSWRdL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9SZXBvRGV0YWlsLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gUmVwb0RldGFpbChwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfS8+XHJcbiAgICAgICAgPGgxPntwcm9wcy5uYW1lfTwvaDE+XHJcbiAgICAgICAgPHVybD57cHJvcHMudXJsfTwvdXJsPlxyXG4gICAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBvRGV0YWlsOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIlJlcG9EZXRhaWxfZGV0YWlsX18xWVVya1wiXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIG9wdGltaXNtID0gcmVxdWlyZSgnb3B0aW1pc20nKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMnKTtcbnZhciBlcXVhbGl0eSA9IHJlcXVpcmUoJ0B3cnkvZXF1YWxpdHknKTtcbnZhciB0cmllID0gcmVxdWlyZSgnQHdyeS90cmllJyk7XG52YXIgZ3JhcGhxbCA9IHJlcXVpcmUoJ2dyYXBocWwnKTtcbnZhciBjb250ZXh0ID0gcmVxdWlyZSgnQHdyeS9jb250ZXh0Jyk7XG5cbnZhciBBcG9sbG9DYWNoZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBvbGxvQ2FjaGUoKSB7XG4gICAgICAgIHRoaXMuZ2V0RnJhZ21lbnREb2MgPSBvcHRpbWlzbS53cmFwKHV0aWxpdGllcy5nZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQpO1xuICAgIH1cbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUuYmF0Y2ggPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgb3B0aW1pc3RpY0lkID0gdHlwZW9mIG9wdGlvbnMub3B0aW1pc3RpYyA9PT0gXCJzdHJpbmdcIiA/IG9wdGlvbnMub3B0aW1pc3RpYyA6XG4gICAgICAgICAgICBvcHRpb25zLm9wdGltaXN0aWMgPT09IGZhbHNlID8gbnVsbCA6IHZvaWQgMDtcbiAgICAgICAgdmFyIHVwZGF0ZVJlc3VsdDtcbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkgeyByZXR1cm4gdXBkYXRlUmVzdWx0ID0gb3B0aW9ucy51cGRhdGUoX3RoaXMpOyB9LCBvcHRpbWlzdGljSWQpO1xuICAgICAgICByZXR1cm4gdXBkYXRlUmVzdWx0O1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnJlY29yZE9wdGltaXN0aWNUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uICh0cmFuc2FjdGlvbiwgb3B0aW1pc3RpY0lkKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBvcHRpbWlzdGljSWQpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnRyYW5zZm9ybURvY3VtZW50ID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS50cmFuc2Zvcm1Gb3JMaW5rID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLmdjID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUubW9kaWZ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnJlYWRRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9ICEhb3B0aW9ucy5vcHRpbWlzdGljOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHJvb3RJZDogb3B0aW9ucy5pZCB8fCAnUk9PVF9RVUVSWScsIG9wdGltaXN0aWM6IG9wdGltaXN0aWMgfSkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnJlYWRGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9ICEhb3B0aW9ucy5vcHRpbWlzdGljOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHF1ZXJ5OiB0aGlzLmdldEZyYWdtZW50RG9jKG9wdGlvbnMuZnJhZ21lbnQsIG9wdGlvbnMuZnJhZ21lbnROYW1lKSwgcm9vdElkOiBvcHRpb25zLmlkLCBvcHRpbWlzdGljOiBvcHRpbWlzdGljIH0pKTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS53cml0ZVF1ZXJ5ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBpZCA9IF9hLmlkLCBkYXRhID0gX2EuZGF0YSwgb3B0aW9ucyA9IHRzbGliLl9fcmVzdChfYSwgW1wiaWRcIiwgXCJkYXRhXCJdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUoT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgICAgICBkYXRhSWQ6IGlkIHx8ICdST09UX1FVRVJZJyxcbiAgICAgICAgICAgIHJlc3VsdDogZGF0YSxcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLndyaXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGlkID0gX2EuaWQsIGRhdGEgPSBfYS5kYXRhLCBmcmFnbWVudCA9IF9hLmZyYWdtZW50LCBmcmFnbWVudE5hbWUgPSBfYS5mcmFnbWVudE5hbWUsIG9wdGlvbnMgPSB0c2xpYi5fX3Jlc3QoX2EsIFtcImlkXCIsIFwiZGF0YVwiLCBcImZyYWdtZW50XCIsIFwiZnJhZ21lbnROYW1lXCJdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUoT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgICAgICBxdWVyeTogdGhpcy5nZXRGcmFnbWVudERvYyhmcmFnbWVudCwgZnJhZ21lbnROYW1lKSxcbiAgICAgICAgICAgIGRhdGFJZDogaWQsXG4gICAgICAgICAgICByZXN1bHQ6IGRhdGEsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS51cGRhdGVRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zLCB1cGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmF0Y2goe1xuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjYWNoZS5yZWFkUXVlcnkob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB1cGRhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSB2b2lkIDAgfHwgZGF0YSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGRhdGE6IGRhdGEgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUudXBkYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAob3B0aW9ucywgdXBkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhdGNoKHtcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY2FjaGUucmVhZEZyYWdtZW50KG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdXBkYXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gdm9pZCAwIHx8IGRhdGEgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICBjYWNoZS53cml0ZUZyYWdtZW50KHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBkYXRhOiBkYXRhIH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFwb2xsb0NhY2hlO1xufSgpKTtcblxuZXhwb3J0cy5DYWNoZSA9IHZvaWQgMDtcbihmdW5jdGlvbiAoQ2FjaGUpIHtcbn0pKGV4cG9ydHMuQ2FjaGUgfHwgKGV4cG9ydHMuQ2FjaGUgPSB7fSkpO1xuXG52YXIgTWlzc2luZ0ZpZWxkRXJyb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhNaXNzaW5nRmllbGRFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNaXNzaW5nRmllbGRFcnJvcihtZXNzYWdlLCBwYXRoLCBxdWVyeSwgdmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIF90aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICBfdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICBfdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KF90aGlzLnBhdGgpKSB7XG4gICAgICAgICAgICBfdGhpcy5taXNzaW5nID0gX3RoaXMubWVzc2FnZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBfdGhpcy5wYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubWlzc2luZyA9IChfYSA9IHt9LCBfYVtfdGhpcy5wYXRoW2ldXSA9IF90aGlzLm1pc3NpbmcsIF9hKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLm1pc3NpbmcgPSBfdGhpcy5wYXRoO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLl9fcHJvdG9fXyA9IE1pc3NpbmdGaWVsZEVycm9yLnByb3RvdHlwZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gTWlzc2luZ0ZpZWxkRXJyb3I7XG59KEVycm9yKSk7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaXNOdWxsaXNoKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDA7XG59XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdChfYSwgY29udGV4dCkge1xuICAgIHZhciBfX3R5cGVuYW1lID0gX2EuX190eXBlbmFtZSwgaWQgPSBfYS5pZCwgX2lkID0gX2EuX2lkO1xuICAgIGlmICh0eXBlb2YgX190eXBlbmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dC5rZXlPYmplY3QgPVxuICAgICAgICAgICAgICAgICFpc051bGxpc2goaWQpID8geyBpZDogaWQgfSA6XG4gICAgICAgICAgICAgICAgICAgICFpc051bGxpc2goX2lkKSA/IHsgX2lkOiBfaWQgfSA6XG4gICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTnVsbGlzaChpZCkgJiYgIWlzTnVsbGlzaChfaWQpKSB7XG4gICAgICAgICAgICBpZCA9IF9pZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTnVsbGlzaChpZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfX3R5cGVuYW1lLCBcIjpcIikuY29uY2F0KCh0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIpID8gaWQgOiBKU09OLnN0cmluZ2lmeShpZCkpO1xuICAgICAgICB9XG4gICAgfVxufVxudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gICAgZGF0YUlkRnJvbU9iamVjdDogZGVmYXVsdERhdGFJZEZyb21PYmplY3QsXG4gICAgYWRkVHlwZW5hbWU6IHRydWUsXG4gICAgcmVzdWx0Q2FjaGluZzogdHJ1ZSxcbiAgICBjYW5vbml6ZVJlc3VsdHM6IGZhbHNlLFxufTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvbmZpZyhjb25maWcpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmNvbXBhY3QoZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbn1cbmZ1bmN0aW9uIHNob3VsZENhbm9uaXplUmVzdWx0cyhjb25maWcpIHtcbiAgICB2YXIgdmFsdWUgPSBjb25maWcuY2Fub25pemVSZXN1bHRzO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdm9pZCAwID8gZGVmYXVsdENvbmZpZy5jYW5vbml6ZVJlc3VsdHMgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldFR5cGVuYW1lRnJvbVN0b3JlT2JqZWN0KHN0b3JlLCBvYmplY3RPclJlZmVyZW5jZSkge1xuICAgIHJldHVybiB1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpXG4gICAgICAgID8gc3RvcmUuZ2V0KG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmLCBcIl9fdHlwZW5hbWVcIilcbiAgICAgICAgOiBvYmplY3RPclJlZmVyZW5jZSAmJiBvYmplY3RPclJlZmVyZW5jZS5fX3R5cGVuYW1lO1xufVxudmFyIFR5cGVPckZpZWxkTmFtZVJlZ0V4cCA9IC9eW19hLXpdW18wLTlhLXpdKi9pO1xuZnVuY3Rpb24gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSkge1xuICAgIHZhciBtYXRjaCA9IHN0b3JlRmllbGROYW1lLm1hdGNoKFR5cGVPckZpZWxkTmFtZVJlZ0V4cCk7XG4gICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMF0gOiBzdG9yZUZpZWxkTmFtZTtcbn1cbmZ1bmN0aW9uIHNlbGVjdGlvblNldE1hdGNoZXNSZXN1bHQoc2VsZWN0aW9uU2V0LCByZXN1bHQsIHZhcmlhYmxlcykge1xuICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIGlzQXJyYXkocmVzdWx0KVxuICAgICAgICAgICAgPyByZXN1bHQuZXZlcnkoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIHNlbGVjdGlvblNldE1hdGNoZXNSZXN1bHQoc2VsZWN0aW9uU2V0LCBpdGVtLCB2YXJpYWJsZXMpOyB9KVxuICAgICAgICAgICAgOiBzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5ldmVyeShmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzRmllbGQoZmllbGQpICYmIHV0aWxpdGllcy5zaG91bGRJbmNsdWRlKGZpZWxkLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSB1dGlsaXRpZXMucmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYXNPd24uY2FsbChyZXN1bHQsIGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICghZmllbGQuc2VsZWN0aW9uU2V0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0TWF0Y2hlc1Jlc3VsdChmaWVsZC5zZWxlY3Rpb25TZXQsIHJlc3VsdFtrZXldLCB2YXJpYWJsZXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkgJiZcbiAgICAgICAgIXV0aWxpdGllcy5pc1JlZmVyZW5jZSh2YWx1ZSkgJiZcbiAgICAgICAgIWlzQXJyYXkodmFsdWUpO1xufVxuZnVuY3Rpb24gbWFrZVByb2Nlc3NlZEZpZWxkc01lcmdlcigpIHtcbiAgICByZXR1cm4gbmV3IHV0aWxpdGllcy5EZWVwTWVyZ2VyO1xufVxuZnVuY3Rpb24gZXh0cmFjdEZyYWdtZW50Q29udGV4dChkb2N1bWVudCwgZnJhZ21lbnRzKSB7XG4gICAgdmFyIGZyYWdtZW50TWFwID0gdXRpbGl0aWVzLmNyZWF0ZUZyYWdtZW50TWFwKHV0aWxpdGllcy5nZXRGcmFnbWVudERlZmluaXRpb25zKGRvY3VtZW50KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnJhZ21lbnRNYXA6IGZyYWdtZW50TWFwLFxuICAgICAgICBsb29rdXBGcmFnbWVudDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBkZWYgPSBmcmFnbWVudE1hcFtuYW1lXTtcbiAgICAgICAgICAgIGlmICghZGVmICYmIGZyYWdtZW50cykge1xuICAgICAgICAgICAgICAgIGRlZiA9IGZyYWdtZW50cy5sb29rdXAobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVmIHx8IG51bGw7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxudmFyIERFTEVURSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgZGVsTW9kaWZpZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBERUxFVEU7IH07XG52YXIgSU5WQUxJREFURSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5leHBvcnRzLkVudGl0eVN0b3JlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFbnRpdHlTdG9yZShwb2xpY2llcywgZ3JvdXApIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wb2xpY2llcyA9IHBvbGljaWVzO1xuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHRoaXMuZGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucm9vdElkcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucmVmcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuZ2V0RmllbGRWYWx1ZSA9IGZ1bmN0aW9uIChvYmplY3RPclJlZmVyZW5jZSwgc3RvcmVGaWVsZE5hbWUpIHsgcmV0dXJuIHV0aWxpdGllcy5tYXliZURlZXBGcmVlemUodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdE9yUmVmZXJlbmNlKVxuICAgICAgICAgICAgPyBfdGhpcy5nZXQob2JqZWN0T3JSZWZlcmVuY2UuX19yZWYsIHN0b3JlRmllbGROYW1lKVxuICAgICAgICAgICAgOiBvYmplY3RPclJlZmVyZW5jZSAmJiBvYmplY3RPclJlZmVyZW5jZVtzdG9yZUZpZWxkTmFtZV0pOyB9O1xuICAgICAgICB0aGlzLmNhblJlYWQgPSBmdW5jdGlvbiAob2JqT3JSZWYpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqT3JSZWYpXG4gICAgICAgICAgICAgICAgPyBfdGhpcy5oYXMob2JqT3JSZWYuX19yZWYpXG4gICAgICAgICAgICAgICAgOiB0eXBlb2Ygb2JqT3JSZWYgPT09IFwib2JqZWN0XCI7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudG9SZWZlcmVuY2UgPSBmdW5jdGlvbiAob2JqT3JJZE9yUmVmLCBtZXJnZUludG9TdG9yZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpPcklkT3JSZWYgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2Uob2JqT3JJZE9yUmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqT3JJZE9yUmVmKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpPcklkT3JSZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaWQgPSBfdGhpcy5wb2xpY2llcy5pZGVudGlmeShvYmpPcklkT3JSZWYpWzBdO1xuICAgICAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZiA9IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlKGlkKTtcbiAgICAgICAgICAgICAgICBpZiAobWVyZ2VJbnRvU3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWVyZ2UoaWQsIG9iak9ySWRPclJlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLmRhdGEpO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9va3VwKGRhdGFJZCwgdHJ1ZSkgIT09IHZvaWQgMDtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZGF0YUlkLCBmaWVsZE5hbWUpIHtcbiAgICAgICAgdGhpcy5ncm91cC5kZXBlbmQoZGF0YUlkLCBmaWVsZE5hbWUpO1xuICAgICAgICBpZiAoaGFzT3duLmNhbGwodGhpcy5kYXRhLCBkYXRhSWQpKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmVPYmplY3QgPSB0aGlzLmRhdGFbZGF0YUlkXTtcbiAgICAgICAgICAgIGlmIChzdG9yZU9iamVjdCAmJiBoYXNPd24uY2FsbChzdG9yZU9iamVjdCwgZmllbGROYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZU9iamVjdFtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwiX190eXBlbmFtZVwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkLCBkYXRhSWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZFtkYXRhSWRdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXQoZGF0YUlkLCBmaWVsZE5hbWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUubG9va3VwID0gZnVuY3Rpb24gKGRhdGFJZCwgZGVwZW5kT25FeGlzdGVuY2UpIHtcbiAgICAgICAgaWYgKGRlcGVuZE9uRXhpc3RlbmNlKVxuICAgICAgICAgICAgdGhpcy5ncm91cC5kZXBlbmQoZGF0YUlkLCBcIl9fZXhpc3RzXCIpO1xuICAgICAgICBpZiAoaGFzT3duLmNhbGwodGhpcy5kYXRhLCBkYXRhSWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2RhdGFJZF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBMYXllcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Lmxvb2t1cChkYXRhSWQsIGRlcGVuZE9uRXhpc3RlbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZFtkYXRhSWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKG9sZGVyLCBuZXdlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGF0YUlkO1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9sZGVyKSlcbiAgICAgICAgICAgIG9sZGVyID0gb2xkZXIuX19yZWY7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UobmV3ZXIpKVxuICAgICAgICAgICAgbmV3ZXIgPSBuZXdlci5fX3JlZjtcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gdHlwZW9mIG9sZGVyID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IHRoaXMubG9va3VwKGRhdGFJZCA9IG9sZGVyKVxuICAgICAgICAgICAgOiBvbGRlcjtcbiAgICAgICAgdmFyIGluY29taW5nID0gdHlwZW9mIG5ld2VyID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IHRoaXMubG9va3VwKGRhdGFJZCA9IG5ld2VyKVxuICAgICAgICAgICAgOiBuZXdlcjtcbiAgICAgICAgaWYgKCFpbmNvbWluZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KHR5cGVvZiBkYXRhSWQgPT09IFwic3RyaW5nXCIsIFwic3RvcmUubWVyZ2UgZXhwZWN0cyBhIHN0cmluZyBJRFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KHR5cGVvZiBkYXRhSWQgPT09IFwic3RyaW5nXCIsIDEpO1xuICAgICAgICB2YXIgbWVyZ2VkID0gbmV3IHV0aWxpdGllcy5EZWVwTWVyZ2VyKHN0b3JlT2JqZWN0UmVjb25jaWxlcikubWVyZ2UoZXhpc3RpbmcsIGluY29taW5nKTtcbiAgICAgICAgdGhpcy5kYXRhW2RhdGFJZF0gPSBtZXJnZWQ7XG4gICAgICAgIGlmIChtZXJnZWQgIT09IGV4aXN0aW5nKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yZWZzW2RhdGFJZF07XG4gICAgICAgICAgICBpZiAodGhpcy5ncm91cC5jYWNoaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkc1RvRGlydHlfMSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdGluZylcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzVG9EaXJ0eV8xLl9fZXhpc3RzID0gMTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhpbmNvbWluZykuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdGluZyB8fCBleGlzdGluZ1tzdG9yZUZpZWxkTmFtZV0gIT09IG1lcmdlZFtzdG9yZUZpZWxkTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1RvRGlydHlfMVtzdG9yZUZpZWxkTmFtZV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkTmFtZSAhPT0gc3RvcmVGaWVsZE5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3RoaXMucG9saWNpZXMuaGFzS2V5QXJncyhtZXJnZWQuX190eXBlbmFtZSwgZmllbGROYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1RvRGlydHlfMVtmaWVsZE5hbWVdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXJnZWRbc3RvcmVGaWVsZE5hbWVdID09PSB2b2lkIDAgJiYgIShfdGhpcyBpbnN0YW5jZW9mIExheWVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXJnZWRbc3RvcmVGaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkc1RvRGlydHlfMS5fX3R5cGVuYW1lICYmXG4gICAgICAgICAgICAgICAgICAgICEoZXhpc3RpbmcgJiYgZXhpc3RpbmcuX190eXBlbmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZFtkYXRhSWRdID09PSBtZXJnZWQuX190eXBlbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZmllbGRzVG9EaXJ0eV8xLl9fdHlwZW5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGZpZWxkc1RvRGlydHlfMSkuZm9yRWFjaChmdW5jdGlvbiAoZmllbGROYW1lKSB7IHJldHVybiBfdGhpcy5ncm91cC5kaXJ0eShkYXRhSWQsIGZpZWxkTmFtZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUubW9kaWZ5ID0gZnVuY3Rpb24gKGRhdGFJZCwgZmllbGRzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdG9yZU9iamVjdCA9IHRoaXMubG9va3VwKGRhdGFJZCk7XG4gICAgICAgIGlmIChzdG9yZU9iamVjdCkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZWRGaWVsZHNfMSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICB2YXIgbmVlZFRvTWVyZ2VfMSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGFsbERlbGV0ZWRfMSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgc2hhcmVkRGV0YWlsc18xID0ge1xuICAgICAgICAgICAgICAgIERFTEVURTogREVMRVRFLFxuICAgICAgICAgICAgICAgIElOVkFMSURBVEU6IElOVkFMSURBVEUsXG4gICAgICAgICAgICAgICAgaXNSZWZlcmVuY2U6IHV0aWxpdGllcy5pc1JlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICB0b1JlZmVyZW5jZTogdGhpcy50b1JlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICBjYW5SZWFkOiB0aGlzLmNhblJlYWQsXG4gICAgICAgICAgICAgICAgcmVhZEZpZWxkOiBmdW5jdGlvbiAoZmllbGROYW1lT3JPcHRpb25zLCBmcm9tKSB7IHJldHVybiBfdGhpcy5wb2xpY2llcy5yZWFkRmllbGQodHlwZW9mIGZpZWxkTmFtZU9yT3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWVPck9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGZyb20gfHwgdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2UoZGF0YUlkKSxcbiAgICAgICAgICAgICAgICB9IDogZmllbGROYW1lT3JPcHRpb25zLCB7IHN0b3JlOiBfdGhpcyB9KTsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yZU9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkVmFsdWUgPSBzdG9yZU9iamVjdFtzdG9yZUZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgPT09IHZvaWQgMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBtb2RpZnkgPSB0eXBlb2YgZmllbGRzID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyBmaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZHNbc3RvcmVGaWVsZE5hbWVdIHx8IGZpZWxkc1tmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChtb2RpZnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gbW9kaWZ5ID09PSBkZWxNb2RpZmllciA/IERFTEVURSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnkodXRpbGl0aWVzLm1heWJlRGVlcEZyZWV6ZShmaWVsZFZhbHVlKSwgdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHNoYXJlZERldGFpbHNfMSksIHsgZmllbGROYW1lOiBmaWVsZE5hbWUsIHN0b3JlRmllbGROYW1lOiBzdG9yZUZpZWxkTmFtZSwgc3RvcmFnZTogX3RoaXMuZ2V0U3RvcmFnZShkYXRhSWQsIHN0b3JlRmllbGROYW1lKSB9KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gSU5WQUxJREFURSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ3JvdXAuZGlydHkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IERFTEVURSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZmllbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRGaWVsZHNfMVtzdG9yZUZpZWxkTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkVG9NZXJnZV8xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBhbGxEZWxldGVkXzEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChuZWVkVG9NZXJnZV8xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXJnZShkYXRhSWQsIGNoYW5nZWRGaWVsZHNfMSk7XG4gICAgICAgICAgICAgICAgaWYgKGFsbERlbGV0ZWRfMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIExheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFbZGF0YUlkXSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbZGF0YUlkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgXCJfX2V4aXN0c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChkYXRhSWQsIGZpZWxkTmFtZSwgYXJncykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBzdG9yZU9iamVjdCA9IHRoaXMubG9va3VwKGRhdGFJZCk7XG4gICAgICAgIGlmIChzdG9yZU9iamVjdCkge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lID0gdGhpcy5nZXRGaWVsZFZhbHVlKHN0b3JlT2JqZWN0LCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICB2YXIgc3RvcmVGaWVsZE5hbWUgPSBmaWVsZE5hbWUgJiYgYXJnc1xuICAgICAgICAgICAgICAgID8gdGhpcy5wb2xpY2llcy5nZXRTdG9yZUZpZWxkTmFtZSh7IHR5cGVuYW1lOiB0eXBlbmFtZSwgZmllbGROYW1lOiBmaWVsZE5hbWUsIGFyZ3M6IGFyZ3MgfSlcbiAgICAgICAgICAgICAgICA6IGZpZWxkTmFtZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGlmeShkYXRhSWQsIHN0b3JlRmllbGROYW1lID8gKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2Fbc3RvcmVGaWVsZE5hbWVdID0gZGVsTW9kaWZpZXIsXG4gICAgICAgICAgICAgICAgX2EpIDogZGVsTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5ldmljdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBsaW1pdCkge1xuICAgICAgICB2YXIgZXZpY3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKHRoaXMuZGF0YSwgb3B0aW9ucy5pZCkpIHtcbiAgICAgICAgICAgICAgICBldmljdGVkID0gdGhpcy5kZWxldGUob3B0aW9ucy5pZCwgb3B0aW9ucy5maWVsZE5hbWUsIG9wdGlvbnMuYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIExheWVyICYmIHRoaXMgIT09IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgZXZpY3RlZCA9IHRoaXMucGFyZW50LmV2aWN0KG9wdGlvbnMsIGxpbWl0KSB8fCBldmljdGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZmllbGROYW1lIHx8IGV2aWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLmRpcnR5KG9wdGlvbnMuaWQsIG9wdGlvbnMuZmllbGROYW1lIHx8IFwiX19leGlzdHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2aWN0ZWQ7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZShudWxsKTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgb2JqID0gdGhpcy50b09iamVjdCgpO1xuICAgICAgICB2YXIgZXh0cmFSb290SWRzID0gW107XG4gICAgICAgIHRoaXMuZ2V0Um9vdElkU2V0KCkuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duLmNhbGwoX3RoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWQsIGlkKSkge1xuICAgICAgICAgICAgICAgIGV4dHJhUm9vdElkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChleHRyYVJvb3RJZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBvYmouX19NRVRBID0geyBleHRyYVJvb3RJZHM6IGV4dHJhUm9vdElkcy5zb3J0KCkgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAobmV3RGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICAgICAgaWYgKCEobmV3RGF0YSAmJiBoYXNPd24uY2FsbChuZXdEYXRhLCBkYXRhSWQpKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmRlbGV0ZShkYXRhSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5ld0RhdGEpIHtcbiAgICAgICAgICAgIHZhciBfX01FVEEgPSBuZXdEYXRhLl9fTUVUQSwgcmVzdF8xID0gdHNsaWIuX19yZXN0KG5ld0RhdGEsIFtcIl9fTUVUQVwiXSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyZXN0XzEpLmZvckVhY2goZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1lcmdlKGRhdGFJZCwgcmVzdF8xW2RhdGFJZF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoX19NRVRBKSB7XG4gICAgICAgICAgICAgICAgX19NRVRBLmV4dHJhUm9vdElkcy5mb3JFYWNoKHRoaXMucmV0YWluLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLnJldGFpbiA9IGZ1bmN0aW9uIChyb290SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdElkc1tyb290SWRdID0gKHRoaXMucm9vdElkc1tyb290SWRdIHx8IDApICsgMTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24gKHJvb3RJZCkge1xuICAgICAgICBpZiAodGhpcy5yb290SWRzW3Jvb3RJZF0gPiAwKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAtLXRoaXMucm9vdElkc1tyb290SWRdO1xuICAgICAgICAgICAgaWYgKCFjb3VudClcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5yb290SWRzW3Jvb3RJZF07XG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZ2V0Um9vdElkU2V0ID0gZnVuY3Rpb24gKGlkcykge1xuICAgICAgICBpZiAoaWRzID09PSB2b2lkIDApIHsgaWRzID0gbmV3IFNldCgpOyB9XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucm9vdElkcykuZm9yRWFjaChpZHMuYWRkLCBpZHMpO1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIExheWVyKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5nZXRSb290SWRTZXQoaWRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWQpLmZvckVhY2goaWRzLmFkZCwgaWRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRzO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmdjID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaWRzID0gdGhpcy5nZXRSb290SWRTZXQoKTtcbiAgICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy50b09iamVjdCgpO1xuICAgICAgICBpZHMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChzbmFwc2hvdCwgaWQpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoX3RoaXMuZmluZENoaWxkUmVmSWRzKGlkKSkuZm9yRWFjaChpZHMuYWRkLCBpZHMpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzbmFwc2hvdFtpZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgaWRzVG9SZW1vdmUgPSBPYmplY3Qua2V5cyhzbmFwc2hvdCk7XG4gICAgICAgIGlmIChpZHNUb1JlbW92ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciByb290XzEgPSB0aGlzO1xuICAgICAgICAgICAgd2hpbGUgKHJvb3RfMSBpbnN0YW5jZW9mIExheWVyKVxuICAgICAgICAgICAgICAgIHJvb3RfMSA9IHJvb3RfMS5wYXJlbnQ7XG4gICAgICAgICAgICBpZHNUb1JlbW92ZS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gcm9vdF8xLmRlbGV0ZShpZCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHNUb1JlbW92ZTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5maW5kQ2hpbGRSZWZJZHMgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgIGlmICghaGFzT3duLmNhbGwodGhpcy5yZWZzLCBkYXRhSWQpKSB7XG4gICAgICAgICAgICB2YXIgZm91bmRfMSA9IHRoaXMucmVmc1tkYXRhSWRdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHZhciByb290ID0gdGhpcy5kYXRhW2RhdGFJZF07XG4gICAgICAgICAgICBpZiAoIXJvb3QpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kXzE7XG4gICAgICAgICAgICB2YXIgd29ya1NldF8xID0gbmV3IFNldChbcm9vdF0pO1xuICAgICAgICAgICAgd29ya1NldF8xLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZF8xW29iai5fX3JlZl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdChvYmopKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtTZXRfMS5hZGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWZzW2RhdGFJZF07XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUubWFrZUNhY2hlS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cC5rZXlNYWtlci5sb29rdXBBcnJheShhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmV0dXJuIEVudGl0eVN0b3JlO1xufSgpKTtcbnZhciBDYWNoZUdyb3VwID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYWNoZUdyb3VwKGNhY2hpbmcsIHBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50ID09PSB2b2lkIDApIHsgcGFyZW50ID0gbnVsbDsgfVxuICAgICAgICB0aGlzLmNhY2hpbmcgPSBjYWNoaW5nO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXNldENhY2hpbmcoKTtcbiAgICB9XG4gICAgQ2FjaGVHcm91cC5wcm90b3R5cGUucmVzZXRDYWNoaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmQgPSB0aGlzLmNhY2hpbmcgPyBvcHRpbWlzbS5kZXAoKSA6IG51bGw7XG4gICAgICAgIHRoaXMua2V5TWFrZXIgPSBuZXcgdHJpZS5UcmllKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwKTtcbiAgICB9O1xuICAgIENhY2hlR3JvdXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIChkYXRhSWQsIHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmQpIHtcbiAgICAgICAgICAgIHRoaXMuZChtYWtlRGVwS2V5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpKTtcbiAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgIGlmIChmaWVsZE5hbWUgIT09IHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kKG1ha2VEZXBLZXkoZGF0YUlkLCBmaWVsZE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmRlcGVuZChkYXRhSWQsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2FjaGVHcm91cC5wcm90b3R5cGUuZGlydHkgPSBmdW5jdGlvbiAoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5kKSB7XG4gICAgICAgICAgICB0aGlzLmQuZGlydHkobWFrZURlcEtleShkYXRhSWQsIHN0b3JlRmllbGROYW1lKSwgc3RvcmVGaWVsZE5hbWUgPT09IFwiX19leGlzdHNcIiA/IFwiZm9yZ2V0XCIgOiBcInNldERpcnR5XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ2FjaGVHcm91cDtcbn0oKSk7XG5mdW5jdGlvbiBtYWtlRGVwS2V5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpIHtcbiAgICByZXR1cm4gc3RvcmVGaWVsZE5hbWUgKyAnIycgKyBkYXRhSWQ7XG59XG5mdW5jdGlvbiBtYXliZURlcGVuZE9uRXhpc3RlbmNlT2ZFbnRpdHkoc3RvcmUsIGVudGl0eUlkKSB7XG4gICAgaWYgKHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhzdG9yZSkpIHtcbiAgICAgICAgc3RvcmUuZ3JvdXAuZGVwZW5kKGVudGl0eUlkLCBcIl9fZXhpc3RzXCIpO1xuICAgIH1cbn1cbihmdW5jdGlvbiAoRW50aXR5U3RvcmUpIHtcbiAgICB2YXIgUm9vdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIHRzbGliLl9fZXh0ZW5kcyhSb290LCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBSb290KF9hKSB7XG4gICAgICAgICAgICB2YXIgcG9saWNpZXMgPSBfYS5wb2xpY2llcywgX2IgPSBfYS5yZXN1bHRDYWNoaW5nLCByZXN1bHRDYWNoaW5nID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgc2VlZCA9IF9hLnNlZWQ7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwb2xpY2llcywgbmV3IENhY2hlR3JvdXAocmVzdWx0Q2FjaGluZykpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5zdHVtcCA9IG5ldyBTdHVtcChfdGhpcyk7XG4gICAgICAgICAgICBfdGhpcy5zdG9yYWdlVHJpZSA9IG5ldyB0cmllLlRyaWUodXRpbGl0aWVzLmNhblVzZVdlYWtNYXApO1xuICAgICAgICAgICAgaWYgKHNlZWQpXG4gICAgICAgICAgICAgICAgX3RoaXMucmVwbGFjZShzZWVkKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuICAgICAgICBSb290LnByb3RvdHlwZS5hZGRMYXllciA9IGZ1bmN0aW9uIChsYXllcklkLCByZXBsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0dW1wLmFkZExheWVyKGxheWVySWQsIHJlcGxheSk7XG4gICAgICAgIH07XG4gICAgICAgIFJvb3QucHJvdG90eXBlLnJlbW92ZUxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIFJvb3QucHJvdG90eXBlLmdldFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlVHJpZS5sb29rdXBBcnJheShhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUm9vdDtcbiAgICB9KEVudGl0eVN0b3JlKSk7XG4gICAgRW50aXR5U3RvcmUuUm9vdCA9IFJvb3Q7XG59KShleHBvcnRzLkVudGl0eVN0b3JlIHx8IChleHBvcnRzLkVudGl0eVN0b3JlID0ge30pKTtcbnZhciBMYXllciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKExheWVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExheWVyKGlkLCBwYXJlbnQsIHJlcGxheSwgZ3JvdXApIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcGFyZW50LnBvbGljaWVzLCBncm91cCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaWQgPSBpZDtcbiAgICAgICAgX3RoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBfdGhpcy5yZXBsYXkgPSByZXBsYXk7XG4gICAgICAgIF90aGlzLmdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHJlcGxheShfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTGF5ZXIucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24gKGxheWVySWQsIHJlcGxheSkge1xuICAgICAgICByZXR1cm4gbmV3IExheWVyKGxheWVySWQsIHRoaXMsIHJlcGxheSwgdGhpcy5ncm91cCk7XG4gICAgfTtcbiAgICBMYXllci5wcm90b3R5cGUucmVtb3ZlTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXJJZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQucmVtb3ZlTGF5ZXIobGF5ZXJJZCk7XG4gICAgICAgIGlmIChsYXllcklkID09PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncm91cC5jYWNoaW5nKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG93blN0b3JlT2JqZWN0ID0gX3RoaXMuZGF0YVtkYXRhSWRdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50U3RvcmVPYmplY3QgPSBwYXJlbnRbXCJsb29rdXBcIl0oZGF0YUlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRTdG9yZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVsZXRlKGRhdGFJZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIW93blN0b3JlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ncm91cC5kaXJ0eShkYXRhSWQsIFwiX19leGlzdHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJlbnRTdG9yZU9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ncm91cC5kaXJ0eShkYXRhSWQsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG93blN0b3JlT2JqZWN0ICE9PSBwYXJlbnRTdG9yZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3duU3RvcmVPYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcXVhbGl0eS5lcXVhbChvd25TdG9yZU9iamVjdFtzdG9yZUZpZWxkTmFtZV0sIHBhcmVudFN0b3JlT2JqZWN0W3N0b3JlRmllbGROYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ3JvdXAuZGlydHkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdGhpcy5wYXJlbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgcmV0dXJuIHBhcmVudC5hZGRMYXllcih0aGlzLmlkLCB0aGlzLnJlcGxheSk7XG4gICAgfTtcbiAgICBMYXllci5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5wYXJlbnQudG9PYmplY3QoKSksIHRoaXMuZGF0YSk7XG4gICAgfTtcbiAgICBMYXllci5wcm90b3R5cGUuZmluZENoaWxkUmVmSWRzID0gZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICB2YXIgZnJvbVBhcmVudCA9IHRoaXMucGFyZW50LmZpbmRDaGlsZFJlZklkcyhkYXRhSWQpO1xuICAgICAgICByZXR1cm4gaGFzT3duLmNhbGwodGhpcy5kYXRhLCBkYXRhSWQpID8gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGZyb21QYXJlbnQpLCBfc3VwZXIucHJvdG90eXBlLmZpbmRDaGlsZFJlZklkcy5jYWxsKHRoaXMsIGRhdGFJZCkpIDogZnJvbVBhcmVudDtcbiAgICB9O1xuICAgIExheWVyLnByb3RvdHlwZS5nZXRTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcCA9IHRoaXMucGFyZW50O1xuICAgICAgICB3aGlsZSAocC5wYXJlbnQpXG4gICAgICAgICAgICBwID0gcC5wYXJlbnQ7XG4gICAgICAgIHJldHVybiBwLmdldFN0b3JhZ2UuYXBwbHkocCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHJldHVybiBMYXllcjtcbn0oZXhwb3J0cy5FbnRpdHlTdG9yZSkpO1xudmFyIFN0dW1wID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoU3R1bXAsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3R1bXAocm9vdCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgXCJFbnRpdHlTdG9yZS5TdHVtcFwiLCByb290LCBmdW5jdGlvbiAoKSB7IH0sIG5ldyBDYWNoZUdyb3VwKHJvb3QuZ3JvdXAuY2FjaGluZywgcm9vdC5ncm91cCkpIHx8IHRoaXM7XG4gICAgfVxuICAgIFN0dW1wLnByb3RvdHlwZS5yZW1vdmVMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBTdHVtcC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5tZXJnZS5hcHBseSh0aGlzLnBhcmVudCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHJldHVybiBTdHVtcDtcbn0oTGF5ZXIpKTtcbmZ1bmN0aW9uIHN0b3JlT2JqZWN0UmVjb25jaWxlcihleGlzdGluZ09iamVjdCwgaW5jb21pbmdPYmplY3QsIHByb3BlcnR5KSB7XG4gICAgdmFyIGV4aXN0aW5nVmFsdWUgPSBleGlzdGluZ09iamVjdFtwcm9wZXJ0eV07XG4gICAgdmFyIGluY29taW5nVmFsdWUgPSBpbmNvbWluZ09iamVjdFtwcm9wZXJ0eV07XG4gICAgcmV0dXJuIGVxdWFsaXR5LmVxdWFsKGV4aXN0aW5nVmFsdWUsIGluY29taW5nVmFsdWUpID8gZXhpc3RpbmdWYWx1ZSA6IGluY29taW5nVmFsdWU7XG59XG5mdW5jdGlvbiBzdXBwb3J0c1Jlc3VsdENhY2hpbmcoc3RvcmUpIHtcbiAgICByZXR1cm4gISEoc3RvcmUgaW5zdGFuY2VvZiBleHBvcnRzLkVudGl0eVN0b3JlICYmIHN0b3JlLmdyb3VwLmNhY2hpbmcpO1xufVxuXG5mdW5jdGlvbiBzaGFsbG93Q29weSh2YWx1ZSkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgICAgICAgID8gdmFsdWUuc2xpY2UoMClcbiAgICAgICAgICAgIDogdHNsaWIuX19hc3NpZ24oeyBfX3Byb3RvX186IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSkgfSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG52YXIgT2JqZWN0Q2Fub24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9iamVjdENhbm9uKCkge1xuICAgICAgICB0aGlzLmtub3duID0gbmV3ICh1dGlsaXRpZXMuY2FuVXNlV2Vha1NldCA/IFdlYWtTZXQgOiBTZXQpKCk7XG4gICAgICAgIHRoaXMucG9vbCA9IG5ldyB0cmllLlRyaWUodXRpbGl0aWVzLmNhblVzZVdlYWtNYXApO1xuICAgICAgICB0aGlzLnBhc3NlcyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMua2V5c0J5SlNPTiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbXB0eSA9IHRoaXMuYWRtaXQoe30pO1xuICAgIH1cbiAgICBPYmplY3RDYW5vbi5wcm90b3R5cGUuaXNLbm93biA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkgJiYgdGhpcy5rbm93bi5oYXModmFsdWUpO1xuICAgIH07XG4gICAgT2JqZWN0Q2Fub24ucHJvdG90eXBlLnBhc3MgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YXIgY29weSA9IHNoYWxsb3dDb3B5KHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucGFzc2VzLnNldChjb3B5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBPYmplY3RDYW5vbi5wcm90b3R5cGUuYWRtaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWwgPSB0aGlzLnBhc3Nlcy5nZXQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsKVxuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbDtcbiAgICAgICAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgICAgICAgICBzd2l0Y2ggKHByb3RvKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBBcnJheS5wcm90b3R5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMua25vd24uaGFzKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFycmF5ID0gdmFsdWUubWFwKHRoaXMuYWRtaXQsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMucG9vbC5sb29rdXBBcnJheShhcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZS5hcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rbm93bi5hZGQobm9kZS5hcnJheSA9IGFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShhcnJheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuYXJyYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICAgICAgICBjYXNlIE9iamVjdC5wcm90b3R5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMua25vd24uaGFzKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3RvXzEgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyYXlfMSA9IFtwcm90b18xXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSB0aGlzLnNvcnRlZEtleXModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBhcnJheV8xLnB1c2goa2V5cy5qc29uKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpcnN0VmFsdWVJbmRleF8xID0gYXJyYXlfMS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGtleXMuc29ydGVkLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlfMS5wdXNoKF90aGlzLmFkbWl0KHZhbHVlW2tleV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5wb29sLmxvb2t1cEFycmF5KGFycmF5XzEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGUub2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqXzEgPSBub2RlLm9iamVjdCA9IE9iamVjdC5jcmVhdGUocHJvdG9fMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtub3duLmFkZChvYmpfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLnNvcnRlZC5mb3JFYWNoKGZ1bmN0aW9uIChrZXksIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpfMVtrZXldID0gYXJyYXlfMVtmaXJzdFZhbHVlSW5kZXhfMSArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5mcmVlemUob2JqXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLm9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgT2JqZWN0Q2Fub24ucHJvdG90eXBlLnNvcnRlZEtleXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBvb2wubG9va3VwQXJyYXkoa2V5cyk7XG4gICAgICAgIGlmICghbm9kZS5rZXlzKSB7XG4gICAgICAgICAgICBrZXlzLnNvcnQoKTtcbiAgICAgICAgICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoa2V5cyk7XG4gICAgICAgICAgICBpZiAoIShub2RlLmtleXMgPSB0aGlzLmtleXNCeUpTT04uZ2V0KGpzb24pKSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5c0J5SlNPTi5zZXQoanNvbiwgbm9kZS5rZXlzID0geyBzb3J0ZWQ6IGtleXMsIGpzb246IGpzb24gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGUua2V5cztcbiAgICB9O1xuICAgIHJldHVybiBPYmplY3RDYW5vbjtcbn0oKSk7XG52YXIgY2Fub25pY2FsU3RyaW5naWZ5ID0gT2JqZWN0LmFzc2lnbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKHN0cmluZ2lmeUNhbm9uID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJlc2V0Q2Fub25pY2FsU3RyaW5naWZ5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbm9uaWNhbCA9IHN0cmluZ2lmeUNhbm9uLmFkbWl0KHZhbHVlKTtcbiAgICAgICAgdmFyIGpzb24gPSBzdHJpbmdpZnlDYWNoZS5nZXQoY2Fub25pY2FsKTtcbiAgICAgICAgaWYgKGpzb24gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgc3RyaW5naWZ5Q2FjaGUuc2V0KGNhbm9uaWNhbCwganNvbiA9IEpTT04uc3RyaW5naWZ5KGNhbm9uaWNhbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xufSwge1xuICAgIHJlc2V0OiByZXNldENhbm9uaWNhbFN0cmluZ2lmeSxcbn0pO1xudmFyIHN0cmluZ2lmeUNhbm9uO1xudmFyIHN0cmluZ2lmeUNhY2hlO1xuZnVuY3Rpb24gcmVzZXRDYW5vbmljYWxTdHJpbmdpZnkoKSB7XG4gICAgc3RyaW5naWZ5Q2Fub24gPSBuZXcgT2JqZWN0Q2Fub247XG4gICAgc3RyaW5naWZ5Q2FjaGUgPSBuZXcgKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwID8gV2Vha01hcCA6IE1hcCkoKTtcbn1cblxuZnVuY3Rpb24gZXhlY1NlbGVjdGlvblNldEtleUFyZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBbXG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uU2V0LFxuICAgICAgICBvcHRpb25zLm9iamVjdE9yUmVmZXJlbmNlLFxuICAgICAgICBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgIG9wdGlvbnMuY29udGV4dC5jYW5vbml6ZVJlc3VsdHMsXG4gICAgXTtcbn1cbnZhciBTdG9yZVJlYWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RvcmVSZWFkZXIoY29uZmlnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMua25vd25SZXN1bHRzID0gbmV3ICh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCA/IFdlYWtNYXAgOiBNYXApKCk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdXRpbGl0aWVzLmNvbXBhY3QoY29uZmlnLCB7XG4gICAgICAgICAgICBhZGRUeXBlbmFtZTogY29uZmlnLmFkZFR5cGVuYW1lICE9PSBmYWxzZSxcbiAgICAgICAgICAgIGNhbm9uaXplUmVzdWx0czogc2hvdWxkQ2Fub25pemVSZXN1bHRzKGNvbmZpZyksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbm9uID0gY29uZmlnLmNhbm9uIHx8IG5ldyBPYmplY3RDYW5vbjtcbiAgICAgICAgdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0ID0gb3B0aW1pc20ud3JhcChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmFyIGNhbm9uaXplUmVzdWx0cyA9IG9wdGlvbnMuY29udGV4dC5jYW5vbml6ZVJlc3VsdHM7XG4gICAgICAgICAgICB2YXIgcGVla0FyZ3MgPSBleGVjU2VsZWN0aW9uU2V0S2V5QXJncyhvcHRpb25zKTtcbiAgICAgICAgICAgIHBlZWtBcmdzWzNdID0gIWNhbm9uaXplUmVzdWx0cztcbiAgICAgICAgICAgIHZhciBvdGhlciA9IChfYSA9IF90aGlzLmV4ZWN1dGVTZWxlY3Rpb25TZXQpLnBlZWsuYXBwbHkoX2EsIHBlZWtBcmdzKTtcbiAgICAgICAgICAgIGlmIChvdGhlcikge1xuICAgICAgICAgICAgICAgIGlmIChjYW5vbml6ZVJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvdGhlciksIHsgcmVzdWx0OiBfdGhpcy5jYW5vbi5hZG1pdChvdGhlci5yZXN1bHQpIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXliZURlcGVuZE9uRXhpc3RlbmNlT2ZFbnRpdHkob3B0aW9ucy5jb250ZXh0LnN0b3JlLCBvcHRpb25zLmVuY2xvc2luZ1JlZi5fX3JlZik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZXhlY1NlbGVjdGlvblNldEltcGwob3B0aW9ucyk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1heDogdGhpcy5jb25maWcucmVzdWx0Q2FjaGVNYXhTaXplLFxuICAgICAgICAgICAga2V5QXJnczogZXhlY1NlbGVjdGlvblNldEtleUFyZ3MsXG4gICAgICAgICAgICBtYWtlQ2FjaGVLZXk6IGZ1bmN0aW9uIChzZWxlY3Rpb25TZXQsIHBhcmVudCwgY29udGV4dCwgY2Fub25pemVSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhjb250ZXh0LnN0b3JlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5zdG9yZS5tYWtlQ2FjaGVLZXkoc2VsZWN0aW9uU2V0LCB1dGlsaXRpZXMuaXNSZWZlcmVuY2UocGFyZW50KSA/IHBhcmVudC5fX3JlZiA6IHBhcmVudCwgY29udGV4dC52YXJTdHJpbmcsIGNhbm9uaXplUmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5leGVjdXRlU3ViU2VsZWN0ZWRBcnJheSA9IG9wdGltaXNtLndyYXAoZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG1heWJlRGVwZW5kT25FeGlzdGVuY2VPZkVudGl0eShvcHRpb25zLmNvbnRleHQuc3RvcmUsIG9wdGlvbnMuZW5jbG9zaW5nUmVmLl9fcmVmKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5leGVjU3ViU2VsZWN0ZWRBcnJheUltcGwob3B0aW9ucyk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1heDogdGhpcy5jb25maWcucmVzdWx0Q2FjaGVNYXhTaXplLFxuICAgICAgICAgICAgbWFrZUNhY2hlS2V5OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBfYS5maWVsZCwgYXJyYXkgPSBfYS5hcnJheSwgY29udGV4dCA9IF9hLmNvbnRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhjb250ZXh0LnN0b3JlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5zdG9yZS5tYWtlQ2FjaGVLZXkoZmllbGQsIGFycmF5LCBjb250ZXh0LnZhclN0cmluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgU3RvcmVSZWFkZXIucHJvdG90eXBlLnJlc2V0Q2Fub24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2Fub24gPSBuZXcgT2JqZWN0Q2Fub247XG4gICAgfTtcbiAgICBTdG9yZVJlYWRlci5wcm90b3R5cGUuZGlmZlF1ZXJ5QWdhaW5zdFN0b3JlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBzdG9yZSA9IF9hLnN0b3JlLCBxdWVyeSA9IF9hLnF1ZXJ5LCBfYiA9IF9hLnJvb3RJZCwgcm9vdElkID0gX2IgPT09IHZvaWQgMCA/ICdST09UX1FVRVJZJyA6IF9iLCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIF9jID0gX2EucmV0dXJuUGFydGlhbERhdGEsIHJldHVyblBhcnRpYWxEYXRhID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBfYS5jYW5vbml6ZVJlc3VsdHMsIGNhbm9uaXplUmVzdWx0cyA9IF9kID09PSB2b2lkIDAgPyB0aGlzLmNvbmZpZy5jYW5vbml6ZVJlc3VsdHMgOiBfZDtcbiAgICAgICAgdmFyIHBvbGljaWVzID0gdGhpcy5jb25maWcuY2FjaGUucG9saWNpZXM7XG4gICAgICAgIHZhcmlhYmxlcyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB1dGlsaXRpZXMuZ2V0RGVmYXVsdFZhbHVlcyh1dGlsaXRpZXMuZ2V0UXVlcnlEZWZpbml0aW9uKHF1ZXJ5KSkpLCB2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgcm9vdFJlZiA9IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlKHJvb3RJZCk7XG4gICAgICAgIHZhciBleGVjUmVzdWx0ID0gdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDogdXRpbGl0aWVzLmdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KS5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICBvYmplY3RPclJlZmVyZW5jZTogcm9vdFJlZixcbiAgICAgICAgICAgIGVuY2xvc2luZ1JlZjogcm9vdFJlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHRzbGliLl9fYXNzaWduKHsgc3RvcmU6IHN0b3JlLCBxdWVyeTogcXVlcnksIHBvbGljaWVzOiBwb2xpY2llcywgdmFyaWFibGVzOiB2YXJpYWJsZXMsIHZhclN0cmluZzogY2Fub25pY2FsU3RyaW5naWZ5KHZhcmlhYmxlcyksIGNhbm9uaXplUmVzdWx0czogY2Fub25pemVSZXN1bHRzIH0sIGV4dHJhY3RGcmFnbWVudENvbnRleHQocXVlcnksIHRoaXMuY29uZmlnLmZyYWdtZW50cykpLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG1pc3Npbmc7XG4gICAgICAgIGlmIChleGVjUmVzdWx0Lm1pc3NpbmcpIHtcbiAgICAgICAgICAgIG1pc3NpbmcgPSBbbmV3IE1pc3NpbmdGaWVsZEVycm9yKGZpcnN0TWlzc2luZyhleGVjUmVzdWx0Lm1pc3NpbmcpLCBleGVjUmVzdWx0Lm1pc3NpbmcsIHF1ZXJ5LCB2YXJpYWJsZXMpXTtcbiAgICAgICAgICAgIGlmICghcmV0dXJuUGFydGlhbERhdGEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBtaXNzaW5nWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN1bHQ6IGV4ZWNSZXN1bHQucmVzdWx0LFxuICAgICAgICAgICAgY29tcGxldGU6ICFtaXNzaW5nLFxuICAgICAgICAgICAgbWlzc2luZzogbWlzc2luZyxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5pc0ZyZXNoID0gZnVuY3Rpb24gKHJlc3VsdCwgcGFyZW50LCBzZWxlY3Rpb25TZXQsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhjb250ZXh0LnN0b3JlKSAmJlxuICAgICAgICAgICAgdGhpcy5rbm93blJlc3VsdHMuZ2V0KHJlc3VsdCkgPT09IHNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgdmFyIGxhdGVzdCA9IHRoaXMuZXhlY3V0ZVNlbGVjdGlvblNldC5wZWVrKHNlbGVjdGlvblNldCwgcGFyZW50LCBjb250ZXh0LCB0aGlzLmNhbm9uLmlzS25vd24ocmVzdWx0KSk7XG4gICAgICAgICAgICBpZiAobGF0ZXN0ICYmIHJlc3VsdCA9PT0gbGF0ZXN0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5leGVjU2VsZWN0aW9uU2V0SW1wbCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc2VsZWN0aW9uU2V0ID0gX2Euc2VsZWN0aW9uU2V0LCBvYmplY3RPclJlZmVyZW5jZSA9IF9hLm9iamVjdE9yUmVmZXJlbmNlLCBlbmNsb3NpbmdSZWYgPSBfYS5lbmNsb3NpbmdSZWYsIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdE9yUmVmZXJlbmNlKSAmJlxuICAgICAgICAgICAgIWNvbnRleHQucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbb2JqZWN0T3JSZWZlcmVuY2UuX19yZWZdICYmXG4gICAgICAgICAgICAhY29udGV4dC5zdG9yZS5oYXMob2JqZWN0T3JSZWZlcmVuY2UuX19yZWYpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdDogdGhpcy5jYW5vbi5lbXB0eSxcbiAgICAgICAgICAgICAgICBtaXNzaW5nOiBcIkRhbmdsaW5nIHJlZmVyZW5jZSB0byBtaXNzaW5nIFwiLmNvbmNhdChvYmplY3RPclJlZmVyZW5jZS5fX3JlZiwgXCIgb2JqZWN0XCIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFyaWFibGVzID0gY29udGV4dC52YXJpYWJsZXMsIHBvbGljaWVzID0gY29udGV4dC5wb2xpY2llcywgc3RvcmUgPSBjb250ZXh0LnN0b3JlO1xuICAgICAgICB2YXIgdHlwZW5hbWUgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKG9iamVjdE9yUmVmZXJlbmNlLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgIHZhciBvYmplY3RzVG9NZXJnZSA9IFtdO1xuICAgICAgICB2YXIgbWlzc2luZztcbiAgICAgICAgdmFyIG1pc3NpbmdNZXJnZXIgPSBuZXcgdXRpbGl0aWVzLkRlZXBNZXJnZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFkZFR5cGVuYW1lICYmXG4gICAgICAgICAgICB0eXBlb2YgdHlwZW5hbWUgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICFwb2xpY2llcy5yb290SWRzQnlUeXBlbmFtZVt0eXBlbmFtZV0pIHtcbiAgICAgICAgICAgIG9iamVjdHNUb01lcmdlLnB1c2goeyBfX3R5cGVuYW1lOiB0eXBlbmFtZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVNaXNzaW5nKHJlc3VsdCwgcmVzdWx0TmFtZSkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5taXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZyA9IG1pc3NpbmdNZXJnZXIubWVyZ2UobWlzc2luZywgKF9hID0ge30sIF9hW3Jlc3VsdE5hbWVdID0gcmVzdWx0Lm1pc3NpbmcsIF9hKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd29ya1NldCA9IG5ldyBTZXQoc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMpO1xuICAgICAgICB3b3JrU2V0LmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGlmICghdXRpbGl0aWVzLnNob3VsZEluY2x1ZGUoc2VsZWN0aW9uLCB2YXJpYWJsZXMpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkVmFsdWUgPSBwb2xpY2llcy5yZWFkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IHNlbGVjdGlvbi5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGNvbnRleHQudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBvYmplY3RPclJlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0TmFtZSA9IHV0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKHNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXV0aWxpdGllcy5hZGRUeXBlbmFtZVRvRG9jdW1lbnQuYWRkZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2luZyA9IG1pc3NpbmdNZXJnZXIubWVyZ2UobWlzc2luZywgKF9hID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FbcmVzdWx0TmFtZV0gPSBcIkNhbid0IGZpbmQgZmllbGQgJ1wiLmNvbmNhdChzZWxlY3Rpb24ubmFtZS52YWx1ZSwgXCInIG9uIFwiKS5jb25jYXQodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdE9yUmVmZXJlbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmICsgXCIgb2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm9iamVjdCBcIiArIEpTT04uc3RyaW5naWZ5KG9iamVjdE9yUmVmZXJlbmNlLCBudWxsLCAyKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0FycmF5KGZpZWxkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBoYW5kbGVNaXNzaW5nKF90aGlzLmV4ZWN1dGVTdWJTZWxlY3RlZEFycmF5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBzZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheTogZmllbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY2xvc2luZ1JlZjogZW5jbG9zaW5nUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgfSksIHJlc3VsdE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghc2VsZWN0aW9uLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5jYW5vbml6ZVJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBfdGhpcy5jYW5vbi5wYXNzKGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlID0gaGFuZGxlTWlzc2luZyhfdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDogc2VsZWN0aW9uLnNlbGVjdGlvblNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE9yUmVmZXJlbmNlOiBmaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5jbG9zaW5nUmVmOiB1dGlsaXRpZXMuaXNSZWZlcmVuY2UoZmllbGRWYWx1ZSkgPyBmaWVsZFZhbHVlIDogZW5jbG9zaW5nUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgfSksIHJlc3VsdE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdHNUb01lcmdlLnB1c2goKF9iID0ge30sIF9iW3Jlc3VsdE5hbWVdID0gZmllbGRWYWx1ZSwgX2IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSB1dGlsaXRpZXMuZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uKHNlbGVjdGlvbiwgY29udGV4dC5sb29rdXBGcmFnbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKCFmcmFnbWVudCAmJiBzZWxlY3Rpb24ua2luZCA9PT0gZ3JhcGhxbC5LaW5kLkZSQUdNRU5UX1NQUkVBRCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJObyBmcmFnbWVudCBuYW1lZCBcIi5jb25jYXQoc2VsZWN0aW9uLm5hbWUudmFsdWUpKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnQgJiYgcG9saWNpZXMuZnJhZ21lbnRNYXRjaGVzKGZyYWdtZW50LCB0eXBlbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaCh3b3JrU2V0LmFkZCwgd29ya1NldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHV0aWxpdGllcy5tZXJnZURlZXBBcnJheShvYmplY3RzVG9NZXJnZSk7XG4gICAgICAgIHZhciBmaW5hbFJlc3VsdCA9IHsgcmVzdWx0OiByZXN1bHQsIG1pc3Npbmc6IG1pc3NpbmcgfTtcbiAgICAgICAgdmFyIGZyb3plbiA9IGNvbnRleHQuY2Fub25pemVSZXN1bHRzXG4gICAgICAgICAgICA/IHRoaXMuY2Fub24uYWRtaXQoZmluYWxSZXN1bHQpXG4gICAgICAgICAgICA6IHV0aWxpdGllcy5tYXliZURlZXBGcmVlemUoZmluYWxSZXN1bHQpO1xuICAgICAgICBpZiAoZnJvemVuLnJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5rbm93blJlc3VsdHMuc2V0KGZyb3plbi5yZXN1bHQsIHNlbGVjdGlvblNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyb3plbjtcbiAgICB9O1xuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5leGVjU3ViU2VsZWN0ZWRBcnJheUltcGwgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGZpZWxkID0gX2EuZmllbGQsIGFycmF5ID0gX2EuYXJyYXksIGVuY2xvc2luZ1JlZiA9IF9hLmVuY2xvc2luZ1JlZiwgY29udGV4dCA9IF9hLmNvbnRleHQ7XG4gICAgICAgIHZhciBtaXNzaW5nO1xuICAgICAgICB2YXIgbWlzc2luZ01lcmdlciA9IG5ldyB1dGlsaXRpZXMuRGVlcE1lcmdlcigpO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVNaXNzaW5nKGNoaWxkUmVzdWx0LCBpKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoY2hpbGRSZXN1bHQubWlzc2luZykge1xuICAgICAgICAgICAgICAgIG1pc3NpbmcgPSBtaXNzaW5nTWVyZ2VyLm1lcmdlKG1pc3NpbmcsIChfYSA9IHt9LCBfYVtpXSA9IGNoaWxkUmVzdWx0Lm1pc3NpbmcsIF9hKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRSZXN1bHQucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXkuZmlsdGVyKGNvbnRleHQuc3RvcmUuY2FuUmVhZCk7XG4gICAgICAgIH1cbiAgICAgICAgYXJyYXkgPSBhcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVNaXNzaW5nKF90aGlzLmV4ZWN1dGVTdWJTZWxlY3RlZEFycmF5KHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBhcnJheTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgZW5jbG9zaW5nUmVmOiBlbmNsb3NpbmdSZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgfSksIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVNaXNzaW5nKF90aGlzLmV4ZWN1dGVTZWxlY3Rpb25TZXQoe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IGZpZWxkLnNlbGVjdGlvblNldCxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0T3JSZWZlcmVuY2U6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIGVuY2xvc2luZ1JlZjogdXRpbGl0aWVzLmlzUmVmZXJlbmNlKGl0ZW0pID8gaXRlbSA6IGVuY2xvc2luZ1JlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICB9KSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgICAgICAgIGFzc2VydFNlbGVjdGlvblNldEZvcklkVmFsdWUoY29udGV4dC5zdG9yZSwgZmllbGQsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdWx0OiBjb250ZXh0LmNhbm9uaXplUmVzdWx0cyA/IHRoaXMuY2Fub24uYWRtaXQoYXJyYXkpIDogYXJyYXksXG4gICAgICAgICAgICBtaXNzaW5nOiBtaXNzaW5nLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIFN0b3JlUmVhZGVyO1xufSgpKTtcbmZ1bmN0aW9uIGZpcnN0TWlzc2luZyh0cmVlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodHJlZSwgZnVuY3Rpb24gKF8sIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHRocm93IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFzc2VydFNlbGVjdGlvblNldEZvcklkVmFsdWUoc3RvcmUsIGZpZWxkLCBmaWVsZFZhbHVlKSB7XG4gICAgaWYgKCFmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgdmFyIHdvcmtTZXRfMSA9IG5ldyBTZXQoW2ZpZWxkVmFsdWVdKTtcbiAgICAgICAgd29ya1NldF8xLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoIXV0aWxpdGllcy5pc1JlZmVyZW5jZSh2YWx1ZSksIFwiTWlzc2luZyBzZWxlY3Rpb24gc2V0IGZvciBvYmplY3Qgb2YgdHlwZSBcIi5jb25jYXQoZ2V0VHlwZW5hbWVGcm9tU3RvcmVPYmplY3Qoc3RvcmUsIHZhbHVlKSwgXCIgcmV0dXJuZWQgZm9yIHF1ZXJ5IGZpZWxkIFwiKS5jb25jYXQoZmllbGQubmFtZS52YWx1ZSkpIDogZ2xvYmFscy5pbnZhcmlhbnQoIXV0aWxpdGllcy5pc1JlZmVyZW5jZSh2YWx1ZSksIDYpO1xuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModmFsdWUpLmZvckVhY2god29ya1NldF8xLmFkZCwgd29ya1NldF8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG52YXIgY2FjaGVTbG90ID0gbmV3IGNvbnRleHQuU2xvdCgpO1xudmFyIGNhY2hlSW5mb01hcCA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBnZXRDYWNoZUluZm8oY2FjaGUpIHtcbiAgICB2YXIgaW5mbyA9IGNhY2hlSW5mb01hcC5nZXQoY2FjaGUpO1xuICAgIGlmICghaW5mbykge1xuICAgICAgICBjYWNoZUluZm9NYXAuc2V0KGNhY2hlLCBpbmZvID0ge1xuICAgICAgICAgICAgdmFyczogbmV3IFNldCxcbiAgICAgICAgICAgIGRlcDogb3B0aW1pc20uZGVwKCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaW5mbztcbn1cbmZ1bmN0aW9uIGZvcmdldENhY2hlKGNhY2hlKSB7XG4gICAgZ2V0Q2FjaGVJbmZvKGNhY2hlKS52YXJzLmZvckVhY2goZnVuY3Rpb24gKHJ2KSB7IHJldHVybiBydi5mb3JnZXRDYWNoZShjYWNoZSk7IH0pO1xufVxuZnVuY3Rpb24gcmVjYWxsQ2FjaGUoY2FjaGUpIHtcbiAgICBnZXRDYWNoZUluZm8oY2FjaGUpLnZhcnMuZm9yRWFjaChmdW5jdGlvbiAocnYpIHsgcmV0dXJuIHJ2LmF0dGFjaENhY2hlKGNhY2hlKTsgfSk7XG59XG5mdW5jdGlvbiBtYWtlVmFyKHZhbHVlKSB7XG4gICAgdmFyIGNhY2hlcyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgbGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgIHZhciBydiA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIGNhY2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICBnZXRDYWNoZUluZm8oY2FjaGUpLmRlcC5kaXJ0eShydik7XG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdChjYWNoZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIG9sZExpc3RlbmVycyA9IEFycmF5LmZyb20obGlzdGVuZXJzKTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKHZhbHVlKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2FjaGUgPSBjYWNoZVNsb3QuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICAgICAgICAgIGF0dGFjaChjYWNoZSk7XG4gICAgICAgICAgICAgICAgZ2V0Q2FjaGVJbmZvKGNhY2hlKS5kZXAocnYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIHJ2Lm9uTmV4dENoYW5nZSA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIGF0dGFjaCA9IHJ2LmF0dGFjaENhY2hlID0gZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgIGNhY2hlcy5hZGQoY2FjaGUpO1xuICAgICAgICBnZXRDYWNoZUluZm8oY2FjaGUpLnZhcnMuYWRkKHJ2KTtcbiAgICAgICAgcmV0dXJuIHJ2O1xuICAgIH07XG4gICAgcnYuZm9yZ2V0Q2FjaGUgPSBmdW5jdGlvbiAoY2FjaGUpIHsgcmV0dXJuIGNhY2hlcy5kZWxldGUoY2FjaGUpOyB9O1xuICAgIHJldHVybiBydjtcbn1cbmZ1bmN0aW9uIGJyb2FkY2FzdChjYWNoZSkge1xuICAgIGlmIChjYWNoZS5icm9hZGNhc3RXYXRjaGVzKSB7XG4gICAgICAgIGNhY2hlLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICB9XG59XG5cbnZhciBzcGVjaWZpZXJJbmZvQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuZnVuY3Rpb24gbG9va3VwU3BlY2lmaWVySW5mbyhzcGVjKSB7XG4gICAgdmFyIGNhY2hlS2V5ID0gSlNPTi5zdHJpbmdpZnkoc3BlYyk7XG4gICAgcmV0dXJuIHNwZWNpZmllckluZm9DYWNoZVtjYWNoZUtleV0gfHxcbiAgICAgICAgKHNwZWNpZmllckluZm9DYWNoZVtjYWNoZUtleV0gPSBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn1cbmZ1bmN0aW9uIGtleUZpZWxkc0ZuRnJvbVNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgICB2YXIgaW5mbyA9IGxvb2t1cFNwZWNpZmllckluZm8oc3BlY2lmaWVyKTtcbiAgICByZXR1cm4gaW5mby5rZXlGaWVsZHNGbiB8fCAoaW5mby5rZXlGaWVsZHNGbiA9IGZ1bmN0aW9uIChvYmplY3QsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGV4dHJhY3QgPSBmdW5jdGlvbiAoZnJvbSwga2V5KSB7IHJldHVybiBjb250ZXh0LnJlYWRGaWVsZChrZXksIGZyb20pOyB9O1xuICAgICAgICB2YXIga2V5T2JqZWN0ID0gY29udGV4dC5rZXlPYmplY3QgPSBjb2xsZWN0U3BlY2lmaWVyUGF0aHMoc3BlY2lmaWVyLCBmdW5jdGlvbiAoc2NoZW1hS2V5UGF0aCkge1xuICAgICAgICAgICAgdmFyIGV4dHJhY3RlZCA9IGV4dHJhY3RLZXlQYXRoKGNvbnRleHQuc3RvcmVPYmplY3QsIHNjaGVtYUtleVBhdGgsIGV4dHJhY3QpO1xuICAgICAgICAgICAgaWYgKGV4dHJhY3RlZCA9PT0gdm9pZCAwICYmXG4gICAgICAgICAgICAgICAgb2JqZWN0ICE9PSBjb250ZXh0LnN0b3JlT2JqZWN0ICYmXG4gICAgICAgICAgICAgICAgaGFzT3duLmNhbGwob2JqZWN0LCBzY2hlbWFLZXlQYXRoWzBdKSkge1xuICAgICAgICAgICAgICAgIGV4dHJhY3RlZCA9IGV4dHJhY3RLZXlQYXRoKG9iamVjdCwgc2NoZW1hS2V5UGF0aCwgZXh0cmFjdEtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZXh0cmFjdGVkICE9PSB2b2lkIDAsIFwiTWlzc2luZyBmaWVsZCAnXCIuY29uY2F0KHNjaGVtYUtleVBhdGguam9pbignLicpLCBcIicgd2hpbGUgZXh0cmFjdGluZyBrZXlGaWVsZHMgZnJvbSBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KG9iamVjdCkpKSA6IGdsb2JhbHMuaW52YXJpYW50KGV4dHJhY3RlZCAhPT0gdm9pZCAwLCAyKTtcbiAgICAgICAgICAgIHJldHVybiBleHRyYWN0ZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoY29udGV4dC50eXBlbmFtZSwgXCI6XCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShrZXlPYmplY3QpKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGtleUFyZ3NGbkZyb21TcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gICAgdmFyIGluZm8gPSBsb29rdXBTcGVjaWZpZXJJbmZvKHNwZWNpZmllcik7XG4gICAgcmV0dXJuIGluZm8ua2V5QXJnc0ZuIHx8IChpbmZvLmtleUFyZ3NGbiA9IGZ1bmN0aW9uIChhcmdzLCBfYSkge1xuICAgICAgICB2YXIgZmllbGQgPSBfYS5maWVsZCwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBmaWVsZE5hbWUgPSBfYS5maWVsZE5hbWU7XG4gICAgICAgIHZhciBjb2xsZWN0ZWQgPSBjb2xsZWN0U3BlY2lmaWVyUGF0aHMoc3BlY2lmaWVyLCBmdW5jdGlvbiAoa2V5UGF0aCkge1xuICAgICAgICAgICAgdmFyIGZpcnN0S2V5ID0ga2V5UGF0aFswXTtcbiAgICAgICAgICAgIHZhciBmaXJzdENoYXIgPSBmaXJzdEtleS5jaGFyQXQoMCk7XG4gICAgICAgICAgICBpZiAoZmlyc3RDaGFyID09PSBcIkBcIikge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZCAmJiB1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KGZpZWxkLmRpcmVjdGl2ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXJlY3RpdmVOYW1lXzEgPSBmaXJzdEtleS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBmaWVsZC5kaXJlY3RpdmVzLmZpbmQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZS52YWx1ZSA9PT0gZGlyZWN0aXZlTmFtZV8xOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZUFyZ3MgPSBkICYmIHV0aWxpdGllcy5hcmd1bWVudHNPYmplY3RGcm9tRmllbGQoZCwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZUFyZ3MgJiYgZXh0cmFjdEtleVBhdGgoZGlyZWN0aXZlQXJncywga2V5UGF0aC5zbGljZSgxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaXJzdENoYXIgPT09IFwiJFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhcmlhYmxlTmFtZSA9IGZpcnN0S2V5LnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZXMgJiYgaGFzT3duLmNhbGwodmFyaWFibGVzLCB2YXJpYWJsZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YXJLZXlQYXRoID0ga2V5UGF0aC5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyS2V5UGF0aFswXSA9IHZhcmlhYmxlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4dHJhY3RLZXlQYXRoKHZhcmlhYmxlcywgdmFyS2V5UGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4dHJhY3RLZXlQYXRoKGFyZ3MsIGtleVBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHN1ZmZpeCA9IEpTT04uc3RyaW5naWZ5KGNvbGxlY3RlZCk7XG4gICAgICAgIGlmIChhcmdzIHx8IHN1ZmZpeCAhPT0gXCJ7fVwiKSB7XG4gICAgICAgICAgICBmaWVsZE5hbWUgKz0gXCI6XCIgKyBzdWZmaXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNvbGxlY3RTcGVjaWZpZXJQYXRocyhzcGVjaWZpZXIsIGV4dHJhY3Rvcikge1xuICAgIHZhciBtZXJnZXIgPSBuZXcgdXRpbGl0aWVzLkRlZXBNZXJnZXI7XG4gICAgcmV0dXJuIGdldFNwZWNpZmllclBhdGhzKHNwZWNpZmllcikucmVkdWNlKGZ1bmN0aW9uIChjb2xsZWN0ZWQsIHBhdGgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgdG9NZXJnZSA9IGV4dHJhY3RvcihwYXRoKTtcbiAgICAgICAgaWYgKHRvTWVyZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB0b01lcmdlID0gKF9hID0ge30sIF9hW3BhdGhbaV1dID0gdG9NZXJnZSwgX2EpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sbGVjdGVkID0gbWVyZ2VyLm1lcmdlKGNvbGxlY3RlZCwgdG9NZXJnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxlY3RlZDtcbiAgICB9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn1cbmZ1bmN0aW9uIGdldFNwZWNpZmllclBhdGhzKHNwZWMpIHtcbiAgICB2YXIgaW5mbyA9IGxvb2t1cFNwZWNpZmllckluZm8oc3BlYyk7XG4gICAgaWYgKCFpbmZvLnBhdGhzKSB7XG4gICAgICAgIHZhciBwYXRoc18xID0gaW5mby5wYXRocyA9IFtdO1xuICAgICAgICB2YXIgY3VycmVudFBhdGhfMSA9IFtdO1xuICAgICAgICBzcGVjLmZvckVhY2goZnVuY3Rpb24gKHMsIGkpIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KHMpKSB7XG4gICAgICAgICAgICAgICAgZ2V0U3BlY2lmaWVyUGF0aHMocykuZm9yRWFjaChmdW5jdGlvbiAocCkgeyByZXR1cm4gcGF0aHNfMS5wdXNoKGN1cnJlbnRQYXRoXzEuY29uY2F0KHApKTsgfSk7XG4gICAgICAgICAgICAgICAgY3VycmVudFBhdGhfMS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBhdGhfMS5wdXNoKHMpO1xuICAgICAgICAgICAgICAgIGlmICghaXNBcnJheShzcGVjW2kgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aHNfMS5wdXNoKGN1cnJlbnRQYXRoXzEuc2xpY2UoMCkpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGF0aF8xLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGluZm8ucGF0aHM7XG59XG5mdW5jdGlvbiBleHRyYWN0S2V5KG9iamVjdCwga2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdFtrZXldO1xufVxuZnVuY3Rpb24gZXh0cmFjdEtleVBhdGgob2JqZWN0LCBwYXRoLCBleHRyYWN0KSB7XG4gICAgZXh0cmFjdCA9IGV4dHJhY3QgfHwgZXh0cmFjdEtleTtcbiAgICByZXR1cm4gbm9ybWFsaXplKHBhdGgucmVkdWNlKGZ1bmN0aW9uIHJlZHVjZXIob2JqLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGlzQXJyYXkob2JqKVxuICAgICAgICAgICAgPyBvYmoubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gcmVkdWNlcihjaGlsZCwga2V5KTsgfSlcbiAgICAgICAgICAgIDogb2JqICYmIGV4dHJhY3Qob2JqLCBrZXkpO1xuICAgIH0sIG9iamVjdCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChub3JtYWxpemUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsZWN0U3BlY2lmaWVyUGF0aHMoT2JqZWN0LmtleXModmFsdWUpLnNvcnQoKSwgZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIGV4dHJhY3RLZXlQYXRoKHZhbHVlLCBwYXRoKTsgfSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxudXRpbGl0aWVzLmdldFN0b3JlS2V5TmFtZS5zZXRTdHJpbmdpZnkoY2Fub25pY2FsU3RyaW5naWZ5KTtcbmZ1bmN0aW9uIGFyZ3NGcm9tRmllbGRTcGVjaWZpZXIoc3BlYykge1xuICAgIHJldHVybiBzcGVjLmFyZ3MgIT09IHZvaWQgMCA/IHNwZWMuYXJncyA6XG4gICAgICAgIHNwZWMuZmllbGQgPyB1dGlsaXRpZXMuYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKHNwZWMuZmllbGQsIHNwZWMudmFyaWFibGVzKSA6IG51bGw7XG59XG52YXIgbnVsbEtleUZpZWxkc0ZuID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdm9pZCAwOyB9O1xudmFyIHNpbXBsZUtleUFyZ3NGbiA9IGZ1bmN0aW9uIChfYXJncywgY29udGV4dCkgeyByZXR1cm4gY29udGV4dC5maWVsZE5hbWU7IH07XG52YXIgbWVyZ2VUcnVlRm4gPSBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nLCBfYSkge1xuICAgIHZhciBtZXJnZU9iamVjdHMgPSBfYS5tZXJnZU9iamVjdHM7XG4gICAgcmV0dXJuIG1lcmdlT2JqZWN0cyhleGlzdGluZywgaW5jb21pbmcpO1xufTtcbnZhciBtZXJnZUZhbHNlRm4gPSBmdW5jdGlvbiAoXywgaW5jb21pbmcpIHsgcmV0dXJuIGluY29taW5nOyB9O1xudmFyIFBvbGljaWVzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQb2xpY2llcyhjb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMudHlwZVBvbGljaWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy50b0JlQWRkZWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnN1cGVydHlwZU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5mdXp6eVN1YnR5cGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJvb3RJZHNCeVR5cGVuYW1lID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5yb290VHlwZW5hbWVzQnlJZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMudXNpbmdQb3NzaWJsZVR5cGVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdHNsaWIuX19hc3NpZ24oeyBkYXRhSWRGcm9tT2JqZWN0OiBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdCB9LCBjb25maWcpO1xuICAgICAgICB0aGlzLmNhY2hlID0gdGhpcy5jb25maWcuY2FjaGU7XG4gICAgICAgIHRoaXMuc2V0Um9vdFR5cGVuYW1lKFwiUXVlcnlcIik7XG4gICAgICAgIHRoaXMuc2V0Um9vdFR5cGVuYW1lKFwiTXV0YXRpb25cIik7XG4gICAgICAgIHRoaXMuc2V0Um9vdFR5cGVuYW1lKFwiU3Vic2NyaXB0aW9uXCIpO1xuICAgICAgICBpZiAoY29uZmlnLnBvc3NpYmxlVHlwZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9zc2libGVUeXBlcyhjb25maWcucG9zc2libGVUeXBlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy50eXBlUG9saWNpZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVHlwZVBvbGljaWVzKGNvbmZpZy50eXBlUG9saWNpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvbGljaWVzLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uIChvYmplY3QsIHBhcnRpYWxDb250ZXh0KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHBvbGljaWVzID0gdGhpcztcbiAgICAgICAgdmFyIHR5cGVuYW1lID0gcGFydGlhbENvbnRleHQgJiYgKHBhcnRpYWxDb250ZXh0LnR5cGVuYW1lIHx8XG4gICAgICAgICAgICAoKF9hID0gcGFydGlhbENvbnRleHQuc3RvcmVPYmplY3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fX3R5cGVuYW1lKSkgfHwgb2JqZWN0Ll9fdHlwZW5hbWU7XG4gICAgICAgIGlmICh0eXBlbmFtZSA9PT0gdGhpcy5yb290VHlwZW5hbWVzQnlJZC5ST09UX1FVRVJZKSB7XG4gICAgICAgICAgICByZXR1cm4gW1wiUk9PVF9RVUVSWVwiXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RvcmVPYmplY3QgPSBwYXJ0aWFsQ29udGV4dCAmJiBwYXJ0aWFsQ29udGV4dC5zdG9yZU9iamVjdCB8fCBvYmplY3Q7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHBhcnRpYWxDb250ZXh0KSwgeyB0eXBlbmFtZTogdHlwZW5hbWUsIHN0b3JlT2JqZWN0OiBzdG9yZU9iamVjdCwgcmVhZEZpZWxkOiBwYXJ0aWFsQ29udGV4dCAmJiBwYXJ0aWFsQ29udGV4dC5yZWFkRmllbGQgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplUmVhZEZpZWxkT3B0aW9ucyhhcmd1bWVudHMsIHN0b3JlT2JqZWN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9saWNpZXMucmVhZEZpZWxkKG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU6IHBvbGljaWVzLmNhY2hlW1wiZGF0YVwiXSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgICAgIHZhciBpZDtcbiAgICAgICAgdmFyIHBvbGljeSA9IHR5cGVuYW1lICYmIHRoaXMuZ2V0VHlwZVBvbGljeSh0eXBlbmFtZSk7XG4gICAgICAgIHZhciBrZXlGbiA9IHBvbGljeSAmJiBwb2xpY3kua2V5Rm4gfHwgdGhpcy5jb25maWcuZGF0YUlkRnJvbU9iamVjdDtcbiAgICAgICAgd2hpbGUgKGtleUZuKSB7XG4gICAgICAgICAgICB2YXIgc3BlY2lmaWVyT3JJZCA9IGtleUZuKG9iamVjdCwgY29udGV4dCk7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShzcGVjaWZpZXJPcklkKSkge1xuICAgICAgICAgICAgICAgIGtleUZuID0ga2V5RmllbGRzRm5Gcm9tU3BlY2lmaWVyKHNwZWNpZmllck9ySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWQgPSBzcGVjaWZpZXJPcklkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlkID0gaWQgPyBTdHJpbmcoaWQpIDogdm9pZCAwO1xuICAgICAgICByZXR1cm4gY29udGV4dC5rZXlPYmplY3QgPyBbaWQsIGNvbnRleHQua2V5T2JqZWN0XSA6IFtpZF07XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuYWRkVHlwZVBvbGljaWVzID0gZnVuY3Rpb24gKHR5cGVQb2xpY2llcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBPYmplY3Qua2V5cyh0eXBlUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24gKHR5cGVuYW1lKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0eXBlUG9saWNpZXNbdHlwZW5hbWVdLCBxdWVyeVR5cGUgPSBfYS5xdWVyeVR5cGUsIG11dGF0aW9uVHlwZSA9IF9hLm11dGF0aW9uVHlwZSwgc3Vic2NyaXB0aW9uVHlwZSA9IF9hLnN1YnNjcmlwdGlvblR5cGUsIGluY29taW5nID0gdHNsaWIuX19yZXN0KF9hLCBbXCJxdWVyeVR5cGVcIiwgXCJtdXRhdGlvblR5cGVcIiwgXCJzdWJzY3JpcHRpb25UeXBlXCJdKTtcbiAgICAgICAgICAgIGlmIChxdWVyeVR5cGUpXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0Um9vdFR5cGVuYW1lKFwiUXVlcnlcIiwgdHlwZW5hbWUpO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRSb290VHlwZW5hbWUoXCJNdXRhdGlvblwiLCB0eXBlbmFtZSk7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRSb290VHlwZW5hbWUoXCJTdWJzY3JpcHRpb25cIiwgdHlwZW5hbWUpO1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKF90aGlzLnRvQmVBZGRlZCwgdHlwZW5hbWUpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudG9CZUFkZGVkW3R5cGVuYW1lXS5wdXNoKGluY29taW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnRvQmVBZGRlZFt0eXBlbmFtZV0gPSBbaW5jb21pbmddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS51cGRhdGVUeXBlUG9saWN5ID0gZnVuY3Rpb24gKHR5cGVuYW1lLCBpbmNvbWluZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSB0aGlzLmdldFR5cGVQb2xpY3kodHlwZW5hbWUpO1xuICAgICAgICB2YXIga2V5RmllbGRzID0gaW5jb21pbmcua2V5RmllbGRzLCBmaWVsZHMgPSBpbmNvbWluZy5maWVsZHM7XG4gICAgICAgIGZ1bmN0aW9uIHNldE1lcmdlKGV4aXN0aW5nLCBtZXJnZSkge1xuICAgICAgICAgICAgZXhpc3RpbmcubWVyZ2UgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBtZXJnZSA9PT0gXCJmdW5jdGlvblwiID8gbWVyZ2UgOlxuICAgICAgICAgICAgICAgICAgICBtZXJnZSA9PT0gdHJ1ZSA/IG1lcmdlVHJ1ZUZuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlID09PSBmYWxzZSA/IG1lcmdlRmFsc2VGbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubWVyZ2U7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLm1lcmdlKTtcbiAgICAgICAgZXhpc3Rpbmcua2V5Rm4gPVxuICAgICAgICAgICAga2V5RmllbGRzID09PSBmYWxzZSA/IG51bGxLZXlGaWVsZHNGbiA6XG4gICAgICAgICAgICAgICAgaXNBcnJheShrZXlGaWVsZHMpID8ga2V5RmllbGRzRm5Gcm9tU3BlY2lmaWVyKGtleUZpZWxkcykgOlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Yga2V5RmllbGRzID09PSBcImZ1bmN0aW9uXCIgPyBrZXlGaWVsZHMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcua2V5Rm47XG4gICAgICAgIGlmIChmaWVsZHMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaChmdW5jdGlvbiAoZmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nID0gX3RoaXMuZ2V0RmllbGRQb2xpY3kodHlwZW5hbWUsIGZpZWxkTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGluY29taW5nID0gZmllbGRzW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmNvbWluZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnJlYWQgPSBpbmNvbWluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlBcmdzID0gaW5jb21pbmcua2V5QXJncywgcmVhZCA9IGluY29taW5nLnJlYWQsIG1lcmdlID0gaW5jb21pbmcubWVyZ2U7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmtleUZuID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleUFyZ3MgPT09IGZhbHNlID8gc2ltcGxlS2V5QXJnc0ZuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FycmF5KGtleUFyZ3MpID8ga2V5QXJnc0ZuRnJvbVNwZWNpZmllcihrZXlBcmdzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBrZXlBcmdzID09PSBcImZ1bmN0aW9uXCIgPyBrZXlBcmdzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmtleUZuO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlYWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcucmVhZCA9IHJlYWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0TWVyZ2UoZXhpc3RpbmcsIG1lcmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nLnJlYWQgJiYgZXhpc3RpbmcubWVyZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcua2V5Rm4gPSBleGlzdGluZy5rZXlGbiB8fCBzaW1wbGVLZXlBcmdzRm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5zZXRSb290VHlwZW5hbWUgPSBmdW5jdGlvbiAod2hpY2gsIHR5cGVuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlbmFtZSA9PT0gdm9pZCAwKSB7IHR5cGVuYW1lID0gd2hpY2g7IH1cbiAgICAgICAgdmFyIHJvb3RJZCA9IFwiUk9PVF9cIiArIHdoaWNoLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHZhciBvbGQgPSB0aGlzLnJvb3RUeXBlbmFtZXNCeUlkW3Jvb3RJZF07XG4gICAgICAgIGlmICh0eXBlbmFtZSAhPT0gb2xkKSB7XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoIW9sZCB8fCBvbGQgPT09IHdoaWNoLCBcIkNhbm5vdCBjaGFuZ2Ugcm9vdCBcIi5jb25jYXQod2hpY2gsIFwiIF9fdHlwZW5hbWUgbW9yZSB0aGFuIG9uY2VcIikpIDogZ2xvYmFscy5pbnZhcmlhbnQoIW9sZCB8fCBvbGQgPT09IHdoaWNoLCAzKTtcbiAgICAgICAgICAgIGlmIChvbGQpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucm9vdElkc0J5VHlwZW5hbWVbb2xkXTtcbiAgICAgICAgICAgIHRoaXMucm9vdElkc0J5VHlwZW5hbWVbdHlwZW5hbWVdID0gcm9vdElkO1xuICAgICAgICAgICAgdGhpcy5yb290VHlwZW5hbWVzQnlJZFtyb290SWRdID0gdHlwZW5hbWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5hZGRQb3NzaWJsZVR5cGVzID0gZnVuY3Rpb24gKHBvc3NpYmxlVHlwZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy51c2luZ1Bvc3NpYmxlVHlwZXMgPSB0cnVlO1xuICAgICAgICBPYmplY3Qua2V5cyhwb3NzaWJsZVR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChzdXBlcnR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmdldFN1cGVydHlwZVNldChzdXBlcnR5cGUsIHRydWUpO1xuICAgICAgICAgICAgcG9zc2libGVUeXBlc1tzdXBlcnR5cGVdLmZvckVhY2goZnVuY3Rpb24gKHN1YnR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nZXRTdXBlcnR5cGVTZXQoc3VidHlwZSwgdHJ1ZSkuYWRkKHN1cGVydHlwZSk7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gc3VidHlwZS5tYXRjaChUeXBlT3JGaWVsZE5hbWVSZWdFeHApO1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2ggfHwgbWF0Y2hbMF0gIT09IHN1YnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZnV6enlTdWJ0eXBlcy5zZXQoc3VidHlwZSwgbmV3IFJlZ0V4cChzdWJ0eXBlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldFR5cGVQb2xpY3kgPSBmdW5jdGlvbiAodHlwZW5hbWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFoYXNPd24uY2FsbCh0aGlzLnR5cGVQb2xpY2llcywgdHlwZW5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgcG9saWN5XzEgPSB0aGlzLnR5cGVQb2xpY2llc1t0eXBlbmFtZV0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgcG9saWN5XzEuZmllbGRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHZhciBzdXBlcnR5cGVzID0gdGhpcy5zdXBlcnR5cGVNYXAuZ2V0KHR5cGVuYW1lKTtcbiAgICAgICAgICAgIGlmIChzdXBlcnR5cGVzICYmIHN1cGVydHlwZXMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHN1cGVydHlwZXMuZm9yRWFjaChmdW5jdGlvbiAoc3VwZXJ0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLmdldFR5cGVQb2xpY3koc3VwZXJ0eXBlKSwgZmllbGRzID0gX2EuZmllbGRzLCByZXN0ID0gdHNsaWIuX19yZXN0KF9hLCBbXCJmaWVsZHNcIl0pO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHBvbGljeV8xLCByZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwb2xpY3lfMS5maWVsZHMsIGZpZWxkcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluYm94ID0gdGhpcy50b0JlQWRkZWRbdHlwZW5hbWVdO1xuICAgICAgICBpZiAoaW5ib3ggJiYgaW5ib3gubGVuZ3RoKSB7XG4gICAgICAgICAgICBpbmJveC5zcGxpY2UoMCkuZm9yRWFjaChmdW5jdGlvbiAocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVHlwZVBvbGljeSh0eXBlbmFtZSwgcG9saWN5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGVQb2xpY2llc1t0eXBlbmFtZV07XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZ2V0RmllbGRQb2xpY3kgPSBmdW5jdGlvbiAodHlwZW5hbWUsIGZpZWxkTmFtZSwgY3JlYXRlSWZNaXNzaW5nKSB7XG4gICAgICAgIGlmICh0eXBlbmFtZSkge1xuICAgICAgICAgICAgdmFyIGZpZWxkUG9saWNpZXMgPSB0aGlzLmdldFR5cGVQb2xpY3kodHlwZW5hbWUpLmZpZWxkcztcbiAgICAgICAgICAgIHJldHVybiBmaWVsZFBvbGljaWVzW2ZpZWxkTmFtZV0gfHwgKGNyZWF0ZUlmTWlzc2luZyAmJiAoZmllbGRQb2xpY2llc1tmaWVsZE5hbWVdID0gT2JqZWN0LmNyZWF0ZShudWxsKSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZ2V0U3VwZXJ0eXBlU2V0ID0gZnVuY3Rpb24gKHN1YnR5cGUsIGNyZWF0ZUlmTWlzc2luZykge1xuICAgICAgICB2YXIgc3VwZXJ0eXBlU2V0ID0gdGhpcy5zdXBlcnR5cGVNYXAuZ2V0KHN1YnR5cGUpO1xuICAgICAgICBpZiAoIXN1cGVydHlwZVNldCAmJiBjcmVhdGVJZk1pc3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3VwZXJ0eXBlTWFwLnNldChzdWJ0eXBlLCBzdXBlcnR5cGVTZXQgPSBuZXcgU2V0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBlcnR5cGVTZXQ7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZnJhZ21lbnRNYXRjaGVzID0gZnVuY3Rpb24gKGZyYWdtZW50LCB0eXBlbmFtZSwgcmVzdWx0LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFmcmFnbWVudC50eXBlQ29uZGl0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICghdHlwZW5hbWUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBzdXBlcnR5cGUgPSBmcmFnbWVudC50eXBlQ29uZGl0aW9uLm5hbWUudmFsdWU7XG4gICAgICAgIGlmICh0eXBlbmFtZSA9PT0gc3VwZXJ0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh0aGlzLnVzaW5nUG9zc2libGVUeXBlcyAmJlxuICAgICAgICAgICAgdGhpcy5zdXBlcnR5cGVNYXAuaGFzKHN1cGVydHlwZSkpIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZVN1cGVydHlwZVNldCA9IHRoaXMuZ2V0U3VwZXJ0eXBlU2V0KHR5cGVuYW1lLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciB3b3JrUXVldWVfMSA9IFt0eXBlbmFtZVN1cGVydHlwZVNldF07XG4gICAgICAgICAgICB2YXIgbWF5YmVFbnF1ZXVlXzEgPSBmdW5jdGlvbiAoc3VidHlwZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdXBlcnR5cGVTZXQgPSBfdGhpcy5nZXRTdXBlcnR5cGVTZXQoc3VidHlwZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChzdXBlcnR5cGVTZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJ0eXBlU2V0LnNpemUgJiZcbiAgICAgICAgICAgICAgICAgICAgd29ya1F1ZXVlXzEuaW5kZXhPZihzdXBlcnR5cGVTZXQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB3b3JrUXVldWVfMS5wdXNoKHN1cGVydHlwZVNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBuZWVkVG9DaGVja0Z1enp5U3VidHlwZXMgPSAhIShyZXN1bHQgJiYgdGhpcy5mdXp6eVN1YnR5cGVzLnNpemUpO1xuICAgICAgICAgICAgdmFyIGNoZWNraW5nRnV6enlTdWJ0eXBlcyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3JrUXVldWVfMS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBzdXBlcnR5cGVTZXQgPSB3b3JrUXVldWVfMVtpXTtcbiAgICAgICAgICAgICAgICBpZiAoc3VwZXJ0eXBlU2V0LmhhcyhzdXBlcnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdHlwZW5hbWVTdXBlcnR5cGVTZXQuaGFzKHN1cGVydHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2luZ0Z1enp5U3VidHlwZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJJbmZlcnJpbmcgc3VidHlwZSBcIi5jb25jYXQodHlwZW5hbWUsIFwiIG9mIHN1cGVydHlwZSBcIikuY29uY2F0KHN1cGVydHlwZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW5hbWVTdXBlcnR5cGVTZXQuYWRkKHN1cGVydHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN1cGVydHlwZVNldC5mb3JFYWNoKG1heWJlRW5xdWV1ZV8xKTtcbiAgICAgICAgICAgICAgICBpZiAobmVlZFRvQ2hlY2tGdXp6eVN1YnR5cGVzICYmXG4gICAgICAgICAgICAgICAgICAgIGkgPT09IHdvcmtRdWV1ZV8xLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0TWF0Y2hlc1Jlc3VsdChmcmFnbWVudC5zZWxlY3Rpb25TZXQsIHJlc3VsdCwgdmFyaWFibGVzKSkge1xuICAgICAgICAgICAgICAgICAgICBuZWVkVG9DaGVja0Z1enp5U3VidHlwZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tpbmdGdXp6eVN1YnR5cGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mdXp6eVN1YnR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHJlZ0V4cCwgZnV6enlTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IHR5cGVuYW1lLm1hdGNoKHJlZ0V4cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMF0gPT09IHR5cGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVFbnF1ZXVlXzEoZnV6enlTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmhhc0tleUFyZ3MgPSBmdW5jdGlvbiAodHlwZW5hbWUsIGZpZWxkTmFtZSkge1xuICAgICAgICB2YXIgcG9saWN5ID0gdGhpcy5nZXRGaWVsZFBvbGljeSh0eXBlbmFtZSwgZmllbGROYW1lLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiAhIShwb2xpY3kgJiYgcG9saWN5LmtleUZuKTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRTdG9yZUZpZWxkTmFtZSA9IGZ1bmN0aW9uIChmaWVsZFNwZWMpIHtcbiAgICAgICAgdmFyIHR5cGVuYW1lID0gZmllbGRTcGVjLnR5cGVuYW1lLCBmaWVsZE5hbWUgPSBmaWVsZFNwZWMuZmllbGROYW1lO1xuICAgICAgICB2YXIgcG9saWN5ID0gdGhpcy5nZXRGaWVsZFBvbGljeSh0eXBlbmFtZSwgZmllbGROYW1lLCBmYWxzZSk7XG4gICAgICAgIHZhciBzdG9yZUZpZWxkTmFtZTtcbiAgICAgICAgdmFyIGtleUZuID0gcG9saWN5ICYmIHBvbGljeS5rZXlGbjtcbiAgICAgICAgaWYgKGtleUZuICYmIHR5cGVuYW1lKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlbmFtZTogdHlwZW5hbWUsXG4gICAgICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWUsXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkU3BlYy5maWVsZCB8fCBudWxsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogZmllbGRTcGVjLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3NGcm9tRmllbGRTcGVjaWZpZXIoZmllbGRTcGVjKTtcbiAgICAgICAgICAgIHdoaWxlIChrZXlGbikge1xuICAgICAgICAgICAgICAgIHZhciBzcGVjaWZpZXJPclN0cmluZyA9IGtleUZuKGFyZ3MsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHNwZWNpZmllck9yU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXlGbiA9IGtleUFyZ3NGbkZyb21TcGVjaWZpZXIoc3BlY2lmaWVyT3JTdHJpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVGaWVsZE5hbWUgPSBzcGVjaWZpZXJPclN0cmluZyB8fCBmaWVsZE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RvcmVGaWVsZE5hbWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgc3RvcmVGaWVsZE5hbWUgPSBmaWVsZFNwZWMuZmllbGRcbiAgICAgICAgICAgICAgICA/IHV0aWxpdGllcy5zdG9yZUtleU5hbWVGcm9tRmllbGQoZmllbGRTcGVjLmZpZWxkLCBmaWVsZFNwZWMudmFyaWFibGVzKVxuICAgICAgICAgICAgICAgIDogdXRpbGl0aWVzLmdldFN0b3JlS2V5TmFtZShmaWVsZE5hbWUsIGFyZ3NGcm9tRmllbGRTcGVjaWZpZXIoZmllbGRTcGVjKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0b3JlRmllbGROYW1lID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGROYW1lID09PSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKVxuICAgICAgICAgICAgPyBzdG9yZUZpZWxkTmFtZVxuICAgICAgICAgICAgOiBmaWVsZE5hbWUgKyBcIjpcIiArIHN0b3JlRmllbGROYW1lO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLnJlYWRGaWVsZCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBvYmplY3RPclJlZmVyZW5jZSA9IG9wdGlvbnMuZnJvbTtcbiAgICAgICAgaWYgKCFvYmplY3RPclJlZmVyZW5jZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIG5hbWVPckZpZWxkID0gb3B0aW9ucy5maWVsZCB8fCBvcHRpb25zLmZpZWxkTmFtZTtcbiAgICAgICAgaWYgKCFuYW1lT3JGaWVsZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKG9wdGlvbnMudHlwZW5hbWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lID0gY29udGV4dC5zdG9yZS5nZXRGaWVsZFZhbHVlKG9iamVjdE9yUmVmZXJlbmNlLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICBpZiAodHlwZW5hbWUpXG4gICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlbmFtZSA9IHR5cGVuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdG9yZUZpZWxkTmFtZSA9IHRoaXMuZ2V0U3RvcmVGaWVsZE5hbWUob3B0aW9ucyk7XG4gICAgICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gY29udGV4dC5zdG9yZS5nZXRGaWVsZFZhbHVlKG9iamVjdE9yUmVmZXJlbmNlLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0aGlzLmdldEZpZWxkUG9saWN5KG9wdGlvbnMudHlwZW5hbWUsIGZpZWxkTmFtZSwgZmFsc2UpO1xuICAgICAgICB2YXIgcmVhZCA9IHBvbGljeSAmJiBwb2xpY3kucmVhZDtcbiAgICAgICAgaWYgKHJlYWQpIHtcbiAgICAgICAgICAgIHZhciByZWFkT3B0aW9ucyA9IG1ha2VGaWVsZEZ1bmN0aW9uT3B0aW9ucyh0aGlzLCBvYmplY3RPclJlZmVyZW5jZSwgb3B0aW9ucywgY29udGV4dCwgY29udGV4dC5zdG9yZS5nZXRTdG9yYWdlKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmplY3RPclJlZmVyZW5jZSlcbiAgICAgICAgICAgICAgICA/IG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmXG4gICAgICAgICAgICAgICAgOiBvYmplY3RPclJlZmVyZW5jZSwgc3RvcmVGaWVsZE5hbWUpKTtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVNsb3Qud2l0aFZhbHVlKHRoaXMuY2FjaGUsIHJlYWQsIFtleGlzdGluZywgcmVhZE9wdGlvbnNdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZ2V0UmVhZEZ1bmN0aW9uID0gZnVuY3Rpb24gKHR5cGVuYW1lLCBmaWVsZE5hbWUpIHtcbiAgICAgICAgdmFyIHBvbGljeSA9IHRoaXMuZ2V0RmllbGRQb2xpY3kodHlwZW5hbWUsIGZpZWxkTmFtZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gcG9saWN5ICYmIHBvbGljeS5yZWFkO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldE1lcmdlRnVuY3Rpb24gPSBmdW5jdGlvbiAocGFyZW50VHlwZW5hbWUsIGZpZWxkTmFtZSwgY2hpbGRUeXBlbmFtZSkge1xuICAgICAgICB2YXIgcG9saWN5ID0gdGhpcy5nZXRGaWVsZFBvbGljeShwYXJlbnRUeXBlbmFtZSwgZmllbGROYW1lLCBmYWxzZSk7XG4gICAgICAgIHZhciBtZXJnZSA9IHBvbGljeSAmJiBwb2xpY3kubWVyZ2U7XG4gICAgICAgIGlmICghbWVyZ2UgJiYgY2hpbGRUeXBlbmFtZSkge1xuICAgICAgICAgICAgcG9saWN5ID0gdGhpcy5nZXRUeXBlUG9saWN5KGNoaWxkVHlwZW5hbWUpO1xuICAgICAgICAgICAgbWVyZ2UgPSBwb2xpY3kgJiYgcG9saWN5Lm1lcmdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXJnZTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5ydW5NZXJnZUZ1bmN0aW9uID0gZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZywgX2EsIGNvbnRleHQsIHN0b3JhZ2UpIHtcbiAgICAgICAgdmFyIGZpZWxkID0gX2EuZmllbGQsIHR5cGVuYW1lID0gX2EudHlwZW5hbWUsIG1lcmdlID0gX2EubWVyZ2U7XG4gICAgICAgIGlmIChtZXJnZSA9PT0gbWVyZ2VUcnVlRm4pIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlTWVyZ2VPYmplY3RzRnVuY3Rpb24oY29udGV4dC5zdG9yZSkoZXhpc3RpbmcsIGluY29taW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVyZ2UgPT09IG1lcmdlRmFsc2VGbikge1xuICAgICAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0Lm92ZXJ3cml0ZSkge1xuICAgICAgICAgICAgZXhpc3RpbmcgPSB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZywgbWFrZUZpZWxkRnVuY3Rpb25PcHRpb25zKHRoaXMsIHZvaWQgMCwgeyB0eXBlbmFtZTogdHlwZW5hbWUsIGZpZWxkTmFtZTogZmllbGQubmFtZS52YWx1ZSwgZmllbGQ6IGZpZWxkLCB2YXJpYWJsZXM6IGNvbnRleHQudmFyaWFibGVzIH0sIGNvbnRleHQsIHN0b3JhZ2UgfHwgT2JqZWN0LmNyZWF0ZShudWxsKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIFBvbGljaWVzO1xufSgpKTtcbmZ1bmN0aW9uIG1ha2VGaWVsZEZ1bmN0aW9uT3B0aW9ucyhwb2xpY2llcywgb2JqZWN0T3JSZWZlcmVuY2UsIGZpZWxkU3BlYywgY29udGV4dCwgc3RvcmFnZSkge1xuICAgIHZhciBzdG9yZUZpZWxkTmFtZSA9IHBvbGljaWVzLmdldFN0b3JlRmllbGROYW1lKGZpZWxkU3BlYyk7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpO1xuICAgIHZhciB2YXJpYWJsZXMgPSBmaWVsZFNwZWMudmFyaWFibGVzIHx8IGNvbnRleHQudmFyaWFibGVzO1xuICAgIHZhciBfYSA9IGNvbnRleHQuc3RvcmUsIHRvUmVmZXJlbmNlID0gX2EudG9SZWZlcmVuY2UsIGNhblJlYWQgPSBfYS5jYW5SZWFkO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFyZ3M6IGFyZ3NGcm9tRmllbGRTcGVjaWZpZXIoZmllbGRTcGVjKSxcbiAgICAgICAgZmllbGQ6IGZpZWxkU3BlYy5maWVsZCB8fCBudWxsLFxuICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZSxcbiAgICAgICAgc3RvcmVGaWVsZE5hbWU6IHN0b3JlRmllbGROYW1lLFxuICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgaXNSZWZlcmVuY2U6IHV0aWxpdGllcy5pc1JlZmVyZW5jZSxcbiAgICAgICAgdG9SZWZlcmVuY2U6IHRvUmVmZXJlbmNlLFxuICAgICAgICBzdG9yYWdlOiBzdG9yYWdlLFxuICAgICAgICBjYWNoZTogcG9saWNpZXMuY2FjaGUsXG4gICAgICAgIGNhblJlYWQ6IGNhblJlYWQsXG4gICAgICAgIHJlYWRGaWVsZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBvbGljaWVzLnJlYWRGaWVsZChub3JtYWxpemVSZWFkRmllbGRPcHRpb25zKGFyZ3VtZW50cywgb2JqZWN0T3JSZWZlcmVuY2UsIHZhcmlhYmxlcyksIGNvbnRleHQpO1xuICAgICAgICB9LFxuICAgICAgICBtZXJnZU9iamVjdHM6IG1ha2VNZXJnZU9iamVjdHNGdW5jdGlvbihjb250ZXh0LnN0b3JlKSxcbiAgICB9O1xufVxuZnVuY3Rpb24gbm9ybWFsaXplUmVhZEZpZWxkT3B0aW9ucyhyZWFkRmllbGRBcmdzLCBvYmplY3RPclJlZmVyZW5jZSwgdmFyaWFibGVzKSB7XG4gICAgdmFyIGZpZWxkTmFtZU9yT3B0aW9ucyA9IHJlYWRGaWVsZEFyZ3NbMF0sIGZyb20gPSByZWFkRmllbGRBcmdzWzFdLCBhcmdjID0gcmVhZEZpZWxkQXJncy5sZW5ndGg7XG4gICAgdmFyIG9wdGlvbnM7XG4gICAgaWYgKHR5cGVvZiBmaWVsZE5hbWVPck9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lT3JPcHRpb25zLFxuICAgICAgICAgICAgZnJvbTogYXJnYyA+IDEgPyBmcm9tIDogb2JqZWN0T3JSZWZlcmVuY2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdHNsaWIuX19hc3NpZ24oe30sIGZpZWxkTmFtZU9yT3B0aW9ucyk7XG4gICAgICAgIGlmICghaGFzT3duLmNhbGwob3B0aW9ucywgXCJmcm9tXCIpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZyb20gPSBvYmplY3RPclJlZmVyZW5jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoX19ERVZfXyAmJiBvcHRpb25zLmZyb20gPT09IHZvaWQgMCkge1xuICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJVbmRlZmluZWQgJ2Zyb20nIHBhc3NlZCB0byByZWFkRmllbGQgd2l0aCBhcmd1bWVudHMgXCIuY29uY2F0KHV0aWxpdGllcy5zdHJpbmdpZnlGb3JEaXNwbGF5KEFycmF5LmZyb20ocmVhZEZpZWxkQXJncykpKSk7XG4gICAgfVxuICAgIGlmICh2b2lkIDAgPT09IG9wdGlvbnMudmFyaWFibGVzKSB7XG4gICAgICAgIG9wdGlvbnMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbn1cbmZ1bmN0aW9uIG1ha2VNZXJnZU9iamVjdHNGdW5jdGlvbihzdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZU9iamVjdHMoZXhpc3RpbmcsIGluY29taW5nKSB7XG4gICAgICAgIGlmIChpc0FycmF5KGV4aXN0aW5nKSB8fCBpc0FycmF5KGluY29taW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiQ2Fubm90IGF1dG9tYXRpY2FsbHkgbWVyZ2UgYXJyYXlzXCIpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QoZXhpc3RpbmcpICYmXG4gICAgICAgICAgICB1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KGluY29taW5nKSkge1xuICAgICAgICAgICAgdmFyIGVUeXBlID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShleGlzdGluZywgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICAgICAgdmFyIGlUeXBlID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShpbmNvbWluZywgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICAgICAgdmFyIHR5cGVzRGlmZmVyID0gZVR5cGUgJiYgaVR5cGUgJiYgZVR5cGUgIT09IGlUeXBlO1xuICAgICAgICAgICAgaWYgKHR5cGVzRGlmZmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShleGlzdGluZykgJiZcbiAgICAgICAgICAgICAgICBzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChpbmNvbWluZykpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5tZXJnZShleGlzdGluZy5fX3JlZiwgaW5jb21pbmcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChleGlzdGluZykgJiZcbiAgICAgICAgICAgICAgICB1dGlsaXRpZXMuaXNSZWZlcmVuY2UoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUubWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLl9fcmVmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QoZXhpc3RpbmcpICYmXG4gICAgICAgICAgICAgICAgc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBleGlzdGluZyksIGluY29taW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dEZsYXZvcihjb250ZXh0LCBjbGllbnRPbmx5LCBkZWZlcnJlZCkge1xuICAgIHZhciBrZXkgPSBcIlwiLmNvbmNhdChjbGllbnRPbmx5KS5jb25jYXQoZGVmZXJyZWQpO1xuICAgIHZhciBmbGF2b3JlZCA9IGNvbnRleHQuZmxhdm9ycy5nZXQoa2V5KTtcbiAgICBpZiAoIWZsYXZvcmVkKSB7XG4gICAgICAgIGNvbnRleHQuZmxhdm9ycy5zZXQoa2V5LCBmbGF2b3JlZCA9IChjb250ZXh0LmNsaWVudE9ubHkgPT09IGNsaWVudE9ubHkgJiZcbiAgICAgICAgICAgIGNvbnRleHQuZGVmZXJyZWQgPT09IGRlZmVycmVkKSA/IGNvbnRleHQgOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIHsgY2xpZW50T25seTogY2xpZW50T25seSwgZGVmZXJyZWQ6IGRlZmVycmVkIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZsYXZvcmVkO1xufVxudmFyIFN0b3JlV3JpdGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdG9yZVdyaXRlcihjYWNoZSwgcmVhZGVyLCBmcmFnbWVudHMpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICB0aGlzLnJlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgdGhpcy5mcmFnbWVudHMgPSBmcmFnbWVudHM7XG4gICAgfVxuICAgIFN0b3JlV3JpdGVyLnByb3RvdHlwZS53cml0ZVRvU3RvcmUgPSBmdW5jdGlvbiAoc3RvcmUsIF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBxdWVyeSA9IF9hLnF1ZXJ5LCByZXN1bHQgPSBfYS5yZXN1bHQsIGRhdGFJZCA9IF9hLmRhdGFJZCwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBvdmVyd3JpdGUgPSBfYS5vdmVyd3JpdGU7XG4gICAgICAgIHZhciBvcGVyYXRpb25EZWZpbml0aW9uID0gdXRpbGl0aWVzLmdldE9wZXJhdGlvbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICB2YXIgbWVyZ2VyID0gbWFrZVByb2Nlc3NlZEZpZWxkc01lcmdlcigpO1xuICAgICAgICB2YXJpYWJsZXMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdXRpbGl0aWVzLmdldERlZmF1bHRWYWx1ZXMob3BlcmF0aW9uRGVmaW5pdGlvbikpLCB2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgY29udGV4dCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHsgc3RvcmU6IHN0b3JlLCB3cml0dGVuOiBPYmplY3QuY3JlYXRlKG51bGwpLCBtZXJnZTogZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXJnZXIubWVyZ2UoZXhpc3RpbmcsIGluY29taW5nKTtcbiAgICAgICAgICAgIH0sIHZhcmlhYmxlczogdmFyaWFibGVzLCB2YXJTdHJpbmc6IGNhbm9uaWNhbFN0cmluZ2lmeSh2YXJpYWJsZXMpIH0sIGV4dHJhY3RGcmFnbWVudENvbnRleHQocXVlcnksIHRoaXMuZnJhZ21lbnRzKSksIHsgb3ZlcndyaXRlOiAhIW92ZXJ3cml0ZSwgaW5jb21pbmdCeUlkOiBuZXcgTWFwLCBjbGllbnRPbmx5OiBmYWxzZSwgZGVmZXJyZWQ6IGZhbHNlLCBmbGF2b3JzOiBuZXcgTWFwIH0pO1xuICAgICAgICB2YXIgcmVmID0gdGhpcy5wcm9jZXNzU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0IHx8IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBkYXRhSWQ6IGRhdGFJZCxcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDogb3BlcmF0aW9uRGVmaW5pdGlvbi5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICBtZXJnZVRyZWU6IHsgbWFwOiBuZXcgTWFwIH0sXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNSZWZlcmVuY2UocmVmKSkge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiQ291bGQgbm90IGlkZW50aWZ5IG9iamVjdCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNyk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5pbmNvbWluZ0J5SWQuZm9yRWFjaChmdW5jdGlvbiAoX2EsIGRhdGFJZCkge1xuICAgICAgICAgICAgdmFyIHN0b3JlT2JqZWN0ID0gX2Euc3RvcmVPYmplY3QsIG1lcmdlVHJlZSA9IF9hLm1lcmdlVHJlZSwgZmllbGROb2RlU2V0ID0gX2EuZmllbGROb2RlU2V0O1xuICAgICAgICAgICAgdmFyIGVudGl0eVJlZiA9IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlKGRhdGFJZCk7XG4gICAgICAgICAgICBpZiAobWVyZ2VUcmVlICYmIG1lcmdlVHJlZS5tYXAuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHZhciBhcHBsaWVkID0gX3RoaXMuYXBwbHlNZXJnZXMobWVyZ2VUcmVlLCBlbnRpdHlSZWYsIHN0b3JlT2JqZWN0LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKGFwcGxpZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RvcmVPYmplY3QgPSBhcHBsaWVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fREVWX18gJiYgIWNvbnRleHQub3ZlcndyaXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkc1dpdGhTZWxlY3Rpb25TZXRzXzEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgICAgIGZpZWxkTm9kZVNldC5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNXaXRoU2VsZWN0aW9uU2V0c18xW2ZpZWxkLm5hbWUudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBoYXNTZWxlY3Rpb25TZXRfMSA9IGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmllbGRzV2l0aFNlbGVjdGlvblNldHNfMVtmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKV0gPT09IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzTWVyZ2VGdW5jdGlvbl8xID0gZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZFRyZWUgPSBtZXJnZVRyZWUgJiYgbWVyZ2VUcmVlLm1hcC5nZXQoc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQm9vbGVhbihjaGlsZFRyZWUgJiYgY2hpbGRUcmVlLmluZm8gJiYgY2hpbGRUcmVlLmluZm8ubWVyZ2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RvcmVPYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNTZWxlY3Rpb25TZXRfMShzdG9yZUZpZWxkTmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFoYXNNZXJnZUZ1bmN0aW9uXzEoc3RvcmVGaWVsZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuQWJvdXREYXRhTG9zcyhlbnRpdHlSZWYsIHN0b3JlT2JqZWN0LCBzdG9yZUZpZWxkTmFtZSwgY29udGV4dC5zdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0b3JlLm1lcmdlKGRhdGFJZCwgc3RvcmVPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3RvcmUucmV0YWluKHJlZi5fX3JlZik7XG4gICAgICAgIHJldHVybiByZWY7XG4gICAgfTtcbiAgICBTdG9yZVdyaXRlci5wcm90b3R5cGUucHJvY2Vzc1NlbGVjdGlvblNldCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGF0YUlkID0gX2EuZGF0YUlkLCByZXN1bHQgPSBfYS5yZXN1bHQsIHNlbGVjdGlvblNldCA9IF9hLnNlbGVjdGlvblNldCwgY29udGV4dCA9IF9hLmNvbnRleHQsIG1lcmdlVHJlZSA9IF9hLm1lcmdlVHJlZTtcbiAgICAgICAgdmFyIHBvbGljaWVzID0gdGhpcy5jYWNoZS5wb2xpY2llcztcbiAgICAgICAgdmFyIGluY29taW5nID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIHR5cGVuYW1lID0gKGRhdGFJZCAmJiBwb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZFtkYXRhSWRdKSB8fFxuICAgICAgICAgICAgdXRpbGl0aWVzLmdldFR5cGVuYW1lRnJvbVJlc3VsdChyZXN1bHQsIHNlbGVjdGlvblNldCwgY29udGV4dC5mcmFnbWVudE1hcCkgfHxcbiAgICAgICAgICAgIChkYXRhSWQgJiYgY29udGV4dC5zdG9yZS5nZXQoZGF0YUlkLCBcIl9fdHlwZW5hbWVcIikpO1xuICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHR5cGVuYW1lKSB7XG4gICAgICAgICAgICBpbmNvbWluZy5fX3R5cGVuYW1lID0gdHlwZW5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlYWRGaWVsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplUmVhZEZpZWxkT3B0aW9ucyhhcmd1bWVudHMsIGluY29taW5nLCBjb250ZXh0LnZhcmlhYmxlcyk7XG4gICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9wdGlvbnMuZnJvbSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IGNvbnRleHQuaW5jb21pbmdCeUlkLmdldChvcHRpb25zLmZyb20uX19yZWYpO1xuICAgICAgICAgICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRfMSA9IHBvbGljaWVzLnJlYWRGaWVsZCh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZnJvbTogaW5mby5zdG9yZU9iamVjdCB9KSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRfMSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XzE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcG9saWNpZXMucmVhZEZpZWxkKG9wdGlvbnMsIGNvbnRleHQpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZmllbGROb2RlU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmZsYXR0ZW5GaWVsZHMoc2VsZWN0aW9uU2V0LCByZXN1bHQsIGNvbnRleHQsIHR5cGVuYW1lKS5mb3JFYWNoKGZ1bmN0aW9uIChjb250ZXh0LCBmaWVsZCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmFyIHJlc3VsdEZpZWxkS2V5ID0gdXRpbGl0aWVzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQoZmllbGQpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0W3Jlc3VsdEZpZWxkS2V5XTtcbiAgICAgICAgICAgIGZpZWxkTm9kZVNldC5hZGQoZmllbGQpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmVGaWVsZE5hbWUgPSBwb2xpY2llcy5nZXRTdG9yZUZpZWxkTmFtZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVuYW1lOiB0eXBlbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZC5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogY29udGV4dC52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkVHJlZSA9IGdldENoaWxkTWVyZ2VUcmVlKG1lcmdlVHJlZSwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBpbmNvbWluZ1ZhbHVlID0gX3RoaXMucHJvY2Vzc0ZpZWxkVmFsdWUodmFsdWUsIGZpZWxkLCBmaWVsZC5zZWxlY3Rpb25TZXRcbiAgICAgICAgICAgICAgICAgICAgPyBnZXRDb250ZXh0Rmxhdm9yKGNvbnRleHQsIGZhbHNlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgOiBjb250ZXh0LCBjaGlsZFRyZWUpO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZFR5cGVuYW1lID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShpbmNvbWluZ1ZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QoaW5jb21pbmdWYWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHlwZW5hbWUgPSByZWFkRmllbGQoXCJfX3R5cGVuYW1lXCIsIGluY29taW5nVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbWVyZ2UgPSBwb2xpY2llcy5nZXRNZXJnZUZ1bmN0aW9uKHR5cGVuYW1lLCBmaWVsZC5uYW1lLnZhbHVlLCBjaGlsZFR5cGVuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobWVyZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmVlLmluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlbmFtZTogdHlwZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZTogbWVyZ2UsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVJlY3ljbGVDaGlsZE1lcmdlVHJlZShtZXJnZVRyZWUsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5jb21pbmcgPSBjb250ZXh0Lm1lcmdlKGluY29taW5nLCAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgX2Fbc3RvcmVGaWVsZE5hbWVdID0gaW5jb21pbmdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgX2EpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9fREVWX18gJiZcbiAgICAgICAgICAgICAgICAhY29udGV4dC5jbGllbnRPbmx5ICYmXG4gICAgICAgICAgICAgICAgIWNvbnRleHQuZGVmZXJyZWQgJiZcbiAgICAgICAgICAgICAgICAhdXRpbGl0aWVzLmFkZFR5cGVuYW1lVG9Eb2N1bWVudC5hZGRlZChmaWVsZCkgJiZcbiAgICAgICAgICAgICAgICAhcG9saWNpZXMuZ2V0UmVhZEZ1bmN0aW9uKHR5cGVuYW1lLCBmaWVsZC5uYW1lLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZXJyb3IoXCJNaXNzaW5nIGZpZWxkICdcIi5jb25jYXQodXRpbGl0aWVzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQoZmllbGQpLCBcIicgd2hpbGUgd3JpdGluZyByZXN1bHQgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKS5zdWJzdHJpbmcoMCwgMTAwMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBfYiA9IHBvbGljaWVzLmlkZW50aWZ5KHJlc3VsdCwge1xuICAgICAgICAgICAgICAgIHR5cGVuYW1lOiB0eXBlbmFtZSxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHNlbGVjdGlvblNldCxcbiAgICAgICAgICAgICAgICBmcmFnbWVudE1hcDogY29udGV4dC5mcmFnbWVudE1hcCxcbiAgICAgICAgICAgICAgICBzdG9yZU9iamVjdDogaW5jb21pbmcsXG4gICAgICAgICAgICAgICAgcmVhZEZpZWxkOiByZWFkRmllbGQsXG4gICAgICAgICAgICB9KSwgaWQgPSBfYlswXSwga2V5T2JqZWN0ID0gX2JbMV07XG4gICAgICAgICAgICBkYXRhSWQgPSBkYXRhSWQgfHwgaWQ7XG4gICAgICAgICAgICBpZiAoa2V5T2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaW5jb21pbmcgPSBjb250ZXh0Lm1lcmdlKGluY29taW5nLCBrZXlPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoIWRhdGFJZClcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgZGF0YUlkKSB7XG4gICAgICAgICAgICB2YXIgZGF0YVJlZiA9IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlKGRhdGFJZCk7XG4gICAgICAgICAgICB2YXIgc2V0cyA9IGNvbnRleHQud3JpdHRlbltkYXRhSWRdIHx8IChjb250ZXh0LndyaXR0ZW5bZGF0YUlkXSA9IFtdKTtcbiAgICAgICAgICAgIGlmIChzZXRzLmluZGV4T2Yoc2VsZWN0aW9uU2V0KSA+PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhUmVmO1xuICAgICAgICAgICAgc2V0cy5wdXNoKHNlbGVjdGlvblNldCk7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkZXIgJiYgdGhpcy5yZWFkZXIuaXNGcmVzaChyZXN1bHQsIGRhdGFSZWYsIHNlbGVjdGlvblNldCwgY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVJlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcmV2aW91c18xID0gY29udGV4dC5pbmNvbWluZ0J5SWQuZ2V0KGRhdGFJZCk7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNfMSkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzXzEuc3RvcmVPYmplY3QgPSBjb250ZXh0Lm1lcmdlKHByZXZpb3VzXzEuc3RvcmVPYmplY3QsIGluY29taW5nKTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c18xLm1lcmdlVHJlZSA9IG1lcmdlTWVyZ2VUcmVlcyhwcmV2aW91c18xLm1lcmdlVHJlZSwgbWVyZ2VUcmVlKTtcbiAgICAgICAgICAgICAgICBmaWVsZE5vZGVTZXQuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIHByZXZpb3VzXzEuZmllbGROb2RlU2V0LmFkZChmaWVsZCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5pbmNvbWluZ0J5SWQuc2V0KGRhdGFJZCwge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZU9iamVjdDogaW5jb21pbmcsXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlVHJlZTogbWVyZ2VUcmVlSXNFbXB0eShtZXJnZVRyZWUpID8gdm9pZCAwIDogbWVyZ2VUcmVlLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZE5vZGVTZXQ6IGZpZWxkTm9kZVNldCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhUmVmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmNvbWluZztcbiAgICB9O1xuICAgIFN0b3JlV3JpdGVyLnByb3RvdHlwZS5wcm9jZXNzRmllbGRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZmllbGQsIGNvbnRleHQsIG1lcmdlVHJlZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWZpZWxkLnNlbGVjdGlvblNldCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fREVWX18gPyB1dGlsaXRpZXMuY2xvbmVEZWVwKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IF90aGlzLnByb2Nlc3NGaWVsZFZhbHVlKGl0ZW0sIGZpZWxkLCBjb250ZXh0LCBnZXRDaGlsZE1lcmdlVHJlZShtZXJnZVRyZWUsIGkpKTtcbiAgICAgICAgICAgICAgICBtYXliZVJlY3ljbGVDaGlsZE1lcmdlVHJlZShtZXJnZVRyZWUsIGkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTZWxlY3Rpb25TZXQoe1xuICAgICAgICAgICAgcmVzdWx0OiB2YWx1ZSxcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDogZmllbGQuc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIG1lcmdlVHJlZTogbWVyZ2VUcmVlLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN0b3JlV3JpdGVyLnByb3RvdHlwZS5mbGF0dGVuRmllbGRzID0gZnVuY3Rpb24gKHNlbGVjdGlvblNldCwgcmVzdWx0LCBjb250ZXh0LCB0eXBlbmFtZSkge1xuICAgICAgICBpZiAodHlwZW5hbWUgPT09IHZvaWQgMCkgeyB0eXBlbmFtZSA9IHV0aWxpdGllcy5nZXRUeXBlbmFtZUZyb21SZXN1bHQocmVzdWx0LCBzZWxlY3Rpb25TZXQsIGNvbnRleHQuZnJhZ21lbnRNYXApOyB9XG4gICAgICAgIHZhciBmaWVsZE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdmFyIHBvbGljaWVzID0gdGhpcy5jYWNoZS5wb2xpY2llcztcbiAgICAgICAgdmFyIGxpbWl0aW5nVHJpZSA9IG5ldyB0cmllLlRyaWUoZmFsc2UpO1xuICAgICAgICAoZnVuY3Rpb24gZmxhdHRlbihzZWxlY3Rpb25TZXQsIGluaGVyaXRlZENvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciB2aXNpdGVkTm9kZSA9IGxpbWl0aW5nVHJpZS5sb29rdXAoc2VsZWN0aW9uU2V0LCBpbmhlcml0ZWRDb250ZXh0LmNsaWVudE9ubHksIGluaGVyaXRlZENvbnRleHQuZGVmZXJyZWQpO1xuICAgICAgICAgICAgaWYgKHZpc2l0ZWROb2RlLnZpc2l0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmlzaXRlZE5vZGUudmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxpdGllcy5zaG91bGRJbmNsdWRlKHNlbGVjdGlvbiwgY29udGV4dC52YXJpYWJsZXMpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudE9ubHkgPSBpbmhlcml0ZWRDb250ZXh0LmNsaWVudE9ubHksIGRlZmVycmVkID0gaW5oZXJpdGVkQ29udGV4dC5kZWZlcnJlZDtcbiAgICAgICAgICAgICAgICBpZiAoIShjbGllbnRPbmx5ICYmIGRlZmVycmVkKSAmJlxuICAgICAgICAgICAgICAgICAgICB1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KHNlbGVjdGlvbi5kaXJlY3RpdmVzKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24uZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZGlyLm5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJjbGllbnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBcImRlZmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcmd1bWVudHNPYmplY3RGcm9tRmllbGQoZGlyLCBjb250ZXh0LnZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhcmdzIHx8IGFyZ3MuaWYgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzRmllbGQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmcgPSBmaWVsZE1hcC5nZXQoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRPbmx5ID0gY2xpZW50T25seSAmJiBleGlzdGluZy5jbGllbnRPbmx5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQgPSBkZWZlcnJlZCAmJiBleGlzdGluZy5kZWZlcnJlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaWVsZE1hcC5zZXQoc2VsZWN0aW9uLCBnZXRDb250ZXh0Rmxhdm9yKGNvbnRleHQsIGNsaWVudE9ubHksIGRlZmVycmVkKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSB1dGlsaXRpZXMuZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uKHNlbGVjdGlvbiwgY29udGV4dC5sb29rdXBGcmFnbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZnJhZ21lbnQgJiYgc2VsZWN0aW9uLmtpbmQgPT09IGdyYXBocWwuS2luZC5GUkFHTUVOVF9TUFJFQUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIk5vIGZyYWdtZW50IG5hbWVkIFwiLmNvbmNhdChzZWxlY3Rpb24ubmFtZS52YWx1ZSkpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoOCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2xpY2llcy5mcmFnbWVudE1hdGNoZXMoZnJhZ21lbnQsIHR5cGVuYW1lLCByZXN1bHQsIGNvbnRleHQudmFyaWFibGVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbihmcmFnbWVudC5zZWxlY3Rpb25TZXQsIGdldENvbnRleHRGbGF2b3IoY29udGV4dCwgY2xpZW50T25seSwgZGVmZXJyZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KShzZWxlY3Rpb25TZXQsIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gZmllbGRNYXA7XG4gICAgfTtcbiAgICBTdG9yZVdyaXRlci5wcm90b3R5cGUuYXBwbHlNZXJnZXMgPSBmdW5jdGlvbiAobWVyZ2VUcmVlLCBleGlzdGluZywgaW5jb21pbmcsIGNvbnRleHQsIGdldFN0b3JhZ2VBcmdzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG1lcmdlVHJlZS5tYXAuc2l6ZSAmJiAhdXRpbGl0aWVzLmlzUmVmZXJlbmNlKGluY29taW5nKSkge1xuICAgICAgICAgICAgdmFyIGVfMSA9ICghaXNBcnJheShpbmNvbWluZykgJiZcbiAgICAgICAgICAgICAgICAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKGV4aXN0aW5nKSB8fCBzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChleGlzdGluZykpKSA/IGV4aXN0aW5nIDogdm9pZCAwO1xuICAgICAgICAgICAgdmFyIGlfMSA9IGluY29taW5nO1xuICAgICAgICAgICAgaWYgKGVfMSAmJiAhZ2V0U3RvcmFnZUFyZ3MpIHtcbiAgICAgICAgICAgICAgICBnZXRTdG9yYWdlQXJncyA9IFt1dGlsaXRpZXMuaXNSZWZlcmVuY2UoZV8xKSA/IGVfMS5fX3JlZiA6IGVfMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2hhbmdlZEZpZWxkc18xO1xuICAgICAgICAgICAgdmFyIGdldFZhbHVlXzEgPSBmdW5jdGlvbiAoZnJvbSwgbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc0FycmF5KGZyb20pXG4gICAgICAgICAgICAgICAgICAgID8gKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiID8gZnJvbVtuYW1lXSA6IHZvaWQgMClcbiAgICAgICAgICAgICAgICAgICAgOiBjb250ZXh0LnN0b3JlLmdldEZpZWxkVmFsdWUoZnJvbSwgU3RyaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtZXJnZVRyZWUubWFwLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkVHJlZSwgc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZVZhbCA9IGdldFZhbHVlXzEoZV8xLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIGlWYWwgPSBnZXRWYWx1ZV8xKGlfMSwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGlWYWwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0U3RvcmFnZUFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0U3RvcmFnZUFyZ3MucHVzaChzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhVmFsID0gX3RoaXMuYXBwbHlNZXJnZXMoY2hpbGRUcmVlLCBlVmFsLCBpVmFsLCBjb250ZXh0LCBnZXRTdG9yYWdlQXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKGFWYWwgIT09IGlWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZEZpZWxkc18xID0gY2hhbmdlZEZpZWxkc18xIHx8IG5ldyBNYXA7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWRGaWVsZHNfMS5zZXQoc3RvcmVGaWVsZE5hbWUsIGFWYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ2V0U3RvcmFnZUFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5pbnZhcmlhbnQoZ2V0U3RvcmFnZUFyZ3MucG9wKCkgPT09IHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VkRmllbGRzXzEpIHtcbiAgICAgICAgICAgICAgICBpbmNvbWluZyA9IChpc0FycmF5KGlfMSkgPyBpXzEuc2xpY2UoMCkgOiB0c2xpYi5fX2Fzc2lnbih7fSwgaV8xKSk7XG4gICAgICAgICAgICAgICAgY2hhbmdlZEZpZWxkc18xLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY29taW5nW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lcmdlVHJlZS5pbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5wb2xpY2llcy5ydW5NZXJnZUZ1bmN0aW9uKGV4aXN0aW5nLCBpbmNvbWluZywgbWVyZ2VUcmVlLmluZm8sIGNvbnRleHQsIGdldFN0b3JhZ2VBcmdzICYmIChfYSA9IGNvbnRleHQuc3RvcmUpLmdldFN0b3JhZ2UuYXBwbHkoX2EsIGdldFN0b3JhZ2VBcmdzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgIH07XG4gICAgcmV0dXJuIFN0b3JlV3JpdGVyO1xufSgpKTtcbnZhciBlbXB0eU1lcmdlVHJlZVBvb2wgPSBbXTtcbmZ1bmN0aW9uIGdldENoaWxkTWVyZ2VUcmVlKF9hLCBuYW1lKSB7XG4gICAgdmFyIG1hcCA9IF9hLm1hcDtcbiAgICBpZiAoIW1hcC5oYXMobmFtZSkpIHtcbiAgICAgICAgbWFwLnNldChuYW1lLCBlbXB0eU1lcmdlVHJlZVBvb2wucG9wKCkgfHwgeyBtYXA6IG5ldyBNYXAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXAuZ2V0KG5hbWUpO1xufVxuZnVuY3Rpb24gbWVyZ2VNZXJnZVRyZWVzKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKGxlZnQgPT09IHJpZ2h0IHx8ICFyaWdodCB8fCBtZXJnZVRyZWVJc0VtcHR5KHJpZ2h0KSlcbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgaWYgKCFsZWZ0IHx8IG1lcmdlVHJlZUlzRW1wdHkobGVmdCkpXG4gICAgICAgIHJldHVybiByaWdodDtcbiAgICB2YXIgaW5mbyA9IGxlZnQuaW5mbyAmJiByaWdodC5pbmZvID8gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGxlZnQuaW5mbyksIHJpZ2h0LmluZm8pIDogbGVmdC5pbmZvIHx8IHJpZ2h0LmluZm87XG4gICAgdmFyIG5lZWRUb01lcmdlTWFwcyA9IGxlZnQubWFwLnNpemUgJiYgcmlnaHQubWFwLnNpemU7XG4gICAgdmFyIG1hcCA9IG5lZWRUb01lcmdlTWFwcyA/IG5ldyBNYXAgOlxuICAgICAgICBsZWZ0Lm1hcC5zaXplID8gbGVmdC5tYXAgOiByaWdodC5tYXA7XG4gICAgdmFyIG1lcmdlZCA9IHsgaW5mbzogaW5mbywgbWFwOiBtYXAgfTtcbiAgICBpZiAobmVlZFRvTWVyZ2VNYXBzKSB7XG4gICAgICAgIHZhciByZW1haW5pbmdSaWdodEtleXNfMSA9IG5ldyBTZXQocmlnaHQubWFwLmtleXMoKSk7XG4gICAgICAgIGxlZnQubWFwLmZvckVhY2goZnVuY3Rpb24gKGxlZnRUcmVlLCBrZXkpIHtcbiAgICAgICAgICAgIG1lcmdlZC5tYXAuc2V0KGtleSwgbWVyZ2VNZXJnZVRyZWVzKGxlZnRUcmVlLCByaWdodC5tYXAuZ2V0KGtleSkpKTtcbiAgICAgICAgICAgIHJlbWFpbmluZ1JpZ2h0S2V5c18xLmRlbGV0ZShrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtYWluaW5nUmlnaHRLZXlzXzEuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBtZXJnZWQubWFwLnNldChrZXksIG1lcmdlTWVyZ2VUcmVlcyhyaWdodC5tYXAuZ2V0KGtleSksIGxlZnQubWFwLmdldChrZXkpKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkO1xufVxuZnVuY3Rpb24gbWVyZ2VUcmVlSXNFbXB0eSh0cmVlKSB7XG4gICAgcmV0dXJuICF0cmVlIHx8ICEodHJlZS5pbmZvIHx8IHRyZWUubWFwLnNpemUpO1xufVxuZnVuY3Rpb24gbWF5YmVSZWN5Y2xlQ2hpbGRNZXJnZVRyZWUoX2EsIG5hbWUpIHtcbiAgICB2YXIgbWFwID0gX2EubWFwO1xuICAgIHZhciBjaGlsZFRyZWUgPSBtYXAuZ2V0KG5hbWUpO1xuICAgIGlmIChjaGlsZFRyZWUgJiYgbWVyZ2VUcmVlSXNFbXB0eShjaGlsZFRyZWUpKSB7XG4gICAgICAgIGVtcHR5TWVyZ2VUcmVlUG9vbC5wdXNoKGNoaWxkVHJlZSk7XG4gICAgICAgIG1hcC5kZWxldGUobmFtZSk7XG4gICAgfVxufVxudmFyIHdhcm5pbmdzID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gd2FybkFib3V0RGF0YUxvc3MoZXhpc3RpbmdSZWYsIGluY29taW5nT2JqLCBzdG9yZUZpZWxkTmFtZSwgc3RvcmUpIHtcbiAgICB2YXIgZ2V0Q2hpbGQgPSBmdW5jdGlvbiAob2JqT3JSZWYpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShvYmpPclJlZiwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNoaWxkID09PSBcIm9iamVjdFwiICYmIGNoaWxkO1xuICAgIH07XG4gICAgdmFyIGV4aXN0aW5nID0gZ2V0Q2hpbGQoZXhpc3RpbmdSZWYpO1xuICAgIGlmICghZXhpc3RpbmcpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgaW5jb21pbmcgPSBnZXRDaGlsZChpbmNvbWluZ09iaik7XG4gICAgaWYgKCFpbmNvbWluZylcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UoZXhpc3RpbmcpKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKGVxdWFsaXR5LmVxdWFsKGV4aXN0aW5nLCBpbmNvbWluZykpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoT2JqZWN0LmtleXMoZXhpc3RpbmcpLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHN0b3JlLmdldEZpZWxkVmFsdWUoaW5jb21pbmcsIGtleSkgIT09IHZvaWQgMDsgfSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcGFyZW50VHlwZSA9IHN0b3JlLmdldEZpZWxkVmFsdWUoZXhpc3RpbmdSZWYsIFwiX190eXBlbmFtZVwiKSB8fFxuICAgICAgICBzdG9yZS5nZXRGaWVsZFZhbHVlKGluY29taW5nT2JqLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpO1xuICAgIHZhciB0eXBlRG90TmFtZSA9IFwiXCIuY29uY2F0KHBhcmVudFR5cGUsIFwiLlwiKS5jb25jYXQoZmllbGROYW1lKTtcbiAgICBpZiAod2FybmluZ3MuaGFzKHR5cGVEb3ROYW1lKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHdhcm5pbmdzLmFkZCh0eXBlRG90TmFtZSk7XG4gICAgdmFyIGNoaWxkVHlwZW5hbWVzID0gW107XG4gICAgaWYgKCFpc0FycmF5KGV4aXN0aW5nKSAmJlxuICAgICAgICAhaXNBcnJheShpbmNvbWluZykpIHtcbiAgICAgICAgW2V4aXN0aW5nLCBpbmNvbWluZ10uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZSA9IHN0b3JlLmdldEZpZWxkVmFsdWUoY2hpbGQsIFwiX190eXBlbmFtZVwiKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZW5hbWUgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICAhY2hpbGRUeXBlbmFtZXMuaW5jbHVkZXModHlwZW5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRUeXBlbmFtZXMucHVzaCh0eXBlbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJDYWNoZSBkYXRhIG1heSBiZSBsb3N0IHdoZW4gcmVwbGFjaW5nIHRoZSBcIi5jb25jYXQoZmllbGROYW1lLCBcIiBmaWVsZCBvZiBhIFwiKS5jb25jYXQocGFyZW50VHlwZSwgXCIgb2JqZWN0LlxcblxcblRvIGFkZHJlc3MgdGhpcyBwcm9ibGVtICh3aGljaCBpcyBub3QgYSBidWcgaW4gQXBvbGxvIENsaWVudCksIFwiKS5jb25jYXQoY2hpbGRUeXBlbmFtZXMubGVuZ3RoXG4gICAgICAgID8gXCJlaXRoZXIgZW5zdXJlIGFsbCBvYmplY3RzIG9mIHR5cGUgXCIgK1xuICAgICAgICAgICAgY2hpbGRUeXBlbmFtZXMuam9pbihcIiBhbmQgXCIpICsgXCIgaGF2ZSBhbiBJRCBvciBhIGN1c3RvbSBtZXJnZSBmdW5jdGlvbiwgb3IgXCJcbiAgICAgICAgOiBcIlwiLCBcImRlZmluZSBhIGN1c3RvbSBtZXJnZSBmdW5jdGlvbiBmb3IgdGhlIFwiKS5jb25jYXQodHlwZURvdE5hbWUsIFwiIGZpZWxkLCBzbyBJbk1lbW9yeUNhY2hlIGNhbiBzYWZlbHkgbWVyZ2UgdGhlc2Ugb2JqZWN0czpcXG5cXG4gIGV4aXN0aW5nOiBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nKS5zbGljZSgwLCAxMDAwKSwgXCJcXG4gIGluY29taW5nOiBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGluY29taW5nKS5zbGljZSgwLCAxMDAwKSwgXCJcXG5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGVzZSBvcHRpb25zLCBwbGVhc2UgcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb246XFxuXFxuICAqIEVuc3VyaW5nIGVudGl0eSBvYmplY3RzIGhhdmUgSURzOiBodHRwczovL2dvLmFwb2xsby5kZXYvYy9nZW5lcmF0aW5nLXVuaXF1ZS1pZGVudGlmaWVyc1xcbiAgKiBEZWZpbmluZyBjdXN0b20gbWVyZ2UgZnVuY3Rpb25zOiBodHRwczovL2dvLmFwb2xsby5kZXYvYy9tZXJnaW5nLW5vbi1ub3JtYWxpemVkLW9iamVjdHNcXG5cIikpO1xufVxuXG52YXIgSW5NZW1vcnlDYWNoZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKEluTWVtb3J5Q2FjaGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW5NZW1vcnlDYWNoZShjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndhdGNoZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLnR5cGVuYW1lRG9jdW1lbnRDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgX3RoaXMubWFrZVZhciA9IG1ha2VWYXI7XG4gICAgICAgIF90aGlzLnR4Q291bnQgPSAwO1xuICAgICAgICBfdGhpcy5jb25maWcgPSBub3JtYWxpemVDb25maWcoY29uZmlnKTtcbiAgICAgICAgX3RoaXMuYWRkVHlwZW5hbWUgPSAhIV90aGlzLmNvbmZpZy5hZGRUeXBlbmFtZTtcbiAgICAgICAgX3RoaXMucG9saWNpZXMgPSBuZXcgUG9saWNpZXMoe1xuICAgICAgICAgICAgY2FjaGU6IF90aGlzLFxuICAgICAgICAgICAgZGF0YUlkRnJvbU9iamVjdDogX3RoaXMuY29uZmlnLmRhdGFJZEZyb21PYmplY3QsXG4gICAgICAgICAgICBwb3NzaWJsZVR5cGVzOiBfdGhpcy5jb25maWcucG9zc2libGVUeXBlcyxcbiAgICAgICAgICAgIHR5cGVQb2xpY2llczogX3RoaXMuY29uZmlnLnR5cGVQb2xpY2llcyxcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLmluaXQoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm9vdFN0b3JlID0gdGhpcy5kYXRhID0gbmV3IGV4cG9ydHMuRW50aXR5U3RvcmUuUm9vdCh7XG4gICAgICAgICAgICBwb2xpY2llczogdGhpcy5wb2xpY2llcyxcbiAgICAgICAgICAgIHJlc3VsdENhY2hpbmc6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hpbmcsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9wdGltaXN0aWNEYXRhID0gcm9vdFN0b3JlLnN0dW1wO1xuICAgICAgICB0aGlzLnJlc2V0UmVzdWx0Q2FjaGUoKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlc2V0UmVzdWx0Q2FjaGUgPSBmdW5jdGlvbiAocmVzZXRSZXN1bHRJZGVudGl0aWVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwcmV2aW91c1JlYWRlciA9IHRoaXMuc3RvcmVSZWFkZXI7XG4gICAgICAgIHZhciBmcmFnbWVudHMgPSB0aGlzLmNvbmZpZy5mcmFnbWVudHM7XG4gICAgICAgIHRoaXMuc3RvcmVXcml0ZXIgPSBuZXcgU3RvcmVXcml0ZXIodGhpcywgdGhpcy5zdG9yZVJlYWRlciA9IG5ldyBTdG9yZVJlYWRlcih7XG4gICAgICAgICAgICBjYWNoZTogdGhpcyxcbiAgICAgICAgICAgIGFkZFR5cGVuYW1lOiB0aGlzLmFkZFR5cGVuYW1lLFxuICAgICAgICAgICAgcmVzdWx0Q2FjaGVNYXhTaXplOiB0aGlzLmNvbmZpZy5yZXN1bHRDYWNoZU1heFNpemUsXG4gICAgICAgICAgICBjYW5vbml6ZVJlc3VsdHM6IHNob3VsZENhbm9uaXplUmVzdWx0cyh0aGlzLmNvbmZpZyksXG4gICAgICAgICAgICBjYW5vbjogcmVzZXRSZXN1bHRJZGVudGl0aWVzXG4gICAgICAgICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICAgICAgICA6IHByZXZpb3VzUmVhZGVyICYmIHByZXZpb3VzUmVhZGVyLmNhbm9uLFxuICAgICAgICAgICAgZnJhZ21lbnRzOiBmcmFnbWVudHMsXG4gICAgICAgIH0pLCBmcmFnbWVudHMpO1xuICAgICAgICB0aGlzLm1heWJlQnJvYWRjYXN0V2F0Y2ggPSBvcHRpbWlzbS53cmFwKGZ1bmN0aW9uIChjLCBvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYnJvYWRjYXN0V2F0Y2goYywgb3B0aW9ucyk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1heDogdGhpcy5jb25maWcucmVzdWx0Q2FjaGVNYXhTaXplLFxuICAgICAgICAgICAgbWFrZUNhY2hlS2V5OiBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IGMub3B0aW1pc3RpYyA/IF90aGlzLm9wdGltaXN0aWNEYXRhIDogX3RoaXMuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoc3VwcG9ydHNSZXN1bHRDYWNoaW5nKHN0b3JlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW1pc3RpYyA9IGMub3B0aW1pc3RpYywgaWQgPSBjLmlkLCB2YXJpYWJsZXMgPSBjLnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLm1ha2VDYWNoZUtleShjLnF1ZXJ5LCBjLmNhbGxiYWNrLCBjYW5vbmljYWxTdHJpbmdpZnkoeyBvcHRpbWlzdGljOiBvcHRpbWlzdGljLCBpZDogaWQsIHZhcmlhYmxlczogdmFyaWFibGVzIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBuZXcgU2V0KFtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5ncm91cCxcbiAgICAgICAgICAgIHRoaXMub3B0aW1pc3RpY0RhdGEuZ3JvdXAsXG4gICAgICAgIF0pLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwKSB7IHJldHVybiBncm91cC5yZXNldENhY2hpbmcoKTsgfSk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZXN0b3JlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIGlmIChkYXRhKVxuICAgICAgICAgICAgdGhpcy5kYXRhLnJlcGxhY2UoZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uIChvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiAob3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGEpLmV4dHJhY3QoKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX2EgPSBvcHRpb25zLnJldHVyblBhcnRpYWxEYXRhLCByZXR1cm5QYXJ0aWFsRGF0YSA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVSZWFkZXIuZGlmZlF1ZXJ5QWdhaW5zdFN0b3JlKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBzdG9yZTogb3B0aW9ucy5vcHRpbWlzdGljID8gdGhpcy5vcHRpbWlzdGljRGF0YSA6IHRoaXMuZGF0YSwgY29uZmlnOiB0aGlzLmNvbmZpZywgcmV0dXJuUGFydGlhbERhdGE6IHJldHVyblBhcnRpYWxEYXRhIH0pKS5yZXN1bHQgfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNaXNzaW5nRmllbGRFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgKyt0aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVdyaXRlci53cml0ZVRvU3RvcmUodGhpcy5kYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmICghLS10aGlzLnR4Q291bnQgJiYgb3B0aW9ucy5icm9hZGNhc3QgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLm1vZGlmeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChoYXNPd24uY2FsbChvcHRpb25zLCBcImlkXCIpICYmICFvcHRpb25zLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0b3JlID0gb3B0aW9ucy5vcHRpbWlzdGljXG4gICAgICAgICAgICA/IHRoaXMub3B0aW1pc3RpY0RhdGFcbiAgICAgICAgICAgIDogdGhpcy5kYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgKyt0aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUubW9kaWZ5KG9wdGlvbnMuaWQgfHwgXCJST09UX1FVRVJZXCIsIG9wdGlvbnMuZmllbGRzKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmICghLS10aGlzLnR4Q291bnQgJiYgb3B0aW9ucy5icm9hZGNhc3QgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmRpZmYgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVJlYWRlci5kaWZmUXVlcnlBZ2FpbnN0U3RvcmUodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHN0b3JlOiBvcHRpb25zLm9wdGltaXN0aWMgPyB0aGlzLm9wdGltaXN0aWNEYXRhIDogdGhpcy5kYXRhLCByb290SWQ6IG9wdGlvbnMuaWQgfHwgXCJST09UX1FVRVJZXCIsIGNvbmZpZzogdGhpcy5jb25maWcgfSkpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiAod2F0Y2gpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLndhdGNoZXMuc2l6ZSkge1xuICAgICAgICAgICAgcmVjYWxsQ2FjaGUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53YXRjaGVzLmFkZCh3YXRjaCk7XG4gICAgICAgIGlmICh3YXRjaC5pbW1lZGlhdGUpIHtcbiAgICAgICAgICAgIHRoaXMubWF5YmVCcm9hZGNhc3RXYXRjaCh3YXRjaCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy53YXRjaGVzLmRlbGV0ZSh3YXRjaCkgJiYgIV90aGlzLndhdGNoZXMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGZvcmdldENhY2hlKF90aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLm1heWJlQnJvYWRjYXN0V2F0Y2guZm9yZ2V0KHdhdGNoKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmdjID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgY2Fub25pY2FsU3RyaW5naWZ5LnJlc2V0KCk7XG4gICAgICAgIHZhciBpZHMgPSB0aGlzLm9wdGltaXN0aWNEYXRhLmdjKCk7XG4gICAgICAgIGlmIChvcHRpb25zICYmICF0aGlzLnR4Q291bnQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJlc2V0UmVzdWx0Q2FjaGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UmVzdWx0Q2FjaGUob3B0aW9ucy5yZXNldFJlc3VsdElkZW50aXRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5yZXNldFJlc3VsdElkZW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlUmVhZGVyLnJlc2V0Q2Fub24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRzO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmV0YWluID0gZnVuY3Rpb24gKHJvb3RJZCwgb3B0aW1pc3RpYykge1xuICAgICAgICByZXR1cm4gKG9wdGltaXN0aWMgPyB0aGlzLm9wdGltaXN0aWNEYXRhIDogdGhpcy5kYXRhKS5yZXRhaW4ocm9vdElkKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbiAocm9vdElkLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIHJldHVybiAob3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGEpLnJlbGVhc2Uocm9vdElkKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdCkpXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0Ll9fcmVmO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9saWNpZXMuaWRlbnRpZnkob2JqZWN0KVswXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5ldmljdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5pZCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKG9wdGlvbnMsIFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGlkOiBcIlJPT1RfUVVFUllcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgKyt0aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpbWlzdGljRGF0YS5ldmljdChvcHRpb25zLCB0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKCEtLXRoaXMudHhDb3VudCAmJiBvcHRpb25zLmJyb2FkY2FzdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgY2Fub25pY2FsU3RyaW5naWZ5LnJlc2V0KCk7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZGlzY2FyZFdhdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uICh3YXRjaCkgeyByZXR1cm4gX3RoaXMubWF5YmVCcm9hZGNhc3RXYXRjaC5mb3JnZXQod2F0Y2gpOyB9KTtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcy5jbGVhcigpO1xuICAgICAgICAgICAgZm9yZ2V0Q2FjaGUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZW1vdmVPcHRpbWlzdGljID0gZnVuY3Rpb24gKGlkVG9SZW1vdmUpIHtcbiAgICAgICAgdmFyIG5ld09wdGltaXN0aWNEYXRhID0gdGhpcy5vcHRpbWlzdGljRGF0YS5yZW1vdmVMYXllcihpZFRvUmVtb3ZlKTtcbiAgICAgICAgaWYgKG5ld09wdGltaXN0aWNEYXRhICE9PSB0aGlzLm9wdGltaXN0aWNEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGltaXN0aWNEYXRhID0gbmV3T3B0aW1pc3RpY0RhdGE7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuYmF0Y2ggPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdXBkYXRlID0gb3B0aW9ucy51cGRhdGUsIF9hID0gb3B0aW9ucy5vcHRpbWlzdGljLCBvcHRpbWlzdGljID0gX2EgPT09IHZvaWQgMCA/IHRydWUgOiBfYSwgcmVtb3ZlT3B0aW1pc3RpYyA9IG9wdGlvbnMucmVtb3ZlT3B0aW1pc3RpYywgb25XYXRjaFVwZGF0ZWQgPSBvcHRpb25zLm9uV2F0Y2hVcGRhdGVkO1xuICAgICAgICB2YXIgdXBkYXRlUmVzdWx0O1xuICAgICAgICB2YXIgcGVyZm9ybSA9IGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMsIGRhdGEgPSBfYS5kYXRhLCBvcHRpbWlzdGljRGF0YSA9IF9hLm9wdGltaXN0aWNEYXRhO1xuICAgICAgICAgICAgKytfdGhpcy50eENvdW50O1xuICAgICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGF0YSA9IF90aGlzLm9wdGltaXN0aWNEYXRhID0gbGF5ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVSZXN1bHQgPSB1cGRhdGUoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgLS1fdGhpcy50eENvdW50O1xuICAgICAgICAgICAgICAgIF90aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgIF90aGlzLm9wdGltaXN0aWNEYXRhID0gb3B0aW1pc3RpY0RhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBhbHJlYWR5RGlydHkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGlmIChvbldhdGNoVXBkYXRlZCAmJiAhdGhpcy50eENvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXModHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IG9uV2F0Y2hVcGRhdGVkOiBmdW5jdGlvbiAod2F0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeURpcnR5LmFkZCh3YXRjaCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdGltaXN0aWMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGltaXN0aWNEYXRhID0gdGhpcy5vcHRpbWlzdGljRGF0YS5hZGRMYXllcihvcHRpbWlzdGljLCBwZXJmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpbWlzdGljID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcGVyZm9ybSh0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGVyZm9ybSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVtb3ZlT3B0aW1pc3RpYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5vcHRpbWlzdGljRGF0YSA9IHRoaXMub3B0aW1pc3RpY0RhdGEucmVtb3ZlTGF5ZXIocmVtb3ZlT3B0aW1pc3RpYyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uV2F0Y2hVcGRhdGVkICYmIGFscmVhZHlEaXJ0eS5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXModHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IG9uV2F0Y2hVcGRhdGVkOiBmdW5jdGlvbiAod2F0Y2gsIGRpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9uV2F0Y2hVcGRhdGVkLmNhbGwodGhpcywgd2F0Y2gsIGRpZmYpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeURpcnR5LmRlbGV0ZSh3YXRjaCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9IH0pKTtcbiAgICAgICAgICAgIGlmIChhbHJlYWR5RGlydHkuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGFscmVhZHlEaXJ0eS5mb3JFYWNoKGZ1bmN0aW9uICh3YXRjaCkgeyByZXR1cm4gX3RoaXMubWF5YmVCcm9hZGNhc3RXYXRjaC5kaXJ0eSh3YXRjaCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cGRhdGVSZXN1bHQ7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5wZXJmb3JtVHJhbnNhY3Rpb24gPSBmdW5jdGlvbiAodXBkYXRlLCBvcHRpbWlzdGljSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmF0Y2goe1xuICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiBvcHRpbWlzdGljSWQgfHwgKG9wdGltaXN0aWNJZCAhPT0gbnVsbCksXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUudHJhbnNmb3JtRG9jdW1lbnQgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkVHlwZW5hbWUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnR5cGVuYW1lRG9jdW1lbnRDYWNoZS5nZXQoZG9jdW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB1dGlsaXRpZXMuYWRkVHlwZW5hbWVUb0RvY3VtZW50KGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVuYW1lRG9jdW1lbnRDYWNoZS5zZXQoZG9jdW1lbnQsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlbmFtZURvY3VtZW50Q2FjaGUuc2V0KHJlc3VsdCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUudHJhbnNmb3JtRm9yTGluayA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICB2YXIgZnJhZ21lbnRzID0gdGhpcy5jb25maWcuZnJhZ21lbnRzO1xuICAgICAgICByZXR1cm4gZnJhZ21lbnRzXG4gICAgICAgICAgICA/IGZyYWdtZW50cy50cmFuc2Zvcm0oZG9jdW1lbnQpXG4gICAgICAgICAgICA6IGRvY3VtZW50O1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuYnJvYWRjYXN0V2F0Y2hlcyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy50eENvdW50KSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gX3RoaXMubWF5YmVCcm9hZGNhc3RXYXRjaChjLCBvcHRpb25zKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmJyb2FkY2FzdFdhdGNoID0gZnVuY3Rpb24gKGMsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGxhc3REaWZmID0gYy5sYXN0RGlmZjtcbiAgICAgICAgdmFyIGRpZmYgPSB0aGlzLmRpZmYoYyk7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoYy5vcHRpbWlzdGljICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMub3B0aW1pc3RpYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGRpZmYuZnJvbU9wdGltaXN0aWNUcmFuc2FjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vbldhdGNoVXBkYXRlZCAmJlxuICAgICAgICAgICAgICAgIG9wdGlvbnMub25XYXRjaFVwZGF0ZWQuY2FsbCh0aGlzLCBjLCBkaWZmLCBsYXN0RGlmZikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghbGFzdERpZmYgfHwgIWVxdWFsaXR5LmVxdWFsKGxhc3REaWZmLnJlc3VsdCwgZGlmZi5yZXN1bHQpKSB7XG4gICAgICAgICAgICBjLmNhbGxiYWNrKGMubGFzdERpZmYgPSBkaWZmLCBsYXN0RGlmZik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBJbk1lbW9yeUNhY2hlO1xufShBcG9sbG9DYWNoZSkpO1xuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFJlZ2lzdHJ5KCkge1xuICAgIHZhciBmcmFnbWVudHMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBmcmFnbWVudHNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyAoRnJhZ21lbnRSZWdpc3RyeS5iaW5kLmFwcGx5KEZyYWdtZW50UmVnaXN0cnksIHRzbGliLl9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGZyYWdtZW50cywgZmFsc2UpKSkoKTtcbn1cbnZhciBhcnJheUxpa2VGb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG52YXIgRnJhZ21lbnRSZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRnJhZ21lbnRSZWdpc3RyeSgpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgZnJhZ21lbnRzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucmVzZXRDYWNoZXMoKTtcbiAgICAgICAgaWYgKGZyYWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIuYXBwbHkodGhpcywgZnJhZ21lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBGcmFnbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRlZmluaXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICBhcnJheUxpa2VGb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgICB1dGlsaXRpZXMuZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhkb2MpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9ucy5zZXQobm9kZS5uYW1lLnZhbHVlLCBub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSwgbmFtZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUgIT09IF90aGlzLnJlZ2lzdHJ5W25hbWVdKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVnaXN0cnlbbmFtZV0gPSBub2RlO1xuICAgICAgICAgICAgICAgIF90aGlzLmludmFsaWRhdGUobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEZyYWdtZW50UmVnaXN0cnkucHJvdG90eXBlLmludmFsaWRhdGUgPSBmdW5jdGlvbiAobmFtZSkgeyB9O1xuICAgIEZyYWdtZW50UmVnaXN0cnkucHJvdG90eXBlLnJlc2V0Q2FjaGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmludmFsaWRhdGUgPSAodGhpcy5sb29rdXAgPSB0aGlzLmNhY2hlVW5hcnlNZXRob2QoXCJsb29rdXBcIikpLmRpcnR5O1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuY2FjaGVVbmFyeU1ldGhvZChcInRyYW5zZm9ybVwiKTtcbiAgICAgICAgdGhpcy5maW5kRnJhZ21lbnRTcHJlYWRzID0gdGhpcy5jYWNoZVVuYXJ5TWV0aG9kKFwiZmluZEZyYWdtZW50U3ByZWFkc1wiKTtcbiAgICB9O1xuICAgIEZyYWdtZW50UmVnaXN0cnkucHJvdG90eXBlLmNhY2hlVW5hcnlNZXRob2QgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgcmVnaXN0cnkgPSB0aGlzO1xuICAgICAgICB2YXIgb3JpZ2luYWxNZXRob2QgPSBGcmFnbWVudFJlZ2lzdHJ5LnByb3RvdHlwZVtuYW1lXTtcbiAgICAgICAgcmV0dXJuIG9wdGltaXNtLndyYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsTWV0aG9kLmFwcGx5KHJlZ2lzdHJ5LCBhcmd1bWVudHMpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtYWtlQ2FjaGVLZXk6IGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGFyZzsgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBGcmFnbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5sb29rdXAgPSBmdW5jdGlvbiAoZnJhZ21lbnROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5W2ZyYWdtZW50TmFtZV0gfHwgbnVsbDtcbiAgICB9O1xuICAgIEZyYWdtZW50UmVnaXN0cnkucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGVmaW5lZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdXRpbGl0aWVzLmdldEZyYWdtZW50RGVmaW5pdGlvbnMoZG9jdW1lbnQpLmZvckVhY2goZnVuY3Rpb24gKGRlZikge1xuICAgICAgICAgICAgZGVmaW5lZC5zZXQoZGVmLm5hbWUudmFsdWUsIGRlZik7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdW5ib3VuZCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdmFyIGVucXVldWUgPSBmdW5jdGlvbiAoc3ByZWFkTmFtZSkge1xuICAgICAgICAgICAgaWYgKCFkZWZpbmVkLmhhcyhzcHJlYWROYW1lKSkge1xuICAgICAgICAgICAgICAgIHVuYm91bmQuYWRkKHNwcmVhZE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZW5xdWV1ZUNoaWxkU3ByZWFkcyA9IGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBPYmplY3Qua2V5cyhfdGhpcy5maW5kRnJhZ21lbnRTcHJlYWRzKG5vZGUpKS5mb3JFYWNoKGVucXVldWUpOyB9O1xuICAgICAgICBlbnF1ZXVlQ2hpbGRTcHJlYWRzKGRvY3VtZW50KTtcbiAgICAgICAgdmFyIG1pc3NpbmcgPSBbXTtcbiAgICAgICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHVuYm91bmQuZm9yRWFjaChmdW5jdGlvbiAoZnJhZ21lbnROYW1lKSB7XG4gICAgICAgICAgICB2YXIga25vd25GcmFnbWVudERlZiA9IGRlZmluZWQuZ2V0KGZyYWdtZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAoa25vd25GcmFnbWVudERlZikge1xuICAgICAgICAgICAgICAgIGVucXVldWVDaGlsZFNwcmVhZHMobWFwW2ZyYWdtZW50TmFtZV0gPSBrbm93bkZyYWdtZW50RGVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1pc3NpbmcucHVzaChmcmFnbWVudE5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBkZWYgPSBfdGhpcy5sb29rdXAoZnJhZ21lbnROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoZGVmKSB7XG4gICAgICAgICAgICAgICAgICAgIGVucXVldWVDaGlsZFNwcmVhZHMobWFwW2ZyYWdtZW50TmFtZV0gPSBkZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtaXNzaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGRlZnNUb0FwcGVuZF8xID0gW107XG4gICAgICAgICAgICBtaXNzaW5nLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVmID0gbWFwW25hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChkZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmc1RvQXBwZW5kXzEucHVzaChkZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGRlZnNUb0FwcGVuZF8xLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGRvY3VtZW50KSwgeyBkZWZpbml0aW9uczogZG9jdW1lbnQuZGVmaW5pdGlvbnMuY29uY2F0KGRlZnNUb0FwcGVuZF8xKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfTtcbiAgICBGcmFnbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5maW5kRnJhZ21lbnRTcHJlYWRzID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgdmFyIHNwcmVhZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBncmFwaHFsLnZpc2l0KHJvb3QsIHtcbiAgICAgICAgICAgIEZyYWdtZW50U3ByZWFkOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHNwcmVhZHNbbm9kZS5uYW1lLnZhbHVlXSA9IG5vZGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNwcmVhZHM7XG4gICAgfTtcbiAgICByZXR1cm4gRnJhZ21lbnRSZWdpc3RyeTtcbn0oKSk7XG5cbmV4cG9ydHMuaXNSZWZlcmVuY2UgPSB1dGlsaXRpZXMuaXNSZWZlcmVuY2U7XG5leHBvcnRzLm1ha2VSZWZlcmVuY2UgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZTtcbmV4cG9ydHMuQXBvbGxvQ2FjaGUgPSBBcG9sbG9DYWNoZTtcbmV4cG9ydHMuSW5NZW1vcnlDYWNoZSA9IEluTWVtb3J5Q2FjaGU7XG5leHBvcnRzLk1pc3NpbmdGaWVsZEVycm9yID0gTWlzc2luZ0ZpZWxkRXJyb3I7XG5leHBvcnRzLlBvbGljaWVzID0gUG9saWNpZXM7XG5leHBvcnRzLmNhY2hlU2xvdCA9IGNhY2hlU2xvdDtcbmV4cG9ydHMuY2Fub25pY2FsU3RyaW5naWZ5ID0gY2Fub25pY2FsU3RyaW5naWZ5O1xuZXhwb3J0cy5jcmVhdGVGcmFnbWVudFJlZ2lzdHJ5ID0gY3JlYXRlRnJhZ21lbnRSZWdpc3RyeTtcbmV4cG9ydHMuZGVmYXVsdERhdGFJZEZyb21PYmplY3QgPSBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdDtcbmV4cG9ydHMuZmllbGROYW1lRnJvbVN0b3JlTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWU7XG5leHBvcnRzLm1ha2VWYXIgPSBtYWtlVmFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FjaGUuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuLi9saW5rL2NvcmUnKTtcbnZhciBodHRwID0gcmVxdWlyZSgnLi4vbGluay9odHRwJyk7XG52YXIgZXF1YWxpdHkgPSByZXF1aXJlKCdAd3J5L2VxdWFsaXR5Jyk7XG52YXIgY2FjaGUgPSByZXF1aXJlKCcuLi9jYWNoZScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcycpO1xudmFyIGVycm9ycyA9IHJlcXVpcmUoJy4uL2Vycm9ycycpO1xudmFyIGdyYXBocWwgPSByZXF1aXJlKCdncmFwaHFsJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9saW5rL3V0aWxzJyk7XG52YXIgdHNJbnZhcmlhbnQgPSByZXF1aXJlKCd0cy1pbnZhcmlhbnQnKTtcbnZhciBncmFwaHFsVGFnID0gcmVxdWlyZSgnZ3JhcGhxbC10YWcnKTtcblxudmFyIHZlcnNpb24gPSAnMy43LjgnO1xuXG5mdW5jdGlvbiBpc05vbkVtcHR5QXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSQyID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBkZWZhdWx0UmVjb25jaWxlciA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5tZXJnZSh0YXJnZXRbcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbn07XG52YXIgRGVlcE1lcmdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVlcE1lcmdlcihyZWNvbmNpbGVyKSB7XG4gICAgICAgIGlmIChyZWNvbmNpbGVyID09PSB2b2lkIDApIHsgcmVjb25jaWxlciA9IGRlZmF1bHRSZWNvbmNpbGVyOyB9XG4gICAgICAgIHRoaXMucmVjb25jaWxlciA9IHJlY29uY2lsZXI7XG4gICAgICAgIHRoaXMuaXNPYmplY3QgPSBpc05vbk51bGxPYmplY3Q7XG4gICAgICAgIHRoaXMucGFzdENvcGllcyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgRGVlcE1lcmdlci5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNvbnRleHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTm9uTnVsbE9iamVjdChzb3VyY2UpICYmIGlzTm9uTnVsbE9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZUtleSkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eSQyLmNhbGwodGFyZ2V0LCBzb3VyY2VLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRWYWx1ZSA9IHRhcmdldFtzb3VyY2VLZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlW3NvdXJjZUtleV0gIT09IHRhcmdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gX3RoaXMucmVjb25jaWxlci5hcHBseShfdGhpcywgdHNsaWIuX19zcHJlYWRBcnJheShbdGFyZ2V0LCBzb3VyY2UsIHNvdXJjZUtleV0sIGNvbnRleHQsIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0YXJnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IF90aGlzLnNoYWxsb3dDb3B5Rm9yTWVyZ2UodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gX3RoaXMuc2hhbGxvd0NvcHlGb3JNZXJnZSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlS2V5XSA9IHNvdXJjZVtzb3VyY2VLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH07XG4gICAgRGVlcE1lcmdlci5wcm90b3R5cGUuc2hhbGxvd0NvcHlGb3JNZXJnZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhc3RDb3BpZXMuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0c2xpYi5fX2Fzc2lnbih7IF9fcHJvdG9fXzogT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKSB9LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGFzdENvcGllcy5hZGQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiBEZWVwTWVyZ2VyO1xufSgpKTtcblxuZnVuY3Rpb24gaXNFeGVjdXRpb25QYXRjaEluY3JlbWVudGFsUmVzdWx0KHZhbHVlKSB7XG4gICAgcmV0dXJuIFwiaW5jcmVtZW50YWxcIiBpbiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGlzRXhlY3V0aW9uUGF0Y2hJbml0aWFsUmVzdWx0KHZhbHVlKSB7XG4gICAgcmV0dXJuIFwiaGFzTmV4dFwiIGluIHZhbHVlICYmIFwiZGF0YVwiIGluIHZhbHVlO1xufVxuZnVuY3Rpb24gaXNFeGVjdXRpb25QYXRjaFJlc3VsdCh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNFeGVjdXRpb25QYXRjaEluY3JlbWVudGFsUmVzdWx0KHZhbHVlKSB8fFxuICAgICAgICBpc0V4ZWN1dGlvblBhdGNoSW5pdGlhbFJlc3VsdCh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gbWVyZ2VJbmNyZW1lbnRhbERhdGEocHJldlJlc3VsdCwgcmVzdWx0KSB7XG4gICAgdmFyIG1lcmdlZERhdGEgPSBwcmV2UmVzdWx0O1xuICAgIHZhciBtZXJnZXIgPSBuZXcgRGVlcE1lcmdlcigpO1xuICAgIGlmIChpc0V4ZWN1dGlvblBhdGNoSW5jcmVtZW50YWxSZXN1bHQocmVzdWx0KSAmJlxuICAgICAgICBpc05vbkVtcHR5QXJyYXkocmVzdWx0LmluY3JlbWVudGFsKSkge1xuICAgICAgICByZXN1bHQuaW5jcmVtZW50YWwuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gX2EuZGF0YSwgcGF0aCA9IF9hLnBhdGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBwYXRoW2ldO1xuICAgICAgICAgICAgICAgIHZhciBpc051bWVyaWNLZXkgPSAhaXNOYU4oK2tleSk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudF8xID0gaXNOdW1lcmljS2V5ID8gW10gOiB7fTtcbiAgICAgICAgICAgICAgICBwYXJlbnRfMVtrZXldID0gZGF0YTtcbiAgICAgICAgICAgICAgICBkYXRhID0gcGFyZW50XzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXJnZWREYXRhID0gbWVyZ2VyLm1lcmdlKG1lcmdlZERhdGEsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlZERhdGE7XG59XG5cbmV4cG9ydHMuTmV0d29ya1N0YXR1cyA9IHZvaWQgMDtcbihmdW5jdGlvbiAoTmV0d29ya1N0YXR1cykge1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcImxvYWRpbmdcIl0gPSAxXSA9IFwibG9hZGluZ1wiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcInNldFZhcmlhYmxlc1wiXSA9IDJdID0gXCJzZXRWYXJpYWJsZXNcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJmZXRjaE1vcmVcIl0gPSAzXSA9IFwiZmV0Y2hNb3JlXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wicmVmZXRjaFwiXSA9IDRdID0gXCJyZWZldGNoXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wicG9sbFwiXSA9IDZdID0gXCJwb2xsXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wicmVhZHlcIl0gPSA3XSA9IFwicmVhZHlcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJlcnJvclwiXSA9IDhdID0gXCJlcnJvclwiO1xufSkoZXhwb3J0cy5OZXR3b3JrU3RhdHVzIHx8IChleHBvcnRzLk5ldHdvcmtTdGF0dXMgPSB7fSkpO1xuZnVuY3Rpb24gaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KG5ldHdvcmtTdGF0dXMpIHtcbiAgICByZXR1cm4gbmV0d29ya1N0YXR1cyA/IG5ldHdvcmtTdGF0dXMgPCA3IDogZmFsc2U7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduLCBoYXNPd25Qcm9wZXJ0eSQxID0gT2JqZWN0Lmhhc093blByb3BlcnR5O1xudmFyIE9ic2VydmFibGVRdWVyeSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKE9ic2VydmFibGVRdWVyeSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlUXVlcnkoX2EpIHtcbiAgICAgICAgdmFyIHF1ZXJ5TWFuYWdlciA9IF9hLnF1ZXJ5TWFuYWdlciwgcXVlcnlJbmZvID0gX2EucXVlcnlJbmZvLCBvcHRpb25zID0gX2Eub3B0aW9ucztcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBzdWJPYnNlcnZlciA9IG9ic2VydmVyLl9zdWJzY3JpcHRpb24uX29ic2VydmVyO1xuICAgICAgICAgICAgICAgIGlmIChzdWJPYnNlcnZlciAmJiAhc3ViT2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViT2JzZXJ2ZXIuZXJyb3IgPSBkZWZhdWx0U3Vic2NyaXB0aW9uT2JzZXJ2ZXJFcnJvckNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYSkgeyB9XG4gICAgICAgICAgICB2YXIgZmlyc3QgPSAhX3RoaXMub2JzZXJ2ZXJzLnNpemU7XG4gICAgICAgICAgICBfdGhpcy5vYnNlcnZlcnMuYWRkKG9ic2VydmVyKTtcbiAgICAgICAgICAgIHZhciBsYXN0ID0gX3RoaXMubGFzdDtcbiAgICAgICAgICAgIGlmIChsYXN0ICYmIGxhc3QuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvciAmJiBvYnNlcnZlci5lcnJvcihsYXN0LmVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxhc3QgJiYgbGFzdC5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0ICYmIG9ic2VydmVyLm5leHQobGFzdC5yZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVvYnNlcnZlKCkuY2F0Y2goZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpICYmICFfdGhpcy5vYnNlcnZlcnMuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50ZWFyRG93blF1ZXJ5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5xdWVyeUluZm8gPSBxdWVyeUluZm87XG4gICAgICAgIF90aGlzLnF1ZXJ5TWFuYWdlciA9IHF1ZXJ5TWFuYWdlcjtcbiAgICAgICAgX3RoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgICAgICB2YXIgX2IgPSBxdWVyeU1hbmFnZXIuZGVmYXVsdE9wdGlvbnMud2F0Y2hRdWVyeSwgX2MgPSBfYiA9PT0gdm9pZCAwID8ge30gOiBfYiwgX2QgPSBfYy5mZXRjaFBvbGljeSwgZGVmYXVsdEZldGNoUG9saWN5ID0gX2QgPT09IHZvaWQgMCA/IFwiY2FjaGUtZmlyc3RcIiA6IF9kO1xuICAgICAgICB2YXIgX2UgPSBvcHRpb25zLmZldGNoUG9saWN5LCBmZXRjaFBvbGljeSA9IF9lID09PSB2b2lkIDAgPyBkZWZhdWx0RmV0Y2hQb2xpY3kgOiBfZSwgX2YgPSBvcHRpb25zLmluaXRpYWxGZXRjaFBvbGljeSwgaW5pdGlhbEZldGNoUG9saWN5ID0gX2YgPT09IHZvaWQgMCA/IChmZXRjaFBvbGljeSA9PT0gXCJzdGFuZGJ5XCIgPyBkZWZhdWx0RmV0Y2hQb2xpY3kgOiBmZXRjaFBvbGljeSkgOiBfZjtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBpbml0aWFsRmV0Y2hQb2xpY3k6IGluaXRpYWxGZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3k6IGZldGNoUG9saWN5IH0pO1xuICAgICAgICBfdGhpcy5xdWVyeUlkID0gcXVlcnlJbmZvLnF1ZXJ5SWQgfHwgcXVlcnlNYW5hZ2VyLmdlbmVyYXRlUXVlcnlJZCgpO1xuICAgICAgICB2YXIgb3BEZWYgPSB1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihfdGhpcy5xdWVyeSk7XG4gICAgICAgIF90aGlzLnF1ZXJ5TmFtZSA9IG9wRGVmICYmIG9wRGVmLm5hbWUgJiYgb3BEZWYubmFtZS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZSwgXCJxdWVyeVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLnRyYW5zZm9ybSh0aGlzLm9wdGlvbnMucXVlcnkpLmRvY3VtZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUsIFwidmFyaWFibGVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZhcmlhYmxlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0ge1xuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5vYnNlcnZlcnMuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucXVlcnlNYW5hZ2VyLnJlbW92ZVF1ZXJ5KF90aGlzLnF1ZXJ5SWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gX3RoaXMuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmdldEN1cnJlbnRSZXN1bHQgPSBmdW5jdGlvbiAoc2F2ZUFzTGFzdFJlc3VsdCkge1xuICAgICAgICBpZiAoc2F2ZUFzTGFzdFJlc3VsdCA9PT0gdm9pZCAwKSB7IHNhdmVBc0xhc3RSZXN1bHQgPSB0cnVlOyB9XG4gICAgICAgIHZhciBsYXN0UmVzdWx0ID0gdGhpcy5nZXRMYXN0UmVzdWx0KHRydWUpO1xuICAgICAgICB2YXIgbmV0d29ya1N0YXR1cyA9IHRoaXMucXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgfHxcbiAgICAgICAgICAgIChsYXN0UmVzdWx0ICYmIGxhc3RSZXN1bHQubmV0d29ya1N0YXR1cykgfHxcbiAgICAgICAgICAgIGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWFkeTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBsYXN0UmVzdWx0KSwgeyBsb2FkaW5nOiBpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQobmV0d29ya1N0YXR1cyksIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMgfSk7XG4gICAgICAgIHZhciBfYSA9IHRoaXMub3B0aW9ucy5mZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3kgPSBfYSA9PT0gdm9pZCAwID8gXCJjYWNoZS1maXJzdFwiIDogX2E7XG4gICAgICAgIGlmIChmZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScgfHxcbiAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnIHx8XG4gICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ3N0YW5kYnknIHx8XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci50cmFuc2Zvcm0odGhpcy5vcHRpb25zLnF1ZXJ5KS5oYXNGb3JjZWRSZXNvbHZlcnMpIDtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGlmZiA9IHRoaXMucXVlcnlJbmZvLmdldERpZmYoKTtcbiAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlIHx8IHRoaXMub3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gZGlmZi5yZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkuZXF1YWwocmVzdWx0LmRhdGEsIHt9KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0LnBhcnRpYWw7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUgJiZcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5ldHdvcmtTdGF0dXMgPT09IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5sb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgICAgIChmZXRjaFBvbGljeSA9PT0gJ2NhY2hlLWZpcnN0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1vbmx5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVhZHk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhcnRpYWwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fREVWX18gJiZcbiAgICAgICAgICAgICAgICAhZGlmZi5jb21wbGV0ZSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLm9wdGlvbnMucGFydGlhbFJlZmV0Y2ggJiZcbiAgICAgICAgICAgICAgICAhcmVzdWx0LmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAhcmVzdWx0LmRhdGEgJiZcbiAgICAgICAgICAgICAgICAhcmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgbG9nTWlzc2luZ0ZpZWxkRXJyb3JzKGRpZmYubWlzc2luZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNhdmVBc0xhc3RSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFzdFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmlzRGlmZmVyZW50RnJvbUxhc3RSZXN1bHQgPSBmdW5jdGlvbiAobmV3UmVzdWx0LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgcmV0dXJuICghdGhpcy5sYXN0IHx8XG4gICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwodGhpcy5sYXN0LnJlc3VsdCwgbmV3UmVzdWx0KSB8fFxuICAgICAgICAgICAgKHZhcmlhYmxlcyAmJiAhZXF1YWxpdHkuZXF1YWwodGhpcy5sYXN0LnZhcmlhYmxlcywgdmFyaWFibGVzKSkpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRMYXN0ID0gZnVuY3Rpb24gKGtleSwgdmFyaWFibGVzTXVzdE1hdGNoKSB7XG4gICAgICAgIHZhciBsYXN0ID0gdGhpcy5sYXN0O1xuICAgICAgICBpZiAobGFzdCAmJlxuICAgICAgICAgICAgbGFzdFtrZXldICYmXG4gICAgICAgICAgICAoIXZhcmlhYmxlc011c3RNYXRjaCB8fCBlcXVhbGl0eS5lcXVhbChsYXN0LnZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3Rba2V5XTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRMYXN0UmVzdWx0ID0gZnVuY3Rpb24gKHZhcmlhYmxlc011c3RNYXRjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMYXN0KFwicmVzdWx0XCIsIHZhcmlhYmxlc011c3RNYXRjaCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmdldExhc3RFcnJvciA9IGZ1bmN0aW9uICh2YXJpYWJsZXNNdXN0TWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGFzdChcImVycm9yXCIsIHZhcmlhYmxlc011c3RNYXRjaCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlc2V0TGFzdFJlc3VsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxhc3Q7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZXNldFF1ZXJ5U3RvcmVFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnJlc2V0RXJyb3JzKHRoaXMucXVlcnlJZCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlZmV0Y2ggPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHJlb2JzZXJ2ZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb2xsSW50ZXJ2YWw6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBmZXRjaFBvbGljeSA9IHRoaXMub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSAnY2FjaGUtYW5kLW5ldHdvcmsnKSB7XG4gICAgICAgICAgICByZW9ic2VydmVPcHRpb25zLmZldGNoUG9saWN5ID0gZmV0Y2hQb2xpY3k7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmV0Y2hQb2xpY3kgPT09ICduby1jYWNoZScpIHtcbiAgICAgICAgICAgIHJlb2JzZXJ2ZU9wdGlvbnMuZmV0Y2hQb2xpY3kgPSAnbm8tY2FjaGUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVvYnNlcnZlT3B0aW9ucy5mZXRjaFBvbGljeSA9ICduZXR3b3JrLW9ubHknO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX0RFVl9fICYmIHZhcmlhYmxlcyAmJiBoYXNPd25Qcm9wZXJ0eSQxLmNhbGwodmFyaWFibGVzLCBcInZhcmlhYmxlc1wiKSkge1xuICAgICAgICAgICAgdmFyIHF1ZXJ5RGVmID0gdXRpbGl0aWVzLmdldFF1ZXJ5RGVmaW5pdGlvbih0aGlzLnF1ZXJ5KTtcbiAgICAgICAgICAgIHZhciB2YXJzID0gcXVlcnlEZWYudmFyaWFibGVEZWZpbml0aW9ucztcbiAgICAgICAgICAgIGlmICghdmFycyB8fCAhdmFycy5zb21lKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2LnZhcmlhYmxlLm5hbWUudmFsdWUgPT09IFwidmFyaWFibGVzXCI7IH0pKSB7XG4gICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiQ2FsbGVkIHJlZmV0Y2goXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHZhcmlhYmxlcyksIFwiKSBmb3IgcXVlcnkgXCIpLmNvbmNhdCgoKF9hID0gcXVlcnlEZWYubmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlKSB8fCBKU09OLnN0cmluZ2lmeShxdWVyeURlZiksIFwiLCB3aGljaCBkb2VzIG5vdCBkZWNsYXJlIGEgJHZhcmlhYmxlcyB2YXJpYWJsZS5cXG5EaWQgeW91IG1lYW4gdG8gY2FsbCByZWZldGNoKHZhcmlhYmxlcykgaW5zdGVhZCBvZiByZWZldGNoKHsgdmFyaWFibGVzIH0pP1wiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhcmlhYmxlcyAmJiAhZXF1YWxpdHkuZXF1YWwodGhpcy5vcHRpb25zLnZhcmlhYmxlcywgdmFyaWFibGVzKSkge1xuICAgICAgICAgICAgcmVvYnNlcnZlT3B0aW9ucy52YXJpYWJsZXMgPSB0aGlzLm9wdGlvbnMudmFyaWFibGVzID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy52YXJpYWJsZXMpLCB2YXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVlcnlJbmZvLnJlc2V0TGFzdFdyaXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlb2JzZXJ2ZShyZW9ic2VydmVPcHRpb25zLCBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVmZXRjaCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmZldGNoTW9yZSA9IGZ1bmN0aW9uIChmZXRjaE1vcmVPcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjb21iaW5lZE9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgKGZldGNoTW9yZU9wdGlvbnMucXVlcnkgPyBmZXRjaE1vcmVPcHRpb25zIDogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIHsgcXVlcnk6IHRoaXMucXVlcnkgfSksIGZldGNoTW9yZU9wdGlvbnMpLCB7IHZhcmlhYmxlczogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy52YXJpYWJsZXMpLCBmZXRjaE1vcmVPcHRpb25zLnZhcmlhYmxlcykgfSkpKSwgeyBmZXRjaFBvbGljeTogXCJuby1jYWNoZVwiIH0pO1xuICAgICAgICB2YXIgcWlkID0gdGhpcy5xdWVyeU1hbmFnZXIuZ2VuZXJhdGVRdWVyeUlkKCk7XG4gICAgICAgIHZhciBxdWVyeUluZm8gPSB0aGlzLnF1ZXJ5SW5mbztcbiAgICAgICAgdmFyIG9yaWdpbmFsTmV0d29ya1N0YXR1cyA9IHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzO1xuICAgICAgICBxdWVyeUluZm8ubmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5mZXRjaE1vcmU7XG4gICAgICAgIGlmIChjb21iaW5lZE9wdGlvbnMubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXBkYXRlZFF1ZXJ5U2V0ID0gbmV3IFNldCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIuZmV0Y2hRdWVyeShxaWQsIGNvbWJpbmVkT3B0aW9ucywgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmZldGNoTW9yZSkudGhlbihmdW5jdGlvbiAoZmV0Y2hNb3JlUmVzdWx0KSB7XG4gICAgICAgICAgICBfdGhpcy5xdWVyeU1hbmFnZXIucmVtb3ZlUXVlcnkocWlkKTtcbiAgICAgICAgICAgIGlmIChxdWVyeUluZm8ubmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmZldGNoTW9yZSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzID0gb3JpZ2luYWxOZXR3b3JrU3RhdHVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMucXVlcnlNYW5hZ2VyLmNhY2hlLmJhdGNoKHtcbiAgICAgICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlUXVlcnkgPSBmZXRjaE1vcmVPcHRpb25zLnVwZGF0ZVF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlUXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnVwZGF0ZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogX3RoaXMucXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBfdGhpcy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocHJldmlvdXMpIHsgcmV0dXJuIHVwZGF0ZVF1ZXJ5KHByZXZpb3VzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hNb3JlUmVzdWx0OiBmZXRjaE1vcmVSZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGNvbWJpbmVkT3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogY29tYmluZWRPcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogY29tYmluZWRPcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmZXRjaE1vcmVSZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbldhdGNoVXBkYXRlZDogZnVuY3Rpb24gKHdhdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRRdWVyeVNldC5hZGQod2F0Y2gucXVlcnkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE1vcmVSZXN1bHQ7XG4gICAgICAgIH0pLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF1cGRhdGVkUXVlcnlTZXQuaGFzKF90aGlzLnF1ZXJ5KSkge1xuICAgICAgICAgICAgICAgIHJlb2JzZXJ2ZUNhY2hlRmlyc3QoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc3Vic2NyaWJlVG9Nb3JlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMucXVlcnlNYW5hZ2VyXG4gICAgICAgICAgICAuc3RhcnRHcmFwaFFMU3Vic2NyaXB0aW9uKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBvcHRpb25zLmRvY3VtZW50LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IG9wdGlvbnMuY29udGV4dCxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHN1YnNjcmlwdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlUXVlcnkgPSBvcHRpb25zLnVwZGF0ZVF1ZXJ5O1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVRdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShmdW5jdGlvbiAocHJldmlvdXMsIF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFyaWFibGVzID0gX2EudmFyaWFibGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVF1ZXJ5KHByZXZpb3VzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uRGF0YTogc3Vic2NyaXB0aW9uRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZXJyb3IoJ1VuaGFuZGxlZCBHcmFwaFFMIHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChzdWJzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnN1YnNjcmlwdGlvbnMuZGVsZXRlKHN1YnNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChuZXdPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlb2JzZXJ2ZShuZXdPcHRpb25zKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc2V0VmFyaWFibGVzID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICBpZiAoZXF1YWxpdHkuZXF1YWwodGhpcy52YXJpYWJsZXMsIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVycy5zaXplXG4gICAgICAgICAgICAgICAgPyB0aGlzLnJlc3VsdCgpXG4gICAgICAgICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgICAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzLnNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZW9ic2VydmUoe1xuICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IHRoaXMub3B0aW9ucy5pbml0aWFsRmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgfSwgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnNldFZhcmlhYmxlcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnVwZGF0ZVF1ZXJ5ID0gZnVuY3Rpb24gKG1hcEZuKSB7XG4gICAgICAgIHZhciBxdWVyeU1hbmFnZXIgPSB0aGlzLnF1ZXJ5TWFuYWdlcjtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHF1ZXJ5TWFuYWdlci5jYWNoZS5kaWZmKHtcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLm9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHRoaXMudmFyaWFibGVzLFxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgfSkucmVzdWx0O1xuICAgICAgICB2YXIgbmV3UmVzdWx0ID0gbWFwRm4ocmVzdWx0LCB7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHRoaXMudmFyaWFibGVzLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5ld1Jlc3VsdCkge1xuICAgICAgICAgICAgcXVlcnlNYW5hZ2VyLmNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLm9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICAgICAgZGF0YTogbmV3UmVzdWx0LFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdGhpcy52YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHF1ZXJ5TWFuYWdlci5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc3RhcnRQb2xsaW5nID0gZnVuY3Rpb24gKHBvbGxJbnRlcnZhbCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMucG9sbEludGVydmFsID0gcG9sbEludGVydmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvbGxpbmcoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc3RvcFBvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5wb2xsSW50ZXJ2YWwgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvbGxpbmcoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuYXBwbHlOZXh0RmV0Y2hQb2xpY3kgPSBmdW5jdGlvbiAocmVhc29uLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm5leHRGZXRjaFBvbGljeSkge1xuICAgICAgICAgICAgdmFyIF9hID0gb3B0aW9ucy5mZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3kgPSBfYSA9PT0gdm9pZCAwID8gXCJjYWNoZS1maXJzdFwiIDogX2EsIF9iID0gb3B0aW9ucy5pbml0aWFsRmV0Y2hQb2xpY3ksIGluaXRpYWxGZXRjaFBvbGljeSA9IF9iID09PSB2b2lkIDAgPyBmZXRjaFBvbGljeSA6IF9iO1xuICAgICAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSBcInN0YW5kYnlcIikgO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMubmV4dEZldGNoUG9saWN5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID0gb3B0aW9ucy5uZXh0RmV0Y2hQb2xpY3koZmV0Y2hQb2xpY3ksIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGU6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxGZXRjaFBvbGljeTogaW5pdGlhbEZldGNoUG9saWN5LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVhc29uID09PSBcInZhcmlhYmxlcy1jaGFuZ2VkXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID0gaW5pdGlhbEZldGNoUG9saWN5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mZXRjaFBvbGljeSA9IG9wdGlvbnMubmV4dEZldGNoUG9saWN5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zLmZldGNoUG9saWN5O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChvcHRpb25zLCBuZXdOZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnNldE9ic2VydmFibGVRdWVyeSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLmZldGNoUXVlcnlPYnNlcnZhYmxlKHRoaXMucXVlcnlJZCwgb3B0aW9ucywgbmV3TmV0d29ya1N0YXR1cyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnVwZGF0ZVBvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5TWFuYWdlci5zc3JNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcywgcG9sbGluZ0luZm8gPSBfYS5wb2xsaW5nSW5mbywgcG9sbEludGVydmFsID0gX2Eub3B0aW9ucy5wb2xsSW50ZXJ2YWw7XG4gICAgICAgIGlmICghcG9sbEludGVydmFsKSB7XG4gICAgICAgICAgICBpZiAocG9sbGluZ0luZm8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocG9sbGluZ0luZm8udGltZW91dCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucG9sbGluZ0luZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvbGxpbmdJbmZvICYmXG4gICAgICAgICAgICBwb2xsaW5nSW5mby5pbnRlcnZhbCA9PT0gcG9sbEludGVydmFsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KHBvbGxJbnRlcnZhbCwgJ0F0dGVtcHRlZCB0byBzdGFydCBhIHBvbGxpbmcgcXVlcnkgd2l0aG91dCBhIHBvbGxpbmcgaW50ZXJ2YWwuJykgOiBnbG9iYWxzLmludmFyaWFudChwb2xsSW50ZXJ2YWwsIDEzKTtcbiAgICAgICAgdmFyIGluZm8gPSBwb2xsaW5nSW5mbyB8fCAodGhpcy5wb2xsaW5nSW5mbyA9IHt9KTtcbiAgICAgICAgaW5mby5pbnRlcnZhbCA9IHBvbGxJbnRlcnZhbDtcbiAgICAgICAgdmFyIG1heWJlRmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMucG9sbGluZ0luZm8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChfdGhpcy5xdWVyeUluZm8ubmV0d29ya1N0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVvYnNlcnZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiBfdGhpcy5vcHRpb25zLmluaXRpYWxGZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJyA/ICduby1jYWNoZScgOiAnbmV0d29yay1vbmx5JyxcbiAgICAgICAgICAgICAgICAgICAgfSwgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnBvbGwpLnRoZW4ocG9sbCwgcG9sbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb2xsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbmZvID0gX3RoaXMucG9sbGluZ0luZm87XG4gICAgICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChpbmZvLnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIGluZm8udGltZW91dCA9IHNldFRpbWVvdXQobWF5YmVGZXRjaCwgaW5mby5pbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHBvbGwoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUudXBkYXRlTGFzdFJlc3VsdCA9IGZ1bmN0aW9uIChuZXdSZXN1bHQsIHZhcmlhYmxlcykge1xuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7IH1cbiAgICAgICAgdGhpcy5sYXN0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMubGFzdCksIHsgcmVzdWx0OiB0aGlzLnF1ZXJ5TWFuYWdlci5hc3N1bWVJbW11dGFibGVSZXN1bHRzXG4gICAgICAgICAgICAgICAgPyBuZXdSZXN1bHRcbiAgICAgICAgICAgICAgICA6IHV0aWxpdGllcy5jbG9uZURlZXAobmV3UmVzdWx0KSwgdmFyaWFibGVzOiB2YXJpYWJsZXMgfSk7XG4gICAgICAgIGlmICghdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShuZXdSZXN1bHQuZXJyb3JzKSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGFzdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZW9ic2VydmUgPSBmdW5jdGlvbiAobmV3T3B0aW9ucywgbmV3TmV0d29ya1N0YXR1cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmlzVG9ybkRvd24gPSBmYWxzZTtcbiAgICAgICAgdmFyIHVzZURpc3Bvc2FibGVDb25jYXN0ID0gbmV3TmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlZmV0Y2ggfHxcbiAgICAgICAgICAgIG5ld05ldHdvcmtTdGF0dXMgPT09IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5mZXRjaE1vcmUgfHxcbiAgICAgICAgICAgIG5ld05ldHdvcmtTdGF0dXMgPT09IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5wb2xsO1xuICAgICAgICB2YXIgb2xkVmFyaWFibGVzID0gdGhpcy5vcHRpb25zLnZhcmlhYmxlcztcbiAgICAgICAgdmFyIG9sZEZldGNoUG9saWN5ID0gdGhpcy5vcHRpb25zLmZldGNoUG9saWN5O1xuICAgICAgICB2YXIgbWVyZ2VkT3B0aW9ucyA9IHV0aWxpdGllcy5jb21wYWN0KHRoaXMub3B0aW9ucywgbmV3T3B0aW9ucyB8fCB7fSk7XG4gICAgICAgIHZhciBvcHRpb25zID0gdXNlRGlzcG9zYWJsZUNvbmNhc3RcbiAgICAgICAgICAgID8gbWVyZ2VkT3B0aW9uc1xuICAgICAgICAgICAgOiBhc3NpZ24odGhpcy5vcHRpb25zLCBtZXJnZWRPcHRpb25zKTtcbiAgICAgICAgaWYgKCF1c2VEaXNwb3NhYmxlQ29uY2FzdCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQb2xsaW5nKCk7XG4gICAgICAgICAgICBpZiAobmV3T3B0aW9ucyAmJlxuICAgICAgICAgICAgICAgIG5ld09wdGlvbnMudmFyaWFibGVzICYmXG4gICAgICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKG5ld09wdGlvbnMudmFyaWFibGVzLCBvbGRWYXJpYWJsZXMpICYmXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mZXRjaFBvbGljeSAhPT0gXCJzdGFuZGJ5XCIgJiZcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID09PSBvbGRGZXRjaFBvbGljeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlOZXh0RmV0Y2hQb2xpY3koXCJ2YXJpYWJsZXMtY2hhbmdlZFwiLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3TmV0d29ya1N0YXR1cyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld05ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMuc2V0VmFyaWFibGVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFyaWFibGVzID0gb3B0aW9ucy52YXJpYWJsZXMgJiYgdHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgdmFyIGNvbmNhc3QgPSB0aGlzLmZldGNoKG9wdGlvbnMsIG5ld05ldHdvcmtTdGF0dXMpO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVwb3J0UmVzdWx0KHJlc3VsdCwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVwb3J0RXJyb3IoZXJyb3IsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXVzZURpc3Bvc2FibGVDb25jYXN0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jYXN0ICYmIHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmNhc3QucmVtb3ZlT2JzZXJ2ZXIodGhpcy5vYnNlcnZlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbmNhc3QgPSBjb25jYXN0O1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIGNvbmNhc3QuYWRkT2JzZXJ2ZXIob2JzZXJ2ZXIpO1xuICAgICAgICByZXR1cm4gY29uY2FzdC5wcm9taXNlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlcG9ydFJlc3VsdCh0aGlzLmdldEN1cnJlbnRSZXN1bHQoZmFsc2UpLCB0aGlzLnZhcmlhYmxlcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlcG9ydFJlc3VsdCA9IGZ1bmN0aW9uIChyZXN1bHQsIHZhcmlhYmxlcykge1xuICAgICAgICB2YXIgbGFzdEVycm9yID0gdGhpcy5nZXRMYXN0RXJyb3IoKTtcbiAgICAgICAgaWYgKGxhc3RFcnJvciB8fCB0aGlzLmlzRGlmZmVyZW50RnJvbUxhc3RSZXN1bHQocmVzdWx0LCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICBpZiAobGFzdEVycm9yIHx8ICFyZXN1bHQucGFydGlhbCB8fCB0aGlzLm9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxhc3RSZXN1bHQocmVzdWx0LCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXRpbGl0aWVzLml0ZXJhdGVPYnNlcnZlcnNTYWZlbHkodGhpcy5vYnNlcnZlcnMsICduZXh0JywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgdmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBlcnJvclJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLmdldExhc3RSZXN1bHQoKSksIHsgZXJyb3I6IGVycm9yLCBlcnJvcnM6IGVycm9yLmdyYXBoUUxFcnJvcnMsIG5ldHdvcmtTdGF0dXM6IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5lcnJvciwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlTGFzdFJlc3VsdChlcnJvclJlc3VsdCwgdmFyaWFibGVzKTtcbiAgICAgICAgdXRpbGl0aWVzLml0ZXJhdGVPYnNlcnZlcnNTYWZlbHkodGhpcy5vYnNlcnZlcnMsICdlcnJvcicsIHRoaXMubGFzdC5lcnJvciA9IGVycm9yKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuaGFzT2JzZXJ2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnMuc2l6ZSA+IDA7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnRlYXJEb3duUXVlcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVG9ybkRvd24pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmNvbmNhc3QgJiYgdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5jb25jYXN0LnJlbW92ZU9ic2VydmVyKHRoaXMub2JzZXJ2ZXIpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uY2FzdDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcFBvbGxpbmcoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuc3RvcFF1ZXJ5KHRoaXMucXVlcnlJZCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZVF1ZXJ5O1xufSh1dGlsaXRpZXMuT2JzZXJ2YWJsZSkpO1xudXRpbGl0aWVzLmZpeE9ic2VydmFibGVTdWJjbGFzcyhPYnNlcnZhYmxlUXVlcnkpO1xuZnVuY3Rpb24gcmVvYnNlcnZlQ2FjaGVGaXJzdChvYnNRdWVyeSkge1xuICAgIHZhciBfYSA9IG9ic1F1ZXJ5Lm9wdGlvbnMsIGZldGNoUG9saWN5ID0gX2EuZmV0Y2hQb2xpY3ksIG5leHRGZXRjaFBvbGljeSA9IF9hLm5leHRGZXRjaFBvbGljeTtcbiAgICBpZiAoZmV0Y2hQb2xpY3kgPT09IFwiY2FjaGUtYW5kLW5ldHdvcmtcIiB8fFxuICAgICAgICBmZXRjaFBvbGljeSA9PT0gXCJuZXR3b3JrLW9ubHlcIikge1xuICAgICAgICByZXR1cm4gb2JzUXVlcnkucmVvYnNlcnZlKHtcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiBcImNhY2hlLWZpcnN0XCIsXG4gICAgICAgICAgICBuZXh0RmV0Y2hQb2xpY3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRGZXRjaFBvbGljeSA9IG5leHRGZXRjaFBvbGljeTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5leHRGZXRjaFBvbGljeSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0RmV0Y2hQb2xpY3kuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUG9saWN5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvYnNRdWVyeS5yZW9ic2VydmUoKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRTdWJzY3JpcHRpb25PYnNlcnZlckVycm9yQ2FsbGJhY2soZXJyb3IpIHtcbiAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmVycm9yKCdVbmhhbmRsZWQgZXJyb3InLCBlcnJvci5tZXNzYWdlLCBlcnJvci5zdGFjayk7XG59XG5mdW5jdGlvbiBsb2dNaXNzaW5nRmllbGRFcnJvcnMobWlzc2luZykge1xuICAgIGlmIChfX0RFVl9fICYmIG1pc3NpbmcpIHtcbiAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5kZWJ1ZyhcIk1pc3NpbmcgY2FjaGUgcmVzdWx0IGZpZWxkczogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KG1pc3NpbmcpKSwgbWlzc2luZyk7XG4gICAgfVxufVxuXG52YXIgTG9jYWxTdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9jYWxTdGF0ZShfYSkge1xuICAgICAgICB2YXIgY2FjaGUgPSBfYS5jYWNoZSwgY2xpZW50ID0gX2EuY2xpZW50LCByZXNvbHZlcnMgPSBfYS5yZXNvbHZlcnMsIGZyYWdtZW50TWF0Y2hlciA9IF9hLmZyYWdtZW50TWF0Y2hlcjtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25zVG9SZXNvbHZlQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgIGlmIChjbGllbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUmVzb2x2ZXJzKHJlc29sdmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyYWdtZW50TWF0Y2hlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRGcmFnbWVudE1hdGNoZXIoZnJhZ21lbnRNYXRjaGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5hZGRSZXNvbHZlcnMgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0gdGhpcy5yZXNvbHZlcnMgfHwge307XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc29sdmVycykpIHtcbiAgICAgICAgICAgIHJlc29sdmVycy5mb3JFYWNoKGZ1bmN0aW9uIChyZXNvbHZlckdyb3VwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzb2x2ZXJzID0gdXRpbGl0aWVzLm1lcmdlRGVlcChfdGhpcy5yZXNvbHZlcnMsIHJlc29sdmVyR3JvdXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmVycyA9IHV0aWxpdGllcy5tZXJnZURlZXAodGhpcy5yZXNvbHZlcnMsIHJlc29sdmVycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnNldFJlc29sdmVycyA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5hZGRSZXNvbHZlcnMocmVzb2x2ZXJzKTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmdldFJlc29sdmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZXJzIHx8IHt9O1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucnVuUmVzb2x2ZXJzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBkb2N1bWVudCA9IF9hLmRvY3VtZW50LCByZW1vdGVSZXN1bHQgPSBfYS5yZW1vdGVSZXN1bHQsIGNvbnRleHQgPSBfYS5jb250ZXh0LCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIF9iID0gX2Eub25seVJ1bkZvcmNlZFJlc29sdmVycywgb25seVJ1bkZvcmNlZFJlc29sdmVycyA9IF9iID09PSB2b2lkIDAgPyBmYWxzZSA6IF9iO1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlRG9jdW1lbnQoZG9jdW1lbnQsIHJlbW90ZVJlc3VsdC5kYXRhLCBjb250ZXh0LCB2YXJpYWJsZXMsIHRoaXMuZnJhZ21lbnRNYXRjaGVyLCBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzKS50aGVuKGZ1bmN0aW9uIChsb2NhbFJlc3VsdCkgeyByZXR1cm4gKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCByZW1vdGVSZXN1bHQpLCB7IGRhdGE6IGxvY2FsUmVzdWx0LnJlc3VsdCB9KSk7IH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCByZW1vdGVSZXN1bHRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuc2V0RnJhZ21lbnRNYXRjaGVyID0gZnVuY3Rpb24gKGZyYWdtZW50TWF0Y2hlcikge1xuICAgICAgICB0aGlzLmZyYWdtZW50TWF0Y2hlciA9IGZyYWdtZW50TWF0Y2hlcjtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmdldEZyYWdtZW50TWF0Y2hlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJhZ21lbnRNYXRjaGVyO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuY2xpZW50UXVlcnkgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5oYXNEaXJlY3RpdmVzKFsnY2xpZW50J10sIGRvY3VtZW50KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuc2VydmVyUXVlcnkgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5yZW1vdmVDbGllbnRTZXRzRnJvbURvY3VtZW50KGRvY3VtZW50KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnByZXBhcmVDb250ZXh0ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZTtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyBjYWNoZTogY2FjaGUsIGdldENhY2hlS2V5OiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlLmlkZW50aWZ5KG9iaik7XG4gICAgICAgICAgICB9IH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuYWRkRXhwb3J0ZWRWYXJpYWJsZXMgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHZhcmlhYmxlcywgY29udGV4dCkge1xuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0ge307IH1cbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVzb2x2ZURvY3VtZW50KGRvY3VtZW50LCB0aGlzLmJ1aWxkUm9vdFZhbHVlRnJvbUNhY2hlKGRvY3VtZW50LCB2YXJpYWJsZXMpIHx8IHt9LCB0aGlzLnByZXBhcmVDb250ZXh0KGNvbnRleHQpLCB2YXJpYWJsZXMpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuICh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdmFyaWFibGVzKSwgZGF0YS5leHBvcnRlZFZhcmlhYmxlcykpOyB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdHNsaWIuX19hc3NpZ24oe30sIHZhcmlhYmxlcyldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuc2hvdWxkRm9yY2VSZXNvbHZlcnMgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIGZvcmNlUmVzb2x2ZXJzID0gZmFsc2U7XG4gICAgICAgIGdyYXBocWwudmlzaXQoZG9jdW1lbnQsIHtcbiAgICAgICAgICAgIERpcmVjdGl2ZToge1xuICAgICAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5uYW1lLnZhbHVlID09PSAnY2xpZW50JyAmJiBub2RlLmFyZ3VtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VSZXNvbHZlcnMgPSBub2RlLmFyZ3VtZW50cy5zb21lKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnLm5hbWUudmFsdWUgPT09ICdhbHdheXMnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZy52YWx1ZS5raW5kID09PSAnQm9vbGVhblZhbHVlJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcudmFsdWUudmFsdWUgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JjZVJlc29sdmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBncmFwaHFsLkJSRUFLO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9yY2VSZXNvbHZlcnM7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5idWlsZFJvb3RWYWx1ZUZyb21DYWNoZSA9IGZ1bmN0aW9uIChkb2N1bWVudCwgdmFyaWFibGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLmRpZmYoe1xuICAgICAgICAgICAgcXVlcnk6IHV0aWxpdGllcy5idWlsZFF1ZXJ5RnJvbVNlbGVjdGlvblNldChkb2N1bWVudCksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiB0cnVlLFxuICAgICAgICAgICAgb3B0aW1pc3RpYzogZmFsc2UsXG4gICAgICAgIH0pLnJlc3VsdDtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnJlc29sdmVEb2N1bWVudCA9IGZ1bmN0aW9uIChkb2N1bWVudCwgcm9vdFZhbHVlLCBjb250ZXh0LCB2YXJpYWJsZXMsIGZyYWdtZW50TWF0Y2hlciwgb25seVJ1bkZvcmNlZFJlc29sdmVycykge1xuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0ge307IH1cbiAgICAgICAgaWYgKGZyYWdtZW50TWF0Y2hlciA9PT0gdm9pZCAwKSB7IGZyYWdtZW50TWF0Y2hlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH07IH1cbiAgICAgICAgaWYgKG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMgPT09IHZvaWQgMCkgeyBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1haW5EZWZpbml0aW9uLCBmcmFnbWVudHMsIGZyYWdtZW50TWFwLCBzZWxlY3Rpb25zVG9SZXNvbHZlLCBkZWZpbml0aW9uT3BlcmF0aW9uLCBkZWZhdWx0T3BlcmF0aW9uVHlwZSwgX2EsIGNhY2hlLCBjbGllbnQsIGV4ZWNDb250ZXh0LCBpc0NsaWVudEZpZWxkRGVzY2VuZGFudDtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBtYWluRGVmaW5pdGlvbiA9IHV0aWxpdGllcy5nZXRNYWluRGVmaW5pdGlvbihkb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRzID0gdXRpbGl0aWVzLmdldEZyYWdtZW50RGVmaW5pdGlvbnMoZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwID0gdXRpbGl0aWVzLmNyZWF0ZUZyYWdtZW50TWFwKGZyYWdtZW50cyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uc1RvUmVzb2x2ZSA9IHRoaXMuY29sbGVjdFNlbGVjdGlvbnNUb1Jlc29sdmUobWFpbkRlZmluaXRpb24sIGZyYWdtZW50TWFwKTtcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uT3BlcmF0aW9uID0gbWFpbkRlZmluaXRpb24ub3BlcmF0aW9uO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRPcGVyYXRpb25UeXBlID0gZGVmaW5pdGlvbk9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICA/IGRlZmluaXRpb25PcGVyYXRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbk9wZXJhdGlvbi5zbGljZSgxKVxuICAgICAgICAgICAgICAgICAgICA6ICdRdWVyeSc7XG4gICAgICAgICAgICAgICAgX2EgPSB0aGlzLCBjYWNoZSA9IF9hLmNhY2hlLCBjbGllbnQgPSBfYS5jbGllbnQ7XG4gICAgICAgICAgICAgICAgZXhlY0NvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwOiBmcmFnbWVudE1hcCxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IGNhY2hlOiBjYWNoZSwgY2xpZW50OiBjbGllbnQgfSksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudE1hdGNoZXI6IGZyYWdtZW50TWF0Y2hlcixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wZXJhdGlvblR5cGU6IGRlZmF1bHRPcGVyYXRpb25UeXBlLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRlZFZhcmlhYmxlczoge30sXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnNUb1Jlc29sdmU6IHNlbGVjdGlvbnNUb1Jlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnM6IG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpc0NsaWVudEZpZWxkRGVzY2VuZGFudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlU2VsZWN0aW9uU2V0KG1haW5EZWZpbml0aW9uLnNlbGVjdGlvblNldCwgaXNDbGllbnRGaWVsZERlc2NlbmRhbnQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0ZWRWYXJpYWJsZXM6IGV4ZWNDb250ZXh0LmV4cG9ydGVkVmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICB9KTsgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZVNlbGVjdGlvblNldCA9IGZ1bmN0aW9uIChzZWxlY3Rpb25TZXQsIGlzQ2xpZW50RmllbGREZXNjZW5kYW50LCByb290VmFsdWUsIGV4ZWNDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudE1hcCwgY29udGV4dCwgdmFyaWFibGVzLCByZXN1bHRzVG9NZXJnZSwgZXhlY3V0ZTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRNYXAgPSBleGVjQ29udGV4dC5mcmFnbWVudE1hcCwgY29udGV4dCA9IGV4ZWNDb250ZXh0LmNvbnRleHQsIHZhcmlhYmxlcyA9IGV4ZWNDb250ZXh0LnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICByZXN1bHRzVG9NZXJnZSA9IFtyb290VmFsdWVdO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGUgPSBmdW5jdGlvbiAoc2VsZWN0aW9uKSB7IHJldHVybiB0c2xpYi5fX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmcmFnbWVudCwgdHlwZUNvbmRpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0NsaWVudEZpZWxkRGVzY2VuZGFudCAmJiAhZXhlY0NvbnRleHQuc2VsZWN0aW9uc1RvUmVzb2x2ZS5oYXMoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXV0aWxpdGllcy5zaG91bGRJbmNsdWRlKHNlbGVjdGlvbiwgdmFyaWFibGVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzRmllbGQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlRmllbGQoc2VsZWN0aW9uLCBpc0NsaWVudEZpZWxkRGVzY2VuZGFudCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkudGhlbihmdW5jdGlvbiAoZmllbGRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZmllbGRSZXN1bHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1RvTWVyZ2UucHVzaCgoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FbdXRpbGl0aWVzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQoc2VsZWN0aW9uKV0gPSBmaWVsZFJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc0lubGluZUZyYWdtZW50KHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IHNlbGVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gZnJhZ21lbnRNYXBbc2VsZWN0aW9uLm5hbWUudmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudCwgXCJObyBmcmFnbWVudCBuYW1lZCBcIi5jb25jYXQoc2VsZWN0aW9uLm5hbWUudmFsdWUpKSA6IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50LCAxMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnQgJiYgZnJhZ21lbnQudHlwZUNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVDb25kaXRpb24gPSBmcmFnbWVudC50eXBlQ29uZGl0aW9uLm5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4ZWNDb250ZXh0LmZyYWdtZW50TWF0Y2hlcihyb290VmFsdWUsIHR5cGVDb25kaXRpb24sIGNvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlU2VsZWN0aW9uU2V0KGZyYWdtZW50LnNlbGVjdGlvblNldCwgaXNDbGllbnRGaWVsZERlc2NlbmRhbnQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpLnRoZW4oZnVuY3Rpb24gKGZyYWdtZW50UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1RvTWVyZ2UucHVzaChmcmFnbWVudFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7IH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBQcm9taXNlLmFsbChzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5tYXAoZXhlY3V0ZSkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5tZXJnZURlZXBBcnJheShyZXN1bHRzVG9NZXJnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnJlc29sdmVGaWVsZCA9IGZ1bmN0aW9uIChmaWVsZCwgaXNDbGllbnRGaWVsZERlc2NlbmRhbnQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHZhcmlhYmxlcywgZmllbGROYW1lLCBhbGlhc2VkRmllbGROYW1lLCBhbGlhc1VzZWQsIGRlZmF1bHRSZXN1bHQsIHJlc3VsdFByb21pc2UsIHJlc29sdmVyVHlwZSwgcmVzb2x2ZXJNYXAsIHJlc29sdmU7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmICghcm9vdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbnVsbF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyA9IGV4ZWNDb250ZXh0LnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSBmaWVsZC5uYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgIGFsaWFzZWRGaWVsZE5hbWUgPSB1dGlsaXRpZXMucmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCk7XG4gICAgICAgICAgICAgICAgYWxpYXNVc2VkID0gZmllbGROYW1lICE9PSBhbGlhc2VkRmllbGROYW1lO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRSZXN1bHQgPSByb290VmFsdWVbYWxpYXNlZEZpZWxkTmFtZV0gfHwgcm9vdFZhbHVlW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgcmVzdWx0UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShkZWZhdWx0UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4ZWNDb250ZXh0Lm9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG91bGRGb3JjZVJlc29sdmVycyhmaWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJUeXBlID0gcm9vdFZhbHVlLl9fdHlwZW5hbWUgfHwgZXhlY0NvbnRleHQuZGVmYXVsdE9wZXJhdGlvblR5cGU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyTWFwID0gdGhpcy5yZXNvbHZlcnMgJiYgdGhpcy5yZXNvbHZlcnNbcmVzb2x2ZXJUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmVyTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gcmVzb2x2ZXJNYXBbYWxpYXNVc2VkID8gZmllbGROYW1lIDogYWxpYXNlZEZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY2FjaGUuY2FjaGVTbG90LndpdGhWYWx1ZSh0aGlzLmNhY2hlLCByZXNvbHZlLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbGl0aWVzLmFyZ3VtZW50c09iamVjdEZyb21GaWVsZChmaWVsZCwgdmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY0NvbnRleHQuY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBmaWVsZDogZmllbGQsIGZyYWdtZW50TWFwOiBleGVjQ29udGV4dC5mcmFnbWVudE1hcCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHJlc3VsdFByb21pc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSB7IHJlc3VsdCA9IGRlZmF1bHRSZXN1bHQ7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnZXhwb3J0JyAmJiBkaXJlY3RpdmUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmcubmFtZS52YWx1ZSA9PT0gJ2FzJyAmJiBhcmcudmFsdWUua2luZCA9PT0gJ1N0cmluZ1ZhbHVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjQ29udGV4dC5leHBvcnRlZFZhcmlhYmxlc1thcmcudmFsdWUudmFsdWVdID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQ2xpZW50RmllbGQgPSAoX2IgPSAoX2EgPSBmaWVsZC5kaXJlY3RpdmVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc29tZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lLnZhbHVlID09PSAnY2xpZW50JzsgfSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU3ViU2VsZWN0ZWRBcnJheShmaWVsZCwgaXNDbGllbnRGaWVsZERlc2NlbmRhbnQgfHwgaXNDbGllbnRGaWVsZCwgcmVzdWx0LCBleGVjQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmVTZWxlY3Rpb25TZXQoZmllbGQuc2VsZWN0aW9uU2V0LCBpc0NsaWVudEZpZWxkRGVzY2VuZGFudCB8fCBpc0NsaWVudEZpZWxkLCByZXN1bHQsIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZVN1YlNlbGVjdGVkQXJyYXkgPSBmdW5jdGlvbiAoZmllbGQsIGlzQ2xpZW50RmllbGREZXNjZW5kYW50LCByZXN1bHQsIGV4ZWNDb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHQubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVN1YlNlbGVjdGVkQXJyYXkoZmllbGQsIGlzQ2xpZW50RmllbGREZXNjZW5kYW50LCBpdGVtLCBleGVjQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmVTZWxlY3Rpb25TZXQoZmllbGQuc2VsZWN0aW9uU2V0LCBpc0NsaWVudEZpZWxkRGVzY2VuZGFudCwgaXRlbSwgZXhlY0NvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5jb2xsZWN0U2VsZWN0aW9uc1RvUmVzb2x2ZSA9IGZ1bmN0aW9uIChtYWluRGVmaW5pdGlvbiwgZnJhZ21lbnRNYXApIHtcbiAgICAgICAgdmFyIGlzU2luZ2xlQVNUTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiAhQXJyYXkuaXNBcnJheShub2RlKTsgfTtcbiAgICAgICAgdmFyIHNlbGVjdGlvbnNUb1Jlc29sdmVDYWNoZSA9IHRoaXMuc2VsZWN0aW9uc1RvUmVzb2x2ZUNhY2hlO1xuICAgICAgICBmdW5jdGlvbiBjb2xsZWN0QnlEZWZpbml0aW9uKGRlZmluaXRpb25Ob2RlKSB7XG4gICAgICAgICAgICBpZiAoIXNlbGVjdGlvbnNUb1Jlc29sdmVDYWNoZS5oYXMoZGVmaW5pdGlvbk5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXNfMSA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25zVG9SZXNvbHZlQ2FjaGUuc2V0KGRlZmluaXRpb25Ob2RlLCBtYXRjaGVzXzEpO1xuICAgICAgICAgICAgICAgIGdyYXBocWwudmlzaXQoZGVmaW5pdGlvbk5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgRGlyZWN0aXZlOiBmdW5jdGlvbiAobm9kZSwgXywgX18sIF9fXywgYW5jZXN0b3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5uYW1lLnZhbHVlID09PSAnY2xpZW50Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2VzdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NpbmdsZUFTVE5vZGUobm9kZSkgJiYgZ3JhcGhxbC5pc1NlbGVjdGlvbk5vZGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXNfMS5hZGQobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgRnJhZ21lbnRTcHJlYWQ6IGZ1bmN0aW9uIChzcHJlYWQsIF8sIF9fLCBfX18sIGFuY2VzdG9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZnJhZ21lbnRNYXBbc3ByZWFkLm5hbWUudmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50LCBcIk5vIGZyYWdtZW50IG5hbWVkIFwiLmNvbmNhdChzcHJlYWQubmFtZS52YWx1ZSkpIDogZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnQsIDEyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmcmFnbWVudFNlbGVjdGlvbnMgPSBjb2xsZWN0QnlEZWZpbml0aW9uKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcmFnbWVudFNlbGVjdGlvbnMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNlc3RvcnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTaW5nbGVBU1ROb2RlKG5vZGUpICYmIGdyYXBocWwuaXNTZWxlY3Rpb25Ob2RlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzXzEuYWRkKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc18xLmFkZChzcHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc18xLmFkZChzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0aW9uc1RvUmVzb2x2ZUNhY2hlLmdldChkZWZpbml0aW9uTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxlY3RCeURlZmluaXRpb24obWFpbkRlZmluaXRpb24pO1xuICAgIH07XG4gICAgcmV0dXJuIExvY2FsU3RhdGU7XG59KCkpO1xuXG52YXIgZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMgPSBuZXcgKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwID8gV2Vha01hcCA6IE1hcCkoKTtcbmZ1bmN0aW9uIHdyYXBEZXN0cnVjdGl2ZUNhY2hlTWV0aG9kKGNhY2hlLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIG9yaWdpbmFsID0gY2FjaGVbbWV0aG9kTmFtZV07XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhY2hlW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMuc2V0KGNhY2hlLCAoZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMuZ2V0KGNhY2hlKSArIDEpICUgMWUxNSk7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBjYW5jZWxOb3RpZnlUaW1lb3V0KGluZm8pIHtcbiAgICBpZiAoaW5mb1tcIm5vdGlmeVRpbWVvdXRcIl0pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGluZm9bXCJub3RpZnlUaW1lb3V0XCJdKTtcbiAgICAgICAgaW5mb1tcIm5vdGlmeVRpbWVvdXRcIl0gPSB2b2lkIDA7XG4gICAgfVxufVxudmFyIFF1ZXJ5SW5mbyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUXVlcnlJbmZvKHF1ZXJ5TWFuYWdlciwgcXVlcnlJZCkge1xuICAgICAgICBpZiAocXVlcnlJZCA9PT0gdm9pZCAwKSB7IHF1ZXJ5SWQgPSBxdWVyeU1hbmFnZXIuZ2VuZXJhdGVRdWVyeUlkKCk7IH1cbiAgICAgICAgdGhpcy5xdWVyeUlkID0gcXVlcnlJZDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RSZXF1ZXN0SWQgPSAxO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZVF1ZXJ5ID0gbnVsbDtcbiAgICAgICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZSA9IHF1ZXJ5TWFuYWdlci5jYWNoZTtcbiAgICAgICAgaWYgKCFkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5oYXMoY2FjaGUpKSB7XG4gICAgICAgICAgICBkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5zZXQoY2FjaGUsIDApO1xuICAgICAgICAgICAgd3JhcERlc3RydWN0aXZlQ2FjaGVNZXRob2QoY2FjaGUsIFwiZXZpY3RcIik7XG4gICAgICAgICAgICB3cmFwRGVzdHJ1Y3RpdmVDYWNoZU1ldGhvZChjYWNoZSwgXCJtb2RpZnlcIik7XG4gICAgICAgICAgICB3cmFwRGVzdHJ1Y3RpdmVDYWNoZU1ldGhvZChjYWNoZSwgXCJyZXNldFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgdmFyIG5ldHdvcmtTdGF0dXMgPSBxdWVyeS5uZXR3b3JrU3RhdHVzIHx8IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5sb2FkaW5nO1xuICAgICAgICBpZiAodGhpcy52YXJpYWJsZXMgJiZcbiAgICAgICAgICAgIHRoaXMubmV0d29ya1N0YXR1cyAhPT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbCh0aGlzLnZhcmlhYmxlcywgcXVlcnkudmFyaWFibGVzKSkge1xuICAgICAgICAgICAgbmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5zZXRWYXJpYWJsZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlcXVhbGl0eS5lcXVhbChxdWVyeS52YXJpYWJsZXMsIHRoaXMudmFyaWFibGVzKSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0RGlmZiA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgICAgIGRvY3VtZW50OiBxdWVyeS5kb2N1bWVudCxcbiAgICAgICAgICAgIHZhcmlhYmxlczogcXVlcnkudmFyaWFibGVzLFxuICAgICAgICAgICAgbmV0d29ya0Vycm9yOiBudWxsLFxuICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogdGhpcy5ncmFwaFFMRXJyb3JzIHx8IFtdLFxuICAgICAgICAgICAgbmV0d29ya1N0YXR1czogbmV0d29ya1N0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChxdWVyeS5vYnNlcnZhYmxlUXVlcnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0T2JzZXJ2YWJsZVF1ZXJ5KHF1ZXJ5Lm9ic2VydmFibGVRdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXJ5Lmxhc3RSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFJlcXVlc3RJZCA9IHF1ZXJ5Lmxhc3RSZXF1ZXN0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxOb3RpZnlUaW1lb3V0KHRoaXMpO1xuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLmdldERpZmYgPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlczsgfVxuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMuZ2V0RGlmZk9wdGlvbnModmFyaWFibGVzKTtcbiAgICAgICAgaWYgKHRoaXMubGFzdERpZmYgJiYgZXF1YWxpdHkuZXF1YWwob3B0aW9ucywgdGhpcy5sYXN0RGlmZi5vcHRpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdERpZmYuZGlmZjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVdhdGNoKHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzKTtcbiAgICAgICAgdmFyIG9xID0gdGhpcy5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgIGlmIChvcSAmJiBvcS5vcHRpb25zLmZldGNoUG9saWN5ID09PSBcIm5vLWNhY2hlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGNvbXBsZXRlOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaWZmID0gdGhpcy5jYWNoZS5kaWZmKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhc3REaWZmKGRpZmYsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gZGlmZjtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUudXBkYXRlTGFzdERpZmYgPSBmdW5jdGlvbiAoZGlmZiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmxhc3REaWZmID0gZGlmZiA/IHtcbiAgICAgICAgICAgIGRpZmY6IGRpZmYsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHRoaXMuZ2V0RGlmZk9wdGlvbnMoKSxcbiAgICAgICAgfSA6IHZvaWQgMDtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuZ2V0RGlmZk9wdGlvbnMgPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzOyB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWVyeTogdGhpcy5kb2N1bWVudCxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiB0cnVlLFxuICAgICAgICAgICAgY2Fub25pemVSZXN1bHRzOiAoX2EgPSB0aGlzLm9ic2VydmFibGVRdWVyeSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9wdGlvbnMuY2Fub25pemVSZXN1bHRzLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zZXREaWZmID0gZnVuY3Rpb24gKGRpZmYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9sZERpZmYgPSB0aGlzLmxhc3REaWZmICYmIHRoaXMubGFzdERpZmYuZGlmZjtcbiAgICAgICAgdGhpcy51cGRhdGVMYXN0RGlmZihkaWZmKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpcnR5ICYmXG4gICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwob2xkRGlmZiAmJiBvbGREaWZmLnJlc3VsdCwgZGlmZiAmJiBkaWZmLnJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vdGlmeVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm5vdGlmeSgpOyB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zZXRPYnNlcnZhYmxlUXVlcnkgPSBmdW5jdGlvbiAob3EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG9xID09PSB0aGlzLm9ic2VydmFibGVRdWVyeSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMub3FMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuZGVsZXRlKHRoaXMub3FMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlUXVlcnkgPSBvcTtcbiAgICAgICAgaWYgKG9xKSB7XG4gICAgICAgICAgICBvcVtcInF1ZXJ5SW5mb1wiXSA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5hZGQodGhpcy5vcUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBkaWZmID0gX3RoaXMuZ2V0RGlmZigpO1xuICAgICAgICAgICAgICAgIGlmIChkaWZmLmZyb21PcHRpbWlzdGljVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgb3FbXCJvYnNlcnZlXCJdKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW9ic2VydmVDYWNoZUZpcnN0KG9xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9xTGlzdGVuZXI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjYW5jZWxOb3RpZnlUaW1lb3V0KHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGROb3RpZnkoKSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKF90aGlzKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zaG91bGROb3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5kaXJ0eSB8fCAhdGhpcy5saXN0ZW5lcnMuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQodGhpcy5uZXR3b3JrU3RhdHVzKSAmJlxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlUXVlcnkpIHtcbiAgICAgICAgICAgIHZhciBmZXRjaFBvbGljeSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5Lm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgIT09IFwiY2FjaGUtb25seVwiICYmXG4gICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgIT09IFwiY2FjaGUtYW5kLW5ldHdvcmtcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwgPSBRdWVyeUluZm8ucHJvdG90eXBlLmNhbmNlbDtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1Yi51bnN1YnNjcmliZSgpOyB9KTtcbiAgICAgICAgICAgIHZhciBvcSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICAgICAgaWYgKG9xKVxuICAgICAgICAgICAgICAgIG9xLnN0b3BQb2xsaW5nKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUudXBkYXRlV2F0Y2ggPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlczsgfVxuICAgICAgICB2YXIgb3EgPSB0aGlzLm9ic2VydmFibGVRdWVyeTtcbiAgICAgICAgaWYgKG9xICYmIG9xLm9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09IFwibm8tY2FjaGVcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3YXRjaE9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5nZXREaWZmT3B0aW9ucyh2YXJpYWJsZXMpKSwgeyB3YXRjaGVyOiB0aGlzLCBjYWxsYmFjazogZnVuY3Rpb24gKGRpZmYpIHsgcmV0dXJuIF90aGlzLnNldERpZmYoZGlmZik7IH0gfSk7XG4gICAgICAgIGlmICghdGhpcy5sYXN0V2F0Y2ggfHxcbiAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbCh3YXRjaE9wdGlvbnMsIHRoaXMubGFzdFdhdGNoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsID0gdGhpcy5jYWNoZS53YXRjaCh0aGlzLmxhc3RXYXRjaCA9IHdhdGNoT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUucmVzZXRMYXN0V3JpdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGFzdFdyaXRlID0gdm9pZCAwO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zaG91bGRXcml0ZSA9IGZ1bmN0aW9uIChyZXN1bHQsIHZhcmlhYmxlcykge1xuICAgICAgICB2YXIgbGFzdFdyaXRlID0gdGhpcy5sYXN0V3JpdGU7XG4gICAgICAgIHJldHVybiAhKGxhc3RXcml0ZSAmJlxuICAgICAgICAgICAgbGFzdFdyaXRlLmRtQ291bnQgPT09IGRlc3RydWN0aXZlTWV0aG9kQ291bnRzLmdldCh0aGlzLmNhY2hlKSAmJlxuICAgICAgICAgICAgZXF1YWxpdHkuZXF1YWwodmFyaWFibGVzLCBsYXN0V3JpdGUudmFyaWFibGVzKSAmJlxuICAgICAgICAgICAgZXF1YWxpdHkuZXF1YWwocmVzdWx0LmRhdGEsIGxhc3RXcml0ZS5yZXN1bHQuZGF0YSkpO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5tYXJrUmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdCwgZG9jdW1lbnQsIG9wdGlvbnMsIGNhY2hlV3JpdGVCZWhhdmlvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbWVyZ2VyID0gbmV3IHV0aWxpdGllcy5EZWVwTWVyZ2VyKCk7XG4gICAgICAgIHZhciBncmFwaFFMRXJyb3JzID0gdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShyZXN1bHQuZXJyb3JzKVxuICAgICAgICAgICAgPyByZXN1bHQuZXJyb3JzLnNsaWNlKDApXG4gICAgICAgICAgICA6IFtdO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIGlmICgnaW5jcmVtZW50YWwnIGluIHJlc3VsdCAmJiB1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KHJlc3VsdC5pbmNyZW1lbnRhbCkpIHtcbiAgICAgICAgICAgIHZhciBtZXJnZWREYXRhID0gbWVyZ2VJbmNyZW1lbnRhbERhdGEodGhpcy5nZXREaWZmKCkucmVzdWx0LCByZXN1bHQpO1xuICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBtZXJnZWREYXRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCdoYXNOZXh0JyBpbiByZXN1bHQgJiYgcmVzdWx0Lmhhc05leHQpIHtcbiAgICAgICAgICAgIHZhciBkaWZmID0gdGhpcy5nZXREaWZmKCk7XG4gICAgICAgICAgICByZXN1bHQuZGF0YSA9IG1lcmdlci5tZXJnZShkaWZmLnJlc3VsdCwgcmVzdWx0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JhcGhRTEVycm9ycyA9IGdyYXBoUUxFcnJvcnM7XG4gICAgICAgIGlmIChvcHRpb25zLmZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxhc3REaWZmKHsgcmVzdWx0OiByZXN1bHQuZGF0YSwgY29tcGxldGU6IHRydWUgfSwgdGhpcy5nZXREaWZmT3B0aW9ucyhvcHRpb25zLnZhcmlhYmxlcykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNhY2hlV3JpdGVCZWhhdmlvciAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFdyaXRlUmVzdWx0KHJlc3VsdCwgb3B0aW9ucy5lcnJvclBvbGljeSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnBlcmZvcm1UcmFuc2FjdGlvbihmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnNob3VsZFdyaXRlKHJlc3VsdCwgb3B0aW9ucy52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyd3JpdGU6IGNhY2hlV3JpdGVCZWhhdmlvciA9PT0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFzdFdyaXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG1Db3VudDogZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMuZ2V0KF90aGlzLmNhY2hlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGFzdERpZmYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXN0RGlmZi5kaWZmLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBfdGhpcy5sYXN0RGlmZi5kaWZmLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpZmZPcHRpb25zID0gX3RoaXMuZ2V0RGlmZk9wdGlvbnMob3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IGNhY2hlLmRpZmYoZGlmZk9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLnN0b3BwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVdhdGNoKG9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVMYXN0RGlmZihkaWZmLCBkaWZmT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGF0YSA9IGRpZmYucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RXcml0ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5tYXJrUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubmV0d29ya0Vycm9yID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWFkeTtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUubWFya0Vycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMubmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5lcnJvcjtcbiAgICAgICAgdGhpcy5sYXN0V3JpdGUgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgaWYgKGVycm9yLmdyYXBoUUxFcnJvcnMpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhRTEVycm9ycyA9IGVycm9yLmdyYXBoUUxFcnJvcnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yLm5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgdGhpcy5uZXR3b3JrRXJyb3IgPSBlcnJvci5uZXR3b3JrRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXJ5SW5mbztcbn0oKSk7XG5mdW5jdGlvbiBzaG91bGRXcml0ZVJlc3VsdChyZXN1bHQsIGVycm9yUG9saWN5KSB7XG4gICAgaWYgKGVycm9yUG9saWN5ID09PSB2b2lkIDApIHsgZXJyb3JQb2xpY3kgPSBcIm5vbmVcIjsgfVxuICAgIHZhciBpZ25vcmVFcnJvcnMgPSBlcnJvclBvbGljeSA9PT0gXCJpZ25vcmVcIiB8fFxuICAgICAgICBlcnJvclBvbGljeSA9PT0gXCJhbGxcIjtcbiAgICB2YXIgd3JpdGVXaXRoRXJyb3JzID0gIXV0aWxpdGllcy5ncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KTtcbiAgICBpZiAoIXdyaXRlV2l0aEVycm9ycyAmJiBpZ25vcmVFcnJvcnMgJiYgcmVzdWx0LmRhdGEpIHtcbiAgICAgICAgd3JpdGVXaXRoRXJyb3JzID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlV2l0aEVycm9ycztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBRdWVyeU1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFF1ZXJ5TWFuYWdlcihfYSkge1xuICAgICAgICB2YXIgY2FjaGUgPSBfYS5jYWNoZSwgbGluayA9IF9hLmxpbmssIGRlZmF1bHRPcHRpb25zID0gX2EuZGVmYXVsdE9wdGlvbnMsIF9iID0gX2EucXVlcnlEZWR1cGxpY2F0aW9uLCBxdWVyeURlZHVwbGljYXRpb24gPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYiwgb25Ccm9hZGNhc3QgPSBfYS5vbkJyb2FkY2FzdCwgX2MgPSBfYS5zc3JNb2RlLCBzc3JNb2RlID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIF9kID0gX2EuY2xpZW50QXdhcmVuZXNzLCBjbGllbnRBd2FyZW5lc3MgPSBfZCA9PT0gdm9pZCAwID8ge30gOiBfZCwgbG9jYWxTdGF0ZSA9IF9hLmxvY2FsU3RhdGUsIGFzc3VtZUltbXV0YWJsZVJlc3VsdHMgPSBfYS5hc3N1bWVJbW11dGFibGVSZXN1bHRzO1xuICAgICAgICB0aGlzLmNsaWVudEF3YXJlbmVzcyA9IHt9O1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZmV0Y2hDYW5jZWxGbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQ2FjaGUgPSBuZXcgKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwID8gV2Vha01hcCA6IE1hcCkoKTtcbiAgICAgICAgdGhpcy5xdWVyeUlkQ291bnRlciA9IDE7XG4gICAgICAgIHRoaXMucmVxdWVzdElkQ291bnRlciA9IDE7XG4gICAgICAgIHRoaXMubXV0YXRpb25JZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLmluRmxpZ2h0TGlua09ic2VydmFibGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgIHRoaXMubGluayA9IGxpbms7XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucyB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnF1ZXJ5RGVkdXBsaWNhdGlvbiA9IHF1ZXJ5RGVkdXBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5jbGllbnRBd2FyZW5lc3MgPSBjbGllbnRBd2FyZW5lc3M7XG4gICAgICAgIHRoaXMubG9jYWxTdGF0ZSA9IGxvY2FsU3RhdGUgfHwgbmV3IExvY2FsU3RhdGUoeyBjYWNoZTogY2FjaGUgfSk7XG4gICAgICAgIHRoaXMuc3NyTW9kZSA9IHNzck1vZGU7XG4gICAgICAgIHRoaXMuYXNzdW1lSW1tdXRhYmxlUmVzdWx0cyA9ICEhYXNzdW1lSW1tdXRhYmxlUmVzdWx0cztcbiAgICAgICAgaWYgKCh0aGlzLm9uQnJvYWRjYXN0ID0gb25Ccm9hZGNhc3QpKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uU3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9pbmZvLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wUXVlcnlOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FuY2VsUGVuZGluZ0ZldGNoZXMoX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKCdRdWVyeU1hbmFnZXIgc3RvcHBlZCB3aGlsZSBxdWVyeSB3YXMgaW4gZmxpZ2h0JykgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigxNCkpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5jYW5jZWxQZW5kaW5nRmV0Y2hlcyA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLmZldGNoQ2FuY2VsRm5zLmZvckVhY2goZnVuY3Rpb24gKGNhbmNlbCkgeyByZXR1cm4gY2FuY2VsKGVycm9yKTsgfSk7XG4gICAgICAgIHRoaXMuZmV0Y2hDYW5jZWxGbnMuY2xlYXIoKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUubXV0YXRlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfYiwgX2M7XG4gICAgICAgIHZhciBtdXRhdGlvbiA9IF9hLm11dGF0aW9uLCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIG9wdGltaXN0aWNSZXNwb25zZSA9IF9hLm9wdGltaXN0aWNSZXNwb25zZSwgdXBkYXRlUXVlcmllcyA9IF9hLnVwZGF0ZVF1ZXJpZXMsIF9kID0gX2EucmVmZXRjaFF1ZXJpZXMsIHJlZmV0Y2hRdWVyaWVzID0gX2QgPT09IHZvaWQgMCA/IFtdIDogX2QsIF9lID0gX2EuYXdhaXRSZWZldGNoUXVlcmllcywgYXdhaXRSZWZldGNoUXVlcmllcyA9IF9lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9lLCB1cGRhdGVXaXRoUHJveHlGbiA9IF9hLnVwZGF0ZSwgb25RdWVyeVVwZGF0ZWQgPSBfYS5vblF1ZXJ5VXBkYXRlZCwgX2YgPSBfYS5mZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3kgPSBfZiA9PT0gdm9pZCAwID8gKChfYiA9IHRoaXMuZGVmYXVsdE9wdGlvbnMubXV0YXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZmV0Y2hQb2xpY3kpIHx8IFwibmV0d29yay1vbmx5XCIgOiBfZiwgX2cgPSBfYS5lcnJvclBvbGljeSwgZXJyb3JQb2xpY3kgPSBfZyA9PT0gdm9pZCAwID8gKChfYyA9IHRoaXMuZGVmYXVsdE9wdGlvbnMubXV0YXRlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZXJyb3JQb2xpY3kpIHx8IFwibm9uZVwiIDogX2csIGtlZXBSb290RmllbGRzID0gX2Eua2VlcFJvb3RGaWVsZHMsIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbXV0YXRpb25JZCwgX2gsIGRvY3VtZW50LCBoYXNDbGllbnRFeHBvcnRzLCBtdXRhdGlvblN0b3JlVmFsdWUsIHNlbGY7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9qKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfai5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQobXV0YXRpb24sICdtdXRhdGlvbiBvcHRpb24gaXMgcmVxdWlyZWQuIFlvdSBtdXN0IHNwZWNpZnkgeW91ciBHcmFwaFFMIGRvY3VtZW50IGluIHRoZSBtdXRhdGlvbiBvcHRpb24uJykgOiBnbG9iYWxzLmludmFyaWFudChtdXRhdGlvbiwgMTUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnLCBcIk11dGF0aW9ucyBzdXBwb3J0IG9ubHkgJ25ldHdvcmstb25seScgb3IgJ25vLWNhY2hlJyBmZXRjaFBvbGljeSBzdHJpbmdzLiBUaGUgZGVmYXVsdCBgbmV0d29yay1vbmx5YCBiZWhhdmlvciBhdXRvbWF0aWNhbGx5IHdyaXRlcyBtdXRhdGlvbiByZXN1bHRzIHRvIHRoZSBjYWNoZS4gUGFzc2luZyBgbm8tY2FjaGVgIHNraXBzIHRoZSBjYWNoZSB3cml0ZS5cIikgOiBnbG9iYWxzLmludmFyaWFudChmZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJywgMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25JZCA9IHRoaXMuZ2VuZXJhdGVNdXRhdGlvbklkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaCA9IHRoaXMudHJhbnNmb3JtKG11dGF0aW9uKSwgZG9jdW1lbnQgPSBfaC5kb2N1bWVudCwgaGFzQ2xpZW50RXhwb3J0cyA9IF9oLmhhc0NsaWVudEV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbiA9IHRoaXMuY2FjaGUudHJhbnNmb3JtRm9yTGluayhkb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhtdXRhdGlvbiwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzQ2xpZW50RXhwb3J0cykgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5sb2NhbFN0YXRlLmFkZEV4cG9ydGVkVmFyaWFibGVzKG11dGF0aW9uLCB2YXJpYWJsZXMsIGNvbnRleHQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzID0gKF9qLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfai5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uU3RvcmVWYWx1ZSA9IHRoaXMubXV0YXRpb25TdG9yZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm11dGF0aW9uU3RvcmVbbXV0YXRpb25JZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uOiBtdXRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGltaXN0aWNSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFya011dGF0aW9uT3B0aW1pc3RpYyhvcHRpbWlzdGljUmVzcG9uc2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25JZDogbXV0YXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IG11dGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IGZldGNoUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvclBvbGljeTogZXJyb3JQb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJpZXM6IHVwZGF0ZVF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogdXBkYXRlV2l0aFByb3h5Rm4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBSb290RmllbGRzOiBrZWVwUm9vdEZpZWxkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5hc3luY01hcChzZWxmLmdldE9ic2VydmFibGVGcm9tTGluayhtdXRhdGlvbiwgdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IG9wdGltaXN0aWNSZXNwb25zZTogb3B0aW1pc3RpY1Jlc3BvbnNlIH0pLCB2YXJpYWJsZXMsIGZhbHNlKSwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5ncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KSAmJiBlcnJvclBvbGljeSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGVycm9ycy5BcG9sbG9FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IHV0aWxpdGllcy5nZXRHcmFwaFFMRXJyb3JzRnJvbVJlc3VsdChyZXN1bHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uU3RvcmVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uU3RvcmVWYWx1ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25TdG9yZVZhbHVlLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZVJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHt9LCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWZldGNoUXVlcmllcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXMgPSByZWZldGNoUXVlcmllcyhzdG9yZVJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JQb2xpY3kgPT09ICdpZ25vcmUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbGl0aWVzLmdyYXBoUUxSZXN1bHRIYXNFcnJvcihzdG9yZVJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RvcmVSZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYubWFya011dGF0aW9uUmVzdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbklkOiBtdXRhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogc3RvcmVSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IG11dGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiBmZXRjaFBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvclBvbGljeTogZXJyb3JQb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZVdpdGhQcm94eUZuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJpZXM6IHVwZGF0ZVF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRSZWZldGNoUXVlcmllczogYXdhaXRSZWZldGNoUXVlcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogcmVmZXRjaFF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlT3B0aW1pc3RpYzogb3B0aW1pc3RpY1Jlc3BvbnNlID8gbXV0YXRpb25JZCA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblF1ZXJ5VXBkYXRlZDogb25RdWVyeVVwZGF0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2VlcFJvb3RGaWVsZHM6IGtlZXBSb290RmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoc3RvcmVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgnaGFzTmV4dCcgaW4gc3RvcmVSZXN1bHQpIHx8IHN0b3JlUmVzdWx0Lmhhc05leHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc3RvcmVSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvblN0b3JlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25TdG9yZVZhbHVlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25TdG9yZVZhbHVlLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW1pc3RpY1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FjaGUucmVtb3ZlT3B0aW1pc3RpYyhtdXRhdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyciBpbnN0YW5jZW9mIGVycm9ycy5BcG9sbG9FcnJvciA/IGVyciA6IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5tYXJrTXV0YXRpb25SZXN1bHQgPSBmdW5jdGlvbiAobXV0YXRpb24sIGNhY2hlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChjYWNoZSA9PT0gdm9pZCAwKSB7IGNhY2hlID0gdGhpcy5jYWNoZTsgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gbXV0YXRpb24ucmVzdWx0O1xuICAgICAgICB2YXIgY2FjaGVXcml0ZXMgPSBbXTtcbiAgICAgICAgdmFyIHNraXBDYWNoZSA9IG11dGF0aW9uLmZldGNoUG9saWN5ID09PSBcIm5vLWNhY2hlXCI7XG4gICAgICAgIGlmICghc2tpcENhY2hlICYmIHNob3VsZFdyaXRlUmVzdWx0KHJlc3VsdCwgbXV0YXRpb24uZXJyb3JQb2xpY3kpKSB7XG4gICAgICAgICAgICBpZiAoIWlzRXhlY3V0aW9uUGF0Y2hJbmNyZW1lbnRhbFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVXcml0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJZDogJ1JPT1RfTVVUQVRJT04nLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogbXV0YXRpb24uZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogbXV0YXRpb24udmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRXhlY3V0aW9uUGF0Y2hJbmNyZW1lbnRhbFJlc3VsdChyZXN1bHQpICYmIHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkocmVzdWx0LmluY3JlbWVudGFsKSkge1xuICAgICAgICAgICAgICAgIHZhciBkaWZmID0gY2FjaGUuZGlmZih7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIlJPT1RfTVVUQVRJT05cIixcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMudHJhbnNmb3JtKG11dGF0aW9uLmRvY3VtZW50KS5hc1F1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG11dGF0aW9uLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBtZXJnZWREYXRhID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmIChkaWZmLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBtZXJnZWREYXRhID0gbWVyZ2VJbmNyZW1lbnRhbERhdGEoZGlmZi5yZXN1bHQsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVyZ2VkRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBtZXJnZWREYXRhO1xuICAgICAgICAgICAgICAgICAgICBjYWNoZVdyaXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogbWVyZ2VkRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJZDogJ1JPT1RfTVVUQVRJT04nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG11dGF0aW9uLmRvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBtdXRhdGlvbi52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1cGRhdGVRdWVyaWVzXzEgPSBtdXRhdGlvbi51cGRhdGVRdWVyaWVzO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZVF1ZXJpZXNfMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSwgcXVlcnlJZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZVF1ZXJ5ID0gX2Eub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnlOYW1lID0gb2JzZXJ2YWJsZVF1ZXJ5ICYmIG9ic2VydmFibGVRdWVyeS5xdWVyeU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcXVlcnlOYW1lIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHVwZGF0ZVF1ZXJpZXNfMSwgcXVlcnlOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVyID0gdXBkYXRlUXVlcmllc18xW3F1ZXJ5TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF90aGlzLnF1ZXJpZXMuZ2V0KHF1ZXJ5SWQpLCBkb2N1bWVudCA9IF9iLmRvY3VtZW50LCB2YXJpYWJsZXMgPSBfYi52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYyA9IGNhY2hlLmRpZmYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KSwgY3VycmVudFF1ZXJ5UmVzdWx0ID0gX2MucmVzdWx0LCBjb21wbGV0ZSA9IF9jLmNvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGUgJiYgY3VycmVudFF1ZXJ5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dFF1ZXJ5UmVzdWx0ID0gdXBkYXRlcihjdXJyZW50UXVlcnlSZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZTogZG9jdW1lbnQgJiYgdXRpbGl0aWVzLmdldE9wZXJhdGlvbk5hbWUoZG9jdW1lbnQpIHx8IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFF1ZXJ5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVXcml0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogbmV4dFF1ZXJ5UmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSWQ6ICdST09UX1FVRVJZJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYWNoZVdyaXRlcy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICBtdXRhdGlvbi5yZWZldGNoUXVlcmllcyB8fFxuICAgICAgICAgICAgbXV0YXRpb24udXBkYXRlIHx8XG4gICAgICAgICAgICBtdXRhdGlvbi5vblF1ZXJ5VXBkYXRlZCB8fFxuICAgICAgICAgICAgbXV0YXRpb24ucmVtb3ZlT3B0aW1pc3RpYykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdHNfMSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5yZWZldGNoUXVlcmllcyh7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2FjaGU6IGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNraXBDYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVXcml0ZXMuZm9yRWFjaChmdW5jdGlvbiAod3JpdGUpIHsgcmV0dXJuIGNhY2hlLndyaXRlKHdyaXRlKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IG11dGF0aW9uLnVwZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRmluYWxSZXN1bHQgPSAhaXNFeGVjdXRpb25QYXRjaFJlc3VsdChyZXN1bHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoaXNFeGVjdXRpb25QYXRjaEluY3JlbWVudGFsUmVzdWx0KHJlc3VsdCkgJiYgIXJlc3VsdC5oYXNOZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFza2lwQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IGNhY2hlLmRpZmYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJST09UX01VVEFUSU9OXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBfdGhpcy50cmFuc2Zvcm0obXV0YXRpb24uZG9jdW1lbnQpLmFzUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogbXV0YXRpb24udmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHJlc3VsdCksIHsgZGF0YTogZGlmZi5yZXN1bHQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnaW5jcmVtZW50YWwnIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdC5pbmNyZW1lbnRhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ2hhc05leHQnIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdC5oYXNOZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmluYWxSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUoY2FjaGUsIHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBtdXRhdGlvbi5jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG11dGF0aW9uLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNraXBDYWNoZSAmJiAhbXV0YXRpb24ua2VlcFJvb3RGaWVsZHMgJiYgaXNGaW5hbFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUubW9kaWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ1JPT1RfTVVUQVRJT04nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGROYW1lID0gX2EuZmllbGROYW1lLCBERUxFVEUgPSBfYS5ERUxFVEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZE5hbWUgPT09IFwiX190eXBlbmFtZVwiID8gdmFsdWUgOiBERUxFVEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBtdXRhdGlvbi5yZWZldGNoUXVlcmllcyxcbiAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZW1vdmVPcHRpbWlzdGljOiBtdXRhdGlvbi5yZW1vdmVPcHRpbWlzdGljLFxuICAgICAgICAgICAgICAgIG9uUXVlcnlVcGRhdGVkOiBtdXRhdGlvbi5vblF1ZXJ5VXBkYXRlZCB8fCBudWxsLFxuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiByZXN1bHRzXzEucHVzaChyZXN1bHQpOyB9KTtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hd2FpdFJlZmV0Y2hRdWVyaWVzIHx8IG11dGF0aW9uLm9uUXVlcnlVcGRhdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHNfMSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiByZXN1bHQ7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUubWFya011dGF0aW9uT3B0aW1pc3RpYyA9IGZ1bmN0aW9uIChvcHRpbWlzdGljUmVzcG9uc2UsIG11dGF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhID0gdHlwZW9mIG9wdGltaXN0aWNSZXNwb25zZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IG9wdGltaXN0aWNSZXNwb25zZShtdXRhdGlvbi52YXJpYWJsZXMpXG4gICAgICAgICAgICA6IG9wdGltaXN0aWNSZXNwb25zZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVjb3JkT3B0aW1pc3RpY1RyYW5zYWN0aW9uKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tYXJrTXV0YXRpb25SZXN1bHQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG11dGF0aW9uKSwgeyByZXN1bHQ6IHsgZGF0YTogZGF0YSB9IH0pLCBjYWNoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgbXV0YXRpb24ubXV0YXRpb25JZCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmZldGNoUXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCwgb3B0aW9ucywgbmV0d29ya1N0YXR1cykge1xuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFF1ZXJ5T2JzZXJ2YWJsZShxdWVyeUlkLCBvcHRpb25zLCBuZXR3b3JrU3RhdHVzKS5wcm9taXNlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRRdWVyeVN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5mbywgcXVlcnlJZCkge1xuICAgICAgICAgICAgc3RvcmVbcXVlcnlJZF0gPSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBpbmZvLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBpbmZvLm5ldHdvcmtTdGF0dXMsXG4gICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yOiBpbmZvLm5ldHdvcmtFcnJvcixcbiAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzOiBpbmZvLmdyYXBoUUxFcnJvcnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEVycm9ycyA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHZhciBxdWVyeUluZm8gPSB0aGlzLnF1ZXJpZXMuZ2V0KHF1ZXJ5SWQpO1xuICAgICAgICBpZiAocXVlcnlJbmZvKSB7XG4gICAgICAgICAgICBxdWVyeUluZm8ubmV0d29ya0Vycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcXVlcnlJbmZvLmdyYXBoUUxFcnJvcnMgPSBbXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIHRyYW5zZm9ybUNhY2hlID0gdGhpcy50cmFuc2Zvcm1DYWNoZTtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1DYWNoZS5oYXMoZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtZWQgPSB0aGlzLmNhY2hlLnRyYW5zZm9ybURvY3VtZW50KGRvY3VtZW50KTtcbiAgICAgICAgICAgIHZhciBub0Nvbm5lY3Rpb24gPSB1dGlsaXRpZXMucmVtb3ZlQ29ubmVjdGlvbkRpcmVjdGl2ZUZyb21Eb2N1bWVudCh0cmFuc2Zvcm1lZCk7XG4gICAgICAgICAgICB2YXIgY2xpZW50UXVlcnkgPSB0aGlzLmxvY2FsU3RhdGUuY2xpZW50UXVlcnkodHJhbnNmb3JtZWQpO1xuICAgICAgICAgICAgdmFyIHNlcnZlclF1ZXJ5ID0gbm9Db25uZWN0aW9uICYmIHRoaXMubG9jYWxTdGF0ZS5zZXJ2ZXJRdWVyeShub0Nvbm5lY3Rpb24pO1xuICAgICAgICAgICAgdmFyIGNhY2hlRW50cnlfMSA9IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogdHJhbnNmb3JtZWQsXG4gICAgICAgICAgICAgICAgaGFzQ2xpZW50RXhwb3J0czogdXRpbGl0aWVzLmhhc0NsaWVudEV4cG9ydHModHJhbnNmb3JtZWQpLFxuICAgICAgICAgICAgICAgIGhhc0ZvcmNlZFJlc29sdmVyczogdGhpcy5sb2NhbFN0YXRlLnNob3VsZEZvcmNlUmVzb2x2ZXJzKHRyYW5zZm9ybWVkKSxcbiAgICAgICAgICAgICAgICBjbGllbnRRdWVyeTogY2xpZW50UXVlcnksXG4gICAgICAgICAgICAgICAgc2VydmVyUXVlcnk6IHNlcnZlclF1ZXJ5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYXJzOiB1dGlsaXRpZXMuZ2V0RGVmYXVsdFZhbHVlcyh1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbih0cmFuc2Zvcm1lZCkpLFxuICAgICAgICAgICAgICAgIGFzUXVlcnk6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0cmFuc2Zvcm1lZCksIHsgZGVmaW5pdGlvbnM6IHRyYW5zZm9ybWVkLmRlZmluaXRpb25zLm1hcChmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVmLmtpbmQgPT09IFwiT3BlcmF0aW9uRGVmaW5pdGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmLm9wZXJhdGlvbiAhPT0gXCJxdWVyeVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBkZWYpLCB7IG9wZXJhdGlvbjogXCJxdWVyeVwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgICAgICAgICAgICAgfSkgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgYWRkID0gZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgICAgICAgIGlmIChkb2MgJiYgIXRyYW5zZm9ybUNhY2hlLmhhcyhkb2MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybUNhY2hlLnNldChkb2MsIGNhY2hlRW50cnlfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFkZChkb2N1bWVudCk7XG4gICAgICAgICAgICBhZGQodHJhbnNmb3JtZWQpO1xuICAgICAgICAgICAgYWRkKGNsaWVudFF1ZXJ5KTtcbiAgICAgICAgICAgIGFkZChzZXJ2ZXJRdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldChkb2N1bWVudCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldFZhcmlhYmxlcyA9IGZ1bmN0aW9uIChkb2N1bWVudCwgdmFyaWFibGVzKSB7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy50cmFuc2Zvcm0oZG9jdW1lbnQpLmRlZmF1bHRWYXJzKSwgdmFyaWFibGVzKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUud2F0Y2hRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgdmFyaWFibGVzOiB0aGlzLmdldFZhcmlhYmxlcyhvcHRpb25zLnF1ZXJ5LCBvcHRpb25zLnZhcmlhYmxlcykgfSk7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5ub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvcHRpb25zLm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBxdWVyeUluZm8gPSBuZXcgUXVlcnlJbmZvKHRoaXMpO1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlUXVlcnkoe1xuICAgICAgICAgICAgcXVlcnlNYW5hZ2VyOiB0aGlzLFxuICAgICAgICAgICAgcXVlcnlJbmZvOiBxdWVyeUluZm8sXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5xdWVyaWVzLnNldChvYnNlcnZhYmxlLnF1ZXJ5SWQsIHF1ZXJ5SW5mbyk7XG4gICAgICAgIHF1ZXJ5SW5mby5pbml0KHtcbiAgICAgICAgICAgIGRvY3VtZW50OiBvYnNlcnZhYmxlLnF1ZXJ5LFxuICAgICAgICAgICAgb2JzZXJ2YWJsZVF1ZXJ5OiBvYnNlcnZhYmxlLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvYnNlcnZhYmxlLnZhcmlhYmxlcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zLCBxdWVyeUlkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChxdWVyeUlkID09PSB2b2lkIDApIHsgcXVlcnlJZCA9IHRoaXMuZ2VuZXJhdGVRdWVyeUlkKCk7IH1cbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wdGlvbnMucXVlcnksICdxdWVyeSBvcHRpb24gaXMgcmVxdWlyZWQuIFlvdSBtdXN0IHNwZWNpZnkgeW91ciBHcmFwaFFMIGRvY3VtZW50ICcgK1xuICAgICAgICAgICAgJ2luIHRoZSBxdWVyeSBvcHRpb24uJykgOiBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLnF1ZXJ5LCAxNyk7XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLnF1ZXJ5LmtpbmQgPT09ICdEb2N1bWVudCcsICdZb3UgbXVzdCB3cmFwIHRoZSBxdWVyeSBzdHJpbmcgaW4gYSBcImdxbFwiIHRhZy4nKSA6IGdsb2JhbHMuaW52YXJpYW50KG9wdGlvbnMucXVlcnkua2luZCA9PT0gJ0RvY3VtZW50JywgMTgpO1xuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoIW9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEsICdyZXR1cm5QYXJ0aWFsRGF0YSBvcHRpb24gb25seSBzdXBwb3J0ZWQgb24gd2F0Y2hRdWVyeS4nKSA6IGdsb2JhbHMuaW52YXJpYW50KCFvcHRpb25zLnJldHVyblBhcnRpYWxEYXRhLCAxOSk7XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghb3B0aW9ucy5wb2xsSW50ZXJ2YWwsICdwb2xsSW50ZXJ2YWwgb3B0aW9uIG9ubHkgc3VwcG9ydGVkIG9uIHdhdGNoUXVlcnkuJykgOiBnbG9iYWxzLmludmFyaWFudCghb3B0aW9ucy5wb2xsSW50ZXJ2YWwsIDIwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hRdWVyeShxdWVyeUlkLCBvcHRpb25zKS5maW5hbGx5KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnN0b3BRdWVyeShxdWVyeUlkKTsgfSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdlbmVyYXRlUXVlcnlJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnF1ZXJ5SWRDb3VudGVyKyspO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZW5lcmF0ZVJlcXVlc3RJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdElkQ291bnRlcisrO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZW5lcmF0ZU11dGF0aW9uSWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy5tdXRhdGlvbklkQ291bnRlcisrKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcFF1ZXJ5SW5TdG9yZSA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHRoaXMuc3RvcFF1ZXJ5SW5TdG9yZU5vQnJvYWRjYXN0KHF1ZXJ5SWQpO1xuICAgICAgICB0aGlzLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcFF1ZXJ5SW5TdG9yZU5vQnJvYWRjYXN0ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdmFyIHF1ZXJ5SW5mbyA9IHRoaXMucXVlcmllcy5nZXQocXVlcnlJZCk7XG4gICAgICAgIGlmIChxdWVyeUluZm8pXG4gICAgICAgICAgICBxdWVyeUluZm8uc3RvcCgpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5jbGVhclN0b3JlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge1xuICAgICAgICAgICAgZGlzY2FyZFdhdGNoZXM6IHRydWUsXG4gICAgICAgIH07IH1cbiAgICAgICAgdGhpcy5jYW5jZWxQZW5kaW5nRmV0Y2hlcyhfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoJ1N0b3JlIHJlc2V0IHdoaWxlIHF1ZXJ5IHdhcyBpbiBmbGlnaHQgKG5vdCBjb21wbGV0ZWQgaW4gbGluayBjaGFpbiknKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDIxKSk7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeUluZm8pIHtcbiAgICAgICAgICAgIGlmIChxdWVyeUluZm8ub2JzZXJ2YWJsZVF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMubG9hZGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5tdXRhdGlvblN0b3JlKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uU3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnJlc2V0KG9wdGlvbnMpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRPYnNlcnZhYmxlUXVlcmllcyA9IGZ1bmN0aW9uIChpbmNsdWRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpbmNsdWRlID09PSB2b2lkIDApIHsgaW5jbHVkZSA9IFwiYWN0aXZlXCI7IH1cbiAgICAgICAgdmFyIHF1ZXJpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhciBxdWVyeU5hbWVzQW5kRG9jcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdmFyIGxlZ2FjeVF1ZXJ5T3B0aW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5jbHVkZSkpIHtcbiAgICAgICAgICAgIGluY2x1ZGUuZm9yRWFjaChmdW5jdGlvbiAoZGVzYykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeU5hbWVzQW5kRG9jcy5zZXQoZGVzYywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1dGlsaXRpZXMuaXNEb2N1bWVudE5vZGUoZGVzYykpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lc0FuZERvY3Muc2V0KF90aGlzLnRyYW5zZm9ybShkZXNjKS5kb2N1bWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KGRlc2MpICYmIGRlc2MucXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVnYWN5UXVlcnlPcHRpb25zLmFkZChkZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX2EsIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgIHZhciBvcSA9IF9hLm9ic2VydmFibGVRdWVyeSwgZG9jdW1lbnQgPSBfYS5kb2N1bWVudDtcbiAgICAgICAgICAgIGlmIChvcSkge1xuICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlID09PSBcImFsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJpZXMuc2V0KHF1ZXJ5SWQsIG9xKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlOYW1lID0gb3EucXVlcnlOYW1lLCBmZXRjaFBvbGljeSA9IG9xLm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSBcInN0YW5kYnlcIiB8fFxuICAgICAgICAgICAgICAgICAgICAoaW5jbHVkZSA9PT0gXCJhY3RpdmVcIiAmJiAhb3EuaGFzT2JzZXJ2ZXJzKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluY2x1ZGUgPT09IFwiYWN0aXZlXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgKHF1ZXJ5TmFtZSAmJiBxdWVyeU5hbWVzQW5kRG9jcy5oYXMocXVlcnlOYW1lKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50ICYmIHF1ZXJ5TmFtZXNBbmREb2NzLmhhcyhkb2N1bWVudCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJpZXMuc2V0KHF1ZXJ5SWQsIG9xKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZXNBbmREb2NzLnNldChxdWVyeU5hbWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeU5hbWVzQW5kRG9jcy5zZXQoZG9jdW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsZWdhY3lRdWVyeU9wdGlvbnMuc2l6ZSkge1xuICAgICAgICAgICAgbGVnYWN5UXVlcnlPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlJZCA9IHV0aWxpdGllcy5tYWtlVW5pcXVlSWQoXCJsZWdhY3lPbmVUaW1lUXVlcnlcIik7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5SW5mbyA9IF90aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpLmluaXQoe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogb3B0aW9ucy5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgb3EgPSBuZXcgT2JzZXJ2YWJsZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlNYW5hZ2VyOiBfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlJbmZvOiBxdWVyeUluZm8sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBmZXRjaFBvbGljeTogXCJuZXR3b3JrLW9ubHlcIiB9KSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBnbG9iYWxzLmludmFyaWFudChvcS5xdWVyeUlkID09PSBxdWVyeUlkKTtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8uc2V0T2JzZXJ2YWJsZVF1ZXJ5KG9xKTtcbiAgICAgICAgICAgICAgICBxdWVyaWVzLnNldChxdWVyeUlkLCBvcSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19ERVZfXyAmJiBxdWVyeU5hbWVzQW5kRG9jcy5zaXplKSB7XG4gICAgICAgICAgICBxdWVyeU5hbWVzQW5kRG9jcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmNsdWRlZCwgbmFtZU9yRG9jKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbmNsdWRlZCkge1xuICAgICAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJVbmtub3duIHF1ZXJ5IFwiLmNvbmNhdCh0eXBlb2YgbmFtZU9yRG9jID09PSBcInN0cmluZ1wiID8gXCJuYW1lZCBcIiA6IFwiXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShuYW1lT3JEb2MsIG51bGwsIDIpLCBcIiByZXF1ZXN0ZWQgaW4gcmVmZXRjaFF1ZXJpZXMgb3B0aW9ucy5pbmNsdWRlIGFycmF5XCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcmllcztcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzID0gZnVuY3Rpb24gKGluY2x1ZGVTdGFuZGJ5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpbmNsdWRlU3RhbmRieSA9PT0gdm9pZCAwKSB7IGluY2x1ZGVTdGFuZGJ5ID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIG9ic2VydmFibGVRdWVyeVByb21pc2VzID0gW107XG4gICAgICAgIHRoaXMuZ2V0T2JzZXJ2YWJsZVF1ZXJpZXMoaW5jbHVkZVN0YW5kYnkgPyBcImFsbFwiIDogXCJhY3RpdmVcIikuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2YWJsZVF1ZXJ5LCBxdWVyeUlkKSB7XG4gICAgICAgICAgICB2YXIgZmV0Y2hQb2xpY3kgPSBvYnNlcnZhYmxlUXVlcnkub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgICAgIG9ic2VydmFibGVRdWVyeS5yZXNldExhc3RSZXN1bHRzKCk7XG4gICAgICAgICAgICBpZiAoaW5jbHVkZVN0YW5kYnkgfHxcbiAgICAgICAgICAgICAgICAoZmV0Y2hQb2xpY3kgIT09IFwic3RhbmRieVwiICYmXG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5ICE9PSBcImNhY2hlLW9ubHlcIikpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlUXVlcnlQcm9taXNlcy5wdXNoKG9ic2VydmFibGVRdWVyeS5yZWZldGNoKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuZ2V0UXVlcnkocXVlcnlJZCkuc2V0RGlmZihudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob2JzZXJ2YWJsZVF1ZXJ5UHJvbWlzZXMpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zZXRPYnNlcnZhYmxlUXVlcnkgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZVF1ZXJ5KSB7XG4gICAgICAgIHRoaXMuZ2V0UXVlcnkob2JzZXJ2YWJsZVF1ZXJ5LnF1ZXJ5SWQpLnNldE9ic2VydmFibGVRdWVyeShvYnNlcnZhYmxlUXVlcnkpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdGFydEdyYXBoUUxTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHF1ZXJ5ID0gX2EucXVlcnksIGZldGNoUG9saWN5ID0gX2EuZmV0Y2hQb2xpY3ksIGVycm9yUG9saWN5ID0gX2EuZXJyb3JQb2xpY3ksIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgX2IgPSBfYS5jb250ZXh0LCBjb250ZXh0ID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2I7XG4gICAgICAgIHF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ocXVlcnkpLmRvY3VtZW50O1xuICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhxdWVyeSwgdmFyaWFibGVzKTtcbiAgICAgICAgdmFyIG1ha2VPYnNlcnZhYmxlID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldE9ic2VydmFibGVGcm9tTGluayhxdWVyeSwgY29udGV4dCwgdmFyaWFibGVzKS5tYXAoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChmZXRjaFBvbGljeSAhPT0gJ25vLWNhY2hlJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkV3JpdGVSZXN1bHQocmVzdWx0LCBlcnJvclBvbGljeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNhY2hlLndyaXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSWQ6ICdST09UX1NVQlNDUklQVElPTicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGVycm9ycy5BcG9sbG9FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzOiByZXN1bHQuZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0ocXVlcnkpLmhhc0NsaWVudEV4cG9ydHMpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlUHJvbWlzZV8xID0gdGhpcy5sb2NhbFN0YXRlLmFkZEV4cG9ydGVkVmFyaWFibGVzKHF1ZXJ5LCB2YXJpYWJsZXMsIGNvbnRleHQpLnRoZW4obWFrZU9ic2VydmFibGUpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyB1dGlsaXRpZXMuT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ViID0gbnVsbDtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlUHJvbWlzZV8xLnRoZW4oZnVuY3Rpb24gKG9ic2VydmFibGUpIHsgcmV0dXJuIHN1YiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTsgfSwgb2JzZXJ2ZXIuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWIgJiYgc3ViLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFrZU9ic2VydmFibGUodmFyaWFibGVzKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5zdG9wUXVlcnlOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3BRdWVyeU5vQnJvYWRjYXN0ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5zdG9wUXVlcnlJblN0b3JlTm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgIHRoaXMucmVtb3ZlUXVlcnkocXVlcnlJZCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlbW92ZVF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucy5kZWxldGUocXVlcnlJZCk7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJpZXMuaGFzKHF1ZXJ5SWQpKSB7XG4gICAgICAgICAgICB0aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMucXVlcmllcy5kZWxldGUocXVlcnlJZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuYnJvYWRjYXN0UXVlcmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25Ccm9hZGNhc3QpXG4gICAgICAgICAgICB0aGlzLm9uQnJvYWRjYXN0KCk7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvKSB7IHJldHVybiBpbmZvLm5vdGlmeSgpOyB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0TG9jYWxTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTdGF0ZTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0T2JzZXJ2YWJsZUZyb21MaW5rID0gZnVuY3Rpb24gKHF1ZXJ5LCBjb250ZXh0LCB2YXJpYWJsZXMsIGRlZHVwbGljYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoZGVkdXBsaWNhdGlvbiA9PT0gdm9pZCAwKSB7IGRlZHVwbGljYXRpb24gPSAoX2EgPSBjb250ZXh0ID09PSBudWxsIHx8IGNvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRleHQucXVlcnlEZWR1cGxpY2F0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0aGlzLnF1ZXJ5RGVkdXBsaWNhdGlvbjsgfVxuICAgICAgICB2YXIgb2JzZXJ2YWJsZTtcbiAgICAgICAgdmFyIHNlcnZlclF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ocXVlcnkpLnNlcnZlclF1ZXJ5O1xuICAgICAgICBpZiAoc2VydmVyUXVlcnkpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IHRoaXMsIGluRmxpZ2h0TGlua09ic2VydmFibGVzXzEgPSBfYi5pbkZsaWdodExpbmtPYnNlcnZhYmxlcywgbGluayA9IF9iLmxpbms7XG4gICAgICAgICAgICB2YXIgb3BlcmF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBzZXJ2ZXJRdWVyeSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25OYW1lOiB1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uTmFtZShzZXJ2ZXJRdWVyeSkgfHwgdm9pZCAwLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMucHJlcGFyZUNvbnRleHQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IGZvcmNlRmV0Y2g6ICFkZWR1cGxpY2F0aW9uIH0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb250ZXh0ID0gb3BlcmF0aW9uLmNvbnRleHQ7XG4gICAgICAgICAgICBpZiAoZGVkdXBsaWNhdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBieVZhcmlhYmxlc18xID0gaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXNfMS5nZXQoc2VydmVyUXVlcnkpIHx8IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICBpbkZsaWdodExpbmtPYnNlcnZhYmxlc18xLnNldChzZXJ2ZXJRdWVyeSwgYnlWYXJpYWJsZXNfMSk7XG4gICAgICAgICAgICAgICAgdmFyIHZhckpzb25fMSA9IGNhY2hlLmNhbm9uaWNhbFN0cmluZ2lmeSh2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGUgPSBieVZhcmlhYmxlc18xLmdldCh2YXJKc29uXzEpO1xuICAgICAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2FzdCA9IG5ldyB1dGlsaXRpZXMuQ29uY2FzdChbXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JlLmV4ZWN1dGUobGluaywgb3BlcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgYnlWYXJpYWJsZXNfMS5zZXQodmFySnNvbl8xLCBvYnNlcnZhYmxlID0gY29uY2FzdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNhc3QuYmVmb3JlTmV4dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnlWYXJpYWJsZXNfMS5kZWxldGUodmFySnNvbl8xKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5VmFyaWFibGVzXzEuc2l6ZSA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbkZsaWdodExpbmtPYnNlcnZhYmxlc18xLmRlbGV0ZShzZXJ2ZXJRdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGUgPSBuZXcgdXRpbGl0aWVzLkNvbmNhc3QoW1xuICAgICAgICAgICAgICAgICAgICBjb3JlLmV4ZWN1dGUobGluaywgb3BlcmF0aW9uKVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IG5ldyB1dGlsaXRpZXMuQ29uY2FzdChbXG4gICAgICAgICAgICAgICAgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoeyBkYXRhOiB7fSB9KVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5wcmVwYXJlQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xpZW50UXVlcnkgPSB0aGlzLnRyYW5zZm9ybShxdWVyeSkuY2xpZW50UXVlcnk7XG4gICAgICAgIGlmIChjbGllbnRRdWVyeSkge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IHV0aWxpdGllcy5hc3luY01hcChvYnNlcnZhYmxlLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxvY2FsU3RhdGUucnVuUmVzb2x2ZXJzKHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IGNsaWVudFF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVSZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0UmVzdWx0c0Zyb21MaW5rID0gZnVuY3Rpb24gKHF1ZXJ5SW5mbywgY2FjaGVXcml0ZUJlaGF2aW9yLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0SWQgPSBxdWVyeUluZm8ubGFzdFJlcXVlc3RJZCA9IHRoaXMuZ2VuZXJhdGVSZXF1ZXN0SWQoKTtcbiAgICAgICAgdmFyIGxpbmtEb2N1bWVudCA9IHRoaXMuY2FjaGUudHJhbnNmb3JtRm9yTGluayh0aGlzLnRyYW5zZm9ybShxdWVyeUluZm8uZG9jdW1lbnQpLmRvY3VtZW50KTtcbiAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5hc3luY01hcCh0aGlzLmdldE9ic2VydmFibGVGcm9tTGluayhsaW5rRG9jdW1lbnQsIG9wdGlvbnMuY29udGV4dCwgb3B0aW9ucy52YXJpYWJsZXMpLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgZ3JhcGhRTEVycm9ycyA9IHV0aWxpdGllcy5nZXRHcmFwaFFMRXJyb3JzRnJvbVJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgICAgdmFyIGhhc0Vycm9ycyA9IGdyYXBoUUxFcnJvcnMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0SWQgPj0gcXVlcnlJbmZvLmxhc3RSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzRXJyb3JzICYmIG9wdGlvbnMuZXJyb3JQb2xpY3kgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHF1ZXJ5SW5mby5tYXJrRXJyb3IobmV3IGVycm9ycy5BcG9sbG9FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzOiBncmFwaFFMRXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5tYXJrUmVzdWx0KHJlc3VsdCwgbGlua0RvY3VtZW50LCBvcHRpb25zLCBjYWNoZVdyaXRlQmVoYXZpb3IpO1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5tYXJrUmVhZHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhcXIgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlYWR5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChoYXNFcnJvcnMgJiYgb3B0aW9ucy5lcnJvclBvbGljeSAhPT0gXCJpZ25vcmVcIikge1xuICAgICAgICAgICAgICAgIGFxci5lcnJvcnMgPSBncmFwaFFMRXJyb3JzO1xuICAgICAgICAgICAgICAgIGFxci5uZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFxcjtcbiAgICAgICAgfSwgZnVuY3Rpb24gKG5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gZXJyb3JzLmlzQXBvbGxvRXJyb3IobmV0d29ya0Vycm9yKVxuICAgICAgICAgICAgICAgID8gbmV0d29ya0Vycm9yXG4gICAgICAgICAgICAgICAgOiBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHsgbmV0d29ya0Vycm9yOiBuZXR3b3JrRXJyb3IgfSk7XG4gICAgICAgICAgICBpZiAocmVxdWVzdElkID49IHF1ZXJ5SW5mby5sYXN0UmVxdWVzdElkKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm1hcmtFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmZldGNoUXVlcnlPYnNlcnZhYmxlID0gZnVuY3Rpb24gKHF1ZXJ5SWQsIG9wdGlvbnMsIG5ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG5ldHdvcmtTdGF0dXMgPT09IHZvaWQgMCkgeyBuZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmc7IH1cbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ob3B0aW9ucy5xdWVyeSkuZG9jdW1lbnQ7XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhxdWVyeSwgb3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICB2YXIgcXVlcnlJbmZvID0gdGhpcy5nZXRRdWVyeShxdWVyeUlkKTtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0gdGhpcy5kZWZhdWx0T3B0aW9ucy53YXRjaFF1ZXJ5O1xuICAgICAgICB2YXIgX2EgPSBvcHRpb25zLmZldGNoUG9saWN5LCBmZXRjaFBvbGljeSA9IF9hID09PSB2b2lkIDAgPyBkZWZhdWx0cyAmJiBkZWZhdWx0cy5mZXRjaFBvbGljeSB8fCBcImNhY2hlLWZpcnN0XCIgOiBfYSwgX2IgPSBvcHRpb25zLmVycm9yUG9saWN5LCBlcnJvclBvbGljeSA9IF9iID09PSB2b2lkIDAgPyBkZWZhdWx0cyAmJiBkZWZhdWx0cy5lcnJvclBvbGljeSB8fCBcIm5vbmVcIiA6IF9iLCBfYyA9IG9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEsIHJldHVyblBhcnRpYWxEYXRhID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIF9kID0gb3B0aW9ucy5ub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UsIG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSA9IF9kID09PSB2b2lkIDAgPyBmYWxzZSA6IF9kLCBfZSA9IG9wdGlvbnMuY29udGV4dCwgY29udGV4dCA9IF9lID09PSB2b2lkIDAgPyB7fSA6IF9lO1xuICAgICAgICB2YXIgbm9ybWFsaXplZCA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IGZldGNoUG9saWN5LFxuICAgICAgICAgICAgZXJyb3JQb2xpY3k6IGVycm9yUG9saWN5LFxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHJldHVyblBhcnRpYWxEYXRhLFxuICAgICAgICAgICAgbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlOiBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UsXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGZyb21WYXJpYWJsZXMgPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgICAgICBub3JtYWxpemVkLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICAgICAgICAgIHZhciBjb25jYXN0U291cmNlcyA9IF90aGlzLmZldGNoUXVlcnlCeVBvbGljeShxdWVyeUluZm8sIG5vcm1hbGl6ZWQsIG5ldHdvcmtTdGF0dXMpO1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWQuZmV0Y2hQb2xpY3kgIT09IFwic3RhbmRieVwiICYmXG4gICAgICAgICAgICAgICAgY29uY2FzdFNvdXJjZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5vYnNlcnZhYmxlUXVlcnkpIHtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8ub2JzZXJ2YWJsZVF1ZXJ5W1wiYXBwbHlOZXh0RmV0Y2hQb2xpY3lcIl0oXCJhZnRlci1mZXRjaFwiLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jYXN0U291cmNlcztcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNsZWFudXBDYW5jZWxGbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmZldGNoQ2FuY2VsRm5zLmRlbGV0ZShxdWVyeUlkKTsgfTtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucy5zZXQocXVlcnlJZCwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgY2xlYW51cENhbmNlbEZuKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbmNhc3QuY2FuY2VsKHJlYXNvbik7IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNvbmNhc3QgPSBuZXcgdXRpbGl0aWVzLkNvbmNhc3QodGhpcy50cmFuc2Zvcm0obm9ybWFsaXplZC5xdWVyeSkuaGFzQ2xpZW50RXhwb3J0c1xuICAgICAgICAgICAgPyB0aGlzLmxvY2FsU3RhdGUuYWRkRXhwb3J0ZWRWYXJpYWJsZXMobm9ybWFsaXplZC5xdWVyeSwgbm9ybWFsaXplZC52YXJpYWJsZXMsIG5vcm1hbGl6ZWQuY29udGV4dCkudGhlbihmcm9tVmFyaWFibGVzKVxuICAgICAgICAgICAgOiBmcm9tVmFyaWFibGVzKG5vcm1hbGl6ZWQudmFyaWFibGVzKSk7XG4gICAgICAgIGNvbmNhc3QucHJvbWlzZS50aGVuKGNsZWFudXBDYW5jZWxGbiwgY2xlYW51cENhbmNlbEZuKTtcbiAgICAgICAgcmV0dXJuIGNvbmNhc3Q7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlZmV0Y2hRdWVyaWVzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB1cGRhdGVDYWNoZSA9IF9hLnVwZGF0ZUNhY2hlLCBpbmNsdWRlID0gX2EuaW5jbHVkZSwgX2IgPSBfYS5vcHRpbWlzdGljLCBvcHRpbWlzdGljID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsIF9jID0gX2EucmVtb3ZlT3B0aW1pc3RpYywgcmVtb3ZlT3B0aW1pc3RpYyA9IF9jID09PSB2b2lkIDAgPyBvcHRpbWlzdGljID8gdXRpbGl0aWVzLm1ha2VVbmlxdWVJZChcInJlZmV0Y2hRdWVyaWVzXCIpIDogdm9pZCAwIDogX2MsIG9uUXVlcnlVcGRhdGVkID0gX2Eub25RdWVyeVVwZGF0ZWQ7XG4gICAgICAgIHZhciBpbmNsdWRlZFF1ZXJpZXNCeUlkID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAoaW5jbHVkZSkge1xuICAgICAgICAgICAgdGhpcy5nZXRPYnNlcnZhYmxlUXVlcmllcyhpbmNsdWRlKS5mb3JFYWNoKGZ1bmN0aW9uIChvcSwgcXVlcnlJZCkge1xuICAgICAgICAgICAgICAgIGluY2x1ZGVkUXVlcmllc0J5SWQuc2V0KHF1ZXJ5SWQsIHtcbiAgICAgICAgICAgICAgICAgICAgb3E6IG9xLFxuICAgICAgICAgICAgICAgICAgICBsYXN0RGlmZjogX3RoaXMuZ2V0UXVlcnkocXVlcnlJZCkuZ2V0RGlmZigpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdHMgPSBuZXcgTWFwO1xuICAgICAgICBpZiAodXBkYXRlQ2FjaGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUuYmF0Y2goe1xuICAgICAgICAgICAgICAgIHVwZGF0ZTogdXBkYXRlQ2FjaGUsXG4gICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogb3B0aW1pc3RpYyAmJiByZW1vdmVPcHRpbWlzdGljIHx8IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlbW92ZU9wdGltaXN0aWM6IHJlbW92ZU9wdGltaXN0aWMsXG4gICAgICAgICAgICAgICAgb25XYXRjaFVwZGF0ZWQ6IGZ1bmN0aW9uICh3YXRjaCwgZGlmZiwgbGFzdERpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9xID0gd2F0Y2gud2F0Y2hlciBpbnN0YW5jZW9mIFF1ZXJ5SW5mbyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgd2F0Y2gud2F0Y2hlci5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uUXVlcnlVcGRhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWRRdWVyaWVzQnlJZC5kZWxldGUob3EucXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9uUXVlcnlVcGRhdGVkKG9xLCBkaWZmLCBsYXN0RGlmZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBvcS5yZWZldGNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuc2V0KG9xLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uUXVlcnlVcGRhdGVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWRRdWVyaWVzQnlJZC5zZXQob3EucXVlcnlJZCwgeyBvcTogb3EsIGxhc3REaWZmOiBsYXN0RGlmZiwgZGlmZjogZGlmZiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5jbHVkZWRRdWVyaWVzQnlJZC5zaXplKSB7XG4gICAgICAgICAgICBpbmNsdWRlZFF1ZXJpZXNCeUlkLmZvckVhY2goZnVuY3Rpb24gKF9hLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9xID0gX2Eub3EsIGxhc3REaWZmID0gX2EubGFzdERpZmYsIGRpZmYgPSBfYS5kaWZmO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKG9uUXVlcnlVcGRhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGlmZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZm8gPSBvcVtcInF1ZXJ5SW5mb1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZmYgPSBpbmZvLmdldERpZmYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBvblF1ZXJ5VXBkYXRlZChvcSwgZGlmZiwgbGFzdERpZmYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIW9uUXVlcnlVcGRhdGVkIHx8IHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBvcS5yZWZldGNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuc2V0KG9xLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocXVlcnlJZC5pbmRleE9mKFwibGVnYWN5T25lVGltZVF1ZXJ5XCIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RvcFF1ZXJ5Tm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbW92ZU9wdGltaXN0aWMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucmVtb3ZlT3B0aW1pc3RpYyhyZW1vdmVPcHRpbWlzdGljKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZmV0Y2hRdWVyeUJ5UG9saWN5ID0gZnVuY3Rpb24gKHF1ZXJ5SW5mbywgX2EsIG5ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHF1ZXJ5ID0gX2EucXVlcnksIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgZmV0Y2hQb2xpY3kgPSBfYS5mZXRjaFBvbGljeSwgcmVmZXRjaFdyaXRlUG9saWN5ID0gX2EucmVmZXRjaFdyaXRlUG9saWN5LCBlcnJvclBvbGljeSA9IF9hLmVycm9yUG9saWN5LCByZXR1cm5QYXJ0aWFsRGF0YSA9IF9hLnJldHVyblBhcnRpYWxEYXRhLCBjb250ZXh0ID0gX2EuY29udGV4dCwgbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlID0gX2Eubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlO1xuICAgICAgICB2YXIgb2xkTmV0d29ya1N0YXR1cyA9IHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzO1xuICAgICAgICBxdWVyeUluZm8uaW5pdCh7XG4gICAgICAgICAgICBkb2N1bWVudDogdGhpcy50cmFuc2Zvcm0ocXVlcnkpLmRvY3VtZW50LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBuZXR3b3JrU3RhdHVzLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlYWRDYWNoZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHF1ZXJ5SW5mby5nZXREaWZmKHZhcmlhYmxlcyk7IH07XG4gICAgICAgIHZhciByZXN1bHRzRnJvbUNhY2hlID0gZnVuY3Rpb24gKGRpZmYsIG5ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChuZXR3b3JrU3RhdHVzID09PSB2b2lkIDApIHsgbmV0d29ya1N0YXR1cyA9IHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzIHx8IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5sb2FkaW5nOyB9XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGRpZmYucmVzdWx0O1xuICAgICAgICAgICAgaWYgKF9fREVWX18gJiZcbiAgICAgICAgICAgICAgICAhcmV0dXJuUGFydGlhbERhdGEgJiZcbiAgICAgICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwoZGF0YSwge30pKSB7XG4gICAgICAgICAgICAgICAgbG9nTWlzc2luZ0ZpZWxkRXJyb3JzKGRpZmYubWlzc2luZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZnJvbURhdGEgPSBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gdXRpbGl0aWVzLk9ic2VydmFibGUub2YodHNsaWIuX19hc3NpZ24oeyBkYXRhOiBkYXRhLCBsb2FkaW5nOiBpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQobmV0d29ya1N0YXR1cyksIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMgfSwgKGRpZmYuY29tcGxldGUgPyBudWxsIDogeyBwYXJ0aWFsOiB0cnVlIH0pKSk7IH07XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBfdGhpcy50cmFuc2Zvcm0ocXVlcnkpLmhhc0ZvcmNlZFJlc29sdmVycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5sb2NhbFN0YXRlLnJ1blJlc29sdmVycyh7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlUmVzdWx0OiB7IGRhdGE6IGRhdGEgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzb2x2ZWQpIHsgcmV0dXJuIGZyb21EYXRhKHJlc29sdmVkLmRhdGEgfHwgdm9pZCAwKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJyb3JQb2xpY3kgPT09ICdub25lJyAmJlxuICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXMgPT09IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWZldGNoICYmXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShkaWZmLm1pc3NpbmcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyb21EYXRhKHZvaWQgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJvbURhdGEoZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjYWNoZVdyaXRlQmVoYXZpb3IgPSBmZXRjaFBvbGljeSA9PT0gXCJuby1jYWNoZVwiID8gMCA6XG4gICAgICAgICAgICAobmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnJlZmV0Y2ggJiZcbiAgICAgICAgICAgICAgICByZWZldGNoV3JpdGVQb2xpY3kgIT09IFwibWVyZ2VcIikgPyAxXG4gICAgICAgICAgICAgICAgOiAyO1xuICAgICAgICB2YXIgcmVzdWx0c0Zyb21MaW5rID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZ2V0UmVzdWx0c0Zyb21MaW5rKHF1ZXJ5SW5mbywgY2FjaGVXcml0ZUJlaGF2aW9yLCB7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICBlcnJvclBvbGljeTogZXJyb3JQb2xpY3ksXG4gICAgICAgIH0pOyB9O1xuICAgICAgICB2YXIgc2hvdWxkTm90aWZ5ID0gbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlICYmXG4gICAgICAgICAgICB0eXBlb2Ygb2xkTmV0d29ya1N0YXR1cyA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICAgICAgb2xkTmV0d29ya1N0YXR1cyAhPT0gbmV0d29ya1N0YXR1cyAmJlxuICAgICAgICAgICAgaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KG5ldHdvcmtTdGF0dXMpO1xuICAgICAgICBzd2l0Y2ggKGZldGNoUG9saWN5KSB7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FzZSBcImNhY2hlLWZpcnN0XCI6IHtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IHJlYWRDYWNoZSgpO1xuICAgICAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUNhY2hlKGRpZmYsIHF1ZXJ5SW5mby5tYXJrUmVhZHkoKSksXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5QYXJ0aWFsRGF0YSB8fCBzaG91bGROb3RpZnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUoZGlmZiksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKCksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjYWNoZS1hbmQtbmV0d29ya1wiOiB7XG4gICAgICAgICAgICAgICAgdmFyIGRpZmYgPSByZWFkQ2FjaGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSB8fCByZXR1cm5QYXJ0aWFsRGF0YSB8fCBzaG91bGROb3RpZnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUoZGlmZiksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKCksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjYWNoZS1vbmx5XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShyZWFkQ2FjaGUoKSwgcXVlcnlJbmZvLm1hcmtSZWFkeSgpKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgY2FzZSBcIm5ldHdvcmstb25seVwiOlxuICAgICAgICAgICAgICAgIGlmIChzaG91bGROb3RpZnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUocmVhZENhY2hlKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKCksXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbcmVzdWx0c0Zyb21MaW5rKCldO1xuICAgICAgICAgICAgY2FzZSBcIm5vLWNhY2hlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShxdWVyeUluZm8uZ2V0RGlmZigpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tTGluaygpLFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW3Jlc3VsdHNGcm9tTGluaygpXTtcbiAgICAgICAgICAgIGNhc2UgXCJzdGFuZGJ5XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgaWYgKHF1ZXJ5SWQgJiYgIXRoaXMucXVlcmllcy5oYXMocXVlcnlJZCkpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcmllcy5zZXQocXVlcnlJZCwgbmV3IFF1ZXJ5SW5mbyh0aGlzLCBxdWVyeUlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcmllcy5nZXQocXVlcnlJZCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnByZXBhcmVDb250ZXh0ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICAgICAgdmFyIG5ld0NvbnRleHQgPSB0aGlzLmxvY2FsU3RhdGUucHJlcGFyZUNvbnRleHQoY29udGV4dCk7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbmV3Q29udGV4dCksIHsgY2xpZW50QXdhcmVuZXNzOiB0aGlzLmNsaWVudEF3YXJlbmVzcyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBRdWVyeU1hbmFnZXI7XG59KCkpO1xuXG52YXIgaGFzU3VnZ2VzdGVkRGV2dG9vbHMgPSBmYWxzZTtcbnZhciBBcG9sbG9DbGllbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwb2xsb0NsaWVudChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucmVzZXRTdG9yZUNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdmFyIHVyaSA9IG9wdGlvbnMudXJpLCBjcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMsIGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMsIGNhY2hlID0gb3B0aW9ucy5jYWNoZSwgX2EgPSBvcHRpb25zLnNzck1vZGUsIHNzck1vZGUgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnNzckZvcmNlRmV0Y2hEZWxheSwgc3NyRm9yY2VGZXRjaERlbGF5ID0gX2IgPT09IHZvaWQgMCA/IDAgOiBfYiwgX2MgPSBvcHRpb25zLmNvbm5lY3RUb0RldlRvb2xzLCBjb25uZWN0VG9EZXZUb29scyA9IF9jID09PSB2b2lkIDAgPyB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgIXdpbmRvdy5fX0FQT0xMT19DTElFTlRfXyAmJlxuICAgICAgICAgICAgX19ERVZfXyA6IF9jLCBfZCA9IG9wdGlvbnMucXVlcnlEZWR1cGxpY2F0aW9uLCBxdWVyeURlZHVwbGljYXRpb24gPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kLCBkZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsIF9lID0gb3B0aW9ucy5hc3N1bWVJbW11dGFibGVSZXN1bHRzLCBhc3N1bWVJbW11dGFibGVSZXN1bHRzID0gX2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX2UsIHJlc29sdmVycyA9IG9wdGlvbnMucmVzb2x2ZXJzLCB0eXBlRGVmcyA9IG9wdGlvbnMudHlwZURlZnMsIGZyYWdtZW50TWF0Y2hlciA9IG9wdGlvbnMuZnJhZ21lbnRNYXRjaGVyLCBjbGllbnRBd2FyZW5lc3NOYW1lID0gb3B0aW9ucy5uYW1lLCBjbGllbnRBd2FyZW5lc3NWZXJzaW9uID0gb3B0aW9ucy52ZXJzaW9uO1xuICAgICAgICB2YXIgbGluayA9IG9wdGlvbnMubGluaztcbiAgICAgICAgaWYgKCFsaW5rKSB7XG4gICAgICAgICAgICBsaW5rID0gdXJpXG4gICAgICAgICAgICAgICAgPyBuZXcgaHR0cC5IdHRwTGluayh7IHVyaTogdXJpLCBjcmVkZW50aWFsczogY3JlZGVudGlhbHMsIGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgICAgICA6IGNvcmUuQXBvbGxvTGluay5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2FjaGUpIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIlRvIGluaXRpYWxpemUgQXBvbGxvIENsaWVudCwgeW91IG11c3Qgc3BlY2lmeSBhICdjYWNoZScgcHJvcGVydHkgXCIgK1xuICAgICAgICAgICAgICAgIFwiaW4gdGhlIG9wdGlvbnMgb2JqZWN0LiBcXG5cIiArXG4gICAgICAgICAgICAgICAgXCJGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpc2l0OiBodHRwczovL2dvLmFwb2xsby5kZXYvYy9kb2NzXCIpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoOSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saW5rID0gbGluaztcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICB0aGlzLmRpc2FibGVOZXR3b3JrRmV0Y2hlcyA9IHNzck1vZGUgfHwgc3NyRm9yY2VGZXRjaERlbGF5ID4gMDtcbiAgICAgICAgdGhpcy5xdWVyeURlZHVwbGljYXRpb24gPSBxdWVyeURlZHVwbGljYXRpb247XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucyB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnR5cGVEZWZzID0gdHlwZURlZnM7XG4gICAgICAgIGlmIChzc3JGb3JjZUZldGNoRGVsYXkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gKF90aGlzLmRpc2FibGVOZXR3b3JrRmV0Y2hlcyA9IGZhbHNlKTsgfSwgc3NyRm9yY2VGZXRjaERlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndhdGNoUXVlcnkgPSB0aGlzLndhdGNoUXVlcnkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tdXRhdGUgPSB0aGlzLm11dGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlc2V0U3RvcmUgPSB0aGlzLnJlc2V0U3RvcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMgPSB0aGlzLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcy5iaW5kKHRoaXMpO1xuICAgICAgICBpZiAoY29ubmVjdFRvRGV2VG9vbHMgJiYgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5fX0FQT0xMT19DTElFTlRfXyA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNTdWdnZXN0ZWREZXZ0b29scyAmJiBjb25uZWN0VG9EZXZUb29scyAmJiBfX0RFVl9fKSB7XG4gICAgICAgICAgICBoYXNTdWdnZXN0ZWREZXZ0b29scyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cudG9wID09PSB3aW5kb3cuc2VsZiAmJlxuICAgICAgICAgICAgICAgICF3aW5kb3cuX19BUE9MTE9fREVWVE9PTFNfR0xPQkFMX0hPT0tfXykge1xuICAgICAgICAgICAgICAgIHZhciBuYXYgPSB3aW5kb3cubmF2aWdhdG9yO1xuICAgICAgICAgICAgICAgIHZhciB1YSA9IG5hdiAmJiBuYXYudXNlckFnZW50O1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodWEuaW5kZXhPZihcIkNocm9tZS9cIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gXCJodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcG9sbG8tY2xpZW50LWRldmVsb3Blci10L2pka2tua2tiZWJiYXBpbGdvZWNjY2lnbGtmYm1ibmZtXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodWEuaW5kZXhPZihcIkZpcmVmb3gvXCIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IFwiaHR0cHM6Ly9hZGRvbnMubW96aWxsYS5vcmcvZW4tVVMvZmlyZWZveC9hZGRvbi9hcG9sbG8tZGV2ZWxvcGVyLXRvb2xzL1wiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5sb2coXCJEb3dubG9hZCB0aGUgQXBvbGxvIERldlRvb2xzIGZvciBhIGJldHRlciBkZXZlbG9wbWVudCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4cGVyaWVuY2U6IFwiICsgdXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlID0gbmV3IExvY2FsU3RhdGUoe1xuICAgICAgICAgICAgY2FjaGU6IGNhY2hlLFxuICAgICAgICAgICAgY2xpZW50OiB0aGlzLFxuICAgICAgICAgICAgcmVzb2x2ZXJzOiByZXNvbHZlcnMsXG4gICAgICAgICAgICBmcmFnbWVudE1hdGNoZXI6IGZyYWdtZW50TWF0Y2hlcixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyID0gbmV3IFF1ZXJ5TWFuYWdlcih7XG4gICAgICAgICAgICBjYWNoZTogdGhpcy5jYWNoZSxcbiAgICAgICAgICAgIGxpbms6IHRoaXMubGluayxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB0aGlzLmRlZmF1bHRPcHRpb25zLFxuICAgICAgICAgICAgcXVlcnlEZWR1cGxpY2F0aW9uOiBxdWVyeURlZHVwbGljYXRpb24sXG4gICAgICAgICAgICBzc3JNb2RlOiBzc3JNb2RlLFxuICAgICAgICAgICAgY2xpZW50QXdhcmVuZXNzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogY2xpZW50QXdhcmVuZXNzTmFtZSxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBjbGllbnRBd2FyZW5lc3NWZXJzaW9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvY2FsU3RhdGU6IHRoaXMubG9jYWxTdGF0ZSxcbiAgICAgICAgICAgIGFzc3VtZUltbXV0YWJsZVJlc3VsdHM6IGFzc3VtZUltbXV0YWJsZVJlc3VsdHMsXG4gICAgICAgICAgICBvbkJyb2FkY2FzdDogY29ubmVjdFRvRGV2VG9vbHMgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmRldlRvb2xzSG9va0NiKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRldlRvb2xzSG9va0NiKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJpZXM6IF90aGlzLnF1ZXJ5TWFuYWdlci5nZXRRdWVyeVN0b3JlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25zOiBfdGhpcy5xdWVyeU1hbmFnZXIubXV0YXRpb25TdG9yZSB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhV2l0aE9wdGltaXN0aWNSZXN1bHRzOiBfdGhpcy5jYWNoZS5leHRyYWN0KHRydWUpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IDogdm9pZCAwLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5zdG9wKCk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLndhdGNoUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0T3B0aW9ucy53YXRjaFF1ZXJ5KSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdXRpbGl0aWVzLm1lcmdlT3B0aW9ucyh0aGlzLmRlZmF1bHRPcHRpb25zLndhdGNoUXVlcnksIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVOZXR3b3JrRmV0Y2hlcyAmJlxuICAgICAgICAgICAgKG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ2NhY2hlLWFuZC1uZXR3b3JrJykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZmV0Y2hQb2xpY3k6ICdjYWNoZS1maXJzdCcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLndhdGNoUXVlcnkob3B0aW9ucyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE9wdGlvbnMucXVlcnkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1dGlsaXRpZXMubWVyZ2VPcHRpb25zKHRoaXMuZGVmYXVsdE9wdGlvbnMucXVlcnksIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLmZldGNoUG9saWN5ICE9PSAnY2FjaGUtYW5kLW5ldHdvcmsnLCAnVGhlIGNhY2hlLWFuZC1uZXR3b3JrIGZldGNoUG9saWN5IGRvZXMgbm90IHdvcmsgd2l0aCBjbGllbnQucXVlcnksIGJlY2F1c2UgJyArXG4gICAgICAgICAgICAnY2xpZW50LnF1ZXJ5IGNhbiBvbmx5IHJldHVybiBhIHNpbmdsZSByZXN1bHQuIFBsZWFzZSB1c2UgY2xpZW50LndhdGNoUXVlcnkgJyArXG4gICAgICAgICAgICAndG8gcmVjZWl2ZSBtdWx0aXBsZSByZXN1bHRzIGZyb20gdGhlIGNhY2hlIGFuZCB0aGUgbmV0d29yaywgb3IgY29uc2lkZXIgJyArXG4gICAgICAgICAgICAndXNpbmcgYSBkaWZmZXJlbnQgZmV0Y2hQb2xpY3ksIHN1Y2ggYXMgY2FjaGUtZmlyc3Qgb3IgbmV0d29yay1vbmx5LicpIDogZ2xvYmFscy5pbnZhcmlhbnQob3B0aW9ucy5mZXRjaFBvbGljeSAhPT0gJ2NhY2hlLWFuZC1uZXR3b3JrJywgMTApO1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlTmV0d29ya0ZldGNoZXMgJiYgb3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZmV0Y2hQb2xpY3k6ICdjYWNoZS1maXJzdCcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLnF1ZXJ5KG9wdGlvbnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5tdXRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0T3B0aW9ucy5tdXRhdGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1dGlsaXRpZXMubWVyZ2VPcHRpb25zKHRoaXMuZGVmYXVsdE9wdGlvbnMubXV0YXRlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIubXV0YXRlKG9wdGlvbnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIuc3RhcnRHcmFwaFFMU3Vic2NyaXB0aW9uKG9wdGlvbnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZWFkUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucywgb3B0aW1pc3RpYykge1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZWFkUXVlcnkob3B0aW9ucywgb3B0aW1pc3RpYyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlYWRGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnJlYWRGcmFnbWVudChvcHRpb25zLCBvcHRpbWlzdGljKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUud3JpdGVRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2FjaGUud3JpdGVRdWVyeShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS53cml0ZUZyYWdtZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jYWNoZS53cml0ZUZyYWdtZW50KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLl9fYWN0aW9uSG9va0ZvckRldlRvb2xzID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHRoaXMuZGV2VG9vbHNIb29rQ2IgPSBjYjtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuX19yZXF1ZXN0UmF3ID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuZXhlY3V0ZSh0aGlzLmxpbmssIHBheWxvYWQpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZXNldFN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnF1ZXJ5TWFuYWdlci5jbGVhclN0b3JlKHtcbiAgICAgICAgICAgIGRpc2NhcmRXYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgfSk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLmFsbChfdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzLm1hcChmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH0pKTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcygpOyB9KTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuY2xlYXJTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5xdWVyeU1hbmFnZXIuY2xlYXJTdG9yZSh7XG4gICAgICAgICAgICBkaXNjYXJkV2F0Y2hlczogdHJ1ZSxcbiAgICAgICAgfSk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLmFsbChfdGhpcy5jbGVhclN0b3JlQ2FsbGJhY2tzLm1hcChmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH0pKTsgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLm9uUmVzZXRTdG9yZSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlc2V0U3RvcmVDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzID0gX3RoaXMucmVzZXRTdG9yZUNhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09IGNiOyB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUub25DbGVhclN0b3JlID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MgPSBfdGhpcy5jbGVhclN0b3JlQ2FsbGJhY2tzLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gY2I7IH0pO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMgPSBmdW5jdGlvbiAoaW5jbHVkZVN0YW5kYnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcyhpbmNsdWRlU3RhbmRieSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlZmV0Y2hRdWVyaWVzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG1hcCA9IHRoaXMucXVlcnlNYW5hZ2VyLnJlZmV0Y2hRdWVyaWVzKG9wdGlvbnMpO1xuICAgICAgICB2YXIgcXVlcmllcyA9IFtdO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBtYXAuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0LCBvYnNRdWVyeSkge1xuICAgICAgICAgICAgcXVlcmllcy5wdXNoKG9ic1F1ZXJ5KTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFByb21pc2UuYWxsKHJlc3VsdHMpO1xuICAgICAgICByZXN1bHQucXVlcmllcyA9IHF1ZXJpZXM7XG4gICAgICAgIHJlc3VsdC5yZXN1bHRzID0gcmVzdWx0cztcbiAgICAgICAgcmVzdWx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5kZWJ1ZyhcIkluIGNsaWVudC5yZWZldGNoUXVlcmllcywgUHJvbWlzZS5hbGwgcHJvbWlzZSByZWplY3RlZCB3aXRoIGVycm9yIFwiLmNvbmNhdChlcnJvcikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuZ2V0T2JzZXJ2YWJsZVF1ZXJpZXMgPSBmdW5jdGlvbiAoaW5jbHVkZSkge1xuICAgICAgICBpZiAoaW5jbHVkZSA9PT0gdm9pZCAwKSB7IGluY2x1ZGUgPSBcImFjdGl2ZVwiOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5nZXRPYnNlcnZhYmxlUXVlcmllcyhpbmNsdWRlKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uIChvcHRpbWlzdGljKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLmV4dHJhY3Qob3B0aW1pc3RpYyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlc3RvcmUgPSBmdW5jdGlvbiAoc2VyaWFsaXplZFN0YXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnJlc3RvcmUoc2VyaWFsaXplZFN0YXRlKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuYWRkUmVzb2x2ZXJzID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUuYWRkUmVzb2x2ZXJzKHJlc29sdmVycyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnNldFJlc29sdmVycyA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlLnNldFJlc29sdmVycyhyZXNvbHZlcnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5nZXRSZXNvbHZlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsU3RhdGUuZ2V0UmVzb2x2ZXJzKCk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnNldExvY2FsU3RhdGVGcmFnbWVudE1hdGNoZXIgPSBmdW5jdGlvbiAoZnJhZ21lbnRNYXRjaGVyKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdGF0ZS5zZXRGcmFnbWVudE1hdGNoZXIoZnJhZ21lbnRNYXRjaGVyKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc2V0TGluayA9IGZ1bmN0aW9uIChuZXdMaW5rKSB7XG4gICAgICAgIHRoaXMubGluayA9IHRoaXMucXVlcnlNYW5hZ2VyLmxpbmsgPSBuZXdMaW5rO1xuICAgIH07XG4gICAgcmV0dXJuIEFwb2xsb0NsaWVudDtcbn0oKSk7XG5cbnRzSW52YXJpYW50LnNldFZlcmJvc2l0eShnbG9iYWxzLkRFViA/IFwibG9nXCIgOiBcInNpbGVudFwiKTtcblxuZXhwb3J0cy5BcG9sbG9DYWNoZSA9IGNhY2hlLkFwb2xsb0NhY2hlO1xuZXhwb3J0cy5DYWNoZSA9IGNhY2hlLkNhY2hlO1xuZXhwb3J0cy5Jbk1lbW9yeUNhY2hlID0gY2FjaGUuSW5NZW1vcnlDYWNoZTtcbmV4cG9ydHMuTWlzc2luZ0ZpZWxkRXJyb3IgPSBjYWNoZS5NaXNzaW5nRmllbGRFcnJvcjtcbmV4cG9ydHMuZGVmYXVsdERhdGFJZEZyb21PYmplY3QgPSBjYWNoZS5kZWZhdWx0RGF0YUlkRnJvbU9iamVjdDtcbmV4cG9ydHMubWFrZVZhciA9IGNhY2hlLm1ha2VWYXI7XG5leHBvcnRzLk9ic2VydmFibGUgPSB1dGlsaXRpZXMuT2JzZXJ2YWJsZTtcbmV4cG9ydHMuaXNSZWZlcmVuY2UgPSB1dGlsaXRpZXMuaXNSZWZlcmVuY2U7XG5leHBvcnRzLm1ha2VSZWZlcmVuY2UgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZTtcbmV4cG9ydHMubWVyZ2VPcHRpb25zID0gdXRpbGl0aWVzLm1lcmdlT3B0aW9ucztcbmV4cG9ydHMuQXBvbGxvRXJyb3IgPSBlcnJvcnMuQXBvbGxvRXJyb3I7XG5leHBvcnRzLmlzQXBvbGxvRXJyb3IgPSBlcnJvcnMuaXNBcG9sbG9FcnJvcjtcbmV4cG9ydHMuZnJvbUVycm9yID0gdXRpbHMuZnJvbUVycm9yO1xuZXhwb3J0cy5mcm9tUHJvbWlzZSA9IHV0aWxzLmZyb21Qcm9taXNlO1xuZXhwb3J0cy50aHJvd1NlcnZlckVycm9yID0gdXRpbHMudGhyb3dTZXJ2ZXJFcnJvcjtcbmV4cG9ydHMudG9Qcm9taXNlID0gdXRpbHMudG9Qcm9taXNlO1xuZXhwb3J0cy5zZXRMb2dWZXJib3NpdHkgPSB0c0ludmFyaWFudC5zZXRWZXJib3NpdHk7XG5leHBvcnRzLmRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGdyYXBocWxUYWcuZGlzYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzO1xuZXhwb3J0cy5kaXNhYmxlRnJhZ21lbnRXYXJuaW5ncyA9IGdyYXBocWxUYWcuZGlzYWJsZUZyYWdtZW50V2FybmluZ3M7XG5leHBvcnRzLmVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzID0gZ3JhcGhxbFRhZy5lbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcztcbmV4cG9ydHMuZ3FsID0gZ3JhcGhxbFRhZy5ncWw7XG5leHBvcnRzLnJlc2V0Q2FjaGVzID0gZ3JhcGhxbFRhZy5yZXNldENhY2hlcztcbmV4cG9ydHMuQXBvbGxvQ2xpZW50ID0gQXBvbGxvQ2xpZW50O1xuZXhwb3J0cy5PYnNlcnZhYmxlUXVlcnkgPSBPYnNlcnZhYmxlUXVlcnk7XG5mb3IgKHZhciBrIGluIGNvcmUpIHtcbiAgICBpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBleHBvcnRzW2tdID0gY29yZVtrXTtcbn1cbmZvciAodmFyIGsgaW4gaHR0cCkge1xuICAgIGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIGV4cG9ydHNba10gPSBodHRwW2tdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29yZS5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG5yZXF1aXJlKCcuLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcycpO1xuXG5mdW5jdGlvbiBpc0Fwb2xsb0Vycm9yKGVycikge1xuICAgIHJldHVybiBlcnIuaGFzT3duUHJvcGVydHkoJ2dyYXBoUUxFcnJvcnMnKTtcbn1cbnZhciBnZW5lcmF0ZUVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICcnO1xuICAgIGlmICh1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KGVyci5ncmFwaFFMRXJyb3JzKSB8fCB1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KGVyci5jbGllbnRFcnJvcnMpKSB7XG4gICAgICAgIHZhciBlcnJvcnMgPSAoZXJyLmdyYXBoUUxFcnJvcnMgfHwgW10pXG4gICAgICAgICAgICAuY29uY2F0KGVyci5jbGllbnRFcnJvcnMgfHwgW10pO1xuICAgICAgICBlcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvclxuICAgICAgICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgIDogJ0Vycm9yIG1lc3NhZ2Ugbm90IGZvdW5kLic7XG4gICAgICAgICAgICBtZXNzYWdlICs9IFwiXCIuY29uY2F0KGVycm9yTWVzc2FnZSwgXCJcXG5cIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZXJyLm5ldHdvcmtFcnJvcikge1xuICAgICAgICBtZXNzYWdlICs9IFwiXCIuY29uY2F0KGVyci5uZXR3b3JrRXJyb3IubWVzc2FnZSwgXCJcXG5cIik7XG4gICAgfVxuICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL1xcbiQvLCAnJyk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG59O1xudmFyIEFwb2xsb0Vycm9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoQXBvbGxvRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBvbGxvRXJyb3IoX2EpIHtcbiAgICAgICAgdmFyIGdyYXBoUUxFcnJvcnMgPSBfYS5ncmFwaFFMRXJyb3JzLCBjbGllbnRFcnJvcnMgPSBfYS5jbGllbnRFcnJvcnMsIG5ldHdvcmtFcnJvciA9IF9hLm5ldHdvcmtFcnJvciwgZXJyb3JNZXNzYWdlID0gX2EuZXJyb3JNZXNzYWdlLCBleHRyYUluZm8gPSBfYS5leHRyYUluZm87XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVycm9yTWVzc2FnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubmFtZSA9ICdBcG9sbG9FcnJvcic7XG4gICAgICAgIF90aGlzLmdyYXBoUUxFcnJvcnMgPSBncmFwaFFMRXJyb3JzIHx8IFtdO1xuICAgICAgICBfdGhpcy5jbGllbnRFcnJvcnMgPSBjbGllbnRFcnJvcnMgfHwgW107XG4gICAgICAgIF90aGlzLm5ldHdvcmtFcnJvciA9IG5ldHdvcmtFcnJvciB8fCBudWxsO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gZXJyb3JNZXNzYWdlIHx8IGdlbmVyYXRlRXJyb3JNZXNzYWdlKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZXh0cmFJbmZvID0gZXh0cmFJbmZvO1xuICAgICAgICBfdGhpcy5fX3Byb3RvX18gPSBBcG9sbG9FcnJvci5wcm90b3R5cGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEFwb2xsb0Vycm9yO1xufShFcnJvcikpO1xuXG5leHBvcnRzLkFwb2xsb0Vycm9yID0gQXBvbGxvRXJyb3I7XG5leHBvcnRzLmlzQXBvbGxvRXJyb3IgPSBpc0Fwb2xsb0Vycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JzLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi4vY29yZScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcycpO1xuXG5mdW5jdGlvbiBzZXRDb250ZXh0KHNldHRlcikge1xuICAgIHJldHVybiBuZXcgY29yZS5BcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB0c2xpYi5fX3Jlc3Qob3BlcmF0aW9uLCBbXSk7XG4gICAgICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICAgICAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHJlcXVlc3QpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcSkgeyByZXR1cm4gc2V0dGVyKHJlcSwgb3BlcmF0aW9uLmdldENvbnRleHQoKSk7IH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ob3BlcmF0aW9uLnNldENvbnRleHQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjbG9zZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBoYW5kbGUgPSBmb3J3YXJkKG9wZXJhdGlvbikuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogb2JzZXJ2ZXIuY29tcGxldGUuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZSlcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0cy5zZXRDb250ZXh0ID0gc2V0Q29udGV4dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHQuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gcGFzc3Rocm91Z2gob3AsIGZvcndhcmQpIHtcbiAgICByZXR1cm4gKGZvcndhcmQgPyBmb3J3YXJkKG9wKSA6IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCkpO1xufVxuZnVuY3Rpb24gdG9MaW5rKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicgPyBuZXcgQXBvbGxvTGluayhoYW5kbGVyKSA6IGhhbmRsZXI7XG59XG5mdW5jdGlvbiBpc1Rlcm1pbmF0aW5nKGxpbmspIHtcbiAgICByZXR1cm4gbGluay5yZXF1ZXN0Lmxlbmd0aCA8PSAxO1xufVxudmFyIExpbmtFcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKExpbmtFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMaW5rRXJyb3IobWVzc2FnZSwgbGluaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5saW5rID0gbGluaztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gTGlua0Vycm9yO1xufShFcnJvcikpO1xudmFyIEFwb2xsb0xpbmsgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwb2xsb0xpbmsocmVxdWVzdCkge1xuICAgICAgICBpZiAocmVxdWVzdClcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgfVxuICAgIEFwb2xsb0xpbmsuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpOyB9KTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsuZnJvbSA9IGZ1bmN0aW9uIChsaW5rcykge1xuICAgICAgICBpZiAobGlua3MubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIEFwb2xsb0xpbmsuZW1wdHkoKTtcbiAgICAgICAgcmV0dXJuIGxpbmtzLm1hcCh0b0xpbmspLnJlZHVjZShmdW5jdGlvbiAoeCwgeSkgeyByZXR1cm4geC5jb25jYXQoeSk7IH0pO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5zcGxpdCA9IGZ1bmN0aW9uICh0ZXN0LCBsZWZ0LCByaWdodCkge1xuICAgICAgICB2YXIgbGVmdExpbmsgPSB0b0xpbmsobGVmdCk7XG4gICAgICAgIHZhciByaWdodExpbmsgPSB0b0xpbmsocmlnaHQgfHwgbmV3IEFwb2xsb0xpbmsocGFzc3Rocm91Z2gpKTtcbiAgICAgICAgaWYgKGlzVGVybWluYXRpbmcobGVmdExpbmspICYmIGlzVGVybWluYXRpbmcocmlnaHRMaW5rKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdChvcGVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgID8gbGVmdExpbmsucmVxdWVzdChvcGVyYXRpb24pIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKClcbiAgICAgICAgICAgICAgICAgICAgOiByaWdodExpbmsucmVxdWVzdChvcGVyYXRpb24pIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uLCBmb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3Qob3BlcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICA/IGxlZnRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmb3J3YXJkKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpXG4gICAgICAgICAgICAgICAgICAgIDogcmlnaHRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmb3J3YXJkKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFwb2xsb0xpbmsuZXhlY3V0ZSA9IGZ1bmN0aW9uIChsaW5rLCBvcGVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIChsaW5rLnJlcXVlc3QodXRpbHMuY3JlYXRlT3BlcmF0aW9uKG9wZXJhdGlvbi5jb250ZXh0LCB1dGlscy50cmFuc2Zvcm1PcGVyYXRpb24odXRpbHMudmFsaWRhdGVPcGVyYXRpb24ob3BlcmF0aW9uKSkpKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpKTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsuY29uY2F0ID0gZnVuY3Rpb24gKGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgdmFyIGZpcnN0TGluayA9IHRvTGluayhmaXJzdCk7XG4gICAgICAgIGlmIChpc1Rlcm1pbmF0aW5nKGZpcnN0TGluaykpIHtcbiAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihuZXcgTGlua0Vycm9yKFwiWW91IGFyZSBjYWxsaW5nIGNvbmNhdCBvbiBhIHRlcm1pbmF0aW5nIGxpbmssIHdoaWNoIHdpbGwgaGF2ZSBubyBlZmZlY3RcIiwgZmlyc3RMaW5rKSk7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RMaW5rO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXh0TGluayA9IHRvTGluayhzZWNvbmQpO1xuICAgICAgICBpZiAoaXNUZXJtaW5hdGluZyhuZXh0TGluaykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZnVuY3Rpb24gKG9wKSB7IHJldHVybiBuZXh0TGluay5yZXF1ZXN0KG9wKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpOyB9KSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZmlyc3RMaW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmdW5jdGlvbiAob3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRMaW5rLnJlcXVlc3Qob3AsIGZvcndhcmQpIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgICAgICAgICAgfSkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUuc3BsaXQgPSBmdW5jdGlvbiAodGVzdCwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uY2F0KEFwb2xsb0xpbmsuc3BsaXQodGVzdCwgbGVmdCwgcmlnaHQgfHwgbmV3IEFwb2xsb0xpbmsocGFzc3Rocm91Z2gpKSk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICByZXR1cm4gQXBvbGxvTGluay5jb25jYXQodGhpcywgbmV4dCk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoJ3JlcXVlc3QgaXMgbm90IGltcGxlbWVudGVkJykgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigyMik7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBvYnNlcnZlcikge1xuICAgICAgICBpZiAob2JzZXJ2ZXIgJiYgb2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsucHJvdG90eXBlLnNldE9uRXJyb3IgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdGhpcy5vbkVycm9yID0gZm47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIEFwb2xsb0xpbms7XG59KCkpO1xuXG52YXIgZW1wdHkgPSBBcG9sbG9MaW5rLmVtcHR5O1xuXG52YXIgZnJvbSA9IEFwb2xsb0xpbmsuZnJvbTtcblxudmFyIHNwbGl0ID0gQXBvbGxvTGluay5zcGxpdDtcblxudmFyIGNvbmNhdCA9IEFwb2xsb0xpbmsuY29uY2F0O1xuXG52YXIgZXhlY3V0ZSA9IEFwb2xsb0xpbmsuZXhlY3V0ZTtcblxuZXhwb3J0cy5BcG9sbG9MaW5rID0gQXBvbGxvTGluaztcbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0O1xuZXhwb3J0cy5lbXB0eSA9IGVtcHR5O1xuZXhwb3J0cy5leGVjdXRlID0gZXhlY3V0ZTtcbmV4cG9ydHMuZnJvbSA9IGZyb207XG5leHBvcnRzLnNwbGl0ID0gc3BsaXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG52YXIgZ3JhcGhxbCA9IHJlcXVpcmUoJ2dyYXBocWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi4vY29yZScpO1xuXG50eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGdsb2JhbHMubWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF2aWdhdG9yLnByb2R1Y3Q7IH0pICE9PSAnUmVhY3ROYXRpdmUnO1xudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgU3ltYm9sLmZvciA9PT0gJ2Z1bmN0aW9uJztcbnZhciBjYW5Vc2VBc3luY0l0ZXJhdG9yU3ltYm9sID0gY2FuVXNlU3ltYm9sICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yO1xudHlwZW9mIGdsb2JhbHMubWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ7IH0pID09PSBcImZ1bmN0aW9uXCI7XG5nbG9iYWxzLm1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcImpzZG9tXCIpID49IDA7IH0pIHx8IGZhbHNlO1xuXG5mdW5jdGlvbiBpc05vZGVSZXNwb25zZSh2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlLmJvZHk7XG59XG5mdW5jdGlvbiBpc1JlYWRhYmxlU3RyZWFtKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUuZ2V0UmVhZGVyO1xufVxuZnVuY3Rpb24gaXNBc3luY0l0ZXJhYmxlSXRlcmF0b3IodmFsdWUpIHtcbiAgICByZXR1cm4gISEoY2FuVXNlQXN5bmNJdGVyYXRvclN5bWJvbCAmJlxuICAgICAgICB2YWx1ZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pO1xufVxuZnVuY3Rpb24gaXNTdHJlYW1hYmxlQmxvYih2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlLnN0cmVhbTtcbn1cbmZ1bmN0aW9uIGlzQmxvYih2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlLmFycmF5QnVmZmVyO1xufVxuZnVuY3Rpb24gaXNOb2RlUmVhZGFibGVTdHJlYW0odmFsdWUpIHtcbiAgICByZXR1cm4gISF2YWx1ZS5waXBlO1xufVxuXG5mdW5jdGlvbiBhc3luY0l0ZXJhdG9yKHNvdXJjZSkge1xuICAgIHZhciBfYTtcbiAgICB2YXIgaXRlcmF0b3IgPSBzb3VyY2VbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7XG4gICAgcmV0dXJuIF9hID0ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9hW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBfYTtcbn1cblxuZnVuY3Rpb24gbm9kZVN0cmVhbUl0ZXJhdG9yKHN0cmVhbSkge1xuICAgIHZhciBjbGVhbnVwID0gbnVsbDtcbiAgICB2YXIgZXJyb3IgPSBudWxsO1xuICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgdmFyIGRhdGEgPSBbXTtcbiAgICB2YXIgd2FpdGluZyA9IFtdO1xuICAgIGZ1bmN0aW9uIG9uRGF0YShjaHVuaykge1xuICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh3YWl0aW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHNoaWZ0ZWRBcnIgPSB3YWl0aW5nLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzaGlmdGVkQXJyKSAmJiBzaGlmdGVkQXJyWzBdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoaWZ0ZWRBcnJbMF0oeyB2YWx1ZTogY2h1bmssIGRvbmU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEucHVzaChjaHVuayk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uRXJyb3IoZXJyKSB7XG4gICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICB2YXIgYWxsID0gd2FpdGluZy5zbGljZSgpO1xuICAgICAgICBhbGwuZm9yRWFjaChmdW5jdGlvbiAocGFpcikge1xuICAgICAgICAgICAgcGFpclsxXShlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgIWNsZWFudXAgfHwgY2xlYW51cCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkVuZCgpIHtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIHZhciBhbGwgPSB3YWl0aW5nLnNsaWNlKCk7XG4gICAgICAgIGFsbC5mb3JFYWNoKGZ1bmN0aW9uIChwYWlyKSB7XG4gICAgICAgICAgICBwYWlyWzBdKHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgICFjbGVhbnVwIHx8IGNsZWFudXAoKTtcbiAgICB9XG4gICAgY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYW51cCA9IG51bGw7XG4gICAgICAgIHN0cmVhbS5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIiwgb25EYXRhKTtcbiAgICAgICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XG4gICAgICAgIHN0cmVhbS5yZW1vdmVMaXN0ZW5lcihcImVuZFwiLCBvbkVuZCk7XG4gICAgICAgIHN0cmVhbS5yZW1vdmVMaXN0ZW5lcihcImZpbmlzaFwiLCBvbkVuZCk7XG4gICAgICAgIHN0cmVhbS5yZW1vdmVMaXN0ZW5lcihcImNsb3NlXCIsIG9uRW5kKTtcbiAgICB9O1xuICAgIHN0cmVhbS5vbihcImRhdGFcIiwgb25EYXRhKTtcbiAgICBzdHJlYW0ub24oXCJlcnJvclwiLCBvbkVycm9yKTtcbiAgICBzdHJlYW0ub24oXCJlbmRcIiwgb25FbmQpO1xuICAgIHN0cmVhbS5vbihcImZpbmlzaFwiLCBvbkVuZCk7XG4gICAgc3RyZWFtLm9uKFwiY2xvc2VcIiwgb25FbmQpO1xuICAgIGZ1bmN0aW9uIGdldE5leHQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyB2YWx1ZTogZGF0YS5zaGlmdCgpLCBkb25lOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIGlmIChkb25lKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHdhaXRpbmcucHVzaChbcmVzb2x2ZSwgcmVqZWN0XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROZXh0KCk7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAodXRpbGl0aWVzLmNhblVzZUFzeW5jSXRlcmF0b3JTeW1ib2wpIHtcbiAgICAgICAgaXRlcmF0b3JbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBpdGVyYXRvcjtcbn1cblxuZnVuY3Rpb24gcHJvbWlzZUl0ZXJhdG9yKHByb21pc2UpIHtcbiAgICB2YXIgcmVzb2x2ZWQgPSBmYWxzZTtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChyZXNvbHZlZClcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGlmICh1dGlsaXRpZXMuY2FuVXNlQXN5bmNJdGVyYXRvclN5bWJvbCkge1xuICAgICAgICBpdGVyYXRvcltTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuXG5mdW5jdGlvbiByZWFkZXJJdGVyYXRvcihyZWFkZXIpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFkZXIucmVhZCgpO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgaWYgKHV0aWxpdGllcy5jYW5Vc2VBc3luY0l0ZXJhdG9yU3ltYm9sKSB7XG4gICAgICAgIGl0ZXJhdG9yW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gaXRlcmF0b3I7XG59XG5cbmZ1bmN0aW9uIHJlc3BvbnNlSXRlcmF0b3IocmVzcG9uc2UpIHtcbiAgICB2YXIgYm9keSA9IHJlc3BvbnNlO1xuICAgIGlmIChpc05vZGVSZXNwb25zZShyZXNwb25zZSkpXG4gICAgICAgIGJvZHkgPSByZXNwb25zZS5ib2R5O1xuICAgIGlmIChpc0FzeW5jSXRlcmFibGVJdGVyYXRvcihib2R5KSlcbiAgICAgICAgcmV0dXJuIGFzeW5jSXRlcmF0b3IoYm9keSk7XG4gICAgaWYgKGlzUmVhZGFibGVTdHJlYW0oYm9keSkpXG4gICAgICAgIHJldHVybiByZWFkZXJJdGVyYXRvcihib2R5LmdldFJlYWRlcigpKTtcbiAgICBpZiAoaXNTdHJlYW1hYmxlQmxvYihib2R5KSkge1xuICAgICAgICByZXR1cm4gcmVhZGVySXRlcmF0b3IoYm9keS5zdHJlYW0oKS5nZXRSZWFkZXIoKSk7XG4gICAgfVxuICAgIGlmIChpc0Jsb2IoYm9keSkpXG4gICAgICAgIHJldHVybiBwcm9taXNlSXRlcmF0b3IoYm9keS5hcnJheUJ1ZmZlcigpKTtcbiAgICBpZiAoaXNOb2RlUmVhZGFibGVTdHJlYW0oYm9keSkpXG4gICAgICAgIHJldHVybiBub2RlU3RyZWFtSXRlcmF0b3IoYm9keSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBib2R5IHR5cGUgZm9yIHJlc3BvbnNlSXRlcmF0b3IuIFBsZWFzZSBwYXNzIGEgc3RyZWFtYWJsZSByZXNwb25zZS5cIik7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiByZWFkTXVsdGlwYXJ0Qm9keShyZXNwb25zZSwgb2JzZXJ2ZXIpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZWNvZGVyLCBjb250ZW50VHlwZSwgZGVsaW1pdGVyLCBib3VuZGFyeVZhbCwgYm91bmRhcnksIGJ1ZmZlciwgaXRlcmF0b3IsIHJ1bm5pbmcsIF9kLCB2YWx1ZSwgZG9uZSwgY2h1bmssIGJpLCBtZXNzYWdlLCBpLCBoZWFkZXJzLCBjb250ZW50VHlwZV8xLCBib2R5LCByZXN1bHQ7XG4gICAgICAgIHZhciBfZTtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZikge1xuICAgICAgICAgICAgc3dpdGNoIChfZi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRleHREZWNvZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRleHREZWNvZGVyIG11c3QgYmUgZGVmaW5lZCBpbiB0aGUgZW52aXJvbm1lbnQ6IHBsZWFzZSBpbXBvcnQgYSBwb2x5ZmlsbC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcihcInV0Zi04XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IChfYSA9IHJlc3BvbnNlLmhlYWRlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgICAgICAgICAgICAgICBkZWxpbWl0ZXIgPSBcImJvdW5kYXJ5PVwiO1xuICAgICAgICAgICAgICAgICAgICBib3VuZGFyeVZhbCA9IChjb250ZW50VHlwZSA9PT0gbnVsbCB8fCBjb250ZW50VHlwZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudFR5cGUuaW5jbHVkZXMoZGVsaW1pdGVyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29udGVudFR5cGUgPT09IG51bGwgfHwgY29udGVudFR5cGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRUeXBlLnN1YnN0cmluZygoY29udGVudFR5cGUgPT09IG51bGwgfHwgY29udGVudFR5cGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRUeXBlLmluZGV4T2YoZGVsaW1pdGVyKSkgKyBkZWxpbWl0ZXIubGVuZ3RoKS5yZXBsYWNlKC9bJ1wiXS9nLCBcIlwiKS5yZXBsYWNlKC9cXDsoLiopL2dtLCBcIlwiKS50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCI7XG4gICAgICAgICAgICAgICAgICAgIGJvdW5kYXJ5ID0gXCItLVwiLmNvbmNhdChib3VuZGFyeVZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yID0gcmVzcG9uc2VJdGVyYXRvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBfZi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJ1bm5pbmcpIHJldHVybiBbMywgM107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgaXRlcmF0b3IubmV4dCgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9kID0gX2Yuc2VudCgpLCB2YWx1ZSA9IF9kLnZhbHVlLCBkb25lID0gX2QuZG9uZTtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyB2YWx1ZSA6IGRlY29kZXIuZGVjb2RlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZyA9ICFkb25lO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gY2h1bms7XG4gICAgICAgICAgICAgICAgICAgIGJpID0gYnVmZmVyLmluZGV4T2YoYm91bmRhcnkpO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYmkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5zbGljZSgwLCBiaSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyLnNsaWNlKGJpICsgYm91bmRhcnkubGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sIG1lc3NhZ2UgPSBfZVswXSwgYnVmZmVyID0gX2VbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gbWVzc2FnZS5pbmRleE9mKFwiXFxyXFxuXFxyXFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBwYXJzZUhlYWRlcnMobWVzc2FnZS5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGVfMSA9IGhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlXzEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGVfMS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBwYXRjaCBjb250ZW50IHR5cGU6IGFwcGxpY2F0aW9uL2pzb24gaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5ID0gbWVzc2FnZS5zbGljZShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwYXJzZUpzb25Cb2R5KHJlc3BvbnNlLCBib2R5LnJlcGxhY2UoXCJcXHJcXG5cIiwgXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocmVzdWx0KS5sZW5ndGggPiAxIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIiBpbiByZXN1bHQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5jcmVtZW50YWxcIiBpbiByZXN1bHQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3JzXCIgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2IgPSBvYnNlcnZlci5uZXh0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChvYnNlcnZlciwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGVyciwgb2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJpID0gYnVmZmVyLmluZGV4T2YoYm91bmRhcnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAoX2MgPSBvYnNlcnZlci5jb21wbGV0ZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJUZXh0KSB7XG4gICAgdmFyIGhlYWRlcnNJbml0ID0ge307XG4gICAgaGVhZGVyVGV4dC5zcGxpdChcIlxcblwiKS5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAgIHZhciBpID0gbGluZS5pbmRleE9mKFwiOlwiKTtcbiAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IGxpbmUuc2xpY2UoMCwgaSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBsaW5lLnNsaWNlKGkgKyAxKS50cmltKCk7XG4gICAgICAgICAgICBoZWFkZXJzSW5pdFtuYW1lXzFdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaGVhZGVyc0luaXQ7XG59XG5mdW5jdGlvbiBwYXJzZUpzb25Cb2R5KHJlc3BvbnNlLCBib2R5VGV4dCkge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgIHZhciBnZXRSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGJvZHlUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9keVRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHV0aWxzLnRocm93U2VydmVyRXJyb3IocmVzcG9uc2UsIGdldFJlc3VsdCgpLCBcIlJlc3BvbnNlIG5vdCBzdWNjZXNzZnVsOiBSZWNlaXZlZCBzdGF0dXMgY29kZSBcIi5jb25jYXQocmVzcG9uc2Uuc3RhdHVzKSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGJvZHlUZXh0KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICB2YXIgcGFyc2VFcnJvciA9IGVycjtcbiAgICAgICAgcGFyc2VFcnJvci5uYW1lID0gXCJTZXJ2ZXJQYXJzZUVycm9yXCI7XG4gICAgICAgIHBhcnNlRXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgcGFyc2VFcnJvci5zdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBwYXJzZUVycm9yLmJvZHlUZXh0ID0gYm9keVRleHQ7XG4gICAgICAgIHRocm93IHBhcnNlRXJyb3I7XG4gICAgfVxufVxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyLCBvYnNlcnZlcikge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKGVyci5uYW1lID09PSBcIkFib3J0RXJyb3JcIilcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChlcnIucmVzdWx0ICYmIGVyci5yZXN1bHQuZXJyb3JzICYmIGVyci5yZXN1bHQuZGF0YSkge1xuICAgICAgICAoX2EgPSBvYnNlcnZlci5uZXh0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChvYnNlcnZlciwgZXJyLnJlc3VsdCk7XG4gICAgfVxuICAgIChfYiA9IG9ic2VydmVyLmVycm9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChvYnNlcnZlciwgZXJyKTtcbn1cbmZ1bmN0aW9uIHJlYWRKc29uQm9keShyZXNwb25zZSwgb3BlcmF0aW9uLCBvYnNlcnZlcikge1xuICAgIHBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2Uob3BlcmF0aW9uKShyZXNwb25zZSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoX2EgPSBvYnNlcnZlci5uZXh0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChvYnNlcnZlciwgcmVzdWx0KTtcbiAgICAgICAgKF9iID0gb2JzZXJ2ZXIuY29tcGxldGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKG9ic2VydmVyKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikgeyByZXR1cm4gaGFuZGxlRXJyb3IoZXJyLCBvYnNlcnZlcik7IH0pO1xufVxuZnVuY3Rpb24gcGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZShvcGVyYXRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgICAgIC50ZXh0KClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChib2R5VGV4dCkgeyByZXR1cm4gcGFyc2VKc29uQm9keShyZXNwb25zZSwgYm9keVRleHQpOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgICAgICAgICB1dGlscy50aHJvd1NlcnZlckVycm9yKHJlc3BvbnNlLCByZXN1bHQsIFwiUmVzcG9uc2Ugbm90IHN1Y2Nlc3NmdWw6IFJlY2VpdmVkIHN0YXR1cyBjb2RlIFwiLmNvbmNhdChyZXNwb25zZS5zdGF0dXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXN1bHQpICYmXG4gICAgICAgICAgICAgICAgIWhhc093blByb3BlcnR5LmNhbGwocmVzdWx0LCBcImRhdGFcIikgJiZcbiAgICAgICAgICAgICAgICAhaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQsIFwiZXJyb3JzXCIpKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMudGhyb3dTZXJ2ZXJFcnJvcihyZXNwb25zZSwgcmVzdWx0LCBcIlNlcnZlciByZXNwb25zZSB3YXMgbWlzc2luZyBmb3IgcXVlcnkgJ1wiLmNvbmNhdChBcnJheS5pc0FycmF5KG9wZXJhdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgID8gb3BlcmF0aW9ucy5tYXAoZnVuY3Rpb24gKG9wKSB7IHJldHVybiBvcC5vcGVyYXRpb25OYW1lOyB9KVxuICAgICAgICAgICAgICAgICAgICA6IG9wZXJhdGlvbnMub3BlcmF0aW9uTmFtZSwgXCInLlwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG52YXIgc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIgPSBmdW5jdGlvbiAocCwgbGFiZWwpIHtcbiAgICB2YXIgc2VyaWFsaXplZDtcbiAgICB0cnkge1xuICAgICAgICBzZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkocCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHZhciBwYXJzZUVycm9yID0gX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiTmV0d29yayByZXF1ZXN0IGZhaWxlZC4gXCIuY29uY2F0KGxhYmVsLCBcIiBpcyBub3Qgc2VyaWFsaXphYmxlOiBcIikuY29uY2F0KGUubWVzc2FnZSkpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMjQpO1xuICAgICAgICBwYXJzZUVycm9yLnBhcnNlRXJyb3IgPSBlO1xuICAgICAgICB0aHJvdyBwYXJzZUVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gc2VyaWFsaXplZDtcbn07XG5cbnZhciBkZWZhdWx0SHR0cE9wdGlvbnMgPSB7XG4gICAgaW5jbHVkZVF1ZXJ5OiB0cnVlLFxuICAgIGluY2x1ZGVFeHRlbnNpb25zOiBmYWxzZSxcbiAgICBwcmVzZXJ2ZUhlYWRlckNhc2U6IGZhbHNlLFxufTtcbnZhciBkZWZhdWx0SGVhZGVycyA9IHtcbiAgICBhY2NlcHQ6ICcqLyonLFxuICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG59O1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxufTtcbnZhciBmYWxsYmFja0h0dHBDb25maWcgPSB7XG4gICAgaHR0cDogZGVmYXVsdEh0dHBPcHRpb25zLFxuICAgIGhlYWRlcnM6IGRlZmF1bHRIZWFkZXJzLFxuICAgIG9wdGlvbnM6IGRlZmF1bHRPcHRpb25zLFxufTtcbnZhciBkZWZhdWx0UHJpbnRlciA9IGZ1bmN0aW9uIChhc3QsIHByaW50ZXIpIHsgcmV0dXJuIHByaW50ZXIoYXN0KTsgfTtcbmZ1bmN0aW9uIHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keShvcGVyYXRpb24sIGZhbGxiYWNrQ29uZmlnKSB7XG4gICAgdmFyIGNvbmZpZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBjb25maWdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBjb25maWdzLnVuc2hpZnQoZmFsbGJhY2tDb25maWcpO1xuICAgIHJldHVybiBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHlJbnRlcm5hbC5hcHBseSh2b2lkIDAsIHRzbGliLl9fc3ByZWFkQXJyYXkoW29wZXJhdGlvbixcbiAgICAgICAgZGVmYXVsdFByaW50ZXJdLCBjb25maWdzLCBmYWxzZSkpO1xufVxuZnVuY3Rpb24gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5SW50ZXJuYWwob3BlcmF0aW9uLCBwcmludGVyKSB7XG4gICAgdmFyIGNvbmZpZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBjb25maWdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgIHZhciBodHRwID0ge307XG4gICAgY29uZmlncy5mb3JFYWNoKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgY29uZmlnLm9wdGlvbnMpLCB7IGhlYWRlcnM6IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zLmhlYWRlcnMpLCBjb25maWcuaGVhZGVycykgfSk7XG4gICAgICAgIGlmIChjb25maWcuY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY3JlZGVudGlhbHMgPSBjb25maWcuY3JlZGVudGlhbHM7XG4gICAgICAgIH1cbiAgICAgICAgaHR0cCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBodHRwKSwgY29uZmlnLmh0dHApO1xuICAgIH0pO1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gcmVtb3ZlRHVwbGljYXRlSGVhZGVycyhvcHRpb25zLmhlYWRlcnMsIGh0dHAucHJlc2VydmVIZWFkZXJDYXNlKTtcbiAgICB9XG4gICAgdmFyIG9wZXJhdGlvbk5hbWUgPSBvcGVyYXRpb24ub3BlcmF0aW9uTmFtZSwgZXh0ZW5zaW9ucyA9IG9wZXJhdGlvbi5leHRlbnNpb25zLCB2YXJpYWJsZXMgPSBvcGVyYXRpb24udmFyaWFibGVzLCBxdWVyeSA9IG9wZXJhdGlvbi5xdWVyeTtcbiAgICB2YXIgYm9keSA9IHsgb3BlcmF0aW9uTmFtZTogb3BlcmF0aW9uTmFtZSwgdmFyaWFibGVzOiB2YXJpYWJsZXMgfTtcbiAgICBpZiAoaHR0cC5pbmNsdWRlRXh0ZW5zaW9ucylcbiAgICAgICAgYm9keS5leHRlbnNpb25zID0gZXh0ZW5zaW9ucztcbiAgICBpZiAoaHR0cC5pbmNsdWRlUXVlcnkpXG4gICAgICAgIGJvZHkucXVlcnkgPSBwcmludGVyKHF1ZXJ5LCBncmFwaHFsLnByaW50KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBib2R5OiBib2R5LFxuICAgIH07XG59XG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVIZWFkZXJzKGhlYWRlcnMsIHByZXNlcnZlSGVhZGVyQ2FzZSkge1xuICAgIGlmICghcHJlc2VydmVIZWFkZXJDYXNlKSB7XG4gICAgICAgIHZhciBub3JtYWxpemVkSGVhZGVyc18xID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgT2JqZWN0LmtleXMoT2JqZWN0KGhlYWRlcnMpKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBub3JtYWxpemVkSGVhZGVyc18xW25hbWUudG9Mb3dlckNhc2UoKV0gPSBoZWFkZXJzW25hbWVdO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRIZWFkZXJzXzE7XG4gICAgfVxuICAgIHZhciBoZWFkZXJEYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBPYmplY3Qua2V5cyhPYmplY3QoaGVhZGVycykpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaGVhZGVyRGF0YVtuYW1lLnRvTG93ZXJDYXNlKCldID0geyBvcmlnaW5hbE5hbWU6IG5hbWUsIHZhbHVlOiBoZWFkZXJzW25hbWVdIH07XG4gICAgfSk7XG4gICAgdmFyIG5vcm1hbGl6ZWRIZWFkZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBPYmplY3Qua2V5cyhoZWFkZXJEYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG5vcm1hbGl6ZWRIZWFkZXJzW2hlYWRlckRhdGFbbmFtZV0ub3JpZ2luYWxOYW1lXSA9IGhlYWRlckRhdGFbbmFtZV0udmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRIZWFkZXJzO1xufVxuXG52YXIgY2hlY2tGZXRjaGVyID0gZnVuY3Rpb24gKGZldGNoZXIpIHtcbiAgICBpZiAoIWZldGNoZXIgJiYgdHlwZW9mIGZldGNoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJcXG5cXFwiZmV0Y2hcXFwiIGhhcyBub3QgYmVlbiBmb3VuZCBnbG9iYWxseSBhbmQgbm8gZmV0Y2hlciBoYXMgYmVlbiBjb25maWd1cmVkLiBUbyBmaXggdGhpcywgaW5zdGFsbCBhIGZldGNoIHBhY2thZ2UgKGxpa2UgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY3Jvc3MtZmV0Y2gpLCBpbnN0YW50aWF0ZSB0aGUgZmV0Y2hlciwgYW5kIHBhc3MgaXQgaW50byB5b3VyIEh0dHBMaW5rIGNvbnN0cnVjdG9yLiBGb3IgZXhhbXBsZTpcXG5cXG5pbXBvcnQgZmV0Y2ggZnJvbSAnY3Jvc3MtZmV0Y2gnO1xcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSHR0cExpbmsgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XFxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XFxuICBsaW5rOiBuZXcgSHR0cExpbmsoeyB1cmk6ICcvZ3JhcGhxbCcsIGZldGNoIH0pXFxufSk7XFxuICAgIFwiKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDIzKTtcbiAgICB9XG59O1xuXG52YXIgY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm4geyBjb250cm9sbGVyOiBmYWxzZSwgc2lnbmFsOiBmYWxzZSB9O1xuICAgIHZhciBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIHZhciBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcbiAgICByZXR1cm4geyBjb250cm9sbGVyOiBjb250cm9sbGVyLCBzaWduYWw6IHNpZ25hbCB9O1xufTtcblxudmFyIHNlbGVjdFVSSSA9IGZ1bmN0aW9uIChvcGVyYXRpb24sIGZhbGxiYWNrVVJJKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcGVyYXRpb24uZ2V0Q29udGV4dCgpO1xuICAgIHZhciBjb250ZXh0VVJJID0gY29udGV4dC51cmk7XG4gICAgaWYgKGNvbnRleHRVUkkpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRVUkk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBmYWxsYmFja1VSSSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmFsbGJhY2tVUkkob3BlcmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxsYmFja1VSSSB8fCAnL2dyYXBocWwnO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHJld3JpdGVVUklGb3JHRVQoY2hvc2VuVVJJLCBib2R5KSB7XG4gICAgdmFyIHF1ZXJ5UGFyYW1zID0gW107XG4gICAgdmFyIGFkZFF1ZXJ5UGFyYW0gPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBxdWVyeVBhcmFtcy5wdXNoKFwiXCIuY29uY2F0KGtleSwgXCI9XCIpLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSk7XG4gICAgfTtcbiAgICBpZiAoJ3F1ZXJ5JyBpbiBib2R5KSB7XG4gICAgICAgIGFkZFF1ZXJ5UGFyYW0oJ3F1ZXJ5JywgYm9keS5xdWVyeSk7XG4gICAgfVxuICAgIGlmIChib2R5Lm9wZXJhdGlvbk5hbWUpIHtcbiAgICAgICAgYWRkUXVlcnlQYXJhbSgnb3BlcmF0aW9uTmFtZScsIGJvZHkub3BlcmF0aW9uTmFtZSk7XG4gICAgfVxuICAgIGlmIChib2R5LnZhcmlhYmxlcykge1xuICAgICAgICB2YXIgc2VyaWFsaXplZFZhcmlhYmxlcyA9IHZvaWQgMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRWYXJpYWJsZXMgPSBzZXJpYWxpemVGZXRjaFBhcmFtZXRlcihib2R5LnZhcmlhYmxlcywgJ1ZhcmlhYmxlcyBtYXAnKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgcGFyc2VFcnJvcjogcGFyc2VFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGFkZFF1ZXJ5UGFyYW0oJ3ZhcmlhYmxlcycsIHNlcmlhbGl6ZWRWYXJpYWJsZXMpO1xuICAgIH1cbiAgICBpZiAoYm9keS5leHRlbnNpb25zKSB7XG4gICAgICAgIHZhciBzZXJpYWxpemVkRXh0ZW5zaW9ucyA9IHZvaWQgMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRFeHRlbnNpb25zID0gc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIoYm9keS5leHRlbnNpb25zLCAnRXh0ZW5zaW9ucyBtYXAnKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgcGFyc2VFcnJvcjogcGFyc2VFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGFkZFF1ZXJ5UGFyYW0oJ2V4dGVuc2lvbnMnLCBzZXJpYWxpemVkRXh0ZW5zaW9ucyk7XG4gICAgfVxuICAgIHZhciBmcmFnbWVudCA9ICcnLCBwcmVGcmFnbWVudCA9IGNob3NlblVSSTtcbiAgICB2YXIgZnJhZ21lbnRTdGFydCA9IGNob3NlblVSSS5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGZyYWdtZW50U3RhcnQgIT09IC0xKSB7XG4gICAgICAgIGZyYWdtZW50ID0gY2hvc2VuVVJJLnN1YnN0cihmcmFnbWVudFN0YXJ0KTtcbiAgICAgICAgcHJlRnJhZ21lbnQgPSBjaG9zZW5VUkkuc3Vic3RyKDAsIGZyYWdtZW50U3RhcnQpO1xuICAgIH1cbiAgICB2YXIgcXVlcnlQYXJhbXNQcmVmaXggPSBwcmVGcmFnbWVudC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnO1xuICAgIHZhciBuZXdVUkkgPSBwcmVGcmFnbWVudCArIHF1ZXJ5UGFyYW1zUHJlZml4ICsgcXVlcnlQYXJhbXMuam9pbignJicpICsgZnJhZ21lbnQ7XG4gICAgcmV0dXJuIHsgbmV3VVJJOiBuZXdVUkkgfTtcbn1cblxudmFyIGJhY2t1cEZldGNoID0gdXRpbGl0aWVzLm1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZldGNoOyB9KTtcbnZhciBjcmVhdGVIdHRwTGluayA9IGZ1bmN0aW9uIChsaW5rT3B0aW9ucykge1xuICAgIGlmIChsaW5rT3B0aW9ucyA9PT0gdm9pZCAwKSB7IGxpbmtPcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBsaW5rT3B0aW9ucy51cmksIHVyaSA9IF9hID09PSB2b2lkIDAgPyAnL2dyYXBocWwnIDogX2EsIHByZWZlcnJlZEZldGNoID0gbGlua09wdGlvbnMuZmV0Y2gsIF9iID0gbGlua09wdGlvbnMucHJpbnQsIHByaW50ID0gX2IgPT09IHZvaWQgMCA/IGRlZmF1bHRQcmludGVyIDogX2IsIGluY2x1ZGVFeHRlbnNpb25zID0gbGlua09wdGlvbnMuaW5jbHVkZUV4dGVuc2lvbnMsIHByZXNlcnZlSGVhZGVyQ2FzZSA9IGxpbmtPcHRpb25zLnByZXNlcnZlSGVhZGVyQ2FzZSwgdXNlR0VURm9yUXVlcmllcyA9IGxpbmtPcHRpb25zLnVzZUdFVEZvclF1ZXJpZXMsIF9jID0gbGlua09wdGlvbnMuaW5jbHVkZVVudXNlZFZhcmlhYmxlcywgaW5jbHVkZVVudXNlZFZhcmlhYmxlcyA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCByZXF1ZXN0T3B0aW9ucyA9IHRzbGliLl9fcmVzdChsaW5rT3B0aW9ucywgW1widXJpXCIsIFwiZmV0Y2hcIiwgXCJwcmludFwiLCBcImluY2x1ZGVFeHRlbnNpb25zXCIsIFwicHJlc2VydmVIZWFkZXJDYXNlXCIsIFwidXNlR0VURm9yUXVlcmllc1wiLCBcImluY2x1ZGVVbnVzZWRWYXJpYWJsZXNcIl0pO1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGNoZWNrRmV0Y2hlcihwcmVmZXJyZWRGZXRjaCB8fCBiYWNrdXBGZXRjaCk7XG4gICAgfVxuICAgIHZhciBsaW5rQ29uZmlnID0ge1xuICAgICAgICBodHRwOiB7IGluY2x1ZGVFeHRlbnNpb25zOiBpbmNsdWRlRXh0ZW5zaW9ucywgcHJlc2VydmVIZWFkZXJDYXNlOiBwcmVzZXJ2ZUhlYWRlckNhc2UgfSxcbiAgICAgICAgb3B0aW9uczogcmVxdWVzdE9wdGlvbnMuZmV0Y2hPcHRpb25zLFxuICAgICAgICBjcmVkZW50aWFsczogcmVxdWVzdE9wdGlvbnMuY3JlZGVudGlhbHMsXG4gICAgICAgIGhlYWRlcnM6IHJlcXVlc3RPcHRpb25zLmhlYWRlcnMsXG4gICAgfTtcbiAgICByZXR1cm4gbmV3IGNvcmUuQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICAgIHZhciBjaG9zZW5VUkkgPSBzZWxlY3RVUkkob3BlcmF0aW9uLCB1cmkpO1xuICAgICAgICB2YXIgY29udGV4dCA9IG9wZXJhdGlvbi5nZXRDb250ZXh0KCk7XG4gICAgICAgIHZhciBjbGllbnRBd2FyZW5lc3NIZWFkZXJzID0ge307XG4gICAgICAgIGlmIChjb250ZXh0LmNsaWVudEF3YXJlbmVzcykge1xuICAgICAgICAgICAgdmFyIF9hID0gY29udGV4dC5jbGllbnRBd2FyZW5lc3MsIG5hbWVfMSA9IF9hLm5hbWUsIHZlcnNpb24gPSBfYS52ZXJzaW9uO1xuICAgICAgICAgICAgaWYgKG5hbWVfMSkge1xuICAgICAgICAgICAgICAgIGNsaWVudEF3YXJlbmVzc0hlYWRlcnNbJ2Fwb2xsb2dyYXBocWwtY2xpZW50LW5hbWUnXSA9IG5hbWVfMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgY2xpZW50QXdhcmVuZXNzSGVhZGVyc1snYXBvbGxvZ3JhcGhxbC1jbGllbnQtdmVyc2lvbiddID0gdmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY29udGV4dEhlYWRlcnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY2xpZW50QXdhcmVuZXNzSGVhZGVycyksIGNvbnRleHQuaGVhZGVycyk7XG4gICAgICAgIHZhciBjb250ZXh0Q29uZmlnID0ge1xuICAgICAgICAgICAgaHR0cDogY29udGV4dC5odHRwLFxuICAgICAgICAgICAgb3B0aW9uczogY29udGV4dC5mZXRjaE9wdGlvbnMsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogY29udGV4dC5jcmVkZW50aWFscyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGNvbnRleHRIZWFkZXJzLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgX2IgPSBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHlJbnRlcm5hbChvcGVyYXRpb24sIHByaW50LCBmYWxsYmFja0h0dHBDb25maWcsIGxpbmtDb25maWcsIGNvbnRleHRDb25maWcpLCBvcHRpb25zID0gX2Iub3B0aW9ucywgYm9keSA9IF9iLmJvZHk7XG4gICAgICAgIGlmIChib2R5LnZhcmlhYmxlcyAmJiAhaW5jbHVkZVVudXNlZFZhcmlhYmxlcykge1xuICAgICAgICAgICAgdmFyIHVudXNlZE5hbWVzXzEgPSBuZXcgU2V0KE9iamVjdC5rZXlzKGJvZHkudmFyaWFibGVzKSk7XG4gICAgICAgICAgICBncmFwaHFsLnZpc2l0KG9wZXJhdGlvbi5xdWVyeSwge1xuICAgICAgICAgICAgICAgIFZhcmlhYmxlOiBmdW5jdGlvbiAobm9kZSwgX2tleSwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmtpbmQgIT09ICdWYXJpYWJsZURlZmluaXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnVzZWROYW1lc18xLmRlbGV0ZShub2RlLm5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHVudXNlZE5hbWVzXzEuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGJvZHkudmFyaWFibGVzID0gdHNsaWIuX19hc3NpZ24oe30sIGJvZHkudmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICB1bnVzZWROYW1lc18xLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGJvZHkudmFyaWFibGVzW25hbWVdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb250cm9sbGVyO1xuICAgICAgICBpZiAoIW9wdGlvbnMuc2lnbmFsKSB7XG4gICAgICAgICAgICB2YXIgX2MgPSBjcmVhdGVTaWduYWxJZlN1cHBvcnRlZCgpLCBfY29udHJvbGxlciA9IF9jLmNvbnRyb2xsZXIsIHNpZ25hbCA9IF9jLnNpZ25hbDtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBfY29udHJvbGxlcjtcbiAgICAgICAgICAgIGlmIChjb250cm9sbGVyKVxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2lnbmFsID0gc2lnbmFsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWZpbml0aW9uSXNNdXRhdGlvbiA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiYgZC5vcGVyYXRpb24gPT09ICdtdXRhdGlvbic7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh1c2VHRVRGb3JRdWVyaWVzICYmXG4gICAgICAgICAgICAhb3BlcmF0aW9uLnF1ZXJ5LmRlZmluaXRpb25zLnNvbWUoZGVmaW5pdGlvbklzTXV0YXRpb24pKSB7XG4gICAgICAgICAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaGFzRGlyZWN0aXZlcyhbJ2RlZmVyJ10sIG9wZXJhdGlvbi5xdWVyeSkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVycy5hY2NlcHQgPSBcIm11bHRpcGFydC9taXhlZDsgZGVmZXJTcGVjPTIwMjIwODI0LCBhcHBsaWNhdGlvbi9qc29uXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgdmFyIF9kID0gcmV3cml0ZVVSSUZvckdFVChjaG9zZW5VUkksIGJvZHkpLCBuZXdVUkkgPSBfZC5uZXdVUkksIHBhcnNlRXJyb3IgPSBfZC5wYXJzZUVycm9yO1xuICAgICAgICAgICAgaWYgKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuZnJvbUVycm9yKHBhcnNlRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hvc2VuVVJJID0gbmV3VVJJO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBzZXJpYWxpemVGZXRjaFBhcmFtZXRlcihib2R5LCAnUGF5bG9hZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuZnJvbUVycm9yKHBhcnNlRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudEZldGNoID0gcHJlZmVycmVkRmV0Y2ggfHwgdXRpbGl0aWVzLm1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZldGNoOyB9KSB8fCBiYWNrdXBGZXRjaDtcbiAgICAgICAgICAgIGN1cnJlbnRGZXRjaChjaG9zZW5VUkksIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KHsgcmVzcG9uc2U6IHJlc3BvbnNlIH0pO1xuICAgICAgICAgICAgICAgIHZhciBjdHlwZSA9IChfYSA9IHJlc3BvbnNlLmhlYWRlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgICAgICAgICAgIGlmIChjdHlwZSAhPT0gbnVsbCAmJiAvXm11bHRpcGFydFxcL21peGVkL2kudGVzdChjdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRNdWx0aXBhcnRCb2R5KHJlc3BvbnNlLCBvYnNlcnZlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVhZEpzb25Cb2R5KHJlc3BvbnNlLCBvcGVyYXRpb24sIG9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBoYW5kbGVFcnJvcihlcnIsIG9ic2VydmVyKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyKVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbnZhciBIdHRwTGluayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKEh0dHBMaW5rLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEh0dHBMaW5rKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY3JlYXRlSHR0cExpbmsob3B0aW9ucykucmVxdWVzdCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEh0dHBMaW5rO1xufShjb3JlLkFwb2xsb0xpbmspKTtcblxuZXhwb3J0cy5IdHRwTGluayA9IEh0dHBMaW5rO1xuZXhwb3J0cy5jaGVja0ZldGNoZXIgPSBjaGVja0ZldGNoZXI7XG5leHBvcnRzLmNyZWF0ZUh0dHBMaW5rID0gY3JlYXRlSHR0cExpbms7XG5leHBvcnRzLmNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkID0gY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQ7XG5leHBvcnRzLmRlZmF1bHRQcmludGVyID0gZGVmYXVsdFByaW50ZXI7XG5leHBvcnRzLmZhbGxiYWNrSHR0cENvbmZpZyA9IGZhbGxiYWNrSHR0cENvbmZpZztcbmV4cG9ydHMucGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZSA9IHBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2U7XG5leHBvcnRzLnJld3JpdGVVUklGb3JHRVQgPSByZXdyaXRlVVJJRm9yR0VUO1xuZXhwb3J0cy5zZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHkgPSBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHk7XG5leHBvcnRzLnNlbGVjdEh0dHBPcHRpb25zQW5kQm9keUludGVybmFsID0gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5SW50ZXJuYWw7XG5leHBvcnRzLnNlbGVjdFVSSSA9IHNlbGVjdFVSSTtcbmV4cG9ydHMuc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIgPSBzZXJpYWxpemVGZXRjaFBhcmFtZXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xuXG5mdW5jdGlvbiBmcm9tRXJyb3IoZXJyb3JWYWx1ZSkge1xuICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yVmFsdWUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b1Byb21pc2Uob2JzZXJ2YWJsZSkge1xuICAgIHZhciBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiUHJvbWlzZSBXcmFwcGVyIGRvZXMgbm90IHN1cHBvcnQgbXVsdGlwbGUgcmVzdWx0cyBmcm9tIE9ic2VydmFibGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZnJvbVByb21pc2UocHJvbWlzZSkge1xuICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpKTtcbiAgICB9KTtcbn1cblxudmFyIHRocm93U2VydmVyRXJyb3IgPSBmdW5jdGlvbiAocmVzcG9uc2UsIHJlc3VsdCwgbWVzc2FnZSkge1xuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICBlcnJvci5uYW1lID0gJ1NlcnZlckVycm9yJztcbiAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIGVycm9yLnN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgZXJyb3IucmVzdWx0ID0gcmVzdWx0O1xuICAgIHRocm93IGVycm9yO1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVPcGVyYXRpb24ob3BlcmF0aW9uKSB7XG4gICAgdmFyIE9QRVJBVElPTl9GSUVMRFMgPSBbXG4gICAgICAgICdxdWVyeScsXG4gICAgICAgICdvcGVyYXRpb25OYW1lJyxcbiAgICAgICAgJ3ZhcmlhYmxlcycsXG4gICAgICAgICdleHRlbnNpb25zJyxcbiAgICAgICAgJ2NvbnRleHQnLFxuICAgIF07XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG9wZXJhdGlvbik7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBfYVtfaV07XG4gICAgICAgIGlmIChPUEVSQVRJT05fRklFTERTLmluZGV4T2Yoa2V5KSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcImlsbGVnYWwgYXJndW1lbnQ6IFwiLmNvbmNhdChrZXkpKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDI3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3BlcmF0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPcGVyYXRpb24oc3RhcnRpbmcsIG9wZXJhdGlvbikge1xuICAgIHZhciBjb250ZXh0ID0gdHNsaWIuX19hc3NpZ24oe30sIHN0YXJ0aW5nKTtcbiAgICB2YXIgc2V0Q29udGV4dCA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29udGV4dCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSwgbmV4dChjb250ZXh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCBuZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGdldENvbnRleHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAodHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpKTsgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3BlcmF0aW9uLCAnc2V0Q29udGV4dCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBzZXRDb250ZXh0LFxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcGVyYXRpb24sICdnZXRDb250ZXh0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IGdldENvbnRleHQsXG4gICAgfSk7XG4gICAgcmV0dXJuIG9wZXJhdGlvbjtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtT3BlcmF0aW9uKG9wZXJhdGlvbikge1xuICAgIHZhciB0cmFuc2Zvcm1lZE9wZXJhdGlvbiA9IHtcbiAgICAgICAgdmFyaWFibGVzOiBvcGVyYXRpb24udmFyaWFibGVzIHx8IHt9LFxuICAgICAgICBleHRlbnNpb25zOiBvcGVyYXRpb24uZXh0ZW5zaW9ucyB8fCB7fSxcbiAgICAgICAgb3BlcmF0aW9uTmFtZTogb3BlcmF0aW9uLm9wZXJhdGlvbk5hbWUsXG4gICAgICAgIHF1ZXJ5OiBvcGVyYXRpb24ucXVlcnksXG4gICAgfTtcbiAgICBpZiAoIXRyYW5zZm9ybWVkT3BlcmF0aW9uLm9wZXJhdGlvbk5hbWUpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRPcGVyYXRpb24ub3BlcmF0aW9uTmFtZSA9XG4gICAgICAgICAgICB0eXBlb2YgdHJhbnNmb3JtZWRPcGVyYXRpb24ucXVlcnkgIT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyB1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uTmFtZSh0cmFuc2Zvcm1lZE9wZXJhdGlvbi5xdWVyeSkgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkT3BlcmF0aW9uO1xufVxuXG5leHBvcnRzLmNyZWF0ZU9wZXJhdGlvbiA9IGNyZWF0ZU9wZXJhdGlvbjtcbmV4cG9ydHMuZnJvbUVycm9yID0gZnJvbUVycm9yO1xuZXhwb3J0cy5mcm9tUHJvbWlzZSA9IGZyb21Qcm9taXNlO1xuZXhwb3J0cy50aHJvd1NlcnZlckVycm9yID0gdGhyb3dTZXJ2ZXJFcnJvcjtcbmV4cG9ydHMudG9Qcm9taXNlID0gdG9Qcm9taXNlO1xuZXhwb3J0cy50cmFuc2Zvcm1PcGVyYXRpb24gPSB0cmFuc2Zvcm1PcGVyYXRpb247XG5leHBvcnRzLnZhbGlkYXRlT3BlcmF0aW9uID0gdmFsaWRhdGVPcGVyYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb3JlID0gcmVxdWlyZSgnLi9jb3JlJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCcuL3JlYWN0Jyk7XG5cblxuXG5mb3IgKHZhciBrIGluIGNvcmUpIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgZXhwb3J0c1trXSA9IGNvcmVba107XG59XG5mb3IgKHZhciBrIGluIHJlYWN0KSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIGV4cG9ydHNba10gPSByZWFjdFtrXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcE5hbWVzcGFjZShlKSB7XG4gICAgaWYgKGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgICB2YXIgbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgaWYgKGUpIHtcbiAgICAgICAgZm9yICh2YXIgayBpbiBlKSB7XG4gICAgICAgICAgICBuW2tdID0gZVtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBuW1wiZGVmYXVsdFwiXSA9IGU7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUobik7XG59XG5cbnZhciBSZWFjdF9fbmFtZXNwYWNlID0gLyojX19QVVJFX18qL19pbnRlcm9wTmFtZXNwYWNlKFJlYWN0KTtcblxudmFyIGNvbnRleHRLZXkgPSB1dGlsaXRpZXMuY2FuVXNlU3ltYm9sXG4gICAgPyBTeW1ib2wuZm9yKCdfX0FQT0xMT19DT05URVhUX18nKVxuICAgIDogJ19fQVBPTExPX0NPTlRFWFRfXyc7XG5mdW5jdGlvbiBnZXRBcG9sbG9Db250ZXh0KCkge1xuICAgIHZhciBjb250ZXh0ID0gUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVDb250ZXh0W2NvbnRleHRLZXldO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVDb250ZXh0LCBjb250ZXh0S2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogY29udGV4dCA9IFJlYWN0X19uYW1lc3BhY2UuY3JlYXRlQ29udGV4dCh7fSksXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRleHQuZGlzcGxheU5hbWUgPSAnQXBvbGxvQ29udGV4dCc7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgQXBvbGxvQ29uc3VtZXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgQXBvbGxvQ29udGV4dCA9IGdldEFwb2xsb0NvbnRleHQoKTtcbiAgICByZXR1cm4gKFJlYWN0X19uYW1lc3BhY2UuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoY29udGV4dCAmJiBjb250ZXh0LmNsaWVudCwgJ0NvdWxkIG5vdCBmaW5kIFwiY2xpZW50XCIgaW4gdGhlIGNvbnRleHQgb2YgQXBvbGxvQ29uc3VtZXIuICcgK1xuICAgICAgICAgICAgJ1dyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGFuIDxBcG9sbG9Qcm92aWRlcj4uJykgOiBnbG9iYWxzLmludmFyaWFudChjb250ZXh0ICYmIGNvbnRleHQuY2xpZW50LCAyOCk7XG4gICAgICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbihjb250ZXh0LmNsaWVudCk7XG4gICAgfSkpO1xufTtcblxudmFyIEFwb2xsb1Byb3ZpZGVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNsaWVudCA9IF9hLmNsaWVudCwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcbiAgICB2YXIgQXBvbGxvQ29udGV4dCA9IGdldEFwb2xsb0NvbnRleHQoKTtcbiAgICByZXR1cm4gKFJlYWN0X19uYW1lc3BhY2UuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgICAgICBpZiAoY2xpZW50ICYmIGNvbnRleHQuY2xpZW50ICE9PSBjbGllbnQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7IGNsaWVudDogY2xpZW50IH0pO1xuICAgICAgICB9XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChjb250ZXh0LmNsaWVudCwgJ0Fwb2xsb1Byb3ZpZGVyIHdhcyBub3QgcGFzc2VkIGEgY2xpZW50IGluc3RhbmNlLiBNYWtlICcgK1xuICAgICAgICAgICAgJ3N1cmUgeW91IHBhc3MgaW4geW91ciBjbGllbnQgdmlhIHRoZSBcImNsaWVudFwiIHByb3AuJykgOiBnbG9iYWxzLmludmFyaWFudChjb250ZXh0LmNsaWVudCwgMjkpO1xuICAgICAgICByZXR1cm4gKFJlYWN0X19uYW1lc3BhY2UuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0IH0sIGNoaWxkcmVuKSk7XG4gICAgfSkpO1xufTtcblxuZXhwb3J0cy5BcG9sbG9Db25zdW1lciA9IEFwb2xsb0NvbnN1bWVyO1xuZXhwb3J0cy5BcG9sbG9Qcm92aWRlciA9IEFwb2xsb1Byb3ZpZGVyO1xuZXhwb3J0cy5nZXRBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dDtcbmV4cG9ydHMucmVzZXRBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHQuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCcuLi9jb250ZXh0Jyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcycpO1xudmFyIGVxdWFsaXR5ID0gcmVxdWlyZSgnQHdyeS9lcXVhbGl0eScpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9jb3JlJyk7XG52YXIgZXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vZXJyb3JzJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2VyJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wTmFtZXNwYWNlKGUpIHtcbiAgICBpZiAoZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICAgIHZhciBuID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBpZiAoZSkge1xuICAgICAgICBmb3IgKHZhciBrIGluIGUpIHtcbiAgICAgICAgICAgIG5ba10gPSBlW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5bXCJkZWZhdWx0XCJdID0gZTtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShuKTtcbn1cblxudmFyIFJlYWN0X19uYW1lc3BhY2UgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BOYW1lc3BhY2UoUmVhY3QpO1xuXG5mdW5jdGlvbiB1c2VBcG9sbG9DbGllbnQob3ZlcnJpZGUpIHtcbiAgICB2YXIgY29udGV4dCQxID0gUmVhY3QudXNlQ29udGV4dChjb250ZXh0LmdldEFwb2xsb0NvbnRleHQoKSk7XG4gICAgdmFyIGNsaWVudCA9IG92ZXJyaWRlIHx8IGNvbnRleHQkMS5jbGllbnQ7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KCEhY2xpZW50LCAnQ291bGQgbm90IGZpbmQgXCJjbGllbnRcIiBpbiB0aGUgY29udGV4dCBvciBwYXNzZWQgaW4gYXMgYW4gb3B0aW9uLiAnICtcbiAgICAgICAgJ1dyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGFuIDxBcG9sbG9Qcm92aWRlcj4sIG9yIHBhc3MgYW4gQXBvbGxvQ2xpZW50ICcgK1xuICAgICAgICAnaW5zdGFuY2UgaW4gdmlhIG9wdGlvbnMuJykgOiBnbG9iYWxzLmludmFyaWFudCghIWNsaWVudCwgMzIpO1xuICAgIHJldHVybiBjbGllbnQ7XG59XG5cbnZhciBkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCA9IGZhbHNlO1xudmFyIHVTRVNLZXkgPSBcInVzZVN5bmNFeHRlcm5hbFN0b3JlXCI7XG52YXIgcmVhbEhvb2sgPSBSZWFjdF9fbmFtZXNwYWNlW3VTRVNLZXldO1xudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gcmVhbEhvb2sgfHwgKGZ1bmN0aW9uIChzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFNuYXBzaG90KCk7XG4gICAgaWYgKF9fREVWX18gJiZcbiAgICAgICAgIWRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90ICYmXG4gICAgICAgIHZhbHVlICE9PSBnZXRTbmFwc2hvdCgpKSB7XG4gICAgICAgIGRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90ID0gdHJ1ZTtcbiAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5lcnJvcignVGhlIHJlc3VsdCBvZiBnZXRTbmFwc2hvdCBzaG91bGQgYmUgY2FjaGVkIHRvIGF2b2lkIGFuIGluZmluaXRlIGxvb3AnKTtcbiAgICB9XG4gICAgdmFyIF9hID0gUmVhY3RfX25hbWVzcGFjZS51c2VTdGF0ZSh7IGluc3Q6IHsgdmFsdWU6IHZhbHVlLCBnZXRTbmFwc2hvdDogZ2V0U25hcHNob3QgfSB9KSwgaW5zdCA9IF9hWzBdLmluc3QsIGZvcmNlVXBkYXRlID0gX2FbMV07XG4gICAgaWYgKHV0aWxpdGllcy5jYW5Vc2VMYXlvdXRFZmZlY3QpIHtcbiAgICAgICAgUmVhY3RfX25hbWVzcGFjZS51c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpbnN0LCB7IHZhbHVlOiB2YWx1ZSwgZ2V0U25hcHNob3Q6IGdldFNuYXBzaG90IH0pO1xuICAgICAgICAgICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgICAgICAgICAgICBmb3JjZVVwZGF0ZSh7IGluc3Q6IGluc3QgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtzdWJzY3JpYmUsIHZhbHVlLCBnZXRTbmFwc2hvdF0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihpbnN0LCB7IHZhbHVlOiB2YWx1ZSwgZ2V0U25hcHNob3Q6IGdldFNuYXBzaG90IH0pO1xuICAgIH1cbiAgICBSZWFjdF9fbmFtZXNwYWNlLnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpKSB7XG4gICAgICAgICAgICBmb3JjZVVwZGF0ZSh7IGluc3Q6IGluc3QgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZShmdW5jdGlvbiBoYW5kbGVTdG9yZUNoYW5nZSgpIHtcbiAgICAgICAgICAgIGlmIChjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpKSB7XG4gICAgICAgICAgICAgICAgZm9yY2VVcGRhdGUoeyBpbnN0OiBpbnN0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbc3Vic2NyaWJlXSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufSk7XG5mdW5jdGlvbiBjaGVja0lmU25hcHNob3RDaGFuZ2VkKF9hKSB7XG4gICAgdmFyIHZhbHVlID0gX2EudmFsdWUsIGdldFNuYXBzaG90ID0gX2EuZ2V0U25hcHNob3Q7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBnZXRTbmFwc2hvdCgpO1xuICAgIH1cbiAgICBjYXRjaCAoX2IpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gdXNlUXVlcnkocXVlcnksIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyB9XG4gICAgcmV0dXJuIHVzZUludGVybmFsU3RhdGUodXNlQXBvbGxvQ2xpZW50KG9wdGlvbnMuY2xpZW50KSwgcXVlcnkpLnVzZVF1ZXJ5KG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gdXNlSW50ZXJuYWxTdGF0ZShjbGllbnQsIHF1ZXJ5KSB7XG4gICAgdmFyIHN0YXRlUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gICAgaWYgKCFzdGF0ZVJlZi5jdXJyZW50IHx8XG4gICAgICAgIGNsaWVudCAhPT0gc3RhdGVSZWYuY3VycmVudC5jbGllbnQgfHxcbiAgICAgICAgcXVlcnkgIT09IHN0YXRlUmVmLmN1cnJlbnQucXVlcnkpIHtcbiAgICAgICAgc3RhdGVSZWYuY3VycmVudCA9IG5ldyBJbnRlcm5hbFN0YXRlKGNsaWVudCwgcXVlcnksIHN0YXRlUmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgICB2YXIgc3RhdGUgPSBzdGF0ZVJlZi5jdXJyZW50O1xuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKDApOyBfYVswXTsgdmFyIHNldFRpY2sgPSBfYVsxXTtcbiAgICBzdGF0ZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0VGljayhmdW5jdGlvbiAodGljaykgeyByZXR1cm4gdGljayArIDE7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHN0YXRlO1xufVxudmFyIEludGVybmFsU3RhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEludGVybmFsU3RhdGUoY2xpZW50LCBxdWVyeSwgcHJldmlvdXMpIHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc3luY1Jlc29sdmVGbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMub3B0aW9uc1RvSWdub3JlT25jZSA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtTZXQgPyBXZWFrU2V0IDogU2V0KSgpO1xuICAgICAgICB0aGlzLnNzckRpc2FibGVkUmVzdWx0ID0gdXRpbGl0aWVzLm1heWJlRGVlcEZyZWV6ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IGNvcmUuTmV0d29ya1N0YXR1cy5sb2FkaW5nLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5za2lwU3RhbmRieVJlc3VsdCA9IHV0aWxpdGllcy5tYXliZURlZXBGcmVlemUoe1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICAgICAgbmV0d29ya1N0YXR1czogY29yZS5OZXR3b3JrU3RhdHVzLnJlYWR5LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b1F1ZXJ5UmVzdWx0Q2FjaGUgPSBuZXcgKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwID8gV2Vha01hcCA6IE1hcCkoKTtcbiAgICAgICAgcGFyc2VyLnZlcmlmeURvY3VtZW50VHlwZShxdWVyeSwgcGFyc2VyLkRvY3VtZW50VHlwZS5RdWVyeSk7XG4gICAgICAgIHZhciBwcmV2aW91c1Jlc3VsdCA9IHByZXZpb3VzICYmIHByZXZpb3VzLnJlc3VsdDtcbiAgICAgICAgdmFyIHByZXZpb3VzRGF0YSA9IHByZXZpb3VzUmVzdWx0ICYmIHByZXZpb3VzUmVzdWx0LmRhdGE7XG4gICAgICAgIGlmIChwcmV2aW91c0RhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNEYXRhID0gcHJldmlvdXNEYXRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oXCJDYWxsaW5nIGRlZmF1bHQgbm8tb3AgaW1wbGVtZW50YXRpb24gb2YgSW50ZXJuYWxTdGF0ZSNmb3JjZVVwZGF0ZVwiKTtcbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLmFzeW5jVXBkYXRlID0gZnVuY3Rpb24gKHNpZ25hbCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHdhdGNoUXVlcnlPcHRpb25zID0gX3RoaXMud2F0Y2hRdWVyeU9wdGlvbnM7XG4gICAgICAgICAgICB2YXIgaGFuZGxlQWJvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hc3luY1Jlc29sdmVGbnMuZGVsZXRlKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgIF90aGlzLm9wdGlvbnNUb0lnbm9yZU9uY2UuZGVsZXRlKHdhdGNoUXVlcnlPcHRpb25zKTtcbiAgICAgICAgICAgICAgICBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBoYW5kbGVBYm9ydGVkKTtcbiAgICAgICAgICAgICAgICByZWplY3Qoc2lnbmFsLnJlYXNvbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuYXN5bmNSZXNvbHZlRm5zLmFkZChyZXNvbHZlKTtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnNUb0lnbm9yZU9uY2UuYWRkKHdhdGNoUXVlcnlPcHRpb25zKTtcbiAgICAgICAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGhhbmRsZUFib3J0ZWQpO1xuICAgICAgICAgICAgX3RoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS51c2VRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucmVuZGVyUHJvbWlzZXMgPSBSZWFjdC51c2VDb250ZXh0KGNvbnRleHQuZ2V0QXBvbGxvQ29udGV4dCgpKS5yZW5kZXJQcm9taXNlcztcbiAgICAgICAgdGhpcy51c2VPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB2YXIgb2JzUXVlcnkgPSB0aGlzLnVzZU9ic2VydmFibGVRdWVyeSgpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdXNlU3luY0V4dGVybmFsU3RvcmUoUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnJlbmRlclByb21pc2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvbk5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gX3RoaXMucmVzdWx0O1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBvYnNRdWVyeS5nZXRDdXJyZW50UmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzUmVzdWx0ICYmXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVzdWx0LmxvYWRpbmcgPT09IHJlc3VsdC5sb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVzdWx0Lm5ldHdvcmtTdGF0dXMgPT09IHJlc3VsdC5uZXR3b3JrU3RhdHVzICYmXG4gICAgICAgICAgICAgICAgICAgIGVxdWFsaXR5LmVxdWFsKHByZXZpb3VzUmVzdWx0LmRhdGEsIHJlc3VsdC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3QgPSBvYnNRdWVyeVtcImxhc3RcIl07XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzUXVlcnkucmVzZXRMYXN0UmVzdWx0cygpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBvYnNRdWVyeS5zdWJzY3JpYmUob25OZXh0LCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic1F1ZXJ5W1wibGFzdFwiXSA9IGxhc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChlcnJvciwgJ2dyYXBoUUxFcnJvcnMnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gX3RoaXMucmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmICghcHJldmlvdXNSZXN1bHQgfHxcbiAgICAgICAgICAgICAgICAgICAgKHByZXZpb3VzUmVzdWx0ICYmIHByZXZpb3VzUmVzdWx0LmxvYWRpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbChlcnJvciwgcHJldmlvdXNSZXN1bHQuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFJlc3VsdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAocHJldmlvdXNSZXN1bHQgJiYgcHJldmlvdXNSZXN1bHQuZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IGNvcmUuTmV0d29ya1N0YXR1cy5lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBvYnNRdWVyeS5zdWJzY3JpYmUob25OZXh0LCBvbkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTsgfTtcbiAgICAgICAgfSwgW1xuICAgICAgICAgICAgb2JzUXVlcnksXG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb21pc2VzLFxuICAgICAgICAgICAgdGhpcy5jbGllbnQuZGlzYWJsZU5ldHdvcmtGZXRjaGVzLFxuICAgICAgICBdKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZ2V0Q3VycmVudFJlc3VsdCgpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5nZXRDdXJyZW50UmVzdWx0KCk7IH0pO1xuICAgICAgICB0aGlzLnVuc2FmZUhhbmRsZVBhcnRpYWxSZWZldGNoKHJlc3VsdCk7XG4gICAgICAgIHZhciBxdWVyeVJlc3VsdCA9IHRoaXMudG9RdWVyeVJlc3VsdChyZXN1bHQpO1xuICAgICAgICBpZiAoIXF1ZXJ5UmVzdWx0LmxvYWRpbmcgJiYgdGhpcy5hc3luY1Jlc29sdmVGbnMuc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5hc3luY1Jlc29sdmVGbnMuZm9yRWFjaChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gcmVzb2x2ZShxdWVyeVJlc3VsdCk7IH0pO1xuICAgICAgICAgICAgdGhpcy5hc3luY1Jlc29sdmVGbnMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnlSZXN1bHQ7XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS51c2VPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgd2F0Y2hRdWVyeU9wdGlvbnMgPSB0aGlzLmNyZWF0ZVdhdGNoUXVlcnlPcHRpb25zKHRoaXMucXVlcnlIb29rT3B0aW9ucyA9IG9wdGlvbnMpO1xuICAgICAgICB2YXIgY3VycmVudFdhdGNoUXVlcnlPcHRpb25zID0gdGhpcy53YXRjaFF1ZXJ5T3B0aW9ucztcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc1RvSWdub3JlT25jZS5oYXMoY3VycmVudFdhdGNoUXVlcnlPcHRpb25zKSB8fFxuICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKHdhdGNoUXVlcnlPcHRpb25zLCBjdXJyZW50V2F0Y2hRdWVyeU9wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoUXVlcnlPcHRpb25zID0gd2F0Y2hRdWVyeU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY3VycmVudFdhdGNoUXVlcnlPcHRpb25zICYmIHRoaXMub2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1RvSWdub3JlT25jZS5kZWxldGUoY3VycmVudFdhdGNoUXVlcnlPcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmFibGUucmVvYnNlcnZlKHRoaXMuZ2V0T2JzUXVlcnlPcHRpb25zKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNEYXRhID0gKChfYSA9IHRoaXMucmVzdWx0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGF0YSkgfHwgdGhpcy5wcmV2aW91c0RhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlZCA9IG9wdGlvbnMub25Db21wbGV0ZWQgfHwgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUub25Db21wbGV0ZWQ7XG4gICAgICAgIHRoaXMub25FcnJvciA9IG9wdGlvbnMub25FcnJvciB8fCBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS5vbkVycm9yO1xuICAgICAgICBpZiAoKHRoaXMucmVuZGVyUHJvbWlzZXMgfHwgdGhpcy5jbGllbnQuZGlzYWJsZU5ldHdvcmtGZXRjaGVzKSAmJlxuICAgICAgICAgICAgdGhpcy5xdWVyeUhvb2tPcHRpb25zLnNzciA9PT0gZmFsc2UgJiZcbiAgICAgICAgICAgICF0aGlzLnF1ZXJ5SG9va09wdGlvbnMuc2tpcCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLnNzckRpc2FibGVkUmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucXVlcnlIb29rT3B0aW9ucy5za2lwIHx8XG4gICAgICAgICAgICB0aGlzLndhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5ID09PSAnc3RhbmRieScpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5za2lwU3RhbmRieVJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnJlc3VsdCA9PT0gdGhpcy5zc3JEaXNhYmxlZFJlc3VsdCB8fFxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPT09IHRoaXMuc2tpcFN0YW5kYnlSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS5nZXRPYnNRdWVyeU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b01lcmdlID0gW107XG4gICAgICAgIHZhciBnbG9iYWxEZWZhdWx0cyA9IHRoaXMuY2xpZW50LmRlZmF1bHRPcHRpb25zLndhdGNoUXVlcnk7XG4gICAgICAgIGlmIChnbG9iYWxEZWZhdWx0cylcbiAgICAgICAgICAgIHRvTWVyZ2UucHVzaChnbG9iYWxEZWZhdWx0cyk7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5SG9va09wdGlvbnMuZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRvTWVyZ2UucHVzaCh0aGlzLnF1ZXJ5SG9va09wdGlvbnMuZGVmYXVsdE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRvTWVyZ2UucHVzaCh1dGlsaXRpZXMuY29tcGFjdCh0aGlzLm9ic2VydmFibGUgJiYgdGhpcy5vYnNlcnZhYmxlLm9wdGlvbnMsIHRoaXMud2F0Y2hRdWVyeU9wdGlvbnMpKTtcbiAgICAgICAgcmV0dXJuIHRvTWVyZ2UucmVkdWNlKGNvcmUubWVyZ2VPcHRpb25zKTtcbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLmNyZWF0ZVdhdGNoUXVlcnlPcHRpb25zID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfYjtcbiAgICAgICAgaWYgKF9hID09PSB2b2lkIDApIHsgX2EgPSB7fTsgfVxuICAgICAgICB2YXIgc2tpcCA9IF9hLnNraXA7IF9hLnNzcjsgX2Eub25Db21wbGV0ZWQ7IF9hLm9uRXJyb3I7IF9hLmRlZmF1bHRPcHRpb25zOyB2YXIgb3RoZXJPcHRpb25zID0gdHNsaWIuX19yZXN0KF9hLCBbXCJza2lwXCIsIFwic3NyXCIsIFwib25Db21wbGV0ZWRcIiwgXCJvbkVycm9yXCIsIFwiZGVmYXVsdE9wdGlvbnNcIl0pO1xuICAgICAgICB2YXIgd2F0Y2hRdWVyeU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG90aGVyT3B0aW9ucywgeyBxdWVyeTogdGhpcy5xdWVyeSB9KTtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyUHJvbWlzZXMgJiZcbiAgICAgICAgICAgICh3YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScgfHxcbiAgICAgICAgICAgICAgICB3YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ2NhY2hlLWFuZC1uZXR3b3JrJykpIHtcbiAgICAgICAgICAgIHdhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5ID0gJ2NhY2hlLWZpcnN0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdhdGNoUXVlcnlPcHRpb25zLnZhcmlhYmxlcykge1xuICAgICAgICAgICAgd2F0Y2hRdWVyeU9wdGlvbnMudmFyaWFibGVzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNraXApIHtcbiAgICAgICAgICAgIHZhciBfYyA9IHdhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5LCBmZXRjaFBvbGljeSA9IF9jID09PSB2b2lkIDAgPyB0aGlzLmdldERlZmF1bHRGZXRjaFBvbGljeSgpIDogX2MsIF9kID0gd2F0Y2hRdWVyeU9wdGlvbnMuaW5pdGlhbEZldGNoUG9saWN5LCBpbml0aWFsRmV0Y2hQb2xpY3kgPSBfZCA9PT0gdm9pZCAwID8gZmV0Y2hQb2xpY3kgOiBfZDtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24od2F0Y2hRdWVyeU9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsRmV0Y2hQb2xpY3k6IGluaXRpYWxGZXRjaFBvbGljeSxcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ3N0YW5kYnknLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXdhdGNoUXVlcnlPcHRpb25zLmZldGNoUG9saWN5KSB7XG4gICAgICAgICAgICB3YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSA9XG4gICAgICAgICAgICAgICAgKChfYiA9IHRoaXMub2JzZXJ2YWJsZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm9wdGlvbnMuaW5pdGlhbEZldGNoUG9saWN5KSB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERlZmF1bHRGZXRjaFBvbGljeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3YXRjaFF1ZXJ5T3B0aW9ucztcbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLmdldERlZmF1bHRGZXRjaFBvbGljeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuICgoKF9hID0gdGhpcy5xdWVyeUhvb2tPcHRpb25zLmRlZmF1bHRPcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZmV0Y2hQb2xpY3kpIHx8XG4gICAgICAgICAgICAoKF9iID0gdGhpcy5jbGllbnQuZGVmYXVsdE9wdGlvbnMud2F0Y2hRdWVyeSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZldGNoUG9saWN5KSB8fFxuICAgICAgICAgICAgXCJjYWNoZS1maXJzdFwiKTtcbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLm9uQ29tcGxldGVkID0gZnVuY3Rpb24gKGRhdGEpIHsgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7IH07XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUudXNlT2JzZXJ2YWJsZVF1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzUXVlcnkgPSB0aGlzLm9ic2VydmFibGUgPVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9taXNlc1xuICAgICAgICAgICAgICAgICYmIHRoaXMucmVuZGVyUHJvbWlzZXMuZ2V0U1NST2JzZXJ2YWJsZSh0aGlzLndhdGNoUXVlcnlPcHRpb25zKVxuICAgICAgICAgICAgICAgIHx8IHRoaXMub2JzZXJ2YWJsZVxuICAgICAgICAgICAgICAgIHx8IHRoaXMuY2xpZW50LndhdGNoUXVlcnkodGhpcy5nZXRPYnNRdWVyeU9wdGlvbnMoKSk7XG4gICAgICAgIHRoaXMub2JzUXVlcnlGaWVsZHMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICByZWZldGNoOiBvYnNRdWVyeS5yZWZldGNoLmJpbmQob2JzUXVlcnkpLFxuICAgICAgICAgICAgcmVvYnNlcnZlOiBvYnNRdWVyeS5yZW9ic2VydmUuYmluZChvYnNRdWVyeSksXG4gICAgICAgICAgICBmZXRjaE1vcmU6IG9ic1F1ZXJ5LmZldGNoTW9yZS5iaW5kKG9ic1F1ZXJ5KSxcbiAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5OiBvYnNRdWVyeS51cGRhdGVRdWVyeS5iaW5kKG9ic1F1ZXJ5KSxcbiAgICAgICAgICAgIHN0YXJ0UG9sbGluZzogb2JzUXVlcnkuc3RhcnRQb2xsaW5nLmJpbmQob2JzUXVlcnkpLFxuICAgICAgICAgICAgc3RvcFBvbGxpbmc6IG9ic1F1ZXJ5LnN0b3BQb2xsaW5nLmJpbmQob2JzUXVlcnkpLFxuICAgICAgICAgICAgc3Vic2NyaWJlVG9Nb3JlOiBvYnNRdWVyeS5zdWJzY3JpYmVUb01vcmUuYmluZChvYnNRdWVyeSksXG4gICAgICAgIH0pOyB9LCBbb2JzUXVlcnldKTtcbiAgICAgICAgdmFyIHNzckFsbG93ZWQgPSAhKHRoaXMucXVlcnlIb29rT3B0aW9ucy5zc3IgPT09IGZhbHNlIHx8XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5SG9va09wdGlvbnMuc2tpcCk7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlclByb21pc2VzICYmIHNzckFsbG93ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvbWlzZXMucmVnaXN0ZXJTU1JPYnNlcnZhYmxlKG9ic1F1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChvYnNRdWVyeS5nZXRDdXJyZW50UmVzdWx0KCkubG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvbWlzZXMuYWRkT2JzZXJ2YWJsZVF1ZXJ5UHJvbWlzZShvYnNRdWVyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ic1F1ZXJ5O1xuICAgIH07XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUuc2V0UmVzdWx0ID0gZnVuY3Rpb24gKG5leHRSZXN1bHQpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIGlmIChwcmV2aW91c1Jlc3VsdCAmJiBwcmV2aW91c1Jlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzRGF0YSA9IHByZXZpb3VzUmVzdWx0LmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSBuZXh0UmVzdWx0O1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JPckNvbXBsZXRlZChuZXh0UmVzdWx0KTtcbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLmhhbmRsZUVycm9yT3JDb21wbGV0ZWQgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghcmVzdWx0LmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHZhciBlcnJvcl8xID0gdGhpcy50b0Fwb2xsb0Vycm9yKHJlc3VsdCk7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JfMSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkVycm9yKGVycm9yXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkNvbXBsZXRlZChyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS50b0Fwb2xsb0Vycm9yID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShyZXN1bHQuZXJyb3JzKVxuICAgICAgICAgICAgPyBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHsgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyB9KVxuICAgICAgICAgICAgOiByZXN1bHQuZXJyb3I7XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS5nZXRDdXJyZW50UmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yT3JDb21wbGV0ZWQodGhpcy5yZXN1bHQgPSB0aGlzLm9ic2VydmFibGUuZ2V0Q3VycmVudFJlc3VsdCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS50b1F1ZXJ5UmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICB2YXIgcXVlcnlSZXN1bHQgPSB0aGlzLnRvUXVlcnlSZXN1bHRDYWNoZS5nZXQocmVzdWx0KTtcbiAgICAgICAgaWYgKHF1ZXJ5UmVzdWx0KVxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5UmVzdWx0O1xuICAgICAgICB2YXIgZGF0YSA9IHJlc3VsdC5kYXRhOyByZXN1bHQucGFydGlhbDsgdmFyIHJlc3VsdFdpdGhvdXRQYXJ0aWFsID0gdHNsaWIuX19yZXN0KHJlc3VsdCwgW1wiZGF0YVwiLCBcInBhcnRpYWxcIl0pO1xuICAgICAgICB0aGlzLnRvUXVlcnlSZXN1bHRDYWNoZS5zZXQocmVzdWx0LCBxdWVyeVJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHsgZGF0YTogZGF0YSB9LCByZXN1bHRXaXRob3V0UGFydGlhbCksIHRoaXMub2JzUXVlcnlGaWVsZHMpLCB7IGNsaWVudDogdGhpcy5jbGllbnQsIG9ic2VydmFibGU6IHRoaXMub2JzZXJ2YWJsZSwgdmFyaWFibGVzOiB0aGlzLm9ic2VydmFibGUudmFyaWFibGVzLCBjYWxsZWQ6ICF0aGlzLnF1ZXJ5SG9va09wdGlvbnMuc2tpcCwgcHJldmlvdXNEYXRhOiB0aGlzLnByZXZpb3VzRGF0YSB9KSk7XG4gICAgICAgIGlmICghcXVlcnlSZXN1bHQuZXJyb3IgJiYgdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShyZXN1bHQuZXJyb3JzKSkge1xuICAgICAgICAgICAgcXVlcnlSZXN1bHQuZXJyb3IgPSBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHsgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnlSZXN1bHQ7XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS51bnNhZmVIYW5kbGVQYXJ0aWFsUmVmZXRjaCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5wYXJ0aWFsICYmXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5SG9va09wdGlvbnMucGFydGlhbFJlZmV0Y2ggJiZcbiAgICAgICAgICAgICFyZXN1bHQubG9hZGluZyAmJlxuICAgICAgICAgICAgKCFyZXN1bHQuZGF0YSB8fCBPYmplY3Qua2V5cyhyZXN1bHQuZGF0YSkubGVuZ3RoID09PSAwKSAmJlxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlLm9wdGlvbnMuZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1vbmx5Jykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IGNvcmUuTmV0d29ya1N0YXR1cy5yZWZldGNoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGUucmVmZXRjaCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSW50ZXJuYWxTdGF0ZTtcbn0oKSk7XG5cbnZhciBFQUdFUl9NRVRIT0RTID0gW1xuICAgICdyZWZldGNoJyxcbiAgICAncmVvYnNlcnZlJyxcbiAgICAnZmV0Y2hNb3JlJyxcbiAgICAndXBkYXRlUXVlcnknLFxuICAgICdzdGFydFBvbGxpbmcnLFxuICAgICdzdWJzY3JpYmVUb01vcmUnLFxuXTtcbmZ1bmN0aW9uIHVzZUxhenlRdWVyeShxdWVyeSwgb3B0aW9ucykge1xuICAgIHZhciBfYTtcbiAgICB2YXIgYWJvcnRDb250cm9sbGVyc1JlZiA9IFJlYWN0LnVzZVJlZihuZXcgU2V0KCkpO1xuICAgIHZhciBleGVjT3B0aW9uc1JlZiA9IFJlYWN0LnVzZVJlZigpO1xuICAgIHZhciBtZXJnZWQgPSBleGVjT3B0aW9uc1JlZi5jdXJyZW50ID8gdXRpbGl0aWVzLm1lcmdlT3B0aW9ucyhvcHRpb25zLCBleGVjT3B0aW9uc1JlZi5jdXJyZW50KSA6IG9wdGlvbnM7XG4gICAgdmFyIGludGVybmFsU3RhdGUgPSB1c2VJbnRlcm5hbFN0YXRlKHVzZUFwb2xsb0NsaWVudChvcHRpb25zICYmIG9wdGlvbnMuY2xpZW50KSwgKF9hID0gbWVyZ2VkID09PSBudWxsIHx8IG1lcmdlZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVyZ2VkLnF1ZXJ5KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBxdWVyeSk7XG4gICAgdmFyIHVzZVF1ZXJ5UmVzdWx0ID0gaW50ZXJuYWxTdGF0ZS51c2VRdWVyeSh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbWVyZ2VkKSwgeyBza2lwOiAhZXhlY09wdGlvbnNSZWYuY3VycmVudCB9KSk7XG4gICAgdmFyIGluaXRpYWxGZXRjaFBvbGljeSA9IHVzZVF1ZXJ5UmVzdWx0Lm9ic2VydmFibGUub3B0aW9ucy5pbml0aWFsRmV0Y2hQb2xpY3kgfHxcbiAgICAgICAgaW50ZXJuYWxTdGF0ZS5nZXREZWZhdWx0RmV0Y2hQb2xpY3koKTtcbiAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih1c2VRdWVyeVJlc3VsdCwge1xuICAgICAgICBjYWxsZWQ6ICEhZXhlY09wdGlvbnNSZWYuY3VycmVudCxcbiAgICB9KTtcbiAgICB2YXIgZWFnZXJNZXRob2RzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlYWdlck1ldGhvZHMgPSB7fTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gcmVzdWx0W2tleV07XG4gICAgICAgICAgICBlYWdlck1ldGhvZHNba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWV4ZWNPcHRpb25zUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhlY09wdGlvbnNSZWYuY3VycmVudCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIGludGVybmFsU3RhdGUuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBFQUdFUl9NRVRIT0RTXzEgPSBFQUdFUl9NRVRIT0RTOyBfaSA8IEVBR0VSX01FVEhPRFNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBFQUdFUl9NRVRIT0RTXzFbX2ldO1xuICAgICAgICAgICAgX2xvb3BfMShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYWdlck1ldGhvZHM7XG4gICAgfSwgW10pO1xuICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCBlYWdlck1ldGhvZHMpO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhYm9ydENvbnRyb2xsZXJzUmVmLmN1cnJlbnQuZm9yRWFjaChmdW5jdGlvbiAoY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICB2YXIgZXhlY3V0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChleGVjdXRlT3B0aW9ucykge1xuICAgICAgICB2YXIgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgYWJvcnRDb250cm9sbGVyc1JlZi5jdXJyZW50LmFkZChjb250cm9sbGVyKTtcbiAgICAgICAgZXhlY09wdGlvbnNSZWYuY3VycmVudCA9IGV4ZWN1dGVPcHRpb25zID8gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGV4ZWN1dGVPcHRpb25zKSwgeyBmZXRjaFBvbGljeTogZXhlY3V0ZU9wdGlvbnMuZmV0Y2hQb2xpY3kgfHwgaW5pdGlhbEZldGNoUG9saWN5IH0pIDoge1xuICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IGluaXRpYWxGZXRjaFBvbGljeSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHByb21pc2UgPSBpbnRlcm5hbFN0YXRlXG4gICAgICAgICAgICAuYXN5bmNVcGRhdGUoY29udHJvbGxlci5zaWduYWwpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocXVlcnlSZXN1bHQpIHtcbiAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcnNSZWYuY3VycmVudC5kZWxldGUoY29udHJvbGxlcik7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihxdWVyeVJlc3VsdCwgZWFnZXJNZXRob2RzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb21pc2UuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyc1JlZi5jdXJyZW50LmRlbGV0ZShjb250cm9sbGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW2V4ZWN1dGUsIHJlc3VsdF07XG59XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uKG11dGF0aW9uLCBvcHRpb25zKSB7XG4gICAgdmFyIGNsaWVudCA9IHVzZUFwb2xsb0NsaWVudChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY2xpZW50KTtcbiAgICBwYXJzZXIudmVyaWZ5RG9jdW1lbnRUeXBlKG11dGF0aW9uLCBwYXJzZXIuRG9jdW1lbnRUeXBlLk11dGF0aW9uKTtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGNhbGxlZDogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICB9KSwgcmVzdWx0ID0gX2FbMF0sIHNldFJlc3VsdCA9IF9hWzFdO1xuICAgIHZhciByZWYgPSBSZWFjdC51c2VSZWYoe1xuICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgbXV0YXRpb25JZDogMCxcbiAgICAgICAgaXNNb3VudGVkOiB0cnVlLFxuICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgbXV0YXRpb246IG11dGF0aW9uLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIH0pO1xuICAgIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihyZWYuY3VycmVudCwgeyBjbGllbnQ6IGNsaWVudCwgb3B0aW9uczogb3B0aW9ucywgbXV0YXRpb246IG11dGF0aW9uIH0pO1xuICAgIH1cbiAgICB2YXIgZXhlY3V0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChleGVjdXRlT3B0aW9ucykge1xuICAgICAgICBpZiAoZXhlY3V0ZU9wdGlvbnMgPT09IHZvaWQgMCkgeyBleGVjdXRlT3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBfYSA9IHJlZi5jdXJyZW50LCBjbGllbnQgPSBfYS5jbGllbnQsIG9wdGlvbnMgPSBfYS5vcHRpb25zLCBtdXRhdGlvbiA9IF9hLm11dGF0aW9uO1xuICAgICAgICB2YXIgYmFzZU9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgbXV0YXRpb246IG11dGF0aW9uIH0pO1xuICAgICAgICBpZiAoIXJlZi5jdXJyZW50LnJlc3VsdC5sb2FkaW5nICYmICFiYXNlT3B0aW9ucy5pZ25vcmVSZXN1bHRzICYmIHJlZi5jdXJyZW50LmlzTW91bnRlZCkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHJlZi5jdXJyZW50LnJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtdXRhdGlvbklkID0gKytyZWYuY3VycmVudC5tdXRhdGlvbklkO1xuICAgICAgICB2YXIgY2xpZW50T3B0aW9ucyA9IGNvcmUubWVyZ2VPcHRpb25zKGJhc2VPcHRpb25zLCBleGVjdXRlT3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBjbGllbnQubXV0YXRlKGNsaWVudE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGEsIGVycm9ycyQxID0gcmVzcG9uc2UuZXJyb3JzO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gZXJyb3JzJDEgJiYgZXJyb3JzJDEubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gbmV3IGVycm9ycy5BcG9sbG9FcnJvcih7IGdyYXBoUUxFcnJvcnM6IGVycm9ycyQxIH0pXG4gICAgICAgICAgICAgICAgOiB2b2lkIDA7XG4gICAgICAgICAgICBpZiAobXV0YXRpb25JZCA9PT0gcmVmLmN1cnJlbnQubXV0YXRpb25JZCAmJlxuICAgICAgICAgICAgICAgICFjbGllbnRPcHRpb25zLmlnbm9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0XzEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQuaXNNb3VudGVkICYmICFlcXVhbGl0eS5lcXVhbChyZWYuY3VycmVudC5yZXN1bHQsIHJlc3VsdF8xKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVmLmN1cnJlbnQucmVzdWx0ID0gcmVzdWx0XzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvbkNvbXBsZXRlZCA9IGV4ZWN1dGVPcHRpb25zLm9uQ29tcGxldGVkIHx8ICgoX2EgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub25Db21wbGV0ZWQpO1xuICAgICAgICAgICAgb25Db21wbGV0ZWQgPT09IG51bGwgfHwgb25Db21wbGV0ZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ29tcGxldGVkKHJlc3BvbnNlLmRhdGEsIGNsaWVudE9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbklkID09PSByZWYuY3VycmVudC5tdXRhdGlvbklkICYmXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdF8yID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoIWVxdWFsaXR5LmVxdWFsKHJlZi5jdXJyZW50LnJlc3VsdCwgcmVzdWx0XzIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZWYuY3VycmVudC5yZXN1bHQgPSByZXN1bHRfMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9uRXJyb3IgPSBleGVjdXRlT3B0aW9ucy5vbkVycm9yIHx8ICgoX2EgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub25FcnJvcik7XG4gICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IsIGNsaWVudE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IHZvaWQgMCwgZXJyb3JzOiBlcnJvciB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgcmVzZXQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudC5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHNldFJlc3VsdCh7IGNhbGxlZDogZmFsc2UsIGxvYWRpbmc6IGZhbHNlLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZWYuY3VycmVudC5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBbZXhlY3V0ZSwgdHNsaWIuX19hc3NpZ24oeyByZXNldDogcmVzZXQgfSwgcmVzdWx0KV07XG59XG5cbmZ1bmN0aW9uIHVzZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24sIG9wdGlvbnMpIHtcbiAgICB2YXIgaGFzSXNzdWVkRGVwcmVjYXRpb25XYXJuaW5nUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICB2YXIgY2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50KG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jbGllbnQpO1xuICAgIHBhcnNlci52ZXJpZnlEb2N1bWVudFR5cGUoc3Vic2NyaXB0aW9uLCBwYXJzZXIuRG9jdW1lbnRUeXBlLlN1YnNjcmlwdGlvbik7XG4gICAgdmFyIF9hID0gUmVhY3QudXNlU3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiAhKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5za2lwKSxcbiAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgfSksIHJlc3VsdCA9IF9hWzBdLCBzZXRSZXN1bHQgPSBfYVsxXTtcbiAgICBpZiAoIWhhc0lzc3VlZERlcHJlY2F0aW9uV2FybmluZ1JlZi5jdXJyZW50KSB7XG4gICAgICAgIGhhc0lzc3VlZERlcHJlY2F0aW9uV2FybmluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5vblN1YnNjcmlwdGlvbkRhdGEpIHtcbiAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihvcHRpb25zLm9uRGF0YVxuICAgICAgICAgICAgICAgID8gXCIndXNlU3Vic2NyaXB0aW9uJyBzdXBwb3J0cyBvbmx5IHRoZSAnb25TdWJzY3JpcHRpb25EYXRhJyBvciAnb25EYXRhJyBvcHRpb24sIGJ1dCBub3QgYm90aC4gT25seSB0aGUgJ29uRGF0YScgb3B0aW9uIHdpbGwgYmUgdXNlZC5cIlxuICAgICAgICAgICAgICAgIDogXCInb25TdWJzY3JpcHRpb25EYXRhJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgdmVyc2lvbi4gUGxlYXNlIHVzZSB0aGUgJ29uRGF0YScgb3B0aW9uIGluc3RlYWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub25TdWJzY3JpcHRpb25Db21wbGV0ZSkge1xuICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKG9wdGlvbnMub25Db21wbGV0ZVxuICAgICAgICAgICAgICAgID8gXCIndXNlU3Vic2NyaXB0aW9uJyBzdXBwb3J0cyBvbmx5IHRoZSAnb25TdWJzY3JpcHRpb25Db21wbGV0ZScgb3IgJ29uQ29tcGxldGUnIG9wdGlvbiwgYnV0IG5vdCBib3RoLiBPbmx5IHRoZSAnb25Db21wbGV0ZScgb3B0aW9uIHdpbGwgYmUgdXNlZC5cIlxuICAgICAgICAgICAgICAgIDogXCInb25TdWJzY3JpcHRpb25Db21wbGV0ZScgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHZlcnNpb24uIFBsZWFzZSB1c2UgdGhlICdvbkNvbXBsZXRlJyBvcHRpb24gaW5zdGVhZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIF9iID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBzdWJzY3JpcHRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICBmZXRjaFBvbGljeTogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZldGNoUG9saWN5LFxuICAgICAgICAgICAgY29udGV4dDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgIH0pO1xuICAgIH0pLCBvYnNlcnZhYmxlID0gX2JbMF0sIHNldE9ic2VydmFibGUgPSBfYlsxXTtcbiAgICB2YXIgY2FuUmVzZXRPYnNlcnZhYmxlUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FuUmVzZXRPYnNlcnZhYmxlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICB2YXIgcmVmID0gUmVhY3QudXNlUmVmKHsgY2xpZW50OiBjbGllbnQsIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLCBvcHRpb25zOiBvcHRpb25zIH0pO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgdmFyIHNob3VsZFJlc3Vic2NyaWJlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNob3VsZFJlc3Vic2NyaWJlO1xuICAgICAgICBpZiAodHlwZW9mIHNob3VsZFJlc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzaG91bGRSZXN1YnNjcmliZSA9ICEhc2hvdWxkUmVzdWJzY3JpYmUob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5za2lwKSB7XG4gICAgICAgICAgICBpZiAoIShvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCkgIT09ICEoKF9hID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNraXApIHx8IGNhblJlc2V0T2JzZXJ2YWJsZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldE9ic2VydmFibGUobnVsbCk7XG4gICAgICAgICAgICAgICAgY2FuUmVzZXRPYnNlcnZhYmxlUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoc2hvdWxkUmVzdWJzY3JpYmUgIT09IGZhbHNlICYmXG4gICAgICAgICAgICAoY2xpZW50ICE9PSByZWYuY3VycmVudC5jbGllbnQgfHxcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gIT09IHJlZi5jdXJyZW50LnN1YnNjcmlwdGlvbiB8fFxuICAgICAgICAgICAgICAgIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmV0Y2hQb2xpY3kpICE9PSAoKF9iID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZldGNoUG9saWN5KSB8fFxuICAgICAgICAgICAgICAgICEob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApICE9PSAhKChfYyA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5za2lwKSB8fFxuICAgICAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLCAoX2QgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudmFyaWFibGVzKSkpIHx8XG4gICAgICAgICAgICBjYW5SZXNldE9ic2VydmFibGVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0T2JzZXJ2YWJsZShjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICBxdWVyeTogc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZldGNoUG9saWN5LFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jb250ZXh0LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgY2FuUmVzZXRPYnNlcnZhYmxlUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHJlZi5jdXJyZW50LCB7IGNsaWVudDogY2xpZW50LCBzdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvbiwgb3B0aW9uczogb3B0aW9ucyB9KTtcbiAgICB9LCBbY2xpZW50LCBzdWJzY3JpcHRpb24sIG9wdGlvbnMsIGNhblJlc2V0T2JzZXJ2YWJsZVJlZi5jdXJyZW50XSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFvYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChmZXRjaFJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZldGNoUmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmICgoX2EgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub25EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50Lm9wdGlvbnMub25EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoX2IgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iub25TdWJzY3JpcHRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50Lm9wdGlvbnMub25TdWJzY3JpcHRpb25EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uRGF0YTogcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub25FcnJvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGVycm9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgaWYgKChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50Lm9wdGlvbnMub25Db21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoX2IgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iub25TdWJzY3JpcHRpb25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudC5vcHRpb25zLm9uU3Vic2NyaXB0aW9uQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtvYnNlcnZhYmxlXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdXNlUmVhY3RpdmVWYXIocnYpIHtcbiAgICB2YXIgdmFsdWUgPSBydigpO1xuICAgIHZhciBzZXRWYWx1ZSA9IFJlYWN0LnVzZVN0YXRlKHZhbHVlKVsxXTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJvYmFibHlTYW1lVmFsdWUgPSBydigpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHByb2JhYmx5U2FtZVZhbHVlKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZShwcm9iYWJseVNhbWVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcnYub25OZXh0Q2hhbmdlKHNldFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFt2YWx1ZV0pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdXNlRnJhZ21lbnRfZXhwZXJpbWVudGFsKG9wdGlvbnMpIHtcbiAgICB2YXIgY2FjaGUgPSB1c2VBcG9sbG9DbGllbnQoKS5jYWNoZTtcbiAgICB2YXIgZnJhZ21lbnQgPSBvcHRpb25zLmZyYWdtZW50LCBmcmFnbWVudE5hbWUgPSBvcHRpb25zLmZyYWdtZW50TmFtZSwgZnJvbSA9IG9wdGlvbnMuZnJvbSwgX2EgPSBvcHRpb25zLm9wdGltaXN0aWMsIG9wdGltaXN0aWMgPSBfYSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hLCByZXN0ID0gdHNsaWIuX19yZXN0KG9wdGlvbnMsIFtcImZyYWdtZW50XCIsIFwiZnJhZ21lbnROYW1lXCIsIFwiZnJvbVwiLCBcIm9wdGltaXN0aWNcIl0pO1xuICAgIHZhciBkaWZmT3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCByZXN0KSwgeyBpZDogdHlwZW9mIGZyb20gPT09IFwic3RyaW5nXCIgPyBmcm9tIDogY2FjaGUuaWRlbnRpZnkoZnJvbSksIHF1ZXJ5OiBjYWNoZVtcImdldEZyYWdtZW50RG9jXCJdKGZyYWdtZW50LCBmcmFnbWVudE5hbWUpLCBvcHRpbWlzdGljOiBvcHRpbWlzdGljIH0pO1xuICAgIHZhciByZXN1bHRSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgICB2YXIgbGF0ZXN0RGlmZiA9IGNhY2hlLmRpZmYoZGlmZk9wdGlvbnMpO1xuICAgIHZhciBnZXRTbmFwc2hvdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxhdGVzdERpZmZUb1Jlc3VsdCA9IGRpZmZUb1Jlc3VsdChsYXRlc3REaWZmKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFJlZi5jdXJyZW50ICYmXG4gICAgICAgICAgICBlcXVhbGl0eS5lcXVhbChyZXN1bHRSZWYuY3VycmVudC5kYXRhLCBsYXRlc3REaWZmVG9SZXN1bHQuZGF0YSlcbiAgICAgICAgICAgID8gcmVzdWx0UmVmLmN1cnJlbnRcbiAgICAgICAgICAgIDogKHJlc3VsdFJlZi5jdXJyZW50ID0gbGF0ZXN0RGlmZlRvUmVzdWx0KTtcbiAgICB9O1xuICAgIHJldHVybiB1c2VTeW5jRXh0ZXJuYWxTdG9yZShmdW5jdGlvbiAoZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLndhdGNoKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBkaWZmT3B0aW9ucyksIHsgaW1tZWRpYXRlOiB0cnVlLCBjYWxsYmFjazogZnVuY3Rpb24gKGRpZmYpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVxdWFsaXR5LmVxdWFsKGRpZmYsIGxhdGVzdERpZmYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFJlZi5jdXJyZW50ID0gZGlmZlRvUmVzdWx0KChsYXRlc3REaWZmID0gZGlmZikpO1xuICAgICAgICAgICAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gfSkpO1xuICAgIH0sIGdldFNuYXBzaG90LCBnZXRTbmFwc2hvdCk7XG59XG5mdW5jdGlvbiBkaWZmVG9SZXN1bHQoZGlmZikge1xuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIGRhdGE6IGRpZmYucmVzdWx0LFxuICAgICAgICBjb21wbGV0ZTogISFkaWZmLmNvbXBsZXRlLFxuICAgIH07XG4gICAgaWYgKGRpZmYubWlzc2luZykge1xuICAgICAgICByZXN1bHQubWlzc2luZyA9IHV0aWxpdGllcy5tZXJnZURlZXBBcnJheShkaWZmLm1pc3NpbmcubWFwKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gZXJyb3IubWlzc2luZzsgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnRzLnVzZUFwb2xsb0NsaWVudCA9IHVzZUFwb2xsb0NsaWVudDtcbmV4cG9ydHMudXNlRnJhZ21lbnRfZXhwZXJpbWVudGFsID0gdXNlRnJhZ21lbnRfZXhwZXJpbWVudGFsO1xuZXhwb3J0cy51c2VMYXp5UXVlcnkgPSB1c2VMYXp5UXVlcnk7XG5leHBvcnRzLnVzZU11dGF0aW9uID0gdXNlTXV0YXRpb247XG5leHBvcnRzLnVzZVF1ZXJ5ID0gdXNlUXVlcnk7XG5leHBvcnRzLnVzZVJlYWN0aXZlVmFyID0gdXNlUmVhY3RpdmVWYXI7XG5leHBvcnRzLnVzZVN1YnNjcmlwdGlvbiA9IHVzZVN1YnNjcmlwdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZ2xvYmFscycpO1xuXG5leHBvcnRzLkRvY3VtZW50VHlwZSA9IHZvaWQgMDtcbihmdW5jdGlvbiAoRG9jdW1lbnRUeXBlKSB7XG4gICAgRG9jdW1lbnRUeXBlW0RvY3VtZW50VHlwZVtcIlF1ZXJ5XCJdID0gMF0gPSBcIlF1ZXJ5XCI7XG4gICAgRG9jdW1lbnRUeXBlW0RvY3VtZW50VHlwZVtcIk11dGF0aW9uXCJdID0gMV0gPSBcIk11dGF0aW9uXCI7XG4gICAgRG9jdW1lbnRUeXBlW0RvY3VtZW50VHlwZVtcIlN1YnNjcmlwdGlvblwiXSA9IDJdID0gXCJTdWJzY3JpcHRpb25cIjtcbn0pKGV4cG9ydHMuRG9jdW1lbnRUeXBlIHx8IChleHBvcnRzLkRvY3VtZW50VHlwZSA9IHt9KSk7XG52YXIgY2FjaGUgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBvcGVyYXRpb25OYW1lKHR5cGUpIHtcbiAgICB2YXIgbmFtZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBleHBvcnRzLkRvY3VtZW50VHlwZS5RdWVyeTpcbiAgICAgICAgICAgIG5hbWUgPSAnUXVlcnknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZXhwb3J0cy5Eb2N1bWVudFR5cGUuTXV0YXRpb246XG4gICAgICAgICAgICBuYW1lID0gJ011dGF0aW9uJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGV4cG9ydHMuRG9jdW1lbnRUeXBlLlN1YnNjcmlwdGlvbjpcbiAgICAgICAgICAgIG5hbWUgPSAnU3Vic2NyaXB0aW9uJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIHBhcnNlcihkb2N1bWVudCkge1xuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5nZXQoZG9jdW1lbnQpO1xuICAgIGlmIChjYWNoZWQpXG4gICAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgdmFyIHZhcmlhYmxlcywgdHlwZSwgbmFtZTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoISFkb2N1bWVudCAmJiAhIWRvY3VtZW50LmtpbmQsIFwiQXJndW1lbnQgb2YgXCIuY29uY2F0KGRvY3VtZW50LCBcIiBwYXNzZWQgdG8gcGFyc2VyIHdhcyBub3QgYSB2YWxpZCBHcmFwaFFMIFwiKSArXG4gICAgICAgIFwiRG9jdW1lbnROb2RlLiBZb3UgbWF5IG5lZWQgdG8gdXNlICdncmFwaHFsLXRhZycgb3IgYW5vdGhlciBtZXRob2QgXCIgK1xuICAgICAgICBcInRvIGNvbnZlcnQgeW91ciBvcGVyYXRpb24gaW50byBhIGRvY3VtZW50XCIpIDogZ2xvYmFscy5pbnZhcmlhbnQoISFkb2N1bWVudCAmJiAhIWRvY3VtZW50LmtpbmQsIDMzKTtcbiAgICB2YXIgZnJhZ21lbnRzID0gW107XG4gICAgdmFyIHF1ZXJpZXMgPSBbXTtcbiAgICB2YXIgbXV0YXRpb25zID0gW107XG4gICAgdmFyIHN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gZG9jdW1lbnQuZGVmaW5pdGlvbnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB4ID0gX2FbX2ldO1xuICAgICAgICBpZiAoeC5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJykge1xuICAgICAgICAgICAgZnJhZ21lbnRzLnB1c2goeCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoeC5vcGVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdxdWVyeSc6XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJpZXMucHVzaCh4KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbXV0YXRpb24nOlxuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnMucHVzaCh4KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3Vic2NyaXB0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5wdXNoKHgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoIWZyYWdtZW50cy5sZW5ndGggfHxcbiAgICAgICAgKHF1ZXJpZXMubGVuZ3RoIHx8IG11dGF0aW9ucy5sZW5ndGggfHwgc3Vic2NyaXB0aW9ucy5sZW5ndGgpLCBcIlBhc3Npbmcgb25seSBhIGZyYWdtZW50IHRvICdncmFwaHFsJyBpcyBub3QgeWV0IHN1cHBvcnRlZC4gXCIgK1xuICAgICAgICBcIllvdSBtdXN0IGluY2x1ZGUgYSBxdWVyeSwgc3Vic2NyaXB0aW9uIG9yIG11dGF0aW9uIGFzIHdlbGxcIikgOiBnbG9iYWxzLmludmFyaWFudCghZnJhZ21lbnRzLmxlbmd0aCB8fFxuICAgICAgICAocXVlcmllcy5sZW5ndGggfHwgbXV0YXRpb25zLmxlbmd0aCB8fCBzdWJzY3JpcHRpb25zLmxlbmd0aCksIDM0KTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQocXVlcmllcy5sZW5ndGggKyBtdXRhdGlvbnMubGVuZ3RoICsgc3Vic2NyaXB0aW9ucy5sZW5ndGggPD0gMSwgXCJyZWFjdC1hcG9sbG8gb25seSBzdXBwb3J0cyBhIHF1ZXJ5LCBzdWJzY3JpcHRpb24sIG9yIGEgbXV0YXRpb24gcGVyIEhPQy4gXCIgK1xuICAgICAgICBcIlwiLmNvbmNhdChkb2N1bWVudCwgXCIgaGFkIFwiKS5jb25jYXQocXVlcmllcy5sZW5ndGgsIFwiIHF1ZXJpZXMsIFwiKS5jb25jYXQoc3Vic2NyaXB0aW9ucy5sZW5ndGgsIFwiIFwiKSArXG4gICAgICAgIFwic3Vic2NyaXB0aW9ucyBhbmQgXCIuY29uY2F0KG11dGF0aW9ucy5sZW5ndGgsIFwiIG11dGF0aW9ucy4gXCIpICtcbiAgICAgICAgXCJZb3UgY2FuIHVzZSAnY29tcG9zZScgdG8gam9pbiBtdWx0aXBsZSBvcGVyYXRpb24gdHlwZXMgdG8gYSBjb21wb25lbnRcIikgOiBnbG9iYWxzLmludmFyaWFudChxdWVyaWVzLmxlbmd0aCArIG11dGF0aW9ucy5sZW5ndGggKyBzdWJzY3JpcHRpb25zLmxlbmd0aCA8PSAxLCAzNSk7XG4gICAgdHlwZSA9IHF1ZXJpZXMubGVuZ3RoID8gZXhwb3J0cy5Eb2N1bWVudFR5cGUuUXVlcnkgOiBleHBvcnRzLkRvY3VtZW50VHlwZS5NdXRhdGlvbjtcbiAgICBpZiAoIXF1ZXJpZXMubGVuZ3RoICYmICFtdXRhdGlvbnMubGVuZ3RoKVxuICAgICAgICB0eXBlID0gZXhwb3J0cy5Eb2N1bWVudFR5cGUuU3Vic2NyaXB0aW9uO1xuICAgIHZhciBkZWZpbml0aW9ucyA9IHF1ZXJpZXMubGVuZ3RoXG4gICAgICAgID8gcXVlcmllc1xuICAgICAgICA6IG11dGF0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgID8gbXV0YXRpb25zXG4gICAgICAgICAgICA6IHN1YnNjcmlwdGlvbnM7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGRlZmluaXRpb25zLmxlbmd0aCA9PT0gMSwgXCJyZWFjdC1hcG9sbG8gb25seSBzdXBwb3J0cyBvbmUgZGVmaW5pdGlvbiBwZXIgSE9DLiBcIi5jb25jYXQoZG9jdW1lbnQsIFwiIGhhZCBcIikgK1xuICAgICAgICBcIlwiLmNvbmNhdChkZWZpbml0aW9ucy5sZW5ndGgsIFwiIGRlZmluaXRpb25zLiBcIikgK1xuICAgICAgICBcIllvdSBjYW4gdXNlICdjb21wb3NlJyB0byBqb2luIG11bHRpcGxlIG9wZXJhdGlvbiB0eXBlcyB0byBhIGNvbXBvbmVudFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KGRlZmluaXRpb25zLmxlbmd0aCA9PT0gMSwgMzYpO1xuICAgIHZhciBkZWZpbml0aW9uID0gZGVmaW5pdGlvbnNbMF07XG4gICAgdmFyaWFibGVzID0gZGVmaW5pdGlvbi52YXJpYWJsZURlZmluaXRpb25zIHx8IFtdO1xuICAgIGlmIChkZWZpbml0aW9uLm5hbWUgJiYgZGVmaW5pdGlvbi5uYW1lLmtpbmQgPT09ICdOYW1lJykge1xuICAgICAgICBuYW1lID0gZGVmaW5pdGlvbi5uYW1lLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbmFtZSA9ICdkYXRhJztcbiAgICB9XG4gICAgdmFyIHBheWxvYWQgPSB7IG5hbWU6IG5hbWUsIHR5cGU6IHR5cGUsIHZhcmlhYmxlczogdmFyaWFibGVzIH07XG4gICAgY2FjaGUuc2V0KGRvY3VtZW50LCBwYXlsb2FkKTtcbiAgICByZXR1cm4gcGF5bG9hZDtcbn1cbmZ1bmN0aW9uIHZlcmlmeURvY3VtZW50VHlwZShkb2N1bWVudCwgdHlwZSkge1xuICAgIHZhciBvcGVyYXRpb24gPSBwYXJzZXIoZG9jdW1lbnQpO1xuICAgIHZhciByZXF1aXJlZE9wZXJhdGlvbk5hbWUgPSBvcGVyYXRpb25OYW1lKHR5cGUpO1xuICAgIHZhciB1c2VkT3BlcmF0aW9uTmFtZSA9IG9wZXJhdGlvbk5hbWUob3BlcmF0aW9uLnR5cGUpO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChvcGVyYXRpb24udHlwZSA9PT0gdHlwZSwgXCJSdW5uaW5nIGEgXCIuY29uY2F0KHJlcXVpcmVkT3BlcmF0aW9uTmFtZSwgXCIgcmVxdWlyZXMgYSBncmFwaHFsIFwiKSArXG4gICAgICAgIFwiXCIuY29uY2F0KHJlcXVpcmVkT3BlcmF0aW9uTmFtZSwgXCIsIGJ1dCBhIFwiKS5jb25jYXQodXNlZE9wZXJhdGlvbk5hbWUsIFwiIHdhcyB1c2VkIGluc3RlYWQuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KG9wZXJhdGlvbi50eXBlID09PSB0eXBlLCAzNyk7XG59XG5cbmV4cG9ydHMub3BlcmF0aW9uTmFtZSA9IG9wZXJhdGlvbk5hbWU7XG5leHBvcnRzLnBhcnNlciA9IHBhcnNlcjtcbmV4cG9ydHMudmVyaWZ5RG9jdW1lbnRUeXBlID0gdmVyaWZ5RG9jdW1lbnRUeXBlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2VyLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxucmVxdWlyZSgnLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciBjb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0Jyk7XG52YXIgaG9va3MgPSByZXF1aXJlKCcuL2hvb2tzJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnLi9wYXJzZXInKTtcblxuXG5cbmV4cG9ydHMuQXBvbGxvQ29uc3VtZXIgPSBjb250ZXh0LkFwb2xsb0NvbnN1bWVyO1xuZXhwb3J0cy5BcG9sbG9Qcm92aWRlciA9IGNvbnRleHQuQXBvbGxvUHJvdmlkZXI7XG5leHBvcnRzLmdldEFwb2xsb0NvbnRleHQgPSBjb250ZXh0LmdldEFwb2xsb0NvbnRleHQ7XG5leHBvcnRzLnJlc2V0QXBvbGxvQ29udGV4dCA9IGNvbnRleHQucmVzZXRBcG9sbG9Db250ZXh0O1xuZXhwb3J0cy5Eb2N1bWVudFR5cGUgPSBwYXJzZXIuRG9jdW1lbnRUeXBlO1xuZXhwb3J0cy5vcGVyYXRpb25OYW1lID0gcGFyc2VyLm9wZXJhdGlvbk5hbWU7XG5leHBvcnRzLnBhcnNlciA9IHBhcnNlci5wYXJzZXI7XG5mb3IgKHZhciBrIGluIGhvb2tzKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIGV4cG9ydHNba10gPSBob29rc1trXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRzSW52YXJpYW50ID0gcmVxdWlyZSgndHMtaW52YXJpYW50Jyk7XG52YXIgcHJvY2VzcyQxID0gcmVxdWlyZSgndHMtaW52YXJpYW50L3Byb2Nlc3MnKTtcbnZhciBncmFwaHFsID0gcmVxdWlyZSgnZ3JhcGhxbCcpO1xuXG5mdW5jdGlvbiBtYXliZSh0aHVuaykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0aHVuaygpO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHsgfVxufVxuXG52YXIgZ2xvYmFsJDEgPSAobWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2xvYmFsVGhpczsgfSkgfHxcbiAgICBtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3c7IH0pIHx8XG4gICAgbWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZjsgfSkgfHxcbiAgICBtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBnbG9iYWw7IH0pIHx8XG4gICAgbWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF5YmUuY29uc3RydWN0b3IoXCJyZXR1cm4gdGhpc1wiKSgpOyB9KSk7XG5cbnZhciBfXyA9IFwiX19cIjtcbnZhciBHTE9CQUxfS0VZID0gW19fLCBfX10uam9pbihcIkRFVlwiKTtcbmZ1bmN0aW9uIGdldERFVigpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihfX0RFVl9fKTtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWwkMSwgR0xPQkFMX0tFWSwge1xuICAgICAgICAgICAgdmFsdWU6IG1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WOyB9KSAhPT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdsb2JhbCQxW0dMT0JBTF9LRVldO1xuICAgIH1cbn1cbnZhciBERVYgPSBnZXRERVYoKTtcblxuZnVuY3Rpb24gcmVtb3ZlVGVtcG9yYXJ5R2xvYmFscygpIHtcbiAgICByZXR1cm4gdHlwZW9mIGdyYXBocWwuU291cmNlID09PSBcImZ1bmN0aW9uXCIgPyBwcm9jZXNzJDEucmVtb3ZlKCkgOiBwcm9jZXNzJDEucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrREVWKCkge1xuICAgIF9fREVWX18gPyB0c0ludmFyaWFudC5pbnZhcmlhbnQoXCJib29sZWFuXCIgPT09IHR5cGVvZiBERVYsIERFVikgOiB0c0ludmFyaWFudC5pbnZhcmlhbnQoXCJib29sZWFuXCIgPT09IHR5cGVvZiBERVYsIDM5KTtcbn1cbnJlbW92ZVRlbXBvcmFyeUdsb2JhbHMoKTtcbmNoZWNrREVWKCk7XG5cbmV4cG9ydHMuSW52YXJpYW50RXJyb3IgPSB0c0ludmFyaWFudC5JbnZhcmlhbnRFcnJvcjtcbmV4cG9ydHMuaW52YXJpYW50ID0gdHNJbnZhcmlhbnQuaW52YXJpYW50O1xuZXhwb3J0cy5ERVYgPSBERVY7XG5leHBvcnRzLmNoZWNrREVWID0gY2hlY2tERVY7XG5leHBvcnRzLmdsb2JhbCA9IGdsb2JhbCQxO1xuZXhwb3J0cy5tYXliZSA9IG1heWJlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2xvYmFscy5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi9nbG9iYWxzJyk7XG52YXIgZ3JhcGhxbCA9IHJlcXVpcmUoJ2dyYXBocWwnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgemVuT2JzZXJ2YWJsZVRzID0gcmVxdWlyZSgnemVuLW9ic2VydmFibGUtdHMnKTtcbnJlcXVpcmUoJ3N5bWJvbC1vYnNlcnZhYmxlJyk7XG5cbmZ1bmN0aW9uIHNob3VsZEluY2x1ZGUoX2EsIHZhcmlhYmxlcykge1xuICAgIHZhciBkaXJlY3RpdmVzID0gX2EuZGlyZWN0aXZlcztcbiAgICBpZiAoIWRpcmVjdGl2ZXMgfHwgIWRpcmVjdGl2ZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0SW5jbHVzaW9uRGlyZWN0aXZlcyhkaXJlY3RpdmVzKS5ldmVyeShmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IF9hLmRpcmVjdGl2ZSwgaWZBcmd1bWVudCA9IF9hLmlmQXJndW1lbnQ7XG4gICAgICAgIHZhciBldmFsZWRWYWx1ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoaWZBcmd1bWVudC52YWx1ZS5raW5kID09PSAnVmFyaWFibGUnKSB7XG4gICAgICAgICAgICBldmFsZWRWYWx1ZSA9IHZhcmlhYmxlcyAmJiB2YXJpYWJsZXNbaWZBcmd1bWVudC52YWx1ZS5uYW1lLnZhbHVlXTtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChldmFsZWRWYWx1ZSAhPT0gdm9pZCAwLCBcIkludmFsaWQgdmFyaWFibGUgcmVmZXJlbmNlZCBpbiBAXCIuY29uY2F0KGRpcmVjdGl2ZS5uYW1lLnZhbHVlLCBcIiBkaXJlY3RpdmUuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KGV2YWxlZFZhbHVlICE9PSB2b2lkIDAsIDQwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2YWxlZFZhbHVlID0gaWZBcmd1bWVudC52YWx1ZS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlLm5hbWUudmFsdWUgPT09ICdza2lwJyA/ICFldmFsZWRWYWx1ZSA6IGV2YWxlZFZhbHVlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0RGlyZWN0aXZlTmFtZXMocm9vdCkge1xuICAgIHZhciBuYW1lcyA9IFtdO1xuICAgIGdyYXBocWwudmlzaXQocm9vdCwge1xuICAgICAgICBEaXJlY3RpdmU6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBuYW1lcy5wdXNoKG5vZGUubmFtZS52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIG5hbWVzO1xufVxudmFyIGhhc0FueURpcmVjdGl2ZXMgPSBmdW5jdGlvbiAobmFtZXMsIHJvb3QpIHsgcmV0dXJuIGhhc0RpcmVjdGl2ZXMobmFtZXMsIHJvb3QsIGZhbHNlKTsgfTtcbnZhciBoYXNBbGxEaXJlY3RpdmVzID0gZnVuY3Rpb24gKG5hbWVzLCByb290KSB7IHJldHVybiBoYXNEaXJlY3RpdmVzKG5hbWVzLCByb290LCB0cnVlKTsgfTtcbmZ1bmN0aW9uIGhhc0RpcmVjdGl2ZXMobmFtZXMsIHJvb3QsIGFsbCkge1xuICAgIHZhciBuYW1lU2V0ID0gbmV3IFNldChuYW1lcyk7XG4gICAgdmFyIHVuaXF1ZUNvdW50ID0gbmFtZVNldC5zaXplO1xuICAgIGdyYXBocWwudmlzaXQocm9vdCwge1xuICAgICAgICBEaXJlY3RpdmU6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBpZiAobmFtZVNldC5kZWxldGUobm9kZS5uYW1lLnZhbHVlKSAmJlxuICAgICAgICAgICAgICAgICghYWxsIHx8ICFuYW1lU2V0LnNpemUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyYXBocWwuQlJFQUs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbCA/ICFuYW1lU2V0LnNpemUgOiBuYW1lU2V0LnNpemUgPCB1bmlxdWVDb3VudDtcbn1cbmZ1bmN0aW9uIGhhc0NsaWVudEV4cG9ydHMoZG9jdW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQgJiYgaGFzRGlyZWN0aXZlcyhbJ2NsaWVudCcsICdleHBvcnQnXSwgZG9jdW1lbnQsIHRydWUpO1xufVxuZnVuY3Rpb24gaXNJbmNsdXNpb25EaXJlY3RpdmUoX2EpIHtcbiAgICB2YXIgdmFsdWUgPSBfYS5uYW1lLnZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJ3NraXAnIHx8IHZhbHVlID09PSAnaW5jbHVkZSc7XG59XG5mdW5jdGlvbiBnZXRJbmNsdXNpb25EaXJlY3RpdmVzKGRpcmVjdGl2ZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgaWYgKGRpcmVjdGl2ZXMgJiYgZGlyZWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGlmICghaXNJbmNsdXNpb25EaXJlY3RpdmUoZGlyZWN0aXZlKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGlyZWN0aXZlQXJndW1lbnRzID0gZGlyZWN0aXZlLmFyZ3VtZW50cztcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmVOYW1lID0gZGlyZWN0aXZlLm5hbWUudmFsdWU7XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZGlyZWN0aXZlQXJndW1lbnRzICYmIGRpcmVjdGl2ZUFyZ3VtZW50cy5sZW5ndGggPT09IDEsIFwiSW5jb3JyZWN0IG51bWJlciBvZiBhcmd1bWVudHMgZm9yIHRoZSBAXCIuY29uY2F0KGRpcmVjdGl2ZU5hbWUsIFwiIGRpcmVjdGl2ZS5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQoZGlyZWN0aXZlQXJndW1lbnRzICYmIGRpcmVjdGl2ZUFyZ3VtZW50cy5sZW5ndGggPT09IDEsIDQxKTtcbiAgICAgICAgICAgIHZhciBpZkFyZ3VtZW50ID0gZGlyZWN0aXZlQXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGlmQXJndW1lbnQubmFtZSAmJiBpZkFyZ3VtZW50Lm5hbWUudmFsdWUgPT09ICdpZicsIFwiSW52YWxpZCBhcmd1bWVudCBmb3IgdGhlIEBcIi5jb25jYXQoZGlyZWN0aXZlTmFtZSwgXCIgZGlyZWN0aXZlLlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChpZkFyZ3VtZW50Lm5hbWUgJiYgaWZBcmd1bWVudC5uYW1lLnZhbHVlID09PSAnaWYnLCA0Mik7XG4gICAgICAgICAgICB2YXIgaWZWYWx1ZSA9IGlmQXJndW1lbnQudmFsdWU7XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoaWZWYWx1ZSAmJlxuICAgICAgICAgICAgICAgIChpZlZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZScgfHwgaWZWYWx1ZS5raW5kID09PSAnQm9vbGVhblZhbHVlJyksIFwiQXJndW1lbnQgZm9yIHRoZSBAXCIuY29uY2F0KGRpcmVjdGl2ZU5hbWUsIFwiIGRpcmVjdGl2ZSBtdXN0IGJlIGEgdmFyaWFibGUgb3IgYSBib29sZWFuIHZhbHVlLlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChpZlZhbHVlICYmXG4gICAgICAgICAgICAgICAgKGlmVmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJyB8fCBpZlZhbHVlLmtpbmQgPT09ICdCb29sZWFuVmFsdWUnKSwgNDMpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBkaXJlY3RpdmU6IGRpcmVjdGl2ZSwgaWZBcmd1bWVudDogaWZBcmd1bWVudCB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdldEZyYWdtZW50UXVlcnlEb2N1bWVudChkb2N1bWVudCwgZnJhZ21lbnROYW1lKSB7XG4gICAgdmFyIGFjdHVhbEZyYWdtZW50TmFtZSA9IGZyYWdtZW50TmFtZTtcbiAgICB2YXIgZnJhZ21lbnRzID0gW107XG4gICAgZG9jdW1lbnQuZGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIkZvdW5kIGEgXCIuY29uY2F0KGRlZmluaXRpb24ub3BlcmF0aW9uLCBcIiBvcGVyYXRpb25cIikuY29uY2F0KGRlZmluaXRpb24ubmFtZSA/IFwiIG5hbWVkICdcIi5jb25jYXQoZGVmaW5pdGlvbi5uYW1lLnZhbHVlLCBcIidcIikgOiAnJywgXCIuIFwiKSArXG4gICAgICAgICAgICAgICAgJ05vIG9wZXJhdGlvbnMgYXJlIGFsbG93ZWQgd2hlbiB1c2luZyBhIGZyYWdtZW50IGFzIGEgcXVlcnkuIE9ubHkgZnJhZ21lbnRzIGFyZSBhbGxvd2VkLicpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoNDQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nKSB7XG4gICAgICAgICAgICBmcmFnbWVudHMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgYWN0dWFsRnJhZ21lbnROYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnRzLmxlbmd0aCA9PT0gMSwgXCJGb3VuZCBcIi5jb25jYXQoZnJhZ21lbnRzLmxlbmd0aCwgXCIgZnJhZ21lbnRzLiBgZnJhZ21lbnROYW1lYCBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gdGhlcmUgaXMgbm90IGV4YWN0bHkgMSBmcmFnbWVudC5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnRzLmxlbmd0aCA9PT0gMSwgNDUpO1xuICAgICAgICBhY3R1YWxGcmFnbWVudE5hbWUgPSBmcmFnbWVudHNbMF0ubmFtZS52YWx1ZTtcbiAgICB9XG4gICAgdmFyIHF1ZXJ5ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGRvY3VtZW50KSwgeyBkZWZpbml0aW9uczogdHNsaWIuX19zcHJlYWRBcnJheShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2luZDogJ09wZXJhdGlvbkRlZmluaXRpb24nLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogJ3F1ZXJ5JyxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRnJhZ21lbnRTcHJlYWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWN0dWFsRnJhZ21lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sIGRvY3VtZW50LmRlZmluaXRpb25zLCB0cnVlKSB9KTtcbiAgICByZXR1cm4gcXVlcnk7XG59XG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudE1hcChmcmFnbWVudHMpIHtcbiAgICBpZiAoZnJhZ21lbnRzID09PSB2b2lkIDApIHsgZnJhZ21lbnRzID0gW107IH1cbiAgICB2YXIgc3ltVGFibGUgPSB7fTtcbiAgICBmcmFnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZnJhZ21lbnQpIHtcbiAgICAgICAgc3ltVGFibGVbZnJhZ21lbnQubmFtZS52YWx1ZV0gPSBmcmFnbWVudDtcbiAgICB9KTtcbiAgICByZXR1cm4gc3ltVGFibGU7XG59XG5mdW5jdGlvbiBnZXRGcmFnbWVudEZyb21TZWxlY3Rpb24oc2VsZWN0aW9uLCBmcmFnbWVudE1hcCkge1xuICAgIHN3aXRjaCAoc2VsZWN0aW9uLmtpbmQpIHtcbiAgICAgICAgY2FzZSAnSW5saW5lRnJhZ21lbnQnOlxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgICAgICAgY2FzZSAnRnJhZ21lbnRTcHJlYWQnOiB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnROYW1lID0gc2VsZWN0aW9uLm5hbWUudmFsdWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZyYWdtZW50TWFwID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRNYXAoZnJhZ21lbnROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGZyYWdtZW50TWFwICYmIGZyYWdtZW50TWFwW2ZyYWdtZW50TmFtZV07XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnQsIFwiTm8gZnJhZ21lbnQgbmFtZWQgXCIuY29uY2F0KGZyYWdtZW50TmFtZSkpIDogZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnQsIDQ2KTtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudCB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBtYWtlUmVmZXJlbmNlKGlkKSB7XG4gICAgcmV0dXJuIHsgX19yZWY6IFN0cmluZyhpZCkgfTtcbn1cbmZ1bmN0aW9uIGlzUmVmZXJlbmNlKG9iaikge1xuICAgIHJldHVybiBCb29sZWFuKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLl9fcmVmID09PSAnc3RyaW5nJyk7XG59XG5mdW5jdGlvbiBpc0RvY3VtZW50Tm9kZSh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNOb25OdWxsT2JqZWN0KHZhbHVlKSAmJlxuICAgICAgICB2YWx1ZS5raW5kID09PSBcIkRvY3VtZW50XCIgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZS5kZWZpbml0aW9ucykpO1xufVxuZnVuY3Rpb24gaXNTdHJpbmdWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnU3RyaW5nVmFsdWUnO1xufVxuZnVuY3Rpb24gaXNCb29sZWFuVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0Jvb2xlYW5WYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0ludFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdJbnRWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0Zsb2F0VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0Zsb2F0VmFsdWUnO1xufVxuZnVuY3Rpb24gaXNWYXJpYWJsZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnVmFyaWFibGUnO1xufVxuZnVuY3Rpb24gaXNPYmplY3RWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnT2JqZWN0VmFsdWUnO1xufVxuZnVuY3Rpb24gaXNMaXN0VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0xpc3RWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0VudW1WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnRW51bVZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzTnVsbFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdOdWxsVmFsdWUnO1xufVxuZnVuY3Rpb24gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09iaiwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcykge1xuICAgIGlmIChpc0ludFZhbHVlKHZhbHVlKSB8fCBpc0Zsb2F0VmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IE51bWJlcih2YWx1ZS52YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQm9vbGVhblZhbHVlKHZhbHVlKSB8fCBpc1N0cmluZ1ZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3RWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIG5lc3RlZEFyZ09ial8xID0ge307XG4gICAgICAgIHZhbHVlLmZpZWxkcy5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihuZXN0ZWRBcmdPYmpfMSwgb2JqLm5hbWUsIG9iai52YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IG5lc3RlZEFyZ09ial8xO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZhcmlhYmxlKHZhbHVlKSkge1xuICAgICAgICB2YXIgdmFyaWFibGVWYWx1ZSA9ICh2YXJpYWJsZXMgfHwge30pW3ZhbHVlLm5hbWUudmFsdWVdO1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YXJpYWJsZVZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0xpc3RWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gdmFsdWUudmFsdWVzLm1hcChmdW5jdGlvbiAobGlzdFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbmVzdGVkQXJnQXJyYXlPYmogPSB7fTtcbiAgICAgICAgICAgIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihuZXN0ZWRBcmdBcnJheU9iaiwgbmFtZSwgbGlzdFZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEFyZ0FycmF5T2JqW25hbWUudmFsdWVdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNFbnVtVmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc051bGxWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIlRoZSBpbmxpbmUgYXJndW1lbnQgXFxcIlwiLmNvbmNhdChuYW1lLnZhbHVlLCBcIlxcXCIgb2Yga2luZCBcXFwiXCIpLmNvbmNhdCh2YWx1ZS5raW5kLCBcIlxcXCJcIikgK1xuICAgICAgICAgICAgJ2lzIG5vdCBzdXBwb3J0ZWQuIFVzZSB2YXJpYWJsZXMgaW5zdGVhZCBvZiBpbmxpbmUgYXJndW1lbnRzIHRvICcgK1xuICAgICAgICAgICAgJ292ZXJjb21lIHRoaXMgbGltaXRhdGlvbi4nKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDU1KTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdG9yZUtleU5hbWVGcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcykge1xuICAgIHZhciBkaXJlY3RpdmVzT2JqID0gbnVsbDtcbiAgICBpZiAoZmllbGQuZGlyZWN0aXZlcykge1xuICAgICAgICBkaXJlY3RpdmVzT2JqID0ge307XG4gICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzT2JqW2RpcmVjdGl2ZS5uYW1lLnZhbHVlXSA9IHt9O1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihkaXJlY3RpdmVzT2JqW2RpcmVjdGl2ZS5uYW1lLnZhbHVlXSwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgYXJnT2JqID0gbnVsbDtcbiAgICBpZiAoZmllbGQuYXJndW1lbnRzICYmIGZpZWxkLmFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgYXJnT2JqID0ge307XG4gICAgICAgIGZpZWxkLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lLCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihhcmdPYmosIG5hbWUsIHZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFN0b3JlS2V5TmFtZShmaWVsZC5uYW1lLnZhbHVlLCBhcmdPYmosIGRpcmVjdGl2ZXNPYmopO1xufVxudmFyIEtOT1dOX0RJUkVDVElWRVMgPSBbXG4gICAgJ2Nvbm5lY3Rpb24nLFxuICAgICdpbmNsdWRlJyxcbiAgICAnc2tpcCcsXG4gICAgJ2NsaWVudCcsXG4gICAgJ3Jlc3QnLFxuICAgICdleHBvcnQnLFxuXTtcbnZhciBnZXRTdG9yZUtleU5hbWUgPSBPYmplY3QuYXNzaWduKGZ1bmN0aW9uIChmaWVsZE5hbWUsIGFyZ3MsIGRpcmVjdGl2ZXMpIHtcbiAgICBpZiAoYXJncyAmJlxuICAgICAgICBkaXJlY3RpdmVzICYmXG4gICAgICAgIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXSAmJlxuICAgICAgICBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2tleSddKSB7XG4gICAgICAgIGlmIChkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddICYmXG4gICAgICAgICAgICBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJLZXlzID0gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydmaWx0ZXInXVxuICAgICAgICAgICAgICAgID8gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydmaWx0ZXInXVxuICAgICAgICAgICAgICAgIDogW107XG4gICAgICAgICAgICBmaWx0ZXJLZXlzLnNvcnQoKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZEFyZ3NfMSA9IHt9O1xuICAgICAgICAgICAgZmlsdGVyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEFyZ3NfMVtrZXldID0gYXJnc1trZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydrZXknXSwgXCIoXCIpLmNvbmNhdChzdHJpbmdpZnkoZmlsdGVyZWRBcmdzXzEpLCBcIilcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydrZXknXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgY29tcGxldGVGaWVsZE5hbWUgPSBmaWVsZE5hbWU7XG4gICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgdmFyIHN0cmluZ2lmaWVkQXJncyA9IHN0cmluZ2lmeShhcmdzKTtcbiAgICAgICAgY29tcGxldGVGaWVsZE5hbWUgKz0gXCIoXCIuY29uY2F0KHN0cmluZ2lmaWVkQXJncywgXCIpXCIpO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aXZlcykge1xuICAgICAgICBPYmplY3Qua2V5cyhkaXJlY3RpdmVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChLTk9XTl9ESVJFQ1RJVkVTLmluZGV4T2Yoa2V5KSAhPT0gLTEpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZXNba2V5XSAmJiBPYmplY3Qua2V5cyhkaXJlY3RpdmVzW2tleV0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlRmllbGROYW1lICs9IFwiQFwiLmNvbmNhdChrZXksIFwiKFwiKS5jb25jYXQoc3RyaW5naWZ5KGRpcmVjdGl2ZXNba2V5XSksIFwiKVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlRmllbGROYW1lICs9IFwiQFwiLmNvbmNhdChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBsZXRlRmllbGROYW1lO1xufSwge1xuICAgIHNldFN0cmluZ2lmeTogZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzID0gc3RyaW5naWZ5O1xuICAgICAgICBzdHJpbmdpZnkgPSBzO1xuICAgICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgfSxcbn0pO1xudmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIGRlZmF1bHRTdHJpbmdpZnkodmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIHN0cmluZ2lmeVJlcGxhY2VyKTtcbn07XG5mdW5jdGlvbiBzdHJpbmdpZnlSZXBsYWNlcihfa2V5LCB2YWx1ZSkge1xuICAgIGlmIChpc05vbk51bGxPYmplY3QodmFsdWUpICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IE9iamVjdC5rZXlzKHZhbHVlKS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uIChjb3B5LCBrZXkpIHtcbiAgICAgICAgICAgIGNvcHlba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBhcmd1bWVudHNPYmplY3RGcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcykge1xuICAgIGlmIChmaWVsZC5hcmd1bWVudHMgJiYgZmllbGQuYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB2YXIgYXJnT2JqXzEgPSB7fTtcbiAgICAgICAgZmllbGQuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09ial8xLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcmdPYmpfMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiByZXN1bHRLZXlOYW1lRnJvbUZpZWxkKGZpZWxkKSB7XG4gICAgcmV0dXJuIGZpZWxkLmFsaWFzID8gZmllbGQuYWxpYXMudmFsdWUgOiBmaWVsZC5uYW1lLnZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0VHlwZW5hbWVGcm9tUmVzdWx0KHJlc3VsdCwgc2VsZWN0aW9uU2V0LCBmcmFnbWVudE1hcCkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0Ll9fdHlwZW5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuX190eXBlbmFtZTtcbiAgICB9XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHNlbGVjdGlvblNldC5zZWxlY3Rpb25zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgc2VsZWN0aW9uID0gX2FbX2ldO1xuICAgICAgICBpZiAoaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLm5hbWUudmFsdWUgPT09ICdfX3R5cGVuYW1lJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRbcmVzdWx0S2V5TmFtZUZyb21GaWVsZChzZWxlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZSA9IGdldFR5cGVuYW1lRnJvbVJlc3VsdChyZXN1bHQsIGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbihzZWxlY3Rpb24sIGZyYWdtZW50TWFwKS5zZWxlY3Rpb25TZXQsIGZyYWdtZW50TWFwKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZW5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaXNGaWVsZChzZWxlY3Rpb24pIHtcbiAgICByZXR1cm4gc2VsZWN0aW9uLmtpbmQgPT09ICdGaWVsZCc7XG59XG5mdW5jdGlvbiBpc0lubGluZUZyYWdtZW50KHNlbGVjdGlvbikge1xuICAgIHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0lubGluZUZyYWdtZW50Jztcbn1cblxuZnVuY3Rpb24gY2hlY2tEb2N1bWVudChkb2MpIHtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZG9jICYmIGRvYy5raW5kID09PSAnRG9jdW1lbnQnLCBcIkV4cGVjdGluZyBhIHBhcnNlZCBHcmFwaFFMIGRvY3VtZW50LiBQZXJoYXBzIHlvdSBuZWVkIHRvIHdyYXAgdGhlIHF1ZXJ5IHN0cmluZyBpbiBhIFxcXCJncWxcXFwiIHRhZz8gaHR0cDovL2RvY3MuYXBvbGxvc3RhY2suY29tL2Fwb2xsby1jbGllbnQvY29yZS5odG1sI2dxbFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KGRvYyAmJiBkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgNDcpO1xuICAgIHZhciBvcGVyYXRpb25zID0gZG9jLmRlZmluaXRpb25zXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQua2luZCAhPT0gJ0ZyYWdtZW50RGVmaW5pdGlvbic7IH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCAhPT0gJ09wZXJhdGlvbkRlZmluaXRpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJTY2hlbWEgdHlwZSBkZWZpbml0aW9ucyBub3QgYWxsb3dlZCBpbiBxdWVyaWVzLiBGb3VuZDogXFxcIlwiLmNvbmNhdChkZWZpbml0aW9uLmtpbmQsIFwiXFxcIlwiKSkgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig0OCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfSk7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wZXJhdGlvbnMubGVuZ3RoIDw9IDEsIFwiQW1iaWd1b3VzIEdyYXBoUUwgZG9jdW1lbnQ6IGNvbnRhaW5zIFwiLmNvbmNhdChvcGVyYXRpb25zLmxlbmd0aCwgXCIgb3BlcmF0aW9uc1wiKSkgOiBnbG9iYWxzLmludmFyaWFudChvcGVyYXRpb25zLmxlbmd0aCA8PSAxLCA0OSk7XG4gICAgcmV0dXJuIGRvYztcbn1cbmZ1bmN0aW9uIGdldE9wZXJhdGlvbkRlZmluaXRpb24oZG9jKSB7XG4gICAgY2hlY2tEb2N1bWVudChkb2MpO1xuICAgIHJldHVybiBkb2MuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7IHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJzsgfSlbMF07XG59XG5mdW5jdGlvbiBnZXRPcGVyYXRpb25OYW1lKGRvYykge1xuICAgIHJldHVybiAoZG9jLmRlZmluaXRpb25zXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmIGRlZmluaXRpb24ubmFtZTtcbiAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Lm5hbWUudmFsdWU7IH0pWzBdIHx8IG51bGwpO1xufVxuZnVuY3Rpb24gZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhkb2MpIHtcbiAgICByZXR1cm4gZG9jLmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoZGVmaW5pdGlvbikgeyByZXR1cm4gZGVmaW5pdGlvbi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJzsgfSk7XG59XG5mdW5jdGlvbiBnZXRRdWVyeURlZmluaXRpb24oZG9jKSB7XG4gICAgdmFyIHF1ZXJ5RGVmID0gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihkb2MpO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChxdWVyeURlZiAmJiBxdWVyeURlZi5vcGVyYXRpb24gPT09ICdxdWVyeScsICdNdXN0IGNvbnRhaW4gYSBxdWVyeSBkZWZpbml0aW9uLicpIDogZ2xvYmFscy5pbnZhcmlhbnQocXVlcnlEZWYgJiYgcXVlcnlEZWYub3BlcmF0aW9uID09PSAncXVlcnknLCA1MCk7XG4gICAgcmV0dXJuIHF1ZXJ5RGVmO1xufVxuZnVuY3Rpb24gZ2V0RnJhZ21lbnREZWZpbml0aW9uKGRvYykge1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgXCJFeHBlY3RpbmcgYSBwYXJzZWQgR3JhcGhRTCBkb2N1bWVudC4gUGVyaGFwcyB5b3UgbmVlZCB0byB3cmFwIHRoZSBxdWVyeSBzdHJpbmcgaW4gYSBcXFwiZ3FsXFxcIiB0YWc/IGh0dHA6Ly9kb2NzLmFwb2xsb3N0YWNrLmNvbS9hcG9sbG8tY2xpZW50L2NvcmUuaHRtbCNncWxcIikgOiBnbG9iYWxzLmludmFyaWFudChkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgNTEpO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChkb2MuZGVmaW5pdGlvbnMubGVuZ3RoIDw9IDEsICdGcmFnbWVudCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgZGVmaW5pdGlvbi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KGRvYy5kZWZpbml0aW9ucy5sZW5ndGggPD0gMSwgNTIpO1xuICAgIHZhciBmcmFnbWVudERlZiA9IGRvYy5kZWZpbml0aW9uc1swXTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnREZWYua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicsICdNdXN0IGJlIGEgZnJhZ21lbnQgZGVmaW5pdGlvbi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50RGVmLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nLCA1Myk7XG4gICAgcmV0dXJuIGZyYWdtZW50RGVmO1xufVxuZnVuY3Rpb24gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnlEb2MpIHtcbiAgICBjaGVja0RvY3VtZW50KHF1ZXJ5RG9jKTtcbiAgICB2YXIgZnJhZ21lbnREZWZpbml0aW9uO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBxdWVyeURvYy5kZWZpbml0aW9uczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGRlZmluaXRpb24gPSBfYVtfaV07XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgdmFyIG9wZXJhdGlvbiA9IGRlZmluaXRpb24ub3BlcmF0aW9uO1xuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJ3F1ZXJ5JyB8fFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbiA9PT0gJ211dGF0aW9uJyB8fFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJyAmJiAhZnJhZ21lbnREZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBmcmFnbWVudERlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmcmFnbWVudERlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50RGVmaW5pdGlvbjtcbiAgICB9XG4gICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKCdFeHBlY3RlZCBhIHBhcnNlZCBHcmFwaFFMIHF1ZXJ5IHdpdGggYSBxdWVyeSwgbXV0YXRpb24sIHN1YnNjcmlwdGlvbiwgb3IgYSBmcmFnbWVudC4nKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDU0KTtcbn1cbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZXMoZGVmaW5pdGlvbikge1xuICAgIHZhciBkZWZhdWx0VmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgZGVmcyA9IGRlZmluaXRpb24gJiYgZGVmaW5pdGlvbi52YXJpYWJsZURlZmluaXRpb25zO1xuICAgIGlmIChkZWZzICYmIGRlZnMubGVuZ3RoKSB7XG4gICAgICAgIGRlZnMuZm9yRWFjaChmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgICAgICBpZiAoZGVmLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihkZWZhdWx0VmFsdWVzLCBkZWYudmFyaWFibGUubmFtZSwgZGVmLmRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlcztcbn1cblxuZnVuY3Rpb24gZmlsdGVySW5QbGFjZShhcnJheSwgdGVzdCwgY29udGV4dCkge1xuICAgIHZhciB0YXJnZXQgPSAwO1xuICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW0sIGkpIHtcbiAgICAgICAgaWYgKHRlc3QuY2FsbCh0aGlzLCBlbGVtLCBpLCBhcnJheSkpIHtcbiAgICAgICAgICAgIGFycmF5W3RhcmdldCsrXSA9IGVsZW07XG4gICAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcbiAgICBhcnJheS5sZW5ndGggPSB0YXJnZXQ7XG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG52YXIgVFlQRU5BTUVfRklFTEQgPSB7XG4gICAga2luZDogJ0ZpZWxkJyxcbiAgICBuYW1lOiB7XG4gICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgdmFsdWU6ICdfX3R5cGVuYW1lJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzRW1wdHkob3AsIGZyYWdtZW50TWFwKSB7XG4gICAgcmV0dXJuICFvcCB8fCBvcC5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5ldmVyeShmdW5jdGlvbiAoc2VsZWN0aW9uKSB7IHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0ZyYWdtZW50U3ByZWFkJyAmJlxuICAgICAgICBpc0VtcHR5KGZyYWdtZW50TWFwW3NlbGVjdGlvbi5uYW1lLnZhbHVlXSwgZnJhZ21lbnRNYXApOyB9KTtcbn1cbmZ1bmN0aW9uIG51bGxJZkRvY0lzRW1wdHkoZG9jKSB7XG4gICAgcmV0dXJuIGlzRW1wdHkoZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihkb2MpIHx8IGdldEZyYWdtZW50RGVmaW5pdGlvbihkb2MpLCBjcmVhdGVGcmFnbWVudE1hcChnZXRGcmFnbWVudERlZmluaXRpb25zKGRvYykpKVxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBkb2M7XG59XG5mdW5jdGlvbiBnZXREaXJlY3RpdmVNYXRjaGVyKGRpcmVjdGl2ZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZGlyZWN0aXZlTWF0Y2hlcihkaXJlY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICByZXR1cm4gKGRpci5uYW1lICYmIGRpci5uYW1lID09PSBkaXJlY3RpdmUubmFtZS52YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAoZGlyLnRlc3QgJiYgZGlyLnRlc3QoZGlyZWN0aXZlKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiByZW1vdmVEaXJlY3RpdmVzRnJvbURvY3VtZW50KGRpcmVjdGl2ZXMsIGRvYykge1xuICAgIHZhciB2YXJpYWJsZXNJblVzZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIHZhcmlhYmxlc1RvUmVtb3ZlID0gW107XG4gICAgdmFyIGZyYWdtZW50U3ByZWFkc0luVXNlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgZnJhZ21lbnRTcHJlYWRzVG9SZW1vdmUgPSBbXTtcbiAgICB2YXIgbW9kaWZpZWREb2MgPSBudWxsSWZEb2NJc0VtcHR5KGdyYXBocWwudmlzaXQoZG9jLCB7XG4gICAgICAgIFZhcmlhYmxlOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUsIF9rZXksIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQua2luZCAhPT0gJ1ZhcmlhYmxlRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzSW5Vc2Vbbm9kZS5uYW1lLnZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRmllbGQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3RpdmVzICYmIG5vZGUuZGlyZWN0aXZlcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2hvdWxkUmVtb3ZlRmllbGQgPSBkaXJlY3RpdmVzLnNvbWUoZnVuY3Rpb24gKGRpcmVjdGl2ZSkgeyByZXR1cm4gZGlyZWN0aXZlLnJlbW92ZTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRSZW1vdmVGaWVsZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kaXJlY3RpdmVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRpcmVjdGl2ZXMuc29tZShnZXREaXJlY3RpdmVNYXRjaGVyKGRpcmVjdGl2ZXMpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmcudmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzVG9SZW1vdmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXJnLnZhbHVlLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QWxsRnJhZ21lbnRTcHJlYWRzRnJvbVNlbGVjdGlvblNldChub2RlLnNlbGVjdGlvblNldCkuZm9yRWFjaChmdW5jdGlvbiAoZnJhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudFNwcmVhZHNUb1JlbW92ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZyYWcubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIEZyYWdtZW50U3ByZWFkOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNwcmVhZHNJblVzZVtub2RlLm5hbWUudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIERpcmVjdGl2ZToge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdldERpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlcykobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KSk7XG4gICAgaWYgKG1vZGlmaWVkRG9jICYmXG4gICAgICAgIGZpbHRlckluUGxhY2UodmFyaWFibGVzVG9SZW1vdmUsIGZ1bmN0aW9uICh2KSB7IHJldHVybiAhIXYubmFtZSAmJiAhdmFyaWFibGVzSW5Vc2Vbdi5uYW1lXTsgfSkubGVuZ3RoKSB7XG4gICAgICAgIG1vZGlmaWVkRG9jID0gcmVtb3ZlQXJndW1lbnRzRnJvbURvY3VtZW50KHZhcmlhYmxlc1RvUmVtb3ZlLCBtb2RpZmllZERvYyk7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZERvYyAmJlxuICAgICAgICBmaWx0ZXJJblBsYWNlKGZyYWdtZW50U3ByZWFkc1RvUmVtb3ZlLCBmdW5jdGlvbiAoZnMpIHsgcmV0dXJuICEhZnMubmFtZSAmJiAhZnJhZ21lbnRTcHJlYWRzSW5Vc2VbZnMubmFtZV07IH0pXG4gICAgICAgICAgICAubGVuZ3RoKSB7XG4gICAgICAgIG1vZGlmaWVkRG9jID0gcmVtb3ZlRnJhZ21lbnRTcHJlYWRGcm9tRG9jdW1lbnQoZnJhZ21lbnRTcHJlYWRzVG9SZW1vdmUsIG1vZGlmaWVkRG9jKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGlmaWVkRG9jO1xufVxudmFyIGFkZFR5cGVuYW1lVG9Eb2N1bWVudCA9IE9iamVjdC5hc3NpZ24oZnVuY3Rpb24gKGRvYykge1xuICAgIHJldHVybiBncmFwaHFsLnZpc2l0KGRvYywge1xuICAgICAgICBTZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSwgX2tleSwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAmJlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbnMgPSBub2RlLnNlbGVjdGlvbnM7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHNraXAgPSBzZWxlY3Rpb25zLnNvbWUoZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGlzRmllbGQoc2VsZWN0aW9uKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbi5uYW1lLnZhbHVlID09PSAnX190eXBlbmFtZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24ubmFtZS52YWx1ZS5sYXN0SW5kZXhPZignX18nLCAwKSA9PT0gMCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChza2lwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIGlmIChpc0ZpZWxkKGZpZWxkKSAmJlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXJlY3RpdmVzICYmXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lLnZhbHVlID09PSAnZXhwb3J0JzsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG5vZGUpLCB7IHNlbGVjdGlvbnM6IHRzbGliLl9fc3ByZWFkQXJyYXkodHNsaWIuX19zcHJlYWRBcnJheShbXSwgc2VsZWN0aW9ucywgdHJ1ZSksIFtUWVBFTkFNRV9GSUVMRF0sIGZhbHNlKSB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG59LCB7XG4gICAgYWRkZWQ6IGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICByZXR1cm4gZmllbGQgPT09IFRZUEVOQU1FX0ZJRUxEO1xuICAgIH0sXG59KTtcbnZhciBjb25uZWN0aW9uUmVtb3ZlQ29uZmlnID0ge1xuICAgIHRlc3Q6IGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgdmFyIHdpbGxSZW1vdmUgPSBkaXJlY3RpdmUubmFtZS52YWx1ZSA9PT0gJ2Nvbm5lY3Rpb24nO1xuICAgICAgICBpZiAod2lsbFJlbW92ZSkge1xuICAgICAgICAgICAgaWYgKCFkaXJlY3RpdmUuYXJndW1lbnRzIHx8XG4gICAgICAgICAgICAgICAgIWRpcmVjdGl2ZS5hcmd1bWVudHMuc29tZShmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBhcmcubmFtZS52YWx1ZSA9PT0gJ2tleSc7IH0pKSB7XG4gICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKCdSZW1vdmluZyBhbiBAY29ubmVjdGlvbiBkaXJlY3RpdmUgZXZlbiB0aG91Z2ggaXQgZG9lcyBub3QgaGF2ZSBhIGtleS4gJyArXG4gICAgICAgICAgICAgICAgICAgICdZb3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBrZXkgcGFyYW1ldGVyIHRvIHNwZWNpZnkgYSBzdG9yZSBrZXkuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpbGxSZW1vdmU7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZW1vdmVDb25uZWN0aW9uRGlyZWN0aXZlRnJvbURvY3VtZW50KGRvYykge1xuICAgIHJldHVybiByZW1vdmVEaXJlY3RpdmVzRnJvbURvY3VtZW50KFtjb25uZWN0aW9uUmVtb3ZlQ29uZmlnXSwgY2hlY2tEb2N1bWVudChkb2MpKTtcbn1cbmZ1bmN0aW9uIGdldEFyZ3VtZW50TWF0Y2hlcihjb25maWcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gYXJndW1lbnRNYXRjaGVyKGFyZ3VtZW50KSB7XG4gICAgICAgIHJldHVybiBjb25maWcuc29tZShmdW5jdGlvbiAoYUNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3VtZW50LnZhbHVlICYmXG4gICAgICAgICAgICAgICAgYXJndW1lbnQudmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJyAmJlxuICAgICAgICAgICAgICAgIGFyZ3VtZW50LnZhbHVlLm5hbWUgJiZcbiAgICAgICAgICAgICAgICAoYUNvbmZpZy5uYW1lID09PSBhcmd1bWVudC52YWx1ZS5uYW1lLnZhbHVlIHx8XG4gICAgICAgICAgICAgICAgICAgIChhQ29uZmlnLnRlc3QgJiYgYUNvbmZpZy50ZXN0KGFyZ3VtZW50KSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVtb3ZlQXJndW1lbnRzRnJvbURvY3VtZW50KGNvbmZpZywgZG9jKSB7XG4gICAgdmFyIGFyZ01hdGNoZXIgPSBnZXRBcmd1bWVudE1hdGNoZXIoY29uZmlnKTtcbiAgICByZXR1cm4gbnVsbElmRG9jSXNFbXB0eShncmFwaHFsLnZpc2l0KGRvYywge1xuICAgICAgICBPcGVyYXRpb25EZWZpbml0aW9uOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG5vZGUpLCB7IHZhcmlhYmxlRGVmaW5pdGlvbnM6IG5vZGUudmFyaWFibGVEZWZpbml0aW9ucyA/IG5vZGUudmFyaWFibGVEZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHZhckRlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFjb25maWcuc29tZShmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBhcmcubmFtZSA9PT0gdmFyRGVmLnZhcmlhYmxlLm5hbWUudmFsdWU7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9KSA6IFtdIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRmllbGQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBzaG91bGRSZW1vdmVGaWVsZCA9IGNvbmZpZy5zb21lKGZ1bmN0aW9uIChhcmdDb25maWcpIHsgcmV0dXJuIGFyZ0NvbmZpZy5yZW1vdmU7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRSZW1vdmVGaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJnTWF0Y2hDb3VudF8xID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJnTWF0Y2hlcihhcmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ01hdGNoQ291bnRfMSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdNYXRjaENvdW50XzEgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgQXJndW1lbnQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChhcmdNYXRjaGVyKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSkpO1xufVxuZnVuY3Rpb24gcmVtb3ZlRnJhZ21lbnRTcHJlYWRGcm9tRG9jdW1lbnQoY29uZmlnLCBkb2MpIHtcbiAgICBmdW5jdGlvbiBlbnRlcihub2RlKSB7XG4gICAgICAgIGlmIChjb25maWcuc29tZShmdW5jdGlvbiAoZGVmKSB7IHJldHVybiBkZWYubmFtZSA9PT0gbm9kZS5uYW1lLnZhbHVlOyB9KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxJZkRvY0lzRW1wdHkoZ3JhcGhxbC52aXNpdChkb2MsIHtcbiAgICAgICAgRnJhZ21lbnRTcHJlYWQ6IHsgZW50ZXI6IGVudGVyIH0sXG4gICAgICAgIEZyYWdtZW50RGVmaW5pdGlvbjogeyBlbnRlcjogZW50ZXIgfSxcbiAgICB9KSk7XG59XG5mdW5jdGlvbiBnZXRBbGxGcmFnbWVudFNwcmVhZHNGcm9tU2VsZWN0aW9uU2V0KHNlbGVjdGlvblNldCkge1xuICAgIHZhciBhbGxGcmFnbWVudHMgPSBbXTtcbiAgICBzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKChpc0ZpZWxkKHNlbGVjdGlvbikgfHwgaXNJbmxpbmVGcmFnbWVudChzZWxlY3Rpb24pKSAmJlxuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgZ2V0QWxsRnJhZ21lbnRTcHJlYWRzRnJvbVNlbGVjdGlvblNldChzZWxlY3Rpb24uc2VsZWN0aW9uU2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnKSB7IHJldHVybiBhbGxGcmFnbWVudHMucHVzaChmcmFnKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0aW9uLmtpbmQgPT09ICdGcmFnbWVudFNwcmVhZCcpIHtcbiAgICAgICAgICAgIGFsbEZyYWdtZW50cy5wdXNoKHNlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWxsRnJhZ21lbnRzO1xufVxuZnVuY3Rpb24gYnVpbGRRdWVyeUZyb21TZWxlY3Rpb25TZXQoZG9jdW1lbnQpIHtcbiAgICB2YXIgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKGRvY3VtZW50KTtcbiAgICB2YXIgZGVmaW5pdGlvbk9wZXJhdGlvbiA9IGRlZmluaXRpb24ub3BlcmF0aW9uO1xuICAgIGlmIChkZWZpbml0aW9uT3BlcmF0aW9uID09PSAncXVlcnknKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9XG4gICAgdmFyIG1vZGlmaWVkRG9jID0gZ3JhcGhxbC52aXNpdChkb2N1bWVudCwge1xuICAgICAgICBPcGVyYXRpb25EZWZpbml0aW9uOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG5vZGUpLCB7IG9wZXJhdGlvbjogJ3F1ZXJ5JyB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIG1vZGlmaWVkRG9jO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2xpZW50U2V0c0Zyb21Eb2N1bWVudChkb2N1bWVudCkge1xuICAgIGNoZWNrRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgIHZhciBtb2RpZmllZERvYyA9IHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQoW1xuICAgICAgICB7XG4gICAgICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoZGlyZWN0aXZlKSB7IHJldHVybiBkaXJlY3RpdmUubmFtZS52YWx1ZSA9PT0gJ2NsaWVudCc7IH0sXG4gICAgICAgICAgICByZW1vdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSwgZG9jdW1lbnQpO1xuICAgIGlmIChtb2RpZmllZERvYykge1xuICAgICAgICBtb2RpZmllZERvYyA9IGdyYXBocWwudmlzaXQobW9kaWZpZWREb2MsIHtcbiAgICAgICAgICAgIEZyYWdtZW50RGVmaW5pdGlvbjoge1xuICAgICAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1R5cGVuYW1lT25seSA9IG5vZGUuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZXZlcnkoZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc0ZpZWxkKHNlbGVjdGlvbikgJiYgc2VsZWN0aW9uLm5hbWUudmFsdWUgPT09ICdfX3R5cGVuYW1lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVHlwZW5hbWVPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtb2RpZmllZERvYztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIG1lcmdlRGVlcCgpIHtcbiAgICB2YXIgc291cmNlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHNvdXJjZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlRGVlcEFycmF5KHNvdXJjZXMpO1xufVxuZnVuY3Rpb24gbWVyZ2VEZWVwQXJyYXkoc291cmNlcykge1xuICAgIHZhciB0YXJnZXQgPSBzb3VyY2VzWzBdIHx8IHt9O1xuICAgIHZhciBjb3VudCA9IHNvdXJjZXMubGVuZ3RoO1xuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgICAgdmFyIG1lcmdlciA9IG5ldyBEZWVwTWVyZ2VyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbWVyZ2VyLm1lcmdlKHRhcmdldCwgc291cmNlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbnZhciBkZWZhdWx0UmVjb25jaWxlciA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5tZXJnZSh0YXJnZXRbcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbn07XG52YXIgRGVlcE1lcmdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVlcE1lcmdlcihyZWNvbmNpbGVyKSB7XG4gICAgICAgIGlmIChyZWNvbmNpbGVyID09PSB2b2lkIDApIHsgcmVjb25jaWxlciA9IGRlZmF1bHRSZWNvbmNpbGVyOyB9XG4gICAgICAgIHRoaXMucmVjb25jaWxlciA9IHJlY29uY2lsZXI7XG4gICAgICAgIHRoaXMuaXNPYmplY3QgPSBpc05vbk51bGxPYmplY3Q7XG4gICAgICAgIHRoaXMucGFzdENvcGllcyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgRGVlcE1lcmdlci5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNvbnRleHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTm9uTnVsbE9iamVjdChzb3VyY2UpICYmIGlzTm9uTnVsbE9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZUtleSkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgc291cmNlS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VmFsdWUgPSB0YXJnZXRbc291cmNlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZVtzb3VyY2VLZXldICE9PSB0YXJnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF90aGlzLnJlY29uY2lsZXIuYXBwbHkoX3RoaXMsIHRzbGliLl9fc3ByZWFkQXJyYXkoW3RhcmdldCwgc291cmNlLCBzb3VyY2VLZXldLCBjb250ZXh0LCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdGFyZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBfdGhpcy5zaGFsbG93Q29weUZvck1lcmdlKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZUtleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IF90aGlzLnNoYWxsb3dDb3B5Rm9yTWVyZ2UodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZUtleV0gPSBzb3VyY2Vbc291cmNlS2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9O1xuICAgIERlZXBNZXJnZXIucHJvdG90eXBlLnNoYWxsb3dDb3B5Rm9yTWVyZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXN0Q29waWVzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHNsaWIuX19hc3NpZ24oeyBfX3Byb3RvX186IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSkgfSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBhc3RDb3BpZXMuYWRkKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICByZXR1cm4gRGVlcE1lcmdlcjtcbn0oKSk7XG5cbmZ1bmN0aW9uIGNvbmNhdFBhZ2luYXRpb24oa2V5QXJncykge1xuICAgIGlmIChrZXlBcmdzID09PSB2b2lkIDApIHsga2V5QXJncyA9IGZhbHNlOyB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5QXJnczoga2V5QXJncyxcbiAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZyA/IHRzbGliLl9fc3ByZWFkQXJyYXkodHNsaWIuX19zcHJlYWRBcnJheShbXSwgZXhpc3RpbmcsIHRydWUpLCBpbmNvbWluZywgdHJ1ZSkgOiBpbmNvbWluZztcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZnVuY3Rpb24gb2Zmc2V0TGltaXRQYWdpbmF0aW9uKGtleUFyZ3MpIHtcbiAgICBpZiAoa2V5QXJncyA9PT0gdm9pZCAwKSB7IGtleUFyZ3MgPSBmYWxzZTsgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGtleUFyZ3M6IGtleUFyZ3MsXG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nLCBfYSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBfYS5hcmdzO1xuICAgICAgICAgICAgdmFyIG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcbiAgICAgICAgICAgIGlmIChpbmNvbWluZykge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IGFyZ3Mub2Zmc2V0LCBvZmZzZXQgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluY29taW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWRbb2Zmc2V0ICsgaV0gPSBpbmNvbWluZ1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VkLnB1c2guYXBwbHkobWVyZ2VkLCBpbmNvbWluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVsYXlTdHlsZVBhZ2luYXRpb24oa2V5QXJncykge1xuICAgIGlmIChrZXlBcmdzID09PSB2b2lkIDApIHsga2V5QXJncyA9IGZhbHNlOyB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5QXJnczoga2V5QXJncyxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gKGV4aXN0aW5nLCBfYSkge1xuICAgICAgICAgICAgdmFyIGNhblJlYWQgPSBfYS5jYW5SZWFkLCByZWFkRmllbGQgPSBfYS5yZWFkRmllbGQ7XG4gICAgICAgICAgICBpZiAoIWV4aXN0aW5nKVxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZztcbiAgICAgICAgICAgIHZhciBlZGdlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIGZpcnN0RWRnZUN1cnNvciA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgbGFzdEVkZ2VDdXJzb3IgPSBcIlwiO1xuICAgICAgICAgICAgZXhpc3RpbmcuZWRnZXMuZm9yRWFjaChmdW5jdGlvbiAoZWRnZSkge1xuICAgICAgICAgICAgICAgIGlmIChjYW5SZWFkKHJlYWRGaWVsZChcIm5vZGVcIiwgZWRnZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVkZ2VzLnB1c2goZWRnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlZGdlLmN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RFZGdlQ3Vyc29yID0gZmlyc3RFZGdlQ3Vyc29yIHx8IGVkZ2UuY3Vyc29yIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0RWRnZUN1cnNvciA9IGVkZ2UuY3Vyc29yIHx8IGxhc3RFZGdlQ3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgX2IgPSBleGlzdGluZy5wYWdlSW5mbyB8fCB7fSwgc3RhcnRDdXJzb3IgPSBfYi5zdGFydEN1cnNvciwgZW5kQ3Vyc29yID0gX2IuZW5kQ3Vyc29yO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBnZXRFeHRyYXMoZXhpc3RpbmcpKSwgeyBlZGdlczogZWRnZXMsIHBhZ2VJbmZvOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZXhpc3RpbmcucGFnZUluZm8pLCB7IHN0YXJ0Q3Vyc29yOiBzdGFydEN1cnNvciB8fCBmaXJzdEVkZ2VDdXJzb3IsIGVuZEN1cnNvcjogZW5kQ3Vyc29yIHx8IGxhc3RFZGdlQ3Vyc29yIH0pIH0pO1xuICAgICAgICB9LFxuICAgICAgICBtZXJnZTogZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZywgX2EpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gX2EuYXJncywgaXNSZWZlcmVuY2UgPSBfYS5pc1JlZmVyZW5jZSwgcmVhZEZpZWxkID0gX2EucmVhZEZpZWxkO1xuICAgICAgICAgICAgaWYgKCFleGlzdGluZykge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nID0gbWFrZUVtcHR5RGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpbmNvbWluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbmNvbWluZ0VkZ2VzID0gaW5jb21pbmcuZWRnZXMgPyBpbmNvbWluZy5lZGdlcy5tYXAoZnVuY3Rpb24gKGVkZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNSZWZlcmVuY2UoZWRnZSA9IHRzbGliLl9fYXNzaWduKHt9LCBlZGdlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRnZS5jdXJzb3IgPSByZWFkRmllbGQoXCJjdXJzb3JcIiwgZWRnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlZGdlO1xuICAgICAgICAgICAgfSkgOiBbXTtcbiAgICAgICAgICAgIGlmIChpbmNvbWluZy5wYWdlSW5mbykge1xuICAgICAgICAgICAgICAgIHZhciBwYWdlSW5mb18xID0gaW5jb21pbmcucGFnZUluZm87XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0Q3Vyc29yID0gcGFnZUluZm9fMS5zdGFydEN1cnNvciwgZW5kQ3Vyc29yID0gcGFnZUluZm9fMS5lbmRDdXJzb3I7XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0RWRnZSA9IGluY29taW5nRWRnZXNbMF07XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RFZGdlID0gaW5jb21pbmdFZGdlc1tpbmNvbWluZ0VkZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdEVkZ2UgJiYgc3RhcnRDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RFZGdlLmN1cnNvciA9IHN0YXJ0Q3Vyc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGFzdEVkZ2UgJiYgZW5kQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RFZGdlLmN1cnNvciA9IGVuZEN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0Q3Vyc29yID0gZmlyc3RFZGdlICYmIGZpcnN0RWRnZS5jdXJzb3I7XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0Q3Vyc29yICYmICFzdGFydEN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBpbmNvbWluZyA9IG1lcmdlRGVlcChpbmNvbWluZywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEN1cnNvcjogZmlyc3RDdXJzb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RDdXJzb3IgPSBsYXN0RWRnZSAmJiBsYXN0RWRnZS5jdXJzb3I7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RDdXJzb3IgJiYgIWVuZEN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBpbmNvbWluZyA9IG1lcmdlRGVlcChpbmNvbWluZywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRDdXJzb3I6IGxhc3RDdXJzb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXhpc3RpbmcuZWRnZXM7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gW107XG4gICAgICAgICAgICBpZiAoYXJncyAmJiBhcmdzLmFmdGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcHJlZml4LmZpbmRJbmRleChmdW5jdGlvbiAoZWRnZSkgeyByZXR1cm4gZWRnZS5jdXJzb3IgPT09IGFyZ3MuYWZ0ZXI7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCA9IHByZWZpeC5zbGljZSgwLCBpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZ3MgJiYgYXJncy5iZWZvcmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwcmVmaXguZmluZEluZGV4KGZ1bmN0aW9uIChlZGdlKSB7IHJldHVybiBlZGdlLmN1cnNvciA9PT0gYXJncy5iZWZvcmU7IH0pO1xuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IGluZGV4IDwgMCA/IHByZWZpeCA6IHByZWZpeC5zbGljZShpbmRleCk7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmNvbWluZy5lZGdlcykge1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGVkZ2VzID0gdHNsaWIuX19zcHJlYWRBcnJheSh0c2xpYi5fX3NwcmVhZEFycmF5KHRzbGliLl9fc3ByZWFkQXJyYXkoW10sIHByZWZpeCwgdHJ1ZSksIGluY29taW5nRWRnZXMsIHRydWUpLCBzdWZmaXgsIHRydWUpO1xuICAgICAgICAgICAgdmFyIHBhZ2VJbmZvID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGluY29taW5nLnBhZ2VJbmZvKSwgZXhpc3RpbmcucGFnZUluZm8pO1xuICAgICAgICAgICAgaWYgKGluY29taW5nLnBhZ2VJbmZvKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gaW5jb21pbmcucGFnZUluZm8sIGhhc1ByZXZpb3VzUGFnZSA9IF9iLmhhc1ByZXZpb3VzUGFnZSwgaGFzTmV4dFBhZ2UgPSBfYi5oYXNOZXh0UGFnZSwgc3RhcnRDdXJzb3IgPSBfYi5zdGFydEN1cnNvciwgZW5kQ3Vyc29yID0gX2IuZW5kQ3Vyc29yLCBleHRyYXMgPSB0c2xpYi5fX3Jlc3QoX2IsIFtcImhhc1ByZXZpb3VzUGFnZVwiLCBcImhhc05leHRQYWdlXCIsIFwic3RhcnRDdXJzb3JcIiwgXCJlbmRDdXJzb3JcIl0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocGFnZUluZm8sIGV4dHJhcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcmVmaXgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGhhc1ByZXZpb3VzUGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvLmhhc1ByZXZpb3VzUGFnZSA9IGhhc1ByZXZpb3VzUGFnZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gc3RhcnRDdXJzb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mby5zdGFydEN1cnNvciA9IHN0YXJ0Q3Vyc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXN1ZmZpeC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaGFzTmV4dFBhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mby5oYXNOZXh0UGFnZSA9IGhhc05leHRQYWdlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBlbmRDdXJzb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mby5lbmRDdXJzb3IgPSBlbmRDdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBnZXRFeHRyYXMoZXhpc3RpbmcpKSwgZ2V0RXh0cmFzKGluY29taW5nKSksIHsgZWRnZXM6IGVkZ2VzLCBwYWdlSW5mbzogcGFnZUluZm8gfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbnZhciBnZXRFeHRyYXMgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0c2xpYi5fX3Jlc3Qob2JqLCBub3RFeHRyYXMpOyB9O1xudmFyIG5vdEV4dHJhcyA9IFtcImVkZ2VzXCIsIFwicGFnZUluZm9cIl07XG5mdW5jdGlvbiBtYWtlRW1wdHlEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVkZ2VzOiBbXSxcbiAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgIGhhc1ByZXZpb3VzUGFnZTogZmFsc2UsXG4gICAgICAgICAgICBoYXNOZXh0UGFnZTogdHJ1ZSxcbiAgICAgICAgICAgIHN0YXJ0Q3Vyc29yOiBcIlwiLFxuICAgICAgICAgICAgZW5kQ3Vyc29yOiBcIlwiLFxuICAgICAgICB9LFxuICAgIH07XG59XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgICByZXR1cm4gY2xvbmVEZWVwSGVscGVyKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGNsb25lRGVlcEhlbHBlcih2YWwsIHNlZW4pIHtcbiAgICBzd2l0Y2ggKHRvU3RyaW5nLmNhbGwodmFsKSkge1xuICAgICAgICBjYXNlIFwiW29iamVjdCBBcnJheV1cIjoge1xuICAgICAgICAgICAgc2VlbiA9IHNlZW4gfHwgbmV3IE1hcDtcbiAgICAgICAgICAgIGlmIChzZWVuLmhhcyh2YWwpKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWVuLmdldCh2YWwpO1xuICAgICAgICAgICAgdmFyIGNvcHlfMSA9IHZhbC5zbGljZSgwKTtcbiAgICAgICAgICAgIHNlZW4uc2V0KHZhbCwgY29weV8xKTtcbiAgICAgICAgICAgIGNvcHlfMS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvcHlfMVtpXSA9IGNsb25lRGVlcEhlbHBlcihjaGlsZCwgc2Vlbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5XzE7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIltvYmplY3QgT2JqZWN0XVwiOiB7XG4gICAgICAgICAgICBzZWVuID0gc2VlbiB8fCBuZXcgTWFwO1xuICAgICAgICAgICAgaWYgKHNlZW4uaGFzKHZhbCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlZW4uZ2V0KHZhbCk7XG4gICAgICAgICAgICB2YXIgY29weV8yID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKSk7XG4gICAgICAgICAgICBzZWVuLnNldCh2YWwsIGNvcHlfMik7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2YWwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGNvcHlfMltrZXldID0gY2xvbmVEZWVwSGVscGVyKHZhbFtrZXldLCBzZWVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHlfMjtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlZXBGcmVlemUodmFsdWUpIHtcbiAgICB2YXIgd29ya1NldCA9IG5ldyBTZXQoW3ZhbHVlXSk7XG4gICAgd29ya1NldC5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgaWYgKGlzTm9uTnVsbE9iamVjdChvYmopICYmIHNoYWxsb3dGcmVlemUob2JqKSA9PT0gb2JqKSB7XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KG9ialtuYW1lXSkpXG4gICAgICAgICAgICAgICAgICAgIHdvcmtTZXQuYWRkKG9ialtuYW1lXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNoYWxsb3dGcmVlemUob2JqKSB7XG4gICAgaWYgKF9fREVWX18gJiYgIU9iamVjdC5pc0Zyb3plbihvYmopKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBPYmplY3QuZnJlZXplKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgVHlwZUVycm9yKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gbWF5YmVEZWVwRnJlZXplKG9iaikge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGRlZXBGcmVlemUob2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gaXRlcmF0ZU9ic2VydmVyc1NhZmVseShvYnNlcnZlcnMsIG1ldGhvZCwgYXJndW1lbnQpIHtcbiAgICB2YXIgb2JzZXJ2ZXJzV2l0aE1ldGhvZCA9IFtdO1xuICAgIG9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnMpIHsgcmV0dXJuIG9ic1ttZXRob2RdICYmIG9ic2VydmVyc1dpdGhNZXRob2QucHVzaChvYnMpOyB9KTtcbiAgICBvYnNlcnZlcnNXaXRoTWV0aG9kLmZvckVhY2goZnVuY3Rpb24gKG9icykgeyByZXR1cm4gb2JzW21ldGhvZF0oYXJndW1lbnQpOyB9KTtcbn1cblxuZnVuY3Rpb24gYXN5bmNNYXAob2JzZXJ2YWJsZSwgbWFwRm4sIGNhdGNoRm4pIHtcbiAgICByZXR1cm4gbmV3IHplbk9ic2VydmFibGVUcy5PYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICB2YXIgbmV4dCA9IG9ic2VydmVyLm5leHQsIGVycm9yID0gb2JzZXJ2ZXIuZXJyb3IsIGNvbXBsZXRlID0gb2JzZXJ2ZXIuY29tcGxldGU7XG4gICAgICAgIHZhciBhY3RpdmVDYWxsYmFja0NvdW50ID0gMDtcbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgcHJvbWlzZVF1ZXVlID0ge1xuICAgICAgICAgICAgdGhlbjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiByZXNvbHZlKGNhbGxiYWNrKCkpOyB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VDYWxsYmFjayhleGFtaW5lciwgZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIGlmIChleGFtaW5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICsrYWN0aXZlQ2FsbGJhY2tDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvdGggPSBmdW5jdGlvbiAoKSB7IHJldHVybiBleGFtaW5lcihhcmcpOyB9O1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlUXVldWUgPSBwcm9taXNlUXVldWUudGhlbihib3RoLCBib3RoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYWN0aXZlQ2FsbGJhY2tDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgJiYgbmV4dC5jYWxsKG9ic2VydmVyLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLWFjdGl2ZUNhbGxiYWNrQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGNhdWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgJiYgZXJyb3IuY2FsbChvYnNlcnZlciwgY2F1Z2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBkZWxlZ2F0ZSAmJiBkZWxlZ2F0ZS5jYWxsKG9ic2VydmVyLCBhcmcpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBoYW5kbGVyID0ge1xuICAgICAgICAgICAgbmV4dDogbWFrZUNhbGxiYWNrKG1hcEZuLCBuZXh0KSxcbiAgICAgICAgICAgIGVycm9yOiBtYWtlQ2FsbGJhY2soY2F0Y2hGbiwgZXJyb3IpLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlQ2FsbGJhY2tDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSAmJiBjb21wbGV0ZS5jYWxsKG9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgc3ViID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoaGFuZGxlcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWIudW5zdWJzY3JpYmUoKTsgfTtcbiAgICB9KTtcbn1cblxudmFyIGNhblVzZVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGdsb2JhbHMubWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF2aWdhdG9yLnByb2R1Y3Q7IH0pICE9PSAnUmVhY3ROYXRpdmUnO1xudmFyIGNhblVzZVdlYWtTZXQgPSB0eXBlb2YgV2Vha1NldCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIFN5bWJvbC5mb3IgPT09ICdmdW5jdGlvbic7XG52YXIgY2FuVXNlQXN5bmNJdGVyYXRvclN5bWJvbCA9IGNhblVzZVN5bWJvbCAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcjtcbnZhciBjYW5Vc2VET00gPSB0eXBlb2YgZ2xvYmFscy5tYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudDsgfSkgPT09IFwiZnVuY3Rpb25cIjtcbnZhciB1c2luZ0pTRE9NID0gZ2xvYmFscy5tYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJqc2RvbVwiKSA+PSAwOyB9KSB8fCBmYWxzZTtcbnZhciBjYW5Vc2VMYXlvdXRFZmZlY3QgPSBjYW5Vc2VET00gJiYgIXVzaW5nSlNET007XG5cbmZ1bmN0aW9uIGZpeE9ic2VydmFibGVTdWJjbGFzcyhzdWJjbGFzcykge1xuICAgIGZ1bmN0aW9uIHNldChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YmNsYXNzLCBrZXksIHsgdmFsdWU6IHplbk9ic2VydmFibGVUcy5PYnNlcnZhYmxlIH0pO1xuICAgIH1cbiAgICBpZiAoY2FuVXNlU3ltYm9sICYmIFN5bWJvbC5zcGVjaWVzKSB7XG4gICAgICAgIHNldChTeW1ib2wuc3BlY2llcyk7XG4gICAgfVxuICAgIHNldChcIkBAc3BlY2llc1wiKTtcbiAgICByZXR1cm4gc3ViY2xhc3M7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZUxpa2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbn1cbnZhciBDb25jYXN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoQ29uY2FzdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb25jYXN0KHNvdXJjZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGRPYnNlcnZlcihvYnNlcnZlcik7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXIpOyB9O1xuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIF90aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLmhhbmRsZXJzID0ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zdWIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF0ZXN0ID0gW1wibmV4dFwiLCByZXN1bHRdO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ub3RpZnkoXCJuZXh0XCIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkoX3RoaXMub2JzZXJ2ZXJzLCBcIm5leHRcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBfdGhpcy5zdWI7XG4gICAgICAgICAgICAgICAgaWYgKHN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBzdWIudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN1YiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhdGVzdCA9IFtcImVycm9yXCIsIGVycm9yXTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubm90aWZ5KFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5KF90aGlzLm9ic2VydmVycywgXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMsIHN1YiA9IF9hLnN1YiwgX2IgPSBfYS5zb3VyY2VzLCBzb3VyY2VzID0gX2IgPT09IHZvaWQgMCA/IFtdIDogX2I7XG4gICAgICAgICAgICAgICAgaWYgKHN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBzdWIudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmxhdGVzdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxhdGVzdFswXSA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlKF90aGlzLmxhdGVzdFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ub3RpZnkoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkoX3RoaXMub2JzZXJ2ZXJzLCBcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzUHJvbWlzZUxpa2UodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKGZ1bmN0aW9uIChvYnMpIHsgcmV0dXJuIF90aGlzLnN1YiA9IG9icy5zdWJzY3JpYmUoX3RoaXMuaGFuZGxlcnMpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN1YiA9IHZhbHVlLnN1YnNjcmliZShfdGhpcy5oYW5kbGVycyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5uZXh0UmVzdWx0TGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5jYW5jZWwgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWplY3QocmVhc29uKTtcbiAgICAgICAgICAgIF90aGlzLnNvdXJjZXMgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZXJzLmNvbXBsZXRlKCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnByb21pc2UuY2F0Y2goZnVuY3Rpb24gKF8pIHsgfSk7XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBzb3VyY2VzID0gW25ldyB6ZW5PYnNlcnZhYmxlVHMuT2JzZXJ2YWJsZShzb3VyY2VzKV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJvbWlzZUxpa2Uoc291cmNlcykpIHtcbiAgICAgICAgICAgIHNvdXJjZXMudGhlbihmdW5jdGlvbiAoaXRlcmFibGUpIHsgcmV0dXJuIF90aGlzLnN0YXJ0KGl0ZXJhYmxlKTsgfSwgX3RoaXMuaGFuZGxlcnMuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuc3RhcnQoc291cmNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb25jYXN0LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChzb3VyY2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YiAhPT0gdm9pZCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnNvdXJjZXMgPSBBcnJheS5mcm9tKHNvdXJjZXMpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICBDb25jYXN0LnByb3RvdHlwZS5kZWxpdmVyTGFzdE1lc3NhZ2UgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubGF0ZXN0KSB7XG4gICAgICAgICAgICB2YXIgbmV4dE9yRXJyb3IgPSB0aGlzLmxhdGVzdFswXTtcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBvYnNlcnZlcltuZXh0T3JFcnJvcl07XG4gICAgICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmNhbGwob2JzZXJ2ZXIsIHRoaXMubGF0ZXN0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN1YiA9PT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIG5leHRPckVycm9yID09PSBcIm5leHRcIiAmJlxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29uY2FzdC5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9ic2VydmVycy5oYXMob2JzZXJ2ZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGl2ZXJMYXN0TWVzc2FnZShvYnNlcnZlcik7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25jYXN0LnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKSAmJlxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuc2l6ZSA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29uY2FzdC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICAgIHZhciBuZXh0UmVzdWx0TGlzdGVuZXJzID0gdGhpcy5uZXh0UmVzdWx0TGlzdGVuZXJzO1xuICAgICAgICBpZiAobmV4dFJlc3VsdExpc3RlbmVycy5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRSZXN1bHRMaXN0ZW5lcnMgPSBuZXcgU2V0O1xuICAgICAgICAgICAgbmV4dFJlc3VsdExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIobWV0aG9kLCBhcmcpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29uY2FzdC5wcm90b3R5cGUuYmVmb3JlTmV4dCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmV4dFJlc3VsdExpc3RlbmVycy5hZGQoZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWV0aG9kLCBhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDb25jYXN0O1xufSh6ZW5PYnNlcnZhYmxlVHMuT2JzZXJ2YWJsZSkpO1xuZml4T2JzZXJ2YWJsZVN1YmNsYXNzKENvbmNhc3QpO1xuXG5mdW5jdGlvbiBpc05vbkVtcHR5QXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gaXNFeGVjdXRpb25QYXRjaEluY3JlbWVudGFsUmVzdWx0KHZhbHVlKSB7XG4gICAgcmV0dXJuIFwiaW5jcmVtZW50YWxcIiBpbiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHJlc3VsdCkge1xuICAgIHZhciBlcnJvcnMgPSBnZXRHcmFwaFFMRXJyb3JzRnJvbVJlc3VsdChyZXN1bHQpO1xuICAgIHJldHVybiBpc05vbkVtcHR5QXJyYXkoZXJyb3JzKTtcbn1cbmZ1bmN0aW9uIGdldEdyYXBoUUxFcnJvcnNGcm9tUmVzdWx0KHJlc3VsdCkge1xuICAgIHZhciBncmFwaFFMRXJyb3JzID0gaXNOb25FbXB0eUFycmF5KHJlc3VsdC5lcnJvcnMpXG4gICAgICAgID8gcmVzdWx0LmVycm9ycy5zbGljZSgwKVxuICAgICAgICA6IFtdO1xuICAgIGlmIChpc0V4ZWN1dGlvblBhdGNoSW5jcmVtZW50YWxSZXN1bHQocmVzdWx0KSAmJlxuICAgICAgICBpc05vbkVtcHR5QXJyYXkocmVzdWx0LmluY3JlbWVudGFsKSkge1xuICAgICAgICByZXN1bHQuaW5jcmVtZW50YWwuZm9yRWFjaChmdW5jdGlvbiAoaW5jcmVtZW50YWxSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnRhbFJlc3VsdC5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzLnB1c2guYXBwbHkoZ3JhcGhRTEVycm9ycywgaW5jcmVtZW50YWxSZXN1bHQuZXJyb3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBncmFwaFFMRXJyb3JzO1xufVxuXG5mdW5jdGlvbiBjb21wYWN0KCkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgb2JqZWN0c1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBvYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoIW9iailcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG52YXIgcHJlZml4Q291bnRzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gbWFrZVVuaXF1ZUlkKHByZWZpeCkge1xuICAgIHZhciBjb3VudCA9IHByZWZpeENvdW50cy5nZXQocHJlZml4KSB8fCAxO1xuICAgIHByZWZpeENvdW50cy5zZXQocHJlZml4LCBjb3VudCArIDEpO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChwcmVmaXgsIFwiOlwiKS5jb25jYXQoY291bnQsIFwiOlwiKS5jb25jYXQoTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMikpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlGb3JEaXNwbGF5KHZhbHVlKSB7XG4gICAgdmFyIHVuZGVmSWQgPSBtYWtlVW5pcXVlSWQoXCJzdHJpbmdpZnlGb3JEaXNwbGF5XCIpO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB2b2lkIDAgPyB1bmRlZklkIDogdmFsdWU7XG4gICAgfSkuc3BsaXQoSlNPTi5zdHJpbmdpZnkodW5kZWZJZCkpLmpvaW4oXCI8dW5kZWZpbmVkPlwiKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbXBhY3QoZGVmYXVsdHMsIG9wdGlvbnMsIG9wdGlvbnMudmFyaWFibGVzICYmIHtcbiAgICAgICAgdmFyaWFibGVzOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgKGRlZmF1bHRzICYmIGRlZmF1bHRzLnZhcmlhYmxlcykpLCBvcHRpb25zLnZhcmlhYmxlcyksXG4gICAgfSk7XG59XG5cbmV4cG9ydHMuREVWID0gZ2xvYmFscy5ERVY7XG5leHBvcnRzLm1heWJlID0gZ2xvYmFscy5tYXliZTtcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IHplbk9ic2VydmFibGVUcy5PYnNlcnZhYmxlO1xuZXhwb3J0cy5Db25jYXN0ID0gQ29uY2FzdDtcbmV4cG9ydHMuRGVlcE1lcmdlciA9IERlZXBNZXJnZXI7XG5leHBvcnRzLmFkZFR5cGVuYW1lVG9Eb2N1bWVudCA9IGFkZFR5cGVuYW1lVG9Eb2N1bWVudDtcbmV4cG9ydHMuYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkID0gYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkO1xuZXhwb3J0cy5hc3luY01hcCA9IGFzeW5jTWFwO1xuZXhwb3J0cy5idWlsZFF1ZXJ5RnJvbVNlbGVjdGlvblNldCA9IGJ1aWxkUXVlcnlGcm9tU2VsZWN0aW9uU2V0O1xuZXhwb3J0cy5jYW5Vc2VBc3luY0l0ZXJhdG9yU3ltYm9sID0gY2FuVXNlQXN5bmNJdGVyYXRvclN5bWJvbDtcbmV4cG9ydHMuY2FuVXNlRE9NID0gY2FuVXNlRE9NO1xuZXhwb3J0cy5jYW5Vc2VMYXlvdXRFZmZlY3QgPSBjYW5Vc2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLmNhblVzZVN5bWJvbCA9IGNhblVzZVN5bWJvbDtcbmV4cG9ydHMuY2FuVXNlV2Vha01hcCA9IGNhblVzZVdlYWtNYXA7XG5leHBvcnRzLmNhblVzZVdlYWtTZXQgPSBjYW5Vc2VXZWFrU2V0O1xuZXhwb3J0cy5jaGVja0RvY3VtZW50ID0gY2hlY2tEb2N1bWVudDtcbmV4cG9ydHMuY2xvbmVEZWVwID0gY2xvbmVEZWVwO1xuZXhwb3J0cy5jb21wYWN0ID0gY29tcGFjdDtcbmV4cG9ydHMuY29uY2F0UGFnaW5hdGlvbiA9IGNvbmNhdFBhZ2luYXRpb247XG5leHBvcnRzLmNyZWF0ZUZyYWdtZW50TWFwID0gY3JlYXRlRnJhZ21lbnRNYXA7XG5leHBvcnRzLmZpeE9ic2VydmFibGVTdWJjbGFzcyA9IGZpeE9ic2VydmFibGVTdWJjbGFzcztcbmV4cG9ydHMuZ2V0RGVmYXVsdFZhbHVlcyA9IGdldERlZmF1bHRWYWx1ZXM7XG5leHBvcnRzLmdldERpcmVjdGl2ZU5hbWVzID0gZ2V0RGlyZWN0aXZlTmFtZXM7XG5leHBvcnRzLmdldEZyYWdtZW50RGVmaW5pdGlvbiA9IGdldEZyYWdtZW50RGVmaW5pdGlvbjtcbmV4cG9ydHMuZ2V0RnJhZ21lbnREZWZpbml0aW9ucyA9IGdldEZyYWdtZW50RGVmaW5pdGlvbnM7XG5leHBvcnRzLmdldEZyYWdtZW50RnJvbVNlbGVjdGlvbiA9IGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbjtcbmV4cG9ydHMuZ2V0RnJhZ21lbnRRdWVyeURvY3VtZW50ID0gZ2V0RnJhZ21lbnRRdWVyeURvY3VtZW50O1xuZXhwb3J0cy5nZXRHcmFwaFFMRXJyb3JzRnJvbVJlc3VsdCA9IGdldEdyYXBoUUxFcnJvcnNGcm9tUmVzdWx0O1xuZXhwb3J0cy5nZXRJbmNsdXNpb25EaXJlY3RpdmVzID0gZ2V0SW5jbHVzaW9uRGlyZWN0aXZlcztcbmV4cG9ydHMuZ2V0TWFpbkRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbjtcbmV4cG9ydHMuZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbiA9IGdldE9wZXJhdGlvbkRlZmluaXRpb247XG5leHBvcnRzLmdldE9wZXJhdGlvbk5hbWUgPSBnZXRPcGVyYXRpb25OYW1lO1xuZXhwb3J0cy5nZXRRdWVyeURlZmluaXRpb24gPSBnZXRRdWVyeURlZmluaXRpb247XG5leHBvcnRzLmdldFN0b3JlS2V5TmFtZSA9IGdldFN0b3JlS2V5TmFtZTtcbmV4cG9ydHMuZ2V0VHlwZW5hbWVGcm9tUmVzdWx0ID0gZ2V0VHlwZW5hbWVGcm9tUmVzdWx0O1xuZXhwb3J0cy5ncmFwaFFMUmVzdWx0SGFzRXJyb3IgPSBncmFwaFFMUmVzdWx0SGFzRXJyb3I7XG5leHBvcnRzLmhhc0FsbERpcmVjdGl2ZXMgPSBoYXNBbGxEaXJlY3RpdmVzO1xuZXhwb3J0cy5oYXNBbnlEaXJlY3RpdmVzID0gaGFzQW55RGlyZWN0aXZlcztcbmV4cG9ydHMuaGFzQ2xpZW50RXhwb3J0cyA9IGhhc0NsaWVudEV4cG9ydHM7XG5leHBvcnRzLmhhc0RpcmVjdGl2ZXMgPSBoYXNEaXJlY3RpdmVzO1xuZXhwb3J0cy5pc0RvY3VtZW50Tm9kZSA9IGlzRG9jdW1lbnROb2RlO1xuZXhwb3J0cy5pc0ZpZWxkID0gaXNGaWVsZDtcbmV4cG9ydHMuaXNJbmxpbmVGcmFnbWVudCA9IGlzSW5saW5lRnJhZ21lbnQ7XG5leHBvcnRzLmlzTm9uRW1wdHlBcnJheSA9IGlzTm9uRW1wdHlBcnJheTtcbmV4cG9ydHMuaXNOb25OdWxsT2JqZWN0ID0gaXNOb25OdWxsT2JqZWN0O1xuZXhwb3J0cy5pc1JlZmVyZW5jZSA9IGlzUmVmZXJlbmNlO1xuZXhwb3J0cy5pdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5ID0gaXRlcmF0ZU9ic2VydmVyc1NhZmVseTtcbmV4cG9ydHMubWFrZVJlZmVyZW5jZSA9IG1ha2VSZWZlcmVuY2U7XG5leHBvcnRzLm1ha2VVbmlxdWVJZCA9IG1ha2VVbmlxdWVJZDtcbmV4cG9ydHMubWF5YmVEZWVwRnJlZXplID0gbWF5YmVEZWVwRnJlZXplO1xuZXhwb3J0cy5tZXJnZURlZXAgPSBtZXJnZURlZXA7XG5leHBvcnRzLm1lcmdlRGVlcEFycmF5ID0gbWVyZ2VEZWVwQXJyYXk7XG5leHBvcnRzLm1lcmdlT3B0aW9ucyA9IG1lcmdlT3B0aW9ucztcbmV4cG9ydHMub2Zmc2V0TGltaXRQYWdpbmF0aW9uID0gb2Zmc2V0TGltaXRQYWdpbmF0aW9uO1xuZXhwb3J0cy5yZWxheVN0eWxlUGFnaW5hdGlvbiA9IHJlbGF5U3R5bGVQYWdpbmF0aW9uO1xuZXhwb3J0cy5yZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQgPSByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQ7XG5leHBvcnRzLnJlbW92ZUNsaWVudFNldHNGcm9tRG9jdW1lbnQgPSByZW1vdmVDbGllbnRTZXRzRnJvbURvY3VtZW50O1xuZXhwb3J0cy5yZW1vdmVDb25uZWN0aW9uRGlyZWN0aXZlRnJvbURvY3VtZW50ID0gcmVtb3ZlQ29ubmVjdGlvbkRpcmVjdGl2ZUZyb21Eb2N1bWVudDtcbmV4cG9ydHMucmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudCA9IHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQ7XG5leHBvcnRzLnJlbW92ZUZyYWdtZW50U3ByZWFkRnJvbURvY3VtZW50ID0gcmVtb3ZlRnJhZ21lbnRTcHJlYWRGcm9tRG9jdW1lbnQ7XG5leHBvcnRzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQgPSByZXN1bHRLZXlOYW1lRnJvbUZpZWxkO1xuZXhwb3J0cy5zaG91bGRJbmNsdWRlID0gc2hvdWxkSW5jbHVkZTtcbmV4cG9ydHMuc3RvcmVLZXlOYW1lRnJvbUZpZWxkID0gc3RvcmVLZXlOYW1lRnJvbUZpZWxkO1xuZXhwb3J0cy5zdHJpbmdpZnlGb3JEaXNwbGF5ID0gc3RyaW5naWZ5Rm9yRGlzcGxheTtcbmV4cG9ydHMudmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uID0gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbGl0aWVzLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcblxudmFyIGdlbmVyaWNNZXNzYWdlID0gXCJJbnZhcmlhbnQgVmlvbGF0aW9uXCI7XG52YXIgX2EgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YsIHNldFByb3RvdHlwZU9mID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChvYmosIHByb3RvKSB7XG4gICAgb2JqLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBvYmo7XG59IDogX2E7XG52YXIgSW52YXJpYW50RXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKEludmFyaWFudEVycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludmFyaWFudEVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IHZvaWQgMCkgeyBtZXNzYWdlID0gZ2VuZXJpY01lc3NhZ2U7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHlwZW9mIG1lc3NhZ2UgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgID8gZ2VuZXJpY01lc3NhZ2UgKyBcIjogXCIgKyBtZXNzYWdlICsgXCIgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vYXBvbGxvZ3JhcGhxbC9pbnZhcmlhbnQtcGFja2FnZXMpXCJcbiAgICAgICAgICAgIDogbWVzc2FnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZnJhbWVzVG9Qb3AgPSAxO1xuICAgICAgICBfdGhpcy5uYW1lID0gZ2VuZXJpY01lc3NhZ2U7XG4gICAgICAgIHNldFByb3RvdHlwZU9mKF90aGlzLCBJbnZhcmlhbnRFcnJvci5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBJbnZhcmlhbnRFcnJvcjtcbn0oRXJyb3IpKTtcbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgSW52YXJpYW50RXJyb3IobWVzc2FnZSk7XG4gICAgfVxufVxudmFyIHZlcmJvc2l0eUxldmVscyA9IFtcImRlYnVnXCIsIFwibG9nXCIsIFwid2FyblwiLCBcImVycm9yXCIsIFwic2lsZW50XCJdO1xudmFyIHZlcmJvc2l0eUxldmVsID0gdmVyYm9zaXR5TGV2ZWxzLmluZGV4T2YoXCJsb2dcIik7XG5mdW5jdGlvbiB3cmFwQ29uc29sZU1ldGhvZChuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHZlcmJvc2l0eUxldmVscy5pbmRleE9mKG5hbWUpID49IHZlcmJvc2l0eUxldmVsKSB7XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGNvbnNvbGUubG9nIGlmIHRoaXMgaG9zdCBlbnZpcm9ubWVudCBoYXBwZW5zIG5vdCB0byBwcm92aWRlXG4gICAgICAgICAgICAvLyBhbGwgdGhlIGNvbnNvbGUuKiBtZXRob2RzIHdlIG5lZWQuXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gY29uc29sZVtuYW1lXSB8fCBjb25zb2xlLmxvZztcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4oZnVuY3Rpb24gKGludmFyaWFudCkge1xuICAgIGludmFyaWFudC5kZWJ1ZyA9IHdyYXBDb25zb2xlTWV0aG9kKFwiZGVidWdcIik7XG4gICAgaW52YXJpYW50LmxvZyA9IHdyYXBDb25zb2xlTWV0aG9kKFwibG9nXCIpO1xuICAgIGludmFyaWFudC53YXJuID0gd3JhcENvbnNvbGVNZXRob2QoXCJ3YXJuXCIpO1xuICAgIGludmFyaWFudC5lcnJvciA9IHdyYXBDb25zb2xlTWV0aG9kKFwiZXJyb3JcIik7XG59KShpbnZhcmlhbnQgfHwgKGludmFyaWFudCA9IHt9KSk7XG5mdW5jdGlvbiBzZXRWZXJib3NpdHkobGV2ZWwpIHtcbiAgICB2YXIgb2xkID0gdmVyYm9zaXR5TGV2ZWxzW3ZlcmJvc2l0eUxldmVsXTtcbiAgICB2ZXJib3NpdHlMZXZlbCA9IE1hdGgubWF4KDAsIHZlcmJvc2l0eUxldmVscy5pbmRleE9mKGxldmVsKSk7XG4gICAgcmV0dXJuIG9sZDtcbn1cbnZhciBpbnZhcmlhbnQkMSA9IGludmFyaWFudDtcblxuZXhwb3J0cy5JbnZhcmlhbnRFcnJvciA9IEludmFyaWFudEVycm9yO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBpbnZhcmlhbnQkMTtcbmV4cG9ydHMuaW52YXJpYW50ID0gaW52YXJpYW50O1xuZXhwb3J0cy5zZXRWZXJib3NpdHkgPSBzZXRWZXJib3NpdHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnZhcmlhbnQuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBtYXliZSh0aHVuaykge1xuICB0cnkgeyByZXR1cm4gdGh1bmsoKSB9IGNhdGNoIChfKSB7fVxufVxuXG52YXIgc2FmZUdsb2JhbCA9IChcbiAgbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiBnbG9iYWxUaGlzIH0pIHx8XG4gIG1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gd2luZG93IH0pIHx8XG4gIG1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZiB9KSB8fFxuICBtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIGdsb2JhbCB9KSB8fFxuICAvLyBXZSBkb24ndCBleHBlY3QgdGhlIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGV2ZXIgdG8gYmUgaW52b2tlZCBhdCBydW50aW1lLCBhc1xuICAvLyBsb25nIGFzIGF0IGxlYXN0IG9uZSBvZiBnbG9iYWxUaGlzLCB3aW5kb3csIHNlbGYsIG9yIGdsb2JhbCBpcyBkZWZpbmVkLCBzb1xuICAvLyB3ZSBhcmUgdW5kZXIgbm8gb2JsaWdhdGlvbiB0byBtYWtlIGl0IGVhc3kgZm9yIHN0YXRpYyBhbmFseXNpcyB0b29scyB0b1xuICAvLyBkZXRlY3Qgc3ludGFjdGljIHVzYWdlIG9mIHRoZSBGdW5jdGlvbiBjb25zdHJ1Y3Rvci4gSWYgeW91IHRoaW5rIHlvdSBjYW5cbiAgLy8gaW1wcm92ZSB5b3VyIHN0YXRpYyBhbmFseXNpcyB0byBkZXRlY3QgdGhpcyBvYmZ1c2NhdGlvbiwgdGhpbmsgYWdhaW4uIFRoaXNcbiAgLy8gaXMgYW4gYXJtcyByYWNlIHlvdSBjYW5ub3Qgd2luLCBhdCBsZWFzdCBub3QgaW4gSmF2YVNjcmlwdC5cbiAgbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiBtYXliZS5jb25zdHJ1Y3RvcihcInJldHVybiB0aGlzXCIpKCkgfSlcbik7XG5cbnZhciBuZWVkVG9SZW1vdmUgPSBmYWxzZTtcblxuZnVuY3Rpb24gaW5zdGFsbCgpIHtcbiAgaWYgKHNhZmVHbG9iYWwgJiZcbiAgICAgICFtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WIH0pICYmXG4gICAgICAhbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiBwcm9jZXNzIH0pKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNhZmVHbG9iYWwsIFwicHJvY2Vzc1wiLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBlbnY6IHtcbiAgICAgICAgICAvLyBUaGlzIGRlZmF1bHQgbmVlZHMgdG8gYmUgXCJwcm9kdWN0aW9uXCIgaW5zdGVhZCBvZiBcImRldmVsb3BtZW50XCIsIHRvXG4gICAgICAgICAgLy8gYXZvaWQgdGhlIHByb2JsZW0gaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9wdWxsLzI4OTRcbiAgICAgICAgICAvLyB3aWxsIGV2ZW50dWFsbHkgc29sdmUsIG9uY2UgbWVyZ2VkIGFuZCByZWxlYXNlZC5cbiAgICAgICAgICBOT0RFX0VOVjogXCJwcm9kdWN0aW9uXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLy8gTGV0IGFueW9uZSBlbHNlIGNoYW5nZSBnbG9iYWwucHJvY2VzcyBhcyB0aGV5IHNlZSBmaXQsIGJ1dCBoaWRlIGl0IGZyb21cbiAgICAgIC8vIE9iamVjdC5rZXlzKGdsb2JhbCkgZW51bWVyYXRpb24uXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIG5lZWRUb1JlbW92ZSA9IHRydWU7XG4gIH1cbn1cblxuLy8gQ2FsbCBpbnN0YWxsKCkgYXQgbGVhc3Qgb25jZSwgd2hlbiB0aGlzIG1vZHVsZSBpcyBpbXBvcnRlZC5cbmluc3RhbGwoKTtcblxuZnVuY3Rpb24gcmVtb3ZlKCkge1xuICBpZiAobmVlZFRvUmVtb3ZlKSB7XG4gICAgZGVsZXRlIHNhZmVHbG9iYWwucHJvY2VzcztcbiAgICBuZWVkVG9SZW1vdmUgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnRzLmluc3RhbGwgPSBpbnN0YWxsO1xuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmNqcy5tYXBcbiIsImV4cG9ydHMuT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ6ZW4tb2JzZXJ2YWJsZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZXBvRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9SZXBvRGV0YWlsXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgZ3FsLCBjcmVhdGVIdHRwTGluayB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2xpbmsvY29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBSZXBvRGV0YWlscyhwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57cHJvcHMucmVwb0RhdGEubmFtZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIFxyXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD17cHJvcHMucmVwb0RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgLz4gXHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxSZXBvRGV0YWlsIFxyXG4gICAgICAgIGltYWdlPXtwcm9wcy5yZXBvRGF0YS5pbWFnZX1cclxuICAgICAgICBuYW1lPXtwcm9wcy5yZXBvRGF0YS5uYW1lfVxyXG4gICAgICAgIHVybD17cHJvcHMucmVwb0RhdGEudXJsfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5yZXBvRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xyXG4gICAgY29uc3QgaHR0cExpbmsgPSBjcmVhdGVIdHRwTGluayh7XHJcbiAgICAgICAgdXJpOiAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9ncmFwaHFsJyxcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoKF8sIHsgaGVhZGVycyB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkdJVEhVQl9BQ0NFU1NfVE9LRU59YCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICAgICAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcclxuICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSAgYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogZ3FsYFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVzZXIobG9naW46IFwicmFuamFubWFuaXNoOTVcIikge1xyXG4gICAgICAgICAgICBwaW5uYWJsZUl0ZW1zKGZpcnN0OiAxMykge1xyXG4gICAgICAgICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIFJlcG9zaXRvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgICAgICBgXHJcbiAgICAgIH0pXHJcbiAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgY29uc3Qge3VzZXJ9ID0gZGF0YTtcclxuICAgICBjb25zdCByZXBvcyA9IHVzZXIucGlubmFibGVJdGVtcy5lZGdlcy5tYXAoKHtub2RlfSk9PiBub2RlKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZycsXHJcbiAgICAgICAgcGF0aHM6IHJlcG9zLm1hcCgocmVwbyk9Pih7XHJcbiAgICAgICAgcGFyYW1zOnsgcmVwb0lkOiByZXBvLmlkLnRvU3RyaW5nKCkgfSB9KSksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KXtcclxuICAgIC8vZmV0Y2ggZGF0YSBmb3IgYSBzaW5nbGUgbWVldHVwXHJcbiBjb25zdCByZXBvSWQgPSBjb250ZXh0LnBhcmFtcy5yZXBvSWQ7XHJcbmNvbnN0IGh0dHBMaW5rID0gY3JlYXRlSHR0cExpbmsoe1xyXG4gICAgdXJpOiAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9ncmFwaHFsJyxcclxuICB9KTtcclxuICBcclxuICBjb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoKF8sIHsgaGVhZGVycyB9KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuR0lUSFVCX0FDQ0VTU19UT0tFTn1gLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICBsaW5rOiBhdXRoTGluay5jb25jYXQoaHR0cExpbmspLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxuICB9KTtcclxuXHJcbmNvbnN0IHsgZGF0YSB9ID0gIGF3YWl0IGNsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogZ3FsYFxyXG4gICAge1xyXG4gICAgICB1c2VyKGxvZ2luOiBcInJhbmphbm1hbmlzaDk1XCIpIHtcclxuICAgICAgICBwaW5uYWJsZUl0ZW1zKGZpcnN0OiAxMykge1xyXG4gICAgICAgICAgdG90YWxDb3VudFxyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAuLi4gb24gUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSAgXHJcbiAgICBgXHJcbiAgfSlcclxuLy8gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gY29uc3Qge3VzZXJ9ID0gZGF0YTtcclxuIGNvbnN0IHJlcG9zID0gdXNlci5waW5uYWJsZUl0ZW1zLmVkZ2VzLm1hcCgoe25vZGV9KT0+IG5vZGUpO1xyXG4gY29uc3Qgc2VsZWN0ZWRSZXBvID0gcmVwb3MuZmluZCgocmVwbyk9PnJlcG8uaWQgPT09IHJlcG9JZCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIHJlcG9EYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2VsZWN0ZWRSZXBvLmlkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBzZWxlY3RlZFJlcG8ubmFtZSxcclxuICAgICAgICAgICAgICAgIHVybDogc2VsZWN0ZWRSZXBvLnVybCxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG5naW1nLmNvbS91cGxvYWRzL2dpdGh1Yi9naXRodWJfUE5HMjgucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRSZXBvLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBvRGV0YWlsczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd3J5L2NvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdyeS9lcXVhbGl0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd3J5L3RyaWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3B0aW1pc21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN5bWJvbC1vYnNlcnZhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRzbGliXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInplbi1vYnNlcnZhYmxlL2luZGV4LmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=