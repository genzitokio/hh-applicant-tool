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
    var t = new e.Error().stack;
    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "df2b3ff0-5dcf-4014-a51f-c1cae9ba5f7e";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-df2b3ff0-5dcf-4014-a51f-c1cae9ba5f7e";
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
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        if (n != null) {
          for (var a in n) {
            if (n.hasOwnProperty(a)) {
              e[a] = n[a];
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
  ["3560"],
  {
    482683: function (e, t, n) {
      n.d(t, {
        I: () => d,
        x: () => a,
      });
      const a = "a11y-main-content";
      const d = "a11y-search-input";
    },
    558502: function (e, t, n) {
      n.r(t);
      n.d(t, {
        default: () => i,
      });
      var a = n(19502);
      var d = n.n(a);
      var o = n(906105);
      var f = n.n(o);
      var l = n(741095);
      var r = n(482683);
      const i = l.default.build({
        create: (e, t) => {
          const n = {
            [r.I]: {
              text: t.trls.goToInput,
              preventDefault: true,
              tabindex: 1,
            },
            [r.x]: {
              text: t.trls.goToMainContent,
              preventDefault: false,
              tabindex: 2,
            },
          };
          let a = 0;
          Object.keys(n).forEach((t) => {
            const o = [...document.querySelectorAll(`#${t}`)].filter(
              (e) => e.offsetParent,
            );
            if (o.length) {
              if (o.length > 1) {
                console.error("Element must have uniq ID!");
              } else {
                e.appendChild(
                  ((e, t, n, a, o, l) => {
                    const r = document.createElement("a");
                    r.setAttribute("href", `#${t}`);
                    r.setAttribute("data-qa", t);
                    r.setAttribute("tabindex", `${a}`);
                    r.innerText = n;
                    if (l) {
                      r.addEventListener("focus", () => {
                        f()();
                      });
                    }
                    r.addEventListener("click", (n) => {
                      if (o) {
                        n.preventDefault();
                      }
                      e.focus();
                      d()({
                        name: t,
                      });
                    });
                    return r;
                  })(
                    o[0],
                    t,
                    n[t].text,
                    n[t].tabindex,
                    n[t].preventDefault,
                    a === 0,
                  ),
                );
                a += 1;
              }
            }
          });
        },
        componentName: "legacy/HH/A11YLink",
      });
    },
  },
]); //# sourceMappingURL=3560.29671f73fe516f5e.js.map
//# debugId=df2b3ff0-5dcf-4014-a51f-c1cae9ba5f7e
