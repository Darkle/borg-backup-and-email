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

eval("module.exports = {\n\t\"create\": {\n\t\t\"options\": [\n\t\t\t\"--stats\",\n\t\t\t\"--show-rc\",\n\t\t\t\"--compression lz4\",\n\t\t\t\"--exclude-caches\"\n\t\t],\n\t\t\"excludes\": [\n\t\t\t\"/home/coop/.ecryptfs/*\",\n\t\t\t\"/home/.ecryptfs/*\",\n\t\t\t\"/home/coop/.cache/*\",\n\t\t\t\"/home/coop/.dbus\",\n\t\t\t\"/home/coop/.local/share/gvfs-metadata/home\",\n\t\t\t\"/home/coop/.gvfs\"\n\t\t],\n\t\t\"repository\": \"/mnt/Backup2/BorgBackup\",\n\t\t\"foldersToBackup\": [\n\t\t\t\"/home\"\n\t\t],\n\t\t\"showNotification\": true,\n\t\t\"log\": {\n\t\t\t\"type\": \"email\"\n\t\t}\n\t}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ib3JnLmNvbmZpZy5qc29uNT80OWVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ib3JnLmNvbmZpZy5qc29uNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNyZWF0ZVwiOiB7XG5cdFx0XCJvcHRpb25zXCI6IFtcblx0XHRcdFwiLS1zdGF0c1wiLFxuXHRcdFx0XCItLXNob3ctcmNcIixcblx0XHRcdFwiLS1jb21wcmVzc2lvbiBsejRcIixcblx0XHRcdFwiLS1leGNsdWRlLWNhY2hlc1wiXG5cdFx0XSxcblx0XHRcImV4Y2x1ZGVzXCI6IFtcblx0XHRcdFwiL2hvbWUvY29vcC8uZWNyeXB0ZnMvKlwiLFxuXHRcdFx0XCIvaG9tZS8uZWNyeXB0ZnMvKlwiLFxuXHRcdFx0XCIvaG9tZS9jb29wLy5jYWNoZS8qXCIsXG5cdFx0XHRcIi9ob21lL2Nvb3AvLmRidXNcIixcblx0XHRcdFwiL2hvbWUvY29vcC8ubG9jYWwvc2hhcmUvZ3Zmcy1tZXRhZGF0YS9ob21lXCIsXG5cdFx0XHRcIi9ob21lL2Nvb3AvLmd2ZnNcIlxuXHRcdF0sXG5cdFx0XCJyZXBvc2l0b3J5XCI6IFwiL21udC9CYWNrdXAyL0JvcmdCYWNrdXBcIixcblx0XHRcImZvbGRlcnNUb0JhY2t1cFwiOiBbXG5cdFx0XHRcIi9ob21lXCJcblx0XHRdLFxuXHRcdFwic2hvd05vdGlmaWNhdGlvblwiOiB0cnVlLFxuXHRcdFwibG9nXCI6IHtcblx0XHRcdFwidHlwZVwiOiBcImVtYWlsXCJcblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./borg.config.json5\n");

/***/ }),

/***/ "./index.lsc":
/*!*******************!*\
  !*** ./index.lsc ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _create$log;\n\nvar _os = __webpack_require__(/*! os */ \"os\");\n\nvar _os2 = _interopRequireDefault(_os);\n\nvar _util = __webpack_require__(/*! util */ \"util\");\n\nvar _child_process = __webpack_require__(/*! child_process */ \"child_process\");\n\nvar _dateformat = __webpack_require__(/*! dateformat */ \"dateformat\");\n\nvar _dateformat2 = _interopRequireDefault(_dateformat);\n\nvar _nodeNotifier = __webpack_require__(/*! node-notifier */ \"node-notifier\");\n\nvar _nodeNotifier2 = _interopRequireDefault(_nodeNotifier);\n\nvar _qI = __webpack_require__(/*! q-i */ \"q-i\");\n\nvar _mailgunJs = __webpack_require__(/*! mailgun-js */ \"mailgun-js\");\n\nvar _mailgunJs2 = _interopRequireDefault(_mailgunJs);\n\nvar _borgConfig = __webpack_require__(/*! ./borg.config.json5 */ \"./borg.config.json5\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nif (false) {}\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n\nconst pExec = (0, _util.promisify)(_child_process.exec);\nconst mailgun = (0, _mailgunJs2.default)({\n  domain: process.env.MAILGUN_DOMAIN,\n  apiKey: process.env.MAILGUN_PRIVATE_APIKEY\n});\nconst mailOptions = {\n  from: 'Borg Backup <borg@localhost.dev>',\n  to: process.env.DESTINATION_EMAIL\n};\nconst borgCreateParams = (() => {\n  var _ref, _ref2;\n\n  const _arr = ['create', ...(_ref = _borgConfig.create.options, _ref === void 0 ? [] : _ref)];\n\n  for (let _arr2 = _borgConfig.create.excludes, _i = 0, _len = _arr2.length; _i < _len; _i++) {\n    const exclude = _arr2[_i];_arr.push(`--exclude \"${exclude}\"`);\n  }_arr.push(`${_borgConfig.create.repository}::${_borgConfig.create.archivePrefix || _os2.default.hostname()}-${prettyDate()}`, ...(_ref2 = _borgConfig.create.foldersToBackup, _ref2 === void 0 ? [] : _ref2));\n  return _arr;\n})();\nconst logType = _borgConfig.create == null ? void 0 : (_create$log = _borgConfig.create.log) == null ? void 0 : _create$log.type;\n\nif (logType === 'file') borgCreateParams.push(` >> ${_borgConfig.create.log.destination} 2>&1`);\n\npExec(`borg ${borgCreateParams.join(' ')}`).then(notify).catch(notify).then(sendEmail);\n\nfunction sendEmail(result) {\n  if (logType !== 'email') return;\n  return mailgun.messages().send(_extends({}, mailOptions, {\n    subject: generateMessageTitle(result),\n    html: `<pre> ${(0, _qI.stringify)(result)} </pre>`\n  }), function (err) {\n    return err ? console.error(err) : void 0;\n  });\n}function notify(result) {\n  if (true) console.log(result);\n  _nodeNotifier2.default.notify({\n    title: generateMessageTitle(result),\n    message: result == null ? void 0 : result.message\n  });\n  return result;\n}function isError(err) {\n  return err instanceof Error;\n}function prettyDate() {\n  return (0, _dateformat2.default)(new Date(), 'yyyy-mm-dd-HHMMss');\n}function generateMessageTitle(result) {\n  if (!isError(result)) return 'Borg Backup Completed Successfully 😎';else return 'Borg Backup Encountered An Error 💩';\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5sc2M/MTgyNiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwiZXhlYyIsImRvbWFpbiIsInByb2Nlc3MiLCJlbnYiLCJNQUlMR1VOX0RPTUFJTiIsImFwaUtleSIsIk1BSUxHVU5fUFJJVkFURV9BUElLRVkiLCJmcm9tIiwidG8iLCJERVNUSU5BVElPTl9FTUFJTCIsIm9wdGlvbnMiLCJleGNsdWRlcyIsImV4Y2x1ZGUiLCJjcmVhdGUiLCJyZXBvc2l0b3J5IiwiYXJjaGl2ZVByZWZpeCIsIm9zIiwiaG9zdG5hbWUiLCJwcmV0dHlEYXRlIiwiZm9sZGVyc1RvQmFja3VwIiwibG9nIiwidHlwZSIsImxvZ1R5cGUiLCJib3JnQ3JlYXRlUGFyYW1zIiwicHVzaCIsImRlc3RpbmF0aW9uIiwicEV4ZWMiLCJqb2luIiwidGhlbiIsIm5vdGlmeSIsImNhdGNoIiwic2VuZEVtYWlsIiwicmVzdWx0IiwibWVzc2FnZXMiLCJzZW5kIiwibWFpbE9wdGlvbnMiLCJzdWJqZWN0IiwiZ2VuZXJhdGVNZXNzYWdlVGl0bGUiLCJodG1sIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibm90aWZpZXIiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJFcnJvciIsIkRhdGUiLCJpc0Vycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBWEEsSUFBRyxLQUFILEVBQTBCO0FBQzFCLG1CQUFBQSxDQUFRLHNCQUFSLEVBQWtCQyxNQUFsQjs7O0FBWUEsY0FBUSxxQkFBVUMsbUJBQVYsQ0FBUjtBQUNBLGdCQUFVLHlCQUFVO0FBQ2xCQyxVQUFRQyxRQUFRQyxHQUFSLENBQVlDLGNBREY7QUFFbEJDLFVBQVFILFFBQVFDLEdBQVIsQ0FBWUc7QUFGRixDQUFWLENBQVY7QUFJQSxvQkFBYztBQUNaQyxRQUFNLGtDQURNO0FBRVpDLE1BQUlOLFFBQVFDLEdBQVIsQ0FBWU07QUFGSixDQUFkO0FBSUEseUJBR0U7QUFBQSxNQURHLElBQ0gsRUFFRyxLQUZIOztBQUhpQixlQUNqQixXQUNBLElBQUcsMEJBQU9DLE9BQVYsRUFBRyxJQUFILG1CQUFHLElBQUgsQ0FEQSxDQURpQjs7QUFHakIsV0FBdUIsMkJBQU9DLFFBQTlCLFVBQXVCLG1CQUF2QixPQUF1QixJQUF2QixRQUF3QztBQUFqQixVQUFYQyxPQUFXLFNBQXZCLEVBQXVCLEVBSE4sSUFHdUIsTUFBRyxjQUFjQSxPQUFTLEdBQTFCO0FBQThCLEdBSHJELElBSWpCLE1BQUMsR0FBR0MsbUJBQU9DLFVBQVksS0FBS0QsbUJBQU9FLGFBQVAsSUFBd0JDLGFBQUdDLFFBQUgsRUFBZSxJQUFJQyxZQUFjLEVBQXJGLEVBQ0EsSUFBRywyQkFBT0MsZUFBVixFQUFHLEtBQUgsbUJBQUcsS0FBSCxDQURBO0FBQ3VGLFNBTHRFLElBS3NFO0FBQUQsQ0FGdEYsR0FIRjtBQU9BLGdCQUFVTixrQkFBVixtQ0FBVUEsbUJBQVFPLEdBQWxCLHFCQUFVLFlBQWFDLElBQXZCOztBQUVBLElBQUdDLFlBQVksTUFBZixFQUF1QkMsaUJBQWlCQyxJQUFqQixDQUF1QixPQUFPWCxtQkFBT08sR0FBUCxDQUFXSyxXQUFhLE9BQXREOztBQUV2QkMsTUFBTyxRQUFRSCxpQkFBaUJJLElBQWpCLENBQXNCLEdBQXRCLENBQTRCLEVBQTNDLEVBQ0dDLElBREgsQ0FDUUMsTUFEUixFQUVHQyxLQUZILENBRVNELE1BRlQsRUFHR0QsSUFISCxDQUdRRyxTQUhSOztBQUtBLG1CQUFVQyxNQUFWLEVBQWtCO0FBQ2hCLE1BQUdWLFlBQVksT0FBZixFQUF3QjtBQUN4QixpQkFBUVcsUUFBUixHQUFtQkMsSUFBbkIsY0FFT0MsV0FGUDtBQUdJQyxhQUFTQyxxQkFBcUJMLE1BQXJCLENBSGI7QUFJSU0sVUFBTyxTQUFTLG1CQUFVTixNQUFWLENBQW1CO0FBSnZDLE1BTUUsZUFBTztBQUFBLFdBQUdPLEdBQUgsR0FBUUMsUUFBUUMsS0FBUixDQUFjRixHQUFkLENBQVI7QUFBMEIsR0FObkM7QUFPQyxDQUVILGdCQUFPUCxNQUFQLEVBQWU7QUFDYixNQUFHLElBQUgsRUFBVVEsUUFBUXBCLEdBQVIsQ0FBWVksTUFBWjtBQUNWVSx5QkFBU2IsTUFBVCxDQUFnQjtBQUNkYyxXQUFPTixxQkFBcUJMLE1BQXJCLENBRE87QUFFZFksYUFBU1osTUFBVCxvQkFBU0EsT0FBUVk7QUFGSCxHQUFoQjtBQUlBWjtBQUFNLENBRVIsaUJBQVFPLEdBQVIsRUFBZ0I7QUFBQSx3QkFBZU0sS0FBZjtBQUFvQixDQUVwQyxzQkFBZ0I7QUFBQSxtQ0FBVyxJQUFJQyxJQUFKLEVBQVgsRUFBdUIsbUJBQXZCO0FBQTJDLENBRTNELDhCQUFxQmQsTUFBckIsRUFBNkI7QUFDM0IsTUFBRyxDQUFDZSxRQUFRZixNQUFSLENBQUosRUFBcUIsK0NBQXJCLEtBQ007QUFBcUMiLCJmaWxlIjoiLi9pbmRleC5sc2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAhcHJvY2Vzcy5lbnYuTk9ERV9FTlY6IHByb2Nlc3MuZW52Lk5PREVfRU5WID0gXCJwcm9kdWN0aW9uXCJcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXG5pbXBvcnQgb3MgZnJvbSAnb3MnXG5pbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tICd1dGlsJ1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5cbmltcG9ydCBkYXRlRm9ybWF0IGZyb20gJ2RhdGVmb3JtYXQnXG5pbXBvcnQgbm90aWZpZXIgZnJvbSAnbm9kZS1ub3RpZmllcidcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3EtaSdcbmltcG9ydCBtYWlsZ3VuanMgZnJvbSAnbWFpbGd1bi1qcydcblxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnLi9ib3JnLmNvbmZpZy5qc29uNSdcblxucEV4ZWMgPSBwcm9taXNpZnkoZXhlYylcbm1haWxndW4gPSBtYWlsZ3VuanMoe1xuICBkb21haW46IHByb2Nlc3MuZW52Lk1BSUxHVU5fRE9NQUlOLFxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk1BSUxHVU5fUFJJVkFURV9BUElLRVlcbn0pXG5tYWlsT3B0aW9ucyA9IHtcbiAgZnJvbTogJ0JvcmcgQmFja3VwIDxib3JnQGxvY2FsaG9zdC5kZXY+JyxcbiAgdG86IHByb2Nlc3MuZW52LkRFU1RJTkFUSU9OX0VNQUlMLFxufVxuYm9yZ0NyZWF0ZVBhcmFtcyA9IFtcbiAgJ2NyZWF0ZSdcbiAgLi4uY3JlYXRlLm9wdGlvbnMsXG4gIC4uLmZvciBlbGVtIGV4Y2x1ZGUgaW4gY3JlYXRlLmV4Y2x1ZGVzOiBbIGAtLWV4Y2x1ZGUgXCIkeyBleGNsdWRlIH1cImAgXSxcbiAgYCR7IGNyZWF0ZS5yZXBvc2l0b3J5IH06OiR7IGNyZWF0ZS5hcmNoaXZlUHJlZml4IHx8IG9zLmhvc3RuYW1lKCkgfS0keyBwcmV0dHlEYXRlKCkgfWAsXG4gIC4uLmNyZWF0ZS5mb2xkZXJzVG9CYWNrdXAsXG5dXG5sb2dUeXBlID0gY3JlYXRlPy5sb2c/LnR5cGVcblxuaWYgbG9nVHlwZSA9PT0gJ2ZpbGUnOiBib3JnQ3JlYXRlUGFyYW1zLnB1c2goYCA+PiAkeyBjcmVhdGUubG9nLmRlc3RpbmF0aW9uIH0gMj4mMWApXG5cbnBFeGVjKGBib3JnICR7IGJvcmdDcmVhdGVQYXJhbXMuam9pbignICcpIH1gKVxuICAudGhlbihub3RpZnkpXG4gIC5jYXRjaChub3RpZnkpXG4gIC50aGVuKHNlbmRFbWFpbClcblxuc2VuZEVtYWlsKHJlc3VsdCkgLT5cbiAgaWYgbG9nVHlwZSAhPT0gJ2VtYWlsJzogcmV0dXJuXG4gIG1haWxndW4ubWVzc2FnZXMoKS5zZW5kKFxuICAgIHtcbiAgICAgIC4uLm1haWxPcHRpb25zLFxuICAgICAgc3ViamVjdDogZ2VuZXJhdGVNZXNzYWdlVGl0bGUocmVzdWx0KSxcbiAgICAgIGh0bWw6IGA8cHJlPiAkeyBzdHJpbmdpZnkocmVzdWx0KSB9IDwvcHJlPmBcbiAgICB9LFxuICAgIGVyciAtPiBpZiBlcnI6IGNvbnNvbGUuZXJyb3IoZXJyKVxuICApXG5cbm5vdGlmeShyZXN1bHQpIC0+XG4gIGlmIElTREVWOiBjb25zb2xlLmxvZyhyZXN1bHQpXG4gIG5vdGlmaWVyLm5vdGlmeSh7XG4gICAgdGl0bGU6IGdlbmVyYXRlTWVzc2FnZVRpdGxlKHJlc3VsdCksXG4gICAgbWVzc2FnZTogcmVzdWx0Py5tZXNzYWdlXG4gIH0pXG4gIHJlc3VsdFxuXG5pc0Vycm9yKGVycikgLT4gZXJyIGluc3RhbmNlb2YgRXJyb3JcblxucHJldHR5RGF0ZSgpIC0+IGRhdGVGb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktbW0tZGQtSEhNTXNzJylcblxuZ2VuZXJhdGVNZXNzYWdlVGl0bGUocmVzdWx0KSAtPlxuICBpZiAhaXNFcnJvcihyZXN1bHQpOiAnQm9yZyBCYWNrdXAgQ29tcGxldGVkIFN1Y2Nlc3NmdWxseSDwn5iOJ1xuICBlbHNlOiAnQm9yZyBCYWNrdXAgRW5jb3VudGVyZWQgQW4gRXJyb3Ig8J+SqSdcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.lsc\n");

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