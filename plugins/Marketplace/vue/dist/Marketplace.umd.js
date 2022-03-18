(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["Marketplace"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else
		root["Marketplace"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"]);
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
/******/ 	__webpack_require__.p = "plugins/Marketplace/vue/dist/";
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
__webpack_require__.d(__webpack_exports__, "LicenseKey", function() { return /* reexport */ LicenseKey; });

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

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/Marketplace/vue/src/LicenseKey/LicenseKey.vue?vue&type=template&id=391f4838

var _hoisted_1 = {
  class: "marketplace-max-width"
};
var _hoisted_2 = {
  class: "marketplace-paid-intro"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 0
};

var _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_6 = {
  class: "licenseToolbar valign-wrapper"
};
var _hoisted_7 = ["href"];
var _hoisted_8 = {
  key: 0
};
var _hoisted_9 = {
  href: "javascript:;",
  class: "btn installAllPaidPlugins valign"
};
var _hoisted_10 = {
  class: "ui-confirm",
  id: "installAllPaidPluginsAtOnce"
};

var _hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_13 = ["data-href", "value"];
var _hoisted_14 = ["value"];
var _hoisted_15 = {
  key: 1
};
var _hoisted_16 = {
  key: 0
};
var _hoisted_17 = ["innerHTML"];

var _hoisted_18 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_19 = {
  class: "licenseToolbar valign-wrapper"
};
var _hoisted_20 = {
  key: 1
};
var _hoisted_21 = ["innerHTML"];
var _hoisted_22 = {
  class: "ui-confirm",
  id: "confirmRemoveLicense",
  ref: "confirmRemoveLicense"
};
var _hoisted_23 = ["value"];
var _hoisted_24 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultLicenseKeyFields = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("DefaultLicenseKeyFields");

  var _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");

  var _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [_ctx.isValidConsumer ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_3, [_ctx.isSuperUser ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Marketplace_PaidPluginsWithLicenseKeyIntro', '')) + " ", 1), _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_DefaultLicenseKeyFields, {
    "model-value": _ctx.licenseKey,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      _ctx.licenseKey = $event;

      _ctx.updatedLicenseKey();
    }),
    onConfirm: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.updateLicense();
    }),
    "has-license-key": _ctx.hasLicenseKey,
    "is-valid-consumer": _ctx.isValidConsumer,
    "enable-update": _ctx.enableUpdate
  }, null, 8, ["model-value", "has-license-key", "is-valid-consumer", "enable-update"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    class: "valign",
    id: "remove_license_key",
    onConfirm: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.removeLicense();
    }),
    value: _ctx.translate('Marketplace_RemoveLicenseKey')
  }, null, 8, ["value"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    class: "btn valign",
    href: _ctx.subscriptionOverviewLink
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Marketplace_ViewSubscriptions')), 9, _hoisted_7), _ctx.showInstallAllPaidPlugins ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", _hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Marketplace_InstallPurchasedPlugins')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Marketplace_InstallAllPurchasedPlugins')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Marketplace_InstallThesePlugins')) + " ", 1), _hoisted_11, _hoisted_12]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.paidPluginsToInstallAtOnce, function (pluginName) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
      key: pluginName
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(pluginName), 1);
  }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "install",
    type: "button",
    "data-href": _ctx.installAllPaidPluginsLink,
    value: _ctx.translate('Marketplace_InstallAllPurchasedPluginsAction', _ctx.paidPluginsToInstallAtOnce.length)
  }, null, 8, _hoisted_13), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "cancel",
    type: "button",
    value: _ctx.translate('General_Cancel')
  }, null, 8, _hoisted_14)])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isUpdating
  }, null, 8, ["loading"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_15, [_ctx.isSuperUser ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.$sanitize(_ctx.noLicenseKeyIntroText)
  }, null, 8, _hoisted_17), _hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_19, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_DefaultLicenseKeyFields, {
    "model-value": _ctx.licenseKey,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      _ctx.licenseKey = $event;

      _ctx.updatedLicenseKey();
    }),
    onConfirm: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.updateLicense();
    }),
    "has-license-key": _ctx.hasLicenseKey,
    "is-valid-consumer": _ctx.isValidConsumer,
    "enable-update": _ctx.enableUpdate
  }, null, 8, ["model-value", "has-license-key", "is-valid-consumer", "enable-update"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isUpdating
  }, null, 8, ["loading"])])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_20, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.$sanitize(_ctx.noLicenseKeyIntroNoSuperUserAccessText)
  }, null, 8, _hoisted_21)]))]))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_22, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Marketplace_ConfirmRemoveLicense')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, _hoisted_23), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, _hoisted_24)], 512)]);
}
// CONCATENATED MODULE: ./plugins/Marketplace/vue/src/LicenseKey/LicenseKey.vue?vue&type=template&id=391f4838

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/Marketplace/vue/src/LicenseKey/DefaultLicenseKeyFields.vue?vue&type=template&id=26188382

var DefaultLicenseKeyFieldsvue_type_template_id_26188382_hoisted_1 = {
  class: "valign licenseKeyText"
};
function DefaultLicenseKeyFieldsvue_type_template_id_26188382_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");

  var _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", DefaultLicenseKeyFieldsvue_type_template_id_26188382_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "text",
    name: "license_key",
    "full-width": true,
    "model-value": _ctx.modelValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('update:modelValue', $event);
    }),
    placeholder: _ctx.licenseKeyPlaceholder
  }, null, 8, ["model-value", "placeholder"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    class: "valign",
    onConfirm: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('confirm');
    }),
    disabled: !_ctx.enableUpdate,
    value: _ctx.saveButtonText,
    id: "submit_license_key"
  }, null, 8, ["disabled", "value"])], 64);
}
// CONCATENATED MODULE: ./plugins/Marketplace/vue/src/LicenseKey/DefaultLicenseKeyFields.vue?vue&type=template&id=26188382

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/Marketplace/vue/src/LicenseKey/DefaultLicenseKeyFields.vue?vue&type=script&lang=ts



/* harmony default export */ var DefaultLicenseKeyFieldsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    modelValue: String,
    isValidConsumer: Boolean,
    hasLicenseKey: Boolean,
    enableUpdate: Boolean
  },
  emits: ['update:modelValue', 'confirm'],
  components: {
    Field: external_CorePluginsAdmin_["Field"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  computed: {
    licenseKeyPlaceholder: function licenseKeyPlaceholder() {
      return this.isValidConsumer ? Object(external_CoreHome_["translate"])('Marketplace_LicenseKeyIsValidShort') : Object(external_CoreHome_["translate"])('Marketplace_LicenseKey');
    },
    saveButtonText: function saveButtonText() {
      return this.hasLicenseKey ? Object(external_CoreHome_["translate"])('CoreUpdater_UpdateTitle') : Object(external_CoreHome_["translate"])('Marketplace_ActivateLicenseKey');
    }
  }
}));
// CONCATENATED MODULE: ./plugins/Marketplace/vue/src/LicenseKey/DefaultLicenseKeyFields.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/Marketplace/vue/src/LicenseKey/DefaultLicenseKeyFields.vue



DefaultLicenseKeyFieldsvue_type_script_lang_ts.render = DefaultLicenseKeyFieldsvue_type_template_id_26188382_render

/* harmony default export */ var DefaultLicenseKeyFields = (DefaultLicenseKeyFieldsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/Marketplace/vue/src/LicenseKey/LicenseKey.vue?vue&type=script&lang=ts




/* harmony default export */ var LicenseKeyvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    isValidConsumer: Boolean,
    isSuperUser: Boolean,
    isAutoUpdatePossible: Boolean,
    isPluginsAdminEnabled: Boolean,
    hasLicenseKey: Boolean,
    paidPluginsToInstallAtOnce: {
      type: Array,
      required: true
    },
    installNonce: {
      type: String,
      required: true
    }
  },
  components: {
    SaveButton: external_CorePluginsAdmin_["SaveButton"],
    ActivityIndicator: external_CoreHome_["ActivityIndicator"],
    DefaultLicenseKeyFields: DefaultLicenseKeyFields
  },
  data: function data() {
    return {
      licenseKey: '',
      enableUpdate: false,
      isUpdating: false
    };
  },
  methods: {
    updateLicenseKey: function updateLicenseKey(action, licenseKey, onSuccessMessage) {
      var _this = this;

      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        method: "Marketplace.".concat(action),
        format: 'JSON'
      }, {
        licenseKey: this.licenseKey
      }, {
        withTokenInUrl: true
      }).then(function (response) {
        _this.isUpdating = false;

        if (response && response.value) {
          external_CoreHome_["NotificationsStore"].show({
            message: onSuccessMessage,
            context: 'success',
            type: 'transient'
          });
          external_CoreHome_["Matomo"].helper.redirect();
        }
      }, function () {
        _this.isUpdating = false;
      });
    },
    removeLicense: function removeLicense() {
      var _this2 = this;

      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmRemoveLicense, {
        yes: function yes() {
          _this2.enableUpdate = false;
          _this2.isUpdating = true;

          _this2.updateLicenseKey('deleteLicenseKey', '', Object(external_CoreHome_["translate"])('Marketplace_LicenseKeyDeletedSuccess'));
        }
      });
    },
    updatedLicenseKey: function updatedLicenseKey() {
      this.enableUpdate = !!this.licenseKey;
    },
    updateLicense: function updateLicense() {
      this.enableUpdate = false;
      this.isUpdating = true;
      this.updateLicenseKey('saveLicenseKey', this.licenseKey, Object(external_CoreHome_["translate"])('Marketplace_LicenseKeyActivatedSuccess'));
    }
  },
  computed: {
    subscriptionOverviewLink: function subscriptionOverviewLink() {
      return "?".concat(external_CoreHome_["MatomoUrl"].stringify(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].urlParsed.value), {}, {
        action: 'subscriptionOverview'
      })));
    },
    noLicenseKeyIntroText: function noLicenseKeyIntroText() {
      return Object(external_CoreHome_["translate"])('Marketplace_PaidPluginsNoLicenseKeyIntro', '<a target="_blank" rel="noreferrer noopener" href="https://matomo.org/recommends/premium-plugins/">', '</a>');
    },
    noLicenseKeyIntroNoSuperUserAccessText: function noLicenseKeyIntroNoSuperUserAccessText() {
      return Object(external_CoreHome_["translate"])('Marketplace_PaidPluginsNoLicenseKeyIntroNoSuperUserAccess', '<a target="_blank" rel="noreferrer noopener" href="https://matomo.org/recommends/premium-plugins/">', '</a>');
    },
    installAllPaidPluginsLink: function installAllPaidPluginsLink() {
      return "?".concat(external_CoreHome_["MatomoUrl"].stringify(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].urlParsed.value), {}, {
        action: 'installAllPaidPlugins',
        nonce: this.installNonce
      })));
    },
    showInstallAllPaidPlugins: function showInstallAllPaidPlugins() {
      return this.isAutoUpdatePossible && this.isPluginsAdminEnabled && this.paidPluginsToInstallAtOnce.length;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/Marketplace/vue/src/LicenseKey/LicenseKey.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/Marketplace/vue/src/LicenseKey/LicenseKey.vue



LicenseKeyvue_type_script_lang_ts.render = render

/* harmony default export */ var LicenseKey = (LicenseKeyvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/Marketplace/vue/src/index.ts
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
//# sourceMappingURL=Marketplace.umd.js.map