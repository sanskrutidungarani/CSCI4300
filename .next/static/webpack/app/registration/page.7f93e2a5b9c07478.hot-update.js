"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/registration/page",{

/***/ "(app-pages-browser)/./src/app/components/registrationForm.jsx":
/*!*************************************************!*\
  !*** ./src/app/components/registrationForm.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/form.css */ \"(app-pages-browser)/./src/app/styles/form.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// RegistrationForm.js\n\nvar _s = $RefreshSig$();\n\n\n\nconst RegistrationForm = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/register\", {\n                Username,\n                password\n            });\n            console.log(\"Registration successful:\", response.data);\n            const isConfirmed = window.confirm(\"Account created! Do you want to proceed to the home page?\");\n            if (isConfirmed) {\n                window.location.href = \"/welcome\";\n            } else {\n                setName(\"\");\n                setPassword(\"\");\n            }\n        } catch (error) {\n            console.error(\"Registration failed:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Register for a new account\"\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RegistrationForm, \"Q3D0qnZ9tttG8x/WlHuqXUGjTo0=\");\n_c = RegistrationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationForm);\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb25Gb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQkFBc0I7OztBQUNrQjtBQUNaO0FBQ0Y7QUFFMUIsTUFBTUcsbUJBQW1COztJQUN2QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1PLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVQsNkNBQUtBLENBQUNVLElBQUksQ0FBQyxpQkFBaUI7Z0JBQ2pEQztnQkFDQVA7WUFDRjtZQUNBUSxRQUFRQyxHQUFHLENBQUMsNEJBQTRCSixTQUFTSyxJQUFJO1lBQ3JELE1BQU1DLGNBQWNDLE9BQU9DLE9BQU8sQ0FDaEM7WUFFRixJQUFJRixhQUFhO2dCQUNmQyxPQUFPRSxRQUFRLENBQUNDLElBQUksR0FBRztZQUN6QixPQUFPO2dCQUNMaEIsUUFBUTtnQkFDUkUsWUFBWTtZQUNkO1FBQ0YsRUFBRSxPQUFPZSxPQUFPO1lBQ2RSLFFBQVFRLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVWxCOztrQ0FDZCw4REFBQ2U7OzBDQUNDLDhEQUFDSTtnQ0FBTUMsU0FBUTswQ0FBTzs7Ozs7OzBDQUN0Qiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE9BQU81QjtnQ0FDUDZCLFVBQVUsQ0FBQ3hCLElBQU1KLFFBQVFJLEVBQUV5QixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FHM0MsOERBQUNUOzswQ0FDQyw4REFBQ0k7Z0NBQU1DLFNBQVE7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxPQUFPMUI7Z0NBQ1AyQixVQUFVLENBQUN4QixJQUFNRixZQUFZRSxFQUFFeUIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7a0NBRy9DLDhEQUFDRzt3QkFBT0wsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBcERNM0I7S0FBQUE7QUFzRE4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uRm9ybS5qc3g/OWRiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWdpc3RyYXRpb25Gb3JtLmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9mb3JtLmNzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBSZWdpc3RyYXRpb25Gb3JtID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9yZWdpc3RlclwiLCB7XG4gICAgICAgIFVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bDpcIiwgcmVzcG9uc2UuZGF0YSk7XG4gICAgICBjb25zdCBpc0NvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKFxuICAgICAgICBcIkFjY291bnQgY3JlYXRlZCEgRG8geW91IHdhbnQgdG8gcHJvY2VlZCB0byB0aGUgaG9tZSBwYWdlP1wiXG4gICAgICApO1xuICAgICAgaWYgKGlzQ29uZmlybWVkKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvd2VsY29tZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TmFtZShcIlwiKTtcbiAgICAgICAgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWdpc3RyYXRpb24gZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5SZWdpc3RlciBmb3IgYSBuZXcgYWNjb3VudDwvaDI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Vc2VybmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUmVnaXN0cmF0aW9uRm9ybSIsIm5hbWUiLCJzZXROYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsIlVzZXJuYW1lIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJpc0NvbmZpcm1lZCIsIndpbmRvdyIsImNvbmZpcm0iLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImRpdiIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/registrationForm.jsx\n"));

/***/ })

});