try {
  !(function () {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "aa003d5e-8f3c-4f1a-bf9b-7c9da25525ad"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-aa003d5e-8f3c-4f1a-bf9b-7c9da25525ad"));
  })();
} catch (e) {}
(!(function () {
  try {
    var e =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
              ? self
              : {};
    ((e._sentryModuleMetadata = e._sentryModuleMetadata || {}),
      (e._sentryModuleMetadata[new e.Error().stack] = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          if (null != n) for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o]);
        }
        return e;
      })({}, e._sentryModuleMetadata[new e.Error().stack], {
        "_sentryBundlerPluginAppKey:sentry-js-hh-filter-key": !0,
      })));
  } catch (e) {}
})(),
  (function () {
    try {
      ("undefined" != typeof window
        ? window
        : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
              ? self
              : {}
      ).SENTRY_RELEASE = { id: "a8891b807f20bd18b60ec88985b3712ef8d8e4c6" };
    } catch (e) {}
  })(),
  (globalThis.__xhh_LOADABLE_LOADED_CHUNKS__ =
    globalThis.__xhh_LOADABLE_LOADED_CHUNKS__ || []).push([
    ["9208"],
    {
      27058: function (e, t, n) {
        n.d(t, { Z: () => o });
        const o = {
          "full-screen-layout": "full-screen-layout--rBtd6yYZEK9pBko5",
          fullScreenLayout: "full-screen-layout--rBtd6yYZEK9pBko5",
          "full-screen-expandable-layout":
            "full-screen-expandable-layout--bl8gNZ5dsWkkGTeX",
          fullScreenExpandableLayout:
            "full-screen-expandable-layout--bl8gNZ5dsWkkGTeX",
          "abstract-link-loading": "abstract-link-loading--pNFVEPQoxbkNpXtG",
          abstractLinkLoading: "abstract-link-loading--pNFVEPQoxbkNpXtG",
        };
      },
      149020: function (e, t, n) {
        n.d(t, { H: () => i });
        n(394280);
        var o = n(428909),
          r = n(781943),
          a = n(343856);
        const i = ({ children: e, isShrinked: t }) =>
          (0, a.jsx)(o.ColumnsWrapper, {
            children: (0, a.jsx)(r.Z, { isShrinked: t, children: e }),
          });
        i.displayName = "layouts/BlokoLayouts/DefaultLayout/DefaultLayout";
      },
      134902: function (e, t, n) {
        n.d(t, { T: () => r });
        n(394280);
        var o = n(343856);
        const r = ({ children: e }) => (0, o.jsx)(o.Fragment, { children: e });
        r.displayName = "layouts/BlokoLayouts/EmptyLayout/EmptyLayout";
      },
      708302: function (e, t, n) {
        n.d(t, { Z: () => k });
        var o = n(394280),
          r = n.n(o),
          a = n(882177),
          i = n.n(a),
          l = n(701416),
          s = n.n(l),
          c = n(343856);
        const d =
          ({ error: e, noContentPadding: t, noBackground: n }) =>
          ({ children: o }) =>
            (0, c.jsxs)(s(), {
              sTop: !0,
              sBottom: !0,
              mTop: !0,
              mBottom: !0,
              lTop: !0,
              lBottom: !0,
              children: [
                e && (0, c.jsx)(e, {}),
                (0, c.jsx)("div", {
                  className: i()("light-page-content", {
                    "light-page-content_no-padding": t,
                    "light-page-content_no-background": n,
                  }),
                  children: o,
                }),
              ],
            });
        d.displayName =
          "BlokoLayouts/LightPageLayout/LightPageLayoutContent/LightPageLayoutContent";
        var u = n(859716),
          g = n(105160),
          y = n(452528),
          p = n.n(y),
          h = n(599998),
          f = n(89396),
          x = n(846192),
          m = n(520046);
        const j = {
            [m.Dc.BY]: "footer.tutby.copyrights",
            general: "index.footer.menuitem.copyright",
          },
          L = ({ trls: e }) => {
            const t = (0, f.i)(),
              n = (0, x.do)(),
              o = (0, x.$w)(),
              r = (0, c.jsx)("span", {
                suppressHydrationWarning: !0,
                children: (0, u.WU)(e[j[n ? m.Dc.BY : "general"]], {
                  "{0}": new Date().getFullYear().toString(),
                }),
              });
            return t
              ? (0, c.jsx)("div", {
                  className: "light-page-footer",
                  children: (0, c.jsx)("div", {
                    className: "light-page-footer__copyright",
                    children: (0, c.jsx)(g.x, {
                      style: o ? "secondary" : "primary",
                      typography: "label-2-regular",
                      "data-qa": "copyright",
                      children: r,
                    }),
                  }),
                })
              : (0, c.jsx)("div", {
                  className: "light-page-footer",
                  children: (0, c.jsx)("div", {
                    className: "light-page-footer__copyright",
                    children: (0, c.jsx)(p(), {
                      size: y.TextSize.Small,
                      "data-qa": "copyright",
                      children: r,
                    }),
                  }),
                });
          };
        L.displayName =
          "BlokoLayouts/LightPageLayout/LightPageLayoutFooter/LightPageLayoutFooterComponent";
        const v = (0, h.x)(L);
        var b = n(980078);
        const w = ({
          children: e,
          noContentPadding: t,
          noBackground: n,
          error: o,
        }) => {
          const a = r().useMemo(
            () => d({ noContentPadding: t, noBackground: n, error: o }),
            [t, n, o],
          );
          return e({
            header: (0, c.jsx)(b.e, {}),
            Content: a,
            footer: (0, c.jsx)(v, {}),
          });
        };
        w.displayName = "BlokoLayouts/LightPageLayout/index/LightPage";
        const k = w;
      },
      145686: function (e, t, n) {
        n.d(t, { Z: () => l });
        n(394280);
        var o = n(463964),
          r = n(27058),
          a = n(343856);
        const i = ({ children: e }) => (
          (0, o.i)(),
          (0, a.jsx)("div", { className: r.Z.fullScreenLayout, children: e })
        );
        i.displayName = "app/layouts/FullScreenLayout/FullScreenLayout";
        const l = i;
      },
      463964: function (e, t, n) {
        n.d(t, { i: () => l });
        var o = n(394280),
          r = n(412303),
          a = n(594948),
          i = n(621985);
        const l = () => {
          const e = (0, a.v)((e) => e.displayType);
          (0, o.useEffect)(() => {
            var t, n;
            if (
              e !== i.F.Mobile ||
              (null !== (t = (n = window.CSS).supports) &&
                void 0 !== t &&
                t.call(n, "height", "100dvh"))
            )
              return;
            const o = () => {
                document.documentElement.style.setProperty(
                  "--calculated-vh",
                  0.01 *
                    (window.visualViewport
                      ? window.visualViewport.height
                      : window.innerHeight) +
                    "px",
                );
              },
              a = (0, r.P)(o, 300);
            return (
              window.addEventListener("resize", a),
              o(),
              () => {
                window.removeEventListener("resize", a);
              }
            );
          }, [e]);
        };
      },
      182302: function (e, t, n) {
        n.d(t, {
          Xg: () => b,
          rU: () => j,
          T$: () => x,
          L7: () => m.Z,
          HQ: () => i.H,
          Tp: () => l.T,
        });
        var o = n(394280),
          r = n(524237),
          a = n(867728),
          i = n(149020),
          l = n(134902),
          s = n(491606),
          c = n(428909),
          d = n.n(c),
          u = n(739788),
          g = n(666825),
          y = n.n(g),
          p = n(257549),
          h = n.n(p),
          f = n(343856);
        const x = ({ linkAboveHeader: e, children: t, title: n }) =>
          (0, f.jsxs)(i.H, {
            children: [
              (0, f.jsxs)(d(), {
                xs: "4",
                s: "8",
                m: "12",
                l: "16",
                children: [
                  e &&
                    (0, f.jsx)(y(), {
                      disableVisited: !0,
                      Element: s.SPALink,
                      to: e.to,
                      children: e.trl,
                    }),
                  (0, f.jsx)(u.H1, { children: n }),
                  (0, f.jsx)(h(), { base: 4 }),
                ],
              }),
              t,
            ],
          });
        x.displayName = "layouts/BlokoLayouts/HeaderLayout/HeaderLayout";
        var m = n(708302);
        const j = ({ children: e, sidebar: t }) =>
          (0, f.jsxs)(i.H, {
            children: [
              (0, f.jsx)(d(), {
                xs: "4",
                m: "8",
                l: "11",
                container: !0,
                children: e,
              }),
              (0, f.jsx)(d(), {
                xs: "4",
                m: "4",
                l: "5",
                container: !0,
                children: (0, f.jsx)(t, {}),
              }),
            ],
          });
        j.displayName = "layouts/BlokoLayouts/SideBarLayout/SideBarLayout";
        var L = n(852377),
          v = n(324566);
        const b = ({
          children: e,
          layout: t = i.H,
          errorWrapper: n = r.Z,
          ogTitle: l,
          description: s,
          ogDescription: c,
          canonical: d,
          rssTitle: u,
          rssHref: g,
          removeTitle: y = !1,
          afterMenuContent: p,
          breadcrumbsContent: h,
          useCleanContainer: x,
          ogUrl: m,
          ogType: j,
          ogImage: b,
          ogImageWidth: w,
          ogImageHeight: k,
          ogImageAlt: _,
          ogImageType: H,
          ogSiteName: P,
          twitterImage: T,
          vkImage: E,
          hreflangItems: N,
          articleMeta: S,
          ...C
        }) => {
          const { title: B } = C;
          (0, o.useLayoutEffect)(
            () =>
              (0, v.$)({
                title: B,
                ogTitle: l,
                removeTitle: y,
                description: s,
                ogDescription: c,
                canonical: d,
              }),
            [B, y, s, d, l, c],
          );
          const D = (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsxs)(a.yG, {
                children: [
                  B &&
                    (0, f.jsxs)(f.Fragment, {
                      children: [
                        (0, f.jsx)(a.V1, { children: B }),
                        (0, f.jsx)(a.Vj, {
                          property: "og:title",
                          content: l || B,
                        }),
                      ],
                    }),
                  s && (0, f.jsx)(a.Hb, { content: s, openGraphContent: c }),
                  d && (0, f.jsx)(a.H_, { rel: "canonical", href: d }),
                  g &&
                    (B || u) &&
                    (0, f.jsx)(a.H_, {
                      title: u || B,
                      type: "application/rss+xml",
                      rel: "alternate",
                      href: g,
                    }),
                  m && (0, f.jsx)(a.Vj, { property: "og:url", content: m }),
                  P &&
                    (0, f.jsx)(a.Vj, { property: "og:site_name", content: P }),
                  j && (0, f.jsx)(a.Vj, { property: "og:type", content: j }),
                  b &&
                    (0, f.jsxs)(f.Fragment, {
                      children: [
                        (0, f.jsx)(a.Vj, { property: "og:image", content: b }),
                        _ &&
                          (0, f.jsx)(a.Vj, {
                            property: "og:image:alt",
                            content: _,
                          }),
                        H &&
                          (0, f.jsx)(a.Vj, {
                            property: "og:image:type",
                            content: H,
                          }),
                        w &&
                          (0, f.jsx)(a.Vj, {
                            property: "og:image:width",
                            content: String(w),
                          }),
                        k &&
                          (0, f.jsx)(a.Vj, {
                            property: "og:image:height",
                            content: String(k),
                          }),
                      ],
                    }),
                  T &&
                    (0, f.jsx)(a.Vj, { property: "twitter:image", content: T }),
                  E && (0, f.jsx)(a.Vj, { property: "vk:image", content: E }),
                  !(null == N || !N.length) && (0, f.jsx)(a.aD, { content: N }),
                  !!S &&
                    (0, f.jsxs)(f.Fragment, {
                      children: [
                        S.authorName &&
                          (0, f.jsx)(a.Vj, {
                            property: "article:author",
                            content: S.authorName,
                          }),
                        S.sections.map((e) =>
                          (0, f.jsx)(
                            "meta",
                            { property: "article:section", content: e },
                            e,
                          ),
                        ),
                        S.tags.map((e) =>
                          (0, f.jsx)(
                            "meta",
                            { property: "article:tag", content: e },
                            e,
                          ),
                        ),
                      ],
                    }),
                ],
              }),
              (0, f.jsx)(t, { ...C, children: e }),
            ],
          });
          return (0, f.jsx)(L.u, {
            afterMenuContent: p,
            breadcrumbsContent: h,
            useCleanContainer: x,
            children: (0, f.jsx)(n, { children: D }),
          });
        };
        b.displayName = "app/layouts/PageLayout/PageLayout";
      },
      324566: function (e, t, n) {
        n.d(t, { $: () => o });
        const o = ({
          title: e,
          ogTitle: t,
          removeTitle: n,
          description: o,
          ogDescription: r,
          canonical: a,
        }) => {
          const i = [],
            l = (e) => {
              const t = document.querySelector(e);
              t && i.push(t);
            };
          ((n || e) &&
            [".HH-PageLayout-Title", ".HH-PageLayout-OgTitle"].forEach(l),
            !e && t && l(".HH-PageLayout-OgTitle"),
            o &&
              [
                ".HH-PageLayout-Description",
                ".HH-PageLayout-OgDescription",
              ].forEach(l),
            !o && r && l(".HH-PageLayout-OgDescription"),
            a && l(".HH-PageLayout-Canonical"),
            i.forEach((e) => {
              var t;
              return null == e || null === (t = e.parentNode) || void 0 === t
                ? void 0
                : t.removeChild(e);
            }));
        };
      },
      524237: function (e, t, n) {
        n.d(t, { Z: () => g });
        var o = n(428909),
          r = n.n(o),
          a = n(149020),
          i = n(867728),
          l = n(599998),
          s = n(594948),
          c = n(343856);
        const d = {
            "error.400": "error.400.message",
            "error.403": "error.403.message",
            "error.404": "error.404.message",
            "error.500": "error.500.tryagain",
            "error.599": "error.599.tryagain",
            "error.default": "error.500.tryagain",
          },
          u = ({ children: e, trls: t }) => {
            const n = (0, s.v)(({ errorCode: e }) => e);
            if (n) {
              const e = `error.${n}`,
                o = t[d[e in d ? e : "error.default"]];
              return (0, c.jsxs)(c.Fragment, {
                children: [
                  (0, c.jsx)(i.yG, {
                    children: (0, c.jsx)(i.V1, { children: o }),
                  }),
                  (0, c.jsx)(a.H, {
                    children: (0, c.jsx)(r(), {
                      xs: "4",
                      s: "8",
                      m: "12",
                      l: "16",
                      children: o,
                    }),
                  }),
                ],
              });
            }
            return (0, c.jsx)(c.Fragment, { children: e });
          };
        u.displayName = "components/PageErrorWrapper/index/PageErrorWrapper";
        const g = (0, l.x)(u);
      },
      781943: function (e, t, n) {
        n.d(t, { Z: () => a });
        var o = n(343856);
        const r = ({ children: e, isShrinked: t }) => {
          const n = t ? "row-content_schrinked" : "row-content";
          return (0, o.jsx)("div", { className: n, children: e });
        };
        r.displayName = "components/RowContent/index/RowContent";
        const a = r;
      },
      24413: function (e, t, n) {
        (n.r(t), n.d(t, { default: () => y }));
        var o = n(134902),
          r = n(852377),
          a = n(145686),
          i = n(182302),
          l = n(60340),
          s = n(404533),
          c = n(594948),
          d = n(343856);
        const u = (e) => {
            switch (e) {
              case "emptyLayout":
                return o.T;
              case "fullScreenLayout":
                return a.Z;
              default:
                return;
            }
          },
          g = () => {
            const e = (0, c.v)(({ useRemoteEntryWay: e }) => e),
              t = (0, c.v)(({ proxyPageLayout: e }) => e);
            return e
              ? (0, d.jsx)(i.Xg, {
                  layout: u(t),
                  removeTitle: !0,
                  children: (0, d.jsx)(l.X, {
                    place: "proxy_external_service",
                    isFullPage: !0,
                  }),
                })
              : (0, d.jsx)(r.u, {
                  children: (0, d.jsx)(s.k, {
                    place: "legacy-page-layout-xsl",
                  }),
                });
          };
        g.displayName =
          "pages/ProxyExternalService/ProxyExternalService.route/ProxyExternalServiceRoute";
        const y = g;
      },
    },
  ]));
//# sourceMappingURL=ProxyExternalService-route.c5c5a29c322bead3.js.map
//# debugId=aa003d5e-8f3c-4f1a-bf9b-7c9da25525ad
