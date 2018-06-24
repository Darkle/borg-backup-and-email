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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.lsc");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./borg.config.json5":
/*!***************************!*\
  !*** ./borg.config.json5 ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"create": {
		"options": [
			"--stats",
			"--show-rc",
			"--compression lz4",
			"--exclude-caches"
		],
		"excludes": [
			"/home/coop/.ecryptfs/*",
			"/home/.ecryptfs/*",
			"/home/coop/.cache/*",
			"/home/coop/.dbus",
			"/home/coop/.local/share/gvfs-metadata/home",
			"/home/coop/.gvfs",
			"/home/coop/.local/share/recently-used.xbel"
		],
		"repository": "/mnt/Backup2/BorgBackup",
		"prefix": null,
		"foldersToBackup": [
			"/home",
			"/mnt/1TBInternal/Coding Music",
			"/mnt/1TBInternal/DownloadsOn1TB/Coding Tutorials & Books"
		],
		"showNotification": true,
		"log": {
			"type": "email"
		}
	},
	"prune": {
		"options": [
			"--show-rc",
			"--stats"
		],
		"repository": "/mnt/Backup2/BorgBackup",
		"prefix": null,
		"keepDaily": 7,
		"keepWeekly": 2,
		"keepMonthly": 1
	}
}

/***/ }),

/***/ "./index.lsc":
/*!*******************!*\
  !*** ./index.lsc ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _create$log, _ref2;

var _os = __webpack_require__(/*! os */ "os");

var _os2 = _interopRequireDefault(_os);

var _util = __webpack_require__(/*! util */ "util");

var _child_process = __webpack_require__(/*! child_process */ "child_process");

var _dateformat = __webpack_require__(/*! dateformat */ "dateformat");

var _dateformat2 = _interopRequireDefault(_dateformat);

var _nodeNotifier = __webpack_require__(/*! node-notifier */ "node-notifier");

var _nodeNotifier2 = _interopRequireDefault(_nodeNotifier);

var _mailgunJs = __webpack_require__(/*! mailgun-js */ "mailgun-js");

var _mailgunJs2 = _interopRequireDefault(_mailgunJs);

var _pReduce = __webpack_require__(/*! p-reduce */ "p-reduce");

var _pReduce2 = _interopRequireDefault(_pReduce);

var _signalExit = __webpack_require__(/*! signal-exit */ "signal-exit");

var _signalExit2 = _interopRequireDefault(_signalExit);

var _borgConfig = __webpack_require__(/*! ./borg.config.json5 */ "./borg.config.json5");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {}
__webpack_require__(/*! dotenv */ "dotenv").config();


const pExec = (0, _util.promisify)(_child_process.exec);
const date = (0, _dateformat2.default)(new Date(), 'yyyy-mm-dd-HHMMss');
const osHostname = _os2.default.hostname();
const mailgun = (0, _mailgunJs2.default)({
  domain: process.env.MAILGUN_DOMAIN,
  apiKey: process.env.MAILGUN_PRIVATE_APIKEY
});
const mailOptions = {
  from: 'Borg Backup <borg@localhost.dev>',
  to: process.env.DESTINATION_EMAIL
};
const borgCreateParams = (() => {
  var _ref;

  const _arr = [...(_ref = _borgConfig.create.options, _ref === void 0 ? [] : _ref)];

  for (let _arr2 = _borgConfig.create.excludes, _i = 0, _len = _arr2.length; _i < _len; _i++) {
    const exclude = _arr2[_i];_arr.push(`--exclude "${exclude}"`);
  }_arr.push(`${_borgConfig.create.repository}::${_borgConfig.create.prefix || osHostname}-${date}`);
  for (let _arr3 = _borgConfig.create.foldersToBackup, _i2 = 0, _len2 = _arr3.length; _i2 < _len2; _i2++) {
    const folders = _arr3[_i2];_arr.push(`"${folders}"`);
  }return _arr;
})();
const borgPruneParams = [...(_ref2 = _borgConfig.prune.options, _ref2 === void 0 ? [] : _ref2), `--prefix ${_borgConfig.prune.prefix || osHostname}-`, `--keep-daily ${_borgConfig.prune.keepDaily}`, `--keep-weekly ${_borgConfig.prune.keepWeekly}`, `--keep-monthly ${_borgConfig.prune.keepMonthly}`, _borgConfig.prune.repository];
const logType = (_create$log = _borgConfig.create.log) == null ? void 0 : _create$log.type;

if (logType === 'file') borgCreateParams.push(` >> "${_borgConfig.create.log.destination}" 2>&1`);

/*****
* Adding large maxBuffer in case of verbose logging and lotsa files.
*/
(0, _pReduce2.default)([pExec(`borg create ${borgCreateParams.join(' ')}`, { maxBuffer: Infinity }), pExec(`borg prune ${borgPruneParams.join(' ')}`, { maxBuffer: Infinity })], joinExecResultsMessages, '').catch(identity).then(notify).then(sendEmail);

function sendEmail(result) {
  if (logType !== 'email') return;
  return mailgun.messages().send(_extends({}, mailOptions, {
    subject: generateMessageTitle(result)
  }, generateMessageText(result)), function (err) {
    return err ? console.error(err) : void 0;
  });
}function notify(result) {
  const messageTitle = generateMessageTitle(result);
  if (!isError(result)) _nodeNotifier2.default.notify(messageTitle);else {
    _nodeNotifier2.default.notify({
      title: messageTitle,
      message: result == null ? void 0 : result.message
    });
  }return result;
}function isError(err) {
  return err instanceof Error;
}function identity(param) {
  return param;
} /*****
  * For some reason the success message arrives in stderr. ¯\_(ツ)_/¯
  */
function joinExecResultsMessages(totalMessage, result, index) {
  const borgAction = index === 0 ? 'BACKUP' : 'PRUNE';
  return `${totalMessage}\n BORG ${borgAction} RESULTS: \n${result.stderr}`;
}function generateMessageTitle(result) {
  if (isError(result)) return 'Borg Backup Encountered An Error 💩';else return 'Borg Backup Completed Successfully 😎';
}function generateMessageText(result) {
  if (isError(result)) {
    return { html: `<pre> ${JSON.stringify(result)} </pre>` };
  } else {
    return { text: result };
  }
}(0, _signalExit2.default)(() => {
  return (0, _child_process.execFileSync)('borg', ['break-lock', _borgConfig.create.repository]);
});

process.on('unhandledRejection', bailOnFatalError);
process.on('uncaughtException', bailOnFatalError);

function bailOnFatalError(err) {
  console.error(err);
  process.exit(1);
}

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "dateformat":
/*!*****************************!*\
  !*** external "dateformat" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "mailgun-js":
/*!*****************************!*\
  !*** external "mailgun-js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mailgun-js");

/***/ }),

/***/ "node-notifier":
/*!********************************!*\
  !*** external "node-notifier" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-notifier");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "p-reduce":
/*!***************************!*\
  !*** external "p-reduce" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("p-reduce");

/***/ }),

/***/ "signal-exit":
/*!******************************!*\
  !*** external "signal-exit" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("signal-exit");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=index-compiled.js.map