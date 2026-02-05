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
      e._sentryDebugIds[n] = "c5be0f61-0b07-4346-8f13-77c42dc3d60f";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-c5be0f61-0b07-4346-8f13-77c42dc3d60f";
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
        var d = arguments[n];
        if (d != null) {
          for (var t in d) {
            if (d.hasOwnProperty(t)) {
              e[t] = d[t];
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
  ["4823"],
  {
    326581: function (e, n, d) {
      d.r(n);
      d.d(n, {
        default: () => o,
      });
      var t = d(741095);
      const o = t.default.build({
        create: () => {
          const e = document.querySelector(".HHC-Debug-Grid");
          const n = () => e.classList.remove("g-hidden");
          const d = () => e.classList.add("g-hidden");
          if (e) {
            document.addEventListener("keyup", (t) => {
              if (t.ctrlKey && t.keyCode === 192) {
                if (e.classList.contains("g-hidden")) {
                  n();
                } else {
                  d();
                }
              }
            });
          }
          return {
            show: n,
            hide: d,
          };
        },
        componentName: "HHC/Debug/Grid",
      });
    },
  },
]); //# sourceMappingURL=4823.db367d313b5c7553.js.map
//# debugId=c5be0f61-0b07-4346-8f13-77c42dc3d60f
