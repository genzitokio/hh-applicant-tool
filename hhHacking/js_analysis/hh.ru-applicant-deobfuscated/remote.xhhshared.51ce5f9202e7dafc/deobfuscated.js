var xhhshared;
(() => {
  var e;
  var n;
  var t = {
    620: function (e, n, t) {
      "use strict";

      var r = t(645);
      var o = t(657);
      let i = null;
      r.setGlobalFederationConstructor(r.FederationHost);
      Object.defineProperty(n, "FederationHost", {
        enumerable: true,
        get: function () {
          return r.FederationHost;
        },
      });
      Object.defineProperty(n, "Module", {
        enumerable: true,
        get: function () {
          return r.Module;
        },
      });
      Object.defineProperty(n, "getRemoteEntry", {
        enumerable: true,
        get: function () {
          return r.getRemoteEntry;
        },
      });
      Object.defineProperty(n, "getRemoteInfo", {
        enumerable: true,
        get: function () {
          return r.getRemoteInfo;
        },
      });
      Object.defineProperty(n, "loadScript", {
        enumerable: true,
        get: function () {
          return r.loadScript;
        },
      });
      Object.defineProperty(n, "loadScriptNode", {
        enumerable: true,
        get: function () {
          return r.loadScriptNode;
        },
      });
      Object.defineProperty(n, "registerGlobalPlugins", {
        enumerable: true,
        get: function () {
          return r.registerGlobalPlugins;
        },
      });
      n.getInstance = function () {
        return i;
      };
      n.init = function (e) {
        const n = o.getGlobalFederationInstance(e.name, e.version);
        if (n) {
          n.initOptions(e);
          i ||= n;
          return n;
        }
        {
          const n = r.getGlobalFederationConstructor() || r.FederationHost;
          i = new n(e);
          r.setGlobalFederationInstance(i);
          return i;
        }
      };
      n.loadRemote = function (...e) {
        r.assert(i, "Please call init first");
        return i.loadRemote.apply(i, e);
      };
      n.loadShare = function (...e) {
        r.assert(i, "Please call init first");
        return i.loadShare.apply(i, e);
      };
      n.loadShareSync = function (...e) {
        r.assert(i, "Please call init first");
        return i.loadShareSync.apply(i, e);
      };
      n.preloadRemote = function (...e) {
        r.assert(i, "Please call init first");
        return i.preloadRemote.apply(i, e);
      };
      n.registerPlugins = function (...e) {
        r.assert(i, "Please call init first");
        return i.registerPlugins.apply(i, e);
      };
      n.registerRemotes = function (...e) {
        r.assert(i, "Please call init first");
        return i.registerRemotes.apply(i, e);
      };
    },
    657: function (e, n, t) {
      "use strict";

      var r = t(645);
      n.getGlobalFederationInstance = function (e, n) {
        return r.CurrentGlobal.__FEDERATION__.__INSTANCES__.find(
          (t) =>
            t.options.id === "xhhshared:local" ||
            (t.options.name === e && !t.options.version && !n) ||
            (t.options.name === e && !!n && t.options.version === n),
        );
      };
    },
    11: function (e, n) {
      "use strict";

      n.FEDERATION_SUPPORTED_TYPES = ["script"];
    },
    83: function (e, n, t) {
      "use strict";

      var r = t(620);
      var o = t(11);
      function i(e) {
        var n = Object.create(null);
        if (e) {
          Object.keys(e).forEach(function (t) {
            if (t !== "default") {
              var r = Object.getOwnPropertyDescriptor(e, t);
              Object.defineProperty(
                n,
                t,
                r.get
                  ? r
                  : {
                      enumerable: true,
                      get: function () {
                        return e[t];
                      },
                    },
              );
            }
          });
        }
        n.default = e;
        return Object.freeze(n);
      }
      function a(e) {
        if (
          e.S &&
          !e.federation.hasAttachShareScopeMap &&
          e.federation.instance &&
          e.federation.instance.shareScopeMap
        ) {
          e.S = e.federation.instance.shareScopeMap;
          e.federation.hasAttachShareScopeMap = true;
        }
      }
      const s = "@";
      const c = "-";
      const u = "/";
      const l = {
        [s]: "scope_",
        [c]: "_",
        [u]: "__",
      };
      const d = {
        [l[s]]: s,
        [l[c]]: c,
        [l[u]]: u,
      };
      const p = {
        runtime: i(r),
        instance: undefined,
        initOptions: undefined,
        bundlerRuntime: {
          remotes: function (e) {
            const {
              chunkId: n,
              promises: t,
              chunkMapping: r,
              idToExternalAndNameMapping: i,
              webpackRequire: p,
              idToRemoteMap: f,
            } = e;
            a(p);
            if (p.o(r, n)) {
              r[n].forEach((e) => {
                let n = p.R;
                n ||= [];
                const r = i[e];
                const a = f[e];
                if (n.indexOf(r) >= 0) {
                  return;
                }
                n.push(r);
                if (r.p) {
                  return t.push(r.p);
                }
                const h = (n) => {
                  n ||= new Error("Container missing");
                  if (typeof n.message == "string") {
                    n.message += `\nwhile loading "${r[1]}" from ${r[2]}`;
                  }
                  p.m[e] = () => {
                    throw n;
                  };
                  r.p = 0;
                };
                const m = (e, n, o, i, a, s) => {
                  try {
                    const c = e(n, o);
                    if (!c || !c.then) {
                      return a(c, i, s);
                    }
                    {
                      const e = c.then((e) => a(e, i), h);
                      if (!s) {
                        return e;
                      }
                      t.push((r.p = e));
                    }
                  } catch (e) {
                    h(e);
                  }
                };
                const g = (e, n, t) => (e ? m(p.I, r[0], 0, e, b, t) : h());
                var b = (e, t, o) => m(t.get, r[1], n, 0, v, o);
                var v = (n) => {
                  r.p = 1;
                  p.m[e] = (e) => {
                    e.exports = n();
                  };
                };
                const y = () => {
                  try {
                    const e =
                      (function (e, n, t) {
                        try {
                          let t = e;
                          if (n) {
                            if (!t.startsWith(n)) {
                              return t;
                            }
                            t = t.replace(new RegExp(n, "g"), "");
                          }
                          t = t
                            .replace(new RegExp(`${l[s]}`, "g"), d[l[s]])
                            .replace(new RegExp(`${l[u]}`, "g"), d[l[u]])
                            .replace(new RegExp(`${l[c]}`, "g"), d[l[c]]);
                          return t;
                        } catch (e) {
                          throw e;
                        }
                      })(a[0].name, "ENCODE_NAME_PREFIX") + r[1].slice(1);
                    const n = p.federation.instance;
                    const t = () =>
                      p.federation.instance.loadRemote(e, {
                        loadFactory: false,
                        from: "build",
                      });
                    if (n.options.shareStrategy === "version-first") {
                      return Promise.all(
                        n.sharedHandler.initializeSharing(r[0]),
                      ).then(() => t());
                    } else {
                      return t();
                    }
                  } catch (e) {
                    h(e);
                  }
                };
                if (
                  a.length === 1 &&
                  o.FEDERATION_SUPPORTED_TYPES.includes(a[0].externalType) &&
                  a[0].name
                ) {
                  m(y, r[2], 0, 0, v, 1);
                } else {
                  m(p, r[2], 0, 0, g, 1);
                }
              });
            }
          },
          consumes: function (e) {
            const {
              chunkId: n,
              promises: t,
              chunkMapping: r,
              installedModules: o,
              moduleToHandlerMapping: i,
              webpackRequire: s,
            } = e;
            a(s);
            if (s.o(r, n)) {
              r[n].forEach((e) => {
                if (s.o(o, e)) {
                  return t.push(o[e]);
                }
                const n = (n) => {
                  o[e] = 0;
                  s.m[e] = (t) => {
                    delete s.c[e];
                    t.exports = n();
                  };
                };
                const r = (n) => {
                  delete o[e];
                  s.m[e] = (t) => {
                    delete s.c[e];
                    throw n;
                  };
                };
                try {
                  const a = s.federation.instance;
                  if (!a) {
                    throw new Error("Federation instance not found!");
                  }
                  const { shareKey: c, getter: u, shareInfo: l } = i[e];
                  const d = a
                    .loadShare(c, {
                      customShareInfo: l,
                    })
                    .then((e) => (e === false ? u() : e));
                  if (d.then) {
                    t.push((o[e] = d.then(n).catch(r)));
                  } else {
                    n(d);
                  }
                } catch (e) {
                  r(e);
                }
              });
            }
          },
          I: function ({
            shareScopeName: e,
            webpackRequire: n,
            initPromises: t,
            initTokens: r,
            initScope: i,
          }) {
            i ||= [];
            const s = n.federation.instance;
            var c = r[e];
            c ||= r[e] = {
              from: s.name,
            };
            if (i.indexOf(c) >= 0) {
              return;
            }
            i.push(c);
            const u = t[e];
            if (u) {
              return u;
            }
            var l = (t) => {
              var r = (e) => {
                n = "Initialization of sharing external failed: " + e;
                return (
                  typeof console != "undefined" &&
                  console.warn &&
                  console.warn(n)
                );
                var n;
              };
              try {
                var o = n(t);
                if (!o) {
                  return;
                }
                var a = (t) => t && t.init && t.init(n.S[e], i);
                if (o.then) {
                  return d.push(o.then(a, r));
                }
                var s = a(o);
                if (s && typeof s != "boolean" && s.then) {
                  return d.push(s.catch(r));
                }
              } catch (e) {
                r(e);
              }
            };
            const d = s.initializeSharing(e, {
              strategy: s.options.shareStrategy,
              initScope: i,
              from: "build",
            });
            a(n);
            const p = n.federation.bundlerRuntimeOptions.remotes;
            if (p) {
              Object.keys(p.idToRemoteMap).forEach((e) => {
                const n = p.idToRemoteMap[e];
                const t = p.idToExternalAndNameMapping[e][2];
                if (n.length > 1) {
                  l(t);
                } else if (n.length === 1) {
                  const e = n[0];
                  if (!o.FEDERATION_SUPPORTED_TYPES.includes(e.externalType)) {
                    l(t);
                  }
                }
              });
            }
            if (d.length) {
              return (t[e] = Promise.all(d).then(() => (t[e] = true)));
            } else {
              return (t[e] = true);
            }
          },
          S: {},
          installInitialConsumes: function (e) {
            const {
              moduleToHandlerMapping: n,
              webpackRequire: t,
              installedModules: r,
              initialConsumes: o,
            } = e;
            o.forEach((e) => {
              t.m[e] = (o) => {
                r[e] = 0;
                delete t.c[e];
                const i = (function (e) {
                  const {
                    moduleId: n,
                    moduleToHandlerMapping: t,
                    webpackRequire: r,
                  } = e;
                  const o = r.federation.instance;
                  if (!o) {
                    throw new Error("Federation instance not found!");
                  }
                  const { shareKey: i, shareInfo: a } = t[n];
                  try {
                    return o.loadShareSync(i, {
                      customShareInfo: a,
                    });
                  } catch (e) {
                    console.error(
                      'loadShareSync failed! The function should not be called unless you set "eager:true". If you do not set it, and encounter this issue, you can check whether an async boundary is implemented.',
                    );
                    console.error("The original error message is as follows: ");
                    throw e;
                  }
                })({
                  moduleId: e,
                  moduleToHandlerMapping: n,
                  webpackRequire: t,
                });
                if (typeof i != "function") {
                  throw new Error(
                    `Shared module is not available for eager consumption: ${e}`,
                  );
                }
                o.exports = i();
              };
            });
          },
          initContainerEntry: function (e) {
            const {
              webpackRequire: n,
              shareScope: t,
              initScope: r,
              shareScopeKey: o,
              remoteEntryInitOptions: i,
            } = e;
            if (!n.S) {
              return;
            }
            if (
              !n.federation ||
              !n.federation.instance ||
              !n.federation.initOptions
            ) {
              return;
            }
            const a = n.federation.instance;
            var s = o || "default";
            a.initOptions({
              name: n.federation.initOptions.name,
              remotes: [],
              ...i,
            });
            a.initShareScopeMap(s, t, {
              hostShareScopeMap: i?.shareScopeMap || {},
            });
            if (n.federation.attachShareScopeMap) {
              n.federation.attachShareScopeMap(n);
            }
            if (typeof n.federation.prefetch == "function") {
              n.federation.prefetch();
            }
            return n.I(s, r);
          },
        },
        attachShareScopeMap: a,
        bundlerRuntimeOptions: {},
      };
      e.exports = p;
    },
    65: function (e, n, t) {
      if (window.globalVars.sHostMFP) {
        t.p = window.globalVars.sHostMFP;
      }
    },
    771: function (e, n, t) {
      "use strict";

      t.d(n, {
        get: () => t.getContainer,
        init: () => t.initContainer,
      });
    },
    203: function (e, n, t) {
      "use strict";

      var r = t(83);
      var o = t.n(r);
      const i = [];
      const a = {};
      if (
        (t.initializeSharingData || t.initializeExposesData) &&
        t.federation
      ) {
        const e = (e, n, t) => {
          if (e && e[n]) {
            e[n] = t;
          }
        };
        const n = (e, n, t) => {
          const r = t();
          var o;
          var i;
          var a;
          if (Array.isArray(r)) {
            if ((a = (o = e)[(i = n)]) === null || a === undefined) {
              o[i] = [];
            }
            e[n].push(...r);
          } else if (typeof r == "object" && r !== null) {
            var s;
            var c;
            var u;
            if ((u = (s = e)[(c = n)]) === null || u === undefined) {
              s[c] = {};
            }
            Object.assign(e[n], r);
          }
        };
        const r = (e, n, t) => {
          var r;
          var o;
          var i;
          if ((i = (r = e)[(o = n)]) === null || i === undefined) {
            r[o] = t();
          }
        };
        const y = t.remotesLoadingData?.chunkMapping ?? {};
        const S = t.remotesLoadingData?.moduleIdToRemoteDataMapping ?? {};
        const _ = t.initializeSharingData?.scopeToSharingDataMapping ?? {};
        const M = t.consumesLoadingData?.chunkMapping ?? {};
        const R = t.consumesLoadingData?.moduleIdToConsumeDataMapping ?? {};
        const O = {};
        const w = [];
        const E = {};
        const T = t.initializeExposesData?.shareScope;
        for (const e in o()) {
          t.federation[e] = o()[e];
        }
        r(t.federation, "consumesLoadingModuleToHandlerMapping", () => {
          const e = {};
          for (let [n, t] of Object.entries(R)) {
            e[n] = {
              getter: t.fallback,
              shareInfo: {
                shareConfig: {
                  fixedDependencies: false,
                  requiredVersion: t.requiredVersion,
                  strictVersion: t.strictVersion,
                  singleton: t.singleton,
                  eager: t.eager,
                },
                scope: [t.shareScope],
              },
              shareKey: t.shareKey,
            };
          }
          return e;
        });
        r(t.federation, "initOptions", () => ({}));
        r(t.federation.initOptions, "name", () => "xhhshared");
        r(t.federation.initOptions, "shareStrategy", () => "loaded-first");
        r(t.federation.initOptions, "shared", () => {
          const e = {};
          for (let [n, t] of Object.entries(_)) {
            for (let r of t) {
              if (typeof r == "object" && r !== null) {
                const {
                  name: t,
                  version: o,
                  factory: i,
                  eager: a,
                  singleton: s,
                  requiredVersion: c,
                  strictVersion: u,
                } = r;
                const l = {};
                const d = function (e) {
                  return e !== undefined;
                };
                if (d(s)) {
                  l.singleton = s;
                }
                if (d(c)) {
                  l.requiredVersion = c;
                }
                if (d(a)) {
                  l.eager = a;
                }
                if (d(u)) {
                  l.strictVersion = u;
                }
                const p = {
                  version: o,
                  scope: [n],
                  shareConfig: l,
                  get: i,
                };
                if (e[t]) {
                  e[t].push(p);
                } else {
                  e[t] = [p];
                }
              }
            }
          }
          return e;
        });
        n(t.federation.initOptions, "remotes", () =>
          Object.values(a)
            .flat()
            .filter((e) => e.externalType === "script"),
        );
        n(t.federation.initOptions, "plugins", () => i);
        r(t.federation, "bundlerRuntimeOptions", () => ({}));
        r(t.federation.bundlerRuntimeOptions, "remotes", () => ({}));
        r(t.federation.bundlerRuntimeOptions.remotes, "chunkMapping", () => y);
        r(
          t.federation.bundlerRuntimeOptions.remotes,
          "idToExternalAndNameMapping",
          () => {
            const e = {};
            for (let [n, t] of Object.entries(S)) {
              e[n] = [t.shareScope, t.name, t.externalModuleId, t.remoteName];
            }
            return e;
          },
        );
        r(
          t.federation.bundlerRuntimeOptions.remotes,
          "webpackRequire",
          () => t,
        );
        n(t.federation.bundlerRuntimeOptions.remotes, "idToRemoteMap", () => {
          const e = {};
          for (let [n, t] of Object.entries(S)) {
            const r = a[t.remoteName];
            if (r) {
              e[n] = r;
            }
          }
          return e;
        });
        e(t, "S", t.federation.bundlerRuntime.S);
        if (t.federation.attachShareScopeMap) {
          t.federation.attachShareScopeMap(t);
        }
        e(t.f, "remotes", (e, n) =>
          t.federation.bundlerRuntime.remotes({
            chunkId: e,
            promises: n,
            chunkMapping: y,
            idToExternalAndNameMapping:
              t.federation.bundlerRuntimeOptions.remotes
                .idToExternalAndNameMapping,
            idToRemoteMap:
              t.federation.bundlerRuntimeOptions.remotes.idToRemoteMap,
            webpackRequire: t,
          }),
        );
        e(t.f, "consumes", (e, n) =>
          t.federation.bundlerRuntime.consumes({
            chunkId: e,
            promises: n,
            chunkMapping: M,
            moduleToHandlerMapping:
              t.federation.consumesLoadingModuleToHandlerMapping,
            installedModules: O,
            webpackRequire: t,
          }),
        );
        e(t, "I", (e, n) =>
          t.federation.bundlerRuntime.I({
            shareScopeName: e,
            initScope: n,
            initPromises: w,
            initTokens: E,
            webpackRequire: t,
          }),
        );
        e(t, "initContainer", (e, n, r) =>
          t.federation.bundlerRuntime.initContainerEntry({
            shareScope: e,
            initScope: n,
            remoteEntryInitOptions: r,
            shareScopeKey: T,
            webpackRequire: t,
          }),
        );
        e(t, "getContainer", (e, n) => {
          var r = t.initializeExposesData.moduleMap;
          t.R = n;
          n = Object.prototype.hasOwnProperty.call(r, e)
            ? r[e]()
            : Promise.resolve().then(() => {
                throw new Error(
                  'Module "' + e + '" does not exist in container.',
                );
              });
          t.R = undefined;
          return n;
        });
        t.federation.instance = t.federation.runtime.init(
          t.federation.initOptions,
        );
        if (t.consumesLoadingData?.initialConsumes) {
          t.federation.bundlerRuntime.installInitialConsumes({
            webpackRequire: t,
            installedModules: O,
            initialConsumes: t.consumesLoadingData.initialConsumes,
            moduleToHandlerMapping:
              t.federation.consumesLoadingModuleToHandlerMapping,
          });
        }
      }
    },
    645: function (e) {
      "use strict";

      e.exports = globalThis._FEDERATION_RUNTIME_CORE;
    },
    724: function (e, n, t) {
      "use strict";

      t.p = window.globalVars.sHostMFP;
      window.globalVars.sHostMFP;
    },
  };
  var r = {};
  function o(e) {
    var n = r[e];
    if (n !== undefined) {
      return n.exports;
    }
    var i = (r[e] = {
      exports: {},
    });
    t[e].call(i.exports, i, i.exports, o);
    return i.exports;
  }
  o.m = t;
  o.c = r;
  o.federation ||= {
    chunkMatcher: function (e) {
      return true;
    },
    rootOutputDir: "",
  };
  o.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    o.d(n, {
      a: n,
    });
    return n;
  };
  o.d = (e, n) => {
    for (var t in n) {
      if (o.o(n, t) && !o.o(e, t)) {
        Object.defineProperty(e, t, {
          enumerable: true,
          get: n[t],
        });
      }
    }
  };
  o.f = {};
  o.e = (e) =>
    Promise.all(
      Object.keys(o.f).reduce((n, t) => {
        o.f[t](e, n);
        return n;
      }, []),
    );
  o.u = (e) =>
    (({
      285: "__federation_expose_security__secureportal.test_ver",
      324: "__federation_expose_security__fingerprint2_1.5.1",
      584: "__federation_expose_security__secureportal.v29",
      823: "__federation_expose_security",
    })[e] || e) +
    "." +
    {
      285: "82df582c4ce54698",
      324: "020e4cc3a4ce8f91",
      413: "2e06189df952de58",
      584: "9f6480404f7022c5",
      647: "5c3ca831c7ff0cc9",
      650: "696cd6ab57025f1a",
      823: "784e12d02de0e9e4",
    }[e] +
    ".js";
  o.miniCssF = (e) => e + ".css";
  o.h = () => "6bf41e8622ba6a73";
  o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
  e = {};
  n = "xhhshared:";
  o.l = function (t, r, i, a) {
    if (e[t]) {
      e[t].push(r);
    } else {
      var s;
      var c;
      if (i !== undefined) {
        for (
          var u = document.getElementsByTagName("script"), l = 0;
          l < u.length;
          l++
        ) {
          var d = u[l];
          if (
            d.getAttribute("src") == t ||
            d.getAttribute("data-webpack") == n + i
          ) {
            s = d;
            break;
          }
        }
      }
      if (!s) {
        c = true;
        (s = document.createElement("script")).charset = "utf-8";
        s.timeout = 120;
        if (o.nc) {
          s.setAttribute("nonce", o.nc);
        }
        s.setAttribute("data-webpack", n + i);
        s.src = t;
      }
      e[t] = [r];
      function p(n, r) {
        s.onerror = s.onload = null;
        clearTimeout(f);
        var o = e[t];
        delete e[t];
        if (s.parentNode) {
          s.parentNode.removeChild(s);
        }
        if (o) {
          o.forEach(function (e) {
            return e(r);
          });
        }
        if (n) {
          return n(r);
        }
      }
      var f = setTimeout(
        p.bind(null, undefined, {
          type: "timeout",
          target: s,
        }),
        120000,
      );
      s.onerror = p.bind(null, s.onerror);
      s.onload = p.bind(null, s.onload);
      if (c) {
        document.head.appendChild(s);
      }
    }
  };
  o.r = (e) => {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module",
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true,
    });
  };
  o.p = "";
  o.rv = () => "1.3.10";
  o.S = {};
  o.initializeSharingData = {
    scopeToSharingDataMapping: {},
    uniqueName: "xhhshared",
  };
  o.I =
    o.I ||
    function () {
      throw new Error("should have __webpack_require__.I");
    };
  o.initializeExposesData = {
    moduleMap: {
      "./security": () => o.e("823").then(() => () => o(281)),
      "./security/secureportal.test_ver": () =>
        Promise.all([o.e("650"), o.e("285")]).then(() => () => o(488)),
      "./security/secureportal.v29": () =>
        Promise.all([o.e("413"), o.e("584")]).then(() => () => o(176)),
      "./security/fingerprint2-1.5.1": () =>
        Promise.all([o.e("647"), o.e("324")]).then(() => () => o(883)),
    },
    shareScope: "default",
  };
  o.getContainer =
    o.getContainer ||
    function () {
      throw new Error("should have __webpack_require__.getContainer");
    };
  o.initContainer =
    o.initContainer ||
    function () {
      throw new Error("should have __webpack_require__.initContainer");
    };
  (() => {
    var e = {
      927: 0,
    };
    o.f.j = function (n, t) {
      var r = o.o(e, n) ? e[n] : undefined;
      if (r !== 0) {
        if (r) {
          t.push(r[2]);
        } else {
          var i = new Promise((t, o) => (r = e[n] = [t, o]));
          t.push((r[2] = i));
          var a = o.p + o.u(n);
          var s = new Error();
          o.l(
            a,
            function (t) {
              if (o.o(e, n) && ((r = e[n]) !== 0 && (e[n] = undefined), r)) {
                var i = t && (t.type === "load" ? "missing" : t.type);
                var a = t && t.target && t.target.src;
                s.message =
                  "Loading chunk " + n + " failed.\n(" + i + ": " + a + ")";
                s.name = "ChunkLoadError";
                s.type = i;
                s.request = a;
                r[1](s);
              }
            },
            "chunk-" + n,
            n,
          );
        }
      }
    };
    var n = (n, t) => {
      var r;
      var i;
      var [a, s, c] = t;
      var u = 0;
      if (a.some((n) => e[n] !== 0)) {
        for (r in s) {
          if (o.o(s, r)) {
            o.m[r] = s[r];
          }
        }
        if (c) {
          c(o);
        }
      }
      for (n && n(t); u < a.length; u++) {
        i = a[u];
        if (o.o(e, i) && e[i]) {
          e[i][0]();
        }
        e[i] = 0;
      }
    };
    var t = (globalThis.webpackChunkxhhshared =
      globalThis.webpackChunkxhhshared || []);
    t.forEach(n.bind(null, 0));
    t.push = n.bind(null, t.push.bind(t));
  })();
  o.ruid = "bundler=rspack@1.3.10";
  o(203);
  o(65);
  o(724);
  var i = o(771);
  xhhshared = i;
})();
//# sourceMappingURL=remote.xhhshared.51ce5f9202e7dafc.js.map
