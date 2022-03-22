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

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/***/ (() => {

eval("const slideItems = document.querySelectorAll('.slide_item');\r\n\r\nif (slideItems.length > 0){\r\n\tlet position = 0;\r\n\tconst slideTrack = document.querySelector('.slide_track');\r\n\tconst btnPrev = document.querySelector('.btn-prev');\r\n\tconst btnNext = document.querySelector('.btn-next');\r\n\tlet moveNext = function(){\r\n\t\tif (position == slideItems.length - 1){\r\n\t\t\tslideTrack.style.left = '0%';\r\n\t\t\tposition = 0;\r\n\t\t} else {\r\n\t\t\tposition += 1;\r\n\t\t\tslideTrack.style.left = -position * 100 +'%'\r\n\t\t}\r\n\t};\r\n\r\n\tlet moveBack = function(){\r\n\t\tif (position == 0){\r\n\t\t\tslideTrack.style.left = (slideItems.length - 1) * -100 + '%';\r\n\t\t\tposition = slideItems.length - 1;\r\n\t\t} else {\r\n\t\t\tposition -= 1;\r\n\t\t\tslideTrack.style.left = -position * 100 + '%';\r\n\t\t}\r\n\t};\r\n\r\n\tbtnNext.addEventListener('click', moveNext);\r\n\tbtnPrev.addEventListener('click', moveBack);\r\n}\r\n\r\n\r\n\r\nconst animScrollItems = document.querySelectorAll('.anim_scroll');\r\n\r\nif (animScrollItems.length > 0){\r\n\twindow.addEventListener('scroll', animOnScroll);\r\n\tfunction animOnScroll(){\r\n\t\tfor (let i = 0; animScrollItems.length > i ; i++) {\r\n\t\t\tconst animItem = animScrollItems[i];\r\n\t\t\tif (animItem.offsetTop - 50 < window.innerHeight + window.scrollY && animItem.offsetHeight + animItem.offsetTop > window.scrollY){\r\n\t\t\t\tanimItem.classList.add('_active_' + animItem.classList[0]);\r\n\t\t\t} else {\r\n\t\t\t\tanimItem.classList.remove('_active_' + animItem.classList[0]);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tanimOnScroll();\r\n}\r\n\n\n//# sourceURL=webpack://pack/./scripts/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/script.js"]();
/******/ 	
/******/ })()
;