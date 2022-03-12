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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("/*Modules*/\r\n/*Mobile navigation*/\r\n/*===============================*/\r\nvar navToggle = document.querySelector(\"#nav-toggle\"), navMenu = document.querySelector(\"#nav-menu\"), navClose = document.querySelector(\"#close\"), navLink = document.querySelectorAll(\".nav__link\");\r\nif (navToggle)\r\n    navToggle.addEventListener(\"click\", function () {\r\n        navMenu.classList.add(\"show\");\r\n        navLink.forEach(function (n) { return n.addEventListener(\"click\", hideMenu); });\r\n    });\r\nif (navClose) {\r\n    navClose.addEventListener(\"click\", function () {\r\n        navMenu.classList.remove(\"show\");\r\n        navLink.forEach(function (n) { return n.removeEventListener(\"click\", hideMenu); });\r\n    });\r\n}\r\nfunction hideMenu() {\r\n    var navMenu = document.querySelector(\"#nav-menu\");\r\n    navMenu.classList.remove(\"show\");\r\n}\r\n/*Remove the menu mobile */\r\nvar toggleSkillScroll = document.querySelector(\"#skills__container\");\r\nvar buttonToggleSkill = document.querySelector(\"#show__skills\");\r\nfunction animateScrollingDown() {\r\n    var myInterval = setInterval(function () {\r\n        toggleSkillScroll.scrollTop += 10;\r\n    }, 10);\r\n    setTimeout(function () {\r\n        clearInterval(myInterval);\r\n    }, 412);\r\n}\r\nfunction animateScrollingUp() {\r\n    var myInterval = setInterval(function () {\r\n        toggleSkillScroll.scrollTop -= 10;\r\n    }, 10);\r\n    setTimeout(function () {\r\n        clearInterval(myInterval);\r\n    }, 570);\r\n}\r\nbuttonToggleSkill.addEventListener(\"click\", function (e) {\r\n    if (toggleSkillScroll.classList.contains(\"skill__static\")) {\r\n        toggleSkillScroll.classList.remove(\"skill__static\");\r\n        toggleSkillScroll.classList.add(\"skill__scroll\");\r\n        buttonToggleSkill.innerHTML =\r\n            '<div>Show less <i class=\"uil uil-arrow-up\"></i></div>';\r\n        animateScrollingDown();\r\n    }\r\n    else {\r\n        toggleSkillScroll.classList.add(\"skill__static\");\r\n        toggleSkillScroll.classList.remove(\"skill__scroll\");\r\n        animateScrollingUp();\r\n        buttonToggleSkill.innerHTML =\r\n            \"<div>Show more <i class='uil uil-arrow-down'></i></div>\";\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://portafolio/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;