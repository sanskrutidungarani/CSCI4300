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

/***/ "(app-pages-browser)/./src/app/welcome/addplan/page.js":
/*!*****************************************!*\
  !*** ./src/app/welcome/addplan/page.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_todays_plan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/todays-plan */ \"(app-pages-browser)/./src/app/components/todays-plan.js\");\n/* harmony import */ var _app_components_navbarAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/navbarAuth */ \"(app-pages-browser)/./src/app/components/navbarAuth.jsx\");\n/* harmony import */ var _app_components_foodlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/foodlist */ \"(app-pages-browser)/./src/app/components/foodlist.js\");\n/* harmony import */ var _app_components_AddFood__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/AddFood */ \"(app-pages-browser)/./src/app/components/AddFood.jsx\");\n/* harmony import */ var _app_components_itemlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/components/itemlist */ \"(app-pages-browser)/./src/app/components/itemlist.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n//import Food from \"@/app/components/food\";\n\n\n\n\n\nconst ViewPlanHome = ()=>{\n    _s();\n    const [foods, setFoods] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addUserHandler = (foodInfo)=>{\n        setFoods((prev)=>[\n                ...prev,\n                foodInfo\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_navbarAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/addplan/page.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_todays_plan__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/addplan/page.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_AddFood__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                OnAddFood: addUserHandler\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/addplan/page.js\",\n                lineNumber: 27,\n                columnNumber: 8\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_foodlist__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                items: foods\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/addplan/page.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/addplan/page.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ViewPlanHome, \"A0FpdaM17REA0/HwhpzJgeR+Ckg=\");\n_c = ViewPlanHome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewPlanHome);\nvar _c;\n$RefreshReg$(_c, \"ViewPlanHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd2VsY29tZS9hZGRwbGFuL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDd0M7QUFDeEMsMkNBQTJDO0FBQ1U7QUFDQTtBQUNKO0FBQ0Y7QUFDRztBQUdsRCxNQUFNTyxlQUFlOztJQUdyQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUVuQyxNQUFNUyxpQkFBaUIsQ0FBQ0M7UUFDdEJGLFNBQVMsQ0FBQ0csT0FBUzttQkFBSUE7Z0JBQU1EO2FBQVM7SUFDeEM7SUFFRSxxQkFFSSw4REFBQ0U7OzBCQUVELDhEQUFDVixrRUFBVUE7Ozs7OzBCQUNYLDhEQUFDRCxtRUFBU0E7Ozs7OzBCQUVYLDhEQUFDRywrREFBT0E7Z0JBQUNTLFdBQVdKOzs7Ozs7MEJBRW5CLDhEQUFDTixnRUFBUUE7Z0JBQUNXLE9BQVNQOzs7Ozs7Ozs7Ozs7QUFNM0I7R0F4Qk1EO0tBQUFBO0FBMEJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvd2VsY29tZS9hZGRwbGFuL3BhZ2UuanM/NGM3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy9pbXBvcnQgRm9vZCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9mb29kXCI7XG5pbXBvcnQgVG9kYXlQbGFuIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL3RvZGF5cy1wbGFuXCI7XG5pbXBvcnQgTmF2YmFyQXV0aCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9uYXZiYXJBdXRoXCI7XG5pbXBvcnQgRm9vZExpc3QgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvZm9vZGxpc3RcIjtcbmltcG9ydCBBZGRGb29kIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0FkZEZvb2RcIjtcbmltcG9ydCBUaXRsZUxpc3QgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvaXRlbWxpc3RcIjtcblxuXG5jb25zdCBWaWV3UGxhbkhvbWUgPSAoKSA9PiB7XG5cblxuY29uc3QgW2Zvb2RzLCBzZXRGb29kc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgYWRkVXNlckhhbmRsZXIgPSAoZm9vZEluZm8pID0+IHtcbiAgICBzZXRGb29kcygocHJldikgPT4gWy4uLnByZXYsIGZvb2RJbmZvXSk7XG4gIH07XG5cbiAgICByZXR1cm4oXG5cbiAgICAgICAgPGRpdj4gICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPE5hdmJhckF1dGggLz5cbiAgICAgICAgPFRvZGF5UGxhbiAvPlxuXG4gICAgICAgPEFkZEZvb2QgT25BZGRGb29kPXthZGRVc2VySGFuZGxlcn0gLz5cblxuICAgICAgICA8Rm9vZExpc3QgaXRlbXMgPSB7Zm9vZHN9IC8+XG48L2Rpdj5cblxuICAgIFxuXG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdQbGFuSG9tZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvZGF5UGxhbiIsIk5hdmJhckF1dGgiLCJGb29kTGlzdCIsIkFkZEZvb2QiLCJUaXRsZUxpc3QiLCJWaWV3UGxhbkhvbWUiLCJmb29kcyIsInNldEZvb2RzIiwiYWRkVXNlckhhbmRsZXIiLCJmb29kSW5mbyIsInByZXYiLCJkaXYiLCJPbkFkZEZvb2QiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/welcome/addplan/page.js\n"));

/***/ })

});