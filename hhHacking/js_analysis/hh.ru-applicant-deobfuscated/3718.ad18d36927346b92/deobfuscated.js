try {
  (function () {
    var e =
      typeof window != "undefined"
        ? window
        : typeof global != "undefined"
          ? global
          : typeof globalThis != "undefined"
            ? globalThis
            : typeof self != "undefined"
              ? self
              : {};
    var n = new e.Error().stack;
    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "7675a0fb-be10-462c-83d5-94512c52562c";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-7675a0fb-be10-462c-83d5-94512c52562c";
    }
  })();
} catch (e) {}
(function () {
  try {
    var e =
      typeof window != "undefined"
        ? window
        : typeof global != "undefined"
          ? global
          : typeof globalThis != "undefined"
            ? globalThis
            : typeof self != "undefined"
              ? self
              : {};
    e._sentryModuleMetadata = e._sentryModuleMetadata || {};
    e._sentryModuleMetadata[new e.Error().stack] = (function (e) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];
        if (o != null) {
          for (var t in o) {
            if (o.hasOwnProperty(t)) {
              e[t] = o[t];
            }
          }
        }
      }
      return e;
    })({}, e._sentryModuleMetadata[new e.Error().stack], {
      "_sentryBundlerPluginAppKey:sentry-js-hh-filter-key": true,
    });
  } catch (e) {}
})();
(function () {
  try {
    (typeof window != "undefined"
      ? window
      : typeof global != "undefined"
        ? global
        : typeof globalThis != "undefined"
          ? globalThis
          : typeof self != "undefined"
            ? self
            : {}
    ).SENTRY_RELEASE = {
      id: "a8891b807f20bd18b60ec88985b3712ef8d8e4c6",
    };
  } catch (e) {}
})();
(globalThis.__xhh_LOADABLE_LOADED_CHUNKS__ =
  globalThis.__xhh_LOADABLE_LOADED_CHUNKS__ || []).push([
  ["3718"],
  {
    785912: function (e, n, o) {
      o.r(n);
      o.d(n, {
        default: () => l,
      });
      var t = o(413134);
      var d = o(407499);
      var a = o(741095);
      const l = a.default.build({
        create: () => {
          d.I.on("user_force_logout", (e) => {
            const n = (0, t.j)("/account/force_logout");
            n.params = {
              reason: e.forceLogoutReason,
              backUrl: window.location.href,
            };
            window.location.href = n.href;
          });
        },
        componentName: "legacy/HH/ForceLogoutEventListener",
      });
    },
  },
]); //# sourceMappingURL=3718.ad18d36927346b92.js.map
//# debugId=7675a0fb-be10-462c-83d5-94512c52562c
