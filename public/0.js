webpackJsonp([0],{

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tiny_cookie__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tiny_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_tiny_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Auth = function () {
    function Auth() {
        _classCallCheck(this, Auth);
    }

    _createClass(Auth, null, [{
        key: 'isLoggedIn',
        value: function isLoggedIn() {
            return __WEBPACK_IMPORTED_MODULE_2_tiny_cookie__["get"]('token') !== null;
        }
    }, {
        key: 'signIn',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(email, password) {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', new Promise(function (resolve, reject) {
                                    __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* API_END_POINT */] + 'login', {
                                        email: email,
                                        password: password
                                    }).then(function (response) {
                                        __WEBPACK_IMPORTED_MODULE_2_tiny_cookie__["set"]('token', 'Bearer ' + response.data.token);
                                        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.defaults.headers.common['Authorization'] = __WEBPACK_IMPORTED_MODULE_2_tiny_cookie__["get"]('token');
                                        resolve(response);
                                    }).catch(function (errors) {
                                        reject(errors);
                                    });
                                }));

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function signIn(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return signIn;
        }()
    }, {
        key: 'signOut',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt('return', new Promise(function (resolve, reject) {
                                    __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* API_END_POINT */] + 'logout').then(function (response) {
                                        __WEBPACK_IMPORTED_MODULE_2_tiny_cookie__["remove"]('token');
                                        resolve(response);
                                    }).catch(function (errors) {
                                        reject(errors);
                                    });
                                }));

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function signOut() {
                return _ref2.apply(this, arguments);
            }

            return signOut;
        }()
    }]);

    return Auth;
}();

/* harmony default export */ __webpack_exports__["a"] = (Auth);

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_END_POINT; });
var API_END_POINT = 'http://localhost:8000/api/v1/';

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Auth__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(224);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var User = function (_Model) {
    _inherits(User, _Model);

    function User() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { id: -1, name: null, email: null, password: null, token: null };
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { endPoint: 'users' };

        _classCallCheck(this, User);

        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, attributes, config));

        _this.id = attributes.id;
        _this.name = attributes.name;
        _this.email = attributes.email;
        _this.password = attributes.password;
        _this.token = attributes.token;
        return _this;
    }

    _createClass(User, [{
        key: "get",
        value: function get() {
            return {
                'id': this.id,
                'name': this.id,
                'email': this.id,
                'password': this.id,
                'token': this.id
            };
        }
    }, {
        key: "set",
        value: function set() {
            var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { id: -1, name: null, email: null, password: null, token: null };

            this.id = attributes.id;
            this.name = attributes.name;
            this.email = attributes.email;
            this.password = attributes.password;
            this.token = attributes.token;
        }
    }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
            return __WEBPACK_IMPORTED_MODULE_1__Auth__["a" /* default */].isLoggedIn();
        }
    }, {
        key: "serialize",
        value: function serialize(response) {
            this.id = response.data.id;
            this.name = response.data.name;
            this.email = response.data.email;
        }
    }, {
        key: "getProfile",
        value: function getProfile() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* API_END_POINT */] + 'profile').then(function (response) {
                    _this2.serialize(response);
                    resolve(response.data);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: "logIn",
        value: function logIn() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_1__Auth__["a" /* default */].signIn(_this3.email, _this3.password).then(function (response) {
                    _this3.token = response.data.token;
                    resolve(_this3);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: "logOut",
        value: function logOut() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_1__Auth__["a" /* default */].signOut().then(function (response) {
                    _this4.constructor();
                    resolve(_this4);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return User;
}(__WEBPACK_IMPORTED_MODULE_2__Model__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios_index__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios_index__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Model = function () {
    function Model() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { id: -1 };
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { endPoint: 'users' };

        _classCallCheck(this, Model);

        this._endPoint = config.endPoint;
        if (new.target === Model) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }

        if (this.set === undefined || typeof this.set !== "function") {
            throw new TypeError("Must override method");
        }

        if (this.get === undefined || typeof this.get !== "function") {
            throw new TypeError("Must override method");
        }

        if (this.serialize === undefined || typeof this.serialize !== "function") {
            throw new TypeError("Must override method");
        }
    }

    _createClass(Model, [{
        key: "set",
        value: function set() {
            var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            throw new TypeError("Not implemented.");
        }
    }, {
        key: "get",
        value: function get() {
            throw new TypeError("Not implemented.");
        }
    }, {
        key: "serialize",
        value: function serialize(response) {
            throw new TypeError("Not implemented.");
        }
    }, {
        key: "fetch",
        value: function fetch() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_1_axios_index___default.a.get(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* API_END_POINT */] + _this._endPoint + '/' + _this.id).then(function (response) {
                    _this.serialize(response);
                    resolve(_this);
                }).catch(function (errors) {
                    reject(errors);
                });
            });
        }
    }, {
        key: "fetchAll",
        value: function fetchAll() {
            var _this2 = this;

            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_1_axios_index___default.a.get(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* API_END_POINT */] + _this2._endPoint, data).then(function (response) {
                    resolve(response.data);
                }).catch(function (errors) {
                    reject(errors);
                });
            });
        }
    }, {
        key: "save",
        value: function save() {
            //
        }
    }, {
        key: "store",
        value: function store() {
            //
        }
    }, {
        key: "update",
        value: function update() {
            //
        }
    }, {
        key: "delete",
        value: function _delete() {
            //
        }
    }]);

    return Model;
}();

/* harmony default export */ __webpack_exports__["a"] = (Model);

/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(466)
/* script */
var __vue_script__ = __webpack_require__(885)
/* template */
var __vue_template__ = __webpack_require__(886)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/app/views/shared/components/NavBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d1f08a40", Component.options)
  } else {
    hotAPI.reload("data-v-d1f08a40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tiny_cookie__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tiny_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tiny_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_User__ = __webpack_require__(799);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'nav-bar',
    data: function data() {
        return {
            activeIndex: '0',
            user: new __WEBPACK_IMPORTED_MODULE_2__models_User__["a" /* default */]()
        };
    },

    methods: {
        logout: function logout() {
            var _this = this;

            if (this.logInStatus) {
                this.user.logOut().then(function (data) {
                    if (__WEBPACK_IMPORTED_MODULE_1_tiny_cookie__["get"]('token') !== undefined) __WEBPACK_IMPORTED_MODULE_1_tiny_cookie__["remove"]('token');
                    _this.$store.dispatch('logout');
                });
            }
        },
        getLoggedInUser: function getLoggedInUser() {
            var _this2 = this;

            if (this.logInStatus) {
                this.user.getProfile().then(function (user) {
                    _this2.$store.dispatch('setLoginInfos', { user: user, status: true });
                }).catch(function (error) {
                    if (error.response.status === 401) {
                        if (__WEBPACK_IMPORTED_MODULE_1_tiny_cookie__["get"]('token') !== undefined) __WEBPACK_IMPORTED_MODULE_1_tiny_cookie__["remove"]('token');
                        _this2.$store.dispatch('logout');
                    }
                });
            } else {
                this.$store.dispatch('logout');
            }
        }
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        logInStatus: 'getLogInStatus'
    })),
    mounted: function mounted() {
        this.getLoggedInUser();
    }
});

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-menu",
    {
      attrs: {
        router: true,
        "background-color": "#27ae60",
        "text-color": "#fff",
        "active-text-color": "#f2f2f2",
        mode: "horizontal",
        "default-active": _vm.activeIndex
      }
    },
    [
      _c("el-menu-item", { attrs: { route: { name: "index" }, index: "0" } }, [
        _vm._v("NUNTIUS")
      ]),
      _vm._v(" "),
      _vm.logInStatus
        ? _c(
            "el-menu-item",
            {
              staticClass: "right-nav-item",
              attrs: { index: "98", route: { name: "auth:login" } },
              on: { click: _vm.logout }
            },
            [_vm._v("Se déconnecter\n    ")]
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.logInStatus
        ? _c(
            "el-menu-item",
            {
              staticClass: "right-nav-item",
              attrs: { route: { name: "auth:login" }, index: "99" }
            },
            [_vm._v("Se connecter\n    ")]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d1f08a40", module.exports)
  }
}

/***/ })

});