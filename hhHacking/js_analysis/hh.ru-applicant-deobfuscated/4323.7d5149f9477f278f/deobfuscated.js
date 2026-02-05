"use strict";

(globalThis.__resume_profile_front_LOADABLE_LOADED_CHUNKS__ =
  globalThis.__resume_profile_front_LOADABLE_LOADED_CHUNKS__ || []).push([
  ["4323"],
  {
    27111: function (e, t, r) {
      r.r(t);
      r.d(t, {
        configureAndInitSentry: () => N,
        prepareAxiosErrorDataInterceptor: () => U,
        initBrowserClient: () => $,
        pushRequestIdToSentry: () => H,
        pushAxiosDataToSentry: () => K,
      });
      var n = r(67175);
      var a = r(9996);
      var s = r(322);
      var o = r(84468);
      var i = r(85322);
      var c = r(12114);
      const l = {
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
      const d = (e) => {
        if (u) {
          e.extra ||= {};
          e.tags ||= {};
          e.extra.failedAxiosUrl = u;
          e.tags.failedAxiosUrl = u;
          u = undefined;
        }
        return e;
      };
      const p = 102400;
      const g = (e) => {
        const t = s(e.extra).length;
        if (t > p) {
          e.extra = {
            __removed: `Extra data is too large and has been stripped (${t}/102400)`,
          };
        }
      };
      const f = {
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
      const y = "not_detected";
      const m = "_alreadyHandledByHHSentryJs";
      const h = () => {
        const e = (0, o.T)(window.navigator.userAgent, l);
        return !!e.isSupported && !!e.browser;
      };
      const b = () => {
        const e = /test_host=(\w+)/.exec(window.navigator.userAgent);
        return {
          isAutotests: !!e,
          standName: e?.[1] || null,
        };
      };
      const S = (e, t) => {
        if (!t) {
          return [];
        }
        const r = t[e];
        if (!r) {
          return [];
        }
        const { strings: n = [], regexps: a = [] } = r;
        if (!n.length && !a.length) {
          return [];
        }
        const s = a
          .map((e) => {
            try {
              if (typeof e == "string") {
                return new RegExp(e, "i");
              } else {
                return new RegExp(e.pattern, e.flags);
              }
            } catch (e) {
              console.error(e);
              return null;
            }
          })
          .filter((e) => !!e);
        return [...n, ...s];
      };
      const x = (
        {
          sentryJsConfig: e,
          sentryDSN: t,
          buildVersion: r,
          staticHost: n,
          beforeSendCallback: o,
          getUser: l,
          getExtraData: u,
          isDebug: p,
        },
        h = {},
      ) => {
        const b = ((e) => {
          if (!e) {
            return null;
          }
          try {
            return JSON.parse(e);
          } catch (e) {
            console.error("Sentry config could not be parsed", e);
            return null;
          }
        })(e);
        const x = a(f, b ?? {});
        const E = S("ignoreErrors", x);
        const _ = S("ignorePaths", x);
        const k = x?.ignoreErrors?.stacktraces;
        const w = x?.replaysOnErrorSampleRate ?? "0";
        const A = x?.tracesSampleRate ?? "0";
        const T = x?.ignoreErrors?.serialize;
        return {
          externalConfig: x,
          clientConfig: {
            dsn: t,
            release: r,
            ignoreErrors: E,
            denyUrls: _,
            includePaths: [n, window.location.host, "webpack-internal"],
            maxBreadcrumbs: 15,
            normalizeDepth: 8,
            replaysSessionSampleRate: 0,
            replaysOnErrorSampleRate: parseFloat(w),
            tracesSampleRate: parseFloat(A),
            beforeSend: async (e, t) => {
              if (p) {
                console.error(`Calling beforeSend for ${r}`);
                console.error("Hint in beforeSend", t);
                console.error("Event in beforeSend:start", e);
              }
              if (h.isRootClient) {
                await new Promise((e) => setTimeout(e, 100));
              }
              if (t.originalException?.[m]) {
                if (p) {
                  console.error(
                    "Exception already handled, skipping: ",
                    t.originalException,
                  );
                }
                return null;
              }
              if (document.body === null) {
                return null;
              }
              let n = e?.request?.url;
              let a = 0;
              let f = e.message;
              if (e.exception) {
                const t = e.exception.values?.[0];
                f = t?.value || "Unknown error message";
                if (t?.stacktrace) {
                  if (
                    Array.isArray(k) &&
                    k.some((e) => {
                      const r =
                        /^(?<func>[^(]+)?(?:\(<(?<module>[^>]+)>\))?$/.exec(e);
                      if (r?.groups) {
                        const { func: e, module: n } = r.groups;
                        if (e || n) {
                          return t.stacktrace?.frames?.some(
                            (t) =>
                              (!e || t.function?.includes(e)) &&
                              (!n || t.filename?.includes(n)),
                          );
                        }
                      }
                      return false;
                    })
                  ) {
                    return null;
                  }
                  const e =
                    t.stacktrace.frames?.[t.stacktrace.frames.length - 1];
                  n = e?.filename;
                  a = e?.lineno || 0;
                  ((e = []) => {
                    const t = [
                      "vendors.",
                      "magritte/",
                      "bloko/",
                      ".yarn/",
                      "webpack",
                    ];
                    e.forEach(
                      (e) =>
                        (e.in_app = !t.some((t) => e.filename?.includes(t))),
                    );
                  })(t.stacktrace.frames);
                }
              }
              const b = e.extra?.__serialized__;
              if (
                typeof b == "object" &&
                b !== null &&
                T &&
                T.some((e) => {
                  for (const [t, r] of Object.entries(e)) {
                    const e = new RegExp(r, "i");
                    return Object.hasOwn(b, t) && e.test(b[t]);
                  }
                  return false;
                })
              ) {
                return null;
              }
              e = d(e);
              const S = o?.(e);
              if (S === false) {
                return null;
              }
              if (
                !p &&
                ((e) => {
                  const t = "__jsErrorsCache";
                  let r;
                  try {
                    r = JSON.parse(i.Y.getItem(t));
                  } catch (e) {
                    r = [];
                  }
                  if (!("isArray" in Array) || !Array.isArray(r)) {
                    r = [];
                  }
                  const n = Date.now();
                  const a = r.filter((e) => e.date + 86400000 >= n);
                  const s = a.some((t) => t.message === e);
                  if (!s) {
                    a.push({
                      date: n,
                      message: e,
                    });
                    try {
                      i.Y.setItem(t, JSON.stringify(a));
                    } catch (e) {}
                  }
                  return s;
                })(`${String(f)}|${String(n)}|${a}`)
              ) {
                return null;
              }
              const x = l();
              e.user = x;
              e.extra ||= {};
              const E = u();
              e.extra = {
                ...e.extra,
                ...E,
                userType: x.userType,
                screenBreakpointBloko: c.L.get("device_breakpoint"),
                screenBreakpointMagritte: c.L.get("device_magritte_breakpoint"),
                documentStates: {
                  readyState: document.readyState,
                  visibilityState: document.visibilityState,
                  onLineState: window.navigator?.onLine,
                },
              };
              const _ = e.extra.lastAction;
              if (_?.payload) {
                if (s(_.payload).length > 5120) {
                  _.payload = "[removed]";
                }
              }
              g(e);
              if (!e.fingerprint && e.exception?.values?.[0]?.value) {
                e.fingerprint = [e.exception.values[0].value];
              }
              const w = ((e) => {
                const t = e.exception?.values?.[0]?.stacktrace?.frames || [];
                if (!t.length) {
                  return false;
                }
                const r = t[t.length - 1];
                return (
                  r?.in_app !== false && !!r.function && String(r.function)
                );
              })(e);
              if (e.fingerprint && w) {
                e.fingerprint.push(w);
              }
              ((e, t, r, n) => {
                e.tags ||= {};
                e.tags.fromStatic = e.request?.url !== window.location.href;
                e.tags.breakpoint =
                  c.L.get("device_breakpoint") ||
                  c.L.get("device_magritte_breakpoint");
                e.tags.pageName =
                  typeof t.pageName == "string" ? t.pageName : y;
                e.tags.userType = r.userType;
                e.tags.pageType =
                  typeof t.pageType == "string" ? t.pageType : y;
                const a = [
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
                if (n.isRootClient) {
                  a.push("failedAxiosUrl");
                  a.push("third_party_code");
                }
                a.forEach((t) => {
                  if (e.tags && !(t in e.tags)) {
                    e.tags[t] = y;
                  }
                });
              })(e, E, x, h);
              if (p) {
                console.error("Event in beforeSend:end", e);
              }
              return e;
            },
            beforeBreadcrumb(e) {
              if (e.category === "xhr") {
                const t = e.data?.url;
                if (!t?.startsWith("/")) {
                  return null;
                }
              }
              return e;
            },
          },
        };
      };
      const E = ({
        replaysOnErrorSampleRate: e,
        jsBuildFilterKey: t,
        tracesSampleRate: r,
      }) => {
        const a = [
          n.httpContextIntegration(),
          n.dedupeIntegration(),
          n.inboundFiltersIntegration(),
          n.functionToStringIntegration(),
          n.breadcrumbsIntegration({
            console: false,
            dom: true,
            fetch: true,
            history: true,
            xhr: true,
          }),
          n.extraErrorDataIntegration(),
          n.sessionTimingIntegration(),
        ];
        if (t) {
          a.push(
            n.thirdPartyErrorFilterIntegration({
              filterKeys: [t],
              behaviour: "apply-tag-if-exclusively-contains-third-party-frames",
            }),
          );
        }
        if (r && r > 0) {
          a.push(n.browserTracingIntegration());
        }
        if (e && e > 0) {
          a.push(n.replayIntegration());
        }
        return a;
      };
      const _ = (e) => typeof e == "string";
      const k = (e) =>
        e != null &&
        (Object.getPrototypeOf(e) === Object.prototype ||
          Object.getPrototypeOf(e) === null);
      const w = (e) =>
        typeof e == "object" && e !== null && (k(e) || Array.isArray(e));
      const A = (e) => typeof e == "function";
      const T = (e, t) => {
        let r = typeof t;
        let n = "unknown";
        if (t == null || typeof t == "boolean") {
          return t;
        } else {
          if (typeof t == "string") {
            r = "string";
            n = t.length;
          } else if (typeof t == "number") {
            r = "number";
            n = String(t).length;
          } else if (Array.isArray(t)) {
            r = "array";
            n = t.length;
          } else if (k(t)) {
            r = "object";
            n = Object.keys(t).length;
          }
          return `${r}<${n}>`;
        }
      };
      const v = (e, t, r) => {
        if (!w(e)) {
          return e;
        }
        const n = Array.isArray(e)
          ? [...e]
          : {
              ...e,
            };
        const a = r.split(".");
        let s = n;
        const o = (e, r) => (A(t) ? t(e, r) : t);
        for (let e = 0; e < a.length; e++) {
          const r = a[e];
          const n = e === a.length - 1;
          const i = r === "*";
          const c = s[r];
          if (i && n) {
            if (Array.isArray(s)) {
              for (let e = 0; e < s.length; e++) {
                s[e] = o(e, s[e]);
              }
            } else {
              for (const e of Object.keys(s)) {
                s[e] = o(e, s[e]);
              }
            }
            break;
          }
          if (i) {
            const r = a.slice(e + 1);
            if (Array.isArray(s)) {
              for (let e = 0; e < s.length; e++) {
                s[e] = w(s[e]) ? v(s[e], t, r.join(".")) : o(e, s[e]);
              }
            } else {
              const e = Object.keys(s);
              for (const n of e) {
                s[n] = w(s[n]) ? v(s[n], t, r.join(".")) : o(n, s[n]);
              }
            }
            break;
          }
          if (n) {
            if (r in s) {
              s[r] = A(t) ? t(r, c) : t;
            }
            break;
          }
          if (!w(c)) {
            break;
          }
          const l = Array.isArray(c)
            ? [...c]
            : {
                ...c,
              };
          s[r] = l;
          s = l;
        }
        return n;
      };
      const F = (e, t, r) => {
        return ((n = r), [...new Set(n)]).reduce((e, r) => v(e, t, r), e);
        var n;
      };
      const I =
        ({ actionTransformer: e, redactedFields: t }) =>
        (r) => {
          const n = r.type ?? "";
          if (n.includes("ANALYTIC")) {
            return null;
          }
          const a = e ? e(r) : r;
          if (!a) {
            return null;
          }
          const s = (t?.action ?? [])
            .filter((e) => typeof e == "string" || e.type === n)
            .map((e) => (typeof e == "string" ? e : e.pattern));
          const o =
            n === "SET_FIELD_DATA_AS_IS"
              ? (t?.store ?? []).map((e) => `payload.${e}`)
              : [];
          return F(a, T, [...s, ...o]);
        };
      const R = (e) =>
        typeof e == "object" &&
        e !== null &&
        "type" in e &&
        "pattern" in e &&
        _(e.type) &&
        _(e.pattern);
      const O = "FIELD_IS_EMPTY";
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
      const L =
        ({ stateTransformer: e, redactedFields: t, maxDataLength: r }) =>
        (n) => {
          const a = n?.trl;
          let o = e ? e(n) : n;
          if (!o) {
            return null;
          }
          o = F(o, T, [...j, ...(t?.store ?? [])]);
          const i = s(o).length;
          const c = r ?? 204800;
          if (i > c) {
            return {
              trlsLength: a ? s(a).length : 0,
              basicState: {
                request: o?.request ?? O,
                locale: o?.locale ?? O,
                langs: o?.langs ?? O,
              },
              __removed: `State is out of limit and has been stripped (${i}/${c})`,
            };
          } else {
            return o;
          }
        };
      const C = (e, t, r) => {
        (e = {
          ...e,
        }).redactedFields = e.redactedFields
          ? {
              ...e.redactedFields,
            }
          : {
              store: [],
              action: [],
            };
        e.redactedFields.store = (e.redactedFields.store ?? [])
          .concat(r?.redactedFields?.store ?? [])
          .concat(t?.redactedFields?.store ?? [])
          .filter(_);
        e.redactedFields.action = (e.redactedFields.action ?? [])
          .concat(r?.redactedFields?.action ?? [])
          .concat(t?.redactedFields?.action ?? [])
          .filter((e) => _(e) || R(e));
        return e;
      };
      const D = ({
        maxDataLength: e,
        actionTransformer: t,
        stateTransformer: r,
        configureScopeWithState: a,
        attachReduxState: s = false,
        redactedFields: o,
      }) =>
        n.createReduxEnhancer({
          attachReduxState: s,
          actionTransformer: I({
            redactedFields: o,
            actionTransformer: t,
          }),
          stateTransformer: L({
            redactedFields: o,
            maxDataLength: e,
            stateTransformer: r,
          }),
          configureScopeWithState: a,
        });
      class B {
        limit;
        items;
        currentIndex;
        constructor(e = 6) {
          this.limit = e;
          this.items = [];
          this.currentIndex = 0;
        }
        addItem(e) {
          this.items.unshift(e);
          this.items = this.items.slice(0, this.limit);
        }
        getItems() {
          return this.items;
        }
      }
      const P = ({ stacktrace: e, url: t, publicBuildPath: r }) => {
        const n = [];
        if (e) {
          n.push(e);
        }
        if (t) {
          n.push(t);
        }
        return n.some((e) => e?.includes?.(r));
      };
      const N = (e) => {
        const { sentryLoggingEnabled: t, isDebug: r } = e;
        if (r) {
          console.error("Initing Sentry with config", e);
        }
        if (!t) {
          return;
        }
        const a = b();
        if (!h() && !a.isAutotests) {
          return;
        }
        const { clientConfig: s, externalConfig: o } = x(e, {
          isRootClient: true,
        });
        return {
          client: n.init({
            ...s,
            integrations: E({
              jsBuildFilterKey: e.jsBuildFilterKey,
              replaysOnErrorSampleRate: s.replaysOnErrorSampleRate,
              tracesSampleRate: s.tracesSampleRate,
            }),
            transport: n.makeFetchTransport,
            debug: e.isDebug,
          }),
          createSentryReduxEnhancer: (t) =>
            D(
              C(
                t,
                {
                  redactedFields: e.redactedFields,
                },
                o,
              ),
            ),
        };
      };
      var $ = (e) => {
        const { sentryLoggingEnabled: t, publicBuildPath: r, isDebug: a } = e;
        if (a) {
          console.error("Initing Sentry Browser Client with config", e);
        }
        if (!t) {
          return {};
        }
        const s = b();
        if (!h() && !s.isAutotests) {
          return {};
        }
        const { clientConfig: o, externalConfig: i } = x(e);
        const c = new n.BrowserClient({
          ...o,
          transport: n.makeFetchTransport,
          stackParser: n.defaultStackParser,
          integrations: E({
            jsBuildFilterKey: e.jsBuildFilterKey,
            replaysOnErrorSampleRate: o.replaysOnErrorSampleRate,
            tracesSampleRate: o.tracesSampleRate,
          }),
          debug: e.isDebug,
        });
        const l = new n.Scope();
        l.setClient(c);
        c.init();
        window.addEventListener("error", (e) => {
          const t = e?.error;
          if (
            t &&
            P({
              stacktrace: t?.stack,
              publicBuildPath: r,
              url: e.filename,
            })
          ) {
            l.captureException(e);
            if (t) {
              Object.defineProperty(t, m, {
                value: true,
              });
            }
          }
        });
        const u = new n.Scope();
        u.setClient(c);
        window.addEventListener("unhandledrejection", (e) => {
          if (
            P({
              stacktrace: String(e.reason?.stack || ""),
              publicBuildPath: r,
            })
          ) {
            u.setExtra("reason", e.reason);
            u.setFingerprint([String(e.reason)]);
            const t = new Error(`Unhandled rejection: ${e.reason}`);
            u.captureException(t);
            if (typeof e.reason == "object") {
              Object.defineProperty(e.reason, m, {
                value: true,
              });
            }
          }
        });
        return {
          client: c,
          scope: l,
          createSentryReduxEnhancer: (t = {}) =>
            D(
              C(
                t,
                {
                  redactedFields: e.redactedFields,
                },
                i,
              ),
            ),
        };
      };
      var U = (e) => (t) => {
        if (e && t?.isAxiosError) {
          u = t.config.url;
        }
      };
      var K = d;
      var H = (e, t) => {
        const r = new B(t);
        return (t) => {
          if (e && t) {
            const e = t.split(",").map((e) => e.trim());
            const a = [...new Set(e)].join(", ");
            r.addItem(a);
            n.getCurrentScope().setExtra("lastAsyncRequestIds", r.getItems());
          }
        };
      };
    },
  },
]);
//# sourceMappingURL=4323.7d5149f9477f278f.js.map
