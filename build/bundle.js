/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/actions/actionTypes.js":
/*!*******************************************!*\
  !*** ./src/client/actions/actionTypes.js ***!
  \*******************************************/
/*! exports provided: FETCH_USERS, FETCH_RICKY_MORTY_DATA_SUCCESS, FETCH_RICKY_MORTY_DATA_FAIL, TRIGGER_FILTER, RESET_FILTER, DATA_LOADING, DATA_LOADED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_USERS\", function() { return FETCH_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_RICKY_MORTY_DATA_SUCCESS\", function() { return FETCH_RICKY_MORTY_DATA_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_RICKY_MORTY_DATA_FAIL\", function() { return FETCH_RICKY_MORTY_DATA_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TRIGGER_FILTER\", function() { return TRIGGER_FILTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESET_FILTER\", function() { return RESET_FILTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DATA_LOADING\", function() { return DATA_LOADING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DATA_LOADED\", function() { return DATA_LOADED; });\nvar FETCH_USERS = 'FETCH_USERS';\nvar FETCH_RICKY_MORTY_DATA_SUCCESS = 'FETCH_RICKY_MORTY_DATA_SUCCESS';\nvar FETCH_RICKY_MORTY_DATA_FAIL = 'FETCH_RICKY_MORTY_DATA_FAIL';\nvar TRIGGER_FILTER = 'TRIGGER_FILTER';\nvar RESET_FILTER = 'RESET_FILTER';\nvar DATA_LOADING = 'DATA_LOADING';\nvar DATA_LOADED = 'DATA_LOADED';\n\n//# sourceURL=webpack:///./src/client/actions/actionTypes.js?");

/***/ }),

/***/ "./src/client/actions/dataLoadingActions.js":
/*!**************************************************!*\
  !*** ./src/client/actions/dataLoadingActions.js ***!
  \**************************************************/
/*! exports provided: dataLoadingAction, dataLoadedAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataLoadingAction\", function() { return dataLoadingAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataLoadedAction\", function() { return dataLoadedAction; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./src/client/actions/actionTypes.js\");\n\nvar dataLoadingAction = function dataLoadingAction() {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"DATA_LOADING\"]\n  };\n};\nvar dataLoadedAction = function dataLoadedAction() {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"DATA_LOADED\"]\n  };\n};\n\n//# sourceURL=webpack:///./src/client/actions/dataLoadingActions.js?");

/***/ }),

/***/ "./src/client/actions/filterActions.js":
/*!*********************************************!*\
  !*** ./src/client/actions/filterActions.js ***!
  \*********************************************/
/*! exports provided: triggerFilter, resetFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triggerFilter\", function() { return triggerFilter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetFilter\", function() { return resetFilter; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./src/client/actions/actionTypes.js\");\n\nvar triggerFilter = function triggerFilter(filterType, filterValue, checkedState) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"TRIGGER_FILTER\"],\n    payload: {\n      name: filterType,\n      value: {\n        label: filterValue,\n        checked: checkedState\n      }\n    }\n  };\n};\nvar resetFilter = function resetFilter(filterType, filterValue, checkedState) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"RESET_FILTER\"]\n  };\n};\n\n//# sourceURL=webpack:///./src/client/actions/filterActions.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! exports provided: fetchUsers, fetchRickMortyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUsers\", function() { return fetchUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchRickMortyData\", function() { return fetchRickMortyData; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ \"./src/client/actions/actionTypes.js\");\n/* harmony import */ var _rickMortyActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rickMortyActions */ \"./src/client/actions/rickMortyActions.js\");\n/* harmony import */ var _dataLoadingActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataLoadingActions */ \"./src/client/actions/dataLoadingActions.js\");\n\n\n\n\n\n\nvar fetchUsers = function fetchUsers() {\n  return /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://react-ssr-api.herokuapp.com/users');\n\n            case 2:\n              res = _context.sent;\n              dispatch({\n                type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__[\"FETCH_USERS\"],\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar fetchRickMortyData = function fetchRickMortyData() {\n  return /*#__PURE__*/function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              // Dispatch data loading action\n              dispatch(Object(_dataLoadingActions__WEBPACK_IMPORTED_MODULE_5__[\"dataLoadingAction\"])());\n              _context2.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://rickandmortyapi.com/api/character');\n\n            case 4:\n              res = _context2.sent;\n              dispatch(Object(_rickMortyActions__WEBPACK_IMPORTED_MODULE_4__[\"rickMortyDataSuccess\"])(res)); // Dispatch data loaded action\n\n              dispatch(Object(_dataLoadingActions__WEBPACK_IMPORTED_MODULE_5__[\"dataLoadedAction\"])());\n              _context2.next = 13;\n              break;\n\n            case 9:\n              _context2.prev = 9;\n              _context2.t0 = _context2[\"catch\"](0);\n              dispatch(Object(_rickMortyActions__WEBPACK_IMPORTED_MODULE_4__[\"rickMortyDataFail\"])(_context2.t0)); // Dispatch data loaded action\n\n              dispatch(Object(_dataLoadingActions__WEBPACK_IMPORTED_MODULE_5__[\"dataLoadedAction\"])());\n\n            case 13:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 9]]);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/actions/rickMortyActions.js":
/*!************************************************!*\
  !*** ./src/client/actions/rickMortyActions.js ***!
  \************************************************/
/*! exports provided: rickMortyDataSuccess, rickMortyDataFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rickMortyDataSuccess\", function() { return rickMortyDataSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rickMortyDataFail\", function() { return rickMortyDataFail; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./src/client/actions/actionTypes.js\");\n\nvar rickMortyDataSuccess = function rickMortyDataSuccess(resp) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_RICKY_MORTY_DATA_SUCCESS\"],\n    payload: resp\n  };\n};\nvar rickMortyDataFail = function rickMortyDataFail(err) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_RICKY_MORTY_DATA_FAIL\"],\n    error: err\n  };\n};\n\n//# sourceURL=webpack:///./src/client/actions/rickMortyActions.js?");

/***/ }),

/***/ "./src/client/components/Routes/routes.js":
/*!************************************************!*\
  !*** ./src/client/components/Routes/routes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Home_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/Home/home */ \"./src/client/pages/Home/home.js\");\n/* harmony import */ var _pages_UsersList_usersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/UsersList/usersList */ \"./src/client/pages/UsersList/usersList.js\");\n/* harmony import */ var _pages_RickMorty_rickMorty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/RickMorty/rickMorty */ \"./src/client/pages/RickMorty/rickMorty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_objectSpread({\n  path: '/'\n}, _pages_RickMorty_rickMorty__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), _objectSpread({\n  path: '/users'\n}, _pages_UsersList_usersList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), _objectSpread({\n  path: '/rick-morty'\n}, _pages_RickMorty_rickMorty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])]);\n\n//# sourceURL=webpack:///./src/client/components/Routes/routes.js?");

/***/ }),

/***/ "./src/client/components/containers/RickMortyContainer/rickMortyContainer.js":
/*!***********************************************************************************!*\
  !*** ./src/client/components/containers/RickMortyContainer/rickMortyContainer.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions */ \"./src/client/actions/index.js\");\n/* harmony import */ var _templates_twocolumntemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../templates/twocolumntemplate */ \"./src/client/components/templates/twocolumntemplate.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils.js\");\n/* harmony import */ var _actions_filterActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/filterActions */ \"./src/client/actions/filterActions.js\");\n/* harmony import */ var _actions_dataLoadingActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/dataLoadingActions */ \"./src/client/actions/dataLoadingActions.js\");\n\n\n\n\n\n\n\n\nvar RickMortyContainer = function RickMortyContainer(_ref) {\n  var rickMortyDataResultSet = _ref.rickMortyDataResultSet,\n      fetchRickMortyData = _ref.fetchRickMortyData,\n      filterTrigger = _ref.filterTrigger,\n      species = _ref.species,\n      gender = _ref.gender,\n      origin = _ref.origin,\n      filterReset = _ref.filterReset,\n      dataLoading = _ref.dataLoading,\n      isNoItemChecked = _ref.isNoItemChecked;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchRickMortyData();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_twocolumntemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    rickMortyData: rickMortyDataResultSet,\n    species: species,\n    gender: gender,\n    origin: origin,\n    filterTrigger: filterTrigger,\n    noResults: dataLoading === 'DONE' && !isNoItemChecked && !((rickMortyDataResultSet === null || rickMortyDataResultSet === void 0 ? void 0 : rickMortyDataResultSet.length) > 0),\n    filterReset: filterReset\n  });\n};\n\nvar loadData = function loadData(store) {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchRickMortyData\"])());\n};\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n  var _rickMorty$showData, _rickMorty$showData2, _rickMorty$showData3, _rickMorty$showData4;\n\n  var rickMorty = _ref2.rickMorty,\n      filterTerms = _ref2.filterTerms,\n      dataLoading = _ref2.dataLoading,\n      isNoFilterItemChecked = _ref2.isNoFilterItemChecked;\n  return {\n    rickMortyDataResultSet: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getFilteredData\"])(rickMorty === null || rickMorty === void 0 ? void 0 : (_rickMorty$showData = rickMorty.showData) === null || _rickMorty$showData === void 0 ? void 0 : _rickMorty$showData.results, filterTerms),\n    species: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getAllFilterValues\"])(rickMorty === null || rickMorty === void 0 ? void 0 : (_rickMorty$showData2 = rickMorty.showData) === null || _rickMorty$showData2 === void 0 ? void 0 : _rickMorty$showData2.results, filterTerms, 'species'),\n    gender: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getAllFilterValues\"])(rickMorty === null || rickMorty === void 0 ? void 0 : (_rickMorty$showData3 = rickMorty.showData) === null || _rickMorty$showData3 === void 0 ? void 0 : _rickMorty$showData3.results, filterTerms, 'gender'),\n    origin: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getAllFilterValues\"])(rickMorty === null || rickMorty === void 0 ? void 0 : (_rickMorty$showData4 = rickMorty.showData) === null || _rickMorty$showData4 === void 0 ? void 0 : _rickMorty$showData4.results, filterTerms, 'origin', 'name'),\n    dataLoading: dataLoading,\n    isNoItemChecked: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"isNoItemChecked\"])(filterTerms)\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    fetchRickMortyData: function fetchRickMortyData() {\n      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchRickMortyData\"])());\n    },\n    filterTrigger: function filterTrigger(filterType, filterValue, checkedState) {\n      return dispatch(Object(_actions_filterActions__WEBPACK_IMPORTED_MODULE_5__[\"triggerFilter\"])(filterType, filterValue, checkedState));\n    },\n    filterReset: function filterReset() {\n      return dispatch(Object(_actions_filterActions__WEBPACK_IMPORTED_MODULE_5__[\"resetFilter\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(RickMortyContainer),\n  loadData: loadData\n});\n\n//# sourceURL=webpack:///./src/client/components/containers/RickMortyContainer/rickMortyContainer.js?");

/***/ }),

/***/ "./src/client/components/presentational/FilterComponent/filterComponent.js":
/*!*********************************************************************************!*\
  !*** ./src/client/components/presentational/FilterComponent/filterComponent.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"@material-ui/core/Checkbox\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _filterComponent_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterComponent.style */ \"./src/client/components/presentational/FilterComponent/filterComponent.style.js\");\n/* harmony import */ var _actions___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/ */ \"./src/client/actions/index.js\");\n\n\n\n\n\n\nvar FilterComponent = function FilterComponent(_ref) {\n  var filterComp = _ref.filterComp,\n      filterTrigger = _ref.filterTrigger;\n  var name = filterComp.name,\n      values = filterComp.values;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filterComponent_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    variant: \"h4\",\n    gutterBottom: true\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"checkbox-wrapper\"\n  }, values && values.length > 0 && values.map(function (_ref2) {\n    var label = _ref2.label,\n        checked = _ref2.checked;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: label,\n      className: \"checkbox-with-label\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      onChange: function onChange() {\n        return filterTrigger(name, label, !checked);\n      },\n      color: \"primary\",\n      checked: checked\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, label));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterComponent);\n\n//# sourceURL=webpack:///./src/client/components/presentational/FilterComponent/filterComponent.js?");

/***/ }),

/***/ "./src/client/components/presentational/FilterComponent/filterComponent.style.js":
/*!***************************************************************************************!*\
  !*** ./src/client/components/presentational/FilterComponent/filterComponent.style.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar FilterComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"filterComponentstyle__FilterComponentWrapper\",\n  componentId: \"sc-1gekodo-0\"\n})([\"\", \";\"], function () {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"background-color:#f5f5f5;h4{text-transform:capitalize;padding-left:10px;padding-top:10px;}.checkbox-with-label{display:'flex';align-items:center;}@media (min-width:1280px){margin:0 1rem 1rem 0;}\"]);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterComponentWrapper);\n\n//# sourceURL=webpack:///./src/client/components/presentational/FilterComponent/filterComponent.style.js?");

/***/ }),

/***/ "./src/client/components/presentational/Header/header.js":
/*!***************************************************************!*\
  !*** ./src/client/components/presentational/Header/header.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Menu */ \"@material-ui/core/Menu\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header.style */ \"./src/client/components/presentational/Header/header.style.js\");\n/* harmony import */ var _SearchBox_searchBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../SearchBox/searchBox */ \"./src/client/components/presentational/SearchBox/searchBox.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Search */ \"@material-ui/icons/Search\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),\n      menuOpen = _React$useState2[0],\n      setMenuOpen = _React$useState2[1];\n\n  var handleClick = function handleClick(event) {\n    setMenuOpen(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setMenuOpen(null);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_header_style__WEBPACK_IMPORTED_MODULE_10__[\"HeaderWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    position: \"fixed\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    edge: \"start\",\n    color: \"inherit\",\n    \"aria-label\": \"menu\",\n    onClick: handleClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"simple-menu\",\n    anchorEl: menuOpen,\n    keepMounted: true,\n    open: Boolean(menuOpen),\n    onClose: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    onClick: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    onClick: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], {\n    to: \"/rick-morty\"\n  }, \"Shows\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    className: \"app-title\",\n    variant: \"h6\",\n    noWrap: true\n  }, \"Rick Morty\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"search-header-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SearchBox_searchBox__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {\n    onClick: function onClick() {\n      return console.log('Clicked');\n    },\n    className: \"search-btn\",\n    variant: \"contained\",\n    color: \"primary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13___default.a, null))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/client/components/presentational/Header/header.js?");

/***/ }),

/***/ "./src/client/components/presentational/Header/header.style.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/presentational/Header/header.style.js ***!
  \*********************************************************************/
/*! exports provided: HeaderWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderWrapper\", function() { return HeaderWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"headerstyle__HeaderWrapper\",\n  componentId: \"nc2mp2-0\"\n})([\"\", \";\"], function () {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\".MuiMenuItem-root a{text-decoration:none;}.app-title{flex-grow:1;}.search-header-wrapper{position:relative;.search-btn{position:absolute;right:10px;bottom:0;z-index:10;box-shadow:none;background:transparent;}}\"]);\n});\n\n//# sourceURL=webpack:///./src/client/components/presentational/Header/header.style.js?");

/***/ }),

/***/ "./src/client/components/presentational/ImageCard/imageCard.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/presentational/ImageCard/imageCard.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _imageCard_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCard.style */ \"./src/client/components/presentational/ImageCard/imageCard.style.js\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils.js\");\n\n\n\n\n\n\n\nvar ImageCard = function ImageCard(_ref) {\n  var _data$origin, _data$location;\n\n  var data = _ref.data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imageCard_style__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    item: true,\n    xs: 12,\n    lg: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    image: data.image,\n    title: data.name,\n    className: \"card-image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    className: \"name-id-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    className: \"name-id-subcontainer\",\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"name-title\"\n  }, data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"created-at\"\n  }, \"id: \".concat(data.id, \" - created: \").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"getformattedDate\"])(data.created))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    className: \"aditional-detail-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-status\"\n  }, \"STATUS\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-label\"\n  }, data.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-status\"\n  }, \"SPECIES\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-label\"\n  }, data.species)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-status\"\n  }, \"ORIGIN\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-label\"\n  }, data === null || data === void 0 ? void 0 : (_data$origin = data.origin) === null || _data$origin === void 0 ? void 0 : _data$origin.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-status\"\n  }, \"LAST LOCATION\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-label\"\n  }, data === null || data === void 0 ? void 0 : (_data$location = data.location) === null || _data$location === void 0 ? void 0 : _data$location.name))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCard);\n\n//# sourceURL=webpack:///./src/client/components/presentational/ImageCard/imageCard.js?");

/***/ }),

/***/ "./src/client/components/presentational/ImageCard/imageCard.style.js":
/*!***************************************************************************!*\
  !*** ./src/client/components/presentational/ImageCard/imageCard.style.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar ImageCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({\n  displayName: \"imageCardstyle__ImageCardWrapper\",\n  componentId: \"mbe01d-0\"\n})([\".card-image{height:0;padding-top:56.25%;}.MuiCardContent-root.name-id-container{background-color:rgba(0,0,0,0.65);opacity:0.5;padding:8px 16px;}.MuiCardContent-root.aditional-detail-container{background-color:rgba(0,0,0,0.65);}&.MuiGrid-item{margin-bottom:24px;}.MuiTypography-colorTextSecondary{display:flex;justify-content:space-between;align-items:center;color:#ffae42;font-size:18px;padding-bottom:8px;border-bottom:solid 1px rgba(191,191,191,0.35);margin-bottom:8px;.image-text-label{word-break:normal;text-align:end;}.image-text-status{color:#fff;}&.name-id-subcontainer{flex-direction:column;align-items:flex-start;justify-content:center;margin:0;padding:0;border:none;color:#fff;.name-title{font-size:18px;}}@media (min-width:1280px){font-size:12px;.image-text-status{max-width:95px;}}}@media (min-width:1280px){&.MuiGrid-item{margin-bottom:0;}}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCardWrapper);\n\n//# sourceURL=webpack:///./src/client/components/presentational/ImageCard/imageCard.style.js?");

/***/ }),

/***/ "./src/client/components/presentational/ImageCardsContainer/Filters.js":
/*!*****************************************************************************!*\
  !*** ./src/client/components/presentational/ImageCardsContainer/Filters.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var sortBy = _ref.sortBy;\n\n  var onChange = function onChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    console.log(name, value);\n    sortBy(value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Filter\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    onChange: onChange\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"1\"\n  }, \" Accending \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"2\"\n  }, \" Decending \")));\n});\n\n//# sourceURL=webpack:///./src/client/components/presentational/ImageCardsContainer/Filters.js?");

/***/ }),

/***/ "./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.js":
/*!*****************************************************************************************!*\
  !*** ./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ImageCard_imageCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImageCard/imageCard */ \"./src/client/components/presentational/ImageCard/imageCard.js\");\n/* harmony import */ var _ImageCardsContainer_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageCardsContainer.style */ \"./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.style.js\");\n/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Filters */ \"./src/client/components/presentational/ImageCardsContainer/Filters.js\");\n\n\n\n\n\n\n\nvar ImageCardsContainer = function ImageCardsContainer(_ref) {\n  var rickMortyData = _ref.rickMortyData;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(rickMortyData),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      users = _useState2[0],\n      setUsers = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setUsers(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rickMortyData));\n  }, [rickMortyData]);\n\n  var filters = function filters(sortBy) {\n    var sorted = users.slice();\n\n    if (sortBy == 1) {\n      sorted = users && users.sort(asscending);\n    } else {\n      sorted = users && users.sort(decending);\n    }\n\n    setUsers(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sorted));\n  };\n\n  var decending = function decending(a, b) {\n    if (a.name.toLowerCase() < b.name.toLowerCase()) {\n      return 1;\n    }\n\n    if (b.name.toLowerCase() < a.name.toLowerCase()) {\n      return -1;\n    }\n\n    return 0;\n  };\n\n  var asscending = function asscending(a, b) {\n    if (a.name.toLowerCase() > b.name.toLowerCase()) {\n      return 1;\n    }\n\n    if (b.name.toLowerCase() > a.name.toLowerCase()) {\n      return -1;\n    }\n\n    return 0;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Filters__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    sortBy: filters\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ImageCardsContainer_style__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    container: true,\n    spacing: 2\n  }, users === null || users === void 0 ? void 0 : users.map(function (data) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ImageCard_imageCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: data.id,\n      data: data\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCardsContainer);\n\n//# sourceURL=webpack:///./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.js?");

/***/ }),

/***/ "./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.style.js":
/*!***********************************************************************************************!*\
  !*** ./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.style.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar ImageCardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({\n  displayName: \"ImageCardsContainerstyle__ImageCardsWrapper\",\n  componentId: \"rlaefd-0\"\n})([\"\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCardsWrapper);\n\n//# sourceURL=webpack:///./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.style.js?");

/***/ }),

/***/ "./src/client/components/presentational/NoResult/noResults.js":
/*!********************************************************************!*\
  !*** ./src/client/components/presentational/NoResult/noResults.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar NoResultComponent = function NoResultComponent(_ref) {\n  var filterReset = _ref.filterReset;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  var handleClickOpen = function handleClickOpen() {\n    setOpen(true);\n  };\n\n  var handleClose = function handleClose() {\n    setOpen(false);\n    filterReset();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleClickOpen();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    open: open,\n    onClose: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    id: \"alert-dialog-title\"\n  }, 'No Results Found'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    id: \"alert-dialog-description\"\n  }, \"There is no result related to this search\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    onClick: handleClose,\n    color: \"primary\",\n    autoFocus: true\n  }, \"Close\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoResultComponent);\n\n//# sourceURL=webpack:///./src/client/components/presentational/NoResult/noResults.js?");

/***/ }),

/***/ "./src/client/components/presentational/SearchBox/searchBox.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/presentational/SearchBox/searchBox.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputBase */ \"@material-ui/core/InputBase\");\n/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _searchBox_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchBox.style */ \"./src/client/components/presentational/SearchBox/searchBox.style.js\");\n\n\n\n\n\nvar SearchBox = function SearchBox() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_searchBox_style__WEBPACK_IMPORTED_MODULE_3__[\"SearchBoxWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"search-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    placeholder: \"Search by name\\u2026\",\n    className: \"input-root input-input\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBox);\n\n//# sourceURL=webpack:///./src/client/components/presentational/SearchBox/searchBox.js?");

/***/ }),

/***/ "./src/client/components/presentational/SearchBox/searchBox.style.js":
/*!***************************************************************************!*\
  !*** ./src/client/components/presentational/SearchBox/searchBox.style.js ***!
  \***************************************************************************/
/*! exports provided: SearchBoxWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchBoxWrapper\", function() { return SearchBoxWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar SearchBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"searchBoxstyle__SearchBoxWrapper\",\n  componentId: \"sc-15dunrz-0\"\n})([\".search-wrapper{position:relative;z-index:10;border-radius:5px;background-color:rgba(255,255,255,0.15);&:hover{background-color:rgba(255,255,255,0.15);}margin-right:16px;margin-left:0;width:100%;}@media (min-width:768px){.search-wrapper{width:auto;}}.input-root{color:inherit;}.input-input{padding:2px 0;padding-left:calc(1em + 8px);transition:width 200ms ease-in-out;width:100%;@media (min-width:1024px){width:30ch;}}\"]);\n\n//# sourceURL=webpack:///./src/client/components/presentational/SearchBox/searchBox.style.js?");

/***/ }),

/***/ "./src/client/components/presentational/User/user.js":
/*!***********************************************************!*\
  !*** ./src/client/components/presentational/User/user.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.style */ \"./src/client/components/presentational/User/user.style.js\");\n\n\n\nvar User = function User(_ref) {\n  var name = _ref.name;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_style__WEBPACK_IMPORTED_MODULE_1__[\"UserWrapper\"], null, name);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/client/components/presentational/User/user.js?");

/***/ }),

/***/ "./src/client/components/presentational/User/user.style.js":
/*!*****************************************************************!*\
  !*** ./src/client/components/presentational/User/user.style.js ***!
  \*****************************************************************/
/*! exports provided: UserWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserWrapper\", function() { return UserWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar UserWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"userstyle__UserWrapper\",\n  componentId: \"sc-12ll0gg-0\"\n})([\"\", \";\"], function () {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-size:18px;font-weight:bold;\"]);\n});\n\n//# sourceURL=webpack:///./src/client/components/presentational/User/user.style.js?");

/***/ }),

/***/ "./src/client/components/templates/twocolumntemplate.js":
/*!**************************************************************!*\
  !*** ./src/client/components/templates/twocolumntemplate.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_presentational_FilterComponent_filterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/presentational/FilterComponent/filterComponent */ \"./src/client/components/presentational/FilterComponent/filterComponent.js\");\n/* harmony import */ var _presentational_ImageCardsContainer_ImageCardsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../presentational/ImageCardsContainer/ImageCardsContainer */ \"./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.js\");\n/* harmony import */ var _twocolumntemplate_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./twocolumntemplate.style */ \"./src/client/components/templates/twocolumntemplate.style.js\");\n/* harmony import */ var _presentational_NoResult_noResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../presentational/NoResult/noResults */ \"./src/client/components/presentational/NoResult/noResults.js\");\n\n\n\n\n\n\n\nvar TwoColumnTemplateLayout = function TwoColumnTemplateLayout(_ref) {\n  var rickMortyData = _ref.rickMortyData,\n      species = _ref.species,\n      gender = _ref.gender,\n      origin = _ref.origin,\n      filterTrigger = _ref.filterTrigger,\n      noResults = _ref.noResults,\n      filterReset = _ref.filterReset;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_twocolumntemplate_style__WEBPACK_IMPORTED_MODULE_4__[\"LayoutContainer\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    container: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_twocolumntemplate_style__WEBPACK_IMPORTED_MODULE_4__[\"LeftSection\"], {\n    item: true,\n    xs: 12,\n    lg: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_presentational_FilterComponent_filterComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    filterTrigger: filterTrigger,\n    filterComp: species\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_presentational_FilterComponent_filterComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    filterTrigger: filterTrigger,\n    filterComp: gender\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_presentational_FilterComponent_filterComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    filterTrigger: filterTrigger,\n    filterComp: origin\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_twocolumntemplate_style__WEBPACK_IMPORTED_MODULE_4__[\"RightSection\"], {\n    item: true,\n    xs: 12,\n    lg: 9\n  }, noResults ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_NoResult_noResults__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    filterReset: filterReset\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_ImageCardsContainer_ImageCardsContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    rickMortyData: rickMortyData\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TwoColumnTemplateLayout);\n\n//# sourceURL=webpack:///./src/client/components/templates/twocolumntemplate.js?");

/***/ }),

/***/ "./src/client/components/templates/twocolumntemplate.style.js":
/*!********************************************************************!*\
  !*** ./src/client/components/templates/twocolumntemplate.style.js ***!
  \********************************************************************/
/*! exports provided: LayoutContainer, LeftSection, RightSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutContainer\", function() { return LayoutContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftSection\", function() { return LeftSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightSection\", function() { return RightSection; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar LayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"twocolumntemplatestyle__LayoutContainer\",\n  componentId: \"tudenz-0\"\n})([\"\", \";\"], function () {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"max-width:1280px;margin:88px auto 0;\"]);\n});\nvar LeftSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({\n  displayName: \"twocolumntemplatestyle__LeftSection\",\n  componentId: \"tudenz-1\"\n})([\"\", \";\"], function () {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"\"]);\n});\nvar RightSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({\n  displayName: \"twocolumntemplatestyle__RightSection\",\n  componentId: \"tudenz-2\"\n})([\"\"]);\n\n//# sourceURL=webpack:///./src/client/components/templates/twocolumntemplate.style.js?");

/***/ }),

/***/ "./src/client/pages/Home/home.js":
/*!***************************************!*\
  !*** ./src/client/pages/Home/home.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.style */ \"./src/client/pages/Home/home.style.js\");\n\n\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home_style__WEBPACK_IMPORTED_MODULE_2__[\"HomeComponentWrapper\"], {\n    className: \"home-warpper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"A simple React server side appliation that demonstrates React's isomorphic nature and how we can use redux to manage application state on server and client.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Please click \\\"Shows\\\" under menu to go to the application.\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/client/pages/Home/home.js?");

/***/ }),

/***/ "./src/client/pages/Home/home.style.js":
/*!*********************************************!*\
  !*** ./src/client/pages/Home/home.style.js ***!
  \*********************************************/
/*! exports provided: HomeComponentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeComponentWrapper\", function() { return HomeComponentWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar HomeComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"homestyle__HomeComponentWrapper\",\n  componentId: \"sc-1um2wi-0\"\n})([\"\", \";\"], function () {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"margin:88px auto 0 auto;max-width:1280px;\"]);\n});\n\n//# sourceURL=webpack:///./src/client/pages/Home/home.style.js?");

/***/ }),

/***/ "./src/client/pages/RickMorty/rickMorty.js":
/*!*************************************************!*\
  !*** ./src/client/pages/RickMorty/rickMorty.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_containers_RickMortyContainer_rickMortyContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/containers/RickMortyContainer/rickMortyContainer */ \"./src/client/components/containers/RickMortyContainer/rickMortyContainer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _components_containers_RickMortyContainer_rickMortyContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/client/pages/RickMorty/rickMorty.js?");

/***/ }),

/***/ "./src/client/pages/UsersList/usersList.js":
/*!*************************************************!*\
  !*** ./src/client/pages/UsersList/usersList.js ***!
  \*************************************************/
/*! exports provided: loadData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadData\", function() { return loadData; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_presentational_User_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/presentational/User/user */ \"./src/client/components/presentational/User/user.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ \"./src/client/actions/index.js\");\n\n\n\n\n\n\nvar UsersList = function UsersList(_ref) {\n  var users = _ref.users,\n      fetchUsers = _ref.fetchUsers;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fetchUsers();\n  }, []);\n\n  var _users = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(users, 1),\n      usersData = _users[0];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, \"Here's a list of users.\"), usersData === null || usersData === void 0 ? void 0 : usersData.map(function (_ref2) {\n    var id = _ref2.id,\n        name = _ref2.name;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_User_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: id,\n      name: name\n    });\n  }));\n};\n\nvar mapStateToProps = function mapStateToProps(_ref3) {\n  var users = _ref3.users;\n  return {\n    users: users\n  };\n};\n\nvar loadData = function loadData(store) {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"fetchUsers\"])());\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {\n    fetchUsers: _actions__WEBPACK_IMPORTED_MODULE_4__[\"fetchUsers\"]\n  })(UsersList),\n  loadData: loadData\n});\n\n//# sourceURL=webpack:///./src/client/pages/UsersList/usersList.js?");

/***/ }),

/***/ "./src/client/reducers/dataLoadingReducer.js":
/*!***************************************************!*\
  !*** ./src/client/reducers/dataLoadingReducer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/client/actions/actionTypes.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'NOT_STARTED';\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"DATA_LOADING\"]:\n      return 'IN_PROGRESS';\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"DATA_LOADED\"]:\n      return 'DONE';\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/dataLoadingReducer.js?");

/***/ }),

/***/ "./src/client/reducers/filterReducer.js":
/*!**********************************************!*\
  !*** ./src/client/reducers/filterReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/client/actions/actionTypes.js\");\n\n\n\nvar filterNames = function filterNames(state, actionPayload) {\n  if (state.length === 0) {\n    var _filterItem = {\n      name: actionPayload.name,\n      values: [actionPayload.value]\n    };\n    state.push(_filterItem);\n    return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state);\n  }\n\n  var filterItem = state.find(function (item) {\n    return item.name === actionPayload.name;\n  });\n\n  if (filterItem) {\n    var filterSubItem = filterItem.values.find(function (subItem) {\n      return subItem.label === actionPayload.value.label;\n    });\n\n    if (filterSubItem) {\n      filterSubItem.checked = actionPayload.value.checked;\n      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state);\n    }\n\n    filterItem.values.push(actionPayload.value);\n    return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state);\n  }\n\n  state.push({\n    name: actionPayload.name,\n    values: [actionPayload.value]\n  });\n  return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"TRIGGER_FILTER\"]:\n      return filterNames(state, action.payload);\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"RESET_FILTER\"]:\n      return [];\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/filterReducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usersReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersReducer */ \"./src/client/reducers/usersReducer.js\");\n/* harmony import */ var _rickMortyReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rickMortyReducer */ \"./src/client/reducers/rickMortyReducer.js\");\n/* harmony import */ var _filterReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterReducer */ \"./src/client/reducers/filterReducer.js\");\n/* harmony import */ var _dataLoadingReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataLoadingReducer */ \"./src/client/reducers/dataLoadingReducer.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  users: _usersReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  rickMorty: _rickMortyReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  filterTerms: _filterReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  dataLoading: _dataLoadingReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/rickMortyReducer.js":
/*!*************************************************!*\
  !*** ./src/client/reducers/rickMortyReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/client/actions/actionTypes.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    showData: null,\n    showDataError: null\n  };\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_RICKY_MORTY_DATA_SUCCESS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showData: action.payload.data,\n        showDataError: null\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_RICKY_MORTY_DATA_FAIL\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showData: null,\n        showDataError: payload.error\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/rickMortyReducer.js?");

/***/ }),

/***/ "./src/client/reducers/usersReducer.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/usersReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/client/actions/actionTypes.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_USERS\"]:\n      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state), [action.payload.data]);\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/usersReducer.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var middlwares = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_client_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n});\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_components_Routes_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/components/Routes/routes */ \"./src/client/components/Routes/routes.js\");\n/* harmony import */ var _client_components_presentational_Header_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/components/presentational/Header/header */ \"./src/client/components/presentational/Header/header.js\");\n\n\n\n\n\n\n\n\n\n\nvar renderer = function renderer(req, store) {\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_4__[\"ServerStyleSheet\"]();\n  var MUISheet = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"ServerStyleSheets\"](); // Styled component server style sheet collection\n\n  var styledCollect = sheet.collectStyles( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n    location: req.path,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_components_presentational_Header_header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__[\"renderRoutes\"])(_client_components_Routes_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"])))); // Injecting Material UI styles to server\n\n  var MUISheetCollect = MUISheet.collect(styledCollect); // Render the content on server\n\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(MUISheetCollect);\n  var MUISTYLES = MUISheet.toString(); // Styled component styles\n\n  var styles = sheet.getStyleTags();\n  return \"<html>\\n            <head>\\n                <title>React Server Side Application</title>\\n                <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\\\" />\\n                <style>\\n                body {\\n                  font-family: 'Roboto', sans-serif;\\n                  margin: 0;\\n                }\\n                </style>\\n                <style id=\\\"jss-server-side\\\">\".concat(MUISTYLES, \"</style>\\n                \").concat(styles, \"\\n            </head>\\n            <body>\\n                <div id=\\\"root\\\">\").concat(content, \"</div>\\n                <script>\\n                  window.INITIAL_STATE = \").concat(JSON.stringify(store.getState()), \"\\n                </script>\\n                <script src=\\\"bundle.js\\\"></script>\\n            </body>\\n            </html>\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderer);\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n/* harmony import */ var _client_components_Routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/components/Routes/routes */ \"./src/client/components/Routes/routes.js\");\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar PORT = 8000; // Declare public directory\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"public\")); // Home route\n\napp.get(\"*\", function (req, res) {\n  var store = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"matchRoutes\"])(_client_components_Routes_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  });\n  Promise.all(promises).then(function (state) {\n    res.send(Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, store));\n  });\n});\napp.listen(PORT, function () {\n  return console.log(\"Server is running on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getAllFilterValues, getformattedDate, isNoItemChecked, getFilteredData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllFilterValues\", function() { return getAllFilterValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getformattedDate\", function() { return getformattedDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNoItemChecked\", function() { return isNoItemChecked; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilteredData\", function() { return getFilteredData; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n\nvar getAllFilterValues = function getAllFilterValues(input, filterTerms, fieldToFilter, subField) {\n  var output = input === null || input === void 0 ? void 0 : input.reduce(function (acc, item) {\n    var itemToBeFiltered = subField ? item[fieldToFilter][subField] : item[fieldToFilter];\n\n    if (!acc.some(function (item) {\n      return (item === null || item === void 0 ? void 0 : item.label) === itemToBeFiltered;\n    })) {\n      acc.push({\n        label: itemToBeFiltered,\n        checked: false\n      });\n    }\n\n    return acc;\n  }, []);\n  var updatedOutput = output === null || output === void 0 ? void 0 : output.map(function (item) {\n    if ((filterTerms === null || filterTerms === void 0 ? void 0 : filterTerms.length) > 0) {\n      var filterTerm = filterTerms.find(function (filterItem) {\n        return filterItem.name === fieldToFilter;\n      });\n\n      if (filterTerm) {\n        var filterSubTerm = filterTerm.values.find(function (filterItem) {\n          return filterItem.label === item.label;\n        });\n\n        if (filterSubTerm) {\n          item.checked = filterSubTerm.checked;\n        }\n      }\n    }\n\n    return item;\n  });\n  return {\n    name: fieldToFilter,\n    values: updatedOutput\n  };\n};\nvar getformattedDate = function getformattedDate(dateInput) {\n  var date = new Date(dateInput);\n  return \"\".concat(date.getFullYear(), \"-\").concat(date.getMonth() + 1, \"-\").concat(date.getDate());\n};\nvar isNoItemChecked = function isNoItemChecked(filteredData) {\n  if (filteredData.length > 0) {\n    var checkedStatus = filteredData.reduce(function (acc, _ref) {\n      var name = _ref.name,\n          values = _ref.values;\n      var itemCheckedStatus = values.map(function (_ref2) {\n        var label = _ref2.label,\n            checked = _ref2.checked;\n        return checked;\n      });\n      acc.push.apply(acc, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(itemCheckedStatus));\n      return acc;\n    }, []);\n\n    if (checkedStatus.includes(true)) {\n      return false;\n    } else {\n      return true;\n    }\n  }\n\n  return true;\n};\nvar getFilteredData = function getFilteredData(actualStateData, filterStateData) {\n  if (filterStateData.length > 0 && !isNoItemChecked(filterStateData)) {\n    var refactoredFilterStateData = filterStateData.map(function (filterItem) {\n      var onlyCheckedData = filterItem.values.map(function (valueItem) {\n        if (valueItem.checked) {\n          return valueItem.label;\n        }\n      });\n      return {\n        name: filterItem.name,\n        values: onlyCheckedData\n      };\n    });\n    var outputData = refactoredFilterStateData.reduce(function (acc, _ref3) {\n      var name = _ref3.name,\n          values = _ref3.values;\n\n      if (name === 'species') {\n        var filteredSpeciesOutput = actualStateData.filter(function (filterItem) {\n          return values.includes(filterItem[name]);\n        });\n\n        if (acc.length > 0) {\n          acc = acc.filter(function (accItem) {\n            return values.includes(accItem[name]);\n          });\n        } else {\n          var _acc;\n\n          (_acc = acc).push.apply(_acc, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(filteredSpeciesOutput));\n        }\n      }\n\n      if (name === 'gender') {\n        var filteredGenderOutput = actualStateData.filter(function (filterItem) {\n          return values.includes(filterItem[name]);\n        });\n\n        if (acc.length > 0) {\n          var idMap = acc.map(function (item) {\n            return item.id;\n          });\n          acc = acc.filter(function (accItem) {\n            return values.includes(accItem[name]);\n          });\n        } else {\n          var _acc2;\n\n          (_acc2 = acc).push.apply(_acc2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(filteredGenderOutput));\n        }\n      }\n\n      if (name === 'origin') {\n        var filteredOriginOutput = actualStateData.filter(function (filterItem) {\n          return values.includes(filterItem[name].name);\n        });\n\n        if (acc.length > 0) {\n          acc = acc.filter(function (accItem) {\n            return values.includes(accItem[name].name);\n          });\n        } else {\n          var _acc3;\n\n          (_acc3 = acc).push.apply(_acc3, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(filteredOriginOutput));\n        }\n      }\n\n      return acc;\n    }, []);\n    return outputData;\n  }\n\n  return actualStateData;\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardMedia\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardMedia%22?");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Checkbox\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Checkbox%22?");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Dialog\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Dialog%22?");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogActions%22?");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContent%22?");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContentText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContentText%22?");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogTitle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogTitle%22?");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Grid%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/InputBase\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/InputBase%22?");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Menu\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Menu%22?");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/MenuItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/MenuItem%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Menu\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Menu%22?");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Search\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Search%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });