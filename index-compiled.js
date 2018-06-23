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

eval("module.exports = {\n\t\"create\": {\n\t\t\"options\": [\n\t\t\t\"--stats\",\n\t\t\t\"--show-rc\",\n\t\t\t\"--compression lz4\",\n\t\t\t\"--exclude-caches\"\n\t\t],\n\t\t\"excludes\": [\n\t\t\t\"/home/coop/.ecryptfs/*\",\n\t\t\t\"/home/.ecryptfs/*\",\n\t\t\t\"/home/coop/.cache/*\",\n\t\t\t\"/home/coop/.dbus\",\n\t\t\t\"/home/coop/.local/share/gvfs-metadata/home\",\n\t\t\t\"/home/coop/.gvfs\"\n\t\t],\n\t\t\"repository\": \"/mnt/Backup2/BorgBackup\",\n\t\t\"foldersToBackup\": [\n\t\t\t\"/home\",\n\t\t\t\"/mnt/1TBInternal/Coding Music\",\n\t\t\t\"/mnt/1TBInternal/DownloadsOn1TB/Coding Tutorials & Books\"\n\t\t],\n\t\t\"showNotification\": true,\n\t\t\"log\": {\n\t\t\t\"type\": \"email\"\n\t\t}\n\t}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ib3JnLmNvbmZpZy5qc29uNT80OWVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vYm9yZy5jb25maWcuanNvbjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjcmVhdGVcIjoge1xuXHRcdFwib3B0aW9uc1wiOiBbXG5cdFx0XHRcIi0tc3RhdHNcIixcblx0XHRcdFwiLS1zaG93LXJjXCIsXG5cdFx0XHRcIi0tY29tcHJlc3Npb24gbHo0XCIsXG5cdFx0XHRcIi0tZXhjbHVkZS1jYWNoZXNcIlxuXHRcdF0sXG5cdFx0XCJleGNsdWRlc1wiOiBbXG5cdFx0XHRcIi9ob21lL2Nvb3AvLmVjcnlwdGZzLypcIixcblx0XHRcdFwiL2hvbWUvLmVjcnlwdGZzLypcIixcblx0XHRcdFwiL2hvbWUvY29vcC8uY2FjaGUvKlwiLFxuXHRcdFx0XCIvaG9tZS9jb29wLy5kYnVzXCIsXG5cdFx0XHRcIi9ob21lL2Nvb3AvLmxvY2FsL3NoYXJlL2d2ZnMtbWV0YWRhdGEvaG9tZVwiLFxuXHRcdFx0XCIvaG9tZS9jb29wLy5ndmZzXCJcblx0XHRdLFxuXHRcdFwicmVwb3NpdG9yeVwiOiBcIi9tbnQvQmFja3VwMi9Cb3JnQmFja3VwXCIsXG5cdFx0XCJmb2xkZXJzVG9CYWNrdXBcIjogW1xuXHRcdFx0XCIvaG9tZVwiLFxuXHRcdFx0XCIvbW50LzFUQkludGVybmFsL0NvZGluZyBNdXNpY1wiLFxuXHRcdFx0XCIvbW50LzFUQkludGVybmFsL0Rvd25sb2Fkc09uMVRCL0NvZGluZyBUdXRvcmlhbHMgJiBCb29rc1wiXG5cdFx0XSxcblx0XHRcInNob3dOb3RpZmljYXRpb25cIjogdHJ1ZSxcblx0XHRcImxvZ1wiOiB7XG5cdFx0XHRcInR5cGVcIjogXCJlbWFpbFwiXG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./borg.config.json5\n");

/***/ }),

/***/ "./index.lsc":
/*!*******************!*\
  !*** ./index.lsc ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _create$log;\n\nvar _os = __webpack_require__(/*! os */ \"os\");\n\nvar _os2 = _interopRequireDefault(_os);\n\nvar _util = __webpack_require__(/*! util */ \"util\");\n\nvar _child_process = __webpack_require__(/*! child_process */ \"child_process\");\n\nvar _dateformat = __webpack_require__(/*! dateformat */ \"dateformat\");\n\nvar _dateformat2 = _interopRequireDefault(_dateformat);\n\nvar _nodeNotifier = __webpack_require__(/*! node-notifier */ \"node-notifier\");\n\nvar _nodeNotifier2 = _interopRequireDefault(_nodeNotifier);\n\nvar _qI = __webpack_require__(/*! q-i */ \"q-i\");\n\nvar _mailgunJs = __webpack_require__(/*! mailgun-js */ \"mailgun-js\");\n\nvar _mailgunJs2 = _interopRequireDefault(_mailgunJs);\n\nvar _borgConfig = __webpack_require__(/*! ./borg.config.json5 */ \"./borg.config.json5\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nif (false) {}\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n\nconst pExec = (0, _util.promisify)(_child_process.exec);\nconst mailgun = (0, _mailgunJs2.default)({\n  domain: process.env.MAILGUN_DOMAIN,\n  apiKey: process.env.MAILGUN_PRIVATE_APIKEY\n});\nconst mailOptions = {\n  from: 'Borg Backup <borg@localhost.dev>',\n  to: process.env.DESTINATION_EMAIL\n};\nconst borgCreateParams = (() => {\n  var _ref;\n\n  const _arr = ['create', ...(_ref = _borgConfig.create.options, _ref === void 0 ? [] : _ref)];\n\n  for (let _arr2 = _borgConfig.create.excludes, _i = 0, _len = _arr2.length; _i < _len; _i++) {\n    const exclude = _arr2[_i];_arr.push(`--exclude \"${exclude}\"`);\n  }_arr.push(`${_borgConfig.create.repository}::${_borgConfig.create.archivePrefix || _os2.default.hostname()}-${prettyDate()}`);\n  for (let _arr3 = _borgConfig.create.foldersToBackup, _i2 = 0, _len2 = _arr3.length; _i2 < _len2; _i2++) {\n    const folders = _arr3[_i2];_arr.push(`\"${folders}\"`);\n  }return _arr;\n})();\nconst logType = (_create$log = _borgConfig.create.log) == null ? void 0 : _create$log.type;\n\nif (logType === 'file') borgCreateParams.push(` >> \"${_borgConfig.create.log.destination}\" 2>&1`);\n\npExec(`borg ${borgCreateParams.join(' ')}`).then(notify).catch(notify).then(sendEmail);\n\nfunction sendEmail(result) {\n  if (logType !== 'email') return;\n  return mailgun.messages().send(_extends({}, mailOptions, {\n    subject: generateMessageTitle(result),\n    html: `<pre> ${(0, _qI.stringify)(result)} </pre>`\n  }), function (err) {\n    return err ? console.error(err) : void 0;\n  });\n}function notify(result) {\n  if (true) console.log(result);\n  _nodeNotifier2.default.notify({\n    title: generateMessageTitle(result),\n    message: result == null ? void 0 : result.message\n  });\n  return result;\n}function isError(err) {\n  return err instanceof Error;\n}function prettyDate() {\n  return (0, _dateformat2.default)(new Date(), 'yyyy-mm-dd-HHMMss');\n}function generateMessageTitle(result) {\n  if (isError(result)) return 'Borg Backup Encountered An Error 💩';else return 'Borg Backup Completed Successfully 😎';\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5sc2M/MTgyNiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwiZXhlYyIsImRvbWFpbiIsInByb2Nlc3MiLCJlbnYiLCJNQUlMR1VOX0RPTUFJTiIsImFwaUtleSIsIk1BSUxHVU5fUFJJVkFURV9BUElLRVkiLCJmcm9tIiwidG8iLCJERVNUSU5BVElPTl9FTUFJTCIsIm9wdGlvbnMiLCJleGNsdWRlcyIsImV4Y2x1ZGUiLCJjcmVhdGUiLCJyZXBvc2l0b3J5IiwiYXJjaGl2ZVByZWZpeCIsIm9zIiwiaG9zdG5hbWUiLCJwcmV0dHlEYXRlIiwiZm9sZGVyc1RvQmFja3VwIiwiZm9sZGVycyIsImxvZyIsInR5cGUiLCJsb2dUeXBlIiwiYm9yZ0NyZWF0ZVBhcmFtcyIsInB1c2giLCJkZXN0aW5hdGlvbiIsInBFeGVjIiwiam9pbiIsInRoZW4iLCJub3RpZnkiLCJjYXRjaCIsInNlbmRFbWFpbCIsInJlc3VsdCIsIm1lc3NhZ2VzIiwic2VuZCIsIm1haWxPcHRpb25zIiwic3ViamVjdCIsImdlbmVyYXRlTWVzc2FnZVRpdGxlIiwiaHRtbCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm5vdGlmaWVyIiwidGl0bGUiLCJtZXNzYWdlIiwiRXJyb3IiLCJEYXRlIiwiaXNFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQVhBLElBQUcsS0FBSCxFQUEwQjtBQUMxQixtQkFBQUEsQ0FBUSxzQkFBUixFQUFrQkMsTUFBbEI7OztBQVlBLGNBQVEscUJBQVVDLG1CQUFWLENBQVI7QUFDQSxnQkFBVSx5QkFBVTtBQUNsQkMsVUFBUUMsUUFBUUMsR0FBUixDQUFZQyxjQURGO0FBRWxCQyxVQUFRSCxRQUFRQyxHQUFSLENBQVlHO0FBRkYsQ0FBVixDQUFWO0FBSUEsb0JBQWM7QUFDWkMsUUFBTSxrQ0FETTtBQUVaQyxNQUFJTixRQUFRQyxHQUFSLENBQVlNO0FBRkosQ0FBZDtBQUlBLHlCQUdFO0FBQUEsTUFERyxJQUNIOztBQUhpQixlQUNqQixXQUNBLElBQUcsMEJBQU9DLE9BQVYsRUFBRyxJQUFILG1CQUFHLElBQUgsQ0FEQSxDQURpQjs7QUFHakIsV0FBdUIsMkJBQU9DLFFBQTlCLFVBQXVCLG1CQUF2QixPQUF1QixJQUF2QixRQUF3QztBQUFqQixVQUFYQyxPQUFXLFNBQXZCLEVBQXVCLEVBSE4sSUFHdUIsTUFBRyxjQUFjQSxPQUFTLEdBQTFCO0FBQThCLEdBSHJELElBSWpCLE1BQUMsR0FBR0MsbUJBQU9DLFVBQVksS0FBS0QsbUJBQU9FLGFBQVAsSUFBd0JDLGFBQUdDLFFBQUgsRUFBZSxJQUFJQyxZQUFjLEVBQXJGO0FBQ0EsV0FBdUIsMkJBQU9DLGVBQTlCLFdBQXVCLG9CQUF2QixRQUF1QixLQUF2QixTQUErQztBQUF4QixVQUFYQyxPQUFXLFNBQXZCLEdBQXVCLEVBTE4sSUFLOEIsTUFBRyxJQUFJQSxPQUFTLEdBQWhCO0FBQW9CLEdBQW9CLE9BTHRFLElBS3NFO0FBQUQsQ0FGdEYsR0FIRjtBQU9BLCtCQUFVUCxtQkFBT1EsR0FBakIscUJBQVUsWUFBWUMsSUFBdEI7O0FBRUEsSUFBR0MsWUFBWSxNQUFmLEVBQXVCQyxpQkFBaUJDLElBQWpCLENBQXVCLFFBQVFaLG1CQUFPUSxHQUFQLENBQVdLLFdBQWEsUUFBdkQ7O0FBRXZCQyxNQUFPLFFBQVFILGlCQUFpQkksSUFBakIsQ0FBc0IsR0FBdEIsQ0FBNEIsRUFBM0MsRUFDR0MsSUFESCxDQUNRQyxNQURSLEVBRUdDLEtBRkgsQ0FFU0QsTUFGVCxFQUdHRCxJQUhILENBR1FHLFNBSFI7O0FBS0EsbUJBQVVDLE1BQVYsRUFBa0I7QUFDaEIsTUFBR1YsWUFBWSxPQUFmLEVBQXdCO0FBQ3hCLGlCQUFRVyxRQUFSLEdBQW1CQyxJQUFuQixjQUVPQyxXQUZQO0FBR0lDLGFBQVNDLHFCQUFxQkwsTUFBckIsQ0FIYjtBQUlJTSxVQUFPLFNBQVMsbUJBQVVOLE1BQVYsQ0FBbUI7QUFKdkMsTUFNRSxlQUFPO0FBQUEsV0FBR08sR0FBSCxHQUFRQyxRQUFRQyxLQUFSLENBQWNGLEdBQWQsQ0FBUjtBQUEwQixHQU5uQztBQU9DLENBRUgsZ0JBQU9QLE1BQVAsRUFBZTtBQUNiLE1BQUcsSUFBSCxFQUFVUSxRQUFRcEIsR0FBUixDQUFZWSxNQUFaO0FBQ1ZVLHlCQUFTYixNQUFULENBQWdCO0FBQ2RjLFdBQU9OLHFCQUFxQkwsTUFBckIsQ0FETztBQUVkWSxhQUFTWixNQUFULG9CQUFTQSxPQUFRWTtBQUZILEdBQWhCO0FBSUFaO0FBQU0sQ0FFUixpQkFBUU8sR0FBUixFQUFnQjtBQUFBLHdCQUFlTSxLQUFmO0FBQW9CLENBRXBDLHNCQUFnQjtBQUFBLG1DQUFXLElBQUlDLElBQUosRUFBWCxFQUF1QixtQkFBdkI7QUFBMkMsQ0FFM0QsOEJBQXFCZCxNQUFyQixFQUE2QjtBQUMzQixNQUFHZSxRQUFRZixNQUFSLENBQUgsRUFBb0IsNkNBQXBCLEtBQ007QUFBdUMiLCJmaWxlIjoiLi9pbmRleC5sc2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAhcHJvY2Vzcy5lbnYuTk9ERV9FTlY6IHByb2Nlc3MuZW52Lk5PREVfRU5WID0gXCJwcm9kdWN0aW9uXCJcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXG5pbXBvcnQgb3MgZnJvbSAnb3MnXG5pbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tICd1dGlsJ1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5cbmltcG9ydCBkYXRlRm9ybWF0IGZyb20gJ2RhdGVmb3JtYXQnXG5pbXBvcnQgbm90aWZpZXIgZnJvbSAnbm9kZS1ub3RpZmllcidcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3EtaSdcbmltcG9ydCBtYWlsZ3VuanMgZnJvbSAnbWFpbGd1bi1qcydcblxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnLi9ib3JnLmNvbmZpZy5qc29uNSdcblxucEV4ZWMgPSBwcm9taXNpZnkoZXhlYylcbm1haWxndW4gPSBtYWlsZ3VuanMoe1xuICBkb21haW46IHByb2Nlc3MuZW52Lk1BSUxHVU5fRE9NQUlOLFxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk1BSUxHVU5fUFJJVkFURV9BUElLRVlcbn0pXG5tYWlsT3B0aW9ucyA9IHtcbiAgZnJvbTogJ0JvcmcgQmFja3VwIDxib3JnQGxvY2FsaG9zdC5kZXY+JyxcbiAgdG86IHByb2Nlc3MuZW52LkRFU1RJTkFUSU9OX0VNQUlMLFxufVxuYm9yZ0NyZWF0ZVBhcmFtcyA9IFtcbiAgJ2NyZWF0ZSdcbiAgLi4uY3JlYXRlLm9wdGlvbnMsXG4gIC4uLmZvciBlbGVtIGV4Y2x1ZGUgaW4gY3JlYXRlLmV4Y2x1ZGVzOiBbIGAtLWV4Y2x1ZGUgXCIkeyBleGNsdWRlIH1cImAgXSxcbiAgYCR7IGNyZWF0ZS5yZXBvc2l0b3J5IH06OiR7IGNyZWF0ZS5hcmNoaXZlUHJlZml4IHx8IG9zLmhvc3RuYW1lKCkgfS0keyBwcmV0dHlEYXRlKCkgfWAsXG4gIC4uLmZvciBlbGVtIGZvbGRlcnMgaW4gY3JlYXRlLmZvbGRlcnNUb0JhY2t1cDogWyBgXCIkeyBmb2xkZXJzIH1cImAgXSxcbl1cbmxvZ1R5cGUgPSBjcmVhdGUubG9nPy50eXBlXG5cbmlmIGxvZ1R5cGUgPT09ICdmaWxlJzogYm9yZ0NyZWF0ZVBhcmFtcy5wdXNoKGAgPj4gXCIkeyBjcmVhdGUubG9nLmRlc3RpbmF0aW9uIH1cIiAyPiYxYClcblxucEV4ZWMoYGJvcmcgJHsgYm9yZ0NyZWF0ZVBhcmFtcy5qb2luKCcgJykgfWApXG4gIC50aGVuKG5vdGlmeSlcbiAgLmNhdGNoKG5vdGlmeSlcbiAgLnRoZW4oc2VuZEVtYWlsKVxuXG5zZW5kRW1haWwocmVzdWx0KSAtPlxuICBpZiBsb2dUeXBlICE9PSAnZW1haWwnOiByZXR1cm5cbiAgbWFpbGd1bi5tZXNzYWdlcygpLnNlbmQoXG4gICAge1xuICAgICAgLi4ubWFpbE9wdGlvbnMsXG4gICAgICBzdWJqZWN0OiBnZW5lcmF0ZU1lc3NhZ2VUaXRsZShyZXN1bHQpLFxuICAgICAgaHRtbDogYDxwcmU+ICR7IHN0cmluZ2lmeShyZXN1bHQpIH0gPC9wcmU+YFxuICAgIH0sXG4gICAgZXJyIC0+IGlmIGVycjogY29uc29sZS5lcnJvcihlcnIpXG4gIClcblxubm90aWZ5KHJlc3VsdCkgLT5cbiAgaWYgSVNERVY6IGNvbnNvbGUubG9nKHJlc3VsdClcbiAgbm90aWZpZXIubm90aWZ5KHtcbiAgICB0aXRsZTogZ2VuZXJhdGVNZXNzYWdlVGl0bGUocmVzdWx0KSxcbiAgICBtZXNzYWdlOiByZXN1bHQ/Lm1lc3NhZ2VcbiAgfSlcbiAgcmVzdWx0XG5cbmlzRXJyb3IoZXJyKSAtPiBlcnIgaW5zdGFuY2VvZiBFcnJvclxuXG5wcmV0dHlEYXRlKCkgLT4gZGF0ZUZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1tbS1kZC1ISE1Nc3MnKVxuXG5nZW5lcmF0ZU1lc3NhZ2VUaXRsZShyZXN1bHQpIC0+XG4gIGlmIGlzRXJyb3IocmVzdWx0KTogJ0JvcmcgQmFja3VwIEVuY291bnRlcmVkIEFuIEVycm9yIPCfkqknXG4gIGVsc2U6ICdCb3JnIEJhY2t1cCBDb21wbGV0ZWQgU3VjY2Vzc2Z1bGx5IPCfmI4nXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.lsc\n");

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