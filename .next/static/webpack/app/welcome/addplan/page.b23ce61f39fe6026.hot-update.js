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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/form.css */ \"(app-pages-browser)/./src/app/styles/form.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst formtitle = (param)=>{\n    let { OnAddTitle } = param;\n    _s();\n    const [newItem, setNewItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        img: \"\"\n    });\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setNewItem((prevState)=>({\n                ...prevState,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (newItem.title.trim() === \"\" || newItem.link.trim() === \"\") {\n            return;\n        }\n        OnAddTitle(newItem);\n        console.log(\"New meal plan:\", newItem);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"title\",\n                    children: \"Title:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"title\",\n                    name: \"title\",\n                    value: newItem.title,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"image\",\n                    children: \"Image Link:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"string\",\n                    id: \"image\",\n                    name: \"image\",\n                    value: newItem.img,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddTitle.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(formtitle, \"G5wvX7viD2aWI4DtPkX6ZmLtqfw=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (formtitle);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRUaXRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ1o7QUFFNUIsTUFBTUUsWUFBWTtRQUFDLEVBQUNDLFVBQVUsRUFBQzs7SUFHM0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO1FBQ2xDSyxPQUFPO1FBQ1BDLEtBQUs7SUFDTjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDbEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixNQUFNRyxNQUFNO1FBQ3BDUCxXQUFXUSxDQUFBQSxZQUFjO2dCQUN2QixHQUFHQSxTQUFTO2dCQUNaLENBQUNILEtBQUssRUFBRUM7WUFDVjtJQUNGO0lBRUYsTUFBTUcsZUFBZSxDQUFDTDtRQUNsQkEsTUFBTU0sY0FBYztRQUV0QixJQUFJWCxRQUFRRSxLQUFLLENBQUNVLElBQUksT0FBTyxNQUFNWixRQUFRYSxJQUFJLENBQUNELElBQUksT0FBTyxJQUFJO1lBQzdEO1FBQ0Y7UUFFQWIsV0FBV0M7UUFDWGMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQmY7SUFHaEM7SUFFSixxQkFDSSw4REFBQ2dCO2tCQUNHLDRFQUFDQztZQUFLQyxVQUFVUjs7OEJBQ2hCLDhEQUFDUztvQkFBTUMsU0FBUTs4QkFBUTs7Ozs7OzhCQUN2Qiw4REFBQ0M7b0JBQ0dDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hqQixNQUFLO29CQUNMQyxPQUFPUCxRQUFRRSxLQUFLO29CQUNwQnNCLFVBQVVwQjs7Ozs7OzhCQUdkLDhEQUFDcUI7Ozs7OzhCQUVELDhEQUFDTjtvQkFBTUMsU0FBUTs4QkFBUTs7Ozs7OzhCQUN2Qiw4REFBQ0M7b0JBQ0dDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hqQixNQUFLO29CQUNMQyxPQUFPUCxRQUFRRyxHQUFHO29CQUNsQnFCLFVBQVVwQjs7Ozs7OzhCQUdkLDhEQUFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVDtHQXpERTNCO0FBNEROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRUaXRsZS5qcz82ODIyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZm9ybS5jc3MnO1xuXG5jb25zdCBmb3JtdGl0bGUgPSAoe09uQWRkVGl0bGV9KSA9PiB7XG4gICAgICAgIFxuICAgIFxuICAgIGNvbnN0IFtuZXdJdGVtLCBzZXROZXdJdGVtXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgIGltZzogJydcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBzZXROZXdJdGVtKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9O1xuICAgICAgXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAobmV3SXRlbS50aXRsZS50cmltKCkgPT09ICcnIHx8IG5ld0l0ZW0ubGluay50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT25BZGRUaXRsZShuZXdJdGVtKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTmV3IG1lYWwgcGxhbjonLCBuZXdJdGVtKTtcbiAgICAgIFxuICAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPkltYWdlIExpbms6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld0l0ZW0uaW1nfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZvcm10aXRsZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImZvcm10aXRsZSIsIk9uQWRkVGl0bGUiLCJuZXdJdGVtIiwic2V0TmV3SXRlbSIsInRpdGxlIiwiaW1nIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJsaW5rIiwiY29uc29sZSIsImxvZyIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddTitle.js\n"));

/***/ })

});