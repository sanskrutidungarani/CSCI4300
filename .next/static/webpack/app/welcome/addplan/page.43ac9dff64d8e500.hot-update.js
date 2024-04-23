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

/***/ "(app-pages-browser)/./src/app/components/AddFood.jsx":
/*!****************************************!*\
  !*** ./src/app/components/AddFood.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"(app-pages-browser)/./src/app/components/button.js\");\n/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/form.css */ \"(app-pages-browser)/./src/app/styles/form.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddFood = (param)=>{\n    let { OnAddFood } = param;\n    _s();\n    const [newItem, setNewItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        img: \"\",\n        name: \"\",\n        portion: \"\",\n        calories: \"\",\n        carbs: \"\",\n        protein: \"\"\n    });\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setNewItem((prevState)=>({\n                ...prevState,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (newItem.title.trim() === \"\" || newItem.portion.trim() === \"\") {\n            return;\n        }\n        console.log(\"New meal plan:\", newItem);\n        OnAddFood(newItem);\n        setNewItem({\n            name: \"\",\n            portion: \"\",\n            calories: \"\",\n            carbs: \"\",\n            protein: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Title:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"title\",\n                    name: \"title\",\n                    value: newItem.title,\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Image Link:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"image\",\n                    name: \"image\",\n                    value: newItem.img,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Food Name:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"name\",\n                    name: \"name\",\n                    value: newItem.name,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Portion(1 cup, 100g, 1):\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"portion\",\n                    name: \"portion\",\n                    value: newItem.portion,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Calories:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    id: \"calories\",\n                    name: \"calories\",\n                    value: newItem.calories,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Carbs(g):\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    id: \"carbs\",\n                    name: \"carbs\",\n                    value: newItem.carbs,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 109,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Protein(g):\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    id: \"protein\",\n                    name: \"protein\",\n                    value: newItem.protein,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 111,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 119,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-button\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"submit\",\n                        children: \"Add Food\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 16\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 120,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AddFood, \"0sB6dBBHkaO1j2Aw+Nbqa54wgi8=\");\n_c = AddFood;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddFood);\nvar _c;\n$RefreshReg$(_c, \"AddFood\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRGb29kLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUNWO0FBQ0Y7QUFHNUIsTUFBTUcsVUFBVTtRQUFDLEVBQUNDLFNBQVMsRUFBQzs7SUFFcEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO1FBQ3JDTSxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCLE1BQU0sRUFBRU4sSUFBSSxFQUFFTyxLQUFLLEVBQUUsR0FBR0QsTUFBTUUsTUFBTTtRQUNwQ1gsV0FBV1ksQ0FBQUEsWUFBYztnQkFDdkIsR0FBR0EsU0FBUztnQkFDWixDQUFDVCxLQUFLLEVBQUVPO1lBQ1Y7SUFDRjtJQUdGLE1BQU1HLGVBQWUsQ0FBQ0o7UUFDcEJBLE1BQU1LLGNBQWM7UUFFcEIsSUFBSWYsUUFBUUUsS0FBSyxDQUFDYyxJQUFJLE9BQU8sTUFBTWhCLFFBQVFLLE9BQU8sQ0FBQ1csSUFBSSxPQUFPLElBQUk7WUFDaEU7UUFDRjtRQUNBQyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCbEI7UUFFOUJELFVBQVVDO1FBRVZDLFdBQVc7WUFBRUcsTUFBTTtZQUFJQyxTQUFTO1lBQUlDLFVBQVU7WUFBSUMsT0FBTztZQUFJQyxTQUFTO1FBQUc7SUFDM0U7SUFFSixxQkFDSSw4REFBQ1c7a0JBQ0csNEVBQUNDO1lBQUtDLFVBQVVQOzs4QkFFaEIsOERBQUNROzhCQUFPOzs7Ozs7OEJBQ1IsOERBQUNDO29CQUNHQyxNQUFLO29CQUNMQyxJQUFHO29CQUNIckIsTUFBSztvQkFDTE8sT0FBT1gsUUFBUUUsS0FBSztvQkFDcEJ3QixVQUFVakI7b0JBQ1ZrQixRQUFROzs7Ozs7OEJBR1osOERBQUNDOzs7Ozs4QkFFRCw4REFBQ047OEJBQU87Ozs7Ozs4QkFDUiw4REFBQ0M7b0JBQ0dDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hyQixNQUFLO29CQUNMTyxPQUFPWCxRQUFRRyxHQUFHO29CQUNsQnVCLFVBQVVqQjs7Ozs7OzhCQUdkLDhEQUFDbUI7Ozs7OzhCQUNELDhEQUFDTjs4QkFBTTs7Ozs7OzhCQUNQLDhEQUFDQztvQkFDR0MsTUFBSztvQkFDTEMsSUFBRztvQkFDSHJCLE1BQUs7b0JBQ0xPLE9BQU9YLFFBQVFJLElBQUk7b0JBQ25Cc0IsVUFBVWpCOzs7Ozs7OEJBR2QsOERBQUNtQjs7Ozs7OEJBRUQsOERBQUNOOzhCQUFPOzs7Ozs7OEJBQ1IsOERBQUNDO29CQUNHQyxNQUFLO29CQUNMQyxJQUFHO29CQUNIckIsTUFBSztvQkFDTE8sT0FBT1gsUUFBUUssT0FBTztvQkFDdEJxQixVQUFVakI7Ozs7Ozs4QkFHZCw4REFBQ21COzs7Ozs4QkFFRCw4REFBQ047OEJBQU87Ozs7Ozs4QkFDUiw4REFBQ0M7b0JBQ0dDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hyQixNQUFLO29CQUNMTyxPQUFPWCxRQUFRTSxRQUFRO29CQUN2Qm9CLFVBQVVqQjs7Ozs7OzhCQUdkLDhEQUFDbUI7Ozs7OzhCQUVELDhEQUFDTjs4QkFBTTs7Ozs7OzhCQUNQLDhEQUFDQztvQkFDR0MsTUFBSztvQkFDTEMsSUFBRztvQkFDSHJCLE1BQUs7b0JBQ0xPLE9BQU9YLFFBQVFPLEtBQUs7b0JBQ3BCbUIsVUFBVWpCOzs7Ozs7OEJBR2QsOERBQUNtQjs7Ozs7OEJBQ0QsOERBQUNOOzhCQUFPOzs7Ozs7OEJBQ1IsOERBQUNDO29CQUNHQyxNQUFLO29CQUNMQyxJQUFHO29CQUNIckIsTUFBSztvQkFDTE8sT0FBT1gsUUFBUVEsT0FBTztvQkFDdEJrQixVQUFVakI7Ozs7Ozs4QkFHZCw4REFBQ21COzs7Ozs4QkFDRCw4REFBQ1Q7b0JBQUlVLFdBQVU7OEJBQ1osNEVBQUNoQywrQ0FBTUE7d0JBQUMyQixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpDO0dBMUhFMUI7S0FBQUE7QUE2SE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0FkZEZvb2QuanN4PzA3YWQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCAnLi4vc3R5bGVzL2Zvcm0uY3NzJztcblxuXG5jb25zdCBBZGRGb29kID0gKHtPbkFkZEZvb2R9KSA9PiB7XG5cbiAgICAgICAgY29uc3QgW25ld0l0ZW0sIHNldE5ld0l0ZW1dID0gdXNlU3RhdGUoe1xuICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICBpbWc6ICcnLFxuICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgIHBvcnRpb246ICcnLFxuICAgICAgICAgIGNhbG9yaWVzOiAnJyxcbiAgICAgICAgICBjYXJiczogJycsXG4gICAgICAgICAgcHJvdGVpbjogJydcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBzZXROZXdJdGVtKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9O1xuICAgIFxuICAgICAgXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKG5ld0l0ZW0udGl0bGUudHJpbSgpID09PSAnJyB8fCBuZXdJdGVtLnBvcnRpb24udHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZygnTmV3IG1lYWwgcGxhbjonLCBuZXdJdGVtKTtcblxuICAgICAgICAgIE9uQWRkRm9vZChuZXdJdGVtKTtcbiAgICAgIFxuICAgICAgICAgIHNldE5ld0l0ZW0oeyBuYW1lOiAnJywgcG9ydGlvbjogJycsIGNhbG9yaWVzOiAnJywgY2FyYnM6ICcnLCBwcm90ZWluOiAnJyB9KTtcbiAgICAgICAgfTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuXG4gICAgICAgICAgICA8bGFiZWwgPlRpdGxlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3SXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPGxhYmVsID5JbWFnZSBMaW5rOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3SXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGxhYmVsPkZvb2QgTmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPGxhYmVsID5Qb3J0aW9uKDEgY3VwLCAxMDBnLCAxKTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwicG9ydGlvblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInBvcnRpb25cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLnBvcnRpb259XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgXG4gICAgICAgICAgICA8bGFiZWwgPkNhbG9yaWVzOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBpZD1cImNhbG9yaWVzXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2Fsb3JpZXNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLmNhbG9yaWVzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPGxhYmVsPkNhcmJzKGcpOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBpZD1cImNhcmJzXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2FyYnNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLmNhcmJzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGxhYmVsID5Qcm90ZWluKGcpOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBpZD1cInByb3RlaW5cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcm90ZWluXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3SXRlbS5wcm90ZWlufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtYnV0dG9uJz5cbiAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBGb29kPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFkZEZvb2Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJBZGRGb29kIiwiT25BZGRGb29kIiwibmV3SXRlbSIsInNldE5ld0l0ZW0iLCJ0aXRsZSIsImltZyIsIm5hbWUiLCJwb3J0aW9uIiwiY2Fsb3JpZXMiLCJjYXJicyIsInByb3RlaW4iLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwicHJldlN0YXRlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiY29uc29sZSIsImxvZyIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYnIiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddFood.jsx\n"));

/***/ })

});