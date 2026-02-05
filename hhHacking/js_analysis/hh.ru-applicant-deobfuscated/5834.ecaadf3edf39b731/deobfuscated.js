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
      e._sentryDebugIds[t] = "27471356-3e59-48eb-a887-d6ca95cb829c";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-27471356-3e59-48eb-a887-d6ca95cb829c";
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
          for (var o in n) {
            if (n.hasOwnProperty(o)) {
              e[o] = n[o];
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
  ["5834"],
  {
    51311: function (e, t, n) {
      n.r(t);
      n.d(t, {
        default: () => i,
      });
      var o = n(487001);
      n(370120);
      o.Z.initializeApp({
        messagingSenderId: window.globalVars.firebaseMessagingSenderId,
        projectId: window.globalVars.firebaseProjectId,
        apiKey: window.globalVars.firebaseApiKey,
        appId: window.globalVars.firebaseAppId,
      });
      const i = o.Z;
    },
    246251: function (e, t, n) {
      n.r(t);
      n.d(t, {
        default: () => o,
      });
      const o = n(741095).default.build({
        defaults: {
          cssClasses: {
            hidden: "g-hidden",
          },
        },
        create: (e, { actions: t, cssClasses: n }) => {
          const o = () => {
            e.classList.add(n.hidden);
          };
          return {
            hide: o,
            waitForUsersAction: () =>
              new Promise((i) => {
                e.addEventListener("click", function n(a) {
                  const r = t.find(({ target: e }) => e.contains(a.target));
                  if (r) {
                    a.preventDefault();
                    e.removeEventListener("click", n);
                    o();
                    i(r.result);
                  }
                });
                e.classList.remove(n.hidden);
              }),
          };
        },
        componentName: "HH/WebPush/HTMLConfirm",
      });
    },
    755866: function (e, t, n) {
      n.r(t);
      n.d(t, {
        default: () => u,
      });
      var o = n(630549);
      var i = n(388926);
      var a = n(51311);
      var r = n(247424);
      var s = n(741095);
      var d = n(246251);
      const c = "web_push_confirm_reason";
      const l = [2, 4, 7];
      const f = (e) =>
        r.default
          .postFormData("/push_subscribe", {
            token: e,
          })
          .catch(console.error);
      const u = s.default.build({
        create: async (e) => {
          if (!a.default.messaging.isSupported()) {
            return;
          }
          const t = a.default.messaging();
          t.onMessage(({ data: e }) => {
            if (document.visibilityState !== "visible") {
              return;
            }
            const t = ((e, { apiHost: t }) => {
              e.params = JSON.parse(e.params);
              e.onOpenActions = JSON.parse(e.onOpenActions)
                .filter(({ type: e }) => e === "apiGetRequest")
                .map((e) => ({
                  ...e,
                  url: `${t}${e.url}`,
                }));
              return e;
            })(e, {
              apiHost: window.globalVars.apiHost,
            });
            if (t.params.action !== "openLink") {
              return;
            }
            const n = new Notification(t.title || "", {
              body: t.alert,
              data: t,
            });
            n.onclick = (e) => {
              const { params: o, onOpenActions: i } = t;
              e.preventDefault();
              n.close();
              ((e) => {
                const t = window.open(e);
                if (t) {
                  try {
                    t.opener = null;
                  } catch (e) {}
                }
              })(o.linkUrl);
              i.forEach(({ url: e }) =>
                fetch(e, {
                  mode: "no-cors",
                }),
              );
            };
          });
          const n = (() => {
            try {
              return JSON.parse(o.Y.getItem("HH-WebPushSubscribe")) || {};
            } catch (e) {
              return {};
            }
          })();
          const r = () => {
            const e = n.totalAttempts || 0;
            var t;
            n.totalAttempts = e + 1;
            t = e;
            n.nextConfirmAttemptTime =
              Date.now() + l[Math.min(t, l.length - 1)] * 86400000;
            o.Y.setItem("HH-WebPushSubscribe", JSON.stringify(n));
          };
          if (Notification.permission === "granted") {
            try {
              const e = await t.getToken();
              if (e) {
                f(e);
              }
            } catch (e) {
              console.error(e);
            }
          }
          if (Notification.permission === "denied") {
            i.L.remove(c);
          }
          if (Notification.permission === "default") {
            if (!i.L.get(c)) {
              return;
            }
            if (
              !(() => {
                try {
                  const { nextConfirmAttemptTime: e } = n;
                  return !e || e <= Date.now();
                } catch (e) {
                  return true;
                }
              })()
            ) {
              i.L.remove(c);
              return;
            }
            const o = s.default.make(d.default, e, {
              actions: [
                {
                  target: e.querySelector(".HH-WebPush-Hide"),
                  result: "cancel",
                },
                {
                  target: e.querySelector(".HH-WebPush-Accept"),
                  result: "confirm",
                },
              ],
            });
            try {
              if ((await o.waitForUsersAction()) === "confirm") {
                if ((await Notification.requestPermission()) === "granted") {
                  const e = await t.getToken();
                  f(e);
                }
              } else {
                r();
              }
              i.L.remove(c);
            } catch (e) {
              console.error(e);
            }
          }
        },
        componentName: "HH/WebPush/Subscribe",
      });
    },
  },
]); //# sourceMappingURL=5834.ecaadf3edf39b731.js.map
//# debugId=27471356-3e59-48eb-a887-d6ca95cb829c
