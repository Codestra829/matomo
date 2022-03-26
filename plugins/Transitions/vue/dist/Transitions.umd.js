(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["Transitions"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else
		root["Transitions"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a5a2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19dc":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19dc__;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a5a2":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a5a2__;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TransitionExporter", function() { return /* reexport */ TransitionExporter; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=template&id=35161b10

var _hoisted_1 = {
  class: "transition-export-popover row"
};
var _hoisted_2 = {
  class: "col l6"
};
var _hoisted_3 = {
  class: "input-field"
};
var _hoisted_4 = {
  class: "matomo-field"
};
var _hoisted_5 = {
  class: "col l12"
};
var _hoisted_6 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "radio",
    name: "exportFormat",
    title: _ctx.translate('CoreHome_ExportFormat'),
    "model-value": _ctx.exportFormat,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.exportFormat = $event;
    }),
    "full-width": true,
    options: _ctx.exportFormatOptions
  }, null, 8, ["title", "model-value", "options"])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    class: "btn",
    href: _ctx.exportLink,
    target: "_new",
    title: "translate('CoreHome_ExportTooltip')"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Export')), 9, _hoisted_6)])]);
}
// CONCATENATED MODULE: ./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=template&id=35161b10

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./plugins/Transitions/vue/src/TransitionExporter/transitionParams.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


var actionType = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])('');
var actionName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])('');

var onDataChanged = function onDataChanged(params) {
  actionType.value = params.actionType;
  actionName.value = params.actionName;
};

external_CoreHome_["Matomo"].on('Transitions.dataChanged', onDataChanged);

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=script&lang=ts




/* harmony default export */ var TransitionExporterPopovervue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    exportFormatOptions: {
      type: Object,
      required: true
    }
  },
  components: {
    Field: external_CorePluginsAdmin_["Field"]
  },
  data: function data() {
    return {
      exportFormat: 'JSON'
    };
  },
  computed: {
    exportLink: function exportLink() {
      var exportUrlParams = {
        module: 'API'
      };
      exportUrlParams.method = 'Transitions.getTransitionsForAction';
      exportUrlParams.actionType = actionType.value;
      exportUrlParams.actionName = actionName.value;
      exportUrlParams.idSite = external_CoreHome_["Matomo"].idSite;
      exportUrlParams.period = external_CoreHome_["Matomo"].period;
      exportUrlParams.date = external_CoreHome_["Matomo"].currentDateString;
      exportUrlParams.format = this.exportFormat;
      exportUrlParams.token_auth = external_CoreHome_["Matomo"].token_auth;
      exportUrlParams.force_api_session = 1;
      var currentUrl = window.location.href;
      var urlParts = currentUrl.split('/');
      urlParts.pop();
      var url = urlParts.join('/');
      return "".concat(url, "/index.php?").concat(external_CoreHome_["MatomoUrl"].stringify(exportUrlParams));
    }
  }
}));
// CONCATENATED MODULE: ./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/Transitions/vue/src/TransitionExporter/TransitionExporterPopover.vue



TransitionExporterPopovervue_type_script_lang_ts.render = render

/* harmony default export */ var TransitionExporterPopover = (TransitionExporterPopovervue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/Transitions/vue/src/TransitionExporter/TransitionExporter.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */



var _window = window,
    Piwik_Popover = _window.Piwik_Popover;
/* harmony default export */ var TransitionExporter = ({
  mounted: function mounted(element) {
    element.addEventListener('click', function () {
      var props = {
        exportFormat: 'JSON',
        exportFormatOptions: [{
          key: 'JSON',
          value: 'JSON'
        }, {
          key: 'XML',
          value: 'XML'
        }]
      };
      var app = Object(external_CoreHome_["createVueApp"])({
        template: "\n          <popover v-bind=\"bind\"/>",
        data: function data() {
          return {
            bind: props
          };
        }
      });
      app.component('popover', TransitionExporterPopover);
      var mountPoint = document.createElement('div');
      app.mount(mountPoint);
      Piwik_Popover.setTitle("".concat(actionName.value, " ").concat(Object(external_CoreHome_["translate"])('Transitions_Transitions')));
      Piwik_Popover.setContent(mountPoint);
      Piwik_Popover.onClose(function () {
        app.unmount();
      });
    });
  }
});
// CONCATENATED MODULE: ./plugins/Transitions/vue/src/TransitionExporter/TransitionExporter.adapter.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


function transitionExporter() {
  return {
    restrict: 'A',
    link: function link(scope, element) {
      TransitionExporter.mounted(element[0]);
    }
  };
}

window.angular.module('piwikApp').directive('transitionExporter', transitionExporter);
// CONCATENATED MODULE: ./plugins/Transitions/vue/src/index.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=Transitions.umd.js.map