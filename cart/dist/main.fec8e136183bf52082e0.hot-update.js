/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecontainer"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("{console.log(\"cart\");\r\n\r\n\r\nlet cart = '';\r\n\r\nfor (let i = 0; i < 5; i++) {\r\n  const name = `Product ${i + 1}`;\r\n  cart += `<div>${name}</div>`;\r\n}\r\n\r\ndocument.querySelector('#dev-carts').innerHTML = cart;\r\n\n\n//# sourceURL=webpack://container/./src/index.js?\n}");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9367b16531ac6f355f85")
/******/ })();
/******/ 
/******/ }
);