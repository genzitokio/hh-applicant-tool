try {
  (function () {
    var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var n = new e.Error().stack;
    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "dc825ed4-a633-4f6e-aa84-dcbcb2ba511c";
      e._sentryDebugIdIdentifier = "sentry-dbid-dc825ed4-a633-4f6e-aa84-dcbcb2ba511c";
    }
  })();
} catch (e) {}
(function () {
  try {
    var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    e._sentryModuleMetadata = e._sentryModuleMetadata || {};
    e._sentryModuleMetadata[new e.Error().stack] = function (e) {
      for (var n = 1; n < arguments.length; n++) {
        var a = arguments[n];
        if (a != null) {
          for (var t in a) {
            if (a.hasOwnProperty(t)) {
              e[t] = a[t];
            }
          }
        }
      }
      return e;
    }({}, e._sentryModuleMetadata[new e.Error().stack], {
      "_sentryBundlerPluginAppKey:sentry-js-hh-filter-key": true
    });
  } catch (e) {}
})();
(function () {
  try {
    (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {}).SENTRY_RELEASE = {
      id: "a8891b807f20bd18b60ec88985b3712ef8d8e4c6"
    };
  } catch (e) {}
})();
(globalThis.__xhh_LOADABLE_LOADED_CHUNKS__ = globalThis.__xhh_LOADABLE_LOADED_CHUNKS__ || []).push([["7780"], {
  618981: function (e, n, a) {
    a.d(n, {
      p: () => t
    });
    const t = "SHOW_ADD_AUTH_PHONE_SUCCESS_NOTIFICATION";
  },
  963750: function (e, n, a) {
    a.d(n, {
      F: () => v
    });
    var t = a(394280);
    var s = a(764709);
    var i = a(963252);
    var r = a(940389);
    var o = a(343856);
    let l;
    l = a(965073).default;
    class c extends t.Component {
      element = null;
      destroy = null;
      wrapperRef = (0, t.createRef)();
      abortController = null;
      static defaultProps = {
        templateName: "HHC-Banners-Place-Template"
      };
      componentDidMount() {
        this.element = this.wrapperRef.current;
        if (this.element) {
          this.element.addEventListener("HH-Banners-Init", this.setContainerSizes, {
            once: true
          });
          this.initBanners();
        }
      }
      componentDidUpdate() {
        if (this.element) {
          this.initBanners();
        }
      }
      componentWillUnmount() {
        var e;
        var n;
        var a;
        if ((e = this.abortController) !== null && e !== undefined && (n = e.abort) !== null && n !== undefined) {
          n.call(e);
        }
        if (this.element) {
          this.element.removeEventListener("HH-Banners-Init", this.setContainerSizes);
        }
        if ((a = this.destroy) !== null && a !== undefined) {
          a.call(this);
        }
        this.element = null;
        this.wrapperRef.current = null;
        if (this.props.fwdRef) {
          this.props.fwdRef.current = null;
        }
      }
      shouldComponentUpdate(e) {
        return !e.cancelFetchBanners && (e.search !== this.props.search || e.pathname !== this.props.pathname);
      }
      initBanners() {
        var e;
        const {
          id: n,
          templateName: a,
          adfoxParams: t,
          userTargeting: s
        } = this.props;
        let i;
        if ((e = this.abortController) !== null && e !== undefined) {
          e.abort();
        }
        this.abortController = new AbortController();
        if (this.destroy) {
          this.destroy();
        }
        if (this.element) {
          this.element.style.height = `${this.element.clientHeight}px`;
          this.element.innerHTML = "";
        }
        if (t) {
          i = {
            ...t,
            type: "adfox",
            bannerId: n,
            place: n,
            bannerCommonTargeting: s,
            bannerAdTargeting: t.bannerAdTargeting || {}
          };
        }
        const r = {
          id: n,
          templateName: a,
          adfoxParams: i
        };
        if (l) {
          this.destroy = l(this.element, r, this.abortController);
        }
      }
      setContainerSizes = () => {
        if (this.element) {
          this.element.style.height = "auto";
          this.element.style.maxWidth = "100%";
        }
      };
      render() {
        if (this.props.render) {
          return this.props.render(this.wrapperRef);
        } else {
          return (0, o.jsx)("div", {
            ref: e => {
              if (this.wrapperRef) {
                this.wrapperRef.current = e;
              }
              if (this.props.fwdRef && e) {
                this.props.fwdRef.current = e;
              }
            }
          });
        }
      }
    }
    c.displayName = "components/Banner/index/BannerRaw";
    const d = (e, n) => (0, o.jsx)(c, {
      ...e,
      fwdRef: n
    });
    d.displayName = "components/Banner/index/Banner";
    const m = (0, r.connect)(e => ({
      pathname: e.router.location.pathname,
      search: e.router.location.search,
      cancelFetchBanners: e.cancelFetchBanners,
      userTargeting: e.userTargeting
    }), null, null, {
      forwardRef: true
    })((0, t.forwardRef)(d));
    var p = a(594948);
    var u = a(642053);
    const h = "yandex_adfox_stub_enabled";
    const x = ({
      renderRef: e,
      wrapperRef: n,
      ...a
    }) => {
      (0, t.useEffect)(() => () => {
        if (e) {
          e.current = null;
        }
        if (n) {
          n.current = null;
        }
      }, [e, n]);
      return (0, o.jsx)("div", {
        ref: a => {
          if (e) {
            e.current = a;
          }
          if (n) {
            n.current = a;
          }
        },
        ...a
      });
    };
    x.displayName = "components/Banner/AdsExternalBanner/AdsExternalBannerWrapper";
    const y = (0, t.memo)(x);
    const g = ({
      id: e,
      cId: n,
      pp: a,
      p2: t,
      ...l
    }, c) => {
      const d = (0, i.n)(h);
      const x = (0, s.z)();
      const g = a && t;
      const v = (() => {
        const e = (0, p.v)(e => {
          var a;
          return ((a = e.searchClusters) === null || a === undefined || (a = a[u.Kz.Area]) === null || a === undefined || (a = a.selectedValues) === null || a === undefined ? undefined : a.map(String)) ?? null;
        }, r.shallowEqual);
        const n = (0, p.v)(e => [...new Set(e.vacancySearchResult.vacancies.flatMap(e => e.professionalRoleIds.flatMap(e => e.professionalRoleId)))], r.shallowEqual);
        return {
          ...(e && {
            contextRegions: e.length ? e : null
          }),
          ...(n.length && {
            contextProfessionalRoles: n
          })
        };
      })();
      if (g) {
        return (0, o.jsx)(m, {
          id: e,
          templateName: "",
          adfoxParams: {
            pp: a,
            p2: t,
            cId: n,
            useAdfoxMock: d,
            fastTargeting: v,
            ...l
          },
          render: a => (0, o.jsx)(y, {
            renderRef: a,
            wrapperRef: c,
            id: n,
            className: `HHC-Banner-${e} HH-Banner-Adfox banner-place banner-place_${e}`,
            "data-banner-id": e,
            "data-direct-banner-class": `banner-adfox-any_${e}`,
            "data-image-banner-class": `banner-adfox-direct_${e}`,
            "data-old-banner-class": `banner-adfox-old_${e}`,
            "data-empty-class": "banner-place_hide",
            "data-loaded-class": "banner-place_show"
          }, n)
        }, n);
      } else {
        console.error(`no Adfox params for banner place ${e} on countryId ${x}`);
        return null;
      }
    };
    g.displayName = "components/Banner/AdsExternalBanner/AdsExternalBannerComponent";
    const v = (0, t.forwardRef)(g);
  },
  26323: function (e, n, a) {
    a.d(n, {
      s: () => Z
    });
    var t = a(394280);
    var s = a(145662);
    var i = a.n(s);
    var r = a(791256);
    var o = a(247934);
    var l = a.n(o);
    var c = a(366510);
    var d = a.n(c);
    var m = a(417277);
    var p = a.n(m);
    var u = a(739173);
    var h = a.n(u);
    var x = a(491606);
    var y = a(859716);
    var g = a(36074);
    var v = a(105160);
    var b = a(922366);
    var j = a(735927);
    var f = a(566456);
    var _ = a(261410);
    var S = a(122060);
    var C = a(118450);
    var k = a(559123);
    var w = a(454386);
    var N = a(648695);
    var E = a(594766);
    var A = a(154595);
    var R = a(907433);
    var P = a(674070);
    var T = a(811283);
    var I = a(720278);
    var L = a(505132);
    var W = a(166122);
    var B = a(599998);
    var M = a(48987);
    var V = a(594948);
    var D = a(888586);
    var F = a(325423);
    var H = a(343903);
    var q = a(255717);
    var U = a(343856);
    const X = {
      title: {
        clickme: "employer.balance.tab.money.clickme.modal.title",
        topSearch: "employer.balance.tab.money.topSearch.modal.title"
      },
      placeholder: "employer.balance.tab.money.clickme.modal.input.placeholder",
      description: "employer.balance.tab.money.clickme.modal.input.description",
      purchase: "employer.balance.tab.money.clickme.modal.purchase",
      cancel: "employer.balance.tab.money.clickme.modal.cancel",
      required: "employer.balance.tab.money.clickme.modal.input.required",
      minValue: "employer.balance.tab.money.clickme.modal.input.minValue",
      tip: "employer.balance.tab.money.clickme.modal.replenishmentTip",
      from: "employer.balance.tab.money.clickme.modal.from"
    };
    var z = function (e) {
      e.Required = "required";
      e.MinValue = "minValue";
      return e;
    }(z || {});
    const O = ({
      trls: e,
      accountId: n,
      currency: a,
      visible: s,
      onClose: o,
      accountBalances: c
    }) => {
      const [m, u] = (0, t.useState)(false);
      const [B, O] = (0, t.useState)(false);
      const {
        realBalance: Z,
        reservedBalance: Y
      } = c ?? {};
      const G = Z - Y;
      const $ = a === D.V.BYR ? Math.abs(G) / 100 : Math.abs(G);
      const {
        minAmount: Q,
        recommendedAmount: J,
        suggestedAmounts: K
      } = (0, V.v)(e => e.accountHistoryMoney.clickmeAmounts.depositAmounts);
      const ee = G < 0 && $ > J;
      const [ne, ae] = (0, t.useState)(String(J));
      const te = (0, t.useRef)(null);
      const {
        addNotification: se
      } = (0, W.lm)();
      const ie = (0, x.usePush)();
      const re = (0, r.useElementShown)(h(), {
        bannerType: "positiveBalance"
      });
      const {
        isGtS: oe
      } = (0, g.G)();
      const le = () => {
        u(false);
        o();
      };
      const ce = (0, y.WU)(e[X.minValue], {
        "{0}": (0, U.jsx)(I.Z, {
          currency: a,
          children: Q
        })
      });
      (0, t.useEffect)(() => {
        if (s) {
          u(false);
          ae(String(ee ? $ : J));
        }
      }, [s, J, $, ee]);
      const de = (0, U.jsxs)(U.Fragment, {
        children: [ee && (0, U.jsxs)(U.Fragment, {
          children: [(0, U.jsx)(v.x, {
            children: (0, y.WU)(e[X.tip], {
              "{0}": (0, U.jsxs)(v.x, {
                Element: "span",
                typography: "custom-2-semibold",
                children: [e[X.from], (0, U.jsx)(I.Z, {
                  currency: a,
                  render: (e, n) => (0, U.jsxs)(U.Fragment, {
                    children: [e, F.qD, n]
                  }),
                  children: $
                })]
              })
            })
          }), (0, U.jsx)(b.X, {
            default: 12
          })]
        }), (0, U.jsx)(v.x, {
          style: "secondary",
          children: e[X.description]
        }), (0, U.jsx)(b.X, {
          default: 12
        }), (0, U.jsx)(j.Y, {
          placeholder: e[X.placeholder],
          onChange: e => {
            if (/^\d*$/.test(e)) {
              ae(e);
            }
          },
          onFocus: () => d()(),
          onBlur: () => ne ? Number(ne) < Q ? u(z.MinValue) : u(false) : u(z.Required),
          value: ne,
          postfix: (0, U.jsx)(T.Z, {
            value: a
          }),
          invalid: !!m,
          maxLength: 12,
          errorMessage: m === z.Required ? (0, U.jsx)(U.Fragment, {
            children: e[X[m]]
          }) : m === z.MinValue ? (0, U.jsx)(U.Fragment, {
            children: ce
          }) : (0, U.jsx)(U.Fragment, {})
        }), (0, U.jsx)(b.X, {
          default: 16
        }), (0, U.jsx)(f.T, {
          children: K.map(e => (0, U.jsx)(_.X, {
            Element: "button",
            onClick: () => {
              l()({
                paymentAmount: Number(e)
              });
              ae(String(e));
              u(false);
            },
            size: "small",
            children: (0, U.jsx)(I.Z, {
              currency: a,
              render: (e, n) => (0, U.jsxs)(U.Fragment, {
                children: [e, F.qD, n]
              }),
              children: e
            })
          }, e))
        })]
      });
      const me = (0, U.jsx)(S.o, {
        type: oe ? "horizontal" : "vertical",
        primaryActions: (0, U.jsxs)(U.Fragment, {
          children: [oe && (0, U.jsx)(C.z, {
            mode: "secondary",
            style: "accent",
            onClick: () => {
              p()({
                buttonName: "cancel",
                paymentAmount: Number(ne)
              });
              le();
            },
            children: e[X.cancel]
          }), (0, U.jsx)(C.z, {
            mode: "primary",
            style: "accent",
            disabled: B,
            loading: B,
            onClick: () => {
              if (ne) {
                p()({
                  buttonName: "payment",
                  paymentAmount: Number(ne)
                });
              }
              if (n) {
                (async (e, n) => {
                  var a;
                  if ((a = te.current) !== null && a !== undefined) {
                    a.call(te);
                  }
                  if (!n) {
                    u(z.Required);
                    return;
                  }
                  if (Number(n) < Q) {
                    u(z.MinValue);
                    return;
                  }
                  const t = new (i().CancelToken)(e => {
                    te.current = e;
                  });
                  try {
                    O(true);
                    const a = await q._i.post("/shards/employer/clickme_replenishment", {
                      amount: n,
                      accountId: e,
                      purchaseParams: {
                        source: "clickmeReplenishment"
                      }
                    }, {
                      cancelToken: t
                    });
                    (0, H.Cx)();
                    ie(a.data.purchaseUrl);
                  } catch (e) {
                    if (q._i.isCancel(e)) {
                      return;
                    }
                    se(L.Z);
                    O(false);
                  }
                })(n, ne);
              }
            },
            children: e[X.purchase]
          })]
        })
      });
      const pe = (0, U.jsx)(P.Cs7, {
        padding: 8,
        initialColor: "secondary",
        onClick: le
      });
      const ue = (0, M.Xf)() ? e[X.title.clickme] : e[X.title.topSearch];
      if (oe) {
        return (0, U.jsx)(k.u, {
          visible: s,
          onClose: le,
          size: "small",
          title: ue,
          titleSize: "medium",
          actions: pe,
          footer: me,
          ref: re,
          children: de
        });
      } else {
        return (0, U.jsx)(w.R, {
          visible: s,
          header: (0, U.jsx)(N.N, {
            children: (0, U.jsx)(E.h, {
              children: (0, U.jsx)(A.e, {
                centered: true,
                left: true,
                right: pe,
                children: (0, U.jsx)(R.c, {
                  title: (0, U.jsx)(v.x, {
                    typography: "title-5-semibold",
                    ellipsis: true,
                    children: ue
                  })
                })
              })
            })
          }),
          onClose: le,
          footer: me,
          ref: re,
          children: de
        });
      }
    };
    O.displayName = "components/Clickme/ClickmeReplenishmentModal/ClickmeReplenishmentModal";
    const Z = (0, B.x)(O);
  },
  290069: function (e, n, a) {
    a.d(n, {
      _: () => N,
      v: () => j
    });
    var t = a(394280);
    var s = a(491606);
    var i = a(563457);
    var r = a.n(i);
    var o = a(543334);
    var l = a.n(o);
    var c = a(15275);
    var d = a.n(c);
    var m = a(452528);
    var p = a.n(m);
    var u = a(257549);
    var h = a.n(u);
    var x = a(599998);
    var y = a(846192);
    var g = a(255717);
    const v = "additional-check-logo--rJvbS0azwcHbva5Z";
    var b = a(343856);
    const j = () => (0, y.do)() ? "https://rabota.by/article/33433" : "https://feedback.hh.ru/knowledge-base/article/0522";
    const f = "additionalCheck.title";
    const _ = "additionalCheck.warning";
    const S = "additionalCheck.waiting";
    const C = "additionalCheck.article";
    const k = "additionalCheck.skip";
    const w = ({
      trls: e
    }) => {
      const [n, a] = (0, t.useState)(false);
      const o = j();
      const m = () => {
        a(false);
        (async () => {
          await g._i.delete("/employer/additional_check", {
            params: {}
          });
        })();
      };
      (0, t.useEffect)(() => a(true), [a]);
      return (0, b.jsx)(b.Fragment, {
        children: (0, b.jsxs)(d(), {
          "data-qa": "additional-check-modal",
          visible: n,
          onClose: () => m(),
          children: [(0, b.jsx)(h(), {
            base: 2
          }), (0, b.jsx)("div", {
            className: v
          }), (0, b.jsx)(c.ModalTitle, {
            children: e[f]
          }), (0, b.jsx)(h(), {
            base: 4
          }), (0, b.jsxs)(c.ModalContent, {
            children: [(0, b.jsx)(p(), {
              children: e[_]
            }), (0, b.jsx)(h(), {
              base: 2
            }), (0, b.jsx)(p(), {
              children: e[S]
            })]
          }), (0, b.jsxs)(c.ModalFooter, {
            children: [(0, b.jsx)(r(), {
              "data-qa": "additional-check-modal-button-link",
              to: o,
              Element: s.SPALink,
              onClick: () => m(),
              children: e[C]
            }), (0, b.jsx)(l(), {
              base: 2
            }), (0, b.jsx)(r(), {
              "data-qa": "additional-check-modal-button-close",
              kind: i.ButtonKind.Primary,
              onClick: () => m(),
              children: e[k]
            })]
          })]
        })
      });
    };
    w.displayName = "Employer/AdditionalCheck/index/AdditionalCheckComponent";
    const N = (0, x.x)(w);
  },
  348016: function (e, n, a) {
    a.d(n, {
      Z: () => C
    });
    var t = a(859716);
    var s = a(105160);
    var i = a(118450);
    var r = a(514447);
    var o = a(50841);
    var l = a(459465);
    var c = a(645613);
    var d = a(193440);
    var m = a(202187);
    var p = a(530536);
    var u = a(553622);
    var h = a(599998);
    var x = a(342694);
    var y = a(343856);
    const g = "employer.index.advicesWidget.expiringResumeAccesses.prolong.button";
    const v = "employer.index.advicesWidget.expiringResumeAccessesNew.single.expired";
    const b = "employer.index.advicesWidget.expiringResumeAccessesNew.single.expired.end";
    const j = "employer.index.advicesWidget.expiringResumeAccessesNew.multiple";
    const f = "employer.index.advicesWidget.expiringResumeAccessesNew.multiple.expired.end";
    const _ = "employer.index.advicesWidget.show.button";
    const S = ({
      trls: e,
      name: n,
      data: {
        resumeAccesses: a
      },
      type: h
    }) => {
      const S = a.length > 1;
      const {
        handleServiceProlongClick: C,
        isLoading: k,
        isModalOpen: w,
        handleCloseModal: N
      } = (0, u.C)(n, a);
      const {
        handleCloseAdvice: E
      } = (0, p.i)();
      const A = (() => {
        const n = h === x.M.BANNER ? "paragraph-2-regular" : "title-5-semibold";
        let i = "";
        i = S ? e[j] : e[v];
        return (0, t.WU)(i, {
          "{0}": (0, y.jsx)(s.x, {
            typography: n,
            Element: "span",
            style: "negative",
            children: e[b]
          }),
          "{area}": (0, y.jsx)(s.x, {
            typography: n,
            Element: "span",
            children: a[0].areaTrl
          }),
          "{period}": (0, y.jsx)(s.x, {
            typography: n,
            Element: "span",
            children: (0, y.jsx)(d.J, {
              period: a[0].period
            })
          }),
          "{multipleEnd}": (0, y.jsx)(s.x, {
            typography: n,
            Element: "span",
            style: "negative",
            children: e[f]
          })
        });
      })();
      const R = h === x.M.BANNER ? (0, y.jsx)(r.E, {
        button: (0, y.jsx)(i.z, {
          "data-qa": `advices-button-${n}`,
          size: "large",
          onClick: C,
          stretched: true,
          loading: k,
          mode: "primary",
          children: e[S ? _ : g]
        }),
        name: n,
        style: (0, o.J)({
          isVeryLow: false,
          isZero: true
        }),
        children: A
      }) : (0, y.jsx)(l.Z, {
        name: n,
        onCloseClick: () => E(n, a),
        button: (0, y.jsx)(i.z, {
          "data-qa": `advices-button-${n}`,
          size: "small",
          onClick: C,
          loading: k,
          stretched: true,
          ...(0, m.A)({
            isVeryLow: false,
            isZero: true
          }),
          children: e[S ? _ : g]
        }),
        children: A
      });
      return (0, y.jsxs)(y.Fragment, {
        children: [R, (0, y.jsx)(c.P, {
          isOpen: w,
          onClose: N,
          isExpired: true,
          resumeAccesses: a,
          adviceName: n
        })]
      });
    };
    S.displayName = "advices/ExpiredResumeAccessesNew/index/ExpiredResumeAccessesNew";
    const C = (0, h.x)(S);
  },
  293146: function (e, n, a) {
    a.d(n, {
      k: () => ee
    });
    var t = a(940389);
    var s = a(999396);
    var i = a.n(s);
    var r = a(941545);
    var o = a(859716);
    var l = a(491606);
    var c = a(640569);
    var d = a(118450);
    var m = a(842953);
    var p = a(52606);
    var u = a(226453);
    var h = a(514447);
    var x = a(459465);
    var y = a(96619);
    var g = a(360205);
    var v = a(76336);
    var b = a(342694);
    var j = a(325423);
    var f = a(601464);
    var _ = a.n(f);
    var S = a(36074);
    var C = a(105160);
    var k = a(922366);
    var w = a(574015);
    var N = a(122060);
    var E = a(454386);
    var A = a(648695);
    var R = a(594766);
    var P = a(914357);
    var T = a(559123);
    var I = a(674070);
    var L = a(343856);
    const W = "employer.index.advicesWidget.expiringPublications.modal.description";
    const B = {
      one: "employer.index.advicesWidget.expiringPublications.modal.description.bullets.one",
      two: "employer.index.advicesWidget.expiringPublications.modal.description.bullets.two",
      three: "employer.index.advicesWidget.expiringPublications.modal.description.bullets.three"
    };
    const M = "employer.index.advicesWidget.expiringPublications.modal.button";
    const V = ({
      trls: e,
      title: n,
      visible: a,
      onClose: t,
      card: s
    }) => {
      const {
        isMobile: i
      } = (0, S.G)();
      const r = (0, L.jsxs)(L.Fragment, {
        children: [(0, L.jsx)(C.x, {
          typography: "paragraph-1-regular",
          children: e[W]
        }), (0, L.jsx)(k.X, {
          default: 8
        }), (0, L.jsx)(w.G, {
          children: Object.entries(B).map(([n, a]) => (0, L.jsx)(C.x, {
            typography: "paragraph-1-regular",
            children: e[a]
          }, n))
        }), (0, L.jsx)(k.X, {
          default: 12
        })]
      });
      const o = (0, L.jsx)(N.o, {
        padding: 12,
        type: "vertical",
        secondaryActions: (0, L.jsx)(d.z, {
          "data-qa": "expiring-publications-modal-button",
          to: u.Z.employerVacancies,
          Element: l.SPALink,
          onClick: () => {
            _()({
              card: s
            });
          },
          mode: "secondary",
          style: "accent",
          stretched: true,
          children: e[M]
        })
      });
      if (i) {
        return (0, L.jsx)(E.R, {
          visible: a,
          onClose: t,
          footer: o,
          header: (0, L.jsx)(A.N, {
            children: (0, L.jsx)(R.h, {
              children: (0, L.jsx)(P.D, {
                Element: "h2",
                size: "medium",
                children: n
              })
            })
          }),
          children: r
        });
      } else {
        return (0, L.jsx)(T.u, {
          size: "medium",
          titleSize: "medium",
          actions: (0, L.jsx)(I.Cs7, {
            "data-qa": "acts-mail-modal-close",
            initialColor: "secondary",
            onClick: t
          }),
          title: n,
          visible: a,
          onClose: t,
          footer: o,
          children: r
        });
      }
    };
    V.displayName = "advices/ExpiringPublications/ExpiringPublicationsModal/ExpiringPublicationsModalComponent";
    const D = (0, c.Z)(V);
    const F = "highlight-negative--gxmYNWIGKP4kYKZ2";
    const H = "highlight-warning--RNUX9O4lB01Wqacb";
    const q = {
      expiring_publications_today: "employer_expiring_publications_advice_today",
      expiring_publications_tomorrow: "employer_expiring_publications_advice_tomorrow",
      expiring_publications_soon: "employer_expiring_publications_advice_soon"
    };
    const U = "employer.index.advicesWidget.expiringPublications.button";
    const X = "employer.index.advicesWidget.expiringPublications.buttonMore";
    const z = {
      one: "employer.index.advicesWidget.expiringPublications.text.publications.one",
      some: "employer.index.advicesWidget.expiringPublications.text.publications.some",
      many: "employer.index.advicesWidget.expiringPublications.text.publications.many"
    };
    const O = {
      single: "employer.index.advicesWidget.expiringPublications.text.publications.expire.single",
      multiple: "employer.index.advicesWidget.expiringPublications.text.publications.expire.multiple"
    };
    const Z = {
      single: "employer.index.advicesWidget.expiringPublications.text.publications.pronoun.single",
      multiple: "employer.index.advicesWidget.expiringPublications.text.publications.pronoun.multiple"
    };
    const Y = {
      soon: "employer.index.advicesWidget.expiringPublications.text.soon",
      tomorrow: "employer.index.advicesWidget.expiringPublications.text.tomorrow",
      today: "employer.index.advicesWidget.expiringPublications.text.today"
    };
    const G = "employer.index.advicesWidget.expiringPublications.link";
    const $ = e => e === "expiring_publications_today" || e === "expiring_publications_tomorrow" ? "negative-secondary" : "warning-secondary";
    const Q = e => e === "expiring_publications_today" || e === "expiring_publications_tomorrow" ? F : H;
    const J = e => e === "expiring_publications_today" || e === "expiring_publications_tomorrow" ? {
      mode: "primary",
      style: "negative"
    } : {
      mode: "secondary",
      style: "neutral"
    };
    const K = ({
      trls: e,
      name: n,
      data: {
        count: a,
        canCreateVacancy: s
      },
      type: c
    }) => {
      const f = (0, y.F)(n);
      const _ = (0, t.useDispatch)();
      const [S, C] = (0, g.l)(false);
      const k = {
        "{expire}": (0, L.jsx)("span", {
          className: Q(n),
          children: (0, L.jsx)(r.q, {
            hasValue: false,
            one: e[O.single],
            some: e[O.multiple],
            many: e[O.multiple],
            value: a
          })
        }),
        "{amount}": (0, L.jsx)("span", {
          className: Q(n),
          children: (0, L.jsx)(r.q, {
            hasValue: true,
            one: e[z.one],
            some: e[z.some],
            many: e[z.many],
            value: a
          })
        }),
        "{pronoun}": (0, L.jsx)(r.q, {
          hasValue: false,
          one: e[Z.single],
          some: e[Z.multiple],
          many: e[Z.multiple],
          value: a
        })
      };
      const w = () => n === "expiring_publications_today" ? (0, o.WU)(e[Y.today], k) : n === "expiring_publications_tomorrow" ? (0, o.WU)(e[Y.tomorrow], k) : (0, o.WU)(e[Y.soon], k);
      const N = c === b.M.BANNER ? (0, L.jsxs)(h.E, {
        isOverCard: true,
        button: s ? (0, L.jsx)(d.z, {
          Element: l.SPALink,
          to: u.Z.vacancyCreate,
          "data-qa": `advices-button-${n}`,
          onClick: f,
          size: "large",
          stretched: true,
          mode: "primary",
          children: e[U]
        }) : undefined,
        name: n,
        style: $(n),
        children: [w(), ".", j.T4, (0, L.jsx)(m.r, {
          "data-qa": "expiring-advice-info-link",
          inline: true,
          onClick: () => {
            C();
            i()({
              card: n
            });
          },
          children: e[G]
        })]
      }) : (0, L.jsx)(x.Z, {
        name: n,
        onCloseClick: () => {
          _((0, v.D)(n));
          p.default.markAsViewed(q[n]);
        },
        button: (0, L.jsx)(d.z, {
          "data-qa": `advices-button-${n}`,
          size: "small",
          stretched: true,
          onClick: () => {
            C();
            f();
          },
          ...J(n),
          children: e[X]
        }),
        children: w()
      });
      return (0, L.jsxs)(L.Fragment, {
        children: [N, (0, L.jsx)(D, {
          title: w(),
          visible: S,
          onClose: C,
          card: n
        })]
      });
    };
    K.displayName = "advices/ExpiringPublications/index/ExpiringPublicationsAdviceComponent";
    const ee = (0, c.Z)(K);
  },
  761102: function (e, n, a) {
    a.d(n, {
      Z: () => E
    });
    var t = a(692300);
    var s = a(859716);
    var i = a(105160);
    var r = a(118450);
    var o = a(514447);
    var l = a(50841);
    var c = a(459465);
    var d = a(348958);
    var m = a(645613);
    var p = a(193440);
    var u = a(202187);
    var h = a(530536);
    var x = a(553622);
    var y = a(599998);
    var g = a(342694);
    var v = a(343856);
    const b = "employer.index.advicesWidget.expiringResumeAccesses.prolong.button";
    const j = "employer.index.advicesWidget.expiringResumeAccessesNew.single.soon";
    const f = "employer.index.advicesWidget.expiringResumeAccessesNew.single.verySoon";
    const _ = "employer.index.advicesWidget.expiringResumeAccessesNew.single.verySoon.end";
    const S = "employer.index.advicesWidget.expiringResumeAccessesNew.single.soon.end";
    const C = "employer.index.advicesWidget.expiringResumeAccessesNew.multiple";
    const k = "employer.index.advicesWidget.expiringResumeAccessesNew.multiple.expiring.end";
    const w = "employer.index.advicesWidget.show.button";
    const N = ({
      trls: e,
      name: n,
      data: {
        resumeAccesses: a
      },
      type: y
    }) => {
      const N = (0, t.Z)(new Date(a[0].expirationTime), new Date());
      const E = N <= 1;
      const A = a.length > 1;
      const {
        handleServiceProlongClick: R,
        isLoading: P,
        isModalOpen: T,
        handleCloseModal: I
      } = (0, x.C)(n, a);
      const {
        handleCloseAdvice: L
      } = (0, h.i)();
      const W = (() => {
        const n = (0, v.jsx)(d.Z, {
          days: N
        });
        const t = y === g.M.BANNER ? "paragraph-2-regular" : "title-5-semibold";
        let r = "";
        r = A ? e[C] : E ? e[f] : e[j];
        const o = E ? "negative" : "warning";
        const l = E ? e[_] : e[S];
        return (0, s.WU)(r, {
          "{when}": (0, v.jsx)(i.x, {
            typography: t,
            Element: "span",
            style: o,
            children: n
          }),
          "{0}": (0, v.jsx)(i.x, {
            typography: t,
            Element: "span",
            style: o,
            children: l
          }),
          "{area}": (0, v.jsx)(i.x, {
            typography: t,
            Element: "span",
            children: a[0].areaTrl
          }),
          "{period}": (0, v.jsx)(i.x, {
            typography: t,
            Element: "span",
            children: (0, v.jsx)(p.J, {
              period: a[0].period
            })
          }),
          "{multipleEnd}": (0, v.jsx)(i.x, {
            typography: t,
            Element: "span",
            style: "warning",
            children: e[k]
          })
        });
      })();
      const B = E && !A;
      const M = y === g.M.BANNER ? (0, v.jsx)(o.E, {
        button: (0, v.jsx)(r.z, {
          "data-qa": `advices-button-${n}`,
          size: "large",
          onClick: R,
          stretched: true,
          loading: P,
          mode: "primary",
          children: e[A ? w : b]
        }),
        name: n,
        style: (0, l.J)({
          isVeryLow: B
        }),
        children: W
      }) : (0, v.jsx)(c.Z, {
        name: n,
        onCloseClick: () => L(n, a),
        button: (0, v.jsx)(r.z, {
          "data-qa": `advices-button-${n}`,
          size: "small",
          onClick: R,
          stretched: true,
          loading: P,
          ...(0, u.A)({
            isVeryLow: E && !A
          }),
          children: e[A ? w : b]
        }),
        children: W
      });
      return (0, v.jsxs)(v.Fragment, {
        children: [M, (0, v.jsx)(m.P, {
          adviceName: n,
          isOpen: T,
          onClose: I,
          isExpired: false,
          resumeAccesses: a
        })]
      });
    };
    N.displayName = "advices/ExpiringResumeAccessesNew/index/ExpiringResumeAccessesNew";
    const E = (0, y.x)(N);
  },
  785182: function (e, n, a) {
    a.d(n, {
      Z: () => S
    });
    var t = a(941545);
    var s = a(859716);
    var i = a(491606);
    var r = a(36074);
    var o = a(105160);
    var l = a(118450);
    var c = a(514447);
    var d = a(459465);
    var m = a(96619);
    var p = a(599998);
    var u = a(342694);
    var h = a(343856);
    const x = "employer.index.advicesWidget.unusedPublications.text";
    const y = "employer.index.advicesWidget.unusedPublications.text.many";
    const g = "employer.index.advicesWidget.unusedPublications.text.single";
    const v = "employer.index.advicesWidget.unusedPublications.one";
    const b = "employer.index.advicesWidget.unusedPublications.some";
    const j = "employer.index.advicesWidget.unusedPublications.many";
    const f = "employer.index.advicesWidget.unusedPublications.button";
    const _ = ({
      trls: e,
      name: n,
      data: {
        publicationsCount: a
      },
      type: p
    }) => {
      const {
        isS: _
      } = (0, r.G)();
      const S = (0, m.F)(n);
      const C = p === u.M.BANNER;
      const k = (0, h.jsx)(t.q, {
        one: e[v],
        some: e[b],
        many: e[j],
        value: a,
        hasValue: true
      });
      const w = C ? (0, h.jsx)(o.x, {
        typography: "subtitle-1-semibold",
        Element: "span",
        children: k
      }) : (0, h.jsx)(o.x, {
        typography: "title-5-semibold",
        Element: _ ? "span" : "div",
        style: "accent",
        children: k
      });
      const N = (0, s.WU)(e[x], {
        "{0}": w,
        "{1}": a === 1 ? e[g] : e[y]
      });
      if (C) {
        return (0, h.jsx)(c.E, {
          name: n,
          button: (0, h.jsx)(l.z, {
            onClick: S,
            Element: i.SPALink,
            to: "/employer/vacancy/create",
            size: "large",
            "data-qa": "advices-button",
            stretched: true,
            mode: "primary",
            style: "accent",
            children: e[f]
          }),
          style: "accent-secondary",
          children: N
        });
      } else {
        return (0, h.jsx)(d.Z, {
          name: n,
          button: (0, h.jsx)(l.z, {
            onClick: S,
            Element: i.SPALink,
            to: "/employer/vacancy/create",
            size: "small",
            "data-qa": "advices-button",
            stretched: true,
            mode: "primary",
            style: "accent",
            children: e[f]
          }),
          children: N
        });
      }
    };
    _.displayName = "advices/UnusedPublications/index/UnusedPublications";
    const S = (0, p.x)(_);
  },
  974001: function (e, n, a) {
    a.d(n, {
      Z: () => _
    });
    var t = a(491606);
    var s = a(859716);
    var i = a(941545);
    var r = a(118450);
    var o = a(105160);
    var l = a(922366);
    var c = a(226453);
    var d = a(514447);
    var m = a(459465);
    var p = a(96619);
    var u = a(599998);
    var h = a(342694);
    var x = a(343856);
    const y = "employer.index.advicesWidget.waitActivation";
    const g = "employer.index.advicesWidget.waitActivation.highlighted";
    const v = "employer.index.advicesWidget.waitActivation.button";
    const b = {
      titleOne: "employer.index.advicesWidget.waitActivation.banner.title.one",
      titleMany: "employer.index.advicesWidget.waitActivation.banner.title.many",
      subtitleOne: "employer.index.advicesWidget.waitActivation.banner.subtitle.one",
      subtitleMany: "employer.index.advicesWidget.waitActivation.banner.subtitle.many"
    };
    const j = {
      one: "employer.index.advicesWidget.services.one",
      some: "employer.index.advicesWidget.services.some",
      many: "employer.index.advicesWidget.services.many"
    };
    const f = ({
      trls: e,
      name: n,
      type: a,
      data: {
        readyToActivateCount: u
      }
    }) => {
      const f = (0, p.F)(n);
      if (a === h.M.BANNER) {
        const a = u === 1 ? {
          title: b.titleOne,
          subtitle: b.subtitleOne
        } : {
          title: b.titleMany,
          subtitle: b.subtitleMany
        };
        return (0, x.jsxs)(d.E, {
          isOverCard: false,
          button: (0, x.jsx)(r.z, {
            "data-qa": `advices-button-${n}`,
            size: "large",
            onClick: f,
            stretched: true,
            mode: "primary",
            Element: t.SPALink,
            to: c.Z.employerCarts,
            children: e[v]
          }),
          name: n,
          style: "negative-secondary",
          children: [(0, x.jsx)(o.x, {
            typography: "title-4-semibold",
            children: (0, s.WU)(e[a.title], {
              "{services}": (0, x.jsx)(i.q, {
                one: e[j.one],
                some: e[j.some],
                many: e[j.many],
                value: u,
                hasValue: true
              })
            })
          }), (0, x.jsx)(l.X, {
            default: 2
          }), (0, x.jsx)(o.x, {
            typography: "label-2-regular",
            style: "secondary",
            children: e[a.subtitle]
          })]
        });
      }
      return (0, x.jsx)(m.Z, {
        name: n,
        button: (0, x.jsx)(r.z, {
          onClick: f,
          Element: t.SPALink,
          to: c.Z.employerCarts,
          size: "small",
          stretched: true,
          "data-qa": "advices-button",
          mode: "secondary",
          style: "negative",
          children: e[v]
        }),
        children: (0, s.WU)(e[y], {
          "{highlighted}": (0, x.jsx)(o.x, {
            typography: "title-5-semibold",
            Element: "span",
            style: "negative",
            children: e[g]
          })
        })
      });
    };
    f.displayName = "advices/WaitActivation/index/WaitActivation";
    const _ = (0, u.x)(f);
  },
  562956: function (e, n, a) {
    a.d(n, {
      Z: () => b
    });
    var t = a(491606);
    var s = a(859716);
    var i = a(941545);
    var r = a(118450);
    var o = a(105160);
    var l = a(922366);
    var c = a(226453);
    var d = a(514447);
    var m = a(459465);
    var p = a(96619);
    var u = a(599998);
    var h = a(846192);
    var x = a(342694);
    var y = a(343856);
    const g = {
      text: "employer.index.advicesWidget.waitPayment",
      highlighted: "employer.index.advicesWidget.waitPayment.highlighted",
      button: "employer.index.advicesWidget.waitPayment.button",
      banner: {
        titleOne: "employer.index.advicesWidget.waitPayment.banner.title.one",
        titleMany: "employer.index.advicesWidget.waitPayment.banner.title.many",
        subtitle: "employer.index.advicesWidget.waitPayment.banner.subtitle"
      },
      services: {
        one: "employer.index.advicesWidget.services.one",
        some: "employer.index.advicesWidget.services.some",
        many: "employer.index.advicesWidget.services.many"
      },
      zpOptions: {
        one: "employer.balance.tab.money.zp.options.one",
        some: "employer.balance.tab.money.zp.options.some",
        many: "employer.balance.tab.money.zp.options.many"
      }
    };
    const v = ({
      trls: e,
      name: n,
      type: a,
      data: {
        unpaidCount: u
      }
    }) => {
      const v = (0, h.$w)();
      const b = (0, p.F)(n);
      const j = v ? g.zpOptions : g.services;
      if (a === x.M.BANNER) {
        return (0, y.jsxs)(d.E, {
          isOverCard: false,
          button: (0, y.jsx)(r.z, {
            "data-qa": `advices-button-${n}`,
            size: "large",
            onClick: b,
            stretched: true,
            mode: "primary",
            Element: t.SPALink,
            to: c.Z.employerUnpaidCarts,
            children: e[g.button]
          }),
          name: n,
          style: "negative-secondary",
          children: [(0, y.jsx)(o.x, {
            typography: "title-4-semibold",
            children: (0, s.WU)(e[u === 1 ? g.banner.titleOne : g.banner.titleMany], {
              "{services}": (0, y.jsx)(i.q, {
                one: e[j.one],
                some: e[j.some],
                many: e[j.many],
                value: u,
                hasValue: true
              })
            })
          }), (0, y.jsx)(l.X, {
            default: 2
          }), (0, y.jsx)(o.x, {
            typography: "label-2-regular",
            style: "secondary",
            children: e[g.banner.subtitle]
          })]
        });
      } else {
        return (0, y.jsx)(m.Z, {
          name: n,
          button: (0, y.jsx)(r.z, {
            onClick: b,
            Element: t.SPALink,
            to: c.Z.employerUnpaidCarts,
            size: "small",
            stretched: true,
            "data-qa": "advices-button",
            mode: "secondary",
            style: "neutral",
            children: e[g.button]
          }),
          children: (0, s.WU)(e[g.text], {
            "{highlighted}": (0, y.jsx)(o.x, {
              typography: "title-5-semibold",
              Element: "span",
              style: "warning",
              children: e[g.highlighted]
            })
          })
        });
      }
    };
    v.displayName = "advices/WaitPayment/index/WaitPayment";
    const b = (0, u.x)(v);
  },
  50841: function (e, n, a) {
    a.d(n, {
      J: () => t
    });
    const t = ({
      isVeryLow: e,
      isZero: n
    }) => n || e ? "negative-secondary" : "warning-secondary";
  },
  514447: function (e, n, a) {
    a.d(n, {
      E: () => j
    });
    var t = a(882177);
    var s = a.n(t);
    var i = a(791256);
    var r = a.n(i);
    var o = a(136361);
    var l = a(910182);
    var c = a(105160);
    const d = "container--sp4RNXteGhciXTW5";
    const m = "content-over--yEVA8FO5QDMjZ2Q3";
    const p = "negative-secondary--nXVB8riwXAOZCJ0h";
    const u = "warning-secondary--G4WbOw3Cdtkg9PeD";
    const h = "accent-secondary--KV0k3rAM8AK96glN";
    const x = "content--aV6X_jX2OhEKJVJj";
    const y = "content-left--o1JfLVQ6ghMyMn5u";
    const g = "content-right--sR9EEpqKUusElJTR";
    var v = a(343856);
    const b = {
      "negative-secondary": p,
      "warning-secondary": u,
      "accent-secondary": h
    };
    const j = ({
      children: e,
      button: n,
      name: a,
      style: t,
      isOverCard: p = true
    }) => (0, v.jsxs)(i.ElementShownAnchor, {
      fn: r().sendHHEventElementShown,
      name: "advices_widget_card",
      card: a,
      className: d,
      children: [(0, v.jsx)(o.Z, {
        "data-qa": `advices_${a}`,
        borderRadius: 24,
        padding: 24,
        stretched: true,
        borderWidth: "none",
        style: t,
        children: (0, v.jsx)(l.m, {
          layer: "content",
          children: (0, v.jsxs)("div", {
            className: x,
            children: [(0, v.jsx)("div", {
              className: y,
              children: (0, v.jsx)(c.x, {
                typography: "paragraph-2-regular",
                children: e
              })
            }), (0, v.jsx)("div", {
              className: g,
              children: n
            })]
          })
        })
      }), p && (0, v.jsx)("div", {
        className: s()(m, t in b && b[t])
      })]
    });
    j.displayName = "components/AdviceBanner/index/AdviceBanner";
  },
  459465: function (e, n, a) {
    a.d(n, {
      Z: () => S
    });
    var t = a(394280);
    var s = a(882177);
    var i = a.n(s);
    var r = a(791256);
    var o = a.n(r);
    var l = a(136361);
    var c = a(105160);
    var d = a(922366);
    var m = a(674070);
    var p = a(599998);
    var u = a(997801);
    var h = a(594948);
    const x = "text--CgkoMK8tThQERaEx";
    const y = "text-without-padding--Ld4X3Mxxw64zpiPV";
    const g = "card-container--Q2Jcwyx2toYDZN6P";
    const v = "card-container-multiple--kKhM2kXWQC4CLPls";
    const b = "card-content--vMu90Itxh5Y7MARH";
    const j = "close-icon-container--h9XzVEGOVYkrQiIZ";
    var f = a(343856);
    const _ = ({
      children: e,
      button: n,
      name: a,
      onCloseClick: s,
      withoutTextPadding: r
    }) => {
      const p = (0, h.v)(e => {
        return e.employerAdvicesWidget.advices?.length > 1;
      });
      const _ = (0, t.useRef)(null);
      const S = (0, t.useRef)(false);
      const C = (0, u.Y)(() => {
        if (!S.current) {
          o().sendHHEvent("element_shown", {
            elementName: "advices_widget_card",
            card: a
          });
          S.current = true;
        }
      });
      return (0, f.jsx)("div", {
        "data-qa": `advices_${a}`,
        ref: _,
        className: i()(g, {
          [v]: p
        }),
        children: (0, f.jsxs)(l.Z, {
          "data-qa": "advices_card",
          verticalStretched: true,
          borderWidth: "default",
          padding: 12,
          borderRadius: 24,
          stretched: true,
          children: [(0, f.jsxs)("div", {
            ref: C,
            className: b,
            children: [(0, f.jsx)("div", {
              className: i()(x, {
                [y]: r
              }),
              children: (0, f.jsx)(c.x, {
                typography: "title-5-semibold",
                children: e
              })
            }), n && (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(d.X, {
                default: 6
              }), n]
            })]
          }), s && (0, f.jsx)("div", {
            "data-qa": "advices_card-close-container",
            className: j,
            children: (0, f.jsx)(m.mTT, {
              "data-qa": "advices_card-close",
              initialColor: "secondary",
              padding: 8,
              onClick: () => {
                if (s != null) {
                  s();
                }
                o().sendHHEventButtonClick("advices_widget_card_close", {
                  card: a
                });
              }
            })
          })]
        })
      });
    };
    _.displayName = "components/AdviceCard/index/AdviceCard";
    const S = (0, p.x)(_);
  },
  348958: function (e, n, a) {
    a.d(n, {
      Z: () => p
    });
    var t = a(941545);
    var s = a(599998);
    const i = "capitalize--PKRQ7LC_2wommJYR";
    var r = a(343856);
    const o = "employer.index.advicesWidget.today";
    const l = "employer.index.advicesWidget.tomorrow";
    const c = "employer.index.advicesWidget.days.some";
    const d = "employer.index.advicesWidget.days.many";
    const m = ({
      days: e,
      trls: n,
      capitalize: a
    }) => (0, r.jsx)(t.q, {
      zero: n[o],
      one: n[l],
      some: n[c],
      many: n[d],
      value: e,
      hasValue: e > 1,
      format: a ? e => (0, r.jsx)("span", {
        className: i,
        children: e
      }) : undefined
    });
    m.displayName = "components/DaysLeftText/index/DaysLeftText";
    const p = (0, s.x)(m);
  },
  645613: function (e, n, a) {
    a.d(n, {
      P: () => H
    });
    var t = a(791256);
    var s = a.n(t);
    var i = a(491606);
    var r = a(640569);
    var o = a(122060);
    var l = a(118450);
    var c = a(559123);
    var d = a(105160);
    var m = a(454386);
    var p = a(228709);
    var u = a(674070);
    var h = a(303817);
    var x = a(692300);
    var y = a(3797);
    var g = a(859716);
    var v = a(922366);
    var b = a(193440);
    var j = a(720278);
    const f = "container--prsOrbRTA_Yu3Z6b";
    const _ = "item--LBUb2ghBftAZzAHr";
    var S = a(343856);
    const C = "employer.index.advicesWidget.expiringResumeAccessesNew.modal.date.to";
    const k = "billing_professional_role_group.0";
    const w = ({
      trls: e,
      resumeAccesses: n,
      prices: a
    }) => (0, S.jsx)("div", {
      className: f,
      children: n.map(n => {
        const t = new Date(n.expirationTime);
        const s = (0, x.Z)(t, new Date()) < 3;
        const i = n.profRoleGroupIdsTrl.length ? n.profRoleGroupIdsTrl : n.professionIdsTrl;
        const r = a.find(e => e.productId === n.productId);
        return (0, S.jsxs)("div", {
          "data-qa": `resume_access-product-${n.productId}`,
          className: _,
          children: [(0, S.jsxs)("div", {
            children: [(0, S.jsx)(d.x, {
              "data-qa": "expiring-accesses-modal__area",
              typography: "subtitle-2-semibold",
              children: n.areaTrl
            }), (0, S.jsx)(v.X, {
              default: 4
            }), (0, S.jsx)(d.x, {
              "data-qa": "expiring-accesses-modal__prof-role",
              style: "secondary",
              typography: "label-3-regular",
              children: i.length ? i.join(", ") : e[k]
            }), (0, S.jsx)(v.X, {
              default: 2
            }), (0, S.jsx)(d.x, {
              "data-qa": "expiring-accesses-modal__expiration-date",
              style: s ? "negative" : "secondary",
              typography: "label-3-regular",
              children: (0, g.WU)(e[C], {
                "{date}": (0, y.Z)(t, "H:mm dd.MM.yyyy")
              })
            })]
          }), (0, S.jsxs)("div", {
            children: [r && (0, S.jsx)(d.x, {
              "data-qa": "expiring-accesses-modal__price",
              typography: "label-3-regular",
              children: (0, S.jsx)(j.Z, {
                inCents: true,
                currency: r == null ? undefined : r.currency,
                children: r == null ? undefined : r.price
              })
            }), (0, S.jsx)(v.X, {
              default: 4
            }), (0, S.jsx)(d.x, {
              "data-qa": "expiring-accesses-modal__period",
              style: "secondary",
              typography: "label-3-regular",
              children: (0, S.jsx)(b.J, {
                period: n.period
              })
            })]
          })]
        }, `${n.productId}-${n.expirationTime}`);
      })
    });
    w.displayName = "components/ExpiringAccessesModal/ExpiringAccessesModalContent/ExpiringAccessesModalContentComponent";
    const N = (0, r.Z)(w);
    var E = a(394280);
    var A = a(365128);
    var R = a(166122);
    var P = a(594948);
    var T = a(255717);
    const I = (e, n) => {
      const [a, t] = (0, E.useState)(false);
      const [s, i] = (0, E.useState)([]);
      const {
        addNotification: r
      } = (0, R.lm)();
      const o = (0, P.v)(e => e.backofficeEmployerId);
      (0, E.useEffect)(() => {
        const a = new AbortController();
        if (n) {
          t(true);
          T._i.get("/shards/price/get_price_by_product_ids", {
            params: {
              productId: e.map(e => e.productId),
              backofficeEmployerId: o
            },
            signal: a.signal
          }).then(e => {
            i(((e == null ? undefined : e.productPrices) || []).map(e => ({
              productId: e.product.productId.toString(),
              price: e.price,
              currency: e.currency
            })));
          }).catch(e => {
            if (!T._i.isCancel(e)) {
              (0, A.ZP)(e, r);
            }
          }).finally(() => {
            t(false);
          });
        }
        return () => {
          t(false);
          a.abort();
        };
      }, [n, e, r, o]);
      return {
        isLoading: a,
        prices: s
      };
    };
    const L = "/price/dbaccess";
    const W = "employer.index.advicesWidget.expiringResumeAccessesNew.modal.expired.title";
    const B = "employer.index.advicesWidget.expiringResumeAccessesNew.modal.expiring.title";
    const M = "employer.index.advicesWidget.expiringResumeAccessesNew.modal.expired.description";
    const V = "employer.index.advicesWidget.expiringResumeAccessesNew.modal.footer.auto";
    const D = "employer.index.advicesWidget.expiringResumeAccessesNew.modal.footer.manual";
    const F = ({
      trls: e,
      isOpen: n,
      onClose: a,
      isExpired: t,
      resumeAccesses: r,
      adviceName: x
    }) => {
      const y = (0, i.usePush)();
      const {
        addProductsToCart: g,
        isLoading: v
      } = (0, h.E)();
      const b = t ? e[W] : e[B];
      const {
        isLoading: j,
        prices: f
      } = I(r, n);
      const _ = (0, S.jsx)(u.Cs7, {
        "data-qa": "expiring-accesses-modal__button-close",
        onClick: a,
        initialColor: "secondary"
      });
      const C = (0, S.jsx)(N, {
        prices: f,
        resumeAccesses: r
      });
      const k = (0, S.jsx)(o.o, {
        type: "vertical",
        primaryActions: (0, S.jsx)(l.z, {
          loading: v || j,
          stretched: true,
          style: "accent",
          mode: "primary",
          size: "medium",
          onClick: async () => {
            s().sendHHEventButtonClick("advices_widget_card_modal_auto", {
              card: x
            });
            await g(r.map(e => e.productId));
            y(L);
          },
          "data-qa": "expiring-accesses-modal__button-auto",
          children: e[V]
        }),
        secondaryActions: (0, S.jsx)(l.z, {
          Element: i.SPALink,
          to: L,
          stretched: true,
          style: "accent",
          mode: "secondary",
          size: "medium",
          onClick: () => {
            s().sendHHEventButtonClick("advices_widget_card_modal_manual", {
              card: x
            });
          },
          "data-qa": "expiring-accesses-modal__button-manual",
          children: e[D]
        })
      });
      return (0, S.jsxs)(S.Fragment, {
        children: [(0, S.jsx)(c.u, {
          size: "small",
          actions: _,
          title: (0, S.jsx)(d.x, {
            typography: "title-4-semibold",
            children: b
          }),
          titleDescription: (0, S.jsx)(d.x, {
            style: "secondary",
            typography: "paragraph-2-regular",
            children: e[M]
          }),
          visible: n,
          footer: k,
          onClose: a,
          children: C
        }), (0, S.jsx)(m.R, {
          header: (0, S.jsx)(p.v, {
            subtitle: e[M],
            title: b,
            right: _
          }),
          visible: n,
          footer: k,
          onClose: a,
          children: C
        })]
      });
    };
    F.displayName = "components/ExpiringAccessesModal/index/ExpiringAccessesModalComponent";
    const H = (0, r.Z)(F);
  },
  193440: function (e, n, a) {
    a.d(n, {
      J: () => d
    });
    var t = a(941545);
    var s = a(599998);
    var i = a(343856);
    const r = "days.one.nom";
    const o = "days.some.nom";
    const l = "days.many.nom";
    const c = ({
      period: e,
      trls: n
    }) => (0, i.jsx)(t.q, {
      one: n[r],
      some: n[o],
      many: n[l],
      value: e,
      hasValue: true
    });
    c.displayName = "components/PeriodText/index/PeriodTextComponent";
    const d = (0, s.x)(c);
  },
  202187: function (e, n, a) {
    a.d(n, {
      A: () => t
    });
    const t = ({
      isVeryLow: e,
      isZero: n
    }) => n ? {
      style: "negative",
      mode: "primary"
    } : e ? {
      style: "negative",
      mode: "secondary"
    } : {
      style: "neutral",
      mode: "secondary"
    };
  },
  303817: function (e, n, a) {
    a.d(n, {
      E: () => l
    });
    var t = a(394280);
    var s = a(365128);
    var i = a(166122);
    var r = a(594948);
    var o = a(255717);
    const l = () => {
      const [e, n] = (0, t.useState)(false);
      const {
        addNotification: a
      } = (0, i.lm)();
      const l = (0, r.v)(e => e.backofficeEmployerId);
      return {
        addProductsToCart: async e => {
          n(true);
          try {
            await o._i.post("/shards/price/cart/add_by_product_id", {
              productIds: e,
              ignoreDuplicates: true
            }, {
              params: {
                backofficeEmployerId: l
              }
            });
          } catch (e) {
            (0, s.ZP)(e, a);
          } finally {
            n(false);
          }
        },
        isLoading: e
      };
    };
  },
  96619: function (e, n, a) {
    a.d(n, {
      F: () => r
    });
    var t = a(394280);
    var s = a(791256);
    var i = a.n(s);
    const r = (e, n = {}) => (0, t.useCallback)(() => {
      i().sendHHEventButtonClick("advices_widget_card", {
        card: e,
        ...n
      });
    }, [e, n]);
  },
  530536: function (e, n, a) {
    a.d(n, {
      i: () => l
    });
    var t = a(940389);
    var s = a(365128);
    var i = a(166122);
    var r = a(76336);
    var o = a(255717);
    const l = () => {
      const {
        addNotification: e
      } = (0, i.lm)();
      const n = (0, t.useDispatch)();
      return {
        handleCloseAdvice: async (a, t) => {
          try {
            const e = t.map(e => ({
              productId: e.productId,
              expirationTime: e.expirationTime
            }));
            await o._i.post("/shards/employer_advices/close_employer_advice", e, {
              params: {
                adviceName: a
              }
            });
            n((0, r.D)(a));
          } catch (n) {
            (0, s.ZP)(n, e);
          }
        }
      };
    };
  },
  553622: function (e, n, a) {
    a.d(n, {
      C: () => o
    });
    var t = a(394280);
    var s = a(491606);
    var i = a(303817);
    var r = a(96619);
    const o = (e, n) => {
      const a = (0, s.usePush)();
      const o = (0, r.F)(e, {
        action: n.length > 1 ? "modal" : "prolong"
      });
      const [l, c] = (0, t.useState)(false);
      const {
        addProductsToCart: d,
        isLoading: m
      } = (0, i.E)();
      return {
        handleServiceProlongClick: async () => {
          o();
          const e = n.map(e => e.productId);
          if (e.length > 1) {
            c(true);
          } else {
            await d(e);
            a("/price/dbaccess");
          }
        },
        isLoading: m,
        isModalOpen: l,
        handleCloseModal: () => {
          c(false);
        }
      };
    };
  },
  228249: function (e, n, a) {
    a.d(n, {
      Z: () => v
    });
    var t = a(394280);
    var s = a(882177);
    var i = a.n(s);
    var r = a(791256);
    var o = a.n(r);
    var l = a(318462);
    var c = a.n(l);
    var d = a(136361);
    var m = a(910182);
    var p = a(922366);
    var u = a(105160);
    var h = a(105163);
    const x = {
      "card-container": "card-container--XXZuN6xNWtEwCXKA",
      cardContainer: "card-container--XXZuN6xNWtEwCXKA",
      anchor: "anchor--DF9asGFOIMNhPIqX",
      container: "container--HiU639zDaeo2peaz",
      content: "content--RlS9EUomyUgHNXad",
      image: "image--f1_LVf2akkI959Zv",
      clickme: "clickme--bHc85LyVmRYHz9JM",
      "clickme-secondary": "clickme-secondary--u0TvT6LEUbfNVlTy",
      clickmeSecondary: "clickme-secondary--u0TvT6LEUbfNVlTy",
      "start-link": "start-link--qMu99w4joI0BtHLb",
      startLink: "start-link--qMu99w4joI0BtHLb",
      "hr-link": "hr-link--SEDR0cXHV2Q_HfV3",
      hrLink: "hr-link--SEDR0cXHV2Q_HfV3",
      skillaz: "skillaz--bpmae11TvEYNm1E7",
      "skillaz-secondary": "skillaz-secondary--JDtnIPsx67YB8K9I",
      skillazSecondary: "skillaz-secondary--JDtnIPsx67YB8K9I",
      pfp: "pfp--YeZMj8DT7VotahGU",
      efficiency: "efficiency--HAnz1zfXkDnscg2O",
      talantix: "talantix--Mm6Mfvzo8AkJs7at",
      "live-in-company": "live-in-company--xgbAPNllfeIL9mCg",
      liveInCompany: "live-in-company--xgbAPNllfeIL9mCg",
      "it-project": "it-project--HisAVETx9gkhWPq3",
      itProject: "it-project--HisAVETx9gkhWPq3",
      responses: "responses--Rp1RVdoOcQgIxggn",
      "brand-page": "brand-page--Jd_C7xSUY7UbNIrv",
      brandPage: "brand-page--Jd_C7xSUY7UbNIrv",
      "brand-vacancy": "brand-vacancy--M_0kPXxuNMAUkjJ4",
      brandVacancy: "brand-vacancy--M_0kPXxuNMAUkjJ4",
      "brand-snippet": "brand-snippet--gO2pfsMn41ANuwbz",
      brandSnippet: "brand-snippet--gO2pfsMn41ANuwbz",
      dreamjob: "dreamjob--l9WxRqEwp7AmZ6C0",
      branding: "branding--M2iFo4ZVMb8cwm0f",
      search: "search--hD12cARtQABmXuBS",
      "vacancy-standard-plus": "vacancy-standard-plus--VQInjhmezmghLVNK",
      vacancyStandardPlus: "vacancy-standard-plus--VQInjhmezmghLVNK",
      "vacancy-premium": "vacancy-premium--Xr5eiYx8WkUHhgwH",
      vacancyPremium: "vacancy-premium--Xr5eiYx8WkUHhgwH",
      "hh-stats": "hh-stats--rOaytKwMvi4qW8LL",
      hhStats: "hh-stats--rOaytKwMvi4qW8LL",
      "turbo-response": "turbo-response--el5f124t1xMYxxAX",
      turboResponse: "turbo-response--el5f124t1xMYxxAX",
      "kak-dela": "kak-dela--hzjDpc9VLwmmBXrC",
      kakDela: "kak-dela--hzjDpc9VLwmmBXrC",
      "hr-brand": "hr-brand--XRh7TRMaKYwLdlhy",
      hrBrand: "hr-brand--XRh7TRMaKYwLdlhy",
      "hr-brand-conference": "hr-brand-conference--vcEbmUaWQAIhdL1y",
      hrBrandConference: "hr-brand-conference--vcEbmUaWQAIhdL1y",
      "vacancy-advice": "vacancy-advice--CbLwMZvGPcvdRBgJ",
      vacancyAdvice: "vacancy-advice--CbLwMZvGPcvdRBgJ",
      "company-of-day": "company-of-day--THPcwFtAXgI5R3Hh",
      companyOfDay: "company-of-day--THPcwFtAXgI5R3Hh",
      vacancy: "vacancy--OHO8zpJYr20NXL7v",
      "vacancy-types-zp": "vacancy-types-zp--hNFNwLngqlQa2W4l",
      vacancyTypesZp: "vacancy-types-zp--hNFNwLngqlQa2W4l",
      "bundles-zp": "bundles-zp--NrCS4u7SEX0ptvWQ",
      bundlesZp: "bundles-zp--NrCS4u7SEX0ptvWQ",
      "base-zp": "base-zp--BLRQiIpVe44YvOYF",
      baseZp: "base-zp--BLRQiIpVe44YvOYF",
      "zp-employer-migrate": "zp-employer-migrate--ptg8FnH33YDgzSII",
      zpEmployerMigrate: "zp-employer-migrate--ptg8FnH33YDgzSII"
    };
    var y = a(343856);
    const g = ({
      name: e,
      button: n,
      title: a,
      isTextSmall: s,
      style: l,
      children: g,
      bannerHeight: v
    }) => {
      const b = (0, t.useRef)(null);
      const j = (0, t.useRef)(false);
      (0, t.useEffect)(() => {
        if (b.current && e === h.T.Talantix && !j.current) {
          c()(b.current, {
            hhtmSourceLabel: "main_banner"
          });
          j.current = true;
        }
      }, [e]);
      return (0, y.jsx)(r.ElementShownAnchor, {
        className: x.anchor,
        fn: o().sendHHEventElementShown,
        name: "banners_widget_card",
        card: e,
        children: (0, y.jsx)("div", {
          "data-qa": `banner_${e}`,
          className: x.cardContainer,
          ref: b,
          children: (0, y.jsxs)(d.Z, {
            "data-qa": "banner-card",
            verticalStretched: true,
            stretched: true,
            borderRadius: 24,
            padding: 12,
            style: l,
            children: [(0, y.jsx)(m.m, {
              layer: "content",
              children: (0, y.jsxs)("div", {
                className: x.container,
                style: v ? {
                  height: `${v}px`
                } : undefined,
                children: [(0, y.jsxs)("div", {
                  className: x.content,
                  children: [a && (0, y.jsxs)(y.Fragment, {
                    children: [a, (0, y.jsx)(p.X, {
                      default: 12
                    })]
                  }), (0, y.jsx)(u.x, {
                    typography: s ? "label-4-regular" : "label-2-regular",
                    children: g
                  })]
                }), n]
              })
            }), (0, y.jsx)("div", {
              className: i()(x.image, x[e]),
              "data-role": "banner-image"
            })]
          })
        })
      });
    };
    g.displayName = "EmployerBannersWidget/BannerCard/index/BannerCard";
    const v = g;
  },
  267838: function (e, n, a) {
    a.d(n, {
      Z: () => d
    });
    var t = a(922366);
    var s = a(840316);
    var i = a(60340);
    var r = a(477331);
    var o = a(343856);
    const l = ({
      children: e
    }) => (0, o.jsx)(o.Fragment, {
      children: e
    });
    l.displayName = "EmployerReviews/WidgetSmall/index/DefaultWrapper";
    const c = ({
      Wrapper: e = l,
      hasSpacing: n,
      white: a = false,
      onlyTrusted: c = true
    }) => {
      if (!(0, r.f)(c)) {
        return null;
      }
      const d = a ? "employerReviewsSmallWhite" : "employerReviewsSmall";
      return (0, o.jsxs)(e, {
        children: [n ? (0, o.jsx)(t.X, {
          default: 4
        }) : null, (0, o.jsx)(i.X, {
          place: d,
          preloadContent: !a && (0, o.jsx)(s.O, {
            height: 24,
            width: 200,
            loading: true,
            borderRadius: 8
          })
        })]
      });
    };
    c.displayName = "EmployerReviews/WidgetSmall/index/EmployerReviewsSmallWidget";
    const d = c;
  },
  477331: function (e, n, a) {
    a.d(n, {
      f: () => r
    });
    var t = a(764709);
    var s = a(594948);
    var i = a(846192);
    const r = (e = true) => {
      const n = (0, t.kQ)();
      const a = (0, i.$w)();
      const r = (0, s.v)(e => e.employerInfo.isTrusted || e.vacancyView.company["@trusted"]);
      return n && !a && (e && r || !e);
    };
  },
  729472: function (e, n, a) {
    a.d(n, {
      x: () => j
    });
    var t = a(640569);
    var s = a(36074);
    var i = a(118450);
    var r = a(105160);
    var o = a(922366);
    var l = a(136361);
    var c = a(454386);
    var d = a(228709);
    var m = a(441226);
    var p = a(559123);
    var u = a(122060);
    var h = a(918531);
    var x = a(343856);
    const y = "employer.vacancies.advice.lowPerformanceVacancies.description";
    const g = "employer.vacancies.advice.modal.lowPerformanceVacancies.modal.title";
    const v = "employer.vacancies.advice.modal.lowPerformanceVacancies.modal.button";
    const b = ({
      trls: e,
      vacancies: n,
      isModalOpen: a,
      hideModal: t
    }) => {
      const {
        isXS: b,
        isS: j
      } = (0, s.G)();
      const f = j || b;
      const _ = (0, x.jsx)(i.z, {
        style: "accent",
        mode: "primary",
        size: "small",
        onClick: t,
        stretched: f,
        children: e[v]
      });
      const S = (0, x.jsxs)(x.Fragment, {
        children: [(0, x.jsx)(r.x, {
          typography: "label-3-regular",
          children: e[y]
        }), (0, x.jsx)(o.X, {
          default: 24
        }), (0, x.jsx)(l.Z, {
          borderRadius: 24,
          stretched: true,
          borderWidth: "default",
          padding: 24,
          children: n.map((e, a) => (0, x.jsx)(h.Z, {
            hhtmSourceLabel: "employer_advice",
            vacancy: e,
            isLast: n.length - 1 === a,
            isFirst: a === 0
          }, e.vacancyId))
        })]
      });
      return (0, x.jsxs)(x.Fragment, {
        children: [(0, x.jsx)(c.R, {
          onClose: t,
          visible: a,
          header: (0, x.jsx)(d.v, {
            title: e[g]
          }),
          footer: (0, x.jsx)(m.W, {
            children: _
          }),
          children: S
        }), (0, x.jsx)(p.u, {
          onClose: t,
          title: e[g],
          titleSize: "small",
          visible: a,
          footer: (0, x.jsx)(u.o, {
            primaryActions: _
          }),
          children: S
        })]
      });
    };
    b.displayName = "EmployerVacancies/Advices/LowActivityAdviceModal/LowActivityAdviceModalComponent";
    const j = (0, t.Z)(b);
  },
  415687: function (e, n, a) {
    a.d(n, {
      z: () => r
    });
    var t = a(394280);
    var s = a(630000);
    var i = a(343856);
    const r = ({
      children: e,
      expanded: n = false,
      collapseCallback: a
    }) => {
      const r = (0, t.useRef)(null);
      const {
        collapsibleClasses: o
      } = (0, s.u)(r, n);
      (0, t.useLayoutEffect)(() => {
        if (r != null && r.current && a) {
          a(r, n);
        }
      }, [a, n, o]);
      return (0, i.jsx)("div", {
        ref: r,
        "data-qa": "collapsible",
        className: o,
        children: e
      });
    };
    r.displayName = "components/IndexCollapsibleBlock/Collapsible/Collapsible";
  },
  394756: function (e, n, a) {
    a.d(n, {
      Z: () => b
    });
    var t = a(394280);
    var s = a(36074);
    var i = a(922366);
    var r = a(842953);
    var o = a(118450);
    var l = a(454386);
    var c = a(228709);
    var d = a(674070);
    var m = a(599998);
    var p = a(415687);
    const u = "wrapper--KeZwYQ9yUBHqp3qp";
    var h = a(343856);
    const x = "index.collapsible.button.open";
    const y = "index.collapsible.button.close";
    const g = "index.collapsible.button.showAll";
    const v = ({
      renderPreview: e,
      renderRest: n,
      needToExpand: a,
      renderBottomSheetContent: m,
      bottomSheetTitle: v,
      bottomSheetSubtitle: b,
      restSpacing: j,
      trls: f,
      collapseCallback: _,
      onBottomSheetClose: S,
      onBottomSheetClickBack: C,
      forceBottomSheetVisible: k,
      forceExpandedVisible: w,
      collapsibleButtonDataQa: N
    }) => {
      const [E, A] = (0, t.useState)(false);
      const [R, P] = (0, t.useState)(false);
      const {
        isXS: T
      } = (0, s.G)();
      return (0, h.jsxs)(h.Fragment, {
        children: [(0, h.jsx)("div", {
          className: u,
          children: e()
        }), !T && a && (0, h.jsxs)(h.Fragment, {
          children: [(0, h.jsxs)(p.z, {
            expanded: E || w,
            collapseCallback: _,
            children: [j, n()]
          }), (0, h.jsx)(i.X, {
            default: 24
          }), (0, h.jsx)(r.r, {
            iconRight: E ? (0, h.jsx)(d.HfI, {}) : (0, h.jsx)(d.b$C, {}),
            onClick: () => A(!E),
            Element: "button",
            "data-qa": N,
            children: f[E ? y : x]
          })]
        }), T && (0, h.jsxs)(h.Fragment, {
          children: [(0, h.jsx)(i.X, {
            default: 16,
            gteS: 20,
            gteM: 24
          }), a && (0, h.jsx)(o.z, {
            mode: "secondary",
            style: "accent",
            stretched: true,
            onClick: () => {
              if (_ != null) {
                _(null, true);
              }
              P(true);
            },
            children: f[g]
          }), (0, h.jsx)(l.R, {
            visible: k || R,
            onClose: () => P(false),
            header: (0, h.jsx)(c.v, {
              right: (0, h.jsx)(d.Cs7, {
                onClick: () => {
                  P(false);
                  if (S != null) {
                    S();
                  }
                }
              }),
              left: C && (0, h.jsx)(d.ee, {
                onClick: C
              }),
              title: v,
              subtitle: b,
              showDivider: "always"
            }),
            children: m()
          })]
        })]
      });
    };
    v.displayName = "components/IndexCollapsibleBlock/index/IndexCollapsibleBlock";
    const b = (0, m.x)(v);
  },
  621566: function (e, n, a) {
    a.d(n, {
      k: () => j
    });
    var t = a(491606);
    var s = a(118450);
    var i = a(21119);
    var r = a.n(i);
    var o = a(549155);
    var l = a(226453);
    var c = a(228249);
    var d = a(599998);
    var m = a(963252);
    var p = a(846192);
    var u = a(105163);
    const h = "wrap--yzzqMCnouL8cVtNC";
    var x = a(343856);
    const y = "employer.index.bannersWidget.zpEmployerMigrate.text";
    const g = "employer.index.bannersWidget.zpEmployerMigrate.button";
    const v = "zp_hh_banner";
    const b = ({
      trls: e,
      stretch: n
    }) => {
      const a = (0, m.n)(v);
      const i = (0, p.$w)();
      const d = r()(o.Breakpoint.M);
      if (a && i) {
        return (0, x.jsx)("div", {
          className: n ? h : undefined,
          children: (0, x.jsx)(c.Z, {
            bannerHeight: d === o.Breakpoint.M && n ? 122 : 306,
            name: u.T.ZpEmployerMigrate,
            style: "warning-secondary",
            button: (0, x.jsx)(s.z, {
              size: "small",
              mode: "primary",
              style: "constant",
              "data-qa": "banner_button",
              stretched: true,
              nonMagritteExternalLink: true,
              Element: t.SPALink,
              to: l.Z.zpEmployerMigrate,
              children: e[g]
            }),
            children: e[y]
          })
        });
      } else {
        return null;
      }
    };
    b.displayName = "components/ZpMigrateBanner/index/ZpMigrateBannerComponent";
    const j = (0, d.x)(b);
  },
  918531: function (e, n, a) {
    a.d(n, {
      Z: () => w
    });
    var t = a(394280);
    var s = a(438219);
    var i = a.n(s);
    var r = a(850084);
    var o = a.n(r);
    var l = a(491606);
    var c = a(848484);
    var d = a(922366);
    var m = a(842953);
    var p = a(105160);
    var u = a(820408);
    var h = a(144368);
    var x = a(118450);
    var y = a(599998);
    var g = a(594948);
    var v = a(325423);
    const b = "wrapper--mkYO4YJPYZ0KOHiq";
    const j = "left-column--ow9cON7tmasixU8R";
    const f = "right-column--aWKX6wKY98fgcjuX";
    const _ = "overflow-text--efTmN34SCQkfsHZT";
    var S = a(343856);
    const C = "vacancy.responses.hidden_extended.lowActivityVacancy.parseResponses";
    const k = ({
      trls: e,
      isLast: n,
      isFirst: a,
      hhtmSourceLabel: s,
      vacancy: r
    }) => {
      var y;
      const k = (0, g.v)(e => e.employerId);
      const w = (0, g.v)(e => e.router.location.query.vacancyId);
      const N = `/employer/vacancyresponses?vacancyId=${r.vacancyId}`;
      const E = (0, t.useMemo)(() => ({
        targetVacancyId: r.vacancyId.toString(),
        employerId: k,
        sourceVacancyId: w,
        hhtmSourceLabel: s
      }), [k, s, w, r.vacancyId]);
      const A = (0, t.useCallback)(() => {
        i()(E);
      }, [E]);
      const R = (0, t.useCallback)(() => {
        o()(E);
      }, [E]);
      const P = "employerManager" in r && (y = r.employerManager) !== null && y !== undefined && y.firstName && r.employerManager.lastName ? `${r.employerManager.lastName} ${r.employerManager.firstName}` : "";
      return (0, S.jsxs)(S.Fragment, {
        children: [!a && (0, S.jsxs)(S.Fragment, {
          children: [(0, S.jsx)(c.i, {}), (0, S.jsx)(d.X, {
            default: 16
          })]
        }), (0, S.jsxs)("div", {
          className: b,
          children: [(0, S.jsxs)("div", {
            className: j,
            children: [(0, S.jsx)(m.r, {
              Element: l.SPALink,
              to: `/vacancy/${r.vacancyId}`,
              typography: "subtitle-2-semibold",
              style: "neutral",
              children: (0, S.jsx)("span", {
                className: _,
                children: r.name
              })
            }), (0, S.jsx)(p.x, {
              Element: "span",
              typography: "label-3-regular",
              style: "secondary",
              children: (0, S.jsxs)("span", {
                className: _,
                children: [(0, S.jsx)("span", {
                  children: P || r.typeTrl
                }), "areaName" in r && (0, S.jsxs)(S.Fragment, {
                  children: [" ", v.lK, " ", r.areaName]
                })]
              })
            })]
          }), (0, S.jsxs)("div", {
            className: f,
            children: [(0, S.jsx)(u.V, {
              default: 12,
              xs: 0
            }), (0, S.jsxs)(m.r, {
              Element: l.SPALink,
              to: N,
              onClick: R,
              typography: "label-3-regular",
              children: [(0, S.jsx)("span", {
                children: r.negotiations.responsesCount
              }), (0, S.jsx)(u.V, {
                default: 12
              }), (0, S.jsxs)(h.V, {
                style: "positive",
                size: "medium",
                children: ["+", r.negotiations.notProcessedResponsesCount]
              })]
            }), (0, S.jsx)(u.V, {
              default: 24
            }), (0, S.jsx)(x.z, {
              Element: l.SPALink,
              size: "small",
              mode: "secondary",
              style: "neutral",
              to: N,
              onClick: A,
              children: e[C]
            })]
          })]
        }), !n && (0, S.jsx)(d.X, {
          default: 16
        })]
      });
    };
    k.displayName = "LowActivityVacancyList/LowActivityVacancyPrompt/index/LowActivityVacancyPrompt";
    const w = (0, y.x)(k);
  },
  917644: function (e, n, a) {
    a.d(n, {
      D: () => c
    });
    var t = a(941545);
    var s = a(599998);
    var i = a(325423);
    var r = a(343856);
    const o = {
      one: "professions.vacancies.one",
      some: "professions.vacancies.some",
      many: "professions.vacancies.many"
    };
    const l = ({
      trls: e,
      value: n
    }) => (0, r.jsx)(t.q, {
      one: e[o.one],
      some: e[o.some],
      many: e[o.many],
      zero: i.qD,
      hasValue: true,
      value: n
    });
    l.displayName = "components/RainbowCatalog/VacanciesCounter/VacanciesCounterComponent";
    const c = (0, s.x)(l);
  },
  799816: function (e, n, a) {
    a.d(n, {
      W: () => l
    });
    var t = a(105160);
    var s = a(599998);
    var i = a(343856);
    const r = "zarplata.crossposting";
    const o = ({
      item: e,
      trls: n
    }) => {
      const {
        zpCrossPostAvailable: a
      } = e;
      if (a) {
        return (0, i.jsx)(t.x, {
          "data-qa": "price-purchased-item-crossposting",
          typography: "label-3-regular",
          style: "secondary",
          children: n[r]
        });
      } else {
        return null;
      }
    };
    o.displayName = "components/ServiceItemDescription/ServiceItemCrossposting/ServiceItemCrosspostingComponent";
    const l = (0, s.x)(o);
  },
  580473: function (e, n, a) {
    a.d(n, {
      i: () => h
    });
    var t = a(394280);
    var s = a(3797);
    var i = a(451085);
    var r = a(749727);
    var o = a(859716);
    var l = a(640569);
    var c = a(343856);
    const d = "employer.index.balanceWidget.publication.expires";
    const m = "employer.services.expirationInfo.dateTodayAt";
    const p = "employer.services.expirationInfo.dateTomorrow";
    const u = ({
      date: e,
      trls: n,
      prefix: a
    }) => {
      const [l, u] = (0, t.useState)("");
      (0, t.useEffect)(() => {
        if (typeof window != "undefined") {
          const a = new Date(e);
          const t = (0, s.Z)(a, "HH:mm");
          if ((0, i.Z)(a)) {
            u((0, o.WU)(n[m], {
              "{time}": t
            }));
          } else if ((0, r.Z)(a)) {
            u((0, o.WU)(n[p], {
              "{time}": t
            }));
          } else {
            u((0, s.Z)(a, "dd.MM.yyyy, HH:mm"));
          }
        }
      }, [n, e]);
      return (0, c.jsx)(c.Fragment, {
        children: `${a || n[d]} ${l}`
      });
    };
    u.displayName = "components/ServiceItemDescription/ServiceItemExpiresInfoDate/ServiceItemExpiresInfoDateComponent";
    const h = (0, l.Z)(u);
  },
  487761: function (e, n, a) {
    a.d(n, {
      Y: () => h
    });
    var t = a(941545);
    var s = a(859716);
    var i = a(640569);
    var r = a(105160);
    var o = a(213889);
    var l = a(343856);
    const c = "index.employer.billing.newWillBeAvailable";
    const d = {
      one: "index.employer.billing.days.one",
      some: "index.employer.billing.days.some",
      many: "index.employer.billing.days.many"
    };
    const m = "employer.accountHistory.freeServices.newWillBeAdded";
    const p = {
      month: {
        1: "genitive.month.1",
        2: "genitive.month.2",
        3: "genitive.month.3",
        4: "genitive.month.4",
        5: "genitive.month.5",
        6: "genitive.month.6",
        7: "genitive.month.7",
        8: "genitive.month.8",
        9: "genitive.month.9",
        10: "genitive.month.10",
        11: "genitive.month.11",
        12: "genitive.month.12"
      }
    };
    const u = ({
      item: e,
      countryId: n,
      trls: a
    }) => {
      const {
        nextFreeUpdate: i
      } = e;
      if (typeof n != "number" || (0, o.d)(n) || !i) {
        return null;
      } else if (i.remainingDays === 0) {
        return (0, l.jsx)(r.x, {
          "data-qa": "price-purchased-item-next-update",
          typography: "label-3-regular",
          style: "secondary",
          children: a[c]
        });
      } else if (i.remainingDays > 0) {
        return (0, l.jsx)(r.x, {
          "data-qa": "price-purchased-item-next-update",
          typography: "label-3-regular",
          style: "secondary",
          children: (0, l.jsx)(t.q, {
            one: a[d.one],
            some: a[d.many],
            many: a[d.some],
            value: i.remainingDays,
            hasValue: false,
            format: e => (0, s.WU)(a[c], {
              "{0}": i.remainingDays,
              "{1}": e
            })
          })
        });
      } else {
        return (0, l.jsx)(r.x, {
          "data-qa": "price-purchased-item-next-update",
          typography: "label-3-regular",
          style: "secondary",
          children: `${a[m]} ${i.day} ${a[p.month[i.month]]} ${i.year}`
        });
      }
    };
    u.displayName = "components/ServiceItemDescription/ServiceItemNextUpdate/ServiceItemNextUpdateComponent";
    const h = (0, i.Z)(u);
  },
  15055: function (e, n, a) {
    a.d(n, {
      T: () => c
    });
    var t = a(394280);
    var s = a(599998);
    var i = a(343856);
    const r = "employer.service.profRoleGroup.title";
    const o = "any.profRoleGroup";
    const l = ({
      item: e,
      trls: n,
      withTitle: a = true
    }) => {
      const {
        profRoleGroupIds: s,
        profRoleGroupIdsTrl: l
      } = e;
      if ((s == null ? undefined : s.length) > 0) {
        return (0, i.jsxs)(i.Fragment, {
          children: [a && `${n[r]}: `, l == null ? undefined : l.map((e, n) => (0, i.jsxs)(t.Fragment, {
            children: [(0, i.jsx)("span", {
              "data-qa": "price-purchased-item-profarea",
              children: e
            }), n < l.length - 1 && ", "]
          }, e))]
        });
      } else {
        return n[o];
      }
    };
    l.displayName = "components/ServiceItemDescription/ServiceItemProfareas/ServiceItemProfareasComponent";
    const c = (0, s.x)(l);
  },
  957806: function (e, n, a) {
    a.d(n, {
      Z: () => u
    });
    var t = a(394280);
    var s = a(599998);
    var i = a(594948);
    var r = a(197252);
    var o = a(545182);
    var l = a(343856);
    const c = "price.purchased.freeRegions.RFPN";
    const d = "employer.service.regions.title";
    const m = "any.region";
    const p = ({
      item: e,
      trls: n,
      withTitle: a = true
    }) => {
      const s = (0, i.v)(({
        employerCountryIdBySeller: e
      }) => e);
      const {
        code: p,
        count: u,
        areaIds: h,
        areaIdsTrl: x
      } = e;
      if (p === o.IG.FreeRegionalVacancy && u && parseInt(u, 10) > 0 && s !== r.MQ.Belarus) {
        if (x != null && x.length) {
          return x[0];
        } else {
          return n[c];
        }
      } else if (h && (h == null ? undefined : h.length) > 0) {
        return (0, l.jsxs)(l.Fragment, {
          children: [a && `${n[d]}: `, x == null ? undefined : x.map((e, n) => (0, l.jsxs)(t.Fragment, {
            children: [(0, l.jsx)("span", {
              "data-qa": "price-purchased-item-region",
              children: e
            }), n < x.length - 1 && ", "]
          }, e))]
        });
      } else {
        return n[m];
      }
    };
    p.displayName = "components/ServiceItemDescription/ServiceItemRegions/ServiceItemRegionsComponent";
    const u = (0, s.x)(p);
  },
  604897: function (e, n, a) {
    a.d(n, {
      e: () => g
    });
    var t = a(394280);
    var s = a(640569);
    var i = a(105160);
    var r = a(674070);
    var o = a(580473);
    var l = a(481277);
    var c = a(325423);
    const d = {
      [l.l.IsEnding]: "employer.index.balanceWidget.publication.count.is_ending",
      [l.l.IsEnded]: "employer.index.balanceWidget.publication.count.is_ended"
    };
    const m = (0, s.Z)(({
      trls: e,
      warning: n
    }) => e[d[n]]);
    var p = a(930884);
    var u = a(343856);
    const h = {
      single: "employer.services.warnings.expiration.prefixPublicationsSingle",
      multiple: "employer.services.warnings.expiration.prefixPublicationsMultiple"
    };
    const x = {
      ...p.WT,
      [l.l.IsEnding]: p.FX.Warning,
      [l.l.IsEnded]: p.FX.Danger
    };
    const y = ({
      trls: e,
      count: n,
      expirationDate: a,
      warning: s
    }) => {
      const d = x[s];
      const y = (0, t.useMemo)(() => {
        if ((e => Object.values(l.l).includes(e))(s)) {
          return (0, u.jsx)(m, {
            warning: s
          });
        }
        if ((0, p.Wi)(s)) {
          const t = e[n === 1 ? h.single : h.multiple];
          if (a) {
            return (0, u.jsx)(o.i, {
              date: a,
              prefix: t
            });
          }
        }
        return null;
      }, [n, a, e, s]);
      return (0, u.jsxs)(i.x, {
        "data-qa": "price-purchased-item-expires-info",
        typography: "label-3-regular",
        style: d,
        children: [(0, u.jsx)(r.xpN, {
          initialColor: d
        }), c.qD, y]
      });
    };
    y.displayName = "components/ServiceItemWarning/PublicationWarning/PublicationServiceWarningComponent";
    const g = (0, s.Z)(y);
  },
  839936: function (e, n, a) {
    a.d(n, {
      F: () => p
    });
    var t = a(640569);
    var s = a(105160);
    var i = a(674070);
    var r = a(580473);
    var o = a(325423);
    var l = a(930884);
    var c = a(343856);
    const d = "employer.services.warnings.expiration.prefixGeneral";
    const m = ({
      trls: e,
      expirationDate: n,
      warning: a
    }) => {
      const t = l.WT[a];
      return (0, c.jsxs)(s.x, {
        "data-qa": "price-purchased-item-expires-info",
        typography: "label-3-regular",
        style: t,
        children: [(0, c.jsx)(i.xpN, {
          initialColor: t
        }), o.qD, (0, c.jsx)(r.i, {
          date: n,
          prefix: e[d]
        })]
      });
    };
    m.displayName = "components/ServiceItemWarning/ServiceExpirationWarning/ServiceExpirationWarningComponent";
    const p = (0, t.Z)(m);
  },
  930884: function (e, n, a) {
    a.d(n, {
      FX: () => s,
      WT: () => i,
      Wi: () => r
    });
    var t = a(481277);
    let s = function (e) {
      e.Warning = "warning";
      e.Danger = "negative";
      return e;
    }({});
    const i = {
      [t.F.ExpiringSoon]: s.Warning,
      [t.F.ExpiringVerySoon]: s.Danger
    };
    t.l.IsEnding;
    s.Warning;
    t.l.IsEnded;
    s.Danger;
    const r = e => e !== undefined && Object.values(t.F).includes(e);
  },
  20805: function (e, n, a) {
    a.d(n, {
      o: () => i
    });
    const t = "reserved-count-column--yfflh658rAUYN4tA";
    var s = a(343856);
    const i = ({
      count: e,
      reservedCount: n
    }) => (0, s.jsxs)("div", {
      className: t,
      children: [e, n]
    });
    i.displayName = "components/VacanciesCount/index/VacanciesCount";
  },
  784467: function (e, n, a) {
    a.d(n, {
      h: () => r
    });
    var t = a(394280);
    var s = a(723112);
    var i = a(207140);
    const r = ({
      inputValue: e,
      onBlurSaveFirstValue: n,
      onAutoSelect: a
    } = {}) => (0, t.useMemo)(() => (0, i.I1)("/shards/employer/vacancies/get_vacancy_name_typesuggest", "", s.Z, i.iQ, {
      inputValue: e,
      onBlurSaveFirstValue: n,
      onAutoSelect: a
    }), [e, a, n]);
  },
  253738: function (e, n, a) {
    a.d(n, {
      h: () => l
    });
    var t = a(491606);
    var s = a(739788);
    var i = a(666825);
    var r = a.n(i);
    var o = a(343856);
    const l = ({
      text: e,
      disableTitleLink: n
    }) => (0, o.jsx)(s.H2, {
      "data-qa": "index__work-in-profession-header",
      children: n ? e : (0, o.jsx)(r(), {
        kind: i.LinkKind.Tertiary,
        Element: t.SPALink,
        to: "/vacancies",
        isSeoLink: true,
        children: e
      })
    });
    l.displayName = "components/WorkInProfession/Header/Header";
  },
  433643: function (e, n, a) {
    a.d(n, {
      F: () => i
    });
    var t = a(791256);
    var s = a.n(t);
    const i = (e, n) => {
      s().sendHHEventButtonClick("vacancy_professional_catalog_item", {
        value: e,
        position: n
      });
    };
  },
  651329: function (e, n, a) {
    a.d(n, {
      m: () => U
    });
    var t = a(665060);
    var s = a.n(t);
    var i = a(491606);
    var r = a(36074);
    var o = a(750128);
    var l = a(914357);
    var c = a(922366);
    var d = a(257549);
    var m = a.n(d);
    var p = a(394756);
    var u = a(599998);
    var h = a(89396);
    var x = a(594948);
    var y = a(253738);
    var g = a(394280);
    var v = a(940389);
    var b = a(124880);
    var j = a(908298);
    var f = a(144368);
    var _ = a(136361);
    var S = a(105160);
    var C = a(626462);
    var k = a(15791);
    var w = a(842953);
    var N = a(666825);
    var E = a.n(N);
    var A = a(452528);
    var R = a.n(A);
    var P = a(917644);
    var T = a(347841);
    var I = a(365415);
    var L = a(606831);
    var W = a(468444);
    var B = a(433643);
    var M = a(343856);
    const V = ({
      category: e,
      positionIndex: n,
      isBottomsheetItem: a
    }) => {
      const t = (0, I.w)();
      const s = (0, v.useDispatch)();
      const o = (0, g.useRef)(null);
      const l = (0, h.i)();
      const {
        isGtS: d
      } = (0, r.G)();
      const m = (0, x.v)(e => e.userType) === W.FW.Anonymous;
      const p = a => {
        if (t) {
          a.preventDefault();
          s((0, T.F)(o.current?.href ?? ""));
        }
        (0, B.F)(e.id, n);
      };
      if (l) {
        let r;
        if (!d && "count" in e) {
          r = m ? (0, M.jsx)(j.O, {
            hideIcon: true,
            children: (0, b.uf)(e.count)
          }) : (0, M.jsx)(f.V, {
            children: (0, b.uf)(e.count)
          });
        }
        if (m && a) {
          return (0, M.jsx)(_.Z, {
            borderWidth: "default",
            padding: 16,
            borderRadius: 16,
            children: (0, M.jsxs)(i.SPALink, {
              to: e.url,
              additionalQueryParams: {
                [L.M]: true
              },
              isSeoLink: true,
              ref: o,
              onClick: p,
              children: [(0, M.jsx)(S.x, {
                typography: "label-2-regular",
                children: e.name
              }), "count" in e && (0, M.jsxs)(M.Fragment, {
                children: [(0, M.jsx)(c.X, {
                  default: 4,
                  m: 0
                }), (0, M.jsx)(S.x, {
                  typography: "paragraph-3-regular",
                  style: "tertiary",
                  children: (0, M.jsx)(P.D, {
                    value: e.count
                  })
                })]
              })]
            })
          });
        } else {
          return (0, M.jsx)(M.Fragment, {
            children: (0, M.jsx)(C.b, {
              right: r,
              children: (0, M.jsx)(k.j, {
                children: (0, M.jsx)(w.r, {
                  style: "neutral",
                  Element: i.SPALink,
                  to: e.url,
                  additionalQueryParams: {
                    [L.M]: true
                  },
                  isSeoLink: true,
                  ref: o,
                  onClick: a => {
                    if (t) {
                      a.preventDefault();
                      s((0, T.F)(o.current?.href ?? ""));
                    }
                    (0, B.F)(e.id, n);
                  },
                  children: e.name
                })
              })
            })
          });
        }
      }
      return (0, M.jsx)("li", {
        className: "multiple-column-list-item",
        children: (0, M.jsx)(R(), {
          Element: "span",
          children: (0, M.jsx)(E(), {
            kind: N.LinkKind.Tertiary,
            Element: i.SPALink,
            to: e.url,
            additionalQueryParams: {
              [L.M]: true
            },
            isSeoLink: true,
            ref: o,
            onClick: a => {
              if (t) {
                a.preventDefault();
                s((0, T.F)(o.current?.href ?? ""));
              }
              (0, B.F)(e.id, n);
            },
            children: e.name
          })
        })
      });
    };
    V.displayName = "components/WorkInProfession/ListItem/ListItem";
    const D = "wrapper--T0UgJxkkPrIkuOug";
    const F = "list-wrapper--oYuHYJAGLKAkzDY2";
    const H = "index.anonymous.work.in.profession.bottomsheet.title";
    const q = ({
      trls: e,
      customTitle: n,
      disableTitleLink: a,
      spacingBottom: t
    }) => {
      const {
        title: d,
        titleNom: u,
        collection: g,
        collectionCounted: v
      } = (0, x.Y)(e => e.professionalRoleCategoryCollection);
      const b = (0, h.i)();
      const {
        isMobile: j
      } = (0, r.G)();
      if (b) {
        const n = v.length ? v : g;
        const a = j ? n : g;
        const r = j ? 10 : Infinity;
        const m = (e, n, a) => (0, M.jsx)(V, {
          category: e,
          positionIndex: n,
          isBottomsheetItem: a
        }, e.id);
        const h = (e, n) => (0, M.jsx)("div", {
          className: F,
          "data-qa": "index__work-in-profession-list",
          children: (0, M.jsx)(o.z, {
            default: 16,
            children: e.map((e, a) => m(e, a, n))
          })
        });
        return (0, M.jsxs)(M.Fragment, {
          children: [(0, M.jsx)(i.SPALink, {
            to: "/vacancies",
            isSeoLink: true,
            children: (0, M.jsx)(l.D, {
              Element: "h2",
              size: "medium",
              "data-qa": "index__work-in-profession-header",
              children: d
            })
          }), (0, M.jsx)(c.X, {
            default: 16,
            gteS: 20,
            gteM: 24
          }), (0, M.jsx)(p.Z, {
            renderPreview: () => h(a.slice(0, r)),
            renderRest: () => h(a.slice(r)),
            restSpacing: (0, M.jsx)(c.X, {
              default: 16
            }),
            needToExpand: a.length > r,
            renderBottomSheetContent: () => (0, M.jsxs)(M.Fragment, {
              children: [h(a, true), (0, M.jsx)(c.X, {
                default: 16
              })]
            }),
            bottomSheetTitle: e[H],
            bottomSheetSubtitle: u,
            collapseCallback: (e, n) => {
              (e => {
                if (e) {
                  s()({
                    buttonName: "vacancy_professional_catalog_list"
                  });
                }
              })(n);
            }
          }), t]
        });
      }
      return (0, M.jsxs)("div", {
        className: D,
        children: [(0, M.jsx)(y.h, {
          text: n || d,
          disableTitleLink: a
        }), (0, M.jsx)(m(), {
          base: 4
        }), (0, M.jsx)("ul", {
          className: "multiple-column-list multiple-column-list_narrow",
          "data-qa": "index__work-in-profession-list",
          children: g.map((e, n) => (0, M.jsx)(V, {
            category: e,
            positionIndex: n
          }, e.id))
        })]
      });
    };
    q.displayName = "components/WorkInProfession/index/WorkInProfession";
    const U = (0, u.x)(q);
  },
  656322: function (e, n, a) {
    a.d(n, {
      E: () => s
    });
    var t = a(730989);
    const s = e => (0, t.ZP)("exp_38169_lm_applicant", e, e);
  },
  997801: function (e, n, a) {
    a.d(n, {
      Y: () => s
    });
    var t = a(394280);
    const s = (e, n = {}) => {
      const a = (0, t.useRef)(null);
      const s = (0, t.useCallback)(n => {
        n.forEach(n => {
          if (n.isIntersecting) {
            e();
          }
        });
      }, [e]);
      (0, t.useEffect)(() => {
        const e = a.current;
        if (!e) {
          return;
        }
        const t = new IntersectionObserver(s, n);
        t.observe(e);
        return () => {
          t.disconnect();
        };
      }, [s, n]);
      return a;
    };
  },
  862079: function (e, n, a) {
    a.d(n, {
      X: () => r
    });
    var t = a(394280);
    var s = a(36074);
    const i = e => e.scrollHeight > e.clientHeight;
    function r(e) {
      const [n, a] = (0, t.useState)(false);
      const {
        breakpoint: r
      } = (0, s.G)();
      (0, t.useEffect)(() => {
        if (e.current) {
          a(i(e.current));
        }
      }, [r, e]);
      return n;
    }
  },
  318495: function (e, n, a) {
    a.d(n, {
      p: () => i,
      x: () => r
    });
    var t = a(130488);
    var s = a.n(t);
    const i = (e, n) => (a, t) => e({
      options: a,
      originalElement: t,
      ...n
    });
    const r = e => {
      const n = {
        replace: a => {
          if (a.name && e[a.name]) {
            return (0, e[a.name])(n, a);
          }
          return null;
        }
      };
      return e => s()(e, n);
    };
  },
  972815: function (e, n, a) {
    a.d(n, {
      BK: () => i,
      Kh: () => r,
      WL: () => p,
      a5: () => c,
      dV: () => u,
      mh: () => l,
      n9: () => d,
      uH: () => o,
      vp: () => m
    });
    var t = a(594948);
    const s = "https://talantix.ru/?utm_source=hh.ru&utm_medium=referral&utm_campaign=";
    const i = "main_widget_connected_service";
    const r = "main_widget_unconnected_service";
    const o = "workflow_baza";
    const l = "from_vac_response_disappeared";
    const c = "responses_talantix_segment";
    const d = "favourite_resume";
    const m = "resume_transfer";
    const p = "price_offer";
    const u = e => {
      const n = (0, t.v)(e => e.employerId);
      if (n) {
        return `${s}${e}&employer_id=${n}&utm_term=withid`;
      } else {
        return `${s}${e}&utm_term=withoutid`;
      }
    };
  },
  965073: function (e, n, a) {
    a.r(n);
    a.d(n, {
      default: () => i
    });
    var t = a(503190);
    var s = a(4476);
    const i = (e, n, a) => s.default.init({
      element: e,
      onVisible() {
        window.requestIdleCallback(() => {
          t.default.waitingForBatchUrlReady().then(() => {
            var s;
            if (a != null && (s = a.abortSignal) !== null && s !== undefined && s.aborted) {
              return;
            }
            const {
              ids: i,
              id: r,
              templateName: o,
              adfoxParams: l
            } = n;
            let c = [r];
            if (i) {
              c = i;
            }
            t.default.create(e, c, o, l);
          }).catch();
        });
      }
    });
  },
  114543: function (e, n, a) {
    a.r(n);
    a.d(n, {
      default: () => m
    });
    var t = a(791256);
    var s = a.n(t);
    var i = a(412303);
    var r = a(413134);
    var o = a(741095);
    const l = e => e;
    const c = {
      domainAreaId: l,
      contextRegions: l,
      profileRegions: e => e[0].split(","),
      regions: l,
      rId: String
    };
    const d = (e, n, a = false) => {
      var t;
      const o = new Date();
      const l = (0, r.j)(window.globalVars.bannersBatchUrl);
      const m = (t = l.params) !== null && t !== undefined && t.regions && l.params.regions[0].split(",").join(":") || "";
      const p = n.bannerCommonTargeting.puid1 ? `${m}:${n.bannerCommonTargeting.puid1}` : m;
      const u = () => e.style.display = "none";
      const h = Boolean(n.headerBidding);
      var x;
      var y;
      var g;
      if ((y = (x = window).Ya) === null || y === undefined) {
        x.Ya = {};
      }
      window.Ya._adListeners ||= {
        hbCallbacks: {
          data: [],
          done: (0, i.D)(() => {
            var e;
            if ((e = window.Ya) !== null && e !== undefined && (e = e.adfoxCode) !== null && e !== undefined && (e = e.hbCallbacks) !== null && e !== undefined) {
              e.push(() => {
                var e;
                if ((e = window.Ya) === null || e === undefined || (e = e.headerBidding) === null || e === undefined) {
                  return undefined;
                } else {
                  return e.pushAdUnits(window.Ya._adListeners.hbCallbacks.data.flatMap(e => e()));
                }
              });
            }
            window.Ya._adListeners.hbCallbacks.data.length = 0;
          }, 400),
          push: e => {
            window.Ya._adListeners.hbCallbacks.data.push(e);
            window.Ya._adListeners.hbCallbacks.done();
          }
        },
        yaContextCb: {
          data: [],
          done: (0, i.D)(() => {
            window.Ya._adListeners.yaContextCb.data.forEach(e => window.yaContextCb.push(e));
            window.Ya._adListeners.yaContextCb.data.length = 0;
          }, 400),
          push: e => {
            window.Ya._adListeners.yaContextCb.data.push(e);
            window.Ya._adListeners.yaContextCb.done();
          }
        }
      };
      if (h) {
        window.YaHeaderBiddingSettings = {
          biddersMap: n.headerBidding.biddersMap,
          timeout: 8000
        };
        if ((g = window.Ya) !== null && g !== undefined && (g = g._adListeners) !== null && g !== undefined && (g = g.hbCallbacks) !== null && g !== undefined) {
          g.push(() => {
            const e = Object.entries(c).reduce((e, [n, a]) => n in e ? e : Object.assign(e, {
              [n]: a(l.params[n])
            }), n.fastTargeting);
            return [{
              code: n.cId,
              sizes: [n.headerBidding.sizes],
              bids: Object.keys(n.headerBidding.biddersMap).map(a => ({
                bidder: a,
                params: {
                  placementId: n.place,
                  codeType: "code",
                  additional: {
                    additional: e
                  }
                }
              }))
            }];
          });
        }
      }
      window.Ya._adListeners.yaContextCb.push(() => {
        window.Ya.adfoxCode.create({
          ownerId: n.ownerId,
          sequentialLoading: true,
          containerId: n.cId,
          params: {
            ps: n.ps,
            pp: n.pp,
            p2: n.p2,
            puid4: o.getDay(),
            puid5: o.getHours(),
            puid6: window.globalVars.userType,
            puid7: window.location.host,
            puid9: window.globalVars.ads_sandbox,
            puid18: n.place,
            puid20: n.positionInfo,
            ...n.bannerCommonTargeting,
            ...n.bannerAdTargeting,
            puid1: p
          },
          lazyLoad: {
            fetchMargin: 200,
            mobileScaling: 2
          },
          onLoad: a => {
            if (a) {
              e.dataset.adfoxRequested = "true";
              n.callbacks.onLoad({
                bundleName: a.bundleName
              });
            }
          },
          onRender: e => {
            if (e) {
              n.callbacks.onRender();
            }
          },
          onStub: () => {
            n.callbacks.error();
            e.dataset.adfoxRequested = "true";
            u();
          },
          onError: t => {
            n.callbacks.error();
            e.dataset.adfoxRequested = "true";
            s().sendHHEvent("adfox_on_error", {
              bannerId: n.bannerId,
              pathname: window.location.pathname,
              isRetry: a,
              error: JSON.stringify(t)
            });
            if (a) {
              u();
            } else {
              d(e, n, true);
            }
          }
        });
      });
    };
    const m = o.default.build({
      create(e, n) {
        window.yaContextCb = window.yaContextCb || [];
        d(e, n);
      },
      componentName: "legacy/HH/YandexAdfoxBanner"
    });
  },
  503190: function (e, n, a) {
    a.r(n);
    a.d(n, {
      EVENT_NAME_ERROR: () => u,
      EVENT_NAME_INIT: () => d,
      EVENT_NAME_LOAD: () => m,
      EVENT_NAME_PREPARE: () => p,
      default: () => j
    });
    var t = a(607200);
    var s = a(145161);
    var i = a.n(s);
    var r = a(114543);
    var o = a(380726);
    var l = a(741095);
    var c = a(49924);
    const d = "HH-Banners-Init";
    const m = "HH-Banners-Load";
    const p = "HH-Banners-Prepare";
    const u = "HH-Banners-Error";
    const h = () => {
      let e;
      let n;
      return {
        promise: new Promise((a, t) => {
          e = a;
          n = t;
        }),
        resolve: e,
        reject: n
      };
    };
    const x = function (e, n) {
      const a = e.closest(".HHC-Banner-Wrapper");
      e.classList.add(e.dataset[n]);
      if (a) {
        a.classList.add(a.dataset[n]);
      }
    };
    const y = {
      adfox(e, n, a) {
        if (typeof navigator?.sendBeacon == "function") {
          navigator.sendBeacon = navigator.sendBeacon.bind(navigator);
        }
        l.default.make(r.default, n, {
          ...e,
          callbacks: a
        });
      }
    };
    const g = {
      requestedBanners: [],
      batchUrlRetriesCount: 10,
      requestedSystems: {
        adfox: null,
        adfoxMock: null
      },
      init() {
        b([...document.querySelectorAll(".HHC-Banners-Place")]);
      },
      put({
        banners: e
      }, n, a) {
        if (Array.isArray(e)) {
          e.forEach(e => {
            n.forEach(n => {
              if (n.classList.contains(`HHC-Banner-${e.place}`) !== false && n.dataset.loaded !== "true") {
                if (e.empty) {
                  x(n, "emptyClass");
                } else if (typeof y[e.type] != "function") {
                  c.default.log("error out", "Unsupported banner type", e);
                  x(n, "emptyClass");
                } else {
                  var t;
                  if (e.viewUrl) {
                    (0, o.w8)({
                      element: n,
                      viewUrl: e.viewUrl
                    });
                  }
                  x(n, "loadedClass");
                  e.additionalClass = n.dataset.bannerAdditionalClass || "";
                  e.advMarkTrls = n == null || (t = n.dataset) === null || t === undefined ? undefined : t.bannerAdvMarkTrl;
                  const s = {
                    detail: {
                      startTime: a,
                      bannerPlace: e.place,
                      bannerId: e.id,
                      bannerType: e.type
                    }
                  };
                  y[e.type](e, n, {
                    onRender: () => g._dispatchEvent(n, d, s),
                    error: () => g._dispatchEvent(n, u, s),
                    onLoad: a => {
                      const t = a == null ? undefined : a.bundleName;
                      if (t) {
                        const e = `${t.split(".")[1]}BannerClass`;
                        if (e) {
                          x(n, e);
                        }
                      }
                      g._dispatchEvent(n, m, {
                        detail: {
                          bundleName: t,
                          placeSettings: e.place_settings
                        }
                      });
                    }
                  });
                  n.dataset.loaded = "true";
                  g._dispatchEvent(n, p);
                }
              }
            });
          });
        }
      },
      create(e, n, a, t = {}) {
        if (a) {
          const s = i().fromElement(document.querySelector(`.${a}`));
          const r = e.querySelectorAll(".HHC-Group-Banners-Place");
          const o = "HHC-Banners-Place";
          let l = [];
          if (r.length > 0) {
            r.forEach(e => {
              e.insertAdjacentHTML("beforeend", s.replace(/%id%/g, e.dataset.bannerId).trim());
              l.push(e.querySelector(`.${o}`));
            });
          } else {
            e.insertAdjacentHTML("beforeend", n.map(e => s.replace(/%id%/g, e).trim()).join(""));
            l = [...e.childNodes].filter(e => e.classList.contains(o));
          }
          b(l, t);
        } else {
          b([e], t);
        }
      },
      waitingForBatchUrlReady() {
        var e;
        const {
          promise: n,
          resolve: a,
          reject: t
        } = h();
        if ((e = window.globalVars) !== null && e !== undefined && e.bannersBatchUrl) {
          a();
        } else {
          let e = 0;
          const n = setInterval(() => {
            var s;
            e += 1;
            if ((s = window.globalVars) !== null && s !== undefined && s.bannersBatchUrl) {
              clearInterval(n);
              a();
            }
            if (e >= g.batchUrlRetriesCount) {
              clearInterval(n);
              t();
            }
          }, 1000);
        }
        return n;
      },
      _dispatchEvent(e, n, a) {
        e.dispatchEvent(new CustomEvent(n, {
          bubbles: true,
          ...a
        }));
      }
    };
    function v(e) {
      const {
        promise: n,
        resolve: a
      } = h();
      const t = document.createElement("script");
      t.setAttribute("src", e);
      t.setAttribute("async", "async");
      document.body.appendChild(t);
      t.addEventListener("load", a);
      return n;
    }
    function b(e, n = {}) {
      if (!window.globalVars.bannersBatchUrl || !e.length) {
        return;
      }
      (e = e.filter(e => e.dataset.requested !== "true" && Boolean(e.dataset.bannerId))).forEach(e => e.dataset.requested = "true");
      if (e.map(e => e.dataset.bannerId).length === 0) {
        return;
      }
      const a = performance.now();
      if (Object.keys(n).length > 0) {
        var s;
        if (n.useAdfoxMock) {
          (0, t.d)();
          g.put({
            banners: [n]
          }, e, a);
          return;
        }
        if (((s = window.Ya) === null || s === undefined || !s.adfoxCode) && !g.requestedSystems.adfox) {
          g.requestedSystems.adfox = v("https://yandex.ru/ads/system/context.js");
        }
        if (!!n.headerBidding && !window.YaHeaderBiddingSettings && !g.requestedSystems.adfoxMock) {
          g.requestedSystems.adfoxMock = v("https://yandex.ru/ads/system/header-bidding.js");
        }
        Promise.all(Object.values(g.requestedSystems)).then(() => g.put({
          banners: [n]
        }, e, a)).catch(() => {});
      }
    }
    const j = g;
  },
  4476: function (e, n, a) {
    a.r(n);
    a.d(n, {
      default: () => t
    });
    const t = {
      init(e) {
        let n = false;
        const a = e.element;
        const t = () => {
          if (!n) {
            if (a.offsetWidth || a.offsetHeight || a.getClientRects().length) {
              n = true;
              e.onVisible();
              window.removeEventListener("resize", t);
              window.removeEventListener("element-displayed", t);
              a.dataset.listenersSetted = "false";
            } else {
              n = false;
            }
          }
        };
        if (e.element.dataset.listenersSetted !== "true") {
          window.addEventListener("resize", t);
          window.addEventListener("element-displayed", t);
          e.element.dataset.listenersSetted = "true";
        }
        t();
        return () => {
          window.removeEventListener("resize", t);
          window.removeEventListener("element-displayed", t);
        };
      }
    };
  },
  410881: function (e, n, a) {
    a.d(n, {
      L: () => s
    });
    var t = a(55873);
    let s = function (e) {
      e.AFTER_4TH_TOPIC_L = "after-4th-topic-l";
      e.AFTER_4TH_TOPIC_M = "after-4th-topic-m";
      e.AFTER_4TH_TOPIC_S = "after-4th-topic-s";
      e.AFTER_4TH_TOPIC_XS = "after-4th-topic-xs";
      e.AFTER_PAYMENT_FORM_L = "after-payment-form-l";
      e.AFTER_PAYMENT_FORM_S_M = "after-payment-form-s-m";
      e.AFTER_PAYMENT_FORM_XS = "after-payment-form-xs";
      e.AFTER_VACANCY_RESPONSE = "after-vacancy-response";
      e.BOTTOM_DASHBOARD = "bottom-dashboard";
      e.BOTTOM_DASHBOARD_CLICKME = "bottom-dashboard-clickme";
      e.CALENDAR = "calendar";
      e.DASHBOARD = "dashboard";
      e.INDEX_BOTTOM = "index-bottom";
      e.INDEX_BOTTOM_MOBILE = "index-bottom-mobile";
      e.INDEX_BOTTOM_XS = "index-bottom-xs";
      e.INDEX_APPLICANT_DASHBOARD_MOBILE = "index-applicant-dashboard-mobile";
      e.INDEX_HORIZONTAL = "index-horizontal";
      e.INDEX_UNDER_NEWS_BOX = "index-under-news-box";
      e.INDEX_UNDER_DASHBOARD_SMALL = "index-under-dashboard-small";
      e.INDEX_APPLICANT_UNDER_RAINBOW_MOBILE = "index-applicant-under-rainbow-mobile";
      e.INDEX_APPLICANT_UNDER_NEWS_BOX_MOBILE = "index-applicant-under-news-box-mobile";
      e.INDEX_WORK_IN_COMPANY = "index-work-in-company";
      e.INDEX_WORK_IN_COMPANY_MOBILE = "index-work-in-company-mobile";
      e.LEFT_COLUMN_UNDER_TABS = "left-column-under-tabs";
      e.RIGHT_COLUMN = "right-column";
      e.RIGHT_COLUMN_CLICKME = "right-column-clickme";
      e.SERP_FIFTH_L = "serp-fifth-l";
      e.SERP_FIFTH_M = "serp-fifth-m";
      e.SERP_FIFTH_S = "serp-fifth-s";
      e.SERP_FIFTH_XS = "serp-fifth-xs";
      e.SERP_FIRST = "serp-first";
      e.SERP_FIRST_SMALL = "serp-first-small";
      e.SERP_FIRST_L = "serp-first-l";
      e.SERP_FIRST_M = "serp-first-m";
      e.SERP_FIRST_S = "serp-first-s";
      e.SERP_FIRST_XS = "serp-first-xs";
      e.SERP_FOURTH_L = "serp-fourth-l";
      e.SERP_FOURTH_M = "serp-fourth-m";
      e.SERP_FOURTH_S = "serp-fourth-s";
      e.SERP_FOURTH_XS = "serp-fourth-xs";
      e.SERP_SECOND = "serp-second";
      e.SERP_SECOND_SMALL = "serp-second-small";
      e.SERP_SECOND_L = "serp-second-l";
      e.SERP_SECOND_M = "serp-second-m";
      e.SERP_SECOND_S = "serp-second-s";
      e.SERP_SECOND_XS = "serp-second-xs";
      e.SERP_THIRD_L = "serp-third-l";
      e.SERP_THIRD_M = "serp-third-m";
      e.SERP_THIRD_S = "serp-third-s";
      e.SERP_THIRD_XS = "serp-third-xs";
      e.UNDER_PAGINATION_SEARCH_RESULTS_L = "under-pagination-search-results-l";
      e.UNDER_PAGINATION_SEARCH_RESULTS_M = "under-pagination-search-results-m";
      e.UNDER_PAGINATION_SEARCH_RESULTS_S = "under-pagination-search-results-s";
      e.UNDER_PAGINATION_SEARCH_RESULTS_XS = "under-pagination-search-results-xs";
      e.UNDER_SEARCH_RESULTS_ROTATE = "under-search-results-rotate";
      e.UNDER_SEARCH_RESULTS_XS = "under-search-results-xs";
      e.VACANCY_PROMOTION = "vacancy-promotion";
      e.VACANCY_RECOMMENDATIONS = "vacancy-recommendations";
      e.VACANCY_RIGHT_TEASER = "vacancy-right-teaser";
      e.VACANCY_VIEW_SERP_FIRST_L = "vacancy-view-serp-first-l";
      e.VACANCY_VIEW_SERP_FIRST_S_M = "vacancy-view-serp-first-s-m";
      e.VACANCY_VIEW_SERP_FIRST_XS = "vacancy-view-serp-first-xs";
      e.VACANCY_VIEW_SERP_FIRST_ODD_L = "vacancy-view-serp-first-odd-l";
      e.VACANCY_VIEW_SERP_FIRST_ODD_S_M = "vacancy-view-serp-first-odd-s-m";
      e.VACANCY_VIEW_SERP_FIRST_ODD_XS = "vacancy-view-serp-first-odd-xs";
      e.INDEX_VOD_ANONYMOUS = "index-vod-anonymous";
      e.INDEX_WORK_IN_COMPANY_ANONYMOUS = "index-work-in-company-anonymous";
      e.INDEX_DASHBOARD_MOBILE_ANONYMOUS = "index-dashboard-mobile-anonymous";
      e.INDEX_UNDER_RAINBOW_MOBILE_ANONYMOUS = "index-under-rainbow-mobile-anonymous";
      e.INDEX_UNDER_NEWS_BOX_MOBILE_ANONYMOUS = "index-under-news-box-mobile-anonymous";
      e.INDEX_BOTTOM_MOBILE_ANONYMOUS = "index-bottom-mobile-anonymous";
      return e;
    }({});
    (0, t.autoGeneratedReducer)({});
  },
  342694: function (e, n, a) {
    a.d(n, {
      M: () => t
    });
    let t = function (e) {
      e.BANNER = "banner";
      e.CARD = "card";
      return e;
    }({});
  },
  481277: function (e, n, a) {
    a.d(n, {
      F: () => t,
      l: () => s
    });
    let t = function (e) {
      e.ExpiringSoon = "EXPIRING_SOON";
      e.ExpiringVerySoon = "EXPIRING_VERY_SOON";
      return e;
    }({});
    let s = function (e) {
      e.IsEnding = "IS_ENDING";
      e.IsEnded = "IS_ENDED";
      return e;
    }({});
  },
  859583: function (e, n, a) {
    a.r(n);
    a.d(n, {
      default: () => ME
    });
    var t = a(394280);
    var s = a.n(t);
    var i = a(140115);
    var r = a(852377);
    var o = a(182302);
    var l = a(324566);
    var c = a(290069);
    var d = a(791256);
    var m = a.n(d);
    var p = a(28537);
    var u = a(491606);
    var h = a(559123);
    var x = a(122060);
    var y = a(118450);
    var g = a(914357);
    var v = a(922366);
    var b = a(574015);
    var j = a(105160);
    var f = a(599998);
    var _ = a(594948);
    var S = a(520046);
    var C = a(255717);
    const k = a.p + "static/images/headerImage__min_233fb5ddc20a59e3.webp";
    const w = a.p + "static/images/headerImageBy__min_035faafbdb0eb9fd.webp";
    var N = a(343856);
    const E = "employer.phishingInfo.modal.header";
    const A = "employer.phishingInfo.modal.closeButton";
    const R = "employer.phishingInfo.modal.articleButton";
    const P = {
      first: "employer.phishingInfo.modal.textList.first",
      second: "employer.phishingInfo.modal.textList.second",
      third: "employer.phishingInfo.modal.textList.third"
    };
    const T = "employer.phishingInfo.modal.articlePath";
    const I = [P.first, P.second, P.third];
    const L = ({
      trls: e
    }) => {
      const [n, a] = (0, t.useState)(true);
      const s = (0, _.v)(e => e.topLevelSite);
      const i = (0, p.l)((e => e === S.Dc.BY || e === S.Dc.JTB ? w : k)(s));
      const r = (0, u.usePush)();
      const o = () => {
        m().sendHHEventButtonClick("phishing_info_modal_close_click");
        a(false);
      };
      return (0, N.jsxs)(h.u, {
        "data-qa": "phishing-info-modal",
        visible: n,
        onClose: o,
        headerImageUrl: i,
        headerHeight: 242,
        footer: (0, N.jsx)(x.o, {
          secondaryActions: (0, N.jsx)(y.z, {
            "data-qa": "phishing-info-modal-button-article",
            mode: "tertiary",
            style: "accent",
            onClick: () => {
              m().sendHHEventButtonClick("phishing_info_modal_article_click");
              r(e[T]);
            },
            children: e[R]
          }),
          primaryActions: (0, N.jsx)(y.z, {
            "data-qa": "phishing-info-modal-button-close",
            mode: "primary",
            style: "accent",
            onClick: o,
            children: e[A]
          })
        }),
        children: [(0, N.jsx)(d.ElementShownAnchor, {
          fn: e => {
            C._i.delete("/shards/employer/phishing_info");
            return m().sendHHEventElementShown(e, {
              name: "phishing_info_modal_shown"
            });
          },
          children: (0, N.jsx)(g.D, {
            Element: "h1",
            size: "medium",
            children: e[E]
          })
        }), (0, N.jsx)(v.X, {
          default: 16
        }), (0, N.jsx)(b.G, {
          children: I.map(n => (0, N.jsx)(j.x, {
            typography: "paragraph-1-regular",
            children: e[n]
          }, n))
        })]
      });
    };
    L.displayName = "Employer/PhishingInfo/index/PhishingInfoComponent";
    const W = (0, f.x)(L);
    var B = a(47221);
    var M = a.n(B);
    var V = a(622195);
    var D = a.n(V);
    var F = a(36074);
    var H = a(566183);
    var q = a(853827);
    var U = a(791996);
    var X = a(750128);
    var z = a(963750);
    var O = a(789813);
    var Z = a(859716);
    var Y = a(136361);
    const G = "https://rating.hh.ru/poll";
    const $ = "https://rating.hh.ru/history/rating";
    const Q = "container--NXZqy37j8YgiQihm";
    const J = "description-wrapper--vwPa_EkqSkGZqqTp";
    const K = "illustration--P0nln3ZLgMM09cJg";
    const ee = "index.employersRatingResult.header";
    const ne = "index.employersRatingResult.description";
    const ae = "index.employersRatingResult.button";
    const te = "index_employers_rating_result_links";
    const se = ({
      trls: e
    }) => {
      const n = (0, t.useRef)(null);
      const a = (0, _.v)(e => e.userType);
      const s = (0, _.v)(({
        features: e
      }) => e[te]);
      let i = "";
      try {
        i = JSON.parse(s).aboveFooterCard;
      } catch (e) {
        i = `${$}${new Date().getFullYear() - 1}?utm_source=hh.ru&utm_medium=referral&utm_campaign=above_footer_poll`;
      }
      i = `${i}&utm_term=${a}`;
      const r = `/account/login?role=applicant&backurl=${encodeURIComponent(i)}`;
      (0, t.useEffect)(() => {
        if (n.current) {
          m().sendEventElementShown(n.current, a, "show", "employers-rating-result");
        }
      }, [a]);
      return (0, N.jsx)(Y.Z, {
        padding: 12,
        borderWidth: "default",
        borderRadius: 24,
        stretched: true,
        verticalStretched: true,
        children: (0, N.jsxs)("div", {
          className: Q,
          children: [(0, N.jsxs)("div", {
            children: [(0, N.jsx)(v.X, {
              default: 12
            }), (0, N.jsx)(g.D, {
              Element: "h3",
              size: "medium",
              alignment: "center",
              children: (0, Z.WU)(e[ee], {
                "{0}": (0, N.jsx)("br", {}),
                "{1}": new Date().getFullYear() - 1
              })
            }), (0, N.jsx)(v.X, {
              default: 16
            }), (0, N.jsx)("div", {
              className: J,
              children: (0, N.jsx)(j.x, {
                typography: "paragraph-3-regular",
                Element: "span",
                children: e[ne]
              })
            })]
          }), (0, N.jsx)("div", {
            className: K
          }), (0, N.jsx)(y.z, {
            Element: "a",
            target: "_blank",
            href: r,
            onClick: () => {
              m().sendEvent(a, "button_click", "employers-rating-result");
            },
            mode: "secondary",
            style: "accent",
            stretched: true,
            children: e[ae]
          })]
        })
      });
    };
    se.displayName = "components/EmployerRatingResult/index/EmployerRatingResult";
    const ie = (0, f.x)(se);
    var re = a(468444);
    const oe = "container--ZNqCvnkA1ADz7xt0";
    const le = "description-wrapper--gfhs2k6XrMpUD0s9";
    const ce = "illustration--NPdd8Ze_Ki4zMQu7";
    const de = "index.employersRatingTeaser.header";
    const me = "index.employersRatingTeaser.description";
    const pe = "index.employersRatingTeaser.button";
    const ue = "index_employers_rating_links";
    const he = ({
      trls: e
    }) => {
      const n = (0, t.useRef)(null);
      const a = (0, _.v)(e => e.userType);
      const s = a === re.FW.Anonymous;
      const i = (0, _.v)(({
        features: e
      }) => e[ue]);
      let r = "";
      try {
        r = JSON.parse(i).aboveFooterCard;
      } catch (e) {
        r = `${G}?utm_source=hh.ru&utm_medium=referral&utm_campaign=above_footer_poll`;
      }
      r = `${r}&utm_term=${a}`;
      const o = s ? `/account/login?role=applicant&backurl=${encodeURIComponent(r)}` : r;
      (0, t.useEffect)(() => {
        if (n.current) {
          m().sendEventElementShown(n.current, a, "show", "employers-rating-teaser");
        }
      }, [a]);
      return (0, N.jsx)(Y.Z, {
        padding: 12,
        borderWidth: "default",
        borderRadius: 24,
        stretched: true,
        verticalStretched: true,
        children: (0, N.jsxs)("div", {
          className: oe,
          children: [(0, N.jsxs)("div", {
            children: [(0, N.jsx)(v.X, {
              default: 12
            }), (0, N.jsx)(g.D, {
              Element: "h3",
              size: "medium",
              alignment: "center",
              children: e[de]
            }), (0, N.jsx)(v.X, {
              default: 16
            }), (0, N.jsx)("div", {
              className: le,
              children: (0, N.jsx)(j.x, {
                typography: "paragraph-3-regular",
                children: e[me]
              })
            })]
          }), (0, N.jsx)("div", {
            className: ce
          }), (0, N.jsx)(y.z, {
            Element: "a",
            target: "_blank",
            href: o,
            onClick: () => {
              m().sendEvent(a, "button_click", "employers-rating-teaser");
            },
            mode: "secondary",
            style: "accent",
            stretched: true,
            children: e[pe]
          })]
        })
      });
    };
    he.displayName = "components/EmployerRatingTeaser/index/EmployerRatingTeaser";
    const xe = (0, f.x)(he);
    var ye = a(882177);
    var ge = a.n(ye);
    var ve = a(665060);
    var be = a.n(ve);
    var je = a(650911);
    var fe = a(555498);
    var _e = a(281430);
    var Se = a(846192);
    var Ce = a(946421);
    var ke = a(110034);
    const we = "wrapper--JPKFEcpc11Ynimxa";
    const Ne = "wrapper_zp--EnFdp4ZL8_sATl9y";
    const Ee = "social-wrapper--zsSExP7QG0gLGOG7";
    const Ae = "social-wrapper_zp--Hi3VjgyiU2EmRG4v";
    const Re = "links-bottom--z3ugPvdcvYkSNPAv";
    const Pe = "top-section--GWpKNQgJF3ERghp2";
    const Te = "qr-image--lJKuOcM7hW8xz2M_";
    const Ie = "index.messengers.bots.header";
    const Le = {
      mobile: "index.messengers.bots.subheader.mobile",
      desktop: "index.messengers.bots.subheader.desktop"
    };
    Ce.B.Viber;
    Ce.B.Telegram;
    Ce.B.Vk;
    const We = {
      [Ce.B.Telegram]: fe.Aoq,
      [Ce.B.Vk]: fe.ud9,
      [Ce.B.Viber]: fe.S28
    };
    const Be = ({
      trls: e
    }) => {
      const {
        messengers: n,
        genericUserType: a,
        source: t,
        page: s
      } = (0, _.Y)(e => e.chatBot);
      const {
        isMobile: i
      } = (0, F.G)();
      const r = (0, Se.$w)();
      const o = () => (0, N.jsx)("div", {
        className: ge()(Ee, {
          [Ae]: r
        }),
        children: n.map(({
          type: e,
          href: n
        }) => (0, N.jsx)(u.SPALink, {
          to: n,
          target: "_blank",
          children: (0, N.jsx)(je.a, {
            icon: We[e],
            onClick: () => be()({
              buttonName: "vacancy_in_messenger_item"
            })
          })
        }, e))
      });
      if (r) {
        return (0, N.jsx)(Y.Z, {
          padding: 24,
          borderRadius: 24,
          stretched: true,
          verticalStretched: true,
          style: "special-secondary",
          children: (0, N.jsxs)("div", {
            className: ge()(we, {
              [Ne]: r
            }),
            children: [(0, N.jsx)(g.D, {
              Element: "h3",
              size: "medium",
              alignment: "left",
              children: e[Ie]
            }), o()]
          })
        });
      } else {
        return (0, N.jsx)(Y.Z, {
          padding: 24,
          borderRadius: 24,
          stretched: true,
          verticalStretched: true,
          style: "special-secondary",
          children: (0, N.jsxs)("div", {
            className: we,
            children: [(0, N.jsx)(v.X, {
              default: 8,
              gteL: 0
            }), (0, N.jsxs)("div", {
              className: Pe,
              children: [(0, N.jsx)("div", {
                children: (0, N.jsx)(Y.Z, {
                  padding: 12,
                  shadow: "level-1",
                  borderRadius: 12,
                  children: (0, N.jsx)(_e.Z, {
                    className: Te,
                    path: (0, ke.k)({
                      page: s,
                      type: "telegram",
                      genericUserType: a,
                      source: t
                    }),
                    alt: "qr-code-telegram"
                  })
                })
              }), (0, N.jsx)("div", {
                children: o()
              })]
            }), (0, N.jsx)(v.X, {
              default: 0,
              gteM: 32
            }), (0, N.jsx)(g.D, {
              Element: "h3",
              description: e[i ? Le.mobile : Le.desktop],
              size: "medium",
              descriptionStyle: "primary",
              alignment: i ? "center" : "left",
              children: e[Ie]
            }), (0, N.jsxs)("div", {
              className: Re,
              children: [(0, N.jsx)(v.X, {
                default: 16
              }), o()]
            }), (0, N.jsx)(v.X, {
              default: 4,
              gteL: 0
            })]
          })
        });
      }
    };
    Be.displayName = "components/MessengersBots/index/MessengersBots";
    const Me = (0, f.x)(Be);
    const Ve = () => {
      const e = (0, _.v)(e => e.showEmployerRatingBlock);
      if ((0, _.v)(e => e.showEmployerRatingResultBlock)) {
        return (0, N.jsx)(ie, {});
      } else if (e) {
        return (0, N.jsx)(xe, {});
      } else {
        return (0, N.jsx)(Me, {});
      }
    };
    Ve.displayName = "components/InternalPromoBlock/index/InternalPromoBlock";
    var De = a(75278);
    var Fe = a(626462);
    var He = a(301023);
    var qe = a(15791);
    var Ue = a(842953);
    const Xe = ({
      href: e,
      image: n,
      title: a,
      isArticle: t = false
    }) => {
      const {
        isMobile: s
      } = (0, F.G)();
      return (0, N.jsx)(Y.Z, {
        borderRadius: 16,
        padding: s ? 16 : 0,
        borderWidth: s ? "default" : "none",
        children: (0, N.jsx)(Fe.b, {
          left: (0, N.jsx)(He.q, {
            image: n,
            size: 48,
            mode: "image",
            placeholder: "city",
            "aria-label": a
          }),
          children: (0, N.jsx)(qe.j, {
            maxLines: 2,
            children: (0, N.jsx)(Ue.r, {
              Element: u.SPALink,
              to: e,
              style: "neutral",
              onClick: () => be()({
                buttonName: t ? "article_item" : "news_item"
              }),
              children: a
            })
          })
        })
      });
    };
    Xe.displayName = "components/NewsBox/NewsBoxItem/NewsBoxItem";
    const ze = "wrapper--nIfjujxbrT8Nx3oR";
    const Oe = "inner--DCMlA9WMabY5s2Nb";
    const Ze = "index.newsBox.viewAll";
    const Ye = ({
      title: e,
      href: n,
      items: a,
      isArticle: t = false,
      trls: s
    }) => {
      const {
        isMobile: i
      } = (0, F.G)();
      return (0, N.jsx)(Y.Z, {
        padding: i ? 0 : 12,
        borderRadius: 24,
        borderWidth: i ? "none" : "default",
        stretched: true,
        verticalStretched: true,
        children: (0, N.jsxs)("div", {
          className: ze,
          children: [(0, N.jsxs)("div", {
            className: Oe,
            children: [(0, N.jsx)(g.D, {
              Element: "h3",
              size: "small",
              children: e
            }), (0, N.jsx)(v.X, {
              default: 24,
              xs: 16,
              s: 16,
              m: 24
            }), (0, N.jsx)(X.z, {
              default: 24,
              xs: 12,
              s: 12,
              m: 24,
              children: a == null ? undefined : a.map(({
                title: e,
                href: n,
                image: a
              }) => (0, N.jsx)(Xe, {
                title: e,
                href: n,
                image: a,
                isArticle: t
              }, e))
            })]
          }), (0, N.jsx)(v.X, {
            default: 24,
            xs: 16,
            s: 16,
            m: 24
          }), (0, N.jsx)(y.z, {
            Element: u.SPALink,
            to: n,
            isSeoLink: true,
            onClick: () => {
              be()({
                buttonName: t ? "article_list" : "news_list"
              });
            },
            mode: "secondary",
            style: "accent",
            stretched: true,
            children: s[Ze]
          })]
        })
      });
    };
    Ye.displayName = "components/NewsBox/index/NewsBox";
    const Ge = (0, f.x)(Ye);
    var $e = a(778828);
    var Qe = a.n($e);
    var Je = a(21084);
    var Ke = a(178562);
    var en = a(674070);
    var nn = a(226453);
    var an = a(394756);
    var tn = a(160134);
    var sn = a(419713);
    var rn = a.n(sn);
    var on = a(528243);
    var ln = a(917644);
    const cn = "50";
    const dn = e => {
      let n = `/employer/${e.company.id}`;
      if (e.company.department) {
        n += `?dpt=${e.company.department["@code"]}`;
      }
      return n;
    };
    const mn = (e, n) => {
      if (n.catalogPath) {
        return n.catalogPath;
      }
      return `${e.id === cn ? "/vacancies/podrabotka" : "/search/vacancy"}?${n.query}`;
    };
    const pn = "container--zxxufanRU28zBH35";
    const un = ({
      professions: e,
      parentProfession: n,
      currency: a,
      showSeoLinksForBots: t
    }) => (0, N.jsx)("div", {
      className: pn,
      children: [n, ...e].map((e, s) => (0, N.jsx)(u.SPALink, {
        to: mn(n, e),
        additionalQueryParams: {
          hhtmFromLabel: "rainbow_profession"
        },
        isSeoLink: t,
        "data-qa": "profession-item-title",
        onClick: () => rn()({
          value: e.name,
          position: s
        }),
        children: (0, N.jsxs)(Y.Z, {
          borderWidth: "default",
          stretched: true,
          padding: 16,
          borderRadius: 16,
          hoverEnabled: true,
          children: [(0, N.jsx)(j.x, {
            typography: "label-2-regular",
            children: e.name
          }), (0, N.jsx)(v.X, {
            default: 4,
            m: 0
          }), (0, N.jsx)(j.x, {
            typography: "label-3-regular",
            style: "secondary",
            children: (0, N.jsx)(on.Z, {
              from: e.compensationFrom,
              to: e.compensationTo,
              currencyCode: a,
              dash: true
            })
          }), (0, N.jsx)(v.X, {
            default: 4,
            m: 0
          }), (0, N.jsx)(j.x, {
            typography: "paragraph-3-regular",
            style: "tertiary",
            children: (0, N.jsx)(ln.D, {
              value: e.count
            })
          })]
        }, e.name)
      }, e.name))
    });
    un.displayName = "RainbowCatalog/BottomSheet/index/BottomSheetProfessions";
    const hn = un;
    var xn = a(940389);
    var yn = a(110046);
    var gn = a.n(yn);
    var vn = a(566456);
    var bn = a(261410);
    var jn = a(454386);
    var fn = a(228709);
    var _n = a(347841);
    var Sn = a(365415);
    const Cn = "professions.promo.remote";
    const kn = {
      one: "professions.vacancies.one",
      some: "professions.vacancies.some",
      many: "professions.vacancies.many"
    };
    const wn = ({
      trls: e
    }) => {
      var n;
      const a = (0, _.v)(e => e.professionsList);
      const s = (0, _.v)(e => e.userType);
      const [i, r] = (0, t.useState)(false);
      const o = (0, _.v)(e => e.remoteWorkCounter);
      const l = (0, xn.useDispatch)();
      const [c, d] = (0, t.useState)(null);
      const p = (0, Sn.w)();
      const u = {
        title: e[Cn],
        vacanciesCount: o.count,
        link: `${nn.Z.vacancySearch}?schedule=remote&L_profession_id=0&area=${o.areaId}`,
        dataQa: {
          tile: "remote-item-mobile"
        }
      };
      const h = (e, n) => {
        m().sendEvent(s, "profession_block", e);
        gn()({
          value: e,
          position: n
        });
      };
      return (0, N.jsxs)("div", {
        children: [(0, N.jsxs)(vn.T, {
          scrollable: true,
          children: [(0, N.jsx)(bn.X, {
            Element: "a",
            href: u.link,
            onClick: e => {
              var n;
              var a;
              var t;
              var s;
              n = e;
              a = u.title;
              t = u.link;
              s = 1;
              if (p) {
                n.preventDefault();
                l((0, _n.F)(t));
              }
              h(a, s);
            },
            children: (0, N.jsx)("span", {
              "data-qa": u.dataQa.tile,
              children: u.title
            })
          }, u.title), a == null || (n = a.professions) === null || n === undefined ? undefined : n.map((e, n) => (0, N.jsx)(bn.X, {
            Element: "button",
            onClick: () => {
              ((e, n) => {
                h(e.name, n);
                if (a) {
                  r(true);
                  d({
                    title: e.name,
                    body: (0, N.jsx)(hn, {
                      professions: e.professions,
                      parentProfession: e,
                      currency: a == null ? undefined : a.currency
                    }),
                    vacanciesCount: e.count
                  });
                }
              })(e, n + 2);
            },
            "data-qa": "professions-item-mobile",
            children: e.name
          }, e.name))]
        }), (0, N.jsx)(jn.R, {
          visible: i,
          onClose: () => r(false),
          header: (0, N.jsx)(fn.v, {
            "data-qa": "professions-modal-mobile-page",
            right: (0, N.jsx)(en.Cs7, {
              onClick: () => {
                r(false);
              }
            }),
            title: c == null ? undefined : c.title,
            subtitle: c != null && c.vacanciesCount ? (0, Je._)(c.vacanciesCount, {
              one: e[kn.one],
              some: e[kn.some],
              many: e[kn.many]
            }) : undefined,
            showDivider: "always"
          }),
          children: (0, N.jsx)("div", {
            "data-qa": "professions-modal-mobile-content",
            children: c == null ? undefined : c.body
          })
        })]
      });
    };
    wn.displayName = "RainbowCatalog/ChipsProfessions/index/ChipsProfessions";
    const Nn = (0, f.x)(wn);
    var En = a(410881);
    const An = () => {
      const e = En.L.INDEX_WORK_IN_COMPANY_ANONYMOUS;
      const n = (0, _.v)(n => n.banners[e]);
      if (n != null && n[0]) {
        return (0, N.jsx)("div", {
          className: "work-in-company-banner",
          onClick: () => M()({
            type: "workInCompanyBanner"
          }),
          children: (0, N.jsx)(z.F, {
            ...n[0]
          })
        });
      } else {
        return null;
      }
    };
    An.displayName = "components/WorkInCompany/WorkInBanner/WorkInCompanyBanner";
    var Rn = a(438573);
    var Pn = a(380726);
    const Tn = (e, n, a = Rn.M) => {
      const s = (0, t.useRef)([]);
      (0, t.useLayoutEffect)(() => () => {
        s.current.forEach(e => e());
        s.current.length = 0;
      }, []);
      return (0, t.useCallback)(t => {
        if (t == null || !t.id) {
          return;
        }
        const i = e.find(({
          id: e
        }) => e === +t.id);
        if (i != null && i.viewUrl) {
          s.current.push((0, Pn.In)({
            element: t,
            viewUrl: i.viewUrl,
            location: n,
            spyParams: a
          }));
        }
      }, [e, n, a]);
    };
    var In = a(103741);
    var Ln = a(832553);
    var Wn = a.n(Ln);
    var Bn = a(413134);
    const Mn = (e, n) => {
      Wn()({
        employerId: `${e.id}`,
        hhtmSourceLabel: n
      });
    };
    const Vn = (e, n, a, t = false) => t ? `${n.protocolHost}/employer/${e.id}` : `https://content.hh.ru/api/v1/click?${Bn.j.stringify({
      contentId: e.workInCompanyId,
      placeId: e.placeId,
      employerId: e.id,
      domainAreaId: n.domainAreaId,
      host: n.protocolHost,
      location: a
    })}`;
    var Dn = a(862079);
    const Fn = ({
      company: e
    }) => {
      const n = (0, _.v)(e => e.locale);
      const a = (0, Se.$w)();
      const s = (0, t.useRef)(null);
      const i = (0, Dn.X)(s);
      return (0, N.jsxs)(Fe.b, {
        align: "top",
        slot: (0, N.jsx)(He.q, {
          shapeCircle: true,
          size: 40,
          mode: "image",
          image: e.logoUrl || "",
          placeholder: "city",
          "aria-label": "company-logo",
          "data-qa": "company-of-the-day-title"
        }),
        children: [(0, N.jsx)(u.SPALink, {
          to: Vn(e, n, Pn.qM.RainbowCatalog, a),
          onClick: () => Mn(e, "rainbow_catalog"),
          children: (0, N.jsx)(j.x, {
            typography: "label-2-regular",
            style: "primary",
            maxLines: 1,
            "data-qa": "company-of-the-day-name",
            children: e.companyName
          })
        }), i && (0, N.jsx)(In.p, {
          placement: "top-center",
          activatorRef: s,
          children: (0, N.jsx)("div", {
            ref: s,
            children: e.companyName
          })
        }), (0, N.jsx)(j.x, {
          typography: "label-3-regular",
          style: "secondary",
          children: (0, N.jsx)(ln.D, {
            value: e.vacanciesNumber
          })
        })]
      }, e.companyName);
    };
    Fn.displayName = "RainbowCatalog/Drop/CompanyOfTheDay/CompanyOfTheDayComponent";
    const Hn = "container--H5OyYQBaJ0I7lUSw";
    const qn = "container-visible--tkyKY9HweJMkeHfz";
    const Un = "vacancies-list--Lx9h3H2Dysd2RrDB";
    const Xn = "companies-list--UARJ1mg5ac9sib21";
    const zn = "companies-banner--Q1VumTgHVk_rAujo";
    const On = ({
      companiesOfTheDay: e
    }) => {
      const n = Tn(e, Pn.qM.RainbowCatalog);
      return (0, N.jsxs)("div", {
        className: Xn,
        children: [(0, N.jsx)("div", {
          className: zn,
          children: (0, N.jsx)(An, {})
        }), e.map(e => (0, N.jsx)("div", {
          id: String(e.id),
          ref: n,
          children: (0, N.jsx)(Fn, {
            company: e
          })
        }, e.id))]
      });
    };
    On.displayName = "RainbowCatalog/Drop/CompaniesOfTheDay/RainbowDropCompaniesOfTheDay";
    var Zn = a(941545);
    const Yn = {
      one: "professions.vacancies.one",
      some: "professions.vacancies.some",
      many: "professions.vacancies.many"
    };
    const Gn = ({
      professions: e,
      parentProfession: n,
      currency: a,
      showSeoLinksForBots: t,
      trls: s
    }) => (0, N.jsx)("div", {
      className: Un,
      children: [n, ...e].map((e, i) => (!t || e.catalogPath || n.id === cn) && (0, N.jsxs)(Fe.b, {
        align: "top",
        children: [(0, N.jsx)(u.SPALink, {
          to: mn(n, e),
          additionalQueryParams: {
            hhtmFromLabel: "rainbow_profession"
          },
          isSeoLink: t,
          "data-qa": "profession-item-title",
          onClick: () => rn()({
            value: e.name,
            position: i
          }),
          children: (0, N.jsx)(j.x, {
            typography: "label-2-regular",
            style: "primary",
            children: e.name
          })
        }), (0, N.jsxs)(j.x, {
          typography: "label-3-regular",
          style: "secondary",
          children: [(0, N.jsx)(on.Z, {
            from: e.compensationFrom,
            to: e.compensationTo,
            currencyCode: a,
            showNoSalaryMessage: true
          }), " ", "·", " ", (0, N.jsx)(Zn.q, {
            value: e.count,
            one: s[Yn.one],
            some: s[Yn.some],
            many: s[Yn.many]
          })]
        })]
      }, e.id))
    });
    Gn.displayName = "RainbowCatalog/Drop/Profession/RainbowDropProfessionComponent";
    const $n = (0, f.x)(Gn);
    var Qn = a(759462);
    var Jn = a(609053);
    var Kn = a(463597);
    var ea = a.n(Kn);
    const na = (e, n) => {
      ea()({
        vacancyId: `${e}`,
        hhtmSourceLabel: n
      });
    };
    const aa = ({
      vacancy: e
    }) => {
      const n = (0, t.useRef)(null);
      const a = (0, Dn.X)(n);
      const s = (0, _.v)(e => e.analyticsParams.hhtmSource);
      return (0, N.jsx)(Fe.b, {
        align: "top",
        slot: (0, N.jsx)(He.q, {
          shapeCircle: true,
          size: 40,
          mode: "image",
          image: e.company.logoUrl || "",
          placeholder: "city",
          "aria-label": "company-logo"
        }),
        children: (0, N.jsxs)(qe.j, {
          children: [(0, N.jsx)(u.SPALink, {
            to: (0, Jn.e$)(e, Pn.mV.RainbowCatalog),
            additionalQueryParams: {
              source: "rainbowCatalog",
              from: s,
              hhtmFromLabel: "recommended_vacancies"
            },
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: () => na(e.vacancyId, "rainbow_catalog"),
            "data-qa": "vacancy_of_the_day_title",
            children: (0, N.jsx)(j.x, {
              typography: "label-2-regular",
              maxLines: 1,
              children: (0, N.jsx)("div", {
                ref: n,
                children: e.name
              })
            })
          }), a && (0, N.jsx)(In.p, {
            placement: "top-center",
            activatorRef: n,
            children: e.name
          }), (0, N.jsx)(j.x, {
            typography: "label-3-regular",
            style: "secondary",
            children: (0, N.jsx)(on.Z, {
              ...e.compensation,
              analyticsContext: "RainbowVacanciesOfTheDay",
              showNoSalaryMessage: true,
              "data-qa": "vacancy_of_the_day_compensation"
            })
          }), (0, N.jsx)(u.SPALink, {
            to: dn(e),
            "data-qa": "vacancy_of_the_day_company",
            children: (0, N.jsxs)(j.x, {
              typography: "label-3-regular",
              style: "tertiary",
              children: [e.company.visibleName, " · ", e.area.name]
            })
          })]
        })
      }, e.vacancyId);
    };
    aa.displayName = "RainbowCatalog/Drop/VacancyOfTheDay/VacancyOfTheDayComponent";
    const ta = ({
      vacancies: e
    }) => {
      const n = (0, Qn.B)(e, Pn.mV.RainbowCatalog);
      return (0, N.jsx)("div", {
        className: Un,
        children: e.map(e => (0, N.jsx)("div", {
          ref: n,
          id: String(e.vacancyId),
          children: (0, N.jsx)(aa, {
            vacancy: e
          })
        }, e.vacancyId))
      });
    };
    ta.displayName = "RainbowCatalog/Drop/VacanciesOfTheDay/RainbowDropVacanciesOfTheDayComponent";
    const sa = (0, f.x)(ta);
    var ia = a(185813);
    const ra = ({
      tileIndex: e,
      activeDropIndex: n,
      activeTileContent: a,
      previousActiveTileIndex: s,
      isXsOnly: i,
      seoContent: r
    }) => {
      const o = (0, t.useRef)(null);
      const l = (0, t.useRef)(null);
      const [c, d] = (0, t.useState)(r ? "auto" : "0px");
      const m = n === e ? a : null;
      const p = Boolean(m);
      const u = !i && (!!r || p);
      (0, t.useEffect)(() => {
        if (r) {
          d("auto");
        } else if (p) {
          if (s === -1) {
            var n;
            const a = l.current?.clientHeight;
            d(`${String(a)}px`);
            const t = () => {
              var e;
              d("auto");
              if ((e = o.current) !== null && e !== undefined) {
                e.removeEventListener("transitionend", t);
              }
            };
            if ((n = o.current) !== null && n !== undefined) {
              n.addEventListener("transitionend", t);
            }
          } else {
            d("auto");
          }
          (e => {
            if (!e.current) {
              return;
            }
            const n = e.current.getBoundingClientRect().top;
            const a = n + 200;
            if (a > window.innerHeight) {
              (0, ia.default)({
                top: window.scrollY + (a - window.innerHeight)
              });
            }
            const t = n - 150;
            if (t < 0) {
              (0, ia.default)({
                top: window.scrollY + t,
                speed: 0
              });
            }
          })(o);
        } else {
          d("0px");
        }
      }, [p, s, e, n, r]);
      return (0, N.jsx)("div", {
        className: ge()(Hn, {
          [qn]: u
        }),
        style: {
          height: c
        },
        "data-qa": "professions-drop-desktop " + (p ? "professions-drop-desktop-active" : ""),
        "data-rainbow-catalog-drop-active": p ? "true" : "false",
        ref: o,
        children: (0, N.jsx)("div", {
          ref: l,
          children: (0, N.jsx)(Y.Z, {
            padding: 32,
            borderRadius: 32,
            style: "secondary",
            stretched: true,
            children: r || m
          })
        })
      });
    };
    ra.displayName = "RainbowCatalog/Drop/index/RainbowTileDrop";
    const oa = (0, f.x)(ra);
    const la = "container--LIr3MyfH7y8oFUVV";
    const ca = "card-container--YHdJTQC0o44XFUtC";
    const da = "card-content--PneLQp19eDQ8dkKC";
    const ma = "title--RRyegz9twwBwUYnM";
    const pa = "chevron-wrap--lr_2P0CDYNU8UjiD";
    const ua = ({
      title: e,
      compensation: n,
      vacanciesCount: a,
      tileIndex: t,
      activeDropIndex: s,
      activeTileContent: i,
      previousActiveTileIndex: r,
      dataQa: o,
      onClick: l,
      onClickMobile: c,
      mobileContent: d,
      isXsOnly: p,
      link: h,
      children: x,
      showSeoLinksForBots: y,
      isForBottomsheet: g
    }) => {
      const b = (0, _.v)(e => e.userType);
      const f = (0, Sn.w)();
      const S = (0, xn.useDispatch)();
      const {
        isXS: C
      } = (0, F.G)();
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)("div", {
          className: la,
          "data-rainbow-catalog-tile": "tile",
          onClick: () => ((e, n) => {
            gn()({
              value: e,
              position: n
            });
          })(e, t),
          children: (0, N.jsx)(q.C, {
            xs: 4,
            s: 8,
            m: 4,
            l: 3,
            children: (0, N.jsx)("div", {
              className: ca,
              children: (k = (0, N.jsx)(Y.Z, {
                borderWidth: "default",
                verticalStretched: !C,
                stretched: true,
                padding: g ? 16 : 24,
                borderRadius: 24,
                onClick: n => C ? ((e, n, a) => {
                  m().sendEvent(b, "profession_block", e);
                  gn()({
                    value: e,
                    position: t
                  });
                  if (h) {
                    if (f) {
                      n.preventDefault();
                      S((0, _n.F)(h));
                    }
                  } else if (c != null) {
                    c(e, d, a);
                  }
                })(e, n, a) : (m().sendEvent(b, "profession_block", e), gn()({
                  value: e,
                  position: t
                }), void (h || l(t, x))),
                "data-qa": o.tile,
                children: (0, N.jsxs)("div", {
                  className: da,
                  children: [(0, N.jsxs)("div", {
                    children: [(0, N.jsxs)("div", {
                      className: ma,
                      children: [(0, N.jsx)(j.x, {
                        typography: g ? "label-2-regular" : "subtitle-1-semibold",
                        children: e
                      }), !!h && (0, N.jsx)(en.eTh, {
                        initialColor: "secondary"
                      })]
                    }), g && (0, N.jsx)(v.X, {
                      default: 4,
                      m: 0
                    }), (0, N.jsx)(j.x, {
                      typography: g ? "label-3-regular" : "paragraph-2-regular",
                      style: g ? "secondary" : "primary",
                      children: n && (0, N.jsx)(on.Z, {
                        ...n,
                        analyticsContext: "RainbowTile",
                        dash: true
                      })
                    })]
                  }), (0, N.jsx)(v.X, {
                    default: g ? 4 : 16,
                    m: 0
                  }), (0, N.jsx)(j.x, {
                    typography: "paragraph-3-regular",
                    style: g ? "tertiary" : "secondary",
                    children: (0, N.jsx)(ln.D, {
                      value: a
                    })
                  })]
                })
              }), h ? (0, N.jsx)(u.SPALink, {
                to: h,
                className: "dashboard-tiles-item-link",
                onClick: e => {
                  if (f) {
                    e.preventDefault();
                    S((0, _n.F)(h));
                  }
                },
                children: k
              }) : k)
            })
          })
        }), (0, N.jsx)(oa, {
          tileIndex: t,
          activeDropIndex: s,
          activeTileContent: i,
          previousActiveTileIndex: r,
          isXsOnly: p,
          ...(y ? {
            seoContent: x
          } : {})
        })]
      });
      var k;
    };
    ua.displayName = "RainbowCatalog/Tile/index/RainbowTile";
    const ha = ua;
    var xa = a(820716);
    const ya = ({
      vacancy: e,
      tileIndex: n,
      activeDropIndex: a,
      activeTileContent: s,
      previousActiveTileIndex: i
    }) => {
      const r = (0, t.useRef)(null);
      const o = (0, t.useRef)(null);
      const l = (0, t.useRef)(null);
      const c = (0, Dn.X)(r);
      const d = (0, Dn.X)(l);
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)("div", {
          className: la,
          "data-rainbow-catalog-tile": "tile",
          children: (0, N.jsx)(q.C, {
            xs: 4,
            s: 8,
            m: 4,
            l: 3,
            children: (0, N.jsx)("div", {
              className: ca,
              children: (0, N.jsxs)(Y.Z, {
                borderWidth: "default",
                verticalStretched: true,
                stretched: true,
                padding: 24,
                borderRadius: 24,
                hoverEnabled: true,
                children: [(0, N.jsxs)("div", {
                  className: da,
                  children: [(0, N.jsxs)(u.SPALink, {
                    to: e.links.desktop,
                    children: [(0, N.jsxs)("div", {
                      ref: o,
                      className: ma,
                      children: [(0, N.jsx)(j.x, {
                        typography: "subtitle-1-semibold",
                        maxLines: 1,
                        children: (0, N.jsx)("div", {
                          ref: r,
                          "data-qa": "neva-vacancy-item-desktop-title",
                          children: e.name
                        })
                      }), (0, N.jsx)("div", {
                        className: pa,
                        children: (0, N.jsx)(en.eTh, {
                          initialColor: "secondary"
                        })
                      })]
                    }), c && (0, N.jsx)(In.p, {
                      placement: "top-center",
                      activatorRef: o,
                      children: e.name
                    }), (0, N.jsx)(j.x, {
                      typography: "paragraph-2-regular",
                      children: e.compensation && (0, N.jsx)(on.Z, {
                        ...e.compensation,
                        analyticsContext: "RainbowTileVacancy 2"
                      })
                    })]
                  }), (0, N.jsx)(u.SPALink, {
                    to: dn(e),
                    children: (0, N.jsx)(j.x, {
                      typography: "paragraph-3-regular",
                      style: "secondary",
                      maxLines: 2,
                      children: (0, N.jsx)("div", {
                        ref: l,
                        children: `${e.company.name ? `${e.company.name}, ` : ""}${e.area.name}`
                      })
                    })
                  }), d && (0, N.jsx)(In.p, {
                    placement: "top-center",
                    activatorRef: o,
                    children: `${e.company.name ? `${e.company.name}, ` : ""}${e.area.name}`
                  })]
                }), e.searchDebug && (0, N.jsx)(xa.p, {
                  ...e.searchDebug
                })]
              })
            })
          })
        }), (0, N.jsx)(oa, {
          tileIndex: n,
          activeDropIndex: a,
          activeTileContent: s,
          previousActiveTileIndex: i
        })]
      });
    };
    ya.displayName = "RainbowCatalog/Tile/Vacancy/RainbowTileVacancy";
    var ga = a(21119);
    var va = a.n(ga);
    const ba = {
      container: "container--CTdumH87DhMdf59B",
      "container-mobile": "container-mobile--OGBhZd5GuYEzgEM6",
      containerMobile: "container-mobile--OGBhZd5GuYEzgEM6",
      title: "title--IPjOu9u58D0_3Ouz"
    };
    const ja = "rainbow_seo_links_for_search_bots";
    const fa = "professions.promo.vacancies";
    const _a = "professions.promo.employers";
    const Sa = "professions.promo.remote";
    const Ca = "index.anonnymous.popular.title";
    const ka = {
      one: "professions.vacancies.one",
      some: "professions.vacancies.some",
      many: "professions.vacancies.many"
    };
    const wa = {
      [Ke.Uo.M]: 3,
      [Ke.Uo.S]: 2,
      [Ke.Uo.L]: 4
    };
    const Na = ({
      trls: e
    }) => {
      const n = (0, _.v)(e => e.userType);
      const a = (0, _.v)(e => e.professionsList);
      const s = a == null ? undefined : a.professions;
      const i = a == null ? undefined : a.currency;
      const r = (0, _.v)(e => e.suitableVacancies);
      const o = (0, _.v)(e => e.applicantInfo);
      const l = (0, _.v)(e => e.remoteWorkCounter);
      const c = (0, _.v)(e => e.companiesOfTheDay);
      const d = (0, _.v)(e => e.vacanciesOfTheDay);
      const m = (0, _.v)(e => e.isBot && !!s && !!e.features[ja]);
      const {
        breakpoint: p
      } = (0, F.G)();
      const [u, h] = (0, t.useState)(null);
      const [x, y] = (0, t.useState)(null);
      const [b, j] = (0, t.useState)(-1);
      const [f, S] = (0, t.useState)(-1);
      const C = (0, t.useRef)(0);
      const k = (0, t.useRef)(null);
      const w = (0, t.useRef)(-1);
      const {
        isXS: E,
        isMobile: A
      } = (0, F.G)();
      (({
        activeTileIndex: e,
        setActiveDropIndex: n,
        catalogElementRef: a
      }) => {
        const s = (0, t.useRef)(ga.Breakpoint.L);
        const i = va()(ga.Breakpoint.L);
        const r = (0, t.useCallback)(() => {
          if (!a.current) {
            return -1;
          }
          const n = [...a.current.querySelectorAll("[data-rainbow-catalog-tile]")];
          const t = n[e];
          if (!t) {
            return -1;
          }
          const s = n.slice(e).filter(e => e.offsetTop === t.offsetTop);
          return n.indexOf(s[s.length - 1]);
        }, [e, a]);
        (0, t.useEffect)(() => {
          if (a.current) {
            if (s.current !== i) {
              const e = a.current.querySelector("[data-rainbow-catalog-drop-active=\"true\"]");
              if (e != null) {
                e.classList.add("g-hidden");
              }
              s.current = i;
              n(r());
              if (e != null) {
                e.classList.remove("g-hidden");
              }
            } else {
              n(r());
            }
          }
        }, [i, a, r, n]);
      })({
        activeTileIndex: b,
        setActiveDropIndex: S,
        catalogElementRef: k
      });
      const R = (r == null ? undefined : r.vacancies) || [];
      const P = n === re.FW.Anonymous && (R == null ? undefined : R.length) > tn.s;
      const T = n === re.FW.Applicant && o.finished > 0;
      const I = c.reduce((e, n) => e + n.vacanciesNumber, 0);
      const [L, W] = (0, t.useState)(false);
      const B = (e, n) => {
        if (!m) {
          w.current = b;
          j(b === e ? -1 : e);
          h(n);
        }
      };
      const M = (e, n, a) => {
        if (!m) {
          W(true);
          y({
            title: e,
            body: n,
            vacanciesCount: a
          });
        }
      };
      const V = {
        isXsOnly: T,
        onClick: B,
        activeDropIndex: f,
        activeTileContent: u,
        activeTileIndex: b,
        previousActiveTileIndex: w.current
      };
      const D = [];
      const H = [];
      if (d.success && !d.isLoading && d.vacancies.length > 5) {
        D.push({
          title: e[fa],
          vacanciesCount: d.vacancies.length,
          compensation: d.compensation,
          children: (0, N.jsx)(sa, {
            vacancies: d.vacancies
          }),
          dataQa: {
            tile: "vacancy-item-desktop"
          },
          ...V
        });
      }
      if (c.length) {
        D.push({
          title: e[_a],
          vacanciesCount: I,
          children: (0, N.jsx)(On, {
            companiesOfTheDay: c
          }),
          dataQa: {
            tile: "company-item-desktop"
          },
          ...V
        });
      }
      if (l.count && l.areaId) {
        D.push({
          title: e[Sa],
          vacanciesCount: l.count,
          link: `${nn.Z.vacancySearch}?schedule=remote&L_profession_id=0&area=${l.areaId}`,
          dataQa: {
            tile: "remote-item-desktop"
          },
          ...V
        });
        H.push({
          title: e[Sa],
          vacanciesCount: l.count,
          link: `${nn.Z.vacancySearch}?schedule=remote&L_profession_id=0&area=${l.areaId}`,
          dataQa: {
            tile: "remote-item-desktop"
          },
          ...V
        });
      }
      C.current = 0;
      const q = D.length;
      const U = P ? R.length : 0;
      const X = s ? s.length : 0;
      const z = (wa[p] || 4) * 3;
      const O = z - q;
      const Z = U - O > 0 ? O : U;
      const Y = Z > 0 ? 0 : O - U;
      const G = E ? X > 3 : q + U + X > z;
      const $ = (e, n, a, t) => (0, N.jsx)(ha, {
        title: n.name,
        compensation: {
          from: n.compensationFrom,
          to: n.compensationTo,
          currencyCode: a
        },
        vacanciesCount: n.count,
        isXsOnly: false,
        onClick: B,
        onClickMobile: M,
        mobileContent: (0, N.jsx)(hn, {
          professions: n.professions,
          parentProfession: n,
          currency: a
        }),
        tileIndex: e,
        activeTileIndex: b,
        activeDropIndex: f,
        activeTileContent: u,
        previousActiveTileIndex: w.current,
        dataQa: {
          tile: "professions-item-desktop"
        },
        showSeoLinksForBots: m,
        isForBottomsheet: t,
        children: (0, N.jsx)($n, {
          professions: n.professions,
          parentProfession: n,
          currency: a,
          showSeoLinksForBots: m
        })
      }, n.id);
      return (0, N.jsx)(N.Fragment, {
        children: (0, N.jsxs)("div", {
          ref: k,
          children: [(0, N.jsx)(g.D, {
            Element: "h3",
            size: A ? "small" : "medium",
            style: "primary",
            children: (0, N.jsxs)("div", {
              className: ba.title,
              children: [(0, N.jsx)(en.MCT, {
                initialColor: "warning"
              }), e[Ca]]
            })
          }), (0, N.jsx)(v.X, {
            default: 16,
            gteS: 20,
            gteM: 24
          }), E ? (0, N.jsx)(Nn, {
            promoTiles: H
          }) : (0, N.jsx)(an.Z, {
            renderPreview: () => E ? (0, N.jsxs)("div", {
              className: ba.containerMobile,
              children: [H.map(e => {
                C.current += 1;
                return (0, t.createElement)(ha, {
                  ...e,
                  key: e.title,
                  tileIndex: C.current - 1
                });
              }), s == null ? undefined : s.slice(0, 3).map(e => {
                const n = C.current;
                C.current += 1;
                return $(n, e, i);
              })]
            }) : (0, N.jsxs)("div", {
              className: ba.container,
              children: [D.map(e => {
                C.current += 1;
                return (0, t.createElement)(ha, {
                  ...e,
                  key: e.title,
                  tileIndex: C.current - 1
                });
              }), P && R.slice(0, Z).map(e => {
                C.current += 1;
                return (0, N.jsx)(ya, {
                  vacancy: e,
                  tileIndex: C.current - 1,
                  activeDropIndex: f,
                  activeTileContent: u,
                  previousActiveTileIndex: w.current
                }, e.vacancyId);
              }), s == null ? undefined : s.slice(0, Y).map(e => {
                const n = C.current;
                C.current += 1;
                return $(n, e, i);
              })]
            }),
            renderRest: () => (0, N.jsxs)("div", {
              className: ba.container,
              children: [Z > 0 && (0, N.jsx)(N.Fragment, {
                children: P && R.slice(Z).map(e => {
                  C.current += 1;
                  return (0, N.jsx)(ya, {
                    vacancy: e,
                    tileIndex: C.current - 1,
                    activeDropIndex: f,
                    activeTileContent: u,
                    previousActiveTileIndex: w.current
                  }, e.vacancyId);
                })
              }), s == null ? undefined : s.slice(Y).map(e => {
                const n = C.current;
                C.current += 1;
                return $(n, e, i);
              })]
            }),
            restSpacing: (0, N.jsx)(v.X, {
              default: 24
            }),
            needToExpand: G,
            forceExpandedVisible: m,
            renderBottomSheetContent: () => (0, N.jsx)("div", {
              className: ba.wrapperVertical,
              "data-qa": "professions-modal-mobile-content",
              children: x ? x.body : (0, N.jsxs)("div", {
                className: ba.containerMobile,
                children: [H.map(e => {
                  C.current += 1;
                  return (0, t.createElement)(ha, {
                    ...e,
                    key: e.title,
                    tileIndex: C.current - 1,
                    isForBottomsheet: true
                  });
                }), s == null ? undefined : s.map(e => {
                  const n = C.current;
                  C.current += 1;
                  return $(n, e, i, true);
                })]
              })
            }),
            bottomSheetTitle: (0, N.jsx)("span", {
              "data-qa": "professions-modal-mobile-page",
              children: x ? x.title : e[Ca]
            }),
            bottomSheetSubtitle: x != null && x.vacanciesCount ? (0, Je._)(x.vacanciesCount, {
              one: e[ka.one],
              some: e[ka.some],
              many: e[ka.many]
            }) : undefined,
            onBottomSheetClose: () => {
              W(false);
              setTimeout(() => y(null), 300);
            },
            onBottomSheetClickBack: x != null && x.body ? () => y(null) : undefined,
            forceBottomSheetVisible: L,
            collapseCallback: (e, n) => {
              ((e, n) => {
                if (n) {
                  Qe()({
                    type: P ? "suitable" : "professions"
                  });
                  setTimeout(() => {
                    if (!E && e != null && e.current) {
                      e.current.style.maxHeight = "none";
                    }
                  }, 500);
                }
              })(e, n);
            },
            collapsibleButtonDataQa: "professions-collapsible-button"
          })]
        })
      });
    };
    Na.displayName = "components/RainbowCatalog/index/RainbowCatalog";
    const Ea = (0, f.x)(Na);
    var Aa = a(55873);
    var Ra = a(730989);
    const Pa = 14;
    const Ta = [];
    var Ia = a(388926);
    function La() {
      const e = Ia.L.get("hhuid");
      const n = Ia.L.get("_hi");
      const a = {
        Hhuid: e,
        Token: e,
        Hhid: null
      };
      if (n) {
        a.Hhid = n;
      }
      return a;
    }
    function Wa(e, n = Pa) {
      if (!e || e.length === 0) {
        const e = 700;
        const a = [];
        for (let t = 0; t <= n; t++) {
          a.push(e + t);
        }
        return a;
      }
      return e.slice(0, n);
    }
    function Ba(e, n) {
      a = n;
      if (Boolean(a && a instanceof Object && Array.isArray(a.banners) && a.banners.length)) {
        return function (e, n) {
          const a = new Set(e.reduce((e, {
            vacancyId: n,
            vacancyOfTheDayId: a
          }) => {
            if (function (e = null) {
              return e !== null;
            }(a)) {
              e.push(n);
            }
            return e;
          }, []));
          return n.filter(e => !("empty" in e) && !("type" in e) && !a.has(e.vacancyId));
        }(e, n.banners);
      } else {
        return Ta;
      }
      var a;
    }
    const Ma = (e, n, a = Pa) => {
      const t = window.globalVars.bannersBatchUrl;
      if (!t || !function (e) {
        return !!e && Boolean(Math.random() * 100 >= 100 - e);
      }(n)) {
        return Promise.resolve(Ta);
      }
      const s = {
        place: Wa(e.clickmeVacanciesPlacesList, a),
        format: "json",
        vod: true
      };
      return C._i.get(t, {
        params: s,
        headers: La()
      }).then(n => function (e) {
        e.forEach(e => {
          if (e.company.department) {
            e.company.department["@code"] = e.company.department.code;
          }
        });
        return e;
      }(Ba(e.vacancies, n)));
    };
    function Va(e, n, a, t) {
      return function (e, n, a, t) {
        if (!n.length) {
          return e;
        }
        const s = e.slice(a, Pa);
        const i = n.slice(0, Pa - a);
        const r = e.slice(0, a).concat(i);
        const o = Pa - r.length;
        if (t && i.length) {
          (function (e, n) {
            e.unshift(e[n]);
            e.splice(n + 1, 1);
          })(r, a);
        }
        if (o > 0 && s.length > 0) {
          return r.concat(s.slice(0, o));
        } else {
          return r;
        }
      }(e, n, a, t);
    }
    const Da = (0, Aa.makeSetStoreField)("vacanciesOfTheDay");
    const Fa = "enable_clickme_vacancies_shuffling_in_to_vacancies_of_the_day_main_page";
    const Ha = () => {
      const e = (0, xn.useDispatch)();
      const n = (0, Se.Xl)();
      const a = (0, t.useRef)(false);
      const s = (0, _.v)(e => e.vacanciesOfTheDay);
      const i = (0, _.v)(({
        features: e
      }) => e[Fa]);
      const r = (0, Ra.ZP)("replace_clickme_vacancy_fixed", Boolean(s.clickmeVacancies.length));
      (0, t.useEffect)(() => {
        if (!a.current) {
          a.current = true;
          e(Da({
            ...s,
            isLoading: true
          }));
          C._i.get("/shards/vacancies_of_the_day").then(a => {
            const {
              vacancies: t,
              compensation: r,
              ...o
            } = a;
            const l = function (e) {
              let n = Pa;
              e.some(({
                vacancyOfTheDayId: e
              }, a) => !function (e = null) {
                return e !== null;
              }(e) && (n = Math.min(a, Pa), true));
              return n;
            }(t ?? Ta);
            const c = Pa - l;
            const d = () => e(Da({
              ...s,
              ...o,
              compensation: r,
              vacancies: t,
              readyToShuffleVacancies: false,
              isLoading: false,
              success: true
            }));
            if (t && c && n) {
              Ma({
                ...o,
                compensation: r,
                vacancies: t
              }, i, c).then(n => e(Da({
                ...s,
                ...o,
                tempVacancies: t,
                defaultCompensation: r,
                clickmeVacancies: n,
                firstFakeVacancyIndex: l,
                readyToShuffleVacancies: true
              }))).catch(d);
            } else {
              d();
            }
          }).catch(() => {
            e(Da({
              ...s,
              readyToShuffleVacancies: false,
              isLoading: false,
              success: false
            }));
          });
        }
      }, [i, e, n, r, s]);
      (0, t.useLayoutEffect)(() => {
        if (s.readyToShuffleVacancies) {
          const n = Va(s.tempVacancies, s.clickmeVacancies, s.firstFakeVacancyIndex, r);
          C._i.post("/shards/enrich_vod", {
            vacancies: n
          }).then(({
            data: n
          }) => e(Da({
            ...s,
            vacancies: n.vacancies,
            compensation: n.compensation,
            readyToShuffleVacancies: false,
            isLoading: false,
            success: true
          }))).catch(() => e(Da({
            ...s,
            vacancies: n,
            compensation: s.defaultCompensation,
            readyToShuffleVacancies: false,
            isLoading: false,
            success: true
          })));
        }
      }, [e, r, s]);
    };
    var qa = a(166122);
    const Ua = e => C._i.post("/shards/anonymous/set_signup_backurl", {
      backUrl: e
    });
    const Xa = () => C._i.post("/shards/anonymous/signup_modal_already_shown");
    var za = a(428909);
    var Oa = a.n(za);
    var Za = a(33826);
    var Ya = a(492134);
    var Ga = a(365128);
    var $a = a(578213);
    const Qa = (0, t.createContext)({
      hhtmSource: ""
    });
    const Ja = () => (0, t.useContext)(Qa);
    const Ka = ({
      children: e,
      hhtmSource: n
    }) => {
      const a = (0, t.useMemo)(() => ({
        hhtmSource: n
      }), [n]);
      return (0, N.jsx)(Qa.Provider, {
        value: a,
        children: e
      });
    };
    Ka.displayName = "SignupModal/contexts/SignupAnalytics/SignupAnalyticsProvider";
    var et = a(134460);
    var nt = a(632202);
    var at = a(411706);
    const tt = ({
      Verification: e = et.G,
      isSignupPage: n,
      next: a,
      onSignIn: t,
      ...s
    }) => {
      const i = (0, _.v)(e => {
        return e.otpVerification?.codeLength;
      });
      const r = (0, _.v)(e => {
        return e.otpVerification?.expectedOperationType;
      });
      const o = Ja();
      const l = (0, u.usePush)();
      const {
        login: c,
        authType: d,
        accountType: p,
        isMultiAccount: h
      } = (0, _.v)(({
        otp: e
      }) => e);
      const x = (0, _.v)(({
        postponedActions: e
      }) => {
        var n;
        if (e == null || (n = e.vacancy) === null || n === undefined) {
          return undefined;
        } else {
          return n.vacancyId;
        }
      });
      const {
        addNotification: y
      } = (0, qa.lm)();
      const g = p === "EMPLOYER" ? nt.b.EmployerOtpAuth : nt.b.ApplicantOtpAuth;
      const v = e => {
        m().sendHHEvent("form_submit", {
          formName: "code_confirmation",
          vacancyId: x,
          authType: $a._X[d] || "unknown",
          errors: e ? (0, at.P)("code_verification", e) : null,
          isSignupPage: n,
          accountType: p,
          isMultiAccount: h,
          hhtmSource: o.hhtmSource
        });
      };
      return (0, N.jsx)(e, {
        onShownAnalytics: e => {
          if (e.current) {
            m().sendHHEventElementShown(e.current, {
              elementName: "code_confirmation",
              vacancyId: x,
              authType: $a._X[d] || "unknown",
              isSignupPage: n,
              accountType: p,
              isMultiAccount: h,
              hhtmSource: o.hhtmSource
            });
          }
        },
        authType: d,
        login: c,
        onSubmit: async (e, s, i) => {
          var r;
          var o;
          var m;
          var p;
          let u;
          e(true);
          try {
            u = await C._i.postFormData("/account/login/by_code", {
              username: c,
              code: i,
              remember: true,
              accountType: n ? "APPLICANT" : undefined,
              operationType: "otp_auth"
            });
          } catch (t) {
            var h;
            var x;
            e(false);
            const r = t == null || (h = t.response) === null || h === undefined || (h = h.data) === null || h === undefined || (h = h.error) === null || h === undefined ? undefined : h.key;
            const o = t == null || (x = t.response) === null || x === undefined || (x = x.data) === null || x === undefined ? undefined : x.isMultiAccountCreation;
            if (o && (r === "EMPLOYER_NOT_ALLOWED" || r === "MULTIACCOUNT_CREATION_REQUIRED" && d === "EMAIL" && n)) {
              try {
                await C._i.post("/multiaccount_grouping/reset_employer_password", {
                  code: i,
                  operationType: "OTP_GENERATE"
                });
              } catch {
                v(r);
                l(t.response.data.employerLoginURL);
                return;
              }
              v(r);
              a(i, o);
              return;
            }
            if (r === "EMPLOYER_NOT_ALLOWED" || r === "UNEXPECTED_USER_TYPE") {
              l(t.response.data.employerLoginURL);
              v(r);
              return;
            }
            if (r === "UNEXPECTED_USER_TYPE" || r === "ANONYMOUS_ONLY") {
              l(t.response.data.loginURL);
              v(r);
              return;
            }
            if (r === "ACCOUNT_NOT_FOUND") {
              v();
              a(i, o);
              return;
            }
            const c = r === "MULTIACCOUNT_CREATION_REQUIRED";
            if (c) {
              v();
              a(i, o, c);
              return;
            } else if (r === "ACCOUNT_BLOCKED") {
              s({
                key: r,
                success: false
              });
              v(r);
              return;
            } else {
              v("SERVER_ERROR");
              (0, Ga.ZP)(t, y);
              return;
            }
          }
          const g = (r = u) !== null && r !== undefined && (r = r.data) !== null && r !== undefined && r.success ? null : (o = u) === null || o === undefined || (o = o.data) === null || o === undefined || (o = o.verification) === null || o === undefined ? undefined : o.key;
          v(g);
          e(false);
          if ((m = u) !== null && m !== undefined && (m = m.data) !== null && m !== undefined && m.success) {
            if (t != null) {
              t();
            }
          } else {
            s((p = u) === null || p === undefined || (p = p.data) === null || p === undefined ? undefined : p.verification);
          }
        },
        operationType: r === nt.b.MultiaccountGroupingEmailVerificationEmployer ? nt.b.ApplicantOtpAuth : g,
        codeLength: i,
        ...s
      });
    };
    tt.displayName = "steps/verification/VerificationFormStep/VerificationFormStepComponent";
    const st = (0, f.x)(tt);
    var it = a(259896);
    const rt = "SIGN_IN";
    const ot = "SIGN_UP";
    const lt = "VERIFICATION";
    const ct = "MULTIACCOUNT_GROUPING";
    const dt = ({
      SignIn: e,
      Verification: n,
      MultiAccountGrouping: a = Za.p,
      SignUp: s = Ya.M,
      isSignupPage: i = false,
      onSignup: r,
      onSignIn: o,
      onNextStep: l = () => null,
      onClickByPassword: c,
      errorPageLogin: d = false
    }) => {
      const m = (0, _.v)(({
        vrSignupLogin: e
      }) => e.vrResponseHash);
      const [p, u] = (0, t.useState)(m ? lt : rt);
      const [h, x] = (0, t.useState)("");
      const [y, g] = (0, t.useState)("");
      const v = (0, t.useRef)();
      const b = (0, it.N)();
      const j = i ? Oa() : t.Fragment;
      const f = i ? {
        l: "16",
        m: "12",
        s: "4",
        xs: "4",
        container: true
      } : {};
      (0, t.useEffect)(() => {
        if (b) {
          v.current.querySelectorAll(".vk-mini-apps-link-disable").forEach(e => {
            e.classList.remove("vk-mini-apps-link-disable");
          });
        }
      }, [b]);
      return (0, N.jsxs)("div", {
        ref: v,
        children: [p === rt && (0, N.jsx)(e, {
          next: () => {
            u(lt);
            l();
          },
          isSignupPage: i,
          onClickByPassword: c
        }), p === lt && (0, N.jsx)(j, {
          ...f,
          children: (0, N.jsx)(st, {
            Verification: n,
            onSignIn: o,
            cancel: () => u(rt),
            isSignupPage: i,
            next: (e, n, a) => {
              u(a ? ot : i && n ? ct : ot);
              x(e);
            },
            errorPageLogin: d
          })
        }), p === ct && (0, N.jsx)(j, {
          ...f,
          children: (0, N.jsx)(a, {
            isSignupPage: i,
            next: e => {
              u(ot);
              g(e);
            },
            errorPageLogin: d
          })
        }), p === ot && (0, N.jsx)(j, {
          ...f,
          children: (0, N.jsx)(s, {
            code: h,
            onSignup: r,
            password: y,
            isSignupPage: i,
            errorPageLogin: d
          })
        })]
      });
    };
    dt.displayName = "SignupModal/ApplicantSignInSignUpFlow/index/ApplicantSignInSignUpFlow";
    const mt = dt;
    const pt = (0, t.createContext)(null);
    const ut = () => {
      const e = (0, t.useContext)(pt);
      if (!e) {
        throw new Error("useSignupTrlsContextContext must be used within SignupTrlsContextProvider");
      }
      return e;
    };
    const ht = ({
      children: e
    }) => {
      const [n, a] = (0, t.useState)({
        title: "",
        subtitle: ""
      });
      const s = (0, t.useCallback)(e => {
        a(e);
      }, []);
      const i = (0, t.useMemo)(() => ({
        header: n,
        updateHeader: s
      }), [n, s]);
      return (0, N.jsx)(pt.Provider, {
        value: i,
        children: e
      });
    };
    ht.displayName = "SignupModal/contexts/SignupTrls/SignupTrlsContextProvider";
    var xt = a(764709);
    var yt = a(552867);
    const gt = {
      common: {
        text: "signup.agreementText.text"
      },
      russia: {
        text: "signup.agreementText.russia.text.short",
        personalLink: "signup.agreementText.russia.personal.data.short"
      },
      zp: {
        text: "signup.agreementText.zp.text.short",
        signup: "signup.agreementText.zp.signup",
        continue: "signup.agreementText.zp.continue",
        link: "signup.agreementText.zp.link",
        pd: "signup.agreementText.zp.pd"
      },
      agreementLink: "signup.agreementText.russia.agreement.link.short",
      agreementLinkGen: "registration.form.term.of.use"
    };
    const vt = "account-signup-agreement";
    const bt = ({
      trls: e,
      isIframeView: n = false,
      isOnModal: a
    }) => {
      const t = (0, _.Y)(e => e.authUrl["agreement-form"]);
      const s = (0, _.Y)(e => e.authUrl["policy-url"]);
      const i = (0, xt.kQ)();
      const r = (0, Se.$w)();
      const o = (0, _.v)(({
        router: e
      }) => e.location.pathname === nn.Z.indexPage);
      const {
        isXS: l
      } = (0, F.G)();
      const c = o && !l;
      const d = e => {
        if (n) {
          e.preventDefault();
          window.location.href = e.currentTarget.href;
        }
      };
      const m = (e, t, s) => (0, N.jsx)(Ue.r, {
        Element: u.SPALink,
        to: s,
        mode: "primary",
        style: c && !a ? "constant" : "accent",
        "data-qa": t,
        disabled: n,
        inline: true,
        onClick: d,
        underlined: c,
        typography: "paragraph-3-regular",
        children: e
      });
      return (0, N.jsx)(j.x, {
        typography: "paragraph-3-regular",
        style: c && !a ? "contrast" : "secondary",
        children: (0, Z.WU)(r ? e[gt.zp.text] : i ? e[gt.russia.text] : e[gt.common.text], r ? {
          "{0}": (0, N.jsx)(Ue.r, {
            Element: "a",
            inline: true,
            typography: "paragraph-3-regular",
            href: t,
            "data-qa": vt,
            children: e[gt.zp.link]
          }),
          "{1}": (0, N.jsx)(Ue.r, {
            Element: "a",
            style: "accent",
            inline: true,
            typography: "paragraph-3-regular",
            href: yt.O,
            "data-qa": "account-signup-zp-pd",
            children: e[gt.zp.pd]
          })
        } : i ? {
          "{0}": m(e[gt.agreementLink], vt, t),
          "{1}": m(e[gt.russia.personalLink], "account-signup-personal-data-russia", s)
        } : {
          "{0}": m(e[gt.agreementLinkGen], vt, t)
        })
      });
    };
    bt.displayName = "SignUp/AgreementTextMagritte/index/AgreementTextMagritte";
    const jt = (0, f.x)(bt);
    var ft = a(166688);
    var _t = a(506123);
    var St = a(563457);
    var Ct = a.n(St);
    var kt = a(166163);
    var wt = a(825112);
    var Nt = a(212575);
    var Et = a(992778);
    var At = a(81211);
    var Rt = a(928635);
    var Pt = a(766088);
    var Tt = a(701797);
    var It = a(547420);
    var Lt = a(509909);
    var Wt = a(631809);
    var Bt = a(455788);
    const Mt = (0, Aa.makeSetStoreField)("otp");
    const Vt = (0, Aa.makeSetStoreField)("otpVerification");
    const Dt = ["login"];
    const Ft = ({
      name: e,
      conditions: n
    }, {
      value: a,
      error: t
    } = {}) => ({
      name: e,
      maxLength: n.parts[0].maxLength,
      value: a,
      error: t
    });
    const Ht = {
      EMAIL: "email",
      SMS: "phone"
    };
    const qt = e => {
      var n;
      if (e != null && (n = e.trim) !== null && n !== undefined && n.call(e)) {
        return undefined;
      } else {
        return "EMPTY";
      }
    };
    const Ut = ({
      errors: e,
      authType: n = null,
      vacancyId: a,
      isSignupPage: t,
      hhtmSource: s
    }) => {
      m().sendHHEvent("form_submit", {
        formName: "applicant_authorization",
        authType: Ht[n] || "unknown",
        errors: (0, at.P)("login", e),
        type: "by_code",
        vacancyId: a,
        isSignupPage: t,
        hhtmSource: s
      });
    };
    const Xt = ({
      backurl: e,
      next: n,
      render: a,
      trls: s,
      callbackSubmit: i,
      isSignupPage: r,
      isAutofocusEnabled: o = true,
      dataQaModifier: l
    }) => {
      const c = Ja();
      const [d, p] = (0, t.useState)(false);
      const [h, x] = (0, t.useState)({});
      const y = (0, t.useRef)(null);
      const g = (0, It.u)(y, Dt);
      const v = (0, xn.useDispatch)();
      const b = (0, _.v)(e => e.vacancyView.vacancyId);
      const {
        postponedVacancy: j,
        postponedVacancyInFavorites: f
      } = (0, Lt.a)();
      const S = b || (f ? null : j == null ? undefined : j.vacancyId);
      const k = f ? j == null ? undefined : j.vacancyId : null;
      const w = (0, _.v)(({
        authUrl: e
      }) => e["login-field-value-entered"]);
      const E = (0, _.v)(({
        authUrl: e
      }) => e["login-field-value"] || "");
      const A = (0, _.v)(({
        metaRole: e
      }) => e);
      const {
        prefilledLogin: R
      } = (0, _.v)(({
        router: e
      }) => e.location.query);
      const P = S ?? k;
      const {
        addNotification: T
      } = (0, qa.lm)();
      const I = (0, u.usePush)();
      const L = (0, Tt.e)();
      const W = (0, Wt.Z)(Bt.qV);
      const B = (0, Pt.J)();
      const M = (0, _t.my)();
      const V = r ? R || null : w || E;
      (0, t.useEffect)(() => {
        if (y.current) {
          m().sendHHEventElementShown(y.current, {
            name: "applicant_authorization",
            type: "by_code",
            isSignupPage: r,
            vacancyId: P,
            hhtmSource: c.hhtmSource
          });
        }
      }, [r, P, c.hhtmSource]);
      if (B === null) {
        return null;
      }
      const D = ({
        validate: e,
        placeholder: n
      } = {}) => (0, N.jsx)(ft.gN, {
        component: kt.o,
        onFocus: W,
        placeholder: n ?? s[Xt.trls.login],
        "data-qa": "account-signup-email",
        inputMode: "email",
        validate: e || qt,
        inputRef: o && L || undefined,
        ...Ft(B.login, h.login)
      });
      const F = () => (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(Rt.Z, {
          className: "account-login-recaptcha"
        }), (0, N.jsx)(At.Z, {})]
      });
      const H = (e, n = {}) => (0, N.jsx)(wt.k, {
        text: e,
        isFetching: d,
        scale: St.ButtonScale.Large,
        ...n
      });
      return (0, N.jsx)(ft.l0, {
        onSubmit: async () => {
          var e;
          let t;
          p(true);
          try {
            const e = new FormData(y.current);
            M.addCaptchaParams(e);
            t = (await C._i.post("/account/otp_generate", e)).data;
          } catch (e) {
            const n = (0, Ga.ZP)(e, T);
            p(false);
            const a = e.response ? e.response : n;
            if (i != null) {
              i(e);
            }
            Ut({
              errors: a,
              isSignupPage: r,
              vacancyId: P,
              hhtmSource: c.hhtmSource
            });
            return;
          }
          const s = t.success ? null : t.key;
          const o = (e = t.recaptcha) !== null && e !== undefined && e.isBot ? "RECAPTCHA_IS_BOT" : s;
          if (s === "EMPLOYER_ACCOUNT_LOGIN" || s === "PASSWORD_REQUIRED") {
            Ut({
              errors: o,
              authType: t.otp?.authType,
              isSignupPage: r,
              vacancyId: P
            });
            I(t.redirectURL);
            return;
          }
          p(false);
          if (i != null) {
            i(o);
          }
          Ut({
            errors: o,
            authType: t.otp?.authType,
            isSignupPage: r,
            vacancyId: P,
            hhtmSource: c.hhtmSource
          });
          M.updateCaptcha(t);
          if (t.otp) {
            v(Mt(t.otp));
            v(Vt(t));
          }
          if (t.redirectURL) {
            I(t.redirectURL);
          }
          if (t.key !== "2FA_REQUIRED") {
            if (t.success || t.key === "CODE_SEND_BLOCKED") {
              n();
            } else {
              x({
                ...h,
                login: {
                  ...h.login,
                  error: t.key
                }
              });
            }
          }
        },
        initialValues: {
          login: g.login || V,
          vacancyId: S,
          favoriteVacancyId: k
        },
        render: ({
          handleSubmit: n,
          form: t
        }) => (0, N.jsx)(Nt.I, {
          form: t,
          fields: Dt,
          children: (0, N.jsxs)(Et.Z, {
            "data-qa": ge()("account-signup", {
              [l]: l
            }),
            onSubmit: n,
            ref: y,
            method: "post",
            action: "/account/otp_generate",
            children: [(0, N.jsx)("input", {
              type: "hidden",
              name: "backurl",
              value: e
            }), (0, N.jsx)("input", {
              type: "hidden",
              name: "isSignupPage",
              value: r
            }), !r && (0, N.jsx)("input", {
              type: "hidden",
              name: "operationType",
              value: "applicant_otp_auth"
            }), A && (0, N.jsx)("input", {
              type: "hidden",
              name: "role",
              value: A
            }), S && (0, N.jsx)("input", {
              type: "hidden",
              name: "vacancyId",
              value: S
            }), k && (0, N.jsx)("input", {
              type: "hidden",
              name: "favoriteVacancyId",
              value: k
            }), (0, N.jsx)("input", {
              type: "hidden",
              name: "formatPhone",
              value: true
            }), a({
              renderLogin: D,
              renderSubmitButton: H,
              renderCaptcha: F,
              isFetching: d
            })]
          })
        })
      });
    };
    Xt.displayName = "steps/sign-in/SignInForm/SignInFormComponent";
    const zt = (0, f.x)(Xt);
    Xt.trls = {
      login: "login.placeholder"
    };
    const Ot = "field--Fyl_TZdReN8AtbpP";
    const Zt = "input--NgjQWJwF3qcNq976";
    const Yt = "submit--aPdzD78U254e_a7W";
    const Gt = "anonymous.signup.modal.signin.article.title";
    const $t = "anonymous.signup.modal.signin.secondary";
    const Qt = "signupForm.create.submit";
    const Jt = "signup.placeholder.phoneNumber";
    const Kt = ({
      next: e,
      trls: n,
      callbackSubmit: a
    }) => {
      const s = (0, _.v)(({
        authUrl: e
      }) => e == null ? undefined : e.backurl);
      const {
        updateHeader: i
      } = ut();
      const r = n[Gt];
      const o = n[$t];
      (0, t.useLayoutEffect)(() => {
        i({
          title: r,
          subtitle: o
        });
      }, [r, o, i]);
      return (0, N.jsx)(zt, {
        isAutofocusEnabled: false,
        backurl: s,
        next: e,
        callbackSubmit: a,
        dataQaModifier: "signup-modal-signin-form",
        render: ({
          renderLogin: e,
          renderSubmitButton: a,
          renderCaptcha: t
        }) => (0, N.jsxs)(X.z, {
          default: 16,
          children: [(0, N.jsxs)("div", {
            className: Ot,
            children: [(0, N.jsx)("div", {
              className: Zt,
              "data-qa": "account-signup-email-container",
              children: e({
                placeholder: n[Jt]
              })
            }), (0, N.jsx)("div", {
              className: Yt,
              children: a(n[Qt])
            })]
          }), t(), (0, N.jsx)(jt, {
            isOnModal: true
          })]
        })
      });
    };
    Kt.displayName = "steps/sign-in/SignInStep/SignInStepComponent";
    const es = (0, f.x)(Kt);
    var ns = a(683141);
    var as = a(616355);
    var ts = a(227502);
    var ss = a.n(ts);
    var is = a(390259);
    var rs = a.n(is);
    var os = a(257549);
    var ls = a.n(os);
    var cs = a(63762);
    var ds = a(539857);
    var ms = a(250626);
    var ps = a(998810);
    var us = a(96540);
    var hs = a(896867);
    var xs = a(962308);
    var ys = a(502699);
    const gs = e => e.reduce((e, {
      key: n,
      description: a,
      field: t,
      error: s
    }) => {
      e[n || t] = {
        error: a || s
      };
      return e;
    }, {});
    const vs = ({
      trls: e,
      render: n,
      code: a,
      password: s,
      isSignupPage: i,
      isSignupMain: r,
      onSignup: o
    }) => {
      const l = Ja();
      const {
        login: c,
        firstName: d,
        lastName: p,
        authType: u
      } = (0, _.v)(({
        otp: e
      }) => e);
      const {
        addNotification: h
      } = (0, qa.lm)();
      const x = (0, Pt.J)();
      const [y, g] = (0, t.useState)({});
      const v = (0, t.useRef)();
      const [b, j] = (0, t.useState)(false);
      const f = (0, _.v)(e => e.vacancyView.vacancyId);
      const {
        postponedVacancy: S,
        postponedVacancyInFavorites: C
      } = (0, Lt.a)();
      const k = S == null ? undefined : S.vacancyId;
      const w = f || (C ? null : k);
      const E = (0, Wt.Z)(Bt.qV);
      const A = (0, Tt.e)();
      const R = (0, t.useRef)(false);
      const P = (0, _.v)(({
        vrSignupLogin: e
      }) => e.vrResponseHash);
      const T = (0, _.v)(({
        vrSignupLogin: e
      }) => e.fingerprints);
      const I = (0, xs.l)("applicant");
      const L = (0, hs.t)();
      const W = w ?? k;
      const B = (0, us.W)();
      (0, t.useEffect)(() => {
        m().sendHHEvent("element_shown", {
          elementName: "enter_full_name",
          vacancyId: W,
          authType: $a._X[u] || "unknown",
          isSignupPage: i,
          hhtmSource: l.hhtmSource
        });
      }, [W, c, i, u, l]);
      const M = e => {
        var n;
        m().sendHHEvent("form_submit", {
          formName: "enter_full_name",
          vacancyId: W,
          authType: $a._X[u] || "unknown",
          errors: (0, at.P)("full_name", e == null || (n = e.response) === null || n === undefined || (n = n.data) === null || n === undefined ? undefined : n.errors, ["key", "description"]),
          isSignupPage: i,
          hhtmSource: l.hhtmSource
        });
        if (!e) {
          ss()({
            params: {
              main: {
                dm_events: {
                  applicant_register: "site"
                }
              },
              register_referrer: (0, Bn.j)(document.URL).pathname
            }
          });
          B("B2C_APPLICANT_REGISTRATION");
          L("APPLICANT_REGISTERED");
        }
      };
      const V = async e => {
        j(true);
        const n = {
          ...e,
          ...(P ? T : I),
          firstName: e.firstName || "",
          lastName: e.lastName || "",
          isSignupPage: i,
          isSignupMain: r,
          postponed: true
        };
        try {
          await (0, ys.r)(n);
        } catch (e) {
          var a;
          j(false);
          if (Array.isArray(e == null || (a = e.response) === null || a === undefined || (a = a.data) === null || a === undefined ? undefined : a.errors)) {
            g(gs(e.response.data.errors));
            M(e);
            return;
          } else {
            (0, Ga.ZP)(e, h);
            return;
          }
        }
        M(null);
        g(gs([{
          key: "firstName",
          error: null
        }, {
          key: "lastName",
          error: null
        }]));
        j(false);
        if (o != null) {
          o();
        }
      };
      const D = (0, t.useRef)(() => V({
        login: c,
        code: a
      }));
      (0, t.useEffect)(() => {
        if (P && !R.current) {
          R.current = true;
          D.current();
        }
      }, [P]);
      if (P) {
        return (0, N.jsx)(rs(), {
          scale: is.LoadingScale.Small
        });
      }
      const F = () => (0, N.jsx)(ft.gN, {
        component: kt.o,
        onFocus: E,
        placeholder: e[vs.trls.firstName],
        "data-qa": "account-signup-firstname",
        capitalize: true,
        inputRef: A,
        ...(0, $a.XF)(x.firstName, y.firstName)
      });
      const H = () => (0, N.jsx)(ft.gN, {
        component: kt.o,
        onFocus: E,
        placeholder: e[vs.trls.lastName],
        "data-qa": "account-signup-lastname",
        capitalize: true,
        ...(0, $a.XF)(x.lastName, y.lastName)
      });
      const q = () => (0, N.jsx)(cs.Z, {
        renderSelect: () => (0, N.jsx)(ft.gN, {
          name: "deleteInactiveTime",
          type: "select",
          initialValue: ds.W,
          render: ({
            input: e
          }) => (0, N.jsx)(ds.O, {
            ...e
          })
        }),
        spacingAfter: (0, N.jsx)(ls(), {
          base: 4
        })
      });
      const U = ({
        isLarge: n
      } = {}) => (0, N.jsx)(wt.k, {
        text: e[vs.trls.submit],
        isFetching: b,
        dataQa: "account-signup-submit-applicant-info",
        scale: n ? St.ButtonScale.Large : undefined
      });
      const X = () => (0, N.jsx)(ft.gN, {
        name: "agreementAdv",
        type: "checkbox",
        initialValue: false,
        render: ({
          input: e
        }) => (0, N.jsx)(ms.j, {
          ...e
        })
      });
      const z = () => (0, N.jsx)(ft.gN, {
        name: "agreementAdv",
        type: "checkbox",
        initialValue: false,
        render: ps.j
      });
      return (0, N.jsx)(ft.l0, {
        onSubmit: V,
        initialValues: {
          firstName: d,
          lastName: p,
          login: c,
          code: a,
          password: s
        },
        render: ({
          handleSubmit: e,
          form: a
        }) => (0, N.jsx)(Nt.I, {
          form: a,
          children: (0, N.jsx)(Et.Z, {
            action: "/account/signup",
            method: "POST",
            "data-qa": "account-signup",
            onSubmit: n => {
              n.preventDefault();
              e(n);
            },
            ref: v,
            children: n({
              renderFirstNameField: F,
              renderLastNameField: H,
              renderAccountDeleteInactive: q,
              renderSubmit: U,
              renderAdvertisementAgreement: X,
              renderAdvertisementSubscriptionApplicant: z
            })
          })
        })
      });
    };
    vs.displayName = "steps/sign-up/SignUpForm/SignUpFormComponent";
    const bs = (0, f.x)(vs);
    vs.trls = {
      header: "otp.confirm.header.signup",
      firstName: "newApplicant.firstName",
      lastName: "newApplicant.lastName",
      submit: "signupForm.create.submit"
    };
    const js = "signUpStep.header.1";
    const fs = "signUpStep.header.2";
    const _s = ({
      trls: e,
      ...n
    }) => {
      const a = (0, ns.d)();
      const s = (0, as.T)();
      const {
        updateHeader: i
      } = ut();
      const r = (0, t.useMemo)(() => (0, N.jsxs)(N.Fragment, {
        children: [e[js], (0, N.jsx)("br", {}), e[fs]]
      }), [e]);
      (0, t.useLayoutEffect)(() => {
        i({
          title: r,
          subtitle: ""
        });
      }, [r, i]);
      return (0, N.jsx)(bs, {
        render: ({
          renderFirstNameField: e,
          renderLastNameField: n,
          renderSubmit: t,
          renderAccountDeleteInactive: i,
          renderAdvertisementAgreement: r,
          renderAdvertisementSubscriptionApplicant: o
        }) => (0, N.jsxs)(X.z, {
          default: 16,
          gteS: 24,
          children: [(0, N.jsxs)(X.z, {
            default: 12,
            children: [(0, N.jsx)("div", {
              children: e()
            }), (0, N.jsx)("div", {
              children: n()
            })]
          }), i(), a && r(), s && o(), t()]
        }),
        isSignupMain: true,
        ...n
      });
    };
    _s.displayName = "steps/sign-up/SignUpStep/SignUpStepComponent";
    const Ss = (0, f.x)(_s);
    var Cs = a(862969);
    const ks = "field--dOtk0Xi73wswhY5w";
    const ws = "input--bhitLqnWglwXEMSo";
    const Ns = "code-sender--Dhb8rAgaXzk0U1nr";
    const Es = {
      sent: "signUpForm.verification.codeSent.phone",
      sentShort: "otp.confirm.header",
      description1: "signUpForm.verification.codeSentDescription.1.phone",
      description2: "signUpForm.verification.codeSentDescription.2.phone"
    };
    const As = {
      sent: "signUpForm.verification.codeSent.email",
      sentShort: "otp.confirm.header",
      description: "otp.confirm.sub.header",
      descriptionShort: "otp.confirm.sub.header.short"
    };
    const Rs = {
      sent: "signUpForm.verification.codeSent.whatsApp",
      description: "signUpForm.verification.codeSent.whatsApp.description"
    };
    const Ps = ({
      trls: e,
      errorPageLogin: n,
      codePlaceholder: a,
      onCancel: s,
      cancelText: i,
      ...r
    }) => {
      const {
        authType: o,
        login: l
      } = r;
      const c = (0, _.v)(({
        otpVerification: e
      }) => e == null ? undefined : e.codeLength);
      const d = (0, _.v)(({
        otp: e
      }) => e == null ? undefined : e.formattedPhone);
      const {
        updateHeader: m
      } = ut();
      const p = (0, t.useMemo)(() => {
        switch (o) {
          case "PHONE_CALL":
          case "SMS":
            return e[Es.sentShort];
          case "WHATS_APP":
            return e[Rs.sent];
          default:
            return e[As.sentShort];
        }
      }, [o, e]);
      const u = (0, t.useMemo)(() => (0, Z.WU)(p, {
        "{0}": (0, N.jsx)("strong", {
          children: d || l
        })
      }), [p, d, l]);
      const h = (0, t.useMemo)(() => {
        switch (o) {
          case "PHONE_CALL":
          case "SMS":
            return (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)("p", {
                children: e[Es.description1]
              }), (0, N.jsx)("p", {
                children: e[Es.description2]
              })]
            });
          case "WHATS_APP":
            return e[Rs.description];
          default:
            return e[As.descriptionShort];
        }
      }, [o, e]);
      const x = (0, t.useMemo)(() => (0, N.jsx)(N.Fragment, {
        children: h
      }), [h]);
      (0, t.useLayoutEffect)(() => {
        m({
          title: u,
          subtitle: x
        });
      }, [u, x, m]);
      return (0, N.jsx)(Cs.G, {
        isPincodeInput: true,
        codeLength: c,
        render: ({
          renderInput: e,
          renderCodeError: n,
          renderCodeSender: t
        }) => (0, N.jsxs)(X.z, {
          default: 24,
          children: [(0, N.jsx)("div", {
            className: ks,
            children: (0, N.jsxs)("div", {
              className: ws,
              children: [e({
                placeholder: a,
                isAutofocus: true
              }), n()]
            })
          }), (0, N.jsx)("div", {
            className: Ns,
            children: t()
          })]
        }),
        ...r
      });
    };
    Ps.displayName = "steps/verification/VerificationStep/VerificationStepComponent";
    const Ts = (0, f.x)(Ps);
    const Is = "header--jvscLXkh284Q1eDB";
    const Ls = ({
      opened: e,
      onClose: n,
      onSignup: a,
      onSignIn: t
    }) => {
      const {
        header: s
      } = ut();
      const {
        isMobile: i
      } = (0, F.G)();
      const r = (0, N.jsx)(en.Cs7, {
        initialColor: "secondary",
        onClick: n,
        "data-qa": "signup-modal-close"
      });
      return (0, N.jsx)(De.H, {
        isEnabled: true,
        children: i ? (0, N.jsxs)(jn.R, {
          visible: e,
          onClose: n,
          children: [(0, N.jsxs)(X.z, {
            default: 32,
            children: [(0, N.jsxs)(X.z, {
              default: 8,
              children: [(0, N.jsx)("header", {
                className: Is,
                children: r
              }), (0, N.jsx)(g.D, {
                Element: "h2",
                size: "medium",
                description: s.subtitle,
                children: s.title
              })]
            }), (0, N.jsx)(mt, {
              SignIn: es,
              SignUp: Ss,
              Verification: Ts,
              onSignup: a,
              onSignIn: t
            })]
          }), (0, N.jsx)(v.X, {
            default: 16
          })]
        }) : (0, N.jsx)(h.u, {
          visible: e,
          title: s.title,
          titleSize: "medium",
          titleDescription: s.subtitle,
          titleDescriptionStyle: "secondary",
          actions: r,
          onClose: n,
          children: (0, N.jsx)(mt, {
            SignIn: es,
            SignUp: Ss,
            Verification: Ts,
            onSignup: a,
            onSignIn: t
          })
        })
      });
    };
    Ls.displayName = "SignupModal/Form/index/SignupModal";
    const Ws = Ls;
    var Bs = a(640569);
    var Ms = a(8131);
    const Vs = "index.anonymous.signUp.notification.message";
    const Ds = ({
      trls: e,
      ...n
    }) => {
      const a = (0, _.v)(e => e.topLevelDomain);
      if (a) {
        return (0, N.jsx)(Ms.P, {
          ...n,
          addon: (0, N.jsx)(en.A$w, {
            initialColor: "positive"
          }),
          children: (0, Z.WU)(e[Vs], {
            "{0}": a
          })
        });
      } else {
        return null;
      }
    };
    Ds.displayName = "SignupModal/Notification/index/SignupSuccessNotification";
    const Fs = (0, Bs.Z)(Ds);
    const Hs = () => {
      window.location.assign("/applicant/finish_signup");
    };
    const qs = () => {
      const e = (0, u.usePush)();
      const n = (0, xn.useDispatch)();
      const a = (0, _.v)(({
        anonymousSignUp: e
      }) => e.opened && !e.alreadyShown);
      const t = (0, _.v)(({
        anonymousSignUp: e
      }) => e.backUrl);
      const {
        addNotification: s
      } = (0, qa.lm)();
      return (0, N.jsx)(ht, {
        children: (0, N.jsx)(Ka, {
          hhtmSource: "main_authorization_popup",
          children: (0, N.jsx)(Ws, {
            opened: a,
            onClose: async () => {
              n((0, _n.jm)());
              await Xa();
              e(t);
            },
            onSignup: async () => {
              n((0, _n.jm)());
              await Promise.all([Xa(), Ua(t)]);
              s(Fs);
              Hs();
            },
            onSignIn: async () => {
              n((0, _n.jm)());
              await Promise.all([Xa(), Ua(t)]);
              Hs();
            }
          })
        })
      });
    };
    qs.displayName = "components/SignupModal/MainPageSignUpModal/MainPageSignUpModal";
    const Us = ({
      items: e,
      title: n
    }) => (0, N.jsxs)(Y.Z, {
      padding: 24,
      borderRadius: 24,
      borderWidth: "default",
      verticalStretched: true,
      stretched: true,
      children: [(0, N.jsx)(g.D, {
        Element: "h3",
        size: "small",
        children: n
      }), (0, N.jsx)(v.X, {
        default: 16,
        gteS: 20,
        gteM: 24
      }), (0, N.jsx)(X.z, {
        default: 16,
        children: e == null ? undefined : e.slice(0, 5).map(({
          topic: e,
          href: n
        }) => (0, N.jsx)(Ue.r, {
          style: "neutral",
          Element: u.SPALink,
          to: n,
          children: e
        }, n))
      })]
    });
    Us.displayName = "components/UsefulLinks/index/UsefulLinks";
    var Xs = a(124880);
    var zs = a(48967);
    const Os = {
      one: "main.counter.vacancies.one",
      some: "main.counter.vacancies.some",
      many: "main.counter.vacancies.many"
    };
    const Zs = ({
      company: e,
      trls: n,
      setCompanyRef: a
    }) => {
      const s = (0, t.useRef)(null);
      const i = (0, zs.B)(a, s);
      const r = (0, Dn.X)(s);
      const o = (0, _.v)(e => e.locale);
      const l = (0, Se.$w)();
      return (0, N.jsx)(Y.Z, {
        Element: u.SPALink,
        to: Vn(e, o, Pn.qM.MainPageBottom, l),
        borderWidth: "default",
        padding: 16,
        borderRadius: 16,
        stretched: true,
        verticalStretched: true,
        onClick: () => Mn(e, "employer_of_the_day"),
        children: (0, N.jsxs)(Fe.b, {
          left: (0, N.jsx)(He.q, {
            shapeCircle: true,
            size: 40,
            mode: "image",
            image: e.logoUrl || "",
            placeholder: "city",
            "aria-label": ""
          }),
          children: [(0, N.jsxs)(qe.j, {
            maxLines: 1,
            children: [(0, N.jsx)("div", {
              id: String(e.id),
              ref: i,
              "data-qa": "company-of-the-day-name",
              children: e.companyName
            }), r && (0, N.jsx)(In.p, {
              placement: "top-center",
              activatorRef: s,
              children: e.companyName
            })]
          }), (0, N.jsx)(qe.j, {
            type: "subtitle",
            children: (0, N.jsx)(Zn.q, {
              value: e.vacanciesNumber,
              formatValue: e => (0, Xs.uf)(e),
              one: n[Os.one],
              some: n[Os.some],
              many: n[Os.many]
            })
          })]
        })
      });
    };
    Zs.displayName = "components/WorkInCompany/CompanyItem/CompanyItemComponent";
    const Ys = (0, f.x)(Zs);
    const Gs = "container--zctdF58LKMkiTC_Z";
    const $s = "container-stack--UxvKOMDlReASZUiN";
    const Qs = "wrapper--QJYy1D02nYSnIWoi";
    const Js = "wrapper-stack--Ztv6CQNlAuspjEDu";
    const Ks = "wrapper-rest--iKgMi5yILbs7Ifll";
    const ei = "wrapper-vertical--ZMBUX0TVCUcxXSlc";
    const ni = "banner-column--fWVx9cp4dyUzzF8e";
    const ai = "banner-wrapper--HSPbTaazMTg_rACO";
    const ti = "item--ZsScGjd4JANIfvrJ";
    const si = "1002";
    const ii = {
      [Ke.Uo.XS]: Infinity,
      [Ke.Uo.S]: 7,
      [Ke.Uo.M]: 9,
      [Ke.Uo.XL]: 12
    };
    const ri = "index.companies.work.in";
    const oi = "index.companies.work.two";
    const li = "wic-vod.in";
    const ci = ({
      trls: e,
      spacingBottom: n
    }) => {
      const a = (0, _.v)(e => e.companiesOfTheDay);
      const t = (0, _.v)(e => e.companiesOfTheDayTrls);
      const s = (0, _.v)(e => e.locale);
      const {
        breakpoint: i,
        isXS: r,
        isMobile: o
      } = (0, F.G)();
      const l = Tn(a, Pn.qM.MainPageBottom);
      let c = En.L.INDEX_WORK_IN_COMPANY;
      if (r) {
        c = En.L.INDEX_WORK_IN_COMPANY_MOBILE;
      }
      const d = (0, _.v)(e => e.banners[c]);
      const m = d != null && !!d[0];
      let p = 0;
      if (!r) {
        p = m ? 1 : 3;
      }
      const h = () => {
        const n = s.isSeoDomain && s.domainAreaId !== si ? e[li] : e[oi];
        return (0, Z.WU)(e[ri], {
          "{0}": n,
          "{1}": s.domainAreaId !== si ? t.area : ""
        });
      };
      const x = (e, n) => (0, N.jsx)("div", {
        className: n,
        children: (0, N.jsx)(Ys, {
          setCompanyRef: l,
          company: e
        })
      }, e.id);
      let y = ii[i] || 12;
      if (!r && m) {
        y -= 2;
      }
      if (r) {
        y = 3;
      }
      return (0, N.jsxs)("div", {
        onClick: () => {
          be()({
            buttonName: "employer_of_the_day_list"
          });
        },
        children: [(0, N.jsx)(u.SPALink, {
          to: "/employers_company",
          "data-qa": "index__work-in-company-header",
          children: (0, N.jsx)(g.D, {
            Element: "h3",
            size: o ? "small" : "medium",
            children: h()
          })
        }), (0, N.jsx)(v.X, {
          default: 16,
          gteS: 20,
          gteM: 24
        }), (0, N.jsx)(an.Z, {
          renderPreview: () => (0, N.jsxs)("div", {
            className: ge()(Gs, {
              [$s]: r
            }),
            children: [!r && (0, N.jsxs)("div", {
              className: ni,
              children: [m && (0, N.jsx)("div", {
                className: ai,
                children: (0, N.jsx)(An, {})
              }), a.slice(0, p).map(e => x(e, ti))]
            }), (0, N.jsx)("div", {
              className: ge()(Qs, {
                [Js]: r
              }),
              children: a.slice(p, y).map(e => x(e, ti))
            })]
          }),
          renderRest: () => (0, N.jsx)("div", {
            className: Ks,
            children: a.slice(y).map(e => x(e, ti))
          }),
          restSpacing: (0, N.jsx)(v.X, {
            default: 24
          }),
          needToExpand: a.length > y,
          renderBottomSheetContent: () => (0, N.jsxs)("div", {
            className: ei,
            children: [(0, N.jsx)("div", {
              className: ai,
              children: (0, N.jsx)(An, {
                isMobile: true
              })
            }), a.map(e => x(e))]
          }),
          bottomSheetTitle: h()
        }), n]
      });
    };
    ci.displayName = "components/WorkInCompany/index/WorkInCompany";
    const di = (0, f.x)(ci);
    const mi = "container--fRQ6P4UbCX0cYItf";
    const pi = "item--J00bo5Of9rgO5Mf8";
    const ui = "index.workInOtherCities.header";
    const hi = ({
      trls: e
    }) => {
      const n = (0, _.v)(e => {
        return e.workInOtherCity?.link;
      });
      const {
        isMobile: a
      } = (0, F.G)();
      if (n) {
        return (0, N.jsxs)(Y.Z, {
          padding: a ? 0 : 24,
          borderRadius: 24,
          borderWidth: a ? "none" : "default",
          children: [(0, N.jsx)(g.D, {
            Element: "h3",
            size: "small",
            children: e[ui]
          }), (0, N.jsx)(v.X, {
            default: 16,
            gteS: 20,
            gteM: 24
          }), (0, N.jsx)("div", {
            className: mi,
            children: n == null ? undefined : n.map((e, n) => (0, N.jsx)("div", {
              className: pi,
              children: (0, N.jsx)(Ue.r, {
                style: "neutral",
                Element: u.SPALink,
                to: `//${e.domain}`,
                isSeoLink: true,
                onClick: () => ((e, n) => {
                  m().sendHHEventButtonClick("switch_area", {
                    areaId: e,
                    position: n
                  });
                  m().sendHHEventButtonClick("vacancy_area_catalog_list", {
                    domainId: e
                  });
                })(e.id, n),
                children: e.name
              })
            }, e.id))
          })]
        });
      } else {
        return null;
      }
    };
    hi.displayName = "components/WorkInOtherCities/index/WorkInOtherCities";
    const xi = (0, f.x)(hi);
    var yi = a(651329);
    var gi = a(363345);
    var vi = a.n(gi);
    var bi = a(665497);
    var ji = a.n(bi);
    var fi = a(870604);
    const _i = "youth-vacancies--GmqFD46S6jcxFSC4";
    const Si = "highlights--hyKF0v3L5hkEJxcv";
    const Ci = {
      title: "youthVacancies.title",
      description: {
        desktop: "youthVacancies.description.desktop",
        mobile: "youthVacancies.description.mobile"
      },
      card: {
        descriptionPrefix: "youthVacancies.modal.card.descriptionPrefix",
        [fi.yL.PartTime]: {
          title: "youthVacancies.modal.card.title.partTime",
          description: "youthVacancies.modal.card.description.partTime"
        },
        [fi.yL.Internship]: {
          title: "youthVacancies.modal.card.title.internship",
          description: "youthVacancies.modal.card.description.internship"
        },
        [fi.yL.Remote]: {
          title: "youthVacancies.modal.card.title.remote",
          description: "youthVacancies.modal.card.description.remote",
          highlights: {
            projectWork: "youthVacancies.modal.card.highlights.remote.projectWork",
            flexibleHours: "youthVacancies.modal.card.highlights.remote.flexibleHours"
          }
        },
        [fi.yL.Juveniles]: {
          title: "youthVacancies.modal.card.title.juveniles",
          description: "youthVacancies.modal.card.description.juveniles"
        },
        [fi.yL.Teenagers]: {
          title: "youthVacancies.modal.card.title.teenagers",
          description: "youthVacancies.modal.card.description.teenagers"
        }
      }
    };
    const ki = ({
      trls: e,
      isOpen: n,
      setIsOpen: a
    }) => {
      const s = (0, _.v)(e => e.searchPresetsVacancies);
      const {
        isMobile: i
      } = (0, F.G)();
      (0, t.useEffect)(() => {
        if (n) {
          ji()({
            hhtmSource: "main"
          });
        }
      }, [n]);
      const r = (0, t.useCallback)(() => {
        a(false);
      }, [a]);
      const o = (0, t.useMemo)(() => {
        var n;
        var a;
        const t = {
          [fi.yL.PartTime]: {
            Component: en.TBQ,
            color: "positive"
          },
          [fi.yL.Juveniles]: {
            Component: en.nq4,
            color: "special-secondary"
          },
          [fi.yL.Remote]: {
            Component: en.QrN,
            color: "accent"
          },
          [fi.yL.Teenagers]: {
            Component: en.krw,
            color: "warning"
          },
          [fi.yL.Internship]: {
            Component: en.a4S,
            color: "negative-secondary"
          }
        };
        const r = {
          [fi.yL.Remote]: [(n = Ci.card[fi.yL.Remote]) === null || n === undefined || (n = n.highlights) === null || n === undefined ? undefined : n.projectWork, (a = Ci.card[fi.yL.Remote]) === null || a === undefined || (a = a.highlights) === null || a === undefined ? undefined : a.flexibleHours].filter(Boolean)
        };
        return (0, N.jsx)("div", {
          className: _i,
          "data-qa": "youth-vacancies-grid",
          children: [fi.yL.PartTime, fi.yL.Internship, fi.yL.Remote, fi.yL.Juveniles, fi.yL.Teenagers].map(n => {
            var a;
            var o;
            var l;
            var c;
            const d = t[n];
            const m = (a = r[n]) === null || a === undefined ? undefined : a.filter(Boolean);
            const p = (d == null ? undefined : d.Component) || en.JCw;
            const h = [nn.Z.vacancySearch, s == null || (o = s[n]) === null || o === undefined ? undefined : o.queries.itemsOnPageBase].filter(Boolean).join("?");
            const x = (y = (l = Ci.card) === null || l === undefined || (l = l[n]) === null || l === undefined ? undefined : l.title) ? e[y] : "";
            var y;
            const g = ((n, a) => n ? (0, Z.WU)((a = e[Ci.card.descriptionPrefix]) !== null && a !== undefined ? a : "", {
              "{0}": e[n]
            }) : "")((c = Ci.card) === null || c === undefined || (c = c[n]) === null || c === undefined ? undefined : c.description);
            return (0, N.jsx)("div", {
              style: {
                gridArea: n
              },
              children: (0, N.jsx)(Y.Z, {
                Element: u.SPALink,
                to: h,
                padding: 24,
                borderRadius: i ? 24 : 16,
                borderWidth: "default",
                stretched: true,
                verticalStretched: true,
                hoverEnabled: true,
                pressEnabled: true,
                "data-qa": `youth-vacancy-card-${n}`,
                onClick: () => {
                  vi()({
                    hhtmSource: "youth_vacancies",
                    collection: x
                  });
                },
                children: (0, N.jsxs)(X.z, {
                  default: 12,
                  children: [(0, N.jsx)(Fe.b, {
                    left: (0, N.jsx)(p, {
                      initialColor: (d == null ? undefined : d.color) || "primary"
                    }),
                    right: i ? undefined : (0, N.jsx)(en.a2Q, {
                      initialColor: "secondary"
                    })
                  }), x ? (0, N.jsx)(j.x, {
                    typography: "subtitle-1-semibold",
                    "data-qa": "youth-vacancy-card-title",
                    children: x
                  }) : undefined, Array.isArray(m) ? (0, N.jsx)(j.x, {
                    typography: "label-2-regular",
                    "data-qa": "youth-vacancy-card-highlights",
                    children: (0, N.jsx)("ul", {
                      className: Si,
                      children: m.map(n => (0, N.jsx)("li", {
                        children: e[n]
                      }, `highlight-${n}`))
                    })
                  }) : undefined, (0, N.jsx)(j.x, {
                    typography: "label-3-regular",
                    style: "secondary",
                    "data-qa": "youth-vacancy-card-description",
                    children: g
                  })]
                })
              })
            }, `youth-vacancy-card-${n}`);
          })
        });
      }, [e, s, i]);
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(h.u, {
          title: e[Ci.title],
          titleDescription: e[Ci.description.desktop],
          titleDescriptionStyle: "secondary",
          titleDescriptionMaxLines: 1,
          actions: [(0, N.jsx)(en.Cs7, {
            initialColor: "secondary",
            onClick: r
          }, "close")],
          visible: n,
          size: "large",
          onClose: r,
          children: o
        }), (0, N.jsx)(jn.R, {
          header: (0, N.jsx)(fn.v, {
            title: e[Ci.title],
            subtitle: e[Ci.description.mobile],
            left: (0, N.jsx)(en.ee, {
              initialColor: "secondary",
              onClick: r
            }, "close"),
            size: "large"
          }),
          visible: n,
          onClose: r,
          children: o
        })]
      });
    };
    ki.displayName = "components/YouthVacanciesModal/index/YouthVacanciesModalComponent";
    const wi = (0, Bs.Z)(ki);
    var Ni = a(424839);
    var Ei = a.n(Ni);
    var Ai = a(183920);
    const Ri = a.p + "static/images/hh.ru__min_d15f1a9491608d72.svg";
    const Pi = "container--PykE7exZ1EcWXu06";
    const Ti = "index.app.promo.mobile.title";
    const Ii = "index.app.promo.mobile.text";
    const Li = "index.app.promo.mobile.button";
    const Wi = ({
      trls: e
    }) => {
      const n = (0, _.v)(({
        appLink: e
      }) => e);
      const a = (0, Ai.j)({
        from: "main_banner"
      });
      const s = (0, t.useMemo)(() => {
        const e = (0, Bn.j)(a);
        e.params = {
          ...e.params
        };
        return e.href;
      }, [a]);
      if (n.detected) {
        return (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsxs)(Y.Z, {
            padding: 12,
            paddingTop: 24,
            borderRadius: 24,
            borderWidth: "default",
            stretched: true,
            children: [(0, N.jsxs)("div", {
              className: Pi,
              children: [(0, N.jsx)(_e.Z, {
                width: 50,
                path: Ri
              }), (0, N.jsx)(v.X, {
                default: 16
              }), (0, N.jsx)(j.x, {
                typography: "custom-2-semibold",
                children: e[Ti]
              }), (0, N.jsx)(j.x, {
                typography: "paragraph-3-regular",
                style: "secondary",
                children: e[Ii]
              }), (0, N.jsx)(v.X, {
                default: 28
              })]
            }), (0, N.jsx)(y.z, {
              suppressHydrationWarning: true,
              Element: "a",
              href: s,
              size: "small",
              style: "neutral",
              mode: "secondary",
              target: "_blank",
              stretched: true,
              onClick: () => {
                Ei()({
                  hhtmSourceLabel: "middle"
                });
              },
              children: e[Li]
            })]
          }), (0, N.jsx)(v.X, {
            default: 24
          })]
        });
      } else {
        return null;
      }
    };
    Wi.displayName = "IndexPageAnonymous/AppPromoMobile/index/AppPromoMobileComponent";
    const Bi = (0, f.x)(Wi);
    var Mi = a(670977);
    var Vi = a.n(Mi);
    var Di = a(662125);
    var Fi = a.n(Di);
    var Hi = a(630549);
    var qi = a(304402);
    const Ui = "icon--mbgE6UOe07Dh7Rt3";
    const Xi = "mobile.app.smartbanner.text.anchor.universal";
    const zi = {
      ios: "mobile.app.smartbanner.text.anchor.ios",
      android: "mobile.app.smartbanner.text.anchor.android",
      winphone: "mobile.app.smartbanner.text.anchor.winphone",
      huawei: "mobile.app.smartbanner.text.anchor.huawei"
    };
    const Oi = e => {
      Fi()({
        category: e
      });
      Ei()({
        hhtmSourceLabel: "header"
      });
    };
    const Zi = ({
      trls: e,
      spacingBottom: n
    }) => {
      const a = (0, _.v)(e => e.appLink);
      const s = (0, _.v)(e => e.device);
      const i = (0, _.v)(e => e.userType);
      const r = (0, _.v)(e => e.isWebView);
      const [o, l] = (0, t.useState)(false);
      const c = (0, t.useRef)(null);
      const {
        isXS: d
      } = (0, F.G)();
      const m = (0, Ai.j)({
        from: qi.lZ
      });
      const p = (0, Se.do)();
      (0, t.useEffect)(() => {
        const e = Number(Hi.Y.getItem(qi.hT));
        if (e && e > Date.now() || !a.detected || r || !s.type || !d) {
          l(false);
        } else {
          l(true);
        }
      }, [a.detected, s.type, o, r, d]);
      (0, t.useEffect)(() => {
        if (o && c.current) {
          Vi()(c.current);
        }
      }, [o]);
      const u = (0, t.useMemo)(() => p ? `${a.href}?${qi.lZ}=hh_exp_c` : m, [p, m, a.href]);
      if (o) {
        return (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)(Y.Z, {
            ref: c,
            borderWidth: "default",
            stretched: true,
            borderRadius: 16,
            padding: 16,
            children: (0, N.jsxs)(Fe.b, {
              right: (0, N.jsx)(je.a, {
                icon: en.Cs7,
                onClick: () => {
                  const e = Date.now() + qi.x4 * qi.FB;
                  Hi.Y.setItem(qi.hT, String(e));
                  l(false);
                },
                mode: "secondary"
              }),
              left: (0, N.jsx)(Ue.r, {
                href: u,
                target: "_blank",
                "data-qa": "app-banner",
                onClick: () => Oi(i),
                children: (0, N.jsx)("span", {
                  className: ge()(Ui, {
                    [`app-banner-icon_${a.type}`]: a.type
                  }),
                  "data-qa": "app-banner-img"
                })
              }),
              children: [(0, N.jsx)(qe.j, {
                type: "title",
                children: e[Xi]
              }), (0, N.jsx)(v.X, {
                default: 4
              }), !!s.type && (0, N.jsx)(Ue.r, {
                href: u,
                onClick: () => Oi(i),
                children: (0, N.jsx)(qe.j, {
                  type: "subtitle",
                  style: "accent",
                  "data-qa": "app-banner-storelink",
                  children: e[zi[s.type]]
                })
              })]
            })
          }), n]
        });
      } else {
        return null;
      }
    };
    Zi.displayName = "IndexPageAnonymous/AppSmartBanner/index/AppSmartBanner";
    const Yi = (0, f.x)(Zi);
    var Gi = a(452528);
    var $i = a.n(Gi);
    var Qi = a(752000);
    var Ji = a(107797);
    var Ki = a(127731);
    var er = a(325423);
    const nr = ({
      bigPromoSlogan: e,
      bigPromoHighlightedTextInSlogan: n
    }) => n ? (0, N.jsx)($i(), {
      Element: "span",
      children: (0, Z.WU)(e, {
        "[0]": (0, N.jsx)($i(), {
          Element: "span",
          strong: true,
          children: n
        })
      })
    }) : (0, N.jsx)($i(), {
      Element: "span",
      children: e
    });
    const ar = () => {
      const e = (0, _.v)(({
        supernovaAnonymousDashboard: e
      }) => e);
      const n = (0, t.useRef)(null);
      const a = e.bigPromoEmployerId;
      const {
        sendAnalyticsEvents: s
      } = (0, Ji.O)(n, e);
      const i = (0, Ki.d)(e.bigPromoLinkUrl);
      return (0, N.jsxs)("div", {
        className: "supernova-dashboard-footer supernova-dashboard-footer_with-big-promo",
        ref: n,
        "data-name": "BigPromoAnonymous",
        children: [!e.hideBigPromoFooter && (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)("div", {
            className: `big-promo-logo-wrapper bp-anonymous-logo-wrapper_${a}`,
            children: (0, N.jsx)("div", {
              className: `big-promo-logo bp-anonymous-logo_${a}`
            })
          }), (0, N.jsxs)("div", {
            children: [!e.hideBigPromoSlogan && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)("span", {
                className: `big-promo-slogan bp-anonymous-slogan_${a}`,
                children: nr(e)
              }), er.T4]
            }), (0, N.jsx)("span", {
              className: `big-promo-link-wrapper bp-anonymous-link-wrapper_${a}`,
              children: (0, N.jsx)("a", {
                href: i,
                className: "supernova-link supernova-link_with-line",
                onClick: s,
                target: "_blank",
                rel: "noreferrer",
                children: e.bigPromoLinkText
              })
            })]
          })]
        }), e.bigPromoFootnote && (0, N.jsx)("div", {
          className: `big-promo-footnote bp-anonymous-footnote_${a}`,
          children: e.bigPromoFootnote
        })]
      });
    };
    ar.displayName = "BigPromo/Anonymous/DashboardBigPromoFooter/ComponentDashboardBigPromoFooter";
    const tr = (0, Qi.J)({
      bigPromoStoreField: "supernovaAnonymousDashboard"
    }, ar);
    var sr = a(76137);
    var ir = a(621985);
    var rr = a(361650);
    const or = {
      "counter.resumes.one": "main.counter.resumes.one",
      "counter.resumes.some": "main.counter.resumes.some",
      "counter.resumes.many": "main.counter.resumes.many",
      "counter.resumes.zero": "main.counter.resumes.zero",
      "counter.vacancies.one": "main.counter.vacancies.one",
      "counter.vacancies.some": "main.counter.vacancies.some",
      "counter.vacancies.many": "main.counter.vacancies.many",
      "counter.vacancies.zero": "main.counter.vacancies.zero",
      "counter.employers.one": "main.counter.employers.one",
      "counter.employers.some": "main.counter.employers.some",
      "counter.employers.many": "main.counter.employers.many",
      "counter.employers.zero": "main.counter.employers.zero"
    };
    const lr = ({
      trls: e
    }) => {
      const n = (0, _.v)(e => e.displayType === ir.F.Desktop);
      const a = !(0, Se.$w)() || !n;
      const s = (0, _.v)(({
        globalStatistics: e
      }) => e);
      const i = (0, _.v)(e => e.isAdvCompnay2026Exp);
      const r = (0, _.v)(({
        stayInTouch: e
      }) => e);
      const o = (0, Ai.j)({
        from: "main_head"
      });
      return (0, N.jsxs)("div", {
        className: "supernova-dashboard-footer",
        children: [s !== null && !i && [rr.i.Resumes, rr.i.Vacancies, rr.i.Employers].map((n, a) => {
          const i = s[n];
          if (i) {
            return (0, N.jsx)(t.Fragment, {
              children: (0, N.jsxs)("div", {
                className: ge()("supernova-dashboard-stats", {
                  "supernova-dashboard-stats_secondary": a === 2
                }),
                children: [(0, N.jsx)("div", {
                  className: "supernova-dashboard-stats__value",
                  children: (0, Xs.uf)(i)
                }), (0, N.jsx)($i(), {
                  children: (0, N.jsx)(Zn.q, {
                    many: e[or[`counter.${n}.many`]],
                    some: e[or[`counter.${n}.some`]],
                    one: e[or[`counter.${n}.one`]],
                    zero: e[or[`counter.${n}.zero`]],
                    hasValue: false,
                    value: i
                  })
                })]
              })
            }, n);
          } else {
            return null;
          }
        }), !i && (0, N.jsx)("div", {
          className: "supernova-dashboard-footer-fill"
        }), a && (0, N.jsx)("div", {
          className: "supernova-dashboard-footer-app-buttons",
          children: (0, N.jsx)("div", {
            className: "supernova-app-buttons",
            children: r.apps.filter(e => e.name !== "mobile").map(e => {
              const n = r.mobilePage ? `${r.mobilePage}?from=main_head&hhtmFromLabel=main_head` : o;
              return (0, N.jsx)(u.SPALink, {
                className: `supernova-app-button supernova-app-button_${e.name}`,
                to: n,
                target: "_blank",
                rel: "noreferrer",
                onClick: () => {
                  Ei()({
                    hhtmSourceLabel: "app_stores"
                  });
                }
              }, e.name);
            })
          })
        })]
      });
    };
    lr.displayName = "components/IndexPageAnonymous/DashboardFooter/DashboardFooterComponent";
    const cr = (0, f.x)(lr);
    var dr = a(744226);
    var mr = a(348291);
    const pr = "wrapper-magritte--ipbFoI2pqFQLoT0p";
    const ur = "container-form--HPC8pvpq3bwmkSU2";
    const hr = "box--jCBL3mGLSSkyMeDA";
    const xr = "content--Xvri2ufwbG414rlE";
    const yr = "registration.registered.passwordSent";
    const gr = "registration.registered.letterHighlightedPart";
    const vr = "registration.registered.letterMultiaccountNote.full";
    const br = ({
      trls: e,
      ...n
    }) => {
      const {
        isMobile: a,
        isXS: t
      } = (0, F.G)();
      const {
        login: s
      } = (0, _.v)(({
        otp: e
      }) => e);
      return (0, N.jsx)("div", {
        className: hr,
        children: (0, N.jsxs)("div", {
          className: xr,
          children: [(0, N.jsx)(g.D, {
            size: a ? "small" : "medium",
            Element: "h3",
            style: t ? "primary" : "contrast",
            descriptionStyle: t ? "secondary" : "contrast",
            description: (0, N.jsx)(N.Fragment, {
              children: (0, N.jsx)("p", {
                children: (0, Z.WU)(e[vr], {
                  "{0}": (0, N.jsx)(j.x, {
                    Element: "span",
                    style: t ? "primary" : "contrast",
                    children: e[gr]
                  })
                })
              })
            }),
            children: (0, Z.WU)(e[yr], {
              "{0}": s
            })
          }), (0, N.jsx)(v.X, {
            default: 24
          }), (0, N.jsx)(mr.y, {
            render: ({
              renderInput: e,
              renderError: n,
              renderSubmit: a
            }) => (0, N.jsxs)("div", {
              className: pr,
              children: [(0, N.jsxs)("div", {
                className: ur,
                children: [e(), a()]
              }), (0, N.jsx)(v.X, {
                default: 12
              }), n()]
            }),
            ...n
          })]
        })
      });
    };
    br.displayName = "SignUp/Form/MultiAccountGroupingStep/MultiAccountGroupingStepComponent";
    const jr = (0, f.x)(br);
    const fr = "container--fIxvjlt6XcgloSCu";
    const _r = "input-wrapper--qYXyZILdiw4yTqoi";
    const Sr = "button-wrapper--Ki93RKBgsmQZNKvN";
    const Cr = "agreement--qH5bPBms5HMbn6Aa";
    const kr = "wrapper-magritte--WIYwwnXaL45xNH5o";
    const wr = "wrapper-form--cn0bgKvqMYQumMmA";
    const Nr = "title--dMiEgytqmygCyrgK";
    const Er = "box--qq_YwXUw5W4xi9zG";
    const Ar = "signup.header.phone";
    const Rr = "signupForm.create.submit";
    const Pr = "signup.placeholder.phoneNumber";
    const Tr = ({
      next: e,
      trls: n,
      callbackSubmit: a
    }) => {
      const s = (0, _.v)(({
        authUrl: e
      }) => e == null ? undefined : e.backurl);
      const {
        isMobile: i,
        isXS: r
      } = (0, F.G)();
      const [o, l] = (0, t.useState)(false);
      const c = (0, t.useRef)(null);
      const d = (0, t.useMemo)(() => i ? "small" : r ? "medium" : "large", [r, i]);
      const m = (0, t.useCallback)(e => {
        if (e === "RECAPTCHA_IS_BOT" && !r) {
          l(true);
        }
        if (a != null) {
          a(e);
        }
      }, [a, r]);
      return (0, N.jsx)("div", {
        className: Er,
        children: (0, N.jsxs)("div", {
          children: [(0, N.jsx)("div", {
            className: Nr,
            children: (0, N.jsx)(g.D, {
              size: d,
              Element: "h3",
              style: r ? "primary" : "contrast",
              children: n[Ar]
            })
          }), (0, N.jsx)(v.X, {
            default: 24
          }), (0, N.jsx)($a.Mi, {
            isAutofocusEnabled: false,
            backurl: s,
            next: e,
            callbackSubmit: m,
            render: ({
              renderLogin: e,
              renderSubmitButton: a,
              renderCaptcha: t
            }) => (0, N.jsxs)("div", {
              className: kr,
              ref: c,
              children: [(0, N.jsxs)("div", {
                className: wr,
                children: [(0, N.jsxs)("div", {
                  className: fr,
                  children: [(0, N.jsx)("div", {
                    className: _r,
                    children: e({
                      placeholder: n[Pr]
                    })
                  }), (0, N.jsx)("div", {
                    className: Sr,
                    children: !o && a(n[Rr], {
                      scale: undefined
                    })
                  })]
                }), r && t(), (0, N.jsx)(v.X, {
                  default: 24
                }), (0, N.jsx)($i(), {
                  children: (0, N.jsx)("div", {
                    className: Cr,
                    children: (0, N.jsx)(jt, {})
                  })
                })]
              }), !r && (0, N.jsxs)(N.Fragment, {
                children: [(0, N.jsx)(h.u, {
                  size: "small",
                  host: c.current || undefined,
                  visible: o,
                  onClose: () => {
                    l(false);
                  },
                  children: (0, N.jsxs)("div", {
                    children: [t(), (0, N.jsx)(v.X, {
                      default: 24
                    }), a(n[Rr], {
                      scale: undefined
                    })]
                  })
                }), (0, N.jsxs)(jn.R, {
                  visible: o,
                  onClose: () => {
                    l(false);
                  },
                  children: [t(), (0, N.jsx)(v.X, {
                    default: 24
                  }), a(n[Rr], {
                    scale: undefined
                  }), (0, N.jsx)(v.X, {
                    default: 24
                  })]
                })]
              })]
            })
          })]
        })
      });
    };
    Tr.displayName = "SignUp/Form/SignInStep/SignInStepComponent";
    const Ir = (0, f.x)(Tr);
    var Lr = a(771268);
    const Wr = "container--R8f6D4_lNIMLoZ1j";
    const Br = "container-column--oYxeJA3jRgu5HnoW";
    const Mr = "submit--AQgRCyvDWUzsea6i";
    const Vr = "content--ikYZ8akIUBpybGlI";
    const Dr = "signUpStep.header.1";
    const Fr = "signUpStep.header.2";
    const Hr = ({
      trls: e,
      ...n
    }) => {
      const a = (0, ns.d)();
      const s = (0, as.T)();
      const {
        isGtS: i,
        isMobile: r,
        isXS: o
      } = (0, F.G)();
      const l = (0, t.useMemo)(() => r ? "small" : o ? "medium" : "large", [o, r]);
      return (0, N.jsxs)("div", {
        className: Vr,
        children: [(0, N.jsxs)(g.D, {
          size: l,
          Element: "h3",
          style: o ? "primary" : "contrast",
          children: [e[Dr], " ", !o && (0, N.jsx)("br", {}), " ", e[Fr]]
        }), (0, N.jsx)(v.X, {
          default: 24
        }), (0, N.jsx)(Lr.W, {
          render: ({
            renderFirstNameField: e,
            renderLastNameField: n,
            renderAccountDeleteInactive: t,
            renderSubmit: r,
            renderAdvertisementAgreement: o,
            renderAdvertisementSubscriptionApplicant: l
          }) => (0, N.jsxs)(X.z, {
            default: 24,
            children: [(0, N.jsxs)("div", {
              className: ge()(Wr, {
                [Br]: true
              }),
              children: [e({
                size: "medium"
              }), n({
                size: "medium"
              }), i && (0, N.jsx)("div", {
                className: Mr,
                children: r()
              })]
            }), t(), s && l(), a && o(), !i && (0, N.jsx)("div", {
              className: Mr,
              children: r()
            })]
          }),
          backurl: "/applicant/resumes/new",
          isSignupMain: true,
          ...n
        })]
      });
    };
    Hr.displayName = "SignUp/Form/SignUpStep/SignUpStepComponent";
    const qr = (0, f.x)(Hr);
    const Ur = "form-container--u8BEKgtx0VUeVNbW";
    const Xr = "input-wrapper--S01enbHKDA6Uu26W";
    const zr = "title--DZ0KQzO0NWAHXF7t";
    const Or = "content--eqmgCcFjc6kpZIEL";
    const Zr = "box--rC5oOMeL6CU7qUBw";
    const Yr = {
      sentShort: "otp.confirm.header",
      description1: "signUpForm.verification.codeSentDescription.1.phone",
      description2: "signUpForm.verification.codeSentDescription.2.phone"
    };
    const Gr = {
      sentShort: "otp.confirm.header",
      descriptionShort: "otp.confirm.sub.header.short"
    };
    const $r = {
      sent: "signUpForm.verification.codeSent.whatsApp",
      description: "signUpForm.verification.codeSent.whatsApp.description"
    };
    const Qr = ({
      trls: e,
      setHeader: n,
      errorPageLogin: a,
      codePlaceholder: s,
      onCancel: i,
      cancelText: r,
      ...o
    }) => {
      const {
        login: l,
        authType: c
      } = o;
      const d = (0, _.v)(({
        otpVerification: e
      }) => e == null ? undefined : e.codeLength);
      const m = (0, _.v)(({
        otp: e
      }) => e == null ? undefined : e.formattedPhone);
      const {
        isMobile: p,
        isXS: u
      } = (0, F.G)();
      const h = (0, t.useMemo)(() => {
        switch (c) {
          case "SMS":
          case "PHONE_CALL":
            return e[Yr.sentShort];
          case "WHATS_APP":
            return e[$r.sent];
          default:
            return e[Gr.sentShort];
        }
      }, [c, e]);
      const x = (0, t.useMemo)(() => {
        switch (c) {
          case "SMS":
          case "PHONE_CALL":
            return (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)("p", {
                children: e[Yr.description1]
              }), (0, N.jsx)("p", {
                children: e[Yr.description2]
              })]
            });
          case "WHATS_APP":
            return e[$r.description];
          default:
            return e[Gr.descriptionShort];
        }
      }, [c, e]);
      const y = (0, t.useMemo)(() => p ? "small" : u ? "medium" : "large", [u, p]);
      return (0, N.jsx)("div", {
        className: Zr,
        children: (0, N.jsxs)("div", {
          className: Or,
          children: [(0, N.jsx)("div", {
            className: zr,
            children: (0, N.jsx)(g.D, {
              size: y,
              Element: "h3",
              description: x,
              style: u ? "primary" : "contrast",
              descriptionStyle: u ? "secondary" : "contrast",
              children: (0, Z.WU)(h, {
                "{0}": (0, N.jsx)(N.Fragment, {
                  children: m || l
                })
              })
            })
          }), (0, N.jsx)(v.X, {
            default: 24
          }), (0, N.jsx)(Cs.G, {
            isPincodeInput: true,
            codeLength: d,
            render: ({
              renderInput: e,
              renderCodeError: n,
              renderCodeSender: a
            }) => (0, N.jsxs)(q.C, {
              xs: 4,
              s: 8,
              m: 5,
              l: 5,
              children: [(0, N.jsx)("div", {
                className: Ur,
                children: (0, N.jsx)("div", {
                  className: Xr,
                  children: e({
                    placeholder: s,
                    isAutofocus: true
                  })
                })
              }), (0, N.jsxs)("div", {
                children: [(0, N.jsx)(v.X, {
                  default: 12
                }), n(), (0, N.jsx)(v.X, {
                  default: 12
                }), (0, N.jsx)(Ue.r, {
                  style: "constant",
                  typography: "label-2-regular",
                  children: a()
                })]
              })]
            }),
            ...o
          })]
        })
      });
    };
    Qr.displayName = "SignUp/Form/VerificationStep/VerificationStepComponent";
    const Jr = (0, f.x)(Qr);
    const Kr = ({
      setHeader: e,
      onNextStep: n
    }) => {
      const a = (0, t.useCallback)(e => (0, N.jsx)(Ir, {
        ...e
      }), []);
      const s = (0, t.useCallback)(n => (0, N.jsx)(Jr, {
        ...n,
        setHeader: e
      }), [e]);
      const i = (0, t.useCallback)(e => (0, N.jsx)(jr, {
        ...e
      }), []);
      const r = (0, t.useCallback)(e => (0, N.jsx)(qr, {
        ...e
      }), []);
      return (0, N.jsx)(dr.Z, {
        SignIn: a,
        Verification: s,
        MultiAccountGrouping: i,
        SignUp: r,
        isCurrentUrlReferrer: true,
        onNextStep: n
      });
    };
    Kr.displayName = "SignUp/Form/index/SignupForm";
    const eo = "banner-card--bFPKaZbEAoM40viS";
    const no = "catch-me-link--buR3Tz1KlaccYpbV";
    const ao = "container--s52cYL9CkIJ558E1";
    const to = "container-centered--wmJsw_4HJs78qk8g";
    const so = "form-container--Rz5g_e8TjKIxH6qf";
    const io = () => {
      const e = (0, _.v)(({
        supernovaAnonymousDashboard: e
      }) => e);
      const n = (0, _.v)(({
        userType: e
      }) => e);
      const [a, s] = (0, t.useState)(true);
      const i = (0, sr.J)();
      const r = (0, t.useCallback)(() => {
        s(false);
      }, []);
      return (0, N.jsx)("div", {
        className: ge()("supernova-dashboard supernova-dashboard_optimized-menu", "supernova-dashboard-magritte", {
          "supernova-dashboard_optimized-menu-redesign": i,
          [`supernova-dashboard_bg-applicant-${e.backgroundScope}-${e.backgroundIndex}`]: e.backgroundScope,
          [`bp-anonymous-${e.bigPromoEmployerId}`]: e.bigPromoEmployerId,
          "supernova-dashboard_backoffice": n === re.FW.BackOffice,
          "supernova-dashboard-magritte-new-header": i
        }),
        children: (0, N.jsx)("div", {
          className: ge()("supernova-dashboard-content", "supernova-dashboard-anon-magritte", "supernova-dashboard-anon-magritte-with-form", {
            "supernova-dashboard-anon-magritte-with-form-first-step": a
          }),
          children: (0, N.jsx)(H.M, {
            children: (0, N.jsxs)("div", {
              className: ge()({
                [ao]: true,
                [to]: !a
              }),
              children: [(0, N.jsx)(U.J, {
                children: (0, N.jsx)(q.C, {
                  xs: 0,
                  s: 8,
                  m: 8,
                  flexibleContent: true,
                  children: (0, N.jsx)("div", {
                    className: ge()({
                      [so]: a
                    }),
                    children: (0, N.jsx)(Kr, {
                      onNextStep: r
                    })
                  })
                })
              }), a && (0, N.jsxs)(U.J, {
                children: [(0, N.jsx)(q.C, {
                  xs: 0,
                  s: 8,
                  m: 0,
                  xxl: 0
                }), (0, N.jsx)(q.C, {
                  xs: 0,
                  s: 8,
                  m: 12,
                  xxl: 12,
                  flexibleContent: true,
                  children: e.bigPromoEmployerId ? (0, N.jsx)(tr, {}) : (0, N.jsx)(cr, {})
                })]
              })]
            })
          })
        })
      });
    };
    io.displayName = "components/IndexPageAnonymous/Dashboard/Dashboard";
    var ro = a(935192);
    var oo = a(739788);
    var lo = a(666825);
    var co = a.n(lo);
    var mo = a(741164);
    var po = a(265863);
    var uo = a(261477);
    var ho = a(338795);
    var xo = a(964427);
    var yo = a(819497);
    var go = a(89396);
    var vo = a(297347);
    var bo = a(303331);
    const jo = "supernova.navi.jobSearch";
    const fo = "index.dashboard.in";
    const _o = ({
      trls: e,
      withBackdrop: n
    }) => {
      const a = (0, Sn.w)();
      const s = (0, xn.useDispatch)();
      const [i, r] = (0, t.useState)(false);
      const o = bo.Tt.Vacancies;
      const l = (0, _.v)(({
        headerMenu: e
      }) => {
        var n;
        if (e == null || (n = e.find(e => e.name === "searchForm")) === null || n === undefined || (n = n.subItems) === null || n === undefined) {
          return undefined;
        } else {
          return n.find(e => e.name === o);
        }
      });
      const c = (0, t.useRef)(null);
      const d = (0, _.v)(({
        supernovaSearchArea: e
      }) => e.translations);
      const m = (0, xo.x)(o);
      const p = (0, yo.B)();
      const u = (0, _.v)(({
        router: e
      }) => e.location.pathname === nn.Z.indexPage);
      const h = (0, po.df)();
      const x = (0, go.i)();
      const y = (0, t.useCallback)(() => {
        m();
        if (a) {
          const e = (0, vo.V)(c.current);
          s((0, _n.F)(e));
          r(true);
        } else {
          var e;
          if ((e = c.current) !== null && e !== undefined) {
            e.requestSubmit();
          }
        }
      }, [s, a, m]);
      if (!l) {
        return null;
      }
      const g = (0, N.jsxs)("div", {
        className: ge()("supernova-dashboard-mobile", {
          "supernova-dashboard-mobile-magritte": u
        }),
        children: [(0, N.jsx)("div", {
          className: "supernova-dashboard-mobile-header supernova-dashboard-mobile-header_inline",
          children: (0, N.jsxs)($i(), {
            size: Gi.TextSize.Large,
            children: [(0, N.jsx)("div", {
              className: "supernova-dashboard-mobile-inline-title",
              children: (0, N.jsx)(oo.H3Section, {
                lite: true,
                children: e[jo]
              })
            }), " ", e[fo], (0, N.jsx)(co(), {
              appearance: lo.LinkAppearance.Pseudo,
              Element: "button",
              kind: lo.LinkKind.Tertiary,
              onClick: p,
              children: d.area
            })]
          })
        }), (0, N.jsxs)(Et.Z, {
          onSubmit: e => {
            if (a) {
              e.preventDefault();
            }
            m();
          },
          action: l.action,
          method: "GET",
          ref: c,
          children: [(0, N.jsx)(ho.h, {}), (0, N.jsxs)(ro.q, {
            default: 12,
            children: [(0, N.jsx)(uo.Z, {
              searchName: o,
              submitForm: y
            }, Number(i)), h && (0, N.jsx)(mo.U, {
              forceHideLabel: true,
              mediumButton: true,
              fromMain: true
            })]
          })]
        })]
      });
      return (0, N.jsx)("div", {
        className: n ? "supernova-dashboard-mobile-wrapper" : "",
        children: x ? (0, N.jsx)(U.J, {
          children: (0, N.jsx)(q.C, {
            xs: 4,
            s: 0,
            children: g
          })
        }) : (0, N.jsx)(za.ColumnsWrapper, {
          children: (0, N.jsx)(Oa(), {
            xs: "4",
            s: "0",
            m: "0",
            l: "0",
            children: g
          })
        })
      });
    };
    _o.displayName = "components/IndexPageAnonymous/DashboardMobileSearch/DashboardMobileSearchComponent";
    const So = (0, f.x)(_o);
    var Co = a(631325);
    var ko = a(405108);
    const wo = "index.search.in.area";
    const No = "index.headers.main";
    const Eo = ({
      trls: e
    }) => {
      const n = (0, _.v)(({
        supernovaSearchArea: e
      }) => e.translations);
      const {
        h1: a
      } = (0, _.v)(e => e.pageMetaData);
      const t = (0, Se.$w)();
      return (0, N.jsx)(g.D, {
        Element: "h3",
        size: "medium",
        "data-qa": "main-page-anonymous-header",
        children: t ? a || e[No] : (0, Z.WU)(e[wo], {
          "{0}": n.area
        })
      });
    };
    Eo.displayName = "IndexPageAnonymous/DashboardSearchTitle/index/DashboardSearchTitleComponent";
    const Ao = (0, f.x)(Eo);
    const Ro = "index.search.lookingForEmployee";
    const Po = () => m().sendHHEventButtonClick("looking_for_employee_index_page");
    const To = ({
      trls: e
    }) => {
      const n = (0, _.v)(({
        supernovaAnonymousDashboard: e
      }) => e);
      const a = (0, _.v)(({
        headerMenu: e
      }) => e).find(e => e.name === "lookingForEmployee");
      const t = {
        ...(0, ko.u)(),
        isAnonymousDashboardSearch: true
      };
      return (0, N.jsxs)("div", {
        className: ge()("supernova-dashboard-search", {
          "supernova-dashboard-search_with-big-promo": n.bigPromoEmployerId,
          "supernova-dashboard-search-in-page-content": true
        }),
        children: [(0, N.jsx)(Ao, {}), (0, N.jsx)(v.X, {
          default: 16
        }), (0, N.jsx)(Co.Z, {
          ...t
        }), a && (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)(v.X, {
            default: 16
          }), (0, N.jsx)(Ue.r, {
            Element: u.SPALink,
            to: a.url,
            onClick: Po,
            style: "neutral",
            mode: "secondary",
            underlined: true,
            children: (0, N.jsx)(j.x, {
              typography: "label-2-regular",
              Element: "span",
              style: "contrast",
              children: e[Ro]
            })
          })]
        })]
      });
    };
    To.displayName = "components/IndexPageAnonymous/DashboardSearch/DashboardSearchComponent";
    const Io = (0, f.x)(To);
    const Lo = "container--X8HyZ14jgnQmoUqZ";
    const Wo = () => {
      const {
        isMobile: e
      } = (0, F.G)();
      return (0, N.jsx)(q.C, {
        xs: 4,
        s: 8,
        m: 12,
        l: 12,
        "data-qa": "signup-banner",
        children: (0, N.jsx)(Y.Z, {
          borderWidth: "default",
          padding: e ? 24 : 32,
          borderRadius: e ? 24 : 32,
          stretched: true,
          children: (0, N.jsx)(De.H, {
            isEnabled: true,
            children: (0, N.jsx)("div", {
              className: Lo,
              children: (0, N.jsx)(Kr, {
                isCurrentUrlReferrer: true
              })
            })
          })
        })
      });
    };
    Wo.displayName = "SignUp/Banner/index/SignUpBanner";
    const Bo = (0, f.x)(Wo);
    var Mo = a(197252);
    const Vo = {
      container: "container--DSfQ4qywJQsNi2c3",
      description: "description--qI1u5nXRqSMtZRMQ",
      image: "image--cnSUtHaW6zEEtaTw",
      apps: "apps--leyOS47TBjstb3RE",
      "app-button": "app-button--mup0hDXTSTgJ2fhN",
      appButton: "app-button--mup0hDXTSTgJ2fhN",
      "app-button-ios": "app-button-ios--JLaFL2A7JUUCnsVN",
      appButtonIos: "app-button-ios--JLaFL2A7JUUCnsVN",
      "app-button-android": "app-button-android--TAxh6sdAEw1vnsSv",
      appButtonAndroid: "app-button-android--TAxh6sdAEw1vnsSv",
      "app-button-huawei": "app-button-huawei--yVk00d5hFKI4XiM5",
      appButtonHuawei: "app-button-huawei--yVk00d5hFKI4XiM5"
    };
    const Do = "index.headers.stayInTouch.applicant";
    const Fo = ({
      trls: e
    }) => {
      const n = (0, xt.z)();
      const a = (0, xt.kQ)();
      const t = (0, Se.$w)();
      const {
        mobilePage: s,
        apps: i
      } = (0, _.v)(e => e.stayInTouch);
      const r = (0, _.v)(({
        device: e
      }) => e);
      const o = (0, _.v)(e => e.userType);
      const l = n === Mo.MQ.Belarus;
      const c = o === re.FW.Employer;
      const d = (0, Ai.j)({
        from: "footer_banner"
      });
      if (!i.length) {
        return null;
      }
      const p = e => {
        if (!a && !l) {
          return d;
        }
        if (t) {
          return d;
        }
        if (l && r != null && r.type) {
          const n = (0, Bn.j)(e);
          n.params = {
            ...n.params,
            footer_banner: ""
          };
          return n.href;
        }
        if (r != null && r.type) {
          return d;
        } else {
          return (s || c ? "/hrmobile" : "/mobile") + "?from=main_banner_mobapps";
        }
      };
      return (0, N.jsx)(Y.Z, {
        padding: 24,
        borderRadius: 24,
        borderWidth: "default",
        stretched: true,
        verticalStretched: true,
        children: (0, N.jsxs)("div", {
          className: Vo.container,
          children: [(0, N.jsx)(g.D, {
            Element: "h4",
            size: "medium",
            alignment: "center",
            children: e[Do]
          }), (0, N.jsx)("div", {
            className: Vo.apps,
            children: i.map(({
              href: e,
              name: n
            }) => {
              return (0, N.jsx)("a", {
                className: ge()(Vo.appButton, Vo[`appButton${a = n, a.charAt(0).toUpperCase() + a.slice(1)}`]),
                rel: "noopener noreferrer",
                target: "_blank",
                href: p(e),
                onClick: () => m().sendEvent("mobile_application", n, "above_footer")
              }, n);
              var a;
            })
          }), (0, N.jsx)("div", {
            className: Vo.image
          })]
        })
      });
    };
    Fo.displayName = "IndexPageAnonymous/StayInTouch/index/StayInTouch";
    const Ho = (0, f.x)(Fo);
    const qo = ({
      vacancy: e,
      children: n
    }) => e.company.id !== undefined ? (0, N.jsx)(co(), {
      Element: u.SPALink,
      to: dn(e),
      kind: lo.LinkKind.Secondary,
      children: n
    }) : (0, N.jsx)(N.Fragment, {
      children: n
    });
    qo.displayName = "components/VacancyCompanyLink/index/VacancyCompanyLink";
    const Uo = qo;
    const Xo = "container--XsTLlSlBpUBdW4cb";
    const zo = "container-horizontal--DYgD_TH_ANUBno16";
    const Oo = ({
      vacancy: e,
      hhtmSource: n,
      hhtmFromLabel: a,
      setVacancyRef: s
    }) => {
      const i = (0, t.useRef)(null);
      const r = (0, Dn.X)(i);
      const o = (0, t.useRef)(null);
      const l = (0, Dn.X)(o);
      const c = (0, zs.B)(s, i);
      const {
        isXS: d
      } = (0, F.G)();
      return (0, N.jsx)(Y.Z, {
        borderWidth: "default",
        stretched: true,
        padding: 24,
        borderRadius: 24,
        verticalStretched: true,
        hoverEnabled: true,
        children: (0, N.jsxs)("div", {
          className: ge()(Xo, {
            [zo]: d
          }),
          children: [(0, N.jsxs)("div", {
            children: [(0, N.jsxs)(Ue.r, {
              style: "neutral",
              Element: u.SPALink,
              to: (0, Jn.e$)(e, Pn.mV.MainPageBottom),
              target: "_blank",
              additionalQueryParams: {
                source: "vacancies_of_the_day",
                hhtmFromLabel: a,
                from: n
              },
              onClick: () => na(e.vacancyId, "vacancy_of_the_day"),
              children: [(0, N.jsx)(j.x, {
                typography: "subtitle-1-semibold",
                maxLines: 2,
                "data-qa": "vacancy_of_the_day_title",
                children: (0, N.jsx)("div", {
                  id: String(e.vacancyId),
                  ref: c,
                  children: e.name
                })
              }), r && (0, N.jsx)(In.p, {
                placement: "top-center",
                activatorRef: i,
                children: e.name
              })]
            }), (0, N.jsx)(j.x, {
              typography: "paragraph-2-regular",
              children: (0, N.jsx)("span", {
                "data-qa": "vacancy_of_the_day_compensation",
                children: (0, N.jsx)(on.Z, {
                  ...e.compensation,
                  analyticsContext: "VacancyOfTheDay2",
                  showNoSalaryMessage: true
                })
              })
            })]
          }), (0, N.jsx)(v.X, {
            default: 24
          }), (0, N.jsx)(Fe.b, {
            align: "center",
            slot: (0, N.jsx)(He.q, {
              shapeCircle: true,
              size: 40,
              mode: "image",
              image: e.company.logoUrl || "",
              placeholder: "city",
              "aria-label": "company-logo"
            }),
            children: (0, N.jsxs)(Uo, {
              vacancy: e,
              "data-qa": "vacancy_of_the_day_company",
              children: [(0, N.jsx)(j.x, {
                typography: "paragraph-2-regular",
                style: "primary",
                maxLines: 1,
                children: (0, N.jsx)("div", {
                  ref: o,
                  children: e.company.visibleName
                })
              }), l && (0, N.jsx)(In.p, {
                placement: "top-center",
                activatorRef: o,
                children: e.company.visibleName
              })]
            })
          })]
        })
      });
    };
    Oo.displayName = "VacanciesOfTheDay/VacancyOfTheDay/index/VacancyOfTheDay";
    const Zo = (0, f.x)(Oo);
    const Yo = "container--GuW7cSIllUCv77Hx";
    const Go = "banner-card--KlGzVBCv274F5iLP";
    const $o = "container-horizontal--zmdR51UlKdMRkz8E";
    const Qo = "index.vacancies.no.city";
    const Jo = "index.headers.vod";
    const Ko = [2, 5];
    const el = {
      [Ke.Uo.S]: [0, 1],
      [Ke.Uo.M]: [1, 3],
      [Ke.Uo.L]: [2, 5]
    };
    const nl = ({
      trls: e
    }) => {
      const n = (0, _.v)(e => e.vacanciesOfTheDay);
      const a = (0, _.v)(({
        analyticsParams: e
      }) => e.hhtmSource);
      const s = (0, _.v)(e => e.banners[En.L.INDEX_VOD_ANONYMOUS]);
      const i = (0, _.v)(e => e.locale);
      const r = (0, _.v)(e => e.domainRegionTrlNom);
      const o = i.areaId !== Mo.Qt || !!i.isSeoDomain;
      const l = {
        [Ke.Uo.XS]: Infinity,
        [Ke.Uo.S]: 2,
        [Ke.Uo.M]: 7,
        [Ke.Uo.L]: 10,
        [Ke.Uo.XL]: 10
      };
      const {
        breakpoint: c,
        isMobile: d,
        isXS: m
      } = (0, F.G)();
      const p = (0, Qn.B)(n.vacancies, m ? Pn.mV.MainPageXsSlider : Pn.mV.MainPageBottom);
      const u = l[c] || 8;
      const h = el[c] || Ko;
      const x = (0, Se.do)();
      if (n.vacancies.length) {
        return (0, N.jsxs)("div", {
          children: [(0, N.jsx)(g.D, {
            Element: "h3",
            size: d ? "small" : "medium",
            children: e[Qo]
          }), (0, N.jsx)(v.X, {
            default: 16,
            gteS: 20,
            gteM: 24
          }), (0, N.jsx)(an.Z, {
            needToExpand: m || n.vacancies.length > u,
            renderPreview: () => (0, N.jsx)("div", {
              className: ge()(Yo, {
                [$o]: m
              }),
              children: n.vacancies.slice(0, u).map((e, n) => {
                let i;
                if (s != null && s.length && h.includes(n)) {
                  i = s[h.indexOf(n)];
                }
                return (0, N.jsxs)(t.Fragment, {
                  children: [(0, N.jsx)(Zo, {
                    vacancy: e,
                    hhtmFromLabel: "vacancies_of_the_day",
                    hhtmSource: a,
                    setVacancyRef: p
                  }, e.vacancyId), !!i && !m && !x && (0, N.jsx)(Y.Z, {
                    padding: 0,
                    borderRadius: 24,
                    children: (0, N.jsx)("div", {
                      className: ge()(Go, "HHC-Banner-Wrapper", "banner-place-wrapper"),
                      "data-empty-class": "banner-place-wrapper_hide",
                      onClick: () => M()({
                        type: `right${i.id}`
                      }),
                      children: (0, N.jsx)(z.F, {
                        ...i
                      })
                    }, i.id)
                  })]
                }, e.vacancyId);
              })
            }),
            renderRest: () => (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(v.X, {
                default: 24
              }), (0, N.jsx)("div", {
                className: Yo,
                children: n.vacancies.slice(u).map(e => (0, N.jsx)(Zo, {
                  vacancy: e,
                  hhtmFromLabel: "vacancies_of_the_day",
                  hhtmSource: a,
                  setVacancyRef: p
                }, e.vacancyId))
              })]
            }),
            bottomSheetTitle: e[Jo],
            bottomSheetSubtitle: o ? r : undefined,
            renderBottomSheetContent: () => (0, N.jsx)("div", {
              className: Yo,
              children: n.vacancies.map(e => (0, N.jsx)(Zo, {
                vacancy: e,
                hhtmFromLabel: "vacancies_of_the_day",
                hhtmSource: a,
                setVacancyRef: p
              }, e.vacancyId))
            })
          })]
        });
      } else {
        return null;
      }
    };
    nl.displayName = "IndexPageAnonymous/VacanciesOfTheDay/index/VacanciesOfTheDay";
    const al = (0, f.x)(nl);
    var tl = a(318495);
    var sl = a(360205);
    var il = a(539424);
    var rl = a(130488);
    const ol = "work-in-city--Bd4O8BU_qks0Pv9F";
    const ll = "work-in-city-paragraph--zYf5WiGVlC4cA34I";
    const cl = "work-in-city-paragraph-toggling--p7X7mLAfo4ARWxv0";
    const dl = "work-in-city-expanded--y9diVZjOIuEp2fKt";
    const ml = ({
      options: e,
      originalElement: {
        children: n
      },
      expanded: a
    }) => n ? (0, N.jsx)("div", {
      className: ge()(ol, {
        [dl]: a
      }),
      children: (0, N.jsx)(j.x, {
        typography: "label-2-regular",
        style: "secondary",
        children: (0, rl.domToReact)(n, e)
      })
    }) : null;
    ml.displayName = "WorkInCity/mappers/Body/Body";
    const pl = ({
      options: e,
      originalElement: {
        children: n
      },
      stringElement: a
    }) => (0, N.jsxs)(N.Fragment, {
      children: [a, !!n && (0, rl.domToReact)(n, e)]
    });
    pl.displayName = "WorkInCity/mappers/DefaultStringElement/DefaultStringElement";
    const ul = ({
      options: e,
      originalElement: {
        children: n
      }
    }) => n ? (0, N.jsxs)(N.Fragment, {
      children: [(0, N.jsx)(g.D, {
        size: "large",
        Element: "h2",
        children: (0, rl.domToReact)(n, e)
      }), (0, N.jsx)(v.X, {
        default: 12
      })]
    }) : null;
    ul.displayName = "WorkInCity/mappers/Header/Header";
    const hl = ({
      options: e,
      originalElement: {
        attribs: n,
        children: a
      }
    }) => (0, N.jsx)(N.Fragment, {
      children: !!n && !!a && (0, N.jsx)(co(), {
        ...(0, rl.attributesToProps)(n),
        disableVisited: true,
        children: (0, rl.domToReact)(a, e)
      })
    });
    hl.displayName = "WorkInCity/mappers/Link/Link";
    const xl = ({
      options: e,
      originalElement: {
        name: n,
        children: a,
        parent: s
      }
    }) => (0, N.jsx)(N.Fragment, {
      children: !!a && !!n && (0, t.createElement)(n, {
        className: ge()(ll, {
          [cl]: (s == null ? undefined : s.name) === il.d.Toggle
        })
      }, (0, rl.domToReact)(a, e))
    });
    xl.displayName = "WorkInCity/mappers/Paragraph/Paragraph";
    const yl = ({
      options: e,
      originalElement: {
        children: n
      },
      expanded: a,
      open: t,
      close: s,
      handleContainerClick: i
    }) => n ? (0, N.jsxs)(N.Fragment, {
      children: [a && (0, rl.domToReact)(n, e), (0, N.jsx)(v.X, {
        default: 16,
        gteS: 20,
        gteM: 24
      }), (0, N.jsx)(Ue.r, {
        iconRight: a ? (0, N.jsx)(en.HfI, {}) : (0, N.jsx)(en.b$C, {}),
        onClick: i,
        Element: "button",
        children: a ? s : t
      })]
    }) : null;
    yl.displayName = "WorkInCity/mappers/Toggle/Toggle";
    const gl = "index.collapsible.button.open";
    const vl = "index.collapsible.button.close";
    const bl = ({
      trls: e
    }) => {
      const {
        articleXmlStr: n,
        areaNamePre: a,
        areaName: t,
        areaWithPretext: s,
        salaryFork: i
      } = (0, _.v)(e => e.workInCity);
      const [r, o] = (0, sl.l)(false);
      const l = (0, tl.x)({
        body: (0, tl.p)(ml, {
          expanded: r
        }),
        p: (0, tl.p)(xl, {}),
        [il.d.AreaNamePre]: (0, tl.p)(pl, {
          stringElement: a
        }),
        [il.d.AreaName]: (0, tl.p)(pl, {
          stringElement: t
        }),
        [il.d.AreaWithPretext]: (0, tl.p)(pl, {
          stringElement: s
        }),
        [il.d.Header]: (0, tl.p)(ul, {}),
        [il.d.Toggle]: (0, tl.p)(yl, {
          handleContainerClick: () => {
            o();
          },
          expanded: r,
          open: e[gl],
          close: e[vl]
        }),
        [il.d.Link]: (0, tl.p)(hl, {}),
        [il.d.SalaryFork]: (0, tl.p)(pl, {
          stringElement: i
        })
      });
      if (n) {
        return (0, N.jsx)(N.Fragment, {
          children: l(n)
        });
      } else {
        return null;
      }
    };
    bl.displayName = "components/IndexPageAnonymous/WorkInCity/WorkInCity";
    const jl = (0, f.x)(bl);
    const fl = "index.newsTitle";
    const _l = "index.Articles";
    const Sl = "index.professions.mainTitle.anonymous";
    const Cl = ({
      trls: e
    }) => {
      const n = (0, _.v)(e => e.applicantNews);
      const a = (0, _.v)(e => e.applicantArticles);
      const s = (0, _.v)(e => e.applicantUseful);
      const i = (0, _.v)(e => e.banners[En.L.INDEX_HORIZONTAL]);
      const r = (0, _.v)(e => e.banners[En.L.INDEX_DASHBOARD_MOBILE_ANONYMOUS]);
      const o = (0, _.v)(e => e.banners[En.L.INDEX_UNDER_RAINBOW_MOBILE_ANONYMOUS]);
      const l = (0, _.v)(e => e.banners[En.L.INDEX_UNDER_NEWS_BOX_MOBILE_ANONYMOUS]);
      const c = (0, _.v)(e => e.banners[En.L.INDEX_BOTTOM_MOBILE_ANONYMOUS]);
      const m = (0, _.v)(e => e.chatBot);
      const p = (0, Se.$w)();
      const h = (0, Se.Xl)();
      const x = (0, Se.do)();
      const {
        isMobile: y,
        isXS: g,
        isGtM: b
      } = (0, F.G)();
      Ha();
      const j = x ? "/articles/applicants" : "/articles/site-news";
      const f = e => {
        M()({
          type: e
        });
      };
      const S = (0, _.v)(e => {
        return e.youthVacanciesBanner?.isModalVisibleOnPageOpen;
      });
      const [C, k] = (0, t.useState)(!!S);
      const w = (0, d.useElementShown)(D());
      return (0, N.jsx)(N.Fragment, {
        children: (0, N.jsxs)(De.H, {
          isEnabled: true,
          children: [(0, N.jsx)(u.SPALink, {
            to: "/catch_me",
            ref: w,
            className: no,
            children: "Ссылка на эксперимент"
          }), (0, N.jsx)(io, {}), !g && (0, N.jsx)(v.X, {
            default: 40,
            xs: 24,
            s: 24
          }), (0, N.jsxs)(H.M, {
            children: [g && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(v.X, {
                default: 40,
                xs: 24,
                s: 24
              }), (0, N.jsx)(Bo, {}), (0, N.jsx)(v.X, {
                default: 40,
                xs: 24,
                s: 24
              })]
            }), (0, N.jsx)(Yi, {
              spacingBottom: (0, N.jsx)(v.X, {
                default: 24,
                gteS: 32,
                gteM: 40
              })
            }), g && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(So, {}), (0, N.jsx)(v.X, {
                default: 40,
                xs: 24,
                s: 24
              })]
            }), !g && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(Io, {}), (0, N.jsx)(v.X, {
                default: 40,
                s: 24,
                xs: 24
              })]
            }), !g && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(Ea, {}), (0, N.jsx)(v.X, {
                default: 40,
                s: 24
              })]
            }), (0, N.jsx)(al, {}), (0, N.jsx)(v.X, {
              default: 40,
              xs: 24,
              s: 24
            }), g && (r == null ? undefined : r.map(e => (0, N.jsx)(q.C, {
              xs: 4,
              s: 0,
              children: (0, N.jsxs)("div", {
                onClick: () => f("XsBeforeCompanies"),
                children: [(0, N.jsx)("div", {
                  className: eo,
                  children: (0, N.jsx)(z.F, {
                    ...e
                  })
                }), (0, N.jsx)(v.X, {
                  default: 40,
                  xs: 24,
                  s: 24
                })]
              })
            }, e.id))), (0, N.jsx)(di, {
              spacingBottom: (0, N.jsx)(v.X, {
                default: 32,
                xs: 24,
                gteS: 32,
                gteM: 40
              })
            }), g && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(Ea, {}), (0, N.jsx)(v.X, {
                default: 40,
                xs: 24,
                s: 24
              })]
            }), g && (o == null ? undefined : o.map(e => (0, N.jsxs)(q.C, {
              xs: 4,
              s: 0,
              children: [(0, N.jsx)("div", {
                onClick: () => f("XSAfterRainbow"),
                children: (0, N.jsx)("div", {
                  className: eo,
                  children: (0, N.jsx)(z.F, {
                    ...e
                  })
                })
              }), (0, N.jsx)(v.X, {
                default: 40,
                xs: 24,
                s: 24
              })]
            }, e.id))), y && !p && !x && (0, N.jsx)(Bi, {}), !g && (0, N.jsx)(N.Fragment, {
              children: i == null ? undefined : i.map(e => (0, N.jsxs)(q.C, {
                xs: 0,
                s: 8,
                m: 12,
                l: 12,
                children: [(0, N.jsx)("div", {
                  className: eo,
                  children: (0, N.jsx)(z.F, {
                    ...e
                  })
                }), (0, N.jsx)(v.X, {
                  default: 40,
                  xs: 24,
                  s: 24
                })]
              }, e.id))
            }), (0, N.jsx)(yi.m, {
              spacingBottom: (0, N.jsx)(v.X, {
                default: 40,
                xs: 24,
                s: 24
              })
            }), (0, N.jsxs)(U.J, {
              children: [y && (0, N.jsxs)(q.C, {
                xs: 4,
                s: 8,
                m: 6,
                l: 4,
                flexibleContent: true,
                children: [!!m && (0, N.jsx)(Ve, {}), (0, N.jsx)(v.X, {
                  default: 24,
                  gteS: 32
                })]
              }), (0, N.jsxs)(q.C, {
                xs: 4,
                s: 8,
                m: 6,
                l: 4,
                flexibleContent: true,
                children: [(0, N.jsx)(Ge, {
                  items: n,
                  title: e[fl],
                  href: j
                }), (0, N.jsx)(v.X, {
                  default: 24,
                  gteS: 32,
                  gteM: 40
                })]
              }), (0, N.jsxs)(q.C, {
                xs: 4,
                s: 0,
                children: [(0, N.jsx)(X.z, {
                  default: 24,
                  children: l == null ? undefined : l.map(e => (0, N.jsx)("div", {
                    onClick: () => f("XSAfterNews"),
                    className: eo,
                    children: (0, N.jsx)(z.F, {
                      ...e
                    })
                  }, e.id))
                }), (0, N.jsx)(v.X, {
                  default: 24,
                  gteS: 32
                })]
              }), (0, N.jsxs)(q.C, {
                xs: 4,
                s: 8,
                m: 6,
                l: 4,
                flexibleContent: true,
                children: [(0, N.jsx)(Ge, {
                  items: a,
                  title: e[_l],
                  href: "/articles",
                  isArticle: true
                }), (0, N.jsx)(v.X, {
                  default: 24,
                  gteS: 32,
                  gteM: 40
                })]
              }), !y && (0, N.jsxs)(q.C, {
                xs: 4,
                s: 8,
                m: 6,
                l: 4,
                flexibleContent: true,
                children: [m ? (0, N.jsx)(Ve, {}) : (0, N.jsx)(Ho, {}), (0, N.jsx)(v.X, {
                  default: 24,
                  gteS: 32,
                  gteM: 40
                })]
              }), b && (0, N.jsxs)(q.C, {
                xs: 4,
                s: 8,
                m: 12,
                l: 8,
                flexibleContent: true,
                children: [(0, N.jsx)(xi, {}), (0, N.jsx)(v.X, {
                  default: 24,
                  gteS: 32,
                  gteM: 40
                })]
              }), !y && (0, N.jsxs)(q.C, {
                xs: 4,
                s: 8,
                m: 6,
                l: 4,
                flexibleContent: true,
                children: [(0, N.jsx)(Us, {
                  title: e[Sl],
                  items: s
                }), (0, N.jsx)(v.X, {
                  default: 32,
                  gteS: 32,
                  gteM: 40
                })]
              }), !b && (0, N.jsxs)(q.C, {
                xs: 4,
                s: 8,
                m: 12,
                l: 8,
                flexibleContent: true,
                children: [(0, N.jsx)(xi, {}), (0, N.jsx)(v.X, {
                  default: 24,
                  gteS: 32,
                  gteM: 40
                })]
              }), (0, N.jsxs)(q.C, {
                xs: 4,
                s: 0,
                children: [(0, N.jsx)(X.z, {
                  default: 24,
                  children: c == null ? undefined : c.map(e => (0, N.jsx)("div", {
                    onClick: () => f("XSBottom"),
                    className: eo,
                    children: (0, N.jsx)(z.F, {
                      ...e
                    })
                  }, e.id))
                }), (0, N.jsx)(v.X, {
                  default: 24
                })]
              })]
            })]
          }), (h || x) && (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(O.Z, {}), (0, N.jsx)(v.X, {
              default: 24,
              gteS: 32,
              gteM: 40
            })]
          }), !g && (0, N.jsx)(H.M, {
            children: (0, N.jsxs)(U.J, {
              children: [(0, N.jsx)(q.C, {
                xs: 0,
                s: 0,
                m: 0,
                l: 1
              }), (0, N.jsxs)(q.C, {
                xs: 0,
                s: 8,
                m: 12,
                l: 10,
                children: [(0, N.jsx)(jl, {}), (0, N.jsx)(v.X, {
                  default: 24,
                  gteS: 32,
                  gteM: 40
                })]
              }), (0, N.jsx)(q.C, {
                xs: 0,
                s: 0,
                m: 0,
                l: 1
              })]
            })
          }), (0, N.jsx)(qs, {}), (0, N.jsx)(wi, {
            isOpen: C,
            setIsOpen: k
          })]
        })
      });
    };
    Cl.displayName = "components/IndexPageAnonymous/index/IndexAnonymous";
    const kl = (0, f.x)(Cl);
    var wl = a(997543);
    var Nl = a(848484);
    var El = a(701416);
    var Al = a.n(El);
    const Rl = "banner--StYMsQ_iBCEqDVuF";
    const Pl = "banner-container--ZjeboRlc1zo7vOm6";
    const Tl = "banner-app-icon--iz3TBgc9ASE33tTY";
    const Il = "mobile.appBanner.title";
    const Ll = "mobile.appBanner.title.no.domain";
    const Wl = {
      ios: "mobile.app.smartbanner.text.anchor.ios",
      android: "mobile.app.smartbanner.text.anchor.android",
      winphone: "mobile.app.smartbanner.text.anchor.winphone",
      huawei: "mobile.app.smartbanner.text.anchor.huawei"
    };
    const Bl = ({
      trls: e,
      spacingBottom: n
    }) => {
      const a = (0, _.v)(e => e.appLink);
      const t = (0, _.v)(e => e.device);
      const s = (0, go.i)();
      const i = (0, Ai.j)({
        from: "main_banner"
      });
      const {
        isXS: r
      } = (0, F.G)();
      const o = () => {
        Ei()({
          hhtmSourceLabel: "middle"
        });
      };
      if (a.detected) {
        if (s) {
          if (r) {
            return (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(u.SPALink, {
                suppressHydrationWarning: true,
                to: i,
                className: Pl,
                "data-qa": "app-banner",
                onClick: o,
                target: "_blank",
                children: (0, N.jsx)(Y.Z, {
                  borderRadius: 16,
                  padding: 16,
                  stretched: true,
                  borderWidth: "default",
                  children: (0, N.jsxs)(Fe.b, {
                    right: (0, N.jsx)("span", {
                      className: Tl
                    }),
                    children: [(0, N.jsx)(qe.j, {
                      children: e[Ll]
                    }), !!t.type && (0, N.jsx)(qe.j, {
                      style: "accent",
                      "data-qa": "app-banner-storelink",
                      children: e[Wl[t.type]]
                    })]
                  })
                })
              }), n]
            });
          } else {
            return null;
          }
        } else {
          return (0, N.jsx)(Oa(), {
            xs: "4",
            s: "0",
            m: "0",
            l: "0",
            children: (0, N.jsx)(Al(), {
              top: true,
              children: (0, N.jsxs)(u.SPALink, {
                to: i,
                className: ge()("app-banner", Rl),
                "data-qa": "app-banner",
                onClick: o,
                children: [(0, N.jsxs)("div", {
                  children: [(0, N.jsx)("div", {
                    className: "app-banner-title",
                    children: (0, N.jsx)(oo.H4Section, {
                      children: e[Il]
                    })
                  }), !!t.type && (0, N.jsx)("span", {
                    "data-qa": "app-banner-storelink",
                    children: e[Wl[t.type]]
                  })]
                }), (0, N.jsx)("span", {
                  className: ge()("app-banner-icon", {
                    [`app-banner-icon_${a.type}`]: a.type
                  }),
                  "data-qa": "app-banner-img"
                })]
              })
            })
          });
        }
      } else {
        return null;
      }
    };
    Bl.displayName = "components/AppBanner/index/AppBanner";
    const Ml = (0, f.x)(Bl);
    var Vl = a(618981);
    var Dl = a(963252);
    var Fl = a(144368);
    const Hl = e => m().sendHHEventButtonClick("faq_item", {
      item: e
    });
    const ql = (e, n) => m().sendHHEventElementShown(e, {
      name: "faq_items",
      item: n
    });
    const Ul = "faq-wrapper--fXFkYPs10Kk83jCn";
    const Xl = "faq-wrapper-vertical--GY8qHmCevcI376mE";
    const zl = "faq-card-wrapper--MNFbCE9BKqgdpEMQ";
    const Ol = "faq-card-wrapper-bottomsheet--xusgQvkJT50y0twn";
    const Zl = "faq-card-content--SVdNvifOE9c10BYj";
    const Yl = "faq-employer-content--LVf1rabU9czzokmW";
    const Gl = "spacer--UJvBMVv3Fk8ItBcJ";
    const $l = "faq.card.time.count";
    const Ql = "plurals.minutes.one";
    const Jl = "plurals.minutes.some";
    const Kl = "plurals.minutes.many";
    const ec = ({
      trls: e,
      item: n,
      isBottomSheetItem: a = false,
      isMagritte: t = false,
      isAnalyticsEnabled: s = true,
      maxLines: i
    }) => {
      const {
        href: r,
        topic: o,
        tag: l,
        time: c
      } = n;
      if (t) {
        return (0, N.jsx)("div", {
          className: ge()(zl, {
            [Ol]: a
          }),
          children: (0, N.jsx)(Y.Z, {
            Element: u.SPALink,
            to: r,
            borderWidth: "default",
            padding: 24,
            borderRadius: 24,
            stretched: true,
            verticalStretched: true,
            onClick: s ? () => Hl(o) : undefined,
            children: (0, N.jsxs)("div", {
              className: Zl,
              children: [(0, N.jsxs)("div", {
                children: [!!l && (0, N.jsx)(Fl.V, {
                  children: l
                }), (0, N.jsx)(v.X, {
                  default: 16
                }), (0, N.jsx)(j.x, {
                  maxLines: i,
                  typography: "paragraph-1-regular",
                  children: o
                })]
              }), a && (0, N.jsx)(v.X, {
                default: 24
              }), !!c && (0, N.jsx)(j.x, {
                typography: "label-3-regular",
                style: "secondary",
                children: (0, N.jsx)(Zn.q, {
                  one: e[Ql],
                  some: e[Jl],
                  many: e[Kl],
                  value: c,
                  hasValue: false,
                  format: n => (0, Z.WU)(e[$l], {
                    "{0}": `${c} ${n}`
                  })
                })
              })]
            })
          })
        }, r);
      } else {
        return (0, N.jsx)("div", {
          "data-qa": "faq-item",
          className: ge()("multiple-column-list-item", "multiple-column-list-item_redesigned"),
          children: (0, N.jsx)(Ue.r, {
            "data-qa": "faq-item-link",
            href: r,
            style: "neutral",
            onClick: s ? () => Hl(o) : undefined,
            typography: "label-2-regular",
            inline: true,
            children: (0, N.jsx)(j.x, {
              "data-qa": "faq-item-text",
              maxLines: i,
              children: o
            })
          })
        }, r);
      }
    };
    ec.displayName = "components/FAQ/FAQItem/FAQItemComponent";
    const nc = (0, f.x)(ec);
    const ac = "index.headers.FAQ";
    const tc = "index.blog.showMore";
    const sc = "employer_main_page_analytics_enabled";
    const ic = {
      [Ke.Uo.XS]: 3,
      [Ke.Uo.M]: 6
    };
    const rc = ({
      trls: e,
      items: n,
      spacingBottom: a,
      isApplicant: s,
      maxCount: i,
      verticalStretched: r,
      isVacanciesWidgetExp: o
    }) => {
      const l = (0, Dl.n)(sc);
      const c = (0, t.useRef)(null);
      const {
        breakpoint: d
      } = (0, F.G)();
      const m = (0, xt.kQ)();
      (0, t.useEffect)(() => {
        if (l && n != null && n.length && c.current) {
          const {
            stopSpying: e
          } = ql(c.current, n.map(e => e.topic));
          return e;
        }
      }, [l, n]);
      if (s) {
        const t = ic[d] || 4;
        return (0, N.jsxs)("div", {
          children: [(0, N.jsx)(g.D, {
            Element: "h3",
            size: "medium",
            alignment: "left",
            children: e[ac]
          }), (0, N.jsx)(v.X, {
            default: 16
          }), (0, N.jsx)(an.Z, {
            renderPreview: () => (0, N.jsx)("div", {
              className: Ul,
              children: n.slice(0, t).map(e => (0, N.jsx)(nc, {
                isAnalyticsEnabled: l,
                isMagritte: true,
                item: e
              }, e.href))
            }),
            renderRest: () => (0, N.jsx)("div", {
              className: Ul,
              children: n.slice(t).map(e => (0, N.jsx)(nc, {
                isAnalyticsEnabled: l,
                isMagritte: true,
                item: e
              }, e.href))
            }),
            needToExpand: n.length > t,
            restSpacing: (0, N.jsx)(v.X, {
              default: 24
            }),
            renderBottomSheetContent: () => (0, N.jsx)("div", {
              className: Xl,
              children: n.map(e => (0, N.jsx)(nc, {
                isAnalyticsEnabled: l,
                isMagritte: true,
                item: e,
                isBottomSheetItem: true
              }, e.href))
            }),
            bottomSheetTitle: e[ac]
          }), a]
        });
      }
      const p = m ? (0, N.jsx)(Ue.r, {
        "data-qa": "faq-show-more-link",
        Element: u.SPALink,
        to: "https://feedback.hh.ru/",
        typography: "label-2-regular",
        style: "accent",
        children: e[tc]
      }) : null;
      if (o) {
        return (0, N.jsxs)("div", {
          className: Yl,
          "data-qa": "faq-block",
          children: [(0, N.jsx)("div", {
            ref: c,
            children: (i ? n.slice(0, i) : n).map(e => (0, N.jsx)(nc, {
              maxLines: 1,
              isAnalyticsEnabled: l,
              item: e,
              isBottomSheetItem: true
            }, e.href))
          }), (0, N.jsx)(v.X, {
            default: 24
          }), (0, N.jsx)("div", {
            className: Gl
          }), p]
        });
      } else {
        return (0, N.jsx)(Y.Z, {
          "data-qa": "faq-block",
          verticalStretched: r,
          borderWidth: "default",
          padding: 24,
          borderRadius: 24,
          stretched: true,
          children: (0, N.jsxs)("div", {
            className: Yl,
            children: [(0, N.jsxs)("div", {
              children: [(0, N.jsx)(g.D, {
                Element: "h2",
                size: "small",
                "data-qa": "faq-title",
                children: e[ac]
              }), (0, N.jsx)(v.X, {
                default: 24
              }), (0, N.jsx)("div", {
                ref: c,
                children: (i ? n.slice(0, i) : n).map(e => (0, N.jsx)(nc, {
                  maxLines: 2,
                  isAnalyticsEnabled: l,
                  item: e,
                  isBottomSheetItem: true
                }, e.href))
              })]
            }), p]
          })
        });
      }
    };
    rc.displayName = "components/FAQ/index/FAQ";
    const oc = (0, f.x)(rc);
    var lc = a(558774);
    var cc = a(34555);
    var dc = a(580356);
    var mc = a(32588);
    const pc = "rsvUserCompetenciesModal.title";
    const uc = "rsvUserCompetenciesModal.content";
    const hc = "rsvUserCompetenciesModal.close";
    const xc = "rsvUserCompetenciesModal.add";
    const yc = ({
      trls: e
    }) => {
      const n = (0, _.v)(({
        hhidAccount: e
      }) => e);
      const a = (0, xn.useDispatch)();
      const s = (0, u.usePush)();
      const i = (0, t.useRef)(null);
      const r = () => {
        m().sendHHEventButtonClick("rsv_user_competencies_close");
        a((0, mc.pi)(false));
        s("/");
      };
      (0, t.useEffect)(() => {
        if (i.current) {
          m().sendHHEvent("element_shown", {
            elementName: "rsv_user_competencies_modal"
          });
        }
      }, []);
      return (0, N.jsx)(dc.bZ, {
        visible: true,
        layout: "vertical",
        icon: (0, N.jsx)(en.uvJ, {}),
        title: n ? `${n.firstName} ${n.lastName}, ${e[pc]}` : e[pc],
        description: e[uc],
        buttons: (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)(y.z, {
            Element: u.SPALink,
            mode: "primary",
            style: "accent",
            to: "/rsv_user_competencies/check_token",
            onClick: () => m().sendHHEventButtonClick("rsv_user_competencies_add"),
            children: e[xc]
          }), (0, N.jsx)(y.z, {
            mode: "secondary",
            style: "accent",
            onClick: r,
            children: e[hc]
          })]
        }),
        onClose: r
      });
    };
    yc.displayName = "components/RsvUserCompetencies/RsvUserCompetenciesModal/RsvUserCompetenciesModalComponent";
    const gc = (0, f.x)(yc);
    const vc = "rsvUserCompetenciesNotification.error";
    const bc = "rsvApplicantSnackbar.fail.title";
    const jc = "rsvApplicantSnackbar.fail.support";
    const fc = ({
      trls: e
    }) => {
      const [n, a] = (0, t.useState)("");
      const s = (0, u.usePush)();
      const i = (0, Se.Xl)();
      (0, t.useEffect)(() => {
        var n;
        const t = new URLSearchParams((n = window) === null || n === undefined ? undefined : n.location.search);
        const s = t.get("fail");
        const i = t.get("error");
        if (s) {
          a(i === "alreadyBound" ? e[bc] : e[vc]);
        }
      }, [e]);
      if (n) {
        return (0, N.jsx)(wl.A, {
          addon: (0, N.jsx)(en.L1_, {
            initialColor: "negative"
          }),
          actionLabel: e[jc],
          onAction: () => {
            s(i ? "https://feedback.hh.ru/" : "/feedback");
          },
          children: n
        });
      } else {
        return null;
      }
    };
    fc.displayName = "components/RsvUserCompetencies/RsvUserCompetenciesNotificationError/RsvUserCompetenciesNotificationError";
    const _c = (0, f.x)(fc);
    var Sc = a(311491);
    var Cc = a(431170);
    var kc = a(483465);
    var wc = a(483004);
    var Nc = a(247770);
    var Ec = a(586816);
    var Ac = a(696397);
    const Rc = "wrapper--rUCwVc7eHEcuxw3C";
    const Pc = "applied-button--d8Hk6D0F_lkeu3UO";
    const Tc = "info--Wg6j90DJvEMj0Cry";
    const Ic = "response-buttons--WjKbqO6SwmM6kedV";
    const Lc = "vacancy.of.the.day.response";
    const Wc = "vacancy.of.the.day.applied";
    const Bc = ({
      vacancy: e,
      sourceQueryParam: n,
      hhtmFromLabel: a,
      isRecommended: s = false,
      setVacancyRef: i,
      trls: r,
      topics: o
    }) => {
      const c = (0, _.v)(e => e.analyticsParams.hhtmSource);
      const d = (0, t.useRef)(null);
      const p = (0, t.useRef)(null);
      const h = (0, Dn.X)(d);
      const x = (0, Dn.X)(p);
      const g = (0, t.useRef)(null);
      const b = (0, zs.B)(g, i);
      const {
        vacancyId: f,
        company: S,
        showContact: C,
        allowChatWithManager: k
      } = e;
      const {
        isXS: w
      } = (0, F.G)();
      const E = (0, t.useContext)(Sc.KD)?.openChatik;
      const A = (0, go.i)();
      const R = (0, _.v)(e => e.userLabelsForVacancies);
      if (A) {
        return (0, N.jsx)(Y.Z, {
          borderWidth: "default",
          padding: 12,
          borderRadius: 24,
          stretched: true,
          verticalStretched: true,
          children: (0, N.jsxs)("div", {
            className: Rc,
            children: [(0, N.jsxs)("div", {
              className: Tc,
              children: [(0, N.jsxs)(Ue.r, {
                style: "neutral",
                Element: u.SPALink,
                to: (0, Jn.e$)(e, Pn.mV.MainPageBottom, s),
                target: "_blank",
                additionalQueryParams: {
                  source: n,
                  from: c,
                  hhtmFromLabel: a
                },
                onClick: () => na(e.vacancyId, "vacancy_of_the_day"),
                children: [(0, N.jsx)("div", {
                  ref: b,
                  id: String(f),
                  children: (0, N.jsx)(j.x, {
                    typography: "label-2-regular",
                    "data-qa": "vacancy_of_the_day_title",
                    maxLines: 2,
                    children: (0, N.jsx)("div", {
                      ref: d,
                      children: e.name
                    })
                  })
                }), h && (0, N.jsx)(In.p, {
                  placement: "top-center",
                  activatorRef: g,
                  children: e.name
                }), (0, N.jsx)(v.X, {
                  default: 8
                }), (0, N.jsx)(j.x, {
                  typography: "subtitle-1-semibold",
                  "data-qa": "vacancy_of_the_day_compensation",
                  children: (0, N.jsx)(on.Z, {
                    ...e.compensation,
                    analyticsContext: "VacancyOfTheDay1",
                    showNoSalaryMessage: true
                  })
                })]
              }), (0, N.jsxs)(N.Fragment, {
                children: [(0, N.jsx)(v.X, {
                  default: 24
                }), (0, N.jsx)(Ue.r, {
                  style: "neutral",
                  Element: u.SPALink,
                  to: dn(e),
                  target: "_blank",
                  children: (0, N.jsx)(Fe.b, {
                    left: (0, N.jsx)(He.q, {
                      shapeCircle: true,
                      size: 40,
                      mode: "image",
                      image: e.company.logoUrl || "",
                      placeholder: "city",
                      "aria-label": ""
                    }),
                    "data-qa": "vacancy_of_the_day_company",
                    children: (0, N.jsxs)(qe.j, {
                      maxLines: 1,
                      children: [(0, N.jsx)("div", {
                        ref: p,
                        children: e.company.visibleName
                      }), x && (0, N.jsx)(In.p, {
                        placement: "top-center",
                        activatorRef: p,
                        children: e.company.visibleName
                      })]
                    })
                  })
                })]
              })]
            }), (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(v.X, {
                default: 12
              }), (0, N.jsx)("div", {
                className: Ic,
                children: o || R[e.vacancyId] && R[e.vacancyId].some(e => ["RESPONSE", "INVITE", "DISCARD"].includes(e)) ? (0, N.jsxs)(N.Fragment, {
                  children: [(0, N.jsx)(y.z, {
                    mode: "secondary",
                    size: "small",
                    style: "accent",
                    disabled: true,
                    stretched: true,
                    children: (0, N.jsxs)("span", {
                      className: Pc,
                      children: [(0, N.jsx)(en.$K7, {
                        initialColor: "secondary"
                      }), r[Wc]]
                    })
                  }), o && o[0]?.lastState !== "RESPONSE" && (0, N.jsx)(y.z, {
                    mode: "secondary",
                    size: "small",
                    style: "accent",
                    hideLabel: true,
                    icon: (0, N.jsx)(en.I9U, {}),
                    "aria-label": "open-chat",
                    onClick: () => {
                      m().sendHHEventButtonClick("contactChat", {
                        withResponse: false
                      });
                      if (E != null) {
                        E({
                          chatId: o[0]?.chatId,
                          view: "compact"
                        });
                      }
                    }
                  })]
                }) : (0, N.jsxs)(N.Fragment, {
                  children: [(0, N.jsx)(Cc.ZP, {
                    vacancyId: e.vacancyId,
                    employerId: S.id,
                    render: n => (0, N.jsx)(y.z, {
                      mode: "primary",
                      size: "small",
                      style: "accent",
                      Element: u.SPALink,
                      to: `/applicant/vacancy_response?vacancyId=${e.vacancyId}&employerId=${S.id}`,
                      "data-qa": "vacancy-response-link-top-again",
                      onClick: n,
                      stretched: true,
                      children: r[Lc]
                    }),
                    place: "vacancy_top_button"
                  }), C && (0, N.jsx)(Ec.Z, {
                    showContact: true,
                    allowChatWithoutResponse: k,
                    vacancyId: f,
                    employerId: S.id,
                    companyName: S.visibleName,
                    chatWritePossibility: e.chatWritePossibility,
                    magritteButtonSize: "small"
                  })]
                })
              }), (0, N.jsx)(kc.Z, {
                vacancyId: e.vacancyId,
                vacancySource: Ac.H.VacanciesOfTheDay,
                isXs: w
              }), (0, N.jsx)(Nc.t, {
                vacancyId: e.vacancyId
              }), (0, N.jsx)(wc.z, {
                vacancyId: e.vacancyId
              })]
            })]
          })
        });
      } else {
        return (0, N.jsxs)("div", {
          className: "vacancy-of-the-day",
          children: [(0, N.jsxs)(co(), {
            kind: lo.LinkKind.Tertiary,
            Element: u.SPALink,
            to: (0, Jn.e$)(e, Pn.mV.MainPageBottom, s),
            additionalQueryParams: {
              source: n,
              from: c,
              hhtmFromLabel: a
            },
            target: "_blank",
            onClick: () => na(e.vacancyId, "vacancy_of_the_day"),
            children: [(0, N.jsx)("span", {
              className: "vacancy-of-the-day__title",
              "data-qa": "vacancy_of_the_day_title",
              id: String(f),
              ref: i,
              children: e.name
            }), (0, N.jsx)("span", {
              className: "vacancy-of-the-day__salary",
              "data-qa": "vacancy_of_the_day_compensation",
              children: (0, N.jsx)(on.Z, {
                ...e.compensation,
                translateMode: true,
                analyticsContext: "VacancyOfTheDay2",
                showNoSalaryMessage: true
              })
            })]
          }), e.company.id && (0, N.jsx)("span", {
            className: "vacancy-of-the-day__company",
            "data-qa": "vacancy_of_the_day_company",
            children: (0, N.jsx)(Uo, {
              vacancy: e,
              children: `${e.company.visibleName}, ${e.area.name}`
            })
          })]
        });
      }
    };
    Bc.displayName = "components/VacancyOfTheDay/index/VacancyOfTheDay";
    const Mc = (0, f.x)(Bc);
    const Vc = "wrapper--SR6MvJ9nLpQacYsY";
    const Dc = "wrapper-vertical--wnngHeZZwIQDDawm";
    const Fc = "item--wmtF_NUlAIjUbh4r";
    const Hc = "index.vacancies";
    const qc = "wic-vod.in";
    const Uc = "index.headers.vod";
    const Xc = {
      [Ke.Uo.XS]: Infinity,
      [Ke.Uo.S]: 4,
      [Ke.Uo.M]: 6,
      [Ke.Uo.L]: 9
    };
    const zc = ({
      trls: e,
      userType: n,
      spacingBottom: a
    }) => {
      const t = (0, _.v)(e => e.vacanciesOfTheDay);
      const s = (0, _.v)(e => e.domainRegionTrl);
      const i = (0, _.v)(e => e.locale);
      const {
        breakpoint: r
      } = (0, F.G)();
      const o = (0, go.i)();
      const l = (0, Qn.B)(t.vacancies, Pn.mV.MainPageBottom);
      if (!t.success || t.vacancies.length <= 5) {
        return null;
      }
      const c = i.areaId !== Mo.Qt || !!i.isSeoDomain;
      if (o) {
        const n = (e, n) => (0, N.jsx)("div", {
          className: n,
          children: (0, N.jsx)(Mc, {
            topics: t.topicsByVacancyId[e.vacancyId],
            vacancy: e,
            sourceQueryParam: "vacancies_of_the_day",
            hhtmFromLabel: "vacancies_of_the_day",
            setVacancyRef: l
          })
        }, e.vacancyId);
        const i = Xc[r] || 8;
        return (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)(g.D, {
            Element: "h3",
            size: "medium",
            children: (0, Z.WU)(e[Hc], {
              "{0}": c ? e[qc] : "",
              "{1}": c ? s : ""
            })
          }), (0, N.jsx)(v.X, {
            default: 16,
            gteS: 20,
            gteM: 24
          }), (0, N.jsx)(an.Z, {
            renderPreview: () => (0, N.jsx)("div", {
              className: Vc,
              children: t.vacancies.slice(0, i).map(e => n(e, Fc))
            }),
            renderRest: () => (0, N.jsx)("div", {
              className: Vc,
              children: t.vacancies.slice(i).map(e => n(e, Fc))
            }),
            restSpacing: (0, N.jsx)(v.X, {
              default: 24
            }),
            needToExpand: t.vacancies.length > i,
            renderBottomSheetContent: () => (0, N.jsx)("div", {
              className: Dc,
              children: t.vacancies.map(e => n(e))
            }),
            bottomSheetTitle: e[Uc],
            bottomSheetSubtitle: `${e[qc]} ${s}`
          }), a]
        });
      }
      return (0, N.jsxs)("div", {
        className: `vacancies-of-the-day-${n}`,
        children: [(0, N.jsxs)(Al(), {
          top: true,
          children: [(0, N.jsx)(oo.H2, {
            Element: "h1",
            children: (0, Z.WU)(e[Hc], {
              "{0}": c ? e[qc] : "",
              "{1}": c ? s : ""
            })
          }), (0, N.jsx)(ls(), {
            base: 4
          })]
        }), (0, N.jsx)("div", {
          className: "vacancies-of-the-day",
          children: t.vacancies.map(e => (0, N.jsx)("div", {
            className: "vacancies-of-the-day__item",
            children: (0, N.jsx)(Mc, {
              vacancy: e,
              sourceQueryParam: "vacancies_of_the_day",
              hhtmFromLabel: "vacancies_of_the_day",
              setVacancyRef: l
            })
          }, e.vacancyId))
        })]
      });
    };
    zc.displayName = "components/VacanciesOfTheDay/index/VacanciesOfTheDay";
    const Oc = (0, f.x)(zc);
    var Zc = a(973881);
    var Yc = a(285666);
    const Gc = [14, 24];
    const $c = () => {
      const e = (() => {
        const e = (0, _.v)(e => {
          var n;
          if ((n = e.applicantProfile) === null || n === undefined || (n = n.fields) === null || n === undefined || (n = n.birthday) === null || n === undefined || (n = n[0]) === null || n === undefined) {
            return undefined;
          } else {
            return n.date;
          }
        });
        if (e) {
          return (0, Yc.Z)(e, "yyyy-MM-dd", new Date());
        } else {
          return null;
        }
      })();
      if (e) {
        return (0, Zc.Z)(new Date(), e);
      } else {
        return null;
      }
    };
    const Qc = () => ((e, n) => {
      const a = $c();
      return !!Number.isFinite(a) && a >= Math.abs(n - e);
    })(...Gc);
    var Jc = a(268155);
    const Kc = "applicant.settings.phone.new.success";
    const ed = ({
      trls: e,
      phoneNumber: n
    }) => (0, N.jsx)(N.Fragment, {
      children: (0, Z.WU)(e[Kc], {
        "{formattedPhone}": n
      })
    });
    ed.displayName = "components/IndexPageApplicant/AddAuthPhoneSuccess/AddAuthPhoneSuccess";
    const nd = {
      Element: (0, f.x)(ed),
      kind: "ok",
      autoClose: true,
      autoCloseDelay: 30000
    };
    var ad = a(960616);
    var td = a(753921);
    var sd = a(102471);
    var id = a.n(sd);
    var rd = a(553412);
    var od = a.n(rd);
    var ld = a(746769);
    var cd = a.n(ld);
    var dd = a(820408);
    var md = a(416883);
    const pd = "chips-container--ryvFtpsgoAurnB8t";
    const ud = e => `/resume/${e}`;
    const hd = {
      on: "autoresponse.informer.button.on",
      create: "autoresponse.informer.button.create",
      add: "autoresponse.informer.button.add",
      fix: "autoresponse.informer.button.fix"
    };
    const xd = ({
      trls: e,
      onSelectResume: n
    }) => {
      const {
        isMobile: a
      } = (0, F.G)();
      const s = (0, _.v)(e => e.applicantResumes);
      const i = (0, t.useMemo)(() => (0, md.Pp)(s), [s]);
      const r = e => {
        let a = "turn_on";
        if (e.accessType && !md.YF.includes(e.accessType[0].string)) {
          a = "change_visibility";
        }
        if (i.length > 1) {
          a = "resume_titles";
          if (e.accessType && !md.YF.includes(e.accessType[0].string)) {
            a = "change_visibility_titles";
          }
        }
        od()({
          entryType: a,
          resumeId: e._attributes.hash,
          autoResponseCount: null
        });
        n(e);
      };
      if (s.length === 1 || i.length === 1) {
        const n = i.length ? i[0] : s[0];
        const a = n._attributes.status;
        const t = n._attributes.hash;
        if (md.XK.includes(a)) {
          return (0, N.jsx)(d.ElementShownAnchor, {
            fn: cd(),
            autoResponseCount: null,
            resumeId: n._attributes.hash,
            entryType: n.accessType && md.YF.includes(n.accessType[0].string) ? "turn_on" : "change_visibility",
            children: (0, N.jsx)(y.z, {
              mode: "secondary",
              style: "accent",
              stretched: true,
              onClick: () => r(n),
              children: e[hd.on]
            })
          });
        }
        if (md.yf.includes(a)) {
          return (0, N.jsx)(d.ElementShownAnchor, {
            fn: cd(),
            autoResponseCount: null,
            resumeId: t,
            entryType: "resume_completion",
            children: (0, N.jsx)(y.z, {
              mode: "secondary",
              style: "accent",
              Element: "a",
              stretched: true,
              href: ud(t),
              onClick: () => od()({
                entryType: "resume_completion",
                resumeId: t
              }),
              children: e[hd.add]
            })
          });
        }
        if (md.Gn.includes(a)) {
          return (0, N.jsx)(d.ElementShownAnchor, {
            fn: cd(),
            autoResponseCount: null,
            resumeId: t,
            entryType: "resume_blocked",
            children: (0, N.jsx)(y.z, {
              mode: "secondary",
              style: "accent",
              Element: "a",
              stretched: true,
              href: ud(t),
              onClick: () => od()({
                entryType: "resume_blocked",
                resumeId: t
              }),
              children: e[hd.fix]
            })
          });
        }
      }
      if (!i.length && s.length > 1) {
        const n = s.find(e => md.yf.includes(e._attributes.status));
        const a = s.find(e => md.Gn.includes(e._attributes.status));
        if (a) {
          return (0, N.jsx)(d.ElementShownAnchor, {
            fn: cd(),
            autoResponseCount: null,
            resumeId: a._attributes.hash,
            entryType: "resume_blocked",
            children: (0, N.jsx)(y.z, {
              mode: "secondary",
              style: "accent",
              Element: "a",
              stretched: true,
              href: ud(a._attributes.hash),
              onClick: () => od()({
                entryType: "resume_blocked",
                resumeId: a._attributes.hash,
                autoResponseCount: null
              }),
              children: e[hd.fix]
            })
          });
        }
        if (n) {
          return (0, N.jsx)(d.ElementShownAnchor, {
            fn: cd(),
            autoResponseCount: null,
            resumeId: n._attributes.hash,
            entryType: "resume_completion",
            children: (0, N.jsx)(y.z, {
              mode: "secondary",
              style: "accent",
              Element: "a",
              stretched: true,
              href: ud(n._attributes.hash),
              onClick: () => od()({
                entryType: "resume_completion",
                resumeId: n._attributes.hash,
                autoResponseCount: null
              }),
              children: e[hd.add]
            })
          });
        }
      }
      if (i.length > 1) {
        const e = i.map(e => (0, N.jsx)(bn.X, {
          onClick: () => r(e),
          style: "accent",
          mode: "primary",
          children: (0, N.jsx)(d.ElementShownAnchor, {
            fn: cd(),
            autoResponseCount: null,
            resumeId: e._attributes.hash,
            entryType: e.accessType && md.YF.includes(e.accessType[0].string) ? "resume_titles" : "change_visibility_titles",
            children: e.title[0].string
          })
        }, e._attributes.hash));
        if (a) {
          return (0, N.jsx)(vn.T, {
            scrollable: true,
            noWrap: true,
            children: e
          });
        } else {
          return (0, N.jsx)("div", {
            className: pd,
            children: e
          });
        }
      }
      return (0, N.jsx)(d.ElementShownAnchor, {
        fn: cd(),
        autoResponseCount: null,
        entryType: "resume_creation",
        children: (0, N.jsx)(y.z, {
          mode: "secondary",
          style: "accent",
          Element: "a",
          stretched: true,
          href: md.jk,
          onClick: () => od()({
            entryType: "resume_creation",
            autoResponseCount: null
          }),
          children: e[hd.create]
        })
      });
    };
    xd.displayName = "Autoresponse/ResumeSelector/index/ResumeSelectorComponent";
    const yd = (0, Bs.Z)(xd);
    var gd = a(486039);
    const vd = "title--UZXRLjyRF4wPaKx0";
    const bd = "title-with-counter--wMNRqE4ax8P0Mjnd";
    const jd = "controls--tMp95frqWe07tb_r";
    const fd = {
      title: "autoresponse.informer.title",
      subtitle: "autoresponse.informer.subtitle",
      subtitleActive: {
        one: "autoresponse.informer.subtitle.active.one",
        some: "autoresponse.informer.subtitle.active.some",
        many: "autoresponse.informer.subtitle.active.many"
      },
      subtitleInactive: "autoresponse.informer.subtitle.inactive",
      counter: {
        one: "autoresponse.informer.title.response.count.one",
        some: "autoresponse.informer.title.response.count.some",
        many: "autoresponse.informer.title.response.count.many"
      },
      buttons: {
        on: "autoresponse.informer.button.on",
        off: "autoresponse.informer.button.off",
        settings: "autoresponse.informer.button.settings"
      }
    };
    const _d = ({
      trls: e
    }) => {
      const {
        isMobile: s
      } = (0, F.G)();
      const {
        handleSelectResume: i,
        setInfoVisible: r,
        setFiltersVisible: o,
        handleSwitchAutoresponseEnabled: l,
        isLoading: c
      } = (0, gd.W)();
      const m = (0, _.v)(e => e.applicantAutoresponseRules[0]);
      const p = (0, _.v)(e => e.applicantAutoresponseStatistics);
      const u = !!m.autoResponseId;
      const h = (0, d.useElementShown)(cd(), {
        autoResponseCount: p == null ? undefined : p.createdTopicCount,
        resumeId: m.resumeHash,
        entryType: m.enabled ? "auto_response" : "auto_response_off"
      });
      const x = (0, d.useElementShown)(cd(), {
        autoResponseCount: p == null ? undefined : p.createdTopicCount,
        resumeId: m.resumeHash,
        entryType: "auto_response"
      });
      const b = (0, d.useElementShown)(cd(), {
        autoResponseCount: p == null ? undefined : p.createdTopicCount,
        resumeId: m.resumeHash,
        entryType: "auto_response_off"
      });
      return (0, N.jsxs)(Y.Z, {
        borderRadius: 24,
        padding: s ? 0 : 24,
        borderWidth: s ? "none" : "default",
        stretched: true,
        children: [!u && (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)(g.D, {
            Element: "h3",
            size: "medium",
            description: e[fd.subtitle],
            children: (0, N.jsxs)("div", {
              className: vd,
              children: [e[fd.title], (0, N.jsx)(en.yM4, {
                initialColor: "secondary",
                onClick: () => {
                  r(true);
                  id()({});
                }
              })]
            })
          }), (0, N.jsx)(v.X, {
            default: 12,
            gteS: 24
          }), (0, N.jsx)(yd, {
            onSelectResume: i
          })]
        }), u && (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)(g.D, {
            Element: "h3",
            size: "medium",
            description: m.enabled ? (0, N.jsx)(Zn.q, {
              zero: e[fd.subtitleActive.many],
              one: e[fd.subtitleActive.one],
              some: e[fd.subtitleActive.some],
              many: e[fd.subtitleActive.many],
              value: p.vacancyFromSearchCount ?? 0,
              hasValue: false,
              format: e => {
                return (0, Z.WU)(e, {
                  "{0}": p.vacancyFromSearchCount ?? 0
                });
              }
            }) : e[fd.subtitleInactive],
            children: (0, N.jsxs)("div", {
              className: ge()(vd, bd),
              children: [e[fd.title], " ", (0, N.jsx)(j.x, {
                style: m.enabled ? "primary" : "secondary",
                typography: s ? "title-4-semibold" : "title-5-semibold",
                children: s ? (0, N.jsx)("span", {
                  children: p.createdTopicCount ?? 0
                }) : (0, N.jsx)(Zn.q, {
                  zero: e[fd.counter.many],
                  one: e[fd.counter.one],
                  some: e[fd.counter.some],
                  many: e[fd.counter.many],
                  hasValue: false,
                  value: p.createdTopicCount ?? 0,
                  format: e => {
                    return (0, Z.WU)(e, {
                      "{0}": p.createdTopicCount ?? 0
                    });
                  }
                })
              })]
            })
          }), (0, N.jsx)(v.X, {
            default: 12,
            gteS: 24
          }), (0, N.jsxs)("div", {
            className: jd,
            children: [(0, N.jsx)(y.z, {
              style: "accent",
              stretched: true,
              mode: "secondary",
              onClick: () => {
                o(true);
                od()({
                  entryType: m.enabled ? "auto_response_settings" : "auto_response_off_settings",
                  autoResponseCount: p ? p.createdTopicCount : null
                });
              },
              ref: h,
              children: e[fd.buttons.settings]
            }), (0, N.jsx)(dd.V, {
              default: 12
            }), m.enabled ? (0, N.jsx)(y.z, {
              stretched: true,
              style: "negative",
              mode: "secondary",
              onClick: () => l(false),
              loading: c,
              ref: x,
              children: e[fd.buttons.off]
            }) : (0, N.jsx)(y.z, {
              stretched: true,
              style: "accent",
              mode: "secondary",
              onClick: () => l(true),
              loading: c,
              ref: b,
              children: e[fd.buttons.on]
            })]
          })]
        })]
      });
    };
    _d.displayName = "Autoresponse/AutoresponseDashboard/index/AutoresponseDashboardComponent";
    const Sd = (0, Bs.Z)(_d);
    var Cd = a(331954);
    var kd = a.n(Cd);
    var wd = a(927633);
    var Nd = a(876366);
    const Ed = "card-content-wrapper--qXQJKVRT4BsuhMbH";
    const Ad = "card-content-wrapper-container--agg4TmJAt0z9t8wq";
    const Rd = "card-description--V32m6SjGwEsGSdXA";
    const Pd = "card-icon-wrapper--XNHbxwPgag0WZZ_l";
    const Td = "card-text-wrapper--OggMfOoXf9Ebe6RM";
    const Id = "card-action--hUBj2zsfDPA3DKVv";
    let Ld = function (e) {
      e.Up = "up";
      e.AutoUpdate = "auto-update";
      e.AddResume = "add-resumes";
      e.KakdelaBanner = "kakdela-banner";
      e.CareerBanner = "career-banner";
      e.AssessmentBanner = "assessment-banner";
      e.YouthVacanciesBanner = "youth-vacancies-banner";
      e.EmployerRating = "employer-rating";
      e.EmployerRatingResult = "employer-rating-result";
      return e;
    }({});
    const Wd = {
      [Ld.Up]: en.L29,
      [Ld.AutoUpdate]: en.PuD,
      [Ld.AddResume]: en.GhD,
      [Ld.KakdelaBanner]: en.HMo,
      [Ld.CareerBanner]: en.sTN,
      [Ld.YouthVacanciesBanner]: en.qDI,
      [Ld.EmployerRating]: Nd.Bs,
      [Ld.EmployerRatingResult]: Nd.Bs,
      [Ld.AssessmentBanner]: en.Qn
    };
    const Bd = ({
      caption: e,
      description: n,
      linkText: a,
      renderIcon: t,
      type: s,
      isDisabled: i,
      onClick: r,
      linkTo: o,
      dataQa: l,
      cardRef: c,
      isButtonLink: d,
      linkDataQa: m,
      target: p
    }) => {
      const {
        isMobile: h
      } = (0, F.G)();
      const x = s ? Wd[s] : undefined;
      const g = {};
      if (o) {
        g.Element = u.SPALink;
        g.to = o;
        g.target = p;
      }
      return (0, N.jsx)("div", {
        className: Ad,
        children: (0, N.jsx)(Y.Z, {
          ...g,
          borderWidth: "default",
          padding: h ? 16 : 24,
          borderRadius: h ? 16 : 24,
          stretched: true,
          onClick: r,
          increaseShadow: true,
          disabled: i,
          children: (() => {
            const i = (e => {
              switch (e) {
                case Ld.CareerBanner:
                  return "special";
                case Ld.YouthVacanciesBanner:
                  return "accent";
                case Ld.EmployerRating:
                case Ld.EmployerRatingResult:
                  return "warning";
                case Ld.AssessmentBanner:
                  return "negative";
                default:
                  return "positive";
              }
            })(s);
            return (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsxs)("div", {
                ref: c,
                "data-qa": l,
                className: Ed,
                children: [(0, N.jsxs)("div", {
                  className: Pd,
                  children: [x && (0, N.jsx)(He.q, {
                    mode: "icon",
                    icon: (0, N.jsx)(x, {
                      initialColor: i
                    }),
                    size: 48,
                    style: `${i}-secondary`,
                    "aria-label": "",
                    shapeCircle: true
                  }), t == null ? undefined : t()]
                }), (0, N.jsxs)("div", {
                  className: Td,
                  children: [(0, N.jsx)(j.x, {
                    typography: "label-2-regular",
                    children: e
                  }), (0, N.jsx)(v.X, {
                    default: 8
                  }), n && (0, N.jsxs)("div", {
                    className: Rd,
                    children: [(0, N.jsx)(j.x, {
                      typography: "label-3-regular",
                      style: "secondary",
                      children: n
                    }), (0, N.jsx)(v.X, {
                      default: 8
                    })]
                  }), h && (0, N.jsx)(j.x, {
                    typography: "label-2-regular",
                    style: "accent",
                    children: a
                  })]
                })]
              }), !h && (d ? (0, N.jsxs)("div", {
                className: Id,
                children: [(0, N.jsx)(v.X, {
                  default: 8
                }), (0, N.jsx)(y.z, {
                  size: "small",
                  mode: "secondary",
                  stretched: true,
                  icon: (0, N.jsx)(fe.tdm, {}),
                  "data-qa": m,
                  children: a
                })]
              }) : (0, N.jsx)(j.x, {
                typography: "label-2-regular",
                style: "accent",
                "data-qa": m,
                children: a
              }))]
            });
          })()
        })
      });
    };
    Bd.displayName = "IndexPageApplicant/Actions/Card/CardComponent";
    const Md = (0, f.x)(Bd);
    const Vd = "assessment.beta.banner.title";
    const Dd = "assessment.beta.banner.buttonText";
    const Fd = ({
      trls: e
    }) => {
      const n = (0, _.Y)(e => e.assessmentBetaBanner.link);
      const a = s().useRef(null);
      if (!n) {
        return null;
      }
      return (0, N.jsx)(Md, {
        dataQa: "applicant-index-nba-action_assessment-banner",
        linkDataQa: "applicant-index-nba-action_assessment-link",
        caption: e[Vd],
        linkText: e[Dd],
        type: Ld.AssessmentBanner,
        onClick: () => {
          if (n) {
            window.open(n, "_blank");
          }
        },
        cardRef: a
      });
    };
    Fd.displayName = "IndexPageApplicant/Actions/AssessmentBetaBanner/AssessmentBetaBannerComponent";
    const Hd = (0, f.x)(Fd);
    var qd = a(474549);
    var Ud = a.n(qd);
    var Xd = a(505685);
    var zd = a.n(Xd);
    const Od = () => {
      const e = (0, _.v)(e => e.careerLink);
      const n = (0, t.useRef)(null);
      (0, t.useEffect)(() => {
        if (e && n.current) {
          return zd()(n.current).stopSpying;
        }
      }, [e]);
      if (e) {
        return (0, N.jsx)(Md, {
          dataQa: "applicant-index-nba-action_career-banner",
          linkDataQa: "applicant-index-nba-action_career-link",
          caption: e.title,
          linkText: e.buttonText,
          type: Ld.CareerBanner,
          onClick: () => {
            if (e) {
              Ud()({
                buttonName: "career_skills_growth"
              });
              window.open(e.buttonUrl, "_blank");
            }
          },
          cardRef: n
        });
      } else {
        return null;
      }
    };
    Od.displayName = "IndexPageApplicant/Actions/CareerBanner/CareerBannerComponent";
    const Zd = (0, f.x)(Od);
    var Yd = a(368037);
    var Gd = a.n(Yd);
    var $d = a(872218);
    const Qd = "index.applicant.actions.createResume.title";
    const Jd = "index.applicant.actions.createResume.link";
    const Kd = "index.applicant.actions.createResume.description";
    const em = ({
      trls: e
    }) => {
      const n = (0, _.v)(e => e.resumesForUpdate);
      const a = ((n == null ? undefined : n.length) || 0) > 0;
      const s = (0, t.useRef)(null);
      const i = (0, Se.$w)();
      const [r, o] = (0, t.useState)(false);
      (0, t.useEffect)(() => {
        if (s.current) {
          Gd()(s.current);
        }
      }, []);
      if (a) {
        return null;
      }
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(Md, {
          dataQa: "applicant-index-nba-action_create-resume",
          caption: e[Qd],
          description: e[Kd],
          linkText: e[Jd],
          type: Ld.AddResume,
          linkTo: i ? undefined : "/applicant/resumes/new",
          cardRef: s,
          onClick: () => {
            Ud()({
              buttonName: "create_resume_card"
            });
            if (i) {
              o(true);
            }
          }
        }), (0, N.jsx)($d.Z, {
          visible: r,
          onClose: () => o(false),
          url: "/applicant/resumes/new",
          activatorRef: s
        })]
      });
    };
    em.displayName = "IndexPageApplicant/Actions/CreateResume/CreateResumeComponent";
    const nm = (0, f.x)(em);
    const am = "index.card.employer.rating.result.title";
    const tm = "index.card.employer.rating.result.link";
    const sm = "index_employers_rating_result_links";
    const im = ({
      trls: e
    }) => {
      const n = (0, _.v)(({
        features: e
      }) => e[sm]);
      let a = "";
      try {
        a = JSON.parse(n).applicantDashboardCard;
      } catch (e) {
        a = `${$}${new Date().getFullYear() - 1}?utm_source=app&utm_medium=app&utm_campaign=web_action_card_rating_2025`;
      }
      return (0, N.jsx)(Md, {
        dataQa: "applicant-index-nba-action_employer-rating-voting",
        caption: (0, Z.WU)(e[am], {
          "{0}": new Date().getFullYear() - 1
        }),
        linkText: e[tm],
        type: Ld.EmployerRatingResult,
        linkTo: a
      });
    };
    im.displayName = "Actions/EmployerRatingResult/index/EmployerRatingResult";
    const rm = (0, f.x)(im);
    const om = "index.card.employer.rating.title";
    const lm = "index.card.employer.rating.link";
    const cm = "index_employers_rating_links";
    const dm = ({
      trls: e
    }) => {
      const n = (0, _.v)(({
        features: e
      }) => e[cm]);
      let a = "";
      try {
        a = JSON.parse(n).applicantDashboardCard;
      } catch (e) {
        a = `${G}?utm_source=app&utm_medium=app&utm_campaign=web_action_card_rating_2025`;
      }
      return (0, N.jsx)(Md, {
        dataQa: "applicant-index-nba-action_employer-rating-voting",
        caption: e[om],
        linkText: e[lm],
        type: Ld.EmployerRating,
        linkTo: a
      });
    };
    dm.displayName = "Actions/EmployerRatingVoting/index/EmployerRatingVoting";
    const mm = (0, f.x)(dm);
    var pm = a(213259);
    var um = a.n(pm);
    var hm = a(145106);
    const xm = () => {
      const e = (0, _.v)(e => e.resumesForUpdate);
      return ((e == null ? undefined : e.length) || 0) > 0;
    };
    const ym = "index.applicant.actions.enableResumeAutoUpdate.title";
    const gm = "index.applicant.actions.enableResumeAutoUpdate.description";
    const vm = "index.applicant.actions.enableResumeAutoUpdate.link.redesign";
    const bm = "index.applicant.actions.enableResumeAutoUpdate.link.hhpro";
    const jm = "index.applicant.actions.enableResumeAutoUpdate.link.short";
    const fm = {
      text: {
        [wd.Jd.Active]: vm,
        [wd.Jd.Available]: bm,
        [wd.Jd.Frozen]: vm
      },
      link: {
        [wd.Jd.Active]: hm.F6,
        [wd.Jd.Available]: hm.Pp,
        [wd.Jd.Frozen]: hm.F6
      }
    };
    const _m = ({
      trls: e,
      isHhProNewYearExp: n
    }) => {
      const a = xm();
      const s = (0, _.v)(e => e.autoUpdateAvailableForAnyResume);
      const i = (0, t.useRef)(null);
      const {
        isXS: r
      } = (0, F.G)();
      const o = (0, _.v)(e => e.stateHhPro);
      (0, t.useEffect)(() => {
        if (i.current) {
          um()(i.current);
        }
      }, []);
      if (a || !s || o === wd.Jd.UnAvailable) {
        return null;
      }
      const l = r ? e[jm] : e[fm.text[o]];
      let c = fm.link[o];
      if (n) {
        c = `${hm.Pp}?promocode=HHPRONEWYEAR2026`;
      }
      return (0, N.jsx)(Md, {
        dataQa: "applicant-index-nba-action_enable-resume-autoupdate",
        caption: e[ym],
        description: e[gm],
        linkText: l,
        type: Ld.AutoUpdate,
        linkTo: c,
        cardRef: i,
        onClick: () => {
          Ud()({
            buttonName: "update_automatically_card"
          });
        },
        isButtonLink: true
      });
    };
    _m.displayName = "IndexPageApplicant/Actions/EnableResumeAutoUpdate/EnableResumeAutoUpdateComponent";
    const Sm = (0, f.x)(_m);
    var Cm = a(720545);
    var km = a.n(Cm);
    const wm = a.p + "static/images/icon__min_aa1fd7f8322ab3ce.webp";
    const Nm = "image--bYY98twd2QtoXUZi";
    const Em = "applicant.homepage.actions.hhpro.newyear.promo.title";
    const Am = "applicant.homepage.actions.hhpro.newyear.promo.linkText";
    const Rm = ({
      trls: e
    }) => (0, N.jsx)(Md, {
      caption: e[Em],
      linkText: e[Am],
      renderIcon: () => (0, N.jsx)(_e.Z, {
        className: Nm,
        path: wm
      }),
      onClick: () => {
        km()({
          type: "hhpro_newyear_extra_promo"
        });
      },
      linkTo: `${hm.Pp}?promocode=HHPRONEWYEAR2026`,
      target: "_blank"
    });
    Rm.displayName = "Actions/HhProNewYearExtraPromoBanner/index/HhProNewYearExtraPromoBannerComponent";
    const Pm = (0, f.x)(Rm);
    var Tm = a(394382);
    const Im = "kakdela.banner.title";
    const Lm = "kakdela.banner.link";
    const Wm = ({
      trls: e
    }) => {
      const n = (0, _.v)(e => e.kakdelaBanner);
      if (!n) {
        return null;
      }
      return (0, N.jsx)(Md, {
        dataQa: "applicant-index-nba-action_kakdela",
        caption: n.bannerText || e[Im],
        linkText: e[Lm],
        type: Ld.KakdelaBanner,
        onClick: () => {
          const e = n.linkMode === Tm.h.Internal ? "_self" : "_blank";
          window.open(n.passingLink, e);
        }
      });
    };
    Wm.displayName = "IndexPageApplicant/Actions/KakdelaBanner/KakdelaBannerComponent";
    const Bm = (0, f.x)(Wm);
    var Mm = a(380418);
    var Vm = a.n(Mm);
    var Dm = a(463182);
    const Fm = "container--miFwoj786EK7J3GR";
    const Hm = "content-wrapper--uw3cjI5QUnc6SGhx";
    const qm = "content--m4aY1Jfu0ikthGT5";
    const Um = "circle-background--RONhNIx4W34HHHsu";
    const Xm = "circle-progress--hvpH3NEdpeICOzGc";
    const zm = ({
      progress: e = 0,
      children: n
    }) => {
      const [a, s] = (0, t.useState)(e);
      const i = 24;
      const r = Math.PI * 44;
      const o = a * r;
      (0, t.useEffect)(() => {
        s(e);
      }, [e]);
      return (0, N.jsxs)("div", {
        className: Fm,
        children: [(0, N.jsxs)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 48 48",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, N.jsx)("circle", {
            className: Um,
            r: 22,
            cx: i,
            cy: i,
            fill: "none",
            strokeDasharray: "0",
            strokeDashoffset: "0",
            strokeWidth: 4
          }), (0, N.jsx)("circle", {
            className: Xm,
            r: 22,
            cx: i,
            cy: i,
            fill: "none",
            strokeDasharray: r,
            strokeDashoffset: o,
            transform: "rotate(-90,24,24)",
            strokeWidth: 4,
            strokeLinecap: "round"
          })]
        }), (0, N.jsx)("div", {
          className: Hm,
          children: (0, N.jsx)("div", {
            className: qm,
            children: n
          })
        })]
      });
    };
    zm.displayName = "IndexPageApplicant/Actions/CircleProgress/CircleProgress";
    const Om = {
      "response-streak-success-wrapper": "response-streak-success-wrapper--u9m2TnJeOvAlEqPb",
      responseStreakSuccessWrapper: "response-streak-success-wrapper--u9m2TnJeOvAlEqPb",
      "response-streak-success": "response-streak-success--FRGfKEYRcoUuAL8D",
      responseStreakSuccess: "response-streak-success--FRGfKEYRcoUuAL8D",
      "response-streak-number": "response-streak-number--pdTKWHfoGUprCf9F",
      responseStreakNumber: "response-streak-number--pdTKWHfoGUprCf9F",
      "response-streak-success-badge": "response-streak-success-badge--NyTEverRXOIGzMX_",
      responseStreakSuccessBadge: "response-streak-success-badge--NyTEverRXOIGzMX_",
      "response-streak-success-badge-1": "response-streak-success-badge-1--ErY_no8Ho3UcWwUg",
      responseStreakSuccessBadge1: "response-streak-success-badge-1--ErY_no8Ho3UcWwUg",
      "response-streak-success-badge-2": "response-streak-success-badge-2--Qx5_0leotbkIzIYu",
      responseStreakSuccessBadge2: "response-streak-success-badge-2--Qx5_0leotbkIzIYu",
      "response-streak-success-badge-3": "response-streak-success-badge-3--RyicxKQQ6W4lhMwL",
      responseStreakSuccessBadge3: "response-streak-success-badge-3--RyicxKQQ6W4lhMwL",
      "response-streak-success-badge-4": "response-streak-success-badge-4--GkXrf_JLH7cWHD3V",
      responseStreakSuccessBadge4: "response-streak-success-badge-4--GkXrf_JLH7cWHD3V",
      "response-streak-success-badge-5": "response-streak-success-badge-5--VRB06lCtvF0OJBly",
      responseStreakSuccessBadge5: "response-streak-success-badge-5--VRB06lCtvF0OJBly",
      "response-streak-success-badge-6": "response-streak-success-badge-6--RtNeE4eDiB0hZBXB",
      responseStreakSuccessBadge6: "response-streak-success-badge-6--RtNeE4eDiB0hZBXB",
      "response-streak-success-badge-7": "response-streak-success-badge-7--qoFNeTMozcgDVyxu",
      responseStreakSuccessBadge7: "response-streak-success-badge-7--qoFNeTMozcgDVyxu"
    };
    const Zm = {
      success: "index.applicant.actions.responseStreak.success.link",
      progress: "index.applicant.actions.responseStreak.progress.link"
    };
    const Ym = {
      success: "index.applicant.actions.responseStreak.success.title",
      progress: "index.applicant.actions.responseStreak.progress.title.redesign",
      progressStart: "index.applicant.actions.responseStreak.progressStart.title"
    };
    const Gm = {
      one: "index.applicant.actions.responseStreak.progress.title.count.one",
      some: "index.applicant.actions.responseStreak.progress.title.count.some",
      many: "index.applicant.actions.responseStreak.progress.title.count.many"
    };
    const $m = {
      one: "vacancies.accusative.one",
      some: "vacancies.accusative.some",
      many: "vacancies.accusative.many"
    };
    const Qm = ({
      trls: e
    }) => {
      const n = (0, _.v)(e => e.applicantResponseStreaks).overall || {};
      const {
        responsesCount: a,
        responsesRequired: s
      } = n;
      const i = (0, _.v)(e => e.recommendedVacancies);
      const r = (0, t.useRef)(null);
      (0, t.useEffect)(() => {
        if (r.current) {
          Vm()(r.current, {
            responseCount: a
          });
        }
      }, [a]);
      if (typeof a != "number" && typeof s != "number") {
        return null;
      }
      const o = a === 0;
      const l = i == null ? undefined : i.queries;
      const c = `${nn.Z.vacancySearch}?${l ? l.itemsOnPageBase : ""}`;
      const {
        roundCounter: d,
        completeStepCounter: m,
        stage: p
      } = (0, Dm.default)(s, a);
      const u = s - m;
      const h = u / s;
      const x = Math.min(7, d);
      return (0, N.jsx)(Md, {
        cardRef: r,
        dataQa: "applicant-index-nba-action_response-streak",
        caption: p === Dm.LoopCounterStage.Success ? e[Ym.success] : (0, Z.WU)(o ? e[Ym.progressStart] : e[Ym.progress], {
          "{}": (0, N.jsx)(Zn.q, {
            many: e[o ? $m.many : Gm.many],
            one: e[o ? $m.one : Gm.one],
            some: e[o ? $m.some : Gm.some],
            value: u
          })
        }),
        linkText: p === Dm.LoopCounterStage.Success ? e[Zm.success] : e[Zm.progress],
        renderIcon: () => p === Dm.LoopCounterStage.Success ? (0, N.jsx)("div", {
          className: Om.responseStreakSuccessWrapper,
          children: (0, N.jsxs)("div", {
            className: Om.responseStreakSuccess,
            children: [(0, N.jsx)("div", {
              className: ge()(Om.responseStreakSuccessBadge, Om[`responseStreakSuccessBadge${x}`])
            }), (0, N.jsx)(j.x, {
              typography: "label-3-regular",
              style: "accent",
              children: d
            })]
          })
        }) : (0, N.jsx)(zm, {
          progress: h,
          children: (0, N.jsx)(g.D, {
            Element: "h3",
            size: "medium",
            children: (0, N.jsx)("span", {
              className: Om.responseStreakNumber,
              children: u
            })
          })
        }),
        linkTo: c,
        onClick: () => {
          if (p === Dm.LoopCounterStage.Success) {
            Ud()({
              buttonName: "view_vacancies_continue_to_response_card"
            });
          } else {
            Ud()({
              buttonName: "view_vacancies_response_card"
            });
          }
        }
      });
    };
    Qm.displayName = "IndexPageApplicant/Actions/ResponseStreak/ResponseStreakComponent";
    const Jm = (0, f.x)(Qm);
    var Km = a(44340);
    var ep = a.n(Km);
    var np = a(49924);
    var ap = a(800555);
    var tp = a.n(ap);
    const sp = {
      title: "index.applicant.resumeBatchUpdate.notification.error.title",
      content: "index.applicant.resumeBatchUpdate.notification.error.content"
    };
    const ip = {
      title: "index.applicant.resumeBatchUpdate.notification.success.title",
      content: "index.applicant.resumeBatchUpdate.notification.success.content"
    };
    const rp = ({
      trls: e
    }) => (0, N.jsxs)(N.Fragment, {
      children: [(0, N.jsx)(tp(), {
        children: e[ip.title]
      }), (0, N.jsx)("p", {
        children: e[ip.content]
      })]
    });
    rp.displayName = "components/Notifications/ResumeBatchUpdate/ResumeBatchUpdateSuccess";
    const op = {
      Element: (0, f.x)(rp),
      kind: "ok",
      autoClose: true
    };
    const lp = ({
      trls: e
    }) => (0, N.jsxs)(N.Fragment, {
      children: [(0, N.jsx)(tp(), {
        children: e[sp.title]
      }), (0, N.jsx)("p", {
        children: e[sp.content]
      })]
    });
    lp.displayName = "components/Notifications/ResumeBatchUpdate/ResumeBatchUpdateError";
    const cp = {
      Element: (0, f.x)(lp),
      kind: "error",
      autoClose: true
    };
    var dp = a(454959);
    var mp = a(362854);
    var pp = a(101199);
    var up = a(369961);
    const hp = "index.applicant.actions.updateResumes.title.redesign";
    const xp = "index.applicant.actions.updateResumes.update";
    const yp = (0, Aa.makeSetStoreField)("resumesForUpdate");
    const gp = ({
      trls: e
    }) => {
      const n = (0, u.usePush)();
      const a = (0, xn.useDispatch)();
      const {
        addNotification: s
      } = (0, qa.lm)();
      const i = (0, _.v)(mp.so);
      const r = (0, _.v)(dp.Nx);
      const o = (0, _.v)(dp._b);
      const l = xm();
      const c = (0, _.v)(e => e.resumesForUpdate);
      const d = (0, t.useRef)(null);
      const [m, p] = (0, t.useState)(false);
      (0, t.useEffect)(() => {
        if (d.current) {
          ep()(d.current);
        }
      }, []);
      if (!l) {
        return null;
      }
      return (0, N.jsx)(Md, {
        dataQa: "applicant-index-nba-action_update-resumes",
        caption: e[hp],
        linkText: e[xp],
        type: Ld.Up,
        isDisabled: m,
        onClick: async () => {
          Ud()({
            buttonName: "update_resume_card"
          });
          p(true);
          try {
            await C._i.post("/shards/resume/batch_update");
            const [e, n] = await (0, pp.qo)(i, r, c);
            if (e && (0, dp.vO)(o, "web_setka_after_resume_update_v2", a)) {
              (0, pp.gE)(r);
              a((0, up.l_)(n));
            } else {
              s(op);
              a(yp([]));
            }
          } catch (a) {
            var e;
            var t;
            var l;
            const i = a;
            if ((e = i.response) !== null && e !== undefined && (e = e.data) !== null && e !== undefined && (e = e.hhcaptcha) !== null && e !== undefined && e.isBot || (t = i.response) !== null && t !== undefined && (t = t.data) !== null && t !== undefined && (t = t.recaptcha) !== null && t !== undefined && t.isBot) {
              var d;
              var m;
              const e = ((d = i.response) === null || d === undefined || (d = d.data) === null || d === undefined || (d = d.hhcaptcha) === null || d === undefined ? undefined : d.captchaState) || ((m = i.response) === null || m === undefined || (m = m.data) === null || m === undefined || (m = m.recaptcha) === null || m === undefined ? undefined : m.captchaState);
              n((e => {
                const n = (0, Bn.j)("/account/captcha");
                n.params = {
                  state: e,
                  backurl: document.location.toString()
                };
                return n.href;
              })(e));
              return;
            }
            np.default.log("out error", new Error("Error batch updating resumes"), {
              reason: (l = i.response) === null || l === undefined || (l = l.data) === null || l === undefined ? undefined : l.updateError,
              length: c == null ? undefined : c.length,
              resumes: c == null ? undefined : c.join(",")
            });
            console.error(i);
            s(cp);
          } finally {
            p(false);
          }
        },
        cardRef: d
      });
    };
    gp.displayName = "IndexPageApplicant/Actions/UpdateResumes/UpdateResumesComponent";
    const vp = (0, f.x)(gp);
    const bp = "youthVacancies.title";
    const jp = "youthVacancies.banner.link";
    const fp = ({
      trls: e
    }) => {
      const n = (0, _.v)(e => e.youthVacanciesBanner, xn.shallowEqual);
      const [a, s] = (0, t.useState)(n != null && !!n.isModalVisibleOnPageOpen);
      return (0, N.jsxs)(N.Fragment, {
        children: [n != null && n.isEnabled ? (0, N.jsx)(Md, {
          dataQa: "applicant-index-nba-action_youth-vacancies",
          type: Ld.YouthVacanciesBanner,
          caption: e[bp],
          linkText: e[jp],
          onClick: () => {
            km()({
              type: "youth_vacancies"
            });
            s(true);
          }
        }) : undefined, (0, N.jsx)(wi, {
          isOpen: a,
          setIsOpen: s
        })]
      });
    };
    fp.displayName = "IndexPageApplicant/Actions/YouthVacanciesBanner/YouthVacanciesBannerComponent";
    const _p = (0, Bs.Z)(fp);
    const Sp = "cards-scroller--AwTFpUj323MtmWeg";
    const Cp = "cards-wrapper--e3MewGD2t0Q3cv7m";
    const kp = ({
      hasResumes: e,
      hasFinishedResumes: n
    }) => {
      const a = (0, xt.kQ)();
      const s = (0, Se.$w)();
      const i = (0, _.v)(e => {
        var n;
        return (n = e.youthVacanciesBanner) !== null && n !== undefined && !!n.isEnabled;
      });
      const r = (0, _.v)(e => e.showEmployerRatingBlock);
      const o = (0, _.v)(e => e.showEmployerRatingResultBlock);
      const l = (0, _.v)(e => e.stateHhPro === wd.Jd.Available);
      const c = (0, Ra.ZP)("tech_hh_pro_new_year_2026", l, l);
      const d = (0, t.useRef)(null);
      (0, t.useEffect)(() => {
        if (!d.current) {
          return;
        }
        return kd()(d.current, {
          hhtmSource: "main",
          actionCardList: [o && "employer_rating_result_card", r && "employer_rating_card", !e && "create_resume_card", n && "update_resume_card", n && "update_automatically_card", n && "vacancies_continue_to_response_card", i && "youth_vacancies_card", "career_skills_growth", c && "hhpro_newyear_extra_promo"].filter(Boolean).join(",")
        }).stopSpying;
      }, [d, e, n, r, o, i, c]);
      return (0, N.jsxs)("div", {
        children: [!e && (0, N.jsx)(v.X, {
          default: 28,
          xs: 0
        }), (0, N.jsx)("div", {
          className: Sp,
          children: (0, N.jsxs)("div", {
            ref: d,
            className: Cp,
            children: [o && (0, N.jsx)(rm, {}), r && (0, N.jsx)(mm, {}), !e && (0, N.jsx)(nm, {}), n && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(vp, {}), (0, N.jsx)(Sm, {
                isHhProNewYearExp: c
              })]
            }), (0, N.jsx)(_p, {}), !s && a && (0, N.jsx)(Bm, {}), e && (0, N.jsx)(Jm, {}), (0, N.jsx)(Zd, {}), c && (0, N.jsx)(Pm, {}), (0, N.jsx)(Hd, {})]
          })
        })]
      });
    };
    kp.displayName = "IndexPageApplicant/Actions/index/Actions";
    const wp = kp;
    var Np = a(908298);
    const Ep = "count-new--NwTMaqONkCAsfJu2";
    const Ap = "list-wrapper--UneKt63h0sQPz7Eo";
    const Rp = "list-item--okADX1rzMnju4AED";
    const Pp = "index.events.letters";
    const Tp = "index.events.letters.mobile";
    const Ip = "index.events.views";
    const Lp = "index.events.views.mobile";
    const Wp = "index.events.selectedVacancies";
    const Bp = "index.events.selectedVacancies.mobile";
    const Mp = "index.events.autosearches";
    const Vp = ({
      trls: e
    }) => {
      const n = (0, _.v)(e => e.userStats);
      const a = (0, _.v)(e => e.favoriteVacanciesCount) || 0;
      const s = (0, _.v)(e => e.savedVacancySearch);
      const {
        isGtS: i,
        isMobile: r
      } = (0, F.G)();
      const o = {
        invitations: {
          link: "/applicant/negotiations",
          modifier: "letters",
          name: e[Pp],
          nameMobile: e[Tp],
          icon: en.b40,
          count: (() => {
            const e = n == null ? undefined : n["applicant-invitations"];
            const a = n == null ? undefined : n["new-applicant-invitations"];
            if (a && a > 0) {
              return (0, N.jsxs)("span", {
                className: Ep,
                children: ["+", a]
              });
            } else if (e !== undefined) {
              if (e > 999) {
                return "999+";
              } else {
                return String(e || "");
              }
            } else {
              return "";
            }
          })()
        },
        applicantResumes: {
          link: "/applicant/resumes",
          modifier: "views",
          name: e[Ip],
          nameMobile: e[Lp],
          icon: en.bzb,
          count: (() => {
            const e = n == null ? undefined : n["resumes-views"];
            const a = n == null ? undefined : n["new-resumes-views"];
            if (a && a > 0) {
              return (0, N.jsxs)("span", {
                className: Ep,
                children: ["+", a]
              });
            } else {
              return String(e || "");
            }
          })()
        },
        favoriteVacancies: {
          link: "/applicant/favorite_vacancies",
          modifier: "selected-vacancies",
          name: e[Wp],
          nameMobile: e[Bp],
          icon: en.WrI,
          count: String(a || "")
        },
        autosearch: {
          link: "/applicant/autosearch.xml",
          modifier: "autosearches",
          name: e[Mp],
          nameMobile: e[Mp],
          icon: en.bUC,
          count: r ? String((s == null ? undefined : s.totalItems) || "") : ""
        }
      };
      let l;
      l = i ? [o.invitations, o.applicantResumes, o.favoriteVacancies, o.autosearch] : [o.applicantResumes, o.invitations, o.autosearch];
      const c = e => {
        let n = "favorite_vacancy_list_dashboard";
        if (e === "views") {
          n = "resume_view_history_dashboard";
        } else if (e === "letters") {
          n = "negotiation_list_dashboard";
        } else if (e === "autosearches") {
          n = "vacancy_autosearch_list_dashboard";
        }
        Ud()({
          buttonName: n
        });
      };
      return (0, N.jsx)(Y.Z, {
        borderWidth: "default",
        padding: i ? 24 : 16,
        borderRadius: i ? 24 : 16,
        stretched: true,
        children: (0, N.jsx)("div", {
          className: Ap,
          children: l.map((e, n) => {
            const a = e.icon;
            if (i) {
              return (0, N.jsx)(u.SPALink, {
                to: e.link,
                onClick: () => c(e.modifier),
                children: (0, N.jsx)(Fe.b, {
                  left: (0, N.jsx)(a, {}),
                  right: (0, N.jsx)(Np.O, {
                    hideIcon: true,
                    children: e.count
                  }),
                  children: (0, N.jsx)(qe.j, {
                    type: "subtitle",
                    style: "primary",
                    children: e.name
                  })
                })
              }, e.link);
            } else {
              return (0, N.jsxs)(t.Fragment, {
                children: [n !== 0 && (0, N.jsx)(Nl.i, {
                  mode: "vertical",
                  length: 48
                }), (0, N.jsxs)(u.SPALink, {
                  to: e.link,
                  className: Rp,
                  onClick: () => c(e.modifier),
                  children: [(0, N.jsx)(j.x, {
                    typography: "label-3-regular",
                    style: "secondary",
                    children: e.nameMobile
                  }), (0, N.jsx)(v.X, {
                    default: 6
                  }), (0, N.jsx)(j.x, {
                    typography: "label-2-regular",
                    style: "primary",
                    children: e.count || "0"
                  })]
                })]
              }, e.link);
            }
          })
        })
      });
    };
    Vp.displayName = "components/IndexPageApplicant/EventList/EventListComponent";
    const Dp = (0, f.x)(Vp);
    var Fp = a(693200);
    var Hp = a.n(Fp);
    var qp = a(343279);
    var Up = a.n(qp);
    var Xp = a(745454);
    var zp = a(963845);
    var Op = a.n(zp);
    var Zp = a(266184);
    var Yp = a.n(Zp);
    var Gp = a(547302);
    var $p = a(737905);
    const Qp = [fi.yL.PartTime, fi.yL.Shift, fi.yL.Juveniles, fi.yL.Remote, fi.yL.Internship];
    const Jp = "recommended";
    const Kp = {
      presets: {
        [Jp]: "vacancySearchPresets.preset.forYou",
        [fi.yL.Remote]: "vacancySearchPresets.preset.remote",
        [fi.yL.PartTime]: "vacancySearchPresets.preset.partTime",
        [fi.yL.Internship]: "vacancySearchPresets.preset.internship",
        [fi.yL.Juveniles]: "vacancySearchPresets.preset.juveniles",
        [fi.yL.Shift]: "vacancySearchPresets.preset.shift"
      }
    };
    const eu = [Jp, ...Qp].filter(e => Kp.presets[e]);
    const nu = ({
      trls: e,
      tabId: n = "recommended",
      onChange: a,
      containerCorrections: s
    }) => {
      const i = (0, _.v)(e => e.recommendedVacancies);
      const r = (0, _.v)(e => e.searchPresetsVacancies);
      const o = (0, t.useRef)({});
      const l = (0, _.v)(e => e.analyticsParams.hhtmSource);
      (0, t.useEffect)(() => {
        const n = eu.map(n => {
          const a = Kp.presets[n];
          const t = e[a];
          const s = o.current[n] && Yp()(o.current[n], {
            collection: t,
            tagType: "main_collection_tag",
            hhtmSource: l
          });
          if (s) {
            s.startSpying();
            return s;
          } else {
            return null;
          }
        });
        return () => n.forEach(e => e == null ? undefined : e.stopSpying());
      }, [l, e]);
      return (0, N.jsx)(Gp.m, {
        disableContainerButtons: true,
        activeItemId: n,
        onChange: e => {
          if (a != null) {
            a(e);
          }
        },
        containerCorrections: s ?? {},
        "data-qa": "vacancy-search-presets",
        children: eu.map(n => {
          var a;
          const t = Kp.presets[n];
          const s = e[t];
          return (0, N.jsx)($p.T, {
            ref: e => {
              o.current[n] = e;
            },
            Element: u.SPALink,
            id: n,
            to: [nn.Z.vacancySearch, n === Jp ? i == null ? undefined : i.queries.itemsOnPageBase : r == null || (a = r[n]) === null || a === undefined ? undefined : a.queries.itemsOnPageBase].filter(Boolean).join("?"),
            "data-qa": `vacancy-search-presets_${n}`,
            onClick: e => {
              e.preventDefault();
              Op()({
                collection: s,
                tagType: "main_collection_tag",
                hhtmSource: l
              });
            },
            children: s
          }, ["tab", n].join("-"));
        })
      });
    };
    nu.displayName = "components/VacancySearchPresets/index/VacancySearchPresets";
    const au = (0, Bs.Z)(nu);
    var tu = a(799429);
    var su = a(840316);
    const iu = {
      title: "vacancySearchPresets.stub.empty.title",
      description: "vacancySearchPresets.stub.empty.description"
    };
    const ru = {
      title: "vacancySearchPresets.stub.error.title",
      description: "vacancySearchPresets.stub.error.description",
      action: "vacancySearchPresets.stub.error.action"
    };
    const ou = Array(6).fill(null);
    const lu = ({
      trls: e,
      preset: n,
      empty: a,
      error: t,
      loading: s
    }) => {
      const i = (0, xn.useDispatch)();
      if (t) {
        return (0, N.jsx)(Y.Z, {
          padding: 24,
          borderRadius: 24,
          borderStyle: "neutral",
          borderWidth: "default",
          stretched: true,
          children: (0, N.jsx)(tu.V, {
            title: e[ru.title],
            description: e[ru.description],
            buttonPrimary: (0, N.jsx)(y.z, {
              mode: "secondary",
              style: "accent",
              loading: s,
              onClick: () => {
                i((0, fi.hB)({
                  preset: n,
                  value: {
                    vacancies: undefined
                  }
                }));
              },
              children: e[ru.action]
            })
          })
        });
      } else if (s) {
        return (0, N.jsx)(X.z, {
          default: 16,
          children: ou.map((e, n) => (0, N.jsx)(su.O, {
            width: "100%",
            height: 304,
            borderRadius: 24,
            loading: s
          }, n))
        });
      } else if (s || t || !a) {
        return null;
      } else {
        return (0, N.jsx)(Y.Z, {
          padding: 24,
          borderRadius: 24,
          borderStyle: "neutral",
          borderWidth: "default",
          stretched: true,
          children: (0, N.jsx)(tu.V, {
            title: e[iu.title],
            description: e[iu.description]
          })
        });
      }
    };
    lu.displayName = "VacancySearchPresets/Stub/index/VacancySearchPresetsStubComponent";
    const cu = (0, Bs.Z)(lu);
    var du = a(656322);
    const mu = "header-wrapper--A9MK992sYvAoHvby";
    const pu = "header-tabs-wrapper--A_EGgaYQLyQGD7JT";
    const uu = "header-map-button-experiment--EkBa6gesMAsCe764";
    const hu = {
      header: "index.applicant.recommendedVacancies.header",
      allShort: "index.applicant.recommendedVacancies.all.short",
      allFull: "index.applicant.recommendedVacancies.all.full",
      onMap: "index.applicant.recommendedVacancies.onMap",
      subheader: {
        forResume: "index.applicant.recommendedVacancies.subheader.forResume",
        noResume: "index.applicant.recommendedVacancies.subheader.noResume"
      },
      vacancies: {
        one: "index.applicant.recommendedVacancies.vacancies.one",
        some: "index.applicant.recommendedVacancies.vacancies.some",
        many: "index.applicant.recommendedVacancies.vacancies.many"
      },
      presets: {
        [Jp]: "vacancySearchPresets.preset.forYou",
        [fi.yL.Remote]: "vacancySearchPresets.preset.remote",
        [fi.yL.PartTime]: "vacancySearchPresets.preset.partTime",
        [fi.yL.Internship]: "vacancySearchPresets.preset.internship",
        [fi.yL.Juveniles]: "vacancySearchPresets.preset.juveniles",
        [fi.yL.Shift]: "vacancySearchPresets.preset.shift"
      }
    };
    const xu = ({
      trls: e
    }) => {
      var n;
      const a = (0, _.v)(e => e.recommendedVacancies);
      const s = (0, _.v)(e => e.searchPresetsVacancies);
      const i = Qc();
      (0, du.E)(a != null && !!a.resultsFound && a != null && (n = a.vacancies) !== null && n !== undefined && !!n.length);
      const [r, o] = (0, t.useState)(Jp);
      const l = (e => {
        const n = (0, _.v)(n => {
          var a;
          if ((a = n.searchPresetsVacancies) === null || a === undefined || (a = a[e]) === null || a === undefined) {
            return undefined;
          } else {
            return a.vacancies;
          }
        }, xn.shallowEqual);
        const a = (0, xn.useDispatch)();
        const [s, i] = (0, t.useState)(false);
        const [r, o] = (0, t.useState)(false);
        const l = (0, t.useRef)(null);
        (0, t.useEffect)(() => {
          if (n !== undefined || !Object.values(fi.yL).includes(e)) {
            return () => {};
          }
          i(true);
          const t = new AbortController();
          l.current = e;
          C._i.get("/shards/search/vacancy/presets", {
            params: {
              preset: e
            },
            signal: t.signal
          }).then(n => {
            if (l.current === e) {
              a((0, fi.hB)({
                preset: e,
                value: n
              }));
              o(false);
            }
          }).catch(e => {
            console.error(e);
            o(!t.signal.aborted);
          }).finally(() => {
            i(l.current !== e);
          });
          return () => {
            t.abort();
          };
        }, [a, e, n]);
        return {
          loading: s,
          error: r
        };
      })(r);
      const c = (0, t.useMemo)(() => {
        if (r === Jp) {
          return a;
        } else {
          return (s == null ? undefined : s[r]) ?? {};
        }
      }, [r, a, s]);
      (0, t.useEffect)(() => {
        const n = hu.presets[r];
        if (n) {
          Up()({
            collection: e[n],
            vacancyCount: (c == null ? undefined : c.resultsFound) || 0
          });
        }
      }, [e, r, c]);
      const d = c != null && !!c.hasVacanciesWithAddress;
      const m = (c == null ? undefined : c.queries) || {};
      const p = `${nn.Z.vacancySearch}?${m.itemsOnPageBase}`;
      const h = ((c == null ? undefined : c.resultsFound) || 0) > ((c == null ? undefined : c.itemsOnPage) || 6);
      const x = hu.presets[r];
      const g = (c == null ? undefined : c.vacancies) || [];
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsxs)("div", {
          className: mu,
          children: [(0, N.jsx)("div", {
            className: pu,
            children: (0, N.jsx)(au, {
              tabId: r,
              onChange: e => {
                o(e);
                if (e === fi.yL.Juveniles && i) {
                  (0, Jc.BH)("main_recommendations_teen_tab");
                }
              },
              containerCorrections: {
                correctionM: 0,
                correctionS: 56,
                correctionXS: 16
              }
            })
          }), (0, N.jsx)("div", {
            className: uu,
            children: d && (0, N.jsx)(y.z, {
              "data-qa": "applicant-index-search-map-button",
              mode: "secondary",
              Element: u.SPALink,
              style: "accent",
              to: `${nn.Z.vacancySearchMap}?${m.map}`,
              additionalQueryParams: {
                hhtmFromLabel: "rec_vacancy_show_all_map"
              },
              children: e[hu.onMap]
            })
          })]
        }), (0, N.jsx)(v.X, {
          default: 20,
          gteS: 24
        }), x ? (0, N.jsxs)(N.Fragment, {
          children: [g.map(n => (0, N.jsx)(Xp.Z, {
            searchPresetLabel: e[x],
            vacancy: n,
            vacancySource: r === Jp ? Ac.H.RecommendedVacanciesOnMain : Ac.H.SearchPresetVacanciesOnMain
          }, n.vacancyId)), r !== Jp ? (0, N.jsx)(cu, {
            preset: r,
            empty: !g.length,
            ...l
          }) : undefined]
        }) : null, h && (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)(v.X, {
            default: 20,
            gteS: 24
          }), (0, N.jsx)(y.z, {
            "data-qa": "applicant-index-search-all-results-button",
            Element: u.SPALink,
            to: p,
            additionalQueryParams: {
              hhtmFromLabel: "rec_vacancy_show_all"
            },
            mode: "secondary",
            style: "accent",
            stretched: true,
            onClick: () => {
              Hp()({
                collection: e[hu.presets[r]],
                vacancyCount: String((c == null ? undefined : c.resultsFound) || 0),
                hhtmSource: "main"
              });
            },
            children: (0, Z.WU)(e[hu.allFull], {
              "{0}": (0, N.jsx)(Zn.q, {
                hasValue: true,
                value: (c == null ? undefined : c.resultsFound) || 0,
                many: e[hu.vacancies.many],
                some: e[hu.vacancies.some],
                one: e[hu.vacancies.one]
              })
            })
          })]
        })]
      });
    };
    xu.displayName = "components/IndexPageApplicant/RecommendedVacancies/RecommendedVacanciesComponent";
    const yu = (0, f.x)(xu);
    const gu = () => {
      const e = (0, _.v)(e => e.applicantInfo);
      const n = (0, _.v)(e => e.isAutoresponseExp);
      const a = (0, _.v)(e => e.banners[En.L.DASHBOARD]);
      const {
        isGtS: s
      } = (0, F.G)();
      (0, t.useEffect)(() => {
        (0, Jc.BH)("applicant_main_page_facelift");
      }, []);
      return (0, N.jsx)(td.W, {
        children: (0, N.jsxs)(U.J, {
          children: [(0, N.jsx)(q.C, {
            xs: 4,
            s: 8,
            m: 4,
            l: 3,
            children: (0, N.jsxs)("div", {
              className: "index-dashboard-applicant-sidebar",
              "data-qa": "applicant-index-dashboard-sidebar",
              children: [(0, N.jsxs)(X.z, {
                default: 12,
                gteS: 16,
                children: [(0, N.jsx)(ad.Z, {
                  iconType: "chevron",
                  showBorder: true
                }), (0, N.jsx)(Dp, {}), (0, N.jsx)(wp, {
                  hasResumes: (e == null ? undefined : e.total) > 0,
                  hasFinishedResumes: (e == null ? undefined : e.finished) > 0
                })]
              }), (0, N.jsx)(v.X, {
                default: 32
              }), s && (0, N.jsx)(X.z, {
                default: 16,
                children: a == null ? undefined : a.map(e => (0, t.createElement)(z.F, {
                  ...e,
                  key: e.id
                }))
              })]
            })
          }), (0, N.jsx)(q.C, {
            xs: 0,
            s: 0,
            m: 0,
            l: 1
          }), (0, N.jsxs)(q.C, {
            xs: 4,
            s: 8,
            m: 8,
            l: 8,
            children: [n && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(Sd, {}), (0, N.jsx)(v.X, {
                default: 24
              })]
            }), (0, N.jsx)(yu, {})]
          })]
        })
      });
    };
    gu.displayName = "components/IndexPageApplicant/ApplicantDashboard/ApplicantDashboard";
    const vu = ({
      item: e,
      parentItem: n,
      index: a
    }) => (0, N.jsx)(Fe.b, {
      right: e.count ? (0, N.jsx)(Fl.V, {
        children: (0, Xs.uf)(e.count)
      }) : undefined,
      children: (0, N.jsx)(qe.j, {
        children: (0, N.jsx)(Ue.r, {
          onClick: () => rn()({
            value: e.name,
            position: a
          }),
          style: "neutral",
          Element: u.SPALink,
          to: mn(n, e),
          additionalQueryParams: {
            hhtmFromLabel: "rainbow_profession"
          },
          isSeoLink: true,
          "data-qa": "profession-item-title",
          children: e.name
        })
      })
    });
    vu.displayName = "components/RainbowCatalog/BottomSheetItem/BottomSheetItem";
    const bu = "index.professions.title";
    const ju = "rainbow_seo_links_for_search_bots";
    const fu = ({
      trls: e,
      spacingBottom: n
    }) => {
      var a;
      const [s, i] = (0, t.useState)(false);
      const [r, o] = (0, t.useState)();
      const l = (0, _.v)(e => e.professionsList);
      const c = (0, _.v)(e => e.isBot && l != null && !!l.professions && !!e.features[ju]);
      if (l) {
        return (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)(g.D, {
            Element: "h3",
            size: "medium",
            children: e[bu]
          }), (0, N.jsx)(v.X, {
            default: 16
          }), (0, N.jsx)(vn.T, {
            scrollable: true,
            children: (a = l.professions) === null || a === undefined ? undefined : a.map((e, n) => (0, N.jsx)(bn.X, {
              Element: "button",
              onClick: () => ((e, n) => {
                gn()({
                  value: e.name,
                  position: n
                });
                if (e.professions.length) {
                  o(e);
                  i(true);
                }
              })(e, n),
              children: e.name
            }, e.name))
          }), (0, N.jsx)(jn.R, {
            visible: s,
            onClose: () => i(false),
            header: (0, N.jsx)(fn.v, {
              showDivider: "always",
              title: r == null ? undefined : r.name,
              right: (0, N.jsx)(en.Cs7, {
                onClick: () => i(false)
              })
            }),
            children: !!r && (0, N.jsx)(X.z, {
              default: 16,
              children: [r, ...r.professions].filter(e => !c || e.catalogPath || (r == null ? undefined : r.id) === cn).map((e, n) => (0, N.jsx)(vu, {
                item: e,
                parentItem: r,
                index: n
              }, e.catalogPath))
            })
          }), n]
        });
      } else {
        return null;
      }
    };
    fu.displayName = "IndexPageApplicant/ProfessionsCatalog/index/ProfessionsCatalogComponent";
    const _u = (0, Bs.Z)(fu);
    const Su = "banner-container--BfkS4bJ98oOKWO6B";
    const Cu = "index.newsTitle";
    const ku = "index.Articles";
    const wu = "rsvApplicantSnackbar.success.title";
    const Nu = "rsvApplicantSnackbar.success.profile";
    const Eu = "rsv_add_page";
    const Au = ({
      trls: e
    }) => {
      const n = (0, xn.useDispatch)();
      const a = (0, u.usePush)();
      const {
        addNotification: s
      } = (0, qa.lm)();
      const {
        isXS: i
      } = (0, F.G)();
      const r = (0, _.v)(e => e.applicantNews);
      const o = (0, _.v)(e => e.applicantArticles);
      const l = (0, _.v)(e => e.applicantFaq);
      const c = (0, _.v)(e => e.banners[En.L.INDEX_HORIZONTAL]);
      const d = (0, _.v)(e => e.banners[En.L.INDEX_APPLICANT_DASHBOARD_MOBILE]);
      const m = (0, _.v)(e => e.banners[En.L.INDEX_APPLICANT_UNDER_RAINBOW_MOBILE]);
      const p = (0, _.v)(e => e.banners[En.L.INDEX_APPLICANT_UNDER_NEWS_BOX_MOBILE]);
      const h = (0, _.v)(e => e.chatBot);
      const x = (0, Se.do)() ? "/articles/applicants" : "/articles/site-news";
      const y = Qc();
      (0, t.useEffect)(() => {
        if (y) {
          (0, Jc.BH)("main_teen");
        }
      }, [y]);
      Ha();
      const g = (0, _.v)(({
        features: e
      }) => e[Eu]);
      const {
        isModalWindowOpened: b,
        competenciesResult: j
      } = (0, _.v)(({
        rsvUserCompetencies: e
      }) => e);
      (0, t.useEffect)(() => {
        const e = Hi.Y.getItem(Vl.p);
        const n = e ? JSON.parse(e) : null;
        if (n) {
          s(nd, {
            props: {
              phoneNumber: n.phone
            }
          });
          Hi.Y.removeItem(Vl.p);
        }
      }, [s, n]);
      const f = e => {
        M()({
          type: e
        });
      };
      const S = (e, n, a) => e != null && e.length ? (0, N.jsxs)(q.C, {
        xs: 4,
        s: 0,
        children: [e.map(e => (0, N.jsx)("div", {
          className: Su,
          onClick: () => f(n),
          children: (0, N.jsx)(z.F, {
            ...e
          })
        }, e.id)), (0, N.jsx)(v.X, {
          default: a,
          gteS: 0
        })]
      }) : null;
      return (0, N.jsxs)(De.H, {
        isEnabled: true,
        children: [(0, N.jsxs)(H.M, {
          children: [(0, N.jsx)(v.X, {
            default: 0,
            gteS: 40
          }), (0, N.jsx)(So, {}), (0, N.jsx)(gu, {})]
        }), (0, N.jsx)(v.X, {
          default: 32,
          gteS: 48,
          gteM: 72
        }), (0, N.jsx)(Nl.i, {}), (0, N.jsx)(v.X, {
          default: 16,
          gteS: 48,
          gteM: 72
        }), (0, N.jsxs)(H.M, {
          children: [(d == null ? undefined : d.length) && (0, N.jsx)(U.J, {
            children: S(d, "XsAfterRecommended", 40)
          }), (0, N.jsx)(Oc, {
            userType: re.FW.Applicant,
            spacingBottom: (0, N.jsx)(v.X, {
              default: 40,
              gteS: 48,
              gteM: 72
            })
          }), (0, N.jsx)(di, {
            spacingBottom: (0, N.jsx)(v.X, {
              default: 40,
              gteS: 48,
              gteM: 72
            })
          }), (c == null ? undefined : c.length) && (0, N.jsx)(U.J, {
            children: c == null ? undefined : c.map(e => (0, N.jsxs)(q.C, {
              xs: 0,
              s: 4,
              m: 8,
              l: 12,
              children: [(0, N.jsx)("div", {
                onClick: () => f("horizontalBanner"),
                children: (0, N.jsx)(z.F, {
                  ...e
                })
              }), (0, N.jsx)(v.X, {
                default: 40
              })]
            }, e.id))
          }), (0, N.jsx)(Ml, {
            spacingBottom: (0, N.jsx)(v.X, {
              default: 40
            })
          }), i && (0, N.jsx)(_u, {
            spacingBottom: (0, N.jsx)(v.X, {
              default: 40
            })
          }), (m == null ? undefined : m.length) && (0, N.jsx)(U.J, {
            children: S(m, "XsAfterRainbow", 40)
          }), (0, N.jsx)(yi.m, {
            spacingBottom: (0, N.jsx)(v.X, {
              default: 40,
              gteS: 48,
              gteM: 72
            })
          }), (0, N.jsxs)(U.J, {
            children: [(0, N.jsxs)(q.C, {
              xs: 4,
              s: 8,
              m: 6,
              l: 4,
              flexibleContent: true,
              children: [(0, N.jsx)(Ge, {
                items: r,
                title: e[Cu],
                href: x,
                isArticle: false
              }), (0, N.jsx)(v.X, {
                default: 16,
                gteM: 24,
                gteL: 0
              })]
            }), S(p, "underNewsBoxMobile", 16), (0, N.jsxs)(q.C, {
              xs: 4,
              s: 8,
              m: 6,
              l: 4,
              flexibleContent: true,
              children: [(0, N.jsx)(Ge, {
                items: o,
                title: e[ku],
                href: "/articles",
                isArticle: true
              }), (0, N.jsx)(v.X, {
                default: 16,
                gteM: 24,
                gteL: 0
              })]
            }), (0, N.jsx)(q.C, {
              xs: 4,
              s: 8,
              m: 12,
              l: 4,
              flexibleContent: true,
              children: !!h && (0, N.jsx)(Ve, {})
            })]
          }), (0, N.jsx)(v.X, {
            default: 40,
            gteS: 48,
            gteM: 72
          }), (0, N.jsx)(oc, {
            items: l,
            spacingBottom: (0, N.jsx)(v.X, {
              default: 40,
              gteXs: 56,
              gteS: 72
            }),
            isApplicant: true
          })]
        }), (0, N.jsxs)(N.Fragment, {
          children: [g && b && (0, N.jsx)(gc, {}), g && j === mc.v0.Success && (0, N.jsx)(wl.A, {
            addon: (0, N.jsx)(en.lot, {
              initialColor: "positive"
            }),
            actionLabel: e[Nu],
            onAction: () => a(nn.Z.applicantResumes),
            children: e[wu]
          }), g && (0, N.jsx)(_c, {})]
        }), (0, N.jsx)(lc.Z, {}), (0, N.jsx)(cc.Y, {
          hhtmFrom: "main"
        })]
      });
    };
    Au.displayName = "components/IndexPageApplicant/index/IndexApplicant";
    const Ru = (0, f.x)(Au);
    var Pu = a(652873);
    var Tu = a(555522);
    var Iu = a.n(Tu);
    var Lu = a(88479);
    var Wu = a(363290);
    var Bu = a(968964);
    var Mu = a(630000);
    var Vu = a(549180);
    var Du = a(910182);
    var Fu = a(538924);
    const Hu = "container--V3io7TekejYq7tox";
    const qu = "rows-container--ITnmdetagRsmCkDu";
    const Uu = "collapsible-container--NGTKWWLyo1Ktc7UA";
    const Xu = "collapsible-cards-container--USzzeutOvJEwZTLw";
    const zu = "collapsible-cards--vGa3u37A3IbGVTuO";
    const Ou = "border--TkpH0V8MSCEPC7gp";
    const Zu = "rows-container-hidden--U7drMQRR7wZ1O78v";
    const Yu = "button-text--vgeUko8x9MuG0l2V";
    const Gu = "employer.index.balanceWidget.button.show";
    const $u = "employer.index.balanceWidget.button.hide";
    const Qu = ({
      trls: e,
      onCollapsedToggle: n,
      isCollapsed: a,
      dropCardsCount: t,
      hasProblem: s
    }) => {
      const i = s && a ? (0, N.jsx)(Fu.C, {
        style: "attention",
        size: "extra-small"
      }) : undefined;
      const r = a ? "expand" : "collapse";
      return (0, N.jsx)(y.z, {
        badge: i,
        onClick: n,
        "data-qa": `balance-widget-btn-${r}`,
        mode: "secondary",
        size: "small",
        style: "neutral",
        stretched: true,
        children: (0, N.jsxs)("div", {
          className: Yu,
          children: [e[a ? Gu : $u], (0, N.jsx)(j.x, {
            style: "secondary",
            typography: "subtitle-2-semibold",
            children: t
          })]
        })
      });
    };
    Qu.displayName = "EmployerBalanceWidget/CollapsibleContainer/CollapseButton/CollapseButtonComponent";
    const Ju = (0, f.x)(Qu);
    const Ku = "employer.index.balanceWidget.balance.addButton";
    const eh = ({
      trls: e
    }) => {
      var n;
      const a = (0, _.v)(e => e.employerIndexPage);
      const t = a == null || (n = a.oldEmployer) === null || n === undefined ? undefined : n.hasPaymentFeature;
      return (0, N.jsx)(y.z, {
        Element: u.SPALink,
        to: nn.Z.employerInvoicePayment,
        disabled: !t,
        onClick: () => {
          m().sendHHEventButtonClick("balance_widget_card_button_plus_click");
        },
        mode: "secondary",
        size: "small",
        style: "neutral",
        stretched: true,
        "data-qa": "balance-card-topup",
        children: e[Ku]
      });
    };
    eh.displayName = "EmployerBalanceWidget/CollapsibleContainer/TopupButton/TopupButtonComponent";
    const nh = (0, f.x)(eh);
    const ah = ({
      children: e,
      mainCard: n,
      onCollapsedToggle: a,
      isCollapsed: s,
      collapsedCards: i,
      dropCardsCount: r,
      hasProblem: o
    }) => {
      const l = (0, t.useRef)(null);
      const c = (0, t.useRef)(null);
      const d = (0, t.useRef)(null);
      const {
        collapsibleClasses: m
      } = (0, Mu.u)(c, !s);
      (0, Vu.R)(d, a, !s);
      (0, t.useLayoutEffect)(() => {
        if (c.current && l.current && d.current) {
          const e = c.current.scrollHeight;
          const n = d.current.clientHeight;
          l.current.style.height = s ? `${n}px` : n + e - 16 + "px";
        }
      }, [s]);
      return (0, N.jsxs)("div", {
        className: Hu,
        children: [(0, N.jsxs)("div", {
          ref: d,
          className: Uu,
          children: [n, (0, N.jsx)(v.X, {
            default: 12
          }), r > 0 ? (0, N.jsx)(Ju, {
            hasProblem: o,
            dropCardsCount: r,
            isCollapsed: s,
            onCollapsedToggle: a
          }) : (0, N.jsx)(nh, {}), (0, N.jsx)("div", {
            className: Xu,
            children: (0, N.jsx)(Du.m, {
              layer: "content",
              children: (0, N.jsx)("div", {
                ref: c,
                className: ge()(zu, m),
                children: e
              })
            })
          }), (0, N.jsx)(Du.m, {
            layer: "content",
            children: (0, N.jsx)("div", {
              ref: l,
              className: Ou
            })
          })]
        }), (0, N.jsx)("div", {
          className: ge()(qu, {
            [Zu]: !s
          }),
          children: i
        })]
      });
    };
    ah.displayName = "EmployerBalanceWidget/CollapsibleContainer/index/CollapsibleContainer";
    const th = (0, f.x)(ah);
    var sh = a(170953);
    var ih = a(26323);
    var rh = a(773825);
    const oh = "row--JO3rM59HY_MWSpM2";
    const lh = "row-text--Pbt521Zn8RT4qbQN";
    const ch = "badge-container--rH8zfPKYbmowwGxb";
    const dh = "card-container-fixed-height--h24ffmZPDHgwTonK";
    const mh = "card-container-with-hover-drop--pBnFs63mMl0fgh37";
    const ph = "drop-content--sDFjBXUKjMomnBiu";
    const uh = ({
      visible: e,
      activatorRef: n,
      children: a,
      onApper: t,
      onBeforeExit: s
    }, i) => (0, N.jsx)(rh.U, {
      padding: 0,
      onAppear: t,
      onBeforeExit: s,
      ref: i,
      visible: e,
      placement: "right-center",
      activatorRef: n,
      children: (0, N.jsx)("div", {
        "data-qa": "balance-drop-content",
        className: ph,
        children: a
      })
    });
    uh.displayName = "EmployerBalanceWidget/BalanceCard/BalanceCardHoverContent/BalanceCardHoverContent";
    const hh = (0, t.forwardRef)(uh);
    const xh = e => {
      const n = (0, t.useRef)(null);
      const a = (0, t.useRef)(null);
      const {
        isMobile: s
      } = (0, F.G)();
      const [i, r] = (0, t.useState)(false);
      const o = (0, t.useCallback)(e => {
        if (n.current && a.current && e.relatedTarget instanceof Element) {
          const t = e.relatedTarget === n.current || e.relatedTarget === a.current;
          const s = n.current.contains(e.relatedTarget) || a.current.contains(e.relatedTarget);
          if (!t && !s) {
            r(false);
          }
        } else {
          r(false);
        }
      }, []);
      return {
        dropRef: n,
        activatorRef: a,
        dropVisible: i,
        handleDropOpened: () => {
          if (n.current) {
            n.current.addEventListener("mouseleave", o);
          }
        },
        handleMouseLeave: o,
        handleDropClosed: () => {
          if (n.current) {
            n.current.removeEventListener("mouseleave", o);
          }
        },
        handleMouseEnter: () => {
          if (e && !s) {
            r(true);
          }
        }
      };
    };
    const yh = "employer.index.balanceWidget.addButton.aria-label";
    const gh = ({
      title: e,
      children: n,
      rightContent: a,
      isWarning: t,
      addUrl: s,
      trls: i,
      type: r,
      hoverContent: o,
      showBadge: l,
      onPlusClick: c,
      dataQa: d = "balance-card",
      addBtnDataQa: m = "balance-card-add"
    }) => {
      const {
        dropVisible: p,
        dropRef: h,
        handleDropOpened: x,
        handleDropClosed: g,
        handleMouseEnter: b,
        handleMouseLeave: f,
        activatorRef: _
      } = xh(!!o);
      let S = (0, N.jsxs)("div", {
        className: oh,
        children: [(0, N.jsxs)("div", {
          children: [(0, N.jsx)(j.x, {
            typography: "label-3-regular",
            style: t ? "contrast" : "secondary",
            children: e
          }), (0, N.jsx)(v.X, {
            default: 4
          }), (0, N.jsxs)("div", {
            className: lh,
            children: [n, l && (0, N.jsx)("div", {
              className: ch,
              children: (0, N.jsx)(Fu.C, {
                size: "extra-small",
                style: "attention"
              })
            })]
          })]
        }), a]
      });
      if (s) {
        S = (0, N.jsxs)("div", {
          className: oh,
          children: [(0, N.jsxs)("div", {
            children: [(0, N.jsx)(j.x, {
              typography: "label-3-regular",
              style: t ? "contrast" : "secondary",
              children: e
            }), (0, N.jsx)(v.X, {
              default: 4
            }), n]
          }), (0, N.jsx)(y.z, {
            hideLabel: true,
            style: "neutral",
            icon: (0, N.jsx)(en.CmA, {}),
            mode: "secondary",
            size: "medium",
            "aria-label": i[yh],
            Element: u.SPALink,
            to: s,
            onClick: c,
            "data-qa": m
          })]
        });
      }
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)("div", {
          className: ge()({
            [dh]: r === "default",
            [mh]: p
          }),
          onMouseEnter: b,
          onMouseLeave: f,
          children: (0, N.jsx)(Y.Z, {
            ref: _,
            "data-qa": d,
            verticalStretched: true,
            hoverStyle: o ? "secondary" : undefined,
            stretched: true,
            style: p ? "secondary" : t ? "warning" : undefined,
            ...(() => {
              switch (r) {
                case "pinned":
                  return {
                    borderWidth: "none",
                    padding: 12,
                    borderRadius: 0
                  };
                case "drop":
                  return {
                    borderWidth: "none",
                    padding: 24,
                    borderRadius: 0
                  };
                case "combined":
                  return {
                    padding: 0,
                    borderRadius: 0,
                    style: "transparent"
                  };
                default:
                  return {
                    borderWidth: "default",
                    padding: 24,
                    borderRadius: 24
                  };
              }
            })(),
            hoverEnabled: !!o,
            children: S
          })
        }), o && (0, N.jsx)(hh, {
          onApper: x,
          onBeforeExit: g,
          activatorRef: _,
          visible: p,
          ref: h,
          children: o
        })]
      });
    };
    gh.displayName = "EmployerBalanceWidget/BalanceCard/index/BalanceCard";
    const vh = (0, f.x)(gh);
    var bh = a(720278);
    var jh = a(48987);
    var fh = a(924135);
    var _h = a(888586);
    const Sh = {
      clickme: "employer.index.balanceWidget.clickme.title",
      topSearch: "employer.index.balanceWidget.topSearch.title"
    };
    const Ch = "employer.index.balanceWidget.clickme.title.fewCabinets";
    const kh = {
      one: "employer.index.balanceWidget.clickme.cabinet.one",
      some: "employer.index.balanceWidget.clickme.cabinet.some",
      many: "employer.index.balanceWidget.clickme.cabinet.many"
    };
    const wh = ({
      trls: e
    }) => {
      var n;
      var t;
      const [s, i, r] = (0, fh.m)(false);
      const o = (0, _.v)(({
        employerIndexPage: e
      }) => e);
      const l = o == null || (n = o.oldEmployer) === null || n === undefined || (n = n.billingSummary) === null || n === undefined ? undefined : n.currency;
      const {
        realBalance: c,
        reservedBalance: p,
        isDepositRequired: h,
        totalRealBalance: x,
        mainAccountId: g,
        cabinetsCount: v,
        hasAnyCabinetsWithMoney: b
      } = (o == null || (t = o.oldEmployer) === null || t === undefined ? undefined : t.clickme) ?? {};
      const f = v === 1 && !b;
      const S = (0, jh.Xf)();
      const C = {
        card: "clickme_balance",
        hasMoney: !!c,
        cabinets: v,
        buttonType: f ? "balance_topup" : "balance_info"
      };
      const k = () => {
        const e = f ? "balance_widget_card_plus_click" : "balance_widget_card_click";
        m().sendHHEventButtonClick(e, C);
        if (f) {
          i();
        }
      };
      const w = (0, N.jsx)(vh, {
        type: "drop",
        rightContent: f ? (0, N.jsx)(y.z, {
          hideLabel: true,
          style: "neutral",
          icon: (0, N.jsx)(en.CmA, {}),
          mode: "secondary",
          size: "medium",
          onClick: k
        }) : (0, N.jsx)(en.ntv, {
          initialColor: "secondary"
        }),
        title: v && v !== 1 ? (0, Z.WU)(e[Ch], {
          "{0}": (0, N.jsx)(Zn.q, {
            hasValue: true,
            one: e[kh.one],
            some: e[kh.many],
            many: e[kh.some],
            value: v
          })
        }) : S ? e[Sh.clickme] : e[Sh.topSearch],
        showBadge: h,
        dataQa: "balance-card-clickme",
        children: (0, N.jsx)(j.x, {
          typography: "subtitle-1-semibold",
          "data-qa": "balance-card-clickme-value",
          children: l && (0, sh.isNumber)(x) && (0, N.jsx)(bh.Z, {
            inCents: l === _h.V.BYR,
            currency: l,
            render: (e, n) => (0, N.jsxs)(N.Fragment, {
              children: [e, er.qD, n]
            }),
            children: x
          })
        })
      });
      return (0, N.jsxs)(d.ElementShownAnchor, {
        fn: m().sendHHEventElementShown,
        name: "balance_widget_card",
        ...C,
        badge: h,
        children: [f ? w : (0, N.jsx)(u.SPALink, {
          "data-qa": b ? "clickme_balance_link" : "price-clickme-products",
          onClick: k,
          to: b ? nn.Z.accountHistory : nn.Z.priceClickmeProducts,
          target: "_blank",
          children: w
        }), f && (0, N.jsx)(ih.s, {
          visible: s,
          onClose: r,
          accountId: g ?? null,
          currency: l || _h.V.RUR,
          accountBalances: {
            realBalance: c ?? 0,
            reservedBalance: p ?? 0
          }
        })]
      });
    };
    wh.displayName = "cards/ClickmeBalanceCard/index/ClickmeBalanceCard";
    const Nh = (0, f.x)(wh);
    const Eh = "employer.index.balanceWidget.balance.title";
    const Ah = "zarplata.employer.balance.reserved";
    const Rh = ({
      trls: e,
      showPlusButton: n
    }) => {
      var a;
      var t;
      const s = (0, _.v)(e => e.employerIndexPage);
      const i = s == null || (a = s.oldEmployer) === null || a === undefined ? undefined : a.billingSummary;
      const r = s == null || (t = s.oldEmployer) === null || t === undefined ? undefined : t.hasPaymentFeature;
      const o = !i || i.availableWithoutBlockedMoney === 0;
      const l = {
        card: "main_balance",
        hasMoney: i != null && !!i.availableWithoutBlockedMoney
      };
      const c = r && n ? nn.Z.employerInvoicePayment : undefined;
      return (0, N.jsx)(d.ElementShownAnchor, {
        fn: m().sendHHEventElementShown,
        name: "balance_widget_card",
        ...l,
        children: (0, N.jsx)(vh, {
          type: "pinned",
          rightContent: (0, N.jsx)(en.IMe, {
            initialColor: "secondary"
          }),
          title: e[Eh],
          onPlusClick: () => {
            m().sendHHEventButtonClick("balance_widget_card_plus_click", l);
          },
          addUrl: c,
          dataQa: "balance-card-main",
          addBtnDataQa: "balance-card-main-add",
          children: (0, N.jsx)(u.SPALink, {
            "data-qa": "main_balance_link",
            onClick: () => {
              const e = o ? "balance_widget_card_plus_click" : "balance_widget_card_click";
              m().sendHHEventButtonClick(e, l);
            },
            to: nn.Z.accountHistory,
            children: (0, N.jsxs)("div", {
              children: [(0, N.jsx)(j.x, {
                typography: "subtitle-1-semibold",
                "data-qa": "main_balance_value",
                children: i != null && i.currency ? (0, N.jsx)(bh.Z, {
                  currency: i.currency,
                  children: i.availableWithoutBlockedMoney
                }) : 0
              }), (i == null ? undefined : i.currency) && i != null && !!i.zpAccountBalance && (0, N.jsxs)(N.Fragment, {
                children: [(0, N.jsx)(v.X, {
                  default: 4
                }), (0, N.jsx)(j.x, {
                  style: "secondary",
                  typography: "label-3-regular",
                  children: e[Ah]
                }), (0, N.jsx)(v.X, {
                  default: 4
                }), (0, N.jsx)(j.x, {
                  typography: "subtitle-1-semibold",
                  children: (0, N.jsx)(bh.Z, {
                    currency: i.currency,
                    children: i.zpAccountBalance
                  })
                })]
              })]
            })
          })
        })
      });
    };
    Rh.displayName = "cards/MainBalanceCard/index/MainBalanceCard";
    const Ph = (0, f.x)(Rh);
    const Th = "employer.index.balanceWidget.pfpBalance.title";
    const Ih = ({
      trls: e,
      pfpBalanceWarning: n
    }) => {
      var a;
      const t = (a = (0, _.v)(e => e.employerIndexPage).oldEmployer) === null || a === undefined || (a = a.pfpInfo) === null || a === undefined || (a = a.pfpDetails) === null || a === undefined || (a = a.balance) === null || a === undefined ? undefined : a.value;
      const s = typeof t != "number" || t === 0;
      const i = {
        card: "pfp_balance",
        hasMoney: !!t
      };
      const r = () => {
        const e = s ? "balance_widget_card_plus_click" : "balance_widget_card_click";
        m().sendHHEventButtonClick(e, i);
      };
      let o = "primary";
      if (n === Wu.J.LowBalance) {
        o = "warning";
      } else if (n === Wu.J.ZeroBalance) {
        o = "negative";
      }
      const l = (0, N.jsx)(vh, {
        addUrl: s ? nn.Z.pricePayForPerformance : undefined,
        type: "drop",
        rightContent: (0, N.jsx)(en.ntv, {
          initialColor: "secondary"
        }),
        title: e[Th],
        onPlusClick: r,
        dataQa: "balance-card-pfp",
        addBtnDataQa: "balance-card-pfp-add",
        children: (0, N.jsx)(j.x, {
          style: o,
          typography: "subtitle-1-semibold",
          "data-qa": "balance-card-pfp-value",
          children: (0, N.jsx)(bh.Z, {
            currency: _h.V.RUR,
            children: t || 0
          })
        })
      });
      return (0, N.jsx)(d.ElementShownAnchor, {
        fn: m().sendHHEventElementShown,
        name: "balance_widget_card",
        ...i,
        children: s ? l : (0, N.jsx)(u.SPALink, {
          "data-qa": "pfp_balance_link",
          onClick: r,
          to: nn.Z.accountHistory,
          children: l
        })
      });
    };
    Ih.displayName = "cards/PfpBalanceCard/index/PfpBalanceCard";
    const Lh = (0, f.x)(Ih);
    var Wh = a(709768);
    var Bh = a(738379);
    var Mh = a(485307);
    var Vh = a(604897);
    var Dh = a(930884);
    var Fh = a(799816);
    var Hh = a(580473);
    var qh = a(487761);
    var Uh = a(15055);
    var Xh = a(957806);
    const zh = ({
      item: e,
      countryId: n
    }) => {
      const t = (0, Mh.E)(e);
      return (0, N.jsxs)("div", {
        children: [(0, N.jsx)(j.x, {
          "data-qa": "price-purchased-item-regions",
          typography: "label-3-regular",
          style: "secondary",
          children: (0, N.jsx)(Xh.Z, {
            item: e
          })
        }), (0, N.jsx)(j.x, {
          "data-qa": "price-purchased-item-profareas",
          typography: "label-3-regular",
          style: "secondary",
          children: (0, N.jsx)(Uh.T, {
            item: e
          })
        }), (0, N.jsx)(Fh.W, {
          item: e
        }), (0, N.jsx)(qh.Y, {
          item: e,
          countryId: n
        }), t && !(0, Dh.Wi)(e.warning) && (0, N.jsx)(j.x, {
          typography: "label-3-regular",
          style: "secondary",
          children: (0, N.jsx)(Hh.i, {
            date: t
          })
        }), e.warning && (0, N.jsx)(Vh.e, {
          warning: e.warning,
          count: parseInt(e.count ?? "0", 10),
          expirationDate: t
        })]
      });
    };
    zh.displayName = "components/ServiceItemDescription/PublicationServiceDescription/PublicationServiceItemDescription";
    var Oh = a(20805);
    var Zh = a(486010);
    var Yh = a(597787);
    var Gh = a(545182);
    var $h = a(213889);
    const Qh = "container--DxEWZZuJ9wiVkueD";
    const Jh = "item--s3XUM1ZZTcYjRBob";
    const Kh = "item-row--EkkTuPT3ocAy31Mg";
    const ex = "publications-count--gjmC5i5KyQEKWXsI";
    const nx = () => {
      const e = (0, _.v)(({
        employerIndexPage: e
      }) => e);
      const n = (0, _.v)(({
        employerIndexPagePublicationsWidgetItems: e
      }) => e);
      (0, Yh.WU)(n.some(e => e.code === Gh.IG.FreeRegionalVacancy));
      const a = (e, n) => {
        const {
          code: a,
          count: t,
          reservedCount: s,
          serviceEntryTrl: i
        } = e;
        if (a === Gh.IG.FreeRegionalVacancy && t && parseInt(t, 10) === 0 && (0, $h.d)(n)) {
          return null;
        } else {
          return (0, N.jsx)("div", {
            className: Jh,
            "data-qa": `purchased-service-${a}`,
            children: (0, N.jsxs)("div", {
              className: Kh,
              children: [(0, N.jsxs)("div", {
                children: [(0, N.jsx)(j.x, {
                  typography: "label-2-regular",
                  "data-qa": `purchased-service-${a}-title`,
                  children: i
                }), (0, N.jsx)(v.X, {
                  default: 4
                }), (0, N.jsx)("div", {
                  className: Kh,
                  children: (0, N.jsx)(zh, {
                    item: e,
                    countryId: n
                  })
                })]
              }), (0, N.jsx)(Oh.o, {
                count: (0, N.jsx)(j.x, {
                  typography: "label-2-regular",
                  "data-qa": `purchased-service-${a}-count`,
                  children: (0, Xs.uf)(t)
                }),
                reservedCount: s && (0, N.jsx)(Zh.x, {
                  typography: "label-3-regular",
                  width: "fit-content",
                  children: (0, Xs.uf)(s)
                })
              })]
            })
          });
        }
      };
      if (e.oldEmployer) {
        const {
          countryId: s
        } = e.oldEmployer.employer;
        return (0, N.jsx)("div", {
          className: Qh,
          children: n.map((e, n) => (0, N.jsxs)(t.Fragment, {
            children: [n !== 0 && (0, N.jsx)(Nl.i, {
              marginTop: 24,
              marginBottom: 24
            }), a(e, s)]
          }, n))
        });
      }
      return null;
    };
    nx.displayName = "cards/PublicationsCard/PublicationsHoverContent/PublicationsHoverContent";
    const ax = ({
      trls: e
    }) => {
      var n;
      var a;
      const s = (0, Se.$w)();
      const i = (0, _.v)(({
        employerIndexPage: e
      }) => e);
      const r = (0, _.v)(({
        employerIndexPagePublicationsWidgetItems: e
      }) => e);
      const {
        title: o,
        text: l,
        vacanciesCount: c
      } = (0, Wh.H)({
        serviceCategories: i == null || (n = i.oldEmployer) === null || n === undefined || (n = n.billingSummary) === null || n === undefined ? undefined : n.serviceCategories,
        vacanciesQuotas: i == null || (a = i.oldEmployer) === null || a === undefined || (a = a.quotas) === null || a === undefined ? undefined : a.vacanciesQuotas,
        trls: e
      });
      const p = c === 0 || !c;
      const h = s ? nn.Z.priceZpPublications : nn.Z.priceRegionalPublications;
      const x = (0, t.useMemo)(() => r.some(Mh.U), [r]);
      const y = {
        card: "publications_balance",
        vacancies: c || 0
      };
      const g = () => {
        const e = p ? "balance_widget_card_plus_click" : "balance_widget_card_click";
        m().sendHHEventButtonClick(e, y);
      };
      const v = (0, N.jsx)(vh, {
        showBadge: x,
        addUrl: p ? h : undefined,
        type: "default",
        rightContent: (0, N.jsx)(en.txp, {
          initialColor: "secondary"
        }),
        hoverContent: p ? null : (0, N.jsx)(nx, {}),
        title: o,
        onPlusClick: g,
        dataQa: "balance-card-publications",
        addBtnDataQa: "balance-card-publications-add",
        children: (0, N.jsx)(j.x, {
          "data-qa": "publications-balance",
          typography: "subtitle-1-semibold",
          children: (0, N.jsx)("div", {
            className: ex,
            children: l
          })
        })
      });
      return (0, N.jsx)(d.ElementShownAnchor, {
        fn: m().sendHHEventElementShown,
        name: "balance_widget_card",
        ...y,
        children: p ? v : (0, N.jsx)(u.SPALink, {
          "data-qa": "publications_balance_link",
          onClick: g,
          to: `${nn.Z.accountHistoryMoney}#${Bh.i.PublicationsWidget}`,
          children: v
        })
      });
    };
    ax.displayName = "cards/PublicationsCard/index/PublicationsCard";
    const tx = (0, f.x)(ax);
    var sx = a(646753);
    var ix = a(839936);
    var rx = a(776319);
    var ox = a(623855);
    const lx = [Gh.Fb.Disposable, ...Gh._k];
    const cx = [Gh.Fb.ContactsViewWithStandart, Gh.Fb.Bundle];
    const dx = () => {
      const e = (0, _.v)(({
        employerIndexPage: e
      }) => e);
      if (e.oldEmployer) {
        const {
          serviceDescription: n
        } = e.oldEmployer.employer;
        return (e => {
          const n = e => {
            const n = (0, Mh.E)(e);
            if (n) {
              return (0, ox.Z)(n).getTime();
            } else {
              return Number.MAX_SAFE_INTEGER;
            }
          };
          return e.sort((e, a) => n(e) - n(a));
        })(n.filter(e => cx.includes(e.code) || lx.includes(e.code) && typeof e.civBalance == "number" && e.civBalance >= 0 && e.temporalCiv));
      }
      return [];
    };
    const mx = "cards-separator--OckaA2c7VUI7lK2V";
    const px = "card-container-with-hover-drop--XSKmjXTW4igl2BFS";
    const ux = "container--IZltrwfGYIQt084K";
    const hx = "item--ftVj6VqtJ7Uf4aw4";
    const xx = {
      buy: "index.employer.billing.buy",
      resumeAccess: "index.employer.billing.resumeAccess",
      [Gh.Fb.Reservation]: "employer.accountHistory.availableServices.RESERVATION.CIV",
      [Gh.Fb.Add]: "employer.accountHistory.availableServices.ADD.CIV",
      areaAll: "employer.price.area.all",
      allProfRoleGroups: "billing_professional_role_group.0",
      balanceEmpty: "employer.service.balance.empty",
      serviceBalance: "employer.index.balanceWidget.service.balance",
      expiresSoon: "index.employer.billing.expiresSoon",
      expires: "index.employer.billing.expires",
      expiresTime: "employer.index.balanceWidget.resumeAccess.expires.time",
      activeSins: "price.already-purchased.active-sins",
      contactOpening: {
        some: "employer.service.contact.opening.some",
        one: "employer.service.contact.opening.one",
        many: "employer.service.contact.opening.many"
      }
    };
    const yx = ({
      trls: e
    }) => {
      const n = (0, _.v)(({
        employerIndexPage: e
      }) => e);
      const a = dx();
      const s = n => {
        const {
          civBalance: a
        } = n;
        if (a == null) {
          return null;
        }
        let t;
        t = a === 0 ? (0, Z.WU)(e[xx.balanceEmpty], {
          "{0}": e[xx.contactOpening.some]
        }) : (0, N.jsx)(Zn.q, {
          one: e[xx.contactOpening.one],
          some: e[xx.contactOpening.some],
          many: e[xx.contactOpening.many],
          value: a,
          hasValue: false,
          format: n => (0, Z.WU)(e[xx.serviceBalance], {
            "{0}": a,
            "{1}": n
          })
        });
        return (0, N.jsx)(j.x, {
          typography: "label-3-regular",
          style: "secondary",
          children: t
        });
      };
      const i = n => {
        const {
          status: a,
          expirationTime: t,
          activationTime: s
        } = n;
        if (a === "active") {
          return (e => {
            const {
              expirationTime: n,
              warning: a
            } = e;
            if ((0, Dh.Wi)(a)) {
              return (0, N.jsx)(ix.F, {
                warning: a,
                expirationDate: n.date
              });
            } else {
              return (0, N.jsx)(j.x, {
                typography: "label-3-regular",
                style: "secondary",
                children: (0, N.jsx)(Hh.i, {
                  date: n.date
                })
              });
            }
          })(n);
        } else if (a === "future") {
          return ((n, a) => (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(j.x, {
              typography: "label-3-regular",
              style: "secondary",
              children: (0, N.jsx)(Hh.i, {
                prefix: e[xx.activeSins],
                date: a.date
              })
            }), (0, N.jsx)(j.x, {
              typography: "label-3-regular",
              style: "secondary",
              children: n && (0, N.jsx)(Hh.i, {
                date: n.date
              })
            })]
          }))(t, s);
        } else {
          return null;
        }
      };
      if (n.oldEmployer) {
        return (0, N.jsx)("div", {
          className: ux,
          children: a.map((n, a) => {
            return (0, N.jsxs)(t.Fragment, {
              children: [a !== 0 && (0, N.jsx)(Nl.i, {
                marginTop: 24,
                marginBottom: 24
              }), (r = n, (0, N.jsxs)("div", {
                "data-qa": `purchased-service-${r.code}`,
                className: hx,
                children: [(0, N.jsx)(j.x, {
                  typography: "subtitle-1-semibold",
                  children: r.availableServicesTrl
                }), (0, N.jsx)(v.X, {
                  default: 8
                }), (0, N.jsx)(j.x, {
                  typography: "label-2-regular",
                  children: (0, rx.f)(r.priceAreaTrl, e[xx.areaAll])
                }), (0, N.jsx)(j.x, {
                  typography: "label-2-regular",
                  children: (0, rx.f)(r.profRoleGroupIdsTrl ? r.profRoleGroupIdsTrl : r.professionIdsTrl, e[xx.allProfRoleGroups])
                }), (0, N.jsx)(v.X, {
                  default: 8
                }), s(r), i(r)]
              }))]
            }, a);
            var r;
          })
        });
      } else {
        return null;
      }
    };
    yx.displayName = "cards/ResumeAccessContacts/ResumeAccessHoverContent/ResumeAccessHoverContentComponent";
    const gx = (0, f.x)(yx);
    var vx = a(767803);
    const bx = e => {
      if (e.status === "active") {
        return (0, vx.Z)(new Date(e.expirationTime.date), new Date()) <= 2;
      }
      return false;
    };
    const jx = "employer.index.balanceWidget.resumeAccess.title";
    const fx = "employer.index.balanceWidget.resumeAccess.empty";
    const _x = {
      one: "index.employer.billing.days.one",
      some: "index.employer.billing.days.some",
      many: "index.employer.billing.days.many"
    };
    const Sx = ({
      trls: e
    }) => {
      var n;
      var a;
      var s;
      const i = (0, _.v)(({
        employerIndexPage: e
      }) => e);
      const r = (0, Se.$w)();
      const o = dx();
      const l = ((n = i.oldEmployer) === null || n === undefined || (n = n.billingSummary) === null || n === undefined || (n = n.serviceCategories) === null || n === undefined ? undefined : n.resumeAccessCodes) || {};
      const c = !l.count && !l.remainingDays;
      const p = r ? nn.Z.priceZpResumeAccess : nn.Z.priceDBAccess;
      const h = r ? nn.Z.priceZpResumeAccess : nn.Z.priceAddContacts;
      const x = (0, t.useMemo)(() => o.some(bx), [o]);
      const y = c ? null : (0, N.jsx)(gx, {});
      const {
        handleDropClosed: g,
        handleDropOpened: b,
        dropRef: f,
        handleMouseLeave: S,
        handleMouseEnter: C,
        dropVisible: k,
        activatorRef: w
      } = xh(!!y);
      const E = {
        card: "resume_access_balance",
        remainingDays: l.remainingDays,
        resumes: l.count || 0
      };
      const A = () => {
        const e = c ? "balance_widget_card_plus_click" : "balance_widget_card_click";
        m().sendHHEventButtonClick(e, E);
      };
      const {
        title: R,
        text: P
      } = (0, sx._)({
        serviceDescription: i == null || (a = i.oldEmployer) === null || a === undefined || (a = a.employer) === null || a === undefined ? undefined : a.serviceDescription,
        contactsQuotas: i == null || (s = i.oldEmployer) === null || s === undefined || (s = s.quotas) === null || s === undefined ? undefined : s.contactsQuotas,
        trls: e
      });
      const T = (0, t.useMemo)(() => c ? e[fx] : typeof l.remainingDays == "number" && l.remainingDays > 0 && x ? (0, N.jsx)(Zn.q, {
        hasValue: true,
        one: e[_x.one],
        some: e[_x.many],
        many: e[_x.some],
        value: l.remainingDays
      }) : (0, Xs.uf)((l == null ? undefined : l.count) || 1), [l == null ? undefined : l.count, l.remainingDays, c, x, e]);
      const I = (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)("div", {
          className: ge()({
            [px]: k
          }),
          onMouseEnter: C,
          onMouseLeave: S,
          children: (0, N.jsxs)(Y.Z, {
            style: k ? "secondary" : undefined,
            "data-qa": "balance-card-combined",
            hoverStyle: y ? "secondary" : undefined,
            ref: w,
            padding: 24,
            borderWidth: "default",
            borderRadius: 24,
            stretched: true,
            children: [(0, N.jsx)(vh, {
              showBadge: x,
              addUrl: c ? p : undefined,
              type: "combined",
              rightContent: (0, N.jsx)(en.QrN, {
                initialColor: "secondary"
              }),
              title: e[jx],
              onPlusClick: A,
              dataQa: "balance-card-resume-access",
              addBtnDataQa: "balance-card-resume-access-add",
              children: (0, N.jsx)(j.x, {
                typography: "subtitle-1-semibold",
                "data-qa": "balance-card-resume-access-value",
                children: T
              })
            }), (0, N.jsx)("div", {
              className: mx
            }), (0, N.jsx)(v.X, {
              default: 28
            }), (0, N.jsx)(vh, {
              addUrl: c ? h : undefined,
              type: "combined",
              rightContent: (0, N.jsx)(en.QUo, {
                initialColor: "secondary"
              }),
              title: R,
              onPlusClick: A,
              dataQa: "balance-card-contacts",
              addBtnDataQa: "balance-card-contacts-add",
              children: (0, N.jsx)(j.x, {
                typography: "subtitle-1-semibold",
                "data-qa": "balance-card-contacts-value",
                children: P
              })
            })]
          })
        }), y && (0, N.jsx)(hh, {
          onApper: b,
          onBeforeExit: g,
          activatorRef: w,
          visible: k,
          ref: f,
          children: y
        })]
      });
      return (0, N.jsx)(d.ElementShownAnchor, {
        fn: m().sendHHEventElementShown,
        name: "balance_widget_card",
        ...E,
        children: c ? I : (0, N.jsx)(u.SPALink, {
          "data-qa": "resume_access_balance_link",
          onClick: A,
          to: `${nn.Z.accountHistoryMoney}#${Bh.i.ResumeAccessWidget}`,
          children: I
        })
      });
    };
    Sx.displayName = "cards/ResumeAccessContacts/index/ResumeAccessContacts";
    const Cx = (0, f.x)(Sx);
    const kx = () => {
      const e = (0, Se.$w)();
      const n = (0, _.v)(e => {
        var n;
        if ((n = e.employerIndexPage) === null || n === undefined || (n = n.oldEmployer) === null || n === undefined || (n = n.employer) === null || n === undefined) {
          return undefined;
        } else {
          return n.serviceDescription;
        }
      });
      if (n != null && n.length && e) {
        return n.filter(e => e.code === Gh.IG.OptionPremium);
      } else {
        return [];
      }
    };
    const wx = "container--VoMEqWgY8EYNZ0fG";
    const Nx = "item--FQAA3wSO4H4gV8TZ";
    const Ex = "item-row--pu35UcQIa4b7IPk2";
    const Ax = () => {
      const e = kx();
      const n = e => {
        const {
          code: n,
          count: a,
          tariffNameTrl: t,
          availableServicesTrl: s
        } = e;
        return (0, N.jsxs)("div", {
          className: Nx,
          "data-qa": `purchased-service-${n}`,
          children: [(0, N.jsxs)("div", {
            className: Ex,
            children: [(0, N.jsx)(j.x, {
              typography: "label-2-regular",
              children: t || s
            }), (0, N.jsx)(j.x, {
              typography: "label-2-regular",
              children: a
            })]
          }), (0, N.jsx)(v.X, {
            default: 8
          }), (0, N.jsx)(j.x, {
            "data-qa": "price-purchased-item-regions",
            typography: "label-3-regular",
            style: "secondary",
            children: (0, N.jsx)(Xh.Z, {
              item: e
            })
          }), (0, N.jsx)(j.x, {
            "data-qa": "price-purchased-item-profareas",
            typography: "label-3-regular",
            style: "secondary",
            children: (0, N.jsx)(Uh.T, {
              item: e
            })
          })]
        });
      };
      if (e.length) {
        return (0, N.jsx)("div", {
          className: wx,
          children: e.map((e, a) => (0, N.jsxs)(t.Fragment, {
            children: [a !== 0 && (0, N.jsx)(Nl.i, {
              marginTop: 24,
              marginBottom: 24
            }), n(e)]
          }, a))
        });
      } else {
        return null;
      }
    };
    Ax.displayName = "cards/ServicesCard/ServicesHoverContent/ServicesHoverContent";
    const Rx = (0, f.x)(Ax);
    const Px = "employer.index.balanceWidget.services.title";
    const Tx = "employer.index.balanceWidget.zp.services.title";
    const Ix = "employer.index.balanceWidget.services.waitForActivation";
    const Lx = "employer.index.balanceWidget.services.waitForPayment";
    const Wx = "employer.index.balanceWidget.services.hasActive";
    const Bx = "employer.index.balanceWidget.services.notActive";
    const Mx = "employer.index.balanceWidget.services.waitForPayment.tooltip";
    const Vx = ({
      trls: e
    }) => {
      var n;
      var a;
      var s;
      const i = (0, Se.$w)();
      const r = (0, t.useRef)(null);
      const o = (0, _.v)(({
        employerIndexPage: e
      }) => e);
      const l = kx();
      const c = o == null || (n = o.oldEmployer) === null || n === undefined ? undefined : n.services;
      const p = o == null || (a = o.oldEmployer) === null || a === undefined ? undefined : a.canBuyServices;
      const h = c != null && !!c.waitForActivationCount;
      const x = c != null && !!c.waitForPaymentCount;
      const y = (s = o.oldEmployer) !== null && s !== undefined && (s = s.employer.serviceDescription) !== null && s !== undefined && !!s.length;
      const g = x || h;
      let v = Bx;
      let b = "";
      let f = true;
      if (h) {
        v = Ix;
        b = nn.Z.employerCarts;
        f = false;
      } else if (x) {
        v = Lx;
        b = nn.Z.employerUnpaidCarts;
        f = false;
      } else if (y) {
        v = Wx;
        b = nn.Z.accountHistoryServices;
        f = false;
      }
      const S = {
        card: "services_balance",
        waitForActivation: h,
        waitForPayment: x,
        hasActive: y
      };
      const C = () => {
        const e = f ? "balance_widget_card_plus_click" : "balance_widget_card_click";
        m().sendHHEventButtonClick(e, S);
      };
      const k = l.length && y && !h && !x;
      const w = (0, N.jsx)(vh, {
        addUrl: f ? nn.Z.priceBranding : undefined,
        type: "default",
        hoverContent: k ? (0, N.jsx)(Rx, {}) : null,
        isWarning: g,
        onPlusClick: C,
        rightContent: g ? (0, N.jsx)(en.l5_, {
          initialColor: "contrast"
        }) : (0, N.jsx)(en.OCY, {
          initialColor: "secondary"
        }),
        title: e[i ? Tx : Px],
        dataQa: "balance-card-services",
        addBtnDataQa: "balance-card-services-add",
        children: (0, N.jsx)(j.x, {
          "data-qa": "balance-card-services-status",
          style: g ? "contrast" : undefined,
          typography: "subtitle-1-semibold",
          children: e[v]
        })
      });
      if (p || !x && !h) {
        return (0, N.jsx)(d.ElementShownAnchor, {
          fn: m().sendHHEventElementShown,
          name: "balance_widget_card",
          card: "services_balance",
          waitForActivation: h,
          waitForPayment: x,
          hasActive: y,
          children: f ? w : (0, N.jsxs)(u.SPALink, {
            "data-qa": "services_balance_link",
            onClick: C,
            ref: r,
            to: b,
            children: [w, x && !h ? (0, N.jsx)(In.p, {
              size: "medium",
              activatorRef: r,
              placement: "right-center",
              children: e[Mx]
            }) : null]
          })
        });
      } else {
        return null;
      }
    };
    Vx.displayName = "cards/ServicesCard/index/ServicesCard";
    const Dx = (0, f.x)(Vx);
    const Fx = "cards--eA4kGQN320W94ze5";
    const Hx = () => {
      const s = (0, _.v)(e => e.employerIndexPage);
      const i = (0, _.v)(e => e.isHiringManager);
      const r = s.oldEmployer?.pfpInfo;
      const o = s.oldEmployer?.havePfpVacancies;
      const l = s.oldEmployer?.clickme;
      const c = r && o ? (0, Wu.r)(r) : null;
      const d = l == null ? undefined : l.isDepositRequired;
      const [p, u] = (0, t.useState)(true);
      const h = (0, t.useMemo)(() => {
        const e = [];
        if ((r == null ? undefined : r.pfpStatus) === Bu.Ts.Enabled) {
          e.push((0, N.jsx)(Lh, {
            pfpBalanceWarning: c
          }, "pfp"));
        }
        if (l != null && l.shouldShow) {
          e.push((0, N.jsx)(Nh, {}, "clickme"));
        }
        return e;
      }, [r, l == null ? undefined : l.shouldShow, c]);
      const x = (0, _.v)(({
        churnEmployer: e
      }) => e.isChurn);
      if (i) {
        return (0, N.jsxs)("div", {
          className: Fx,
          children: [(0, N.jsx)(Cx, {}), (0, N.jsx)(Dx, {})]
        });
      } else {
        return (0, N.jsxs)(th, {
          isCollapsed: p,
          hasProblem: !!c || !!d,
          onCollapsedToggle: () => {
            m().sendHHEventButtonClick("balance_widget_collapse_button", {
              isOpen: p
            });
            u(e => !e);
          },
          mainCard: (0, N.jsx)(Ph, {
            showPlusButton: h.length > 0
          }),
          dropCardsCount: h.length,
          collapsedCards: (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(tx, {}), (0, N.jsx)(Cx, {}), !x && (0, N.jsx)(Dx, {})]
          }),
          children: [(0, N.jsx)(Nl.i, {
            marginTop: 24,
            marginBottom: 4
          }), h.map((e, n) => (0, N.jsxs)(t.Fragment, {
            children: [e, n !== h.length - 1 && (0, N.jsx)(Nl.i, {
              marginTop: 4,
              marginBottom: 4
            })]
          }, n)), (0, N.jsx)(v.X, {
            default: 4
          })]
        });
      }
    };
    Hx.displayName = "components/EmployerBalanceWidget/index/EmployerBalanceWidget";
    const qx = Hx;
    var Ux = a(372490);
    var Xx = a.n(Ux);
    var zx = a(76093);
    var Ox = a(598175);
    var Zx = a(748156);
    var Yx = a(349887);
    var Gx = a.n(Yx);
    var $x = a(997929);
    var Qx = a(437955);
    var Jx = a(614034);
    const Kx = "header--IGrr5XrbUM0zWx0U";
    const ey = "not-found--vuqdtkkYXGMk0nVk";
    const ny = "not-found-icon--OIvoAQY1Gl8X5as1";
    const ay = "loader-container--_XGsdTmSE0kDDPSB";
    const ty = "loader--C28XG12XqAGX8B7a";
    const sy = "host-text--u8ktYAl4vnMeh_Tz";
    const iy = () => (0, N.jsxs)("div", {
      className: ay,
      children: [(0, N.jsx)(v.X, {
        xs: 64,
        s: 64,
        default: 80
      }), (0, N.jsx)("div", {
        className: ty,
        children: (0, N.jsx)(Jx.a, {})
      }), (0, N.jsx)(v.X, {
        xs: 64,
        s: 64,
        default: 80
      })]
    });
    iy.displayName = "EmployerSearchWidget/GeoSwitcherPopup/GeoSwitcherPopupLoader/GeoSwitcherPopupLoader";
    var ry = a(280347);
    var oy = a.n(ry);
    var ly = a(946550);
    var cy = a(838244);
    const dy = "geoSwitcher.popup.search.notFound.title";
    const my = "geoSwitcher.popup.search.notFound.description";
    const py = "geoSwitcher.popup.popular.title";
    const uy = ({
      items: e,
      trls: n,
      isPopular: a
    }) => {
      const {
        isMobile: s
      } = (0, F.G)();
      const [i, r] = (0, t.useState)(null);
      if (e.length) {
        return (0, N.jsxs)("div", {
          children: [a && (0, N.jsx)(Y.Z, {
            padding: 16,
            children: (0, N.jsx)(j.x, {
              style: "secondary",
              typography: "label-2-regular",
              children: n[py]
            })
          }), (0, N.jsx)(X.z, {
            default: 12,
            xs: 8,
            s: 8,
            children: e.map(e => {
              const {
                name: n,
                href: a,
                region: t,
                topLevelDomain: o,
                isOtherDomain: l
              } = e;
              const c = (e => i ? i === e.name : Boolean(e.isCurrentAreaId))(e);
              const d = (0, N.jsx)(ly.Y, {
                readOnly: true,
                checked: c
              });
              const m = l && (0, N.jsxs)("div", {
                className: sy,
                children: [(0, N.jsx)(en.wkC, {
                  initialColor: "secondary"
                }), (0, N.jsx)(j.x, {
                  "data-qa": "geo-switcher-domain",
                  style: "secondary",
                  typography: "label-3-regular",
                  children: o
                })]
              });
              return (0, N.jsx)(cy.g, {
                onChange: () => (({
                  href: e,
                  name: n,
                  areaId: a
                }) => {
                  const t = e;
                  if (typeof a == "number") {
                    oy()({
                      city_id: a
                    });
                  }
                  window.location.href = t;
                  r(n);
                })(e),
                type: "radio",
                padding: 16,
                borderRadius: 16,
                checked: c,
                children: (0, N.jsxs)(Fe.b, {
                  right: s ? d : m || undefined,
                  left: s ? undefined : d,
                  children: [(0, N.jsx)(qe.j, {
                    "data-qa": "geo-switcher-name",
                    children: n
                  }), t && (0, N.jsx)(qe.j, {
                    "data-qa": "geo-switcher-region",
                    type: "subtitle",
                    children: t
                  }), s && m ? (0, N.jsx)(qe.j, {
                    "data-qa": "geo-switcher-domain",
                    type: "subtitle",
                    children: m
                  }) : null]
                })
              }, `${n}-${a}`);
            })
          })]
        });
      } else {
        return (0, N.jsxs)("div", {
          className: ey,
          children: [(0, N.jsx)(v.X, {
            default: 64,
            xs: 40,
            s: 40
          }), (0, N.jsx)("div", {
            className: ny,
            children: (0, N.jsx)(en.lO1, {
              initialColor: "tertiary"
            })
          }), (0, N.jsx)(v.X, {
            default: 32
          }), (0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            children: n[dy]
          }), (0, N.jsx)(v.X, {
            default: 8
          }), (0, N.jsx)(j.x, {
            style: "secondary",
            typography: "paragraph-2-regular",
            children: n[my]
          }), (0, N.jsx)(v.X, {
            default: 64,
            xs: 40,
            s: 40
          })]
        });
      }
    };
    uy.displayName = "EmployerSearchWidget/GeoSwitcherPopup/GeoSwitcherPopupRegionsList/GeoSwitcherPopupRegionsListComponent";
    const hy = (0, f.x)(uy);
    var xy = a(412303);
    const yy = "geoSwitcher.popup.search.placeholder";
    const gy = ({
      trls: e
    }) => {
      const {
        topLevelDomainsData: n,
        isLoading: a
      } = (() => {
        const [e, n] = (0, t.useState)(true);
        const {
          addNotification: a
        } = (0, qa.lm)();
        const [s, i] = (0, t.useState)(null);
        const r = (0, t.useRef)(null);
        const o = (0, t.useCallback)(async () => {
          let e;
          n(true);
          try {
            e = await C._i.get("/shards/area_switcher/top_level_domains", {
              signal: r.current?.signal,
              params: {
                backUrl: window.location.href,
                forCurrentDomain: true
              }
            });
          } catch (e) {
            (0, Ga.ZP)(e, a);
            return;
          } finally {
            n(false);
          }
          i(e);
        }, [a]);
        (0, t.useEffect)(() => {
          const e = new AbortController();
          r.current = e;
          o();
          return () => e.abort();
        }, [a, o]);
        return {
          isLoading: e,
          topLevelDomainsData: s
        };
      })();
      const {
        handleSearchChange: s,
        search: i,
        searchRegionsData: r,
        lastSearchQuery: o
      } = (() => {
        const [e, n] = (0, t.useState)("");
        const [a, s] = (0, t.useState)("");
        const {
          addNotification: i
        } = (0, qa.lm)();
        const [r, o] = (0, t.useState)(null);
        const l = (0, t.useMemo)(() => (0, xy.D)(async e => {
          try {
            if (e) {
              const n = await C._i.get("/shards/area_switcher/search", {
                params: {
                  backUrl: window.location.href,
                  q: e,
                  enableAnyLocation: true,
                  ignoreRussia: true
                }
              });
              s(e);
              o(n);
            } else {
              o(null);
            }
          } catch (e) {
            (0, Ga.ZP)(e, i);
          }
        }, 300), [i]);
        return {
          handleSearchChange: (0, t.useCallback)(e => {
            n(e);
            l(e);
          }, [l]),
          search: e,
          searchRegionsData: r,
          lastSearchQuery: a
        };
      })();
      const l = (0, t.useRef)(null);
      const {
        isMobile: c
      } = (0, F.G)();
      (0, t.useEffect)(() => {
        var e;
        if (!c) {
          if ((e = l.current) !== null && e !== undefined) {
            e.focus();
          }
        }
      }, [c]);
      const d = (0, t.useMemo)(() => {
        var e;
        var a;
        if (r) {
          return (r == null ? undefined : r.items.map(e => ({
            href: e.href,
            region: e.region,
            name: e.name,
            isOtherDomain: e.isOtherDomain,
            isCurrentAreaId: e.isCurrentAreaId,
            topLevelDomain: e.topLevelDomain,
            areaId: e.areaId,
            hasDomain: e.hasDomain
          }))) || [];
        }
        const t = n == null || (e = n.topLevelDomains) === null || e === undefined ? undefined : e.find(e => e.isCurrentDomain);
        return (t == null || (a = t.subdomains) === null || a === undefined ? undefined : a.map(e => ({
          href: e.href || "",
          name: e.name || "",
          isCurrentHost: e.isCurrentHost,
          isCurrentAreaId: e.isCurrentAreaId,
          areaId: e.areaId,
          hasDomain: true
        }))) || [];
      }, [r, n == null ? undefined : n.topLevelDomains]);
      return (0, N.jsxs)("div", {
        children: [(0, N.jsx)(Qx.M, {
          onChange: s,
          value: i,
          placeholder: e[yy],
          clearable: true,
          "data-qa": "geo-switcher-search",
          ref: l
        }), (0, N.jsx)(v.X, {
          xs: 32,
          s: 32,
          default: 24
        }), a ? (0, N.jsx)(iy, {}) : (0, N.jsx)(hy, {
          lastSearchQuery: o,
          isPopular: !r,
          items: d
        })]
      });
    };
    gy.displayName = "EmployerSearchWidget/GeoSwitcherPopup/GeoSwitcherPopupContent/GeoSwitcherPopupContentComponent";
    const vy = (0, f.x)(gy);
    const by = "geoSwitcher.popup.title";
    const jy = (0, Aa.makeSetStoreField)("regionClarification");
    const fy = ({
      trls: e,
      visible: n,
      onClose: a
    }) => {
      const s = (0, xn.useDispatch)();
      const i = () => {
        a();
      };
      const r = (0, t.useCallback)(() => {
        s(jy(null));
      }, [s]);
      (0, t.useEffect)(() => {
        if (n) {
          r();
        }
      }, [r, n]);
      const o = (0, N.jsx)(je.a, {
        icon: en.Cs7,
        mode: "secondary",
        style: "neutral",
        onClick: i
      });
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsxs)(h.u, {
          size: "small",
          position: "right",
          onClose: i,
          visible: n,
          children: [(0, N.jsxs)("div", {
            className: Kx,
            children: [(0, N.jsx)(j.x, {
              typography: "title-4-semibold",
              "data-qa": "geo-switcher-header",
              children: e[by]
            }), o]
          }), (0, N.jsx)(v.X, {
            default: 28
          }), (0, N.jsx)(vy, {})]
        }), (0, N.jsx)(jn.R, {
          height: "full-screen",
          header: (0, N.jsx)(fn.v, {
            title: e[by],
            right: (0, N.jsx)(en.Cs7, {
              onClick: i
            })
          }),
          onClose: i,
          withContentPaddings: true,
          visible: n,
          children: (0, N.jsx)(vy, {})
        })]
      });
    };
    fy.displayName = "EmployerSearchWidget/GeoSwitcherPopup/index/GeoSwitcherPopup";
    const _y = (0, f.x)(fy);
    var Sy = a(70699);
    var Cy = a(372331);
    var ky = a(248953);
    var wy = a(784467);
    var Ny = a(97373);
    let Ey = function (e) {
      e.ProfessionalRoleId = "professionalRoleId";
      e.ProfessionalRoleQuery = "professionalRoleQuery";
      e.AreaId = "areaId";
      return e;
    }({});
    const Ay = {
      placeholder: "index.churn.form.jobPosition",
      valueMissing: "index.churn.form.missingValue"
    };
    const Ry = ({
      trls: e,
      onSuggestPick: n,
      text: a,
      setText: s
    }) => {
      const i = (0, ft.U$)(Ey.ProfessionalRoleId);
      const [r, o] = (0, t.useState)(false);
      const l = (0, t.useCallback)((e, a) => {
        if (a != null && a.id) {
          const e = i.input.value !== (a == null ? undefined : a.id);
          i.input.onChange(a.id);
          i.input.onBlur();
          s(a.text, () => {
            if (e) {
              if (n != null) {
                n();
              }
            }
          });
          return true;
        }
        i.input.onBlur();
        return false;
      }, [i.input, n, s]);
      const c = (0, t.useCallback)(e => {
        s(e);
        if (!e) {
          i.input.onChange(null);
        }
      }, [i, s]);
      const [d, m, p] = ((e, n) => {
        const a = (0, t.useRef)(null);
        const s = (0, t.useCallback)((e, t) => {
          a.current = null;
          return n(e, t);
        }, [n]);
        const i = (0, t.useCallback)(e => {
          if (e && e.length > 0) {
            a.current = e[0];
          } else {
            a.current = null;
          }
        }, []);
        return [s, () => {
          s(e, a.current || undefined);
        }, i];
      })(a, l);
      const u = (0, t.useCallback)(e => {
        l(e.text, e);
      }, [l]);
      const h = (0, wy.h)({
        inputValue: i.input.value || "",
        onBlurSaveFirstValue: p,
        onAutoSelect: u
      });
      return (0, N.jsx)(ft.gN, {
        name: Ey.ProfessionalRoleId,
        render: ({
          input: n,
          meta: t
        }) => (0, N.jsx)(ky.Z, {
          inputValue: a || "",
          onSelectValidator: d,
          dataProvider: h,
          headerTitle: e[Ay.placeholder],
          input: {
            component: Cy.I,
            props: {
              ...n,
              value: n.value,
              invalid: (0, Ny.wp)({
                ...t,
                active: r
              }),
              errorMessage: Ay[t.error] ? e[Ay[t.error]] : undefined,
              placeholder: e[Ay.placeholder],
              clearable: true,
              elevatePlaceholder: true,
              size: "large",
              autoComplete: "off",
              onChange: c,
              onFocus: () => {
                o(true);
              },
              onBlur: e => {
                o(false);
                if (a) {
                  e.preventDefault();
                  m();
                }
              },
              onKeyDown: e => e.code === Sy.e.code && m()
            }
          }
        })
      });
    };
    Ry.displayName = "components/EmployerSearchWidget/ProfessionalRoleInput/ProfessionalRoleInputComponent";
    const Py = (0, Bs.Z)(Ry);
    var Ty = a(371197);
    var Iy = a.n(Ty);
    var Ly = a(129279);
    const Wy = a.p + "static/images/cat__min_b1ccbb83e6696a31.svg";
    const By = "not-found--TbcCeeMffxMGgZrV";
    const My = "cat--XnMuBGYm_wMROhEv";
    const Vy = "cities--v8EilChjeeEWOzL9";
    const Dy = "index.churn.notFound.title";
    const Fy = "index.churn.notFound.description";
    const Hy = ({
      trls: e,
      professionalRoleText: n
    }) => {
      var a;
      const s = (0, _.v)(e => e.churnEmployer);
      const {
        handleSearchChange: i,
        searchRegionsData: r
      } = (0, Ly.N)();
      (0, t.useEffect)(() => {
        if (r) {
          window.location.href = r.items[0].href;
        }
      }, [r]);
      const o = (0, _.v)(e => e.locale.domainAreaId);
      const l = (0, d.useElementShown)(Iy(), {
        search: n,
        city_id: Number(o)
      });
      return (0, N.jsxs)("div", {
        className: By,
        ref: l,
        children: [(0, N.jsxs)(Y.Z, {
          borderWidth: "default",
          stretched: true,
          padding: 48,
          borderRadius: 40,
          children: [(0, N.jsx)(g.D, {
            Element: "h3",
            size: "large",
            description: e[Fy],
            alignment: "center",
            children: e[Dy]
          }), (0, N.jsx)(v.X, {
            default: 12
          }), (0, N.jsx)("div", {
            className: Vy,
            children: (a = s.nearestCities) === null || a === undefined ? undefined : a.map(({
              areaId: e,
              areaName: n
            }) => (0, N.jsx)(bn.X, {
              Element: "button",
              onClick: () => {
                i(n);
              },
              children: n
            }, e))
          })]
        }), (0, N.jsx)(_e.Z, {
          loading: "lazy",
          className: My,
          path: Wy,
          alt: "cat"
        })]
      });
    };
    Hy.displayName = "EmployerSearchWidget/NotFound/index/NotFound";
    const qy = (0, Bs.Z)(Hy);
    var Uy = a(166511);
    var Xy = a.n(Uy);
    const zy = "result-card--rkmLXNujR0FINqz4";
    const Oy = "result-container--VerIEPcFw_kuYk0I";
    const Zy = "result-item--wHnchRYxrk1N5yat";
    const Yy = "divider-wrapper-horizontal--MreaL_9EjJwkoM3g";
    const Gy = "divider-wrapper-vertical--X4pOBg7hBPgHIVgE";
    const $y = "result-item-content--pi6aSXT0ucs8VpB9";
    const Qy = {
      totalCandidates: {
        one: "index.churn.result.candidates.totalCandidates.one",
        some: "index.churn.result.candidates.totalCandidates.some",
        many: "index.churn.result.candidates.totalCandidates.many"
      },
      description: "index.churn.result.candidates.description"
    };
    const Jy = {
      monthResume: "index.churn.result.resume.monthResume",
      description: "index.churn.result.resume.description"
    };
    const Ky = {
      totalEmployers: {
        one: "index.churn.result.employers.totalEmployers.one",
        some: "index.churn.result.employers.totalEmployers.some",
        many: "index.churn.result.employers.totalEmployers.many"
      },
      description: "index.churn.result.employers.description"
    };
    const eg = ({
      children: e,
      loading: n
    }) => n || (0, t.isValidElement)(e) ? (0, N.jsxs)("div", {
      className: Zy,
      children: [(0, N.jsx)("div", {
        className: $y,
        children: (0, N.jsx)(Fe.b, {
          children: n ? (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(su.O, {
              borderRadius: 4,
              width: 170,
              height: 20,
              loading: true
            }), (0, N.jsx)(v.X, {
              default: 12
            }), (0, N.jsx)(su.O, {
              borderRadius: 4,
              width: 185,
              height: 16,
              loading: true
            }), (0, N.jsx)(v.X, {
              default: 6
            }), (0, N.jsx)(su.O, {
              borderRadius: 4,
              width: 126,
              height: 16,
              loading: true
            })]
          }) : e
        })
      }), (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)("div", {
          className: Yy,
          children: (0, N.jsx)(Nl.i, {})
        }), (0, N.jsx)("div", {
          className: Gy,
          children: (0, N.jsx)(Nl.i, {
            mode: "vertical"
          })
        })]
      })]
    }) : null;
    eg.displayName = "components/EmployerSearchWidget/SearchResult/SearchResultItem";
    const ng = ({
      trls: e,
      searchResult: n,
      professionalRoleText: a
    }) => {
      const {
        submitting: s
      } = (0, ft.cl)();
      const i = (0, t.useRef)(null);
      const r = (0, _.v)(e => e.locale.domainAreaId);
      (0, t.useEffect)(() => {
        if (!s && n && i.current) {
          const {
            stopSpying: e
          } = Xy()(i.current, {
            applicants: n.totalCandidatesCount,
            resumes: n.resumeCountPerMonth,
            employers: n.employersWithSimilarVacancyCount,
            city_id: Number(r),
            search: a
          });
          return () => {
            e();
          };
        }
      }, [s, n, r, a]);
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(v.X, {
          default: 20
        }), (0, N.jsx)("div", {
          className: zy,
          children: (0, N.jsx)(Y.Z, {
            borderWidth: "default",
            stretched: true,
            borderRadius: 24,
            children: (0, N.jsxs)("div", {
              className: Oy,
              ref: i,
              children: [(0, N.jsx)(eg, {
                loading: s,
                children: n != null && !!n.totalCandidatesCount && (0, N.jsxs)(N.Fragment, {
                  children: [(0, N.jsx)(qe.j, {
                    typography: "subtitle-1-semibold",
                    children: (0, N.jsx)(Zn.q, {
                      value: n.totalCandidatesCount,
                      one: e[Qy.totalCandidates.one],
                      some: e[Qy.totalCandidates.some],
                      many: e[Qy.totalCandidates.many]
                    })
                  }), (0, N.jsx)(v.X, {
                    default: 4
                  }), (0, N.jsx)(qe.j, {
                    type: "subtitle",
                    children: e[Qy.description]
                  })]
                })
              }), (0, N.jsx)(eg, {
                loading: s,
                children: n != null && !!n.resumeCountPerMonth && (0, N.jsxs)(N.Fragment, {
                  children: [(0, N.jsx)(qe.j, {
                    typography: "subtitle-1-semibold",
                    children: (0, N.jsx)(j.x, {
                      Element: "span",
                      typography: "subtitle-1-semibold",
                      children: (0, N.jsx)(Zn.q, {
                        formatValue: e => (0, N.jsxs)(j.x, {
                          Element: "span",
                          typography: "subtitle-1-semibold",
                          style: "positive",
                          children: ["+", e]
                        }),
                        value: n.resumeCountPerMonth,
                        one: e[Jy.monthResume],
                        some: e[Jy.monthResume],
                        many: e[Jy.monthResume]
                      })
                    })
                  }), (0, N.jsx)(v.X, {
                    default: 4
                  }), (0, N.jsx)(qe.j, {
                    type: "subtitle",
                    children: e[Jy.description]
                  })]
                })
              }), (0, N.jsx)(eg, {
                loading: s,
                children: n != null && !!n.employersWithSimilarVacancyCount && (0, N.jsxs)(N.Fragment, {
                  children: [(0, N.jsx)(qe.j, {
                    typography: "subtitle-1-semibold",
                    children: (0, N.jsx)(Zn.q, {
                      value: n.employersWithSimilarVacancyCount,
                      one: e[Ky.totalEmployers.one],
                      some: e[Ky.totalEmployers.some],
                      many: e[Ky.totalEmployers.many]
                    })
                  }), (0, N.jsx)(v.X, {
                    default: 4
                  }), (0, N.jsx)(qe.j, {
                    type: "subtitle",
                    children: e[Ky.description]
                  })]
                })
              })]
            })
          })
        })]
      });
    };
    ng.displayName = "components/EmployerSearchWidget/SearchResult/SearchResult";
    const ag = (0, f.x)(ng);
    const tg = ({
      searchResult: e,
      professionalRoleText: n
    }) => {
      const a = (0, ft.U$)(Ey.ProfessionalRoleId).input.value;
      const {
        submitting: t
      } = (0, ft.cl)();
      const s = (e == null ? undefined : e.employersWithSimilarVacancyCount) || (e == null ? undefined : e.totalCandidatesCount) || (e == null ? undefined : e.resumeCountPerMonth);
      if ((e || t) && a) {
        if (s || t) {
          return (0, N.jsx)(ag, {
            searchResult: e,
            professionalRoleText: n
          });
        } else {
          return (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(v.X, {
              default: 40
            }), (0, N.jsx)(qy, {
              professionalRoleText: n
            })]
          });
        }
      } else {
        return null;
      }
    };
    tg.displayName = "components/EmployerSearchWidget/SearchResultContainer/SearchResultContainer";
    const sg = "title--xwb9YyDTgJIVT6wE";
    const ig = "past-vacancies--fhHo53XxmnkPw7oZ";
    const rg = "past-vacancies-title--o4xGeHPUOAKaxfll";
    const og = "index.dashboard.in";
    const lg = {
      genitive: {
        one: "index.churn.dashboard.company.one",
        some: "index.churn.dashboard.company.some",
        many: "index.churn.dashboard.company.many"
      },
      whois_search: "index.churn.dashboard.companyWhoisSearch",
      selectCities: "index.churn.dashboard.selectCities"
    };
    const cg = "index.churn.dashboard.pastVacancies";
    const dg = ({
      trls: e,
      searchResult: n,
      getProfRoleIdByText: a,
      professionsTexts: s,
      professionalRoleText: i,
      setProfessionalRoleText: r
    }) => {
      const o = (0, F.G)().isGtS;
      const l = (0, ft.cI)();
      const c = (0, ft.U$)(Ey.ProfessionalRoleId).input.value;
      const {
        submitting: d
      } = (0, ft.cl)();
      const [m, p] = (0, t.useState)(false);
      const {
        translations: u
      } = (0, _.v)(({
        supernovaSearchArea: e
      }) => e);
      const h = (0, _.v)(({
        globalStatistics: e
      }) => e);
      const x = (0, _.v)(e => e.locale.domainAreaId);
      return (0, N.jsxs)($x.Z, {
        loading: d,
        children: [(0, N.jsxs)("div", {
          children: [(0, N.jsxs)("div", {
            className: sg,
            children: [h && (0, N.jsxs)(j.x, {
              style: "secondary",
              typography: o ? "title-5-semibold" : "subtitle-1-semibold",
              children: [(0, N.jsx)(Zn.q, {
                value: h[rr.i.Employers],
                one: e[lg.genitive.one],
                some: e[lg.genitive.some],
                many: e[lg.genitive.many]
              }), " ", e[lg.whois_search]]
            }), (0, N.jsx)(j.x, {
              typography: o ? "title-1-semibold" : "title-3-semibold",
              children: (0, Z.WU)(e[lg.selectCities], {
                "{cities}": (0, N.jsxs)(Ue.r, {
                  typography: o ? "title-1-semibold" : "title-3-semibold",
                  inline: true,
                  onClick: () => {
                    Gx()({
                      city_id: Number(x)
                    });
                    p(true);
                  },
                  children: [e[og], u.area]
                })
              })
            })]
          }), (0, N.jsx)(v.X, {
            default: 32
          }), (0, N.jsx)(Py, {
            text: i,
            setText: r,
            onSuggestPick: l.submit
          }), (!d && n === undefined || !c) && (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(v.X, {
              default: 12
            }), (0, N.jsxs)("div", {
              className: ig,
              children: [(0, N.jsx)("div", {
                className: rg,
                children: (0, N.jsx)(j.x, {
                  Element: "span",
                  typography: "label-2-regular",
                  style: "secondary",
                  children: e[cg]
                })
              }), s.map(e => (0, N.jsx)(bn.X, {
                Element: "button",
                onClick: () => (e => {
                  l.change(Ey.ProfessionalRoleId, a(e)?.id);
                  r(e, () => {
                    l.submit();
                  });
                })(e),
                size: "small",
                children: e
              }, e))]
            })]
          }), (0, N.jsx)(tg, {
            searchResult: n,
            professionalRoleText: i
          })]
        }), (0, N.jsx)(_y, {
          visible: m,
          onClose: () => {
            p(false);
          }
        })]
      });
    };
    dg.displayName = "components/EmployerSearchWidget/Form/EmployerSearchWidgetForm";
    const mg = (0, f.x)(dg);
    const pg = "footer-title--GHTgrPk0ETIlQ66T";
    const ug = "buttons-container--Rx943sYhdDQQzK4T";
    const hg = "index.churn.result.generate";
    const xg = "index.churn.result.create";
    const yg = "index.churn.dashboard.footerTitle";
    const gg = ({
      trls: e,
      professions: n
    }) => {
      const [a, s] = (0, Zx.b)("");
      const i = e => n == null ? undefined : n.find(n => n.name === e);
      const r = (0, t.useMemo)(() => n == null ? undefined : n.map(e => e.name), [n]);
      const o = (0, t.useRef)(null);
      const {
        addNotification: l
      } = (0, qa.lm)();
      const [c, d] = (0, t.useState)();
      const m = (0, _.v)(e => e.locale.domainAreaId);
      (0, t.useEffect)(() => () => {
        var e;
        if ((e = o.current) !== null && e !== undefined) {
          e.abort();
        }
      }, []);
      const [p, h] = (0, t.useReducer)(zx.X, {});
      const {
        translations: x
      } = (0, _.v)(({
        supernovaSearchArea: e
      }) => e);
      const g = () => {
        Xx()({
          create_type: "generation_automatically",
          city_id: Number(m),
          search: a
        });
        h({
          type: Ox.k1,
          payload: {
            modalType: Ox.M0,
            data: {
              cityName: x.area,
              professionalRoleText: a
            }
          }
        });
      };
      const b = (0, t.useCallback)(() => h({
        type: Ox.et
      }), []);
      const f = !a || c != null && !!c.employersWithSimilarVacancyCount || c != null && !!c.totalCandidatesCount || c != null && !!c.resumeCountPerMonth;
      return (0, N.jsx)(ft.l0, {
        onSubmit: async e => {
          var n;
          if ((n = o.current) !== null && n !== undefined) {
            n.abort();
          }
          const t = new AbortController();
          o.current = t;
          try {
            const n = await (async ({
              abort: e,
              ...n
            }) => await C._i.get("/shards/resume/churn_onboarding", {
              params: {
                ...n
              },
              signal: e.signal
            }))({
              abort: t,
              ...e,
              professionalRoleQuery: a,
              areaId: Number(m)
            });
            d(Object.keys(n).reduce((e, a) => {
              e[a] = n[a] ?? undefined;
              return e;
            }, {}));
          } catch (e) {
            (0, Ga.ZP)(e, l);
          }
        },
        validateOnBlur: true,
        validate: e => {
          const n = {};
          if (!e[Ey.ProfessionalRoleId]) {
            n[Ey.ProfessionalRoleId] = "valueMissing";
          }
          return n;
        },
        children: () => (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)(mg, {
            searchResult: c,
            getProfRoleIdByText: i,
            professionsTexts: r,
            professionalRoleText: a,
            setProfessionalRoleText: s
          }), (0, N.jsx)(v.X, {
            default: 32
          }), (c === undefined || f) && (0, N.jsxs)("div", {
            children: [(0, N.jsx)(v.X, {
              default: 12,
              gteM: 28
            }), (0, N.jsx)("div", {
              className: pg,
              children: (0, N.jsx)(j.x, {
                typography: "title-5-semibold",
                children: e[yg]
              })
            }), (0, N.jsx)(v.X, {
              default: 24,
              gteM: 32
            }), (0, N.jsxs)("div", {
              className: ug,
              children: [(0, N.jsx)(y.z, {
                mode: "primary",
                spaceBetween: false,
                stretched: true,
                icon: (0, N.jsx)(en.eMm, {}),
                onClick: g,
                children: e[hg]
              }), (0, N.jsx)(y.z, {
                Element: u.SPALink,
                to: "/employer/vacancy/create",
                mode: "secondary",
                stretched: true,
                onClick: () => {
                  Xx()({
                    create_type: "create_manually",
                    city_id: Number(m),
                    search: a
                  });
                },
                children: e[xg]
              })]
            })]
          }), (0, N.jsx)(zx.Z, {
            dispatchModal: h,
            modalData: p,
            handleCloseModal: b
          })]
        })
      });
    };
    gg.displayName = "components/EmployerSearchWidget/index/EmployerSearchWidget";
    const vg = (0, f.x)(gg);
    var bg = a(569285);
    var jg = a.n(bg);
    var fg = a(408010);
    var _g = a.n(fg);
    const Sg = "footer--_y3g8hwZhAEZiCY5";
    const Cg = "footer-button-content--fc5L3dZGoDcPRVTX";
    const kg = "employer.indexPage.widgets.myVacancies.allVacanciesLink";
    const wg = {
      responses: {
        one: "employer.indexPage.widgets.myVacancies.moreResponses.responses.one",
        some: "employer.indexPage.widgets.myVacancies.moreResponses.responses.some",
        many: "employer.indexPage.widgets.myVacancies.moreResponses.responses.many"
      },
      vacancies: {
        one: "employer.indexPage.widgets.myVacancies.moreResponses.vacancies.one",
        some: "employer.indexPage.widgets.myVacancies.moreResponses.vacancies.some",
        many: "employer.indexPage.widgets.myVacancies.moreResponses.vacancies.many"
      }
    };
    const Ng = "my-vacancies_vacancies-link";
    const Eg = ({
      trls: e
    }) => {
      const {
        moreResponses: n,
        activeVacanciesAmount: a,
        vacancies: s
      } = (0, _.v)(e => e.vacanciesWidget);
      const i = "subtitle-2-semibold";
      const r = (0, t.useCallback)(() => {
        _g()({
          activeVacanciesAmount: a
        });
      }, [a]);
      const {
        hasActive: o,
        hasArchive: l,
        hasDraft: c
      } = (0, t.useMemo)(() => ({
        hasActive: Boolean(s.find(({
          type: e
        }) => e === "active")),
        hasDraft: Boolean(s.find(({
          type: e
        }) => e === "draft")),
        hasArchive: Boolean(s.find(({
          type: e
        }) => e === "archive"))
      }), [s]);
      const d = (({
        hasActive: e,
        hasArchive: n,
        hasDraft: a
      }) => e ? "/employer/vacancies" : n ? "/employer/vacancies/archived" : a ? "/employer/vacancies/drafts" : "/employer/vacancies")({
        hasActive: o,
        hasArchive: l,
        hasDraft: c
      });
      return (0, N.jsx)("div", {
        className: Sg,
        children: n ? (0, N.jsx)(y.z, {
          stretched: true,
          typography: i,
          Element: u.SPALink,
          to: d,
          "data-qa": Ng,
          style: "neutral",
          mode: "tertiary",
          onClick: r,
          children: (0, N.jsxs)("div", {
            className: Cg,
            children: [(0, N.jsx)(j.x, {
              typography: i,
              children: (0, N.jsx)(Zn.q, {
                value: n.responses,
                one: e[wg.responses.one],
                some: e[wg.responses.some],
                many: e[wg.responses.many],
                format: e => (0, Z.WU)(e, {
                  "{0}": n.responses
                }),
                hasValue: false
              })
            }), (0, N.jsx)(j.x, {
              typography: i,
              style: "tertiary",
              children: (0, N.jsx)(Zn.q, {
                value: n.vacancies,
                one: e[wg.vacancies.one],
                some: e[wg.vacancies.some],
                many: e[wg.vacancies.many],
                format: e => (0, Z.WU)(e, {
                  "{0}": n.vacancies
                }),
                hasValue: false
              })
            })]
          })
        }) : (0, N.jsx)(y.z, {
          stretched: true,
          typography: i,
          Element: u.SPALink,
          to: d,
          "data-qa": Ng,
          style: "neutral",
          mode: "tertiary",
          onClick: r,
          size: "small",
          children: (0, N.jsxs)("div", {
            className: Cg,
            children: [(0, N.jsx)(j.x, {
              typography: i,
              children: e[kg]
            }), o && a ? (0, N.jsx)(j.x, {
              typography: i,
              style: "tertiary",
              "data-qa": "my-vacancies_vacancies_amount",
              children: a
            }) : null]
          })
        })
      });
    };
    Eg.displayName = "EmployerVacanciesWidget/components/Footer/FooterComponent";
    const Ag = (0, f.x)(Eg);
    var Rg = a(198207);
    var Pg = a.n(Rg);
    const Tg = "header--Aj93XcHCd3kvup18";
    const Ig = "employer.indexPage.widgets.myVacancies.createVacancy";
    const Lg = "employer.indexPage.widgets.myVacancies.title";
    const Wg = ({
      trls: e
    }) => {
      const {
        vacancies: n,
        activeVacanciesAmount: a,
        canCreateVacancy: s
      } = (0, _.v)(e => e.vacanciesWidget);
      const i = (0, t.useCallback)(() => {
        Pg()({
          activeVacanciesAmount: a,
          hhtmSourceLabel: "header"
        });
      }, [a]);
      return (0, N.jsxs)("div", {
        className: Tg,
        children: [(0, N.jsx)(j.x, {
          typography: "title-5-semibold",
          children: e[Lg]
        }), n.length > 0 && s ? (0, N.jsx)(Ue.r, {
          to: "/employer/vacancy/create",
          "data-qa": "my-vacancies_create-vacancy",
          Element: u.SPALink,
          iconLeft: (0, N.jsx)(en.xAJ, {}),
          typography: "label-3-regular",
          onClick: i,
          children: e[Ig]
        }) : null]
      });
    };
    Wg.displayName = "EmployerVacanciesWidget/components/Header/HeaderComponent";
    const Bg = (0, f.x)(Wg);
    const Mg = "list-stretched--RDQ_LvdLZwzSMxsS";
    const Vg = "vacancy--p4jOeLHKu44CQU_G";
    const Dg = "vacancy-content--b9rgAPpJoK43PIsO";
    const Fg = "vacancy-button-wrapper--eo62WTST4GoZWI4C";
    const Hg = "vacancy-description--GBlvaG7EGkVZsLFM";
    const qg = "vacancy-description-item--NlpjOCTn0U8rOJST";
    const Ug = "employer.indexPage.widgets.myVacancies.createVacancyCell.title";
    const Xg = "employer.indexPage.widgets.myVacancies.createVacancyCell.description";
    const zg = "employer.indexPage.widgets.myVacancies.createVacancyCell.button";
    const Og = ({
      trls: e
    }) => {
      const {
        activeVacanciesAmount: n
      } = (0, _.v)(e => e.vacanciesWidget);
      const a = (0, Se.$w)();
      const s = (0, t.useCallback)(() => {
        Pg()({
          activeVacanciesAmount: n,
          hhtmSourceLabel: "create_vacancy_cell"
        });
      }, [n]);
      return (0, N.jsxs)("li", {
        className: Vg,
        "data-qa": "my-vacancies_create-vacancy-cell",
        children: [(0, N.jsxs)("div", {
          className: Dg,
          children: [(0, N.jsx)(j.x, {
            typography: "label-2-regular",
            children: e[Ug]
          }), (0, N.jsx)(v.X, {
            default: 4
          }), (0, N.jsx)(j.x, {
            typography: "label-3-regular",
            style: "secondary",
            children: e[Xg]
          })]
        }), (0, N.jsx)(v.X, {
          default: 6,
          gteM: 0
        }), (0, N.jsx)(dd.V, {
          default: 0,
          gteM: 24
        }), (0, N.jsx)("div", {
          className: Fg,
          onClick: s,
          children: (0, N.jsx)(y.z, {
            style: a ? "neutral" : "accent",
            mode: "secondary",
            Element: u.SPALink,
            to: "/employer/vacancy/create",
            stretched: true,
            size: "small",
            "data-qa": "my-vacancies_create-vacancy-cell-button",
            children: e[zg]
          })
        })]
      });
    };
    Og.displayName = "EmployerVacanciesWidget/components/CreateVacancyCell/CreateVacancyCellComponent";
    const Zg = (0, f.x)(Og);
    const Yg = "vacancies-placeholder--cLBEMNcZxUV8yPpy";
    const Gg = "vacancies-placeholder-content--ypmipw2kEIg9c8SC";
    const $g = "vacancies-placeholder-image--UGkJZvlQLwT3Azvu";
    const Qg = "vacancies-placeholder-image-with-button--oZFxlk9cNohyHXRb";
    const Jg = "vacancies-placeholder-image_zp--y40R9Fs_O81dNt2v";
    const Kg = "spacer--CspOWSGTIwtqyB9u";
    const ev = {
      main: {
        title: "employer.indexPage.widgets.myVacancies.placeholder.title",
        description: "employer.indexPage.widgets.myVacancies.placeholder.description"
      },
      withoutCreate: {
        title: "employer.indexPage.widgets.myVacancies.placeholderWithoutCreate.title",
        description: "employer.indexPage.widgets.myVacancies.placeholderWithoutCreate.description"
      },
      withPublications: {
        title: "employer.indexPage.widgets.myVacancies.placeholder.withPublications.title",
        description: "employer.indexPage.widgets.myVacancies.placeholder.withPublications.description"
      },
      publications: {
        one: "employer.indexPage.widgets.myVacancies.publications.one",
        some: "employer.indexPage.widgets.myVacancies.publications.some",
        many: "employer.indexPage.widgets.myVacancies.publications.many"
      },
      button: "employer.indexPage.widgets.myVacancies.placeholder.button"
    };
    const nv = ({
      trls: e
    }) => {
      const {
        activeVacanciesAmount: n,
        publicationsCount: a,
        canCreateVacancy: s
      } = (0, _.v)(e => e.vacanciesWidget);
      const i = (0, Se.$w)();
      const r = (0, t.useCallback)(() => {
        Pg()({
          activeVacanciesAmount: n,
          hhtmSourceLabel: "no_vacancies_placeholder"
        });
      }, [n]);
      const o = a && a > 0 && s;
      const l = s ? ev.main : ev.withoutCreate;
      return (0, N.jsxs)("div", {
        className: Yg,
        children: [(0, N.jsxs)("div", {
          className: Gg,
          children: [o ? (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(j.x, {
              typography: "label-2-regular",
              children: (0, Z.WU)(e[ev.withPublications.title], {
                "{publications}": (0, N.jsx)(Zn.q, {
                  value: a,
                  one: e[ev.publications.one],
                  some: e[ev.publications.some],
                  many: e[ev.publications.many]
                })
              })
            }), (0, N.jsx)(v.X, {
              default: 4
            }), (0, N.jsx)(j.x, {
              typography: "label-3-regular",
              style: "secondary",
              children: e[ev.withPublications.description]
            })]
          }) : (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(j.x, {
              typography: "label-2-regular",
              children: e[l.title]
            }), (0, N.jsx)(v.X, {
              default: 4
            }), (0, N.jsx)(j.x, {
              typography: "label-3-regular",
              style: "secondary",
              children: e[l.description]
            })]
          }), (0, N.jsx)(v.X, {
            default: 20
          }), (0, N.jsx)("div", {
            className: Kg
          })]
        }), (0, N.jsx)("div", {
          className: ge()($g, {
            [Jg]: i,
            [Qg]: s
          })
        }), s && (0, N.jsx)(y.z, {
          style: "accent",
          mode: "primary",
          Element: u.SPALink,
          to: "/employer/vacancy/create",
          stretched: true,
          onClick: r,
          "data-qa": "my-vacancies_no-vacancies-button",
          children: e[ev.button]
        })]
      });
    };
    nv.displayName = "EmployerVacanciesWidget/components/NoVacanciesPlaceholder/NoVacanciesPlaceholderComponent";
    const av = (0, f.x)(nv);
    var tv = a(421262);
    var sv = a.n(tv);
    var iv = a(845942);
    const rv = "employer.indexPage.widgets.myVacancies.vacancy.showVacancy";
    const ov = "employer.indexPage.widgets.myVacancies.vacancy.responses";
    const lv = "employer.indexPage.widgets.myVacancies.vacancy.draftContinue";
    const cv = "employer.indexPage.widgets.myVacancies.vacancy.archivePublish";
    const dv = ({
      vacancy: e,
      trls: n,
      isArchive: a,
      isDraft: t,
      isUnpaid: s,
      draftUrl: i,
      onClick: r
    }) => {
      var o;
      const l = `/employer/vacancyresponses?vacancyId=${e.id}`;
      const c = `/employer/vacancy/restore/${e.id}`;
      const d = "small";
      if ((o = e.unread) !== null && o !== undefined && o.responses) {
        return (0, N.jsxs)(y.z, {
          style: "positive",
          mode: "secondary",
          Element: u.SPALink,
          to: l,
          stretched: true,
          "data-qa": `my-vacancies_vacancy-responses-link_${e.id}`,
          onClick: r,
          size: d,
          children: [n[ov], (0, N.jsx)(dd.V, {
            default: 8
          }), (m = e.unread.responses, m > 1000 ? `+${Math.floor(m / 1000)}K` : `+${m}`)]
        });
      } else if (t) {
        return (0, N.jsx)(y.z, {
          style: "neutral",
          mode: "secondary",
          Element: u.SPALink,
          to: i,
          stretched: true,
          "data-qa": `my-vacancies_draft-link_${e.id}`,
          onClick: r,
          size: d,
          children: n[lv]
        });
      } else if (a) {
        return (0, N.jsx)(y.z, {
          style: "neutral",
          mode: "secondary",
          Element: u.SPALink,
          to: c,
          stretched: true,
          "data-qa": `my-vacancies_archive-link_${e.id}`,
          onClick: r,
          size: d,
          children: n[cv]
        });
      } else if (s) {
        return (0, N.jsx)(y.z, {
          style: "neutral",
          mode: "secondary",
          Element: u.SPALink,
          to: nn.Z.employerVacancies,
          stretched: true,
          "data-qa": `my-vacancies_vacancy-unpaid-link_${e.id}`,
          onClick: r,
          size: d,
          children: n[rv]
        });
      } else {
        return (0, N.jsx)(y.z, {
          style: "neutral",
          mode: "secondary",
          Element: u.SPALink,
          to: l,
          stretched: true,
          "data-qa": `my-vacancies_vacancy-responses-link_${e.id}`,
          onClick: r,
          size: d,
          children: n[rv]
        });
      }
      var m;
    };
    dv.displayName = "EmployerVacanciesWidget/components/VacancyButton/VacancyButtonComponent";
    const mv = (0, f.x)(dv);
    const pv = "employer.indexPage.widgets.myVacancies.vacancy.expires";
    const uv = "employer.indexPage.widgets.myVacancies.vacancy.draft";
    const hv = "employer.indexPage.widgets.myVacancies.vacancy.archive";
    const xv = {
      one: "employer.indexPage.widgets.myVacancies.vacancy.churn.one",
      some: "employer.indexPage.widgets.myVacancies.vacancy.churn.some",
      many: "employer.indexPage.widgets.myVacancies.vacancy.churn.many"
    };
    const yv = "employer.indexPage.widgets.myVacancies.vacancy.unpaid";
    const gv = ({
      trls: e,
      vacancy: n
    }) => {
      const {
        activeVacanciesAmount: t
      } = (0, _.v)(e => e.vacanciesWidget);
      const s = n.type === "draft";
      const i = n.type === "archive";
      const r = n.type === "unpaid";
      const o = `/employer/vacancy/create?draftId=${n.id}`;
      const l = () => {
        var e;
        if ((e = n.unread) !== null && e !== undefined && e.responses) {
          return "responses";
        } else if (s) {
          return "draft";
        } else if (i) {
          return "archive";
        } else if (r) {
          return "unpaid";
        } else {
          return "show";
        }
      };
      const c = (0, _.v)(({
        churnEmployer: e
      }) => e.isChurn) && !!n.compatibleCandidates;
      return (0, N.jsxs)("li", {
        className: Vg,
        children: [(0, N.jsx)(u.SPALink, {
          "data-qa": `my-vacancies_vacancy-link_${n.id}`,
          to: s ? o : r ? nn.Z.employerVacancies : `/vacancy/${n.id}`,
          className: Dg,
          onClick: () => {
            sv()({
              activeVacanciesAmount: t,
              type: l(),
              buttonName: "vacancies_widget_vacancy_title"
            });
          },
          children: (0, N.jsxs)(Fe.b, {
            children: [(0, N.jsx)(qe.j, {
              maxLines: 1,
              children: n.title
            }), (0, N.jsx)(qe.j, {
              type: "subtitle",
              children: (0, N.jsxs)("div", {
                className: Hg,
                children: [n.area?.name && (0, N.jsx)("span", {
                  className: qg,
                  children: (0, N.jsx)(j.x, {
                    typography: "label-3-regular",
                    style: "secondary",
                    "data-qa": `my-vacancies_vacancy-area_${n.id}`,
                    children: n.area.name
                  })
                }), c && (0, N.jsx)("span", {
                  className: qg,
                  children: (0, N.jsx)(j.x, {
                    typography: "label-3-regular",
                    style: "positive",
                    "data-qa": `my-vacancies_vacancy-churn_${n.id}`,
                    children: (0, N.jsx)(Zn.q, {
                      value: n.compatibleCandidates,
                      one: e[xv.one],
                      some: e[xv.some],
                      many: e[xv.many]
                    })
                  })
                }), n.expireTime && !c && (0, N.jsx)("span", {
                  className: qg,
                  children: (0, N.jsx)(j.x, {
                    typography: "label-3-regular",
                    style: n.isProlongateHighlight ? "negative" : "secondary",
                    "data-qa": `my-vacancies_vacancy-expire_${n.id}`,
                    "data-qa-timestamp": n.expireTime,
                    children: (0, Z.WU)(e[pv], {
                      "{0}": (0, iv.p6)(n.expireTime, "d MMMM")
                    })
                  })
                }), s && !c && (0, N.jsx)("span", {
                  className: qg,
                  children: (0, N.jsx)(j.x, {
                    typography: "label-3-regular",
                    style: "warning",
                    children: e[uv]
                  })
                }), i && !c && (0, N.jsx)("span", {
                  className: qg,
                  children: (0, N.jsx)(j.x, {
                    typography: "label-3-regular",
                    style: "negative",
                    children: e[hv]
                  })
                }), r && (0, N.jsx)("span", {
                  className: qg,
                  children: (0, N.jsx)(j.x, {
                    typography: "label-3-regular",
                    style: "warning",
                    children: e[yv]
                  })
                })]
              })
            })]
          })
        }), (0, N.jsx)(v.X, {
          default: 6,
          gteM: 0
        }), (0, N.jsx)(dd.V, {
          default: 0,
          gteM: 24
        }), (0, N.jsx)("div", {
          className: Fg,
          children: (0, N.jsx)(mv, {
            vacancy: n,
            isUnpaid: r,
            isArchive: i,
            isDraft: s,
            draftUrl: o,
            onClick: () => {
              sv()({
                activeVacanciesAmount: t,
                type: l(),
                buttonName: "vacancies_widget_vacancy"
              });
            }
          })
        })]
      });
    };
    gv.displayName = "EmployerVacanciesWidget/components/Vacancy/VacancyComponent";
    const vv = (0, f.x)(gv);
    const bv = () => {
      const {
        vacancies: e,
        shouldShowPlaceholder: n,
        canCreateVacancy: a
      } = (0, _.v)(e => e.vacanciesWidget);
      if (n) {
        return (0, N.jsx)(av, {});
      } else {
        return (0, N.jsxs)("ul", {
          className: ge()({
            [Mg]: e.length > 1
          }),
          children: [e.map(e => (0, N.jsx)(vv, {
            vacancy: e
          }, e.id)), e.length < 3 && a && (0, N.jsx)(Zg, {})]
        });
      }
    };
    bv.displayName = "EmployerVacanciesWidget/components/Vacancies/Vacancies";
    const jv = {
      "widget-content": "widget-content--rEUcl_pXyYqACyIn",
      widgetContent: "widget-content--rEUcl_pXyYqACyIn",
      "growing-footer": "growing-footer--vVgBIb5tywYGhG3O",
      growingFooter: "growing-footer--vVgBIb5tywYGhG3O",
      "additional-placeholder": "additional-placeholder--ezORJFmPUCIrZ7zr",
      additionalPlaceholder: "additional-placeholder--ezORJFmPUCIrZ7zr",
      "additional-placeholder_zp": "additional-placeholder_zp--rDXHt0MEHOYiKbQG",
      additionalPlaceholderZp: "additional-placeholder_zp--rDXHt0MEHOYiKbQG"
    };
    const fv = ({
      isChurnPage: e
    }) => {
      const n = (0, t.useRef)(null);
      const {
        vacancies: a,
        activeVacanciesAmount: s
      } = (0, _.v)(e => e.vacanciesWidget);
      const i = (0, Se.$w)();
      (0, t.useEffect)(() => {
        if (n.current) {
          const e = a.filter(e => e.type === "draft").length;
          const t = a.filter(e => e.type === "unpaid").length;
          const i = a.filter(e => e.type === "archive").length;
          const {
            stopSpying: r
          } = jg()(n.current, {
            activeVacanciesAmount: s,
            draftVacanciesAmount: e,
            unpaidVacanciesAmount: t,
            archiveVacanciesAmount: i
          });
          return r;
        }
      }, [s, a]);
      return (0, N.jsx)(Y.Z, {
        borderWidth: "default",
        borderRadius: 24,
        stretched: true,
        verticalStretched: true,
        ref: n,
        "data-qa": "employer-vacancies-widget",
        children: (0, N.jsxs)("div", {
          className: ge()(jv.widgetContent, {
            [jv.widgetContentChurn]: e
          }),
          children: [(0, N.jsx)(Bg, {}), (0, N.jsx)(bv, {}), (() => {
            const e = a.length === 1;
            if (a.length === 0) {
              return null;
            } else {
              return (0, N.jsxs)("div", {
                className: jv.growingFooter,
                children: [(0, N.jsx)(Ag, {}), e && (0, N.jsx)(Du.m, {
                  layer: "content",
                  children: (0, N.jsx)("div", {
                    className: ge()(jv.additionalPlaceholder, {
                      [jv.additionalPlaceholderZp]: i
                    })
                  })
                })]
              });
            }
          })()]
        })
      });
    };
    fv.displayName = "components/EmployerVacanciesWidget/index/EmployerVacanciesWidget";
    const _v = fv;
    const Sv = () => {
      var e;
      const n = (0, _.v)(e => e.employerFaq);
      const a = (e = (0, _.v)(e => e.churnEmployer).popularProfessionalRoles) === null || e === undefined ? undefined : e.map(e => {
        var n;
        e.name = (n = e.name).charAt(0).toUpperCase() + n.slice(1);
        return e;
      });
      (0, t.useEffect)(() => {
        Iu()({
          hhtmSource: "main_outflow_employer"
        });
      }, []);
      return (0, N.jsxs)("div", {
        className: ge()("main-page-redesign", "index-churn-page"),
        children: [(0, N.jsx)(v.X, {
          xs: 16,
          default: 0
        }), (0, N.jsxs)(H.M, {
          children: [(0, N.jsxs)(U.J, {
            children: [(0, N.jsx)(q.C, {
              xs: 0,
              m: 0,
              l: 2
            }), (0, N.jsxs)(q.C, {
              xs: 4,
              s: 8,
              m: 12,
              l: 8,
              children: [(0, N.jsx)(v.X, {
                xs: 40,
                default: 92
              }), (0, N.jsx)(vg, {
                professions: a || []
              }), (0, N.jsx)(v.X, {
                xs: 40,
                default: 92
              })]
            }), (0, N.jsx)(q.C, {
              xs: 0,
              m: 0,
              l: 2
            })]
          }), (0, N.jsx)(v.X, {
            xs: 24,
            default: 0
          }), (0, N.jsxs)(U.J, {
            rowGap: 24,
            children: [(0, N.jsx)(q.C, {
              xs: 4,
              s: 8,
              m: 0,
              children: (0, N.jsx)(_v, {
                isChurnPage: true
              })
            }), (0, N.jsx)(q.C, {
              xs: 4,
              s: 8,
              m: 0,
              children: (0, N.jsx)(qx, {})
            }), (0, N.jsx)(q.C, {
              xs: 4,
              s: 8,
              m: 0,
              children: (0, N.jsx)(oc, {
                maxCount: 5,
                verticalStretched: true,
                items: n
              })
            })]
          }), (0, N.jsxs)(U.J, {
            rowGap: 40,
            children: [(0, N.jsx)(q.C, {
              flexibleContent: true,
              xs: 0,
              s: 0,
              m: 4,
              l: 3,
              children: (0, N.jsx)(qx, {})
            }), (0, N.jsx)(q.C, {
              flexibleContent: true,
              xs: 0,
              s: 0,
              m: 8,
              l: 6,
              children: (0, N.jsx)(_v, {
                isChurnPage: true
              })
            }), (0, N.jsx)(q.C, {
              flexibleContent: true,
              xs: 0,
              s: 0,
              m: 0,
              l: 3,
              children: (0, N.jsx)(oc, {
                maxCount: 5,
                verticalStretched: true,
                items: n
              })
            })]
          })]
        }), (0, N.jsx)(v.X, {
          default: 60,
          xs: 24,
          s: 24
        }), (0, N.jsx)(Lu.c, {})]
      });
    };
    Sv.displayName = "components/Layout/index/Layout";
    const Cv = Sv;
    const kv = () => (0, N.jsxs)(N.Fragment, {
      children: [(0, N.jsx)(Pu.I, {}), (0, N.jsx)(Cv, {})]
    });
    kv.displayName = "components/IndexPageChurnEmployer/index/IndexChurnEmployer";
    const wv = kv;
    var Nv = a(339449);
    var Ev = a(60340);
    const Av = "renewalServiceWidget";
    const Rv = () => (0, N.jsx)(Ev.X, {
      place: Av
    });
    Rv.displayName = "components/RenewalService/RenewalServiceWidget/RenewalServiceWidget";
    var Pv = a(342694);
    var Tv = a(318591);
    var Iv = a.n(Tv);
    var Lv = a(459465);
    var Wv = a(76336);
    const Bv = ({
      children: e,
      accountId: n,
      realBalance: a,
      reservedBalance: t
    }) => {
      var s;
      const [i, r, o] = (0, fh.m)(false);
      const l = (0, _.v)(({
        employerIndexPage: e
      }) => e);
      const c = l == null || (s = l.oldEmployer) === null || s === undefined || (s = s.billingSummary) === null || s === undefined ? undefined : s.currency;
      return (0, N.jsxs)(N.Fragment, {
        children: [e(r), (0, N.jsx)(ih.s, {
          visible: i,
          onClose: o,
          accountId: n,
          currency: c || _h.V.RUR,
          accountBalances: {
            realBalance: a ?? 0,
            reservedBalance: t ?? 0
          }
        })]
      });
    };
    Bv.displayName = "advices/ClickmeNoMoneyAdvice/ClickmeNoMoneyAdviceWrapper/ClickmeNoMoneyAdviceWrapper";
    const Mv = "employer.index.advicesWidget.clickmeNoMoney.content";
    const Vv = "employer.index.advicesWidget.clickmeNoMoney.content.accent";
    const Dv = "employer.index.advicesWidget.clickmeNoMoney.action";
    const Fv = ({
      trls: e,
      name: n,
      data: {
        accountId: a,
        realBalance: t,
        reservedBalance: s
      }
    }) => {
      const i = (0, xn.useDispatch)();
      return (0, N.jsx)(Bv, {
        accountId: a,
        realBalance: t,
        reservedBalance: s,
        children: t => (0, N.jsx)(Lv.Z, {
          name: n,
          onCloseClick: () => {
            i((0, Wv.D)(n));
          },
          button: (0, N.jsx)(y.z, {
            onClick: () => {
              t();
              Iv()({
                accountId: a
              });
            },
            size: "small",
            stretched: true,
            "data-qa": "advices-button",
            mode: "secondary",
            style: "neutral",
            children: e[Dv]
          }),
          children: (0, N.jsx)(j.x, {
            Element: "span",
            typography: "subtitle-1-semibold",
            children: (0, Z.WU)(e[Mv], {
              "{accent}": (0, N.jsx)(j.x, {
                Element: "span",
                typography: "subtitle-1-semibold",
                style: "negative",
                children: e[Vv]
              })
            })
          })
        })
      });
    };
    Fv.displayName = "advices/ClickmeNoMoneyAdvice/index/ClickmeNoMoneyAdvice";
    const Hv = (0, f.x)(Fv);
    const qv = {
      image: "image--tdV4ZVJfpZkSQjSG",
      card1: "card1--szgkNUFNdQcNBT1i",
      card2: "card2--o3xoW_9KQsZlUCwn"
    };
    const Uv = {
      1: "employer.index.advicesWidget.closingRemainingAdvice.1.text",
      2: "employer.index.advicesWidget.closingRemainingAdvice.2.text"
    };
    const Xv = ({
      trls: e
    }) => {
      const n = (0, t.useMemo)(() => Math.random() > 0.5 ? 1 : 2, []);
      return (0, N.jsx)(Lv.Z, {
        withoutTextPadding: true,
        name: "closing-remaining-advice",
        children: (0, N.jsxs)("div", {
          className: qv[`card${n}`],
          children: [e[Uv[n]], (0, N.jsx)(Du.m, {
            layer: "content",
            children: (0, N.jsx)("div", {
              className: qv.image
            })
          })]
        })
      });
    };
    Xv.displayName = "advices/ClosingRemainingAdvice/index/ClosingRemainingAdviceComponent";
    const zv = (0, f.x)(Xv);
    var Ov = a(348016);
    var Zv = a(202187);
    var Yv = a(96619);
    const Gv = "employer.index.advicesWidget.expiringContactsResumeAccesses.button";
    const $v = "employer.index.advicesWidget.expiringContactsResumeAccesses.willExpire";
    const Qv = "employer.index.advicesWidget.expiringContactsResumeAccesses.expiredStart";
    const Jv = "employer.index.advicesWidget.expiringContactsResumeAccesses.expiredEnd";
    const Kv = ({
      trls: e,
      name: n,
      data: {
        contacts: a,
        contactsPercent: t
      }
    }) => {
      const s = (0, Yv.F)(n);
      return (0, N.jsx)(Lv.Z, {
        name: n,
        button: (0, N.jsx)(y.z, {
          Element: u.SPALink,
          onClick: s,
          to: "/price/add-contacts",
          "data-qa": "advices-button",
          size: "small",
          stretched: true,
          ...(0, Zv.A)({
            isVeryLow: t <= 5,
            isZero: t === 0
          }),
          children: e[Gv]
        }),
        children: t === 0 ? (0, N.jsxs)(N.Fragment, {
          children: [e[Qv], " ", (0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            Element: "span",
            style: "negative",
            children: e[Jv]
          })]
        }) : (0, Z.WU)(e[$v], {
          "{0}": (0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            Element: "span",
            style: t > 5 ? "warning" : "negative",
            children: a
          })
        })
      });
    };
    Kv.displayName = "advices/ExpiringContactsResumeAccesses/index/ExpiringContactsResumeAccesses";
    const eb = (0, f.x)(Kv);
    var nb = a(293146);
    var ab = a(761102);
    var tb = a(497107);
    var sb = a(415913);
    var ib = a(692300);
    var rb = a(348958);
    const ob = "employer.index.advicesWidget.expiringVacancies.willExpire.single";
    const lb = "employer.index.advicesWidget.expiringVacancies.willExpire.single.specificDaysNumber";
    const cb = "employer.index.advicesWidget.expiringVacancies.willExpire.multiple";
    const db = {
      multiple: "employer.index.advicesWidget.expiringVacancies.willExpire.button",
      single: "employer.index.advicesWidget.expiringVacancies.willExpire.button.single"
    };
    const mb = "employer.index.advicesWidget.expiringVacancies.willExpire.alot";
    const pb = "employer.index.advicesWidget.expiringVacancies.willExpire.multiple.action";
    const ub = {
      one: "employer.index.advicesWidget.vacancy.one",
      some: "employer.index.advicesWidget.vacancy.some",
      many: "employer.index.advicesWidget.vacancy.many"
    };
    const hb = ({
      trls: e,
      name: n,
      data: {
        vacancyCount: a,
        vacancies: t
      }
    }) => {
      const s = a > 1;
      const i = a > 10;
      const r = (e => {
        const n = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const a = (0, Yc.Z)(e, "yyyy-MM-dd HH:mm:ss", new Date());
        const t = (0, tb.Z)(a, "Europe/Moscow");
        const s = (0, sb.Z)(t, n);
        const i = new Date();
        return (0, ib.Z)(s, i);
      })(t[0].vacancyExpirationTime);
      const o = (0, Yv.F)(n);
      const l = s ? "/employer/vacancies?order=BY_EXPIRE_TIME_ASC" : `/vacancy/${t[0].vacancyId}?runAction=prolongate`;
      return (0, N.jsx)(Lv.Z, {
        name: n,
        button: (0, N.jsx)(y.z, {
          onClick: o,
          Element: u.SPALink,
          to: l,
          size: "small",
          "data-qa": "advices-button",
          stretched: true,
          style: "negative",
          mode: "secondary",
          children: a === 1 ? e[db.single] : e[db.multiple]
        }),
        children: (() => {
          const n = r > 1;
          let t = "";
          t = i ? e[mb] : s ? e[cb] : n ? e[lb] : e[ob];
          return (0, Z.WU)(t, {
            "{0}": (0, N.jsx)(Zn.q, {
              one: e[ub.one],
              some: e[ub.some],
              many: e[ub.many],
              value: a,
              hasValue: true
            }),
            "{action}": (0, N.jsx)(j.x, {
              typography: "title-5-semibold",
              Element: "span",
              style: "negative",
              children: e[pb]
            }),
            "{when}": (0, N.jsx)(j.x, {
              typography: "title-5-semibold",
              Element: "span",
              style: "negative",
              children: (0, N.jsx)(rb.Z, {
                days: r
              })
            })
          });
        })()
      });
    };
    hb.displayName = "advices/ExpiringVacancies/index/ExpiringVacancies";
    const xb = (0, f.x)(hb);
    var yb = a(63100);
    var gb = a.n(yb);
    var vb = a(221410);
    var bb = a(128305);
    var jb = a(142159);
    const fb = "employer.index.advicesWidget.firstCampaignAuctionPromo.content";
    const _b = "employer.index.advicesWidget.firstCampaignAuctionPromo.content.accent";
    const Sb = "employer.index.advicesWidget.firstCampaignAuctionPromo.action";
    const Cb = "is_first_campaign_auction_promo_advice_closed";
    const kb = ({
      trls: e,
      name: n,
      data: {
        sumPercent: a
      }
    }) => {
      const t = (0, xn.useDispatch)();
      const [s, i] = (0, bb.i)(Cb);
      return (0, N.jsx)(vb.C, {
        sumPercent: a,
        children: s => (0, N.jsx)(Lv.Z, {
          name: n,
          onCloseClick: () => {
            t((0, Wv.D)(n));
            i(true);
          },
          button: (0, N.jsx)(y.z, {
            onClick: () => {
              s();
              gb()({
                promoKey: jb.je
              });
            },
            size: "small",
            stretched: true,
            "data-qa": "advices-button",
            mode: "secondary",
            style: "neutral",
            children: e[Sb]
          }),
          children: (0, N.jsx)(j.x, {
            Element: "span",
            typography: "subtitle-1-semibold",
            children: (0, Z.WU)(e[fb], {
              "{accent}": (0, N.jsx)(j.x, {
                Element: "span",
                typography: "subtitle-1-semibold",
                style: "negative",
                children: (0, Z.WU)(e[_b], {
                  "{percent}": a
                })
              })
            })
          })
        })
      });
    };
    kb.displayName = "advices/FirstCampaignAuctionPromoAdvice/index/FirstCampaignAuctionPromoAdvice";
    const wb = (0, f.x)(kb);
    var Nb = a(729472);
    const Eb = "employer.index.advicesWidget.lowActivityVacancies.highlighted";
    const Ab = "employer.index.advicesWidget.lowActivityVacancies.text";
    const Rb = "employer.index.advicesWidget.lowActivityVacancies.button";
    const Pb = ({
      trls: e,
      name: n,
      data: a
    }) => {
      const [t, s, i] = (0, fh.m)(false);
      const r = (0, Yv.F)(n);
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(Lv.Z, {
          name: n,
          button: (0, N.jsx)(y.z, {
            "data-qa": "advices-button",
            onClick: () => {
              r();
              s();
            },
            size: "small",
            stretched: true,
            mode: "secondary",
            style: "neutral",
            children: e[Rb]
          }),
          children: (0, Z.WU)(e[Ab], {
            "{highlighted}": (0, N.jsx)(j.x, {
              typography: "title-5-semibold",
              Element: "span",
              style: "warning",
              children: e[Eb]
            })
          })
        }), (0, N.jsx)(Nb.x, {
          hideModal: i,
          isModalOpen: t,
          vacancies: a.vacancies
        })]
      });
    };
    Pb.displayName = "advices/LowActivityVacancies/index/LowActivityVacancies";
    const Tb = (0, f.x)(Pb);
    var Ib = a(716790);
    var Lb = a(707069);
    const Wb = "employer.index.advicesWidget.lowSalary.text";
    const Bb = "employer.index.advicesWidget.lowSalary.highlighted";
    const Mb = {
      one: "employer.index.advicesWidget.lowSalary.count.one",
      some: "employer.index.advicesWidget.lowSalary.count.some",
      many: "employer.index.advicesWidget.lowSalary.count.many"
    };
    const Vb = "employer.index.advicesWidget.lowSalary.button";
    const Db = () => {
      const e = "yyyy-MM-dd";
      return `/employer/statistics/vacancies?from=main_advices&startDate=${(0, Ib.Z)((0, Lb.Z)(new Date(), 1), e)}&endDate=${(0, Ib.Z)(new Date(), e)}&salaryRange=LOW&salaryRange=TOO_LOW`;
    };
    const Fb = ({
      trls: e,
      name: n,
      data: {
        vacancyCount: a
      }
    }) => {
      const t = (0, Yv.F)(n);
      return (0, N.jsxs)(Lv.Z, {
        name: n,
        button: (0, N.jsx)(y.z, {
          onClick: t,
          Element: u.SPALink,
          to: Db(),
          size: "small",
          stretched: true,
          "data-qa": "advices-button",
          mode: "secondary",
          style: "neutral",
          children: e[Vb]
        }),
        children: [(0, N.jsx)(j.x, {
          typography: "title-5-semibold",
          Element: "span",
          style: "warning",
          children: (0, Z.WU)(e[Wb], {
            "{0}": (0, N.jsx)(Zn.q, {
              one: e[Mb.one],
              some: e[Mb.some],
              many: e[Mb.many],
              value: a,
              hasValue: true
            })
          })
        }), er.T4, e[Bb]]
      });
    };
    Fb.displayName = "advices/LowSalary/index/LowSalary";
    const Hb = (0, f.x)(Fb);
    const qb = "employer.index.advicesWidget.managerUnreadResponses.text";
    const Ub = "employer.index.advicesWidget.mcpManagerUnreadResponses.text";
    const Xb = "employer.index.advicesWidget.managerUnreadResponses.button";
    const zb = {
      one: "employer.index.advicesWidget.managerUnreadResponses.responses.one",
      some: "employer.index.advicesWidget.managerUnreadResponses.responses.some",
      many: "employer.index.advicesWidget.managerUnreadResponses.responses.many"
    };
    const Ob = ({
      trls: e,
      name: n,
      data: {
        unreadResponsesCount: a
      }
    }) => {
      const t = (0, Yv.F)(n);
      const s = a > 99 ? 99 : a;
      const i = n === "mcp_manager_unread_responses";
      return (0, N.jsx)(Lv.Z, {
        name: n,
        button: (0, N.jsx)(y.z, {
          onClick: t,
          Element: u.SPALink,
          to: i ? "/employer/advices/MCP_MANAGERS_UNREAD_RESPONSES" : "/employer/advices/MANAGER_UNREAD_RESPONSES",
          size: "small",
          stretched: true,
          "data-qa": "advices-button",
          mode: "secondary",
          style: "neutral",
          children: e[Xb]
        }),
        children: (0, Z.WU)(e[i ? Ub : qb], {
          "{responses}": (0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            Element: "span",
            style: "warning",
            children: (0, N.jsx)(Zn.q, {
              one: e[zb.one],
              some: e[zb.some],
              many: e[zb.many],
              value: s,
              hasValue: true,
              formatValue: e => a > 99 ? "99+" : e
            })
          })
        })
      });
    };
    Ob.displayName = "advices/ManagerUnreadResponses/index/ManagerUnreadResponses";
    const Zb = (0, f.x)(Ob);
    var Yb = a(513544);
    var Gb = a.n(Yb);
    const $b = "employer.index.advicesWidget.notVerified.withoutDocs";
    const Qb = "employer.index.advicesWidget.notVerified.withoutDocs.highlighted";
    const Jb = "employer.index.advicesWidget.notVerified.withDocs";
    const Kb = "employer.index.advicesWidget.notVerified.withDocs.highlighted";
    const ej = "employer.index.advicesWidget.notVerified.withoutDocs.button";
    const nj = ({
      trls: e,
      name: n,
      data: {
        hasDocuments: a,
        isNewEmployer: t
      }
    }) => {
      const s = (0, Se.Xl)();
      const i = a ? e[Jb] : e[$b];
      const r = a ? e[Kb] : e[Qb];
      const o = (0, Yv.F)(n);
      return (0, N.jsx)(Lv.Z, {
        name: n,
        button: a ? null : (0, N.jsx)(y.z, {
          onClick: () => {
            o();
            let e = "employer_new_with_doc";
            if (!a) {
              e = "employer_new_without_doc";
            }
            if (!t) {
              e = "employer_not_verified_without_doc";
            }
            Gb()({
              statusEmployer: e
            });
          },
          Element: u.SPALink,
          to: s ? "/employer/verification" : "/employer/documents",
          size: "small",
          "data-qa": "advices-button",
          stretched: true,
          mode: "secondary",
          style: "negative",
          children: e[ej]
        }),
        children: (0, Z.WU)(i, {
          "{highlighted}": (0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            Element: "span",
            style: a ? "warning" : "negative",
            children: r
          })
        })
      });
    };
    nj.displayName = "advices/NotVerified/index/NotVerified";
    const aj = (0, f.x)(nj);
    const tj = "employer.index.advicesWidget.dreamjobOpenCongratulation.text";
    const sj = "employer.index.advicesWidget.dreamjobOpenCongratulation.highlighted";
    const ij = "employer.index.advicesWidget.dreamjobOpenCongratulation.button";
    const rj = ({
      trls: e,
      name: n
    }) => {
      const {
        addNotification: a
      } = (0, qa.lm)();
      const t = (0, Yv.F)(n);
      return (0, N.jsx)(Lv.Z, {
        name: n,
        button: (0, N.jsx)(y.z, {
          Element: u.SPALink,
          to: "/employer/reviews-settings",
          size: "small",
          stretched: true,
          mode: "secondary",
          "data-qa": "advices-button",
          style: "neutral",
          onClick: () => {
            t();
            (async () => {
              try {
                await C._i.get("/shards/employer/open_employer_make_read");
              } catch (e) {
                (0, Ga.ZP)(e, a);
              }
            })();
          },
          children: e[ij]
        }),
        children: (0, Z.WU)(e[tj], {
          "{highlighted}": (0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            Element: "span",
            style: "special",
            children: e[sj]
          })
        })
      });
    };
    rj.displayName = "advices/OpenEmployerCongratulation/index/OpenEmployerCongratulation";
    const oj = (0, f.x)(rj);
    var lj = a(571047);
    const cj = {
      image: "image--_jhSllyDm8s1NwXK",
      card1: "card1--lwh5yq_5Khser2ZP",
      card2: "card2--e3JQfKoRA0UKuqym",
      card3: "card3--lokj7fEKg1Uu4FoM",
      card4: "card4--puMV4qQCukin0Fds",
      card5: "card5--T7Cn4RBgwkh4f8QD",
      card6: "card6--i2C9xLMrX8UO2S40",
      card7: "card7--CGhlnTX2cwEpT6e6",
      card8: "card8--TKW89qpDvEN7zLIx",
      card9: "card9--czMEGhz1uJ4y19dq",
      card10: "card10--VglYWEsTw0QoDo_T",
      card11: "card11--hkg9CY3uZecHsyBf",
      card12: "card12--N4mBCIO7cX63j4P5",
      card13: "card13--wi9Hphwe44ErQ3yZ",
      card14: "card14--gOuBHWuX15Ud8hnx"
    };
    const dj = {
      1: "employer.index.advicesWidget.remainingAdvice.1.text",
      2: "employer.index.advicesWidget.remainingAdvice.2.text",
      3: "employer.index.advicesWidget.remainingAdvice.3.text",
      4: "employer.index.advicesWidget.remainingAdvice.4.text",
      5: "employer.index.advicesWidget.remainingAdvice.5.text",
      6: "employer.index.advicesWidget.remainingAdvice.6.text",
      7: "employer.index.advicesWidget.remainingAdvice.7.text",
      8: "employer.index.advicesWidget.remainingAdvice.8.text",
      9: "employer.index.advicesWidget.remainingAdvice.9.text",
      10: "employer.index.advicesWidget.remainingAdvice.10.text",
      11: "employer.index.advicesWidget.remainingAdvice.11.text",
      12: "employer.index.advicesWidget.remainingAdvice.12.text",
      13: "employer.index.advicesWidget.remainingAdvice.13.text",
      14: "employer.index.advicesWidget.remainingAdvice.14.text"
    };
    const mj = ({
      trls: e
    }) => {
      const n = (0, t.useMemo)(() => (0, lj.Z)(new Date()) % Object.keys(dj).length + 1, []);
      return (0, N.jsx)(Lv.Z, {
        name: "remaining-advice",
        children: (0, N.jsxs)("div", {
          className: cj[`card${n}`],
          children: [e[dj[n]], (0, N.jsx)(Du.m, {
            layer: "content",
            children: (0, N.jsx)("div", {
              className: cj.image
            })
          })]
        })
      });
    };
    mj.displayName = "advices/RemainingAdvice/index/RemainingAdvice";
    const pj = (0, f.x)(mj);
    var uj = a(76972);
    const hj = "employer.index.advicesWidget.dreamjobTrialExtension.button";
    const xj = "employer.index.advicesWidget.dreamjobTrialExtension.soon";
    const yj = "employer.index.advicesWidget.dreamjobTrialExtension.verySoon";
    const gj = ({
      trls: e,
      name: n,
      data: {
        expirationTime: a
      }
    }) => {
      const t = Math.floor((0, uj.Z)(new Date(a), new Date()) / 24) + 1;
      const s = t <= 1;
      const i = (0, ib.Z)(new Date(a), new Date());
      const r = (0, Yv.F)(n);
      return (0, N.jsx)(Lv.Z, {
        name: n,
        button: (0, N.jsx)(y.z, {
          onClick: r,
          Element: u.SPALink,
          to: "/article/dreamjob",
          size: "small",
          "data-qa": "advices-button",
          stretched: true,
          ...(0, Zv.A)({
            isZero: t === 0,
            isVeryLow: s
          }),
          children: e[hj]
        }),
        children: (0, Z.WU)(e[s ? yj : xj], {
          "{when}": (0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            Element: "span",
            style: s ? "negative" : "warning",
            children: (0, N.jsx)(rb.Z, {
              capitalize: s,
              days: s ? i : t
            })
          })
        })
      });
    };
    gj.displayName = "advices/TrialExtension/index/TrialExtension";
    const vj = (0, f.x)(gj);
    var bj = a(785182);
    const jj = "employer.index.advicesWidget.recentlyArchievedVacancies.text";
    const fj = {
      one: "employer.index.advicesWidget.recentlyArchievedVacancies.highlighted.count.one",
      some: "employer.index.advicesWidget.recentlyArchievedVacancies.highlighted.count.some",
      many: "employer.index.advicesWidget.recentlyArchievedVacancies.highlighted.count.many"
    };
    const _j = {
      one: "employer.index.advicesWidget.recentlyArchievedVacancies.count.one",
      some: "employer.index.advicesWidget.recentlyArchievedVacancies.count.some",
      many: "employer.index.advicesWidget.recentlyArchievedVacancies.count.many"
    };
    const Sj = {
      one: "employer.index.advicesWidget.recentlyArchievedVacancies.count2.one",
      some: "employer.index.advicesWidget.recentlyArchievedVacancies.count2.some",
      many: "employer.index.advicesWidget.recentlyArchievedVacancies.count2.many"
    };
    const Cj = "employer.index.advicesWidget.recentlyArchievedVacancies.button.text";
    const kj = {
      one: "employer.index.advicesWidget.recentlyArchievedVacancies.button.count.one",
      some: "employer.index.advicesWidget.recentlyArchievedVacancies.button.count.some",
      many: "employer.index.advicesWidget.recentlyArchievedVacancies.button.count.many"
    };
    const wj = {
      text: "employer.index.advicesWidget.recentlyArchievedVacancies.moreThanLimit.text",
      count: {
        one: "employer.index.advicesWidget.recentlyArchievedVacancies.moreThanLimit.count.one",
        some: "employer.index.advicesWidget.recentlyArchievedVacancies.moreThanLimit.count.some",
        many: "employer.index.advicesWidget.recentlyArchievedVacancies.moreThanLimit.count.many"
      }
    };
    const Nj = (e, n, a) => a ? (0, Z.WU)(e[wj.text], {
      "{count}": (0, N.jsx)(Zn.q, {
        one: e[wj.count.one],
        some: e[wj.count.some],
        many: e[wj.count.many],
        value: n,
        hasValue: true
      }),
      "{countHighlited}": (0, N.jsx)(j.x, {
        typography: "title-5-semibold",
        Element: "span",
        style: "negative",
        children: (0, N.jsx)(Zn.q, {
          one: e[fj.one],
          some: e[fj.some],
          many: e[fj.many],
          value: n,
          hasValue: false
        })
      })
    }) : (0, Z.WU)(e[jj], {
      "{count}": (0, N.jsx)(Zn.q, {
        one: e[_j.one],
        some: e[_j.some],
        many: e[_j.many],
        value: n,
        hasValue: n > 1
      }),
      "{countHighlited}": (0, N.jsx)(j.x, {
        typography: "title-5-semibold",
        Element: "span",
        style: "negative",
        children: (0, N.jsx)(Zn.q, {
          one: e[fj.one],
          some: e[fj.some],
          many: e[fj.many],
          value: n,
          hasValue: false
        })
      }),
      "{count2}": (0, N.jsx)(Zn.q, {
        one: e[Sj.one],
        some: e[Sj.some],
        many: e[Sj.many],
        value: n,
        hasValue: false
      })
    });
    const Ej = ({
      trls: e,
      name: n,
      data: {
        count: a,
        limitExceeded: t
      }
    }) => {
      const s = (0, Yv.F)(n);
      return (0, N.jsx)(Lv.Z, {
        name: n,
        button: (0, N.jsx)(y.z, {
          onClick: s,
          Element: u.SPALink,
          to: "/employer/vacancies/archived",
          size: "small",
          stretched: true,
          "data-qa": "advices-button",
          mode: "primary",
          style: "negative",
          children: (0, Z.WU)(e[Cj], {
            "{count}": (0, N.jsx)(Zn.q, {
              one: e[kj.one],
              some: e[kj.some],
              many: e[kj.many],
              value: a,
              hasValue: false
            })
          })
        }),
        children: Nj(e, a, t)
      });
    };
    Ej.displayName = "advices/VacanciesArchieved/index/Component";
    const Aj = (0, Bs.Z)(Ej);
    var Rj = a(974001);
    var Pj = a(562956);
    const Tj = "employer.index.advicesWidget.dreamjobWithoutReviews.text";
    const Ij = "employer.index.advicesWidget.dreamjobWithoutReviews.highlighted";
    const Lj = "employer.index.advicesWidget.dreamjobWithoutReviews.button";
    const Wj = ({
      trls: e,
      name: n
    }) => {
      const a = (0, Yv.F)(n);
      return (0, N.jsx)(Lv.Z, {
        name: n,
        button: (0, N.jsx)(y.z, {
          onClick: a,
          Element: u.SPALink,
          to: "/employer/reviews-settings",
          size: "small",
          "data-qa": "advices-button",
          stretched: true,
          mode: "secondary",
          style: "neutral",
          children: e[Lj]
        }),
        children: (0, Z.WU)(e[Tj], {
          "{highlighted}": (0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            Element: "span",
            style: "warning",
            children: e[Ij]
          })
        })
      });
    };
    Wj.displayName = "advices/WithoutReviews/index/WithoutReviews";
    const Bj = (0, f.x)(Wj);
    var Mj = a(881791);
    const Vj = "container--jRsM0Rg7OM8F0chi";
    const Dj = ({
      children: e,
      cardsCount: n
    }) => {
      const a = (0, t.useRef)(null);
      const s = (0, t.useRef)(null);
      const [i, r] = (0, t.useState)(1);
      const [o, l] = (0, t.useState)(0);
      const c = (0, t.useRef)(null);
      const d = (0, t.useRef)(1);
      d.current = i;
      const m = (0, t.useMemo)(() => n > 1, [n]);
      const p = (0, t.useCallback)(() => {
        var e;
        var a;
        if (d.current !== n) {
          if ((e = s.current) !== null && e !== undefined) {
            e.scrollRight();
          }
        } else if ((a = s.current) !== null && a !== undefined) {
          a.scrollToFirstItem();
        }
      }, [n]);
      const u = (0, t.useCallback)(() => {
        if (s != null && s.current) {
          c.current = setInterval(() => {
            l(e => e === 100 ? (p(), 0) : e + 1);
          }, 70);
        }
      }, [p]);
      const h = (0, t.useCallback)(() => {
        if (!c.current) {
          l(0);
          u();
        }
      }, [u]);
      const x = (0, t.useCallback)(() => {
        if ((0, sh.isNumber)(c.current)) {
          clearInterval(c.current);
        }
        c.current = null;
        l(0);
      }, []);
      (0, t.useEffect)(() => {
        const e = a.current;
        if (s != null && s.current && m) {
          h();
        }
        if (e != null) {
          e.addEventListener("mouseenter", x);
        }
        if (m) {
          if (e != null) {
            e.addEventListener("mouseleave", h);
          }
        }
        return () => {
          if (e != null) {
            e.removeEventListener("mouseenter", x);
          }
          if (e != null) {
            e.removeEventListener("mouseleave", h);
          }
        };
      }, [m, h, x]);
      return (0, N.jsx)(Mj.xR, {
        disableButtons: true,
        ref: s,
        showDotPages: true,
        onChangeDot: r,
        dotPagesProps: {
          activeDynamic: true,
          progressProps: {
            progress: o
          }
        },
        children: (0, N.jsx)("div", {
          ref: a,
          className: Vj,
          children: e
        })
      });
    };
    Dj.displayName = "components/ScrollableContainerAuto/index/ScrollableContainerAuto";
    const Fj = (0, f.x)(Dj);
    var Hj = a(800113);
    const qj = () => {
      const e = (0, Hj.O)();
      const n = (0, _.v)(e => e.employerAdvicesWidget.advices);
      const a = (0, _.v)(e => e.employerAdvicesWidget.priority);
      return (0, t.useMemo)(() => e ? a === 0 ? n.filter(e => e.name !== "unused_publications") : [] : n, [n, a, e]);
    };
    const Uj = "item-container--JsUqFaU9ed03JDV9";
    const Xj = "container--LTq6SpFcYm00CR30";
    const zj = Pv.M.CARD;
    const Oj = e => {
      switch (e.name) {
        case "expiring_publications_today":
        case "expiring_publications_tomorrow":
        case "expiring_publications_soon":
          return (0, N.jsx)(nb.k, {
            ...e,
            type: zj
          });
        case "expiring_vacancies":
          return (0, N.jsx)(xb, {
            ...e
          });
        case "expiring_contacts_resume_accesses":
          return (0, N.jsx)(eb, {
            ...e
          });
        case "trial_extension":
          return (0, N.jsx)(vj, {
            ...e
          });
        case "unused_publications":
          return (0, N.jsx)(bj.Z, {
            type: zj,
            ...e
          });
        case "not_verified":
          return (0, N.jsx)(aj, {
            ...e
          });
        case "wait_activation":
          return (0, N.jsx)(Rj.Z, {
            type: zj,
            ...e
          });
        case "wait_payment":
          return (0, N.jsx)(Pj.Z, {
            type: zj,
            ...e
          });
        case "low_activity_vacancies":
          return (0, N.jsx)(Tb, {
            ...e
          });
        case "manager_unread_responses":
        case "mcp_manager_unread_responses":
          return (0, N.jsx)(Zb, {
            ...e
          });
        case "low_salary":
          return (0, N.jsx)(Hb, {
            ...e
          });
        case "open_employer_congratulation":
          return (0, N.jsx)(oj, {
            ...e
          });
        case "without_reviews":
          return (0, N.jsx)(Bj, {
            ...e
          });
        case "recently_achrieved_vacancies":
          return (0, N.jsx)(Aj, {
            ...e
          });
        case "expiring_resume_accesses_new":
          return (0, N.jsx)(ab.Z, {
            ...e,
            type: zj
          });
        case "expired_resume_accesses_new":
          return (0, N.jsx)(Ov.Z, {
            ...e,
            type: zj
          });
        case "clickme_no_money":
          return (0, N.jsx)(Hv, {
            ...e
          });
        case "first_campaign_auction_promo":
          return (0, N.jsx)(wb, {
            ...e
          });
        default:
          return null;
      }
    };
    const Zj = () => {
      const {
        isGtS: e
      } = (0, F.G)();
      const n = qj();
      const a = (0, _.v)(e => e.employerAdvicesWidget.closedAdvices);
      const s = (0, _.v)(e => e.employerAdvicesWidget.priority);
      const i = !!(0, _.v)(({
        microFrontends: e
      }) => e[Av]);
      let r = (0, N.jsx)("div", {
        children: n.map(e => (0, N.jsx)(t.Fragment, {
          children: Oj(e)
        }, e.name))
      });
      if (i && s > 0) {
        r = (0, N.jsx)(Rv, {});
      } else if (!n.length && a != null && a.length) {
        r = (0, N.jsx)(zv, {});
      } else if (n.length) {
        if (n.length > 1) {
          r = (0, N.jsx)(Fj, {
            cardsCount: n.length,
            children: n.map(e => (0, N.jsx)(Nv.r, {
              className: Uj,
              children: Oj(e)
            }, e.name))
          });
        }
      } else {
        if (!e) {
          return null;
        }
        r = (0, N.jsx)(pj, {});
      }
      return (0, N.jsx)("div", {
        className: Xj,
        children: r
      });
    };
    Zj.displayName = "components/EmployerAdvicesWidget/index/EmployerAdvicesWidget";
    const Yj = (0, f.x)(Zj);
    var Gj = a(105163);
    var $j = a(228249);
    var Qj = a(363219);
    var Jj = a.n(Qj);
    const Kj = e => {
      const [n, a] = (0, t.useState)(false);
      const {
        addNotification: s
      } = (0, qa.lm)();
      const i = (0, t.useCallback)(e => {
        m().sendHHEventButtonClick("banners_widget_card", {
          card: e
        });
      }, []);
      return (0, t.useCallback)(async () => {
        if (!n && e) {
          i(e);
          if (e === Gj.T.Talantix) {
            Jj()({
              hhtmSourceLabel: "main_banner"
            });
          }
          try {
            a(true);
            await C._i.put("/shards/employer/banners_widget_make_seen", {
              banner: e
            });
          } catch (e) {
            (0, Ga.ZP)(e, s);
          }
        }
      }, [s, n, e, i]);
    };
    const ef = {
      icon: "icon--rmSGc_jNWO8h5HyD",
      clickme: "clickme--Utq7tI1kuB84q3ul",
      hrlink: "hrlink--lcnJ4AM7xMTnqFGN",
      hhbusiness: "hhbusiness--G8AnO4LHEIxqlmEm",
      skillaz: "skillaz--zrQNPatC1hgqwnae",
      talantix: "talantix--XcLAcKEAqcoitiTi",
      setka: "setka--v079w_cqWg4Jph91",
      rabotaby: "rabotaby--l_4djQ_fdfwRekE2",
      "hh-alfa": "hh-alfa--bWUUDDFx8d8U_CLW",
      hhAlfa: "hh-alfa--bWUUDDFx8d8U_CLW"
    };
    const nf = ({
      name: e
    }) => (0, N.jsx)("div", {
      className: ge()(ef.icon, ef[e])
    });
    nf.displayName = "EmployerBannersWidget/ServiceCardIcon/index/ServiceCardIcon";
    const af = (0, f.x)(nf);
    const tf = "bg-image--PYPd_DDRl18ELuRg";
    const sf = "text-variant--ngTBLZQKc5URewLD";
    const rf = "text-variant-active--TLwV9YckG2EZ1dLv";
    const of = "text-container--t2eONlbLFkUBNC4S";
    const lf = "content--q1KDcSRIptwCwkAA";
    const cf = {
      1: {
        title: "employer.index.bannersWidget.alfa.title1",
        text: "employer.index.bannersWidget.alfa.text1"
      },
      2: {
        title: "employer.index.bannersWidget.alfa.title2",
        text: "employer.index.bannersWidget.alfa.text2"
      },
      3: {
        title: "employer.index.bannersWidget.alfa.title3",
        text: "employer.index.bannersWidget.alfa.text3"
      }
    };
    const df = "employer.index.bannersWidget.alfa.button";
    const mf = ({
      trls: e,
      name: n,
      bannerHeight: a
    }) => {
      const [s, i] = (0, t.useState)(1);
      const r = Kj(n);
      (0, t.useEffect)(() => {
        const e = setInterval(() => {
          i(e => e === 1 ? 2 : e === 2 ? 3 : 1);
        }, 8000);
        return () => clearInterval(e);
      }, []);
      return (0, N.jsx)($j.Z, {
        style: "warning-secondary",
        bannerHeight: a,
        name: n,
        title: (0, N.jsx)(Du.m, {
          layer: "content",
          children: (0, N.jsxs)("div", {
            className: lf,
            children: [(0, N.jsx)(af, {
              name: "hh-alfa"
            }), (0, N.jsx)(v.X, {
              default: 12
            }), (0, N.jsx)("div", {
              className: of,
              children: Object.entries(cf).map(([n, a]) => {
                const t = s === Number(n);
                return (0, N.jsxs)("div", {
                  className: ge()(sf, {
                    [rf]: t
                  }),
                  children: [(0, N.jsx)(j.x, {
                    style: "contrast",
                    typography: "title-4-semibold",
                    children: e[a.title]
                  }), (0, N.jsx)(v.X, {
                    default: 12
                  }), (0, N.jsx)(j.x, {
                    style: "contrast",
                    typography: "label-3-regular",
                    children: e[a.text]
                  })]
                }, n);
              })
            })]
          })
        }),
        button: (0, N.jsx)(y.z, {
          size: "small",
          mode: "primary",
          style: "constant",
          "data-qa": "banner_button",
          stretched: true,
          nonMagritteExternalLink: true,
          Element: u.SPALink,
          target: "_blank",
          to: "https://my.hh.ru/1e6",
          onClick: r,
          children: e[df]
        }),
        children: (0, N.jsx)("div", {
          className: tf
        })
      });
    };
    mf.displayName = "banners/AlfaBanner/index/AlfaBanner";
    const pf = (0, f.x)(mf);
    const uf = "qr-code--dXgbkSNLIgYWTjFb";
    const hf = "qr-code-container--J9TirtMwoRA3CXjJ";
    const xf = "card-flipper--i9BHTfl98kp1fOnI";
    const yf = "card-flipper-flipped--ArXvp8Y0b_8dIUW7";
    const gf = "card-front--zPhfmIWHMDGOWLtL";
    const vf = "card-back--QET6n7jbnzIe_3BE";
    const bf = "card-back-content--GYSSpDN5NhY4qP7s";
    const jf = "employer.index.bannersWidget.mobileApp.button";
    const ff = "employer.index.bannersWidget.mobileApp.xs.button";
    const _f = "employer.index.bannersWidget.mobileApp.closeButton";
    const Sf = "employer.banner.suitable-gifts-promo.qr-code.alt-text";
    const Cf = ({
      trls: e,
      onClick: n,
      name: a,
      children: s,
      qrCodeImgPath: i,
      bannerHeight: r,
      mobileLink: o
    }) => {
      const l = !!(0, _.v)(({
        device: e
      }) => e).type;
      const [c, d] = (0, t.useState)(false);
      const m = l ? {
        Element: "a",
        href: o,
        target: "_blank"
      } : {};
      return (0, N.jsx)($j.Z, {
        style: "secondary",
        bannerHeight: r,
        button: (0, N.jsx)(y.z, {
          "data-qa": "banner_button",
          size: "small",
          mode: "primary",
          style: "constant",
          stretched: true,
          onClick: () => {
            n();
            if (!l) {
              d(e => !e);
            }
          },
          ...m,
          children: c ? e[_f] : e[l ? ff : jf]
        }),
        name: a,
        children: (0, N.jsxs)("div", {
          "data-qa": "card-flipper-content",
          className: ge()(xf, {
            [yf]: c
          }),
          children: [(0, N.jsx)("div", {
            className: gf,
            children: s
          }), (0, N.jsx)("div", {
            className: vf,
            children: (0, N.jsx)("div", {
              className: bf,
              children: (0, N.jsx)(Y.Z, {
                padding: 8,
                style: "primary",
                borderRadius: 12,
                children: (0, N.jsx)("div", {
                  "data-qa": "card-back-content",
                  className: hf,
                  children: (0, N.jsx)(_e.Z, {
                    className: uf,
                    path: i,
                    alt: e[Sf]
                  })
                })
              })
            })
          })]
        })
      });
    };
    Cf.displayName = "EmployerBannersWidget/FlippableBannerQrCode/index/FlippableBannerQrCode";
    const kf = (0, f.x)(Cf);
    const wf = a.p + "static/images/qr-code-transparent__min_8a52c3832651af0a.webp";
    const Nf = "bg-image--rxtwbauyjjsXHTWH";
    const Ef = "employer.index.bannersWidget.mobileApp.text";
    const Af = ({
      trls: e,
      name: n,
      bannerHeight: a
    }) => {
      const t = Kj(n);
      return (0, N.jsxs)(kf, {
        bannerHeight: a,
        name: n,
        onClick: t,
        qrCodeImgPath: wf,
        mobileLink: "https://hh.ru/emp/qr_employer_page",
        children: [(0, N.jsx)(af, {
          name: "hhbusiness"
        }), (0, N.jsx)(v.X, {
          default: 12
        }), e[Ef], (0, N.jsx)("div", {
          className: Nf
        })]
      });
    };
    Af.displayName = "banners/MobileAppBanner/index/MobileAppBanner";
    const Rf = (0, f.x)(Af);
    const Pf = "container--ONergJnNm2YWmZxM";
    const Tf = ({
      icon: e,
      children: n
    }) => (0, N.jsxs)("div", {
      className: Pf,
      children: [e, (0, N.jsx)(j.x, {
        typography: "label-3-regular",
        children: n
      })]
    });
    Tf.displayName = "EmployerBannersWidget/ServiceName/index/ServiceName";
    const If = (0, f.x)(Tf);
    const Lf = a.p + "static/images/rabotaby-employer-qr-code__min_bb4d53d4d4c49b56.svg";
    const Wf = "bg-image--lHhZMI7ea3gAdDlk";
    const Bf = "employer.index.bannersWidget.rabotaByMobileApp.text";
    const Mf = "employer.index.bannersWidget.rabotaByMobileApp.title";
    const Vf = ({
      trls: e,
      name: n,
      bannerHeight: a
    }) => {
      const t = Kj(n);
      return (0, N.jsxs)(kf, {
        bannerHeight: a,
        name: n,
        onClick: t,
        qrCodeImgPath: Lf,
        mobileLink: "https://rabota.by/emp/qr_employer_footer",
        children: [(0, N.jsx)(If, {
          icon: (0, N.jsx)(af, {
            name: "rabotaby"
          }),
          children: e[Mf]
        }), (0, N.jsx)(v.X, {
          default: 12
        }), e[Bf], (0, N.jsx)("div", {
          className: Wf
        })]
      });
    };
    Vf.displayName = "banners/RabotaByAppBanner/index/MobileAppBanner";
    const Df = (0, f.x)(Vf);
    const Ff = a.p + "static/images/setka-qr-code-transparent__min_b3d06845a4db4d54.webp";
    const Hf = "bg-image--aAZk7tUKXkE6cUtc";
    const qf = "employer.index.bannersWidget.setka.text";
    const Uf = "employer.index.bannersWidget.setka.title";
    const Xf = ({
      trls: e,
      name: n,
      bannerHeight: a
    }) => {
      const t = Kj(n);
      return (0, N.jsxs)(kf, {
        bannerHeight: a,
        name: n,
        onClick: t,
        qrCodeImgPath: Ff,
        mobileLink: "https://4284841.redirect.appmetrica.yandex.com/?appmetrica_tracking_id=533228366812154364&utm_medium=banner&ut",
        children: [(0, N.jsx)(If, {
          icon: (0, N.jsx)(af, {
            name: "setka"
          }),
          children: e[Uf]
        }), (0, N.jsx)(v.X, {
          default: 12
        }), e[qf], (0, N.jsx)("div", {
          className: Hf
        })]
      });
    };
    Xf.displayName = "banners/SetkaAppBanner/index/SetkaAppBanner";
    const zf = (0, f.x)(Xf);
    const Of = {
      text: "employer.index.bannersWidget.clickme.text",
      title: "employer.index.bannersWidget.clickme.title"
    };
    const Zf = {
      text: "employer.index.bannersWidget.clickmeSecondary.text"
    };
    const Yf = {
      text: "employer.index.bannersWidget.startLink.text"
    };
    const Gf = {
      text: "employer.index.bannersWidget.hrLink.text"
    };
    const $f = {
      text: "employer.index.bannersWidget.skillaz.text"
    };
    const Qf = {
      text: "employer.index.bannersWidget.skillazSecondary.text"
    };
    const Jf = {
      text: "employer.index.bannersWidget.pfp.text",
      button: "employer.index.bannersWidget.pfp.button"
    };
    const Kf = {
      text: "employer.index.bannersWidget.efficiency.text",
      button: "employer.index.bannersWidget.efficiency.button"
    };
    const e_ = {
      text: "employer.index.bannersWidget.talantix.text",
      button: "employer.index.bannersWidget.talantix.button"
    };
    const n_ = {
      text: "employer.index.bannersWidget.liveInCompany.text",
      title: "employer.index.bannersWidget.liveInCompany.title"
    };
    const a_ = {
      text: "employer.index.bannersWidget.itProject.text",
      title: "employer.index.bannersWidget.itProject.title"
    };
    const t_ = {
      text: "employer.index.bannersWidget.responses.text"
    };
    const s_ = {
      text: "employer.index.bannersWidget.brandPage.text",
      title: "employer.index.bannersWidget.brandPage.title"
    };
    const i_ = {
      text: "employer.index.bannersWidget.brandVacancy.text",
      title: "employer.index.bannersWidget.brandVacancy.title"
    };
    const r_ = {
      text: "employer.index.bannersWidget.brandSnippet.text",
      title: "employer.index.bannersWidget.brandSnippet.title"
    };
    const o_ = {
      text: "employer.index.bannersWidget.dreamjob.text",
      title: "employer.index.bannersWidget.dreamjob.title"
    };
    const l_ = {
      text: "employer.index.bannersWidget.branding.text"
    };
    const c_ = {
      text: "employer.index.bannersWidget.search.text"
    };
    const d_ = {
      text: "employer.index.bannersWidget.vacancy.text"
    };
    const m_ = {
      text: "employer.index.bannersWidget.vacancyStandardPlus.text"
    };
    const p_ = {
      text: "employer.index.bannersWidget.vacancyPremium.text"
    };
    const u_ = {
      text: "employer.index.bannersWidget.hhStats.text"
    };
    const h_ = {
      text: "employer.index.bannersWidget.turboResponse.text",
      title: "employer.index.bannersWidget.turboResponse.title"
    };
    const x_ = {
      text: "employer.index.bannersWidget.kakdela.text"
    };
    const y_ = {
      text: "employer.index.bannersWidget.hrBrand.text"
    };
    const g_ = {
      text: "employer.index.bannersWidget.hrBrandConference.text"
    };
    const v_ = {
      text: "employer.index.bannersWidget.vacancyAdvice.text",
      button: "employer.index.bannersWidget.vacancyAdvice.button",
      title: "employer.index.bannersWidget.vacancyAdvice.title"
    };
    const b_ = {
      text: "employer.index.bannersWidget.companyOfDay.text"
    };
    const j_ = {
      text: "employer.index.bannersWidget.vacancyTypesZp.text",
      button: "employer.index.bannersWidget.vacancyTypesZp.button"
    };
    const f_ = {
      text: "employer.index.bannersWidget.bundlesZp.text"
    };
    const __ = {
      text: "employer.index.bannersWidget.baseZp.text",
      button: "employer.index.bannersWidget.baseZp.button"
    };
    const S_ = {
      text: "employer.index.bannersWidget.zpEmployerMigrate.text",
      button: "employer.index.bannersWidget.zpEmployerMigrate.button"
    };
    const C_ = "employer.index.bannersWidget.default.button";
    const k_ = ({
      trls: e,
      bannerHeight: n
    }) => {
      const {
        banner: a
      } = (0, _.v)(e => e.employerBannersWidget);
      const s = (e => {
        const n = (0, Se.$w)();
        return (0, t.useMemo)(() => ({
          [Gj.T.Clickme]: {
            isOuterLink: true,
            buttonLink: "https://clickme.hh.ru/new/dashboard?utm_source=hh.ru&utm_medium=referral&utm_campaign=main_widget_unconnected_service&utm_content=multy",
            buttonText: e[C_],
            text: e[Of.text],
            title: (0, N.jsx)(If, {
              icon: (0, N.jsx)(af, {
                name: "clickme"
              }),
              children: e[Of.title]
            }),
            style: "special-secondary"
          },
          [Gj.T.ClickmeSecondary]: {
            isOuterLink: true,
            buttonLink: "https://clickme.hh.ru/new/dashboard?utm_source=hh.ru&utm_medium=referral&utm_campaign=main_widget_unconnected_service&utm_content=top",
            buttonText: e[C_],
            text: e[Zf.text],
            title: (0, N.jsx)(If, {
              icon: (0, N.jsx)(af, {
                name: "clickme"
              }),
              children: e[Of.title]
            }),
            style: "special-secondary"
          },
          [Gj.T.StartLink]: {
            buttonLink: "/article/hrlink?utm_source=hh&utm_medium=hh_main&utm_campaign=main_banner",
            buttonText: e[C_],
            text: e[Yf.text],
            title: (0, N.jsx)(af, {
              name: "hrlink"
            }),
            style: "accent-secondary"
          },
          [Gj.T.HrLink]: {
            buttonLink: "/article/hrlink?utm_source=hh&utm_medium=hh_main&utm_campaign=main_banner",
            buttonText: e[C_],
            text: e[Gf.text],
            title: (0, N.jsx)(af, {
              name: "hrlink"
            }),
            style: "accent-secondary"
          },
          [Gj.T.Skillaz]: {
            buttonLink: "/article/skillaz_lms?utm_source=hh&utm_medium=hh_main&utm_campaign=main_banner",
            buttonText: e[C_],
            text: e[$f.text],
            title: (0, N.jsx)(af, {
              name: "skillaz"
            }),
            style: "negative-secondary"
          },
          [Gj.T.SkillazSecondary]: {
            buttonLink: "/article/skillaz?utm_source=hh&utm_medium=hh_main&utm_campaign=main_banner",
            buttonText: e[C_],
            text: e[Qf.text],
            title: (0, N.jsx)(af, {
              name: "skillaz"
            }),
            style: "secondary"
          },
          [Gj.T.Pfp]: {
            buttonLink: nn.Z.promotionPayForContact,
            buttonText: e[Jf.button],
            text: e[Jf.text],
            style: "warning-secondary"
          },
          [Gj.T.Efficiency]: {
            buttonLink: "/employer/vacancies?groupId=all&utm_source=hh.ru&utm_medium=referral&utm_campaign=widget_main_health&utm_content=onboarding_tab_stat",
            buttonText: e[Kf.button],
            text: e[Kf.text],
            style: "warning-secondary"
          },
          [Gj.T.Talantix]: {
            buttonLink: "https://talantix.ru/promo/skorost-nayma?utm_source=hh.ru&utm_medium=referral&utm_campaign=main_banner",
            isOuterLink: true,
            title: (0, N.jsx)(af, {
              name: "talantix"
            }),
            buttonText: e[e_.button],
            text: e[e_.text],
            style: "accent-secondary"
          },
          [Gj.T.LiveInCompany]: {
            buttonLink: "/article/inside?utm_source=hh.ru&utm_medium=banner&utm_campaign=mainbanner",
            buttonText: e[C_],
            isTextSmall: true,
            title: (0, N.jsx)(j.x, {
              typography: "subtitle-1-semibold",
              children: e[n_.title]
            }),
            text: e[n_.text],
            style: "warning-secondary"
          },
          [Gj.T.ItProject]: {
            buttonLink: "/article/advit?utm_source=hh.ru&utm_medium=banner&utm_campaign=mainbanner",
            buttonText: e[C_],
            isTextSmall: true,
            title: (0, N.jsx)(j.x, {
              typography: "subtitle-1-semibold",
              children: e[a_.title]
            }),
            text: e[a_.text],
            style: "warning-secondary"
          },
          [Gj.T.Responses]: {
            buttonLink: "/employer/automation?automation=autoInvitation&from=main_banner",
            buttonText: e[C_],
            text: e[t_.text],
            style: "warning-secondary"
          },
          [Gj.T.BrandPage]: {
            buttonLink: "/article/brandpage?utm_source=hh&utm_medium=hh_main&utm_campaign=main_banner",
            buttonText: e[C_],
            isTextSmall: true,
            text: e[s_.text],
            title: (0, N.jsx)(j.x, {
              typography: "subtitle-1-semibold",
              children: e[s_.title]
            }),
            style: "warning-secondary"
          },
          [Gj.T.BrandVacancy]: {
            buttonLink: "/article/brandvacancy?utm_source=hh&utm_medium=hh_main&utm_campaign=main_banner",
            buttonText: e[C_],
            isTextSmall: true,
            text: e[i_.text],
            title: (0, N.jsx)(j.x, {
              typography: "subtitle-1-semibold",
              children: e[i_.title]
            }),
            style: "warning-secondary"
          },
          [Gj.T.BrandSnippet]: {
            buttonLink: "/article/brandsnippet?utm_source=hh&utm_medium=hh_main&utm_campaign=main_banner",
            buttonText: e[C_],
            isTextSmall: true,
            text: e[r_.text],
            title: (0, N.jsx)(j.x, {
              typography: "subtitle-1-semibold",
              children: e[r_.title]
            }),
            style: "warning-secondary"
          },
          [Gj.T.Dreamjob]: {
            buttonLink: "/article/dreamjob?utm_source=hh&utm_medium=hh_main&utm_campaign=main_banner",
            buttonText: e[C_],
            text: e[o_.text],
            title: (0, N.jsx)(If, {
              icon: (0, N.jsx)(fe.RC4, {}),
              children: e[o_.title]
            }),
            style: "accent-secondary"
          },
          [Gj.T.Branding]: {
            buttonLink: n ? "/article/30459?hash=e867fe45e7323e17026ae7c9518e10f2" : "/price/branding",
            buttonText: e[C_],
            text: e[l_.text],
            style: "warning-secondary"
          },
          [Gj.T.Search]: {
            buttonLink: n ? "/price/zp-resume-access" : "/price/dbaccess",
            buttonText: e[C_],
            text: e[c_.text],
            style: "warning-secondary"
          },
          [Gj.T.VacancyStandardPlus]: {
            buttonLink: "/price/regional-publications",
            buttonText: e[C_],
            text: e[m_.text],
            style: "warning-secondary"
          },
          [Gj.T.Vacancy]: {
            buttonLink: n ? "/price/zp-publications" : "/price/regional-publications",
            buttonText: e[C_],
            text: e[d_.text],
            style: "warning-secondary"
          },
          [Gj.T.VacancyPremium]: {
            buttonLink: n ? "/price/zp-promotion" : "/price/regional-publications",
            buttonText: e[C_],
            text: e[p_.text],
            style: "warning-secondary"
          },
          [Gj.T.HHStats]: {
            buttonLink: "https://stats.hh.kz/",
            isOuterLink: true,
            buttonText: e[C_],
            text: e[u_.text],
            style: "warning-secondary"
          },
          [Gj.T.TurboResponse]: {
            buttonLink: "/article/30609",
            buttonText: e[C_],
            text: e[h_.text],
            isTextSmall: true,
            title: (0, N.jsx)(j.x, {
              typography: "subtitle-1-semibold",
              children: e[h_.title]
            }),
            style: "warning-secondary"
          },
          [Gj.T.KakDela]: {
            buttonLink: "https://kakdela.hh.kz/",
            isOuterLink: true,
            buttonText: e[C_],
            text: e[x_.text],
            style: "warning-secondary"
          },
          [Gj.T.HrBrand]: {
            buttonLink: "https://kz.hrbrand.ru/",
            isOuterLink: true,
            buttonText: e[C_],
            text: e[y_.text],
            style: "warning-secondary"
          },
          [Gj.T.HrBrandConference]: {
            buttonLink: "https://hrbrand.asia/",
            buttonText: e[C_],
            text: e[g_.text],
            style: "warning-secondary"
          },
          [Gj.T.VacancyAdvice]: {
            buttonLink: n ? "https://www.journal.zarplata.ru/how-to-design-a-vacancy-to-lure-the-best/ " : "/article/29120",
            isOuterLink: n,
            buttonText: e[v_.button],
            text: e[v_.text],
            isTextSmall: true,
            title: (0, N.jsx)(j.x, {
              typography: "subtitle-1-semibold",
              children: e[v_.title]
            }),
            style: "warning-secondary"
          },
          [Gj.T.CompanyOfDay]: {
            buttonLink: "/article/33223",
            buttonText: e[C_],
            text: e[b_.text],
            style: "warning-secondary"
          },
          [Gj.T.VacancyTypesZp]: {
            buttonLink: "https://www.journal.zarplata.ru/when-and-how-to-post-a-vacancy-to-get-more-responses-2/",
            isOuterLink: true,
            buttonText: e[j_.button],
            text: e[j_.text],
            style: "warning-secondary"
          },
          [Gj.T.BundlesZp]: {
            buttonLink: "/price/zp-bundles",
            buttonText: e[C_],
            text: e[f_.text],
            style: "accent-secondary"
          },
          [Gj.T.BaseZp]: {
            buttonLink: "/article/23786",
            buttonText: e[__.button],
            text: e[__.text],
            style: "warning-secondary"
          },
          [Gj.T.ZpEmployerMigrate]: {
            buttonLink: "/employer/zp_employer_migrate",
            buttonText: e[S_.button],
            text: e[S_.text],
            style: "warning-secondary"
          }
        }), [n, e]);
      })(e);
      const i = (0, t.useMemo)(() => ((e, n) => {
        switch (e == null ? undefined : e.name) {
          case Gj.T.Alfa:
            return (0, N.jsx)(pf, {
              bannerHeight: n,
              ...e
            });
          case Gj.T.MobileApp:
            return (0, N.jsx)(Rf, {
              bannerHeight: n,
              ...e
            });
          case Gj.T.RabotaByMobileApp:
            return (0, N.jsx)(Df, {
              bannerHeight: n,
              ...e
            });
          case Gj.T.Setka:
            return (0, N.jsx)(zf, {
              bannerHeight: n,
              ...e
            });
          default:
            return null;
        }
      })(a, n), [a, n]);
      const r = Kj(a == null ? undefined : a.name);
      if (!a) {
        return null;
      }
      const o = s[a.name];
      if (o) {
        return (0, N.jsx)($j.Z, {
          bannerHeight: n,
          style: o.style,
          isTextSmall: o.isTextSmall,
          button: (0, N.jsx)(y.z, {
            size: "small",
            mode: "primary",
            style: "constant",
            "data-qa": "banner_button",
            stretched: true,
            nonMagritteExternalLink: true,
            Element: u.SPALink,
            target: o.isOuterLink ? "_blank" : undefined,
            to: o.buttonLink,
            onClick: r,
            children: o.buttonText
          }),
          name: a.name,
          title: o.title,
          children: o.text
        });
      } else {
        return i || null;
      }
    };
    k_.displayName = "components/EmployerBannersWidget/index/EmployerBannersWidget";
    const w_ = (0, f.x)(k_);
    var N_ = a(718871);
    var E_ = a(280632);
    const A_ = "resumeSearchesWidget.savedSearches.noRegion";
    const R_ = ({
      trls: e,
      areas: n = []
    }) => n.length ? (0, N.jsx)(N.Fragment, {
      children: n.join(", ")
    }) : (0, N.jsx)(N.Fragment, {
      children: e[A_]
    });
    R_.displayName = "components/CellSubtitle/Area/AreaComponent";
    const P_ = (0, f.x)(R_);
    const T_ = ({
      employments: e
    }) => (0, N.jsx)(N.Fragment, {
      children: e.join(", ")
    });
    T_.displayName = "components/CellSubtitle/Employment/Employment";
    const I_ = "subtitle--fil9xD5IuYXzHHDi";
    const L_ = "section--w0CAb7CgTyIqSVuY";
    const W_ = "growing--foDasKLu5UYOdxRe";
    const B_ = ({
      items: e,
      inCell: n = true
    }) => {
      const a = (0, t.useRef)([]);
      const {
        isXS: s
      } = (0, F.G)();
      (0, t.useLayoutEffect)(() => {
        if (!s) {
          a.current.forEach(e => {
            const n = e.firstElementChild;
            if (n && n.clientWidth < 150) {
              e.style.minWidth = `${n.clientWidth}px`;
            }
          });
        }
      }, [s]);
      const i = (0, N.jsx)("div", {
        className: I_,
        children: e.map((e, n) => (0, N.jsx)("div", {
          className: ge()(L_, {
            [W_]: e.growing
          }),
          ref: n => {
            ((e, n) => {
              if (e && !n.growing) {
                a.current.push(e);
              }
            })(n, e);
          },
          children: (0, N.jsx)(j.x, {
            typography: "label-3-regular",
            style: "secondary",
            maxLines: 1,
            children: e.content
          })
        }, n))
      });
      if (n) {
        return (0, N.jsx)(qe.j, {
          children: i
        });
      } else {
        return i;
      }
    };
    B_.displayName = "components/CellSubtitle/Subtitle/Subtitle";
    const M_ = "cell-wrapper--PLapyNkGRw71Ubep";
    const V_ = "cell-wrapper-short--YglJrYZT188plXDZ";
    const D_ = ({
      children: e,
      isShort: n
    }) => (0, N.jsx)("div", {
      className: ge()(M_, {
        [V_]: n
      }),
      children: e
    });
    D_.displayName = "components/CellWrapper/index/CellWrapper";
    const F_ = D_;
    const H_ = "placeholder--yALOFJz1GkqbOZqC";
    const q_ = ({
      children: e
    }) => (0, N.jsx)("div", {
      className: H_,
      children: e
    });
    q_.displayName = "components/Placeholder/index/Placeholder";
    const U_ = q_;
    var X_ = a(633747);
    var z_ = a(642053);
    var O_ = a(133795);
    const Z_ = "cell-content--tjhTYREpcN44vsN6";
    const Y_ = "chevron--QB4hJVe0SxQxkIJ_";
    const G_ = "remove--srs86S6GMtLRwLZN";
    const $_ = "resumeSearchesWidget.lastSearches.noName";
    const Q_ = {
      title: "resumeSearchesWidget.lastSearches.placeholder.title",
      description: "resumeSearchesWidget.lastSearches.placeholder.description",
      button: "resumeSearchesWidget.lastSearches.placeholder.button"
    };
    const J_ = ({
      trls: e
    }) => {
      const n = (0, xn.useDispatch)();
      const {
        addNotification: a
      } = (0, qa.lm)();
      const s = (0, _.v)(e => e.employerLastSearches);
      const i = (0, Se.$w)();
      const r = (0, Se.Xl)();
      const o = (0, t.useCallback)(() => {
        m().sendHHEventButtonClick("last_searches_item", {
          type: "search"
        });
      }, []);
      const l = e => {
        const {
          searchCriteria: n
        } = e;
        const a = n == null ? undefined : n[z_.Kz.Area];
        const t = n == null ? undefined : n[z_.Kz.Employment];
        const s = [{
          content: (0, N.jsx)(P_, {
            areas: a == null ? undefined : a.map(e => e.text)
          })
        }];
        if (t != null && t.length) {
          s.push({
            growing: true,
            content: (0, N.jsx)(T_, {
              employments: t.map(e => e.text)
            })
          });
        }
        return s;
      };
      if (s.length) {
        return (0, N.jsx)(N.Fragment, {
          children: s.map((t, s) => {
            const {
              id: i,
              text: r,
              searchCriteria: c,
              searchQuery: d
            } = t;
            return (0, N.jsx)(F_, {
              children: (0, N.jsx)(u.SPALink, {
                to: `/search/resume?${(0, O_.s)(d)}&mark=main_page_last_search_${s + 1}`,
                onClick: o,
                "data-qa": "last-searches-item",
                children: (0, N.jsx)("div", {
                  className: Z_,
                  children: (0, N.jsxs)(Fe.b, {
                    right: (0, N.jsxs)("div", {
                      children: [(0, N.jsx)("div", {
                        className: Y_,
                        children: (0, N.jsx)(en.a2Q, {
                          initialColor: "secondary"
                        })
                      }), (0, N.jsx)("div", {
                        className: G_,
                        children: (0, N.jsx)(E_.I, {
                          children: (0, N.jsx)("button", {
                            "data-qa": "last-searches-item-remove",
                            onClick: async e => {
                              e.preventDefault();
                              e.stopPropagation();
                              await (async e => {
                                m().sendHHEventButtonClick("last_searches_item", {
                                  type: "remove"
                                });
                                n((0, X_.T)({
                                  id: e
                                }));
                                try {
                                  await C._i.postFormData("/shards/employer/last_search/remove", {
                                    "search-id": e
                                  });
                                } catch (e) {
                                  (0, Ga.ZP)(e, a);
                                }
                              })(i);
                            },
                            children: (0, N.jsx)(en.q6q, {
                              initialColor: "secondary",
                              highlightedColor: "primary"
                            })
                          })
                        })
                      })]
                    }),
                    children: [(0, N.jsx)(qe.j, {
                      maxLines: 1,
                      children: r || e[$_]
                    }), c && (0, N.jsx)(qe.j, {
                      type: "subtitle",
                      maxLines: 1,
                      children: (0, N.jsx)(B_, {
                        items: l(t)
                      })
                    })]
                  })
                })
              })
            }, i);
          })
        });
      } else {
        return (0, N.jsxs)(U_, {
          children: [(0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            children: e[Q_.title]
          }), (0, N.jsx)(v.X, {
            default: 8
          }), (0, N.jsx)(j.x, {
            typography: "paragraph-2-regular",
            style: "secondary",
            children: e[Q_.description]
          }), (0, N.jsx)(v.X, {
            default: 32
          }), (0, N.jsx)(y.z, {
            stretched: true,
            "data-qa": "last-searches-widget-guide-button",
            typography: "subtitle-1-semibold",
            Element: u.SPALink,
            to: i ? "/article/25295" : r ? "https://feedback.hh.ru/knowledge-base/article/1352" : "/article/hhsearch",
            target: "_blank",
            mode: "secondary",
            style: "neutral",
            children: e[Q_.button]
          })]
        });
      }
    };
    J_.displayName = "components/LastSearches/index/LastSearches";
    const K_ = (0, f.x)(J_);
    var eS = a(959287);
    const nS = "footer--NMiikJNKqgCVG0ws";
    const aS = ({
      children: e
    }) => (0, N.jsx)("div", {
      className: nS,
      children: e
    });
    aS.displayName = "components/Footer/index/Footer";
    const tS = aS;
    var sS = a(802256);
    var iS = a(997801);
    var rS = a(225098);
    var oS = a(181759);
    const lS = {
      noTitle: "resumeSearchesWidget.resumes.noTitle",
      allResumes: "resumeSearchesWidget.resumes.allResumes",
      hiddenName: "resumeSearchesWidget.resumes.hiddenName",
      updated: "resumeSearchesWidget.resumes.updated",
      [rS.Y0.Female]: "resume.photo.gender.female",
      [rS.Y0.Male]: "resume.photo.gender.male",
      [rS.Y0.Unknown]: "resume.photo.gender.unknown",
      favoritePlaceholder: {
        title: "resumeSearchesWidget.favoriteResumes.placeholder.title",
        description: "resumeSearchesWidget.favoriteResumes.placeholder.description",
        button: "resumeSearchesWidget.favoriteResumes.placeholder.button"
      }
    };
    const cS = ({
      trls: e,
      items: n,
      allResumesLink: a,
      hasNewResumes: s,
      analyticsName: i,
      containerRef: r,
      isFavoriteResumes: o
    }) => {
      const l = (0, Se.$w)();
      const c = (0, t.useRef)(false);
      const d = (0, t.useCallback)(e => {
        m().sendHHEventButtonClick(`${i}_item`, {
          disabled: e
        });
      }, [i]);
      const p = (0, t.useCallback)(() => {
        m().sendHHEventButtonClick(`${i}_all_items_link`, {
          items: n.length
        });
      }, [i, n.length]);
      const h = n => {
        const {
          _attributes: a,
          gender: t,
          hiddenFields: s,
          lastChangeTimeDetails: i
        } = n;
        const r = (s == null ? undefined : s.some(e => e.string === rS.X7.NamesAndPhoto)) ? e[lS.hiddenName] : (0, oS.V)(n);
        const o = (i == null ? undefined : i[0].date) || (a == null ? undefined : a.updated);
        const l = [eS.PastPeriod.FewDays, eS.PastPeriod.Week].includes((0, eS.getPastPeriod)(o));
        return [{
          content: r
        }, {
          growing: true,
          content: (0, N.jsx)(j.x, {
            typography: "label-3-regular",
            style: l ? "positive" : "secondary",
            children: (0, Z.WU)(e[lS.updated], {
              "{0}": (0, iv.p6)(o, "d.MM")
            })
          })
        }];
      };
      const x = (0, iS.Y)(() => {
        if (!c.current) {
          c.current = true;
          m().sendHHEvent("element_shown", {
            elementName: `${i}_all_items_link`,
            items: n.length
          });
        }
      }, {
        root: r.current,
        threshold: 0.8
      });
      if (!n.length && o) {
        return (0, N.jsxs)(U_, {
          children: [(0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            children: e[lS.favoritePlaceholder.title]
          }), (0, N.jsx)(v.X, {
            default: 8
          }), (0, N.jsx)(j.x, {
            typography: "paragraph-2-regular",
            style: "secondary",
            children: e[lS.favoritePlaceholder.description]
          }), (0, N.jsx)(v.X, {
            default: 32
          }), (0, N.jsx)(y.z, {
            stretched: true,
            "data-qa": "resume-widget-go-to-search",
            typography: "subtitle-1-semibold",
            Element: u.SPALink,
            to: "/search/resume",
            mode: "secondary",
            style: "neutral",
            children: e[lS.favoritePlaceholder.button]
          })]
        });
      } else {
        return (0, N.jsxs)(N.Fragment, {
          children: [n.map(n => {
            const {
              title: t,
              topicId: i,
              _attributes: r,
              photoUrls: o,
              gender: c,
              isNew: m,
              isOnline: p
            } = n;
            const x = o == null ? undefined : o[0];
            const y = c == null ? undefined : c[0].string;
            const g = e[lS[y || rS.Y0.Unknown]];
            const v = !l && p;
            const b = s && !m;
            return (0, N.jsx)(F_, {
              children: (0, N.jsx)(u.SPALink, {
                to: (0, sS.i)({
                  id: r.id,
                  hash: r.hash,
                  simhash: r.sim_hash,
                  topicId: i
                }),
                "data-qa": "reesumes_item_link",
                onClick: () => {
                  d(Boolean(b));
                },
                children: (0, N.jsxs)(Fe.b, {
                  right: (0, N.jsx)(en.a2Q, {}),
                  left: (0, N.jsx)(He.q, {
                    size: 48,
                    mode: x != null && x.big ? "image" : "placeholder",
                    image: x == null ? undefined : x.big,
                    placeholder: y === rS.Y0.Unknown ? "undefined" : y,
                    "aria-label": g,
                    online: v
                  }),
                  disabled: b,
                  children: [(0, N.jsx)(qe.j, {
                    maxLines: 1,
                    children: t[0]?.string || e[lS.noTitle]
                  }), (0, N.jsx)(B_, {
                    items: h(n)
                  })]
                })
              })
            }, r.id);
          }), (0, N.jsx)(tS, {
            children: (0, N.jsx)(y.z, {
              stretched: true,
              typography: "subtitle-1-semibold",
              Element: u.SPALink,
              to: a,
              style: "neutral",
              mode: "tertiary",
              onClick: p,
              ref: x,
              "data-qa": "resumes_all_link",
              size: "small",
              children: e[lS.allResumes]
            })
          })]
        });
      }
    };
    cS.displayName = "components/Resumes/index/Resumes";
    const dS = (0, f.x)(cS);
    var mS = a(811283);
    const pS = "employer.resumesSearch.salaryFrom";
    const uS = "employer.resumesSearch.salaryTo";
    const hS = ({
      trls: e,
      salaryFrom: n,
      salaryTo: a,
      currencyType: t
    }) => n || a ? (0, N.jsxs)(N.Fragment, {
      children: [n && (0, N.jsxs)(N.Fragment, {
        children: [e[pS], (0, Xs.uf)(n, {
          groupSeparator: er.qD
        }), " "]
      }), a && (0, N.jsxs)(N.Fragment, {
        children: [e[uS], (0, Xs.uf)(a, {
          groupSeparator: er.qD
        }), " "]
      }), (0, N.jsx)(mS.Z, {
        value: t
      })]
    }) : null;
    hS.displayName = "components/CellSubtitle/Salary/SalaryComponent";
    const xS = (0, f.x)(hS);
    const yS = "resumeSearchesWidget.savedSearches.noName";
    const gS = ({
      data: e,
      trls: n,
      onClick: a,
      isShort: t
    }) => {
      const {
        name: s,
        searchAllQuery: i
      } = e;
      const r = e => {
        const {
          searchCriteria: n,
          params: a
        } = e;
        const t = a[z_.Kz.Area];
        const s = n[z_.Kz.SalaryFrom];
        const i = n[z_.Kz.SalaryTo];
        const r = [{
          content: (0, N.jsx)(P_, {
            areas: t
          })
        }];
        if (s || i) {
          r.push({
            growing: true,
            content: (0, N.jsx)(xS, {
              salaryFrom: s,
              salaryTo: i,
              currencyType: n[z_.Kz.CurrencyCode]
            })
          });
        }
        return r;
      };
      return (0, N.jsx)(F_, {
        isShort: t,
        children: (0, N.jsx)(u.SPALink, {
          to: `/search/resume?${(0, O_.s)(i)}&L_is_autosearch=true`,
          onClick: a,
          "data-qa": "saved_search_item_link",
          children: t ? (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(j.x, {
              maxLines: 1,
              children: s || n[yS]
            }), (0, N.jsx)(B_, {
              inCell: false,
              items: r(e)
            })]
          }) : (0, N.jsxs)(Fe.b, {
            right: (0, N.jsx)(en.a2Q, {}),
            children: [(0, N.jsx)(qe.j, {
              maxLines: 1,
              children: s || n[yS]
            }), (0, N.jsx)(B_, {
              items: r(e)
            })]
          })
        })
      });
    };
    gS.displayName = "components/SavedSearches/SavedSearchesItem/SavedSearchesItemComponent";
    const vS = (0, f.x)(gS);
    const bS = e => {
      const {
        savedSearches: {
          items: n
        }
      } = (0, _.v)(e => e.resumeSearchesWidget);
      const a = (0, t.useRef)(false);
      return {
        handleLinkClick: (0, t.useCallback)(() => {
          m().sendHHEventButtonClick("saved_searches_item");
        }, []),
        handleAllItemsClick: (0, t.useCallback)(() => {
          m().sendHHEventButtonClick("saved_searches_all_items_link", {
            items: n.length
          });
        }, [n.length]),
        allItemsButtonRef: (0, iS.Y)(() => {
          if (!a.current) {
            a.current = true;
            m().sendHHEvent("element_shown", {
              elementName: "saved_searches_all_items",
              items: n.length
            });
          }
        }, {
          root: e.current,
          threshold: 0.8
        })
      };
    };
    const jS = "resumeSearchesWidget.savedSearches.allSearches";
    const fS = {
      title: "resumeSearchesWidget.savedSearches.placeholder.title",
      description: "resumeSearchesWidget.savedSearches.placeholder.description",
      button: "resumeSearchesWidget.savedSearches.placeholder.button"
    };
    const _S = ({
      trls: e,
      containerRef: n
    }) => {
      const {
        savedSearches: {
          items: a
        }
      } = (0, _.v)(e => e.resumeSearchesWidget);
      const {
        handleAllItemsClick: t,
        handleLinkClick: s,
        allItemsButtonRef: i
      } = bS(n);
      if (a.length) {
        return (0, N.jsxs)(N.Fragment, {
          children: [a.map(e => (0, N.jsx)(vS, {
            data: e,
            onClick: s
          }, e.id)), (0, N.jsx)(tS, {
            children: (0, N.jsx)(y.z, {
              stretched: true,
              typography: "subtitle-1-semibold",
              Element: u.SPALink,
              to: "/resumesavedsearch",
              style: "neutral",
              "data-qa": "resumes_all_link",
              mode: "tertiary",
              onClick: t,
              ref: i,
              size: "small",
              children: e[jS]
            })
          })]
        });
      } else {
        return (0, N.jsxs)(U_, {
          children: [(0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            children: e[fS.title]
          }), (0, N.jsx)(v.X, {
            default: 8
          }), (0, N.jsx)(j.x, {
            typography: "paragraph-2-regular",
            style: "secondary",
            children: e[fS.description]
          }), (0, N.jsx)(v.X, {
            default: 32
          }), (0, N.jsx)(y.z, {
            stretched: true,
            "data-qa": "resume-widget-go-to-saved-search",
            typography: "subtitle-1-semibold",
            Element: u.SPALink,
            to: "/search/resume",
            mode: "secondary",
            style: "neutral",
            children: e[fS.button]
          })]
        });
      }
    };
    _S.displayName = "components/SavedSearches/index/SavedSearches";
    const SS = (0, f.x)(_S);
    const CS = ({
      activeTab: e,
      containerRef: n
    }) => {
      const {
        favoriteResumes: a,
        targetResumes: t
      } = (0, _.v)(e => e.resumeSearchesWidget);
      const s = t.items.some(e => e.isNew);
      switch (e) {
        case "targetResumes":
        case "targetResumesAgency":
          return (0, N.jsx)(dS, {
            items: t.items,
            allResumesLink: "/employer/targetresumes",
            analyticsName: "target_resumes",
            hasNewResumes: s,
            containerRef: n
          });
        case "favoriteResumes":
          return (0, N.jsx)(dS, {
            items: a.items,
            allResumesLink: "/employer/resumefolders",
            analyticsName: "favorite_resumes",
            containerRef: n,
            isFavoriteResumes: true
          });
        case "savedSearches":
          return (0, N.jsx)(SS, {
            containerRef: n
          });
        case "lastSearches":
          return (0, N.jsx)(K_, {});
        default:
          return null;
      }
    };
    CS.displayName = "components/TabsContent/index/TabsContent";
    const kS = CS;
    var wS = a(545532);
    const NS = e => e.reduce((e, n) => {
      if (!n.counters) {
        return e;
      }
      if (n.counters.new) {
        e[n.name] = `+${n.counters.new}`;
      } else if (n.counters.all) {
        var a;
        e[n.name] = (a = n.counters.all) === null || a === undefined ? undefined : a.toString();
      }
      return e;
    }, {});
    const ES = e => `resume_searches_widget_${e}`;
    const AS = e => e.map(e => e.name);
    const RS = (e, {
      targetResumes: n,
      favoriteResumes: a,
      savedSearches: t
    }) => {
      switch (e) {
        case "targetResumes":
          return n.items.length > 0;
        case "favoriteResumes":
          return a.items.length > 0;
        case "savedSearches":
          return t.items.length > 0;
        default:
          return true;
      }
    };
    const PS = "tabs-wrapper--R2IsJza2eTw9W874";
    const TS = "title-wrapper--qyeiRULxyAU_uVJi";
    const IS = "widget-tab-container--iWoXjNDwm3MPhP4v";
    const LS = "widget-tab-content--FrGEHWRquAVIHbxg";
    const WS = "saved-searches-container--rR2VS9O9mczM48wY";
    const BS = "saved-searches-placeholder-container--g4O7fcblck5pdJsx";
    const MS = "saved-searches-content--b3nVjryRvEMywCFI";
    const VS = "saved-searches-button-content--CakKLF4lXy4y71de";
    const DS = "saved-searches-title--nHCjUyWTYv8bXvfV";
    const FS = "saved-searches-placeholder-content--Cih5KXm3fGcuTgYb";
    const HS = {
      correction: 24
    };
    const qS = {
      targetResumes: "resumeSearchesWidget.tab.targetResumes",
      targetResumesAgency: "resumeSearchesWidget.tab.targetResumesAgency",
      favoriteResumes: "resumeSearchesWidget.tab.favoriteResumes",
      savedSearches: "resumeSearchesWidget.tab.savedSearches",
      lastSearches: "resumeSearchesWidget.tab.lastSearches"
    };
    const US = ({
      trls: e,
      hideLastSearches: n,
      hideSavedSearches: a
    }) => {
      const o = (0, _.v)(e => e.resumeSearchesWidget);
      const {
        tabs: l
      } = o;
      const c = (0, t.useRef)(null);
      const p = (0, t.useMemo)(() => {
        const e = [];
        if (a) {
          e.push("savedSearches");
        }
        if (n) {
          e.push("lastSearches");
        }
        if (e.length) {
          return l.filter(n => !e.includes(n.name));
        } else {
          return l;
        }
      }, [n, a, l]);
      const [u, h] = (0, t.useState)(p[0]?.name);
      const x = (0, t.useMemo)(() => ({
        counters: JSON.stringify(NS(p)),
        tabs: AS(p)
      }), [p]);
      const y = (0, d.useElementShown)(m().sendHHEventElementShown, {
        name: ES(p[0]?.name),
        hasContent: RS(p[0]?.name, o),
        ...x
      });
      const g = (0, t.useCallback)(e => {
        h(e);
      }, []);
      const v = e => e ? e.new ? `+${e.new}` : e.all ? e.all.toString() : "" : "";
      const b = n => e[qS[n]];
      (() => {
        const {
          savedSearches: e,
          targetResumes: n,
          favoriteResumes: a
        } = (0, _.v)(e => e.resumeSearchesWidget);
        const s = (0, xn.useDispatch)();
        (0, t.useEffect)(() => {
          let n;
          if (e.shouldRefetch) {
            n = new AbortController();
            s((0, wS.lF)(n));
          }
          return () => {
            if (n) {
              n.abort();
            }
          };
        }, [s, e.shouldRefetch]);
        (0, t.useEffect)(() => {
          let e;
          if (n.shouldRefetch) {
            e = new AbortController();
            s((0, wS.QI)(e));
          }
          return () => {
            if (e) {
              e.abort();
            }
          };
        }, [s, n.shouldRefetch]);
        (0, t.useEffect)(() => {
          let e;
          if (a.shouldRefetch) {
            e = new AbortController();
            s((0, wS.Tx)(e));
          }
          return () => {
            if (e) {
              e.abort();
            }
          };
        }, [s, a.shouldRefetch]);
      })();
      (0, t.useEffect)(() => {
        var e;
        if ((e = c.current) !== null && e !== undefined) {
          e.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      }, [u]);
      return (0, N.jsxs)(Y.Z, {
        borderWidth: "default",
        borderRadius: 24,
        stretched: true,
        ref: y,
        children: [p.length === 1 ? (0, N.jsx)("div", {
          className: TS,
          children: (0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            children: b(p[0].name)
          })
        }) : (0, N.jsx)("div", {
          className: PS,
          children: (0, N.jsx)(Gp.m, {
            activeItemId: u,
            mode: "secondary",
            onChange: g,
            containerCorrections: HS,
            children: p.map(({
              name: e,
              counters: n
            }) => (0, N.jsx)($p.T, {
              id: e,
              postfix: v(n),
              badge: n != null && !!n.new,
              "data-qa": `${e}-tab`,
              onClick: () => {
                m().sendHHEventButtonClick(ES(e), x);
              },
              children: b(e)
            }, e))
          })
        }), (0, N.jsx)("div", {
          ref: c,
          className: IS,
          children: (0, N.jsx)(N_.c, {
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            children: (0, N.jsx)("div", {
              className: LS,
              children: (0, N.jsx)(kS, {
                activeTab: u,
                containerRef: c
              })
            })
          })
        })]
      });
    };
    US.displayName = "components/EmployerResumeSearchesWidget/index/EmployerResumeSearchesWidget";
    const XS = (0, f.x)(US);
    const zS = "resumeSearchesWidget.tab.savedSearches";
    const OS = "resumeSearchesWidget.savedSearches.allSavedSearches";
    const ZS = {
      title: "resumeSearchesWidget.savedSearches.placeholder.title",
      description: "resumeSearchesWidget.savedSearches.placeholder.description",
      button: "resumeSearchesWidget.savedSearches.placeholder.button"
    };
    const YS = ({
      trls: e
    }) => {
      const {
        savedSearches: {
          items: n
        }
      } = (0, _.v)(e => e.resumeSearchesWidget);
      const a = (0, t.useRef)(null);
      const {
        handleAllItemsClick: s,
        handleLinkClick: i,
        allItemsButtonRef: r
      } = bS(a);
      const o = "subtitle-2-semibold";
      let l = null;
      l = n.length ? (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)("div", {
          className: DS,
          children: (0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            "data-qa": "saved-searches-title",
            children: e[zS]
          })
        }), (0, N.jsx)(Nl.i, {}), (0, N.jsx)("div", {
          className: MS,
          ref: a,
          children: n.slice(0, 3).map(e => (0, N.jsx)(vS, {
            isShort: true,
            data: e,
            onClick: i
          }, e.id))
        }), (0, N.jsx)(Nl.i, {}), (0, N.jsx)(tS, {
          children: (0, N.jsx)(y.z, {
            stretched: true,
            typography: o,
            Element: u.SPALink,
            to: "/resumesavedsearch",
            style: "neutral",
            mode: "tertiary",
            size: "small",
            onClick: s,
            ref: r,
            children: (0, N.jsxs)("div", {
              className: VS,
              children: [(0, N.jsx)(j.x, {
                typography: o,
                children: e[OS]
              }), (0, N.jsx)(j.x, {
                typography: o,
                style: "tertiary",
                children: n.length
              })]
            })
          })
        })]
      }) : (0, N.jsx)(Y.Z, {
        verticalStretched: true,
        padding: 12,
        children: (0, N.jsxs)("div", {
          className: BS,
          children: [(0, N.jsxs)("div", {
            className: FS,
            children: [(0, N.jsx)(j.x, {
              typography: "title-5-semibold",
              children: e[ZS.title]
            }), (0, N.jsx)(v.X, {
              default: 12
            }), (0, N.jsx)(j.x, {
              typography: "paragraph-2-regular",
              style: "secondary",
              children: e[ZS.description]
            })]
          }), (0, N.jsx)(y.z, {
            stretched: true,
            typography: "subtitle-1-semibold",
            Element: u.SPALink,
            to: "/search/resume",
            mode: "secondary",
            children: e[ZS.button]
          })]
        })
      });
      return (0, N.jsx)(Y.Z, {
        verticalStretched: true,
        stretched: true,
        borderWidth: "default",
        borderRadius: 24,
        children: (0, N.jsx)("div", {
          className: WS,
          children: l
        })
      });
    };
    YS.displayName = "components/EmployerResumeSearchesWidget/SavedSearchesWidget/SavedSearchesWidgetComponent";
    const GS = (0, f.x)(YS);
    const $S = {
      container: "container--MC6hE6rhDwwNVdb7",
      row: "row--WGSPFrsRFI8MpNn0"
    };
    const QS = ({
      children: e,
      title: n,
      icon: a,
      isActive: t,
      name: s
    }) => (0, N.jsx)(d.ElementShownAnchor, {
      fn: m().sendHHEventElementShown,
      name: "services_widget_card",
      card: s,
      active: t,
      children: (0, N.jsx)("div", {
        "data-qa": `service_${s}`,
        className: $S.container,
        children: (0, N.jsxs)(Y.Z, {
          "data-qa": "service_card",
          style: t ? undefined : "secondary",
          className: $S.card,
          stretched: true,
          verticalStretched: true,
          borderRadius: 24,
          borderWidth: t ? "default" : "none",
          padding: 24,
          children: [(0, N.jsx)(j.x, {
            typography: "label-3-regular",
            style: "secondary",
            children: n
          }), (0, N.jsx)(v.X, {
            default: 8
          }), (0, N.jsx)(Fe.b, {
            right: a,
            children: e
          })]
        })
      })
    });
    QS.displayName = "EmployerServicesWidget/ServiceCard/index/ServiceCard";
    const JS = (0, f.x)(QS);
    const KS = ({
      active: e,
      name: n
    }) => (0, t.useCallback)(() => {
      m().sendHHEventButtonClick("services_widget_card", {
        active: e,
        card: n
      });
    }, [e, n]);
    const eC = "employer.index.servicesWidget.analytics.title";
    const nC = "employer.index.servicesWidget.see.button";
    const aC = ({
      trls: e,
      name: n,
      active: a
    }) => {
      const t = KS({
        name: n,
        active: a
      });
      return (0, N.jsx)(u.SPALink, {
        onClick: t,
        target: "_blank",
        to: "/employer/statistics/competitor_analysis",
        children: (0, N.jsx)(JS, {
          name: n,
          isActive: true,
          title: e[eC],
          icon: (0, N.jsx)(en.SyI, {
            initialColor: "accent"
          }),
          children: (0, N.jsx)(j.x, {
            typography: "subtitle-1-semibold",
            children: e[nC]
          })
        })
      });
    };
    aC.displayName = "cards/AnalyticsServiceCard/index/AnalyticsServiceCard";
    const tC = (0, f.x)(aC);
    const sC = "employer.index.servicesWidget.branding.title";
    const iC = "employer.index.servicesWidget.connected";
    const rC = "employer.index.servicesWidget.branding.connect";
    const oC = ({
      trls: e,
      active: n,
      name: a
    }) => (0, N.jsx)(JS, {
      name: a,
      isActive: n,
      title: e[sC],
      icon: (0, N.jsx)(en.XFL, {
        initialColor: n ? "warning" : "secondary"
      }),
      children: n ? (0, N.jsx)(j.x, {
        typography: "subtitle-1-semibold",
        children: e[iC]
      }) : (0, N.jsx)(Ue.r, {
        "data-qa": "service_branding_link",
        typography: "label-2-regular",
        children: e[rC]
      })
    });
    oC.displayName = "cards/BrandingServiceCard/index/BrandingServiceCard";
    const lC = (0, f.x)(oC);
    const cC = {
      icon: "icon--GU7ijYxo5Go89Fw5",
      clickme: "clickme--PFTW7cChgF6uD3ga",
      inactive: "inactive--tTxgZkyfMpM4kRCA",
      skillaz: "skillaz--RhKsii4K58TnwLu2",
      hrlink: "hrlink--p4xrveN6AAB9_skR"
    };
    const dC = ({
      isActive: e,
      name: n
    }) => (0, N.jsx)("div", {
      className: ge()(cC.icon, cC[n], {
        [cC.inactive]: !e
      })
    });
    dC.displayName = "EmployerServicesWidget/ServiceCardIcon/index/ServiceCardIcon";
    const mC = (0, f.x)(dC);
    const pC = "employer.index.servicesWidget.clickme.title";
    const uC = "employer.index.servicesWidget.clickme.connect.title";
    const hC = "employer.index.servicesWidget.clickme.connect";
    const xC = {
      one: "employer.index.servicesWidget.clickme.cabinet.one",
      some: "employer.index.servicesWidget.clickme.cabinet.some",
      many: "employer.index.servicesWidget.clickme.cabinet.many"
    };
    const yC = ({
      trls: e,
      active: n,
      name: a
    }) => {
      const t = (0, _.v)(e => {
        var n;
        if ((n = e.employerIndexPage) === null || n === undefined || (n = n.oldEmployer) === null || n === undefined || (n = n.billingSummary) === null || n === undefined) {
          return undefined;
        } else {
          return n.currency;
        }
      });
      const s = (0, _.v)(e => {
        var n;
        if ((n = e.employerIndexPage) === null || n === undefined || (n = n.oldEmployer) === null || n === undefined || (n = n.clickme) === null || n === undefined) {
          return undefined;
        } else {
          return n.totalRealBalance;
        }
      });
      const i = (0, _.v)(e => {
        var n;
        if ((n = e.employerIndexPage) === null || n === undefined || (n = n.oldEmployer) === null || n === undefined || (n = n.clickme) === null || n === undefined) {
          return undefined;
        } else {
          return n.cabinetsCount;
        }
      });
      const r = KS({
        name: a,
        active: n
      });
      const o = (0, N.jsx)(JS, {
        name: a,
        isActive: n,
        title: e[n ? pC : uC],
        icon: (0, N.jsx)(mC, {
          isActive: n,
          name: "clickme"
        }),
        children: n ? (0, N.jsx)(j.x, {
          typography: "subtitle-1-semibold",
          children: i && i !== 1 ? (0, N.jsx)(Zn.q, {
            hasValue: true,
            one: e[xC.one],
            some: e[xC.many],
            many: e[xC.some],
            value: i
          }) : t && typeof s == "number" ? (0, N.jsx)(bh.Z, {
            currency: t,
            children: s
          }) : 0
        }) : (0, N.jsx)(Ue.r, {
          "data-qa": "service_clickme_link",
          target: "_blank",
          onClick: r,
          href: "https://clickme.hh.ru/new/dashboard?utm_source=hh.ru&utm_medium=referral&utm_campaign=main_widget_unconnected_service",
          typography: "label-2-regular",
          children: e[hC]
        })
      });
      if (n) {
        return (0, N.jsx)(u.SPALink, {
          "data-qa": "service_clickme_container_link",
          target: "_blank",
          onClick: r,
          to: "https://clickme.hh.ru/new/dashboard?utm_source=hh.ru&utm_medium=referral&utm_campaign=main_widget_connected_service",
          children: o
        });
      } else {
        return o;
      }
    };
    yC.displayName = "cards/ClickmeServiceCard/index/ClickmeServiceCard";
    const gC = (0, f.x)(yC);
    var vC = a(267838);
    var bC = a(581850);
    const jC = "employer.index.servicesWidget.dreamJob.title";
    const fC = ({
      trls: e,
      name: n
    }) => (0, bC.H0)() ? (0, N.jsx)(JS, {
      name: n,
      isActive: true,
      title: e[jC],
      icon: (0, N.jsx)(fe.RC4, {}),
      children: (0, N.jsx)("div", {
        children: (0, N.jsx)(vC.Z, {
          onlyTrusted: false
        })
      })
    }) : null;
    fC.displayName = "cards/DreamjobServiceCard/index/DreamjobServiceCard";
    const _C = (0, f.x)(fC);
    const SC = "employer.index.servicesWidget.efficiency.title";
    const CC = "employer.index.servicesWidget.see.button";
    const kC = ({
      trls: e,
      name: n,
      active: a
    }) => {
      const t = KS({
        name: n,
        active: a
      });
      return (0, N.jsx)(u.SPALink, {
        onClick: t,
        target: "_blank",
        to: "/employer/statistics/index",
        children: (0, N.jsx)(JS, {
          name: n,
          isActive: true,
          title: e[SC],
          icon: (0, N.jsx)(en.wYh, {
            initialColor: "accent"
          }),
          children: (0, N.jsx)(j.x, {
            typography: "subtitle-1-semibold",
            children: e[CC]
          })
        })
      });
    };
    kC.displayName = "cards/EfficiencyServiceCard/index/EfficiencyServiceCard";
    const wC = (0, f.x)(kC);
    const NC = "employer.index.servicesWidget.hrLink.title";
    const EC = "employer.index.servicesWidget.connect";
    const AC = "employer.index.servicesWidget.connected";
    const RC = ({
      trls: e,
      active: n,
      name: a
    }) => (0, N.jsx)(JS, {
      name: a,
      isActive: n,
      title: e[NC],
      icon: (0, N.jsx)(mC, {
        isActive: n,
        name: "hrlink"
      }),
      children: n ? (0, N.jsx)(j.x, {
        typography: "subtitle-1-semibold",
        children: e[AC]
      }) : (0, N.jsx)(Ue.r, {
        "data-qa": "service_hrlink_link",
        typography: "label-2-regular",
        children: e[EC]
      })
    });
    RC.displayName = "cards/HrlinkServiceCard/index/HrlinkServiceCard";
    const PC = (0, f.x)(RC);
    const TC = "employer.index.servicesWidget.skillaz.title";
    const IC = "employer.index.servicesWidget.connect";
    const LC = "employer.index.servicesWidget.connected";
    const WC = ({
      trls: e,
      active: n,
      name: a
    }) => (0, N.jsx)(JS, {
      name: a,
      isActive: n,
      title: e[TC],
      icon: (0, N.jsx)(mC, {
        isActive: n,
        name: "skillaz"
      }),
      children: n ? (0, N.jsx)(j.x, {
        typography: "subtitle-1-semibold",
        children: e[LC]
      }) : (0, N.jsx)(Ue.r, {
        "data-qa": "service_skillaz_link",
        typography: "label-2-regular",
        children: e[IC]
      })
    });
    WC.displayName = "cards/SkillazServiceCard/index/SkillazServiceCard";
    const BC = (0, f.x)(WC);
    var MC = a(318462);
    var VC = a.n(MC);
    var DC = a(207508);
    var FC = a(972815);
    const HC = "employer.index.servicesWidget.talantix.title";
    const qC = "employer.index.servicesWidget.talantix.connect.title";
    const UC = "employer.index.servicesWidget.talantix.connect";
    const XC = ({
      trls: e,
      active: n,
      name: a
    }) => {
      const s = (0, t.useRef)(null);
      const i = (0, t.useRef)(false);
      const r = (0, _.v)(({
        employerIndexPage: e
      }) => {
        var n;
        if (e == null || (n = e.oldEmployer) === null || n === undefined) {
          return undefined;
        } else {
          return n.talantixTariffDaysLeft;
        }
      });
      const o = (0, _.v)(({
        employerIndexPage: e
      }) => {
        var n;
        if (e == null || (n = e.oldEmployer) === null || n === undefined) {
          return undefined;
        } else {
          return n.talantixTariff;
        }
      });
      const l = (0, FC.dV)(n ? FC.BK : FC.Kh);
      const c = (0, t.useCallback)(() => {
        Jj()({
          hhtmSourceLabel: n ? "main_widget_connected_service" : "main_widget_unconnected_service"
        });
      }, [n]);
      const d = KS({
        name: a,
        active: n
      });
      const m = (0, t.useCallback)(() => {
        c();
        d();
      }, [d, c]);
      const p = (0, N.jsx)("div", {
        ref: s,
        children: (0, N.jsx)(JS, {
          name: a,
          isActive: n,
          title: e[n ? HC : qC],
          icon: n ? (0, N.jsx)(fe.orO, {}) : (0, N.jsx)(fe.d3x, {}),
          children: n ? (0, N.jsx)(j.x, {
            typography: "subtitle-1-semibold",
            children: (0, N.jsx)(DC.c, {
              tariffDaysLeft: r ?? 0,
              tariff: o
            })
          }) : (0, N.jsx)(Ue.r, {
            "data-qa": "service_talantix_link",
            target: "_blank",
            onClick: d,
            href: l,
            typography: "label-2-regular",
            children: e[UC]
          })
        })
      });
      (0, t.useEffect)(() => {
        if (s.current && !i.current) {
          VC()(s.current, {
            hhtmSourceLabel: n ? "main_widget_connected_service" : "main_widget_unconnected_service"
          });
          i.current = true;
        }
      }, [n]);
      if (n) {
        return (0, N.jsx)(u.SPALink, {
          "data-qa": "service_talantix_container_link",
          target: "_blank",
          onClick: m,
          to: l,
          children: p
        });
      } else {
        return (0, N.jsx)("div", {
          onClick: c,
          children: p
        });
      }
    };
    XC.displayName = "cards/TalantixServiceCard/index/TalantixServiceCard";
    const zC = (0, f.x)(XC);
    const OC = "container--lTvGoesb37sDP7iQ";
    const ZC = {
      dreamjob: _C,
      clickme: gC,
      talantix: zC,
      branding: lC,
      skillaz: BC,
      hrLink: PC,
      analytics: tC,
      efficiency: wC
    };
    const YC = () => {
      const e = (0, _.v)(({
        employerServicesWidget: e
      }) => e);
      return (0, N.jsx)("div", {
        className: OC,
        children: e.map(e => {
          const n = ZC[e.name];
          return (0, N.jsx)(n, {
            ...e
          }, e.name);
        })
      });
    };
    YC.displayName = "components/EmployerServicesWidget/index/EmployerServicesWidget";
    const GC = (0, f.x)(YC);
    const $C = {
      myEventsVacancyResponsesClick: () => m().sendHHEventButtonClick("my_events_vacancy_responses"),
      myEventsVacancyResponsesShown: e => m().sendHHEventElementShown(e, {
        name: "my_events_vacancy_responses"
      }),
      myEventsAutoSearchClick: () => m().sendHHEventButtonClick("my_events_auto_search"),
      myEventsAutoSearchShown: e => m().sendHHEventElementShown(e, {
        name: "my_events_auto_search"
      }),
      myEventsBalanceAccountClick: () => m().sendHHEventButtonClick("my_events_balance_account"),
      myEventsBalanceAccountShown: e => m().sendHHEventElementShown(e, {
        name: "my_events_balance_account"
      }),
      myEventsBalanceIncreaseClick: () => m().sendHHEventButtonClick("my_events_balance_increase"),
      myEventsBalanceIncreaseShown: e => m().sendHHEventElementShown(e, {
        name: "my_events_balance_increase"
      }),
      myEventsVacanciesClick: () => m().sendHHEventButtonClick("my_events_vacancies"),
      myEventsVacanciesShown: e => m().sendHHEventElementShown(e, {
        name: "my_events_vacancies"
      }),
      myEventsVacanciesBuyClick: () => m().sendHHEventButtonClick("my_events_vacancies_buy"),
      myEventsVacanciesBuyShown: e => m().sendHHEventElementShown(e, {
        name: "my_events_vacancies_buy"
      }),
      myEventsDatabaseAccessClick: () => m().sendHHEventButtonClick("my_events_database_access"),
      myEventsDatabaseAccessShown: e => m().sendHHEventElementShown(e, {
        name: "my_events_database_access"
      }),
      myEventsDatabaseAccessBuyClick: () => m().sendHHEventButtonClick("my_events_database_access_buy"),
      myEventsDatabaseAccessBuyShown: e => m().sendHHEventElementShown(e, {
        name: "my_events_database_access_buy"
      }),
      myEventsCreateVacancyClick: () => m().sendHHEventButtonClick("my_events_create_vacancy"),
      myEventsCreateVacancyShown: e => m().sendHHEventElementShown(e, {
        name: "my_events_create_vacancy"
      }),
      howToSearchLearnMoreClick: () => m().sendHHEventButtonClick("how_to_search_learn_more"),
      howToSearchLearnMoreShown: e => m().sendHHEventElementShown(e, {
        name: "how_to_search_learn_more"
      }),
      updatesTabClick: e => m().sendHHEventButtonClick(`updates_tab_${e}`),
      updatesTabShown: (e, n) => m().sendHHEventElementShown(e, {
        name: `updates_tab_${n}`
      }),
      updatesAllClick: () => m().sendHHEventButtonClick("updates_all"),
      updatesAllShown: e => m().sendHHEventElementShown(e, {
        name: "updates_all"
      }),
      activitiesTitleClick: () => m().sendHHEventButtonClick("activities_title"),
      activitiesTitleShown: e => m().sendHHEventElementShown(e, {
        name: "activities_title"
      }),
      activitiesItemClick: e => m().sendHHEventButtonClick("activities_item", {
        item: e
      }),
      activitiesItemsShown: (e, n) => m().sendHHEventElementShown(e, {
        name: "activities_items",
        item: n
      })
    };
    const QC = "index.blog.showMore";
    const JC = ({
      href: e,
      trls: n,
      ...a
    }) => (0, N.jsx)(Ue.r, {
      ...a,
      Element: u.SPALink,
      to: e,
      typography: "label-2-regular",
      style: "accent",
      children: n[QC]
    });
    JC.displayName = "components/Blog/ShowAllLink/ShowAllLinkComponent";
    const KC = (0, f.x)(JC);
    const ek = "blog-card-wrapper--ZlzDgkL04dopaVej";
    const nk = "content--FhgfnGpZTOYK1HgW";
    const ak = "blog-card-content--zlSybcXz_B4smh8q";
    const tk = "spacer--b50e5RoGkzMvyQ2f";
    const sk = "blog-card-header--aDlnDkhccBNx809q";
    const ik = "employer_main_page_analytics_enabled";
    const rk = ({
      href: e,
      items: n
    }) => {
      const a = (0, xt.kQ)();
      const s = (0, Dl.n)(ik);
      const i = (0, t.useRef)(null);
      const r = n.slice(0, 3);
      (0, t.useEffect)(() => {
        if (s && i.current) {
          const {
            stopSpying: e
          } = $C.activitiesTitleShown(i.current);
          const {
            stopSpying: n
          } = $C.activitiesItemsShown(i.current, r.map(e => e.text));
          return () => {
            e();
            n();
          };
        }
      }, [s, r]);
      const o = a ? (0, N.jsx)(KC, {
        "data-qa": "calendar-show-more-link",
        href: e,
        onClick: s ? () => {
          if (s) {
            $C.activitiesTitleClick();
          }
        } : undefined
      }) : null;
      return (0, N.jsxs)("div", {
        "data-qa": "calendar-content",
        ref: i,
        className: nk,
        children: [(0, N.jsx)(X.z, {
          default: 24,
          children: r.map(({
            href: e,
            date: n,
            text: a
          }) => (0, N.jsxs)("div", {
            children: [(0, N.jsx)(j.x, {
              "data-qa": "calendar-date",
              typography: "label-3-regular",
              style: "secondary",
              children: n
            }), (0, N.jsx)(Ue.r, {
              "data-qa": "calendar-link",
              href: e,
              style: "neutral",
              onClick: s ? () => $C.activitiesItemClick(a) : undefined,
              children: (0, N.jsx)(j.x, {
                maxLines: 1,
                typography: "label-2-regular",
                children: a
              })
            })]
          }, e))
        }), (0, N.jsx)(v.X, {
          default: 24
        }), (0, N.jsx)("div", {
          className: tk
        }), o]
      });
    };
    rk.displayName = "components/Blog/CalendarContent/CalendarContent";
    const ok = e => m().sendHHEventButtonClick(`news_box_${e}`);
    const lk = (e, n, a) => m().sendHHEventElementShown(e, {
      name: `news_box_${n}_items`,
      item: a
    });
    const ck = "employer_main_page_analytics_enabled";
    const dk = ({
      href: e,
      isArticle: n,
      items: a
    }) => {
      const s = (0, Dl.n)(ck);
      const i = (0, t.useRef)(null);
      const r = (a || []).slice(0, 3);
      const o = n ? "article" : "news";
      (0, t.useEffect)(() => {
        if (s && r != null && r.length && i.current) {
          const {
            stopSpying: e
          } = lk(i.current, o, r.map(e => e.title));
          return e;
        }
      }, [s, n, r, o]);
      const l = n ? "articles" : "news";
      return (0, N.jsxs)("div", {
        "data-qa": `${l}-content`,
        className: nk,
        ref: i,
        children: [(0, N.jsx)(X.z, {
          default: 24,
          children: r.map(({
            title: e,
            href: a,
            image: t
          }) => (0, N.jsx)(u.SPALink, {
            "data-qa": `${l}-link`,
            to: a,
            onClick: () => be()({
              buttonName: n ? "article_item" : "news_item"
            }),
            children: (0, N.jsx)(Fe.b, {
              slot: (0, N.jsx)(He.q, {
                mode: "image",
                size: 48,
                "aria-label": e,
                Element: "div",
                image: t,
                placeholder: "city",
                shapeCircle: true
              }),
              children: (0, N.jsx)(qe.j, {
                maxLines: 2,
                children: e
              })
            })
          }, e))
        }), (0, N.jsx)(v.X, {
          default: 24
        }), (0, N.jsx)("div", {
          className: tk
        }), (0, N.jsx)(KC, {
          "data-qa": `${l}-show-more-link`,
          href: e,
          onClick: () => {
            if (s) {
              ok(o);
            }
            be()({
              buttonName: n ? "article_list" : "news_list"
            });
          }
        })]
      });
    };
    dk.displayName = "components/Blog/NewsOrArticlesContent/NewsOrArticlesContent";
    var mk = function (e) {
      e.NEWS = "news";
      e.ARTICLES = "articles";
      e.CALENDAR = "calendar";
      e.FAQ = "faq";
      return e;
    }(mk || {});
    const pk = {
      [mk.NEWS]: "/articles/site-news",
      [mk.ARTICLES]: "/articles/employers",
      [mk.CALENDAR]: "/articles/events",
      [mk.FAQ]: "https://feedback.hh.ru/"
    };
    const uk = {
      title: "index.blog.title",
      feed: "index.feed.title",
      [mk.NEWS]: "index.blog.news.title",
      [mk.ARTICLES]: "index.blog.articles.title",
      [mk.CALENDAR]: "index.blog.calendar.title",
      [mk.FAQ]: "index.blog.faq.title"
    };
    const hk = ({
      trls: e,
      showFaq: n,
      faqMaxItems: a
    }) => {
      var s;
      const [i, r] = (0, t.useState)(mk.NEWS);
      const o = (0, _.v)(e => e.employerNews);
      const l = (0, _.v)(e => e.employerArticles);
      const {
        eventsMain: c
      } = (0, _.v)(e => e.employerIndexPage.oldEmployer) || {
        eventsMain: null
      };
      const d = (0, _.v)(e => e.employerFaq);
      const m = (0, t.useMemo)(() => {
        var e;
        return (c == null || (e = c.body) === null || e === undefined ? undefined : e.events) || [];
      }, [c == null || (s = c.body) === null || s === undefined ? undefined : s.events]);
      const p = (0, t.useMemo)(() => {
        const e = [mk.NEWS, mk.ARTICLES];
        if (m.length) {
          e.push(mk.CALENDAR);
        }
        if (n && d.length) {
          return [...e, mk.FAQ];
        } else {
          return e;
        }
      }, [m.length, d.length, n]);
      const u = (0, t.useMemo)(() => {
        const e = pk[i];
        switch (i) {
          case mk.ARTICLES:
            return (0, N.jsx)(dk, {
              isArticle: true,
              href: e,
              items: l
            });
          case mk.NEWS:
            return (0, N.jsx)(dk, {
              href: e,
              items: o
            });
          case mk.CALENDAR:
            return (0, N.jsx)(rk, {
              items: m,
              href: e
            });
          case mk.FAQ:
            return (0, N.jsx)(oc, {
              items: d,
              isVacanciesWidgetExp: n,
              maxCount: a
            });
          default:
            return null;
        }
      }, [i, l, o, m, d, n, a]);
      return (0, N.jsx)("div", {
        className: ek,
        children: (0, N.jsx)(Y.Z, {
          borderWidth: "default",
          padding: 24,
          borderRadius: 24,
          stretched: true,
          verticalStretched: true,
          children: (0, N.jsxs)("div", {
            className: ak,
            children: [(0, N.jsxs)("div", {
              className: sk,
              children: [(0, N.jsx)(g.D, {
                Element: "h2",
                size: "small",
                "data-qa": "blog-title",
                children: n ? e[uk.feed] : e[uk.title]
              }), (0, N.jsx)(Gp.m, {
                "data-qa": "blog-tabs",
                activeItemId: i,
                onChange: e => r(e),
                mode: "secondary",
                children: p.map(n => (0, N.jsx)($p.T, {
                  "data-qa": `${n}-tab`,
                  id: n,
                  children: e[uk[n]]
                }, n))
              })]
            }), (0, N.jsx)(v.X, {
              default: 24
            }), u]
          })
        })
      });
    };
    hk.displayName = "components/Blog/index/Blog";
    const xk = (0, f.x)(hk);
    const yk = "index.blog.news.title";
    const gk = "index.blog.articles.title";
    const vk = ({
      isArticle: e,
      trls: n
    }) => {
      const a = (0, _.v)(e => e.employerNews);
      const t = (0, _.v)(e => e.employerArticles);
      const s = e ? {
        href: "/articles/employers",
        items: t
      } : {
        href: "/articles/site-news",
        items: a
      };
      return (0, N.jsxs)(Y.Z, {
        borderWidth: "default",
        padding: 24,
        borderRadius: 24,
        stretched: true,
        verticalStretched: true,
        children: [(0, N.jsx)(j.x, {
          typography: "title-5-semibold",
          children: n[e ? gk : yk]
        }), (0, N.jsx)(v.X, {
          default: 24
        }), (0, N.jsx)("div", {
          children: (0, N.jsx)(dk, {
            isArticle: e,
            ...s
          })
        })]
      });
    };
    vk.displayName = "components/Blog/NewsOrArticlesCard/NewsOrArticlesCardComponent";
    const bk = (0, f.x)(vk);
    const jk = "placeholder-container--dk85LU4KIfksHjLk";
    const fk = "placeholder-content--fLmdXFIRGKMyLm8J";
    const _k = "employer_main_page_analytics_enabled";
    const Sk = {
      title: "resumeSearchesWidget.lastSearches.placeholder.title",
      description: "resumeSearchesWidget.lastSearches.placeholder.description",
      button: "resumeSearchesWidget.lastSearches.placeholder.button"
    };
    const Ck = ({
      trls: e
    }) => {
      const n = (0, Dl.n)(_k);
      const a = (0, t.useRef)(null);
      const s = (0, Se.$w)();
      (0, t.useEffect)(() => {
        if (n && a.current) {
          $C.howToSearchLearnMoreShown(a.current);
        }
      }, [n]);
      const i = (0, N.jsx)(y.z, {
        Element: u.SPALink,
        to: s ? "/article/25295?hhtmFrom=resume_search_form" : "/article/hhsearch",
        "data-qa": "last-searches-empty-findout",
        onClick: $C.howToSearchLearnMoreClick,
        mode: "secondary",
        stretched: true,
        children: e[Sk.button]
      });
      return (0, N.jsxs)("div", {
        ref: a,
        "data-qa": "last-searches-empty",
        className: jk,
        children: [(0, N.jsxs)("div", {
          className: fk,
          children: [(0, N.jsx)(j.x, {
            typography: "title-5-semibold",
            children: e[Sk.title]
          }), (0, N.jsx)(v.X, {
            default: 8
          }), (0, N.jsx)(j.x, {
            typography: "paragraph-2-regular",
            style: "secondary",
            children: e[Sk.description]
          })]
        }), i]
      });
    };
    Ck.displayName = "components/LastSearches/EmptySearches/EmptySearchesComponent";
    const kk = (0, f.x)(Ck);
    var wk = a(806537);
    var Nk = a(381643);
    const Ek = ({
      children: e,
      delimiter: n = ",",
      showDelimiter: a = true
    }) => (0, N.jsxs)(t.Fragment, {
      children: [e, a && (0, N.jsx)("span", {
        className: "last-searches-details__delimiter",
        children: `${n} `
      })]
    });
    Ek.displayName = "components/LastSearches/SearchCriterion/SearchCriterion";
    const Ak = e => e ? e.map(({
      id: e,
      text: n
    }) => (0, N.jsx)(Ek, {
      children: n
    }, e)) : null;
    const Rk = ({
      searchCriteria: e = {}
    }) => (0, N.jsxs)(j.x, {
      typography: "paragraph-3-regular",
      style: "secondary",
      "data-qa": "last-searches-details",
      children: [Ak(e.area), Ak(e.employment), Ak(e.schedule)]
    });
    Rk.displayName = "components/LastSearches/SearchDetails/SearchDetails";
    const Pk = "index.employerLastSearches.search";
    const Tk = ({
      trls: e,
      id: n,
      searchQuery: a,
      text: s,
      searchCriteria: i,
      position: r
    }) => {
      const o = (0, xn.useDispatch)();
      const {
        addNotification: l
      } = (0, qa.lm)();
      const c = (0, t.useCallback)(() => {
        m().sendHHEventButtonClick("last_searches_item", {
          type: "search"
        });
      }, []);
      return (0, N.jsxs)("li", {
        className: "last-searches-item",
        "data-qa": "last-searches-item",
        children: [(0, N.jsxs)("div", {
          className: "last-searches-item__content",
          children: [(0, N.jsx)("span", {
            className: "last-searches-item__name",
            children: (0, N.jsx)(Ue.r, {
              href: `${nn.Z.resumeSearch}?${a}&mark=main_page_last_search_${r}`,
              "data-qa": "last-searches-search-link",
              style: "neutral",
              typography: "paragraph-2-regular",
              onClick: c,
              children: s || e[Pk]
            })
          }), (0, N.jsx)("span", {
            className: "last-searches-item__remove",
            "data-qa": "last-searches-item-remove",
            children: (0, N.jsx)(E_.I, {
              children: (0, N.jsx)(wk.Z, {
                "data-search-id": n,
                onClick: async e => {
                  e.stopPropagation();
                  m().sendHHEventButtonClick("last_searches_item", {
                    type: "remove"
                  });
                  o((0, X_.T)({
                    id: n
                  }));
                  try {
                    await C._i.postFormData("/shards/employer/last_search/remove", {
                      "search-id": n
                    });
                  } catch (e) {
                    (0, Ga.ZP)(e, l);
                  }
                },
                children: (0, N.jsx)(Nk.Z, {
                  children: (0, N.jsx)(en.mTT, {
                    initialColor: "secondary"
                  })
                })
              })
            })
          })]
        }), (0, N.jsx)(Rk, {
          searchCriteria: i
        })]
      });
    };
    Tk.displayName = "components/LastSearches/SavedSearchItem/SavedSearchItemComponent";
    const Ik = (0, f.x)(Tk);
    const Lk = "index.employerLastSearches.title";
    const Wk = ({
      trls: e,
      searches: n
    }) => (0, N.jsxs)("div", {
      "data-qa": "last-searches",
      className: "last-searches",
      children: [(0, N.jsx)(j.x, {
        typography: "subtitle-1-semibold",
        "data-qa": "last-searches-title",
        children: e[Lk]
      }), (0, N.jsx)(v.X, {
        default: 16
      }), (0, N.jsx)("ul", {
        className: "last-searches__list",
        children: n.map(({
          id: e,
          text: n,
          searchQuery: a,
          searchCriteria: t
        }, s) => (0, N.jsx)(Ik, {
          id: e,
          text: n,
          searchQuery: a,
          searchCriteria: t,
          position: s + 1
        }, e))
      })]
    });
    Wk.displayName = "components/LastSearches/SearchList/SearchListComponent";
    const Bk = (0, f.x)(Wk);
    const Mk = ({
      maxHeight: e,
      maxItemsCount: n
    }) => {
      const a = (0, t.useRef)(null);
      const s = (0, _.v)(e => e.employerLastSearches);
      const i = s.length > 0;
      (0, t.useEffect)(() => {
        if (a.current) {
          const {
            stopSpying: e
          } = m().sendHHEventElementShown(a.current, {
            name: "last_searches",
            type: s.length ? "searches" : "empty"
          });
          return e;
        }
      }, [s.length]);
      return (0, N.jsx)("div", {
        ref: a,
        className: ge()("last-searches-wrapper", {
          "last-searches-wrapper_not-empty": i
        }),
        style: i && e ? {
          maxHeight: `${e}px`
        } : undefined,
        children: (0, N.jsx)(Y.Z, {
          borderWidth: "default",
          padding: s.length ? 24 : 12,
          paddingBottom: 12,
          borderRadius: 24,
          stretched: true,
          verticalStretched: true,
          children: s.length ? (0, N.jsx)(Bk, {
            searches: n ? s.slice(0, n) : s
          }) : (0, N.jsx)(kk, {})
        })
      });
    };
    Mk.displayName = "components/LastSearches/index/LastSearches";
    const Vk = Mk;
    var Dk = a(52606);
    const Fk = a.p + "static/images/employer-new-year-stats-mobile__min_7188ceac463f55df.webp";
    const Hk = a.p + "static/images/employer-new-year-stats__min_cb9d4b6d7ad6f7cc.webp";
    const qk = "image-wrapper--XBfqyDYR0gzERa7F";
    const Uk = "image--dTFQMEhNAEQsic4d";
    const Xk = "employer_new_year_stats";
    const zk = "indexPage.employer.newYearStats.modal.title";
    const Ok = "indexPage.employer.newYearStats.modal.description";
    const Zk = "indexPage.employer.newYearStats.modal.primaryAction";
    const Yk = "indexPage.employer.newYearStats.modal.secondaryAction";
    const Gk = ({
      trls: e
    }) => {
      const n = (0, _.v)(e => e.employerNewYearStats.showModal);
      const [a,, s] = (0, fh.m)(n);
      const {
        isGtXS: i
      } = (0, F.G)();
      (0, t.useEffect)(() => {
        if (a) {
          m().sendHHEvent("screen_shown", {
            screenName: "employer_new_year_stats_modal"
          });
        }
      }, [a]);
      const r = () => {
        Dk.default.markAsViewed(Xk);
        s();
        m().sendHHEventButtonClick("employer_new_year_stats_modal_close");
      };
      const o = (0, N.jsx)(x.o, {
        primaryActions: (0, N.jsx)(y.z, {
          mode: "primary",
          style: "accent",
          target: "_blank",
          Element: u.SPALink,
          to: "/article/stats2025",
          onClick: () => {
            Dk.default.markAsViewed(Xk);
            s();
            m().sendHHEventButtonClick("employer_new_year_stats_modal_link");
          },
          additionalQueryParams: {
            hhtmFrom: "modalka_main"
          },
          children: e[Zk]
        }),
        secondaryActions: (0, N.jsx)(y.z, {
          mode: "tertiary",
          style: "accent",
          onClick: r,
          children: e[Yk]
        })
      });
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(h.u, {
          onClose: r,
          size: "large",
          visible: a,
          headerImage: (0, N.jsx)(_e.Z, {
            alt: e[zk],
            path: Hk
          }),
          headerHeight: 242,
          footer: o,
          children: (0, N.jsx)(g.D, {
            size: "large",
            description: e[Ok],
            Element: "h3",
            children: e[zk]
          })
        }), (0, N.jsxs)(jn.R, {
          visible: a,
          onClose: r,
          footer: o,
          children: [(0, N.jsx)("div", {
            className: qk,
            children: (0, N.jsx)(_e.Z, {
              className: Uk,
              path: i ? Hk : Fk,
              alt: e[zk]
            })
          }), (0, N.jsx)(v.X, {
            default: 16
          }), (0, N.jsx)(g.D, {
            size: "large",
            description: e[Ok],
            Element: "h3",
            children: e[zk]
          })]
        })]
      });
    };
    Gk.displayName = "components/NewYearStats/index/NewYearStats";
    const $k = (0, f.x)(Gk);
    var Qk = a(92272);
    const Jk = ({
      date: e,
      text: n,
      href: a,
      viewed: t = false
    }) => {
      const s = (0, xn.useDispatch)();
      return (0, N.jsxs)("div", {
        className: "updates-item-link",
        children: [(0, N.jsx)(Ue.r, {
          Element: u.SPALink,
          to: a,
          onClick: () => {
            s((0, Qk.F)({
              href: a
            }));
          },
          style: "neutral",
          children: (0, N.jsx)("div", {
            className: ge()("updates-item-link-inner", {
              "updates-item-link-inner_not-viewed": !t
            }),
            children: (0, N.jsx)("div", {
              className: "updates-text",
              children: (0, N.jsx)(j.x, {
                typography: "label-2-regular",
                children: n
              })
            })
          })
        }), e && (0, N.jsx)(j.x, {
          typography: "label-3-regular",
          style: "secondary",
          children: e
        })]
      });
    };
    Jk.displayName = "components/Updates/ItemLink/ItemLink";
    const Kk = ({
      date: e,
      text: n
    }) => (0, N.jsxs)("div", {
      children: [(0, N.jsx)("div", {
        className: "updates-text",
        children: (0, N.jsx)(j.x, {
          typography: "label-2-regular",
          children: n
        })
      }), e && (0, N.jsx)(j.x, {
        typography: "label-3-regular",
        style: "secondary",
        children: e
      })]
    });
    Kk.displayName = "components/Updates/ItemText/ItemText";
    const ew = "new";
    const nw = "coming_soon";
    let aw = function (e) {
      e.New = "new";
      e.Soon = "soon";
      return e;
    }({});
    const tw = (e, n) => n.scrollHeight - n.scrollTop > e.offsetHeight;
    const sw = ({
      activeTabId: e
    }) => {
      const n = (0, _.v)(e => e.oldEmployerUpdates);
      const a = (0, t.useMemo)(() => n.filter(e => e.type === aw.New), [n]);
      const s = (0, t.useMemo)(() => n.filter(e => e.type === aw.Soon), [n]);
      const i = (0, t.useRef)(null);
      const r = (0, t.useRef)(null);
      const o = (0, t.useRef)(null);
      const [l, c] = (0, t.useState)(true);
      const d = e === ew;
      const m = (0, xy.P)(e => {
        if (i.current && e) {
          c(tw(i.current, e));
        }
      }, 50);
      (0, t.useEffect)(() => {
        const e = d ? r.current : o.current;
        if (i.current && e) {
          c(tw(i.current, e));
        }
      }, [d]);
      return (0, N.jsx)("div", {
        className: "updates-body",
        children: (0, N.jsxs)("div", {
          className: ge()("updates-body__items", {
            "updates-body__items_hideshadow": !l
          }),
          ref: i,
          children: [(0, N.jsx)(N_.c, {
            className: ge()({
              "g-hidden": !d
            }),
            ref: r,
            offsetRight: -20,
            onScroll: () => {
              m(r.current);
            },
            children: a.map(({
              date: e,
              text: n,
              href: t,
              viewed: s
            }, i) => {
              const r = i === a.length - 1;
              const o = t ? (0, N.jsx)(Jk, {
                date: e,
                text: n,
                href: t,
                viewed: s
              }) : (0, N.jsx)(Kk, {
                date: e,
                text: n
              });
              return (0, N.jsxs)("div", {
                children: [o, !r && (0, N.jsx)(Nl.i, {
                  marginTop: 16,
                  marginBottom: 16
                })]
              }, t || n);
            })
          }), (0, N.jsx)(N_.c, {
            className: ge()({
              "g-hidden": d
            }),
            ref: o,
            offsetRight: -20,
            onScroll: () => {
              m(o.current);
            },
            children: s.map(({
              date: e,
              text: n
            }, t) => {
              const s = t === a.length - 1;
              return (0, N.jsxs)("div", {
                children: [(0, N.jsx)(Kk, {
                  date: e,
                  text: n
                }), !s && (0, N.jsx)(Nl.i, {
                  marginTop: 16,
                  marginBottom: 16
                })]
              }, t);
            })
          })]
        })
      });
    };
    sw.displayName = "components/Updates/Body/Body";
    const iw = "employer_main_page_analytics_enabled";
    const rw = "index.employerUpdatesInfo.allUpdatesLink";
    const ow = ({
      trls: e
    }) => {
      const n = (0, Dl.n)(iw);
      const a = (0, t.useRef)(null);
      (0, t.useEffect)(() => {
        if (n && a.current) {
          const {
            stopSpying: e
          } = $C.updatesAllShown(a.current);
          return e;
        }
      }, [n]);
      return (0, N.jsx)("div", {
        className: "updates-footer",
        ref: a,
        children: (0, N.jsx)(Ue.r, {
          Element: u.SPALink,
          to: "/articles/employers/updates?from=dashboard&hhtmFromLabel=dashboard",
          "data-qa": "all-updates",
          onClick: () => {
            m().sendEvent("employer", "click", "all_updates");
            if (n) {
              $C.updatesAllClick();
            }
          },
          children: e[rw]
        })
      });
    };
    ow.displayName = "components/Updates/Footer/FooterComponent";
    const lw = (0, f.x)(ow);
    const cw = "employer_main_page_analytics_enabled";
    const dw = "index.employerUpdatesInfo.new";
    const mw = "index.employerUpdatesInfo.soon";
    const pw = ({
      trls: e,
      activeTabId: n,
      onChange: a = () => {}
    }) => {
      const s = (0, Dl.n)(cw);
      const i = (0, t.useRef)(null);
      const r = (0, t.useRef)(null);
      (0, t.useEffect)(() => {
        if (s && i.current && r.current) {
          $C.updatesTabShown(n === ew ? i.current : r.current, n);
        }
      }, [n, s]);
      return (0, N.jsx)("div", {
        className: "updates-head-tabs",
        children: (0, N.jsxs)(Gp.m, {
          activeItemId: n,
          mode: "secondary",
          onChange: e => {
            n = e;
            m().sendEvent("employer", "click", n);
            if (s) {
              $C.updatesTabClick(n);
            }
            a(n);
            return;
            var n;
          },
          children: [(0, N.jsx)($p.T, {
            id: ew,
            "data-qa": "updates-new",
            mode: "secondary",
            children: (0, N.jsx)("span", {
              ref: i,
              children: e[dw]
            })
          }), (0, N.jsx)($p.T, {
            id: nw,
            "data-qa": "updates-soon",
            mode: "secondary",
            children: (0, N.jsx)("span", {
              ref: r,
              children: e[mw]
            })
          })]
        })
      });
    };
    pw.displayName = "components/Updates/Tabs/TabsComponent";
    const uw = (0, f.x)(pw);
    const hw = "index.employerUpdatesInfo.header";
    const xw = ({
      trls: e,
      maxHeight: n
    }) => {
      const a = (0, t.useRef)(null);
      const [s, i] = (0, t.useState)(ew);
      (0, t.useEffect)(() => {
        if (a.current) {
          const {
            stopSpying: e
          } = m().sendHHEventElementShown(a.current, {
            name: "employer_updates_info"
          });
          return e;
        }
      }, []);
      return (0, N.jsx)("div", {
        ref: a,
        className: "updates-wrapper",
        style: n ? {
          height: `${n}px`
        } : undefined,
        children: (0, N.jsx)(Y.Z, {
          borderWidth: "default",
          padding: 24,
          borderRadius: 24,
          stretched: true,
          verticalStretched: true,
          children: (0, N.jsxs)("div", {
            className: "updates-scrollable-container",
            children: [(0, N.jsx)(g.D, {
              Element: "h2",
              size: "small",
              "data-qa": "updates-title",
              children: e[hw]
            }), (0, N.jsx)(uw, {
              activeTabId: s,
              onChange: e => {
                i(e);
              }
            }), (0, N.jsx)("div", {
              className: "updates-divider-wrapper",
              children: (0, N.jsx)(Nl.i, {
                marginBottom: 16
              })
            }), (0, N.jsx)(sw, {
              activeTabId: s
            }), (0, N.jsx)(lw, {})]
          })
        })
      });
    };
    xw.displayName = "components/Updates/index/Updates";
    const yw = (0, f.x)(xw);
    const gw = "employer_index_banner_move_to_top";
    const vw = () => {
      const e = (0, _.v)(e => e.employerFaq);
      const n = (0, _.v)(e => e.isHiringManager);
      const a = (0, Se.$w)();
      const s = (0, t.useRef)(null);
      const [i, r] = (0, t.useState)(0);
      const {
        breakpoint: o,
        isGtM: l
      } = (0, F.G)();
      const c = (0, xt.kQ)();
      const d = (0, Hj.O)();
      const m = (0, Dl.n)(gw) && !d;
      const p = qj().length > 0;
      (0, t.useEffect)(() => {
        if (s.current) {
          r(s.current.getBoundingClientRect().height);
        }
      }, [o]);
      const u = (0, N.jsx)(q.C, {
        xs: 4,
        s: 8,
        m: 0,
        children: (0, N.jsx)(w_, {})
      });
      const h = (0, N.jsx)(w_, {
        bannerHeight: c && !a ? undefined : 342
      });
      if (a) {
        return (0, N.jsxs)("div", {
          className: "main-page-redesign",
          children: [(0, N.jsxs)(H.M, {
            children: [(0, N.jsx)(v.X, {
              xs: 12,
              default: 28
            }), (0, N.jsxs)(U.J, {
              rowGap: 24,
              children: [(0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(_v, {})
              }), p && (0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(Yj, {})
              }), (0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(qx, {})
              }), (0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(XS, {})
              }), (0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(w_, {})
              }), (0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(xk, {
                  showFaq: true,
                  faqMaxItems: 6
                })
              })]
            }), (0, N.jsxs)(U.J, {
              rowGap: 40,
              children: [(0, N.jsxs)(q.C, {
                flexibleContent: true,
                xs: 0,
                s: 0,
                m: 4,
                l: 3,
                children: [(0, N.jsx)(Yj, {}), (0, N.jsx)(v.X, {
                  default: 12
                }), (0, N.jsx)(qx, {}), n && (0, N.jsxs)(N.Fragment, {
                  children: [(0, N.jsx)(v.X, {
                    default: 12
                  }), (0, N.jsx)(Vk, {
                    maxItemsCount: 2,
                    maxHeight: 256
                  })]
                })]
              }), (0, N.jsxs)(q.C, {
                flexibleContent: true,
                xs: 0,
                s: 0,
                m: 8,
                l: 6,
                children: [(0, N.jsx)(_v, {}), (0, N.jsx)(v.X, {
                  default: 12
                }), (0, N.jsx)(XS, {
                  hideSavedSearches: l && n,
                  hideLastSearches: l
                })]
              }), (0, N.jsxs)(q.C, {
                flexibleContent: true,
                xs: 0,
                s: 0,
                m: 0,
                l: 3,
                children: [n ? (0, N.jsx)(GS, {}) : (0, N.jsx)(Vk, {
                  maxItemsCount: 3
                }), (0, N.jsx)(v.X, {
                  default: 12
                }), h]
              }), (0, N.jsx)(q.C, {
                ref: s,
                flexibleContent: true,
                xs: 0,
                s: 0,
                m: 4,
                l: 0,
                children: (0, N.jsx)(w_, {})
              }), (0, N.jsx)(q.C, {
                xs: 0,
                s: 0,
                m: 8,
                l: 0,
                children: (0, N.jsx)(xk, {
                  showFaq: true,
                  faqMaxItems: 6
                })
              })]
            }), (0, N.jsx)(v.X, {
              default: 40,
              xs: 0,
              s: 0
            }), (0, N.jsxs)(U.J, {
              children: [(0, N.jsx)(q.C, {
                xs: 0,
                s: 0,
                m: 0,
                l: 6,
                children: (0, N.jsx)(bk, {
                  isArticle: false
                })
              }), (0, N.jsx)(q.C, {
                xs: 0,
                s: 0,
                m: 0,
                l: 6,
                children: (0, N.jsx)(bk, {
                  isArticle: true
                })
              })]
            })]
          }), (0, N.jsx)(v.X, {
            default: 80,
            xs: 12,
            s: 12
          })]
        });
      } else {
        return (0, N.jsxs)("div", {
          className: "main-page-redesign",
          children: [(0, N.jsxs)(H.M, {
            children: [(0, N.jsx)(v.X, {
              xs: 12,
              default: 28
            }), (0, N.jsxs)(U.J, {
              rowGap: 24,
              children: [(0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(_v, {})
              }), p && (0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(Yj, {})
              }), (0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(qx, {})
              }), (0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(XS, {})
              }), m ? u : null, c && (0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(GC, {})
              }), m ? null : u, (0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(xk, {
                  showFaq: true,
                  faqMaxItems: 6
                })
              }), (0, N.jsx)(q.C, {
                xs: 4,
                s: 8,
                m: 0,
                children: (0, N.jsx)(yw, {})
              })]
            }), (0, N.jsxs)(U.J, {
              rowGap: 40,
              children: [(0, N.jsxs)(q.C, {
                flexibleContent: true,
                xs: 0,
                s: 0,
                m: 4,
                l: 3,
                children: [(0, N.jsx)(Yj, {}), (0, N.jsx)(v.X, {
                  default: 16
                }), (0, N.jsx)(qx, {}), n && (0, N.jsxs)(N.Fragment, {
                  children: [(0, N.jsx)(v.X, {
                    default: 12
                  }), (0, N.jsx)(Vk, {
                    maxItemsCount: 2,
                    maxHeight: 256
                  })]
                })]
              }), (0, N.jsxs)(q.C, {
                flexibleContent: true,
                xs: 0,
                s: 0,
                m: 8,
                l: 6,
                children: [(0, N.jsx)(_v, {}), (0, N.jsx)(v.X, {
                  default: 12
                }), (0, N.jsx)(XS, {
                  hideLastSearches: n
                })]
              }), (0, N.jsxs)(q.C, {
                flexibleContent: true,
                xs: 0,
                s: 0,
                m: 0,
                l: 3,
                children: [m ? (0, N.jsxs)(N.Fragment, {
                  children: [h, (0, N.jsx)(v.X, {
                    default: 12
                  })]
                }) : null, c ? (0, N.jsx)(GC, {}) : (0, N.jsx)(yw, {
                  maxHeight: 412
                }), m ? null : (0, N.jsxs)(N.Fragment, {
                  children: [(0, N.jsx)(v.X, {
                    default: 12
                  }), h]
                })]
              }), (0, N.jsx)(q.C, {
                flexibleContent: true,
                xs: 0,
                s: 0,
                m: 4,
                l: 0,
                children: (0, N.jsx)(yw, {
                  maxHeight: i
                })
              }), (0, N.jsx)(q.C, {
                ref: s,
                flexibleContent: true,
                xs: 0,
                s: 0,
                m: 4,
                l: 0,
                children: (0, N.jsx)(w_, {})
              }), (0, N.jsx)(q.C, {
                flexibleContent: true,
                xs: 0,
                s: 0,
                m: 4,
                l: 0,
                children: c ? (0, N.jsx)(GC, {}) : (0, N.jsx)(oc, {
                  maxCount: 5,
                  verticalStretched: true,
                  items: e
                })
              }), (0, N.jsx)(q.C, {
                xs: 0,
                s: 0,
                m: 8,
                l: 0,
                children: (0, N.jsx)(xk, {
                  showFaq: c,
                  faqMaxItems: 6
                })
              })]
            }), (0, N.jsx)(v.X, {
              default: 40,
              xs: 0,
              s: 0
            }), (0, N.jsxs)(U.J, {
              children: [(0, N.jsx)(q.C, {
                xs: 0,
                s: 0,
                m: 0,
                l: 6,
                children: (0, N.jsx)(xk, {})
              }), c ? (0, N.jsxs)(N.Fragment, {
                children: [(0, N.jsx)(q.C, {
                  xs: 0,
                  s: 0,
                  m: 0,
                  l: 3,
                  children: (0, N.jsx)(yw, {})
                }), (0, N.jsx)(q.C, {
                  flexibleContent: true,
                  xs: 0,
                  s: 0,
                  m: 0,
                  l: 3,
                  children: (0, N.jsx)(oc, {
                    maxCount: 5,
                    verticalStretched: true,
                    items: e
                  })
                })]
              }) : (0, N.jsx)(q.C, {
                flexibleContent: true,
                xs: 0,
                s: 0,
                m: 0,
                l: 6,
                children: (0, N.jsx)(oc, {
                  maxCount: 5,
                  verticalStretched: true,
                  items: e
                })
              })]
            })]
          }), (0, N.jsx)(v.X, {
            default: 80,
            xs: 12,
            s: 12
          }), (0, N.jsx)(Lu.c, {}), (0, N.jsx)($k, {})]
        });
      }
    };
    vw.displayName = "components/Layout/index/Layout";
    const bw = vw;
    const jw = () => (0, N.jsxs)(N.Fragment, {
      children: [(0, N.jsx)(Pu.I, {}), (0, N.jsx)(bw, {})]
    });
    jw.displayName = "components/IndexPageEmployer/index/IndexEmployer";
    const fw = jw;
    var _w = a(728800);
    var Sw = a(690322);
    var Cw = a(177362);
    var kw = a(526729);
    const ww = a.p + "static/images/desktop_modal_header_img__min_a1af9523bfa6743e.webp";
    const Nw = e => n => m().sendHHEventElementShown(n, {
      elementName: e ? "non_payers_banner_free_prolongation_main" : "banner_free_prolongation_main"
    });
    const Ew = "employer.freePublicationPromo.modal.index.title";
    const Aw = "employer.freePublicationPromo.modal.index.title.mobile";
    const Rw = "employer.freePublicationPromo.modal.aboutLink";
    const Pw = "employer.freePublicationPromo.modal.createVacancy";
    const Tw = "employer.freePublicationPromo.modal.description";
    const Iw = "employer.freePublicationPromo.modal.features.linkText";
    const Lw = {
      features1: "employer.freePublicationPromo.modal.features.1",
      features2: "employer.freePublicationPromo.modal.features.2",
      features3: "employer.freePublicationPromo.modal.features.3",
      features4: "employer.freePublicationPromo.modal.features.4"
    };
    const Ww = {
      linkText: "employer.freePublicationPromo.modal.freeProlongationExp.features.linkText",
      features: {
        features1: "employer.freePublicationPromo.modal.features.1",
        features2: "employer.freePublicationPromo.modal.features.2",
        features3: "employer.freePublicationPromo.modal.features.3",
        features4: "employer.freePublicationPromo.modal.freeProlongationExp.features.4"
      }
    };
    const Bw = ({
      trls: e
    }) => {
      const n = (0, p.l)(ww);
      const {
        isMobile: a
      } = (0, F.G)();
      const s = (0, Cw.r)();
      const i = (0, _.v)(({
        isOldEmployerFreeProlongationModal: e
      }) => e);
      const r = (0, _.v)(({
        isOldEmployerWithoutServicesModal: e
      }) => e);
      const o = (0, _w.CA)();
      const [l, c, b] = (0, fh.m)(false);
      const [f, S] = (0, t.useState)(false);
      (0, t.useEffect)(() => {
        if (r) {
          if (o(s, true) === kw.ot) {
            c();
          }
        }
      }, [s, o, r, c]);
      (0, t.useEffect)(() => {
        if (i) {
          if (o(Sw.V8, true) === kw.ot) {
            c();
          }
        }
      }, [o, i, c]);
      const k = () => {
        b();
      };
      (0, t.useEffect)(() => {
        (async () => {
          if (l) {
            if (i) {
              await (async () => {
                try {
                  await C._i.post("/shards/employer/old_employer_free_prolongation_modal_viewed");
                } catch (e) {}
              })();
            } else {
              await (async () => {
                try {
                  await C._i.post("/shards/employer/old_employer_without_services_modal_viewed");
                } catch (e) {}
              })();
            }
          }
        })();
      }, [i, l]);
      const w = (0, N.jsx)(x.o, {
        type: "vertical",
        primaryActions: (0, N.jsx)(y.z, {
          mode: "primary",
          style: "accent",
          Element: u.SPALink,
          to: "/employer/vacancy/create",
          onClick: (E = i, () => {
            m().sendHHEventButtonClick(E ? "non_payers_banner_free_prolongation_create_main" : "banner_free_prolongation_create_main");
          }),
          children: e[Pw]
        })
      });
      var E;
      const A = (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(g.D, {
          size: a ? "large" : "medium",
          Element: "h3",
          children: (0, Z.LP)(a ? e[Aw] : e[Ew])
        }), (0, N.jsx)(v.X, {
          default: 16
        }), (0, N.jsx)(j.x, {
          children: e[Tw]
        })]
      });
      const R = (0, N.jsxs)(d.ElementShownAnchor, {
        fn: Nw(i),
        children: [(0, N.jsx)(v.X, {
          default: 16
        }), A, (0, N.jsx)(v.X, {
          default: 8
        }), (0, N.jsx)(Ue.r, {
          style: "accent",
          mode: "primary",
          iconRight: f ? (0, N.jsx)(en.HfI, {}) : (0, N.jsx)(en.b$C, {}),
          onClick: () => {
            S(!f);
            (e => {
              m().sendHHEventButtonClick(e ? "non_payers_banner_free_prolongation_more_main" : "banner_free_prolongation_more_main");
            })(i);
          },
          children: e[Rw]
        }), f && (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)(v.X, {
            default: 8
          }), (0, N.jsx)(X.z, {
            default: 16,
            children: (i ? Object.values(Ww.features) : Object.values(Lw)).map((n, a) => (0, N.jsx)(j.x, {
              children: (0, Z.WU)(e[n], {
                "{link}": (0, N.jsx)(Ue.r, {
                  target: "_blank",
                  inline: true,
                  href: i ? "/article/campain13972" : "/article/campain13831",
                  children: i ? e[Ww.linkText] : e[Iw]
                })
              })
            }, a))
          })]
        }), !a && (0, N.jsx)(v.X, {
          default: 24
        })]
      });
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(h.u, {
          size: "medium",
          visible: l,
          headerImageUrl: n,
          headerHeight: 242,
          footer: w,
          actions: (0, N.jsx)(en.Cs7, {
            initialColor: "contrast",
            onClick: k
          }),
          onClose: k,
          children: R
        }), (0, N.jsx)(jn.R, {
          visible: l,
          onClose: k,
          footer: w,
          children: R
        })]
      });
    };
    Bw.displayName = "components/OldEmployerWithoutServicesModal/index/OldEmployerWithoutServicesModalComponent";
    const Mw = (0, Bs.Z)(Bw);
    var Vw = a(371745);
    var Dw = a.n(Vw);
    var Fw = a(415429);
    const Hw = "COMPANY";
    const qw = "card-wrapper--OoMahKk9_Rw5Fmya";
    const Uw = "content--IirZfUy1h42fgIX4";
    const Xw = "text--FASu3M2etkqe7OEC";
    const zw = ({
      trls: e,
      companyCategory: n
    }) => {
      const a = n === Hw;
      const s = (0, Se.Xl)();
      (0, t.useEffect)(() => {
        m().sendHHEvent("element_shown", {
          goal: a ? "showed-company-confirmation" : "showed-not-company-confirmation"
        }, {
          elementName: "company-confirmation"
        });
      }, [a]);
      return (0, N.jsx)("div", {
        className: qw,
        children: (0, N.jsx)(Y.Z, {
          stretched: true,
          verticalStretched: true,
          borderWidth: "default",
          borderRadius: 24,
          padding: 12,
          "data-qa": "company-confirmation",
          children: (0, N.jsxs)("div", {
            className: Uw,
            children: [(0, N.jsxs)("div", {
              className: Xw,
              children: [(0, N.jsx)(j.x, {
                typography: "title-5-semibold",
                children: e[zw.trls.title]
              }), (0, N.jsx)(j.x, {
                typography: "label-3-regular",
                style: "secondary",
                children: e[zw.trls.description]
              })]
            }), (0, N.jsx)(y.z, {
              Element: u.SPALink,
              to: s ? "/employer/verification" : "/employer/documents",
              onClick: () => {
                m().sendHHEventButtonClick("upload-documents", {
                  goal: a ? "clicked-company-confirmation" : "clicked-not-company-confirmation"
                });
              },
              "data-qa": "company-confirmation-completeRegistration",
              style: "neutral",
              mode: "secondary",
              size: "medium",
              stretched: true,
              children: e[zw.trls.action]
            })]
          })
        })
      });
    };
    zw.displayName = "components/CompanyConfirmation/index/CompanyConfirmation";
    zw.trls = {
      description: "advice.employer.completeRegistration.description.notCompany",
      title: "advice.employer.completeRegistration.title",
      action: "advice.employer.completeRegistration.action"
    };
    const Ow = (0, f.x)(zw);
    const Zw = "card-wrapper--g9ZV7lFZ8pitCg2a";
    const Yw = "content--OVunVcBG2kURzOfl";
    const Gw = "text--aOFfKQJxJHECXq3V";
    const $w = "phones--C7aclFCFmisvBlIy";
    const Qw = ({
      trls: e
    }) => {
      const n = (0, _.v)(({
        contactPhones: e
      }) => e) || [];
      const a = (0, Se.$w)();
      const {
        isXS: t
      } = (0, F.G)();
      return (0, N.jsx)("div", {
        className: Zw,
        children: (0, N.jsx)(Y.Z, {
          stretched: true,
          verticalStretched: true,
          borderWidth: "default",
          borderRadius: 24,
          padding: 12,
          children: (0, N.jsxs)("div", {
            className: Yw,
            children: [(0, N.jsxs)("div", {
              "data-qa": "contact-us",
              className: Gw,
              children: [(0, N.jsx)(j.x, {
                typography: "title-5-semibold",
                children: e[Qw.trls.contactUsHeader]
              }), (0, N.jsx)("div", {
                className: $w,
                children: n.map(n => (0, N.jsxs)("div", {
                  children: [!a && (0, N.jsx)(j.x, {
                    typography: "label-3-regular",
                    style: "secondary",
                    children: e[Qw.trls.regions[n.postfix]]
                  }), t ? (0, N.jsx)(j.x, {
                    Element: "a",
                    href: `tel:${n.country}${n.city}${n.number}`,
                    typography: "label-2-regular",
                    children: `${n.country} ${n.city} ${n.number}`
                  }) : (0, N.jsx)(j.x, {
                    Element: "span",
                    typography: "label-2-regular",
                    children: `${n.country} ${n.city} ${n.number}`
                  })]
                }, n.postfix))
              })]
            }), !a && (0, N.jsx)(y.z, {
              Element: u.SPALink,
              to: "/support/order_call/list",
              "data-qa": "contact-us-order-call",
              style: "neutral",
              mode: "secondary",
              size: "medium",
              stretched: true,
              children: e[Qw.trls.contactUsAction]
            })]
          })
        })
      });
    };
    Qw.displayName = "components/ContactPhones/index/ContactPhones";
    Qw.trls = {
      contactUsHeader: "employer.auth.contactUs.needHelp",
      contactUsAction: "employer.order.phone",
      regions: {
        msk: "helpPhone.title.msk",
        spb: "helpPhone.title.spb",
        regions: "helpPhone.title.regions",
        city: "helpPhone.title.city",
        mobile: "helpPhone.title.mobile",
        other: "helpPhone.title.regions"
      }
    };
    const Jw = (0, f.x)(Qw);
    const Kw = "wrapper--tYijnNPnroYwKYPj";
    const eN = "list--iGA7W_kAqakFVx4w";
    const nN = ({
      trls: e
    }) => {
      const n = (0, u.usePush)();
      const a = (0, _.v)(({
        preparedVacancyTemplates: e
      }) => e);
      const [s, i] = (0, t.useState)(12);
      const [r, o] = (0, t.useState)(a.length - s > 0);
      if (a.length > 0) {
        return (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsxs)("div", {
            className: Kw,
            "data-qa": "dashboard-vacancy-prepared-templates",
            children: [(0, N.jsx)(j.x, {
              typography: "title-4-semibold",
              children: e[nN.trls.title]
            }), (0, N.jsx)(v.X, {
              default: 8
            }), (0, N.jsx)(j.x, {
              typography: "paragraph-2-regular",
              style: "secondary",
              children: e[nN.trls.subtitle]
            }), (0, N.jsx)(v.X, {
              default: 24
            }), (0, N.jsx)("div", {
              className: eN,
              children: (0, N.jsx)(vn.T, {
                children: a.slice(0, s).map(e => (0, N.jsx)(bn.X, {
                  Element: "button",
                  onClick: () => n(`/employer/vacancy/create?from=index_new_employer&preparedTemplateId=${e.id}`),
                  "data-qa": "dashboard-vacancy-prepared-templates-item",
                  children: e.name
                }, e.id))
              })
            }), r && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(v.X, {
                default: 24
              }), (0, N.jsx)(Ue.r, {
                typography: "label-2-regular",
                style: "accent",
                onClick: () => {
                  i(a.length);
                  o(false);
                },
                children: (0, Z.WU)(e[nN.trls.loadMore], {
                  "{0}": (0, N.jsx)(Zn.q, {
                    many: e[nN.trls.templatesFive],
                    some: e[nN.trls.templatesTwo],
                    one: e[nN.trls.templatesOne],
                    zero: e[nN.trls.templatesFive],
                    value: a.length - s
                  })
                })
              })]
            })]
          }), (0, N.jsx)(Nl.i, {})]
        });
      } else {
        return null;
      }
    };
    nN.displayName = "components/PreparedVacancyTemplates/index/PreparedVacancyTemplates";
    nN.trls = {
      title: "newemployer.dashboard.preparedVacancyTemplates.title",
      subtitle: "newemployer.dashboard.preparedVacancyTemplates.subtitle",
      loadMore: "newemployer.dashboard.preparedVacancyTemplates.loadMoreButton",
      templatesFive: "words.template.5",
      templatesTwo: "words.template.2",
      templatesOne: "words.template.1"
    };
    const aN = (0, f.x)(nN);
    const tN = "positive";
    const sN = "warning";
    const iN = "negative";
    const rN = ({
      trls: e,
      children: n,
      name: a,
      description: t,
      statusKind: s,
      tagText: i,
      statusText: r,
      narrow: o = false
    }) => (0, N.jsxs)(N.Fragment, {
      children: [(0, N.jsx)(j.x, {
        typography: "title-3-semibold",
        "data-qa": "dashboard-vacancy-header",
        children: a || e[rN.trls.vacancyNameStub]
      }), t && (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(v.X, {
          default: o ? 16 : 24
        }), (0, N.jsx)(j.x, {
          typography: "label-2-regular",
          children: t
        }), (0, N.jsx)(v.X, {
          default: 24
        })]
      }), i && (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(v.X, {
          default: 8
        }), (0, N.jsx)(Fl.V, {
          style: s,
          size: "large",
          children: (0, N.jsx)("span", {
            "data-qa": "dashboard-vacancy-tag",
            suppressHydrationWarning: true,
            children: i
          })
        }), (0, N.jsx)(v.X, {
          default: 32
        })]
      }), r && (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(v.X, {
          default: 8
        }), (0, N.jsx)("span", {
          suppressHydrationWarning: true,
          children: r
        }), (0, N.jsx)(v.X, {
          default: 32
        })]
      }), n]
    });
    rN.displayName = "components/DashboardVacancy/AbstractVacancy/AbstractVacancyComponent";
    const oN = (0, f.x)(rN);
    rN.trls = {
      vacancyNameLabel: "newemployer.dashboard.vacancy.name.label",
      vacancyNameStub: "newemployer.dashboard.vacancy.name.stub"
    };
    var lN = a(60306);
    const cN = ({
      children: e,
      tooltipContent: n,
      onClick: a = () => {},
      ...s
    }) => {
      const i = (0, t.useRef)(null);
      const [r, o, l] = (0, fh.m)(false);
      const {
        isMobile: c
      } = (0, F.G)();
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(Ue.r, {
          ref: i,
          inline: true,
          typography: "label-2-regular",
          style: "accent",
          onClick: () => {
            o();
            a();
          },
          ...s,
          children: e
        }), c ? (0, N.jsx)(jn.R, {
          visible: r,
          onClose: l,
          children: n
        }) : (0, N.jsx)(lN.u, {
          activatorRef: i,
          visible: r,
          closeByClickOutside: true,
          onClose: l,
          placement: "top-center",
          children: n
        })]
      });
    };
    cN.displayName = "components/DashboardVacancy/LinkInfo/LinkInfo";
    const dN = "button-group--_tOFHHT2okoTnUTc";
    const mN = "dashboard-vacancy--UufyEFqVaRUXSeE_";
    const pN = "dashboard-vacancy-without-bg--siRedfoWswywnWko";
    const uN = "dashboard-vacancy-list-item--ycyXwjyO6MYkaKWx";
    const hN = "gift-link--rJoRyXPn2ikkJf7a";
    const xN = ({
      trls: e,
      vacancy: n,
      bill: a,
      giftsCount: s
    }) => {
      const i = (0, t.useRef)();
      const r = (0, Se.$w)();
      const {
        isXS: o
      } = (0, F.G)();
      (0, t.useEffect)(() => {
        m().sendHHEventElementShown(i.current, {
          name: "dashboard_vacancy_fourth_state"
        });
      }, [i]);
      return (0, N.jsxs)(oN, {
        name: n.name,
        statusText: (0, N.jsx)(j.x, {
          "data-qa": "dashboard-vacancy-status-autopublication",
          typography: "subtitle-1-semibold",
          style: "secondary",
          children: (0, Z.WU)(e[xN.trls.waitingForPayment], {
            "{0}": a
          })
        }),
        children: [(0, N.jsxs)("div", {
          ref: i,
          "data-qa": "dashboard-billed-vacancy",
          children: [(0, N.jsx)(j.x, {
            typography: "label-2-regular",
            children: e[xN.trls.billedVacancySuggestTitle]
          }), (0, N.jsx)(v.X, {
            default: 24
          }), (0, N.jsxs)("ul", {
            children: [!r && s > 0 && (0, N.jsx)("li", {
              className: uN,
              children: (0, N.jsx)(j.x, {
                typography: "label-2-regular",
                Element: "span",
                children: (0, Z.WU)(e[xN.trls.billedVacancyThirdSuggestText], {
                  "{0}": (0, N.jsx)(cN, {
                    onClick: () => {
                      m().sendHHEventButtonClick("dashboard_vacancy_billed_vacancy_suggestion");
                    },
                    tooltipContent: (0, Z.WU)(e[xN.trls.billedVacancyThirdSuggestInfoText], {
                      "{0}": s
                    }),
                    "data-qa": "dashboard-vacancy-gifts",
                    children: (0, Z.WU)(e[xN.trls.billedVacancyThirdSuggestLinkText], {
                      "{0}": s
                    })
                  })
                })
              })
            }), (0, N.jsx)("li", {
              className: uN,
              children: (0, N.jsx)(j.x, {
                typography: "label-2-regular",
                Element: "span",
                children: e[xN.trls.billedVacancyFirstSuggestText]
              })
            }), (0, N.jsx)("li", {
              className: uN,
              children: (0, N.jsx)(j.x, {
                typography: "label-2-regular",
                Element: "span",
                children: e[xN.trls.billedVacancySecondSuggestText]
              })
            })]
          })]
        }), (0, N.jsx)(v.X, {
          default: 32
        }), (0, N.jsx)(y.z, {
          Element: u.SPALink,
          onClick: () => {
            m().sendHHEventButtonClick("dashboard_vacancy_to_my_vacancies");
          },
          to: "/employer/vacancies",
          "data-qa": "dashboard-billed-vacancy__employer-vacancies-link",
          style: "accent",
          mode: "secondary",
          size: "medium",
          stretched: o,
          children: e[xN.trls.toMyVacancies]
        })]
      });
    };
    xN.displayName = "components/DashboardVacancy/BilledVacancy/BilledVacancyComponent";
    const yN = (0, f.x)(xN);
    xN.trls = {
      waitingForPayment: "newemployer.dashboard.recentVacancy.status.waitingForPayment",
      billedVacancySuggestTitle: "newemployer.dashboard.billedVacancy.suggestTitle",
      billedVacancyFirstSuggestText: "newemployer.dashboard.billedVacancy.suggest.1.text",
      billedVacancySecondSuggestText: "newemployer.dashboard.billedVacancy.suggest.2.text",
      billedVacancyThirdSuggestText: "newemployer.dashboard.billedVacancy.suggest.3.text",
      billedVacancyThirdSuggestLinkText: "newemployer.dashboard.vacancyStub.suggest.3.linkText",
      billedVacancyThirdSuggestInfoText: "newemployer.dashboard.vacancyStub.suggest.3.infoText",
      toMyVacancies: "vacancies.groups.myVacancies"
    };
    const gN = "banner--TTDjUBMnjyQp_Jpm";
    const vN = "fixed--SzKpjJyXMBQ34sR_";
    const bN = "background--GgASwWUTHGMhjmDi";
    const jN = "text--dTWniguUMaQkmOjA";
    const fN = "buttons--ktvfPK8ctouH6JaH";
    const _N = "index.newEmployer.freeStandardPlusBanner.part1";
    const SN = "index.newEmployer.freeStandardPlusBanner.highlighted";
    const CN = "index.newEmployer.freeStandardPlusBanner.part2";
    const kN = "index.newEmployer.freeStandardPlusBanner.button";
    const wN = ({
      trls: e
    }) => {
      const {
        isMobile: n
      } = (0, F.G)();
      const [a, s] = (0, t.useState)(true);
      if (a) {
        return (0, N.jsx)("div", {
          className: ge()({
            [vN]: n
          }),
          children: (0, N.jsx)(Oa(), {
            xs: "4",
            s: "8",
            m: "5",
            l: "5",
            container: !n,
            children: (0, N.jsx)("div", {
              className: gN,
              children: (0, N.jsxs)(Y.Z, {
                stretched: true,
                padding: 12,
                borderRadius: 24,
                style: n ? "constant" : "primary",
                borderWidth: n ? "none" : "default",
                children: [(0, N.jsx)("div", {
                  className: bN
                }), (0, N.jsx)("div", {
                  className: jN,
                  children: (0, N.jsxs)(j.x, {
                    style: n ? "contrast" : "primary",
                    typography: n ? "subtitle-1-semibold" : "title-5-semibold",
                    children: [e[_N], (0, N.jsx)(j.x, {
                      style: n ? "positive-secondary" : "positive",
                      typography: n ? "subtitle-1-semibold" : "title-5-semibold",
                      Element: "span",
                      children: e[SN]
                    }), e[CN]]
                  })
                }), (0, N.jsx)(v.X, {
                  default: n ? 24 : 64
                }), (0, N.jsxs)("div", {
                  className: fN,
                  children: [(0, N.jsx)(y.z, {
                    Element: u.SPALink,
                    to: "/employer/vacancy/create",
                    mode: "secondary",
                    size: "medium",
                    style: n ? "constant" : "neutral",
                    stretched: true,
                    onClick: () => {
                      m().sendHHEventButtonClick("index_page-free_standard_plus_banner_click");
                    },
                    children: e[kN]
                  }), n && (0, N.jsx)(je.a, {
                    style: "contrast",
                    icon: en.Cs7,
                    onClick: () => s(false)
                  })]
                })]
              })
            })
          })
        });
      } else {
        return null;
      }
    };
    wN.displayName = "components/DashboardVacancy/FreeStandardPlusBanner/FreeStandardPlusBannerComponent";
    const NN = (0, f.x)(wN);
    var EN = a(533930);
    var AN = a.n(EN);
    var RN = a(506398);
    var PN = a.n(RN);
    const TN = 30;
    const IN = 100;
    const LN = ({
      trls: e,
      vacancy: {
        draftId: n,
        name: a,
        completedFieldsPercentage: s,
        suitableResumesCountTotal: i,
        suitableResumesCountLastMonth: r
      }
    }) => {
      const o = (0, t.useRef)();
      const l = (c = s) <= TN ? iN : c > TN && c < IN ? sN : tN;
      var c;
      const d = l === tN ? e[LN.trls.readyToPublish] : (0, Z.WU)(e[LN.trls.notReady], {
        "{0}": s
      });
      const p = s === IN;
      const {
        isXS: h
      } = (0, F.G)();
      (0, t.useEffect)(() => {
        m().sendHHEventElementShown(o.current, {
          name: p ? "dashboard_vacancy_third_state" : "dashboard_vacancy_second_state"
        });
      }, [o, p]);
      return (0, N.jsxs)(oN, {
        name: a,
        statusKind: l,
        tagText: d,
        children: [(0, N.jsxs)("div", {
          ref: o,
          "data-qa": "dashboard-recent-draft",
          children: [(0, N.jsx)(j.x, {
            typography: "label-2-regular",
            children: e[LN.trls.recentVacancySuggestTitle]
          }), (0, N.jsx)(v.X, {
            default: 24
          }), (0, N.jsxs)("ul", {
            children: [(0, N.jsx)("li", {
              className: uN,
              children: (0, N.jsx)(j.x, {
                typography: "label-2-regular",
                Element: "span",
                children: (0, Z.WU)(e[LN.trls.recentVacancyFirstSuggestText], {
                  "{0}": (0, N.jsx)(cN, {
                    tooltipContent: e[LN.trls.recentVacancyFirstSuggestInfoText],
                    "data-qa": "dashboard-recent-draft__suitable-applicants",
                    children: (0, Xs.uf)(i, {
                      decimalLength: 0,
                      groupSeparator: er.qD
                    })
                  })
                })
              })
            }), (0, N.jsx)("li", {
              className: uN,
              children: (0, N.jsx)(j.x, {
                typography: "label-2-regular",
                Element: "span",
                children: (0, Z.WU)(e[LN.trls.recentVacancySecondSuggestText], {
                  "{0}": (0, N.jsx)(cN, {
                    tooltipContent: e[LN.trls.recentVacancySecondSuggestInfoText],
                    "data-qa": "dashboard-recent-draft__looking-for-work",
                    children: (0, Xs.uf)(r, {
                      decimalLength: 0,
                      groupSeparator: er.qD
                    })
                  })
                })
              })
            })]
          }), p && (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(v.X, {
              default: 24
            }), (0, N.jsxs)("ul", {
              children: [(0, N.jsx)("li", {
                className: uN,
                children: (0, N.jsx)(j.x, {
                  typography: "label-2-regular",
                  Element: "span",
                  children: e[LN.trls.recentVacancyThirdSuggestText]
                })
              }), (0, N.jsx)("li", {
                className: uN,
                children: (0, N.jsx)(j.x, {
                  typography: "label-2-regular",
                  Element: "span",
                  children: e[LN.trls.recentVacancyFoursSuggestText]
                })
              })]
            })]
          })]
        }), (0, N.jsx)(v.X, {
          default: 24
        }), (0, N.jsx)(y.z, {
          Element: u.SPALink,
          to: `/employer/vacancy/create?draftId=${n}`,
          onClick: p ? () => PN()({
            draftId: n
          }) : () => AN()({
            draftId: n
          }),
          "data-qa": "dashboard-recent-draft__" + (p ? "publish_vacancy" : "continue_vacancy_filling"),
          style: "accent",
          mode: "primary",
          size: "medium",
          stretched: h,
          children: p ? e[LN.trls.publishVacancy] : e[LN.trls.continueVacancyFilling]
        })]
      });
    };
    LN.displayName = "components/DashboardVacancy/RecentDraftVacancy/RecentDraftVacancyComponent";
    const WN = (0, f.x)(LN);
    LN.trls = {
      notReady: "newemployer.dashboard.recentVacancy.status.notReady",
      readyToPublish: "newemployer.dashboard.recentVacancy.status.readyToPublish",
      recentVacancySuggestTitle: "newemployer.dashboard.recentVacancy.suggestTitle",
      recentVacancyFirstSuggestText: "newemployer.dashboard.recentVacancy.suggest.1.text",
      recentVacancyFirstSuggestInfoText: "newemployer.dashboard.recentVacancy.suggest.1.infoText",
      recentVacancySecondSuggestText: "newemployer.dashboard.recentVacancy.suggest.2.text",
      recentVacancySecondSuggestInfoText: "newemployer.dashboard.recentVacancy.suggest.2.infoText",
      recentVacancyThirdSuggestText: "newemployer.dashboard.recentVacancy.suggest.3.text",
      recentVacancyFoursSuggestText: "newemployer.dashboard.recentVacancy.suggest.4.text",
      publishVacancy: "newemployer.dashboard.recentVacancy.action.publishVacancy",
      continueVacancyFilling: "newemployer.dashboard.recentVacancy.action.continueVacancyFilling"
    };
    var BN = a(878343);
    var MN = a(24003);
    const VN = ({
      trls: e,
      data: n
    }) => {
      var a;
      const {
        availableDraft: {
          name: t,
          requiredPublications: s
        },
        draftScheduledPublication: i,
        assignedEmployerManagerId: r
      } = n;
      const o = (0, ox.Z)(i.isoDateTimePublication);
      const l = (0, _.v)(e => {
        return e.employerManager?.id;
      });
      const c = (0, _.v)(e => e.employerManagersList.find(({
        id: e
      }) => e === String(r) && e !== String(l)));
      const d = (0, MN._)();
      const {
        isXS: m
      } = (0, F.G)();
      return (0, N.jsxs)(oN, {
        name: t,
        statusText: (0, N.jsx)(j.x, {
          "data-qa": "dashboard-vacancy-status-scheduled",
          typography: "subtitle-1-semibold",
          style: "secondary",
          children: (0, Z.WU)(e[VN.trls.publicationTime], {
            "{manager}": c ? (0, Z.WU)(e[VN.trls.manager], {
              "{managerName}": c.text
            }) : "",
            "{day}": e[VN.trls.weekdays[o.getDay()]],
            "{startHour}": (0, iv.p6)(o, "HH:mm"),
            "{endHour}": (0, iv.p6)((0, BN.Z)(o, 1), "HH:mm"),
            "{gmt}": `+${parseInt(i.gmt.slice(1, 3), 10)}`
          })
        }),
        children: [(0, N.jsx)(j.x, {
          typography: "label-2-regular",
          children: (0, Z.WU)(e[VN.trls.description], {
            "{0}": (0, N.jsx)(j.x, {
              typography: "subtitle-1-semibold",
              Element: "span",
              children: s[0].count
            }),
            "{1}": (0, N.jsx)(j.x, {
              typography: "subtitle-1-semibold",
              Element: "span",
              children: (a = s[0].vacancyProperties) === null || a === undefined || (a = a.calculatedStates) === null || a === undefined || (a = a[d]) === null || a === undefined ? undefined : a.translation
            })
          })
        }), (0, N.jsx)(v.X, {
          default: 32
        }), (0, N.jsxs)("div", {
          className: dN,
          children: [(0, N.jsx)(y.z, {
            Element: u.SPALink,
            to: "/employer/vacancies",
            "data-qa": "dashboard-scheduled-vacancy__employer-vacancies-link",
            style: "accent",
            mode: "secondary",
            size: "medium",
            stretched: m,
            children: e[VN.trls.toMyVacancies]
          }), (0, N.jsx)(dd.V, {
            default: 12
          }), (0, N.jsx)(y.z, {
            Element: u.SPALink,
            to: "/price/publications",
            "data-qa": "dashboard-scheduled-vacancy__price-publications-link",
            style: "accent",
            mode: "secondary",
            size: "medium",
            stretched: m,
            children: e[VN.trls.toBuyServices]
          })]
        })]
      });
    };
    VN.displayName = "components/DashboardVacancy/ScheduledPublication/ScheduledPublicationComponent";
    const DN = (0, f.x)(VN);
    VN.trls = {
      toMyVacancies: "vacancies.groups.myVacancies",
      toBuyServices: "newemployer.dashboard.action.toBuyServices",
      description: "newemployer.dashboard.scheduledPublication.requiredPublications",
      publicationTime: "employer.vacancy.draft.scheduledPublicationTime",
      manager: "employer.vacancy.draft.scheduledPublicationTime.anotherManager",
      weekdays: {
        0: "lastActivity.withinWeek.sunday",
        1: "lastActivity.withinWeek.monday",
        2: "lastActivity.withinWeek.tuesday",
        3: "lastActivity.withinWeek.wednesday",
        4: "lastActivity.withinWeek.thursday",
        5: "lastActivity.withinWeek.friday",
        6: "lastActivity.withinWeek.saturday"
      }
    };
    var FN = a(350575);
    var HN = a.n(FN);
    var qN = a(258843);
    var UN = a.n(qN);
    const XN = "banner--Y3Qp_YmlOQ8M90Nl";
    const zN = "fixed--rgXlnerauwkpGmeG";
    const ON = "background--Gi3xatTWSVE0sMoM";
    const ZN = "text--wZjyyoAAIvHlYaTL";
    const YN = "buttons--dSYM3RP0TgAS5KXW";
    const GN = "close-icon--HXSX_KJapLoetGHt";
    const $N = "index.newEmployer.generateBanner.title1";
    const QN = "index.newEmployer.generateBanner.title2";
    const JN = "index.newEmployer.generateBanner.button";
    const KN = ({
      trls: e
    }) => {
      const {
        isMobile: n
      } = (0, F.G)();
      const a = (0, d.useElementShown)(UN(), {
        elementName: "fast_vacancy_creation_banner"
      });
      const [s, i] = (0, t.useState)(true);
      const [r, o] = (0, t.useReducer)(zx.X, {});
      const l = (0, t.useCallback)(() => {
        o({
          type: Ox.k1,
          payload: {
            modalType: Ox.M0
          }
        });
        HN()({
          buttonName: "fast_vacancy_creation_banner"
        });
      }, []);
      const c = (0, t.useCallback)(() => o({
        type: Ox.et
      }), []);
      if (s) {
        return (0, N.jsxs)("div", {
          className: ge()({
            [zN]: n
          }),
          children: [(0, N.jsx)(Oa(), {
            xs: "4",
            s: "8",
            m: "5",
            l: "5",
            container: !n,
            children: (0, N.jsx)("div", {
              ref: a,
              className: XN,
              children: (0, N.jsxs)(Y.Z, {
                stretched: true,
                padding: 12,
                borderRadius: 24,
                style: n ? "constant" : "special-secondary",
                children: [(0, N.jsx)("div", {
                  className: ZN,
                  children: (0, N.jsx)(j.x, {
                    Element: "span",
                    style: n ? "contrast" : "primary",
                    typography: n ? "subtitle-1-semibold" : "title-5-semibold",
                    children: (0, Z.WU)(e[$N], {
                      "{0}": (0, N.jsx)(j.x, {
                        Element: "span",
                        style: n ? "contrast" : "special",
                        typography: n ? "subtitle-1-semibold" : "title-5-semibold",
                        children: e[QN]
                      })
                    })
                  })
                }), (0, N.jsx)("div", {
                  className: ON
                }), (0, N.jsxs)("div", {
                  className: YN,
                  children: [(0, N.jsx)(y.z, {
                    mode: n ? "secondary" : "primary",
                    size: "medium",
                    style: "constant",
                    stretched: true,
                    "data-qa": "vacancy_generation_banner-button",
                    onClick: l,
                    children: e[JN]
                  }), n && (0, N.jsx)("div", {
                    className: GN,
                    children: (0, N.jsx)(en.Cs7, {
                      initialColor: "contrast",
                      onClick: () => i(false)
                    })
                  })]
                })]
              })
            })
          }), (0, N.jsx)(zx.Z, {
            dispatchModal: o,
            modalData: r,
            handleCloseModal: c
          })]
        });
      } else {
        return null;
      }
    };
    KN.displayName = "DashboardVacancy/VacancyGenerateBanner/index/VacancyGenerateBanner";
    const eE = (0, f.x)(KN);
    const nE = () => {
      m().sendHHEventButtonClick("dashboard_vacancy_create_vacancy");
    };
    const aE = ({
      trls: e,
      employerRegion: n,
      employerRegionResumesCount: a,
      giftsCount: s
    }) => {
      const i = (0, t.useRef)();
      const r = (0, Se.$w)();
      const {
        isXS: o
      } = (0, F.G)();
      (0, t.useEffect)(() => {
        m().sendHHEventElementShown(i.current, {
          name: "dashboard_vacancy_first_state"
        });
      }, [i]);
      return (0, N.jsxs)(oN, {
        name: e[aE.trls.title],
        description: e[aE.trls.description],
        children: [(0, N.jsx)("div", {
          ref: i,
          "data-qa": "dashboard-vacancy-stub",
          children: (0, N.jsxs)("ul", {
            children: [(0, N.jsx)("li", {
              className: uN,
              children: (0, N.jsx)(j.x, {
                Element: "span",
                typography: "label-2-regular",
                children: (0, Z.WU)(e[aE.trls.firstSuggestText], {
                  "{0}": (0, N.jsx)(j.x, {
                    Element: "span",
                    typography: "subtitle-1-semibold",
                    children: e[aE.trls.firstHighlightText]
                  })
                })
              })
            }), (0, N.jsx)("li", {
              className: uN,
              children: (0, N.jsx)(j.x, {
                Element: "span",
                typography: "label-2-regular",
                children: (0, Z.WU)(e[aE.trls.secondSuggestText], {
                  "{0}": (0, N.jsx)(cN, {
                    onClick: () => {
                      m().sendHHEventButtonClick("dashboard_vacancy_vacancy_stub_suggestion_first");
                    },
                    tooltipContent: e[aE.trls.secondSuggestInfoText],
                    "data-qa": "dashboard-vacancy-stub__active-applicants",
                    children: (0, Z.WU)(e[aE.trls.secondSuggestLinkText], {
                      "{0}": (0, Xs.uf)(a, {
                        decimalLength: 0,
                        groupSeparator: er.qD
                      })
                    })
                  }),
                  "{1}": n
                })
              })
            }), !r && s > 0 && (0, N.jsx)("li", {
              className: uN,
              children: (0, N.jsx)(j.x, {
                Element: "span",
                typography: "label-2-regular",
                children: (0, Z.WU)(e[aE.trls.thirdSuggestText], {
                  "{0}": (0, N.jsx)("div", {
                    className: hN,
                    children: (0, N.jsx)(cN, {
                      Element: "div",
                      onClick: () => {
                        m().sendHHEventButtonClick("dashboard_vacancy_vacancy_stub_suggestion_second");
                      },
                      tooltipContent: (0, Z.WU)(e[aE.trls.thirdSuggestInfoText], {
                        "{0}": s
                      }),
                      "data-qa": "dashboard-vacancy-gifts",
                      children: (0, Z.WU)(e[aE.trls.thirdSuggestLinkText], {
                        "{0}": s
                      })
                    })
                  })
                })
              })
            })]
          })
        }), (0, N.jsx)(v.X, {
          default: 24
        }), (0, N.jsx)(y.z, {
          size: "medium",
          style: "accent",
          mode: "primary",
          Element: u.SPALink,
          to: "/employer/vacancy/create",
          onClick: nE,
          "data-qa": "dashboard-vacancy-stub__create-vacancy",
          stretched: o,
          children: e[aE.trls.createVacancy]
        })]
      });
    };
    aE.displayName = "components/DashboardVacancy/VacancyStub/VacancyStubComponent";
    const tE = (0, f.x)(aE);
    aE.trls = {
      title: "newemployer.dashboard.vacancyStub.title",
      description: "newemployer.dashboard.vacancyStub.description",
      firstSuggestText: "newemployer.dashboard.vacancyStub.suggest.1.text",
      firstHighlightText: "newemployer.dashboard.vacancyStub.suggest.1.highlightText",
      secondSuggestText: "newemployer.dashboard.vacancyStub.suggest.2.text",
      secondSuggestLinkText: "newemployer.dashboard.vacancyStub.suggest.2.linkText",
      secondSuggestInfoText: "newemployer.dashboard.vacancyStub.suggest.2.infoText",
      thirdSuggestText: "newemployer.dashboard.vacancyStub.suggest.3.text",
      thirdSuggestLinkText: "newemployer.dashboard.vacancyStub.suggest.3.linkText",
      thirdSuggestInfoText: "newemployer.dashboard.vacancyStub.suggest.3.infoText",
      createVacancy: "newemployer.dashboard.vacancyStub.action.createVacancy"
    };
    const sE = "enable_vacancy_draft_generation";
    const iE = () => {
      const {
        draft: e,
        bill: n,
        giftsCount: a,
        employerRegionTrl: t,
        employerRegionResumesCount: s,
        nextDraftScheduled: i,
        isFreeStandardPlusAvailable: r
      } = (0, _.v)(e => e.newEmployerDashboardVacancy);
      const o = (0, Dl.n)(sE);
      return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(v.X, {
          default: 40
        }), (0, N.jsxs)("div", {
          className: ge()(mN, {
            [pN]: r || o
          }),
          children: [(0, N.jsx)(Oa(), {
            xs: "4",
            s: "8",
            m: "7",
            l: "10",
            container: true,
            children: e && n ? (0, N.jsx)(yN, {
              vacancy: e,
              bill: n,
              giftsCount: a
            }) : e ? (0, N.jsx)(WN, {
              vacancy: e
            }) : i ? (0, N.jsx)(DN, {
              data: i
            }) : (0, N.jsx)(tE, {
              giftsCount: a,
              employerRegion: t,
              employerRegionResumesCount: s
            })
          }), r ? (0, N.jsx)(NN, {}) : o ? (0, N.jsx)(eE, {}) : null]
        }), (0, N.jsx)(aN, {})]
      });
    };
    iE.displayName = "IndexPageNewEmployer/components/DashboardVacancy/DashboardVacancy";
    var rE = a(621566);
    const oE = "wrapper--ViupQ4kI26IwnGKx";
    const lE = "support--SUnPjLa5voIxcetK";
    const cE = () => {
      const {
        category: e,
        state: n
      } = (0, _.v)(({
        employerStatus: e
      }) => e);
      const a = n === Fw.PC.New;
      const s = n === Fw.PC.NotVerified;
      const i = a || s;
      (0, t.useEffect)(() => {
        Dw()({
          hhtmSource: "main_new_employer"
        });
      }, []);
      return (0, N.jsx)(za.ColumnsWrapper, {
        children: (0, N.jsx)("div", {
          className: oE,
          children: (0, N.jsxs)(Oa(), {
            xs: "4",
            s: "8",
            m: "12",
            l: "16",
            children: [(0, N.jsx)(iE, {}), (0, N.jsx)(v.X, {
              default: 40
            }), (0, N.jsxs)("div", {
              className: lE,
              children: [(0, N.jsx)(Oa(), {
                xs: "4",
                s: "8",
                m: "4",
                l: "4",
                container: true,
                children: (0, N.jsx)(Jw, {})
              }), i && (0, N.jsx)(Oa(), {
                xs: "4",
                s: "8",
                m: "4",
                l: "4",
                container: true,
                children: (0, N.jsx)(Ow, {
                  companyCategory: e
                })
              }), (0, N.jsx)(Oa(), {
                xs: "4",
                s: "8",
                m: "4",
                l: "4",
                container: true,
                children: (0, N.jsx)(rE.k, {})
              })]
            }), (0, N.jsx)(v.X, {
              default: 72
            })]
          })
        })
      });
    };
    cE.displayName = "components/IndexPageNewEmployer/index/IndexNewEmployer";
    const dE = cE;
    var mE = a(680920);
    var pE = a.n(mE);
    var uE = a(731152);
    var hE = a.n(uE);
    var xE = a(587924);
    var yE = a.n(xE);
    var gE = a(904330);
    var vE = a.n(gE);
    const bE = "container--KeYKyh1uzBMleqpr";
    const jE = "overlay--rTkWqsdsP14vXqvu";
    const fE = "wrapper--QfziXfuwsLUEEYbv";
    const _E = "close--Ws2bzc3mW6QgPZ2a";
    const SE = "content--Aajrjyz35DcestUp";
    const CE = "logo--U4OlcFBHHbEkRkJo";
    const kE = "title--wfJ21XPFtfka9fhm";
    const wE = "main--KyEJGv4clGoRaIoT";
    const NE = "mobileAppPromo.title";
    const EE = "mobileAppPromo.install";
    const AE = ({
      trls: e
    }) => {
      const n = (0, _.v)(e => e.mobileAppPromotionVisible);
      const a = va()(ga.Breakpoint.M) === ga.Breakpoint.XS;
      const [s, i] = (0, t.useState)(n);
      const r = (0, _.v)(e => e.analyticsParams.hhtmSource);
      const o = (0, Ai.j)({
        from: "start_banner"
      });
      const l = s && a && !!o;
      (0, t.useEffect)(() => {
        if (l) {
          yE()({
            hhtmSource: "app_install_banner",
            hhtmFrom: r
          });
          vE().disableScroll();
          return () => {
            vE().enableScroll();
          };
        }
      }, [r, l]);
      const c = (0, t.useCallback)(e => () => {
        i(false);
        pE()({
          type: e,
          hhtmFrom: r
        });
      }, [r]);
      const d = (0, t.useCallback)(() => {
        i(false);
        hE()({
          hhtmFrom: r
        });
      }, [r]);
      if (l) {
        return (0, N.jsxs)("div", {
          className: bE,
          children: [(0, N.jsx)("div", {
            className: jE,
            onClick: c("overlay")
          }), (0, N.jsxs)("div", {
            className: fE,
            children: [(0, N.jsx)("div", {
              className: _E,
              children: (0, N.jsx)(E_.I, {
                children: (0, N.jsx)(wk.Z, {
                  onClick: c("close"),
                  children: (0, N.jsx)(Nk.Z, {
                    children: (0, N.jsx)(en.Cs7, {
                      initialColor: "secondary",
                      highlightedColor: "primary"
                    })
                  })
                })
              })
            }), (0, N.jsxs)("div", {
              className: SE,
              children: [(0, N.jsx)("div", {
                className: CE
              }), (0, N.jsx)("div", {
                className: kE,
                children: (0, N.jsx)(oo.H1Section, {
                  Element: "h3",
                  children: e[NE]
                })
              }), (0, N.jsx)("div", {
                className: wE,
                children: (0, N.jsx)(Ct(), {
                  to: o,
                  target: "_blank",
                  kind: St.ButtonKind.Primary,
                  Element: u.SPALink,
                  onClick: d,
                  children: e[EE]
                })
              })]
            })]
          })]
        });
      } else {
        return null;
      }
    };
    AE.displayName = "components/MobileAppPromotion/index/MobileAppPromotion";
    const RE = (0, f.x)(AE);
    var PE = a(867728);
    const TE = "google-site-verification-2";
    const IE = "wmail-verification";
    const LE = "yandex-verification";
    const WE = "vk-verification";
    const BE = ({
      trls: e
    }) => {
      const n = (0, _.v)(({
        isNewEmployer: e
      }) => e);
      const {
        title: a,
        hreflangItems: s,
        verifications: d
      } = (0, _.v)(e => e.pageMetaData);
      const m = (0, _.v)(e => e.additionalCheckFirstView);
      const p = (0, _.v)(e => e.isShowPhishingModal);
      const u = (0, _.v)(e => e.userType);
      const h = (0, Se.x3)();
      const x = (0, _.v)(({
        isOldEmployerWithoutServicesModal: e
      }) => e);
      const y = (0, _.v)(({
        isOldEmployerFreeProlongationModal: e
      }) => e);
      const g = (0, _.v)(({
        churnEmployer: e
      }) => e.isChurn);
      const v = (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(PE.V1, {
          children: a
        }), (0, N.jsx)(PE.Vj, {
          property: "og:title",
          content: a
        })]
      });
      (0, t.useLayoutEffect)(() => {
        if (u !== re.FW.Employer) {
          (0, l.$)({
            title: a
          });
        }
      }, [a, u]);
      if (u === re.FW.Applicant) {
        return (0, N.jsxs)(r.u, {
          children: [a && (0, N.jsx)(PE.yG, {
            children: v
          }), (0, N.jsx)(Ru, {}), (0, N.jsx)(RE, {})]
        });
      } else if (u === re.FW.Employer) {
        return (0, N.jsx)(t.StrictMode, {
          children: (0, N.jsxs)(o.Xg, {
            layout: o.Tp,
            title: a,
            children: [!p && m && (0, N.jsx)(c._, {}), n && (0, N.jsx)(dE, {}), !n && !g && (0, N.jsx)(fw, {}), !n && g && (0, N.jsx)(wv, {}), !p && !m && (x || y) && (0, N.jsx)(Mw, {}), p && (0, N.jsx)(W, {})]
          })
        });
      } else {
        return (0, N.jsxs)(r.u, {
          children: [(0, N.jsxs)(PE.yG, {
            children: [(0, N.jsx)(i.Meta, {
              name: "google-site-verification",
              content: e[TE]
            }), (0, N.jsx)(i.Meta, {
              name: "yandex-verification",
              content: e[LE]
            }), d == null ? undefined : d.map(e => (0, N.jsx)(i.Meta, {
              name: e.name,
              content: e.content
            }, e.name + e.content)), (0, N.jsx)(i.Meta, {
              name: "wmail-verification",
              content: e[IE]
            }), (0, N.jsx)(i.Meta, {
              name: "vk-verification",
              content: e[WE]
            }), h && (0, N.jsx)(i.Meta, {
              name: "facebook-domain-verification",
              content: "pvlnrerfi2u9wypg5ezr847mleffhi"
            }), a && v, s != null && !!s.length && (0, N.jsx)(PE.aD, {
              content: s
            })]
          }), (0, N.jsx)(kl, {})]
        });
      }
    };
    BE.displayName = "pages/IndexPage/IndexPage.route/IndexPageRoute";
    const ME = (0, f.x)(BE);
  },
  738379: function (e, n, a) {
    a.d(n, {
      i: () => t
    });
    let t = function (e) {
      e.PublicationsWidget = "publications-widget";
      e.ResumeAccessWidget = "resume-access-widget";
      return e;
    }({});
  },
  485307: function (e, n, a) {
    a.d(n, {
      E: () => i,
      U: () => s
    });
    var t = a(481277);
    const s = e => !!e.warning && e.warning === t.F.ExpiringVerySoon;
    const i = e => {
      var n;
      var a;
      return (e == null || (n = e.expirationTime) === null || n === undefined ? undefined : n.date) || (e == null || (a = e.expiredInfos) === null || a === undefined || (a = a[0]) === null || a === undefined ? undefined : a.date);
    };
  },
  776319: function (e, n, a) {
    a.d(n, {
      f: () => t
    });
    const t = (e, n) => e && e.length > 0 ? e.join(", ") : n;
  },
  213889: function (e, n, a) {
    a.d(n, {
      d: () => s
    });
    var t = a(197252);
    const s = e => e === parseInt(t.MQ.Russia, 10);
  },
  181759: function (e, n, a) {
    a.d(n, {
      V: () => t
    });
    const t = e => {
      var n;
      var a;
      return [(n = e.lastName) === null || n === undefined || (n = n[0]) === null || n === undefined ? undefined : n.string, (a = e.firstName) === null || a === undefined || (a = a[0]) === null || a === undefined ? undefined : a.string].filter(Boolean).join(" ");
    };
  },
  133795: function (e, n, a) {
    a.d(n, {
      S: () => t,
      s: () => s
    });
    const t = a(642053).Kz.ExpIndustry;
    const s = e => {
      const n = new URLSearchParams(e);
      n.delete(t);
      return n.toString();
    };
  }
}]); //# sourceMappingURL=IndexPage-route.bde28557141baf1b.js.map
//# debugId=dc825ed4-a633-4f6e-aa84-dcbcb2ba511c