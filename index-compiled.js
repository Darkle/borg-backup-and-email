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

/***/ "./borg-config.json5":
/*!***************************!*\
  !*** ./borg-config.json5 ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"create\": {\n\t\t\"options\": [\n\t\t\t\"--stats\",\n\t\t\t\"--show-rc\",\n\t\t\t\"--compression lz4\",\n\t\t\t\"--exclude-caches\"\n\t\t],\n\t\t\"excludes\": [\n\t\t\t\"/home/coop/.ecryptfs/*\",\n\t\t\t\"/home/.ecryptfs/*\",\n\t\t\t\"/home/coop/.cache/*\",\n\t\t\t\"/home/coop/.dbus\",\n\t\t\t\"/home/coop/.local/share/gvfs-metadata/home\",\n\t\t\t\"/home/coop/.gvfs\"\n\t\t],\n\t\t\"repository\": \"/mnt/Backup2/BorgBackup\",\n\t\t\"foldersToBackup\": [\n\t\t\t\"/home\"\n\t\t],\n\t\t\"showNotification\": true,\n\t\t\"log\": {\n\t\t\t\"type\": \"email\"\n\t\t}\n\t}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ib3JnLWNvbmZpZy5qc29uNT85MDkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ib3JnLWNvbmZpZy5qc29uNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNyZWF0ZVwiOiB7XG5cdFx0XCJvcHRpb25zXCI6IFtcblx0XHRcdFwiLS1zdGF0c1wiLFxuXHRcdFx0XCItLXNob3ctcmNcIixcblx0XHRcdFwiLS1jb21wcmVzc2lvbiBsejRcIixcblx0XHRcdFwiLS1leGNsdWRlLWNhY2hlc1wiXG5cdFx0XSxcblx0XHRcImV4Y2x1ZGVzXCI6IFtcblx0XHRcdFwiL2hvbWUvY29vcC8uZWNyeXB0ZnMvKlwiLFxuXHRcdFx0XCIvaG9tZS8uZWNyeXB0ZnMvKlwiLFxuXHRcdFx0XCIvaG9tZS9jb29wLy5jYWNoZS8qXCIsXG5cdFx0XHRcIi9ob21lL2Nvb3AvLmRidXNcIixcblx0XHRcdFwiL2hvbWUvY29vcC8ubG9jYWwvc2hhcmUvZ3Zmcy1tZXRhZGF0YS9ob21lXCIsXG5cdFx0XHRcIi9ob21lL2Nvb3AvLmd2ZnNcIlxuXHRcdF0sXG5cdFx0XCJyZXBvc2l0b3J5XCI6IFwiL21udC9CYWNrdXAyL0JvcmdCYWNrdXBcIixcblx0XHRcImZvbGRlcnNUb0JhY2t1cFwiOiBbXG5cdFx0XHRcIi9ob21lXCJcblx0XHRdLFxuXHRcdFwic2hvd05vdGlmaWNhdGlvblwiOiB0cnVlLFxuXHRcdFwibG9nXCI6IHtcblx0XHRcdFwidHlwZVwiOiBcImVtYWlsXCJcblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./borg-config.json5\n");

/***/ }),

/***/ "./index.lsc":
/*!*******************!*\
  !*** ./index.lsc ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _create$log;\n\nvar _os = __webpack_require__(/*! os */ \"os\");\n\nvar _os2 = _interopRequireDefault(_os);\n\nvar _util = __webpack_require__(/*! util */ \"util\");\n\nvar _child_process = __webpack_require__(/*! child_process */ \"child_process\");\n\nvar _dateformat = __webpack_require__(/*! dateformat */ \"dateformat\");\n\nvar _dateformat2 = _interopRequireDefault(_dateformat);\n\nvar _nodeNotifier = __webpack_require__(/*! node-notifier */ \"node-notifier\");\n\nvar _nodeNotifier2 = _interopRequireDefault(_nodeNotifier);\n\nvar _qI = __webpack_require__(/*! q-i */ \"q-i\");\n\nvar _mailgunJs = __webpack_require__(/*! mailgun-js */ \"mailgun-js\");\n\nvar _mailgunJs2 = _interopRequireDefault(_mailgunJs);\n\nvar _borgConfig = __webpack_require__(/*! ./borg-config.json5 */ \"./borg-config.json5\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nif (false) {}\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n\nconst pExec = (0, _util.promisify)(_child_process.exec);\nconst mailgun = (0, _mailgunJs2.default)({\n  domain: process.env.MAILGUN_DOMAIN,\n  apiKey: process.env.MAILGUN_PRIVATE_APIKEY\n});\nconst mailOptions = {\n  from: 'Borg Backup <borg@localhost.dev>',\n  to: process.env.DESTINATION_EMAIL\n};\nconst borgCreateParams = (() => {\n  var _ref, _ref2;\n\n  const _arr = ['create', ...(_ref = _borgConfig.create.options, _ref === void 0 ? [] : _ref)];\n\n  for (let _arr2 = _borgConfig.create.excludes, _i = 0, _len = _arr2.length; _i < _len; _i++) {\n    const exclude = _arr2[_i];_arr.push(`--exclude \"${exclude}\"`);\n  }_arr.push(`${_borgConfig.create.repository}::${_borgConfig.create.archivePrefix || _os2.default.hostname()}-${(0, _dateformat2.default)(new Date(), 'yyyy-mm-dd-HHMMss')}`, ...(_ref2 = _borgConfig.create.foldersToBackup, _ref2 === void 0 ? [] : _ref2));\n  return _arr;\n})();\nconst logType = _borgConfig.create == null ? void 0 : (_create$log = _borgConfig.create.log) == null ? void 0 : _create$log.type;\n\nif (logType === 'file') borgCreateParams.push(` >> ${_borgConfig.create.log.destination} 2>&1`);\n\npExec(`borg ${borgCreateParams.join(' ')}`).then(notify).catch(notify).then(sendEmail);\n\nfunction sendEmail(result) {\n  if (logType !== 'email') return;\n  return mailgun.messages().send(_extends({}, mailOptions, {\n    subject: generateMessageTitle(result),\n    html: `<pre> ${(0, _qI.stringify)(result)} </pre>`\n  }), function (err) {\n    return err ? console.error(err) : void 0;\n  });\n}function notify(result) {\n  if (true) console.log(result);\n  _nodeNotifier2.default.notify({\n    title: generateMessageTitle(result),\n    message: result == null ? void 0 : result.message\n  });\n  return result;\n}function isError(err) {\n  return err instanceof Error;\n}function generateMessageTitle(result) {\n  if (!isError(result)) return 'Borg Backup Completed Successfully';else return 'There Was An Error With The Borg Backup';\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5sc2M/MTgyNiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwiZXhlYyIsImRvbWFpbiIsInByb2Nlc3MiLCJlbnYiLCJNQUlMR1VOX0RPTUFJTiIsImFwaUtleSIsIk1BSUxHVU5fUFJJVkFURV9BUElLRVkiLCJmcm9tIiwidG8iLCJERVNUSU5BVElPTl9FTUFJTCIsIm9wdGlvbnMiLCJleGNsdWRlcyIsImV4Y2x1ZGUiLCJjcmVhdGUiLCJyZXBvc2l0b3J5IiwiYXJjaGl2ZVByZWZpeCIsIm9zIiwiaG9zdG5hbWUiLCJEYXRlIiwiZm9sZGVyc1RvQmFja3VwIiwibG9nIiwidHlwZSIsImxvZ1R5cGUiLCJib3JnQ3JlYXRlUGFyYW1zIiwicHVzaCIsImRlc3RpbmF0aW9uIiwicEV4ZWMiLCJqb2luIiwidGhlbiIsIm5vdGlmeSIsImNhdGNoIiwic2VuZEVtYWlsIiwicmVzdWx0IiwibWVzc2FnZXMiLCJzZW5kIiwibWFpbE9wdGlvbnMiLCJzdWJqZWN0IiwiZ2VuZXJhdGVNZXNzYWdlVGl0bGUiLCJodG1sIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibm90aWZpZXIiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJFcnJvciIsImlzRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFYQSxJQUFHLEtBQUgsRUFBMEI7QUFDMUIsbUJBQUFBLENBQVEsc0JBQVIsRUFBa0JDLE1BQWxCOzs7QUFZQSxjQUFRLHFCQUFVQyxtQkFBVixDQUFSO0FBQ0EsZ0JBQVUseUJBQVU7QUFDbEJDLFVBQVFDLFFBQVFDLEdBQVIsQ0FBWUMsY0FERjtBQUVsQkMsVUFBUUgsUUFBUUMsR0FBUixDQUFZRztBQUZGLENBQVYsQ0FBVjtBQUlBLG9CQUFjO0FBQ1pDLFFBQU0sa0NBRE07QUFFWkMsTUFBSU4sUUFBUUMsR0FBUixDQUFZTTtBQUZKLENBQWQ7QUFJQSx5QkFHRTtBQUFBLE1BREcsSUFDSCxFQUVHLEtBRkg7O0FBSGlCLGVBQ2pCLFdBQ0EsSUFBRywwQkFBT0MsT0FBVixFQUFHLElBQUgsbUJBQUcsSUFBSCxDQURBLENBRGlCOztBQUdqQixXQUF1QiwyQkFBT0MsUUFBOUIsVUFBdUIsbUJBQXZCLE9BQXVCLElBQXZCLFFBQXdDO0FBQWpCLFVBQVhDLE9BQVcsU0FBdkIsRUFBdUIsRUFITixJQUd1QixNQUFHLGNBQWNBLE9BQVMsR0FBMUI7QUFBOEIsR0FIckQsSUFJakIsTUFBQyxHQUFHQyxtQkFBT0MsVUFBWSxLQUFLRCxtQkFBT0UsYUFBUCxJQUF3QkMsYUFBR0MsUUFBSCxFQUFlLElBQUksMEJBQVcsSUFBSUMsSUFBSixFQUFYLEVBQXVCLG1CQUF2QixDQUE2QyxFQUFwSCxFQUNBLElBQUcsMkJBQU9DLGVBQVYsRUFBRyxLQUFILG1CQUFHLEtBQUgsQ0FEQTtBQUNzSCxTQUxyRyxJQUtxRztBQUFELENBRnJILEdBSEY7QUFPQSxnQkFBVU4sa0JBQVYsbUNBQVVBLG1CQUFRTyxHQUFsQixxQkFBVSxZQUFhQyxJQUF2Qjs7QUFFQSxJQUFHQyxZQUFZLE1BQWYsRUFBdUJDLGlCQUFpQkMsSUFBakIsQ0FBdUIsT0FBT1gsbUJBQU9PLEdBQVAsQ0FBV0ssV0FBYSxPQUF0RDs7QUFFdkJDLE1BQU8sUUFBUUgsaUJBQWlCSSxJQUFqQixDQUFzQixHQUF0QixDQUE0QixFQUEzQyxFQUNHQyxJQURILENBQ1FDLE1BRFIsRUFFR0MsS0FGSCxDQUVTRCxNQUZULEVBR0dELElBSEgsQ0FHUUcsU0FIUjs7QUFLQSxtQkFBVUMsTUFBVixFQUFrQjtBQUNoQixNQUFHVixZQUFZLE9BQWYsRUFBd0I7QUFDeEIsaUJBQVFXLFFBQVIsR0FBbUJDLElBQW5CLGNBQ0tDLFdBREw7QUFFRUMsYUFBU0MscUJBQXFCTCxNQUFyQixDQUZYO0FBR0VNLFVBQU8sU0FBUyxtQkFBVU4sTUFBVixDQUFtQjtBQUhyQyxNQUlHLGVBQU87QUFBQSxXQUFHTyxHQUFILEdBQVFDLFFBQVFDLEtBQVIsQ0FBY0YsR0FBZCxDQUFSO0FBQTBCLEdBSnBDO0FBSXFDLENBRXZDLGdCQUFPUCxNQUFQLEVBQWU7QUFDYixNQUFHLElBQUgsRUFBVVEsUUFBUXBCLEdBQVIsQ0FBWVksTUFBWjtBQUNWVSx5QkFBU2IsTUFBVCxDQUFnQjtBQUNkYyxXQUFPTixxQkFBcUJMLE1BQXJCLENBRE87QUFFZFksYUFBU1osTUFBVCxvQkFBU0EsT0FBUVk7QUFGSCxHQUFoQjtBQUlBWjtBQUFNLENBRVIsaUJBQVFPLEdBQVIsRUFBZ0I7QUFBQSx3QkFBZU0sS0FBZjtBQUFvQixDQUVwQyw4QkFBcUJiLE1BQXJCLEVBQTZCO0FBQzNCLE1BQUcsQ0FBQ2MsUUFBUWQsTUFBUixDQUFKLEVBQXFCLDRDQUFyQixLQUNNO0FBQXlDIiwiZmlsZSI6Ii4vaW5kZXgubHNjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgIXByb2Nlc3MuZW52Lk5PREVfRU5WOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9IFwicHJvZHVjdGlvblwiXG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKVxuaW1wb3J0IG9zIGZyb20gJ29zJ1xuaW1wb3J0IHsgcHJvbWlzaWZ5IH0gZnJvbSAndXRpbCdcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJ1xuXG5pbXBvcnQgZGF0ZUZvcm1hdCBmcm9tICdkYXRlZm9ybWF0J1xuaW1wb3J0IG5vdGlmaWVyIGZyb20gJ25vZGUtbm90aWZpZXInXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdxLWknXG5pbXBvcnQgbWFpbGd1bmpzIGZyb20gJ21haWxndW4tanMnXG5cbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJy4vYm9yZy1jb25maWcuanNvbjUnXG5cbnBFeGVjID0gcHJvbWlzaWZ5KGV4ZWMpXG5tYWlsZ3VuID0gbWFpbGd1bmpzKHtcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5NQUlMR1VOX0RPTUFJTixcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5NQUlMR1VOX1BSSVZBVEVfQVBJS0VZXG59KVxubWFpbE9wdGlvbnMgPSB7XG4gIGZyb206ICdCb3JnIEJhY2t1cCA8Ym9yZ0Bsb2NhbGhvc3QuZGV2PicsXG4gIHRvOiBwcm9jZXNzLmVudi5ERVNUSU5BVElPTl9FTUFJTCxcbn1cbmJvcmdDcmVhdGVQYXJhbXMgPSBbXG4gICdjcmVhdGUnXG4gIC4uLmNyZWF0ZS5vcHRpb25zLFxuICAuLi5mb3IgZWxlbSBleGNsdWRlIGluIGNyZWF0ZS5leGNsdWRlczogWyBgLS1leGNsdWRlIFwiJHsgZXhjbHVkZSB9XCJgIF0sXG4gIGAkeyBjcmVhdGUucmVwb3NpdG9yeSB9OjokeyBjcmVhdGUuYXJjaGl2ZVByZWZpeCB8fCBvcy5ob3N0bmFtZSgpIH0tJHsgZGF0ZUZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1tbS1kZC1ISE1Nc3MnKSB9YCxcbiAgLi4uY3JlYXRlLmZvbGRlcnNUb0JhY2t1cCxcbl1cbmxvZ1R5cGUgPSBjcmVhdGU/LmxvZz8udHlwZVxuXG5pZiBsb2dUeXBlID09PSAnZmlsZSc6IGJvcmdDcmVhdGVQYXJhbXMucHVzaChgID4+ICR7IGNyZWF0ZS5sb2cuZGVzdGluYXRpb24gfSAyPiYxYClcblxucEV4ZWMoYGJvcmcgJHsgYm9yZ0NyZWF0ZVBhcmFtcy5qb2luKCcgJykgfWApXG4gIC50aGVuKG5vdGlmeSlcbiAgLmNhdGNoKG5vdGlmeSlcbiAgLnRoZW4oc2VuZEVtYWlsKVxuXG5zZW5kRW1haWwocmVzdWx0KSAtPlxuICBpZiBsb2dUeXBlICE9PSAnZW1haWwnOiByZXR1cm5cbiAgbWFpbGd1bi5tZXNzYWdlcygpLnNlbmQoe1xuICAgIC4uLm1haWxPcHRpb25zLFxuICAgIHN1YmplY3Q6IGdlbmVyYXRlTWVzc2FnZVRpdGxlKHJlc3VsdCksXG4gICAgaHRtbDogYDxwcmU+ICR7IHN0cmluZ2lmeShyZXN1bHQpIH0gPC9wcmU+YFxuICB9LCBlcnIgLT4gaWYgZXJyOiBjb25zb2xlLmVycm9yKGVycikpXG5cbm5vdGlmeShyZXN1bHQpIC0+XG4gIGlmIElTREVWOiBjb25zb2xlLmxvZyhyZXN1bHQpXG4gIG5vdGlmaWVyLm5vdGlmeSh7XG4gICAgdGl0bGU6IGdlbmVyYXRlTWVzc2FnZVRpdGxlKHJlc3VsdCksXG4gICAgbWVzc2FnZTogcmVzdWx0Py5tZXNzYWdlXG4gIH0pXG4gIHJlc3VsdFxuXG5pc0Vycm9yKGVycikgLT4gZXJyIGluc3RhbmNlb2YgRXJyb3JcblxuZ2VuZXJhdGVNZXNzYWdlVGl0bGUocmVzdWx0KSAtPlxuICBpZiAhaXNFcnJvcihyZXN1bHQpOiAnQm9yZyBCYWNrdXAgQ29tcGxldGVkIFN1Y2Nlc3NmdWxseSdcbiAgZWxzZTogJ1RoZXJlIFdhcyBBbiBFcnJvciBXaXRoIFRoZSBCb3JnIEJhY2t1cCdcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.lsc\n");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCI/M2RhNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjaGlsZF9wcm9jZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///child_process\n");

/***/ }),

/***/ "dateformat":
/*!*****************************!*\
  !*** external "dateformat" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dateformat\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlZm9ybWF0XCI/NWRjZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJkYXRlZm9ybWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZWZvcm1hdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dateformat\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIj9lNzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRvdGVudi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "mailgun-js":
/*!*****************************!*\
  !*** external "mailgun-js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mailgun-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYWlsZ3VuLWpzXCI/OWVjMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtYWlsZ3VuLWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFpbGd1bi1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mailgun-js\n");

/***/ }),

/***/ "node-notifier":
/*!********************************!*\
  !*** external "node-notifier" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-notifier\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLW5vdGlmaWVyXCI/MGY2MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlLW5vdGlmaWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1ub3RpZmllclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///node-notifier\n");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvc1wiP2I3MTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoib3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///os\n");

/***/ }),

/***/ "q-i":
/*!**********************!*\
  !*** external "q-i" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"q-i\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxLWlcIj8yNTY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InEtaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInEtaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///q-i\n");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCI/YmUwYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///util\n");

/***/ })

/******/ });