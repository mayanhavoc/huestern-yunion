"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/check-token",{

/***/ "./pages/check-token.tsx":
/*!*******************************!*\
  !*** ./pages/check-token.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_macadmin_Documents_plutus_emurgo_finalProject_huestern_yunion_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macadmin_Documents_plutus_emurgo_finalProject_huestern_yunion_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macadmin_Documents_plutus_emurgo_finalProject_huestern_yunion_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/wallet */ \"./contexts/wallet.tsx\");\n/* harmony import */ var _components_wallet_connectWallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/wallet/connectWallet */ \"./components/wallet/connectWallet.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_wallet__WEBPACK_IMPORTED_MODULE_3__, _components_wallet_connectWallet__WEBPACK_IMPORTED_MODULE_4__]);\n([_contexts_wallet__WEBPACK_IMPORTED_MODULE_3__, _components_wallet_connectWallet__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\n// You can change this policyId to match any token.\n// 1. Try changing it to match a token that you minting in Module 201\n// 2. Can you get this page to work with a token on Cardano mainnet?\nvar policyId = \"1309921891e459c7e9acb338d5dae18f98d1c2f55c1852cd5cf341f9\";\nvar CheckToken = function() {\n    _s();\n    var ref = (0,_contexts_wallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), connecting = ref.connecting, walletNameConnected = ref.walletNameConnected, connectWallet = ref.connectWallet, walletConnected = ref.walletConnected, wallet = ref.wallet;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), assets = ref1[0], setAssets = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    function getAssets() {\n        return _getAssets.apply(this, arguments);\n    }\n    function _getAssets() {\n        _getAssets = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_macadmin_Documents_plutus_emurgo_finalProject_huestern_yunion_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var _assets;\n            return _Users_macadmin_Documents_plutus_emurgo_finalProject_huestern_yunion_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!wallet) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        setLoading(true);\n                        _ctx.next = 4;\n                        return wallet.getAssets();\n                    case 4:\n                        _assets = _ctx.sent;\n                        setAssets(_assets);\n                        setLoading(false);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getAssets.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                as: \"h1\",\n                size: \"3xl\",\n                noOfLines: 1,\n                mb: 1,\n                children: \"Check wallet balance \"\n            }, void 0, false, {\n                fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/check-token.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_wallet_connectWallet__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/check-token.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            walletConnected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"Get Wallet Assets\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/check-token.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this),\n                    assets ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pre\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                            className: \"language-js\",\n                            children: JSON.stringify(assets, null, 2)\n                        }, void 0, false, {\n                            fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/check-token.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/check-token.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: function() {\n                            return getAssets();\n                        },\n                        disabled: connecting || loading,\n                        style: {\n                            margin: \"8px\",\n                            backgroundColor: connecting || loading ? \"orange\" : \"grey\"\n                        },\n                        children: \"Get Wallet Assets\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/check-token.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/check-token.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(CheckToken, \"gaL8xhLaxc0Jk1sHKr2KzjP2O9E=\", false, function() {\n    return [\n        _contexts_wallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = CheckToken;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckToken);\nvar _c;\n$RefreshReg$(_c, \"CheckToken\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGVjay10b2tlbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUV5QjtBQUNtQjtBQUVEO0FBQ29COztBQUUvRCxtREFBbUQ7QUFDbkQscUVBQXFFO0FBQ3JFLG9FQUFvRTtBQUNwRSxJQUFNSSxRQUFRLEdBQUcsMERBQTBEO0FBRTNFLElBQU1DLFVBQVUsR0FBYSxXQUFNOztJQUNqQyxJQUFvRkgsR0FBVyxHQUFYQSw0REFBUyxFQUFFLEVBQXZGSSxVQUFVLEdBQWtFSixHQUFXLENBQXZGSSxVQUFVLEVBQUVDLG1CQUFtQixHQUE2Q0wsR0FBVyxDQUEzRUssbUJBQW1CLEVBQUVDLGFBQWEsR0FBOEJOLEdBQVcsQ0FBdERNLGFBQWEsRUFBRUMsZUFBZSxHQUFhUCxHQUFXLENBQXZDTyxlQUFlLEVBQUVDLE1BQU0sR0FBS1IsR0FBVyxDQUF0QlEsTUFBTTtJQUMvRSxJQUE0QlQsSUFBNEIsR0FBNUJBLCtDQUFRLENBQWUsSUFBSSxDQUFDLEVBQWpEVSxNQUFNLEdBQWVWLElBQTRCLEdBQTNDLEVBQUVXLFNBQVMsR0FBSVgsSUFBNEIsR0FBaEM7SUFDeEIsSUFBOEJBLElBQXdCLEdBQXhCQSwrQ0FBUSxDQUFVLEtBQUssQ0FBQyxFQUEvQ1ksT0FBTyxHQUFnQlosSUFBd0IsR0FBeEMsRUFBRWEsVUFBVSxHQUFJYixJQUF3QixHQUE1QjthQUVYYyxTQUFTO2VBQVRBLFVBQVM7O2FBQVRBLFVBQVM7UUFBVEEsVUFBUyxHQUF4Qix1UkFBMkI7Z0JBR2pCQyxPQUFPOzs7OzRCQUZYTixDQUFBQSxNQUFNOzs7O3dCQUNSSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7OytCQUNLSixNQUFNLENBQUNLLFNBQVMsRUFBRTs7d0JBQWxDQyxPQUFPLFlBQTJCO3dCQUN4Q0osU0FBUyxDQUFDSSxPQUFPLENBQUMsQ0FBQzt3QkFDbkJGLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O1NBRXJCO2VBUGNDLFVBQVM7O0lBU3hCLHFCQUNFLDhEQUFDRSxLQUFHOzswQkFDRiw4REFBQ2pCLHFEQUFPO2dCQUFDa0IsRUFBRSxFQUFDLElBQUk7Z0JBQUNDLElBQUksRUFBQyxLQUFLO2dCQUFDQyxTQUFTLEVBQUUsQ0FBQztnQkFBRUMsRUFBRSxFQUFFLENBQUM7MEJBQUUsdUJBQXFCOzs7OztxQkFBVTswQkFDaEYsOERBQUNsQix3RUFBYTs7OztxQkFBRztZQUNoQk0sZUFBZSxrQkFDZDs7a0NBQ0UsOERBQUNhLElBQUU7a0NBQUMsbUJBQWlCOzs7Ozs2QkFBSztvQkFDekJYLE1BQU0saUJBQ0wsOERBQUNZLEtBQUc7a0NBQ0YsNEVBQUNDLE1BQUk7NEJBQUNDLFNBQVMsRUFBQyxhQUFhO3NDQUMxQkMsSUFBSSxDQUFDQyxTQUFTLENBQUNoQixNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs7Ozs7aUNBQzNCOzs7Ozs2QkFDSCxpQkFFTiw4REFBQ2lCLFFBQU07d0JBQ0xDLElBQUksRUFBQyxRQUFRO3dCQUNiQyxPQUFPLEVBQUU7bUNBQU1mLFNBQVMsRUFBRTt5QkFBQTt3QkFDMUJnQixRQUFRLEVBQUV6QixVQUFVLElBQUlPLE9BQU87d0JBQy9CbUIsS0FBSyxFQUFFOzRCQUNMQyxNQUFNLEVBQUUsS0FBSzs0QkFDYkMsZUFBZSxFQUFFNUIsVUFBVSxJQUFJTyxPQUFPLEdBQUcsUUFBUSxHQUFHLE1BQU07eUJBQzNEO2tDQUNGLG1CQUVEOzs7Ozs2QkFBUzs7NEJBRVY7Ozs7OzthQUVELENBQ047Q0FDSDtHQTVDS1IsVUFBVTs7UUFDc0VILHdEQUFTOzs7QUFEekZHLEtBQUFBLFVBQVU7QUE4Q2hCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoZWNrLXRva2VuLnRzeD8zOGIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCwgSGVhZGluZywgVGV4dCwgU3Bpbm5lciwgQ2VudGVyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB1c2VXYWxsZXQgZnJvbSAnLi4vY29udGV4dHMvd2FsbGV0JztcbmltcG9ydCBDb25uZWN0V2FsbGV0IGZyb20gJy4uL2NvbXBvbmVudHMvd2FsbGV0L2Nvbm5lY3RXYWxsZXQnO1xuXG4vLyBZb3UgY2FuIGNoYW5nZSB0aGlzIHBvbGljeUlkIHRvIG1hdGNoIGFueSB0b2tlbi5cbi8vIDEuIFRyeSBjaGFuZ2luZyBpdCB0byBtYXRjaCBhIHRva2VuIHRoYXQgeW91IG1pbnRpbmcgaW4gTW9kdWxlIDIwMVxuLy8gMi4gQ2FuIHlvdSBnZXQgdGhpcyBwYWdlIHRvIHdvcmsgd2l0aCBhIHRva2VuIG9uIENhcmRhbm8gbWFpbm5ldD9cbmNvbnN0IHBvbGljeUlkID0gXCIxMzA5OTIxODkxZTQ1OWM3ZTlhY2IzMzhkNWRhZTE4Zjk4ZDFjMmY1NWMxODUyY2Q1Y2YzNDFmOVwiXG5cbmNvbnN0IENoZWNrVG9rZW46IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbm5lY3RpbmcsIHdhbGxldE5hbWVDb25uZWN0ZWQsIGNvbm5lY3RXYWxsZXQsIHdhbGxldENvbm5lY3RlZCwgd2FsbGV0IH0gPSB1c2VXYWxsZXQoKTtcbiAgY29uc3QgW2Fzc2V0cywgc2V0QXNzZXRzXSA9IHVzZVN0YXRlPG51bGwgfCBhbnlbXT4obnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRBc3NldHMoKSB7XG4gICAgaWYgKHdhbGxldCkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IF9hc3NldHMgPSBhd2FpdCB3YWxsZXQuZ2V0QXNzZXRzKCk7XG4gICAgICBzZXRBc3NldHMoX2Fzc2V0cyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGluZyBhcz0naDEnIHNpemU9JzN4bCcgbm9PZkxpbmVzPXsxfSBtYj17MX0+Q2hlY2sgd2FsbGV0IGJhbGFuY2UgPC9IZWFkaW5nPlxuICAgICAgPENvbm5lY3RXYWxsZXQgLz5cbiAgICAgIHt3YWxsZXRDb25uZWN0ZWQgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoMT5HZXQgV2FsbGV0IEFzc2V0czwvaDE+XG4gICAgICAgICAge2Fzc2V0cyA/IChcbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLWpzXCI+XG4gICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGFzc2V0cywgbnVsbCwgMil9XG4gICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZXRBc3NldHMoKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Nvbm5lY3RpbmcgfHwgbG9hZGluZ31cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb25uZWN0aW5nIHx8IGxvYWRpbmcgPyBcIm9yYW5nZVwiIDogXCJncmV5XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdldCBXYWxsZXQgQXNzZXRzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja1Rva2VuXG4iXSwibmFtZXMiOlsiSGVhZGluZyIsInVzZVN0YXRlIiwidXNlV2FsbGV0IiwiQ29ubmVjdFdhbGxldCIsInBvbGljeUlkIiwiQ2hlY2tUb2tlbiIsImNvbm5lY3RpbmciLCJ3YWxsZXROYW1lQ29ubmVjdGVkIiwiY29ubmVjdFdhbGxldCIsIndhbGxldENvbm5lY3RlZCIsIndhbGxldCIsImFzc2V0cyIsInNldEFzc2V0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0QXNzZXRzIiwiX2Fzc2V0cyIsImRpdiIsImFzIiwic2l6ZSIsIm5vT2ZMaW5lcyIsIm1iIiwiaDEiLCJwcmUiLCJjb2RlIiwiY2xhc3NOYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJzdHlsZSIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/check-token.tsx\n"));

/***/ })

});