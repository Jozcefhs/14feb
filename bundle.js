/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/exer.js":
/*!*********************!*\
  !*** ./src/exer.js ***!
  \*********************/
/***/ (() => {

eval("\r\n\r\n\r\nconst exEl = document.getElementById('container')\r\nconst oldDiv = document.getElementById('old')\r\nconst create = document.getElementById('create')\r\n\r\ncreate.addEventListener('click', function () {\r\n    const newEl = document.createElement('div')\r\n    newEl.setAttribute('class', 'menu-item')\r\n    //newEl.innerHTML = 'This is the time'\r\n    const span1 = document.createElement('span')\r\n    const span2 = document.createElement('span')\r\n    span1.setAttribute('class', 'icon')\r\n    span2.setAttribute('class', 'label')\r\n    span2.textContent = 'bless the Lord'\r\n    span1.innerHTML = \"&#x1F9E0\"\r\n    newEl.append(span1)\r\n    newEl.append(span2)\r\n   \r\n    exEl.insertBefore(newEl, oldDiv)\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://dmapp/./src/exer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/exer.js"]();
/******/ 	
/******/ })()
;