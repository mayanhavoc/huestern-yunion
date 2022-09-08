"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/templates/isr";
exports.ids = ["pages/templates/isr"];
exports.modules = {

/***/ "./apollo-client.ts":
/*!**************************!*\
  !*** ./apollo-client.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"https://graphql-api.testnet.dandelion.link/\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8tY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RDtBQUU3RCxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsd0RBQVksQ0FBQztJQUM1QkcsR0FBRyxFQUFFLDZDQUE2QztJQUNsREMsS0FBSyxFQUFFLElBQUlILHlEQUFhLEVBQUU7Q0FDN0IsQ0FBQztBQUVGLGlFQUFlQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcGJsLWZyb250LWVuZC10ZW1wbGF0ZS1uZXh0anMtbWVzaC8uL2Fwb2xsby1jbGllbnQudHM/MzlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiBcImh0dHBzOi8vZ3JhcGhxbC1hcGkudGVzdG5ldC5kYW5kZWxpb24ubGluay9cIixcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7Il0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJjbGllbnQiLCJ1cmkiLCJjYWNoZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo-client.ts\n");

/***/ }),

/***/ "./pages/templates/isr.tsx":
/*!*********************************!*\
  !*** ./pages/templates/isr.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apollo-client */ \"./apollo-client.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst ISR = ({ addressListFromTx  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                children: \"Hello On Chain Data!\"\n            }, void 0, false, {\n                fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/templates/isr.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                py: \"3\",\n                children: JSON.stringify(addressListFromTx)\n            }, void 0, false, {\n                fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/templates/isr.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macadmin/Documents/plutus-emurgo-finalProject/huestern-yunion/pages/templates/isr.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ISR);\nasync function getStaticProps() {\n    const { data  } = await _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].query({\n        query: _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n            query AddressFromUtxo {\n                transactions(where: { hash: { _eq: \"ac90e28c7f3a10e6c24641fbe0d74c02bcd00008a350abf2a27f15d2f5d4a8e0\" } }) {\n                    outputs {\n                        address\n                    }\n                }\n            }\n        `\n    });\n    return {\n        props: {\n            addressListFromTx: data.transactions\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZW1wbGF0ZXMvaXNyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFxQztBQUNJO0FBSWhCO0FBR3pCLE1BQU1LLEdBQUcsR0FBYSxDQUFDLEVBQUNDLGlCQUFpQixHQUFNLEdBQUs7SUFFaEQscUJBQ0ksOERBQUNKLGlEQUFHOzswQkFDQSw4REFBQ0MscURBQU87MEJBQUMsc0JBRVQ7Ozs7O3lCQUFVOzBCQUNWLDhEQUFDQyxrREFBSTtnQkFBQ0csRUFBRSxFQUFDLEdBQUc7MEJBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxpQkFBaUIsQ0FBQzs7Ozs7eUJBQVE7Ozs7OztpQkFDckQsQ0FDVDtDQUNKO0FBRUQsaUVBQWVELEdBQUc7QUFFWCxlQUFlSyxjQUFjLEdBQUc7SUFDbkMsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBRyxNQUFNViw0REFBWSxDQUFDO1FBQ2hDVyxLQUFLLEVBQUVaLCtDQUFHLENBQUM7Ozs7Ozs7O1FBUVgsQ0FBQztLQUNKLENBQUM7SUFDRixPQUFPO1FBQ0hhLEtBQUssRUFBRTtZQUNIUCxpQkFBaUIsRUFBRUssSUFBSSxDQUFDRyxZQUFZO1NBQ3ZDO0tBQ0osQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHBibC1mcm9udC1lbmQtdGVtcGxhdGUtbmV4dGpzLW1lc2gvLi9wYWdlcy90ZW1wbGF0ZXMvaXNyLnRzeD8wYzExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vYXBvbGxvLWNsaWVudFwiO1xuXG5pbXBvcnQge1xuICAgIEJveCwgSGVhZGluZywgVGV4dCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuXG5jb25zdCBJU1I6IE5leHRQYWdlID0gKHthZGRyZXNzTGlzdEZyb21UeH06IGFueSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxIZWFkaW5nPlxuICAgICAgICAgICAgICAgIEhlbGxvIE9uIENoYWluIERhdGEhXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dCBweT0nMyc+e0pTT04uc3RyaW5naWZ5KGFkZHJlc3NMaXN0RnJvbVR4KX08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSVNSXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBncWxgXG4gICAgICAgICAgICBxdWVyeSBBZGRyZXNzRnJvbVV0eG8ge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9ucyh3aGVyZTogeyBoYXNoOiB7IF9lcTogXCJhYzkwZTI4YzdmM2ExMGU2YzI0NjQxZmJlMGQ3NGMwMmJjZDAwMDA4YTM1MGFiZjJhMjdmMTVkMmY1ZDRhOGUwXCIgfSB9KSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgLFxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBhZGRyZXNzTGlzdEZyb21UeDogZGF0YS50cmFuc2FjdGlvbnMsXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuXG4iXSwibmFtZXMiOlsiZ3FsIiwiY2xpZW50IiwiQm94IiwiSGVhZGluZyIsIlRleHQiLCJJU1IiLCJhZGRyZXNzTGlzdEZyb21UeCIsInB5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsInF1ZXJ5IiwicHJvcHMiLCJ0cmFuc2FjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/templates/isr.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/templates/isr.tsx"));
module.exports = __webpack_exports__;

})();