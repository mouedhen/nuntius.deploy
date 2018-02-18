webpackJsonp([5],{

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(466)
/* script */
var __vue_script__ = __webpack_require__(866)
/* template */
var __vue_template__ = __webpack_require__(867)
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
Component.options.__file = "resources/assets/js/app/views/auth/LogIn.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00075b63", Component.options)
  } else {
    hotAPI.reload("data-v-00075b63", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tiny_cookie__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tiny_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tiny_cookie__);
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
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            hasLoginError: false
        };
    },

    computed: _extends({
        isLoggedIn: function isLoggedIn() {
            return this.user.isLoggedIn();
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        // isLoggedIn: 'getLogInStatus',
        user: 'getLoggedUser'
    })),
    methods: {
        login: function login() {
            var _this = this;

            this.user.logIn().then(function (user) {
                _this.hasLoginError = false;
                _this.user.getProfile().then(function (user) {
                    _this.$store.dispatch('setLoginInfos', { user: _this.user, status: true });
                });
            }).catch(function (error) {
                _this.hasLoginError = true;
            });
        },
        logout: function logout() {
            var _this2 = this;

            this.user.logOut().then(function (data) {
                _this2.hasLoginError = false;
                _this2.$store.dispatch('setLoginInfos', { user: _this2.user, status: false });
            }).catch(function (error) {
                if (__WEBPACK_IMPORTED_MODULE_1_tiny_cookie__["get"]('token') !== undefined) __WEBPACK_IMPORTED_MODULE_1_tiny_cookie__["remove"]('token');
            });
        }
    },
    mounted: function mounted() {
        this.user.getProfile();
    }
});

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container login-container full-height" },
    [
      _c("el-card", { staticClass: "box-card" }, [
        _c(
          "div",
          [
            _c("h1", [_vm._v("Espace d'administration")]),
            _vm._v(" "),
            !_vm.isLoggedIn
              ? _c(
                  "el-form",
                  { ref: "loginForm", attrs: { model: _vm.user } },
                  [
                    _vm.hasLoginError
                      ? _c(
                          "el-form-item",
                          [
                            _c("el-alert", {
                              attrs: {
                                title:
                                  "Merci de vérifier vos paramètres de connection",
                                type: "error",
                                closable: false
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      { attrs: { label: "Adresse email" } },
                      [
                        _c("el-input", {
                          model: {
                            value: _vm.user.email,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "email", $$v)
                            },
                            expression: "user.email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      { attrs: { label: "Mot de passe" } },
                      [
                        _c("el-input", {
                          attrs: { type: "password", "auto-complete": "off" },
                          model: {
                            value: _vm.user.password,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "password", $$v)
                            },
                            expression: "user.password"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "primary" },
                            on: { click: _vm.login }
                          },
                          [_vm._v("Se connecter")]
                        ),
                        _vm._v(" "),
                        _c("el-button", [_vm._v("Cancel")])
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isLoggedIn
              ? _c(
                  "el-form",
                  [
                    _c(
                      "el-form-item",
                      [
                        _vm.hasLoginError
                          ? _c(
                              "el-form-item",
                              [
                                _c("el-alert", {
                                  attrs: {
                                    title:
                                      "Une erreur inattendue s'est produite lors de la déconnection, merci de réessayer",
                                    type: "error",
                                    closable: false
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Vous êtes déjà connecté en tant que "),
                          _c("b", [_vm._v(_vm._s(_vm.user.name))])
                        ]),
                        _vm._v(" "),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "primary" },
                            on: { click: _vm.logout }
                          },
                          [_vm._v("Se déconnecter")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-00075b63", module.exports)
  }
}

/***/ })

});