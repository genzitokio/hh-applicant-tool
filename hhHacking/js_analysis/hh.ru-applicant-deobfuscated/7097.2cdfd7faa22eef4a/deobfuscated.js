"use strict";

(globalThis.__resume_profile_front_LOADABLE_LOADED_CHUNKS__ =
  globalThis.__resume_profile_front_LOADABLE_LOADED_CHUNKS__ || []).push([
  ["7097"],
  {
    77071: function (t, e, n) {
      var s =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, n, s = n) {
              var i = Object.getOwnPropertyDescriptor(e, n);
              if (
                !i ||
                !!("get" in i ? !e.__esModule : i.writable || i.configurable)
              ) {
                i = {
                  enumerable: true,
                  get: function () {
                    return e[n];
                  },
                };
              }
              Object.defineProperty(t, s, i);
            }
          : function (t, e, n, s = n) {
              t[s] = e[n];
            });
      var i =
        (this && this.__exportStar) ||
        function (t, e) {
          for (var n in t) {
            if (
              n !== "default" &&
              !Object.prototype.hasOwnProperty.call(e, n)
            ) {
              s(e, t, n);
            }
          }
        };
      Object.defineProperty(e, "__esModule", {
        value: true,
      });
      i(n(87243), e);
    },
    53744: function (t, e, n) {
      n.d(e, {
        VK: () => M,
        ZP: () => C,
      });
      var s = n(45144);
      var i = n(70443);
      var o = n(16019);
      var r = n(64222);
      var a = n(20727);
      var l = n(8679);
      function u(t, e) {
        if (!t) {
          var n = new Error("loadable: " + e);
          n.framesToPop = 1;
          n.name = "Invariant Violation";
          throw n;
        }
      }
      var c = s.createContext();
      var h = {
        initialChunks: {},
      };
      var d = "PENDING";
      var p = "REJECTED";
      function f(t) {
        return t;
      }
      function m(t) {
        var e = t.defaultResolveComponent;
        var n = e === undefined ? f : e;
        var m = t.render;
        var g = t.onLoad;
        function v(t, e = {}) {
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
          var v = {};
          function y(t) {
            if (e.cacheKey) {
              return e.cacheKey(t);
            } else if (f.resolve) {
              return f.resolve(t);
            } else {
              return "static";
            }
          }
          function w(t, s, i) {
            var o = e.resolveComponent ? e.resolveComponent(t, s) : n(t);
            l(i, o, {
              preload: true,
            });
            return o;
          }
          var x;
          var b;
          function S(t) {
            var e = y(t);
            var n = v[e];
            if (!n || n.status === p) {
              (n = f.requireAsync(t)).status = d;
              v[e] = n;
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
          var P = (function (t) {
            function n(n) {
              var s;
              (s = t.call(this, n) || this).state = {
                result: null,
                error: null,
                loading: true,
                cacheKey: y(n),
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
                  s.loadSync();
                  n.__chunkExtractor.addChunk(f.chunkName(n));
                }
                return (0, r.Z)(s);
              } else {
                if (
                  e.ssr !== false &&
                  ((f.isReady && f.isReady(n)) ||
                    (f.chunkName && h.initialChunks[f.chunkName(n)]))
                ) {
                  s.loadSync();
                }
                return s;
              }
            }
            (0, a.Z)(n, t);
            n.getDerivedStateFromProps = function (t, e) {
              var n = y(t);
              return (0, o.Z)({}, e, {
                cacheKey: n,
                loading: e.loading || e.cacheKey !== n,
              });
            };
            var s = n.prototype;
            s.componentDidMount = function () {
              this.mounted = true;
              var t = this.getCache();
              if (t && t.status === p) {
                this.setCache();
              }
              if (this.state.loading) {
                this.loadAsync();
              }
            };
            s.componentDidUpdate = function (t, e) {
              if (e.cacheKey !== this.state.cacheKey) {
                this.loadAsync();
              }
            };
            s.componentWillUnmount = function () {
              this.mounted = false;
            };
            s.safeSetState = function (t, e) {
              if (this.mounted) {
                this.setState(t, e);
              }
            };
            s.getCacheKey = function () {
              return y(this.props);
            };
            s.getCache = function () {
              return v[this.getCacheKey()];
            };
            s.setCache = function (t = undefined) {
              v[this.getCacheKey()] = t;
            };
            s.triggerOnLoad = function () {
              var t = this;
              if (g) {
                setTimeout(function () {
                  g(t.state.result, t.props);
                });
              }
            };
            s.loadSync = function () {
              if (this.state.loading) {
                try {
                  var t = w(f.requireSync(this.props), this.props, E);
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
            s.loadAsync = function () {
              var t = this;
              var e = this.resolveAsync();
              e.then(function (e) {
                var n = w(e, t.props, E);
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
            s.resolveAsync = function () {
              var t = this.props;
              t.__chunkExtractor;
              t.forwardedRef;
              var e = (0, i.Z)(t, ["__chunkExtractor", "forwardedRef"]);
              return S(e);
            };
            s.render = function () {
              var t = this.props;
              var n = t.forwardedRef;
              var s = t.fallback;
              t.__chunkExtractor;
              var r = (0, i.Z)(t, [
                "forwardedRef",
                "fallback",
                "__chunkExtractor",
              ]);
              var a = this.state;
              var l = a.error;
              var u = a.loading;
              var c = a.result;
              if (
                e.suspense &&
                (this.getCache() || this.loadAsync()).status === d
              ) {
                throw this.loadAsync();
              }
              if (l) {
                throw l;
              }
              var h = s || e.fallback || null;
              if (u) {
                return h;
              } else {
                return m({
                  fallback: h,
                  result: c,
                  options: e,
                  props: (0, o.Z)({}, r, {
                    ref: n,
                  }),
                });
              }
            };
            return n;
          })(s.Component);
          b = function (t) {
            return s.createElement(c.Consumer, null, function (e) {
              return s.createElement(
                x,
                Object.assign(
                  {
                    __chunkExtractor: e,
                  },
                  t,
                ),
              );
            });
          };
          if ((x = P).displayName) {
            b.displayName = x.displayName + "WithChunkExtractor";
          }
          var T = b;
          var E = s.forwardRef(function (t, e) {
            return s.createElement(
              T,
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
            return S(t);
          };
          return E;
        }
        return {
          loadable: v,
          lazy: function (t, e) {
            return v(
              t,
              (0, o.Z)({}, e, {
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
          return s.createElement(e, n);
        },
      });
      var v = g.loadable;
      var y = g.lazy;
      var w = m({
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
      var x = w.loadable;
      var b = w.lazy;
      var S = v;
      S.lib = x;
      y.lib = b;
      const P = S;
      const T = [];
      const E = [];
      const A = async (t) => {
        const e = t.map((t) => t());
        t.length = 0;
        await Promise.all(e);
        if (t.length) {
          return A(t);
        } else {
          return undefined;
        }
      };
      const M = async () => {
        await A(T);
      };
      const C = (t, e) => {
        const s = P(t, e);
        E.push(async () => {
          await s.load();
        });
        if (typeof t == "object" && "chunkName" in t && "resolve" in t) {
          const e = t.resolve();
          T.push(async () => {
            const t = n.m;
            const i = t?.[e];
            if (i) {
              await s.load();
            }
          });
        }
        const i = s;
        i.preload = (t) => s.load(t);
        return i;
      };
    },
    87054: function (t, e, n) {
      n.d(e, {
        q: () => Wn,
        q_: () => Tn,
        vc: () => Ce,
      });
      var s = n(45144);
      var i = Object.defineProperty;
      var o = {};
      ((t, e) => {
        for (var n in e) {
          i(t, n, {
            get: e[n],
            enumerable: true,
          });
        }
      })(o, {
        assign: () => F,
        colors: () => _,
        createStringInterpolator: () => V,
        skipAnimation: () => j,
        to: () => O,
        willAdvance: () => L,
      });
      var r = S();
      var a = (t) => y(t, r);
      var l = S();
      a.write = (t) => y(t, l);
      var u = S();
      a.onStart = (t) => y(t, u);
      var c = S();
      a.onFrame = (t) => y(t, c);
      var h = S();
      a.onFinish = (t) => y(t, h);
      var d = [];
      a.setTimeout = (t, e) => {
        const n = a.now() + e;
        const s = () => {
          const t = d.findIndex((t) => t.cancel == s);
          if (~t) {
            d.splice(t, 1);
          }
          g -= ~t ? 1 : 0;
        };
        const i = {
          time: n,
          handler: t,
          cancel: s,
        };
        d.splice(p(n), 0, i);
        g += 1;
        w();
        return i;
      };
      var p = (t) => ~(~d.findIndex((e) => e.time > t) || ~d.length);
      a.cancel = (t) => {
        u.delete(t);
        c.delete(t);
        h.delete(t);
        r.delete(t);
        l.delete(t);
      };
      a.sync = (t) => {
        v = true;
        a.batchedUpdates(t);
        v = false;
      };
      a.throttle = (t) => {
        let e;
        function n() {
          try {
            t(...e);
          } finally {
            e = null;
          }
        }
        function s(...t) {
          e = t;
          a.onStart(n);
        }
        s.handler = t;
        s.cancel = () => {
          u.delete(n);
          e = null;
        };
        return s;
      };
      var f =
        typeof window != "undefined" ? window.requestAnimationFrame : () => {};
      a.use = (t) => (f = t);
      a.now =
        typeof performance != "undefined" ? () => performance.now() : Date.now;
      a.batchedUpdates = (t) => t();
      a.catch = console.error;
      a.frameLoop = "always";
      a.advance = () => {
        if (a.frameLoop !== "demand") {
          console.warn(
            "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand",
          );
        } else {
          b();
        }
      };
      var m = -1;
      var g = 0;
      var v = false;
      function y(t, e) {
        if (v) {
          e.delete(t);
          t(0);
        } else {
          e.add(t);
          w();
        }
      }
      function w() {
        if (m < 0) {
          m = 0;
          if (a.frameLoop !== "demand") {
            f(x);
          }
        }
      }
      function x() {
        if (~m) {
          f(x);
          a.batchedUpdates(b);
        }
      }
      function b() {
        const t = m;
        m = a.now();
        const e = p(m);
        if (e) {
          P(d.splice(0, e), (t) => t.handler());
          g -= e;
        }
        if (g) {
          u.flush();
          r.flush(t ? Math.min(64, m - t) : 16.667);
          c.flush();
          l.flush();
          h.flush();
        } else {
          m = -1;
        }
      }
      function S() {
        let t = new Set();
        let e = t;
        return {
          add(n) {
            g += e != t || t.has(n) ? 0 : 1;
            t.add(n);
          },
          delete: (n) => {
            g -= e == t && t.has(n) ? 1 : 0;
            return t.delete(n);
          },
          flush(n) {
            if (e.size) {
              t = new Set();
              g -= e.size;
              P(e, (e) => e(n) && t.add(e));
              g += t.size;
              e = t;
            }
          },
        };
      }
      function P(t, e) {
        t.forEach((t) => {
          try {
            e(t);
          } catch (t) {
            a.catch(t);
          }
        });
      }
      function T() {}
      var E = {
        arr: Array.isArray,
        obj: (t) => !!t && t.constructor.name === "Object",
        fun: (t) => typeof t == "function",
        str: (t) => typeof t == "string",
        num: (t) => typeof t == "number",
        und: (t) => t === undefined,
      };
      function A(t, e) {
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
      var M = (t, e) => t.forEach(e);
      function C(t, e, n) {
        if (E.arr(t)) {
          for (let s = 0; s < t.length; s++) {
            e.call(n, t[s], `${s}`);
          }
        } else {
          for (const s in t) {
            if (t.hasOwnProperty(s)) {
              e.call(n, t[s], s);
            }
          }
        }
      }
      var k = (t) => (E.und(t) ? [] : E.arr(t) ? t : [t]);
      function R(t, e) {
        if (t.size) {
          const n = Array.from(t);
          t.clear();
          M(n, e);
        }
      }
      var V;
      var O;
      var D = (t, ...e) => R(t, (t) => t(...e));
      var I = () =>
        typeof window == "undefined" ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
      var _ = null;
      var j = false;
      var L = T;
      var F = (t) => {
        if (t.to) {
          O = t.to;
        }
        if (t.now) {
          a.now = t.now;
        }
        if (t.colors !== undefined) {
          _ = t.colors;
        }
        if (t.skipAnimation != null) {
          j = t.skipAnimation;
        }
        if (t.createStringInterpolator) {
          V = t.createStringInterpolator;
        }
        if (t.requestAnimationFrame) {
          a.use(t.requestAnimationFrame);
        }
        if (t.batchedUpdates) {
          a.batchedUpdates = t.batchedUpdates;
        }
        if (t.willAdvance) {
          L = t.willAdvance;
        }
        if (t.frameLoop) {
          a.frameLoop = t.frameLoop;
        }
      };
      var B = new Set();
      var z = [];
      var $ = [];
      var W = 0;
      var N = {
        get idle() {
          return !B.size && !z.length;
        },
        start(t) {
          if (W > t.priority) {
            B.add(t);
            a.onStart(U);
          } else {
            X(t);
            a(q);
          }
        },
        advance: q,
        sort(t) {
          if (W) {
            a.onFrame(() => N.sort(t));
          } else {
            const e = z.indexOf(t);
            if (~e) {
              z.splice(e, 1);
              K(t);
            }
          }
        },
        clear() {
          z = [];
          B.clear();
        },
      };
      function U() {
        B.forEach(X);
        B.clear();
        a(q);
      }
      function X(t) {
        if (!z.includes(t)) {
          K(t);
        }
      }
      function K(t) {
        z.splice(
          (function (t, e) {
            const n = t.findIndex(e);
            if (n < 0) {
              return t.length;
            } else {
              return n;
            }
          })(z, (e) => e.priority > t.priority),
          0,
          t,
        );
      }
      function q(t) {
        const e = $;
        for (let n = 0; n < z.length; n++) {
          const s = z[n];
          W = s.priority;
          if (!s.idle) {
            L(s);
            s.advance(t);
            if (!s.idle) {
              e.push(s);
            }
          }
        }
        W = 0;
        ($ = z).length = 0;
        return (z = e).length > 0;
      }
      var Y = "[-+]?\\d*\\.?\\d+";
      var H = Y + "%";
      function Z(...t) {
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      var G = new RegExp("rgb" + Z(Y, Y, Y));
      var Q = new RegExp("rgba" + Z(Y, Y, Y, Y));
      var J = new RegExp("hsl" + Z(Y, H, H));
      var tt = new RegExp("hsla" + Z(Y, H, H, Y));
      var et = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      var nt =
        /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      var st = /^#([0-9a-fA-F]{6})$/;
      var it = /^#([0-9a-fA-F]{8})$/;
      function ot(t, e, n) {
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
      function rt(t, e, n) {
        const s = n < 0.5 ? n * (1 + e) : n + e - n * e;
        const i = n * 2 - s;
        const o = ot(i, s, t + 1 / 3);
        const r = ot(i, s, t);
        const a = ot(i, s, t - 1 / 3);
        return (
          (Math.round(o * 255) << 24) |
          (Math.round(r * 255) << 16) |
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
      function lt(t) {
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
      function ct(t) {
        const e = parseFloat(t);
        if (e < 0) {
          return 0;
        } else if (e > 100) {
          return 1;
        } else {
          return e / 100;
        }
      }
      function ht(t) {
        let e = (function (t) {
          let e;
          if (typeof t == "number") {
            if (t >>> 0 === t && t >= 0 && t <= 4294967295) {
              return t;
            } else {
              return null;
            }
          } else if ((e = st.exec(t))) {
            return parseInt(e[1] + "ff", 16) >>> 0;
          } else if (_ && _[t] !== undefined) {
            return _[t];
          } else if ((e = G.exec(t))) {
            return (
              ((at(e[1]) << 24) | (at(e[2]) << 16) | (at(e[3]) << 8) | 255) >>>
              0
            );
          } else if ((e = Q.exec(t))) {
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
          } else if ((e = it.exec(t))) {
            return parseInt(e[1], 16) >>> 0;
          } else if ((e = nt.exec(t))) {
            return (
              parseInt(
                e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4],
                16,
              ) >>> 0
            );
          } else if ((e = J.exec(t))) {
            return (rt(lt(e[1]), ct(e[2]), ct(e[3])) | 255) >>> 0;
          } else if ((e = tt.exec(t))) {
            return (rt(lt(e[1]), ct(e[2]), ct(e[3])) | ut(e[4])) >>> 0;
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
      var dt = (t, e, n) => {
        if (E.fun(t)) {
          return t;
        }
        if (E.arr(t)) {
          return dt({
            range: t,
            output: e,
            extrapolate: n,
          });
        }
        if (E.str(t.output[0])) {
          return V(t);
        }
        const s = t;
        const i = s.output;
        const o = s.range || [0, 1];
        const r = s.extrapolateLeft || s.extrapolate || "extend";
        const a = s.extrapolateRight || s.extrapolate || "extend";
        const l = s.easing || ((t) => t);
        return (t) => {
          const e = (function (t, e) {
            for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n);
            return n - 1;
          })(t, o);
          return (function (t, e, n, s, i, o, r, a, l) {
            let u = l ? l(t) : t;
            if (u < e) {
              if (r === "identity") {
                return u;
              }
              if (r === "clamp") {
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
            if (s === i) {
              return s;
            }
            if (e === n) {
              if (t <= e) {
                return s;
              } else {
                return i;
              }
            }
            if (e === -Infinity) {
              u = -u;
            } else if (n === Infinity) {
              u -= e;
            } else {
              u = (u - e) / (n - e);
            }
            u = o(u);
            if (s === -Infinity) {
              u = -u;
            } else if (i === Infinity) {
              u += s;
            } else {
              u = u * (i - s) + s;
            }
            return u;
          })(t, o[e], o[e + 1], i[e], i[e + 1], l, r, a, s.map);
        };
      };
      var pt = 1.70158;
      var ft = pt * 1.525;
      var mt = pt + 1;
      var gt = (Math.PI * 2) / 3;
      var vt = (Math.PI * 2) / 4.5;
      var yt = (t) => {
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
      var wt = {
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
                    Math.sin((t * 20 - 11.125) * vt)) /
                  2
                : (Math.pow(2, t * -20 + 10) *
                    Math.sin((t * 20 - 11.125) * vt)) /
                    2 +
                  1,
        easeInBounce: (t) => 1 - yt(1 - t),
        easeOutBounce: yt,
        easeInOutBounce: (t) =>
          t < 0.5 ? (1 - yt(1 - t * 2)) / 2 : (1 + yt(t * 2 - 1)) / 2,
        steps:
          (t, e = "end") =>
          (n) => {
            const s =
              (n = e === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001)) * t;
            const i = e === "end" ? Math.floor(s) : Math.ceil(s);
            o = 0;
            r = 1;
            a = i / t;
            return Math.min(Math.max(a, o), r);
            var o;
            var r;
            var a;
          },
      };
      var xt = Symbol.for("FluidValue.get");
      var bt = Symbol.for("FluidValue.observers");
      var St = (t) => Boolean(t && t[xt]);
      var Pt = (t) => (t && t[xt] ? t[xt]() : t);
      var Tt = (t) => t[bt] || null;
      function Et(t, e) {
        const n = t[bt];
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
      var At = class {
        constructor(t) {
          if (!t && !(t = this.get)) {
            throw Error("Unknown getter");
          }
          Mt(this, t);
        }
      };
      var Mt = (t, e) => Vt(t, xt, e);
      function Ct(t, e) {
        if (t[xt]) {
          let n = t[bt];
          if (!n) {
            Vt(t, bt, (n = new Set()));
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
      function kt(t, e) {
        const n = t[bt];
        if (n && n.has(e)) {
          const s = n.size - 1;
          if (s) {
            n.delete(e);
          } else {
            t[bt] = null;
          }
          if (t.observerRemoved) {
            t.observerRemoved(s, e);
          }
        }
      }
      var Rt;
      var Vt = (t, e, n) =>
        Object.defineProperty(t, e, {
          value: n,
          writable: true,
          configurable: true,
        });
      var Ot = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
      var Dt =
        /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
      var It = new RegExp(`(${Ot.source})(%|[a-z]+)`, "i");
      var _t = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
      var jt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      var Lt = (t) => {
        const [e, n] = Ft(t);
        if (!e || I()) {
          return t;
        }
        const s = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(e);
        if (s) {
          return s.trim();
        }
        if (n && n.startsWith("--")) {
          const e = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(n);
          return e || t;
        }
        if (n && jt.test(n)) {
          return Lt(n);
        } else {
          return n || t;
        }
      };
      var Ft = (t) => {
        const e = jt.exec(t);
        if (!e) {
          return [,];
        }
        const [, n, s] = e;
        return [n, s];
      };
      var Bt = (t, e, n, s, i) =>
        `rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(s)}, ${i})`;
      var zt = (t) => {
        Rt ||= _
          ? new RegExp(`(${Object.keys(_).join("|")})(?!\\w)`, "g")
          : /^\b$/;
        const e = t.output.map((t) =>
          Pt(t).replace(jt, Lt).replace(Dt, ht).replace(Rt, ht),
        );
        const n = e.map((t) => t.match(Ot).map(Number));
        const s = n[0]
          .map((t, e) =>
            n.map((t) => {
              if (!(e in t)) {
                throw Error('The arity of each "output" value must be equal');
              }
              return t[e];
            }),
          )
          .map((e) =>
            dt({
              ...t,
              output: e,
            }),
          );
        return (t) => {
          const n =
            !It.test(e[0]) && e.find((t) => It.test(t))?.replace(Ot, "");
          let i = 0;
          return e[0]
            .replace(Ot, () => `${s[i++](t)}${n || ""}`)
            .replace(_t, Bt);
        };
      };
      var $t = "react-spring: ";
      var Wt = (t) => {
        const e = t;
        let n = false;
        if (typeof e != "function") {
          throw new TypeError(`${$t}once requires a function parameter`);
        }
        return (...t) => {
          if (!n) {
            e(...t);
            n = true;
          }
        };
      };
      var Nt = Wt(console.warn);
      var Ut = Wt(console.warn);
      function Xt(t) {
        return (
          E.str(t) &&
          (t[0] == "#" ||
            /\d/.test(t) ||
            (!I() && jt.test(t)) ||
            t in (_ || {}))
        );
      }
      var Kt = I() ? s.useEffect : s.useLayoutEffect;
      var qt = () => {
        const t = (0, s.useRef)(false);
        Kt(() => {
          t.current = true;
          return () => {
            t.current = false;
          };
        }, []);
        return t;
      };
      function Yt() {
        const t = (0, s.useState)()[1];
        const e = qt();
        return () => {
          if (e.current) {
            t(Math.random());
          }
        };
      }
      var Ht = (t) => (0, s.useEffect)(t, Zt);
      var Zt = [];
      function Gt(t) {
        const e = (0, s.useRef)();
        (0, s.useEffect)(() => {
          e.current = t;
        });
        return e.current;
      }
      var Qt = Symbol.for("Animated:node");
      var Jt = (t) => t && t[Qt];
      var te = (t, e) => {
        n = t;
        s = Qt;
        i = e;
        return Object.defineProperty(n, s, {
          value: i,
          writable: true,
          configurable: true,
        });
        var n;
        var s;
        var i;
      };
      var ee = (t) => t && t[Qt] && t[Qt].getPayload();
      var ne = class {
        constructor() {
          te(this, this);
        }
        getPayload() {
          return this.payload || [];
        }
      };
      var se = class extends ne {
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
          return new se(t);
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
      var ie = class extends se {
        constructor(t) {
          super(0);
          this._string = null;
          this._toString = dt({
            output: [t, t],
          });
        }
        static create(t) {
          return new ie(t);
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
            this._toString = dt({
              output: [this.getValue(), t],
            });
          }
          this._value = 0;
          super.reset();
        }
      };
      var oe = {
        dependencies: null,
      };
      var re = class extends ne {
        constructor(t) {
          super();
          this.source = t;
          this.setValue(t);
        }
        getValue(t) {
          const e = {};
          C(this.source, (n, s) => {
            var i;
            if ((i = n) && i[Qt] === i) {
              e[s] = n.getValue(t);
            } else if (St(n)) {
              e[s] = Pt(n);
            } else if (!t) {
              e[s] = n;
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
            M(this.payload, (t) => t.reset());
          }
        }
        _makePayload(t) {
          if (t) {
            const e = new Set();
            C(t, this._addToPayload, e);
            return Array.from(e);
          }
        }
        _addToPayload(t) {
          if (oe.dependencies && St(t)) {
            oe.dependencies.add(t);
          }
          const e = ee(t);
          if (e) {
            M(e, (t) => this.add(t));
          }
        }
      };
      var ae = class extends re {
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
            super.setValue(t.map(le));
            return true;
          }
        }
      };
      function le(t) {
        return (Xt(t) ? ie : se).create(t);
      }
      function ue(t) {
        const e = Jt(t);
        if (e) {
          return e.constructor;
        } else if (E.arr(t)) {
          return ae;
        } else if (Xt(t)) {
          return ie;
        } else {
          return se;
        }
      }
      var ce = (t, e) => {
        const n = !E.fun(t) || (t.prototype && t.prototype.isReactComponent);
        return (0, s.forwardRef)((i, o) => {
          const r = (0, s.useRef)(null);
          const l =
            n &&
            (0, s.useCallback)(
              (t) => {
                r.current = (function (t, e) {
                  if (t) {
                    if (E.fun(t)) {
                      t(e);
                    } else {
                      t.current = e;
                    }
                  }
                  return e;
                })(o, t);
              },
              [o],
            );
          const [u, c] = (function (t, e) {
            const n = new Set();
            oe.dependencies = n;
            if (t.style) {
              t = {
                ...t,
                style: e.createAnimatedStyle(t.style),
              };
            }
            t = new re(t);
            oe.dependencies = null;
            return [t, n];
          })(i, e);
          const h = Yt();
          const d = () => {
            const t = r.current;
            if (n && !t) {
              return;
            }
            if ((!!t && e.applyAnimatedValues(t, u.getValue(true))) === false) {
              h();
            }
          };
          const p = new he(d, c);
          const f = (0, s.useRef)();
          Kt(() => {
            f.current = p;
            M(c, (t) => Ct(t, p));
            return () => {
              if (f.current) {
                M(f.current.deps, (t) => kt(t, f.current));
                a.cancel(f.current.update);
              }
            };
          });
          (0, s.useEffect)(d, []);
          Ht(() => () => {
            const t = f.current;
            M(t.deps, (e) => kt(e, t));
          });
          const m = e.getComponentProps(u.getValue());
          return s.createElement(t, {
            ...m,
            ref: l,
          });
        });
      };
      var he = class {
        constructor(t, e) {
          this.update = t;
          this.deps = e;
        }
        eventObserved(t) {
          if (t.type == "change") {
            a.write(this.update);
          }
        }
      };
      var de = Symbol.for("AnimatedComponent");
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
        t === true || (!!e && !!t && !!(E.fun(t) ? t(e) : k(t).includes(e)));
      var ge = (t, e) => (E.obj(t) ? e && t[e] : t);
      var ve = (t, e) =>
        t.default === true ? t[e] : t.default ? t.default[e] : undefined;
      var ye = (t) => t;
      var we = (t, e = ye) => {
        let n = xe;
        if (t.default && t.default !== true) {
          t = t.default;
          n = Object.keys(t);
        }
        const s = {};
        for (const i of n) {
          const n = e(t[i], i);
          if (!E.und(n)) {
            s[i] = n;
          }
        }
        return s;
      };
      var xe = [
        "config",
        "onProps",
        "onStart",
        "onChange",
        "onPause",
        "onResume",
        "onRest",
      ];
      var be = {
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
      function Se(t) {
        const e = (function (t) {
          const e = {};
          let n = 0;
          C(t, (t, s) => {
            if (!be[s]) {
              e[s] = t;
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
          C(t, (t, s) => s in e || (n[s] = t));
          return n;
        }
        return {
          ...t,
        };
      }
      function Pe(t) {
        t = Pt(t);
        if (E.arr(t)) {
          return t.map(Pe);
        } else if (Xt(t)) {
          return o.createStringInterpolator({
            range: [0, 1],
            output: [t, t],
          })(1);
        } else {
          return t;
        }
      }
      function Te(t) {
        for (const e in t) {
          return true;
        }
        return false;
      }
      function Ee(t) {
        return E.fun(t) || (E.arr(t) && E.obj(t[0]));
      }
      function Ae(t, e) {
        t.ref?.delete(t);
        e?.delete(t);
      }
      function Me(t, e) {
        if (e && t.ref !== e) {
          t.ref?.delete(t);
          e.add(t);
          t.ref = e;
        }
      }
      var Ce = {
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
      var ke = {
        ...Ce.default,
        mass: 1,
        damping: 1,
        easing: wt.linear,
        clamp: false,
      };
      var Re = class {
        constructor() {
          this.velocity = 0;
          Object.assign(this, ke);
        }
      };
      function Ve(t, e) {
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
      var Oe = [];
      var De = class {
        constructor() {
          this.changed = false;
          this.values = Oe;
          this.toValues = null;
          this.fromValues = Oe;
          this.config = new Re();
          this.immediate = false;
        }
      };
      function Ie(
        t,
        { key: e, props: n, defaultProps: s, state: i, actions: r },
      ) {
        return new Promise((l, u) => {
          let c;
          let h;
          let d = me(n.cancel ?? s?.cancel, e);
          if (d) {
            m();
          } else {
            if (!E.und(n.pause)) {
              i.paused = me(n.pause, e);
            }
            let t = s?.pause;
            if (t !== true) {
              t = i.paused || me(t, e);
            }
            c = fe(n.delay || 0, e);
            if (t) {
              i.resumeQueue.add(f);
              r.pause();
            } else {
              r.resume();
              f();
            }
          }
          function p() {
            i.resumeQueue.add(f);
            i.timeouts.delete(h);
            h.cancel();
            c = h.time - a.now();
          }
          function f() {
            if (c > 0 && !o.skipAnimation) {
              i.delayed = true;
              h = a.setTimeout(m, c);
              i.pauseQueue.add(p);
              i.timeouts.add(h);
            } else {
              m();
            }
          }
          function m() {
            i.delayed &&= false;
            i.pauseQueue.delete(p);
            i.timeouts.delete(h);
            if (t <= (i.cancelId || 0)) {
              d = true;
            }
            try {
              r.start(
                {
                  ...n,
                  callId: t,
                  cancel: d,
                },
                l,
              );
            } catch (t) {
              u(t);
            }
          }
        });
      }
      var _e = (t, e) =>
        e.length == 1
          ? e[0]
          : e.some((t) => t.cancelled)
            ? Fe(t.get())
            : e.every((t) => t.noop)
              ? je(t.get())
              : Le(
                  t.get(),
                  e.every((t) => t.finished),
                );
      var je = (t) => ({
        value: t,
        noop: true,
        finished: true,
        cancelled: false,
      });
      var Le = (t, e, n = false) => ({
        value: t,
        finished: e,
        cancelled: n,
      });
      var Fe = (t) => ({
        value: t,
        cancelled: true,
        finished: false,
      });
      function Be(t, e, n, s) {
        const { callId: i, parentId: r, onRest: l } = e;
        const { asyncTo: u, promise: c } = n;
        if (r || t !== u || e.reset) {
          return (n.promise = (async () => {
            n.asyncId = i;
            n.asyncTo = t;
            const h = we(e, (t, e) => (e === "onRest" ? undefined : t));
            let d;
            let p;
            const f = new Promise((t, e) => {
              d = t;
              return (p = e);
            });
            const m = (t) => {
              const e =
                (i <= (n.cancelId || 0) && Fe(s)) ||
                (i !== n.asyncId && Le(s, false));
              if (e) {
                t.result = e;
                p(t);
                throw t;
              }
            };
            const g = (t, e) => {
              const r = new $e();
              const a = new We();
              return (async () => {
                if (o.skipAnimation) {
                  ze(n);
                  a.result = Le(s, false);
                  p(a);
                  throw a;
                }
                m(r);
                const l = E.obj(t)
                  ? {
                      ...t,
                    }
                  : {
                      ...e,
                      to: t,
                    };
                l.parentId = i;
                C(h, (t, e) => {
                  if (E.und(l[e])) {
                    l[e] = t;
                  }
                });
                const u = await s.start(l);
                m(r);
                if (n.paused) {
                  await new Promise((t) => {
                    n.resumeQueue.add(t);
                  });
                }
                return u;
              })();
            };
            let v;
            if (o.skipAnimation) {
              ze(n);
              return Le(s, false);
            }
            try {
              let e;
              e = E.arr(t)
                ? (async (t) => {
                    for (const e of t) {
                      await g(e);
                    }
                  })(t)
                : Promise.resolve(t(g, s.stop.bind(s)));
              await Promise.all([e.then(d), f]);
              v = Le(s.get(), true, false);
            } catch (t) {
              if (t instanceof $e) {
                v = t.result;
              } else {
                if (!(t instanceof We)) {
                  throw t;
                }
                v = t.result;
              }
            } finally {
              if (i == n.asyncId) {
                n.asyncId = r;
                n.asyncTo = r ? u : undefined;
                n.promise = r ? c : undefined;
              }
            }
            if (E.fun(l)) {
              a.batchedUpdates(() => {
                l(v, s, s.item);
              });
            }
            return v;
          })());
        } else {
          return c;
        }
      }
      function ze(t, e) {
        R(t.timeouts, (t) => t.cancel());
        t.pauseQueue.clear();
        t.resumeQueue.clear();
        t.asyncId = t.asyncTo = t.promise = undefined;
        if (e) {
          t.cancelId = e;
        }
      }
      var $e = class extends Error {
        constructor() {
          super(
            "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.",
          );
        }
      };
      var We = class extends Error {
        constructor() {
          super("SkipAnimationSignal");
        }
      };
      var Ne = (t) => t instanceof Xe;
      var Ue = 1;
      var Xe = class extends At {
        constructor() {
          super(...arguments);
          this.id = Ue++;
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
          const t = Jt(this);
          return t && t.getValue();
        }
        to(...t) {
          return o.to(this, t);
        }
        interpolate(...t) {
          Nt(
            `${$t}The "interpolate" function is deprecated in v9 (use "to" instead)`,
          );
          return o.to(this, t);
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
            N.sort(this);
          }
          Et(this, {
            type: "priority",
            parent: this,
            priority: t,
          });
        }
      };
      var Ke = Symbol.for("SpringPhase");
      var qe = (t) => (t[Ke] & 1) > 0;
      var Ye = (t) => (t[Ke] & 2) > 0;
      var He = (t) => (t[Ke] & 4) > 0;
      var Ze = (t, e) => (e ? (t[Ke] |= 3) : (t[Ke] &= -3));
      var Ge = (t, e) => (e ? (t[Ke] |= 4) : (t[Ke] &= -5));
      var Qe = class extends Xe {
        constructor(t, e) {
          super();
          this.animation = new De();
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
          return (!Ye(this) && !this._state.asyncTo) || He(this);
        }
        get goal() {
          return Pt(this.animation.to);
        }
        get velocity() {
          const t = Jt(this);
          if (t instanceof se) {
            return t.lastVelocity || 0;
          } else {
            return t.getPayload().map((t) => t.lastVelocity || 0);
          }
        }
        get hasAnimated() {
          return qe(this);
        }
        get isAnimating() {
          return Ye(this);
        }
        get isPaused() {
          return He(this);
        }
        get isDelayed() {
          return this._state.delayed;
        }
        advance(t) {
          let e = true;
          let n = false;
          const s = this.animation;
          let { toValues: i } = s;
          const { config: o } = s;
          const r = ee(s.to);
          if (!r && St(s.to)) {
            i = k(Pt(s.to));
          }
          s.values.forEach((a, l) => {
            if (a.done) {
              return;
            }
            const u = a.constructor == ie ? 1 : r ? r[l].lastPosition : i[l];
            let c = s.immediate;
            let h = u;
            if (!c) {
              h = a.lastPosition;
              if (o.tension <= 0) {
                a.done = true;
                return;
              }
              let e = (a.elapsedTime += t);
              const n = s.fromValues[l];
              const i = (a.v0 ??= E.arr(o.velocity)
                ? o.velocity[l]
                : o.velocity);
              let r;
              const d =
                o.precision ||
                (n == u ? 0.005 : Math.min(1, Math.abs(u - n) * 0.001));
              if (E.und(o.duration)) {
                if (o.decay) {
                  const t = o.decay === true ? 0.998 : o.decay;
                  const s = Math.exp(-(1 - t) * e);
                  h = n + (i / (1 - t)) * (1 - s);
                  c = Math.abs(a.lastPosition - h) <= d;
                  r = i * s;
                } else {
                  r = a.lastVelocity == null ? i : a.lastVelocity;
                  const e = o.restVelocity || d / 10;
                  const s = o.clamp ? 0 : o.bounce;
                  const l = !E.und(s);
                  const p = n == u ? a.v0 > 0 : n < u;
                  let f;
                  let m = false;
                  const g = 1;
                  const v = Math.ceil(t / g);
                  for (
                    let t = 0;
                    t < v &&
                    ((f = Math.abs(r) > e),
                    f || ((c = Math.abs(u - h) <= d), !c));
                    ++t
                  ) {
                    if (l) {
                      m = h == u || h > u == p;
                      if (m) {
                        r = -r * s;
                        h = u;
                      }
                    }
                    r +=
                      ((-o.tension * 0.000001 * (h - u) +
                        -o.friction * 0.001 * r) /
                        o.mass) *
                      g;
                    h += r * g;
                  }
                }
              } else {
                let s = 1;
                if (o.duration > 0) {
                  if (this._memoizedDuration !== o.duration) {
                    this._memoizedDuration = o.duration;
                    if (a.durationProgress > 0) {
                      a.elapsedTime = o.duration * a.durationProgress;
                      e = a.elapsedTime += t;
                    }
                  }
                  s = (o.progress || 0) + e / this._memoizedDuration;
                  s = s > 1 ? 1 : s < 0 ? 0 : s;
                  a.durationProgress = s;
                }
                h = n + o.easing(s) * (u - n);
                r = (h - a.lastPosition) / t;
                c = s == 1;
              }
              a.lastVelocity = r;
              if (Number.isNaN(h)) {
                console.warn("Got NaN while animating:", this);
                c = true;
              }
            }
            if (r && !r[l].done) {
              c = false;
            }
            if (c) {
              a.done = true;
            } else {
              e = false;
            }
            if (a.setValue(h, o.round)) {
              n = true;
            }
          });
          const a = Jt(this);
          const l = a.getValue();
          if (e) {
            const t = Pt(s.to);
            if ((l === t && !n) || o.decay) {
              if (n && o.decay) {
                this._onChange(l);
              }
            } else {
              a.setValue(t);
              this._onChange(t);
            }
            this._stop();
          } else if (n) {
            this._onChange(l);
          }
        }
        set(t) {
          a.batchedUpdates(() => {
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
          if (Ye(this)) {
            const { to: t, config: e } = this.animation;
            a.batchedUpdates(() => {
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
            _e(this, t),
          );
        }
        stop(t) {
          const { to: e } = this.animation;
          this._focus(this.get());
          ze(this._state, t && this._lastCallId);
          a.batchedUpdates(() => this._stop(e, t));
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
          let { to: n, from: s } = t;
          n = E.obj(n) ? n[e] : n;
          if (n == null || Ee(n)) {
            n = undefined;
          }
          s = E.obj(s) ? s[e] : s;
          if (s == null) {
            s = undefined;
          }
          const i = {
            to: n,
            from: s,
          };
          if (!qe(this)) {
            if (t.reverse) {
              [n, s] = [s, n];
            }
            s = Pt(s);
            if (E.und(s)) {
              if (!Jt(this)) {
                this._set(n);
              }
            } else {
              this._set(s);
            }
          }
          return i;
        }
        _update({ ...t }, e) {
          const { key: n, defaultProps: s } = this;
          if (t.default) {
            Object.assign(
              s,
              we(t, (t, e) => (/^on/.test(e) ? ge(t, n) : t)),
            );
          }
          rn(this, t, "onProps");
          an(this, "onProps", t, this);
          const i = this._prepareNode(t);
          if (Object.isFrozen(this)) {
            throw Error(
              "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?",
            );
          }
          const o = this._state;
          return Ie(++this._lastCallId, {
            key: n,
            props: t,
            defaultProps: s,
            state: o,
            actions: {
              pause: () => {
                if (!He(this)) {
                  Ge(this, true);
                  D(o.pauseQueue);
                  an(
                    this,
                    "onPause",
                    Le(this, Je(this, this.animation.to)),
                    this,
                  );
                }
              },
              resume: () => {
                if (He(this)) {
                  Ge(this, false);
                  if (Ye(this)) {
                    this._resume();
                  }
                  D(o.resumeQueue);
                  an(
                    this,
                    "onResume",
                    Le(this, Je(this, this.animation.to)),
                    this,
                  );
                }
              },
              start: this._merge.bind(this, i),
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
          const s = !E.und(t.to);
          const i = !E.und(t.from);
          if (s || i) {
            if (!(e.callId > this._lastToId)) {
              return n(Fe(this));
            }
            this._lastToId = e.callId;
          }
          const { key: o, defaultProps: r, animation: l } = this;
          const { to: u, from: c } = l;
          let { to: h = u, from: d = c } = t;
          if (!!i && !s && (!e.default || !!E.und(h))) {
            h = d;
          }
          if (e.reverse) {
            [h, d] = [d, h];
          }
          const p = !A(d, c);
          if (p) {
            l.from = d;
          }
          d = Pt(d);
          const f = !A(h, u);
          if (f) {
            this._focus(h);
          }
          const m = Ee(e.to);
          const { config: g } = l;
          const { decay: v, velocity: y } = g;
          if (s || i) {
            g.velocity = 0;
          }
          if (e.config && !m) {
            (function (t, e, n) {
              if (n) {
                Ve(
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
              Ve(t, e);
              Object.assign(t, e);
              for (const e in ke) {
                if (t[e] == null) {
                  t[e] = ke[e];
                }
              }
              let { frequency: s, damping: i } = t;
              const { mass: o } = t;
              if (!E.und(s)) {
                if (s < 0.01) {
                  s = 0.01;
                }
                if (i < 0) {
                  i = 0;
                }
                t.tension = Math.pow((Math.PI * 2) / s, 2) * o;
                t.friction = (Math.PI * 4 * i * o) / s;
              }
            })(
              g,
              fe(e.config, o),
              e.config !== r.config ? fe(r.config, o) : undefined,
            );
          }
          let w = Jt(this);
          if (!w || E.und(h)) {
            return n(Le(this, true));
          }
          const x = E.und(e.reset)
            ? i && !e.default
            : !E.und(d) && me(e.reset, o);
          const b = x ? d : this.get();
          const S = Pe(h);
          const P = E.num(S) || E.arr(S) || Xt(S);
          const T = !m && (!P || me(r.immediate || e.immediate, o));
          if (f) {
            const t = ue(h);
            if (t !== w.constructor) {
              if (!T) {
                throw Error(
                  `Cannot animate between ${w.constructor.name} and ${t.name}, as the "to" prop suggests`,
                );
              }
              w = this._set(S);
            }
          }
          const C = w.constructor;
          let R = St(h);
          let V = false;
          if (!R) {
            const t = x || (!qe(this) && p);
            if (f || t) {
              V = A(Pe(b), S);
              R = !V;
            }
            if (
              (!A(l.immediate, T) && !T) ||
              !A(g.decay, v) ||
              !A(g.velocity, y)
            ) {
              R = true;
            }
          }
          if (V && Ye(this)) {
            if (l.changed && !x) {
              R = true;
            } else if (!R) {
              this._stop(u);
            }
          }
          if (
            !m &&
            ((R || St(u)) &&
              ((l.values = w.getPayload()),
              (l.toValues = St(h) ? null : C == ie ? [1] : k(S))),
            l.immediate != T && ((l.immediate = T), T || x || this._set(u)),
            R)
          ) {
            const { onRest: t } = l;
            M(on, (t) => rn(this, e, t));
            const s = Le(this, Je(this, u));
            D(this._pendingCalls, s);
            this._pendingCalls.add(n);
            if (l.changed) {
              a.batchedUpdates(() => {
                l.changed = !x;
                t?.(s, this);
                if (x) {
                  fe(r.onRest, s);
                } else {
                  l.onStart?.(s, this);
                }
              });
            }
          }
          if (x) {
            this._set(b);
          }
          if (m) {
            n(Be(e.to, e, this._state, this));
          } else if (R) {
            this._start();
          } else if (Ye(this) && !f) {
            this._pendingCalls.add(n);
          } else {
            n(je(b));
          }
        }
        _focus(t) {
          const e = this.animation;
          if (t !== e.to) {
            if (Tt(this)) {
              this._detach();
            }
            e.to = t;
            if (Tt(this)) {
              this._attach();
            }
          }
        }
        _attach() {
          let t = 0;
          const { to: e } = this.animation;
          if (St(e)) {
            Ct(e, this);
            if (Ne(e)) {
              t = e.priority + 1;
            }
          }
          this.priority = t;
        }
        _detach() {
          const { to: t } = this.animation;
          if (St(t)) {
            kt(t, this);
          }
        }
        _set(t, e = true) {
          const n = Pt(t);
          if (!E.und(n)) {
            const t = Jt(this);
            if (!t || !A(n, t.getValue())) {
              const s = ue(n);
              if (t && t.constructor == s) {
                t.setValue(n);
              } else {
                te(this, s.create(n));
              }
              if (t) {
                a.batchedUpdates(() => {
                  this._onChange(n, e);
                });
              }
            }
          }
          return Jt(this);
        }
        _onStart() {
          const t = this.animation;
          if (!t.changed) {
            t.changed = true;
            an(this, "onStart", Le(this, Je(this, t.to)), this);
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
          Jt(this).reset(Pt(t.to));
          if (!t.immediate) {
            t.fromValues = t.values.map((t) => t.lastPosition);
          }
          if (!Ye(this)) {
            Ze(this, true);
            if (!He(this)) {
              this._resume();
            }
          }
        }
        _resume() {
          if (o.skipAnimation) {
            this.finish();
          } else {
            N.start(this);
          }
        }
        _stop(t, e) {
          if (Ye(this)) {
            Ze(this, false);
            const n = this.animation;
            M(n.values, (t) => {
              t.done = true;
            });
            if (n.toValues) {
              n.onChange = n.onPause = n.onResume = undefined;
            }
            Et(this, {
              type: "idle",
              parent: this,
            });
            const s = e ? Fe(this.get()) : Le(this.get(), Je(this, t ?? n.to));
            D(this._pendingCalls, s);
            if (n.changed) {
              n.changed = false;
              an(this, "onRest", s, this);
            }
          }
        }
      };
      function Je(t, e) {
        const n = Pe(e);
        return A(Pe(t.get()), n);
      }
      function tn(t, e = t.loop, n = t.to) {
        const s = fe(e);
        if (s) {
          const i = s !== true && Se(s);
          const o = (i || t).reverse;
          const r = !i || i.reset;
          return en({
            ...t,
            loop: e,
            default: false,
            pause: undefined,
            to: !o || Ee(n) ? n : undefined,
            from: r ? t.from : undefined,
            reset: r,
            ...i,
          });
        }
      }
      function en(t) {
        const { to: e, from: n } = (t = Se(t));
        const s = new Set();
        if (E.obj(e)) {
          sn(e, s);
        }
        if (E.obj(n)) {
          sn(n, s);
        }
        t.keys = s.size ? Array.from(s) : null;
        return t;
      }
      function nn(t) {
        const e = en(t);
        if (E.und(e.default)) {
          e.default = we(e);
        }
        return e;
      }
      function sn(t, e) {
        C(t, (t, n) => t != null && e.add(n));
      }
      var on = ["onStart", "onRest", "onChange", "onPause", "onResume"];
      function rn(t, e, n) {
        t.animation[n] = e[n] !== ve(e, n) ? ge(e[n], t.key) : undefined;
      }
      function an(t, e, ...n) {
        t.animation[e]?.(...n);
        t.defaultProps[e]?.(...n);
      }
      var ln = ["onStart", "onChange", "onRest"];
      var un = 1;
      var cn = class {
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
            e = k(t).map(en);
          } else {
            this.queue = [];
          }
          if (this._flush) {
            return this._flush(this, e);
          } else {
            vn(this, e);
            return hn(this, e);
          }
        }
        stop(t, e) {
          if (t !== !!t) {
            e = t;
          }
          if (e) {
            const n = this.springs;
            M(k(e), (e) => n[e].stop(!!t));
          } else {
            ze(this._state, this._lastAsyncId);
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
            M(k(t), (t) => e[t].pause());
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
            M(k(t), (t) => e[t].resume());
          }
          return this;
        }
        each(t) {
          C(this.springs, t);
        }
        _onFrame() {
          const { onStart: t, onChange: e, onRest: n } = this._events;
          const s = this._active.size > 0;
          const i = this._changed.size > 0;
          if ((s && !this._started) || (i && !this._started)) {
            this._started = true;
            R(t, ([t, e]) => {
              e.value = this.get();
              t(e, this, this._item);
            });
          }
          const o = !s && this._started;
          const r = i || (o && n.size) ? this.get() : null;
          if (i && e.size) {
            R(e, ([t, e]) => {
              e.value = r;
              t(e, this, this._item);
            });
          }
          if (o) {
            this._started = false;
            R(n, ([t, e]) => {
              e.value = r;
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
          a.onFrame(this._onFrame);
        }
      };
      function hn(t, e) {
        return Promise.all(e.map((e) => dn(t, e))).then((e) => _e(t, e));
      }
      async function dn(t, e, n) {
        const { keys: s, to: i, from: o, loop: r, onRest: l, onResolve: u } = e;
        const c = E.obj(e.default) && e.default;
        if (r) {
          e.loop = false;
        }
        if (i === false) {
          e.to = null;
        }
        if (o === false) {
          e.from = null;
        }
        const h = E.arr(i) || E.fun(i) ? i : undefined;
        if (h) {
          e.to = undefined;
          e.onRest = undefined;
          if (c) {
            c.onRest = undefined;
          }
        } else {
          M(ln, (n) => {
            const s = e[n];
            if (E.fun(s)) {
              const i = t._events[n];
              e[n] = ({ finished: t, cancelled: e }) => {
                const n = i.get(s);
                if (n) {
                  if (!t) {
                    n.finished = false;
                  }
                  if (e) {
                    n.cancelled = true;
                  }
                } else {
                  i.set(s, {
                    value: null,
                    finished: t || false,
                    cancelled: e || false,
                  });
                }
              };
              if (c) {
                c[n] = e[n];
              }
            }
          });
        }
        const d = t._state;
        if (e.pause === !d.paused) {
          d.paused = e.pause;
          D(e.pause ? d.pauseQueue : d.resumeQueue);
        } else if (d.paused) {
          e.pause = true;
        }
        const p = (s || Object.keys(t.springs)).map((n) =>
          t.springs[n].start(e),
        );
        const f = e.cancel === true || ve(e, "cancel") === true;
        if (h || (f && d.asyncId)) {
          p.push(
            Ie(++t._lastAsyncId, {
              props: e,
              state: d,
              actions: {
                pause: T,
                resume: T,
                start(e, n) {
                  if (f) {
                    ze(d, t._lastAsyncId);
                    n(Fe(t));
                  } else {
                    e.onRest = l;
                    n(Be(h, e, d, t));
                  }
                },
              },
            }),
          );
        }
        if (d.paused) {
          await new Promise((t) => {
            d.resumeQueue.add(t);
          });
        }
        const m = _e(t, await Promise.all(p));
        if (r && m.finished && (!n || !m.noop)) {
          const n = tn(e, r, i);
          if (n) {
            vn(t, [n]);
            return dn(t, n, true);
          }
        }
        if (u) {
          a.batchedUpdates(() => u(m, t, t.item));
        }
        return m;
      }
      function pn(t, e) {
        const n = {
          ...t.springs,
        };
        if (e) {
          M(k(e), (t) => {
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
        C(e, (e, n) => {
          if (!t.springs[n]) {
            t.springs[n] = e;
            Ct(e, t);
          }
        });
      }
      function mn(t, e) {
        const n = new Qe();
        n.key = t;
        if (e) {
          Ct(n, e);
        }
        return n;
      }
      function gn(t, e, n) {
        if (e.keys) {
          M(e.keys, (s) => {
            (t[s] ||= n(s))._prepareNode(e);
          });
        }
      }
      function vn(t, e) {
        M(e, (e) => {
          gn(t.springs, e, (e) => mn(e, t));
        });
      }
      var yn;
      var wn;
      var xn = ({ children: t, ...e }) => {
        const n = (0, s.useContext)(bn);
        const i = e.pause || !!n.pause;
        const o = e.immediate || !!n.immediate;
        e = (function (t, e) {
          const [n] = (0, s.useState)(() => ({
            inputs: e,
            result: t(),
          }));
          const i = (0, s.useRef)();
          const o = i.current;
          let r = o;
          if (r) {
            if (
              !Boolean(
                e &&
                r.inputs &&
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
                })(e, r.inputs),
              )
            ) {
              r = {
                inputs: e,
                result: t(),
              };
            }
          } else {
            r = n;
          }
          (0, s.useEffect)(() => {
            i.current = r;
            if (o == n) {
              n.inputs = n.result = undefined;
            }
          }, [r]);
          return r.result;
        })(
          () => ({
            pause: i,
            immediate: o,
          }),
          [i, o],
        );
        const { Provider: r } = bn;
        return s.createElement(
          r,
          {
            value: e,
          },
          t,
        );
      };
      yn = xn;
      wn = {};
      Object.assign(yn, s.createContext(wn));
      yn.Provider._context = yn;
      yn.Consumer._context = yn;
      var bn = yn;
      xn.Provider = bn.Provider;
      xn.Consumer = bn.Consumer;
      var Sn = () => {
        const t = [];
        const e = function (e) {
          Ut(
            `${$t}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
          );
          const s = [];
          M(t, (t, i) => {
            if (E.und(e)) {
              s.push(t.start());
            } else {
              const o = n(e, t, i);
              if (o) {
                s.push(t.start(o));
              }
            }
          });
          return s;
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
          M(t, (t) => t.pause(...arguments));
          return this;
        };
        e.resume = function () {
          M(t, (t) => t.resume(...arguments));
          return this;
        };
        e.set = function (e) {
          M(t, (t, n) => {
            const s = E.fun(e) ? e(n, t) : e;
            if (s) {
              t.set(s);
            }
          });
        };
        e.start = function (e) {
          const n = [];
          M(t, (t, s) => {
            if (E.und(e)) {
              n.push(t.start());
            } else {
              const i = this._getProps(e, t, s);
              if (i) {
                n.push(t.start(i));
              }
            }
          });
          return n;
        };
        e.stop = function () {
          M(t, (t) => t.stop(...arguments));
          return this;
        };
        e.update = function (e) {
          M(t, (t, n) => t.update(this._getProps(e, t, n)));
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
      function Pn(t, e, n) {
        const i = E.fun(e) && e;
        if (i && !n) {
          n = [];
        }
        const o = (0, s.useMemo)(
          () => (i || arguments.length == 3 ? Sn() : undefined),
          [],
        );
        const r = (0, s.useRef)(0);
        const a = Yt();
        const l = (0, s.useMemo)(
          () => ({
            ctrls: [],
            queue: [],
            flush(t, e) {
              const n = pn(t, e);
              if (
                r.current > 0 &&
                !l.queue.length &&
                !Object.keys(n).some((e) => !t.springs[e])
              ) {
                return hn(t, e);
              } else {
                return new Promise((s) => {
                  fn(t, n);
                  l.queue.push(() => {
                    s(hn(t, e));
                  });
                  a();
                });
              }
            },
          }),
          [],
        );
        const u = (0, s.useRef)([...l.ctrls]);
        const c = [];
        const h = Gt(t) || 0;
        function d(t, n) {
          for (let s = t; s < n; s++) {
            const t = (u.current[s] ||= new cn(null, l.flush));
            const n = i ? i(s, t) : e[s];
            if (n) {
              c[s] = nn(n);
            }
          }
        }
        (0, s.useMemo)(() => {
          M(u.current.slice(t, h), (t) => {
            Ae(t, o);
            t.stop(true);
          });
          u.current.length = t;
          d(h, t);
        }, [t]);
        (0, s.useMemo)(() => {
          d(0, Math.min(h, t));
        }, n);
        const p = u.current.map((t, e) => pn(t, c[e]));
        const f = (0, s.useContext)(xn);
        const m = Gt(f);
        const g = f !== m && Te(f);
        Kt(() => {
          r.current++;
          l.ctrls = u.current;
          const { queue: t } = l;
          if (t.length) {
            l.queue = [];
            M(t, (t) => t());
          }
          M(u.current, (t, e) => {
            o?.add(t);
            if (g) {
              t.start({
                default: f,
              });
            }
            const n = c[e];
            if (n) {
              Me(t, n.ref);
              if (t.ref) {
                t.queue.push(n);
              } else {
                t.start(n);
              }
            }
          });
        });
        Ht(() => () => {
          M(l.ctrls, (t) => t.stop(true));
        });
        const v = p.map((t) => ({
          ...t,
        }));
        if (o) {
          return [v, o];
        } else {
          return v;
        }
      }
      function Tn(t, e) {
        const n = E.fun(t);
        const [[s], i] = Pn(1, n ? t : [t], n ? e || [] : e);
        if (n || arguments.length == 2) {
          return [s, i];
        } else {
          return s;
        }
      }
      var En = class extends Xe {
        constructor(t, e) {
          super();
          this.source = t;
          this.idle = true;
          this._active = new Set();
          this.calc = dt(...e);
          const n = this._get();
          const s = ue(n);
          te(this, s.create(n));
        }
        advance(t) {
          const e = this._get();
          if (!A(e, this.get())) {
            Jt(this).setValue(e);
            this._onChange(e, this.idle);
          }
          if (!this.idle && Mn(this._active)) {
            Cn(this);
          }
        }
        _get() {
          const t = E.arr(this.source)
            ? this.source.map(Pt)
            : k(Pt(this.source));
          return this.calc(...t);
        }
        _start() {
          if (this.idle && !Mn(this._active)) {
            this.idle = false;
            M(ee(this), (t) => {
              t.done = false;
            });
            if (o.skipAnimation) {
              a.batchedUpdates(() => this.advance());
              Cn(this);
            } else {
              N.start(this);
            }
          }
        }
        _attach() {
          let t = 1;
          M(k(this.source), (e) => {
            if (St(e)) {
              Ct(e, this);
            }
            if (Ne(e)) {
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
          M(k(this.source), (t) => {
            if (St(t)) {
              kt(t, this);
            }
          });
          this._active.clear();
          Cn(this);
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
            this.priority = k(this.source).reduce(
              (t, e) => Math.max(t, (Ne(e) ? e.priority : 0) + 1),
              0,
            );
          }
        }
      };
      function An(t) {
        return t.idle !== false;
      }
      function Mn(t) {
        return !t.size || Array.from(t).every(An);
      }
      function Cn(t) {
        if (!t.idle) {
          t.idle = true;
          M(ee(t), (t) => {
            t.done = true;
          });
          Et(t, {
            type: "idle",
            parent: t,
          });
        }
      }
      o.assign({
        createStringInterpolator: zt,
        to: (t, e) => new En(t, e),
      });
      N.advance;
      var kn = n(1785);
      var Rn = /^--/;
      function Vn(t, e) {
        if (e == null || typeof e == "boolean" || e === "") {
          return "";
        } else if (
          typeof e != "number" ||
          e === 0 ||
          Rn.test(t) ||
          (Dn.hasOwnProperty(t) && Dn[t])
        ) {
          return ("" + e).trim();
        } else {
          return e + "px";
        }
      }
      var On = {};
      var Dn = {
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
      var In = ["Webkit", "Ms", "Moz", "O"];
      Dn = Object.keys(Dn).reduce((t, e) => {
        In.forEach(
          (n) =>
            (t[
              ((t, e) => t + e.charAt(0).toUpperCase() + e.substring(1))(n, e)
            ] = t[e]),
        );
        return t;
      }, Dn);
      var _n = /^(matrix|translate|scale|rotate|skew)/;
      var jn = /^(translate)/;
      var Ln = /^(rotate|skew)/;
      var Fn = (t, e) => (E.num(t) && t !== 0 ? t + e : t);
      var Bn = (t, e) =>
        E.arr(t)
          ? t.every((t) => Bn(t, e))
          : E.num(t)
            ? t === e
            : parseFloat(t) === e;
      var zn = class extends re {
        constructor({ x: t, y: e, z: n, ...s }) {
          const i = [];
          const o = [];
          if (t || e || n) {
            i.push([t || 0, e || 0, n || 0]);
            o.push((t) => [
              `translate3d(${t.map((t) => Fn(t, "px")).join(",")})`,
              Bn(t, 0),
            ]);
          }
          C(s, (t, e) => {
            if (e === "transform") {
              i.push([t || ""]);
              o.push((t) => [t, t === ""]);
            } else if (_n.test(e)) {
              delete s[e];
              if (E.und(t)) {
                return;
              }
              const n = jn.test(e) ? "px" : Ln.test(e) ? "deg" : "";
              i.push(k(t));
              o.push(
                e === "rotate3d"
                  ? ([t, e, s, i]) => [
                      `rotate3d(${t},${e},${s},${Fn(i, n)})`,
                      Bn(i, 0),
                    ]
                  : (t) => [
                      `${e}(${t.map((t) => Fn(t, n)).join(",")})`,
                      Bn(t, e.startsWith("scale") ? 1 : 0),
                    ],
              );
            }
          });
          if (i.length) {
            s.transform = new $n(i, o);
          }
          super(s);
        }
      };
      var $n = class extends At {
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
          M(this.inputs, (n, s) => {
            const i = Pt(n[0]);
            const [o, r] = this.transforms[s](E.arr(i) ? i : n.map(Pt));
            t += " " + o;
            e = e && r;
          });
          if (e) {
            return "none";
          } else {
            return t;
          }
        }
        observerAdded(t) {
          if (t == 1) {
            M(this.inputs, (t) => M(t, (t) => St(t) && Ct(t, this)));
          }
        }
        observerRemoved(t) {
          if (t == 0) {
            M(this.inputs, (t) => M(t, (t) => St(t) && kt(t, this)));
          }
        }
        eventObserved(t) {
          if (t.type == "change") {
            this._value = null;
          }
          Et(this, t);
        }
      };
      o.assign({
        batchedUpdates: kn.unstable_batchedUpdates,
        createStringInterpolator: zt,
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
      var Wn = ((
        t,
        {
          applyAnimatedValues: e = () => false,
          createAnimatedStyle: n = (t) => new re(t),
          getComponentProps: s = (t) => t,
        } = {},
      ) => {
        const i = {
          applyAnimatedValues: e,
          createAnimatedStyle: n,
          getComponentProps: s,
        };
        const o = (t) => {
          const e = pe(t) || "Anonymous";
          (t = E.str(t)
            ? (o[t] ||= ce(t, i))
            : (t[de] ||= ce(t, i))).displayName = `Animated(${e})`;
          return t;
        };
        C(t, (e, n) => {
          if (E.arr(t)) {
            n = pe(e);
          }
          o[n] = o(e);
        });
        return {
          animated: o,
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
              style: s,
              children: i,
              scrollTop: o,
              scrollLeft: r,
              viewBox: a,
              ...l
            } = e;
            const u = Object.values(l);
            const c = Object.keys(l).map((e) =>
              n || t.hasAttribute(e)
                ? e
                : (On[e] ||= e.replace(
                    /([A-Z])/g,
                    (t) => "-" + t.toLowerCase(),
                  )),
            );
            if (i !== undefined) {
              t.textContent = i;
            }
            for (const e in s) {
              if (s.hasOwnProperty(e)) {
                const n = Vn(e, s[e]);
                if (Rn.test(e)) {
                  t.style.setProperty(e, n);
                } else {
                  t.style[e] = n;
                }
              }
            }
            c.forEach((e, n) => {
              t.setAttribute(e, u[n]);
            });
            if (o !== undefined) {
              t.scrollTop = o;
            }
            if (r !== undefined) {
              t.scrollLeft = r;
            }
            if (a !== undefined) {
              t.setAttribute("viewBox", a);
            }
          },
          createAnimatedStyle: (t) => new zn(t),
          getComponentProps: ({ scrollTop: t, scrollLeft: e, ...n }) => n,
        },
      ).animated;
    },
    70107: function (t, e, n) {
      n.d(e, {
        hO: () => T,
        MG: () => P,
      });
      var s = n(45144);
      var i = n(1785);
      function o(t, e, n) {
        let s;
        let i = n.initialDeps ?? [];
        return () => {
          var o;
          var r;
          var a;
          var l;
          let u;
          if (n.key && ((o = n.debug) == null ? undefined : o.call(n))) {
            u = Date.now();
          }
          const c = t();
          if (c.length === i.length && !c.some((t, e) => i[e] !== t)) {
            return s;
          }
          let h;
          i = c;
          if (n.key && ((r = n.debug) == null ? undefined : r.call(n))) {
            h = Date.now();
          }
          s = e(...c);
          if (n.key && ((a = n.debug) == null ? undefined : a.call(n))) {
            const t = Math.round((Date.now() - u) * 100) / 100;
            const e = Math.round((Date.now() - h) * 100) / 100;
            const s = e / 16;
            const i = (t, e) => {
              for (t = String(t); t.length < e; ) {
                t = " " + t;
              }
              return t;
            };
            console.info(
              `%c⏱ ${i(e, 5)} /${i(t, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - s * 120, 120))}deg 100% 31%);`,
              n == null ? undefined : n.key,
            );
          }
          if ((l = n == null ? undefined : n.onChange) != null) {
            l.call(n, s);
          }
          return s;
        };
      }
      function r(t, e) {
        if (t === undefined) {
          throw new Error("Unexpected undefined" + (e ? `: ${e}` : ""));
        }
        return t;
      }
      const a = (t, e, n) => {
        let s;
        return function (...i) {
          t.clearTimeout(s);
          s = t.setTimeout(() => e.apply(this, i), n);
        };
      };
      const l = (t) => t;
      const u = (t) => {
        const e = Math.max(t.startIndex - t.overscan, 0);
        const n = Math.min(t.endIndex + t.overscan, t.count - 1);
        const s = [];
        for (let t = e; t <= n; t++) {
          s.push(t);
        }
        return s;
      };
      const c = (t, e) => {
        const n = t.scrollElement;
        if (!n) {
          return;
        }
        const s = t.targetWindow;
        if (!s) {
          return;
        }
        const i = (t) => {
          const { width: n, height: s } = t;
          e({
            width: Math.round(n),
            height: Math.round(s),
          });
        };
        i(n.getBoundingClientRect());
        if (!s.ResizeObserver) {
          return () => {};
        }
        const o = new s.ResizeObserver((t) => {
          const e = t[0];
          if (e == null ? undefined : e.borderBoxSize) {
            const t = e.borderBoxSize[0];
            if (t) {
              i({
                width: t.inlineSize,
                height: t.blockSize,
              });
              return;
            }
          }
          i(n.getBoundingClientRect());
        });
        o.observe(n, {
          box: "border-box",
        });
        return () => {
          o.unobserve(n);
        };
      };
      const h = {
        passive: true,
      };
      const d = (t, e) => {
        const n = t.scrollElement;
        if (!n) {
          return;
        }
        const s = () => {
          e({
            width: n.innerWidth,
            height: n.innerHeight,
          });
        };
        s();
        n.addEventListener("resize", s, h);
        return () => {
          n.removeEventListener("resize", s);
        };
      };
      const p = typeof window == "undefined" || "onscrollend" in window;
      const f = (t, e) => {
        const n = t.scrollElement;
        if (!n) {
          return;
        }
        const s = t.targetWindow;
        if (!s) {
          return;
        }
        let i = 0;
        const o = p
          ? () => {}
          : a(
              s,
              () => {
                e(i, false);
              },
              t.options.isScrollingResetDelay,
            );
        const r = (s) => () => {
          i = n[t.options.horizontal ? "scrollLeft" : "scrollTop"];
          o();
          e(i, s);
        };
        const l = r(true);
        const u = r(false);
        u();
        n.addEventListener("scroll", l, h);
        n.addEventListener("scrollend", u, h);
        return () => {
          n.removeEventListener("scroll", l);
          n.removeEventListener("scrollend", u);
        };
      };
      const m = (t, e) => {
        const n = t.scrollElement;
        if (!n) {
          return;
        }
        const s = t.targetWindow;
        if (!s) {
          return;
        }
        let i = 0;
        const o = p
          ? () => {}
          : a(
              s,
              () => {
                e(i, false);
              },
              t.options.isScrollingResetDelay,
            );
        const r = (s) => () => {
          i = n[t.options.horizontal ? "scrollX" : "scrollY"];
          o();
          e(i, s);
        };
        const l = r(true);
        const u = r(false);
        u();
        n.addEventListener("scroll", l, h);
        n.addEventListener("scrollend", u, h);
        return () => {
          n.removeEventListener("scroll", l);
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
      const v = (t, { adjustments: e = 0, behavior: n }, s) => {
        var i;
        var o;
        const r = t + e;
        if (
          (o = (i = s.scrollElement) == null ? undefined : i.scrollTo) != null
        ) {
          o.call(i, {
            [s.options.horizontal ? "left" : "top"]: r,
            behavior: n,
          });
        }
      };
      const y = (t, { adjustments: e = 0, behavior: n }, s) => {
        var i;
        var o;
        const r = t + e;
        if (
          (o = (i = s.scrollElement) == null ? undefined : i.scrollTo) != null
        ) {
          o.call(i, {
            [s.options.horizontal ? "left" : "top"]: r,
            behavior: n,
          });
        }
      };
      class w {
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
              getItemKey: l,
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
            var s;
            const { startIndex: i, endIndex: o } = this.range ?? {
              startIndex: undefined,
              endIndex: undefined,
            };
            const r = this.calculateRange();
            if (
              t ||
              i !== (r == null ? undefined : r.startIndex) ||
              o !== (r == null ? undefined : r.endIndex)
            ) {
              if ((s = (n = this.options).onChange) != null) {
                s.call(n, this, e);
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
            const s = new Map();
            for (let i = e - 1; i >= 0; i--) {
              const e = t[i];
              if (n.has(e.lane)) {
                continue;
              }
              const o = s.get(e.lane);
              if (o == null || e.end > o.end) {
                s.set(e.lane, e);
              } else if (e.end < o.end) {
                n.set(e.lane, true);
              }
              if (n.size === this.options.lanes) {
                break;
              }
            }
            if (s.size === this.options.lanes) {
              return Array.from(s.values()).sort((t, e) =>
                t.end === e.end ? t.index - e.index : t.end - e.end,
              )[0];
            } else {
              return undefined;
            }
          };
          this.getMeasurementOptions = o(
            () => [
              this.options.count,
              this.options.paddingStart,
              this.options.scrollMargin,
              this.options.getItemKey,
              this.options.enabled,
            ],
            (t, e, n, s, i) => {
              this.pendingMeasuredCacheIndexes = [];
              return {
                count: t,
                paddingStart: e,
                scrollMargin: n,
                getItemKey: s,
                enabled: i,
              };
            },
            {
              key: false,
            },
          );
          this.getMeasurements = o(
            () => [this.getMeasurementOptions(), this.itemSizeCache],
            (
              {
                count: t,
                paddingStart: e,
                scrollMargin: n,
                getItemKey: s,
                enabled: i,
              },
              o,
            ) => {
              var r;
              if (!i) {
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
              const l = this.measurementsCache.slice(0, a);
              for (let i = a; i < t; i++) {
                let t =
                  (r = this.measurementsCache[i]) == null
                    ? undefined
                    : r.measureElement;
                t ||= (t) => {
                  const e = s(i);
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
                        i,
                        this.options.measureElement(t, undefined, this),
                      );
                    }
                  } else if (n) {
                    this.observer.unobserve(n);
                    this.elementsCache.delete(e);
                  }
                };
                const a = s(i);
                const u =
                  this.options.lanes === 1
                    ? l[i - 1]
                    : this.getFurthestMeasurement(l, i);
                const c = u ? u.end + this.options.gap : e + n;
                const h = o.get(a);
                const d =
                  typeof h == "number" ? h : this.options.estimateSize(i);
                const p = c + d;
                const f = u ? u.lane : i % this.options.lanes;
                l[i] = {
                  index: i,
                  start: c,
                  size: d,
                  end: p,
                  key: a,
                  lane: f,
                  measureElement: t,
                };
              }
              this.measurementsCache = l;
              return l;
            },
            {
              key: false,
              debug: () => this.options.debug,
            },
          );
          this.calculateRange = o(
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
                      const s = t.length - 1;
                      const i = (e) => t[e].start;
                      const o = x(0, s, i, n);
                      let r = o;
                      while (r < s && t[r].end < n + e) {
                        r++;
                      }
                      return {
                        startIndex: o,
                        endIndex: r,
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
          this.getIndexes = o(
            () => [
              this.options.rangeExtractor,
              this.calculateRange(),
              this.options.overscan,
              this.options.count,
            ],
            (t, e, n, s) =>
              e === null
                ? []
                : t({
                    startIndex: e.startIndex,
                    endIndex: e.endIndex,
                    overscan: n,
                    count: s,
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
            const s = this.getMeasurements()[n];
            if (!s || !t.isConnected) {
              this.elementsCache.forEach((e, n) => {
                if (e === t) {
                  this.observer.unobserve(t);
                  this.elementsCache.delete(n);
                }
              });
              return;
            }
            const i = this.elementsCache.get(s.key);
            if (i !== t) {
              if (i) {
                this.observer.unobserve(i);
              }
              this.observer.observe(t);
              this.elementsCache.set(s.key, t);
            }
            this.resizeItem(n, this.options.measureElement(t, e, this));
          };
          this.resizeItem = (t, e) => {
            const n = this.getMeasurements()[t];
            if (!n) {
              return;
            }
            const s = e - (this.itemSizeCache.get(n.key) ?? n.size);
            if (s !== 0) {
              if (
                this.shouldAdjustScrollPositionOnItemSizeChange !== undefined
                  ? this.shouldAdjustScrollPositionOnItemSizeChange(n, s, this)
                  : n.start < this.getScrollOffset() + this.scrollAdjustments
              ) {
                this._scrollToOffset(this.getScrollOffset(), {
                  adjustments: (this.scrollAdjustments += s),
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
          this.getVirtualItems = o(
            () => [this.getIndexes(), this.getMeasurements()],
            (t, e) => {
              const n = [];
              for (let s = 0, i = t.length; s < i; s++) {
                const i = e[t[s]];
                n.push(i);
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
              return r(e[x(0, e.length - 1, (t) => r(e[t]).start, t)]);
            }
          };
          this.getOffsetForAlignment = (t, e) => {
            const n = this.getSize();
            const s = this.getScrollOffset();
            if (e === "auto") {
              e = t <= s ? "start" : t >= s + n ? "end" : "start";
            }
            if (e !== "start") {
              if (e === "end") {
                t -= n;
              } else if (e === "center") {
                t -= n / 2;
              }
            }
            const i = this.options.horizontal ? "scrollWidth" : "scrollHeight";
            const o =
              (this.scrollElement
                ? "document" in this.scrollElement
                  ? this.scrollElement.document.documentElement[i]
                  : this.scrollElement[i]
                : 0) - n;
            return Math.max(Math.min(o, t), 0);
          };
          this.getOffsetForIndex = (t, e = "auto") => {
            t = Math.max(0, Math.min(t, this.options.count - 1));
            const n = this.getMeasurements()[t];
            if (!n) {
              return;
            }
            const s = this.getSize();
            const i = this.getScrollOffset();
            if (e === "auto") {
              if (n.end >= i + s - this.options.scrollPaddingEnd) {
                e = "end";
              } else {
                if (!(n.start <= i + this.options.scrollPaddingStart)) {
                  return [i, e];
                }
                e = "start";
              }
            }
            const o =
              e === "end"
                ? n.end + this.options.scrollPaddingEnd
                : n.start - this.options.scrollPaddingStart;
            return [this.getOffsetForAlignment(o, e), e];
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
            const s = this.getOffsetForIndex(t, e);
            if (!s) {
              return;
            }
            const [i, o] = s;
            this._scrollToOffset(i, {
              adjustments: undefined,
              behavior: n,
            });
            if (n !== "smooth" && this.isDynamicMode() && this.targetWindow) {
              this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                this.scrollToIndexTimeoutId = null;
                if (this.elementsCache.has(this.options.getItemKey(t))) {
                  const [i] = r(this.getOffsetForIndex(t, o));
                  e = i;
                  s = this.getScrollOffset();
                  if (!(Math.abs(e - s) < 1)) {
                    this.scrollToIndex(t, {
                      align: o,
                      behavior: n,
                    });
                  }
                } else {
                  this.scrollToIndex(t, {
                    align: o,
                    behavior: n,
                  });
                }
                var e;
                var s;
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
      const x = (t, e, n, s) => {
        while (t <= e) {
          const i = ((t + e) / 2) | 0;
          const o = n(i);
          if (o < s) {
            t = i + 1;
          } else {
            if (!(o > s)) {
              return i;
            }
            e = i - 1;
          }
        }
        if (t > 0) {
          return t - 1;
        } else {
          return 0;
        }
      };
      const b =
        typeof document != "undefined" ? s.useLayoutEffect : s.useEffect;
      function S(t) {
        const e = s.useReducer(() => ({}), {})[1];
        const n = {
          ...t,
          onChange: (n, s) => {
            var o;
            if (s) {
              (0, i.flushSync)(e);
            } else {
              e();
            }
            if ((o = t.onChange) != null) {
              o.call(t, n, s);
            }
          },
        };
        const [o] = s.useState(() => new w(n));
        o.setOptions(n);
        s.useEffect(() => o._didMount(), []);
        b(() => o._willUpdate());
        return o;
      }
      function P(t) {
        return S({
          observeElementRect: c,
          observeElementOffset: f,
          scrollToFn: y,
          ...t,
        });
      }
      function T(t) {
        return S({
          getScrollElement: () =>
            typeof document != "undefined" ? window : null,
          observeElementRect: d,
          observeElementOffset: m,
          scrollToFn: v,
          initialOffset: () =>
            typeof document != "undefined" ? window.scrollY : 0,
          ...t,
        });
      }
    },
    38348: function (t, e, n) {
      n.d(e, {
        mG: () => s,
      });
      function s(t, e, n, s) {
        return new (n ||= Promise)(function (i, o) {
          function r(t) {
            try {
              l(s.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              l(s.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function l(t) {
            var e;
            if (t.done) {
              i(t.value);
            } else {
              ((e = t.value),
              e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  })).then(r, a);
            }
          }
          l((s = s.apply(t, e || [])).next());
        });
      }
      Object.create;
      Object.create;
    },
    76961: function (t, e, n) {
      n.d(e, {
        j: () => Z,
      });
      class s {
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
          return i(this.animations, "duration");
        }
        get iterationDuration() {
          return i(this.animations, "iterationDuration");
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
      function i(t, e) {
        let n = 0;
        for (let s = 0; s < t.length; s++) {
          const i = t[s][e];
          if (i !== null && i > n) {
            n = i;
          }
        }
        return n;
      }
      class o extends s {
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
      }
      var r = n(25013);
      var a = n(40187);
      var l = n(71519);
      var u = n(20479);
      var c = n(65399);
      var h = n(54293);
      var d = n(45875);
      var p = n(15244);
      var f = n(26975);
      const m = (t, e, n) => {
        const s = e - t;
        return ((((n - t) % s) + s) % s) + t;
      };
      var g = n(61209);
      function v(t, e) {
        if ((0, g.N)(t)) {
          return t[m(0, t.length, e)];
        } else {
          return t;
        }
      }
      var y = n(66789);
      var w = n(6419);
      function x(t) {
        return typeof t == "object" && !Array.isArray(t);
      }
      function b(t, e, n, s) {
        if (typeof t == "string" && x(e)) {
          return (0, w.I)(t, n, s);
        } else if (t instanceof NodeList) {
          return Array.from(t);
        } else if (Array.isArray(t)) {
          return t;
        } else {
          return [t];
        }
      }
      function S(t, e, n) {
        return t * (e + 1);
      }
      function P(t, e, n, s) {
        if (typeof e == "number") {
          return e;
        } else if (e.startsWith("-") || e.startsWith("+")) {
          return Math.max(0, t + parseFloat(e));
        } else if (e === "<") {
          return n;
        } else if (e.startsWith("<")) {
          return Math.max(0, n + parseFloat(e.slice(1)));
        } else {
          return s.get(e) ?? t;
        }
      }
      var T = n(55153);
      function E(t, e, n, s, i, o) {
        (function (t, e, n) {
          for (let s = 0; s < t.length; s++) {
            const i = t[s];
            if (i.at > e && i.at < n) {
              (0, r.cl)(t, i);
              s--;
            }
          }
        })(t, i, o);
        for (let r = 0; r < e.length; r++) {
          t.push({
            value: e[r],
            at: (0, T.t)(i, o, s[r]),
            easing: v(n, r),
          });
        }
      }
      function A(t, e) {
        for (let n = 0; n < t.length; n++) {
          t[n] = t[n] / (e + 1);
        }
      }
      function M(t, e) {
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
      const C = "easeInOut";
      const k = 20;
      function R(t, e) {
        if (!e.has(t)) {
          e.set(t, {});
        }
        return e.get(t);
      }
      function V(t, e) {
        e[t] ||= [];
        return e[t];
      }
      function O(t) {
        if (Array.isArray(t)) {
          return t;
        } else {
          return [t];
        }
      }
      function D(t, e) {
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
      const I = (t) => typeof t == "number";
      const _ = (t) => t.every(I);
      var j = n(54449);
      var L = n(4516);
      var F = n(59634);
      var B = n(30038);
      var z = n(3622);
      var $ = n(95398);
      var W = n(26967);
      class N extends W.l {
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
          return (0, $.dO)();
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
      var U = n(65504);
      function X(t) {
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
        const n = (0, F.v)(t) && !(0, B.r)(t) ? new U.e(e) : new z.W(e);
        n.mount(t);
        j.R.set(t, n);
      }
      function K(t) {
        const e = new N({
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
        j.R.set(t, e);
      }
      var q = n(59349);
      function Y(t, e, n, s) {
        const i = [];
        if (
          (function (t, e) {
            return (
              (0, d.i)(t) ||
              typeof t == "number" ||
              (typeof t == "string" && !x(e))
            );
          })(t, e)
        ) {
          i.push((0, q.D)(t, (x(e) && e.default) || e, (n && n.default) || n));
        } else {
          const o = b(t, e, s);
          const r = o.length;
          (0, f.k)(
            Boolean(r),
            "No valid elements provided.",
            "no-valid-elements",
          );
          for (let t = 0; t < r; t++) {
            const s = o[t];
            (0, f.k)(
              s !== null,
              "You're trying to perform an animation on null. Ensure that selectors are correctly finding elements and refs are correctly hydrated.",
              "animate-null",
            );
            const a = s instanceof Element ? X : K;
            if (!j.R.has(s)) {
              a(s);
            }
            const l = j.R.get(s);
            const u = {
              ...n,
            };
            if ("delay" in u && typeof u.delay == "function") {
              u.delay = u.delay(t, r);
            }
            i.push(
              ...(0, L.w)(
                l,
                {
                  ...e,
                  transition: u,
                },
                {},
              ),
            );
          }
        }
        return i;
      }
      function H(t, e, n) {
        const s = [];
        const i = (function (
          t,
          { defaultTransition: e = {}, ...n } = {},
          s,
          i,
        ) {
          const o = e.duration || 0.3;
          const r = new Map();
          const a = new Map();
          const m = {};
          const g = new Map();
          let w = 0;
          let x = 0;
          let T = 0;
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            if (typeof r == "string") {
              g.set(r, x);
              continue;
            }
            if (!Array.isArray(r)) {
              g.set(r.name, P(x, r.at, w, g));
              continue;
            }
            let [y, M, C = {}] = r;
            if (C.at !== undefined) {
              x = P(x, C.at, w, g);
            }
            let I = 0;
            const j = (t, n, s, r = 0, a = 0) => {
              const d = O(t);
              const {
                delay: m = 0,
                times: g = (0, l.Y)(d),
                type: y = "keyframes",
                repeat: w,
                repeatType: b,
                repeatDelay: P = 0,
                ...M
              } = n;
              let { ease: C = e.ease || "easeOut", duration: R } = n;
              const V = typeof m == "function" ? m(r, a) : m;
              const D = d.length;
              const j = (0, u.x)(y) ? y : i?.[y || "keyframes"];
              if (D <= 2 && j) {
                let t = 100;
                if (D === 2 && _(d)) {
                  const e = d[1] - d[0];
                  t = Math.abs(e);
                }
                const e = {
                  ...M,
                };
                if (R !== undefined) {
                  e.duration = (0, p.w)(R);
                }
                const n = (0, c.S)(e, t, j);
                C = n.ease;
                R = n.duration;
              }
              R ??= o;
              const L = x + V;
              if (g.length === 1 && g[0] === 0) {
                g[1] = 1;
              }
              const F = g.length - d.length;
              if (F > 0) {
                (0, h.c)(g, F);
              }
              if (d.length === 1) {
                d.unshift(null);
              }
              if (w) {
                (0, f.k)(
                  w < k,
                  "Repeat count too high, must be less than 20",
                  "repeat-count-high",
                );
                R = S(R, w);
                const t = [...d];
                const e = [...g];
                C = Array.isArray(C) ? [...C] : [C];
                const n = [...C];
                for (let s = 0; s < w; s++) {
                  d.push(...t);
                  for (let i = 0; i < t.length; i++) {
                    g.push(e[i] + (s + 1));
                    C.push(i === 0 ? "linear" : v(n, i - 1));
                  }
                }
                A(g, w);
              }
              const B = L + R;
              E(s, d, C, g, L, B);
              I = Math.max(V + R, I);
              T = Math.max(B, T);
            };
            if ((0, d.i)(y)) {
              j(M, C, V("default", R(y, a)));
            } else {
              const t = b(y, M, s, m);
              const e = t.length;
              for (let n = 0; n < e; n++) {
                const s = R(t[n], a);
                for (const t in M) {
                  j(M[t], D(C, t), V(t, s), n, e);
                }
              }
            }
            w = x;
            x += I;
          }
          a.forEach((t, s) => {
            for (const i in t) {
              const o = t[i];
              o.sort(M);
              const a = [];
              const l = [];
              const u = [];
              for (let t = 0; t < o.length; t++) {
                const { at: e, value: n, easing: s } = o[t];
                a.push(n);
                l.push((0, y.Y)(0, T, e));
                u.push(s || "easeOut");
              }
              if (l[0] !== 0) {
                l.unshift(0);
                a.unshift(a[0]);
                u.unshift(C);
              }
              if (l[l.length - 1] !== 1) {
                l.push(1);
                a.push(null);
              }
              if (!r.has(s)) {
                r.set(s, {
                  keyframes: {},
                  transition: {},
                });
              }
              const c = r.get(s);
              c.keyframes[i] = a;
              c.transition[i] = {
                ...e,
                duration: T,
                ease: u,
                times: l,
                ...n,
              };
            }
          });
          return r;
        })(t, e, n, {
          spring: a.S,
        });
        i.forEach(({ keyframes: t, transition: e }, n) => {
          s.push(...Y(n, t, e));
        });
        return s;
      }
      const Z = function (t, e, n) {
        let s;
        let i = [];
        a = t;
        if (Array.isArray(a) && a.some(Array.isArray)) {
          i = H(t, e, G);
        } else {
          const { onComplete: o, ...r } = n || {};
          if (typeof o == "function") {
            s = o;
          }
          i = Y(t, e, r, G);
        }
        var a;
        const l = new o(i);
        if (s) {
          l.finished.then(s);
        }
        if (G) {
          G.animations.push(l);
          l.finished.then(() => {
            (0, r.cl)(G.animations, l);
          });
        }
        return l;
      };
      var G;
    },
    59349: function (t, e, n) {
      n.d(e, {
        D: () => r,
      });
      var s = n(45875);
      var i = n(17802);
      var o = n(20284);
      function r(t, e, n) {
        const r = (0, s.i)(t) ? t : (0, i.BX)(t);
        r.start((0, o.v)("", r, e, n));
        return r.animation;
      }
    },
    20284: function (t, e, n) {
      n.d(e, {
        v: () => St,
      });
      var s = n(83479);
      function i(t) {
        t.duration = 0;
        t.type = "keyframes";
      }
      var o = n(63594);
      var r = n(60333);
      var a = n(65437);
      var l = n(15244);
      var u = n(35449);
      var c = n(32838);
      var h = n(98029);
      const d = (t) => {
        const e = ({ timestamp: e }) => t(e);
        return {
          start: (t = true) => o.Wi.update(e, t),
          stop: () => (0, o.Pn)(e),
          now: () => (o.w0.isProcessing ? o.w0.timestamp : u.X.now()),
        };
      };
      var p = n(40187);
      var f = n(6445);
      function m({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: s = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: r,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        const h = t[0];
        const d = {
          done: false,
          value: h,
        };
        const m = (t) =>
          a === undefined
            ? l
            : l === undefined || Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l;
        let g = n * e;
        const v = h + g;
        const y = r === undefined ? v : r(v);
        if (y !== v) {
          g = y - h;
        }
        const w = (t) => -g * Math.exp(-t / s);
        const x = (t) => y + w(t);
        const b = (t) => {
          const e = w(t);
          const n = x(t);
          d.done = Math.abs(e) <= u;
          d.value = d.done ? y : n;
        };
        let S;
        let P;
        const T = (t) => {
          var e;
          e = d.value;
          if ((a !== undefined && e < a) || (l !== undefined && e > l)) {
            S = t;
            P = (0, p.S)({
              keyframes: [d.value, m(d.value)],
              velocity: (0, f.P)(x, t, d.value),
              damping: i,
              stiffness: o,
              restDelta: u,
              restSpeed: c,
            });
          }
        };
        T(0);
        return {
          calculatedDuration: null,
          next: (t) => {
            let e = false;
            if (!P && S === undefined) {
              e = true;
              b(t);
              T(t);
            }
            if (S !== undefined && t >= S) {
              return P.next(t - S);
            } else {
              if (!e) {
                b(t);
              }
              return d;
            }
          },
        };
      }
      var g = n(43594);
      const v = (t, e, n) =>
        (((1 - n * 3 + e * 3) * t + (n * 3 - e * 6)) * t + e * 3) * t;
      const y = 1e-7;
      const w = 12;
      function x(t, e, n, s) {
        if (t === e && n === s) {
          return g.Z;
        }
        const i = (e) =>
          (function (t, e, n, s, i) {
            let o;
            let r;
            let a = 0;
            do {
              r = e + (n - e) / 2;
              o = v(r, s, i) - t;
              if (o > 0) {
                n = r;
              } else {
                e = r;
              }
            } while (Math.abs(o) > y && ++a < w);
            return r;
          })(e, 0, 1, t, n);
        return (t) => (t === 0 || t === 1 ? t : v(i(t), e, s));
      }
      const b = x(0.42, 0, 1, 1);
      const S = x(0, 0, 0.58, 1);
      const P = x(0.42, 0, 0.58, 1);
      var T = n(61209);
      var E = n(26975);
      var A = n(27467);
      var M = n(6578);
      const C = x(0.33, 1.53, 0.69, 0.99);
      const k = (0, M.M)(C);
      const R = (0, A.o)(k);
      const V = (t) =>
        (t *= 2) < 1 ? k(t) * 0.5 : (2 - Math.pow(2, (t - 1) * -10)) * 0.5;
      var O = n(37919);
      const D = (t) => Array.isArray(t) && typeof t[0] == "number";
      const I = {
        linear: g.Z,
        easeIn: b,
        easeInOut: P,
        easeOut: S,
        circIn: O.Z7,
        circInOut: O.X7,
        circOut: O.Bn,
        backIn: k,
        backInOut: R,
        backOut: C,
        anticipate: V,
      };
      const _ = (t) => {
        if (D(t)) {
          (0, E.k)(
            t.length === 4,
            "Cubic bezier arrays must contain four numerical values.",
            "cubic-bezier-length",
          );
          const [e, n, s, i] = t;
          return x(e, n, s, i);
        }
        if (typeof t == "string") {
          (0, E.k)(
            I[t] !== undefined,
            `Invalid easing type '${t}'`,
            "invalid-easing-type",
          );
          return I[t];
        } else {
          return t;
        }
      };
      var j = n(10959);
      var L = n(71519);
      function F({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: s = "easeInOut",
      }) {
        const i = (0, T.N)(s) ? s.map(_) : _(s);
        const o = {
          done: false,
          value: e[0],
        };
        const r = (function (t, e) {
          return t.map((t) => t * e);
        })(n && n.length === e.length ? n : (0, L.Y)(e), t);
        const a = (0, j.s)(r, e, {
          ease: Array.isArray(i)
            ? i
            : ((l = e), (u = i), l.map(() => u || P).splice(0, l.length - 1)),
        });
        var l;
        var u;
        return {
          calculatedDuration: t,
          next: (e) => {
            o.value = a(e);
            o.done = e >= t;
            return o;
          },
        };
      }
      var B = n(36989);
      const z = (t) => t !== null;
      function $(t, { repeat: e, repeatType: n = "loop" }, s, i = 1) {
        const o = t.filter(z);
        const r = i < 0 || (e && n !== "loop" && e % 2 == 1) ? 0 : o.length - 1;
        if (r && s !== undefined) {
          return s;
        } else {
          return o[r];
        }
      }
      const W = {
        decay: m,
        inertia: m,
        tween: F,
        keyframes: F,
        spring: p.S,
      };
      function N(t) {
        if (typeof t.type == "string") {
          t.type = W[t.type];
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
      const X = (t) => t / 100;
      class K extends U {
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
          c.P.mainThread++;
          this.options = t;
          this.initAnimation();
          this.play();
          if (t.autoplay === false) {
            this.pause();
          }
        }
        initAnimation() {
          const { options: t } = this;
          N(t);
          const {
            type: e = F,
            repeat: n = 0,
            repeatDelay: s = 0,
            repeatType: i,
            velocity: o = 0,
          } = t;
          let { keyframes: a } = t;
          const l = e || F;
          if (l !== F && typeof a[0] != "number") {
            this.mixKeyframes = (0, r.z)(X, (0, h.C)(a[0], a[1]));
            a = [0, 100];
          }
          const u = l({
            ...t,
            keyframes: a,
          });
          if (i === "mirror") {
            this.mirroredGenerator = l({
              ...t,
              keyframes: [...a].reverse(),
              velocity: -o,
            });
          }
          if (u.calculatedDuration === null) {
            u.calculatedDuration = (0, B.i)(u);
          }
          const { calculatedDuration: c } = u;
          this.calculatedDuration = c;
          this.resolvedDuration = c + s;
          this.totalDuration = this.resolvedDuration * (n + 1) - s;
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
            totalDuration: s,
            mixKeyframes: i,
            mirroredGenerator: o,
            resolvedDuration: r,
            calculatedDuration: l,
          } = this;
          if (this.startTime === null) {
            return n.next(0);
          }
          const {
            delay: u = 0,
            keyframes: c,
            repeat: h,
            repeatType: d,
            repeatDelay: p,
            type: f,
            onUpdate: g,
            finalKeyframe: v,
          } = this.options;
          if (this.speed > 0) {
            this.startTime = Math.min(this.startTime, t);
          } else if (this.speed < 0) {
            this.startTime = Math.min(t - s / this.speed, this.startTime);
          }
          if (e) {
            this.currentTime = t;
          } else {
            this.updateTime(t);
          }
          const y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1);
          const w = this.playbackSpeed >= 0 ? y < 0 : y > s;
          this.currentTime = Math.max(y, 0);
          if (this.state === "finished" && this.holdTime === null) {
            this.currentTime = s;
          }
          let x = this.currentTime;
          let b = n;
          if (h) {
            const t = Math.min(this.currentTime, s) / r;
            let e = Math.floor(t);
            let n = t % 1;
            if (!n && t >= 1) {
              n = 1;
            }
            if (n === 1) {
              e--;
            }
            e = Math.min(e, h + 1);
            if (Boolean(e % 2)) {
              if (d === "reverse") {
                n = 1 - n;
                if (p) {
                  n -= p / r;
                }
              } else if (d === "mirror") {
                b = o;
              }
            }
            x = (0, a.u)(0, 1, n) * r;
          }
          const S = w
            ? {
                done: false,
                value: c[0],
              }
            : b.next(x);
          if (i) {
            S.value = i(S.value);
          }
          let { done: P } = S;
          if (!w && l !== null) {
            P =
              this.playbackSpeed >= 0
                ? this.currentTime >= s
                : this.currentTime <= 0;
          }
          const T =
            this.holdTime === null &&
            (this.state === "finished" || (this.state === "running" && P));
          if (T && f !== m) {
            S.value = $(c, this.options, v, this.speed);
          }
          if (g) {
            g(S.value);
          }
          if (T) {
            this.finish();
          }
          return S;
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return (0, l.X)(this.calculatedDuration);
        }
        get iterationDuration() {
          const { delay: t = 0 } = this.options || {};
          return this.duration + (0, l.X)(t);
        }
        get time() {
          return (0, l.X)(this.currentTime);
        }
        set time(t) {
          t = (0, l.w)(t);
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
            this.time = (0, l.X)(this.currentTime);
          }
        }
        play() {
          if (this.isStopped) {
            return;
          }
          const { driver: t = d, startTime: e } = this.options;
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
          c.P.mainThread--;
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
      var Y = n(63062);
      function H(t) {
        let e;
        return () => {
          if (e === undefined) {
            e = t();
          }
          return e;
        };
      }
      const Z = H(() => window.ScrollTimeline !== undefined);
      var G = n(27984);
      const Q = {};
      function J(t, e) {
        const n = H(t);
        return () => Q[e] ?? n();
      }
      const tt = J(() => {
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
      var et = n(52486);
      const nt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`;
      const st = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: nt([0, 0.65, 0.55, 1]),
        circOut: nt([0.55, 0, 1, 0.45]),
        backIn: nt([0.31, 0.01, 0.66, -0.59]),
        backOut: nt([0.33, 1.53, 0.69, 0.99]),
      };
      function it(t, e) {
        if (t) {
          if (typeof t == "function") {
            if (tt()) {
              return (0, et.w)(t, e);
            } else {
              return "ease-out";
            }
          } else if (D(t)) {
            return nt(t);
          } else if (Array.isArray(t)) {
            return t.map((t) => it(t, e) || st.easeOut);
          } else {
            return st[t];
          }
        } else {
          return undefined;
        }
      }
      function ot(
        t,
        e,
        n,
        {
          delay: s = 0,
          duration: i = 300,
          repeat: o = 0,
          repeatType: r = "loop",
          ease: a = "easeOut",
          times: l,
        } = {},
        u = undefined,
      ) {
        const h = {
          [e]: n,
        };
        if (l) {
          h.offset = l;
        }
        const d = it(a, i);
        if (Array.isArray(d)) {
          h.easing = d;
        }
        if (G.f.value) {
          c.P.waapi++;
        }
        const p = {
          delay: s,
          duration: i,
          easing: Array.isArray(d) ? "linear" : d,
          fill: "both",
          iterations: o + 1,
          direction: r === "reverse" ? "alternate" : "normal",
        };
        if (u) {
          p.pseudoElement = u;
        }
        const f = t.animate(h, p);
        if (G.f.value) {
          f.finished.finally(() => {
            c.P.waapi--;
          });
        }
        return f;
      }
      var rt = n(20479);
      class at extends U {
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
            keyframes: s,
            pseudoElement: i,
            allowFlatten: o = false,
            finalKeyframe: r,
            onComplete: a,
          } = t;
          this.isPseudoElement = Boolean(i);
          this.allowFlatten = o;
          this.options = t;
          (0, E.k)(
            typeof t.type != "string",
            'Mini animate() doesn\'t support "type" as a string.',
            "mini-spring",
          );
          const l = (function ({ type: t, ...e }) {
            if ((0, rt.x)(t) && tt()) {
              return t.applyToOptions(e);
            } else {
              e.duration ??= 300;
              e.ease ??= "easeOut";
              return e;
            }
          })(t);
          this.animation = ot(e, n, s, l, i);
          if (l.autoplay === false) {
            this.animation.pause();
          }
          this.animation.onfinish = () => {
            this.finishedTime = this.time;
            if (!i) {
              const t = $(s, this.options, r, this.speed);
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
          return (0, l.X)(Number(t));
        }
        get iterationDuration() {
          const { delay: t = 0 } = this.options || {};
          return this.duration + (0, l.X)(t);
        }
        get time() {
          return (0, l.X)(Number(this.animation.currentTime) || 0);
        }
        set time(t) {
          this.finishedTime = null;
          this.animation.currentTime = (0, l.w)(t);
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
          if (t && Z()) {
            this.animation.timeline = t;
            return g.Z;
          } else {
            return e(this);
          }
        }
      }
      const lt = {
        anticipate: V,
        backInOut: R,
        circInOut: O.X7,
      };
      function ut(t) {
        if (typeof t.ease == "string" && t.ease in lt) {
          t.ease = lt[t.ease];
        }
      }
      class ct extends at {
        constructor(t) {
          ut(t);
          N(t);
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
            onComplete: s,
            element: i,
            ...o
          } = this.options;
          if (!e) {
            return;
          }
          if (t !== undefined) {
            e.set(t);
            return;
          }
          const r = new K({
            ...o,
            autoplay: false,
          });
          const a = (0, l.w)(this.finishedTime ?? this.time);
          e.setWithVelocity(r.sample(a - 10).value, r.sample(a).value, 10);
          r.stop();
        }
      }
      var ht = n(28779);
      const dt = (t, e) =>
        e !== "zIndex" &&
        (typeof t == "number" ||
          !!Array.isArray(t) ||
          (typeof t == "string" &&
            (!!ht.P.test(t) || t === "0") &&
            !t.startsWith("url(")));
      const pt = new Set(["opacity", "clipPath", "filter", "transform"]);
      const ft = H(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate"),
      );
      class mt extends U {
        constructor({
          autoplay: t = true,
          delay: e = 0,
          type: n = "keyframes",
          repeat: s = 0,
          repeatDelay: i = 0,
          repeatType: o = "loop",
          keyframes: r,
          name: a,
          motionValue: l,
          element: c,
          ...h
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
          const d = {
            autoplay: t,
            delay: e,
            type: n,
            repeat: s,
            repeatDelay: i,
            repeatType: o,
            name: a,
            motionValue: l,
            element: c,
            ...h,
          };
          const p = c?.KeyframeResolver || Y.e;
          this.keyframeResolver = new p(
            r,
            (t, e, n) => this.onKeyframesResolved(t, e, d, !n),
            a,
            l,
            c,
          );
          this.keyframeResolver?.scheduleResolve();
        }
        onKeyframesResolved(t, e, n, s) {
          this.keyframeResolver = undefined;
          const {
            name: o,
            type: r,
            velocity: a,
            delay: l,
            isHandoff: c,
            onUpdate: h,
          } = n;
          this.resolvedAt = u.X.now();
          if (
            !(function (t, e, n, s) {
              const i = t[0];
              if (i === null) {
                return false;
              }
              if (e === "display" || e === "visibility") {
                return true;
              }
              const o = t[t.length - 1];
              const r = dt(i, e);
              const a = dt(o, e);
              (0, E.K)(
                r === a,
                `You are trying to animate ${e} from "${i}" to "${o}". "${r ? o : i}" is not an animatable value.`,
                "value-not-animatable",
              );
              return (
                !!r &&
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
                  ((n === "spring" || (0, rt.x)(n)) && s))
              );
            })(t, o, r, a)
          ) {
            if (!!q.c.instantAnimations || !l) {
              h?.($(t, n, e));
            }
            t[0] = t[t.length - 1];
            i(n);
            n.repeat = 0;
          }
          const d = {
            startTime: s
              ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                ? this.resolvedAt
                : this.createdAt
              : undefined,
            finalKeyframe: e,
            ...n,
            keyframes: t,
          };
          const p =
            !c &&
            (function (t) {
              const {
                motionValue: e,
                name: n,
                repeatDelay: s,
                repeatType: i,
                damping: o,
                type: r,
              } = t;
              const a = e?.owner?.current;
              if (!(a instanceof HTMLElement)) {
                return false;
              }
              const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
              return (
                ft() &&
                n &&
                pt.has(n) &&
                (n !== "transform" || !u) &&
                !l &&
                !s &&
                i !== "mirror" &&
                o !== 0 &&
                r !== "inertia"
              );
            })(d)
              ? new ct({
                  ...d,
                  element: d.motionValue.owner.current,
                })
              : new K(d);
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
            (0, Y.m)();
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
      const gt = (t) => t !== null;
      var vt = n(50477);
      const yt = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10,
      };
      const wt = {
        type: "keyframes",
        duration: 0.8,
      };
      const xt = {
        type: "keyframes",
        ease: [0.25, 0.1, 0.35, 1],
        duration: 0.3,
      };
      const bt = (t, { keyframes: e }) =>
        e.length > 2
          ? wt
          : vt.G.has(t)
            ? t.startsWith("scale")
              ? {
                  type: "spring",
                  stiffness: 550,
                  damping: e[1] === 0 ? Math.sqrt(550) * 2 : 30,
                  restSpeed: 10,
                }
              : yt
            : xt;
      const St =
        (t, e, n, r = {}, a, u) =>
        (c) => {
          const h = (0, s.e)(r, t) || {};
          const d = h.delay || r.delay || 0;
          let { elapsed: p = 0 } = r;
          p -= (0, l.w)(d);
          const f = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...h,
            delay: -p,
            onUpdate: (t) => {
              e.set(t);
              if (h.onUpdate) {
                h.onUpdate(t);
              }
            },
            onComplete: () => {
              c();
              if (h.onComplete) {
                h.onComplete();
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
              staggerChildren: s,
              staggerDirection: i,
              repeat: o,
              repeatType: r,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(h)
          ) {
            Object.assign(f, bt(t, f));
          }
          f.duration &&= (0, l.w)(f.duration);
          f.repeatDelay &&= (0, l.w)(f.repeatDelay);
          if (f.from !== undefined) {
            f.keyframes[0] = f.from;
          }
          let m = false;
          if (f.type === false || (f.duration === 0 && !f.repeatDelay)) {
            i(f);
            if (f.delay === 0) {
              m = true;
            }
          }
          if (q.c.instantAnimations || q.c.skipAnimations) {
            m = true;
            i(f);
            f.delay = 0;
          }
          f.allowFlatten = !h.type && !h.ease;
          if (m && !u && e.get() !== undefined) {
            const t = (function (t, { repeat: e, repeatType: n = "loop" }, s) {
              const i = t.filter(gt);
              const o = e && n !== "loop" && e % 2 == 1 ? 0 : i.length - 1;
              if (o && s !== undefined) {
                return s;
              } else {
                return i[o];
              }
            })(f.keyframes, h);
            if (t !== undefined) {
              o.Wi.update(() => {
                f.onUpdate(t);
                f.onComplete();
              });
              return;
            }
          }
          if (h.isSync) {
            return new K(f);
          } else {
            return new mt(f);
          }
        };
    },
    4516: function (t, e, n) {
      n.d(e, {
        w: () => f,
      });
      var s = n(83479);
      var i = n(63594);
      var o = n(18011);
      var r = n(17802);
      var a = n(10516);
      var l = n(89654);
      function u(t, e, n) {
        if (t.hasValue(e)) {
          t.getValue(e).set(n);
        } else {
          t.addValue(e, (0, r.BX)(n));
        }
      }
      var c = n(83800);
      var h = n(56796);
      var d = n(20284);
      function p({ protectedKeys: t, needsAnimating: e }, n) {
        const s = t.hasOwnProperty(n) && e[n] !== true;
        e[n] = false;
        return s;
      }
      function f(t, e, { delay: n = 0, transitionOverride: r, type: f } = {}) {
        let {
          transition: m = t.getDefaultTransition(),
          transitionEnd: g,
          ...v
        } = e;
        if (r) {
          m = r;
        }
        const y = [];
        const w = f && t.animationState && t.animationState.getState()[f];
        for (const e in v) {
          const r = t.getValue(e, t.latestValues[e] ?? null);
          const a = v[e];
          if (a === undefined || (w && p(w, e))) {
            continue;
          }
          const l = {
            delay: n,
            ...(0, s.e)(m || {}, e),
          };
          const u = r.get();
          if (
            u !== undefined &&
            !r.isAnimating &&
            !Array.isArray(a) &&
            a === u &&
            !l.velocity
          ) {
            continue;
          }
          let f = false;
          if (window.MotionHandoffAnimation) {
            const n = (0, h.s)(t);
            if (n) {
              const t = window.MotionHandoffAnimation(n, e, i.Wi);
              if (t !== null) {
                l.startTime = t;
                f = true;
              }
            }
          }
          (0, c.K)(t, e);
          r.start(
            (0, d.v)(
              e,
              r,
              a,
              t.shouldReduceMotion && o.z.has(e)
                ? {
                    type: false,
                  }
                : l,
              t,
              f,
            ),
          );
          const g = r.animation;
          if (g) {
            y.push(g);
          }
        }
        if (g) {
          Promise.all(y).then(() => {
            i.Wi.update(() => {
              if (g) {
                (function (t, e) {
                  const n = (0, l.x)(t, e);
                  let {
                    transitionEnd: s = {},
                    transition: i = {},
                    ...o
                  } = n || {};
                  o = {
                    ...o,
                    ...s,
                  };
                  for (const e in o) {
                    u(
                      t,
                      e,
                      ((r = o[e]), (0, a.C)(r) ? r[r.length - 1] || 0 : r),
                    );
                  }
                  var r;
                })(t, g);
              }
            });
          });
        }
        return y;
      }
    },
    15793: function (t, e, n) {
      n.d(e, {
        M: () => s,
      });
      const s = "data-" + (0, n(50638).D)("framerAppearId");
    },
    56796: function (t, e, n) {
      n.d(e, {
        s: () => i,
      });
      var s = n(15793);
      function i(t) {
        return t.props[s.M];
      }
    },
    98922: function (t, e, n) {
      function s(t) {
        return (
          t !== null && typeof t == "object" && typeof t.start == "function"
        );
      }
      n.d(e, {
        H: () => s,
      });
    },
    10516: function (t, e, n) {
      n.d(e, {
        C: () => s,
      });
      const s = (t) => Array.isArray(t);
    },
    21353: function (t, e, n) {
      n.d(e, {
        _: () => s,
      });
      const s = (0, n(45144).createContext)({
        transformPagePoint: (t) => t,
        isStatic: false,
        reducedMotion: "never",
      });
    },
    92131: function (t, e, n) {
      n.d(e, {
        A: () => i,
      });
      const s = {
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
      const i = {};
      for (const t in s) {
        i[t] = {
          isEnabled: (e) => s[t].some((t) => !!e[t]),
        };
      }
    },
    99246: function (t, e, n) {
      n.d(e, {
        j: () => o,
      });
      var s = n(50477);
      var i = n(23486);
      function o(t, { layout: e, layoutId: n }) {
        return (
          s.G.has(t) ||
          t.startsWith("origin") ||
          ((e || n !== undefined) && (!!i.P[t] || t === "opacity"))
        );
      }
    },
    74961: function (t, e, n) {
      function s({ top: t, left: e, right: n, bottom: s }) {
        return {
          x: {
            min: e,
            max: n,
          },
          y: {
            min: t,
            max: s,
          },
        };
      }
      function i({ x: t, y: e }) {
        return {
          top: e.min,
          right: t.max,
          bottom: e.max,
          left: t.min,
        };
      }
      function o(t, e) {
        if (!e) {
          return t;
        }
        const n = e({
          x: t.left,
          y: t.top,
        });
        const s = e({
          x: t.right,
          y: t.bottom,
        });
        return {
          top: n.y,
          left: n.x,
          bottom: s.y,
          right: s.x,
        };
      }
      n.d(e, {
        d7: () => o,
        i8: () => s,
        z2: () => i,
      });
    },
    80813: function (t, e, n) {
      n.d(e, {
        D2: () => f,
        YY: () => h,
        am: () => d,
        o2: () => l,
        q2: () => o,
      });
      var s = n(55153);
      var i = n(6034);
      function o(t, e, n) {
        return n + e * (t - n);
      }
      function r(t, e, n, s, i) {
        if (i !== undefined) {
          t = o(t, i, s);
        }
        return o(t, n, s) + e;
      }
      function a(t, e = 0, n = 1, s, i) {
        t.min = r(t.min, e, n, s, i);
        t.max = r(t.max, e, n, s, i);
      }
      function l(t, { x: e, y: n }) {
        a(t.x, e.translate, e.scale, e.originPoint);
        a(t.y, n.translate, n.scale, n.originPoint);
      }
      const u = 0.999999999999;
      const c = 1.0000000000001;
      function h(t, e, n, s = false) {
        const o = n.length;
        if (!o) {
          return;
        }
        let r;
        let a;
        e.x = e.y = 1;
        for (let u = 0; u < o; u++) {
          r = n[u];
          a = r.projectionDelta;
          const { visualElement: o } = r.options;
          if (!o || !o.props.style || o.props.style.display !== "contents") {
            if (s && r.options.layoutScroll && r.scroll && r !== r.root) {
              f(t, {
                x: -r.scroll.offset.x,
                y: -r.scroll.offset.y,
              });
            }
            if (a) {
              e.x *= a.x.scale;
              e.y *= a.y.scale;
              l(t, a);
            }
            if (s && (0, i.ud)(r.latestValues)) {
              f(t, r.latestValues);
            }
          }
        }
        if (e.x < c && e.x > u) {
          e.x = 1;
        }
        if (e.y < c && e.y > u) {
          e.y = 1;
        }
      }
      function d(t, e) {
        t.min = t.min + e;
        t.max = t.max + e;
      }
      function p(t, e, n, i, o = 0.5) {
        a(t, e, n, (0, s.t)(t.min, t.max, o), i);
      }
      function f(t, e) {
        p(t.x, e.x, e.scaleX, e.scale, e.originX);
        p(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    95398: function (t, e, n) {
      n.d(e, {
        dO: () => i,
        wc: () => s,
      });
      const s = () => ({
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
      const i = () => ({
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
        B: () => o,
        P: () => i,
      });
      var s = n(53345);
      const i = {};
      function o(t) {
        for (const e in t) {
          i[e] = t[e];
          if ((0, s.f)(e)) {
            i[e].isCSSVariable = true;
          }
        }
      }
    },
    6034: function (t, e, n) {
      function s(t) {
        return t === undefined || t === 1;
      }
      function i({ scale: t, scaleX: e, scaleY: n }) {
        return !s(t) || !s(e) || !s(n);
      }
      function o(t) {
        return (
          i(t) ||
          r(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function r(t) {
        return a(t.x) || a(t.y);
      }
      function a(t) {
        return t && t !== "0%";
      }
      n.d(e, {
        D_: () => r,
        Lj: () => i,
        ud: () => o,
      });
    },
    10301: function (t, e, n) {
      n.d(e, {
        J: () => o,
        z: () => r,
      });
      var s = n(74961);
      var i = n(80813);
      function o(t, e) {
        return (0, s.i8)((0, s.d7)(t.getBoundingClientRect(), e));
      }
      function r(t, e, n) {
        const s = o(t, n);
        const { scroll: r } = e;
        if (r) {
          (0, i.am)(s.x, r.offset.x);
          (0, i.am)(s.y, r.offset.y);
        }
        return s;
      }
    },
    26967: function (t, e, n) {
      n.d(e, {
        l: () => C,
      });
      var s = n(63062);
      var i = n(35449);
      var o = n(63594);
      var r = n(45875);
      var a = n(50477);
      var l = n(17802);
      var u = n(39178);
      var c = n(28779);
      var h = n(81077);
      var d = n(31024);
      const p = [...h.$, u.$, c.P];
      var f = n(7741);
      var m = n(69547);
      var g = n(94309);
      var v = n(71226);
      var y = n(58088);
      var w = n(92131);
      var x = n(95398);
      var b = n(24939);
      const S = {
        current: null,
      };
      const P = {
        current: false,
      };
      var T = n(54449);
      var E = n(36454);
      var A = n(75440);
      const M = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class C {
        scrapeMotionValuesFromProps(t, e, n) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: a,
            blockInitialAnimation: l,
            visualState: u,
          },
          c = {},
        ) {
          this.current = null;
          this.children = new Set();
          this.isVariantNode = false;
          this.isControllingVariants = false;
          this.shouldReduceMotion = null;
          this.values = new Map();
          this.KeyframeResolver = s.e;
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
            const t = i.X.now();
            if (this.renderScheduledAt < t) {
              this.renderScheduledAt = t;
              o.Wi.render(this.render, false, true);
            }
          };
          const { latestValues: h, renderState: d } = u;
          this.latestValues = h;
          this.baseTarget = {
            ...h,
          };
          this.initialValues = e.initial
            ? {
                ...h,
              }
            : {};
          this.renderState = d;
          this.parent = t;
          this.props = e;
          this.presenceContext = n;
          this.depth = t ? t.depth + 1 : 0;
          this.reducedMotionConfig = a;
          this.options = c;
          this.blockInitialAnimation = Boolean(l);
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
            if (h[t] !== undefined && (0, r.i)(e)) {
              e.set(h[t]);
            }
          }
        }
        mount(t) {
          this.current = t;
          T.R.set(t, this);
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
          if (!P.current) {
            (function () {
              P.current = true;
              if (b.j) {
                if (window.matchMedia) {
                  const t = window.matchMedia("(prefers-reduced-motion)");
                  const e = () => (S.current = t.matches);
                  t.addEventListener("change", e);
                  e();
                } else {
                  S.current = false;
                }
              }
            })();
          }
          this.shouldReduceMotion =
            this.reducedMotionConfig !== "never" &&
            (this.reducedMotionConfig === "always" || S.current);
          this.parent?.addChild(this);
          this.update(this.props, this.presenceContext);
        }
        unmount() {
          if (this.projection) {
            this.projection.unmount();
          }
          (0, o.Pn)(this.notifyUpdate);
          (0, o.Pn)(this.render);
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
          const s = e.on("change", (e) => {
            this.latestValues[t] = e;
            if (this.props.onUpdate) {
              o.Wi.preRender(this.notifyUpdate);
            }
            if (n && this.projection) {
              this.projection.isTransformDirty = true;
            }
            this.scheduleRender();
          });
          let i;
          if (window.MotionCheckAppearSync) {
            i = window.MotionCheckAppearSync(this, t, e);
          }
          this.valueSubscriptions.set(t, () => {
            s();
            if (i) {
              i();
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
          for (t in w.A) {
            const e = w.A[t];
            if (!e) {
              continue;
            }
            const { isEnabled: n, Feature: s } = e;
            if (!this.features[t] && s && n(this.props)) {
              this.features[t] = new s(this);
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
            return (0, x.dO)();
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
          for (let e = 0; e < M.length; e++) {
            const n = M[e];
            if (this.propEventSubscriptions[n]) {
              this.propEventSubscriptions[n]();
              delete this.propEventSubscriptions[n];
            }
            const s = t["on" + n];
            if (s) {
              this.propEventSubscriptions[n] = this.on(n, s);
            }
          }
          this.prevMotionValues = (function (t, e, n) {
            for (const s in e) {
              const i = e[s];
              const o = n[s];
              if ((0, r.i)(i)) {
                t.addValue(s, i);
              } else if ((0, r.i)(o)) {
                t.addValue(
                  s,
                  (0, l.BX)(i, {
                    owner: t,
                  }),
                );
              } else if (o !== i) {
                if (t.hasValue(s)) {
                  const e = t.getValue(s);
                  if (e.liveStyle === true) {
                    e.jump(i);
                  } else if (!e.hasAnimated) {
                    e.set(i);
                  }
                } else {
                  const e = t.getStaticValue(s);
                  t.addValue(
                    s,
                    (0, l.BX)(e !== undefined ? e : i, {
                      owner: t,
                    }),
                  );
                }
              }
            }
            for (const s in n) {
              if (e[s] === undefined) {
                t.removeValue(s);
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
            n = (0, l.BX)(e === null ? undefined : e, {
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
          var s;
          if (n != null) {
            if (typeof n == "string" && ((0, g.P)(n) || (0, v.W)(n))) {
              n = parseFloat(n);
            } else {
              s = n;
              if (!p.find((0, d.l)(s)) && c.P.test(e)) {
                n = (0, f.T)(t, e);
              }
            }
            this.setBaseTarget(t, (0, r.i)(n) ? n.get() : n);
          }
          if ((0, r.i)(n)) {
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
            const s = (0, A.o)(this.props, e, this.presenceContext?.custom);
            if (s) {
              n = s[t];
            }
          }
          if (e && n !== undefined) {
            return n;
          }
          const s = this.getBaseTargetFromProps(this.props, t);
          if (s === undefined || (0, r.i)(s)) {
            if (this.initialValues[t] !== undefined && n === undefined) {
              return undefined;
            } else {
              return this.baseTarget[t];
            }
          } else {
            return s;
          }
        }
        on(t, e) {
          this.events[t] ||= new y.L();
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
    9123: function (t, e, n) {
      n.d(e, {
        E: () => ps,
      });
      var s = n(45144);
      var i = n(3622);
      var o = n(65504);
      const r = [
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
          (!!(r.indexOf(t) > -1) || !!/[A-Z]/u.test(t))
        );
      }
      const l = (t, e) =>
        a(t)
          ? new o.e(e)
          : new i.W(e, {
              allowProjection: t !== s.Fragment,
            });
      var u = n(9862);
      const c = (0, s.createContext)({});
      const h = (0, s.createContext)({
        strict: false,
      });
      var d = n(21353);
      const p = (0, s.createContext)({});
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
        })(t, (0, s.useContext)(p));
        return (0, s.useMemo)(
          () => ({
            initial: e,
            animate: n,
          }),
          [v(e), v(n)],
        );
      }
      function v(t) {
        if (Array.isArray(t)) {
          return t.join(" ");
        } else {
          return t;
        }
      }
      var y = n(45875);
      var w = n(99246);
      var x = n(55469);
      const b = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function S(t, e, n) {
        for (const s in e) {
          if (!(0, y.i)(e[s]) && !(0, w.j)(s, n)) {
            t[s] = e[s];
          }
        }
      }
      function P(t, e) {
        const n = {};
        S(n, t.style || {}, t);
        Object.assign(
          n,
          (function ({ transformTemplate: t }, e) {
            return (0, s.useMemo)(() => {
              const n = b();
              (0, x.r)(n, e, t);
              return Object.assign({}, n.vars, n.style);
            }, [e]);
          })(t, e),
        );
        return n;
      }
      function T(t, e) {
        const n = {};
        const s = P(t, e);
        if (t.drag && t.dragListener !== false) {
          n.draggable = false;
          s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none";
          s.touchAction =
            t.drag === true ? "none" : "pan-" + (t.drag === "x" ? "y" : "x");
        }
        if (
          t.tabIndex === undefined &&
          (t.onTap || t.onTapStart || t.whileTap)
        ) {
          n.tabIndex = 0;
        }
        n.style = s;
        return n;
      }
      var E = n(85670);
      const A = () => ({
        ...b(),
        attrs: {},
      });
      var M = n(38399);
      function C(t, e, n, i) {
        const o = (0, s.useMemo)(() => {
          const n = A();
          (0, E.i)(n, e, (0, M.a)(i), t.transformTemplate, t.style);
          return {
            ...n.attrs,
            style: {
              ...n.style,
            },
          };
        }, [e]);
        if (t.style) {
          const e = {};
          S(e, t.style, t);
          o.style = {
            ...e,
            ...o.style,
          };
        }
        return o;
      }
      const k = new Set([
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
      function R(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && t !== "draggable") ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          k.has(t)
        );
      }
      let V = (t) => !R(t);
      try {
        if (
          typeof (O = require("@emotion/is-prop-valid").default) == "function"
        ) {
          V = (t) => (t.startsWith("on") ? !R(t) : O(t));
        }
      } catch {}
      var O;
      function D(t, e, n, { latestValues: i }, o, r = false) {
        const l = (a(t) ? C : T)(e, i, o, t);
        const u = (function (t, e, n) {
          const s = {};
          for (const i in t) {
            if (i !== "values" || typeof t.values != "object") {
              if (
                V(i) ||
                (n === true && R(i)) ||
                (!e && !R(i)) ||
                (t.draggable && i.startsWith("onDrag"))
              ) {
                s[i] = t[i];
              }
            }
          }
          return s;
        })(e, typeof t == "string", r);
        const c =
          t !== s.Fragment
            ? {
                ...u,
                ...l,
                ref: n,
              }
            : {};
        const { children: h } = e;
        const d = (0, s.useMemo)(() => ((0, y.i)(h) ? h.get() : h), [h]);
        return (0, s.createElement)(t, {
          ...c,
          children: d,
        });
      }
      var I = n(98922);
      const _ = (0, s.createContext)(null);
      var j = n(75440);
      var L = n(78217);
      function F(t) {
        if ((0, y.i)(t)) {
          return t.get();
        } else {
          return t;
        }
      }
      function B(t, e, n, s) {
        const i = {};
        const o = s(t, {});
        for (const t in o) {
          i[t] = F(o[t]);
        }
        let { initial: r, animate: a } = t;
        const l = (0, f.G)(t);
        const u = (0, f.M)(t);
        if (e && u && !l && t.inherit !== false) {
          if (r === undefined) {
            r = e.initial;
          }
          if (a === undefined) {
            a = e.animate;
          }
        }
        let c = !!n && n.initial === false;
        c = c || r === false;
        const h = c ? a : r;
        if (h && typeof h != "boolean" && !(0, I.H)(h)) {
          const e = Array.isArray(h) ? h : [h];
          for (let n = 0; n < e.length; n++) {
            const s = (0, j.o)(t, e[n]);
            if (s) {
              const { transitionEnd: t, transition: e, ...n } = s;
              for (const t in n) {
                let e = n[t];
                if (Array.isArray(e)) {
                  e = e[c ? e.length - 1 : 0];
                }
                if (e !== null) {
                  i[t] = e;
                }
              }
              for (const e in t) {
                i[e] = t[e];
              }
            }
          }
        }
        return i;
      }
      const z = (t) => (e, n) => {
        const i = (0, s.useContext)(p);
        const o = (0, s.useContext)(_);
        const r = () =>
          (function (
            { scrapeMotionValuesFromProps: t, createRenderState: e },
            n,
            s,
            i,
          ) {
            return {
              latestValues: B(n, s, i, t),
              renderState: e(),
            };
          })(t, e, i, o);
        if (n) {
          return r();
        } else {
          return (0, L.h)(r);
        }
      };
      const $ = z({
        scrapeMotionValuesFromProps: n(86740).U,
        createRenderState: b,
      });
      const W = z({
        scrapeMotionValuesFromProps: n(81185).U,
        createRenderState: A,
      });
      var N = n(24939);
      var U = n(92131);
      const X = Symbol.for("motionComponentSymbol");
      function K(t) {
        return (
          t &&
          typeof t == "object" &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function q(t, e, n) {
        return (0, s.useCallback)(
          (s) => {
            if (s && t.onMount) {
              t.onMount(s);
            }
            if (e) {
              if (s) {
                e.mount(s);
              } else {
                e.unmount();
              }
            }
            if (n) {
              if (typeof n == "function") {
                n(s);
              } else if (K(n)) {
                n.current = s;
              }
            }
          },
          [e],
        );
      }
      var Y = n(15793);
      const H = (0, s.createContext)({});
      var Z = n(19537);
      function G(t, e, n, i, o) {
        const { visualElement: r } = (0, s.useContext)(p);
        const a = (0, s.useContext)(h);
        const l = (0, s.useContext)(_);
        const u = (0, s.useContext)(d._).reducedMotion;
        const c = (0, s.useRef)(null);
        i = i || a.renderer;
        if (!c.current && i) {
          c.current = i(t, {
            visualState: e,
            parent: r,
            props: n,
            presenceContext: l,
            blockInitialAnimation: !!l && l.initial === false,
            reducedMotionConfig: u,
          });
        }
        const f = c.current;
        const m = (0, s.useContext)(H);
        if (
          !!f &&
          !f.projection &&
          !!o &&
          (f.type === "html" || f.type === "svg")
        ) {
          (function (t, e, n, s) {
            const {
              layoutId: i,
              layout: o,
              drag: r,
              dragConstraints: a,
              layoutScroll: l,
              layoutRoot: u,
              layoutCrossfade: c,
            } = e;
            t.projection = new n(
              t.latestValues,
              e["data-framer-portal-id"] ? undefined : Q(t.parent),
            );
            t.projection.setOptions({
              layoutId: i,
              layout: o,
              alwaysMeasureLayout: Boolean(r) || (a && K(a)),
              visualElement: t,
              animationType: typeof o == "string" ? o : "both",
              initialPromotionConfig: s,
              crossfade: c,
              layoutScroll: l,
              layoutRoot: u,
            });
          })(c.current, n, o, m);
        }
        const g = (0, s.useRef)(false);
        (0, s.useInsertionEffect)(() => {
          if (f && g.current) {
            f.update(n, l);
          }
        });
        const v = n[Y.M];
        const y = (0, s.useRef)(
          Boolean(v) &&
            !window.MotionHandoffIsComplete?.(v) &&
            window.MotionHasOptimisedAnimation?.(v),
        );
        (0, Z.L)(() => {
          if (f) {
            g.current = true;
            window.MotionIsMounted = true;
            f.updateFeatures();
            f.scheduleRenderMicrotask();
            if (y.current && f.animationState) {
              f.animationState.animateChanges();
            }
          }
        });
        (0, s.useEffect)(() => {
          if (f) {
            if (!y.current && f.animationState) {
              f.animationState.animateChanges();
            }
            if (y.current) {
              queueMicrotask(() => {
                window.MotionHandoffMarkAsComplete?.(v);
              });
              y.current = false;
            }
            f.enteringChildren = undefined;
          }
        });
        return f;
      }
      function Q(t) {
        if (t) {
          if (t.options.allowProjection !== false) {
            return t.projection;
          } else {
            return Q(t.parent);
          }
        }
      }
      function J(t, { forwardMotionProps: e = false } = {}, n, i) {
        if (n) {
          (function (t) {
            for (const e in t) {
              U.A[e] = {
                ...U.A[e],
                ...t[e],
              };
            }
          })(n);
        }
        const o = a(t) ? W : $;
        function r(n, r) {
          let a;
          const l = {
            ...(0, s.useContext)(d._),
            ...n,
            layoutId: tt(n),
          };
          const { isStatic: c } = l;
          const f = g(n);
          const m = o(n, c);
          if (!c && N.j) {
            (function (t, e) {
              (0, s.useContext)(h).strict;
              0;
            })();
            const e = (function (t) {
              const { drag: e, layout: n } = U.A;
              if (!e && !n) {
                return {};
              }
              const s = {
                ...e,
                ...n,
              };
              return {
                MeasureLayout:
                  e?.isEnabled(t) || n?.isEnabled(t)
                    ? s.MeasureLayout
                    : undefined,
                ProjectionNode: s.ProjectionNode,
              };
            })(l);
            a = e.MeasureLayout;
            f.visualElement = G(t, m, l, i, e.ProjectionNode);
          }
          return (0, u.jsxs)(p.Provider, {
            value: f,
            children: [
              a && f.visualElement
                ? (0, u.jsx)(a, {
                    visualElement: f.visualElement,
                    ...l,
                  })
                : null,
              D(t, n, q(m, f.visualElement, r), m, c, e),
            ],
          });
        }
        r.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
        const l = (0, s.forwardRef)(r);
        l[X] = t;
        return l;
      }
      function tt({ layoutId: t }) {
        const e = (0, s.useContext)(c).id;
        if (e && t !== undefined) {
          return e + "-" + t;
        } else {
          return t;
        }
      }
      function et(t, e) {
        if (typeof Proxy == "undefined") {
          return J;
        }
        const n = new Map();
        const s = (n, s) => J(n, s, t, e);
        return new Proxy((t, e) => s(t, e), {
          get: (i, o) =>
            o === "create"
              ? s
              : (n.has(o) || n.set(o, J(o, undefined, t, e)), n.get(o)),
        });
      }
      var nt = n(89654);
      var st = n(4516);
      function it(t, e, n, s = 0, i = 1) {
        const o = Array.from(t)
          .sort((t, e) => t.sortNodePosition(e))
          .indexOf(e);
        const r = t.size;
        const a = (r - 1) * s;
        if (typeof n == "function") {
          return n(o, r);
        } else if (i === 1) {
          return o * s;
        } else {
          return a - o * s;
        }
      }
      function ot(t, e, n = {}) {
        const s = (0, nt.x)(
          t,
          e,
          n.type === "exit" ? t.presenceContext?.custom : undefined,
        );
        let { transition: i = t.getDefaultTransition() || {} } = s || {};
        if (n.transitionOverride) {
          i = n.transitionOverride;
        }
        const o = s
          ? () => Promise.all((0, st.w)(t, s, n))
          : () => Promise.resolve();
        const r =
          t.variantChildren && t.variantChildren.size
            ? (s = 0) => {
                const {
                  delayChildren: o = 0,
                  staggerChildren: r,
                  staggerDirection: a,
                } = i;
                return (function (t, e, n = 0, s = 0, i = 0, o = 1, r) {
                  const a = [];
                  for (const l of t.variantChildren) {
                    l.notify("AnimationStart", e);
                    a.push(
                      ot(l, e, {
                        ...r,
                        delay:
                          n +
                          (typeof s == "function" ? 0 : s) +
                          it(t.variantChildren, l, s, i, o),
                      }).then(() => l.notify("AnimationComplete", e)),
                    );
                  }
                  return Promise.all(a);
                })(t, e, s, o, r, a, n);
              }
            : () => Promise.resolve();
        const { when: a } = i;
        if (a) {
          const [t, e] = a === "beforeChildren" ? [o, r] : [r, o];
          return t().then(() => e());
        }
        return Promise.all([o(), r(n.delay)]);
      }
      var rt = n(10516);
      function at(t, e) {
        if (!Array.isArray(e)) {
          return false;
        }
        const n = e.length;
        if (n !== t.length) {
          return false;
        }
        for (let s = 0; s < n; s++) {
          if (e[s] !== t[s]) {
            return false;
          }
        }
        return true;
      }
      var lt = n(89096);
      const ut = lt.V.length;
      function ct(t) {
        if (!t) {
          return;
        }
        if (!t.isControllingVariants) {
          const e = (t.parent && ct(t.parent)) || {};
          if (t.props.initial !== undefined) {
            e.initial = t.props.initial;
          }
          return e;
        }
        const e = {};
        for (let n = 0; n < ut; n++) {
          const s = lt.V[n];
          const i = t.props[s];
          if ((0, m.$)(i) || i === false) {
            e[s] = i;
          }
        }
        return e;
      }
      const ht = [...lt.e].reverse();
      const dt = lt.e.length;
      function pt(t) {
        return (e) =>
          Promise.all(
            e.map(({ animation: e, options: n }) =>
              (function (t, e, n = {}) {
                let s;
                t.notify("AnimationStart", e);
                if (Array.isArray(e)) {
                  const i = e.map((e) => ot(t, e, n));
                  s = Promise.all(i);
                } else if (typeof e == "string") {
                  s = ot(t, e, n);
                } else {
                  const i =
                    typeof e == "function" ? (0, nt.x)(t, e, n.custom) : e;
                  s = Promise.all((0, st.w)(t, i, n));
                }
                return s.then(() => {
                  t.notify("AnimationComplete", e);
                });
              })(t, e, n),
            ),
          );
      }
      function ft(t) {
        let e = pt(t);
        let n = vt();
        let s = true;
        const i = (e) => (n, s) => {
          const i = (0, nt.x)(
            t,
            s,
            e === "exit" ? t.presenceContext?.custom : undefined,
          );
          if (i) {
            const { transition: t, transitionEnd: e, ...s } = i;
            n = {
              ...n,
              ...s,
              ...e,
            };
          }
          return n;
        };
        function o(o) {
          const { props: r } = t;
          const a = ct(t.parent) || {};
          const l = [];
          const u = new Set();
          let c = {};
          let h = Infinity;
          for (let e = 0; e < dt; e++) {
            const d = ht[e];
            const p = n[d];
            const f = r[d] !== undefined ? r[d] : a[d];
            const g = (0, m.$)(f);
            const v = d === o ? p.isActive : null;
            if (v === false) {
              h = e;
            }
            let y = f === a[d] && f !== r[d] && g;
            if (y && s && t.manuallyAnimateOnMount) {
              y = false;
            }
            p.protectedKeys = {
              ...c,
            };
            if (
              (!p.isActive && v === null) ||
              (!f && !p.prevProp) ||
              (0, I.H)(f) ||
              typeof f == "boolean"
            ) {
              continue;
            }
            const w = mt(p.prevProp, f);
            let x = w || (d === o && p.isActive && !y && g) || (e > h && g);
            let b = false;
            const S = Array.isArray(f) ? f : [f];
            let P = S.reduce(i(d), {});
            if (v === false) {
              P = {};
            }
            const { prevResolvedValues: T = {} } = p;
            const E = {
              ...T,
              ...P,
            };
            const A = (e) => {
              x = true;
              if (u.has(e)) {
                b = true;
                u.delete(e);
              }
              p.needsAnimating[e] = true;
              const n = t.getValue(e);
              if (n) {
                n.liveStyle = false;
              }
            };
            for (const t in E) {
              const e = P[t];
              const n = T[t];
              if (c.hasOwnProperty(t)) {
                continue;
              }
              let s = false;
              s = (0, rt.C)(e) && (0, rt.C)(n) ? !at(e, n) : e !== n;
              if (s) {
                if (e != null) {
                  A(t);
                } else {
                  u.add(t);
                }
              } else if (e !== undefined && u.has(t)) {
                A(t);
              } else {
                p.protectedKeys[t] = true;
              }
            }
            p.prevProp = f;
            p.prevResolvedValues = P;
            if (p.isActive) {
              c = {
                ...c,
                ...P,
              };
            }
            if (s && t.blockInitialAnimation) {
              x = false;
            }
            const M = y && w;
            if (x && (!M || b)) {
              l.push(
                ...S.map((e) => {
                  const n = {
                    type: d,
                  };
                  if (
                    typeof e == "string" &&
                    s &&
                    !M &&
                    t.manuallyAnimateOnMount &&
                    t.parent
                  ) {
                    const { parent: s } = t;
                    const i = (0, nt.x)(s, e);
                    if (s.enteringChildren && i) {
                      const { delayChildren: e } = i.transition || {};
                      n.delay = it(s.enteringChildren, t, e);
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
            if (typeof r.initial != "boolean") {
              const n = (0, nt.x)(
                t,
                Array.isArray(r.initial) ? r.initial[0] : r.initial,
              );
              if (n && n.transition) {
                e.transition = n.transition;
              }
            }
            u.forEach((n) => {
              const s = t.getBaseTarget(n);
              const i = t.getValue(n);
              if (i) {
                i.liveStyle = true;
              }
              e[n] = s ?? null;
            });
            l.push({
              animation: e,
            });
          }
          let d = Boolean(l.length);
          if (
            !!s &&
            (r.initial === false || r.initial === r.animate) &&
            !t.manuallyAnimateOnMount
          ) {
            d = false;
          }
          s = false;
          if (d) {
            return e(l);
          } else {
            return Promise.resolve();
          }
        }
        return {
          animateChanges: o,
          setActive: function (e, s) {
            if (n[e].isActive === s) {
              return Promise.resolve();
            }
            t.variantChildren?.forEach((t) =>
              t.animationState?.setActive(e, s),
            );
            n[e].isActive = s;
            const i = o(e);
            for (const t in n) {
              n[t].protectedKeys = {};
            }
            return i;
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: () => n,
          reset: () => {
            n = vt();
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
      function vt() {
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
      class yt {
        constructor(t) {
          this.isMounted = false;
          this.node = t;
        }
        update() {}
      }
      let wt = 0;
      const xt = {
        animation: {
          Feature: class extends yt {
            constructor(t) {
              super(t);
              t.animationState ||= ft(t);
            }
            updateAnimationControlsSubscription() {
              const { animate: t } = this.node.getProps();
              if ((0, I.H)(t)) {
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
          Feature: class extends yt {
            constructor() {
              super(...arguments);
              this.id = wt++;
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
              const s = this.node.animationState.setActive("exit", !t);
              if (e && !t) {
                s.then(() => {
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
      var bt = n(43594);
      const St = {
        x: false,
        y: false,
      };
      function Pt() {
        return St.x || St.y;
      }
      var Tt = n(57360);
      var Et = n(63594);
      var At = n(55153);
      var Mt = n(26975);
      var Ct = n(20284);
      function kt(
        t,
        e,
        n,
        s = {
          passive: true,
        },
      ) {
        t.addEventListener(e, n, s);
        return () => t.removeEventListener(e, n);
      }
      const Rt = (t) =>
        t.pointerType === "mouse"
          ? typeof t.button != "number" || t.button <= 0
          : t.isPrimary !== false;
      function Vt(t) {
        return {
          point: {
            x: t.pageX,
            y: t.pageY,
          },
        };
      }
      function Ot(t, e, n, s) {
        return kt(
          t,
          e,
          (
            (t) => (e) =>
              Rt(e) && t(e, Vt(e))
          )(n),
          s,
        );
      }
      var Dt = n(74961);
      const It = 0.9999;
      const _t = 1.0001;
      const jt = -0.01;
      const Lt = 0.01;
      function Ft(t) {
        return t.max - t.min;
      }
      function Bt(t, e, n, s = 0.5) {
        t.origin = s;
        t.originPoint = (0, At.t)(e.min, e.max, t.origin);
        t.scale = Ft(n) / Ft(e);
        t.translate = (0, At.t)(n.min, n.max, t.origin) - t.originPoint;
        if ((t.scale >= It && t.scale <= _t) || isNaN(t.scale)) {
          t.scale = 1;
        }
        if ((t.translate >= jt && t.translate <= Lt) || isNaN(t.translate)) {
          t.translate = 0;
        }
      }
      function zt(t, e, n, s) {
        Bt(t.x, e.x, n.x, s ? s.originX : undefined);
        Bt(t.y, e.y, n.y, s ? s.originY : undefined);
      }
      function $t(t, e, n) {
        t.min = n.min + e.min;
        t.max = t.min + Ft(e);
      }
      function Wt(t, e, n) {
        t.min = e.min - n.min;
        t.max = t.min + Ft(e);
      }
      function Nt(t, e, n) {
        Wt(t.x, e.x, n.x);
        Wt(t.y, e.y, n.y);
      }
      var Ut = n(95398);
      function Xt(t) {
        return [t("x"), t("y")];
      }
      var Kt = n(10301);
      const qt = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var Yt = n(83800);
      var Ht = n(60333);
      var Zt = n(15244);
      const Gt = (t, e) => Math.abs(t - e);
      class Qt {
        constructor(
          t,
          e,
          {
            transformPagePoint: n,
            contextWindow: s = window,
            dragSnapToOrigin: i = false,
            distanceThreshold: o = 3,
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
            const t = ee(this.lastMoveEventInfo, this.history);
            const e = this.startEvent !== null;
            const n =
              (function (t, e) {
                const n = Gt(t.x, e.x);
                const s = Gt(t.y, e.y);
                return Math.sqrt(n ** 2 + s ** 2);
              })(t.offset, {
                x: 0,
                y: 0,
              }) >= this.distanceThreshold;
            if (!e && !n) {
              return;
            }
            const { point: s } = t;
            const { timestamp: i } = Et.w0;
            this.history.push({
              ...s,
              timestamp: i,
            });
            const { onStart: o, onMove: r } = this.handlers;
            if (!e) {
              if (o) {
                o(this.lastMoveEvent, t);
              }
              this.startEvent = this.lastMoveEvent;
            }
            if (r) {
              r(this.lastMoveEvent, t);
            }
          };
          this.handlePointerMove = (t, e) => {
            this.lastMoveEvent = t;
            this.lastMoveEventInfo = Jt(e, this.transformPagePoint);
            Et.Wi.update(this.updatePoint, true);
          };
          this.handlePointerUp = (t, e) => {
            this.end();
            const {
              onEnd: n,
              onSessionEnd: s,
              resumeAnimation: i,
            } = this.handlers;
            if (this.dragSnapToOrigin && i) {
              i();
            }
            if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
              return;
            }
            const o = ee(
              t.type === "pointercancel"
                ? this.lastMoveEventInfo
                : Jt(e, this.transformPagePoint),
              this.history,
            );
            if (this.startEvent && n) {
              n(t, o);
            }
            if (s) {
              s(t, o);
            }
          };
          if (!Rt(t)) {
            return;
          }
          this.dragSnapToOrigin = i;
          this.handlers = e;
          this.transformPagePoint = n;
          this.distanceThreshold = o;
          this.contextWindow = s || window;
          const r = Jt(Vt(t), this.transformPagePoint);
          const { point: a } = r;
          const { timestamp: l } = Et.w0;
          this.history = [
            {
              ...a,
              timestamp: l,
            },
          ];
          const { onSessionStart: u } = e;
          if (u) {
            u(t, ee(r, this.history));
          }
          this.removeListeners = (0, Ht.z)(
            Ot(this.contextWindow, "pointermove", this.handlePointerMove),
            Ot(this.contextWindow, "pointerup", this.handlePointerUp),
            Ot(this.contextWindow, "pointercancel", this.handlePointerUp),
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
      function Jt(t, e) {
        if (e) {
          return {
            point: e(t.point),
          };
        } else {
          return t;
        }
      }
      function te(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y,
        };
      }
      function ee({ point: t }, e) {
        return {
          point: t,
          delta: te(t, se(e)),
          offset: te(t, ne(e)),
          velocity: ie(e, 0.1),
        };
      }
      function ne(t) {
        return t[0];
      }
      function se(t) {
        return t[t.length - 1];
      }
      function ie(t, e) {
        if (t.length < 2) {
          return {
            x: 0,
            y: 0,
          };
        }
        let n = t.length - 1;
        let s = null;
        const i = se(t);
        while (
          n >= 0 &&
          ((s = t[n]), !(i.timestamp - s.timestamp > (0, Zt.w)(e)))
        ) {
          n--;
        }
        if (!s) {
          return {
            x: 0,
            y: 0,
          };
        }
        const o = (0, Zt.X)(i.timestamp - s.timestamp);
        if (o === 0) {
          return {
            x: 0,
            y: 0,
          };
        }
        const r = {
          x: (i.x - s.x) / o,
          y: (i.y - s.y) / o,
        };
        if (r.x === Infinity) {
          r.x = 0;
        }
        if (r.y === Infinity) {
          r.y = 0;
        }
        return r;
      }
      var oe = n(66789);
      var re = n(65437);
      function ae(t, e, n) {
        return {
          min: e !== undefined ? t.min + e : undefined,
          max: n !== undefined ? t.max + n - (t.max - t.min) : undefined,
        };
      }
      function le(t, e) {
        let n = e.min - t.min;
        let s = e.max - t.max;
        if (e.max - e.min < t.max - t.min) {
          [n, s] = [s, n];
        }
        return {
          min: n,
          max: s,
        };
      }
      const ue = 0.35;
      function ce(t, e, n) {
        return {
          min: he(t, e),
          max: he(t, n),
        };
      }
      function he(t, e) {
        if (typeof t == "number") {
          return t;
        } else {
          return t[e] || 0;
        }
      }
      const de = new WeakMap();
      class pe {
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
          this.elastic = (0, Ut.dO)();
          this.latestPointerEvent = null;
          this.latestPanInfo = null;
          this.visualElement = t;
        }
        start(t, { snapToCursor: e = false, distanceThreshold: n } = {}) {
          const { presenceContext: s } = this.visualElement;
          if (s && s.isPresent === false) {
            return;
          }
          const { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new Qt(
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
                  this.snapToCursor(Vt(t).point);
                }
              },
              onStart: (t, e) => {
                const {
                  drag: n,
                  dragPropagation: s,
                  onDragStart: i,
                } = this.getProps();
                if (
                  n &&
                  !s &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    (o = n) === "x" || o === "y"
                      ? St[o]
                        ? null
                        : ((St[o] = true),
                          () => {
                            St[o] = false;
                          })
                      : St.x || St.y
                        ? null
                        : ((St.x = St.y = true),
                          () => {
                            St.x = St.y = false;
                          })),
                  !this.openDragLock)
                ) {
                  return;
                }
                var o;
                this.latestPointerEvent = t;
                this.latestPanInfo = e;
                this.isDragging = true;
                this.currentDirection = null;
                this.resolveConstraints();
                if (this.visualElement.projection) {
                  this.visualElement.projection.isAnimationBlocked = true;
                  this.visualElement.projection.target = undefined;
                }
                Xt((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (Tt.aQ.test(e)) {
                    const { projection: n } = this.visualElement;
                    if (n && n.layout) {
                      const s = n.layout.layoutBox[t];
                      if (s) {
                        e = Ft(s) * (parseFloat(e) / 100);
                      }
                    }
                  }
                  this.originPoint[t] = e;
                });
                if (i) {
                  Et.Wi.postRender(() => i(t, e));
                }
                (0, Yt.K)(this.visualElement, "transform");
                const { animationState: r } = this.visualElement;
                if (r) {
                  r.setActive("whileDrag", true);
                }
              },
              onMove: (t, e) => {
                this.latestPointerEvent = t;
                this.latestPanInfo = e;
                const {
                  dragPropagation: n,
                  dragDirectionLock: s,
                  onDirectionLock: i,
                  onDrag: o,
                } = this.getProps();
                if (!n && !this.openDragLock) {
                  return;
                }
                const { offset: r } = e;
                if (s && this.currentDirection === null) {
                  this.currentDirection = (function (t, e = 10) {
                    let n = null;
                    if (Math.abs(t.y) > e) {
                      n = "y";
                    } else if (Math.abs(t.x) > e) {
                      n = "x";
                    }
                    return n;
                  })(r);
                  if (this.currentDirection !== null && i) {
                    i(this.currentDirection);
                  }
                  return;
                }
                this.updateAxis("x", e.point, r);
                this.updateAxis("y", e.point, r);
                this.visualElement.render();
                if (o) {
                  o(t, e);
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
                Xt(
                  (t) =>
                    this.getAnimationState(t) === "paused" &&
                    this.getAxisMotionValue(t).animation?.play(),
                ),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              distanceThreshold: n,
              contextWindow: qt(this.visualElement),
            },
          );
        }
        stop(t, e) {
          const n = t || this.latestPointerEvent;
          const s = e || this.latestPanInfo;
          const i = this.isDragging;
          this.cancel();
          if (!i || !s || !n) {
            return;
          }
          const { velocity: o } = s;
          this.startAnimation(o);
          const { onDragEnd: r } = this.getProps();
          if (r) {
            Et.Wi.postRender(() => r(n, s));
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
          const { drag: s } = this.getProps();
          if (!n || !fe(t, s, this.currentDirection)) {
            return;
          }
          const i = this.getAxisMotionValue(t);
          let o = this.originPoint[t] + n[t];
          if (this.constraints && this.constraints[t]) {
            o = (function (t, { min: e, max: n }, s) {
              if (e !== undefined && t < e) {
                t = s ? (0, At.t)(e, t, s.min) : Math.max(t, e);
              } else if (n !== undefined && t > n) {
                t = s ? (0, At.t)(n, t, s.max) : Math.min(t, n);
              }
              return t;
            })(o, this.constraints[t], this.elastic[t]);
          }
          i.set(o);
        }
        resolveConstraints() {
          const { dragConstraints: t, dragElastic: e } = this.getProps();
          const n =
            this.visualElement.projection &&
            !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(false)
              : this.visualElement.projection?.layout;
          const s = this.constraints;
          if (t && K(t)) {
            this.constraints ||= this.resolveRefConstraints();
          } else {
            this.constraints =
              !!t &&
              !!n &&
              (function (t, { top: e, left: n, bottom: s, right: i }) {
                return {
                  x: ae(t.x, n, i),
                  y: ae(t.y, e, s),
                };
              })(n.layoutBox, t);
          }
          this.elastic = (function (t = ue) {
            if (t === false) {
              t = 0;
            } else if (t === true) {
              t = ue;
            }
            return {
              x: ce(t, "left", "right"),
              y: ce(t, "top", "bottom"),
            };
          })(e);
          if (
            s !== this.constraints &&
            n &&
            this.constraints &&
            !this.hasMutatedConstraints
          ) {
            Xt((t) => {
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
          if (!t || !K(t)) {
            return false;
          }
          const n = t.current;
          (0, Mt.k)(
            n !== null,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            "drag-constraints-ref",
          );
          const { projection: s } = this.visualElement;
          if (!s || !s.layout) {
            return false;
          }
          const i = (0, Kt.z)(
            n,
            s.root,
            this.visualElement.getTransformPagePoint(),
          );
          let o = (function (t, e) {
            return {
              x: le(t.x, e.x),
              y: le(t.y, e.y),
            };
          })(s.layout.layoutBox, i);
          if (e) {
            const t = e((0, Dt.z2)(o));
            this.hasMutatedConstraints = !!t;
            if (t) {
              o = (0, Dt.i8)(t);
            }
          }
          return o;
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: s,
            dragTransition: i,
            dragSnapToOrigin: o,
            onDragTransitionEnd: r,
          } = this.getProps();
          const a = this.constraints || {};
          const l = Xt((r) => {
            if (!fe(r, e, this.currentDirection)) {
              return;
            }
            let l = (a && a[r]) || {};
            if (o) {
              l = {
                min: 0,
                max: 0,
              };
            }
            const u = s ? 200 : 1000000;
            const c = s ? 40 : 10000000;
            const h = {
              type: "inertia",
              velocity: n ? t[r] : 0,
              bounceStiffness: u,
              bounceDamping: c,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...l,
            };
            return this.startAxisValueAnimation(r, h);
          });
          return Promise.all(l).then(r);
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          (0, Yt.K)(this.visualElement, t);
          return n.start((0, Ct.v)(t, n, 0, e, this.visualElement, false));
        }
        stopAnimation() {
          Xt((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          Xt((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          const e = `_drag${t.toUpperCase()}`;
          const n = this.visualElement.getProps();
          const s = n[e];
          return (
            s ||
            this.visualElement.getValue(
              t,
              (n.initial ? n.initial[t] : undefined) || 0,
            )
          );
        }
        snapToCursor(t) {
          Xt((e) => {
            const { drag: n } = this.getProps();
            if (!fe(e, n, this.currentDirection)) {
              return;
            }
            const { projection: s } = this.visualElement;
            const i = this.getAxisMotionValue(e);
            if (s && s.layout) {
              const { min: n, max: o } = s.layout.layoutBox[e];
              i.set(t[e] - (0, At.t)(n, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) {
            return;
          }
          const { drag: t, dragConstraints: e } = this.getProps();
          const { projection: n } = this.visualElement;
          if (!K(e) || !n || !this.constraints) {
            return;
          }
          this.stopAnimation();
          const s = {
            x: 0,
            y: 0,
          };
          Xt((t) => {
            const e = this.getAxisMotionValue(t);
            if (e && this.constraints !== false) {
              const n = e.get();
              s[t] = (function (t, e) {
                let n = 0.5;
                const s = Ft(t);
                const i = Ft(e);
                if (i > s) {
                  n = (0, oe.Y)(e.min, e.max - s, t.min);
                } else if (s > i) {
                  n = (0, oe.Y)(t.min, t.max - i, e.min);
                }
                return (0, re.u)(0, 1, n);
              })(
                {
                  min: n,
                  max: n,
                },
                this.constraints[t],
              );
            }
          });
          const { transformTemplate: i } = this.visualElement.getProps();
          this.visualElement.current.style.transform = i ? i({}, "") : "none";
          if (n.root) {
            n.root.updateScroll();
          }
          n.updateLayout();
          this.resolveConstraints();
          Xt((e) => {
            if (!fe(e, t, null)) {
              return;
            }
            const n = this.getAxisMotionValue(e);
            const { min: i, max: o } = this.constraints[e];
            n.set((0, At.t)(i, o, s[e]));
          });
        }
        addListeners() {
          if (!this.visualElement.current) {
            return;
          }
          de.set(this.visualElement, this);
          const t = Ot(this.visualElement.current, "pointerdown", (t) => {
            const { drag: e, dragListener: n = true } = this.getProps();
            if (e && n) {
              this.start(t);
            }
          });
          const e = () => {
            const { dragConstraints: t } = this.getProps();
            if (K(t) && t.current) {
              this.constraints = this.resolveRefConstraints();
            }
          };
          const { projection: n } = this.visualElement;
          const s = n.addEventListener("measure", e);
          if (n && !n.layout) {
            if (n.root) {
              n.root.updateScroll();
            }
            n.updateLayout();
          }
          Et.Wi.read(e);
          const i = kt(window, "resize", () =>
            this.scalePositionWithinConstraints(),
          );
          const o = n.addEventListener(
            "didUpdate",
            ({ delta: t, hasLayoutChanged: e }) => {
              if (this.isDragging && e) {
                Xt((e) => {
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
            i();
            t();
            s();
            if (o) {
              o();
            }
          };
        }
        getProps() {
          const t = this.visualElement.getProps();
          const {
            drag: e = false,
            dragDirectionLock: n = false,
            dragPropagation: s = false,
            dragConstraints: i = false,
            dragElastic: o = ue,
            dragMomentum: r = true,
          } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: s,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: r,
          };
        }
      }
      function fe(t, e, n) {
        return (e === true || e === t) && (n === null || n === t);
      }
      const me = (t) => (e, n) => {
        if (t) {
          Et.Wi.postRender(() => t(e, n));
        }
      };
      var ge = n(69547);
      const ve = {
        hasAnimatedSinceResize: true,
        hasEverUpdated: false,
      };
      function ye(t, e) {
        if (e.max === e.min) {
          return 0;
        } else {
          return (t / (e.max - e.min)) * 100;
        }
      }
      const we = {
        correct: (t, e) => {
          if (!e.target) {
            return t;
          }
          if (typeof t == "string") {
            if (!Tt.px.test(t)) {
              return t;
            }
            t = parseFloat(t);
          }
          return `${ye(t, e.target.x)}% ${ye(t, e.target.y)}%`;
        },
      };
      var xe = n(28779);
      const be = {
        correct: (t, { treeScale: e, projectionDelta: n }) => {
          const s = t;
          const i = xe.P.parse(t);
          if (i.length > 5) {
            return s;
          }
          const o = xe.P.createTransformer(t);
          const r = typeof i[0] != "number" ? 1 : 0;
          const a = n.x.scale * e.x;
          const l = n.y.scale * e.y;
          i[0 + r] /= a;
          i[1 + r] /= l;
          const u = (0, At.t)(a, l, 0.5);
          if (typeof i[2 + r] == "number") {
            i[2 + r] /= u;
          }
          if (typeof i[3 + r] == "number") {
            i[3 + r] /= u;
          }
          return o(i);
        },
      };
      var Se = n(23486);
      let Pe = false;
      class Te extends s.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: s,
          } = this.props;
          const { projection: i } = t;
          (0, Se.B)(Ae);
          if (i) {
            if (e.group) {
              e.group.add(i);
            }
            if (n && n.register && s) {
              n.register(i);
            }
            if (Pe) {
              i.root.didUpdate();
            }
            i.addEventListener("animationComplete", () => {
              this.safeToRemove();
            });
            i.setOptions({
              ...i.options,
              onExitComplete: () => this.safeToRemove(),
            });
          }
          ve.hasEverUpdated = true;
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: s,
            isPresent: i,
          } = this.props;
          const { projection: o } = n;
          if (o) {
            o.isPresent = i;
            Pe = true;
            if (
              s ||
              t.layoutDependency !== e ||
              e === undefined ||
              t.isPresent !== i
            ) {
              o.willUpdate();
            } else {
              this.safeToRemove();
            }
            if (t.isPresent !== i) {
              if (i) {
                o.promote();
              } else if (!o.relegate()) {
                Et.Wi.postRender(() => {
                  const t = o.getStack();
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
            ge.g.postRender(() => {
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
          const { projection: s } = t;
          Pe = true;
          if (s) {
            s.scheduleCheckAfterUnmount();
            if (e && e.group) {
              e.group.remove(s);
            }
            if (n && n.deregister) {
              n.deregister(s);
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
      function Ee(t) {
        const [e, n] = (function (t = true) {
          const e = (0, s.useContext)(_);
          if (e === null) {
            return [true, null];
          }
          const { isPresent: n, onExitComplete: i, register: o } = e;
          const r = (0, s.useId)();
          (0, s.useEffect)(() => {
            if (t) {
              return o(r);
            }
          }, [t]);
          const a = (0, s.useCallback)(() => t && i && i(r), [r, i, t]);
          if (!n && i) {
            return [false, a];
          } else {
            return [true];
          }
        })();
        const i = (0, s.useContext)(c);
        return (0, u.jsx)(Te, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, s.useContext)(H),
          isPresent: e,
          safeToRemove: n,
        });
      }
      const Ae = {
        borderRadius: {
          ...we,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: we,
        borderTopRightRadius: we,
        borderBottomLeftRadius: we,
        borderBottomRightRadius: we,
        boxShadow: be,
      };
      var Me = n(27984);
      var Ce = n(59634);
      var ke = n(30038);
      var Re = n(83479);
      var Ve = n(35449);
      var Oe = n(32838);
      var De = n(17802);
      var Ie = n(58088);
      var _e = n(59349);
      var je = n(56796);
      var Le = n(25013);
      const Fe = (t, e) => t.depth - e.depth;
      class Be {
        constructor() {
          this.children = [];
          this.isDirty = false;
        }
        add(t) {
          (0, Le.y4)(this.children, t);
          this.isDirty = true;
        }
        remove(t) {
          (0, Le.cl)(this.children, t);
          this.isDirty = true;
        }
        forEach(t) {
          if (this.isDirty) {
            this.children.sort(Fe);
          }
          this.isDirty = false;
          this.children.forEach(t);
        }
      }
      function ze(t, e) {
        const n = Ve.X.now();
        const s = ({ timestamp: i }) => {
          const o = i - n;
          if (o >= e) {
            (0, Et.Pn)(s);
            t(o - e);
          }
        };
        Et.Wi.setup(s, true);
        return () => (0, Et.Pn)(s);
      }
      var $e = n(37919);
      const We = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
      const Ne = We.length;
      const Ue = (t) => (typeof t == "string" ? parseFloat(t) : t);
      const Xe = (t) => typeof t == "number" || Tt.px.test(t);
      function Ke(t, e) {
        if (t[e] !== undefined) {
          return t[e];
        } else {
          return t.borderRadius;
        }
      }
      const qe = He(0, 0.5, $e.Bn);
      const Ye = He(0.5, 0.95, bt.Z);
      function He(t, e, n) {
        return (s) => (s < t ? 0 : s > e ? 1 : n((0, oe.Y)(t, e, s)));
      }
      function Ze(t, e) {
        t.min = e.min;
        t.max = e.max;
      }
      function Ge(t, e) {
        Ze(t.x, e.x);
        Ze(t.y, e.y);
      }
      function Qe(t, e) {
        t.translate = e.translate;
        t.scale = e.scale;
        t.originPoint = e.originPoint;
        t.origin = e.origin;
      }
      var Je = n(80813);
      function tn(t, e, n, s, i) {
        t -= e;
        t = (0, Je.q2)(t, 1 / n, s);
        if (i !== undefined) {
          t = (0, Je.q2)(t, 1 / i, s);
        }
        return t;
      }
      function en(t, e, [n, s, i], o, r) {
        (function (t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
          if (Tt.aQ.test(e)) {
            e = parseFloat(e);
            e = (0, At.t)(r.min, r.max, e / 100) - r.min;
          }
          if (typeof e != "number") {
            return;
          }
          let a = (0, At.t)(o.min, o.max, s);
          if (t === o) {
            a -= e;
          }
          t.min = tn(t.min, e, n, a, i);
          t.max = tn(t.max, e, n, a, i);
        })(t, e[n], e[s], e[i], e.scale, o, r);
      }
      const nn = ["x", "scaleX", "originX"];
      const sn = ["y", "scaleY", "originY"];
      function on(t, e, n, s) {
        en(t.x, e, nn, n ? n.x : undefined, s ? s.x : undefined);
        en(t.y, e, sn, n ? n.y : undefined, s ? s.y : undefined);
      }
      function rn(t) {
        return t.translate === 0 && t.scale === 1;
      }
      function an(t) {
        return rn(t.x) && rn(t.y);
      }
      function ln(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function un(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function cn(t, e) {
        return un(t.x, e.x) && un(t.y, e.y);
      }
      function hn(t) {
        return Ft(t.x) / Ft(t.y);
      }
      function dn(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class pn {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, Le.y4)(this.members, t);
          t.scheduleRender();
        }
        remove(t) {
          (0, Le.cl)(this.members, t);
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
            const { crossfade: s } = t.options;
            if (s === false) {
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
      var fn = n(6034);
      const mn = {
        nodes: 0,
        calculatedTargetDeltas: 0,
        calculatedProjections: 0,
      };
      const gn = ["", "X", "Y", "Z"];
      let vn = 0;
      function yn(t, e, n, s) {
        const { latestValues: i } = e;
        if (i[t]) {
          n[t] = i[t];
          e.setStaticValue(t, 0);
          if (s) {
            s[t] = 0;
          }
        }
      }
      function wn(t) {
        t.hasCheckedOptimisedAppear = true;
        if (t.root === t) {
          return;
        }
        const { visualElement: e } = t.options;
        if (!e) {
          return;
        }
        const n = (0, je.s)(e);
        if (window.MotionHasOptimisedAnimation(n, "transform")) {
          const { layout: e, layoutId: s } = t.options;
          window.MotionCancelOptimisedAnimation(
            n,
            "transform",
            Et.Wi,
            !e && !s,
          );
        }
        const { parent: s } = t;
        if (s && !s.hasCheckedOptimisedAppear) {
          wn(s);
        }
      }
      function xn({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: s,
        resetTransform: i,
      }) {
        return class {
          constructor(t = {}, n = e?.()) {
            this.id = vn++;
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
              if (Me.f.value) {
                mn.nodes =
                  mn.calculatedTargetDeltas =
                  mn.calculatedProjections =
                    0;
              }
              this.nodes.forEach(Pn);
              this.nodes.forEach(Rn);
              this.nodes.forEach(Vn);
              this.nodes.forEach(Tn);
              if (Me.f.addProjectionMetrics) {
                Me.f.addProjectionMetrics(mn);
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
              this.nodes = new Be();
            }
          }
          addEventListener(t, e) {
            if (!this.eventHandlers.has(t)) {
              this.eventHandlers.set(t, new Ie.L());
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
            this.isSVG = (0, Ce.v)(e) && !(0, ke.r)(e);
            this.instance = e;
            const { layoutId: n, layout: s, visualElement: i } = this.options;
            if (i && !i.current) {
              i.mount(e);
            }
            this.root.nodes.add(this);
            if (this.parent) {
              this.parent.children.add(this);
            }
            if (this.root.hasTreeAnimated && (s || n)) {
              this.isLayoutDirty = true;
            }
            if (t) {
              let n;
              let s = 0;
              const i = () => (this.root.updateBlockedByResize = false);
              Et.Wi.read(() => {
                s = window.innerWidth;
              });
              t(e, () => {
                const t = window.innerWidth;
                if (t !== s) {
                  s = t;
                  this.root.updateBlockedByResize = true;
                  if (n) {
                    n();
                  }
                  n = ze(i, 250);
                  if (ve.hasAnimatedSinceResize) {
                    ve.hasAnimatedSinceResize = false;
                    this.nodes.forEach(kn);
                  }
                }
              });
            }
            if (n) {
              this.root.registerSharedNode(n, this);
            }
            if (this.options.animate !== false && i && (n || s)) {
              this.addEventListener(
                "didUpdate",
                ({
                  delta: t,
                  hasLayoutChanged: e,
                  hasRelativeLayoutChanged: n,
                  layout: s,
                }) => {
                  if (this.isTreeAnimationBlocked()) {
                    this.target = undefined;
                    this.relativeTarget = undefined;
                    return;
                  }
                  const o =
                    this.options.transition || i.getDefaultTransition() || Ln;
                  const {
                    onLayoutAnimationStart: r,
                    onLayoutAnimationComplete: a,
                  } = i.getProps();
                  const l = !this.targetLayout || !cn(this.targetLayout, s);
                  const u = !e && n;
                  if (
                    this.options.layoutRoot ||
                    this.resumeFrom ||
                    u ||
                    (e && (l || !this.currentAnimation))
                  ) {
                    if (this.resumeFrom) {
                      this.resumingFrom = this.resumeFrom;
                      this.resumingFrom.resumingFrom = undefined;
                    }
                    const e = {
                      ...(0, Re.e)(o, "layout"),
                      onPlay: r,
                      onComplete: a,
                    };
                    if (i.shouldReduceMotion || this.options.layoutRoot) {
                      e.delay = 0;
                      e.type = false;
                    }
                    this.startAnimation(e);
                    this.setAnimationOrigin(t, u);
                  } else {
                    if (!e) {
                      kn(this);
                    }
                    if (this.isLead() && this.options.onExitComplete) {
                      this.options.onExitComplete();
                    }
                  }
                  this.targetLayout = s;
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
                this.nodes.forEach(On);
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
              wn(this);
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
            const s = this.getTransformTemplate();
            this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
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
              this.nodes.forEach(An);
              return;
            }
            if (this.animationId <= this.animationCommitId) {
              this.nodes.forEach(Mn);
              return;
            }
            this.animationCommitId = this.animationId;
            if (this.isUpdating) {
              this.isUpdating = false;
              this.nodes.forEach(Cn);
              this.nodes.forEach(bn);
              this.nodes.forEach(Sn);
            } else {
              this.nodes.forEach(Mn);
            }
            this.clearAllSnapshots();
            const t = Ve.X.now();
            Et.w0.delta = (0, re.u)(0, 1000 / 60, t - Et.w0.timestamp);
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
              ge.g.read(this.scheduleUpdate);
            }
          }
          clearAllSnapshots() {
            this.nodes.forEach(En);
            this.sharedNodes.forEach(Dn);
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
                !Ft(this.snapshot.measuredBox.x) &&
                !Ft(this.snapshot.measuredBox.y)
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
            this.layoutCorrected = (0, Ut.dO)();
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
              const e = s(this.instance);
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
            if (!i) {
              return;
            }
            const t =
              this.isLayoutDirty ||
              this.shouldResetTransform ||
              this.options.alwaysMeasureLayout;
            const e = this.projectionDelta && !an(this.projectionDelta);
            const n = this.getTransformTemplate();
            const s = n ? n(this.latestValues, "") : undefined;
            const o = s !== this.prevTransformTemplateValue;
            if (
              t &&
              this.instance &&
              (e || (0, fn.ud)(this.latestValues) || o)
            ) {
              i(this.instance, s);
              this.shouldResetTransform = false;
              this.scheduleRender();
            }
          }
          measure(t = true) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var s;
            if (t) {
              n = this.removeTransform(n);
            }
            zn((s = n).x);
            zn(s.y);
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
              return (0, Ut.dO)();
            }
            const e = t.measureViewportBox();
            if (!this.scroll?.wasRoot && !this.path.some(Wn)) {
              const { scroll: t } = this.root;
              if (t) {
                (0, Je.am)(e.x, t.offset.x);
                (0, Je.am)(e.y, t.offset.y);
              }
            }
            return e;
          }
          removeElementScroll(t) {
            const e = (0, Ut.dO)();
            Ge(e, t);
            if (this.scroll?.wasRoot) {
              return e;
            }
            for (let n = 0; n < this.path.length; n++) {
              const s = this.path[n];
              const { scroll: i, options: o } = s;
              if (s !== this.root && i && o.layoutScroll) {
                if (i.wasRoot) {
                  Ge(e, t);
                }
                (0, Je.am)(e.x, i.offset.x);
                (0, Je.am)(e.y, i.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = false) {
            const n = (0, Ut.dO)();
            Ge(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const s = this.path[t];
              if (!e && s.options.layoutScroll && s.scroll && s !== s.root) {
                (0, Je.D2)(n, {
                  x: -s.scroll.offset.x,
                  y: -s.scroll.offset.y,
                });
              }
              if ((0, fn.ud)(s.latestValues)) {
                (0, Je.D2)(n, s.latestValues);
              }
            }
            if ((0, fn.ud)(this.latestValues)) {
              (0, Je.D2)(n, this.latestValues);
            }
            return n;
          }
          removeTransform(t) {
            const e = (0, Ut.dO)();
            Ge(e, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              if (!n.instance) {
                continue;
              }
              if (!(0, fn.ud)(n.latestValues)) {
                continue;
              }
              if ((0, fn.Lj)(n.latestValues)) {
                n.updateSnapshot();
              }
              const s = (0, Ut.dO)();
              Ge(s, n.measurePageBox());
              on(
                e,
                n.latestValues,
                n.snapshot ? n.snapshot.layoutBox : undefined,
                s,
              );
            }
            if ((0, fn.ud)(this.latestValues)) {
              on(e, this.latestValues);
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
            const { layout: s, layoutId: i } = this.options;
            if (this.layout && (s || i)) {
              this.resolvedRelativeTargetAt = Et.w0.timestamp;
              if (!this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                if (t && t.layout && this.animationProgress !== 1) {
                  this.relativeParent = t;
                  this.forceRelativeParentToResolveTarget();
                  this.relativeTarget = (0, Ut.dO)();
                  this.relativeTargetOrigin = (0, Ut.dO)();
                  Nt(
                    this.relativeTargetOrigin,
                    this.layout.layoutBox,
                    t.layout.layoutBox,
                  );
                  Ge(this.relativeTarget, this.relativeTargetOrigin);
                } else {
                  this.relativeParent = this.relativeTarget = undefined;
                }
              }
              if (this.relativeTarget || this.targetDelta) {
                var o;
                var r;
                var a;
                if (!this.target) {
                  this.target = (0, Ut.dO)();
                  this.targetWithTransforms = (0, Ut.dO)();
                }
                if (
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.relativeParent &&
                  this.relativeParent.target
                ) {
                  this.forceRelativeParentToResolveTarget();
                  o = this.target;
                  r = this.relativeTarget;
                  a = this.relativeParent.target;
                  $t(o.x, r.x, a.x);
                  $t(o.y, r.y, a.y);
                } else if (this.targetDelta) {
                  if (Boolean(this.resumingFrom)) {
                    this.target = this.applyTransform(this.layout.layoutBox);
                  } else {
                    Ge(this.target, this.layout.layoutBox);
                  }
                  (0, Je.o2)(this.target, this.targetDelta);
                } else {
                  Ge(this.target, this.layout.layoutBox);
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
                    this.relativeTarget = (0, Ut.dO)();
                    this.relativeTargetOrigin = (0, Ut.dO)();
                    Nt(this.relativeTargetOrigin, this.target, t.target);
                    Ge(this.relativeTarget, this.relativeTargetOrigin);
                  } else {
                    this.relativeParent = this.relativeTarget = undefined;
                  }
                }
                if (Me.f.value) {
                  mn.calculatedTargetDeltas++;
                }
              }
            }
          }
          getClosestProjectingParent() {
            if (
              this.parent &&
              !(0, fn.Lj)(this.parent.latestValues) &&
              !(0, fn.D_)(this.parent.latestValues)
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
            const { layout: s, layoutId: i } = this.options;
            this.isTreeAnimating = Boolean(
              (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation,
            );
            if (!this.isTreeAnimating) {
              this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || (!s && !i)) {
              return;
            }
            Ge(this.layoutCorrected, this.layout.layoutBox);
            const o = this.treeScale.x;
            const r = this.treeScale.y;
            (0, Je.YY)(this.layoutCorrected, this.treeScale, this.path, e);
            if (
              !!t.layout &&
              !t.target &&
              (this.treeScale.x !== 1 || this.treeScale.y !== 1)
            ) {
              t.target = t.layout.layoutBox;
              t.targetWithTransforms = (0, Ut.dO)();
            }
            const { target: a } = t;
            if (a) {
              if (this.projectionDelta && this.prevProjectionDelta) {
                Qe(this.prevProjectionDelta.x, this.projectionDelta.x);
                Qe(this.prevProjectionDelta.y, this.projectionDelta.y);
              } else {
                this.createProjectionDeltas();
              }
              zt(
                this.projectionDelta,
                this.layoutCorrected,
                a,
                this.latestValues,
              );
              if (
                this.treeScale.x !== o ||
                this.treeScale.y !== r ||
                !dn(this.projectionDelta.x, this.prevProjectionDelta.x) ||
                !dn(this.projectionDelta.y, this.prevProjectionDelta.y)
              ) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", a);
              }
              if (Me.f.value) {
                mn.calculatedProjections++;
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
            this.prevProjectionDelta = (0, Ut.wc)();
            this.projectionDelta = (0, Ut.wc)();
            this.projectionDeltaWithTransform = (0, Ut.wc)();
          }
          setAnimationOrigin(t, e = false) {
            const n = this.snapshot;
            const s = n ? n.latestValues : {};
            const i = {
              ...this.latestValues,
            };
            const o = (0, Ut.wc)();
            if (
              !this.relativeParent ||
              !this.relativeParent.options.layoutRoot
            ) {
              this.relativeTarget = this.relativeTargetOrigin = undefined;
            }
            this.attemptToResolveRelativeTarget = !e;
            const r = (0, Ut.dO)();
            const a =
              (n ? n.source : undefined) !==
              (this.layout ? this.layout.source : undefined);
            const l = this.getStack();
            const u = !l || l.members.length <= 1;
            const c = Boolean(
              a && !u && this.options.crossfade === true && !this.path.some(jn),
            );
            let h;
            this.animationProgress = 0;
            this.mixTargetDelta = (e) => {
              const n = e / 1000;
              var l;
              var d;
              var p;
              var f;
              var m;
              var g;
              In(o.x, t.x, n);
              In(o.y, t.y, n);
              this.setTargetDelta(o);
              if (
                this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout
              ) {
                Nt(
                  r,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox,
                );
                p = this.relativeTarget;
                f = this.relativeTargetOrigin;
                m = r;
                g = n;
                _n(p.x, f.x, m.x, g);
                _n(p.y, f.y, m.y, g);
                if (
                  h &&
                  ((l = this.relativeTarget),
                  (d = h),
                  ln(l.x, d.x) && ln(l.y, d.y))
                ) {
                  this.isProjectionDirty = false;
                }
                h ||= (0, Ut.dO)();
                Ge(h, this.relativeTarget);
              }
              if (a) {
                this.animationValues = i;
                (function (t, e, n, s, i, o) {
                  if (i) {
                    t.opacity = (0, At.t)(0, n.opacity ?? 1, qe(s));
                    t.opacityExit = (0, At.t)(e.opacity ?? 1, 0, Ye(s));
                  } else if (o) {
                    t.opacity = (0, At.t)(e.opacity ?? 1, n.opacity ?? 1, s);
                  }
                  for (let i = 0; i < Ne; i++) {
                    const o = `border${We[i]}Radius`;
                    let r = Ke(e, o);
                    let a = Ke(n, o);
                    if (r !== undefined || a !== undefined) {
                      r ||= 0;
                      a ||= 0;
                      if (r === 0 || a === 0 || Xe(r) === Xe(a)) {
                        t[o] = Math.max((0, At.t)(Ue(r), Ue(a), s), 0);
                        if (Tt.aQ.test(a) || Tt.aQ.test(r)) {
                          t[o] += "%";
                        }
                      } else {
                        t[o] = a;
                      }
                    }
                  }
                  if (e.rotate || n.rotate) {
                    t.rotate = (0, At.t)(e.rotate || 0, n.rotate || 0, s);
                  }
                })(i, s, this.latestValues, n, c, u);
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
              ve.hasAnimatedSinceResize = true;
              Oe.P.layout++;
              this.motionValue ||= (0, De.BX)(0);
              this.currentAnimation = (0, _e.D)(this.motionValue, [0, 1000], {
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
                  Oe.P.layout--;
                },
                onComplete: () => {
                  Oe.P.layout--;
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
              layout: s,
              latestValues: i,
            } = t;
            if (e && n && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                $n(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox,
                )
              ) {
                n = this.target || (0, Ut.dO)();
                const e = Ft(this.layout.layoutBox.x);
                n.x.min = t.target.x.min;
                n.x.max = n.x.min + e;
                const s = Ft(this.layout.layoutBox.y);
                n.y.min = t.target.y.min;
                n.y.max = n.y.min + s;
              }
              Ge(e, n);
              (0, Je.D2)(e, i);
              zt(this.projectionDeltaWithTransform, this.layoutCorrected, e, i);
            }
          }
          registerSharedNode(t, e) {
            if (!this.sharedNodes.has(t)) {
              this.sharedNodes.set(t, new pn());
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
            const s = this.getStack();
            if (s) {
              s.promote(this, n);
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
            const s = {};
            if (n.z) {
              yn("z", t, s, this.animationValues);
            }
            for (let e = 0; e < gn.length; e++) {
              yn(`rotate${gn[e]}`, t, s, this.animationValues);
              yn(`skew${gn[e]}`, t, s, this.animationValues);
            }
            t.render();
            for (const e in s) {
              t.setStaticValue(e, s[e]);
              if (this.animationValues) {
                this.animationValues[e] = s[e];
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
            const s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              if (this.options.layoutId) {
                t.opacity =
                  this.latestValues.opacity !== undefined
                    ? this.latestValues.opacity
                    : 1;
                t.pointerEvents = F(e?.pointerEvents) || "";
              }
              if (this.hasProjected && !(0, fn.ud)(this.latestValues)) {
                t.transform = n ? n({}, "") : "none";
                this.hasProjected = false;
              }
              return;
            }
            t.visibility = "";
            const i = s.animationValues || s.latestValues;
            this.applyTransformsToTarget();
            let o = (function (t, e, n) {
              let s = "";
              const i = t.x.translate / e.x;
              const o = t.y.translate / e.y;
              const r = n?.z || 0;
              if (i || o || r) {
                s = `translate3d(${i}px, ${o}px, ${r}px) `;
              }
              if (e.x !== 1 || e.y !== 1) {
                s += `scale(${1 / e.x}, ${1 / e.y}) `;
              }
              if (n) {
                const {
                  transformPerspective: t,
                  rotate: e,
                  rotateX: i,
                  rotateY: o,
                  skewX: r,
                  skewY: a,
                } = n;
                if (t) {
                  s = `perspective(${t}px) ${s}`;
                }
                if (e) {
                  s += `rotate(${e}deg) `;
                }
                if (i) {
                  s += `rotateX(${i}deg) `;
                }
                if (o) {
                  s += `rotateY(${o}deg) `;
                }
                if (r) {
                  s += `skewX(${r}deg) `;
                }
                if (a) {
                  s += `skewY(${a}deg) `;
                }
              }
              const a = t.x.scale * e.x;
              const l = t.y.scale * e.y;
              if (a !== 1 || l !== 1) {
                s += `scale(${a}, ${l})`;
              }
              return s || "none";
            })(this.projectionDeltaWithTransform, this.treeScale, i);
            if (n) {
              o = n(i, o);
            }
            t.transform = o;
            const { x: r, y: a } = this.projectionDelta;
            t.transformOrigin = `${r.origin * 100}% ${a.origin * 100}% 0`;
            if (s.animationValues) {
              t.opacity =
                s === this
                  ? (i.opacity ?? this.latestValues.opacity ?? 1)
                  : this.preserveOpacity
                    ? this.latestValues.opacity
                    : i.opacityExit;
            } else {
              t.opacity =
                s === this
                  ? i.opacity !== undefined
                    ? i.opacity
                    : ""
                  : i.opacityExit !== undefined
                    ? i.opacityExit
                    : 0;
            }
            for (const e in Se.P) {
              if (i[e] === undefined) {
                continue;
              }
              const { correct: n, applyTo: r, isCSSVariable: a } = Se.P[e];
              const l = o === "none" ? i[e] : n(i[e], s);
              if (r) {
                const e = r.length;
                for (let n = 0; n < e; n++) {
                  t[r[n]] = l;
                }
              } else if (a) {
                this.options.visualElement.renderState.vars[e] = l;
              } else {
                t[e] = l;
              }
            }
            if (this.options.layoutId) {
              t.pointerEvents = s === this ? F(e?.pointerEvents) || "" : "none";
            }
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
          }
          resetTree() {
            this.root.nodes.forEach((t) => t.currentAnimation?.stop());
            this.root.nodes.forEach(An);
            this.root.sharedNodes.clear();
          }
        };
      }
      function bn(t) {
        t.updateLayout();
      }
      function Sn(t) {
        const e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          const { layoutBox: n, measuredBox: s } = t.layout;
          const { animationType: i } = t.options;
          const o = e.source !== t.layout.source;
          if (i === "size") {
            Xt((t) => {
              const s = o ? e.measuredBox[t] : e.layoutBox[t];
              const i = Ft(s);
              s.min = n[t].min;
              s.max = s.min + i;
            });
          } else if ($n(i, e.layoutBox, n)) {
            Xt((s) => {
              const i = o ? e.measuredBox[s] : e.layoutBox[s];
              const r = Ft(n[s]);
              i.max = i.min + r;
              if (t.relativeTarget && !t.currentAnimation) {
                t.isProjectionDirty = true;
                t.relativeTarget[s].max = t.relativeTarget[s].min + r;
              }
            });
          }
          const r = (0, Ut.wc)();
          zt(r, n, e.layoutBox);
          const a = (0, Ut.wc)();
          if (o) {
            zt(a, t.applyTransform(s, true), e.measuredBox);
          } else {
            zt(a, n, e.layoutBox);
          }
          const l = !an(r);
          let u = false;
          if (!t.resumeFrom) {
            const s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              const { snapshot: i, layout: o } = s;
              if (i && o) {
                const r = (0, Ut.dO)();
                Nt(r, e.layoutBox, i.layoutBox);
                const a = (0, Ut.dO)();
                Nt(a, n, o.layoutBox);
                if (!cn(r, a)) {
                  u = true;
                }
                if (s.options.layoutRoot) {
                  t.relativeTarget = a;
                  t.relativeTargetOrigin = r;
                  t.relativeParent = s;
                }
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: n,
            snapshot: e,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: l,
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
      function Pn(t) {
        if (Me.f.value) {
          mn.nodes++;
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
      function Tn(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            false;
      }
      function En(t) {
        t.clearSnapshot();
      }
      function An(t) {
        t.clearMeasurements();
      }
      function Mn(t) {
        t.isLayoutDirty = false;
      }
      function Cn(t) {
        const { visualElement: e } = t.options;
        if (e && e.getProps().onBeforeLayoutMeasure) {
          e.notify("BeforeLayoutMeasure");
        }
        t.resetTransform();
      }
      function kn(t) {
        t.finishAnimation();
        t.targetDelta = t.relativeTarget = t.target = undefined;
        t.isProjectionDirty = true;
      }
      function Rn(t) {
        t.resolveTargetDelta();
      }
      function Vn(t) {
        t.calcProjection();
      }
      function On(t) {
        t.resetSkewAndRotation();
      }
      function Dn(t) {
        t.removeLeadSnapshot();
      }
      function In(t, e, n) {
        t.translate = (0, At.t)(e.translate, 0, n);
        t.scale = (0, At.t)(e.scale, 1, n);
        t.origin = e.origin;
        t.originPoint = e.originPoint;
      }
      function _n(t, e, n, s) {
        t.min = (0, At.t)(e.min, n.min, s);
        t.max = (0, At.t)(e.max, n.max, s);
      }
      function jn(t) {
        return t.animationValues && t.animationValues.opacityExit !== undefined;
      }
      const Ln = {
        duration: 0.45,
        ease: [0.4, 0, 0.1, 1],
      };
      const Fn = (t) =>
        typeof navigator != "undefined" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(t);
      const Bn = Fn("applewebkit/") && !Fn("chrome/") ? Math.round : bt.Z;
      function zn(t) {
        t.min = Bn(t.min);
        t.max = Bn(t.max);
      }
      function $n(t, e, n) {
        return (
          t === "position" ||
          (t === "preserve-aspect" &&
            ((s = hn(e)), (i = hn(n)), (o = 0.2), !(Math.abs(s - i) <= o)))
        );
        var s;
        var i;
        var o;
      }
      function Wn(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      const Nn = xn({
        attachResizeListener: (t, e) => kt(t, "resize", e),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body.scrollLeft,
          y: document.documentElement.scrollTop || document.body.scrollTop,
        }),
        checkIsScrollRoot: () => true,
      });
      const Un = {
        current: undefined,
      };
      const Xn = xn({
        measureScroll: (t) => ({
          x: t.scrollLeft,
          y: t.scrollTop,
        }),
        defaultParent: () => {
          if (!Un.current) {
            const t = new Nn({});
            t.mount(window);
            t.setOptions({
              layoutScroll: true,
            });
            Un.current = t;
          }
          return Un.current;
        },
        resetTransform: (t, e) => {
          t.style.transform = e !== undefined ? e : "none";
        },
        checkIsScrollRoot: (t) =>
          Boolean(window.getComputedStyle(t).position === "fixed"),
      });
      const Kn = {
        pan: {
          Feature: class extends yt {
            constructor() {
              super(...arguments);
              this.removePointerDownListener = bt.Z;
            }
            onPointerDown(t) {
              this.session = new Qt(t, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: qt(this.node),
              });
            }
            createPanHandlers() {
              const {
                onPanSessionStart: t,
                onPanStart: e,
                onPan: n,
                onPanEnd: s,
              } = this.node.getProps();
              return {
                onSessionStart: me(t),
                onStart: me(e),
                onMove: n,
                onEnd: (t, e) => {
                  delete this.session;
                  if (s) {
                    Et.Wi.postRender(() => s(t, e));
                  }
                },
              };
            }
            mount() {
              this.removePointerDownListener = Ot(
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
          Feature: class extends yt {
            constructor(t) {
              super(t);
              this.removeGroupControls = bt.Z;
              this.removeListeners = bt.Z;
              this.controls = new pe(t);
            }
            mount() {
              const { dragControls: t } = this.node.getProps();
              if (t) {
                this.removeGroupControls = t.subscribe(this.controls);
              }
              this.removeListeners = this.controls.addListeners() || bt.Z;
            }
            unmount() {
              this.removeGroupControls();
              this.removeListeners();
            }
          },
          ProjectionNode: Xn,
          MeasureLayout: Ee,
        },
      };
      var qn = n(6419);
      function Yn(t, e) {
        const n = (0, qn.I)(t);
        const s = new AbortController();
        return [
          n,
          {
            passive: true,
            ...e,
            signal: s.signal,
          },
          () => s.abort(),
        ];
      }
      function Hn(t) {
        return t.pointerType !== "touch" && !Pt();
      }
      function Zn(t, e, n) {
        const { props: s } = t;
        if (t.animationState && s.whileHover) {
          t.animationState.setActive("whileHover", n === "Start");
        }
        const i = s["onHover" + n];
        if (i) {
          Et.Wi.postRender(() => i(e, Vt(e)));
        }
      }
      var Gn = n(43754);
      const Qn = (t, e) => !!e && (t === e || Qn(t, e.parentElement));
      const Jn = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
      const ts = new WeakSet();
      function es(t) {
        return (e) => {
          if (e.key === "Enter") {
            t(e);
          }
        };
      }
      function ns(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, {
            isPrimary: true,
            bubbles: true,
          }),
        );
      }
      function ss(t) {
        return Rt(t) && !Pt();
      }
      function is(t, e, n = {}) {
        const [s, i, o] = Yn(t, n);
        const r = (t) => {
          const s = t.currentTarget;
          if (!ss(t)) {
            return;
          }
          ts.add(s);
          const o = e(s, t);
          const r = (t, e) => {
            window.removeEventListener("pointerup", a);
            window.removeEventListener("pointercancel", l);
            if (ts.has(s)) {
              ts.delete(s);
            }
            if (ss(t) && typeof o == "function") {
              o(t, {
                success: e,
              });
            }
          };
          const a = (t) => {
            r(
              t,
              s === window ||
                s === document ||
                n.useGlobalTarget ||
                Qn(s, t.target),
            );
          };
          const l = (t) => {
            r(t, false);
          };
          window.addEventListener("pointerup", a, i);
          window.addEventListener("pointercancel", l, i);
        };
        s.forEach((t) => {
          var e;
          (n.useGlobalTarget ? window : t).addEventListener(
            "pointerdown",
            r,
            i,
          );
          e = t;
          if ((0, Gn.K)(e) && "offsetHeight" in e) {
            t.addEventListener("focus", (t) =>
              ((t, e) => {
                const n = t.currentTarget;
                if (!n) {
                  return;
                }
                const s = es(() => {
                  if (ts.has(n)) {
                    return;
                  }
                  ns(n, "down");
                  const t = es(() => {
                    ns(n, "up");
                  });
                  n.addEventListener("keyup", t, e);
                  n.addEventListener("blur", () => ns(n, "cancel"), e);
                });
                n.addEventListener("keydown", s, e);
                n.addEventListener(
                  "blur",
                  () => n.removeEventListener("keydown", s),
                  e,
                );
              })(t, i),
            );
            if (
              !(function (t) {
                return Jn.has(t.tagName) || t.tabIndex !== -1;
              })(t) &&
              !t.hasAttribute("tabindex")
            ) {
              t.tabIndex = 0;
            }
          }
        });
        return o;
      }
      function os(t, e, n) {
        const { props: s } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) {
          return;
        }
        if (t.animationState && s.whileTap) {
          t.animationState.setActive("whileTap", n === "Start");
        }
        const i = s["onTap" + (n === "End" ? "" : n)];
        if (i) {
          Et.Wi.postRender(() => i(e, Vt(e)));
        }
      }
      const rs = new WeakMap();
      const as = new WeakMap();
      const ls = (t) => {
        const e = rs.get(t.target);
        if (e) {
          e(t);
        }
      };
      const us = (t) => {
        t.forEach(ls);
      };
      function cs(t, e, n) {
        const s = (function ({ root: t, ...e }) {
          const n = t || document;
          if (!as.has(n)) {
            as.set(n, {});
          }
          const s = as.get(n);
          const i = JSON.stringify(e);
          s[i] ||= new IntersectionObserver(us, {
            root: t,
            ...e,
          });
          return s[i];
        })(e);
        rs.set(t, n);
        s.observe(t);
        return () => {
          rs.delete(t);
          s.unobserve(t);
        };
      }
      const hs = {
        some: 0,
        all: 1,
      };
      const ds = {
        inView: {
          Feature: class extends yt {
            constructor() {
              super(...arguments);
              this.hasEnteredView = false;
              this.isInView = false;
            }
            startObserver() {
              this.unmount();
              const { viewport: t = {} } = this.node.getProps();
              const { root: e, margin: n, amount: s = "some", once: i } = t;
              const o = {
                root: e ? e.current : undefined,
                rootMargin: n,
                threshold: typeof s == "number" ? s : hs[s],
              };
              return cs(this.node.current, o, (t) => {
                const { isIntersecting: e } = t;
                if (this.isInView === e) {
                  return;
                }
                this.isInView = e;
                if (i && !e && this.hasEnteredView) {
                  return;
                }
                if (e) {
                  this.hasEnteredView = true;
                }
                if (this.node.animationState) {
                  this.node.animationState.setActive("whileInView", e);
                }
                const { onViewportEnter: n, onViewportLeave: s } =
                  this.node.getProps();
                const o = e ? n : s;
                if (o) {
                  o(t);
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
          Feature: class extends yt {
            mount() {
              const { current: t } = this.node;
              if (t) {
                this.unmount = is(
                  t,
                  (t, e) => {
                    os(this.node, e, "Start");
                    return (t, { success: e }) =>
                      os(this.node, t, e ? "End" : "Cancel");
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
          Feature: class extends yt {
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
              this.unmount = (0, Ht.z)(
                kt(this.node.current, "focus", () => this.onFocus()),
                kt(this.node.current, "blur", () => this.onBlur()),
              );
            }
            unmount() {}
          },
        },
        hover: {
          Feature: class extends yt {
            mount() {
              const { current: t } = this.node;
              if (t) {
                this.unmount = (function (t, e, n = {}) {
                  const [s, i, o] = Yn(t, n);
                  const r = (t) => {
                    if (!Hn(t)) {
                      return;
                    }
                    const { target: n } = t;
                    const s = e(n, t);
                    if (typeof s != "function" || !n) {
                      return;
                    }
                    const o = (t) => {
                      if (Hn(t)) {
                        s(t);
                        n.removeEventListener("pointerleave", o);
                      }
                    };
                    n.addEventListener("pointerleave", o, i);
                  };
                  s.forEach((t) => {
                    t.addEventListener("pointerenter", r, i);
                  });
                  return o;
                })(t, (t, e) => {
                  Zn(this.node, e, "Start");
                  return (t) => Zn(this.node, t, "End");
                });
              }
            }
            unmount() {}
          },
        },
      };
      const ps = et(
        {
          ...xt,
          ...ds,
          ...Kn,
          ...{
            layout: {
              ProjectionNode: Xn,
              MeasureLayout: Ee,
            },
          },
        },
        l,
      );
    },
    23183: function (t, e, n) {
      n.d(e, {
        J: () => w,
      });
      var s = n(18011);
      var i = n(81077);
      var o = n(26975);
      var r = n(94309);
      var a = n(53345);
      const l = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      function u(t, e, n = 1) {
        (0, o.k)(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
          "max-css-var-depth",
        );
        const [s, i] = (function (t) {
          const e = l.exec(t);
          if (!e) {
            return [,];
          }
          const [, n, s, i] = e;
          return [`--${n ?? s}`, i];
        })(t);
        if (!s) {
          return;
        }
        const c = window.getComputedStyle(e).getPropertyValue(s);
        if (c) {
          const t = c.trim();
          if ((0, r.P)(t)) {
            return parseFloat(t);
          } else {
            return t;
          }
        }
        if ((0, a.t)(i)) {
          return u(i, e, n + 1);
        } else {
          return i;
        }
      }
      var c = n(63062);
      var h = n(71226);
      var d = n(28779);
      var p = n(7741);
      const f = new Set(["auto", "none", "0"]);
      var m = n(37410);
      class g extends c.e {
        constructor(t, e, n, s, i) {
          super(t, e, n, s, i, true);
        }
        readKeyframes() {
          const { unresolvedKeyframes: t, element: e, name: n } = this;
          if (!e || !e.current) {
            return;
          }
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let s = t[n];
            if (typeof s == "string" && ((s = s.trim()), (0, a.t)(s))) {
              const i = u(s, e.current);
              if (i !== undefined) {
                t[n] = i;
              }
              if (n === t.length - 1) {
                this.finalKeyframe = s;
              }
            }
          }
          this.resolveNoneKeyframes();
          if (!s.z.has(n) || t.length !== 2) {
            return;
          }
          const [o, r] = t;
          const l = (0, i.C)(o);
          const c = (0, i.C)(r);
          if (l !== c) {
            if ((0, m.mP)(l) && (0, m.mP)(c)) {
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
              (typeof (s = t[e]) == "number"
                ? s === 0
                : s === null || s === "none" || s === "0" || (0, h.W)(s))
            ) {
              n.push(e);
            }
          }
          var s;
          if (n.length) {
            (function (t, e, n) {
              let s;
              let i = 0;
              while (i < t.length && !s) {
                const e = t[i];
                if (
                  typeof e == "string" &&
                  !f.has(e) &&
                  (0, d.V)(e).values.length
                ) {
                  s = t[i];
                }
                i++;
              }
              if (s && n) {
                for (const i of e) {
                  t[i] = (0, p.T)(n, s);
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
          const s = e[e.length - 1];
          if (s !== undefined) {
            t.getValue(n, s).jump(s, false);
          }
        }
        measureEndState() {
          const { element: t, name: e, unresolvedKeyframes: n } = this;
          if (!t || !t.current) {
            return;
          }
          const s = t.getValue(e);
          if (s) {
            s.jump(this.measuredOrigin, false);
          }
          const i = n.length - 1;
          const o = n[i];
          n[i] = m.lw[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current),
          );
          if (o !== null && this.finalKeyframe === undefined) {
            this.finalKeyframe = o;
          }
          if (this.removedTransforms?.length) {
            this.removedTransforms.forEach(([e, n]) => {
              t.getValue(e).set(n);
            });
          }
          this.resolveNoneKeyframes();
        }
      }
      var v = n(45875);
      var y = n(26967);
      class w extends y.l {
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
          if ((0, v.i)(t)) {
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
        D: () => s,
      });
      const s = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    3622: function (t, e, n) {
      n.d(e, {
        W: () => h,
      });
      var s = n(50477);
      var i = n(38255);
      var o = n(53345);
      var r = n(10301);
      var a = n(23183);
      var l = n(55469);
      var u = n(68416);
      var c = n(86740);
      class h extends a.J {
        constructor() {
          super(...arguments);
          this.type = "html";
          this.renderInstance = u.N;
        }
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            if (this.projection?.isProjecting) {
              return (0, i.E$)(e);
            } else {
              return (0, i.RT)(t, e);
            }
          }
          {
            n = t;
            const s = window.getComputedStyle(n);
            const i = ((0, o.f)(e) ? s.getPropertyValue(e) : s[e]) || 0;
            if (typeof i == "string") {
              return i.trim();
            } else {
              return i;
            }
          }
          var n;
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, r.J)(t, e);
        }
        build(t, e, n) {
          (0, l.r)(t, e, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, c.U)(t, e, n);
        }
      }
    },
    55469: function (t, e, n) {
      n.d(e, {
        r: () => u,
      });
      var s = n(50477);
      var i = n(53345);
      const o = (t, e) => (e && typeof t == "number" ? e.transform(t) : t);
      var r = n(75456);
      const a = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      const l = s._.length;
      function u(t, e, n) {
        const { style: u, vars: c, transformOrigin: h } = t;
        let d = false;
        let p = false;
        for (const t in e) {
          const n = e[t];
          if (s.G.has(t)) {
            d = true;
          } else if ((0, i.f)(t)) {
            c[t] = n;
          } else {
            const e = o(n, r.j[t]);
            if (t.startsWith("origin")) {
              p = true;
              h[t] = e;
            } else {
              u[t] = e;
            }
          }
        }
        if (!e.transform) {
          if (d || n) {
            u.transform = (function (t, e, n) {
              let i = "";
              let u = true;
              for (let c = 0; c < l; c++) {
                const l = s._[c];
                const h = t[l];
                if (h === undefined) {
                  continue;
                }
                let d = true;
                d =
                  typeof h == "number"
                    ? h === (l.startsWith("scale") ? 1 : 0)
                    : parseFloat(h) === 0;
                if (!d || n) {
                  const t = o(h, r.j[l]);
                  if (!d) {
                    u = false;
                    i += `${a[l] || l}(${t}) `;
                  }
                  if (n) {
                    e[l] = t;
                  }
                }
              }
              i = i.trim();
              if (n) {
                i = n(e, u ? "" : i);
              } else if (u) {
                i = "none";
              }
              return i;
            })(e, t.transform, n);
          } else {
            u.transform &&= "none";
          }
        }
        if (p) {
          const { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = h;
          u.transformOrigin = `${t} ${e} ${n}`;
        }
      }
    },
    68416: function (t, e, n) {
      function s(t, { style: e, vars: n }, s, i) {
        const o = t.style;
        let r;
        for (r in e) {
          o[r] = e[r];
        }
        i?.applyProjectionStyles(o, s);
        for (r in n) {
          o.setProperty(r, n[r]);
        }
      }
      n.d(e, {
        N: () => s,
      });
    },
    86740: function (t, e, n) {
      n.d(e, {
        U: () => o,
      });
      var s = n(45875);
      var i = n(99246);
      function o(t, e, n) {
        const { style: o } = t;
        const r = {};
        for (const a in o) {
          if (
            (0, s.i)(o[a]) ||
            (e.style && (0, s.i)(e.style[a])) ||
            (0, i.j)(a, t) ||
            n?.getValue(a)?.liveStyle !== undefined
          ) {
            r[a] = o[a];
          }
        }
        return r;
      }
    },
    54449: function (t, e, n) {
      n.d(e, {
        R: () => s,
      });
      const s = new WeakMap();
    },
    65504: function (t, e, n) {
      n.d(e, {
        e: () => p,
      });
      var s = n(50477);
      var i = n(90648);
      var o = n(95398);
      var r = n(23183);
      var a = n(50638);
      var l = n(85670);
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
      var c = n(38399);
      var h = n(68416);
      var d = n(81185);
      class p extends r.J {
        constructor() {
          super(...arguments);
          this.type = "svg";
          this.isSVGTag = false;
          this.measureInstanceViewportBox = o.dO;
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            const t = (0, i.A)(e);
            return (t && t.default) || 0;
          }
          e = u.has(e) ? e : (0, a.D)(e);
          return t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, d.U)(t, e, n);
        }
        build(t, e, n) {
          (0, l.i)(t, e, this.isSVGTag, n.transformTemplate, n.style);
        }
        renderInstance(t, e, n, s) {
          (function (t, e, n, s) {
            (0, h.N)(t, e, undefined, s);
            for (const n in e.attrs) {
              t.setAttribute(u.has(n) ? n : (0, a.D)(n), e.attrs[n]);
            }
          })(t, e, 0, s);
        }
        mount(t) {
          this.isSVGTag = (0, c.a)(t.tagName);
          super.mount(t);
        }
      }
    },
    85670: function (t, e, n) {
      n.d(e, {
        i: () => a,
      });
      var s = n(55469);
      var i = n(57360);
      const o = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray",
      };
      const r = {
        offset: "strokeDashoffset",
        array: "strokeDasharray",
      };
      function a(
        t,
        {
          attrX: e,
          attrY: n,
          attrScale: a,
          pathLength: l,
          pathSpacing: u = 1,
          pathOffset: c = 0,
          ...h
        },
        d,
        p,
        f,
      ) {
        (0, s.r)(t, h, p);
        if (d) {
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
        if (l !== undefined) {
          (function (t, e, n = 1, s = 0, a = true) {
            t.pathLength = 1;
            const l = a ? o : r;
            t[l.offset] = i.px.transform(-s);
            const u = i.px.transform(e);
            const c = i.px.transform(n);
            t[l.array] = `${u} ${c}`;
          })(m, l, u, c, false);
        }
      }
    },
    38399: function (t, e, n) {
      n.d(e, {
        a: () => s,
      });
      const s = (t) => typeof t == "string" && t.toLowerCase() === "svg";
    },
    81185: function (t, e, n) {
      n.d(e, {
        U: () => r,
      });
      var s = n(45875);
      var i = n(50477);
      var o = n(86740);
      function r(t, e, n) {
        const r = (0, o.U)(t, e, n);
        for (const n in t) {
          if ((0, s.i)(t[n]) || (0, s.i)(e[n])) {
            r[
              i._.indexOf(n) !== -1
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = t[n];
          }
        }
        return r;
      }
    },
    36454: function (t, e, n) {
      n.d(e, {
        G: () => r,
        M: () => a,
      });
      var s = n(98922);
      var i = n(77768);
      var o = n(89096);
      function r(t) {
        return (0, s.H)(t.animate) || o.V.some((e) => (0, i.$)(t[e]));
      }
      function a(t) {
        return Boolean(r(t) || t.variants);
      }
    },
    77768: function (t, e, n) {
      function s(t) {
        return typeof t == "string" || Array.isArray(t);
      }
      n.d(e, {
        $: () => s,
      });
    },
    89654: function (t, e, n) {
      n.d(e, {
        x: () => i,
      });
      var s = n(75440);
      function i(t, e, n) {
        const i = t.getProps();
        return (0, s.o)(i, e, n !== undefined ? n : i.custom, t);
      }
    },
    75440: function (t, e, n) {
      function s(t) {
        const e = [{}, {}];
        t?.values.forEach((t, n) => {
          e[0][n] = t.get();
          e[1][n] = t.getVelocity();
        });
        return e;
      }
      function i(t, e, n, i) {
        if (typeof e == "function") {
          const [o, r] = s(i);
          e = e(n !== undefined ? n : t.custom, o, r);
        }
        if (typeof e == "string") {
          e = t.variants && t.variants[e];
        }
        if (typeof e == "function") {
          const [o, r] = s(i);
          e = e(n !== undefined ? n : t.custom, o, r);
        }
        return e;
      }
      n.d(e, {
        o: () => i,
      });
    },
    89096: function (t, e, n) {
      n.d(e, {
        V: () => i,
        e: () => s,
      });
      const s = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
      ];
      const i = ["initial", ...s];
    },
    24939: function (t, e, n) {
      n.d(e, {
        j: () => s,
      });
      const s = typeof window != "undefined";
    },
    78217: function (t, e, n) {
      n.d(e, {
        h: () => i,
      });
      var s = n(45144);
      function i(t) {
        const e = (0, s.useRef)(null);
        if (e.current === null) {
          e.current = t();
        }
        return e.current;
      }
    },
    19537: function (t, e, n) {
      n.d(e, {
        L: () => i,
      });
      var s = n(45144);
      const i = n(24939).j ? s.useLayoutEffect : s.useEffect;
    },
    16889: function (t, e, n) {
      n.d(e, {
        c: () => a,
      });
      var s = n(17802);
      var i = n(45144);
      var o = n(21353);
      var r = n(78217);
      function a(t) {
        const e = (0, r.h)(() => (0, s.BX)(t));
        const { isStatic: n } = (0, i.useContext)(o._);
        if (n) {
          const [, n] = (0, i.useState)(t);
          (0, i.useEffect)(() => e.on("change", n), []);
        }
        return e;
      }
    },
    64392: function (t, e, n) {
      n.d(e, {
        H: () => c,
      });
      var s = n(10959);
      var i = n(78217);
      var o = n(63594);
      var r = n(19537);
      var a = n(16889);
      function l(t, e) {
        const n = (0, a.c)(e());
        const s = () => n.set(e());
        s();
        (0, r.L)(() => {
          const e = () => o.Wi.preRender(s, false, true);
          const n = t.map((t) => t.on("change", e));
          return () => {
            n.forEach((t) => t());
            (0, o.Pn)(s);
          };
        });
        return n;
      }
      var u = n(17802);
      function c(t, e, n, i) {
        if (typeof t == "function") {
          return (function (t) {
            u.S1.current = [];
            t();
            const e = l(u.S1.current, t);
            u.S1.current = undefined;
            return e;
          })(t);
        }
        const o =
          typeof e == "function"
            ? e
            : (function (...t) {
                const e = !Array.isArray(t[0]);
                const n = e ? 0 : -1;
                const i = t[0 + n];
                const o = t[1 + n];
                const r = t[2 + n];
                const a = t[3 + n];
                const l = (0, s.s)(o, r, a);
                if (e) {
                  return l(i);
                } else {
                  return l;
                }
              })(e, n, i);
        if (Array.isArray(t)) {
          return h(t, o);
        } else {
          return h([t], ([t]) => o(t));
        }
      }
      function h(t, e) {
        const n = (0, i.h)(() => []);
        return l(t, () => {
          n.length = 0;
          const s = t.length;
          for (let e = 0; e < s; e++) {
            n[e] = t[e].get();
          }
          return e(n);
        });
      }
    },
    83800: function (t, e, n) {
      n.d(e, {
        K: () => o,
      });
      var s = n(91385);
      var i = n(45875);
      function o(t, e) {
        const n = t.getValue("willChange");
        o = n;
        if (Boolean((0, i.i)(o) && o.add)) {
          return n.add(e);
        }
        if (!n && s.c.WillChange) {
          const n = new s.c.WillChange("auto");
          t.addValue("willChange", n);
          n.add(e);
        }
        var o;
      }
    },
    40187: function (t, e, n) {
      n.d(e, {
        S: () => y,
      });
      var s = n(65437);
      var i = n(15244);
      var o = n(52486);
      var r = n(36989);
      var a = n(65399);
      var l = n(6445);
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
      var c = n(26975);
      const h = 0.001;
      function d({
        duration: t = u.duration,
        bounce: e = u.bounce,
        velocity: n = u.velocity,
        mass: o = u.mass,
      }) {
        let r;
        let a;
        (0, c.K)(
          t <= (0, i.w)(u.maxDuration),
          "Spring duration must be 10 seconds or less",
          "spring-duration-limit",
        );
        let l = 1 - e;
        l = (0, s.u)(u.minDamping, u.maxDamping, l);
        t = (0, s.u)(u.minDuration, u.maxDuration, (0, i.X)(t));
        if (l < 1) {
          r = (e) => {
            const s = e * l;
            const i = s * t;
            const o = s - n;
            const r = f(e, l);
            const a = Math.exp(-i);
            return h - (o / r) * a;
          };
          a = (e) => {
            const s = e * l * t;
            const i = s * n + n;
            const o = Math.pow(l, 2) * Math.pow(e, 2) * t;
            const a = Math.exp(-s);
            const u = f(Math.pow(e, 2), l);
            return ((-r(e) + h > 0 ? -1 : 1) * ((i - o) * a)) / u;
          };
        } else {
          r = (e) => Math.exp(-e * t) * ((e - n) * t + 1) - h;
          a = (e) => Math.exp(-e * t) * (t * t * (n - e));
        }
        const d = (function (t, e, n) {
          let s = n;
          for (let n = 1; n < p; n++) {
            s -= t(s) / e(s);
          }
          return s;
        })(r, a, 5 / t);
        t = (0, i.w)(t);
        if (isNaN(d)) {
          return {
            stiffness: u.stiffness,
            damping: u.damping,
            duration: t,
          };
        }
        {
          const e = Math.pow(d, 2) * o;
          return {
            stiffness: e,
            damping: l * 2 * Math.sqrt(o * e),
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
      function v(t, e) {
        return e.some((e) => t[e] !== undefined);
      }
      function y(t = u.visualDuration, e = u.bounce) {
        const n =
          typeof t != "object"
            ? {
                visualDuration: t,
                keyframes: [0, 1],
                bounce: e,
              }
            : t;
        let { restSpeed: a, restDelta: c } = n;
        const h = n.keyframes[0];
        const p = n.keyframes[n.keyframes.length - 1];
        const y = {
          done: false,
          value: h,
        };
        const {
          stiffness: w,
          damping: x,
          mass: b,
          duration: S,
          velocity: P,
          isResolvedFromDuration: T,
        } = (function (t) {
          let e = {
            velocity: u.velocity,
            stiffness: u.stiffness,
            damping: u.damping,
            mass: u.mass,
            isResolvedFromDuration: false,
            ...t,
          };
          if (!v(t, g) && v(t, m)) {
            if (t.visualDuration) {
              const n = t.visualDuration;
              const i = (Math.PI * 2) / (n * 1.2);
              const o = i * i;
              const r =
                (0, s.u)(0.05, 1, 1 - (t.bounce || 0)) * 2 * Math.sqrt(o);
              e = {
                ...e,
                mass: u.mass,
                stiffness: o,
                damping: r,
              };
            } else {
              const n = d(t);
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
          velocity: -(0, i.X)(n.velocity || 0),
        });
        const E = P || 0;
        const A = x / (Math.sqrt(w * b) * 2);
        const M = p - h;
        const C = (0, i.X)(Math.sqrt(w / b));
        const k = Math.abs(M) < 5;
        let R;
        a ||= k ? u.restSpeed.granular : u.restSpeed.default;
        c ||= k ? u.restDelta.granular : u.restDelta.default;
        if (A < 1) {
          const t = f(C, A);
          R = (e) => {
            const n = Math.exp(-A * C * e);
            return (
              p -
              n *
                (((E + A * C * M) / t) * Math.sin(t * e) + M * Math.cos(t * e))
            );
          };
        } else if (A === 1) {
          R = (t) => p - Math.exp(-C * t) * (M + (E + C * M) * t);
        } else {
          const t = C * Math.sqrt(A * A - 1);
          R = (e) => {
            const n = Math.exp(-A * C * e);
            const s = Math.min(t * e, 300);
            return (
              p -
              (n * ((E + A * C * M) * Math.sinh(s) + t * M * Math.cosh(s))) / t
            );
          };
        }
        const V = {
          calculatedDuration: (T && S) || null,
          next: (t) => {
            const e = R(t);
            if (T) {
              y.done = t >= S;
            } else {
              let n = t === 0 ? E : 0;
              if (A < 1) {
                n = t === 0 ? (0, i.w)(E) : (0, l.P)(R, t, e);
              }
              const s = Math.abs(n) <= a;
              const o = Math.abs(p - e) <= c;
              y.done = s && o;
            }
            y.value = y.done ? p : e;
            return y;
          },
          toString: () => {
            const t = Math.min((0, r.i)(V), r.E);
            const e = (0, o.w)((e) => V.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return V;
      }
      y.applyToOptions = (t) => {
        const e = (0, a.S)(t, 100, y);
        t.ease = e.ease;
        t.duration = (0, i.w)(e.duration);
        t.type = "keyframes";
        return t;
      };
    },
    36989: function (t, e, n) {
      n.d(e, {
        E: () => s,
        i: () => i,
      });
      const s = 20000;
      function i(t) {
        let e = 0;
        let n = t.next(e);
        while (!n.done && e < s) {
          e += 50;
          n = t.next(e);
        }
        if (e >= s) {
          return Infinity;
        } else {
          return e;
        }
      }
    },
    65399: function (t, e, n) {
      n.d(e, {
        S: () => o,
      });
      var s = n(15244);
      var i = n(36989);
      function o(t, e = 100, n) {
        const o = n({
          ...t,
          keyframes: [0, e],
        });
        const r = Math.min((0, i.i)(o), i.E);
        return {
          type: "keyframes",
          ease: (t) => o.next(r * t).value / e,
          duration: (0, s.X)(r),
        };
      }
    },
    20479: function (t, e, n) {
      function s(t) {
        return typeof t == "function" && "applyToOptions" in t;
      }
      n.d(e, {
        x: () => s,
      });
    },
    6445: function (t, e, n) {
      n.d(e, {
        P: () => o,
      });
      var s = n(5228);
      const i = 5;
      function o(t, e, n) {
        const o = Math.max(e - i, 0);
        return (0, s.R)(n - t(o), e - o);
      }
    },
    63062: function (t, e, n) {
      n.d(e, {
        e: () => d,
        m: () => h,
      });
      var s = n(37410);
      var i = n(63594);
      const o = new Set();
      let r = false;
      let a = false;
      let l = false;
      function u() {
        if (a) {
          const t = Array.from(o).filter((t) => t.needsMeasurement);
          const e = new Set(t.map((t) => t.element));
          const n = new Map();
          e.forEach((t) => {
            const e = (0, s.Ei)(t);
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
        r = false;
        o.forEach((t) => t.complete(l));
        o.clear();
      }
      function c() {
        o.forEach((t) => {
          t.readKeyframes();
          if (t.needsMeasurement) {
            a = true;
          }
        });
      }
      function h() {
        l = true;
        c();
        u();
        l = false;
      }
      class d {
        constructor(t, e, n, s, i, o = false) {
          this.state = "pending";
          this.isAsync = false;
          this.needsMeasurement = false;
          this.unresolvedKeyframes = [...t];
          this.onComplete = e;
          this.name = n;
          this.motionValue = s;
          this.element = i;
          this.isAsync = o;
        }
        scheduleResolve() {
          this.state = "scheduled";
          if (this.isAsync) {
            o.add(this);
            if (!r) {
              r = true;
              i.Wi.read(c);
              i.Wi.resolveKeyframes(u);
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
            motionValue: s,
          } = this;
          if (t[0] === null) {
            const i = s?.get();
            const o = t[t.length - 1];
            if (i !== undefined) {
              t[0] = i;
            } else if (n && e) {
              const s = n.readValue(e, o);
              if (s != null) {
                t[0] = s;
              }
            }
            if (t[0] === undefined) {
              t[0] = o;
            }
            if (s && i === undefined) {
              s.set(t[0]);
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
          o.delete(this);
        }
        cancel() {
          if (this.state === "scheduled") {
            o.delete(this);
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
        Y: () => i,
      });
      var s = n(54293);
      function i(t) {
        const e = [0];
        (0, s.c)(e, t.length - 1);
        return e;
      }
    },
    54293: function (t, e, n) {
      n.d(e, {
        c: () => o,
      });
      var s = n(66789);
      var i = n(55153);
      function o(t, e) {
        const n = t[t.length - 1];
        for (let o = 1; o <= e; o++) {
          const r = (0, s.Y)(0, e, o);
          t.push((0, i.t)(n, 1, r));
        }
      }
    },
    37410: function (t, e, n) {
      n.d(e, {
        Ei: () => c,
        lw: () => h,
        mP: () => a,
      });
      var s = n(38255);
      var i = n(50477);
      var o = n(53937);
      var r = n(57360);
      const a = (t) => t === o.Rx || t === r.px;
      const l = new Set(["x", "y", "z"]);
      const u = i._.filter((t) => !l.has(t));
      function c(t) {
        const e = [];
        u.forEach((n) => {
          const s = t.getValue(n);
          if (s !== undefined) {
            e.push([n, s.get()]);
            s.set(n.startsWith("scale") ? 1 : 0);
          }
        });
        return e;
      }
      const h = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: (t, { transform: e }) => (0, s.WK)(e, "x"),
        y: (t, { transform: e }) => (0, s.WK)(e, "y"),
      };
      h.translateX = h.x;
      h.translateY = h.y;
    },
    83479: function (t, e, n) {
      function s(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      n.d(e, {
        e: () => s,
      });
    },
    53345: function (t, e, n) {
      n.d(e, {
        f: () => i,
        t: () => r,
      });
      const s = (t) => (e) => typeof e == "string" && e.startsWith(t);
      const i = s("--");
      const o = s("var(--");
      const r = (t) => !!o(t) && a.test(t.split("/*")[0].trim());
      const a =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    52486: function (t, e, n) {
      n.d(e, {
        w: () => s,
      });
      const s = (t, e, n = 10) => {
        let s = "";
        const i = Math.max(Math.round(e / n), 2);
        for (let e = 0; e < i; e++) {
          s += Math.round(t(e / (i - 1)) * 10000) / 10000 + ", ";
        }
        return `linear(${s.substring(0, s.length - 2)})`;
      };
    },
    683: function (t, e, n) {
      n.d(e, {
        Z: () => a,
      });
      var s = n(91385);
      const i = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      var o = n(27984);
      const r = 40;
      function a(t, e) {
        let n = false;
        let a = true;
        const l = {
          delta: 0,
          timestamp: 0,
          isProcessing: false,
        };
        const u = () => (n = true);
        const c = i.reduce((t, n) => {
          t[n] = (function (t, e) {
            let n = new Set();
            let s = new Set();
            let i = false;
            let r = false;
            const a = new WeakSet();
            let l = {
              delta: 0,
              timestamp: 0,
              isProcessing: false,
            };
            let u = 0;
            function c(e) {
              if (a.has(e)) {
                h.schedule(e);
                t();
              }
              u++;
              e(l);
            }
            const h = {
              schedule: (t, e = false, o = false) => {
                const r = o && i ? n : s;
                if (e) {
                  a.add(t);
                }
                if (!r.has(t)) {
                  r.add(t);
                }
                return t;
              },
              cancel: (t) => {
                s.delete(t);
                a.delete(t);
              },
              process: (t) => {
                l = t;
                if (i) {
                  r = true;
                } else {
                  i = true;
                  [n, s] = [s, n];
                  n.forEach(c);
                  if (e && o.f.value) {
                    o.f.value.frameloop[e].push(u);
                  }
                  u = 0;
                  n.clear();
                  i = false;
                  if (r) {
                    r = false;
                    h.process(t);
                  }
                }
              },
            };
            return h;
          })(u, e ? n : undefined);
          return t;
        }, {});
        const {
          setup: h,
          read: d,
          resolveKeyframes: p,
          preUpdate: f,
          update: m,
          preRender: g,
          render: v,
          postRender: y,
        } = c;
        const w = () => {
          const i = s.c.useManualTiming ? l.timestamp : performance.now();
          n = false;
          if (!s.c.useManualTiming) {
            l.delta = a ? 1000 / 60 : Math.max(Math.min(i - l.timestamp, r), 1);
          }
          l.timestamp = i;
          l.isProcessing = true;
          h.process(l);
          d.process(l);
          p.process(l);
          f.process(l);
          m.process(l);
          g.process(l);
          v.process(l);
          y.process(l);
          l.isProcessing = false;
          if (n && e) {
            a = false;
            t(w);
          }
        };
        return {
          schedule: i.reduce((e, s) => {
            const i = c[s];
            e[s] = (e, s = false, o = false) => {
              if (!n) {
                n = true;
                a = true;
                if (!l.isProcessing) {
                  t(w);
                }
              }
              return i.schedule(e, s, o);
            };
            return e;
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < i.length; e++) {
              c[i[e]].cancel(t);
            }
          },
          state: l,
          steps: c,
        };
      }
    },
    63594: function (t, e, n) {
      n.d(e, {
        Pn: () => r,
        Wi: () => o,
        w0: () => a,
        yL: () => l,
      });
      var s = n(43594);
      var i = n(683);
      const {
        schedule: o,
        cancel: r,
        state: a,
        steps: l,
      } = (0, i.Z)(
        typeof requestAnimationFrame != "undefined"
          ? requestAnimationFrame
          : s.Z,
        true,
      );
    },
    69547: function (t, e, n) {
      n.d(e, {
        g: () => i,
      });
      var s = n(683);
      const { schedule: i, cancel: o } = (0, s.Z)(queueMicrotask, false);
    },
    35449: function (t, e, n) {
      n.d(e, {
        X: () => a,
      });
      var s = n(91385);
      var i = n(63594);
      let o;
      function r() {
        o = undefined;
      }
      const a = {
        now: () => {
          if (o === undefined) {
            a.set(
              i.w0.isProcessing || s.c.useManualTiming
                ? i.w0.timestamp
                : performance.now(),
            );
          }
          return o;
        },
        set: (t) => {
          o = t;
          queueMicrotask(r);
        },
      };
    },
    38255: function (t, e, n) {
      n.d(e, {
        E$: () => c,
        RT: () => d,
        WK: () => h,
      });
      const s = (t) => (t * 180) / Math.PI;
      const i = (t) => {
        const e = s(Math.atan2(t[1], t[0]));
        return r(e);
      };
      const o = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
        rotate: i,
        rotateZ: i,
        skewX: (t) => s(Math.atan(t[1])),
        skewY: (t) => s(Math.atan(t[2])),
        skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
      };
      const r = (t) => {
        if ((t %= 360) < 0) {
          t += 360;
        }
        return t;
      };
      const a = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]);
      const l = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]);
      const u = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: a,
        scaleY: l,
        scale: (t) => (a(t) + l(t)) / 2,
        rotateX: (t) => r(s(Math.atan2(t[6], t[5]))),
        rotateY: (t) => r(s(Math.atan2(-t[2], t[0]))),
        rotateZ: i,
        rotate: i,
        skewX: (t) => s(Math.atan(t[4])),
        skewY: (t) => s(Math.atan(t[1])),
        skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
      };
      function c(t) {
        if (t.includes("scale")) {
          return 1;
        } else {
          return 0;
        }
      }
      function h(t, e) {
        if (!t || t === "none") {
          return c(e);
        }
        const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        let s;
        let i;
        if (n) {
          s = u;
          i = n;
        } else {
          const e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          s = o;
          i = e;
        }
        if (!i) {
          return c(e);
        }
        const r = s[e];
        const a = i[1].split(",").map(p);
        if (typeof r == "function") {
          return r(a);
        } else {
          return a[r];
        }
      }
      const d = (t, e) => {
        const { transform: n = "none" } = getComputedStyle(t);
        return h(n, e);
      };
      function p(t) {
        return parseFloat(t.trim());
      }
    },
    18011: function (t, e, n) {
      n.d(e, {
        z: () => i,
      });
      var s = n(50477);
      const i = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...s._,
      ]);
    },
    50477: function (t, e, n) {
      n.d(e, {
        G: () => i,
        _: () => s,
      });
      const s = [
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
      const i = (() => new Set(s))();
    },
    32838: function (t, e, n) {
      n.d(e, {
        P: () => s,
      });
      const s = {
        layout: 0,
        mainThread: 0,
        waapi: 0,
      };
    },
    27984: function (t, e, n) {
      n.d(e, {
        f: () => s,
      });
      const s = {
        value: null,
        addProjectionMetrics: null,
      };
    },
    10959: function (t, e, n) {
      n.d(e, {
        s: () => c,
      });
      var s = n(91385);
      var i = n(43594);
      var o = n(60333);
      var r = n(26975);
      var a = n(66789);
      var l = n(65437);
      var u = n(98029);
      function c(t, e, { clamp: n = true, ease: c, mixer: h } = {}) {
        const d = t.length;
        (0, r.k)(
          d === e.length,
          "Both input and output ranges must be the same length",
          "range-length",
        );
        if (d === 1) {
          return () => e[0];
        }
        if (d === 2 && e[0] === e[1]) {
          return () => e[1];
        }
        const p = t[0] === t[1];
        if (t[0] > t[d - 1]) {
          t = [...t].reverse();
          e = [...e].reverse();
        }
        const f = (function (t, e, n) {
          const r = [];
          const a = n || s.c.mix || u.C;
          const l = t.length - 1;
          for (let n = 0; n < l; n++) {
            let s = a(t[n], t[n + 1]);
            if (e) {
              const t = Array.isArray(e) ? e[n] || i.Z : e;
              s = (0, o.z)(t, s);
            }
            r.push(s);
          }
          return r;
        })(e, c, h);
        const m = f.length;
        const g = (n) => {
          if (p && n < t[0]) {
            return e[0];
          }
          let s = 0;
          if (m > 1) {
            for (; s < t.length - 2 && !(n < t[s + 1]); s++);
          }
          const i = (0, a.Y)(t[s], t[s + 1], n);
          return f[s](i);
        };
        if (n) {
          return (e) => g((0, l.u)(t[0], t[d - 1], e));
        } else {
          return g;
        }
      }
    },
    59634: function (t, e, n) {
      n.d(e, {
        v: () => i,
      });
      var s = n(43754);
      function i(t) {
        return (0, s.K)(t) && "ownerSVGElement" in t;
      }
    },
    30038: function (t, e, n) {
      n.d(e, {
        r: () => i,
      });
      var s = n(59634);
      function i(t) {
        return (0, s.v)(t) && t.tagName === "svg";
      }
    },
    98029: function (t, e, n) {
      n.d(e, {
        C: () => T,
      });
      var s = n(60333);
      var i = n(26975);
      var o = n(53345);
      var r = n(39178);
      var a = n(28779);
      var l = n(94306);
      var u = n(63709);
      function c(t, e, n) {
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
      var h = n(41281);
      function d(t, e) {
        return (n) => (n > 0 ? e : t);
      }
      var p = n(55153);
      const f = (t, e, n) => {
        const s = t * t;
        const i = n * (e * e - s) + s;
        if (i < 0) {
          return 0;
        } else {
          return Math.sqrt(i);
        }
      };
      const m = [l.$, h.m, u.J];
      function g(t) {
        n = t;
        const e = m.find((t) => t.test(n));
        var n;
        (0, i.K)(
          Boolean(e),
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
          "color-not-animatable",
        );
        if (!Boolean(e)) {
          return false;
        }
        let s = e.parse(t);
        if (e === u.J) {
          s = (function ({ hue: t, saturation: e, lightness: n, alpha: s }) {
            t /= 360;
            n /= 100;
            let i = 0;
            let o = 0;
            let r = 0;
            if ((e /= 100)) {
              const s = n < 0.5 ? n * (1 + e) : n + e - n * e;
              const a = n * 2 - s;
              i = c(a, s, t + 1 / 3);
              o = c(a, s, t);
              r = c(a, s, t - 1 / 3);
            } else {
              i = o = r = n;
            }
            return {
              red: Math.round(i * 255),
              green: Math.round(o * 255),
              blue: Math.round(r * 255),
              alpha: s,
            };
          })(s);
        }
        return s;
      }
      const v = (t, e) => {
        const n = g(t);
        const s = g(e);
        if (!n || !s) {
          return d(t, e);
        }
        const i = {
          ...n,
        };
        return (t) => {
          i.red = f(n.red, s.red, t);
          i.green = f(n.green, s.green, t);
          i.blue = f(n.blue, s.blue, t);
          i.alpha = (0, p.t)(n.alpha, s.alpha, t);
          return h.m.transform(i);
        };
      };
      const y = new Set(["none", "hidden"]);
      function w(t, e) {
        return (n) => (0, p.t)(t, e, n);
      }
      function x(t) {
        if (typeof t == "number") {
          return w;
        } else if (typeof t == "string") {
          if ((0, o.t)(t)) {
            return d;
          } else if (r.$.test(t)) {
            return v;
          } else {
            return P;
          }
        } else if (Array.isArray(t)) {
          return b;
        } else if (typeof t == "object") {
          if (r.$.test(t)) {
            return v;
          } else {
            return S;
          }
        } else {
          return d;
        }
      }
      function b(t, e) {
        const n = [...t];
        const s = n.length;
        const i = t.map((t, n) => x(t)(t, e[n]));
        return (t) => {
          for (let e = 0; e < s; e++) {
            n[e] = i[e](t);
          }
          return n;
        };
      }
      function S(t, e) {
        const n = {
          ...t,
          ...e,
        };
        const s = {};
        for (const i in n) {
          if (t[i] !== undefined && e[i] !== undefined) {
            s[i] = x(t[i])(t[i], e[i]);
          }
        }
        return (t) => {
          for (const e in s) {
            n[e] = s[e](t);
          }
          return n;
        };
      }
      const P = (t, e) => {
        const n = a.P.createTransformer(e);
        const o = (0, a.V)(t);
        const r = (0, a.V)(e);
        if (
          o.indexes.var.length === r.indexes.var.length &&
          o.indexes.color.length === r.indexes.color.length &&
          o.indexes.number.length >= r.indexes.number.length
        ) {
          if (
            (y.has(t) && !r.values.length) ||
            (y.has(e) && !o.values.length)
          ) {
            return (function (t, e) {
              if (y.has(t)) {
                return (n) => (n <= 0 ? t : e);
              } else {
                return (n) => (n >= 1 ? e : t);
              }
            })(t, e);
          } else {
            return (0, s.z)(
              b(
                (function (t, e) {
                  const n = [];
                  const s = {
                    color: 0,
                    var: 0,
                    number: 0,
                  };
                  for (let i = 0; i < e.values.length; i++) {
                    const o = e.types[i];
                    const r = t.indexes[o][s[o]];
                    const a = t.values[r] ?? 0;
                    n[i] = a;
                    s[o]++;
                  }
                  return n;
                })(o, r),
                r.values,
              ),
              n,
            );
          }
        } else {
          (0, i.K)(
            true,
            `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            "complex-values-different",
          );
          return d(t, e);
        }
      };
      function T(t, e, n) {
        if (
          typeof t == "number" &&
          typeof e == "number" &&
          typeof n == "number"
        ) {
          return (0, p.t)(t, e, n);
        }
        return x(t)(t, e);
      }
    },
    55153: function (t, e, n) {
      n.d(e, {
        t: () => s,
      });
      const s = (t, e, n) => t + (e - t) * n;
    },
    6419: function (t, e, n) {
      function s(t, e, n) {
        if (t instanceof EventTarget) {
          return [t];
        }
        if (typeof t == "string") {
          let s = document;
          if (e) {
            s = e.current;
          }
          const i = n?.[t] ?? s.querySelectorAll(t);
          if (i) {
            return Array.from(i);
          } else {
            return [];
          }
        }
        return Array.from(t);
      }
      n.d(e, {
        I: () => s,
      });
    },
    17802: function (t, e, n) {
      n.d(e, {
        BX: () => u,
        S1: () => a,
      });
      var s = n(58088);
      var i = n(5228);
      var o = n(35449);
      var r = n(63594);
      const a = {
        current: undefined,
      };
      class l {
        constructor(t, e = {}) {
          this.canTrackVelocity = null;
          this.events = {};
          this.updateAndNotify = (t) => {
            const e = o.X.now();
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
          this.updatedAt = o.X.now();
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
          this.events[t] ||= new s.L();
          const n = this.events[t].add(e);
          if (t === "change") {
            return () => {
              n();
              r.Wi.read(() => {
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
          const t = o.X.now();
          if (
            !this.canTrackVelocity ||
            this.prevFrameValue === undefined ||
            t - this.updatedAt > 30
          ) {
            return 0;
          }
          const e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, i.R)(
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
        return new l(t, e);
      }
    },
    94306: function (t, e, n) {
      n.d(e, {
        $: () => i,
      });
      var s = n(41281);
      const i = {
        test: (0, n(88463).i)("#"),
        parse: function (t) {
          let e = "";
          let n = "";
          let s = "";
          let i = "";
          if (t.length > 5) {
            e = t.substring(1, 3);
            n = t.substring(3, 5);
            s = t.substring(5, 7);
            i = t.substring(7, 9);
          } else {
            e = t.substring(1, 2);
            n = t.substring(2, 3);
            s = t.substring(3, 4);
            i = t.substring(4, 5);
            e += e;
            n += n;
            s += s;
            i += i;
          }
          return {
            red: parseInt(e, 16),
            green: parseInt(n, 16),
            blue: parseInt(s, 16),
            alpha: i ? parseInt(i, 16) / 255 : 1,
          };
        },
        transform: s.m.transform,
      };
    },
    63709: function (t, e, n) {
      n.d(e, {
        J: () => a,
      });
      var s = n(53937);
      var i = n(57360);
      var o = n(53848);
      var r = n(88463);
      const a = {
        test: (0, r.i)("hsl", "hue"),
        parse: (0, r.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          i.aQ.transform((0, o.N)(e)) +
          ", " +
          i.aQ.transform((0, o.N)(n)) +
          ", " +
          (0, o.N)(s.Fq.transform(r)) +
          ")",
      };
    },
    39178: function (t, e, n) {
      n.d(e, {
        $: () => r,
      });
      var s = n(94306);
      var i = n(63709);
      var o = n(41281);
      const r = {
        test: (t) => o.m.test(t) || s.$.test(t) || i.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : i.J.test(t)
              ? i.J.parse(t)
              : s.$.parse(t),
        transform: (t) =>
          typeof t == "string"
            ? t
            : t.hasOwnProperty("red")
              ? o.m.transform(t)
              : i.J.transform(t),
        getAnimatableNone: (t) => {
          const e = r.parse(t);
          e.alpha = 0;
          return r.transform(e);
        },
      };
    },
    41281: function (t, e, n) {
      n.d(e, {
        m: () => l,
      });
      var s = n(65437);
      var i = n(53937);
      var o = n(53848);
      var r = n(88463);
      const a = {
        ...i.Rx,
        transform: (t) => Math.round(((t) => (0, s.u)(0, 255, t))(t)),
      };
      const l = {
        test: (0, r.i)("rgb", "red"),
        parse: (0, r.d)("red", "green", "blue"),
        transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
          "rgba(" +
          a.transform(t) +
          ", " +
          a.transform(e) +
          ", " +
          a.transform(n) +
          ", " +
          (0, o.N)(i.Fq.transform(s)) +
          ")",
      };
    },
    88463: function (t, e, n) {
      n.d(e, {
        d: () => r,
        i: () => o,
      });
      var s = n(84755);
      const i =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      const o = (t, e) => (n) =>
        Boolean(
          (typeof n == "string" && i.test(n) && n.startsWith(t)) ||
          (e &&
            !(function (t) {
              return t == null;
            })(n) &&
            Object.prototype.hasOwnProperty.call(n, e)),
        );
      const r = (t, e, n) => (i) => {
        if (typeof i != "string") {
          return i;
        }
        const [o, r, a, l] = i.match(s.K);
        return {
          [t]: parseFloat(o),
          [e]: parseFloat(r),
          [n]: parseFloat(a),
          alpha: l !== undefined ? parseFloat(l) : 1,
        };
      };
    },
    49260: function (t, e, n) {
      n.d(e, {
        h: () => l,
      });
      var s = n(28779);
      var i = n(84755);
      const o = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function r(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if (e === "drop-shadow") {
          return t;
        }
        const [s] = n.match(i.K) || [];
        if (!s) {
          return t;
        }
        const r = n.replace(s, "");
        let a = o.has(e) ? 1 : 0;
        if (s !== n) {
          a *= 100;
        }
        return e + "(" + a + r + ")";
      }
      const a = /\b([a-z-]*)\(.*?\)/gu;
      const l = {
        ...s.P,
        getAnimatableNone: (t) => {
          const e = t.match(a);
          if (e) {
            return e.map(r).join(" ");
          } else {
            return t;
          }
        },
      };
    },
    28779: function (t, e, n) {
      n.d(e, {
        V: () => p,
        P: () => v,
      });
      var s = n(39178);
      const i =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var o = n(84755);
      var r = n(53848);
      const a = "number";
      const l = "color";
      const u = "var";
      const c = "var(";
      const h = "${}";
      const d =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function p(t) {
        const e = t.toString();
        const n = [];
        const i = {
          color: [],
          number: [],
          var: [],
        };
        const o = [];
        let r = 0;
        const p = e
          .replace(d, (t) => {
            if (s.$.test(t)) {
              i.color.push(r);
              o.push(l);
              n.push(s.$.parse(t));
            } else if (t.startsWith(c)) {
              i.var.push(r);
              o.push(u);
              n.push(t);
            } else {
              i.number.push(r);
              o.push(a);
              n.push(parseFloat(t));
            }
            ++r;
            return h;
          })
          .split(h);
        return {
          values: n,
          split: p,
          indexes: i,
          types: o,
        };
      }
      function f(t) {
        return p(t).values;
      }
      function m(t) {
        const { split: e, types: n } = p(t);
        const i = e.length;
        return (t) => {
          let o = "";
          for (let u = 0; u < i; u++) {
            o += e[u];
            if (t[u] !== undefined) {
              const e = n[u];
              o +=
                e === a ? (0, r.N)(t[u]) : e === l ? s.$.transform(t[u]) : t[u];
            }
          }
          return o;
        };
      }
      const g = (t) =>
        typeof t == "number" ? 0 : s.$.test(t) ? s.$.getAnimatableNone(t) : t;
      const v = {
        test: function (t) {
          return (
            isNaN(t) &&
            typeof t == "string" &&
            (t.match(o.K)?.length || 0) + (t.match(i)?.length || 0) > 0
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
        $: () => r,
        C: () => a,
      });
      var s = n(53937);
      var i = n(57360);
      var o = n(31024);
      const r = [
        s.Rx,
        i.px,
        i.aQ,
        i.RW,
        i.vw,
        i.vh,
        {
          test: (t) => t === "auto",
          parse: (t) => t,
        },
      ];
      const a = (t) => r.find((0, o.l)(t));
    },
    90648: function (t, e, n) {
      n.d(e, {
        A: () => r,
      });
      var s = n(39178);
      var i = n(49260);
      const o = {
        ...n(75456).j,
        color: s.$,
        backgroundColor: s.$,
        outlineColor: s.$,
        fill: s.$,
        stroke: s.$,
        borderColor: s.$,
        borderTopColor: s.$,
        borderRightColor: s.$,
        borderBottomColor: s.$,
        borderLeftColor: s.$,
        filter: i.h,
        WebkitFilter: i.h,
      };
      const r = (t) => o[t];
    },
    75456: function (t, e, n) {
      n.d(e, {
        j: () => a,
      });
      var s = n(53937);
      const i = {
        ...s.Rx,
        transform: Math.round,
      };
      var o = n(57360);
      const r = {
        rotate: o.RW,
        rotateX: o.RW,
        rotateY: o.RW,
        rotateZ: o.RW,
        scale: s.bA,
        scaleX: s.bA,
        scaleY: s.bA,
        scaleZ: s.bA,
        skew: o.RW,
        skewX: o.RW,
        skewY: o.RW,
        distance: o.px,
        translateX: o.px,
        translateY: o.px,
        translateZ: o.px,
        x: o.px,
        y: o.px,
        z: o.px,
        perspective: o.px,
        transformPerspective: o.px,
        opacity: s.Fq,
        originX: o.$C,
        originY: o.$C,
        originZ: o.px,
      };
      const a = {
        borderWidth: o.px,
        borderTopWidth: o.px,
        borderRightWidth: o.px,
        borderBottomWidth: o.px,
        borderLeftWidth: o.px,
        borderRadius: o.px,
        radius: o.px,
        borderTopLeftRadius: o.px,
        borderTopRightRadius: o.px,
        borderBottomRightRadius: o.px,
        borderBottomLeftRadius: o.px,
        width: o.px,
        maxWidth: o.px,
        height: o.px,
        maxHeight: o.px,
        top: o.px,
        right: o.px,
        bottom: o.px,
        left: o.px,
        padding: o.px,
        paddingTop: o.px,
        paddingRight: o.px,
        paddingBottom: o.px,
        paddingLeft: o.px,
        margin: o.px,
        marginTop: o.px,
        marginRight: o.px,
        marginBottom: o.px,
        marginLeft: o.px,
        backgroundPositionX: o.px,
        backgroundPositionY: o.px,
        ...r,
        zIndex: i,
        fillOpacity: s.Fq,
        strokeOpacity: s.Fq,
        numOctaves: i,
      };
    },
    53937: function (t, e, n) {
      n.d(e, {
        Fq: () => o,
        Rx: () => i,
        bA: () => r,
      });
      var s = n(65437);
      const i = {
        test: (t) => typeof t == "number",
        parse: parseFloat,
        transform: (t) => t,
      };
      const o = {
        ...i,
        transform: (t) => (0, s.u)(0, 1, t),
      };
      const r = {
        ...i,
        default: 1,
      };
    },
    57360: function (t, e, n) {
      n.d(e, {
        $C: () => u,
        RW: () => i,
        aQ: () => o,
        px: () => r,
        vh: () => a,
        vw: () => l,
      });
      const s = (t) => ({
        test: (e) =>
          typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: (e) => `${e}${t}`,
      });
      const i = s("deg");
      const o = s("%");
      const r = s("px");
      const a = s("vh");
      const l = s("vw");
      const u = (() => ({
        ...o,
        parse: (t) => o.parse(t) / 100,
        transform: (t) => o.transform(t * 100),
      }))();
    },
    31024: function (t, e, n) {
      n.d(e, {
        l: () => s,
      });
      const s = (t) => (e) => e.test(t);
    },
    7741: function (t, e, n) {
      n.d(e, {
        T: () => r,
      });
      var s = n(28779);
      var i = n(49260);
      var o = n(90648);
      function r(t, e) {
        let n = (0, o.A)(t);
        if (n !== i.h) {
          n = s.P;
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
        K: () => s,
      });
      const s = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    53848: function (t, e, n) {
      n.d(e, {
        N: () => s,
      });
      const s = (t) => Math.round(t * 100000) / 100000;
    },
    45875: function (t, e, n) {
      n.d(e, {
        i: () => s,
      });
      const s = (t) => Boolean(t && t.getVelocity);
    },
    25013: function (t, e, n) {
      function s(t, e) {
        if (t.indexOf(e) === -1) {
          t.push(e);
        }
      }
      function i(t, e) {
        const n = t.indexOf(e);
        if (n > -1) {
          t.splice(n, 1);
        }
      }
      n.d(e, {
        cl: () => i,
        y4: () => s,
      });
    },
    65437: function (t, e, n) {
      n.d(e, {
        u: () => s,
      });
      const s = (t, e, n) => (n > e ? e : n < t ? t : n);
    },
    37919: function (t, e, n) {
      n.d(e, {
        Bn: () => r,
        X7: () => a,
        Z7: () => o,
      });
      var s = n(27467);
      var i = n(6578);
      const o = (t) => 1 - Math.sin(Math.acos(t));
      const r = (0, i.M)(o);
      const a = (0, s.o)(o);
    },
    27467: function (t, e, n) {
      n.d(e, {
        o: () => s,
      });
      const s = (t) => (e) =>
        e <= 0.5 ? t(e * 2) / 2 : (2 - t((1 - e) * 2)) / 2;
    },
    6578: function (t, e, n) {
      n.d(e, {
        M: () => s,
      });
      const s = (t) => (e) => 1 - t(1 - e);
    },
    61209: function (t, e, n) {
      n.d(e, {
        N: () => s,
      });
      const s = (t) => Array.isArray(t) && typeof t[0] != "number";
    },
    26975: function (t, e, n) {
      n.d(e, {
        K: () => s,
        k: () => i,
      });
      let s = () => {};
      let i = () => {};
    },
    91385: function (t, e, n) {
      n.d(e, {
        c: () => s,
      });
      const s = {};
    },
    94309: function (t, e, n) {
      n.d(e, {
        P: () => s,
      });
      const s = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    43754: function (t, e, n) {
      function s(t) {
        return typeof t == "object" && t !== null;
      }
      n.d(e, {
        K: () => s,
      });
    },
    71226: function (t, e, n) {
      n.d(e, {
        W: () => s,
      });
      const s = (t) => /^0[^.\s]+$/u.test(t);
    },
    43594: function (t, e, n) {
      n.d(e, {
        Z: () => s,
      });
      const s = (t) => t;
    },
    60333: function (t, e, n) {
      n.d(e, {
        z: () => i,
      });
      const s = (t, e) => (n) => e(t(n));
      const i = (...t) => t.reduce(s);
    },
    66789: function (t, e, n) {
      n.d(e, {
        Y: () => s,
      });
      const s = (t, e, n) => {
        const s = e - t;
        if (s === 0) {
          return 1;
        } else {
          return (n - t) / s;
        }
      };
    },
    58088: function (t, e, n) {
      n.d(e, {
        L: () => i,
      });
      var s = n(25013);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          (0, s.y4)(this.subscriptions, t);
          return () => (0, s.cl)(this.subscriptions, t);
        }
        notify(t, e, n) {
          const s = this.subscriptions.length;
          if (s) {
            if (s === 1) {
              this.subscriptions[0](t, e, n);
            } else {
              for (let i = 0; i < s; i++) {
                const s = this.subscriptions[i];
                if (s) {
                  s(t, e, n);
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
        X: () => i,
        w: () => s,
      });
      const s = (t) => t * 1000;
      const i = (t) => t / 1000;
    },
    5228: function (t, e, n) {
      function s(t, e) {
        if (e) {
          return t * (1000 / e);
        } else {
          return 0;
        }
      }
      n.d(e, {
        R: () => s,
      });
    },
    71526: function (t, e, n) {
      function s(t) {
        return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
      }
      n.d(e, {
        DE: () => d,
        Kf: () => r,
        LG: () => m,
        MT: () => l,
        PO: () => a,
        UY: () => c,
        jB: () => u,
        md: () => f,
        qC: () => p,
      });
      var i = (() =>
        (typeof Symbol == "function" && Symbol.observable) || "@@observable")();
      var o = () => Math.random().toString(36).substring(7).split("").join(".");
      var r = {
        INIT: `@@redux/INIT${o()}`,
        REPLACE: `@@redux/REPLACE${o()}`,
        PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${o()}`,
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
      function l(t, e, n) {
        if (typeof t != "function") {
          throw new Error(s(2));
        }
        if (
          (typeof e == "function" && typeof n == "function") ||
          (typeof n == "function" && typeof arguments[3] == "function")
        ) {
          throw new Error(s(0));
        }
        if (typeof e == "function" && n === undefined) {
          n = e;
          e = undefined;
        }
        if (n !== undefined) {
          if (typeof n != "function") {
            throw new Error(s(1));
          }
          return n(l)(t, e);
        }
        let o = t;
        let u = e;
        let c = new Map();
        let h = c;
        let d = 0;
        let p = false;
        function f() {
          if (h === c) {
            h = new Map();
            c.forEach((t, e) => {
              h.set(e, t);
            });
          }
        }
        function m() {
          if (p) {
            throw new Error(s(3));
          }
          return u;
        }
        function g(t) {
          if (typeof t != "function") {
            throw new Error(s(4));
          }
          if (p) {
            throw new Error(s(5));
          }
          let e = true;
          f();
          const n = d++;
          h.set(n, t);
          return function () {
            if (e) {
              if (p) {
                throw new Error(s(6));
              }
              e = false;
              f();
              h.delete(n);
              c = null;
            }
          };
        }
        function v(t) {
          if (!a(t)) {
            throw new Error(s(7));
          }
          if (t.type === undefined) {
            throw new Error(s(8));
          }
          if (typeof t.type != "string") {
            throw new Error(s(17));
          }
          if (p) {
            throw new Error(s(9));
          }
          try {
            p = true;
            u = o(u, t);
          } finally {
            p = false;
          }
          (c = h).forEach((t) => {
            t();
          });
          return t;
        }
        v({
          type: r.INIT,
        });
        return {
          dispatch: v,
          subscribe: g,
          getState: m,
          replaceReducer: function (t) {
            if (typeof t != "function") {
              throw new Error(s(10));
            }
            o = t;
            v({
              type: r.REPLACE,
            });
          },
          [i]: function () {
            const t = g;
            return {
              subscribe(e) {
                if (typeof e != "object" || e === null) {
                  throw new Error(s(11));
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
              [i]() {
                return this;
              },
            };
          },
        };
      }
      function u(t, e, n) {
        return l(t, e, n);
      }
      function c(t) {
        const e = Object.keys(t);
        const n = {};
        for (let s = 0; s < e.length; s++) {
          const i = e[s];
          0;
          if (typeof t[i] == "function") {
            n[i] = t[i];
          }
        }
        const i = Object.keys(n);
        let o;
        try {
          (function (t) {
            Object.keys(t).forEach((e) => {
              const n = t[e];
              if (
                n(undefined, {
                  type: r.INIT,
                }) === undefined
              ) {
                throw new Error(s(12));
              }
              if (
                n(undefined, {
                  type: r.PROBE_UNKNOWN_ACTION(),
                }) === undefined
              ) {
                throw new Error(s(13));
              }
            });
          })(n);
        } catch (t) {
          o = t;
        }
        return function (t = {}, e) {
          if (o) {
            throw o;
          }
          let r = false;
          const a = {};
          for (let o = 0; o < i.length; o++) {
            const l = i[o];
            const u = n[l];
            const c = t[l];
            const h = u(c, e);
            if (h === undefined) {
              if (e) {
                e.type;
              }
              throw new Error(s(14));
            }
            a[l] = h;
            r = r || h !== c;
          }
          r = r || i.length !== Object.keys(t).length;
          if (r) {
            return a;
          } else {
            return t;
          }
        };
      }
      function h(t, e) {
        return function (...n) {
          return e(t.apply(this, n));
        };
      }
      function d(t, e) {
        if (typeof t == "function") {
          return h(t, e);
        }
        if (typeof t != "object" || t === null) {
          throw new Error(s(16));
        }
        const n = {};
        for (const s in t) {
          const i = t[s];
          if (typeof i == "function") {
            n[s] = h(i, e);
          }
        }
        return n;
      }
      function p(...t) {
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
      function f(...t) {
        return (e) => (n, i) => {
          const o = e(n, i);
          let r = () => {
            throw new Error(s(15));
          };
          const a = {
            getState: o.getState,
            dispatch: (t, ...e) => r(t, ...e),
          };
          const l = t.map((t) => t(a));
          r = p(...l)(o.dispatch);
          return {
            ...o,
            dispatch: r,
          };
        };
      }
      function m(t) {
        return a(t) && "type" in t && typeof t.type == "string";
      }
    },
  },
]);
//# sourceMappingURL=7097.2cdfd7faa22eef4a.js.map
