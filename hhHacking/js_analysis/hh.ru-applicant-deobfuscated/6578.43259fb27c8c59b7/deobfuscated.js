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
      e._sentryDebugIds[t] = "80cc1ca1-72ee-4b44-a60b-35f9b8ff13d2";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-80cc1ca1-72ee-4b44-a60b-35f9b8ff13d2";
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
        var s = arguments[t];
        if (s != null) {
          for (var r in s) {
            if (s.hasOwnProperty(r)) {
              e[r] = s[r];
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
  ["6578"],
  {
    626017: function (e, t, s) {
      s.d(t, {
        Z: () => r,
      });
      const r = {
        "modal-content": "modal-content--jN8pUN6g3CAKls89",
        modalContent: "modal-content--jN8pUN6g3CAKls89",
        "modal-image": "modal-image--rwlgR7vMq2AsnnWY",
        modalImage: "modal-image--rwlgR7vMq2AsnnWY",
        "success-image": "success-image--uz0WE1DgDc0s6HHw",
        successImage: "success-image--uz0WE1DgDc0s6HHw",
        stretched: "stretched--FeNIXx_UC8wTssgA",
      };
    },
    871824: function (e, t, s) {
      s.d(t, {
        y: () => y,
      });
      var r = s(394280);
      var n = s(940389);
      var i = s(166122);
      var a = s(997543);
      var o = s(674070);
      var l = s(599998);
      var d = s(343856);
      const u = "resumeList.resumeAiRecommendation.notification.success";
      const c = ({ trls: e, removeNotification: t, ...s }) =>
        (0, d.jsx)(a.A, {
          addon: (0, d.jsx)(o.lot, {
            initialColor: "positive",
          }),
          showClose: true,
          autohideTime: 3000,
          onClose: t,
          ...s,
          children: e[u],
        });
      c.displayName =
        "components/ResumeAIRecommendation/Notification/Notification";
      const m = (0, l.x)(c);
      var h = s(435265);
      var p = s(255717);
      const y = (e) => {
        const t = (0, n.useDispatch)();
        const [s, a] = (0, r.useState)(false);
        const { addNotification: o } = (0, i.lm)();
        return {
          fetchAIGenerate: () => {
            a(true);
            return p._i
              .post("/shards/hhpro_ai_generate", e)
              .then(
                ({ data: e }) => {
                  t((0, h.kq)(e));
                  o(m);
                  a(false);
                },
                (e) => {
                  throw e;
                },
              )
              .finally(() => {
                a(false);
              });
          },
          fetchAICheckStatus: () =>
            p._i
              .get("/shards/hhpro_ai_check_status", {
                params: e,
              })
              .then((e) => {
                t((0, h.kq)(e));
              }),
          loadingGenerate: s,
        };
      };
    },
    149020: function (e, t, s) {
      s.d(t, {
        H: () => a,
      });
      s(394280);
      var r = s(428909);
      var n = s(781943);
      var i = s(343856);
      const a = ({ children: e, isShrinked: t }) =>
        (0, i.jsx)(r.ColumnsWrapper, {
          children: (0, i.jsx)(n.Z, {
            isShrinked: t,
            children: e,
          }),
        });
      a.displayName = "layouts/BlokoLayouts/DefaultLayout/DefaultLayout";
    },
    134902: function (e, t, s) {
      s.d(t, {
        T: () => n,
      });
      s(394280);
      var r = s(343856);
      const n = ({ children: e }) =>
        (0, r.jsx)(r.Fragment, {
          children: e,
        });
      n.displayName = "layouts/BlokoLayouts/EmptyLayout/EmptyLayout";
    },
    708302: function (e, t, s) {
      s.d(t, {
        Z: () => C,
      });
      var r = s(394280);
      var n = s.n(r);
      var i = s(882177);
      var a = s.n(i);
      var o = s(701416);
      var l = s.n(o);
      var d = s(343856);
      const u =
        ({ error: e, noContentPadding: t, noBackground: s }) =>
        ({ children: r }) =>
          (0, d.jsxs)(l(), {
            sTop: true,
            sBottom: true,
            mTop: true,
            mBottom: true,
            lTop: true,
            lBottom: true,
            children: [
              e && (0, d.jsx)(e, {}),
              (0, d.jsx)("div", {
                className: a()("light-page-content", {
                  "light-page-content_no-padding": t,
                  "light-page-content_no-background": s,
                }),
                children: r,
              }),
            ],
          });
      u.displayName =
        "BlokoLayouts/LightPageLayout/LightPageLayoutContent/LightPageLayoutContent";
      var c = s(859716);
      var m = s(105160);
      var h = s(452528);
      var p = s.n(h);
      var y = s(599998);
      var x = s(89396);
      var v = s(846192);
      var b = s(520046);
      const g = {
        [b.Dc.BY]: "footer.tutby.copyrights",
        general: "index.footer.menuitem.copyright",
      };
      const f = ({ trls: e }) => {
        const t = (0, x.i)();
        const s = (0, v.do)();
        const r = (0, v.$w)();
        const n = (0, d.jsx)("span", {
          suppressHydrationWarning: true,
          children: (0, c.WU)(e[g[s ? b.Dc.BY : "general"]], {
            "{0}": new Date().getFullYear().toString(),
          }),
        });
        if (t) {
          return (0, d.jsx)("div", {
            className: "light-page-footer",
            children: (0, d.jsx)("div", {
              className: "light-page-footer__copyright",
              children: (0, d.jsx)(m.x, {
                style: r ? "secondary" : "primary",
                typography: "label-2-regular",
                "data-qa": "copyright",
                children: n,
              }),
            }),
          });
        } else {
          return (0, d.jsx)("div", {
            className: "light-page-footer",
            children: (0, d.jsx)("div", {
              className: "light-page-footer__copyright",
              children: (0, d.jsx)(p(), {
                size: h.TextSize.Small,
                "data-qa": "copyright",
                children: n,
              }),
            }),
          });
        }
      };
      f.displayName =
        "BlokoLayouts/LightPageLayout/LightPageLayoutFooter/LightPageLayoutFooterComponent";
      const j = (0, y.x)(f);
      var R = s(980078);
      const _ = ({
        children: e,
        noContentPadding: t,
        noBackground: s,
        error: r,
      }) => {
        const i = n().useMemo(
          () =>
            u({
              noContentPadding: t,
              noBackground: s,
              error: r,
            }),
          [t, s, r],
        );
        return e({
          header: (0, d.jsx)(R.e, {}),
          Content: i,
          footer: (0, d.jsx)(j, {}),
        });
      };
      _.displayName = "BlokoLayouts/LightPageLayout/index/LightPage";
      const C = _;
    },
    182302: function (e, t, s) {
      s.d(t, {
        Xg: () => R,
        rU: () => g,
        T$: () => v,
        L7: () => b.Z,
        HQ: () => a.H,
        Tp: () => o.T,
      });
      var r = s(394280);
      var n = s(524237);
      var i = s(867728);
      var a = s(149020);
      var o = s(134902);
      var l = s(491606);
      var d = s(428909);
      var u = s.n(d);
      var c = s(739788);
      var m = s(666825);
      var h = s.n(m);
      var p = s(257549);
      var y = s.n(p);
      var x = s(343856);
      const v = ({ linkAboveHeader: e, children: t, title: s }) =>
        (0, x.jsxs)(a.H, {
          children: [
            (0, x.jsxs)(u(), {
              xs: "4",
              s: "8",
              m: "12",
              l: "16",
              children: [
                e &&
                  (0, x.jsx)(h(), {
                    disableVisited: true,
                    Element: l.SPALink,
                    to: e.to,
                    children: e.trl,
                  }),
                (0, x.jsx)(c.H1, {
                  children: s,
                }),
                (0, x.jsx)(y(), {
                  base: 4,
                }),
              ],
            }),
            t,
          ],
        });
      v.displayName = "layouts/BlokoLayouts/HeaderLayout/HeaderLayout";
      var b = s(708302);
      const g = ({ children: e, sidebar: t }) =>
        (0, x.jsxs)(a.H, {
          children: [
            (0, x.jsx)(u(), {
              xs: "4",
              m: "8",
              l: "11",
              container: true,
              children: e,
            }),
            (0, x.jsx)(u(), {
              xs: "4",
              m: "4",
              l: "5",
              container: true,
              children: (0, x.jsx)(t, {}),
            }),
          ],
        });
      g.displayName = "layouts/BlokoLayouts/SideBarLayout/SideBarLayout";
      var f = s(852377);
      var j = s(324566);
      const R = ({
        children: e,
        layout: t = a.H,
        errorWrapper: s = n.Z,
        ogTitle: o,
        description: l,
        ogDescription: d,
        canonical: u,
        rssTitle: c,
        rssHref: m,
        removeTitle: h = false,
        afterMenuContent: p,
        breadcrumbsContent: y,
        useCleanContainer: v,
        ogUrl: b,
        ogType: g,
        ogImage: R,
        ogImageWidth: _,
        ogImageHeight: C,
        ogImageAlt: S,
        ogImageType: k,
        ogSiteName: L,
        twitterImage: w,
        vkImage: A,
        hreflangItems: I,
        articleMeta: N,
        ...T
      }) => {
        const { title: E } = T;
        (0, r.useLayoutEffect)(
          () =>
            (0, j.$)({
              title: E,
              ogTitle: o,
              removeTitle: h,
              description: l,
              ogDescription: d,
              canonical: u,
            }),
          [E, h, l, u, o, d],
        );
        const P = (0, x.jsxs)(x.Fragment, {
          children: [
            (0, x.jsxs)(i.yG, {
              children: [
                E &&
                  (0, x.jsxs)(x.Fragment, {
                    children: [
                      (0, x.jsx)(i.V1, {
                        children: E,
                      }),
                      (0, x.jsx)(i.Vj, {
                        property: "og:title",
                        content: o || E,
                      }),
                    ],
                  }),
                l &&
                  (0, x.jsx)(i.Hb, {
                    content: l,
                    openGraphContent: d,
                  }),
                u &&
                  (0, x.jsx)(i.H_, {
                    rel: "canonical",
                    href: u,
                  }),
                m &&
                  (E || c) &&
                  (0, x.jsx)(i.H_, {
                    title: c || E,
                    type: "application/rss+xml",
                    rel: "alternate",
                    href: m,
                  }),
                b &&
                  (0, x.jsx)(i.Vj, {
                    property: "og:url",
                    content: b,
                  }),
                L &&
                  (0, x.jsx)(i.Vj, {
                    property: "og:site_name",
                    content: L,
                  }),
                g &&
                  (0, x.jsx)(i.Vj, {
                    property: "og:type",
                    content: g,
                  }),
                R &&
                  (0, x.jsxs)(x.Fragment, {
                    children: [
                      (0, x.jsx)(i.Vj, {
                        property: "og:image",
                        content: R,
                      }),
                      S &&
                        (0, x.jsx)(i.Vj, {
                          property: "og:image:alt",
                          content: S,
                        }),
                      k &&
                        (0, x.jsx)(i.Vj, {
                          property: "og:image:type",
                          content: k,
                        }),
                      _ &&
                        (0, x.jsx)(i.Vj, {
                          property: "og:image:width",
                          content: String(_),
                        }),
                      C &&
                        (0, x.jsx)(i.Vj, {
                          property: "og:image:height",
                          content: String(C),
                        }),
                    ],
                  }),
                w &&
                  (0, x.jsx)(i.Vj, {
                    property: "twitter:image",
                    content: w,
                  }),
                A &&
                  (0, x.jsx)(i.Vj, {
                    property: "vk:image",
                    content: A,
                  }),
                I != null &&
                  !!I.length &&
                  (0, x.jsx)(i.aD, {
                    content: I,
                  }),
                !!N &&
                  (0, x.jsxs)(x.Fragment, {
                    children: [
                      N.authorName &&
                        (0, x.jsx)(i.Vj, {
                          property: "article:author",
                          content: N.authorName,
                        }),
                      N.sections.map((e) =>
                        (0, x.jsx)(
                          "meta",
                          {
                            property: "article:section",
                            content: e,
                          },
                          e,
                        ),
                      ),
                      N.tags.map((e) =>
                        (0, x.jsx)(
                          "meta",
                          {
                            property: "article:tag",
                            content: e,
                          },
                          e,
                        ),
                      ),
                    ],
                  }),
              ],
            }),
            (0, x.jsx)(t, {
              ...T,
              children: e,
            }),
          ],
        });
        return (0, x.jsx)(f.u, {
          afterMenuContent: p,
          breadcrumbsContent: y,
          useCleanContainer: v,
          children: (0, x.jsx)(s, {
            children: P,
          }),
        });
      };
      R.displayName = "app/layouts/PageLayout/PageLayout";
    },
    324566: function (e, t, s) {
      s.d(t, {
        $: () => r,
      });
      const r = ({
        title: e,
        ogTitle: t,
        removeTitle: s,
        description: r,
        ogDescription: n,
        canonical: i,
      }) => {
        const a = [];
        const o = (e) => {
          const t = document.querySelector(e);
          if (t) {
            a.push(t);
          }
        };
        if (s || e) {
          [".HH-PageLayout-Title", ".HH-PageLayout-OgTitle"].forEach(o);
        }
        if (!e && t) {
          o(".HH-PageLayout-OgTitle");
        }
        if (r) {
          [
            ".HH-PageLayout-Description",
            ".HH-PageLayout-OgDescription",
          ].forEach(o);
        }
        if (!r && n) {
          o(".HH-PageLayout-OgDescription");
        }
        if (i) {
          o(".HH-PageLayout-Canonical");
        }
        a.forEach((e) => {
          var t;
          if (e == null || (t = e.parentNode) === null || t === undefined) {
            return undefined;
          } else {
            return t.removeChild(e);
          }
        });
      };
    },
    605420: function (e, t, s) {
      s.d(t, {
        o: () => M,
      });
      var r = s(394280);
      var n = s(791256);
      var i = s.n(n);
      var a = s(82060);
      var o = s.n(a);
      var l = s(413134);
      var d = s(491606);
      var u = s(36074);
      var c = s(118450);
      var m = s(454386);
      var h = s(441226);
      var p = s(105160);
      var y = s(922366);
      var x = s(559123);
      var v = s(122060);
      var b = s(674070);
      var g = s(599998);
      var f = s(878724);
      const j = "navbar--KlHr5A9ki0kdLG4v";
      var R = s(343856);
      const _ = "bot-update-resume-modal";
      const C = "bot-update-resume-modal__title";
      const S = "bot-update-resume-modal__content";
      const k = "bot-update-resume-modal__action-button";
      const L = "bot-update-resume-modal__promo-button";
      const w = "bot-update-resume-modal__close-button";
      const A = "botUpdateResume.modal.title";
      const I = "botUpdateResume.modal.text";
      const N = "botUpdateResume.modal.actionButton";
      const T = "botUpdateResume.modal.promoButton";
      const E = "botUpdateResume.modal.closeButton";
      const P = ({ trls: e }) => {
        const { isMobile: t } = (0, u.G)();
        const {
          modalVisible: s,
          onCloseModal: n,
          resumeHash: a,
          resumeId: g,
          chatBotHref: P,
        } = (0, f.h)();
        const {
          title: M,
          content: D,
          actionButton: H,
          promoButton: U,
        } = (0, r.useMemo)(
          () => ({
            title: e[A],
            content: e[I],
            actionButton: e[N],
            promoButton: e[T],
            closeButton: e[E],
          }),
          [e],
        );
        const q = () => {
          i().sendEvent("applicant", "resume_renew_modal", "close");
          if (n != null) {
            n();
          }
        };
        const z = `/applicant-services/hhpro?${l.j.stringify({
          hhtmFrom: "resume_update_success",
          resumeHash: a,
        })}`;
        const V = (e, t) => {
          i().sendEvent("applicant", "resume_renew_modal", e);
          o()({
            resumeId: g,
            buttonName: t,
          });
        };
        (0, r.useEffect)(() => {
          if (s) {
            i().sendEvent("applicant", "resume_renew_modal", "opened");
          }
        }, [s]);
        const B = () =>
          (0, R.jsx)(c.z, {
            Element: d.SPALink,
            to: P || "",
            mode: "secondary",
            style: "accent",
            onClick: () => {
              V("bot_promote", "update_resume_by_bot");
            },
            "data-qa": k,
            children: H,
          });
        const $ = () =>
          (0, R.jsx)(c.z, {
            Element: d.SPALink,
            mode: "primary",
            style: "accent",
            to: z,
            onClick: () => {
              V("promote_resume", "resume_renewal");
            },
            "data-qa": L,
            children: U,
          });
        if (t) {
          return (0, R.jsxs)(m.R, {
            visible: s,
            onClose: q,
            "data-qa": _,
            footer: (0, R.jsxs)(h.W, {
              children: [$(), B()],
            }),
            children: [
              (0, R.jsx)("div", {
                className: j,
                children: (0, R.jsx)(b.Cs7, {
                  initialColor: "secondary",
                  onClick: q,
                  "data-qa": w,
                }),
              }),
              (0, R.jsx)(p.x, {
                typography: "title-4-semibold",
                "data-qa": C,
                children: M,
              }),
              (0, R.jsx)(y.X, {
                default: 4,
              }),
              (0, R.jsx)(p.x, {
                typography: "label-2-regular",
                style: "secondary",
                "data-qa": S,
                children: D,
              }),
              (0, R.jsx)(y.X, {
                default: 32,
              }),
            ],
          });
        } else {
          return (0, R.jsx)(x.u, {
            title: M,
            visible: s,
            onClose: q,
            "data-qa": _,
            actions: (0, R.jsx)(b.Cs7, {
              onClick: q,
              "data-qa": w,
              initialColor: "secondary",
            }),
            footer: (0, R.jsx)(v.o, {
              primaryActions: (0, R.jsxs)(R.Fragment, {
                children: [B(), $()],
              }),
            }),
            children: (0, R.jsx)(p.x, {
              typography: "paragraph-1-regular",
              "data-qa": S,
              children: D,
            }),
          });
        }
      };
      P.displayName = "ApplicantResumes/BotUpdateModal/index/BotUpdateModal";
      const M = (0, g.x)(P);
    },
    557558: function (e, t, s) {
      s.d(t, {
        n: () => n,
      });
      var r = s(225098);
      const n = (e) =>
        e === r.t3.Blocked
          ? "blocked"
          : e === r.t3.NotFinished
            ? "not_published"
            : e === r.t3.Corrected
              ? "on_moderation"
              : "published";
    },
    609918: function (e, t, s) {
      s.d(t, {
        N: () => Fr,
      });
      var r = s(394280);
      var n = s(769314);
      var i = s.n(n);
      var a = s(491606);
      var o = s(36074);
      var l = s(136361);
      var d = s(750128);
      var u = s(605420);
      var c = s(791256);
      var m = s.n(c);
      var h = s(406373);
      var p = s.n(h);
      var y = s(376378);
      var x = s.n(y);
      var v = s(640569);
      var b = s(105160);
      var g = s(820408);
      var f = s(922366);
      var j = s(674070);
      var R = s(486039);
      var _ = s(416883);
      var C = s(594948);
      const S = {
        title: "title--AToCBlSkRAR7MhO3",
      };
      var k = s(343856);
      const L = "autoresponse.resumeCardButton.title";
      const w = "autoresponse.resumeCardButton.description.info";
      const A = "autoresponse.resumeCardButton.description.on";
      const I = "autoresponse.resumeCardButton.description.off";
      const N = "autoresponse.resumeCardButton.description.hidden";
      const T = ({ trls: e, resume: t }) => {
        const {
          handleSelectResume: s,
          setFiltersVisible: r,
          setSelectedResume: n,
          setHiddenAlertVisible: i,
        } = (0, R.W)();
        const a = (0, C.v)((e) => e.applicantAutoresponseRules[0]);
        const o = !!a.autoResponseId;
        const d = a.enabled && a.resumeHash === t._attributes.hash;
        const u =
          (t == null ? undefined : t.accessType) &&
          !_.YF.includes(t.accessType[0].string);
        let m = "information";
        let h = "information";
        if (o) {
          m = d ? "auto_response_settings" : "auto_response_off_settings";
          h = d ? "auto_response" : "auto_response_off";
        }
        if (_.XK.includes(t._attributes.status)) {
          return (0, k.jsx)(c.ElementShownAnchor, {
            fn: x(),
            entryType: h,
            resumeId: t._attributes.hash,
            ...(o && {
              autoResponseId: a.autoResponseId.toString(),
            }),
            ...(["switch_resume", "auto_response_off", "information"].includes(
              h,
            ) && {
              resumeIsHidden: u ? "true" : null,
            }),
            children: (0, k.jsx)(l.Z, {
              padding: 12,
              borderRadius: 12,
              borderWidth: "default",
              style: "secondary",
              onClick: () =>
                u
                  ? (n(t),
                    i(true),
                    void p()({
                      entryType: m,
                      resumeId: t._attributes.hash,
                      autoResponseId: a.autoResponseId.toString(),
                      resumeIsHidden: "true",
                    }))
                  : (p()({
                      entryType: m,
                      resumeId: t._attributes.hash,
                      ...(o
                        ? {
                            autoResponseId: a.autoResponseId.toString(),
                          }
                        : {}),
                      ...(m === "information" && {
                        resumeIsHidden: null,
                      }),
                    }),
                    o ? (n(t), void r(true)) : void s(t)),
              children: (0, k.jsxs)("div", {
                className: S.container,
                children: [
                  (0, k.jsxs)("div", {
                    className: S.title,
                    children: [
                      (0, k.jsx)(b.x, {
                        typography: "subtitle-2-semibold",
                        children: e[L],
                      }),
                      (0, k.jsx)(g.V, {
                        default: 24,
                      }),
                      o
                        ? (0, k.jsx)(j.CmT, {
                            initialColor: d ? "accent" : "tertiary",
                          })
                        : (0, k.jsx)(j.qYF, {
                            initialColor: "tertiary",
                          }),
                    ],
                  }),
                  (0, k.jsx)(f.X, {
                    default: 4,
                  }),
                  (0, k.jsx)(b.x, {
                    typography: "label-4-regular",
                    style: "secondary",
                    children:
                      e[
                        o
                          ? u
                            ? N
                            : a.enabled && a.resumeHash === t._attributes.hash
                              ? A
                              : I
                          : w
                      ],
                  }),
                ],
              }),
            }),
          });
        } else {
          return null;
        }
      };
      T.displayName =
        "Autoresponse/ResumeCardAutoresponseButton/index/ResumeCardAutoresponseButtonComponent";
      const E = (0, v.Z)(T);
      var P = s(118450);
      const M = "controls--PDDHUsEqv2woc4br";
      const D = "autoresponse.informer.title";
      const H = "autoresponse.informer.subtitle";
      const U = "autoresponse.informer.subtitle.mobile.active.on";
      const q = "autoresponse.informer.subtitle.mobile.active.off";
      const z = "autoresponse.informer.subtitle.mobile.hidden";
      const V = {
        how: "autoresponse.informer.button.how",
        off: "autoresponse.informer.button.off",
        on: "autoresponse.informer.button.on",
        settings: "autoresponse.informer.button.settings.mobile",
      };
      const B = ({ trls: e, resume: t }) => {
        const {
          handleSelectResume: s,
          setFiltersVisible: n,
          setSelectedResume: i,
          setHiddenAlertVisible: a,
          handleSwitchAutoresponseEnabled: o,
          isLoading: d,
        } = (0, R.W)();
        const u = (0, C.v)((e) => e.applicantAutoresponseRules[0]);
        const m = !!u.autoResponseId;
        const h =
          (t == null ? undefined : t.accessType) &&
          !_.YF.includes(t.accessType[0].string);
        const y = u.resumeHash === t._attributes.hash;
        const v = (0, c.useElementShown)(x(), {
          entryType: "switch_resume",
          resumeId: t._attributes.hash,
          autoResponseId: u.autoResponseId.toString(),
          resumeIsHidden: h ? "true" : null,
        });
        const j = (0, r.useMemo)(
          () =>
            h
              ? e[z]
              : u.enabled && u.resumeHash === t._attributes.hash
                ? e[U]
                : e[q],
          [h, u.enabled, u.resumeHash, t._attributes.hash, e],
        );
        const S = () => {
          p()({
            entryType: "information",
            resumeId: t._attributes.hash,
            resumeIsHidden: h ? "true" : null,
          });
          if (h) {
            i(t);
            a(true);
            return;
          } else if (m) {
            i(t);
            n(true);
            return;
          } else {
            s(t);
            return;
          }
        };
        if (!_.XK.includes(t._attributes.status)) {
          return null;
        }
        const L = (e, t) => {
          if (
            m &&
            u.resumeHash !== t._attributes.hash &&
            (p()({
              entryType: "switch_resume",
              resumeId: t._attributes.hash,
              autoResponseId: u.autoResponseId.toString(),
              resumeIsHidden: h ? "true" : null,
            }),
            t.accessType && !_.YF.includes(t.accessType[0].string))
          ) {
            i(t);
            a(true);
            return;
          }
          o(e, t);
        };
        if (m) {
          return (0, k.jsxs)(l.Z, {
            padding: 12,
            borderRadius: 12,
            borderWidth: "default",
            stretched: true,
            children: [
              (0, k.jsx)(b.x, {
                typography: "subtitle-1-semibold",
                children: e[D],
              }),
              (0, k.jsx)(f.X, {
                default: 4,
              }),
              (0, k.jsx)(b.x, {
                typography: "label-3-regular",
                style: "secondary",
                children: j,
              }),
              (0, k.jsx)(f.X, {
                default: 12,
              }),
              (0, k.jsxs)("div", {
                className: M,
                children: [
                  (0, k.jsx)(P.z, {
                    style: "accent",
                    stretched: true,
                    mode: "secondary",
                    disabled: h,
                    onClick: S,
                    children: (0, k.jsx)(c.ElementShownAnchor, {
                      fn: x(),
                      entryType:
                        u.enabled && u.resumeHash === t._attributes.hash
                          ? "auto_response"
                          : "auto_response_off",
                      resumeId: t._attributes.hash,
                      autoResponseId: u.autoResponseId.toString(),
                      ...(u.enabled &&
                        u.resumeHash !== t._attributes.hash && {
                          resumeIsHidden: h ? "true" : null,
                        }),
                      children: e[V.settings],
                    }),
                  }),
                  (0, k.jsx)(g.V, {
                    default: 12,
                  }),
                  y
                    ? (0, k.jsx)(P.z, {
                        stretched: true,
                        style: "negative",
                        mode: "secondary",
                        onClick: () => L(false, t),
                        loading: d,
                        disabled: h,
                        children: e[V.off],
                      })
                    : (0, k.jsx)(P.z, {
                        ref: v,
                        stretched: true,
                        style: "accent",
                        mode: "secondary",
                        onClick: () => L(true, t),
                        loading: d,
                        disabled: h,
                        children: e[V.on],
                      }),
                ],
              }),
            ],
          });
        } else {
          return (0, k.jsxs)(l.Z, {
            padding: 12,
            borderRadius: 12,
            borderWidth: "default",
            stretched: true,
            children: [
              (0, k.jsx)(b.x, {
                typography: "subtitle-1-semibold",
                children: e[D],
              }),
              (0, k.jsx)(f.X, {
                default: 4,
              }),
              (0, k.jsx)(b.x, {
                typography: "label-3-regular",
                style: "secondary",
                children: e[H],
              }),
              (0, k.jsx)(f.X, {
                default: 12,
              }),
              (0, k.jsx)(c.ElementShownAnchor, {
                fn: x(),
                entryType: "information",
                resumeId: t._attributes.hash,
                resumeIsHidden: h ? "true" : null,
                children: (0, k.jsx)(P.z, {
                  mode: "secondary",
                  style: "accent",
                  stretched: true,
                  onClick: S,
                  children: e[V.how],
                }),
              }),
            ],
          });
        }
      };
      B.displayName =
        "Autoresponse/ResumeCardMobileDashboard/index/ResumeCardMobileDashboardComponent";
      const $ = (0, v.Z)(B);
      var F = s(928628);
      var W = s(513464);
      var Z = s(710625);
      var O = s(916769);
      var Q = s(599998);
      var X = s(910824);
      var G = s(888927);
      var Y = s(160013);
      var J = s(834103);
      var K = s(940389);
      var ee = s(901475);
      var te = s.n(ee);
      var se = s(96540);
      var re = s(846192);
      var ne = s(454959);
      var ie = s(106428);
      var ae = s(362854);
      var oe = s(101199);
      var le = s(369961);
      var de = s(470251);
      var ue = s.n(de);
      var ce = s(630549);
      var me = s(878724);
      var he = s(569454);
      var pe = s(888974);
      const ye = ({
        children: e,
        resume: t,
        successUpdate: s,
        setkaAlertVisible: n,
        recommendationDetails: i,
      }) => {
        const a = (0, X.ho)(t);
        const o = (0, X.hE)(t);
        const [l, d] = (0, r.useState)(false);
        const u = (0, C.v)(pe.Ym);
        const c = (0, C.v)(pe.GM);
        const m = (0, C.v)(pe.sm);
        const h = (0, r.useCallback)(() => {
          d(false);
        }, []);
        const p = (0, r.useCallback)(() => {
          d(true);
          ce.Y.setItem(he.M2, Date.now().toString());
          ue()({
            resumeId: o,
          });
        }, [o]);
        const y = (0, r.useMemo)(
          () => ({
            resumeId: o,
            resumeHash: a,
            onOpenModal: () => {},
            onCloseModal: h,
            chatBotHref: u,
            modalVisible: l,
            successUpdate: s,
            canUpdateResumeByBot: c,
            recommendationDetails: i,
          }),
          [a, o, u, h, s, c, i, l],
        );
        (0, r.useEffect)(() => {
          const e = (0, he.SG)(m);
          if (c && s && e && !n) {
            p();
          }
        }, [s, p, c, m, n]);
        return (0, k.jsx)(me.G.Provider, {
          value: y,
          children: e,
        });
      };
      ye.displayName =
        "updateByBot/providers/UpdateResumeByBotProvider/UpdateResumeByBotProvider";
      var xe = s(435265);
      var ve = s(626462);
      var be = s(15791);
      var ge = s(914357);
      var fe = s(859716);
      var je = s(745472);
      const Re = "title--mXGcSthUOtgwRv6o";
      const _e = "description--nZ9oH5kuHmg2wzGc";
      const Ce = "adv-mark--qMucT8xig0mrhpPs";
      const Se = "resumeList.updated.label";
      const ke = "resumeList.updated.label.manual";
      const Le = "applicant.resume.update.renewal.automatic.enabled";
      const we = ({
        trls: e,
        isMobile: t,
        updated: s,
        timeUntilUpdate: r,
        currentTimeLeft: n,
        renewal: i,
        nearestIntervalStartTime: a,
      }) => {
        const o =
          n > 0 && !a
            ? (0, fe.WU)(e[ke], {
                "{0}": (0, k.jsx)(je.Z, {
                  date: r || "",
                  showClock: true,
                  textify: true,
                  preposition: true,
                }),
              })
            : (0, fe.WU)(e[Se], {
                "{0}": (0, k.jsx)(je.Z, {
                  date: s || "",
                  showClock: true,
                  textify: true,
                  preposition: true,
                }),
              });
        return (0, k.jsxs)("div", {
          "data-qa": "title-description",
          className: _e,
          children: [
            (0, k.jsxs)(b.x, {
              typography: "paragraph-2-regular",
              style: "secondary",
              children: [
                o,
                !t && i
                  ? (0, k.jsxs)(k.Fragment, {
                      children: [
                        ", ",
                        (0, k.jsx)(b.x, {
                          Element: "span",
                          typography: "paragraph-2-regular",
                          style: "positive",
                          children: e[Le],
                        }),
                      ],
                    })
                  : "",
              ],
            }),
            t && i
              ? (0, k.jsx)(b.x, {
                  Element: "span",
                  typography: "paragraph-2-regular",
                  style: "positive",
                  children: e[Le],
                })
              : "",
          ],
        });
      };
      we.displayName = "ResumeCard/ResumeTitle/Description/Description";
      const Ae = (0, Q.x)(we);
      const Ie = ({
        title: e,
        resume: t,
        updated: s,
        isMobile: r,
        finished: n,
        timeUntilUpdate: i,
        currentTimeLeft: a,
        nearestIntervalStartTime: o,
      }) => {
        const l = (0, X.kn)(t);
        const d = (0, X.nM)(t);
        const u = (0, X.PG)(t);
        return (0, k.jsxs)("div", {
          children: [
            (0, k.jsxs)("div", {
              className: Re,
              children: [
                l &&
                  (0, k.jsx)("div", {
                    className: Ce,
                  }),
                (0, k.jsx)(ge.D, {
                  "data-qa": "resume-title",
                  Element: "h3",
                  size: "medium",
                  style: n ? "primary" : "secondary",
                  children: e,
                }),
              ],
            }),
            n &&
              (0, k.jsx)(Ae, {
                renewal: d,
                updated: s,
                isMobile: r,
                timeUntilUpdate: i,
                currentTimeLeft: a,
                renewalExpireTime: u,
                nearestIntervalStartTime: o,
              }),
          ],
        });
      };
      Ie.displayName = "ResumeCard/ResumeTitle/index/ResumeTitle";
      const Ne = "padding--JflFqydBNcYASl2f";
      const Te = "resumeList.recommendations.title.isPreparingByExpert";
      const Ee = "resumeList.recommendations.text.isPreparingByExpert";
      const Pe = ({
        trls: e,
        title: t,
        resume: s,
        updated: r,
        isMobile: n,
        timeUntilUpdate: i,
        currentTimeLeft: a,
        nearestIntervalStartTime: o,
      }) => {
        const d = (0, X.hE)(s);
        return (0, k.jsxs)(l.Z, {
          stretched: true,
          borderWidth: "default",
          padding: n ? 12 : 24,
          borderRadius: 24,
          "data-qa": "resume",
          "data-qa-id": d,
          "data-qa-title": t,
          children: [
            (0, k.jsx)("div", {
              className: Ne,
              children: (0, k.jsx)(Ie, {
                finished: true,
                title: t,
                resume: s,
                updated: r,
                isMobile: n,
                currentTimeLeft: a,
                timeUntilUpdate: i,
                nearestIntervalStartTime: o,
              }),
            }),
            (0, k.jsx)(f.X, {
              default: 16,
            }),
            (0, k.jsx)(l.Z, {
              style: "secondary",
              stretched: true,
              padding: 16,
              borderRadius: 16,
              children: (0, k.jsxs)(ve.b, {
                children: [
                  (0, k.jsx)(be.j, {
                    children: e[Te],
                  }),
                  (0, k.jsx)(f.X, {
                    default: 4,
                  }),
                  (0, k.jsx)(be.j, {
                    type: "subtitle",
                    "data-qa": "resume-recommendation-preparingByExpert",
                    children: e[Ee],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      Pe.displayName =
        "ResumeCard/PreparingByExpertCard/index/PreparingByExpertCard";
      const Me = (0, Q.x)(Pe);
      var De = s(652834);
      var He = s.n(De);
      var Ue = s(226658);
      var qe = s(997543);
      var ze = s(166122);
      const Ve = "resumeList.actionline.copylink";
      const Be = "resumeList.actionline.copylink.snackbar.text";
      const $e = ({ trls: e }) =>
        (0, k.jsx)(qe.A, {
          addon: (0, k.jsx)(j.lot, {
            initialColor: "positive",
          }),
          showClose: true,
          children: e[Be],
        });
      $e.displayName =
        "ResumeCard/ResumeActions/CopyLinkAction/CopyLinkNotification";
      const Fe = (0, Q.x)($e);
      const We = ({
        hash: e,
        trls: t,
        style: s = "accent",
        size: n = "small",
        resumeId: i,
        stretched: a = false,
        icon: o,
        hhtmSource: l,
      }) => {
        const { addNotification: d } = (0, ze.lm)();
        const u = (0, r.useCallback)(() => {
          He()({
            hhtmSource: l,
            buttonName: "resume_duplicate",
            resumeId: i,
          });
          navigator.clipboard
            .writeText(`${window.location.origin}/resume/${e}`)
            .then(() => {
              d(Fe, {
                uniqueType: true,
              });
            })
            .catch((e) => {
              console.error("Не удалось скопировать ссылку: ", e);
            });
        }, [e, d, i, l]);
        const c = {
          ...(o && {
            icon: o,
          }),
        };
        return (0, k.jsx)(P.z, {
          size: n,
          style: s,
          mode: "tertiary",
          "data-qa": "resume-copylink",
          onClick: u,
          stretched: a,
          ...c,
          children: t[Ve],
        });
      };
      We.displayName = "ResumeCard/ResumeActions/CopyLinkAction/CopyLinkAction";
      const Ze = (0, Q.x)(We);
      var Oe = s(365128);
      const Qe = "resumesList.notification.resumeLimit";
      const Xe = ({ trls: e, ...t }) =>
        (0, k.jsx)(qe.A, {
          addon: (0, k.jsx)(j.L1_, {
            initialColor: "negative",
          }),
          ...t,
          showClose: true,
          children: (0, k.jsx)("p", {
            "data-qa": "max-resume-limit-notification-text",
            children: e[Qe],
          }),
        });
      Xe.displayName =
        "ApplicantResumes/MaxLimitNotification/index/MaxLimitNotification";
      const Ge = (0, Q.x)(Xe);
      var Ye = s(921847);
      var Je = s(255717);
      const Ke = "resumeList.actionline.duplicate";
      const et = ({
        hash: e,
        trls: t,
        style: s = "accent",
        size: n = "small",
        resumeId: i,
        stretched: o = false,
        icon: l,
        hhtmSource: d,
      }) => {
        const u = (0, a.usePush)();
        const { addNotification: c } = (0, ze.lm)();
        const h = (0, C.v)((e) => {
          var t;
          return (
            (e == null || (t = e.resumeLimits) === null || t === undefined
              ? undefined
              : t.remaining) || 0
          );
        });
        const p = (0, r.useCallback)(() => {
          ((e, t, s) => {
            Je._i
              .post("/applicant/resumes/clone", null, {
                params: e,
              })
              .then(({ data: e }) => {
                m().sendEvent("applicant", "resume-started", "double");
                s(e.url);
              })
              .catch((e) => {
                var s;
                if (
                  (s = e.response) !== null &&
                  s !== undefined &&
                  s.data &&
                  e.response.data.error === Ye.O
                ) {
                  t(Ge, {
                    uniqueType: true,
                  });
                } else {
                  (0, Oe.ZP)(e, t);
                }
              });
          })(
            {
              resume: e,
            },
            c,
            u,
          );
          He()({
            hhtmSource: d,
            buttonName: "resume_duplicate",
            resumeId: i,
          });
        }, [c, e, u, i, d]);
        if (h === 0) {
          return null;
        }
        const y = {
          ...(l && {
            icon: l,
          }),
        };
        return (0, k.jsx)(P.z, {
          size: n,
          style: s,
          mode: "tertiary",
          "data-qa": "resume-dublicate",
          onClick: p,
          stretched: o,
          ...y,
          children: t[Ke],
        });
      };
      et.displayName =
        "ResumeCard/ResumeActions/DuplicateAction/DuplicateAction";
      const tt = (0, Q.x)(et);
      const st = "resume.edit";
      const rt = ({
        href: e,
        size: t = "small",
        trls: s,
        resumeId: r,
        icon: n,
        stretched: i = false,
        style: o = "accent",
        hhtmSource: l,
      }) => {
        const d = {
          ...(n && {
            icon: n,
          }),
        };
        return (0, k.jsx)(P.z, {
          Element: a.SPALink,
          to: e,
          size: t,
          mode: "tertiary",
          style: o,
          "data-qa": "resume-edit",
          onClick: () => {
            He()({
              hhtmSource: l,
              buttonName: "resume_edit",
              resumeId: r,
            });
          },
          stretched: i,
          ...d,
          children: s[st],
        });
      };
      rt.displayName = "ResumeCard/ResumeActions/EditAction/EditAction";
      const nt = (0, Q.x)(rt);
      const it = "resumeList.actionline.visibility.change";
      const at = ({
        hash: e,
        trls: t,
        style: s = "accent",
        size: r = "small",
        resumeId: n,
        stretched: i = false,
        icon: o,
        hhtmSource: l,
      }) => {
        const d = {
          ...(o && {
            icon: o,
          }),
        };
        return (0, k.jsx)(P.z, {
          style: s,
          Element: a.SPALink,
          size: r,
          mode: "tertiary",
          to: `/resume/edit/${e}/visibility`,
          onClick: () => {
            He()({
              hhtmSource: l,
              buttonName: "resume_change_visibility",
              resumeId: n,
            });
          },
          stretched: i,
          ...d,
          children: t[it],
        });
      };
      at.displayName =
        "ResumeCard/ResumeActions/VisibilityAction/VisibilityAction";
      const ot = (0, Q.x)(at);
      const lt = "menu-mobile--y1k55KI7xBwt7trB";
      const dt = ({ resume: e }) => {
        const { hhtmSource: t } = (0, G.t)();
        const s = (0, X.ho)(e);
        const n = (0, X.hE)(e);
        const i = (0, X.YE)(e);
        const a = (0, X.No)(e);
        const o = (0, r.useRef)(null);
        const [l, d] = (0, r.useState)(false);
        if (i) {
          return null;
        } else {
          return (0, k.jsxs)("div", {
            className: lt,
            children: [
              (0, k.jsx)(j.yRg, {
                ref: o,
                "data-qa": "resume-list-action-more",
                padding: 12,
                initialColor: "secondary",
                onClick: () => {
                  d(!l);
                  He()({
                    buttonName: "resume_settings",
                    resumeId: n,
                  });
                },
              }),
              (0, k.jsx)(Ue.S, {
                visible: l,
                onClose: () => {
                  d(false);
                },
                dropProps: {
                  width: 320,
                  padding: 12,
                  placement: "bottom-right",
                  activatorRef: o,
                  closeByClickOutside: true,
                },
                children: a
                  ? (0, k.jsx)(tt, {
                      stretched: true,
                      size: "large",
                      hash: s,
                      icon: (0, k.jsx)(j.QCS, {}),
                      style: "neutral",
                      hhtmSource: t,
                      resumeId: n,
                    })
                  : (0, k.jsxs)(k.Fragment, {
                      children: [
                        (0, k.jsx)(ot, {
                          stretched: true,
                          size: "large",
                          icon: (0, k.jsx)(j.bzb, {}),
                          hash: s,
                          style: "neutral",
                          resumeId: n,
                          hhtmSource: t,
                        }),
                        (0, k.jsx)(nt, {
                          stretched: true,
                          size: "large",
                          icon: (0, k.jsx)(j.vvx, {}),
                          hash: s,
                          style: "neutral",
                          href: `/resume/${s}`,
                          resumeId: n,
                          hhtmSource: t,
                        }),
                        (0, k.jsx)(tt, {
                          stretched: true,
                          size: "large",
                          hash: s,
                          icon: (0, k.jsx)(j.QCS, {}),
                          style: "neutral",
                          resumeId: n,
                          hhtmSource: t,
                        }),
                        (0, k.jsx)(Ze, {
                          stretched: true,
                          size: "large",
                          hash: s,
                          icon: (0, k.jsx)(j.fws, {}),
                          style: "neutral",
                          resumeId: n,
                          hhtmSource: t,
                        }),
                      ],
                    }),
              }),
            ],
          });
        }
      };
      dt.displayName = "ResumeCard/ResumeActions/index/ResumeActions";
      var ut = s(242615);
      var ct = s.n(ut);
      var mt = s(555498);
      var ht = s(226453);
      var pt = s(927633);
      var yt = s(180202);
      var xt = s(941545);
      const vt = "myresume.suitableVacanciesCount.shortText.one";
      const bt = "myresume.suitableVacanciesCount.shortText.many";
      const gt = "myresume.suitableVacanciesCount.shortText.some";
      const ft = "resumeList.actionline.suitableVacancies.shortText";
      const jt = {
        suitableOneShort:
          "myresume.suitableVacanciesCount.shortText.one.mobile",
        suitableManyShort:
          "myresume.suitableVacanciesCount.shortText.many.mobile",
        suitableSomeShort:
          "myresume.suitableVacanciesCount.shortText.some.mobile",
        suitableZeroShort:
          "myresume.suitableVacanciesCount.shortText.zero.mobile",
      };
      const Rt = ({ count: e, trls: t, isMobile: s = false }) =>
        (0, k.jsx)(xt.q, {
          value: e,
          one: s ? t[jt.suitableOneShort] : t[vt],
          some: s ? t[jt.suitableSomeShort] : t[gt],
          many: s ? t[jt.suitableManyShort] : t[bt],
          zero: s ? t[jt.suitableZeroShort] : t[ft],
          hasValue: e > 0,
        });
      Rt.displayName =
        "components/SuitableVacanciesText/index/RedesignSuitableVacanciesText";
      const _t = (0, Q.x)(Rt);
      const Ct = ({ count: e, trls: t }) =>
        (0, k.jsx)(xt.q, {
          value: e,
          one: t[vt],
          some: t[gt],
          many: t[bt],
          zero: t[ft],
          hasValue: e > 0,
        });
      Ct.displayName =
        "components/SuitableVacanciesText/index/SuitableVacanciesText";
      (0, Q.x)(Ct);
      var St = s(847461);
      var kt = s(389371);
      var Lt = s(225098);
      var wt = s(145106);
      var At = s(262023);
      var It = s.n(At);
      var Nt = s(720278);
      var Tt = s(75593);
      var Et = s.n(Tt);
      var Pt = s(365592);
      var Mt = s.n(Pt);
      var Dt = s(129141);
      var Ht = s.n(Dt);
      var Ut = s(744785);
      var qt = s.n(Ut);
      var zt = s(144368);
      var Vt = s(122060);
      var Bt = s(559123);
      var $t = s(454386);
      var Ft = s(648695);
      var Wt = s(594766);
      var Zt = s(154595);
      var Ot = s(907433);
      var Qt = s(580356);
      var Xt = s(871824);
      var Gt = s(295243);
      var Yt = s(539329);
      var Jt = s(626017);
      const Kt = "resumeList.resumeAiRecommendation.button";
      const es = "resumeList.resumeAiRecommendation.mainModal.title";
      const ts = "resumeList.resumeAiRecommendation.mainModal.button.close";
      const ss = "resumeList.resumeAiRecommendation.mainModal.button.back";
      const rs = "resumeList.resumeAiRecommendation.mainModal.button.ok";
      const ns = "resumeList.resumeAiRecommendation.alertModal.title";
      const is = "resumeList.resumeAiRecommendation.alertModal.subTitle";
      const as = "resumeList.resumeAiRecommendation.alertModal.textOk";
      const os = "resumeList.resumeAiRecommendation.alertModal.textCancel";
      const ls = "resumeList.resumeAiRecommendation.mainModal.expertCard.title";
      const ds =
        "resumeList.resumeAiRecommendation.mainModal.expertCard.description";
      const us = "resumeList.resumeAiRecommendation.mainModal.aiCard.title";
      const cs =
        "resumeList.resumeAiRecommendation.mainModal.aiCard.description";
      const ms =
        "resumeList.resumeAiRecommendation.mainModal.aiCard.tag.freeGeneration";
      const hs =
        "resumeList.resumeAiRecommendation.mainModal.aiCard.tag.subscription";
      var ps = (function (e) {
        e.Expert = "Expert";
        e.AI = "AI";
        return e;
      })(ps || {});
      const ys = ({
        resumeHash: e,
        resumeId: t,
        initialSource: s,
        hhtmSource: n,
        surveyProfession: i,
        trls: o,
      }) => {
        const d = (0, Yt.T)(e);
        const [u, m] = (0, r.useState)(false);
        const h = (0, C.v)((e) => e.applicantResumesAiAudit);
        const p = h.find((e) => e.resumeId === t);
        const y = p == null ? undefined : p.status;
        const x = (0, C.v)((e) => e.hasAIHhPro);
        const [v, g] = (0, r.useState)(false);
        const { microfrontState: R, openModal: _ } = (0, Gt.d)();
        const { fetchAIGenerate: S, loadingGenerate: L } = (0, Xt.y)({
          resumeId: t,
        });
        const [w, A] = (0, r.useState)(ps.AI);
        const I = (0, a.usePush)();
        const N = (0, c.useElementShown)(Ht());
        const T = () => {
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsxs)(l.Z, {
                stretched: true,
                padding: 24,
                borderRadius: 24,
                borderWidth: "default",
                borderStyle: w === ps.AI ? "accent" : undefined,
                onClick: () => A(ps.AI),
                children: [
                  (0, k.jsx)(ve.b, {
                    left: (0, k.jsx)(mt.Y8$, {}),
                    right: (0, k.jsx)(zt.V, {
                      style: "positive",
                      size: "medium",
                      children: h.length ? o[hs] : o[ms],
                    }),
                  }),
                  (0, k.jsx)(f.X, {
                    default: 8,
                  }),
                  (0, k.jsxs)(ve.b, {
                    children: [
                      (0, k.jsx)(be.j, {
                        children: o[us],
                      }),
                      (0, k.jsx)(be.j, {
                        type: "subtitle",
                        children: o[cs],
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsx)(f.X, {
                default: 12,
              }),
              d &&
                (0, k.jsxs)(l.Z, {
                  stretched: true,
                  padding: 24,
                  borderRadius: 24,
                  borderWidth: "default",
                  borderStyle: w === ps.Expert ? "accent" : undefined,
                  onClick: () => A(ps.Expert),
                  children: [
                    (0, k.jsx)(ve.b, {
                      left: (0, k.jsx)(j.QUo, {
                        initialColor: "accent",
                      }),
                      right: (0, k.jsxs)(zt.V, {
                        style: "positive",
                        size: "medium",
                        children: [
                          (0, k.jsx)(Nt.Z, {
                            currency: d.price?.currency,
                            children: d.price?.amount || 0,
                          }),
                          " ",
                        ],
                      }),
                    }),
                    (0, k.jsx)(f.X, {
                      default: 8,
                    }),
                    (0, k.jsxs)(ve.b, {
                      children: [
                        (0, k.jsx)(be.j, {
                          children: o[ls],
                        }),
                        (0, k.jsx)(be.j, {
                          type: "subtitle",
                          children: o[ds],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        };
        const E = (0, r.useMemo)(
          () => h.filter((e) => e.status !== xe.DN.Error),
          [h],
        );
        const M = () => {
          m(false);
          Mt()({
            resumeAuditType: w === ps.Expert ? "expert" : "ai",
          });
          if (w !== ps.Expert) {
            if (y === undefined || y !== xe.DN.New) {
              if (E.length && !x) {
                _(s, e);
                return;
              }
              if (y === xe.DN.Success) {
                g(true);
                return;
              }
              S();
            }
          } else {
            I(
              `/applicant-services/payment/${pt.lU.ResumeAudit}?resumeHash=${e}`,
            );
          }
        };
        return (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsx)(c.ElementShownAnchor, {
              className: Jt.Z.stretched,
              fn: qt(),
              type: "resumeAudit",
              resumeId: t,
              hhtmFrom: n,
              surveyProfession: i || "",
              children: (0, k.jsx)(P.z, {
                size: "small",
                mode: "secondary",
                style: "accent",
                disabled: L || R === "fetching" || y === xe.DN.New,
                onClick: () => {
                  m(true);
                  ct()({
                    type: "resumeAudit",
                    resumeId: t,
                    hhtmSource: n,
                    surveyProfession: i || "",
                  });
                },
                children: o[Kt],
              }),
            }),
            (0, k.jsx)(Bt.u, {
              actions: [
                (0, k.jsx)(
                  j.Cs7,
                  {
                    onClick: () => m(false),
                    initialColor: "secondary",
                  },
                  1,
                ),
              ],
              title: o[es],
              visible: u,
              onClose: () => m(false),
              size: "medium",
              footer: (0, k.jsx)(Vt.o, {
                type: "horizontal",
                secondaryActions: (0, k.jsx)(P.z, {
                  size: "medium",
                  style: "accent",
                  mode: "secondary",
                  onClick: () => m(false),
                  children: o[ts],
                }),
                primaryActions: (0, k.jsxs)(k.Fragment, {
                  children: [
                    (0, k.jsx)(P.z, {
                      size: "medium",
                      style: "accent",
                      mode: "secondary",
                      onClick: () => m(false),
                      children: o[ss],
                    }),
                    (0, k.jsx)(P.z, {
                      size: "medium",
                      style: "accent",
                      mode: "primary",
                      onClick: M,
                      children: o[rs],
                    }),
                  ],
                }),
              }),
              ref: N,
              children: T(),
            }),
            (0, k.jsx)($t.R, {
              header: (0, k.jsx)(Ft.N, {
                children: (0, k.jsx)(Wt.h, {
                  children: (0, k.jsx)(Zt.e, {
                    right: (0, k.jsx)(j.Cs7, {
                      initialColor: "secondary",
                      onClick: () => m(false),
                    }),
                    children: (0, k.jsx)(Ot.c, {
                      title: (0, k.jsx)(b.x, {
                        typography: "subtitle-1-semibold",
                        children: o[es],
                      }),
                    }),
                  }),
                }),
              }),
              visible: u,
              onClose: () => m(false),
              footer: (0, k.jsx)(Vt.o, {
                primaryActions: (0, k.jsx)(P.z, {
                  size: "medium",
                  style: "accent",
                  mode: "primary",
                  onClick: M,
                  children: o[rs],
                }),
              }),
              ref: N,
              children: T(),
            }),
            (0, k.jsx)(Qt.bZ, {
              title: o[ns],
              description: o[is],
              layout: "vertical",
              icon: (0, k.jsx)(j.uvJ, {}),
              buttons: (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)(P.z, {
                    mode: "primary",
                    style: "accent",
                    stretched: true,
                    onClick: () => {
                      S();
                      Et()({
                        type: "generate",
                      });
                      g(false);
                    },
                    children: o[as],
                  }),
                  (0, k.jsx)(P.z, {
                    mode: "secondary",
                    style: "accent",
                    stretched: true,
                    onClick: () => {
                      Et()({
                        type: "cancel",
                      });
                      g(false);
                    },
                    children: o[os],
                  }),
                ],
              }),
              visible: v,
              onClose: () => g(false),
            }),
          ],
        });
      };
      ys.displayName =
        "components/ResumeAIRecommendation/ResumeChooseRecommendation/ResumeChooseRecommendationModal";
      const xs = (0, v.Z)(ys);
      var vs = s(951240);
      const bs =
        "resumes.recommendations.resume_audit.pay_button_recommendation.short.v2";
      const gs = ({
        resumeHash: e,
        resumeId: t,
        trls: s,
        hhtmSource: r,
        surveyProfession: n,
      }) => {
        var o;
        const l = (0, Yt.T)(e);
        const d = (0, C.v)((e) => e.userType);
        const u = (0, vs.r)();
        const c = (0, W.xM)(true);
        const h = (0, C.v)((e) => e.hasAIHhPro);
        if (l && u) {
          if (c || h) {
            return (0, k.jsx)(k.Fragment, {
              children: (0, k.jsx)(xs, {
                resumeId: t,
                resumeHash: e,
                initialSource: xe.ZM.ApplicantResumeList,
                hhtmSource: r,
                surveyProfession: n,
              }),
            });
          } else {
            return (0, k.jsx)(P.z, {
              Element: a.SPALink,
              size: "small",
              mode: "secondary",
              style: "accent",
              target: "_blank",
              to: `/applicant-services/payment/${pt.lU.ResumeAudit}?resumeHash=${e}`,
              onClick: () => {
                var e;
                It()({
                  hhtmSource: r,
                  price:
                    (l == null || (e = l.price) === null || e === undefined
                      ? undefined
                      : e.amount) || 0,
                  resumeId: t,
                });
                m().sendEvent(
                  d,
                  "applicant_myresume_resume_audit",
                  "click_resume_audit",
                );
              },
              children: (0, fe.WU)(s[bs], {
                "{0}": (0, k.jsx)(Nt.Z, {
                  currency: l.price?.currency,
                  children:
                    (l == null || (o = l.price) === null || o === undefined
                      ? undefined
                      : o.amount) || 0,
                }),
              }),
            });
          }
        } else {
          return null;
        }
      };
      gs.displayName =
        "ResumeCard/ResumeButtons/RecommendationButton/RecommendationButton";
      const fs = (0, Q.x)(gs);
      var js = s(103741);
      var Rs = s(649936);
      const _s = "root--WURSOy5so0gdDqQv";
      const Cs = "buttons--WfgU_gx7gAZGUMPC";
      const Ss = "stretched--vGJtg3bMPZUhgCib";
      const ks = "rb.touch.error";
      const Ls = "resumeList.update";
      const ws = "myresume.publish.autoRenewal";
      const As = "myresume.publish.autoRenewal.hhPro.v2";
      const Is = ({
        trls: e,
        error: t = false,
        message: s = "",
        mode: n = "tertiary",
        hhtmSource: i,
        disabled: a = false,
        doUpdate: o,
        stretched: l = false,
        renewalTime: d = {},
        isAutoRenewalRecommended: u = false,
      }) => {
        const m = (0, re.$w)();
        const { resumeId: h, recommendationDetails: p } = (0, me.h)();
        const y = (0, C.v)(({ applicantResumesStatistics: e }) => {
          var t;
          if (
            e == null ||
            (t = e.resumes) === null ||
            t === undefined ||
            (t = t[h]) === null ||
            t === undefined
          ) {
            return undefined;
          } else {
            return t.recommendation;
          }
        });
        const x = (0, C.v)(({ stateHhPro: e }) => e) === pt.Jd.Available;
        if (x && y === Lt.VQ.EditResume) {
          return null;
        }
        const v = (0, r.useRef)(null);
        const b = (0, C.v)(({ applicantPaymentServices: e }) =>
          e.includes(pt.lU.ResumeRenewal),
        );
        const f = Boolean(d == null ? undefined : d.nearestIntervalStartTime);
        const j = (p == null ? undefined : p.surveyProfession) || "";
        const R = u && b;
        let _ = null;
        if (t) {
          _ = e[ks];
        } else if (a || f) {
          _ = s;
        }
        const S = (0, r.useCallback)(() => {
          if (!m || !R) {
            if (o) {
              if (o != null) {
                o();
              }
            }
            if (u) {
              ct()({
                hhtmSource: i,
                type: "resumeRenewal",
                resumeId: h,
                surveyProfession: j,
              });
            }
          }
        }, [o, u, m, j, h, R, i]);
        const L = (m && R) || (a && f) || (!b && u);
        let w = e[ws];
        if (x) {
          w = e[As];
        }
        return (0, k.jsxs)(c.ElementShownAnchor, {
          className: Ss,
          fn: qt(),
          type: "resumeRenewal",
          resumeId: h,
          hhtmFrom: i,
          surveyProfession: (p == null ? undefined : p.surveyProfession) || "",
          children: [
            (0, k.jsx)(P.z, {
              ref: v,
              size: "small",
              mode: n,
              style: "accent",
              onClick: S,
              "data-qa": "resume-update-button_actions",
              disabled: L,
              stretched: l,
              children: (0, k.jsxs)(k.Fragment, {
                children: [
                  R && !m ? w : e[Ls],
                  x &&
                    R &&
                    (0, k.jsxs)(k.Fragment, {
                      children: [
                        (0, k.jsx)(g.V, {
                          default: 8,
                        }),
                        (0, k.jsx)(Rs.Z, {
                          children: (0, k.jsx)(mt.tdm, {
                            initialColor:
                              n === "primary" ? "contrast" : "accent",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            }),
            _ &&
              (0, k.jsx)(js.p, {
                "data-qa": "resume-update-button-tooltip",
                placement: "right-bottom",
                activatorRef: v,
                children: _,
              }),
          ],
        });
      };
      Is.displayName = "ResumeCard/ResumeButtons/RenewalButton/RenewalButton";
      const Ns = (0, Q.x)(Is);
      const Ts = "rb.touch.error";
      const Es = "resumeList.recommendations.action.update";
      const Ps = "resumeList.recommendations.action.update.success";
      const Ms = "botUpdateResume.updateByBotButton";
      const Ds = ({
        disabled: e = false,
        doUpdate: t,
        error: s = false,
        message: n = "",
        trls: i,
        hhtmSource: o,
      }) => {
        const l = (0, r.useRef)(null);
        const [d, u] = (0, r.useState)(false);
        const {
          successUpdate: h,
          resumeId: p,
          recommendationDetails: y,
          canUpdateResumeByBot: x,
          chatBotHref: v,
        } = (0, me.h)();
        let b = null;
        if (s) {
          b = i[Ts];
        } else if (e) {
          b = n;
        }
        const g = d && e ? i[Ps] : i[Es];
        const f = (0, r.useCallback)(() => {
          m().sendEvent("applicant", "resume_renew_bot", "click");
          ct()({
            hhtmSource: o,
            type: "updateResumeByBot",
            resumeId: p,
            surveyProfession:
              (y == null ? undefined : y.surveyProfession) || "",
          });
        }, [p, y, o]);
        if (x && h) {
          return (0, k.jsx)(c.ElementShownAnchor, {
            fn: qt(),
            type: "updateResumeByBot",
            resumeId: p,
            hhtmSource: o,
            surveyProfession:
              (y == null ? undefined : y.surveyProfession) || "",
            children: (0, k.jsx)(P.z, {
              Element: a.SPALink,
              size: "small",
              mode: "secondary",
              stretched: true,
              style: "accent",
              to: v,
              onClick: f,
              "data-qa": "resume-recommendations__button_update-by-bot",
              children: i[Ms],
            }),
          });
        } else {
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(P.z, {
                ref: l,
                size: "small",
                mode: "primary",
                style: "accent",
                onClick: () => {
                  u(true);
                  if (t != null) {
                    t();
                  }
                  ct()({
                    hhtmSource: o,
                    type: "updateResume",
                    resumeId: p,
                    surveyProfession:
                      (y == null ? undefined : y.surveyProfession) || "",
                  });
                },
                "data-qa": "resume-update-button resume-update-button_actions",
                disabled: e,
                children: g,
              }),
              b &&
                (0, k.jsx)(js.p, {
                  "data-qa": "resume-update-button-tooltip",
                  placement: "right-bottom",
                  activatorRef: l,
                  children: b,
                }),
            ],
          });
        }
      };
      Ds.displayName = "ResumeCard/ResumeButtons/UpdateButton/UpdateButton";
      const Hs = (0, Q.x)(Ds);
      const Us = "resumeList.recommendations.action.edit";
      const qs = "resumes.phoneVerification.resumeToAuth.submitPhone";
      const zs = "resumeList.recommendations.action.correct";
      const Vs = "resumeList.recommendations.action.visibility";
      const Bs = "resumeList.recommendations.action.edit.hhPro.link";
      const $s = ({
        trls: e,
        resume: t,
        recommendation: s,
        recommendationDetails: r,
        onUpdate: n,
        isMobile: i,
        onTimeChanged: o = () => {},
        isAutoRenewalRecommended: l,
      }) => {
        const { hhtmSource: d } = (0, G.t)();
        const u = (0, St.U)();
        const c = (0, X.ho)(t);
        const m = (0, X.hE)(t);
        const h = (0, X.No)(t);
        const p = (0, X.Cj)(t);
        const y = (0, X.i1)(t);
        const { humanDatesRules: x, toUpdate: v, renewalTime: b } = t;
        const g = (0, C.v)(
          ({ applicantSuitableVacancyByResume: e }) => e[c] || 0,
        );
        const f =
          (0, C.v)(({ stateHhPro: e }) => e) === pt.Jd.Available &&
          s === Lt.VQ.EditResume &&
          !h;
        let R = h ? `/profile/resume?resume=${c}` : `/resume/${c}`;
        if (f) {
          s = "promoteResume";
          R = wt.Pp;
        }
        const { recommendationRef: _, sendRecommendationClickAnalytics: S } =
          (0, kt.L)((0, X.DY)(t), s, r);
        const L = () => {
          if (s === Lt.VQ.Respond) {
            ct()({
              hhtmSource: d,
              type: s,
              resumeId: m,
              surveyProfession:
                (r == null ? undefined : r.surveyProfession) || "",
            });
          } else {
            He()({
              hhtmSource: d,
              buttonName: "resume_vacancy_search_list",
              resumeId: m,
            });
          }
        };
        if (s === Lt.VQ.CorrectResume) {
          return (0, k.jsxs)("div", {
            className: _s,
            children: [
              (0, k.jsx)("div", {
                className: Cs,
                children: (0, k.jsx)(P.z, {
                  ref: _,
                  Element: a.SPALink,
                  size: "small",
                  mode: "primary",
                  style: "accent",
                  onClick: S,
                  "data-qa": "resume-status-blocked",
                  to: `/profile/resume?resume=${c}`,
                  children: e[zs],
                }),
              }),
              y &&
                (0, k.jsx)(P.z, {
                  size: "small",
                  icon: (0, k.jsx)(j.weN, {}),
                  mode: "secondary",
                  style: "negative",
                  "data-qa": "resume-delete",
                  onClick: () => {
                    u.openModal({
                      resume: t,
                      from: "resume-list",
                    });
                    He()({
                      buttonName: "resume_delete",
                      resumeId: m,
                    });
                  },
                }),
            ],
          });
        } else if (h) {
          return (0, k.jsxs)("div", {
            className: _s,
            children: [
              (0, k.jsxs)("div", {
                className: Cs,
                children: [
                  (0, k.jsx)(P.z, {
                    Element: a.SPALink,
                    ref: _,
                    size: "small",
                    mode: "primary",
                    style: "accent",
                    onClick: S,
                    "data-qa": "resume-button-edit-resume",
                    to: `/profile/resume?resume=${c}`,
                    children: e[Us],
                  }),
                  !i &&
                    (0, k.jsx)(P.z, {
                      ref: _,
                      size: "small",
                      mode: i ? "tertiary" : "secondary",
                      style: "accent",
                      Element: a.SPALink,
                      onClick: L,
                      "data-qa": `resume-recommendations__button_${s || ""}`,
                      to: `${ht.Z.vacancySearch}?resume=${c}&from=resumelist`,
                      children: (0, k.jsx)(_t, {
                        count: g,
                        isMobile: i,
                      }),
                    }),
                ],
              }),
              y &&
                (0, k.jsx)(P.z, {
                  size: "small",
                  icon: (0, k.jsx)(j.weN, {}),
                  mode: "secondary",
                  style: "negative",
                  "data-qa": "resume-delete",
                  onClick: () => {
                    u.openModal({
                      resume: t,
                      from: "resume-list",
                    });
                    He()({
                      buttonName: "resume_delete",
                      resumeId: m,
                    });
                  },
                }),
            ],
          });
        } else if (s === Lt.VQ.Respond) {
          return (0, k.jsx)("div", {
            className: _s,
            children: (0, k.jsxs)("div", {
              className: Cs,
              children: [
                (0, k.jsx)(yt.Z, {
                  mode: "primary",
                  hash: c,
                  onUpdate: n,
                  hhtmSource: d,
                  timeLeft: v.value * 1000,
                  renewalTime: b,
                  onTimeChanged: o,
                  updateInterval: p,
                  RenderComponent: Ns,
                  humanDatesRules: x,
                  isAutoRenewalRecommended: l,
                }),
                (0, k.jsx)(fs, {
                  hhtmSource: d,
                  resumeHash: c,
                  resumeId: m,
                  surveyProfession: r == null ? undefined : r.surveyProfession,
                }),
                (0, k.jsx)(P.z, {
                  ref: _,
                  Element: a.SPALink,
                  size: "small",
                  mode: i ? "tertiary" : "secondary",
                  style: "accent",
                  onClick: L,
                  "data-qa": `resume-recommendations__button_${s || ""}`,
                  to: `${ht.Z.vacancySearch}?resume=${c}&from=resumelist`,
                  children: (0, k.jsx)(_t, {
                    count: g,
                    isMobile: i,
                  }),
                }),
              ],
            }),
          });
        } else if (s === Lt.VQ.ChangeVisibility) {
          return (0, k.jsx)("div", {
            className: _s,
            children: (0, k.jsxs)("div", {
              className: Cs,
              children: [
                (0, k.jsx)(P.z, {
                  ref: _,
                  Element: a.SPALink,
                  size: "small",
                  mode: "primary",
                  style: "accent",
                  onClick: S,
                  "data-qa": `resume-recommendations__button_${s}`,
                  to: `/resume/edit/${c}/visibility`,
                  children: e[Vs],
                }),
                (0, k.jsx)(yt.Z, {
                  mode: "secondary",
                  hash: c,
                  timeLeft: v.value * 1000,
                  onUpdate: n,
                  resumeId: m,
                  hhtmSource: d,
                  renewalTime: b,
                  onTimeChanged: o,
                  RenderComponent: Ns,
                  updateInterval: p,
                  humanDatesRules: x,
                  isAutoRenewalRecommended: l,
                }),
                (0, k.jsx)(P.z, {
                  ref: _,
                  size: "small",
                  mode: i ? "tertiary" : "secondary",
                  style: "accent",
                  Element: a.SPALink,
                  onClick: L,
                  "data-qa": `resume-recommendations__button_${s || ""}`,
                  to: `${ht.Z.vacancySearch}?resume=${c}&from=resumelist`,
                  children: (0, k.jsx)(_t, {
                    count: g,
                    isMobile: i,
                  }),
                }),
              ],
            }),
          });
        } else if (s === Lt.VQ.NeedVerifiedPhone) {
          return (0, k.jsx)("div", {
            className: _s,
            children: (0, k.jsxs)("div", {
              className: Cs,
              children: [
                (0, k.jsx)(P.z, {
                  Element: a.SPALink,
                  ref: _,
                  size: "small",
                  mode: "primary",
                  style: "accent",
                  onClick: S,
                  "data-qa": "resume-phone-not-verified",
                  to: `/applicant/phone_verification?resume=${c}`,
                  children: e[qs],
                }),
                (0, k.jsx)(yt.Z, {
                  mode: "secondary",
                  hash: c,
                  timeLeft: v.value * 1000,
                  onUpdate: n,
                  resumeId: m,
                  hhtmSource: d,
                  renewalTime: b,
                  onTimeChanged: o,
                  RenderComponent: Ns,
                  updateInterval: p,
                  humanDatesRules: x,
                  isAutoRenewalRecommended: l,
                }),
                (0, k.jsx)(P.z, {
                  ref: _,
                  size: "small",
                  mode: i ? "tertiary" : "secondary",
                  style: "accent",
                  Element: a.SPALink,
                  onClick: L,
                  "data-qa": `resume-recommendations__button_${s || ""}`,
                  to: `${ht.Z.vacancySearch}?resume=${c}&from=resumelist`,
                  children: (0, k.jsx)(_t, {
                    count: g,
                    isMobile: i,
                  }),
                }),
              ],
            }),
          });
        } else if (s === Lt.VQ.OnModeration) {
          return (0, k.jsx)("div", {
            className: _s,
            children: (0, k.jsxs)("div", {
              className: Cs,
              children: [
                (0, k.jsx)(P.z, {
                  Element: a.SPALink,
                  ref: _,
                  size: "small",
                  mode: "primary",
                  style: "accent",
                  onClick: S,
                  "data-qa": "resume-button-edit-resume",
                  to: `/resume/${c}`,
                  children: e[Us],
                }),
                (0, k.jsx)(yt.Z, {
                  mode: "secondary",
                  hash: c,
                  timeLeft: v.value * 1000,
                  onUpdate: n,
                  resumeId: m,
                  renewalTime: b,
                  hhtmSource: d,
                  onTimeChanged: o,
                  RenderComponent: Ns,
                  updateInterval: p,
                  humanDatesRules: x,
                  isAutoRenewalRecommended: l,
                }),
                (0, k.jsx)(P.z, {
                  ref: _,
                  size: "small",
                  mode: i ? "tertiary" : "secondary",
                  style: "accent",
                  Element: a.SPALink,
                  onClick: L,
                  "data-qa": `resume-recommendations__button_${s || ""}`,
                  to: `${ht.Z.vacancySearch}?resume=${c}&from=resumelist`,
                  children: (0, k.jsx)(_t, {
                    count: g,
                    isMobile: i,
                  }),
                }),
              ],
            }),
          });
        } else if (s === Lt.VQ.EditResume) {
          return (0, k.jsx)("div", {
            className: _s,
            children: (0, k.jsxs)("div", {
              className: Cs,
              children: [
                (0, k.jsx)(P.z, {
                  Element: a.SPALink,
                  ref: _,
                  size: "small",
                  mode: "primary",
                  style: f ? "neutral" : "accent",
                  onClick: S,
                  "data-qa": f
                    ? "resume-button-hh-pro"
                    : "resume-button-edit-resume",
                  to: R,
                  icon: f
                    ? (0, k.jsx)(mt.tdm, {
                        initialColor: "contrast",
                      })
                    : undefined,
                  children: f ? e[Bs] : e[Us],
                }),
                (0, k.jsx)(fs, {
                  hhtmSource: d,
                  resumeHash: c,
                  resumeId: m,
                  surveyProfession: r == null ? undefined : r.surveyProfession,
                }),
                (0, k.jsx)(P.z, {
                  ref: _,
                  size: "small",
                  mode: i ? "tertiary" : "secondary",
                  style: "accent",
                  Element: a.SPALink,
                  onClick: L,
                  "data-qa": `resume-recommendations__button_${s || ""}`,
                  to: `${ht.Z.vacancySearch}?resume=${c}&from=resumelist`,
                  children: (0, k.jsx)(_t, {
                    count: g,
                    isMobile: i,
                  }),
                }),
              ],
            }),
          });
        } else {
          return (0, k.jsx)("div", {
            className: _s,
            children: (0, k.jsxs)("div", {
              className: Cs,
              children: [
                s === Lt.VQ.UpdateResume &&
                  (0, k.jsx)(yt.Z, {
                    hash: c,
                    timeLeft: v.value * 1000,
                    onUpdate: n,
                    renewalTime: b,
                    hhtmSource: d,
                    onTimeChanged: o,
                    updateInterval: p,
                    humanDatesRules: x,
                    RenderComponent: Hs,
                  }),
                (0, k.jsx)(fs, {
                  hhtmSource: d,
                  resumeHash: c,
                  resumeId: m,
                  surveyProfession: r == null ? undefined : r.surveyProfession,
                }),
                (0, k.jsx)(P.z, {
                  ref: _,
                  size: "small",
                  mode: i ? "tertiary" : "secondary",
                  style: "accent",
                  Element: a.SPALink,
                  onClick: L,
                  "data-qa": `resume-recommendations__button_${s || ""}`,
                  to: `${ht.Z.vacancySearch}?resume=${c}&from=resumelist`,
                  children: (0, k.jsx)(_t, {
                    count: g,
                    isMobile: i,
                  }),
                }),
              ],
            }),
          });
        }
      };
      $s.displayName = "ResumeCard/ResumeButtons/index/ResumeButtons";
      const Fs = (0, Q.x)($s);
      var Ws = s(3797);
      var Zs = s(304991);
      var Os = s.n(Zs);
      var Qs = s(777349);
      var Xs = s(845942);
      var Gs = s(842953);
      const Ys = "resumes.recommendations.resume_audit.title";
      const Js = "resumes.recommendations.resume_audit.pay_button";
      const Ks = "resumes.recommendations.resume_audit.ready_button";
      const er = "resumes.recommendations.resume_audit.title.finished";
      const tr = "resumes.recommendations.resume_audit.description.1";
      const sr = "resumes.recommendations.resume_audit.description.3";
      const rr = ({ audit: e, resumeHash: t, isMobile: s, trls: n }) => {
        const i = (0, C.v)((e) => e.userType);
        const a = (0, r.useCallback)(() => {
          m().sendEvent(
            i,
            "applicant_myresume_resume_audit",
            "click_resume_audit",
          );
        }, [i]);
        if (!e) {
          return null;
        }
        const o = e.order;
        if (!o) {
          return null;
        }
        const d = (o == null ? undefined : o.status) === pt.nu.Finished;
        const u = (o == null ? undefined : o.status) === pt.nu.Waiting;
        return (0, k.jsxs)(l.Z, {
          stretched: true,
          style: "secondary",
          padding: 16,
          borderRadius: 16,
          "data-qa": "resume-recommendation-card",
          children: [
            (0, k.jsx)(ve.b, {
              right: (() => {
                if (
                  o == null ||
                  !o.status ||
                  (o == null ? undefined : o.status) !== pt.nu.Waiting
                ) {
                  if (d) {
                    return (0, k.jsx)(Gs.r, {
                      typography: s ? "label-3-regular" : "label-2-regular",
                      href: `/applicant-services/${wt.dw}/order/${o.orderCode}`,
                      "data-qa": "resume-recommendation-button-audit",
                      children: n[Ks],
                    });
                  } else {
                    return (0, k.jsx)(Gs.r, {
                      href: `/applicant-services/payment/${pt.lU.ResumeAudit}?resumeHash=${t}`,
                      target: "_blank",
                      typography: s ? "label-3-regular" : "label-2-regular",
                      "data-qa": "resume-recommendation-button-audit",
                      onClick: () => {
                        if (!o) {
                          a();
                        }
                      },
                      children: (0, fe.WU)(n[Js], {
                        "{0}": (0, k.jsx)(Nt.Z, {
                          currency: e.price.currency,
                          children: e.price.amount,
                        }),
                      }),
                    });
                  }
                }
              })(),
              children: (0, k.jsx)(b.x, {
                "data-qa": "resume-recommendation-title-audit",
                children: d ? n[er] : n[Ys],
              }),
            }),
            o
              ? u
                ? (0, k.jsx)(b.x, {
                    style: "secondary",
                    typography: "label-3-regular",
                    "data-qa": "resume-recommendation-text-audit",
                    children: (0, fe.WU)(n[sr], {
                      "{0}": (0, k.jsx)("span", {
                        suppressHydrationWarning: true,
                        children: (0, Xs.p6)(
                          o.dueDate || (0, Qs.Z)(new Date(), 2),
                          "d MMMM",
                        ),
                      }),
                    }),
                  })
                : null
              : (0, k.jsx)(b.x, {
                  style: "secondary",
                  typography: "label-3-regular",
                  "data-qa": "resume-recommendation-text-audit",
                  children: n[tr],
                }),
          ],
        });
      };
      rr.displayName =
        "ResumeCard/ResumeRecommendations/ResumeAudit/ResumeAudit";
      const nr = (0, Q.x)(rr);
      var ir = s(253617);
      const ar = {
        [Lt.VQ.EditResume]: "/mentors?from=resume_recommendation",
        [Lt.VQ.UpdateResume]:
          "/applicant-services/hhpro?rte=true&from=resume_recommendation",
        [Lt.VQ.ChangeVisibility]:
          "/applicant-services/hhpro?rte=true&from=resume_recommendation",
      };
      const or = {
        [Lt.VQ.EditResume]: pt.lU.CompleteResume,
        [Lt.VQ.UpdateResume]: pt.lU.ResumeRenewal,
        [Lt.VQ.ChangeVisibility]: pt.lU.ResumeTargetEmployer,
      };
      const lr = {
        [Lt.VQ.EditResume]: "editResumeMarketplace",
        [Lt.VQ.UpdateResume]: "updateResumeHHPro",
        [Lt.VQ.ChangeVisibility]: "changeVisibilityWantWorkHere",
      };
      const dr = {
        respond: "resumeList.recommendations.text.response",
        editResume: "resumeList.recommendations.text.edit",
        "editResume.withLink":
          "resumeList.recommendations.text.edit.applicantRecommendations.v2",
        "editResume.withLink.Link":
          "resumeList.recommendations.text.edit.applicantRecommendations.link.v2",
        updateResume: "resumeList.recommendations.text.update",
        "updateResume.withLink":
          "resumeList.recommendations.text.update.applicantRecommendations",
        "updateResume.withLink.Link":
          "resumeList.recommendations.text.update.applicantRecommendations.link",
        changeVisibility: "resumeList.recommendations.text.visibility",
        "changeVisibility.withLink":
          "resumeList.recommendations.text.visibility.applicantRecommendations.v2",
        "changeVisibility.withLink.Link":
          "resumeList.recommendations.text.visibility.applicantRecommendations.link.v2",
        correctResume: "resumeList.recommendations.text.blocked.v2",
        onModeration: "resumeList.recommendations.text.onModeration.v2",
        needVerifiedPhone: "resumeList.recommendations.text.verification.v2",
        needSkillsSurveyBase:
          "resumeList.recommendations.text.skillsSurvey.base",
      };
      const ur = ({
        trls: e,
        recommendation: t,
        recommendationDetails: s,
        hhtmSource: r,
        resumeId: n,
      }) => {
        if (!t) {
          return null;
        }
        const i = ((e) => {
          const t = (0, C.v)((e) => e.applicantPaymentServices);
          if (Os()(ar, e) && t.includes(or[e])) {
            return ar[e];
          } else {
            return null;
          }
        })(t);
        const a = ((e) => (Os()(lr, e) ? lr[e] : null))(t);
        if (Os()(ar, t) && i) {
          return (0, k.jsx)(c.ElementShownAnchor, {
            fn: qt(),
            type: a,
            resumeId: parseInt(n, 10),
            hhtmSource: r,
            surveyProfession:
              (s == null ? undefined : s.surveyProfession) || "",
            children: (0, k.jsx)(ir.A, {
              useSpan: true,
              children: (0, fe.WU)(e[dr[`${t}.withLink`]], {
                "{0}": (0, k.jsx)(Gs.r, {
                  inline: true,
                  href: i,
                  typography: "label-3-regular",
                  "data-qa": `resume-recommendation-link-${t ?? "default"}`,
                  onClick: () => {
                    ct()({
                      hhtmSource: r,
                      type: a,
                      resumeId: parseInt(n, 10),
                      surveyProfession:
                        (s == null ? undefined : s.surveyProfession) || "",
                    });
                  },
                  children: e[dr[`${t}.withLink.Link`]],
                }),
              }),
            }),
          });
        } else {
          return (0, k.jsx)(c.ElementShownAnchor, {
            fn: qt(),
            type: a,
            resumeId: parseInt(n, 10),
            hhtmSource: r,
            surveyProfession:
              (s == null ? undefined : s.surveyProfession) || "",
            children: (0, k.jsx)(ir.A, {
              useSpan: true,
              children: e[dr[t]],
            }),
          });
        }
      };
      ur.displayName =
        "ResumeCard/ResumeRecommendations/ResumeRecommendationText/ResumeRecommendationText";
      const cr = (0, Q.x)(ur);
      const mr = "botUpdateResume.successUpdateMessage";
      const hr = "resumeList.recommendations.title.editResume";
      const pr = {
        onModeration: "resumeList.recommendations.title.onModeration",
        correctResume: "resumeList.recommendations.title.correctResume",
        changeVisibility: "resumeList.recommendations.title.changeVisibility",
        needVerifiedPhone: "resumeList.recommendations.title.needVerifiedPhone",
      };
      const yr = [Lt.VQ.CorrectResume, Lt.VQ.OnModeration, Lt.VQ.EditResume];
      const xr = {
        onModeration: (0, k.jsx)(j.hG$, {}),
        correctResume: (0, k.jsx)(j.i8i, {}),
        changeVisibility: (0, k.jsx)(j.iHY, {}),
      };
      const vr = ({
        isMobile: e,
        resume: t,
        recommendation: s,
        recommendationDetails: r,
        trls: n,
        hhtmSource: i,
      }) => {
        const a = (0, X.DY)(t);
        const o = (0, X.ho)(t);
        const d = (0, X.No)(t);
        const u = (0, Yt.T)(o);
        const c = (0, vs.r)();
        const { successUpdate: m, canUpdateResumeByBot: h } = (0, me.h)();
        if (s && yr.includes(s)) {
          return (0, k.jsx)(l.Z, {
            style: s === "correctResume" ? "negative-secondary" : "secondary",
            stretched: true,
            padding: 16,
            borderRadius: 16,
            "data-qa": `resume-recommendation-card-${s ?? "default"}`,
            children: d
              ? (0, k.jsxs)(ve.b, {
                  align: "top",
                  left: e ? undefined : (0, k.jsx)(j.Z_p, {}),
                  right: e ? (0, k.jsx)(j.Z_p, {}) : undefined,
                  children: [
                    (0, k.jsx)(be.j, {
                      "data-qa": "resume-recommendation-title-unpubslished",
                      children: n[hr],
                    }),
                    (0, k.jsx)(f.X, {
                      default: 4,
                    }),
                    (0, k.jsx)(b.x, {
                      style: "secondary",
                      typography: "label-3-regular",
                      suppressHydrationWarning: true,
                      "data-qa": "resume-recommendation-text-unpubslished",
                      children: (0, k.jsx)(cr, {
                        resumeId: a,
                        hhtmSource: i,
                        recommendation: s,
                        recommendationDetails: r,
                      }),
                    }),
                  ],
                })
              : (0, k.jsxs)(ve.b, {
                  align: "top",
                  left: !e && Os()(xr, s) ? xr[s] : undefined,
                  right: e && Os()(xr, s) ? xr[s] : undefined,
                  children: [
                    Os()(pr, s) &&
                      (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsx)(be.j, {
                            "data-qa": `resume-recommendation-title-${s ?? "default"}`,
                            children: n[pr[s]],
                          }),
                          (0, k.jsx)(f.X, {
                            default: 4,
                          }),
                        ],
                      }),
                    (0, k.jsx)(b.x, {
                      style: "secondary",
                      typography: "label-3-regular",
                      suppressHydrationWarning: true,
                      "data-qa": `resume-recommendation-text-${s ?? "default"}`,
                      children: (0, k.jsx)(cr, {
                        resumeId: a,
                        hhtmSource: i,
                        recommendation: s,
                        recommendationDetails: r,
                      }),
                    }),
                  ],
                }),
          });
        } else if ((u != null && u.order) || !s || !c) {
          return (0, k.jsx)(nr, {
            audit: u,
            resumeHash: o,
            isMobile: e,
          });
        } else {
          return (0, k.jsx)(l.Z, {
            style: s === "correctResume" ? "negative-secondary" : "secondary",
            stretched: true,
            padding: 16,
            borderRadius: 16,
            "data-qa": `resume-recommendation-card-${s ?? "default"}`,
            children: (0, k.jsxs)(ve.b, {
              align: "top",
              left: !e && Os()(xr, s) ? xr[s] : undefined,
              right: e && Os()(xr, s) ? xr[s] : undefined,
              children: [
                Os()(pr, s) &&
                  (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsx)(be.j, {
                        "data-qa": `resume-recommendation-title-${s ?? "default"}`,
                        children: n[pr[s]],
                      }),
                      (0, k.jsx)(f.X, {
                        default: 4,
                      }),
                    ],
                  }),
                h && m
                  ? (0, k.jsx)(b.x, {
                      style: "secondary",
                      typography: "label-3-regular",
                      suppressHydrationWarning: true,
                      "data-qa": `resume-recommendation-text-${s ?? "default"}`,
                      children: (0, fe.WU)(n[mr], {
                        "{0}": (0, Ws.Z)(new Date(), "HH:mm"),
                      }),
                    })
                  : (0, k.jsx)(b.x, {
                      style: "secondary",
                      typography: "label-3-regular",
                      suppressHydrationWarning: true,
                      "data-qa": `resume-recommendation-text-${s ?? "default"}`,
                      children: (0, k.jsx)(cr, {
                        resumeId: a,
                        hhtmSource: i,
                        recommendation: s,
                        recommendationDetails: r,
                      }),
                    }),
              ],
            }),
          });
        }
      };
      vr.displayName =
        "ResumeCard/ResumeRecommendations/index/ResumeRecommendations";
      const br = (0, Q.x)(vr);
      var gr = s(442986);
      var fr = s.n(gr);
      var jr = s(848484);
      var Rr = s(935192);
      const _r = "label--sjhr8Tdf8o4I5Jfa";
      const Cr = "item-wrapper--wa_qPDsV48QU6yXb";
      const Sr = "item--Wsj4iue1bKoiL2Ft";
      const kr = "item-text--Y21ptEAhZzMPx9cU";
      const Lr = "card--NL0OSStqSkrgnntL";
      const wr = "list--fS5gwpnI1N05oIOu";
      const Ar = ({ link: e, children: t, "data-qa": s, onClick: r }) =>
        e
          ? (0, k.jsx)(a.SPALink, {
              to: e,
              onClick: r,
              "data-qa": s,
              className: Cr,
              children: t,
            })
          : (0, k.jsx)("div", {
              className: Cr,
              "data-qa": s,
              onClick: r,
              children: t,
            });
      Ar.displayName =
        "ResumeCard/ResumeStatistics/ResumeStatisticsItemWrapper/ResumeStatisticsItemWrapper";
      const Ir = {
        emptyNum: "resumeList.statistics.emptyNum",
        "searchShows.one": "resumeList.statistics.searchShows.one",
        "searchShows.some": "resumeList.statistics.searchShows.some",
        "searchShows.many": "resumeList.statistics.searchShows.many",
        "views.one": "resumeList.statistics.views.one",
        "views.some": "resumeList.statistics.views.some",
        "views.many": "resumeList.statistics.views.many",
        "invitations.one": "resumeList.statistics.invitations.one",
        "invitations.some": "resumeList.statistics.invitations.some",
        "invitations.many": "resumeList.statistics.invitations.many",
        week: "resumeList.statistics.week",
        comparison: "resumeList.statistics.comparison",
        comparisonPositive: "resumeList.statistics.comparison.positive",
        comparisonNegative: "resumeList.statistics.comparison.negative",
        empty: "resumeList.statistics.empty",
        comparisonEqual: "resumeList.statistics.comparisonEqual",
        views: "resumeList.statistics.views.label",
        searchShows: "resumeList.statistics.searchShows.label",
        invitations: "resumeList.statistics.invitations.label",
      };
      const Nr = {
        views: "count-new-views",
        invitations: "new-invitations",
        searchShows: "search-shows",
      };
      const Tr = ({
        type: e,
        link: t,
        count: s = 0,
        countNew: r = 0,
        trls: n,
        onClick: i,
      }) => {
        if (s === undefined) {
          return null;
        }
        const a = e === "searchShows" ? "primary" : "accent";
        return (0, k.jsx)(Ar, {
          link: t,
          "data-qa": Nr[e],
          onClick: () => {
            if (i != null) {
              i();
            }
          },
          children: (0, k.jsxs)("div", {
            className: Sr,
            children: [
              (0, k.jsx)(b.x, {
                typography: "label-3-regular",
                style: a,
                children: (0, k.jsx)("div", {
                  className: kr,
                  children: n[Ir[e]],
                }),
              }),
              (0, k.jsxs)(Rr.q, {
                default: 4,
                children: [
                  (0, k.jsx)(b.x, {
                    typography: "label-2-regular",
                    style: a,
                    children: s,
                  }),
                  !!r &&
                    (0, k.jsxs)(b.x, {
                      style: "positive",
                      typography: "label-2-regular",
                      children: ["+ ", r],
                    }),
                ],
              }),
            ],
          }),
        });
      };
      Tr.displayName =
        "ResumeCard/ResumeStatistics/ResumeStatisticsItem/ResumeStatisticsItem";
      const Er = (0, Q.x)(Tr);
      const Pr = "resumeList.statistics.text.title";
      const Mr = ({
        trls: e,
        hash: t,
        isMobile: s,
        resumeId: n,
        statistics: i,
        hhtmSource: a,
      }) => {
        const o = (0, r.useCallback)(() => {
          fr()({
            hhtmSource: a,
            buttonName: "resume_view_history",
            resumeId: n,
          });
        }, [n, a]);
        const d = (0, r.useCallback)(() => {
          fr()({
            hhtmSource: a,
            buttonName: "resume_invitations",
            resumeId: n,
          });
        }, [n, a]);
        if (i) {
          return (0, k.jsxs)("div", {
            children: [
              s &&
                (0, k.jsxs)("div", {
                  className: _r,
                  children: [
                    (0, k.jsx)(b.x, {
                      typography: "label-2-regular",
                      children: e[Pr],
                    }),
                    (0, k.jsx)(f.X, {
                      default: 12,
                    }),
                  ],
                }),
              (0, k.jsx)(l.Z, {
                borderWidth: "default",
                stretched: true,
                padding: 16,
                borderRadius: s ? 16 : 12,
                children: (0, k.jsxs)("div", {
                  className: Lr,
                  children: [
                    !s &&
                      (0, k.jsx)(b.x, {
                        typography: "label-2-regular",
                        children: e[Pr],
                      }),
                    (0, k.jsxs)("div", {
                      className: wr,
                      children: [
                        (0, k.jsx)(Er, {
                          type: "searchShows",
                          ...i.searchShows,
                        }),
                        (0, k.jsx)(jr.i, {
                          mode: "vertical",
                          length: s ? 50 : 22,
                        }),
                        (0, k.jsx)(Er, {
                          type: "views",
                          link: `/applicant/resumeview/history?resumeHash=${t}`,
                          onClick: o,
                          ...i.views,
                        }),
                        (0, k.jsx)(jr.i, {
                          mode: "vertical",
                          length: s ? 50 : 22,
                        }),
                        (0, k.jsx)(Er, {
                          type: "invitations",
                          link: "/applicant/negotiations?state=INVITATION",
                          onClick: d,
                          ...i.invitations,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        } else {
          return null;
        }
      };
      Mr.displayName = "ResumeCard/ResumeStatistics/index/ResumeStatistics";
      const Dr = (0, Q.x)(Mr);
      var Hr = s(557558);
      const Ur = "header-wrapper--w2Tdq6njRA8HE8jg";
      const qr = "padding--FtmtuITfjFc0ftUx";
      const zr = "footer--yoMmyf1hx1wJNT_6";
      const Vr = "footer-buttons--pLLSXTSeNtU5IxYT";
      const Br = "resume.title.empty";
      const $r = ({ resume: e, trls: t, position: s }) => {
        const { isGtM: c } = (0, o.G)();
        const { hhtmSource: m } = (0, G.t)();
        const h = (0, X.DY)(e);
        const p = (0, X.hE)(e);
        const y = (0, X.kn)(e);
        const x = (0, X.ho)(e);
        const v = (0, X.No)(e);
        const b = (0, X.F_)(e);
        const g = (0, X.LY)(e);
        const f = v ? `/profile/resume?resume=${x}` : `/resume/${x}`;
        const {
          updated: j,
          successUpdate: R,
          currentTimeLeft: _,
          timeUntilUpdate: S,
          setkaAlertVisible: L,
          isAutoRenewalRecommended: w,
          onUpdate: A,
          onTimeChanged: I,
        } = ((e) => {
          const t = (0, K.useDispatch)();
          const s = (0, re.Xl)();
          const n = (0, se.W)();
          const i = (0, C.v)(ae.so);
          const a = (0, C.v)(ne.Nx);
          const o = (0, C.v)(ne._b);
          const l = (0, X.ho)(e);
          const d = (0, X.U2)(e);
          const u = (0, X.Cj)(e);
          const { toUpdate: c, renewalTime: m, professionalRole: h } = e;
          const p = m == null ? undefined : m.nearestIntervalStartTime;
          const [y, x] = (0, r.useState)(null);
          const [v, b] = (0, r.useState)(null);
          const [g, f] = (0, r.useState)(c.value * 1000);
          const [j, R] = (0, r.useState)(c.value > 0 && !p);
          const [_, S] = (0, r.useState)(false);
          const [k, L] = (0, r.useState)(false);
          (0, r.useEffect)(() => {
            x(d);
            b(new Date().getTime() + c.value * 1000);
          }, [d, c.value]);
          const w = (0, r.useCallback)(
            (e) => {
              x(e);
              t(
                (0, ie.ge)({
                  hash: l,
                  value: u / 1000,
                }),
              );
              R(!p);
              te()();
              if (s) {
                n("B2C_RESUME_UPDATE");
              }
              (0, oe.T9)(i, a, h)
                .then((e) => {
                  if (
                    e &&
                    (0, ne.vO)(o, "web_setka_after_resume_update_v2", t)
                  ) {
                    (0, oe.gE)(a);
                    t((0, le.l_)(l));
                    S(true);
                  }
                })
                .catch(() =>
                  console.error(
                    "Ошибка в получении информации о промоакции сетки",
                  ),
                )
                .finally(() => {
                  L(true);
                });
            },
            [i, s, a, t, l, o, h, n, u, p],
          );
          const A = (0, r.useCallback)((e) => {
            f(e);
            if (e === 0) {
              R(false);
            }
          }, []);
          return {
            updated: y,
            successUpdate: k,
            currentTimeLeft: g,
            timeUntilUpdate: v,
            setkaAlertVisible: _,
            isAutoRenewalRecommended: j,
            onUpdate: w,
            onTimeChanged: A,
          };
        })(e);
        const N = (0, Y.N)(e);
        const { title: T, renewalTime: P } = e;
        const M = T[0] ? T[0].string : t[Br];
        const D = P == null ? undefined : P.nearestIntervalStartTime;
        const {
          recommendation: H,
          recommendationDetails: U,
          statistics: q,
        } = (0, C.v)((0, J.F5)(h)) ?? {};
        const z = (0, C.v)((e) => e.isAutoresponseExp);
        const V = (0, W.xM)(!b);
        const B = (0, W.Jd)(p);
        const Q = (0, r.useCallback)(() => {
          i()({
            hhtmSource: m,
            position: s,
            resumeId: String(p),
            status: (0, Hr.n)(g),
          });
        }, [m, p, s, g]);
        if (N) {
          return (0, k.jsx)(Me, {
            title: M,
            resume: e,
            updated: j,
            isMobile: !c,
            finished: !v,
            timeUntilUpdate: S,
            currentTimeLeft: _,
            nearestIntervalStartTime: D,
          });
        } else {
          return (0, k.jsx)(ye, {
            resume: e,
            successUpdate: R,
            setkaAlertVisible: L,
            recommendationDetails: U,
            children: (0, k.jsx)(O.$, {
              children: (0, k.jsx)(l.Z, {
                borderWidth: "default",
                stretched: true,
                borderRadius: 24,
                "data-qa": "resume" + (y ? " resume-highlighted" : ""),
                "data-qa-id": p,
                "data-qa-title": M,
                children: (0, k.jsxs)(d.z, {
                  default: 16,
                  children: [
                    (0, k.jsxs)("div", {
                      className: Ur,
                      children: [
                        (0, k.jsx)(l.Z, {
                          to: f,
                          "data-qa": `resume-card-link-${x}`,
                          Element: a.SPALink,
                          stretched: true,
                          borderRadius: 24,
                          onClick: Q,
                          paddingTop: 24,
                          paddingLeft: 24,
                          paddingRight: 24,
                          children: (0, k.jsx)(Ie, {
                            title: M,
                            resume: e,
                            updated: j,
                            isMobile: !c,
                            finished: !v,
                            currentTimeLeft: _,
                            timeUntilUpdate: S,
                            nearestIntervalStartTime: D,
                          }),
                        }),
                        z &&
                          c &&
                          (0, k.jsx)(l.Z, {
                            paddingTop: 24,
                            paddingLeft: 24,
                            paddingRight: 24,
                            children: (0, k.jsx)(E, {
                              resume: e,
                            }),
                          }),
                        (0, k.jsx)(dt, {
                          resume: e,
                          recommendation: H,
                        }),
                      ],
                    }),
                    (!b || (z && !c)) &&
                      (0, k.jsxs)(d.z, {
                        default: 12,
                        children: [
                          !b &&
                            (0, k.jsx)("div", {
                              className: qr,
                              children: (0, k.jsx)(Dr, {
                                hash: x,
                                isMobile: !c,
                                resumeId: p,
                                hhtmSource: m,
                                statistics: q,
                              }),
                            }),
                          z &&
                            !c &&
                            (0, k.jsx)("div", {
                              className: qr,
                              children: (0, k.jsx)($, {
                                resume: e,
                              }),
                            }),
                        ],
                      }),
                    (0, k.jsxs)("div", {
                      className: zr,
                      children: [
                        (0, k.jsx)(br, {
                          resume: e,
                          isMobile: !c,
                          hhtmSource: m,
                          recommendation: H,
                          recommendationDetails: U,
                        }),
                        (V || B) &&
                          (0, k.jsx)(k.Fragment, {
                            children: (0, k.jsx)(F.g, {
                              resumeId: p,
                              resumeHash: x,
                              initialSource: xe.ZM.ApplicantResumeList,
                            }),
                          }),
                        (0, k.jsx)("div", {
                          className: Vr,
                          children: (0, k.jsx)(Fs, {
                            resume: e,
                            isMobile: !c,
                            onUpdate: A,
                            onTimeChanged: I,
                            recommendation: H,
                            recommendationDetails: U,
                            isAutoRenewalRecommended: w,
                          }),
                        }),
                        (0, k.jsx)(u.o, {}),
                        (0, k.jsx)(Z.F, {}),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }
      };
      $r.displayName = "ApplicantResumes/ResumeCard/index/ResumeCard";
      const Fr = (0, Q.x)($r);
    },
    248339: function (e, t, s) {
      s.d(t, {
        P: () => o,
      });
      var r = s(394280);
      var n = s(594948);
      var i = s(753921);
      var a = s(343856);
      const o = ({ children: e }) => {
        const t = (0, n.v)((e) => e.isAutoresponseExp);
        const s = (0, r.useMemo)(() => (t ? i.W : r.Fragment), [t]);
        return (0, a.jsx)(s, {
          children: e,
        });
      };
      o.displayName =
        "components/Autoresponse/AutoresponseExpWrapper/AutoresponseExpWrapper";
    },
    524237: function (e, t, s) {
      s.d(t, {
        Z: () => m,
      });
      var r = s(428909);
      var n = s.n(r);
      var i = s(149020);
      var a = s(867728);
      var o = s(599998);
      var l = s(594948);
      var d = s(343856);
      const u = {
        "error.400": "error.400.message",
        "error.403": "error.403.message",
        "error.404": "error.404.message",
        "error.500": "error.500.tryagain",
        "error.599": "error.599.tryagain",
        "error.default": "error.500.tryagain",
      };
      const c = ({ children: e, trls: t }) => {
        const s = (0, l.v)(({ errorCode: e }) => e);
        if (s) {
          const e = `error.${s}`;
          const r = t[u[e in u ? e : "error.default"]];
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(a.yG, {
                children: (0, d.jsx)(a.V1, {
                  children: r,
                }),
              }),
              (0, d.jsx)(i.H, {
                children: (0, d.jsx)(n(), {
                  xs: "4",
                  s: "8",
                  m: "12",
                  l: "16",
                  children: r,
                }),
              }),
            ],
          });
        }
        return (0, d.jsx)(d.Fragment, {
          children: e,
        });
      };
      c.displayName = "components/PageErrorWrapper/index/PageErrorWrapper";
      const m = (0, o.x)(c);
    },
    513464: function (e, t, s) {
      s.d(t, {
        Jd: () => u,
        Te: () => a,
        hf: () => d,
        xM: () => l,
      });
      var r = s(730989);
      var n = s(594948);
      var i = s(730364);
      const a = "resume_ai_recomendation_show";
      const o = () =>
        (0, n.v)(({ applicantPaymentServices: e }) => e.includes(i.dw.HhPro));
      const l = (e) => {
        const t = o();
        const s = (0, n.v)((e) => e.hhProActiveSubscription);
        const i = (0, n.v)((e) => e.hasAIHhPro);
        const a = (!s || i) && e && t;
        return (0, r.ZP)("hhpro_ai_resume_audit_v2", a, a);
      };
      const d = () => {
        const e = o();
        const t = (0, n.v)((e) => e.applicantResumesAiAudit);
        const s = (0, n.v)((e) => e.hhProActiveSubscription);
        const i = (0, n.v)((e) => e.infoTip.name === a) && !s && !t.length && e;
        return (0, r.ZP)("hhpro_ai_resume_audit_v2", i, i);
      };
      const u = (e) => {
        const t = o();
        return (
          !!(0, n.v)((e) => e.applicantResumesAiAudit).find(
            (t) => t.resumeId === e,
          ) && t
        );
      };
    },
    928628: function (e, t, s) {
      s.d(t, {
        g: () => O,
      });
      var r = s(394280);
      var n = s(791256);
      var i = s(467929);
      var a = s.n(i);
      var o = s(431633);
      var l = s.n(o);
      var d = s(491606);
      var u = s(136361);
      var c = s(170953);
      var m = s(871824);
      var h = s(295243);
      var p = s(594948);
      var y = s(435265);
      var x = s(36074);
      var v = s(842953);
      var b = s(626462);
      var g = s(15791);
      var f = s(922366);
      var j = s(118450);
      var R = s(674070);
      var _ = s(599998);
      var C = s(626017);
      var S = s(343856);
      const k = {
        default: {
          title: "resumeList.resumeAiRecommendation.status.default.title",
          subtitle: "resumeList.resumeAiRecommendation.status.default.subtitle",
        },
        [y.DN.New]: {
          title: "resumeList.resumeAiRecommendation.status.new.title",
          subtitle: "resumeList.resumeAiRecommendation.status.new.subtitle",
        },
        [y.DN.Success]: {
          title: "resumeList.resumeAiRecommendation.status.success.title",
          subtitle: "resumeList.resumeAiRecommendation.status.success.subtitle",
        },
        [y.DN.Error]: {
          title: "resumeList.resumeAiRecommendation.status.error.title",
          subtitle: "resumeList.resumeAiRecommendation.status.error.subtitle",
        },
        tryAgain: "resumeList.resumeAiRecommendation.status.error.link.text",
      };
      const L = ({ status: e, isLight: t, onClick: s, trls: r }) => {
        const n = e ? r[k[e].title] : r[k.default.title];
        const i = e ? r[k[e].subtitle] : r[k.default.subtitle];
        const { isMobile: a } = (0, x.G)();
        const o = a || t;
        return (0, S.jsx)(S.Fragment, {
          children: (0, S.jsxs)(u.Z, {
            stretched: true,
            style: t ? "primary" : "secondary",
            padding: t ? 24 : 16,
            borderRadius: t ? 24 : 12,
            onClick: s,
            borderWidth: t ? "default" : "none",
            children: [
              (0, S.jsxs)(b.b, {
                align: o ? "top" : "center",
                right: (() => {
                  if (e !== y.DN.New) {
                    if (e === y.DN.Error) {
                      if (o) {
                        return undefined;
                      } else {
                        return (0, S.jsx)(v.r, {
                          Element: "button",
                          typography: "subtitle-2-semibold",
                          onClick: s,
                          children: r[k.tryAgain],
                        });
                      }
                    } else {
                      return (0, S.jsx)(R.a2Q, {});
                    }
                  }
                })(),
                left:
                  e === y.DN.Error
                    ? (0, S.jsx)(R.otX, {})
                    : (0, S.jsx)(R.XFL, {
                        initialColor: "special",
                      }),
                children: [
                  (0, S.jsx)(g.j, {
                    children: n,
                  }),
                  (0, S.jsx)(g.j, {
                    type: "subtitle",
                    children: i,
                  }),
                ],
              }),
              !o &&
                e === y.DN.Success &&
                (0, S.jsx)("div", {
                  className: C.Z.successImage,
                }),
              o &&
                e === y.DN.Error &&
                (0, S.jsxs)(S.Fragment, {
                  children: [
                    (0, S.jsx)(f.X, {
                      default: t ? 24 : 16,
                    }),
                    (0, S.jsx)(j.z, {
                      size: "small",
                      stretched: true,
                      style: t ? "neutral" : "constant",
                      mode: t ? "secondary" : "primary",
                      onClick: s,
                      children: r[k.tryAgain],
                    }),
                  ],
                }),
            ],
          }),
        });
      };
      L.displayName =
        "components/ResumeAIRecommendation/ResumeAIRecommendationBanner/ResumeAIRecommendationBanner";
      const w = (0, _.x)(L);
      var A = s(26429);
      var I = s.n(A);
      var N = s(28537);
      var T = s(859716);
      var E = s(640569);
      var P = s(105160);
      var M = s(122060);
      var D = s(559123);
      var H = s(454386);
      var U = s(555498);
      const q = s.p + "static/images/modal-header__min_ed5a89930681ba85.webp";
      const z = "resumeList.resumeAiRecommendation.modal.title";
      const V = "resumeList.resumeAiRecommendation.modal.subtitle";
      const B = "resumeList.resumeAiRecommendation.modal.button.text";
      const $ = "resumeList.resumeAiRecommendation.modal.about.text";
      const F = "resumeList.resumeAiRecommendation.modal.about.link";
      const W = ({ resumeId: e, visible: t, setVisible: s, trls: r }) => {
        const n = (0, N.l)(q);
        const { isMobile: i } = (0, x.G)();
        const { fetchAIGenerate: a } = (0, m.y)({
          resumeId: e,
        });
        const o = () =>
          (0, S.jsxs)("div", {
            className: C.Z.modalContent,
            children: [
              i &&
                (0, S.jsx)("div", {
                  className: C.Z.modalImage,
                }),
              (0, S.jsx)(f.X, {
                default: 16,
                gteM: 0,
              }),
              (0, S.jsx)(P.x, {
                typography: i ? "title-5-semibold" : "title-4-semibold",
                children: r[z],
              }),
              (0, S.jsx)(f.X, {
                default: 8,
              }),
              (0, S.jsx)(P.x, {
                typography: "paragraph-2-regular",
                style: "secondary",
                children: r[V],
              }),
              (0, S.jsx)(f.X, {
                default: 8,
                gteS: 12,
              }),
            ],
          });
        const l = () => {
          a();
          s(false);
          I()();
        };
        const u = () =>
          (0, S.jsx)(M.o, {
            type: "vertical",
            secondaryActions: (0, S.jsx)(P.x, {
              typography: "label-3-regular",
              style: "secondary",
              children: (0, T.WU)(r[$], {
                "{link}": (0, S.jsx)(v.r, {
                  inline: true,
                  Element: d.SPALink,
                  to: "/applicant-services/hhpro",
                  style: "neutral",
                  target: "_blank",
                  typography: "label-3-regular",
                  children: r[F],
                }),
              }),
            }),
            primaryActions: (0, S.jsx)(j.z, {
              size: "medium",
              style: "neutral",
              mode: "primary",
              icon: (0, S.jsx)(U.OH6, {
                initialColor: "contrast",
              }),
              spaceBetween: false,
              onClick: l,
              children: r[B],
            }),
          });
        return (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsx)(D.u, {
              visible: t,
              onClose: () => s(false),
              size: "small",
              headerImageUrl: n,
              headerHeight: 242,
              footer: u(),
              children: o(),
            }),
            (0, S.jsx)(H.R, {
              visible: t,
              onClose: () => s(false),
              footer: u(),
              children: o(),
            }),
          ],
        });
      };
      W.displayName =
        "components/ResumeAIRecommendation/ResumeAIRecommendationModal/ResumeAIRecommendationModal";
      const Z = (0, E.Z)(W);
      const O = ({ resumeId: e, resumeHash: t, initialSource: s }) => {
        const i = (0, p.v)((e) => e.applicantResumesAiAudit);
        const o = i.find((t) => t.resumeId === e);
        const x = o == null ? undefined : o.status;
        const v = (0, p.v)((e) => e.hasAIHhPro);
        const [b, g] = (0, r.useState)(false);
        const { microfrontState: f, openModal: j } = (0, h.d)();
        const {
          fetchAIGenerate: R,
          fetchAICheckStatus: _,
          loadingGenerate: C,
        } = (0, m.y)({
          resumeId: e,
        });
        const k = f === "fetching" || C;
        const L = (0, r.useRef)(null);
        const A = (0, d.usePush)();
        const I = ((e) => {
          switch (e) {
            case y.DN.New:
              return "processing";
            case y.DN.Success:
              return "processed";
            case y.DN.Error:
              return "error";
            default:
              return "to_generate";
          }
        })(x);
        const N = (0, n.useElementShown)(l(), {
          status: I,
        });
        const T = s === y.ZM.ApplicantResume;
        (0, r.useEffect)(() => {
          if (x !== y.DN.New) {
            if ((0, c.isNumber)(L.current)) {
              clearInterval(L.current);
            }
            L.current = null;
            return;
          }
          L.current = setInterval(_, 30000);
        }, [x]);
        const E = (0, r.useMemo)(
          () => i.filter((e) => e.status !== y.DN.Error),
          [i],
        );
        return (0, S.jsxs)("div", {
          ref: N,
          children: [
            !k &&
              o &&
              (0, S.jsx)(w, {
                status: o.status,
                onClick: () => {
                  a()({
                    status: I,
                  });
                  if (x === y.DN.Success) {
                    A(`/applicant-services/hhpro/ai_resume_audit/${t}`);
                  }
                  if (x !== undefined || i.length) {
                    if (x === undefined || x === y.DN.Error) {
                      if (E.length && !v) {
                        j(s, t);
                        return;
                      }
                      R();
                    }
                  } else {
                    g(true);
                  }
                },
                isLight: T,
              }),
            k &&
              (0, S.jsx)(u.Z.Skeleton, {
                stretched: true,
                borderRadius: T ? 24 : 12,
                height: 80,
                loading: k,
              }),
            (0, S.jsx)(Z, {
              visible: b,
              setVisible: g,
              resumeId: e,
            }),
          ],
        });
      };
      O.displayName =
        "components/ResumeAIRecommendation/index/ResumeAiRecommendation";
    },
    916769: function (e, t, s) {
      s.d(t, {
        $: () => c,
      });
      var r = s(394280);
      var n = s(791256);
      var i = s.n(n);
      var a = s(594948);
      var o = s(439624);
      var l = s(989703);
      var d = s(847461);
      var u = s(343856);
      const c = ({ children: e }) => {
        const t = (0, a.v)(({ request: e }) => e.url);
        const s = (0, a.v)(({ analyticsParams: e }) => e.hhtmSource);
        const [n, c] = (0, r.useState)({
          from: "",
          visible: false,
          resume: null,
        });
        return (0, u.jsx)(d.F.Provider, {
          value: {
            visible: n.visible,
            resume: n.resume,
            closeModal: () => {
              i().sendEvent("applicant", "resume-delete-attempt", "cancel");
              c({
                from: "",
                visible: false,
                resume: null,
              });
            },
            openModal: ({ from: e, resume: t }) => {
              i().sendEvent(
                "applicant",
                "resume-delete-attempt",
                "try_to_delete",
              );
              c({
                from: e,
                resume: t,
                visible: true,
              });
            },
            deleteResume: () => {
              if (n.resume) {
                o.r
                  .delete(n.resume._attributes.hash, "resume-delete", s)
                  .then(({ data: e }) => {
                    window.location.assign(e.url);
                    c({
                      from: "",
                      visible: false,
                      resume: null,
                    });
                  })
                  .catch(console.error);
              }
            },
            hideResume: () => {
              if (n.resume) {
                l.f
                  .hide(n.resume._attributes.hash)
                  .then(() => {
                    window.location.assign(t);
                    c({
                      from: "",
                      visible: false,
                      resume: null,
                    });
                  })
                  .catch(console.error);
              }
            },
          },
          children: e,
        });
      };
      c.displayName =
        "components/ResumeDeleteModal/DeleteModalProvider/DeleteModalProvider";
    },
    710625: function (e, t, s) {
      s.d(t, {
        F: () => H,
      });
      var r = s(394280);
      var n = s(270331);
      var i = s.n(n);
      var a = s(607861);
      var o = s.n(a);
      var l = s(365545);
      var d = s.n(l);
      var u = s(36074);
      var c = s(454386);
      var m = s(441226);
      var h = s(118450);
      var p = s(650911);
      var y = s(105160);
      var x = s(922366);
      var v = s(559123);
      var b = s(122060);
      var g = s(674070);
      var f = s(599998);
      var j = s(847461);
      var R = s(330080);
      var _ = s(580356);
      var C = s(343856);
      const S = "resumeList.delete.modal.blocked.header";
      const k = "resumeList.delete.modal.blocked.description";
      const L = "resumeList.delete.modal.blocked.button.delete";
      const w = "resumeList.delete.modal.blocked.button.cancel";
      const A = ({
        trls: e,
        visible: t,
        onClose: s,
        onDelete: r,
        resumeId: n,
      }) =>
        (0, C.jsx)(_.bZ, {
          icon: (0, C.jsx)(g.I6K, {}),
          title: e[S],
          layout: "vertical",
          visible: t,
          onClose: s,
          iconStyle: "negative",
          description: e[k],
          buttons: (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)(h.z, {
                stretched: true,
                mode: "primary",
                style: "negative",
                onClick: () => {
                  i()({
                    hhtmSource: "blocked_resume_delete_alert",
                    buttonText: e[L],
                    resumeId: n,
                  });
                  r();
                },
                "data-qa": "resume-delete-confirm",
                children: e[L],
              }),
              (0, C.jsx)(h.z, {
                stretched: true,
                mode: "secondary",
                style: "negative",
                "data-qa": "resume-delete-cancel",
                onClick: () => {
                  o()({
                    hhtmSource: "blocked_resume_delete_alert",
                    buttonText: e[w],
                    resumeId: n,
                  });
                  s();
                },
                children: e[w],
              }),
            ],
          }),
        });
      A.displayName = "components/ResumeDeleteModal/DeleteAlert/DeleteAlert";
      const I = (0, f.x)(A);
      const N = "navbar--JjkkretbV4kSGWr1";
      const T = "resumeList.delete.modal.header";
      const E = "resumeList.delete.modal.description";
      const P = "resumeList.delete.modal.button.hide";
      const M = "resumeList.delete.modal.button.delete";
      const D = ({ trls: e }) => {
        var t;
        var s;
        const { isMobile: n } = (0, u.G)();
        const {
          visible: a,
          closeModal: l,
          resume: f,
          hideResume: _,
          deleteResume: S,
        } = (0, j.U)();
        const k =
          (f == null || (t = f._attributes) === null || t === undefined
            ? undefined
            : t.status) === R.l0;
        const L =
          (f == null || (s = f._attributes) === null || s === undefined
            ? undefined
            : s.id) || "";
        const w = a && k;
        const A = a && !k;
        const D = () => {
          o()({
            hhtmSource: "resume_delete_alert",
            buttonText: e[M],
            resumeId: L,
          });
          S();
        };
        const H = () => {
          i()({
            hhtmSource: "resume_delete_alert",
            buttonText: e[P],
            resumeId: L,
          });
          _();
        };
        (0, r.useEffect)(() => {
          if (a) {
            d()({
              hhtmSource: k
                ? "blocked_resume_delete_alert"
                : "resume_delete_alert",
            });
          }
        }, [a, k]);
        if (n) {
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsxs)(c.R, {
                visible: A,
                onClose: l,
                footer: (0, C.jsxs)(m.W, {
                  children: [
                    (0, C.jsx)(h.z, {
                      stretched: true,
                      mode: "primary",
                      style: "accent",
                      onClick: H,
                      "data-qa": "resume-hide-confirm",
                      children: e[P],
                    }),
                    (0, C.jsx)(h.z, {
                      stretched: true,
                      mode: "secondary",
                      style: "negative",
                      "data-qa": "resume-delete-confirm",
                      onClick: D,
                      children: e[M],
                    }),
                  ],
                }),
                children: [
                  (0, C.jsx)("div", {
                    className: N,
                    children: (0, C.jsx)(p.a, {
                      "data-qa": "resume-delete-close",
                      style: "neutral",
                      mode: "secondary",
                      icon: g.Cs7,
                      onClick: l,
                    }),
                  }),
                  (0, C.jsx)(y.x, {
                    typography: "title-4-semibold",
                    "data-qa": "resume-delete-title",
                    children: e[T],
                  }),
                  (0, C.jsx)(x.X, {
                    default: 4,
                  }),
                  (0, C.jsx)(y.x, {
                    typography: "label-2-regular",
                    style: "secondary",
                    "data-qa": "resume-delete-content",
                    children: e[E],
                  }),
                  (0, C.jsx)(x.X, {
                    default: 32,
                  }),
                ],
              }),
              (0, C.jsx)(I, {
                resumeId: L,
                visible: w,
                onClose: l,
                onDelete: S,
              }),
            ],
          });
        } else {
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)(v.u, {
                title: e[T],
                visible: A,
                onClose: l,
                actions: (0, C.jsx)(p.a, {
                  "data-qa": "resume-delete-close",
                  style: "neutral",
                  mode: "secondary",
                  icon: g.Cs7,
                  onClick: l,
                }),
                footer: (0, C.jsx)(b.o, {
                  primaryActions: (0, C.jsx)(h.z, {
                    mode: "primary",
                    style: "accent",
                    onClick: H,
                    "data-qa": "resume-hide-confirm",
                    children: e[P],
                  }),
                  secondaryActions: (0, C.jsx)(h.z, {
                    mode: "secondary",
                    style: "negative",
                    "data-qa": "resume-delete-confirm",
                    onClick: D,
                    children: e[M],
                  }),
                }),
                children: (0, C.jsx)(y.x, {
                  typography: "paragraph-1-regular",
                  "data-qa": "resume-delete-content",
                  children: e[E],
                }),
              }),
              (0, C.jsx)(I, {
                resumeId: L,
                visible: w,
                onClose: l,
                onDelete: S,
              }),
            ],
          });
        }
      };
      D.displayName = "components/ResumeDeleteModal/index/ResumeDeleteModal";
      const H = (0, f.x)(D);
    },
    180202: function (e, t, s) {
      s.d(t, {
        Z: () => T,
      });
      var r = s(394280);
      var n = s(940389);
      var i = s(749727);
      var a = s(674322);
      var o = s(294627);
      var l = s.n(o);
      var d = s(281693);
      var u = s.n(d);
      var c = s(772897);
      var m = s.n(c);
      var h = s(491606);
      var p = s(859716);
      var y = s(845942);
      var x = s(580356);
      var v = s(118450);
      var b = s(555498);
      var g = s(504917);
      var f = s(927633);
      var j = s(599998);
      var R = s(924135);
      var _ = s(594948);
      var C = s(225098);
      var S = s(145106);
      var k = s(630549);
      var L = s(247424);
      const w = (e) => `nextTouchTimestampV2_${e}`;
      var A = s(343856);
      const I = "hhpro_resume_renewal";
      const N = ({
        hash: e,
        humanDatesRules: t,
        onUpdate: s,
        onTimeChanged: o,
        RenderComponent: d,
        timeLeft: c,
        trls: j,
        updateInterval: T,
        renewalTime: E,
        isRenewalAvailable: P,
        resumeId: M,
        ...D
      }) => {
        const H = (0, r.useRef)();
        const U = (0, n.useDispatch)();
        const q = (0, h.usePush)();
        const z = (0, r.useMemo)(() => (0, g.IntervalMessages)(t), [t]);
        const [V, B] = (0, r.useState)(false);
        const [$, F] = (0, r.useState)(false);
        const [W, Z] = (0, r.useState)(c);
        const O = (0, _.v)(({ stateHhPro: e }) => e) === f.Jd.Available;
        const [Q, X, G] = (0, R.m)(false);
        const Y = (0, _.v)(({ applicantResumesStatistics: e }) => {
          var t;
          if (M) {
            if (
              e == null ||
              (t = e.resumes) === null ||
              t === undefined ||
              (t = t[M]) === null ||
              t === undefined
            ) {
              return undefined;
            } else {
              return t.recommendation;
            }
          } else {
            return null;
          }
        });
        (0, r.useEffect)(() => {
          Z(c);
        }, [c]);
        const J = W > 0;
        const K = J ? z.get(W) : null;
        let ee = K
          ? (0, p.WU)(j[N.trls.nextTouchWithRenewal], {
              "{0}": K,
            })
          : "";
        if (!P) {
          ee = (0, p.WU)(j[N.trls.nextTouchWithoutRenewal], {
            "{0}": K,
          });
        }
        if (
          E != null &&
          E.nearestIntervalStartTime &&
          E != null &&
          E.nearestIntervalEndTime
        ) {
          let e = j[N.trls.renewalToday];
          if ((0, i.Z)(E.nearestIntervalStartTime)) {
            e = j[N.trls.renewalTomorrow];
          }
          ee = (0, p.WU)(j[N.trls.renewal], {
            "{0}": e,
            "{1}": (0, y.p6)(E.nearestIntervalStartTime, "HH:mm"),
            "{2}": (0, y.p6)(E.nearestIntervalEndTime, "HH:mm"),
          });
        }
        const te = (0, r.useCallback)(() => {
          if (!$) {
            B(false);
            if (!J && H.current) {
              F(true);
              H.current.send();
            } else if (H.current) {
              if (O) {
                X();
                m()({
                  hhtmSource: I,
                });
              } else {
                q(S.F6);
              }
            }
          }
        }, [J, O, X, $, q]);
        (0, r.useEffect)(() => {
          H.current = (function ({
            hash: e,
            timeLeft: t,
            updateInterval: s,
            onSuccess: r,
            onError: n,
            onTimeLeftChange: i,
            checkInterval: a = 1000,
            getStorageKey: o = w,
          }) {
            const l = o(e);
            let d;
            let u;
            let c = Math.max(t, 0);
            function m(e) {
              d = e;
              h();
            }
            function h() {
              const e = c;
              c = Math.max(d - Date.now(), 0);
              window.clearTimeout(u);
              if (c > 0) {
                u = window.setTimeout(h, a);
              }
              if (c !== e) {
                i(c);
              }
            }
            let p = false;
            const y = (e) => {
              if (e.key === l) {
                m(e.newValue);
              }
            };
            window.addEventListener("storage", y);
            m(Date.now() + c);
            return {
              send: function () {
                if (!(c > 0) && !p) {
                  p = true;
                  L.default
                    .postFormData("/applicant/resumes/touch", {
                      resume: e,
                      undirectable: true,
                    })
                    .then(() => {
                      p = false;
                      m(Date.now() + s);
                      k.Y.setItem(l, d);
                      r();
                    })
                    .catch((e) => {
                      p = false;
                      n(e);
                    });
                }
              },
              destroyHandlers: () => {
                window.clearTimeout(u);
                window.removeEventListener("storage", y);
              },
            };
          })({
            hash: e,
            timeLeft: c,
            updateInterval: T,
            onError: (e) => {
              if (e.response) {
                const s = e.response.data?.url || null;
                if (e.response.status === a.MOVED_TEMPORARILY && s) {
                  q(s);
                  return;
                }
              }
              B(true);
              F(false);
            },
            onSuccess: () => {
              B(false);
              F(false);
              if (s != null) {
                s(Date.now());
              }
            },
            onTimeLeftChange: (e) => {
              B(false);
              Z(e);
              if (o != null) {
                o(e);
              }
            },
          });
          return H.current.destroyHandlers;
        }, [U, e, o, s, q, c, T]);
        if ([C.VQ.UpdateResume, C.VQ.Respond].includes(Y)) {
          return null;
        } else {
          return (0, A.jsxs)(A.Fragment, {
            children: [
              (0, A.jsx)(d, {
                disabled: J,
                doUpdate: te,
                error: V,
                hash: e,
                message: ee,
                renewalTime: E,
                ...D,
              }),
              O &&
                (0, A.jsx)(x.bZ, {
                  visible: Q,
                  title: j[N.trls.alertTitle],
                  description: j[N.trls.alertDescription],
                  layout: "vertical",
                  icon: (0, A.jsx)(b.OH6, {}),
                  iconStyle: "neutral",
                  buttons: (0, A.jsxs)(A.Fragment, {
                    children: [
                      (0, A.jsx)(v.z, {
                        Element: h.SPALink,
                        to: S.Pp,
                        mode: "primary",
                        onClick: () => {
                          G();
                          u()({
                            hhtmSource: I,
                          });
                        },
                        children: j[N.trls.alertLink],
                      }),
                      (0, A.jsx)(v.z, {
                        mode: "secondary",
                        onClick: () => {
                          G();
                          l()({
                            hhtmSource: I,
                          });
                        },
                        children: j[N.trls.alertClose],
                      }),
                    ],
                  }),
                  onClose: () => {
                    G();
                    l()({
                      hhtmSource: I,
                    });
                  },
                }),
            ],
          });
        }
      };
      N.displayName = "components/ResumeUpdate/index/ResumeUpdate";
      N.trls = {
        nextTouch: "myresume.publish.nextTouch",
        renewal: "myresume.publish.renewal",
        nextTouchWithoutRenewal: "rb.publish.nextTouch",
        nextTouchWithRenewal: "myresume.publish.nextTouchWithRenewal",
        renewalToday: "myresume.publish.renewal.today",
        renewalTomorrow: "myresume.publish.renewal.tomorrow",
        alertTitle: "myresume.publish.renewal.alert.hhPro.title",
        alertDescription: "myresume.publish.renewal.alert.hhPro.description",
        alertLink: "myresume.publish.renewal.alert.hhPro.link",
        alertClose: "myresume.publish.renewal.alert.hhPro.close",
      };
      const T = (0, j.x)(N);
    },
    781943: function (e, t, s) {
      s.d(t, {
        Z: () => i,
      });
      var r = s(343856);
      const n = ({ children: e, isShrinked: t }) => {
        const s = t ? "row-content_schrinked" : "row-content";
        return (0, r.jsx)("div", {
          className: s,
          children: e,
        });
      };
      n.displayName = "components/RowContent/index/RowContent";
      const i = n;
    },
    876705: function (e, t, s) {
      s.d(t, {
        o: () => c,
      });
      var r = s(394280);
      var n = s(491915);
      var i = s.n(n);
      var a = s(28537);
      const o = s.p + "static/images/icon__min_a72b4c0fdbd58bb2.svg";
      const l = "qrcode_wrapper--jOc69mgHkvI5LnSR";
      const d = "qrcode--s4PDiIYFFJoETDw3";
      var u = s(343856);
      const c = ({ data: e }) => {
        const t = (0, a.l)(o);
        const s = (0, r.useRef)(null);
        const n = (0, r.useMemo)(
          () =>
            new (i())(
              ((e, t) => ({
                width: 350,
                height: 350,
                type: "svg",
                data: t,
                image: e,
                margin: 20,
                qrOptions: {
                  typeNumber: 0,
                  mode: "Byte",
                  errorCorrectionLevel: "Q",
                },
                imageOptions: {
                  hideBackgroundDots: true,
                  margin: 6.5,
                  crossOrigin: "anonymous",
                },
                dotsOptions: {
                  color: "#000000",
                  type: "rounded",
                },
                backgroundOptions: {
                  color: "#F1F4F9",
                },
                cornersSquareOptions: {
                  color: "#000000",
                  type: "extra-rounded",
                },
                cornersDotOptions: {
                  color: "#000000",
                  type: "rounded",
                },
              }))(t, e),
            ),
          [t, e],
        );
        (0, r.useEffect)(() => {
          if (s.current) {
            if (n != null) {
              n.append(s.current);
            }
          }
        }, [n, s]);
        if (e && n) {
          return (0, u.jsx)("div", {
            className: l,
            "data-qa": "setka-promotion-qr-code",
            children: (0, u.jsx)("div", {
              ref: s,
              className: d,
            }),
          });
        } else {
          return null;
        }
      };
      c.displayName =
        "components/SetkaPromotionQRCode/index/SetkaPromotionQRCode";
    },
    96540: function (e, t, s) {
      s.d(t, {
        W: () => o,
      });
      var r = s(394280);
      var n = s(791256);
      var i = s.n(n);
      var a = s(846192);
      const o = () => {
        const e = (0, a.Xl)();
        return (0, r.useCallback)(
          (t) => {
            if (e) {
              i().addEventPixels(t);
            }
          },
          [e],
        );
      };
    },
    163145: function (e, t, s) {
      s.d(t, {
        A: () => u,
      });
      var r = s(394280);
      var n = s(940389);
      var i = s(55873);
      var a = s(326744);
      var o = s(255717);
      const l = (0, i.makeSetStoreField)("professionalRoleTree");
      const d = (e, t) =>
        o._i.get("/shards/professional_role", {
          params: {
            lang: e,
          },
          signal: t == null ? undefined : t.signal,
        });
      function u() {
        const e = (0, r.useRef)({});
        const t = (0, n.useDispatch)();
        const s = (0, r.useContext)(a.f);
        (0, r.useEffect)(() => {
          const r = new AbortController();
          if (s in e.current) {
            t(l(e.current[s]));
          } else {
            d(s, r)
              .then((r) => {
                e.current[s] = r;
                t(l(r));
              })
              .catch((e) => {
                if (!o._i.isCancel(e)) {
                  console.error(e);
                }
              });
          }
          return () => r.abort();
        }, [s, t]);
      }
    },
    997769: function (e, t, s) {
      s.r(t);
      s.d(t, {
        sendAnalyticsCompleteResume: () => i,
        sendAnalyticsFindJobFaster: () => o,
        sendAnalyticsResumesSlider: () => a,
        sendAnalyticsWantWorkHere: () => l,
        sendAnalyticsWatchForVacancies: () => d,
      });
      var r = s(791256);
      var n = s.n(r);
      const i = (e) => {
        n().sendEvent(e, "myresume_expert_resume", "order_expert_resume");
      };
      const a = (e, t) => {
        n().sendEvent(t, `myresume_${e}`, `get_${e}`);
      };
      const o = () => {
        n().sendEvent("autoservice", "myresume", "click_button");
      };
      const l = (e) => {
        n().sendEvent("hochu_zdes_rabotat", "button_company", e);
      };
      const d = () => {
        n().sendEvent(
          "applicant",
          "watch_for_vacancies",
          "subscribe_employer_vacancies",
        );
      };
    },
    439624: function (e, t, s) {
      s.d(t, {
        r: () => n,
      });
      var r = s(255717);
      const n = {
        get: (e, t) =>
          r._i.get("/applicant/resume", {
            params: {
              resume: e,
            },
            signal: t,
          }),
        get_all: (e) =>
          r._i
            .get("/shards/applicant/resumes", {
              signal: e,
            })
            .then(({ resumes: e }) => e),
        update: (e, t, s, n) =>
          r._i
            .post("/applicant/resume/edit", s, {
              params: {
                resume: e,
                hhtmSource: t,
              },
              signal: n,
            })
            .then(({ data: e }) => e),
        delete: (e, t, s) =>
          r._i.postFormData(
            "/applicant/deleteresume",
            {
              hash: e,
              hhtmFrom: t,
              hhtmSource: s,
            },
            {
              params: {
                from: "resume-delete",
                hhtmFromLabel: "resume-delete",
              },
            },
          ),
        touch: (e) =>
          r._i.postFormData("/applicant/resumes/touch", {
            resume: e,
            undirectable: true,
          }),
      };
    },
    989703: function (e, t, s) {
      s.d(t, {
        f: () => n,
      });
      var r = s(255717);
      const n = {
        hide: (e) =>
          r._i.post(
            "/shards/resume/edit/visibility",
            {
              hash: e,
              accessType: "no_one",
            },
            {
              params: {
                from: "resume-delete",
                hhtmFromLabel: "resume-delete",
              },
            },
          ),
        getVisibilityEmployerList: (e, t, s) =>
          r._i.get(`/applicant/resume/${e}/${t}`, {
            params: {
              page: s,
              perPage: 10,
            },
          }),
        searchVisibilityEmployerList: (e, t, s) =>
          r._i.get(`/applicant/resume/${e}/${t}/search`, {
            params: {
              text: s,
            },
          }),
        deleteVisibilityEmployer(e, t, s) {
          const n = {
            employerId: s,
          };
          return r._i.delete(`/applicant/resume/${e}/${t}/employer`, {
            params: n,
          });
        },
        clearVisibilityEmployers: (e, t) =>
          r._i.put(`/applicant/resume/${e}/${t}`),
        addVisibilityEmployers(e, t, s) {
          const n = {
            employerId: s,
          };
          return r._i.put(`/applicant/resume/${e}/${t}/employer`, undefined, {
            params: n,
          });
        },
      };
    },
    847461: function (e, t, s) {
      s.d(t, {
        F: () => n,
        U: () => i,
      });
      var r = s(394280);
      const n = (0, r.createContext)({
        resume: null,
        visible: false,
        openModal: () => {},
        closeModal: () => {},
        hideResume: () => {},
        deleteResume: () => {},
      });
      const i = () => (0, r.useContext)(n);
    },
    389371: function (e, t, s) {
      s.d(t, {
        L: () => d,
      });
      var r = s(394280);
      var n = s(242615);
      var i = s.n(n);
      var a = s(744785);
      var o = s.n(a);
      var l = s(888927);
      const d = (e, t, s) => {
        const n = (0, r.useRef)(null);
        const { hhtmSource: a } = (0, l.t)();
        const d = (0, r.useCallback)(() => {
          i()({
            hhtmSource: a,
            type: t,
            resumeId: parseInt(e, 10),
            surveyProfession:
              (s == null ? undefined : s.surveyProfession) || "",
          });
        }, [a, t, e, s]);
        (0, r.useEffect)(() => {
          if (n.current) {
            const r = o()(n.current, {
              hhtmSource: a,
              type: t,
              resumeId: parseInt(e, 10),
              surveyProfession:
                (s == null ? undefined : s.surveyProfession) || "",
            });
            return () => (r == null ? undefined : r.stopSpying());
          }
        }, [t, s, e, a]);
        return (0, r.useMemo)(
          () => ({
            recommendationRef: n,
            sendRecommendationClickAnalytics: d,
          }),
          [n, d],
        );
      };
    },
    910824: function (e, t, s) {
      s.d(t, {
        Cj: () => m,
        DY: () => i,
        F_: () => v,
        LY: () => o,
        No: () => y,
        PG: () => u,
        U2: () => c,
        WS: () => x,
        YE: () => p,
        hE: () => h,
        ho: () => a,
        i1: () => b,
        kn: () => l,
        nM: () => d,
      });
      var r = s(225098);
      var n = s(330080);
      const i = (e) => {
        var t;
        return (
          (e == null || (t = e._attributes) === null || t === undefined
            ? undefined
            : t.id) || ""
        );
      };
      const a = (e) => {
        var t;
        return (
          (e == null || (t = e._attributes) === null || t === undefined
            ? undefined
            : t.hash) || ""
        );
      };
      const o = (e) => {
        var t;
        return (
          (e == null || (t = e._attributes) === null || t === undefined
            ? undefined
            : t.status) || r.t3.New
        );
      };
      const l = (e) => {
        var t;
        return (
          (e == null || (t = e._attributes) === null || t === undefined
            ? undefined
            : t.marked) || false
        );
      };
      const d = (e) => {
        var t;
        return (
          (e == null || (t = e._attributes) === null || t === undefined
            ? undefined
            : t.renewal) || false
        );
      };
      const u = (e) => e._attributes.renewalServiceExpireTime;
      const c = (e) => e._attributes.updated;
      const m = (e) => e._attributes.update_timeout;
      const h = (e) => parseInt(e._attributes.id, 10);
      const p = (e) => e._attributes.status === n.l0;
      const y = (e) => e._attributes.status === n.D6;
      const x = (e) => e._attributes.hasErrors || false;
      const v = (e) => [n.D6, n.l0].includes(e._attributes.status);
      const b = (e) =>
        !!p(e) ||
        !((e) => {
          var t;
          return (
            (e == null || (t = e._attributes) === null || t === undefined
              ? undefined
              : t.isSearchable) || false
          );
        })(e);
    },
    539329: function (e, t, s) {
      s.d(t, {
        K: () => o,
        T: () => a,
      });
      var r = s(927633);
      var n = s(594948);
      var i = s(145106);
      const a = (e) => {
        const t = (0, n.v)((e) => e.resumeAuditRecommendation);
        const s =
          t == null
            ? undefined
            : t.orders.find((t) => {
                return t.resume?.hash === e && t.status !== r.nu.Archived;
              });
        const i =
          (t == null ? undefined : t.applicableResumes.includes(e)) &&
          (t == null ||
            !t.orders.find((t) => {
              return (
                t.resume?.hash === e &&
                t.activationTime > Date.now() - 2592000000
              );
            }));
        if (t && (i || !!s)) {
          return {
            order: s,
            price: t.price,
          };
        } else {
          return null;
        }
      };
      const o = (e, t) => {
        var s;
        const o = (0, n.v)((e) => e.applicantResumesAiAudit).find(
          (e) => e.resumeId === parseInt(t, 10),
        );
        const l = a(e);
        if (o) {
          return {
            url: `/applicant-services/hhpro/ai_resume_audit/${e}`,
            AIStatus: o.status,
          };
        }
        if (!l) {
          return;
        }
        const d = l.order;
        if (!d) {
          return;
        }
        if ((d == null ? undefined : d.status) === r.nu.Finished) {
          return {
            url: `/applicant-services/${i.dw}/order/${l == null || (s = l.order) === null || s === undefined ? undefined : s.orderCode}`,
          };
        } else {
          return undefined;
        }
      };
    },
    888927: function (e, t, s) {
      s.d(t, {
        e: () => n,
        t: () => i,
      });
      var r = s(394280);
      const n = (0, r.createContext)({
        hhtmSource: "resume_list",
      });
      const i = () => (0, r.useContext)(n);
    },
    160013: function (e, t, s) {
      s.d(t, {
        N: () => o,
      });
      var r = s(394280);
      var n = s(594948);
      var i = s(330080);
      const a = {
        showResumeBlockedWhileExpertIsWorking:
          "show_resume_blocked_while_expert_is_working",
      };
      function o(e) {
        const t = (0, n.v)(
          (e) => e.features[a.showResumeBlockedWhileExpertIsWorking] || false,
        );
        return (0, r.useMemo)(() => {
          var s;
          const r =
            (e == null || (s = e._attributes) === null || s === undefined
              ? undefined
              : s.tags) || [];
          return t && r.includes(i.wp.ExpertIsWorking);
        }, [e, t]);
      }
    },
    834103: function (e, t, s) {
      s.d(t, {
        F5: () => n,
        In: () => r,
      });
      const r = {
        periodDays: 0,
        views: {
          count: 0,
          countNew: 0,
        },
        invitations: {
          count: 0,
          countNew: 0,
        },
        searchShows: {
          count: 0,
          countNew: 0,
        },
      };
      const n =
        (e) =>
        ({ applicantResumesStatistics: t }) => {
          var s;
          if (t == null || (s = t.resumes) === null || s === undefined) {
            return undefined;
          } else {
            return s[e];
          }
        };
    },
    178358: function (e, t, s) {
      s.d(t, {
        F: () => r,
        j: () => n,
      });
      const r = ({ applicantResumes: e }) => e;
      const n = (e) => {
        const t = e.filter(({ _attributes: e }) => e.isSearchable);
        const s = e.filter(({ _attributes: e }) => !e.isSearchable);
        return t.concat(s);
      };
    },
    878724: function (e, t, s) {
      s.d(t, {
        G: () => n,
        h: () => i,
      });
      var r = s(394280);
      const n = (0, r.createContext)({
        resumeId: 0,
        resumeHash: "",
        chatBotHref: "",
        modalVisible: false,
        successUpdate: false,
        onOpenModal: () => {},
        onCloseModal: () => {},
        canUpdateResumeByBot: false,
      });
      const i = () => (0, r.useContext)(n);
    },
    569454: function (e, t, s) {
      s.d(t, {
        M2: () => i,
        SG: () => a,
        mW: () => n,
      });
      var r = s(630549);
      const n = "success_resume_update_modal_timeout_h";
      const i = "last_show_success_update_modal";
      const a = (e) => {
        const t = Number(r.Y.getItem(i));
        return Date.now() - t > e * 60 * 60 * 1000;
      };
    },
    888974: function (e, t, s) {
      s.d(t, {
        GM: () => n,
        Ym: () => i,
        sm: () => a,
      });
      var r = s(569454);
      const n = (e) => {
        return Boolean(e.chatBot?.href || "");
      };
      const i = ({ chatBot: e }) => (e == null ? undefined : e.href) || "";
      const a = ({ features: e }) => e[r.mW];
    },
    205838: function (e, t, s) {
      s.d(t, {
        Eo: () => i,
        U4: () => d,
        g5: () => r,
        hl: () => o,
        qd: () => l,
        uH: () => n,
        zd: () => a,
      });
      let r = (function (e) {
        e.Everyone = "everyone";
        e.Clients = "clients";
        e.WhiteList = "whitelist";
        e.BlackList = "blacklist";
        e.Direct = "direct";
        e.NoOne = "no_one";
        return e;
      })({});
      const n = r.Everyone;
      const i = r.Clients;
      const a = r.WhiteList;
      const o = r.BlackList;
      const l = r.Direct;
      const d = r.NoOne;
    },
    145106: function (e, t, s) {
      s.d(t, {
        F6: () => i,
        Pp: () => n,
        dw: () => r,
        ye: () => a,
      });
      const r = "resume_audit";
      const n = "/applicant-services/hhpro";
      const i = "/applicant-services/hhpro/management";
      const a = "/mentors";
    },
    921847: function (e, t, s) {
      s.d(t, {
        O: () => n,
        l: () => r,
      });
      const r = "1001";
      const n = "max_resume_limit_exceeded";
    },
  },
]); //# sourceMappingURL=6578.43259fb27c8c59b7.js.map
//# debugId=80cc1ca1-72ee-4b44-a60b-35f9b8ff13d2
