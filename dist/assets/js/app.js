/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../\u0000#Programming/\u0000#web/Personal Blog/src/assets/js/mobileNav.js":
/*!*****************************************************************************!*\
  !*** ../../../ #Programming/ #web/Personal Blog/src/assets/js/mobileNav.js ***!
  \*****************************************************************************/
/***/ (function() {

eval("// Get Elements\r\nconst burger = document.getElementById(\"sidebarToggle\");\r\nconst sidebar = document.getElementById(\"sidebar\");\r\nconst page = document.getElementById(\"page\");\r\n// body\r\nconst body = document.body;\r\n\r\n// Добавляем событие на клик по бургер-меню\r\nburger.addEventListener(\"click\", (event) => {\r\n  // Проверяем, есть ли класс show-sidebar у body\r\n  if (body.classList.contains(\"show-sidebar\")) {\r\n    // Если есть - удаляем\r\n    closeSidebar();\r\n  } else {\r\n    // Если нет - добавляем\r\n    showSidebar();\r\n  }\r\n});\r\n\r\n// Функция открытия меню\r\nfunction showSidebar() {\r\n  // Создаем саму маску\r\n  let mask = document.createElement(\"div\");\r\n  mask.classList.add(\"page__mask\");\r\n  mask.addEventListener(\"click\", closeSidebar);\r\n  // Добавляем ее в page\r\n  page.appendChild(mask);\r\n\r\n  // Выдаем body класс show-sidebar\r\n  body.classList.add(\"show-sidebar\");\r\n}\r\n\r\n// Функция закрытия меню\r\nfunction closeSidebar() {\r\n  body.classList.remove(\"show-sidebar\");\r\n  document.querySelector(\".page__mask\").remove();\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/../../../%00#Programming/%00#web/Personal_Blog/src/assets/js/mobileNav.js?");

/***/ }),

/***/ "../../../\u0000#Programming/\u0000#web/Personal Blog/src/assets/js/modal.js":
/*!*************************************************************************!*\
  !*** ../../../ #Programming/ #web/Personal Blog/src/assets/js/modal.js ***!
  \*************************************************************************/
/***/ (function() {

eval("// Поиск дата-аттрибутов\r\nconst modalBtn = document.querySelectorAll(\"[data-modal]\");\r\n// Получаем тэг body\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll(\".modal__close\");\r\nconst modal = document.querySelectorAll(\".modal\");\r\n\r\n// Функция открытия модальных окон\r\nmodalBtn.forEach((item) => {\r\n  item.addEventListener(\"click\", (event) => {\r\n    // currentTarget - получаем весь блок, а не только тот элемент, на который нажал\r\n    let $this = event.currentTarget;\r\n    // Получаем дата-аттрибут data-modal\r\n    let modalID = $this.getAttribute(\"data-modal\");\r\n    let modal = document.getElementById(modalID);\r\n    let modalContent = modal.querySelector(\".modal__content\");\r\n\r\n    // Клик по дочерним элементам модального окна не будет вызывать события у родителя\r\n    modalContent.addEventListener(\"click\", (event) => {\r\n      event.stopPropagation();\r\n    });\r\n\r\n    // Добавляем класс по открытию модального окна\r\n    modal.classList.add(\"show\");\r\n    // Добавляем класс, который не дет скроллить\r\n    body.classList.add(\"no-scroll\");\r\n\r\n    setTimeout(() => {\r\n      modalContent.style.transform = \"none\";\r\n      modalContent.style.opacity = \"1\";\r\n    }, 1);\r\n  });\r\n});\r\n\r\n// Функция закрытия модальных окон по крестику\r\nmodalClose.forEach((item) => {\r\n  item.addEventListener(\"click\", (event) => {\r\n    // Ищем ближайшего родителя с классом modal\r\n    let currenModal = event.currentTarget.closest(\".modal\");\r\n\r\n    closeModal(currenModal);\r\n  });\r\n});\r\n\r\n// Функция закрытия модальных окон по клику вне модального окна\r\n\r\nmodal.forEach((item) => {\r\n  item.addEventListener(\"click\", (event) => {\r\n    let currenModal = event.currentTarget;\r\n\r\n    closeModal(currenModal);\r\n  });\r\n});\r\n\r\n// Функция по закрытию модального окна\r\nfunction closeModal(currenModal) {\r\n  let modalContent = currenModal.querySelector(\".modal__content\");\r\n  modalContent.removeAttribute(\"style\");\r\n\r\n  setTimeout(() => {\r\n    currenModal.classList.remove(\"show\");\r\n    body.classList.remove(\"no-scroll\");\r\n  }, 200);\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/../../../%00#Programming/%00#web/Personal_Blog/src/assets/js/modal.js?");

/***/ }),

/***/ "../../../\u0000#Programming/\u0000#web/Personal Blog/src/assets/js/textarea.js":
/*!****************************************************************************!*\
  !*** ../../../ #Programming/ #web/Personal Blog/src/assets/js/textarea.js ***!
  \****************************************************************************/
/***/ (function() {

eval("const textArea = document.querySelectorAll(\"[data-autoresize]\");\r\n\r\n// Автомотическое увеличение текстового поля\r\ntextArea.forEach((item) => {\r\n  let textAreaHeight = item.offsetHeight\r\n  item.addEventListener(\"input\", (event) => {\r\n    let $this = event.target;\r\n\r\n    $this.style.height = `${textAreaHeight}px`;\r\n    // Увеличение размера по высоте скролла\r\n    $this.style.height = `${$this.scrollHeight}px`;\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/../../../%00#Programming/%00#web/Personal_Blog/src/assets/js/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["../../../\u0000#Programming/\u0000#web/Personal Blog/src/assets/js/mobileNav.js"]();
/******/ 	__webpack_modules__["../../../\u0000#Programming/\u0000#web/Personal Blog/src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../../../\u0000#Programming/\u0000#web/Personal Blog/src/assets/js/textarea.js"]();
/******/ 	
/******/ })()
;