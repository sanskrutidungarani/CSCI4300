"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/welcome/addplan/page",{

/***/ "(app-pages-browser)/./src/app/components/AddTitle.js":
/*!****************************************!*\
  !*** ./src/app/components/AddTitle.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/form.css */ \"(app-pages-browser)/./src/app/styles/form.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst formtitle = ()=>{\n    _s();\n    const [newItem, setNewItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        Title: \"\",\n        Img: \"\"\n    });\n    const handleChange = (event)=>{\n        setNewItem({\n            ...newItem,\n            [event.target.name]: event.target.value\n        });\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(\"New meal plan:\", newItem);\n        setNewItem({\n            image: \"\",\n            title: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"title\",\n                    children: \"Title:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"string\",\n                    id: \"title\",\n                    name: \"title\",\n                    value: newItem.title,\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"image\",\n                    children: \"Image Link:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"link\",\n                    id: \"image\",\n                    name: \"image\",\n                    value: newItem.img,\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(formtitle, \"Vg2zLc5i8QVkXL2Rifn09mmWjQI=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (formtitle);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRUaXRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ1o7QUFFNUIsTUFBTUUsWUFBWTs7SUFDVixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUM7UUFDdENJLE9BQU87UUFDUEMsS0FBSztJQUNOO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQkosV0FBVztZQUFFLEdBQUdELE9BQU87WUFBRSxDQUFDSyxNQUFNQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixNQUFNQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUNuRTtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0o7UUFDcEJBLE1BQU1LLGNBQWM7UUFFcEJDLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JaO1FBRTlCQyxXQUFXO1lBQUVZLE9BQU87WUFBSUMsT0FBTztRQUFHO0lBQ3BDO0lBRUoscUJBQ0ksOERBQUNDO2tCQUNHLDRFQUFDQztZQUFLQyxVQUFVUjs7OEJBQ2hCLDhEQUFDUztvQkFBTUMsU0FBUTs4QkFBUTs7Ozs7OzhCQUN2Qiw4REFBQ0M7b0JBQ0dDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hmLE1BQUs7b0JBQ0xDLE9BQU9SLFFBQVFjLEtBQUs7b0JBQ3BCUyxVQUFVbkI7b0JBQ1ZvQixRQUFROzs7Ozs7OEJBRVosOERBQUNDOzs7Ozs4QkFFRCw4REFBQ1A7b0JBQU1DLFNBQVE7OEJBQVE7Ozs7Ozs4QkFDdkIsOERBQUNDO29CQUNHQyxNQUFLO29CQUNMQyxJQUFHO29CQUNIZixNQUFLO29CQUNMQyxPQUFPUixRQUFRMEIsR0FBRztvQkFDbEJILFVBQVVuQjtvQkFDVm9CLFFBQVE7Ozs7Ozs4QkFFWiw4REFBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVDtHQTlDRTFCO0FBaUROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRUaXRsZS5qcz82ODIyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZm9ybS5jc3MnO1xuXG5jb25zdCBmb3JtdGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IFtuZXdJdGVtLCBzZXROZXdJdGVtXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgIFRpdGxlOiAnJyxcbiAgICAgICAgIEltZzogJydcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgc2V0TmV3SXRlbSh7IC4uLm5ld0l0ZW0sIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgfTtcbiAgICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2coJ05ldyBtZWFsIHBsYW46JywgbmV3SXRlbSk7XG4gICAgICBcbiAgICAgICAgICBzZXROZXdJdGVtKHsgaW1hZ2U6ICcnLCB0aXRsZTogJycgfSk7XG4gICAgICAgIH07XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3SXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5JbWFnZSBMaW5rOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibGlua1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3SXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cblxuZXhwb3J0IGRlZmF1bHQgZm9ybXRpdGxlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZm9ybXRpdGxlIiwibmV3SXRlbSIsInNldE5ld0l0ZW0iLCJUaXRsZSIsIkltZyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJ0aXRsZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImJyIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddTitle.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/welcome/addplan/page.js":
/*!*****************************************!*\
  !*** ./src/app/welcome/addplan/page.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_todays_plan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/todays-plan */ \"(app-pages-browser)/./src/app/components/todays-plan.js\");\n/* harmony import */ var _app_components_navbarAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/navbarAuth */ \"(app-pages-browser)/./src/app/components/navbarAuth.jsx\");\n/* harmony import */ var _app_components_foodlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/foodlist */ \"(app-pages-browser)/./src/app/components/foodlist.js\");\n/* harmony import */ var _app_components_AddFood__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/AddFood */ \"(app-pages-browser)/./src/app/components/AddFood.jsx\");\n/* harmony import */ var _app_components_AddTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/components/AddTitle */ \"(app-pages-browser)/./src/app/components/AddTitle.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n//import Food from \"@/app/components/food\";\n\n\n\n\n\nconst ViewPlanHome = ()=>{\n    _s();\n    const [foods, setFoods] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addUserHandler = (foodInfo)=>{\n        setFoods((prev)=>[\n                ...prev,\n                foodInfo\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_navbarAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/addplan/page.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_todays_plan__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/addplan/page.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_AddTitle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/addplan/page.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_AddFood__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                OnAddFood: addUserHandler\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/addplan/page.js\",\n                lineNumber: 29,\n                columnNumber: 8\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_foodlist__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                items: foods\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/addplan/page.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/addplan/page.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ViewPlanHome, \"A0FpdaM17REA0/HwhpzJgeR+Ckg=\");\n_c = ViewPlanHome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewPlanHome);\nvar _c;\n$RefreshReg$(_c, \"ViewPlanHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd2VsY29tZS9hZGRwbGFuL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDd0M7QUFDeEMsMkNBQTJDO0FBQ1U7QUFDQTtBQUNKO0FBQ0Y7QUFDRTtBQUdqRCxNQUFNTyxlQUFlOztJQUdyQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUVuQyxNQUFNUyxpQkFBaUIsQ0FBQ0M7UUFDdEJGLFNBQVMsQ0FBQ0csT0FBUzttQkFBSUE7Z0JBQU1EO2FBQVM7SUFDeEM7SUFFRSxxQkFFSSw4REFBQ0U7OzBCQUVELDhEQUFDVixrRUFBVUE7Ozs7OzBCQUNYLDhEQUFDRCxtRUFBU0E7Ozs7OzBCQUdWLDhEQUFDSSxnRUFBUUE7Ozs7OzBCQUNWLDhEQUFDRCwrREFBT0E7Z0JBQUNTLFdBQVdKOzs7Ozs7MEJBRW5CLDhEQUFDTixnRUFBUUE7Z0JBQUNXLE9BQVNQOzs7Ozs7Ozs7Ozs7QUFNM0I7R0ExQk1EO0tBQUFBO0FBNEJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvd2VsY29tZS9hZGRwbGFuL3BhZ2UuanM/NGM3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy9pbXBvcnQgRm9vZCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9mb29kXCI7XG5pbXBvcnQgVG9kYXlQbGFuIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL3RvZGF5cy1wbGFuXCI7XG5pbXBvcnQgTmF2YmFyQXV0aCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9uYXZiYXJBdXRoXCI7XG5pbXBvcnQgRm9vZExpc3QgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvZm9vZGxpc3RcIjtcbmltcG9ydCBBZGRGb29kIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0FkZEZvb2RcIjtcbmltcG9ydCBBZGRUaXRsZSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9BZGRUaXRsZVwiO1xuXG5cbmNvbnN0IFZpZXdQbGFuSG9tZSA9ICgpID0+IHtcblxuXG5jb25zdCBbZm9vZHMsIHNldEZvb2RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBhZGRVc2VySGFuZGxlciA9IChmb29kSW5mbykgPT4ge1xuICAgIHNldEZvb2RzKChwcmV2KSA9PiBbLi4ucHJldiwgZm9vZEluZm9dKTtcbiAgfTtcblxuICAgIHJldHVybihcblxuICAgICAgICA8ZGl2PiAgICBcbiAgICAgICAgICAgIFxuICAgICAgICA8TmF2YmFyQXV0aCAvPlxuICAgICAgICA8VG9kYXlQbGFuIC8+XG5cblxuICAgICAgICA8QWRkVGl0bGUgLz5cbiAgICAgICA8QWRkRm9vZCBPbkFkZEZvb2Q9e2FkZFVzZXJIYW5kbGVyfSAvPlxuXG4gICAgICAgIDxGb29kTGlzdCBpdGVtcyA9IHtmb29kc30gLz5cbjwvZGl2PlxuXG4gICAgXG5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlld1BsYW5Ib21lOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVG9kYXlQbGFuIiwiTmF2YmFyQXV0aCIsIkZvb2RMaXN0IiwiQWRkRm9vZCIsIkFkZFRpdGxlIiwiVmlld1BsYW5Ib21lIiwiZm9vZHMiLCJzZXRGb29kcyIsImFkZFVzZXJIYW5kbGVyIiwiZm9vZEluZm8iLCJwcmV2IiwiZGl2IiwiT25BZGRGb29kIiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/welcome/addplan/page.js\n"));

/***/ })

});