"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_macadmin_Documents_plutus_emurgo_finalProject_huestern_yunion_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macadmin_Documents_plutus_emurgo_finalProject_huestern_yunion_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macadmin_Documents_plutus_emurgo_finalProject_huestern_yunion_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/wallet */ \"./contexts/wallet.tsx\");\n/* harmony import */ var _components_wallet_connectWallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/wallet/connectWallet */ \"./components/wallet/connectWallet.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_wallet__WEBPACK_IMPORTED_MODULE_3__, _components_wallet_connectWallet__WEBPACK_IMPORTED_MODULE_4__]);\n([_contexts_wallet__WEBPACK_IMPORTED_MODULE_3__, _components_wallet_connectWallet__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,_contexts_wallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), connecting = ref.connecting, walletConnected = ref.walletConnected, wallet = ref.wallet;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Not Connected\"), currentNetwork = ref1[0], setCurrentNetwork = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchNetwork = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_macadmin_Documents_plutus_emurgo_finalProject_huestern_yunion_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var _network;\n                return _Users_macadmin_Documents_plutus_emurgo_finalProject_huestern_yunion_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return wallet.getNetworkId();\n                        case 2:\n                            _network = _ctx.sent;\n                            if (_network === 0) {\n                                setCurrentNetwork(\"Testnet\");\n                            } else if (_network === 1) {\n                                setCurrentNetwork(\"Mainnet\");\n                            }\n                            setLoading(false);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchNetwork() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (walletConnected) {\n            setLoading(true);\n            fetchNetwork();\n        }\n    }, [\n        walletConnected,\n        wallet\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                as: \"h1\",\n                size: \"3xl\",\n                noOfLines: 1,\n                mb: 1,\n                children: \"Huestern Yunion\"\n            }, void 0, false, {\n                fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                fontSize: \"xl\",\n                noOfLines: 1,\n                mb: 4,\n                children: \"Huestern Yunion helps businesses in Latin America get paid by anyone, anywhere in the world.\"\n            }, void 0, false, {\n                fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_wallet_connectWallet__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                children: \"Step 1: Connect your wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                m: \"5\",\n                p: \"5\",\n                bg: \"teal.700\",\n                color: \"white\",\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {}, void 0, false, {\n                        fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: walletConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        w: \"80%\",\n                        mx: \"auto\",\n                        my: \"5\",\n                        p: \"5\",\n                        bg: \"green.100\",\n                        color: \"black\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                            fontSize: \"xl\",\n                            children: [\n                                \"Congratulations! You are connected to \",\n                                walletConnected,\n                                \" wallet on \",\n                                currentNetwork,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 19\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        w: \"80%\",\n                        mx: \"auto\",\n                        my: \"5\",\n                        p: \"5\",\n                        bg: \"red.100\",\n                        color: \"black\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                            fontSize: \"xl\",\n                            children: \"No wallet is connected yet. \"\n                        }, void 0, false, {\n                            fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/index.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 19\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"WcuiL/BUPRUAhheSjpt/9Wjmkrw=\", false, function() {\n    return [\n        _contexts_wallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQUNDLEVBQUUsRUFBQyxHQUFHO3dCQUFDTCxDQUFDLEVBQUMsR0FBRzt3QkFBQ0MsRUFBRSxFQUFDLFNBQVM7d0JBQUNDLEtBQUssRUFBQyxPQUFPO2tDQUM1RCw0RUFBQzFCLGtEQUFJOzRCQUFDc0IsUUFBUSxFQUFDLElBQUk7c0NBQUMsOEJBQTRCOzs7OztpQ0FBTzs7Ozs7NkJBQ25EO2lDQUdUOzs7OztxQkFFRDs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBN0RLZixJQUFJOztRQUN3Q0Ysd0RBQVM7OztBQURyREUsS0FBQUEsSUFBSTtBQStEViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsIEhlYWRpbmcsIFRleHQsIFNwaW5uZXIsIENlbnRlclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgdXNlV2FsbGV0IGZyb20gJy4uL2NvbnRleHRzL3dhbGxldCc7XG5pbXBvcnQgQ29ubmVjdFdhbGxldCBmcm9tICcuLi9jb21wb25lbnRzL3dhbGxldC9jb25uZWN0V2FsbGV0JztcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29ubmVjdGluZywgd2FsbGV0Q29ubmVjdGVkLCB3YWxsZXQgfSA9IHVzZVdhbGxldCgpO1xuICBjb25zdCBbY3VycmVudE5ldHdvcmssIHNldEN1cnJlbnROZXR3b3JrXSA9IHVzZVN0YXRlPFwiVGVzdG5ldFwiIHwgXCJNYWlubmV0XCIgfCBcIk5vdCBDb25uZWN0ZWRcIj4oXCJOb3QgQ29ubmVjdGVkXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IGZldGNoTmV0d29yayA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IF9uZXR3b3JrID0gYXdhaXQgd2FsbGV0LmdldE5ldHdvcmtJZCgpO1xuICAgICAgaWYgKF9uZXR3b3JrID09PSAwKSB7XG4gICAgICAgIHNldEN1cnJlbnROZXR3b3JrKFwiVGVzdG5ldFwiKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoX25ldHdvcmsgPT09IDEpIHtcbiAgICAgICAgc2V0Q3VycmVudE5ldHdvcmsoXCJNYWlubmV0XCIpXG4gICAgICB9XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAod2FsbGV0Q29ubmVjdGVkKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgZmV0Y2hOZXR3b3JrKCk7XG4gICAgfVxuXG4gIH0sIFt3YWxsZXRDb25uZWN0ZWQsIHdhbGxldF0pXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEhlYWRpbmcgYXM9J2gxJyBzaXplPSczeGwnIG5vT2ZMaW5lcz17MX0gbWI9ezF9PlxuICAgICAgICBIdWVzdGVybiBZdW5pb25cbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxUZXh0IGZvbnRTaXplPSd4bCcgbm9PZkxpbmVzPXsxfSBtYj17NH0+XG4gICAgICAgIEh1ZXN0ZXJuIFl1bmlvbiBoZWxwcyBidXNpbmVzc2VzIGluIExhdGluIEFtZXJpY2EgZ2V0IHBhaWQgYnkgYW55b25lLCBhbnl3aGVyZSBpbiB0aGVcbiAgICAgICAgd29ybGQuXG4gICAgICA8L1RleHQ+XG4gICAgICA8Q29ubmVjdFdhbGxldCAvPlxuICAgICAgPEhlYWRpbmc+XG4gICAgICAgIFN0ZXAgMTogQ29ubmVjdCB5b3VyIHdhbGxldFxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPEJveCBtPSc1JyBwPSc1JyBiZz0ndGVhbC43MDAnIGNvbG9yPSd3aGl0ZSc+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7d2FsbGV0Q29ubmVjdGVkID9cbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIDxCb3ggdz0nODAlJyBteD0nYXV0bycgbXk9JzUnIHA9JzUnIGJnPSdncmVlbi4xMDAnIGNvbG9yPSdibGFjayc+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0neGwnPkNvbmdyYXR1bGF0aW9ucyEgWW91IGFyZSBjb25uZWN0ZWQgdG8ge3dhbGxldENvbm5lY3RlZH0gd2FsbGV0IG9uIHtjdXJyZW50TmV0d29ya30gPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxCb3ggdz0nODAlJyBteD0nYXV0bycgbXk9JzUnIHA9JzUnIGJnPSdyZWQuMTAwJyBjb2xvcj0nYmxhY2snPlxuICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J3hsJz5ObyB3YWxsZXQgaXMgY29ubmVjdGVkIHlldC4gPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiQm94IiwiSGVhZGluZyIsIlRleHQiLCJTcGlubmVyIiwiQ2VudGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VXYWxsZXQiLCJDb25uZWN0V2FsbGV0IiwiSG9tZSIsImNvbm5lY3RpbmciLCJ3YWxsZXRDb25uZWN0ZWQiLCJ3YWxsZXQiLCJjdXJyZW50TmV0d29yayIsInNldEN1cnJlbnROZXR3b3JrIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaE5ldHdvcmsiLCJfbmV0d29yayIsImdldE5ldHdvcmtJZCIsImFzIiwic2l6ZSIsIm5vT2ZMaW5lcyIsIm1iIiwiZm9udFNpemUiLCJtIiwicCIsImJnIiwiY29sb3IiLCJ3IiwibXgiLCJteSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});