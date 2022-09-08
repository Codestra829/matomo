(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("CorePluginsAdmin"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", "CorePluginsAdmin", ], factory);
	else if(typeof exports === 'object')
		exports["Transitions"] = factory(require("CoreHome"), require("CorePluginsAdmin"), require("vue"));
	else
		root["Transitions"] = factory(root["CoreHome"], root["CorePluginsAdmin"], root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_CoreHome__, __WEBPACK_EXTERNAL_MODULE_CorePluginsAdmin__, __WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "plugins/Transitions/vue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=template&id=942b5cd0":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=template&id=942b5cd0 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _hoisted_1 = {\n  class: \"transition-export-popover row\"\n};\nvar _hoisted_2 = {\n  class: \"col l6\"\n};\nvar _hoisted_3 = {\n  class: \"input-field\"\n};\nvar _hoisted_4 = {\n  class: \"matomo-field\"\n};\nvar _hoisted_5 = {\n  class: \"col l12\"\n};\nvar _hoisted_6 = [\"href\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_Field = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"Field\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_Field, {\n    uicontrol: \"radio\",\n    name: \"exportFormat\",\n    title: _ctx.translate('CoreHome_ExportFormat'),\n    \"model-value\": _ctx.exportFormat,\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = function ($event) {\n      return _ctx.exportFormat = $event;\n    }),\n    \"full-width\": true,\n    options: _ctx.exportFormatOptions\n  }, null, 8\n  /* PROPS */\n  , [\"title\", \"model-value\", \"options\"])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", {\n    class: \"btn\",\n    href: _ctx.exportLink,\n    target: \"_new\",\n    title: \"translate('CoreHome_ExportTooltip')\"\n  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.translate('General_Export')), 9\n  /* TEXT, PROPS */\n  , _hoisted_6)])]);\n}\n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?vue&type=template&id=5ff323fd":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?vue&type=template&id=5ff323fd ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _hoisted_1 = {\n  class: \"row\"\n};\nvar _hoisted_2 = {\n  class: \"col s12 m3\"\n};\nvar _hoisted_3 = {\n  name: \"actionType\"\n};\nvar _hoisted_4 = {\n  class: \"col s12 m9\"\n};\nvar _hoisted_5 = {\n  name: \"actionName\"\n};\nvar _hoisted_6 = {\n  class: \"loadingPiwik\",\n  style: {\n    \"display\": \"none\"\n  },\n  id: \"transitions_inline_loading\"\n};\n\nvar _hoisted_7 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"img\", {\n  src: \"plugins/Morpheus/images/loading-blue.gif\",\n  alt: \"\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_8 = {\n  class: \"popoverContainer\"\n};\nvar _hoisted_9 = {\n  id: \"Transitions_Error_Container\"\n};\nvar _hoisted_10 = {\n  class: \"dataTableWrapper\"\n};\nvar _hoisted_11 = {\n  class: \"dataTableFeatures\"\n};\nvar _hoisted_12 = {\n  class: \"dataTableFooterNavigation\"\n};\nvar _hoisted_13 = {\n  class: \"dataTableControls\"\n};\nvar _hoisted_14 = {\n  class: \"row\"\n};\nvar _hoisted_15 = {\n  class: \"dataTableAction\"\n};\n\nvar _hoisted_16 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", {\n  class: \"icon-export\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_17 = [_hoisted_16];\nvar _hoisted_18 = {\n  class: \"alert alert-info\"\n};\nvar _hoisted_19 = [\"innerHTML\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_Field = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"Field\");\n\n  var _component_ActivityIndicator = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"ActivityIndicator\");\n\n  var _directive_transition_exporter = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveDirective\"])(\"transition-exporter\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])({\n      widgetBody: _ctx.isWidget\n    }),\n    id: \"transitions_report\"\n  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_Field, {\n    uicontrol: \"select\",\n    name: \"actionType\",\n    modelValue: _ctx.actionType,\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = function ($event) {\n      return _ctx.actionType = $event;\n    }),\n    title: _ctx.translate('Actions_ActionType'),\n    \"full-width\": true,\n    options: _ctx.actionTypeOptions\n  }, null, 8\n  /* PROPS */\n  , [\"modelValue\", \"title\", \"options\"])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_Field, {\n    uicontrol: \"select\",\n    name: \"actionName\",\n    modelValue: _ctx.actionName,\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = function ($event) {\n      return _ctx.actionName = $event;\n    }),\n    title: _ctx.translate('Transitions_TopX', 100),\n    \"full-width\": true,\n    disabled: !_ctx.isEnabled,\n    options: _ctx.actionNameOptions\n  }, null, 8\n  /* PROPS */\n  , [\"modelValue\", \"title\", \"disabled\", \"options\"])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_ActivityIndicator, {\n    loading: _ctx.isLoading\n  }, null, 8\n  /* PROPS */\n  , [\"loading\"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_6, [_hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.translate('General_LoadingData')), 1\n  /* TEXT */\n  )]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withDirectives\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_8, null, 512\n  /* NEED_PATCH */\n  ), [[vue__WEBPACK_IMPORTED_MODULE_0__[\"vShow\"], !_ctx.isLoading && _ctx.isEnabled]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withDirectives\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_9, null, 512\n  /* NEED_PATCH */\n  ), [[vue__WEBPACK_IMPORTED_MODULE_0__[\"vShow\"], !_ctx.isLoading]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withDirectives\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_11, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_14, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withDirectives\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", _hoisted_15, _hoisted_17, 512\n  /* NEED_PATCH */\n  ), [[_directive_transition_exporter]])])])])])], 512\n  /* NEED_PATCH */\n  ), [[vue__WEBPACK_IMPORTED_MODULE_0__[\"vShow\"], _ctx.isEnabled]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_18, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.translate('Transitions_AvailableInOtherReports')) + \" \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.translate('Actions_PageUrls')) + \", \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.translate('Actions_SubmenuPageTitles')) + \", \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.translate('Actions_SubmenuPagesEntry')) + \" \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.translate('General_And')) + \" \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.translate('Actions_SubmenuPagesExit')) + \". \", 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", {\n    innerHTML: _ctx.$sanitize(_ctx.availableInOtherReports2)\n  }, null, 8\n  /* PROPS */\n  , _hoisted_19)])], 2\n  /* CLASS */\n  );\n}\n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader/index.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=script&lang=ts":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=script&lang=ts ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var CoreHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! CoreHome */ \"CoreHome\");\n/* harmony import */ var CoreHome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(CoreHome__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var CorePluginsAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! CorePluginsAdmin */ \"CorePluginsAdmin\");\n/* harmony import */ var CorePluginsAdmin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(CorePluginsAdmin__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _transitionParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transitionParams */ \"./plugins/Transitions/vue/src/TransitionExporter/transitionParams.ts\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  props: {\n    exportFormatOptions: {\n      type: Object,\n      required: true\n    }\n  },\n  components: {\n    Field: CorePluginsAdmin__WEBPACK_IMPORTED_MODULE_2__[\"Field\"]\n  },\n  data: function data() {\n    return {\n      exportFormat: 'JSON'\n    };\n  },\n  computed: {\n    exportLink: function exportLink() {\n      var exportUrlParams = {\n        module: 'API'\n      };\n      exportUrlParams.method = 'Transitions.getTransitionsForAction';\n      exportUrlParams.actionType = _transitionParams__WEBPACK_IMPORTED_MODULE_3__[\"actionType\"].value;\n      exportUrlParams.actionName = _transitionParams__WEBPACK_IMPORTED_MODULE_3__[\"actionName\"].value;\n      exportUrlParams.idSite = CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"Matomo\"].idSite;\n      exportUrlParams.period = CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"Matomo\"].period;\n      exportUrlParams.date = CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"Matomo\"].currentDateString;\n      exportUrlParams.format = this.exportFormat;\n      exportUrlParams.token_auth = CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"Matomo\"].token_auth;\n      exportUrlParams.force_api_session = 1;\n      var currentUrl = window.location.href;\n      var urlParts = currentUrl.split('/');\n      urlParts.pop();\n      var url = urlParts.join('/');\n      return \"\".concat(url, \"/index.php?\").concat(CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"MatomoUrl\"].stringify(exportUrlParams));\n    }\n  }\n}));\n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader/index.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?vue&type=script&lang=ts":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var CoreHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! CoreHome */ \"CoreHome\");\n/* harmony import */ var CoreHome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(CoreHome__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var CorePluginsAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! CorePluginsAdmin */ \"CorePluginsAdmin\");\n/* harmony import */ var CorePluginsAdmin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(CorePluginsAdmin__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TransitionExporter_TransitionExporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TransitionExporter/TransitionExporter */ \"./plugins/Transitions/vue/src/TransitionExporter/TransitionExporter.ts\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  props: {\n    isWidget: Boolean\n  },\n  components: {\n    Field: CorePluginsAdmin__WEBPACK_IMPORTED_MODULE_2__[\"Field\"],\n    ActivityIndicator: CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"ActivityIndicator\"]\n  },\n  directives: {\n    TransitionExporter: _TransitionExporter_TransitionExporter__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data: function data() {\n    return {\n      actionType: 'Actions.getPageUrls',\n      actionNameOptions: [],\n      actionTypeOptions: [{\n        key: 'Actions.getPageUrls',\n        value: Object(CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"translate\"])('Actions_PageUrls')\n      }, {\n        key: 'Actions.getPageTitles',\n        value: Object(CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"translate\"])('Actions_WidgetPageTitles')\n      }],\n      isLoading: false,\n      actionName: null,\n      isEnabled: true,\n      noDataKey: '_____ignore_____'\n    };\n  },\n  setup: function setup() {\n    var transitionsInstance = null;\n    var transitionsUrl = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])();\n\n    var onSwitchTransitionsUrl = function onSwitchTransitionsUrl(params) {\n      if (params !== null && params !== void 0 && params.url) {\n        transitionsUrl.value = params.url;\n      }\n    };\n\n    CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"Matomo\"].on('Transitions.switchTransitionsUrl', onSwitchTransitionsUrl);\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"onBeforeUnmount\"])(function () {\n      CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"Matomo\"].off('Transitions.switchTransitionsUrl', onSwitchTransitionsUrl);\n    });\n\n    var createTransitionsInstance = function createTransitionsInstance(type, actionName) {\n      if (!transitionsInstance) {\n        transitionsInstance = new window.Piwik_Transitions(type, actionName, null, '');\n      } else {\n        transitionsInstance.reset(type, actionName, '');\n      }\n    };\n\n    var getTransitionsInstance = function getTransitionsInstance() {\n      return transitionsInstance;\n    };\n\n    return {\n      transitionsUrl: transitionsUrl,\n      createTransitionsInstance: createTransitionsInstance,\n      getTransitionsInstance: getTransitionsInstance\n    };\n  },\n  watch: {\n    transitionsUrl: function transitionsUrl(newValue) {\n      var _this = this;\n\n      var url = newValue;\n\n      if (this.isUrlReport) {\n        url = url.replace('https://', '').replace('http://', '');\n      }\n\n      var found = this.actionNameOptions.find(function (option) {\n        var optionUrl = option.url;\n\n        if (optionUrl && _this.isUrlReport) {\n          optionUrl = String(optionUrl).replace('https://', '').replace('http://', '');\n        } else {\n          optionUrl = undefined;\n        }\n\n        return option.key === url || url === optionUrl && optionUrl;\n      });\n\n      if (found) {\n        this.actionName = found.key;\n      } else {\n        // we only fetch top 100 in the report... so the entry the user clicked on, might not\n        // be in the top 100\n        this.actionNameOptions = [].concat(_toConsumableArray(this.actionNameOptions), [{\n          key: url,\n          value: url\n        }]);\n        this.actionName = url;\n      }\n    },\n    actionName: function actionName(newValue) {\n      if (newValue === null || newValue === this.noDataKey) {\n        return;\n      }\n\n      var type = this.isUrlReport ? 'url' : 'title';\n      this.createTransitionsInstance(type, newValue);\n      this.getTransitionsInstance().showPopover(true);\n    },\n    actionType: function actionType(newValue) {\n      this.fetch(newValue);\n    }\n  },\n  created: function created() {\n    this.fetch(this.actionType);\n  },\n  methods: {\n    detectActionName: function detectActionName(reports) {\n      var _this2 = this;\n\n      var othersLabel = Object(CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"translate\"])('General_Others');\n      reports.forEach(function (report) {\n        if (!report) {\n          return;\n        }\n\n        if (report.label === othersLabel) {\n          return;\n        }\n\n        var key = _this2.isUrlReport ? report.url : report.label;\n\n        if (key) {\n          var pageviews = Object(CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"translate\"])('Transitions_NumPageviews', report.nb_hits);\n          var label = \"\".concat(report.label, \" (\").concat(pageviews, \")\");\n\n          _this2.actionNameOptions.push({\n            key: key,\n            value: label,\n            url: report.url\n          });\n\n          if (!_this2.actionName) {\n            _this2.actionName = key;\n          }\n        }\n      });\n    },\n    fetch: function fetch(type) {\n      var _this3 = this;\n\n      this.isLoading = true;\n      this.actionNameOptions = [];\n      this.actionName = null;\n      CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"AjaxHelper\"].fetch({\n        method: type,\n        flat: 1,\n        filter_limit: 100,\n        filter_sort_order: 'desc',\n        filter_sort_column: 'nb_hits',\n        showColumns: 'label,nb_hits,url'\n      }).then(function (report) {\n        _this3.isLoading = false;\n        _this3.actionNameOptions = [];\n        _this3.actionName = null;\n\n        if (report !== null && report !== void 0 && report.length) {\n          _this3.isEnabled = true;\n\n          _this3.detectActionName(report);\n        }\n\n        if (_this3.actionName === null || _this3.actionNameOptions.length === 0) {\n          _this3.isEnabled = false;\n          _this3.actionName = _this3.noDataKey;\n\n          _this3.actionNameOptions.push({\n            key: _this3.noDataKey,\n            value: Object(CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"translate\"])('CoreHome_ThereIsNoDataForThisReport')\n          });\n        }\n      }).catch(function () {\n        _this3.isLoading = false;\n        _this3.isEnabled = false;\n      });\n    }\n  },\n  computed: {\n    isUrlReport: function isUrlReport() {\n      return this.actionType === 'Actions.getPageUrls';\n    },\n    availableInOtherReports2: function availableInOtherReports2() {\n      return Object(CoreHome__WEBPACK_IMPORTED_MODULE_1__[\"translate\"])('Transitions_AvailableInOtherReports2', '<span class=\"icon-transition\"></span>');\n    }\n  }\n}));\n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js ***!
  \**********************************************************************************/
/*! exports provided: TransitionExporter, TransitionSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPublicPath */ \"./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js\");\n/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~entry */ \"./plugins/Transitions/vue/src/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TransitionExporter\", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[\"TransitionExporter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TransitionSwitcher\", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[\"TransitionSwitcher\"]; });\n\n\n\n\n\n//# sourceURL=webpack://Transitions/./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js?");

/***/ }),

/***/ "./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// This file is imported into lib/wc client bundles.\n\nif (typeof window !== 'undefined') {\n  var currentScript = window.document.currentScript\n  if (false) { var getCurrentScript; }\n\n  var src = currentScript && currentScript.src.match(/(.+\\/)[^/]+\\.js(\\?.*)?$/)\n  if (src) {\n    __webpack_require__.p = src[1] // eslint-disable-line\n  }\n}\n\n// Indicate to webpack that this file can be concatenated\n/* harmony default export */ __webpack_exports__[\"default\"] = (null);\n\n\n//# sourceURL=webpack://Transitions/./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js?");

/***/ }),

/***/ "./plugins/Transitions/vue/src/TransitionExporter/TransitionExporter.adapter.ts":
/*!**************************************************************************************!*\
  !*** ./plugins/Transitions/vue/src/TransitionExporter/TransitionExporter.adapter.ts ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TransitionExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransitionExporter */ \"./plugins/Transitions/vue/src/TransitionExporter/TransitionExporter.ts\");\n/*!\n * Matomo - free/libre analytics platform\n *\n * @link https://matomo.org\n * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later\n */\n\n\nfunction transitionExporter() {\n  return {\n    restrict: 'A',\n    link: function link(scope, element) {\n      _TransitionExporter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mounted(element[0]);\n    }\n  };\n}\n\nwindow.angular.module('piwikApp').directive('transitionExporter', transitionExporter);\n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionExporter/TransitionExporter.adapter.ts?");

/***/ }),

/***/ "./plugins/Transitions/vue/src/TransitionExporter/TransitionExporter.ts":
/*!******************************************************************************!*\
  !*** ./plugins/Transitions/vue/src/TransitionExporter/TransitionExporter.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var CoreHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! CoreHome */ \"CoreHome\");\n/* harmony import */ var CoreHome__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(CoreHome__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TransitionExporterPopover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransitionExporterPopover */ \"./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue\");\n/* harmony import */ var _transitionParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionParams */ \"./plugins/Transitions/vue/src/TransitionExporter/transitionParams.ts\");\n/*!\n * Matomo - free/libre analytics platform\n *\n * @link https://matomo.org\n * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later\n */\n\n\n\nvar _window = window,\n    Piwik_Popover = _window.Piwik_Popover;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mounted: function mounted(element) {\n    element.addEventListener('click', function (e) {\n      e.preventDefault();\n      var props = {\n        exportFormat: 'JSON',\n        exportFormatOptions: [{\n          key: 'JSON',\n          value: 'JSON'\n        }, {\n          key: 'XML',\n          value: 'XML'\n        }]\n      };\n      var app = Object(CoreHome__WEBPACK_IMPORTED_MODULE_0__[\"createVueApp\"])({\n        template: \"\\n          <popover v-bind=\\\"bind\\\"/>\",\n        data: function data() {\n          return {\n            bind: props\n          };\n        }\n      });\n      app.component('popover', _TransitionExporterPopover__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n      var mountPoint = document.createElement('div');\n      app.mount(mountPoint);\n      Piwik_Popover.showLoading('');\n      Piwik_Popover.setTitle(\"\".concat(_transitionParams__WEBPACK_IMPORTED_MODULE_2__[\"actionName\"].value, \" \").concat(Object(CoreHome__WEBPACK_IMPORTED_MODULE_0__[\"translate\"])('Transitions_Transitions')));\n      Piwik_Popover.setContent(mountPoint);\n      Piwik_Popover.onClose(function () {\n        app.unmount();\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionExporter/TransitionExporter.ts?");

/***/ }),

/***/ "./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue":
/*!**************************************************************************************!*\
  !*** ./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TransitionExporterPopover_vue_vue_type_template_id_942b5cd0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransitionExporterPopover.vue?vue&type=template&id=942b5cd0 */ \"./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=template&id=942b5cd0\");\n/* harmony import */ var _TransitionExporterPopover_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransitionExporterPopover.vue?vue&type=script&lang=ts */ \"./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=script&lang=ts\");\n/* empty/unused harmony star reexport */\n\n\n_TransitionExporterPopover_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _TransitionExporterPopover_vue_vue_type_template_id_942b5cd0__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_TransitionExporterPopover_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_TransitionExporterPopover_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?");

/***/ }),

/***/ "./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=script&lang=ts":
/*!**************************************************************************************************************!*\
  !*** ./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_cli_plugin_typescript_node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_plugin_typescript_node_modules_ts_loader_index_js_ref_14_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_TransitionExporterPopover_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!../../../../../node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./TransitionExporterPopover.vue?vue&type=script&lang=ts */ \"./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader/index.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=script&lang=ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_vue_cli_plugin_typescript_node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_plugin_typescript_node_modules_ts_loader_index_js_ref_14_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_TransitionExporterPopover_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?");

/***/ }),

/***/ "./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=template&id=942b5cd0":
/*!********************************************************************************************************************!*\
  !*** ./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=template&id=942b5cd0 ***!
  \********************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_cli_plugin_babel_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_TransitionExporterPopover_vue_vue_type_template_id_942b5cd0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../../node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./TransitionExporterPopover.vue?vue&type=template&id=942b5cd0 */ \"./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=template&id=942b5cd0\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_cli_plugin_babel_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_TransitionExporterPopover_vue_vue_type_template_id_942b5cd0__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?");

/***/ }),

/***/ "./plugins/Transitions/vue/src/TransitionExporter/transitionParams.ts":
/*!****************************************************************************!*\
  !*** ./plugins/Transitions/vue/src/TransitionExporter/transitionParams.ts ***!
  \****************************************************************************/
/*! exports provided: actionType, actionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionType\", function() { return actionType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionName\", function() { return actionName; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var CoreHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! CoreHome */ \"CoreHome\");\n/* harmony import */ var CoreHome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(CoreHome__WEBPACK_IMPORTED_MODULE_1__);\n/*!\n * Matomo - free/libre analytics platform\n *\n * @link https://matomo.org\n * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later\n */\n\n\nvar actionType = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])('');\nvar actionName = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])('');\n\nvar onDataChanged = function onDataChanged(params) {\n  actionType.value = params.actionType;\n  actionName.value = params.actionName;\n};\n\nCoreHome__WEBPACK_IMPORTED_MODULE_1__[\"Matomo\"].on('Transitions.dataChanged', onDataChanged);\n\n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionExporter/transitionParams.ts?");

/***/ }),

/***/ "./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue":
/*!*******************************************************************************!*\
  !*** ./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TransitionSwitcher_vue_vue_type_template_id_5ff323fd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransitionSwitcher.vue?vue&type=template&id=5ff323fd */ \"./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?vue&type=template&id=5ff323fd\");\n/* harmony import */ var _TransitionSwitcher_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransitionSwitcher.vue?vue&type=script&lang=ts */ \"./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?vue&type=script&lang=ts\");\n/* empty/unused harmony star reexport */\n\n\n_TransitionSwitcher_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _TransitionSwitcher_vue_vue_type_template_id_5ff323fd__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_TransitionSwitcher_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_TransitionSwitcher_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?");

/***/ }),

/***/ "./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************!*\
  !*** ./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_cli_plugin_typescript_node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_plugin_typescript_node_modules_ts_loader_index_js_ref_14_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_TransitionSwitcher_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!../../../../../node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./TransitionSwitcher.vue?vue&type=script&lang=ts */ \"./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader/index.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?vue&type=script&lang=ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_vue_cli_plugin_typescript_node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_plugin_typescript_node_modules_ts_loader_index_js_ref_14_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_TransitionSwitcher_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?");

/***/ }),

/***/ "./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?vue&type=template&id=5ff323fd":
/*!*************************************************************************************************************!*\
  !*** ./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?vue&type=template&id=5ff323fd ***!
  \*************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_cli_plugin_babel_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_TransitionSwitcher_vue_vue_type_template_id_5ff323fd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../../node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./TransitionSwitcher.vue?vue&type=template&id=5ff323fd */ \"./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?vue&type=template&id=5ff323fd\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_cli_plugin_babel_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_TransitionSwitcher_vue_vue_type_template_id_5ff323fd__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue?");

/***/ }),

/***/ "./plugins/Transitions/vue/src/index.ts":
/*!**********************************************!*\
  !*** ./plugins/Transitions/vue/src/index.ts ***!
  \**********************************************/
/*! exports provided: TransitionExporter, TransitionSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TransitionExporter_TransitionExporter_adapter_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransitionExporter/TransitionExporter.adapter.ts */ \"./plugins/Transitions/vue/src/TransitionExporter/TransitionExporter.adapter.ts\");\n/* harmony import */ var _TransitionExporter_TransitionExporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransitionExporter/TransitionExporter */ \"./plugins/Transitions/vue/src/TransitionExporter/TransitionExporter.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TransitionExporter\", function() { return _TransitionExporter_TransitionExporter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _TransitionSwitcher_TransitionSwitcher_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransitionSwitcher/TransitionSwitcher.vue */ \"./plugins/Transitions/vue/src/TransitionSwitcher/TransitionSwitcher.vue\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TransitionSwitcher\", function() { return _TransitionSwitcher_TransitionSwitcher_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/*!\n * Matomo - free/libre analytics platform\n *\n * @link https://matomo.org\n * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later\n */\n\n\n\n\n//# sourceURL=webpack://Transitions/./plugins/Transitions/vue/src/index.ts?");

/***/ }),

/***/ "CoreHome":
/*!***************************!*\
  !*** external "CoreHome" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_CoreHome__;\n\n//# sourceURL=webpack://Transitions/external_%22CoreHome%22?");

/***/ }),

/***/ "CorePluginsAdmin":
/*!***********************************!*\
  !*** external "CorePluginsAdmin" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_CorePluginsAdmin__;\n\n//# sourceURL=webpack://Transitions/external_%22CorePluginsAdmin%22?");

/***/ }),

/***/ "vue":
/*!******************************************************************!*\
  !*** external {"commonjs":"vue","commonjs2":"vue","root":"Vue"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;\n\n//# sourceURL=webpack://Transitions/external_%7B%22commonjs%22:%22vue%22,%22commonjs2%22:%22vue%22,%22root%22:%22Vue%22%7D?");

/***/ })

/******/ });
});