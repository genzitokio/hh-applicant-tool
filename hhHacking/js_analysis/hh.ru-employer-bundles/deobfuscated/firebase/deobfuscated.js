try {
  (function () {
    var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var t = new e.Error().stack;
    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "20dcd06a-0e15-4324-8029-fdf6d04de8b0";
      e._sentryDebugIdIdentifier = "sentry-dbid-20dcd06a-0e15-4324-8029-fdf6d04de8b0";
    }
  })();
} catch (e) {}
(function () {
  try {
    var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    e._sentryModuleMetadata = e._sentryModuleMetadata || {};
    e._sentryModuleMetadata[new e.Error().stack] = function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        if (n != null) {
          for (var r in n) {
            if (n.hasOwnProperty(r)) {
              e[r] = n[r];
            }
          }
        }
      }
      return e;
    }({}, e._sentryModuleMetadata[new e.Error().stack], {
      "_sentryBundlerPluginAppKey:sentry-js-hh-filter-key": true
    });
  } catch (e) {}
})();
(function () {
  try {
    (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {}).SENTRY_RELEASE = {
      id: "a8891b807f20bd18b60ec88985b3712ef8d8e4c6"
    };
  } catch (e) {}
})();
(globalThis.__xhh_LOADABLE_LOADED_CHUNKS__ = globalThis.__xhh_LOADABLE_LOADED_CHUNKS__ || []).push([["1749"], {
  487001: function (e, t, n) {
    n.d(t, {
      Z: () => M
    });
    var r;
    var i = n(570655);
    var o = n(244589);
    var s = n(630909);
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function a() {
      var e = 0;
      for (var t = 0, n = arguments.length; t < n; t++) {
        e += arguments[t].length;
      }
      var r = Array(e);
      var i = 0;
      for (t = 0; t < n; t++) {
        var o = arguments[t];
        for (var s = 0, a = o.length; s < a; s++, i++) {
          r[i] = o[s];
        }
      }
      return r;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var c;
    var u;
    var l = [];
    (u = c ||= {})[u.DEBUG = 0] = "DEBUG";
    u[u.VERBOSE = 1] = "VERBOSE";
    u[u.INFO = 2] = "INFO";
    u[u.WARN = 3] = "WARN";
    u[u.ERROR = 4] = "ERROR";
    u[u.SILENT = 5] = "SILENT";
    var f;
    var p = {
      debug: c.DEBUG,
      verbose: c.VERBOSE,
      info: c.INFO,
      warn: c.WARN,
      error: c.ERROR,
      silent: c.SILENT
    };
    var h = c.INFO;
    (r = {})[c.DEBUG] = "log";
    r[c.VERBOSE] = "log";
    r[c.INFO] = "info";
    r[c.WARN] = "warn";
    r[c.ERROR] = "error";
    var d = r;
    function v(e, t) {
      var n = [];
      for (var r = 2; r < arguments.length; r++) {
        n[r - 2] = arguments[r];
      }
      if (!(t < e.logLevel)) {
        var i = new Date().toISOString();
        var o = d[t];
        if (!o) {
          throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
        }
        console[o].apply(console, a(["[" + i + "]  " + e.name + ":"], n));
      }
    }
    var g = function () {
      function e(e) {
        this.name = e;
        this._logLevel = h;
        this._logHandler = v;
        this._userLogHandler = null;
        l.push(this);
      }
      Object.defineProperty(e.prototype, "logLevel", {
        get: function () {
          return this._logLevel;
        },
        set: function (e) {
          if (!(e in c)) {
            throw new TypeError("Invalid value \"" + e + "\" assigned to `logLevel`");
          }
          this._logLevel = e;
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.setLogLevel = function (e) {
        this._logLevel = typeof e == "string" ? p[e] : e;
      };
      Object.defineProperty(e.prototype, "logHandler", {
        get: function () {
          return this._logHandler;
        },
        set: function (e) {
          if (typeof e != "function") {
            throw new TypeError("Value assigned to `logHandler` must be a function");
          }
          this._logHandler = e;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "userLogHandler", {
        get: function () {
          return this._userLogHandler;
        },
        set: function (e) {
          this._userLogHandler = e;
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.debug = function () {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        if (this._userLogHandler) {
          this._userLogHandler.apply(this, a([this, c.DEBUG], e));
        }
        this._logHandler.apply(this, a([this, c.DEBUG], e));
      };
      e.prototype.log = function () {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        if (this._userLogHandler) {
          this._userLogHandler.apply(this, a([this, c.VERBOSE], e));
        }
        this._logHandler.apply(this, a([this, c.VERBOSE], e));
      };
      e.prototype.info = function () {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        if (this._userLogHandler) {
          this._userLogHandler.apply(this, a([this, c.INFO], e));
        }
        this._logHandler.apply(this, a([this, c.INFO], e));
      };
      e.prototype.warn = function () {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        if (this._userLogHandler) {
          this._userLogHandler.apply(this, a([this, c.WARN], e));
        }
        this._logHandler.apply(this, a([this, c.WARN], e));
      };
      e.prototype.error = function () {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        if (this._userLogHandler) {
          this._userLogHandler.apply(this, a([this, c.ERROR], e));
        }
        this._logHandler.apply(this, a([this, c.ERROR], e));
      };
      return e;
    }();
    function b(e) {
      l.forEach(function (t) {
        t.setLogLevel(e);
      });
    }
    var m;
    (f = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()";
    f["bad-app-name"] = "Illegal App name: '{$appName}";
    f["duplicate-app"] = "Firebase App named '{$appName}' already exists";
    f["app-deleted"] = "Firebase App named '{$appName}' already deleted";
    f["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.";
    f["invalid-log-argument"] = "First argument to `onLog` must be null or a function.";
    var y = f;
    var w = new o.LL("app", "Firebase", y);
    var k = "@firebase/app";
    var I = "[DEFAULT]";
    (m = {})[k] = "fire-core";
    m["@firebase/analytics"] = "fire-analytics";
    m["@firebase/app-check"] = "fire-app-check";
    m["@firebase/auth"] = "fire-auth";
    m["@firebase/database"] = "fire-rtdb";
    m["@firebase/functions"] = "fire-fn";
    m["@firebase/installations"] = "fire-iid";
    m["@firebase/messaging"] = "fire-fcm";
    m["@firebase/performance"] = "fire-perf";
    m["@firebase/remote-config"] = "fire-rc";
    m["@firebase/storage"] = "fire-gcs";
    m["@firebase/firestore"] = "fire-fst";
    m["fire-js"] = "fire-js";
    m["firebase-wrapper"] = "fire-js-all";
    var _ = m;
    var S = new g("@firebase/app");
    var C = function () {
      function e(e, t, n) {
        var r = this;
        this.firebase_ = n;
        this.isDeleted_ = false;
        this.name_ = t.name;
        this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || false;
        this.options_ = (0, o.p$)(e);
        this.container = new s.H0(t.name);
        this._addComponent(new s.wA("app", function () {
          return r;
        }, "PUBLIC"));
        this.firebase_.INTERNAL.components.forEach(function (e) {
          return r._addComponent(e);
        });
      }
      Object.defineProperty(e.prototype, "automaticDataCollectionEnabled", {
        get: function () {
          this.checkDestroyed_();
          return this.automaticDataCollectionEnabled_;
        },
        set: function (e) {
          this.checkDestroyed_();
          this.automaticDataCollectionEnabled_ = e;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "name", {
        get: function () {
          this.checkDestroyed_();
          return this.name_;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "options", {
        get: function () {
          this.checkDestroyed_();
          return this.options_;
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.delete = function () {
        var e = this;
        return new Promise(function (t) {
          e.checkDestroyed_();
          t();
        }).then(function () {
          e.firebase_.INTERNAL.removeApp(e.name_);
          return Promise.all(e.container.getProviders().map(function (e) {
            return e.delete();
          }));
        }).then(function () {
          e.isDeleted_ = true;
        });
      };
      e.prototype._getService = function (e, t) {
        if (t === undefined) {
          t = I;
        }
        this.checkDestroyed_();
        var r = this.container.getProvider(e);
        if (!r.isInitialized() && r.getComponent()?.instantiationMode === "EXPLICIT") {
          r.initialize();
        }
        return r.getImmediate({
          identifier: t
        });
      };
      e.prototype._removeServiceInstance = function (e, t = I) {
        this.container.getProvider(e).clearInstance(t);
      };
      e.prototype._addComponent = function (e) {
        try {
          this.container.addComponent(e);
        } catch (t) {
          S.debug("Component " + e.name + " failed to register with FirebaseApp " + this.name, t);
        }
      };
      e.prototype._addOrOverwriteComponent = function (e) {
        this.container.addOrOverwriteComponent(e);
      };
      e.prototype.toJSON = function () {
        return {
          name: this.name,
          automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
          options: this.options
        };
      };
      e.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
          throw w.create("app-deleted", {
            appName: this.name_
          });
        }
      };
      return e;
    }();
    if ((!C.prototype.name || !C.prototype.options) && !C.prototype.delete) {
      console.log("dc");
    }
    var E = "8.7.0";
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function O(e) {
      var t = {};
      var n = new Map();
      var r = {
        __esModule: true,
        initializeApp: function (n, i = {}) {
          if (typeof i != "object" || i === null) {
            i = {
              name: i
            };
          }
          var s = i;
          if (s.name === undefined) {
            s.name = I;
          }
          var a = s.name;
          if (typeof a != "string" || !a) {
            throw w.create("bad-app-name", {
              appName: String(a)
            });
          }
          if ((0, o.r3)(t, a)) {
            throw w.create("duplicate-app", {
              appName: a
            });
          }
          var c = new e(n, s, r);
          t[a] = c;
          return c;
        },
        app: i,
        registerVersion: function (e, t, n) {
          var i = _[e] ?? e;
          if (n) {
            i += "-" + n;
          }
          var o = i.match(/\s|\//);
          var c = t.match(/\s|\//);
          if (o || c) {
            var u = ["Unable to register library \"" + i + "\" with version \"" + t + "\":"];
            if (o) {
              u.push("library name \"" + i + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (o && c) {
              u.push("and");
            }
            if (c) {
              u.push("version name \"" + t + "\" contains illegal characters (whitespace or \"/\")");
            }
            S.warn(u.join(" "));
            return;
          }
          a(new s.wA(i + "-version", function () {
            return {
              library: i,
              version: t
            };
          }, "VERSION"));
        },
        setLogLevel: b,
        onLog: function (e, t) {
          if (e !== null && typeof e != "function") {
            throw w.create("invalid-log-argument");
          }
          (function (e, t) {
            var n = function (n) {
              var r = null;
              if (t && t.level) {
                r = p[t.level];
              }
              n.userLogHandler = e === null ? null : function (t, n) {
                var i = [];
                for (var o = 2; o < arguments.length; o++) {
                  i[o - 2] = arguments[o];
                }
                var s = i.map(function (e) {
                  if (e == null) {
                    return null;
                  }
                  if (typeof e == "string") {
                    return e;
                  }
                  if (typeof e == "number" || typeof e == "boolean") {
                    return e.toString();
                  }
                  if (e instanceof Error) {
                    return e.message;
                  }
                  try {
                    return JSON.stringify(e);
                  } catch (e) {
                    return null;
                  }
                }).filter(function (e) {
                  return e;
                }).join(" ");
                if (n >= (r ?? t.logLevel)) {
                  e({
                    level: c[n].toLowerCase(),
                    message: s,
                    args: i,
                    type: t.name
                  });
                }
              };
            };
            for (var r = 0, i = l; r < i.length; r++) {
              n(i[r]);
            }
          })(e, t);
        },
        apps: null,
        SDK_VERSION: E,
        INTERNAL: {
          registerComponent: a,
          removeApp: function (e) {
            delete t[e];
          },
          components: n,
          useAsService: function (e, t) {
            if (t === "serverAuth") {
              return null;
            }
            return t;
          }
        }
      };
      function i(e) {
        e = e || I;
        if (!(0, o.r3)(t, e)) {
          throw w.create("no-app", {
            appName: e
          });
        }
        return t[e];
      }
      function a(s) {
        var a = s.name;
        if (n.has(a)) {
          S.debug("There were multiple attempts to register component " + a + ".");
          if (s.type === "PUBLIC") {
            return r[a];
          } else {
            return null;
          }
        }
        n.set(a, s);
        if (s.type === "PUBLIC") {
          function c(e = i()) {
            if (typeof e[a] != "function") {
              throw w.create("invalid-app-argument", {
                appName: a
              });
            }
            return e[a]();
          }
          if (s.serviceProps !== undefined) {
            (0, o.ZB)(c, s.serviceProps);
          }
          r[a] = c;
          e.prototype[a] = function () {
            var e = [];
            for (var t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }
            return this._getService.bind(this, a).apply(this, s.multipleInstances ? e : []);
          };
        }
        for (var u = 0, l = Object.keys(t); u < l.length; u++) {
          var f = l[u];
          t[f]._addComponent(s);
        }
        if (s.type === "PUBLIC") {
          return r[a];
        } else {
          return null;
        }
      }
      r.default = r;
      Object.defineProperty(r, "apps", {
        get: function () {
          return Object.keys(t).map(function (e) {
            return t[e];
          });
        }
      });
      i.App = e;
      return r;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var T = function e() {
      var t = O(C);
      t.INTERNAL = (0, i.pi)((0, i.pi)({}, t.INTERNAL), {
        createFirebaseNamespace: e,
        extendNamespace: function (e) {
          (0, o.ZB)(t, e);
        },
        createSubscribe: o.ne,
        ErrorFactory: o.LL,
        deepExtend: o.ZB
      });
      return t;
    }();
    var D = function () {
      function e(e) {
        this.container = e;
      }
      e.prototype.getPlatformInfoString = function () {
        return this.container.getProviders().map(function (e) {
          if (function (e) {
            var t = e.getComponent();
            return (t == null ? undefined : t.type) === "VERSION";
          }
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */(e)) {
            var t = e.getImmediate();
            return t.library + "/" + t.version;
          }
          return null;
        }).filter(function (e) {
          return e;
        }).join(" ");
      };
      return e;
    }();
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    if ((0, o.jU)() && self.firebase !== undefined) {
      S.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
      var N = self.firebase.SDK_VERSION;
      if (N && N.indexOf("LITE") >= 0) {
        S.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
      }
    }
    var A = T.initializeApp;
    T.initializeApp = function () {
      var e = [];
      for (var t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }
      if ((0, o.UG)()) {
        S.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
      }
      return A.apply(undefined, e);
    };
    var P;
    var L;
    var R = T;
    (P = R).INTERNAL.registerComponent(new s.wA("platform-logger", function (e) {
      return new D(e);
    }, "PRIVATE"));
    P.registerVersion(k, "0.6.28", L);
    P.registerVersion("fire-js", "");
    const M = R;
  },
  630909: function (e, t, n) {
    n.d(t, {
      H0: () => c,
      wA: () => o
    });
    var r = n(570655);
    var i = n(244589);
    var o = function () {
      function e(e, t, n) {
        this.name = e;
        this.instanceFactory = t;
        this.type = n;
        this.multipleInstances = false;
        this.serviceProps = {};
        this.instantiationMode = "LAZY";
        this.onInstanceCreated = null;
      }
      e.prototype.setInstantiationMode = function (e) {
        this.instantiationMode = e;
        return this;
      };
      e.prototype.setMultipleInstances = function (e) {
        this.multipleInstances = e;
        return this;
      };
      e.prototype.setServiceProps = function (e) {
        this.serviceProps = e;
        return this;
      };
      e.prototype.setInstanceCreatedCallback = function (e) {
        this.onInstanceCreated = e;
        return this;
      };
      return e;
    }();
    var s = "[DEFAULT]";
    var a = function () {
      function e(e, t) {
        this.name = e;
        this.container = t;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.onInitCallbacks = new Map();
      }
      e.prototype.get = function (e) {
        var t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
          var n = new i.BH();
          this.instancesDeferred.set(t, n);
          if (this.isInitialized(t) || this.shouldAutoInitialize()) {
            try {
              var r = this.getOrInitializeService({
                instanceIdentifier: t
              });
              if (r) {
                n.resolve(r);
              }
            } catch (e) {}
          }
        }
        return this.instancesDeferred.get(t).promise;
      };
      e.prototype.getImmediate = function (e) {
        var t;
        var n = this.normalizeInstanceIdentifier(e == null ? undefined : e.identifier);
        var r = (t = e == null ? undefined : e.optional) !== null && t !== undefined && t;
        if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
          if (r) {
            return null;
          }
          throw Error("Service " + this.name + " is not available");
        }
        try {
          return this.getOrInitializeService({
            instanceIdentifier: n
          });
        } catch (e) {
          if (r) {
            return null;
          }
          throw e;
        }
      };
      e.prototype.getComponent = function () {
        return this.component;
      };
      e.prototype.setComponent = function (e) {
        var t;
        var n;
        if (e.name !== this.name) {
          throw Error("Mismatching Component " + e.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
          throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = e;
        if (this.shouldAutoInitialize()) {
          if (function (e) {
            return e.instantiationMode === "EAGER";
          }
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */(e)) {
            try {
              this.getOrInitializeService({
                instanceIdentifier: s
              });
            } catch (e) {}
          }
          try {
            for (var i = (0, r.XA)(this.instancesDeferred.entries()), o = i.next(); !o.done; o = i.next()) {
              var a = (0, r.CR)(o.value, 2);
              var c = a[0];
              var u = a[1];
              var l = this.normalizeInstanceIdentifier(c);
              try {
                var f = this.getOrInitializeService({
                  instanceIdentifier: l
                });
                u.resolve(f);
              } catch (e) {}
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              if (o && !o.done && (n = i.return)) {
                n.call(i);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
        }
      };
      e.prototype.clearInstance = function (e = s) {
        this.instancesDeferred.delete(e);
        this.instances.delete(e);
      };
      e.prototype.delete = function () {
        return (0, r.mG)(this, undefined, undefined, function () {
          var e;
          return (0, r.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                e = Array.from(this.instances.values());
                return [4, Promise.all((0, r.ev)((0, r.ev)([], (0, r.CR)(e.filter(function (e) {
                  return "INTERNAL" in e;
                }).map(function (e) {
                  return e.INTERNAL.delete();
                }))), (0, r.CR)(e.filter(function (e) {
                  return "_delete" in e;
                }).map(function (e) {
                  return e._delete();
                }))))];
              case 1:
                t.sent();
                return [2];
            }
          });
        });
      };
      e.prototype.isComponentSet = function () {
        return this.component != null;
      };
      e.prototype.isInitialized = function (e = s) {
        return this.instances.has(e);
      };
      e.prototype.initialize = function (e) {
        var t;
        var n;
        if (e === undefined) {
          e = {};
        }
        var i = e.options;
        var o = i === undefined ? {} : i;
        var s = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(s)) {
          throw Error(this.name + "(" + s + ") has already been initialized");
        }
        if (!this.isComponentSet()) {
          throw Error("Component " + this.name + " has not been registered yet");
        }
        var a = this.getOrInitializeService({
          instanceIdentifier: s,
          options: o
        });
        try {
          for (var c = (0, r.XA)(this.instancesDeferred.entries()), u = c.next(); !u.done; u = c.next()) {
            var l = (0, r.CR)(u.value, 2);
            var f = l[0];
            var p = l[1];
            if (s === this.normalizeInstanceIdentifier(f)) {
              p.resolve(a);
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (u && !u.done && (n = c.return)) {
              n.call(c);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        return a;
      };
      e.prototype.onInit = function (e, t) {
        var r = this.normalizeInstanceIdentifier(t);
        var i = this.onInitCallbacks.get(r) ?? new Set();
        i.add(e);
        this.onInitCallbacks.set(r, i);
        var o = this.instances.get(r);
        if (o) {
          e(o, r);
        }
        return function () {
          i.delete(e);
        };
      };
      e.prototype.invokeOnInitCallbacks = function (e, t) {
        var n;
        var i;
        var o = this.onInitCallbacks.get(t);
        if (o) {
          try {
            for (var s = (0, r.XA)(o), a = s.next(); !a.done; a = s.next()) {
              var c = a.value;
              try {
                c(e, t);
              } catch (e) {}
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (a && !a.done && (i = s.return)) {
                i.call(s);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
        }
      };
      e.prototype.getOrInitializeService = function (e) {
        var t;
        var n = e.instanceIdentifier;
        var r = e.options;
        var i = r === undefined ? {} : r;
        var o = this.instances.get(n);
        if (!o && this.component && (o = this.component.instanceFactory(this.container, {
          instanceIdentifier: (t = n, t === s ? undefined : t),
          options: i
        }), this.instances.set(n, o), this.invokeOnInitCallbacks(o, n), this.component.onInstanceCreated)) {
          try {
            this.component.onInstanceCreated(this.container, n, o);
          } catch (e) {}
        }
        return o || null;
      };
      e.prototype.normalizeInstanceIdentifier = function (e = s) {
        if (this.component) {
          if (this.component.multipleInstances) {
            return e;
          } else {
            return s;
          }
        } else {
          return e;
        }
      };
      e.prototype.shouldAutoInitialize = function () {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT";
      };
      return e;
    }();
    var c = function () {
      function e(e) {
        this.name = e;
        this.providers = new Map();
      }
      e.prototype.addComponent = function (e) {
        var t = this.getProvider(e.name);
        if (t.isComponentSet()) {
          throw new Error("Component " + e.name + " has already been registered with " + this.name);
        }
        t.setComponent(e);
      };
      e.prototype.addOrOverwriteComponent = function (e) {
        if (this.getProvider(e.name).isComponentSet()) {
          this.providers.delete(e.name);
        }
        this.addComponent(e);
      };
      e.prototype.getProvider = function (e) {
        if (this.providers.has(e)) {
          return this.providers.get(e);
        }
        var t = new a(e, this);
        this.providers.set(e, t);
        return t;
      };
      e.prototype.getProviders = function () {
        return Array.from(this.providers.values());
      };
      return e;
    }();
  },
  370120: function (e, t, n) {
    var r;
    var i = n(487001);
    var o = n(630909);
    var s = n(570655);
    var a = n(244589);
    var c = n(198676);
    var u = "0.4.30";
    var l = 10000;
    var f = "w:" + u;
    var p = "FIS_v2";
    var h = "https://firebaseinstallations.googleapis.com/v1";
    var d = 3600000;
    (r = {})["missing-app-config-values"] = "Missing App configuration value: \"{$valueName}\"";
    r["not-registered"] = "Firebase Installation is not registered.";
    r["installation-not-found"] = "Firebase Installation not found.";
    r["request-failed"] = "{$requestName} request failed with error \"{$serverCode} {$serverStatus}: {$serverMessage}\"";
    r["app-offline"] = "Could not process request. Application offline.";
    r["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.";
    var v = r;
    var g = new a.LL("installations", "Installations", v);
    function b(e) {
      return e instanceof a.ZR && e.code.includes("request-failed");
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function m(e) {
      var t = e.projectId;
      return h + "/projects/" + t + "/installations";
    }
    function y(e) {
      return {
        token: e.token,
        requestStatus: 2,
        expiresIn: (t = e.expiresIn, Number(t.replace("s", "000"))),
        creationTime: Date.now()
      };
      var t;
    }
    function w(e, t) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var n;
        var r;
        return (0, s.Jh)(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, t.json()];
            case 1:
              n = i.sent();
              r = n.error;
              return [2, g.create("request-failed", {
                requestName: e,
                serverCode: r.code,
                serverMessage: r.message,
                serverStatus: r.status
              })];
          }
        });
      });
    }
    function k(e) {
      var t = e.apiKey;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": t
      });
    }
    function I(e, t) {
      var n = t.refreshToken;
      var r = k(e);
      r.append("Authorization", function (e) {
        return p + " " + e;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(n));
      return r;
    }
    function _(e) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var t;
        return (0, s.Jh)(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, e()];
            case 1:
              if ((t = n.sent()).status >= 500 && t.status < 600) {
                return [2, e()];
              } else {
                return [2, t];
              }
          }
        });
      });
    }
    function S(e, t) {
      var n = t.fid;
      return (0, s.mG)(this, undefined, undefined, function () {
        var t;
        var r;
        var i;
        var o;
        var a;
        var c;
        return (0, s.Jh)(this, function (s) {
          switch (s.label) {
            case 0:
              t = m(e);
              r = k(e);
              i = {
                fid: n,
                authVersion: p,
                appId: e.appId,
                sdkVersion: f
              };
              o = {
                method: "POST",
                headers: r,
                body: JSON.stringify(i)
              };
              return [4, _(function () {
                return fetch(t, o);
              })];
            case 1:
              if ((a = s.sent()).ok) {
                return [4, a.json()];
              } else {
                return [3, 3];
              }
            case 2:
              c = s.sent();
              return [2, {
                fid: c.fid || n,
                registrationStatus: 2,
                refreshToken: c.refreshToken,
                authToken: y(c.authToken)
              }];
            case 3:
              return [4, w("Create Installation", a)];
            case 4:
              throw s.sent();
          }
        });
      });
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function C(e) {
      return new Promise(function (t) {
        setTimeout(t, e);
      });
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var E = /^[cdef][\w-]{21}$/;
    var O = "";
    function T() {
      try {
        var e = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(e);
        e[0] = 112 + e[0] % 16;
        var t = function (e) {
          n = e;
          var t = btoa(String.fromCharCode.apply(String, (0, s.ev)([], (0, s.CR)(n)))).replace(/\+/g, "-").replace(/\//g, "_");
          var n;
          return t.substr(0, 22);
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */(e);
        if (E.test(t)) {
          return t;
        } else {
          return O;
        }
      } catch (e) {
        return O;
      }
    }
    function D(e) {
      return e.appName + "!" + e.appId;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var N = new Map();
    function A(e, t) {
      var n = D(e);
      P(n, t);
      (function (e, t) {
        var n = R();
        if (n) {
          n.postMessage({
            key: e,
            fid: t
          });
        }
        M();
      })(n, t);
    }
    function P(e, t) {
      var n;
      var r;
      var i = N.get(e);
      if (i) {
        try {
          for (var o = (0, s.XA)(i), a = o.next(); !a.done; a = o.next()) {
            (0, a.value)(t);
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (a && !a.done && (r = o.return)) {
              r.call(o);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
    }
    var L = null;
    function R() {
      if (!L && "BroadcastChannel" in self) {
        (L = new BroadcastChannel("[Firebase] FID Change")).onmessage = function (e) {
          P(e.data.key, e.data.fid);
        };
      }
      return L;
    }
    function M() {
      if (N.size === 0 && L) {
        L.close();
        L = null;
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var j;
    var G;
    var K = "firebase-installations-database";
    var J = 1;
    var F = "firebase-installations-store";
    var H = null;
    function x() {
      H ||= (0, c.openDb)(K, J, function (e) {
        if (e.oldVersion === 0) {
          e.createObjectStore(F);
        }
      });
      return H;
    }
    function z(e, t) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        var o;
        var a;
        return (0, s.Jh)(this, function (s) {
          switch (s.label) {
            case 0:
              n = D(e);
              return [4, x()];
            case 1:
              r = s.sent();
              i = r.transaction(F, "readwrite");
              return [4, (o = i.objectStore(F)).get(n)];
            case 2:
              a = s.sent();
              return [4, o.put(t, n)];
            case 3:
              s.sent();
              return [4, i.complete];
            case 4:
              s.sent();
              if (!a || a.fid !== t.fid) {
                A(e, t.fid);
              }
              return [2, t];
          }
        });
      });
    }
    function B(e) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var t;
        var n;
        var r;
        return (0, s.Jh)(this, function (i) {
          switch (i.label) {
            case 0:
              t = D(e);
              return [4, x()];
            case 1:
              n = i.sent();
              return [4, (r = n.transaction(F, "readwrite")).objectStore(F).delete(t)];
            case 2:
              i.sent();
              return [4, r.complete];
            case 3:
              i.sent();
              return [2];
          }
        });
      });
    }
    function U(e, t) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        var o;
        var a;
        var c;
        return (0, s.Jh)(this, function (s) {
          switch (s.label) {
            case 0:
              n = D(e);
              return [4, x()];
            case 1:
              r = s.sent();
              i = r.transaction(F, "readwrite");
              return [4, (o = i.objectStore(F)).get(n)];
            case 2:
              a = s.sent();
              if ((c = t(a)) !== undefined) {
                return [3, 4];
              } else {
                return [4, o.delete(n)];
              }
            case 3:
              s.sent();
              return [3, 6];
            case 4:
              return [4, o.put(c, n)];
            case 5:
              s.sent();
              s.label = 6;
            case 6:
              return [4, i.complete];
            case 7:
              s.sent();
              if (!!c && (!a || a.fid !== c.fid)) {
                A(e, c.fid);
              }
              return [2, c];
          }
        });
      });
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function V(e) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var t;
        var n;
        var r;
        return (0, s.Jh)(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, U(e, function (n) {
                var r = function (e) {
                  var t = e || {
                    fid: T(),
                    registrationStatus: 0
                  };
                  return $(t);
                }(n);
                var i = function (e, t) {
                  if (t.registrationStatus === 0) {
                    if (!navigator.onLine) {
                      return {
                        installationEntry: t,
                        registrationPromise: Promise.reject(g.create("app-offline"))
                      };
                    }
                    var n = {
                      fid: t.fid,
                      registrationStatus: 1,
                      registrationTime: Date.now()
                    };
                    var r = function (e, t) {
                      return (0, s.mG)(this, undefined, undefined, function () {
                        var n;
                        var r;
                        return (0, s.Jh)(this, function (i) {
                          switch (i.label) {
                            case 0:
                              i.trys.push([0, 2,, 7]);
                              return [4, S(e, t)];
                            case 1:
                              n = i.sent();
                              return [2, z(e, n)];
                            case 2:
                              if (b(r = i.sent()) && r.customData.serverCode === 409) {
                                return [4, B(e)];
                              } else {
                                return [3, 4];
                              }
                            case 3:
                              i.sent();
                              return [3, 6];
                            case 4:
                              return [4, z(e, {
                                fid: t.fid,
                                registrationStatus: 0
                              })];
                            case 5:
                              i.sent();
                              i.label = 6;
                            case 6:
                              throw r;
                            case 7:
                              return [2];
                          }
                        });
                      });
                    }(e, n);
                    return {
                      installationEntry: n,
                      registrationPromise: r
                    };
                  }
                  if (t.registrationStatus === 1) {
                    return {
                      installationEntry: t,
                      registrationPromise: W(e)
                    };
                  } else {
                    return {
                      installationEntry: t
                    };
                  }
                }(e, r);
                t = i.registrationPromise;
                return i.installationEntry;
              })];
            case 1:
              if ((n = i.sent()).fid !== O) {
                return [3, 3];
              } else {
                r = {};
                return [4, t];
              }
            case 2:
              return [2, (r.installationEntry = i.sent(), r)];
            case 3:
              return [2, {
                installationEntry: n,
                registrationPromise: t
              }];
          }
        });
      });
    }
    function W(e) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var t;
        var n;
        var r;
        var i;
        return (0, s.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, q(e)];
            case 1:
              t = o.sent();
              o.label = 2;
            case 2:
              if (t.registrationStatus !== 1) {
                return [3, 5];
              } else {
                return [4, C(100)];
              }
            case 3:
              o.sent();
              return [4, q(e)];
            case 4:
              t = o.sent();
              return [3, 2];
            case 5:
              if (t.registrationStatus !== 0) {
                return [3, 7];
              } else {
                return [4, V(e)];
              }
            case 6:
              n = o.sent();
              r = n.installationEntry;
              if (i = n.registrationPromise) {
                return [2, i];
              } else {
                return [2, r];
              }
            case 7:
              return [2, t];
          }
        });
      });
    }
    function q(e) {
      return U(e, function (e) {
        if (!e) {
          throw g.create("installation-not-found");
        }
        return $(e);
      });
    }
    function $(e) {
      if ((t = e).registrationStatus === 1 && t.registrationTime + l < Date.now()) {
        return {
          fid: e.fid,
          registrationStatus: 0
        };
      } else {
        return e;
      }
      var t;
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
    }
    function Z(e, t) {
      var n = e.appConfig;
      var r = e.platformLoggerProvider;
      return (0, s.mG)(this, undefined, undefined, function () {
        var e;
        var i;
        var o;
        var a;
        var c;
        var u;
        var l;
        return (0, s.Jh)(this, function (s) {
          switch (s.label) {
            case 0:
              e = function (e, t) {
                var n = t.fid;
                return m(e) + "/" + n + "/authTokens:generate";
              }
              /**
               * @license
               * Copyright 2019 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */(n, t);
              i = I(n, t);
              if (o = r.getImmediate({
                optional: true
              })) {
                i.append("x-firebase-client", o.getPlatformInfoString());
              }
              a = {
                installation: {
                  sdkVersion: f
                }
              };
              c = {
                method: "POST",
                headers: i,
                body: JSON.stringify(a)
              };
              return [4, _(function () {
                return fetch(e, c);
              })];
            case 1:
              if ((u = s.sent()).ok) {
                return [4, u.json()];
              } else {
                return [3, 3];
              }
            case 2:
              l = s.sent();
              return [2, y(l)];
            case 3:
              return [4, w("Generate Auth Token", u)];
            case 4:
              throw s.sent();
          }
        });
      });
    }
    function X(e, t = false) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        return (0, s.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, U(e.appConfig, function (r) {
                if (!Q(r)) {
                  throw g.create("not-registered");
                }
                var i = r.authToken;
                if (!t && function (e) {
                  return e.requestStatus === 2 && !function (e) {
                    var t = Date.now();
                    return t < e.creationTime || e.creationTime + e.expiresIn < t + d;
                  }(e);
                }(i)) {
                  return r;
                }
                if (i.requestStatus === 1) {
                  n = function (e, t) {
                    return (0, s.mG)(this, undefined, undefined, function () {
                      var n;
                      var r;
                      return (0, s.Jh)(this, function (i) {
                        switch (i.label) {
                          case 0:
                            return [4, Y(e.appConfig)];
                          case 1:
                            n = i.sent();
                            i.label = 2;
                          case 2:
                            if (n.authToken.requestStatus !== 1) {
                              return [3, 5];
                            } else {
                              return [4, C(100)];
                            }
                          case 3:
                            i.sent();
                            return [4, Y(e.appConfig)];
                          case 4:
                            n = i.sent();
                            return [3, 2];
                          case 5:
                            if ((r = n.authToken).requestStatus === 0) {
                              return [2, X(e, t)];
                            } else {
                              return [2, r];
                            }
                        }
                      });
                    });
                  }(e, t);
                  return r;
                }
                if (!navigator.onLine) {
                  throw g.create("app-offline");
                }
                var o = function (e) {
                  var t = {
                    requestStatus: 1,
                    requestTime: Date.now()
                  };
                  return (0, s.pi)((0, s.pi)({}, e), {
                    authToken: t
                  });
                }(r);
                n = function (e, t) {
                  return (0, s.mG)(this, undefined, undefined, function () {
                    var n;
                    var r;
                    var i;
                    return (0, s.Jh)(this, function (o) {
                      switch (o.label) {
                        case 0:
                          o.trys.push([0, 3,, 8]);
                          return [4, Z(e, t)];
                        case 1:
                          n = o.sent();
                          i = (0, s.pi)((0, s.pi)({}, t), {
                            authToken: n
                          });
                          return [4, z(e.appConfig, i)];
                        case 2:
                          o.sent();
                          return [2, n];
                        case 3:
                          if (!b(r = o.sent()) || r.customData.serverCode !== 401 && r.customData.serverCode !== 404) {
                            return [3, 5];
                          } else {
                            return [4, B(e.appConfig)];
                          }
                        case 4:
                          o.sent();
                          return [3, 7];
                        case 5:
                          i = (0, s.pi)((0, s.pi)({}, t), {
                            authToken: {
                              requestStatus: 0
                            }
                          });
                          return [4, z(e.appConfig, i)];
                        case 6:
                          o.sent();
                          o.label = 7;
                        case 7:
                          throw r;
                        case 8:
                          return [2];
                      }
                    });
                  });
                }(e, o);
                return o;
              })];
            case 1:
              r = o.sent();
              if (n) {
                return [4, n];
              } else {
                return [3, 3];
              }
            case 2:
              i = o.sent();
              return [3, 4];
            case 3:
              i = r.authToken;
              o.label = 4;
            case 4:
              return [2, i];
          }
        });
      });
    }
    function Y(e) {
      return U(e, function (e) {
        if (!Q(e)) {
          throw g.create("not-registered");
        }
        var t;
        var n = e.authToken;
        if ((t = n).requestStatus === 1 && t.requestTime + l < Date.now()) {
          return (0, s.pi)((0, s.pi)({}, e), {
            authToken: {
              requestStatus: 0
            }
          });
        } else {
          return e;
        }
      });
    }
    function Q(e) {
      return e !== undefined && e.registrationStatus === 2;
    }
    function ee(e) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var t;
        return (0, s.Jh)(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, V(e)];
            case 1:
              if (t = n.sent().registrationPromise) {
                return [4, t];
              } else {
                return [3, 3];
              }
            case 2:
              n.sent();
              n.label = 3;
            case 3:
              return [2];
          }
        });
      });
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function te(e, t) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        var o;
        return (0, s.Jh)(this, function (s) {
          switch (s.label) {
            case 0:
              n = function (e, t) {
                var n = t.fid;
                return m(e) + "/" + n;
              }
              /**
               * @license
               * Copyright 2019 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */(e, t);
              r = I(e, t);
              i = {
                method: "DELETE",
                headers: r
              };
              return [4, _(function () {
                return fetch(n, i);
              })];
            case 1:
              if ((o = s.sent()).ok) {
                return [3, 3];
              } else {
                return [4, w("Delete Installation", o)];
              }
            case 2:
              throw s.sent();
            case 3:
              return [2];
          }
        });
      });
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function ne(e, t) {
      var n = e.appConfig;
      (function (e, t) {
        R();
        var n = D(e);
        var r = N.get(n);
        if (!r) {
          r = new Set();
          N.set(n, r);
        }
        r.add(t);
      })(n, t);
      return function () {
        (function (e, t) {
          var n = D(e);
          var r = N.get(n);
          if (r) {
            r.delete(t);
            if (r.size === 0) {
              N.delete(n);
            }
            M();
          }
        })(n, t);
      };
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function re(e) {
      return g.create("missing-app-config-values", {
        valueName: e
      });
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    (j = i.Z).INTERNAL.registerComponent(new o.wA("installations", function (e) {
      var t = e.getProvider("app").getImmediate();
      var n = function (e) {
        var t;
        var n;
        if (!e || !e.options) {
          throw re("App Configuration");
        }
        if (!e.name) {
          throw re("App Name");
        }
        try {
          for (var r = (0, s.XA)(["projectId", "apiKey", "appId"]), i = r.next(); !i.done; i = r.next()) {
            var o = i.value;
            if (!e.options[o]) {
              throw re(o);
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (i && !i.done && (n = r.return)) {
              n.call(r);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        return {
          appName: e.name,
          projectId: e.options.projectId,
          apiKey: e.options.apiKey,
          appId: e.options.appId
        };
      }(t);
      var r = {
        appConfig: n,
        platformLoggerProvider: e.getProvider("platform-logger")
      };
      var i = {
        app: t,
        getId: function () {
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */
          return function (e) {
            return (0, s.mG)(this, undefined, undefined, function () {
              var t;
              var n;
              var r;
              return (0, s.Jh)(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, V(e.appConfig)];
                  case 1:
                    t = i.sent();
                    n = t.installationEntry;
                    if (r = t.registrationPromise) {
                      r.catch(console.error);
                    } else {
                      X(e).catch(console.error);
                    }
                    return [2, n.fid];
                }
              });
            });
          }
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */(r);
        },
        getToken: function (e) {
          return function (e, t = false) {
            return (0, s.mG)(this, undefined, undefined, function () {
              return (0, s.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, ee(e.appConfig)];
                  case 1:
                    n.sent();
                    return [4, X(e, t)];
                  case 2:
                    return [2, n.sent().token];
                }
              });
            });
          }(r, e);
        },
        delete: function () {
          return function (e) {
            return (0, s.mG)(this, undefined, undefined, function () {
              var t;
              var n;
              return (0, s.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, U(t = e.appConfig, function (e) {
                      if (!e || e.registrationStatus !== 0) {
                        return e;
                      }
                    })];
                  case 1:
                    if (!(n = r.sent())) {
                      return [3, 6];
                    }
                    if (n.registrationStatus !== 1) {
                      return [3, 2];
                    }
                    throw g.create("delete-pending-registration");
                  case 2:
                    if (n.registrationStatus !== 2) {
                      return [3, 6];
                    }
                    if (navigator.onLine) {
                      return [3, 3];
                    }
                    throw g.create("app-offline");
                  case 3:
                    return [4, te(t, n)];
                  case 4:
                    r.sent();
                    return [4, B(t)];
                  case 5:
                    r.sent();
                    r.label = 6;
                  case 6:
                    return [2];
                }
              });
            });
          }(r);
        },
        onIdChange: function (e) {
          return ne(r, e);
        }
      };
      return i;
    }, "PUBLIC"));
    j.registerVersion("@firebase/installations", u);
    var ie;
    var oe;
    (G = {})["missing-app-config-values"] = "Missing App configuration value: \"{$valueName}\"";
    G["only-available-in-window"] = "This method is available in a Window context.";
    G["only-available-in-sw"] = "This method is available in a service worker context.";
    G["permission-default"] = "The notification permission was not granted and dismissed instead.";
    G["permission-blocked"] = "The notification permission was not granted and blocked instead.";
    G["unsupported-browser"] = "This browser doesn't support the API's required to use the firebase SDK.";
    G["failed-service-worker-registration"] = "We are unable to register the default service worker. {$browserErrorMessage}";
    G["token-subscribe-failed"] = "A problem occurred while subscribing the user to FCM: {$errorInfo}";
    G["token-subscribe-no-token"] = "FCM returned no token when subscribing the user to push.";
    G["token-unsubscribe-failed"] = "A problem occurred while unsubscribing the user from FCM: {$errorInfo}";
    G["token-update-failed"] = "A problem occurred while updating the user from FCM: {$errorInfo}";
    G["token-update-no-token"] = "FCM returned no token when updating the user to push.";
    G["use-sw-after-get-token"] = "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.";
    G["invalid-sw-registration"] = "The input to useServiceWorker() must be a ServiceWorkerRegistration.";
    G["invalid-bg-handler"] = "The input to setBackgroundMessageHandler() must be a function.";
    G["invalid-vapid-key"] = "The public VAPID key must be a string.";
    G["use-vapid-key-after-get-token"] = "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.";
    var se = G;
    var ae = new a.LL("messaging", "Messaging", se);
    var ce = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";
    var ue = "https://fcmregistrations.googleapis.com/v1";
    var le = "FCM_MSG";
    var fe = "google.c.a.c_id";
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function pe(e) {
      var t = new Uint8Array(e);
      return btoa(String.fromCharCode.apply(String, (0, s.ev)([], (0, s.CR)(t)))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function he(e) {
      var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/");
      for (var n = atob(t), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) {
        r[i] = n.charCodeAt(i);
      }
      return r;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    (oe = ie ||= {}).PUSH_RECEIVED = "push-received";
    oe.NOTIFICATION_CLICKED = "notification-clicked";
    var de = "fcm_token_details_db";
    var ve = 5;
    var ge = "fcm_token_object_Store";
    function be(e) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var t;
        var n;
        var r;
        var i = this;
        return (0, s.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              if ("databases" in indexedDB) {
                return [4, indexedDB.databases()];
              } else {
                return [3, 2];
              }
            case 1:
              t = o.sent();
              n = t.map(function (e) {
                return e.name;
              });
              if (!n.includes(de)) {
                return [2, null];
              }
              o.label = 2;
            case 2:
              r = null;
              return [4, (0, c.openDb)(de, ve, function (t) {
                return (0, s.mG)(i, undefined, undefined, function () {
                  var n;
                  var i;
                  var o;
                  return (0, s.Jh)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (t.oldVersion < 2) {
                          return [2];
                        } else if (t.objectStoreNames.contains(ge)) {
                          return [4, (n = t.transaction.objectStore(ge)).index("fcmSenderId").get(e)];
                        } else {
                          return [2];
                        }
                      case 1:
                        i = s.sent();
                        return [4, n.clear()];
                      case 2:
                        s.sent();
                        if (!i) {
                          return [2];
                        }
                        if (t.oldVersion === 2) {
                          if (!(o = i).auth || !o.p256dh || !o.endpoint) {
                            return [2];
                          }
                          r = {
                            token: o.fcmToken,
                            createTime: o.createTime ?? Date.now(),
                            subscriptionOptions: {
                              auth: o.auth,
                              p256dh: o.p256dh,
                              endpoint: o.endpoint,
                              swScope: o.swScope,
                              vapidKey: typeof o.vapidKey == "string" ? o.vapidKey : pe(o.vapidKey)
                            }
                          };
                        } else if (t.oldVersion === 3 || t.oldVersion === 4) {
                          r = {
                            token: (o = i).fcmToken,
                            createTime: o.createTime,
                            subscriptionOptions: {
                              auth: pe(o.auth),
                              p256dh: pe(o.p256dh),
                              endpoint: o.endpoint,
                              swScope: o.swScope,
                              vapidKey: pe(o.vapidKey)
                            }
                          };
                        }
                        return [2];
                    }
                  });
                });
              })];
            case 3:
              o.sent().close();
              return [4, (0, c.deleteDb)(de)];
            case 4:
              o.sent();
              return [4, (0, c.deleteDb)("fcm_vapid_details_db")];
            case 5:
              o.sent();
              return [4, (0, c.deleteDb)("undefined")];
            case 6:
              o.sent();
              return [2, me(r) ? r : null];
          }
        });
      });
    }
    function me(e) {
      if (!e || !e.subscriptionOptions) {
        return false;
      }
      var t = e.subscriptionOptions;
      return typeof e.createTime == "number" && e.createTime > 0 && typeof e.token == "string" && e.token.length > 0 && typeof t.auth == "string" && t.auth.length > 0 && typeof t.p256dh == "string" && t.p256dh.length > 0 && typeof t.endpoint == "string" && t.endpoint.length > 0 && typeof t.swScope == "string" && t.swScope.length > 0 && typeof t.vapidKey == "string" && t.vapidKey.length > 0;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var ye = "firebase-messaging-database";
    var we = 1;
    var ke = "firebase-messaging-store";
    var Ie = null;
    function _e() {
      Ie ||= (0, c.openDb)(ye, we, function (e) {
        if (e.oldVersion === 0) {
          e.createObjectStore(ke);
        }
      });
      return Ie;
    }
    function Se(e) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var t;
        var n;
        var r;
        return (0, s.Jh)(this, function (i) {
          switch (i.label) {
            case 0:
              t = Oe(e);
              return [4, _e()];
            case 1:
              return [4, i.sent().transaction(ke).objectStore(ke).get(t)];
            case 2:
              if (n = i.sent()) {
                return [2, n];
              } else {
                return [3, 3];
              }
            case 3:
              return [4, be(e.appConfig.senderId)];
            case 4:
              if (r = i.sent()) {
                return [4, Ce(e, r)];
              } else {
                return [3, 6];
              }
            case 5:
              i.sent();
              return [2, r];
            case 6:
              return [2];
          }
        });
      });
    }
    function Ce(e, t) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        return (0, s.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              n = Oe(e);
              return [4, _e()];
            case 1:
              r = o.sent();
              return [4, (i = r.transaction(ke, "readwrite")).objectStore(ke).put(t, n)];
            case 2:
              o.sent();
              return [4, i.complete];
            case 3:
              o.sent();
              return [2, t];
          }
        });
      });
    }
    function Ee(e) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var t;
        var n;
        var r;
        return (0, s.Jh)(this, function (i) {
          switch (i.label) {
            case 0:
              t = Oe(e);
              return [4, _e()];
            case 1:
              n = i.sent();
              return [4, (r = n.transaction(ke, "readwrite")).objectStore(ke).delete(t)];
            case 2:
              i.sent();
              return [4, r.complete];
            case 3:
              i.sent();
              return [2];
          }
        });
      });
    }
    function Oe(e) {
      return e.appConfig.appId;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Te(e, t) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        var o;
        var a;
        var c;
        return (0, s.Jh)(this, function (s) {
          switch (s.label) {
            case 0:
              return [4, Pe(e)];
            case 1:
              n = s.sent();
              r = Le(t);
              i = {
                method: "POST",
                headers: n,
                body: JSON.stringify(r)
              };
              s.label = 2;
            case 2:
              s.trys.push([2, 5,, 6]);
              return [4, fetch(Ae(e.appConfig), i)];
            case 3:
              return [4, s.sent().json()];
            case 4:
              o = s.sent();
              return [3, 6];
            case 5:
              a = s.sent();
              throw ae.create("token-subscribe-failed", {
                errorInfo: a
              });
            case 6:
              if (o.error) {
                c = o.error.message;
                throw ae.create("token-subscribe-failed", {
                  errorInfo: c
                });
              }
              if (!o.token) {
                throw ae.create("token-subscribe-no-token");
              }
              return [2, o.token];
          }
        });
      });
    }
    function De(e, t) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        var o;
        var a;
        var c;
        return (0, s.Jh)(this, function (s) {
          switch (s.label) {
            case 0:
              return [4, Pe(e)];
            case 1:
              n = s.sent();
              r = Le(t.subscriptionOptions);
              i = {
                method: "PATCH",
                headers: n,
                body: JSON.stringify(r)
              };
              s.label = 2;
            case 2:
              s.trys.push([2, 5,, 6]);
              return [4, fetch(Ae(e.appConfig) + "/" + t.token, i)];
            case 3:
              return [4, s.sent().json()];
            case 4:
              o = s.sent();
              return [3, 6];
            case 5:
              a = s.sent();
              throw ae.create("token-update-failed", {
                errorInfo: a
              });
            case 6:
              if (o.error) {
                c = o.error.message;
                throw ae.create("token-update-failed", {
                  errorInfo: c
                });
              }
              if (!o.token) {
                throw ae.create("token-update-no-token");
              }
              return [2, o.token];
          }
        });
      });
    }
    function Ne(e, t) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        var o;
        var a;
        return (0, s.Jh)(this, function (s) {
          switch (s.label) {
            case 0:
              return [4, Pe(e)];
            case 1:
              n = s.sent();
              r = {
                method: "DELETE",
                headers: n
              };
              s.label = 2;
            case 2:
              s.trys.push([2, 5,, 6]);
              return [4, fetch(Ae(e.appConfig) + "/" + t, r)];
            case 3:
              return [4, s.sent().json()];
            case 4:
              if ((i = s.sent()).error) {
                o = i.error.message;
                throw ae.create("token-unsubscribe-failed", {
                  errorInfo: o
                });
              }
              return [3, 6];
            case 5:
              a = s.sent();
              throw ae.create("token-unsubscribe-failed", {
                errorInfo: a
              });
            case 6:
              return [2];
          }
        });
      });
    }
    function Ae(e) {
      var t = e.projectId;
      return ue + "/projects/" + t + "/registrations";
    }
    function Pe(e) {
      var t = e.appConfig;
      var n = e.installations;
      return (0, s.mG)(this, undefined, undefined, function () {
        var e;
        return (0, s.Jh)(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, n.getToken()];
            case 1:
              e = r.sent();
              return [2, new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
                "x-goog-api-key": t.apiKey,
                "x-goog-firebase-installations-auth": "FIS " + e
              })];
          }
        });
      });
    }
    function Le(e) {
      var t = e.p256dh;
      var n = e.auth;
      var r = e.endpoint;
      var i = e.vapidKey;
      var o = {
        web: {
          endpoint: r,
          auth: n,
          p256dh: t
        }
      };
      if (i !== ce) {
        o.web.applicationPubKey = i;
      }
      return o;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Re(e, t, n) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var r;
        var i;
        var o;
        var a;
        return (0, s.Jh)(this, function (s) {
          switch (s.label) {
            case 0:
              if (Notification.permission !== "granted") {
                throw ae.create("permission-blocked");
              }
              return [4, Ke(t, n)];
            case 1:
              r = s.sent();
              return [4, Se(e)];
            case 2:
              i = s.sent();
              o = {
                vapidKey: n,
                swScope: t.scope,
                endpoint: r.endpoint,
                auth: pe(r.getKey("auth")),
                p256dh: pe(r.getKey("p256dh"))
              };
              if (i) {
                return [3, 3];
              } else {
                return [2, Ge(e, o)];
              }
            case 3:
              c = i.subscriptionOptions;
              l = (u = o).vapidKey === c.vapidKey;
              f = u.endpoint === c.endpoint;
              p = u.auth === c.auth;
              h = u.p256dh === c.p256dh;
              if (l && f && p && h) {
                return [3, 8];
              }
              s.label = 4;
            case 4:
              s.trys.push([4, 6,, 7]);
              return [4, Ne(e, i.token)];
            case 5:
              s.sent();
              return [3, 7];
            case 6:
              a = s.sent();
              console.warn(a);
              return [3, 7];
            case 7:
              return [2, Ge(e, o)];
            case 8:
              if (Date.now() >= i.createTime + 604800000) {
                return [2, je({
                  token: i.token,
                  createTime: Date.now(),
                  subscriptionOptions: o
                }, e, t)];
              } else {
                return [2, i.token];
              }
            case 9:
              return [2];
          }
          var c;
          var u;
          var l;
          var f;
          var p;
          var h;
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */
        });
      });
    }
    function Me(e, t) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var n;
        var r;
        return (0, s.Jh)(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, Se(e)];
            case 1:
              if (n = i.sent()) {
                return [4, Ne(e, n.token)];
              } else {
                return [3, 4];
              }
            case 2:
              i.sent();
              return [4, Ee(e)];
            case 3:
              i.sent();
              i.label = 4;
            case 4:
              return [4, t.pushManager.getSubscription()];
            case 5:
              if (r = i.sent()) {
                return [2, r.unsubscribe()];
              } else {
                return [2, true];
              }
          }
        });
      });
    }
    function je(e, t, n) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var r;
        var i;
        var o;
        return (0, s.Jh)(this, function (a) {
          switch (a.label) {
            case 0:
              a.trys.push([0, 3,, 5]);
              return [4, De(t, e)];
            case 1:
              r = a.sent();
              i = (0, s.pi)((0, s.pi)({}, e), {
                token: r,
                createTime: Date.now()
              });
              return [4, Ce(t, i)];
            case 2:
              a.sent();
              return [2, r];
            case 3:
              o = a.sent();
              return [4, Me(t, n)];
            case 4:
              a.sent();
              throw o;
            case 5:
              return [2];
          }
        });
      });
    }
    function Ge(e, t) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var n;
        var r;
        return (0, s.Jh)(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, Te(e, t)];
            case 1:
              n = i.sent();
              r = {
                token: n,
                createTime: Date.now(),
                subscriptionOptions: t
              };
              return [4, Ce(e, r)];
            case 2:
              i.sent();
              return [2, r.token];
          }
        });
      });
    }
    function Ke(e, t) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var n;
        return (0, s.Jh)(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, e.pushManager.getSubscription()];
            case 1:
              if (n = r.sent()) {
                return [2, n];
              } else {
                return [2, e.pushManager.subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: he(t)
                })];
              }
          }
        });
      });
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Je(e) {
      return typeof e == "object" && !!e && fe in e;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Fe(e) {
      return new Promise(function (t) {
        setTimeout(t, e);
      });
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var He = function () {
      function e(e) {
        var t = this;
        this.firebaseDependencies = e;
        this.isOnBackgroundMessageUsed = null;
        this.vapidKey = null;
        this.bgMessageHandler = null;
        self.addEventListener("push", function (e) {
          e.waitUntil(t.onPush(e));
        });
        self.addEventListener("pushsubscriptionchange", function (e) {
          e.waitUntil(t.onSubChange(e));
        });
        self.addEventListener("notificationclick", function (e) {
          e.waitUntil(t.onNotificationClick(e));
        });
      }
      Object.defineProperty(e.prototype, "app", {
        get: function () {
          return this.firebaseDependencies.app;
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.setBackgroundMessageHandler = function (e) {
        this.isOnBackgroundMessageUsed = false;
        if (!e || typeof e != "function") {
          throw ae.create("invalid-bg-handler");
        }
        this.bgMessageHandler = e;
      };
      e.prototype.onBackgroundMessage = function (e) {
        var t = this;
        this.isOnBackgroundMessageUsed = true;
        this.bgMessageHandler = e;
        return function () {
          t.bgMessageHandler = null;
        };
      };
      e.prototype.getToken = function () {
        return (0, s.mG)(this, undefined, undefined, function () {
          var n;
          return (0, s.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                if (this.vapidKey) {
                  return [3, 2];
                } else {
                  return [4, Se(this.firebaseDependencies)];
                }
              case 1:
                n = r.sent();
                this.vapidKey = (n == null ? undefined : n.subscriptionOptions)?.vapidKey ?? ce;
                r.label = 2;
              case 2:
                return [2, Re(this.firebaseDependencies, self.registration, this.vapidKey)];
            }
          });
        });
      };
      e.prototype.deleteToken = function () {
        return Me(this.firebaseDependencies, self.registration);
      };
      e.prototype.requestPermission = function () {
        throw ae.create("only-available-in-window");
      };
      e.prototype.usePublicVapidKey = function (e) {
        if (this.vapidKey !== null) {
          throw ae.create("use-vapid-key-after-get-token");
        }
        if (typeof e != "string" || e.length === 0) {
          throw ae.create("invalid-vapid-key");
        }
        this.vapidKey = e;
      };
      e.prototype.useServiceWorker = function () {
        throw ae.create("only-available-in-window");
      };
      e.prototype.onMessage = function () {
        throw ae.create("only-available-in-window");
      };
      e.prototype.onTokenRefresh = function () {
        throw ae.create("only-available-in-window");
      };
      e.prototype.onPush = function (e) {
        return (0, s.mG)(this, undefined, undefined, function () {
          var t;
          var n;
          var r;
          var i;
          return (0, s.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                t = function (e) {
                  var t = e.data;
                  if (!t) {
                    return null;
                  }
                  try {
                    return t.json();
                  } catch (e) {
                    return null;
                  }
                }(e);
                if (t) {
                  return [4, Ue()];
                } else {
                  console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push.");
                  return [2];
                }
              case 1:
                if (function (e) {
                  return e.some(function (e) {
                    return e.visibilityState === "visible" && !e.url.startsWith("chrome-extension://");
                  });
                }(n = o.sent())) {
                  return [2, Be(n, t)];
                } else {
                  r = false;
                  if (t.notification) {
                    return [4, Ve(xe(t))];
                  } else {
                    return [3, 3];
                  }
                }
              case 2:
                o.sent();
                r = true;
                o.label = 3;
              case 3:
                if (r === true && this.isOnBackgroundMessageUsed === false) {
                  return [2];
                } else {
                  if (this.bgMessageHandler) {
                    i = function (e) {
                      var t = {
                        from: e.from,
                        collapseKey: e.collapse_key
                      };
                      (function (e, t) {
                        if (t.notification) {
                          e.notification = {};
                          var n = t.notification.title;
                          if (n) {
                            e.notification.title = n;
                          }
                          var r = t.notification.body;
                          if (r) {
                            e.notification.body = r;
                          }
                          var i = t.notification.image;
                          if (i) {
                            e.notification.image = i;
                          }
                        }
                      })(t, e);
                      (function (e, t) {
                        if (t.data) {
                          e.data = t.data;
                        }
                      })(t, e);
                      (function (e, t) {
                        if (t.fcmOptions) {
                          e.fcmOptions = {};
                          var n = t.fcmOptions.link;
                          if (n) {
                            e.fcmOptions.link = n;
                          }
                          var r = t.fcmOptions.analytics_label;
                          if (r) {
                            e.fcmOptions.analyticsLabel = r;
                          }
                        }
                      })(t, e);
                      return t;
                    }(t);
                    if (typeof this.bgMessageHandler == "function") {
                      this.bgMessageHandler(i);
                    } else {
                      this.bgMessageHandler.next(i);
                    }
                  }
                  return [4, Fe(1000)];
                }
              case 4:
                o.sent();
                return [2];
            }
          });
        });
      };
      e.prototype.onSubChange = function (e) {
        return (0, s.mG)(this, undefined, undefined, function () {
          var r;
          return (0, s.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                if (e.newSubscription) {
                  return [3, 2];
                } else {
                  return [4, Me(this.firebaseDependencies, self.registration)];
                }
              case 1:
              case 5:
                i.sent();
                return [2];
              case 2:
                return [4, Se(this.firebaseDependencies)];
              case 3:
                r = i.sent();
                return [4, Me(this.firebaseDependencies, self.registration)];
              case 4:
                i.sent();
                return [4, Re(this.firebaseDependencies, self.registration, (r == null ? undefined : r.subscriptionOptions)?.vapidKey ?? ce)];
            }
          });
        });
      };
      e.prototype.onNotificationClick = function (e) {
        return (0, s.mG)(this, undefined, undefined, function () {
          var r;
          var i;
          var o;
          var a;
          var c;
          return (0, s.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                if (r = e.notification?.data?.[le]) {
                  if (e.action) {
                    return [2];
                  } else {
                    e.stopImmediatePropagation();
                    e.notification.close();
                    i = function (e) {
                      var i = e.fcmOptions?.link ?? e.notification?.click_action;
                      if (i) {
                        return i;
                      }
                      if (Je(e.data)) {
                        return self.location.origin;
                      } else {
                        return null;
                      }
                    }
                    /**
                     * @license
                     * Copyright 2017 Google LLC
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License");
                     * you may not use this file except in compliance with the License.
                     * You may obtain a copy of the License at
                     *
                     *   http://www.apache.org/licenses/LICENSE-2.0
                     *
                     * Unless required by applicable law or agreed to in writing, software
                     * distributed under the License is distributed on an "AS IS" BASIS,
                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     * See the License for the specific language governing permissions and
                     * limitations under the License.
                     */(r);
                    if (i) {
                      o = new URL(i, self.location.href);
                      a = new URL(self.location.origin);
                      if (o.host !== a.host) {
                        return [2];
                      } else {
                        return [4, ze(o)];
                      }
                    } else {
                      return [2];
                    }
                  }
                } else {
                  return [2];
                }
              case 1:
                if (c = s.sent()) {
                  return [3, 4];
                } else {
                  return [4, self.clients.openWindow(i)];
                }
              case 2:
                c = s.sent();
                return [4, Fe(3000)];
              case 3:
                s.sent();
                return [3, 6];
              case 4:
                return [4, c.focus()];
              case 5:
                c = s.sent();
                s.label = 6;
              case 6:
                if (c) {
                  r.messageType = ie.NOTIFICATION_CLICKED;
                  r.isFirebaseMessaging = true;
                  return [2, c.postMessage(r)];
                } else {
                  return [2];
                }
            }
          });
        });
      };
      return e;
    }();
    function xe(e) {
      var t;
      var n = (0, s.pi)({}, e.notification);
      (t = {})[le] = e;
      n.data = t;
      return n;
    }
    function ze(e) {
      return (0, s.mG)(this, undefined, undefined, function () {
        var t;
        var n;
        var r;
        var i;
        var o;
        var a;
        var c;
        return (0, s.Jh)(this, function (u) {
          switch (u.label) {
            case 0:
              return [4, Ue()];
            case 1:
              t = u.sent();
              try {
                n = (0, s.XA)(t);
                r = n.next();
                for (; !r.done; r = n.next()) {
                  i = r.value;
                  o = new URL(i.url, self.location.href);
                  if (e.host === o.host) {
                    return [2, i];
                  }
                }
              } catch (e) {
                a = {
                  error: e
                };
              } finally {
                try {
                  if (r && !r.done && (c = n.return)) {
                    c.call(n);
                  }
                } finally {
                  if (a) {
                    throw a.error;
                  }
                }
              }
              return [2, null];
          }
        });
      });
    }
    function Be(e, t) {
      var n;
      var r;
      t.isFirebaseMessaging = true;
      t.messageType = ie.PUSH_RECEIVED;
      try {
        for (var i = (0, s.XA)(e), o = i.next(); !o.done; o = i.next()) {
          o.value.postMessage(t);
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (o && !o.done && (r = i.return)) {
            r.call(i);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
    }
    function Ue() {
      return self.clients.matchAll({
        type: "window",
        includeUncontrolled: true
      });
    }
    function Ve(e) {
      var n = e.actions;
      var r = Notification.maxActions;
      if (n && r && n.length > r) {
        console.warn("This browser only supports " + r + " actions. The remaining actions will not be displayed.");
      }
      return self.registration.showNotification(e.title ?? "", e);
    }
    var We = function () {
      function e(e) {
        var t = this;
        this.firebaseDependencies = e;
        this.vapidKey = null;
        this.onMessageCallback = null;
        navigator.serviceWorker.addEventListener("message", function (e) {
          return t.messageEventListener(e);
        });
      }
      Object.defineProperty(e.prototype, "app", {
        get: function () {
          return this.firebaseDependencies.app;
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.messageEventListener = function (e) {
        return (0, s.mG)(this, undefined, undefined, function () {
          var t;
          var n;
          return (0, s.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                if ((t = e.data).isFirebaseMessaging) {
                  if (this.onMessageCallback && t.messageType === ie.PUSH_RECEIVED) {
                    if (typeof this.onMessageCallback == "function") {
                      this.onMessageCallback(function (e) {
                        delete e.messageType;
                        delete e.isFirebaseMessaging;
                        return e;
                      }
                      /**
                       * @license
                       * Copyright 2019 Google LLC
                       *
                       * Licensed under the Apache License, Version 2.0 (the "License");
                       * you may not use this file except in compliance with the License.
                       * You may obtain a copy of the License at
                       *
                       *   http://www.apache.org/licenses/LICENSE-2.0
                       *
                       * Unless required by applicable law or agreed to in writing, software
                       * distributed under the License is distributed on an "AS IS" BASIS,
                       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                       * See the License for the specific language governing permissions and
                       * limitations under the License.
                       */(Object.assign({}, t)));
                    } else {
                      this.onMessageCallback.next(Object.assign({}, t));
                    }
                  }
                  if (Je(n = t.data) && n["google.c.a.e"] === "1") {
                    return [4, this.logEvent(t.messageType, n)];
                  } else {
                    return [3, 2];
                  }
                } else {
                  return [2];
                }
              case 1:
                r.sent();
                r.label = 2;
              case 2:
                return [2];
            }
          });
        });
      };
      e.prototype.getVapidKey = function () {
        return this.vapidKey;
      };
      e.prototype.getSwReg = function () {
        return this.swRegistration;
      };
      e.prototype.getToken = function (e) {
        return (0, s.mG)(this, undefined, undefined, function () {
          return (0, s.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                if (Notification.permission !== "default") {
                  return [3, 2];
                } else {
                  return [4, Notification.requestPermission()];
                }
              case 1:
                t.sent();
                t.label = 2;
              case 2:
                if (Notification.permission !== "granted") {
                  throw ae.create("permission-blocked");
                }
                return [4, this.updateVapidKey(e == null ? undefined : e.vapidKey)];
              case 3:
                t.sent();
                return [4, this.updateSwReg(e == null ? undefined : e.serviceWorkerRegistration)];
              case 4:
                t.sent();
                return [2, Re(this.firebaseDependencies, this.swRegistration, this.vapidKey)];
            }
          });
        });
      };
      e.prototype.updateVapidKey = function (e) {
        return (0, s.mG)(this, undefined, undefined, function () {
          return (0, s.Jh)(this, function (t) {
            if (e) {
              this.vapidKey = e;
            } else {
              this.vapidKey ||= ce;
            }
            return [2];
          });
        });
      };
      e.prototype.updateSwReg = function (e) {
        return (0, s.mG)(this, undefined, undefined, function () {
          return (0, s.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                if (e || this.swRegistration) {
                  return [3, 2];
                } else {
                  return [4, this.registerDefaultSw()];
                }
              case 1:
                t.sent();
                t.label = 2;
              case 2:
                if (!e && this.swRegistration) {
                  return [2];
                }
                if (!(e instanceof ServiceWorkerRegistration)) {
                  throw ae.create("invalid-sw-registration");
                }
                this.swRegistration = e;
                return [2];
            }
          });
        });
      };
      e.prototype.registerDefaultSw = function () {
        return (0, s.mG)(this, undefined, undefined, function () {
          var e;
          var t;
          return (0, s.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                n.trys.push([0, 2,, 3]);
                e = this;
                return [4, navigator.serviceWorker.register("/firebase-messaging-sw.js", {
                  scope: "/firebase-cloud-messaging-push-scope"
                })];
              case 1:
                e.swRegistration = n.sent();
                this.swRegistration.update().catch(function () {});
                return [3, 3];
              case 2:
                t = n.sent();
                throw ae.create("failed-service-worker-registration", {
                  browserErrorMessage: t.message
                });
              case 3:
                return [2];
            }
          });
        });
      };
      e.prototype.deleteToken = function () {
        return (0, s.mG)(this, undefined, undefined, function () {
          return (0, s.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                if (this.swRegistration) {
                  return [3, 2];
                } else {
                  return [4, this.registerDefaultSw()];
                }
              case 1:
                e.sent();
                e.label = 2;
              case 2:
                return [2, Me(this.firebaseDependencies, this.swRegistration)];
            }
          });
        });
      };
      e.prototype.requestPermission = function () {
        return (0, s.mG)(this, undefined, undefined, function () {
          var e;
          return (0, s.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                if (Notification.permission === "granted") {
                  return [2];
                } else {
                  return [4, Notification.requestPermission()];
                }
              case 1:
                if ((e = t.sent()) === "granted") {
                  return [2];
                }
                throw e === "denied" ? ae.create("permission-blocked") : ae.create("permission-default");
            }
          });
        });
      };
      e.prototype.usePublicVapidKey = function (e) {
        if (this.vapidKey !== null) {
          throw ae.create("use-vapid-key-after-get-token");
        }
        if (typeof e != "string" || e.length === 0) {
          throw ae.create("invalid-vapid-key");
        }
        this.vapidKey = e;
      };
      e.prototype.useServiceWorker = function (e) {
        if (!(e instanceof ServiceWorkerRegistration)) {
          throw ae.create("invalid-sw-registration");
        }
        if (this.swRegistration) {
          throw ae.create("use-sw-after-get-token");
        }
        this.swRegistration = e;
      };
      e.prototype.onMessage = function (e) {
        var t = this;
        this.onMessageCallback = e;
        return function () {
          t.onMessageCallback = null;
        };
      };
      e.prototype.setBackgroundMessageHandler = function () {
        throw ae.create("only-available-in-sw");
      };
      e.prototype.onBackgroundMessage = function () {
        throw ae.create("only-available-in-sw");
      };
      e.prototype.onTokenRefresh = function () {
        return function () {};
      };
      e.prototype.logEvent = function (e, t) {
        return (0, s.mG)(this, undefined, undefined, function () {
          var n;
          return (0, s.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                n = function (e) {
                  switch (e) {
                    case ie.NOTIFICATION_CLICKED:
                      return "notification_open";
                    case ie.PUSH_RECEIVED:
                      return "notification_foreground";
                    default:
                      throw new Error();
                  }
                }(e);
                return [4, this.firebaseDependencies.analyticsProvider.get()];
              case 1:
                r.sent().logEvent(n, {
                  message_id: t[fe],
                  message_name: t["google.c.a.c_l"],
                  message_time: t["google.c.a.ts"],
                  message_device_time: Math.floor(Date.now() / 1000)
                });
                return [2];
            }
          });
        });
      };
      return e;
    }();
    function qe(e) {
      return ae.create("missing-app-config-values", {
        valueName: e
      });
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var $e = {
      isSupported: Ze
    };
    function Ze() {
      if (self && "ServiceWorkerGlobalScope" in self) {
        return "indexedDB" in self && indexedDB !== null && "PushManager" in self && "Notification" in self && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey");
      } else {
        return "indexedDB" in window && indexedDB !== null && navigator.cookieEnabled && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey");
      }
    }
    i.Z.INTERNAL.registerComponent(new o.wA("messaging", function (e) {
      var t = e.getProvider("app").getImmediate();
      var n = function (e) {
        var t;
        var n;
        if (!e || !e.options) {
          throw qe("App Configuration Object");
        }
        if (!e.name) {
          throw qe("App Name");
        }
        var r = e.options;
        try {
          for (var i = (0, s.XA)(["projectId", "apiKey", "appId", "messagingSenderId"]), o = i.next(); !o.done; o = i.next()) {
            var a = o.value;
            if (!r[a]) {
              throw qe(a);
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (o && !o.done && (n = i.return)) {
              n.call(i);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        return {
          appName: e.name,
          projectId: r.projectId,
          apiKey: r.apiKey,
          appId: r.appId,
          senderId: r.messagingSenderId
        };
      }(t);
      var r = {
        app: t,
        appConfig: n,
        installations: e.getProvider("installations").getImmediate(),
        analyticsProvider: e.getProvider("analytics-internal")
      };
      if (!Ze()) {
        throw ae.create("unsupported-browser");
      }
      if (self && "ServiceWorkerGlobalScope" in self) {
        return new He(r);
      } else {
        return new We(r);
      }
    }, "PUBLIC").setServiceProps($e));
  },
  244589: function (e, t, n) {
    n.d(t, {
      BH: () => s,
      LL: () => l,
      UG: () => a,
      ZB: () => o,
      ZR: () => u,
      jU: () => c,
      ne: () => h,
      p$: () => i,
      r3: () => p
    });
    var r = n(570655);
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function i(e) {
      return o(undefined, e);
    }
    function o(e, t) {
      if (!(t instanceof Object)) {
        return t;
      }
      switch (t.constructor) {
        case Date:
          return new Date(t.getTime());
        case Object:
          if (e === undefined) {
            e = {};
          }
          break;
        case Array:
          e = [];
          break;
        default:
          return t;
      }
      for (var n in t) {
        if (t.hasOwnProperty(n) && n !== "__proto__") {
          e[n] = o(e[n], t[n]);
        }
      }
      return e;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var s = function () {
      function e() {
        var e = this;
        this.reject = function () {};
        this.resolve = function () {};
        this.promise = new Promise(function (t, n) {
          e.resolve = t;
          e.reject = n;
        });
      }
      e.prototype.wrapCallback = function (e) {
        var t = this;
        return function (n, r) {
          if (n) {
            t.reject(n);
          } else {
            t.resolve(r);
          }
          if (typeof e == "function") {
            t.promise.catch(function () {});
            if (e.length === 1) {
              e(n);
            } else {
              e(n, r);
            }
          }
        };
      };
      return e;
    }();
    /**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function a() {
      try {
        return Object.prototype.toString.call(n.g.process) === "[object process]";
      } catch (e) {
        return false;
      }
    }
    function c() {
      return typeof self == "object" && self.self === self;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var u = function (e) {
      function t(n, r, i) {
        var o = e.call(this, r) || this;
        o.code = n;
        o.customData = i;
        o.name = "FirebaseError";
        Object.setPrototypeOf(o, t.prototype);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(o, l.prototype.create);
        }
        return o;
      }
      (0, r.ZT)(t, e);
      return t;
    }(Error);
    var l = function () {
      function e(e, t, n) {
        this.service = e;
        this.serviceName = t;
        this.errors = n;
      }
      e.prototype.create = function (e) {
        var t = [];
        for (var n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }
        var r = t[0] || {};
        var i = this.service + "/" + e;
        var o = this.errors[e];
        var s = o ? function (e, t) {
          return e.replace(f, function (e, n) {
            var r = t[n];
            if (r != null) {
              return String(r);
            } else {
              return "<" + n + "?>";
            }
          });
        }(o, r) : "Error";
        var a = this.serviceName + ": " + s + " (" + i + ").";
        return new u(i, a, r);
      };
      return e;
    }();
    var f = /\{\$([^}]+)}/g;
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function p(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    (function () {
      function e() {
        this.chain_ = [];
        this.buf_ = [];
        this.W_ = [];
        this.pad_ = [];
        this.inbuf_ = 0;
        this.total_ = 0;
        this.blockSize = 64;
        this.pad_[0] = 128;
        for (var e = 1; e < this.blockSize; ++e) {
          this.pad_[e] = 0;
        }
        this.reset();
      }
      e.prototype.reset = function () {
        this.chain_[0] = 1732584193;
        this.chain_[1] = 4023233417;
        this.chain_[2] = 2562383102;
        this.chain_[3] = 271733878;
        this.chain_[4] = 3285377520;
        this.inbuf_ = 0;
        this.total_ = 0;
      };
      e.prototype.compress_ = function (e, t) {
        t ||= 0;
        var n = this.W_;
        if (typeof e == "string") {
          for (var r = 0; r < 16; r++) {
            n[r] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3);
            t += 4;
          }
        } else {
          for (r = 0; r < 16; r++) {
            n[r] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
            t += 4;
          }
        }
        for (r = 16; r < 80; r++) {
          var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
          n[r] = (i << 1 | i >>> 31) & 4294967295;
        }
        var o;
        var s;
        var a = this.chain_[0];
        var c = this.chain_[1];
        var u = this.chain_[2];
        var l = this.chain_[3];
        var f = this.chain_[4];
        for (r = 0; r < 80; r++) {
          if (r < 40) {
            if (r < 20) {
              o = l ^ c & (u ^ l);
              s = 1518500249;
            } else {
              o = c ^ u ^ l;
              s = 1859775393;
            }
          } else if (r < 60) {
            o = c & u | l & (c | u);
            s = 2400959708;
          } else {
            o = c ^ u ^ l;
            s = 3395469782;
          }
          i = (a << 5 | a >>> 27) + o + f + s + n[r] & 4294967295;
          f = l;
          l = u;
          u = (c << 30 | c >>> 2) & 4294967295;
          c = a;
          a = i;
        }
        this.chain_[0] = this.chain_[0] + a & 4294967295;
        this.chain_[1] = this.chain_[1] + c & 4294967295;
        this.chain_[2] = this.chain_[2] + u & 4294967295;
        this.chain_[3] = this.chain_[3] + l & 4294967295;
        this.chain_[4] = this.chain_[4] + f & 4294967295;
      };
      e.prototype.update = function (e, t) {
        if (e != null) {
          if (t === undefined) {
            t = e.length;
          }
          var n = t - this.blockSize;
          for (var r = 0, i = this.buf_, o = this.inbuf_; r < t;) {
            if (o === 0) {
              while (r <= n) {
                this.compress_(e, r);
                r += this.blockSize;
              }
            }
            if (typeof e == "string") {
              while (r < t) {
                i[o] = e.charCodeAt(r);
                ++r;
                if (++o === this.blockSize) {
                  this.compress_(i);
                  o = 0;
                  break;
                }
              }
            } else {
              while (r < t) {
                i[o] = e[r];
                ++r;
                if (++o === this.blockSize) {
                  this.compress_(i);
                  o = 0;
                  break;
                }
              }
            }
          }
          this.inbuf_ = o;
          this.total_ += t;
        }
      };
      e.prototype.digest = function () {
        var e = [];
        var t = this.total_ * 8;
        if (this.inbuf_ < 56) {
          this.update(this.pad_, 56 - this.inbuf_);
        } else {
          this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        for (var n = this.blockSize - 1; n >= 56; n--) {
          this.buf_[n] = t & 255;
          t /= 256;
        }
        this.compress_(this.buf_);
        var r = 0;
        for (n = 0; n < 5; n++) {
          for (var i = 24; i >= 0; i -= 8) {
            e[r] = this.chain_[n] >> i & 255;
            ++r;
          }
        }
        return e;
      };
    })();
    function h(e, t) {
      var n = new d(e, t);
      return n.subscribe.bind(n);
    }
    var d = function () {
      function e(e, t) {
        var n = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = t;
        this.task.then(function () {
          e(n);
        }).catch(function (e) {
          n.error(e);
        });
      }
      e.prototype.next = function (e) {
        this.forEachObserver(function (t) {
          t.next(e);
        });
      };
      e.prototype.error = function (e) {
        this.forEachObserver(function (t) {
          t.error(e);
        });
        this.close(e);
      };
      e.prototype.complete = function () {
        this.forEachObserver(function (e) {
          e.complete();
        });
        this.close();
      };
      e.prototype.subscribe = function (e, t, n) {
        var r;
        var i = this;
        if (e === undefined && t === undefined && n === undefined) {
          throw new Error("Missing Observer.");
        }
        if ((r = function (e, t) {
          if (typeof e != "object" || e === null) {
            return false;
          }
          for (var n = 0, r = t; n < r.length; n++) {
            var i = r[n];
            if (i in e && typeof e[i] == "function") {
              return true;
            }
          }
          return false;
        }(e, ["next", "error", "complete"]) ? e : {
          next: e,
          error: t,
          complete: n
        }).next === undefined) {
          r.next = v;
        }
        if (r.error === undefined) {
          r.error = v;
        }
        if (r.complete === undefined) {
          r.complete = v;
        }
        var o = this.unsubscribeOne.bind(this, this.observers.length);
        if (this.finalized) {
          this.task.then(function () {
            try {
              if (i.finalError) {
                r.error(i.finalError);
              } else {
                r.complete();
              }
            } catch (e) {}
          });
        }
        this.observers.push(r);
        return o;
      };
      e.prototype.unsubscribeOne = function (e) {
        if (this.observers !== undefined && this.observers[e] !== undefined) {
          delete this.observers[e];
          this.observerCount -= 1;
          if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
          }
        }
      };
      e.prototype.forEachObserver = function (e) {
        if (!this.finalized) {
          for (var t = 0; t < this.observers.length; t++) {
            this.sendOne(t, e);
          }
        }
      };
      e.prototype.sendOne = function (e, t) {
        var n = this;
        this.task.then(function () {
          if (n.observers !== undefined && n.observers[e] !== undefined) {
            try {
              t(n.observers[e]);
            } catch (e) {
              if (typeof console != "undefined" && console.error) {
                console.error(e);
              }
            }
          }
        });
      };
      e.prototype.close = function (e) {
        var t = this;
        if (!this.finalized) {
          this.finalized = true;
          if (e !== undefined) {
            this.finalError = e;
          }
          this.task.then(function () {
            t.observers = undefined;
            t.onNoObservers = undefined;
          });
        }
      };
      return e;
    }();
    function v() {}
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
  }
}]); //# sourceMappingURL=firebase.2ece51dadda079d5.js.map
//# debugId=20dcd06a-0e15-4324-8029-fdf6d04de8b0