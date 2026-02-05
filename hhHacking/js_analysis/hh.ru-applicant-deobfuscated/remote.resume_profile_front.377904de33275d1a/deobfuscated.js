var resume_profile_front;
(() => {
  var __webpack_modules__ = {
    58908: function (e, r) {
      "use strict";

      const t = "RUNTIME-001";
      const o = "RUNTIME-002";
      const n = "RUNTIME-003";
      const a = "RUNTIME-004";
      const i = "RUNTIME-005";
      const s = "RUNTIME-006";
      const c = "RUNTIME-007";
      const _ = "RUNTIME-008";
      const l = "TYPE-001";
      const u = "BUILD-001";
      function p() {
        p =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var o in t) {
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                  e[o] = t[o];
                }
              }
            }
            return e;
          };
        return p.apply(this, arguments);
      }
      const d = {
        [t]: "Failed to get remoteEntry exports.",
        [o]: 'The remote entry interface does not contain "init"',
        [n]: "Failed to get manifest.",
        [a]: "Failed to locate remote.",
        [i]: "Invalid loadShareSync function call from bundler runtime",
        [s]: "Invalid loadShareSync function call from runtime",
        [c]: "Failed to get remote snapshot.",
        [_]: "Failed to load script resources.",
      };
      const f = {
        [l]: "Failed to generate type declaration.",
      };
      const m = {
        [u]: "Failed to find expose module.",
      };
      const h = p({}, d, f, m);
      r.BUILD_001 = u;
      r.RUNTIME_001 = t;
      r.RUNTIME_002 = o;
      r.RUNTIME_003 = n;
      r.RUNTIME_004 = a;
      r.RUNTIME_005 = i;
      r.RUNTIME_006 = s;
      r.RUNTIME_007 = c;
      r.RUNTIME_008 = _;
      r.TYPE_001 = l;
      r.buildDescMap = m;
      r.errorDescMap = h;
      r.getShortErrorMsg = (e, r, t, o) => {
        const n = [`${[r[e]]} #${e}`];
        if (t) {
          n.push(`args: ${JSON.stringify(t)}`);
        }
        n.push(
          ((e) =>
            `https://module-federation.io/guide/troubleshooting/${e.split("-")[0].toLowerCase()}/${e}`)(
            e,
          ),
        );
        if (o) {
          n.push(`Original Error Message:\n ${o}`);
        }
        return n.join("\n");
      };
      r.runtimeDescMap = d;
      r.typeDescMap = f;
    },
    16515: function (e, r, t) {
      "use strict";

      var o = t(66340);
      var n = t(50495);
      var a = t(58908);
      const i = "[ Federation Runtime ]";
      const s = n.createLogger(i);
      function c(e, r) {
        if (!e) {
          _(r);
        }
      }
      function _(e) {
        if (e instanceof Error) {
          e.message = `${i}: ${e.message}`;
          throw e;
        }
        throw new Error(`${i}: ${e}`);
      }
      function l(e) {
        if (e instanceof Error) {
          e.message = `${i}: ${e.message}`;
          s.warn(e);
        } else {
          s.warn(e);
        }
      }
      function u(e, r) {
        if (e.findIndex((e) => e === r) === -1) {
          e.push(r);
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
      function d(e) {
        return e.entry !== undefined;
      }
      function f(e) {
        return !e.entry.includes(".json") && e.entry.includes(".js");
      }
      function m(e) {
        return e && typeof e == "object";
      }
      const h = Object.prototype.toString;
      function b(e) {
        if (Array.isArray(e)) {
          return e;
        } else {
          return [e];
        }
      }
      function g(e) {
        const r = {
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
            return r;
          }
        } else if ("ssrRemoteEntry" in e) {
          return {
            url: e.ssrRemoteEntry || r.url,
            type: e.ssrRemoteEntryType || r.type,
            globalName: e.globalName,
          };
        } else {
          return r;
        }
      }
      const y = typeof globalThis == "object" ? globalThis : window;
      const k = (() => {
        try {
          return document.defaultView;
        } catch (e) {
          return y;
        }
      })();
      const w = k;
      function E(e, r, t) {
        Object.defineProperty(e, r, {
          value: t,
          configurable: false,
          writable: true,
        });
      }
      function S(e, r) {
        return Object.hasOwnProperty.call(e, r);
      }
      if (!S(y, "__GLOBAL_LOADING_REMOTE_ENTRY__")) {
        E(y, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
      }
      const v = y.__GLOBAL_LOADING_REMOTE_ENTRY__;
      function q(e) {
        var r;
        var t;
        var o;
        var n;
        var a;
        var i;
        if (S(e, "__VMOK__") && !S(e, "__FEDERATION__")) {
          E(e, "__FEDERATION__", e.__VMOK__);
        }
        if (!S(e, "__FEDERATION__")) {
          E(e, "__FEDERATION__", {
            __GLOBAL_PLUGIN__: [],
            __INSTANCES__: [],
            moduleInfo: {},
            __SHARE__: {},
            __MANIFEST_LOADING__: {},
            __PRELOADED_MAP__: new Map(),
          });
          E(e, "__VMOK__", e.__FEDERATION__);
        }
        if ((r = e.__FEDERATION__).__GLOBAL_PLUGIN__ == null) {
          r.__GLOBAL_PLUGIN__ = [];
        }
        if ((t = e.__FEDERATION__).__INSTANCES__ == null) {
          t.__INSTANCES__ = [];
        }
        if ((o = e.__FEDERATION__).moduleInfo == null) {
          o.moduleInfo = {};
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
      function N() {
        y.__FEDERATION__.__GLOBAL_PLUGIN__ = [];
        y.__FEDERATION__.__INSTANCES__ = [];
        y.__FEDERATION__.moduleInfo = {};
        y.__FEDERATION__.__SHARE__ = {};
        y.__FEDERATION__.__MANIFEST_LOADING__ = {};
        Object.keys(v).forEach((e) => {
          delete v[e];
        });
      }
      function R(e) {
        y.__FEDERATION__.__INSTANCES__.push(e);
      }
      function I() {
        return y.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
      }
      function O(e, r = n.isDebugMode()) {
        if (r) {
          y.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = e;
          y.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.11.1";
        }
      }
      function T(e, r) {
        if (typeof r == "string") {
          if (e[r]) {
            return {
              value: e[r],
              key: r,
            };
          }
          {
            const t = Object.keys(e);
            for (const o of t) {
              const [t, n] = o.split(":");
              const a = `${t}:${r}`;
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
              key: r,
            };
          }
        }
        throw new Error("key must be string");
      }
      q(y);
      q(k);
      const M = () => k.__FEDERATION__.moduleInfo;
      const P = (e, r) => {
        const t = T(r, p(e)).value;
        if (t && !t.version && "version" in e && e.version) {
          t.version = e.version;
        }
        if (t) {
          return t;
        }
        if ("version" in e && e.version) {
          const { version: r } = e;
          const t = p(o._object_without_properties_loose(e, ["version"]));
          const n = T(k.__FEDERATION__.moduleInfo, t).value;
          if ((n == null ? undefined : n.version) === r) {
            return n;
          }
        }
      };
      const A = (e) => P(e, k.__FEDERATION__.moduleInfo);
      const x = (e, r) => {
        const t = p(e);
        k.__FEDERATION__.moduleInfo[t] = r;
        return k.__FEDERATION__.moduleInfo;
      };
      const $ = (e) => {
        k.__FEDERATION__.moduleInfo = o._extends(
          {},
          k.__FEDERATION__.moduleInfo,
          e,
        );
        return () => {
          const r = Object.keys(e);
          for (const e of r) {
            delete k.__FEDERATION__.moduleInfo[e];
          }
        };
      };
      const D = (e, r) => {
        const t = r || `__FEDERATION_${e}:custom__`;
        return {
          remoteEntryKey: t,
          entryExports: y[t],
        };
      };
      const L = (e) => {
        const { __GLOBAL_PLUGIN__: r } = k.__FEDERATION__;
        e.forEach((e) => {
          if (r.findIndex((r) => r.name === e.name) === -1) {
            r.push(e);
          } else {
            l(`The plugin ${e.name} has been registered.`);
          }
        });
      };
      const F = () => k.__FEDERATION__.__GLOBAL_PLUGIN__;
      const V = (e) => y.__FEDERATION__.__PRELOADED_MAP__.get(e);
      const j = (e) => y.__FEDERATION__.__PRELOADED_MAP__.set(e, true);
      const H = "default";
      const C = "global";
      const G = "[0-9A-Za-z-]+";
      const U = `(?:\\+(${G}(?:\\.${G})*))`;
      const B = "0|[1-9]\\d*";
      const K = "[0-9]+";
      const W = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
      const z = `(?:${K}|${W})`;
      const Y = `(?:${B}|${W})`;
      const X = `(?:-(${Y}(?:\\.${Y})*))`;
      const J = `${B}|x|X|\\*`;
      const Z = `[v=\\s]*(${J})(?:\\.(${J})(?:\\.(${J})(?:${X})?${U}?)?)?`;
      const Q = `^\\s*(${Z})\\s+-\\s+(${Z})\\s*$`;
      const ee = "((?:<|>)?=?)";
      const re = `(\\s*)${ee}\\s*(${`[v=\\s]*${`(${K})\\.(${K})\\.(${K})`}${`(?:-?(${z}(?:\\.${z})*))`}?${U}?`}|${Z})`;
      const te = "(?:~>?)";
      const oe = `(\\s*)${te}\\s+`;
      const ne = "(?:\\^)";
      const ae = `(\\s*)${ne}\\s+`;
      const ie = "(<|>)?=?\\s*\\*";
      const se = `^${ne}${Z}$`;
      const ce = `^${te}${Z}$`;
      const _e = `^${ee}\\s*${Z}$`;
      const le = `^${ee}\\s*(${`v?${`(${B})\\.(${B})\\.(${B})`}${X}?${U}?`})$|^$`;
      const ue = "^\\s*>=\\s*0.0.0\\s*$";
      function pe(e) {
        return new RegExp(e);
      }
      function de(e) {
        return !e || e.toLowerCase() === "x" || e === "*";
      }
      function fe(...e) {
        return (r) => e.reduce((e, r) => r(e), r);
      }
      function me(e) {
        return e.match(pe(le));
      }
      function he(e, r, t, o) {
        const n = `${e}.${r}.${t}`;
        if (o) {
          return `${n}-${o}`;
        } else {
          return n;
        }
      }
      function be(e) {
        return e.replace(pe(Q), (e, r, t, o, n, a, i, s, c, _, l, u) =>
          `${(r = de(t) ? "" : de(o) ? `>=${t}.0.0` : de(n) ? `>=${t}.${o}.0` : `>=${r}`)} ${(s = de(c) ? "" : de(_) ? `<${Number(c) + 1}.0.0-0` : de(l) ? `<${c}.${Number(_) + 1}.0-0` : u ? `<=${c}.${_}.${l}-${u}` : `<=${s}`)}`.trim(),
        );
      }
      function ge(e) {
        return e.replace(pe(re), "$1$2$3");
      }
      function ye(e) {
        return e.replace(pe(oe), "$1~");
      }
      function ke(e) {
        return e.replace(pe(ae), "$1^");
      }
      function we(e) {
        return e
          .trim()
          .split(/\s+/)
          .map((e) =>
            e.replace(pe(se), (e, r, t, o, n) =>
              de(r)
                ? ""
                : de(t)
                  ? `>=${r}.0.0 <${Number(r) + 1}.0.0-0`
                  : de(o)
                    ? r === "0"
                      ? `>=${r}.${t}.0 <${r}.${Number(t) + 1}.0-0`
                      : `>=${r}.${t}.0 <${Number(r) + 1}.0.0-0`
                    : n
                      ? r === "0"
                        ? t === "0"
                          ? `>=${r}.${t}.${o}-${n} <${r}.${t}.${Number(o) + 1}-0`
                          : `>=${r}.${t}.${o}-${n} <${r}.${Number(t) + 1}.0-0`
                        : `>=${r}.${t}.${o}-${n} <${Number(r) + 1}.0.0-0`
                      : r === "0"
                        ? t === "0"
                          ? `>=${r}.${t}.${o} <${r}.${t}.${Number(o) + 1}-0`
                          : `>=${r}.${t}.${o} <${r}.${Number(t) + 1}.0-0`
                        : `>=${r}.${t}.${o} <${Number(r) + 1}.0.0-0`,
            ),
          )
          .join(" ");
      }
      function Ee(e) {
        return e
          .trim()
          .split(/\s+/)
          .map((e) =>
            e.replace(pe(ce), (e, r, t, o, n) =>
              de(r)
                ? ""
                : de(t)
                  ? `>=${r}.0.0 <${Number(r) + 1}.0.0-0`
                  : de(o)
                    ? `>=${r}.${t}.0 <${r}.${Number(t) + 1}.0-0`
                    : n
                      ? `>=${r}.${t}.${o}-${n} <${r}.${Number(t) + 1}.0-0`
                      : `>=${r}.${t}.${o} <${r}.${Number(t) + 1}.0-0`,
            ),
          )
          .join(" ");
      }
      function Se(e) {
        return e
          .split(/\s+/)
          .map((e) =>
            e.trim().replace(pe(_e), (e, r, t, o, n, a) => {
              const i = de(t);
              const s = i || de(o);
              const c = s || de(n);
              if (r === "=" && c) {
                r = "";
              }
              a = "";
              if (i) {
                if (r === ">" || r === "<") {
                  return "<0.0.0-0";
                } else {
                  return "*";
                }
              } else if (r && c) {
                if (s) {
                  o = 0;
                }
                n = 0;
                if (r === ">") {
                  r = ">=";
                  if (s) {
                    t = Number(t) + 1;
                    o = 0;
                    n = 0;
                  } else {
                    o = Number(o) + 1;
                    n = 0;
                  }
                } else if (r === "<=") {
                  r = "<";
                  if (s) {
                    t = Number(t) + 1;
                  } else {
                    o = Number(o) + 1;
                  }
                }
                if (r === "<") {
                  a = "-0";
                }
                return `${r + t}.${o}.${n}${a}`;
              } else if (s) {
                return `>=${t}.0.0${a} <${Number(t) + 1}.0.0-0`;
              } else if (c) {
                return `>=${t}.${o}.0${a} <${t}.${Number(o) + 1}.0-0`;
              } else {
                return e;
              }
            }),
          )
          .join(" ");
      }
      function ve(e) {
        return e.trim().replace(pe(ie), "");
      }
      function qe(e, r) {
        if ((e = Number(e) || e) > (r = Number(r) || r)) {
          return 1;
        } else if (e === r) {
          return 0;
        } else {
          return -1;
        }
      }
      function Ne(e, r) {
        return (
          qe(e.major, r.major) ||
          qe(e.minor, r.minor) ||
          qe(e.patch, r.patch) ||
          (function (e, r) {
            const { preRelease: t } = e;
            const { preRelease: o } = r;
            if (t === undefined && Boolean(o)) {
              return 1;
            }
            if (Boolean(t) && o === undefined) {
              return -1;
            }
            if (t === undefined && o === undefined) {
              return 0;
            }
            for (let e = 0, r = t.length; e <= r; e++) {
              const r = t[e];
              const n = o[e];
              if (r !== n) {
                if (r === undefined && n === undefined) {
                  return 0;
                } else if (r) {
                  if (n) {
                    return qe(r, n);
                  } else {
                    return -1;
                  }
                } else {
                  return 1;
                }
              }
            }
            return 0;
          })(e, r)
        );
      }
      function Re(e, r) {
        return e.version === r.version;
      }
      function Ie(e, r) {
        switch (e.operator) {
          case "":
          case "=":
            return Re(e, r);
          case ">":
            return Ne(e, r) < 0;
          case ">=":
            return Re(e, r) || Ne(e, r) < 0;
          case "<":
            return Ne(e, r) > 0;
          case "<=":
            return Re(e, r) || Ne(e, r) > 0;
          case undefined:
            return true;
          default:
            return false;
        }
      }
      function Oe(e, r) {
        if (!e) {
          return false;
        }
        const t = (function (e) {
          return fe(be, ge, ye, ke)(e.trim()).split(/\s+/).join(" ");
        })(r);
        const o = t
          .split(" ")
          .map((e) =>
            (function (e) {
              return fe(we, Ee, Se, ve)(e);
            })(e),
          )
          .join(" ");
        const n = o.split(/\s+/).map((e) => e.trim().replace(pe(ue), ""));
        const a = me(e);
        if (!a) {
          return false;
        }
        const [, i, , s, c, _, l] = a;
        const u = {
          operator: i,
          version: he(s, c, _, l),
          major: s,
          minor: c,
          patch: _,
          preRelease: l == null ? undefined : l.split("."),
        };
        for (const e of n) {
          const r = me(e);
          if (!r) {
            return false;
          }
          const [, t, , o, n, a, i] = r;
          if (
            !Ie(
              {
                operator: t,
                version: he(o, n, a, i),
                major: o,
                minor: n,
                patch: a,
                preRelease: i == null ? undefined : i.split("."),
              },
              u,
            )
          ) {
            return false;
          }
        }
        return true;
      }
      function Te(e, r) {
        const t = r.shared || {};
        const n = r.name;
        const a = Object.keys(t).reduce((e, a) => {
          const i = b(t[a]);
          e[a] = e[a] || [];
          i.forEach((t) => {
            e[a].push(
              (function (e, r, t, n) {
                let a;
                a =
                  "get" in e
                    ? e.get
                    : "lib" in e
                      ? () => Promise.resolve(e.lib)
                      : () =>
                          Promise.resolve(() => {
                            throw new Error(`Can not get shared '${t}'!`);
                          });
                if (e.strategy) {
                  l(
                    '"shared.strategy is deprecated, please set in initOptions.shareStrategy instead!"',
                  );
                }
                return o._extends(
                  {
                    deps: [],
                    useIn: [],
                    from: r,
                    loading: null,
                  },
                  e,
                  {
                    shareConfig: o._extends(
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
              })(t, n, a, r.shareStrategy),
            );
          });
          return e;
        }, {});
        const i = o._extends({}, e.shared);
        Object.keys(a).forEach((e) => {
          if (i[e]) {
            a[e].forEach((r) => {
              if (!i[e].find((e) => e.version === r.version)) {
                i[e].push(r);
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
      function Me(e, r) {
        const t = (e) => {
          if (!Number.isNaN(Number(e))) {
            const r = e.split(".");
            let t = e;
            for (let e = 0; e < 3 - r.length; e++) {
              t += ".0";
            }
            return t;
          }
          return e;
        };
        return !!Oe(t(e), `<=${t(r)}`);
      }
      const Pe = (e, r) => {
        const t =
          r ||
          function (e, r) {
            return Me(e, r);
          };
        return Object.keys(e).reduce(
          (e, r) => (e ? (t(e, r) || e === "0" ? r : e) : r),
          0,
        );
      };
      const Ae = (e) => Boolean(e.loaded) || typeof e.lib == "function";
      const xe = (e) => Boolean(e.loading);
      function $e(e, r, t) {
        const o = e[r][t];
        return Pe(e[r][t], function (e, r) {
          return !Ae(o[e]) && Me(e, r);
        });
      }
      function De(e, r, t) {
        const o = e[r][t];
        return Pe(e[r][t], function (e, r) {
          const t = (e) => Ae(e) || xe(e);
          if (t(o[r])) {
            return !t(o[e]) || Boolean(Me(e, r));
          } else {
            return !t(o[e]) && Me(e, r);
          }
        });
      }
      function Le(e) {
        if (e === "loaded-first") {
          return De;
        } else {
          return $e;
        }
      }
      function Fe(e, r, t, o) {
        if (!e) {
          return;
        }
        const { shareConfig: n, scope: a = H, strategy: i } = t;
        const s = Array.isArray(a) ? a : [a];
        for (const a of s) {
          if (n && e[a] && e[a][r]) {
            const { requiredVersion: s } = n;
            const c = Le(i)(e, a, r);
            const u = () => {
              if (n.singleton) {
                if (typeof s == "string" && !Oe(c, s)) {
                  const o = `Version ${c} from ${c && e[a][r][c].from} of shared singleton module ${r} does not satisfy the requirement of ${t.from} which needs ${s})`;
                  if (n.strictVersion) {
                    _(o);
                  } else {
                    l(o);
                  }
                }
                return e[a][r][c];
              }
              if (s === false || s === "*") {
                return e[a][r][c];
              }
              if (Oe(c, s)) {
                return e[a][r][c];
              }
              for (const [t, o] of Object.entries(e[a][r])) {
                if (Oe(t, s)) {
                  return o;
                }
              }
            };
            const p = {
              shareScopeMap: e,
              scope: a,
              pkgName: r,
              version: c,
              GlobalFederation: w.__FEDERATION__,
              resolver: u,
            };
            return (o.emit(p) || p).resolver();
          }
        }
      }
      function Ve() {
        return w.__FEDERATION__.__SHARE__;
      }
      function je(e) {
        const { pkgName: r, extraOptions: t, shareInfos: o } = e;
        const a =
          (t == null ? undefined : t.resolver) ??
          ((e) => {
            if (!e) {
              return;
            }
            const r = {};
            e.forEach((e) => {
              r[e.version] = e;
            });
            const t = Pe(r, function (e, t) {
              return !Ae(r[e]) && Me(e, t);
            });
            return r[t];
          });
        return Object.assign(
          {},
          a(o[r]),
          t == null ? undefined : t.customShareInfo,
        );
      }
      var He = {
        global: {
          Global: w,
          nativeGlobal: k,
          resetFederationGlobalInfo: N,
          setGlobalFederationInstance: R,
          getGlobalFederationConstructor: I,
          setGlobalFederationConstructor: O,
          getInfoWithoutType: T,
          getGlobalSnapshot: M,
          getTargetSnapshotInfoByModuleInfo: P,
          getGlobalSnapshotInfoByModuleInfo: A,
          setGlobalSnapshotInfoByModuleInfo: x,
          addGlobalSnapshot: $,
          getRemoteEntryExports: D,
          registerGlobalPlugins: L,
          getGlobalHostPlugins: F,
          getPreloaded: V,
          setPreloaded: j,
        },
        share: {
          getRegisteredShare: Fe,
          getGlobalShareScope: Ve,
        },
      };
      function Ce(e, r) {
        for (const t of e) {
          const e = r.startsWith(t.name);
          let o = r.replace(t.name, "");
          if (e) {
            if (o.startsWith("/")) {
              o = `.${o}`;
              return {
                pkgNameOrAlias: t.name,
                expose: o,
                remote: t,
              };
            }
            if (o === "") {
              return {
                pkgNameOrAlias: t.name,
                expose: ".",
                remote: t,
              };
            }
          }
          const n = t.alias && r.startsWith(t.alias);
          let a = t.alias && r.replace(t.alias, "");
          if (t.alias && n) {
            if (a && a.startsWith("/")) {
              a = `.${a}`;
              return {
                pkgNameOrAlias: t.alias,
                expose: a,
                remote: t,
              };
            }
            if (a === "") {
              return {
                pkgNameOrAlias: t.alias,
                expose: ".",
                remote: t,
              };
            }
          }
        }
      }
      async function Ge({
        remoteInfo: e,
        remoteEntryExports: r,
        loaderHook: t,
      }) {
        const { entry: o, entryGlobalName: i, name: s, type: _ } = e;
        switch (_) {
          case "esm":
          case "module":
            return (async function ({ entry: e, remoteEntryExports: r }) {
              return new Promise((t, o) => {
                try {
                  if (r) {
                    t(r);
                  } else if (
                    typeof FEDERATION_ALLOW_NEW_FUNCTION != "undefined"
                  ) {
                    new Function(
                      "callbacks",
                      `import("${e}").then(callbacks[0]).catch(callbacks[1])`,
                    )([t, o]);
                  } else {
                    import(e).then(t).catch(o);
                  }
                } catch (e) {
                  o(e);
                }
              });
            })({
              entry: o,
              remoteEntryExports: r,
            });
          case "system":
            return (async function ({ entry: e, remoteEntryExports: r }) {
              return new Promise((t, o) => {
                try {
                  if (r) {
                    t(r);
                  } else {
                    new Function(
                      "callbacks",
                      `System.import("${e}").then(callbacks[0]).catch(callbacks[1])`,
                    )([t, o]);
                  }
                } catch (e) {
                  o(e);
                }
              });
            })({
              entry: o,
              remoteEntryExports: r,
            });
          default:
            return (async function ({
              name: e,
              globalName: r,
              entry: t,
              loaderHook: o,
            }) {
              const { entryExports: i } = D(e, r);
              return (
                i ||
                n
                  .loadScript(t, {
                    attrs: {},
                    createScriptHook: (e, r) => {
                      const t = o.lifecycle.createScript.emit({
                        url: e,
                        attrs: r,
                      });
                      if (t) {
                        if (
                          t instanceof HTMLScriptElement ||
                          "script" in t ||
                          "timeout" in t
                        ) {
                          return t;
                        } else {
                          return undefined;
                        }
                      }
                    },
                  })
                  .then(() => {
                    const { remoteEntryKey: o, entryExports: n } = D(e, r);
                    c(
                      n,
                      a.getShortErrorMsg(a.RUNTIME_001, a.runtimeDescMap, {
                        remoteName: e,
                        remoteEntryUrl: t,
                        remoteEntryKey: o,
                      }),
                    );
                    return n;
                  })
                  .catch((r) => {
                    c(
                      undefined,
                      a.getShortErrorMsg(a.RUNTIME_008, a.runtimeDescMap, {
                        remoteName: e,
                        resourceUrl: t,
                      }),
                    );
                    throw r;
                  })
              );
            })({
              entry: o,
              globalName: i,
              name: s,
              loaderHook: t,
            });
        }
      }
      function Ue(e) {
        const { entry: r, name: t } = e;
        return n.composeKeyWithSeparator(t, r);
      }
      async function Be({ origin: e, remoteEntryExports: r, remoteInfo: t }) {
        const o = Ue(t);
        if (r) {
          return r;
        }
        if (!v[o]) {
          const i = e.remoteHandler.hooks.lifecycle.loadEntry;
          const s = e.loaderHook;
          v[o] = i
            .emit({
              loaderHook: s,
              remoteInfo: t,
              remoteEntryExports: r,
            })
            .then(
              (e) =>
                e ||
                (n.isBrowserEnv()
                  ? Ge({
                      remoteInfo: t,
                      remoteEntryExports: r,
                      loaderHook: s,
                    })
                  : (async function ({ remoteInfo: e, loaderHook: r }) {
                      const {
                        entry: t,
                        entryGlobalName: o,
                        name: i,
                        type: s,
                      } = e;
                      const { entryExports: _ } = D(i, o);
                      return (
                        _ ||
                        n
                          .loadScriptNode(t, {
                            attrs: {
                              name: i,
                              globalName: o,
                              type: s,
                            },
                            loaderHook: {
                              createScriptHook: (e, t = {}) => {
                                const o = r.lifecycle.createScript.emit({
                                  url: e,
                                  attrs: t,
                                });
                                if (o) {
                                  if ("url" in o) {
                                    return o;
                                  } else {
                                    return undefined;
                                  }
                                }
                              },
                            },
                          })
                          .then(() => {
                            const { remoteEntryKey: e, entryExports: r } = D(
                              i,
                              o,
                            );
                            c(
                              r,
                              a.getShortErrorMsg(
                                a.RUNTIME_001,
                                a.runtimeDescMap,
                                {
                                  remoteName: i,
                                  remoteEntryUrl: t,
                                  remoteEntryKey: e,
                                },
                              ),
                            );
                            return r;
                          })
                          .catch((e) => {
                            throw e;
                          })
                      );
                    })({
                      remoteInfo: t,
                      loaderHook: s,
                    })),
            );
        }
        return v[o];
      }
      function Ke(e) {
        return o._extends({}, e, {
          entry: "entry" in e ? e.entry : "",
          type: e.type || C,
          entryGlobalName: e.entryGlobalName || e.name,
          shareScope: e.shareScope || H,
        });
      }
      let We = class {
        async getEntry() {
          if (this.remoteEntryExports) {
            return this.remoteEntryExports;
          }
          let e;
          try {
            e = await Be({
              origin: this.host,
              remoteInfo: this.remoteInfo,
              remoteEntryExports: this.remoteEntryExports,
            });
          } catch (r) {
            const t = Ue(this.remoteInfo);
            e = await this.host.loaderHook.lifecycle.loadEntryError.emit({
              getRemoteEntry: Be,
              origin: this.host,
              remoteInfo: this.remoteInfo,
              remoteEntryExports: this.remoteEntryExports,
              globalLoading: v,
              uniqueKey: t,
            });
          }
          c(
            e,
            `remoteEntryExports is undefined \n ${n.safeToString(this.remoteInfo)}`,
          );
          this.remoteEntryExports = e;
          return this.remoteEntryExports;
        }
        async get(e, r, t, n) {
          const { loadFactory: i = true } = t || {
            loadFactory: true,
          };
          const s = await this.getEntry();
          if (!this.inited) {
            const r = this.host.shareScopeMap;
            const t = this.remoteInfo.shareScope || "default";
            r[t] ||= {};
            const i = r[t];
            const c = [];
            const l = {
              version: this.remoteInfo.version || "",
            };
            Object.defineProperty(l, "shareScopeMap", {
              value: r,
              enumerable: false,
            });
            const u = await this.host.hooks.lifecycle.beforeInitContainer.emit({
              shareScope: i,
              remoteEntryInitOptions: l,
              initScope: c,
              remoteInfo: this.remoteInfo,
              origin: this.host,
            });
            if ((s == null ? undefined : s.init) === undefined) {
              _(
                a.getShortErrorMsg(a.RUNTIME_002, a.runtimeDescMap, {
                  remoteName: name,
                  remoteEntryUrl: this.remoteInfo.entry,
                  remoteEntryKey: this.remoteInfo.entryGlobalName,
                }),
              );
            }
            await s.init(u.shareScope, u.initScope, u.remoteEntryInitOptions);
            await this.host.hooks.lifecycle.initContainer.emit(
              o._extends({}, u, {
                id: e,
                remoteSnapshot: n,
                remoteEntryExports: s,
              }),
            );
          }
          let l;
          this.lib = s;
          this.inited = true;
          l = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
            remoteEntryExports: s,
            expose: r,
            moduleInfo: this.remoteInfo,
          });
          l ||= await s.get(r);
          c(l, `${p(this.remoteInfo)} remote don't export ${r}.`);
          const u = ((e, r) => {
            let t;
            t = e.endsWith("/") ? e.slice(0, -1) : e;
            if (r.startsWith(".")) {
              r = r.slice(1);
            }
            t += r;
            return t;
          })(this.remoteInfo.name, r);
          const d = this.wraperFactory(l, u);
          if (!i) {
            return d;
          }
          return await d();
        }
        wraperFactory(e, r) {
          function t(e, r) {
            if (
              e &&
              typeof e == "object" &&
              Object.isExtensible(e) &&
              !Object.getOwnPropertyDescriptor(e, Symbol.for("mf_module_id"))
            ) {
              Object.defineProperty(e, Symbol.for("mf_module_id"), {
                value: r,
                enumerable: false,
              });
            }
          }
          if (e instanceof Promise) {
            return async () => {
              const o = await e();
              t(o, r);
              return o;
            };
          } else {
            return () => {
              const o = e();
              t(o, r);
              return o;
            };
          }
        }
        constructor({ remoteInfo: e, host: r }) {
          this.inited = false;
          this.lib = undefined;
          this.remoteInfo = e;
          this.host = r;
        }
      };
      class ze {
        on(e) {
          if (typeof e == "function") {
            this.listeners.add(e);
          }
        }
        once(e) {
          const r = this;
          this.on(function t(...o) {
            r.remove(t);
            return e.apply(null, o);
          });
        }
        emit(...e) {
          let r;
          if (this.listeners.size > 0) {
            this.listeners.forEach((t) => {
              r = t(...e);
            });
          }
          return r;
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
      class Ye extends ze {
        emit(...e) {
          let r;
          const t = Array.from(this.listeners);
          if (t.length > 0) {
            let o = 0;
            const n = (r) =>
              r !== false &&
              (o < t.length
                ? Promise.resolve(t[o++].apply(null, e)).then(n)
                : r);
            r = n();
          }
          return Promise.resolve(r);
        }
      }
      function Xe(e, r) {
        if (!m(r)) {
          return false;
        }
        if (e !== r) {
          for (const t in e) {
            if (!(t in r)) {
              return false;
            }
          }
        }
        return true;
      }
      class Je extends ze {
        emit(e) {
          if (!m(e)) {
            _(`The data for the "${this.type}" hook should be an object.`);
          }
          for (const r of this.listeners) {
            try {
              const t = r(e);
              if (!Xe(e, t)) {
                this.onerror(
                  `A plugin returned an unacceptable value for the "${this.type}" type.`,
                );
                break;
              }
              e = t;
            } catch (e) {
              l(e);
              this.onerror(e);
            }
          }
          return e;
        }
        constructor(e) {
          super();
          this.onerror = _;
          this.type = e;
        }
      }
      class Ze extends ze {
        emit(e) {
          if (!m(e)) {
            _(
              `The response data for the "${this.type}" hook must be an object.`,
            );
          }
          const r = Array.from(this.listeners);
          if (r.length > 0) {
            let t = 0;
            const o = (r) => {
              l(r);
              this.onerror(r);
              return e;
            };
            const n = (a) => {
              if (Xe(e, a)) {
                e = a;
                if (t < r.length) {
                  try {
                    return Promise.resolve(r[t++](e)).then(n, o);
                  } catch (e) {
                    return o(e);
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
          this.onerror = _;
          this.type = e;
        }
      }
      class Qe {
        applyPlugin(e) {
          var r;
          c(
            ((r = e), h.call(r) === "[object Object]"),
            "Plugin configuration is invalid.",
          );
          const t = e.name;
          c(t, "A name must be provided by the plugin.");
          if (!this.registerPlugins[t]) {
            this.registerPlugins[t] = e;
            Object.keys(this.lifecycle).forEach((r) => {
              const t = e[r];
              if (t) {
                this.lifecycle[r].on(t);
              }
            });
          }
        }
        removePlugin(e) {
          c(e, "A name is required.");
          const r = this.registerPlugins[e];
          c(r, `The plugin "${e}" is not registered.`);
          Object.keys(r).forEach((e) => {
            if (e !== "name") {
              this.lifecycle[e].remove(r[e]);
            }
          });
        }
        inherit({ lifecycle: e, registerPlugins: r }) {
          Object.keys(e).forEach((r) => {
            c(
              !this.lifecycle[r],
              `The hook "${r}" has a conflict and cannot be inherited.`,
            );
            this.lifecycle[r] = e[r];
          });
          Object.keys(r).forEach((e) => {
            c(
              !this.registerPlugins[e],
              `The plugin "${e}" has a conflict and cannot be inherited.`,
            );
            this.applyPlugin(r[e]);
          });
        }
        constructor(e) {
          this.registerPlugins = {};
          this.lifecycle = e;
          this.lifecycleKeys = Object.keys(e);
        }
      }
      function er(e) {
        return o._extends(
          {
            resourceCategory: "sync",
            share: true,
            depsRemote: true,
            prefetchInterface: false,
          },
          e,
        );
      }
      function rr(e, r, t, o = true) {
        const { cssAssets: a, jsAssetsWithoutEntry: i, entryAssets: s } = t;
        if (r.options.inBrowser) {
          s.forEach((t) => {
            const { moduleInfo: o } = t;
            const n = r.moduleCache.get(e.name);
            Be(
              n
                ? {
                    origin: r,
                    remoteInfo: o,
                    remoteEntryExports: n.remoteEntryExports,
                  }
                : {
                    origin: r,
                    remoteInfo: o,
                    remoteEntryExports: undefined,
                  },
            );
          });
          if (o) {
            const e = {
              rel: "preload",
              as: "style",
            };
            a.forEach((t) => {
              const { link: o, needAttach: a } = n.createLink({
                url: t,
                cb: () => {},
                attrs: e,
                createLinkHook: (e, t) => {
                  const o = r.loaderHook.lifecycle.createLink.emit({
                    url: e,
                    attrs: t,
                  });
                  if (o instanceof HTMLLinkElement) {
                    return o;
                  }
                },
              });
              if (a) {
                document.head.appendChild(o);
              }
            });
          } else {
            const e = {
              rel: "stylesheet",
              type: "text/css",
            };
            a.forEach((t) => {
              const { link: o, needAttach: a } = n.createLink({
                url: t,
                cb: () => {},
                attrs: e,
                createLinkHook: (e, t) => {
                  const o = r.loaderHook.lifecycle.createLink.emit({
                    url: e,
                    attrs: t,
                  });
                  if (o instanceof HTMLLinkElement) {
                    return o;
                  }
                },
                needDeleteLink: false,
              });
              if (a) {
                document.head.appendChild(o);
              }
            });
          }
          if (o) {
            const e = {
              rel: "preload",
              as: "script",
            };
            i.forEach((t) => {
              const { link: o, needAttach: a } = n.createLink({
                url: t,
                cb: () => {},
                attrs: e,
                createLinkHook: (e, t) => {
                  const o = r.loaderHook.lifecycle.createLink.emit({
                    url: e,
                    attrs: t,
                  });
                  if (o instanceof HTMLLinkElement) {
                    return o;
                  }
                },
              });
              if (a) {
                document.head.appendChild(o);
              }
            });
          } else {
            const t = {
              fetchpriority: "high",
              type:
                (e == null ? undefined : e.type) === "module"
                  ? "module"
                  : "text/javascript",
            };
            i.forEach((e) => {
              const { script: o, needAttach: a } = n.createScript({
                url: e,
                cb: () => {},
                attrs: t,
                createScriptHook: (e, t) => {
                  const o = r.loaderHook.lifecycle.createScript.emit({
                    url: e,
                    attrs: t,
                  });
                  if (o instanceof HTMLScriptElement) {
                    return o;
                  }
                },
                needDeleteScript: true,
              });
              if (a) {
                document.head.appendChild(o);
              }
            });
          }
        }
      }
      function tr(e, r) {
        const t = g(r);
        if (!t.url) {
          _(`The attribute remoteEntry of ${e.name} must not be undefined.`);
        }
        let o = n.getResourceUrl(r, t.url);
        if (!n.isBrowserEnv() && !o.startsWith("http")) {
          o = `https:${o}`;
        }
        e.type = t.type;
        e.entryGlobalName = t.globalName;
        e.entry = o;
        e.version = r.version;
        e.buildVersion = r.buildVersion;
      }
      function or(e) {
        const r = e.split(":");
        if (r.length === 1) {
          return {
            name: r[0],
            version: undefined,
          };
        } else if (r.length === 2) {
          return {
            name: r[0],
            version: r[1],
          };
        } else {
          return {
            name: r[1],
            version: r[2],
          };
        }
      }
      function nr(e, r, t, o, a = {}, i) {
        const s = p(r);
        const { value: c } = T(e, s);
        const _ = i || c;
        if (_ && !n.isManifestProvider(_) && (t(_, r, o), _.remotesInfo)) {
          const r = Object.keys(_.remotesInfo);
          for (const o of r) {
            if (a[o]) {
              continue;
            }
            a[o] = true;
            const r = or(o);
            const n = _.remotesInfo[o];
            nr(
              e,
              {
                name: r.name,
                version: n.matchedVersion,
              },
              t,
              false,
              a,
              undefined,
            );
          }
        }
      }
      const ar = (e, r) =>
        document.querySelector(`${e}[${e === "link" ? "href" : "src"}="${r}"]`);
      function ir(e, r, t, o, a) {
        const i = [];
        const s = [];
        const c = [];
        const _ = new Set();
        const l = new Set();
        const { options: u } = e;
        const { preloadConfig: p } = r;
        const { depsRemote: d } = p;
        nr(
          o,
          t,
          (r, t, o) => {
            let a;
            if (o) {
              a = p;
            } else if (Array.isArray(d)) {
              const e = d.find(
                (e) => e.nameOrAlias === t.name || e.nameOrAlias === t.alias,
              );
              if (!e) {
                return;
              }
              a = er(e);
            } else {
              if (d !== true) {
                return;
              }
              a = p;
            }
            const _ = n.getResourceUrl(r, g(r).url);
            if (_) {
              c.push({
                name: t.name,
                moduleInfo: {
                  name: t.name,
                  entry: _,
                  type: "remoteEntryType" in r ? r.remoteEntryType : "global",
                  entryGlobalName: "globalName" in r ? r.globalName : t.name,
                  shareScope: "",
                  version: "version" in r ? r.version : undefined,
                },
                url: _,
              });
            }
            let l = "modules" in r ? r.modules : [];
            const u = (f = a.exposes)
              ? f.map((e) =>
                  e === "." ? e : e.startsWith("./") ? e.replace("./", "") : e,
                )
              : [];
            var f;
            var m;
            if (u.length && "modules" in r) {
              l =
                r == null || (m = r.modules) == null
                  ? undefined
                  : m.reduce((e, r) => {
                      if (
                        (u == null ? undefined : u.indexOf(r.moduleName)) !== -1
                      ) {
                        e.push(r);
                      }
                      return e;
                    }, []);
            }
            function h(e) {
              const t = e.map((e) => n.getResourceUrl(r, e));
              if (a.filter) {
                return t.filter(a.filter);
              } else {
                return t;
              }
            }
            if (l) {
              const o = l.length;
              for (let n = 0; n < o; n++) {
                const o = l[n];
                const c = `${t.name}/${o.moduleName}`;
                e.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
                  id: o.moduleName === "." ? t.name : c,
                  name: t.name,
                  remoteSnapshot: r,
                  preloadConfig: a,
                  remote: t,
                  origin: e,
                });
                if (!V(c)) {
                  if (a.resourceCategory === "all") {
                    i.push(...h(o.assets.css.async));
                    i.push(...h(o.assets.css.sync));
                    s.push(...h(o.assets.js.async));
                    s.push(...h(o.assets.js.sync));
                  } else if ((a.resourceCategory = "sync")) {
                    i.push(...h(o.assets.css.sync));
                    s.push(...h(o.assets.js.sync));
                  }
                  j(c);
                }
              }
            }
          },
          true,
          {},
          a,
        );
        if (a.shared) {
          const r = (r, t) => {
            const o = Fe(
              e.shareScopeMap,
              t.sharedName,
              r,
              e.sharedHandler.hooks.lifecycle.resolveShare,
            );
            if (o && typeof o.lib == "function") {
              t.assets.js.sync.forEach((e) => {
                _.add(e);
              });
              t.assets.css.sync.forEach((e) => {
                l.add(e);
              });
            }
          };
          a.shared.forEach((e) => {
            var t;
            const o = (t = u.shared) == null ? undefined : t[e.sharedName];
            if (!o) {
              return;
            }
            const n = e.version ? o.find((r) => r.version === e.version) : o;
            if (!n) {
              return;
            }
            b(n).forEach((t) => {
              r(t, e);
            });
          });
        }
        const f = s.filter((e) => !_.has(e) && !ar("script", e));
        return {
          cssAssets: i.filter((e) => !l.has(e) && !ar("link", e)),
          jsAssetsWithoutEntry: f,
          entryAssets: c.filter((e) => !ar("script", e.url)),
        };
      }
      function sr(e, r) {
        const t = A({
          name: r.options.name,
          version: r.options.version,
        });
        const o =
          t &&
          "remotesInfo" in t &&
          t.remotesInfo &&
          T(t.remotesInfo, e.name).value;
        if (o && o.matchedVersion) {
          return {
            hostGlobalSnapshot: t,
            globalSnapshot: M(),
            remoteSnapshot: A({
              name: e.name,
              version: o.matchedVersion,
            }),
          };
        } else {
          return {
            hostGlobalSnapshot: undefined,
            globalSnapshot: M(),
            remoteSnapshot: A({
              name: e.name,
              version: "version" in e ? e.version : undefined,
            }),
          };
        }
      }
      class cr {
        async loadSnapshot(e) {
          const { options: r } = this.HostInstance;
          const {
            hostGlobalSnapshot: t,
            remoteSnapshot: o,
            globalSnapshot: n,
          } = this.getGlobalRemoteInfo(e);
          const { remoteSnapshot: a, globalSnapshot: i } =
            await this.hooks.lifecycle.loadSnapshot.emit({
              options: r,
              moduleInfo: e,
              hostGlobalSnapshot: t,
              remoteSnapshot: o,
              globalSnapshot: n,
            });
          return {
            remoteSnapshot: a,
            globalSnapshot: i,
          };
        }
        async loadRemoteSnapshotInfo(e) {
          const { options: r } = this.HostInstance;
          await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
            options: r,
            moduleInfo: e,
          });
          let t = A({
            name: this.HostInstance.options.name,
            version: this.HostInstance.options.version,
          });
          if (!t) {
            t = {
              version: this.HostInstance.options.version || "",
              remoteEntry: "",
              remotesInfo: {},
            };
            $({
              [this.HostInstance.options.name]: t,
            });
          }
          if (
            t &&
            "remotesInfo" in t &&
            !T(t.remotesInfo, e.name).value &&
            ("version" in e || "entry" in e)
          ) {
            t.remotesInfo = o._extends(
              {},
              t == null ? undefined : t.remotesInfo,
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
            globalSnapshot: c,
          } = this.getGlobalRemoteInfo(e);
          const { remoteSnapshot: l, globalSnapshot: u } =
            await this.hooks.lifecycle.loadSnapshot.emit({
              options: r,
              moduleInfo: e,
              hostGlobalSnapshot: i,
              remoteSnapshot: s,
              globalSnapshot: c,
            });
          let p;
          let f;
          if (l) {
            if (n.isManifestProvider(l)) {
              const r = n.isBrowserEnv()
                ? l.remoteEntry
                : l.ssrRemoteEntry || l.remoteEntry || "";
              const t = await this.getManifestJson(r, e, {});
              p = t;
              f = x(
                o._extends({}, e, {
                  entry: r,
                }),
                t,
              );
            } else {
              const { remoteSnapshot: r } =
                await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                  options: this.HostInstance.options,
                  moduleInfo: e,
                  remoteSnapshot: l,
                  from: "global",
                });
              p = r;
              f = u;
            }
          } else if (d(e)) {
            const r = await this.getManifestJson(e.entry, e, {});
            const t = x(e, r);
            const { remoteSnapshot: o } =
              await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                options: this.HostInstance.options,
                moduleInfo: e,
                remoteSnapshot: r,
                from: "global",
              });
            p = o;
            f = t;
          } else {
            _(
              a.getShortErrorMsg(a.RUNTIME_007, a.runtimeDescMap, {
                hostName: e.name,
                hostVersion: e.version,
                globalSnapshot: JSON.stringify(u),
              }),
            );
          }
          await this.hooks.lifecycle.afterLoadSnapshot.emit({
            options: r,
            moduleInfo: e,
            remoteSnapshot: p,
          });
          return {
            remoteSnapshot: p,
            globalSnapshot: f,
          };
        }
        getGlobalRemoteInfo(e) {
          return sr(e, this.HostInstance);
        }
        async getManifestJson(e, r, t) {
          const o = async () => {
            let t = this.manifestCache.get(e);
            if (t) {
              return t;
            }
            try {
              let r = await this.loaderHook.lifecycle.fetch.emit(e, {});
              if (!r || !(r instanceof Response)) {
                r = await fetch(e, {});
              }
              t = await r.json();
            } catch (o) {
              t =
                await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit(
                  {
                    id: e,
                    error: o,
                    from: "runtime",
                    lifecycle: "afterResolve",
                    origin: this.HostInstance,
                  },
                );
              if (!t) {
                delete this.manifestLoading[e];
                _(
                  a.getShortErrorMsg(
                    a.RUNTIME_003,
                    a.runtimeDescMap,
                    {
                      manifestUrl: e,
                      moduleName: r.name,
                    },
                    `${o}`,
                  ),
                );
              }
            }
            c(
              t.metaData && t.exposes && t.shared,
              `${e} is not a federation manifest`,
            );
            this.manifestCache.set(e, t);
            return t;
          };
          const i = async () => {
            const t = await o();
            const a = n.generateSnapshotFromManifest(t, {
              version: e,
            });
            const { remoteSnapshot: i } =
              await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                options: this.HostInstance.options,
                moduleInfo: r,
                manifestJson: t,
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
          this.hooks = new Qe({
            beforeLoadRemoteSnapshot: new Ye("beforeLoadRemoteSnapshot"),
            loadSnapshot: new Ze("loadGlobalSnapshot"),
            loadRemoteSnapshot: new Ze("loadRemoteSnapshot"),
            afterLoadSnapshot: new Ze("afterLoadSnapshot"),
          });
          this.manifestLoading = w.__FEDERATION__.__MANIFEST_LOADING__;
          this.HostInstance = e;
          this.loaderHook = e.loaderHook;
        }
      }
      class _r {
        registerShared(e, r) {
          const { shareInfos: t, shared: o } = Te(e, r);
          Object.keys(t).forEach((e) => {
            t[e].forEach((t) => {
              if (
                !Fe(
                  this.shareScopeMap,
                  e,
                  t,
                  this.hooks.lifecycle.resolveShare,
                ) &&
                t &&
                t.lib
              ) {
                this.setShared({
                  pkgName: e,
                  lib: t.lib,
                  get: t.get,
                  loaded: true,
                  shared: t,
                  from: r.name,
                });
              }
            });
          });
          return {
            shareInfos: t,
            shared: o,
          };
        }
        async loadShare(e, r) {
          const { host: t } = this;
          const o = je({
            pkgName: e,
            extraOptions: r,
            shareInfos: t.options.shared,
          });
          if (o == null ? undefined : o.scope) {
            await Promise.all(
              o.scope.map(async (e) => {
                await Promise.all(
                  this.initializeSharing(e, {
                    strategy: o.strategy,
                  }),
                );
              }),
            );
          }
          const n = await this.hooks.lifecycle.beforeLoadShare.emit({
            pkgName: e,
            shareInfo: o,
            shared: t.options.shared,
            origin: t,
          });
          const { shareInfo: a } = n;
          c(
            a,
            `Cannot find ${e} Share in the ${t.options.name}. Please ensure that the ${e} Share parameters have been injected`,
          );
          const i = Fe(
            this.shareScopeMap,
            e,
            a,
            this.hooks.lifecycle.resolveShare,
          );
          const s = (e) => {
            e.useIn ||= [];
            u(e.useIn, t.options.name);
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
            const r = (async () => {
              const r = await i.get();
              a.lib = r;
              a.loaded = true;
              s(a);
              const t = Fe(
                this.shareScopeMap,
                e,
                a,
                this.hooks.lifecycle.resolveShare,
              );
              if (t) {
                t.lib = r;
                t.loaded = true;
              }
              return r;
            })();
            this.setShared({
              pkgName: e,
              loaded: false,
              shared: i,
              from: t.options.name,
              lib: null,
              loading: r,
            });
            return r;
          }
          {
            if (r == null ? undefined : r.customShareInfo) {
              return false;
            }
            const o = (async () => {
              const r = await a.get();
              a.lib = r;
              a.loaded = true;
              s(a);
              const t = Fe(
                this.shareScopeMap,
                e,
                a,
                this.hooks.lifecycle.resolveShare,
              );
              if (t) {
                t.lib = r;
                t.loaded = true;
              }
              return r;
            })();
            this.setShared({
              pkgName: e,
              loaded: false,
              shared: a,
              from: t.options.name,
              lib: null,
              loading: o,
            });
            return o;
          }
        }
        initializeSharing(e = H, r) {
          const { host: t } = this;
          const o = r == null ? undefined : r.from;
          const n = r == null ? undefined : r.strategy;
          let a = r == null ? undefined : r.initScope;
          const i = [];
          if (o !== "build") {
            const { initTokens: r } = this;
            a ||= [];
            let t = r[e];
            t ||= r[e] = {
              from: this.host.name,
            };
            if (a.indexOf(t) >= 0) {
              return i;
            }
            a.push(t);
          }
          const s = this.shareScopeMap;
          const c = t.options.name;
          s[e] ||= {};
          const _ = s[e];
          const l = async (r) => {
            const { module: o } =
              await t.remoteHandler.getRemoteModuleAndOptions({
                id: r,
              });
            if (o.getEntry) {
              let i;
              try {
                i = await o.getEntry();
              } catch (e) {
                i = await t.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                  id: r,
                  error: e,
                  from: "runtime",
                  lifecycle: "beforeLoadShare",
                  origin: t,
                });
              }
              if (!o.inited) {
                await ((n = i), n && n.init && n.init(s[e], a));
                o.inited = true;
              }
            }
            var n;
          };
          Object.keys(t.options.shared).forEach((r) => {
            t.options.shared[r].forEach((t) => {
              if (t.scope.includes(e)) {
                ((e, r) => {
                  var t;
                  const { version: o, eager: n } = r;
                  _[e] = _[e] || {};
                  const a = _[e];
                  const i = a[o];
                  const s = Boolean(
                    i &&
                    (i.eager ||
                      ((t = i.shareConfig) == null ? undefined : t.eager)),
                  );
                  if (
                    !i ||
                    (i.strategy !== "loaded-first" &&
                      !i.loaded &&
                      (Boolean(!n) !== !s ? n : c > i.from))
                  ) {
                    a[o] = r;
                  }
                })(r, t);
              }
            });
          });
          if (
            t.options.shareStrategy === "version-first" ||
            n === "version-first"
          ) {
            t.options.remotes.forEach((r) => {
              if (r.shareScope === e) {
                i.push(l(r.name));
              }
            });
          }
          return i;
        }
        loadShareSync(e, r) {
          const { host: t } = this;
          const o = je({
            pkgName: e,
            extraOptions: r,
            shareInfos: t.options.shared,
          });
          if (o == null ? undefined : o.scope) {
            o.scope.forEach((e) => {
              this.initializeSharing(e, {
                strategy: o.strategy,
              });
            });
          }
          const n = Fe(
            this.shareScopeMap,
            e,
            o,
            this.hooks.lifecycle.resolveShare,
          );
          const i = (e) => {
            e.useIn ||= [];
            u(e.useIn, t.options.name);
          };
          if (n) {
            if (typeof n.lib == "function") {
              i(n);
              if (!n.loaded) {
                n.loaded = true;
                if (n.from === t.options.name) {
                  o.loaded = true;
                }
              }
              return n.lib;
            }
            if (typeof n.get == "function") {
              const r = n.get();
              if (!(r instanceof Promise)) {
                i(n);
                this.setShared({
                  pkgName: e,
                  loaded: true,
                  from: t.options.name,
                  lib: r,
                  shared: n,
                });
                return r;
              }
            }
          }
          if (o.lib) {
            o.loaded ||= true;
            return o.lib;
          }
          if (o.get) {
            const n = o.get();
            if (n instanceof Promise) {
              const o =
                (r == null ? undefined : r.from) === "build"
                  ? a.RUNTIME_005
                  : a.RUNTIME_006;
              throw new Error(
                a.getShortErrorMsg(o, a.runtimeDescMap, {
                  hostName: t.options.name,
                  sharedPkgName: e,
                }),
              );
            }
            o.lib = n;
            this.setShared({
              pkgName: e,
              loaded: true,
              from: t.options.name,
              lib: o.lib,
              shared: o,
            });
            return o.lib;
          }
          throw new Error(
            a.getShortErrorMsg(a.RUNTIME_006, a.runtimeDescMap, {
              hostName: t.options.name,
              sharedPkgName: e,
            }),
          );
        }
        initShareScopeMap(e, r, t = {}) {
          const { host: o } = this;
          this.shareScopeMap[e] = r;
          this.hooks.lifecycle.initContainerShareScopeMap.emit({
            shareScope: r,
            options: o.options,
            origin: o,
            scopeName: e,
            hostShareScopeMap: t.hostShareScopeMap,
          });
        }
        setShared({
          pkgName: e,
          shared: r,
          from: t,
          lib: n,
          loading: a,
          loaded: i,
          get: s,
        }) {
          const { version: c, scope: _ = "default" } = r;
          const l = o._object_without_properties_loose(r, ["version", "scope"]);
          (Array.isArray(_) ? _ : [_]).forEach((r) => {
            this.shareScopeMap[r] ||= {};
            this.shareScopeMap[r][e] ||= {};
            if (!this.shareScopeMap[r][e][c]) {
              this.shareScopeMap[r][e][c] = o._extends(
                {
                  version: c,
                  scope: ["default"],
                },
                l,
                {
                  lib: n,
                  loaded: i,
                  loading: a,
                },
              );
              if (s) {
                this.shareScopeMap[r][e][c].get = s;
              }
              return;
            }
            const t = this.shareScopeMap[r][e][c];
            if (a && !t.loading) {
              t.loading = a;
            }
          });
        }
        _setGlobalShareScopeMap(e) {
          const r = Ve();
          const t = e.id || e.name;
          if (t && !r[t]) {
            r[t] = this.shareScopeMap;
          }
        }
        constructor(e) {
          this.hooks = new Qe({
            afterResolve: new Ze("afterResolve"),
            beforeLoadShare: new Ze("beforeLoadShare"),
            loadShare: new Ye(),
            resolveShare: new Je("resolveShare"),
            initContainerShareScopeMap: new Je("initContainerShareScopeMap"),
          });
          this.host = e;
          this.shareScopeMap = {};
          this.initTokens = {};
          this._setGlobalShareScopeMap(e.options);
        }
      }
      class lr {
        formatAndRegisterRemote(e, r) {
          return (r.remotes || []).reduce((e, r) => {
            this.registerRemote(r, e, {
              force: false,
            });
            return e;
          }, e.remotes);
        }
        setIdToRemoteMap(e, r) {
          const { remote: t, expose: o } = r;
          const { name: n, alias: a } = t;
          this.idToRemoteMap[e] = {
            name: t.name,
            expose: o,
          };
          if (a && e.startsWith(n)) {
            const r = e.replace(n, a);
            this.idToRemoteMap[r] = {
              name: t.name,
              expose: o,
            };
          } else if (a && e.startsWith(a)) {
            const r = e.replace(a, n);
            this.idToRemoteMap[r] = {
              name: t.name,
              expose: o,
            };
          }
        }
        async loadRemote(e, r) {
          const { host: t } = this;
          try {
            const { loadFactory: o = true } = r || {
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
              remote: c,
              expose: _,
              id: l,
              remoteSnapshot: u,
            } = i;
            const p = await n.get(l, _, r, u);
            const d = await this.hooks.lifecycle.onLoad.emit({
              id: l,
              pkgNameOrAlias: s,
              expose: _,
              exposeModule: o ? p : undefined,
              exposeModuleFactory: o ? undefined : p,
              remote: c,
              options: a,
              moduleInstance: n,
              origin: t,
            });
            this.setIdToRemoteMap(e, i);
            if (typeof d == "function") {
              return d;
            } else {
              return p;
            }
          } catch (o) {
            const { from: n = "runtime" } = r || {
              from: "runtime",
            };
            const a = await this.hooks.lifecycle.errorLoadRemote.emit({
              id: e,
              error: o,
              from: n,
              lifecycle: "onLoad",
              origin: t,
            });
            if (!a) {
              throw o;
            }
            return a;
          }
        }
        async preloadRemote(e) {
          const { host: r } = this;
          await this.hooks.lifecycle.beforePreloadRemote.emit({
            preloadOps: e,
            options: r.options,
            origin: r,
          });
          o = r.options.remotes;
          const t = e.map((e) => {
            const r = (function (e, r) {
              for (const t of e) {
                if (r === t.name) {
                  return t;
                }
                if (t.alias && r === t.alias) {
                  return t;
                }
              }
            })(o, e.nameOrAlias);
            c(
              r,
              `Unable to preload ${e.nameOrAlias} as it is not included in ${
                !r &&
                n.safeToString({
                  remoteInfo: r,
                  remotes: o,
                })
              }`,
            );
            return {
              remote: r,
              preloadConfig: er(e),
            };
          });
          var o;
          await Promise.all(
            t.map(async (e) => {
              const { remote: t } = e;
              const o = Ke(t);
              const { globalSnapshot: n, remoteSnapshot: a } =
                await r.snapshotHandler.loadRemoteSnapshotInfo(t);
              const i = await this.hooks.lifecycle.generatePreloadAssets.emit({
                origin: r,
                preloadOptions: e,
                remote: t,
                remoteInfo: o,
                globalSnapshot: n,
                remoteSnapshot: a,
              });
              if (i) {
                rr(o, r, i);
              }
            }),
          );
        }
        registerRemotes(e, r) {
          const { host: t } = this;
          e.forEach((e) => {
            this.registerRemote(e, t.options.remotes, {
              force: r == null ? undefined : r.force,
            });
          });
        }
        async getRemoteModuleAndOptions(e) {
          const { host: r } = this;
          const { id: t } = e;
          let n;
          try {
            n = await this.hooks.lifecycle.beforeRequest.emit({
              id: t,
              options: r.options,
              origin: r,
            });
          } catch (e) {
            n = await this.hooks.lifecycle.errorLoadRemote.emit({
              id: t,
              options: r.options,
              origin: r,
              from: "runtime",
              error: e,
              lifecycle: "beforeRequest",
            });
            if (!n) {
              throw e;
            }
          }
          const { id: i } = n;
          const s = Ce(r.options.remotes, i);
          c(
            s,
            a.getShortErrorMsg(a.RUNTIME_004, a.runtimeDescMap, {
              hostName: r.options.name,
              requestId: i,
            }),
          );
          const { remote: _ } = s;
          const l = Ke(_);
          const u = await r.sharedHandler.hooks.lifecycle.afterResolve.emit(
            o._extends(
              {
                id: i,
              },
              s,
              {
                options: r.options,
                origin: r,
                remoteInfo: l,
              },
            ),
          );
          const { remote: p, expose: d } = u;
          c(
            p && d,
            `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${i}.`,
          );
          let f = r.moduleCache.get(p.name);
          const m = {
            host: r,
            remoteInfo: l,
          };
          if (!f) {
            f = new We(m);
            r.moduleCache.set(p.name, f);
          }
          return {
            module: f,
            moduleOptions: m,
            remoteMatchInfo: u,
          };
        }
        registerRemote(e, r, t) {
          const { host: o } = this;
          const a = () => {
            if (e.alias) {
              const t = r.find((r) => {
                var t;
                return (
                  e.alias &&
                  (r.name.startsWith(e.alias) ||
                    ((t = r.alias) == null ? undefined : t.startsWith(e.alias)))
                );
              });
              c(
                !t,
                `The alias ${e.alias} of remote ${e.name} is not allowed to be the prefix of ${t && t.name} name or alias`,
              );
            }
            if (
              "entry" in e &&
              n.isBrowserEnv() &&
              !e.entry.startsWith("http")
            ) {
              e.entry = new URL(e.entry, window.location.origin).href;
            }
            e.shareScope ||= H;
            e.type ||= C;
          };
          this.hooks.lifecycle.beforeRegisterRemote.emit({
            remote: e,
            origin: o,
          });
          const i = r.find((r) => r.name === e.name);
          if (i) {
            const s = [
              `The remote "${e.name}" is already registered.`,
              "Please note that overriding it may cause unexpected errors.",
            ];
            if (t == null ? undefined : t.force) {
              this.removeRemote(i);
              a();
              r.push(e);
              this.hooks.lifecycle.registerRemote.emit({
                remote: e,
                origin: o,
              });
              n.warn(s.join(" "));
            }
          } else {
            a();
            r.push(e);
            this.hooks.lifecycle.registerRemote.emit({
              remote: e,
              origin: o,
            });
          }
        }
        removeRemote(e) {
          try {
            const { host: t } = this;
            const { name: o } = e;
            const a = t.options.remotes.findIndex((e) => e.name === o);
            if (a !== -1) {
              t.options.remotes.splice(a, 1);
            }
            const i = t.moduleCache.get(e.name);
            if (i) {
              const o = i.remoteInfo;
              const a = o.entryGlobalName;
              var r;
              if (y[a]) {
                if (
                  (r = Object.getOwnPropertyDescriptor(y, a)) == null
                    ? undefined
                    : r.configurable
                ) {
                  delete y[a];
                } else {
                  y[a] = undefined;
                }
              }
              const s = Ue(i.remoteInfo);
              if (v[s]) {
                delete v[s];
              }
              t.snapshotHandler.manifestCache.delete(o.entry);
              let c = o.buildVersion
                ? n.composeKeyWithSeparator(o.name, o.buildVersion)
                : o.name;
              const _ = y.__FEDERATION__.__INSTANCES__.findIndex((e) =>
                o.buildVersion ? e.options.id === c : e.name === c,
              );
              if (_ !== -1) {
                const e = y.__FEDERATION__.__INSTANCES__[_];
                c = e.options.id || c;
                const r = Ve();
                let t = true;
                const n = [];
                Object.keys(r).forEach((e) => {
                  const a = r[e];
                  if (a) {
                    Object.keys(a).forEach((r) => {
                      const i = a[r];
                      if (i) {
                        Object.keys(i).forEach((a) => {
                          const s = i[a];
                          if (s) {
                            Object.keys(s).forEach((i) => {
                              const c = s[i];
                              if (
                                c &&
                                typeof c == "object" &&
                                c.from === o.name
                              ) {
                                if (c.loaded || c.loading) {
                                  c.useIn = c.useIn.filter((e) => e !== o.name);
                                  if (c.useIn.length) {
                                    t = false;
                                  } else {
                                    n.push([e, r, a, i]);
                                  }
                                } else {
                                  n.push([e, r, a, i]);
                                }
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
                if (t) {
                  e.shareScopeMap = {};
                  delete r[c];
                }
                n.forEach(([e, t, o, n]) => {
                  var a;
                  var i;
                  var s;
                  if ((s = r[e]) != null) {
                    if ((i = s[t]) != null) {
                      if ((a = i[o]) != null) {
                        delete a[n];
                      }
                    }
                  }
                });
                y.__FEDERATION__.__INSTANCES__.splice(_, 1);
              }
              const { hostGlobalSnapshot: l } = sr(e, t);
              if (l) {
                const r =
                  l &&
                  "remotesInfo" in l &&
                  l.remotesInfo &&
                  T(l.remotesInfo, e.name).key;
                if (r) {
                  delete l.remotesInfo[r];
                  if (Boolean(w.__FEDERATION__.__MANIFEST_LOADING__[r])) {
                    delete w.__FEDERATION__.__MANIFEST_LOADING__[r];
                  }
                }
              }
              t.moduleCache.delete(e.name);
            }
          } catch (e) {
            s.log("removeRemote fail: ", e);
          }
        }
        constructor(e) {
          this.hooks = new Qe({
            beforeRegisterRemote: new Je("beforeRegisterRemote"),
            registerRemote: new Je("registerRemote"),
            beforeRequest: new Ze("beforeRequest"),
            onLoad: new Ye("onLoad"),
            handlePreloadModule: new ze("handlePreloadModule"),
            errorLoadRemote: new Ye("errorLoadRemote"),
            beforePreloadRemote: new Ye("beforePreloadRemote"),
            generatePreloadAssets: new Ye("generatePreloadAssets"),
            afterPreloadRemote: new Ye(),
            loadEntry: new Ye(),
          });
          this.host = e;
          this.idToRemoteMap = {};
        }
      }
      var ur = Object.freeze({
        __proto__: null,
      });
      Object.defineProperty(r, "loadScript", {
        enumerable: true,
        get: function () {
          return n.loadScript;
        },
      });
      Object.defineProperty(r, "loadScriptNode", {
        enumerable: true,
        get: function () {
          return n.loadScriptNode;
        },
      });
      r.CurrentGlobal = y;
      r.FederationHost = class {
        initOptions(e) {
          this.registerPlugins(e.plugins);
          const r = this.formatOptions(this.options, e);
          this.options = r;
          return r;
        }
        async loadShare(e, r) {
          return this.sharedHandler.loadShare(e, r);
        }
        loadShareSync(e, r) {
          return this.sharedHandler.loadShareSync(e, r);
        }
        initializeSharing(e = H, r) {
          return this.sharedHandler.initializeSharing(e, r);
        }
        initRawContainer(e, r, t) {
          const o = Ke({
            name: e,
            entry: r,
          });
          const n = new We({
            host: this,
            remoteInfo: o,
          });
          n.remoteEntryExports = t;
          this.moduleCache.set(e, n);
          return n;
        }
        async loadRemote(e, r) {
          return this.remoteHandler.loadRemote(e, r);
        }
        async preloadRemote(e) {
          return this.remoteHandler.preloadRemote(e);
        }
        initShareScopeMap(e, r, t = {}) {
          this.sharedHandler.initShareScopeMap(e, r, t);
        }
        formatOptions(e, r) {
          const { shared: t } = Te(e, r);
          const { userOptions: n, options: a } =
            this.hooks.lifecycle.beforeInit.emit({
              origin: this,
              userOptions: r,
              options: e,
              shareInfo: t,
            });
          const i = this.remoteHandler.formatAndRegisterRemote(a, n);
          const { shared: s } = this.sharedHandler.registerShared(a, n);
          const c = [...a.plugins];
          if (n.plugins) {
            n.plugins.forEach((e) => {
              if (!c.includes(e)) {
                c.push(e);
              }
            });
          }
          const _ = o._extends({}, e, r, {
            plugins: c,
            remotes: i,
            shared: s,
          });
          this.hooks.lifecycle.init.emit({
            origin: this,
            options: _,
          });
          return _;
        }
        registerPlugins(e) {
          const r = (function (e, r) {
            const t = F();
            if (t.length > 0) {
              t.forEach((r) => {
                if (e == null ? undefined : e.find((e) => e.name !== r.name)) {
                  e.push(r);
                }
              });
            }
            if (e && e.length > 0) {
              e.forEach((e) => {
                r.forEach((r) => {
                  r.applyPlugin(e);
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
            (e, r) =>
              r ? (e && !e.find((e) => e.name === r.name) && e.push(r), e) : e,
            r || [],
          );
        }
        registerRemotes(e, r) {
          return this.remoteHandler.registerRemotes(e, r);
        }
        constructor(e) {
          this.hooks = new Qe({
            beforeInit: new Je("beforeInit"),
            init: new ze(),
            beforeInitContainer: new Ze("beforeInitContainer"),
            initContainer: new Ze("initContainer"),
          });
          this.version = "0.11.1";
          this.moduleCache = new Map();
          this.loaderHook = new Qe({
            getModuleInfo: new ze(),
            createScript: new ze(),
            createLink: new ze(),
            fetch: new Ye(),
            loadEntryError: new Ye(),
            getModuleFactory: new Ye(),
          });
          this.bridgeHook = new Qe({
            beforeBridgeRender: new ze(),
            afterBridgeRender: new ze(),
            beforeBridgeDestroy: new ze(),
            afterBridgeDestroy: new ze(),
          });
          const r = {
            id: "resume_profile_front:local",
            name: e.name,
            plugins: [
              {
                name: "snapshot-plugin",
                async afterResolve(e) {
                  const {
                    remote: r,
                    pkgNameOrAlias: t,
                    expose: n,
                    origin: a,
                    remoteInfo: i,
                  } = e;
                  if (!d(r) || !f(r)) {
                    const { remoteSnapshot: s, globalSnapshot: c } =
                      await a.snapshotHandler.loadRemoteSnapshotInfo(r);
                    tr(i, s);
                    const _ = {
                      remote: r,
                      preloadConfig: {
                        nameOrAlias: t,
                        exposes: [n],
                        resourceCategory: "sync",
                        share: false,
                        depsRemote: false,
                      },
                    };
                    const l =
                      await a.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit(
                        {
                          origin: a,
                          preloadOptions: _,
                          remoteInfo: i,
                          remote: r,
                          remoteSnapshot: s,
                          globalSnapshot: c,
                        },
                      );
                    if (l) {
                      rr(i, a, l, false);
                    }
                    return o._extends({}, e, {
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
                    origin: r,
                    preloadOptions: t,
                    remoteInfo: o,
                    remote: a,
                    globalSnapshot: i,
                    remoteSnapshot: s,
                  } = e;
                  if (n.isBrowserEnv()) {
                    if (d(a) && f(a)) {
                      return {
                        cssAssets: [],
                        jsAssetsWithoutEntry: [],
                        entryAssets: [
                          {
                            name: a.name,
                            url: a.entry,
                            moduleInfo: {
                              name: o.name,
                              entry: a.entry,
                              type: o.type || "global",
                              entryGlobalName: "",
                              shareScope: "",
                            },
                          },
                        ],
                      };
                    } else {
                      tr(o, s);
                      return ir(r, t, o, i, s);
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
          this.options = r;
          this.snapshotHandler = new cr(this);
          this.sharedHandler = new _r(this);
          this.remoteHandler = new lr(this);
          this.shareScopeMap = this.sharedHandler.shareScopeMap;
          this.registerPlugins([...r.plugins, ...(e.plugins || [])]);
          this.options = this.formatOptions(r, e);
        }
      };
      r.Global = w;
      r.Module = We;
      r.addGlobalSnapshot = $;
      r.assert = c;
      r.getGlobalFederationConstructor = I;
      r.getGlobalSnapshot = M;
      r.getInfoWithoutType = T;
      r.getRegisteredShare = Fe;
      r.getRemoteEntry = Be;
      r.getRemoteInfo = Ke;
      r.helpers = He;
      r.isStaticResourcesEqual = function (e, r) {
        const t = /^(https?:)?\/\//i;
        return (
          e.replace(t, "").replace(/\/$/, "") ===
          r.replace(t, "").replace(/\/$/, "")
        );
      };
      r.matchRemoteWithNameAndExpose = Ce;
      r.registerGlobalPlugins = L;
      r.resetFederationGlobalInfo = N;
      r.safeWrapper = async function (e, r) {
        try {
          return await e();
        } catch (e) {
          if (!r) {
            l(e);
          }
          return;
        }
      };
      r.satisfy = Oe;
      r.setGlobalFederationConstructor = O;
      r.setGlobalFederationInstance = R;
      r.types = ur;
    },
    66340: function (e, r) {
      "use strict";

      function t() {
        t =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var o in t) {
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                  e[o] = t[o];
                }
              }
            }
            return e;
          };
        return t.apply(this, arguments);
      }
      r._extends = t;
      r._object_without_properties_loose = function (e, r) {
        if (e == null) {
          return {};
        }
        var t;
        var o;
        var n = {};
        var a = Object.keys(e);
        for (o = 0; o < a.length; o++) {
          t = a[o];
          if (!(r.indexOf(t) >= 0)) {
            n[t] = e[t];
          }
        }
        return n;
      };
    },
    84620: function (e, r, t) {
      "use strict";

      var o = t(16515);
      var n = t(87657);
      let a = null;
      o.setGlobalFederationConstructor(o.FederationHost);
      Object.defineProperty(r, "FederationHost", {
        enumerable: true,
        get: function () {
          return o.FederationHost;
        },
      });
      Object.defineProperty(r, "Module", {
        enumerable: true,
        get: function () {
          return o.Module;
        },
      });
      Object.defineProperty(r, "getRemoteEntry", {
        enumerable: true,
        get: function () {
          return o.getRemoteEntry;
        },
      });
      Object.defineProperty(r, "getRemoteInfo", {
        enumerable: true,
        get: function () {
          return o.getRemoteInfo;
        },
      });
      Object.defineProperty(r, "loadScript", {
        enumerable: true,
        get: function () {
          return o.loadScript;
        },
      });
      Object.defineProperty(r, "loadScriptNode", {
        enumerable: true,
        get: function () {
          return o.loadScriptNode;
        },
      });
      Object.defineProperty(r, "registerGlobalPlugins", {
        enumerable: true,
        get: function () {
          return o.registerGlobalPlugins;
        },
      });
      r.getInstance = function () {
        return a;
      };
      r.init = function (e) {
        const r = n.getGlobalFederationInstance(e.name, e.version);
        if (r) {
          r.initOptions(e);
          a ||= r;
          return r;
        }
        {
          const r = o.getGlobalFederationConstructor() || o.FederationHost;
          a = new r(e);
          o.setGlobalFederationInstance(a);
          return a;
        }
      };
      r.loadRemote = function (...e) {
        o.assert(a, "Please call init first");
        return a.loadRemote.apply(a, e);
      };
      r.loadShare = function (...e) {
        o.assert(a, "Please call init first");
        return a.loadShare.apply(a, e);
      };
      r.loadShareSync = function (...e) {
        o.assert(a, "Please call init first");
        return a.loadShareSync.apply(a, e);
      };
      r.preloadRemote = function (...e) {
        o.assert(a, "Please call init first");
        return a.preloadRemote.apply(a, e);
      };
      r.registerPlugins = function (...e) {
        o.assert(a, "Please call init first");
        return a.registerPlugins.apply(a, e);
      };
      r.registerRemotes = function (...e) {
        o.assert(a, "Please call init first");
        return a.registerRemotes.apply(a, e);
      };
    },
    87657: function (e, r, t) {
      "use strict";

      var o = t(16515);
      r.getGlobalFederationInstance = function (e, r) {
        return o.CurrentGlobal.__FEDERATION__.__INSTANCES__.find(
          (t) =>
            t.options.id === "resume_profile_front:local" ||
            (t.options.name === e && !t.options.version && !r) ||
            (t.options.name === e && !!r && t.options.version === r),
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
      const parseEntry = (e, r, t = SEPARATOR) => {
        const o = e.split(t);
        const n = getProcessEnv().NODE_ENV === "development" && r;
        const a = (e) => e.startsWith("http") || e.includes(MANIFEST_EXT);
        if (o.length >= 2) {
          let [r, ...i] = o;
          if (e.startsWith(t)) {
            r = o.slice(0, 2).join(t);
            i = [n || o.slice(2).join(t)];
          }
          let s = n || i.join(t);
          if (a(s)) {
            return {
              name: r,
              entry: s,
            };
          } else {
            return {
              name: r,
              version: s || "*",
            };
          }
        }
        if (o.length === 1) {
          const [e] = o;
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
            (e, r) => (r ? (e ? `${e}${SEPARATOR}${r}` : r) : e),
            "",
          );
        } else {
          return "";
        }
      };
      const encodeName = function (e, r = "", t = false) {
        try {
          const o = t ? ".js" : "";
          return `${r}${e
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
            )}${o}`;
        } catch (e) {
          throw e;
        }
      };
      const decodeName = function (e, r, t) {
        try {
          let o = e;
          if (r) {
            if (!o.startsWith(r)) {
              return o;
            }
            o = o.replace(new RegExp(r, "g"), "");
          }
          o = o
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
          if (t) {
            o = o.replace(".js", "");
          }
          return o;
        } catch (e) {
          throw e;
        }
      };
      const generateExposeFilename = (e, r) => {
        if (!e) {
          return "";
        }
        let t = e;
        if (t === ".") {
          t = "default_export";
        }
        if (t.startsWith("./")) {
          t = t.replace("./", "");
        }
        return encodeName(t, "__federation_expose_", r);
      };
      const generateShareFilename = (e, r) =>
        e ? encodeName(e, "__federation_shared_", r) : "";
      const getResourceUrl = (e, r) => {
        if ("getPublicPath" in e) {
          let t;
          t = e.getPublicPath.startsWith("function")
            ? new Function("return " + e.getPublicPath)()()
            : new Function(e.getPublicPath)();
          return `${t}${r}`;
        }
        if ("publicPath" in e) {
          return `${e.publicPath}${r}`;
        } else {
          console.warn(
            "Cannot get resource URL. If in debug mode, please ignore.",
            e,
            r,
          );
          return "";
        }
      };
      const assert = (e, r) => {
        if (!e) {
          error(r);
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
      const simpleJoinRemoteEntry = (e, r) => {
        if (!e) {
          return r;
        }
        const t = ((e) => {
          if (e === ".") {
            return "";
          }
          if (e.startsWith("./")) {
            return e.replace("./", "");
          }
          if (e.startsWith("/")) {
            const r = e.slice(1);
            if (r.endsWith("/")) {
              return r.slice(0, -1);
            } else {
              return r;
            }
          }
          return e;
        })(e);
        if (t) {
          if (t.endsWith("/")) {
            return `${t}${r}`;
          } else {
            return `${t}/${r}`;
          }
        } else {
          return r;
        }
      };
      function inferAutoPublicPath(e) {
        return e
          .replace(/#.*$/, "")
          .replace(/\?.*$/, "")
          .replace(/\/[^\/]+$/, "/");
      }
      function generateSnapshotFromManifest(e, r = {}) {
        var t;
        var o;
        const { remotes: n = {}, overrides: a = {}, version: i } = r;
        let s;
        const c = () =>
          "publicPath" in e.metaData
            ? e.metaData.publicPath === "auto" && i
              ? inferAutoPublicPath(i)
              : e.metaData.publicPath
            : e.metaData.getPublicPath;
        const _ = Object.keys(a);
        let l = {};
        var u;
        if (!Object.keys(n).length) {
          l =
            ((u = e.remotes) == null
              ? undefined
              : u.reduce((e, r) => {
                  let t;
                  const o = r.federationContainerName;
                  t = _.includes(o)
                    ? a[o]
                    : "version" in r
                      ? r.version
                      : r.entry;
                  e[o] = {
                    matchedVersion: t,
                  };
                  return e;
                }, {})) || {};
        }
        Object.keys(n).forEach(
          (e) =>
            (l[e] = {
              matchedVersion: _.includes(e) ? a[e] : n[e],
            }),
        );
        const {
          remoteEntry: { path: p, name: d, type: f },
          types: m,
          buildInfo: { buildVersion: h },
          globalName: b,
          ssrRemoteEntry: g,
        } = e.metaData;
        const { exposes: y } = e;
        let k = {
          version: i || "",
          buildVersion: h,
          globalName: b,
          remoteEntry: simpleJoinRemoteEntry(p, d),
          remoteEntryType: f,
          remoteTypes: simpleJoinRemoteEntry(m.path, m.name),
          remoteTypesZip: m.zip || "",
          remoteTypesAPI: m.api || "",
          remotesInfo: l,
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
        if ((t = e.metaData) == null ? undefined : t.prefetchInterface) {
          const r = e.metaData.prefetchInterface;
          k = polyfills._extends({}, k, {
            prefetchInterface: r,
          });
        }
        if ((o = e.metaData) == null ? undefined : o.prefetchEntry) {
          const { path: r, name: t, type: o } = e.metaData.prefetchEntry;
          k = polyfills._extends({}, k, {
            prefetchEntry: simpleJoinRemoteEntry(r, t),
            prefetchEntryType: o,
          });
        }
        s =
          "publicPath" in e.metaData
            ? polyfills._extends({}, k, {
                publicPath: c(),
              })
            : polyfills._extends({}, k, {
                getPublicPath: c(),
              });
        if (g) {
          const e = simpleJoinRemoteEntry(g.path, g.name);
          s.ssrRemoteEntry = e;
          s.ssrRemoteEntryType = g.type || "commonjs-module";
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
      async function safeWrapper(e, r) {
        try {
          return await e();
        } catch (e) {
          if (!r) {
            warn(e);
          }
          return;
        }
      }
      function isStaticResourcesEqual(e, r) {
        const t = /^(https?:)?\/\//i;
        return (
          e.replace(t, "").replace(/\/$/, "") ===
          r.replace(t, "").replace(/\/$/, "")
        );
      }
      function createScript(e) {
        let r;
        let t = null;
        let o = true;
        let n = 20000;
        const a = document.getElementsByTagName("script");
        for (let r = 0; r < a.length; r++) {
          const n = a[r];
          const i = n.getAttribute("src");
          if (i && isStaticResourcesEqual(i, e.url)) {
            t = n;
            o = false;
            break;
          }
        }
        if (!t) {
          const r = e.attrs;
          let o;
          t = document.createElement("script");
          t.type =
            (r == null ? undefined : r.type) === "module"
              ? "module"
              : "text/javascript";
          if (e.createScriptHook) {
            o = e.createScriptHook(e.url, e.attrs);
            if (o instanceof HTMLScriptElement) {
              t = o;
            } else if (typeof o == "object") {
              if ("script" in o && o.script) {
                t = o.script;
              }
              if ("timeout" in o && o.timeout) {
                n = o.timeout;
              }
            }
          }
          t.src ||= e.url;
          if (r && !o) {
            Object.keys(r).forEach((e) => {
              if (t) {
                if (e === "async" || e === "defer") {
                  t[e] = r[e];
                } else if (!t.getAttribute(e)) {
                  t.setAttribute(e, r[e]);
                }
              }
            });
          }
        }
        const i = async (o, n) => {
          clearTimeout(r);
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
            t &&
            ((t.onerror = null),
            (t.onload = null),
            safeWrapper(() => {
              const { needDeleteScript: r = true } = e;
              if (r && (t == null ? undefined : t.parentNode)) {
                t.parentNode.removeChild(t);
              }
            }),
            o && typeof o == "function")
          ) {
            const e = o(n);
            if (e instanceof Promise) {
              const r = await e;
              a();
              return r;
            }
            a();
            return e;
          }
          a();
        };
        t.onerror = i.bind(null, t.onerror);
        t.onload = i.bind(null, t.onload);
        r = setTimeout(() => {
          i(null, new Error(`Remote script "${e.url}" time-outed.`));
        }, n);
        return {
          script: t,
          needAttach: o,
        };
      }
      function createLink(e) {
        let r = null;
        let t = true;
        const o = document.getElementsByTagName("link");
        for (let n = 0; n < o.length; n++) {
          const a = o[n];
          const i = a.getAttribute("href");
          const s = a.getAttribute("rel");
          if (i && isStaticResourcesEqual(i, e.url) && s === e.attrs.rel) {
            r = a;
            t = false;
            break;
          }
        }
        if (!r) {
          let t;
          r = document.createElement("link");
          r.setAttribute("href", e.url);
          const o = e.attrs;
          if (e.createLinkHook) {
            t = e.createLinkHook(e.url, o);
            if (t instanceof HTMLLinkElement) {
              r = t;
            }
          }
          if (o && !t) {
            Object.keys(o).forEach((e) => {
              if (r && !r.getAttribute(e)) {
                r.setAttribute(e, o[e]);
              }
            });
          }
        }
        const n = (t, o) => {
          const n = () => {
            if ((o == null ? undefined : o.type) === "error") {
              if (e == null ? undefined : e.onErrorCallback) {
                if (e != null) {
                  e.onErrorCallback(o);
                }
              }
            } else if (e == null ? undefined : e.cb) {
              if (e != null) {
                e.cb();
              }
            }
          };
          if (
            r &&
            ((r.onerror = null),
            (r.onload = null),
            safeWrapper(() => {
              const { needDeleteLink: t = true } = e;
              if (t && (r == null ? undefined : r.parentNode)) {
                r.parentNode.removeChild(r);
              }
            }),
            t)
          ) {
            const e = t(o);
            n();
            return e;
          }
          n();
        };
        r.onerror = n.bind(null, r.onerror);
        r.onload = n.bind(null, r.onload);
        return {
          link: r,
          needAttach: t,
        };
      }
      function loadScript(e, r) {
        const { attrs: t = {}, createScriptHook: o } = r;
        return new Promise((r, n) => {
          const { script: a, needAttach: i } = createScript({
            url: e,
            cb: r,
            onErrorCallback: n,
            attrs: polyfills._extends(
              {
                fetchpriority: "high",
              },
              t,
            ),
            createScriptHook: o,
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
          .catch((r) => {
            console.error(`Error importing module ${e}:`, r);
            throw r;
          });
      }
      const loadNodeFetch = async () => {
        const e = await importNodeModule("node-fetch");
        return e.default || e;
      };
      const lazyLoaderHookFetch = async (e, r, t) => {
        const o = await ((e, r) => t.lifecycle.fetch.emit(e, r))(e, r || {});
        if (!o || !(o instanceof Response)) {
          return (typeof fetch == "undefined" ? await loadNodeFetch() : fetch)(
            e,
            r || {},
          );
        }
        return o;
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
            ? (e, r) => lazyLoaderHookFetch(e, r, loaderHook)
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
      function loadScriptNode(e, r) {
        return new Promise((t, o) => {
          createScriptNode(
            e,
            (e, n) => {
              if (e) {
                o(e);
              } else {
                var a;
                var i;
                const e =
                  (r == null || (a = r.attrs) == null
                    ? undefined
                    : a.globalName) ||
                  `__FEDERATION_${r == null || (i = r.attrs) == null ? undefined : i.name}:custom__`;
                const o = (globalThis[e] = n);
                t(o);
              }
            },
            r.attrs,
            r.loaderHook,
          );
        });
      }
      async function loadModule(e, r) {
        const { fetch: t, vm: o } = r;
        const n = await t(e);
        const a = await n.text();
        const i = new o.SourceTextModule(a, {
          importModuleDynamically: async (t, o) =>
            loadModule(new URL(t, e).href, r),
        });
        await i.link(async (t) => {
          const o = new URL(t, e).href;
          return await loadModule(o, r);
        });
        return i;
      }
      function normalizeOptions(e, r, t) {
        return function (o) {
          if (o === false) {
            return false;
          }
          if (o === undefined) {
            return !!e && r;
          }
          if (o === true) {
            return r;
          }
          if (o && typeof o == "object") {
            return polyfills._extends({}, r, o);
          }
          throw new Error(
            `Unexpected type for \`${t}\`, expect boolean/undefined/object, got: ${typeof o}`,
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
    31026: function (e, r) {
      "use strict";

      function t() {
        t =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var o in t) {
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                  e[o] = t[o];
                }
              }
            }
            return e;
          };
        return t.apply(this, arguments);
      }
      r._extends = t;
    },
    79011: function (e, r) {
      "use strict";

      r.FEDERATION_SUPPORTED_TYPES = ["script"];
    },
    79083: function (e, r, t) {
      "use strict";

      var o = t(84620);
      var n = t(79011);
      function a(e) {
        var r = Object.create(null);
        if (e) {
          Object.keys(e).forEach(function (t) {
            if (t !== "default") {
              var o = Object.getOwnPropertyDescriptor(e, t);
              Object.defineProperty(
                r,
                t,
                o.get
                  ? o
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
        r.default = e;
        return Object.freeze(r);
      }
      function i(e) {
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
      const _ = "/";
      const l = {
        [s]: "scope_",
        [c]: "_",
        [_]: "__",
      };
      const u = {
        [l[s]]: s,
        [l[c]]: c,
        [l[_]]: _,
      };
      const p = {
        runtime: a(o),
        instance: undefined,
        initOptions: undefined,
        bundlerRuntime: {
          remotes: function (e) {
            const {
              chunkId: r,
              promises: t,
              chunkMapping: o,
              idToExternalAndNameMapping: a,
              webpackRequire: p,
              idToRemoteMap: d,
            } = e;
            i(p);
            if (p.o(o, r)) {
              o[r].forEach((e) => {
                let r = p.R;
                r ||= [];
                const o = a[e];
                const i = d[e];
                if (r.indexOf(o) >= 0) {
                  return;
                }
                r.push(o);
                if (o.p) {
                  return t.push(o.p);
                }
                const f = (r) => {
                  r ||= new Error("Container missing");
                  if (typeof r.message == "string") {
                    r.message += `\nwhile loading "${o[1]}" from ${o[2]}`;
                  }
                  p.m[e] = () => {
                    throw r;
                  };
                  o.p = 0;
                };
                const m = (e, r, n, a, i, s) => {
                  try {
                    const c = e(r, n);
                    if (!c || !c.then) {
                      return i(c, a, s);
                    }
                    {
                      const e = c.then((e) => i(e, a), f);
                      if (!s) {
                        return e;
                      }
                      t.push((o.p = e));
                    }
                  } catch (e) {
                    f(e);
                  }
                };
                const h = (e, r, t) => (e ? m(p.I, o[0], 0, e, b, t) : f());
                var b = (e, t, n) => m(t.get, o[1], r, 0, g, n);
                var g = (r) => {
                  o.p = 1;
                  p.m[e] = (e) => {
                    e.exports = r();
                  };
                };
                const y = () => {
                  try {
                    const e =
                      (function (e, r, t) {
                        try {
                          let t = e;
                          if (r) {
                            if (!t.startsWith(r)) {
                              return t;
                            }
                            t = t.replace(new RegExp(r, "g"), "");
                          }
                          t = t
                            .replace(new RegExp(`${l[s]}`, "g"), u[l[s]])
                            .replace(new RegExp(`${l[_]}`, "g"), u[l[_]])
                            .replace(new RegExp(`${l[c]}`, "g"), u[l[c]]);
                          return t;
                        } catch (e) {
                          throw e;
                        }
                      })(i[0].name, "ENCODE_NAME_PREFIX") + o[1].slice(1);
                    const r = p.federation.instance;
                    const t = () =>
                      p.federation.instance.loadRemote(e, {
                        loadFactory: false,
                        from: "build",
                      });
                    if (r.options.shareStrategy === "version-first") {
                      return Promise.all(
                        r.sharedHandler.initializeSharing(o[0]),
                      ).then(() => t());
                    } else {
                      return t();
                    }
                  } catch (e) {
                    f(e);
                  }
                };
                if (
                  i.length === 1 &&
                  n.FEDERATION_SUPPORTED_TYPES.includes(i[0].externalType) &&
                  i[0].name
                ) {
                  m(y, o[2], 0, 0, g, 1);
                } else {
                  m(p, o[2], 0, 0, h, 1);
                }
              });
            }
          },
          consumes: function (e) {
            const {
              chunkId: r,
              promises: t,
              chunkMapping: o,
              installedModules: n,
              moduleToHandlerMapping: a,
              webpackRequire: s,
            } = e;
            i(s);
            if (s.o(o, r)) {
              o[r].forEach((e) => {
                if (s.o(n, e)) {
                  return t.push(n[e]);
                }
                const r = (r) => {
                  n[e] = 0;
                  s.m[e] = (t) => {
                    delete s.c[e];
                    t.exports = r();
                  };
                };
                const o = (r) => {
                  delete n[e];
                  s.m[e] = (t) => {
                    delete s.c[e];
                    throw r;
                  };
                };
                try {
                  const i = s.federation.instance;
                  if (!i) {
                    throw new Error("Federation instance not found!");
                  }
                  const { shareKey: c, getter: _, shareInfo: l } = a[e];
                  const u = i
                    .loadShare(c, {
                      customShareInfo: l,
                    })
                    .then((e) => (e === false ? _() : e));
                  if (u.then) {
                    t.push((n[e] = u.then(r).catch(o)));
                  } else {
                    r(u);
                  }
                } catch (e) {
                  o(e);
                }
              });
            }
          },
          I: function ({
            shareScopeName: e,
            webpackRequire: r,
            initPromises: t,
            initTokens: o,
            initScope: a,
          }) {
            a ||= [];
            const s = r.federation.instance;
            var c = o[e];
            c ||= o[e] = {
              from: s.name,
            };
            if (a.indexOf(c) >= 0) {
              return;
            }
            a.push(c);
            const _ = t[e];
            if (_) {
              return _;
            }
            var l = (t) => {
              var o = (e) => {
                r = "Initialization of sharing external failed: " + e;
                return (
                  typeof console != "undefined" &&
                  console.warn &&
                  console.warn(r)
                );
                var r;
              };
              try {
                var n = r(t);
                if (!n) {
                  return;
                }
                var i = (t) => t && t.init && t.init(r.S[e], a);
                if (n.then) {
                  return u.push(n.then(i, o));
                }
                var s = i(n);
                if (s && typeof s != "boolean" && s.then) {
                  return u.push(s.catch(o));
                }
              } catch (e) {
                o(e);
              }
            };
            const u = s.initializeSharing(e, {
              strategy: s.options.shareStrategy,
              initScope: a,
              from: "build",
            });
            i(r);
            const p = r.federation.bundlerRuntimeOptions.remotes;
            if (p) {
              Object.keys(p.idToRemoteMap).forEach((e) => {
                const r = p.idToRemoteMap[e];
                const t = p.idToExternalAndNameMapping[e][2];
                if (r.length > 1) {
                  l(t);
                } else if (r.length === 1) {
                  const e = r[0];
                  if (!n.FEDERATION_SUPPORTED_TYPES.includes(e.externalType)) {
                    l(t);
                  }
                }
              });
            }
            if (u.length) {
              return (t[e] = Promise.all(u).then(() => (t[e] = true)));
            } else {
              return (t[e] = true);
            }
          },
          S: {},
          installInitialConsumes: function (e) {
            const {
              moduleToHandlerMapping: r,
              webpackRequire: t,
              installedModules: o,
              initialConsumes: n,
            } = e;
            n.forEach((e) => {
              t.m[e] = (n) => {
                o[e] = 0;
                delete t.c[e];
                const a = (function (e) {
                  const {
                    moduleId: r,
                    moduleToHandlerMapping: t,
                    webpackRequire: o,
                  } = e;
                  const n = o.federation.instance;
                  if (!n) {
                    throw new Error("Federation instance not found!");
                  }
                  const { shareKey: a, shareInfo: i } = t[r];
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
                  moduleToHandlerMapping: r,
                  webpackRequire: t,
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
              webpackRequire: r,
              shareScope: t,
              initScope: o,
              shareScopeKey: n,
              remoteEntryInitOptions: a,
            } = e;
            if (!r.S) {
              return;
            }
            if (
              !r.federation ||
              !r.federation.instance ||
              !r.federation.initOptions
            ) {
              return;
            }
            const i = r.federation.instance;
            var s = n || "default";
            i.initOptions({
              name: r.federation.initOptions.name,
              remotes: [],
              ...a,
            });
            i.initShareScopeMap(s, t, {
              hostShareScopeMap: a?.shareScopeMap || {},
            });
            if (r.federation.attachShareScopeMap) {
              r.federation.attachShareScopeMap(r);
            }
            if (typeof r.federation.prefetch == "function") {
              r.federation.prefetch();
            }
            return r.I(s, o);
          },
        },
        attachShareScopeMap: i,
        bundlerRuntimeOptions: {},
      };
      e.exports = p;
    },
    88102: function (e, r, t) {
      t.p = `${window.globalServiceVars.resumeProfileFront.staticHost}/`;
    },
    31735: function (e, r, t) {
      "use strict";

      t.d(r, {
        get: () => t.getContainer,
        init: () => t.initContainer,
      });
    },
    84567: function (e, r, t) {
      "use strict";

      var o = t(79083);
      var n = t.n(o);
      const a = [];
      const i = {};
      if (
        (t.initializeSharingData || t.initializeExposesData) &&
        t.federation
      ) {
        const e = (e, r, t) => {
          if (e && e[r]) {
            e[r] = t;
          }
        };
        const r = (e, r, t) => {
          const o = t();
          var n;
          var a;
          var i;
          if (Array.isArray(o)) {
            if ((i = (n = e)[(a = r)]) === null || i === undefined) {
              n[a] = [];
            }
            e[r].push(...o);
          } else if (typeof o == "object" && o !== null) {
            var s;
            var c;
            var _;
            if ((_ = (s = e)[(c = r)]) === null || _ === undefined) {
              s[c] = {};
            }
            Object.assign(e[r], o);
          }
        };
        const o = (e, r, t) => {
          var o;
          var n;
          var a;
          if ((a = (o = e)[(n = r)]) === null || a === undefined) {
            o[n] = t();
          }
        };
        const y = t.remotesLoadingData?.chunkMapping ?? {};
        const k = t.remotesLoadingData?.moduleIdToRemoteDataMapping ?? {};
        const w = t.initializeSharingData?.scopeToSharingDataMapping ?? {};
        const E = t.consumesLoadingData?.chunkMapping ?? {};
        const S = t.consumesLoadingData?.moduleIdToConsumeDataMapping ?? {};
        const v = {};
        const q = [];
        const N = {};
        const R = t.initializeExposesData?.shareScope;
        for (const e in n()) {
          t.federation[e] = n()[e];
        }
        o(t.federation, "consumesLoadingModuleToHandlerMapping", () => {
          const e = {};
          for (let [r, t] of Object.entries(S)) {
            e[r] = {
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
        o(t.federation, "initOptions", () => ({}));
        o(t.federation.initOptions, "name", () => "resume_profile_front");
        o(t.federation.initOptions, "shareStrategy", () => "version-first");
        o(t.federation.initOptions, "shared", () => {
          const e = {};
          for (let [r, t] of Object.entries(w)) {
            for (let o of t) {
              if (typeof o == "object" && o !== null) {
                const {
                  name: t,
                  version: n,
                  factory: a,
                  eager: i,
                  singleton: s,
                  requiredVersion: c,
                  strictVersion: _,
                } = o;
                const l = {};
                const u = function (e) {
                  return e !== undefined;
                };
                if (u(s)) {
                  l.singleton = s;
                }
                if (u(c)) {
                  l.requiredVersion = c;
                }
                if (u(i)) {
                  l.eager = i;
                }
                if (u(_)) {
                  l.strictVersion = _;
                }
                const p = {
                  version: n,
                  scope: [r],
                  shareConfig: l,
                  get: a,
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
        r(t.federation.initOptions, "remotes", () =>
          Object.values(i)
            .flat()
            .filter((e) => e.externalType === "script"),
        );
        r(t.federation.initOptions, "plugins", () => a);
        o(t.federation, "bundlerRuntimeOptions", () => ({}));
        o(t.federation.bundlerRuntimeOptions, "remotes", () => ({}));
        o(t.federation.bundlerRuntimeOptions.remotes, "chunkMapping", () => y);
        o(
          t.federation.bundlerRuntimeOptions.remotes,
          "idToExternalAndNameMapping",
          () => {
            const e = {};
            for (let [r, t] of Object.entries(k)) {
              e[r] = [t.shareScope, t.name, t.externalModuleId, t.remoteName];
            }
            return e;
          },
        );
        o(
          t.federation.bundlerRuntimeOptions.remotes,
          "webpackRequire",
          () => t,
        );
        r(t.federation.bundlerRuntimeOptions.remotes, "idToRemoteMap", () => {
          const e = {};
          for (let [r, t] of Object.entries(k)) {
            const o = i[t.remoteName];
            if (o) {
              e[r] = o;
            }
          }
          return e;
        });
        e(t, "S", t.federation.bundlerRuntime.S);
        if (t.federation.attachShareScopeMap) {
          t.federation.attachShareScopeMap(t);
        }
        e(t.f, "remotes", (e, r) =>
          t.federation.bundlerRuntime.remotes({
            chunkId: e,
            promises: r,
            chunkMapping: y,
            idToExternalAndNameMapping:
              t.federation.bundlerRuntimeOptions.remotes
                .idToExternalAndNameMapping,
            idToRemoteMap:
              t.federation.bundlerRuntimeOptions.remotes.idToRemoteMap,
            webpackRequire: t,
          }),
        );
        e(t.f, "consumes", (e, r) =>
          t.federation.bundlerRuntime.consumes({
            chunkId: e,
            promises: r,
            chunkMapping: E,
            moduleToHandlerMapping:
              t.federation.consumesLoadingModuleToHandlerMapping,
            installedModules: v,
            webpackRequire: t,
          }),
        );
        e(t, "I", (e, r) =>
          t.federation.bundlerRuntime.I({
            shareScopeName: e,
            initScope: r,
            initPromises: q,
            initTokens: N,
            webpackRequire: t,
          }),
        );
        e(t, "initContainer", (e, r, o) =>
          t.federation.bundlerRuntime.initContainerEntry({
            shareScope: e,
            initScope: r,
            remoteEntryInitOptions: o,
            shareScopeKey: R,
            webpackRequire: t,
          }),
        );
        e(t, "getContainer", (e, r) => {
          var o = t.initializeExposesData.moduleMap;
          t.R = r;
          r = Object.prototype.hasOwnProperty.call(o, e)
            ? o[e]()
            : Promise.resolve().then(() => {
                throw new Error(
                  'Module "' + e + '" does not exist in container.',
                );
              });
          t.R = undefined;
          return r;
        });
        t.federation.instance = t.federation.runtime.init(
          t.federation.initOptions,
        );
        if (t.consumesLoadingData?.initialConsumes) {
          t.federation.bundlerRuntime.installInitialConsumes({
            webpackRequire: t,
            installedModules: v,
            initialConsumes: t.consumesLoadingData.initialConsumes,
            moduleToHandlerMapping:
              t.federation.consumesLoadingModuleToHandlerMapping,
          });
        }
      }
    },
  };
  var __webpack_module_cache__ = {};
  var inProgress;
  var dataWebpackPrefix;
  function __webpack_require__(e) {
    var r = __webpack_module_cache__[e];
    if (r !== undefined) {
      return r.exports;
    }
    var t = (__webpack_module_cache__[e] = {
      id: e,
      loaded: false,
      exports: {},
    });
    __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__);
    t.loaded = true;
    return t.exports;
  }
  __webpack_require__.m = __webpack_modules__;
  __webpack_require__.c = __webpack_module_cache__;
  __webpack_require__.federation ||= {
    chunkMatcher: function (e) {
      return !/^(6(16|21|94)0|4(604|924|982)|1(095|327|567|62|889)|2432|282|3049|5309|7595|767|9465)$/.test(
        e,
      );
    },
    rootOutputDir: "",
  };
  __webpack_require__.n = (e) => {
    var r = e && e.__esModule ? () => e.default : () => e;
    __webpack_require__.d(r, {
      a: r,
    });
    return r;
  };
  __webpack_require__.d = (e, r) => {
    for (var t in r) {
      if (__webpack_require__.o(r, t) && !__webpack_require__.o(e, t)) {
        Object.defineProperty(e, t, {
          enumerable: true,
          get: r[t],
        });
      }
    }
  };
  __webpack_require__.f = {};
  __webpack_require__.e = (e) =>
    Promise.all(
      Object.keys(__webpack_require__.f).reduce((r, t) => {
        __webpack_require__.f[t](e, r);
        return r;
      }, []),
    );
  __webpack_require__.u = (e) =>
    (({
      1048: "fallbackBlokoIcon",
      1063: "resume_preferred_area-route",
      1414: "resume_elementary_education-route",
      1423: "phoneInputMetadataMax",
      1501: "fallbackBlokoTranslateGuard",
      1503: "resume_keyskills-route",
      1785: "libphonenumber-js",
      2113: "resume_education-route",
      227: "resume_experience-route",
      231: "resume_edit_title-route",
      2418: "resume_common_short-route",
      2536: "fallbackBlokoLink",
      2847: "profile_common-route",
      3566: "fallbackBlokoButton",
      3941: "profile_creds-route",
      412: "resume_dynamic_screen-route",
      4416: "resume_title-route",
      4739: "fallbackSharedVendors",
      4821: "profile_address-route",
      494: "profile_primaryEducation-route",
      4998: "profile_elementaryEducation-route",
      5314: "resume_attestation_education-route",
      5449: "profile_view_languages-route",
      5885: "fallbackBlokoText",
      6428: "profile_vehicle-route",
      6518: "fallbackBlokoCommon",
      6535: "resume_recommendation-route",
      6594: "resume_professional_role-route",
      6652: "fallbackBlokoLoading",
      7018: "notSharedVendors",
      7472: "resume_education_level-route",
      7678: "Profile-route",
      7799: "fallbackBlokoVSpacing",
      788: "resume_experience_in_professional_role-route",
      8145: "resume_common-route",
      835: "fallbackBlokoForm",
      8612: "resume_educations-route",
      8803: "profile_view_search_preferences-route",
      8820: "phoneInputMetadataLimitedMax",
      9129: "flagEmojiFont",
      9221: "profile_view_educations-route",
      9592: "phoneInputMetadataMobile",
      9640: "resume_photo_upload-route",
      9644: "phoneInputMetadataLimitedMobile",
      9698: "resume_correction_skills-route",
      9817: "fallbackBlokoInputText",
      9840: "resume_skills-route",
      9846: "profile_preferredWorkAreas-route",
      9878: "resume_driving_information-route",
      99: "resume_additional_education-route",
    })[e] || e) +
    "." +
    {
      1048: "b2d41f4ff7261635",
      1063: "e466b64ae9a6e627",
      1414: "ed480ce0a0181274",
      1423: "f156337d4ffe2c17",
      1501: "39f54b707cfa02a9",
      1503: "6074ad3bb5ea8af9",
      1785: "64e86a4aa6aa7266",
      2102: "286066e826aa6969",
      2113: "64e5e8909a295497",
      227: "c3245d9552257b26",
      231: "946d6057860aaa9c",
      2418: "1a61d2e5d6805fea",
      2536: "0e1a8d7e385814ce",
      2656: "67a53a5879abe1c4",
      2726: "897aef4f096f8bc9",
      2847: "df9fffc4a092b824",
      3191: "a3c49218133641ad",
      3566: "0318c5adf2edc73c",
      3568: "6d7ccc1576dc14e3",
      3718: "676a983c43d17dca",
      3941: "9ed5db901850eda1",
      412: "36e0833c1a69473a",
      4323: "7d5149f9477f278f",
      4416: "e1e37fbcad57eb3b",
      4739: "3de2cf7330b1b536",
      4821: "299ae203190da6d9",
      4891: "f682422d8b091367",
      494: "986fc3f613caa614",
      4998: "2e331de6da983172",
      5314: "0ef2e813137e3573",
      5449: "989a2f0b6678ef80",
      5675: "d879bfad942f115b",
      5885: "6856d93b842cfacb",
      6372: "e167140d1b7c985e",
      6428: "a58b2097c3b8c6db",
      6518: "22c62a5cba632cd1",
      6535: "f64a0e9219944454",
      6594: "faf5ba8cba0fbc28",
      6652: "7f2ffad8874d0076",
      6693: "d8721ac4bb95c617",
      6878: "6356b8830965dced",
      7018: "b9c77bfc5b604b3d",
      7097: "2cdfd7faa22eef4a",
      7424: "9df99bd2702e28ea",
      7472: "66d3718e9e1aa239",
      7678: "9cfba730ac872d6c",
      7779: "9aadf7178b0ae443",
      7799: "de91d78e80b71c6d",
      7879: "17a2a18bffa12445",
      788: "16d1d583d9f645be",
      7981: "fcd03bfd183217fe",
      8145: "787a446362fad6a9",
      8204: "e7fe84123b776246",
      835: "8c598ca2dcc7c7f4",
      8490: "3aec61eb87b33933",
      8612: "396188b4a9a3d43e",
      8628: "de3ce1ec5d4d156c",
      8803: "ec7adc61d20d2ed0",
      8820: "b43285376f0e1d68",
      9129: "e746beeb485eee2b",
      9221: "9ba589d336ff5131",
      9592: "18711d086eef439b",
      9640: "5c04e32263c0f2cd",
      9644: "23d339ed0ba8e353",
      9698: "46b9cdae71bcee8d",
      9817: "55c23dd76fc7c5df",
      9840: "ebc20ea74daa0eb1",
      9846: "89095f0fa09e9db7",
      9878: "49afc49224d1cdf6",
      99: "7c903fa1c3b16dad",
    }[e] +
    ".js";
  __webpack_require__.miniCssF = (e) =>
    (({
      1063: "resume_preferred_area-route",
      1503: "resume_keyskills-route",
      1567: "blokoStyles",
      227: "resume_experience-route",
      2847: "profile_common-route",
      3941: "profile_creds-route",
      4821: "profile_address-route",
      494: "profile_primaryEducation-route",
      4998: "profile_elementaryEducation-route",
      5449: "profile_view_languages-route",
      6428: "profile_vehicle-route",
      6594: "resume_professional_role-route",
      7472: "resume_education_level-route",
      7678: "Profile-route",
      788: "resume_experience_in_professional_role-route",
      8612: "resume_educations-route",
      9640: "resume_photo_upload-route",
      9846: "profile_preferredWorkAreas-route",
      9878: "resume_driving_information-route",
    })[e] || e) +
    "." +
    {
      1063: "c893415a8681d27c",
      1503: "fd5e1851ca759e12",
      1567: "1ea17c825b99f3fc",
      2102: "9674d43f63a58b8c",
      227: "0fbd66963fc70605",
      2656: "57507c92320ac0ba",
      2847: "cf7926e8d147ea1a",
      3941: "3099d5fbca65516a",
      4821: "354caa38089ebb1b",
      494: "314276aeb6e6345e",
      4998: "4c20e0c352e463f6",
      5449: "891dfa0b060d7fa7",
      6428: "cf13a1fb74c15e34",
      6594: "9e6c70e9a00ac1f3",
      6940: "0c7bdbf28e2cbb09",
      7097: "7b3df6e508763b6c",
      7472: "d810a9fd550c1aa8",
      7595: "b1aa264de62b7f71",
      7678: "90419060848d1e8d",
      7879: "7a7d38e84cc95f43",
      788: "0fbd66963fc70605",
      8490: "ae61bc7beba7b28e",
      8612: "9a9853dc1ff0e822",
      9640: "8d96a0d501f7555e",
      9846: "f094a57d6268d5e8",
      9878: "80dd31d38308879f",
    }[e] +
    ".css";
  __webpack_require__.h = () => "1fd5811965763546";
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
  __webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r);
  inProgress = {};
  dataWebpackPrefix = "resume-profile-front:";
  __webpack_require__.l = function (e, r, t, o) {
    if (inProgress[e]) {
      inProgress[e].push(r);
    } else {
      var n;
      var a;
      if (t !== undefined) {
        for (
          var i = document.getElementsByTagName("script"), s = 0;
          s < i.length;
          s++
        ) {
          var c = i[s];
          if (
            c.getAttribute("src") == e ||
            c.getAttribute("data-webpack") == dataWebpackPrefix + t
          ) {
            n = c;
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
        n.setAttribute("data-webpack", dataWebpackPrefix + t);
        n.src = e;
        if (n.src.indexOf(window.location.origin + "/") !== 0) {
          n.crossOrigin = "anonymous";
        }
      }
      inProgress[e] = [r];
      function _(r, t) {
        n.onerror = n.onload = null;
        clearTimeout(l);
        var o = inProgress[e];
        delete inProgress[e];
        if (n.parentNode) {
          n.parentNode.removeChild(n);
        }
        if (o) {
          o.forEach(function (e) {
            return e(t);
          });
        }
        if (r) {
          return r(t);
        }
      }
      var l = setTimeout(
        _.bind(null, undefined, {
          type: "timeout",
          target: n,
        }),
        300000,
      );
      n.onerror = _.bind(null, n.onerror);
      n.onload = _.bind(null, n.onload);
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
  __webpack_require__.j = "7537";
  __webpack_require__.S = {};
  __webpack_require__.initializeSharingData = {
    scopeToSharingDataMapping: {
      default: [
        {
          name: "@hh.ru/rprogress",
          version: "4.0.5",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("2432"),
              __webpack_require__.e("1095"),
              __webpack_require__.e("4982"),
            ]).then(() => () => __webpack_require__(32181)),
          eager: 0,
          requiredVersion: "^4.0.5",
          strictVersion: 1,
        },
        {
          name: "@hh.ru/sentry-js",
          version: "15.1.4",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("4323"),
              __webpack_require__.e("9465"),
              __webpack_require__.e("767"),
            ]).then(() => () => __webpack_require__(27111)),
          eager: 0,
          requiredVersion: "^15.1.4",
          strictVersion: 1,
        },
        {
          name: "@reduxjs/toolkit",
          version: "14258553269.1103017334892.11210442220",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7424"),
              __webpack_require__.e("3568"),
            ]).then(() => () => __webpack_require__(74754)),
          eager: 0,
          requiredVersion: "^14258553269.1103017334892.11210442220",
          strictVersion: 1,
        },
        {
          name: "@sentry/react",
          version: "14258553269.1103017334892.11210442220",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("5675"),
              __webpack_require__.e("2432"),
              __webpack_require__.e("282"),
            ]).then(() => () => __webpack_require__(42998)),
          eager: 0,
          requiredVersion: "^14258553269.1103017334892.11210442220",
          strictVersion: 1,
        },
        {
          name: "axios",
          version: "0.26.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("4739"),
            ]).then(() => () => __webpack_require__(9669)),
          eager: 0,
          requiredVersion: "^0.26.0",
          strictVersion: 1,
        },
        {
          name: "bloko/blocks/button/ButtonGroup",
          version: "185.1.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("1567"),
              __webpack_require__.e("3566"),
              __webpack_require__.e("1095"),
              __webpack_require__.e("162"),
            ]).then(() => () => __webpack_require__(65519)),
          eager: 0,
          requiredVersion: "^185.1.0",
          strictVersion: 1,
        },
        {
          name: "bloko/blocks/button",
          version: "185.1.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("1567"),
              __webpack_require__.e("3566"),
              __webpack_require__.e("2432"),
              __webpack_require__.e("1095"),
              __webpack_require__.e("162"),
              __webpack_require__.e("6210"),
            ]).then(() => () => __webpack_require__(68638)),
          eager: 0,
          requiredVersion: "^185.1.0",
          strictVersion: 1,
        },
        {
          name: "bloko/blocks/form",
          version: "185.1.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("1567"),
              __webpack_require__.e("835"),
              __webpack_require__.e("2432"),
              __webpack_require__.e("1095"),
              __webpack_require__.e("162"),
              __webpack_require__.e("1889"),
            ]).then(() => () => __webpack_require__(44420)),
          eager: 0,
          requiredVersion: "^185.1.0",
          strictVersion: 1,
        },
        {
          name: "bloko/blocks/inputText",
          version: "185.1.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("1567"),
              __webpack_require__.e("1048"),
              __webpack_require__.e("9817"),
              __webpack_require__.e("2432"),
              __webpack_require__.e("1095"),
              __webpack_require__.e("162"),
              __webpack_require__.e("1327"),
              __webpack_require__.e("4924"),
            ]).then(() => () => __webpack_require__(54920)),
          eager: 0,
          requiredVersion: "^185.1.0",
          strictVersion: 1,
        },
        {
          name: "bloko/blocks/link",
          version: "185.1.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("1567"),
              __webpack_require__.e("1048"),
              __webpack_require__.e("2536"),
              __webpack_require__.e("2432"),
              __webpack_require__.e("1095"),
              __webpack_require__.e("162"),
            ]).then(() => () => __webpack_require__(6974)),
          eager: 0,
          requiredVersion: "^185.1.0",
          strictVersion: 1,
        },
        {
          name: "bloko/blocks/loading",
          version: "185.1.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("1567"),
              __webpack_require__.e("1048"),
              __webpack_require__.e("6652"),
              __webpack_require__.e("1095"),
              __webpack_require__.e("162"),
            ]).then(() => () => __webpack_require__(34072)),
          eager: 0,
          requiredVersion: "^185.1.0",
          strictVersion: 1,
        },
        {
          name: "bloko/blocks/text",
          version: "185.1.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("1567"),
              __webpack_require__.e("5885"),
              __webpack_require__.e("1095"),
              __webpack_require__.e("162"),
            ]).then(() => () => __webpack_require__(63776)),
          eager: 0,
          requiredVersion: "^185.1.0",
          strictVersion: 1,
        },
        {
          name: "bloko/blocks/translateGuard",
          version: "185.1.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("1567"),
              __webpack_require__.e("1501"),
              __webpack_require__.e("1095"),
            ]).then(() => () => __webpack_require__(44472)),
          eager: 0,
          requiredVersion: "^185.1.0",
          strictVersion: 1,
        },
        {
          name: "bloko/blocks/vSpacing",
          version: "185.1.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("1567"),
              __webpack_require__.e("7799"),
              __webpack_require__.e("2432"),
              __webpack_require__.e("1095"),
              __webpack_require__.e("162"),
            ]).then(() => () => __webpack_require__(59496)),
          eager: 0,
          requiredVersion: "^185.1.0",
          strictVersion: 1,
        },
        {
          name: "bloko/common/hooks/useServerEnv",
          version: "185.1.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("6518"),
              __webpack_require__.e("2432"),
            ]).then(() => () => __webpack_require__(48353)),
          eager: 0,
          requiredVersion: "^185.1.0",
          strictVersion: 1,
        },
        {
          name: "bloko/common/transition",
          version: "185.1.0",
          factory: () =>
            __webpack_require__
              .e("6518")
              .then(() => () => __webpack_require__(61511)),
          eager: 0,
          requiredVersion: "^185.1.0",
          strictVersion: 1,
        },
        {
          name: "classnames",
          version: "14258553269.1103017334892.11210442220",
          factory: () =>
            __webpack_require__
              .e("7018")
              .then(() => () => __webpack_require__(94184)),
          eager: 0,
          requiredVersion: "^14258553269.1103017334892.11210442220",
          strictVersion: 1,
        },
        {
          name: "connected-react-router",
          version: "14258553269.1103017334892.11210442220",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("4739"),
              __webpack_require__.e("2432"),
              __webpack_require__.e("3049"),
              __webpack_require__.e("4604"),
            ]).then(() => () => __webpack_require__(57005)),
          eager: 0,
          requiredVersion: "^14258553269.1103017334892.11210442220",
          strictVersion: 1,
        },
        {
          name: "history",
          version: "14258553269.1103017334892.11210442220",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("4739"),
              __webpack_require__.e("8204"),
            ]).then(() => () => __webpack_require__(59731)),
          eager: 0,
          requiredVersion: "^14258553269.1103017334892.11210442220",
          strictVersion: 1,
        },
        {
          name: "json-stringify-safe",
          version: "14258553269.1103017334892.11210442220",
          factory: () =>
            __webpack_require__
              .e("7018")
              .then(() => () => __webpack_require__(64530)),
          eager: 0,
          requiredVersion: "^14258553269.1103017334892.11210442220",
          strictVersion: 1,
        },
        {
          name: "react-dom",
          version: "18.2.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("4739"),
              __webpack_require__.e("2432"),
            ]).then(() => () => __webpack_require__(73935)),
          eager: 0,
          requiredVersion: "^18.2.0",
          strictVersion: 1,
        },
        {
          name: "react-head",
          version: "14258553269.1103017334892.11210442220",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("4739"),
              __webpack_require__.e("2432"),
              __webpack_require__.e("4982"),
            ]).then(() => () => __webpack_require__(87678)),
          eager: 0,
          requiredVersion: "^14258553269.1103017334892.11210442220",
          strictVersion: 1,
        },
        {
          name: "react-is",
          version: "18.2.0",
          factory: () =>
            __webpack_require__
              .e("7018")
              .then(() => () => __webpack_require__(47109)),
          eager: 0,
          requiredVersion: "^18.2.0",
          strictVersion: 1,
        },
        {
          name: "react-is",
          version: "18.2.0",
          factory: () =>
            __webpack_require__
              .e("4739")
              .then(() => () => __webpack_require__(50663)),
          eager: 0,
          requiredVersion: "^18.2.0",
          strictVersion: 1,
        },
        {
          name: "react-redux",
          version: "14258553269.1103017334892.11210442220",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("7981"),
              __webpack_require__.e("2432"),
            ]).then(() => () => __webpack_require__(81722)),
          eager: 0,
          requiredVersion: "^14258553269.1103017334892.11210442220",
          strictVersion: 1,
        },
        {
          name: "react-router-dom",
          version: "14258553269.1103017334892.11210442220",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("4739"),
              __webpack_require__.e("2432"),
              __webpack_require__.e("5309"),
              __webpack_require__.e("3049"),
              __webpack_require__.e("8628"),
            ]).then(() => () => __webpack_require__(73727)),
          eager: 0,
          requiredVersion: "^14258553269.1103017334892.11210442220",
          strictVersion: 1,
        },
        {
          name: "react-router",
          version: "14258553269.1103017334892.11210442220",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("4739"),
              __webpack_require__.e("2432"),
              __webpack_require__.e("282"),
              __webpack_require__.e("5309"),
              __webpack_require__.e("6160"),
              __webpack_require__.e("6878"),
            ]).then(() => () => __webpack_require__(16550)),
          eager: 0,
          requiredVersion: "^14258553269.1103017334892.11210442220",
          strictVersion: 1,
        },
        {
          name: "react/jsx-runtime",
          version: "18.2.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("4739"),
              __webpack_require__.e("2432"),
            ]).then(() => () => __webpack_require__(85893)),
          eager: 0,
          requiredVersion: "^18.2.0",
          strictVersion: 1,
        },
        {
          name: "react",
          version: "18.2.0",
          factory: () =>
            Promise.all([
              __webpack_require__.e("7018"),
              __webpack_require__.e("4739"),
            ]).then(() => () => __webpack_require__(67294)),
          eager: 0,
          requiredVersion: "^18.2.0",
          strictVersion: 1,
        },
      ],
    },
    uniqueName: "resume-profile-front",
  };
  __webpack_require__.I =
    __webpack_require__.I ||
    function () {
      throw new Error("should have __webpack_require__.I");
    };
  __webpack_require__.consumesLoadingData = {
    chunkMapping: {
      1327: ["85597", "39960"],
      282: ["7505"],
      8490: [
        "39620",
        "32382",
        "84243",
        "15426",
        "39815",
        "25977",
        "18637",
        "95779",
        "24516",
        "40188",
        "56596",
        "50075",
      ],
      3049: ["91996"],
      2432: ["45144"],
      6210: ["66677", "70880"],
      5309: ["89722"],
      9465: ["322"],
      162: ["28990"],
      1889: ["76"],
      4604: ["9325"],
      4924: ["47096"],
      4982: ["1785"],
      1095: ["9862"],
      767: ["67175"],
      6160: ["71748"],
    },
    moduleIdToConsumeDataMapping: {
      28990: {
        shareScope: "default",
        shareKey: "classnames",
        import: "classnames",
        requiredVersion: "^14258553269.1103017334892.11210442220",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          __webpack_require__
            .e("7018")
            .then(() => () => __webpack_require__(94184)),
      },
      91996: {
        shareScope: "default",
        shareKey: "react-router",
        import: "react-router",
        requiredVersion: "^14258553269.1103017334892.11210442220",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("7018"),
            __webpack_require__.e("4739"),
            __webpack_require__.e("282"),
            __webpack_require__.e("5309"),
            __webpack_require__.e("6160"),
            __webpack_require__.e("3718"),
          ]).then(() => () => __webpack_require__(16550)),
      },
      32382: {
        shareScope: "default",
        shareKey: "@hh.ru/sentry-js",
        import: "@hh.ru/sentry-js",
        requiredVersion: "^15.1.4",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("7018"),
            __webpack_require__.e("4323"),
            __webpack_require__.e("9465"),
          ]).then(() => () => __webpack_require__(27111)),
      },
      15426: {
        shareScope: "default",
        shareKey: "react-router-dom",
        import: "react-router-dom",
        requiredVersion: "^14258553269.1103017334892.11210442220",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("4739"),
            __webpack_require__.e("3191"),
          ]).then(() => () => __webpack_require__(73727)),
      },
      9325: {
        shareScope: "default",
        shareKey: "react-redux",
        import: "react-redux",
        requiredVersion: "^14258553269.1103017334892.11210442220",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("7018"),
            __webpack_require__.e("7981"),
          ]).then(() => () => __webpack_require__(81722)),
      },
      56596: {
        shareScope: "default",
        shareKey: "@hh.ru/rprogress",
        import: "@hh.ru/rprogress",
        requiredVersion: "^4.0.5",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          __webpack_require__
            .e("7018")
            .then(() => () => __webpack_require__(32181)),
      },
      76: {
        shareScope: "default",
        shareKey: "bloko/common/transition",
        import: "bloko/common/transition",
        requiredVersion: "^185.1.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          __webpack_require__
            .e("6518")
            .then(() => () => __webpack_require__(61511)),
      },
      9862: {
        shareScope: "default",
        shareKey: "react/jsx-runtime",
        import: "react/jsx-runtime",
        requiredVersion: "^18.2.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("7018"),
            __webpack_require__.e("4739"),
            __webpack_require__.e("2432"),
          ]).then(() => () => __webpack_require__(85893)),
      },
      89722: {
        shareScope: "default",
        shareKey: "history",
        import: "history",
        requiredVersion: "^14258553269.1103017334892.11210442220",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("7018"),
            __webpack_require__.e("4739"),
            __webpack_require__.e("6693"),
          ]).then(() => () => __webpack_require__(59731)),
      },
      84243: {
        shareScope: "default",
        shareKey: "axios",
        import: "axios",
        requiredVersion: "^0.26.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("7018"),
            __webpack_require__.e("4739"),
          ]).then(() => () => __webpack_require__(9669)),
      },
      66677: {
        shareScope: "default",
        shareKey: "bloko/blocks/translateGuard",
        import: "bloko/blocks/translateGuard",
        requiredVersion: "^185.1.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("1567"),
            __webpack_require__.e("1501"),
          ]).then(() => () => __webpack_require__(44472)),
      },
      70880: {
        shareScope: "default",
        shareKey: "bloko/blocks/button/ButtonGroup",
        import: "bloko/blocks/button/ButtonGroup",
        requiredVersion: "^185.1.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          __webpack_require__
            .e("3566")
            .then(() => () => __webpack_require__(65519)),
      },
      39960: {
        shareScope: "default",
        shareKey: "bloko/blocks/loading",
        import: "bloko/blocks/loading",
        requiredVersion: "^185.1.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("1048"),
            __webpack_require__.e("6652"),
          ]).then(() => () => __webpack_require__(34072)),
      },
      39815: {
        shareScope: "default",
        shareKey: "@reduxjs/toolkit",
        import: "@reduxjs/toolkit",
        requiredVersion: "^14258553269.1103017334892.11210442220",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          __webpack_require__
            .e("7424")
            .then(() => () => __webpack_require__(74754)),
      },
      25977: {
        shareScope: "default",
        shareKey: "bloko/blocks/text",
        import: "bloko/blocks/text",
        requiredVersion: "^185.1.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("1567"),
            __webpack_require__.e("5885"),
          ]).then(() => () => __webpack_require__(63776)),
      },
      24516: {
        shareScope: "default",
        shareKey: "bloko/blocks/inputText",
        import: "bloko/blocks/inputText",
        requiredVersion: "^185.1.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("1567"),
            __webpack_require__.e("1048"),
            __webpack_require__.e("9817"),
            __webpack_require__.e("1327"),
          ]).then(() => () => __webpack_require__(54920)),
      },
      322: {
        shareScope: "default",
        shareKey: "json-stringify-safe",
        import: "json-stringify-safe",
        requiredVersion: "^14258553269.1103017334892.11210442220",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          __webpack_require__
            .e("7018")
            .then(() => () => __webpack_require__(64530)),
      },
      71748: {
        shareScope: "default",
        shareKey: "react-is",
        import: "react-is",
        requiredVersion: "^18.2.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          __webpack_require__
            .e("4739")
            .then(() => () => __webpack_require__(50663)),
      },
      50075: {
        shareScope: "default",
        shareKey: "react-head",
        import: "react-head",
        requiredVersion: "^14258553269.1103017334892.11210442220",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("7018"),
            __webpack_require__.e("4739"),
          ]).then(() => () => __webpack_require__(87678)),
      },
      1785: {
        shareScope: "default",
        shareKey: "react-dom",
        import: "react-dom",
        requiredVersion: "^18.2.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("7018"),
            __webpack_require__.e("4739"),
          ]).then(() => () => __webpack_require__(73935)),
      },
      39620: {
        shareScope: "default",
        shareKey: "bloko/blocks/link",
        import: "bloko/blocks/link",
        requiredVersion: "^185.1.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("1567"),
            __webpack_require__.e("1048"),
            __webpack_require__.e("2536"),
          ]).then(() => () => __webpack_require__(6974)),
      },
      7505: {
        shareScope: "default",
        shareKey: "react-is",
        import: "react-is",
        requiredVersion: "^18.2.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          __webpack_require__
            .e("7018")
            .then(() => () => __webpack_require__(47109)),
      },
      40188: {
        shareScope: "default",
        shareKey: "connected-react-router",
        import: "connected-react-router",
        requiredVersion: "^14258553269.1103017334892.11210442220",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("7018"),
            __webpack_require__.e("4739"),
          ]).then(() => () => __webpack_require__(57005)),
      },
      95779: {
        shareScope: "default",
        shareKey: "bloko/blocks/vSpacing",
        import: "bloko/blocks/vSpacing",
        requiredVersion: "^185.1.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("1567"),
            __webpack_require__.e("7799"),
          ]).then(() => () => __webpack_require__(59496)),
      },
      47096: {
        shareScope: "default",
        shareKey: "bloko/blocks/button",
        import: "bloko/blocks/button",
        requiredVersion: "^185.1.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("1567"),
            __webpack_require__.e("3566"),
            __webpack_require__.e("6210"),
          ]).then(() => () => __webpack_require__(68638)),
      },
      67175: {
        shareScope: "default",
        shareKey: "@sentry/react",
        import: "@sentry/react",
        requiredVersion: "^14258553269.1103017334892.11210442220",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("7018"),
            __webpack_require__.e("5675"),
            __webpack_require__.e("2432"),
            __webpack_require__.e("282"),
          ]).then(() => () => __webpack_require__(42998)),
      },
      45144: {
        shareScope: "default",
        shareKey: "react",
        import: "react",
        requiredVersion: "^18.2.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("7018"),
            __webpack_require__.e("4739"),
          ]).then(() => () => __webpack_require__(67294)),
      },
      18637: {
        shareScope: "default",
        shareKey: "bloko/blocks/form",
        import: "bloko/blocks/form",
        requiredVersion: "^185.1.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          Promise.all([
            __webpack_require__.e("1567"),
            __webpack_require__.e("835"),
            __webpack_require__.e("1889"),
          ]).then(() => () => __webpack_require__(44420)),
      },
      85597: {
        shareScope: "default",
        shareKey: "bloko/common/hooks/useServerEnv",
        import: "bloko/common/hooks/useServerEnv",
        requiredVersion: "^185.1.0",
        strictVersion: true,
        singleton: false,
        eager: false,
        fallback: () =>
          __webpack_require__
            .e("6518")
            .then(() => () => __webpack_require__(48353)),
      },
    },
    initialConsumes: [],
  };
  __webpack_require__.f.consumes =
    __webpack_require__.f.consumes ||
    function () {
      throw new Error("should have __webpack_require__.f.consumes");
    };
  (() => {
    if (typeof document != "undefined") {
      function e(e) {
        return new Promise(function (r, t) {
          var o = __webpack_require__.miniCssF(e);
          var n = __webpack_require__.p + o;
          if (
            (function (e, r) {
              for (
                var t = document.getElementsByTagName("link"), o = 0;
                o < t.length;
                o++
              ) {
                var n =
                  (i = t[o]).getAttribute("data-href") ||
                  i.getAttribute("href");
                if (i.rel === "stylesheet" && (n === e || n === r)) {
                  return i;
                }
              }
              var a = document.getElementsByTagName("style");
              for (o = 0; o < a.length; o++) {
                var i;
                if (
                  (n = (i = a[o]).getAttribute("data-href")) === e ||
                  n === r
                ) {
                  return i;
                }
              }
            })(o, n)
          ) {
            return r();
          }
          (function (e, r, t, o, n) {
            var a = document.createElement("link");
            a.rel = "stylesheet";
            a.type = "text/css";
            if (__webpack_require__.nc) {
              a.nonce = __webpack_require__.nc;
            }
            a.onerror = a.onload = function (t) {
              a.onerror = a.onload = null;
              if (t.type === "load") {
                o();
              } else {
                var i = t && (t.type === "load" ? "missing" : t.type);
                var s = (t && t.target && t.target.href) || r;
                var c = new Error(
                  "Loading CSS chunk " + e + " failed.\\n(" + s + ")",
                );
                c.code = "CSS_CHUNK_LOAD_FAILED";
                c.type = i;
                c.request = s;
                if (a.parentNode) {
                  a.parentNode.removeChild(a);
                }
                n(c);
              }
            };
            a.href = r;
            if (a.href.indexOf(window.location.origin + "/") !== 0) {
              a.crossOrigin = "anonymous";
            }
            if (t) {
              t.parentNode.insertBefore(a, t.nextSibling);
            } else {
              document.head.appendChild(a);
            }
          })(e, n, null, r, t);
        });
      }
      var r = {
        7537: 0,
      };
      __webpack_require__.f.miniCss = function (t, o) {
        if (r[t]) {
          o.push(r[t]);
        } else if (
          r[t] !== 0 &&
          {
            1567: 1,
            9878: 1,
            1063: 1,
            6594: 1,
            7472: 1,
            2847: 1,
            8612: 1,
            5449: 1,
            7097: 1,
            2656: 1,
            7595: 1,
            9846: 1,
            4821: 1,
            6428: 1,
            3941: 1,
            6940: 1,
            7879: 1,
            7678: 1,
            2102: 1,
            8490: 1,
            227: 1,
            494: 1,
            1503: 1,
            4998: 1,
            788: 1,
            9640: 1,
          }[t]
        ) {
          o.push(
            (r[t] = e(t).then(
              function () {
                r[t] = 0;
              },
              function (e) {
                delete r[t];
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
          __webpack_require__.e("7018"),
          __webpack_require__.e("1567"),
          __webpack_require__.e("1048"),
          __webpack_require__.e("7097"),
          __webpack_require__.e("2432"),
          __webpack_require__.e("1095"),
          __webpack_require__.e("162"),
          __webpack_require__.e("282"),
          __webpack_require__.e("5309"),
          __webpack_require__.e("3049"),
          __webpack_require__.e("4982"),
          __webpack_require__.e("4604"),
          __webpack_require__.e("4924"),
          __webpack_require__.e("767"),
          __webpack_require__.e("8490"),
        ]).then(() => () => __webpack_require__(20874)),
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
      7537: 0,
    };
    __webpack_require__.f.j = function (r, t) {
      var o = __webpack_require__.o(e, r) ? e[r] : undefined;
      if (o !== 0) {
        if (o) {
          t.push(o[2]);
        } else if (
          /^(6(16|21|94)0|4(604|924|982)|1(095|327|567|62|889)|2432|282|3049|5309|7595|767|9465)$/.test(
            r,
          )
        ) {
          e[r] = 0;
        } else {
          var n = new Promise((t, n) => (o = e[r] = [t, n]));
          t.push((o[2] = n));
          var a = __webpack_require__.p + __webpack_require__.u(r);
          var i = new Error();
          __webpack_require__.l(
            a,
            function (t) {
              if (
                __webpack_require__.o(e, r) &&
                ((o = e[r]) !== 0 && (e[r] = undefined), o)
              ) {
                var n = t && (t.type === "load" ? "missing" : t.type);
                var a = t && t.target && t.target.src;
                i.message =
                  "Loading chunk " + r + " failed.\n(" + n + ": " + a + ")";
                i.name = "ChunkLoadError";
                i.type = n;
                i.request = a;
                o[1](i);
              }
            },
            "chunk-" + r,
            r,
          );
        }
      }
    };
    var r = (r, t) => {
      var o;
      var n;
      var [a, i, s] = t;
      var c = 0;
      if (a.some((r) => e[r] !== 0)) {
        for (o in i) {
          if (__webpack_require__.o(i, o)) {
            __webpack_require__.m[o] = i[o];
          }
        }
        if (s) {
          s(__webpack_require__);
        }
      }
      for (r && r(t); c < a.length; c++) {
        n = a[c];
        if (__webpack_require__.o(e, n) && e[n]) {
          e[n][0]();
        }
        e[n] = 0;
      }
    };
    var t = (globalThis.__resume_profile_front_LOADABLE_LOADED_CHUNKS__ =
      globalThis.__resume_profile_front_LOADABLE_LOADED_CHUNKS__ || []);
    t.forEach(r.bind(null, 0));
    t.push = r.bind(null, t.push.bind(t));
  })();
  __webpack_require__.ruid = "bundler=rspack@1.3.10";
  __webpack_require__(84567);
  __webpack_require__(88102);
  var __webpack_exports__ = __webpack_require__(31735);
  resume_profile_front = __webpack_exports__;
})();
//# sourceMappingURL=remote.resume_profile_front.377904de33275d1a.js.map
