var career_platform_front;
(() => {
  var __webpack_modules__ = {
    58908: function (e, t) {
      "use strict";

      const o = "RUNTIME-001";
      const r = "RUNTIME-002";
      const n = "RUNTIME-003";
      const a = "RUNTIME-004";
      const i = "RUNTIME-005";
      const s = "RUNTIME-006";
      const l = "RUNTIME-007";
      const c = "RUNTIME-008";
      const u = "TYPE-001";
      const d = "BUILD-001";
      function p() {
        p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var r in o) {
                if (Object.prototype.hasOwnProperty.call(o, r)) {
                  e[r] = o[r];
                }
              }
            }
            return e;
          };
        return p.apply(this, arguments);
      }
      const m = {
        [o]: "Failed to get remoteEntry exports.",
        [r]: 'The remote entry interface does not contain "init"',
        [n]: "Failed to get manifest.",
        [a]: "Failed to locate remote.",
        [i]: "Invalid loadShareSync function call from bundler runtime",
        [s]: "Invalid loadShareSync function call from runtime",
        [l]: "Failed to get remote snapshot.",
        [c]: "Failed to load script resources.",
      };
      const f = {
        [u]: "Failed to generate type declaration.",
      };
      const h = {
        [d]: "Failed to find expose module.",
      };
      const _ = p({}, m, f, h);
      t.BUILD_001 = d;
      t.RUNTIME_001 = o;
      t.RUNTIME_002 = r;
      t.RUNTIME_003 = n;
      t.RUNTIME_004 = a;
      t.RUNTIME_005 = i;
      t.RUNTIME_006 = s;
      t.RUNTIME_007 = l;
      t.RUNTIME_008 = c;
      t.TYPE_001 = u;
      t.buildDescMap = h;
      t.errorDescMap = _;
      t.getShortErrorMsg = (e, t, o, r) => {
        const n = [`${[t[e]]} #${e}`];
        if (o) {
          n.push(`args: ${JSON.stringify(o)}`);
        }
        n.push(
          ((e) =>
            `https://module-federation.io/guide/troubleshooting/${e.split("-")[0].toLowerCase()}/${e}`)(
            e,
          ),
        );
        if (r) {
          n.push(`Original Error Message:\n ${r}`);
        }
        return n.join("\n");
      };
      t.runtimeDescMap = m;
      t.typeDescMap = f;
    },
    16515: function (e, t, o) {
      "use strict";

      var r = o(66340);
      var n = o(50495);
      var a = o(58908);
      const i = "[ Federation Runtime ]";
      const s = n.createLogger(i);
      function l(e, t) {
        if (!e) {
          c(t);
        }
      }
      function c(e) {
        if (e instanceof Error) {
          e.message = `${i}: ${e.message}`;
          throw e;
        }
        throw new Error(`${i}: ${e}`);
      }
      function u(e) {
        if (e instanceof Error) {
          e.message = `${i}: ${e.message}`;
          s.warn(e);
        } else {
          s.warn(e);
        }
      }
      function d(e, t) {
        if (e.findIndex((e) => e === t) === -1) {
          e.push(t);
        }
        return e;
      }
      function p(e) {
        if ("version" in e && e.version) {
          return `${e.name}:${e.version}`;
        } else if ("entry" in e && e.entry) {
          return `${e.name}:${e.entry}`;
        } else {
          return `${e.name}`;
        }
      }
      function m(e) {
        return e.entry !== undefined;
      }
      function f(e) {
        return !e.entry.includes(".json") && e.entry.includes(".js");
      }
      function h(e) {
        return e && typeof e == "object";
      }
      const _ = Object.prototype.toString;
      function g(e) {
        if (Array.isArray(e)) {
          return e;
        } else {
          return [e];
        }
      }
      function b(e) {
        const t = {
          url: "",
          type: "global",
          globalName: "",
        };
        if (n.isBrowserEnv()) {
          if ("remoteEntry" in e) {
            return {
              url: e.remoteEntry,
              type: e.remoteEntryType,
              globalName: e.globalName,
            };
          } else {
            return t;
          }
        } else if ("ssrRemoteEntry" in e) {
          return {
            url: e.ssrRemoteEntry || t.url,
            type: e.ssrRemoteEntryType || t.type,
            globalName: e.globalName,
          };
        } else {
          return t;
        }
      }
      const y = typeof globalThis == "object" ? globalThis : window;
      const E = (() => {
        try {
          return document.defaultView;
        } catch (e) {
          return y;
        }
      })();
      const S = E;
      function v(e, t, o) {
        Object.defineProperty(e, t, {
          value: o,
          configurable: false,
          writable: true,
        });
      }
      function N(e, t) {
        return Object.hasOwnProperty.call(e, t);
      }
      if (!N(y, "__GLOBAL_LOADING_REMOTE_ENTRY__")) {
        v(y, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
      }
      const w = y.__GLOBAL_LOADING_REMOTE_ENTRY__;
      function R(e) {
        var t;
        var o;
        var r;
        var n;
        var a;
        var i;
        if (N(e, "__VMOK__") && !N(e, "__FEDERATION__")) {
          v(e, "__FEDERATION__", e.__VMOK__);
        }
        if (!N(e, "__FEDERATION__")) {
          v(e, "__FEDERATION__", {
            __GLOBAL_PLUGIN__: [],
            __INSTANCES__: [],
            moduleInfo: {},
            __SHARE__: {},
            __MANIFEST_LOADING__: {},
            __PRELOADED_MAP__: new Map(),
          });
          v(e, "__VMOK__", e.__FEDERATION__);
        }
        if ((t = e.__FEDERATION__).__GLOBAL_PLUGIN__ == null) {
          t.__GLOBAL_PLUGIN__ = [];
        }
        if ((o = e.__FEDERATION__).__INSTANCES__ == null) {
          o.__INSTANCES__ = [];
        }
        if ((r = e.__FEDERATION__).moduleInfo == null) {
          r.moduleInfo = {};
        }
        if ((n = e.__FEDERATION__).__SHARE__ == null) {
          n.__SHARE__ = {};
        }
        if ((a = e.__FEDERATION__).__MANIFEST_LOADING__ == null) {
          a.__MANIFEST_LOADING__ = {};
        }
        if ((i = e.__FEDERATION__).__PRELOADED_MAP__ == null) {
          i.__PRELOADED_MAP__ = new Map();
        }
      }
      function I() {
        y.__FEDERATION__.__GLOBAL_PLUGIN__ = [];
        y.__FEDERATION__.__INSTANCES__ = [];
        y.__FEDERATION__.moduleInfo = {};
        y.__FEDERATION__.__SHARE__ = {};
        y.__FEDERATION__.__MANIFEST_LOADING__ = {};
        Object.keys(w).forEach((e) => {
          delete w[e];
        });
      }
      function O(e) {
        y.__FEDERATION__.__INSTANCES__.push(e);
      }
      function T() {
        return y.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
      }
      function k(e, t = n.isDebugMode()) {
        if (t) {
          y.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = e;
          y.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.11.1";
        }
      }
      function M(e, t) {
        if (typeof t == "string") {
          if (e[t]) {
            return {
              value: e[t],
              key: t,
            };
          }
          {
            const o = Object.keys(e);
            for (const r of o) {
              const [o, n] = r.split(":");
              const a = `${o}:${t}`;
              const i = e[a];
              if (i) {
                return {
                  value: i,
                  key: a,
                };
              }
            }
            return {
              value: undefined,
              key: t,
            };
          }
        }
        throw new Error("key must be string");
      }
      R(y);
      R(E);
      const A = () => E.__FEDERATION__.moduleInfo;
      const $ = (e, t) => {
        const o = M(t, p(e)).value;
        if (o && !o.version && "version" in e && e.version) {
          o.version = e.version;
        }
        if (o) {
          return o;
        }
        if ("version" in e && e.version) {
          const { version: t } = e;
          const o = p(r._object_without_properties_loose(e, ["version"]));
          const n = M(E.__FEDERATION__.moduleInfo, o).value;
          if ((n == null ? undefined : n.version) === t) {
            return n;
          }
        }
      };
      const P = (e) => $(e, E.__FEDERATION__.moduleInfo);
      const x = (e, t) => {
        const o = p(e);
        E.__FEDERATION__.moduleInfo[o] = t;
        return E.__FEDERATION__.moduleInfo;
      };
      const D = (e) => {
        E.__FEDERATION__.moduleInfo = r._extends(
          {},
          E.__FEDERATION__.moduleInfo,
          e,
        );
        return () => {
          const t = Object.keys(e);
          for (const e of t) {
            delete E.__FEDERATION__.moduleInfo[e];
          }
        };
      };
      const L = (e, t) => {
        const o = t || `__FEDERATION_${e}:custom__`;
        return {
          remoteEntryKey: o,
          entryExports: y[o],
        };
      };
      const F = (e) => {
        const { __GLOBAL_PLUGIN__: t } = E.__FEDERATION__;
        e.forEach((e) => {
          if (t.findIndex((t) => t.name === e.name) === -1) {
            t.push(e);
          } else {
            u(`The plugin ${e.name} has been registered.`);
          }
        });
      };
      const C = () => E.__FEDERATION__.__GLOBAL_PLUGIN__;
      const H = (e) => y.__FEDERATION__.__PRELOADED_MAP__.get(e);
      const j = (e) => y.__FEDERATION__.__PRELOADED_MAP__.set(e, true);
      const q = "default";
      const G = "global";
      const U = "[0-9A-Za-z-]+";
      const B = `(?:\\+(${U}(?:\\.${U})*))`;
      const W = "0|[1-9]\\d*";
      const V = "[0-9]+";
      const K = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
      const z = `(?:${V}|${K})`;
      const Y = `(?:${W}|${K})`;
      const X = `(?:-(${Y}(?:\\.${Y})*))`;
      const J = `${W}|x|X|\\*`;
      const Z = `[v=\\s]*(${J})(?:\\.(${J})(?:\\.(${J})(?:${X})?${B}?)?)?`;
      const Q = `^\\s*(${Z})\\s+-\\s+(${Z})\\s*$`;
      const ee = "((?:<|>)?=?)";
      const te = `(\\s*)${ee}\\s*(${`[v=\\s]*${`(${V})\\.(${V})\\.(${V})`}${`(?:-?(${z}(?:\\.${z})*))`}?${B}?`}|${Z})`;
      const oe = "(?:~>?)";
      const re = `(\\s*)${oe}\\s+`;
      const ne = "(?:\\^)";
      const ae = `(\\s*)${ne}\\s+`;
      const ie = `^${ne}${Z}$`;
      const se = `^${oe}${Z}$`;
      const le = `^${ee}\\s*${Z}$`;
      const ce = `^${ee}\\s*(${`v?${`(${W})\\.(${W})\\.(${W})`}${X}?${B}?`})$|^$`;
      function ue(e) {
        return new RegExp(e);
      }
      function de(e) {
        return !e || e.toLowerCase() === "x" || e === "*";
      }
      function pe(...e) {
        return (t) => e.reduce((e, t) => t(e), t);
      }
      function me(e) {
        return e.match(ue(ce));
      }
      function fe(e, t, o, r) {
        const n = `${e}.${t}.${o}`;
        if (r) {
          return `${n}-${r}`;
        } else {
          return n;
        }
      }
      function he(e) {
        return e.replace(ue(Q), (e, t, o, r, n, a, i, s, l, c, u, d) =>
          `${(t = de(o) ? "" : de(r) ? `>=${o}.0.0` : de(n) ? `>=${o}.${r}.0` : `>=${t}`)} ${(s = de(l) ? "" : de(c) ? `<${Number(l) + 1}.0.0-0` : de(u) ? `<${l}.${Number(c) + 1}.0-0` : d ? `<=${l}.${c}.${u}-${d}` : `<=${s}`)}`.trim(),
        );
      }
      function _e(e) {
        return e.replace(ue(te), "$1$2$3");
      }
      function ge(e) {
        return e.replace(ue(re), "$1~");
      }
      function be(e) {
        return e.replace(ue(ae), "$1^");
      }
      function ye(e) {
        return e
          .trim()
          .split(/\s+/)
          .map((e) =>
            e.replace(ue(ie), (e, t, o, r, n) =>
              de(t)
                ? ""
                : de(o)
                  ? `>=${t}.0.0 <${Number(t) + 1}.0.0-0`
                  : de(r)
                    ? t === "0"
                      ? `>=${t}.${o}.0 <${t}.${Number(o) + 1}.0-0`
                      : `>=${t}.${o}.0 <${Number(t) + 1}.0.0-0`
                    : n
                      ? t === "0"
                        ? o === "0"
                          ? `>=${t}.${o}.${r}-${n} <${t}.${o}.${Number(r) + 1}-0`
                          : `>=${t}.${o}.${r}-${n} <${t}.${Number(o) + 1}.0-0`
                        : `>=${t}.${o}.${r}-${n} <${Number(t) + 1}.0.0-0`
                      : t === "0"
                        ? o === "0"
                          ? `>=${t}.${o}.${r} <${t}.${o}.${Number(r) + 1}-0`
                          : `>=${t}.${o}.${r} <${t}.${Number(o) + 1}.0-0`
                        : `>=${t}.${o}.${r} <${Number(t) + 1}.0.0-0`,
            ),
          )
          .join(" ");
      }
      function Ee(e) {
        return e
          .trim()
          .split(/\s+/)
          .map((e) =>
            e.replace(ue(se), (e, t, o, r, n) =>
              de(t)
                ? ""
                : de(o)
                  ? `>=${t}.0.0 <${Number(t) + 1}.0.0-0`
                  : de(r)
                    ? `>=${t}.${o}.0 <${t}.${Number(o) + 1}.0-0`
                    : n
                      ? `>=${t}.${o}.${r}-${n} <${t}.${Number(o) + 1}.0-0`
                      : `>=${t}.${o}.${r} <${t}.${Number(o) + 1}.0-0`,
            ),
          )
          .join(" ");
      }
      function Se(e) {
        return e
          .split(/\s+/)
          .map((e) =>
            e.trim().replace(ue(le), (e, t, o, r, n, a) => {
              const i = de(o);
              const s = i || de(r);
              const l = s || de(n);
              if (t === "=" && l) {
                t = "";
              }
              a = "";
              if (i) {
                if (t === ">" || t === "<") {
                  return "<0.0.0-0";
                } else {
                  return "*";
                }
              } else if (t && l) {
                if (s) {
                  r = 0;
                }
                n = 0;
                if (t === ">") {
                  t = ">=";
                  if (s) {
                    o = Number(o) + 1;
                    r = 0;
                    n = 0;
                  } else {
                    r = Number(r) + 1;
                    n = 0;
                  }
                } else if (t === "<=") {
                  t = "<";
                  if (s) {
                    o = Number(o) + 1;
                  } else {
                    r = Number(r) + 1;
                  }
                }
                if (t === "<") {
                  a = "-0";
                }
                return `${t + o}.${r}.${n}${a}`;
              } else if (s) {
                return `>=${o}.0.0${a} <${Number(o) + 1}.0.0-0`;
              } else if (l) {
                return `>=${o}.${r}.0${a} <${o}.${Number(r) + 1}.0-0`;
              } else {
                return e;
              }
            }),
          )
          .join(" ");
      }
      function ve(e) {
        return e.trim().replace(ue("(<|>)?=?\\s*\\*"), "");
      }
      function Ne(e, t) {
        if ((e = Number(e) || e) > (t = Number(t) || t)) {
          return 1;
        } else if (e === t) {
          return 0;
        } else {
          return -1;
        }
      }
      function we(e, t) {
        return (
          Ne(e.major, t.major) ||
          Ne(e.minor, t.minor) ||
          Ne(e.patch, t.patch) ||
          (function (e, t) {
            const { preRelease: o } = e;
            const { preRelease: r } = t;
            if (o === undefined && Boolean(r)) {
              return 1;
            }
            if (Boolean(o) && r === undefined) {
              return -1;
            }
            if (o === undefined && r === undefined) {
              return 0;
            }
            for (let e = 0, t = o.length; e <= t; e++) {
              const t = o[e];
              const n = r[e];
              if (t !== n) {
                if (t === undefined && n === undefined) {
                  return 0;
                } else if (t) {
                  if (n) {
                    return Ne(t, n);
                  } else {
                    return -1;
                  }
                } else {
                  return 1;
                }
              }
            }
            return 0;
          })(e, t)
        );
      }
      function Re(e, t) {
        return e.version === t.version;
      }
      function Ie(e, t) {
        switch (e.operator) {
          case "":
          case "=":
            return Re(e, t);
          case ">":
            return we(e, t) < 0;
          case ">=":
            return Re(e, t) || we(e, t) < 0;
          case "<":
            return we(e, t) > 0;
          case "<=":
            return Re(e, t) || we(e, t) > 0;
          case undefined:
            return true;
          default:
            return false;
        }
      }
      function Oe(e, t) {
        if (!e) {
          return false;
        }
        const o = (function (e) {
          return pe(he, _e, ge, be)(e.trim()).split(/\s+/).join(" ");
        })(t);
        const r = o
          .split(" ")
          .map((e) =>
            (function (e) {
              return pe(ye, Ee, Se, ve)(e);
            })(e),
          )
          .join(" ");
        const n = r
          .split(/\s+/)
          .map((e) => e.trim().replace(ue("^\\s*>=\\s*0.0.0\\s*$"), ""));
        const a = me(e);
        if (!a) {
          return false;
        }
        const [, i, , s, l, c, u] = a;
        const d = {
          operator: i,
          version: fe(s, l, c, u),
          major: s,
          minor: l,
          patch: c,
          preRelease: u == null ? undefined : u.split("."),
        };
        for (const e of n) {
          const t = me(e);
          if (!t) {
            return false;
          }
          const [, o, , r, n, a, i] = t;
          if (
            !Ie(
              {
                operator: o,
                version: fe(r, n, a, i),
                major: r,
                minor: n,
                patch: a,
                preRelease: i == null ? undefined : i.split("."),
              },
              d,
            )
          ) {
            return false;
          }
        }
        return true;
      }
      function Te(e, t) {
        const o = t.shared || {};
        const n = t.name;
        const a = Object.keys(o).reduce((e, a) => {
          const i = g(o[a]);
          e[a] = e[a] || [];
          i.forEach((o) => {
            e[a].push(
              (function (e, t, o, n) {
                let a;
                a =
                  "get" in e
                    ? e.get
                    : "lib" in e
                      ? () => Promise.resolve(e.lib)
                      : () =>
                          Promise.resolve(() => {
                            throw new Error(`Can not get shared '${o}'!`);
                          });
                if (e.strategy) {
                  u(
                    '"shared.strategy is deprecated, please set in initOptions.shareStrategy instead!"',
                  );
                }
                return r._extends(
                  {
                    deps: [],
                    useIn: [],
                    from: t,
                    loading: null,
                  },
                  e,
                  {
                    shareConfig: r._extends(
                      {
                        requiredVersion: `^${e.version}`,
                        singleton: false,
                        eager: false,
                        strictVersion: false,
                      },
                      e.shareConfig,
                    ),
                    get: a,
                    loaded:
                      !!(e == null ? undefined : e.loaded) ||
                      !!("lib" in e) ||
                      undefined,
                    version: e.version ?? "0",
                    scope: Array.isArray(e.scope)
                      ? e.scope
                      : [e.scope ?? "default"],
                    strategy: (e.strategy ?? n) || "version-first",
                  },
                );
              })(o, n, a, t.shareStrategy),
            );
          });
          return e;
        }, {});
        const i = r._extends({}, e.shared);
        Object.keys(a).forEach((e) => {
          if (i[e]) {
            a[e].forEach((t) => {
              if (!i[e].find((e) => e.version === t.version)) {
                i[e].push(t);
              }
            });
          } else {
            i[e] = a[e];
          }
        });
        return {
          shared: i,
          shareInfos: a,
        };
      }
      function ke(e, t) {
        const o = (e) => {
          if (!Number.isNaN(Number(e))) {
            const t = e.split(".");
            let o = e;
            for (let e = 0; e < 3 - t.length; e++) {
              o += ".0";
            }
            return o;
          }
          return e;
        };
        return !!Oe(o(e), `<=${o(t)}`);
      }
      const Me = (e, t) => {
        const o =
          t ||
          function (e, t) {
            return ke(e, t);
          };
        return Object.keys(e).reduce(
          (e, t) => (e ? (o(e, t) || e === "0" ? t : e) : t),
          0,
        );
      };
      const Ae = (e) => Boolean(e.loaded) || typeof e.lib == "function";
      function $e(e, t, o) {
        const r = e[t][o];
        return Me(e[t][o], function (e, t) {
          return !Ae(r[e]) && ke(e, t);
        });
      }
      function Pe(e, t, o) {
        const r = e[t][o];
        return Me(e[t][o], function (e, t) {
          const o = (e) => Ae(e) || ((e) => Boolean(e.loading))(e);
          if (o(r[t])) {
            return !o(r[e]) || Boolean(ke(e, t));
          } else {
            return !o(r[e]) && ke(e, t);
          }
        });
      }
      function xe(e) {
        if (e === "loaded-first") {
          return Pe;
        } else {
          return $e;
        }
      }
      function De(e, t, o, r) {
        if (!e) {
          return;
        }
        const { shareConfig: n, scope: a = q, strategy: i } = o;
        const s = Array.isArray(a) ? a : [a];
        for (const a of s) {
          if (n && e[a] && e[a][t]) {
            const { requiredVersion: s } = n;
            const l = xe(i)(e, a, t);
            const d = () => {
              if (n.singleton) {
                if (typeof s == "string" && !Oe(l, s)) {
                  const r = `Version ${l} from ${l && e[a][t][l].from} of shared singleton module ${t} does not satisfy the requirement of ${o.from} which needs ${s})`;
                  if (n.strictVersion) {
                    c(r);
                  } else {
                    u(r);
                  }
                }
                return e[a][t][l];
              }
              if (s === false || s === "*") {
                return e[a][t][l];
              }
              if (Oe(l, s)) {
                return e[a][t][l];
              }
              for (const [o, r] of Object.entries(e[a][t])) {
                if (Oe(o, s)) {
                  return r;
                }
              }
            };
            const p = {
              shareScopeMap: e,
              scope: a,
              pkgName: t,
              version: l,
              GlobalFederation: S.__FEDERATION__,
              resolver: d,
            };
            return (r.emit(p) || p).resolver();
          }
        }
      }
      function Le() {
        return S.__FEDERATION__.__SHARE__;
      }
      function Fe(e) {
        const { pkgName: t, extraOptions: o, shareInfos: r } = e;
        const a =
          (o == null ? undefined : o.resolver) ??
          ((e) => {
            if (!e) {
              return;
            }
            const t = {};
            e.forEach((e) => {
              t[e.version] = e;
            });
            const o = Me(t, function (e, o) {
              return !Ae(t[e]) && ke(e, o);
            });
            return t[o];
          });
        return Object.assign(
          {},
          a(r[t]),
          o == null ? undefined : o.customShareInfo,
        );
      }
      var Ce = {
        global: {
          Global: S,
          nativeGlobal: E,
          resetFederationGlobalInfo: I,
          setGlobalFederationInstance: O,
          getGlobalFederationConstructor: T,
          setGlobalFederationConstructor: k,
          getInfoWithoutType: M,
          getGlobalSnapshot: A,
          getTargetSnapshotInfoByModuleInfo: $,
          getGlobalSnapshotInfoByModuleInfo: P,
          setGlobalSnapshotInfoByModuleInfo: x,
          addGlobalSnapshot: D,
          getRemoteEntryExports: L,
          registerGlobalPlugins: F,
          getGlobalHostPlugins: C,
          getPreloaded: H,
          setPreloaded: j,
        },
        share: {
          getRegisteredShare: De,
          getGlobalShareScope: Le,
        },
      };
      function He(e, t) {
        for (const o of e) {
          const e = t.startsWith(o.name);
          let r = t.replace(o.name, "");
          if (e) {
            if (r.startsWith("/")) {
              r = `.${r}`;
              return {
                pkgNameOrAlias: o.name,
                expose: r,
                remote: o,
              };
            }
            if (r === "") {
              return {
                pkgNameOrAlias: o.name,
                expose: ".",
                remote: o,
              };
            }
          }
          const n = o.alias && t.startsWith(o.alias);
          let a = o.alias && t.replace(o.alias, "");
          if (o.alias && n) {
            if (a && a.startsWith("/")) {
              a = `.${a}`;
              return {
                pkgNameOrAlias: o.alias,
                expose: a,
                remote: o,
              };
            }
            if (a === "") {
              return {
                pkgNameOrAlias: o.alias,
                expose: ".",
                remote: o,
              };
            }
          }
        }
      }
      async function je({
        remoteInfo: e,
        remoteEntryExports: t,
        loaderHook: o,
      }) {
        const { entry: r, entryGlobalName: i, name: s, type: c } = e;
        switch (c) {
          case "esm":
          case "module":
            return (async function ({ entry: e, remoteEntryExports: t }) {
              return new Promise((o, r) => {
                try {
                  if (t) {
                    o(t);
                  } else if (
                    typeof FEDERATION_ALLOW_NEW_FUNCTION != "undefined"
                  ) {
                    new Function(
                      "callbacks",
                      `import("${e}").then(callbacks[0]).catch(callbacks[1])`,
                    )([o, r]);
                  } else {
                    import(e).then(o).catch(r);
                  }
                } catch (e) {
                  r(e);
                }
              });
            })({
              entry: r,
              remoteEntryExports: t,
            });
          case "system":
            return (async function ({ entry: e, remoteEntryExports: t }) {
              return new Promise((o, r) => {
                try {
                  if (t) {
                    o(t);
                  } else {
                    new Function(
                      "callbacks",
                      `System.import("${e}").then(callbacks[0]).catch(callbacks[1])`,
                    )([o, r]);
                  }
                } catch (e) {
                  r(e);
                }
              });
            })({
              entry: r,
              remoteEntryExports: t,
            });
          default:
            return (async function ({
              name: e,
              globalName: t,
              entry: o,
              loaderHook: r,
            }) {
              const { entryExports: i } = L(e, t);
              return (
                i ||
                n
                  .loadScript(o, {
                    attrs: {},
                    createScriptHook: (e, t) => {
                      const o = r.lifecycle.createScript.emit({
                        url: e,
                        attrs: t,
                      });
                      if (o) {
                        if (
                          o instanceof HTMLScriptElement ||
                          "script" in o ||
                          "timeout" in o
                        ) {
                          return o;
                        } else {
                          return undefined;
                        }
                      }
                    },
                  })
                  .then(() => {
                    const { remoteEntryKey: r, entryExports: n } = L(e, t);
                    l(
                      n,
                      a.getShortErrorMsg(a.RUNTIME_001, a.runtimeDescMap, {
                        remoteName: e,
                        remoteEntryUrl: o,
                        remoteEntryKey: r,
                      }),
                    );
                    return n;
                  })
                  .catch((t) => {
                    l(
                      undefined,
                      a.getShortErrorMsg(a.RUNTIME_008, a.runtimeDescMap, {
                        remoteName: e,
                        resourceUrl: o,
                      }),
                    );
                    throw t;
                  })
              );
            })({
              entry: r,
              globalName: i,
              name: s,
              loaderHook: o,
            });
        }
      }
      function qe(e) {
        const { entry: t, name: o } = e;
        return n.composeKeyWithSeparator(o, t);
      }
      async function Ge({ origin: e, remoteEntryExports: t, remoteInfo: o }) {
        const r = qe(o);
        if (t) {
          return t;
        }
        if (!w[r]) {
          const i = e.remoteHandler.hooks.lifecycle.loadEntry;
          const s = e.loaderHook;
          w[r] = i
            .emit({
              loaderHook: s,
              remoteInfo: o,
              remoteEntryExports: t,
            })
            .then(
              (e) =>
                e ||
                (n.isBrowserEnv()
                  ? je({
                      remoteInfo: o,
                      remoteEntryExports: t,
                      loaderHook: s,
                    })
                  : (async function ({ remoteInfo: e, loaderHook: t }) {
                      const {
                        entry: o,
                        entryGlobalName: r,
                        name: i,
                        type: s,
                      } = e;
                      const { entryExports: c } = L(i, r);
                      return (
                        c ||
                        n
                          .loadScriptNode(o, {
                            attrs: {
                              name: i,
                              globalName: r,
                              type: s,
                            },
                            loaderHook: {
                              createScriptHook: (e, o = {}) => {
                                const r = t.lifecycle.createScript.emit({
                                  url: e,
                                  attrs: o,
                                });
                                if (r) {
                                  if ("url" in r) {
                                    return r;
                                  } else {
                                    return undefined;
                                  }
                                }
                              },
                            },
                          })
                          .then(() => {
                            const { remoteEntryKey: e, entryExports: t } = L(
                              i,
                              r,
                            );
                            l(
                              t,
                              a.getShortErrorMsg(
                                a.RUNTIME_001,
                                a.runtimeDescMap,
                                {
                                  remoteName: i,
                                  remoteEntryUrl: o,
                                  remoteEntryKey: e,
                                },
                              ),
                            );
                            return t;
                          })
                          .catch((e) => {
                            throw e;
                          })
                      );
                    })({
                      remoteInfo: o,
                      loaderHook: s,
                    })),
            );
        }
        return w[r];
      }
      function Ue(e) {
        return r._extends({}, e, {
          entry: "entry" in e ? e.entry : "",
          type: e.type || G,
          entryGlobalName: e.entryGlobalName || e.name,
          shareScope: e.shareScope || q,
        });
      }
      let Be = class {
        async getEntry() {
          if (this.remoteEntryExports) {
            return this.remoteEntryExports;
          }
          let e;
          try {
            e = await Ge({
              origin: this.host,
              remoteInfo: this.remoteInfo,
              remoteEntryExports: this.remoteEntryExports,
            });
          } catch (t) {
            const o = qe(this.remoteInfo);
            e = await this.host.loaderHook.lifecycle.loadEntryError.emit({
              getRemoteEntry: Ge,
              origin: this.host,
              remoteInfo: this.remoteInfo,
              remoteEntryExports: this.remoteEntryExports,
              globalLoading: w,
              uniqueKey: o,
            });
          }
          l(
            e,
            `remoteEntryExports is undefined \n ${n.safeToString(this.remoteInfo)}`,
          );
          this.remoteEntryExports = e;
          return this.remoteEntryExports;
        }
        async get(e, t, o, n) {
          const { loadFactory: i = true } = o || {
            loadFactory: true,
          };
          const s = await this.getEntry();
          if (!this.inited) {
            const t = this.host.shareScopeMap;
            const o = this.remoteInfo.shareScope || "default";
            t[o] ||= {};
            const i = t[o];
            const l = [];
            const u = {
              version: this.remoteInfo.version || "",
            };
            Object.defineProperty(u, "shareScopeMap", {
              value: t,
              enumerable: false,
            });
            const d = await this.host.hooks.lifecycle.beforeInitContainer.emit({
              shareScope: i,
              remoteEntryInitOptions: u,
              initScope: l,
              remoteInfo: this.remoteInfo,
              origin: this.host,
            });
            if ((s == null ? undefined : s.init) === undefined) {
              c(
                a.getShortErrorMsg(a.RUNTIME_002, a.runtimeDescMap, {
                  remoteName: name,
                  remoteEntryUrl: this.remoteInfo.entry,
                  remoteEntryKey: this.remoteInfo.entryGlobalName,
                }),
              );
            }
            await s.init(d.shareScope, d.initScope, d.remoteEntryInitOptions);
            await this.host.hooks.lifecycle.initContainer.emit(
              r._extends({}, d, {
                id: e,
                remoteSnapshot: n,
                remoteEntryExports: s,
              }),
            );
          }
          let u;
          this.lib = s;
          this.inited = true;
          u = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
            remoteEntryExports: s,
            expose: t,
            moduleInfo: this.remoteInfo,
          });
          u ||= await s.get(t);
          l(u, `${p(this.remoteInfo)} remote don't export ${t}.`);
          const d = ((e, t) => {
            let o;
            o = e.endsWith("/") ? e.slice(0, -1) : e;
            if (t.startsWith(".")) {
              t = t.slice(1);
            }
            o += t;
            return o;
          })(this.remoteInfo.name, t);
          const m = this.wraperFactory(u, d);
          if (!i) {
            return m;
          }
          return await m();
        }
        wraperFactory(e, t) {
          function o(e, t) {
            if (
              e &&
              typeof e == "object" &&
              Object.isExtensible(e) &&
              !Object.getOwnPropertyDescriptor(e, Symbol.for("mf_module_id"))
            ) {
              Object.defineProperty(e, Symbol.for("mf_module_id"), {
                value: t,
                enumerable: false,
              });
            }
          }
          if (e instanceof Promise) {
            return async () => {
              const r = await e();
              o(r, t);
              return r;
            };
          } else {
            return () => {
              const r = e();
              o(r, t);
              return r;
            };
          }
        }
        constructor({ remoteInfo: e, host: t }) {
          this.inited = false;
          this.lib = undefined;
          this.remoteInfo = e;
          this.host = t;
        }
      };
      class We {
        on(e) {
          if (typeof e == "function") {
            this.listeners.add(e);
          }
        }
        once(e) {
          const t = this;
          this.on(function o(...r) {
            t.remove(o);
            return e.apply(null, r);
          });
        }
        emit(...e) {
          let t;
          if (this.listeners.size > 0) {
            this.listeners.forEach((o) => {
              t = o(...e);
            });
          }
          return t;
        }
        remove(e) {
          this.listeners.delete(e);
        }
        removeAll() {
          this.listeners.clear();
        }
        constructor(e) {
          this.type = "";
          this.listeners = new Set();
          if (e) {
            this.type = e;
          }
        }
      }
      class Ve extends We {
        emit(...e) {
          let t;
          const o = Array.from(this.listeners);
          if (o.length > 0) {
            let r = 0;
            const n = (t) =>
              t !== false &&
              (r < o.length
                ? Promise.resolve(o[r++].apply(null, e)).then(n)
                : t);
            t = n();
          }
          return Promise.resolve(t);
        }
      }
      function Ke(e, t) {
        if (!h(t)) {
          return false;
        }
        if (e !== t) {
          for (const o in e) {
            if (!(o in t)) {
              return false;
            }
          }
        }
        return true;
      }
      class ze extends We {
        emit(e) {
          if (!h(e)) {
            c(`The data for the "${this.type}" hook should be an object.`);
          }
          for (const t of this.listeners) {
            try {
              const o = t(e);
              if (!Ke(e, o)) {
                this.onerror(
                  `A plugin returned an unacceptable value for the "${this.type}" type.`,
                );
                break;
              }
              e = o;
            } catch (e) {
              u(e);
              this.onerror(e);
            }
          }
          return e;
        }
        constructor(e) {
          super();
          this.onerror = c;
          this.type = e;
        }
      }
      class Ye extends We {
        emit(e) {
          if (!h(e)) {
            c(
              `The response data for the "${this.type}" hook must be an object.`,
            );
          }
          const t = Array.from(this.listeners);
          if (t.length > 0) {
            let o = 0;
            const r = (t) => {
              u(t);
              this.onerror(t);
              return e;
            };
            const n = (a) => {
              if (Ke(e, a)) {
                e = a;
                if (o < t.length) {
                  try {
                    return Promise.resolve(t[o++](e)).then(n, r);
                  } catch (e) {
                    return r(e);
                  }
                }
              } else {
                this.onerror(
                  `A plugin returned an incorrect value for the "${this.type}" type.`,
                );
              }
              return e;
            };
            return Promise.resolve(n(e));
          }
          return Promise.resolve(e);
        }
        constructor(e) {
          super();
          this.onerror = c;
          this.type = e;
        }
      }
      class Xe {
        applyPlugin(e) {
          var t;
          l(
            ((t = e), _.call(t) === "[object Object]"),
            "Plugin configuration is invalid.",
          );
          const o = e.name;
          l(o, "A name must be provided by the plugin.");
          if (!this.registerPlugins[o]) {
            this.registerPlugins[o] = e;
            Object.keys(this.lifecycle).forEach((t) => {
              const o = e[t];
              if (o) {
                this.lifecycle[t].on(o);
              }
            });
          }
        }
        removePlugin(e) {
          l(e, "A name is required.");
          const t = this.registerPlugins[e];
          l(t, `The plugin "${e}" is not registered.`);
          Object.keys(t).forEach((e) => {
            if (e !== "name") {
              this.lifecycle[e].remove(t[e]);
            }
          });
        }
        inherit({ lifecycle: e, registerPlugins: t }) {
          Object.keys(e).forEach((t) => {
            l(
              !this.lifecycle[t],
              `The hook "${t}" has a conflict and cannot be inherited.`,
            );
            this.lifecycle[t] = e[t];
          });
          Object.keys(t).forEach((e) => {
            l(
              !this.registerPlugins[e],
              `The plugin "${e}" has a conflict and cannot be inherited.`,
            );
            this.applyPlugin(t[e]);
          });
        }
        constructor(e) {
          this.registerPlugins = {};
          this.lifecycle = e;
          this.lifecycleKeys = Object.keys(e);
        }
      }
      function Je(e) {
        return r._extends(
          {
            resourceCategory: "sync",
            share: true,
            depsRemote: true,
            prefetchInterface: false,
          },
          e,
        );
      }
      function Ze(e, t, o, r = true) {
        const { cssAssets: a, jsAssetsWithoutEntry: i, entryAssets: s } = o;
        if (t.options.inBrowser) {
          s.forEach((o) => {
            const { moduleInfo: r } = o;
            const n = t.moduleCache.get(e.name);
            Ge(
              n
                ? {
                    origin: t,
                    remoteInfo: r,
                    remoteEntryExports: n.remoteEntryExports,
                  }
                : {
                    origin: t,
                    remoteInfo: r,
                    remoteEntryExports: undefined,
                  },
            );
          });
          if (r) {
            const e = {
              rel: "preload",
              as: "style",
            };
            a.forEach((o) => {
              const { link: r, needAttach: a } = n.createLink({
                url: o,
                cb: () => {},
                attrs: e,
                createLinkHook: (e, o) => {
                  const r = t.loaderHook.lifecycle.createLink.emit({
                    url: e,
                    attrs: o,
                  });
                  if (r instanceof HTMLLinkElement) {
                    return r;
                  }
                },
              });
              if (a) {
                document.head.appendChild(r);
              }
            });
          } else {
            const e = {
              rel: "stylesheet",
              type: "text/css",
            };
            a.forEach((o) => {
              const { link: r, needAttach: a } = n.createLink({
                url: o,
                cb: () => {},
                attrs: e,
                createLinkHook: (e, o) => {
                  const r = t.loaderHook.lifecycle.createLink.emit({
                    url: e,
                    attrs: o,
                  });
                  if (r instanceof HTMLLinkElement) {
                    return r;
                  }
                },
                needDeleteLink: false,
              });
              if (a) {
                document.head.appendChild(r);
              }
            });
          }
          if (r) {
            const e = {
              rel: "preload",
              as: "script",
            };
            i.forEach((o) => {
              const { link: r, needAttach: a } = n.createLink({
                url: o,
                cb: () => {},
                attrs: e,
                createLinkHook: (e, o) => {
                  const r = t.loaderHook.lifecycle.createLink.emit({
                    url: e,
                    attrs: o,
                  });
                  if (r instanceof HTMLLinkElement) {
                    return r;
                  }
                },
              });
              if (a) {
                document.head.appendChild(r);
              }
            });
          } else {
            const o = {
              fetchpriority: "high",
              type:
                (e == null ? undefined : e.type) === "module"
                  ? "module"
                  : "text/javascript",
            };
            i.forEach((e) => {
              const { script: r, needAttach: a } = n.createScript({
                url: e,
                cb: () => {},
                attrs: o,
                createScriptHook: (e, o) => {
                  const r = t.loaderHook.lifecycle.createScript.emit({
                    url: e,
                    attrs: o,
                  });
                  if (r instanceof HTMLScriptElement) {
                    return r;
                  }
                },
                needDeleteScript: true,
              });
              if (a) {
                document.head.appendChild(r);
              }
            });
          }
        }
      }
      function Qe(e, t) {
        const o = b(t);
        if (!o.url) {
          c(`The attribute remoteEntry of ${e.name} must not be undefined.`);
        }
        let r = n.getResourceUrl(t, o.url);
        if (!n.isBrowserEnv() && !r.startsWith("http")) {
          r = `https:${r}`;
        }
        e.type = o.type;
        e.entryGlobalName = o.globalName;
        e.entry = r;
        e.version = t.version;
        e.buildVersion = t.buildVersion;
      }
      function et(e) {
        const t = e.split(":");
        if (t.length === 1) {
          return {
            name: t[0],
            version: undefined,
          };
        } else if (t.length === 2) {
          return {
            name: t[0],
            version: t[1],
          };
        } else {
          return {
            name: t[1],
            version: t[2],
          };
        }
      }
      function tt(e, t, o, r, a = {}, i) {
        const s = p(t);
        const { value: l } = M(e, s);
        const c = i || l;
        if (c && !n.isManifestProvider(c) && (o(c, t, r), c.remotesInfo)) {
          const t = Object.keys(c.remotesInfo);
          for (const r of t) {
            if (a[r]) {
              continue;
            }
            a[r] = true;
            const t = et(r);
            const n = c.remotesInfo[r];
            tt(
              e,
              {
                name: t.name,
                version: n.matchedVersion,
              },
              o,
              false,
              a,
              undefined,
            );
          }
        }
      }
      const ot = (e, t) =>
        document.querySelector(`${e}[${e === "link" ? "href" : "src"}="${t}"]`);
      function rt(e, t, o, r, a) {
        const i = [];
        const s = [];
        const l = [];
        const c = new Set();
        const u = new Set();
        const { options: d } = e;
        const { preloadConfig: p } = t;
        const { depsRemote: m } = p;
        tt(
          r,
          o,
          (t, o, r) => {
            let a;
            if (r) {
              a = p;
            } else if (Array.isArray(m)) {
              const e = m.find(
                (e) => e.nameOrAlias === o.name || e.nameOrAlias === o.alias,
              );
              if (!e) {
                return;
              }
              a = Je(e);
            } else {
              if (m !== true) {
                return;
              }
              a = p;
            }
            const c = n.getResourceUrl(t, b(t).url);
            if (c) {
              l.push({
                name: o.name,
                moduleInfo: {
                  name: o.name,
                  entry: c,
                  type: "remoteEntryType" in t ? t.remoteEntryType : "global",
                  entryGlobalName: "globalName" in t ? t.globalName : o.name,
                  shareScope: "",
                  version: "version" in t ? t.version : undefined,
                },
                url: c,
              });
            }
            let u = "modules" in t ? t.modules : [];
            const d = (f = a.exposes)
              ? f.map((e) =>
                  e === "." ? e : e.startsWith("./") ? e.replace("./", "") : e,
                )
              : [];
            var f;
            var h;
            if (d.length && "modules" in t) {
              u =
                t == null || (h = t.modules) == null
                  ? undefined
                  : h.reduce((e, t) => {
                      if (
                        (d == null ? undefined : d.indexOf(t.moduleName)) !== -1
                      ) {
                        e.push(t);
                      }
                      return e;
                    }, []);
            }
            function _(e) {
              const o = e.map((e) => n.getResourceUrl(t, e));
              if (a.filter) {
                return o.filter(a.filter);
              } else {
                return o;
              }
            }
            if (u) {
              const r = u.length;
              for (let n = 0; n < r; n++) {
                const r = u[n];
                const l = `${o.name}/${r.moduleName}`;
                e.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
                  id: r.moduleName === "." ? o.name : l,
                  name: o.name,
                  remoteSnapshot: t,
                  preloadConfig: a,
                  remote: o,
                  origin: e,
                });
                if (!H(l)) {
                  if (a.resourceCategory === "all") {
                    i.push(..._(r.assets.css.async));
                    i.push(..._(r.assets.css.sync));
                    s.push(..._(r.assets.js.async));
                    s.push(..._(r.assets.js.sync));
                  } else if ((a.resourceCategory = "sync")) {
                    i.push(..._(r.assets.css.sync));
                    s.push(..._(r.assets.js.sync));
                  }
                  j(l);
                }
              }
            }
          },
          true,
          {},
          a,
        );
        if (a.shared) {
          const t = (t, o) => {
            const r = De(
              e.shareScopeMap,
              o.sharedName,
              t,
              e.sharedHandler.hooks.lifecycle.resolveShare,
            );
            if (r && typeof r.lib == "function") {
              o.assets.js.sync.forEach((e) => {
                c.add(e);
              });
              o.assets.css.sync.forEach((e) => {
                u.add(e);
              });
            }
          };
          a.shared.forEach((e) => {
            var o;
            const r = (o = d.shared) == null ? undefined : o[e.sharedName];
            if (!r) {
              return;
            }
            const n = e.version ? r.find((t) => t.version === e.version) : r;
            if (!n) {
              return;
            }
            g(n).forEach((o) => {
              t(o, e);
            });
          });
        }
        const f = s.filter((e) => !c.has(e) && !ot("script", e));
        return {
          cssAssets: i.filter((e) => !u.has(e) && !ot("link", e)),
          jsAssetsWithoutEntry: f,
          entryAssets: l.filter((e) => !ot("script", e.url)),
        };
      }
      function nt(e, t) {
        const o = P({
          name: t.options.name,
          version: t.options.version,
        });
        const r =
          o &&
          "remotesInfo" in o &&
          o.remotesInfo &&
          M(o.remotesInfo, e.name).value;
        if (r && r.matchedVersion) {
          return {
            hostGlobalSnapshot: o,
            globalSnapshot: A(),
            remoteSnapshot: P({
              name: e.name,
              version: r.matchedVersion,
            }),
          };
        } else {
          return {
            hostGlobalSnapshot: undefined,
            globalSnapshot: A(),
            remoteSnapshot: P({
              name: e.name,
              version: "version" in e ? e.version : undefined,
            }),
          };
        }
      }
      class at {
        async loadSnapshot(e) {
          const { options: t } = this.HostInstance;
          const {
            hostGlobalSnapshot: o,
            remoteSnapshot: r,
            globalSnapshot: n,
          } = this.getGlobalRemoteInfo(e);
          const { remoteSnapshot: a, globalSnapshot: i } =
            await this.hooks.lifecycle.loadSnapshot.emit({
              options: t,
              moduleInfo: e,
              hostGlobalSnapshot: o,
              remoteSnapshot: r,
              globalSnapshot: n,
            });
          return {
            remoteSnapshot: a,
            globalSnapshot: i,
          };
        }
        async loadRemoteSnapshotInfo(e) {
          const { options: t } = this.HostInstance;
          await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
            options: t,
            moduleInfo: e,
          });
          let o = P({
            name: this.HostInstance.options.name,
            version: this.HostInstance.options.version,
          });
          if (!o) {
            o = {
              version: this.HostInstance.options.version || "",
              remoteEntry: "",
              remotesInfo: {},
            };
            D({
              [this.HostInstance.options.name]: o,
            });
          }
          if (
            o &&
            "remotesInfo" in o &&
            !M(o.remotesInfo, e.name).value &&
            ("version" in e || "entry" in e)
          ) {
            o.remotesInfo = r._extends(
              {},
              o == null ? undefined : o.remotesInfo,
              {
                [e.name]: {
                  matchedVersion: "version" in e ? e.version : e.entry,
                },
              },
            );
          }
          const {
            hostGlobalSnapshot: i,
            remoteSnapshot: s,
            globalSnapshot: l,
          } = this.getGlobalRemoteInfo(e);
          const { remoteSnapshot: u, globalSnapshot: d } =
            await this.hooks.lifecycle.loadSnapshot.emit({
              options: t,
              moduleInfo: e,
              hostGlobalSnapshot: i,
              remoteSnapshot: s,
              globalSnapshot: l,
            });
          let p;
          let f;
          if (u) {
            if (n.isManifestProvider(u)) {
              const t = n.isBrowserEnv()
                ? u.remoteEntry
                : u.ssrRemoteEntry || u.remoteEntry || "";
              const o = await this.getManifestJson(t, e, {});
              p = o;
              f = x(
                r._extends({}, e, {
                  entry: t,
                }),
                o,
              );
            } else {
              const { remoteSnapshot: t } =
                await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                  options: this.HostInstance.options,
                  moduleInfo: e,
                  remoteSnapshot: u,
                  from: "global",
                });
              p = t;
              f = d;
            }
          } else if (m(e)) {
            const t = await this.getManifestJson(e.entry, e, {});
            const o = x(e, t);
            const { remoteSnapshot: r } =
              await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                options: this.HostInstance.options,
                moduleInfo: e,
                remoteSnapshot: t,
                from: "global",
              });
            p = r;
            f = o;
          } else {
            c(
              a.getShortErrorMsg(a.RUNTIME_007, a.runtimeDescMap, {
                hostName: e.name,
                hostVersion: e.version,
                globalSnapshot: JSON.stringify(d),
              }),
            );
          }
          await this.hooks.lifecycle.afterLoadSnapshot.emit({
            options: t,
            moduleInfo: e,
            remoteSnapshot: p,
          });
          return {
            remoteSnapshot: p,
            globalSnapshot: f,
          };
        }
        getGlobalRemoteInfo(e) {
          return nt(e, this.HostInstance);
        }
        async getManifestJson(e, t, o) {
          const r = async () => {
            let o = this.manifestCache.get(e);
            if (o) {
              return o;
            }
            try {
              let t = await this.loaderHook.lifecycle.fetch.emit(e, {});
              if (!t || !(t instanceof Response)) {
                t = await fetch(e, {});
              }
              o = await t.json();
            } catch (r) {
              o =
                await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit(
                  {
                    id: e,
                    error: r,
                    from: "runtime",
                    lifecycle: "afterResolve",
                    origin: this.HostInstance,
                  },
                );
              if (!o) {
                delete this.manifestLoading[e];
                c(
                  a.getShortErrorMsg(
                    a.RUNTIME_003,
                    a.runtimeDescMap,
                    {
                      manifestUrl: e,
                      moduleName: t.name,
                    },
                    `${r}`,
                  ),
                );
              }
            }
            l(
              o.metaData && o.exposes && o.shared,
              `${e} is not a federation manifest`,
            );
            this.manifestCache.set(e, o);
            return o;
          };
          const i = async () => {
            const o = await r();
            const a = n.generateSnapshotFromManifest(o, {
              version: e,
            });
            const { remoteSnapshot: i } =
              await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                options: this.HostInstance.options,
                moduleInfo: t,
                manifestJson: o,
                remoteSnapshot: a,
                manifestUrl: e,
                from: "manifest",
              });
            return i;
          };
          this.manifestLoading[e] ||= i().then((e) => e);
          return this.manifestLoading[e];
        }
        constructor(e) {
          this.loadingHostSnapshot = null;
          this.manifestCache = new Map();
          this.hooks = new Xe({
            beforeLoadRemoteSnapshot: new Ve("beforeLoadRemoteSnapshot"),
            loadSnapshot: new Ye("loadGlobalSnapshot"),
            loadRemoteSnapshot: new Ye("loadRemoteSnapshot"),
            afterLoadSnapshot: new Ye("afterLoadSnapshot"),
          });
          this.manifestLoading = S.__FEDERATION__.__MANIFEST_LOADING__;
          this.HostInstance = e;
          this.loaderHook = e.loaderHook;
        }
      }
      class it {
        registerShared(e, t) {
          const { shareInfos: o, shared: r } = Te(e, t);
          Object.keys(o).forEach((e) => {
            o[e].forEach((o) => {
              if (
                !De(
                  this.shareScopeMap,
                  e,
                  o,
                  this.hooks.lifecycle.resolveShare,
                ) &&
                o &&
                o.lib
              ) {
                this.setShared({
                  pkgName: e,
                  lib: o.lib,
                  get: o.get,
                  loaded: true,
                  shared: o,
                  from: t.name,
                });
              }
            });
          });
          return {
            shareInfos: o,
            shared: r,
          };
        }
        async loadShare(e, t) {
          const { host: o } = this;
          const r = Fe({
            pkgName: e,
            extraOptions: t,
            shareInfos: o.options.shared,
          });
          if (r == null ? undefined : r.scope) {
            await Promise.all(
              r.scope.map(async (e) => {
                await Promise.all(
                  this.initializeSharing(e, {
                    strategy: r.strategy,
                  }),
                );
              }),
            );
          }
          const n = await this.hooks.lifecycle.beforeLoadShare.emit({
            pkgName: e,
            shareInfo: r,
            shared: o.options.shared,
            origin: o,
          });
          const { shareInfo: a } = n;
          l(
            a,
            `Cannot find ${e} Share in the ${o.options.name}. Please ensure that the ${e} Share parameters have been injected`,
          );
          const i = De(
            this.shareScopeMap,
            e,
            a,
            this.hooks.lifecycle.resolveShare,
          );
          const s = (e) => {
            e.useIn ||= [];
            d(e.useIn, o.options.name);
          };
          if (i && i.lib) {
            s(i);
            return i.lib;
          }
          if (i && i.loading && !i.loaded) {
            const e = await i.loading;
            i.loaded = true;
            i.lib ||= e;
            s(i);
            return e;
          }
          if (i) {
            const t = (async () => {
              const t = await i.get();
              a.lib = t;
              a.loaded = true;
              s(a);
              const o = De(
                this.shareScopeMap,
                e,
                a,
                this.hooks.lifecycle.resolveShare,
              );
              if (o) {
                o.lib = t;
                o.loaded = true;
              }
              return t;
            })();
            this.setShared({
              pkgName: e,
              loaded: false,
              shared: i,
              from: o.options.name,
              lib: null,
              loading: t,
            });
            return t;
          }
          {
            if (t == null ? undefined : t.customShareInfo) {
              return false;
            }
            const r = (async () => {
              const t = await a.get();
              a.lib = t;
              a.loaded = true;
              s(a);
              const o = De(
                this.shareScopeMap,
                e,
                a,
                this.hooks.lifecycle.resolveShare,
              );
              if (o) {
                o.lib = t;
                o.loaded = true;
              }
              return t;
            })();
            this.setShared({
              pkgName: e,
              loaded: false,
              shared: a,
              from: o.options.name,
              lib: null,
              loading: r,
            });
            return r;
          }
        }
        initializeSharing(e = q, t) {
          const { host: o } = this;
          const r = t == null ? undefined : t.from;
          const n = t == null ? undefined : t.strategy;
          let a = t == null ? undefined : t.initScope;
          const i = [];
          if (r !== "build") {
            const { initTokens: t } = this;
            a ||= [];
            let o = t[e];
            o ||= t[e] = {
              from: this.host.name,
            };
            if (a.indexOf(o) >= 0) {
              return i;
            }
            a.push(o);
          }
          const s = this.shareScopeMap;
          const l = o.options.name;
          s[e] ||= {};
          const c = s[e];
          const u = async (t) => {
            const { module: r } =
              await o.remoteHandler.getRemoteModuleAndOptions({
                id: t,
              });
            if (r.getEntry) {
              let i;
              try {
                i = await r.getEntry();
              } catch (e) {
                i = await o.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                  id: t,
                  error: e,
                  from: "runtime",
                  lifecycle: "beforeLoadShare",
                  origin: o,
                });
              }
              if (!r.inited) {
                await ((n = i), n && n.init && n.init(s[e], a));
                r.inited = true;
              }
            }
            var n;
          };
          Object.keys(o.options.shared).forEach((t) => {
            o.options.shared[t].forEach((o) => {
              if (o.scope.includes(e)) {
                ((e, t) => {
                  var o;
                  const { version: r, eager: n } = t;
                  c[e] = c[e] || {};
                  const a = c[e];
                  const i = a[r];
                  const s = Boolean(
                    i &&
                    (i.eager ||
                      ((o = i.shareConfig) == null ? undefined : o.eager)),
                  );
                  if (
                    !i ||
                    (i.strategy !== "loaded-first" &&
                      !i.loaded &&
                      (Boolean(!n) !== !s ? n : l > i.from))
                  ) {
                    a[r] = t;
                  }
                })(t, o);
              }
            });
          });
          if (
            o.options.shareStrategy === "version-first" ||
            n === "version-first"
          ) {
            o.options.remotes.forEach((t) => {
              if (t.shareScope === e) {
                i.push(u(t.name));
              }
            });
          }
          return i;
        }
        loadShareSync(e, t) {
          const { host: o } = this;
          const r = Fe({
            pkgName: e,
            extraOptions: t,
            shareInfos: o.options.shared,
          });
          if (r == null ? undefined : r.scope) {
            r.scope.forEach((e) => {
              this.initializeSharing(e, {
                strategy: r.strategy,
              });
            });
          }
          const n = De(
            this.shareScopeMap,
            e,
            r,
            this.hooks.lifecycle.resolveShare,
          );
          const i = (e) => {
            e.useIn ||= [];
            d(e.useIn, o.options.name);
          };
          if (n) {
            if (typeof n.lib == "function") {
              i(n);
              if (!n.loaded) {
                n.loaded = true;
                if (n.from === o.options.name) {
                  r.loaded = true;
                }
              }
              return n.lib;
            }
            if (typeof n.get == "function") {
              const t = n.get();
              if (!(t instanceof Promise)) {
                i(n);
                this.setShared({
                  pkgName: e,
                  loaded: true,
                  from: o.options.name,
                  lib: t,
                  shared: n,
                });
                return t;
              }
            }
          }
          if (r.lib) {
            r.loaded ||= true;
            return r.lib;
          }
          if (r.get) {
            const n = r.get();
            if (n instanceof Promise) {
              const r =
                (t == null ? undefined : t.from) === "build"
                  ? a.RUNTIME_005
                  : a.RUNTIME_006;
              throw new Error(
                a.getShortErrorMsg(r, a.runtimeDescMap, {
                  hostName: o.options.name,
                  sharedPkgName: e,
                }),
              );
            }
            r.lib = n;
            this.setShared({
              pkgName: e,
              loaded: true,
              from: o.options.name,
              lib: r.lib,
              shared: r,
            });
            return r.lib;
          }
          throw new Error(
            a.getShortErrorMsg(a.RUNTIME_006, a.runtimeDescMap, {
              hostName: o.options.name,
              sharedPkgName: e,
            }),
          );
        }
        initShareScopeMap(e, t, o = {}) {
          const { host: r } = this;
          this.shareScopeMap[e] = t;
          this.hooks.lifecycle.initContainerShareScopeMap.emit({
            shareScope: t,
            options: r.options,
            origin: r,
            scopeName: e,
            hostShareScopeMap: o.hostShareScopeMap,
          });
        }
        setShared({
          pkgName: e,
          shared: t,
          from: o,
          lib: n,
          loading: a,
          loaded: i,
          get: s,
        }) {
          const { version: l, scope: c = "default" } = t;
          const u = r._object_without_properties_loose(t, ["version", "scope"]);
          (Array.isArray(c) ? c : [c]).forEach((t) => {
            this.shareScopeMap[t] ||= {};
            this.shareScopeMap[t][e] ||= {};
            if (!this.shareScopeMap[t][e][l]) {
              this.shareScopeMap[t][e][l] = r._extends(
                {
                  version: l,
                  scope: ["default"],
                },
                u,
                {
                  lib: n,
                  loaded: i,
                  loading: a,
                },
              );
              if (s) {
                this.shareScopeMap[t][e][l].get = s;
              }
              return;
            }
            const o = this.shareScopeMap[t][e][l];
            if (a && !o.loading) {
              o.loading = a;
            }
          });
        }
        _setGlobalShareScopeMap(e) {
          const t = Le();
          const o = e.id || e.name;
          if (o && !t[o]) {
            t[o] = this.shareScopeMap;
          }
        }
        constructor(e) {
          this.hooks = new Xe({
            afterResolve: new Ye("afterResolve"),
            beforeLoadShare: new Ye("beforeLoadShare"),
            loadShare: new Ve(),
            resolveShare: new ze("resolveShare"),
            initContainerShareScopeMap: new ze("initContainerShareScopeMap"),
          });
          this.host = e;
          this.shareScopeMap = {};
          this.initTokens = {};
          this._setGlobalShareScopeMap(e.options);
        }
      }
      class st {
        formatAndRegisterRemote(e, t) {
          return (t.remotes || []).reduce((e, t) => {
            this.registerRemote(t, e, {
              force: false,
            });
            return e;
          }, e.remotes);
        }
        setIdToRemoteMap(e, t) {
          const { remote: o, expose: r } = t;
          const { name: n, alias: a } = o;
          this.idToRemoteMap[e] = {
            name: o.name,
            expose: r,
          };
          if (a && e.startsWith(n)) {
            const t = e.replace(n, a);
            this.idToRemoteMap[t] = {
              name: o.name,
              expose: r,
            };
          } else if (a && e.startsWith(a)) {
            const t = e.replace(a, n);
            this.idToRemoteMap[t] = {
              name: o.name,
              expose: r,
            };
          }
        }
        async loadRemote(e, t) {
          const { host: o } = this;
          try {
            const { loadFactory: r = true } = t || {
              loadFactory: true,
            };
            const {
              module: n,
              moduleOptions: a,
              remoteMatchInfo: i,
            } = await this.getRemoteModuleAndOptions({
              id: e,
            });
            const {
              pkgNameOrAlias: s,
              remote: l,
              expose: c,
              id: u,
              remoteSnapshot: d,
            } = i;
            const p = await n.get(u, c, t, d);
            const m = await this.hooks.lifecycle.onLoad.emit({
              id: u,
              pkgNameOrAlias: s,
              expose: c,
              exposeModule: r ? p : undefined,
              exposeModuleFactory: r ? undefined : p,
              remote: l,
              options: a,
              moduleInstance: n,
              origin: o,
            });
            this.setIdToRemoteMap(e, i);
            if (typeof m == "function") {
              return m;
            } else {
              return p;
            }
          } catch (r) {
            const { from: n = "runtime" } = t || {
              from: "runtime",
            };
            const a = await this.hooks.lifecycle.errorLoadRemote.emit({
              id: e,
              error: r,
              from: n,
              lifecycle: "onLoad",
              origin: o,
            });
            if (!a) {
              throw r;
            }
            return a;
          }
        }
        async preloadRemote(e) {
          const { host: t } = this;
          await this.hooks.lifecycle.beforePreloadRemote.emit({
            preloadOps: e,
            options: t.options,
            origin: t,
          });
          r = t.options.remotes;
          const o = e.map((e) => {
            const t = (function (e, t) {
              for (const o of e) {
                if (t === o.name) {
                  return o;
                }
                if (o.alias && t === o.alias) {
                  return o;
                }
              }
            })(r, e.nameOrAlias);
            l(
              t,
              `Unable to preload ${e.nameOrAlias} as it is not included in ${
                !t &&
                n.safeToString({
                  remoteInfo: t,
                  remotes: r,
                })
              }`,
            );
            return {
              remote: t,
              preloadConfig: Je(e),
            };
          });
          var r;
          await Promise.all(
            o.map(async (e) => {
              const { remote: o } = e;
              const r = Ue(o);
              const { globalSnapshot: n, remoteSnapshot: a } =
                await t.snapshotHandler.loadRemoteSnapshotInfo(o);
              const i = await this.hooks.lifecycle.generatePreloadAssets.emit({
                origin: t,
                preloadOptions: e,
                remote: o,
                remoteInfo: r,
                globalSnapshot: n,
                remoteSnapshot: a,
              });
              if (i) {
                Ze(r, t, i);
              }
            }),
          );
        }
        registerRemotes(e, t) {
          const { host: o } = this;
          e.forEach((e) => {
            this.registerRemote(e, o.options.remotes, {
              force: t == null ? undefined : t.force,
            });
          });
        }
        async getRemoteModuleAndOptions(e) {
          const { host: t } = this;
          const { id: o } = e;
          let n;
          try {
            n = await this.hooks.lifecycle.beforeRequest.emit({
              id: o,
              options: t.options,
              origin: t,
            });
          } catch (e) {
            n = await this.hooks.lifecycle.errorLoadRemote.emit({
              id: o,
              options: t.options,
              origin: t,
              from: "runtime",
              error: e,
              lifecycle: "beforeRequest",
            });
            if (!n) {
              throw e;
            }
          }
          const { id: i } = n;
          const s = He(t.options.remotes, i);
          l(
            s,
            a.getShortErrorMsg(a.RUNTIME_004, a.runtimeDescMap, {
              hostName: t.options.name,
              requestId: i,
            }),
          );
          const { remote: c } = s;
          const u = Ue(c);
          const d = await t.sharedHandler.hooks.lifecycle.afterResolve.emit(
            r._extends(
              {
                id: i,
              },
              s,
              {
                options: t.options,
                origin: t,
                remoteInfo: u,
              },
            ),
          );
          const { remote: p, expose: m } = d;
          l(
            p && m,
            `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${i}.`,
          );
          let f = t.moduleCache.get(p.name);
          const h = {
            host: t,
            remoteInfo: u,
          };
          if (!f) {
            f = new Be(h);
            t.moduleCache.set(p.name, f);
          }
          return {
            module: f,
            moduleOptions: h,
            remoteMatchInfo: d,
          };
        }
        registerRemote(e, t, o) {
          const { host: r } = this;
          const a = () => {
            if (e.alias) {
              const o = t.find((t) => {
                var o;
                return (
                  e.alias &&
                  (t.name.startsWith(e.alias) ||
                    ((o = t.alias) == null ? undefined : o.startsWith(e.alias)))
                );
              });
              l(
                !o,
                `The alias ${e.alias} of remote ${e.name} is not allowed to be the prefix of ${o && o.name} name or alias`,
              );
            }
            if (
              "entry" in e &&
              n.isBrowserEnv() &&
              !e.entry.startsWith("http")
            ) {
              e.entry = new URL(e.entry, window.location.origin).href;
            }
            e.shareScope ||= q;
            e.type ||= G;
          };
          this.hooks.lifecycle.beforeRegisterRemote.emit({
            remote: e,
            origin: r,
          });
          const i = t.find((t) => t.name === e.name);
          if (i) {
            const s = [
              `The remote "${e.name}" is already registered.`,
              "Please note that overriding it may cause unexpected errors.",
            ];
            if (o == null ? undefined : o.force) {
              this.removeRemote(i);
              a();
              t.push(e);
              this.hooks.lifecycle.registerRemote.emit({
                remote: e,
                origin: r,
              });
              n.warn(s.join(" "));
            }
          } else {
            a();
            t.push(e);
            this.hooks.lifecycle.registerRemote.emit({
              remote: e,
              origin: r,
            });
          }
        }
        removeRemote(e) {
          try {
            const { host: o } = this;
            const { name: r } = e;
            const a = o.options.remotes.findIndex((e) => e.name === r);
            if (a !== -1) {
              o.options.remotes.splice(a, 1);
            }
            const i = o.moduleCache.get(e.name);
            if (i) {
              const r = i.remoteInfo;
              const a = r.entryGlobalName;
              var t;
              if (y[a]) {
                if (
                  (t = Object.getOwnPropertyDescriptor(y, a)) == null
                    ? undefined
                    : t.configurable
                ) {
                  delete y[a];
                } else {
                  y[a] = undefined;
                }
              }
              const s = qe(i.remoteInfo);
              if (w[s]) {
                delete w[s];
              }
              o.snapshotHandler.manifestCache.delete(r.entry);
              let l = r.buildVersion
                ? n.composeKeyWithSeparator(r.name, r.buildVersion)
                : r.name;
              const c = y.__FEDERATION__.__INSTANCES__.findIndex((e) =>
                r.buildVersion ? e.options.id === l : e.name === l,
              );
              if (c !== -1) {
                const e = y.__FEDERATION__.__INSTANCES__[c];
                l = e.options.id || l;
                const t = Le();
                let o = true;
                const n = [];
                Object.keys(t).forEach((e) => {
                  const a = t[e];
                  if (a) {
                    Object.keys(a).forEach((t) => {
                      const i = a[t];
                      if (i) {
                        Object.keys(i).forEach((a) => {
                          const s = i[a];
                          if (s) {
                            Object.keys(s).forEach((i) => {
                              const l = s[i];
                              if (
                                l &&
                                typeof l == "object" &&
                                l.from === r.name
                              ) {
                                if (l.loaded || l.loading) {
                                  l.useIn = l.useIn.filter((e) => e !== r.name);
                                  if (l.useIn.length) {
                                    o = false;
                                  } else {
                                    n.push([e, t, a, i]);
                                  }
                                } else {
                                  n.push([e, t, a, i]);
                                }
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
                if (o) {
                  e.shareScopeMap = {};
                  delete t[l];
                }
                n.forEach(([e, o, r, n]) => {
                  var a;
                  var i;
                  var s;
                  if ((s = t[e]) != null) {
                    if ((i = s[o]) != null) {
                      if ((a = i[r]) != null) {
                        delete a[n];
                      }
                    }
                  }
                });
                y.__FEDERATION__.__INSTANCES__.splice(c, 1);
              }
              const { hostGlobalSnapshot: u } = nt(e, o);
              if (u) {
                const t =
                  u &&
                  "remotesInfo" in u &&
                  u.remotesInfo &&
                  M(u.remotesInfo, e.name).key;
                if (t) {
                  delete u.remotesInfo[t];
                  if (Boolean(S.__FEDERATION__.__MANIFEST_LOADING__[t])) {
                    delete S.__FEDERATION__.__MANIFEST_LOADING__[t];
                  }
                }
              }
              o.moduleCache.delete(e.name);
            }
          } catch (e) {
            s.log("removeRemote fail: ", e);
          }
        }
        constructor(e) {
          this.hooks = new Xe({
            beforeRegisterRemote: new ze("beforeRegisterRemote"),
            registerRemote: new ze("registerRemote"),
            beforeRequest: new Ye("beforeRequest"),
            onLoad: new Ve("onLoad"),
            handlePreloadModule: new We("handlePreloadModule"),
            errorLoadRemote: new Ve("errorLoadRemote"),
            beforePreloadRemote: new Ve("beforePreloadRemote"),
            generatePreloadAssets: new Ve("generatePreloadAssets"),
            afterPreloadRemote: new Ve(),
            loadEntry: new Ve(),
          });
          this.host = e;
          this.idToRemoteMap = {};
        }
      }
      var lt = Object.freeze({
        __proto__: null,
      });
      Object.defineProperty(t, "loadScript", {
        enumerable: true,
        get: function () {
          return n.loadScript;
        },
      });
      Object.defineProperty(t, "loadScriptNode", {
        enumerable: true,
        get: function () {
          return n.loadScriptNode;
        },
      });
      t.CurrentGlobal = y;
      t.FederationHost = class {
        initOptions(e) {
          this.registerPlugins(e.plugins);
          const t = this.formatOptions(this.options, e);
          this.options = t;
          return t;
        }
        async loadShare(e, t) {
          return this.sharedHandler.loadShare(e, t);
        }
        loadShareSync(e, t) {
          return this.sharedHandler.loadShareSync(e, t);
        }
        initializeSharing(e = q, t) {
          return this.sharedHandler.initializeSharing(e, t);
        }
        initRawContainer(e, t, o) {
          const r = Ue({
            name: e,
            entry: t,
          });
          const n = new Be({
            host: this,
            remoteInfo: r,
          });
          n.remoteEntryExports = o;
          this.moduleCache.set(e, n);
          return n;
        }
        async loadRemote(e, t) {
          return this.remoteHandler.loadRemote(e, t);
        }
        async preloadRemote(e) {
          return this.remoteHandler.preloadRemote(e);
        }
        initShareScopeMap(e, t, o = {}) {
          this.sharedHandler.initShareScopeMap(e, t, o);
        }
        formatOptions(e, t) {
          const { shared: o } = Te(e, t);
          const { userOptions: n, options: a } =
            this.hooks.lifecycle.beforeInit.emit({
              origin: this,
              userOptions: t,
              options: e,
              shareInfo: o,
            });
          const i = this.remoteHandler.formatAndRegisterRemote(a, n);
          const { shared: s } = this.sharedHandler.registerShared(a, n);
          const l = [...a.plugins];
          if (n.plugins) {
            n.plugins.forEach((e) => {
              if (!l.includes(e)) {
                l.push(e);
              }
            });
          }
          const c = r._extends({}, e, t, {
            plugins: l,
            remotes: i,
            shared: s,
          });
          this.hooks.lifecycle.init.emit({
            origin: this,
            options: c,
          });
          return c;
        }
        registerPlugins(e) {
          const t = (function (e, t) {
            const o = C();
            if (o.length > 0) {
              o.forEach((t) => {
                if (e == null ? undefined : e.find((e) => e.name !== t.name)) {
                  e.push(t);
                }
              });
            }
            if (e && e.length > 0) {
              e.forEach((e) => {
                t.forEach((t) => {
                  t.applyPlugin(e);
                });
              });
            }
            return e;
          })(e, [
            this.hooks,
            this.remoteHandler.hooks,
            this.sharedHandler.hooks,
            this.snapshotHandler.hooks,
            this.loaderHook,
            this.bridgeHook,
          ]);
          this.options.plugins = this.options.plugins.reduce(
            (e, t) =>
              t ? (e && !e.find((e) => e.name === t.name) && e.push(t), e) : e,
            t || [],
          );
        }
        registerRemotes(e, t) {
          return this.remoteHandler.registerRemotes(e, t);
        }
        constructor(e) {
          this.hooks = new Xe({
            beforeInit: new ze("beforeInit"),
            init: new We(),
            beforeInitContainer: new Ye("beforeInitContainer"),
            initContainer: new Ye("initContainer"),
          });
          this.version = "0.11.1";
          this.moduleCache = new Map();
          this.loaderHook = new Xe({
            getModuleInfo: new We(),
            createScript: new We(),
            createLink: new We(),
            fetch: new Ve(),
            loadEntryError: new Ve(),
            getModuleFactory: new Ve(),
          });
          this.bridgeHook = new Xe({
            beforeBridgeRender: new We(),
            afterBridgeRender: new We(),
            beforeBridgeDestroy: new We(),
            afterBridgeDestroy: new We(),
          });
          const t = {
            id: "career_platform_front:local",
            name: e.name,
            plugins: [
              {
                name: "snapshot-plugin",
                async afterResolve(e) {
                  const {
                    remote: t,
                    pkgNameOrAlias: o,
                    expose: n,
                    origin: a,
                    remoteInfo: i,
                  } = e;
                  if (!m(t) || !f(t)) {
                    const { remoteSnapshot: s, globalSnapshot: l } =
                      await a.snapshotHandler.loadRemoteSnapshotInfo(t);
                    Qe(i, s);
                    const c = {
                      remote: t,
                      preloadConfig: {
                        nameOrAlias: o,
                        exposes: [n],
                        resourceCategory: "sync",
                        share: false,
                        depsRemote: false,
                      },
                    };
                    const u =
                      await a.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit(
                        {
                          origin: a,
                          preloadOptions: c,
                          remoteInfo: i,
                          remote: t,
                          remoteSnapshot: s,
                          globalSnapshot: l,
                        },
                      );
                    if (u) {
                      Ze(i, a, u, false);
                    }
                    return r._extends({}, e, {
                      remoteSnapshot: s,
                    });
                  }
                  return e;
                },
              },
              {
                name: "generate-preload-assets-plugin",
                async generatePreloadAssets(e) {
                  const {
                    origin: t,
                    preloadOptions: o,
                    remoteInfo: r,
                    remote: a,
                    globalSnapshot: i,
                    remoteSnapshot: s,
                  } = e;
                  if (n.isBrowserEnv()) {
                    if (m(a) && f(a)) {
                      return {
                        cssAssets: [],
                        jsAssetsWithoutEntry: [],
                        entryAssets: [
                          {
                            name: a.name,
                            url: a.entry,
                            moduleInfo: {
                              name: r.name,
                              entry: a.entry,
                              type: r.type || "global",
                              entryGlobalName: "",
                              shareScope: "",
                            },
                          },
                        ],
                      };
                    } else {
                      Qe(r, s);
                      return rt(t, o, r, i, s);
                    }
                  } else {
                    return {
                      cssAssets: [],
                      jsAssetsWithoutEntry: [],
                      entryAssets: [],
                    };
                  }
                },
              },
            ],
            remotes: [],
            shared: {},
            inBrowser: n.isBrowserEnv(),
          };
          this.name = e.name;
          this.options = t;
          this.snapshotHandler = new at(this);
          this.sharedHandler = new it(this);
          this.remoteHandler = new st(this);
          this.shareScopeMap = this.sharedHandler.shareScopeMap;
          this.registerPlugins([...t.plugins, ...(e.plugins || [])]);
          this.options = this.formatOptions(t, e);
        }
      };
      t.Global = S;
      t.Module = Be;
      t.addGlobalSnapshot = D;
      t.assert = l;
      t.getGlobalFederationConstructor = T;
      t.getGlobalSnapshot = A;
      t.getInfoWithoutType = M;
      t.getRegisteredShare = De;
      t.getRemoteEntry = Ge;
      t.getRemoteInfo = Ue;
      t.helpers = Ce;
      t.isStaticResourcesEqual = function (e, t) {
        const o = /^(https?:)?\/\//i;
        return (
          e.replace(o, "").replace(/\/$/, "") ===
          t.replace(o, "").replace(/\/$/, "")
        );
      };
      t.matchRemoteWithNameAndExpose = He;
      t.registerGlobalPlugins = F;
      t.resetFederationGlobalInfo = I;
      t.safeWrapper = async function (e, t) {
        try {
          return await e();
        } catch (e) {
          if (!t) {
            u(e);
          }
          return;
        }
      };
      t.satisfy = Oe;
      t.setGlobalFederationConstructor = k;
      t.setGlobalFederationInstance = O;
      t.types = lt;
    },
    66340: function (e, t) {
      "use strict";

      function o() {
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var r in o) {
                if (Object.prototype.hasOwnProperty.call(o, r)) {
                  e[r] = o[r];
                }
              }
            }
            return e;
          };
        return o.apply(this, arguments);
      }
      t._extends = o;
      t._object_without_properties_loose = function (e, t) {
        if (e == null) {
          return {};
        }
        var o;
        var r;
        var n = {};
        var a = Object.keys(e);
        for (r = 0; r < a.length; r++) {
          o = a[r];
          if (!(t.indexOf(o) >= 0)) {
            n[o] = e[o];
          }
        }
        return n;
      };
    },
    84620: function (e, t, o) {
      "use strict";

      var r = o(16515);
      var n = o(87657);
      let a = null;
      r.setGlobalFederationConstructor(r.FederationHost);
      Object.defineProperty(t, "FederationHost", {
        enumerable: true,
        get: function () {
          return r.FederationHost;
        },
      });
      Object.defineProperty(t, "Module", {
        enumerable: true,
        get: function () {
          return r.Module;
        },
      });
      Object.defineProperty(t, "getRemoteEntry", {
        enumerable: true,
        get: function () {
          return r.getRemoteEntry;
        },
      });
      Object.defineProperty(t, "getRemoteInfo", {
        enumerable: true,
        get: function () {
          return r.getRemoteInfo;
        },
      });
      Object.defineProperty(t, "loadScript", {
        enumerable: true,
        get: function () {
          return r.loadScript;
        },
      });
      Object.defineProperty(t, "loadScriptNode", {
        enumerable: true,
        get: function () {
          return r.loadScriptNode;
        },
      });
      Object.defineProperty(t, "registerGlobalPlugins", {
        enumerable: true,
        get: function () {
          return r.registerGlobalPlugins;
        },
      });
      t.getInstance = function () {
        return a;
      };
      t.init = function (e) {
        const t = n.getGlobalFederationInstance(e.name, e.version);
        if (t) {
          t.initOptions(e);
          a ||= t;
          return t;
        }
        {
          const t = r.getGlobalFederationConstructor() || r.FederationHost;
          a = new t(e);
          r.setGlobalFederationInstance(a);
          return a;
        }
      };
      t.loadRemote = function (...e) {
        r.assert(a, "Please call init first");
        return a.loadRemote.apply(a, e);
      };
      t.loadShare = function (...e) {
        r.assert(a, "Please call init first");
        return a.loadShare.apply(a, e);
      };
      t.loadShareSync = function (...e) {
        r.assert(a, "Please call init first");
        return a.loadShareSync.apply(a, e);
      };
      t.preloadRemote = function (...e) {
        r.assert(a, "Please call init first");
        return a.preloadRemote.apply(a, e);
      };
      t.registerPlugins = function (...e) {
        r.assert(a, "Please call init first");
        return a.registerPlugins.apply(a, e);
      };
      t.registerRemotes = function (...e) {
        r.assert(a, "Please call init first");
        return a.registerRemotes.apply(a, e);
      };
    },
    87657: function (e, t, o) {
      "use strict";

      var r = o(16515);
      t.getGlobalFederationInstance = function (e, t) {
        return r.CurrentGlobal.__FEDERATION__.__INSTANCES__.find(
          (o) =>
            o.options.id === "career_platform_front:local" ||
            (o.options.name === e && !o.options.version && !t) ||
            (o.options.name === e && !!t && o.options.version === t),
        );
      };
    },
    50495: function (__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var polyfills = __webpack_require__(31026);
      const FederationModuleManifest = "federation-manifest.json";
      const MANIFEST_EXT = ".json";
      const BROWSER_LOG_KEY = "FEDERATION_DEBUG";
      const BROWSER_LOG_VALUE = "1";
      const NameTransformSymbol = {
        AT: "@",
        HYPHEN: "-",
        SLASH: "/",
      };
      const NameTransformMap = {
        [NameTransformSymbol.AT]: "scope_",
        [NameTransformSymbol.HYPHEN]: "_",
        [NameTransformSymbol.SLASH]: "__",
      };
      const EncodedNameTransformMap = {
        [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
        [NameTransformMap[NameTransformSymbol.HYPHEN]]:
          NameTransformSymbol.HYPHEN,
        [NameTransformMap[NameTransformSymbol.SLASH]]:
          NameTransformSymbol.SLASH,
      };
      const SEPARATOR = ":";
      const ManifestFileName = "mf-manifest.json";
      const StatsFileName = "mf-stats.json";
      const MFModuleType = {
        NPM: "npm",
        APP: "app",
      };
      const MODULE_DEVTOOL_IDENTIFIER = "__MF_DEVTOOLS_MODULE_INFO__";
      const ENCODE_NAME_PREFIX = "ENCODE_NAME_PREFIX";
      const TEMP_DIR = ".federation";
      const MFPrefetchCommon = {
        identifier: "MFDataPrefetch",
        globalKey: "__PREFETCH__",
        library: "mf-data-prefetch",
        exportsKey: "__PREFETCH_EXPORTS__",
        fileName: "bootstrap.js",
      };
      var ContainerPlugin = Object.freeze({
        __proto__: null,
      });
      var ContainerReferencePlugin = Object.freeze({
        __proto__: null,
      });
      var ModuleFederationPlugin = Object.freeze({
        __proto__: null,
      });
      var SharePlugin = Object.freeze({
        __proto__: null,
      });
      function isBrowserEnv() {
        return typeof window != "undefined";
      }
      function isBrowserDebug() {
        try {
          if (isBrowserEnv() && window.localStorage) {
            return localStorage.getItem(BROWSER_LOG_KEY) === BROWSER_LOG_VALUE;
          }
        } catch (e) {
          return false;
        }
        return false;
      }
      function isDebugMode() {
        if (
          typeof process != "undefined" &&
          process.env &&
          process.env.FEDERATION_DEBUG
        ) {
          return Boolean(process.env.FEDERATION_DEBUG);
        } else {
          return (
            (typeof FEDERATION_DEBUG != "undefined" &&
              !!Boolean(FEDERATION_DEBUG)) ||
            isBrowserDebug()
          );
        }
      }
      const getProcessEnv = function () {
        if (typeof process != "undefined" && process.env) {
          return process.env;
        } else {
          return {};
        }
      };
      const LOG_CATEGORY = "[ Federation Runtime ]";
      const parseEntry = (e, t, o = SEPARATOR) => {
        const r = e.split(o);
        const n = getProcessEnv().NODE_ENV === "development" && t;
        const a = (e) => e.startsWith("http") || e.includes(MANIFEST_EXT);
        if (r.length >= 2) {
          let [t, ...i] = r;
          if (e.startsWith(o)) {
            t = r.slice(0, 2).join(o);
            i = [n || r.slice(2).join(o)];
          }
          let s = n || i.join(o);
          if (a(s)) {
            return {
              name: t,
              entry: s,
            };
          } else {
            return {
              name: t,
              version: s || "*",
            };
          }
        }
        if (r.length === 1) {
          const [e] = r;
          if (n && a(n)) {
            return {
              name: e,
              entry: n,
            };
          } else {
            return {
              name: e,
              version: n || "*",
            };
          }
        }
        throw `Invalid entry value: ${e}`;
      };
      const composeKeyWithSeparator = function (...e) {
        if (e.length) {
          return e.reduce(
            (e, t) => (t ? (e ? `${e}${SEPARATOR}${t}` : t) : e),
            "",
          );
        } else {
          return "";
        }
      };
      const encodeName = function (e, t = "", o = false) {
        try {
          const r = o ? ".js" : "";
          return `${t}${e
            .replace(
              new RegExp(`${NameTransformSymbol.AT}`, "g"),
              NameTransformMap[NameTransformSymbol.AT],
            )
            .replace(
              new RegExp(`${NameTransformSymbol.HYPHEN}`, "g"),
              NameTransformMap[NameTransformSymbol.HYPHEN],
            )
            .replace(
              new RegExp(`${NameTransformSymbol.SLASH}`, "g"),
              NameTransformMap[NameTransformSymbol.SLASH],
            )}${r}`;
        } catch (e) {
          throw e;
        }
      };
      const decodeName = function (e, t, o) {
        try {
          let r = e;
          if (t) {
            if (!r.startsWith(t)) {
              return r;
            }
            r = r.replace(new RegExp(t, "g"), "");
          }
          r = r
            .replace(
              new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, "g"),
              EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]],
            )
            .replace(
              new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, "g"),
              EncodedNameTransformMap[
                NameTransformMap[NameTransformSymbol.SLASH]
              ],
            )
            .replace(
              new RegExp(
                `${NameTransformMap[NameTransformSymbol.HYPHEN]}`,
                "g",
              ),
              EncodedNameTransformMap[
                NameTransformMap[NameTransformSymbol.HYPHEN]
              ],
            );
          if (o) {
            r = r.replace(".js", "");
          }
          return r;
        } catch (e) {
          throw e;
        }
      };
      const generateExposeFilename = (e, t) => {
        if (!e) {
          return "";
        }
        let o = e;
        if (o === ".") {
          o = "default_export";
        }
        if (o.startsWith("./")) {
          o = o.replace("./", "");
        }
        return encodeName(o, "__federation_expose_", t);
      };
      const generateShareFilename = (e, t) =>
        e ? encodeName(e, "__federation_shared_", t) : "";
      const getResourceUrl = (e, t) => {
        if ("getPublicPath" in e) {
          let o;
          o = e.getPublicPath.startsWith("function")
            ? new Function("return " + e.getPublicPath)()()
            : new Function(e.getPublicPath)();
          return `${o}${t}`;
        }
        if ("publicPath" in e) {
          return `${e.publicPath}${t}`;
        } else {
          console.warn(
            "Cannot get resource URL. If in debug mode, please ignore.",
            e,
            t,
          );
          return "";
        }
      };
      const assert = (e, t) => {
        if (!e) {
          error(t);
        }
      };
      const error = (e) => {
        throw new Error(`${LOG_CATEGORY}: ${e}`);
      };
      const warn = (e) => {
        console.warn(`${LOG_CATEGORY}: ${e}`);
      };
      function safeToString(e) {
        try {
          return JSON.stringify(e, null, 2);
        } catch (e) {
          return "";
        }
      }
      const VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;
      function isRequiredVersion(e) {
        return VERSION_PATTERN_REGEXP.test(e);
      }
      const simpleJoinRemoteEntry = (e, t) => {
        if (!e) {
          return t;
        }
        const o = ((e) => {
          if (e === ".") {
            return "";
          }
          if (e.startsWith("./")) {
            return e.replace("./", "");
          }
          if (e.startsWith("/")) {
            const t = e.slice(1);
            if (t.endsWith("/")) {
              return t.slice(0, -1);
            } else {
              return t;
            }
          }
          return e;
        })(e);
        if (o) {
          if (o.endsWith("/")) {
            return `${o}${t}`;
          } else {
            return `${o}/${t}`;
          }
        } else {
          return t;
        }
      };
      function inferAutoPublicPath(e) {
        return e
          .replace(/#.*$/, "")
          .replace(/\?.*$/, "")
          .replace(/\/[^\/]+$/, "/");
      }
      function generateSnapshotFromManifest(e, t = {}) {
        var o;
        var r;
        const { remotes: n = {}, overrides: a = {}, version: i } = t;
        let s;
        const l = () =>
          "publicPath" in e.metaData
            ? e.metaData.publicPath === "auto" && i
              ? inferAutoPublicPath(i)
              : e.metaData.publicPath
            : e.metaData.getPublicPath;
        const c = Object.keys(a);
        let u = {};
        var d;
        if (!Object.keys(n).length) {
          u =
            ((d = e.remotes) == null
              ? undefined
              : d.reduce((e, t) => {
                  let o;
                  const r = t.federationContainerName;
                  o = c.includes(r)
                    ? a[r]
                    : "version" in t
                      ? t.version
                      : t.entry;
                  e[r] = {
                    matchedVersion: o,
                  };
                  return e;
                }, {})) || {};
        }
        Object.keys(n).forEach(
          (e) =>
            (u[e] = {
              matchedVersion: c.includes(e) ? a[e] : n[e],
            }),
        );
        const {
          remoteEntry: { path: p, name: m, type: f },
          types: h,
          buildInfo: { buildVersion: _ },
          globalName: g,
          ssrRemoteEntry: b,
        } = e.metaData;
        const { exposes: y } = e;
        let E = {
          version: i || "",
          buildVersion: _,
          globalName: g,
          remoteEntry: simpleJoinRemoteEntry(p, m),
          remoteEntryType: f,
          remoteTypes: simpleJoinRemoteEntry(h.path, h.name),
          remoteTypesZip: h.zip || "",
          remoteTypesAPI: h.api || "",
          remotesInfo: u,
          shared:
            e == null
              ? undefined
              : e.shared.map((e) => ({
                  assets: e.assets,
                  sharedName: e.name,
                  version: e.version,
                })),
          modules:
            y == null
              ? undefined
              : y.map((e) => ({
                  moduleName: e.name,
                  modulePath: e.path,
                  assets: e.assets,
                })),
        };
        if ((o = e.metaData) == null ? undefined : o.prefetchInterface) {
          const t = e.metaData.prefetchInterface;
          E = polyfills._extends({}, E, {
            prefetchInterface: t,
          });
        }
        if ((r = e.metaData) == null ? undefined : r.prefetchEntry) {
          const { path: t, name: o, type: r } = e.metaData.prefetchEntry;
          E = polyfills._extends({}, E, {
            prefetchEntry: simpleJoinRemoteEntry(t, o),
            prefetchEntryType: r,
          });
        }
        s =
          "publicPath" in e.metaData
            ? polyfills._extends({}, E, {
                publicPath: l(),
              })
            : polyfills._extends({}, E, {
                getPublicPath: l(),
              });
        if (b) {
          const e = simpleJoinRemoteEntry(b.path, b.name);
          s.ssrRemoteEntry = e;
          s.ssrRemoteEntryType = b.type || "commonjs-module";
        }
        return s;
      }
      function isManifestProvider(e) {
        return !!("remoteEntry" in e) && !!e.remoteEntry.includes(MANIFEST_EXT);
      }
      const PREFIX = "[ Module Federation ]";
      let Logger = class {
        log(...e) {
          console.log(this.prefix, ...e);
        }
        warn(...e) {
          console.log(this.prefix, ...e);
        }
        error(...e) {
          console.log(this.prefix, ...e);
        }
        success(...e) {
          console.log(this.prefix, ...e);
        }
        info(...e) {
          console.log(this.prefix, ...e);
        }
        ready(...e) {
          console.log(this.prefix, ...e);
        }
        debug(...e) {
          if (isDebugMode()) {
            console.log(this.prefix, ...e);
          }
        }
        constructor(e) {
          this.prefix = e;
        }
      };
      function createLogger(e) {
        return new Logger(e);
      }
      const logger = createLogger(PREFIX);
      async function safeWrapper(e, t) {
        try {
          return await e();
        } catch (e) {
          if (!t) {
            warn(e);
          }
          return;
        }
      }
      function isStaticResourcesEqual(e, t) {
        const o = /^(https?:)?\/\//i;
        return (
          e.replace(o, "").replace(/\/$/, "") ===
          t.replace(o, "").replace(/\/$/, "")
        );
      }
      function createScript(e) {
        let t;
        let o = null;
        let r = true;
        let n = 20000;
        const a = document.getElementsByTagName("script");
        for (let t = 0; t < a.length; t++) {
          const n = a[t];
          const i = n.getAttribute("src");
          if (i && isStaticResourcesEqual(i, e.url)) {
            o = n;
            r = false;
            break;
          }
        }
        if (!o) {
          const t = e.attrs;
          let r;
          o = document.createElement("script");
          o.type =
            (t == null ? undefined : t.type) === "module"
              ? "module"
              : "text/javascript";
          if (e.createScriptHook) {
            r = e.createScriptHook(e.url, e.attrs);
            if (r instanceof HTMLScriptElement) {
              o = r;
            } else if (typeof r == "object") {
              if ("script" in r && r.script) {
                o = r.script;
              }
              if ("timeout" in r && r.timeout) {
                n = r.timeout;
              }
            }
          }
          o.src ||= e.url;
          if (t && !r) {
            Object.keys(t).forEach((e) => {
              if (o) {
                if (e === "async" || e === "defer") {
                  o[e] = t[e];
                } else if (!o.getAttribute(e)) {
                  o.setAttribute(e, t[e]);
                }
              }
            });
          }
        }
        const i = async (r, n) => {
          clearTimeout(t);
          const a = () => {
            if ((n == null ? undefined : n.type) === "error") {
              if (e == null ? undefined : e.onErrorCallback) {
                if (e != null) {
                  e.onErrorCallback(n);
                }
              }
            } else if (e == null ? undefined : e.cb) {
              if (e != null) {
                e.cb();
              }
            }
          };
          if (
            o &&
            ((o.onerror = null),
            (o.onload = null),
            safeWrapper(() => {
              const { needDeleteScript: t = true } = e;
              if (t && (o == null ? undefined : o.parentNode)) {
                o.parentNode.removeChild(o);
              }
            }),
            r && typeof r == "function")
          ) {
            const e = r(n);
            if (e instanceof Promise) {
              const t = await e;
              a();
              return t;
            }
            a();
            return e;
          }
          a();
        };
        o.onerror = i.bind(null, o.onerror);
        o.onload = i.bind(null, o.onload);
        t = setTimeout(() => {
          i(null, new Error(`Remote script "${e.url}" time-outed.`));
        }, n);
        return {
          script: o,
          needAttach: r,
        };
      }
      function createLink(e) {
        let t = null;
        let o = true;
        const r = document.getElementsByTagName("link");
        for (let n = 0; n < r.length; n++) {
          const a = r[n];
          const i = a.getAttribute("href");
          const s = a.getAttribute("rel");
          if (i && isStaticResourcesEqual(i, e.url) && s === e.attrs.rel) {
            t = a;
            o = false;
            break;
          }
        }
        if (!t) {
          let o;
          t = document.createElement("link");
          t.setAttribute("href", e.url);
          const r = e.attrs;
          if (e.createLinkHook) {
            o = e.createLinkHook(e.url, r);
            if (o instanceof HTMLLinkElement) {
              t = o;
            }
          }
          if (r && !o) {
            Object.keys(r).forEach((e) => {
              if (t && !t.getAttribute(e)) {
                t.setAttribute(e, r[e]);
              }
            });
          }
        }
        const n = (o, r) => {
          const n = () => {
            if ((r == null ? undefined : r.type) === "error") {
              if (e == null ? undefined : e.onErrorCallback) {
                if (e != null) {
                  e.onErrorCallback(r);
                }
              }
            } else if (e == null ? undefined : e.cb) {
              if (e != null) {
                e.cb();
              }
            }
          };
          if (
            t &&
            ((t.onerror = null),
            (t.onload = null),
            safeWrapper(() => {
              const { needDeleteLink: o = true } = e;
              if (o && (t == null ? undefined : t.parentNode)) {
                t.parentNode.removeChild(t);
              }
            }),
            o)
          ) {
            const e = o(r);
            n();
            return e;
          }
          n();
        };
        t.onerror = n.bind(null, t.onerror);
        t.onload = n.bind(null, t.onload);
        return {
          link: t,
          needAttach: o,
        };
      }
      function loadScript(e, t) {
        const { attrs: o = {}, createScriptHook: r } = t;
        return new Promise((t, n) => {
          const { script: a, needAttach: i } = createScript({
            url: e,
            cb: t,
            onErrorCallback: n,
            attrs: polyfills._extends(
              {
                fetchpriority: "high",
              },
              o,
            ),
            createScriptHook: r,
            needDeleteScript: true,
          });
          if (i) {
            document.head.appendChild(a);
          }
        });
      }
      function importNodeModule(e) {
        if (!e) {
          throw new Error("import specifier is required");
        }
        return new Function("name", "return import(name)")(e)
          .then((e) => e)
          .catch((t) => {
            console.error(`Error importing module ${e}:`, t);
            throw t;
          });
      }
      const loadNodeFetch = async () => {
        const e = await importNodeModule("node-fetch");
        return e.default || e;
      };
      const lazyLoaderHookFetch = async (e, t, o) => {
        const r = await ((e, t) => o.lifecycle.fetch.emit(e, t))(e, t || {});
        if (!r || !(r instanceof Response)) {
          return (typeof fetch == "undefined" ? await loadNodeFetch() : fetch)(
            e,
            t || {},
          );
        }
        return r;
      };
      function createScriptNode(url, cb, attrs, loaderHook) {
        if (loaderHook == null ? undefined : loaderHook.createScriptHook) {
          const e = loaderHook.createScriptHook(url);
          if (e && typeof e == "object" && "url" in e) {
            url = e.url;
          }
        }
        let urlObj;
        try {
          urlObj = new URL(url);
        } catch (e) {
          console.error("Error constructing URL:", e);
          cb(new Error(`Invalid URL: ${e}`));
          return;
        }
        const getFetch = async () =>
          (loaderHook == null ? undefined : loaderHook.fetch)
            ? (e, t) => lazyLoaderHookFetch(e, t, loaderHook)
            : typeof fetch == "undefined"
              ? loadNodeFetch()
              : fetch;
        const handleScriptFetch = async (f, urlObj) => {
          try {
            var _vm_constants;
            const res = await f(urlObj.href);
            const data = await res.text();
            const [path, vm] = await Promise.all([
              importNodeModule("path"),
              importNodeModule("vm"),
            ]);
            const scriptContext = {
              exports: {},
              module: {
                exports: {},
              },
            };
            const urlDirname = urlObj.pathname
              .split("/")
              .slice(0, -1)
              .join("/");
            const filename = path.basename(urlObj.pathname);
            const script = new vm.Script(
              `(function(exports, module, require, __dirname, __filename) {${data}\n})`,
              {
                filename: filename,
                importModuleDynamically:
                  ((_vm_constants = vm.constants) == null
                    ? undefined
                    : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) ??
                  importNodeModule,
              },
            );
            script.runInThisContext()(
              scriptContext.exports,
              scriptContext.module,
              eval("require"),
              urlDirname,
              filename,
            );
            const exportedInterface =
              scriptContext.module.exports || scriptContext.exports;
            if (attrs && exportedInterface && attrs.globalName) {
              const e =
                exportedInterface[attrs.globalName] || exportedInterface;
              cb(undefined, e);
              return;
            }
            cb(undefined, exportedInterface);
          } catch (e) {
            cb(
              e instanceof Error
                ? e
                : new Error(`Script execution error: ${e}`),
            );
          }
        };
        getFetch()
          .then(async (e) => {
            if (
              (attrs == null ? undefined : attrs.type) === "esm" ||
              (attrs == null ? undefined : attrs.type) === "module"
            ) {
              return loadModule(urlObj.href, {
                fetch: e,
                vm: await importNodeModule("vm"),
              })
                .then(async (e) => {
                  await e.evaluate();
                  cb(undefined, e.namespace);
                })
                .catch((e) => {
                  cb(
                    e instanceof Error
                      ? e
                      : new Error(`Script execution error: ${e}`),
                  );
                });
            }
            handleScriptFetch(e, urlObj);
          })
          .catch((e) => {
            cb(e);
          });
      }
      function loadScriptNode(e, t) {
        return new Promise((o, r) => {
          createScriptNode(
            e,
            (e, n) => {
              if (e) {
                r(e);
              } else {
                var a;
                var i;
                const e =
                  (t == null || (a = t.attrs) == null
                    ? undefined
                    : a.globalName) ||
                  `__FEDERATION_${t == null || (i = t.attrs) == null ? undefined : i.name}:custom__`;
                const r = (globalThis[e] = n);
                o(r);
              }
            },
            t.attrs,
            t.loaderHook,
          );
        });
      }
      async function loadModule(e, t) {
        const { fetch: o, vm: r } = t;
        const n = await o(e);
        const a = await n.text();
        const i = new r.SourceTextModule(a, {
          importModuleDynamically: async (o, r) =>
            loadModule(new URL(o, e).href, t),
        });
        await i.link(async (o) => {
          const r = new URL(o, e).href;
          return await loadModule(r, t);
        });
        return i;
      }
      function normalizeOptions(e, t, o) {
        return function (r) {
          if (r === false) {
            return false;
          }
          if (r === undefined) {
            return !!e && t;
          }
          if (r === true) {
            return t;
          }
          if (r && typeof r == "object") {
            return polyfills._extends({}, t, r);
          }
          throw new Error(
            `Unexpected type for \`${o}\`, expect boolean/undefined/object, got: ${typeof r}`,
          );
        };
      }
      exports.BROWSER_LOG_KEY = BROWSER_LOG_KEY;
      exports.BROWSER_LOG_VALUE = BROWSER_LOG_VALUE;
      exports.ENCODE_NAME_PREFIX = ENCODE_NAME_PREFIX;
      exports.EncodedNameTransformMap = EncodedNameTransformMap;
      exports.FederationModuleManifest = FederationModuleManifest;
      exports.MANIFEST_EXT = MANIFEST_EXT;
      exports.MFModuleType = MFModuleType;
      exports.MFPrefetchCommon = MFPrefetchCommon;
      exports.MODULE_DEVTOOL_IDENTIFIER = MODULE_DEVTOOL_IDENTIFIER;
      exports.ManifestFileName = ManifestFileName;
      exports.NameTransformMap = NameTransformMap;
      exports.NameTransformSymbol = NameTransformSymbol;
      exports.SEPARATOR = SEPARATOR;
      exports.StatsFileName = StatsFileName;
      exports.TEMP_DIR = TEMP_DIR;
      exports.assert = assert;
      exports.composeKeyWithSeparator = composeKeyWithSeparator;
      exports.containerPlugin = ContainerPlugin;
      exports.containerReferencePlugin = ContainerReferencePlugin;
      exports.createLink = createLink;
      exports.createLogger = createLogger;
      exports.createScript = createScript;
      exports.createScriptNode = createScriptNode;
      exports.decodeName = decodeName;
      exports.encodeName = encodeName;
      exports.error = error;
      exports.generateExposeFilename = generateExposeFilename;
      exports.generateShareFilename = generateShareFilename;
      exports.generateSnapshotFromManifest = generateSnapshotFromManifest;
      exports.getProcessEnv = getProcessEnv;
      exports.getResourceUrl = getResourceUrl;
      exports.inferAutoPublicPath = inferAutoPublicPath;
      exports.isBrowserEnv = isBrowserEnv;
      exports.isDebugMode = isDebugMode;
      exports.isManifestProvider = isManifestProvider;
      exports.isRequiredVersion = isRequiredVersion;
      exports.isStaticResourcesEqual = isStaticResourcesEqual;
      exports.loadScript = loadScript;
      exports.loadScriptNode = loadScriptNode;
      exports.logger = logger;
      exports.moduleFederationPlugin = ModuleFederationPlugin;
      exports.normalizeOptions = normalizeOptions;
      exports.parseEntry = parseEntry;
      exports.safeToString = safeToString;
      exports.safeWrapper = safeWrapper;
      exports.sharePlugin = SharePlugin;
      exports.simpleJoinRemoteEntry = simpleJoinRemoteEntry;
      exports.warn = warn;
    },
    31026: function (e, t) {
      "use strict";

      function o() {
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var r in o) {
                if (Object.prototype.hasOwnProperty.call(o, r)) {
                  e[r] = o[r];
                }
              }
            }
            return e;
          };
        return o.apply(this, arguments);
      }
      t._extends = o;
    },
    79011: function (e, t) {
      "use strict";

      t.FEDERATION_SUPPORTED_TYPES = ["script"];
    },
    79083: function (e, t, o) {
      "use strict";

      var r = o(84620);
      var n = o(79011);
      function a(e) {
        var t = Object.create(null);
        if (e) {
          Object.keys(e).forEach(function (o) {
            if (o !== "default") {
              var r = Object.getOwnPropertyDescriptor(e, o);
              Object.defineProperty(
                t,
                o,
                r.get
                  ? r
                  : {
                      enumerable: true,
                      get: function () {
                        return e[o];
                      },
                    },
              );
            }
          });
        }
        t.default = e;
        return Object.freeze(t);
      }
      var i = a(r);
      function s(e) {
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
      const l = "@";
      const c = "-";
      const u = "/";
      const d = {
        [l]: "scope_",
        [c]: "_",
        [u]: "__",
      };
      const p = {
        [d[l]]: l,
        [d[c]]: c,
        [d[u]]: u,
      };
      const m = {
        runtime: i,
        instance: undefined,
        initOptions: undefined,
        bundlerRuntime: {
          remotes: function (e) {
            const {
              chunkId: t,
              promises: o,
              chunkMapping: r,
              idToExternalAndNameMapping: a,
              webpackRequire: i,
              idToRemoteMap: m,
            } = e;
            s(i);
            if (i.o(r, t)) {
              r[t].forEach((e) => {
                let t = i.R;
                t ||= [];
                const r = a[e];
                const s = m[e];
                if (t.indexOf(r) >= 0) {
                  return;
                }
                t.push(r);
                if (r.p) {
                  return o.push(r.p);
                }
                const f = (t) => {
                  t ||= new Error("Container missing");
                  if (typeof t.message == "string") {
                    t.message += `\nwhile loading "${r[1]}" from ${r[2]}`;
                  }
                  i.m[e] = () => {
                    throw t;
                  };
                  r.p = 0;
                };
                const h = (e, t, n, a, i, s) => {
                  try {
                    const l = e(t, n);
                    if (!l || !l.then) {
                      return i(l, a, s);
                    }
                    {
                      const e = l.then((e) => i(e, a), f);
                      if (!s) {
                        return e;
                      }
                      o.push((r.p = e));
                    }
                  } catch (e) {
                    f(e);
                  }
                };
                const _ = (e, t, o) => (e ? h(i.I, r[0], 0, e, g, o) : f());
                var g = (e, o, n) => h(o.get, r[1], t, 0, b, n);
                var b = (t) => {
                  r.p = 1;
                  i.m[e] = (e) => {
                    e.exports = t();
                  };
                };
                const y = () => {
                  try {
                    const e =
                      (function (e, t) {
                        try {
                          let o = e;
                          if (t) {
                            if (!o.startsWith(t)) {
                              return o;
                            }
                            o = o.replace(new RegExp(t, "g"), "");
                          }
                          o = o
                            .replace(new RegExp(`${d[l]}`, "g"), p[d[l]])
                            .replace(new RegExp(`${d[u]}`, "g"), p[d[u]])
                            .replace(new RegExp(`${d[c]}`, "g"), p[d[c]]);
                          return o;
                        } catch (e) {
                          throw e;
                        }
                      })(s[0].name, "ENCODE_NAME_PREFIX") + r[1].slice(1);
                    const t = i.federation.instance;
                    const o = () =>
                      i.federation.instance.loadRemote(e, {
                        loadFactory: false,
                        from: "build",
                      });
                    if (t.options.shareStrategy === "version-first") {
                      return Promise.all(
                        t.sharedHandler.initializeSharing(r[0]),
                      ).then(() => o());
                    } else {
                      return o();
                    }
                  } catch (e) {
                    f(e);
                  }
                };
                if (
                  s.length === 1 &&
                  n.FEDERATION_SUPPORTED_TYPES.includes(s[0].externalType) &&
                  s[0].name
                ) {
                  h(y, r[2], 0, 0, b, 1);
                } else {
                  h(i, r[2], 0, 0, _, 1);
                }
              });
            }
          },
          consumes: function (e) {
            const {
              chunkId: t,
              promises: o,
              chunkMapping: r,
              installedModules: n,
              moduleToHandlerMapping: a,
              webpackRequire: i,
            } = e;
            s(i);
            if (i.o(r, t)) {
              r[t].forEach((e) => {
                if (i.o(n, e)) {
                  return o.push(n[e]);
                }
                const t = (t) => {
                  n[e] = 0;
                  i.m[e] = (o) => {
                    delete i.c[e];
                    o.exports = t();
                  };
                };
                const r = (t) => {
                  delete n[e];
                  i.m[e] = (o) => {
                    delete i.c[e];
                    throw t;
                  };
                };
                try {
                  const s = i.federation.instance;
                  if (!s) {
                    throw new Error("Federation instance not found!");
                  }
                  const { shareKey: l, getter: c, shareInfo: u } = a[e];
                  const d = s
                    .loadShare(l, {
                      customShareInfo: u,
                    })
                    .then((e) => (e === false ? c() : e));
                  if (d.then) {
                    o.push((n[e] = d.then(t).catch(r)));
                  } else {
                    t(d);
                  }
                } catch (e) {
                  r(e);
                }
              });
            }
          },
          I: function ({
            shareScopeName: e,
            webpackRequire: t,
            initPromises: o,
            initTokens: r,
            initScope: a,
          }) {
            a ||= [];
            const i = t.federation.instance;
            var l = r[e];
            l ||= r[e] = {
              from: i.name,
            };
            if (a.indexOf(l) >= 0) {
              return;
            }
            a.push(l);
            const c = o[e];
            if (c) {
              return c;
            }
            var u = (o) => {
              var r = (e) => {
                t = "Initialization of sharing external failed: " + e;
                return (
                  typeof console != "undefined" &&
                  console.warn &&
                  console.warn(t)
                );
                var t;
              };
              try {
                var n = t(o);
                if (!n) {
                  return;
                }
                var i = (o) => o && o.init && o.init(t.S[e], a);
                if (n.then) {
                  return d.push(n.then(i, r));
                }
                var s = i(n);
                if (s && typeof s != "boolean" && s.then) {
                  return d.push(s.catch(r));
                }
              } catch (e) {
                r(e);
              }
            };
            const d = i.initializeSharing(e, {
              strategy: i.options.shareStrategy,
              initScope: a,
              from: "build",
            });
            s(t);
            const p = t.federation.bundlerRuntimeOptions.remotes;
            if (p) {
              Object.keys(p.idToRemoteMap).forEach((e) => {
                const t = p.idToRemoteMap[e];
                const o = p.idToExternalAndNameMapping[e][2];
                if (t.length > 1) {
                  u(o);
                } else if (t.length === 1) {
                  const e = t[0];
                  if (!n.FEDERATION_SUPPORTED_TYPES.includes(e.externalType)) {
                    u(o);
                  }
                }
              });
            }
            if (d.length) {
              return (o[e] = Promise.all(d).then(() => (o[e] = true)));
            } else {
              return (o[e] = true);
            }
          },
          S: {},
          installInitialConsumes: function (e) {
            const {
              moduleToHandlerMapping: t,
              webpackRequire: o,
              installedModules: r,
              initialConsumes: n,
            } = e;
            n.forEach((e) => {
              o.m[e] = (n) => {
                r[e] = 0;
                delete o.c[e];
                const a = (function (e) {
                  const {
                    moduleId: t,
                    moduleToHandlerMapping: o,
                    webpackRequire: r,
                  } = e;
                  const n = r.federation.instance;
                  if (!n) {
                    throw new Error("Federation instance not found!");
                  }
                  const { shareKey: a, shareInfo: i } = o[t];
                  try {
                    return n.loadShareSync(a, {
                      customShareInfo: i,
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
                  moduleToHandlerMapping: t,
                  webpackRequire: o,
                });
                if (typeof a != "function") {
                  throw new Error(
                    `Shared module is not available for eager consumption: ${e}`,
                  );
                }
                n.exports = a();
              };
            });
          },
          initContainerEntry: function (e) {
            const {
              webpackRequire: t,
              shareScope: o,
              initScope: r,
              shareScopeKey: n,
              remoteEntryInitOptions: a,
            } = e;
            if (!t.S) {
              return;
            }
            if (
              !t.federation ||
              !t.federation.instance ||
              !t.federation.initOptions
            ) {
              return;
            }
            const i = t.federation.instance;
            var s = n || "default";
            i.initOptions({
              name: t.federation.initOptions.name,
              remotes: [],
              ...a,
            });
            i.initShareScopeMap(s, o, {
              hostShareScopeMap: a?.shareScopeMap || {},
            });
            if (t.federation.attachShareScopeMap) {
              t.federation.attachShareScopeMap(t);
            }
            if (typeof t.federation.prefetch == "function") {
              t.federation.prefetch();
            }
            return t.I(s, r);
          },
        },
        attachShareScopeMap: s,
        bundlerRuntimeOptions: {},
      };
      e.exports = m;
    },
    84527: function (e, t, o) {
      o.p = `${window.globalServiceVars.careerPlatformFront.staticHost}/`;
    },
    31735: function (e, t, o) {
      "use strict";

      o.d(t, {
        get: () => o.getContainer,
        init: () => o.initContainer,
      });
    },
    91534: function (e, t, o) {
      "use strict";

      var r = o(79083);
      var n = o.n(r);
      const a = [];
      const i = {};
      if (
        (o.initializeSharingData || o.initializeExposesData) &&
        o.federation
      ) {
        const e = (e, t, o) => {
          if (e && e[t]) {
            e[t] = o;
          }
        };
        const t = (e, t, o) => {
          const r = o();
          var n;
          var a;
          var i;
          if (Array.isArray(r)) {
            if ((i = (n = e)[(a = t)]) === null || i === undefined) {
              n[a] = [];
            }
            e[t].push(...r);
          } else if (typeof r == "object" && r !== null) {
            var s;
            var l;
            var c;
            if ((c = (s = e)[(l = t)]) === null || c === undefined) {
              s[l] = {};
            }
            Object.assign(e[t], r);
          }
        };
        const r = (e, t, o) => {
          var r;
          var n;
          var a;
          if ((a = (r = e)[(n = t)]) === null || a === undefined) {
            r[n] = o();
          }
        };
        const y = o.remotesLoadingData?.chunkMapping ?? {};
        const E = o.remotesLoadingData?.moduleIdToRemoteDataMapping ?? {};
        const S = o.initializeSharingData?.scopeToSharingDataMapping ?? {};
        const v = o.consumesLoadingData?.chunkMapping ?? {};
        const N = o.consumesLoadingData?.moduleIdToConsumeDataMapping ?? {};
        const w = {};
        const R = [];
        const I = {};
        const O = o.initializeExposesData?.shareScope;
        for (const e in n()) {
          o.federation[e] = n()[e];
        }
        r(o.federation, "consumesLoadingModuleToHandlerMapping", () => {
          const e = {};
          for (let [t, o] of Object.entries(N)) {
            e[t] = {
              getter: o.fallback,
              shareInfo: {
                shareConfig: {
                  fixedDependencies: false,
                  requiredVersion: o.requiredVersion,
                  strictVersion: o.strictVersion,
                  singleton: o.singleton,
                  eager: o.eager,
                },
                scope: [o.shareScope],
              },
              shareKey: o.shareKey,
            };
          }
          return e;
        });
        r(o.federation, "initOptions", () => ({}));
        r(o.federation.initOptions, "name", () => "career_platform_front");
        r(o.federation.initOptions, "shareStrategy", () => "version-first");
        r(o.federation.initOptions, "shared", () => {
          const e = {};
          for (let [t, o] of Object.entries(S)) {
            for (let r of o) {
              if (typeof r == "object" && r !== null) {
                const {
                  name: o,
                  version: n,
                  factory: a,
                  eager: i,
                  singleton: s,
                  requiredVersion: l,
                  strictVersion: c,
                } = r;
                const u = {};
                const d = function (e) {
                  return e !== undefined;
                };
                if (d(s)) {
                  u.singleton = s;
                }
                if (d(l)) {
                  u.requiredVersion = l;
                }
                if (d(i)) {
                  u.eager = i;
                }
                if (d(c)) {
                  u.strictVersion = c;
                }
                const p = {
                  version: n,
                  scope: [t],
                  shareConfig: u,
                  get: a,
                };
                if (e[o]) {
                  e[o].push(p);
                } else {
                  e[o] = [p];
                }
              }
            }
          }
          return e;
        });
        t(o.federation.initOptions, "remotes", () =>
          Object.values(i)
            .flat()
            .filter((e) => e.externalType === "script"),
        );
        t(o.federation.initOptions, "plugins", () => a);
        r(o.federation, "bundlerRuntimeOptions", () => ({}));
        r(o.federation.bundlerRuntimeOptions, "remotes", () => ({}));
        r(o.federation.bundlerRuntimeOptions.remotes, "chunkMapping", () => y);
        r(
          o.federation.bundlerRuntimeOptions.remotes,
          "idToExternalAndNameMapping",
          () => {
            const e = {};
            for (let [t, o] of Object.entries(E)) {
              e[t] = [o.shareScope, o.name, o.externalModuleId, o.remoteName];
            }
            return e;
          },
        );
        r(
          o.federation.bundlerRuntimeOptions.remotes,
          "webpackRequire",
          () => o,
        );
        t(o.federation.bundlerRuntimeOptions.remotes, "idToRemoteMap", () => {
          const e = {};
          for (let [t, o] of Object.entries(E)) {
            const r = i[o.remoteName];
            if (r) {
              e[t] = r;
            }
          }
          return e;
        });
        e(o, "S", o.federation.bundlerRuntime.S);
        if (o.federation.attachShareScopeMap) {
          o.federation.attachShareScopeMap(o);
        }
        e(o.f, "remotes", (e, t) =>
          o.federation.bundlerRuntime.remotes({
            chunkId: e,
            promises: t,
            chunkMapping: y,
            idToExternalAndNameMapping:
              o.federation.bundlerRuntimeOptions.remotes
                .idToExternalAndNameMapping,
            idToRemoteMap:
              o.federation.bundlerRuntimeOptions.remotes.idToRemoteMap,
            webpackRequire: o,
          }),
        );
        e(o.f, "consumes", (e, t) =>
          o.federation.bundlerRuntime.consumes({
            chunkId: e,
            promises: t,
            chunkMapping: v,
            moduleToHandlerMapping:
              o.federation.consumesLoadingModuleToHandlerMapping,
            installedModules: w,
            webpackRequire: o,
          }),
        );
        e(o, "I", (e, t) =>
          o.federation.bundlerRuntime.I({
            shareScopeName: e,
            initScope: t,
            initPromises: R,
            initTokens: I,
            webpackRequire: o,
          }),
        );
        e(o, "initContainer", (e, t, r) =>
          o.federation.bundlerRuntime.initContainerEntry({
            shareScope: e,
            initScope: t,
            remoteEntryInitOptions: r,
            shareScopeKey: O,
            webpackRequire: o,
          }),
        );
        e(o, "getContainer", (e, t) => {
          var r = o.initializeExposesData.moduleMap;
          o.R = t;
          t = Object.prototype.hasOwnProperty.call(r, e)
            ? r[e]()
            : Promise.resolve().then(() => {
                throw new Error(
                  'Module "' + e + '" does not exist in container.',
                );
              });
          o.R = undefined;
          return t;
        });
        o.federation.instance = o.federation.runtime.init(
          o.federation.initOptions,
        );
        if (o.consumesLoadingData?.initialConsumes) {
          o.federation.bundlerRuntime.installInitialConsumes({
            webpackRequire: o,
            installedModules: w,
            initialConsumes: o.consumesLoadingData.initialConsumes,
            moduleToHandlerMapping:
              o.federation.consumesLoadingModuleToHandlerMapping,
          });
        }
      }
    },
  };
  var __webpack_module_cache__ = {};
  var inProgress;
  var dataWebpackPrefix;
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (t !== undefined) {
      return t.exports;
    }
    var o = (__webpack_module_cache__[e] = {
      id: e,
      loaded: false,
      exports: {},
    });
    __webpack_modules__[e].call(o.exports, o, o.exports, __webpack_require__);
    o.loaded = true;
    return o.exports;
  }
  __webpack_require__.m = __webpack_modules__;
  __webpack_require__.c = __webpack_module_cache__;
  __webpack_require__.federation ||= {
    chunkMatcher: function (e) {
      return true;
    },
    rootOutputDir: "",
  };
  __webpack_require__.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    __webpack_require__.d(t, {
      a: t,
    });
    return t;
  };
  __webpack_require__.d = (e, t) => {
    for (var o in t) {
      if (__webpack_require__.o(t, o) && !__webpack_require__.o(e, o)) {
        Object.defineProperty(e, o, {
          enumerable: true,
          get: t[o],
        });
      }
    }
  };
  __webpack_require__.f = {};
  __webpack_require__.e = (e) =>
    Promise.all(
      Object.keys(__webpack_require__.f).reduce((t, o) => {
        __webpack_require__.f[o](e, t);
        return t;
      }, []),
    );
  __webpack_require__.u = (e) =>
    (({
      122: "CareerGoal-route",
      129: "flagEmojiFont",
      18: "notSharedVendors",
      284: "Landing-route",
      32: "CollectionEdProgram-route",
      33: "AdminCoursesCatalog-route",
      346: "AdminProfession-route",
      36: "AdminEducationsCatalog-route",
      422: "EdProgram",
      423: "phoneInputMetadataMax",
      425: "AdminStorefronts-route",
      438: "LK-route",
      461: "Article-route",
      494: "ArticlesCatalog-route",
      532: "AdminArticle-route",
      55: "Profession-route",
      563: "AdminPromotionsCatalog-route",
      564: "CertLanding-route",
      577: "AdminEducation-route",
      590: "AdminStreamsCatalog-route",
      592: "phoneInputMetadataMobile",
      601: "Professions-route",
      644: "phoneInputMetadataLimitedMobile",
      697: "AdminProvidersCatalog-route",
      729: "AdminProvidersStreamWeightPageLayout-route",
      739: "fallbackSharedVendors",
      755: "AdminArticlesCatalog-route",
      785: "libphonenumber-js",
      820: "phoneInputMetadataLimitedMax",
      854: "AdminProfessionsCatalog-route",
      952: "AdminStream-route",
      953: "AdminCourse-route",
      969: "AdminCollectionEdProgramsCatalog-route",
    })[e] || e) +
    "." +
    {
      122: "22332c77d2039c01",
      129: "e2a997d8d975b98b",
      18: "ea74c66ab84aa412",
      213: "7b889c2b28177f7d",
      262: "cba7fafb01f38115",
      281: "eaa03d562a6e9556",
      284: "38bf5e87e79d663b",
      285: "432b1456d54321d1",
      32: "e3fc708342909681",
      33: "5461181ac2cd3961",
      346: "adc4dda2c2f8a870",
      352: "a1e93493b2e13b4b",
      36: "6ee0cb1f37508595",
      379: "4d294eef44519955",
      409: "608603d437547a50",
      422: "7679b83b4c34fee5",
      423: "19f580c6584a7d8b",
      425: "2b0f6d7a3bf6718e",
      438: "42776a03b7f5c273",
      443: "2ed22847220f580b",
      461: "0d076bba76ffead5",
      494: "c5851a25c533ad4a",
      532: "82342740c6229a5b",
      55: "874909f9650f24f1",
      563: "5d32132dee9f51a2",
      564: "82fd673bd221bc9e",
      577: "31b97968c6d0b7a6",
      590: "a5fe03266c39f887",
      592: "161f843e8ac0acc0",
      601: "61faab2712e824ed",
      644: "8810d3f7e364fbf6",
      697: "12c369266e5411cb",
      729: "eb3851c6718a3027",
      739: "c2a8f19efc6a5c9a",
      755: "709468dff7cbdfe6",
      785: "477b347b0a8f932f",
      809: "cd72d264fccc607a",
      820: "682b545a4e90cf4e",
      831: "8103bf96113ee3fa",
      854: "8f3ea09f86d1ab43",
      952: "5cca443f86c26928",
      953: "1c977de08c20f4c6",
      957: "2aa96959e2d54afb",
      969: "4a7aca2d0b0ad233",
    }[e] +
    ".js";
  __webpack_require__.miniCssF = (e) =>
    (({
      122: "CareerGoal-route",
      284: "Landing-route",
      32: "CollectionEdProgram-route",
      33: "AdminCoursesCatalog-route",
      346: "AdminProfession-route",
      36: "AdminEducationsCatalog-route",
      422: "EdProgram",
      425: "AdminStorefronts-route",
      438: "LK-route",
      461: "Article-route",
      494: "ArticlesCatalog-route",
      532: "AdminArticle-route",
      55: "Profession-route",
      563: "AdminPromotionsCatalog-route",
      564: "CertLanding-route",
      577: "AdminEducation-route",
      590: "AdminStreamsCatalog-route",
      601: "Professions-route",
      697: "AdminProvidersCatalog-route",
      729: "AdminProvidersStreamWeightPageLayout-route",
      755: "AdminArticlesCatalog-route",
      854: "AdminProfessionsCatalog-route",
      952: "AdminStream-route",
      953: "AdminCourse-route",
      969: "AdminCollectionEdProgramsCatalog-route",
    })[e] || e) +
    "." +
    {
      122: "d4ca7fac8255d7f5",
      262: "1c772334b05ca415",
      284: "55f5109f57a9dd3b",
      32: "97c84b7b06d15ecc",
      33: "d4de9c2eaed094bd",
      346: "2f5222ca44d1bfb8",
      36: "59ea6808dbfd604d",
      422: "eeab6e1e999cf15f",
      425: "de36b768c0f5bed8",
      438: "a7119f6a60e68244",
      443: "2d540ea4c5865505",
      461: "0831b65ab949ccb9",
      494: "ee4b48e00ab6f76a",
      532: "edfbd07e33ba923f",
      55: "12d40285710c4fb7",
      563: "443d49b6ed658b5d",
      564: "8a46552614376ea4",
      577: "5e84a1efcd818e12",
      590: "24d9b0eacbfed1e4",
      601: "96f21a44bec01894",
      697: "e27f237f172be2e8",
      729: "8dd7e3611a1aa8e8",
      755: "45709d11f81c945c",
      854: "05224d91abcbeb7c",
      952: "5e84a1efcd818e12",
      953: "5e84a1efcd818e12",
      969: "a2616b5f754c78b4",
    }[e] +
    ".css";
  __webpack_require__.h = () => "8aa536203c431dec";
  (() => {
    __webpack_require__.g = (() => {
      if (typeof globalThis == "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (e) {
        if (typeof window == "object") {
          return window;
        }
      }
    })();
  })();
  __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
  inProgress = {};
  dataWebpackPrefix = "career-platform-front:";
  __webpack_require__.l = function (e, t, o, r) {
    if (inProgress[e]) {
      inProgress[e].push(t);
    } else {
      var n;
      var a;
      if (o !== undefined) {
        for (
          var i = document.getElementsByTagName("script"), s = 0;
          s < i.length;
          s++
        ) {
          var l = i[s];
          if (
            l.getAttribute("src") == e ||
            l.getAttribute("data-webpack") == dataWebpackPrefix + o
          ) {
            n = l;
            break;
          }
        }
      }
      if (!n) {
        a = true;
        (n = document.createElement("script")).charset = "utf-8";
        n.timeout = 300;
        if (__webpack_require__.nc) {
          n.setAttribute("nonce", __webpack_require__.nc);
        }
        n.setAttribute("data-webpack", dataWebpackPrefix + o);
        n.src = e;
        if (n.src.indexOf(window.location.origin + "/") !== 0) {
          n.crossOrigin = "anonymous";
        }
      }
      inProgress[e] = [t];
      function c(t, o) {
        n.onerror = n.onload = null;
        clearTimeout(u);
        var r = inProgress[e];
        delete inProgress[e];
        if (n.parentNode) {
          n.parentNode.removeChild(n);
        }
        if (r) {
          r.forEach(function (e) {
            return e(o);
          });
        }
        if (t) {
          return t(o);
        }
      }
      var u = setTimeout(
        c.bind(null, undefined, {
          type: "timeout",
          target: n,
        }),
        300000,
      );
      n.onerror = c.bind(null, n.onerror);
      n.onload = c.bind(null, n.onload);
      if (a) {
        document.head.appendChild(n);
      }
    }
  };
  __webpack_require__.r = (e) => {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module",
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true,
    });
  };
  __webpack_require__.nmd = (e) => {
    e.paths = [];
    e.children ||= [];
    return e;
  };
  __webpack_require__.p = "";
  __webpack_require__.rv = () => "1.3.10";
  __webpack_require__.S = {};
  __webpack_require__.initializeSharingData = {
    scopeToSharingDataMapping: {},
    uniqueName: "career-platform-front",
  };
  __webpack_require__.I =
    __webpack_require__.I ||
    function () {
      throw new Error("should have __webpack_require__.I");
    };
  (() => {
    if (typeof document != "undefined") {
      function e(e) {
        return new Promise(function (t, o) {
          var r = __webpack_require__.miniCssF(e);
          var n = __webpack_require__.p + r;
          if (
            (function (e, t) {
              for (
                var o = document.getElementsByTagName("link"), r = 0;
                r < o.length;
                r++
              ) {
                var n =
                  (i = o[r]).getAttribute("data-href") ||
                  i.getAttribute("href");
                if (i.rel === "stylesheet" && (n === e || n === t)) {
                  return i;
                }
              }
              var a = document.getElementsByTagName("style");
              for (r = 0; r < a.length; r++) {
                var i;
                if (
                  (n = (i = a[r]).getAttribute("data-href")) === e ||
                  n === t
                ) {
                  return i;
                }
              }
            })(r, n)
          ) {
            return t();
          }
          (function (e, t, o, r, n) {
            var a = document.createElement("link");
            a.rel = "stylesheet";
            a.type = "text/css";
            if (__webpack_require__.nc) {
              a.nonce = __webpack_require__.nc;
            }
            a.onerror = a.onload = function (o) {
              a.onerror = a.onload = null;
              if (o.type === "load") {
                r();
              } else {
                var i = o && (o.type === "load" ? "missing" : o.type);
                var s = (o && o.target && o.target.href) || t;
                var l = new Error(
                  "Loading CSS chunk " + e + " failed.\\n(" + s + ")",
                );
                l.code = "CSS_CHUNK_LOAD_FAILED";
                l.type = i;
                l.request = s;
                if (a.parentNode) {
                  a.parentNode.removeChild(a);
                }
                n(l);
              }
            };
            a.href = t;
            if (a.href.indexOf(window.location.origin + "/") !== 0) {
              a.crossOrigin = "anonymous";
            }
            if (o) {
              o.parentNode.insertBefore(a, o.nextSibling);
            } else {
              document.head.appendChild(a);
            }
          })(e, n, null, t, o);
        });
      }
      var t = {
        91: 0,
      };
      __webpack_require__.f.miniCss = function (o, r) {
        if (t[o]) {
          r.push(t[o]);
        } else if (
          t[o] !== 0 &&
          {
            532: 1,
            425: 1,
            755: 1,
            284: 1,
            590: 1,
            494: 1,
            55: 1,
            564: 1,
            601: 1,
            33: 1,
            32: 1,
            697: 1,
            443: 1,
            346: 1,
            577: 1,
            122: 1,
            438: 1,
            563: 1,
            729: 1,
            953: 1,
            461: 1,
            952: 1,
            854: 1,
            422: 1,
            969: 1,
            36: 1,
            262: 1,
          }[o]
        ) {
          r.push(
            (t[o] = e(o).then(
              function () {
                t[o] = 0;
              },
              function (e) {
                delete t[o];
                throw e;
              },
            )),
          );
        }
      };
    }
  })();
  __webpack_require__.initializeExposesData = {
    moduleMap: {
      "./App": () =>
        Promise.all([
          __webpack_require__.e("18"),
          __webpack_require__.e("739"),
          __webpack_require__.e("262"),
          __webpack_require__.e("443"),
        ]).then(() => () => __webpack_require__(9822)),
    },
    shareScope: "default",
  };
  __webpack_require__.getContainer =
    __webpack_require__.getContainer ||
    function () {
      throw new Error("should have __webpack_require__.getContainer");
    };
  __webpack_require__.initContainer =
    __webpack_require__.initContainer ||
    function () {
      throw new Error("should have __webpack_require__.initContainer");
    };
  (() => {
    var e = {
      91: 0,
    };
    __webpack_require__.f.j = function (t, o) {
      var r = __webpack_require__.o(e, t) ? e[t] : undefined;
      if (r !== 0) {
        if (r) {
          o.push(r[2]);
        } else {
          var n = new Promise((o, n) => (r = e[t] = [o, n]));
          o.push((r[2] = n));
          var a = __webpack_require__.p + __webpack_require__.u(t);
          var i = new Error();
          __webpack_require__.l(
            a,
            function (o) {
              if (
                __webpack_require__.o(e, t) &&
                ((r = e[t]) !== 0 && (e[t] = undefined), r)
              ) {
                var n = o && (o.type === "load" ? "missing" : o.type);
                var a = o && o.target && o.target.src;
                i.message =
                  "Loading chunk " + t + " failed.\n(" + n + ": " + a + ")";
                i.name = "ChunkLoadError";
                i.type = n;
                i.request = a;
                r[1](i);
              }
            },
            "chunk-" + t,
            t,
          );
        }
      }
    };
    var t = (t, o) => {
      var r;
      var n;
      var [a, i, s] = o;
      var l = 0;
      if (a.some((t) => e[t] !== 0)) {
        for (r in i) {
          if (__webpack_require__.o(i, r)) {
            __webpack_require__.m[r] = i[r];
          }
        }
        if (s) {
          s(__webpack_require__);
        }
      }
      for (t && t(o); l < a.length; l++) {
        n = a[l];
        if (__webpack_require__.o(e, n) && e[n]) {
          e[n][0]();
        }
        e[n] = 0;
      }
    };
    var o = (globalThis.__career_platform_front_LOADABLE_LOADED_CHUNKS__ =
      globalThis.__career_platform_front_LOADABLE_LOADED_CHUNKS__ || []);
    o.forEach(t.bind(null, 0));
    o.push = t.bind(null, o.push.bind(o));
  })();
  __webpack_require__.ruid = "bundler=rspack@1.3.10";
  __webpack_require__(91534);
  __webpack_require__(84527);
  var __webpack_exports__ = __webpack_require__(31735);
  career_platform_front = __webpack_exports__;
})();
//# sourceMappingURL=remote.career_platform_front.571173f98036fff0.js.map
