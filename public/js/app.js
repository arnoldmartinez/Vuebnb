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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./resources/js/data.js");

var app = new Vue({
  el: '#app',
  data: {
    title: _data__WEBPACK_IMPORTED_MODULE_0__["default"].title,
    address: _data__WEBPACK_IMPORTED_MODULE_0__["default"].address,
    about: _data__WEBPACK_IMPORTED_MODULE_0__["default"].about,
    headerImageStyle: {
      'background-image': 'url(sample/header.jpg)'
    },
    amenities: _data__WEBPACK_IMPORTED_MODULE_0__["default"].amenities,
    prices: _data__WEBPACK_IMPORTED_MODULE_0__["default"].prices,
    contracted: true,
    modalOpen: false
  },
  methods: {
    escapeKeyListener: function escapeKeyListener(evt) {
      if (evt.keyCode === 27 && this.modalOpen) {
        this.modalOpen = false;
      }
    }
  },
  watch: {
    modalOpen: function modalOpen() {
      var className = 'modal-open';

      if (this.modalOpen) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    }
  },
  created: function created() {
    document.addEventListener('keyup', this.escapeKeyListener);
  },
  destroyed: function destroyed() {
    document.removeEventListener('keyup', this.escapeKeyListener);
  }
});

/***/ }),

/***/ "./resources/js/data.js":
/*!******************************!*\
  !*** ./resources/js/data.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Central Downtown Apartment with Amenities',
  address: 'No. 11, Song-Sho Road, Taipei City, Taiwan 105',
  about: 'Come and stay at this modern and comfortable apartment! My home is centrally located right in the middle' + ' of the downtown. Talk about convenience! Shops, stores, and other destination areas are nearby. \r\n\r\nFeel the ' + 'warmth of the sun as there is plenty of natural light showers. The living room features tv, sofa, table, radio, ' + 'and fan. There is free wi-fi with a fast internet speed. \r\n\r\nForgot shopping for breakfast staples? We provide ' + 'eggs, bread, cereals, coffee, milk, tea and cookies. Enjoy cooking as my kitchen boasts full size appliances. The ' + 'dining table is for four people. Need to wash your clothes? There is a washer and a dryer. We provide hampers, ' + 'detergents, and clothing conditioner. \r\n\r\nIf you need to hit the gym, there is located at the fourth floor of ' + 'the building. There is indoor spa and pool.',
  amenities: [{
    title: 'Wireless Internet',
    icon: 'fa-wifi'
  }, {
    title: 'Pets Allowed',
    icon: 'fa-paw'
  }, {
    title: 'TV',
    icon: 'fa-television'
  }, {
    title: 'Kitchen',
    icon: 'fa-cutlery'
  }, {
    title: 'Breakfast',
    icon: 'fa-coffee'
  }, {
    title: 'Laptop friendly workspace',
    icon: 'fa-laptop'
  }],
  prices: [{
    title: 'Per night',
    value: '$89'
  }, {
    title: 'Extra people',
    value: 'No charge'
  }, {
    title: 'Weekly discount',
    value: '18%'
  }, {
    title: 'Monthly discount',
    value: '50%'
  }]
});

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/arnoldmartinez/sites/Vuebnb/resources/js/app.js */"./resources/js/app.js");


/***/ })

/******/ });