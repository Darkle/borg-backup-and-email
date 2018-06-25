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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("executive");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("signal-exit");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mailgun-js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("node-notifier");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _create$log, _ref2;

var _path = __webpack_require__(8);

var _path2 = _interopRequireDefault(_path);

var _os = __webpack_require__(7);

var _os2 = _interopRequireDefault(_os);

var _dateformat = __webpack_require__(6);

var _dateformat2 = _interopRequireDefault(_dateformat);

var _nodeNotifier = __webpack_require__(5);

var _nodeNotifier2 = _interopRequireDefault(_nodeNotifier);

var _mailgunJs = __webpack_require__(4);

var _mailgunJs2 = _interopRequireDefault(_mailgunJs);

var _signalExit = __webpack_require__(3);

var _signalExit2 = _interopRequireDefault(_signalExit);

var _executive = __webpack_require__(2);

var _executive2 = _interopRequireDefault(_executive);

var _borgConfig = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(0).config({ path: _path2.default.join(__dirname, '.env') });


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
* Promises execute straight away, so can't use them here.
*/
_executive2.default.quiet([`borg create ${borgCreateParams.join(' ')}`, `borg prune ${borgPruneParams.join(' ')}`], notifyAndEmail);

/*****
* For some reason the result message always arrives on stderr regardless
* of failure or success. ¯\_(ツ)_/¯
*/
function notifyAndEmail(er, stdout, stderr) {
  const messageTitle = generateMessageTitle(checkIfErrorOccured(stderr));
  showDesktopNotification(messageTitle, stderr);
  return sendEmail(messageTitle, stderr);
}function checkIfErrorOccured(result) {
  return !!(() => {
    const _arr4 = [];for (let _arr5 = result.split('\n'), _i3 = 0, _len3 = _arr5.length; _i3 < _len3; _i3++) {
      const line = _arr5[_i3];
      if (line.startsWith('terminating with error status') && !line.endsWith('0')) _arr4.push(line);
    }return _arr4;
  })().length;
}function sendEmail(messageTitle, messageText) {
  if (logType !== 'email') return;
  return mailgun.messages().send(_extends({}, mailOptions, {
    subject: messageTitle,
    html: `<pre> ${messageText} </pre>`
  }), function (err) {
    return err ? console.error(err) : void 0;
  });
}function showDesktopNotification(messageTitle, messageText) {
  return _nodeNotifier2.default.notify({
    title: messageTitle,
    message: messageText
  });
}function generateMessageTitle(errorOccured) {
  if (errorOccured) return 'Borg Backup Encountered An Error 💩';else return 'Borg Backup Completed Successfully 😎';
} /*****
  * Try to break lock on exit always in case of exit on error.
  */
(0, _signalExit2.default)(function () {
  return (0, _executive2.default)(`borg break-lock ${_borgConfig.create.repository}`, { sync: true });
});

process.on('unhandledRejection', bailOnFatalError);
process.on('uncaughtException', bailOnFatalError);

function bailOnFatalError(err) {
  console.error(err);
  return process.exit(1);
}

/***/ })
/******/ ]);