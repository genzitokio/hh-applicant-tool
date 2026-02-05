"use strict";

(globalThis.__chatik_LOADABLE_LOADED_CHUNKS__ =
  globalThis.__chatik_LOADABLE_LOADED_CHUNKS__ || []).push([
  ["5318"],
  {
    77071: function (t, e, n) {
      var i =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, n, i = n) {
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
              Object.defineProperty(t, i, s);
            }
          : function (t, e, n, i = n) {
              t[i] = e[n];
            });
      var s =
        (this && this.__exportStar) ||
        function (t, e) {
          for (var n in t) {
            if (
              n !== "default" &&
              !Object.prototype.hasOwnProperty.call(e, n)
            ) {
              i(e, t, n);
            }
          }
        };
      Object.defineProperty(e, "__esModule", {
        value: true,
      });
      s(n(87243), e);
    },
    53744: function (t, e, n) {
      n.d(e, {
        VK: () => C,
        ZP: () => M,
      });
      var i = n(3891);
      var s = n(5049);
      var o = n(98123);
      var r = n(83955);
      var a = n(57172);
      var u = n(8679);
      function l(t, e) {
        if (!t) {
          var n = new Error("loadable: " + e);
          n.framesToPop = 1;
          n.name = "Invariant Violation";
          throw n;
        }
      }
      var c = i.createContext();
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
          function w(t, i, s) {
            var o = e.resolveComponent ? e.resolveComponent(t, i) : n(t);
            u(s, o, {
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
              var i;
              (i = t.call(this, n) || this).state = {
                result: null,
                error: null,
                loading: true,
                cacheKey: y(n),
              };
              l(
                !n.__chunkExtractor || f.requireSync,
                "SSR requires `@loadable/babel-plugin`, please install it",
              );
              if (n.__chunkExtractor) {
                if (e.ssr !== false) {
                  f.requireAsync(n).catch(function () {
                    return null;
                  });
                  i.loadSync();
                  n.__chunkExtractor.addChunk(f.chunkName(n));
                }
                return (0, r.Z)(i);
              } else {
                if (
                  e.ssr !== false &&
                  ((f.isReady && f.isReady(n)) ||
                    (f.chunkName && h.initialChunks[f.chunkName(n)]))
                ) {
                  i.loadSync();
                }
                return i;
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
            var i = n.prototype;
            i.componentDidMount = function () {
              this.mounted = true;
              var t = this.getCache();
              if (t && t.status === p) {
                this.setCache();
              }
              if (this.state.loading) {
                this.loadAsync();
              }
            };
            i.componentDidUpdate = function (t, e) {
              if (e.cacheKey !== this.state.cacheKey) {
                this.loadAsync();
              }
            };
            i.componentWillUnmount = function () {
              this.mounted = false;
            };
            i.safeSetState = function (t, e) {
              if (this.mounted) {
                this.setState(t, e);
              }
            };
            i.getCacheKey = function () {
              return y(this.props);
            };
            i.getCache = function () {
              return v[this.getCacheKey()];
            };
            i.setCache = function (t = undefined) {
              v[this.getCacheKey()] = t;
            };
            i.triggerOnLoad = function () {
              var t = this;
              if (g) {
                setTimeout(function () {
                  g(t.state.result, t.props);
                });
              }
            };
            i.loadSync = function () {
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
            i.loadAsync = function () {
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
            i.resolveAsync = function () {
              var t = this.props;
              t.__chunkExtractor;
              t.forwardedRef;
              var e = (0, s.Z)(t, ["__chunkExtractor", "forwardedRef"]);
              return S(e);
            };
            i.render = function () {
              var t = this.props;
              var n = t.forwardedRef;
              var i = t.fallback;
              t.__chunkExtractor;
              var r = (0, s.Z)(t, [
                "forwardedRef",
                "fallback",
                "__chunkExtractor",
              ]);
              var a = this.state;
              var u = a.error;
              var l = a.loading;
              var c = a.result;
              if (
                e.suspense &&
                (this.getCache() || this.loadAsync()).status === d
              ) {
                throw this.loadAsync();
              }
              if (u) {
                throw u;
              }
              var h = i || e.fallback || null;
              if (l) {
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
          })(i.Component);
          b = function (t) {
            return i.createElement(c.Consumer, null, function (e) {
              return i.createElement(
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
          var E = i.forwardRef(function (t, e) {
            return i.createElement(
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
          return i.createElement(e, n);
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
      const C = async () => {
        await A(T);
      };
      const M = (t, e) => {
        const i = P(t, e);
        E.push(async () => {
          await i.load();
        });
        if (typeof t == "object" && "chunkName" in t && "resolve" in t) {
          const e = t.resolve();
          T.push(async () => {
            const t = n.m;
            const s = t?.[e];
            if (s) {
              await i.load();
            }
          });
        }
        const s = i;
        s.preload = (t) => i.load(t);
        return s;
      };
    },
    16136: function (t, e, n) {
      n.d(e, {
        q: () => Nn,
        q_: () => Tn,
        vc: () => Me,
      });
      var i = w();
      var s = (t) => m(t, i);
      var o = w();
      s.write = (t) => m(t, o);
      var r = w();
      s.onStart = (t) => m(t, r);
      var a = w();
      s.onFrame = (t) => m(t, a);
      var u = w();
      s.onFinish = (t) => m(t, u);
      var l = [];
      s.setTimeout = (t, e) => {
        const n = s.now() + e;
        const i = () => {
          const t = l.findIndex((t) => t.cancel == i);
          if (~t) {
            l.splice(t, 1);
          }
          p -= ~t ? 1 : 0;
        };
        const o = {
          time: n,
          handler: t,
          cancel: i,
        };
        l.splice(c(n), 0, o);
        p += 1;
        g();
        return o;
      };
      var c = (t) => ~(~l.findIndex((e) => e.time > t) || ~l.length);
      s.cancel = (t) => {
        r.delete(t);
        a.delete(t);
        u.delete(t);
        i.delete(t);
        o.delete(t);
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
        function i(...t) {
          e = t;
          s.onStart(n);
        }
        i.handler = t;
        i.cancel = () => {
          r.delete(n);
          e = null;
        };
        return i;
      };
      var h =
        typeof window != "undefined" ? window.requestAnimationFrame : () => {};
      s.use = (t) => (h = t);
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
          y();
        }
      };
      var d = -1;
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
        if (d < 0) {
          d = 0;
          if (s.frameLoop !== "demand") {
            h(v);
          }
        }
      }
      function v() {
        if (~d) {
          h(v);
          s.batchedUpdates(y);
        }
      }
      function y() {
        const t = d;
        d = s.now();
        const e = c(d);
        if (e) {
          x(l.splice(0, e), (t) => t.handler());
          p -= e;
        }
        if (p) {
          r.flush();
          i.flush(t ? Math.min(64, d - t) : 16.667);
          a.flush();
          o.flush();
          u.flush();
        } else {
          d = -1;
        }
      }
      function w() {
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
              x(e, (e) => e(n) && t.add(e));
              p += t.size;
              e = t;
            }
          },
        };
      }
      function x(t, e) {
        t.forEach((t) => {
          try {
            e(t);
          } catch (t) {
            s.catch(t);
          }
        });
      }
      var b = n(3891);
      var S = Object.defineProperty;
      var P = {};
      function T() {}
      ((t, e) => {
        for (var n in e) {
          S(t, n, {
            get: e[n],
            enumerable: true,
          });
        }
      })(P, {
        assign: () => F,
        colors: () => j,
        createStringInterpolator: () => O,
        skipAnimation: () => _,
        to: () => D,
        willAdvance: () => L,
      });
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
      var C = (t, e) => t.forEach(e);
      function M(t, e, n) {
        if (E.arr(t)) {
          for (let i = 0; i < t.length; i++) {
            e.call(n, t[i], `${i}`);
          }
        } else {
          for (const i in t) {
            if (t.hasOwnProperty(i)) {
              e.call(n, t[i], i);
            }
          }
        }
      }
      var k = (t) => (E.und(t) ? [] : E.arr(t) ? t : [t]);
      function R(t, e) {
        if (t.size) {
          const n = Array.from(t);
          t.clear();
          C(n, e);
        }
      }
      var O;
      var D;
      var V = (t, ...e) => R(t, (t) => t(...e));
      var I = () =>
        typeof window == "undefined" ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
      var j = null;
      var _ = false;
      var L = T;
      var F = (t) => {
        if (t.to) {
          D = t.to;
        }
        if (t.now) {
          s.now = t.now;
        }
        if (t.colors !== undefined) {
          j = t.colors;
        }
        if (t.skipAnimation != null) {
          _ = t.skipAnimation;
        }
        if (t.createStringInterpolator) {
          O = t.createStringInterpolator;
        }
        if (t.requestAnimationFrame) {
          s.use(t.requestAnimationFrame);
        }
        if (t.batchedUpdates) {
          s.batchedUpdates = t.batchedUpdates;
        }
        if (t.willAdvance) {
          L = t.willAdvance;
        }
        if (t.frameLoop) {
          s.frameLoop = t.frameLoop;
        }
      };
      var B = new Set();
      var $ = [];
      var z = [];
      var N = 0;
      var W = {
        get idle() {
          return !B.size && !$.length;
        },
        start(t) {
          if (N > t.priority) {
            B.add(t);
            s.onStart(U);
          } else {
            q(t);
            s(K);
          }
        },
        advance: K,
        sort(t) {
          if (N) {
            s.onFrame(() => W.sort(t));
          } else {
            const e = $.indexOf(t);
            if (~e) {
              $.splice(e, 1);
              X(t);
            }
          }
        },
        clear() {
          $ = [];
          B.clear();
        },
      };
      function U() {
        B.forEach(q);
        B.clear();
        s(K);
      }
      function q(t) {
        if (!$.includes(t)) {
          X(t);
        }
      }
      function X(t) {
        $.splice(
          (function (t, e) {
            const n = t.findIndex(e);
            if (n < 0) {
              return t.length;
            } else {
              return n;
            }
          })($, (e) => e.priority > t.priority),
          0,
          t,
        );
      }
      function K(t) {
        const e = z;
        for (let n = 0; n < $.length; n++) {
          const i = $[n];
          N = i.priority;
          if (!i.idle) {
            L(i);
            i.advance(t);
            if (!i.idle) {
              e.push(i);
            }
          }
        }
        N = 0;
        (z = $).length = 0;
        return ($ = e).length > 0;
      }
      var H = "[-+]?\\d*\\.?\\d+";
      var Y = H + "%";
      function Z(...t) {
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      var G = new RegExp("rgb" + Z(H, H, H));
      var Q = new RegExp("rgba" + Z(H, H, H, H));
      var J = new RegExp("hsl" + Z(H, Y, Y));
      var tt = new RegExp("hsla" + Z(H, Y, Y, H));
      var et = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      var nt =
        /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      var it = /^#([0-9a-fA-F]{6})$/;
      var st = /^#([0-9a-fA-F]{8})$/;
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
        const i = n < 0.5 ? n * (1 + e) : n + e - n * e;
        const s = n * 2 - i;
        const o = ot(s, i, t + 1 / 3);
        const r = ot(s, i, t);
        const a = ot(s, i, t - 1 / 3);
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
      function ut(t) {
        return (((parseFloat(t) % 360) + 360) % 360) / 360;
      }
      function lt(t) {
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
          } else if ((e = it.exec(t))) {
            return parseInt(e[1] + "ff", 16) >>> 0;
          } else if (j && j[t] !== undefined) {
            return j[t];
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
                lt(e[4])) >>>
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
          } else if ((e = J.exec(t))) {
            return (rt(ut(e[1]), ct(e[2]), ct(e[3])) | 255) >>> 0;
          } else if ((e = tt.exec(t))) {
            return (rt(ut(e[1]), ct(e[2]), ct(e[3])) | lt(e[4])) >>> 0;
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
          return O(t);
        }
        const i = t;
        const s = i.output;
        const o = i.range || [0, 1];
        const r = i.extrapolateLeft || i.extrapolate || "extend";
        const a = i.extrapolateRight || i.extrapolate || "extend";
        const u = i.easing || ((t) => t);
        return (t) => {
          const e = (function (t, e) {
            for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n);
            return n - 1;
          })(t, o);
          return (function (t, e, n, i, s, o, r, a, u) {
            let l = u ? u(t) : t;
            if (l < e) {
              if (r === "identity") {
                return l;
              }
              if (r === "clamp") {
                l = e;
              }
            }
            if (l > n) {
              if (a === "identity") {
                return l;
              }
              if (a === "clamp") {
                l = n;
              }
            }
            if (i === s) {
              return i;
            }
            if (e === n) {
              if (t <= e) {
                return i;
              } else {
                return s;
              }
            }
            if (e === -Infinity) {
              l = -l;
            } else if (n === Infinity) {
              l -= e;
            } else {
              l = (l - e) / (n - e);
            }
            l = o(l);
            if (i === -Infinity) {
              l = -l;
            } else if (s === Infinity) {
              l += i;
            } else {
              l = l * (s - i) + i;
            }
            return l;
          })(t, o[e], o[e + 1], s[e], s[e + 1], u, r, a, i.map);
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
            const i =
              (n = e === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001)) * t;
            const s = e === "end" ? Math.floor(i) : Math.ceil(i);
            o = 0;
            r = 1;
            a = s / t;
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
          Ct(this, t);
        }
      };
      var Ct = (t, e) => Ot(t, xt, e);
      function Mt(t, e) {
        if (t[xt]) {
          let n = t[bt];
          if (!n) {
            Ot(t, bt, (n = new Set()));
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
          const i = n.size - 1;
          if (i) {
            n.delete(e);
          } else {
            t[bt] = null;
          }
          if (t.observerRemoved) {
            t.observerRemoved(i, e);
          }
        }
      }
      var Rt;
      var Ot = (t, e, n) =>
        Object.defineProperty(t, e, {
          value: n,
          writable: true,
          configurable: true,
        });
      var Dt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
      var Vt =
        /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
      var It = new RegExp(`(${Dt.source})(%|[a-z]+)`, "i");
      var jt = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
      var _t = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      var Lt = (t) => {
        const [e, n] = Ft(t);
        if (!e || I()) {
          return t;
        }
        const i = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(e);
        if (i) {
          return i.trim();
        }
        if (n && n.startsWith("--")) {
          const e = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(n);
          return e || t;
        }
        if (n && _t.test(n)) {
          return Lt(n);
        } else {
          return n || t;
        }
      };
      var Ft = (t) => {
        const e = _t.exec(t);
        if (!e) {
          return [,];
        }
        const [, n, i] = e;
        return [n, i];
      };
      var Bt = (t, e, n, i, s) =>
        `rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(i)}, ${s})`;
      var $t = (t) => {
        Rt ||= j
          ? new RegExp(`(${Object.keys(j).join("|")})(?!\\w)`, "g")
          : /^\b$/;
        const e = t.output.map((t) =>
          Pt(t).replace(_t, Lt).replace(Vt, ht).replace(Rt, ht),
        );
        const n = e.map((t) => t.match(Dt).map(Number));
        const i = n[0]
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
            !It.test(e[0]) && e.find((t) => It.test(t))?.replace(Dt, "");
          let s = 0;
          return e[0]
            .replace(Dt, () => `${i[s++](t)}${n || ""}`)
            .replace(jt, Bt);
        };
      };
      var zt = "react-spring: ";
      var Nt = (t) => {
        const e = t;
        let n = false;
        if (typeof e != "function") {
          throw new TypeError(`${zt}once requires a function parameter`);
        }
        return (...t) => {
          if (!n) {
            e(...t);
            n = true;
          }
        };
      };
      var Wt = Nt(console.warn);
      var Ut = Nt(console.warn);
      function qt(t) {
        return (
          E.str(t) &&
          (t[0] == "#" ||
            /\d/.test(t) ||
            (!I() && _t.test(t)) ||
            t in (j || {}))
        );
      }
      var Xt = I() ? b.useEffect : b.useLayoutEffect;
      var Kt = () => {
        const t = (0, b.useRef)(false);
        Xt(() => {
          t.current = true;
          return () => {
            t.current = false;
          };
        }, []);
        return t;
      };
      function Ht() {
        const t = (0, b.useState)()[1];
        const e = Kt();
        return () => {
          if (e.current) {
            t(Math.random());
          }
        };
      }
      var Yt = (t) => (0, b.useEffect)(t, Zt);
      var Zt = [];
      function Gt(t) {
        const e = (0, b.useRef)();
        (0, b.useEffect)(() => {
          e.current = t;
        });
        return e.current;
      }
      var Qt = Symbol.for("Animated:node");
      var Jt = (t) => t && t[Qt];
      var te = (t, e) => {
        n = t;
        i = Qt;
        s = e;
        return Object.defineProperty(n, i, {
          value: s,
          writable: true,
          configurable: true,
        });
        var n;
        var i;
        var s;
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
      var ie = class extends ne {
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
          return new ie(t);
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
      var se = class extends ie {
        constructor(t) {
          super(0);
          this._string = null;
          this._toString = dt({
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
          M(this.source, (n, i) => {
            var s;
            if ((s = n) && s[Qt] === s) {
              e[i] = n.getValue(t);
            } else if (St(n)) {
              e[i] = Pt(n);
            } else if (!t) {
              e[i] = n;
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
          if (oe.dependencies && St(t)) {
            oe.dependencies.add(t);
          }
          const e = ee(t);
          if (e) {
            C(e, (t) => this.add(t));
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
            super.setValue(t.map(ue));
            return true;
          }
        }
      };
      function ue(t) {
        return (qt(t) ? se : ie).create(t);
      }
      function le(t) {
        const e = Jt(t);
        if (e) {
          return e.constructor;
        } else if (E.arr(t)) {
          return ae;
        } else if (qt(t)) {
          return se;
        } else {
          return ie;
        }
      }
      var ce = (t, e) => {
        const n = !E.fun(t) || (t.prototype && t.prototype.isReactComponent);
        return (0, b.forwardRef)((i, o) => {
          const r = (0, b.useRef)(null);
          const a =
            n &&
            (0, b.useCallback)(
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
          const [u, l] = (function (t, e) {
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
          const c = Ht();
          const h = () => {
            const t = r.current;
            if (n && !t) {
              return;
            }
            if ((!!t && e.applyAnimatedValues(t, u.getValue(true))) === false) {
              c();
            }
          };
          const d = new he(h, l);
          const p = (0, b.useRef)();
          Xt(() => {
            p.current = d;
            C(l, (t) => Mt(t, d));
            return () => {
              if (p.current) {
                C(p.current.deps, (t) => kt(t, p.current));
                s.cancel(p.current.update);
              }
            };
          });
          (0, b.useEffect)(h, []);
          Yt(() => () => {
            const t = p.current;
            C(t.deps, (e) => kt(e, t));
          });
          const f = e.getComponentProps(u.getValue());
          return b.createElement(t, {
            ...f,
            ref: a,
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
            s.write(this.update);
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
        const i = {};
        for (const s of n) {
          const n = e(t[s], s);
          if (!E.und(n)) {
            i[s] = n;
          }
        }
        return i;
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
          M(t, (t, i) => {
            if (!be[i]) {
              e[i] = t;
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
          M(t, (t, i) => i in e || (n[i] = t));
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
        } else if (qt(t)) {
          return P.createStringInterpolator({
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
      var ke = {
        ...Me.default,
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
      function Oe(t, e) {
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
      var De = [];
      var Ve = class {
        constructor() {
          this.changed = false;
          this.values = De;
          this.toValues = null;
          this.fromValues = De;
          this.config = new Re();
          this.immediate = false;
        }
      };
      function Ie(
        t,
        { key: e, props: n, defaultProps: i, state: o, actions: r },
      ) {
        return new Promise((a, u) => {
          let l;
          let c;
          let h = me(n.cancel ?? i?.cancel, e);
          if (h) {
            f();
          } else {
            if (!E.und(n.pause)) {
              o.paused = me(n.pause, e);
            }
            let t = i?.pause;
            if (t !== true) {
              t = o.paused || me(t, e);
            }
            l = fe(n.delay || 0, e);
            if (t) {
              o.resumeQueue.add(p);
              r.pause();
            } else {
              r.resume();
              p();
            }
          }
          function d() {
            o.resumeQueue.add(p);
            o.timeouts.delete(c);
            c.cancel();
            l = c.time - s.now();
          }
          function p() {
            if (l > 0 && !P.skipAnimation) {
              o.delayed = true;
              c = s.setTimeout(f, l);
              o.pauseQueue.add(d);
              o.timeouts.add(c);
            } else {
              f();
            }
          }
          function f() {
            o.delayed &&= false;
            o.pauseQueue.delete(d);
            o.timeouts.delete(c);
            if (t <= (o.cancelId || 0)) {
              h = true;
            }
            try {
              r.start(
                {
                  ...n,
                  callId: t,
                  cancel: h,
                },
                a,
              );
            } catch (t) {
              u(t);
            }
          }
        });
      }
      var je = (t, e) =>
        e.length == 1
          ? e[0]
          : e.some((t) => t.cancelled)
            ? Fe(t.get())
            : e.every((t) => t.noop)
              ? _e(t.get())
              : Le(
                  t.get(),
                  e.every((t) => t.finished),
                );
      var _e = (t) => ({
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
      function Be(t, e, n, i) {
        const { callId: o, parentId: r, onRest: a } = e;
        const { asyncTo: u, promise: l } = n;
        if (r || t !== u || e.reset) {
          return (n.promise = (async () => {
            n.asyncId = o;
            n.asyncTo = t;
            const c = we(e, (t, e) => (e === "onRest" ? undefined : t));
            let h;
            let d;
            const p = new Promise((t, e) => {
              h = t;
              return (d = e);
            });
            const f = (t) => {
              const e =
                (o <= (n.cancelId || 0) && Fe(i)) ||
                (o !== n.asyncId && Le(i, false));
              if (e) {
                t.result = e;
                d(t);
                throw t;
              }
            };
            const m = (t, e) => {
              const s = new ze();
              const r = new Ne();
              return (async () => {
                if (P.skipAnimation) {
                  $e(n);
                  r.result = Le(i, false);
                  d(r);
                  throw r;
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
                a.parentId = o;
                M(c, (t, e) => {
                  if (E.und(a[e])) {
                    a[e] = t;
                  }
                });
                const u = await i.start(a);
                f(s);
                if (n.paused) {
                  await new Promise((t) => {
                    n.resumeQueue.add(t);
                  });
                }
                return u;
              })();
            };
            let g;
            if (P.skipAnimation) {
              $e(n);
              return Le(i, false);
            }
            try {
              let e;
              e = E.arr(t)
                ? (async (t) => {
                    for (const e of t) {
                      await m(e);
                    }
                  })(t)
                : Promise.resolve(t(m, i.stop.bind(i)));
              await Promise.all([e.then(h), p]);
              g = Le(i.get(), true, false);
            } catch (t) {
              if (t instanceof ze) {
                g = t.result;
              } else {
                if (!(t instanceof Ne)) {
                  throw t;
                }
                g = t.result;
              }
            } finally {
              if (o == n.asyncId) {
                n.asyncId = r;
                n.asyncTo = r ? u : undefined;
                n.promise = r ? l : undefined;
              }
            }
            if (E.fun(a)) {
              s.batchedUpdates(() => {
                a(g, i, i.item);
              });
            }
            return g;
          })());
        } else {
          return l;
        }
      }
      function $e(t, e) {
        R(t.timeouts, (t) => t.cancel());
        t.pauseQueue.clear();
        t.resumeQueue.clear();
        t.asyncId = t.asyncTo = t.promise = undefined;
        if (e) {
          t.cancelId = e;
        }
      }
      var ze = class extends Error {
        constructor() {
          super(
            "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.",
          );
        }
      };
      var Ne = class extends Error {
        constructor() {
          super("SkipAnimationSignal");
        }
      };
      var We = (t) => t instanceof qe;
      var Ue = 1;
      var qe = class extends At {
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
          return P.to(this, t);
        }
        interpolate(...t) {
          Wt(
            `${zt}The "interpolate" function is deprecated in v9 (use "to" instead)`,
          );
          return P.to(this, t);
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
            W.sort(this);
          }
          Et(this, {
            type: "priority",
            parent: this,
            priority: t,
          });
        }
      };
      var Xe = Symbol.for("SpringPhase");
      var Ke = (t) => (t[Xe] & 1) > 0;
      var He = (t) => (t[Xe] & 2) > 0;
      var Ye = (t) => (t[Xe] & 4) > 0;
      var Ze = (t, e) => (e ? (t[Xe] |= 3) : (t[Xe] &= -3));
      var Ge = (t, e) => (e ? (t[Xe] |= 4) : (t[Xe] &= -5));
      var Qe = class extends qe {
        constructor(t, e) {
          super();
          this.animation = new Ve();
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
          return (!He(this) && !this._state.asyncTo) || Ye(this);
        }
        get goal() {
          return Pt(this.animation.to);
        }
        get velocity() {
          const t = Jt(this);
          if (t instanceof ie) {
            return t.lastVelocity || 0;
          } else {
            return t.getPayload().map((t) => t.lastVelocity || 0);
          }
        }
        get hasAnimated() {
          return Ke(this);
        }
        get isAnimating() {
          return He(this);
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
          const i = this.animation;
          let { toValues: s } = i;
          const { config: o } = i;
          const r = ee(i.to);
          if (!r && St(i.to)) {
            s = k(Pt(i.to));
          }
          i.values.forEach((a, u) => {
            if (a.done) {
              return;
            }
            const l = a.constructor == se ? 1 : r ? r[u].lastPosition : s[u];
            let c = i.immediate;
            let h = l;
            if (!c) {
              h = a.lastPosition;
              if (o.tension <= 0) {
                a.done = true;
                return;
              }
              let e = (a.elapsedTime += t);
              const n = i.fromValues[u];
              const s = (a.v0 ??= E.arr(o.velocity)
                ? o.velocity[u]
                : o.velocity);
              let r;
              const d =
                o.precision ||
                (n == l ? 0.005 : Math.min(1, Math.abs(l - n) * 0.001));
              if (E.und(o.duration)) {
                if (o.decay) {
                  const t = o.decay === true ? 0.998 : o.decay;
                  const i = Math.exp(-(1 - t) * e);
                  h = n + (s / (1 - t)) * (1 - i);
                  c = Math.abs(a.lastPosition - h) <= d;
                  r = s * i;
                } else {
                  r = a.lastVelocity == null ? s : a.lastVelocity;
                  const e = o.restVelocity || d / 10;
                  const i = o.clamp ? 0 : o.bounce;
                  const u = !E.und(i);
                  const p = n == l ? a.v0 > 0 : n < l;
                  let f;
                  let m = false;
                  const g = 1;
                  const v = Math.ceil(t / g);
                  for (
                    let t = 0;
                    t < v &&
                    ((f = Math.abs(r) > e),
                    f || ((c = Math.abs(l - h) <= d), !c));
                    ++t
                  ) {
                    if (u) {
                      m = h == l || h > l == p;
                      if (m) {
                        r = -r * i;
                        h = l;
                      }
                    }
                    r +=
                      ((-o.tension * 0.000001 * (h - l) +
                        -o.friction * 0.001 * r) /
                        o.mass) *
                      g;
                    h += r * g;
                  }
                }
              } else {
                let i = 1;
                if (o.duration > 0) {
                  if (this._memoizedDuration !== o.duration) {
                    this._memoizedDuration = o.duration;
                    if (a.durationProgress > 0) {
                      a.elapsedTime = o.duration * a.durationProgress;
                      e = a.elapsedTime += t;
                    }
                  }
                  i = (o.progress || 0) + e / this._memoizedDuration;
                  i = i > 1 ? 1 : i < 0 ? 0 : i;
                  a.durationProgress = i;
                }
                h = n + o.easing(i) * (l - n);
                r = (h - a.lastPosition) / t;
                c = i == 1;
              }
              a.lastVelocity = r;
              if (Number.isNaN(h)) {
                console.warn("Got NaN while animating:", this);
                c = true;
              }
            }
            if (r && !r[u].done) {
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
          const u = a.getValue();
          if (e) {
            const t = Pt(i.to);
            if ((u === t && !n) || o.decay) {
              if (n && o.decay) {
                this._onChange(u);
              }
            } else {
              a.setValue(t);
              this._onChange(t);
            }
            this._stop();
          } else if (n) {
            this._onChange(u);
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
          if (He(this)) {
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
            je(this, t),
          );
        }
        stop(t) {
          const { to: e } = this.animation;
          this._focus(this.get());
          $e(this._state, t && this._lastCallId);
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
          let { to: n, from: i } = t;
          n = E.obj(n) ? n[e] : n;
          if (n == null || Ee(n)) {
            n = undefined;
          }
          i = E.obj(i) ? i[e] : i;
          if (i == null) {
            i = undefined;
          }
          const s = {
            to: n,
            from: i,
          };
          if (!Ke(this)) {
            if (t.reverse) {
              [n, i] = [i, n];
            }
            i = Pt(i);
            if (E.und(i)) {
              if (!Jt(this)) {
                this._set(n);
              }
            } else {
              this._set(i);
            }
          }
          return s;
        }
        _update({ ...t }, e) {
          const { key: n, defaultProps: i } = this;
          if (t.default) {
            Object.assign(
              i,
              we(t, (t, e) => (/^on/.test(e) ? ge(t, n) : t)),
            );
          }
          rn(this, t, "onProps");
          an(this, "onProps", t, this);
          const s = this._prepareNode(t);
          if (Object.isFrozen(this)) {
            throw Error(
              "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?",
            );
          }
          const o = this._state;
          return Ie(++this._lastCallId, {
            key: n,
            props: t,
            defaultProps: i,
            state: o,
            actions: {
              pause: () => {
                if (!Ye(this)) {
                  Ge(this, true);
                  V(o.pauseQueue);
                  an(
                    this,
                    "onPause",
                    Le(this, Je(this, this.animation.to)),
                    this,
                  );
                }
              },
              resume: () => {
                if (Ye(this)) {
                  Ge(this, false);
                  if (He(this)) {
                    this._resume();
                  }
                  V(o.resumeQueue);
                  an(
                    this,
                    "onResume",
                    Le(this, Je(this, this.animation.to)),
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
          const i = !E.und(t.to);
          const o = !E.und(t.from);
          if (i || o) {
            if (!(e.callId > this._lastToId)) {
              return n(Fe(this));
            }
            this._lastToId = e.callId;
          }
          const { key: r, defaultProps: a, animation: u } = this;
          const { to: l, from: c } = u;
          let { to: h = l, from: d = c } = t;
          if (!!o && !i && (!e.default || !!E.und(h))) {
            h = d;
          }
          if (e.reverse) {
            [h, d] = [d, h];
          }
          const p = !A(d, c);
          if (p) {
            u.from = d;
          }
          d = Pt(d);
          const f = !A(h, l);
          if (f) {
            this._focus(h);
          }
          const m = Ee(e.to);
          const { config: g } = u;
          const { decay: v, velocity: y } = g;
          if (i || o) {
            g.velocity = 0;
          }
          if (e.config && !m) {
            (function (t, e, n) {
              if (n) {
                Oe(
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
              Oe(t, e);
              Object.assign(t, e);
              for (const e in ke) {
                if (t[e] == null) {
                  t[e] = ke[e];
                }
              }
              let { frequency: i, damping: s } = t;
              const { mass: o } = t;
              if (!E.und(i)) {
                if (i < 0.01) {
                  i = 0.01;
                }
                if (s < 0) {
                  s = 0;
                }
                t.tension = Math.pow((Math.PI * 2) / i, 2) * o;
                t.friction = (Math.PI * 4 * s * o) / i;
              }
            })(
              g,
              fe(e.config, r),
              e.config !== a.config ? fe(a.config, r) : undefined,
            );
          }
          let w = Jt(this);
          if (!w || E.und(h)) {
            return n(Le(this, true));
          }
          const x = E.und(e.reset)
            ? o && !e.default
            : !E.und(d) && me(e.reset, r);
          const b = x ? d : this.get();
          const S = Pe(h);
          const P = E.num(S) || E.arr(S) || qt(S);
          const T = !m && (!P || me(a.immediate || e.immediate, r));
          if (f) {
            const t = le(h);
            if (t !== w.constructor) {
              if (!T) {
                throw Error(
                  `Cannot animate between ${w.constructor.name} and ${t.name}, as the "to" prop suggests`,
                );
              }
              w = this._set(S);
            }
          }
          const M = w.constructor;
          let R = St(h);
          let O = false;
          if (!R) {
            const t = x || (!Ke(this) && p);
            if (f || t) {
              O = A(Pe(b), S);
              R = !O;
            }
            if (
              (!A(u.immediate, T) && !T) ||
              !A(g.decay, v) ||
              !A(g.velocity, y)
            ) {
              R = true;
            }
          }
          if (O && He(this)) {
            if (u.changed && !x) {
              R = true;
            } else if (!R) {
              this._stop(l);
            }
          }
          if (
            !m &&
            ((R || St(l)) &&
              ((u.values = w.getPayload()),
              (u.toValues = St(h) ? null : M == se ? [1] : k(S))),
            u.immediate != T && ((u.immediate = T), T || x || this._set(l)),
            R)
          ) {
            const { onRest: t } = u;
            C(on, (t) => rn(this, e, t));
            const i = Le(this, Je(this, l));
            V(this._pendingCalls, i);
            this._pendingCalls.add(n);
            if (u.changed) {
              s.batchedUpdates(() => {
                u.changed = !x;
                t?.(i, this);
                if (x) {
                  fe(a.onRest, i);
                } else {
                  u.onStart?.(i, this);
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
          } else if (He(this) && !f) {
            this._pendingCalls.add(n);
          } else {
            n(_e(b));
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
            Mt(e, this);
            if (We(e)) {
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
              const i = le(n);
              if (t && t.constructor == i) {
                t.setValue(n);
              } else {
                te(this, i.create(n));
              }
              if (t) {
                s.batchedUpdates(() => {
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
          if (!He(this)) {
            Ze(this, true);
            if (!Ye(this)) {
              this._resume();
            }
          }
        }
        _resume() {
          if (P.skipAnimation) {
            this.finish();
          } else {
            W.start(this);
          }
        }
        _stop(t, e) {
          if (He(this)) {
            Ze(this, false);
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
            const i = e ? Fe(this.get()) : Le(this.get(), Je(this, t ?? n.to));
            V(this._pendingCalls, i);
            if (n.changed) {
              n.changed = false;
              an(this, "onRest", i, this);
            }
          }
        }
      };
      function Je(t, e) {
        const n = Pe(e);
        return A(Pe(t.get()), n);
      }
      function tn(t, e = t.loop, n = t.to) {
        const i = fe(e);
        if (i) {
          const s = i !== true && Se(i);
          const o = (s || t).reverse;
          const r = !s || s.reset;
          return en({
            ...t,
            loop: e,
            default: false,
            pause: undefined,
            to: !o || Ee(n) ? n : undefined,
            from: r ? t.from : undefined,
            reset: r,
            ...s,
          });
        }
      }
      function en(t) {
        const { to: e, from: n } = (t = Se(t));
        const i = new Set();
        if (E.obj(e)) {
          sn(e, i);
        }
        if (E.obj(n)) {
          sn(n, i);
        }
        t.keys = i.size ? Array.from(i) : null;
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
        M(t, (t, n) => t != null && e.add(n));
      }
      var on = ["onStart", "onRest", "onChange", "onPause", "onResume"];
      function rn(t, e, n) {
        t.animation[n] = e[n] !== ve(e, n) ? ge(e[n], t.key) : undefined;
      }
      function an(t, e, ...n) {
        t.animation[e]?.(...n);
        t.defaultProps[e]?.(...n);
      }
      var un = ["onStart", "onChange", "onRest"];
      var ln = 1;
      var cn = class {
        constructor(t, e) {
          this.id = ln++;
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
            C(k(e), (e) => n[e].stop(!!t));
          } else {
            $e(this._state, this._lastAsyncId);
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
            C(k(t), (t) => e[t].pause());
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
            C(k(t), (t) => e[t].resume());
          }
          return this;
        }
        each(t) {
          M(this.springs, t);
        }
        _onFrame() {
          const { onStart: t, onChange: e, onRest: n } = this._events;
          const i = this._active.size > 0;
          const s = this._changed.size > 0;
          if ((i && !this._started) || (s && !this._started)) {
            this._started = true;
            R(t, ([t, e]) => {
              e.value = this.get();
              t(e, this, this._item);
            });
          }
          const o = !i && this._started;
          const r = s || (o && n.size) ? this.get() : null;
          if (s && e.size) {
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
          s.onFrame(this._onFrame);
        }
      };
      function hn(t, e) {
        return Promise.all(e.map((e) => dn(t, e))).then((e) => je(t, e));
      }
      async function dn(t, e, n) {
        const { keys: i, to: o, from: r, loop: a, onRest: u, onResolve: l } = e;
        const c = E.obj(e.default) && e.default;
        if (a) {
          e.loop = false;
        }
        if (o === false) {
          e.to = null;
        }
        if (r === false) {
          e.from = null;
        }
        const h = E.arr(o) || E.fun(o) ? o : undefined;
        if (h) {
          e.to = undefined;
          e.onRest = undefined;
          if (c) {
            c.onRest = undefined;
          }
        } else {
          C(un, (n) => {
            const i = e[n];
            if (E.fun(i)) {
              const s = t._events[n];
              e[n] = ({ finished: t, cancelled: e }) => {
                const n = s.get(i);
                if (n) {
                  if (!t) {
                    n.finished = false;
                  }
                  if (e) {
                    n.cancelled = true;
                  }
                } else {
                  s.set(i, {
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
          V(e.pause ? d.pauseQueue : d.resumeQueue);
        } else if (d.paused) {
          e.pause = true;
        }
        const p = (i || Object.keys(t.springs)).map((n) =>
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
                    $e(d, t._lastAsyncId);
                    n(Fe(t));
                  } else {
                    e.onRest = u;
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
        const m = je(t, await Promise.all(p));
        if (a && m.finished && (!n || !m.noop)) {
          const n = tn(e, a, o);
          if (n) {
            vn(t, [n]);
            return dn(t, n, true);
          }
        }
        if (l) {
          s.batchedUpdates(() => l(m, t, t.item));
        }
        return m;
      }
      function pn(t, e) {
        const n = {
          ...t.springs,
        };
        if (e) {
          C(k(e), (t) => {
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
        const n = new Qe();
        n.key = t;
        if (e) {
          Mt(n, e);
        }
        return n;
      }
      function gn(t, e, n) {
        if (e.keys) {
          C(e.keys, (i) => {
            (t[i] ||= n(i))._prepareNode(e);
          });
        }
      }
      function vn(t, e) {
        C(e, (e) => {
          gn(t.springs, e, (e) => mn(e, t));
        });
      }
      var yn;
      var wn;
      var xn = ({ children: t, ...e }) => {
        const n = (0, b.useContext)(bn);
        const i = e.pause || !!n.pause;
        const s = e.immediate || !!n.immediate;
        e = (function (t, e) {
          const [n] = (0, b.useState)(() => ({
            inputs: e,
            result: t(),
          }));
          const i = (0, b.useRef)();
          const s = i.current;
          let o = s;
          if (o) {
            if (
              !Boolean(
                e &&
                o.inputs &&
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
                })(e, o.inputs),
              )
            ) {
              o = {
                inputs: e,
                result: t(),
              };
            }
          } else {
            o = n;
          }
          (0, b.useEffect)(() => {
            i.current = o;
            if (s == n) {
              n.inputs = n.result = undefined;
            }
          }, [o]);
          return o.result;
        })(
          () => ({
            pause: i,
            immediate: s,
          }),
          [i, s],
        );
        const { Provider: o } = bn;
        return b.createElement(
          o,
          {
            value: e,
          },
          t,
        );
      };
      yn = xn;
      wn = {};
      Object.assign(yn, b.createContext(wn));
      yn.Provider._context = yn;
      yn.Consumer._context = yn;
      var bn = yn;
      xn.Provider = bn.Provider;
      xn.Consumer = bn.Consumer;
      var Sn = () => {
        const t = [];
        const e = function (e) {
          Ut(
            `${zt}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
          );
          const i = [];
          C(t, (t, s) => {
            if (E.und(e)) {
              i.push(t.start());
            } else {
              const o = n(e, t, s);
              if (o) {
                i.push(t.start(o));
              }
            }
          });
          return i;
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
            const i = E.fun(e) ? e(n, t) : e;
            if (i) {
              t.set(i);
            }
          });
        };
        e.start = function (e) {
          const n = [];
          C(t, (t, i) => {
            if (E.und(e)) {
              n.push(t.start());
            } else {
              const s = this._getProps(e, t, i);
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
      function Pn(t, e, n) {
        const i = E.fun(e) && e;
        if (i && !n) {
          n = [];
        }
        const s = (0, b.useMemo)(
          () => (i || arguments.length == 3 ? Sn() : undefined),
          [],
        );
        const o = (0, b.useRef)(0);
        const r = Ht();
        const a = (0, b.useMemo)(
          () => ({
            ctrls: [],
            queue: [],
            flush(t, e) {
              const n = pn(t, e);
              if (
                o.current > 0 &&
                !a.queue.length &&
                !Object.keys(n).some((e) => !t.springs[e])
              ) {
                return hn(t, e);
              } else {
                return new Promise((i) => {
                  fn(t, n);
                  a.queue.push(() => {
                    i(hn(t, e));
                  });
                  r();
                });
              }
            },
          }),
          [],
        );
        const u = (0, b.useRef)([...a.ctrls]);
        const l = [];
        const c = Gt(t) || 0;
        function h(t, n) {
          for (let s = t; s < n; s++) {
            const t = (u.current[s] ||= new cn(null, a.flush));
            const n = i ? i(s, t) : e[s];
            if (n) {
              l[s] = nn(n);
            }
          }
        }
        (0, b.useMemo)(() => {
          C(u.current.slice(t, c), (t) => {
            Ae(t, s);
            t.stop(true);
          });
          u.current.length = t;
          h(c, t);
        }, [t]);
        (0, b.useMemo)(() => {
          h(0, Math.min(c, t));
        }, n);
        const d = u.current.map((t, e) => pn(t, l[e]));
        const p = (0, b.useContext)(xn);
        const f = Gt(p);
        const m = p !== f && Te(p);
        Xt(() => {
          o.current++;
          a.ctrls = u.current;
          const { queue: t } = a;
          if (t.length) {
            a.queue = [];
            C(t, (t) => t());
          }
          C(u.current, (t, e) => {
            s?.add(t);
            if (m) {
              t.start({
                default: p,
              });
            }
            const n = l[e];
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
        const g = d.map((t) => ({
          ...t,
        }));
        if (s) {
          return [g, s];
        } else {
          return g;
        }
      }
      function Tn(t, e) {
        const n = E.fun(t);
        const [[i], s] = Pn(1, n ? t : [t], n ? e || [] : e);
        if (n || arguments.length == 2) {
          return [i, s];
        } else {
          return i;
        }
      }
      var En = class extends qe {
        constructor(t, e) {
          super();
          this.source = t;
          this.idle = true;
          this._active = new Set();
          this.calc = dt(...e);
          const n = this._get();
          const i = le(n);
          te(this, i.create(n));
        }
        advance(t) {
          const e = this._get();
          if (!A(e, this.get())) {
            Jt(this).setValue(e);
            this._onChange(e, this.idle);
          }
          if (!this.idle && Cn(this._active)) {
            Mn(this);
          }
        }
        _get() {
          const t = E.arr(this.source)
            ? this.source.map(Pt)
            : k(Pt(this.source));
          return this.calc(...t);
        }
        _start() {
          if (this.idle && !Cn(this._active)) {
            this.idle = false;
            C(ee(this), (t) => {
              t.done = false;
            });
            if (P.skipAnimation) {
              s.batchedUpdates(() => this.advance());
              Mn(this);
            } else {
              W.start(this);
            }
          }
        }
        _attach() {
          let t = 1;
          C(k(this.source), (e) => {
            if (St(e)) {
              Mt(e, this);
            }
            if (We(e)) {
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
          C(k(this.source), (t) => {
            if (St(t)) {
              kt(t, this);
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
            this.priority = k(this.source).reduce(
              (t, e) => Math.max(t, (We(e) ? e.priority : 0) + 1),
              0,
            );
          }
        }
      };
      function An(t) {
        return t.idle !== false;
      }
      function Cn(t) {
        return !t.size || Array.from(t).every(An);
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
      P.assign({
        createStringInterpolator: $t,
        to: (t, e) => new En(t, e),
      });
      W.advance;
      var kn = n(6028);
      var Rn = /^--/;
      function On(t, e) {
        if (e == null || typeof e == "boolean" || e === "") {
          return "";
        } else if (
          typeof e != "number" ||
          e === 0 ||
          Rn.test(t) ||
          (Vn.hasOwnProperty(t) && Vn[t])
        ) {
          return ("" + e).trim();
        } else {
          return e + "px";
        }
      }
      var Dn = {};
      var Vn = {
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
      Vn = Object.keys(Vn).reduce((t, e) => {
        In.forEach(
          (n) =>
            (t[
              ((t, e) => t + e.charAt(0).toUpperCase() + e.substring(1))(n, e)
            ] = t[e]),
        );
        return t;
      }, Vn);
      var jn = /^(matrix|translate|scale|rotate|skew)/;
      var _n = /^(translate)/;
      var Ln = /^(rotate|skew)/;
      var Fn = (t, e) => (E.num(t) && t !== 0 ? t + e : t);
      var Bn = (t, e) =>
        E.arr(t)
          ? t.every((t) => Bn(t, e))
          : E.num(t)
            ? t === e
            : parseFloat(t) === e;
      var $n = class extends re {
        constructor({ x: t, y: e, z: n, ...i }) {
          const s = [];
          const o = [];
          if (t || e || n) {
            s.push([t || 0, e || 0, n || 0]);
            o.push((t) => [
              `translate3d(${t.map((t) => Fn(t, "px")).join(",")})`,
              Bn(t, 0),
            ]);
          }
          M(i, (t, e) => {
            if (e === "transform") {
              s.push([t || ""]);
              o.push((t) => [t, t === ""]);
            } else if (jn.test(e)) {
              delete i[e];
              if (E.und(t)) {
                return;
              }
              const n = _n.test(e) ? "px" : Ln.test(e) ? "deg" : "";
              s.push(k(t));
              o.push(
                e === "rotate3d"
                  ? ([t, e, i, s]) => [
                      `rotate3d(${t},${e},${i},${Fn(s, n)})`,
                      Bn(s, 0),
                    ]
                  : (t) => [
                      `${e}(${t.map((t) => Fn(t, n)).join(",")})`,
                      Bn(t, e.startsWith("scale") ? 1 : 0),
                    ],
              );
            }
          });
          if (s.length) {
            i.transform = new zn(s, o);
          }
          super(i);
        }
      };
      var zn = class extends At {
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
          C(this.inputs, (n, i) => {
            const s = Pt(n[0]);
            const [o, r] = this.transforms[i](E.arr(s) ? s : n.map(Pt));
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
            C(this.inputs, (t) => C(t, (t) => St(t) && Mt(t, this)));
          }
        }
        observerRemoved(t) {
          if (t == 0) {
            C(this.inputs, (t) => C(t, (t) => St(t) && kt(t, this)));
          }
        }
        eventObserved(t) {
          if (t.type == "change") {
            this._value = null;
          }
          Et(this, t);
        }
      };
      P.assign({
        batchedUpdates: kn.unstable_batchedUpdates,
        createStringInterpolator: $t,
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
      var Nn = ((
        t,
        {
          applyAnimatedValues: e = () => false,
          createAnimatedStyle: n = (t) => new re(t),
          getComponentProps: i = (t) => t,
        } = {},
      ) => {
        const s = {
          applyAnimatedValues: e,
          createAnimatedStyle: n,
          getComponentProps: i,
        };
        const o = (t) => {
          const e = pe(t) || "Anonymous";
          (t = E.str(t)
            ? (o[t] ||= ce(t, s))
            : (t[de] ||= ce(t, s))).displayName = `Animated(${e})`;
          return t;
        };
        M(t, (e, n) => {
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
              style: i,
              children: s,
              scrollTop: o,
              scrollLeft: r,
              viewBox: a,
              ...u
            } = e;
            const l = Object.values(u);
            const c = Object.keys(u).map((e) =>
              n || t.hasAttribute(e)
                ? e
                : (Dn[e] ||= e.replace(
                    /([A-Z])/g,
                    (t) => "-" + t.toLowerCase(),
                  )),
            );
            if (s !== undefined) {
              t.textContent = s;
            }
            for (const e in i) {
              if (i.hasOwnProperty(e)) {
                const n = On(e, i[e]);
                if (Rn.test(e)) {
                  t.style.setProperty(e, n);
                } else {
                  t.style[e] = n;
                }
              }
            }
            c.forEach((e, n) => {
              t.setAttribute(e, l[n]);
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
          createAnimatedStyle: (t) => new $n(t),
          getComponentProps: ({ scrollTop: t, scrollLeft: e, ...n }) => n,
        },
      ).animated;
    },
    70107: function (t, e, n) {
      n.d(e, {
        hO: () => T,
        MG: () => P,
      });
      var i = n(3891);
      var s = n(6028);
      function o(t, e, n) {
        let i;
        let s = n.initialDeps ?? [];
        return () => {
          var o;
          var r;
          var a;
          var u;
          let l;
          if (n.key && ((o = n.debug) == null ? undefined : o.call(n))) {
            l = Date.now();
          }
          const c = t();
          if (c.length === s.length && !c.some((t, e) => s[e] !== t)) {
            return i;
          }
          let h;
          s = c;
          if (n.key && ((r = n.debug) == null ? undefined : r.call(n))) {
            h = Date.now();
          }
          i = e(...c);
          if (n.key && ((a = n.debug) == null ? undefined : a.call(n))) {
            const t = Math.round((Date.now() - l) * 100) / 100;
            const e = Math.round((Date.now() - h) * 100) / 100;
            const i = e / 16;
            const s = (t, e) => {
              for (t = String(t); t.length < e; ) {
                t = " " + t;
              }
              return t;
            };
            console.info(
              `%c⏱ ${s(e, 5)} /${s(t, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - i * 120, 120))}deg 100% 31%);`,
              n == null ? undefined : n.key,
            );
          }
          if ((u = n == null ? undefined : n.onChange) != null) {
            u.call(n, i);
          }
          return i;
        };
      }
      function r(t, e) {
        if (t === undefined) {
          throw new Error("Unexpected undefined" + (e ? `: ${e}` : ""));
        }
        return t;
      }
      const a = (t, e, n) => {
        let i;
        return function (...s) {
          t.clearTimeout(i);
          i = t.setTimeout(() => e.apply(this, s), n);
        };
      };
      const u = (t) => t;
      const l = (t) => {
        const e = Math.max(t.startIndex - t.overscan, 0);
        const n = Math.min(t.endIndex + t.overscan, t.count - 1);
        const i = [];
        for (let t = e; t <= n; t++) {
          i.push(t);
        }
        return i;
      };
      const c = (t, e) => {
        const n = t.scrollElement;
        if (!n) {
          return;
        }
        const i = t.targetWindow;
        if (!i) {
          return;
        }
        const s = (t) => {
          const { width: n, height: i } = t;
          e({
            width: Math.round(n),
            height: Math.round(i),
          });
        };
        s(n.getBoundingClientRect());
        if (!i.ResizeObserver) {
          return () => {};
        }
        const o = new i.ResizeObserver((t) => {
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
        const i = () => {
          e({
            width: n.innerWidth,
            height: n.innerHeight,
          });
        };
        i();
        n.addEventListener("resize", i, h);
        return () => {
          n.removeEventListener("resize", i);
        };
      };
      const p = typeof window == "undefined" || "onscrollend" in window;
      const f = (t, e) => {
        const n = t.scrollElement;
        if (!n) {
          return;
        }
        const i = t.targetWindow;
        if (!i) {
          return;
        }
        let s = 0;
        const o = p
          ? () => {}
          : a(
              i,
              () => {
                e(s, false);
              },
              t.options.isScrollingResetDelay,
            );
        const r = (i) => () => {
          s = n[t.options.horizontal ? "scrollLeft" : "scrollTop"];
          o();
          e(s, i);
        };
        const u = r(true);
        const l = r(false);
        l();
        n.addEventListener("scroll", u, h);
        n.addEventListener("scrollend", l, h);
        return () => {
          n.removeEventListener("scroll", u);
          n.removeEventListener("scrollend", l);
        };
      };
      const m = (t, e) => {
        const n = t.scrollElement;
        if (!n) {
          return;
        }
        const i = t.targetWindow;
        if (!i) {
          return;
        }
        let s = 0;
        const o = p
          ? () => {}
          : a(
              i,
              () => {
                e(s, false);
              },
              t.options.isScrollingResetDelay,
            );
        const r = (i) => () => {
          s = n[t.options.horizontal ? "scrollX" : "scrollY"];
          o();
          e(s, i);
        };
        const u = r(true);
        const l = r(false);
        l();
        n.addEventListener("scroll", u, h);
        n.addEventListener("scrollend", l, h);
        return () => {
          n.removeEventListener("scroll", u);
          n.removeEventListener("scrollend", l);
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
      const v = (t, { adjustments: e = 0, behavior: n }, i) => {
        var s;
        var o;
        const r = t + e;
        if (
          (o = (s = i.scrollElement) == null ? undefined : s.scrollTo) != null
        ) {
          o.call(s, {
            [i.options.horizontal ? "left" : "top"]: r,
            behavior: n,
          });
        }
      };
      const y = (t, { adjustments: e = 0, behavior: n }, i) => {
        var s;
        var o;
        const r = t + e;
        if (
          (o = (s = i.scrollElement) == null ? undefined : s.scrollTo) != null
        ) {
          o.call(s, {
            [i.options.horizontal ? "left" : "top"]: r,
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
              getItemKey: u,
              rangeExtractor: l,
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
            var i;
            const { startIndex: s, endIndex: o } = this.range ?? {
              startIndex: undefined,
              endIndex: undefined,
            };
            const r = this.calculateRange();
            if (
              t ||
              s !== (r == null ? undefined : r.startIndex) ||
              o !== (r == null ? undefined : r.endIndex)
            ) {
              if ((i = (n = this.options).onChange) != null) {
                i.call(n, this, e);
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
            const i = new Map();
            for (let s = e - 1; s >= 0; s--) {
              const e = t[s];
              if (n.has(e.lane)) {
                continue;
              }
              const o = i.get(e.lane);
              if (o == null || e.end > o.end) {
                i.set(e.lane, e);
              } else if (e.end < o.end) {
                n.set(e.lane, true);
              }
              if (n.size === this.options.lanes) {
                break;
              }
            }
            if (i.size === this.options.lanes) {
              return Array.from(i.values()).sort((t, e) =>
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
            (t, e, n, i, s) => {
              this.pendingMeasuredCacheIndexes = [];
              return {
                count: t,
                paddingStart: e,
                scrollMargin: n,
                getItemKey: i,
                enabled: s,
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
                getItemKey: i,
                enabled: s,
              },
              o,
            ) => {
              var r;
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
              const u = this.measurementsCache.slice(0, a);
              for (let s = a; s < t; s++) {
                let t =
                  (r = this.measurementsCache[s]) == null
                    ? undefined
                    : r.measureElement;
                t ||= (t) => {
                  const e = i(s);
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
                const a = i(s);
                const l =
                  this.options.lanes === 1
                    ? u[s - 1]
                    : this.getFurthestMeasurement(u, s);
                const c = l ? l.end + this.options.gap : e + n;
                const h = o.get(a);
                const d =
                  typeof h == "number" ? h : this.options.estimateSize(s);
                const p = c + d;
                const f = l ? l.lane : s % this.options.lanes;
                u[s] = {
                  index: s,
                  start: c,
                  size: d,
                  end: p,
                  key: a,
                  lane: f,
                  measureElement: t,
                };
              }
              this.measurementsCache = u;
              return u;
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
                      const i = t.length - 1;
                      const s = (e) => t[e].start;
                      const o = x(0, i, s, n);
                      let r = o;
                      while (r < i && t[r].end < n + e) {
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
            (t, e, n, i) =>
              e === null
                ? []
                : t({
                    startIndex: e.startIndex,
                    endIndex: e.endIndex,
                    overscan: n,
                    count: i,
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
            const i = this.getMeasurements()[n];
            if (!i || !t.isConnected) {
              this.elementsCache.forEach((e, n) => {
                if (e === t) {
                  this.observer.unobserve(t);
                  this.elementsCache.delete(n);
                }
              });
              return;
            }
            const s = this.elementsCache.get(i.key);
            if (s !== t) {
              if (s) {
                this.observer.unobserve(s);
              }
              this.observer.observe(t);
              this.elementsCache.set(i.key, t);
            }
            this.resizeItem(n, this.options.measureElement(t, e, this));
          };
          this.resizeItem = (t, e) => {
            const n = this.getMeasurements()[t];
            if (!n) {
              return;
            }
            const i = e - (this.itemSizeCache.get(n.key) ?? n.size);
            if (i !== 0) {
              if (
                this.shouldAdjustScrollPositionOnItemSizeChange !== undefined
                  ? this.shouldAdjustScrollPositionOnItemSizeChange(n, i, this)
                  : n.start < this.getScrollOffset() + this.scrollAdjustments
              ) {
                this._scrollToOffset(this.getScrollOffset(), {
                  adjustments: (this.scrollAdjustments += i),
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
              for (let i = 0, s = t.length; i < s; i++) {
                const s = e[t[i]];
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
              return r(e[x(0, e.length - 1, (t) => r(e[t]).start, t)]);
            }
          };
          this.getOffsetForAlignment = (t, e) => {
            const n = this.getSize();
            const i = this.getScrollOffset();
            if (e === "auto") {
              e = t <= i ? "start" : t >= i + n ? "end" : "start";
            }
            if (e !== "start") {
              if (e === "end") {
                t -= n;
              } else if (e === "center") {
                t -= n / 2;
              }
            }
            const s = this.options.horizontal ? "scrollWidth" : "scrollHeight";
            const o =
              (this.scrollElement
                ? "document" in this.scrollElement
                  ? this.scrollElement.document.documentElement[s]
                  : this.scrollElement[s]
                : 0) - n;
            return Math.max(Math.min(o, t), 0);
          };
          this.getOffsetForIndex = (t, e = "auto") => {
            t = Math.max(0, Math.min(t, this.options.count - 1));
            const n = this.getMeasurements()[t];
            if (!n) {
              return;
            }
            const i = this.getSize();
            const s = this.getScrollOffset();
            if (e === "auto") {
              if (n.end >= s + i - this.options.scrollPaddingEnd) {
                e = "end";
              } else {
                if (!(n.start <= s + this.options.scrollPaddingStart)) {
                  return [s, e];
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
            const i = this.getOffsetForIndex(t, e);
            if (!i) {
              return;
            }
            const [s, o] = i;
            this._scrollToOffset(s, {
              adjustments: undefined,
              behavior: n,
            });
            if (n !== "smooth" && this.isDynamicMode() && this.targetWindow) {
              this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                this.scrollToIndexTimeoutId = null;
                if (this.elementsCache.has(this.options.getItemKey(t))) {
                  const [s] = r(this.getOffsetForIndex(t, o));
                  e = s;
                  i = this.getScrollOffset();
                  if (!(Math.abs(e - i) < 1)) {
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
                var i;
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
      const x = (t, e, n, i) => {
        while (t <= e) {
          const s = ((t + e) / 2) | 0;
          const o = n(s);
          if (o < i) {
            t = s + 1;
          } else {
            if (!(o > i)) {
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
      const b =
        typeof document != "undefined" ? i.useLayoutEffect : i.useEffect;
      function S(t) {
        const e = i.useReducer(() => ({}), {})[1];
        const n = {
          ...t,
          onChange: (n, i) => {
            var o;
            if (i) {
              (0, s.flushSync)(e);
            } else {
              e();
            }
            if ((o = t.onChange) != null) {
              o.call(t, n, i);
            }
          },
        };
        const [o] = i.useState(() => new w(n));
        o.setOptions(n);
        i.useEffect(() => o._didMount(), []);
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
    3428: function (t, e, n) {
      n.d(e, {
        ZP: () => w,
      });
      var i = n(29367);
      function s(t, e, n, i, s, o, r) {
        try {
          var a = t[o](r);
          var u = a.value;
        } catch (t) {
          n(t);
          return;
        }
        if (a.done) {
          e(u);
        } else {
          Promise.resolve(u).then(i, s);
        }
      }
      function o(t) {
        return function () {
          var e = this;
          var n = arguments;
          return new Promise(function (i, o) {
            var r = t.apply(e, n);
            function a(t) {
              s(r, i, o, a, u, "next", t);
            }
            function u(t) {
              s(r, i, o, a, u, "throw", t);
            }
            a(undefined);
          });
        };
      }
      function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          if (e) {
            i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            });
          }
          n.push.apply(n, i);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e] ?? {};
          if (e % 2) {
            r(Object(n), true).forEach(function (e) {
              u(t, e, n[e]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
          } else {
            r(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e),
              );
            });
          }
        }
        return t;
      }
      function u(t, e, n) {
        if (e in t) {
          Object.defineProperty(t, e, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          t[e] = n;
        }
        return t;
      }
      var l = "axios-retry";
      function c(t) {
        return (
          !t.response && Boolean(t.code) && t.code !== "ECONNABORTED" && i(t)
        );
      }
      var h = ["get", "head", "options"];
      var d = h.concat(["put", "delete"]);
      function p(t) {
        return (
          t.code !== "ECONNABORTED" &&
          (!t.response ||
            (t.response.status >= 500 && t.response.status <= 599))
        );
      }
      function f(t) {
        return !!t.config && p(t) && d.indexOf(t.config.method) !== -1;
      }
      function m(t) {
        return c(t) || f(t);
      }
      function g() {
        return 0;
      }
      function v(t) {
        var e = t[l] || {};
        e.retryCount = e.retryCount || 0;
        t[l] = e;
        return e;
      }
      function y() {
        return (y = o(function* (t, e, n, i) {
          var s = n.retryCount < t && e(i);
          if (typeof s == "object") {
            try {
              return (yield s) !== false;
            } catch (t) {
              return false;
            }
          }
          return s;
        })).apply(this, arguments);
      }
      function w(t, e) {
        t.interceptors.request.use((t) => {
          v(t).lastRequestTime = Date.now();
          return t;
        });
        t.interceptors.response.use(
          null,
          (function () {
            var n = o(function* (n) {
              var { config: i } = n;
              if (!i) {
                return Promise.reject(n);
              }
              var {
                retries: s = 3,
                retryCondition: o = m,
                retryDelay: r = g,
                shouldResetTimeout: u = false,
                onRetry: c = () => {},
              } = (function (t, e) {
                return a(a({}, e), t[l]);
              })(i, e);
              var h = v(i);
              if (
                yield (function (t, e, n, i) {
                  return y.apply(this, arguments);
                })(s, o, h, n)
              ) {
                h.retryCount += 1;
                var d = r(h.retryCount, n);
                (function (t, e) {
                  if (t.defaults.agent === e.agent) {
                    delete e.agent;
                  }
                  if (t.defaults.httpAgent === e.httpAgent) {
                    delete e.httpAgent;
                  }
                  if (t.defaults.httpsAgent === e.httpsAgent) {
                    delete e.httpsAgent;
                  }
                })(t, i);
                if (!u && i.timeout && h.lastRequestTime) {
                  var p = Date.now() - h.lastRequestTime;
                  i.timeout = Math.max(i.timeout - p - d, 1);
                }
                i.transformRequest = [(t) => t];
                c(h.retryCount, n, i);
                return new Promise((e) => setTimeout(() => e(t(i)), d));
              }
              return Promise.reject(n);
            });
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
        );
      }
      w.isNetworkError = c;
      w.isSafeRequestError = function (t) {
        return !!t.config && p(t) && h.indexOf(t.config.method) !== -1;
      };
      w.isIdempotentRequestError = f;
      w.isNetworkOrIdempotentRequestError = m;
      w.exponentialDelay = function (t = 0) {
        var e = Math.pow(2, t) * 100;
        return e + e * 0.2 * Math.random();
      };
      w.isRetryableError = p;
    },
    38348: function (t, e, n) {
      n.d(e, {
        mG: () => i,
      });
      function i(t, e, n, i) {
        return new (n ||= Promise)(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var e;
            if (t.done) {
              s(t.value);
            } else {
              ((e = t.value),
              e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  })).then(r, a);
            }
          }
          u((i = i.apply(t, e || [])).next());
        });
      }
      Object.create;
      Object.create;
    },
    76961: function (t, e, n) {
      n.d(e, {
        j: () => K,
      });
      class i {
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
        for (let i = 0; i < t.length; i++) {
          const s = t[i][e];
          if (s !== null && s > n) {
            n = s;
          }
        }
        return n;
      }
      class o extends i {
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
      }
      var r = n(25013);
      var a = n(40187);
      var u = n(71519);
      var l = n(20479);
      var c = n(65399);
      var h = n(54293);
      var d = n(45875);
      var p = n(15244);
      var f = n(26975);
      var m = n(61209);
      function g(t, e) {
        if ((0, m.N)(t)) {
          return t[
            ((t, e, n) => {
              const i = e - t;
              return ((((n - t) % i) + i) % i) + t;
            })(0, t.length, e)
          ];
        } else {
          return t;
        }
      }
      var v = n(66789);
      var y = n(6419);
      function w(t) {
        return typeof t == "object" && !Array.isArray(t);
      }
      function x(t, e, n, i) {
        if (typeof t == "string" && w(e)) {
          return (0, y.I)(t, n, i);
        } else if (t instanceof NodeList) {
          return Array.from(t);
        } else if (Array.isArray(t)) {
          return t;
        } else {
          return [t];
        }
      }
      function b(t, e, n) {
        return t * (e + 1);
      }
      function S(t, e, n, i) {
        if (typeof e == "number") {
          return e;
        } else if (e.startsWith("-") || e.startsWith("+")) {
          return Math.max(0, t + parseFloat(e));
        } else if (e === "<") {
          return n;
        } else if (e.startsWith("<")) {
          return Math.max(0, n + parseFloat(e.slice(1)));
        } else {
          return i.get(e) ?? t;
        }
      }
      var P = n(55153);
      function T(t, e, n, i, s, o) {
        (function (t, e, n) {
          for (let i = 0; i < t.length; i++) {
            const s = t[i];
            if (s.at > e && s.at < n) {
              (0, r.cl)(t, s);
              i--;
            }
          }
        })(t, s, o);
        for (let r = 0; r < e.length; r++) {
          t.push({
            value: e[r],
            at: (0, P.t)(s, o, i[r]),
            easing: g(n, r),
          });
        }
      }
      function E(t, e) {
        for (let n = 0; n < t.length; n++) {
          t[n] = t[n] / (e + 1);
        }
      }
      function A(t, e) {
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
      function k(t) {
        if (Array.isArray(t)) {
          return t;
        } else {
          return [t];
        }
      }
      function R(t, e) {
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
      const O = (t) => typeof t == "number";
      const D = (t) => t.every(O);
      var V = n(54449);
      var I = n(4516);
      var j = n(59634);
      var _ = n(30038);
      var L = n(3622);
      var F = n(95398);
      var B = n(26967);
      class $ extends B.l {
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
      var z = n(65504);
      function N(t) {
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
        const n = (0, j.v)(t) && !(0, _.r)(t) ? new z.e(e) : new L.W(e);
        n.mount(t);
        V.R.set(t, n);
      }
      function W(t) {
        const e = new $({
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
        V.R.set(t, e);
      }
      var U = n(59349);
      function q(t, e, n, i) {
        const s = [];
        if (
          (function (t, e) {
            return (
              (0, d.i)(t) ||
              typeof t == "number" ||
              (typeof t == "string" && !w(e))
            );
          })(t, e)
        ) {
          s.push((0, U.D)(t, (w(e) && e.default) || e, (n && n.default) || n));
        } else {
          const o = x(t, e, i);
          const r = o.length;
          (0, f.k)(
            Boolean(r),
            "No valid elements provided.",
            "no-valid-elements",
          );
          for (let t = 0; t < r; t++) {
            const i = o[t];
            (0, f.k)(
              i !== null,
              "You're trying to perform an animation on null. Ensure that selectors are correctly finding elements and refs are correctly hydrated.",
              "animate-null",
            );
            const a = i instanceof Element ? N : W;
            if (!V.R.has(i)) {
              a(i);
            }
            const u = V.R.get(i);
            const l = {
              ...n,
            };
            if ("delay" in l && typeof l.delay == "function") {
              l.delay = l.delay(t, r);
            }
            s.push(
              ...(0, I.w)(
                u,
                {
                  ...e,
                  transition: l,
                },
                {},
              ),
            );
          }
        }
        return s;
      }
      function X(t, e, n) {
        const i = [];
        const s = (function (
          t,
          { defaultTransition: e = {}, ...n } = {},
          i,
          s,
        ) {
          const o = e.duration || 0.3;
          const r = new Map();
          const a = new Map();
          const m = {};
          const y = new Map();
          let w = 0;
          let P = 0;
          let O = 0;
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            if (typeof r == "string") {
              y.set(r, P);
              continue;
            }
            if (!Array.isArray(r)) {
              y.set(r.name, S(P, r.at, w, y));
              continue;
            }
            let [v, A, V = {}] = r;
            if (V.at !== undefined) {
              P = S(P, V.at, w, y);
            }
            let I = 0;
            const j = (t, n, i, r = 0, a = 0) => {
              const d = k(t);
              const {
                delay: m = 0,
                times: v = (0, u.Y)(d),
                type: y = "keyframes",
                repeat: w,
                repeatType: x,
                repeatDelay: S = 0,
                ...A
              } = n;
              let { ease: C = e.ease || "easeOut", duration: M } = n;
              const R = typeof m == "function" ? m(r, a) : m;
              const V = d.length;
              const j = (0, l.x)(y) ? y : s?.[y || "keyframes"];
              if (V <= 2 && j) {
                let t = 100;
                if (V === 2 && D(d)) {
                  const e = d[1] - d[0];
                  t = Math.abs(e);
                }
                const e = {
                  ...A,
                };
                if (M !== undefined) {
                  e.duration = (0, p.w)(M);
                }
                const n = (0, c.S)(e, t, j);
                C = n.ease;
                M = n.duration;
              }
              M ??= o;
              const _ = P + R;
              if (v.length === 1 && v[0] === 0) {
                v[1] = 1;
              }
              const L = v.length - d.length;
              if (L > 0) {
                (0, h.c)(v, L);
              }
              if (d.length === 1) {
                d.unshift(null);
              }
              if (w) {
                (0, f.k)(
                  w < 20,
                  "Repeat count too high, must be less than 20",
                  "repeat-count-high",
                );
                M = b(M, w);
                const t = [...d];
                const e = [...v];
                C = Array.isArray(C) ? [...C] : [C];
                const n = [...C];
                for (let i = 0; i < w; i++) {
                  d.push(...t);
                  for (let s = 0; s < t.length; s++) {
                    v.push(e[s] + (i + 1));
                    C.push(s === 0 ? "linear" : g(n, s - 1));
                  }
                }
                E(v, w);
              }
              const F = _ + M;
              T(i, d, C, v, _, F);
              I = Math.max(R + M, I);
              O = Math.max(F, O);
            };
            if ((0, d.i)(v)) {
              j(A, V, M("default", C(v, a)));
            } else {
              const t = x(v, A, i, m);
              const e = t.length;
              for (let n = 0; n < e; n++) {
                const i = C(t[n], a);
                for (const t in A) {
                  j(A[t], R(V, t), M(t, i), n, e);
                }
              }
            }
            w = P;
            P += I;
          }
          a.forEach((t, i) => {
            for (const s in t) {
              const o = t[s];
              o.sort(A);
              const a = [];
              const u = [];
              const l = [];
              for (let t = 0; t < o.length; t++) {
                const { at: e, value: n, easing: i } = o[t];
                a.push(n);
                u.push((0, v.Y)(0, O, e));
                l.push(i || "easeOut");
              }
              if (u[0] !== 0) {
                u.unshift(0);
                a.unshift(a[0]);
                l.unshift("easeInOut");
              }
              if (u[u.length - 1] !== 1) {
                u.push(1);
                a.push(null);
              }
              if (!r.has(i)) {
                r.set(i, {
                  keyframes: {},
                  transition: {},
                });
              }
              const c = r.get(i);
              c.keyframes[s] = a;
              c.transition[s] = {
                ...e,
                duration: O,
                ease: l,
                times: u,
                ...n,
              };
            }
          });
          return r;
        })(t, e, n, {
          spring: a.S,
        });
        s.forEach(({ keyframes: t, transition: e }, n) => {
          i.push(...q(n, t, e));
        });
        return i;
      }
      const K = function (t, e, n) {
        let i;
        let s = [];
        a = t;
        if (Array.isArray(a) && a.some(Array.isArray)) {
          s = X(t, e, H);
        } else {
          const { onComplete: o, ...r } = n || {};
          if (typeof o == "function") {
            i = o;
          }
          s = q(t, e, r, H);
        }
        var a;
        const u = new o(s);
        if (i) {
          u.finished.then(i);
        }
        if (H) {
          H.animations.push(u);
          u.finished.then(() => {
            (0, r.cl)(H.animations, u);
          });
        }
        return u;
      };
      var H;
    },
    59349: function (t, e, n) {
      n.d(e, {
        D: () => r,
      });
      var i = n(45875);
      var s = n(17802);
      var o = n(20284);
      function r(t, e, n) {
        const r = (0, i.i)(t) ? t : (0, s.BX)(t);
        r.start((0, o.v)("", r, e, n));
        return r.animation;
      }
    },
    20284: function (t, e, n) {
      n.d(e, {
        v: () => xt,
      });
      var i = n(83479);
      function s(t) {
        t.duration = 0;
        t.type = "keyframes";
      }
      var o = n(63594);
      var r = n(60333);
      var a = n(65437);
      var u = n(15244);
      var l = n(35449);
      var c = n(32838);
      var h = n(98029);
      const d = (t) => {
        const e = ({ timestamp: e }) => t(e);
        return {
          start: (t = true) => o.Wi.update(e, t),
          stop: () => (0, o.Pn)(e),
          now: () => (o.w0.isProcessing ? o.w0.timestamp : l.X.now()),
        };
      };
      var p = n(40187);
      var f = n(6445);
      function m({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: i = 325,
        bounceDamping: s = 10,
        bounceStiffness: o = 500,
        modifyTarget: r,
        min: a,
        max: u,
        restDelta: l = 0.5,
        restSpeed: c,
      }) {
        const h = t[0];
        const d = {
          done: false,
          value: h,
        };
        const m = (t) =>
          a === undefined
            ? u
            : u === undefined || Math.abs(a - t) < Math.abs(u - t)
              ? a
              : u;
        let g = n * e;
        const v = h + g;
        const y = r === undefined ? v : r(v);
        if (y !== v) {
          g = y - h;
        }
        const w = (t) => -g * Math.exp(-t / i);
        const x = (t) => y + w(t);
        const b = (t) => {
          const e = w(t);
          const n = x(t);
          d.done = Math.abs(e) <= l;
          d.value = d.done ? y : n;
        };
        let S;
        let P;
        const T = (t) => {
          var e;
          e = d.value;
          if ((a !== undefined && e < a) || (u !== undefined && e > u)) {
            S = t;
            P = (0, p.S)({
              keyframes: [d.value, m(d.value)],
              velocity: (0, f.P)(x, t, d.value),
              damping: s,
              stiffness: o,
              restDelta: l,
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
      function y(t, e, n, i) {
        if (t === e && n === i) {
          return g.Z;
        }
        const s = (e) =>
          (function (t, e, n, i, s) {
            let o;
            let r;
            let a = 0;
            do {
              r = e + (n - e) / 2;
              o = v(r, i, s) - t;
              if (o > 0) {
                n = r;
              } else {
                e = r;
              }
            } while (Math.abs(o) > 1e-7 && ++a < 12);
            return r;
          })(e, 0, 1, t, n);
        return (t) => (t === 0 || t === 1 ? t : v(s(t), e, i));
      }
      const w = y(0.42, 0, 1, 1);
      const x = y(0, 0, 0.58, 1);
      const b = y(0.42, 0, 0.58, 1);
      var S = n(61209);
      var P = n(26975);
      var T = n(27467);
      var E = n(6578);
      const A = y(0.33, 1.53, 0.69, 0.99);
      const C = (0, E.M)(A);
      const M = (0, T.o)(C);
      const k = (t) =>
        (t *= 2) < 1 ? C(t) * 0.5 : (2 - Math.pow(2, (t - 1) * -10)) * 0.5;
      var R = n(37919);
      const O = (t) => Array.isArray(t) && typeof t[0] == "number";
      const D = {
        linear: g.Z,
        easeIn: w,
        easeInOut: b,
        easeOut: x,
        circIn: R.Z7,
        circInOut: R.X7,
        circOut: R.Bn,
        backIn: C,
        backInOut: M,
        backOut: A,
        anticipate: k,
      };
      const V = (t) => {
        if (O(t)) {
          (0, P.k)(
            t.length === 4,
            "Cubic bezier arrays must contain four numerical values.",
            "cubic-bezier-length",
          );
          const [e, n, i, s] = t;
          return y(e, n, i, s);
        }
        if (typeof t == "string") {
          (0, P.k)(
            D[t] !== undefined,
            `Invalid easing type '${t}'`,
            "invalid-easing-type",
          );
          return D[t];
        } else {
          return t;
        }
      };
      var I = n(10959);
      var j = n(71519);
      function _({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut",
      }) {
        const s = (0, S.N)(i) ? i.map(V) : V(i);
        const o = {
          done: false,
          value: e[0],
        };
        const r = (function (t, e) {
          return t.map((t) => t * e);
        })(n && n.length === e.length ? n : (0, j.Y)(e), t);
        const a = (0, I.s)(r, e, {
          ease: Array.isArray(s)
            ? s
            : ((u = e), (l = s), u.map(() => l || b).splice(0, u.length - 1)),
        });
        var u;
        var l;
        return {
          calculatedDuration: t,
          next: (e) => {
            o.value = a(e);
            o.done = e >= t;
            return o;
          },
        };
      }
      var L = n(36989);
      const F = (t) => t !== null;
      function B(t, { repeat: e, repeatType: n = "loop" }, i, s = 1) {
        const o = t.filter(F);
        const r = s < 0 || (e && n !== "loop" && e % 2 == 1) ? 0 : o.length - 1;
        if (r && i !== undefined) {
          return i;
        } else {
          return o[r];
        }
      }
      const $ = {
        decay: m,
        inertia: m,
        tween: _,
        keyframes: _,
        spring: p.S,
      };
      function z(t) {
        if (typeof t.type == "string") {
          t.type = $[t.type];
        }
      }
      class N {
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
      const W = (t) => t / 100;
      class U extends N {
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
            if (t && t.updatedAt !== l.X.now()) {
              this.tick(l.X.now());
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
          z(t);
          const {
            type: e = _,
            repeat: n = 0,
            repeatDelay: i = 0,
            repeatType: s,
            velocity: o = 0,
          } = t;
          let { keyframes: a } = t;
          const u = e || _;
          if (u !== _ && typeof a[0] != "number") {
            this.mixKeyframes = (0, r.z)(W, (0, h.C)(a[0], a[1]));
            a = [0, 100];
          }
          const l = u({
            ...t,
            keyframes: a,
          });
          if (s === "mirror") {
            this.mirroredGenerator = u({
              ...t,
              keyframes: [...a].reverse(),
              velocity: -o,
            });
          }
          if (l.calculatedDuration === null) {
            l.calculatedDuration = (0, L.i)(l);
          }
          const { calculatedDuration: c } = l;
          this.calculatedDuration = c;
          this.resolvedDuration = c + i;
          this.totalDuration = this.resolvedDuration * (n + 1) - i;
          this.generator = l;
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
            totalDuration: i,
            mixKeyframes: s,
            mirroredGenerator: o,
            resolvedDuration: r,
            calculatedDuration: u,
          } = this;
          if (this.startTime === null) {
            return n.next(0);
          }
          const {
            delay: l = 0,
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
            this.startTime = Math.min(t - i / this.speed, this.startTime);
          }
          if (e) {
            this.currentTime = t;
          } else {
            this.updateTime(t);
          }
          const y = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1);
          const w = this.playbackSpeed >= 0 ? y < 0 : y > i;
          this.currentTime = Math.max(y, 0);
          if (this.state === "finished" && this.holdTime === null) {
            this.currentTime = i;
          }
          let x = this.currentTime;
          let b = n;
          if (h) {
            const t = Math.min(this.currentTime, i) / r;
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
          if (s) {
            S.value = s(S.value);
          }
          let { done: P } = S;
          if (!w && u !== null) {
            P =
              this.playbackSpeed >= 0
                ? this.currentTime >= i
                : this.currentTime <= 0;
          }
          const T =
            this.holdTime === null &&
            (this.state === "finished" || (this.state === "running" && P));
          if (T && f !== m) {
            S.value = B(c, this.options, v, this.speed);
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
          return (0, u.X)(this.calculatedDuration);
        }
        get iterationDuration() {
          const { delay: t = 0 } = this.options || {};
          return this.duration + (0, u.X)(t);
        }
        get time() {
          return (0, u.X)(this.currentTime);
        }
        set time(t) {
          t = (0, u.w)(t);
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
          this.updateTime(l.X.now());
          const e = this.playbackSpeed !== t;
          this.playbackSpeed = t;
          if (e) {
            this.time = (0, u.X)(this.currentTime);
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
          this.updateTime(l.X.now());
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
      var X = n(63062);
      function K(t) {
        let e;
        return () => {
          if (e === undefined) {
            e = t();
          }
          return e;
        };
      }
      const H = K(() => window.ScrollTimeline !== undefined);
      var Y = n(27984);
      const Z = {};
      function G(t, e) {
        const n = K(t);
        return () => Z[e] ?? n();
      }
      const Q = G(() => {
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
      var J = n(52486);
      const tt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`;
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
            if (Q()) {
              return (0, J.w)(t, e);
            } else {
              return "ease-out";
            }
          } else if (O(t)) {
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
      function it(
        t,
        e,
        n,
        {
          delay: i = 0,
          duration: s = 300,
          repeat: o = 0,
          repeatType: r = "loop",
          ease: a = "easeOut",
          times: u,
        } = {},
        l = undefined,
      ) {
        const h = {
          [e]: n,
        };
        if (u) {
          h.offset = u;
        }
        const d = nt(a, s);
        if (Array.isArray(d)) {
          h.easing = d;
        }
        if (Y.f.value) {
          c.P.waapi++;
        }
        const p = {
          delay: i,
          duration: s,
          easing: Array.isArray(d) ? "linear" : d,
          fill: "both",
          iterations: o + 1,
          direction: r === "reverse" ? "alternate" : "normal",
        };
        if (l) {
          p.pseudoElement = l;
        }
        const f = t.animate(h, p);
        if (Y.f.value) {
          f.finished.finally(() => {
            c.P.waapi--;
          });
        }
        return f;
      }
      var st = n(20479);
      class ot extends N {
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
            keyframes: i,
            pseudoElement: s,
            allowFlatten: o = false,
            finalKeyframe: r,
            onComplete: a,
          } = t;
          this.isPseudoElement = Boolean(s);
          this.allowFlatten = o;
          this.options = t;
          (0, P.k)(
            typeof t.type != "string",
            'Mini animate() doesn\'t support "type" as a string.',
            "mini-spring",
          );
          const u = (function ({ type: t, ...e }) {
            if ((0, st.x)(t) && Q()) {
              return t.applyToOptions(e);
            } else {
              e.duration ??= 300;
              e.ease ??= "easeOut";
              return e;
            }
          })(t);
          this.animation = it(e, n, i, u, s);
          if (u.autoplay === false) {
            this.animation.pause();
          }
          this.animation.onfinish = () => {
            this.finishedTime = this.time;
            if (!s) {
              const t = B(i, this.options, r, this.speed);
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
          return (0, u.X)(Number(t));
        }
        get iterationDuration() {
          const { delay: t = 0 } = this.options || {};
          return this.duration + (0, u.X)(t);
        }
        get time() {
          return (0, u.X)(Number(this.animation.currentTime) || 0);
        }
        set time(t) {
          this.finishedTime = null;
          this.animation.currentTime = (0, u.w)(t);
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
          if (t && H()) {
            this.animation.timeline = t;
            return g.Z;
          } else {
            return e(this);
          }
        }
      }
      const rt = {
        anticipate: k,
        backInOut: M,
        circInOut: R.X7,
      };
      function at(t) {
        if (typeof t.ease == "string" && t.ease in rt) {
          t.ease = rt[t.ease];
        }
      }
      class ut extends ot {
        constructor(t) {
          at(t);
          z(t);
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
            onComplete: i,
            element: s,
            ...o
          } = this.options;
          if (!e) {
            return;
          }
          if (t !== undefined) {
            e.set(t);
            return;
          }
          const r = new U({
            ...o,
            autoplay: false,
          });
          const a = (0, u.w)(this.finishedTime ?? this.time);
          e.setWithVelocity(r.sample(a - 10).value, r.sample(a).value, 10);
          r.stop();
        }
      }
      var lt = n(28779);
      const ct = (t, e) =>
        e !== "zIndex" &&
        (typeof t == "number" ||
          !!Array.isArray(t) ||
          (typeof t == "string" &&
            (!!lt.P.test(t) || t === "0") &&
            !t.startsWith("url(")));
      const ht = new Set(["opacity", "clipPath", "filter", "transform"]);
      const dt = K(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate"),
      );
      class pt extends N {
        constructor({
          autoplay: t = true,
          delay: e = 0,
          type: n = "keyframes",
          repeat: i = 0,
          repeatDelay: s = 0,
          repeatType: o = "loop",
          keyframes: r,
          name: a,
          motionValue: u,
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
          this.createdAt = l.X.now();
          const d = {
            autoplay: t,
            delay: e,
            type: n,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            name: a,
            motionValue: u,
            element: c,
            ...h,
          };
          const p = c?.KeyframeResolver || X.e;
          this.keyframeResolver = new p(
            r,
            (t, e, n) => this.onKeyframesResolved(t, e, d, !n),
            a,
            u,
            c,
          );
          this.keyframeResolver?.scheduleResolve();
        }
        onKeyframesResolved(t, e, n, i) {
          this.keyframeResolver = undefined;
          const {
            name: o,
            type: r,
            velocity: a,
            delay: u,
            isHandoff: c,
            onUpdate: h,
          } = n;
          this.resolvedAt = l.X.now();
          if (
            !(function (t, e, n, i) {
              const s = t[0];
              if (s === null) {
                return false;
              }
              if (e === "display" || e === "visibility") {
                return true;
              }
              const o = t[t.length - 1];
              const r = ct(s, e);
              const a = ct(o, e);
              (0, P.K)(
                r === a,
                `You are trying to animate ${e} from "${s}" to "${o}". "${r ? o : s}" is not an animatable value.`,
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
                  ((n === "spring" || (0, st.x)(n)) && i))
              );
            })(t, o, r, a)
          ) {
            if (!!q.c.instantAnimations || !u) {
              h?.(B(t, n, e));
            }
            t[0] = t[t.length - 1];
            s(n);
            n.repeat = 0;
          }
          const d = {
            startTime: i
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
                repeatDelay: i,
                repeatType: s,
                damping: o,
                type: r,
              } = t;
              const a = e?.owner?.current;
              if (!(a instanceof HTMLElement)) {
                return false;
              }
              const { onUpdate: u, transformTemplate: l } = e.owner.getProps();
              return (
                dt() &&
                n &&
                ht.has(n) &&
                (n !== "transform" || !l) &&
                !u &&
                !i &&
                s !== "mirror" &&
                o !== 0 &&
                r !== "inertia"
              );
            })(d)
              ? new ut({
                  ...d,
                  element: d.motionValue.owner.current,
                })
              : new U(d);
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
            (0, X.m)();
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
      const vt = {
        type: "keyframes",
        duration: 0.8,
      };
      const yt = {
        type: "keyframes",
        ease: [0.25, 0.1, 0.35, 1],
        duration: 0.3,
      };
      const wt = (t, { keyframes: e }) =>
        e.length > 2
          ? vt
          : mt.G.has(t)
            ? t.startsWith("scale")
              ? {
                  type: "spring",
                  stiffness: 550,
                  damping: e[1] === 0 ? Math.sqrt(550) * 2 : 30,
                  restSpeed: 10,
                }
              : gt
            : yt;
      const xt =
        (t, e, n, r = {}, a, l) =>
        (c) => {
          const h = (0, i.e)(r, t) || {};
          const d = h.delay || r.delay || 0;
          let { elapsed: p = 0 } = r;
          p -= (0, u.w)(d);
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
            element: l ? undefined : a,
          };
          if (
            !(function ({
              when: t,
              delay: e,
              delayChildren: n,
              staggerChildren: i,
              staggerDirection: s,
              repeat: o,
              repeatType: r,
              repeatDelay: a,
              from: u,
              elapsed: l,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(h)
          ) {
            Object.assign(f, wt(t, f));
          }
          f.duration &&= (0, u.w)(f.duration);
          f.repeatDelay &&= (0, u.w)(f.repeatDelay);
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
          f.allowFlatten = !h.type && !h.ease;
          if (m && !l && e.get() !== undefined) {
            const t = (function (t, { repeat: e, repeatType: n = "loop" }, i) {
              const s = t.filter(ft);
              const o = e && n !== "loop" && e % 2 == 1 ? 0 : s.length - 1;
              if (o && i !== undefined) {
                return i;
              } else {
                return s[o];
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
            return new U(f);
          } else {
            return new pt(f);
          }
        };
    },
    4516: function (t, e, n) {
      n.d(e, {
        w: () => f,
      });
      var i = n(83479);
      var s = n(63594);
      var o = n(18011);
      var r = n(17802);
      var a = n(10516);
      var u = n(89654);
      function l(t, e, n) {
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
        const i = t.hasOwnProperty(n) && e[n] !== true;
        e[n] = false;
        return i;
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
          const u = {
            delay: n,
            ...(0, i.e)(m || {}, e),
          };
          const l = r.get();
          if (
            l !== undefined &&
            !r.isAnimating &&
            !Array.isArray(a) &&
            a === l &&
            !u.velocity
          ) {
            continue;
          }
          let f = false;
          if (window.MotionHandoffAnimation) {
            const n = (0, h.s)(t);
            if (n) {
              const t = window.MotionHandoffAnimation(n, e, s.Wi);
              if (t !== null) {
                u.startTime = t;
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
                : u,
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
            s.Wi.update(() => {
              if (g) {
                (function (t, e) {
                  const n = (0, u.x)(t, e);
                  let {
                    transitionEnd: i = {},
                    transition: s = {},
                    ...o
                  } = n || {};
                  o = {
                    ...o,
                    ...i,
                  };
                  for (const e in o) {
                    l(
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
        M: () => i,
      });
      const i = "data-" + (0, n(50638).D)("framerAppearId");
    },
    56796: function (t, e, n) {
      n.d(e, {
        s: () => s,
      });
      var i = n(15793);
      function s(t) {
        return t.props[i.M];
      }
    },
    98922: function (t, e, n) {
      function i(t) {
        return (
          t !== null && typeof t == "object" && typeof t.start == "function"
        );
      }
      n.d(e, {
        H: () => i,
      });
    },
    10516: function (t, e, n) {
      n.d(e, {
        C: () => i,
      });
      const i = (t) => Array.isArray(t);
    },
    9737: function (t, e, n) {
      n.d(e, {
        M: () => x,
      });
      var i = n(4201);
      var s = n(3891);
      var o = n(34172);
      var r = n(78217);
      var a = n(19537);
      var u = n(11717);
      var l = n(80602);
      var c = n(21353);
      function h(t, e) {
        if (typeof t == "function") {
          return t(e);
        }
        if (t != null) {
          t.current = e;
        }
      }
      function d(...t) {
        return s.useCallback(
          (function (...t) {
            return (e) => {
              let n = false;
              const i = t.map((t) => {
                const i = h(t, e);
                if (!n && typeof i == "function") {
                  n = true;
                }
                return i;
              });
              if (n) {
                return () => {
                  for (let e = 0; e < i.length; e++) {
                    const n = i[e];
                    if (typeof n == "function") {
                      n();
                    } else {
                      h(t[e], null);
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
            const n = ((0, l.R)(t) && t.offsetWidth) || 0;
            const i = this.props.sizeRef.current;
            i.height = e.offsetHeight || 0;
            i.width = e.offsetWidth || 0;
            i.top = e.offsetTop;
            i.left = e.offsetLeft;
            i.right = n - i.width - i.left;
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function f({ children: t, isPresent: e, anchorX: n, root: o }) {
        const r = (0, s.useId)();
        const a = (0, s.useRef)(null);
        const u = (0, s.useRef)({
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          right: 0,
        });
        const { nonce: l } = (0, s.useContext)(c._);
        const h = d(a, t?.ref);
        (0, s.useInsertionEffect)(() => {
          const { width: t, height: i, top: s, left: c, right: h } = u.current;
          if (e || !a.current || !t || !i) {
            return;
          }
          const d = n === "left" ? `left: ${c}` : `right: ${h}`;
          a.current.dataset.motionPopId = r;
          const p = document.createElement("style");
          if (l) {
            p.nonce = l;
          }
          const f = o ?? document.head;
          f.appendChild(p);
          if (p.sheet) {
            p.sheet.insertRule(
              `\n          [data-motion-pop-id="${r}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${i}px !important;\n            ${d}px !important;\n            top: ${s}px !important;\n          }\n        `,
            );
          }
          return () => {
            if (f.contains(p)) {
              f.removeChild(p);
            }
          };
        }, [e]);
        return (0, i.jsx)(p, {
          isPresent: e,
          childRef: a,
          sizeRef: u,
          children: s.cloneElement(t, {
            ref: h,
          }),
        });
      }
      const m = ({
        children: t,
        initial: e,
        isPresent: n,
        onExitComplete: o,
        custom: a,
        presenceAffectsLayout: l,
        mode: c,
        anchorX: h,
        root: d,
      }) => {
        const p = (0, r.h)(g);
        const m = (0, s.useId)();
        let v = true;
        let y = (0, s.useMemo)(() => {
          v = false;
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
              if (o) {
                o();
              }
            },
            register: (t) => {
              p.set(t, false);
              return () => p.delete(t);
            },
          };
        }, [n, p, o]);
        if (l && v) {
          y = {
            ...y,
          };
        }
        (0, s.useMemo)(() => {
          p.forEach((t, e) => p.set(e, false));
        }, [n]);
        s.useEffect(() => {
          if (!n && !p.size && o) {
            o();
          }
        }, [n]);
        if (c === "popLayout") {
          t = (0, i.jsx)(f, {
            isPresent: n,
            anchorX: h,
            root: d,
            children: t,
          });
        }
        return (0, i.jsx)(u.O.Provider, {
          value: y,
          children: t,
        });
      };
      function g() {
        return new Map();
      }
      var v = n(14438);
      const y = (t) => t.key || "";
      function w(t) {
        const e = [];
        s.Children.forEach(t, (t) => {
          if ((0, s.isValidElement)(t)) {
            e.push(t);
          }
        });
        return e;
      }
      const x = ({
        children: t,
        custom: e,
        initial: n = true,
        onExitComplete: u,
        presenceAffectsLayout: l = true,
        mode: c = "sync",
        propagate: h = false,
        anchorX: d = "left",
        root: p,
      }) => {
        const [f, g] = (0, v.oO)(h);
        const x = (0, s.useMemo)(() => w(t), [t]);
        const b = h && !f ? [] : x.map(y);
        const S = (0, s.useRef)(true);
        const P = (0, s.useRef)(x);
        const T = (0, r.h)(() => new Map());
        const [E, A] = (0, s.useState)(x);
        const [C, M] = (0, s.useState)(x);
        (0, a.L)(() => {
          S.current = false;
          P.current = x;
          for (let t = 0; t < C.length; t++) {
            const e = y(C[t]);
            if (b.includes(e)) {
              T.delete(e);
            } else if (T.get(e) !== true) {
              T.set(e, false);
            }
          }
        }, [C, b.length, b.join("-")]);
        const k = [];
        if (x !== E) {
          let t = [...x];
          for (let e = 0; e < C.length; e++) {
            const n = C[e];
            const i = y(n);
            if (!b.includes(i)) {
              t.splice(e, 0, n);
              k.push(n);
            }
          }
          if (c === "wait" && k.length) {
            t = k;
          }
          M(w(t));
          A(x);
          return null;
        }
        const { forceRender: R } = (0, s.useContext)(o.p);
        return (0, i.jsx)(i.Fragment, {
          children: C.map((t) => {
            const s = y(t);
            const o = (!h || !!f) && (x === C || b.includes(s));
            return (0, i.jsx)(
              m,
              {
                isPresent: o,
                initial: (!S.current || !!n) && undefined,
                custom: e,
                presenceAffectsLayout: l,
                mode: c,
                root: p,
                onExitComplete: o
                  ? undefined
                  : () => {
                      if (!T.has(s)) {
                        return;
                      }
                      T.set(s, true);
                      let t = true;
                      T.forEach((e) => {
                        if (!e) {
                          t = false;
                        }
                      });
                      if (t) {
                        R?.();
                        M(P.current);
                        if (h) {
                          g?.();
                        }
                        if (u) {
                          u();
                        }
                      }
                    },
                anchorX: d,
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
        oO: () => o,
      });
      var i = n(3891);
      var s = n(11717);
      function o(t = true) {
        const e = (0, i.useContext)(s.O);
        if (e === null) {
          return [true, null];
        }
        const { isPresent: n, onExitComplete: o, register: r } = e;
        const a = (0, i.useId)();
        (0, i.useEffect)(() => {
          if (t) {
            return r(a);
          }
        }, [t]);
        const u = (0, i.useCallback)(() => t && o && o(a), [a, o, t]);
        if (!n && o) {
          return [false, u];
        } else {
          return [true];
        }
      }
    },
    34172: function (t, e, n) {
      n.d(e, {
        p: () => i,
      });
      const i = (0, n(3891).createContext)({});
    },
    21353: function (t, e, n) {
      n.d(e, {
        _: () => i,
      });
      const i = (0, n(3891).createContext)({
        transformPagePoint: (t) => t,
        isStatic: false,
        reducedMotion: "never",
      });
    },
    11717: function (t, e, n) {
      n.d(e, {
        O: () => i,
      });
      const i = (0, n(3891).createContext)(null);
    },
    92131: function (t, e, n) {
      n.d(e, {
        A: () => s,
      });
      const i = {
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
      for (const t in i) {
        s[t] = {
          isEnabled: (e) => i[t].some((t) => !!e[t]),
        };
      }
    },
    99246: function (t, e, n) {
      n.d(e, {
        j: () => o,
      });
      var i = n(50477);
      var s = n(23486);
      function o(t, { layout: e, layoutId: n }) {
        return (
          i.G.has(t) ||
          t.startsWith("origin") ||
          ((e || n !== undefined) && (!!s.P[t] || t === "opacity"))
        );
      }
    },
    74961: function (t, e, n) {
      function i({ top: t, left: e, right: n, bottom: i }) {
        return {
          x: {
            min: e,
            max: n,
          },
          y: {
            min: t,
            max: i,
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
      function o(t, e) {
        if (!e) {
          return t;
        }
        const n = e({
          x: t.left,
          y: t.top,
        });
        const i = e({
          x: t.right,
          y: t.bottom,
        });
        return {
          top: n.y,
          left: n.x,
          bottom: i.y,
          right: i.x,
        };
      }
      n.d(e, {
        d7: () => o,
        i8: () => i,
        z2: () => s,
      });
    },
    80813: function (t, e, n) {
      n.d(e, {
        D2: () => f,
        YY: () => h,
        am: () => d,
        o2: () => u,
        q2: () => o,
      });
      var i = n(55153);
      var s = n(6034);
      function o(t, e, n) {
        return n + e * (t - n);
      }
      function r(t, e, n, i, s) {
        if (s !== undefined) {
          t = o(t, s, i);
        }
        return o(t, n, i) + e;
      }
      function a(t, e = 0, n = 1, i, s) {
        t.min = r(t.min, e, n, i, s);
        t.max = r(t.max, e, n, i, s);
      }
      function u(t, { x: e, y: n }) {
        a(t.x, e.translate, e.scale, e.originPoint);
        a(t.y, n.translate, n.scale, n.originPoint);
      }
      const l = 0.999999999999;
      const c = 1.0000000000001;
      function h(t, e, n, i = false) {
        const o = n.length;
        if (!o) {
          return;
        }
        let r;
        let a;
        e.x = e.y = 1;
        for (let l = 0; l < o; l++) {
          r = n[l];
          a = r.projectionDelta;
          const { visualElement: o } = r.options;
          if (!o || !o.props.style || o.props.style.display !== "contents") {
            if (i && r.options.layoutScroll && r.scroll && r !== r.root) {
              f(t, {
                x: -r.scroll.offset.x,
                y: -r.scroll.offset.y,
              });
            }
            if (a) {
              e.x *= a.x.scale;
              e.y *= a.y.scale;
              u(t, a);
            }
            if (i && (0, s.ud)(r.latestValues)) {
              f(t, r.latestValues);
            }
          }
        }
        if (e.x < c && e.x > l) {
          e.x = 1;
        }
        if (e.y < c && e.y > l) {
          e.y = 1;
        }
      }
      function d(t, e) {
        t.min = t.min + e;
        t.max = t.max + e;
      }
      function p(t, e, n, s, o = 0.5) {
        a(t, e, n, (0, i.t)(t.min, t.max, o), s);
      }
      function f(t, e) {
        p(t.x, e.x, e.scaleX, e.scale, e.originX);
        p(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    95398: function (t, e, n) {
      n.d(e, {
        dO: () => s,
        wc: () => i,
      });
      const i = () => ({
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
        B: () => o,
        P: () => s,
      });
      var i = n(53345);
      const s = {};
      function o(t) {
        for (const e in t) {
          s[e] = t[e];
          if ((0, i.f)(e)) {
            s[e].isCSSVariable = true;
          }
        }
      }
    },
    6034: function (t, e, n) {
      function i(t) {
        return t === undefined || t === 1;
      }
      function s({ scale: t, scaleX: e, scaleY: n }) {
        return !i(t) || !i(e) || !i(n);
      }
      function o(t) {
        return (
          s(t) ||
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
        Lj: () => s,
        ud: () => o,
      });
    },
    10301: function (t, e, n) {
      n.d(e, {
        J: () => o,
        z: () => r,
      });
      var i = n(74961);
      var s = n(80813);
      function o(t, e) {
        return (0, i.i8)((0, i.d7)(t.getBoundingClientRect(), e));
      }
      function r(t, e, n) {
        const i = o(t, n);
        const { scroll: r } = e;
        if (r) {
          (0, s.am)(i.x, r.offset.x);
          (0, s.am)(i.y, r.offset.y);
        }
        return i;
      }
    },
    26967: function (t, e, n) {
      n.d(e, {
        l: () => M,
      });
      var i = n(63062);
      var s = n(35449);
      var o = n(63594);
      var r = n(45875);
      var a = n(50477);
      var u = n(17802);
      var l = n(39178);
      var c = n(28779);
      var h = n(81077);
      var d = n(31024);
      const p = [...h.$, l.$, c.P];
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
            blockInitialAnimation: u,
            visualState: l,
          },
          c = {},
        ) {
          this.current = null;
          this.children = new Set();
          this.isVariantNode = false;
          this.isControllingVariants = false;
          this.shouldReduceMotion = null;
          this.values = new Map();
          this.KeyframeResolver = i.e;
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
              o.Wi.render(this.render, false, true);
            }
          };
          const { latestValues: h, renderState: d } = l;
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
          this.blockInitialAnimation = Boolean(u);
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
          const i = e.on("change", (e) => {
            this.latestValues[t] = e;
            if (this.props.onUpdate) {
              o.Wi.preRender(this.notifyUpdate);
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
            i();
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
          for (t in w.A) {
            const e = w.A[t];
            if (!e) {
              continue;
            }
            const { isEnabled: n, Feature: i } = e;
            if (!this.features[t] && i && n(this.props)) {
              this.features[t] = new i(this);
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
          for (let e = 0; e < C.length; e++) {
            const n = C[e];
            if (this.propEventSubscriptions[n]) {
              this.propEventSubscriptions[n]();
              delete this.propEventSubscriptions[n];
            }
            const i = t["on" + n];
            if (i) {
              this.propEventSubscriptions[n] = this.on(n, i);
            }
          }
          this.prevMotionValues = (function (t, e, n) {
            for (const i in e) {
              const s = e[i];
              const o = n[i];
              if ((0, r.i)(s)) {
                t.addValue(i, s);
              } else if ((0, r.i)(o)) {
                t.addValue(
                  i,
                  (0, u.BX)(s, {
                    owner: t,
                  }),
                );
              } else if (o !== s) {
                if (t.hasValue(i)) {
                  const e = t.getValue(i);
                  if (e.liveStyle === true) {
                    e.jump(s);
                  } else if (!e.hasAnimated) {
                    e.set(s);
                  }
                } else {
                  const e = t.getStaticValue(i);
                  t.addValue(
                    i,
                    (0, u.BX)(e !== undefined ? e : s, {
                      owner: t,
                    }),
                  );
                }
              }
            }
            for (const i in n) {
              if (e[i] === undefined) {
                t.removeValue(i);
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
            n = (0, u.BX)(e === null ? undefined : e, {
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
          var i;
          if (n != null) {
            if (typeof n == "string" && ((0, g.P)(n) || (0, v.W)(n))) {
              n = parseFloat(n);
            } else {
              i = n;
              if (!p.find((0, d.l)(i)) && c.P.test(e)) {
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
            const i = (0, A.o)(this.props, e, this.presenceContext?.custom);
            if (i) {
              n = i[t];
            }
          }
          if (e && n !== undefined) {
            return n;
          }
          const i = this.getBaseTargetFromProps(this.props, t);
          if (i === undefined || (0, r.i)(i)) {
            if (this.initialValues[t] !== undefined && n === undefined) {
              return undefined;
            } else {
              return this.baseTarget[t];
            }
          } else {
            return i;
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
    8678: function (t, e, n) {
      n.d(e, {
        E: () => ci,
      });
      var i = n(3891);
      var s = n(3622);
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
      const u = (t, e) =>
        a(t)
          ? new o.e(e)
          : new s.W(e, {
              allowProjection: t !== i.Fragment,
            });
      var l = n(4201);
      var c = n(34172);
      const h = (0, i.createContext)({
        strict: false,
      });
      var d = n(21353);
      const p = (0, i.createContext)({});
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
        })(t, (0, i.useContext)(p));
        return (0, i.useMemo)(
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
        for (const i in e) {
          if (!(0, y.i)(e[i]) && !(0, w.j)(i, n)) {
            t[i] = e[i];
          }
        }
      }
      function P(t, e) {
        const n = {};
        S(n, t.style || {}, t);
        Object.assign(
          n,
          (function ({ transformTemplate: t }, e) {
            return (0, i.useMemo)(() => {
              const n = {
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {},
              };
              (0, x.r)(n, e, t);
              return Object.assign({}, n.vars, n.style);
            }, [e]);
          })(t, e),
        );
        return n;
      }
      function T(t, e) {
        const n = {};
        const i = P(t, e);
        if (t.drag && t.dragListener !== false) {
          n.draggable = false;
          i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none";
          i.touchAction =
            t.drag === true ? "none" : "pan-" + (t.drag === "x" ? "y" : "x");
        }
        if (
          t.tabIndex === undefined &&
          (t.onTap || t.onTapStart || t.whileTap)
        ) {
          n.tabIndex = 0;
        }
        n.style = i;
        return n;
      }
      var E = n(85670);
      const A = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
        attrs: {},
      });
      var C = n(38399);
      function M(t, e, n, s) {
        const o = (0, i.useMemo)(() => {
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
      let O = (t) => !R(t);
      try {
        if (
          typeof (D = require("@emotion/is-prop-valid").default) == "function"
        ) {
          O = (t) => (t.startsWith("on") ? !R(t) : D(t));
        }
      } catch {}
      var D;
      function V(t, e, n, { latestValues: s }, o, r = false) {
        const u = (a(t) ? M : T)(e, s, o, t);
        const l = (function (t, e, n) {
          const i = {};
          for (const s in t) {
            if (s !== "values" || typeof t.values != "object") {
              if (
                O(s) ||
                (n === true && R(s)) ||
                (!e && !R(s)) ||
                (t.draggable && s.startsWith("onDrag"))
              ) {
                i[s] = t[s];
              }
            }
          }
          return i;
        })(e, typeof t == "string", r);
        const c =
          t !== i.Fragment
            ? {
                ...l,
                ...u,
                ref: n,
              }
            : {};
        const { children: h } = e;
        const d = (0, i.useMemo)(() => ((0, y.i)(h) ? h.get() : h), [h]);
        return (0, i.createElement)(t, {
          ...c,
          children: d,
        });
      }
      var I = n(98922);
      var j = n(11717);
      var _ = n(75440);
      var L = n(78217);
      function F(t) {
        if ((0, y.i)(t)) {
          return t.get();
        } else {
          return t;
        }
      }
      function B(t, e, n, i) {
        const s = {};
        const o = i(t, {});
        for (const t in o) {
          s[t] = F(o[t]);
        }
        let { initial: r, animate: a } = t;
        const u = (0, f.G)(t);
        const l = (0, f.M)(t);
        if (e && l && !u && t.inherit !== false) {
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
            const i = (0, _.o)(t, e[n]);
            if (i) {
              const { transitionEnd: t, transition: e, ...n } = i;
              for (const t in n) {
                let e = n[t];
                if (Array.isArray(e)) {
                  e = e[c ? e.length - 1 : 0];
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
      const $ = (t) => (e, n) => {
        const s = (0, i.useContext)(p);
        const o = (0, i.useContext)(j.O);
        const r = () =>
          (function (
            { scrapeMotionValuesFromProps: t, createRenderState: e },
            n,
            i,
            s,
          ) {
            return {
              latestValues: B(n, i, s, t),
              renderState: e(),
            };
          })(t, e, s, o);
        if (n) {
          return r();
        } else {
          return (0, L.h)(r);
        }
      };
      const z = $({
        scrapeMotionValuesFromProps: n(86740).U,
        createRenderState: b,
      });
      const N = $({
        scrapeMotionValuesFromProps: n(81185).U,
        createRenderState: A,
      });
      var W = n(24939);
      var U = n(92131);
      const q = Symbol.for("motionComponentSymbol");
      function X(t) {
        return (
          t &&
          typeof t == "object" &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function K(t, e, n) {
        return (0, i.useCallback)(
          (i) => {
            if (i && t.onMount) {
              t.onMount(i);
            }
            if (e) {
              if (i) {
                e.mount(i);
              } else {
                e.unmount();
              }
            }
            if (n) {
              if (typeof n == "function") {
                n(i);
              } else if (X(n)) {
                n.current = i;
              }
            }
          },
          [e],
        );
      }
      var H = n(15793);
      const Y = (0, i.createContext)({});
      var Z = n(19537);
      function G(t, e, n, s, o) {
        const { visualElement: r } = (0, i.useContext)(p);
        const a = (0, i.useContext)(h);
        const u = (0, i.useContext)(j.O);
        const l = (0, i.useContext)(d._).reducedMotion;
        const c = (0, i.useRef)(null);
        s = s || a.renderer;
        if (!c.current && s) {
          c.current = s(t, {
            visualState: e,
            parent: r,
            props: n,
            presenceContext: u,
            blockInitialAnimation: !!u && u.initial === false,
            reducedMotionConfig: l,
          });
        }
        const f = c.current;
        const m = (0, i.useContext)(Y);
        if (
          !!f &&
          !f.projection &&
          !!o &&
          (f.type === "html" || f.type === "svg")
        ) {
          (function (t, e, n, i) {
            const {
              layoutId: s,
              layout: o,
              drag: r,
              dragConstraints: a,
              layoutScroll: u,
              layoutRoot: l,
              layoutCrossfade: c,
            } = e;
            t.projection = new n(
              t.latestValues,
              e["data-framer-portal-id"] ? undefined : Q(t.parent),
            );
            t.projection.setOptions({
              layoutId: s,
              layout: o,
              alwaysMeasureLayout: Boolean(r) || (a && X(a)),
              visualElement: t,
              animationType: typeof o == "string" ? o : "both",
              initialPromotionConfig: i,
              crossfade: c,
              layoutScroll: u,
              layoutRoot: l,
            });
          })(c.current, n, o, m);
        }
        const g = (0, i.useRef)(false);
        (0, i.useInsertionEffect)(() => {
          if (f && g.current) {
            f.update(n, u);
          }
        });
        const v = n[H.M];
        const y = (0, i.useRef)(
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
        (0, i.useEffect)(() => {
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
      function J(t, { forwardMotionProps: e = false } = {}, n, s) {
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
        const o = a(t) ? N : z;
        function r(n, r) {
          let a;
          const u = {
            ...(0, i.useContext)(d._),
            ...n,
            layoutId: tt(n),
          };
          const { isStatic: c } = u;
          const f = g(n);
          const m = o(n, c);
          if (!c && W.j) {
            (function () {
              (0, i.useContext)(h).strict;
              0;
            })();
            const e = (function (t) {
              const { drag: e, layout: n } = U.A;
              if (!e && !n) {
                return {};
              }
              const i = {
                ...e,
                ...n,
              };
              return {
                MeasureLayout:
                  e?.isEnabled(t) || n?.isEnabled(t)
                    ? i.MeasureLayout
                    : undefined,
                ProjectionNode: i.ProjectionNode,
              };
            })(u);
            a = e.MeasureLayout;
            f.visualElement = G(t, m, u, s, e.ProjectionNode);
          }
          return (0, l.jsxs)(p.Provider, {
            value: f,
            children: [
              a && f.visualElement
                ? (0, l.jsx)(a, {
                    visualElement: f.visualElement,
                    ...u,
                  })
                : null,
              V(t, n, K(m, f.visualElement, r), m, c, e),
            ],
          });
        }
        r.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
        const u = (0, i.forwardRef)(r);
        u[q] = t;
        return u;
      }
      function tt({ layoutId: t }) {
        const e = (0, i.useContext)(c.p).id;
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
        const i = (n, i) => J(n, i, t, e);
        return new Proxy((t, e) => i(t, e), {
          get: (s, o) =>
            o === "create"
              ? i
              : (n.has(o) || n.set(o, J(o, undefined, t, e)), n.get(o)),
        });
      }
      var nt = n(89654);
      var it = n(4516);
      function st(t, e, n, i = 0, s = 1) {
        const o = Array.from(t)
          .sort((t, e) => t.sortNodePosition(e))
          .indexOf(e);
        const r = t.size;
        const a = (r - 1) * i;
        if (typeof n == "function") {
          return n(o, r);
        } else if (s === 1) {
          return o * i;
        } else {
          return a - o * i;
        }
      }
      function ot(t, e, n = {}) {
        const i = (0, nt.x)(
          t,
          e,
          n.type === "exit" ? t.presenceContext?.custom : undefined,
        );
        let { transition: s = t.getDefaultTransition() || {} } = i || {};
        if (n.transitionOverride) {
          s = n.transitionOverride;
        }
        const o = i
          ? () => Promise.all((0, it.w)(t, i, n))
          : () => Promise.resolve();
        const r =
          t.variantChildren && t.variantChildren.size
            ? (i = 0) => {
                const {
                  delayChildren: o = 0,
                  staggerChildren: r,
                  staggerDirection: a,
                } = s;
                return (function (t, e, n = 0, i = 0, s = 0, o = 1, r) {
                  const a = [];
                  for (const u of t.variantChildren) {
                    u.notify("AnimationStart", e);
                    a.push(
                      ot(u, e, {
                        ...r,
                        delay:
                          n +
                          (typeof i == "function" ? 0 : i) +
                          st(t.variantChildren, u, i, s, o),
                      }).then(() => u.notify("AnimationComplete", e)),
                    );
                  }
                  return Promise.all(a);
                })(t, e, i, o, r, a, n);
              }
            : () => Promise.resolve();
        const { when: a } = s;
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
        for (let i = 0; i < n; i++) {
          if (e[i] !== t[i]) {
            return false;
          }
        }
        return true;
      }
      var ut = n(89096);
      const lt = ut.V.length;
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
        for (let n = 0; n < lt; n++) {
          const i = ut.V[n];
          const s = t.props[i];
          if ((0, m.$)(s) || s === false) {
            e[i] = s;
          }
        }
        return e;
      }
      const ht = [...ut.e].reverse();
      const dt = ut.e.length;
      function pt(t) {
        return (e) =>
          Promise.all(
            e.map(({ animation: e, options: n }) =>
              (function (t, e, n = {}) {
                let i;
                t.notify("AnimationStart", e);
                if (Array.isArray(e)) {
                  const s = e.map((e) => ot(t, e, n));
                  i = Promise.all(s);
                } else if (typeof e == "string") {
                  i = ot(t, e, n);
                } else {
                  const s =
                    typeof e == "function" ? (0, nt.x)(t, e, n.custom) : e;
                  i = Promise.all((0, it.w)(t, s, n));
                }
                return i.then(() => {
                  t.notify("AnimationComplete", e);
                });
              })(t, e, n),
            ),
          );
      }
      function ft(t) {
        let e = pt(t);
        let n = vt();
        let i = true;
        const s = (e) => (n, i) => {
          const s = (0, nt.x)(
            t,
            i,
            e === "exit" ? t.presenceContext?.custom : undefined,
          );
          if (s) {
            const { transition: t, transitionEnd: e, ...i } = s;
            n = {
              ...n,
              ...i,
              ...e,
            };
          }
          return n;
        };
        function o(o) {
          const { props: r } = t;
          const a = ct(t.parent) || {};
          const u = [];
          const l = new Set();
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
            if (y && i && t.manuallyAnimateOnMount) {
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
            let P = S.reduce(s(d), {});
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
              if (l.has(e)) {
                b = true;
                l.delete(e);
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
              let i = false;
              i = (0, rt.C)(e) && (0, rt.C)(n) ? !at(e, n) : e !== n;
              if (i) {
                if (e != null) {
                  A(t);
                } else {
                  l.add(t);
                }
              } else if (e !== undefined && l.has(t)) {
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
            if (i && t.blockInitialAnimation) {
              x = false;
            }
            const C = y && w;
            if (x && (!C || b)) {
              u.push(
                ...S.map((e) => {
                  const n = {
                    type: d,
                  };
                  if (
                    typeof e == "string" &&
                    i &&
                    !C &&
                    t.manuallyAnimateOnMount &&
                    t.parent
                  ) {
                    const { parent: i } = t;
                    const s = (0, nt.x)(i, e);
                    if (i.enteringChildren && s) {
                      const { delayChildren: e } = s.transition || {};
                      n.delay = st(i.enteringChildren, t, e);
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
          if (l.size) {
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
            l.forEach((n) => {
              const i = t.getBaseTarget(n);
              const s = t.getValue(n);
              if (s) {
                s.liveStyle = true;
              }
              e[n] = i ?? null;
            });
            u.push({
              animation: e,
            });
          }
          let d = Boolean(u.length);
          if (
            !!i &&
            (r.initial === false || r.initial === r.animate) &&
            !t.manuallyAnimateOnMount
          ) {
            d = false;
          }
          i = false;
          if (d) {
            return e(u);
          } else {
            return Promise.resolve();
          }
        }
        return {
          animateChanges: o,
          setActive: function (e, i) {
            if (n[e].isActive === i) {
              return Promise.resolve();
            }
            t.variantChildren?.forEach((t) =>
              t.animationState?.setActive(e, i),
            );
            n[e].isActive = i;
            const s = o(e);
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
              const i = this.node.animationState.setActive("exit", !t);
              if (e && !t) {
                i.then(() => {
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
      var Ct = n(26975);
      var Mt = n(20284);
      function kt(
        t,
        e,
        n,
        i = {
          passive: true,
        },
      ) {
        t.addEventListener(e, n, i);
        return () => t.removeEventListener(e, n);
      }
      const Rt = (t) =>
        t.pointerType === "mouse"
          ? typeof t.button != "number" || t.button <= 0
          : t.isPrimary !== false;
      function Ot(t) {
        return {
          point: {
            x: t.pageX,
            y: t.pageY,
          },
        };
      }
      function Dt(t, e, n, i) {
        return kt(
          t,
          e,
          (
            (t) => (e) =>
              Rt(e) && t(e, Ot(e))
          )(n),
          i,
        );
      }
      var Vt = n(74961);
      function It(t) {
        return t.max - t.min;
      }
      function jt(t, e, n, i = 0.5) {
        t.origin = i;
        t.originPoint = (0, At.t)(e.min, e.max, t.origin);
        t.scale = It(n) / It(e);
        t.translate = (0, At.t)(n.min, n.max, t.origin) - t.originPoint;
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
      function _t(t, e, n, i) {
        jt(t.x, e.x, n.x, i ? i.originX : undefined);
        jt(t.y, e.y, n.y, i ? i.originY : undefined);
      }
      function Lt(t, e, n) {
        t.min = n.min + e.min;
        t.max = t.min + It(e);
      }
      function Ft(t, e, n) {
        t.min = e.min - n.min;
        t.max = t.min + It(e);
      }
      function Bt(t, e, n) {
        Ft(t.x, e.x, n.x);
        Ft(t.y, e.y, n.y);
      }
      var $t = n(95398);
      function zt(t) {
        return [t("x"), t("y")];
      }
      var Nt = n(10301);
      const Wt = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var Ut = n(83800);
      var qt = n(60333);
      var Xt = n(15244);
      const Kt = (t, e) => Math.abs(t - e);
      class Ht {
        constructor(
          t,
          e,
          {
            transformPagePoint: n,
            contextWindow: i = window,
            dragSnapToOrigin: s = false,
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
            const t = Gt(this.lastMoveEventInfo, this.history);
            const e = this.startEvent !== null;
            const n =
              (function (t, e) {
                const n = Kt(t.x, e.x);
                const i = Kt(t.y, e.y);
                return Math.sqrt(n ** 2 + i ** 2);
              })(t.offset, {
                x: 0,
                y: 0,
              }) >= this.distanceThreshold;
            if (!e && !n) {
              return;
            }
            const { point: i } = t;
            const { timestamp: s } = Et.w0;
            this.history.push({
              ...i,
              timestamp: s,
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
            this.lastMoveEventInfo = Yt(e, this.transformPagePoint);
            Et.Wi.update(this.updatePoint, true);
          };
          this.handlePointerUp = (t, e) => {
            this.end();
            const {
              onEnd: n,
              onSessionEnd: i,
              resumeAnimation: s,
            } = this.handlers;
            if (this.dragSnapToOrigin && s) {
              s();
            }
            if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
              return;
            }
            const o = Gt(
              t.type === "pointercancel"
                ? this.lastMoveEventInfo
                : Yt(e, this.transformPagePoint),
              this.history,
            );
            if (this.startEvent && n) {
              n(t, o);
            }
            if (i) {
              i(t, o);
            }
          };
          if (!Rt(t)) {
            return;
          }
          this.dragSnapToOrigin = s;
          this.handlers = e;
          this.transformPagePoint = n;
          this.distanceThreshold = o;
          this.contextWindow = i || window;
          const r = Yt(Ot(t), this.transformPagePoint);
          const { point: a } = r;
          const { timestamp: u } = Et.w0;
          this.history = [
            {
              ...a,
              timestamp: u,
            },
          ];
          const { onSessionStart: l } = e;
          if (l) {
            l(t, Gt(r, this.history));
          }
          this.removeListeners = (0, qt.z)(
            Dt(this.contextWindow, "pointermove", this.handlePointerMove),
            Dt(this.contextWindow, "pointerup", this.handlePointerUp),
            Dt(this.contextWindow, "pointercancel", this.handlePointerUp),
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
      function Zt(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y,
        };
      }
      function Gt({ point: t }, e) {
        return {
          point: t,
          delta: Zt(t, Jt(e)),
          offset: Zt(t, Qt(e)),
          velocity: te(e, 0.1),
        };
      }
      function Qt(t) {
        return t[0];
      }
      function Jt(t) {
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
        let i = null;
        const s = Jt(t);
        while (
          n >= 0 &&
          ((i = t[n]), !(s.timestamp - i.timestamp > (0, Xt.w)(e)))
        ) {
          n--;
        }
        if (!i) {
          return {
            x: 0,
            y: 0,
          };
        }
        const o = (0, Xt.X)(s.timestamp - i.timestamp);
        if (o === 0) {
          return {
            x: 0,
            y: 0,
          };
        }
        const r = {
          x: (s.x - i.x) / o,
          y: (s.y - i.y) / o,
        };
        if (r.x === Infinity) {
          r.x = 0;
        }
        if (r.y === Infinity) {
          r.y = 0;
        }
        return r;
      }
      var ee = n(66789);
      var ne = n(65437);
      function ie(t, e, n) {
        return {
          min: e !== undefined ? t.min + e : undefined,
          max: n !== undefined ? t.max + n - (t.max - t.min) : undefined,
        };
      }
      function se(t, e) {
        let n = e.min - t.min;
        let i = e.max - t.max;
        if (e.max - e.min < t.max - t.min) {
          [n, i] = [i, n];
        }
        return {
          min: n,
          max: i,
        };
      }
      const oe = 0.35;
      function re(t, e, n) {
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
      const ue = new WeakMap();
      class le {
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
          this.elastic = (0, $t.dO)();
          this.latestPointerEvent = null;
          this.latestPanInfo = null;
          this.visualElement = t;
        }
        start(t, { snapToCursor: e = false, distanceThreshold: n } = {}) {
          const { presenceContext: i } = this.visualElement;
          if (i && i.isPresent === false) {
            return;
          }
          const { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new Ht(
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
                  this.snapToCursor(Ot(t).point);
                }
              },
              onStart: (t, e) => {
                const {
                  drag: n,
                  dragPropagation: i,
                  onDragStart: s,
                } = this.getProps();
                if (
                  n &&
                  !i &&
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
                zt((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (Tt.aQ.test(e)) {
                    const { projection: n } = this.visualElement;
                    if (n && n.layout) {
                      const i = n.layout.layoutBox[t];
                      if (i) {
                        e = It(i) * (parseFloat(e) / 100);
                      }
                    }
                  }
                  this.originPoint[t] = e;
                });
                if (s) {
                  Et.Wi.postRender(() => s(t, e));
                }
                (0, Ut.K)(this.visualElement, "transform");
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
                  dragDirectionLock: i,
                  onDirectionLock: s,
                  onDrag: o,
                } = this.getProps();
                if (!n && !this.openDragLock) {
                  return;
                }
                const { offset: r } = e;
                if (i && this.currentDirection === null) {
                  this.currentDirection = (function (t, e = 10) {
                    let n = null;
                    if (Math.abs(t.y) > e) {
                      n = "y";
                    } else if (Math.abs(t.x) > e) {
                      n = "x";
                    }
                    return n;
                  })(r);
                  if (this.currentDirection !== null && s) {
                    s(this.currentDirection);
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
                zt(
                  (t) =>
                    this.getAnimationState(t) === "paused" &&
                    this.getAxisMotionValue(t).animation?.play(),
                ),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              distanceThreshold: n,
              contextWindow: Wt(this.visualElement),
            },
          );
        }
        stop(t, e) {
          const n = t || this.latestPointerEvent;
          const i = e || this.latestPanInfo;
          const s = this.isDragging;
          this.cancel();
          if (!s || !i || !n) {
            return;
          }
          const { velocity: o } = i;
          this.startAnimation(o);
          const { onDragEnd: r } = this.getProps();
          if (r) {
            Et.Wi.postRender(() => r(n, i));
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
          const { drag: i } = this.getProps();
          if (!n || !ce(t, i, this.currentDirection)) {
            return;
          }
          const s = this.getAxisMotionValue(t);
          let o = this.originPoint[t] + n[t];
          if (this.constraints && this.constraints[t]) {
            o = (function (t, { min: e, max: n }, i) {
              if (e !== undefined && t < e) {
                t = i ? (0, At.t)(e, t, i.min) : Math.max(t, e);
              } else if (n !== undefined && t > n) {
                t = i ? (0, At.t)(n, t, i.max) : Math.min(t, n);
              }
              return t;
            })(o, this.constraints[t], this.elastic[t]);
          }
          s.set(o);
        }
        resolveConstraints() {
          const { dragConstraints: t, dragElastic: e } = this.getProps();
          const n =
            this.visualElement.projection &&
            !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(false)
              : this.visualElement.projection?.layout;
          const i = this.constraints;
          if (t && X(t)) {
            this.constraints ||= this.resolveRefConstraints();
          } else {
            this.constraints =
              !!t &&
              !!n &&
              (function (t, { top: e, left: n, bottom: i, right: s }) {
                return {
                  x: ie(t.x, n, s),
                  y: ie(t.y, e, i),
                };
              })(n.layoutBox, t);
          }
          this.elastic = (function (t = oe) {
            if (t === false) {
              t = 0;
            } else if (t === true) {
              t = oe;
            }
            return {
              x: re(t, "left", "right"),
              y: re(t, "top", "bottom"),
            };
          })(e);
          if (
            i !== this.constraints &&
            n &&
            this.constraints &&
            !this.hasMutatedConstraints
          ) {
            zt((t) => {
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
          if (!t || !X(t)) {
            return false;
          }
          const n = t.current;
          (0, Ct.k)(
            n !== null,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            "drag-constraints-ref",
          );
          const { projection: i } = this.visualElement;
          if (!i || !i.layout) {
            return false;
          }
          const s = (0, Nt.z)(
            n,
            i.root,
            this.visualElement.getTransformPagePoint(),
          );
          let o = (function (t, e) {
            return {
              x: se(t.x, e.x),
              y: se(t.y, e.y),
            };
          })(i.layout.layoutBox, s);
          if (e) {
            const t = e((0, Vt.z2)(o));
            this.hasMutatedConstraints = !!t;
            if (t) {
              o = (0, Vt.i8)(t);
            }
          }
          return o;
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: o,
            onDragTransitionEnd: r,
          } = this.getProps();
          const a = this.constraints || {};
          const u = zt((r) => {
            if (!ce(r, e, this.currentDirection)) {
              return;
            }
            let u = (a && a[r]) || {};
            if (o) {
              u = {
                min: 0,
                max: 0,
              };
            }
            const l = i ? 200 : 1000000;
            const c = i ? 40 : 10000000;
            const h = {
              type: "inertia",
              velocity: n ? t[r] : 0,
              bounceStiffness: l,
              bounceDamping: c,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...s,
              ...u,
            };
            return this.startAxisValueAnimation(r, h);
          });
          return Promise.all(u).then(r);
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          (0, Ut.K)(this.visualElement, t);
          return n.start((0, Mt.v)(t, n, 0, e, this.visualElement, false));
        }
        stopAnimation() {
          zt((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          zt((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          const e = `_drag${t.toUpperCase()}`;
          const n = this.visualElement.getProps();
          const i = n[e];
          return (
            i ||
            this.visualElement.getValue(
              t,
              (n.initial ? n.initial[t] : undefined) || 0,
            )
          );
        }
        snapToCursor(t) {
          zt((e) => {
            const { drag: n } = this.getProps();
            if (!ce(e, n, this.currentDirection)) {
              return;
            }
            const { projection: i } = this.visualElement;
            const s = this.getAxisMotionValue(e);
            if (i && i.layout) {
              const { min: n, max: o } = i.layout.layoutBox[e];
              s.set(t[e] - (0, At.t)(n, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) {
            return;
          }
          const { drag: t, dragConstraints: e } = this.getProps();
          const { projection: n } = this.visualElement;
          if (!X(e) || !n || !this.constraints) {
            return;
          }
          this.stopAnimation();
          const i = {
            x: 0,
            y: 0,
          };
          zt((t) => {
            const e = this.getAxisMotionValue(t);
            if (e && this.constraints !== false) {
              const n = e.get();
              i[t] = (function (t, e) {
                let n = 0.5;
                const i = It(t);
                const s = It(e);
                if (s > i) {
                  n = (0, ee.Y)(e.min, e.max - i, t.min);
                } else if (i > s) {
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
          zt((e) => {
            if (!ce(e, t, null)) {
              return;
            }
            const n = this.getAxisMotionValue(e);
            const { min: s, max: o } = this.constraints[e];
            n.set((0, At.t)(s, o, i[e]));
          });
        }
        addListeners() {
          if (!this.visualElement.current) {
            return;
          }
          ue.set(this.visualElement, this);
          const t = Dt(this.visualElement.current, "pointerdown", (t) => {
            const { drag: e, dragListener: n = true } = this.getProps();
            if (e && n) {
              this.start(t);
            }
          });
          const e = () => {
            const { dragConstraints: t } = this.getProps();
            if (X(t) && t.current) {
              this.constraints = this.resolveRefConstraints();
            }
          };
          const { projection: n } = this.visualElement;
          const i = n.addEventListener("measure", e);
          if (n && !n.layout) {
            if (n.root) {
              n.root.updateScroll();
            }
            n.updateLayout();
          }
          Et.Wi.read(e);
          const s = kt(window, "resize", () =>
            this.scalePositionWithinConstraints(),
          );
          const o = n.addEventListener(
            "didUpdate",
            ({ delta: t, hasLayoutChanged: e }) => {
              if (this.isDragging && e) {
                zt((e) => {
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
            i();
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
            dragPropagation: i = false,
            dragConstraints: s = false,
            dragElastic: o = oe,
            dragMomentum: r = true,
          } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: r,
          };
        }
      }
      function ce(t, e, n) {
        return (e === true || e === t) && (n === null || n === t);
      }
      const he = (t) => (e, n) => {
        if (t) {
          Et.Wi.postRender(() => t(e, n));
        }
      };
      var de = n(69547);
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
            if (!Tt.px.test(t)) {
              return t;
            }
            t = parseFloat(t);
          }
          return `${me(t, e.target.x)}% ${me(t, e.target.y)}%`;
        },
      };
      var ve = n(28779);
      const ye = {
        correct: (t, { treeScale: e, projectionDelta: n }) => {
          const i = t;
          const s = ve.P.parse(t);
          if (s.length > 5) {
            return i;
          }
          const o = ve.P.createTransformer(t);
          const r = typeof s[0] != "number" ? 1 : 0;
          const a = n.x.scale * e.x;
          const u = n.y.scale * e.y;
          s[0 + r] /= a;
          s[1 + r] /= u;
          const l = (0, At.t)(a, u, 0.5);
          if (typeof s[2 + r] == "number") {
            s[2 + r] /= l;
          }
          if (typeof s[3 + r] == "number") {
            s[3 + r] /= l;
          }
          return o(s);
        },
      };
      var we = n(23486);
      let xe = false;
      class be extends i.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: i,
          } = this.props;
          const { projection: s } = t;
          (0, we.B)(Pe);
          if (s) {
            if (e.group) {
              e.group.add(s);
            }
            if (n && n.register && i) {
              n.register(s);
            }
            if (xe) {
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
            drag: i,
            isPresent: s,
          } = this.props;
          const { projection: o } = n;
          if (o) {
            o.isPresent = s;
            xe = true;
            if (
              i ||
              t.layoutDependency !== e ||
              e === undefined ||
              t.isPresent !== s
            ) {
              o.willUpdate();
            } else {
              this.safeToRemove();
            }
            if (t.isPresent !== s) {
              if (s) {
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
            de.g.postRender(() => {
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
          const { projection: i } = t;
          xe = true;
          if (i) {
            i.scheduleCheckAfterUnmount();
            if (e && e.group) {
              e.group.remove(i);
            }
            if (n && n.deregister) {
              n.deregister(i);
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
      function Se(t) {
        const [e, n] = (0, pe.oO)();
        const s = (0, i.useContext)(c.p);
        return (0, l.jsx)(be, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, i.useContext)(Y),
          isPresent: e,
          safeToRemove: n,
        });
      }
      const Pe = {
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
        boxShadow: ye,
      };
      var Te = n(27984);
      var Ee = n(59634);
      var Ae = n(30038);
      var Ce = n(83479);
      var Me = n(35449);
      var ke = n(32838);
      var Re = n(17802);
      var Oe = n(58088);
      var De = n(59349);
      var Ve = n(56796);
      var Ie = n(25013);
      const je = (t, e) => t.depth - e.depth;
      class _e {
        constructor() {
          this.children = [];
          this.isDirty = false;
        }
        add(t) {
          (0, Ie.y4)(this.children, t);
          this.isDirty = true;
        }
        remove(t) {
          (0, Ie.cl)(this.children, t);
          this.isDirty = true;
        }
        forEach(t) {
          if (this.isDirty) {
            this.children.sort(je);
          }
          this.isDirty = false;
          this.children.forEach(t);
        }
      }
      function Le(t, e) {
        const n = Me.X.now();
        const i = ({ timestamp: s }) => {
          const o = s - n;
          if (o >= e) {
            (0, Et.Pn)(i);
            t(o - e);
          }
        };
        Et.Wi.setup(i, true);
        return () => (0, Et.Pn)(i);
      }
      var Fe = n(37919);
      const Be = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
      const $e = Be.length;
      const ze = (t) => (typeof t == "string" ? parseFloat(t) : t);
      const Ne = (t) => typeof t == "number" || Tt.px.test(t);
      function We(t, e) {
        if (t[e] !== undefined) {
          return t[e];
        } else {
          return t.borderRadius;
        }
      }
      const Ue = Xe(0, 0.5, Fe.Bn);
      const qe = Xe(0.5, 0.95, bt.Z);
      function Xe(t, e, n) {
        return (i) => (i < t ? 0 : i > e ? 1 : n((0, ee.Y)(t, e, i)));
      }
      function Ke(t, e) {
        t.min = e.min;
        t.max = e.max;
      }
      function He(t, e) {
        Ke(t.x, e.x);
        Ke(t.y, e.y);
      }
      function Ye(t, e) {
        t.translate = e.translate;
        t.scale = e.scale;
        t.originPoint = e.originPoint;
        t.origin = e.origin;
      }
      var Ze = n(80813);
      function Ge(t, e, n, i, s) {
        t -= e;
        t = (0, Ze.q2)(t, 1 / n, i);
        if (s !== undefined) {
          t = (0, Ze.q2)(t, 1 / s, i);
        }
        return t;
      }
      function Qe(t, e, [n, i, s], o, r) {
        (function (t, e = 0, n = 1, i = 0.5, s, o = t, r = t) {
          if (Tt.aQ.test(e)) {
            e = parseFloat(e);
            e = (0, At.t)(r.min, r.max, e / 100) - r.min;
          }
          if (typeof e != "number") {
            return;
          }
          let a = (0, At.t)(o.min, o.max, i);
          if (t === o) {
            a -= e;
          }
          t.min = Ge(t.min, e, n, a, s);
          t.max = Ge(t.max, e, n, a, s);
        })(t, e[n], e[i], e[s], e.scale, o, r);
      }
      const Je = ["x", "scaleX", "originX"];
      const tn = ["y", "scaleY", "originY"];
      function en(t, e, n, i) {
        Qe(t.x, e, Je, n ? n.x : undefined, i ? i.x : undefined);
        Qe(t.y, e, tn, n ? n.y : undefined, i ? i.y : undefined);
      }
      function nn(t) {
        return t.translate === 0 && t.scale === 1;
      }
      function sn(t) {
        return nn(t.x) && nn(t.y);
      }
      function on(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function rn(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function an(t, e) {
        return rn(t.x, e.x) && rn(t.y, e.y);
      }
      function un(t) {
        return It(t.x) / It(t.y);
      }
      function ln(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class cn {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, Ie.y4)(this.members, t);
          t.scheduleRender();
        }
        remove(t) {
          (0, Ie.cl)(this.members, t);
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
            const { crossfade: i } = t.options;
            if (i === false) {
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
      var hn = n(6034);
      const dn = {
        nodes: 0,
        calculatedTargetDeltas: 0,
        calculatedProjections: 0,
      };
      const pn = ["", "X", "Y", "Z"];
      let fn = 0;
      function mn(t, e, n, i) {
        const { latestValues: s } = e;
        if (s[t]) {
          n[t] = s[t];
          e.setStaticValue(t, 0);
          if (i) {
            i[t] = 0;
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
        const n = (0, Ve.s)(e);
        if (window.MotionHasOptimisedAnimation(n, "transform")) {
          const { layout: e, layoutId: i } = t.options;
          window.MotionCancelOptimisedAnimation(
            n,
            "transform",
            Et.Wi,
            !e && !i,
          );
        }
        const { parent: i } = t;
        if (i && !i.hasCheckedOptimisedAppear) {
          gn(i);
        }
      }
      function vn({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
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
              if (Te.f.value) {
                dn.nodes =
                  dn.calculatedTargetDeltas =
                  dn.calculatedProjections =
                    0;
              }
              this.nodes.forEach(xn);
              this.nodes.forEach(Cn);
              this.nodes.forEach(Mn);
              this.nodes.forEach(bn);
              if (Te.f.addProjectionMetrics) {
                Te.f.addProjectionMetrics(dn);
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
              this.nodes = new _e();
            }
          }
          addEventListener(t, e) {
            if (!this.eventHandlers.has(t)) {
              this.eventHandlers.set(t, new Oe.L());
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
            this.isSVG = (0, Ee.v)(e) && !(0, Ae.r)(e);
            this.instance = e;
            const { layoutId: n, layout: i, visualElement: s } = this.options;
            if (s && !s.current) {
              s.mount(e);
            }
            this.root.nodes.add(this);
            if (this.parent) {
              this.parent.children.add(this);
            }
            if (this.root.hasTreeAnimated && (i || n)) {
              this.isLayoutDirty = true;
            }
            if (t) {
              let n;
              let i = 0;
              const s = () => (this.root.updateBlockedByResize = false);
              Et.Wi.read(() => {
                i = window.innerWidth;
              });
              t(e, () => {
                const t = window.innerWidth;
                if (t !== i) {
                  i = t;
                  this.root.updateBlockedByResize = true;
                  if (n) {
                    n();
                  }
                  n = Le(s, 250);
                  if (fe.hasAnimatedSinceResize) {
                    fe.hasAnimatedSinceResize = false;
                    this.nodes.forEach(An);
                  }
                }
              });
            }
            if (n) {
              this.root.registerSharedNode(n, this);
            }
            if (this.options.animate !== false && s && (n || i)) {
              this.addEventListener(
                "didUpdate",
                ({
                  delta: t,
                  hasLayoutChanged: e,
                  hasRelativeLayoutChanged: n,
                  layout: i,
                }) => {
                  if (this.isTreeAnimationBlocked()) {
                    this.target = undefined;
                    this.relativeTarget = undefined;
                    return;
                  }
                  const o =
                    this.options.transition || s.getDefaultTransition() || In;
                  const {
                    onLayoutAnimationStart: r,
                    onLayoutAnimationComplete: a,
                  } = s.getProps();
                  const u = !this.targetLayout || !an(this.targetLayout, i);
                  const l = !e && n;
                  if (
                    this.options.layoutRoot ||
                    this.resumeFrom ||
                    l ||
                    (e && (u || !this.currentAnimation))
                  ) {
                    if (this.resumeFrom) {
                      this.resumingFrom = this.resumeFrom;
                      this.resumingFrom.resumingFrom = undefined;
                    }
                    const e = {
                      ...(0, Ce.e)(o, "layout"),
                      onPlay: r,
                      onComplete: a,
                    };
                    if (s.shouldReduceMotion || this.options.layoutRoot) {
                      e.delay = 0;
                      e.type = false;
                    }
                    this.startAnimation(e);
                    this.setAnimationOrigin(t, l);
                  } else {
                    if (!e) {
                      An(this);
                    }
                    if (this.isLead() && this.options.onExitComplete) {
                      this.options.onExitComplete();
                    }
                  }
                  this.targetLayout = i;
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
                this.nodes.forEach(kn);
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
            const i = this.getTransformTemplate();
            this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
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
              this.nodes.forEach(Pn);
              return;
            }
            if (this.animationId <= this.animationCommitId) {
              this.nodes.forEach(Tn);
              return;
            }
            this.animationCommitId = this.animationId;
            if (this.isUpdating) {
              this.isUpdating = false;
              this.nodes.forEach(En);
              this.nodes.forEach(yn);
              this.nodes.forEach(wn);
            } else {
              this.nodes.forEach(Tn);
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
              de.g.read(this.scheduleUpdate);
            }
          }
          clearAllSnapshots() {
            this.nodes.forEach(Sn);
            this.sharedNodes.forEach(Rn);
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
                !It(this.snapshot.measuredBox.x) &&
                !It(this.snapshot.measuredBox.y)
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
            this.layoutCorrected = (0, $t.dO)();
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
              const e = i(this.instance);
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
            const e = this.projectionDelta && !sn(this.projectionDelta);
            const n = this.getTransformTemplate();
            const i = n ? n(this.latestValues, "") : undefined;
            const o = i !== this.prevTransformTemplateValue;
            if (
              t &&
              this.instance &&
              (e || (0, hn.ud)(this.latestValues) || o)
            ) {
              s(this.instance, i);
              this.shouldResetTransform = false;
              this.scheduleRender();
            }
          }
          measure(t = true) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var i;
            if (t) {
              n = this.removeTransform(n);
            }
            Ln((i = n).x);
            Ln(i.y);
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
              return (0, $t.dO)();
            }
            const e = t.measureViewportBox();
            if (!this.scroll?.wasRoot && !this.path.some(Bn)) {
              const { scroll: t } = this.root;
              if (t) {
                (0, Ze.am)(e.x, t.offset.x);
                (0, Ze.am)(e.y, t.offset.y);
              }
            }
            return e;
          }
          removeElementScroll(t) {
            const e = (0, $t.dO)();
            He(e, t);
            if (this.scroll?.wasRoot) {
              return e;
            }
            for (let n = 0; n < this.path.length; n++) {
              const i = this.path[n];
              const { scroll: s, options: o } = i;
              if (i !== this.root && s && o.layoutScroll) {
                if (s.wasRoot) {
                  He(e, t);
                }
                (0, Ze.am)(e.x, s.offset.x);
                (0, Ze.am)(e.y, s.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = false) {
            const n = (0, $t.dO)();
            He(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const i = this.path[t];
              if (!e && i.options.layoutScroll && i.scroll && i !== i.root) {
                (0, Ze.D2)(n, {
                  x: -i.scroll.offset.x,
                  y: -i.scroll.offset.y,
                });
              }
              if ((0, hn.ud)(i.latestValues)) {
                (0, Ze.D2)(n, i.latestValues);
              }
            }
            if ((0, hn.ud)(this.latestValues)) {
              (0, Ze.D2)(n, this.latestValues);
            }
            return n;
          }
          removeTransform(t) {
            const e = (0, $t.dO)();
            He(e, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              if (!n.instance) {
                continue;
              }
              if (!(0, hn.ud)(n.latestValues)) {
                continue;
              }
              if ((0, hn.Lj)(n.latestValues)) {
                n.updateSnapshot();
              }
              const i = (0, $t.dO)();
              He(i, n.measurePageBox());
              en(
                e,
                n.latestValues,
                n.snapshot ? n.snapshot.layoutBox : undefined,
                i,
              );
            }
            if ((0, hn.ud)(this.latestValues)) {
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
            const { layout: i, layoutId: s } = this.options;
            if (this.layout && (i || s)) {
              this.resolvedRelativeTargetAt = Et.w0.timestamp;
              if (!this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                if (t && t.layout && this.animationProgress !== 1) {
                  this.relativeParent = t;
                  this.forceRelativeParentToResolveTarget();
                  this.relativeTarget = (0, $t.dO)();
                  this.relativeTargetOrigin = (0, $t.dO)();
                  Bt(
                    this.relativeTargetOrigin,
                    this.layout.layoutBox,
                    t.layout.layoutBox,
                  );
                  He(this.relativeTarget, this.relativeTargetOrigin);
                } else {
                  this.relativeParent = this.relativeTarget = undefined;
                }
              }
              if (this.relativeTarget || this.targetDelta) {
                var o;
                var r;
                var a;
                if (!this.target) {
                  this.target = (0, $t.dO)();
                  this.targetWithTransforms = (0, $t.dO)();
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
                  Lt(o.x, r.x, a.x);
                  Lt(o.y, r.y, a.y);
                } else if (this.targetDelta) {
                  if (Boolean(this.resumingFrom)) {
                    this.target = this.applyTransform(this.layout.layoutBox);
                  } else {
                    He(this.target, this.layout.layoutBox);
                  }
                  (0, Ze.o2)(this.target, this.targetDelta);
                } else {
                  He(this.target, this.layout.layoutBox);
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
                    this.relativeTarget = (0, $t.dO)();
                    this.relativeTargetOrigin = (0, $t.dO)();
                    Bt(this.relativeTargetOrigin, this.target, t.target);
                    He(this.relativeTarget, this.relativeTargetOrigin);
                  } else {
                    this.relativeParent = this.relativeTarget = undefined;
                  }
                }
                if (Te.f.value) {
                  dn.calculatedTargetDeltas++;
                }
              }
            }
          }
          getClosestProjectingParent() {
            if (
              this.parent &&
              !(0, hn.Lj)(this.parent.latestValues) &&
              !(0, hn.D_)(this.parent.latestValues)
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
            const { layout: i, layoutId: s } = this.options;
            this.isTreeAnimating = Boolean(
              (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation,
            );
            if (!this.isTreeAnimating) {
              this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || (!i && !s)) {
              return;
            }
            He(this.layoutCorrected, this.layout.layoutBox);
            const o = this.treeScale.x;
            const r = this.treeScale.y;
            (0, Ze.YY)(this.layoutCorrected, this.treeScale, this.path, e);
            if (
              !!t.layout &&
              !t.target &&
              (this.treeScale.x !== 1 || this.treeScale.y !== 1)
            ) {
              t.target = t.layout.layoutBox;
              t.targetWithTransforms = (0, $t.dO)();
            }
            const { target: a } = t;
            if (a) {
              if (this.projectionDelta && this.prevProjectionDelta) {
                Ye(this.prevProjectionDelta.x, this.projectionDelta.x);
                Ye(this.prevProjectionDelta.y, this.projectionDelta.y);
              } else {
                this.createProjectionDeltas();
              }
              _t(
                this.projectionDelta,
                this.layoutCorrected,
                a,
                this.latestValues,
              );
              if (
                this.treeScale.x !== o ||
                this.treeScale.y !== r ||
                !ln(this.projectionDelta.x, this.prevProjectionDelta.x) ||
                !ln(this.projectionDelta.y, this.prevProjectionDelta.y)
              ) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", a);
              }
              if (Te.f.value) {
                dn.calculatedProjections++;
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
            this.prevProjectionDelta = (0, $t.wc)();
            this.projectionDelta = (0, $t.wc)();
            this.projectionDeltaWithTransform = (0, $t.wc)();
          }
          setAnimationOrigin(t, e = false) {
            const n = this.snapshot;
            const i = n ? n.latestValues : {};
            const s = {
              ...this.latestValues,
            };
            const o = (0, $t.wc)();
            if (
              !this.relativeParent ||
              !this.relativeParent.options.layoutRoot
            ) {
              this.relativeTarget = this.relativeTargetOrigin = undefined;
            }
            this.attemptToResolveRelativeTarget = !e;
            const r = (0, $t.dO)();
            const a =
              (n ? n.source : undefined) !==
              (this.layout ? this.layout.source : undefined);
            const u = this.getStack();
            const l = !u || u.members.length <= 1;
            const c = Boolean(
              a && !l && this.options.crossfade === true && !this.path.some(Vn),
            );
            let h;
            this.animationProgress = 0;
            this.mixTargetDelta = (e) => {
              const n = e / 1000;
              var u;
              var d;
              var p;
              var f;
              var m;
              var g;
              On(o.x, t.x, n);
              On(o.y, t.y, n);
              this.setTargetDelta(o);
              if (
                this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout
              ) {
                Bt(
                  r,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox,
                );
                p = this.relativeTarget;
                f = this.relativeTargetOrigin;
                m = r;
                g = n;
                Dn(p.x, f.x, m.x, g);
                Dn(p.y, f.y, m.y, g);
                if (
                  h &&
                  ((u = this.relativeTarget),
                  (d = h),
                  on(u.x, d.x) && on(u.y, d.y))
                ) {
                  this.isProjectionDirty = false;
                }
                h ||= (0, $t.dO)();
                He(h, this.relativeTarget);
              }
              if (a) {
                this.animationValues = s;
                (function (t, e, n, i, s, o) {
                  if (s) {
                    t.opacity = (0, At.t)(0, n.opacity ?? 1, Ue(i));
                    t.opacityExit = (0, At.t)(e.opacity ?? 1, 0, qe(i));
                  } else if (o) {
                    t.opacity = (0, At.t)(e.opacity ?? 1, n.opacity ?? 1, i);
                  }
                  for (let s = 0; s < $e; s++) {
                    const o = `border${Be[s]}Radius`;
                    let r = We(e, o);
                    let a = We(n, o);
                    if (r !== undefined || a !== undefined) {
                      r ||= 0;
                      a ||= 0;
                      if (r === 0 || a === 0 || Ne(r) === Ne(a)) {
                        t[o] = Math.max((0, At.t)(ze(r), ze(a), i), 0);
                        if (Tt.aQ.test(a) || Tt.aQ.test(r)) {
                          t[o] += "%";
                        }
                      } else {
                        t[o] = a;
                      }
                    }
                  }
                  if (e.rotate || n.rotate) {
                    t.rotate = (0, At.t)(e.rotate || 0, n.rotate || 0, i);
                  }
                })(s, i, this.latestValues, n, c, l);
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
              ke.P.layout++;
              this.motionValue ||= (0, Re.BX)(0);
              this.currentAnimation = (0, De.D)(this.motionValue, [0, 1000], {
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
                  ke.P.layout--;
                },
                onComplete: () => {
                  ke.P.layout--;
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
              layout: i,
              latestValues: s,
            } = t;
            if (e && n && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                Fn(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox,
                )
              ) {
                n = this.target || (0, $t.dO)();
                const e = It(this.layout.layoutBox.x);
                n.x.min = t.target.x.min;
                n.x.max = n.x.min + e;
                const i = It(this.layout.layoutBox.y);
                n.y.min = t.target.y.min;
                n.y.max = n.y.min + i;
              }
              He(e, n);
              (0, Ze.D2)(e, s);
              _t(this.projectionDeltaWithTransform, this.layoutCorrected, e, s);
            }
          }
          registerSharedNode(t, e) {
            if (!this.sharedNodes.has(t)) {
              this.sharedNodes.set(t, new cn());
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
            const i = this.getStack();
            if (i) {
              i.promote(this, n);
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
            const i = {};
            if (n.z) {
              mn("z", t, i, this.animationValues);
            }
            for (let e = 0; e < pn.length; e++) {
              mn(`rotate${pn[e]}`, t, i, this.animationValues);
              mn(`skew${pn[e]}`, t, i, this.animationValues);
            }
            t.render();
            for (const e in i) {
              t.setStaticValue(e, i[e]);
              if (this.animationValues) {
                this.animationValues[e] = i[e];
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
            const i = this.getLead();
            if (!this.projectionDelta || !this.layout || !i.target) {
              if (this.options.layoutId) {
                t.opacity =
                  this.latestValues.opacity !== undefined
                    ? this.latestValues.opacity
                    : 1;
                t.pointerEvents = F(e?.pointerEvents) || "";
              }
              if (this.hasProjected && !(0, hn.ud)(this.latestValues)) {
                t.transform = n ? n({}, "") : "none";
                this.hasProjected = false;
              }
              return;
            }
            t.visibility = "";
            const s = i.animationValues || i.latestValues;
            this.applyTransformsToTarget();
            let o = (function (t, e, n) {
              let i = "";
              const s = t.x.translate / e.x;
              const o = t.y.translate / e.y;
              const r = n?.z || 0;
              if (s || o || r) {
                i = `translate3d(${s}px, ${o}px, ${r}px) `;
              }
              if (e.x !== 1 || e.y !== 1) {
                i += `scale(${1 / e.x}, ${1 / e.y}) `;
              }
              if (n) {
                const {
                  transformPerspective: t,
                  rotate: e,
                  rotateX: s,
                  rotateY: o,
                  skewX: r,
                  skewY: a,
                } = n;
                if (t) {
                  i = `perspective(${t}px) ${i}`;
                }
                if (e) {
                  i += `rotate(${e}deg) `;
                }
                if (s) {
                  i += `rotateX(${s}deg) `;
                }
                if (o) {
                  i += `rotateY(${o}deg) `;
                }
                if (r) {
                  i += `skewX(${r}deg) `;
                }
                if (a) {
                  i += `skewY(${a}deg) `;
                }
              }
              const a = t.x.scale * e.x;
              const u = t.y.scale * e.y;
              if (a !== 1 || u !== 1) {
                i += `scale(${a}, ${u})`;
              }
              return i || "none";
            })(this.projectionDeltaWithTransform, this.treeScale, s);
            if (n) {
              o = n(s, o);
            }
            t.transform = o;
            const { x: r, y: a } = this.projectionDelta;
            t.transformOrigin = `${r.origin * 100}% ${a.origin * 100}% 0`;
            if (i.animationValues) {
              t.opacity =
                i === this
                  ? (s.opacity ?? this.latestValues.opacity ?? 1)
                  : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit;
            } else {
              t.opacity =
                i === this
                  ? s.opacity !== undefined
                    ? s.opacity
                    : ""
                  : s.opacityExit !== undefined
                    ? s.opacityExit
                    : 0;
            }
            for (const e in we.P) {
              if (s[e] === undefined) {
                continue;
              }
              const { correct: n, applyTo: r, isCSSVariable: a } = we.P[e];
              const u = o === "none" ? s[e] : n(s[e], i);
              if (r) {
                const e = r.length;
                for (let n = 0; n < e; n++) {
                  t[r[n]] = u;
                }
              } else if (a) {
                this.options.visualElement.renderState.vars[e] = u;
              } else {
                t[e] = u;
              }
            }
            if (this.options.layoutId) {
              t.pointerEvents = i === this ? F(e?.pointerEvents) || "" : "none";
            }
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
          }
          resetTree() {
            this.root.nodes.forEach((t) => t.currentAnimation?.stop());
            this.root.nodes.forEach(Pn);
            this.root.sharedNodes.clear();
          }
        };
      }
      function yn(t) {
        t.updateLayout();
      }
      function wn(t) {
        const e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          const { layoutBox: n, measuredBox: i } = t.layout;
          const { animationType: s } = t.options;
          const o = e.source !== t.layout.source;
          if (s === "size") {
            zt((t) => {
              const i = o ? e.measuredBox[t] : e.layoutBox[t];
              const s = It(i);
              i.min = n[t].min;
              i.max = i.min + s;
            });
          } else if (Fn(s, e.layoutBox, n)) {
            zt((i) => {
              const s = o ? e.measuredBox[i] : e.layoutBox[i];
              const r = It(n[i]);
              s.max = s.min + r;
              if (t.relativeTarget && !t.currentAnimation) {
                t.isProjectionDirty = true;
                t.relativeTarget[i].max = t.relativeTarget[i].min + r;
              }
            });
          }
          const r = (0, $t.wc)();
          _t(r, n, e.layoutBox);
          const a = (0, $t.wc)();
          if (o) {
            _t(a, t.applyTransform(i, true), e.measuredBox);
          } else {
            _t(a, n, e.layoutBox);
          }
          const u = !sn(r);
          let l = false;
          if (!t.resumeFrom) {
            const i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              const { snapshot: s, layout: o } = i;
              if (s && o) {
                const r = (0, $t.dO)();
                Bt(r, e.layoutBox, s.layoutBox);
                const a = (0, $t.dO)();
                Bt(a, n, o.layoutBox);
                if (!an(r, a)) {
                  l = true;
                }
                if (i.options.layoutRoot) {
                  t.relativeTarget = a;
                  t.relativeTargetOrigin = r;
                  t.relativeParent = i;
                }
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: n,
            snapshot: e,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: l,
          });
        } else if (t.isLead()) {
          const { onExitComplete: e } = t.options;
          if (e) {
            e();
          }
        }
        t.options.transition = undefined;
      }
      function xn(t) {
        if (Te.f.value) {
          dn.nodes++;
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
      function bn(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            false;
      }
      function Sn(t) {
        t.clearSnapshot();
      }
      function Pn(t) {
        t.clearMeasurements();
      }
      function Tn(t) {
        t.isLayoutDirty = false;
      }
      function En(t) {
        const { visualElement: e } = t.options;
        if (e && e.getProps().onBeforeLayoutMeasure) {
          e.notify("BeforeLayoutMeasure");
        }
        t.resetTransform();
      }
      function An(t) {
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
      function kn(t) {
        t.resetSkewAndRotation();
      }
      function Rn(t) {
        t.removeLeadSnapshot();
      }
      function On(t, e, n) {
        t.translate = (0, At.t)(e.translate, 0, n);
        t.scale = (0, At.t)(e.scale, 1, n);
        t.origin = e.origin;
        t.originPoint = e.originPoint;
      }
      function Dn(t, e, n, i) {
        t.min = (0, At.t)(e.min, n.min, i);
        t.max = (0, At.t)(e.max, n.max, i);
      }
      function Vn(t) {
        return t.animationValues && t.animationValues.opacityExit !== undefined;
      }
      const In = {
        duration: 0.45,
        ease: [0.4, 0, 0.1, 1],
      };
      const jn = (t) =>
        typeof navigator != "undefined" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(t);
      const _n = jn("applewebkit/") && !jn("chrome/") ? Math.round : bt.Z;
      function Ln(t) {
        t.min = _n(t.min);
        t.max = _n(t.max);
      }
      function Fn(t, e, n) {
        return (
          t === "position" ||
          (t === "preserve-aspect" &&
            ((i = un(e)), (s = un(n)), (o = 0.2), !(Math.abs(i - s) <= o)))
        );
        var i;
        var s;
        var o;
      }
      function Bn(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      const $n = vn({
        attachResizeListener: (t, e) => kt(t, "resize", e),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body.scrollLeft,
          y: document.documentElement.scrollTop || document.body.scrollTop,
        }),
        checkIsScrollRoot: () => true,
      });
      const zn = {
        current: undefined,
      };
      const Nn = vn({
        measureScroll: (t) => ({
          x: t.scrollLeft,
          y: t.scrollTop,
        }),
        defaultParent: () => {
          if (!zn.current) {
            const t = new $n({});
            t.mount(window);
            t.setOptions({
              layoutScroll: true,
            });
            zn.current = t;
          }
          return zn.current;
        },
        resetTransform: (t, e) => {
          t.style.transform = e !== undefined ? e : "none";
        },
        checkIsScrollRoot: (t) =>
          Boolean(window.getComputedStyle(t).position === "fixed"),
      });
      const Wn = {
        pan: {
          Feature: class extends yt {
            constructor() {
              super(...arguments);
              this.removePointerDownListener = bt.Z;
            }
            onPointerDown(t) {
              this.session = new Ht(t, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: Wt(this.node),
              });
            }
            createPanHandlers() {
              const {
                onPanSessionStart: t,
                onPanStart: e,
                onPan: n,
                onPanEnd: i,
              } = this.node.getProps();
              return {
                onSessionStart: he(t),
                onStart: he(e),
                onMove: n,
                onEnd: (t, e) => {
                  delete this.session;
                  if (i) {
                    Et.Wi.postRender(() => i(t, e));
                  }
                },
              };
            }
            mount() {
              this.removePointerDownListener = Dt(
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
              this.controls = new le(t);
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
          ProjectionNode: Nn,
          MeasureLayout: Se,
        },
      };
      var Un = n(6419);
      function qn(t, e) {
        const n = (0, Un.I)(t);
        const i = new AbortController();
        return [
          n,
          {
            passive: true,
            ...e,
            signal: i.signal,
          },
          () => i.abort(),
        ];
      }
      function Xn(t) {
        return t.pointerType !== "touch" && !Pt();
      }
      function Kn(t, e, n) {
        const { props: i } = t;
        if (t.animationState && i.whileHover) {
          t.animationState.setActive("whileHover", n === "Start");
        }
        const s = i["onHover" + n];
        if (s) {
          Et.Wi.postRender(() => s(e, Ot(e)));
        }
      }
      var Hn = n(80602);
      const Yn = (t, e) => !!e && (t === e || Yn(t, e.parentElement));
      const Zn = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
      const Gn = new WeakSet();
      function Qn(t) {
        return (e) => {
          if (e.key === "Enter") {
            t(e);
          }
        };
      }
      function Jn(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, {
            isPrimary: true,
            bubbles: true,
          }),
        );
      }
      function ti(t) {
        return Rt(t) && !Pt();
      }
      function ei(t, e, n = {}) {
        const [i, s, o] = qn(t, n);
        const r = (t) => {
          const i = t.currentTarget;
          if (!ti(t)) {
            return;
          }
          Gn.add(i);
          const o = e(i, t);
          const r = (t, e) => {
            window.removeEventListener("pointerup", a);
            window.removeEventListener("pointercancel", u);
            if (Gn.has(i)) {
              Gn.delete(i);
            }
            if (ti(t) && typeof o == "function") {
              o(t, {
                success: e,
              });
            }
          };
          const a = (t) => {
            r(
              t,
              i === window ||
                i === document ||
                n.useGlobalTarget ||
                Yn(i, t.target),
            );
          };
          const u = (t) => {
            r(t, false);
          };
          window.addEventListener("pointerup", a, s);
          window.addEventListener("pointercancel", u, s);
        };
        i.forEach((t) => {
          var e;
          (n.useGlobalTarget ? window : t).addEventListener(
            "pointerdown",
            r,
            s,
          );
          if ((0, Hn.R)(t)) {
            t.addEventListener("focus", (t) =>
              ((t, e) => {
                const n = t.currentTarget;
                if (!n) {
                  return;
                }
                const i = Qn(() => {
                  if (Gn.has(n)) {
                    return;
                  }
                  Jn(n, "down");
                  const t = Qn(() => {
                    Jn(n, "up");
                  });
                  n.addEventListener("keyup", t, e);
                  n.addEventListener("blur", () => Jn(n, "cancel"), e);
                });
                n.addEventListener("keydown", i, e);
                n.addEventListener(
                  "blur",
                  () => n.removeEventListener("keydown", i),
                  e,
                );
              })(t, s),
            );
            e = t;
            if (
              !Zn.has(e.tagName) &&
              e.tabIndex === -1 &&
              !t.hasAttribute("tabindex")
            ) {
              t.tabIndex = 0;
            }
          }
        });
        return o;
      }
      function ni(t, e, n) {
        const { props: i } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) {
          return;
        }
        if (t.animationState && i.whileTap) {
          t.animationState.setActive("whileTap", n === "Start");
        }
        const s = i["onTap" + (n === "End" ? "" : n)];
        if (s) {
          Et.Wi.postRender(() => s(e, Ot(e)));
        }
      }
      const ii = new WeakMap();
      const si = new WeakMap();
      const oi = (t) => {
        const e = ii.get(t.target);
        if (e) {
          e(t);
        }
      };
      const ri = (t) => {
        t.forEach(oi);
      };
      function ai(t, e, n) {
        const i = (function ({ root: t, ...e }) {
          const n = t || document;
          if (!si.has(n)) {
            si.set(n, {});
          }
          const i = si.get(n);
          const s = JSON.stringify(e);
          i[s] ||= new IntersectionObserver(ri, {
            root: t,
            ...e,
          });
          return i[s];
        })(e);
        ii.set(t, n);
        i.observe(t);
        return () => {
          ii.delete(t);
          i.unobserve(t);
        };
      }
      const ui = {
        some: 0,
        all: 1,
      };
      const li = {
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
              const { root: e, margin: n, amount: i = "some", once: s } = t;
              const o = {
                root: e ? e.current : undefined,
                rootMargin: n,
                threshold: typeof i == "number" ? i : ui[i],
              };
              return ai(this.node.current, o, (t) => {
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
                const { onViewportEnter: n, onViewportLeave: i } =
                  this.node.getProps();
                const o = e ? n : i;
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
                this.unmount = ei(
                  t,
                  (t, e) => {
                    ni(this.node, e, "Start");
                    return (t, { success: e }) =>
                      ni(this.node, t, e ? "End" : "Cancel");
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
              this.unmount = (0, qt.z)(
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
                  const [i, s, o] = qn(t, n);
                  const r = (t) => {
                    if (!Xn(t)) {
                      return;
                    }
                    const { target: n } = t;
                    const i = e(n, t);
                    if (typeof i != "function" || !n) {
                      return;
                    }
                    const o = (t) => {
                      if (Xn(t)) {
                        i(t);
                        n.removeEventListener("pointerleave", o);
                      }
                    };
                    n.addEventListener("pointerleave", o, s);
                  };
                  i.forEach((t) => {
                    t.addEventListener("pointerenter", r, s);
                  });
                  return o;
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
      const ci = et(
        {
          ...xt,
          ...li,
          ...Wn,
          ...{
            layout: {
              ProjectionNode: Nn,
              MeasureLayout: Se,
            },
          },
        },
        u,
      );
    },
    23183: function (t, e, n) {
      n.d(e, {
        J: () => w,
      });
      var i = n(18011);
      var s = n(81077);
      var o = n(26975);
      var r = n(94309);
      var a = n(53345);
      const u = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      function l(t, e, n = 1) {
        (0, o.k)(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
          "max-css-var-depth",
        );
        const [i, s] = (function (t) {
          const e = u.exec(t);
          if (!e) {
            return [,];
          }
          const [, n, i, s] = e;
          return [`--${n ?? i}`, s];
        })(t);
        if (!i) {
          return;
        }
        const c = window.getComputedStyle(e).getPropertyValue(i);
        if (c) {
          const t = c.trim();
          if ((0, r.P)(t)) {
            return parseFloat(t);
          } else {
            return t;
          }
        }
        if ((0, a.t)(s)) {
          return l(s, e, n + 1);
        } else {
          return s;
        }
      }
      var c = n(63062);
      var h = n(71226);
      var d = n(28779);
      var p = n(7741);
      const f = new Set(["auto", "none", "0"]);
      var m = n(37410);
      class g extends c.e {
        constructor(t, e, n, i, s) {
          super(t, e, n, i, s, true);
        }
        readKeyframes() {
          const { unresolvedKeyframes: t, element: e, name: n } = this;
          if (!e || !e.current) {
            return;
          }
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let i = t[n];
            if (typeof i == "string" && ((i = i.trim()), (0, a.t)(i))) {
              const s = l(i, e.current);
              if (s !== undefined) {
                t[n] = s;
              }
              if (n === t.length - 1) {
                this.finalKeyframe = i;
              }
            }
          }
          this.resolveNoneKeyframes();
          if (!i.z.has(n) || t.length !== 2) {
            return;
          }
          const [o, r] = t;
          const u = (0, s.C)(o);
          const c = (0, s.C)(r);
          if (u !== c) {
            if ((0, m.mP)(u) && (0, m.mP)(c)) {
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
              (typeof (i = t[e]) == "number"
                ? i === 0
                : i === null || i === "none" || i === "0" || (0, h.W)(i))
            ) {
              n.push(e);
            }
          }
          var i;
          if (n.length) {
            (function (t, e, n) {
              let i;
              let s = 0;
              while (s < t.length && !i) {
                const e = t[s];
                if (
                  typeof e == "string" &&
                  !f.has(e) &&
                  (0, d.V)(e).values.length
                ) {
                  i = t[s];
                }
                s++;
              }
              if (i && n) {
                for (const s of e) {
                  t[s] = (0, p.T)(n, i);
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
          const i = e[e.length - 1];
          if (i !== undefined) {
            t.getValue(n, i).jump(i, false);
          }
        }
        measureEndState() {
          const { element: t, name: e, unresolvedKeyframes: n } = this;
          if (!t || !t.current) {
            return;
          }
          const i = t.getValue(e);
          if (i) {
            i.jump(this.measuredOrigin, false);
          }
          const s = n.length - 1;
          const o = n[s];
          n[s] = m.lw[e](
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
        D: () => i,
      });
      const i = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    3622: function (t, e, n) {
      n.d(e, {
        W: () => h,
      });
      var i = n(50477);
      var s = n(38255);
      var o = n(53345);
      var r = n(10301);
      var a = n(23183);
      var u = n(55469);
      var l = n(68416);
      var c = n(86740);
      class h extends a.J {
        constructor() {
          super(...arguments);
          this.type = "html";
          this.renderInstance = l.N;
        }
        readValueFromInstance(t, e) {
          if (i.G.has(e)) {
            if (this.projection?.isProjecting) {
              return (0, s.E$)(e);
            } else {
              return (0, s.RT)(t, e);
            }
          }
          {
            n = t;
            const i = window.getComputedStyle(n);
            const s = ((0, o.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            if (typeof s == "string") {
              return s.trim();
            } else {
              return s;
            }
          }
          var n;
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, r.J)(t, e);
        }
        build(t, e, n) {
          (0, u.r)(t, e, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, c.U)(t, e, n);
        }
      }
    },
    55469: function (t, e, n) {
      n.d(e, {
        r: () => l,
      });
      var i = n(50477);
      var s = n(53345);
      const o = (t, e) => (e && typeof t == "number" ? e.transform(t) : t);
      var r = n(75456);
      const a = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      const u = i._.length;
      function l(t, e, n) {
        const { style: l, vars: c, transformOrigin: h } = t;
        let d = false;
        let p = false;
        for (const t in e) {
          const n = e[t];
          if (i.G.has(t)) {
            d = true;
          } else if ((0, s.f)(t)) {
            c[t] = n;
          } else {
            const e = o(n, r.j[t]);
            if (t.startsWith("origin")) {
              p = true;
              h[t] = e;
            } else {
              l[t] = e;
            }
          }
        }
        if (!e.transform) {
          if (d || n) {
            l.transform = (function (t, e, n) {
              let s = "";
              let l = true;
              for (let c = 0; c < u; c++) {
                const u = i._[c];
                const h = t[u];
                if (h === undefined) {
                  continue;
                }
                let d = true;
                d =
                  typeof h == "number"
                    ? h === (u.startsWith("scale") ? 1 : 0)
                    : parseFloat(h) === 0;
                if (!d || n) {
                  const t = o(h, r.j[u]);
                  if (!d) {
                    l = false;
                    s += `${a[u] || u}(${t}) `;
                  }
                  if (n) {
                    e[u] = t;
                  }
                }
              }
              s = s.trim();
              if (n) {
                s = n(e, l ? "" : s);
              } else if (l) {
                s = "none";
              }
              return s;
            })(e, t.transform, n);
          } else {
            l.transform &&= "none";
          }
        }
        if (p) {
          const { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = h;
          l.transformOrigin = `${t} ${e} ${n}`;
        }
      }
    },
    68416: function (t, e, n) {
      function i(t, { style: e, vars: n }, i, s) {
        const o = t.style;
        let r;
        for (r in e) {
          o[r] = e[r];
        }
        s?.applyProjectionStyles(o, i);
        for (r in n) {
          o.setProperty(r, n[r]);
        }
      }
      n.d(e, {
        N: () => i,
      });
    },
    86740: function (t, e, n) {
      n.d(e, {
        U: () => o,
      });
      var i = n(45875);
      var s = n(99246);
      function o(t, e, n) {
        const { style: o } = t;
        const r = {};
        for (const a in o) {
          if (
            (0, i.i)(o[a]) ||
            (e.style && (0, i.i)(e.style[a])) ||
            (0, s.j)(a, t) ||
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
        R: () => i,
      });
      const i = new WeakMap();
    },
    65504: function (t, e, n) {
      n.d(e, {
        e: () => p,
      });
      var i = n(50477);
      var s = n(90648);
      var o = n(95398);
      var r = n(23183);
      var a = n(50638);
      var u = n(85670);
      const l = new Set([
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
          if (i.G.has(e)) {
            const t = (0, s.A)(e);
            return (t && t.default) || 0;
          }
          e = l.has(e) ? e : (0, a.D)(e);
          return t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, d.U)(t, e, n);
        }
        build(t, e, n) {
          (0, u.i)(t, e, this.isSVGTag, n.transformTemplate, n.style);
        }
        renderInstance(t, e, n, i) {
          (function (t, e, n, i) {
            (0, h.N)(t, e, undefined, i);
            for (const n in e.attrs) {
              t.setAttribute(l.has(n) ? n : (0, a.D)(n), e.attrs[n]);
            }
          })(t, e, 0, i);
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
      var i = n(55469);
      var s = n(57360);
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
          pathLength: u,
          pathSpacing: l = 1,
          pathOffset: c = 0,
          ...h
        },
        d,
        p,
        f,
      ) {
        (0, i.r)(t, h, p);
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
        if (u !== undefined) {
          (function (t, e, n = 1, i = 0, a = true) {
            t.pathLength = 1;
            const u = a ? o : r;
            t[u.offset] = s.px.transform(-i);
            const l = s.px.transform(e);
            const c = s.px.transform(n);
            t[u.array] = `${l} ${c}`;
          })(m, u, l, c, false);
        }
      }
    },
    38399: function (t, e, n) {
      n.d(e, {
        a: () => i,
      });
      const i = (t) => typeof t == "string" && t.toLowerCase() === "svg";
    },
    81185: function (t, e, n) {
      n.d(e, {
        U: () => r,
      });
      var i = n(45875);
      var s = n(50477);
      var o = n(86740);
      function r(t, e, n) {
        const r = (0, o.U)(t, e, n);
        for (const n in t) {
          if ((0, i.i)(t[n]) || (0, i.i)(e[n])) {
            r[
              s._.indexOf(n) !== -1
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
      var i = n(98922);
      var s = n(77768);
      var o = n(89096);
      function r(t) {
        return (0, i.H)(t.animate) || o.V.some((e) => (0, s.$)(t[e]));
      }
      function a(t) {
        return Boolean(r(t) || t.variants);
      }
    },
    77768: function (t, e, n) {
      function i(t) {
        return typeof t == "string" || Array.isArray(t);
      }
      n.d(e, {
        $: () => i,
      });
    },
    89654: function (t, e, n) {
      n.d(e, {
        x: () => s,
      });
      var i = n(75440);
      function s(t, e, n) {
        const s = t.getProps();
        return (0, i.o)(s, e, n !== undefined ? n : s.custom, t);
      }
    },
    75440: function (t, e, n) {
      function i(t) {
        const e = [{}, {}];
        t?.values.forEach((t, n) => {
          e[0][n] = t.get();
          e[1][n] = t.getVelocity();
        });
        return e;
      }
      function s(t, e, n, s) {
        if (typeof e == "function") {
          const [o, r] = i(s);
          e = e(n !== undefined ? n : t.custom, o, r);
        }
        if (typeof e == "string") {
          e = t.variants && t.variants[e];
        }
        if (typeof e == "function") {
          const [o, r] = i(s);
          e = e(n !== undefined ? n : t.custom, o, r);
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
        e: () => i,
      });
      const i = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
      ];
      const s = ["initial", ...i];
    },
    24939: function (t, e, n) {
      n.d(e, {
        j: () => i,
      });
      const i = typeof window != "undefined";
    },
    78217: function (t, e, n) {
      n.d(e, {
        h: () => s,
      });
      var i = n(3891);
      function s(t) {
        const e = (0, i.useRef)(null);
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
      var i = n(3891);
      const s = n(24939).j ? i.useLayoutEffect : i.useEffect;
    },
    16889: function (t, e, n) {
      n.d(e, {
        c: () => a,
      });
      var i = n(17802);
      var s = n(3891);
      var o = n(21353);
      var r = n(78217);
      function a(t) {
        const e = (0, r.h)(() => (0, i.BX)(t));
        const { isStatic: n } = (0, s.useContext)(o._);
        if (n) {
          const [, n] = (0, s.useState)(t);
          (0, s.useEffect)(() => e.on("change", n), []);
        }
        return e;
      }
    },
    64392: function (t, e, n) {
      n.d(e, {
        H: () => c,
      });
      var i = n(10959);
      var s = n(78217);
      var o = n(63594);
      var r = n(19537);
      var a = n(16889);
      function u(t, e) {
        const n = (0, a.c)(e());
        const i = () => n.set(e());
        i();
        (0, r.L)(() => {
          const e = () => o.Wi.preRender(i, false, true);
          const n = t.map((t) => t.on("change", e));
          return () => {
            n.forEach((t) => t());
            (0, o.Pn)(i);
          };
        });
        return n;
      }
      var l = n(17802);
      function c(t, e, n, s) {
        if (typeof t == "function") {
          return (function (t) {
            l.S1.current = [];
            t();
            const e = u(l.S1.current, t);
            l.S1.current = undefined;
            return e;
          })(t);
        }
        const o =
          typeof e == "function"
            ? e
            : (function (...t) {
                const e = !Array.isArray(t[0]);
                const n = e ? 0 : -1;
                const s = t[0 + n];
                const o = t[1 + n];
                const r = t[2 + n];
                const a = t[3 + n];
                const u = (0, i.s)(o, r, a);
                if (e) {
                  return u(s);
                } else {
                  return u;
                }
              })(e, n, s);
        if (Array.isArray(t)) {
          return h(t, o);
        } else {
          return h([t], ([t]) => o(t));
        }
      }
      function h(t, e) {
        const n = (0, s.h)(() => []);
        return u(t, () => {
          n.length = 0;
          const i = t.length;
          for (let e = 0; e < i; e++) {
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
      var i = n(91385);
      var s = n(45875);
      function o(t, e) {
        const n = t.getValue("willChange");
        o = n;
        if (Boolean((0, s.i)(o) && o.add)) {
          return n.add(e);
        }
        if (!n && i.c.WillChange) {
          const n = new i.c.WillChange("auto");
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
      var i = n(65437);
      var s = n(15244);
      var o = n(52486);
      var r = n(36989);
      var a = n(65399);
      var u = n(6445);
      const l = {
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
        duration: t = l.duration,
        bounce: e = l.bounce,
        velocity: n = l.velocity,
        mass: o = l.mass,
      }) {
        let r;
        let a;
        (0, c.K)(
          t <= (0, s.w)(l.maxDuration),
          "Spring duration must be 10 seconds or less",
          "spring-duration-limit",
        );
        let u = 1 - e;
        u = (0, i.u)(l.minDamping, l.maxDamping, u);
        t = (0, i.u)(l.minDuration, l.maxDuration, (0, s.X)(t));
        if (u < 1) {
          r = (e) => {
            const i = e * u;
            const s = i * t;
            const o = i - n;
            const r = f(e, u);
            const a = Math.exp(-s);
            return h - (o / r) * a;
          };
          a = (e) => {
            const i = e * u * t;
            const s = i * n + n;
            const o = Math.pow(u, 2) * Math.pow(e, 2) * t;
            const a = Math.exp(-i);
            const l = f(Math.pow(e, 2), u);
            return ((-r(e) + h > 0 ? -1 : 1) * ((s - o) * a)) / l;
          };
        } else {
          r = (e) => Math.exp(-e * t) * ((e - n) * t + 1) - h;
          a = (e) => Math.exp(-e * t) * (t * t * (n - e));
        }
        const d = (function (t, e, n) {
          let i = n;
          for (let n = 1; n < p; n++) {
            i -= t(i) / e(i);
          }
          return i;
        })(r, a, 5 / t);
        t = (0, s.w)(t);
        if (isNaN(d)) {
          return {
            stiffness: l.stiffness,
            damping: l.damping,
            duration: t,
          };
        }
        {
          const e = Math.pow(d, 2) * o;
          return {
            stiffness: e,
            damping: u * 2 * Math.sqrt(o * e),
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
      function y(t = l.visualDuration, e = l.bounce) {
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
            velocity: l.velocity,
            stiffness: l.stiffness,
            damping: l.damping,
            mass: l.mass,
            isResolvedFromDuration: false,
            ...t,
          };
          if (!v(t, g) && v(t, m)) {
            if (t.visualDuration) {
              const n = t.visualDuration;
              const s = (Math.PI * 2) / (n * 1.2);
              const o = s * s;
              const r =
                (0, i.u)(0.05, 1, 1 - (t.bounce || 0)) * 2 * Math.sqrt(o);
              e = {
                ...e,
                mass: l.mass,
                stiffness: o,
                damping: r,
              };
            } else {
              const n = d(t);
              e = {
                ...e,
                ...n,
                mass: l.mass,
              };
              e.isResolvedFromDuration = true;
            }
          }
          return e;
        })({
          ...n,
          velocity: -(0, s.X)(n.velocity || 0),
        });
        const E = P || 0;
        const A = x / (Math.sqrt(w * b) * 2);
        const C = p - h;
        const M = (0, s.X)(Math.sqrt(w / b));
        const k = Math.abs(C) < 5;
        let R;
        a ||= k ? l.restSpeed.granular : l.restSpeed.default;
        c ||= k ? l.restDelta.granular : l.restDelta.default;
        if (A < 1) {
          const t = f(M, A);
          R = (e) => {
            const n = Math.exp(-A * M * e);
            return (
              p -
              n *
                (((E + A * M * C) / t) * Math.sin(t * e) + C * Math.cos(t * e))
            );
          };
        } else if (A === 1) {
          R = (t) => p - Math.exp(-M * t) * (C + (E + M * C) * t);
        } else {
          const t = M * Math.sqrt(A * A - 1);
          R = (e) => {
            const n = Math.exp(-A * M * e);
            const i = Math.min(t * e, 300);
            return (
              p -
              (n * ((E + A * M * C) * Math.sinh(i) + t * C * Math.cosh(i))) / t
            );
          };
        }
        const O = {
          calculatedDuration: (T && S) || null,
          next: (t) => {
            const e = R(t);
            if (T) {
              y.done = t >= S;
            } else {
              let n = t === 0 ? E : 0;
              if (A < 1) {
                n = t === 0 ? (0, s.w)(E) : (0, u.P)(R, t, e);
              }
              const i = Math.abs(n) <= a;
              const o = Math.abs(p - e) <= c;
              y.done = i && o;
            }
            y.value = y.done ? p : e;
            return y;
          },
          toString: () => {
            const t = Math.min((0, r.i)(O), r.E);
            const e = (0, o.w)((e) => O.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return O;
      }
      y.applyToOptions = (t) => {
        const e = (0, a.S)(t, 100, y);
        t.ease = e.ease;
        t.duration = (0, s.w)(e.duration);
        t.type = "keyframes";
        return t;
      };
    },
    36989: function (t, e, n) {
      n.d(e, {
        E: () => i,
        i: () => s,
      });
      const i = 20000;
      function s(t) {
        let e = 0;
        let n = t.next(e);
        while (!n.done && e < i) {
          e += 50;
          n = t.next(e);
        }
        if (e >= i) {
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
      var i = n(15244);
      var s = n(36989);
      function o(t, e = 100, n) {
        const o = n({
          ...t,
          keyframes: [0, e],
        });
        const r = Math.min((0, s.i)(o), s.E);
        return {
          type: "keyframes",
          ease: (t) => o.next(r * t).value / e,
          duration: (0, i.X)(r),
        };
      }
    },
    20479: function (t, e, n) {
      function i(t) {
        return typeof t == "function" && "applyToOptions" in t;
      }
      n.d(e, {
        x: () => i,
      });
    },
    6445: function (t, e, n) {
      n.d(e, {
        P: () => o,
      });
      var i = n(5228);
      const s = 5;
      function o(t, e, n) {
        const o = Math.max(e - s, 0);
        return (0, i.R)(n - t(o), e - o);
      }
    },
    63062: function (t, e, n) {
      n.d(e, {
        e: () => d,
        m: () => h,
      });
      var i = n(37410);
      var s = n(63594);
      const o = new Set();
      let r = false;
      let a = false;
      let u = false;
      function l() {
        if (a) {
          const t = Array.from(o).filter((t) => t.needsMeasurement);
          const e = new Set(t.map((t) => t.element));
          const n = new Map();
          e.forEach((t) => {
            const e = (0, i.Ei)(t);
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
        o.forEach((t) => t.complete(u));
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
        u = true;
        c();
        l();
        u = false;
      }
      class d {
        constructor(t, e, n, i, s, o = false) {
          this.state = "pending";
          this.isAsync = false;
          this.needsMeasurement = false;
          this.unresolvedKeyframes = [...t];
          this.onComplete = e;
          this.name = n;
          this.motionValue = i;
          this.element = s;
          this.isAsync = o;
        }
        scheduleResolve() {
          this.state = "scheduled";
          if (this.isAsync) {
            o.add(this);
            if (!r) {
              r = true;
              s.Wi.read(c);
              s.Wi.resolveKeyframes(l);
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
            motionValue: i,
          } = this;
          if (t[0] === null) {
            const s = i?.get();
            const o = t[t.length - 1];
            if (s !== undefined) {
              t[0] = s;
            } else if (n && e) {
              const i = n.readValue(e, o);
              if (i != null) {
                t[0] = i;
              }
            }
            if (t[0] === undefined) {
              t[0] = o;
            }
            if (i && s === undefined) {
              i.set(t[0]);
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
        Y: () => s,
      });
      var i = n(54293);
      function s(t) {
        const e = [0];
        (0, i.c)(e, t.length - 1);
        return e;
      }
    },
    54293: function (t, e, n) {
      n.d(e, {
        c: () => o,
      });
      var i = n(66789);
      var s = n(55153);
      function o(t, e) {
        const n = t[t.length - 1];
        for (let o = 1; o <= e; o++) {
          const r = (0, i.Y)(0, e, o);
          t.push((0, s.t)(n, 1, r));
        }
      }
    },
    37410: function (t, e, n) {
      n.d(e, {
        Ei: () => c,
        lw: () => h,
        mP: () => a,
      });
      var i = n(38255);
      var s = n(50477);
      var o = n(53937);
      var r = n(57360);
      const a = (t) => t === o.Rx || t === r.px;
      const u = new Set(["x", "y", "z"]);
      const l = s._.filter((t) => !u.has(t));
      function c(t) {
        const e = [];
        l.forEach((n) => {
          const i = t.getValue(n);
          if (i !== undefined) {
            e.push([n, i.get()]);
            i.set(n.startsWith("scale") ? 1 : 0);
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
        x: (t, { transform: e }) => (0, i.WK)(e, "x"),
        y: (t, { transform: e }) => (0, i.WK)(e, "y"),
      };
      h.translateX = h.x;
      h.translateY = h.y;
    },
    83479: function (t, e, n) {
      function i(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      n.d(e, {
        e: () => i,
      });
    },
    53345: function (t, e, n) {
      n.d(e, {
        f: () => s,
        t: () => r,
      });
      const i = (t) => (e) => typeof e == "string" && e.startsWith(t);
      const s = i("--");
      const o = i("var(--");
      const r = (t) => !!o(t) && a.test(t.split("/*")[0].trim());
      const a =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    52486: function (t, e, n) {
      n.d(e, {
        w: () => i,
      });
      const i = (t, e, n = 10) => {
        let i = "";
        const s = Math.max(Math.round(e / n), 2);
        for (let e = 0; e < s; e++) {
          i += Math.round(t(e / (s - 1)) * 10000) / 10000 + ", ";
        }
        return `linear(${i.substring(0, i.length - 2)})`;
      };
    },
    683: function (t, e, n) {
      n.d(e, {
        Z: () => a,
      });
      var i = n(91385);
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
      var o = n(27984);
      const r = 40;
      function a(t, e) {
        let n = false;
        let a = true;
        const u = {
          delta: 0,
          timestamp: 0,
          isProcessing: false,
        };
        const l = () => (n = true);
        const c = s.reduce((t, n) => {
          t[n] = (function (t, e) {
            let n = new Set();
            let i = new Set();
            let s = false;
            let r = false;
            const a = new WeakSet();
            let u = {
              delta: 0,
              timestamp: 0,
              isProcessing: false,
            };
            let l = 0;
            function c(e) {
              if (a.has(e)) {
                h.schedule(e);
                t();
              }
              l++;
              e(u);
            }
            const h = {
              schedule: (t, e = false, o = false) => {
                const r = o && s ? n : i;
                if (e) {
                  a.add(t);
                }
                if (!r.has(t)) {
                  r.add(t);
                }
                return t;
              },
              cancel: (t) => {
                i.delete(t);
                a.delete(t);
              },
              process: (t) => {
                u = t;
                if (s) {
                  r = true;
                } else {
                  s = true;
                  [n, i] = [i, n];
                  n.forEach(c);
                  if (e && o.f.value) {
                    o.f.value.frameloop[e].push(l);
                  }
                  l = 0;
                  n.clear();
                  s = false;
                  if (r) {
                    r = false;
                    h.process(t);
                  }
                }
              },
            };
            return h;
          })(l, e ? n : undefined);
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
          const s = i.c.useManualTiming ? u.timestamp : performance.now();
          n = false;
          if (!i.c.useManualTiming) {
            u.delta = a ? 1000 / 60 : Math.max(Math.min(s - u.timestamp, r), 1);
          }
          u.timestamp = s;
          u.isProcessing = true;
          h.process(u);
          d.process(u);
          p.process(u);
          f.process(u);
          m.process(u);
          g.process(u);
          v.process(u);
          y.process(u);
          u.isProcessing = false;
          if (n && e) {
            a = false;
            t(w);
          }
        };
        return {
          schedule: s.reduce((e, i) => {
            const s = c[i];
            e[i] = (e, i = false, o = false) => {
              if (!n) {
                n = true;
                a = true;
                if (!u.isProcessing) {
                  t(w);
                }
              }
              return s.schedule(e, i, o);
            };
            return e;
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < s.length; e++) {
              c[s[e]].cancel(t);
            }
          },
          state: u,
          steps: c,
        };
      }
    },
    63594: function (t, e, n) {
      n.d(e, {
        Pn: () => r,
        Wi: () => o,
        w0: () => a,
        yL: () => u,
      });
      var i = n(43594);
      var s = n(683);
      const {
        schedule: o,
        cancel: r,
        state: a,
        steps: u,
      } = (0, s.Z)(
        typeof requestAnimationFrame != "undefined"
          ? requestAnimationFrame
          : i.Z,
        true,
      );
    },
    69547: function (t, e, n) {
      n.d(e, {
        g: () => s,
      });
      var i = n(683);
      const { schedule: s, cancel: o } = (0, i.Z)(queueMicrotask, false);
    },
    35449: function (t, e, n) {
      n.d(e, {
        X: () => a,
      });
      var i = n(91385);
      var s = n(63594);
      let o;
      function r() {
        o = undefined;
      }
      const a = {
        now: () => {
          if (o === undefined) {
            a.set(
              s.w0.isProcessing || i.c.useManualTiming
                ? s.w0.timestamp
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
      const i = (t) => (t * 180) / Math.PI;
      const s = (t) => {
        const e = i(Math.atan2(t[1], t[0]));
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
        rotate: s,
        rotateZ: s,
        skewX: (t) => i(Math.atan(t[1])),
        skewY: (t) => i(Math.atan(t[2])),
        skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
      };
      const r = (t) => {
        if ((t %= 360) < 0) {
          t += 360;
        }
        return t;
      };
      const a = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]);
      const u = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]);
      const l = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: a,
        scaleY: u,
        scale: (t) => (a(t) + u(t)) / 2,
        rotateX: (t) => r(i(Math.atan2(t[6], t[5]))),
        rotateY: (t) => r(i(Math.atan2(-t[2], t[0]))),
        rotateZ: s,
        rotate: s,
        skewX: (t) => i(Math.atan(t[4])),
        skewY: (t) => i(Math.atan(t[1])),
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
        let i;
        let s;
        if (n) {
          i = l;
          s = n;
        } else {
          const e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          i = o;
          s = e;
        }
        if (!s) {
          return c(e);
        }
        const r = i[e];
        const a = s[1].split(",").map(p);
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
        z: () => s,
      });
      var i = n(50477);
      const s = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...i._,
      ]);
    },
    50477: function (t, e, n) {
      n.d(e, {
        G: () => s,
        _: () => i,
      });
      const i = [
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
      const s = (() => new Set(i))();
    },
    32838: function (t, e, n) {
      n.d(e, {
        P: () => i,
      });
      const i = {
        layout: 0,
        mainThread: 0,
        waapi: 0,
      };
    },
    27984: function (t, e, n) {
      n.d(e, {
        f: () => i,
      });
      const i = {
        value: null,
        addProjectionMetrics: null,
      };
    },
    10959: function (t, e, n) {
      n.d(e, {
        s: () => c,
      });
      var i = n(91385);
      var s = n(43594);
      var o = n(60333);
      var r = n(26975);
      var a = n(66789);
      var u = n(65437);
      var l = n(98029);
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
          const a = n || i.c.mix || l.C;
          const u = t.length - 1;
          for (let n = 0; n < u; n++) {
            let i = a(t[n], t[n + 1]);
            if (e) {
              const t = Array.isArray(e) ? e[n] || s.Z : e;
              i = (0, o.z)(t, i);
            }
            r.push(i);
          }
          return r;
        })(e, c, h);
        const m = f.length;
        const g = (n) => {
          if (p && n < t[0]) {
            return e[0];
          }
          let i = 0;
          if (m > 1) {
            for (; i < t.length - 2 && !(n < t[i + 1]); i++);
          }
          const s = (0, a.Y)(t[i], t[i + 1], n);
          return f[i](s);
        };
        if (n) {
          return (e) => g((0, u.u)(t[0], t[d - 1], e));
        } else {
          return g;
        }
      }
    },
    80602: function (t, e, n) {
      n.d(e, {
        R: () => s,
      });
      var i = n(43754);
      function s(t) {
        return (0, i.K)(t) && "offsetHeight" in t;
      }
    },
    59634: function (t, e, n) {
      n.d(e, {
        v: () => s,
      });
      var i = n(43754);
      function s(t) {
        return (0, i.K)(t) && "ownerSVGElement" in t;
      }
    },
    30038: function (t, e, n) {
      n.d(e, {
        r: () => s,
      });
      var i = n(59634);
      function s(t) {
        return (0, i.v)(t) && t.tagName === "svg";
      }
    },
    98029: function (t, e, n) {
      n.d(e, {
        C: () => T,
      });
      var i = n(60333);
      var s = n(26975);
      var o = n(53345);
      var r = n(39178);
      var a = n(28779);
      var u = n(94306);
      var l = n(63709);
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
        const i = t * t;
        const s = n * (e * e - i) + i;
        if (s < 0) {
          return 0;
        } else {
          return Math.sqrt(s);
        }
      };
      const m = [u.$, h.m, l.J];
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
        let i = e.parse(t);
        if (e === l.J) {
          i = (function ({ hue: t, saturation: e, lightness: n, alpha: i }) {
            t /= 360;
            n /= 100;
            let s = 0;
            let o = 0;
            let r = 0;
            if ((e /= 100)) {
              const i = n < 0.5 ? n * (1 + e) : n + e - n * e;
              const a = n * 2 - i;
              s = c(a, i, t + 1 / 3);
              o = c(a, i, t);
              r = c(a, i, t - 1 / 3);
            } else {
              s = o = r = n;
            }
            return {
              red: Math.round(s * 255),
              green: Math.round(o * 255),
              blue: Math.round(r * 255),
              alpha: i,
            };
          })(i);
        }
        return i;
      }
      const v = (t, e) => {
        const n = g(t);
        const i = g(e);
        if (!n || !i) {
          return d(t, e);
        }
        const s = {
          ...n,
        };
        return (t) => {
          s.red = f(n.red, i.red, t);
          s.green = f(n.green, i.green, t);
          s.blue = f(n.blue, i.blue, t);
          s.alpha = (0, p.t)(n.alpha, i.alpha, t);
          return h.m.transform(s);
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
        const i = n.length;
        const s = t.map((t, n) => x(t)(t, e[n]));
        return (t) => {
          for (let e = 0; e < i; e++) {
            n[e] = s[e](t);
          }
          return n;
        };
      }
      function S(t, e) {
        const n = {
          ...t,
          ...e,
        };
        const i = {};
        for (const s in n) {
          if (t[s] !== undefined && e[s] !== undefined) {
            i[s] = x(t[s])(t[s], e[s]);
          }
        }
        return (t) => {
          for (const e in i) {
            n[e] = i[e](t);
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
            return (0, i.z)(
              b(
                (function (t, e) {
                  const n = [];
                  const i = {
                    color: 0,
                    var: 0,
                    number: 0,
                  };
                  for (let s = 0; s < e.values.length; s++) {
                    const o = e.types[s];
                    const r = t.indexes[o][i[o]];
                    const a = t.values[r] ?? 0;
                    n[s] = a;
                    i[o]++;
                  }
                  return n;
                })(o, r),
                r.values,
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
        t: () => i,
      });
      const i = (t, e, n) => t + (e - t) * n;
    },
    6419: function (t, e, n) {
      function i(t, e, n) {
        if (t instanceof EventTarget) {
          return [t];
        }
        if (typeof t == "string") {
          let i = document;
          if (e) {
            i = e.current;
          }
          const s = n?.[t] ?? i.querySelectorAll(t);
          if (s) {
            return Array.from(s);
          } else {
            return [];
          }
        }
        return Array.from(t);
      }
      n.d(e, {
        I: () => i,
      });
    },
    17802: function (t, e, n) {
      n.d(e, {
        BX: () => l,
        S1: () => a,
      });
      var i = n(58088);
      var s = n(5228);
      var o = n(35449);
      var r = n(63594);
      const a = {
        current: undefined,
      };
      class u {
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
          this.events[t] ||= new i.L();
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
      function l(t, e) {
        return new u(t, e);
      }
    },
    94306: function (t, e, n) {
      n.d(e, {
        $: () => s,
      });
      var i = n(41281);
      const s = {
        test: (0, n(88463).i)("#"),
        parse: function (t) {
          let e = "";
          let n = "";
          let i = "";
          let s = "";
          if (t.length > 5) {
            e = t.substring(1, 3);
            n = t.substring(3, 5);
            i = t.substring(5, 7);
            s = t.substring(7, 9);
          } else {
            e = t.substring(1, 2);
            n = t.substring(2, 3);
            i = t.substring(3, 4);
            s = t.substring(4, 5);
            e += e;
            n += n;
            i += i;
            s += s;
          }
          return {
            red: parseInt(e, 16),
            green: parseInt(n, 16),
            blue: parseInt(i, 16),
            alpha: s ? parseInt(s, 16) / 255 : 1,
          };
        },
        transform: i.m.transform,
      };
    },
    63709: function (t, e, n) {
      n.d(e, {
        J: () => a,
      });
      var i = n(53937);
      var s = n(57360);
      var o = n(53848);
      var r = n(88463);
      const a = {
        test: (0, r.i)("hsl", "hue"),
        parse: (0, r.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          s.aQ.transform((0, o.N)(e)) +
          ", " +
          s.aQ.transform((0, o.N)(n)) +
          ", " +
          (0, o.N)(i.Fq.transform(r)) +
          ")",
      };
    },
    39178: function (t, e, n) {
      n.d(e, {
        $: () => r,
      });
      var i = n(94306);
      var s = n(63709);
      var o = n(41281);
      const r = {
        test: (t) => o.m.test(t) || i.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
              ? s.J.parse(t)
              : i.$.parse(t),
        transform: (t) =>
          typeof t == "string"
            ? t
            : t.hasOwnProperty("red")
              ? o.m.transform(t)
              : s.J.transform(t),
        getAnimatableNone: (t) => {
          const e = r.parse(t);
          e.alpha = 0;
          return r.transform(e);
        },
      };
    },
    41281: function (t, e, n) {
      n.d(e, {
        m: () => u,
      });
      var i = n(65437);
      var s = n(53937);
      var o = n(53848);
      var r = n(88463);
      const a = {
        ...s.Rx,
        transform: (t) => Math.round(((t) => (0, i.u)(0, 255, t))(t)),
      };
      const u = {
        test: (0, r.i)("rgb", "red"),
        parse: (0, r.d)("red", "green", "blue"),
        transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) =>
          "rgba(" +
          a.transform(t) +
          ", " +
          a.transform(e) +
          ", " +
          a.transform(n) +
          ", " +
          (0, o.N)(s.Fq.transform(i)) +
          ")",
      };
    },
    88463: function (t, e, n) {
      n.d(e, {
        d: () => r,
        i: () => o,
      });
      var i = n(84755);
      const s =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      const o = (t, e) => (n) =>
        Boolean(
          (typeof n == "string" && s.test(n) && n.startsWith(t)) ||
          (e &&
            !(function (t) {
              return t == null;
            })(n) &&
            Object.prototype.hasOwnProperty.call(n, e)),
        );
      const r = (t, e, n) => (s) => {
        if (typeof s != "string") {
          return s;
        }
        const [o, r, a, u] = s.match(i.K);
        return {
          [t]: parseFloat(o),
          [e]: parseFloat(r),
          [n]: parseFloat(a),
          alpha: u !== undefined ? parseFloat(u) : 1,
        };
      };
    },
    49260: function (t, e, n) {
      n.d(e, {
        h: () => u,
      });
      var i = n(28779);
      var s = n(84755);
      const o = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function r(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if (e === "drop-shadow") {
          return t;
        }
        const [i] = n.match(s.K) || [];
        if (!i) {
          return t;
        }
        const r = n.replace(i, "");
        let a = o.has(e) ? 1 : 0;
        if (i !== n) {
          a *= 100;
        }
        return e + "(" + a + r + ")";
      }
      const a = /\b([a-z-]*)\(.*?\)/gu;
      const u = {
        ...i.P,
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
      var i = n(39178);
      const s =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var o = n(84755);
      var r = n(53848);
      const a = "number";
      const u = "color";
      const l = "var";
      const c = "var(";
      const h = "${}";
      const d =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function p(t) {
        const e = t.toString();
        const n = [];
        const s = {
          color: [],
          number: [],
          var: [],
        };
        const o = [];
        let r = 0;
        const p = e
          .replace(d, (t) => {
            if (i.$.test(t)) {
              s.color.push(r);
              o.push(u);
              n.push(i.$.parse(t));
            } else if (t.startsWith(c)) {
              s.var.push(r);
              o.push(l);
              n.push(t);
            } else {
              s.number.push(r);
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
          indexes: s,
          types: o,
        };
      }
      function f(t) {
        return p(t).values;
      }
      function m(t) {
        const { split: e, types: n } = p(t);
        const s = e.length;
        return (t) => {
          let o = "";
          for (let l = 0; l < s; l++) {
            o += e[l];
            if (t[l] !== undefined) {
              const e = n[l];
              o +=
                e === a ? (0, r.N)(t[l]) : e === u ? i.$.transform(t[l]) : t[l];
            }
          }
          return o;
        };
      }
      const g = (t) =>
        typeof t == "number" ? 0 : i.$.test(t) ? i.$.getAnimatableNone(t) : t;
      const v = {
        test: function (t) {
          return (
            isNaN(t) &&
            typeof t == "string" &&
            (t.match(o.K)?.length || 0) + (t.match(s)?.length || 0) > 0
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
      var i = n(53937);
      var s = n(57360);
      var o = n(31024);
      const r = [
        i.Rx,
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
      const a = (t) => r.find((0, o.l)(t));
    },
    90648: function (t, e, n) {
      n.d(e, {
        A: () => r,
      });
      var i = n(39178);
      var s = n(49260);
      const o = {
        ...n(75456).j,
        color: i.$,
        backgroundColor: i.$,
        outlineColor: i.$,
        fill: i.$,
        stroke: i.$,
        borderColor: i.$,
        borderTopColor: i.$,
        borderRightColor: i.$,
        borderBottomColor: i.$,
        borderLeftColor: i.$,
        filter: s.h,
        WebkitFilter: s.h,
      };
      const r = (t) => o[t];
    },
    75456: function (t, e, n) {
      n.d(e, {
        j: () => a,
      });
      var i = n(53937);
      const s = {
        ...i.Rx,
        transform: Math.round,
      };
      var o = n(57360);
      const r = {
        rotate: o.RW,
        rotateX: o.RW,
        rotateY: o.RW,
        rotateZ: o.RW,
        scale: i.bA,
        scaleX: i.bA,
        scaleY: i.bA,
        scaleZ: i.bA,
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
        opacity: i.Fq,
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
        zIndex: s,
        fillOpacity: i.Fq,
        strokeOpacity: i.Fq,
        numOctaves: s,
      };
    },
    53937: function (t, e, n) {
      n.d(e, {
        Fq: () => o,
        Rx: () => s,
        bA: () => r,
      });
      var i = n(65437);
      const s = {
        test: (t) => typeof t == "number",
        parse: parseFloat,
        transform: (t) => t,
      };
      const o = {
        ...s,
        transform: (t) => (0, i.u)(0, 1, t),
      };
      const r = {
        ...s,
        default: 1,
      };
    },
    57360: function (t, e, n) {
      n.d(e, {
        $C: () => l,
        RW: () => s,
        aQ: () => o,
        px: () => r,
        vh: () => a,
        vw: () => u,
      });
      const i = (t) => ({
        test: (e) =>
          typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: (e) => `${e}${t}`,
      });
      const s = i("deg");
      const o = i("%");
      const r = i("px");
      const a = i("vh");
      const u = i("vw");
      const l = (() => ({
        ...o,
        parse: (t) => o.parse(t) / 100,
        transform: (t) => o.transform(t * 100),
      }))();
    },
    31024: function (t, e, n) {
      n.d(e, {
        l: () => i,
      });
      const i = (t) => (e) => e.test(t);
    },
    7741: function (t, e, n) {
      n.d(e, {
        T: () => r,
      });
      var i = n(28779);
      var s = n(49260);
      var o = n(90648);
      function r(t, e) {
        let n = (0, o.A)(t);
        if (n !== s.h) {
          n = i.P;
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
        K: () => i,
      });
      const i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    53848: function (t, e, n) {
      n.d(e, {
        N: () => i,
      });
      const i = (t) => Math.round(t * 100000) / 100000;
    },
    45875: function (t, e, n) {
      n.d(e, {
        i: () => i,
      });
      const i = (t) => Boolean(t && t.getVelocity);
    },
    25013: function (t, e, n) {
      function i(t, e) {
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
        y4: () => i,
      });
    },
    65437: function (t, e, n) {
      n.d(e, {
        u: () => i,
      });
      const i = (t, e, n) => (n > e ? e : n < t ? t : n);
    },
    37919: function (t, e, n) {
      n.d(e, {
        Bn: () => r,
        X7: () => a,
        Z7: () => o,
      });
      var i = n(27467);
      var s = n(6578);
      const o = (t) => 1 - Math.sin(Math.acos(t));
      const r = (0, s.M)(o);
      const a = (0, i.o)(o);
    },
    27467: function (t, e, n) {
      n.d(e, {
        o: () => i,
      });
      const i = (t) => (e) =>
        e <= 0.5 ? t(e * 2) / 2 : (2 - t((1 - e) * 2)) / 2;
    },
    6578: function (t, e, n) {
      n.d(e, {
        M: () => i,
      });
      const i = (t) => (e) => 1 - t(1 - e);
    },
    61209: function (t, e, n) {
      n.d(e, {
        N: () => i,
      });
      const i = (t) => Array.isArray(t) && typeof t[0] != "number";
    },
    26975: function (t, e, n) {
      n.d(e, {
        K: () => i,
        k: () => s,
      });
      let i = () => {};
      let s = () => {};
    },
    91385: function (t, e, n) {
      n.d(e, {
        c: () => i,
      });
      const i = {};
    },
    94309: function (t, e, n) {
      n.d(e, {
        P: () => i,
      });
      const i = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    43754: function (t, e, n) {
      function i(t) {
        return typeof t == "object" && t !== null;
      }
      n.d(e, {
        K: () => i,
      });
    },
    71226: function (t, e, n) {
      n.d(e, {
        W: () => i,
      });
      const i = (t) => /^0[^.\s]+$/u.test(t);
    },
    43594: function (t, e, n) {
      n.d(e, {
        Z: () => i,
      });
      const i = (t) => t;
    },
    60333: function (t, e, n) {
      n.d(e, {
        z: () => s,
      });
      const i = (t, e) => (n) => e(t(n));
      const s = (...t) => t.reduce(i);
    },
    66789: function (t, e, n) {
      n.d(e, {
        Y: () => i,
      });
      const i = (t, e, n) => {
        const i = e - t;
        if (i === 0) {
          return 1;
        } else {
          return (n - t) / i;
        }
      };
    },
    58088: function (t, e, n) {
      n.d(e, {
        L: () => s,
      });
      var i = n(25013);
      class s {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          (0, i.y4)(this.subscriptions, t);
          return () => (0, i.cl)(this.subscriptions, t);
        }
        notify(t, e, n) {
          const i = this.subscriptions.length;
          if (i) {
            if (i === 1) {
              this.subscriptions[0](t, e, n);
            } else {
              for (let s = 0; s < i; s++) {
                const i = this.subscriptions[s];
                if (i) {
                  i(t, e, n);
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
        w: () => i,
      });
      const i = (t) => t * 1000;
      const s = (t) => t / 1000;
    },
    5228: function (t, e, n) {
      function i(t, e) {
        if (e) {
          return t * (1000 / e);
        } else {
          return 0;
        }
      }
      n.d(e, {
        R: () => i,
      });
    },
    68031: function (t, e, n) {
      n.d(e, {
        Z: () => l,
      });
      var i = n(3891);
      function s(t) {
        return (
          typeof t == "string" &&
          t[t.length - 1] === "%" &&
          (function (t) {
            const e = parseFloat(t);
            return !isNaN(e) && isFinite(e);
          })(t.substring(0, t.length - 1))
        );
      }
      function o(t, e, n) {
        if (
          e === 0 &&
          !n &&
          (t == null ? undefined : t.style) &&
          (t == null ? undefined : t.children.length) > 0
        ) {
          t.style.display = "none";
        }
      }
      const r = {
        animating: "rah-animating",
        animatingUp: "rah-animating--up",
        animatingDown: "rah-animating--down",
        animatingToHeightZero: "rah-animating--to-height-zero",
        animatingToHeightAuto: "rah-animating--to-height-auto",
        animatingToHeightSpecific: "rah-animating--to-height-specific",
        static: "rah-static",
        staticHeightZero: "rah-static--height-zero",
        staticHeightAuto: "rah-static--height-auto",
        staticHeightSpecific: "rah-static--height-specific",
      };
      function a(t, e) {
        return [
          t.static,
          e === 0 && t.staticHeightZero,
          typeof e == "number" && e > 0 ? t.staticHeightSpecific : null,
          e === "auto" && t.staticHeightAuto,
        ]
          .filter((t) => t)
          .join(" ");
      }
      const u = [
        "animateOpacity",
        "animationStateClasses",
        "applyInlineTransitions",
        "children",
        "className",
        "contentClassName",
        "contentRef",
        "delay",
        "duration",
        "easing",
        "height",
        "onHeightAnimationEnd",
        "onHeightAnimationStart",
        "style",
        "disableDisplayNone",
      ];
      const l = i.forwardRef((t, e) => {
        const {
          animateOpacity: n = false,
          animationStateClasses: l = {},
          applyInlineTransitions: c = true,
          children: h,
          className: d = "",
          contentClassName: p,
          delay: f = 0,
          disableDisplayNone: m = false,
          duration: g = 500,
          easing: v = "ease",
          height: y,
          onHeightAnimationEnd: w,
          onHeightAnimationStart: x,
          style: b,
          contentRef: S,
        } = t;
        const P = Object.assign({}, t);
        u.forEach((t) => {
          delete P[t];
        });
        const T = (0, i.useRef)(y);
        const E = (0, i.useRef)(null);
        const A = (0, i.useRef)();
        const C = (0, i.useRef)();
        const M = (0, i.useRef)(Object.assign(Object.assign({}, r), l));
        const k = typeof window != "undefined";
        const R = (0, i.useRef)(
          !!k &&
            !!window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion)").matches,
        );
        const O = R.current ? 0 : f;
        const D = R.current ? 0 : g;
        let V = y;
        let I = "visible";
        if (typeof y == "number") {
          V = y < 0 ? 0 : y;
          I = "hidden";
        } else if (s(V)) {
          V = y === "0%" ? 0 : y;
          I = "hidden";
        }
        const [j, _] = (0, i.useState)(V);
        const [L, F] = (0, i.useState)(I);
        const [B, $] = (0, i.useState)(false);
        const [z, N] = (0, i.useState)(a(M.current, y));
        (0, i.useEffect)(() => {
          o(E.current, j, m);
        }, []);
        (0, i.useEffect)(() => {
          if (y !== T.current && E.current) {
            (function (t, e) {
              if (e === 0 && (t == null ? undefined : t.style)) {
                t.style.display = "";
              }
            })(E.current, T.current);
            E.current.style.overflow = "hidden";
            const t = E.current.offsetHeight;
            E.current.style.overflow = "";
            const e = D + O;
            let n;
            let i;
            let r;
            let u = "hidden";
            const l = T.current === "auto";
            if (typeof y == "number") {
              n = y < 0 ? 0 : y;
              i = n;
            } else if (s(y)) {
              n = y === "0%" ? 0 : y;
              i = n;
            } else {
              n = t;
              i = "auto";
              u = undefined;
            }
            if (l) {
              i = n;
              n = t;
            }
            const c = [
              M.current.animating,
              (T.current === "auto" || y < T.current) && M.current.animatingUp,
              (y === "auto" || y > T.current) && M.current.animatingDown,
              i === 0 && M.current.animatingToHeightZero,
              i === "auto" && M.current.animatingToHeightAuto,
              typeof i == "number" && i > 0
                ? M.current.animatingToHeightSpecific
                : null,
            ]
              .filter((t) => t)
              .join(" ");
            const h = a(M.current, i);
            _(n);
            F("hidden");
            $(!l);
            N(c);
            clearTimeout(C.current);
            clearTimeout(A.current);
            if (l) {
              r = true;
              C.current = setTimeout(() => {
                _(i);
                F(u);
                $(r);
                if (x != null) {
                  x(i);
                }
              }, 50);
              A.current = setTimeout(() => {
                $(false);
                N(h);
                o(E.current, i, m);
                if (w != null) {
                  w(i);
                }
              }, e);
            } else {
              if (x != null) {
                x(n);
              }
              C.current = setTimeout(() => {
                _(i);
                F(u);
                $(false);
                N(h);
                if (y !== "auto") {
                  o(E.current, n, m);
                }
                if (w != null) {
                  w(n);
                }
              }, e);
            }
          }
          T.current = y;
          return () => {
            clearTimeout(C.current);
            clearTimeout(A.current);
          };
        }, [y]);
        const W = Object.assign(Object.assign({}, b), {
          height: j,
          overflow: L || (b == null ? undefined : b.overflow),
        });
        if (B && c) {
          W.transition = `height ${D}ms ${v} ${O}ms`;
          if (b == null ? undefined : b.transition) {
            W.transition = `${b.transition}, ${W.transition}`;
          }
          W.WebkitTransition = W.transition;
        }
        const U = {};
        if (n) {
          U.transition = `opacity ${D}ms ${v} ${O}ms`;
          U.WebkitTransition = U.transition;
          if (j === 0) {
            U.opacity = 0;
          }
        }
        const q = P["aria-hidden"] !== undefined ? P["aria-hidden"] : y === 0;
        return i.createElement(
          "div",
          Object.assign({}, P, {
            "aria-hidden": q,
            className: `${z} ${d}`,
            style: W,
            ref: e,
          }),
          i.createElement(
            "div",
            {
              className: p,
              style: U,
              ref: (t) => {
                E.current = t;
                if (S) {
                  S.current = t;
                }
              },
            },
            h,
          ),
        );
      });
    },
    63214: function (t, e, n) {
      n.d(e, {
        NO: () => V,
        Yn: () => O,
        a4: () => g,
        mr: () => j,
        mw: () => w,
      });
      var i;
      var s = -1;
      function o(t) {
        addEventListener(
          "pageshow",
          function (e) {
            if (e.persisted) {
              s = e.timeStamp;
              t(e);
            }
          },
          true,
        );
      }
      function r() {
        return (
          window.performance &&
          performance.getEntriesByType &&
          performance.getEntriesByType("navigation")[0]
        );
      }
      function a() {
        var t = r();
        return (t && t.activationStart) || 0;
      }
      function u(t, e) {
        var n = r();
        var i = "navigate";
        if (s >= 0) {
          i = "back-forward-cache";
        } else if (n) {
          i =
            document.prerendering || a() > 0
              ? "prerender"
              : n.type.replace(/_/g, "-");
        }
        return {
          name: t,
          value: e === undefined ? -1 : e,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v3-${Date.now()}-${Math.floor(Math.random() * 8999999999999) + 1000000000000}`,
          navigationType: i,
        };
      }
      function l(t, e, n) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            var i = new PerformanceObserver(function (t) {
              e(t.getEntries());
            });
            i.observe(
              Object.assign(
                {
                  type: t,
                  buffered: true,
                },
                n || {},
              ),
            );
            return i;
          }
        } catch (t) {}
      }
      function c(t, e) {
        var n = function n(i) {
          if (i.type === "pagehide" || document.visibilityState === "hidden") {
            t(i);
            if (e) {
              removeEventListener("visibilitychange", n, true);
              removeEventListener("pagehide", n, true);
            }
          }
        };
        addEventListener("visibilitychange", n, true);
        addEventListener("pagehide", n, true);
      }
      function h(t, e, n, i) {
        var s;
        var o;
        return function (r) {
          if (
            e.value >= 0 &&
            (r || i) &&
            ((o = e.value - (s || 0)) || s === undefined)
          ) {
            s = e.value;
            e.delta = o;
            e.rating = (function (t, e) {
              if (t > e[1]) {
                return "poor";
              } else if (t > e[0]) {
                return "needs-improvement";
              } else {
                return "good";
              }
            })(e.value, n);
            t(e);
          }
        };
      }
      var d = -1;
      function p() {
        if (document.visibilityState !== "hidden" || document.prerendering) {
          return Infinity;
        } else {
          return 0;
        }
      }
      function f() {
        c(function (t) {
          var e = t.timeStamp;
          d = e;
        }, true);
      }
      function m() {
        if (d < 0) {
          d = p();
          f();
          o(function () {
            setTimeout(function () {
              d = p();
              f();
            }, 0);
          });
        }
        return {
          get firstHiddenTime() {
            return d;
          },
        };
      }
      function g(t, e) {
        e = e || {};
        var n;
        var i = [1800, 3000];
        var s = m();
        var r = u("FCP");
        function c(t) {
          t.forEach(function (t) {
            if (t.name === "first-contentful-paint") {
              if (p) {
                p.disconnect();
              }
              if (t.startTime < s.firstHiddenTime) {
                r.value = Math.max(t.startTime - a(), 0);
                r.entries.push(t);
                n(true);
              }
            }
          });
        }
        var d =
          window.performance &&
          window.performance.getEntriesByName &&
          window.performance.getEntriesByName("first-contentful-paint")[0];
        var p = d ? null : l("paint", c);
        if (d || p) {
          n = h(t, r, i, e.reportAllChanges);
          if (d) {
            c([d]);
          }
          o(function (s) {
            r = u("FCP");
            n = h(t, r, i, e.reportAllChanges);
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                r.value = performance.now() - s.timeStamp;
                n(true);
              });
            });
          });
        }
      }
      var v = false;
      var y = -1;
      function w(t, e) {
        e = e || {};
        var n = [0.1, 0.25];
        if (!v) {
          g(function (t) {
            y = t.value;
          });
          v = true;
        }
        var i;
        function s(e) {
          if (y > -1) {
            t(e);
          }
        }
        var r = u("CLS", 0);
        var a = 0;
        var d = [];
        function p(t) {
          t.forEach(function (t) {
            if (!t.hadRecentInput) {
              var e = d[0];
              var n = d[d.length - 1];
              if (
                a &&
                t.startTime - n.startTime < 1000 &&
                t.startTime - e.startTime < 5000
              ) {
                a += t.value;
                d.push(t);
              } else {
                a = t.value;
                d = [t];
              }
              if (a > r.value) {
                r.value = a;
                r.entries = d;
                i();
              }
            }
          });
        }
        var f = l("layout-shift", p);
        if (f) {
          i = h(s, r, n, e.reportAllChanges);
          c(function () {
            p(f.takeRecords());
            i(true);
          });
          o(function () {
            a = 0;
            y = -1;
            r = u("CLS", 0);
            i = h(s, r, n, e.reportAllChanges);
          });
        }
      }
      new Date();
      var x = 0;
      var b = Infinity;
      var S = 0;
      function P(t) {
        t.forEach(function (t) {
          if (t.interactionId) {
            b = Math.min(b, t.interactionId);
            S = Math.max(S, t.interactionId);
            x = S ? (S - b) / 7 + 1 : 0;
          }
        });
      }
      function T() {
        if (i) {
          return x;
        } else {
          return performance.interactionCount || 0;
        }
      }
      function E() {
        if (!("interactionCount" in performance) && !i) {
          i = l("event", P, {
            type: "event",
            buffered: true,
            durationThreshold: 0,
          });
        }
      }
      var A = 0;
      function C() {
        return T() - A;
      }
      var M = [];
      var k = {};
      function R(t) {
        var e = M[M.length - 1];
        var n = k[t.interactionId];
        if (n || M.length < 10 || t.duration > e.latency) {
          if (n) {
            n.entries.push(t);
            n.latency = Math.max(n.latency, t.duration);
          } else {
            var i = {
              id: t.interactionId,
              latency: t.duration,
              entries: [t],
            };
            k[i.id] = i;
            M.push(i);
          }
          M.sort(function (t, e) {
            return e.latency - t.latency;
          });
          M.splice(10).forEach(function (t) {
            delete k[t.id];
          });
        }
      }
      function O(t, e) {
        e = e || {};
        var n = [200, 500];
        E();
        var i;
        var s = u("INP");
        function r(t) {
          t.forEach(function (t) {
            if (t.interactionId) {
              R(t);
            }
            if (
              t.entryType === "first-input" &&
              !M.some(function (e) {
                return e.entries.some(function (e) {
                  return (
                    t.duration === e.duration && t.startTime === e.startTime
                  );
                });
              })
            ) {
              R(t);
            }
          });
          var e;
          e = Math.min(M.length - 1, Math.floor(C() / 50));
          var n = M[e];
          if (n && n.latency !== s.value) {
            s.value = n.latency;
            s.entries = n.entries;
            i();
          }
        }
        var a = l("event", r, {
          durationThreshold: e.durationThreshold || 40,
        });
        i = h(t, s, n, e.reportAllChanges);
        if (a) {
          a.observe({
            type: "first-input",
            buffered: true,
          });
          c(function () {
            r(a.takeRecords());
            if (s.value < 0 && C() > 0) {
              s.value = 0;
              s.entries = [];
            }
            i(true);
          });
          o(function () {
            M = [];
            A = T();
            s = u("INP");
            i = h(t, s, n, e.reportAllChanges);
          });
        }
      }
      var D = {};
      function V(t, e) {
        e = e || {};
        var n;
        var i = [2500, 4000];
        var s = m();
        var r = u("LCP");
        function d(t) {
          var e = t[t.length - 1];
          if (e) {
            var i = Math.max(e.startTime - a(), 0);
            if (i < s.firstHiddenTime) {
              r.value = i;
              r.entries = [e];
              n();
            }
          }
        }
        var p = l("largest-contentful-paint", d);
        if (p) {
          n = h(t, r, i, e.reportAllChanges);
          function f() {
            if (!D[r.id]) {
              d(p.takeRecords());
              p.disconnect();
              D[r.id] = true;
              n(true);
            }
          }
          ["keydown", "click"].forEach(function (t) {
            addEventListener(t, f, {
              once: true,
              capture: true,
            });
          });
          c(f, true);
          o(function (s) {
            r = u("LCP");
            n = h(t, r, i, e.reportAllChanges);
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                r.value = performance.now() - s.timeStamp;
                D[r.id] = true;
                n(true);
              });
            });
          });
        }
      }
      var I = function t(e) {
        if (document.prerendering) {
          addEventListener(
            "prerenderingchange",
            function () {
              return t(e);
            },
            true,
          );
        } else if (document.readyState !== "complete") {
          addEventListener(
            "load",
            function () {
              return t(e);
            },
            true,
          );
        } else {
          setTimeout(e, 0);
        }
      };
      function j(t, e) {
        e = e || {};
        var n = [800, 1800];
        var i = u("TTFB");
        var s = h(t, i, n, e.reportAllChanges);
        I(function () {
          var l = r();
          if (l) {
            i.value = Math.max(l.responseStart - a(), 0);
            if (i.value < 0 || i.value > performance.now()) {
              return;
            }
            i.entries = [l];
            s(true);
            o(function () {
              i = u("TTFB", 0);
              (s = h(t, i, n, e.reportAllChanges))(true);
            });
          }
        });
      }
    },
  },
]);
//# sourceMappingURL=5318.3d60195583e0c834.js.map
