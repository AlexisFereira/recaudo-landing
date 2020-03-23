webpackHotUpdate("main",{

/***/ "./src/components/step/steps/adminSubscription/printPdf.js":
/*!*****************************************************************!*\
  !*** ./src/components/step/steps/adminSubscription/printPdf.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_epayco_Desktop_Sitios_checkout_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/format */ "./src/util/format.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Flex */ "./src/components/Flex/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");

var _jsxFileName = "/Users/epayco/Desktop/Sitios/checkout/client/src/components/step/steps/adminSubscription/printPdf.js";

function _templateObject5() {
  const data = Object(_Users_epayco_Desktop_Sitios_checkout_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border:1pt solid #D7D7D9;\n  width:100%;\n  margin-bottom: 10pt;\n  background:red;\n  \n  .estado{\n    background-color:", ";\n    color:white;\n    font-size: 12pt;\n    height:27pt;\n    text-align:center;\n    padding: 8px;\n  }\n\n  .amount{\n    padding: 8px;\n  \n    .number{\n      font-size:22pt;\n      color:black;\n    }\n    .curr{\n      font-size:12pt;\n      padding:5pt 0 0 5pt;\n      line-height:12pt;\n    }\n  } \n"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_Users_epayco_Desktop_Sitios_checkout_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width:100%;\n  padding:0 20pt;\n  margin-bottom: 15pt;\n  \n  .texto{\n    color:#868585;\n    background-color:#E4E4E4;\n    height:30pt;\n    text-align:center;\n    width:100%;\n  }\n  \n  @media print {\n    background-color:red;\n}\n  \n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_Users_epayco_Desktop_Sitios_checkout_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    \n  text-align:", ";\n  margin-bottom: 15pt;\n\n\n  .name{\n    font-size:8pt;\n    text-transform:uppercase;\n    color:black;\n    lettering-spacing:0.5pt;\n  }\n  \n  .value{\n    font-size:8pt;\n    text-transform:uppercase;\n    color:#828691;\n    lettering-spacing:0.5pt;\n  }\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_epayco_Desktop_Sitios_checkout_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width   : 100%;\n  padding : 20px;\n  background-color : black;\n  color      :    ", ";\n \n   .title{\n    font-size:24px;\n   }\n   \n   .subtitle{\n    font-size:16px;\n    font-weight:bold;\n   }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_epayco_Desktop_Sitios_checkout_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width:100%;\n  margin:auto;\n  color:#3a3a3a;\n  margin-bottom:-1px;\n  padding:5px 20px 0;\n  \n  .dot{\n    border:1px dotted #cbcbcb; \n  }\n  \n  .name{\n    font-weight:bold; \n    padding:0 .75em;\n    font-size:8pt;\n    color:#9DA8BB;\n  }\n \n  .value{\n    padding:0 .75em;\n    font-size:8pt;\n    text-align:right;  \n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const Borde = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject());
const HeaderPdf = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject2(), props => props.colorText);
const Sdato = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3(), props => props.direction);
const Titles = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject4());

const Title = ({
  name
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Titles, {
    flex: "0 0 auto",
    className: "wc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "texto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, name));
};

const SimpleDato = ({
  name,
  value,
  type
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Sdato, {
    direction: type,
    className: "wc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wc value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, name.toUpperCase()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wc name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, value));
};

const Totalc = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject5(), props => props.estado);

const Total = ({
  estado = "pendiente",
  amount = "80",
  currency = "COP"
}) => {
  let estados = {
    aprobado: '#67C940',
    rechazado: '#E1251B',
    pendiente: '#FFD100'
  };
  let ColorEstado = estados[estado.toLowerCase()];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Totalc, {
    className: "wc",
    estado: ColorEstado,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wc estado",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, estado.toUpperCase()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "wc amount",
    alg: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flex: "0 0 auto",
    className: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, "$", amount), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flex: "0 0 auto",
    className: "curr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, currency)));
};

const HeaderPDFP = ({
  logo,
  nombre,
  correo,
  telefono,
  numeroPago,
  fechaPago,
  estado,
  amount,
  currency
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderPdf, {
    alg: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flex: "1 0 45%",
    jc: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: logo,
    alt: "",
    style: {
      maxHeight: "60pt",
      maxWidth: "120pt"
    },
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SimpleDato, {
    name: "Nombre",
    value: nombre,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SimpleDato, {
    name: "correo",
    value: correo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SimpleDato, {
    name: "teléfono",
    value: telefono,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flex: "1 0 45%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Total, {
    estado: estado,
    total: amount,
    currency: currency,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SimpleDato, {
    type: "right",
    name: "Número de pago",
    value: numeroPago,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SimpleDato, {
    type: "right",
    name: "fecha de pago",
    value: fechaPago,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  })));
};

let IntemInfo = ({
  name,
  value
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Borde, {
    flex: "1 0 100%",
    alg: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flex: "0 0 auto",
    jc: "flex-start",
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "dot",
    flex: "1 0 100px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flex: "0 0 auto",
    jc: "flex-end",
    className: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }, value));
};

class PrintHistory extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const _this$props$data = this.props.data,
          _this$props$data$payc = _this$props$data.paycoData,
          x_transaction_id = _this$props$data$payc.x_transaction_id,
          x_transaction_date = _this$props$data$payc.x_transaction_date,
          x_ref_payco = _this$props$data$payc.x_ref_payco,
          x_id_factura = _this$props$data$payc.x_id_factura,
          x_cardnumber = _this$props$data$payc.x_cardnumber,
          x_amount = _this$props$data$payc.x_amount,
          x_customer_email = _this$props$data$payc.x_customer_email,
          x_customer_name = _this$props$data$payc.x_customer_name,
          x_customer_phone = _this$props$data$payc.x_customer_phone,
          x_business = _this$props$data$payc.x_business,
          globalStatus = _this$props$data.globalStatus,
          facturaId = _this$props$data.facturaId,
          invoiceData = _this$props$data.invoiceData;
    console.log(this.props.data);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        height: "100%",
        backgroundColor: "red"
      },
      className: 'p-3 wc ro',
      direction: "column",
      jc: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderPDFP, {
      color: this.props.color,
      colorText: this.props.colorText,
      comercio: x_business,
      logo: this.props.logo,
      nombre: x_customer_name,
      correo: x_customer_email,
      telefono: x_customer_phone,
      numeroPago: x_transaction_id,
      fechaPago: x_transaction_date,
      amount: x_amount,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
      name: "Detalle de formulario",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
      flex: "0 0 auto",
      className: "pb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, invoiceData.factura.length > 0 && invoiceData.factura.map((item, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IntemInfo, {
      name: item.label,
      value: item.value,
      key: index,
      type: item.format,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
      name: "Detalle de transacción",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
      flex: "0 0 auto",
      className: "pb-5 wc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IntemInfo, {
      name: 'Referencia',
      value: x_id_factura,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IntemInfo, {
      name: 'Referencia ePayco',
      value: x_ref_payco,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IntemInfo, {
      name: 'Método de pago',
      value: x_cardnumber,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IntemInfo, {
      name: 'Número de recibo',
      value: facturaId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
      flex: "1 0 auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
      flex: "0 0 auto",
      jc: "flex-end",
      className: "wc py-3 px-5 mx-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, "Powered by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "ml-2",
      src: "https://multimedia-epayco.s3.amazonaws.com/dashboard/logo-epayco-new.svg",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    })));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (PrintHistory);

/***/ })

})
//# sourceMappingURL=main.f1b10a090e0c11b1eac5.hot-update.js.map