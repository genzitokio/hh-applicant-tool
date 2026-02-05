"use strict";

(globalThis.__career_platform_front_LOADABLE_LOADED_CHUNKS__ =
  globalThis.__career_platform_front_LOADABLE_LOADED_CHUNKS__ || []).push([
  ["262"],
  {
    77071: function (t, e, n) {
      var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, n, r = n) {
              var s = Object.getOwnPropertyDescriptor(e, n);
              if (
                !s ||
                !!("get" in s ? !e.__esModule : s.writable || s.configurable)
              ) {
                s = {
                  enumerable: true,
                  get: function () {
                    return e[n];
                  },
                };
              }
              Object.defineProperty(t, r, s);
            }
          : function (t, e, n, r = n) {
              t[r] = e[n];
            });
      var s =
        (this && this.__exportStar) ||
        function (t, e) {
          for (var n in t) {
            if (
              n !== "default" &&
              !Object.prototype.hasOwnProperty.call(e, n)
            ) {
              r(e, t, n);
            }
          }
        };
      Object.defineProperty(e, "__esModule", {
        value: true,
      });
      s(n(87243), e);
    },
    73067: function (t, e, n) {
      var r;
      var s = Object.create;
      var i = Object.defineProperty;
      var o = Object.getOwnPropertyDescriptor;
      var a = Object.getOwnPropertyNames;
      var c = Object.getPrototypeOf;
      var u = Object.prototype.hasOwnProperty;
      var l = (t, e, n, r) => {
        if ((e && typeof e == "object") || typeof e == "function") {
          for (let s of a(e)) {
            if (!u.call(t, s) && s !== n) {
              i(t, s, {
                get: () => e[s],
                enumerable: !(r = o(e, s)) || r.enumerable,
              });
            }
          }
        }
        return t;
      };
      var d = {};
      ((t, e) => {
        for (var n in e) {
          i(t, n, {
            get: e[n],
            enumerable: true,
          });
        }
      })(d, {
        Provider: () => ct,
        ReactReduxContext: () => rt,
        batch: () => bt,
        connect: () => at,
        createDispatchHook: () => pt,
        createSelectorHook: () => yt,
        createStoreHook: () => dt,
        shallowEqual: () => U,
        useDispatch: () => ft,
        useSelector: () => vt,
        useStore: () => ht,
      });
      r = d;
      t.exports = l(
        i({}, "__esModule", {
          value: true,
        }),
        r,
      );
      var h = ((t, e, n) => {
        n = t != null ? s(c(t)) : {};
        return l(
          !e && t && t.__esModule
            ? n
            : i(n, "default", {
                value: t,
                enumerable: true,
              }),
          t,
        );
      })(n(67294));
      var p = h.version.startsWith("19");
      var f = Symbol.for(p ? "react.transitional.element" : "react.element");
      var m = Symbol.for("react.portal");
      var g = Symbol.for("react.fragment");
      var y = Symbol.for("react.strict_mode");
      var v = Symbol.for("react.profiler");
      var b = Symbol.for("react.consumer");
      var S = Symbol.for("react.context");
      var _ = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x = Symbol.for("react.suspense_list");
      var k = Symbol.for("react.memo");
      var E = Symbol.for("react.lazy");
      var T = _;
      var C = k;
      function M(t) {
        return (
          (function (t) {
            if (typeof t == "object" && t !== null) {
              let { $$typeof: e } = t;
              switch (e) {
                case f:
                  switch ((t = t.type)) {
                    case g:
                    case v:
                    case y:
                    case w:
                    case x:
                      return t;
                    default:
                      switch ((t = t && t.$$typeof)) {
                        case S:
                        case _:
                        case E:
                        case k:
                        case b:
                          return t;
                        default:
                          return e;
                      }
                  }
                case m:
                  return e;
              }
            }
          })(t) === k
        );
      }
      function I(
        t,
        e,
        n,
        r,
        { areStatesEqual: s, areOwnPropsEqual: i, areStatePropsEqual: o },
      ) {
        let a;
        let c;
        let u;
        let l;
        let d;
        let h = false;
        function p(h, p) {
          let f = !i(p, c);
          let m = !s(h, a, p, c);
          a = h;
          c = p;
          if (f && m) {
            u = t(a, c);
            if (e.dependsOnOwnProps) {
              l = e(r, c);
            }
            d = n(u, l, c);
            return d;
          } else if (f) {
            if (t.dependsOnOwnProps) {
              u = t(a, c);
            }
            if (e.dependsOnOwnProps) {
              l = e(r, c);
            }
            d = n(u, l, c);
            return d;
          } else if (m) {
            return (function () {
              let e = t(a, c);
              let r = !o(e, u);
              u = e;
              if (r) {
                d = n(u, l, c);
              }
              return d;
            })();
          } else {
            return d;
          }
        }
        return function (s, i) {
          if (h) {
            return p(s, i);
          } else {
            return (function (s, i) {
              a = s;
              c = i;
              u = t(a, c);
              l = e(r, c);
              d = n(u, l, c);
              h = true;
              return d;
            })(s, i);
          }
        };
      }
      function A(t) {
        return function (e) {
          let n = t(e);
          function r() {
            return n;
          }
          r.dependsOnOwnProps = false;
          return r;
        };
      }
      function R(t) {
        if (t.dependsOnOwnProps) {
          return !!t.dependsOnOwnProps;
        } else {
          return t.length !== 1;
        }
      }
      function P(t, e) {
        return function (e, { displayName: n }) {
          let r = function (t, e) {
            if (r.dependsOnOwnProps) {
              return r.mapToProps(t, e);
            } else {
              return r.mapToProps(t, undefined);
            }
          };
          r.dependsOnOwnProps = true;
          r.mapToProps = function (e, n) {
            r.mapToProps = t;
            r.dependsOnOwnProps = R(t);
            let s = r(e, n);
            if (typeof s == "function") {
              r.mapToProps = s;
              r.dependsOnOwnProps = R(s);
              s = r(e, n);
            }
            return s;
          };
          return r;
        };
      }
      function O(t, e) {
        return (n, r) => {
          throw new Error(
            `Invalid value of type ${typeof t} for ${e} argument when connecting component ${r.wrappedComponentName}.`,
          );
        };
      }
      function D(t, e, n) {
        return {
          ...n,
          ...t,
          ...e,
        };
      }
      function L(t) {
        t();
      }
      var N = {
        notify() {},
        get: () => [],
      };
      function j(t, e) {
        let n;
        let r = N;
        let s = 0;
        let i = false;
        function o() {
          if (u.onStateChange) {
            u.onStateChange();
          }
        }
        function a() {
          s++;
          if (!n) {
            n = e ? e.addNestedSub(o) : t.subscribe(o);
            r = (function () {
              let t = null;
              let e = null;
              return {
                clear() {
                  t = null;
                  e = null;
                },
                notify() {
                  L(() => {
                    let e = t;
                    while (e) {
                      e.callback();
                      e = e.next;
                    }
                  });
                },
                get() {
                  let e = [];
                  let n = t;
                  while (n) {
                    e.push(n);
                    n = n.next;
                  }
                  return e;
                },
                subscribe(n) {
                  let r = true;
                  let s = (e = {
                    callback: n,
                    next: null,
                    prev: e,
                  });
                  if (s.prev) {
                    s.prev.next = s;
                  } else {
                    t = s;
                  }
                  return function () {
                    if (!!r && t !== null) {
                      r = false;
                      if (s.next) {
                        s.next.prev = s.prev;
                      } else {
                        e = s.prev;
                      }
                      if (s.prev) {
                        s.prev.next = s.next;
                      } else {
                        t = s.next;
                      }
                    }
                  };
                },
              };
            })();
          }
        }
        function c() {
          s--;
          if (n && s === 0) {
            n();
            n = undefined;
            r.clear();
            r = N;
          }
        }
        let u = {
          addNestedSub: function (t) {
            a();
            let e = r.subscribe(t);
            let n = false;
            return () => {
              if (!n) {
                n = true;
                e();
                c();
              }
            };
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: o,
          isSubscribed: function () {
            return i;
          },
          trySubscribe: function () {
            if (!i) {
              i = true;
              a();
            }
          },
          tryUnsubscribe: function () {
            if (i) {
              i = false;
              c();
            }
          },
          getListeners: () => r,
        };
        return u;
      }
      var F =
        typeof window !== "undefined" &&
        typeof window.document !== "undefined" &&
        typeof window.document.createElement !== "undefined";
      var $ =
        typeof navigator !== "undefined" && navigator.product === "ReactNative";
      var B = F || $ ? h.useLayoutEffect : h.useEffect;
      function V(t, e) {
        if (t === e) {
          return t !== 0 || e !== 0 || 1 / t == 1 / e;
        } else {
          return t != t && e != e;
        }
      }
      function U(t, e) {
        if (V(t, e)) {
          return true;
        }
        if (
          typeof t != "object" ||
          t === null ||
          typeof e != "object" ||
          e === null
        ) {
          return false;
        }
        let n = Object.keys(t);
        let r = Object.keys(e);
        if (n.length !== r.length) {
          return false;
        }
        for (let r = 0; r < n.length; r++) {
          if (
            !Object.prototype.hasOwnProperty.call(e, n[r]) ||
            !V(t[n[r]], e[n[r]])
          ) {
            return false;
          }
        }
        return true;
      }
      var z = {
        childContextTypes: true,
        contextType: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromError: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true,
      };
      var W = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true,
      };
      var q = {
        $$typeof: true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true,
      };
      var H = {
        [T]: {
          $$typeof: true,
          render: true,
          defaultProps: true,
          displayName: true,
          propTypes: true,
        },
        [C]: q,
      };
      function K(t) {
        if (M(t)) {
          return q;
        } else {
          return H[t.$$typeof] || z;
        }
      }
      var X = Object.defineProperty;
      var Y = Object.getOwnPropertyNames;
      var G = Object.getOwnPropertySymbols;
      var J = Object.getOwnPropertyDescriptor;
      var Z = Object.getPrototypeOf;
      var Q = Object.prototype;
      function tt(t, e) {
        if (typeof e != "string") {
          if (Q) {
            let n = Z(e);
            if (n && n !== Q) {
              tt(t, n);
            }
          }
          let n = Y(e);
          if (G) {
            n = n.concat(G(e));
          }
          let r = K(t);
          let s = K(e);
          for (let i = 0; i < n.length; ++i) {
            let o = n[i];
            if (!W[o] && (!s || !s[o]) && (!r || !r[o])) {
              let n = J(e, o);
              try {
                X(t, o, n);
              } catch {}
            }
          }
        }
        return t;
      }
      var et = Symbol.for("react-redux-context");
      var nt = typeof globalThis !== "undefined" ? globalThis : {};
      var rt = (function () {
        if (!h.createContext) {
          return {};
        }
        let t = (nt[et] ??= new Map());
        let e = t.get(h.createContext);
        if (!e) {
          e = h.createContext(null);
          t.set(h.createContext, e);
        }
        return e;
      })();
      var st = [null, null];
      function it(t, e, n, r, s, i) {
        t.current = r;
        n.current = false;
        if (s.current) {
          s.current = null;
          i();
        }
      }
      function ot(t, e) {
        return t === e;
      }
      function at(
        t,
        e,
        n,
        {
          pure: r,
          areStatesEqual: s = ot,
          areOwnPropsEqual: i = U,
          areStatePropsEqual: o = U,
          areMergedPropsEqual: a = U,
          forwardRef: c = false,
          context: u = rt,
        } = {},
      ) {
        let l = u;
        let d = (function (t) {
          if (t) {
            if (typeof t == "function") {
              return P(t);
            } else {
              return O(t, "mapStateToProps");
            }
          } else {
            return A(() => ({}));
          }
        })(t);
        let p = (function (t) {
          if (t && typeof t == "object") {
            return A((e) =>
              (function (t, e) {
                let n = {};
                for (let r in t) {
                  let s = t[r];
                  if (typeof s == "function") {
                    n[r] = (...t) => e(s(...t));
                  }
                }
                return n;
              })(t, e),
            );
          } else if (t) {
            if (typeof t == "function") {
              return P(t);
            } else {
              return O(t, "mapDispatchToProps");
            }
          } else {
            return A((t) => ({
              dispatch: t,
            }));
          }
        })(e);
        let f = (function (t) {
          if (t) {
            if (typeof t == "function") {
              return (function (t) {
                return function (
                  e,
                  { displayName: n, areMergedPropsEqual: r },
                ) {
                  let s;
                  let i = false;
                  return function (e, n, o) {
                    let a = t(e, n, o);
                    if (i) {
                      if (!r(a, s)) {
                        s = a;
                      }
                    } else {
                      i = true;
                      s = a;
                    }
                    return s;
                  };
                };
              })(t);
            } else {
              return O(t, "mergeProps");
            }
          } else {
            return () => D;
          }
        })(n);
        let m = !!t;
        return (t) => {
          let e = t.displayName || t.name || "Component";
          let n = `Connect(${e})`;
          let r = {
            shouldHandleStateChanges: m,
            displayName: n,
            wrappedComponentName: e,
            WrappedComponent: t,
            initMapStateToProps: d,
            initMapDispatchToProps: p,
            initMergeProps: f,
            areStatesEqual: s,
            areStatePropsEqual: o,
            areOwnPropsEqual: i,
            areMergedPropsEqual: a,
          };
          function u(e) {
            let [n, s, i] = h.useMemo(() => {
              let { reactReduxForwardedRef: t, ...n } = e;
              return [e.context, t, n];
            }, [e]);
            let o = h.useMemo(() => l, [n, l]);
            let a = h.useContext(o);
            let c = !!e.store && !!e.store.getState && !!e.store.dispatch;
            let u = !!a && !!a.store;
            let d = c ? e.store : a.store;
            let p = u ? a.getServerState : d.getState;
            let f = h.useMemo(
              () =>
                (function (
                  t,
                  {
                    initMapStateToProps: e,
                    initMapDispatchToProps: n,
                    initMergeProps: r,
                    ...s
                  },
                ) {
                  return I(e(t, s), n(t, s), r(t, s), t, s);
                })(d.dispatch, r),
              [d],
            );
            let [g, y] = h.useMemo(() => {
              if (!m) {
                return st;
              }
              let t = j(d, c ? undefined : a.subscription);
              let e = t.notifyNestedSubs.bind(t);
              return [t, e];
            }, [d, c, a]);
            let v = h.useMemo(
              () =>
                c
                  ? a
                  : {
                      ...a,
                      subscription: g,
                    },
              [c, a, g],
            );
            let b = h.useRef(undefined);
            let S = h.useRef(i);
            let _ = h.useRef(undefined);
            let w = h.useRef(false);
            let x = h.useRef(false);
            let k = h.useRef(undefined);
            B(() => {
              x.current = true;
              return () => {
                x.current = false;
              };
            }, []);
            let E;
            let T = h.useMemo(
              () => () =>
                _.current && i === S.current ? _.current : f(d.getState(), i),
              [d, i],
            );
            let C = h.useMemo(
              () => (t) =>
                g
                  ? (function (t, e, n, r, s, i, o, a, c, u, l) {
                      if (!t) {
                        return () => {};
                      }
                      let d = false;
                      let h = null;
                      let p = () => {
                        if (d || !a.current) {
                          return;
                        }
                        let t;
                        let n;
                        let p = e.getState();
                        try {
                          t = r(p, s.current);
                        } catch (t) {
                          n = t;
                          h = t;
                        }
                        if (!n) {
                          h = null;
                        }
                        if (t === i.current) {
                          if (!o.current) {
                            u();
                          }
                        } else {
                          i.current = t;
                          c.current = t;
                          o.current = true;
                          l();
                        }
                      };
                      n.onStateChange = p;
                      n.trySubscribe();
                      p();
                      return () => {
                        d = true;
                        n.tryUnsubscribe();
                        n.onStateChange = null;
                        if (h) {
                          throw h;
                        }
                      };
                    })(m, d, g, f, S, b, w, x, _, y, t)
                  : () => {},
              [g],
            );
            (function (t, e, n) {
              B(() => t(...e), n);
            })(it, [S, b, w, i, _, y]);
            try {
              E = h.useSyncExternalStore(C, T, p ? () => f(p(), i) : T);
            } catch (t) {
              if (k.current) {
                t.message += `\nThe error may be correlated with this previous error:\n${k.current.stack}\n\n`;
              }
              throw t;
            }
            B(() => {
              k.current = undefined;
              _.current = undefined;
              b.current = E;
            });
            let M = h.useMemo(
              () =>
                h.createElement(t, {
                  ...E,
                  ref: s,
                }),
              [s, t, E],
            );
            return h.useMemo(
              () =>
                m
                  ? h.createElement(
                      o.Provider,
                      {
                        value: v,
                      },
                      M,
                    )
                  : M,
              [o, M, v],
            );
          }
          let g = h.memo(u);
          g.WrappedComponent = t;
          g.displayName = u.displayName = n;
          if (c) {
            let e = h.forwardRef(function (t, e) {
              return h.createElement(g, {
                ...t,
                reactReduxForwardedRef: e,
              });
            });
            e.displayName = n;
            e.WrappedComponent = t;
            return tt(e, t);
          }
          return tt(g, t);
        };
      }
      function ct(t) {
        let { children: e, context: n, serverState: r, store: s } = t;
        let i = h.useMemo(() => {
          let t = j(s);
          return {
            store: s,
            subscription: t,
            getServerState: r ? () => r : undefined,
          };
        }, [s, r]);
        let o = h.useMemo(() => s.getState(), [s]);
        B(() => {
          let { subscription: t } = i;
          t.onStateChange = t.notifyNestedSubs;
          t.trySubscribe();
          if (o !== s.getState()) {
            t.notifyNestedSubs();
          }
          return () => {
            t.tryUnsubscribe();
            t.onStateChange = undefined;
          };
        }, [i, o]);
        return h.createElement(
          (n || rt).Provider,
          {
            value: i,
          },
          e,
        );
      }
      function ut(t = rt) {
        return function () {
          return h.useContext(t);
        };
      }
      var lt = ut();
      function dt(t = rt) {
        let e = t === rt ? lt : ut(t);
        let n = () => {
          let { store: t } = e();
          return t;
        };
        Object.assign(n, {
          withTypes: () => n,
        });
        return n;
      }
      var ht = dt();
      function pt(t = rt) {
        let e = t === rt ? ht : dt(t);
        let n = () => e().dispatch;
        Object.assign(n, {
          withTypes: () => n,
        });
        return n;
      }
      var ft = pt();
      var mt = n(31103);
      var gt = (t, e) => t === e;
      function yt(t = rt) {
        let e = t === rt ? lt : ut(t);
        let n = (t, n = {}) => {
          let { equalityFn: r = gt } =
            typeof n == "function"
              ? {
                  equalityFn: n,
                }
              : n;
          let s = e();
          let { store: i, subscription: o, getServerState: a } = s;
          h.useRef(true);
          let c = h.useCallback(
            {
              [t.name]: (e) => t(e),
            }[t.name],
            [t],
          );
          let u = (0, mt.useSyncExternalStoreWithSelector)(
            o.addNestedSub,
            i.getState,
            a || i.getState,
            c,
            r,
          );
          h.useDebugValue(u);
          return u;
        };
        Object.assign(n, {
          withTypes: () => n,
        });
        return n;
      }
      var vt = yt();
      var bt = L;
    },
    53744: function (t, e, n) {
      n.d(e, {
        VK: () => C,
        ZP: () => M,
      });
      var r = n(67294);
      var s = n(70443);
      var i = n(16019);
      var o = n(64222);
      var a = n(20727);
      var c = n(8679);
      function u(t, e) {
        if (!t) {
          var n = new Error("loadable: " + e);
          n.framesToPop = 1;
          n.name = "Invariant Violation";
          throw n;
        }
      }
      var l = r.createContext();
      var d = {
        initialChunks: {},
      };
      var h = "PENDING";
      var p = "REJECTED";
      function f(t) {
        return t;
      }
      function m(t) {
        var e = t.defaultResolveComponent;
        var n = e === undefined ? f : e;
        var m = t.render;
        var g = t.onLoad;
        function y(t, e = {}) {
          var f = (function (t) {
            if (typeof t == "function") {
              return {
                requireAsync: t,
                resolve: function () {},
                chunkName: function () {},
              };
            } else {
              return t;
            }
          })(t);
          var y = {};
          function v(t) {
            if (e.cacheKey) {
              return e.cacheKey(t);
            } else if (f.resolve) {
              return f.resolve(t);
            } else {
              return "static";
            }
          }
          function b(t, r, s) {
            var i = e.resolveComponent ? e.resolveComponent(t, r) : n(t);
            c(s, i, {
              preload: true,
            });
            return i;
          }
          var S;
          var _;
          function w(t) {
            var e = v(t);
            var n = y[e];
            if (!n || n.status === p) {
              (n = f.requireAsync(t)).status = h;
              y[e] = n;
              n.then(
                function () {
                  n.status = "RESOLVED";
                },
                function (e) {
                  console.error(
                    "loadable-components: failed to asynchronously load component",
                    {
                      fileName: f.resolve(t),
                      chunkName: f.chunkName(t),
                      error: e ? e.message : e,
                    },
                  );
                  n.status = p;
                },
              );
            }
            return n;
          }
          var x = (function (t) {
            function n(n) {
              var r;
              (r = t.call(this, n) || this).state = {
                result: null,
                error: null,
                loading: true,
                cacheKey: v(n),
              };
              u(
                !n.__chunkExtractor || f.requireSync,
                "SSR requires `@loadable/babel-plugin`, please install it",
              );
              if (n.__chunkExtractor) {
                if (e.ssr !== false) {
                  f.requireAsync(n).catch(function () {
                    return null;
                  });
                  r.loadSync();
                  n.__chunkExtractor.addChunk(f.chunkName(n));
                }
                return (0, o.Z)(r);
              } else {
                if (
                  e.ssr !== false &&
                  ((f.isReady && f.isReady(n)) ||
                    (f.chunkName && d.initialChunks[f.chunkName(n)]))
                ) {
                  r.loadSync();
                }
                return r;
              }
            }
            (0, a.Z)(n, t);
            n.getDerivedStateFromProps = function (t, e) {
              var n = v(t);
              return (0, i.Z)({}, e, {
                cacheKey: n,
                loading: e.loading || e.cacheKey !== n,
              });
            };
            var r = n.prototype;
            r.componentDidMount = function () {
              this.mounted = true;
              var t = this.getCache();
              if (t && t.status === p) {
                this.setCache();
              }
              if (this.state.loading) {
                this.loadAsync();
              }
            };
            r.componentDidUpdate = function (t, e) {
              if (e.cacheKey !== this.state.cacheKey) {
                this.loadAsync();
              }
            };
            r.componentWillUnmount = function () {
              this.mounted = false;
            };
            r.safeSetState = function (t, e) {
              if (this.mounted) {
                this.setState(t, e);
              }
            };
            r.getCacheKey = function () {
              return v(this.props);
            };
            r.getCache = function () {
              return y[this.getCacheKey()];
            };
            r.setCache = function (t = undefined) {
              y[this.getCacheKey()] = t;
            };
            r.triggerOnLoad = function () {
              var t = this;
              if (g) {
                setTimeout(function () {
                  g(t.state.result, t.props);
                });
              }
            };
            r.loadSync = function () {
              if (this.state.loading) {
                try {
                  var t = b(f.requireSync(this.props), this.props, E);
                  this.state.result = t;
                  this.state.loading = false;
                } catch (t) {
                  console.error(
                    "loadable-components: failed to synchronously load component, which expected to be available",
                    {
                      fileName: f.resolve(this.props),
                      chunkName: f.chunkName(this.props),
                      error: t ? t.message : t,
                    },
                  );
                  this.state.error = t;
                }
              }
            };
            r.loadAsync = function () {
              var t = this;
              var e = this.resolveAsync();
              e.then(function (e) {
                var n = b(e, t.props, E);
                t.safeSetState(
                  {
                    result: n,
                    loading: false,
                  },
                  function () {
                    return t.triggerOnLoad();
                  },
                );
              }).catch(function (e) {
                return t.safeSetState({
                  error: e,
                  loading: false,
                });
              });
              return e;
            };
            r.resolveAsync = function () {
              var t = this.props;
              t.__chunkExtractor;
              t.forwardedRef;
              var e = (0, s.Z)(t, ["__chunkExtractor", "forwardedRef"]);
              return w(e);
            };
            r.render = function () {
              var t = this.props;
              var n = t.forwardedRef;
              var r = t.fallback;
              t.__chunkExtractor;
              var o = (0, s.Z)(t, [
                "forwardedRef",
                "fallback",
                "__chunkExtractor",
              ]);
              var a = this.state;
              var c = a.error;
              var u = a.loading;
              var l = a.result;
              if (
                e.suspense &&
                (this.getCache() || this.loadAsync()).status === h
              ) {
                throw this.loadAsync();
              }
              if (c) {
                throw c;
              }
              var d = r || e.fallback || null;
              if (u) {
                return d;
              } else {
                return m({
                  fallback: d,
                  result: l,
                  options: e,
                  props: (0, i.Z)({}, o, {
                    ref: n,
                  }),
                });
              }
            };
            return n;
          })(r.Component);
          _ = function (t) {
            return r.createElement(l.Consumer, null, function (e) {
              return r.createElement(
                S,
                Object.assign(
                  {
                    __chunkExtractor: e,
                  },
                  t,
                ),
              );
            });
          };
          if ((S = x).displayName) {
            _.displayName = S.displayName + "WithChunkExtractor";
          }
          var k = _;
          var E = r.forwardRef(function (t, e) {
            return r.createElement(
              k,
              Object.assign(
                {
                  forwardedRef: e,
                },
                t,
              ),
            );
          });
          E.displayName = "Loadable";
          E.preload = function (t) {
            E.load(t);
          };
          E.load = function (t) {
            return w(t);
          };
          return E;
        }
        return {
          loadable: y,
          lazy: function (t, e) {
            return y(
              t,
              (0, i.Z)({}, e, {
                suspense: true,
              }),
            );
          },
        };
      }
      var g = m({
        defaultResolveComponent: function (t) {
          if (t.__esModule) {
            return t.default;
          } else {
            return t.default || t;
          }
        },
        render: function (t) {
          var e = t.result;
          var n = t.props;
          return r.createElement(e, n);
        },
      });
      var y = g.loadable;
      var v = g.lazy;
      var b = m({
        onLoad: function (t, e) {
          if (t && e.forwardedRef) {
            if (typeof e.forwardedRef == "function") {
              e.forwardedRef(t);
            } else {
              e.forwardedRef.current = t;
            }
          }
        },
        render: function (t) {
          var e = t.result;
          var n = t.props;
          if (n.children) {
            return n.children(e);
          } else {
            return null;
          }
        },
      });
      var S = b.loadable;
      var _ = b.lazy;
      var w = y;
      w.lib = S;
      v.lib = _;
      const x = w;
      const k = [];
      const E = [];
      const T = async (t) => {
        const e = t.map((t) => t());
        t.length = 0;
        await Promise.all(e);
        if (t.length) {
          return T(t);
        } else {
          return undefined;
        }
      };
      const C = async () => {
        await T(k);
      };
      const M = (t, e) => {
        const r = x(t, e);
        E.push(async () => {
          await r.load();
        });
        if (typeof t == "object" && "chunkName" in t && "resolve" in t) {
          const e = t.resolve();
          k.push(async () => {
            const t = n.m;
            const s = t?.[e];
            if (s) {
              await r.load();
            }
          });
        }
        const s = r;
        s.preload = (t) => r.load(t);
        return s;
      };
    },
    5573: function (t, e, n) {
      n.d(e, {
        UM: () => iu,
      });
      var r = n(9996);
      var s = n(64530);
      var i = n(13468);
      var o = n(59006);
      var a = n(23272);
      const c = {
        and_chr: 138,
        android: 138,
        chrome: 79,
        edge: 129,
        firefox: 128,
        ios_saf: 16,
        opera: 108,
        safari: 16,
      };
      let u;
      const l = (t) => {
        if (u) {
          t.extra ||= {};
          t.tags ||= {};
          t.extra.failedAxiosUrl = u;
          t.tags.failedAxiosUrl = u;
          u = undefined;
        }
        return t;
      };
      const d = 102400;
      const h = (t) => {
        const e = s(t.extra).length;
        if (e > d) {
          t.extra = {
            __removed: `Extra data is too large and has been stripped (${e}/102400)`,
          };
        }
      };
      const p = {
        ignorePaths: {
          regexps: [],
        },
        ignoreErrors: {
          strings: [],
          regexps: [
            "Loading chunk",
            "Loading CSS chunk",
            "Network Error",
            "NetworkError",
          ],
          stacktraces: [],
        },
      };
      const f = "not_detected";
      const m = "_alreadyHandledByHHSentryJs";
      const g = () => {
        const t = (0, i.T)(window.navigator.userAgent, c);
        return !!t.isSupported && !!t.browser;
      };
      const y = () => {
        const t = /test_host=(\w+)/.exec(window.navigator.userAgent);
        return {
          isAutotests: !!t,
          standName: t?.[1] || null,
        };
      };
      const v = (t, e) => {
        if (!e) {
          return [];
        }
        const n = e[t];
        if (!n) {
          return [];
        }
        const { strings: r = [], regexps: s = [] } = n;
        if (!r.length && !s.length) {
          return [];
        }
        const i = s
          .map((t) => {
            try {
              if (typeof t == "string") {
                return new RegExp(t, "i");
              } else {
                return new RegExp(t.pattern, t.flags);
              }
            } catch (t) {
              console.error(t);
              return null;
            }
          })
          .filter((t) => !!t);
        return [...r, ...i];
      };
      const b = (
        {
          sentryJsConfig: t,
          sentryDSN: e,
          buildVersion: n,
          staticHost: i,
          beforeSendCallback: c,
          getUser: u,
          getExtraData: d,
          isDebug: g,
        },
        y = {},
      ) => {
        const b = ((t) => {
          if (!t) {
            return null;
          }
          try {
            return JSON.parse(t);
          } catch (t) {
            console.error("Sentry config could not be parsed", t);
            return null;
          }
        })(t);
        const S = r(p, b ?? {});
        const _ = v("ignoreErrors", S);
        const w = v("ignorePaths", S);
        const x = S?.ignoreErrors?.stacktraces;
        const k = S?.replaysOnErrorSampleRate ?? "0";
        const E = S?.tracesSampleRate ?? "0";
        const T = S?.ignoreErrors?.serialize;
        return {
          externalConfig: S,
          clientConfig: {
            dsn: e,
            release: n,
            ignoreErrors: _,
            denyUrls: w,
            includePaths: [i, window.location.host, "webpack-internal"],
            maxBreadcrumbs: 15,
            normalizeDepth: 8,
            replaysSessionSampleRate: 0,
            replaysOnErrorSampleRate: parseFloat(k),
            tracesSampleRate: parseFloat(E),
            beforeSend: async (t, e) => {
              if (g) {
                console.error(`Calling beforeSend for ${n}`);
                console.error("Hint in beforeSend", e);
                console.error("Event in beforeSend:start", t);
              }
              if (y.isRootClient) {
                await new Promise((t) => setTimeout(t, 100));
              }
              if (e.originalException?.[m]) {
                if (g) {
                  console.error(
                    "Exception already handled, skipping: ",
                    e.originalException,
                  );
                }
                return null;
              }
              if (document.body === null) {
                return null;
              }
              let r = t?.request?.url;
              let i = 0;
              let p = t.message;
              if (t.exception) {
                const e = t.exception.values?.[0];
                p = e?.value || "Unknown error message";
                if (e?.stacktrace) {
                  if (
                    Array.isArray(x) &&
                    x.some((t) => {
                      const n =
                        /^(?<func>[^(]+)?(?:\(<(?<module>[^>]+)>\))?$/.exec(t);
                      if (n?.groups) {
                        const { func: t, module: r } = n.groups;
                        if (t || r) {
                          return e.stacktrace?.frames?.some(
                            (e) =>
                              (!t || e.function?.includes(t)) &&
                              (!r || e.filename?.includes(r)),
                          );
                        }
                      }
                      return false;
                    })
                  ) {
                    return null;
                  }
                  const t =
                    e.stacktrace.frames?.[e.stacktrace.frames.length - 1];
                  r = t?.filename;
                  i = t?.lineno || 0;
                  ((t = []) => {
                    const e = [
                      "vendors.",
                      "magritte/",
                      "bloko/",
                      ".yarn/",
                      "webpack",
                    ];
                    t.forEach(
                      (t) =>
                        (t.in_app = !e.some((e) => t.filename?.includes(e))),
                    );
                  })(e.stacktrace.frames);
                }
              }
              const v = t.extra?.__serialized__;
              if (
                typeof v == "object" &&
                v !== null &&
                T &&
                T.some((t) => {
                  for (const [e, n] of Object.entries(t)) {
                    const t = new RegExp(n, "i");
                    return Object.hasOwn(v, e) && t.test(v[e]);
                  }
                  return false;
                })
              ) {
                return null;
              }
              t = l(t);
              const b = c?.(t);
              if (b === false) {
                return null;
              }
              if (
                !g &&
                ((t) => {
                  const e = "__jsErrorsCache";
                  let n;
                  try {
                    n = JSON.parse(o.Y.getItem(e));
                  } catch (t) {
                    n = [];
                  }
                  if (!("isArray" in Array) || !Array.isArray(n)) {
                    n = [];
                  }
                  const r = Date.now();
                  const s = n.filter((t) => t.date + 86400000 >= r);
                  const i = s.some((e) => e.message === t);
                  if (!i) {
                    s.push({
                      date: r,
                      message: t,
                    });
                    try {
                      o.Y.setItem(e, JSON.stringify(s));
                    } catch (t) {}
                  }
                  return i;
                })(`${String(p)}|${String(r)}|${i}`)
              ) {
                return null;
              }
              const S = u();
              t.user = S;
              t.extra ||= {};
              const _ = d();
              t.extra = {
                ...t.extra,
                ..._,
                userType: S.userType,
                screenBreakpointBloko: a.L.get("device_breakpoint"),
                screenBreakpointMagritte: a.L.get("device_magritte_breakpoint"),
                documentStates: {
                  readyState: document.readyState,
                  visibilityState: document.visibilityState,
                  onLineState: window.navigator?.onLine,
                },
              };
              const w = t.extra.lastAction;
              if (w?.payload) {
                if (s(w.payload).length > 5120) {
                  w.payload = "[removed]";
                }
              }
              h(t);
              if (!t.fingerprint && t.exception?.values?.[0]?.value) {
                t.fingerprint = [t.exception.values[0].value];
              }
              const k = ((t) => {
                const e = t.exception?.values?.[0]?.stacktrace?.frames || [];
                if (!e.length) {
                  return false;
                }
                const n = e[e.length - 1];
                return (
                  n?.in_app !== false && !!n.function && String(n.function)
                );
              })(t);
              if (t.fingerprint && k) {
                t.fingerprint.push(k);
              }
              ((t, e, n, r) => {
                t.tags ||= {};
                t.tags.fromStatic = t.request?.url !== window.location.href;
                t.tags.breakpoint =
                  a.L.get("device_breakpoint") ||
                  a.L.get("device_magritte_breakpoint");
                t.tags.pageName =
                  typeof e.pageName == "string" ? e.pageName : f;
                t.tags.userType = n.userType;
                t.tags.pageType =
                  typeof e.pageType == "string" ? e.pageType : f;
                const s = [
                  "device",
                  "device.family",
                  "browser",
                  "browser.name",
                  "breakpoint",
                  "os",
                  "os.name",
                  "pageName",
                  "pageType",
                ];
                if (r.isRootClient) {
                  s.push("failedAxiosUrl");
                  s.push("third_party_code");
                }
                s.forEach((e) => {
                  if (t.tags && !(e in t.tags)) {
                    t.tags[e] = f;
                  }
                });
              })(t, _, S, y);
              if (g) {
                console.error("Event in beforeSend:end", t);
              }
              return t;
            },
            beforeBreadcrumb(t) {
              if (t.category === "xhr") {
                const e = t.data?.url;
                if (!e?.startsWith("/")) {
                  return null;
                }
              }
              return t;
            },
          },
        };
      };
      var S = n(87139);
      var _ = n(94114);
      var w = n(29784);
      const x = 100;
      function k(t, e) {
        const n = (0, S.s3)();
        const r = (0, S.aF)();
        if (!n) {
          return;
        }
        const { beforeBreadcrumb: s = null, maxBreadcrumbs: i = x } =
          n.getOptions();
        if (i <= 0) {
          return;
        }
        const o = {
          timestamp: (0, _.yW)(),
          ...t,
        };
        const a = s ? (0, w.Cf)(() => s(o, e)) : o;
        if (a !== null) {
          if (n.emit) {
            n.emit("beforeAddBreadcrumb", a, e);
          }
          r.addBreadcrumb(a, i);
        }
      }
      var E = n(10568);
      const T = {
        attachReduxState: true,
        actionTransformer: (t) => t,
        stateTransformer: (t) => t || null,
      };
      const C = (t) => typeof t == "string";
      const M = (t) =>
        t != null &&
        (Object.getPrototypeOf(t) === Object.prototype ||
          Object.getPrototypeOf(t) === null);
      const I = (t) =>
        typeof t == "object" && t !== null && (M(t) || Array.isArray(t));
      const A = (t) => typeof t == "function";
      const R = (t, e) => {
        let n = typeof e;
        let r = "unknown";
        if (e == null || typeof e == "boolean") {
          return e;
        } else {
          if (typeof e == "string") {
            n = "string";
            r = e.length;
          } else if (typeof e == "number") {
            n = "number";
            r = String(e).length;
          } else if (Array.isArray(e)) {
            n = "array";
            r = e.length;
          } else if (M(e)) {
            n = "object";
            r = Object.keys(e).length;
          }
          return `${n}<${r}>`;
        }
      };
      const P = (t, e, n) => {
        if (!I(t)) {
          return t;
        }
        const r = Array.isArray(t)
          ? [...t]
          : {
              ...t,
            };
        const s = n.split(".");
        let i = r;
        const o = (t, n) => (A(e) ? e(t, n) : e);
        for (let t = 0; t < s.length; t++) {
          const n = s[t];
          const r = t === s.length - 1;
          const a = n === "*";
          const c = i[n];
          if (a && r) {
            if (Array.isArray(i)) {
              for (let t = 0; t < i.length; t++) {
                i[t] = o(t, i[t]);
              }
            } else {
              for (const t of Object.keys(i)) {
                i[t] = o(t, i[t]);
              }
            }
            break;
          }
          if (a) {
            const n = s.slice(t + 1);
            if (Array.isArray(i)) {
              for (let t = 0; t < i.length; t++) {
                i[t] = I(i[t]) ? P(i[t], e, n.join(".")) : o(t, i[t]);
              }
            } else {
              const t = Object.keys(i);
              for (const r of t) {
                i[r] = I(i[r]) ? P(i[r], e, n.join(".")) : o(r, i[r]);
              }
            }
            break;
          }
          if (r) {
            if (n in i) {
              i[n] = A(e) ? e(n, c) : e;
            }
            break;
          }
          if (!I(c)) {
            break;
          }
          const u = Array.isArray(c)
            ? [...c]
            : {
                ...c,
              };
          i[n] = u;
          i = u;
        }
        return r;
      };
      const O = (t, e, n) => {
        return ((r = n), [...new Set(r)]).reduce((t, n) => P(t, e, n), t);
        var r;
      };
      const D =
        ({ actionTransformer: t, redactedFields: e }) =>
        (n) => {
          const r = n.type ?? "";
          if (r.includes("ANALYTIC")) {
            return null;
          }
          const s = t ? t(n) : n;
          if (!s) {
            return null;
          }
          const i = (e?.action ?? [])
            .filter((t) => typeof t == "string" || t.type === r)
            .map((t) => (typeof t == "string" ? t : t.pattern));
          const o =
            r === "SET_FIELD_DATA_AS_IS"
              ? (e?.store ?? []).map((t) => `payload.${t}`)
              : [];
          return O(s, R, [...i, ...o]);
        };
      const L = (t) =>
        typeof t == "object" &&
        t !== null &&
        "type" in t &&
        "pattern" in t &&
        C(t.type) &&
        C(t.pattern);
      const N = "FIELD_IS_EMPTY";
      const j = [
        "trl",
        "areaTree",
        "profareaTree",
        "industriesTree",
        "professionalRoleTree",
        "contactPhones",
        "xsrfToken",
        "languages",
        "vacancyFull.description",
      ];
      const F =
        ({ stateTransformer: t, redactedFields: e, maxDataLength: n }) =>
        (r) => {
          const i = r?.trl;
          let o = t ? t(r) : r;
          if (!o) {
            return null;
          }
          o = O(o, R, [...j, ...(e?.store ?? [])]);
          const a = s(o).length;
          const c = n ?? 204800;
          if (a > c) {
            return {
              trlsLength: i ? s(i).length : 0,
              basicState: {
                request: o?.request ?? N,
                locale: o?.locale ?? N,
                langs: o?.langs ?? N,
              },
              __removed: `State is out of limit and has been stripped (${a}/${c})`,
            };
          } else {
            return o;
          }
        };
      const $ = (t, e, n) => {
        (t = {
          ...t,
        }).redactedFields = t.redactedFields
          ? {
              ...t.redactedFields,
            }
          : {
              store: [],
              action: [],
            };
        t.redactedFields.store = (t.redactedFields.store ?? [])
          .concat(n?.redactedFields?.store ?? [])
          .concat(e?.redactedFields?.store ?? [])
          .filter(C);
        t.redactedFields.action = (t.redactedFields.action ?? [])
          .concat(n?.redactedFields?.action ?? [])
          .concat(e?.redactedFields?.action ?? [])
          .filter((t) => C(t) || L(t));
        return t;
      };
      const B = ({
        maxDataLength: t,
        actionTransformer: e,
        stateTransformer: n,
        configureScopeWithState: r,
        attachReduxState: s = false,
        redactedFields: i,
      }) =>
        (function (t) {
          const e = {
            ...T,
            ...t,
          };
          return (t) => (n, r) => {
            if (e.attachReduxState) {
              (0, S.lW)().addEventProcessor((t, e) => {
                try {
                  if (
                    t.type === undefined &&
                    t.contexts.state.state.type === "redux"
                  ) {
                    e.attachments = [
                      ...(e.attachments || []),
                      {
                        filename: "redux_state.json",
                        data: JSON.stringify(t.contexts.state.state.value),
                      },
                    ];
                  }
                } catch (t) {}
                return t;
              });
            }
            return t((t, r) => {
              const s = n(t, r);
              const i = (0, S.nZ)();
              const o = e.actionTransformer(r);
              if (o != null) {
                k({
                  category: "redux.action",
                  data: o,
                  type: "info",
                });
              }
              const a = e.stateTransformer(s);
              if (a != null) {
                const t = (0, S.s3)();
                const e = t && t.getOptions();
                const n = (e && e.normalizeDepth) || 3;
                const r = {
                  state: {
                    type: "redux",
                    value: a,
                  },
                };
                (0, E.xp)(r, "__sentry_override_normalization_depth__", 3 + n);
                i.setContext("state", r);
              } else {
                i.setContext("state", null);
              }
              const { configureScopeWithState: c } = e;
              if (typeof c == "function") {
                c(i, s);
              }
              return s;
            }, r);
          };
        })({
          attachReduxState: s,
          actionTransformer: D({
            redactedFields: i,
            actionTransformer: e,
          }),
          stateTransformer: F({
            redactedFields: i,
            maxDataLength: t,
            stateTransformer: n,
          }),
          configureScopeWithState: r,
        });
      var V = n(68169);
      const U =
        /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function z(t, e = false) {
        const {
          host: n,
          path: r,
          pass: s,
          port: i,
          projectId: o,
          protocol: a,
          publicKey: c,
        } = t;
        return `${a}://${c}${e && s ? `:${s}` : ""}@${n}${i ? `:${i}` : ""}/${r ? `${r}/` : r}${o}`;
      }
      function W(t) {
        return {
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId,
        };
      }
      function q(t) {
        const e =
          typeof t == "string"
            ? (function (t) {
                const e = U.exec(t);
                if (!e) {
                  (0, w.Cf)(() => {
                    console.error(`Invalid Sentry Dsn: ${t}`);
                  });
                  return;
                }
                const [n, r, s = "", i = "", o = "", a = ""] = e.slice(1);
                let c = "";
                let u = a;
                const l = u.split("/");
                if (l.length > 1) {
                  c = l.slice(0, -1).join("/");
                  u = l.pop();
                }
                if (u) {
                  const t = u.match(/^\d+/);
                  if (t) {
                    u = t[0];
                  }
                }
                return W({
                  host: i,
                  pass: s,
                  path: c,
                  projectId: u,
                  port: o,
                  protocol: n,
                  publicKey: r,
                });
              })(t)
            : W(t);
        if (
          e &&
          (function (t) {
            if (!V.X) {
              return true;
            }
            const { port: e, projectId: n, protocol: r } = t;
            return (
              !["protocol", "publicKey", "host", "projectId"].find(
                (e) =>
                  !t[e] &&
                  (w.kg.error(`Invalid Sentry Dsn: ${e} missing`), true),
              ) &&
              !(n.match(/^\d+$/)
                ? (function (t) {
                    return t === "http" || t === "https";
                  })(r)
                  ? e &&
                    isNaN(parseInt(e, 10)) &&
                    (w.kg.error(`Invalid Sentry Dsn: Invalid port ${e}`), 1)
                  : (w.kg.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), 1)
                : (w.kg.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1))
            );
          })(e)
        ) {
          return e;
        }
      }
      var H;
      var K = n(92738);
      var X = n(59057);
      function Y(t) {
        return new J((e) => {
          e(t);
        });
      }
      function G(t) {
        return new J((e, n) => {
          n(t);
        });
      }
      (function (t) {
        t[(t.PENDING = 0)] = "PENDING";
        t[(t.RESOLVED = 1)] = "RESOLVED";
        t[(t.REJECTED = 2)] = "REJECTED";
      })((H ||= {}));
      class J {
        constructor(t) {
          J.prototype.__init.call(this);
          J.prototype.__init2.call(this);
          J.prototype.__init3.call(this);
          J.prototype.__init4.call(this);
          this._state = H.PENDING;
          this._handlers = [];
          try {
            t(this._resolve, this._reject);
          } catch (t) {
            this._reject(t);
          }
        }
        then(t, e) {
          return new J((n, r) => {
            this._handlers.push([
              false,
              (e) => {
                if (t) {
                  try {
                    n(t(e));
                  } catch (t) {
                    r(t);
                  }
                } else {
                  n(e);
                }
              },
              (t) => {
                if (e) {
                  try {
                    n(e(t));
                  } catch (t) {
                    r(t);
                  }
                } else {
                  r(t);
                }
              },
            ]);
            this._executeHandlers();
          });
        }
        catch(t) {
          return this.then((t) => t, t);
        }
        finally(t) {
          return new J((e, n) => {
            let r;
            let s;
            return this.then(
              (e) => {
                s = false;
                r = e;
                if (t) {
                  t();
                }
              },
              (e) => {
                s = true;
                r = e;
                if (t) {
                  t();
                }
              },
            ).then(() => {
              if (s) {
                n(r);
              } else {
                e(r);
              }
            });
          });
        }
        __init() {
          this._resolve = (t) => {
            this._setResult(H.RESOLVED, t);
          };
        }
        __init2() {
          this._reject = (t) => {
            this._setResult(H.REJECTED, t);
          };
        }
        __init3() {
          this._setResult = (t, e) => {
            if (this._state === H.PENDING) {
              if ((0, X.J8)(e)) {
                e.then(this._resolve, this._reject);
              } else {
                this._state = t;
                this._value = e;
                this._executeHandlers();
              }
            }
          };
        }
        __init4() {
          this._executeHandlers = () => {
            if (this._state === H.PENDING) {
              return;
            }
            const t = this._handlers.slice();
            this._handlers = [];
            t.forEach((t) => {
              if (!t[0]) {
                if (this._state === H.RESOLVED) {
                  t[1](this._value);
                }
                if (this._state === H.REJECTED) {
                  t[2](this._value);
                }
                t[0] = true;
              }
            });
          };
        }
      }
      const Z = "?";
      const Q = /\(error: (.*)\)/;
      const tt = /captureMessage|captureException/;
      function et(...t) {
        const e = t.sort((t, e) => t[0] - e[0]).map((t) => t[1]);
        return (t, n = 0, r = 0) => {
          const s = [];
          const i = t.split("\n");
          for (let t = n; t < i.length; t++) {
            const n = i[t];
            if (n.length > 1024) {
              continue;
            }
            const o = Q.test(n) ? n.replace(Q, "$1") : n;
            if (!o.match(/\S*Error: /)) {
              for (const t of e) {
                const e = t(o);
                if (e) {
                  s.push(e);
                  break;
                }
              }
              if (s.length >= 50 + r) {
                break;
              }
            }
          }
          return (function (t) {
            if (!t.length) {
              return [];
            }
            const e = Array.from(t);
            if (/sentryWrapped/.test(nt(e).function || "")) {
              e.pop();
            }
            e.reverse();
            if (tt.test(nt(e).function || "")) {
              e.pop();
              if (tt.test(nt(e).function || "")) {
                e.pop();
              }
            }
            return e.slice(0, 50).map((t) => ({
              ...t,
              filename: t.filename || nt(e).filename,
              function: t.function || Z,
            }));
          })(s.slice(r));
        };
      }
      function nt(t) {
        return t[t.length - 1] || {};
      }
      const rt = "<anonymous>";
      function st(t) {
        try {
          return (t && typeof t == "function" && t.name) || rt;
        } catch (t) {
          return rt;
        }
      }
      function it(t) {
        const e = t.exception;
        if (e) {
          const t = [];
          try {
            e.values.forEach((e) => {
              if (e.stacktrace.frames) {
                t.push(...e.stacktrace.frames);
              }
            });
            return t;
          } catch (t) {
            return;
          }
        }
      }
      function ot(t, e = 100, n = Infinity) {
        try {
          return ct("", t, e, n);
        } catch (t) {
          return {
            ERROR: `**non-serializable** (${t})`,
          };
        }
      }
      function at(t, e = 3, n = 102400) {
        const r = ot(t, e);
        s = r;
        if (
          (function (t) {
            return ~-encodeURI(t).split(/%..|./).length;
          })(JSON.stringify(s)) > n
        ) {
          return at(t, e - 1, n);
        } else {
          return r;
        }
        var s;
      }
      function ct(
        t,
        e,
        n = Infinity,
        r = Infinity,
        s = (function () {
          const t = typeof WeakSet == "function";
          const e = t ? new WeakSet() : [];
          return [
            function (n) {
              if (t) {
                return !!e.has(n) || (e.add(n), false);
              }
              for (let t = 0; t < e.length; t++) {
                if (e[t] === n) {
                  return true;
                }
              }
              e.push(n);
              return false;
            },
            function (n) {
              if (t) {
                e.delete(n);
              } else {
                for (let t = 0; t < e.length; t++) {
                  if (e[t] === n) {
                    e.splice(t, 1);
                    break;
                  }
                }
              }
            },
          ];
        })(),
      ) {
        const [i, o] = s;
        if (
          e == null ||
          (["number", "boolean", "string"].includes(typeof e) &&
            !Number.isNaN(e))
        ) {
          return e;
        }
        const a = (function (t, e) {
          try {
            if (t === "domain" && e && typeof e == "object" && e._events) {
              return "[Domain]";
            }
            if (t === "domainEmitter") {
              return "[DomainEmitter]";
            }
            if (typeof global != "undefined" && e === global) {
              return "[Global]";
            }
            if (typeof window != "undefined" && e === window) {
              return "[Window]";
            }
            if (typeof document != "undefined" && e === document) {
              return "[Document]";
            }
            if ((0, X.y1)(e)) {
              return "[VueViewModel]";
            }
            if ((0, X.Cy)(e)) {
              return "[SyntheticEvent]";
            }
            if (typeof e == "number" && e != e) {
              return "[NaN]";
            }
            if (typeof e == "function") {
              return `[Function: ${st(e)}]`;
            }
            if (typeof e == "symbol") {
              return `[${String(e)}]`;
            }
            if (typeof e == "bigint") {
              return `[BigInt: ${String(e)}]`;
            }
            const n = (function (t) {
              const e = Object.getPrototypeOf(t);
              if (e) {
                return e.constructor.name;
              } else {
                return "null prototype";
              }
            })(e);
            if (/^HTML(\w*)Element$/.test(n)) {
              return `[HTMLElement: ${n}]`;
            } else {
              return `[object ${n}]`;
            }
          } catch (t) {
            return `**non-serializable** (${t})`;
          }
        })(t, e);
        if (!a.startsWith("[object ")) {
          return a;
        }
        if (e.__sentry_skip_normalization__) {
          return e;
        }
        const c =
          typeof e.__sentry_override_normalization_depth__ == "number"
            ? e.__sentry_override_normalization_depth__
            : n;
        if (c === 0) {
          return a.replace("object ", "");
        }
        if (i(e)) {
          return "[Circular ~]";
        }
        const u = e;
        if (u && typeof u.toJSON == "function") {
          try {
            return ct("", u.toJSON(), c - 1, r, s);
          } catch (t) {}
        }
        const l = Array.isArray(e) ? [] : {};
        let d = 0;
        const h = (0, E.Sh)(e);
        for (const t in h) {
          if (!Object.prototype.hasOwnProperty.call(h, t)) {
            continue;
          }
          if (d >= r) {
            l[t] = "[MaxProperties ~]";
            break;
          }
          const e = h[t];
          l[t] = ct(t, e, c - 1, r, s);
          d++;
        }
        o(e);
        return l;
      }
      var ut = n(59662);
      function lt(t, e = []) {
        return [t, e];
      }
      function dt(t, e) {
        const [n, r] = t;
        return [n, [...r, e]];
      }
      function ht(t, e) {
        const n = t[1];
        for (const t of n) {
          if (e(t, t[0].type)) {
            return true;
          }
        }
        return false;
      }
      function pt(t) {
        if (ut.n.__SENTRY__ && ut.n.__SENTRY__.encodePolyfill) {
          return ut.n.__SENTRY__.encodePolyfill(t);
        } else {
          return new TextEncoder().encode(t);
        }
      }
      function ft(t) {
        const [e, n] = t;
        let r = JSON.stringify(e);
        function s(t) {
          if (typeof r == "string") {
            r = typeof t == "string" ? r + t : [pt(r), t];
          } else {
            r.push(typeof t == "string" ? pt(t) : t);
          }
        }
        for (const t of n) {
          const [e, n] = t;
          s(`\n${JSON.stringify(e)}\n`);
          if (typeof n == "string" || n instanceof Uint8Array) {
            s(n);
          } else {
            let t;
            try {
              t = JSON.stringify(n);
            } catch (e) {
              t = JSON.stringify(ot(n));
            }
            s(t);
          }
        }
        if (typeof r == "string") {
          return r;
        } else {
          return (function (t) {
            const e = t.reduce((t, e) => t + e.length, 0);
            const n = new Uint8Array(e);
            let r = 0;
            for (const e of t) {
              n.set(e, r);
              r += e.length;
            }
            return n;
          })(r);
        }
      }
      function mt(t) {
        return [
          {
            type: "span",
          },
          t,
        ];
      }
      function gt(t) {
        const e = typeof t.data == "string" ? pt(t.data) : t.data;
        return [
          (0, E.Jr)({
            type: "attachment",
            length: e.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType,
          }),
          e,
        ];
      }
      const yt = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        profile_chunk: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        feedback: "feedback",
        span: "span",
        statsd: "metric_bucket",
      };
      function vt(t) {
        return yt[t];
      }
      function bt(t) {
        if (!t || !t.sdk) {
          return;
        }
        const { name: e, version: n } = t.sdk;
        return {
          name: e,
          version: n,
        };
      }
      function St(t, e, n, r) {
        const s =
          t.sdkProcessingMetadata &&
          t.sdkProcessingMetadata.dynamicSamplingContext;
        return {
          event_id: t.event_id,
          sent_at: new Date().toISOString(),
          ...(e && {
            sdk: e,
          }),
          ...(!!n &&
            r && {
              dsn: z(r),
            }),
          ...(s && {
            trace: (0, E.Jr)({
              ...s,
            }),
          }),
        };
      }
      class _t extends Error {
        constructor(t, e = "warn") {
          super(t);
          this.message = t;
          this.name = new.target.prototype.constructor.name;
          Object.setPrototypeOf(this, new.target.prototype);
          this.logLevel = e;
        }
      }
      function wt(t) {
        const e = t.protocol ? `${t.protocol}:` : "";
        const n = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
      }
      function xt(t, e, n) {
        return (
          e ||
          `${(function (t) {
            return `${wt(t)}${t.projectId}/envelope/`;
          })(t)}?${(function (t, e) {
            return (0, E._j)({
              sentry_key: t.publicKey,
              sentry_version: "7",
              ...(e && {
                sentry_client: `${e.name}/${e.version}`,
              }),
            });
          })(t, n)}`
        );
      }
      const kt = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__;
      const Et = "baggage";
      const Tt = "sentry-";
      const Ct = /^sentry-/;
      function Mt(t) {
        const e = (function (t) {
          if (!t || (!(0, X.HD)(t) && !Array.isArray(t))) {
            return;
          }
          if (Array.isArray(t)) {
            return t.reduce((t, e) => {
              const n = At(e);
              Object.entries(n).forEach(([e, n]) => {
                t[e] = n;
              });
              return t;
            }, {});
          }
          return At(t);
        })(t);
        if (!e) {
          return;
        }
        const n = Object.entries(e).reduce((t, [e, n]) => {
          if (e.match(Ct)) {
            t[e.slice(7)] = n;
          }
          return t;
        }, {});
        if (Object.keys(n).length > 0) {
          return n;
        } else {
          return undefined;
        }
      }
      function It(t) {
        if (!t) {
          return;
        }
        return (function (t) {
          if (Object.keys(t).length === 0) {
            return;
          }
          return Object.entries(t).reduce((t, [e, n], r) => {
            const s = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`;
            const i = r === 0 ? s : `${t},${s}`;
            if (i.length > 8192) {
              if (V.X) {
                w.kg.warn(
                  `Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`,
                );
              }
              return t;
            } else {
              return i;
            }
          }, "");
        })(
          Object.entries(t).reduce((t, [e, n]) => {
            if (n) {
              t[`${Tt}${e}`] = n;
            }
            return t;
          }, {}),
        );
      }
      function At(t) {
        return t
          .split(",")
          .map((t) => t.split("=").map((t) => decodeURIComponent(t.trim())))
          .reduce((t, [e, n]) => {
            if (e && n) {
              t[e] = n;
            }
            return t;
          }, {});
      }
      const Rt = "production";
      const Pt = "sentry.source";
      const Ot = "sentry.sample_rate";
      const Dt = "sentry.op";
      const Lt = "sentry.origin";
      const Nt = "sentry.idle_span_finish_reason";
      const jt = "sentry.measurement_unit";
      const Ft = "sentry.measurement_value";
      const $t = "sentry.exclusive_time";
      const Bt = new RegExp(
        "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$",
      );
      function Vt(t, e) {
        const n = (function (t) {
          if (!t) {
            return;
          }
          const e = t.match(Bt);
          if (!e) {
            return;
          }
          let n;
          if (e[3] === "1") {
            n = true;
          } else if (e[3] === "0") {
            n = false;
          }
          return {
            traceId: e[1],
            parentSampled: n,
            parentSpanId: e[2],
          };
        })(t);
        const r = Mt(e);
        const { traceId: s, parentSpanId: i, parentSampled: o } = n || {};
        if (n) {
          return {
            traceId: s || (0, K.DM)(),
            parentSpanId: i || (0, K.DM)().substring(16),
            spanId: (0, K.DM)().substring(16),
            sampled: o,
            dsc: r || {},
          };
        } else {
          return {
            traceId: s || (0, K.DM)(),
            spanId: (0, K.DM)().substring(16),
          };
        }
      }
      function Ut(t = (0, K.DM)(), e = (0, K.DM)().substring(16), n) {
        let r = "";
        if (n !== undefined) {
          r = n ? "-1" : "-0";
        }
        return `${t}-${e}${r}`;
      }
      var zt = n(60645);
      var Wt = n(4915);
      const qt = "_sentryMetrics";
      function Ht(t) {
        const e = t[qt];
        if (!e) {
          return;
        }
        const n = {};
        for (const [, [t, r]] of e) {
          (n[t] ||= []).push((0, E.Jr)(r));
        }
        return n;
      }
      function Kt(t, e) {
        t.setAttribute("http.response.status_code", e);
        const n = (function (t) {
          if (t < 400 && t >= 100) {
            return {
              code: 1,
            };
          }
          if (t >= 400 && t < 500) {
            switch (t) {
              case 401:
                return {
                  code: 2,
                  message: "unauthenticated",
                };
              case 403:
                return {
                  code: 2,
                  message: "permission_denied",
                };
              case 404:
                return {
                  code: 2,
                  message: "not_found",
                };
              case 409:
                return {
                  code: 2,
                  message: "already_exists",
                };
              case 413:
                return {
                  code: 2,
                  message: "failed_precondition",
                };
              case 429:
                return {
                  code: 2,
                  message: "resource_exhausted",
                };
              case 499:
                return {
                  code: 2,
                  message: "cancelled",
                };
              default:
                return {
                  code: 2,
                  message: "invalid_argument",
                };
            }
          }
          if (t >= 500 && t < 600) {
            switch (t) {
              case 501:
                return {
                  code: 2,
                  message: "unimplemented",
                };
              case 503:
                return {
                  code: 2,
                  message: "unavailable",
                };
              case 504:
                return {
                  code: 2,
                  message: "deadline_exceeded",
                };
              default:
                return {
                  code: 2,
                  message: "internal_error",
                };
            }
          }
          return {
            code: 2,
            message: "unknown_error",
          };
        })(e);
        if (n.message !== "unknown_error") {
          t.setStatus(n);
        }
      }
      var Xt = n(79603);
      function Yt(t) {
        const { spanId: e, traceId: n } = t.spanContext();
        const {
          data: r,
          op: s,
          parent_span_id: i,
          status: o,
          origin: a,
        } = te(t);
        return (0, E.Jr)({
          parent_span_id: i,
          span_id: e,
          trace_id: n,
          data: r,
          op: s,
          status: o,
          origin: a,
        });
      }
      function Gt(t) {
        const { spanId: e, traceId: n } = t.spanContext();
        const { parent_span_id: r } = te(t);
        return (0, E.Jr)({
          parent_span_id: r,
          span_id: e,
          trace_id: n,
        });
      }
      function Jt(t) {
        const { traceId: e, spanId: n } = t.spanContext();
        return Ut(e, n, ee(t));
      }
      function Zt(t) {
        if (typeof t == "number") {
          return Qt(t);
        } else if (Array.isArray(t)) {
          return t[0] + t[1] / 1000000000;
        } else if (t instanceof Date) {
          return Qt(t.getTime());
        } else {
          return (0, _.ph)();
        }
      }
      function Qt(t) {
        if (t > 9999999999) {
          return t / 1000;
        } else {
          return t;
        }
      }
      function te(t) {
        if (
          (function (t) {
            return typeof t.getSpanJSON == "function";
          })(t)
        ) {
          return t.getSpanJSON();
        }
        try {
          const { spanId: e, traceId: n } = t.spanContext();
          if (
            (function (t) {
              const e = t;
              return (
                !!e.attributes &&
                !!e.startTime &&
                !!e.name &&
                !!e.endTime &&
                !!e.status
              );
            })(t)
          ) {
            const {
              attributes: r,
              startTime: s,
              name: i,
              endTime: o,
              parentSpanId: a,
              status: c,
            } = t;
            return (0, E.Jr)({
              span_id: e,
              trace_id: n,
              data: r,
              description: i,
              parent_span_id: a,
              start_timestamp: Zt(s),
              timestamp: Zt(o) || undefined,
              status: ne(c),
              op: r[Dt],
              origin: r[Lt],
              _metrics_summary: Ht(t),
            });
          }
          return {
            span_id: e,
            trace_id: n,
          };
        } catch (t) {
          return {};
        }
      }
      function ee(t) {
        const { traceFlags: e } = t.spanContext();
        return e === 1;
      }
      function ne(t) {
        if (t && t.code !== 0) {
          if (t.code === 1) {
            return "ok";
          } else {
            return t.message || "unknown_error";
          }
        }
      }
      const re = "_sentryChildSpans";
      const se = "_sentryRootSpan";
      function ie(t, e) {
        const n = t[se] || t;
        (0, E.xp)(e, se, n);
        if (t[re]) {
          t[re].add(e);
        } else {
          (0, E.xp)(t, re, new Set([e]));
        }
      }
      function oe(t) {
        const e = new Set();
        (function t(n) {
          if (!e.has(n) && ee(n)) {
            e.add(n);
            const r = n[re] ? Array.from(n[re]) : [];
            for (const e of r) {
              t(e);
            }
          }
        })(t);
        return Array.from(e);
      }
      function ae(t) {
        return t[se] || t;
      }
      function ce() {
        const t = (0, Wt.c)();
        const e = (0, zt.G)(t);
        if (e.getActiveSpan) {
          return e.getActiveSpan();
        } else {
          return (0, Xt.Y)((0, S.nZ)());
        }
      }
      const ue = "_frozenDsc";
      function le(t, e) {
        const n = t;
        (0, E.xp)(n, ue, e);
      }
      function de(t, e) {
        const n = e.getOptions();
        const { publicKey: r } = e.getDsn() || {};
        const s = (0, E.Jr)({
          environment: n.environment || Rt,
          release: n.release,
          public_key: r,
          trace_id: t,
        });
        e.emit("createDsc", s);
        return s;
      }
      function he(t) {
        const e = (0, S.s3)();
        if (!e) {
          return {};
        }
        const n = de(te(t).trace_id || "", e);
        const r = ae(t);
        const s = r[ue];
        if (s) {
          return s;
        }
        const i = r.spanContext().traceState;
        const o = i && i.get("sentry.dsc");
        const a = o && Mt(o);
        if (a) {
          return a;
        }
        const c = te(r);
        const u = c.data || {};
        const l = u[Ot];
        if (l != null) {
          n.sample_rate = `${l}`;
        }
        const d = u[Pt];
        const h = c.description;
        if (d !== "url" && h) {
          n.transaction = h;
        }
        n.sampled = String(ee(r));
        e.emit("createDsc", n, r);
        return n;
      }
      const pe = [];
      function fe(t, e) {
        for (const n of e) {
          if (n && n.afterAllSetup) {
            n.afterAllSetup(t);
          }
        }
      }
      function me(t, e, n) {
        if (n[e.name]) {
          if (kt) {
            w.kg.log(
              `Integration skipped because it was already installed: ${e.name}`,
            );
          }
        } else {
          n[e.name] = e;
          if (pe.indexOf(e.name) === -1 && typeof e.setupOnce == "function") {
            e.setupOnce();
            pe.push(e.name);
          }
          if (e.setup && typeof e.setup == "function") {
            e.setup(t);
          }
          if (typeof e.preprocessEvent == "function") {
            const n = e.preprocessEvent.bind(e);
            t.on("preprocessEvent", (e, r) => n(e, r, t));
          }
          if (typeof e.processEvent == "function") {
            const n = e.processEvent.bind(e);
            const r = Object.assign((e, r) => n(e, r, t), {
              id: e.name,
            });
            t.addEventProcessor(r);
          }
          if (kt) {
            w.kg.log(`Integration installed: ${e.name}`);
          }
        }
      }
      var ge = n(65367);
      function ye(t) {
        if (typeof t == "boolean") {
          return Number(t);
        }
        const e = typeof t == "string" ? parseFloat(t) : t;
        if (typeof e == "number" && !isNaN(e) && !(e < 0) && !(e > 1)) {
          return e;
        }
        if (kt) {
          w.kg.warn(
            `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`,
          );
        }
      }
      var ve = n(78264);
      function be(t, e, n, r = 0) {
        return new J((s, i) => {
          const o = t[r];
          if (e === null || typeof o != "function") {
            s(e);
          } else {
            const a = o(
              {
                ...e,
              },
              n,
            );
            if (kt && o.id && a === null) {
              w.kg.log(`Event processor "${o.id}" dropped event`);
            }
            if ((0, X.J8)(a)) {
              a.then((e) => be(t, e, n, r + 1).then(s)).then(null, i);
            } else {
              be(t, a, n, r + 1)
                .then(s)
                .then(null, i);
            }
          }
        });
      }
      var Se = n(90314);
      function _e(t, e) {
        const {
          fingerprint: n,
          span: r,
          breadcrumbs: s,
          sdkProcessingMetadata: i,
        } = e;
        (function (t, e) {
          const {
            extra: n,
            tags: r,
            user: s,
            contexts: i,
            level: o,
            transactionName: a,
          } = e;
          const c = (0, E.Jr)(n);
          if (c && Object.keys(c).length) {
            t.extra = {
              ...c,
              ...t.extra,
            };
          }
          const u = (0, E.Jr)(r);
          if (u && Object.keys(u).length) {
            t.tags = {
              ...u,
              ...t.tags,
            };
          }
          const l = (0, E.Jr)(s);
          if (l && Object.keys(l).length) {
            t.user = {
              ...l,
              ...t.user,
            };
          }
          const d = (0, E.Jr)(i);
          if (d && Object.keys(d).length) {
            t.contexts = {
              ...d,
              ...t.contexts,
            };
          }
          if (o) {
            t.level = o;
          }
          if (a && t.type !== "transaction") {
            t.transaction = a;
          }
        })(t, e);
        if (r) {
          (function (t, e) {
            t.contexts = {
              trace: Gt(e),
              ...t.contexts,
            };
            t.sdkProcessingMetadata = {
              dynamicSamplingContext: he(e),
              ...t.sdkProcessingMetadata,
            };
            const n = ae(e);
            const r = te(n).description;
            if (r && !t.transaction && t.type === "transaction") {
              t.transaction = r;
            }
          })(t, r);
        }
        (function (t, e) {
          t.fingerprint = t.fingerprint ? (0, K.lE)(t.fingerprint) : [];
          if (e) {
            t.fingerprint = t.fingerprint.concat(e);
          }
          if (t.fingerprint && !t.fingerprint.length) {
            delete t.fingerprint;
          }
        })(t, n);
        (function (t, e) {
          const n = [...(t.breadcrumbs || []), ...e];
          t.breadcrumbs = n.length ? n : undefined;
        })(t, s);
        (function (t, e) {
          t.sdkProcessingMetadata = {
            ...t.sdkProcessingMetadata,
            ...e,
          };
        })(t, i);
      }
      function we(t, e) {
        const {
          extra: n,
          tags: r,
          user: s,
          contexts: i,
          level: o,
          sdkProcessingMetadata: a,
          breadcrumbs: c,
          fingerprint: u,
          eventProcessors: l,
          attachments: d,
          propagationContext: h,
          transactionName: p,
          span: f,
        } = e;
        xe(t, "extra", n);
        xe(t, "tags", r);
        xe(t, "user", s);
        xe(t, "contexts", i);
        xe(t, "sdkProcessingMetadata", a);
        if (o) {
          t.level = o;
        }
        if (p) {
          t.transactionName = p;
        }
        if (f) {
          t.span = f;
        }
        if (c.length) {
          t.breadcrumbs = [...t.breadcrumbs, ...c];
        }
        if (u.length) {
          t.fingerprint = [...t.fingerprint, ...u];
        }
        if (l.length) {
          t.eventProcessors = [...t.eventProcessors, ...l];
        }
        if (d.length) {
          t.attachments = [...t.attachments, ...d];
        }
        t.propagationContext = {
          ...t.propagationContext,
          ...h,
        };
      }
      function xe(t, e, n) {
        if (n && Object.keys(n).length) {
          t[e] = {
            ...t[e],
          };
          for (const r in n) {
            if (Object.prototype.hasOwnProperty.call(n, r)) {
              t[e][r] = n[r];
            }
          }
        }
      }
      function ke(t, e, n, r, s, i) {
        const { normalizeDepth: o = 3, normalizeMaxBreadth: a = 1000 } = t;
        const c = {
          ...e,
          event_id: e.event_id || n.event_id || (0, K.DM)(),
          timestamp: e.timestamp || (0, _.yW)(),
        };
        const u = n.integrations || t.integrations.map((t) => t.name);
        (function (t, e) {
          const {
            environment: n,
            release: r,
            dist: s,
            maxValueLength: i = 250,
          } = e;
          if (!("environment" in t)) {
            t.environment = "environment" in e ? n : Rt;
          }
          if (t.release === undefined && r !== undefined) {
            t.release = r;
          }
          if (t.dist === undefined && s !== undefined) {
            t.dist = s;
          }
          t.message &&= (0, ve.$G)(t.message, i);
          const o = t.exception && t.exception.values && t.exception.values[0];
          if (o && o.value) {
            o.value = (0, ve.$G)(o.value, i);
          }
          const a = t.request;
          if (a && a.url) {
            a.url = (0, ve.$G)(a.url, i);
          }
        })(c, t);
        (function (t, e) {
          if (e.length > 0) {
            t.sdk = t.sdk || {};
            t.sdk.integrations = [...(t.sdk.integrations || []), ...e];
          }
        })(c, u);
        if (s) {
          s.emit("applyFrameMetadata", e);
        }
        if (e.type === undefined) {
          (function (t, e) {
            const n = ut.n._sentryDebugIds;
            if (!n) {
              return;
            }
            let r;
            const s = Ee.get(e);
            if (s) {
              r = s;
            } else {
              r = new Map();
              Ee.set(e, r);
            }
            const i = Object.entries(n).reduce((t, [n, s]) => {
              let i;
              const o = r.get(n);
              if (o) {
                i = o;
              } else {
                i = e(n);
                r.set(n, i);
              }
              for (let e = i.length - 1; e >= 0; e--) {
                const n = i[e];
                if (n.filename) {
                  t[n.filename] = s;
                  break;
                }
              }
              return t;
            }, {});
            try {
              t.exception.values.forEach((t) => {
                t.stacktrace.frames.forEach((t) => {
                  if (t.filename) {
                    t.debug_id = i[t.filename];
                  }
                });
              });
            } catch (t) {}
          })(c, t.stackParser);
        }
        const l = (function (t, e) {
          if (!e) {
            return t;
          }
          const n = t ? t.clone() : new Se.s();
          n.update(e);
          return n;
        })(r, n.captureContext);
        if (n.mechanism) {
          (0, K.EG)(c, n.mechanism);
        }
        const d = s ? s.getEventProcessors() : [];
        const h = (0, S.lW)().getScopeData();
        if (i) {
          we(h, i.getScopeData());
        }
        if (l) {
          we(h, l.getScopeData());
        }
        const p = [...(n.attachments || []), ...h.attachments];
        if (p.length) {
          n.attachments = p;
        }
        _e(c, h);
        return be([...d, ...h.eventProcessors], c, n).then((t) => {
          if (t) {
            (function (t) {
              const e = {};
              try {
                t.exception.values.forEach((t) => {
                  t.stacktrace.frames.forEach((t) => {
                    if (t.debug_id) {
                      if (t.abs_path) {
                        e[t.abs_path] = t.debug_id;
                      } else if (t.filename) {
                        e[t.filename] = t.debug_id;
                      }
                      delete t.debug_id;
                    }
                  });
                });
              } catch (t) {}
              if (Object.keys(e).length === 0) {
                return;
              }
              t.debug_meta = t.debug_meta || {};
              t.debug_meta.images = t.debug_meta.images || [];
              const n = t.debug_meta.images;
              Object.entries(e).forEach(([t, e]) => {
                n.push({
                  type: "sourcemap",
                  code_file: t,
                  debug_id: e,
                });
              });
            })(t);
          }
          if (typeof o == "number" && o > 0) {
            return (function (t, e, n) {
              if (!t) {
                return null;
              }
              const r = {
                ...t,
                ...(t.breadcrumbs && {
                  breadcrumbs: t.breadcrumbs.map((t) => ({
                    ...t,
                    ...(t.data && {
                      data: ot(t.data, e, n),
                    }),
                  })),
                }),
                ...(t.user && {
                  user: ot(t.user, e, n),
                }),
                ...(t.contexts && {
                  contexts: ot(t.contexts, e, n),
                }),
                ...(t.extra && {
                  extra: ot(t.extra, e, n),
                }),
              };
              if (t.contexts && t.contexts.trace && r.contexts) {
                r.contexts.trace = t.contexts.trace;
                if (t.contexts.trace.data) {
                  r.contexts.trace.data = ot(t.contexts.trace.data, e, n);
                }
              }
              if (t.spans) {
                r.spans = t.spans.map((t) => ({
                  ...t,
                  ...(t.data && {
                    data: ot(t.data, e, n),
                  }),
                }));
              }
              return r;
            })(t, o, a);
          } else {
            return t;
          }
        });
      }
      const Ee = new WeakMap();
      function Te(t) {
        if (t) {
          if (
            (function (t) {
              return t instanceof Se.s || typeof t == "function";
            })(t) ||
            (function (t) {
              return Object.keys(t).some((t) => Ce.includes(t));
            })(t)
          ) {
            return {
              captureContext: t,
            };
          } else {
            return t;
          }
        }
      }
      const Ce = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "requestSession",
        "propagationContext",
      ];
      const Me = "Not capturing exception because it's already been captured.";
      class Ie {
        constructor(t) {
          this._options = t;
          this._integrations = {};
          this._numProcessing = 0;
          this._outcomes = {};
          this._hooks = {};
          this._eventProcessors = [];
          if (t.dsn) {
            this._dsn = q(t.dsn);
          } else if (kt) {
            w.kg.warn("No DSN provided, client will not send events.");
          }
          if (this._dsn) {
            const e = xt(
              this._dsn,
              t.tunnel,
              t._metadata ? t._metadata.sdk : undefined,
            );
            this._transport = t.transport({
              tunnel: this._options.tunnel,
              recordDroppedEvent: this.recordDroppedEvent.bind(this),
              ...t.transportOptions,
              url: e,
            });
          }
        }
        captureException(t, e, n) {
          const r = (0, K.DM)();
          if ((0, K.YO)(t)) {
            if (kt) {
              w.kg.log(Me);
            }
            return r;
          }
          const s = {
            event_id: r,
            ...e,
          };
          this._process(
            this.eventFromException(t, s).then((t) =>
              this._captureEvent(t, s, n),
            ),
          );
          return s.event_id;
        }
        captureMessage(t, e, n, r) {
          const s = {
            event_id: (0, K.DM)(),
            ...n,
          };
          const i = (0, X.Le)(t) ? t : String(t);
          const o = (0, X.pt)(t)
            ? this.eventFromMessage(i, e, s)
            : this.eventFromException(t, s);
          this._process(o.then((t) => this._captureEvent(t, s, r)));
          return s.event_id;
        }
        captureEvent(t, e, n) {
          const r = (0, K.DM)();
          if (e && e.originalException && (0, K.YO)(e.originalException)) {
            if (kt) {
              w.kg.log(Me);
            }
            return r;
          }
          const s = {
            event_id: r,
            ...e,
          };
          const i = (t.sdkProcessingMetadata || {}).capturedSpanScope;
          this._process(this._captureEvent(t, s, i || n));
          return s.event_id;
        }
        captureSession(t) {
          if (typeof t.release != "string") {
            if (kt) {
              w.kg.warn(
                "Discarded session because of missing or non-string release",
              );
            }
          } else {
            this.sendSession(t);
            (0, ge.CT)(t, {
              init: false,
            });
          }
        }
        getDsn() {
          return this._dsn;
        }
        getOptions() {
          return this._options;
        }
        getSdkMetadata() {
          return this._options._metadata;
        }
        getTransport() {
          return this._transport;
        }
        flush(t) {
          const e = this._transport;
          if (e) {
            this.emit("flush");
            return this._isClientDoneProcessing(t).then((n) =>
              e.flush(t).then((t) => n && t),
            );
          } else {
            return Y(true);
          }
        }
        close(t) {
          return this.flush(t).then((t) => {
            this.getOptions().enabled = false;
            this.emit("close");
            return t;
          });
        }
        getEventProcessors() {
          return this._eventProcessors;
        }
        addEventProcessor(t) {
          this._eventProcessors.push(t);
        }
        init() {
          if (this._isEnabled()) {
            this._setupIntegrations();
          }
        }
        getIntegrationByName(t) {
          return this._integrations[t];
        }
        addIntegration(t) {
          const e = this._integrations[t.name];
          me(this, t, this._integrations);
          if (!e) {
            fe(this, [t]);
          }
        }
        sendEvent(t, e = {}) {
          this.emit("beforeSendEvent", t, e);
          let n = (function (t, e, n, r) {
            const s = bt(n);
            const i = t.type && t.type !== "replay_event" ? t.type : "event";
            (function (t, e) {
              if (e) {
                t.sdk = t.sdk || {};
                t.sdk.name = t.sdk.name || e.name;
                t.sdk.version = t.sdk.version || e.version;
                t.sdk.integrations = [
                  ...(t.sdk.integrations || []),
                  ...(e.integrations || []),
                ];
                t.sdk.packages = [
                  ...(t.sdk.packages || []),
                  ...(e.packages || []),
                ];
              }
            })(t, n && n.sdk);
            const o = St(t, s, r, e);
            delete t.sdkProcessingMetadata;
            return lt(o, [
              [
                {
                  type: i,
                },
                t,
              ],
            ]);
          })(t, this._dsn, this._options._metadata, this._options.tunnel);
          for (const t of e.attachments || []) {
            n = dt(n, gt(t));
          }
          const r = this.sendEnvelope(n);
          if (r) {
            r.then((e) => this.emit("afterSendEvent", t, e), null);
          }
        }
        sendSession(t) {
          const e = (function (t, e, n, r) {
            const s = bt(n);
            return lt(
              {
                sent_at: new Date().toISOString(),
                ...(s && {
                  sdk: s,
                }),
                ...(!!r &&
                  e && {
                    dsn: z(e),
                  }),
              },
              [
                "aggregates" in t
                  ? [
                      {
                        type: "sessions",
                      },
                      t,
                    ]
                  : [
                      {
                        type: "session",
                      },
                      t.toJSON(),
                    ],
              ],
            );
          })(t, this._dsn, this._options._metadata, this._options.tunnel);
          this.sendEnvelope(e);
        }
        recordDroppedEvent(t, e, n) {
          if (this._options.sendClientReports) {
            const n = `${t}:${e}`;
            if (kt) {
              w.kg.log(`Adding outcome: "${n}"`);
            }
            this._outcomes[n] = (this._outcomes[n] || 0) + 1;
          }
        }
        on(t, e) {
          this._hooks[t] ||= [];
          this._hooks[t].push(e);
          return () => {
            const n = this._hooks[t];
            if (n) {
              const t = n.indexOf(e);
              n.splice(t, 1);
            }
          };
        }
        emit(t, ...e) {
          const n = this._hooks[t];
          if (n) {
            n.forEach((t) => t(...e));
          }
        }
        sendEnvelope(t) {
          this.emit("beforeEnvelope", t);
          if (this._isEnabled() && this._transport) {
            return this._transport.send(t).then(null, (t) => {
              if (kt) {
                w.kg.error("Error while sending event:", t);
              }
              return t;
            });
          } else {
            if (kt) {
              w.kg.error("Transport disabled");
            }
            return Y({});
          }
        }
        _setupIntegrations() {
          const { integrations: t } = this._options;
          this._integrations = (function (t, e) {
            const n = {};
            e.forEach((e) => {
              if (e) {
                me(t, e, n);
              }
            });
            return n;
          })(this, t);
          fe(this, t);
        }
        _updateSessionFromEvent(t, e) {
          let n = false;
          let r = false;
          const s = e.exception && e.exception.values;
          if (s) {
            r = true;
            for (const t of s) {
              const e = t.mechanism;
              if (e && e.handled === false) {
                n = true;
                break;
              }
            }
          }
          const i = t.status === "ok";
          if ((i && t.errors === 0) || (i && n)) {
            (0, ge.CT)(t, {
              ...(n && {
                status: "crashed",
              }),
              errors: t.errors || Number(r || n),
            });
            this.captureSession(t);
          }
        }
        _isClientDoneProcessing(t) {
          return new J((e) => {
            let n = 0;
            const r = setInterval(() => {
              if (this._numProcessing == 0) {
                clearInterval(r);
                e(true);
              } else {
                n += 1;
                if (t && n >= t) {
                  clearInterval(r);
                  e(false);
                }
              }
            }, 1);
          });
        }
        _isEnabled() {
          return (
            this.getOptions().enabled !== false && this._transport !== undefined
          );
        }
        _prepareEvent(t, e, n, r = (0, S.aF)()) {
          const s = this.getOptions();
          const i = Object.keys(this._integrations);
          if (!e.integrations && i.length > 0) {
            e.integrations = i;
          }
          this.emit("preprocessEvent", t, e);
          if (!t.type) {
            r.setLastEventId(t.event_id || e.event_id);
          }
          return ke(s, t, e, n, this, r).then((t) => {
            if (t === null) {
              return t;
            }
            const e = {
              ...r.getPropagationContext(),
              ...(n ? n.getPropagationContext() : undefined),
            };
            if ((!t.contexts || !t.contexts.trace) && e) {
              const { traceId: n, spanId: r, parentSpanId: s, dsc: i } = e;
              t.contexts = {
                trace: (0, E.Jr)({
                  trace_id: n,
                  span_id: r,
                  parent_span_id: s,
                }),
                ...t.contexts,
              };
              const o = i || de(n, this);
              t.sdkProcessingMetadata = {
                dynamicSamplingContext: o,
                ...t.sdkProcessingMetadata,
              };
            }
            return t;
          });
        }
        _captureEvent(t, e = {}, n) {
          return this._processEvent(t, e, n).then(
            (t) => t.event_id,
            (t) => {
              if (kt) {
                const e = t;
                if (e.logLevel === "log") {
                  w.kg.log(e.message);
                } else {
                  w.kg.warn(e);
                }
              }
            },
          );
        }
        _processEvent(t, e, n) {
          const r = this.getOptions();
          const { sampleRate: s } = r;
          const i = Re(t);
          const o = Ae(t);
          const a = t.type || "error";
          const c = `before send for type \`${a}\``;
          const u = s === undefined ? undefined : ye(s);
          if (o && typeof u == "number" && Math.random() > u) {
            this.recordDroppedEvent("sample_rate", "error", t);
            return G(
              new _t(
                `Discarding event because it's not included in the random sample (sampling rate = ${s})`,
                "log",
              ),
            );
          }
          const l = a === "replay_event" ? "replay" : a;
          const d = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
          return this._prepareEvent(t, e, n, d)
            .then((n) => {
              if (n === null) {
                this.recordDroppedEvent("event_processor", l, t);
                throw new _t(
                  "An event processor returned `null`, will not send event.",
                  "log",
                );
              }
              if (e.data && e.data.__sentry__ === true) {
                return n;
              }
              const s = (function (t, e, n, r) {
                const {
                  beforeSend: s,
                  beforeSendTransaction: i,
                  beforeSendSpan: o,
                } = e;
                if (Ae(n) && s) {
                  return s(n, r);
                }
                if (Re(n)) {
                  if (n.spans && o) {
                    const e = [];
                    for (const r of n.spans) {
                      const n = o(r);
                      if (n) {
                        e.push(n);
                      } else {
                        t.recordDroppedEvent("before_send", "span");
                      }
                    }
                    n.spans = e;
                  }
                  if (i) {
                    return i(n, r);
                  }
                }
                return n;
              })(this, r, n, e);
              return (function (t, e) {
                const n = `${e} must return \`null\` or a valid event.`;
                if ((0, X.J8)(t)) {
                  return t.then(
                    (t) => {
                      if (!(0, X.PO)(t) && t !== null) {
                        throw new _t(n);
                      }
                      return t;
                    },
                    (t) => {
                      throw new _t(`${e} rejected with ${t}`);
                    },
                  );
                }
                if (!(0, X.PO)(t) && t !== null) {
                  throw new _t(n);
                }
                return t;
              })(s, c);
            })
            .then((r) => {
              if (r === null) {
                this.recordDroppedEvent("before_send", l, t);
                if (Re(t)) {
                  const e = 1 + (t.spans || []).length;
                  this._outcomes.span = (this._outcomes.span || 0) + e;
                }
                throw new _t(
                  `${c} returned \`null\`, will not send event.`,
                  "log",
                );
              }
              const s = n && n.getSession();
              if (!i && s) {
                this._updateSessionFromEvent(s, r);
              }
              const o = r.transaction_info;
              if (i && o && r.transaction !== t.transaction) {
                const t = "custom";
                r.transaction_info = {
                  ...o,
                  source: t,
                };
              }
              this.sendEvent(r, e);
              return r;
            })
            .then(null, (t) => {
              if (t instanceof _t) {
                throw t;
              }
              this.captureException(t, {
                data: {
                  __sentry__: true,
                },
                originalException: t,
              });
              throw new _t(
                `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`,
              );
            });
        }
        _process(t) {
          this._numProcessing++;
          t.then(
            (t) => {
              this._numProcessing--;
              return t;
            },
            (t) => {
              this._numProcessing--;
              return t;
            },
          );
        }
        _clearOutcomes() {
          const t = this._outcomes;
          this._outcomes = {};
          return Object.entries(t).map(([t, e]) => {
            const [n, r] = t.split(":");
            return {
              reason: n,
              category: r,
              quantity: e,
            };
          });
        }
      }
      function Ae(t) {
        return t.type === undefined;
      }
      function Re(t) {
        return t.type === "transaction";
      }
      var Pe = n(4206);
      const Oe = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__;
      function De(t, e) {
        const n = je(t, e);
        const r = {
          type: e && e.name,
          value: $e(e),
        };
        if (n.length) {
          r.stacktrace = {
            frames: n,
          };
        }
        if (r.type === undefined && r.value === "") {
          r.value = "Unrecoverable error caught";
        }
        return r;
      }
      function Le(t, e, n, r) {
        const s = (0, S.s3)();
        const i = s && s.getOptions().normalizeDepth;
        const o = (function (t) {
          for (const e in t) {
            if (Object.prototype.hasOwnProperty.call(t, e)) {
              const n = t[e];
              if (n instanceof Error) {
                return n;
              }
            }
          }
          return;
        })(e);
        const a = {
          __serialized__: at(e, i),
        };
        if (o) {
          return {
            exception: {
              values: [De(t, o)],
            },
            extra: a,
          };
        }
        const c = {
          exception: {
            values: [
              {
                type: (0, X.cO)(e)
                  ? e.constructor.name
                  : r
                    ? "UnhandledRejection"
                    : "Error",
                value: Ue(e, {
                  isUnhandledRejection: r,
                }),
              },
            ],
          },
          extra: a,
        };
        if (n) {
          const e = je(t, n);
          if (e.length) {
            c.exception.values[0].stacktrace = {
              frames: e,
            };
          }
        }
        return c;
      }
      function Ne(t, e) {
        return {
          exception: {
            values: [De(t, e)],
          },
        };
      }
      function je(t, e) {
        const n = e.stacktrace || e.stack || "";
        const r = (function (t) {
          if (t && Fe.test(t.message)) {
            return 1;
          }
          return 0;
        })(e);
        const s = (function (t) {
          if (typeof t.framesToPop == "number") {
            return t.framesToPop;
          }
          return 0;
        })(e);
        try {
          return t(n, r, s);
        } catch (t) {}
        return [];
      }
      const Fe = /Minified React error #\d+;/i;
      function $e(t) {
        const e = t && t.message;
        if (e) {
          if (e.error && typeof e.error.message == "string") {
            return e.error.message;
          } else {
            return e;
          }
        } else {
          return "No error message";
        }
      }
      function Be(t, e, n, r) {
        const s = (function (t, e, n, r, s) {
          let i;
          if ((0, X.VW)(e) && e.error) {
            return Ne(t, e.error);
          }
          if ((0, X.TX)(e) || (0, X.fm)(e)) {
            const s = e;
            if ("stack" in e) {
              i = Ne(t, e);
            } else {
              const e = s.name || ((0, X.TX)(s) ? "DOMError" : "DOMException");
              const o = s.message ? `${e}: ${s.message}` : e;
              i = Ve(t, o, n, r);
              (0, K.Db)(i, o);
            }
            if ("code" in s) {
              i.tags = {
                ...i.tags,
                "DOMException.code": `${s.code}`,
              };
            }
            return i;
          }
          if ((0, X.VZ)(e)) {
            return Ne(t, e);
          }
          if ((0, X.PO)(e) || (0, X.cO)(e)) {
            i = Le(t, e, n, s);
            (0, K.EG)(i, {
              synthetic: true,
            });
            return i;
          }
          i = Ve(t, e, n, r);
          (0, K.Db)(i, `${e}`, undefined);
          (0, K.EG)(i, {
            synthetic: true,
          });
          return i;
        })(t, e, (n && n.syntheticException) || undefined, r);
        (0, K.EG)(s);
        s.level = "error";
        if (n && n.event_id) {
          s.event_id = n.event_id;
        }
        return Y(s);
      }
      function Ve(t, e, n, r) {
        const s = {};
        if (r && n) {
          const r = je(t, n);
          if (r.length) {
            s.exception = {
              values: [
                {
                  value: e,
                  stacktrace: {
                    frames: r,
                  },
                },
              ],
            };
          }
        }
        if ((0, X.Le)(e)) {
          const {
            __sentry_template_string__: t,
            __sentry_template_values__: n,
          } = e;
          s.logentry = {
            message: t,
            params: n,
          };
          return s;
        }
        s.message = e;
        return s;
      }
      function Ue(t, { isUnhandledRejection: e }) {
        const n = (0, E.zf)(t);
        const r = e ? "promise rejection" : "exception";
        if ((0, X.VW)(t)) {
          return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
        }
        if ((0, X.cO)(t)) {
          return `Event \`${(function (t) {
            try {
              const e = Object.getPrototypeOf(t);
              if (e) {
                return e.constructor.name;
              } else {
                return undefined;
              }
            } catch (t) {}
          })(t)}\` (type=${t.type}) captured as ${r}`;
        }
        return `Object captured as ${r} with keys: ${n}`;
      }
      const ze = ut.n;
      class We extends Ie {
        constructor(t) {
          const e = {
            parentSpanIsAlwaysRootSpan: true,
            ...t,
          };
          (function (t, e, n = [e], r = "npm") {
            const s = t._metadata || {};
            s.sdk ||= {
              name: `sentry.javascript.${e}`,
              packages: n.map((t) => ({
                name: `${r}:@sentry/${t}`,
                version: Pe.J,
              })),
              version: Pe.J,
            };
            t._metadata = s;
          })(e, "browser", ["browser"], ze.SENTRY_SDK_SOURCE || "npm");
          super(e);
          if (e.sendClientReports && ze.document) {
            ze.document.addEventListener("visibilitychange", () => {
              if (ze.document.visibilityState === "hidden") {
                this._flushOutcomes();
              }
            });
          }
        }
        eventFromException(t, e) {
          return Be(
            this._options.stackParser,
            t,
            e,
            this._options.attachStacktrace,
          );
        }
        eventFromMessage(t, e = "info", n) {
          return (function (t, e, n = "info", r, s) {
            const i = Ve(t, e, (r && r.syntheticException) || undefined, s);
            i.level = n;
            if (r && r.event_id) {
              i.event_id = r.event_id;
            }
            return Y(i);
          })(
            this._options.stackParser,
            t,
            e,
            n,
            this._options.attachStacktrace,
          );
        }
        captureUserFeedback(t) {
          if (!this._isEnabled()) {
            if (Oe) {
              w.kg.warn("SDK not enabled, will not capture user feedback.");
            }
            return;
          }
          const e = (function (t, { metadata: e, tunnel: n, dsn: r }) {
            const s = {
              event_id: t.event_id,
              sent_at: new Date().toISOString(),
              ...(e &&
                e.sdk && {
                  sdk: {
                    name: e.sdk.name,
                    version: e.sdk.version,
                  },
                }),
              ...(!!n &&
                !!r && {
                  dsn: z(r),
                }),
            };
            const i = (function (t) {
              return [
                {
                  type: "user_report",
                },
                t,
              ];
            })(t);
            return lt(s, [i]);
          })(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel,
          });
          this.sendEnvelope(e);
        }
        _prepareEvent(t, e, n) {
          t.platform = t.platform || "javascript";
          return super._prepareEvent(t, e, n);
        }
        _flushOutcomes() {
          const t = this._clearOutcomes();
          if (t.length === 0) {
            if (Oe) {
              w.kg.log("No outcomes to send");
            }
            return;
          }
          if (!this._dsn) {
            if (Oe) {
              w.kg.log("No dsn provided, will not send outcomes");
            }
            return;
          }
          if (Oe) {
            w.kg.log("Sending outcomes:", t);
          }
          n = t;
          const e = lt(
            (r = this._options.tunnel && z(this._dsn))
              ? {
                  dsn: r,
                }
              : {},
            [
              [
                {
                  type: "client_report",
                },
                {
                  timestamp: s || (0, _.yW)(),
                  discarded_events: n,
                },
              ],
            ],
          );
          var n;
          var r;
          var s;
          this.sendEnvelope(e);
        }
      }
      const qe = ut.n;
      function He() {
        if (!("fetch" in qe)) {
          return false;
        }
        try {
          new Headers();
          new Request("http://www.example.com");
          new Response();
          return true;
        } catch (t) {
          return false;
        }
      }
      function Ke(t) {
        return (
          t &&
          /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        );
      }
      const Xe = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__;
      const Ye = ut.n;
      const Ge = {};
      function Je(t) {
        const e = Ge[t];
        if (e) {
          return e;
        }
        let n = Ye[t];
        if (Ke(n)) {
          return (Ge[t] = n.bind(Ye));
        }
        const r = Ye.document;
        if (r && typeof r.createElement == "function") {
          try {
            const e = r.createElement("iframe");
            e.hidden = true;
            r.head.appendChild(e);
            const s = e.contentWindow;
            if (s && s[t]) {
              n = s[t];
            }
            r.head.removeChild(e);
          } catch (e) {
            if (Xe) {
              w.kg.warn(
                `Could not create sandbox iframe for ${t} check, bailing to window.${t}: `,
                e,
              );
            }
          }
        }
        if (n) {
          return (Ge[t] = n.bind(Ye));
        } else {
          return n;
        }
      }
      function Ze(t) {
        Ge[t] = undefined;
      }
      function Qe(...t) {
        return Je("setTimeout")(...t);
      }
      function tn(t) {
        const e = [];
        function n(t) {
          return e.splice(e.indexOf(t), 1)[0] || Promise.resolve(undefined);
        }
        return {
          $: e,
          add: function (r) {
            if (t !== undefined && !(e.length < t)) {
              return G(
                new _t("Not adding Promise because buffer limit was reached."),
              );
            }
            const s = r();
            if (e.indexOf(s) === -1) {
              e.push(s);
            }
            s.then(() => n(s)).then(null, () => n(s).then(null, () => {}));
            return s;
          },
          drain: function (t) {
            return new J((n, r) => {
              let s = e.length;
              if (!s) {
                return n(true);
              }
              const i = setTimeout(() => {
                if (t && t > 0) {
                  n(false);
                }
              }, t);
              e.forEach((t) => {
                Y(t).then(() => {
                  if (!--s) {
                    clearTimeout(i);
                    n(true);
                  }
                }, r);
              });
            });
          },
        };
      }
      function en(t, e, n = Date.now()) {
        return (
          (function (t, e) {
            return t[e] || t.all || 0;
          })(t, e) > n
        );
      }
      function nn(t, { statusCode: e, headers: n }, r = Date.now()) {
        const s = {
          ...t,
        };
        const i = n && n["x-sentry-rate-limits"];
        const o = n && n["retry-after"];
        if (i) {
          for (const t of i.trim().split(",")) {
            const [e, n, , , i] = t.split(":", 5);
            const o = parseInt(e, 10);
            const a = (isNaN(o) ? 60 : o) * 1000;
            if (n) {
              for (const t of n.split(";")) {
                if (
                  t !== "metric_bucket" ||
                  !i ||
                  !!i.split(";").includes("custom")
                ) {
                  s[t] = r + a;
                }
              }
            } else {
              s.all = r + a;
            }
          }
        } else if (o) {
          s.all =
            r +
            (function (t, e = Date.now()) {
              const n = parseInt(`${t}`, 10);
              if (!isNaN(n)) {
                return n * 1000;
              }
              const r = Date.parse(`${t}`);
              if (isNaN(r)) {
                return 60000;
              } else {
                return r - e;
              }
            })(o, r);
        } else if (e === 429) {
          s.all = r + 60000;
        }
        return s;
      }
      function rn(t, e) {
        if (e === "event" || e === "transaction") {
          if (Array.isArray(t)) {
            return t[1];
          } else {
            return undefined;
          }
        }
      }
      function sn(t, e = Je("fetch")) {
        let n = 0;
        let r = 0;
        return (function (t, e, n = tn(t.bufferSize || 64)) {
          let r = {};
          return {
            send: function (s) {
              const i = [];
              ht(s, (e, n) => {
                const s = vt(n);
                if (en(r, s)) {
                  const r = rn(e, n);
                  t.recordDroppedEvent("ratelimit_backoff", s, r);
                } else {
                  i.push(e);
                }
              });
              if (i.length === 0) {
                return Y({});
              }
              const o = lt(s[0], i);
              const a = (e) => {
                ht(o, (n, r) => {
                  const s = rn(n, r);
                  t.recordDroppedEvent(e, vt(r), s);
                });
              };
              return n
                .add(() =>
                  e({
                    body: ft(o),
                  }).then(
                    (t) => {
                      if (
                        t.statusCode !== undefined &&
                        (t.statusCode < 200 || t.statusCode >= 300) &&
                        kt
                      ) {
                        w.kg.warn(
                          `Sentry responded with status code ${t.statusCode} to sent event.`,
                        );
                      }
                      r = nn(r, t);
                      return t;
                    },
                    (t) => {
                      a("network_error");
                      throw t;
                    },
                  ),
                )
                .then(
                  (t) => t,
                  (t) => {
                    if (t instanceof _t) {
                      if (kt) {
                        w.kg.error(
                          "Skipped sending event because buffer is full.",
                        );
                      }
                      a("queue_overflow");
                      return Y({});
                    }
                    throw t;
                  },
                );
            },
            flush: (t) => n.drain(t),
          };
        })(t, function (s) {
          const i = s.body.length;
          n += i;
          r++;
          const o = {
            body: s.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: n <= 60000 && r < 15,
            ...t.fetchOptions,
          };
          if (!e) {
            Ze("fetch");
            return G("No fetch implementation available");
          }
          try {
            return e(t.url, o).then((t) => {
              n -= i;
              r--;
              return {
                statusCode: t.status,
                headers: {
                  "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                  "retry-after": t.headers.get("Retry-After"),
                },
              };
            });
          } catch (t) {
            Ze("fetch");
            n -= i;
            r--;
            return G(t);
          }
        });
      }
      function on(t, e, n, r) {
        const s = {
          filename: t,
          function: e === "<anonymous>" ? Z : e,
          in_app: true,
        };
        if (n !== undefined) {
          s.lineno = n;
        }
        if (r !== undefined) {
          s.colno = r;
        }
        return s;
      }
      const an = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
      const cn =
        /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
      const un = /\((\S*)(?::(\d+))(?::(\d+))\)/;
      const ln =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
      const dn = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
      const hn = et(
        ...[
          [
            30,
            (t) => {
              const e = an.exec(t);
              if (e) {
                const [, t, n, r] = e;
                return on(t, Z, +n, +r);
              }
              const n = cn.exec(t);
              if (n) {
                if (n[2] && n[2].indexOf("eval") === 0) {
                  const t = un.exec(n[2]);
                  if (t) {
                    n[2] = t[1];
                    n[3] = t[2];
                    n[4] = t[3];
                  }
                }
                const [t, e] = pn(n[1] || Z, n[2]);
                return on(
                  e,
                  t,
                  n[3] ? +n[3] : undefined,
                  n[4] ? +n[4] : undefined,
                );
              }
            },
          ],
          [
            50,
            (t) => {
              const e = ln.exec(t);
              if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                  const t = dn.exec(e[3]);
                  if (t) {
                    e[1] = e[1] || "eval";
                    e[3] = t[1];
                    e[4] = t[2];
                    e[5] = "";
                  }
                }
                let t = e[3];
                let n = e[1] || Z;
                [n, t] = pn(n, t);
                return on(
                  t,
                  n,
                  e[4] ? +e[4] : undefined,
                  e[5] ? +e[5] : undefined,
                );
              }
            },
          ],
        ],
      );
      const pn = (t, e) => {
        const n = t.indexOf("safari-extension") !== -1;
        const r = t.indexOf("safari-web-extension") !== -1;
        if (n || r) {
          return [
            t.indexOf("@") !== -1 ? t.split("@")[0] : Z,
            n ? `safari-extension:${e}` : `safari-web-extension:${e}`,
          ];
        } else {
          return [t, e];
        }
      };
      const fn = () => ({
        name: "HttpContext",
        preprocessEvent(t) {
          if (!ze.navigator && !ze.location && !ze.document) {
            return;
          }
          const e =
            (t.request && t.request.url) || (ze.location && ze.location.href);
          const { referrer: n } = ze.document || {};
          const { userAgent: r } = ze.navigator || {};
          const s = {
            ...(t.request && t.request.headers),
            ...(n && {
              Referer: n,
            }),
            ...(r && {
              "User-Agent": r,
            }),
          };
          const i = {
            ...t.request,
            ...(e && {
              url: e,
            }),
            headers: s,
          };
          t.request = i;
        },
      });
      const mn = () => {
        let t;
        return {
          name: "Dedupe",
          processEvent(e) {
            if (e.type) {
              return e;
            }
            try {
              if (
                (function (t, e) {
                  if (!e) {
                    return false;
                  }
                  if (
                    (function (t, e) {
                      const n = t.message;
                      const r = e.message;
                      if (!n && !r) {
                        return false;
                      }
                      if ((n && !r) || (!n && r)) {
                        return false;
                      }
                      if (n !== r) {
                        return false;
                      }
                      if (!yn(t, e)) {
                        return false;
                      }
                      if (!gn(t, e)) {
                        return false;
                      }
                      return true;
                    })(t, e)
                  ) {
                    return true;
                  }
                  if (
                    (function (t, e) {
                      const n = vn(e);
                      const r = vn(t);
                      if (!n || !r) {
                        return false;
                      }
                      if (n.type !== r.type || n.value !== r.value) {
                        return false;
                      }
                      if (!yn(t, e)) {
                        return false;
                      }
                      if (!gn(t, e)) {
                        return false;
                      }
                      return true;
                    })(t, e)
                  ) {
                    return true;
                  }
                  return false;
                })(e, t)
              ) {
                if (kt) {
                  w.kg.warn(
                    "Event dropped due to being a duplicate of previously captured event.",
                  );
                }
                return null;
              }
            } catch (t) {}
            return (t = e);
          },
        };
      };
      function gn(t, e) {
        let n = it(t);
        let r = it(e);
        if (!n && !r) {
          return true;
        }
        if ((n && !r) || (!n && r)) {
          return false;
        }
        if (r.length !== n.length) {
          return false;
        }
        for (let t = 0; t < r.length; t++) {
          const e = r[t];
          const s = n[t];
          if (
            e.filename !== s.filename ||
            e.lineno !== s.lineno ||
            e.colno !== s.colno ||
            e.function !== s.function
          ) {
            return false;
          }
        }
        return true;
      }
      function yn(t, e) {
        let n = t.fingerprint;
        let r = e.fingerprint;
        if (!n && !r) {
          return true;
        }
        if ((n && !r) || (!n && r)) {
          return false;
        }
        try {
          return n.join("") === r.join("");
        } catch (t) {
          return false;
        }
      }
      function vn(t) {
        return t.exception && t.exception.values && t.exception.values[0];
      }
      const bn = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/,
        /^ResizeObserver loop completed with undelivered notifications.$/,
        /^Cannot redefine property: googletag$/,
        "undefined is not an object (evaluating 'a.L')",
        'can\'t redefine non-configurable property "solana"',
        "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
        "Can't find variable: _AutofillCallbackHandler",
      ];
      const Sn = (t = {}) => ({
        name: "InboundFilters",
        processEvent(e, n, r) {
          const s = r.getOptions();
          const i = (function (t = {}, e = {}) {
            return {
              allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
              denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
              ignoreErrors: [
                ...(t.ignoreErrors || []),
                ...(e.ignoreErrors || []),
                ...(t.disableErrorDefaults ? [] : bn),
              ],
              ignoreTransactions: [
                ...(t.ignoreTransactions || []),
                ...(e.ignoreTransactions || []),
              ],
              ignoreInternal:
                t.ignoreInternal === undefined || t.ignoreInternal,
            };
          })(t, s);
          if (
            (function (t, e) {
              if (
                e.ignoreInternal &&
                (function (t) {
                  try {
                    return t.exception.values[0].type === "SentryError";
                  } catch (t) {}
                  return false;
                })(t)
              ) {
                if (kt) {
                  w.kg.warn(
                    `Event dropped due to being internal Sentry Error.\nEvent: ${(0, K.jH)(t)}`,
                  );
                }
                return true;
              }
              if (
                (function (t, e) {
                  if (t.type || !e || !e.length) {
                    return false;
                  }
                  return (function (t) {
                    const e = [];
                    if (t.message) {
                      e.push(t.message);
                    }
                    let n;
                    try {
                      n = t.exception.values[t.exception.values.length - 1];
                    } catch (t) {}
                    if (n && n.value) {
                      e.push(n.value);
                      if (n.type) {
                        e.push(`${n.type}: ${n.value}`);
                      }
                    }
                    return e;
                  })(t).some((t) => (0, ve.U0)(t, e));
                })(t, e.ignoreErrors)
              ) {
                if (kt) {
                  w.kg.warn(
                    `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0, K.jH)(t)}`,
                  );
                }
                return true;
              }
              if (
                (function (t) {
                  if (t.type) {
                    return false;
                  }
                  if (
                    !t.exception ||
                    !t.exception.values ||
                    t.exception.values.length === 0
                  ) {
                    return false;
                  }
                  return (
                    !t.message &&
                    !t.exception.values.some(
                      (t) =>
                        t.stacktrace ||
                        (t.type && t.type !== "Error") ||
                        t.value,
                    )
                  );
                })(t)
              ) {
                if (kt) {
                  w.kg.warn(
                    `Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${(0, K.jH)(t)}`,
                  );
                }
                return true;
              }
              if (
                (function (t, e) {
                  if (t.type !== "transaction" || !e || !e.length) {
                    return false;
                  }
                  const n = t.transaction;
                  return !!n && (0, ve.U0)(n, e);
                })(t, e.ignoreTransactions)
              ) {
                if (kt) {
                  w.kg.warn(
                    `Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0, K.jH)(t)}`,
                  );
                }
                return true;
              }
              if (
                (function (t, e) {
                  if (!e || !e.length) {
                    return false;
                  }
                  const n = _n(t);
                  return !!n && (0, ve.U0)(n, e);
                })(t, e.denyUrls)
              ) {
                if (kt) {
                  w.kg.warn(
                    `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0, K.jH)(t)}.\nUrl: ${_n(t)}`,
                  );
                }
                return true;
              }
              if (
                !(function (t, e) {
                  if (!e || !e.length) {
                    return true;
                  }
                  const n = _n(t);
                  return !n || (0, ve.U0)(n, e);
                })(t, e.allowUrls)
              ) {
                if (kt) {
                  w.kg.warn(
                    `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0, K.jH)(t)}.\nUrl: ${_n(t)}`,
                  );
                }
                return true;
              }
              return false;
            })(e, i)
          ) {
            return null;
          } else {
            return e;
          }
        },
      });
      function _n(t) {
        try {
          let e;
          try {
            e = t.exception.values[0].stacktrace.frames;
          } catch (t) {}
          if (e) {
            return (function (t = []) {
              for (let e = t.length - 1; e >= 0; e--) {
                const n = t[e];
                if (
                  n &&
                  n.filename !== "<anonymous>" &&
                  n.filename !== "[native code]"
                ) {
                  return n.filename || null;
                }
              }
              return null;
            })(e);
          } else {
            return null;
          }
        } catch (e) {
          if (kt) {
            w.kg.error(`Cannot extract url for event ${(0, K.jH)(t)}`);
          }
          return null;
        }
      }
      let wn;
      const xn = new WeakMap();
      const kn = () => ({
        name: "FunctionToString",
        setupOnce() {
          wn = Function.prototype.toString;
          try {
            Function.prototype.toString = function (...t) {
              const e = (0, E.HK)(this);
              const n = xn.has((0, S.s3)()) && e !== undefined ? e : this;
              return wn.apply(n, t);
            };
          } catch (t) {}
        },
        setup(t) {
          xn.set(t, true);
        },
      });
      const En = {};
      const Tn = {};
      function Cn(t, e) {
        En[t] = En[t] || [];
        En[t].push(e);
      }
      function Mn(t, e) {
        if (!Tn[t]) {
          e();
          Tn[t] = true;
        }
      }
      function In(t, e) {
        const n = t && En[t];
        if (n) {
          for (const r of n) {
            try {
              r(e);
            } catch (e) {
              if (V.X) {
                w.kg.error(
                  `Error while triggering instrumentation handler.\nType: ${t}\nName: ${st(r)}\nError:`,
                  e,
                );
              }
            }
          }
        }
      }
      let An;
      let Rn;
      let Pn;
      function On(t) {
        Cn("dom", t);
        Mn("dom", Dn);
      }
      function Dn() {
        if (!Ye.document) {
          return;
        }
        const t = In.bind(null, "dom");
        const e = Ln(t, true);
        Ye.document.addEventListener("click", e, false);
        Ye.document.addEventListener("keypress", e, false);
        ["EventTarget", "Node"].forEach((e) => {
          const n = Ye[e] && Ye[e].prototype;
          if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
            (0, E.hl)(n, "addEventListener", function (e) {
              return function (n, r, s) {
                if (n === "click" || n == "keypress") {
                  try {
                    const r = this;
                    const i = (r.__sentry_instrumentation_handlers__ =
                      r.__sentry_instrumentation_handlers__ || {});
                    const o = (i[n] = i[n] || {
                      refCount: 0,
                    });
                    if (!o.handler) {
                      const r = Ln(t);
                      o.handler = r;
                      e.call(this, n, r, s);
                    }
                    o.refCount++;
                  } catch (t) {}
                }
                return e.call(this, n, r, s);
              };
            });
            (0, E.hl)(n, "removeEventListener", function (t) {
              return function (e, n, r) {
                if (e === "click" || e == "keypress") {
                  try {
                    const n = this;
                    const s = n.__sentry_instrumentation_handlers__ || {};
                    const i = s[e];
                    if (i) {
                      i.refCount--;
                      if (i.refCount <= 0) {
                        t.call(this, e, i.handler, r);
                        i.handler = undefined;
                        delete s[e];
                      }
                      if (Object.keys(s).length === 0) {
                        delete n.__sentry_instrumentation_handlers__;
                      }
                    }
                  } catch (t) {}
                }
                return t.call(this, e, n, r);
              };
            });
          }
        });
      }
      function Ln(t, e = false) {
        return (n) => {
          if (!n || n._sentryCaptured) {
            return;
          }
          const r = (function (t) {
            try {
              return t.target;
            } catch (t) {
              return null;
            }
          })(n);
          if (
            (function (t, e) {
              return (
                t === "keypress" &&
                (!e ||
                  !e.tagName ||
                  (e.tagName !== "INPUT" &&
                    e.tagName !== "TEXTAREA" &&
                    !e.isContentEditable))
              );
            })(n.type, r)
          ) {
            return;
          }
          (0, E.xp)(n, "_sentryCaptured", true);
          if (r && !r._sentryId) {
            (0, E.xp)(r, "_sentryId", (0, K.DM)());
          }
          const s = n.type === "keypress" ? "input" : n.type;
          if (
            !(function (t) {
              if (t.type !== Rn) {
                return false;
              }
              try {
                if (!t.target || t.target._sentryId !== Pn) {
                  return false;
                }
              } catch (t) {}
              return true;
            })(n)
          ) {
            t({
              event: n,
              name: s,
              global: e,
            });
            Rn = n.type;
            Pn = r ? r._sentryId : undefined;
          }
          clearTimeout(An);
          An = Ye.setTimeout(() => {
            Pn = undefined;
            Rn = undefined;
          }, 1000);
        };
      }
      const Nn = "__sentry_xhr_v3__";
      function jn(t) {
        Cn("xhr", t);
        Mn("xhr", Fn);
      }
      function Fn() {
        if (!Ye.XMLHttpRequest) {
          return;
        }
        const t = XMLHttpRequest.prototype;
        (0, E.hl)(t, "open", function (t) {
          return function (...e) {
            const n = (0, _.ph)() * 1000;
            const r = (0, X.HD)(e[0]) ? e[0].toUpperCase() : undefined;
            const s = (function (t) {
              if ((0, X.HD)(t)) {
                return t;
              }
              try {
                return t.toString();
              } catch (t) {}
              return;
            })(e[1]);
            if (!r || !s) {
              return t.apply(this, e);
            }
            this[Nn] = {
              method: r,
              url: s,
              request_headers: {},
            };
            if (r === "POST" && s.match(/sentry_key/)) {
              this.__sentry_own_request__ = true;
            }
            const i = () => {
              const t = this[Nn];
              if (t && this.readyState === 4) {
                try {
                  t.status_code = this.status;
                } catch (t) {}
                In("xhr", {
                  endTimestamp: (0, _.ph)() * 1000,
                  startTimestamp: n,
                  xhr: this,
                });
              }
            };
            if (
              "onreadystatechange" in this &&
              typeof this.onreadystatechange == "function"
            ) {
              (0, E.hl)(this, "onreadystatechange", function (t) {
                return function (...e) {
                  i();
                  return t.apply(this, e);
                };
              });
            } else {
              this.addEventListener("readystatechange", i);
            }
            (0, E.hl)(this, "setRequestHeader", function (t) {
              return function (...e) {
                const [n, r] = e;
                const s = this[Nn];
                if (s && (0, X.HD)(n) && (0, X.HD)(r)) {
                  s.request_headers[n.toLowerCase()] = r;
                }
                return t.apply(this, e);
              };
            });
            return t.apply(this, e);
          };
        });
        (0, E.hl)(t, "send", function (t) {
          return function (...e) {
            const n = this[Nn];
            if (!n) {
              return t.apply(this, e);
            }
            if (e[0] !== undefined) {
              n.body = e[0];
            }
            In("xhr", {
              startTimestamp: (0, _.ph)() * 1000,
              xhr: this,
            });
            return t.apply(this, e);
          };
        });
      }
      const $n = ut.n;
      let Bn;
      function Vn(t) {
        const e = "history";
        Cn(e, t);
        Mn(e, Un);
      }
      function Un() {
        if (
          !(function () {
            const t = $n.chrome;
            const e = t && t.app && t.app.runtime;
            const n =
              "history" in $n &&
              !!$n.history.pushState &&
              !!$n.history.replaceState;
            return !e && n;
          })()
        ) {
          return;
        }
        const t = Ye.onpopstate;
        function e(t) {
          return function (...e) {
            const n = e.length > 2 ? e[2] : undefined;
            if (n) {
              const t = Bn;
              const e = String(n);
              Bn = e;
              In("history", {
                from: t,
                to: e,
              });
            }
            return t.apply(this, e);
          };
        }
        Ye.onpopstate = function (...e) {
          const n = Ye.location.href;
          const r = Bn;
          Bn = n;
          In("history", {
            from: r,
            to: n,
          });
          if (t) {
            try {
              return t.apply(this, e);
            } catch (t) {}
          }
        };
        (0, E.hl)(Ye.history, "pushState", e);
        (0, E.hl)(Ye.history, "replaceState", e);
      }
      function zn() {
        if ("console" in ut.n) {
          w.RU.forEach(function (t) {
            if (t in ut.n.console) {
              (0, E.hl)(ut.n.console, t, function (e) {
                w.LD[t] = e;
                return function (...e) {
                  In("console", {
                    args: e,
                    level: t,
                  });
                  const n = w.LD[t];
                  if (n) {
                    n.apply(ut.n.console, e);
                  }
                };
              });
            }
          });
        }
      }
      function Wn(t) {
        const e = "fetch";
        Cn(e, t);
        Mn(e, qn);
      }
      function qn() {
        if (
          (function () {
            if (typeof EdgeRuntime == "string") {
              return true;
            }
            if (!He()) {
              return false;
            }
            if (Ke(qe.fetch)) {
              return true;
            }
            let t = false;
            const e = qe.document;
            if (e && typeof e.createElement == "function") {
              try {
                const n = e.createElement("iframe");
                n.hidden = true;
                e.head.appendChild(n);
                if (n.contentWindow && n.contentWindow.fetch) {
                  t = Ke(n.contentWindow.fetch);
                }
                e.head.removeChild(n);
              } catch (t) {
                if (V.X) {
                  w.kg.warn(
                    "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                    t,
                  );
                }
              }
            }
            return t;
          })()
        ) {
          (0, E.hl)(ut.n, "fetch", function (t) {
            return function (...e) {
              const { method: n, url: r } = (function (t) {
                if (t.length === 0) {
                  return {
                    method: "GET",
                    url: "",
                  };
                }
                if (t.length === 2) {
                  const [e, n] = t;
                  return {
                    url: Kn(e),
                    method: Hn(n, "method")
                      ? String(n.method).toUpperCase()
                      : "GET",
                  };
                }
                const e = t[0];
                return {
                  url: Kn(e),
                  method: Hn(e, "method")
                    ? String(e.method).toUpperCase()
                    : "GET",
                };
              })(e);
              const s = {
                args: e,
                fetchData: {
                  method: n,
                  url: r,
                },
                startTimestamp: (0, _.ph)() * 1000,
              };
              In("fetch", {
                ...s,
              });
              const i = new Error().stack;
              return t.apply(ut.n, e).then(
                (t) => {
                  In("fetch", {
                    ...s,
                    endTimestamp: (0, _.ph)() * 1000,
                    response: t,
                  });
                  return t;
                },
                (t) => {
                  In("fetch", {
                    ...s,
                    endTimestamp: (0, _.ph)() * 1000,
                    error: t,
                  });
                  if ((0, X.VZ)(t) && t.stack === undefined) {
                    t.stack = i;
                    (0, E.xp)(t, "framesToPop", 1);
                  }
                  throw t;
                },
              );
            };
          });
        }
      }
      function Hn(t, e) {
        return !!t && typeof t == "object" && !!t[e];
      }
      function Kn(t) {
        if (typeof t == "string") {
          return t;
        } else if (t) {
          if (Hn(t, "url")) {
            return t.url;
          } else if (t.toString) {
            return t.toString();
          } else {
            return "";
          }
        } else {
          return "";
        }
      }
      var Xn = n(87854);
      const Yn = ["fatal", "error", "warning", "log", "info", "debug"];
      function Gn(t) {
        if (t === "warn") {
          return "warning";
        } else if (Yn.includes(t)) {
          return t;
        } else {
          return "log";
        }
      }
      function Jn(t) {
        if (!t) {
          return {};
        }
        const e = t.match(
          /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
        );
        if (!e) {
          return {};
        }
        const n = e[6] || "";
        const r = e[8] || "";
        return {
          host: e[4],
          path: e[5],
          protocol: e[2],
          search: n,
          hash: r,
          relative: e[5] + n + r,
        };
      }
      const Zn = 1024;
      const Qn = (t = {}) => {
        const e = {
          console: true,
          dom: true,
          fetch: true,
          history: true,
          sentry: true,
          xhr: true,
          ...t,
        };
        return {
          name: "Breadcrumbs",
          setup(t) {
            if (e.console) {
              (function (t) {
                const e = "console";
                Cn(e, t);
                Mn(e, zn);
              })(
                (function (t) {
                  return function (e) {
                    if ((0, S.s3)() !== t) {
                      return;
                    }
                    const n = {
                      category: "console",
                      data: {
                        arguments: e.args,
                        logger: "console",
                      },
                      level: Gn(e.level),
                      message: (0, ve.nK)(e.args, " "),
                    };
                    if (e.level === "assert") {
                      if (e.args[0] !== false) {
                        return;
                      }
                      n.message = `Assertion failed: ${(0, ve.nK)(e.args.slice(1), " ") || "console.assert"}`;
                      n.data.arguments = e.args.slice(1);
                    }
                    k(n, {
                      input: e.args,
                      level: e.level,
                    });
                  };
                })(t),
              );
            }
            if (e.dom) {
              On(
                (function (t, e) {
                  return function (n) {
                    if ((0, S.s3)() !== t) {
                      return;
                    }
                    let r;
                    let s;
                    let i =
                      typeof e == "object" ? e.serializeAttribute : undefined;
                    let o =
                      typeof e == "object" &&
                      typeof e.maxStringLength == "number"
                        ? e.maxStringLength
                        : undefined;
                    if (o && o > Zn) {
                      if (Oe) {
                        w.kg.warn(
                          `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`,
                        );
                      }
                      o = Zn;
                    }
                    if (typeof i == "string") {
                      i = [i];
                    }
                    try {
                      const t = n.event;
                      const e = (function (t) {
                        return !!t && !!t.target;
                      })(t)
                        ? t.target
                        : t;
                      r = (0, Xn.Rt)(e, {
                        keyAttrs: i,
                        maxStringLength: o,
                      });
                      s = (0, Xn.iY)(e);
                    } catch (t) {
                      r = "<unknown>";
                    }
                    if (r.length === 0) {
                      return;
                    }
                    const a = {
                      category: `ui.${n.name}`,
                      message: r,
                    };
                    if (s) {
                      a.data = {
                        "ui.component_name": s,
                      };
                    }
                    k(a, {
                      event: n.event,
                      name: n.name,
                      global: n.global,
                    });
                  };
                })(t, e.dom),
              );
            }
            if (e.xhr) {
              jn(
                (function (t) {
                  return function (e) {
                    if ((0, S.s3)() !== t) {
                      return;
                    }
                    const { startTimestamp: n, endTimestamp: r } = e;
                    const s = e.xhr[Nn];
                    if (!n || !r || !s) {
                      return;
                    }
                    const { method: i, url: o, status_code: a, body: c } = s;
                    k(
                      {
                        category: "xhr",
                        data: {
                          method: i,
                          url: o,
                          status_code: a,
                        },
                        type: "http",
                      },
                      {
                        xhr: e.xhr,
                        input: c,
                        startTimestamp: n,
                        endTimestamp: r,
                      },
                    );
                  };
                })(t),
              );
            }
            if (e.fetch) {
              Wn(
                (function (t) {
                  return function (e) {
                    if ((0, S.s3)() !== t) {
                      return;
                    }
                    const { startTimestamp: n, endTimestamp: r } = e;
                    if (
                      r &&
                      (!e.fetchData.url.match(/sentry_key/) ||
                        e.fetchData.method !== "POST")
                    ) {
                      if (e.error) {
                        k(
                          {
                            category: "fetch",
                            data: e.fetchData,
                            level: "error",
                            type: "http",
                          },
                          {
                            data: e.error,
                            input: e.args,
                            startTimestamp: n,
                            endTimestamp: r,
                          },
                        );
                      } else {
                        const t = e.response;
                        k(
                          {
                            category: "fetch",
                            data: {
                              ...e.fetchData,
                              status_code: t && t.status,
                            },
                            type: "http",
                          },
                          {
                            input: e.args,
                            response: t,
                            startTimestamp: n,
                            endTimestamp: r,
                          },
                        );
                      }
                    }
                  };
                })(t),
              );
            }
            if (e.history) {
              Vn(
                (function (t) {
                  return function (e) {
                    if ((0, S.s3)() !== t) {
                      return;
                    }
                    let n = e.from;
                    let r = e.to;
                    const s = Jn(ze.location.href);
                    let i = n ? Jn(n) : undefined;
                    const o = Jn(r);
                    if (!i || !i.path) {
                      i = s;
                    }
                    if (s.protocol === o.protocol && s.host === o.host) {
                      r = o.relative;
                    }
                    if (s.protocol === i.protocol && s.host === i.host) {
                      n = i.relative;
                    }
                    k({
                      category: "navigation",
                      data: {
                        from: n,
                        to: r,
                      },
                    });
                  };
                })(t),
              );
            }
            if (e.sentry) {
              t.on(
                "beforeSendEvent",
                (function (t) {
                  return function (e) {
                    if ((0, S.s3)() === t) {
                      k(
                        {
                          category:
                            "sentry." +
                            (e.type === "transaction"
                              ? "transaction"
                              : "event"),
                          event_id: e.event_id,
                          level: e.level,
                          message: (0, K.jH)(e),
                        },
                        {
                          event: e,
                        },
                      );
                    }
                  };
                })(t),
              );
            }
          },
        };
      };
      const tr = (t = {}) => {
        const { depth: e = 3, captureErrorCause: n = true } = t;
        return {
          name: "ExtraErrorData",
          processEvent(t, r, s) {
            const { maxValueLength: i = 250 } = s.getOptions();
            return (function (t, e = {}, n, r, s) {
              if (!e.originalException || !(0, X.VZ)(e.originalException)) {
                return t;
              }
              const i =
                e.originalException.name ||
                e.originalException.constructor.name;
              const o = (function (t, e, n) {
                try {
                  const r = [
                    "name",
                    "message",
                    "stack",
                    "line",
                    "column",
                    "fileName",
                    "lineNumber",
                    "columnNumber",
                    "toJSON",
                  ];
                  const s = {};
                  for (const e of Object.keys(t)) {
                    if (r.indexOf(e) !== -1) {
                      continue;
                    }
                    const i = t[e];
                    s[e] =
                      (0, X.VZ)(i) || typeof i == "string"
                        ? (0, ve.$G)(`${i}`, n)
                        : i;
                  }
                  if (e && t.cause !== undefined) {
                    s.cause = (0, X.VZ)(t.cause) ? t.cause.toString() : t.cause;
                  }
                  if (typeof t.toJSON == "function") {
                    const e = t.toJSON();
                    for (const t of Object.keys(e)) {
                      const n = e[t];
                      s[t] = (0, X.VZ)(n) ? n.toString() : n;
                    }
                  }
                  return s;
                } catch (t) {
                  if (kt) {
                    w.kg.error(
                      "Unable to extract extra data from the Error object:",
                      t,
                    );
                  }
                }
                return null;
              })(e.originalException, r, s);
              if (o) {
                const e = {
                  ...t.contexts,
                };
                const r = ot(o, n);
                if ((0, X.PO)(r)) {
                  (0, E.xp)(r, "__sentry_skip_normalization__", true);
                  e[i] = r;
                }
                return {
                  ...t,
                  contexts: e,
                };
              }
              return t;
            })(t, r, e, n, i);
          },
        };
      };
      const er = () => {
        const t = (0, _.ph)() * 1000;
        return {
          name: "SessionTiming",
          processEvent(e) {
            const n = (0, _.ph)() * 1000;
            return {
              ...e,
              extra: {
                ...e.extra,
                "session:start": t,
                "session:duration": n - t,
                "session:end": n,
              },
            };
          },
        };
      };
      const nr = new Map();
      const rr = new Set();
      function sr(t, e) {
        (function (t) {
          if (ut.n._sentryModuleMetadata) {
            for (const e of Object.keys(ut.n._sentryModuleMetadata)) {
              const n = ut.n._sentryModuleMetadata[e];
              if (rr.has(e)) {
                continue;
              }
              rr.add(e);
              const r = t(e);
              for (const t of r.reverse()) {
                if (t.filename) {
                  nr.set(t.filename, n);
                  break;
                }
              }
            }
          }
        })(t);
        return nr.get(e);
      }
      const ir = (t) => ({
        name: "ThirdPartyErrorsFilter",
        setup(t) {
          t.on("beforeEnvelope", (t) => {
            ht(t, (t, e) => {
              if (e === "event") {
                const e = Array.isArray(t) ? t[1] : undefined;
                if (e) {
                  (function (t) {
                    try {
                      t.exception.values.forEach((t) => {
                        if (t.stacktrace) {
                          for (const e of t.stacktrace.frames || []) {
                            delete e.module_metadata;
                          }
                        }
                      });
                    } catch (t) {}
                  })(e);
                  t[1] = e;
                }
              }
            });
          });
          t.on("applyFrameMetadata", (e) => {
            if (e.type !== undefined) {
              return;
            }
            (function (t, e) {
              try {
                e.exception.values.forEach((e) => {
                  if (e.stacktrace) {
                    for (const n of e.stacktrace.frames || []) {
                      if (!n.filename || n.module_metadata) {
                        continue;
                      }
                      const e = sr(t, n.filename);
                      if (e) {
                        n.module_metadata = e;
                      }
                    }
                  }
                });
              } catch (t) {}
            })(t.getOptions().stackParser, e);
          });
        },
        processEvent(e) {
          const n = (function (t) {
            const e = it(t);
            if (!e) {
              return;
            }
            return e
              .filter((t) => !!t.filename)
              .map((t) =>
                t.module_metadata
                  ? Object.keys(t.module_metadata)
                      .filter((t) => t.startsWith(or))
                      .map((t) => t.slice(or.length))
                  : [],
              );
          })(e);
          if (n) {
            if (
              n[
                t.behaviour === "drop-error-if-contains-third-party-frames" ||
                t.behaviour === "apply-tag-if-contains-third-party-frames"
                  ? "some"
                  : "every"
              ]((e) => !e.some((e) => t.filterKeys.includes(e)))
            ) {
              if (
                t.behaviour === "drop-error-if-contains-third-party-frames" ||
                t.behaviour ===
                  "drop-error-if-exclusively-contains-third-party-frames"
              ) {
                return null;
              }
              e.tags = {
                ...e.tags,
                third_party_code: true,
              };
            }
          }
          return e;
        },
      });
      const or = "_sentryBundlerPluginAppKey:";
      function ar(t) {
        if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
          return false;
        }
        const e =
          t ||
          (function () {
            const t = (0, S.s3)();
            return t && t.getOptions();
          })();
        return (
          !!e &&
          (e.enableTracing || "tracesSampleRate" in e || "tracesSampler" in e)
        );
      }
      class cr {
        constructor(t = {}) {
          this._traceId = t.traceId || (0, K.DM)();
          this._spanId = t.spanId || (0, K.DM)().substring(16);
        }
        spanContext() {
          return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: 0,
          };
        }
        end(t) {}
        setAttribute(t, e) {
          return this;
        }
        setAttributes(t) {
          return this;
        }
        setStatus(t) {
          return this;
        }
        updateName(t) {
          return this;
        }
        isRecording() {
          return false;
        }
        addEvent(t, e, n) {
          return this;
        }
      }
      function ur(t) {
        if (!t || t.length === 0) {
          return;
        }
        const e = {};
        t.forEach((t) => {
          const n = t.attributes || {};
          const r = n[jt];
          const s = n[Ft];
          if (typeof r == "string" && typeof s == "number") {
            e[t.name] = {
              value: s,
              unit: r,
            };
          }
        });
        return e;
      }
      const lr = "_sentryScope";
      const dr = "_sentryIsolationScope";
      function hr(t) {
        return {
          scope: t[lr],
          isolationScope: t[dr],
        };
      }
      class pr {
        constructor(t = {}) {
          this._traceId = t.traceId || (0, K.DM)();
          this._spanId = t.spanId || (0, K.DM)().substring(16);
          this._startTime = t.startTimestamp || (0, _.ph)();
          this._attributes = {};
          this.setAttributes({
            [Lt]: "manual",
            [Dt]: t.op,
            ...t.attributes,
          });
          this._name = t.name;
          if (t.parentSpanId) {
            this._parentSpanId = t.parentSpanId;
          }
          if ("sampled" in t) {
            this._sampled = t.sampled;
          }
          if (t.endTimestamp) {
            this._endTime = t.endTimestamp;
          }
          this._events = [];
          this._isStandaloneSpan = t.isStandalone;
          if (this._endTime) {
            this._onSpanEnded();
          }
        }
        spanContext() {
          const { _spanId: t, _traceId: e, _sampled: n } = this;
          return {
            spanId: t,
            traceId: e,
            traceFlags: n ? 1 : 0,
          };
        }
        setAttribute(t, e) {
          if (e === undefined) {
            delete this._attributes[t];
          } else {
            this._attributes[t] = e;
          }
        }
        setAttributes(t) {
          Object.keys(t).forEach((e) => this.setAttribute(e, t[e]));
        }
        updateStartTime(t) {
          this._startTime = Zt(t);
        }
        setStatus(t) {
          this._status = t;
          return this;
        }
        updateName(t) {
          this._name = t;
          return this;
        }
        end(t) {
          if (!this._endTime) {
            this._endTime = Zt(t);
            (function (t) {
              if (!kt) {
                return;
              }
              const {
                description: e = "< unknown name >",
                op: n = "< unknown op >",
              } = te(t);
              const { spanId: r } = t.spanContext();
              const s = `[Tracing] Finishing "${n}" ${ae(t) === t ? "root " : ""}span "${e}" with ID ${r}`;
              w.kg.log(s);
            })(this);
            this._onSpanEnded();
          }
        }
        getSpanJSON() {
          return (0, E.Jr)({
            data: this._attributes,
            description: this._name,
            op: this._attributes[Dt],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: ne(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[Lt],
            _metrics_summary: Ht(this),
            profile_id: this._attributes["sentry.profile_id"],
            exclusive_time: this._attributes[$t],
            measurements: ur(this._events),
            is_segment:
              (this._isStandaloneSpan && ae(this) === this) || undefined,
            segment_id: this._isStandaloneSpan
              ? ae(this).spanContext().spanId
              : undefined,
          });
        }
        isRecording() {
          return !this._endTime && !!this._sampled;
        }
        addEvent(t, e, n) {
          if (kt) {
            w.kg.log("[Tracing] Adding an event to span:", t);
          }
          const r = fr(e) ? e : n || (0, _.ph)();
          const s = fr(e) ? {} : e || {};
          const i = {
            name: t,
            time: Zt(r),
            attributes: s,
          };
          this._events.push(i);
          return this;
        }
        isStandaloneSpan() {
          return !!this._isStandaloneSpan;
        }
        _onSpanEnded() {
          const t = (0, S.s3)();
          if (t) {
            t.emit("spanEnd", this);
          }
          if (!this._isStandaloneSpan && this !== ae(this)) {
            return;
          }
          if (this._isStandaloneSpan) {
            if (this._sampled) {
              (function (t) {
                const e = (0, S.s3)();
                if (!e) {
                  return;
                }
                const n = t[1];
                if (!n || n.length === 0) {
                  e.recordDroppedEvent("before_send", "span");
                  return;
                }
                const r = e.getTransport();
                if (r) {
                  r.send(t).then(null, (t) => {
                    if (kt) {
                      w.kg.error("Error while sending span:", t);
                    }
                  });
                }
              })(
                (function (t, e) {
                  const n = he(t[0]);
                  const r = e && e.getDsn();
                  const s = e && e.getOptions().tunnel;
                  const i = {
                    sent_at: new Date().toISOString(),
                    ...((function (t) {
                      return !!t.trace_id && !!t.public_key;
                    })(n) && {
                      trace: n,
                    }),
                    ...(!!s &&
                      r && {
                        dsn: z(r),
                      }),
                  };
                  const o = e && e.getOptions().beforeSendSpan;
                  const a = o ? (t) => o(te(t)) : (t) => te(t);
                  const c = [];
                  for (const e of t) {
                    const t = a(e);
                    if (t) {
                      c.push(mt(t));
                    }
                  }
                  return lt(i, c);
                })([this], t),
              );
            } else {
              if (kt) {
                w.kg.log(
                  "[Tracing] Discarding standalone span because its trace was not chosen to be sampled.",
                );
              }
              if (t) {
                t.recordDroppedEvent("sample_rate", "span");
              }
            }
            return;
          }
          const e = this._convertSpanToTransaction();
          if (e) {
            (hr(this).scope || (0, S.nZ)()).captureEvent(e);
          }
        }
        _convertSpanToTransaction() {
          if (!mr(te(this))) {
            return;
          }
          if (!this._name) {
            if (kt) {
              w.kg.warn(
                "Transaction has no name, falling back to `<unlabeled transaction>`.",
              );
            }
            this._name = "<unlabeled transaction>";
          }
          const { scope: t, isolationScope: e } = hr(this);
          const n = (t || (0, S.nZ)()).getClient() || (0, S.s3)();
          if (this._sampled !== true) {
            if (kt) {
              w.kg.log(
                "[Tracing] Discarding transaction because its trace was not chosen to be sampled.",
              );
            }
            if (n) {
              n.recordDroppedEvent("sample_rate", "transaction");
            }
            return;
          }
          const r = oe(this)
            .filter(
              (t) =>
                t !== this &&
                !(function (t) {
                  return t instanceof pr && t.isStandaloneSpan();
                })(t),
            )
            .map((t) => te(t))
            .filter(mr);
          const s = this._attributes[Pt];
          const i = {
            contexts: {
              trace: Yt(this),
            },
            spans:
              r.length > 1000
                ? r
                    .sort((t, e) => t.start_timestamp - e.start_timestamp)
                    .slice(0, 1000)
                : r,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
              capturedSpanScope: t,
              capturedSpanIsolationScope: e,
              ...(0, E.Jr)({
                dynamicSamplingContext: he(this),
              }),
            },
            _metrics_summary: Ht(this),
            ...(s && {
              transaction_info: {
                source: s,
              },
            }),
          };
          const o = ur(this._events);
          if (o && Object.keys(o).length) {
            if (kt) {
              w.kg.log(
                "[Measurements] Adding measurements to transaction event",
                JSON.stringify(o, undefined, 2),
              );
            }
            i.measurements = o;
          }
          return i;
        }
      }
      function fr(t) {
        return (
          (t && typeof t == "number") || t instanceof Date || Array.isArray(t)
        );
      }
      function mr(t) {
        return (
          !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id
        );
      }
      const gr = "__SENTRY_SUPPRESS_TRACING__";
      function yr(t) {
        const e = _r();
        if (e.startInactiveSpan) {
          return e.startInactiveSpan(t);
        }
        const n = Sr(t);
        const { forceTransaction: r, parentSpan: s } = t;
        return (
          t.scope
            ? (e) => (0, S.$e)(t.scope, e)
            : s
              ? (t) => vr(s, t)
              : (t) => t()
        )(() => {
          const e = (0, S.nZ)();
          const s = xr(e);
          if (t.onlyIfParent && !s) {
            return new cr();
          } else {
            return br({
              parentSpan: s,
              spanArguments: n,
              forceTransaction: r,
              scope: e,
            });
          }
        });
      }
      function vr(t, e) {
        const n = _r();
        if (n.withActiveSpan) {
          return n.withActiveSpan(t, e);
        } else {
          return (0, S.$e)((n) => {
            (0, Xt.D)(n, t || undefined);
            return e(n);
          });
        }
      }
      function br({
        parentSpan: t,
        spanArguments: e,
        forceTransaction: n,
        scope: r,
      }) {
        if (!ar()) {
          return new cr();
        }
        const s = (0, S.aF)();
        let i;
        if (t && !n) {
          i = (function (t, e, n) {
            const { spanId: r, traceId: s } = t.spanContext();
            const i = !e.getScopeData().sdkProcessingMetadata[gr] && ee(t);
            const o = i
              ? new pr({
                  ...n,
                  parentSpanId: r,
                  traceId: s,
                  sampled: i,
                })
              : new cr({
                  traceId: s,
                });
            ie(t, o);
            const a = (0, S.s3)();
            if (a) {
              a.emit("spanStart", o);
              if (n.endTimestamp) {
                a.emit("spanEnd", o);
              }
            }
            return o;
          })(t, r, e);
          ie(t, i);
        } else if (t) {
          const n = he(t);
          const { traceId: s, spanId: o } = t.spanContext();
          const a = ee(t);
          i = wr(
            {
              traceId: s,
              parentSpanId: o,
              ...e,
            },
            r,
            a,
          );
          le(i, n);
        } else {
          const {
            traceId: t,
            dsc: n,
            parentSpanId: o,
            sampled: a,
          } = {
            ...s.getPropagationContext(),
            ...r.getPropagationContext(),
          };
          i = wr(
            {
              traceId: t,
              parentSpanId: o,
              ...e,
            },
            r,
            a,
          );
          if (n) {
            le(i, n);
          }
        }
        (function (t) {
          if (!kt) {
            return;
          }
          const {
            description: e = "< unknown name >",
            op: n = "< unknown op >",
            parent_span_id: r,
          } = te(t);
          const { spanId: s } = t.spanContext();
          const i = ee(t);
          const o = ae(t);
          const a = o === t;
          const c = `[Tracing] Starting ${i ? "sampled" : "unsampled"} ${a ? "root " : ""}span`;
          const u = [`op: ${n}`, `name: ${e}`, `ID: ${s}`];
          if (r) {
            u.push(`parent ID: ${r}`);
          }
          if (!a) {
            const { op: t, description: e } = te(o);
            u.push(`root ID: ${o.spanContext().spanId}`);
            if (t) {
              u.push(`root op: ${t}`);
            }
            if (e) {
              u.push(`root description: ${e}`);
            }
          }
          w.kg.log(`${c}\n  ${u.join("\n  ")}`);
        })(i);
        (function (t, e, n) {
          if (t) {
            (0, E.xp)(t, dr, n);
            (0, E.xp)(t, lr, e);
          }
        })(i, r, s);
        return i;
      }
      function Sr(t) {
        const e = {
          isStandalone: (t.experimental || {}).standalone,
          ...t,
        };
        if (t.startTime) {
          const n = {
            ...e,
          };
          n.startTimestamp = Zt(t.startTime);
          delete n.startTime;
          return n;
        }
        return e;
      }
      function _r() {
        const t = (0, Wt.c)();
        return (0, zt.G)(t);
      }
      function wr(t, e, n) {
        const r = (0, S.s3)();
        const s = (r && r.getOptions()) || {};
        const { name: i = "", attributes: o } = t;
        const [a, c] = e.getScopeData().sdkProcessingMetadata[gr]
          ? [false]
          : (function (t, e) {
              if (!ar(t)) {
                return [false];
              }
              let n;
              n =
                typeof t.tracesSampler == "function"
                  ? t.tracesSampler(e)
                  : e.parentSampled !== undefined
                    ? e.parentSampled
                    : t.tracesSampleRate !== undefined
                      ? t.tracesSampleRate
                      : 1;
              const r = ye(n);
              if (r === undefined) {
                if (kt) {
                  w.kg.warn(
                    "[Tracing] Discarding transaction because of invalid sample rate.",
                  );
                }
                return [false];
              } else if (r) {
                if (Math.random() < r) {
                  return [true, r];
                } else {
                  if (kt) {
                    w.kg.log(
                      `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(n)})`,
                    );
                  }
                  return [false, r];
                }
              } else {
                if (kt) {
                  w.kg.log(
                    "[Tracing] Discarding transaction because " +
                      (typeof t.tracesSampler == "function"
                        ? "tracesSampler returned 0 or false"
                        : "a negative sampling decision was inherited or tracesSampleRate is set to 0"),
                  );
                }
                return [false, r];
              }
            })(s, {
              name: i,
              parentSampled: n,
              attributes: o,
              transactionContext: {
                name: i,
                parentSampled: n,
              },
            });
        const u = new pr({
          ...t,
          attributes: {
            [Pt]: "custom",
            ...t.attributes,
          },
          sampled: a,
        });
        if (c !== undefined) {
          u.setAttribute(Ot, c);
        }
        if (r) {
          r.emit("spanStart", u);
        }
        return u;
      }
      function xr(t) {
        const e = (0, Xt.Y)(t);
        if (!e) {
          return;
        }
        const n = (0, S.s3)();
        if ((n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan) {
          return ae(e);
        } else {
          return e;
        }
      }
      const kr = (t, e, n, r) => {
        let s;
        let i;
        return (o) => {
          if (e.value >= 0 && (o || r)) {
            i = e.value - (s || 0);
            if (i || s === undefined) {
              s = e.value;
              e.delta = i;
              e.rating = ((t, e) =>
                t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good")(
                e.value,
                n,
              );
              t(e);
            }
          }
        };
      };
      const Er = () =>
        Ye.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType("navigation")[0];
      const Tr = () => {
        const t = Er();
        return (t && t.activationStart) || 0;
      };
      const Cr = (t, e) => {
        const n = Er();
        let r = "navigate";
        if (n) {
          if ((Ye.document && Ye.document.prerendering) || Tr() > 0) {
            r = "prerender";
          } else if (Ye.document && Ye.document.wasDiscarded) {
            r = "restore";
          } else if (n.type) {
            r = n.type.replace(/_/g, "-");
          }
        }
        return {
          name: t,
          value: e === undefined ? -1 : e,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v3-${Date.now()}-${Math.floor(Math.random() * 8999999999999) + 1000000000000}`,
          navigationType: r,
        };
      };
      const Mr = (t, e, n) => {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            const r = new PerformanceObserver((t) => {
              Promise.resolve().then(() => {
                e(t.getEntries());
              });
            });
            r.observe(
              Object.assign(
                {
                  type: t,
                  buffered: true,
                },
                n || {},
              ),
            );
            return r;
          }
        } catch (t) {}
      };
      const Ir = (t) => {
        const e = (e) => {
          if (
            e.type === "pagehide" ||
            (Ye.document && Ye.document.visibilityState === "hidden")
          ) {
            t(e);
          }
        };
        if (Ye.document) {
          addEventListener("visibilitychange", e, true);
          addEventListener("pagehide", e, true);
        }
      };
      const Ar = (t) => {
        let e = false;
        return (n) => {
          if (!e) {
            t(n);
            e = true;
          }
        };
      };
      let Rr = -1;
      const Pr = (t) => {
        if (Ye.document.visibilityState === "hidden" && Rr > -1) {
          Rr = t.type === "visibilitychange" ? t.timeStamp : 0;
          removeEventListener("visibilitychange", Pr, true);
          removeEventListener("prerenderingchange", Pr, true);
        }
      };
      const Or = () => {
        if (Ye.document && Rr < 0) {
          Rr =
            Ye.document.visibilityState !== "hidden" || Ye.document.prerendering
              ? Infinity
              : 0;
          addEventListener("visibilitychange", Pr, true);
          addEventListener("prerenderingchange", Pr, true);
        }
        return {
          get firstHiddenTime() {
            return Rr;
          },
        };
      };
      const Dr = (t) => {
        if (Ye.document && Ye.document.prerendering) {
          addEventListener("prerenderingchange", () => t(), true);
        } else {
          t();
        }
      };
      const Lr = [1800, 3000];
      const Nr = [0.1, 0.25];
      const jr = (t, e = {}) => {
        ((t, e = {}) => {
          Dr(() => {
            const n = Or();
            const r = Cr("FCP");
            let s;
            const i = Mr("paint", (t) => {
              t.forEach((t) => {
                if (t.name === "first-contentful-paint") {
                  i.disconnect();
                  if (t.startTime < n.firstHiddenTime) {
                    r.value = Math.max(t.startTime - Tr(), 0);
                    r.entries.push(t);
                    s(true);
                  }
                }
              });
            });
            if (i) {
              s = kr(t, r, Lr, e.reportAllChanges);
            }
          });
        })(
          Ar(() => {
            const n = Cr("CLS", 0);
            let r;
            let s = 0;
            let i = [];
            const o = (t) => {
              t.forEach((t) => {
                if (!t.hadRecentInput) {
                  const e = i[0];
                  const n = i[i.length - 1];
                  if (
                    s &&
                    e &&
                    n &&
                    t.startTime - n.startTime < 1000 &&
                    t.startTime - e.startTime < 5000
                  ) {
                    s += t.value;
                    i.push(t);
                  } else {
                    s = t.value;
                    i = [t];
                  }
                }
              });
              if (s > n.value) {
                n.value = s;
                n.entries = i;
                r();
              }
            };
            const a = Mr("layout-shift", o);
            if (a) {
              r = kr(t, n, Nr, e.reportAllChanges);
              Ir(() => {
                o(a.takeRecords());
                r(true);
              });
              setTimeout(r, 0);
            }
          }),
        );
      };
      const Fr = [100, 300];
      let $r = 0;
      let Br = Infinity;
      let Vr = 0;
      const Ur = (t) => {
        t.forEach((t) => {
          if (t.interactionId) {
            Br = Math.min(Br, t.interactionId);
            Vr = Math.max(Vr, t.interactionId);
            $r = Vr ? (Vr - Br) / 7 + 1 : 0;
          }
        });
      };
      let zr;
      const Wr = [200, 500];
      const qr = () => (zr ? $r : performance.interactionCount || 0) - 0;
      const Hr = [];
      const Kr = {};
      const Xr = (t) => {
        const e = Hr[Hr.length - 1];
        const n = Kr[t.interactionId];
        if (n || Hr.length < 10 || (e && t.duration > e.latency)) {
          if (n) {
            n.entries.push(t);
            n.latency = Math.max(n.latency, t.duration);
          } else {
            const e = {
              id: t.interactionId,
              latency: t.duration,
              entries: [t],
            };
            Kr[e.id] = e;
            Hr.push(e);
          }
          Hr.sort((t, e) => e.latency - t.latency);
          Hr.splice(10).forEach((t) => {
            delete Kr[t.id];
          });
        }
      };
      const Yr = (t, e = {}) => {
        Dr(() => {
          if (!("interactionCount" in performance) && !zr) {
            zr = Mr("event", Ur, {
              type: "event",
              buffered: true,
              durationThreshold: 0,
            });
          }
          const n = Cr("INP");
          let r;
          const s = (t) => {
            t.forEach((t) => {
              if (t.interactionId) {
                Xr(t);
              }
              if (t.entryType === "first-input") {
                if (
                  !Hr.some((e) =>
                    e.entries.some(
                      (e) =>
                        t.duration === e.duration &&
                        t.startTime === e.startTime,
                    ),
                  )
                ) {
                  Xr(t);
                }
              }
            });
            const e = (() => {
              const t = Math.min(Hr.length - 1, Math.floor(qr() / 50));
              return Hr[t];
            })();
            if (e && e.latency !== n.value) {
              n.value = e.latency;
              n.entries = e.entries;
              r();
            }
          };
          const i = Mr("event", s, {
            durationThreshold: e.durationThreshold ?? 40,
          });
          r = kr(t, n, Wr, e.reportAllChanges);
          if (i) {
            if (
              "PerformanceEventTiming" in Ye &&
              "interactionId" in PerformanceEventTiming.prototype
            ) {
              i.observe({
                type: "first-input",
                buffered: true,
              });
            }
            Ir(() => {
              s(i.takeRecords());
              if (n.value < 0 && qr() > 0) {
                n.value = 0;
                n.entries = [];
              }
              r(true);
            });
          }
        });
      };
      const Gr = [2500, 4000];
      const Jr = {};
      const Zr = [800, 1800];
      const Qr = (t) => {
        if (Ye.document && Ye.document.prerendering) {
          Dr(() => Qr(t));
        } else if (Ye.document && Ye.document.readyState !== "complete") {
          addEventListener("load", () => Qr(t), true);
        } else {
          setTimeout(t, 0);
        }
      };
      const ts = {};
      const es = {};
      let ns;
      let rs;
      let ss;
      let is;
      let os;
      function as(t, e = false) {
        return vs("cls", t, ps, ns, e);
      }
      function cs(t, e = false) {
        return vs("lcp", t, ms, ss, e);
      }
      function us(t) {
        return vs("fid", t, fs, rs);
      }
      function ls(t) {
        return vs("inp", t, ys, os);
      }
      function ds(t, e) {
        bs(t, e);
        if (!es[t]) {
          (function (t) {
            const e = {};
            if (t === "event") {
              e.durationThreshold = 0;
            }
            Mr(
              t,
              (e) => {
                hs(t, {
                  entries: e,
                });
              },
              e,
            );
          })(t);
          es[t] = true;
        }
        return Ss(t, e);
      }
      function hs(t, e) {
        const n = ts[t];
        if (n && n.length) {
          for (const r of n) {
            try {
              r(e);
            } catch (e) {
              if (Xe) {
                w.kg.error(
                  `Error while triggering instrumentation handler.\nType: ${t}\nName: ${st(r)}\nError:`,
                  e,
                );
              }
            }
          }
        }
      }
      function ps() {
        return jr(
          (t) => {
            hs("cls", {
              metric: t,
            });
            ns = t;
          },
          {
            reportAllChanges: true,
          },
        );
      }
      function fs() {
        return ((t, e = {}) => {
          Dr(() => {
            const n = Or();
            const r = Cr("FID");
            let s;
            const i = (t) => {
              if (t.startTime < n.firstHiddenTime) {
                r.value = t.processingStart - t.startTime;
                r.entries.push(t);
                s(true);
              }
            };
            const o = (t) => {
              t.forEach(i);
            };
            const a = Mr("first-input", o);
            s = kr(t, r, Fr, e.reportAllChanges);
            if (a) {
              Ir(
                Ar(() => {
                  o(a.takeRecords());
                  a.disconnect();
                }),
              );
            }
          });
        })((t) => {
          hs("fid", {
            metric: t,
          });
          rs = t;
        });
      }
      function ms() {
        return ((t, e = {}) => {
          Dr(() => {
            const n = Or();
            const r = Cr("LCP");
            let s;
            const i = (t) => {
              const e = t[t.length - 1];
              if (e && e.startTime < n.firstHiddenTime) {
                r.value = Math.max(e.startTime - Tr(), 0);
                r.entries = [e];
                s();
              }
            };
            const o = Mr("largest-contentful-paint", i);
            if (o) {
              s = kr(t, r, Gr, e.reportAllChanges);
              const n = Ar(() => {
                if (!Jr[r.id]) {
                  i(o.takeRecords());
                  o.disconnect();
                  Jr[r.id] = true;
                  s(true);
                }
              });
              ["keydown", "click"].forEach((t) => {
                if (Ye.document) {
                  addEventListener(t, () => setTimeout(n, 0), true);
                }
              });
              Ir(n);
            }
          });
        })(
          (t) => {
            hs("lcp", {
              metric: t,
            });
            ss = t;
          },
          {
            reportAllChanges: true,
          },
        );
      }
      function gs() {
        return ((t, e = {}) => {
          const n = Cr("TTFB");
          const r = kr(t, n, Zr, e.reportAllChanges);
          Qr(() => {
            const t = Er();
            if (t) {
              const e = t.responseStart;
              if (e <= 0 || e > performance.now()) {
                return;
              }
              n.value = Math.max(e - Tr(), 0);
              n.entries = [t];
              r(true);
            }
          });
        })((t) => {
          hs("ttfb", {
            metric: t,
          });
          is = t;
        });
      }
      function ys() {
        return Yr((t) => {
          hs("inp", {
            metric: t,
          });
          os = t;
        });
      }
      function vs(t, e, n, r, s = false) {
        let i;
        bs(t, e);
        if (!es[t]) {
          i = n();
          es[t] = true;
        }
        if (r) {
          e({
            metric: r,
          });
        }
        return Ss(t, e, s ? i : undefined);
      }
      function bs(t, e) {
        ts[t] = ts[t] || [];
        ts[t].push(e);
      }
      function Ss(t, e, n) {
        return () => {
          if (n) {
            n();
          }
          const r = ts[t];
          if (!r) {
            return;
          }
          const s = r.indexOf(e);
          if (s !== -1) {
            r.splice(s, 1);
          }
        };
      }
      function _s(t) {
        return typeof t == "number" && isFinite(t);
      }
      function ws(t, e, n, { ...r }) {
        const s = te(t).start_timestamp;
        if (s && s > e && typeof t.updateStartTime == "function") {
          t.updateStartTime(e);
        }
        return vr(t, () => {
          const t = yr({
            startTime: e,
            ...r,
          });
          if (t) {
            t.end(n);
          }
          return t;
        });
      }
      function xs() {
        return Ye && Ye.addEventListener && Ye.performance;
      }
      function ks(t) {
        return t / 1000;
      }
      let Es;
      let Ts;
      let Cs = 0;
      let Ms = {};
      function Is() {
        const t = xs();
        if (t && _.Z1) {
          if (t.mark) {
            Ye.performance.mark("sentry-tracing-init");
          }
          const e = us(({ metric: t }) => {
            const e = t.entries[t.entries.length - 1];
            if (!e) {
              return;
            }
            const n = ks(_.Z1);
            const r = ks(e.startTime);
            if (Xe) {
              w.kg.log("[Measurements] Adding FID");
            }
            Ms.fid = {
              value: t.value,
              unit: "millisecond",
            };
            Ms["mark.fid"] = {
              value: n + r,
              unit: "second",
            };
          });
          const n = as(({ metric: t }) => {
            const e = t.entries[t.entries.length - 1];
            if (e) {
              if (Xe) {
                w.kg.log("[Measurements] Adding CLS");
              }
              Ms.cls = {
                value: t.value,
                unit: "",
              };
              Ts = e;
            }
          }, true);
          const r = cs(({ metric: t }) => {
            const e = t.entries[t.entries.length - 1];
            if (e) {
              if (Xe) {
                w.kg.log("[Measurements] Adding LCP");
              }
              Ms.lcp = {
                value: t.value,
                unit: "millisecond",
              };
              Es = e;
            }
          }, true);
          const s = vs(
            "ttfb",
            ({ metric: t }) => {
              if (t.entries[t.entries.length - 1]) {
                if (Xe) {
                  w.kg.log("[Measurements] Adding TTFB");
                }
                Ms.ttfb = {
                  value: t.value,
                  unit: "millisecond",
                };
              }
            },
            gs,
            is,
          );
          return () => {
            e();
            n();
            r();
            s();
          };
        }
        return () => {};
      }
      function As(t) {
        const e = xs();
        if (!e || !Ye.performance.getEntries || !_.Z1) {
          return;
        }
        if (Xe) {
          w.kg.log("[Tracing] Adding & adjusting spans using Performance API");
        }
        const n = ks(_.Z1);
        const r = e.getEntries();
        const { op: s, start_timestamp: i } = te(t);
        r.slice(Cs).forEach((e) => {
          const r = ks(e.startTime);
          const o = ks(e.duration);
          if (s !== "navigation" || !i || !(n + r < i)) {
            switch (e.entryType) {
              case "navigation":
                (function (t, e, n) {
                  [
                    "unloadEvent",
                    "redirect",
                    "domContentLoadedEvent",
                    "loadEvent",
                    "connect",
                  ].forEach((r) => {
                    Rs(t, e, r, n);
                  });
                  Rs(t, e, "secureConnection", n, "TLS/SSL", "connectEnd");
                  Rs(t, e, "fetch", n, "cache", "domainLookupStart");
                  Rs(t, e, "domainLookup", n, "DNS");
                  (function (t, e, n) {
                    const r = n + ks(e.requestStart);
                    const s = n + ks(e.responseEnd);
                    const i = n + ks(e.responseStart);
                    if (e.responseEnd) {
                      ws(t, r, s, {
                        op: "browser",
                        name: "request",
                        attributes: {
                          [Lt]: "auto.ui.browser.metrics",
                        },
                      });
                      ws(t, i, s, {
                        op: "browser",
                        name: "response",
                        attributes: {
                          [Lt]: "auto.ui.browser.metrics",
                        },
                      });
                    }
                  })(t, e, n);
                })(t, e, n);
                break;
              case "mark":
              case "paint":
              case "measure": {
                (function (t, e, n, r, s) {
                  const i = Er();
                  const o = ks(i ? i.requestStart : 0);
                  const a = s + Math.max(n, o);
                  const c = s + n;
                  const u = c + r;
                  const l = {
                    [Lt]: "auto.resource.browser.metrics",
                  };
                  if (a !== c) {
                    l["sentry.browser.measure_happened_before_request"] = true;
                    l["sentry.browser.measure_start_time"] = a;
                  }
                  ws(t, a, u, {
                    name: e.name,
                    op: e.entryType,
                    attributes: l,
                  });
                })(t, e, r, o, n);
                const s = Or();
                const i = e.startTime < s.firstHiddenTime;
                if (e.name === "first-paint" && i) {
                  if (Xe) {
                    w.kg.log("[Measurements] Adding FP");
                  }
                  Ms.fp = {
                    value: e.startTime,
                    unit: "millisecond",
                  };
                }
                if (e.name === "first-contentful-paint" && i) {
                  if (Xe) {
                    w.kg.log("[Measurements] Adding FCP");
                  }
                  Ms.fcp = {
                    value: e.startTime,
                    unit: "millisecond",
                  };
                }
                break;
              }
              case "resource":
                (function (t, e, n, r, s, i) {
                  if (
                    e.initiatorType === "xmlhttprequest" ||
                    e.initiatorType === "fetch"
                  ) {
                    return;
                  }
                  const o = Jn(n);
                  const a = {
                    [Lt]: "auto.resource.browser.metrics",
                  };
                  Ps(a, e, "transferSize", "http.response_transfer_size");
                  Ps(a, e, "encodedBodySize", "http.response_content_length");
                  Ps(
                    a,
                    e,
                    "decodedBodySize",
                    "http.decoded_response_content_length",
                  );
                  if ("renderBlockingStatus" in e) {
                    a["resource.render_blocking_status"] =
                      e.renderBlockingStatus;
                  }
                  if (o.protocol) {
                    a["url.scheme"] = o.protocol.split(":").pop();
                  }
                  if (o.host) {
                    a["server.address"] = o.host;
                  }
                  a["url.same_origin"] = n.includes(Ye.location.origin);
                  const c = i + r;
                  const u = c + s;
                  ws(t, c, u, {
                    name: n.replace(Ye.location.origin, ""),
                    op: e.initiatorType
                      ? `resource.${e.initiatorType}`
                      : "resource.other",
                    attributes: a,
                  });
                })(t, e, e.name, r, o, n);
            }
          }
        });
        Cs = Math.max(r.length - 1, 0);
        (function (t) {
          const e = Ye.navigator;
          if (!e) {
            return;
          }
          const n = e.connection;
          if (n) {
            if (n.effectiveType) {
              t.setAttribute("effectiveConnectionType", n.effectiveType);
            }
            if (n.type) {
              t.setAttribute("connectionType", n.type);
            }
            if (_s(n.rtt)) {
              Ms["connection.rtt"] = {
                value: n.rtt,
                unit: "millisecond",
              };
            }
          }
          if (_s(e.deviceMemory)) {
            t.setAttribute("deviceMemory", `${e.deviceMemory} GB`);
          }
          if (_s(e.hardwareConcurrency)) {
            t.setAttribute(
              "hardwareConcurrency",
              String(e.hardwareConcurrency),
            );
          }
        })(t);
        if (s === "pageload") {
          (function (t) {
            const e = Er();
            if (!e) {
              return;
            }
            const { responseStart: n, requestStart: r } = e;
            if (r <= n) {
              if (Xe) {
                w.kg.log("[Measurements] Adding TTFB Request Time");
              }
              t["ttfb.requestTime"] = {
                value: n - r,
                unit: "millisecond",
              };
            }
          })(Ms);
          ["fcp", "fp", "lcp"].forEach((t) => {
            const e = Ms[t];
            if (!e || !i || n >= i) {
              return;
            }
            const r = e.value;
            const s = n + ks(r);
            const o = Math.abs((s - i) * 1000);
            const a = o - r;
            if (Xe) {
              w.kg.log(
                `[Measurements] Normalized ${t} from ${r} to ${o} (${a})`,
              );
            }
            e.value = o;
          });
          const e = Ms["mark.fid"];
          if (e && Ms.fid) {
            ws(t, e.value, e.value + ks(Ms.fid.value), {
              name: "first input delay",
              op: "ui.action",
              attributes: {
                [Lt]: "auto.ui.browser.metrics",
              },
            });
            delete Ms["mark.fid"];
          }
          if (!("fcp" in Ms)) {
            delete Ms.cls;
          }
          Object.entries(Ms).forEach(([t, e]) => {
            (function (t, e, n) {
              const r = ce();
              const s = r && ae(r);
              if (s) {
                s.addEvent(t, {
                  [Ft]: e,
                  [jt]: n,
                });
              }
            })(t, e.value, e.unit);
          });
          (function (t) {
            if (Es) {
              if (Xe) {
                w.kg.log("[Measurements] Adding LCP Data");
              }
              if (Es.element) {
                t.setAttribute("lcp.element", (0, Xn.Rt)(Es.element));
              }
              if (Es.id) {
                t.setAttribute("lcp.id", Es.id);
              }
              if (Es.url) {
                t.setAttribute("lcp.url", Es.url.trim().slice(0, 200));
              }
              t.setAttribute("lcp.size", Es.size);
            }
            if (Ts && Ts.sources) {
              if (Xe) {
                w.kg.log("[Measurements] Adding CLS Data");
              }
              Ts.sources.forEach((e, n) =>
                t.setAttribute(`cls.source.${n + 1}`, (0, Xn.Rt)(e.node)),
              );
            }
          })(t);
        }
        Es = undefined;
        Ts = undefined;
        Ms = {};
      }
      function Rs(t, e, n, r, s, i) {
        const o = i ? e[i] : e[`${n}End`];
        const a = e[`${n}Start`];
        if (a && o) {
          ws(t, r + ks(a), r + ks(o), {
            op: "browser",
            name: s || n,
            attributes: {
              [Lt]: "auto.ui.browser.metrics",
            },
          });
        }
      }
      function Ps(t, e, n, r) {
        const s = e[n];
        if (s != null && s < 2147483647) {
          t[r] = s;
        }
      }
      const Os = [];
      const Ds = new Map();
      function Ls() {
        if (xs() && _.Z1) {
          const t = ls(({ metric: t }) => {
            const e = (0, S.s3)();
            if (!e || t.value == null) {
              return;
            }
            const n = t.entries.find(
              (e) => e.duration === t.value && Ns[e.name],
            );
            if (!n) {
              return;
            }
            const { interactionId: r } = n;
            const s = Ns[n.name];
            const i = e.getOptions();
            const o = ks(_.Z1 + n.startTime);
            const a = ks(t.value);
            const c = (0, S.nZ)();
            const u = ce();
            const l = u ? ae(u) : undefined;
            const d =
              (r != null ? Ds.get(r) : undefined) ||
              (l ? te(l).description : c.getScopeData().transactionName);
            const h = c.getUser();
            const p = e.getIntegrationByName("Replay");
            const f = p && p.getReplayId();
            const m =
              h !== undefined ? h.email || h.id || h.ip_address : undefined;
            let g;
            try {
              g = c.getScopeData().contexts.profile.profile_id;
            } catch (t) {}
            const y = yr({
              name: (0, Xn.Rt)(n.target),
              op: `ui.interaction.${s}`,
              attributes: (0, E.Jr)({
                release: i.release,
                environment: i.environment,
                transaction: d,
                [$t]: t.value,
                [Lt]: "auto.http.browser.inp",
                user: m || undefined,
                profile_id: g || undefined,
                replay_id: f || undefined,
              }),
              startTime: o,
              experimental: {
                standalone: true,
              },
            });
            y.addEvent("inp", {
              [jt]: "millisecond",
              [Ft]: t.value,
            });
            y.end(o + a);
          });
          return () => {
            t();
          };
        }
        return () => {};
      }
      const Ns = {
        click: "click",
        pointerdown: "click",
        pointerup: "click",
        mousedown: "click",
        mouseup: "click",
        touchstart: "click",
        touchend: "click",
        mouseover: "hover",
        mouseout: "hover",
        mouseenter: "hover",
        mouseleave: "hover",
        pointerover: "hover",
        pointerout: "hover",
        pointerenter: "hover",
        pointerleave: "hover",
        dragstart: "drag",
        dragend: "drag",
        drag: "drag",
        dragenter: "drag",
        dragleave: "drag",
        dragover: "drag",
        drop: "drag",
        keydown: "press",
        keyup: "press",
        keypress: "press",
        input: "press",
      };
      const js = {
        idleTimeout: 1000,
        finalTimeout: 30000,
        childSpanTimeout: 15000,
      };
      function Fs(t, e = {}) {
        const n = new Map();
        let r;
        let s = false;
        let i = "externalFinish";
        let o = !e.disableAutoFinish;
        const {
          idleTimeout: a = js.idleTimeout,
          finalTimeout: c = js.finalTimeout,
          childSpanTimeout: u = js.childSpanTimeout,
          beforeSpanEnd: l,
        } = e;
        const d = (0, S.s3)();
        if (!d || !ar()) {
          return new cr();
        }
        const h = (0, S.nZ)();
        const p = ce();
        const f = (function (t) {
          const e = yr(t);
          (0, Xt.D)((0, S.nZ)(), e);
          if (kt) {
            w.kg.log("[Tracing] Started span is an idle span");
          }
          return e;
        })(t);
        function m() {
          if (r) {
            clearTimeout(r);
            r = undefined;
          }
        }
        function g(t) {
          m();
          r = setTimeout(() => {
            if (!s && n.size === 0 && o) {
              i = "idleTimeout";
              f.end(t);
            }
          }, a);
        }
        function y(t) {
          r = setTimeout(() => {
            if (!s && o) {
              i = "heartbeatFailed";
              f.end(t);
            }
          }, u);
        }
        function v(t) {
          s = true;
          n.clear();
          (0, Xt.D)(h, p);
          const e = te(f);
          const { start_timestamp: r } = e;
          if (!r) {
            return;
          }
          if (!(e.data || {})[Nt]) {
            f.setAttribute(Nt, i);
          }
          w.kg.log(`[Tracing] Idle span "${e.op}" finished`);
          const o = oe(f).filter((t) => t !== f);
          let u = 0;
          o.forEach((e) => {
            if (e.isRecording()) {
              e.setStatus({
                code: 2,
                message: "cancelled",
              });
              e.end(t);
              if (kt) {
                w.kg.log(
                  "[Tracing] Cancelling span since span ended early",
                  JSON.stringify(e, undefined, 2),
                );
              }
            }
            const n = te(e);
            const { timestamp: r = 0, start_timestamp: s = 0 } = n;
            const i = s <= t;
            const o = r - s <= (c + a) / 1000;
            if (kt) {
              const t = JSON.stringify(e, undefined, 2);
              if (i) {
                if (!o) {
                  w.kg.log(
                    "[Tracing] Discarding span since it finished after idle span final timeout",
                    t,
                  );
                }
              } else {
                w.kg.log(
                  "[Tracing] Discarding span since it happened after idle span was finished",
                  t,
                );
              }
            }
            if (!o || !i) {
              (function (t, e) {
                if (t[re]) {
                  t[re].delete(e);
                }
              })(f, e);
              u++;
            }
          });
          if (u > 0) {
            f.setAttribute("sentry.idle_span_discarded_spans", u);
          }
        }
        f.end = new Proxy(f.end, {
          apply(t, e, n) {
            if (l) {
              l(f);
            }
            const [r, ...s] = n;
            const i = Zt(r || (0, _.ph)());
            const o = oe(f).filter((t) => t !== f);
            if (!o.length) {
              v(i);
              return Reflect.apply(t, e, [i, ...s]);
            }
            const a = o.map((t) => te(t).timestamp).filter((t) => !!t);
            const u = a.length ? Math.max(...a) : undefined;
            const d = te(f).start_timestamp;
            const h = Math.min(
              d ? d + c / 1000 : Infinity,
              Math.max(d || -Infinity, Math.min(i, u || Infinity)),
            );
            v(h);
            return Reflect.apply(t, e, [h, ...s]);
          },
        });
        d.on("spanStart", (t) => {
          if (s || t === f || te(t).timestamp) {
            return;
          }
          var e;
          if (oe(f).includes(t)) {
            e = t.spanContext().spanId;
            m();
            n.set(e, true);
            y((0, _.ph)() + u / 1000);
          }
        });
        d.on("spanEnd", (t) => {
          var e;
          if (!s) {
            e = t.spanContext().spanId;
            if (n.has(e)) {
              n.delete(e);
            }
            if (n.size === 0) {
              g((0, _.ph)() + a / 1000);
            }
          }
        });
        d.on("idleSpanEnableAutoFinish", (t) => {
          if (t === f) {
            o = true;
            g();
            if (n.size) {
              y();
            }
          }
        });
        if (!e.disableAutoFinish) {
          g();
        }
        setTimeout(() => {
          if (!s) {
            f.setStatus({
              code: 2,
              message: "deadline_exceeded",
            });
            i = "finalTimeout";
            f.end();
          }
        }, c);
        return f;
      }
      let $s = null;
      function Bs() {
        $s = ut.n.onerror;
        ut.n.onerror = function (t, e, n, r, s) {
          In("error", {
            column: r,
            error: s,
            line: n,
            msg: t,
            url: e,
          });
          return !!$s && !$s.__SENTRY_LOADER__ && $s.apply(this, arguments);
        };
        ut.n.onerror.__SENTRY_INSTRUMENTED__ = true;
      }
      let Vs = null;
      function Us() {
        Vs = ut.n.onunhandledrejection;
        ut.n.onunhandledrejection = function (t) {
          In("unhandledrejection", t);
          return !Vs || !!Vs.__SENTRY_LOADER__ || Vs.apply(this, arguments);
        };
        ut.n.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
      }
      let zs = false;
      function Ws() {
        if (!zs) {
          zs = true;
          (function (t) {
            const e = "error";
            Cn(e, t);
            Mn(e, Bs);
          })(qs);
          (function (t) {
            const e = "unhandledrejection";
            Cn(e, t);
            Mn(e, Us);
          })(qs);
        }
      }
      function qs() {
        const t = ce();
        const e = t && ae(t);
        if (e) {
          const t = "internal_error";
          if (kt) {
            w.kg.log(`[Tracing] Root span: ${t} -> Global error occured`);
          }
          e.setStatus({
            code: 2,
            message: t,
          });
        }
      }
      qs.tag = "sentry_tracingErrorCallback";
      var Hs = n(51788);
      function Ks(t, e, n, r, s = "auto.http.browser") {
        if (!t.fetchData) {
          return;
        }
        const i = ar() && e(t.fetchData.url);
        if (t.endTimestamp && i) {
          const e = t.fetchData.__span;
          if (!e) {
            return;
          }
          const n = r[e];
          if (n) {
            (function (t, e) {
              if (e.response) {
                Kt(t, e.response.status);
                const n =
                  e.response &&
                  e.response.headers &&
                  e.response.headers.get("content-length");
                if (n) {
                  const e = parseInt(n);
                  if (e > 0) {
                    t.setAttribute("http.response_content_length", e);
                  }
                }
              } else if (e.error) {
                t.setStatus({
                  code: 2,
                  message: "internal_error",
                });
              }
              t.end();
            })(n, t);
            delete r[e];
          }
          return;
        }
        const o = (0, S.nZ)();
        const a = (0, S.s3)();
        const { method: c, url: u } = t.fetchData;
        const l = (function (t) {
          try {
            return new URL(t).href;
          } catch (t) {
            return;
          }
        })(u);
        const d = l ? Jn(l).host : undefined;
        const h = !!ce();
        const p =
          i && h
            ? yr({
                name: `${c} ${u}`,
                attributes: {
                  url: u,
                  type: "fetch",
                  "http.method": c,
                  "http.url": l,
                  "server.address": d,
                  [Lt]: s,
                  [Dt]: "http.client",
                },
              })
            : new cr();
        t.fetchData.__span = p.spanContext().spanId;
        r[p.spanContext().spanId] = p;
        if (n(t.fetchData.url) && a) {
          const e = t.args[0];
          t.args[1] = t.args[1] || {};
          const n = t.args[1];
          n.headers = (function (t, e, n, r, s) {
            const i = (0, S.aF)();
            const {
              traceId: o,
              spanId: a,
              sampled: c,
              dsc: u,
            } = {
              ...i.getPropagationContext(),
              ...n.getPropagationContext(),
            };
            const l = s ? Jt(s) : Ut(o, a, c);
            const d = It(u || (s ? he(s) : de(o, e)));
            const h =
              r.headers ||
              (typeof Request != "undefined" && (0, X.V9)(t, Request)
                ? t.headers
                : undefined);
            if (h) {
              if (typeof Headers != "undefined" && (0, X.V9)(h, Headers)) {
                const t = new Headers(h);
                t.append("sentry-trace", l);
                if (d) {
                  t.append(Et, d);
                }
                return t;
              }
              if (Array.isArray(h)) {
                const t = [...h, ["sentry-trace", l]];
                if (d) {
                  t.push([Et, d]);
                }
                return t;
              }
              {
                const t = "baggage" in h ? h.baggage : undefined;
                const e = [];
                if (Array.isArray(t)) {
                  e.push(...t);
                } else if (t) {
                  e.push(t);
                }
                if (d) {
                  e.push(d);
                }
                return {
                  ...h,
                  "sentry-trace": l,
                  baggage: e.length > 0 ? e.join(",") : undefined,
                };
              }
            }
            return {
              "sentry-trace": l,
              baggage: d,
            };
          })(e, a, o, n, ar() && h ? p : undefined);
        }
        return p;
      }
      const Xs = {
        traceFetch: true,
        traceXHR: true,
        enableHTTPTimings: true,
      };
      function Ys(t) {
        const {
          traceFetch: e,
          traceXHR: n,
          shouldCreateSpanForRequest: r,
          enableHTTPTimings: s,
          tracePropagationTargets: i,
        } = {
          traceFetch: Xs.traceFetch,
          traceXHR: Xs.traceXHR,
          ...t,
        };
        const o = typeof r == "function" ? r : (t) => true;
        const a = (t) =>
          (function (t, e) {
            const n = ze.location && ze.location.href;
            if (n) {
              let r;
              let s;
              try {
                r = new URL(t, n);
                s = new URL(n).origin;
              } catch (t) {
                return false;
              }
              const i = r.origin === s;
              if (e) {
                return (
                  (0, ve.U0)(r.toString(), e) ||
                  (i && (0, ve.U0)(r.pathname, e))
                );
              } else {
                return i;
              }
            }
            {
              const n = !!t.match(/^\/(?!\/)/);
              if (e) {
                return (0, ve.U0)(t, e);
              } else {
                return n;
              }
            }
          })(t, i);
        const c = {};
        if (e) {
          Wn((t) => {
            const e = Ks(t, o, a, c);
            if (e) {
              const n = Zs(t.fetchData.url);
              const r = n ? Jn(n).host : undefined;
              e.setAttributes({
                "http.url": n,
                "server.address": r,
              });
            }
            if (s && e) {
              Gs(e);
            }
          });
        }
        if (n) {
          jn((t) => {
            const e = (function (t, e, n, r) {
              const s = t.xhr;
              const i = s && s[Nn];
              if (!s || s.__sentry_own_request__ || !i) {
                return;
              }
              const o = ar() && e(i.url);
              if (t.endTimestamp && o) {
                const t = s.__sentry_xhr_span_id__;
                if (!t) {
                  return;
                }
                const e = r[t];
                if (e && i.status_code !== undefined) {
                  Kt(e, i.status_code);
                  e.end();
                  delete r[t];
                }
                return;
              }
              const a = Zs(i.url);
              const c = a ? Jn(a).host : undefined;
              const u = !!ce();
              const l =
                o && u
                  ? yr({
                      name: `${i.method} ${i.url}`,
                      attributes: {
                        type: "xhr",
                        "http.method": i.method,
                        "http.url": a,
                        url: i.url,
                        "server.address": c,
                        [Lt]: "auto.http.browser",
                        [Dt]: "http.client",
                      },
                    })
                  : new cr();
              s.__sentry_xhr_span_id__ = l.spanContext().spanId;
              r[s.__sentry_xhr_span_id__] = l;
              const d = (0, S.s3)();
              if (s.setRequestHeader && n(i.url) && d) {
                (function (t, e, n) {
                  const r = (0, S.nZ)();
                  const s = (0, S.aF)();
                  const {
                    traceId: i,
                    spanId: o,
                    sampled: a,
                    dsc: c,
                  } = {
                    ...s.getPropagationContext(),
                    ...r.getPropagationContext(),
                  };
                  const u = n && ar() ? Jt(n) : Ut(i, o, a);
                  const l = It(c || (n ? he(n) : de(i, e)));
                  (function (t, e, n) {
                    try {
                      t.setRequestHeader("sentry-trace", e);
                      if (n) {
                        t.setRequestHeader(Et, n);
                      }
                    } catch (t) {}
                  })(t, u, l);
                })(s, d, ar() && u ? l : undefined);
              }
              return l;
            })(t, o, a, c);
            if (s && e) {
              Gs(e);
            }
          });
        }
      }
      function Gs(t) {
        const { url: e } = te(t).data || {};
        if (!e || typeof e != "string") {
          return;
        }
        const n = ds("resource", ({ entries: r }) => {
          r.forEach((r) => {
            if (
              (function (t) {
                return (
                  t.entryType === "resource" &&
                  "initiatorType" in t &&
                  typeof t.nextHopProtocol == "string" &&
                  (t.initiatorType === "fetch" ||
                    t.initiatorType === "xmlhttprequest")
                );
              })(r) &&
              r.name.endsWith(e)
            ) {
              (function (t) {
                const { name: e, version: n } = (function (t) {
                  let e = "unknown";
                  let n = "unknown";
                  let r = "";
                  for (const s of t) {
                    if (s === "/") {
                      [e, n] = t.split("/");
                      break;
                    }
                    if (!isNaN(Number(s))) {
                      e = r === "h" ? "http" : r;
                      n = t.split(r)[1];
                      break;
                    }
                    r += s;
                  }
                  if (r === t) {
                    e = r;
                  }
                  return {
                    name: e,
                    version: n,
                  };
                })(t.nextHopProtocol);
                const r = [];
                r.push(
                  ["network.protocol.version", n],
                  ["network.protocol.name", e],
                );
                if (!_.Z1) {
                  return r;
                }
                return [
                  ...r,
                  ["http.request.redirect_start", Js(t.redirectStart)],
                  ["http.request.fetch_start", Js(t.fetchStart)],
                  ["http.request.domain_lookup_start", Js(t.domainLookupStart)],
                  ["http.request.domain_lookup_end", Js(t.domainLookupEnd)],
                  ["http.request.connect_start", Js(t.connectStart)],
                  [
                    "http.request.secure_connection_start",
                    Js(t.secureConnectionStart),
                  ],
                  ["http.request.connection_end", Js(t.connectEnd)],
                  ["http.request.request_start", Js(t.requestStart)],
                  ["http.request.response_start", Js(t.responseStart)],
                  ["http.request.response_end", Js(t.responseEnd)],
                ];
              })(r).forEach((e) => t.setAttribute(...e));
              setTimeout(n);
            }
          });
        });
      }
      function Js(t = 0) {
        return ((_.Z1 || performance.timeOrigin) + t) / 1000;
      }
      function Zs(t) {
        try {
          return new URL(t, ze.location.origin).href;
        } catch (t) {
          return;
        }
      }
      const Qs = {
        ...js,
        instrumentNavigation: true,
        instrumentPageLoad: true,
        markBackgroundSpan: true,
        enableLongTask: true,
        enableInp: true,
        _experiments: {},
        ...Xs,
      };
      const ti = (t = {}) => {
        Ws();
        const {
          enableInp: e,
          enableLongTask: n,
          _experiments: { enableInteractions: r },
          beforeStartSpan: s,
          idleTimeout: i,
          finalTimeout: o,
          childSpanTimeout: a,
          markBackgroundSpan: c,
          traceFetch: u,
          traceXHR: l,
          shouldCreateSpanForRequest: d,
          enableHTTPTimings: h,
          instrumentPageLoad: p,
          instrumentNavigation: f,
        } = {
          ...Qs,
          ...t,
        };
        const m = Is();
        if (e) {
          Ls();
        }
        if (n) {
          ds("longtask", ({ entries: t }) => {
            for (const e of t) {
              if (!ce()) {
                return;
              }
              const t = ks(_.Z1 + e.startTime);
              const n = ks(e.duration);
              const r = yr({
                name: "Main UI thread blocked",
                op: "ui.long-task",
                startTime: t,
                attributes: {
                  [Lt]: "auto.ui.browser.metrics",
                },
              });
              if (r) {
                r.end(t + n);
              }
            }
          });
        }
        if (r) {
          ds("event", ({ entries: t }) => {
            for (const e of t) {
              if (!ce()) {
                return;
              }
              if (e.name === "click") {
                const t = ks(_.Z1 + e.startTime);
                const n = ks(e.duration);
                const r = {
                  name: (0, Xn.Rt)(e.target),
                  op: `ui.interaction.${e.name}`,
                  startTime: t,
                  attributes: {
                    [Lt]: "auto.ui.browser.metrics",
                  },
                };
                const s = (0, Xn.iY)(e.target);
                if (s) {
                  r.attributes["ui.component_name"] = s;
                }
                const i = yr(r);
                if (i) {
                  i.end(t + n);
                }
              }
            }
          });
        }
        const g = {
          name: undefined,
          source: undefined,
        };
        function y(t, e) {
          const n = e.op === "pageload";
          const r = s ? s(e) : e;
          const c = r.attributes || {};
          if (e.name !== r.name) {
            c[Pt] = "custom";
            r.attributes = c;
          }
          g.name = r.name;
          g.source = c[Pt];
          const u = Fs(r, {
            idleTimeout: i,
            finalTimeout: o,
            childSpanTimeout: a,
            disableAutoFinish: n,
            beforeSpanEnd: (t) => {
              m();
              As(t);
            },
          });
          function l() {
            if (["interactive", "complete"].includes(ze.document.readyState)) {
              t.emit("idleSpanEnableAutoFinish", u);
            }
          }
          if (n && ze.document) {
            ze.document.addEventListener("readystatechange", () => {
              l();
            });
            l();
          }
          return u;
        }
        return {
          name: "BrowserTracing",
          afterAllSetup(t) {
            let n;
            let s = ze.location && ze.location.href;
            t.on("startNavigationSpan", (e) => {
              if ((0, S.s3)() === t) {
                if (n) {
                  if (Oe) {
                    w.kg.log(
                      `[Tracing] Finishing current root span with op: ${te(n).op}`,
                    );
                  }
                  n.end();
                }
                n = y(t, {
                  op: "navigation",
                  ...e,
                });
              }
            });
            t.on("startPageLoadSpan", (e, r = {}) => {
              if ((0, S.s3)() !== t) {
                return;
              }
              if (n) {
                if (Oe) {
                  w.kg.log(
                    `[Tracing] Finishing current root span with op: ${te(n).op}`,
                  );
                }
                n.end();
              }
              const s = Vt(
                r.sentryTrace || ei("sentry-trace"),
                r.baggage || ei("baggage"),
              );
              (0, S.nZ)().setPropagationContext(s);
              n = y(t, {
                op: "pageload",
                ...e,
              });
            });
            t.on("spanEnd", (t) => {
              const e = te(t).op;
              if (t !== ae(t) || (e !== "navigation" && e !== "pageload")) {
                return;
              }
              const n = (0, S.nZ)();
              const r = n.getPropagationContext();
              n.setPropagationContext({
                ...r,
                sampled: r.sampled !== undefined ? r.sampled : ee(t),
                dsc: r.dsc || he(t),
              });
            });
            if (ze.location) {
              if (p) {
                (function (t, e, n) {
                  t.emit("startPageLoadSpan", e, n);
                  (0, S.nZ)().setTransactionName(e.name);
                  const r = ce();
                  if (r) {
                    te(r).op;
                  }
                })(t, {
                  name: ze.location.pathname,
                  startTime: _.Z1 ? _.Z1 / 1000 : undefined,
                  attributes: {
                    [Pt]: "url",
                    [Lt]: "auto.pageload.browser",
                  },
                });
              }
              if (f) {
                Vn(({ to: e, from: n }) => {
                  if (n === undefined && s && s.indexOf(e) !== -1) {
                    s = undefined;
                  } else if (n !== e) {
                    s = undefined;
                    (function (t, e) {
                      (0, S.aF)().setPropagationContext((0, Hs.Q)());
                      (0, S.nZ)().setPropagationContext((0, Hs.Q)());
                      t.emit("startNavigationSpan", e);
                      (0, S.nZ)().setTransactionName(e.name);
                      const n = ce();
                      if (n) {
                        te(n).op;
                      }
                    })(t, {
                      name: ze.location.pathname,
                      attributes: {
                        [Pt]: "url",
                        [Lt]: "auto.navigation.browser",
                      },
                    });
                  }
                });
              }
            }
            if (c) {
              if (ze && ze.document) {
                ze.document.addEventListener("visibilitychange", () => {
                  const t = ce();
                  if (!t) {
                    return;
                  }
                  const e = ae(t);
                  if (ze.document.hidden && e) {
                    const t = "cancelled";
                    const { op: n, status: r } = te(e);
                    if (Oe) {
                      w.kg.log(
                        `[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${n}`,
                      );
                    }
                    if (!r) {
                      e.setStatus({
                        code: 2,
                        message: t,
                      });
                    }
                    e.setAttribute(
                      "sentry.cancellation_reason",
                      "document.hidden",
                    );
                    e.end();
                  }
                });
              } else if (Oe) {
                w.kg.warn(
                  "[Tracing] Could not set up background tab detection due to lack of global document",
                );
              }
            }
            if (r) {
              (function (t, e, n, r) {
                let s;
                const i = () => {
                  const i = "ui.action.click";
                  const o = ce();
                  const a = o && ae(o);
                  if (a) {
                    const t = te(a).op;
                    if (["navigation", "pageload"].includes(t)) {
                      if (Oe) {
                        w.kg.warn(
                          `[Tracing] Did not create ${i} span because a pageload or navigation span is in progress.`,
                        );
                      }
                      return;
                    }
                  }
                  if (s) {
                    s.setAttribute(Nt, "interactionInterrupted");
                    s.end();
                    s = undefined;
                  }
                  if (r.name) {
                    s = Fs(
                      {
                        name: r.name,
                        op: i,
                        attributes: {
                          [Pt]: r.source || "url",
                        },
                      },
                      {
                        idleTimeout: t,
                        finalTimeout: e,
                        childSpanTimeout: n,
                      },
                    );
                  } else if (Oe) {
                    w.kg.warn(
                      `[Tracing] Did not create ${i} transaction because _latestRouteName is missing.`,
                    );
                  }
                };
                if (ze.document) {
                  addEventListener("click", i, {
                    once: false,
                    capture: true,
                  });
                }
              })(i, o, a, g);
            }
            if (e) {
              (function (t) {
                const e = ({ entries: e }) => {
                  e.forEach((e) => {
                    if (
                      !(function (t) {
                        return "duration" in t;
                      })(e) ||
                      !t.name
                    ) {
                      return;
                    }
                    const n = e.interactionId;
                    if (n != null && !Ds.has(n)) {
                      if (Os.length > 10) {
                        const t = Os.shift();
                        Ds.delete(t);
                      }
                      Os.push(n);
                      Ds.set(n, t.name);
                    }
                  });
                };
                ds("event", e);
                ds("first-input", e);
              })(g);
            }
            Ys({
              traceFetch: u,
              traceXHR: l,
              tracePropagationTargets: t.getOptions().tracePropagationTargets,
              shouldCreateSpanForRequest: d,
              enableHTTPTimings: h,
            });
          },
        };
      };
      function ei(t) {
        const e = (0, Xn.qT)(`meta[name=${t}]`);
        if (e) {
          return e.getAttribute("content");
        } else {
          return undefined;
        }
      }
      function ni(t) {
        let e;
        let n = t[0];
        let r = 1;
        while (r < t.length) {
          const s = t[r];
          const i = t[r + 1];
          r += 2;
          if ((s === "optionalAccess" || s === "optionalCall") && n == null) {
            return;
          }
          if (s === "access" || s === "optionalAccess") {
            e = n;
            n = i(n);
          } else if (s === "call" || s === "optionalCall") {
            n = i((...t) => n.call(e, ...t));
            e = undefined;
          }
        }
        return n;
      }
      function ri(t, e) {
        const n = e && e.getDsn();
        const r = e && e.getOptions().tunnel;
        return (
          (function (t, e) {
            return !!e && t.includes(e.host);
          })(t, n) ||
          (function (t, e) {
            if (!e) {
              return false;
            }
            return si(t) === si(e);
          })(t, r)
        );
      }
      function si(t) {
        if (t[t.length - 1] === "/") {
          return t.slice(0, -1);
        } else {
          return t;
        }
      }
      function ii(t, e) {
        return (0, S.nZ)().captureException(t, Te(e));
      }
      function oi() {
        return (
          (typeof __SENTRY_BROWSER_BUNDLE__ == "undefined" ||
            !__SENTRY_BROWSER_BUNDLE__) &&
          Object.prototype.toString.call(
            typeof process != "undefined" ? process : 0,
          ) === "[object process]"
        );
      }
      function ai() {
        return (
          typeof window != "undefined" &&
          (!oi() ||
            (ut.n.process !== undefined && ut.n.process.type === "renderer"))
        );
      }
      const ci = ut.n;
      const ui = "sentryReplaySession";
      const li = "Unable to send Replay";
      const di = 150000;
      const hi = 5000;
      const pi = 20000000;
      const fi = 3600000;
      function mi(t) {
        let e;
        let n = t[0];
        let r = 1;
        while (r < t.length) {
          const s = t[r];
          const i = t[r + 1];
          r += 2;
          if ((s === "optionalAccess" || s === "optionalCall") && n == null) {
            return;
          }
          if (s === "access" || s === "optionalAccess") {
            e = n;
            n = i(n);
          } else if (s === "call" || s === "optionalCall") {
            n = i((...t) => n.call(e, ...t));
            e = undefined;
          }
        }
        return n;
      }
      var gi;
      var yi;
      function vi(t) {
        const e = mi([t, "optionalAccess", (t) => t.host]);
        return Boolean(mi([e, "optionalAccess", (t) => t.shadowRoot]) === t);
      }
      function bi(t) {
        return Object.prototype.toString.call(t) === "[object ShadowRoot]";
      }
      function Si(t) {
        try {
          const n = t.rules || t.cssRules;
          if (n) {
            if (
              (e = Array.from(n, _i).join("")).includes(
                " background-clip: text;",
              ) &&
              !e.includes(" -webkit-background-clip: text;")
            ) {
              e = e.replace(
                " background-clip: text;",
                " -webkit-background-clip: text; background-clip: text;",
              );
            }
            return e;
          } else {
            return null;
          }
        } catch (t) {
          return null;
        }
        var e;
      }
      function _i(t) {
        let e;
        if (
          (function (t) {
            return "styleSheet" in t;
          })(t)
        ) {
          try {
            e =
              Si(t.styleSheet) ||
              (function (t) {
                const { cssText: e } = t;
                if (e.split('"').length < 3) {
                  return e;
                }
                const n = ["@import", `url(${JSON.stringify(t.href)})`];
                if (t.layerName === "") {
                  n.push("layer");
                } else if (t.layerName) {
                  n.push(`layer(${t.layerName})`);
                }
                if (t.supportsText) {
                  n.push(`supports(${t.supportsText})`);
                }
                if (t.media.length) {
                  n.push(t.media.mediaText);
                }
                return n.join(" ") + ";";
              })(t);
          } catch (t) {}
        } else if (
          (function (t) {
            return "selectorText" in t;
          })(t) &&
          t.selectorText.includes(":")
        ) {
          return (function (t) {
            const e = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
            return t.replace(e, "$1\\$2");
          })(t.cssText);
        }
        return e || t.cssText;
      }
      (yi = gi ||= {})[(yi.Document = 0)] = "Document";
      yi[(yi.DocumentType = 1)] = "DocumentType";
      yi[(yi.Element = 2)] = "Element";
      yi[(yi.Text = 3)] = "Text";
      yi[(yi.CDATA = 4)] = "CDATA";
      yi[(yi.Comment = 5)] = "Comment";
      class wi {
        constructor() {
          this.idNodeMap = new Map();
          this.nodeMetaMap = new WeakMap();
        }
        getId(t) {
          if (!t) {
            return -1;
          }
          const e = mi([
            this,
            "access",
            (t) => t.getMeta,
            "call",
            (e) => e(t),
            "optionalAccess",
            (t) => t.id,
          ]);
          r = () => -1;
          return e ?? r();
          var r;
        }
        getNode(t) {
          return this.idNodeMap.get(t) || null;
        }
        getIds() {
          return Array.from(this.idNodeMap.keys());
        }
        getMeta(t) {
          return this.nodeMetaMap.get(t) || null;
        }
        removeNodeFromMap(t) {
          const e = this.getId(t);
          this.idNodeMap.delete(e);
          if (t.childNodes) {
            t.childNodes.forEach((t) => this.removeNodeFromMap(t));
          }
        }
        has(t) {
          return this.idNodeMap.has(t);
        }
        hasNode(t) {
          return this.nodeMetaMap.has(t);
        }
        add(t, e) {
          const n = e.id;
          this.idNodeMap.set(n, t);
          this.nodeMetaMap.set(t, e);
        }
        replace(t, e) {
          const n = this.getNode(t);
          if (n) {
            const t = this.nodeMetaMap.get(n);
            if (t) {
              this.nodeMetaMap.set(e, t);
            }
          }
          this.idNodeMap.set(t, e);
        }
        reset() {
          this.idNodeMap = new Map();
          this.nodeMetaMap = new WeakMap();
        }
      }
      function xi({ maskInputOptions: t, tagName: e, type: n }) {
        if (e === "OPTION") {
          e = "SELECT";
        }
        return Boolean(
          t[e.toLowerCase()] ||
          (n && t[n]) ||
          n === "password" ||
          (e === "INPUT" && !n && t.text),
        );
      }
      function ki({ isMasked: t, element: e, value: n, maskInputFn: r }) {
        let s = n || "";
        if (t) {
          if (r) {
            s = r(s, e);
          }
          return "*".repeat(s.length);
        } else {
          return s;
        }
      }
      function Ei(t) {
        return t.toLowerCase();
      }
      function Ti(t) {
        return t.toUpperCase();
      }
      const Ci = "__rrweb_original__";
      function Mi(t) {
        const e = t.type;
        if (t.hasAttribute("data-rr-is-password")) {
          return "password";
        } else if (e) {
          return Ei(e);
        } else {
          return null;
        }
      }
      function Ii(t, e, n) {
        if (e !== "INPUT" || (n !== "radio" && n !== "checkbox")) {
          return t.value;
        } else {
          return t.getAttribute("value") || "";
        }
      }
      let Ai = 1;
      const Ri = new RegExp("[^a-z0-9-_:]");
      function Pi() {
        return Ai++;
      }
      let Oi;
      let Di;
      const Li = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
      const Ni = /^(?:[a-z+]+:)?\/\//i;
      const ji = /^www\..*/i;
      const Fi = /^(data:)([^,]*),(.*)/i;
      function $i(t, e) {
        return (t || "").replace(Li, (t, n, r, s, i, o) => {
          const a = r || i || o;
          const c = n || s || "";
          if (!a) {
            return t;
          }
          if (Ni.test(a) || ji.test(a)) {
            return `url(${c}${a}${c})`;
          }
          if (Fi.test(a)) {
            return `url(${c}${a}${c})`;
          }
          if (a[0] === "/") {
            return `url(${c}${
              (function (t) {
                let e = "";
                e =
                  t.indexOf("//") > -1
                    ? t.split("/").slice(0, 3).join("/")
                    : t.split("/")[0];
                e = e.split("?")[0];
                return e;
              })(e) + a
            }${c})`;
          }
          const u = e.split("/");
          const l = a.split("/");
          u.pop();
          for (const t of l) {
            if (t !== ".") {
              if (t === "..") {
                u.pop();
              } else {
                u.push(t);
              }
            }
          }
          return `url(${c}${u.join("/")}${c})`;
        });
      }
      const Bi = /^[^ \t\n\r\u000c]+/;
      const Vi = /^[, \t\n\r\u000c]+/;
      function Ui(t, e) {
        if (!e || e.trim() === "") {
          return e;
        }
        const n = t.createElement("a");
        n.href = e;
        return n.href;
      }
      function zi(t) {
        return Boolean(t.tagName === "svg" || t.ownerSVGElement);
      }
      function Wi() {
        const t = document.createElement("a");
        t.href = "";
        return t.href;
      }
      function qi(t, e, n, r, s, i) {
        if (r) {
          if (
            n === "src" ||
            (n === "href" && (e !== "use" || r[0] !== "#")) ||
            (n === "xlink:href" && r[0] !== "#")
          ) {
            return Ui(t, r);
          } else if (
            n !== "background" ||
            (e !== "table" && e !== "td" && e !== "th")
          ) {
            if (n === "srcset") {
              return (function (t, e) {
                if (e.trim() === "") {
                  return e;
                }
                let n = 0;
                function r(t) {
                  let r;
                  const s = t.exec(e.substring(n));
                  if (s) {
                    r = s[0];
                    n += r.length;
                    return r;
                  } else {
                    return "";
                  }
                }
                const s = [];
                while ((r(Vi), !(n >= e.length))) {
                  let i = r(Bi);
                  if (i.slice(-1) === ",") {
                    i = Ui(t, i.substring(0, i.length - 1));
                    s.push(i);
                  } else {
                    let r = "";
                    i = Ui(t, i);
                    let o = false;
                    while (true) {
                      const t = e.charAt(n);
                      if (t === "") {
                        s.push((i + r).trim());
                        break;
                      }
                      if (o) {
                        if (t === ")") {
                          o = false;
                        }
                      } else {
                        if (t === ",") {
                          n += 1;
                          s.push((i + r).trim());
                          break;
                        }
                        if (t === "(") {
                          o = true;
                        }
                      }
                      r += t;
                      n += 1;
                    }
                  }
                }
                return s.join(", ");
              })(t, r);
            } else if (n === "style") {
              return $i(r, Wi());
            } else if (e === "object" && n === "data") {
              return Ui(t, r);
            } else if (typeof i == "function") {
              return i(n, r, s);
            } else {
              return r;
            }
          } else {
            return Ui(t, r);
          }
        } else {
          return r;
        }
      }
      function Hi(t, e, n) {
        return (t === "video" || t === "audio") && e === "autoplay";
      }
      function Ki(t, e, n = Infinity, r = 0) {
        if (t) {
          if (t.nodeType !== t.ELEMENT_NODE || r > n) {
            return -1;
          } else if (e(t)) {
            return r;
          } else {
            return Ki(t.parentNode, e, n, r + 1);
          }
        } else {
          return -1;
        }
      }
      function Xi(t, e) {
        return (n) => {
          const r = n;
          if (r === null) {
            return false;
          }
          try {
            if (t) {
              if (typeof t == "string") {
                if (r.matches(`.${t}`)) {
                  return true;
                }
              } else if (
                (function (t, e) {
                  for (let n = t.classList.length; n--; ) {
                    const r = t.classList[n];
                    if (e.test(r)) {
                      return true;
                    }
                  }
                  return false;
                })(r, t)
              ) {
                return true;
              }
            }
            return !!e && !!r.matches(e);
          } catch (t) {
            return false;
          }
        };
      }
      function Yi(t, e, n, r, s, i) {
        try {
          const o = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
          if (o === null) {
            return false;
          }
          if (o.tagName === "INPUT") {
            const t = o.getAttribute("autocomplete");
            if (
              [
                "current-password",
                "new-password",
                "cc-number",
                "cc-exp",
                "cc-exp-month",
                "cc-exp-year",
                "cc-csc",
              ].includes(t)
            ) {
              return true;
            }
          }
          let a = -1;
          let c = -1;
          if (i) {
            c = Ki(o, Xi(r, s));
            if (c < 0) {
              return true;
            }
            a = Ki(o, Xi(e, n), c >= 0 ? c : Infinity);
          } else {
            a = Ki(o, Xi(e, n));
            if (a < 0) {
              return false;
            }
            c = Ki(o, Xi(r, s), a >= 0 ? a : Infinity);
          }
          if (a >= 0) {
            return !(c >= 0) || a <= c;
          } else {
            return !(c >= 0) && !!i;
          }
        } catch (t) {}
        return !!i;
      }
      function Gi(t, e) {
        const {
          doc: n,
          mirror: r,
          blockClass: s,
          blockSelector: i,
          unblockSelector: o,
          maskAllText: a,
          maskAttributeFn: c,
          maskTextClass: u,
          unmaskTextClass: l,
          maskTextSelector: d,
          unmaskTextSelector: h,
          inlineStylesheet: p,
          maskInputOptions: f = {},
          maskTextFn: m,
          maskInputFn: g,
          dataURLOptions: y = {},
          inlineImages: v,
          recordCanvas: b,
          keepIframeSrcFn: S,
          newlyAddedElement: _ = false,
        } = e;
        const w = (function (t, e) {
          if (!e.hasNode(t)) {
            return;
          }
          const n = e.getId(t);
          if (n === 1) {
            return undefined;
          } else {
            return n;
          }
        })(n, r);
        switch (t.nodeType) {
          case t.DOCUMENT_NODE:
            if (t.compatMode !== "CSS1Compat") {
              return {
                type: gi.Document,
                childNodes: [],
                compatMode: t.compatMode,
              };
            } else {
              return {
                type: gi.Document,
                childNodes: [],
              };
            }
          case t.DOCUMENT_TYPE_NODE:
            return {
              type: gi.DocumentType,
              name: t.name,
              publicId: t.publicId,
              systemId: t.systemId,
              rootId: w,
            };
          case t.ELEMENT_NODE:
            return (function (t, e) {
              const {
                doc: n,
                blockClass: r,
                blockSelector: s,
                unblockSelector: i,
                inlineStylesheet: o,
                maskInputOptions: a = {},
                maskAttributeFn: c,
                maskInputFn: u,
                dataURLOptions: l = {},
                inlineImages: d,
                recordCanvas: h,
                keepIframeSrcFn: p,
                newlyAddedElement: f = false,
                rootId: m,
                maskAllText: g,
                maskTextClass: y,
                unmaskTextClass: v,
                maskTextSelector: b,
                unmaskTextSelector: S,
              } = e;
              const _ = (function (t, e, n, r) {
                try {
                  if (r && t.matches(r)) {
                    return false;
                  }
                  if (typeof e == "string") {
                    if (t.classList.contains(e)) {
                      return true;
                    }
                  } else {
                    for (let n = t.classList.length; n--; ) {
                      const r = t.classList[n];
                      if (e.test(r)) {
                        return true;
                      }
                    }
                  }
                  if (n) {
                    return t.matches(n);
                  }
                } catch (t) {}
                return false;
              })(t, r, s, i);
              const w = (function (t) {
                if (t instanceof HTMLFormElement) {
                  return "form";
                }
                const e = Ei(t.tagName);
                if (Ri.test(e)) {
                  return "div";
                } else {
                  return e;
                }
              })(t);
              let x = {};
              const k = t.attributes.length;
              for (let e = 0; e < k; e++) {
                const r = t.attributes[e];
                if (r.name && !Hi(w, r.name, r.value)) {
                  x[r.name] = qi(n, w, Ei(r.name), r.value, t, c);
                }
              }
              if (w === "link" && o) {
                const e = Array.from(n.styleSheets).find(
                  (e) => e.href === t.href,
                );
                let r = null;
                if (e) {
                  r = Si(e);
                }
                if (r) {
                  delete x.rel;
                  delete x.href;
                  x._cssText = $i(r, e.href);
                }
              }
              if (
                w === "style" &&
                t.sheet &&
                !(t.innerText || t.textContent || "").trim().length
              ) {
                const e = Si(t.sheet);
                if (e) {
                  x._cssText = $i(e, Wi());
                }
              }
              if (
                w === "input" ||
                w === "textarea" ||
                w === "select" ||
                w === "option"
              ) {
                const e = t;
                const n = Mi(e);
                const r = Ii(e, Ti(w), n);
                const s = e.checked;
                if (n !== "submit" && n !== "button" && r) {
                  const t = Yi(
                    e,
                    y,
                    b,
                    v,
                    S,
                    xi({
                      type: n,
                      tagName: Ti(w),
                      maskInputOptions: a,
                    }),
                  );
                  x.value = ki({
                    isMasked: t,
                    element: e,
                    value: r,
                    maskInputFn: u,
                  });
                }
                if (s) {
                  x.checked = s;
                }
              }
              if (w === "option") {
                if (t.selected && !a.select) {
                  x.selected = true;
                } else {
                  delete x.selected;
                }
              }
              if (w === "canvas" && h) {
                if (t.__context === "2d") {
                  if (
                    !(function (t) {
                      const e = t.getContext("2d");
                      if (!e) {
                        return true;
                      }
                      for (let n = 0; n < t.width; n += 50) {
                        for (let r = 0; r < t.height; r += 50) {
                          const s = e.getImageData;
                          const i = Ci in s ? s[Ci] : s;
                          if (
                            new Uint32Array(
                              i.call(
                                e,
                                n,
                                r,
                                Math.min(50, t.width - n),
                                Math.min(50, t.height - r),
                              ).data.buffer,
                            ).some((t) => t !== 0)
                          ) {
                            return false;
                          }
                        }
                      }
                      return true;
                    })(t)
                  ) {
                    x.rr_dataURL = t.toDataURL(l.type, l.quality);
                  }
                } else if (!("__context" in t)) {
                  const e = t.toDataURL(l.type, l.quality);
                  const n = document.createElement("canvas");
                  n.width = t.width;
                  n.height = t.height;
                  if (e !== n.toDataURL(l.type, l.quality)) {
                    x.rr_dataURL = e;
                  }
                }
              }
              if (w === "img" && d) {
                if (!Oi) {
                  Oi = n.createElement("canvas");
                  Di = Oi.getContext("2d");
                }
                const e = t;
                const r = e.crossOrigin;
                e.crossOrigin = "anonymous";
                const s = () => {
                  e.removeEventListener("load", s);
                  try {
                    Oi.width = e.naturalWidth;
                    Oi.height = e.naturalHeight;
                    Di.drawImage(e, 0, 0);
                    x.rr_dataURL = Oi.toDataURL(l.type, l.quality);
                  } catch (t) {
                    console.warn(
                      `Cannot inline img src=${e.currentSrc}! Error: ${t}`,
                    );
                  }
                  if (r) {
                    x.crossOrigin = r;
                  } else {
                    e.removeAttribute("crossorigin");
                  }
                };
                if (e.complete && e.naturalWidth !== 0) {
                  s();
                } else {
                  e.addEventListener("load", s);
                }
              }
              if (w === "audio" || w === "video") {
                x.rr_mediaState = t.paused ? "paused" : "played";
                x.rr_mediaCurrentTime = t.currentTime;
              }
              if (!f) {
                if (t.scrollLeft) {
                  x.rr_scrollLeft = t.scrollLeft;
                }
                if (t.scrollTop) {
                  x.rr_scrollTop = t.scrollTop;
                }
              }
              if (_) {
                const { width: e, height: n } = t.getBoundingClientRect();
                x = {
                  class: x.class,
                  rr_width: `${e}px`,
                  rr_height: `${n}px`,
                };
              }
              if (w === "iframe" && !p(x.src)) {
                if (!t.contentDocument) {
                  x.rr_src = x.src;
                }
                delete x.src;
              }
              let E;
              try {
                if (customElements.get(w)) {
                  E = true;
                }
              } catch (t) {}
              return {
                type: gi.Element,
                tagName: w,
                attributes: x,
                childNodes: [],
                isSVG: zi(t) || undefined,
                needBlock: _,
                rootId: m,
                isCustom: E,
              };
            })(t, {
              doc: n,
              blockClass: s,
              blockSelector: i,
              unblockSelector: o,
              inlineStylesheet: p,
              maskAttributeFn: c,
              maskInputOptions: f,
              maskInputFn: g,
              dataURLOptions: y,
              inlineImages: v,
              recordCanvas: b,
              keepIframeSrcFn: S,
              newlyAddedElement: _,
              rootId: w,
              maskAllText: a,
              maskTextClass: u,
              unmaskTextClass: l,
              maskTextSelector: d,
              unmaskTextSelector: h,
            });
          case t.TEXT_NODE:
            return (function (t, e) {
              const {
                maskAllText: n,
                maskTextClass: r,
                unmaskTextClass: s,
                maskTextSelector: i,
                unmaskTextSelector: o,
                maskTextFn: a,
                maskInputOptions: c,
                maskInputFn: u,
                rootId: l,
              } = e;
              const d = t.parentNode && t.parentNode.tagName;
              let h = t.textContent;
              const p = d === "STYLE" || undefined;
              const f = d === "SCRIPT" || undefined;
              const m = d === "TEXTAREA" || undefined;
              if (p && h) {
                try {
                  if (!t.nextSibling && !t.previousSibling) {
                    if (
                      mi([
                        t,
                        "access",
                        (t) => t.parentNode,
                        "access",
                        (t) => t.sheet,
                        "optionalAccess",
                        (t) => t.cssRules,
                      ])
                    ) {
                      h = Si(t.parentNode.sheet);
                    }
                  }
                } catch (e) {
                  console.warn(
                    `Cannot get CSS styles from text's parentNode. Error: ${e}`,
                    t,
                  );
                }
                h = $i(h, Wi());
              }
              if (f) {
                h = "SCRIPT_PLACEHOLDER";
              }
              const g = Yi(t, r, i, s, o, n);
              if (!p && !f && !m && !!h && !!g) {
                h = a ? a(h, t.parentElement) : h.replace(/[\S]/g, "*");
              }
              if (m && h && (c.textarea || g)) {
                h = u ? u(h, t.parentNode) : h.replace(/[\S]/g, "*");
              }
              if (d === "OPTION" && h) {
                h = ki({
                  isMasked: Yi(
                    t,
                    r,
                    i,
                    s,
                    o,
                    xi({
                      type: null,
                      tagName: d,
                      maskInputOptions: c,
                    }),
                  ),
                  element: t,
                  value: h,
                  maskInputFn: u,
                });
              }
              return {
                type: gi.Text,
                textContent: h || "",
                isStyle: p,
                rootId: l,
              };
            })(t, {
              maskAllText: a,
              maskTextClass: u,
              unmaskTextClass: l,
              maskTextSelector: d,
              unmaskTextSelector: h,
              maskTextFn: m,
              maskInputOptions: f,
              maskInputFn: g,
              rootId: w,
            });
          case t.CDATA_SECTION_NODE:
            return {
              type: gi.CDATA,
              textContent: "",
              rootId: w,
            };
          case t.COMMENT_NODE:
            return {
              type: gi.Comment,
              textContent: t.textContent || "",
              rootId: w,
            };
          default:
            return false;
        }
      }
      function Ji(t) {
        if (t == null) {
          return "";
        } else {
          return t.toLowerCase();
        }
      }
      function Zi(t, e) {
        const {
          doc: n,
          mirror: r,
          blockClass: s,
          blockSelector: i,
          unblockSelector: o,
          maskAllText: a,
          maskTextClass: c,
          unmaskTextClass: u,
          maskTextSelector: l,
          unmaskTextSelector: d,
          skipChild: h = false,
          inlineStylesheet: p = true,
          maskInputOptions: f = {},
          maskAttributeFn: m,
          maskTextFn: g,
          maskInputFn: y,
          slimDOMOptions: v,
          dataURLOptions: b = {},
          inlineImages: S = false,
          recordCanvas: _ = false,
          onSerialize: w,
          onIframeLoad: x,
          iframeLoadTimeout: k = 5000,
          onStylesheetLoad: E,
          stylesheetLoadTimeout: T = 5000,
          keepIframeSrcFn: C = () => false,
          newlyAddedElement: M = false,
        } = e;
        let { preserveWhiteSpace: I = true } = e;
        const A = Gi(t, {
          doc: n,
          mirror: r,
          blockClass: s,
          blockSelector: i,
          maskAllText: a,
          unblockSelector: o,
          maskTextClass: c,
          unmaskTextClass: u,
          maskTextSelector: l,
          unmaskTextSelector: d,
          inlineStylesheet: p,
          maskInputOptions: f,
          maskAttributeFn: m,
          maskTextFn: g,
          maskInputFn: y,
          dataURLOptions: b,
          inlineImages: S,
          recordCanvas: _,
          keepIframeSrcFn: C,
          newlyAddedElement: M,
        });
        if (!A) {
          console.warn(t, "not serialized");
          return null;
        }
        let R;
        R = r.hasNode(t)
          ? r.getId(t)
          : !(function (t, e) {
                if (e.comment && t.type === gi.Comment) {
                  return true;
                }
                if (t.type === gi.Element) {
                  if (
                    e.script &&
                    (t.tagName === "script" ||
                      (t.tagName === "link" &&
                        (t.attributes.rel === "preload" ||
                          t.attributes.rel === "modulepreload") &&
                        t.attributes.as === "script") ||
                      (t.tagName === "link" &&
                        t.attributes.rel === "prefetch" &&
                        typeof t.attributes.href == "string" &&
                        t.attributes.href.endsWith(".js")))
                  ) {
                    return true;
                  }
                  if (
                    e.headFavicon &&
                    ((t.tagName === "link" &&
                      t.attributes.rel === "shortcut icon") ||
                      (t.tagName === "meta" &&
                        (Ji(t.attributes.name).match(
                          /^msapplication-tile(image|color)$/,
                        ) ||
                          Ji(t.attributes.name) === "application-name" ||
                          Ji(t.attributes.rel) === "icon" ||
                          Ji(t.attributes.rel) === "apple-touch-icon" ||
                          Ji(t.attributes.rel) === "shortcut icon")))
                  ) {
                    return true;
                  }
                  if (t.tagName === "meta") {
                    if (
                      e.headMetaDescKeywords &&
                      Ji(t.attributes.name).match(/^description|keywords$/)
                    ) {
                      return true;
                    }
                    if (
                      e.headMetaSocial &&
                      (Ji(t.attributes.property).match(/^(og|twitter|fb):/) ||
                        Ji(t.attributes.name).match(/^(og|twitter):/) ||
                        Ji(t.attributes.name) === "pinterest")
                    ) {
                      return true;
                    }
                    if (
                      e.headMetaRobots &&
                      (Ji(t.attributes.name) === "robots" ||
                        Ji(t.attributes.name) === "googlebot" ||
                        Ji(t.attributes.name) === "bingbot")
                    ) {
                      return true;
                    }
                    if (
                      e.headMetaHttpEquiv &&
                      t.attributes["http-equiv"] !== undefined
                    ) {
                      return true;
                    }
                    if (
                      e.headMetaAuthorship &&
                      (Ji(t.attributes.name) === "author" ||
                        Ji(t.attributes.name) === "generator" ||
                        Ji(t.attributes.name) === "framework" ||
                        Ji(t.attributes.name) === "publisher" ||
                        Ji(t.attributes.name) === "progid" ||
                        Ji(t.attributes.property).match(/^article:/) ||
                        Ji(t.attributes.property).match(/^product:/))
                    ) {
                      return true;
                    }
                    if (
                      e.headMetaVerification &&
                      (Ji(t.attributes.name) === "google-site-verification" ||
                        Ji(t.attributes.name) === "yandex-verification" ||
                        Ji(t.attributes.name) === "csrf-token" ||
                        Ji(t.attributes.name) === "p:domain_verify" ||
                        Ji(t.attributes.name) === "verify-v1" ||
                        Ji(t.attributes.name) === "verification" ||
                        Ji(t.attributes.name) === "shopify-checkout-api-token")
                    ) {
                      return true;
                    }
                  }
                }
                return false;
              })(A, v) &&
              (I ||
                A.type !== gi.Text ||
                A.isStyle ||
                A.textContent.replace(/^\s+|\s+$/gm, "").length)
            ? Pi()
            : -2;
        const P = Object.assign(A, {
          id: R,
        });
        r.add(t, P);
        if (R === -2) {
          return null;
        }
        if (w) {
          w(t);
        }
        let O = !h;
        if (P.type === gi.Element) {
          O = O && !P.needBlock;
          delete P.needBlock;
          const e = t.shadowRoot;
          if (e && bi(e)) {
            P.isShadowHost = true;
          }
        }
        if ((P.type === gi.Document || P.type === gi.Element) && O) {
          if (
            v.headWhitespace &&
            P.type === gi.Element &&
            P.tagName === "head"
          ) {
            I = false;
          }
          const e = {
            doc: n,
            mirror: r,
            blockClass: s,
            blockSelector: i,
            maskAllText: a,
            unblockSelector: o,
            maskTextClass: c,
            unmaskTextClass: u,
            maskTextSelector: l,
            unmaskTextSelector: d,
            skipChild: h,
            inlineStylesheet: p,
            maskInputOptions: f,
            maskAttributeFn: m,
            maskTextFn: g,
            maskInputFn: y,
            slimDOMOptions: v,
            dataURLOptions: b,
            inlineImages: S,
            recordCanvas: _,
            preserveWhiteSpace: I,
            onSerialize: w,
            onIframeLoad: x,
            iframeLoadTimeout: k,
            onStylesheetLoad: E,
            stylesheetLoadTimeout: T,
            keepIframeSrcFn: C,
          };
          for (const n of Array.from(t.childNodes)) {
            const t = Zi(n, e);
            if (t) {
              P.childNodes.push(t);
            }
          }
          if (
            (function (t) {
              return t.nodeType === t.ELEMENT_NODE;
            })(t) &&
            t.shadowRoot
          ) {
            for (const n of Array.from(t.shadowRoot.childNodes)) {
              const r = Zi(n, e);
              if (r) {
                if (bi(t.shadowRoot)) {
                  r.isShadow = true;
                }
                P.childNodes.push(r);
              }
            }
          }
        }
        if (t.parentNode && vi(t.parentNode) && bi(t.parentNode)) {
          P.isShadow = true;
        }
        if (P.type === gi.Element && P.tagName === "iframe") {
          (function (t, e, n) {
            const r = t.contentWindow;
            if (!r) {
              return;
            }
            let s;
            let i = false;
            try {
              s = r.document.readyState;
            } catch (t) {
              return;
            }
            if (s !== "complete") {
              const r = setTimeout(() => {
                if (!i) {
                  e();
                  i = true;
                }
              }, n);
              t.addEventListener("load", () => {
                clearTimeout(r);
                i = true;
                e();
              });
              return;
            }
            const o = "about:blank";
            if (r.location.href !== o || t.src === o || t.src === "") {
              setTimeout(e, 0);
              return t.addEventListener("load", e);
            }
            t.addEventListener("load", e);
          })(
            t,
            () => {
              const e = t.contentDocument;
              if (e && x) {
                const n = Zi(e, {
                  doc: e,
                  mirror: r,
                  blockClass: s,
                  blockSelector: i,
                  unblockSelector: o,
                  maskAllText: a,
                  maskTextClass: c,
                  unmaskTextClass: u,
                  maskTextSelector: l,
                  unmaskTextSelector: d,
                  skipChild: false,
                  inlineStylesheet: p,
                  maskInputOptions: f,
                  maskAttributeFn: m,
                  maskTextFn: g,
                  maskInputFn: y,
                  slimDOMOptions: v,
                  dataURLOptions: b,
                  inlineImages: S,
                  recordCanvas: _,
                  preserveWhiteSpace: I,
                  onSerialize: w,
                  onIframeLoad: x,
                  iframeLoadTimeout: k,
                  onStylesheetLoad: E,
                  stylesheetLoadTimeout: T,
                  keepIframeSrcFn: C,
                });
                if (n) {
                  x(t, n);
                }
              }
            },
            k,
          );
        }
        if (
          P.type === gi.Element &&
          P.tagName === "link" &&
          P.attributes.rel === "stylesheet"
        ) {
          (function (t, e, n) {
            let r;
            let s = false;
            try {
              r = t.sheet;
            } catch (t) {
              return;
            }
            if (r) {
              return;
            }
            const i = setTimeout(() => {
              if (!s) {
                e();
                s = true;
              }
            }, n);
            t.addEventListener("load", () => {
              clearTimeout(i);
              s = true;
              e();
            });
          })(
            t,
            () => {
              if (E) {
                const e = Zi(t, {
                  doc: n,
                  mirror: r,
                  blockClass: s,
                  blockSelector: i,
                  unblockSelector: o,
                  maskAllText: a,
                  maskTextClass: c,
                  unmaskTextClass: u,
                  maskTextSelector: l,
                  unmaskTextSelector: d,
                  skipChild: false,
                  inlineStylesheet: p,
                  maskInputOptions: f,
                  maskAttributeFn: m,
                  maskTextFn: g,
                  maskInputFn: y,
                  slimDOMOptions: v,
                  dataURLOptions: b,
                  inlineImages: S,
                  recordCanvas: _,
                  preserveWhiteSpace: I,
                  onSerialize: w,
                  onIframeLoad: x,
                  iframeLoadTimeout: k,
                  onStylesheetLoad: E,
                  stylesheetLoadTimeout: T,
                  keepIframeSrcFn: C,
                });
                if (e) {
                  E(t, e);
                }
              }
            },
            T,
          );
        }
        return P;
      }
      function Qi(t) {
        let e;
        let n = t[0];
        let r = 1;
        while (r < t.length) {
          const s = t[r];
          const i = t[r + 1];
          r += 2;
          if ((s === "optionalAccess" || s === "optionalCall") && n == null) {
            return;
          }
          if (s === "access" || s === "optionalAccess") {
            e = n;
            n = i(n);
          } else if (s === "call" || s === "optionalCall") {
            n = i((...t) => n.call(e, ...t));
            e = undefined;
          }
        }
        return n;
      }
      function to(t, e, n = document) {
        const r = {
          capture: true,
          passive: true,
        };
        n.addEventListener(t, e, r);
        return () => n.removeEventListener(t, e, r);
      }
      const eo =
        "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
      let no = {
        map: {},
        getId: () => {
          console.error(eo);
          return -1;
        },
        getNode: () => {
          console.error(eo);
          return null;
        },
        removeNodeFromMap() {
          console.error(eo);
        },
        has: () => {
          console.error(eo);
          return false;
        },
        reset() {
          console.error(eo);
        },
      };
      function ro(t, e, n = {}) {
        let r = null;
        let s = 0;
        return function (...i) {
          const o = Date.now();
          if (!s && n.leading === false) {
            s = o;
          }
          const a = e - (o - s);
          const c = this;
          if (a <= 0 || a > e) {
            if (r) {
              (function (...t) {
                ko("clearTimeout")(...t);
              })(r);
              r = null;
            }
            s = o;
            t.apply(c, i);
          } else if (!r && n.trailing !== false) {
            r = Eo(() => {
              s = n.leading === false ? 0 : Date.now();
              r = null;
              t.apply(c, i);
            }, a);
          }
        };
      }
      function so(t, e, n, r, s = window) {
        const i = s.Object.getOwnPropertyDescriptor(t, e);
        s.Object.defineProperty(
          t,
          e,
          r
            ? n
            : {
                set(t) {
                  Eo(() => {
                    n.set.call(this, t);
                  }, 0);
                  if (i && i.set) {
                    i.set.call(this, t);
                  }
                },
              },
        );
        return () => so(t, e, i || {}, true);
      }
      function io(t, e, n) {
        try {
          if (!(e in t)) {
            return () => {};
          }
          const r = t[e];
          const s = n(r);
          if (typeof s == "function") {
            s.prototype = s.prototype || {};
            Object.defineProperties(s, {
              __rrweb_original__: {
                enumerable: false,
                value: r,
              },
            });
          }
          t[e] = s;
          return () => {
            t[e] = r;
          };
        } catch (t) {
          return () => {};
        }
      }
      if (typeof window != "undefined" && window.Proxy && window.Reflect) {
        no = new Proxy(no, {
          get: (t, e, n) => {
            if (e === "map") {
              console.error(eo);
            }
            return Reflect.get(t, e, n);
          },
        });
      }
      let oo = Date.now;
      function ao(t) {
        const e = t.document;
        return {
          left: e.scrollingElement
            ? e.scrollingElement.scrollLeft
            : t.pageXOffset !== undefined
              ? t.pageXOffset
              : Qi([
                  e,
                  "optionalAccess",
                  (t) => t.documentElement,
                  "access",
                  (t) => t.scrollLeft,
                ]) ||
                Qi([
                  e,
                  "optionalAccess",
                  (t) => t.body,
                  "optionalAccess",
                  (t) => t.parentElement,
                  "optionalAccess",
                  (t) => t.scrollLeft,
                ]) ||
                Qi([
                  e,
                  "optionalAccess",
                  (t) => t.body,
                  "optionalAccess",
                  (t) => t.scrollLeft,
                ]) ||
                0,
          top: e.scrollingElement
            ? e.scrollingElement.scrollTop
            : t.pageYOffset !== undefined
              ? t.pageYOffset
              : Qi([
                  e,
                  "optionalAccess",
                  (t) => t.documentElement,
                  "access",
                  (t) => t.scrollTop,
                ]) ||
                Qi([
                  e,
                  "optionalAccess",
                  (t) => t.body,
                  "optionalAccess",
                  (t) => t.parentElement,
                  "optionalAccess",
                  (t) => t.scrollTop,
                ]) ||
                Qi([
                  e,
                  "optionalAccess",
                  (t) => t.body,
                  "optionalAccess",
                  (t) => t.scrollTop,
                ]) ||
                0,
        };
      }
      function co() {
        return (
          window.innerHeight ||
          (document.documentElement && document.documentElement.clientHeight) ||
          (document.body && document.body.clientHeight)
        );
      }
      function uo() {
        return (
          window.innerWidth ||
          (document.documentElement && document.documentElement.clientWidth) ||
          (document.body && document.body.clientWidth)
        );
      }
      function lo(t) {
        if (!t) {
          return null;
        }
        if (t.nodeType === t.ELEMENT_NODE) {
          return t;
        } else {
          return t.parentElement;
        }
      }
      function ho(t, e, n, r, s) {
        if (!t) {
          return false;
        }
        const i = lo(t);
        if (!i) {
          return false;
        }
        const o = Xi(e, n);
        if (!s) {
          const t = r && i.matches(r);
          return o(i) && !t;
        }
        const a = Ki(i, o);
        let c = -1;
        return (
          !(a < 0) &&
          (r && (c = Ki(i, Xi(null, r))), (a > -1 && c < 0) || a < c)
        );
      }
      function po(t, e) {
        return e.getId(t) === -2;
      }
      function fo(t, e) {
        if (vi(t)) {
          return false;
        }
        const n = e.getId(t);
        return (
          !e.has(n) ||
          ((!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) &&
            (!t.parentNode || fo(t.parentNode, e)))
        );
      }
      function mo(t) {
        return Boolean(t.changedTouches);
      }
      function go(t, e) {
        return Boolean(t.nodeName === "IFRAME" && e.getMeta(t));
      }
      function yo(t, e) {
        return Boolean(
          t.nodeName === "LINK" &&
          t.nodeType === t.ELEMENT_NODE &&
          t.getAttribute &&
          t.getAttribute("rel") === "stylesheet" &&
          e.getMeta(t),
        );
      }
      function vo(t) {
        return Boolean(Qi([t, "optionalAccess", (t) => t.shadowRoot]));
      }
      if (!/[1-9][0-9]{12}/.test(Date.now().toString())) {
        oo = () => new Date().getTime();
      }
      class bo {
        constructor() {
          this.id = 1;
          this.styleIDMap = new WeakMap();
          this.idStyleMap = new Map();
        }
        getId(t) {
          e = this.styleIDMap.get(t);
          n = () => -1;
          return e ?? n();
          var e;
          var n;
        }
        has(t) {
          return this.styleIDMap.has(t);
        }
        add(t, e) {
          if (this.has(t)) {
            return this.getId(t);
          }
          let n;
          n = e === undefined ? this.id++ : e;
          this.styleIDMap.set(t, n);
          this.idStyleMap.set(n, t);
          return n;
        }
        getStyle(t) {
          return this.idStyleMap.get(t) || null;
        }
        reset() {
          this.styleIDMap = new WeakMap();
          this.idStyleMap = new Map();
          this.id = 1;
        }
        generateId() {
          return this.id++;
        }
      }
      function So(t) {
        let e = null;
        if (
          Qi([
            t,
            "access",
            (t) => t.getRootNode,
            "optionalCall",
            (t) => t(),
            "optionalAccess",
            (t) => t.nodeType,
          ]) === Node.DOCUMENT_FRAGMENT_NODE &&
          t.getRootNode().host
        ) {
          e = t.getRootNode().host;
        }
        return e;
      }
      function _o(t) {
        const e = t.ownerDocument;
        if (!e) {
          return false;
        }
        const n = (function (t) {
          let e;
          let n = t;
          while ((e = So(n))) {
            n = e;
          }
          return n;
        })(t);
        return e.contains(n);
      }
      function wo(t) {
        const e = t.ownerDocument;
        return !!e && (e.contains(t) || _o(t));
      }
      const xo = {};
      function ko(t) {
        const e = xo[t];
        if (e) {
          return e;
        }
        const n = window.document;
        let r = window[t];
        if (n && typeof n.createElement == "function") {
          try {
            const e = n.createElement("iframe");
            e.hidden = true;
            n.head.appendChild(e);
            const s = e.contentWindow;
            if (s && s[t]) {
              r = s[t];
            }
            n.head.removeChild(e);
          } catch (t) {}
        }
        return (xo[t] = r.bind(window));
      }
      function Eo(...t) {
        return ko("setTimeout")(...t);
      }
      var To = ((t) => {
        t[(t.DomContentLoaded = 0)] = "DomContentLoaded";
        t[(t.Load = 1)] = "Load";
        t[(t.FullSnapshot = 2)] = "FullSnapshot";
        t[(t.IncrementalSnapshot = 3)] = "IncrementalSnapshot";
        t[(t.Meta = 4)] = "Meta";
        t[(t.Custom = 5)] = "Custom";
        t[(t.Plugin = 6)] = "Plugin";
        return t;
      })(To || {});
      var Co = ((t) => {
        t[(t.Mutation = 0)] = "Mutation";
        t[(t.MouseMove = 1)] = "MouseMove";
        t[(t.MouseInteraction = 2)] = "MouseInteraction";
        t[(t.Scroll = 3)] = "Scroll";
        t[(t.ViewportResize = 4)] = "ViewportResize";
        t[(t.Input = 5)] = "Input";
        t[(t.TouchMove = 6)] = "TouchMove";
        t[(t.MediaInteraction = 7)] = "MediaInteraction";
        t[(t.StyleSheetRule = 8)] = "StyleSheetRule";
        t[(t.CanvasMutation = 9)] = "CanvasMutation";
        t[(t.Font = 10)] = "Font";
        t[(t.Log = 11)] = "Log";
        t[(t.Drag = 12)] = "Drag";
        t[(t.StyleDeclaration = 13)] = "StyleDeclaration";
        t[(t.Selection = 14)] = "Selection";
        t[(t.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet";
        t[(t.CustomElement = 16)] = "CustomElement";
        return t;
      })(Co || {});
      var Mo = ((t) => {
        t[(t.MouseUp = 0)] = "MouseUp";
        t[(t.MouseDown = 1)] = "MouseDown";
        t[(t.Click = 2)] = "Click";
        t[(t.ContextMenu = 3)] = "ContextMenu";
        t[(t.DblClick = 4)] = "DblClick";
        t[(t.Focus = 5)] = "Focus";
        t[(t.Blur = 6)] = "Blur";
        t[(t.TouchStart = 7)] = "TouchStart";
        t[(t.TouchMove_Departed = 8)] = "TouchMove_Departed";
        t[(t.TouchEnd = 9)] = "TouchEnd";
        t[(t.TouchCancel = 10)] = "TouchCancel";
        return t;
      })(Mo || {});
      var Io = ((t) => {
        t[(t.Mouse = 0)] = "Mouse";
        t[(t.Pen = 1)] = "Pen";
        t[(t.Touch = 2)] = "Touch";
        return t;
      })(Io || {});
      function Ao(t) {
        let e;
        let n = t[0];
        let r = 1;
        while (r < t.length) {
          const s = t[r];
          const i = t[r + 1];
          r += 2;
          if ((s === "optionalAccess" || s === "optionalCall") && n == null) {
            return;
          }
          if (s === "access" || s === "optionalAccess") {
            e = n;
            n = i(n);
          } else if (s === "call" || s === "optionalCall") {
            n = i((...t) => n.call(e, ...t));
            e = undefined;
          }
        }
        return n;
      }
      function Ro(t) {
        return "__ln" in t;
      }
      class Po {
        constructor() {
          this.length = 0;
          this.head = null;
          this.tail = null;
        }
        get(t) {
          if (t >= this.length) {
            throw new Error("Position outside of list range");
          }
          let e = this.head;
          for (let n = 0; n < t; n++) {
            e = Ao([e, "optionalAccess", (t) => t.next]) || null;
          }
          return e;
        }
        addNode(t) {
          const e = {
            value: t,
            previous: null,
            next: null,
          };
          t.__ln = e;
          if (t.previousSibling && Ro(t.previousSibling)) {
            const n = t.previousSibling.__ln.next;
            e.next = n;
            e.previous = t.previousSibling.__ln;
            t.previousSibling.__ln.next = e;
            if (n) {
              n.previous = e;
            }
          } else if (
            t.nextSibling &&
            Ro(t.nextSibling) &&
            t.nextSibling.__ln.previous
          ) {
            const n = t.nextSibling.__ln.previous;
            e.previous = n;
            e.next = t.nextSibling.__ln;
            t.nextSibling.__ln.previous = e;
            if (n) {
              n.next = e;
            }
          } else {
            if (this.head) {
              this.head.previous = e;
            }
            e.next = this.head;
            this.head = e;
          }
          if (e.next === null) {
            this.tail = e;
          }
          this.length++;
        }
        removeNode(t) {
          const e = t.__ln;
          if (this.head) {
            if (e.previous) {
              e.previous.next = e.next;
              if (e.next) {
                e.next.previous = e.previous;
              } else {
                this.tail = e.previous;
              }
            } else {
              this.head = e.next;
              if (this.head) {
                this.head.previous = null;
              } else {
                this.tail = null;
              }
            }
            if (t.__ln) {
              delete t.__ln;
            }
            this.length--;
          }
        }
      }
      const Oo = (t, e) => `${t}@${e}`;
      class Do {
        constructor() {
          this.frozen = false;
          this.locked = false;
          this.texts = [];
          this.attributes = [];
          this.attributeMap = new WeakMap();
          this.removes = [];
          this.mapRemoves = [];
          this.movedMap = {};
          this.addedSet = new Set();
          this.movedSet = new Set();
          this.droppedSet = new Set();
          this.processMutations = (t) => {
            t.forEach(this.processMutation);
            this.emit();
          };
          this.emit = () => {
            if (this.frozen || this.locked) {
              return;
            }
            const t = [];
            const e = new Set();
            const n = new Po();
            const r = (t) => {
              let e = t;
              let n = -2;
              while (n === -2) {
                e = e && e.nextSibling;
                n = e && this.mirror.getId(e);
              }
              return n;
            };
            const s = (s) => {
              if (!s.parentNode || !wo(s)) {
                return;
              }
              const i = vi(s.parentNode)
                ? this.mirror.getId(So(s))
                : this.mirror.getId(s.parentNode);
              const o = r(s);
              if (i === -1 || o === -1) {
                return n.addNode(s);
              }
              const a = Zi(s, {
                doc: this.doc,
                mirror: this.mirror,
                blockClass: this.blockClass,
                blockSelector: this.blockSelector,
                maskAllText: this.maskAllText,
                unblockSelector: this.unblockSelector,
                maskTextClass: this.maskTextClass,
                unmaskTextClass: this.unmaskTextClass,
                maskTextSelector: this.maskTextSelector,
                unmaskTextSelector: this.unmaskTextSelector,
                skipChild: true,
                newlyAddedElement: true,
                inlineStylesheet: this.inlineStylesheet,
                maskInputOptions: this.maskInputOptions,
                maskAttributeFn: this.maskAttributeFn,
                maskTextFn: this.maskTextFn,
                maskInputFn: this.maskInputFn,
                slimDOMOptions: this.slimDOMOptions,
                dataURLOptions: this.dataURLOptions,
                recordCanvas: this.recordCanvas,
                inlineImages: this.inlineImages,
                onSerialize: (t) => {
                  if (go(t, this.mirror)) {
                    this.iframeManager.addIframe(t);
                  }
                  if (yo(t, this.mirror)) {
                    this.stylesheetManager.trackLinkElement(t);
                  }
                  if (vo(s)) {
                    this.shadowDomManager.addShadowRoot(s.shadowRoot, this.doc);
                  }
                },
                onIframeLoad: (t, e) => {
                  this.iframeManager.attachIframe(t, e);
                  this.shadowDomManager.observeAttachShadow(t);
                },
                onStylesheetLoad: (t, e) => {
                  this.stylesheetManager.attachLinkElement(t, e);
                },
              });
              if (a) {
                t.push({
                  parentId: i,
                  nextId: o,
                  node: a,
                });
                e.add(a.id);
              }
            };
            while (this.mapRemoves.length) {
              this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            }
            for (const t of this.movedSet) {
              if (
                !No(this.removes, t, this.mirror) ||
                !!this.movedSet.has(t.parentNode)
              ) {
                s(t);
              }
            }
            for (const t of this.addedSet) {
              if (Fo(this.droppedSet, t) || No(this.removes, t, this.mirror)) {
                if (Fo(this.movedSet, t)) {
                  s(t);
                } else {
                  this.droppedSet.add(t);
                }
              } else {
                s(t);
              }
            }
            let i = null;
            while (n.length) {
              let t = null;
              if (i) {
                const e = this.mirror.getId(i.value.parentNode);
                const n = r(i.value);
                if (e !== -1 && n !== -1) {
                  t = i;
                }
              }
              if (!t) {
                let e = n.tail;
                while (e) {
                  const n = e;
                  e = e.previous;
                  if (n) {
                    const e = this.mirror.getId(n.value.parentNode);
                    if (r(n.value) === -1) {
                      continue;
                    }
                    if (e !== -1) {
                      t = n;
                      break;
                    }
                    {
                      const e = n.value;
                      if (
                        e.parentNode &&
                        e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                      ) {
                        const r = e.parentNode.host;
                        if (this.mirror.getId(r) !== -1) {
                          t = n;
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if (!t) {
                while (n.head) {
                  n.removeNode(n.head.value);
                }
                break;
              }
              i = t.previous;
              n.removeNode(t.value);
              s(t.value);
            }
            const o = {
              texts: this.texts
                .map((t) => ({
                  id: this.mirror.getId(t.node),
                  value: t.value,
                }))
                .filter((t) => !e.has(t.id))
                .filter((t) => this.mirror.has(t.id)),
              attributes: this.attributes
                .map((t) => {
                  const { attributes: e } = t;
                  if (typeof e.style == "string") {
                    const n = JSON.stringify(t.styleDiff);
                    const r = JSON.stringify(t._unchangedStyles);
                    if (
                      n.length < e.style.length &&
                      (n + r).split("var(").length ===
                        e.style.split("var(").length
                    ) {
                      e.style = t.styleDiff;
                    }
                  }
                  return {
                    id: this.mirror.getId(t.node),
                    attributes: e,
                  };
                })
                .filter((t) => !e.has(t.id))
                .filter((t) => this.mirror.has(t.id)),
              removes: this.removes,
              adds: t,
            };
            if (
              o.texts.length ||
              o.attributes.length ||
              o.removes.length ||
              o.adds.length
            ) {
              this.texts = [];
              this.attributes = [];
              this.attributeMap = new WeakMap();
              this.removes = [];
              this.addedSet = new Set();
              this.movedSet = new Set();
              this.droppedSet = new Set();
              this.movedMap = {};
              this.mutationCb(o);
            }
          };
          this.processMutation = (t) => {
            if (!po(t.target, this.mirror)) {
              switch (t.type) {
                case "characterData": {
                  const e = t.target.textContent;
                  if (
                    !ho(
                      t.target,
                      this.blockClass,
                      this.blockSelector,
                      this.unblockSelector,
                      false,
                    ) &&
                    e !== t.oldValue
                  ) {
                    this.texts.push({
                      value:
                        Yi(
                          t.target,
                          this.maskTextClass,
                          this.maskTextSelector,
                          this.unmaskTextClass,
                          this.unmaskTextSelector,
                          this.maskAllText,
                        ) && e
                          ? this.maskTextFn
                            ? this.maskTextFn(e, lo(t.target))
                            : e.replace(/[\S]/g, "*")
                          : e,
                      node: t.target,
                    });
                  }
                  break;
                }
                case "attributes": {
                  const e = t.target;
                  let n = t.attributeName;
                  let r = t.target.getAttribute(n);
                  if (n === "value") {
                    const n = Mi(e);
                    const s = e.tagName;
                    r = Ii(e, s, n);
                    const i = xi({
                      maskInputOptions: this.maskInputOptions,
                      tagName: s,
                      type: n,
                    });
                    r = ki({
                      isMasked: Yi(
                        t.target,
                        this.maskTextClass,
                        this.maskTextSelector,
                        this.unmaskTextClass,
                        this.unmaskTextSelector,
                        i,
                      ),
                      element: e,
                      value: r,
                      maskInputFn: this.maskInputFn,
                    });
                  }
                  if (
                    ho(
                      t.target,
                      this.blockClass,
                      this.blockSelector,
                      this.unblockSelector,
                      false,
                    ) ||
                    r === t.oldValue
                  ) {
                    return;
                  }
                  let s = this.attributeMap.get(t.target);
                  if (
                    e.tagName === "IFRAME" &&
                    n === "src" &&
                    !this.keepIframeSrcFn(r)
                  ) {
                    if (e.contentDocument) {
                      return;
                    }
                    n = "rr_src";
                  }
                  if (!s) {
                    s = {
                      node: t.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {},
                    };
                    this.attributes.push(s);
                    this.attributeMap.set(t.target, s);
                  }
                  if (
                    n === "type" &&
                    e.tagName === "INPUT" &&
                    (t.oldValue || "").toLowerCase() === "password"
                  ) {
                    e.setAttribute("data-rr-is-password", "true");
                  }
                  if (
                    !Hi(e.tagName, n) &&
                    ((s.attributes[n] = qi(
                      this.doc,
                      Ei(e.tagName),
                      Ei(n),
                      r,
                      e,
                      this.maskAttributeFn,
                    )),
                    n === "style")
                  ) {
                    if (!this.unattachedDoc) {
                      try {
                        this.unattachedDoc =
                          document.implementation.createHTMLDocument();
                      } catch (t) {
                        this.unattachedDoc = this.doc;
                      }
                    }
                    const n = this.unattachedDoc.createElement("span");
                    if (t.oldValue) {
                      n.setAttribute("style", t.oldValue);
                    }
                    for (const t of Array.from(e.style)) {
                      const r = e.style.getPropertyValue(t);
                      const i = e.style.getPropertyPriority(t);
                      if (
                        r !== n.style.getPropertyValue(t) ||
                        i !== n.style.getPropertyPriority(t)
                      ) {
                        s.styleDiff[t] = i === "" ? r : [r, i];
                      } else {
                        s._unchangedStyles[t] = [r, i];
                      }
                    }
                    for (const t of Array.from(n.style)) {
                      if (e.style.getPropertyValue(t) === "") {
                        s.styleDiff[t] = false;
                      }
                    }
                  }
                  break;
                }
                case "childList":
                  if (
                    ho(
                      t.target,
                      this.blockClass,
                      this.blockSelector,
                      this.unblockSelector,
                      true,
                    )
                  ) {
                    return;
                  }
                  t.addedNodes.forEach((e) => this.genAdds(e, t.target));
                  t.removedNodes.forEach((e) => {
                    const n = this.mirror.getId(e);
                    const r = vi(t.target)
                      ? this.mirror.getId(t.target.host)
                      : this.mirror.getId(t.target);
                    if (
                      !ho(
                        t.target,
                        this.blockClass,
                        this.blockSelector,
                        this.unblockSelector,
                        false,
                      ) &&
                      !po(e, this.mirror) &&
                      !!(function (t, e) {
                        return e.getId(t) !== -1;
                      })(e, this.mirror)
                    ) {
                      if (this.addedSet.has(e)) {
                        Lo(this.addedSet, e);
                        this.droppedSet.add(e);
                      } else if (
                        (!this.addedSet.has(t.target) || n !== -1) &&
                        !fo(t.target, this.mirror)
                      ) {
                        if (this.movedSet.has(e) && this.movedMap[Oo(n, r)]) {
                          Lo(this.movedSet, e);
                        } else {
                          this.removes.push({
                            parentId: r,
                            id: n,
                            isShadow:
                              (!!vi(t.target) && !!bi(t.target)) || undefined,
                          });
                        }
                      }
                      this.mapRemoves.push(e);
                    }
                  });
              }
            }
          };
          this.genAdds = (t, e) => {
            if (
              !this.processedNodeManager.inOtherBuffer(t, this) &&
              !this.addedSet.has(t) &&
              !this.movedSet.has(t)
            ) {
              if (this.mirror.hasNode(t)) {
                if (po(t, this.mirror)) {
                  return;
                }
                this.movedSet.add(t);
                let n = null;
                if (e && this.mirror.hasNode(e)) {
                  n = this.mirror.getId(e);
                }
                if (n && n !== -1) {
                  this.movedMap[Oo(this.mirror.getId(t), n)] = true;
                }
              } else {
                this.addedSet.add(t);
                this.droppedSet.delete(t);
              }
              if (
                !ho(
                  t,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  false,
                )
              ) {
                t.childNodes.forEach((t) => this.genAdds(t));
                if (vo(t)) {
                  t.shadowRoot.childNodes.forEach((e) => {
                    this.processedNodeManager.add(e, this);
                    this.genAdds(e, t);
                  });
                }
              }
            }
          };
        }
        init(t) {
          [
            "mutationCb",
            "blockClass",
            "blockSelector",
            "unblockSelector",
            "maskAllText",
            "maskTextClass",
            "unmaskTextClass",
            "maskTextSelector",
            "unmaskTextSelector",
            "inlineStylesheet",
            "maskInputOptions",
            "maskAttributeFn",
            "maskTextFn",
            "maskInputFn",
            "keepIframeSrcFn",
            "recordCanvas",
            "inlineImages",
            "slimDOMOptions",
            "dataURLOptions",
            "doc",
            "mirror",
            "iframeManager",
            "stylesheetManager",
            "shadowDomManager",
            "canvasManager",
            "processedNodeManager",
          ].forEach((e) => {
            this[e] = t[e];
          });
        }
        freeze() {
          this.frozen = true;
          this.canvasManager.freeze();
        }
        unfreeze() {
          this.frozen = false;
          this.canvasManager.unfreeze();
          this.emit();
        }
        isFrozen() {
          return this.frozen;
        }
        lock() {
          this.locked = true;
          this.canvasManager.lock();
        }
        unlock() {
          this.locked = false;
          this.canvasManager.unlock();
          this.emit();
        }
        reset() {
          this.shadowDomManager.reset();
          this.canvasManager.reset();
        }
      }
      function Lo(t, e) {
        t.delete(e);
        e.childNodes.forEach((e) => Lo(t, e));
      }
      function No(t, e, n) {
        return t.length !== 0 && jo(t, e, n);
      }
      function jo(t, e, n) {
        const { parentNode: r } = e;
        if (!r) {
          return false;
        }
        const s = n.getId(r);
        return !!t.some((t) => t.id === s) || jo(t, r, n);
      }
      function Fo(t, e) {
        return t.size !== 0 && $o(t, e);
      }
      function $o(t, e) {
        const { parentNode: n } = e;
        return !!n && (!!t.has(n) || $o(t, n));
      }
      let Bo;
      const Vo = (t) => {
        if (!Bo) {
          return t;
        }
        return (...e) => {
          try {
            return t(...e);
          } catch (t) {
            if (Bo && Bo(t) === true) {
              return () => {};
            }
            throw t;
          }
        };
      };
      function Uo(t) {
        let e;
        let n = t[0];
        let r = 1;
        while (r < t.length) {
          const s = t[r];
          const i = t[r + 1];
          r += 2;
          if ((s === "optionalAccess" || s === "optionalCall") && n == null) {
            return;
          }
          if (s === "access" || s === "optionalAccess") {
            e = n;
            n = i(n);
          } else if (s === "call" || s === "optionalCall") {
            n = i((...t) => n.call(e, ...t));
            e = undefined;
          }
        }
        return n;
      }
      const zo = [];
      function Wo(t) {
        try {
          if ("composedPath" in t) {
            const e = t.composedPath();
            if (e.length) {
              return e[0];
            }
          } else if ("path" in t && t.path.length) {
            return t.path[0];
          }
        } catch (t) {}
        return t && t.target;
      }
      function qo(t, e) {
        const n = new Do();
        zo.push(n);
        n.init(t);
        let r = window.MutationObserver || window.__rrMutationObserver;
        const s = Uo([
          window,
          "optionalAccess",
          (t) => t.Zone,
          "optionalAccess",
          (t) => t.__symbol__,
          "optionalCall",
          (t) => t("MutationObserver"),
        ]);
        if (s && window[s]) {
          r = window[s];
        }
        const i = new r(
          Vo((e) => {
            if (!t.onMutation || t.onMutation(e) !== false) {
              n.processMutations.bind(n)(e);
            }
          }),
        );
        i.observe(e, {
          attributes: true,
          attributeOldValue: true,
          characterData: true,
          characterDataOldValue: true,
          childList: true,
          subtree: true,
        });
        return i;
      }
      function Ho({
        mouseInteractionCb: t,
        doc: e,
        mirror: n,
        blockClass: r,
        blockSelector: s,
        unblockSelector: i,
        sampling: o,
      }) {
        if (o.mouseInteraction === false) {
          return () => {};
        }
        const a =
          o.mouseInteraction === true || o.mouseInteraction === undefined
            ? {}
            : o.mouseInteraction;
        const c = [];
        let u = null;
        Object.keys(Mo)
          .filter(
            (t) =>
              Number.isNaN(Number(t)) &&
              !t.endsWith("_Departed") &&
              a[t] !== false,
          )
          .forEach((o) => {
            let a = Ei(o);
            const l = ((e) => (o) => {
              const a = Wo(o);
              if (ho(a, r, s, i, true)) {
                return;
              }
              let c = null;
              let l = e;
              if ("pointerType" in o) {
                switch (o.pointerType) {
                  case "mouse":
                    c = Io.Mouse;
                    break;
                  case "touch":
                    c = Io.Touch;
                    break;
                  case "pen":
                    c = Io.Pen;
                }
                if (c === Io.Touch) {
                  if (Mo[e] === Mo.MouseDown) {
                    l = "TouchStart";
                  } else if (Mo[e] === Mo.MouseUp) {
                    l = "TouchEnd";
                  }
                } else {
                  Io.Pen;
                }
              } else if (mo(o)) {
                c = Io.Touch;
              }
              if (c !== null) {
                u = c;
                if (
                  (l.startsWith("Touch") && c === Io.Touch) ||
                  (l.startsWith("Mouse") && c === Io.Mouse)
                ) {
                  c = null;
                }
              } else if (Mo[e] === Mo.Click) {
                c = u;
                u = null;
              }
              const d = mo(o) ? o.changedTouches[0] : o;
              if (!d) {
                return;
              }
              const h = n.getId(a);
              const { clientX: p, clientY: f } = d;
              Vo(t)({
                type: Mo[l],
                id: h,
                x: p,
                y: f,
                ...(c !== null && {
                  pointerType: c,
                }),
              });
            })(o);
            if (window.PointerEvent) {
              switch (Mo[o]) {
                case Mo.MouseDown:
                case Mo.MouseUp:
                  a = a.replace("mouse", "pointer");
                  break;
                case Mo.TouchStart:
                case Mo.TouchEnd:
                  return;
              }
            }
            c.push(to(a, l, e));
          });
        return Vo(() => {
          c.forEach((t) => t());
        });
      }
      function Ko({
        scrollCb: t,
        doc: e,
        mirror: n,
        blockClass: r,
        blockSelector: s,
        unblockSelector: i,
        sampling: o,
      }) {
        return to(
          "scroll",
          Vo(
            ro(
              Vo((o) => {
                const a = Wo(o);
                if (!a || ho(a, r, s, i, true)) {
                  return;
                }
                const c = n.getId(a);
                if (a === e && e.defaultView) {
                  const n = ao(e.defaultView);
                  t({
                    id: c,
                    x: n.left,
                    y: n.top,
                  });
                } else {
                  t({
                    id: c,
                    x: a.scrollLeft,
                    y: a.scrollTop,
                  });
                }
              }),
              o.scroll || 100,
            ),
          ),
          e,
        );
      }
      const Xo = ["INPUT", "TEXTAREA", "SELECT"];
      const Yo = new WeakMap();
      function Go({
        inputCb: t,
        doc: e,
        mirror: n,
        blockClass: r,
        blockSelector: s,
        unblockSelector: i,
        ignoreClass: o,
        ignoreSelector: a,
        maskInputOptions: c,
        maskInputFn: u,
        sampling: l,
        userTriggeredOnInput: d,
        maskTextClass: h,
        unmaskTextClass: p,
        maskTextSelector: f,
        unmaskTextSelector: m,
      }) {
        function g(t) {
          let n = Wo(t);
          const l = t.isTrusted;
          const g = n && Ti(n.tagName);
          if (g === "OPTION") {
            n = n.parentElement;
          }
          if (!n || !g || Xo.indexOf(g) < 0 || ho(n, r, s, i, true)) {
            return;
          }
          const v = n;
          if (v.classList.contains(o) || (a && v.matches(a))) {
            return;
          }
          const b = Mi(n);
          let S = Ii(v, g, b);
          let _ = false;
          const w = xi({
            maskInputOptions: c,
            tagName: g,
            type: b,
          });
          const x = Yi(n, h, f, p, m, w);
          if (b === "radio" || b === "checkbox") {
            _ = n.checked;
          }
          S = ki({
            isMasked: x,
            element: n,
            value: S,
            maskInputFn: u,
          });
          y(
            n,
            d
              ? {
                  text: S,
                  isChecked: _,
                  userTriggered: l,
                }
              : {
                  text: S,
                  isChecked: _,
                },
          );
          const k = n.name;
          if (b === "radio" && k && _) {
            e.querySelectorAll(`input[type="radio"][name="${k}"]`).forEach(
              (t) => {
                if (t !== n) {
                  const e = ki({
                    isMasked: x,
                    element: t,
                    value: Ii(t, g, b),
                    maskInputFn: u,
                  });
                  y(
                    t,
                    d
                      ? {
                          text: e,
                          isChecked: !_,
                          userTriggered: false,
                        }
                      : {
                          text: e,
                          isChecked: !_,
                        },
                  );
                }
              },
            );
          }
        }
        function y(e, r) {
          const s = Yo.get(e);
          if (!s || s.text !== r.text || s.isChecked !== r.isChecked) {
            Yo.set(e, r);
            const s = n.getId(e);
            Vo(t)({
              ...r,
              id: s,
            });
          }
        }
        const v = (l.input === "last" ? ["change"] : ["input", "change"]).map(
          (t) => to(t, Vo(g), e),
        );
        const b = e.defaultView;
        if (!b) {
          return () => {
            v.forEach((t) => t());
          };
        }
        const S = b.Object.getOwnPropertyDescriptor(
          b.HTMLInputElement.prototype,
          "value",
        );
        const _ = [
          [b.HTMLInputElement.prototype, "value"],
          [b.HTMLInputElement.prototype, "checked"],
          [b.HTMLSelectElement.prototype, "value"],
          [b.HTMLTextAreaElement.prototype, "value"],
          [b.HTMLSelectElement.prototype, "selectedIndex"],
          [b.HTMLOptionElement.prototype, "selected"],
        ];
        if (S && S.set) {
          v.push(
            ..._.map((t) =>
              so(
                t[0],
                t[1],
                {
                  set() {
                    Vo(g)({
                      target: this,
                      isTrusted: false,
                    });
                  },
                },
                false,
                b,
              ),
            ),
          );
        }
        return Vo(() => {
          v.forEach((t) => t());
        });
      }
      function Jo(t) {
        return (function (t, e) {
          if (
            (ea("CSSGroupingRule") &&
              t.parentRule instanceof CSSGroupingRule) ||
            (ea("CSSMediaRule") && t.parentRule instanceof CSSMediaRule) ||
            (ea("CSSSupportsRule") &&
              t.parentRule instanceof CSSSupportsRule) ||
            (ea("CSSConditionRule") && t.parentRule instanceof CSSConditionRule)
          ) {
            const n = Array.from(t.parentRule.cssRules).indexOf(t);
            e.unshift(n);
          } else if (t.parentStyleSheet) {
            const n = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
            e.unshift(n);
          }
          return e;
        })(t, []);
      }
      function Zo(t, e, n) {
        let r;
        let s;
        if (t) {
          if (t.ownerNode) {
            r = e.getId(t.ownerNode);
          } else {
            s = n.getId(t);
          }
          return {
            styleId: s,
            id: r,
          };
        } else {
          return {};
        }
      }
      function Qo({ mirror: t, stylesheetManager: e }, n) {
        let r = null;
        r = n.nodeName === "#document" ? t.getId(n) : t.getId(n.host);
        const s =
          n.nodeName === "#document"
            ? Uo([
                n,
                "access",
                (t) => t.defaultView,
                "optionalAccess",
                (t) => t.Document,
              ])
            : Uo([
                n,
                "access",
                (t) => t.ownerDocument,
                "optionalAccess",
                (t) => t.defaultView,
                "optionalAccess",
                (t) => t.ShadowRoot,
              ]);
        const i = Uo([s, "optionalAccess", (t) => t.prototype])
          ? Object.getOwnPropertyDescriptor(
              Uo([s, "optionalAccess", (t) => t.prototype]),
              "adoptedStyleSheets",
            )
          : undefined;
        if (r !== null && r !== -1 && s && i) {
          Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: i.configurable,
            enumerable: i.enumerable,
            get() {
              return Uo([
                i,
                "access",
                (t) => t.get,
                "optionalAccess",
                (t) => t.call,
                "call",
                (t) => t(this),
              ]);
            },
            set(t) {
              const n = Uo([
                i,
                "access",
                (t) => t.set,
                "optionalAccess",
                (t) => t.call,
                "call",
                (e) => e(this, t),
              ]);
              if (r !== null && r !== -1) {
                try {
                  e.adoptStyleSheets(t, r);
                } catch (t) {}
              }
              return n;
            },
          });
          return Vo(() => {
            Object.defineProperty(n, "adoptedStyleSheets", {
              configurable: i.configurable,
              enumerable: i.enumerable,
              get: i.get,
              set: i.set,
            });
          });
        } else {
          return () => {};
        }
      }
      function ta(t, e = {}) {
        const n = t.doc.defaultView;
        if (!n) {
          return () => {};
        }
        const r = qo(t, t.doc);
        const s = (function ({
          mousemoveCb: t,
          sampling: e,
          doc: n,
          mirror: r,
        }) {
          if (e.mousemove === false) {
            return () => {};
          }
          const s = typeof e.mousemove == "number" ? e.mousemove : 50;
          const i =
            typeof e.mousemoveCallback == "number" ? e.mousemoveCallback : 500;
          let o;
          let a = [];
          const c = ro(
            Vo((e) => {
              const n = Date.now() - o;
              t(
                a.map((t) => {
                  t.timeOffset -= n;
                  return t;
                }),
                e,
              );
              a = [];
              o = null;
            }),
            i,
          );
          const u = Vo(
            ro(
              Vo((t) => {
                const e = Wo(t);
                const { clientX: n, clientY: s } = mo(t)
                  ? t.changedTouches[0]
                  : t;
                o ||= oo();
                a.push({
                  x: n,
                  y: s,
                  id: r.getId(e),
                  timeOffset: oo() - o,
                });
                c(
                  typeof DragEvent != "undefined" && t instanceof DragEvent
                    ? Co.Drag
                    : t instanceof MouseEvent
                      ? Co.MouseMove
                      : Co.TouchMove,
                );
              }),
              s,
              {
                trailing: false,
              },
            ),
          );
          const l = [
            to("mousemove", u, n),
            to("touchmove", u, n),
            to("drag", u, n),
          ];
          return Vo(() => {
            l.forEach((t) => t());
          });
        })(t);
        const i = Ho(t);
        const o = Ko(t);
        const a = (function ({ viewportResizeCb: t }, { win: e }) {
          let n = -1;
          let r = -1;
          return to(
            "resize",
            Vo(
              ro(
                Vo(() => {
                  const e = co();
                  const s = uo();
                  if (n !== e || r !== s) {
                    t({
                      width: Number(s),
                      height: Number(e),
                    });
                    n = e;
                    r = s;
                  }
                }),
                200,
              ),
            ),
            e,
          );
        })(t, {
          win: n,
        });
        const c = Go(t);
        const u = (function ({
          mediaInteractionCb: t,
          blockClass: e,
          blockSelector: n,
          unblockSelector: r,
          mirror: s,
          sampling: i,
          doc: o,
        }) {
          const a = Vo((o) =>
            ro(
              Vo((i) => {
                const a = Wo(i);
                if (!a || ho(a, e, n, r, true)) {
                  return;
                }
                const {
                  currentTime: c,
                  volume: u,
                  muted: l,
                  playbackRate: d,
                } = a;
                t({
                  type: o,
                  id: s.getId(a),
                  currentTime: c,
                  volume: u,
                  muted: l,
                  playbackRate: d,
                });
              }),
              i.media || 500,
            ),
          );
          const c = [
            to("play", a(0), o),
            to("pause", a(1), o),
            to("seeked", a(2), o),
            to("volumechange", a(3), o),
            to("ratechange", a(4), o),
          ];
          return Vo(() => {
            c.forEach((t) => t());
          });
        })(t);
        const l = (function (
          { styleSheetRuleCb: t, mirror: e, stylesheetManager: n },
          { win: r },
        ) {
          if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) {
            return () => {};
          }
          const s = r.CSSStyleSheet.prototype.insertRule;
          r.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
            apply: Vo((r, s, i) => {
              const [o, a] = i;
              const { id: c, styleId: u } = Zo(s, e, n.styleMirror);
              if ((c && c !== -1) || (u && u !== -1)) {
                t({
                  id: c,
                  styleId: u,
                  adds: [
                    {
                      rule: o,
                      index: a,
                    },
                  ],
                });
              }
              return r.apply(s, i);
            }),
          });
          const i = r.CSSStyleSheet.prototype.deleteRule;
          let o;
          let a;
          r.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
            apply: Vo((r, s, i) => {
              const [o] = i;
              const { id: a, styleId: c } = Zo(s, e, n.styleMirror);
              if ((a && a !== -1) || (c && c !== -1)) {
                t({
                  id: a,
                  styleId: c,
                  removes: [
                    {
                      index: o,
                    },
                  ],
                });
              }
              return r.apply(s, i);
            }),
          });
          if (r.CSSStyleSheet.prototype.replace) {
            o = r.CSSStyleSheet.prototype.replace;
            r.CSSStyleSheet.prototype.replace = new Proxy(o, {
              apply: Vo((r, s, i) => {
                const [o] = i;
                const { id: a, styleId: c } = Zo(s, e, n.styleMirror);
                if ((a && a !== -1) || (c && c !== -1)) {
                  t({
                    id: a,
                    styleId: c,
                    replace: o,
                  });
                }
                return r.apply(s, i);
              }),
            });
          }
          if (r.CSSStyleSheet.prototype.replaceSync) {
            a = r.CSSStyleSheet.prototype.replaceSync;
            r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
              apply: Vo((r, s, i) => {
                const [o] = i;
                const { id: a, styleId: c } = Zo(s, e, n.styleMirror);
                if ((a && a !== -1) || (c && c !== -1)) {
                  t({
                    id: a,
                    styleId: c,
                    replaceSync: o,
                  });
                }
                return r.apply(s, i);
              }),
            });
          }
          const c = {};
          if (na("CSSGroupingRule")) {
            c.CSSGroupingRule = r.CSSGroupingRule;
          } else {
            if (na("CSSMediaRule")) {
              c.CSSMediaRule = r.CSSMediaRule;
            }
            if (na("CSSConditionRule")) {
              c.CSSConditionRule = r.CSSConditionRule;
            }
            if (na("CSSSupportsRule")) {
              c.CSSSupportsRule = r.CSSSupportsRule;
            }
          }
          const u = {};
          Object.entries(c).forEach(([r, s]) => {
            u[r] = {
              insertRule: s.prototype.insertRule,
              deleteRule: s.prototype.deleteRule,
            };
            s.prototype.insertRule = new Proxy(u[r].insertRule, {
              apply: Vo((r, s, i) => {
                const [o, a] = i;
                const { id: c, styleId: u } = Zo(
                  s.parentStyleSheet,
                  e,
                  n.styleMirror,
                );
                if ((c && c !== -1) || (u && u !== -1)) {
                  t({
                    id: c,
                    styleId: u,
                    adds: [
                      {
                        rule: o,
                        index: [...Jo(s), a || 0],
                      },
                    ],
                  });
                }
                return r.apply(s, i);
              }),
            });
            s.prototype.deleteRule = new Proxy(u[r].deleteRule, {
              apply: Vo((r, s, i) => {
                const [o] = i;
                const { id: a, styleId: c } = Zo(
                  s.parentStyleSheet,
                  e,
                  n.styleMirror,
                );
                if ((a && a !== -1) || (c && c !== -1)) {
                  t({
                    id: a,
                    styleId: c,
                    removes: [
                      {
                        index: [...Jo(s), o],
                      },
                    ],
                  });
                }
                return r.apply(s, i);
              }),
            });
          });
          return Vo(() => {
            r.CSSStyleSheet.prototype.insertRule = s;
            r.CSSStyleSheet.prototype.deleteRule = i;
            if (o) {
              r.CSSStyleSheet.prototype.replace = o;
            }
            if (a) {
              r.CSSStyleSheet.prototype.replaceSync = a;
            }
            Object.entries(c).forEach(([t, e]) => {
              e.prototype.insertRule = u[t].insertRule;
              e.prototype.deleteRule = u[t].deleteRule;
            });
          });
        })(t, {
          win: n,
        });
        const d = Qo(t, t.doc);
        const h = (function (
          {
            styleDeclarationCb: t,
            mirror: e,
            ignoreCSSAttributes: n,
            stylesheetManager: r,
          },
          { win: s },
        ) {
          const i = s.CSSStyleDeclaration.prototype.setProperty;
          s.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
            apply: Vo((s, o, a) => {
              const [c, u, l] = a;
              if (n.has(c)) {
                return i.apply(o, [c, u, l]);
              }
              const { id: d, styleId: h } = Zo(
                Uo([
                  o,
                  "access",
                  (t) => t.parentRule,
                  "optionalAccess",
                  (t) => t.parentStyleSheet,
                ]),
                e,
                r.styleMirror,
              );
              if ((d && d !== -1) || (h && h !== -1)) {
                t({
                  id: d,
                  styleId: h,
                  set: {
                    property: c,
                    value: u,
                    priority: l,
                  },
                  index: Jo(o.parentRule),
                });
              }
              return s.apply(o, a);
            }),
          });
          const o = s.CSSStyleDeclaration.prototype.removeProperty;
          s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
            apply: Vo((s, i, a) => {
              const [c] = a;
              if (n.has(c)) {
                return o.apply(i, [c]);
              }
              const { id: u, styleId: l } = Zo(
                Uo([
                  i,
                  "access",
                  (t) => t.parentRule,
                  "optionalAccess",
                  (t) => t.parentStyleSheet,
                ]),
                e,
                r.styleMirror,
              );
              if ((u && u !== -1) || (l && l !== -1)) {
                t({
                  id: u,
                  styleId: l,
                  remove: {
                    property: c,
                  },
                  index: Jo(i.parentRule),
                });
              }
              return s.apply(i, a);
            }),
          });
          return Vo(() => {
            s.CSSStyleDeclaration.prototype.setProperty = i;
            s.CSSStyleDeclaration.prototype.removeProperty = o;
          });
        })(t, {
          win: n,
        });
        const p = t.collectFonts
          ? (function ({ fontCb: t, doc: e }) {
              const n = e.defaultView;
              if (!n) {
                return () => {};
              }
              const r = [];
              const s = new WeakMap();
              const i = n.FontFace;
              n.FontFace = function (t, e, n) {
                const r = new i(t, e, n);
                s.set(r, {
                  family: t,
                  buffer: typeof e != "string",
                  descriptors: n,
                  fontSource:
                    typeof e == "string"
                      ? e
                      : JSON.stringify(Array.from(new Uint8Array(e))),
                });
                return r;
              };
              const o = io(e.fonts, "add", function (e) {
                return function (n) {
                  Eo(
                    Vo(() => {
                      const e = s.get(n);
                      if (e) {
                        t(e);
                        s.delete(n);
                      }
                    }),
                    0,
                  );
                  return e.apply(this, [n]);
                };
              });
              r.push(() => {
                n.FontFace = i;
              });
              r.push(o);
              return Vo(() => {
                r.forEach((t) => t());
              });
            })(t)
          : () => {};
        const f = (function (t) {
          const {
            doc: e,
            mirror: n,
            blockClass: r,
            blockSelector: s,
            unblockSelector: i,
            selectionCb: o,
          } = t;
          let a = true;
          const c = Vo(() => {
            const t = e.getSelection();
            if (!t || (a && Uo([t, "optionalAccess", (t) => t.isCollapsed]))) {
              return;
            }
            a = t.isCollapsed || false;
            const c = [];
            const u = t.rangeCount || 0;
            for (let e = 0; e < u; e++) {
              const o = t.getRangeAt(e);
              const {
                startContainer: a,
                startOffset: u,
                endContainer: l,
                endOffset: d,
              } = o;
              if (!ho(a, r, s, i, true) && !ho(l, r, s, i, true)) {
                c.push({
                  start: n.getId(a),
                  startOffset: u,
                  end: n.getId(l),
                  endOffset: d,
                });
              }
            }
            o({
              ranges: c,
            });
          });
          c();
          return to("selectionchange", c);
        })(t);
        const m = (function ({ doc: t, customElementCb: e }) {
          const n = t.defaultView;
          if (n && n.customElements) {
            return io(n.customElements, "define", function (t) {
              return function (n, r, s) {
                try {
                  e({
                    define: {
                      name: n,
                    },
                  });
                } catch (t) {}
                return t.apply(this, [n, r, s]);
              };
            });
          } else {
            return () => {};
          }
        })(t);
        const g = [];
        for (const e of t.plugins) {
          g.push(e.observer(e.callback, n, e.options));
        }
        return Vo(() => {
          zo.forEach((t) => t.reset());
          r.disconnect();
          s();
          i();
          o();
          a();
          c();
          u();
          l();
          d();
          h();
          p();
          f();
          m();
          g.forEach((t) => t());
        });
      }
      function ea(t) {
        return window[t] !== undefined;
      }
      function na(t) {
        return Boolean(
          window[t] !== undefined &&
          window[t].prototype &&
          "insertRule" in window[t].prototype &&
          "deleteRule" in window[t].prototype,
        );
      }
      class ra {
        constructor(t) {
          this.generateIdFn = t;
          this.iframeIdToRemoteIdMap = new WeakMap();
          this.iframeRemoteIdToIdMap = new WeakMap();
        }
        getId(t, e, n, r) {
          const s = n || this.getIdToRemoteIdMap(t);
          const i = r || this.getRemoteIdToIdMap(t);
          let o = s.get(e);
          if (!o) {
            o = this.generateIdFn();
            s.set(e, o);
            i.set(o, e);
          }
          return o;
        }
        getIds(t, e) {
          const n = this.getIdToRemoteIdMap(t);
          const r = this.getRemoteIdToIdMap(t);
          return e.map((e) => this.getId(t, e, n, r));
        }
        getRemoteId(t, e, n) {
          const r = n || this.getRemoteIdToIdMap(t);
          if (typeof e != "number") {
            return e;
          }
          const s = r.get(e);
          return s || -1;
        }
        getRemoteIds(t, e) {
          const n = this.getRemoteIdToIdMap(t);
          return e.map((e) => this.getRemoteId(t, e, n));
        }
        reset(t) {
          if (!t) {
            this.iframeIdToRemoteIdMap = new WeakMap();
            this.iframeRemoteIdToIdMap = new WeakMap();
            return;
          }
          this.iframeIdToRemoteIdMap.delete(t);
          this.iframeRemoteIdToIdMap.delete(t);
        }
        getIdToRemoteIdMap(t) {
          let e = this.iframeIdToRemoteIdMap.get(t);
          if (!e) {
            e = new Map();
            this.iframeIdToRemoteIdMap.set(t, e);
          }
          return e;
        }
        getRemoteIdToIdMap(t) {
          let e = this.iframeRemoteIdToIdMap.get(t);
          if (!e) {
            e = new Map();
            this.iframeRemoteIdToIdMap.set(t, e);
          }
          return e;
        }
      }
      function sa(t) {
        let e;
        let n = t[0];
        let r = 1;
        while (r < t.length) {
          const s = t[r];
          const i = t[r + 1];
          r += 2;
          if ((s === "optionalAccess" || s === "optionalCall") && n == null) {
            return;
          }
          if (s === "access" || s === "optionalAccess") {
            e = n;
            n = i(n);
          } else if (s === "call" || s === "optionalCall") {
            n = i((...t) => n.call(e, ...t));
            e = undefined;
          }
        }
        return n;
      }
      class ia {
        constructor() {
          this.crossOriginIframeMirror = new ra(Pi);
          this.crossOriginIframeRootIdMap = new WeakMap();
        }
        addIframe() {}
        addLoadListener() {}
        attachIframe() {}
      }
      class oa {
        constructor(t) {
          this.iframes = new WeakMap();
          this.crossOriginIframeMap = new WeakMap();
          this.crossOriginIframeMirror = new ra(Pi);
          this.crossOriginIframeRootIdMap = new WeakMap();
          this.mutationCb = t.mutationCb;
          this.wrappedEmit = t.wrappedEmit;
          this.stylesheetManager = t.stylesheetManager;
          this.recordCrossOriginIframes = t.recordCrossOriginIframes;
          this.crossOriginIframeStyleMirror = new ra(
            this.stylesheetManager.styleMirror.generateId.bind(
              this.stylesheetManager.styleMirror,
            ),
          );
          this.mirror = t.mirror;
          if (this.recordCrossOriginIframes) {
            window.addEventListener("message", this.handleMessage.bind(this));
          }
        }
        addIframe(t) {
          this.iframes.set(t, true);
          if (t.contentWindow) {
            this.crossOriginIframeMap.set(t.contentWindow, t);
          }
        }
        addLoadListener(t) {
          this.loadListener = t;
        }
        attachIframe(t, e) {
          this.mutationCb({
            adds: [
              {
                parentId: this.mirror.getId(t),
                nextId: null,
                node: e,
              },
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: true,
          });
          sa([
            this,
            "access",
            (t) => t.loadListener,
            "optionalCall",
            (e) => e(t),
          ]);
          if (
            t.contentDocument &&
            t.contentDocument.adoptedStyleSheets &&
            t.contentDocument.adoptedStyleSheets.length > 0
          ) {
            this.stylesheetManager.adoptStyleSheets(
              t.contentDocument.adoptedStyleSheets,
              this.mirror.getId(t.contentDocument),
            );
          }
        }
        handleMessage(t) {
          const e = t;
          if (e.data.type !== "rrweb" || e.origin !== e.data.origin) {
            return;
          }
          if (!t.source) {
            return;
          }
          const n = this.crossOriginIframeMap.get(t.source);
          if (!n) {
            return;
          }
          const r = this.transformCrossOriginEvent(n, e.data.event);
          if (r) {
            this.wrappedEmit(r, e.data.isCheckout);
          }
        }
        transformCrossOriginEvent(t, e) {
          switch (e.type) {
            case To.FullSnapshot: {
              this.crossOriginIframeMirror.reset(t);
              this.crossOriginIframeStyleMirror.reset(t);
              this.replaceIdOnNode(e.data.node, t);
              const n = e.data.node.id;
              this.crossOriginIframeRootIdMap.set(t, n);
              this.patchRootIdOnNode(e.data.node, n);
              return {
                timestamp: e.timestamp,
                type: To.IncrementalSnapshot,
                data: {
                  source: Co.Mutation,
                  adds: [
                    {
                      parentId: this.mirror.getId(t),
                      nextId: null,
                      node: e.data.node,
                    },
                  ],
                  removes: [],
                  texts: [],
                  attributes: [],
                  isAttachIframe: true,
                },
              };
            }
            case To.Meta:
            case To.Load:
            case To.DomContentLoaded:
              return false;
            case To.Plugin:
              return e;
            case To.Custom:
              this.replaceIds(e.data.payload, t, [
                "id",
                "parentId",
                "previousId",
                "nextId",
              ]);
              return e;
            case To.IncrementalSnapshot:
              switch (e.data.source) {
                case Co.Mutation:
                  e.data.adds.forEach((e) => {
                    this.replaceIds(e, t, ["parentId", "nextId", "previousId"]);
                    this.replaceIdOnNode(e.node, t);
                    const n = this.crossOriginIframeRootIdMap.get(t);
                    if (n) {
                      this.patchRootIdOnNode(e.node, n);
                    }
                  });
                  e.data.removes.forEach((e) => {
                    this.replaceIds(e, t, ["parentId", "id"]);
                  });
                  e.data.attributes.forEach((e) => {
                    this.replaceIds(e, t, ["id"]);
                  });
                  e.data.texts.forEach((e) => {
                    this.replaceIds(e, t, ["id"]);
                  });
                  return e;
                case Co.Drag:
                case Co.TouchMove:
                case Co.MouseMove:
                  e.data.positions.forEach((e) => {
                    this.replaceIds(e, t, ["id"]);
                  });
                  return e;
                case Co.ViewportResize:
                  return false;
                case Co.MediaInteraction:
                case Co.MouseInteraction:
                case Co.Scroll:
                case Co.CanvasMutation:
                case Co.Input:
                  this.replaceIds(e.data, t, ["id"]);
                  return e;
                case Co.StyleSheetRule:
                case Co.StyleDeclaration:
                  this.replaceIds(e.data, t, ["id"]);
                  this.replaceStyleIds(e.data, t, ["styleId"]);
                  return e;
                case Co.Font:
                  return e;
                case Co.Selection:
                  e.data.ranges.forEach((e) => {
                    this.replaceIds(e, t, ["start", "end"]);
                  });
                  return e;
                case Co.AdoptedStyleSheet:
                  this.replaceIds(e.data, t, ["id"]);
                  this.replaceStyleIds(e.data, t, ["styleIds"]);
                  sa([
                    e,
                    "access",
                    (t) => t.data,
                    "access",
                    (t) => t.styles,
                    "optionalAccess",
                    (t) => t.forEach,
                    "call",
                    (e) =>
                      e((e) => {
                        this.replaceStyleIds(e, t, ["styleId"]);
                      }),
                  ]);
                  return e;
              }
          }
          return false;
        }
        replace(t, e, n, r) {
          for (const s of r) {
            if (Array.isArray(e[s]) || typeof e[s] == "number") {
              if (Array.isArray(e[s])) {
                e[s] = t.getIds(n, e[s]);
              } else {
                e[s] = t.getId(n, e[s]);
              }
            }
          }
          return e;
        }
        replaceIds(t, e, n) {
          return this.replace(this.crossOriginIframeMirror, t, e, n);
        }
        replaceStyleIds(t, e, n) {
          return this.replace(this.crossOriginIframeStyleMirror, t, e, n);
        }
        replaceIdOnNode(t, e) {
          this.replaceIds(t, e, ["id", "rootId"]);
          if ("childNodes" in t) {
            t.childNodes.forEach((t) => {
              this.replaceIdOnNode(t, e);
            });
          }
        }
        patchRootIdOnNode(t, e) {
          if (t.type !== gi.Document && !t.rootId) {
            t.rootId = e;
          }
          if ("childNodes" in t) {
            t.childNodes.forEach((t) => {
              this.patchRootIdOnNode(t, e);
            });
          }
        }
      }
      class aa {
        init() {}
        addShadowRoot() {}
        observeAttachShadow() {}
        reset() {}
      }
      class ca {
        constructor(t) {
          this.shadowDoms = new WeakSet();
          this.restoreHandlers = [];
          this.mutationCb = t.mutationCb;
          this.scrollCb = t.scrollCb;
          this.bypassOptions = t.bypassOptions;
          this.mirror = t.mirror;
          this.init();
        }
        init() {
          this.reset();
          this.patchAttachShadow(Element, document);
        }
        addShadowRoot(t, e) {
          if (!bi(t)) {
            return;
          }
          if (this.shadowDoms.has(t)) {
            return;
          }
          this.shadowDoms.add(t);
          const n = qo(
            {
              ...this.bypassOptions,
              doc: e,
              mutationCb: this.mutationCb,
              mirror: this.mirror,
              shadowDomManager: this,
            },
            t,
          );
          this.restoreHandlers.push(() => n.disconnect());
          this.restoreHandlers.push(
            Ko({
              ...this.bypassOptions,
              scrollCb: this.scrollCb,
              doc: t,
              mirror: this.mirror,
            }),
          );
          Eo(() => {
            if (t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0) {
              this.bypassOptions.stylesheetManager.adoptStyleSheets(
                t.adoptedStyleSheets,
                this.mirror.getId(t.host),
              );
            }
            this.restoreHandlers.push(
              Qo(
                {
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager,
                },
                t,
              ),
            );
          }, 0);
        }
        observeAttachShadow(t) {
          if (t.contentWindow && t.contentDocument) {
            this.patchAttachShadow(t.contentWindow.Element, t.contentDocument);
          }
        }
        patchAttachShadow(t, e) {
          const n = this;
          this.restoreHandlers.push(
            io(t.prototype, "attachShadow", function (t) {
              return function (r) {
                const s = t.call(this, r);
                if (this.shadowRoot && wo(this)) {
                  n.addShadowRoot(this.shadowRoot, e);
                }
                return s;
              };
            }),
          );
        }
        reset() {
          this.restoreHandlers.forEach((t) => {
            try {
              t();
            } catch (t) {}
          });
          this.restoreHandlers = [];
          this.shadowDoms = new WeakSet();
        }
      }
      class ua {
        reset() {}
        freeze() {}
        unfreeze() {}
        lock() {}
        unlock() {}
        snapshot() {}
      }
      class la {
        constructor(t) {
          this.trackedLinkElements = new WeakSet();
          this.styleMirror = new bo();
          this.mutationCb = t.mutationCb;
          this.adoptedStyleSheetCb = t.adoptedStyleSheetCb;
        }
        attachLinkElement(t, e) {
          if ("_cssText" in e.attributes) {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [
                {
                  id: e.id,
                  attributes: e.attributes,
                },
              ],
            });
          }
          this.trackLinkElement(t);
        }
        trackLinkElement(t) {
          if (!this.trackedLinkElements.has(t)) {
            this.trackedLinkElements.add(t);
            this.trackStylesheetInLinkElement(t);
          }
        }
        adoptStyleSheets(t, e) {
          if (t.length === 0) {
            return;
          }
          const n = {
            id: e,
            styleIds: [],
          };
          const r = [];
          for (const e of t) {
            let t;
            if (this.styleMirror.has(e)) {
              t = this.styleMirror.getId(e);
            } else {
              t = this.styleMirror.add(e);
              r.push({
                styleId: t,
                rules: Array.from(e.rules || CSSRule, (t, e) => ({
                  rule: _i(t),
                  index: e,
                })),
              });
            }
            n.styleIds.push(t);
          }
          if (r.length > 0) {
            n.styles = r;
          }
          this.adoptedStyleSheetCb(n);
        }
        reset() {
          this.styleMirror.reset();
          this.trackedLinkElements = new WeakSet();
        }
        trackStylesheetInLinkElement(t) {}
      }
      class da {
        constructor() {
          this.nodeMap = new WeakMap();
          this.loop = true;
          this.periodicallyClear();
        }
        periodicallyClear() {
          (function (...t) {
            ko("requestAnimationFrame")(...t);
          })(() => {
            this.clear();
            if (this.loop) {
              this.periodicallyClear();
            }
          });
        }
        inOtherBuffer(t, e) {
          const n = this.nodeMap.get(t);
          return n && Array.from(n).some((t) => t !== e);
        }
        add(t, e) {
          this.nodeMap.set(t, (this.nodeMap.get(t) || new Set()).add(e));
        }
        clear() {
          this.nodeMap = new WeakMap();
        }
        destroy() {
          this.loop = false;
        }
      }
      let ha;
      let pa;
      const fa = new wi();
      function ma(t = {}) {
        const {
          emit: e,
          checkoutEveryNms: n,
          checkoutEveryNth: r,
          blockClass: s = "rr-block",
          blockSelector: i = null,
          unblockSelector: o = null,
          ignoreClass: a = "rr-ignore",
          ignoreSelector: c = null,
          maskAllText: u = false,
          maskTextClass: l = "rr-mask",
          unmaskTextClass: d = null,
          maskTextSelector: h = null,
          unmaskTextSelector: p = null,
          inlineStylesheet: f = true,
          maskAllInputs: m,
          maskInputOptions: g,
          slimDOMOptions: y,
          maskAttributeFn: v,
          maskInputFn: b,
          maskTextFn: S,
          maxCanvasSize: _ = null,
          packFn: w,
          sampling: x = {},
          dataURLOptions: k = {},
          mousemoveWait: E,
          recordCanvas: T = false,
          recordCrossOriginIframes: C = false,
          recordAfter: M = t.recordAfter === "DOMContentLoaded"
            ? t.recordAfter
            : "load",
          userTriggeredOnInput: I = false,
          collectFonts: A = false,
          inlineImages: R = false,
          plugins: P,
          keepIframeSrcFn: O = () => false,
          ignoreCSSAttributes: D = new Set([]),
          errorHandler: L,
          onMutation: N,
          getCanvasManager: j,
        } = t;
        Bo = L;
        const F = !C || window.parent === window;
        let $ = false;
        if (!F) {
          try {
            if (window.parent.document) {
              $ = false;
            }
          } catch (t) {
            $ = true;
          }
        }
        if (F && !e) {
          throw new Error("emit function is required");
        }
        if (E !== undefined && x.mousemove === undefined) {
          x.mousemove = E;
        }
        fa.reset();
        const B =
          m === true
            ? {
                color: true,
                date: true,
                "datetime-local": true,
                email: true,
                month: true,
                number: true,
                range: true,
                search: true,
                tel: true,
                text: true,
                time: true,
                url: true,
                week: true,
                textarea: true,
                select: true,
                radio: true,
                checkbox: true,
              }
            : g !== undefined
              ? g
              : {};
        const V =
          y === true || y === "all"
            ? {
                script: true,
                comment: true,
                headFavicon: true,
                headWhitespace: true,
                headMetaSocial: true,
                headMetaRobots: true,
                headMetaHttpEquiv: true,
                headMetaVerification: true,
                headMetaAuthorship: y === "all",
                headMetaDescKeywords: y === "all",
              }
            : y || {};
        let U;
        (function (t = window) {
          if ("NodeList" in t && !t.NodeList.prototype.forEach) {
            t.NodeList.prototype.forEach = Array.prototype.forEach;
          }
          if ("DOMTokenList" in t && !t.DOMTokenList.prototype.forEach) {
            t.DOMTokenList.prototype.forEach = Array.prototype.forEach;
          }
          Node.prototype.contains ||= (...t) => {
            let e = t[0];
            if (!(0 in t)) {
              throw new TypeError("1 argument is required");
            }
            do {
              if (this === e) {
                return true;
              }
            } while ((e = e && e.parentNode));
            return false;
          };
        })();
        let z = 0;
        const W = (t) => {
          for (const e of P || []) {
            if (e.eventProcessor) {
              t = e.eventProcessor(t);
            }
          }
          if (w && !$) {
            t = w(t);
          }
          return t;
        };
        ha = (t, s) => {
          const i = t;
          i.timestamp = oo();
          if (
            !!ni([
              zo,
              "access",
              (t) => t[0],
              "optionalAccess",
              (t) => t.isFrozen,
              "call",
              (t) => t(),
            ]) &&
            i.type !== To.FullSnapshot &&
            (i.type !== To.IncrementalSnapshot || i.data.source !== Co.Mutation)
          ) {
            zo.forEach((t) => t.unfreeze());
          }
          if (F) {
            ni([e, "optionalCall", (t) => t(W(i), s)]);
          } else if ($) {
            const t = {
              type: "rrweb",
              event: W(i),
              origin: window.location.origin,
              isCheckout: s,
            };
            window.parent.postMessage(t, "*");
          }
          if (i.type === To.FullSnapshot) {
            U = i;
            z = 0;
          } else if (i.type === To.IncrementalSnapshot) {
            if (i.data.source === Co.Mutation && i.data.isAttachIframe) {
              return;
            }
            z++;
            const t = r && z >= r;
            const e = n && U && i.timestamp - U.timestamp > n;
            if (t || e) {
              Q(true);
            }
          }
        };
        const q = (t) => {
          ha({
            type: To.IncrementalSnapshot,
            data: {
              source: Co.Mutation,
              ...t,
            },
          });
        };
        const H = (t) =>
          ha({
            type: To.IncrementalSnapshot,
            data: {
              source: Co.Scroll,
              ...t,
            },
          });
        const K = (t) =>
          ha({
            type: To.IncrementalSnapshot,
            data: {
              source: Co.CanvasMutation,
              ...t,
            },
          });
        const X = new la({
          mutationCb: q,
          adoptedStyleSheetCb: (t) =>
            ha({
              type: To.IncrementalSnapshot,
              data: {
                source: Co.AdoptedStyleSheet,
                ...t,
              },
            }),
        });
        const Y =
          typeof __RRWEB_EXCLUDE_IFRAME__ == "boolean" &&
          __RRWEB_EXCLUDE_IFRAME__
            ? new ia()
            : new oa({
                mirror: fa,
                mutationCb: q,
                stylesheetManager: X,
                recordCrossOriginIframes: C,
                wrappedEmit: ha,
              });
        for (const t of P || []) {
          if (t.getMirror) {
            t.getMirror({
              nodeMirror: fa,
              crossOriginIframeMirror: Y.crossOriginIframeMirror,
              crossOriginIframeStyleMirror: Y.crossOriginIframeStyleMirror,
            });
          }
        }
        const G = new da();
        const J = (function (t, e) {
          try {
            if (t) {
              return t(e);
            } else {
              return new ua();
            }
          } catch (t) {
            console.warn("Unable to initialize CanvasManager");
            return new ua();
          }
        })(j, {
          mirror: fa,
          win: window,
          mutationCb: (t) =>
            ha({
              type: To.IncrementalSnapshot,
              data: {
                source: Co.CanvasMutation,
                ...t,
              },
            }),
          recordCanvas: T,
          blockClass: s,
          blockSelector: i,
          unblockSelector: o,
          maxCanvasSize: _,
          sampling: x.canvas,
          dataURLOptions: k,
          errorHandler: L,
        });
        const Z =
          typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == "boolean" &&
          __RRWEB_EXCLUDE_SHADOW_DOM__
            ? new aa()
            : new ca({
                mutationCb: q,
                scrollCb: H,
                bypassOptions: {
                  onMutation: N,
                  blockClass: s,
                  blockSelector: i,
                  unblockSelector: o,
                  maskAllText: u,
                  maskTextClass: l,
                  unmaskTextClass: d,
                  maskTextSelector: h,
                  unmaskTextSelector: p,
                  inlineStylesheet: f,
                  maskInputOptions: B,
                  dataURLOptions: k,
                  maskAttributeFn: v,
                  maskTextFn: S,
                  maskInputFn: b,
                  recordCanvas: T,
                  inlineImages: R,
                  sampling: x,
                  slimDOMOptions: V,
                  iframeManager: Y,
                  stylesheetManager: X,
                  canvasManager: J,
                  keepIframeSrcFn: O,
                  processedNodeManager: G,
                },
                mirror: fa,
              });
        const Q = (t = false) => {
          ha(
            {
              type: To.Meta,
              data: {
                href: window.location.href,
                width: uo(),
                height: co(),
              },
            },
            t,
          );
          X.reset();
          Z.init();
          zo.forEach((t) => t.lock());
          const e = (function (t, e) {
            const {
              mirror: n = new wi(),
              blockClass: r = "rr-block",
              blockSelector: s = null,
              unblockSelector: i = null,
              maskAllText: o = false,
              maskTextClass: a = "rr-mask",
              unmaskTextClass: c = null,
              maskTextSelector: u = null,
              unmaskTextSelector: l = null,
              inlineStylesheet: d = true,
              inlineImages: h = false,
              recordCanvas: p = false,
              maskAllInputs: f = false,
              maskAttributeFn: m,
              maskTextFn: g,
              maskInputFn: y,
              slimDOM: v = false,
              dataURLOptions: b,
              preserveWhiteSpace: S,
              onSerialize: _,
              onIframeLoad: w,
              iframeLoadTimeout: x,
              onStylesheetLoad: k,
              stylesheetLoadTimeout: E,
              keepIframeSrcFn: T = () => false,
            } = e || {};
            return Zi(t, {
              doc: t,
              mirror: n,
              blockClass: r,
              blockSelector: s,
              unblockSelector: i,
              maskAllText: o,
              maskTextClass: a,
              unmaskTextClass: c,
              maskTextSelector: u,
              unmaskTextSelector: l,
              skipChild: false,
              inlineStylesheet: d,
              maskInputOptions:
                f === true
                  ? {
                      color: true,
                      date: true,
                      "datetime-local": true,
                      email: true,
                      month: true,
                      number: true,
                      range: true,
                      search: true,
                      tel: true,
                      text: true,
                      time: true,
                      url: true,
                      week: true,
                      textarea: true,
                      select: true,
                    }
                  : f === false
                    ? {}
                    : f,
              maskAttributeFn: m,
              maskTextFn: g,
              maskInputFn: y,
              slimDOMOptions:
                v === true || v === "all"
                  ? {
                      script: true,
                      comment: true,
                      headFavicon: true,
                      headWhitespace: true,
                      headMetaDescKeywords: v === "all",
                      headMetaSocial: true,
                      headMetaRobots: true,
                      headMetaHttpEquiv: true,
                      headMetaAuthorship: true,
                      headMetaVerification: true,
                    }
                  : v === false
                    ? {}
                    : v,
              dataURLOptions: b,
              inlineImages: h,
              recordCanvas: p,
              preserveWhiteSpace: S,
              onSerialize: _,
              onIframeLoad: w,
              iframeLoadTimeout: x,
              onStylesheetLoad: k,
              stylesheetLoadTimeout: E,
              keepIframeSrcFn: T,
              newlyAddedElement: false,
            });
          })(document, {
            mirror: fa,
            blockClass: s,
            blockSelector: i,
            unblockSelector: o,
            maskAllText: u,
            maskTextClass: l,
            unmaskTextClass: d,
            maskTextSelector: h,
            unmaskTextSelector: p,
            inlineStylesheet: f,
            maskAllInputs: B,
            maskAttributeFn: v,
            maskInputFn: b,
            maskTextFn: S,
            slimDOM: V,
            dataURLOptions: k,
            recordCanvas: T,
            inlineImages: R,
            onSerialize: (t) => {
              if (go(t, fa)) {
                Y.addIframe(t);
              }
              if (yo(t, fa)) {
                X.trackLinkElement(t);
              }
              if (vo(t)) {
                Z.addShadowRoot(t.shadowRoot, document);
              }
            },
            onIframeLoad: (t, e) => {
              Y.attachIframe(t, e);
              Z.observeAttachShadow(t);
            },
            onStylesheetLoad: (t, e) => {
              X.attachLinkElement(t, e);
            },
            keepIframeSrcFn: O,
          });
          if (!e) {
            return console.warn("Failed to snapshot the document");
          }
          ha({
            type: To.FullSnapshot,
            data: {
              node: e,
              initialOffset: ao(window),
            },
          });
          zo.forEach((t) => t.unlock());
          if (
            document.adoptedStyleSheets &&
            document.adoptedStyleSheets.length > 0
          ) {
            X.adoptStyleSheets(document.adoptedStyleSheets, fa.getId(document));
          }
        };
        pa = Q;
        try {
          const t = [];
          const e = (t) =>
            Vo(ta)(
              {
                onMutation: N,
                mutationCb: q,
                mousemoveCb: (t, e) =>
                  ha({
                    type: To.IncrementalSnapshot,
                    data: {
                      source: e,
                      positions: t,
                    },
                  }),
                mouseInteractionCb: (t) =>
                  ha({
                    type: To.IncrementalSnapshot,
                    data: {
                      source: Co.MouseInteraction,
                      ...t,
                    },
                  }),
                scrollCb: H,
                viewportResizeCb: (t) =>
                  ha({
                    type: To.IncrementalSnapshot,
                    data: {
                      source: Co.ViewportResize,
                      ...t,
                    },
                  }),
                inputCb: (t) =>
                  ha({
                    type: To.IncrementalSnapshot,
                    data: {
                      source: Co.Input,
                      ...t,
                    },
                  }),
                mediaInteractionCb: (t) =>
                  ha({
                    type: To.IncrementalSnapshot,
                    data: {
                      source: Co.MediaInteraction,
                      ...t,
                    },
                  }),
                styleSheetRuleCb: (t) =>
                  ha({
                    type: To.IncrementalSnapshot,
                    data: {
                      source: Co.StyleSheetRule,
                      ...t,
                    },
                  }),
                styleDeclarationCb: (t) =>
                  ha({
                    type: To.IncrementalSnapshot,
                    data: {
                      source: Co.StyleDeclaration,
                      ...t,
                    },
                  }),
                canvasMutationCb: K,
                fontCb: (t) =>
                  ha({
                    type: To.IncrementalSnapshot,
                    data: {
                      source: Co.Font,
                      ...t,
                    },
                  }),
                selectionCb: (t) => {
                  ha({
                    type: To.IncrementalSnapshot,
                    data: {
                      source: Co.Selection,
                      ...t,
                    },
                  });
                },
                customElementCb: (t) => {
                  ha({
                    type: To.IncrementalSnapshot,
                    data: {
                      source: Co.CustomElement,
                      ...t,
                    },
                  });
                },
                blockClass: s,
                ignoreClass: a,
                ignoreSelector: c,
                maskAllText: u,
                maskTextClass: l,
                unmaskTextClass: d,
                maskTextSelector: h,
                unmaskTextSelector: p,
                maskInputOptions: B,
                inlineStylesheet: f,
                sampling: x,
                recordCanvas: T,
                inlineImages: R,
                userTriggeredOnInput: I,
                collectFonts: A,
                doc: t,
                maskAttributeFn: v,
                maskInputFn: b,
                maskTextFn: S,
                keepIframeSrcFn: O,
                blockSelector: i,
                unblockSelector: o,
                slimDOMOptions: V,
                dataURLOptions: k,
                mirror: fa,
                iframeManager: Y,
                stylesheetManager: X,
                shadowDomManager: Z,
                processedNodeManager: G,
                canvasManager: J,
                ignoreCSSAttributes: D,
                plugins:
                  ni([
                    P,
                    "optionalAccess",
                    (t) => t.filter,
                    "call",
                    (t) => t((t) => t.observer),
                    "optionalAccess",
                    (t) => t.map,
                    "call",
                    (t) =>
                      t((t) => ({
                        observer: t.observer,
                        options: t.options,
                        callback: (e) =>
                          ha({
                            type: To.Plugin,
                            data: {
                              plugin: t.name,
                              payload: e,
                            },
                          }),
                      })),
                  ]) || [],
              },
              {},
            );
          Y.addLoadListener((n) => {
            try {
              t.push(e(n.contentDocument));
            } catch (t) {
              console.warn(t);
            }
          });
          const n = () => {
            Q();
            t.push(e(document));
          };
          if (
            document.readyState === "interactive" ||
            document.readyState === "complete"
          ) {
            n();
          } else {
            t.push(
              to("DOMContentLoaded", () => {
                ha({
                  type: To.DomContentLoaded,
                  data: {},
                });
                if (M === "DOMContentLoaded") {
                  n();
                }
              }),
            );
            t.push(
              to(
                "load",
                () => {
                  ha({
                    type: To.Load,
                    data: {},
                  });
                  if (M === "load") {
                    n();
                  }
                },
                window,
              ),
            );
          }
          return () => {
            t.forEach((t) => t());
            G.destroy();
            pa = undefined;
            Bo = undefined;
          };
        } catch (t) {
          console.warn(t);
        }
      }
      ma.mirror = fa;
      ma.takeFullSnapshot = function (t) {
        if (!pa) {
          throw new Error("please take full snapshot after start recording");
        }
        pa(t);
      };
      function ga(t) {
        if (t > 9999999999) {
          return t;
        } else {
          return t * 1000;
        }
      }
      function ya(t) {
        if (t > 9999999999) {
          return t / 1000;
        } else {
          return t;
        }
      }
      function va(t, e) {
        if (e.category !== "sentry.transaction") {
          if (["ui.click", "ui.input"].includes(e.category)) {
            t.triggerUserActivity();
          } else {
            t.checkAndHandleExpiredSession();
          }
          t.addUpdate(() => {
            t.throttledAddEvent({
              type: To.Custom,
              timestamp: (e.timestamp || 0) * 1000,
              data: {
                tag: "breadcrumb",
                payload: ot(e, 10, 1000),
              },
            });
            return e.category === "console";
          });
        }
      }
      function ba(t) {
        return t.closest("button,a") || t;
      }
      function Sa(t) {
        const e = _a(t);
        if (e && e instanceof Element) {
          return ba(e);
        } else {
          return e;
        }
      }
      function _a(t) {
        if (
          (function (t) {
            return typeof t == "object" && !!t && "target" in t;
          })(t)
        ) {
          return t.target;
        } else {
          return t;
        }
      }
      let wa;
      function xa(t) {
        if (!wa) {
          wa = [];
          (0, E.hl)(ci, "open", function (t) {
            return function (...e) {
              if (wa) {
                try {
                  wa.forEach((t) => t());
                } catch (t) {}
              }
              return t.apply(ci, e);
            };
          });
        }
        wa.push(t);
        return () => {
          const e = wa ? wa.indexOf(t) : -1;
          if (e > -1) {
            wa.splice(e, 1);
          }
        };
      }
      class ka {
        constructor(t, e, n = va) {
          this._lastMutation = 0;
          this._lastScroll = 0;
          this._clicks = [];
          this._timeout = e.timeout / 1000;
          this._threshold = e.threshold / 1000;
          this._scollTimeout = e.scrollTimeout / 1000;
          this._replay = t;
          this._ignoreSelector = e.ignoreSelector;
          this._addBreadcrumbEvent = n;
        }
        addListeners() {
          const t = xa(() => {
            this._lastMutation = Ta();
          });
          this._teardown = () => {
            t();
            this._clicks = [];
            this._lastMutation = 0;
            this._lastScroll = 0;
          };
        }
        removeListeners() {
          if (this._teardown) {
            this._teardown();
          }
          if (this._checkClickTimeout) {
            clearTimeout(this._checkClickTimeout);
          }
        }
        handleClick(t, e) {
          if (
            (function (t, e) {
              if (!Ea.includes(t.tagName)) {
                return true;
              }
              if (
                t.tagName === "INPUT" &&
                !["submit", "button"].includes(t.getAttribute("type") || "")
              ) {
                return true;
              }
              if (
                t.tagName === "A" &&
                (t.hasAttribute("download") ||
                  (t.hasAttribute("target") &&
                    t.getAttribute("target") !== "_self"))
              ) {
                return true;
              }
              if (e && t.matches(e)) {
                return true;
              }
              return false;
            })(e, this._ignoreSelector) ||
            !(function (t) {
              return (
                !!t.data && typeof t.data.nodeId == "number" && !!t.timestamp
              );
            })(t)
          ) {
            return;
          }
          const n = {
            timestamp: ya(t.timestamp),
            clickBreadcrumb: t,
            clickCount: 0,
            node: e,
          };
          if (
            !this._clicks.some(
              (t) =>
                t.node === n.node && Math.abs(t.timestamp - n.timestamp) < 1,
            )
          ) {
            this._clicks.push(n);
            if (this._clicks.length === 1) {
              this._scheduleCheckClicks();
            }
          }
        }
        registerMutation(t = Date.now()) {
          this._lastMutation = ya(t);
        }
        registerScroll(t = Date.now()) {
          this._lastScroll = ya(t);
        }
        registerClick(t) {
          const e = ba(t);
          this._handleMultiClick(e);
        }
        _handleMultiClick(t) {
          this._getClicks(t).forEach((t) => {
            t.clickCount++;
          });
        }
        _getClicks(t) {
          return this._clicks.filter((e) => e.node === t);
        }
        _checkClicks() {
          const t = [];
          const e = Ta();
          this._clicks.forEach((n) => {
            if (!n.mutationAfter && this._lastMutation) {
              n.mutationAfter =
                n.timestamp <= this._lastMutation
                  ? this._lastMutation - n.timestamp
                  : undefined;
            }
            if (!n.scrollAfter && this._lastScroll) {
              n.scrollAfter =
                n.timestamp <= this._lastScroll
                  ? this._lastScroll - n.timestamp
                  : undefined;
            }
            if (n.timestamp + this._timeout <= e) {
              t.push(n);
            }
          });
          for (const e of t) {
            const t = this._clicks.indexOf(e);
            if (t > -1) {
              this._generateBreadcrumbs(e);
              this._clicks.splice(t, 1);
            }
          }
          if (this._clicks.length) {
            this._scheduleCheckClicks();
          }
        }
        _generateBreadcrumbs(t) {
          const e = this._replay;
          const n = t.scrollAfter && t.scrollAfter <= this._scollTimeout;
          const r = t.mutationAfter && t.mutationAfter <= this._threshold;
          const s = !n && !r;
          const { clickCount: i, clickBreadcrumb: o } = t;
          if (s) {
            const n =
              Math.min(t.mutationAfter || this._timeout, this._timeout) * 1000;
            const r = n < this._timeout * 1000 ? "mutation" : "timeout";
            const s = {
              type: "default",
              message: o.message,
              timestamp: o.timestamp,
              category: "ui.slowClickDetected",
              data: {
                ...o.data,
                url: ci.location.href,
                route: e.getCurrentRoute(),
                timeAfterClickMs: n,
                endReason: r,
                clickCount: i || 1,
              },
            };
            this._addBreadcrumbEvent(e, s);
          } else if (i > 1) {
            const t = {
              type: "default",
              message: o.message,
              timestamp: o.timestamp,
              category: "ui.multiClick",
              data: {
                ...o.data,
                url: ci.location.href,
                route: e.getCurrentRoute(),
                clickCount: i,
                metric: true,
              },
            };
            this._addBreadcrumbEvent(e, t);
          }
        }
        _scheduleCheckClicks() {
          if (this._checkClickTimeout) {
            clearTimeout(this._checkClickTimeout);
          }
          this._checkClickTimeout = Qe(() => this._checkClicks(), 1000);
        }
      }
      const Ea = ["A", "BUTTON", "INPUT"];
      function Ta() {
        return Date.now() / 1000;
      }
      function Ca(t, e) {
        try {
          if (
            !(function (t) {
              return t.type === 3;
            })(e)
          ) {
            return;
          }
          const { source: n } = e.data;
          if (n === Co.Mutation) {
            t.registerMutation(e.timestamp);
          }
          if (n === Co.Scroll) {
            t.registerScroll(e.timestamp);
          }
          if (
            (function (t) {
              return t.data.source === Co.MouseInteraction;
            })(e)
          ) {
            const { type: n, id: r } = e.data;
            const s = ma.mirror.getNode(r);
            if (s instanceof HTMLElement && n === Mo.Click) {
              t.registerClick(s);
            }
          }
        } catch (t) {}
      }
      function Ma(t) {
        return {
          timestamp: Date.now() / 1000,
          type: "default",
          ...t,
        };
      }
      var Ia;
      (function (t) {
        t[(t.Document = 0)] = "Document";
        t[(t.DocumentType = 1)] = "DocumentType";
        t[(t.Element = 2)] = "Element";
        t[(t.Text = 3)] = "Text";
        t[(t.CDATA = 4)] = "CDATA";
        t[(t.Comment = 5)] = "Comment";
      })((Ia ||= {}));
      const Aa = new Set([
        "id",
        "class",
        "aria-label",
        "role",
        "name",
        "alt",
        "title",
        "data-test-id",
        "data-testid",
        "disabled",
        "aria-disabled",
        "data-sentry-component",
      ]);
      function Ra(t) {
        const e = {};
        if (!t["data-sentry-component"] && t["data-sentry-element"]) {
          t["data-sentry-component"] = t["data-sentry-element"];
        }
        for (const n in t) {
          if (Aa.has(n)) {
            let r = n;
            if (n === "data-testid" || n === "data-test-id") {
              r = "testId";
            }
            e[r] = t[n];
          }
        }
        return e;
      }
      const Pa = (t) => (e) => {
        if (!t.isEnabled()) {
          return;
        }
        const n = (function (t) {
          const { target: e, message: n } = (function (t) {
            const e = t.name === "click";
            let n;
            let r = null;
            try {
              r = e ? Sa(t.event) : _a(t.event);
              n =
                (0, Xn.Rt)(r, {
                  maxStringLength: 200,
                }) || "<unknown>";
            } catch (t) {
              n = "<unknown>";
            }
            return {
              target: r,
              message: n,
            };
          })(t);
          return Ma({
            category: `ui.${t.name}`,
            ...Oa(e, n),
          });
        })(e);
        if (!n) {
          return;
        }
        const r = e.name === "click";
        const s = r ? e.event : undefined;
        var i;
        var o;
        var a;
        if (
          !!r &&
          !!t.clickDetector &&
          !!s &&
          !!s.target &&
          !s.altKey &&
          !s.metaKey &&
          !s.ctrlKey &&
          !s.shiftKey
        ) {
          i = t.clickDetector;
          o = n;
          a = Sa(e.event);
          i.handleClick(o, a);
        }
        va(t, n);
      };
      function Oa(t, e) {
        const n = ma.mirror.getId(t);
        const r = n && ma.mirror.getNode(n);
        const s = r && ma.mirror.getMeta(r);
        const i =
          s &&
          (function (t) {
            return t.type === Ia.Element;
          })(s)
            ? s
            : null;
        return {
          message: e,
          data: i
            ? {
                nodeId: n,
                node: {
                  id: n,
                  tagName: i.tagName,
                  textContent: Array.from(i.childNodes)
                    .map((t) => t.type === Ia.Text && t.textContent)
                    .filter(Boolean)
                    .map((t) => t.trim())
                    .join(""),
                  attributes: Ra(i.attributes),
                },
              }
            : {},
        };
      }
      function Da(t, e) {
        if (!t.isEnabled()) {
          return;
        }
        t.updateUserActivity();
        const n = (function (t) {
          const {
            metaKey: e,
            shiftKey: n,
            ctrlKey: r,
            altKey: s,
            key: i,
            target: o,
          } = t;
          if (
            !o ||
            (function (t) {
              return (
                t.tagName === "INPUT" ||
                t.tagName === "TEXTAREA" ||
                t.isContentEditable
              );
            })(o) ||
            !i
          ) {
            return null;
          }
          const a = e || r || s;
          const c = i.length === 1;
          if (!a && c) {
            return null;
          }
          const u =
            (0, Xn.Rt)(o, {
              maxStringLength: 200,
            }) || "<unknown>";
          const l = Oa(o, u);
          return Ma({
            category: "ui.keyDown",
            message: u,
            data: {
              ...l.data,
              metaKey: e,
              shiftKey: n,
              ctrlKey: r,
              altKey: s,
              key: i,
            },
          });
        })(e);
        if (n) {
          va(t, n);
        }
      }
      const La = {
        resource: function (t) {
          const {
            entryType: e,
            initiatorType: n,
            name: r,
            responseEnd: s,
            startTime: i,
            decodedBodySize: o,
            encodedBodySize: a,
            responseStatus: c,
            transferSize: u,
          } = t;
          if (["fetch", "xmlhttprequest"].includes(n)) {
            return null;
          }
          return {
            type: `${e}.${n}`,
            start: Fa(i),
            end: Fa(s),
            name: r,
            data: {
              size: u,
              statusCode: c,
              decodedBodySize: o,
              encodedBodySize: a,
            },
          };
        },
        paint: function (t) {
          const { duration: e, entryType: n, name: r, startTime: s } = t;
          const i = Fa(s);
          return {
            type: n,
            name: r,
            start: i,
            end: i + e,
            data: undefined,
          };
        },
        navigation: function (t) {
          const {
            entryType: e,
            name: n,
            decodedBodySize: r,
            duration: s,
            domComplete: i,
            encodedBodySize: o,
            domContentLoadedEventStart: a,
            domContentLoadedEventEnd: c,
            domInteractive: u,
            loadEventStart: l,
            loadEventEnd: d,
            redirectCount: h,
            startTime: p,
            transferSize: f,
            type: m,
          } = t;
          if (s === 0) {
            return null;
          }
          return {
            type: `${e}.${m}`,
            start: Fa(p),
            end: Fa(i),
            name: n,
            data: {
              size: f,
              decodedBodySize: r,
              encodedBodySize: o,
              duration: s,
              domInteractive: u,
              domContentLoadedEventStart: a,
              domContentLoadedEventEnd: c,
              loadEventStart: l,
              loadEventEnd: d,
              domComplete: i,
              redirectCount: h,
            },
          };
        },
      };
      function Na(t, e) {
        return ({ metric: n }) => {
          e.replayPerformanceEntries.push(t(n));
        };
      }
      function ja(t) {
        const e = La[t.entryType];
        if (e) {
          return e(t);
        } else {
          return null;
        }
      }
      function Fa(t) {
        return ((_.Z1 || ci.performance.timeOrigin) + t) / 1000;
      }
      function $a(t) {
        const e = t.entries[t.entries.length - 1];
        return za(t, "largest-contentful-paint", e ? e.element : undefined);
      }
      function Ba(t) {
        const e = t.entries[0];
        return za(
          t,
          "cumulative-layout-shift",
          e && e.sources && e.sources[0] ? e.sources[0].node : undefined,
        );
      }
      function Va(t) {
        const e = t.entries[t.entries.length - 1];
        return za(t, "first-input-delay", e ? e.target : undefined);
      }
      function Ua(t) {
        const e = t.entries[t.entries.length - 1];
        return za(t, "interaction-to-next-paint", e ? e.target : undefined);
      }
      function za(t, e, n) {
        const r = t.value;
        const s = t.rating;
        const i = Fa(r);
        return {
          type: "web-vital",
          name: e,
          start: i,
          end: i,
          data: {
            value: r,
            size: r,
            rating: s,
            nodeId: n ? ma.mirror.getId(n) : undefined,
          },
        };
      }
      const Wa = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__;
      function qa(t, e) {
        if (Wa) {
          w.kg.info(t);
          if (e) {
            Ka(t);
          }
        }
      }
      function Ha(t, e) {
        if (Wa) {
          w.kg.info(t);
          if (e) {
            Qe(() => {
              Ka(t);
            }, 0);
          }
        }
      }
      function Ka(t) {
        k(
          {
            category: "console",
            data: {
              logger: "replay",
            },
            level: "info",
            message: t,
          },
          {
            level: "info",
          },
        );
      }
      class Xa extends Error {
        constructor() {
          super("Event buffer exceeded maximum size of 20000000.");
        }
      }
      class Ya {
        constructor() {
          this.events = [];
          this._totalSize = 0;
          this.hasCheckout = false;
        }
        get hasEvents() {
          return this.events.length > 0;
        }
        get type() {
          return "sync";
        }
        destroy() {
          this.events = [];
        }
        async addEvent(t) {
          const e = JSON.stringify(t).length;
          this._totalSize += e;
          if (this._totalSize > pi) {
            throw new Xa();
          }
          this.events.push(t);
        }
        finish() {
          return new Promise((t) => {
            const e = this.events;
            this.clear();
            t(JSON.stringify(e));
          });
        }
        clear() {
          this.events = [];
          this._totalSize = 0;
          this.hasCheckout = false;
        }
        getEarliestTimestamp() {
          const t = this.events.map((t) => t.timestamp).sort()[0];
          if (t) {
            return ga(t);
          } else {
            return null;
          }
        }
      }
      class Ga {
        constructor(t) {
          this._worker = t;
          this._id = 0;
        }
        ensureReady() {
          this._ensureReadyPromise ||= new Promise((t, e) => {
            this._worker.addEventListener(
              "message",
              ({ data: n }) => {
                if (n.success) {
                  t();
                } else {
                  e();
                }
              },
              {
                once: true,
              },
            );
            this._worker.addEventListener(
              "error",
              (t) => {
                e(t);
              },
              {
                once: true,
              },
            );
          });
          return this._ensureReadyPromise;
        }
        destroy() {
          qa("[Replay] Destroying compression worker");
          this._worker.terminate();
        }
        postMessage(t, e) {
          const n = this._getAndIncrementId();
          return new Promise((r, s) => {
            const i = ({ data: e }) => {
              const o = e;
              if (o.method === t && o.id === n) {
                this._worker.removeEventListener("message", i);
                if (!o.success) {
                  if (Wa) {
                    w.kg.error("[Replay]", o.response);
                  }
                  s(new Error("Error in compression worker"));
                  return;
                }
                r(o.response);
              }
            };
            this._worker.addEventListener("message", i);
            this._worker.postMessage({
              id: n,
              method: t,
              arg: e,
            });
          });
        }
        _getAndIncrementId() {
          return this._id++;
        }
      }
      class Ja {
        constructor(t) {
          this._worker = new Ga(t);
          this._earliestTimestamp = null;
          this._totalSize = 0;
          this.hasCheckout = false;
        }
        get hasEvents() {
          return !!this._earliestTimestamp;
        }
        get type() {
          return "worker";
        }
        ensureReady() {
          return this._worker.ensureReady();
        }
        destroy() {
          this._worker.destroy();
        }
        addEvent(t) {
          const e = ga(t.timestamp);
          if (!this._earliestTimestamp || e < this._earliestTimestamp) {
            this._earliestTimestamp = e;
          }
          const n = JSON.stringify(t);
          this._totalSize += n.length;
          if (this._totalSize > pi) {
            return Promise.reject(new Xa());
          } else {
            return this._sendEventToWorker(n);
          }
        }
        finish() {
          return this._finishRequest();
        }
        clear() {
          this._earliestTimestamp = null;
          this._totalSize = 0;
          this.hasCheckout = false;
          this._worker.postMessage("clear").then(null, (t) => {
            if (Wa) {
              w.kg.warn('[Replay] Sending "clear" message to worker failed', t);
            }
          });
        }
        getEarliestTimestamp() {
          return this._earliestTimestamp;
        }
        _sendEventToWorker(t) {
          return this._worker.postMessage("addEvent", t);
        }
        async _finishRequest() {
          const t = await this._worker.postMessage("finish");
          this._earliestTimestamp = null;
          this._totalSize = 0;
          return t;
        }
      }
      class Za {
        constructor(t) {
          this._fallback = new Ya();
          this._compression = new Ja(t);
          this._used = this._fallback;
          this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
        }
        get type() {
          return this._used.type;
        }
        get hasEvents() {
          return this._used.hasEvents;
        }
        get hasCheckout() {
          return this._used.hasCheckout;
        }
        set hasCheckout(t) {
          this._used.hasCheckout = t;
        }
        destroy() {
          this._fallback.destroy();
          this._compression.destroy();
        }
        clear() {
          return this._used.clear();
        }
        getEarliestTimestamp() {
          return this._used.getEarliestTimestamp();
        }
        addEvent(t) {
          return this._used.addEvent(t);
        }
        async finish() {
          await this.ensureWorkerIsLoaded();
          return this._used.finish();
        }
        ensureWorkerIsLoaded() {
          return this._ensureWorkerIsLoadedPromise;
        }
        async _ensureWorkerIsLoaded() {
          try {
            await this._compression.ensureReady();
          } catch (t) {
            qa(
              "[Replay] Failed to load the compression worker, falling back to simple buffer",
            );
            return;
          }
          await this._switchToCompressionWorker();
        }
        async _switchToCompressionWorker() {
          const { events: t, hasCheckout: e } = this._fallback;
          const n = [];
          for (const e of t) {
            n.push(this._compression.addEvent(e));
          }
          this._compression.hasCheckout = e;
          this._used = this._compression;
          try {
            await Promise.all(n);
          } catch (t) {
            if (Wa) {
              w.kg.warn(
                "[Replay] Failed to add events when switching buffers.",
                t,
              );
            }
          }
        }
      }
      function Qa({ useCompression: t, workerUrl: e }) {
        if (t && window.Worker) {
          const t = (function (t) {
            try {
              const e =
                t ||
                (function () {
                  if (
                    typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ == "undefined" ||
                    !__SENTRY_EXCLUDE_REPLAY_WORKER__
                  ) {
                    return (function () {
                      const t = new Blob([
                        'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});',
                      ]);
                      return URL.createObjectURL(t);
                    })();
                  }
                  return "";
                })();
              if (!e) {
                return;
              }
              qa("[Replay] Using compression worker" + (t ? ` from ${t}` : ""));
              const n = new Worker(e);
              return new Za(n);
            } catch (t) {
              qa("[Replay] Failed to create compression worker");
            }
          })(e);
          if (t) {
            return t;
          }
        }
        qa("[Replay] Using simple buffer");
        return new Ya();
      }
      function tc() {
        try {
          return "sessionStorage" in ci && !!ci.sessionStorage;
        } catch (t) {
          return false;
        }
      }
      function ec(t) {
        (function () {
          if (!tc()) {
            return;
          }
          try {
            ci.sessionStorage.removeItem(ui);
          } catch (t) {}
        })();
        t.session = undefined;
      }
      function nc(t) {
        return t !== undefined && Math.random() < t;
      }
      function rc(t) {
        const e = Date.now();
        return {
          id: t.id || (0, K.DM)(),
          started: t.started || e,
          lastActivity: t.lastActivity || e,
          segmentId: t.segmentId || 0,
          sampled: t.sampled,
          previousSessionId: t.previousSessionId,
        };
      }
      function sc(t) {
        if (tc()) {
          try {
            ci.sessionStorage.setItem(ui, JSON.stringify(t));
          } catch (t) {}
        }
      }
      function ic(
        { sessionSampleRate: t, allowBuffering: e, stickySession: n = false },
        { previousSessionId: r } = {},
      ) {
        const s = (function (t, e) {
          if (nc(t)) {
            return "session";
          } else {
            return !!e && "buffer";
          }
        })(t, e);
        const i = rc({
          sampled: s,
          previousSessionId: r,
        });
        if (n) {
          sc(i);
        }
        return i;
      }
      function oc(t, e, n = +new Date()) {
        return (
          t === null || e === undefined || e < 0 || (e !== 0 && t + e <= n)
        );
      }
      function ac(
        t,
        {
          maxReplayDuration: e,
          sessionIdleExpire: n,
          targetTime: r = Date.now(),
        },
      ) {
        return oc(t.started, e, r) || oc(t.lastActivity, n, r);
      }
      function cc(t, { sessionIdleExpire: e, maxReplayDuration: n }) {
        return (
          !!ac(t, {
            sessionIdleExpire: e,
            maxReplayDuration: n,
          }) &&
          (t.sampled !== "buffer" || t.segmentId !== 0)
        );
      }
      function uc(
        {
          traceInternals: t,
          sessionIdleExpire: e,
          maxReplayDuration: n,
          previousSessionId: r,
        },
        s,
      ) {
        const i =
          s.stickySession &&
          (function (t) {
            if (!tc()) {
              return null;
            }
            try {
              const e = ci.sessionStorage.getItem(ui);
              if (!e) {
                return null;
              }
              const n = JSON.parse(e);
              Ha("[Replay] Loading existing session", t);
              return rc(n);
            } catch (t) {
              return null;
            }
          })(t);
        if (i) {
          if (
            cc(i, {
              sessionIdleExpire: e,
              maxReplayDuration: n,
            })
          ) {
            Ha(
              "[Replay] Session in sessionStorage is expired, creating new one...",
            );
            return ic(s, {
              previousSessionId: i.id,
            });
          } else {
            return i;
          }
        } else {
          Ha("[Replay] Creating new session", t);
          return ic(s, {
            previousSessionId: r,
          });
        }
      }
      function lc(t, e, n) {
        return !!hc(t, e) && (dc(t, e, n), true);
      }
      async function dc(t, e, n) {
        if (!t.eventBuffer) {
          return null;
        }
        try {
          if (n && t.recordingMode === "buffer") {
            t.eventBuffer.clear();
          }
          if (n) {
            t.eventBuffer.hasCheckout = true;
          }
          const r = (function (t, e) {
            try {
              if (
                typeof e == "function" &&
                (function (t) {
                  return t.type === To.Custom;
                })(t)
              ) {
                return e(t);
              }
            } catch (t) {
              if (Wa) {
                w.kg.error(
                  "[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
                  t,
                );
              }
              return null;
            }
            return t;
          })(e, t.getOptions().beforeAddRecordingEvent);
          if (!r) {
            return;
          }
          return await t.eventBuffer.addEvent(r);
        } catch (e) {
          const n = e && e instanceof Xa ? "addEventSizeExceeded" : "addEvent";
          if (Wa) {
            w.kg.error(e);
          }
          await t.stop({
            reason: n,
          });
          const r = (0, S.s3)();
          if (r) {
            r.recordDroppedEvent("internal_sdk_error", "replay");
          }
        }
      }
      function hc(t, e) {
        if (!t.eventBuffer || t.isPaused() || !t.isEnabled()) {
          return false;
        }
        const n = ga(e.timestamp);
        return (
          !(n + t.timeouts.sessionIdlePause < Date.now()) &&
          (!(
            n >
            t.getContext().initialTimestamp + t.getOptions().maxReplayDuration
          ) ||
            (Ha(
              `[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`,
              t.getOptions()._experiments.traceInternals,
            ),
            false))
        );
      }
      function pc(t) {
        return !t.type;
      }
      function fc(t) {
        return t.type === "transaction";
      }
      function mc(t) {
        return t.type === "feedback";
      }
      function gc(t) {
        return (e, n) => {
          if (!t.isEnabled() || (!pc(e) && !fc(e))) {
            return;
          }
          const r = n && n.statusCode;
          if (!!r && !(r < 200) && !(r >= 300)) {
            if (fc(e)) {
              (function (t, e) {
                const n = t.getContext();
                if (
                  e.contexts &&
                  e.contexts.trace &&
                  e.contexts.trace.trace_id &&
                  n.traceIds.size < 100
                ) {
                  n.traceIds.add(e.contexts.trace.trace_id);
                }
              })(t, e);
            } else {
              (function (t, e) {
                const n = t.getContext();
                if (e.event_id && n.errorIds.size < 100) {
                  n.errorIds.add(e.event_id);
                }
                if (
                  t.recordingMode !== "buffer" ||
                  !e.tags ||
                  !e.tags.replayId
                ) {
                  return;
                }
                const { beforeErrorSampling: r } = t.getOptions();
                if (typeof r == "function" && !r(e)) {
                  return;
                }
                Qe(() => {
                  t.sendBufferedReplayOrFlush();
                });
              })(t, e);
            }
          }
        };
      }
      function yc(t) {
        return (e) => {
          if (t.isEnabled() && pc(e)) {
            (function (t, e) {
              const n =
                e.exception &&
                e.exception.values &&
                e.exception.values[0] &&
                e.exception.values[0].value;
              if (typeof n != "string") {
                return;
              }
              if (
                n.match(
                  /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/,
                ) ||
                n.match(
                  /(does not match server-rendered HTML|Hydration failed because)/i,
                )
              ) {
                va(
                  t,
                  Ma({
                    category: "replay.hydrate-error",
                    data: {
                      url: (0, Xn.l4)(),
                    },
                  }),
                );
              }
            })(t, e);
          }
        };
      }
      function vc(t) {
        const e = (0, S.s3)();
        if (e) {
          e.on("beforeAddBreadcrumb", (e) =>
            (function (t, e) {
              if (!t.isEnabled() || !bc(e)) {
                return;
              }
              const n = (function (t) {
                if (
                  !bc(t) ||
                  [
                    "fetch",
                    "xhr",
                    "sentry.event",
                    "sentry.transaction",
                  ].includes(t.category) ||
                  t.category.startsWith("ui.")
                ) {
                  return null;
                }
                if (t.category === "console") {
                  return (function (t) {
                    const e = t.data && t.data.arguments;
                    if (!Array.isArray(e) || e.length === 0) {
                      return Ma(t);
                    }
                    let n = false;
                    const r = e.map((t) => {
                      if (!t) {
                        return t;
                      }
                      if (typeof t == "string") {
                        if (t.length > hi) {
                          n = true;
                          return `${t.slice(0, hi)}…`;
                        } else {
                          return t;
                        }
                      }
                      if (typeof t == "object") {
                        try {
                          const e = ot(t, 7);
                          if (JSON.stringify(e).length > hi) {
                            n = true;
                            return `${JSON.stringify(e, null, 2).slice(0, hi)}…`;
                          } else {
                            return e;
                          }
                        } catch (t) {}
                      }
                      return t;
                    });
                    return Ma({
                      ...t,
                      data: {
                        ...t.data,
                        arguments: r,
                        ...(n
                          ? {
                              _meta: {
                                warnings: ["CONSOLE_ARG_TRUNCATED"],
                              },
                            }
                          : {}),
                      },
                    });
                  })(t);
                }
                return Ma(t);
              })(e);
              if (n) {
                va(t, n);
              }
            })(t, e),
          );
        }
      }
      function bc(t) {
        return !!t.category;
      }
      function Sc(t) {
        return Object.assign(
          (e, n) => {
            if (!t.isEnabled()) {
              return e;
            }
            if (
              (function (t) {
                return t.type === "replay_event";
              })(e)
            ) {
              delete e.breadcrumbs;
              return e;
            }
            if (!pc(e) && !fc(e) && !mc(e)) {
              return e;
            }
            if (!t.checkAndHandleExpiredSession()) {
              return e;
            }
            if (mc(e)) {
              t.flush();
              e.contexts.feedback.replay_id = t.getSessionId();
              (function (t, e) {
                t.triggerUserActivity();
                t.addUpdate(
                  () =>
                    !e.timestamp ||
                    (t.throttledAddEvent({
                      type: To.Custom,
                      timestamp: e.timestamp * 1000,
                      data: {
                        tag: "breadcrumb",
                        payload: {
                          timestamp: e.timestamp,
                          type: "default",
                          category: "sentry.feedback",
                          data: {
                            feedbackId: e.event_id,
                          },
                        },
                      },
                    }),
                    false),
                );
              })(t, e);
              return e;
            }
            if (
              (function (t, e) {
                return (
                  !t.type &&
                  !!t.exception &&
                  !!t.exception.values &&
                  !!t.exception.values.length &&
                  !!e.originalException &&
                  !!e.originalException.__rrweb__
                );
              })(e, n) &&
              !t.getOptions()._experiments.captureExceptions
            ) {
              if (Wa) {
                w.kg.log("[Replay] Ignoring error from rrweb internals", e);
              }
              return null;
            }
            const r = (function (t, e) {
              return (
                t.recordingMode === "buffer" &&
                e.message !== li &&
                !!e.exception &&
                !e.type &&
                nc(t.getOptions().errorSampleRate)
              );
            })(t, e);
            if (r || t.recordingMode === "session") {
              e.tags = {
                ...e.tags,
                replayId: t.getSessionId(),
              };
            }
            return e;
          },
          {
            id: "Replay",
          },
        );
      }
      function _c(t, e) {
        return e.map(({ type: e, start: n, end: r, name: s, data: i }) => {
          const o = t.throttledAddEvent({
            type: To.Custom,
            timestamp: n,
            data: {
              tag: "performanceSpan",
              payload: {
                op: e,
                description: s,
                startTimestamp: n,
                endTimestamp: r,
                data: i,
              },
            },
          });
          if (typeof o == "string") {
            return Promise.resolve(null);
          } else {
            return o;
          }
        });
      }
      function wc(t) {
        return (e) => {
          if (!t.isEnabled()) {
            return;
          }
          const n = (function (t) {
            const { from: e, to: n } = t;
            const r = Date.now() / 1000;
            return {
              type: "navigation.push",
              start: r,
              end: r,
              name: n,
              data: {
                previous: e,
              },
            };
          })(e);
          if (n !== null) {
            t.getContext().urls.push(n.name);
            t.triggerUserActivity();
            t.addUpdate(() => {
              _c(t, [n]);
              return false;
            });
          }
        };
      }
      function xc(t, e) {
        if (t.isEnabled() && e !== null) {
          if (
            !(function (t, e) {
              return (
                (!Wa || !t.getOptions()._experiments.traceInternals) &&
                ri(e, (0, S.s3)())
              );
            })(t, e.name)
          ) {
            t.addUpdate(() => {
              _c(t, [e]);
              return true;
            });
          }
        }
      }
      function kc(t) {
        if (!t) {
          return;
        }
        const e = new TextEncoder();
        try {
          if (typeof t == "string") {
            return e.encode(t).length;
          }
          if (t instanceof URLSearchParams) {
            return e.encode(t.toString()).length;
          }
          if (t instanceof FormData) {
            const n = Pc(t);
            return e.encode(n).length;
          }
          if (t instanceof Blob) {
            return t.size;
          }
          if (t instanceof ArrayBuffer) {
            return t.byteLength;
          }
        } catch (t) {}
      }
      function Ec(t) {
        if (!t) {
          return;
        }
        const e = parseInt(t, 10);
        if (isNaN(e)) {
          return undefined;
        } else {
          return e;
        }
      }
      function Tc(t) {
        try {
          if (typeof t == "string") {
            return [t];
          }
          if (t instanceof URLSearchParams) {
            return [t.toString()];
          }
          if (t instanceof FormData) {
            return [Pc(t)];
          }
          if (!t) {
            return [undefined];
          }
        } catch (e) {
          if (Wa) {
            w.kg.warn("[Replay] Failed to serialize body", t);
          }
          return [undefined, "BODY_PARSE_ERROR"];
        }
        if (Wa) {
          w.kg.info("[Replay] Skipping network body because of body type", t);
        }
        return [undefined, "UNPARSEABLE_BODY_TYPE"];
      }
      function Cc(t, e) {
        if (!t) {
          return {
            headers: {},
            size: undefined,
            _meta: {
              warnings: [e],
            },
          };
        }
        const n = {
          ...t._meta,
        };
        const r = n.warnings || [];
        n.warnings = [...r, e];
        t._meta = n;
        return t;
      }
      function Mc(t, e) {
        if (!e) {
          return null;
        }
        const {
          startTimestamp: n,
          endTimestamp: r,
          url: s,
          method: i,
          statusCode: o,
          request: a,
          response: c,
        } = e;
        return {
          type: t,
          start: n / 1000,
          end: r / 1000,
          name: s,
          data: (0, E.Jr)({
            method: i,
            statusCode: o,
            request: a,
            response: c,
          }),
        };
      }
      function Ic(t) {
        return {
          headers: {},
          size: t,
          _meta: {
            warnings: ["URL_SKIPPED"],
          },
        };
      }
      function Ac(t, e, n) {
        if (!e && Object.keys(t).length === 0) {
          return;
        }
        if (!e) {
          return {
            headers: t,
          };
        }
        if (!n) {
          return {
            headers: t,
            size: e,
          };
        }
        const r = {
          headers: t,
          size: e,
        };
        const { body: s, warnings: i } = (function (t) {
          if (!t || typeof t != "string") {
            return {
              body: t,
            };
          }
          const e = t.length > di;
          const n = (function (t) {
            const e = t[0];
            const n = t[t.length - 1];
            return (e === "[" && n === "]") || (e === "{" && n === "}");
          })(t);
          if (e) {
            const e = t.slice(0, di);
            if (n) {
              return {
                body: e,
                warnings: ["MAYBE_JSON_TRUNCATED"],
              };
            } else {
              return {
                body: `${e}…`,
                warnings: ["TEXT_TRUNCATED"],
              };
            }
          }
          if (n) {
            try {
              return {
                body: JSON.parse(t),
              };
            } catch (t) {}
          }
          return {
            body: t,
          };
        })(n);
        r.body = s;
        if (i && i.length > 0) {
          r._meta = {
            warnings: i,
          };
        }
        return r;
      }
      function Rc(t, e) {
        return Object.entries(t).reduce((n, [r, s]) => {
          const i = r.toLowerCase();
          if (e.includes(i) && t[r]) {
            n[i] = s;
          }
          return n;
        }, {});
      }
      function Pc(t) {
        return new URLSearchParams(t).toString();
      }
      function Oc(t, e) {
        const n = (function (t, e = ci.document.baseURI) {
          if (
            t.startsWith("http://") ||
            t.startsWith("https://") ||
            t.startsWith(ci.location.origin)
          ) {
            return t;
          }
          const n = new URL(t, e);
          if (n.origin !== new URL(e).origin) {
            return t;
          }
          const r = n.href;
          if (!t.endsWith("/") && r.endsWith("/")) {
            return r.slice(0, -1);
          }
          return r;
        })(t);
        return (0, ve.U0)(n, e);
      }
      async function Dc(t, e, n) {
        try {
          const r = await (async function (t, e, n) {
            const r = Date.now();
            const { startTimestamp: s = r, endTimestamp: i = r } = e;
            const {
              url: o,
              method: a,
              status_code: c = 0,
              request_body_size: u,
              response_body_size: l,
            } = t.data;
            const d =
              Oc(o, n.networkDetailAllowUrls) &&
              !Oc(o, n.networkDetailDenyUrls);
            const h = d
              ? (function (
                  { networkCaptureBodies: t, networkRequestHeaders: e },
                  n,
                  r,
                ) {
                  const s = n
                    ? (function (t, e) {
                        if (t.length === 1 && typeof t[0] != "string") {
                          return jc(t[0], e);
                        }
                        if (t.length === 2) {
                          return jc(t[1], e);
                        }
                        return {};
                      })(n, e)
                    : {};
                  if (!t) {
                    return Ac(s, r, undefined);
                  }
                  const i = Lc(n);
                  const [o, a] = Tc(i);
                  const c = Ac(s, r, o);
                  if (a) {
                    return Cc(c, a);
                  }
                  return c;
                })(n, e.input, u)
              : Ic(u);
            const p = await (async function (
              t,
              { networkCaptureBodies: e, networkResponseHeaders: n },
              r,
              s,
            ) {
              if (!t && s !== undefined) {
                return Ic(s);
              }
              const i = r ? Nc(r.headers, n) : {};
              if (!r || (!e && s !== undefined)) {
                return Ac(i, s, undefined);
              }
              const [o, a] = await (async function (t) {
                const e = (function (t) {
                  try {
                    return t.clone();
                  } catch (t) {
                    if (Wa) {
                      w.kg.warn("[Replay] Failed to clone response body", t);
                    }
                  }
                })(t);
                if (!e) {
                  return [undefined, "BODY_PARSE_ERROR"];
                }
                try {
                  const t = await (function (t) {
                    return new Promise((e, n) => {
                      const r = Qe(
                        () =>
                          n(
                            new Error(
                              "Timeout while trying to read response body",
                            ),
                          ),
                        500,
                      );
                      (async function (t) {
                        return await t.text();
                      })(t)
                        .then(
                          (t) => e(t),
                          (t) => n(t),
                        )
                        .finally(() => clearTimeout(r));
                    });
                  })(e);
                  return [t];
                } catch (t) {
                  if (Wa) {
                    w.kg.warn(
                      "[Replay] Failed to get text body from response",
                      t,
                    );
                  }
                  return [undefined, "BODY_PARSE_ERROR"];
                }
              })(r);
              const c = (function (
                t,
                {
                  networkCaptureBodies: e,
                  responseBodySize: n,
                  captureDetails: r,
                  headers: s,
                },
              ) {
                try {
                  const i = t && t.length && n === undefined ? kc(t) : n;
                  if (r) {
                    return Ac(s, i, e ? t : undefined);
                  } else {
                    return Ic(i);
                  }
                } catch (t) {
                  if (Wa) {
                    w.kg.warn("[Replay] Failed to serialize response body", t);
                  }
                  return Ac(s, n, undefined);
                }
              })(o, {
                networkCaptureBodies: e,
                responseBodySize: s,
                captureDetails: t,
                headers: i,
              });
              if (a) {
                return Cc(c, a);
              }
              return c;
            })(d, n, e.response, l);
            return {
              startTimestamp: s,
              endTimestamp: i,
              url: o,
              method: a,
              statusCode: c,
              request: h,
              response: p,
            };
          })(t, e, n);
          const s = Mc("resource.fetch", r);
          xc(n.replay, s);
        } catch (t) {
          if (Wa) {
            w.kg.error("[Replay] Failed to capture fetch breadcrumb", t);
          }
        }
      }
      function Lc(t = []) {
        if (t.length === 2 && typeof t[1] == "object") {
          return t[1].body;
        }
      }
      function Nc(t, e) {
        const n = {};
        e.forEach((e) => {
          if (t.get(e)) {
            n[e] = t.get(e);
          }
        });
        return n;
      }
      function jc(t, e) {
        if (!t) {
          return {};
        }
        const n = t.headers;
        if (n) {
          if (n instanceof Headers) {
            return Nc(n, e);
          } else if (Array.isArray(n)) {
            return {};
          } else {
            return Rc(n, e);
          }
        } else {
          return {};
        }
      }
      async function Fc(t, e, n) {
        try {
          const r = (function (t, e, n) {
            const r = Date.now();
            const {
              startTimestamp: s = r,
              endTimestamp: i = r,
              input: o,
              xhr: a,
            } = e;
            const {
              url: c,
              method: u,
              status_code: l = 0,
              request_body_size: d,
              response_body_size: h,
            } = t.data;
            if (!c) {
              return null;
            }
            if (
              !a ||
              !Oc(c, n.networkDetailAllowUrls) ||
              Oc(c, n.networkDetailDenyUrls)
            ) {
              return {
                startTimestamp: s,
                endTimestamp: i,
                url: c,
                method: u,
                statusCode: l,
                request: Ic(d),
                response: Ic(h),
              };
            }
            const p = a[Nn];
            const f = p ? Rc(p.request_headers, n.networkRequestHeaders) : {};
            const m = Rc(
              (function (t) {
                const e = t.getAllResponseHeaders();
                if (!e) {
                  return {};
                }
                return e.split("\r\n").reduce((t, e) => {
                  const [n, r] = e.split(": ");
                  if (r) {
                    t[n.toLowerCase()] = r;
                  }
                  return t;
                }, {});
              })(a),
              n.networkResponseHeaders,
            );
            const [g, y] = n.networkCaptureBodies ? Tc(o) : [undefined];
            const [v, b] = n.networkCaptureBodies
              ? (function (t) {
                  const e = [];
                  try {
                    return [t.responseText];
                  } catch (t) {
                    e.push(t);
                  }
                  try {
                    return (function (t, e) {
                      try {
                        if (typeof t == "string") {
                          return [t];
                        }
                        if (t instanceof Document) {
                          return [t.body.outerHTML];
                        }
                        if (e === "json" && t && typeof t == "object") {
                          return [JSON.stringify(t)];
                        }
                        if (!t) {
                          return [undefined];
                        }
                      } catch (e) {
                        if (Wa) {
                          w.kg.warn("[Replay] Failed to serialize body", t);
                        }
                        return [undefined, "BODY_PARSE_ERROR"];
                      }
                      if (Wa) {
                        w.kg.info(
                          "[Replay] Skipping network body because of body type",
                          t,
                        );
                      }
                      return [undefined, "UNPARSEABLE_BODY_TYPE"];
                    })(t.response, t.responseType);
                  } catch (t) {
                    e.push(t);
                  }
                  if (Wa) {
                    w.kg.warn("[Replay] Failed to get xhr response body", ...e);
                  }
                  return [undefined];
                })(a)
              : [undefined];
            const S = Ac(f, d, g);
            const _ = Ac(m, h, v);
            return {
              startTimestamp: s,
              endTimestamp: i,
              url: c,
              method: u,
              statusCode: l,
              request: y ? Cc(S, y) : S,
              response: b ? Cc(_, b) : _,
            };
          })(t, e, n);
          const s = Mc("resource.xhr", r);
          xc(n.replay, s);
        } catch (t) {
          if (Wa) {
            w.kg.error("[Replay] Failed to capture xhr breadcrumb", t);
          }
        }
      }
      function $c(t, e) {
        const { xhr: n, input: r } = e;
        if (!n) {
          return;
        }
        const s = kc(r);
        const i = n.getResponseHeader("content-length")
          ? Ec(n.getResponseHeader("content-length"))
          : (function (t, e) {
              try {
                return kc(
                  e === "json" && t && typeof t == "object"
                    ? JSON.stringify(t)
                    : t,
                );
              } catch (t) {
                return;
              }
            })(n.response, n.responseType);
        if (s !== undefined) {
          t.data.request_body_size = s;
        }
        if (i !== undefined) {
          t.data.response_body_size = i;
        }
      }
      function Bc(t) {
        const e = (0, S.s3)();
        try {
          const {
            networkDetailAllowUrls: n,
            networkDetailDenyUrls: r,
            networkCaptureBodies: s,
            networkRequestHeaders: i,
            networkResponseHeaders: o,
          } = t.getOptions();
          const a = {
            replay: t,
            networkDetailAllowUrls: n,
            networkDetailDenyUrls: r,
            networkCaptureBodies: s,
            networkRequestHeaders: i,
            networkResponseHeaders: o,
          };
          if (e) {
            e.on("beforeAddBreadcrumb", (t, e) =>
              (function (t, e, n) {
                if (!e.data) {
                  return;
                }
                try {
                  if (
                    (function (t) {
                      return t.category === "xhr";
                    })(e) &&
                    (function (t) {
                      return t && t.xhr;
                    })(n)
                  ) {
                    $c(e, n);
                    Fc(e, n, t);
                  }
                  if (
                    (function (t) {
                      return t.category === "fetch";
                    })(e) &&
                    (function (t) {
                      return t && t.response;
                    })(n)
                  ) {
                    (function (t, e) {
                      const { input: n, response: r } = e;
                      const s = kc(n ? Lc(n) : undefined);
                      const i = r
                        ? Ec(r.headers.get("content-length"))
                        : undefined;
                      if (s !== undefined) {
                        t.data.request_body_size = s;
                      }
                      if (i !== undefined) {
                        t.data.response_body_size = i;
                      }
                    })(e, n);
                    Dc(e, n, t);
                  }
                } catch (t) {
                  if (Wa) {
                    w.kg.warn("Error when enriching network breadcrumb");
                  }
                }
              })(a, t, e),
            );
          }
        } catch (t) {}
      }
      function Vc(t) {
        const e = (0, S.s3)();
        On(Pa(t));
        Vn(wc(t));
        vc(t);
        Bc(t);
        const n = Sc(t);
        var r;
        r = n;
        (0, S.aF)().addEventProcessor(r);
        if (e) {
          e.on("beforeSendEvent", yc(t));
          e.on("afterSendEvent", gc(t));
          e.on("createDsc", (e) => {
            const n = t.getSessionId();
            if (n && t.isEnabled() && t.recordingMode === "session") {
              if (t.checkAndHandleExpiredSession()) {
                e.replay_id = n;
              }
            }
          });
          e.on("spanStart", (e) => {
            t.lastActiveSpan = e;
          });
          e.on("spanEnd", (e) => {
            t.lastActiveSpan = e;
          });
          e.on("beforeSendFeedback", (e, n) => {
            const r = t.getSessionId();
            if (
              n &&
              n.includeReplay &&
              t.isEnabled() &&
              r &&
              e.contexts &&
              e.contexts.feedback
            ) {
              e.contexts.feedback.replay_id = r;
            }
          });
        }
      }
      function Uc(t) {
        const { jsHeapSizeLimit: e, totalJSHeapSize: n, usedJSHeapSize: r } = t;
        const s = Date.now() / 1000;
        return {
          type: "memory",
          name: "memory",
          start: s,
          end: s,
          data: {
            memory: {
              jsHeapSizeLimit: e,
              totalJSHeapSize: n,
              usedJSHeapSize: r,
            },
          },
        };
      }
      function zc(t) {
        let e = false;
        return (n, r) => {
          if (!t.checkAndHandleExpiredSession()) {
            if (Wa) {
              w.kg.warn(
                "[Replay] Received replay event after session expired.",
              );
            }
            return;
          }
          const s = r || !e;
          e = true;
          if (t.clickDetector) {
            Ca(t.clickDetector, n);
          }
          t.addUpdate(() => {
            if (t.recordingMode === "buffer" && s) {
              t.setInitialState();
            }
            if (!lc(t, n, s)) {
              return true;
            }
            if (!s) {
              return false;
            }
            (function (t, e) {
              if (!e || !t.session || t.session.segmentId !== 0) {
                return;
              }
              lc(
                t,
                (function (t) {
                  const e = t.getOptions();
                  return {
                    type: To.Custom,
                    timestamp: Date.now(),
                    data: {
                      tag: "options",
                      payload: {
                        shouldRecordCanvas: t.isRecordingCanvas(),
                        sessionSampleRate: e.sessionSampleRate,
                        errorSampleRate: e.errorSampleRate,
                        useCompressionOption: e.useCompression,
                        blockAllMedia: e.blockAllMedia,
                        maskAllText: e.maskAllText,
                        maskAllInputs: e.maskAllInputs,
                        useCompression:
                          !!t.eventBuffer && t.eventBuffer.type === "worker",
                        networkDetailHasUrls:
                          e.networkDetailAllowUrls.length > 0,
                        networkCaptureBodies: e.networkCaptureBodies,
                        networkRequestHasHeaders:
                          e.networkRequestHeaders.length > 0,
                        networkResponseHasHeaders:
                          e.networkResponseHeaders.length > 0,
                      },
                    },
                  };
                })(t),
                false,
              );
            })(t, s);
            if (t.session && t.session.previousSessionId) {
              return true;
            }
            if (t.recordingMode === "buffer" && t.session && t.eventBuffer) {
              const e = t.eventBuffer.getEarliestTimestamp();
              if (e) {
                qa(
                  `[Replay] Updating session start time to earliest event in buffer to ${new Date(e)}`,
                  t.getOptions()._experiments.traceInternals,
                );
                t.session.started = e;
                if (t.getOptions().stickySession) {
                  sc(t.session);
                }
              }
            }
            if (t.recordingMode === "session") {
              t.flush();
            }
            return true;
          });
        };
      }
      async function Wc({
        recordingData: t,
        replayId: e,
        segmentId: n,
        eventContext: r,
        timestamp: s,
        session: i,
      }) {
        const o = (function ({ recordingData: t, headers: e }) {
          let n;
          const r = `${JSON.stringify(e)}\n`;
          if (typeof t == "string") {
            n = `${r}${t}`;
          } else {
            const e = new TextEncoder().encode(r);
            n = new Uint8Array(e.length + t.length);
            n.set(e);
            n.set(t, e.length);
          }
          return n;
        })({
          recordingData: t,
          headers: {
            segment_id: n,
          },
        });
        const { urls: a, errorIds: c, traceIds: u, initialTimestamp: l } = r;
        const d = (0, S.s3)();
        const h = (0, S.nZ)();
        const p = d && d.getTransport();
        const f = d && d.getDsn();
        if (!d || !p || !f || !i.sampled) {
          return Y({});
        }
        const m = {
          type: "replay_event",
          replay_start_timestamp: l / 1000,
          timestamp: s / 1000,
          error_ids: c,
          trace_ids: u,
          urls: a,
          replay_id: e,
          segment_id: n,
          replay_type: i.sampled,
        };
        const g = await (async function ({
          client: t,
          scope: e,
          replayId: n,
          event: r,
        }) {
          const s = {
            event_id: n,
            integrations:
              typeof t._integrations != "object" ||
              t._integrations === null ||
              Array.isArray(t._integrations)
                ? undefined
                : Object.keys(t._integrations),
          };
          t.emit("preprocessEvent", r, s);
          const i = await ke(t.getOptions(), r, s, e, t, (0, S.aF)());
          if (!i) {
            return null;
          }
          i.platform = i.platform || "javascript";
          const o = t.getSdkMetadata();
          const { name: a, version: c } = (o && o.sdk) || {};
          i.sdk = {
            ...i.sdk,
            name: a || "sentry.javascript.unknown",
            version: c || "0.0.0",
          };
          return i;
        })({
          scope: h,
          client: d,
          replayId: e,
          event: m,
        });
        if (!g) {
          d.recordDroppedEvent("event_processor", "replay", m);
          qa("An event processor returned `null`, will not send event.");
          return Y({});
        }
        delete g.sdkProcessingMetadata;
        const y = (function (t, e, n, r) {
          return lt(St(t, bt(t), r, n), [
            [
              {
                type: "replay_event",
              },
              t,
            ],
            [
              {
                type: "replay_recording",
                length:
                  typeof e == "string"
                    ? new TextEncoder().encode(e).length
                    : e.length,
              },
              e,
            ],
          ]);
        })(g, o, f, d.getOptions().tunnel);
        let v;
        try {
          v = await p.send(y);
        } catch (t) {
          const e = new Error(li);
          try {
            e.cause = t;
          } catch (t) {}
          throw e;
        }
        if (
          typeof v.statusCode == "number" &&
          (v.statusCode < 200 || v.statusCode >= 300)
        ) {
          throw new qc(v.statusCode);
        }
        const b = nn({}, v);
        if (en(b, "replay")) {
          throw new Hc(b);
        }
        return v;
      }
      class qc extends Error {
        constructor(t) {
          super(`Transport returned status code ${t}`);
        }
      }
      class Hc extends Error {
        constructor(t) {
          super("Rate limit hit");
          this.rateLimits = t;
        }
      }
      async function Kc(
        t,
        e = {
          count: 0,
          interval: 5000,
        },
      ) {
        const { recordingData: n, options: r } = t;
        var s;
        var i;
        if (n.length) {
          try {
            await Wc(t);
            return true;
          } catch (n) {
            if (n instanceof qc || n instanceof Hc) {
              throw n;
            }
            s = "Replays";
            i = {
              _retryCount: e.count,
            };
            (0, S.aF)().setContext(s, i);
            if (Wa && r._experiments && r._experiments.captureExceptions) {
              ii(n);
            }
            if (e.count >= 3) {
              const t = new Error(`${li} - max retries exceeded`);
              try {
                t.cause = n;
              } catch (t) {}
              throw t;
            }
            e.interval *= ++e.count;
            return new Promise((n, r) => {
              Qe(async () => {
                try {
                  await Kc(t, e);
                  n(true);
                } catch (t) {
                  r(t);
                }
              }, e.interval);
            });
          }
        }
      }
      const Xc = "__THROTTLED";
      function Yc(t, e, n) {
        const r = new Map();
        let s = false;
        return (...i) => {
          const o = Math.floor(Date.now() / 1000);
          ((t) => {
            const e = t - n;
            r.forEach((t, n) => {
              if (n < e) {
                r.delete(n);
              }
            });
          })(o);
          if ([...r.values()].reduce((t, e) => t + e, 0) >= e) {
            const t = s;
            s = true;
            if (t) {
              return "__SKIPPED";
            } else {
              return Xc;
            }
          }
          s = false;
          const a = r.get(o) || 0;
          r.set(o, a + 1);
          return t(...i);
        };
      }
      class Gc {
        constructor({ options: t, recordingOptions: e }) {
          Gc.prototype.__init.call(this);
          Gc.prototype.__init2.call(this);
          Gc.prototype.__init3.call(this);
          Gc.prototype.__init4.call(this);
          Gc.prototype.__init5.call(this);
          Gc.prototype.__init6.call(this);
          this.eventBuffer = null;
          this.performanceEntries = [];
          this.replayPerformanceEntries = [];
          this.recordingMode = "session";
          this.timeouts = {
            sessionIdlePause: 300000,
            sessionIdleExpire: 900000,
          };
          this._lastActivity = Date.now();
          this._isEnabled = false;
          this._isPaused = false;
          this._requiresManualStart = false;
          this._hasInitializedCoreListeners = false;
          this._context = {
            errorIds: new Set(),
            traceIds: new Set(),
            urls: [],
            initialTimestamp: Date.now(),
            initialUrl: "",
          };
          this._recordingOptions = e;
          this._options = t;
          this._debouncedFlush = (function (t, e, n) {
            let r;
            let s;
            let i;
            const o = n && n.maxWait ? Math.max(n.maxWait, e) : 0;
            function a() {
              c();
              r = t();
              return r;
            }
            function c() {
              if (s !== undefined) {
                clearTimeout(s);
              }
              if (i !== undefined) {
                clearTimeout(i);
              }
              s = i = undefined;
            }
            function u() {
              if (s) {
                clearTimeout(s);
              }
              s = Qe(a, e);
              if (o && i === undefined) {
                i = Qe(a, o);
              }
              return r;
            }
            u.cancel = c;
            u.flush = function () {
              if (s !== undefined || i !== undefined) {
                return a();
              } else {
                return r;
              }
            };
            return u;
          })(() => this._flush(), this._options.flushMinDelay, {
            maxWait: this._options.flushMaxDelay,
          });
          this._throttledAddEvent = Yc(
            (t, e) =>
              (function (t, e, n) {
                if (hc(t, e)) {
                  return dc(t, e, n);
                } else {
                  return Promise.resolve(null);
                }
              })(this, t, e),
            300,
            5,
          );
          const { slowClickTimeout: n, slowClickIgnoreSelectors: r } =
            this.getOptions();
          const s = n
            ? {
                threshold: Math.min(3000, n),
                timeout: n,
                scrollTimeout: 300,
                ignoreSelector: r ? r.join(",") : "",
              }
            : undefined;
          if (s) {
            this.clickDetector = new ka(this, s);
          }
        }
        getContext() {
          return this._context;
        }
        isEnabled() {
          return this._isEnabled;
        }
        isPaused() {
          return this._isPaused;
        }
        isRecordingCanvas() {
          return Boolean(this._canvas);
        }
        getOptions() {
          return this._options;
        }
        initializeSampling(t) {
          const { errorSampleRate: e, sessionSampleRate: n } = this._options;
          const r = e <= 0 && n <= 0;
          this._requiresManualStart = r;
          if (!r) {
            this._initializeSessionForSampling(t);
            if (this.session) {
              if (this.session.sampled !== false) {
                this.recordingMode =
                  this.session.sampled === "buffer" &&
                  this.session.segmentId === 0
                    ? "buffer"
                    : "session";
                Ha(
                  `[Replay] Starting replay in ${this.recordingMode} mode`,
                  this._options._experiments.traceInternals,
                );
                this._initializeRecording();
              }
            } else {
              this._handleException(
                new Error("Unable to initialize and create session"),
              );
            }
          }
        }
        start() {
          if (this._isEnabled && this.recordingMode === "session") {
            throw new Error("Replay recording is already in progress");
          }
          if (this._isEnabled && this.recordingMode === "buffer") {
            throw new Error(
              "Replay buffering is in progress, call `flush()` to save the replay",
            );
          }
          Ha(
            "[Replay] Starting replay in session mode",
            this._options._experiments.traceInternals,
          );
          this._updateUserActivity();
          const t = uc(
            {
              maxReplayDuration: this._options.maxReplayDuration,
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
              traceInternals: this._options._experiments.traceInternals,
            },
            {
              stickySession: this._options.stickySession,
              sessionSampleRate: 1,
              allowBuffering: false,
            },
          );
          this.session = t;
          this._initializeRecording();
        }
        startBuffering() {
          if (this._isEnabled) {
            throw new Error("Replay recording is already in progress");
          }
          Ha(
            "[Replay] Starting replay in buffer mode",
            this._options._experiments.traceInternals,
          );
          const t = uc(
            {
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
              maxReplayDuration: this._options.maxReplayDuration,
              traceInternals: this._options._experiments.traceInternals,
            },
            {
              stickySession: this._options.stickySession,
              sessionSampleRate: 0,
              allowBuffering: true,
            },
          );
          this.session = t;
          this.recordingMode = "buffer";
          this._initializeRecording();
        }
        startRecording() {
          try {
            const t = this._canvas;
            this._stopRecording = ma({
              ...this._recordingOptions,
              ...(this.recordingMode === "buffer" && {
                checkoutEveryNms: 60000,
              }),
              emit: zc(this),
              onMutation: this._onMutationHandler,
              ...(t
                ? {
                    recordCanvas: t.recordCanvas,
                    getCanvasManager: t.getCanvasManager,
                    sampling: t.sampling,
                    dataURLOptions: t.dataURLOptions,
                  }
                : {}),
            });
          } catch (t) {
            this._handleException(t);
          }
        }
        stopRecording() {
          try {
            if (this._stopRecording) {
              this._stopRecording();
              this._stopRecording = undefined;
            }
            return true;
          } catch (t) {
            this._handleException(t);
            return false;
          }
        }
        async stop({ forceFlush: t = false, reason: e } = {}) {
          if (this._isEnabled) {
            this._isEnabled = false;
            try {
              qa(
                "[Replay] Stopping Replay" + (e ? ` triggered by ${e}` : ""),
                this._options._experiments.traceInternals,
              );
              this._removeListeners();
              this.stopRecording();
              this._debouncedFlush.cancel();
              if (t) {
                await this._flush({
                  force: true,
                });
              }
              if (this.eventBuffer) {
                this.eventBuffer.destroy();
              }
              this.eventBuffer = null;
              ec(this);
            } catch (t) {
              this._handleException(t);
            }
          }
        }
        pause() {
          if (!this._isPaused) {
            this._isPaused = true;
            this.stopRecording();
            qa(
              "[Replay] Pausing replay",
              this._options._experiments.traceInternals,
            );
          }
        }
        resume() {
          if (this._isPaused && this._checkSession()) {
            this._isPaused = false;
            this.startRecording();
            qa(
              "[Replay] Resuming replay",
              this._options._experiments.traceInternals,
            );
          }
        }
        async sendBufferedReplayOrFlush({ continueRecording: t = true } = {}) {
          if (this.recordingMode === "session") {
            return this.flushImmediate();
          }
          const e = Date.now();
          qa(
            "[Replay] Converting buffer to session",
            this._options._experiments.traceInternals,
          );
          await this.flushImmediate();
          const n = this.stopRecording();
          if (t && n && this.recordingMode !== "session") {
            this.recordingMode = "session";
            if (this.session) {
              this._updateUserActivity(e);
              this._updateSessionActivity(e);
              this._maybeSaveSession();
            }
            this.startRecording();
          }
        }
        addUpdate(t) {
          const e = t();
          if (this.recordingMode !== "buffer" && e !== true) {
            this._debouncedFlush();
          }
        }
        triggerUserActivity() {
          this._updateUserActivity();
          if (this._stopRecording) {
            this.checkAndHandleExpiredSession();
            this._updateSessionActivity();
          } else {
            if (!this._checkSession()) {
              return;
            }
            this.resume();
          }
        }
        updateUserActivity() {
          this._updateUserActivity();
          this._updateSessionActivity();
        }
        conditionalFlush() {
          if (this.recordingMode === "buffer") {
            return Promise.resolve();
          } else {
            return this.flushImmediate();
          }
        }
        flush() {
          return this._debouncedFlush();
        }
        flushImmediate() {
          this._debouncedFlush();
          return this._debouncedFlush.flush();
        }
        cancelFlush() {
          this._debouncedFlush.cancel();
        }
        getSessionId() {
          return this.session && this.session.id;
        }
        checkAndHandleExpiredSession() {
          if (
            !this._lastActivity ||
            !oc(this._lastActivity, this.timeouts.sessionIdlePause) ||
            !this.session ||
            this.session.sampled !== "session"
          ) {
            return !!this._checkSession();
          }
          this.pause();
        }
        setInitialState() {
          const t = `${ci.location.pathname}${ci.location.hash}${ci.location.search}`;
          const e = `${ci.location.origin}${t}`;
          this.performanceEntries = [];
          this.replayPerformanceEntries = [];
          this._clearContext();
          this._context.initialUrl = e;
          this._context.initialTimestamp = Date.now();
          this._context.urls.push(e);
        }
        throttledAddEvent(t, e) {
          const n = this._throttledAddEvent(t, e);
          if (n === Xc) {
            const t = Ma({
              category: "replay.throttled",
            });
            this.addUpdate(
              () =>
                !lc(this, {
                  type: 5,
                  timestamp: t.timestamp || 0,
                  data: {
                    tag: "breadcrumb",
                    payload: t,
                    metric: true,
                  },
                }),
            );
          }
          return n;
        }
        getCurrentRoute() {
          const t = this.lastActiveSpan || ce();
          const e = t && ae(t);
          const n = ((e && te(e).data) || {})[Pt];
          if (e && n && ["route", "custom"].includes(n)) {
            return te(e).description;
          }
        }
        _initializeRecording() {
          this.setInitialState();
          this._updateSessionActivity();
          this.eventBuffer = Qa({
            useCompression: this._options.useCompression,
            workerUrl: this._options.workerUrl,
          });
          this._removeListeners();
          this._addListeners();
          this._isEnabled = true;
          this._isPaused = false;
          this.startRecording();
        }
        _handleException(t) {
          if (Wa) {
            w.kg.error("[Replay]", t);
          }
          if (
            Wa &&
            this._options._experiments &&
            this._options._experiments.captureExceptions
          ) {
            ii(t);
          }
        }
        _initializeSessionForSampling(t) {
          const e = this._options.errorSampleRate > 0;
          const n = uc(
            {
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
              maxReplayDuration: this._options.maxReplayDuration,
              traceInternals: this._options._experiments.traceInternals,
              previousSessionId: t,
            },
            {
              stickySession: this._options.stickySession,
              sessionSampleRate: this._options.sessionSampleRate,
              allowBuffering: e,
            },
          );
          this.session = n;
        }
        _checkSession() {
          if (!this.session) {
            return false;
          }
          const t = this.session;
          return (
            !cc(t, {
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
              maxReplayDuration: this._options.maxReplayDuration,
            }) || (this._refreshSession(t), false)
          );
        }
        async _refreshSession(t) {
          if (this._isEnabled) {
            await this.stop({
              reason: "refresh session",
            });
            this.initializeSampling(t.id);
          }
        }
        _addListeners() {
          try {
            ci.document.addEventListener(
              "visibilitychange",
              this._handleVisibilityChange,
            );
            ci.addEventListener("blur", this._handleWindowBlur);
            ci.addEventListener("focus", this._handleWindowFocus);
            ci.addEventListener("keydown", this._handleKeyboardEvent);
            if (this.clickDetector) {
              this.clickDetector.addListeners();
            }
            if (!this._hasInitializedCoreListeners) {
              Vc(this);
              this._hasInitializedCoreListeners = true;
            }
          } catch (t) {
            this._handleException(t);
          }
          this._performanceCleanupCallback = (function (t) {
            function e(e) {
              if (!t.performanceEntries.includes(e)) {
                t.performanceEntries.push(e);
              }
            }
            function n({ entries: t }) {
              t.forEach(e);
            }
            const r = [];
            ["navigation", "paint", "resource"].forEach((t) => {
              r.push(ds(t, n));
            });
            r.push(cs(Na($a, t)), as(Na(Ba, t)), us(Na(Va, t)), ls(Na(Ua, t)));
            return () => {
              r.forEach((t) => t());
            };
          })(this);
        }
        _removeListeners() {
          try {
            ci.document.removeEventListener(
              "visibilitychange",
              this._handleVisibilityChange,
            );
            ci.removeEventListener("blur", this._handleWindowBlur);
            ci.removeEventListener("focus", this._handleWindowFocus);
            ci.removeEventListener("keydown", this._handleKeyboardEvent);
            if (this.clickDetector) {
              this.clickDetector.removeListeners();
            }
            if (this._performanceCleanupCallback) {
              this._performanceCleanupCallback();
            }
          } catch (t) {
            this._handleException(t);
          }
        }
        __init() {
          this._handleVisibilityChange = () => {
            if (ci.document.visibilityState === "visible") {
              this._doChangeToForegroundTasks();
            } else {
              this._doChangeToBackgroundTasks();
            }
          };
        }
        __init2() {
          this._handleWindowBlur = () => {
            const t = Ma({
              category: "ui.blur",
            });
            this._doChangeToBackgroundTasks(t);
          };
        }
        __init3() {
          this._handleWindowFocus = () => {
            const t = Ma({
              category: "ui.focus",
            });
            this._doChangeToForegroundTasks(t);
          };
        }
        __init4() {
          this._handleKeyboardEvent = (t) => {
            Da(this, t);
          };
        }
        _doChangeToBackgroundTasks(t) {
          if (!this.session) {
            return;
          }
          if (
            !ac(this.session, {
              maxReplayDuration: this._options.maxReplayDuration,
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
            })
          ) {
            if (t) {
              this._createCustomBreadcrumb(t);
            }
            this.conditionalFlush();
          }
        }
        _doChangeToForegroundTasks(t) {
          if (!this.session) {
            return;
          }
          if (this.checkAndHandleExpiredSession()) {
            if (t) {
              this._createCustomBreadcrumb(t);
            }
          } else {
            qa("[Replay] Document has become active, but session has expired");
          }
        }
        _updateUserActivity(t = Date.now()) {
          this._lastActivity = t;
        }
        _updateSessionActivity(t = Date.now()) {
          if (this.session) {
            this.session.lastActivity = t;
            this._maybeSaveSession();
          }
        }
        _createCustomBreadcrumb(t) {
          this.addUpdate(() => {
            this.throttledAddEvent({
              type: To.Custom,
              timestamp: t.timestamp || 0,
              data: {
                tag: "breadcrumb",
                payload: t,
              },
            });
          });
        }
        _addPerformanceEntries() {
          const t = ((e = this.performanceEntries),
          e.map(ja).filter(Boolean)).concat(this.replayPerformanceEntries);
          var e;
          this.performanceEntries = [];
          this.replayPerformanceEntries = [];
          return Promise.all(_c(this, t));
        }
        _clearContext() {
          this._context.errorIds.clear();
          this._context.traceIds.clear();
          this._context.urls = [];
        }
        _updateInitialTimestampFromEventBuffer() {
          const { session: t, eventBuffer: e } = this;
          if (!t || !e || this._requiresManualStart) {
            return;
          }
          if (t.segmentId) {
            return;
          }
          const n = e.getEarliestTimestamp();
          if (n && n < this._context.initialTimestamp) {
            this._context.initialTimestamp = n;
          }
        }
        _popEventContext() {
          const t = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls,
          };
          this._clearContext();
          return t;
        }
        async _runFlush() {
          const t = this.getSessionId();
          if (this.session && this.eventBuffer && t) {
            await this._addPerformanceEntries();
            if (
              this.eventBuffer &&
              this.eventBuffer.hasEvents &&
              (await (async function (t) {
                try {
                  return Promise.all(_c(t, [Uc(ci.performance.memory)]));
                } catch (t) {
                  return [];
                }
              })(this),
              this.eventBuffer && t === this.getSessionId())
            ) {
              try {
                this._updateInitialTimestampFromEventBuffer();
                const e = Date.now();
                if (
                  e - this._context.initialTimestamp >
                  this._options.maxReplayDuration + 30000
                ) {
                  throw new Error("Session is too long, not sending replay");
                }
                const n = this._popEventContext();
                const r = this.session.segmentId++;
                this._maybeSaveSession();
                const s = await this.eventBuffer.finish();
                await Kc({
                  replayId: t,
                  recordingData: s,
                  segmentId: r,
                  eventContext: n,
                  session: this.session,
                  options: this.getOptions(),
                  timestamp: e,
                });
              } catch (t) {
                this._handleException(t);
                this.stop({
                  reason: "sendReplay",
                });
                const e = (0, S.s3)();
                if (e) {
                  e.recordDroppedEvent("send_error", "replay");
                }
              }
            }
          } else if (Wa) {
            w.kg.error("[Replay] No session or eventBuffer found to flush.");
          }
        }
        __init5() {
          this._flush = async ({ force: t = false } = {}) => {
            if (!this._isEnabled && !t) {
              return;
            }
            if (!this.checkAndHandleExpiredSession()) {
              if (Wa) {
                w.kg.error(
                  "[Replay] Attempting to finish replay event after session expired.",
                );
              }
              return;
            }
            if (!this.session) {
              return;
            }
            const e = this.session.started;
            const n = Date.now() - e;
            this._debouncedFlush.cancel();
            const r = n < this._options.minReplayDuration;
            const s = n > this._options.maxReplayDuration + 5000;
            if (r || s) {
              qa(
                `[Replay] Session duration (${Math.floor(n / 1000)}s) is too ${r ? "short" : "long"}, not sending replay.`,
                this._options._experiments.traceInternals,
              );
              if (r) {
                this._debouncedFlush();
              }
              return;
            }
            const i = this.eventBuffer;
            if (i && this.session.segmentId === 0 && !i.hasCheckout) {
              qa(
                "[Replay] Flushing initial segment without checkout.",
                this._options._experiments.traceInternals,
              );
            }
            if (!this._flushLock) {
              this._flushLock = this._runFlush();
              await this._flushLock;
              this._flushLock = undefined;
              return;
            }
            try {
              await this._flushLock;
            } catch (t) {
              if (Wa) {
                w.kg.error(t);
              }
            } finally {
              this._debouncedFlush();
            }
          };
        }
        _maybeSaveSession() {
          if (this.session && this._options.stickySession) {
            sc(this.session);
          }
        }
        __init6() {
          this._onMutationHandler = (t) => {
            const e = t.length;
            const n = this._options.mutationLimit;
            const r = n && e > n;
            if (e > this._options.mutationBreadcrumbLimit || r) {
              const t = Ma({
                category: "replay.mutations",
                data: {
                  count: e,
                  limit: r,
                },
              });
              this._createCustomBreadcrumb(t);
            }
            return (
              !r ||
              (this.stop({
                reason: "mutationLimit",
                forceFlush: this.recordingMode === "session",
              }),
              false)
            );
          };
        }
      }
      function Jc(t, e) {
        return [...t, ...e].join(",");
      }
      const Zc =
        'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]';
      const Qc = ["content-length", "content-type", "accept"];
      let tu = false;
      class eu {
        static __initStatic() {
          this.id = "Replay";
        }
        constructor({
          flushMinDelay: t = 5000,
          flushMaxDelay: e = 5500,
          minReplayDuration: n = 4999,
          maxReplayDuration: r = 3600000,
          stickySession: s = true,
          useCompression: i = true,
          workerUrl: o,
          _experiments: a = {},
          maskAllText: c = true,
          maskAllInputs: u = true,
          blockAllMedia: l = true,
          mutationBreadcrumbLimit: d = 750,
          mutationLimit: h = 10000,
          slowClickTimeout: p = 7000,
          slowClickIgnoreSelectors: f = [],
          networkDetailAllowUrls: m = [],
          networkDetailDenyUrls: g = [],
          networkCaptureBodies: y = true,
          networkRequestHeaders: v = [],
          networkResponseHeaders: b = [],
          mask: S = [],
          maskAttributes: _ = ["title", "placeholder"],
          unmask: w = [],
          block: x = [],
          unblock: k = [],
          ignore: E = [],
          maskFn: T,
          beforeAddRecordingEvent: C,
          beforeErrorSampling: M,
        } = {}) {
          this.name = eu.id;
          const I = (function ({
            mask: t,
            unmask: e,
            block: n,
            unblock: r,
            ignore: s,
          }) {
            return {
              maskTextSelector: Jc(t, [".sentry-mask", "[data-sentry-mask]"]),
              unmaskTextSelector: Jc(e, []),
              blockSelector: Jc(n, [
                ".sentry-block",
                "[data-sentry-block]",
                'base[href="/"]',
              ]),
              unblockSelector: Jc(r, []),
              ignoreSelector: Jc(s, [
                ".sentry-ignore",
                "[data-sentry-ignore]",
                'input[type="file"]',
              ]),
            };
          })({
            mask: S,
            unmask: w,
            block: x,
            unblock: k,
            ignore: E,
          });
          this._recordingOptions = {
            maskAllInputs: u,
            maskAllText: c,
            maskInputOptions: {
              password: true,
            },
            maskTextFn: T,
            maskInputFn: T,
            maskAttributeFn: (t, e, n) =>
              (function ({
                el: t,
                key: e,
                maskAttributes: n,
                maskAllText: r,
                privacyOptions: s,
                value: i,
              }) {
                if (r) {
                  if (s.unmaskTextSelector && t.matches(s.unmaskTextSelector)) {
                    return i;
                  } else if (
                    n.includes(e) ||
                    (e === "value" &&
                      t.tagName === "INPUT" &&
                      ["submit", "button"].includes(
                        t.getAttribute("type") || "",
                      ))
                  ) {
                    return i.replace(/[\S]/g, "*");
                  } else {
                    return i;
                  }
                } else {
                  return i;
                }
              })({
                maskAttributes: _,
                maskAllText: c,
                privacyOptions: I,
                key: t,
                value: e,
                el: n,
              }),
            ...I,
            slimDOMOptions: "all",
            inlineStylesheet: true,
            inlineImages: false,
            collectFonts: true,
            errorHandler: (t) => {
              try {
                t.__rrweb__ = true;
              } catch (t) {}
            },
          };
          this._initialOptions = {
            flushMinDelay: t,
            flushMaxDelay: e,
            minReplayDuration: Math.min(n, 15000),
            maxReplayDuration: Math.min(r, fi),
            stickySession: s,
            useCompression: i,
            workerUrl: o,
            blockAllMedia: l,
            maskAllInputs: u,
            maskAllText: c,
            mutationBreadcrumbLimit: d,
            mutationLimit: h,
            slowClickTimeout: p,
            slowClickIgnoreSelectors: f,
            networkDetailAllowUrls: m,
            networkDetailDenyUrls: g,
            networkCaptureBodies: y,
            networkRequestHeaders: nu(v),
            networkResponseHeaders: nu(b),
            beforeAddRecordingEvent: C,
            beforeErrorSampling: M,
            _experiments: a,
          };
          if (this._initialOptions.blockAllMedia) {
            this._recordingOptions.blockSelector = this._recordingOptions
              .blockSelector
              ? `${this._recordingOptions.blockSelector},${Zc}`
              : Zc;
          }
          if (this._isInitialized && ai()) {
            throw new Error(
              "Multiple Sentry Session Replay instances are not supported",
            );
          }
          this._isInitialized = true;
        }
        get _isInitialized() {
          return tu;
        }
        set _isInitialized(t) {
          tu = t;
        }
        afterAllSetup(t) {
          if (ai() && !this._replay) {
            this._setup(t);
            this._initialize(t);
          }
        }
        start() {
          if (this._replay) {
            this._replay.start();
          }
        }
        startBuffering() {
          if (this._replay) {
            this._replay.startBuffering();
          }
        }
        stop() {
          if (this._replay) {
            return this._replay.stop({
              forceFlush: this._replay.recordingMode === "session",
            });
          } else {
            return Promise.resolve();
          }
        }
        flush(t) {
          if (this._replay && this._replay.isEnabled()) {
            return this._replay.sendBufferedReplayOrFlush(t);
          } else {
            return Promise.resolve();
          }
        }
        getReplayId() {
          if (this._replay && this._replay.isEnabled()) {
            return this._replay.getSessionId();
          }
        }
        _initialize(t) {
          if (this._replay) {
            this._maybeLoadFromReplayCanvasIntegration(t);
            this._replay.initializeSampling();
          }
        }
        _setup(t) {
          const e = (function (t, e) {
            const n = e.getOptions();
            const r = {
              sessionSampleRate: 0,
              errorSampleRate: 0,
              ...(0, E.Jr)(t),
            };
            const s = ye(n.replaysSessionSampleRate);
            const i = ye(n.replaysOnErrorSampleRate);
            if (s == null && i == null) {
              (0, w.Cf)(() => {
                console.warn(
                  "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.",
                );
              });
            }
            if (s != null) {
              r.sessionSampleRate = s;
            }
            if (i != null) {
              r.errorSampleRate = i;
            }
            return r;
          })(this._initialOptions, t);
          this._replay = new Gc({
            options: e,
            recordingOptions: this._recordingOptions,
          });
        }
        _maybeLoadFromReplayCanvasIntegration(t) {
          try {
            const e = t.getIntegrationByName("ReplayCanvas");
            if (!e) {
              return;
            }
            this._replay._canvas = e.getOptions();
          } catch (t) {}
        }
      }
      function nu(t) {
        return [...Qc, ...t.map((t) => t.toLowerCase())];
      }
      eu.__initStatic();
      const ru = ({
        replaysOnErrorSampleRate: t,
        jsBuildFilterKey: e,
        tracesSampleRate: n,
      }) => {
        const r = [
          fn(),
          mn(),
          Sn(),
          kn(),
          Qn({
            console: false,
            dom: true,
            fetch: true,
            history: true,
            xhr: true,
          }),
          tr(),
          er(),
        ];
        var s;
        if (e) {
          r.push(
            ir({
              filterKeys: [e],
              behaviour: "apply-tag-if-exclusively-contains-third-party-frames",
            }),
          );
        }
        if (n && n > 0) {
          r.push(ti());
        }
        if (t && t > 0) {
          r.push(new eu(s));
        }
        return r;
      };
      const su = ({ stacktrace: t, url: e, publicBuildPath: n }) => {
        const r = [];
        if (t) {
          r.push(t);
        }
        if (e) {
          r.push(e);
        }
        return r.some((t) => t?.includes?.(n));
      };
      var iu = (t) => {
        const { sentryLoggingEnabled: e, publicBuildPath: n, isDebug: r } = t;
        if (r) {
          console.error("Initing Sentry Browser Client with config", t);
        }
        if (!e) {
          return {};
        }
        const s = y();
        if (!g() && !s.isAutotests) {
          return {};
        }
        const { clientConfig: i, externalConfig: o } = b(t);
        const a = new We({
          ...i,
          transport: sn,
          stackParser: hn,
          integrations: ru({
            jsBuildFilterKey: t.jsBuildFilterKey,
            replaysOnErrorSampleRate: i.replaysOnErrorSampleRate,
            tracesSampleRate: i.tracesSampleRate,
          }),
          debug: t.isDebug,
        });
        const c = new Se.s();
        c.setClient(a);
        a.init();
        window.addEventListener("error", (t) => {
          const e = t?.error;
          if (
            e &&
            su({
              stacktrace: e?.stack,
              publicBuildPath: n,
              url: t.filename,
            })
          ) {
            c.captureException(t);
            if (e) {
              Object.defineProperty(e, m, {
                value: true,
              });
            }
          }
        });
        const u = new Se.s();
        u.setClient(a);
        window.addEventListener("unhandledrejection", (t) => {
          if (
            su({
              stacktrace: String(t.reason?.stack || ""),
              publicBuildPath: n,
            })
          ) {
            u.setExtra("reason", t.reason);
            u.setFingerprint([String(t.reason)]);
            const e = new Error(`Unhandled rejection: ${t.reason}`);
            u.captureException(e);
            if (typeof t.reason == "object") {
              Object.defineProperty(t.reason, m, {
                value: true,
              });
            }
          }
        });
        return {
          client: a,
          scope: c,
          createSentryReduxEnhancer: (e = {}) =>
            B(
              $(
                e,
                {
                  redactedFields: t.redactedFields,
                },
                o,
              ),
            ),
        };
      };
    },
    16136: function (t, e, n) {
      n.d(e, {
        q: () => Un,
        q_: () => kn,
        vc: () => Me,
      });
      var r = b();
      var s = (t) => m(t, r);
      var i = b();
      s.write = (t) => m(t, i);
      var o = b();
      s.onStart = (t) => m(t, o);
      var a = b();
      s.onFrame = (t) => m(t, a);
      var c = b();
      s.onFinish = (t) => m(t, c);
      var u = [];
      s.setTimeout = (t, e) => {
        const n = s.now() + e;
        const r = () => {
          const t = u.findIndex((t) => t.cancel == r);
          if (~t) {
            u.splice(t, 1);
          }
          p -= ~t ? 1 : 0;
        };
        const i = {
          time: n,
          handler: t,
          cancel: r,
        };
        u.splice(l(n), 0, i);
        p += 1;
        g();
        return i;
      };
      var l = (t) => ~(~u.findIndex((e) => e.time > t) || ~u.length);
      s.cancel = (t) => {
        o.delete(t);
        a.delete(t);
        c.delete(t);
        r.delete(t);
        i.delete(t);
      };
      s.sync = (t) => {
        f = true;
        s.batchedUpdates(t);
        f = false;
      };
      s.throttle = (t) => {
        let e;
        function n() {
          try {
            t(...e);
          } finally {
            e = null;
          }
        }
        function r(...t) {
          e = t;
          s.onStart(n);
        }
        r.handler = t;
        r.cancel = () => {
          o.delete(n);
          e = null;
        };
        return r;
      };
      var d =
        typeof window != "undefined" ? window.requestAnimationFrame : () => {};
      s.use = (t) => (d = t);
      s.now =
        typeof performance != "undefined" ? () => performance.now() : Date.now;
      s.batchedUpdates = (t) => t();
      s.catch = console.error;
      s.frameLoop = "always";
      s.advance = () => {
        if (s.frameLoop !== "demand") {
          console.warn(
            "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand",
          );
        } else {
          v();
        }
      };
      var h = -1;
      var p = 0;
      var f = false;
      function m(t, e) {
        if (f) {
          e.delete(t);
          t(0);
        } else {
          e.add(t);
          g();
        }
      }
      function g() {
        if (h < 0) {
          h = 0;
          if (s.frameLoop !== "demand") {
            d(y);
          }
        }
      }
      function y() {
        if (~h) {
          d(y);
          s.batchedUpdates(v);
        }
      }
      function v() {
        const t = h;
        h = s.now();
        const e = l(h);
        if (e) {
          S(u.splice(0, e), (t) => t.handler());
          p -= e;
        }
        if (p) {
          o.flush();
          r.flush(t ? Math.min(64, h - t) : 16.667);
          a.flush();
          i.flush();
          c.flush();
        } else {
          h = -1;
        }
      }
      function b() {
        let t = new Set();
        let e = t;
        return {
          add(n) {
            p += e != t || t.has(n) ? 0 : 1;
            t.add(n);
          },
          delete: (n) => {
            p -= e == t && t.has(n) ? 1 : 0;
            return t.delete(n);
          },
          flush(n) {
            if (e.size) {
              t = new Set();
              p -= e.size;
              S(e, (e) => e(n) && t.add(e));
              p += t.size;
              e = t;
            }
          },
        };
      }
      function S(t, e) {
        t.forEach((t) => {
          try {
            e(t);
          } catch (t) {
            s.catch(t);
          }
        });
      }
      var _ = n(67294);
      var w = Object.defineProperty;
      var x = {};
      function k() {}
      ((t, e) => {
        for (var n in e) {
          w(t, n, {
            get: e[n],
            enumerable: true,
          });
        }
      })(x, {
        assign: () => F,
        colors: () => L,
        createStringInterpolator: () => R,
        skipAnimation: () => N,
        to: () => P,
        willAdvance: () => j,
      });
      var E = {
        arr: Array.isArray,
        obj: (t) => !!t && t.constructor.name === "Object",
        fun: (t) => typeof t == "function",
        str: (t) => typeof t == "string",
        num: (t) => typeof t == "number",
        und: (t) => t === undefined,
      };
      function T(t, e) {
        if (E.arr(t)) {
          if (!E.arr(e) || t.length !== e.length) {
            return false;
          }
          for (let n = 0; n < t.length; n++) {
            if (t[n] !== e[n]) {
              return false;
            }
          }
          return true;
        }
        return t === e;
      }
      var C = (t, e) => t.forEach(e);
      function M(t, e, n) {
        if (E.arr(t)) {
          for (let r = 0; r < t.length; r++) {
            e.call(n, t[r], `${r}`);
          }
        } else {
          for (const r in t) {
            if (t.hasOwnProperty(r)) {
              e.call(n, t[r], r);
            }
          }
        }
      }
      var I = (t) => (E.und(t) ? [] : E.arr(t) ? t : [t]);
      function A(t, e) {
        if (t.size) {
          const n = Array.from(t);
          t.clear();
          C(n, e);
        }
      }
      var R;
      var P;
      var O = (t, ...e) => A(t, (t) => t(...e));
      var D = () =>
        typeof window == "undefined" ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
      var L = null;
      var N = false;
      var j = k;
      var F = (t) => {
        if (t.to) {
          P = t.to;
        }
        if (t.now) {
          s.now = t.now;
        }
        if (t.colors !== undefined) {
          L = t.colors;
        }
        if (t.skipAnimation != null) {
          N = t.skipAnimation;
        }
        if (t.createStringInterpolator) {
          R = t.createStringInterpolator;
        }
        if (t.requestAnimationFrame) {
          s.use(t.requestAnimationFrame);
        }
        if (t.batchedUpdates) {
          s.batchedUpdates = t.batchedUpdates;
        }
        if (t.willAdvance) {
          j = t.willAdvance;
        }
        if (t.frameLoop) {
          s.frameLoop = t.frameLoop;
        }
      };
      var $ = new Set();
      var B = [];
      var V = [];
      var U = 0;
      var z = {
        get idle() {
          return !$.size && !B.length;
        },
        start(t) {
          if (U > t.priority) {
            $.add(t);
            s.onStart(W);
          } else {
            q(t);
            s(K);
          }
        },
        advance: K,
        sort(t) {
          if (U) {
            s.onFrame(() => z.sort(t));
          } else {
            const e = B.indexOf(t);
            if (~e) {
              B.splice(e, 1);
              H(t);
            }
          }
        },
        clear() {
          B = [];
          $.clear();
        },
      };
      function W() {
        $.forEach(q);
        $.clear();
        s(K);
      }
      function q(t) {
        if (!B.includes(t)) {
          H(t);
        }
      }
      function H(t) {
        B.splice(
          (function (t, e) {
            const n = t.findIndex(e);
            if (n < 0) {
              return t.length;
            } else {
              return n;
            }
          })(B, (e) => e.priority > t.priority),
          0,
          t,
        );
      }
      function K(t) {
        const e = V;
        for (let n = 0; n < B.length; n++) {
          const r = B[n];
          U = r.priority;
          if (!r.idle) {
            j(r);
            r.advance(t);
            if (!r.idle) {
              e.push(r);
            }
          }
        }
        U = 0;
        (V = B).length = 0;
        return (B = e).length > 0;
      }
      var X = "[-+]?\\d*\\.?\\d+";
      var Y = X + "%";
      function G(...t) {
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      var J = new RegExp("rgb" + G(X, X, X));
      var Z = new RegExp("rgba" + G(X, X, X, X));
      var Q = new RegExp("hsl" + G(X, Y, Y));
      var tt = new RegExp("hsla" + G(X, Y, Y, X));
      var et = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      var nt =
        /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      var rt = /^#([0-9a-fA-F]{6})$/;
      var st = /^#([0-9a-fA-F]{8})$/;
      function it(t, e, n) {
        if (n < 0) {
          n += 1;
        }
        if (n > 1) {
          n -= 1;
        }
        if (n < 1 / 6) {
          return t + (e - t) * 6 * n;
        } else if (n < 0.5) {
          return e;
        } else if (n < 2 / 3) {
          return t + (e - t) * (2 / 3 - n) * 6;
        } else {
          return t;
        }
      }
      function ot(t, e, n) {
        const r = n < 0.5 ? n * (1 + e) : n + e - n * e;
        const s = n * 2 - r;
        const i = it(s, r, t + 1 / 3);
        const o = it(s, r, t);
        const a = it(s, r, t - 1 / 3);
        return (
          (Math.round(i * 255) << 24) |
          (Math.round(o * 255) << 16) |
          (Math.round(a * 255) << 8)
        );
      }
      function at(t) {
        const e = parseInt(t, 10);
        if (e < 0) {
          return 0;
        } else if (e > 255) {
          return 255;
        } else {
          return e;
        }
      }
      function ct(t) {
        return (((parseFloat(t) % 360) + 360) % 360) / 360;
      }
      function ut(t) {
        const e = parseFloat(t);
        if (e < 0) {
          return 0;
        } else if (e > 1) {
          return 255;
        } else {
          return Math.round(e * 255);
        }
      }
      function lt(t) {
        const e = parseFloat(t);
        if (e < 0) {
          return 0;
        } else if (e > 100) {
          return 1;
        } else {
          return e / 100;
        }
      }
      function dt(t) {
        let e = (function (t) {
          let e;
          if (typeof t == "number") {
            if (t >>> 0 === t && t >= 0 && t <= 4294967295) {
              return t;
            } else {
              return null;
            }
          } else if ((e = rt.exec(t))) {
            return parseInt(e[1] + "ff", 16) >>> 0;
          } else if (L && L[t] !== undefined) {
            return L[t];
          } else if ((e = J.exec(t))) {
            return (
              ((at(e[1]) << 24) | (at(e[2]) << 16) | (at(e[3]) << 8) | 255) >>>
              0
            );
          } else if ((e = Z.exec(t))) {
            return (
              ((at(e[1]) << 24) |
                (at(e[2]) << 16) |
                (at(e[3]) << 8) |
                ut(e[4])) >>>
              0
            );
          } else if ((e = et.exec(t))) {
            return (
              parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + "ff", 16) >>> 0
            );
          } else if ((e = st.exec(t))) {
            return parseInt(e[1], 16) >>> 0;
          } else if ((e = nt.exec(t))) {
            return (
              parseInt(
                e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4],
                16,
              ) >>> 0
            );
          } else if ((e = Q.exec(t))) {
            return (ot(ct(e[1]), lt(e[2]), lt(e[3])) | 255) >>> 0;
          } else if ((e = tt.exec(t))) {
            return (ot(ct(e[1]), lt(e[2]), lt(e[3])) | ut(e[4])) >>> 0;
          } else {
            return null;
          }
        })(t);
        if (e === null) {
          return t;
        }
        e = e || 0;
        return `rgba(${(e & 4278190080) >>> 24}, ${(e & 16711680) >>> 16}, ${(e & 65280) >>> 8}, ${(e & 255) / 255})`;
      }
      var ht = (t, e, n) => {
        if (E.fun(t)) {
          return t;
        }
        if (E.arr(t)) {
          return ht({
            range: t,
            output: e,
            extrapolate: n,
          });
        }
        if (E.str(t.output[0])) {
          return R(t);
        }
        const r = t;
        const s = r.output;
        const i = r.range || [0, 1];
        const o = r.extrapolateLeft || r.extrapolate || "extend";
        const a = r.extrapolateRight || r.extrapolate || "extend";
        const c = r.easing || ((t) => t);
        return (t) => {
          const e = (function (t, e) {
            for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n);
            return n - 1;
          })(t, i);
          return (function (t, e, n, r, s, i, o, a, c) {
            let u = c ? c(t) : t;
            if (u < e) {
              if (o === "identity") {
                return u;
              }
              if (o === "clamp") {
                u = e;
              }
            }
            if (u > n) {
              if (a === "identity") {
                return u;
              }
              if (a === "clamp") {
                u = n;
              }
            }
            if (r === s) {
              return r;
            }
            if (e === n) {
              if (t <= e) {
                return r;
              } else {
                return s;
              }
            }
            if (e === -Infinity) {
              u = -u;
            } else if (n === Infinity) {
              u -= e;
            } else {
              u = (u - e) / (n - e);
            }
            u = i(u);
            if (r === -Infinity) {
              u = -u;
            } else if (s === Infinity) {
              u += r;
            } else {
              u = u * (s - r) + r;
            }
            return u;
          })(t, i[e], i[e + 1], s[e], s[e + 1], c, o, a, r.map);
        };
      };
      var pt = 1.70158;
      var ft = pt * 1.525;
      var mt = pt + 1;
      var gt = (Math.PI * 2) / 3;
      var yt = (Math.PI * 2) / 4.5;
      var vt = (t) => {
        const e = 7.5625;
        const n = 2.75;
        if (t < 1 / n) {
          return e * t * t;
        } else if (t < 2 / n) {
          return e * (t -= 1.5 / n) * t + 0.75;
        } else if (t < 2.5 / n) {
          return e * (t -= 2.25 / n) * t + 0.9375;
        } else {
          return e * (t -= 2.625 / n) * t + 0.984375;
        }
      };
      var bt = {
        linear: (t) => t,
        easeInQuad: (t) => t * t,
        easeOutQuad: (t) => 1 - (1 - t) * (1 - t),
        easeInOutQuad: (t) =>
          t < 0.5 ? t * 2 * t : 1 - Math.pow(t * -2 + 2, 2) / 2,
        easeInCubic: (t) => t * t * t,
        easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
        easeInOutCubic: (t) =>
          t < 0.5 ? t * 4 * t * t : 1 - Math.pow(t * -2 + 2, 3) / 2,
        easeInQuart: (t) => t * t * t * t,
        easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),
        easeInOutQuart: (t) =>
          t < 0.5 ? t * 8 * t * t * t : 1 - Math.pow(t * -2 + 2, 4) / 2,
        easeInQuint: (t) => t * t * t * t * t,
        easeOutQuint: (t) => 1 - Math.pow(1 - t, 5),
        easeInOutQuint: (t) =>
          t < 0.5 ? t * 16 * t * t * t * t : 1 - Math.pow(t * -2 + 2, 5) / 2,
        easeInSine: (t) => 1 - Math.cos((t * Math.PI) / 2),
        easeOutSine: (t) => Math.sin((t * Math.PI) / 2),
        easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
        easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, t * 10 - 10)),
        easeOutExpo: (t) => (t === 1 ? 1 : 1 - Math.pow(2, t * -10)),
        easeInOutExpo: (t) =>
          t === 0
            ? 0
            : t === 1
              ? 1
              : t < 0.5
                ? Math.pow(2, t * 20 - 10) / 2
                : (2 - Math.pow(2, t * -20 + 10)) / 2,
        easeInCirc: (t) => 1 - Math.sqrt(1 - Math.pow(t, 2)),
        easeOutCirc: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)),
        easeInOutCirc: (t) =>
          t < 0.5
            ? (1 - Math.sqrt(1 - Math.pow(t * 2, 2))) / 2
            : (Math.sqrt(1 - Math.pow(t * -2 + 2, 2)) + 1) / 2,
        easeInBack: (t) => mt * t * t * t - pt * t * t,
        easeOutBack: (t) =>
          1 + mt * Math.pow(t - 1, 3) + pt * Math.pow(t - 1, 2),
        easeInOutBack: (t) =>
          t < 0.5
            ? (Math.pow(t * 2, 2) * (t * 7.189819 - ft)) / 2
            : (Math.pow(t * 2 - 2, 2) * ((ft + 1) * (t * 2 - 2) + ft) + 2) / 2,
        easeInElastic: (t) =>
          t === 0
            ? 0
            : t === 1
              ? 1
              : -Math.pow(2, t * 10 - 10) * Math.sin((t * 10 - 10.75) * gt),
        easeOutElastic: (t) =>
          t === 0
            ? 0
            : t === 1
              ? 1
              : Math.pow(2, t * -10) * Math.sin((t * 10 - 0.75) * gt) + 1,
        easeInOutElastic: (t) =>
          t === 0
            ? 0
            : t === 1
              ? 1
              : t < 0.5
                ? (-Math.pow(2, t * 20 - 10) *
                    Math.sin((t * 20 - 11.125) * yt)) /
                  2
                : (Math.pow(2, t * -20 + 10) *
                    Math.sin((t * 20 - 11.125) * yt)) /
                    2 +
                  1,
        easeInBounce: (t) => 1 - vt(1 - t),
        easeOutBounce: vt,
        easeInOutBounce: (t) =>
          t < 0.5 ? (1 - vt(1 - t * 2)) / 2 : (1 + vt(t * 2 - 1)) / 2,
        steps:
          (t, e = "end") =>
          (n) => {
            const r =
              (n = e === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001)) * t;
            const s = e === "end" ? Math.floor(r) : Math.ceil(r);
            i = 0;
            o = 1;
            a = s / t;
            return Math.min(Math.max(a, i), o);
            var i;
            var o;
            var a;
          },
      };
      var St = Symbol.for("FluidValue.get");
      var _t = Symbol.for("FluidValue.observers");
      var wt = (t) => Boolean(t && t[St]);
      var xt = (t) => (t && t[St] ? t[St]() : t);
      var kt = (t) => t[_t] || null;
      function Et(t, e) {
        const n = t[_t];
        if (n) {
          n.forEach((t) => {
            (function (t, e) {
              if (t.eventObserved) {
                t.eventObserved(e);
              } else {
                t(e);
              }
            })(t, e);
          });
        }
      }
      var Tt = class {
        constructor(t) {
          if (!t && !(t = this.get)) {
            throw Error("Unknown getter");
          }
          Ct(this, t);
        }
      };
      var Ct = (t, e) => Rt(t, St, e);
      function Mt(t, e) {
        if (t[St]) {
          let n = t[_t];
          if (!n) {
            Rt(t, _t, (n = new Set()));
          }
          if (!n.has(e)) {
            n.add(e);
            if (t.observerAdded) {
              t.observerAdded(n.size, e);
            }
          }
        }
        return e;
      }
      function It(t, e) {
        const n = t[_t];
        if (n && n.has(e)) {
          const r = n.size - 1;
          if (r) {
            n.delete(e);
          } else {
            t[_t] = null;
          }
          if (t.observerRemoved) {
            t.observerRemoved(r, e);
          }
        }
      }
      var At;
      var Rt = (t, e, n) =>
        Object.defineProperty(t, e, {
          value: n,
          writable: true,
          configurable: true,
        });
      var Pt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
      var Ot =
        /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
      var Dt = new RegExp(`(${Pt.source})(%|[a-z]+)`, "i");
      var Lt = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
      var Nt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      var jt = (t) => {
        const [e, n] = Ft(t);
        if (!e || D()) {
          return t;
        }
        const r = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(e);
        if (r) {
          return r.trim();
        }
        if (n && n.startsWith("--")) {
          const e = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(n);
          return e || t;
        }
        if (n && Nt.test(n)) {
          return jt(n);
        } else {
          return n || t;
        }
      };
      var Ft = (t) => {
        const e = Nt.exec(t);
        if (!e) {
          return [,];
        }
        const [, n, r] = e;
        return [n, r];
      };
      var $t = (t, e, n, r, s) =>
        `rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${s})`;
      var Bt = (t) => {
        At ||= L
          ? new RegExp(`(${Object.keys(L).join("|")})(?!\\w)`, "g")
          : /^\b$/;
        const e = t.output.map((t) =>
          xt(t).replace(Nt, jt).replace(Ot, dt).replace(At, dt),
        );
        const n = e.map((t) => t.match(Pt).map(Number));
        const r = n[0]
          .map((t, e) =>
            n.map((t) => {
              if (!(e in t)) {
                throw Error('The arity of each "output" value must be equal');
              }
              return t[e];
            }),
          )
          .map((e) =>
            ht({
              ...t,
              output: e,
            }),
          );
        return (t) => {
          const n =
            !Dt.test(e[0]) && e.find((t) => Dt.test(t))?.replace(Pt, "");
          let s = 0;
          return e[0]
            .replace(Pt, () => `${r[s++](t)}${n || ""}`)
            .replace(Lt, $t);
        };
      };
      var Vt = "react-spring: ";
      var Ut = (t) => {
        const e = t;
        let n = false;
        if (typeof e != "function") {
          throw new TypeError(`${Vt}once requires a function parameter`);
        }
        return (...t) => {
          if (!n) {
            e(...t);
            n = true;
          }
        };
      };
      var zt = Ut(console.warn);
      var Wt = Ut(console.warn);
      function qt(t) {
        return (
          E.str(t) &&
          (t[0] == "#" ||
            /\d/.test(t) ||
            (!D() && Nt.test(t)) ||
            t in (L || {}))
        );
      }
      var Ht = D() ? _.useEffect : _.useLayoutEffect;
      var Kt = () => {
        const t = (0, _.useRef)(false);
        Ht(() => {
          t.current = true;
          return () => {
            t.current = false;
          };
        }, []);
        return t;
      };
      function Xt() {
        const t = (0, _.useState)()[1];
        const e = Kt();
        return () => {
          if (e.current) {
            t(Math.random());
          }
        };
      }
      var Yt = (t) => (0, _.useEffect)(t, Gt);
      var Gt = [];
      function Jt(t) {
        const e = (0, _.useRef)();
        (0, _.useEffect)(() => {
          e.current = t;
        });
        return e.current;
      }
      var Zt = Symbol.for("Animated:node");
      var Qt = (t) => t && t[Zt];
      var te = (t, e) => {
        n = t;
        r = Zt;
        s = e;
        return Object.defineProperty(n, r, {
          value: s,
          writable: true,
          configurable: true,
        });
        var n;
        var r;
        var s;
      };
      var ee = (t) => t && t[Zt] && t[Zt].getPayload();
      var ne = class {
        constructor() {
          te(this, this);
        }
        getPayload() {
          return this.payload || [];
        }
      };
      var re = class extends ne {
        constructor(t) {
          super();
          this._value = t;
          this.done = true;
          this.durationProgress = 0;
          if (E.num(this._value)) {
            this.lastPosition = this._value;
          }
        }
        static create(t) {
          return new re(t);
        }
        getPayload() {
          return [this];
        }
        getValue() {
          return this._value;
        }
        setValue(t, e) {
          if (E.num(t)) {
            this.lastPosition = t;
            if (e) {
              t = Math.round(t / e) * e;
              if (this.done) {
                this.lastPosition = t;
              }
            }
          }
          return this._value !== t && ((this._value = t), true);
        }
        reset() {
          const { done: t } = this;
          this.done = false;
          if (E.num(this._value)) {
            this.elapsedTime = 0;
            this.durationProgress = 0;
            this.lastPosition = this._value;
            if (t) {
              this.lastVelocity = null;
            }
            this.v0 = null;
          }
        }
      };
      var se = class extends re {
        constructor(t) {
          super(0);
          this._string = null;
          this._toString = ht({
            output: [t, t],
          });
        }
        static create(t) {
          return new se(t);
        }
        getValue() {
          const t = this._string;
          if (t == null) {
            return (this._string = this._toString(this._value));
          } else {
            return t;
          }
        }
        setValue(t) {
          if (E.str(t)) {
            if (t == this._string) {
              return false;
            }
            this._string = t;
            this._value = 1;
          } else {
            if (!super.setValue(t)) {
              return false;
            }
            this._string = null;
          }
          return true;
        }
        reset(t) {
          if (t) {
            this._toString = ht({
              output: [this.getValue(), t],
            });
          }
          this._value = 0;
          super.reset();
        }
      };
      var ie = {
        dependencies: null,
      };
      var oe = class extends ne {
        constructor(t) {
          super();
          this.source = t;
          this.setValue(t);
        }
        getValue(t) {
          const e = {};
          M(this.source, (n, r) => {
            var s;
            if ((s = n) && s[Zt] === s) {
              e[r] = n.getValue(t);
            } else if (wt(n)) {
              e[r] = xt(n);
            } else if (!t) {
              e[r] = n;
            }
          });
          return e;
        }
        setValue(t) {
          this.source = t;
          this.payload = this._makePayload(t);
        }
        reset() {
          if (this.payload) {
            C(this.payload, (t) => t.reset());
          }
        }
        _makePayload(t) {
          if (t) {
            const e = new Set();
            M(t, this._addToPayload, e);
            return Array.from(e);
          }
        }
        _addToPayload(t) {
          if (ie.dependencies && wt(t)) {
            ie.dependencies.add(t);
          }
          const e = ee(t);
          if (e) {
            C(e, (t) => this.add(t));
          }
        }
      };
      var ae = class extends oe {
        constructor(t) {
          super(t);
        }
        static create(t) {
          return new ae(t);
        }
        getValue() {
          return this.source.map((t) => t.getValue());
        }
        setValue(t) {
          const e = this.getPayload();
          if (t.length == e.length) {
            return e.map((e, n) => e.setValue(t[n])).some(Boolean);
          } else {
            super.setValue(t.map(ce));
            return true;
          }
        }
      };
      function ce(t) {
        return (qt(t) ? se : re).create(t);
      }
      function ue(t) {
        const e = Qt(t);
        if (e) {
          return e.constructor;
        } else if (E.arr(t)) {
          return ae;
        } else if (qt(t)) {
          return se;
        } else {
          return re;
        }
      }
      var le = (t, e) => {
        const n = !E.fun(t) || (t.prototype && t.prototype.isReactComponent);
        return (0, _.forwardRef)((r, i) => {
          const o = (0, _.useRef)(null);
          const a =
            n &&
            (0, _.useCallback)(
              (t) => {
                o.current = (function (t, e) {
                  if (t) {
                    if (E.fun(t)) {
                      t(e);
                    } else {
                      t.current = e;
                    }
                  }
                  return e;
                })(i, t);
              },
              [i],
            );
          const [c, u] = (function (t, e) {
            const n = new Set();
            ie.dependencies = n;
            if (t.style) {
              t = {
                ...t,
                style: e.createAnimatedStyle(t.style),
              };
            }
            t = new oe(t);
            ie.dependencies = null;
            return [t, n];
          })(r, e);
          const l = Xt();
          const d = () => {
            const t = o.current;
            if (n && !t) {
              return;
            }
            if ((!!t && e.applyAnimatedValues(t, c.getValue(true))) === false) {
              l();
            }
          };
          const h = new de(d, u);
          const p = (0, _.useRef)();
          Ht(() => {
            p.current = h;
            C(u, (t) => Mt(t, h));
            return () => {
              if (p.current) {
                C(p.current.deps, (t) => It(t, p.current));
                s.cancel(p.current.update);
              }
            };
          });
          (0, _.useEffect)(d, []);
          Yt(() => () => {
            const t = p.current;
            C(t.deps, (e) => It(e, t));
          });
          const f = e.getComponentProps(c.getValue());
          return _.createElement(t, {
            ...f,
            ref: a,
          });
        });
      };
      var de = class {
        constructor(t, e) {
          this.update = t;
          this.deps = e;
        }
        eventObserved(t) {
          if (t.type == "change") {
            s.write(this.update);
          }
        }
      };
      var he = Symbol.for("AnimatedComponent");
      var pe = (t) =>
        E.str(t)
          ? t
          : t && E.str(t.displayName)
            ? t.displayName
            : (E.fun(t) && t.name) || null;
      function fe(t, ...e) {
        if (E.fun(t)) {
          return t(...e);
        } else {
          return t;
        }
      }
      var me = (t, e) =>
        t === true || (!!e && !!t && !!(E.fun(t) ? t(e) : I(t).includes(e)));
      var ge = (t, e) => (E.obj(t) ? e && t[e] : t);
      var ye = (t, e) =>
        t.default === true ? t[e] : t.default ? t.default[e] : undefined;
      var ve = (t) => t;
      var be = (t, e = ve) => {
        let n = Se;
        if (t.default && t.default !== true) {
          t = t.default;
          n = Object.keys(t);
        }
        const r = {};
        for (const s of n) {
          const n = e(t[s], s);
          if (!E.und(n)) {
            r[s] = n;
          }
        }
        return r;
      };
      var Se = [
        "config",
        "onProps",
        "onStart",
        "onChange",
        "onPause",
        "onResume",
        "onRest",
      ];
      var _e = {
        config: 1,
        from: 1,
        to: 1,
        ref: 1,
        loop: 1,
        reset: 1,
        pause: 1,
        cancel: 1,
        reverse: 1,
        immediate: 1,
        default: 1,
        delay: 1,
        onProps: 1,
        onStart: 1,
        onChange: 1,
        onPause: 1,
        onResume: 1,
        onRest: 1,
        onResolve: 1,
        items: 1,
        trail: 1,
        sort: 1,
        expires: 1,
        initial: 1,
        enter: 1,
        update: 1,
        leave: 1,
        children: 1,
        onDestroyed: 1,
        keys: 1,
        callId: 1,
        parentId: 1,
      };
      function we(t) {
        const e = (function (t) {
          const e = {};
          let n = 0;
          M(t, (t, r) => {
            if (!_e[r]) {
              e[r] = t;
              n++;
            }
          });
          if (n) {
            return e;
          }
        })(t);
        if (e) {
          const n = {
            to: e,
          };
          M(t, (t, r) => r in e || (n[r] = t));
          return n;
        }
        return {
          ...t,
        };
      }
      function xe(t) {
        t = xt(t);
        if (E.arr(t)) {
          return t.map(xe);
        } else if (qt(t)) {
          return x.createStringInterpolator({
            range: [0, 1],
            output: [t, t],
          })(1);
        } else {
          return t;
        }
      }
      function ke(t) {
        for (const e in t) {
          return true;
        }
        return false;
      }
      function Ee(t) {
        return E.fun(t) || (E.arr(t) && E.obj(t[0]));
      }
      function Te(t, e) {
        t.ref?.delete(t);
        e?.delete(t);
      }
      function Ce(t, e) {
        if (e && t.ref !== e) {
          t.ref?.delete(t);
          e.add(t);
          t.ref = e;
        }
      }
      var Me = {
        default: {
          tension: 170,
          friction: 26,
        },
        gentle: {
          tension: 120,
          friction: 14,
        },
        wobbly: {
          tension: 180,
          friction: 12,
        },
        stiff: {
          tension: 210,
          friction: 20,
        },
        slow: {
          tension: 280,
          friction: 60,
        },
        molasses: {
          tension: 280,
          friction: 120,
        },
      };
      var Ie = {
        ...Me.default,
        mass: 1,
        damping: 1,
        easing: bt.linear,
        clamp: false,
      };
      var Ae = class {
        constructor() {
          this.velocity = 0;
          Object.assign(this, Ie);
        }
      };
      function Re(t, e) {
        if (E.und(e.decay)) {
          const n = !E.und(e.tension) || !E.und(e.friction);
          if (
            !!n ||
            !E.und(e.frequency) ||
            !E.und(e.damping) ||
            !E.und(e.mass)
          ) {
            t.duration = undefined;
            t.decay = undefined;
          }
          if (n) {
            t.frequency = undefined;
          }
        } else {
          t.duration = undefined;
        }
      }
      var Pe = [];
      var Oe = class {
        constructor() {
          this.changed = false;
          this.values = Pe;
          this.toValues = null;
          this.fromValues = Pe;
          this.config = new Ae();
          this.immediate = false;
        }
      };
      function De(
        t,
        { key: e, props: n, defaultProps: r, state: i, actions: o },
      ) {
        return new Promise((a, c) => {
          let u;
          let l;
          let d = me(n.cancel ?? r?.cancel, e);
          if (d) {
            f();
          } else {
            if (!E.und(n.pause)) {
              i.paused = me(n.pause, e);
            }
            let t = r?.pause;
            if (t !== true) {
              t = i.paused || me(t, e);
            }
            u = fe(n.delay || 0, e);
            if (t) {
              i.resumeQueue.add(p);
              o.pause();
            } else {
              o.resume();
              p();
            }
          }
          function h() {
            i.resumeQueue.add(p);
            i.timeouts.delete(l);
            l.cancel();
            u = l.time - s.now();
          }
          function p() {
            if (u > 0 && !x.skipAnimation) {
              i.delayed = true;
              l = s.setTimeout(f, u);
              i.pauseQueue.add(h);
              i.timeouts.add(l);
            } else {
              f();
            }
          }
          function f() {
            i.delayed &&= false;
            i.pauseQueue.delete(h);
            i.timeouts.delete(l);
            if (t <= (i.cancelId || 0)) {
              d = true;
            }
            try {
              o.start(
                {
                  ...n,
                  callId: t,
                  cancel: d,
                },
                a,
              );
            } catch (t) {
              c(t);
            }
          }
        });
      }
      var Le = (t, e) =>
        e.length == 1
          ? e[0]
          : e.some((t) => t.cancelled)
            ? Fe(t.get())
            : e.every((t) => t.noop)
              ? Ne(t.get())
              : je(
                  t.get(),
                  e.every((t) => t.finished),
                );
      var Ne = (t) => ({
        value: t,
        noop: true,
        finished: true,
        cancelled: false,
      });
      var je = (t, e, n = false) => ({
        value: t,
        finished: e,
        cancelled: n,
      });
      var Fe = (t) => ({
        value: t,
        cancelled: true,
        finished: false,
      });
      function $e(t, e, n, r) {
        const { callId: i, parentId: o, onRest: a } = e;
        const { asyncTo: c, promise: u } = n;
        if (o || t !== c || e.reset) {
          return (n.promise = (async () => {
            n.asyncId = i;
            n.asyncTo = t;
            const l = be(e, (t, e) => (e === "onRest" ? undefined : t));
            let d;
            let h;
            const p = new Promise((t, e) => {
              d = t;
              return (h = e);
            });
            const f = (t) => {
              const e =
                (i <= (n.cancelId || 0) && Fe(r)) ||
                (i !== n.asyncId && je(r, false));
              if (e) {
                t.result = e;
                h(t);
                throw t;
              }
            };
            const m = (t, e) => {
              const s = new Ve();
              const o = new Ue();
              return (async () => {
                if (x.skipAnimation) {
                  Be(n);
                  o.result = je(r, false);
                  h(o);
                  throw o;
                }
                f(s);
                const a = E.obj(t)
                  ? {
                      ...t,
                    }
                  : {
                      ...e,
                      to: t,
                    };
                a.parentId = i;
                M(l, (t, e) => {
                  if (E.und(a[e])) {
                    a[e] = t;
                  }
                });
                const c = await r.start(a);
                f(s);
                if (n.paused) {
                  await new Promise((t) => {
                    n.resumeQueue.add(t);
                  });
                }
                return c;
              })();
            };
            let g;
            if (x.skipAnimation) {
              Be(n);
              return je(r, false);
            }
            try {
              let e;
              e = E.arr(t)
                ? (async (t) => {
                    for (const e of t) {
                      await m(e);
                    }
                  })(t)
                : Promise.resolve(t(m, r.stop.bind(r)));
              await Promise.all([e.then(d), p]);
              g = je(r.get(), true, false);
            } catch (t) {
              if (t instanceof Ve) {
                g = t.result;
              } else {
                if (!(t instanceof Ue)) {
                  throw t;
                }
                g = t.result;
              }
            } finally {
              if (i == n.asyncId) {
                n.asyncId = o;
                n.asyncTo = o ? c : undefined;
                n.promise = o ? u : undefined;
              }
            }
            if (E.fun(a)) {
              s.batchedUpdates(() => {
                a(g, r, r.item);
              });
            }
            return g;
          })());
        } else {
          return u;
        }
      }
      function Be(t, e) {
        A(t.timeouts, (t) => t.cancel());
        t.pauseQueue.clear();
        t.resumeQueue.clear();
        t.asyncId = t.asyncTo = t.promise = undefined;
        if (e) {
          t.cancelId = e;
        }
      }
      var Ve = class extends Error {
        constructor() {
          super(
            "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.",
          );
        }
      };
      var Ue = class extends Error {
        constructor() {
          super("SkipAnimationSignal");
        }
      };
      var ze = (t) => t instanceof qe;
      var We = 1;
      var qe = class extends Tt {
        constructor() {
          super(...arguments);
          this.id = We++;
          this._priority = 0;
        }
        get priority() {
          return this._priority;
        }
        set priority(t) {
          if (this._priority != t) {
            this._priority = t;
            this._onPriorityChange(t);
          }
        }
        get() {
          const t = Qt(this);
          return t && t.getValue();
        }
        to(...t) {
          return x.to(this, t);
        }
        interpolate(...t) {
          zt(
            `${Vt}The "interpolate" function is deprecated in v9 (use "to" instead)`,
          );
          return x.to(this, t);
        }
        toJSON() {
          return this.get();
        }
        observerAdded(t) {
          if (t == 1) {
            this._attach();
          }
        }
        observerRemoved(t) {
          if (t == 0) {
            this._detach();
          }
        }
        _attach() {}
        _detach() {}
        _onChange(t, e = false) {
          Et(this, {
            type: "change",
            parent: this,
            value: t,
            idle: e,
          });
        }
        _onPriorityChange(t) {
          if (!this.idle) {
            z.sort(this);
          }
          Et(this, {
            type: "priority",
            parent: this,
            priority: t,
          });
        }
      };
      var He = Symbol.for("SpringPhase");
      var Ke = (t) => (t[He] & 1) > 0;
      var Xe = (t) => (t[He] & 2) > 0;
      var Ye = (t) => (t[He] & 4) > 0;
      var Ge = (t, e) => (e ? (t[He] |= 3) : (t[He] &= -3));
      var Je = (t, e) => (e ? (t[He] |= 4) : (t[He] &= -5));
      var Ze = class extends qe {
        constructor(t, e) {
          super();
          this.animation = new Oe();
          this.defaultProps = {};
          this._state = {
            paused: false,
            delayed: false,
            pauseQueue: new Set(),
            resumeQueue: new Set(),
            timeouts: new Set(),
          };
          this._pendingCalls = new Set();
          this._lastCallId = 0;
          this._lastToId = 0;
          this._memoizedDuration = 0;
          if (!E.und(t) || !E.und(e)) {
            const n = E.obj(t)
              ? {
                  ...t,
                }
              : {
                  ...e,
                  from: t,
                };
            if (E.und(n.default)) {
              n.default = true;
            }
            this.start(n);
          }
        }
        get idle() {
          return (!Xe(this) && !this._state.asyncTo) || Ye(this);
        }
        get goal() {
          return xt(this.animation.to);
        }
        get velocity() {
          const t = Qt(this);
          if (t instanceof re) {
            return t.lastVelocity || 0;
          } else {
            return t.getPayload().map((t) => t.lastVelocity || 0);
          }
        }
        get hasAnimated() {
          return Ke(this);
        }
        get isAnimating() {
          return Xe(this);
        }
        get isPaused() {
          return Ye(this);
        }
        get isDelayed() {
          return this._state.delayed;
        }
        advance(t) {
          let e = true;
          let n = false;
          const r = this.animation;
          let { toValues: s } = r;
          const { config: i } = r;
          const o = ee(r.to);
          if (!o && wt(r.to)) {
            s = I(xt(r.to));
          }
          r.values.forEach((a, c) => {
            if (a.done) {
              return;
            }
            const u = a.constructor == se ? 1 : o ? o[c].lastPosition : s[c];
            let l = r.immediate;
            let d = u;
            if (!l) {
              d = a.lastPosition;
              if (i.tension <= 0) {
                a.done = true;
                return;
              }
              let e = (a.elapsedTime += t);
              const n = r.fromValues[c];
              const s = (a.v0 ??= E.arr(i.velocity)
                ? i.velocity[c]
                : i.velocity);
              let o;
              const h =
                i.precision ||
                (n == u ? 0.005 : Math.min(1, Math.abs(u - n) * 0.001));
              if (E.und(i.duration)) {
                if (i.decay) {
                  const t = i.decay === true ? 0.998 : i.decay;
                  const r = Math.exp(-(1 - t) * e);
                  d = n + (s / (1 - t)) * (1 - r);
                  l = Math.abs(a.lastPosition - d) <= h;
                  o = s * r;
                } else {
                  o = a.lastVelocity == null ? s : a.lastVelocity;
                  const e = i.restVelocity || h / 10;
                  const r = i.clamp ? 0 : i.bounce;
                  const c = !E.und(r);
                  const p = n == u ? a.v0 > 0 : n < u;
                  let f;
                  let m = false;
                  const g = 1;
                  const y = Math.ceil(t / g);
                  for (
                    let t = 0;
                    t < y &&
                    ((f = Math.abs(o) > e),
                    f || ((l = Math.abs(u - d) <= h), !l));
                    ++t
                  ) {
                    if (c) {
                      m = d == u || d > u == p;
                      if (m) {
                        o = -o * r;
                        d = u;
                      }
                    }
                    o +=
                      ((-i.tension * 0.000001 * (d - u) +
                        -i.friction * 0.001 * o) /
                        i.mass) *
                      g;
                    d += o * g;
                  }
                }
              } else {
                let r = 1;
                if (i.duration > 0) {
                  if (this._memoizedDuration !== i.duration) {
                    this._memoizedDuration = i.duration;
                    if (a.durationProgress > 0) {
                      a.elapsedTime = i.duration * a.durationProgress;
                      e = a.elapsedTime += t;
                    }
                  }
                  r = (i.progress || 0) + e / this._memoizedDuration;
                  r = r > 1 ? 1 : r < 0 ? 0 : r;
                  a.durationProgress = r;
                }
                d = n + i.easing(r) * (u - n);
                o = (d - a.lastPosition) / t;
                l = r == 1;
              }
              a.lastVelocity = o;
              if (Number.isNaN(d)) {
                console.warn("Got NaN while animating:", this);
                l = true;
              }
            }
            if (o && !o[c].done) {
              l = false;
            }
            if (l) {
              a.done = true;
            } else {
              e = false;
            }
            if (a.setValue(d, i.round)) {
              n = true;
            }
          });
          const a = Qt(this);
          const c = a.getValue();
          if (e) {
            const t = xt(r.to);
            if ((c === t && !n) || i.decay) {
              if (n && i.decay) {
                this._onChange(c);
              }
            } else {
              a.setValue(t);
              this._onChange(t);
            }
            this._stop();
          } else if (n) {
            this._onChange(c);
          }
        }
        set(t) {
          s.batchedUpdates(() => {
            this._stop();
            this._focus(t);
            this._set(t);
          });
          return this;
        }
        pause() {
          this._update({
            pause: true,
          });
        }
        resume() {
          this._update({
            pause: false,
          });
        }
        finish() {
          if (Xe(this)) {
            const { to: t, config: e } = this.animation;
            s.batchedUpdates(() => {
              this._onStart();
              if (!e.decay) {
                this._set(t, false);
              }
              this._stop();
            });
          }
          return this;
        }
        update(t) {
          (this.queue ||= []).push(t);
          return this;
        }
        start(t, e) {
          let n;
          if (E.und(t)) {
            n = this.queue || [];
            this.queue = [];
          } else {
            n = [
              E.obj(t)
                ? t
                : {
                    ...e,
                    to: t,
                  },
            ];
          }
          return Promise.all(n.map((t) => this._update(t))).then((t) =>
            Le(this, t),
          );
        }
        stop(t) {
          const { to: e } = this.animation;
          this._focus(this.get());
          Be(this._state, t && this._lastCallId);
          s.batchedUpdates(() => this._stop(e, t));
          return this;
        }
        reset() {
          this._update({
            reset: true,
          });
        }
        eventObserved(t) {
          if (t.type == "change") {
            this._start();
          } else if (t.type == "priority") {
            this.priority = t.priority + 1;
          }
        }
        _prepareNode(t) {
          const e = this.key || "";
          let { to: n, from: r } = t;
          n = E.obj(n) ? n[e] : n;
          if (n == null || Ee(n)) {
            n = undefined;
          }
          r = E.obj(r) ? r[e] : r;
          if (r == null) {
            r = undefined;
          }
          const s = {
            to: n,
            from: r,
          };
          if (!Ke(this)) {
            if (t.reverse) {
              [n, r] = [r, n];
            }
            r = xt(r);
            if (E.und(r)) {
              if (!Qt(this)) {
                this._set(n);
              }
            } else {
              this._set(r);
            }
          }
          return s;
        }
        _update({ ...t }, e) {
          const { key: n, defaultProps: r } = this;
          if (t.default) {
            Object.assign(
              r,
              be(t, (t, e) => (/^on/.test(e) ? ge(t, n) : t)),
            );
          }
          on(this, t, "onProps");
          an(this, "onProps", t, this);
          const s = this._prepareNode(t);
          if (Object.isFrozen(this)) {
            throw Error(
              "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?",
            );
          }
          const i = this._state;
          return De(++this._lastCallId, {
            key: n,
            props: t,
            defaultProps: r,
            state: i,
            actions: {
              pause: () => {
                if (!Ye(this)) {
                  Je(this, true);
                  O(i.pauseQueue);
                  an(
                    this,
                    "onPause",
                    je(this, Qe(this, this.animation.to)),
                    this,
                  );
                }
              },
              resume: () => {
                if (Ye(this)) {
                  Je(this, false);
                  if (Xe(this)) {
                    this._resume();
                  }
                  O(i.resumeQueue);
                  an(
                    this,
                    "onResume",
                    je(this, Qe(this, this.animation.to)),
                    this,
                  );
                }
              },
              start: this._merge.bind(this, s),
            },
          }).then((n) => {
            if (t.loop && n.finished && (!e || !n.noop)) {
              const e = tn(t);
              if (e) {
                return this._update(e, true);
              }
            }
            return n;
          });
        }
        _merge(t, e, n) {
          if (e.cancel) {
            this.stop(true);
            return n(Fe(this));
          }
          const r = !E.und(t.to);
          const i = !E.und(t.from);
          if (r || i) {
            if (!(e.callId > this._lastToId)) {
              return n(Fe(this));
            }
            this._lastToId = e.callId;
          }
          const { key: o, defaultProps: a, animation: c } = this;
          const { to: u, from: l } = c;
          let { to: d = u, from: h = l } = t;
          if (!!i && !r && (!e.default || !!E.und(d))) {
            d = h;
          }
          if (e.reverse) {
            [d, h] = [h, d];
          }
          const p = !T(h, l);
          if (p) {
            c.from = h;
          }
          h = xt(h);
          const f = !T(d, u);
          if (f) {
            this._focus(d);
          }
          const m = Ee(e.to);
          const { config: g } = c;
          const { decay: y, velocity: v } = g;
          if (r || i) {
            g.velocity = 0;
          }
          if (e.config && !m) {
            (function (t, e, n) {
              if (n) {
                Re(
                  (n = {
                    ...n,
                  }),
                  e,
                );
                e = {
                  ...n,
                  ...e,
                };
              }
              Re(t, e);
              Object.assign(t, e);
              for (const e in Ie) {
                if (t[e] == null) {
                  t[e] = Ie[e];
                }
              }
              let { frequency: r, damping: s } = t;
              const { mass: i } = t;
              if (!E.und(r)) {
                if (r < 0.01) {
                  r = 0.01;
                }
                if (s < 0) {
                  s = 0;
                }
                t.tension = Math.pow((Math.PI * 2) / r, 2) * i;
                t.friction = (Math.PI * 4 * s * i) / r;
              }
            })(
              g,
              fe(e.config, o),
              e.config !== a.config ? fe(a.config, o) : undefined,
            );
          }
          let b = Qt(this);
          if (!b || E.und(d)) {
            return n(je(this, true));
          }
          const S = E.und(e.reset)
            ? i && !e.default
            : !E.und(h) && me(e.reset, o);
          const _ = S ? h : this.get();
          const w = xe(d);
          const x = E.num(w) || E.arr(w) || qt(w);
          const k = !m && (!x || me(a.immediate || e.immediate, o));
          if (f) {
            const t = ue(d);
            if (t !== b.constructor) {
              if (!k) {
                throw Error(
                  `Cannot animate between ${b.constructor.name} and ${t.name}, as the "to" prop suggests`,
                );
              }
              b = this._set(w);
            }
          }
          const M = b.constructor;
          let A = wt(d);
          let R = false;
          if (!A) {
            const t = S || (!Ke(this) && p);
            if (f || t) {
              R = T(xe(_), w);
              A = !R;
            }
            if (
              (!T(c.immediate, k) && !k) ||
              !T(g.decay, y) ||
              !T(g.velocity, v)
            ) {
              A = true;
            }
          }
          if (R && Xe(this)) {
            if (c.changed && !S) {
              A = true;
            } else if (!A) {
              this._stop(u);
            }
          }
          if (
            !m &&
            ((A || wt(u)) &&
              ((c.values = b.getPayload()),
              (c.toValues = wt(d) ? null : M == se ? [1] : I(w))),
            c.immediate != k && ((c.immediate = k), k || S || this._set(u)),
            A)
          ) {
            const { onRest: t } = c;
            C(sn, (t) => on(this, e, t));
            const r = je(this, Qe(this, u));
            O(this._pendingCalls, r);
            this._pendingCalls.add(n);
            if (c.changed) {
              s.batchedUpdates(() => {
                c.changed = !S;
                t?.(r, this);
                if (S) {
                  fe(a.onRest, r);
                } else {
                  c.onStart?.(r, this);
                }
              });
            }
          }
          if (S) {
            this._set(_);
          }
          if (m) {
            n($e(e.to, e, this._state, this));
          } else if (A) {
            this._start();
          } else if (Xe(this) && !f) {
            this._pendingCalls.add(n);
          } else {
            n(Ne(_));
          }
        }
        _focus(t) {
          const e = this.animation;
          if (t !== e.to) {
            if (kt(this)) {
              this._detach();
            }
            e.to = t;
            if (kt(this)) {
              this._attach();
            }
          }
        }
        _attach() {
          let t = 0;
          const { to: e } = this.animation;
          if (wt(e)) {
            Mt(e, this);
            if (ze(e)) {
              t = e.priority + 1;
            }
          }
          this.priority = t;
        }
        _detach() {
          const { to: t } = this.animation;
          if (wt(t)) {
            It(t, this);
          }
        }
        _set(t, e = true) {
          const n = xt(t);
          if (!E.und(n)) {
            const t = Qt(this);
            if (!t || !T(n, t.getValue())) {
              const r = ue(n);
              if (t && t.constructor == r) {
                t.setValue(n);
              } else {
                te(this, r.create(n));
              }
              if (t) {
                s.batchedUpdates(() => {
                  this._onChange(n, e);
                });
              }
            }
          }
          return Qt(this);
        }
        _onStart() {
          const t = this.animation;
          if (!t.changed) {
            t.changed = true;
            an(this, "onStart", je(this, Qe(this, t.to)), this);
          }
        }
        _onChange(t, e) {
          if (!e) {
            this._onStart();
            fe(this.animation.onChange, t, this);
          }
          fe(this.defaultProps.onChange, t, this);
          super._onChange(t, e);
        }
        _start() {
          const t = this.animation;
          Qt(this).reset(xt(t.to));
          if (!t.immediate) {
            t.fromValues = t.values.map((t) => t.lastPosition);
          }
          if (!Xe(this)) {
            Ge(this, true);
            if (!Ye(this)) {
              this._resume();
            }
          }
        }
        _resume() {
          if (x.skipAnimation) {
            this.finish();
          } else {
            z.start(this);
          }
        }
        _stop(t, e) {
          if (Xe(this)) {
            Ge(this, false);
            const n = this.animation;
            C(n.values, (t) => {
              t.done = true;
            });
            if (n.toValues) {
              n.onChange = n.onPause = n.onResume = undefined;
            }
            Et(this, {
              type: "idle",
              parent: this,
            });
            const r = e ? Fe(this.get()) : je(this.get(), Qe(this, t ?? n.to));
            O(this._pendingCalls, r);
            if (n.changed) {
              n.changed = false;
              an(this, "onRest", r, this);
            }
          }
        }
      };
      function Qe(t, e) {
        const n = xe(e);
        return T(xe(t.get()), n);
      }
      function tn(t, e = t.loop, n = t.to) {
        const r = fe(e);
        if (r) {
          const s = r !== true && we(r);
          const i = (s || t).reverse;
          const o = !s || s.reset;
          return en({
            ...t,
            loop: e,
            default: false,
            pause: undefined,
            to: !i || Ee(n) ? n : undefined,
            from: o ? t.from : undefined,
            reset: o,
            ...s,
          });
        }
      }
      function en(t) {
        const { to: e, from: n } = (t = we(t));
        const r = new Set();
        if (E.obj(e)) {
          rn(e, r);
        }
        if (E.obj(n)) {
          rn(n, r);
        }
        t.keys = r.size ? Array.from(r) : null;
        return t;
      }
      function nn(t) {
        const e = en(t);
        if (E.und(e.default)) {
          e.default = be(e);
        }
        return e;
      }
      function rn(t, e) {
        M(t, (t, n) => t != null && e.add(n));
      }
      var sn = ["onStart", "onRest", "onChange", "onPause", "onResume"];
      function on(t, e, n) {
        t.animation[n] = e[n] !== ye(e, n) ? ge(e[n], t.key) : undefined;
      }
      function an(t, e, ...n) {
        t.animation[e]?.(...n);
        t.defaultProps[e]?.(...n);
      }
      var cn = ["onStart", "onChange", "onRest"];
      var un = 1;
      var ln = class {
        constructor(t, e) {
          this.id = un++;
          this.springs = {};
          this.queue = [];
          this._lastAsyncId = 0;
          this._active = new Set();
          this._changed = new Set();
          this._started = false;
          this._state = {
            paused: false,
            pauseQueue: new Set(),
            resumeQueue: new Set(),
            timeouts: new Set(),
          };
          this._events = {
            onStart: new Map(),
            onChange: new Map(),
            onRest: new Map(),
          };
          this._onFrame = this._onFrame.bind(this);
          if (e) {
            this._flush = e;
          }
          if (t) {
            this.start({
              default: true,
              ...t,
            });
          }
        }
        get idle() {
          return (
            !this._state.asyncTo &&
            Object.values(this.springs).every(
              (t) => t.idle && !t.isDelayed && !t.isPaused,
            )
          );
        }
        get item() {
          return this._item;
        }
        set item(t) {
          this._item = t;
        }
        get() {
          const t = {};
          this.each((e, n) => (t[n] = e.get()));
          return t;
        }
        set(t) {
          for (const e in t) {
            const n = t[e];
            if (!E.und(n)) {
              this.springs[e].set(n);
            }
          }
        }
        update(t) {
          if (t) {
            this.queue.push(en(t));
          }
          return this;
        }
        start(t) {
          let { queue: e } = this;
          if (t) {
            e = I(t).map(en);
          } else {
            this.queue = [];
          }
          if (this._flush) {
            return this._flush(this, e);
          } else {
            yn(this, e);
            return dn(this, e);
          }
        }
        stop(t, e) {
          if (t !== !!t) {
            e = t;
          }
          if (e) {
            const n = this.springs;
            C(I(e), (e) => n[e].stop(!!t));
          } else {
            Be(this._state, this._lastAsyncId);
            this.each((e) => e.stop(!!t));
          }
          return this;
        }
        pause(t) {
          if (E.und(t)) {
            this.start({
              pause: true,
            });
          } else {
            const e = this.springs;
            C(I(t), (t) => e[t].pause());
          }
          return this;
        }
        resume(t) {
          if (E.und(t)) {
            this.start({
              pause: false,
            });
          } else {
            const e = this.springs;
            C(I(t), (t) => e[t].resume());
          }
          return this;
        }
        each(t) {
          M(this.springs, t);
        }
        _onFrame() {
          const { onStart: t, onChange: e, onRest: n } = this._events;
          const r = this._active.size > 0;
          const s = this._changed.size > 0;
          if ((r && !this._started) || (s && !this._started)) {
            this._started = true;
            A(t, ([t, e]) => {
              e.value = this.get();
              t(e, this, this._item);
            });
          }
          const i = !r && this._started;
          const o = s || (i && n.size) ? this.get() : null;
          if (s && e.size) {
            A(e, ([t, e]) => {
              e.value = o;
              t(e, this, this._item);
            });
          }
          if (i) {
            this._started = false;
            A(n, ([t, e]) => {
              e.value = o;
              t(e, this, this._item);
            });
          }
        }
        eventObserved(t) {
          if (t.type == "change") {
            this._changed.add(t.parent);
            if (!t.idle) {
              this._active.add(t.parent);
            }
          } else {
            if (t.type != "idle") {
              return;
            }
            this._active.delete(t.parent);
          }
          s.onFrame(this._onFrame);
        }
      };
      function dn(t, e) {
        return Promise.all(e.map((e) => hn(t, e))).then((e) => Le(t, e));
      }
      async function hn(t, e, n) {
        const { keys: r, to: i, from: o, loop: a, onRest: c, onResolve: u } = e;
        const l = E.obj(e.default) && e.default;
        if (a) {
          e.loop = false;
        }
        if (i === false) {
          e.to = null;
        }
        if (o === false) {
          e.from = null;
        }
        const d = E.arr(i) || E.fun(i) ? i : undefined;
        if (d) {
          e.to = undefined;
          e.onRest = undefined;
          if (l) {
            l.onRest = undefined;
          }
        } else {
          C(cn, (n) => {
            const r = e[n];
            if (E.fun(r)) {
              const s = t._events[n];
              e[n] = ({ finished: t, cancelled: e }) => {
                const n = s.get(r);
                if (n) {
                  if (!t) {
                    n.finished = false;
                  }
                  if (e) {
                    n.cancelled = true;
                  }
                } else {
                  s.set(r, {
                    value: null,
                    finished: t || false,
                    cancelled: e || false,
                  });
                }
              };
              if (l) {
                l[n] = e[n];
              }
            }
          });
        }
        const h = t._state;
        if (e.pause === !h.paused) {
          h.paused = e.pause;
          O(e.pause ? h.pauseQueue : h.resumeQueue);
        } else if (h.paused) {
          e.pause = true;
        }
        const p = (r || Object.keys(t.springs)).map((n) =>
          t.springs[n].start(e),
        );
        const f = e.cancel === true || ye(e, "cancel") === true;
        if (d || (f && h.asyncId)) {
          p.push(
            De(++t._lastAsyncId, {
              props: e,
              state: h,
              actions: {
                pause: k,
                resume: k,
                start(e, n) {
                  if (f) {
                    Be(h, t._lastAsyncId);
                    n(Fe(t));
                  } else {
                    e.onRest = c;
                    n($e(d, e, h, t));
                  }
                },
              },
            }),
          );
        }
        if (h.paused) {
          await new Promise((t) => {
            h.resumeQueue.add(t);
          });
        }
        const m = Le(t, await Promise.all(p));
        if (a && m.finished && (!n || !m.noop)) {
          const n = tn(e, a, i);
          if (n) {
            yn(t, [n]);
            return hn(t, n, true);
          }
        }
        if (u) {
          s.batchedUpdates(() => u(m, t, t.item));
        }
        return m;
      }
      function pn(t, e) {
        const n = {
          ...t.springs,
        };
        if (e) {
          C(I(e), (t) => {
            if (E.und(t.keys)) {
              t = en(t);
            }
            if (!E.obj(t.to)) {
              t = {
                ...t,
                to: undefined,
              };
            }
            gn(n, t, (t) => mn(t));
          });
        }
        fn(t, n);
        return n;
      }
      function fn(t, e) {
        M(e, (e, n) => {
          if (!t.springs[n]) {
            t.springs[n] = e;
            Mt(e, t);
          }
        });
      }
      function mn(t, e) {
        const n = new Ze();
        n.key = t;
        if (e) {
          Mt(n, e);
        }
        return n;
      }
      function gn(t, e, n) {
        if (e.keys) {
          C(e.keys, (r) => {
            (t[r] ||= n(r))._prepareNode(e);
          });
        }
      }
      function yn(t, e) {
        C(e, (e) => {
          gn(t.springs, e, (e) => mn(e, t));
        });
      }
      var vn;
      var bn;
      var Sn = ({ children: t, ...e }) => {
        const n = (0, _.useContext)(_n);
        const r = e.pause || !!n.pause;
        const s = e.immediate || !!n.immediate;
        e = (function (t, e) {
          const [n] = (0, _.useState)(() => ({
            inputs: e,
            result: t(),
          }));
          const r = (0, _.useRef)();
          const s = r.current;
          let i = s;
          if (i) {
            if (
              !Boolean(
                e &&
                i.inputs &&
                (function (t, e) {
                  if (t.length !== e.length) {
                    return false;
                  }
                  for (let n = 0; n < t.length; n++) {
                    if (t[n] !== e[n]) {
                      return false;
                    }
                  }
                  return true;
                })(e, i.inputs),
              )
            ) {
              i = {
                inputs: e,
                result: t(),
              };
            }
          } else {
            i = n;
          }
          (0, _.useEffect)(() => {
            r.current = i;
            if (s == n) {
              n.inputs = n.result = undefined;
            }
          }, [i]);
          return i.result;
        })(
          () => ({
            pause: r,
            immediate: s,
          }),
          [r, s],
        );
        const { Provider: i } = _n;
        return _.createElement(
          i,
          {
            value: e,
          },
          t,
        );
      };
      vn = Sn;
      bn = {};
      Object.assign(vn, _.createContext(bn));
      vn.Provider._context = vn;
      vn.Consumer._context = vn;
      var _n = vn;
      Sn.Provider = _n.Provider;
      Sn.Consumer = _n.Consumer;
      var wn = () => {
        const t = [];
        const e = function (e) {
          Wt(
            `${Vt}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
          );
          const r = [];
          C(t, (t, s) => {
            if (E.und(e)) {
              r.push(t.start());
            } else {
              const i = n(e, t, s);
              if (i) {
                r.push(t.start(i));
              }
            }
          });
          return r;
        };
        e.current = t;
        e.add = function (e) {
          if (!t.includes(e)) {
            t.push(e);
          }
        };
        e.delete = function (e) {
          const n = t.indexOf(e);
          if (~n) {
            t.splice(n, 1);
          }
        };
        e.pause = function () {
          C(t, (t) => t.pause(...arguments));
          return this;
        };
        e.resume = function () {
          C(t, (t) => t.resume(...arguments));
          return this;
        };
        e.set = function (e) {
          C(t, (t, n) => {
            const r = E.fun(e) ? e(n, t) : e;
            if (r) {
              t.set(r);
            }
          });
        };
        e.start = function (e) {
          const n = [];
          C(t, (t, r) => {
            if (E.und(e)) {
              n.push(t.start());
            } else {
              const s = this._getProps(e, t, r);
              if (s) {
                n.push(t.start(s));
              }
            }
          });
          return n;
        };
        e.stop = function () {
          C(t, (t) => t.stop(...arguments));
          return this;
        };
        e.update = function (e) {
          C(t, (t, n) => t.update(this._getProps(e, t, n)));
          return this;
        };
        const n = function (t, e, n) {
          if (E.fun(t)) {
            return t(n, e);
          } else {
            return t;
          }
        };
        e._getProps = n;
        return e;
      };
      function xn(t, e, n) {
        const r = E.fun(e) && e;
        if (r && !n) {
          n = [];
        }
        const s = (0, _.useMemo)(
          () => (r || arguments.length == 3 ? wn() : undefined),
          [],
        );
        const i = (0, _.useRef)(0);
        const o = Xt();
        const a = (0, _.useMemo)(
          () => ({
            ctrls: [],
            queue: [],
            flush(t, e) {
              const n = pn(t, e);
              if (
                i.current > 0 &&
                !a.queue.length &&
                !Object.keys(n).some((e) => !t.springs[e])
              ) {
                return dn(t, e);
              } else {
                return new Promise((r) => {
                  fn(t, n);
                  a.queue.push(() => {
                    r(dn(t, e));
                  });
                  o();
                });
              }
            },
          }),
          [],
        );
        const c = (0, _.useRef)([...a.ctrls]);
        const u = [];
        const l = Jt(t) || 0;
        function d(t, n) {
          for (let s = t; s < n; s++) {
            const t = (c.current[s] ||= new ln(null, a.flush));
            const n = r ? r(s, t) : e[s];
            if (n) {
              u[s] = nn(n);
            }
          }
        }
        (0, _.useMemo)(() => {
          C(c.current.slice(t, l), (t) => {
            Te(t, s);
            t.stop(true);
          });
          c.current.length = t;
          d(l, t);
        }, [t]);
        (0, _.useMemo)(() => {
          d(0, Math.min(l, t));
        }, n);
        const h = c.current.map((t, e) => pn(t, u[e]));
        const p = (0, _.useContext)(Sn);
        const f = Jt(p);
        const m = p !== f && ke(p);
        Ht(() => {
          i.current++;
          a.ctrls = c.current;
          const { queue: t } = a;
          if (t.length) {
            a.queue = [];
            C(t, (t) => t());
          }
          C(c.current, (t, e) => {
            s?.add(t);
            if (m) {
              t.start({
                default: p,
              });
            }
            const n = u[e];
            if (n) {
              Ce(t, n.ref);
              if (t.ref) {
                t.queue.push(n);
              } else {
                t.start(n);
              }
            }
          });
        });
        Yt(() => () => {
          C(a.ctrls, (t) => t.stop(true));
        });
        const g = h.map((t) => ({
          ...t,
        }));
        if (s) {
          return [g, s];
        } else {
          return g;
        }
      }
      function kn(t, e) {
        const n = E.fun(t);
        const [[r], s] = xn(1, n ? t : [t], n ? e || [] : e);
        if (n || arguments.length == 2) {
          return [r, s];
        } else {
          return r;
        }
      }
      var En = class extends qe {
        constructor(t, e) {
          super();
          this.source = t;
          this.idle = true;
          this._active = new Set();
          this.calc = ht(...e);
          const n = this._get();
          const r = ue(n);
          te(this, r.create(n));
        }
        advance(t) {
          const e = this._get();
          if (!T(e, this.get())) {
            Qt(this).setValue(e);
            this._onChange(e, this.idle);
          }
          if (!this.idle && Cn(this._active)) {
            Mn(this);
          }
        }
        _get() {
          const t = E.arr(this.source)
            ? this.source.map(xt)
            : I(xt(this.source));
          return this.calc(...t);
        }
        _start() {
          if (this.idle && !Cn(this._active)) {
            this.idle = false;
            C(ee(this), (t) => {
              t.done = false;
            });
            if (x.skipAnimation) {
              s.batchedUpdates(() => this.advance());
              Mn(this);
            } else {
              z.start(this);
            }
          }
        }
        _attach() {
          let t = 1;
          C(I(this.source), (e) => {
            if (wt(e)) {
              Mt(e, this);
            }
            if (ze(e)) {
              if (!e.idle) {
                this._active.add(e);
              }
              t = Math.max(t, e.priority + 1);
            }
          });
          this.priority = t;
          this._start();
        }
        _detach() {
          C(I(this.source), (t) => {
            if (wt(t)) {
              It(t, this);
            }
          });
          this._active.clear();
          Mn(this);
        }
        eventObserved(t) {
          if (t.type == "change") {
            if (t.idle) {
              this.advance();
            } else {
              this._active.add(t.parent);
              this._start();
            }
          } else if (t.type == "idle") {
            this._active.delete(t.parent);
          } else if (t.type == "priority") {
            this.priority = I(this.source).reduce(
              (t, e) => Math.max(t, (ze(e) ? e.priority : 0) + 1),
              0,
            );
          }
        }
      };
      function Tn(t) {
        return t.idle !== false;
      }
      function Cn(t) {
        return !t.size || Array.from(t).every(Tn);
      }
      function Mn(t) {
        if (!t.idle) {
          t.idle = true;
          C(ee(t), (t) => {
            t.done = true;
          });
          Et(t, {
            type: "idle",
            parent: t,
          });
        }
      }
      x.assign({
        createStringInterpolator: Bt,
        to: (t, e) => new En(t, e),
      });
      z.advance;
      var In = n(73935);
      var An = /^--/;
      function Rn(t, e) {
        if (e == null || typeof e == "boolean" || e === "") {
          return "";
        } else if (
          typeof e != "number" ||
          e === 0 ||
          An.test(t) ||
          (On.hasOwnProperty(t) && On[t])
        ) {
          return ("" + e).trim();
        } else {
          return e + "px";
        }
      }
      var Pn = {};
      var On = {
        animationIterationCount: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true,
      };
      var Dn = ["Webkit", "Ms", "Moz", "O"];
      On = Object.keys(On).reduce((t, e) => {
        Dn.forEach(
          (n) =>
            (t[
              ((t, e) => t + e.charAt(0).toUpperCase() + e.substring(1))(n, e)
            ] = t[e]),
        );
        return t;
      }, On);
      var Ln = /^(matrix|translate|scale|rotate|skew)/;
      var Nn = /^(translate)/;
      var jn = /^(rotate|skew)/;
      var Fn = (t, e) => (E.num(t) && t !== 0 ? t + e : t);
      var $n = (t, e) =>
        E.arr(t)
          ? t.every((t) => $n(t, e))
          : E.num(t)
            ? t === e
            : parseFloat(t) === e;
      var Bn = class extends oe {
        constructor({ x: t, y: e, z: n, ...r }) {
          const s = [];
          const i = [];
          if (t || e || n) {
            s.push([t || 0, e || 0, n || 0]);
            i.push((t) => [
              `translate3d(${t.map((t) => Fn(t, "px")).join(",")})`,
              $n(t, 0),
            ]);
          }
          M(r, (t, e) => {
            if (e === "transform") {
              s.push([t || ""]);
              i.push((t) => [t, t === ""]);
            } else if (Ln.test(e)) {
              delete r[e];
              if (E.und(t)) {
                return;
              }
              const n = Nn.test(e) ? "px" : jn.test(e) ? "deg" : "";
              s.push(I(t));
              i.push(
                e === "rotate3d"
                  ? ([t, e, r, s]) => [
                      `rotate3d(${t},${e},${r},${Fn(s, n)})`,
                      $n(s, 0),
                    ]
                  : (t) => [
                      `${e}(${t.map((t) => Fn(t, n)).join(",")})`,
                      $n(t, e.startsWith("scale") ? 1 : 0),
                    ],
              );
            }
          });
          if (s.length) {
            r.transform = new Vn(s, i);
          }
          super(r);
        }
      };
      var Vn = class extends Tt {
        constructor(t, e) {
          super();
          this.inputs = t;
          this.transforms = e;
          this._value = null;
        }
        get() {
          return (this._value ||= this._get());
        }
        _get() {
          let t = "";
          let e = true;
          C(this.inputs, (n, r) => {
            const s = xt(n[0]);
            const [i, o] = this.transforms[r](E.arr(s) ? s : n.map(xt));
            t += " " + i;
            e = e && o;
          });
          if (e) {
            return "none";
          } else {
            return t;
          }
        }
        observerAdded(t) {
          if (t == 1) {
            C(this.inputs, (t) => C(t, (t) => wt(t) && Mt(t, this)));
          }
        }
        observerRemoved(t) {
          if (t == 0) {
            C(this.inputs, (t) => C(t, (t) => wt(t) && It(t, this)));
          }
        }
        eventObserved(t) {
          if (t.type == "change") {
            this._value = null;
          }
          Et(this, t);
        }
      };
      x.assign({
        batchedUpdates: In.unstable_batchedUpdates,
        createStringInterpolator: Bt,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
      });
      var Un = ((
        t,
        {
          applyAnimatedValues: e = () => false,
          createAnimatedStyle: n = (t) => new oe(t),
          getComponentProps: r = (t) => t,
        } = {},
      ) => {
        const s = {
          applyAnimatedValues: e,
          createAnimatedStyle: n,
          getComponentProps: r,
        };
        const i = (t) => {
          const e = pe(t) || "Anonymous";
          (t = E.str(t)
            ? (i[t] ||= le(t, s))
            : (t[he] ||= le(t, s))).displayName = `Animated(${e})`;
          return t;
        };
        M(t, (e, n) => {
          if (E.arr(t)) {
            n = pe(e);
          }
          i[n] = i(e);
        });
        return {
          animated: i,
        };
      })(
        [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ],
        {
          applyAnimatedValues: function (t, e) {
            if (!t.nodeType || !t.setAttribute) {
              return false;
            }
            const n =
              t.nodeName === "filter" ||
              (t.parentNode && t.parentNode.nodeName === "filter");
            const {
              style: r,
              children: s,
              scrollTop: i,
              scrollLeft: o,
              viewBox: a,
              ...c
            } = e;
            const u = Object.values(c);
            const l = Object.keys(c).map((e) =>
              n || t.hasAttribute(e)
                ? e
                : (Pn[e] ||= e.replace(
                    /([A-Z])/g,
                    (t) => "-" + t.toLowerCase(),
                  )),
            );
            if (s !== undefined) {
              t.textContent = s;
            }
            for (const e in r) {
              if (r.hasOwnProperty(e)) {
                const n = Rn(e, r[e]);
                if (An.test(e)) {
                  t.style.setProperty(e, n);
                } else {
                  t.style[e] = n;
                }
              }
            }
            l.forEach((e, n) => {
              t.setAttribute(e, u[n]);
            });
            if (i !== undefined) {
              t.scrollTop = i;
            }
            if (o !== undefined) {
              t.scrollLeft = o;
            }
            if (a !== undefined) {
              t.setAttribute("viewBox", a);
            }
          },
          createAnimatedStyle: (t) => new Bn(t),
          getComponentProps: ({ scrollTop: t, scrollLeft: e, ...n }) => n,
        },
      ).animated;
    },
    59511: function (t, e, n) {
      n.d(e, {
        xC: () => p,
      });
      var r = n(71526);
      function s(t) {
        return ({ dispatch: e, getState: n }) =>
          (r) =>
          (s) =>
            typeof s == "function" ? s(e, n, t) : r(s);
      }
      var i = s();
      var o = s;
      var a =
        typeof window != "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          : function () {
              if (arguments.length !== 0) {
                if (typeof arguments[0] == "object") {
                  return r.qC;
                } else {
                  return r.qC.apply(null, arguments);
                }
              }
            };
      if (typeof window != "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) {
        window.__REDUX_DEVTOOLS_EXTENSION__;
      }
      var c = class t extends Array {
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, t.prototype);
        }
        static get [Symbol.species]() {
          return t;
        }
        concat(...t) {
          return super.concat.apply(this, t);
        }
        prepend(...e) {
          if (e.length === 1 && Array.isArray(e[0])) {
            return new t(...e[0].concat(this));
          } else {
            return new t(...e.concat(this));
          }
        }
      };
      var u = () =>
        function (t) {
          const {
            thunk: e = true,
            immutableCheck: n = true,
            serializableCheck: r = true,
            actionCreatorCheck: s = true,
          } = t ?? {};
          let a = new c();
          if (e) {
            if (typeof e == "boolean") {
              a.push(i);
            } else {
              a.push(o(e.extraArgument));
            }
          }
          return a;
        };
      var l = "RTK_autoBatch";
      var d = (t) => (e) => {
        setTimeout(e, t);
      };
      var h = (t) =>
        function (e) {
          const { autoBatch: n = true } = e ?? {};
          let r = new c(t);
          if (n) {
            r.push(
              (
                (
                  t = {
                    type: "raf",
                  },
                ) =>
                (e) =>
                (...n) => {
                  const r = e(...n);
                  let s = true;
                  let i = false;
                  let o = false;
                  const a = new Set();
                  const c =
                    t.type === "tick"
                      ? queueMicrotask
                      : t.type === "raf"
                        ? typeof window != "undefined" &&
                          window.requestAnimationFrame
                          ? window.requestAnimationFrame
                          : d(10)
                        : t.type === "callback"
                          ? t.queueNotification
                          : d(t.timeout);
                  const u = () => {
                    o = false;
                    if (i) {
                      i = false;
                      a.forEach((t) => t());
                    }
                  };
                  return Object.assign({}, r, {
                    subscribe(t) {
                      const e = r.subscribe(() => s && t());
                      a.add(t);
                      return () => {
                        e();
                        a.delete(t);
                      };
                    },
                    dispatch(t) {
                      try {
                        s = !t?.meta?.[l];
                        i = !s;
                        if (i) {
                          if (!o) {
                            o = true;
                            c(u);
                          }
                        }
                        return r.dispatch(t);
                      } finally {
                        s = true;
                      }
                    },
                  });
                }
              )(typeof n == "object" ? n : undefined),
            );
          }
          return r;
        };
      function p(t) {
        const e = u();
        const {
          reducer: n,
          middleware: s,
          devTools: i = true,
          duplicateMiddlewareCheck: o = true,
          preloadedState: c,
          enhancers: l,
        } = t || {};
        let d;
        let p;
        if (typeof n == "function") {
          d = n;
        } else {
          if (!(0, r.PO)(n)) {
            throw new Error(m(1));
          }
          d = (0, r.UY)(n);
        }
        p = typeof s == "function" ? s(e) : e();
        let f = r.qC;
        if (i) {
          f = a({
            trace: false,
            ...(typeof i == "object" && i),
          });
        }
        const g = (0, r.md)(...p);
        const y = h(g);
        const v = f(...(typeof l == "function" ? l(y) : y()));
        return (0, r.MT)(d, c, v);
      }
      var { assign: f } = Object;
      Symbol.for("rtk-state-proxy-original");
      function m(t) {
        return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
      }
    },
    60645: function (t, e, n) {
      n.d(e, {
        G: () => h,
      });
      var r = n(4915);
      var s = n(59057);
      var i = n(59662);
      var o = n(90314);
      class a {
        constructor(t, e) {
          let n;
          let r;
          n = t || new o.s();
          r = e || new o.s();
          this._stack = [
            {
              scope: n,
            },
          ];
          this._isolationScope = r;
        }
        withScope(t) {
          const e = this._pushScope();
          let n;
          try {
            n = t(e);
          } catch (t) {
            this._popScope();
            throw t;
          }
          if ((0, s.J8)(n)) {
            return n.then(
              (t) => {
                this._popScope();
                return t;
              },
              (t) => {
                this._popScope();
                throw t;
              },
            );
          } else {
            this._popScope();
            return n;
          }
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getIsolationScope() {
          return this._isolationScope;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        _pushScope() {
          const t = this.getScope().clone();
          this._stack.push({
            client: this.getClient(),
            scope: t,
          });
          return t;
        }
        _popScope() {
          return !(this._stack.length <= 1) && !!this._stack.pop();
        }
      }
      function c() {
        const t = (0, r.c)();
        const e = (0, r.q)(t);
        return (e.stack =
          e.stack ||
          new a(
            (0, i.Y)("defaultCurrentScope", () => new o.s()),
            (0, i.Y)("defaultIsolationScope", () => new o.s()),
          ));
      }
      function u(t) {
        return c().withScope(t);
      }
      function l(t, e) {
        const n = c();
        return n.withScope(() => {
          n.getStackTop().scope = t;
          return e(t);
        });
      }
      function d(t) {
        return c().withScope(() => t(c().getIsolationScope()));
      }
      function h(t) {
        const e = (0, r.q)(t);
        if (e.acs) {
          return e.acs;
        } else {
          return {
            withIsolationScope: d,
            withScope: u,
            withSetScope: l,
            withSetIsolationScope: (t, e) => d(e),
            getCurrentScope: () => c().getScope(),
            getIsolationScope: () => c().getIsolationScope(),
          };
        }
      }
    },
    4915: function (t, e, n) {
      n.d(e, {
        c: () => i,
        q: () => o,
      });
      var r = n(59662);
      var s = n(4206);
      function i() {
        o(r.n);
        return r.n;
      }
      function o(t) {
        const e = (t.__SENTRY__ = t.__SENTRY__ || {});
        e.version = e.version || s.J;
        return (e[s.J] = e[s.J] || {});
      }
    },
    87139: function (t, e, n) {
      n.d(e, {
        $e: () => l,
        aF: () => c,
        lW: () => u,
        nZ: () => a,
        s3: () => d,
      });
      var r = n(59662);
      var s = n(60645);
      var i = n(4915);
      var o = n(90314);
      function a() {
        const t = (0, i.c)();
        return (0, s.G)(t).getCurrentScope();
      }
      function c() {
        const t = (0, i.c)();
        return (0, s.G)(t).getIsolationScope();
      }
      function u() {
        return (0, r.Y)("globalScope", () => new o.s());
      }
      function l(...t) {
        const e = (0, i.c)();
        const n = (0, s.G)(e);
        if (t.length === 2) {
          const [e, r] = t;
          if (e) {
            return n.withSetScope(e, r);
          } else {
            return n.withScope(r);
          }
        }
        return n.withScope(t[0]);
      }
      function d() {
        return a().getClient();
      }
    },
    90314: function (t, e, n) {
      n.d(e, {
        s: () => d,
      });
      var r = n(51788);
      var s = n(59057);
      var i = n(94114);
      var o = n(92738);
      var a = n(29784);
      var c = n(65367);
      var u = n(79603);
      class l {
        constructor() {
          this._notifyingListeners = false;
          this._scopeListeners = [];
          this._eventProcessors = [];
          this._breadcrumbs = [];
          this._attachments = [];
          this._user = {};
          this._tags = {};
          this._extra = {};
          this._contexts = {};
          this._sdkProcessingMetadata = {};
          this._propagationContext = (0, r.Q)();
        }
        clone() {
          const t = new l();
          t._breadcrumbs = [...this._breadcrumbs];
          t._tags = {
            ...this._tags,
          };
          t._extra = {
            ...this._extra,
          };
          t._contexts = {
            ...this._contexts,
          };
          t._user = this._user;
          t._level = this._level;
          t._session = this._session;
          t._transactionName = this._transactionName;
          t._fingerprint = this._fingerprint;
          t._eventProcessors = [...this._eventProcessors];
          t._requestSession = this._requestSession;
          t._attachments = [...this._attachments];
          t._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
          };
          t._propagationContext = {
            ...this._propagationContext,
          };
          t._client = this._client;
          t._lastEventId = this._lastEventId;
          (0, u.D)(t, (0, u.Y)(this));
          return t;
        }
        setClient(t) {
          this._client = t;
        }
        setLastEventId(t) {
          this._lastEventId = t;
        }
        getClient() {
          return this._client;
        }
        lastEventId() {
          return this._lastEventId;
        }
        addScopeListener(t) {
          this._scopeListeners.push(t);
        }
        addEventProcessor(t) {
          this._eventProcessors.push(t);
          return this;
        }
        setUser(t) {
          this._user = t || {
            email: undefined,
            id: undefined,
            ip_address: undefined,
            username: undefined,
          };
          if (this._session) {
            (0, c.CT)(this._session, {
              user: t,
            });
          }
          this._notifyScopeListeners();
          return this;
        }
        getUser() {
          return this._user;
        }
        getRequestSession() {
          return this._requestSession;
        }
        setRequestSession(t) {
          this._requestSession = t;
          return this;
        }
        setTags(t) {
          this._tags = {
            ...this._tags,
            ...t,
          };
          this._notifyScopeListeners();
          return this;
        }
        setTag(t, e) {
          this._tags = {
            ...this._tags,
            [t]: e,
          };
          this._notifyScopeListeners();
          return this;
        }
        setExtras(t) {
          this._extra = {
            ...this._extra,
            ...t,
          };
          this._notifyScopeListeners();
          return this;
        }
        setExtra(t, e) {
          this._extra = {
            ...this._extra,
            [t]: e,
          };
          this._notifyScopeListeners();
          return this;
        }
        setFingerprint(t) {
          this._fingerprint = t;
          this._notifyScopeListeners();
          return this;
        }
        setLevel(t) {
          this._level = t;
          this._notifyScopeListeners();
          return this;
        }
        setTransactionName(t) {
          this._transactionName = t;
          this._notifyScopeListeners();
          return this;
        }
        setContext(t, e) {
          if (e === null) {
            delete this._contexts[t];
          } else {
            this._contexts[t] = e;
          }
          this._notifyScopeListeners();
          return this;
        }
        setSession(t) {
          if (t) {
            this._session = t;
          } else {
            delete this._session;
          }
          this._notifyScopeListeners();
          return this;
        }
        getSession() {
          return this._session;
        }
        update(t) {
          if (!t) {
            return this;
          }
          const e = typeof t == "function" ? t(this) : t;
          const [n, r] =
            e instanceof d
              ? [e.getScopeData(), e.getRequestSession()]
              : (0, s.PO)(e)
                ? [t, t.requestSession]
                : [];
          const {
            tags: i,
            extra: o,
            user: a,
            contexts: c,
            level: u,
            fingerprint: l = [],
            propagationContext: h,
          } = n || {};
          this._tags = {
            ...this._tags,
            ...i,
          };
          this._extra = {
            ...this._extra,
            ...o,
          };
          this._contexts = {
            ...this._contexts,
            ...c,
          };
          if (a && Object.keys(a).length) {
            this._user = a;
          }
          if (u) {
            this._level = u;
          }
          if (l.length) {
            this._fingerprint = l;
          }
          if (h) {
            this._propagationContext = h;
          }
          if (r) {
            this._requestSession = r;
          }
          return this;
        }
        clear() {
          this._breadcrumbs = [];
          this._tags = {};
          this._extra = {};
          this._user = {};
          this._contexts = {};
          this._level = undefined;
          this._transactionName = undefined;
          this._fingerprint = undefined;
          this._requestSession = undefined;
          this._session = undefined;
          (0, u.D)(this, undefined);
          this._attachments = [];
          this._propagationContext = (0, r.Q)();
          this._notifyScopeListeners();
          return this;
        }
        addBreadcrumb(t, e) {
          const n = typeof e == "number" ? e : 100;
          if (n <= 0) {
            return this;
          }
          const r = {
            timestamp: (0, i.yW)(),
            ...t,
          };
          const s = this._breadcrumbs;
          s.push(r);
          this._breadcrumbs = s.length > n ? s.slice(-n) : s;
          this._notifyScopeListeners();
          return this;
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
          this._breadcrumbs = [];
          this._notifyScopeListeners();
          return this;
        }
        addAttachment(t) {
          this._attachments.push(t);
          return this;
        }
        clearAttachments() {
          this._attachments = [];
          return this;
        }
        getScopeData() {
          return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: (0, u.Y)(this),
          };
        }
        setSDKProcessingMetadata(t) {
          this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...t,
          };
          return this;
        }
        setPropagationContext(t) {
          this._propagationContext = t;
          return this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(t, e) {
          const n = e && e.event_id ? e.event_id : (0, o.DM)();
          if (!this._client) {
            a.kg.warn(
              "No client configured on scope - will not capture exception!",
            );
            return n;
          }
          const r = new Error("Sentry syntheticException");
          this._client.captureException(
            t,
            {
              originalException: t,
              syntheticException: r,
              ...e,
              event_id: n,
            },
            this,
          );
          return n;
        }
        captureMessage(t, e, n) {
          const r = n && n.event_id ? n.event_id : (0, o.DM)();
          if (!this._client) {
            a.kg.warn(
              "No client configured on scope - will not capture message!",
            );
            return r;
          }
          const s = new Error(t);
          this._client.captureMessage(
            t,
            e,
            {
              originalException: t,
              syntheticException: s,
              ...n,
              event_id: r,
            },
            this,
          );
          return r;
        }
        captureEvent(t, e) {
          const n = e && e.event_id ? e.event_id : (0, o.DM)();
          if (this._client) {
            this._client.captureEvent(
              t,
              {
                ...e,
                event_id: n,
              },
              this,
            );
            return n;
          } else {
            a.kg.warn(
              "No client configured on scope - will not capture event!",
            );
            return n;
          }
        }
        _notifyScopeListeners() {
          if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            this._scopeListeners.forEach((t) => {
              t(this);
            });
            this._notifyingListeners = false;
          }
        }
      }
      const d = l;
    },
    65367: function (t, e, n) {
      n.d(e, {
        CT: () => i,
      });
      var r = n(94114);
      var s = n(92738);
      function i(t, e = {}) {
        if (e.user) {
          if (!t.ipAddress && e.user.ip_address) {
            t.ipAddress = e.user.ip_address;
          }
          if (!t.did && !e.did) {
            t.did = e.user.id || e.user.email || e.user.username;
          }
        }
        t.timestamp = e.timestamp || (0, r.ph)();
        if (e.abnormal_mechanism) {
          t.abnormal_mechanism = e.abnormal_mechanism;
        }
        if (e.ignoreDuration) {
          t.ignoreDuration = e.ignoreDuration;
        }
        if (e.sid) {
          t.sid = e.sid.length === 32 ? e.sid : (0, s.DM)();
        }
        if (e.init !== undefined) {
          t.init = e.init;
        }
        if (!t.did && e.did) {
          t.did = `${e.did}`;
        }
        if (typeof e.started == "number") {
          t.started = e.started;
        }
        if (t.ignoreDuration) {
          t.duration = undefined;
        } else if (typeof e.duration == "number") {
          t.duration = e.duration;
        } else {
          const e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0;
        }
        if (e.release) {
          t.release = e.release;
        }
        if (e.environment) {
          t.environment = e.environment;
        }
        if (!t.ipAddress && e.ipAddress) {
          t.ipAddress = e.ipAddress;
        }
        if (!t.userAgent && e.userAgent) {
          t.userAgent = e.userAgent;
        }
        if (typeof e.errors == "number") {
          t.errors = e.errors;
        }
        if (e.status) {
          t.status = e.status;
        }
      }
    },
    79603: function (t, e, n) {
      n.d(e, {
        D: () => i,
        Y: () => o,
      });
      var r = n(10568);
      const s = "_sentrySpan";
      function i(t, e) {
        if (e) {
          (0, r.xp)(t, s, e);
        } else {
          delete t[s];
        }
      }
      function o(t) {
        return t[s];
      }
    },
    87854: function (t, e, n) {
      n.d(e, {
        Rt: () => o,
        iY: () => l,
        l4: () => c,
        qT: () => u,
      });
      var r = n(59057);
      const s = n(59662).n;
      const i = 80;
      function o(t, e = {}) {
        if (!t) {
          return "<unknown>";
        }
        try {
          let n = t;
          const r = 5;
          const s = [];
          let o = 0;
          let c = 0;
          const u = " > ";
          const l = u.length;
          let d;
          const h = Array.isArray(e) ? e : e.keyAttrs;
          const p = (!Array.isArray(e) && e.maxStringLength) || i;
          while (
            n &&
            o++ < r &&
            ((d = a(n, h)),
            d !== "html" && (!(o > 1) || !(c + s.length * l + d.length >= p)))
          ) {
            s.push(d);
            c += d.length;
            n = n.parentNode;
          }
          return s.reverse().join(u);
        } catch (t) {
          return "<unknown>";
        }
      }
      function a(t, e) {
        const n = t;
        const i = [];
        if (!n || !n.tagName) {
          return "";
        }
        if (s.HTMLElement && n instanceof HTMLElement && n.dataset) {
          if (n.dataset.sentryComponent) {
            return n.dataset.sentryComponent;
          }
          if (n.dataset.sentryElement) {
            return n.dataset.sentryElement;
          }
        }
        i.push(n.tagName.toLowerCase());
        const o =
          e && e.length
            ? e
                .filter((t) => n.getAttribute(t))
                .map((t) => [t, n.getAttribute(t)])
            : null;
        if (o && o.length) {
          o.forEach((t) => {
            i.push(`[${t[0]}="${t[1]}"]`);
          });
        } else {
          if (n.id) {
            i.push(`#${n.id}`);
          }
          const t = n.className;
          if (t && (0, r.HD)(t)) {
            const e = t.split(/\s+/);
            for (const t of e) {
              i.push(`.${t}`);
            }
          }
        }
        const a = ["aria-label", "type", "name", "title", "alt"];
        for (const t of a) {
          const e = n.getAttribute(t);
          if (e) {
            i.push(`[${t}="${e}"]`);
          }
        }
        return i.join("");
      }
      function c() {
        try {
          return s.document.location.href;
        } catch (t) {
          return "";
        }
      }
      function u(t) {
        if (s.document && s.document.querySelector) {
          return s.document.querySelector(t);
        } else {
          return null;
        }
      }
      function l(t) {
        if (!s.HTMLElement) {
          return null;
        }
        let e = t;
        for (let t = 0; t < 5; t++) {
          if (!e) {
            return null;
          }
          if (e instanceof HTMLElement) {
            if (e.dataset.sentryComponent) {
              return e.dataset.sentryComponent;
            }
            if (e.dataset.sentryElement) {
              return e.dataset.sentryElement;
            }
          }
          e = e.parentNode;
        }
        return null;
      }
    },
    68169: function (t, e, n) {
      n.d(e, {
        X: () => r,
      });
      const r = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__;
    },
    59057: function (t, e, n) {
      n.d(e, {
        Cy: () => y,
        HD: () => u,
        J8: () => g,
        Kj: () => m,
        Le: () => l,
        PO: () => h,
        TX: () => a,
        V9: () => v,
        VW: () => o,
        VZ: () => s,
        cO: () => p,
        fm: () => c,
        kK: () => f,
        pt: () => d,
        y1: () => b,
      });
      const r = Object.prototype.toString;
      function s(t) {
        switch (r.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return true;
          default:
            return v(t, Error);
        }
      }
      function i(t, e) {
        return r.call(t) === `[object ${e}]`;
      }
      function o(t) {
        return i(t, "ErrorEvent");
      }
      function a(t) {
        return i(t, "DOMError");
      }
      function c(t) {
        return i(t, "DOMException");
      }
      function u(t) {
        return i(t, "String");
      }
      function l(t) {
        return (
          typeof t == "object" &&
          t !== null &&
          "__sentry_template_string__" in t &&
          "__sentry_template_values__" in t
        );
      }
      function d(t) {
        return (
          t === null || l(t) || (typeof t != "object" && typeof t != "function")
        );
      }
      function h(t) {
        return i(t, "Object");
      }
      function p(t) {
        return typeof Event != "undefined" && v(t, Event);
      }
      function f(t) {
        return typeof Element != "undefined" && v(t, Element);
      }
      function m(t) {
        return i(t, "RegExp");
      }
      function g(t) {
        return Boolean(t && t.then && typeof t.then == "function");
      }
      function y(t) {
        return (
          h(t) &&
          "nativeEvent" in t &&
          "preventDefault" in t &&
          "stopPropagation" in t
        );
      }
      function v(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return false;
        }
      }
      function b(t) {
        return (
          typeof t == "object" && t !== null && (!!t.__isVue || !!t._isVue)
        );
      }
    },
    29784: function (t, e, n) {
      n.d(e, {
        Cf: () => a,
        LD: () => o,
        RU: () => i,
        kg: () => c,
      });
      var r = n(68169);
      var s = n(59662);
      const i = ["debug", "info", "warn", "error", "log", "assert", "trace"];
      const o = {};
      function a(t) {
        if (!("console" in s.n)) {
          return t();
        }
        const e = s.n.console;
        const n = {};
        const r = Object.keys(o);
        r.forEach((t) => {
          const r = o[t];
          n[t] = e[t];
          e[t] = r;
        });
        try {
          return t();
        } finally {
          r.forEach((t) => {
            e[t] = n[t];
          });
        }
      }
      const c = (function () {
        let t = false;
        const e = {
          enable: () => {
            t = true;
          },
          disable: () => {
            t = false;
          },
          isEnabled: () => t,
        };
        if (r.X) {
          i.forEach((n) => {
            e[n] = (...e) => {
              if (t) {
                a(() => {
                  s.n.console[n](`Sentry Logger [${n}]:`, ...e);
                });
              }
            };
          });
        } else {
          i.forEach((t) => {
            e[t] = () => {};
          });
        }
        return e;
      })();
    },
    92738: function (t, e, n) {
      n.d(e, {
        DM: () => i,
        Db: () => c,
        EG: () => u,
        YO: () => l,
        jH: () => a,
        lE: () => d,
      });
      var r = n(10568);
      var s = n(59662);
      function i() {
        const t = s.n;
        const e = t.crypto || t.msCrypto;
        let n = () => Math.random() * 16;
        try {
          if (e && e.randomUUID) {
            return e.randomUUID().replace(/-/g, "");
          }
          if (e && e.getRandomValues) {
            n = () => {
              const t = new Uint8Array(1);
              e.getRandomValues(t);
              return t[0];
            };
          }
        } catch (t) {}
        return ([10000000] + 1000 + 4000 + 8000 + 100000000000).replace(
          /[018]/g,
          (t) => (t ^ ((n() & 15) >> (t / 4))).toString(16),
        );
      }
      function o(t) {
        if (t.exception && t.exception.values) {
          return t.exception.values[0];
        } else {
          return undefined;
        }
      }
      function a(t) {
        const { message: e, event_id: n } = t;
        if (e) {
          return e;
        }
        const r = o(t);
        if (r) {
          if (r.type && r.value) {
            return `${r.type}: ${r.value}`;
          } else {
            return r.type || r.value || n || "<unknown>";
          }
        } else {
          return n || "<unknown>";
        }
      }
      function c(t, e, n) {
        const r = (t.exception = t.exception || {});
        const s = (r.values = r.values || []);
        const i = (s[0] = s[0] || {});
        i.value ||= e || "";
        i.type ||= n || "Error";
      }
      function u(t, e) {
        const n = o(t);
        if (!n) {
          return;
        }
        const r = n.mechanism;
        n.mechanism = {
          type: "generic",
          handled: true,
          ...r,
          ...e,
        };
        if (e && "data" in e) {
          const t = {
            ...(r && r.data),
            ...e.data,
          };
          n.mechanism.data = t;
        }
      }
      function l(t) {
        if (t && t.__sentry_captured__) {
          return true;
        }
        try {
          (0, r.xp)(t, "__sentry_captured__", true);
        } catch (t) {}
        return false;
      }
      function d(t) {
        if (Array.isArray(t)) {
          return t;
        } else {
          return [t];
        }
      }
    },
    10568: function (t, e, n) {
      n.d(e, {
        HK: () => l,
        Jr: () => g,
        Sh: () => h,
        _j: () => d,
        hl: () => c,
        xp: () => u,
        zf: () => m,
      });
      var r = n(87854);
      var s = n(68169);
      var i = n(59057);
      var o = n(29784);
      var a = n(78264);
      function c(t, e, n) {
        if (!(e in t)) {
          return;
        }
        const r = t[e];
        const s = n(r);
        if (typeof s == "function") {
          (function (t, e) {
            try {
              const n = e.prototype || {};
              t.prototype = e.prototype = n;
              u(t, "__sentry_original__", e);
            } catch (t) {}
          })(s, r);
        }
        t[e] = s;
      }
      function u(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: true,
            configurable: true,
          });
        } catch (n) {
          if (s.X) {
            o.kg.log(
              `Failed to add non-enumerable property "${e}" to object`,
              t,
            );
          }
        }
      }
      function l(t) {
        return t.__sentry_original__;
      }
      function d(t) {
        return Object.keys(t)
          .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)
          .join("&");
      }
      function h(t) {
        if ((0, i.VZ)(t)) {
          return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...f(t),
          };
        }
        if ((0, i.cO)(t)) {
          const e = {
            type: t.type,
            target: p(t.target),
            currentTarget: p(t.currentTarget),
            ...f(t),
          };
          if (typeof CustomEvent != "undefined" && (0, i.V9)(t, CustomEvent)) {
            e.detail = t.detail;
          }
          return e;
        }
        return t;
      }
      function p(t) {
        try {
          if ((0, i.kK)(t)) {
            return (0, r.Rt)(t);
          } else {
            return Object.prototype.toString.call(t);
          }
        } catch (t) {
          return "<unknown>";
        }
      }
      function f(t) {
        if (typeof t == "object" && t !== null) {
          const e = {};
          for (const n in t) {
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              e[n] = t[n];
            }
          }
          return e;
        }
        return {};
      }
      function m(t, e = 40) {
        const n = Object.keys(h(t));
        n.sort();
        const r = n[0];
        if (!r) {
          return "[object has no keys]";
        }
        if (r.length >= e) {
          return (0, a.$G)(r, e);
        }
        for (let t = n.length; t > 0; t--) {
          const r = n.slice(0, t).join(", ");
          if (!(r.length > e)) {
            if (t === n.length) {
              return r;
            } else {
              return (0, a.$G)(r, e);
            }
          }
        }
        return "";
      }
      function g(t) {
        return y(t, new Map());
      }
      function y(t, e) {
        if (
          (function (t) {
            if (!(0, i.PO)(t)) {
              return false;
            }
            try {
              const e = Object.getPrototypeOf(t).constructor.name;
              return !e || e === "Object";
            } catch (t) {
              return true;
            }
          })(t)
        ) {
          const n = e.get(t);
          if (n !== undefined) {
            return n;
          }
          const r = {};
          e.set(t, r);
          for (const n of Object.keys(t)) {
            if (t[n] !== undefined) {
              r[n] = y(t[n], e);
            }
          }
          return r;
        }
        if (Array.isArray(t)) {
          const n = e.get(t);
          if (n !== undefined) {
            return n;
          }
          const r = [];
          e.set(t, r);
          t.forEach((t) => {
            r.push(y(t, e));
          });
          return r;
        }
        return t;
      }
    },
    51788: function (t, e, n) {
      n.d(e, {
        Q: () => s,
      });
      var r = n(92738);
      function s() {
        return {
          traceId: (0, r.DM)(),
          spanId: (0, r.DM)().substring(16),
        };
      }
    },
    78264: function (t, e, n) {
      n.d(e, {
        $G: () => s,
        U0: () => o,
        nK: () => i,
      });
      var r = n(59057);
      function s(t, e = 0) {
        if (typeof t != "string" || e === 0 || t.length <= e) {
          return t;
        } else {
          return `${t.slice(0, e)}...`;
        }
      }
      function i(t, e) {
        if (!Array.isArray(t)) {
          return "";
        }
        const n = [];
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          try {
            if ((0, r.y1)(s)) {
              n.push("[VueViewModel]");
            } else {
              n.push(String(s));
            }
          } catch (t) {
            n.push("[value cannot be serialized]");
          }
        }
        return n.join(e);
      }
      function o(t, e = [], n = false) {
        return e.some((e) =>
          (function (t, e, n = false) {
            return (
              !!(0, r.HD)(t) &&
              ((0, r.Kj)(e)
                ? e.test(t)
                : !!(0, r.HD)(e) && (n ? t === e : t.includes(e)))
            );
          })(t, e, n),
        );
      }
    },
    94114: function (t, e, n) {
      n.d(e, {
        Z1: () => c,
        ph: () => o,
        yW: () => i,
      });
      var r = n(59662);
      const s = 1000;
      function i() {
        return Date.now() / s;
      }
      const o = (function () {
        const { performance: t } = r.n;
        if (!t || !t.now) {
          return i;
        }
        const e = Date.now() - t.now();
        const n = t.timeOrigin == null ? e : t.timeOrigin;
        return () => (n + t.now()) / s;
      })();
      let a;
      const c = (() => {
        const { performance: t } = r.n;
        if (!t || !t.now) {
          a = "none";
          return;
        }
        const e = 3600000;
        const n = t.now();
        const s = Date.now();
        const i = t.timeOrigin ? Math.abs(t.timeOrigin + n - s) : e;
        const o = i < e;
        const c = t.timing && t.timing.navigationStart;
        const u = typeof c == "number" ? Math.abs(c + n - s) : e;
        if (o || u < e) {
          if (i <= u) {
            a = "timeOrigin";
            return t.timeOrigin;
          } else {
            a = "navigationStart";
            return c;
          }
        } else {
          a = "dateNow";
          return s;
        }
      })();
    },
    4206: function (t, e, n) {
      n.d(e, {
        J: () => r,
      });
      const r = "8.17.0";
    },
    59662: function (t, e, n) {
      n.d(e, {
        Y: () => i,
        n: () => s,
      });
      var r = n(4206);
      const s = globalThis;
      function i(t, e, n) {
        const i = n || s;
        const o = (i.__SENTRY__ = i.__SENTRY__ || {});
        const a = (o[r.J] = o[r.J] || {});
        return (a[t] ||= e());
      }
    },
    70107: function (t, e, n) {
      n.d(e, {
        hO: () => k,
        MG: () => x,
      });
      var r = n(67294);
      var s = n(73935);
      function i(t, e, n) {
        let r;
        let s = n.initialDeps ?? [];
        return () => {
          var i;
          var o;
          var a;
          var c;
          let u;
          if (n.key && ((i = n.debug) == null ? undefined : i.call(n))) {
            u = Date.now();
          }
          const l = t();
          if (l.length === s.length && !l.some((t, e) => s[e] !== t)) {
            return r;
          }
          let d;
          s = l;
          if (n.key && ((o = n.debug) == null ? undefined : o.call(n))) {
            d = Date.now();
          }
          r = e(...l);
          if (n.key && ((a = n.debug) == null ? undefined : a.call(n))) {
            const t = Math.round((Date.now() - u) * 100) / 100;
            const e = Math.round((Date.now() - d) * 100) / 100;
            const r = e / 16;
            const s = (t, e) => {
              for (t = String(t); t.length < e; ) {
                t = " " + t;
              }
              return t;
            };
            console.info(
              `%c⏱ ${s(e, 5)} /${s(t, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - r * 120, 120))}deg 100% 31%);`,
              n == null ? undefined : n.key,
            );
          }
          if ((c = n == null ? undefined : n.onChange) != null) {
            c.call(n, r);
          }
          return r;
        };
      }
      function o(t, e) {
        if (t === undefined) {
          throw new Error("Unexpected undefined" + (e ? `: ${e}` : ""));
        }
        return t;
      }
      const a = (t, e, n) => {
        let r;
        return function (...s) {
          t.clearTimeout(r);
          r = t.setTimeout(() => e.apply(this, s), n);
        };
      };
      const c = (t) => t;
      const u = (t) => {
        const e = Math.max(t.startIndex - t.overscan, 0);
        const n = Math.min(t.endIndex + t.overscan, t.count - 1);
        const r = [];
        for (let t = e; t <= n; t++) {
          r.push(t);
        }
        return r;
      };
      const l = (t, e) => {
        const n = t.scrollElement;
        if (!n) {
          return;
        }
        const r = t.targetWindow;
        if (!r) {
          return;
        }
        const s = (t) => {
          const { width: n, height: r } = t;
          e({
            width: Math.round(n),
            height: Math.round(r),
          });
        };
        s(n.getBoundingClientRect());
        if (!r.ResizeObserver) {
          return () => {};
        }
        const i = new r.ResizeObserver((t) => {
          const e = t[0];
          if (e == null ? undefined : e.borderBoxSize) {
            const t = e.borderBoxSize[0];
            if (t) {
              s({
                width: t.inlineSize,
                height: t.blockSize,
              });
              return;
            }
          }
          s(n.getBoundingClientRect());
        });
        i.observe(n, {
          box: "border-box",
        });
        return () => {
          i.unobserve(n);
        };
      };
      const d = {
        passive: true,
      };
      const h = (t, e) => {
        const n = t.scrollElement;
        if (!n) {
          return;
        }
        const r = () => {
          e({
            width: n.innerWidth,
            height: n.innerHeight,
          });
        };
        r();
        n.addEventListener("resize", r, d);
        return () => {
          n.removeEventListener("resize", r);
        };
      };
      const p = typeof window == "undefined" || "onscrollend" in window;
      const f = (t, e) => {
        const n = t.scrollElement;
        if (!n) {
          return;
        }
        const r = t.targetWindow;
        if (!r) {
          return;
        }
        let s = 0;
        const i = p
          ? () => {}
          : a(
              r,
              () => {
                e(s, false);
              },
              t.options.isScrollingResetDelay,
            );
        const o = (r) => () => {
          s = n[t.options.horizontal ? "scrollLeft" : "scrollTop"];
          i();
          e(s, r);
        };
        const c = o(true);
        const u = o(false);
        u();
        n.addEventListener("scroll", c, d);
        n.addEventListener("scrollend", u, d);
        return () => {
          n.removeEventListener("scroll", c);
          n.removeEventListener("scrollend", u);
        };
      };
      const m = (t, e) => {
        const n = t.scrollElement;
        if (!n) {
          return;
        }
        const r = t.targetWindow;
        if (!r) {
          return;
        }
        let s = 0;
        const i = p
          ? () => {}
          : a(
              r,
              () => {
                e(s, false);
              },
              t.options.isScrollingResetDelay,
            );
        const o = (r) => () => {
          s = n[t.options.horizontal ? "scrollX" : "scrollY"];
          i();
          e(s, r);
        };
        const c = o(true);
        const u = o(false);
        u();
        n.addEventListener("scroll", c, d);
        n.addEventListener("scrollend", u, d);
        return () => {
          n.removeEventListener("scroll", c);
          n.removeEventListener("scrollend", u);
        };
      };
      const g = (t, e, n) => {
        if (e == null ? undefined : e.borderBoxSize) {
          const t = e.borderBoxSize[0];
          if (t) {
            return Math.round(
              t[n.options.horizontal ? "inlineSize" : "blockSize"],
            );
          }
        }
        return Math.round(
          t.getBoundingClientRect()[n.options.horizontal ? "width" : "height"],
        );
      };
      const y = (t, { adjustments: e = 0, behavior: n }, r) => {
        var s;
        var i;
        const o = t + e;
        if (
          (i = (s = r.scrollElement) == null ? undefined : s.scrollTo) != null
        ) {
          i.call(s, {
            [r.options.horizontal ? "left" : "top"]: o,
            behavior: n,
          });
        }
      };
      const v = (t, { adjustments: e = 0, behavior: n }, r) => {
        var s;
        var i;
        const o = t + e;
        if (
          (i = (s = r.scrollElement) == null ? undefined : s.scrollTo) != null
        ) {
          i.call(s, {
            [r.options.horizontal ? "left" : "top"]: o,
            behavior: n,
          });
        }
      };
      class b {
        constructor(t) {
          this.unsubs = [];
          this.scrollElement = null;
          this.targetWindow = null;
          this.isScrolling = false;
          this.scrollToIndexTimeoutId = null;
          this.measurementsCache = [];
          this.itemSizeCache = new Map();
          this.pendingMeasuredCacheIndexes = [];
          this.scrollRect = null;
          this.scrollOffset = null;
          this.scrollDirection = null;
          this.scrollAdjustments = 0;
          this.elementsCache = new Map();
          this.observer = (() => {
            let t = null;
            const e = () =>
              t ||
              (this.targetWindow && this.targetWindow.ResizeObserver
                ? (t = new this.targetWindow.ResizeObserver((t) => {
                    t.forEach((t) => {
                      this._measureElement(t.target, t);
                    });
                  }))
                : null);
            return {
              disconnect: () => {
                var t;
                if ((t = e()) == null) {
                  return undefined;
                } else {
                  return t.disconnect();
                }
              },
              observe: (t) => {
                var n;
                if ((n = e()) == null) {
                  return undefined;
                } else {
                  return n.observe(t, {
                    box: "border-box",
                  });
                }
              },
              unobserve: (t) => {
                var n;
                if ((n = e()) == null) {
                  return undefined;
                } else {
                  return n.unobserve(t);
                }
              },
            };
          })();
          this.range = null;
          this.setOptions = (t) => {
            Object.entries(t).forEach(([e, n]) => {
              if (n === undefined) {
                delete t[e];
              }
            });
            this.options = {
              debug: false,
              initialOffset: 0,
              overscan: 1,
              paddingStart: 0,
              paddingEnd: 0,
              scrollPaddingStart: 0,
              scrollPaddingEnd: 0,
              horizontal: false,
              getItemKey: c,
              rangeExtractor: u,
              onChange: () => {},
              measureElement: g,
              initialRect: {
                width: 0,
                height: 0,
              },
              scrollMargin: 0,
              gap: 0,
              indexAttribute: "data-index",
              initialMeasurementsCache: [],
              lanes: 1,
              isScrollingResetDelay: 150,
              enabled: true,
              ...t,
            };
          };
          this.notify = (t, e) => {
            var n;
            var r;
            const { startIndex: s, endIndex: i } = this.range ?? {
              startIndex: undefined,
              endIndex: undefined,
            };
            const o = this.calculateRange();
            if (
              t ||
              s !== (o == null ? undefined : o.startIndex) ||
              i !== (o == null ? undefined : o.endIndex)
            ) {
              if ((r = (n = this.options).onChange) != null) {
                r.call(n, this, e);
              }
            }
          };
          this.cleanup = () => {
            this.unsubs.filter(Boolean).forEach((t) => t());
            this.unsubs = [];
            this.scrollElement = null;
            this.targetWindow = null;
            this.observer.disconnect();
            this.elementsCache.clear();
          };
          this._didMount = () => () => {
            this.cleanup();
          };
          this._willUpdate = () => {
            var t;
            const e = this.options.enabled
              ? this.options.getScrollElement()
              : null;
            if (this.scrollElement !== e) {
              this.cleanup();
              if (!e) {
                this.notify(false, false);
                return;
              }
              this.scrollElement = e;
              if (this.scrollElement && "ownerDocument" in this.scrollElement) {
                this.targetWindow =
                  this.scrollElement.ownerDocument.defaultView;
              } else {
                this.targetWindow =
                  ((t = this.scrollElement) == null ? undefined : t.window) ??
                  null;
              }
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: undefined,
                behavior: undefined,
              });
              this.unsubs.push(
                this.options.observeElementRect(this, (t) => {
                  this.scrollRect = t;
                  this.notify(false, false);
                }),
              );
              this.unsubs.push(
                this.options.observeElementOffset(this, (t, e) => {
                  this.scrollAdjustments = 0;
                  this.scrollDirection = e
                    ? this.getScrollOffset() < t
                      ? "forward"
                      : "backward"
                    : null;
                  this.scrollOffset = t;
                  const n = this.isScrolling;
                  this.isScrolling = e;
                  this.notify(n !== e, e);
                }),
              );
            }
          };
          this.getSize = () =>
            this.options.enabled
              ? ((this.scrollRect =
                  this.scrollRect ?? this.options.initialRect),
                this.scrollRect[this.options.horizontal ? "width" : "height"])
              : ((this.scrollRect = null), 0);
          this.getScrollOffset = () =>
            this.options.enabled
              ? ((this.scrollOffset =
                  this.scrollOffset ??
                  (typeof this.options.initialOffset == "function"
                    ? this.options.initialOffset()
                    : this.options.initialOffset)),
                this.scrollOffset)
              : ((this.scrollOffset = null), 0);
          this.getFurthestMeasurement = (t, e) => {
            const n = new Map();
            const r = new Map();
            for (let s = e - 1; s >= 0; s--) {
              const e = t[s];
              if (n.has(e.lane)) {
                continue;
              }
              const i = r.get(e.lane);
              if (i == null || e.end > i.end) {
                r.set(e.lane, e);
              } else if (e.end < i.end) {
                n.set(e.lane, true);
              }
              if (n.size === this.options.lanes) {
                break;
              }
            }
            if (r.size === this.options.lanes) {
              return Array.from(r.values()).sort((t, e) =>
                t.end === e.end ? t.index - e.index : t.end - e.end,
              )[0];
            } else {
              return undefined;
            }
          };
          this.getMeasurementOptions = i(
            () => [
              this.options.count,
              this.options.paddingStart,
              this.options.scrollMargin,
              this.options.getItemKey,
              this.options.enabled,
            ],
            (t, e, n, r, s) => {
              this.pendingMeasuredCacheIndexes = [];
              return {
                count: t,
                paddingStart: e,
                scrollMargin: n,
                getItemKey: r,
                enabled: s,
              };
            },
            {
              key: false,
            },
          );
          this.getMeasurements = i(
            () => [this.getMeasurementOptions(), this.itemSizeCache],
            (
              {
                count: t,
                paddingStart: e,
                scrollMargin: n,
                getItemKey: r,
                enabled: s,
              },
              i,
            ) => {
              var o;
              if (!s) {
                this.measurementsCache = [];
                this.itemSizeCache.clear();
                return [];
              }
              if (this.measurementsCache.length === 0) {
                this.measurementsCache = this.options.initialMeasurementsCache;
                this.measurementsCache.forEach((t) => {
                  this.itemSizeCache.set(t.key, t.size);
                });
              }
              const a =
                this.pendingMeasuredCacheIndexes.length > 0
                  ? Math.min(...this.pendingMeasuredCacheIndexes)
                  : 0;
              this.pendingMeasuredCacheIndexes = [];
              const c = this.measurementsCache.slice(0, a);
              for (let s = a; s < t; s++) {
                let t =
                  (o = this.measurementsCache[s]) == null
                    ? undefined
                    : o.measureElement;
                t ||= (t) => {
                  const e = r(s);
                  const n = this.elementsCache.get(e);
                  if (t) {
                    if (n !== t) {
                      if (n) {
                        this.observer.unobserve(n);
                      }
                      this.observer.observe(t);
                      this.elementsCache.set(e, t);
                    }
                    if (t.isConnected) {
                      this.resizeItem(
                        s,
                        this.options.measureElement(t, undefined, this),
                      );
                    }
                  } else if (n) {
                    this.observer.unobserve(n);
                    this.elementsCache.delete(e);
                  }
                };
                const a = r(s);
                const u =
                  this.options.lanes === 1
                    ? c[s - 1]
                    : this.getFurthestMeasurement(c, s);
                const l = u ? u.end + this.options.gap : e + n;
                const d = i.get(a);
                const h =
                  typeof d == "number" ? d : this.options.estimateSize(s);
                const p = l + h;
                const f = u ? u.lane : s % this.options.lanes;
                c[s] = {
                  index: s,
                  start: l,
                  size: h,
                  end: p,
                  key: a,
                  lane: f,
                  measureElement: t,
                };
              }
              this.measurementsCache = c;
              return c;
            },
            {
              key: false,
              debug: () => this.options.debug,
            },
          );
          this.calculateRange = i(
            () => [
              this.getMeasurements(),
              this.getSize(),
              this.getScrollOffset(),
            ],
            (t, e, n) =>
              (this.range =
                t.length > 0 && e > 0
                  ? (function ({
                      measurements: t,
                      outerSize: e,
                      scrollOffset: n,
                    }) {
                      const r = t.length - 1;
                      const s = (e) => t[e].start;
                      const i = S(0, r, s, n);
                      let o = i;
                      while (o < r && t[o].end < n + e) {
                        o++;
                      }
                      return {
                        startIndex: i,
                        endIndex: o,
                      };
                    })({
                      measurements: t,
                      outerSize: e,
                      scrollOffset: n,
                    })
                  : null),
            {
              key: false,
              debug: () => this.options.debug,
            },
          );
          this.getIndexes = i(
            () => [
              this.options.rangeExtractor,
              this.calculateRange(),
              this.options.overscan,
              this.options.count,
            ],
            (t, e, n, r) =>
              e === null
                ? []
                : t({
                    startIndex: e.startIndex,
                    endIndex: e.endIndex,
                    overscan: n,
                    count: r,
                  }),
            {
              key: false,
              debug: () => this.options.debug,
            },
          );
          this.indexFromElement = (t) => {
            const e = this.options.indexAttribute;
            const n = t.getAttribute(e);
            if (n) {
              return parseInt(n, 10);
            } else {
              console.warn(
                `Missing attribute name '${e}={index}' on measured element.`,
              );
              return -1;
            }
          };
          this._measureElement = (t, e) => {
            const n = this.indexFromElement(t);
            const r = this.getMeasurements()[n];
            if (!r || !t.isConnected) {
              this.elementsCache.forEach((e, n) => {
                if (e === t) {
                  this.observer.unobserve(t);
                  this.elementsCache.delete(n);
                }
              });
              return;
            }
            const s = this.elementsCache.get(r.key);
            if (s !== t) {
              if (s) {
                this.observer.unobserve(s);
              }
              this.observer.observe(t);
              this.elementsCache.set(r.key, t);
            }
            this.resizeItem(n, this.options.measureElement(t, e, this));
          };
          this.resizeItem = (t, e) => {
            const n = this.getMeasurements()[t];
            if (!n) {
              return;
            }
            const r = e - (this.itemSizeCache.get(n.key) ?? n.size);
            if (r !== 0) {
              if (
                this.shouldAdjustScrollPositionOnItemSizeChange !== undefined
                  ? this.shouldAdjustScrollPositionOnItemSizeChange(n, r, this)
                  : n.start < this.getScrollOffset() + this.scrollAdjustments
              ) {
                this._scrollToOffset(this.getScrollOffset(), {
                  adjustments: (this.scrollAdjustments += r),
                  behavior: undefined,
                });
              }
              this.pendingMeasuredCacheIndexes.push(n.index);
              this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, e));
              this.notify(true, false);
            }
          };
          this.measureElement = (t) => {
            if (t) {
              this._measureElement(t, undefined);
            }
          };
          this.getVirtualItems = i(
            () => [this.getIndexes(), this.getMeasurements()],
            (t, e) => {
              const n = [];
              for (let r = 0, s = t.length; r < s; r++) {
                const s = e[t[r]];
                n.push(s);
              }
              return n;
            },
            {
              key: false,
              debug: () => this.options.debug,
            },
          );
          this.getVirtualItemForOffset = (t) => {
            const e = this.getMeasurements();
            if (e.length !== 0) {
              return o(e[S(0, e.length - 1, (t) => o(e[t]).start, t)]);
            }
          };
          this.getOffsetForAlignment = (t, e) => {
            const n = this.getSize();
            const r = this.getScrollOffset();
            if (e === "auto") {
              e = t <= r ? "start" : t >= r + n ? "end" : "start";
            }
            if (e !== "start") {
              if (e === "end") {
                t -= n;
              } else if (e === "center") {
                t -= n / 2;
              }
            }
            const s = this.options.horizontal ? "scrollWidth" : "scrollHeight";
            const i =
              (this.scrollElement
                ? "document" in this.scrollElement
                  ? this.scrollElement.document.documentElement[s]
                  : this.scrollElement[s]
                : 0) - n;
            return Math.max(Math.min(i, t), 0);
          };
          this.getOffsetForIndex = (t, e = "auto") => {
            t = Math.max(0, Math.min(t, this.options.count - 1));
            const n = this.getMeasurements()[t];
            if (!n) {
              return;
            }
            const r = this.getSize();
            const s = this.getScrollOffset();
            if (e === "auto") {
              if (n.end >= s + r - this.options.scrollPaddingEnd) {
                e = "end";
              } else {
                if (!(n.start <= s + this.options.scrollPaddingStart)) {
                  return [s, e];
                }
                e = "start";
              }
            }
            const i =
              e === "end"
                ? n.end + this.options.scrollPaddingEnd
                : n.start - this.options.scrollPaddingStart;
            return [this.getOffsetForAlignment(i, e), e];
          };
          this.isDynamicMode = () => this.elementsCache.size > 0;
          this.cancelScrollToIndex = () => {
            if (this.scrollToIndexTimeoutId !== null && this.targetWindow) {
              this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId);
              this.scrollToIndexTimeoutId = null;
            }
          };
          this.scrollToOffset = (
            t,
            { align: e = "start", behavior: n } = {},
          ) => {
            this.cancelScrollToIndex();
            if (n === "smooth" && this.isDynamicMode()) {
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              );
            }
            this._scrollToOffset(this.getOffsetForAlignment(t, e), {
              adjustments: undefined,
              behavior: n,
            });
          };
          this.scrollToIndex = (t, { align: e = "auto", behavior: n } = {}) => {
            t = Math.max(0, Math.min(t, this.options.count - 1));
            this.cancelScrollToIndex();
            if (n === "smooth" && this.isDynamicMode()) {
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              );
            }
            const r = this.getOffsetForIndex(t, e);
            if (!r) {
              return;
            }
            const [s, i] = r;
            this._scrollToOffset(s, {
              adjustments: undefined,
              behavior: n,
            });
            if (n !== "smooth" && this.isDynamicMode() && this.targetWindow) {
              this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                this.scrollToIndexTimeoutId = null;
                if (this.elementsCache.has(this.options.getItemKey(t))) {
                  const [s] = o(this.getOffsetForIndex(t, i));
                  e = s;
                  r = this.getScrollOffset();
                  if (!(Math.abs(e - r) < 1)) {
                    this.scrollToIndex(t, {
                      align: i,
                      behavior: n,
                    });
                  }
                } else {
                  this.scrollToIndex(t, {
                    align: i,
                    behavior: n,
                  });
                }
                var e;
                var r;
              });
            }
          };
          this.scrollBy = (t, { behavior: e } = {}) => {
            this.cancelScrollToIndex();
            if (e === "smooth" && this.isDynamicMode()) {
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              );
            }
            this._scrollToOffset(this.getScrollOffset() + t, {
              adjustments: undefined,
              behavior: e,
            });
          };
          this.getTotalSize = () => {
            var t;
            const e = this.getMeasurements();
            let n;
            n =
              e.length === 0
                ? this.options.paddingStart
                : this.options.lanes === 1
                  ? (((t = e[e.length - 1]) == null ? undefined : t.end) ?? 0)
                  : Math.max(...e.slice(-this.options.lanes).map((t) => t.end));
            return n - this.options.scrollMargin + this.options.paddingEnd;
          };
          this._scrollToOffset = (t, { adjustments: e, behavior: n }) => {
            this.options.scrollToFn(
              t,
              {
                behavior: n,
                adjustments: e,
              },
              this,
            );
          };
          this.measure = () => {
            var t;
            var e;
            this.itemSizeCache = new Map();
            if ((e = (t = this.options).onChange) != null) {
              e.call(t, this, false);
            }
          };
          this.setOptions(t);
        }
      }
      const S = (t, e, n, r) => {
        while (t <= e) {
          const s = ((t + e) / 2) | 0;
          const i = n(s);
          if (i < r) {
            t = s + 1;
          } else {
            if (!(i > r)) {
              return s;
            }
            e = s - 1;
          }
        }
        if (t > 0) {
          return t - 1;
        } else {
          return 0;
        }
      };
      const _ =
        typeof document != "undefined" ? r.useLayoutEffect : r.useEffect;
      function w(t) {
        const e = r.useReducer(() => ({}), {})[1];
        const n = {
          ...t,
          onChange: (n, r) => {
            var i;
            if (r) {
              (0, s.flushSync)(e);
            } else {
              e();
            }
            if ((i = t.onChange) != null) {
              i.call(t, n, r);
            }
          },
        };
        const [i] = r.useState(() => new b(n));
        i.setOptions(n);
        r.useEffect(() => i._didMount(), []);
        _(() => i._willUpdate());
        return i;
      }
      function x(t) {
        return w({
          observeElementRect: l,
          observeElementOffset: f,
          scrollToFn: v,
          ...t,
        });
      }
      function k(t) {
        return w({
          getScrollElement: () =>
            typeof document != "undefined" ? window : null,
          observeElementRect: h,
          observeElementOffset: m,
          scrollToFn: y,
          initialOffset: () =>
            typeof document != "undefined" ? window.scrollY : 0,
          ...t,
        });
      }
    },
    76961: function (t, e, n) {
      n.d(e, {
        j: () => K,
      });
      class r {
        constructor(t) {
          this.stop = () => this.runAll("stop");
          this.animations = t.filter(Boolean);
        }
        get finished() {
          return Promise.all(this.animations.map((t) => t.finished));
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let n = 0; n < this.animations.length; n++) {
            this.animations[n][t] = e;
          }
        }
        attachTimeline(t) {
          const e = this.animations.map((e) => e.attachTimeline(t));
          return () => {
            e.forEach((t, e) => {
              if (t) {
                t();
              }
              this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get state() {
          return this.getAll("state");
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          return s(this.animations, "duration");
        }
        get iterationDuration() {
          return s(this.animations, "iterationDuration");
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      function s(t, e) {
        let n = 0;
        for (let r = 0; r < t.length; r++) {
          const s = t[r][e];
          if (s !== null && s > n) {
            n = s;
          }
        }
        return n;
      }
      class i extends r {
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
      }
      var o = n(97433);
      var a = n(40187);
      var c = n(71519);
      var u = n(20479);
      var l = n(65399);
      var d = n(54293);
      var h = n(45875);
      var p = n(15244);
      var f = n(26975);
      var m = n(61209);
      function g(t, e) {
        if ((0, m.N)(t)) {
          return t[
            ((t, e, n) => {
              const r = e - t;
              return ((((n - t) % r) + r) % r) + t;
            })(0, t.length, e)
          ];
        } else {
          return t;
        }
      }
      var y = n(66789);
      var v = n(6419);
      function b(t) {
        return typeof t == "object" && !Array.isArray(t);
      }
      function S(t, e, n, r) {
        if (typeof t == "string" && b(e)) {
          return (0, v.I)(t, n, r);
        } else if (t instanceof NodeList) {
          return Array.from(t);
        } else if (Array.isArray(t)) {
          return t;
        } else {
          return [t];
        }
      }
      function _(t, e, n) {
        return t * (e + 1);
      }
      function w(t, e, n, r) {
        if (typeof e == "number") {
          return e;
        } else if (e.startsWith("-") || e.startsWith("+")) {
          return Math.max(0, t + parseFloat(e));
        } else if (e === "<") {
          return n;
        } else if (e.startsWith("<")) {
          return Math.max(0, n + parseFloat(e.slice(1)));
        } else {
          return r.get(e) ?? t;
        }
      }
      var x = n(55153);
      function k(t, e, n, r, s, i) {
        (function (t, e, n) {
          for (let r = 0; r < t.length; r++) {
            const s = t[r];
            if (s.at > e && s.at < n) {
              (0, o.cl)(t, s);
              r--;
            }
          }
        })(t, s, i);
        for (let o = 0; o < e.length; o++) {
          t.push({
            value: e[o],
            at: (0, x.t)(s, i, r[o]),
            easing: g(n, o),
          });
        }
      }
      function E(t, e) {
        for (let n = 0; n < t.length; n++) {
          t[n] = t[n] / (e + 1);
        }
      }
      function T(t, e) {
        if (t.at === e.at) {
          if (t.value === null) {
            return 1;
          } else if (e.value === null) {
            return -1;
          } else {
            return 0;
          }
        } else {
          return t.at - e.at;
        }
      }
      function C(t, e) {
        if (!e.has(t)) {
          e.set(t, {});
        }
        return e.get(t);
      }
      function M(t, e) {
        e[t] ||= [];
        return e[t];
      }
      function I(t) {
        if (Array.isArray(t)) {
          return t;
        } else {
          return [t];
        }
      }
      function A(t, e) {
        if (t && t[e]) {
          return {
            ...t,
            ...t[e],
          };
        } else {
          return {
            ...t,
          };
        }
      }
      const R = (t) => typeof t == "number";
      const P = (t) => t.every(R);
      var O = n(54449);
      var D = n(4516);
      var L = n(59634);
      var N = n(30038);
      var j = n(3622);
      var F = n(95398);
      var $ = n(26967);
      class B extends $.l {
        constructor() {
          super(...arguments);
          this.type = "object";
        }
        readValueFromInstance(t, e) {
          if (
            (function (t, e) {
              return t in e;
            })(e, t)
          ) {
            const n = t[e];
            if (typeof n == "string" || typeof n == "number") {
              return n;
            }
          }
        }
        getBaseTargetFromProps() {}
        removeValueFromRenderState(t, e) {
          delete e.output[t];
        }
        measureInstanceViewportBox() {
          return (0, F.dO)();
        }
        build(t, e) {
          Object.assign(t.output, e);
        }
        renderInstance(t, { output: e }) {
          Object.assign(t, e);
        }
        sortInstanceNodePosition() {
          return 0;
        }
      }
      var V = n(65504);
      function U(t) {
        const e = {
          presenceContext: null,
          props: {},
          visualState: {
            renderState: {
              transform: {},
              transformOrigin: {},
              style: {},
              vars: {},
              attrs: {},
            },
            latestValues: {},
          },
        };
        const n = (0, L.v)(t) && !(0, N.r)(t) ? new V.e(e) : new j.W(e);
        n.mount(t);
        O.R.set(t, n);
      }
      function z(t) {
        const e = new B({
          presenceContext: null,
          props: {},
          visualState: {
            renderState: {
              output: {},
            },
            latestValues: {},
          },
        });
        e.mount(t);
        O.R.set(t, e);
      }
      var W = n(59349);
      function q(t, e, n, r) {
        const s = [];
        if (
          (function (t, e) {
            return (
              (0, h.i)(t) ||
              typeof t == "number" ||
              (typeof t == "string" && !b(e))
            );
          })(t, e)
        ) {
          s.push((0, W.D)(t, (b(e) && e.default) || e, (n && n.default) || n));
        } else {
          const i = S(t, e, r);
          const o = i.length;
          (0, f.k)(
            Boolean(o),
            "No valid elements provided.",
            "no-valid-elements",
          );
          for (let t = 0; t < o; t++) {
            const r = i[t];
            (0, f.k)(
              r !== null,
              "You're trying to perform an animation on null. Ensure that selectors are correctly finding elements and refs are correctly hydrated.",
              "animate-null",
            );
            const a = r instanceof Element ? U : z;
            if (!O.R.has(r)) {
              a(r);
            }
            const c = O.R.get(r);
            const u = {
              ...n,
            };
            if ("delay" in u && typeof u.delay == "function") {
              u.delay = u.delay(t, o);
            }
            s.push(
              ...(0, D.w)(
                c,
                {
                  ...e,
                  transition: u,
                },
                {},
              ),
            );
          }
        }
        return s;
      }
      function H(t, e, n) {
        const r = [];
        const s = (function (
          t,
          { defaultTransition: e = {}, ...n } = {},
          r,
          s,
        ) {
          const i = e.duration || 0.3;
          const o = new Map();
          const a = new Map();
          const m = {};
          const v = new Map();
          let b = 0;
          let x = 0;
          let R = 0;
          for (let n = 0; n < t.length; n++) {
            const o = t[n];
            if (typeof o == "string") {
              v.set(o, x);
              continue;
            }
            if (!Array.isArray(o)) {
              v.set(o.name, w(x, o.at, b, v));
              continue;
            }
            let [y, T, O = {}] = o;
            if (O.at !== undefined) {
              x = w(x, O.at, b, v);
            }
            let D = 0;
            const L = (t, n, r, o = 0, a = 0) => {
              const h = I(t);
              const {
                delay: m = 0,
                times: y = (0, c.Y)(h),
                type: v = "keyframes",
                repeat: b,
                repeatType: S,
                repeatDelay: w = 0,
                ...T
              } = n;
              let { ease: C = e.ease || "easeOut", duration: M } = n;
              const A = typeof m == "function" ? m(o, a) : m;
              const O = h.length;
              const L = (0, u.x)(v) ? v : s?.[v || "keyframes"];
              if (O <= 2 && L) {
                let t = 100;
                if (O === 2 && P(h)) {
                  const e = h[1] - h[0];
                  t = Math.abs(e);
                }
                const e = {
                  ...T,
                };
                if (M !== undefined) {
                  e.duration = (0, p.w)(M);
                }
                const n = (0, l.S)(e, t, L);
                C = n.ease;
                M = n.duration;
              }
              M ??= i;
              const N = x + A;
              if (y.length === 1 && y[0] === 0) {
                y[1] = 1;
              }
              const j = y.length - h.length;
              if (j > 0) {
                (0, d.c)(y, j);
              }
              if (h.length === 1) {
                h.unshift(null);
              }
              if (b) {
                (0, f.k)(
                  b < 20,
                  "Repeat count too high, must be less than 20",
                  "repeat-count-high",
                );
                M = _(M, b);
                const t = [...h];
                const e = [...y];
                C = Array.isArray(C) ? [...C] : [C];
                const n = [...C];
                for (let r = 0; r < b; r++) {
                  h.push(...t);
                  for (let s = 0; s < t.length; s++) {
                    y.push(e[s] + (r + 1));
                    C.push(s === 0 ? "linear" : g(n, s - 1));
                  }
                }
                E(y, b);
              }
              const F = N + M;
              k(r, h, C, y, N, F);
              D = Math.max(A + M, D);
              R = Math.max(F, R);
            };
            if ((0, h.i)(y)) {
              L(T, O, M("default", C(y, a)));
            } else {
              const t = S(y, T, r, m);
              const e = t.length;
              for (let n = 0; n < e; n++) {
                const r = C(t[n], a);
                for (const t in T) {
                  L(T[t], A(O, t), M(t, r), n, e);
                }
              }
            }
            b = x;
            x += D;
          }
          a.forEach((t, r) => {
            for (const s in t) {
              const i = t[s];
              i.sort(T);
              const a = [];
              const c = [];
              const u = [];
              for (let t = 0; t < i.length; t++) {
                const { at: e, value: n, easing: r } = i[t];
                a.push(n);
                c.push((0, y.Y)(0, R, e));
                u.push(r || "easeOut");
              }
              if (c[0] !== 0) {
                c.unshift(0);
                a.unshift(a[0]);
                u.unshift("easeInOut");
              }
              if (c[c.length - 1] !== 1) {
                c.push(1);
                a.push(null);
              }
              if (!o.has(r)) {
                o.set(r, {
                  keyframes: {},
                  transition: {},
                });
              }
              const l = o.get(r);
              l.keyframes[s] = a;
              l.transition[s] = {
                ...e,
                duration: R,
                ease: u,
                times: c,
                ...n,
              };
            }
          });
          return o;
        })(t, e, n, {
          spring: a.S,
        });
        s.forEach(({ keyframes: t, transition: e }, n) => {
          r.push(...q(n, t, e));
        });
        return r;
      }
      const K = function (t, e, n) {
        let r;
        let s = [];
        a = t;
        if (Array.isArray(a) && a.some(Array.isArray)) {
          s = H(t, e, X);
        } else {
          const { onComplete: i, ...o } = n || {};
          if (typeof i == "function") {
            r = i;
          }
          s = q(t, e, o, X);
        }
        var a;
        const c = new i(s);
        if (r) {
          c.finished.then(r);
        }
        if (X) {
          X.animations.push(c);
          c.finished.then(() => {
            (0, o.cl)(X.animations, c);
          });
        }
        return c;
      };
      var X;
    },
    59349: function (t, e, n) {
      n.d(e, {
        D: () => o,
      });
      var r = n(45875);
      var s = n(17802);
      var i = n(20284);
      function o(t, e, n) {
        const o = (0, r.i)(t) ? t : (0, s.BX)(t);
        o.start((0, i.v)("", o, e, n));
        return o.animation;
      }
    },
    20284: function (t, e, n) {
      n.d(e, {
        v: () => St,
      });
      var r = n(83479);
      function s(t) {
        t.duration = 0;
        t.type = "keyframes";
      }
      var i = n(63594);
      var o = n(60333);
      var a = n(65437);
      var c = n(15244);
      var u = n(35449);
      var l = n(32838);
      var d = n(98029);
      const h = (t) => {
        const e = ({ timestamp: e }) => t(e);
        return {
          start: (t = true) => i.Wi.update(e, t),
          stop: () => (0, i.Pn)(e),
          now: () => (i.w0.isProcessing ? i.w0.timestamp : u.X.now()),
        };
      };
      var p = n(40187);
      var f = n(6445);
      function m({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: r = 325,
        bounceDamping: s = 10,
        bounceStiffness: i = 500,
        modifyTarget: o,
        min: a,
        max: c,
        restDelta: u = 0.5,
        restSpeed: l,
      }) {
        const d = t[0];
        const h = {
          done: false,
          value: d,
        };
        const m = (t) =>
          a === undefined
            ? c
            : c === undefined || Math.abs(a - t) < Math.abs(c - t)
              ? a
              : c;
        let g = n * e;
        const y = d + g;
        const v = o === undefined ? y : o(y);
        if (v !== y) {
          g = v - d;
        }
        const b = (t) => -g * Math.exp(-t / r);
        const S = (t) => v + b(t);
        const _ = (t) => {
          const e = b(t);
          const n = S(t);
          h.done = Math.abs(e) <= u;
          h.value = h.done ? v : n;
        };
        let w;
        let x;
        const k = (t) => {
          var e;
          e = h.value;
          if ((a !== undefined && e < a) || (c !== undefined && e > c)) {
            w = t;
            x = (0, p.S)({
              keyframes: [h.value, m(h.value)],
              velocity: (0, f.P)(S, t, h.value),
              damping: s,
              stiffness: i,
              restDelta: u,
              restSpeed: l,
            });
          }
        };
        k(0);
        return {
          calculatedDuration: null,
          next: (t) => {
            let e = false;
            if (!x && w === undefined) {
              e = true;
              _(t);
              k(t);
            }
            if (w !== undefined && t >= w) {
              return x.next(t - w);
            } else {
              if (!e) {
                _(t);
              }
              return h;
            }
          },
        };
      }
      var g = n(43594);
      const y = (t, e, n) =>
        (((1 - n * 3 + e * 3) * t + (n * 3 - e * 6)) * t + e * 3) * t;
      function v(t, e, n, r) {
        if (t === e && n === r) {
          return g.Z;
        }
        const s = (e) =>
          (function (t, e, n, r, s) {
            let i;
            let o;
            let a = 0;
            do {
              o = e + (n - e) / 2;
              i = y(o, r, s) - t;
              if (i > 0) {
                n = o;
              } else {
                e = o;
              }
            } while (Math.abs(i) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, n);
        return (t) => (t === 0 || t === 1 ? t : y(s(t), e, r));
      }
      const b = v(0.42, 0, 1, 1);
      const S = v(0, 0, 0.58, 1);
      const _ = v(0.42, 0, 0.58, 1);
      var w = n(61209);
      var x = n(26975);
      var k = n(27467);
      var E = n(6578);
      const T = v(0.33, 1.53, 0.69, 0.99);
      const C = (0, E.M)(T);
      const M = (0, k.o)(C);
      const I = (t) =>
        (t *= 2) < 1 ? C(t) * 0.5 : (2 - Math.pow(2, (t - 1) * -10)) * 0.5;
      var A = n(37919);
      const R = (t) => Array.isArray(t) && typeof t[0] == "number";
      const P = {
        linear: g.Z,
        easeIn: b,
        easeInOut: _,
        easeOut: S,
        circIn: A.Z7,
        circInOut: A.X7,
        circOut: A.Bn,
        backIn: C,
        backInOut: M,
        backOut: T,
        anticipate: I,
      };
      const O = (t) => {
        if (R(t)) {
          (0, x.k)(
            t.length === 4,
            "Cubic bezier arrays must contain four numerical values.",
            "cubic-bezier-length",
          );
          const [e, n, r, s] = t;
          return v(e, n, r, s);
        }
        if (typeof t == "string") {
          (0, x.k)(
            P[t] !== undefined,
            `Invalid easing type '${t}'`,
            "invalid-easing-type",
          );
          return P[t];
        } else {
          return t;
        }
      };
      var D = n(10959);
      var L = n(71519);
      function N({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: r = "easeInOut",
      }) {
        const s = (0, w.N)(r) ? r.map(O) : O(r);
        const i = {
          done: false,
          value: e[0],
        };
        const o = (function (t, e) {
          return t.map((t) => t * e);
        })(n && n.length === e.length ? n : (0, L.Y)(e), t);
        const a = (0, D.s)(o, e, {
          ease: Array.isArray(s)
            ? s
            : ((c = e), (u = s), c.map(() => u || _).splice(0, c.length - 1)),
        });
        var c;
        var u;
        return {
          calculatedDuration: t,
          next: (e) => {
            i.value = a(e);
            i.done = e >= t;
            return i;
          },
        };
      }
      var j = n(36989);
      const F = (t) => t !== null;
      function $(t, { repeat: e, repeatType: n = "loop" }, r, s = 1) {
        const i = t.filter(F);
        const o = s < 0 || (e && n !== "loop" && e % 2 == 1) ? 0 : i.length - 1;
        if (o && r !== undefined) {
          return r;
        } else {
          return i[o];
        }
      }
      const B = {
        decay: m,
        inertia: m,
        tween: N,
        keyframes: N,
        spring: p.S,
      };
      function V(t) {
        if (typeof t.type == "string") {
          t.type = B[t.type];
        }
      }
      class U {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((t) => {
            this.resolve = t;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
      const z = (t) => t / 100;
      class W extends U {
        constructor(t) {
          super();
          this.state = "idle";
          this.startTime = null;
          this.isStopped = false;
          this.currentTime = 0;
          this.holdTime = null;
          this.playbackSpeed = 1;
          this.stop = () => {
            const { motionValue: t } = this.options;
            if (t && t.updatedAt !== u.X.now()) {
              this.tick(u.X.now());
            }
            this.isStopped = true;
            if (this.state !== "idle") {
              this.teardown();
              this.options.onStop?.();
            }
          };
          l.P.mainThread++;
          this.options = t;
          this.initAnimation();
          this.play();
          if (t.autoplay === false) {
            this.pause();
          }
        }
        initAnimation() {
          const { options: t } = this;
          V(t);
          const {
            type: e = N,
            repeat: n = 0,
            repeatDelay: r = 0,
            repeatType: s,
            velocity: i = 0,
          } = t;
          let { keyframes: a } = t;
          const c = e || N;
          if (c !== N && typeof a[0] != "number") {
            this.mixKeyframes = (0, o.z)(z, (0, d.C)(a[0], a[1]));
            a = [0, 100];
          }
          const u = c({
            ...t,
            keyframes: a,
          });
          if (s === "mirror") {
            this.mirroredGenerator = c({
              ...t,
              keyframes: [...a].reverse(),
              velocity: -i,
            });
          }
          if (u.calculatedDuration === null) {
            u.calculatedDuration = (0, j.i)(u);
          }
          const { calculatedDuration: l } = u;
          this.calculatedDuration = l;
          this.resolvedDuration = l + r;
          this.totalDuration = this.resolvedDuration * (n + 1) - r;
          this.generator = u;
        }
        updateTime(t) {
          const e = Math.round(t - this.startTime) * this.playbackSpeed;
          if (this.holdTime !== null) {
            this.currentTime = this.holdTime;
          } else {
            this.currentTime = e;
          }
        }
        tick(t, e = false) {
          const {
            generator: n,
            totalDuration: r,
            mixKeyframes: s,
            mirroredGenerator: i,
            resolvedDuration: o,
            calculatedDuration: c,
          } = this;
          if (this.startTime === null) {
            return n.next(0);
          }
          const {
            delay: u = 0,
            keyframes: l,
            repeat: d,
            repeatType: h,
            repeatDelay: p,
            type: f,
            onUpdate: g,
            finalKeyframe: y,
          } = this.options;
          if (this.speed > 0) {
            this.startTime = Math.min(this.startTime, t);
          } else if (this.speed < 0) {
            this.startTime = Math.min(t - r / this.speed, this.startTime);
          }
          if (e) {
            this.currentTime = t;
          } else {
            this.updateTime(t);
          }
          const v = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1);
          const b = this.playbackSpeed >= 0 ? v < 0 : v > r;
          this.currentTime = Math.max(v, 0);
          if (this.state === "finished" && this.holdTime === null) {
            this.currentTime = r;
          }
          let S = this.currentTime;
          let _ = n;
          if (d) {
            const t = Math.min(this.currentTime, r) / o;
            let e = Math.floor(t);
            let n = t % 1;
            if (!n && t >= 1) {
              n = 1;
            }
            if (n === 1) {
              e--;
            }
            e = Math.min(e, d + 1);
            if (Boolean(e % 2)) {
              if (h === "reverse") {
                n = 1 - n;
                if (p) {
                  n -= p / o;
                }
              } else if (h === "mirror") {
                _ = i;
              }
            }
            S = (0, a.u)(0, 1, n) * o;
          }
          const w = b
            ? {
                done: false,
                value: l[0],
              }
            : _.next(S);
          if (s) {
            w.value = s(w.value);
          }
          let { done: x } = w;
          if (!b && c !== null) {
            x =
              this.playbackSpeed >= 0
                ? this.currentTime >= r
                : this.currentTime <= 0;
          }
          const k =
            this.holdTime === null &&
            (this.state === "finished" || (this.state === "running" && x));
          if (k && f !== m) {
            w.value = $(l, this.options, y, this.speed);
          }
          if (g) {
            g(w.value);
          }
          if (k) {
            this.finish();
          }
          return w;
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return (0, c.X)(this.calculatedDuration);
        }
        get iterationDuration() {
          const { delay: t = 0 } = this.options || {};
          return this.duration + (0, c.X)(t);
        }
        get time() {
          return (0, c.X)(this.currentTime);
        }
        set time(t) {
          t = (0, c.w)(t);
          this.currentTime = t;
          if (
            this.startTime === null ||
            this.holdTime !== null ||
            this.playbackSpeed === 0
          ) {
            this.holdTime = t;
          } else if (this.driver) {
            this.startTime = this.driver.now() - t / this.playbackSpeed;
          }
          this.driver?.start(false);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          this.updateTime(u.X.now());
          const e = this.playbackSpeed !== t;
          this.playbackSpeed = t;
          if (e) {
            this.time = (0, c.X)(this.currentTime);
          }
        }
        play() {
          if (this.isStopped) {
            return;
          }
          const { driver: t = h, startTime: e } = this.options;
          this.driver ||= t((t) => this.tick(t));
          this.options.onPlay?.();
          const n = this.driver.now();
          if (this.state === "finished") {
            this.updateFinished();
            this.startTime = n;
          } else if (this.holdTime !== null) {
            this.startTime = n - this.holdTime;
          } else {
            this.startTime ||= e ?? n;
          }
          if (this.state === "finished" && this.speed < 0) {
            this.startTime += this.calculatedDuration;
          }
          this.holdTime = null;
          this.state = "running";
          this.driver.start();
        }
        pause() {
          this.state = "paused";
          this.updateTime(u.X.now());
          this.holdTime = this.currentTime;
        }
        complete() {
          if (this.state !== "running") {
            this.play();
          }
          this.state = "finished";
          this.holdTime = null;
        }
        finish() {
          this.notifyFinished();
          this.teardown();
          this.state = "finished";
          this.options.onComplete?.();
        }
        cancel() {
          this.holdTime = null;
          this.startTime = 0;
          this.tick(0);
          this.teardown();
          this.options.onCancel?.();
        }
        teardown() {
          this.state = "idle";
          this.stopDriver();
          this.startTime = this.holdTime = null;
          l.P.mainThread--;
        }
        stopDriver() {
          if (this.driver) {
            this.driver.stop();
            this.driver = undefined;
          }
        }
        sample(t) {
          this.startTime = 0;
          return this.tick(t, true);
        }
        attachTimeline(t) {
          if (this.options.allowFlatten) {
            this.options.type = "keyframes";
            this.options.ease = "linear";
            this.initAnimation();
          }
          this.driver?.stop();
          return t.observe(this);
        }
      }
      var q = n(91385);
      var H = n(63062);
      function K(t) {
        let e;
        return () => {
          if (e === undefined) {
            e = t();
          }
          return e;
        };
      }
      const X = K(() => window.ScrollTimeline !== undefined);
      var Y = n(27984);
      const G = {};
      function J(t, e) {
        const n = K(t);
        return () => G[e] ?? n();
      }
      const Z = J(() => {
        try {
          document.createElement("div").animate(
            {
              opacity: 0,
            },
            {
              easing: "linear(0, 1)",
            },
          );
        } catch (t) {
          return false;
        }
        return true;
      }, "linearEasing");
      var Q = n(52486);
      const tt = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`;
      const et = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: tt([0, 0.65, 0.55, 1]),
        circOut: tt([0.55, 0, 1, 0.45]),
        backIn: tt([0.31, 0.01, 0.66, -0.59]),
        backOut: tt([0.33, 1.53, 0.69, 0.99]),
      };
      function nt(t, e) {
        if (t) {
          if (typeof t == "function") {
            if (Z()) {
              return (0, Q.w)(t, e);
            } else {
              return "ease-out";
            }
          } else if (R(t)) {
            return tt(t);
          } else if (Array.isArray(t)) {
            return t.map((t) => nt(t, e) || et.easeOut);
          } else {
            return et[t];
          }
        } else {
          return undefined;
        }
      }
      function rt(
        t,
        e,
        n,
        {
          delay: r = 0,
          duration: s = 300,
          repeat: i = 0,
          repeatType: o = "loop",
          ease: a = "easeOut",
          times: c,
        } = {},
        u = undefined,
      ) {
        const d = {
          [e]: n,
        };
        if (c) {
          d.offset = c;
        }
        const h = nt(a, s);
        if (Array.isArray(h)) {
          d.easing = h;
        }
        if (Y.f.value) {
          l.P.waapi++;
        }
        const p = {
          delay: r,
          duration: s,
          easing: Array.isArray(h) ? "linear" : h,
          fill: "both",
          iterations: i + 1,
          direction: o === "reverse" ? "alternate" : "normal",
        };
        if (u) {
          p.pseudoElement = u;
        }
        const f = t.animate(d, p);
        if (Y.f.value) {
          f.finished.finally(() => {
            l.P.waapi--;
          });
        }
        return f;
      }
      var st = n(20479);
      class it extends U {
        constructor(t) {
          super();
          this.finishedTime = null;
          this.isStopped = false;
          if (!t) {
            return;
          }
          const {
            element: e,
            name: n,
            keyframes: r,
            pseudoElement: s,
            allowFlatten: i = false,
            finalKeyframe: o,
            onComplete: a,
          } = t;
          this.isPseudoElement = Boolean(s);
          this.allowFlatten = i;
          this.options = t;
          (0, x.k)(
            typeof t.type != "string",
            'Mini animate() doesn\'t support "type" as a string.',
            "mini-spring",
          );
          const c = (function ({ type: t, ...e }) {
            if ((0, st.x)(t) && Z()) {
              return t.applyToOptions(e);
            } else {
              e.duration ??= 300;
              e.ease ??= "easeOut";
              return e;
            }
          })(t);
          this.animation = rt(e, n, r, c, s);
          if (c.autoplay === false) {
            this.animation.pause();
          }
          this.animation.onfinish = () => {
            this.finishedTime = this.time;
            if (!s) {
              const t = $(r, this.options, o, this.speed);
              if (this.updateMotionValue) {
                this.updateMotionValue(t);
              } else {
                (function (t, e, n) {
                  if (((t) => t.startsWith("--"))(e)) {
                    t.style.setProperty(e, n);
                  } else {
                    t.style[e] = n;
                  }
                })(e, n, t);
              }
              this.animation.cancel();
            }
            a?.();
            this.notifyFinished();
          };
        }
        play() {
          if (!this.isStopped) {
            this.animation.play();
            if (this.state === "finished") {
              this.updateFinished();
            }
          }
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) {
            return;
          }
          this.isStopped = true;
          const { state: t } = this;
          if (t !== "idle" && t !== "finished") {
            if (this.updateMotionValue) {
              this.updateMotionValue();
            } else {
              this.commitStyles();
            }
            if (!this.isPseudoElement) {
              this.cancel();
            }
          }
        }
        commitStyles() {
          if (!this.isPseudoElement) {
            this.animation.commitStyles?.();
          }
        }
        get duration() {
          const t = this.animation.effect?.getComputedTiming?.().duration || 0;
          return (0, c.X)(Number(t));
        }
        get iterationDuration() {
          const { delay: t = 0 } = this.options || {};
          return this.duration + (0, c.X)(t);
        }
        get time() {
          return (0, c.X)(Number(this.animation.currentTime) || 0);
        }
        set time(t) {
          this.finishedTime = null;
          this.animation.currentTime = (0, c.w)(t);
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          if (t < 0) {
            this.finishedTime = null;
          }
          this.animation.playbackRate = t;
        }
        get state() {
          if (this.finishedTime !== null) {
            return "finished";
          } else {
            return this.animation.playState;
          }
        }
        get startTime() {
          return Number(this.animation.startTime);
        }
        set startTime(t) {
          this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, observe: e }) {
          if (this.allowFlatten) {
            this.animation.effect?.updateTiming({
              easing: "linear",
            });
          }
          this.animation.onfinish = null;
          if (t && X()) {
            this.animation.timeline = t;
            return g.Z;
          } else {
            return e(this);
          }
        }
      }
      const ot = {
        anticipate: I,
        backInOut: M,
        circInOut: A.X7,
      };
      function at(t) {
        if (typeof t.ease == "string" && t.ease in ot) {
          t.ease = ot[t.ease];
        }
      }
      class ct extends it {
        constructor(t) {
          at(t);
          V(t);
          super(t);
          if (t.startTime) {
            this.startTime = t.startTime;
          }
          this.options = t;
        }
        updateMotionValue(t) {
          const {
            motionValue: e,
            onUpdate: n,
            onComplete: r,
            element: s,
            ...i
          } = this.options;
          if (!e) {
            return;
          }
          if (t !== undefined) {
            e.set(t);
            return;
          }
          const o = new W({
            ...i,
            autoplay: false,
          });
          const a = (0, c.w)(this.finishedTime ?? this.time);
          e.setWithVelocity(o.sample(a - 10).value, o.sample(a).value, 10);
          o.stop();
        }
      }
      var ut = n(28779);
      const lt = (t, e) =>
        e !== "zIndex" &&
        (typeof t == "number" ||
          !!Array.isArray(t) ||
          (typeof t == "string" &&
            (!!ut.P.test(t) || t === "0") &&
            !t.startsWith("url(")));
      const dt = new Set(["opacity", "clipPath", "filter", "transform"]);
      const ht = K(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate"),
      );
      class pt extends U {
        constructor({
          autoplay: t = true,
          delay: e = 0,
          type: n = "keyframes",
          repeat: r = 0,
          repeatDelay: s = 0,
          repeatType: i = "loop",
          keyframes: o,
          name: a,
          motionValue: c,
          element: l,
          ...d
        }) {
          super();
          this.stop = () => {
            if (this._animation) {
              this._animation.stop();
              this.stopTimeline?.();
            }
            this.keyframeResolver?.cancel();
          };
          this.createdAt = u.X.now();
          const h = {
            autoplay: t,
            delay: e,
            type: n,
            repeat: r,
            repeatDelay: s,
            repeatType: i,
            name: a,
            motionValue: c,
            element: l,
            ...d,
          };
          const p = l?.KeyframeResolver || H.e;
          this.keyframeResolver = new p(
            o,
            (t, e, n) => this.onKeyframesResolved(t, e, h, !n),
            a,
            c,
            l,
          );
          this.keyframeResolver?.scheduleResolve();
        }
        onKeyframesResolved(t, e, n, r) {
          this.keyframeResolver = undefined;
          const {
            name: i,
            type: o,
            velocity: a,
            delay: c,
            isHandoff: l,
            onUpdate: d,
          } = n;
          this.resolvedAt = u.X.now();
          if (
            !(function (t, e, n, r) {
              const s = t[0];
              if (s === null) {
                return false;
              }
              if (e === "display" || e === "visibility") {
                return true;
              }
              const i = t[t.length - 1];
              const o = lt(s, e);
              const a = lt(i, e);
              (0, x.K)(
                o === a,
                `You are trying to animate ${e} from "${s}" to "${i}". "${o ? i : s}" is not an animatable value.`,
                "value-not-animatable",
              );
              return (
                !!o &&
                !!a &&
                ((function (t) {
                  const e = t[0];
                  if (t.length === 1) {
                    return true;
                  }
                  for (let n = 0; n < t.length; n++) {
                    if (t[n] !== e) {
                      return true;
                    }
                  }
                })(t) ||
                  ((n === "spring" || (0, st.x)(n)) && r))
              );
            })(t, i, o, a)
          ) {
            if (!!q.c.instantAnimations || !c) {
              d?.($(t, n, e));
            }
            t[0] = t[t.length - 1];
            s(n);
            n.repeat = 0;
          }
          const h = {
            startTime: r
              ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                ? this.resolvedAt
                : this.createdAt
              : undefined,
            finalKeyframe: e,
            ...n,
            keyframes: t,
          };
          const p =
            !l &&
            (function (t) {
              const {
                motionValue: e,
                name: n,
                repeatDelay: r,
                repeatType: s,
                damping: i,
                type: o,
              } = t;
              const a = e?.owner?.current;
              if (!(a instanceof HTMLElement)) {
                return false;
              }
              const { onUpdate: c, transformTemplate: u } = e.owner.getProps();
              return (
                ht() &&
                n &&
                dt.has(n) &&
                (n !== "transform" || !u) &&
                !c &&
                !r &&
                s !== "mirror" &&
                i !== 0 &&
                o !== "inertia"
              );
            })(h)
              ? new ct({
                  ...h,
                  element: h.motionValue.owner.current,
                })
              : new W(h);
          p.finished.then(() => this.notifyFinished()).catch(g.Z);
          if (this.pendingTimeline) {
            this.stopTimeline = p.attachTimeline(this.pendingTimeline);
            this.pendingTimeline = undefined;
          }
          this._animation = p;
        }
        get finished() {
          if (this._animation) {
            return this.animation.finished;
          } else {
            return this._finished;
          }
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        get animation() {
          if (!this._animation) {
            this.keyframeResolver?.resume();
            (0, H.m)();
          }
          return this._animation;
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          if (this._animation) {
            this.stopTimeline = this.animation.attachTimeline(t);
          } else {
            this.pendingTimeline = t;
          }
          return () => this.stop();
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          if (this._animation) {
            this.animation.cancel();
          }
          this.keyframeResolver?.cancel();
        }
      }
      const ft = (t) => t !== null;
      var mt = n(50477);
      const gt = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10,
      };
      const yt = {
        type: "keyframes",
        duration: 0.8,
      };
      const vt = {
        type: "keyframes",
        ease: [0.25, 0.1, 0.35, 1],
        duration: 0.3,
      };
      const bt = (t, { keyframes: e }) =>
        e.length > 2
          ? yt
          : mt.G.has(t)
            ? t.startsWith("scale")
              ? {
                  type: "spring",
                  stiffness: 550,
                  damping: e[1] === 0 ? Math.sqrt(550) * 2 : 30,
                  restSpeed: 10,
                }
              : gt
            : vt;
      const St =
        (t, e, n, o = {}, a, u) =>
        (l) => {
          const d = (0, r.e)(o, t) || {};
          const h = d.delay || o.delay || 0;
          let { elapsed: p = 0 } = o;
          p -= (0, c.w)(h);
          const f = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...d,
            delay: -p,
            onUpdate: (t) => {
              e.set(t);
              if (d.onUpdate) {
                d.onUpdate(t);
              }
            },
            onComplete: () => {
              l();
              if (d.onComplete) {
                d.onComplete();
              }
            },
            name: t,
            motionValue: e,
            element: u ? undefined : a,
          };
          if (
            !(function ({
              when: t,
              delay: e,
              delayChildren: n,
              staggerChildren: r,
              staggerDirection: s,
              repeat: i,
              repeatType: o,
              repeatDelay: a,
              from: c,
              elapsed: u,
              ...l
            }) {
              return !!Object.keys(l).length;
            })(d)
          ) {
            Object.assign(f, bt(t, f));
          }
          f.duration &&= (0, c.w)(f.duration);
          f.repeatDelay &&= (0, c.w)(f.repeatDelay);
          if (f.from !== undefined) {
            f.keyframes[0] = f.from;
          }
          let m = false;
          if (f.type === false || (f.duration === 0 && !f.repeatDelay)) {
            s(f);
            if (f.delay === 0) {
              m = true;
            }
          }
          if (q.c.instantAnimations || q.c.skipAnimations) {
            m = true;
            s(f);
            f.delay = 0;
          }
          f.allowFlatten = !d.type && !d.ease;
          if (m && !u && e.get() !== undefined) {
            const t = (function (t, { repeat: e, repeatType: n = "loop" }, r) {
              const s = t.filter(ft);
              const i = e && n !== "loop" && e % 2 == 1 ? 0 : s.length - 1;
              if (i && r !== undefined) {
                return r;
              } else {
                return s[i];
              }
            })(f.keyframes, d);
            if (t !== undefined) {
              i.Wi.update(() => {
                f.onUpdate(t);
                f.onComplete();
              });
              return;
            }
          }
          if (d.isSync) {
            return new W(f);
          } else {
            return new pt(f);
          }
        };
    },
    4516: function (t, e, n) {
      n.d(e, {
        w: () => f,
      });
      var r = n(83479);
      var s = n(63594);
      var i = n(18011);
      var o = n(17802);
      var a = n(10516);
      var c = n(89654);
      function u(t, e, n) {
        if (t.hasValue(e)) {
          t.getValue(e).set(n);
        } else {
          t.addValue(e, (0, o.BX)(n));
        }
      }
      var l = n(83800);
      var d = n(56796);
      var h = n(20284);
      function p({ protectedKeys: t, needsAnimating: e }, n) {
        const r = t.hasOwnProperty(n) && e[n] !== true;
        e[n] = false;
        return r;
      }
      function f(t, e, { delay: n = 0, transitionOverride: o, type: f } = {}) {
        let {
          transition: m = t.getDefaultTransition(),
          transitionEnd: g,
          ...y
        } = e;
        if (o) {
          m = o;
        }
        const v = [];
        const b = f && t.animationState && t.animationState.getState()[f];
        for (const e in y) {
          const o = t.getValue(e, t.latestValues[e] ?? null);
          const a = y[e];
          if (a === undefined || (b && p(b, e))) {
            continue;
          }
          const c = {
            delay: n,
            ...(0, r.e)(m || {}, e),
          };
          const u = o.get();
          if (
            u !== undefined &&
            !o.isAnimating &&
            !Array.isArray(a) &&
            a === u &&
            !c.velocity
          ) {
            continue;
          }
          let f = false;
          if (window.MotionHandoffAnimation) {
            const n = (0, d.s)(t);
            if (n) {
              const t = window.MotionHandoffAnimation(n, e, s.Wi);
              if (t !== null) {
                c.startTime = t;
                f = true;
              }
            }
          }
          (0, l.K)(t, e);
          o.start(
            (0, h.v)(
              e,
              o,
              a,
              t.shouldReduceMotion && i.z.has(e)
                ? {
                    type: false,
                  }
                : c,
              t,
              f,
            ),
          );
          const g = o.animation;
          if (g) {
            v.push(g);
          }
        }
        if (g) {
          Promise.all(v).then(() => {
            s.Wi.update(() => {
              if (g) {
                (function (t, e) {
                  const n = (0, c.x)(t, e);
                  let {
                    transitionEnd: r = {},
                    transition: s = {},
                    ...i
                  } = n || {};
                  i = {
                    ...i,
                    ...r,
                  };
                  for (const e in i) {
                    u(
                      t,
                      e,
                      ((o = i[e]), (0, a.C)(o) ? o[o.length - 1] || 0 : o),
                    );
                  }
                  var o;
                })(t, g);
              }
            });
          });
        }
        return v;
      }
    },
    15793: function (t, e, n) {
      n.d(e, {
        M: () => r,
      });
      const r = "data-" + (0, n(50638).D)("framerAppearId");
    },
    56796: function (t, e, n) {
      n.d(e, {
        s: () => s,
      });
      var r = n(15793);
      function s(t) {
        return t.props[r.M];
      }
    },
    98922: function (t, e, n) {
      function r(t) {
        return (
          t !== null && typeof t == "object" && typeof t.start == "function"
        );
      }
      n.d(e, {
        H: () => r,
      });
    },
    10516: function (t, e, n) {
      n.d(e, {
        C: () => r,
      });
      const r = (t) => Array.isArray(t);
    },
    9737: function (t, e, n) {
      n.d(e, {
        M: () => S,
      });
      var r = n(85893);
      var s = n(67294);
      var i = n(34172);
      var o = n(78217);
      var a = n(19537);
      var c = n(11717);
      var u = n(80602);
      var l = n(21353);
      function d(t, e) {
        if (typeof t == "function") {
          return t(e);
        }
        if (t != null) {
          t.current = e;
        }
      }
      function h(...t) {
        return s.useCallback(
          (function (...t) {
            return (e) => {
              let n = false;
              const r = t.map((t) => {
                const r = d(t, e);
                if (!n && typeof r == "function") {
                  n = true;
                }
                return r;
              });
              if (n) {
                return () => {
                  for (let e = 0; e < r.length; e++) {
                    const n = r[e];
                    if (typeof n == "function") {
                      n();
                    } else {
                      d(t[e], null);
                    }
                  }
                };
              }
            };
          })(...t),
          t,
        );
      }
      class p extends s.Component {
        getSnapshotBeforeUpdate(t) {
          const e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            const t = e.offsetParent;
            const n = ((0, u.R)(t) && t.offsetWidth) || 0;
            const r = this.props.sizeRef.current;
            r.height = e.offsetHeight || 0;
            r.width = e.offsetWidth || 0;
            r.top = e.offsetTop;
            r.left = e.offsetLeft;
            r.right = n - r.width - r.left;
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function f({ children: t, isPresent: e, anchorX: n, root: i }) {
        const o = (0, s.useId)();
        const a = (0, s.useRef)(null);
        const c = (0, s.useRef)({
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          right: 0,
        });
        const { nonce: u } = (0, s.useContext)(l._);
        const d = h(a, t?.ref);
        (0, s.useInsertionEffect)(() => {
          const { width: t, height: r, top: s, left: l, right: d } = c.current;
          if (e || !a.current || !t || !r) {
            return;
          }
          const h = n === "left" ? `left: ${l}` : `right: ${d}`;
          a.current.dataset.motionPopId = o;
          const p = document.createElement("style");
          if (u) {
            p.nonce = u;
          }
          const f = i ?? document.head;
          f.appendChild(p);
          if (p.sheet) {
            p.sheet.insertRule(
              `\n          [data-motion-pop-id="${o}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${r}px !important;\n            ${h}px !important;\n            top: ${s}px !important;\n          }\n        `,
            );
          }
          return () => {
            if (f.contains(p)) {
              f.removeChild(p);
            }
          };
        }, [e]);
        return (0, r.jsx)(p, {
          isPresent: e,
          childRef: a,
          sizeRef: c,
          children: s.cloneElement(t, {
            ref: d,
          }),
        });
      }
      const m = ({
        children: t,
        initial: e,
        isPresent: n,
        onExitComplete: i,
        custom: a,
        presenceAffectsLayout: u,
        mode: l,
        anchorX: d,
        root: h,
      }) => {
        const p = (0, o.h)(g);
        const m = (0, s.useId)();
        let y = true;
        let v = (0, s.useMemo)(() => {
          y = false;
          return {
            id: m,
            initial: e,
            isPresent: n,
            custom: a,
            onExitComplete: (t) => {
              p.set(t, true);
              for (const t of p.values()) {
                if (!t) {
                  return;
                }
              }
              if (i) {
                i();
              }
            },
            register: (t) => {
              p.set(t, false);
              return () => p.delete(t);
            },
          };
        }, [n, p, i]);
        if (u && y) {
          v = {
            ...v,
          };
        }
        (0, s.useMemo)(() => {
          p.forEach((t, e) => p.set(e, false));
        }, [n]);
        s.useEffect(() => {
          if (!n && !p.size && i) {
            i();
          }
        }, [n]);
        if (l === "popLayout") {
          t = (0, r.jsx)(f, {
            isPresent: n,
            anchorX: d,
            root: h,
            children: t,
          });
        }
        return (0, r.jsx)(c.O.Provider, {
          value: v,
          children: t,
        });
      };
      function g() {
        return new Map();
      }
      var y = n(14438);
      const v = (t) => t.key || "";
      function b(t) {
        const e = [];
        s.Children.forEach(t, (t) => {
          if ((0, s.isValidElement)(t)) {
            e.push(t);
          }
        });
        return e;
      }
      const S = ({
        children: t,
        custom: e,
        initial: n = true,
        onExitComplete: c,
        presenceAffectsLayout: u = true,
        mode: l = "sync",
        propagate: d = false,
        anchorX: h = "left",
        root: p,
      }) => {
        const [f, g] = (0, y.oO)(d);
        const S = (0, s.useMemo)(() => b(t), [t]);
        const _ = d && !f ? [] : S.map(v);
        const w = (0, s.useRef)(true);
        const x = (0, s.useRef)(S);
        const k = (0, o.h)(() => new Map());
        const [E, T] = (0, s.useState)(S);
        const [C, M] = (0, s.useState)(S);
        (0, a.L)(() => {
          w.current = false;
          x.current = S;
          for (let t = 0; t < C.length; t++) {
            const e = v(C[t]);
            if (_.includes(e)) {
              k.delete(e);
            } else if (k.get(e) !== true) {
              k.set(e, false);
            }
          }
        }, [C, _.length, _.join("-")]);
        const I = [];
        if (S !== E) {
          let t = [...S];
          for (let e = 0; e < C.length; e++) {
            const n = C[e];
            const r = v(n);
            if (!_.includes(r)) {
              t.splice(e, 0, n);
              I.push(n);
            }
          }
          if (l === "wait" && I.length) {
            t = I;
          }
          M(b(t));
          T(S);
          return null;
        }
        const { forceRender: A } = (0, s.useContext)(i.p);
        return (0, r.jsx)(r.Fragment, {
          children: C.map((t) => {
            const s = v(t);
            const i = (!d || !!f) && (S === C || _.includes(s));
            return (0, r.jsx)(
              m,
              {
                isPresent: i,
                initial: (!w.current || !!n) && undefined,
                custom: e,
                presenceAffectsLayout: u,
                mode: l,
                root: p,
                onExitComplete: i
                  ? undefined
                  : () => {
                      if (!k.has(s)) {
                        return;
                      }
                      k.set(s, true);
                      let t = true;
                      k.forEach((e) => {
                        if (!e) {
                          t = false;
                        }
                      });
                      if (t) {
                        A?.();
                        M(x.current);
                        if (d) {
                          g?.();
                        }
                        if (c) {
                          c();
                        }
                      }
                    },
                anchorX: h,
                children: t,
              },
              s,
            );
          }),
        });
      };
    },
    14438: function (t, e, n) {
      n.d(e, {
        oO: () => i,
      });
      var r = n(67294);
      var s = n(11717);
      function i(t = true) {
        const e = (0, r.useContext)(s.O);
        if (e === null) {
          return [true, null];
        }
        const { isPresent: n, onExitComplete: i, register: o } = e;
        const a = (0, r.useId)();
        (0, r.useEffect)(() => {
          if (t) {
            return o(a);
          }
        }, [t]);
        const c = (0, r.useCallback)(() => t && i && i(a), [a, i, t]);
        if (!n && i) {
          return [false, c];
        } else {
          return [true];
        }
      }
    },
    34172: function (t, e, n) {
      n.d(e, {
        p: () => r,
      });
      const r = (0, n(67294).createContext)({});
    },
    21353: function (t, e, n) {
      n.d(e, {
        _: () => r,
      });
      const r = (0, n(67294).createContext)({
        transformPagePoint: (t) => t,
        isStatic: false,
        reducedMotion: "never",
      });
    },
    11717: function (t, e, n) {
      n.d(e, {
        O: () => r,
      });
      const r = (0, n(67294).createContext)(null);
    },
    92131: function (t, e, n) {
      n.d(e, {
        A: () => s,
      });
      const r = {
        animation: [
          "animate",
          "variants",
          "whileHover",
          "whileTap",
          "exit",
          "whileInView",
          "whileFocus",
          "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
      };
      const s = {};
      for (const t in r) {
        s[t] = {
          isEnabled: (e) => r[t].some((t) => !!e[t]),
        };
      }
    },
    99246: function (t, e, n) {
      n.d(e, {
        j: () => i,
      });
      var r = n(50477);
      var s = n(23486);
      function i(t, { layout: e, layoutId: n }) {
        return (
          r.G.has(t) ||
          t.startsWith("origin") ||
          ((e || n !== undefined) && (!!s.P[t] || t === "opacity"))
        );
      }
    },
    74961: function (t, e, n) {
      function r({ top: t, left: e, right: n, bottom: r }) {
        return {
          x: {
            min: e,
            max: n,
          },
          y: {
            min: t,
            max: r,
          },
        };
      }
      function s({ x: t, y: e }) {
        return {
          top: e.min,
          right: t.max,
          bottom: e.max,
          left: t.min,
        };
      }
      function i(t, e) {
        if (!e) {
          return t;
        }
        const n = e({
          x: t.left,
          y: t.top,
        });
        const r = e({
          x: t.right,
          y: t.bottom,
        });
        return {
          top: n.y,
          left: n.x,
          bottom: r.y,
          right: r.x,
        };
      }
      n.d(e, {
        d7: () => i,
        i8: () => r,
        z2: () => s,
      });
    },
    80813: function (t, e, n) {
      n.d(e, {
        D2: () => f,
        YY: () => d,
        am: () => h,
        o2: () => c,
        q2: () => i,
      });
      var r = n(55153);
      var s = n(6034);
      function i(t, e, n) {
        return n + e * (t - n);
      }
      function o(t, e, n, r, s) {
        if (s !== undefined) {
          t = i(t, s, r);
        }
        return i(t, n, r) + e;
      }
      function a(t, e = 0, n = 1, r, s) {
        t.min = o(t.min, e, n, r, s);
        t.max = o(t.max, e, n, r, s);
      }
      function c(t, { x: e, y: n }) {
        a(t.x, e.translate, e.scale, e.originPoint);
        a(t.y, n.translate, n.scale, n.originPoint);
      }
      const u = 0.999999999999;
      const l = 1.0000000000001;
      function d(t, e, n, r = false) {
        const i = n.length;
        if (!i) {
          return;
        }
        let o;
        let a;
        e.x = e.y = 1;
        for (let u = 0; u < i; u++) {
          o = n[u];
          a = o.projectionDelta;
          const { visualElement: i } = o.options;
          if (!i || !i.props.style || i.props.style.display !== "contents") {
            if (r && o.options.layoutScroll && o.scroll && o !== o.root) {
              f(t, {
                x: -o.scroll.offset.x,
                y: -o.scroll.offset.y,
              });
            }
            if (a) {
              e.x *= a.x.scale;
              e.y *= a.y.scale;
              c(t, a);
            }
            if (r && (0, s.ud)(o.latestValues)) {
              f(t, o.latestValues);
            }
          }
        }
        if (e.x < l && e.x > u) {
          e.x = 1;
        }
        if (e.y < l && e.y > u) {
          e.y = 1;
        }
      }
      function h(t, e) {
        t.min = t.min + e;
        t.max = t.max + e;
      }
      function p(t, e, n, s, i = 0.5) {
        a(t, e, n, (0, r.t)(t.min, t.max, i), s);
      }
      function f(t, e) {
        p(t.x, e.x, e.scaleX, e.scale, e.originX);
        p(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    95398: function (t, e, n) {
      n.d(e, {
        dO: () => s,
        wc: () => r,
      });
      const r = () => ({
        x: {
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0,
        },
        y: {
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0,
        },
      });
      const s = () => ({
        x: {
          min: 0,
          max: 0,
        },
        y: {
          min: 0,
          max: 0,
        },
      });
    },
    23486: function (t, e, n) {
      n.d(e, {
        B: () => i,
        P: () => s,
      });
      var r = n(53345);
      const s = {};
      function i(t) {
        for (const e in t) {
          s[e] = t[e];
          if ((0, r.f)(e)) {
            s[e].isCSSVariable = true;
          }
        }
      }
    },
    6034: function (t, e, n) {
      function r(t) {
        return t === undefined || t === 1;
      }
      function s({ scale: t, scaleX: e, scaleY: n }) {
        return !r(t) || !r(e) || !r(n);
      }
      function i(t) {
        return (
          s(t) ||
          o(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function o(t) {
        return a(t.x) || a(t.y);
      }
      function a(t) {
        return t && t !== "0%";
      }
      n.d(e, {
        D_: () => o,
        Lj: () => s,
        ud: () => i,
      });
    },
    10301: function (t, e, n) {
      n.d(e, {
        J: () => i,
        z: () => o,
      });
      var r = n(74961);
      var s = n(80813);
      function i(t, e) {
        return (0, r.i8)((0, r.d7)(t.getBoundingClientRect(), e));
      }
      function o(t, e, n) {
        const r = i(t, n);
        const { scroll: o } = e;
        if (o) {
          (0, s.am)(r.x, o.offset.x);
          (0, s.am)(r.y, o.offset.y);
        }
        return r;
      }
    },
    26967: function (t, e, n) {
      n.d(e, {
        l: () => M,
      });
      var r = n(63062);
      var s = n(35449);
      var i = n(63594);
      var o = n(45875);
      var a = n(50477);
      var c = n(17802);
      var u = n(39178);
      var l = n(28779);
      var d = n(81077);
      var h = n(31024);
      const p = [...d.$, u.$, l.P];
      var f = n(7741);
      var m = n(69547);
      var g = n(94309);
      var y = n(71226);
      var v = n(58088);
      var b = n(92131);
      var S = n(95398);
      var _ = n(24939);
      const w = {
        current: null,
      };
      const x = {
        current: false,
      };
      var k = n(54449);
      var E = n(36454);
      var T = n(75440);
      const C = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class M {
        scrapeMotionValuesFromProps(t, e, n) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: a,
            blockInitialAnimation: c,
            visualState: u,
          },
          l = {},
        ) {
          this.current = null;
          this.children = new Set();
          this.isVariantNode = false;
          this.isControllingVariants = false;
          this.shouldReduceMotion = null;
          this.values = new Map();
          this.KeyframeResolver = r.e;
          this.features = {};
          this.valueSubscriptions = new Map();
          this.prevMotionValues = {};
          this.events = {};
          this.propEventSubscriptions = {};
          this.notifyUpdate = () => this.notify("Update", this.latestValues);
          this.render = () => {
            if (this.current) {
              this.triggerBuild();
              this.renderInstance(
                this.current,
                this.renderState,
                this.props.style,
                this.projection,
              );
            }
          };
          this.renderScheduledAt = 0;
          this.scheduleRender = () => {
            const t = s.X.now();
            if (this.renderScheduledAt < t) {
              this.renderScheduledAt = t;
              i.Wi.render(this.render, false, true);
            }
          };
          const { latestValues: d, renderState: h } = u;
          this.latestValues = d;
          this.baseTarget = {
            ...d,
          };
          this.initialValues = e.initial
            ? {
                ...d,
              }
            : {};
          this.renderState = h;
          this.parent = t;
          this.props = e;
          this.presenceContext = n;
          this.depth = t ? t.depth + 1 : 0;
          this.reducedMotionConfig = a;
          this.options = l;
          this.blockInitialAnimation = Boolean(c);
          this.isControllingVariants = (0, E.G)(e);
          this.isVariantNode = (0, E.M)(e);
          if (this.isVariantNode) {
            this.variantChildren = new Set();
          }
          this.manuallyAnimateOnMount = Boolean(t && t.current);
          const { willChange: p, ...f } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (const t in f) {
            const e = f[t];
            if (d[t] !== undefined && (0, o.i)(e)) {
              e.set(d[t]);
            }
          }
        }
        mount(t) {
          this.current = t;
          k.R.set(t, this);
          if (this.projection && !this.projection.instance) {
            this.projection.mount(t);
          }
          if (
            this.parent &&
            this.isVariantNode &&
            !this.isControllingVariants
          ) {
            this.removeFromVariantTree = this.parent.addVariantChild(this);
          }
          this.values.forEach((t, e) => this.bindToMotionValue(e, t));
          if (!x.current) {
            (function () {
              x.current = true;
              if (_.j) {
                if (window.matchMedia) {
                  const t = window.matchMedia("(prefers-reduced-motion)");
                  const e = () => (w.current = t.matches);
                  t.addEventListener("change", e);
                  e();
                } else {
                  w.current = false;
                }
              }
            })();
          }
          this.shouldReduceMotion =
            this.reducedMotionConfig !== "never" &&
            (this.reducedMotionConfig === "always" || w.current);
          this.parent?.addChild(this);
          this.update(this.props, this.presenceContext);
        }
        unmount() {
          if (this.projection) {
            this.projection.unmount();
          }
          (0, i.Pn)(this.notifyUpdate);
          (0, i.Pn)(this.render);
          this.valueSubscriptions.forEach((t) => t());
          this.valueSubscriptions.clear();
          if (this.removeFromVariantTree) {
            this.removeFromVariantTree();
          }
          this.parent?.removeChild(this);
          for (const t in this.events) {
            this.events[t].clear();
          }
          for (const t in this.features) {
            const e = this.features[t];
            if (e) {
              e.unmount();
              e.isMounted = false;
            }
          }
          this.current = null;
        }
        addChild(t) {
          this.children.add(t);
          this.enteringChildren ??= new Set();
          this.enteringChildren.add(t);
        }
        removeChild(t) {
          this.children.delete(t);
          if (this.enteringChildren) {
            this.enteringChildren.delete(t);
          }
        }
        bindToMotionValue(t, e) {
          if (this.valueSubscriptions.has(t)) {
            this.valueSubscriptions.get(t)();
          }
          const n = a.G.has(t);
          if (n && this.onBindTransform) {
            this.onBindTransform();
          }
          const r = e.on("change", (e) => {
            this.latestValues[t] = e;
            if (this.props.onUpdate) {
              i.Wi.preRender(this.notifyUpdate);
            }
            if (n && this.projection) {
              this.projection.isTransformDirty = true;
            }
            this.scheduleRender();
          });
          let s;
          if (window.MotionCheckAppearSync) {
            s = window.MotionCheckAppearSync(this, t, e);
          }
          this.valueSubscriptions.set(t, () => {
            r();
            if (s) {
              s();
            }
            if (e.owner) {
              e.stop();
            }
          });
        }
        sortNodePosition(t) {
          if (
            this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
          ) {
            return this.sortInstanceNodePosition(this.current, t.current);
          } else {
            return 0;
          }
        }
        updateFeatures() {
          let t = "animation";
          for (t in b.A) {
            const e = b.A[t];
            if (!e) {
              continue;
            }
            const { isEnabled: n, Feature: r } = e;
            if (!this.features[t] && r && n(this.props)) {
              this.features[t] = new r(this);
            }
            if (this.features[t]) {
              const e = this.features[t];
              if (e.isMounted) {
                e.update();
              } else {
                e.mount();
                e.isMounted = true;
              }
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          if (this.current) {
            return this.measureInstanceViewportBox(this.current, this.props);
          } else {
            return (0, S.dO)();
          }
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          if (t.transformTemplate || this.props.transformTemplate) {
            this.scheduleRender();
          }
          this.prevProps = this.props;
          this.props = t;
          this.prevPresenceContext = this.presenceContext;
          this.presenceContext = e;
          for (let e = 0; e < C.length; e++) {
            const n = C[e];
            if (this.propEventSubscriptions[n]) {
              this.propEventSubscriptions[n]();
              delete this.propEventSubscriptions[n];
            }
            const r = t["on" + n];
            if (r) {
              this.propEventSubscriptions[n] = this.on(n, r);
            }
          }
          this.prevMotionValues = (function (t, e, n) {
            for (const r in e) {
              const s = e[r];
              const i = n[r];
              if ((0, o.i)(s)) {
                t.addValue(r, s);
              } else if ((0, o.i)(i)) {
                t.addValue(
                  r,
                  (0, c.BX)(s, {
                    owner: t,
                  }),
                );
              } else if (i !== s) {
                if (t.hasValue(r)) {
                  const e = t.getValue(r);
                  if (e.liveStyle === true) {
                    e.jump(s);
                  } else if (!e.hasAnimated) {
                    e.set(s);
                  }
                } else {
                  const e = t.getStaticValue(r);
                  t.addValue(
                    r,
                    (0, c.BX)(e !== undefined ? e : s, {
                      owner: t,
                    }),
                  );
                }
              }
            }
            for (const r in n) {
              if (e[r] === undefined) {
                t.removeValue(r);
              }
            }
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues,
          );
          if (this.handleChildMotionValue) {
            this.handleChildMotionValue();
          }
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          if (this.props.variants) {
            return this.props.variants[t];
          } else {
            return undefined;
          }
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          if (this.isVariantNode) {
            return this;
          } else if (this.parent) {
            return this.parent.getClosestVariantNode();
          } else {
            return undefined;
          }
        }
        addVariantChild(t) {
          const e = this.getClosestVariantNode();
          if (e) {
            if (e.variantChildren) {
              e.variantChildren.add(t);
            }
            return () => e.variantChildren.delete(t);
          }
        }
        addValue(t, e) {
          const n = this.values.get(t);
          if (e !== n) {
            if (n) {
              this.removeValue(t);
            }
            this.bindToMotionValue(t, e);
            this.values.set(t, e);
            this.latestValues[t] = e.get();
          }
        }
        removeValue(t) {
          this.values.delete(t);
          const e = this.valueSubscriptions.get(t);
          if (e) {
            e();
            this.valueSubscriptions.delete(t);
          }
          delete this.latestValues[t];
          this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t]) {
            return this.props.values[t];
          }
          let n = this.values.get(t);
          if (n === undefined && e !== undefined) {
            n = (0, c.BX)(e === null ? undefined : e, {
              owner: this,
            });
            this.addValue(t, n);
          }
          return n;
        }
        readValue(t, e) {
          let n =
            this.latestValues[t] === undefined && this.current
              ? (this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options))
              : this.latestValues[t];
          var r;
          if (n != null) {
            if (typeof n == "string" && ((0, g.P)(n) || (0, y.W)(n))) {
              n = parseFloat(n);
            } else {
              r = n;
              if (!p.find((0, h.l)(r)) && l.P.test(e)) {
                n = (0, f.T)(t, e);
              }
            }
            this.setBaseTarget(t, (0, o.i)(n) ? n.get() : n);
          }
          if ((0, o.i)(n)) {
            return n.get();
          } else {
            return n;
          }
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          const { initial: e } = this.props;
          let n;
          if (typeof e == "string" || typeof e == "object") {
            const r = (0, T.o)(this.props, e, this.presenceContext?.custom);
            if (r) {
              n = r[t];
            }
          }
          if (e && n !== undefined) {
            return n;
          }
          const r = this.getBaseTargetFromProps(this.props, t);
          if (r === undefined || (0, o.i)(r)) {
            if (this.initialValues[t] !== undefined && n === undefined) {
              return undefined;
            } else {
              return this.baseTarget[t];
            }
          } else {
            return r;
          }
        }
        on(t, e) {
          this.events[t] ||= new v.L();
          return this.events[t].add(e);
        }
        notify(t, ...e) {
          if (this.events[t]) {
            this.events[t].notify(...e);
          }
        }
        scheduleRenderMicrotask() {
          m.g.render(this.render);
        }
      }
    },
    8678: function (t, e, n) {
      n.d(e, {
        E: () => lr,
      });
      var r = n(67294);
      var s = n(3622);
      var i = n(65504);
      const o = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function a(t) {
        return (
          typeof t == "string" &&
          !t.includes("-") &&
          (!!(o.indexOf(t) > -1) || !!/[A-Z]/u.test(t))
        );
      }
      const c = (t, e) =>
        a(t)
          ? new i.e(e)
          : new s.W(e, {
              allowProjection: t !== r.Fragment,
            });
      var u = n(85893);
      var l = n(34172);
      const d = (0, r.createContext)({
        strict: false,
      });
      var h = n(21353);
      const p = (0, r.createContext)({});
      var f = n(36454);
      var m = n(77768);
      function g(t) {
        const { initial: e, animate: n } = (function (t, e) {
          if ((0, f.G)(t)) {
            const { initial: e, animate: n } = t;
            return {
              initial: e === false || (0, m.$)(e) ? e : undefined,
              animate: (0, m.$)(n) ? n : undefined,
            };
          }
          if (t.inherit !== false) {
            return e;
          } else {
            return {};
          }
        })(t, (0, r.useContext)(p));
        return (0, r.useMemo)(
          () => ({
            initial: e,
            animate: n,
          }),
          [y(e), y(n)],
        );
      }
      function y(t) {
        if (Array.isArray(t)) {
          return t.join(" ");
        } else {
          return t;
        }
      }
      var v = n(45875);
      var b = n(99246);
      var S = n(55469);
      const _ = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function w(t, e, n) {
        for (const r in e) {
          if (!(0, v.i)(e[r]) && !(0, b.j)(r, n)) {
            t[r] = e[r];
          }
        }
      }
      function x(t, e) {
        const n = {};
        w(n, t.style || {}, t);
        Object.assign(
          n,
          (function ({ transformTemplate: t }, e) {
            return (0, r.useMemo)(() => {
              const n = {
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {},
              };
              (0, S.r)(n, e, t);
              return Object.assign({}, n.vars, n.style);
            }, [e]);
          })(t, e),
        );
        return n;
      }
      function k(t, e) {
        const n = {};
        const r = x(t, e);
        if (t.drag && t.dragListener !== false) {
          n.draggable = false;
          r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none";
          r.touchAction =
            t.drag === true ? "none" : "pan-" + (t.drag === "x" ? "y" : "x");
        }
        if (
          t.tabIndex === undefined &&
          (t.onTap || t.onTapStart || t.whileTap)
        ) {
          n.tabIndex = 0;
        }
        n.style = r;
        return n;
      }
      var E = n(85670);
      const T = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
        attrs: {},
      });
      var C = n(38399);
      function M(t, e, n, s) {
        const i = (0, r.useMemo)(() => {
          const n = {
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {},
          };
          (0, E.i)(n, e, (0, C.a)(s), t.transformTemplate, t.style);
          return {
            ...n.attrs,
            style: {
              ...n.style,
            },
          };
        }, [e]);
        if (t.style) {
          const e = {};
          w(e, t.style, t);
          i.style = {
            ...e,
            ...i.style,
          };
        }
        return i;
      }
      const I = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function A(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && t !== "draggable") ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          I.has(t)
        );
      }
      let R = (t) => !A(t);
      try {
        if (
          typeof (P = require("@emotion/is-prop-valid").default) == "function"
        ) {
          R = (t) => (t.startsWith("on") ? !A(t) : P(t));
        }
      } catch {}
      var P;
      function O(t, e, n, { latestValues: s }, i, o = false) {
        const c = (a(t) ? M : k)(e, s, i, t);
        const u = (function (t, e, n) {
          const r = {};
          for (const s in t) {
            if (s !== "values" || typeof t.values != "object") {
              if (
                R(s) ||
                (n === true && A(s)) ||
                (!e && !A(s)) ||
                (t.draggable && s.startsWith("onDrag"))
              ) {
                r[s] = t[s];
              }
            }
          }
          return r;
        })(e, typeof t == "string", o);
        const l =
          t !== r.Fragment
            ? {
                ...u,
                ...c,
                ref: n,
              }
            : {};
        const { children: d } = e;
        const h = (0, r.useMemo)(() => ((0, v.i)(d) ? d.get() : d), [d]);
        return (0, r.createElement)(t, {
          ...l,
          children: h,
        });
      }
      var D = n(98922);
      var L = n(11717);
      var N = n(75440);
      var j = n(78217);
      function F(t) {
        if ((0, v.i)(t)) {
          return t.get();
        } else {
          return t;
        }
      }
      function $(t, e, n, r) {
        const s = {};
        const i = r(t, {});
        for (const t in i) {
          s[t] = F(i[t]);
        }
        let { initial: o, animate: a } = t;
        const c = (0, f.G)(t);
        const u = (0, f.M)(t);
        if (e && u && !c && t.inherit !== false) {
          if (o === undefined) {
            o = e.initial;
          }
          if (a === undefined) {
            a = e.animate;
          }
        }
        let l = !!n && n.initial === false;
        l = l || o === false;
        const d = l ? a : o;
        if (d && typeof d != "boolean" && !(0, D.H)(d)) {
          const e = Array.isArray(d) ? d : [d];
          for (let n = 0; n < e.length; n++) {
            const r = (0, N.o)(t, e[n]);
            if (r) {
              const { transitionEnd: t, transition: e, ...n } = r;
              for (const t in n) {
                let e = n[t];
                if (Array.isArray(e)) {
                  e = e[l ? e.length - 1 : 0];
                }
                if (e !== null) {
                  s[t] = e;
                }
              }
              for (const e in t) {
                s[e] = t[e];
              }
            }
          }
        }
        return s;
      }
      const B = (t) => (e, n) => {
        const s = (0, r.useContext)(p);
        const i = (0, r.useContext)(L.O);
        const o = () =>
          (function (
            { scrapeMotionValuesFromProps: t, createRenderState: e },
            n,
            r,
            s,
          ) {
            return {
              latestValues: $(n, r, s, t),
              renderState: e(),
            };
          })(t, e, s, i);
        if (n) {
          return o();
        } else {
          return (0, j.h)(o);
        }
      };
      const V = B({
        scrapeMotionValuesFromProps: n(86740).U,
        createRenderState: _,
      });
      const U = B({
        scrapeMotionValuesFromProps: n(81185).U,
        createRenderState: T,
      });
      var z = n(24939);
      var W = n(92131);
      const q = Symbol.for("motionComponentSymbol");
      function H(t) {
        return (
          t &&
          typeof t == "object" &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function K(t, e, n) {
        return (0, r.useCallback)(
          (r) => {
            if (r && t.onMount) {
              t.onMount(r);
            }
            if (e) {
              if (r) {
                e.mount(r);
              } else {
                e.unmount();
              }
            }
            if (n) {
              if (typeof n == "function") {
                n(r);
              } else if (H(n)) {
                n.current = r;
              }
            }
          },
          [e],
        );
      }
      var X = n(15793);
      const Y = (0, r.createContext)({});
      var G = n(19537);
      function J(t, e, n, s, i) {
        const { visualElement: o } = (0, r.useContext)(p);
        const a = (0, r.useContext)(d);
        const c = (0, r.useContext)(L.O);
        const u = (0, r.useContext)(h._).reducedMotion;
        const l = (0, r.useRef)(null);
        s = s || a.renderer;
        if (!l.current && s) {
          l.current = s(t, {
            visualState: e,
            parent: o,
            props: n,
            presenceContext: c,
            blockInitialAnimation: !!c && c.initial === false,
            reducedMotionConfig: u,
          });
        }
        const f = l.current;
        const m = (0, r.useContext)(Y);
        if (
          !!f &&
          !f.projection &&
          !!i &&
          (f.type === "html" || f.type === "svg")
        ) {
          (function (t, e, n, r) {
            const {
              layoutId: s,
              layout: i,
              drag: o,
              dragConstraints: a,
              layoutScroll: c,
              layoutRoot: u,
              layoutCrossfade: l,
            } = e;
            t.projection = new n(
              t.latestValues,
              e["data-framer-portal-id"] ? undefined : Z(t.parent),
            );
            t.projection.setOptions({
              layoutId: s,
              layout: i,
              alwaysMeasureLayout: Boolean(o) || (a && H(a)),
              visualElement: t,
              animationType: typeof i == "string" ? i : "both",
              initialPromotionConfig: r,
              crossfade: l,
              layoutScroll: c,
              layoutRoot: u,
            });
          })(l.current, n, i, m);
        }
        const g = (0, r.useRef)(false);
        (0, r.useInsertionEffect)(() => {
          if (f && g.current) {
            f.update(n, c);
          }
        });
        const y = n[X.M];
        const v = (0, r.useRef)(
          Boolean(y) &&
            !window.MotionHandoffIsComplete?.(y) &&
            window.MotionHasOptimisedAnimation?.(y),
        );
        (0, G.L)(() => {
          if (f) {
            g.current = true;
            window.MotionIsMounted = true;
            f.updateFeatures();
            f.scheduleRenderMicrotask();
            if (v.current && f.animationState) {
              f.animationState.animateChanges();
            }
          }
        });
        (0, r.useEffect)(() => {
          if (f) {
            if (!v.current && f.animationState) {
              f.animationState.animateChanges();
            }
            if (v.current) {
              queueMicrotask(() => {
                window.MotionHandoffMarkAsComplete?.(y);
              });
              v.current = false;
            }
            f.enteringChildren = undefined;
          }
        });
        return f;
      }
      function Z(t) {
        if (t) {
          if (t.options.allowProjection !== false) {
            return t.projection;
          } else {
            return Z(t.parent);
          }
        }
      }
      function Q(t, { forwardMotionProps: e = false } = {}, n, s) {
        if (n) {
          (function (t) {
            for (const e in t) {
              W.A[e] = {
                ...W.A[e],
                ...t[e],
              };
            }
          })(n);
        }
        const i = a(t) ? U : V;
        function o(n, o) {
          let a;
          const c = {
            ...(0, r.useContext)(h._),
            ...n,
            layoutId: tt(n),
          };
          const { isStatic: l } = c;
          const f = g(n);
          const m = i(n, l);
          if (!l && z.j) {
            (function () {
              (0, r.useContext)(d).strict;
              0;
            })();
            const e = (function (t) {
              const { drag: e, layout: n } = W.A;
              if (!e && !n) {
                return {};
              }
              const r = {
                ...e,
                ...n,
              };
              return {
                MeasureLayout:
                  e?.isEnabled(t) || n?.isEnabled(t)
                    ? r.MeasureLayout
                    : undefined,
                ProjectionNode: r.ProjectionNode,
              };
            })(c);
            a = e.MeasureLayout;
            f.visualElement = J(t, m, c, s, e.ProjectionNode);
          }
          return (0, u.jsxs)(p.Provider, {
            value: f,
            children: [
              a && f.visualElement
                ? (0, u.jsx)(a, {
                    visualElement: f.visualElement,
                    ...c,
                  })
                : null,
              O(t, n, K(m, f.visualElement, o), m, l, e),
            ],
          });
        }
        o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
        const c = (0, r.forwardRef)(o);
        c[q] = t;
        return c;
      }
      function tt({ layoutId: t }) {
        const e = (0, r.useContext)(l.p).id;
        if (e && t !== undefined) {
          return e + "-" + t;
        } else {
          return t;
        }
      }
      function et(t, e) {
        if (typeof Proxy == "undefined") {
          return Q;
        }
        const n = new Map();
        const r = (n, r) => Q(n, r, t, e);
        return new Proxy((t, e) => r(t, e), {
          get: (s, i) =>
            i === "create"
              ? r
              : (n.has(i) || n.set(i, Q(i, undefined, t, e)), n.get(i)),
        });
      }
      var nt = n(89654);
      var rt = n(4516);
      function st(t, e, n, r = 0, s = 1) {
        const i = Array.from(t)
          .sort((t, e) => t.sortNodePosition(e))
          .indexOf(e);
        const o = t.size;
        const a = (o - 1) * r;
        if (typeof n == "function") {
          return n(i, o);
        } else if (s === 1) {
          return i * r;
        } else {
          return a - i * r;
        }
      }
      function it(t, e, n = {}) {
        const r = (0, nt.x)(
          t,
          e,
          n.type === "exit" ? t.presenceContext?.custom : undefined,
        );
        let { transition: s = t.getDefaultTransition() || {} } = r || {};
        if (n.transitionOverride) {
          s = n.transitionOverride;
        }
        const i = r
          ? () => Promise.all((0, rt.w)(t, r, n))
          : () => Promise.resolve();
        const o =
          t.variantChildren && t.variantChildren.size
            ? (r = 0) => {
                const {
                  delayChildren: i = 0,
                  staggerChildren: o,
                  staggerDirection: a,
                } = s;
                return (function (t, e, n = 0, r = 0, s = 0, i = 1, o) {
                  const a = [];
                  for (const c of t.variantChildren) {
                    c.notify("AnimationStart", e);
                    a.push(
                      it(c, e, {
                        ...o,
                        delay:
                          n +
                          (typeof r == "function" ? 0 : r) +
                          st(t.variantChildren, c, r, s, i),
                      }).then(() => c.notify("AnimationComplete", e)),
                    );
                  }
                  return Promise.all(a);
                })(t, e, r, i, o, a, n);
              }
            : () => Promise.resolve();
        const { when: a } = s;
        if (a) {
          const [t, e] = a === "beforeChildren" ? [i, o] : [o, i];
          return t().then(() => e());
        }
        return Promise.all([i(), o(n.delay)]);
      }
      var ot = n(10516);
      function at(t, e) {
        if (!Array.isArray(e)) {
          return false;
        }
        const n = e.length;
        if (n !== t.length) {
          return false;
        }
        for (let r = 0; r < n; r++) {
          if (e[r] !== t[r]) {
            return false;
          }
        }
        return true;
      }
      var ct = n(89096);
      const ut = ct.V.length;
      function lt(t) {
        if (!t) {
          return;
        }
        if (!t.isControllingVariants) {
          const e = (t.parent && lt(t.parent)) || {};
          if (t.props.initial !== undefined) {
            e.initial = t.props.initial;
          }
          return e;
        }
        const e = {};
        for (let n = 0; n < ut; n++) {
          const r = ct.V[n];
          const s = t.props[r];
          if ((0, m.$)(s) || s === false) {
            e[r] = s;
          }
        }
        return e;
      }
      const dt = [...ct.e].reverse();
      const ht = ct.e.length;
      function pt(t) {
        return (e) =>
          Promise.all(
            e.map(({ animation: e, options: n }) =>
              (function (t, e, n = {}) {
                let r;
                t.notify("AnimationStart", e);
                if (Array.isArray(e)) {
                  const s = e.map((e) => it(t, e, n));
                  r = Promise.all(s);
                } else if (typeof e == "string") {
                  r = it(t, e, n);
                } else {
                  const s =
                    typeof e == "function" ? (0, nt.x)(t, e, n.custom) : e;
                  r = Promise.all((0, rt.w)(t, s, n));
                }
                return r.then(() => {
                  t.notify("AnimationComplete", e);
                });
              })(t, e, n),
            ),
          );
      }
      function ft(t) {
        let e = pt(t);
        let n = yt();
        let r = true;
        const s = (e) => (n, r) => {
          const s = (0, nt.x)(
            t,
            r,
            e === "exit" ? t.presenceContext?.custom : undefined,
          );
          if (s) {
            const { transition: t, transitionEnd: e, ...r } = s;
            n = {
              ...n,
              ...r,
              ...e,
            };
          }
          return n;
        };
        function i(i) {
          const { props: o } = t;
          const a = lt(t.parent) || {};
          const c = [];
          const u = new Set();
          let l = {};
          let d = Infinity;
          for (let e = 0; e < ht; e++) {
            const h = dt[e];
            const p = n[h];
            const f = o[h] !== undefined ? o[h] : a[h];
            const g = (0, m.$)(f);
            const y = h === i ? p.isActive : null;
            if (y === false) {
              d = e;
            }
            let v = f === a[h] && f !== o[h] && g;
            if (v && r && t.manuallyAnimateOnMount) {
              v = false;
            }
            p.protectedKeys = {
              ...l,
            };
            if (
              (!p.isActive && y === null) ||
              (!f && !p.prevProp) ||
              (0, D.H)(f) ||
              typeof f == "boolean"
            ) {
              continue;
            }
            const b = mt(p.prevProp, f);
            let S = b || (h === i && p.isActive && !v && g) || (e > d && g);
            let _ = false;
            const w = Array.isArray(f) ? f : [f];
            let x = w.reduce(s(h), {});
            if (y === false) {
              x = {};
            }
            const { prevResolvedValues: k = {} } = p;
            const E = {
              ...k,
              ...x,
            };
            const T = (e) => {
              S = true;
              if (u.has(e)) {
                _ = true;
                u.delete(e);
              }
              p.needsAnimating[e] = true;
              const n = t.getValue(e);
              if (n) {
                n.liveStyle = false;
              }
            };
            for (const t in E) {
              const e = x[t];
              const n = k[t];
              if (l.hasOwnProperty(t)) {
                continue;
              }
              let r = false;
              r = (0, ot.C)(e) && (0, ot.C)(n) ? !at(e, n) : e !== n;
              if (r) {
                if (e != null) {
                  T(t);
                } else {
                  u.add(t);
                }
              } else if (e !== undefined && u.has(t)) {
                T(t);
              } else {
                p.protectedKeys[t] = true;
              }
            }
            p.prevProp = f;
            p.prevResolvedValues = x;
            if (p.isActive) {
              l = {
                ...l,
                ...x,
              };
            }
            if (r && t.blockInitialAnimation) {
              S = false;
            }
            const C = v && b;
            if (S && (!C || _)) {
              c.push(
                ...w.map((e) => {
                  const n = {
                    type: h,
                  };
                  if (
                    typeof e == "string" &&
                    r &&
                    !C &&
                    t.manuallyAnimateOnMount &&
                    t.parent
                  ) {
                    const { parent: r } = t;
                    const s = (0, nt.x)(r, e);
                    if (r.enteringChildren && s) {
                      const { delayChildren: e } = s.transition || {};
                      n.delay = st(r.enteringChildren, t, e);
                    }
                  }
                  return {
                    animation: e,
                    options: n,
                  };
                }),
              );
            }
          }
          if (u.size) {
            const e = {};
            if (typeof o.initial != "boolean") {
              const n = (0, nt.x)(
                t,
                Array.isArray(o.initial) ? o.initial[0] : o.initial,
              );
              if (n && n.transition) {
                e.transition = n.transition;
              }
            }
            u.forEach((n) => {
              const r = t.getBaseTarget(n);
              const s = t.getValue(n);
              if (s) {
                s.liveStyle = true;
              }
              e[n] = r ?? null;
            });
            c.push({
              animation: e,
            });
          }
          let h = Boolean(c.length);
          if (
            !!r &&
            (o.initial === false || o.initial === o.animate) &&
            !t.manuallyAnimateOnMount
          ) {
            h = false;
          }
          r = false;
          if (h) {
            return e(c);
          } else {
            return Promise.resolve();
          }
        }
        return {
          animateChanges: i,
          setActive: function (e, r) {
            if (n[e].isActive === r) {
              return Promise.resolve();
            }
            t.variantChildren?.forEach((t) =>
              t.animationState?.setActive(e, r),
            );
            n[e].isActive = r;
            const s = i(e);
            for (const t in n) {
              n[t].protectedKeys = {};
            }
            return s;
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: () => n,
          reset: () => {
            n = yt();
            r = true;
          },
        };
      }
      function mt(t, e) {
        if (typeof e == "string") {
          return e !== t;
        } else {
          return !!Array.isArray(e) && !at(e, t);
        }
      }
      function gt(t = false) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function yt() {
        return {
          animate: gt(true),
          whileInView: gt(),
          whileHover: gt(),
          whileTap: gt(),
          whileDrag: gt(),
          whileFocus: gt(),
          exit: gt(),
        };
      }
      class vt {
        constructor(t) {
          this.isMounted = false;
          this.node = t;
        }
        update() {}
      }
      let bt = 0;
      const St = {
        animation: {
          Feature: class extends vt {
            constructor(t) {
              super(t);
              t.animationState ||= ft(t);
            }
            updateAnimationControlsSubscription() {
              const { animate: t } = this.node.getProps();
              if ((0, D.H)(t)) {
                this.unmountControls = t.subscribe(this.node);
              }
            }
            mount() {
              this.updateAnimationControlsSubscription();
            }
            update() {
              const { animate: t } = this.node.getProps();
              const { animate: e } = this.node.prevProps || {};
              if (t !== e) {
                this.updateAnimationControlsSubscription();
              }
            }
            unmount() {
              this.node.animationState.reset();
              this.unmountControls?.();
            }
          },
        },
        exit: {
          Feature: class extends vt {
            constructor() {
              super(...arguments);
              this.id = bt++;
            }
            update() {
              if (!this.node.presenceContext) {
                return;
              }
              const { isPresent: t, onExitComplete: e } =
                this.node.presenceContext;
              const { isPresent: n } = this.node.prevPresenceContext || {};
              if (!this.node.animationState || t === n) {
                return;
              }
              const r = this.node.animationState.setActive("exit", !t);
              if (e && !t) {
                r.then(() => {
                  e(this.id);
                });
              }
            }
            mount() {
              const { register: t, onExitComplete: e } =
                this.node.presenceContext || {};
              if (e) {
                e(this.id);
              }
              if (t) {
                this.unmount = t(this.id);
              }
            }
            unmount() {}
          },
        },
      };
      var _t = n(43594);
      const wt = {
        x: false,
        y: false,
      };
      function xt() {
        return wt.x || wt.y;
      }
      var kt = n(57360);
      var Et = n(63594);
      var Tt = n(55153);
      var Ct = n(26975);
      var Mt = n(20284);
      function It(
        t,
        e,
        n,
        r = {
          passive: true,
        },
      ) {
        t.addEventListener(e, n, r);
        return () => t.removeEventListener(e, n);
      }
      const At = (t) =>
        t.pointerType === "mouse"
          ? typeof t.button != "number" || t.button <= 0
          : t.isPrimary !== false;
      function Rt(t) {
        return {
          point: {
            x: t.pageX,
            y: t.pageY,
          },
        };
      }
      function Pt(t, e, n, r) {
        return It(
          t,
          e,
          (
            (t) => (e) =>
              At(e) && t(e, Rt(e))
          )(n),
          r,
        );
      }
      var Ot = n(74961);
      function Dt(t) {
        return t.max - t.min;
      }
      function Lt(t, e, n, r = 0.5) {
        t.origin = r;
        t.originPoint = (0, Tt.t)(e.min, e.max, t.origin);
        t.scale = Dt(n) / Dt(e);
        t.translate = (0, Tt.t)(n.min, n.max, t.origin) - t.originPoint;
        if ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) {
          t.scale = 1;
        }
        if (
          (t.translate >= -0.01 && t.translate <= 0.01) ||
          isNaN(t.translate)
        ) {
          t.translate = 0;
        }
      }
      function Nt(t, e, n, r) {
        Lt(t.x, e.x, n.x, r ? r.originX : undefined);
        Lt(t.y, e.y, n.y, r ? r.originY : undefined);
      }
      function jt(t, e, n) {
        t.min = n.min + e.min;
        t.max = t.min + Dt(e);
      }
      function Ft(t, e, n) {
        t.min = e.min - n.min;
        t.max = t.min + Dt(e);
      }
      function $t(t, e, n) {
        Ft(t.x, e.x, n.x);
        Ft(t.y, e.y, n.y);
      }
      var Bt = n(95398);
      function Vt(t) {
        return [t("x"), t("y")];
      }
      var Ut = n(10301);
      const zt = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var Wt = n(83800);
      var qt = n(60333);
      var Ht = n(15244);
      const Kt = (t, e) => Math.abs(t - e);
      class Xt {
        constructor(
          t,
          e,
          {
            transformPagePoint: n,
            contextWindow: r = window,
            dragSnapToOrigin: s = false,
            distanceThreshold: i = 3,
          } = {},
        ) {
          this.startEvent = null;
          this.lastMoveEvent = null;
          this.lastMoveEventInfo = null;
          this.handlers = {};
          this.contextWindow = window;
          this.updatePoint = () => {
            if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
              return;
            }
            const t = Jt(this.lastMoveEventInfo, this.history);
            const e = this.startEvent !== null;
            const n =
              (function (t, e) {
                const n = Kt(t.x, e.x);
                const r = Kt(t.y, e.y);
                return Math.sqrt(n ** 2 + r ** 2);
              })(t.offset, {
                x: 0,
                y: 0,
              }) >= this.distanceThreshold;
            if (!e && !n) {
              return;
            }
            const { point: r } = t;
            const { timestamp: s } = Et.w0;
            this.history.push({
              ...r,
              timestamp: s,
            });
            const { onStart: i, onMove: o } = this.handlers;
            if (!e) {
              if (i) {
                i(this.lastMoveEvent, t);
              }
              this.startEvent = this.lastMoveEvent;
            }
            if (o) {
              o(this.lastMoveEvent, t);
            }
          };
          this.handlePointerMove = (t, e) => {
            this.lastMoveEvent = t;
            this.lastMoveEventInfo = Yt(e, this.transformPagePoint);
            Et.Wi.update(this.updatePoint, true);
          };
          this.handlePointerUp = (t, e) => {
            this.end();
            const {
              onEnd: n,
              onSessionEnd: r,
              resumeAnimation: s,
            } = this.handlers;
            if (this.dragSnapToOrigin && s) {
              s();
            }
            if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
              return;
            }
            const i = Jt(
              t.type === "pointercancel"
                ? this.lastMoveEventInfo
                : Yt(e, this.transformPagePoint),
              this.history,
            );
            if (this.startEvent && n) {
              n(t, i);
            }
            if (r) {
              r(t, i);
            }
          };
          if (!At(t)) {
            return;
          }
          this.dragSnapToOrigin = s;
          this.handlers = e;
          this.transformPagePoint = n;
          this.distanceThreshold = i;
          this.contextWindow = r || window;
          const o = Yt(Rt(t), this.transformPagePoint);
          const { point: a } = o;
          const { timestamp: c } = Et.w0;
          this.history = [
            {
              ...a,
              timestamp: c,
            },
          ];
          const { onSessionStart: u } = e;
          if (u) {
            u(t, Jt(o, this.history));
          }
          this.removeListeners = (0, qt.z)(
            Pt(this.contextWindow, "pointermove", this.handlePointerMove),
            Pt(this.contextWindow, "pointerup", this.handlePointerUp),
            Pt(this.contextWindow, "pointercancel", this.handlePointerUp),
          );
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          if (this.removeListeners) {
            this.removeListeners();
          }
          (0, Et.Pn)(this.updatePoint);
        }
      }
      function Yt(t, e) {
        if (e) {
          return {
            point: e(t.point),
          };
        } else {
          return t;
        }
      }
      function Gt(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y,
        };
      }
      function Jt({ point: t }, e) {
        return {
          point: t,
          delta: Gt(t, Qt(e)),
          offset: Gt(t, Zt(e)),
          velocity: te(e, 0.1),
        };
      }
      function Zt(t) {
        return t[0];
      }
      function Qt(t) {
        return t[t.length - 1];
      }
      function te(t, e) {
        if (t.length < 2) {
          return {
            x: 0,
            y: 0,
          };
        }
        let n = t.length - 1;
        let r = null;
        const s = Qt(t);
        while (
          n >= 0 &&
          ((r = t[n]), !(s.timestamp - r.timestamp > (0, Ht.w)(e)))
        ) {
          n--;
        }
        if (!r) {
          return {
            x: 0,
            y: 0,
          };
        }
        const i = (0, Ht.X)(s.timestamp - r.timestamp);
        if (i === 0) {
          return {
            x: 0,
            y: 0,
          };
        }
        const o = {
          x: (s.x - r.x) / i,
          y: (s.y - r.y) / i,
        };
        if (o.x === Infinity) {
          o.x = 0;
        }
        if (o.y === Infinity) {
          o.y = 0;
        }
        return o;
      }
      var ee = n(66789);
      var ne = n(65437);
      function re(t, e, n) {
        return {
          min: e !== undefined ? t.min + e : undefined,
          max: n !== undefined ? t.max + n - (t.max - t.min) : undefined,
        };
      }
      function se(t, e) {
        let n = e.min - t.min;
        let r = e.max - t.max;
        if (e.max - e.min < t.max - t.min) {
          [n, r] = [r, n];
        }
        return {
          min: n,
          max: r,
        };
      }
      const ie = 0.35;
      function oe(t, e, n) {
        return {
          min: ae(t, e),
          max: ae(t, n),
        };
      }
      function ae(t, e) {
        if (typeof t == "number") {
          return t;
        } else {
          return t[e] || 0;
        }
      }
      const ce = new WeakMap();
      class ue {
        constructor(t) {
          this.openDragLock = null;
          this.isDragging = false;
          this.currentDirection = null;
          this.originPoint = {
            x: 0,
            y: 0,
          };
          this.constraints = false;
          this.hasMutatedConstraints = false;
          this.elastic = (0, Bt.dO)();
          this.latestPointerEvent = null;
          this.latestPanInfo = null;
          this.visualElement = t;
        }
        start(t, { snapToCursor: e = false, distanceThreshold: n } = {}) {
          const { presenceContext: r } = this.visualElement;
          if (r && r.isPresent === false) {
            return;
          }
          const { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new Xt(
            t,
            {
              onSessionStart: (t) => {
                const { dragSnapToOrigin: n } = this.getProps();
                if (n) {
                  this.pauseAnimation();
                } else {
                  this.stopAnimation();
                }
                if (e) {
                  this.snapToCursor(Rt(t).point);
                }
              },
              onStart: (t, e) => {
                const {
                  drag: n,
                  dragPropagation: r,
                  onDragStart: s,
                } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    (i = n) === "x" || i === "y"
                      ? wt[i]
                        ? null
                        : ((wt[i] = true),
                          () => {
                            wt[i] = false;
                          })
                      : wt.x || wt.y
                        ? null
                        : ((wt.x = wt.y = true),
                          () => {
                            wt.x = wt.y = false;
                          })),
                  !this.openDragLock)
                ) {
                  return;
                }
                var i;
                this.latestPointerEvent = t;
                this.latestPanInfo = e;
                this.isDragging = true;
                this.currentDirection = null;
                this.resolveConstraints();
                if (this.visualElement.projection) {
                  this.visualElement.projection.isAnimationBlocked = true;
                  this.visualElement.projection.target = undefined;
                }
                Vt((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (kt.aQ.test(e)) {
                    const { projection: n } = this.visualElement;
                    if (n && n.layout) {
                      const r = n.layout.layoutBox[t];
                      if (r) {
                        e = Dt(r) * (parseFloat(e) / 100);
                      }
                    }
                  }
                  this.originPoint[t] = e;
                });
                if (s) {
                  Et.Wi.postRender(() => s(t, e));
                }
                (0, Wt.K)(this.visualElement, "transform");
                const { animationState: o } = this.visualElement;
                if (o) {
                  o.setActive("whileDrag", true);
                }
              },
              onMove: (t, e) => {
                this.latestPointerEvent = t;
                this.latestPanInfo = e;
                const {
                  dragPropagation: n,
                  dragDirectionLock: r,
                  onDirectionLock: s,
                  onDrag: i,
                } = this.getProps();
                if (!n && !this.openDragLock) {
                  return;
                }
                const { offset: o } = e;
                if (r && this.currentDirection === null) {
                  this.currentDirection = (function (t, e = 10) {
                    let n = null;
                    if (Math.abs(t.y) > e) {
                      n = "y";
                    } else if (Math.abs(t.x) > e) {
                      n = "x";
                    }
                    return n;
                  })(o);
                  if (this.currentDirection !== null && s) {
                    s(this.currentDirection);
                  }
                  return;
                }
                this.updateAxis("x", e.point, o);
                this.updateAxis("y", e.point, o);
                this.visualElement.render();
                if (i) {
                  i(t, e);
                }
              },
              onSessionEnd: (t, e) => {
                this.latestPointerEvent = t;
                this.latestPanInfo = e;
                this.stop(t, e);
                this.latestPointerEvent = null;
                this.latestPanInfo = null;
              },
              resumeAnimation: () =>
                Vt(
                  (t) =>
                    this.getAnimationState(t) === "paused" &&
                    this.getAxisMotionValue(t).animation?.play(),
                ),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              distanceThreshold: n,
              contextWindow: zt(this.visualElement),
            },
          );
        }
        stop(t, e) {
          const n = t || this.latestPointerEvent;
          const r = e || this.latestPanInfo;
          const s = this.isDragging;
          this.cancel();
          if (!s || !r || !n) {
            return;
          }
          const { velocity: i } = r;
          this.startAnimation(i);
          const { onDragEnd: o } = this.getProps();
          if (o) {
            Et.Wi.postRender(() => o(n, r));
          }
        }
        cancel() {
          this.isDragging = false;
          const { projection: t, animationState: e } = this.visualElement;
          if (t) {
            t.isAnimationBlocked = false;
          }
          if (this.panSession) {
            this.panSession.end();
          }
          this.panSession = undefined;
          const { dragPropagation: n } = this.getProps();
          if (!n && this.openDragLock) {
            this.openDragLock();
            this.openDragLock = null;
          }
          if (e) {
            e.setActive("whileDrag", false);
          }
        }
        updateAxis(t, e, n) {
          const { drag: r } = this.getProps();
          if (!n || !le(t, r, this.currentDirection)) {
            return;
          }
          const s = this.getAxisMotionValue(t);
          let i = this.originPoint[t] + n[t];
          if (this.constraints && this.constraints[t]) {
            i = (function (t, { min: e, max: n }, r) {
              if (e !== undefined && t < e) {
                t = r ? (0, Tt.t)(e, t, r.min) : Math.max(t, e);
              } else if (n !== undefined && t > n) {
                t = r ? (0, Tt.t)(n, t, r.max) : Math.min(t, n);
              }
              return t;
            })(i, this.constraints[t], this.elastic[t]);
          }
          s.set(i);
        }
        resolveConstraints() {
          const { dragConstraints: t, dragElastic: e } = this.getProps();
          const n =
            this.visualElement.projection &&
            !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(false)
              : this.visualElement.projection?.layout;
          const r = this.constraints;
          if (t && H(t)) {
            this.constraints ||= this.resolveRefConstraints();
          } else {
            this.constraints =
              !!t &&
              !!n &&
              (function (t, { top: e, left: n, bottom: r, right: s }) {
                return {
                  x: re(t.x, n, s),
                  y: re(t.y, e, r),
                };
              })(n.layoutBox, t);
          }
          this.elastic = (function (t = ie) {
            if (t === false) {
              t = 0;
            } else if (t === true) {
              t = ie;
            }
            return {
              x: oe(t, "left", "right"),
              y: oe(t, "top", "bottom"),
            };
          })(e);
          if (
            r !== this.constraints &&
            n &&
            this.constraints &&
            !this.hasMutatedConstraints
          ) {
            Vt((t) => {
              if (this.constraints !== false && this.getAxisMotionValue(t)) {
                this.constraints[t] = (function (t, e) {
                  const n = {};
                  if (e.min !== undefined) {
                    n.min = e.min - t.min;
                  }
                  if (e.max !== undefined) {
                    n.max = e.max - t.min;
                  }
                  return n;
                })(n.layoutBox[t], this.constraints[t]);
              }
            });
          }
        }
        resolveRefConstraints() {
          const { dragConstraints: t, onMeasureDragConstraints: e } =
            this.getProps();
          if (!t || !H(t)) {
            return false;
          }
          const n = t.current;
          (0, Ct.k)(
            n !== null,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            "drag-constraints-ref",
          );
          const { projection: r } = this.visualElement;
          if (!r || !r.layout) {
            return false;
          }
          const s = (0, Ut.z)(
            n,
            r.root,
            this.visualElement.getTransformPagePoint(),
          );
          let i = (function (t, e) {
            return {
              x: se(t.x, e.x),
              y: se(t.y, e.y),
            };
          })(r.layout.layoutBox, s);
          if (e) {
            const t = e((0, Ot.z2)(i));
            this.hasMutatedConstraints = !!t;
            if (t) {
              i = (0, Ot.i8)(t);
            }
          }
          return i;
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: r,
            dragTransition: s,
            dragSnapToOrigin: i,
            onDragTransitionEnd: o,
          } = this.getProps();
          const a = this.constraints || {};
          const c = Vt((o) => {
            if (!le(o, e, this.currentDirection)) {
              return;
            }
            let c = (a && a[o]) || {};
            if (i) {
              c = {
                min: 0,
                max: 0,
              };
            }
            const u = r ? 200 : 1000000;
            const l = r ? 40 : 10000000;
            const d = {
              type: "inertia",
              velocity: n ? t[o] : 0,
              bounceStiffness: u,
              bounceDamping: l,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...s,
              ...c,
            };
            return this.startAxisValueAnimation(o, d);
          });
          return Promise.all(c).then(o);
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          (0, Wt.K)(this.visualElement, t);
          return n.start((0, Mt.v)(t, n, 0, e, this.visualElement, false));
        }
        stopAnimation() {
          Vt((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          Vt((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          const e = `_drag${t.toUpperCase()}`;
          const n = this.visualElement.getProps();
          const r = n[e];
          return (
            r ||
            this.visualElement.getValue(
              t,
              (n.initial ? n.initial[t] : undefined) || 0,
            )
          );
        }
        snapToCursor(t) {
          Vt((e) => {
            const { drag: n } = this.getProps();
            if (!le(e, n, this.currentDirection)) {
              return;
            }
            const { projection: r } = this.visualElement;
            const s = this.getAxisMotionValue(e);
            if (r && r.layout) {
              const { min: n, max: i } = r.layout.layoutBox[e];
              s.set(t[e] - (0, Tt.t)(n, i, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) {
            return;
          }
          const { drag: t, dragConstraints: e } = this.getProps();
          const { projection: n } = this.visualElement;
          if (!H(e) || !n || !this.constraints) {
            return;
          }
          this.stopAnimation();
          const r = {
            x: 0,
            y: 0,
          };
          Vt((t) => {
            const e = this.getAxisMotionValue(t);
            if (e && this.constraints !== false) {
              const n = e.get();
              r[t] = (function (t, e) {
                let n = 0.5;
                const r = Dt(t);
                const s = Dt(e);
                if (s > r) {
                  n = (0, ee.Y)(e.min, e.max - r, t.min);
                } else if (r > s) {
                  n = (0, ee.Y)(t.min, t.max - s, e.min);
                }
                return (0, ne.u)(0, 1, n);
              })(
                {
                  min: n,
                  max: n,
                },
                this.constraints[t],
              );
            }
          });
          const { transformTemplate: s } = this.visualElement.getProps();
          this.visualElement.current.style.transform = s ? s({}, "") : "none";
          if (n.root) {
            n.root.updateScroll();
          }
          n.updateLayout();
          this.resolveConstraints();
          Vt((e) => {
            if (!le(e, t, null)) {
              return;
            }
            const n = this.getAxisMotionValue(e);
            const { min: s, max: i } = this.constraints[e];
            n.set((0, Tt.t)(s, i, r[e]));
          });
        }
        addListeners() {
          if (!this.visualElement.current) {
            return;
          }
          ce.set(this.visualElement, this);
          const t = Pt(this.visualElement.current, "pointerdown", (t) => {
            const { drag: e, dragListener: n = true } = this.getProps();
            if (e && n) {
              this.start(t);
            }
          });
          const e = () => {
            const { dragConstraints: t } = this.getProps();
            if (H(t) && t.current) {
              this.constraints = this.resolveRefConstraints();
            }
          };
          const { projection: n } = this.visualElement;
          const r = n.addEventListener("measure", e);
          if (n && !n.layout) {
            if (n.root) {
              n.root.updateScroll();
            }
            n.updateLayout();
          }
          Et.Wi.read(e);
          const s = It(window, "resize", () =>
            this.scalePositionWithinConstraints(),
          );
          const i = n.addEventListener(
            "didUpdate",
            ({ delta: t, hasLayoutChanged: e }) => {
              if (this.isDragging && e) {
                Vt((e) => {
                  const n = this.getAxisMotionValue(e);
                  if (n) {
                    this.originPoint[e] += t[e].translate;
                    n.set(n.get() + t[e].translate);
                  }
                });
                this.visualElement.render();
              }
            },
          );
          return () => {
            s();
            t();
            r();
            if (i) {
              i();
            }
          };
        }
        getProps() {
          const t = this.visualElement.getProps();
          const {
            drag: e = false,
            dragDirectionLock: n = false,
            dragPropagation: r = false,
            dragConstraints: s = false,
            dragElastic: i = ie,
            dragMomentum: o = true,
          } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: s,
            dragElastic: i,
            dragMomentum: o,
          };
        }
      }
      function le(t, e, n) {
        return (e === true || e === t) && (n === null || n === t);
      }
      const de = (t) => (e, n) => {
        if (t) {
          Et.Wi.postRender(() => t(e, n));
        }
      };
      var he = n(69547);
      var pe = n(14438);
      const fe = {
        hasAnimatedSinceResize: true,
        hasEverUpdated: false,
      };
      function me(t, e) {
        if (e.max === e.min) {
          return 0;
        } else {
          return (t / (e.max - e.min)) * 100;
        }
      }
      const ge = {
        correct: (t, e) => {
          if (!e.target) {
            return t;
          }
          if (typeof t == "string") {
            if (!kt.px.test(t)) {
              return t;
            }
            t = parseFloat(t);
          }
          return `${me(t, e.target.x)}% ${me(t, e.target.y)}%`;
        },
      };
      var ye = n(28779);
      const ve = {
        correct: (t, { treeScale: e, projectionDelta: n }) => {
          const r = t;
          const s = ye.P.parse(t);
          if (s.length > 5) {
            return r;
          }
          const i = ye.P.createTransformer(t);
          const o = typeof s[0] != "number" ? 1 : 0;
          const a = n.x.scale * e.x;
          const c = n.y.scale * e.y;
          s[0 + o] /= a;
          s[1 + o] /= c;
          const u = (0, Tt.t)(a, c, 0.5);
          if (typeof s[2 + o] == "number") {
            s[2 + o] /= u;
          }
          if (typeof s[3 + o] == "number") {
            s[3 + o] /= u;
          }
          return i(s);
        },
      };
      var be = n(23486);
      let Se = false;
      class _e extends r.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: r,
          } = this.props;
          const { projection: s } = t;
          (0, be.B)(xe);
          if (s) {
            if (e.group) {
              e.group.add(s);
            }
            if (n && n.register && r) {
              n.register(s);
            }
            if (Se) {
              s.root.didUpdate();
            }
            s.addEventListener("animationComplete", () => {
              this.safeToRemove();
            });
            s.setOptions({
              ...s.options,
              onExitComplete: () => this.safeToRemove(),
            });
          }
          fe.hasEverUpdated = true;
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: r,
            isPresent: s,
          } = this.props;
          const { projection: i } = n;
          if (i) {
            i.isPresent = s;
            Se = true;
            if (
              r ||
              t.layoutDependency !== e ||
              e === undefined ||
              t.isPresent !== s
            ) {
              i.willUpdate();
            } else {
              this.safeToRemove();
            }
            if (t.isPresent !== s) {
              if (s) {
                i.promote();
              } else if (!i.relegate()) {
                Et.Wi.postRender(() => {
                  const t = i.getStack();
                  if (!t || !t.members.length) {
                    this.safeToRemove();
                  }
                });
              }
            }
            return null;
          } else {
            return null;
          }
        }
        componentDidUpdate() {
          const { projection: t } = this.props.visualElement;
          if (t) {
            t.root.didUpdate();
            he.g.postRender(() => {
              if (!t.currentAnimation && t.isLead()) {
                this.safeToRemove();
              }
            });
          }
        }
        componentWillUnmount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
          } = this.props;
          const { projection: r } = t;
          Se = true;
          if (r) {
            r.scheduleCheckAfterUnmount();
            if (e && e.group) {
              e.group.remove(r);
            }
            if (n && n.deregister) {
              n.deregister(r);
            }
          }
        }
        safeToRemove() {
          const { safeToRemove: t } = this.props;
          if (t) {
            t();
          }
        }
        render() {
          return null;
        }
      }
      function we(t) {
        const [e, n] = (0, pe.oO)();
        const s = (0, r.useContext)(l.p);
        return (0, u.jsx)(_e, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, r.useContext)(Y),
          isPresent: e,
          safeToRemove: n,
        });
      }
      const xe = {
        borderRadius: {
          ...ge,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: ge,
        borderTopRightRadius: ge,
        borderBottomLeftRadius: ge,
        borderBottomRightRadius: ge,
        boxShadow: ve,
      };
      var ke = n(27984);
      var Ee = n(59634);
      var Te = n(30038);
      var Ce = n(83479);
      var Me = n(35449);
      var Ie = n(32838);
      var Ae = n(17802);
      var Re = n(58088);
      var Pe = n(59349);
      var Oe = n(56796);
      var De = n(97433);
      const Le = (t, e) => t.depth - e.depth;
      class Ne {
        constructor() {
          this.children = [];
          this.isDirty = false;
        }
        add(t) {
          (0, De.y4)(this.children, t);
          this.isDirty = true;
        }
        remove(t) {
          (0, De.cl)(this.children, t);
          this.isDirty = true;
        }
        forEach(t) {
          if (this.isDirty) {
            this.children.sort(Le);
          }
          this.isDirty = false;
          this.children.forEach(t);
        }
      }
      function je(t, e) {
        const n = Me.X.now();
        const r = ({ timestamp: s }) => {
          const i = s - n;
          if (i >= e) {
            (0, Et.Pn)(r);
            t(i - e);
          }
        };
        Et.Wi.setup(r, true);
        return () => (0, Et.Pn)(r);
      }
      var Fe = n(37919);
      const $e = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
      const Be = $e.length;
      const Ve = (t) => (typeof t == "string" ? parseFloat(t) : t);
      const Ue = (t) => typeof t == "number" || kt.px.test(t);
      function ze(t, e) {
        if (t[e] !== undefined) {
          return t[e];
        } else {
          return t.borderRadius;
        }
      }
      const We = He(0, 0.5, Fe.Bn);
      const qe = He(0.5, 0.95, _t.Z);
      function He(t, e, n) {
        return (r) => (r < t ? 0 : r > e ? 1 : n((0, ee.Y)(t, e, r)));
      }
      function Ke(t, e) {
        t.min = e.min;
        t.max = e.max;
      }
      function Xe(t, e) {
        Ke(t.x, e.x);
        Ke(t.y, e.y);
      }
      function Ye(t, e) {
        t.translate = e.translate;
        t.scale = e.scale;
        t.originPoint = e.originPoint;
        t.origin = e.origin;
      }
      var Ge = n(80813);
      function Je(t, e, n, r, s) {
        t -= e;
        t = (0, Ge.q2)(t, 1 / n, r);
        if (s !== undefined) {
          t = (0, Ge.q2)(t, 1 / s, r);
        }
        return t;
      }
      function Ze(t, e, [n, r, s], i, o) {
        (function (t, e = 0, n = 1, r = 0.5, s, i = t, o = t) {
          if (kt.aQ.test(e)) {
            e = parseFloat(e);
            e = (0, Tt.t)(o.min, o.max, e / 100) - o.min;
          }
          if (typeof e != "number") {
            return;
          }
          let a = (0, Tt.t)(i.min, i.max, r);
          if (t === i) {
            a -= e;
          }
          t.min = Je(t.min, e, n, a, s);
          t.max = Je(t.max, e, n, a, s);
        })(t, e[n], e[r], e[s], e.scale, i, o);
      }
      const Qe = ["x", "scaleX", "originX"];
      const tn = ["y", "scaleY", "originY"];
      function en(t, e, n, r) {
        Ze(t.x, e, Qe, n ? n.x : undefined, r ? r.x : undefined);
        Ze(t.y, e, tn, n ? n.y : undefined, r ? r.y : undefined);
      }
      function nn(t) {
        return t.translate === 0 && t.scale === 1;
      }
      function rn(t) {
        return nn(t.x) && nn(t.y);
      }
      function sn(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function on(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function an(t, e) {
        return on(t.x, e.x) && on(t.y, e.y);
      }
      function cn(t) {
        return Dt(t.x) / Dt(t.y);
      }
      function un(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class ln {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, De.y4)(this.members, t);
          t.scheduleRender();
        }
        remove(t) {
          (0, De.cl)(this.members, t);
          if (t === this.prevLead) {
            this.prevLead = undefined;
          }
          if (t === this.lead) {
            const t = this.members[this.members.length - 1];
            if (t) {
              this.promote(t);
            }
          }
        }
        relegate(t) {
          const e = this.members.findIndex((e) => t === e);
          if (e === 0) {
            return false;
          }
          let n;
          for (let t = e; t >= 0; t--) {
            const e = this.members[t];
            if (e.isPresent !== false) {
              n = e;
              break;
            }
          }
          return !!n && (this.promote(n), true);
        }
        promote(t, e) {
          const n = this.lead;
          if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
            if (n.instance) {
              n.scheduleRender();
            }
            t.scheduleRender();
            t.resumeFrom = n;
            if (e) {
              t.resumeFrom.preserveOpacity = true;
            }
            if (n.snapshot) {
              t.snapshot = n.snapshot;
              t.snapshot.latestValues = n.animationValues || n.latestValues;
            }
            if (t.root && t.root.isUpdating) {
              t.isLayoutDirty = true;
            }
            const { crossfade: r } = t.options;
            if (r === false) {
              n.hide();
            }
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            const { options: e, resumingFrom: n } = t;
            if (e.onExitComplete) {
              e.onExitComplete();
            }
            if (n && n.options.onExitComplete) {
              n.options.onExitComplete();
            }
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            if (t.instance) {
              t.scheduleRender(false);
            }
          });
        }
        removeLeadSnapshot() {
          if (this.lead && this.lead.snapshot) {
            this.lead.snapshot = undefined;
          }
        }
      }
      var dn = n(6034);
      const hn = {
        nodes: 0,
        calculatedTargetDeltas: 0,
        calculatedProjections: 0,
      };
      const pn = ["", "X", "Y", "Z"];
      let fn = 0;
      function mn(t, e, n, r) {
        const { latestValues: s } = e;
        if (s[t]) {
          n[t] = s[t];
          e.setStaticValue(t, 0);
          if (r) {
            r[t] = 0;
          }
        }
      }
      function gn(t) {
        t.hasCheckedOptimisedAppear = true;
        if (t.root === t) {
          return;
        }
        const { visualElement: e } = t.options;
        if (!e) {
          return;
        }
        const n = (0, Oe.s)(e);
        if (window.MotionHasOptimisedAnimation(n, "transform")) {
          const { layout: e, layoutId: r } = t.options;
          window.MotionCancelOptimisedAnimation(
            n,
            "transform",
            Et.Wi,
            !e && !r,
          );
        }
        const { parent: r } = t;
        if (r && !r.hasCheckedOptimisedAppear) {
          gn(r);
        }
      }
      function yn({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: s,
      }) {
        return class {
          constructor(t = {}, n = e?.()) {
            this.id = fn++;
            this.animationId = 0;
            this.animationCommitId = 0;
            this.children = new Set();
            this.options = {};
            this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            this.isLayoutDirty = false;
            this.isProjectionDirty = false;
            this.isSharedProjectionDirty = false;
            this.isTransformDirty = false;
            this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            this.isUpdating = false;
            this.isSVG = false;
            this.needsReset = false;
            this.shouldResetTransform = false;
            this.hasCheckedOptimisedAppear = false;
            this.treeScale = {
              x: 1,
              y: 1,
            };
            this.eventHandlers = new Map();
            this.hasTreeAnimated = false;
            this.updateScheduled = false;
            this.scheduleUpdate = () => this.update();
            this.projectionUpdateScheduled = false;
            this.checkUpdateFailed = () => {
              if (this.isUpdating) {
                this.isUpdating = false;
                this.clearAllSnapshots();
              }
            };
            this.updateProjection = () => {
              this.projectionUpdateScheduled = false;
              if (ke.f.value) {
                hn.nodes =
                  hn.calculatedTargetDeltas =
                  hn.calculatedProjections =
                    0;
              }
              this.nodes.forEach(Sn);
              this.nodes.forEach(Cn);
              this.nodes.forEach(Mn);
              this.nodes.forEach(_n);
              if (ke.f.addProjectionMetrics) {
                ke.f.addProjectionMetrics(hn);
              }
            };
            this.resolvedRelativeTargetAt = 0;
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            this.sharedNodes = new Map();
            this.latestValues = t;
            this.root = n ? n.root || n : this;
            this.path = n ? [...n.path, n] : [];
            this.parent = n;
            this.depth = n ? n.depth + 1 : 0;
            for (let t = 0; t < this.path.length; t++) {
              this.path[t].shouldResetTransform = true;
            }
            if (this.root === this) {
              this.nodes = new Ne();
            }
          }
          addEventListener(t, e) {
            if (!this.eventHandlers.has(t)) {
              this.eventHandlers.set(t, new Re.L());
            }
            return this.eventHandlers.get(t).add(e);
          }
          notifyListeners(t, ...e) {
            const n = this.eventHandlers.get(t);
            if (n) {
              n.notify(...e);
            }
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e) {
            if (this.instance) {
              return;
            }
            this.isSVG = (0, Ee.v)(e) && !(0, Te.r)(e);
            this.instance = e;
            const { layoutId: n, layout: r, visualElement: s } = this.options;
            if (s && !s.current) {
              s.mount(e);
            }
            this.root.nodes.add(this);
            if (this.parent) {
              this.parent.children.add(this);
            }
            if (this.root.hasTreeAnimated && (r || n)) {
              this.isLayoutDirty = true;
            }
            if (t) {
              let n;
              let r = 0;
              const s = () => (this.root.updateBlockedByResize = false);
              Et.Wi.read(() => {
                r = window.innerWidth;
              });
              t(e, () => {
                const t = window.innerWidth;
                if (t !== r) {
                  r = t;
                  this.root.updateBlockedByResize = true;
                  if (n) {
                    n();
                  }
                  n = je(s, 250);
                  if (fe.hasAnimatedSinceResize) {
                    fe.hasAnimatedSinceResize = false;
                    this.nodes.forEach(Tn);
                  }
                }
              });
            }
            if (n) {
              this.root.registerSharedNode(n, this);
            }
            if (this.options.animate !== false && s && (n || r)) {
              this.addEventListener(
                "didUpdate",
                ({
                  delta: t,
                  hasLayoutChanged: e,
                  hasRelativeLayoutChanged: n,
                  layout: r,
                }) => {
                  if (this.isTreeAnimationBlocked()) {
                    this.target = undefined;
                    this.relativeTarget = undefined;
                    return;
                  }
                  const i =
                    this.options.transition || s.getDefaultTransition() || Dn;
                  const {
                    onLayoutAnimationStart: o,
                    onLayoutAnimationComplete: a,
                  } = s.getProps();
                  const c = !this.targetLayout || !an(this.targetLayout, r);
                  const u = !e && n;
                  if (
                    this.options.layoutRoot ||
                    this.resumeFrom ||
                    u ||
                    (e && (c || !this.currentAnimation))
                  ) {
                    if (this.resumeFrom) {
                      this.resumingFrom = this.resumeFrom;
                      this.resumingFrom.resumingFrom = undefined;
                    }
                    const e = {
                      ...(0, Ce.e)(i, "layout"),
                      onPlay: o,
                      onComplete: a,
                    };
                    if (s.shouldReduceMotion || this.options.layoutRoot) {
                      e.delay = 0;
                      e.type = false;
                    }
                    this.startAnimation(e);
                    this.setAnimationOrigin(t, u);
                  } else {
                    if (!e) {
                      Tn(this);
                    }
                    if (this.isLead() && this.options.onExitComplete) {
                      this.options.onExitComplete();
                    }
                  }
                  this.targetLayout = r;
                },
              );
            }
          }
          unmount() {
            if (this.options.layoutId) {
              this.willUpdate();
            }
            this.root.nodes.remove(this);
            const t = this.getStack();
            if (t) {
              t.remove(this);
            }
            if (this.parent) {
              this.parent.children.delete(this);
            }
            this.instance = undefined;
            this.eventHandlers.clear();
            (0, Et.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = true;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = false;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              false
            );
          }
          startUpdate() {
            if (!this.isUpdateBlocked()) {
              this.isUpdating = true;
              if (this.nodes) {
                this.nodes.forEach(In);
              }
              this.animationId++;
            }
          }
          getTransformTemplate() {
            const { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = true) {
            this.root.hasTreeAnimated = true;
            if (this.root.isUpdateBlocked()) {
              if (this.options.onExitComplete) {
                this.options.onExitComplete();
              }
              return;
            }
            if (
              window.MotionCancelOptimisedAnimation &&
              !this.hasCheckedOptimisedAppear
            ) {
              gn(this);
            }
            if (!this.root.isUpdating) {
              this.root.startUpdate();
            }
            if (this.isLayoutDirty) {
              return;
            }
            this.isLayoutDirty = true;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = true;
              e.updateScroll("snapshot");
              if (e.options.layoutRoot) {
                e.willUpdate(false);
              }
            }
            const { layoutId: e, layout: n } = this.options;
            if (e === undefined && !n) {
              return;
            }
            const r = this.getTransformTemplate();
            this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : undefined;
            this.updateSnapshot();
            if (t) {
              this.notifyListeners("willUpdate");
            }
          }
          update() {
            this.updateScheduled = false;
            if (this.isUpdateBlocked()) {
              this.unblockUpdate();
              this.clearAllSnapshots();
              this.nodes.forEach(xn);
              return;
            }
            if (this.animationId <= this.animationCommitId) {
              this.nodes.forEach(kn);
              return;
            }
            this.animationCommitId = this.animationId;
            if (this.isUpdating) {
              this.isUpdating = false;
              this.nodes.forEach(En);
              this.nodes.forEach(vn);
              this.nodes.forEach(bn);
            } else {
              this.nodes.forEach(kn);
            }
            this.clearAllSnapshots();
            const t = Me.X.now();
            Et.w0.delta = (0, ne.u)(0, 1000 / 60, t - Et.w0.timestamp);
            Et.w0.timestamp = t;
            Et.w0.isProcessing = true;
            Et.yL.update.process(Et.w0);
            Et.yL.preRender.process(Et.w0);
            Et.yL.render.process(Et.w0);
            Et.w0.isProcessing = false;
          }
          didUpdate() {
            if (!this.updateScheduled) {
              this.updateScheduled = true;
              he.g.read(this.scheduleUpdate);
            }
          }
          clearAllSnapshots() {
            this.nodes.forEach(wn);
            this.sharedNodes.forEach(An);
          }
          scheduleUpdateProjection() {
            if (!this.projectionUpdateScheduled) {
              this.projectionUpdateScheduled = true;
              Et.Wi.preRender(this.updateProjection, false, true);
            }
          }
          scheduleCheckAfterUnmount() {
            Et.Wi.postRender(() => {
              if (this.isLayoutDirty) {
                this.root.didUpdate();
              } else {
                this.root.checkUpdateFailed();
              }
            });
          }
          updateSnapshot() {
            if (!this.snapshot && this.instance) {
              this.snapshot = this.measure();
              if (
                !!this.snapshot &&
                !Dt(this.snapshot.measuredBox.x) &&
                !Dt(this.snapshot.measuredBox.y)
              ) {
                this.snapshot = undefined;
              }
            }
          }
          updateLayout() {
            if (!this.instance) {
              return;
            }
            this.updateScroll();
            if (
              (!this.options.alwaysMeasureLayout || !this.isLead()) &&
              !this.isLayoutDirty
            ) {
              return;
            }
            if (this.resumeFrom && !this.resumeFrom.instance) {
              for (let t = 0; t < this.path.length; t++) {
                this.path[t].updateScroll();
              }
            }
            const t = this.layout;
            this.layout = this.measure(false);
            this.layoutCorrected = (0, Bt.dO)();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: e } = this.options;
            if (e) {
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : undefined,
              );
            }
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            if (
              this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t
            ) {
              e = false;
            }
            if (e && this.instance) {
              const e = r(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: n(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!s) {
              return;
            }
            const t =
              this.isLayoutDirty ||
              this.shouldResetTransform ||
              this.options.alwaysMeasureLayout;
            const e = this.projectionDelta && !rn(this.projectionDelta);
            const n = this.getTransformTemplate();
            const r = n ? n(this.latestValues, "") : undefined;
            const i = r !== this.prevTransformTemplateValue;
            if (
              t &&
              this.instance &&
              (e || (0, dn.ud)(this.latestValues) || i)
            ) {
              s(this.instance, r);
              this.shouldResetTransform = false;
              this.scheduleRender();
            }
          }
          measure(t = true) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var r;
            if (t) {
              n = this.removeTransform(n);
            }
            jn((r = n).x);
            jn(r.y);
            return {
              animationId: this.root.animationId,
              measuredBox: e,
              layoutBox: n,
              latestValues: {},
              source: this.id,
            };
          }
          measurePageBox() {
            const { visualElement: t } = this.options;
            if (!t) {
              return (0, Bt.dO)();
            }
            const e = t.measureViewportBox();
            if (!this.scroll?.wasRoot && !this.path.some($n)) {
              const { scroll: t } = this.root;
              if (t) {
                (0, Ge.am)(e.x, t.offset.x);
                (0, Ge.am)(e.y, t.offset.y);
              }
            }
            return e;
          }
          removeElementScroll(t) {
            const e = (0, Bt.dO)();
            Xe(e, t);
            if (this.scroll?.wasRoot) {
              return e;
            }
            for (let n = 0; n < this.path.length; n++) {
              const r = this.path[n];
              const { scroll: s, options: i } = r;
              if (r !== this.root && s && i.layoutScroll) {
                if (s.wasRoot) {
                  Xe(e, t);
                }
                (0, Ge.am)(e.x, s.offset.x);
                (0, Ge.am)(e.y, s.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = false) {
            const n = (0, Bt.dO)();
            Xe(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const r = this.path[t];
              if (!e && r.options.layoutScroll && r.scroll && r !== r.root) {
                (0, Ge.D2)(n, {
                  x: -r.scroll.offset.x,
                  y: -r.scroll.offset.y,
                });
              }
              if ((0, dn.ud)(r.latestValues)) {
                (0, Ge.D2)(n, r.latestValues);
              }
            }
            if ((0, dn.ud)(this.latestValues)) {
              (0, Ge.D2)(n, this.latestValues);
            }
            return n;
          }
          removeTransform(t) {
            const e = (0, Bt.dO)();
            Xe(e, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              if (!n.instance) {
                continue;
              }
              if (!(0, dn.ud)(n.latestValues)) {
                continue;
              }
              if ((0, dn.Lj)(n.latestValues)) {
                n.updateSnapshot();
              }
              const r = (0, Bt.dO)();
              Xe(r, n.measurePageBox());
              en(
                e,
                n.latestValues,
                n.snapshot ? n.snapshot.layoutBox : undefined,
                r,
              );
            }
            if ((0, dn.ud)(this.latestValues)) {
              en(e, this.latestValues);
            }
            return e;
          }
          setTargetDelta(t) {
            this.targetDelta = t;
            this.root.scheduleUpdateProjection();
            this.isProjectionDirty = true;
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: t.crossfade === undefined || t.crossfade,
            };
          }
          clearMeasurements() {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
          }
          forceRelativeParentToResolveTarget() {
            if (
              this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== Et.w0.timestamp
            ) {
              this.relativeParent.resolveTargetDelta(true);
            }
          }
          resolveTargetDelta(t = false) {
            const e = this.getLead();
            this.isProjectionDirty ||= e.isProjectionDirty;
            this.isTransformDirty ||= e.isTransformDirty;
            this.isSharedProjectionDirty ||= e.isSharedProjectionDirty;
            const n = Boolean(this.resumingFrom) || this !== e;
            if (
              !t &&
              (!n || !this.isSharedProjectionDirty) &&
              !this.isProjectionDirty &&
              !this.parent?.isProjectionDirty &&
              !this.attemptToResolveRelativeTarget &&
              !this.root.updateBlockedByResize
            ) {
              return;
            }
            const { layout: r, layoutId: s } = this.options;
            if (this.layout && (r || s)) {
              this.resolvedRelativeTargetAt = Et.w0.timestamp;
              if (!this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                if (t && t.layout && this.animationProgress !== 1) {
                  this.relativeParent = t;
                  this.forceRelativeParentToResolveTarget();
                  this.relativeTarget = (0, Bt.dO)();
                  this.relativeTargetOrigin = (0, Bt.dO)();
                  $t(
                    this.relativeTargetOrigin,
                    this.layout.layoutBox,
                    t.layout.layoutBox,
                  );
                  Xe(this.relativeTarget, this.relativeTargetOrigin);
                } else {
                  this.relativeParent = this.relativeTarget = undefined;
                }
              }
              if (this.relativeTarget || this.targetDelta) {
                var i;
                var o;
                var a;
                if (!this.target) {
                  this.target = (0, Bt.dO)();
                  this.targetWithTransforms = (0, Bt.dO)();
                }
                if (
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.relativeParent &&
                  this.relativeParent.target
                ) {
                  this.forceRelativeParentToResolveTarget();
                  i = this.target;
                  o = this.relativeTarget;
                  a = this.relativeParent.target;
                  jt(i.x, o.x, a.x);
                  jt(i.y, o.y, a.y);
                } else if (this.targetDelta) {
                  if (Boolean(this.resumingFrom)) {
                    this.target = this.applyTransform(this.layout.layoutBox);
                  } else {
                    Xe(this.target, this.layout.layoutBox);
                  }
                  (0, Ge.o2)(this.target, this.targetDelta);
                } else {
                  Xe(this.target, this.layout.layoutBox);
                }
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = false;
                  const t = this.getClosestProjectingParent();
                  if (
                    t &&
                    Boolean(t.resumingFrom) === Boolean(this.resumingFrom) &&
                    !t.options.layoutScroll &&
                    t.target &&
                    this.animationProgress !== 1
                  ) {
                    this.relativeParent = t;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = (0, Bt.dO)();
                    this.relativeTargetOrigin = (0, Bt.dO)();
                    $t(this.relativeTargetOrigin, this.target, t.target);
                    Xe(this.relativeTarget, this.relativeTargetOrigin);
                  } else {
                    this.relativeParent = this.relativeTarget = undefined;
                  }
                }
                if (ke.f.value) {
                  hn.calculatedTargetDeltas++;
                }
              }
            }
          }
          getClosestProjectingParent() {
            if (
              this.parent &&
              !(0, dn.Lj)(this.parent.latestValues) &&
              !(0, dn.D_)(this.parent.latestValues)
            ) {
              if (this.parent.isProjecting()) {
                return this.parent;
              } else {
                return this.parent.getClosestProjectingParent();
              }
            }
          }
          isProjecting() {
            return Boolean(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout,
            );
          }
          calcProjection() {
            const t = this.getLead();
            const e = Boolean(this.resumingFrom) || this !== t;
            let n = true;
            if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
              n = false;
            }
            if (e && (this.isSharedProjectionDirty || this.isTransformDirty)) {
              n = false;
            }
            if (this.resolvedRelativeTargetAt === Et.w0.timestamp) {
              n = false;
            }
            if (n) {
              return;
            }
            const { layout: r, layoutId: s } = this.options;
            this.isTreeAnimating = Boolean(
              (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation,
            );
            if (!this.isTreeAnimating) {
              this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || (!r && !s)) {
              return;
            }
            Xe(this.layoutCorrected, this.layout.layoutBox);
            const i = this.treeScale.x;
            const o = this.treeScale.y;
            (0, Ge.YY)(this.layoutCorrected, this.treeScale, this.path, e);
            if (
              !!t.layout &&
              !t.target &&
              (this.treeScale.x !== 1 || this.treeScale.y !== 1)
            ) {
              t.target = t.layout.layoutBox;
              t.targetWithTransforms = (0, Bt.dO)();
            }
            const { target: a } = t;
            if (a) {
              if (this.projectionDelta && this.prevProjectionDelta) {
                Ye(this.prevProjectionDelta.x, this.projectionDelta.x);
                Ye(this.prevProjectionDelta.y, this.projectionDelta.y);
              } else {
                this.createProjectionDeltas();
              }
              Nt(
                this.projectionDelta,
                this.layoutCorrected,
                a,
                this.latestValues,
              );
              if (
                this.treeScale.x !== i ||
                this.treeScale.y !== o ||
                !un(this.projectionDelta.x, this.prevProjectionDelta.x) ||
                !un(this.projectionDelta.y, this.prevProjectionDelta.y)
              ) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", a);
              }
              if (ke.f.value) {
                hn.calculatedProjections++;
              }
            } else if (this.prevProjectionDelta) {
              this.createProjectionDeltas();
              this.scheduleRender();
            }
          }
          hide() {
            this.isVisible = false;
          }
          show() {
            this.isVisible = true;
          }
          scheduleRender(t = true) {
            this.options.visualElement?.scheduleRender();
            if (t) {
              const t = this.getStack();
              if (t) {
                t.scheduleRender();
              }
            }
            if (this.resumingFrom && !this.resumingFrom.instance) {
              this.resumingFrom = undefined;
            }
          }
          createProjectionDeltas() {
            this.prevProjectionDelta = (0, Bt.wc)();
            this.projectionDelta = (0, Bt.wc)();
            this.projectionDeltaWithTransform = (0, Bt.wc)();
          }
          setAnimationOrigin(t, e = false) {
            const n = this.snapshot;
            const r = n ? n.latestValues : {};
            const s = {
              ...this.latestValues,
            };
            const i = (0, Bt.wc)();
            if (
              !this.relativeParent ||
              !this.relativeParent.options.layoutRoot
            ) {
              this.relativeTarget = this.relativeTargetOrigin = undefined;
            }
            this.attemptToResolveRelativeTarget = !e;
            const o = (0, Bt.dO)();
            const a =
              (n ? n.source : undefined) !==
              (this.layout ? this.layout.source : undefined);
            const c = this.getStack();
            const u = !c || c.members.length <= 1;
            const l = Boolean(
              a && !u && this.options.crossfade === true && !this.path.some(On),
            );
            let d;
            this.animationProgress = 0;
            this.mixTargetDelta = (e) => {
              const n = e / 1000;
              var c;
              var h;
              var p;
              var f;
              var m;
              var g;
              Rn(i.x, t.x, n);
              Rn(i.y, t.y, n);
              this.setTargetDelta(i);
              if (
                this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout
              ) {
                $t(
                  o,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox,
                );
                p = this.relativeTarget;
                f = this.relativeTargetOrigin;
                m = o;
                g = n;
                Pn(p.x, f.x, m.x, g);
                Pn(p.y, f.y, m.y, g);
                if (
                  d &&
                  ((c = this.relativeTarget),
                  (h = d),
                  sn(c.x, h.x) && sn(c.y, h.y))
                ) {
                  this.isProjectionDirty = false;
                }
                d ||= (0, Bt.dO)();
                Xe(d, this.relativeTarget);
              }
              if (a) {
                this.animationValues = s;
                (function (t, e, n, r, s, i) {
                  if (s) {
                    t.opacity = (0, Tt.t)(0, n.opacity ?? 1, We(r));
                    t.opacityExit = (0, Tt.t)(e.opacity ?? 1, 0, qe(r));
                  } else if (i) {
                    t.opacity = (0, Tt.t)(e.opacity ?? 1, n.opacity ?? 1, r);
                  }
                  for (let s = 0; s < Be; s++) {
                    const i = `border${$e[s]}Radius`;
                    let o = ze(e, i);
                    let a = ze(n, i);
                    if (o !== undefined || a !== undefined) {
                      o ||= 0;
                      a ||= 0;
                      if (o === 0 || a === 0 || Ue(o) === Ue(a)) {
                        t[i] = Math.max((0, Tt.t)(Ve(o), Ve(a), r), 0);
                        if (kt.aQ.test(a) || kt.aQ.test(o)) {
                          t[i] += "%";
                        }
                      } else {
                        t[i] = a;
                      }
                    }
                  }
                  if (e.rotate || n.rotate) {
                    t.rotate = (0, Tt.t)(e.rotate || 0, n.rotate || 0, r);
                  }
                })(s, r, this.latestValues, n, l, u);
              }
              this.root.scheduleUpdateProjection();
              this.scheduleRender();
              this.animationProgress = n;
            };
            this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart");
            this.currentAnimation?.stop();
            this.resumingFrom?.currentAnimation?.stop();
            if (this.pendingAnimation) {
              (0, Et.Pn)(this.pendingAnimation);
              this.pendingAnimation = undefined;
            }
            this.pendingAnimation = Et.Wi.update(() => {
              fe.hasAnimatedSinceResize = true;
              Ie.P.layout++;
              this.motionValue ||= (0, Ae.BX)(0);
              this.currentAnimation = (0, Pe.D)(this.motionValue, [0, 1000], {
                ...t,
                velocity: 0,
                isSync: true,
                onUpdate: (e) => {
                  this.mixTargetDelta(e);
                  if (t.onUpdate) {
                    t.onUpdate(e);
                  }
                },
                onStop: () => {
                  Ie.P.layout--;
                },
                onComplete: () => {
                  Ie.P.layout--;
                  if (t.onComplete) {
                    t.onComplete();
                  }
                  this.completeAnimation();
                },
              });
              if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = this.currentAnimation;
              }
              this.pendingAnimation = undefined;
            });
          }
          completeAnimation() {
            if (this.resumingFrom) {
              this.resumingFrom.currentAnimation = undefined;
              this.resumingFrom.preserveOpacity = undefined;
            }
            const t = this.getStack();
            if (t) {
              t.exitAnimationComplete();
            }
            this.resumingFrom =
              this.currentAnimation =
              this.animationValues =
                undefined;
            this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            if (this.currentAnimation) {
              if (this.mixTargetDelta) {
                this.mixTargetDelta(1000);
              }
              this.currentAnimation.stop();
            }
            this.completeAnimation();
          }
          applyTransformsToTarget() {
            const t = this.getLead();
            let {
              targetWithTransforms: e,
              target: n,
              layout: r,
              latestValues: s,
            } = t;
            if (e && n && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                Fn(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox,
                )
              ) {
                n = this.target || (0, Bt.dO)();
                const e = Dt(this.layout.layoutBox.x);
                n.x.min = t.target.x.min;
                n.x.max = n.x.min + e;
                const r = Dt(this.layout.layoutBox.y);
                n.y.min = t.target.y.min;
                n.y.max = n.y.min + r;
              }
              Xe(e, n);
              (0, Ge.D2)(e, s);
              Nt(this.projectionDeltaWithTransform, this.layoutCorrected, e, s);
            }
          }
          registerSharedNode(t, e) {
            if (!this.sharedNodes.has(t)) {
              this.sharedNodes.set(t, new ln());
            }
            this.sharedNodes.get(t).add(e);
            const n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : undefined,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : undefined,
            });
          }
          isLead() {
            const t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            const { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            const { layoutId: t } = this.options;
            if (t) {
              return this.getStack()?.prevLead;
            } else {
              return undefined;
            }
          }
          getStack() {
            const { layoutId: t } = this.options;
            if (t) {
              return this.root.sharedNodes.get(t);
            }
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n,
          } = {}) {
            const r = this.getStack();
            if (r) {
              r.promote(this, n);
            }
            if (t) {
              this.projectionDelta = undefined;
              this.needsReset = true;
            }
            if (e) {
              this.setOptions({
                transition: e,
              });
            }
          }
          relegate() {
            const t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            const { visualElement: t } = this.options;
            if (!t) {
              return;
            }
            let e = false;
            const { latestValues: n } = t;
            if (
              n.z ||
              n.rotate ||
              n.rotateX ||
              n.rotateY ||
              n.rotateZ ||
              n.skewX ||
              n.skewY
            ) {
              e = true;
            }
            if (!e) {
              return;
            }
            const r = {};
            if (n.z) {
              mn("z", t, r, this.animationValues);
            }
            for (let e = 0; e < pn.length; e++) {
              mn(`rotate${pn[e]}`, t, r, this.animationValues);
              mn(`skew${pn[e]}`, t, r, this.animationValues);
            }
            t.render();
            for (const e in r) {
              t.setStaticValue(e, r[e]);
              if (this.animationValues) {
                this.animationValues[e] = r[e];
              }
            }
            t.scheduleRender();
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) {
              return;
            }
            if (!this.isVisible) {
              t.visibility = "hidden";
              return;
            }
            const n = this.getTransformTemplate();
            if (this.needsReset) {
              this.needsReset = false;
              t.visibility = "";
              t.opacity = "";
              t.pointerEvents = F(e?.pointerEvents) || "";
              t.transform = n ? n(this.latestValues, "") : "none";
              return;
            }
            const r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              if (this.options.layoutId) {
                t.opacity =
                  this.latestValues.opacity !== undefined
                    ? this.latestValues.opacity
                    : 1;
                t.pointerEvents = F(e?.pointerEvents) || "";
              }
              if (this.hasProjected && !(0, dn.ud)(this.latestValues)) {
                t.transform = n ? n({}, "") : "none";
                this.hasProjected = false;
              }
              return;
            }
            t.visibility = "";
            const s = r.animationValues || r.latestValues;
            this.applyTransformsToTarget();
            let i = (function (t, e, n) {
              let r = "";
              const s = t.x.translate / e.x;
              const i = t.y.translate / e.y;
              const o = n?.z || 0;
              if (s || i || o) {
                r = `translate3d(${s}px, ${i}px, ${o}px) `;
              }
              if (e.x !== 1 || e.y !== 1) {
                r += `scale(${1 / e.x}, ${1 / e.y}) `;
              }
              if (n) {
                const {
                  transformPerspective: t,
                  rotate: e,
                  rotateX: s,
                  rotateY: i,
                  skewX: o,
                  skewY: a,
                } = n;
                if (t) {
                  r = `perspective(${t}px) ${r}`;
                }
                if (e) {
                  r += `rotate(${e}deg) `;
                }
                if (s) {
                  r += `rotateX(${s}deg) `;
                }
                if (i) {
                  r += `rotateY(${i}deg) `;
                }
                if (o) {
                  r += `skewX(${o}deg) `;
                }
                if (a) {
                  r += `skewY(${a}deg) `;
                }
              }
              const a = t.x.scale * e.x;
              const c = t.y.scale * e.y;
              if (a !== 1 || c !== 1) {
                r += `scale(${a}, ${c})`;
              }
              return r || "none";
            })(this.projectionDeltaWithTransform, this.treeScale, s);
            if (n) {
              i = n(s, i);
            }
            t.transform = i;
            const { x: o, y: a } = this.projectionDelta;
            t.transformOrigin = `${o.origin * 100}% ${a.origin * 100}% 0`;
            if (r.animationValues) {
              t.opacity =
                r === this
                  ? (s.opacity ?? this.latestValues.opacity ?? 1)
                  : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit;
            } else {
              t.opacity =
                r === this
                  ? s.opacity !== undefined
                    ? s.opacity
                    : ""
                  : s.opacityExit !== undefined
                    ? s.opacityExit
                    : 0;
            }
            for (const e in be.P) {
              if (s[e] === undefined) {
                continue;
              }
              const { correct: n, applyTo: o, isCSSVariable: a } = be.P[e];
              const c = i === "none" ? s[e] : n(s[e], r);
              if (o) {
                const e = o.length;
                for (let n = 0; n < e; n++) {
                  t[o[n]] = c;
                }
              } else if (a) {
                this.options.visualElement.renderState.vars[e] = c;
              } else {
                t[e] = c;
              }
            }
            if (this.options.layoutId) {
              t.pointerEvents = r === this ? F(e?.pointerEvents) || "" : "none";
            }
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
          }
          resetTree() {
            this.root.nodes.forEach((t) => t.currentAnimation?.stop());
            this.root.nodes.forEach(xn);
            this.root.sharedNodes.clear();
          }
        };
      }
      function vn(t) {
        t.updateLayout();
      }
      function bn(t) {
        const e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          const { layoutBox: n, measuredBox: r } = t.layout;
          const { animationType: s } = t.options;
          const i = e.source !== t.layout.source;
          if (s === "size") {
            Vt((t) => {
              const r = i ? e.measuredBox[t] : e.layoutBox[t];
              const s = Dt(r);
              r.min = n[t].min;
              r.max = r.min + s;
            });
          } else if (Fn(s, e.layoutBox, n)) {
            Vt((r) => {
              const s = i ? e.measuredBox[r] : e.layoutBox[r];
              const o = Dt(n[r]);
              s.max = s.min + o;
              if (t.relativeTarget && !t.currentAnimation) {
                t.isProjectionDirty = true;
                t.relativeTarget[r].max = t.relativeTarget[r].min + o;
              }
            });
          }
          const o = (0, Bt.wc)();
          Nt(o, n, e.layoutBox);
          const a = (0, Bt.wc)();
          if (i) {
            Nt(a, t.applyTransform(r, true), e.measuredBox);
          } else {
            Nt(a, n, e.layoutBox);
          }
          const c = !rn(o);
          let u = false;
          if (!t.resumeFrom) {
            const r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              const { snapshot: s, layout: i } = r;
              if (s && i) {
                const o = (0, Bt.dO)();
                $t(o, e.layoutBox, s.layoutBox);
                const a = (0, Bt.dO)();
                $t(a, n, i.layoutBox);
                if (!an(o, a)) {
                  u = true;
                }
                if (r.options.layoutRoot) {
                  t.relativeTarget = a;
                  t.relativeTargetOrigin = o;
                  t.relativeParent = r;
                }
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: n,
            snapshot: e,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: c,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          const { onExitComplete: e } = t.options;
          if (e) {
            e();
          }
        }
        t.options.transition = undefined;
      }
      function Sn(t) {
        if (ke.f.value) {
          hn.nodes++;
        }
        if (t.parent) {
          if (!t.isProjecting()) {
            t.isProjectionDirty = t.parent.isProjectionDirty;
          }
          t.isSharedProjectionDirty ||= Boolean(
            t.isProjectionDirty ||
            t.parent.isProjectionDirty ||
            t.parent.isSharedProjectionDirty,
          );
          t.isTransformDirty ||= t.parent.isTransformDirty;
        }
      }
      function _n(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            false;
      }
      function wn(t) {
        t.clearSnapshot();
      }
      function xn(t) {
        t.clearMeasurements();
      }
      function kn(t) {
        t.isLayoutDirty = false;
      }
      function En(t) {
        const { visualElement: e } = t.options;
        if (e && e.getProps().onBeforeLayoutMeasure) {
          e.notify("BeforeLayoutMeasure");
        }
        t.resetTransform();
      }
      function Tn(t) {
        t.finishAnimation();
        t.targetDelta = t.relativeTarget = t.target = undefined;
        t.isProjectionDirty = true;
      }
      function Cn(t) {
        t.resolveTargetDelta();
      }
      function Mn(t) {
        t.calcProjection();
      }
      function In(t) {
        t.resetSkewAndRotation();
      }
      function An(t) {
        t.removeLeadSnapshot();
      }
      function Rn(t, e, n) {
        t.translate = (0, Tt.t)(e.translate, 0, n);
        t.scale = (0, Tt.t)(e.scale, 1, n);
        t.origin = e.origin;
        t.originPoint = e.originPoint;
      }
      function Pn(t, e, n, r) {
        t.min = (0, Tt.t)(e.min, n.min, r);
        t.max = (0, Tt.t)(e.max, n.max, r);
      }
      function On(t) {
        return t.animationValues && t.animationValues.opacityExit !== undefined;
      }
      const Dn = {
        duration: 0.45,
        ease: [0.4, 0, 0.1, 1],
      };
      const Ln = (t) =>
        typeof navigator != "undefined" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(t);
      const Nn = Ln("applewebkit/") && !Ln("chrome/") ? Math.round : _t.Z;
      function jn(t) {
        t.min = Nn(t.min);
        t.max = Nn(t.max);
      }
      function Fn(t, e, n) {
        return (
          t === "position" ||
          (t === "preserve-aspect" &&
            ((r = cn(e)), (s = cn(n)), (i = 0.2), !(Math.abs(r - s) <= i)))
        );
        var r;
        var s;
        var i;
      }
      function $n(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      const Bn = yn({
        attachResizeListener: (t, e) => It(t, "resize", e),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body.scrollLeft,
          y: document.documentElement.scrollTop || document.body.scrollTop,
        }),
        checkIsScrollRoot: () => true,
      });
      const Vn = {
        current: undefined,
      };
      const Un = yn({
        measureScroll: (t) => ({
          x: t.scrollLeft,
          y: t.scrollTop,
        }),
        defaultParent: () => {
          if (!Vn.current) {
            const t = new Bn({});
            t.mount(window);
            t.setOptions({
              layoutScroll: true,
            });
            Vn.current = t;
          }
          return Vn.current;
        },
        resetTransform: (t, e) => {
          t.style.transform = e !== undefined ? e : "none";
        },
        checkIsScrollRoot: (t) =>
          Boolean(window.getComputedStyle(t).position === "fixed"),
      });
      const zn = {
        pan: {
          Feature: class extends vt {
            constructor() {
              super(...arguments);
              this.removePointerDownListener = _t.Z;
            }
            onPointerDown(t) {
              this.session = new Xt(t, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: zt(this.node),
              });
            }
            createPanHandlers() {
              const {
                onPanSessionStart: t,
                onPanStart: e,
                onPan: n,
                onPanEnd: r,
              } = this.node.getProps();
              return {
                onSessionStart: de(t),
                onStart: de(e),
                onMove: n,
                onEnd: (t, e) => {
                  delete this.session;
                  if (r) {
                    Et.Wi.postRender(() => r(t, e));
                  }
                },
              };
            }
            mount() {
              this.removePointerDownListener = Pt(
                this.node.current,
                "pointerdown",
                (t) => this.onPointerDown(t),
              );
            }
            update() {
              if (this.session) {
                this.session.updateHandlers(this.createPanHandlers());
              }
            }
            unmount() {
              this.removePointerDownListener();
              if (this.session) {
                this.session.end();
              }
            }
          },
        },
        drag: {
          Feature: class extends vt {
            constructor(t) {
              super(t);
              this.removeGroupControls = _t.Z;
              this.removeListeners = _t.Z;
              this.controls = new ue(t);
            }
            mount() {
              const { dragControls: t } = this.node.getProps();
              if (t) {
                this.removeGroupControls = t.subscribe(this.controls);
              }
              this.removeListeners = this.controls.addListeners() || _t.Z;
            }
            unmount() {
              this.removeGroupControls();
              this.removeListeners();
            }
          },
          ProjectionNode: Un,
          MeasureLayout: we,
        },
      };
      var Wn = n(6419);
      function qn(t, e) {
        const n = (0, Wn.I)(t);
        const r = new AbortController();
        return [
          n,
          {
            passive: true,
            ...e,
            signal: r.signal,
          },
          () => r.abort(),
        ];
      }
      function Hn(t) {
        return t.pointerType !== "touch" && !xt();
      }
      function Kn(t, e, n) {
        const { props: r } = t;
        if (t.animationState && r.whileHover) {
          t.animationState.setActive("whileHover", n === "Start");
        }
        const s = r["onHover" + n];
        if (s) {
          Et.Wi.postRender(() => s(e, Rt(e)));
        }
      }
      var Xn = n(80602);
      const Yn = (t, e) => !!e && (t === e || Yn(t, e.parentElement));
      const Gn = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
      const Jn = new WeakSet();
      function Zn(t) {
        return (e) => {
          if (e.key === "Enter") {
            t(e);
          }
        };
      }
      function Qn(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, {
            isPrimary: true,
            bubbles: true,
          }),
        );
      }
      function tr(t) {
        return At(t) && !xt();
      }
      function er(t, e, n = {}) {
        const [r, s, i] = qn(t, n);
        const o = (t) => {
          const r = t.currentTarget;
          if (!tr(t)) {
            return;
          }
          Jn.add(r);
          const i = e(r, t);
          const o = (t, e) => {
            window.removeEventListener("pointerup", a);
            window.removeEventListener("pointercancel", c);
            if (Jn.has(r)) {
              Jn.delete(r);
            }
            if (tr(t) && typeof i == "function") {
              i(t, {
                success: e,
              });
            }
          };
          const a = (t) => {
            o(
              t,
              r === window ||
                r === document ||
                n.useGlobalTarget ||
                Yn(r, t.target),
            );
          };
          const c = (t) => {
            o(t, false);
          };
          window.addEventListener("pointerup", a, s);
          window.addEventListener("pointercancel", c, s);
        };
        r.forEach((t) => {
          var e;
          (n.useGlobalTarget ? window : t).addEventListener(
            "pointerdown",
            o,
            s,
          );
          if ((0, Xn.R)(t)) {
            t.addEventListener("focus", (t) =>
              ((t, e) => {
                const n = t.currentTarget;
                if (!n) {
                  return;
                }
                const r = Zn(() => {
                  if (Jn.has(n)) {
                    return;
                  }
                  Qn(n, "down");
                  const t = Zn(() => {
                    Qn(n, "up");
                  });
                  n.addEventListener("keyup", t, e);
                  n.addEventListener("blur", () => Qn(n, "cancel"), e);
                });
                n.addEventListener("keydown", r, e);
                n.addEventListener(
                  "blur",
                  () => n.removeEventListener("keydown", r),
                  e,
                );
              })(t, s),
            );
            e = t;
            if (
              !Gn.has(e.tagName) &&
              e.tabIndex === -1 &&
              !t.hasAttribute("tabindex")
            ) {
              t.tabIndex = 0;
            }
          }
        });
        return i;
      }
      function nr(t, e, n) {
        const { props: r } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) {
          return;
        }
        if (t.animationState && r.whileTap) {
          t.animationState.setActive("whileTap", n === "Start");
        }
        const s = r["onTap" + (n === "End" ? "" : n)];
        if (s) {
          Et.Wi.postRender(() => s(e, Rt(e)));
        }
      }
      const rr = new WeakMap();
      const sr = new WeakMap();
      const ir = (t) => {
        const e = rr.get(t.target);
        if (e) {
          e(t);
        }
      };
      const or = (t) => {
        t.forEach(ir);
      };
      function ar(t, e, n) {
        const r = (function ({ root: t, ...e }) {
          const n = t || document;
          if (!sr.has(n)) {
            sr.set(n, {});
          }
          const r = sr.get(n);
          const s = JSON.stringify(e);
          r[s] ||= new IntersectionObserver(or, {
            root: t,
            ...e,
          });
          return r[s];
        })(e);
        rr.set(t, n);
        r.observe(t);
        return () => {
          rr.delete(t);
          r.unobserve(t);
        };
      }
      const cr = {
        some: 0,
        all: 1,
      };
      const ur = {
        inView: {
          Feature: class extends vt {
            constructor() {
              super(...arguments);
              this.hasEnteredView = false;
              this.isInView = false;
            }
            startObserver() {
              this.unmount();
              const { viewport: t = {} } = this.node.getProps();
              const { root: e, margin: n, amount: r = "some", once: s } = t;
              const i = {
                root: e ? e.current : undefined,
                rootMargin: n,
                threshold: typeof r == "number" ? r : cr[r],
              };
              return ar(this.node.current, i, (t) => {
                const { isIntersecting: e } = t;
                if (this.isInView === e) {
                  return;
                }
                this.isInView = e;
                if (s && !e && this.hasEnteredView) {
                  return;
                }
                if (e) {
                  this.hasEnteredView = true;
                }
                if (this.node.animationState) {
                  this.node.animationState.setActive("whileInView", e);
                }
                const { onViewportEnter: n, onViewportLeave: r } =
                  this.node.getProps();
                const i = e ? n : r;
                if (i) {
                  i(t);
                }
              });
            }
            mount() {
              this.startObserver();
            }
            update() {
              if (typeof IntersectionObserver == "undefined") {
                return;
              }
              const { props: t, prevProps: e } = this.node;
              if (
                ["amount", "margin", "root"].some(
                  (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
                    return (n) => t[n] !== e[n];
                  })(t, e),
                )
              ) {
                this.startObserver();
              }
            }
            unmount() {}
          },
        },
        tap: {
          Feature: class extends vt {
            mount() {
              const { current: t } = this.node;
              if (t) {
                this.unmount = er(
                  t,
                  (t, e) => {
                    nr(this.node, e, "Start");
                    return (t, { success: e }) =>
                      nr(this.node, t, e ? "End" : "Cancel");
                  },
                  {
                    useGlobalTarget: this.node.props.globalTapTarget,
                  },
                );
              }
            }
            unmount() {}
          },
        },
        focus: {
          Feature: class extends vt {
            constructor() {
              super(...arguments);
              this.isActive = false;
            }
            onFocus() {
              let t = false;
              try {
                t = this.node.current.matches(":focus-visible");
              } catch (e) {
                t = true;
              }
              if (t && this.node.animationState) {
                this.node.animationState.setActive("whileFocus", true);
                this.isActive = true;
              }
            }
            onBlur() {
              if (this.isActive && this.node.animationState) {
                this.node.animationState.setActive("whileFocus", false);
                this.isActive = false;
              }
            }
            mount() {
              this.unmount = (0, qt.z)(
                It(this.node.current, "focus", () => this.onFocus()),
                It(this.node.current, "blur", () => this.onBlur()),
              );
            }
            unmount() {}
          },
        },
        hover: {
          Feature: class extends vt {
            mount() {
              const { current: t } = this.node;
              if (t) {
                this.unmount = (function (t, e, n = {}) {
                  const [r, s, i] = qn(t, n);
                  const o = (t) => {
                    if (!Hn(t)) {
                      return;
                    }
                    const { target: n } = t;
                    const r = e(n, t);
                    if (typeof r != "function" || !n) {
                      return;
                    }
                    const i = (t) => {
                      if (Hn(t)) {
                        r(t);
                        n.removeEventListener("pointerleave", i);
                      }
                    };
                    n.addEventListener("pointerleave", i, s);
                  };
                  r.forEach((t) => {
                    t.addEventListener("pointerenter", o, s);
                  });
                  return i;
                })(t, (t, e) => {
                  Kn(this.node, e, "Start");
                  return (t) => Kn(this.node, t, "End");
                });
              }
            }
            unmount() {}
          },
        },
      };
      const lr = et(
        {
          ...St,
          ...ur,
          ...zn,
          ...{
            layout: {
              ProjectionNode: Un,
              MeasureLayout: we,
            },
          },
        },
        c,
      );
    },
    23183: function (t, e, n) {
      n.d(e, {
        J: () => b,
      });
      var r = n(18011);
      var s = n(81077);
      var i = n(26975);
      var o = n(94309);
      var a = n(53345);
      const c = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      function u(t, e, n = 1) {
        (0, i.k)(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
          "max-css-var-depth",
        );
        const [r, s] = (function (t) {
          const e = c.exec(t);
          if (!e) {
            return [,];
          }
          const [, n, r, s] = e;
          return [`--${n ?? r}`, s];
        })(t);
        if (!r) {
          return;
        }
        const l = window.getComputedStyle(e).getPropertyValue(r);
        if (l) {
          const t = l.trim();
          if ((0, o.P)(t)) {
            return parseFloat(t);
          } else {
            return t;
          }
        }
        if ((0, a.t)(s)) {
          return u(s, e, n + 1);
        } else {
          return s;
        }
      }
      var l = n(63062);
      var d = n(71226);
      var h = n(28779);
      var p = n(7741);
      const f = new Set(["auto", "none", "0"]);
      var m = n(37410);
      class g extends l.e {
        constructor(t, e, n, r, s) {
          super(t, e, n, r, s, true);
        }
        readKeyframes() {
          const { unresolvedKeyframes: t, element: e, name: n } = this;
          if (!e || !e.current) {
            return;
          }
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let r = t[n];
            if (typeof r == "string" && ((r = r.trim()), (0, a.t)(r))) {
              const s = u(r, e.current);
              if (s !== undefined) {
                t[n] = s;
              }
              if (n === t.length - 1) {
                this.finalKeyframe = r;
              }
            }
          }
          this.resolveNoneKeyframes();
          if (!r.z.has(n) || t.length !== 2) {
            return;
          }
          const [i, o] = t;
          const c = (0, s.C)(i);
          const l = (0, s.C)(o);
          if (c !== l) {
            if ((0, m.mP)(c) && (0, m.mP)(l)) {
              for (let e = 0; e < t.length; e++) {
                const n = t[e];
                if (typeof n == "string") {
                  t[e] = parseFloat(n);
                }
              }
            } else if (m.lw[n]) {
              this.needsMeasurement = true;
            }
          }
        }
        resolveNoneKeyframes() {
          const { unresolvedKeyframes: t, name: e } = this;
          const n = [];
          for (let e = 0; e < t.length; e++) {
            if (
              t[e] === null ||
              (typeof (r = t[e]) == "number"
                ? r === 0
                : r === null || r === "none" || r === "0" || (0, d.W)(r))
            ) {
              n.push(e);
            }
          }
          var r;
          if (n.length) {
            (function (t, e, n) {
              let r;
              let s = 0;
              while (s < t.length && !r) {
                const e = t[s];
                if (
                  typeof e == "string" &&
                  !f.has(e) &&
                  (0, h.V)(e).values.length
                ) {
                  r = t[s];
                }
                s++;
              }
              if (r && n) {
                for (const s of e) {
                  t[s] = (0, p.T)(n, r);
                }
              }
            })(t, n, e);
          }
        }
        measureInitialState() {
          const { element: t, unresolvedKeyframes: e, name: n } = this;
          if (!t || !t.current) {
            return;
          }
          if (n === "height") {
            this.suspendedScrollY = window.pageYOffset;
          }
          this.measuredOrigin = m.lw[n](
            t.measureViewportBox(),
            window.getComputedStyle(t.current),
          );
          e[0] = this.measuredOrigin;
          const r = e[e.length - 1];
          if (r !== undefined) {
            t.getValue(n, r).jump(r, false);
          }
        }
        measureEndState() {
          const { element: t, name: e, unresolvedKeyframes: n } = this;
          if (!t || !t.current) {
            return;
          }
          const r = t.getValue(e);
          if (r) {
            r.jump(this.measuredOrigin, false);
          }
          const s = n.length - 1;
          const i = n[s];
          n[s] = m.lw[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current),
          );
          if (i !== null && this.finalKeyframe === undefined) {
            this.finalKeyframe = i;
          }
          if (this.removedTransforms?.length) {
            this.removedTransforms.forEach(([e, n]) => {
              t.getValue(e).set(n);
            });
          }
          this.resolveNoneKeyframes();
        }
      }
      var y = n(45875);
      var v = n(26967);
      class b extends v.l {
        constructor() {
          super(...arguments);
          this.KeyframeResolver = g;
        }
        sortInstanceNodePosition(t, e) {
          if (t.compareDocumentPosition(e) & 2) {
            return 1;
          } else {
            return -1;
          }
        }
        getBaseTargetFromProps(t, e) {
          if (t.style) {
            return t.style[e];
          } else {
            return undefined;
          }
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t];
          delete n[t];
        }
        handleChildMotionValue() {
          if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
          }
          const { children: t } = this.props;
          if ((0, y.i)(t)) {
            this.childSubscription = t.on("change", (t) => {
              if (this.current) {
                this.current.textContent = `${t}`;
              }
            });
          }
        }
      }
    },
    50638: function (t, e, n) {
      n.d(e, {
        D: () => r,
      });
      const r = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    3622: function (t, e, n) {
      n.d(e, {
        W: () => d,
      });
      var r = n(50477);
      var s = n(38255);
      var i = n(53345);
      var o = n(10301);
      var a = n(23183);
      var c = n(55469);
      var u = n(68416);
      var l = n(86740);
      class d extends a.J {
        constructor() {
          super(...arguments);
          this.type = "html";
          this.renderInstance = u.N;
        }
        readValueFromInstance(t, e) {
          if (r.G.has(e)) {
            if (this.projection?.isProjecting) {
              return (0, s.E$)(e);
            } else {
              return (0, s.RT)(t, e);
            }
          }
          {
            n = t;
            const r = window.getComputedStyle(n);
            const s = ((0, i.f)(e) ? r.getPropertyValue(e) : r[e]) || 0;
            if (typeof s == "string") {
              return s.trim();
            } else {
              return s;
            }
          }
          var n;
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, o.J)(t, e);
        }
        build(t, e, n) {
          (0, c.r)(t, e, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, l.U)(t, e, n);
        }
      }
    },
    55469: function (t, e, n) {
      n.d(e, {
        r: () => u,
      });
      var r = n(50477);
      var s = n(53345);
      const i = (t, e) => (e && typeof t == "number" ? e.transform(t) : t);
      var o = n(75456);
      const a = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      const c = r._.length;
      function u(t, e, n) {
        const { style: u, vars: l, transformOrigin: d } = t;
        let h = false;
        let p = false;
        for (const t in e) {
          const n = e[t];
          if (r.G.has(t)) {
            h = true;
          } else if ((0, s.f)(t)) {
            l[t] = n;
          } else {
            const e = i(n, o.j[t]);
            if (t.startsWith("origin")) {
              p = true;
              d[t] = e;
            } else {
              u[t] = e;
            }
          }
        }
        if (!e.transform) {
          if (h || n) {
            u.transform = (function (t, e, n) {
              let s = "";
              let u = true;
              for (let l = 0; l < c; l++) {
                const c = r._[l];
                const d = t[c];
                if (d === undefined) {
                  continue;
                }
                let h = true;
                h =
                  typeof d == "number"
                    ? d === (c.startsWith("scale") ? 1 : 0)
                    : parseFloat(d) === 0;
                if (!h || n) {
                  const t = i(d, o.j[c]);
                  if (!h) {
                    u = false;
                    s += `${a[c] || c}(${t}) `;
                  }
                  if (n) {
                    e[c] = t;
                  }
                }
              }
              s = s.trim();
              if (n) {
                s = n(e, u ? "" : s);
              } else if (u) {
                s = "none";
              }
              return s;
            })(e, t.transform, n);
          } else {
            u.transform &&= "none";
          }
        }
        if (p) {
          const { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = d;
          u.transformOrigin = `${t} ${e} ${n}`;
        }
      }
    },
    68416: function (t, e, n) {
      function r(t, { style: e, vars: n }, r, s) {
        const i = t.style;
        let o;
        for (o in e) {
          i[o] = e[o];
        }
        s?.applyProjectionStyles(i, r);
        for (o in n) {
          i.setProperty(o, n[o]);
        }
      }
      n.d(e, {
        N: () => r,
      });
    },
    86740: function (t, e, n) {
      n.d(e, {
        U: () => i,
      });
      var r = n(45875);
      var s = n(99246);
      function i(t, e, n) {
        const { style: i } = t;
        const o = {};
        for (const a in i) {
          if (
            (0, r.i)(i[a]) ||
            (e.style && (0, r.i)(e.style[a])) ||
            (0, s.j)(a, t) ||
            n?.getValue(a)?.liveStyle !== undefined
          ) {
            o[a] = i[a];
          }
        }
        return o;
      }
    },
    54449: function (t, e, n) {
      n.d(e, {
        R: () => r,
      });
      const r = new WeakMap();
    },
    65504: function (t, e, n) {
      n.d(e, {
        e: () => p,
      });
      var r = n(50477);
      var s = n(90648);
      var i = n(95398);
      var o = n(23183);
      var a = n(50638);
      var c = n(85670);
      const u = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      var l = n(38399);
      var d = n(68416);
      var h = n(81185);
      class p extends o.J {
        constructor() {
          super(...arguments);
          this.type = "svg";
          this.isSVGTag = false;
          this.measureInstanceViewportBox = i.dO;
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (r.G.has(e)) {
            const t = (0, s.A)(e);
            return (t && t.default) || 0;
          }
          e = u.has(e) ? e : (0, a.D)(e);
          return t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, h.U)(t, e, n);
        }
        build(t, e, n) {
          (0, c.i)(t, e, this.isSVGTag, n.transformTemplate, n.style);
        }
        renderInstance(t, e, n, r) {
          (function (t, e, n, r) {
            (0, d.N)(t, e, undefined, r);
            for (const n in e.attrs) {
              t.setAttribute(u.has(n) ? n : (0, a.D)(n), e.attrs[n]);
            }
          })(t, e, 0, r);
        }
        mount(t) {
          this.isSVGTag = (0, l.a)(t.tagName);
          super.mount(t);
        }
      }
    },
    85670: function (t, e, n) {
      n.d(e, {
        i: () => a,
      });
      var r = n(55469);
      var s = n(57360);
      const i = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray",
      };
      const o = {
        offset: "strokeDashoffset",
        array: "strokeDasharray",
      };
      function a(
        t,
        {
          attrX: e,
          attrY: n,
          attrScale: a,
          pathLength: c,
          pathSpacing: u = 1,
          pathOffset: l = 0,
          ...d
        },
        h,
        p,
        f,
      ) {
        (0, r.r)(t, d, p);
        if (h) {
          if (t.style.viewBox) {
            t.attrs.viewBox = t.style.viewBox;
          }
          return;
        }
        t.attrs = t.style;
        t.style = {};
        const { attrs: m, style: g } = t;
        if (m.transform) {
          g.transform = m.transform;
          delete m.transform;
        }
        if (g.transform || m.transformOrigin) {
          g.transformOrigin = m.transformOrigin ?? "50% 50%";
          delete m.transformOrigin;
        }
        if (g.transform) {
          g.transformBox = f?.transformBox ?? "fill-box";
          delete m.transformBox;
        }
        if (e !== undefined) {
          m.x = e;
        }
        if (n !== undefined) {
          m.y = n;
        }
        if (a !== undefined) {
          m.scale = a;
        }
        if (c !== undefined) {
          (function (t, e, n = 1, r = 0, a = true) {
            t.pathLength = 1;
            const c = a ? i : o;
            t[c.offset] = s.px.transform(-r);
            const u = s.px.transform(e);
            const l = s.px.transform(n);
            t[c.array] = `${u} ${l}`;
          })(m, c, u, l, false);
        }
      }
    },
    38399: function (t, e, n) {
      n.d(e, {
        a: () => r,
      });
      const r = (t) => typeof t == "string" && t.toLowerCase() === "svg";
    },
    81185: function (t, e, n) {
      n.d(e, {
        U: () => o,
      });
      var r = n(45875);
      var s = n(50477);
      var i = n(86740);
      function o(t, e, n) {
        const o = (0, i.U)(t, e, n);
        for (const n in t) {
          if ((0, r.i)(t[n]) || (0, r.i)(e[n])) {
            o[
              s._.indexOf(n) !== -1
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = t[n];
          }
        }
        return o;
      }
    },
    36454: function (t, e, n) {
      n.d(e, {
        G: () => o,
        M: () => a,
      });
      var r = n(98922);
      var s = n(77768);
      var i = n(89096);
      function o(t) {
        return (0, r.H)(t.animate) || i.V.some((e) => (0, s.$)(t[e]));
      }
      function a(t) {
        return Boolean(o(t) || t.variants);
      }
    },
    77768: function (t, e, n) {
      function r(t) {
        return typeof t == "string" || Array.isArray(t);
      }
      n.d(e, {
        $: () => r,
      });
    },
    89654: function (t, e, n) {
      n.d(e, {
        x: () => s,
      });
      var r = n(75440);
      function s(t, e, n) {
        const s = t.getProps();
        return (0, r.o)(s, e, n !== undefined ? n : s.custom, t);
      }
    },
    75440: function (t, e, n) {
      function r(t) {
        const e = [{}, {}];
        t?.values.forEach((t, n) => {
          e[0][n] = t.get();
          e[1][n] = t.getVelocity();
        });
        return e;
      }
      function s(t, e, n, s) {
        if (typeof e == "function") {
          const [i, o] = r(s);
          e = e(n !== undefined ? n : t.custom, i, o);
        }
        if (typeof e == "string") {
          e = t.variants && t.variants[e];
        }
        if (typeof e == "function") {
          const [i, o] = r(s);
          e = e(n !== undefined ? n : t.custom, i, o);
        }
        return e;
      }
      n.d(e, {
        o: () => s,
      });
    },
    89096: function (t, e, n) {
      n.d(e, {
        V: () => s,
        e: () => r,
      });
      const r = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
      ];
      const s = ["initial", ...r];
    },
    24939: function (t, e, n) {
      n.d(e, {
        j: () => r,
      });
      const r = typeof window != "undefined";
    },
    78217: function (t, e, n) {
      n.d(e, {
        h: () => s,
      });
      var r = n(67294);
      function s(t) {
        const e = (0, r.useRef)(null);
        if (e.current === null) {
          e.current = t();
        }
        return e.current;
      }
    },
    19537: function (t, e, n) {
      n.d(e, {
        L: () => s,
      });
      var r = n(67294);
      const s = n(24939).j ? r.useLayoutEffect : r.useEffect;
    },
    16889: function (t, e, n) {
      n.d(e, {
        c: () => a,
      });
      var r = n(17802);
      var s = n(67294);
      var i = n(21353);
      var o = n(78217);
      function a(t) {
        const e = (0, o.h)(() => (0, r.BX)(t));
        const { isStatic: n } = (0, s.useContext)(i._);
        if (n) {
          const [, n] = (0, s.useState)(t);
          (0, s.useEffect)(() => e.on("change", n), []);
        }
        return e;
      }
    },
    64392: function (t, e, n) {
      n.d(e, {
        H: () => l,
      });
      var r = n(10959);
      var s = n(78217);
      var i = n(63594);
      var o = n(19537);
      var a = n(16889);
      function c(t, e) {
        const n = (0, a.c)(e());
        const r = () => n.set(e());
        r();
        (0, o.L)(() => {
          const e = () => i.Wi.preRender(r, false, true);
          const n = t.map((t) => t.on("change", e));
          return () => {
            n.forEach((t) => t());
            (0, i.Pn)(r);
          };
        });
        return n;
      }
      var u = n(17802);
      function l(t, e, n, s) {
        if (typeof t == "function") {
          return (function (t) {
            u.S1.current = [];
            t();
            const e = c(u.S1.current, t);
            u.S1.current = undefined;
            return e;
          })(t);
        }
        const i =
          typeof e == "function"
            ? e
            : (function (...t) {
                const e = !Array.isArray(t[0]);
                const n = e ? 0 : -1;
                const s = t[0 + n];
                const i = t[1 + n];
                const o = t[2 + n];
                const a = t[3 + n];
                const c = (0, r.s)(i, o, a);
                if (e) {
                  return c(s);
                } else {
                  return c;
                }
              })(e, n, s);
        if (Array.isArray(t)) {
          return d(t, i);
        } else {
          return d([t], ([t]) => i(t));
        }
      }
      function d(t, e) {
        const n = (0, s.h)(() => []);
        return c(t, () => {
          n.length = 0;
          const r = t.length;
          for (let e = 0; e < r; e++) {
            n[e] = t[e].get();
          }
          return e(n);
        });
      }
    },
    83800: function (t, e, n) {
      n.d(e, {
        K: () => i,
      });
      var r = n(91385);
      var s = n(45875);
      function i(t, e) {
        const n = t.getValue("willChange");
        i = n;
        if (Boolean((0, s.i)(i) && i.add)) {
          return n.add(e);
        }
        if (!n && r.c.WillChange) {
          const n = new r.c.WillChange("auto");
          t.addValue("willChange", n);
          n.add(e);
        }
        var i;
      }
    },
    40187: function (t, e, n) {
      n.d(e, {
        S: () => v,
      });
      var r = n(65437);
      var s = n(15244);
      var i = n(52486);
      var o = n(36989);
      var a = n(65399);
      var c = n(6445);
      const u = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: {
          granular: 0.01,
          default: 2,
        },
        restDelta: {
          granular: 0.005,
          default: 0.5,
        },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      var l = n(26975);
      const d = 0.001;
      function h({
        duration: t = u.duration,
        bounce: e = u.bounce,
        velocity: n = u.velocity,
        mass: i = u.mass,
      }) {
        let o;
        let a;
        (0, l.K)(
          t <= (0, s.w)(u.maxDuration),
          "Spring duration must be 10 seconds or less",
          "spring-duration-limit",
        );
        let c = 1 - e;
        c = (0, r.u)(u.minDamping, u.maxDamping, c);
        t = (0, r.u)(u.minDuration, u.maxDuration, (0, s.X)(t));
        if (c < 1) {
          o = (e) => {
            const r = e * c;
            const s = r * t;
            const i = r - n;
            const o = f(e, c);
            const a = Math.exp(-s);
            return d - (i / o) * a;
          };
          a = (e) => {
            const r = e * c * t;
            const s = r * n + n;
            const i = Math.pow(c, 2) * Math.pow(e, 2) * t;
            const a = Math.exp(-r);
            const u = f(Math.pow(e, 2), c);
            return ((-o(e) + d > 0 ? -1 : 1) * ((s - i) * a)) / u;
          };
        } else {
          o = (e) => Math.exp(-e * t) * ((e - n) * t + 1) - d;
          a = (e) => Math.exp(-e * t) * (t * t * (n - e));
        }
        const h = (function (t, e, n) {
          let r = n;
          for (let n = 1; n < p; n++) {
            r -= t(r) / e(r);
          }
          return r;
        })(o, a, 5 / t);
        t = (0, s.w)(t);
        if (isNaN(h)) {
          return {
            stiffness: u.stiffness,
            damping: u.damping,
            duration: t,
          };
        }
        {
          const e = Math.pow(h, 2) * i;
          return {
            stiffness: e,
            damping: c * 2 * Math.sqrt(i * e),
            duration: t,
          };
        }
      }
      const p = 12;
      function f(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      const m = ["duration", "bounce"];
      const g = ["stiffness", "damping", "mass"];
      function y(t, e) {
        return e.some((e) => t[e] !== undefined);
      }
      function v(t = u.visualDuration, e = u.bounce) {
        const n =
          typeof t != "object"
            ? {
                visualDuration: t,
                keyframes: [0, 1],
                bounce: e,
              }
            : t;
        let { restSpeed: a, restDelta: l } = n;
        const d = n.keyframes[0];
        const p = n.keyframes[n.keyframes.length - 1];
        const v = {
          done: false,
          value: d,
        };
        const {
          stiffness: b,
          damping: S,
          mass: _,
          duration: w,
          velocity: x,
          isResolvedFromDuration: k,
        } = (function (t) {
          let e = {
            velocity: u.velocity,
            stiffness: u.stiffness,
            damping: u.damping,
            mass: u.mass,
            isResolvedFromDuration: false,
            ...t,
          };
          if (!y(t, g) && y(t, m)) {
            if (t.visualDuration) {
              const n = t.visualDuration;
              const s = (Math.PI * 2) / (n * 1.2);
              const i = s * s;
              const o =
                (0, r.u)(0.05, 1, 1 - (t.bounce || 0)) * 2 * Math.sqrt(i);
              e = {
                ...e,
                mass: u.mass,
                stiffness: i,
                damping: o,
              };
            } else {
              const n = h(t);
              e = {
                ...e,
                ...n,
                mass: u.mass,
              };
              e.isResolvedFromDuration = true;
            }
          }
          return e;
        })({
          ...n,
          velocity: -(0, s.X)(n.velocity || 0),
        });
        const E = x || 0;
        const T = S / (Math.sqrt(b * _) * 2);
        const C = p - d;
        const M = (0, s.X)(Math.sqrt(b / _));
        const I = Math.abs(C) < 5;
        let A;
        a ||= I ? u.restSpeed.granular : u.restSpeed.default;
        l ||= I ? u.restDelta.granular : u.restDelta.default;
        if (T < 1) {
          const t = f(M, T);
          A = (e) => {
            const n = Math.exp(-T * M * e);
            return (
              p -
              n *
                (((E + T * M * C) / t) * Math.sin(t * e) + C * Math.cos(t * e))
            );
          };
        } else if (T === 1) {
          A = (t) => p - Math.exp(-M * t) * (C + (E + M * C) * t);
        } else {
          const t = M * Math.sqrt(T * T - 1);
          A = (e) => {
            const n = Math.exp(-T * M * e);
            const r = Math.min(t * e, 300);
            return (
              p -
              (n * ((E + T * M * C) * Math.sinh(r) + t * C * Math.cosh(r))) / t
            );
          };
        }
        const R = {
          calculatedDuration: (k && w) || null,
          next: (t) => {
            const e = A(t);
            if (k) {
              v.done = t >= w;
            } else {
              let n = t === 0 ? E : 0;
              if (T < 1) {
                n = t === 0 ? (0, s.w)(E) : (0, c.P)(A, t, e);
              }
              const r = Math.abs(n) <= a;
              const i = Math.abs(p - e) <= l;
              v.done = r && i;
            }
            v.value = v.done ? p : e;
            return v;
          },
          toString: () => {
            const t = Math.min((0, o.i)(R), o.E);
            const e = (0, i.w)((e) => R.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return R;
      }
      v.applyToOptions = (t) => {
        const e = (0, a.S)(t, 100, v);
        t.ease = e.ease;
        t.duration = (0, s.w)(e.duration);
        t.type = "keyframes";
        return t;
      };
    },
    36989: function (t, e, n) {
      n.d(e, {
        E: () => r,
        i: () => s,
      });
      const r = 20000;
      function s(t) {
        let e = 0;
        let n = t.next(e);
        while (!n.done && e < r) {
          e += 50;
          n = t.next(e);
        }
        if (e >= r) {
          return Infinity;
        } else {
          return e;
        }
      }
    },
    65399: function (t, e, n) {
      n.d(e, {
        S: () => i,
      });
      var r = n(15244);
      var s = n(36989);
      function i(t, e = 100, n) {
        const i = n({
          ...t,
          keyframes: [0, e],
        });
        const o = Math.min((0, s.i)(i), s.E);
        return {
          type: "keyframes",
          ease: (t) => i.next(o * t).value / e,
          duration: (0, r.X)(o),
        };
      }
    },
    20479: function (t, e, n) {
      function r(t) {
        return typeof t == "function" && "applyToOptions" in t;
      }
      n.d(e, {
        x: () => r,
      });
    },
    6445: function (t, e, n) {
      n.d(e, {
        P: () => i,
      });
      var r = n(5228);
      const s = 5;
      function i(t, e, n) {
        const i = Math.max(e - s, 0);
        return (0, r.R)(n - t(i), e - i);
      }
    },
    63062: function (t, e, n) {
      n.d(e, {
        e: () => h,
        m: () => d,
      });
      var r = n(37410);
      var s = n(63594);
      const i = new Set();
      let o = false;
      let a = false;
      let c = false;
      function u() {
        if (a) {
          const t = Array.from(i).filter((t) => t.needsMeasurement);
          const e = new Set(t.map((t) => t.element));
          const n = new Map();
          e.forEach((t) => {
            const e = (0, r.Ei)(t);
            if (e.length) {
              n.set(t, e);
              t.render();
            }
          });
          t.forEach((t) => t.measureInitialState());
          e.forEach((t) => {
            t.render();
            const e = n.get(t);
            if (e) {
              e.forEach(([e, n]) => {
                t.getValue(e)?.set(n);
              });
            }
          });
          t.forEach((t) => t.measureEndState());
          t.forEach((t) => {
            if (t.suspendedScrollY !== undefined) {
              window.scrollTo(0, t.suspendedScrollY);
            }
          });
        }
        a = false;
        o = false;
        i.forEach((t) => t.complete(c));
        i.clear();
      }
      function l() {
        i.forEach((t) => {
          t.readKeyframes();
          if (t.needsMeasurement) {
            a = true;
          }
        });
      }
      function d() {
        c = true;
        l();
        u();
        c = false;
      }
      class h {
        constructor(t, e, n, r, s, i = false) {
          this.state = "pending";
          this.isAsync = false;
          this.needsMeasurement = false;
          this.unresolvedKeyframes = [...t];
          this.onComplete = e;
          this.name = n;
          this.motionValue = r;
          this.element = s;
          this.isAsync = i;
        }
        scheduleResolve() {
          this.state = "scheduled";
          if (this.isAsync) {
            i.add(this);
            if (!o) {
              o = true;
              s.Wi.read(l);
              s.Wi.resolveKeyframes(u);
            }
          } else {
            this.readKeyframes();
            this.complete();
          }
        }
        readKeyframes() {
          const {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: r,
          } = this;
          if (t[0] === null) {
            const s = r?.get();
            const i = t[t.length - 1];
            if (s !== undefined) {
              t[0] = s;
            } else if (n && e) {
              const r = n.readValue(e, i);
              if (r != null) {
                t[0] = r;
              }
            }
            if (t[0] === undefined) {
              t[0] = i;
            }
            if (r && s === undefined) {
              r.set(t[0]);
            }
          }
          (function (t) {
            for (let e = 1; e < t.length; e++) {
              t[e] ??= t[e - 1];
            }
          })(t);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = false) {
          this.state = "complete";
          this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t);
          i.delete(this);
        }
        cancel() {
          if (this.state === "scheduled") {
            i.delete(this);
            this.state = "pending";
          }
        }
        resume() {
          if (this.state === "pending") {
            this.scheduleResolve();
          }
        }
      }
    },
    71519: function (t, e, n) {
      n.d(e, {
        Y: () => s,
      });
      var r = n(54293);
      function s(t) {
        const e = [0];
        (0, r.c)(e, t.length - 1);
        return e;
      }
    },
    54293: function (t, e, n) {
      n.d(e, {
        c: () => i,
      });
      var r = n(66789);
      var s = n(55153);
      function i(t, e) {
        const n = t[t.length - 1];
        for (let i = 1; i <= e; i++) {
          const o = (0, r.Y)(0, e, i);
          t.push((0, s.t)(n, 1, o));
        }
      }
    },
    37410: function (t, e, n) {
      n.d(e, {
        Ei: () => l,
        lw: () => d,
        mP: () => a,
      });
      var r = n(38255);
      var s = n(50477);
      var i = n(53937);
      var o = n(57360);
      const a = (t) => t === i.Rx || t === o.px;
      const c = new Set(["x", "y", "z"]);
      const u = s._.filter((t) => !c.has(t));
      function l(t) {
        const e = [];
        u.forEach((n) => {
          const r = t.getValue(n);
          if (r !== undefined) {
            e.push([n, r.get()]);
            r.set(n.startsWith("scale") ? 1 : 0);
          }
        });
        return e;
      }
      const d = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: (t, { transform: e }) => (0, r.WK)(e, "x"),
        y: (t, { transform: e }) => (0, r.WK)(e, "y"),
      };
      d.translateX = d.x;
      d.translateY = d.y;
    },
    83479: function (t, e, n) {
      function r(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      n.d(e, {
        e: () => r,
      });
    },
    53345: function (t, e, n) {
      n.d(e, {
        f: () => s,
        t: () => o,
      });
      const r = (t) => (e) => typeof e == "string" && e.startsWith(t);
      const s = r("--");
      const i = r("var(--");
      const o = (t) => !!i(t) && a.test(t.split("/*")[0].trim());
      const a =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    52486: function (t, e, n) {
      n.d(e, {
        w: () => r,
      });
      const r = (t, e, n = 10) => {
        let r = "";
        const s = Math.max(Math.round(e / n), 2);
        for (let e = 0; e < s; e++) {
          r += Math.round(t(e / (s - 1)) * 10000) / 10000 + ", ";
        }
        return `linear(${r.substring(0, r.length - 2)})`;
      };
    },
    683: function (t, e, n) {
      n.d(e, {
        Z: () => a,
      });
      var r = n(91385);
      const s = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      var i = n(27984);
      const o = 40;
      function a(t, e) {
        let n = false;
        let a = true;
        const c = {
          delta: 0,
          timestamp: 0,
          isProcessing: false,
        };
        const u = () => (n = true);
        const l = s.reduce((t, n) => {
          t[n] = (function (t, e) {
            let n = new Set();
            let r = new Set();
            let s = false;
            let o = false;
            const a = new WeakSet();
            let c = {
              delta: 0,
              timestamp: 0,
              isProcessing: false,
            };
            let u = 0;
            function l(e) {
              if (a.has(e)) {
                d.schedule(e);
                t();
              }
              u++;
              e(c);
            }
            const d = {
              schedule: (t, e = false, i = false) => {
                const o = i && s ? n : r;
                if (e) {
                  a.add(t);
                }
                if (!o.has(t)) {
                  o.add(t);
                }
                return t;
              },
              cancel: (t) => {
                r.delete(t);
                a.delete(t);
              },
              process: (t) => {
                c = t;
                if (s) {
                  o = true;
                } else {
                  s = true;
                  [n, r] = [r, n];
                  n.forEach(l);
                  if (e && i.f.value) {
                    i.f.value.frameloop[e].push(u);
                  }
                  u = 0;
                  n.clear();
                  s = false;
                  if (o) {
                    o = false;
                    d.process(t);
                  }
                }
              },
            };
            return d;
          })(u, e ? n : undefined);
          return t;
        }, {});
        const {
          setup: d,
          read: h,
          resolveKeyframes: p,
          preUpdate: f,
          update: m,
          preRender: g,
          render: y,
          postRender: v,
        } = l;
        const b = () => {
          const s = r.c.useManualTiming ? c.timestamp : performance.now();
          n = false;
          if (!r.c.useManualTiming) {
            c.delta = a ? 1000 / 60 : Math.max(Math.min(s - c.timestamp, o), 1);
          }
          c.timestamp = s;
          c.isProcessing = true;
          d.process(c);
          h.process(c);
          p.process(c);
          f.process(c);
          m.process(c);
          g.process(c);
          y.process(c);
          v.process(c);
          c.isProcessing = false;
          if (n && e) {
            a = false;
            t(b);
          }
        };
        return {
          schedule: s.reduce((e, r) => {
            const s = l[r];
            e[r] = (e, r = false, i = false) => {
              if (!n) {
                n = true;
                a = true;
                if (!c.isProcessing) {
                  t(b);
                }
              }
              return s.schedule(e, r, i);
            };
            return e;
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < s.length; e++) {
              l[s[e]].cancel(t);
            }
          },
          state: c,
          steps: l,
        };
      }
    },
    63594: function (t, e, n) {
      n.d(e, {
        Pn: () => o,
        Wi: () => i,
        w0: () => a,
        yL: () => c,
      });
      var r = n(43594);
      var s = n(683);
      const {
        schedule: i,
        cancel: o,
        state: a,
        steps: c,
      } = (0, s.Z)(
        typeof requestAnimationFrame != "undefined"
          ? requestAnimationFrame
          : r.Z,
        true,
      );
    },
    69547: function (t, e, n) {
      n.d(e, {
        g: () => s,
      });
      var r = n(683);
      const { schedule: s, cancel: i } = (0, r.Z)(queueMicrotask, false);
    },
    35449: function (t, e, n) {
      n.d(e, {
        X: () => a,
      });
      var r = n(91385);
      var s = n(63594);
      let i;
      function o() {
        i = undefined;
      }
      const a = {
        now: () => {
          if (i === undefined) {
            a.set(
              s.w0.isProcessing || r.c.useManualTiming
                ? s.w0.timestamp
                : performance.now(),
            );
          }
          return i;
        },
        set: (t) => {
          i = t;
          queueMicrotask(o);
        },
      };
    },
    38255: function (t, e, n) {
      n.d(e, {
        E$: () => l,
        RT: () => h,
        WK: () => d,
      });
      const r = (t) => (t * 180) / Math.PI;
      const s = (t) => {
        const e = r(Math.atan2(t[1], t[0]));
        return o(e);
      };
      const i = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
        rotate: s,
        rotateZ: s,
        skewX: (t) => r(Math.atan(t[1])),
        skewY: (t) => r(Math.atan(t[2])),
        skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
      };
      const o = (t) => {
        if ((t %= 360) < 0) {
          t += 360;
        }
        return t;
      };
      const a = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]);
      const c = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]);
      const u = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: a,
        scaleY: c,
        scale: (t) => (a(t) + c(t)) / 2,
        rotateX: (t) => o(r(Math.atan2(t[6], t[5]))),
        rotateY: (t) => o(r(Math.atan2(-t[2], t[0]))),
        rotateZ: s,
        rotate: s,
        skewX: (t) => r(Math.atan(t[4])),
        skewY: (t) => r(Math.atan(t[1])),
        skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
      };
      function l(t) {
        if (t.includes("scale")) {
          return 1;
        } else {
          return 0;
        }
      }
      function d(t, e) {
        if (!t || t === "none") {
          return l(e);
        }
        const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        let r;
        let s;
        if (n) {
          r = u;
          s = n;
        } else {
          const e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          r = i;
          s = e;
        }
        if (!s) {
          return l(e);
        }
        const o = r[e];
        const a = s[1].split(",").map(p);
        if (typeof o == "function") {
          return o(a);
        } else {
          return a[o];
        }
      }
      const h = (t, e) => {
        const { transform: n = "none" } = getComputedStyle(t);
        return d(n, e);
      };
      function p(t) {
        return parseFloat(t.trim());
      }
    },
    18011: function (t, e, n) {
      n.d(e, {
        z: () => s,
      });
      var r = n(50477);
      const s = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...r._,
      ]);
    },
    50477: function (t, e, n) {
      n.d(e, {
        G: () => s,
        _: () => r,
      });
      const r = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
      ];
      const s = (() => new Set(r))();
    },
    32838: function (t, e, n) {
      n.d(e, {
        P: () => r,
      });
      const r = {
        layout: 0,
        mainThread: 0,
        waapi: 0,
      };
    },
    27984: function (t, e, n) {
      n.d(e, {
        f: () => r,
      });
      const r = {
        value: null,
        addProjectionMetrics: null,
      };
    },
    10959: function (t, e, n) {
      n.d(e, {
        s: () => l,
      });
      var r = n(91385);
      var s = n(43594);
      var i = n(60333);
      var o = n(26975);
      var a = n(66789);
      var c = n(65437);
      var u = n(98029);
      function l(t, e, { clamp: n = true, ease: l, mixer: d } = {}) {
        const h = t.length;
        (0, o.k)(
          h === e.length,
          "Both input and output ranges must be the same length",
          "range-length",
        );
        if (h === 1) {
          return () => e[0];
        }
        if (h === 2 && e[0] === e[1]) {
          return () => e[1];
        }
        const p = t[0] === t[1];
        if (t[0] > t[h - 1]) {
          t = [...t].reverse();
          e = [...e].reverse();
        }
        const f = (function (t, e, n) {
          const o = [];
          const a = n || r.c.mix || u.C;
          const c = t.length - 1;
          for (let n = 0; n < c; n++) {
            let r = a(t[n], t[n + 1]);
            if (e) {
              const t = Array.isArray(e) ? e[n] || s.Z : e;
              r = (0, i.z)(t, r);
            }
            o.push(r);
          }
          return o;
        })(e, l, d);
        const m = f.length;
        const g = (n) => {
          if (p && n < t[0]) {
            return e[0];
          }
          let r = 0;
          if (m > 1) {
            for (; r < t.length - 2 && !(n < t[r + 1]); r++);
          }
          const s = (0, a.Y)(t[r], t[r + 1], n);
          return f[r](s);
        };
        if (n) {
          return (e) => g((0, c.u)(t[0], t[h - 1], e));
        } else {
          return g;
        }
      }
    },
    80602: function (t, e, n) {
      n.d(e, {
        R: () => s,
      });
      var r = n(43754);
      function s(t) {
        return (0, r.K)(t) && "offsetHeight" in t;
      }
    },
    59634: function (t, e, n) {
      n.d(e, {
        v: () => s,
      });
      var r = n(43754);
      function s(t) {
        return (0, r.K)(t) && "ownerSVGElement" in t;
      }
    },
    30038: function (t, e, n) {
      n.d(e, {
        r: () => s,
      });
      var r = n(59634);
      function s(t) {
        return (0, r.v)(t) && t.tagName === "svg";
      }
    },
    98029: function (t, e, n) {
      n.d(e, {
        C: () => k,
      });
      var r = n(60333);
      var s = n(26975);
      var i = n(53345);
      var o = n(39178);
      var a = n(28779);
      var c = n(94306);
      var u = n(63709);
      function l(t, e, n) {
        if (n < 0) {
          n += 1;
        }
        if (n > 1) {
          n -= 1;
        }
        if (n < 1 / 6) {
          return t + (e - t) * 6 * n;
        } else if (n < 0.5) {
          return e;
        } else if (n < 2 / 3) {
          return t + (e - t) * (2 / 3 - n) * 6;
        } else {
          return t;
        }
      }
      var d = n(41281);
      function h(t, e) {
        return (n) => (n > 0 ? e : t);
      }
      var p = n(55153);
      const f = (t, e, n) => {
        const r = t * t;
        const s = n * (e * e - r) + r;
        if (s < 0) {
          return 0;
        } else {
          return Math.sqrt(s);
        }
      };
      const m = [c.$, d.m, u.J];
      function g(t) {
        n = t;
        const e = m.find((t) => t.test(n));
        var n;
        (0, s.K)(
          Boolean(e),
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
          "color-not-animatable",
        );
        if (!Boolean(e)) {
          return false;
        }
        let r = e.parse(t);
        if (e === u.J) {
          r = (function ({ hue: t, saturation: e, lightness: n, alpha: r }) {
            t /= 360;
            n /= 100;
            let s = 0;
            let i = 0;
            let o = 0;
            if ((e /= 100)) {
              const r = n < 0.5 ? n * (1 + e) : n + e - n * e;
              const a = n * 2 - r;
              s = l(a, r, t + 1 / 3);
              i = l(a, r, t);
              o = l(a, r, t - 1 / 3);
            } else {
              s = i = o = n;
            }
            return {
              red: Math.round(s * 255),
              green: Math.round(i * 255),
              blue: Math.round(o * 255),
              alpha: r,
            };
          })(r);
        }
        return r;
      }
      const y = (t, e) => {
        const n = g(t);
        const r = g(e);
        if (!n || !r) {
          return h(t, e);
        }
        const s = {
          ...n,
        };
        return (t) => {
          s.red = f(n.red, r.red, t);
          s.green = f(n.green, r.green, t);
          s.blue = f(n.blue, r.blue, t);
          s.alpha = (0, p.t)(n.alpha, r.alpha, t);
          return d.m.transform(s);
        };
      };
      const v = new Set(["none", "hidden"]);
      function b(t, e) {
        return (n) => (0, p.t)(t, e, n);
      }
      function S(t) {
        if (typeof t == "number") {
          return b;
        } else if (typeof t == "string") {
          if ((0, i.t)(t)) {
            return h;
          } else if (o.$.test(t)) {
            return y;
          } else {
            return x;
          }
        } else if (Array.isArray(t)) {
          return _;
        } else if (typeof t == "object") {
          if (o.$.test(t)) {
            return y;
          } else {
            return w;
          }
        } else {
          return h;
        }
      }
      function _(t, e) {
        const n = [...t];
        const r = n.length;
        const s = t.map((t, n) => S(t)(t, e[n]));
        return (t) => {
          for (let e = 0; e < r; e++) {
            n[e] = s[e](t);
          }
          return n;
        };
      }
      function w(t, e) {
        const n = {
          ...t,
          ...e,
        };
        const r = {};
        for (const s in n) {
          if (t[s] !== undefined && e[s] !== undefined) {
            r[s] = S(t[s])(t[s], e[s]);
          }
        }
        return (t) => {
          for (const e in r) {
            n[e] = r[e](t);
          }
          return n;
        };
      }
      const x = (t, e) => {
        const n = a.P.createTransformer(e);
        const i = (0, a.V)(t);
        const o = (0, a.V)(e);
        if (
          i.indexes.var.length === o.indexes.var.length &&
          i.indexes.color.length === o.indexes.color.length &&
          i.indexes.number.length >= o.indexes.number.length
        ) {
          if (
            (v.has(t) && !o.values.length) ||
            (v.has(e) && !i.values.length)
          ) {
            return (function (t, e) {
              if (v.has(t)) {
                return (n) => (n <= 0 ? t : e);
              } else {
                return (n) => (n >= 1 ? e : t);
              }
            })(t, e);
          } else {
            return (0, r.z)(
              _(
                (function (t, e) {
                  const n = [];
                  const r = {
                    color: 0,
                    var: 0,
                    number: 0,
                  };
                  for (let s = 0; s < e.values.length; s++) {
                    const i = e.types[s];
                    const o = t.indexes[i][r[i]];
                    const a = t.values[o] ?? 0;
                    n[s] = a;
                    r[i]++;
                  }
                  return n;
                })(i, o),
                o.values,
              ),
              n,
            );
          }
        } else {
          (0, s.K)(
            true,
            `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            "complex-values-different",
          );
          return h(t, e);
        }
      };
      function k(t, e, n) {
        if (
          typeof t == "number" &&
          typeof e == "number" &&
          typeof n == "number"
        ) {
          return (0, p.t)(t, e, n);
        }
        return S(t)(t, e);
      }
    },
    55153: function (t, e, n) {
      n.d(e, {
        t: () => r,
      });
      const r = (t, e, n) => t + (e - t) * n;
    },
    6419: function (t, e, n) {
      function r(t, e, n) {
        if (t instanceof EventTarget) {
          return [t];
        }
        if (typeof t == "string") {
          let r = document;
          if (e) {
            r = e.current;
          }
          const s = n?.[t] ?? r.querySelectorAll(t);
          if (s) {
            return Array.from(s);
          } else {
            return [];
          }
        }
        return Array.from(t);
      }
      n.d(e, {
        I: () => r,
      });
    },
    17802: function (t, e, n) {
      n.d(e, {
        BX: () => u,
        S1: () => a,
      });
      var r = n(58088);
      var s = n(5228);
      var i = n(35449);
      var o = n(63594);
      const a = {
        current: undefined,
      };
      class c {
        constructor(t, e = {}) {
          this.canTrackVelocity = null;
          this.events = {};
          this.updateAndNotify = (t) => {
            const e = i.X.now();
            if (this.updatedAt !== e) {
              this.setPrevFrameValue();
            }
            this.prev = this.current;
            this.setCurrent(t);
            if (
              this.current !== this.prev &&
              (this.events.change?.notify(this.current), this.dependents)
            ) {
              for (const t of this.dependents) {
                t.dirty();
              }
            }
          };
          this.hasAnimated = false;
          this.setCurrent(t);
          this.owner = e.owner;
        }
        setCurrent(t) {
          var e;
          this.current = t;
          this.updatedAt = i.X.now();
          if (this.canTrackVelocity === null && t !== undefined) {
            this.canTrackVelocity = ((e = this.current), !isNaN(parseFloat(e)));
          }
        }
        setPrevFrameValue(t = this.current) {
          this.prevFrameValue = t;
          this.prevUpdatedAt = this.updatedAt;
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] ||= new r.L();
          const n = this.events[t].add(e);
          if (t === "change") {
            return () => {
              n();
              o.Wi.read(() => {
                if (!this.events.change.getSize()) {
                  this.stop();
                }
              });
            };
          } else {
            return n;
          }
        }
        clearListeners() {
          for (const t in this.events) {
            this.events[t].clear();
          }
        }
        attach(t, e) {
          this.passiveEffect = t;
          this.stopPassiveEffect = e;
        }
        set(t) {
          if (this.passiveEffect) {
            this.passiveEffect(t, this.updateAndNotify);
          } else {
            this.updateAndNotify(t);
          }
        }
        setWithVelocity(t, e, n) {
          this.set(e);
          this.prev = undefined;
          this.prevFrameValue = t;
          this.prevUpdatedAt = this.updatedAt - n;
        }
        jump(t, e = true) {
          this.updateAndNotify(t);
          this.prev = t;
          this.prevUpdatedAt = this.prevFrameValue = undefined;
          if (e) {
            this.stop();
          }
          if (this.stopPassiveEffect) {
            this.stopPassiveEffect();
          }
        }
        dirty() {
          this.events.change?.notify(this.current);
        }
        addDependent(t) {
          this.dependents ||= new Set();
          this.dependents.add(t);
        }
        removeDependent(t) {
          if (this.dependents) {
            this.dependents.delete(t);
          }
        }
        get() {
          if (a.current) {
            a.current.push(this);
          }
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          const t = i.X.now();
          if (
            !this.canTrackVelocity ||
            this.prevFrameValue === undefined ||
            t - this.updatedAt > 30
          ) {
            return 0;
          }
          const e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, s.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e,
          );
        }
        start(t) {
          this.stop();
          return new Promise((e) => {
            this.hasAnimated = true;
            this.animation = t(e);
            if (this.events.animationStart) {
              this.events.animationStart.notify();
            }
          }).then(() => {
            if (this.events.animationComplete) {
              this.events.animationComplete.notify();
            }
            this.clearAnimation();
          });
        }
        stop() {
          if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) {
              this.events.animationCancel.notify();
            }
          }
          this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.dependents?.clear();
          this.events.destroy?.notify();
          this.clearListeners();
          this.stop();
          if (this.stopPassiveEffect) {
            this.stopPassiveEffect();
          }
        }
      }
      function u(t, e) {
        return new c(t, e);
      }
    },
    94306: function (t, e, n) {
      n.d(e, {
        $: () => s,
      });
      var r = n(41281);
      const s = {
        test: (0, n(88463).i)("#"),
        parse: function (t) {
          let e = "";
          let n = "";
          let r = "";
          let s = "";
          if (t.length > 5) {
            e = t.substring(1, 3);
            n = t.substring(3, 5);
            r = t.substring(5, 7);
            s = t.substring(7, 9);
          } else {
            e = t.substring(1, 2);
            n = t.substring(2, 3);
            r = t.substring(3, 4);
            s = t.substring(4, 5);
            e += e;
            n += n;
            r += r;
            s += s;
          }
          return {
            red: parseInt(e, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: s ? parseInt(s, 16) / 255 : 1,
          };
        },
        transform: r.m.transform,
      };
    },
    63709: function (t, e, n) {
      n.d(e, {
        J: () => a,
      });
      var r = n(53937);
      var s = n(57360);
      var i = n(53848);
      var o = n(88463);
      const a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          s.aQ.transform((0, i.N)(e)) +
          ", " +
          s.aQ.transform((0, i.N)(n)) +
          ", " +
          (0, i.N)(r.Fq.transform(o)) +
          ")",
      };
    },
    39178: function (t, e, n) {
      n.d(e, {
        $: () => o,
      });
      var r = n(94306);
      var s = n(63709);
      var i = n(41281);
      const o = {
        test: (t) => i.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          i.m.test(t)
            ? i.m.parse(t)
            : s.J.test(t)
              ? s.J.parse(t)
              : r.$.parse(t),
        transform: (t) =>
          typeof t == "string"
            ? t
            : t.hasOwnProperty("red")
              ? i.m.transform(t)
              : s.J.transform(t),
        getAnimatableNone: (t) => {
          const e = o.parse(t);
          e.alpha = 0;
          return o.transform(e);
        },
      };
    },
    41281: function (t, e, n) {
      n.d(e, {
        m: () => c,
      });
      var r = n(65437);
      var s = n(53937);
      var i = n(53848);
      var o = n(88463);
      const a = {
        ...s.Rx,
        transform: (t) => Math.round(((t) => (0, r.u)(0, 255, t))(t)),
      };
      const c = {
        test: (0, o.i)("rgb", "red"),
        parse: (0, o.d)("red", "green", "blue"),
        transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
          "rgba(" +
          a.transform(t) +
          ", " +
          a.transform(e) +
          ", " +
          a.transform(n) +
          ", " +
          (0, i.N)(s.Fq.transform(r)) +
          ")",
      };
    },
    88463: function (t, e, n) {
      n.d(e, {
        d: () => o,
        i: () => i,
      });
      var r = n(84755);
      const s =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      const i = (t, e) => (n) =>
        Boolean(
          (typeof n == "string" && s.test(n) && n.startsWith(t)) ||
          (e &&
            !(function (t) {
              return t == null;
            })(n) &&
            Object.prototype.hasOwnProperty.call(n, e)),
        );
      const o = (t, e, n) => (s) => {
        if (typeof s != "string") {
          return s;
        }
        const [i, o, a, c] = s.match(r.K);
        return {
          [t]: parseFloat(i),
          [e]: parseFloat(o),
          [n]: parseFloat(a),
          alpha: c !== undefined ? parseFloat(c) : 1,
        };
      };
    },
    49260: function (t, e, n) {
      n.d(e, {
        h: () => c,
      });
      var r = n(28779);
      var s = n(84755);
      const i = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if (e === "drop-shadow") {
          return t;
        }
        const [r] = n.match(s.K) || [];
        if (!r) {
          return t;
        }
        const o = n.replace(r, "");
        let a = i.has(e) ? 1 : 0;
        if (r !== n) {
          a *= 100;
        }
        return e + "(" + a + o + ")";
      }
      const a = /\b([a-z-]*)\(.*?\)/gu;
      const c = {
        ...r.P,
        getAnimatableNone: (t) => {
          const e = t.match(a);
          if (e) {
            return e.map(o).join(" ");
          } else {
            return t;
          }
        },
      };
    },
    28779: function (t, e, n) {
      n.d(e, {
        V: () => p,
        P: () => y,
      });
      var r = n(39178);
      const s =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var i = n(84755);
      var o = n(53848);
      const a = "number";
      const c = "color";
      const u = "var";
      const l = "var(";
      const d = "${}";
      const h =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function p(t) {
        const e = t.toString();
        const n = [];
        const s = {
          color: [],
          number: [],
          var: [],
        };
        const i = [];
        let o = 0;
        const p = e
          .replace(h, (t) => {
            if (r.$.test(t)) {
              s.color.push(o);
              i.push(c);
              n.push(r.$.parse(t));
            } else if (t.startsWith(l)) {
              s.var.push(o);
              i.push(u);
              n.push(t);
            } else {
              s.number.push(o);
              i.push(a);
              n.push(parseFloat(t));
            }
            ++o;
            return d;
          })
          .split(d);
        return {
          values: n,
          split: p,
          indexes: s,
          types: i,
        };
      }
      function f(t) {
        return p(t).values;
      }
      function m(t) {
        const { split: e, types: n } = p(t);
        const s = e.length;
        return (t) => {
          let i = "";
          for (let u = 0; u < s; u++) {
            i += e[u];
            if (t[u] !== undefined) {
              const e = n[u];
              i +=
                e === a ? (0, o.N)(t[u]) : e === c ? r.$.transform(t[u]) : t[u];
            }
          }
          return i;
        };
      }
      const g = (t) =>
        typeof t == "number" ? 0 : r.$.test(t) ? r.$.getAnimatableNone(t) : t;
      const y = {
        test: function (t) {
          return (
            isNaN(t) &&
            typeof t == "string" &&
            (t.match(i.K)?.length || 0) + (t.match(s)?.length || 0) > 0
          );
        },
        parse: f,
        createTransformer: m,
        getAnimatableNone: function (t) {
          const e = f(t);
          return m(t)(e.map(g));
        },
      };
    },
    81077: function (t, e, n) {
      n.d(e, {
        $: () => o,
        C: () => a,
      });
      var r = n(53937);
      var s = n(57360);
      var i = n(31024);
      const o = [
        r.Rx,
        s.px,
        s.aQ,
        s.RW,
        s.vw,
        s.vh,
        {
          test: (t) => t === "auto",
          parse: (t) => t,
        },
      ];
      const a = (t) => o.find((0, i.l)(t));
    },
    90648: function (t, e, n) {
      n.d(e, {
        A: () => o,
      });
      var r = n(39178);
      var s = n(49260);
      const i = {
        ...n(75456).j,
        color: r.$,
        backgroundColor: r.$,
        outlineColor: r.$,
        fill: r.$,
        stroke: r.$,
        borderColor: r.$,
        borderTopColor: r.$,
        borderRightColor: r.$,
        borderBottomColor: r.$,
        borderLeftColor: r.$,
        filter: s.h,
        WebkitFilter: s.h,
      };
      const o = (t) => i[t];
    },
    75456: function (t, e, n) {
      n.d(e, {
        j: () => a,
      });
      var r = n(53937);
      const s = {
        ...r.Rx,
        transform: Math.round,
      };
      var i = n(57360);
      const o = {
        rotate: i.RW,
        rotateX: i.RW,
        rotateY: i.RW,
        rotateZ: i.RW,
        scale: r.bA,
        scaleX: r.bA,
        scaleY: r.bA,
        scaleZ: r.bA,
        skew: i.RW,
        skewX: i.RW,
        skewY: i.RW,
        distance: i.px,
        translateX: i.px,
        translateY: i.px,
        translateZ: i.px,
        x: i.px,
        y: i.px,
        z: i.px,
        perspective: i.px,
        transformPerspective: i.px,
        opacity: r.Fq,
        originX: i.$C,
        originY: i.$C,
        originZ: i.px,
      };
      const a = {
        borderWidth: i.px,
        borderTopWidth: i.px,
        borderRightWidth: i.px,
        borderBottomWidth: i.px,
        borderLeftWidth: i.px,
        borderRadius: i.px,
        radius: i.px,
        borderTopLeftRadius: i.px,
        borderTopRightRadius: i.px,
        borderBottomRightRadius: i.px,
        borderBottomLeftRadius: i.px,
        width: i.px,
        maxWidth: i.px,
        height: i.px,
        maxHeight: i.px,
        top: i.px,
        right: i.px,
        bottom: i.px,
        left: i.px,
        padding: i.px,
        paddingTop: i.px,
        paddingRight: i.px,
        paddingBottom: i.px,
        paddingLeft: i.px,
        margin: i.px,
        marginTop: i.px,
        marginRight: i.px,
        marginBottom: i.px,
        marginLeft: i.px,
        backgroundPositionX: i.px,
        backgroundPositionY: i.px,
        ...o,
        zIndex: s,
        fillOpacity: r.Fq,
        strokeOpacity: r.Fq,
        numOctaves: s,
      };
    },
    53937: function (t, e, n) {
      n.d(e, {
        Fq: () => i,
        Rx: () => s,
        bA: () => o,
      });
      var r = n(65437);
      const s = {
        test: (t) => typeof t == "number",
        parse: parseFloat,
        transform: (t) => t,
      };
      const i = {
        ...s,
        transform: (t) => (0, r.u)(0, 1, t),
      };
      const o = {
        ...s,
        default: 1,
      };
    },
    57360: function (t, e, n) {
      n.d(e, {
        $C: () => u,
        RW: () => s,
        aQ: () => i,
        px: () => o,
        vh: () => a,
        vw: () => c,
      });
      const r = (t) => ({
        test: (e) =>
          typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: (e) => `${e}${t}`,
      });
      const s = r("deg");
      const i = r("%");
      const o = r("px");
      const a = r("vh");
      const c = r("vw");
      const u = (() => ({
        ...i,
        parse: (t) => i.parse(t) / 100,
        transform: (t) => i.transform(t * 100),
      }))();
    },
    31024: function (t, e, n) {
      n.d(e, {
        l: () => r,
      });
      const r = (t) => (e) => e.test(t);
    },
    7741: function (t, e, n) {
      n.d(e, {
        T: () => o,
      });
      var r = n(28779);
      var s = n(49260);
      var i = n(90648);
      function o(t, e) {
        let n = (0, i.A)(t);
        if (n !== s.h) {
          n = r.P;
        }
        if (n.getAnimatableNone) {
          return n.getAnimatableNone(e);
        } else {
          return undefined;
        }
      }
    },
    84755: function (t, e, n) {
      n.d(e, {
        K: () => r,
      });
      const r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    53848: function (t, e, n) {
      n.d(e, {
        N: () => r,
      });
      const r = (t) => Math.round(t * 100000) / 100000;
    },
    45875: function (t, e, n) {
      n.d(e, {
        i: () => r,
      });
      const r = (t) => Boolean(t && t.getVelocity);
    },
    97433: function (t, e, n) {
      function r(t, e) {
        if (t.indexOf(e) === -1) {
          t.push(e);
        }
      }
      function s(t, e) {
        const n = t.indexOf(e);
        if (n > -1) {
          t.splice(n, 1);
        }
      }
      n.d(e, {
        cl: () => s,
        y4: () => r,
      });
    },
    65437: function (t, e, n) {
      n.d(e, {
        u: () => r,
      });
      const r = (t, e, n) => (n > e ? e : n < t ? t : n);
    },
    37919: function (t, e, n) {
      n.d(e, {
        Bn: () => o,
        X7: () => a,
        Z7: () => i,
      });
      var r = n(27467);
      var s = n(6578);
      const i = (t) => 1 - Math.sin(Math.acos(t));
      const o = (0, s.M)(i);
      const a = (0, r.o)(i);
    },
    27467: function (t, e, n) {
      n.d(e, {
        o: () => r,
      });
      const r = (t) => (e) =>
        e <= 0.5 ? t(e * 2) / 2 : (2 - t((1 - e) * 2)) / 2;
    },
    6578: function (t, e, n) {
      n.d(e, {
        M: () => r,
      });
      const r = (t) => (e) => 1 - t(1 - e);
    },
    61209: function (t, e, n) {
      n.d(e, {
        N: () => r,
      });
      const r = (t) => Array.isArray(t) && typeof t[0] != "number";
    },
    26975: function (t, e, n) {
      n.d(e, {
        K: () => r,
        k: () => s,
      });
      let r = () => {};
      let s = () => {};
    },
    91385: function (t, e, n) {
      n.d(e, {
        c: () => r,
      });
      const r = {};
    },
    94309: function (t, e, n) {
      n.d(e, {
        P: () => r,
      });
      const r = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    43754: function (t, e, n) {
      function r(t) {
        return typeof t == "object" && t !== null;
      }
      n.d(e, {
        K: () => r,
      });
    },
    71226: function (t, e, n) {
      n.d(e, {
        W: () => r,
      });
      const r = (t) => /^0[^.\s]+$/u.test(t);
    },
    43594: function (t, e, n) {
      n.d(e, {
        Z: () => r,
      });
      const r = (t) => t;
    },
    60333: function (t, e, n) {
      n.d(e, {
        z: () => s,
      });
      const r = (t, e) => (n) => e(t(n));
      const s = (...t) => t.reduce(r);
    },
    66789: function (t, e, n) {
      n.d(e, {
        Y: () => r,
      });
      const r = (t, e, n) => {
        const r = e - t;
        if (r === 0) {
          return 1;
        } else {
          return (n - t) / r;
        }
      };
    },
    58088: function (t, e, n) {
      n.d(e, {
        L: () => s,
      });
      var r = n(97433);
      class s {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          (0, r.y4)(this.subscriptions, t);
          return () => (0, r.cl)(this.subscriptions, t);
        }
        notify(t, e, n) {
          const r = this.subscriptions.length;
          if (r) {
            if (r === 1) {
              this.subscriptions[0](t, e, n);
            } else {
              for (let s = 0; s < r; s++) {
                const r = this.subscriptions[s];
                if (r) {
                  r(t, e, n);
                }
              }
            }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    15244: function (t, e, n) {
      n.d(e, {
        X: () => s,
        w: () => r,
      });
      const r = (t) => t * 1000;
      const s = (t) => t / 1000;
    },
    5228: function (t, e, n) {
      function r(t, e) {
        if (e) {
          return t * (1000 / e);
        } else {
          return 0;
        }
      }
      n.d(e, {
        R: () => r,
      });
    },
    81722: function (t, e, n) {
      n.d(e, {
        $j: () => tt,
        ET: () => G,
        I0: () => at,
        v9: () => lt,
        zt: () => et,
      });
      var r = n(67294);
      var s = n(31103);
      var i = r.version.startsWith("19");
      var o = Symbol.for(i ? "react.transitional.element" : "react.element");
      var a = Symbol.for("react.portal");
      var c = Symbol.for("react.fragment");
      var u = Symbol.for("react.strict_mode");
      var l = Symbol.for("react.profiler");
      var d = Symbol.for("react.consumer");
      var h = Symbol.for("react.context");
      var p = Symbol.for("react.forward_ref");
      var f = Symbol.for("react.suspense");
      var m = Symbol.for("react.suspense_list");
      var g = Symbol.for("react.memo");
      var y = Symbol.for("react.lazy");
      var v = p;
      var b = g;
      function S(t) {
        if (typeof t == "object" && t !== null) {
          const { $$typeof: e } = t;
          switch (e) {
            case o:
              switch ((t = t.type)) {
                case c:
                case l:
                case u:
                case f:
                case m:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case h:
                    case p:
                    case y:
                    case g:
                    case d:
                      return t;
                    default:
                      return e;
                  }
              }
            case a:
              return e;
          }
        }
      }
      function _(
        t,
        e,
        n,
        r,
        { areStatesEqual: s, areOwnPropsEqual: i, areStatePropsEqual: o },
      ) {
        let a;
        let c;
        let u;
        let l;
        let d;
        let h = false;
        function p(h, p) {
          const f = !i(p, c);
          const m = !s(h, a, p, c);
          a = h;
          c = p;
          if (f && m) {
            u = t(a, c);
            if (e.dependsOnOwnProps) {
              l = e(r, c);
            }
            d = n(u, l, c);
            return d;
          } else if (f) {
            if (t.dependsOnOwnProps) {
              u = t(a, c);
            }
            if (e.dependsOnOwnProps) {
              l = e(r, c);
            }
            d = n(u, l, c);
            return d;
          } else if (m) {
            return (function () {
              const e = t(a, c);
              const r = !o(e, u);
              u = e;
              if (r) {
                d = n(u, l, c);
              }
              return d;
            })();
          } else {
            return d;
          }
        }
        return function (s, i) {
          if (h) {
            return p(s, i);
          } else {
            a = s;
            c = i;
            u = t(a, c);
            l = e(r, c);
            d = n(u, l, c);
            h = true;
            return d;
          }
        };
      }
      function w(t) {
        return function (e) {
          const n = t(e);
          function r() {
            return n;
          }
          r.dependsOnOwnProps = false;
          return r;
        };
      }
      function x(t) {
        if (t.dependsOnOwnProps) {
          return Boolean(t.dependsOnOwnProps);
        } else {
          return t.length !== 1;
        }
      }
      function k(t, e) {
        return function (e, { displayName: n }) {
          const r = function (t, e) {
            if (r.dependsOnOwnProps) {
              return r.mapToProps(t, e);
            } else {
              return r.mapToProps(t, undefined);
            }
          };
          r.dependsOnOwnProps = true;
          r.mapToProps = function (e, n) {
            r.mapToProps = t;
            r.dependsOnOwnProps = x(t);
            let s = r(e, n);
            if (typeof s == "function") {
              r.mapToProps = s;
              r.dependsOnOwnProps = x(s);
              s = r(e, n);
            }
            return s;
          };
          return r;
        };
      }
      function E(t, e) {
        return (n, r) => {
          throw new Error(
            `Invalid value of type ${typeof t} for ${e} argument when connecting component ${r.wrappedComponentName}.`,
          );
        };
      }
      function T(t, e, n) {
        return {
          ...n,
          ...t,
          ...e,
        };
      }
      function C(t) {
        t();
      }
      var M = {
        notify() {},
        get: () => [],
      };
      function I(t, e) {
        let n;
        let r = M;
        let s = 0;
        let i = false;
        function o() {
          if (u.onStateChange) {
            u.onStateChange();
          }
        }
        function a() {
          s++;
          if (!n) {
            n = e ? e.addNestedSub(o) : t.subscribe(o);
            r = (function () {
              let t = null;
              let e = null;
              return {
                clear() {
                  t = null;
                  e = null;
                },
                notify() {
                  C(() => {
                    let e = t;
                    while (e) {
                      e.callback();
                      e = e.next;
                    }
                  });
                },
                get() {
                  const e = [];
                  let n = t;
                  while (n) {
                    e.push(n);
                    n = n.next;
                  }
                  return e;
                },
                subscribe(n) {
                  let r = true;
                  const s = (e = {
                    callback: n,
                    next: null,
                    prev: e,
                  });
                  if (s.prev) {
                    s.prev.next = s;
                  } else {
                    t = s;
                  }
                  return function () {
                    if (r && t !== null) {
                      r = false;
                      if (s.next) {
                        s.next.prev = s.prev;
                      } else {
                        e = s.prev;
                      }
                      if (s.prev) {
                        s.prev.next = s.next;
                      } else {
                        t = s.next;
                      }
                    }
                  };
                },
              };
            })();
          }
        }
        function c() {
          s--;
          if (n && s === 0) {
            n();
            n = undefined;
            r.clear();
            r = M;
          }
        }
        const u = {
          addNestedSub: function (t) {
            a();
            const e = r.subscribe(t);
            let n = false;
            return () => {
              if (!n) {
                n = true;
                e();
                c();
              }
            };
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: o,
          isSubscribed: function () {
            return i;
          },
          trySubscribe: function () {
            if (!i) {
              i = true;
              a();
            }
          },
          tryUnsubscribe: function () {
            if (i) {
              i = false;
              c();
            }
          },
          getListeners: () => r,
        };
        return u;
      }
      var A = (() =>
        typeof window != "undefined" &&
        window.document !== undefined &&
        window.document.createElement !== undefined)();
      var R = (() =>
        typeof navigator != "undefined" &&
        navigator.product === "ReactNative")();
      var P = (() => (A || R ? r.useLayoutEffect : r.useEffect))();
      function O(t, e) {
        if (t === e) {
          return t !== 0 || e !== 0 || 1 / t == 1 / e;
        } else {
          return t != t && e != e;
        }
      }
      function D(t, e) {
        if (O(t, e)) {
          return true;
        }
        if (
          typeof t != "object" ||
          t === null ||
          typeof e != "object" ||
          e === null
        ) {
          return false;
        }
        const n = Object.keys(t);
        const r = Object.keys(e);
        if (n.length !== r.length) {
          return false;
        }
        for (let r = 0; r < n.length; r++) {
          if (
            !Object.prototype.hasOwnProperty.call(e, n[r]) ||
            !O(t[n[r]], e[n[r]])
          ) {
            return false;
          }
        }
        return true;
      }
      var L = {
        childContextTypes: true,
        contextType: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromError: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true,
      };
      var N = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true,
      };
      var j = {
        $$typeof: true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true,
      };
      var F = {
        [v]: {
          $$typeof: true,
          render: true,
          defaultProps: true,
          displayName: true,
          propTypes: true,
        },
        [b]: j,
      };
      function $(t) {
        if (S(t) === g) {
          return j;
        } else {
          return F[t.$$typeof] || L;
        }
      }
      var B = Object.defineProperty;
      var V = Object.getOwnPropertyNames;
      var U = Object.getOwnPropertySymbols;
      var z = Object.getOwnPropertyDescriptor;
      var W = Object.getPrototypeOf;
      var q = Object.prototype;
      function H(t, e) {
        if (typeof e != "string") {
          if (q) {
            const n = W(e);
            if (n && n !== q) {
              H(t, n);
            }
          }
          let n = V(e);
          if (U) {
            n = n.concat(U(e));
          }
          const r = $(t);
          const s = $(e);
          for (let i = 0; i < n.length; ++i) {
            const o = n[i];
            if (!N[o] && (!s || !s[o]) && (!r || !r[o])) {
              const n = z(e, o);
              try {
                B(t, o, n);
              } catch (t) {}
            }
          }
        }
        return t;
      }
      var K = Symbol.for("react-redux-context");
      var X = typeof globalThis != "undefined" ? globalThis : {};
      function Y() {
        if (!r.createContext) {
          return {};
        }
        const t = (X[K] ??= new Map());
        let e = t.get(r.createContext);
        if (!e) {
          e = r.createContext(null);
          t.set(r.createContext, e);
        }
        return e;
      }
      var G = Y();
      var J = [null, null];
      function Z(t, e, n, r, s, i) {
        t.current = r;
        n.current = false;
        if (s.current) {
          s.current = null;
          i();
        }
      }
      function Q(t, e) {
        return t === e;
      }
      function tt(
        t,
        e,
        n,
        {
          pure: s,
          areStatesEqual: i = Q,
          areOwnPropsEqual: o = D,
          areStatePropsEqual: a = D,
          areMergedPropsEqual: c = D,
          forwardRef: u = false,
          context: l = G,
        } = {},
      ) {
        const d = l;
        const h = (function (t) {
          if (t) {
            if (typeof t == "function") {
              return k(t);
            } else {
              return E(t, "mapStateToProps");
            }
          } else {
            return w(() => ({}));
          }
        })(t);
        const p = (function (t) {
          if (t && typeof t == "object") {
            return w((e) =>
              (function (t, e) {
                const n = {};
                for (const r in t) {
                  const s = t[r];
                  if (typeof s == "function") {
                    n[r] = (...t) => e(s(...t));
                  }
                }
                return n;
              })(t, e),
            );
          } else if (t) {
            if (typeof t == "function") {
              return k(t);
            } else {
              return E(t, "mapDispatchToProps");
            }
          } else {
            return w((t) => ({
              dispatch: t,
            }));
          }
        })(e);
        const f = (function (t) {
          if (t) {
            if (typeof t == "function") {
              return (function (t) {
                return function (
                  e,
                  { displayName: n, areMergedPropsEqual: r },
                ) {
                  let s;
                  let i = false;
                  return function (e, n, o) {
                    const a = t(e, n, o);
                    if (i) {
                      if (!r(a, s)) {
                        s = a;
                      }
                    } else {
                      i = true;
                      s = a;
                    }
                    return s;
                  };
                };
              })(t);
            } else {
              return E(t, "mergeProps");
            }
          } else {
            return () => T;
          }
        })(n);
        const m = Boolean(t);
        return (t) => {
          const e = t.displayName || t.name || "Component";
          const n = `Connect(${e})`;
          const s = {
            shouldHandleStateChanges: m,
            displayName: n,
            wrappedComponentName: e,
            WrappedComponent: t,
            initMapStateToProps: h,
            initMapDispatchToProps: p,
            initMergeProps: f,
            areStatesEqual: i,
            areStatePropsEqual: a,
            areOwnPropsEqual: o,
            areMergedPropsEqual: c,
          };
          function l(e) {
            const [n, i, o] = r.useMemo(() => {
              const { reactReduxForwardedRef: t, ...n } = e;
              return [e.context, t, n];
            }, [e]);
            const a = r.useMemo(() => d, [n, d]);
            const c = r.useContext(a);
            const u =
              Boolean(e.store) &&
              Boolean(e.store.getState) &&
              Boolean(e.store.dispatch);
            const l = Boolean(c) && Boolean(c.store);
            const h = u ? e.store : c.store;
            const p = l ? c.getServerState : h.getState;
            const f = r.useMemo(
              () =>
                (function (
                  t,
                  {
                    initMapStateToProps: e,
                    initMapDispatchToProps: n,
                    initMergeProps: r,
                    ...s
                  },
                ) {
                  return _(e(t, s), n(t, s), r(t, s), t, s);
                })(h.dispatch, s),
              [h],
            );
            const [g, y] = r.useMemo(() => {
              if (!m) {
                return J;
              }
              const t = I(h, u ? undefined : c.subscription);
              const e = t.notifyNestedSubs.bind(t);
              return [t, e];
            }, [h, u, c]);
            const v = r.useMemo(
              () =>
                u
                  ? c
                  : {
                      ...c,
                      subscription: g,
                    },
              [u, c, g],
            );
            const b = r.useRef(undefined);
            const S = r.useRef(o);
            const w = r.useRef(undefined);
            const x = r.useRef(false);
            const k = r.useRef(false);
            const E = r.useRef(undefined);
            P(() => {
              k.current = true;
              return () => {
                k.current = false;
              };
            }, []);
            const T = r.useMemo(
              () => () =>
                w.current && o === S.current ? w.current : f(h.getState(), o),
              [h, o],
            );
            const C = r.useMemo(
              () => (t) =>
                g
                  ? (function (t, e, n, r, s, i, o, a, c, u, l) {
                      if (!t) {
                        return () => {};
                      }
                      let d = false;
                      let h = null;
                      const p = () => {
                        if (d || !a.current) {
                          return;
                        }
                        const t = e.getState();
                        let n;
                        let p;
                        try {
                          n = r(t, s.current);
                        } catch (t) {
                          p = t;
                          h = t;
                        }
                        if (!p) {
                          h = null;
                        }
                        if (n === i.current) {
                          if (!o.current) {
                            u();
                          }
                        } else {
                          i.current = n;
                          c.current = n;
                          o.current = true;
                          l();
                        }
                      };
                      n.onStateChange = p;
                      n.trySubscribe();
                      p();
                      return () => {
                        d = true;
                        n.tryUnsubscribe();
                        n.onStateChange = null;
                        if (h) {
                          throw h;
                        }
                      };
                    })(m, h, g, f, S, b, x, k, w, y, t)
                  : () => {},
              [g],
            );
            var M;
            var A;
            var R;
            let O;
            M = Z;
            A = [S, b, x, o, w, y];
            P(() => M(...A), R);
            try {
              O = r.useSyncExternalStore(C, T, p ? () => f(p(), o) : T);
            } catch (t) {
              if (E.current) {
                t.message += `\nThe error may be correlated with this previous error:\n${E.current.stack}\n\n`;
              }
              throw t;
            }
            P(() => {
              E.current = undefined;
              w.current = undefined;
              b.current = O;
            });
            const D = r.useMemo(
              () =>
                r.createElement(t, {
                  ...O,
                  ref: i,
                }),
              [i, t, O],
            );
            return r.useMemo(
              () =>
                m
                  ? r.createElement(
                      a.Provider,
                      {
                        value: v,
                      },
                      D,
                    )
                  : D,
              [a, D, v],
            );
          }
          const g = r.memo(l);
          g.WrappedComponent = t;
          g.displayName = l.displayName = n;
          if (u) {
            const e = r.forwardRef(function (t, e) {
              return r.createElement(g, {
                ...t,
                reactReduxForwardedRef: e,
              });
            });
            e.displayName = n;
            e.WrappedComponent = t;
            return H(e, t);
          }
          return H(g, t);
        };
      }
      function et(t) {
        const { children: e, context: n, serverState: s, store: i } = t;
        const o = r.useMemo(() => {
          const t = I(i);
          return {
            store: i,
            subscription: t,
            getServerState: s ? () => s : undefined,
          };
        }, [i, s]);
        const a = r.useMemo(() => i.getState(), [i]);
        P(() => {
          const { subscription: t } = o;
          t.onStateChange = t.notifyNestedSubs;
          t.trySubscribe();
          if (a !== i.getState()) {
            t.notifyNestedSubs();
          }
          return () => {
            t.tryUnsubscribe();
            t.onStateChange = undefined;
          };
        }, [o, a]);
        const c = n || G;
        return r.createElement(
          c.Provider,
          {
            value: o,
          },
          e,
        );
      }
      function nt(t = G) {
        return function () {
          return r.useContext(t);
        };
      }
      var rt = nt();
      function st(t = G) {
        const e = t === G ? rt : nt(t);
        const n = () => {
          const { store: t } = e();
          return t;
        };
        Object.assign(n, {
          withTypes: () => n,
        });
        return n;
      }
      var it = st();
      function ot(t = G) {
        const e = t === G ? it : st(t);
        const n = () => e().dispatch;
        Object.assign(n, {
          withTypes: () => n,
        });
        return n;
      }
      var at = ot();
      var ct = (t, e) => t === e;
      function ut(t = G) {
        const e = t === G ? rt : nt(t);
        const n = (t, n = {}) => {
          const { equalityFn: i = ct } =
            typeof n == "function"
              ? {
                  equalityFn: n,
                }
              : n;
          const o = e();
          const { store: a, subscription: c, getServerState: u } = o;
          r.useRef(true);
          const l = r.useCallback(
            {
              [t.name]: (e) => t(e),
            }[t.name],
            [t],
          );
          const d = (0, s.useSyncExternalStoreWithSelector)(
            c.addNestedSub,
            a.getState,
            u || a.getState,
            l,
            i,
          );
          r.useDebugValue(d);
          return d;
        };
        Object.assign(n, {
          withTypes: () => n,
        });
        return n;
      }
      var lt = ut();
    },
    71526: function (t, e, n) {
      function r(t) {
        return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
      }
      n.d(e, {
        LG: () => h,
        MT: () => c,
        PO: () => a,
        UY: () => u,
        md: () => d,
        qC: () => l,
      });
      var s = (() =>
        (typeof Symbol == "function" && Symbol.observable) || "@@observable")();
      var i = () => Math.random().toString(36).substring(7).split("").join(".");
      var o = {
        INIT: `@@redux/INIT${i()}`,
        REPLACE: `@@redux/REPLACE${i()}`,
        PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${i()}`,
      };
      function a(t) {
        if (typeof t != "object" || t === null) {
          return false;
        }
        let e = t;
        while (Object.getPrototypeOf(e) !== null) {
          e = Object.getPrototypeOf(e);
        }
        return (
          Object.getPrototypeOf(t) === e || Object.getPrototypeOf(t) === null
        );
      }
      function c(t, e, n) {
        if (typeof t != "function") {
          throw new Error(r(2));
        }
        if (
          (typeof e == "function" && typeof n == "function") ||
          (typeof n == "function" && typeof arguments[3] == "function")
        ) {
          throw new Error(r(0));
        }
        if (typeof e == "function" && n === undefined) {
          n = e;
          e = undefined;
        }
        if (n !== undefined) {
          if (typeof n != "function") {
            throw new Error(r(1));
          }
          return n(c)(t, e);
        }
        let i = t;
        let u = e;
        let l = new Map();
        let d = l;
        let h = 0;
        let p = false;
        function f() {
          if (d === l) {
            d = new Map();
            l.forEach((t, e) => {
              d.set(e, t);
            });
          }
        }
        function m() {
          if (p) {
            throw new Error(r(3));
          }
          return u;
        }
        function g(t) {
          if (typeof t != "function") {
            throw new Error(r(4));
          }
          if (p) {
            throw new Error(r(5));
          }
          let e = true;
          f();
          const n = h++;
          d.set(n, t);
          return function () {
            if (e) {
              if (p) {
                throw new Error(r(6));
              }
              e = false;
              f();
              d.delete(n);
              l = null;
            }
          };
        }
        function y(t) {
          if (!a(t)) {
            throw new Error(r(7));
          }
          if (t.type === undefined) {
            throw new Error(r(8));
          }
          if (typeof t.type != "string") {
            throw new Error(r(17));
          }
          if (p) {
            throw new Error(r(9));
          }
          try {
            p = true;
            u = i(u, t);
          } finally {
            p = false;
          }
          (l = d).forEach((t) => {
            t();
          });
          return t;
        }
        y({
          type: o.INIT,
        });
        return {
          dispatch: y,
          subscribe: g,
          getState: m,
          replaceReducer: function (t) {
            if (typeof t != "function") {
              throw new Error(r(10));
            }
            i = t;
            y({
              type: o.REPLACE,
            });
          },
          [s]: function () {
            const t = g;
            return {
              subscribe(e) {
                if (typeof e != "object" || e === null) {
                  throw new Error(r(11));
                }
                function n() {
                  const t = e;
                  if (t.next) {
                    t.next(m());
                  }
                }
                n();
                return {
                  unsubscribe: t(n),
                };
              },
              [s]() {
                return this;
              },
            };
          },
        };
      }
      function u(t) {
        const e = Object.keys(t);
        const n = {};
        for (let r = 0; r < e.length; r++) {
          const s = e[r];
          0;
          if (typeof t[s] == "function") {
            n[s] = t[s];
          }
        }
        const s = Object.keys(n);
        let i;
        try {
          (function (t) {
            Object.keys(t).forEach((e) => {
              const n = t[e];
              if (
                n(undefined, {
                  type: o.INIT,
                }) === undefined
              ) {
                throw new Error(r(12));
              }
              if (
                n(undefined, {
                  type: o.PROBE_UNKNOWN_ACTION(),
                }) === undefined
              ) {
                throw new Error(r(13));
              }
            });
          })(n);
        } catch (t) {
          i = t;
        }
        return function (t = {}, e) {
          if (i) {
            throw i;
          }
          let o = false;
          const a = {};
          for (let i = 0; i < s.length; i++) {
            const c = s[i];
            const u = n[c];
            const l = t[c];
            const d = u(l, e);
            if (d === undefined) {
              if (e) {
                e.type;
              }
              throw new Error(r(14));
            }
            a[c] = d;
            o = o || d !== l;
          }
          o = o || s.length !== Object.keys(t).length;
          if (o) {
            return a;
          } else {
            return t;
          }
        };
      }
      function l(...t) {
        if (t.length === 0) {
          return (t) => t;
        } else if (t.length === 1) {
          return t[0];
        } else {
          return t.reduce(
            (t, e) =>
              (...n) =>
                t(e(...n)),
          );
        }
      }
      function d(...t) {
        return (e) => (n, s) => {
          const i = e(n, s);
          let o = () => {
            throw new Error(r(15));
          };
          const a = {
            getState: i.getState,
            dispatch: (t, ...e) => o(t, ...e),
          };
          const c = t.map((t) => t(a));
          o = l(...c)(i.dispatch);
          return {
            ...i,
            dispatch: o,
          };
        };
      }
      function h(t) {
        return a(t) && "type" in t && typeof t.type == "string";
      }
    },
    21835: function (t, e, n) {
      n.d(e, {
        Z: () => i,
      });
      var r = true;
      var s = "Invariant failed";
      function i(t, e) {
        if (!t) {
          if (r) {
            throw new Error(s);
          }
          var n = typeof e == "function" ? e() : e;
          var i = n ? `${s}: ${n}` : s;
          throw new Error(i);
        }
      }
    },
    28395: function (t, e, n) {
      n.d(e, {
        mG: () => r,
      });
      function r(t, e, n, r) {
        return new (n ||= Promise)(function (s, i) {
          function o(t) {
            try {
              c(r.next(t));
            } catch (t) {
              i(t);
            }
          }
          function a(t) {
            try {
              c(r.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function c(t) {
            var e;
            if (t.done) {
              s(t.value);
            } else {
              ((e = t.value),
              e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  })).then(o, a);
            }
          }
          c((r = r.apply(t, e || [])).next());
        });
      }
      Object.create;
      Object.create;
    },
  },
]);
//# sourceMappingURL=262.cba7fafb01f38115.js.map
