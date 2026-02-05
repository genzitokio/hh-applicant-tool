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
      e._sentryDebugIds[t] = "a0c0bc46-b9c7-453c-9bd6-db17fbf9eb28";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-a0c0bc46-b9c7-453c-9bd6-db17fbf9eb28";
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
          for (var n in s) {
            if (s.hasOwnProperty(n)) {
              e[n] = s[n];
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
  ["9795"],
  {
    22032: function (e, t, s) {
      s.d(t, {
        M: () => o,
      });
      var n = s(255717);
      const o = (e) =>
        n._i.get("/shards/get_area_districts", {
          params: {
            area: e,
            filterMicro: true,
          },
        });
    },
    486039: function (e, t, s) {
      s.d(t, {
        W: () => r,
        p: () => o,
      });
      var n = s(394280);
      const o = (0, n.createContext)(null);
      const r = () => {
        const e = (0, n.useContext)(o);
        if (!e) {
          throw new Error(
            "useAutoresponseContext must be used inside of an Autoresponse component",
          );
        }
        return e;
      };
    },
    753921: function (e, t, s) {
      s.d(t, {
        W: () => os,
      });
      var n = s(394280);
      var o = s(940389);
      var r = s(791256);
      var a = s(867111);
      var l = s.n(a);
      var i = s(137833);
      var u = s.n(i);
      var d = s(890525);
      var c = s.n(d);
      var p = s(382896);
      var h = s.n(p);
      var m = s(111573);
      var f = s.n(m);
      var b = s(379184);
      var y = s.n(b);
      var x = s(545435);
      var v = s.n(x);
      var S = s(234811);
      var g = s.n(S);
      var j = s(630549);
      var _ = s(859716);
      var C = s(491606);
      var k = s(640569);
      var w = s(36074);
      var R = s(922366);
      var A = s(842953);
      var I = s(105160);
      var F = s(580356);
      var T = s(118450);
      var N = s(674070);
      var E = s(8131);
      var M = s(166122);
      var D = s(594948);
      var L = s(439624);
      var H = s(122860);
      var O = s(106428);
      var P = s(382762);
      var z = s(205838);
      var W = s(330080);
      var X = s(853848);
      var Z = s.n(X);
      var B = s(709035);
      var Y = s.n(B);
      var V = s(454386);
      var Q = s(228709);
      var U = s(559123);
      var q = s(914357);
      var G = s(490948);
      var J = s(136361);
      var $ = s(626462);
      var K = s(15791);
      var ee = s(997543);
      var te = s(22032);
      var se = s(335326);
      var ne = s.n(se);
      var oe = s(599998);
      const re = "container--uCagrjSLf68Yae1i";
      const ae = "cell--FZM9999oe6IKkQSa";
      var le = s(343856);
      const ie = "autoresponse.statistics.title";
      const ue = "autoresponse.statistics.label.found";
      const de = "autoresponse.statistics.label.created";
      const ce = "autoresponse.statistics.label.invited";
      const pe = ({ trls: e }) => {
        const t = (0, D.v)((e) => e.applicantAutoresponseStatistics);
        const s = (0, D.v)((e) => e.applicantAutoresponseRules[0]);
        return (0, le.jsxs)("div", {
          children: [
            (0, le.jsx)(I.x, {
              typography: "label-2-regular",
              style: "secondary",
              children: e[ie],
            }),
            (0, le.jsx)(R.X, {
              default: 12,
            }),
            (0, le.jsx)(J.Z, {
              stretched: true,
              padding: 16,
              borderRadius: 16,
              borderWidth: "default",
              children: (0, le.jsxs)("div", {
                className: re,
                children: [
                  (0, le.jsx)("div", {
                    className: ae,
                    children: (0, le.jsxs)(C.SPALink, {
                      to: "/applicant/negotiations",
                      onClick: () =>
                        ne()({
                          resumeId: s.resumeHash,
                          buttonName: "resume_vacancies",
                          autoResponseId: s.autoResponseId.toString(),
                        }),
                      children: [
                        (0, le.jsx)(I.x, {
                          typography: "label-4-regular",
                          style: "secondary",
                          children: e[ue],
                        }),
                        (0, le.jsx)(R.X, {
                          default: 4,
                        }),
                        (0, le.jsx)(I.x, {
                          typography: "title-5-semibold",
                          style: "primary",
                          children: t.vacancyFromSearchCount,
                        }),
                      ],
                    }),
                  }),
                  (0, le.jsx)("div", {
                    className: ae,
                    children: (0, le.jsxs)(C.SPALink, {
                      to: "/applicant/negotiations",
                      onClick: () =>
                        ne()({
                          resumeId: s.resumeHash,
                          buttonName: "resume_responses",
                          autoResponseId: s.autoResponseId.toString(),
                        }),
                      children: [
                        (0, le.jsx)(I.x, {
                          typography: "label-4-regular",
                          style: "secondary",
                          children: e[de],
                        }),
                        (0, le.jsx)(R.X, {
                          default: 4,
                        }),
                        (0, le.jsx)(I.x, {
                          typography: "title-5-semibold",
                          style: "primary",
                          children: t.createdTopicCount,
                        }),
                      ],
                    }),
                  }),
                  (0, le.jsx)("div", {
                    className: ae,
                    children: (0, le.jsxs)(C.SPALink, {
                      to: "/applicant/negotiations",
                      onClick: () =>
                        ne()({
                          resumeId: s.resumeHash,
                          buttonName: "resume_invitations",
                          autoResponseId: s.autoResponseId.toString(),
                        }),
                      children: [
                        (0, le.jsx)(I.x, {
                          typography: "label-4-regular",
                          style: "secondary",
                          children: e[ce],
                        }),
                        (0, le.jsx)(R.X, {
                          default: 4,
                        }),
                        (0, le.jsx)(I.x, {
                          typography: "title-5-semibold",
                          style: "primary",
                          children: t.invitationTopicCount,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      pe.displayName = "Autoresponse/Statistic/index/StatisticsComponent";
      const he = (0, oe.x)(pe);
      var me = s(486039);
      var fe = s(416883);
      var be = s(96168);
      var ye = s(122060);
      const xe = ({
        rule: e,
        selectedResume: t,
        isLoading: s,
        isSelectedResumeHidden: n,
        trls: o,
        onClose: r,
        onTurnOff: a,
        onTurnOn: l,
      }) =>
        (0, le.jsx)(ye.o, {
          type: "auto",
          padding: 24,
          showDivider: false,
          primaryActions:
            e.enabled &&
            e.resumeHash === (t == null ? undefined : t._attributes.hash)
              ? (0, le.jsx)(T.z, {
                  mode: "primary",
                  stretched: true,
                  style: "negative",
                  onClick: a,
                  loading: s,
                  children: o["autoresponse.filters.button.turn.off"],
                })
              : (0, le.jsx)(T.z, {
                  mode: "primary",
                  stretched: true,
                  style: "accent",
                  onClick: l,
                  disabled: n,
                  loading: s,
                  children: o["autoresponse.filters.button.turn.on"],
                }),
          secondaryActions: (0, le.jsx)(T.z, {
            mode: "secondary",
            stretched: true,
            style: "accent",
            onClick: r,
            children: o["autoresponse.filters.button.cancel"],
          }),
        });
      xe.displayName =
        "AutoresponseSettings/DesktopFooter/index/DesktopFooterComponent";
      const ve = (0, oe.x)(xe);
      var Se = s(272713);
      var ge = s.n(Se);
      var je = s(706010);
      var _e = s(441226);
      var Ce = s(325423);
      const ke = "autoresponse.filters.action.bar.apply";
      const we = "autoresponse.filters.action.bar.back";
      const Re = "autoresponse.filters.action.bar.clear";
      const Ae = ({ trls: e, onApply: t, onBack: s, onClear: n }) =>
        (0, le.jsx)(ye.o, {
          type: "auto",
          padding: 24,
          showDivider: false,
          primaryActions: (0, le.jsxs)(le.Fragment, {
            children: [
              (0, le.jsx)(T.z, {
                mode: "primary",
                style: "accent",
                onClick: t,
                children: e[ke],
              }),
              (0, le.jsx)(T.z, {
                mode: "secondary",
                style: "accent",
                onClick: s,
                children: e[we],
              }),
            ],
          }),
          secondaryActions: (0, le.jsx)(le.Fragment, {
            children: (0, le.jsx)(T.z, {
              mode: "secondary",
              style: "accent",
              onClick: n,
              children: e[Re],
            }),
          }),
        });
      Ae.displayName = "Filters/ActionBar/index/ActionBarComponent";
      const Ie = (0, oe.x)(Ae);
      var Fe = s(663234);
      const Te = "container--C4m5PdwdrKU301Oi";
      const Ne = "tree--NpNh9egIOgr7Hg9b";
      const Ee = "autoresponse.filters.district.title";
      const Me = "autoresponse.filters.industry.select.all";
      const De = {
        applyMobile: "autoresponse.filters.action.bar.apply.mobile",
        clearMobile: "autoresponse.filters.action.bar.clear.mobile",
      };
      const Le = ({
        trls: e,
        onApply: t,
        setHeader: s,
        setFooter: o,
        onClose: r,
        initialValues: a,
        area: l,
      }) => {
        const i = (0, n.useRef)(null);
        const u = (0, n.useRef)(null);
        const [d, c] = (0, n.useState)(a);
        const [p, h] = (0, n.useState)(true);
        const m = (0, D.v)((e) => e.citiesDistricts);
        const f = (0, n.useMemo)(
          () =>
            m[l].map((e) => ({
              id: e.id.toString(),
              text: e.name,
              items: [],
            })),
          [l, m],
        );
        const b = (0, n.useMemo)(() => (0, je.In)(f), [f]);
        const { isMobile: y } = (0, w.G)();
        const x = (0, n.useCallback)(() => {
          t(d.map((e) => Number(e)));
        }, [d, t]);
        const v = (0, n.useCallback)(() => {
          c([]);
          r();
        }, [r]);
        (0, n.useEffect)(() => {
          if (!y) {
            s(e[Ee]);
            o(
              (0, le.jsx)(Ie, {
                onApply: x,
                onBack: r,
                onClear: v,
              }),
            );
          }
        }, [x, v, y, r, o, s, e]);
        (0, n.useLayoutEffect)(() => {
          if (u.current) {
            const e = u.current.getBoundingClientRect().height;
            u.current.style.height = `${e}px`;
            h(false);
          }
        }, []);
        return (0, le.jsx)("div", {
          className: Te,
          children: (0, le.jsx)(Fe.a, {
            collapseToParentId: true,
            collection: b,
            value: d,
            onChange: c,
            ref: i,
            getSelectAllParentTrl: () => e[Me],
            children: ({ renderTreeSelector: t, renderInput: s }) =>
              y
                ? (0, le.jsx)(V.R, {
                    visible: true,
                    onClose: r,
                    header: (0, le.jsx)(Q.v, {
                      title: e[Ee],
                      right: (0, le.jsx)(N.Cs7, {
                        onClick: r,
                      }),
                      left: (0, le.jsx)(N.ee, {
                        onClick: () => {
                          var e;
                          if ((e = i.current) === null || e === undefined) {
                            return undefined;
                          } else {
                            return e.back();
                          }
                        },
                      }),
                      options: s(),
                    }),
                    height: "full-screen",
                    footer: (0, le.jsxs)(_e.W, {
                      children: [
                        (0, le.jsx)(T.z, {
                          mode: "primary",
                          stretched: true,
                          style: "accent",
                          onClick: x,
                          children: e[De.applyMobile],
                        }),
                        (0, le.jsx)(T.z, {
                          mode: "secondary",
                          stretched: true,
                          style: "accent",
                          onClick: v,
                          children: e[De.clearMobile],
                        }),
                      ],
                    }),
                    children: t(),
                  })
                : (0, le.jsxs)(le.Fragment, {
                    children: [
                      s(),
                      (0, le.jsx)(R.X, {
                        default: 24,
                      }),
                      (0, le.jsx)("div", {
                        ref: u,
                        className: Ne,
                        children: !p && t(),
                      }),
                    ],
                  }),
          }),
        });
      };
      Le.displayName =
        "Filters/DistrictSelector/index/DistrictSelectorComponent";
      const He = (0, oe.x)(Le);
      var Oe = s(566456);
      var Pe = s(482336);
      var ze = s(642053);
      const We = "autoresponse.filters.experience.title";
      const Xe = {
        noExperience: "autoresponse.filters.experience.noExperience",
        between1And3: "autoresponse.filters.experience.between1And3",
        between3And6: "autoresponse.filters.experience.between3And6",
        moreThan6: "autoresponse.filters.experience.moreThan6",
      };
      const Ze = [
        {
          title: Xe.noExperience,
          value: ze.SE.NoExperience,
        },
        {
          title: Xe.between1And3,
          value: ze.SE.Between1And3,
        },
        {
          title: Xe.between3And6,
          value: ze.SE.Between3And6,
        },
        {
          title: Xe.moreThan6,
          value: ze.SE.MoreThan6,
        },
      ];
      const Be = ({ trls: e, onChange: t, value: s }) =>
        (0, le.jsxs)("div", {
          children: [
            (0, le.jsx)(I.x, {
              typography: "label-2-regular",
              style: "secondary",
              children: e[We],
            }),
            (0, le.jsx)(R.X, {
              default: 12,
            }),
            (0, le.jsx)(Oe.T, {
              children: Ze.map((n) =>
                (0, le.jsx)(
                  Pe.q,
                  {
                    value: n.value,
                    checked: s === n.value,
                    type: "radio",
                    onChange: () => {
                      t(n.value);
                    },
                    children: e[n.title],
                  },
                  n.value,
                ),
              ),
            }),
          ],
        });
      Be.displayName =
        "Filters/ExperienceSelector/index/ExperienceSelectorComponent";
      const Ye = (0, oe.x)(Be);
      const Ve = "container--ojv4yu92QdszqHc5";
      const Qe = "tree--pD6LjRa8AjI3N_EA";
      const Ue = "autoresponse.filters.industry.title";
      const qe = "autoresponse.filters.industry.select.all";
      const Ge = {
        applyMobile: "autoresponse.filters.action.bar.apply.mobile",
        clearMobile: "autoresponse.filters.action.bar.clear.mobile",
      };
      const Je = ({
        trls: e,
        onApply: t,
        setHeader: s,
        setFooter: o,
        onClose: r,
        initialValues: a,
      }) => {
        const l = (0, D.v)((e) => e.industriesTree);
        const i = (0, n.useRef)(null);
        const u = (0, n.useRef)(null);
        const [d, c] = (0, n.useState)(a);
        const [p, h] = (0, n.useState)(true);
        const m = (0, n.useMemo)(() => (0, je.In)(l), [l]);
        const { isMobile: f } = (0, w.G)();
        const b = (0, n.useCallback)(() => {
          t(d);
        }, [d, t]);
        const y = (0, n.useCallback)(() => {
          c([]);
          r();
        }, [r]);
        const x = (0, n.useCallback)(() => e[qe], [e]);
        (0, n.useEffect)(() => {
          if (!f) {
            s(e[Ue]);
            o(
              (0, le.jsx)(Ie, {
                onApply: b,
                onBack: r,
                onClear: y,
              }),
            );
          }
        }, [b, y, f, r, o, s, e]);
        (0, n.useLayoutEffect)(() => {
          if (u.current) {
            const e = u.current.getBoundingClientRect().height;
            u.current.style.height = `${e}px`;
            h(false);
          }
        }, []);
        return (0, le.jsx)("div", {
          className: Ve,
          children: (0, le.jsx)(Fe.a, {
            collapseToParentId: true,
            collection: m,
            value: d,
            onChange: c,
            ref: i,
            getSelectAllParentTrl: x,
            children: ({ renderTreeSelector: t, renderInput: s }) =>
              f
                ? (0, le.jsx)(V.R, {
                    visible: true,
                    onClose: r,
                    header: (0, le.jsx)(Q.v, {
                      title: e[Ue],
                      right: (0, le.jsx)(N.Cs7, {
                        onClick: r,
                      }),
                      left: (0, le.jsx)(N.ee, {
                        onClick: () => {
                          var e;
                          if ((e = i.current) === null || e === undefined) {
                            return undefined;
                          } else {
                            return e.back();
                          }
                        },
                      }),
                      options: s(),
                    }),
                    height: "full-screen",
                    footer: (0, le.jsxs)(_e.W, {
                      children: [
                        (0, le.jsx)(T.z, {
                          mode: "primary",
                          stretched: true,
                          style: "accent",
                          onClick: b,
                          children: e[Ge.applyMobile],
                        }),
                        (0, le.jsx)(T.z, {
                          mode: "secondary",
                          stretched: true,
                          style: "accent",
                          onClick: y,
                          children: e[Ge.clearMobile],
                        }),
                      ],
                    }),
                    children: t(),
                  })
                : (0, le.jsxs)(le.Fragment, {
                    children: [
                      s(),
                      (0, le.jsx)(R.X, {
                        default: 24,
                      }),
                      (0, le.jsx)("div", {
                        ref: u,
                        className: Qe,
                        children: !p && t(),
                      }),
                    ],
                  }),
          }),
        });
      };
      Je.displayName =
        "Filters/IndustrySelector/index/IndustrySelectorComponent";
      const $e = (0, oe.x)(Je);
      var Ke = s(735927);
      var et = s(368100);
      var tt = s(811283);
      const st = "autoresponse.filters.withSalary.title.short";
      const nt = "autoresponse.filters.withSalary.placeholder";
      const ot = "autoresponse.filters.withSalary.exist";
      const rt = ({
        trls: e,
        onlyWithSalary: t,
        onChangeValue: s,
        onChangeCurrency: o,
        onChangeWithSalary: r,
        salary: a,
      }) => {
        var l;
        const i = (0, D.v)((e) => e.currencies);
        const u = (0, n.useMemo)(() => i.list.filter((e) => e.site), [i.list]);
        return (0, le.jsxs)("div", {
          children: [
            (0, le.jsx)(I.x, {
              typography: "label-2-regular",
              style: "secondary",
              children: e[st],
            }),
            (0, le.jsx)(R.X, {
              default: 12,
            }),
            (0, le.jsx)(Ke.Y, {
              value:
                a != null && a.from && (a == null ? undefined : a.from) > 0
                  ? a == null || (l = a.from) === null || l === undefined
                    ? undefined
                    : l.toString()
                  : "",
              onChange: (e) => {
                s(parseInt(e, 10));
              },
              allowNegative: false,
              decimalMark: [],
              decimalLength: 0,
              placeholder: e[nt],
              size: "large",
              postfix: (0, le.jsx)(tt.Z, {
                value: a == null ? undefined : a.currencyCode,
              }),
              elevatePlaceholder: true,
            }),
            (0, le.jsx)(R.X, {
              default: 12,
            }),
            (0, le.jsx)(Oe.T, {
              children: u.map(({ code: e }) =>
                (0, le.jsx)(
                  Pe.q,
                  {
                    value: e,
                    checked: e === (a == null ? undefined : a.currencyCode),
                    type: "radio",
                    onChange: () => {
                      o(e);
                    },
                    children: (0, le.jsx)(tt.Z, {
                      value: e,
                      fullLabel: true,
                      capitalizeFirstLetter: true,
                    }),
                  },
                  e,
                ),
              ),
            }),
            (0, le.jsx)(R.X, {
              default: 12,
            }),
            (0, le.jsx)($.b, {
              vertPadding: true,
              right: (0, le.jsx)(et.r, {
                checked: t,
                onClick: () => {
                  r(!t);
                },
              }),
              children: (0, le.jsx)(K.j, {
                children: e[ot],
              }),
            }),
          ],
        });
      };
      rt.displayName = "Filters/SalarySelector/index/SalarySelectorComponent";
      const at = (0, oe.x)(rt);
      const lt = "container--JMWJNrtPnHUdiZup";
      const it = "autoresponse.filters.common.title";
      const ut = "autoresponse.filters.industry.title";
      const dt = "autoresponse.filters.district.title";
      const ct = "autoresponse.filters.region.note";
      const pt = "autoresponse.filters.not.selected";
      const ht = "autoresponse.filters.and.more";
      const mt = {
        apply: "autoresponse.filters.action.bar.apply",
      };
      const ft = ({
        trls: e,
        setFooter: t,
        setFooterMobile: s,
        setHeader: r,
        onClose: a,
        area: l,
        resume: i,
      }) => {
        var c;
        var p;
        var f;
        var b;
        var x;
        var v;
        var S;
        var j;
        var k;
        const [A, I] = (0, n.useState)(false);
        const [F, E] = (0, n.useState)(false);
        const M = (0, D.v)((e) => e.applicantAutoresponseRules[0]);
        const L = M.filters;
        const H = M.autoResponseId;
        const O = (0, D.v)((e) => e.industriesTree);
        const z = (0, D.v)((e) => e.citiesDistricts);
        const W = (0, D.v)((e) => e.currencies);
        const X = (0, n.useMemo)(() => (0, je.In)(O), [O]);
        const Z =
          (L == null || (c = L.salary) === null || c === undefined
            ? undefined
            : c.currencyCode) ??
          ((p = i.salary) === null ||
          p === undefined ||
          (p = p[0]) === null ||
          p === undefined
            ? undefined
            : p.currency) ??
          W.default;
        const B =
          (L == null || (f = L.salary) === null || f === undefined
            ? undefined
            : f.from) ??
          ((b = i.salary) === null ||
          b === undefined ||
          (b = b[0]) === null ||
          b === undefined
            ? undefined
            : b.amount) ??
          0;
        const [Y, V] = (0, n.useState)({
          ...(L ?? P.jW),
          salary: {
            ...((L == null ? undefined : L.salary) ?? P.jW.salary),
            currencyCode: Z,
            from: B,
          },
        });
        const Q = (0, n.useRef)(null);
        const { updateAutoresponse: U } = (0, me.W)();
        const { isMobile: q } = (0, w.G)();
        const G = (0, n.useMemo)(() => {
          const e = [];
          var t;
          if (Y.industries) {
            if ((t = Y.industries) !== null && t !== undefined) {
              t.forEach((t) => {
                if (X.hasChildren(t)) {
                  X.getChildren(t).forEach((t) => e.push(t.text));
                } else {
                  e.push(X.getModel(t)?.text);
                }
              });
            }
          }
          return e;
        }, [X, Y.industries]);
        const ee = (0, n.useMemo)(
          () =>
            l && z[l]
              ? z[l]
                  .filter((e) => {
                    var t;
                    if ((t = Y.districts) === null || t === undefined) {
                      return undefined;
                    } else {
                      return t.includes(e.id);
                    }
                  })
                  .map((e) => e.name)
              : [],
          [l, z, Y.districts],
        );
        const te = A || F;
        const se = (0, o.useDispatch)();
        const ne = (0, n.useCallback)(async () => {
          var e;
          let t;
          se(
            (0, P.FH)({
              filters: Y,
              autoResponseId: H,
            }),
          );
          if (H) {
            await U({
              resume: undefined,
              enabled: undefined,
              filters: Y,
            }).catch((e) => (t = e));
          }
          ge()({
            filterJson: JSON.stringify(Y),
            autoResponseStatus: H
              ? "auto_response_" + (M.enabled ? "on" : "off")
              : "no_auto_response",
            ...(H && {
              autoResponseId: H.toString(),
            }),
            ...(t && {
              errors:
                (e = t.response) !== null && e !== undefined && e.data
                  ? JSON.stringify(t.response.data)
                  : "NoInternetConnection",
            }),
          });
          a();
        }, [H, se, Y, a, U, M.enabled]);
        const oe = (0, n.useCallback)(() => {
          const e = {
            ...P.jW,
            salary: {
              ...P.jW.salary,
              currencyCode: W.default,
            },
          };
          se(
            (0, P.FH)({
              filters: e,
              autoResponseId: H,
            }),
          );
          V(e);
        }, [H, W.default, se]);
        const re = (0, n.useCallback)(() => {
          r(e[it]);
          t(
            (0, le.jsx)(Ie, {
              onApply: ne,
              onBack: a,
              onClear: oe,
            }),
          );
        }, [ne, oe, a, t, r, e]);
        (0, n.useEffect)(() => {
          if (!te) {
            re();
            s(
              (0, le.jsx)(_e.W, {
                children: (0, le.jsx)(T.z, {
                  mode: "primary",
                  stretched: true,
                  style: "accent",
                  onClick: ne,
                  children: e[mt.apply],
                }),
              }),
            );
          }
        }, [te, re, s, e, ne]);
        return (0, le.jsxs)("div", {
          className: lt,
          ref: Q,
          children: [
            (!te || q) &&
              (0, le.jsxs)("div", {
                children: [
                  (0, le.jsx)(J.Z, {
                    style: "secondary",
                    borderWidth: "none",
                    padding: 16,
                    borderRadius: 16,
                    stretched: true,
                    children: e[ct],
                  }),
                  (0, le.jsx)(R.X, {
                    default: 24,
                  }),
                  (0, le.jsx)(at, {
                    onChangeValue: (e) => {
                      V({
                        ...Y,
                        salary: {
                          ...Y.salary,
                          from: e,
                        },
                      });
                    },
                    onChangeCurrency: (e) => {
                      V({
                        ...Y,
                        salary: {
                          ...Y.salary,
                          currencyCode: e,
                        },
                      });
                    },
                    onChangeWithSalary: () => {
                      V({
                        ...Y,
                        onlyWithSalary: !Y.onlyWithSalary,
                      });
                    },
                    salary: Y.salary,
                    onlyWithSalary: Y.onlyWithSalary,
                  }),
                  (0, le.jsx)(R.X, {
                    default: 24,
                  }),
                  (0, le.jsx)(J.Z, {
                    borderStyle: "neutral",
                    borderWidth: "default",
                    padding: 16,
                    borderRadius: 16,
                    stretched: true,
                    children: (0, le.jsxs)($.b, {
                      right: (0, le.jsx)(N.a2Q, {}),
                      onClick: () => I(true),
                      children: [
                        (0, le.jsx)(K.j, {
                          children: e[ut],
                        }),
                        (x = Y.industries) !== null &&
                        x !== undefined &&
                        x.length
                          ? (0, le.jsxs)(K.j, {
                              type: "subtitle",
                              children: [
                                G[0],
                                G.length > 1 &&
                                  (0, le.jsxs)(le.Fragment, {
                                    children: [" ", e[ht], Ce.qD, G.length - 1],
                                  }),
                              ],
                            })
                          : (0, le.jsx)(K.j, {
                              type: "subtitle",
                              children: e[pt],
                            }),
                      ],
                    }),
                  }),
                  (0, le.jsx)(R.X, {
                    default: 24,
                  }),
                  l &&
                    (v = z[l]) !== null &&
                    v !== undefined &&
                    !!v.length &&
                    (0, le.jsx)(J.Z, {
                      borderStyle: "neutral",
                      borderWidth: "default",
                      padding: 16,
                      borderRadius: 16,
                      stretched: true,
                      children: (0, le.jsxs)($.b, {
                        right: (0, le.jsx)(N.a2Q, {}),
                        onClick: () => E(true),
                        children: [
                          (0, le.jsx)(K.j, {
                            children: e[dt],
                          }),
                          (S = Y.districts) !== null &&
                          S !== undefined &&
                          S.length
                            ? (0, le.jsxs)(K.j, {
                                type: "subtitle",
                                children: [
                                  ee[0],
                                  ee.length > 1 &&
                                    (0, le.jsxs)(le.Fragment, {
                                      children: [
                                        " ",
                                        e[ht],
                                        Ce.qD,
                                        ee.length - 1,
                                      ],
                                    }),
                                ],
                              })
                            : (0, le.jsx)(K.j, {
                                type: "subtitle",
                                children: e[pt],
                              }),
                        ],
                      }),
                    }),
                  (0, le.jsx)(R.X, {
                    default: 24,
                  }),
                  (0, le.jsx)(Ye, {
                    onChange: (e) => {
                      V({
                        ...Y,
                        experience: e,
                      });
                    },
                    value:
                      Y.experience ??
                      (0, fe.G3)(
                        (j = i.totalExperience) === null ||
                          j === undefined ||
                          (j = j[0]) === null ||
                          j === undefined
                          ? undefined
                          : j.string,
                      ),
                  }),
                ],
              }),
            A &&
              (0, le.jsx)($e, {
                onApply: (e) =>
                  ((e) => {
                    V({
                      ...Y,
                      industries: e,
                    });
                    I(false);
                  })(e),
                setFooter: t,
                setHeader: r,
                onClose: () => I(false),
                initialValues: Y.industries ?? [],
              }),
            F &&
              l &&
              (0, le.jsx)(He, {
                onApply: (e) =>
                  ((e) => {
                    V({
                      ...Y,
                      districts: e,
                    });
                    E(false);
                  })(e),
                setFooter: t,
                setHeader: r,
                onClose: () => E(false),
                area: l,
                initialValues:
                  ((k = Y.districts) === null || k === undefined
                    ? undefined
                    : k.map((e) => e.toString())) ?? [],
              }),
          ],
        });
      };
      ft.displayName = "AutoresponseSettings/Filters/index/FiltersComponent";
      const bt = (0, oe.x)(ft);
      const yt = ({
        rule: e,
        selectedResume: t,
        isLoading: s,
        isSelectedResumeHidden: n,
        trls: o,
        onTurnOff: r,
        onTurnOn: a,
      }) =>
        (0, le.jsx)(_e.W, {
          children:
            e.enabled &&
            e.resumeHash === (t == null ? undefined : t._attributes.hash)
              ? (0, le.jsx)(T.z, {
                  mode: "primary",
                  stretched: true,
                  style: "negative",
                  onClick: r,
                  loading: s,
                  children: o["autoresponse.filters.button.turn.off"],
                })
              : (0, le.jsx)(T.z, {
                  mode: "primary",
                  stretched: true,
                  style: "accent",
                  onClick: a,
                  disabled: n,
                  loading: s,
                  children: o["autoresponse.filters.button.turn.on"],
                }),
        });
      yt.displayName =
        "AutoresponseSettings/MobileFooter/index/MobileFooterComponent";
      const xt = (0, oe.x)(yt);
      var vt = s(301023);
      const St = ({ resume: e, onClick: t, isActive: s }) => {
        var n;
        var o;
        var r;
        var a;
        const l =
          (n = e.photoUrls) !== null && n !== undefined && n.length
            ? e.photoUrls[0].avatar
            : undefined;
        const i =
          (o = e.gender) !== null && o !== undefined && o.length
            ? e.gender[0].string
            : "unknown";
        const u = l ? "image" : "placeholder";
        return (0, le.jsx)(
          J.Z,
          {
            onClick: () => (t == null ? undefined : t(e)),
            stretched: true,
            padding: 16,
            borderRadius: 16,
            borderWidth: "default",
            borderStyle: s ? "accent" : undefined,
            children: (0, le.jsxs)($.b, {
              slot: (0, le.jsx)(vt.q, {
                size: 48,
                mode: u,
                placeholder: i !== "unknown" ? i : undefined,
                "aria-label": "аватар",
                image: l ?? undefined,
              }),
              children: [
                (0, le.jsx)(K.j, {
                  children: e.title[0].string,
                }),
                (0, le.jsxs)(K.j, {
                  type: "subtitle",
                  children: [
                    (r = e.area) === null || r === undefined
                      ? undefined
                      : r[0].title,
                    (a = e.salary) !== null &&
                      a !== undefined &&
                      !!a.length &&
                      (0, le.jsxs)("span", {
                        children: [" · ", e.salary[0].amount],
                      }),
                  ],
                }),
              ],
            }),
          },
          e._attributes.hash,
        );
      };
      St.displayName = "Filters/ResumeCard/index/ResumeCard";
      const gt = "resumes--vWwuXGj30fsyycvk";
      const jt = "autoresponse.filters.resumeSelect.title";
      const _t = ({
        trls: e,
        resumes: t,
        selectedResume: s,
        onSelectResume: o,
      }) => {
        const r = (0, n.useCallback)(
          (e) => {
            o(e);
          },
          [o],
        );
        return (0, le.jsxs)("div", {
          children: [
            (0, le.jsx)(I.x, {
              typography: "label-2-regular",
              style: "secondary",
              children: e[jt],
            }),
            (0, le.jsx)(R.X, {
              default: 24,
            }),
            (0, le.jsx)("div", {
              className: gt,
              children: t.map((e) =>
                (0, le.jsx)(
                  St,
                  {
                    isActive:
                      (s == null ? undefined : s._attributes.hash) ===
                      e._attributes.hash,
                    resume: e,
                    onClick: r,
                  },
                  e._attributes.hash,
                ),
              ),
            }),
          ],
        });
      };
      _t.displayName =
        "AutoresponseSettings/ResumeFilter/index/ResumeFilterComponent";
      const Ct = (0, oe.x)(_t);
      const kt = "container--WiZtQGovBxUHgXFu";
      const wt = "resume-wrapper--DlQUXoSMkAYCOUIk";
      const Rt = "autoresponse.filters.resumeSelect.title.selected";
      const At = ({ trls: e, resume: t }) =>
        (0, le.jsxs)("div", {
          className: kt,
          children: [
            (0, le.jsx)(I.x, {
              typography: "label-2-regular",
              style: "secondary",
              children: e[Rt],
            }),
            (0, le.jsx)(R.X, {
              default: 16,
            }),
            (0, le.jsx)("div", {
              className: wt,
              children: (0, le.jsx)(St, {
                resume: t,
              }),
            }),
          ],
        });
      At.displayName =
        "AutoresponseSettings/ResumeSelected/index/ResumeSelectedComponent";
      const It = (0, oe.x)(At);
      const Ft = "container--IFKdPHKQgqE_yTJS";
      const Tt = "footer--p6eVutfr2cQylWey";
      const Nt = "autoresponse.filters.title";
      const Et = "autoresponse.filters.common.note";
      const Mt = "autoresponse.filters.common.title";
      const Dt = "autoresponse.filters.not.selected";
      const Lt = {
        pt1: "autoresponse.turn.on.error.pt1",
        pt2: "autoresponse.turn.on.error.pt2",
      };
      const Ht = {
        reason: "autoresponse.filters.notification.hidden.reason",
        action: "autoresponse.filters.notification.hidden.action",
      };
      const Ot = {
        industries: "autoresponse.filters.industry.title",
        district: "autoresponse.filters.district.title",
        salary: "autoresponse.filters.withSalary.title",
        experience: "autoresponse.filters.experience.title",
      };
      const Pt = {
        turnedOff: "autoresponse.snackbar.turned.off",
        turnedOn: "autoresponse.snackbar.turned.on",
      };
      const zt = ({
        trls: e,
        isVisible: t,
        initialSelectedResume: s,
        onSelectResume: a,
        onClose: l,
        onTurnOnSuccess: i,
      }) => {
        var d;
        const { isMobile: p } = (0, w.G)();
        const [h, m] = (0, n.useState)(false);
        const [b, y] = (0, n.useState)(false);
        const {
          setResumeSwitchAlertVisible: x,
          createAutoresponse: v,
          updateAutoresponse: S,
          setResumeToSwitch: g,
        } = (0, me.W)();
        const j = (0, D.v)((e) => e.applicantResumes);
        const C = (0, n.useMemo)(() => (0, fe.Pp)(j), [j]);
        const [k, F] = (0, n.useState)(false);
        const T = (0, D.v)((e) => e.currencies);
        const L = (0, D.v)((e) => e.applicantAutoresponseRules[0]);
        const H = L.filters ?? P.jW;
        const O = (0, D.v)((e) => e.citiesDistricts);
        const z = (0, o.useDispatch)();
        const W = (0, n.useMemo)(
          () => C.find((e) => e._attributes.hash === L.resumeHash),
          [C, L.resumeHash],
        );
        const [X, B] = (0, n.useState)(
          W == null ? undefined : W._attributes.hash,
        );
        const se = (0, n.useMemo)(
          () => j.find((e) => e._attributes.hash === X),
          [j, X],
        );
        const ne =
          (se == null ? undefined : se.accessType) &&
          !fe.YF.includes(se.accessType[0].string);
        const oe =
          se == null || (d = se.area) === null || d === undefined
            ? undefined
            : d[0].string;
        const re = e[Nt];
        const [ae, ie] = (0, n.useState)(re);
        const [ue, de] = (0, n.useState)(null);
        const [ce, pe] = (0, n.useState)(null);
        const ye = (0, n.useRef)({
          resumeId: X ?? "",
          autoResponseId: L.autoResponseId ? L.autoResponseId.toString() : null,
          autoResponseStatus: L.autoResponseId
            ? "auto_response_" + (L.enabled ? "on" : "off")
            : "no_auto_response",
        });
        const xe = (0, r.useElementShown)(Z(), ye.current);
        const Se = (0, n.useCallback)((e) => {
          ie(e);
        }, []);
        const ge = (0, n.useCallback)((e) => {
          de(e);
        }, []);
        const je = (0, n.useCallback)((e) => {
          pe(e);
        }, []);
        const { addNotification: _e } = (0, M.lm)();
        (0, n.useEffect)(() => {
          if (!se && s) {
            B(s._attributes.hash);
          }
        }, [s, se]);
        (0, n.useEffect)(() => {
          if (oe) {
            if (!O[oe]) {
              (0, te.M)(oe)
                .then((e) => {
                  z(
                    (0, be.QH)({
                      areaId: oe,
                      districts: e.result.map(({ value: e, label: t }) => ({
                        id: parseInt(e, 10),
                        name: t,
                      })),
                    }),
                  );
                })
                .catch(console.error);
            }
          }
        }, [oe, O, z]);
        const Ce = (0, n.useCallback)(() => {
          F(false);
          l();
        }, [l]);
        const ke = (0, n.useCallback)(() => {
          F(false);
        }, []);
        const we = (0, n.useCallback)(async () => {
          let t;
          let s;
          m(true);
          const n = L.autoResponseId
            ? "auto_response_" + (L.enabled ? "on" : "off")
            : "no_auto_response";
          try {
            if (L.resumeHash && se) {
              await S({
                resume: se,
                enabled: true,
                filters: H,
              });
            } else if (se) {
              const e = {
                ...H,
              };
              if (e.salary && !e.salary.currencyCode) {
                e.salary = {
                  ...e.salary,
                  currencyCode: T.default,
                };
              }
              await v(se, e).then((e) => {
                s = e.data.autoResponseId;
              });
            }
            if (i != null) {
              i(L);
            }
            _e(E.P, {
              props: {
                containerId: "autoresponse",
                align: "bottom",
                children: e[Pt.turnedOn],
                autohideTime: 3000,
                showClose: false,
                addon: (0, le.jsx)(N.lot, {
                  initialColor: "positive",
                }),
              },
            });
          } catch (e) {
            t = e;
            m(false);
            y(true);
          } finally {
            var r;
            var a;
            var l;
            var u;
            m(false);
            f()({
              elementName: "auto_response",
              resumeId: se == null ? undefined : se._attributes.hash,
              autoResponseId:
                ((r = s) === null || r === undefined
                  ? undefined
                  : r.toString()) ??
                ((a = L.autoResponseId) === null || a === undefined
                  ? undefined
                  : a.toString()),
              oldAutoResponseStatus: n,
              filterJson: L.filters ? JSON.stringify(H) : null,
              ...(t && {
                errors:
                  (l = t) !== null &&
                  l !== undefined &&
                  (l = l.response) !== null &&
                  l !== undefined &&
                  l.data
                    ? JSON.stringify(
                        (u = t) === null ||
                          u === undefined ||
                          (u = u.response) === null ||
                          u === undefined
                          ? undefined
                          : u.data,
                      )
                    : "NoInternetConnection",
              }),
            });
          }
        }, [_e, v, T.default, H, i, L, se, e, S]);
        const Re = (0, n.useCallback)(() => {
          if (
            L.enabled &&
            L.resumeHash !== (se == null ? undefined : se._attributes.hash)
          ) {
            x(true);
            g(se);
          } else {
            we();
          }
        }, [L.enabled, L.resumeHash, se, x, g, we]);
        const Ae = (0, n.useCallback)(async () => {
          m(true);
          try {
            await S({
              resume: undefined,
              enabled: false,
              filters: undefined,
            });
            m(false);
            de((e) => e);
            _e(E.P, {
              props: {
                containerId: "autoresponse",
                align: "bottom",
                children: e[Pt.turnedOff],
                autohideTime: 3000,
                showClose: false,
                addon: (0, le.jsx)(N.lot, {
                  initialColor: "positive",
                }),
              },
            });
          } catch (e) {
            m(false);
            y(true);
          }
        }, [_e, e, S]);
        const Ie = (0, n.useCallback)(() => {
          F(true);
          Y()({
            autoResponseId: L.autoResponseId.toString(),
            autoResponseStatus: L.autoResponseId
              ? "auto_response_" + (L.enabled ? "on" : "off")
              : "no_auto_response",
          });
        }, [L.autoResponseId, L.enabled]);
        const Fe = (0, n.useMemo)(
          () =>
            (0, le.jsx)(ve, {
              rule: L,
              selectedResume: se,
              isLoading: h,
              isSelectedResumeHidden: ne != null && ne,
              onClose: l,
              onTurnOff: Ae,
              onTurnOn: Re,
            }),
          [L, se, h, ne, l, Ae, Re],
        );
        const Te = (0, n.useMemo)(
          () =>
            (0, le.jsx)(xt, {
              rule: L,
              selectedResume: se,
              isLoading: h,
              isSelectedResumeHidden: ne != null && ne,
              onTurnOff: Ae,
              onTurnOn: Re,
            }),
          [L, se, h, ne, Ae, Re],
        );
        (0, n.useLayoutEffect)(() => {
          ie(re);
          de(Fe);
          pe(Te);
        }, [k, Fe, Te, re, ne]);
        (0, n.useEffect)(() => {
          de(Fe);
          pe(Te);
        }, [Fe, Te, L.enabled]);
        const Ne = (0, n.useMemo)(() => {
          var t;
          var s;
          var n;
          if (!H) {
            return e[Dt];
          }
          const o = [];
          if (
            H.onlyWithSalary ||
            ((t = H.salary) !== null && t !== undefined && t.from)
          ) {
            o.push(e[Ot.salary]);
          }
          if ((s = H.industries) !== null && s !== undefined && s.length) {
            o.push(e[Ot.industries]);
          }
          if ((n = H.districts) !== null && n !== undefined && n.length) {
            o.push(e[Ot.district]);
          }
          if (H.experience) {
            o.push(e[Ot.experience]);
          }
          if (o.length) {
            return o.join(", ");
          } else {
            return e[Dt];
          }
        }, [H, e]);
        if (L.enabled && !W) {
          return null;
        }
        Ee = (0, le.jsx)(G.c, {
          id: "autoresponse",
          children: (0, le.jsxs)("div", {
            ref: xe,
            className: Ft,
            children: [
              k &&
                (0, le.jsx)(bt, {
                  setHeader: Se,
                  setFooter: ge,
                  setFooterMobile: je,
                  onClose: ke,
                  area: oe,
                  resume: se ?? W,
                }),
              !k &&
                (0, le.jsxs)("div", {
                  children: [
                    L.enabled
                      ? (se || W) &&
                        (0, le.jsx)(It, {
                          resume: se ?? W,
                        })
                      : (0, le.jsx)(Ct, {
                          resumes: C,
                          selectedResume: se,
                          onSelectResume: (e) => {
                            B(e._attributes.hash);
                            a(e);
                          },
                        }),
                    (0, le.jsx)(R.X, {
                      default: 24,
                    }),
                    L.enabled &&
                      (W == null ? undefined : W._attributes.hash) ===
                        (se == null ? undefined : se._attributes.hash) &&
                      (0, le.jsx)(he, {}),
                    (0, le.jsx)(R.X, {
                      default: 24,
                    }),
                    (0, le.jsx)(I.x, {
                      typography: "label-2-regular",
                      style: "secondary",
                      children: e[Et],
                    }),
                    (0, le.jsx)(R.X, {
                      default: 24,
                    }),
                    (0, le.jsx)(J.Z, {
                      borderStyle: "neutral",
                      borderWidth: "default",
                      padding: 16,
                      borderRadius: 16,
                      stretched: true,
                      onClick: Ie,
                      children: (0, le.jsxs)($.b, {
                        right: (0, le.jsx)(N.a2Q, {}),
                        children: [
                          (0, le.jsx)(K.j, {
                            children: e[Mt],
                          }),
                          (0, le.jsx)(K.j, {
                            type: "subtitle",
                            children: Ne,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ne &&
                (0, le.jsx)(J.Z, {
                  style: "secondary",
                  padding: 20,
                  borderRadius: 20,
                  children: (0, le.jsx)(I.x, {
                    typography: "paragraph-2-regular",
                    style: "primary",
                    children: (0, _.WU)(e[Ht.reason], {
                      "{0}": (0, le.jsx)(A.r, {
                        inline: true,
                        href: `/resume/edit/${se == null ? undefined : se._attributes.hash}/visibility&backUrl=%2F`,
                        mode: "primary",
                        typography: "paragraph-2-regular",
                        onClick: () => {
                          c()({
                            elementName: "auto_response",
                            resumeId:
                              se == null ? undefined : se._attributes.hash,
                          });
                        },
                        children: e[Ht.action],
                      }),
                    }),
                  }),
                }),
              b &&
                (0, le.jsxs)(ee.A, {
                  containerId: "autoresponse",
                  align: "bottom",
                  autohideTime: 4000,
                  addon: (0, le.jsx)(N.L1_, {
                    initialColor: "negative",
                  }),
                  onClose: () => y(false),
                  children: [e[Lt.pt1], " ", e[Lt.pt2]],
                }),
            ],
          }),
        });
        if (p) {
          return (0, le.jsx)(V.R, {
            visible: t,
            onClose: Ce,
            header: (0, le.jsx)(Q.v, {
              title: ae,
              left: k
                ? (0, le.jsx)(N.vnl, {
                    onClick: ke,
                  })
                : undefined,
              right: (0, le.jsx)(N.Cs7, {
                onClick: l,
              }),
            }),
            height: "full-screen",
            footer: ce,
            children: Ee,
          });
        } else {
          return (0, le.jsx)(U.u, {
            title: (0, le.jsx)(q.D, {
              Element: "h4",
              size: "medium",
              children: ae,
            }),
            actions: (0, le.jsx)(N.Cs7, {
              "data-qa": "autoresponse-settings-modal-close",
              initialColor: "secondary",
              onClick: Ce,
            }),
            onClose: Ce,
            footer: (0, le.jsx)("div", {
              className: Tt,
              children: ue,
            }),
            visible: t,
            position: "right",
            children: Ee,
          });
        }
        var Ee;
      };
      zt.displayName =
        "Autoresponse/AutoresponseSettings/index/AutoresponseSettingsComponent";
      const Wt = (0, oe.x)(zt);
      var Xt = s(750128);
      var Zt = s(650911);
      const Bt = "title--ONcu22FfqSQ1W5Yz";
      const Yt = "step--qLufSSc64QAIw8rN";
      const Vt = "index--Neg8SzsOM8EuTg1a";
      const Qt = "autoresponse.infomodal.title";
      const Ut = {
        ok: "autoresponse.infomodal.button.ok",
        on: "autoresponse.infomodal.button.on",
        onLong: "autoresponse.infomodal.button.on.long",
      };
      const qt = {
        steps1: "autoresponse.infomodal.steps.1",
        steps2: "autoresponse.infomodal.steps.2",
        steps3: "autoresponse.infomodal.steps.3",
        steps4: "autoresponse.infomodal.steps.4",
      };
      const Gt = ({
        trls: e,
        isVisible: t,
        onClose: s,
        onContinue: n,
        shouldShowActions: o,
      }) => {
        const { isMobile: r } = (0, w.G)();
        const a = (0, le.jsx)(Xt.z, {
          default: 32,
          gteS: 24,
          children: Object.keys(qt).map((t, s) =>
            (0, le.jsxs)(
              "div",
              {
                className: Yt,
                children: [
                  (0, le.jsx)("div", {
                    className: Vt,
                    children: (0, le.jsx)(I.x, {
                      typography: "paragraph-2-regular",
                      children: s + 1,
                    }),
                  }),
                  (0, le.jsx)(I.x, {
                    typography: "paragraph-3-regular",
                    style: "secondary",
                    children: e[qt[t]],
                  }),
                ],
              },
              `autoresponse-step-${s}`,
            ),
          ),
        });
        const l = (0, le.jsx)(ye.o, {
          type: r ? "vertical" : "horizontal",
          padding: r ? 16 : undefined,
          primaryActions: o
            ? (0, le.jsx)(T.z, {
                mode: "primary",
                stretched: true,
                style: "accent",
                onClick: n,
                children: e[r ? Ut.onLong : Ut.on],
              })
            : undefined,
          secondaryActions:
            o || r
              ? (0, le.jsx)(T.z, {
                  mode: "secondary",
                  stretched: true,
                  style: "accent",
                  onClick: s,
                  children: e[Ut.ok],
                })
              : undefined,
        });
        if (r) {
          return (0, le.jsxs)(V.R, {
            visible: t,
            onClose: s,
            footer:
              o || r
                ? (0, le.jsx)(_e.W, {
                    children: l,
                  })
                : undefined,
            children: [
              (0, le.jsx)("div", {
                className: Bt,
                children: (0, le.jsx)(I.x, {
                  maxLines: 2,
                  typography: "title-4-semibold",
                  children: e[Qt],
                }),
              }),
              (0, le.jsx)(R.X, {
                default: 32,
              }),
              a,
              (0, le.jsx)(R.X, {
                default: 32,
              }),
            ],
          });
        } else {
          return (0, le.jsxs)(U.u, {
            size: "medium",
            visible: t,
            title: e[Qt],
            onClose: s,
            actions: (0, le.jsx)(Zt.a, {
              mode: "secondary",
              icon: N.Cs7,
              onClick: s,
            }),
            footer: o ? l : undefined,
            children: [
              a,
              (0, le.jsx)(R.X, {
                default: 12,
              }),
            ],
          });
        }
      };
      Gt.displayName = "Autoresponse/InfoModal/index/InfoModalComponent";
      const Jt = (0, oe.x)(Gt);
      var $t = s(255717);
      const Kt = "/shards/autoresponse";
      const es = {
        finish: {
          title: "autoresponse.alert.finish.title",
          subtitle: "autoresponse.alert.finish.subtitle",
          buttons: {
            ok: "autoresponse.alert.finish.button.ok",
            cancel: "autoresponse.alert.finish.button.cancel",
          },
        },
        visible: {
          title: "autoresponse.alert.visible.title",
          subtitle: "autoresponse.alert.visible.subtitle",
          buttons: {
            ok: "autoresponse.alert.visible.button.ok",
            cancel: "autoresponse.alert.visible.button.cancel",
          },
        },
        turnOnSuccess: {
          title: "autoresponse.alert.turn.on.success.title",
          subtitle: "autoresponse.alert.turn.on.success.subtitle",
          buttons: {
            ok: "autoresponse.alert.turn.on.success.button.ok",
          },
        },
        turnedOff: {
          title: "autoresponse.alert.turned.off.title",
          subtitle: "autoresponse.alert.turned.off.subtitle",
          buttons: {
            ok: "autoresponse.alert.turned.off.button.ok",
          },
        },
      };
      const ts = {
        success: "autoresponse.snackbar.success",
        failed: "autoresponse.snackbar.failed",
        link: "autoresponse.snackbar.link",
        turnedOn: "autoresponse.snackbar.turned.on",
        turnedOff: "autoresponse.snackbar.turned.off",
      };
      const ss = {
        title: "autoresponse.switchResume.title",
        subtitle: "autoresponse.switchResume.subtitle",
        subtitleStub: "autoresponse.switchResume.subtitle.stub",
        buttons: {
          ok: "autoresponse.switchResume.buttons.ok",
          cancel: "autoresponse.switchResume.buttons.cancel",
        },
      };
      const ns = ({ trls: e, children: t }) => {
        const [i, d] = (0, n.useState)(false);
        const [p, m] = (0, n.useState)(false);
        const [b, x] = (0, n.useState)(false);
        const [S, k] = (0, n.useState)(false);
        const [X, Z] = (0, n.useState)(false);
        const [B, Y] = (0, n.useState)(false);
        const [V, Q] = (0, n.useState)(false);
        const U = (0, D.v)((e) => e.request.url);
        const [q, G] = (0, n.useState)();
        const [J, $] = (0, n.useState)();
        const K = (0, D.v)((e) => e.analyticsParams.hhtmSource);
        const ee = (0, D.v)((e) => e.applicantAutoresponseRules[0]);
        const te = (0, D.v)((e) => e.applicantResumes);
        const [se, ne] = (0, n.useState)(false);
        const oe = (0, n.useMemo)(() => (0, fe.Pp)(te), [te]);
        const re = (0, n.useMemo)(
          () => oe.find((e) => e._attributes.hash === ee.resumeHash),
          [oe, ee.resumeHash],
        );
        const ae = (0, D.v)((e) => e.applicantAutoresponseStatistics);
        const [ie, ue] = (0, n.useState)(false);
        const { addNotification: de } = (0, M.lm)();
        const ce = (0, o.useDispatch)();
        const { isMobile: pe } = (0, w.G)();
        const he = (0, r.useElementShown)(u(), {
          oldResumeId: ee.resumeHash,
          newResumeId: J == null ? undefined : J._attributes.hash,
        });
        const be = (0, r.useElementShown)(h(), {
          resumeId: q == null ? undefined : q._attributes.hash,
        });
        (0, n.useEffect)(() => {
          const e = j.Y.getItem(fe.DP);
          if (!!e && (ee.autoResponseId !== Number(e) || !ee.enabled)) {
            ne(true);
          }
        }, [ee.autoResponseId, ee.enabled]);
        const ye = (0, n.useCallback)((e, t) => {
          m(e);
          Q(t != null && t);
        }, []);
        const xe = () => {
          ne(false);
          j.Y.removeItem(fe.DP);
        };
        const ve = (0, n.useCallback)(
          (e) => {
            G(e);
            if (e.accessType) {
              if (e._attributes.status === W.D6) {
                d(true);
                return;
              }
              if (!fe.YF.includes(e.accessType[0].string)) {
                x(true);
                return;
              }
            }
            ye(true, true);
          },
          [G, d, x, ye],
        );
        const Se = () => {
          G(undefined);
          x(false);
          d(false);
        };
        const ge = (0, n.useCallback)(
          async (e) => {
            try {
              const n = await ((t = e),
              $t._i.get("/shards/autoresponse/statistics", {
                params: {
                  ruleId: t,
                },
                signal: s,
              }));
              ce((0, H.Tz)(n.statistics));
            } catch (e) {
              console.error(e);
            }
            var t;
            var s;
          },
          [ce],
        );
        const je = (0, n.useCallback)(
          async ({ resume: e, enabled: t, filters: s }) => {
            const o = t ?? ee.enabled;
            const r =
              (e == null ? undefined : e._attributes.hash) ?? ee.resumeHash;
            const a = s ?? ee.filters;
            return ((l = {
              autoResponseId: ee.autoResponseId,
              resumeHash: r,
              enabled: o,
              ...(a && {
                filters: a,
              }),
            }),
            $t._i.put(Kt, {
              data: l,
            })).then((e) => {
              ce((0, P.FH)(e.data));
              if (e.data.autoResponseId) {
                if (e.data.enabled) {
                  j.Y.setItem(fe.DP, e.data.autoResponseId.toString());
                } else {
                  j.Y.removeItem(fe.DP);
                }
              }
              return e;
            });
            var l;
          },
          [ee.enabled, ee.autoResponseId, ee.resumeHash, ee.filters, ce],
        );
        const _e = (0, n.useCallback)(
          async (e, t) => {
            return ((s = {
              resumeHash: e._attributes.hash,
              filters: t,
            }),
            $t._i.post(Kt, {
              data: s,
            })).then((e) => {
              ce((0, P.ZT)(e.data));
              if (e.data.autoResponseId) {
                j.Y.setItem(fe.DP, e.data.autoResponseId.toString());
                ge(e.data.autoResponseId);
              }
              return e;
            });
            var s;
          },
          [ce, ge],
        );
        const Ce = (0, n.useCallback)(
          async (t, s) => {
            const n = s == null ? undefined : s._attributes.hash;
            if (n && n !== ee.resumeHash) {
              Y(true);
              $(s);
              return;
            }
            if (ee.autoResponseId && ee.resumeHash) {
              ue(true);
              const n = ee.autoResponseId
                ? "auto_response_" + (ee.enabled ? "on" : "off")
                : "no_auto_response";
              let o;
              await je({
                resume: s,
                enabled: t,
                filters: undefined,
              })
                .catch((e) => {
                  o = e;
                })
                .finally(() => {
                  var r;
                  var a;
                  f()({
                    elementName: s ? "auto_response_block" : "auto_response",
                    resumeId: s == null ? undefined : s._attributes.hash,
                    autoResponseId: ee.autoResponseId.toString(),
                    oldAutoResponseStatus: n,
                    filterJson: ee.filters ? JSON.stringify(ee.filters) : null,
                    ...(o && {
                      errors:
                        (r = o) !== null &&
                        r !== undefined &&
                        (r = r.response) !== null &&
                        r !== undefined &&
                        r.data
                          ? JSON.stringify(
                              (a = o) === null ||
                                a === undefined ||
                                (a = a.response) === null ||
                                a === undefined
                                ? undefined
                                : a.data,
                            )
                          : "NoInternetConnection",
                    }),
                    autoResponseCount: ae ? ae.createdTopicCount : null,
                    autoVacancyCount: ae ? ae.vacancyFromSearchCount : null,
                  });
                  ue(false);
                  de(E.P, {
                    props: {
                      children: t ? e[ts.turnedOn] : e[ts.turnedOff],
                      autohideTime: 3000,
                      showClose: false,
                      addon: (0, le.jsx)(N.lot, {
                        initialColor: "positive",
                      }),
                    },
                  });
                });
            }
          },
          [
            ee.resumeHash,
            ee.autoResponseId,
            ee.enabled,
            ee.filters,
            je,
            ae,
            de,
            e,
          ],
        );
        const ke = (0, n.useCallback)(async () => {
          l()({
            buttonName: "alert_primary",
            oldResumeId: ee.resumeHash,
            newResumeId: J == null ? undefined : J._attributes.hash,
          });
          await je({
            resume: J,
            enabled: true,
            filters: undefined,
          }).finally(() => {
            Y(false);
            $(undefined);
            de(E.P, {
              props: {
                containerId: pe ? undefined : "autoresponse",
                children: e[ts.turnedOn],
                autohideTime: 3000,
                showClose: false,
                addon: (0, le.jsx)(N.lot, {
                  initialColor: "positive",
                }),
              },
            });
          });
        }, [ee.resumeHash, J, je, de, pe, e]);
        const we = () => {
          Y(false);
          l()({
            buttonName: "alert_secondary",
            oldResumeId: ee.resumeHash,
            newResumeId: J == null ? undefined : J._attributes.hash,
          });
        };
        const Re = (0, n.useMemo)(
          () => ({
            handleSelectResume: ve,
            setInfoVisible: ye,
            setFiltersVisible: k,
            handleSwitchAutoresponseEnabled: Ce,
            setSelectedResume: G,
            setHiddenAlertVisible: x,
            setResumeSwitchAlertVisible: Y,
            createAutoresponse: _e,
            updateAutoresponse: je,
            setResumeToSwitch: $,
            isLoading: ie,
          }),
          [ve, ye, Ce, _e, je, ie],
        );
        return (0, le.jsxs)(me.p.Provider, {
          value: Re,
          children: [
            t,
            (0, le.jsx)(F.bZ, {
              layout: "vertical",
              visible: i,
              icon: (0, le.jsx)(N.uvJ, {}),
              title: e[es.finish.title],
              description: e[es.finish.subtitle],
              buttons: (0, le.jsxs)(le.Fragment, {
                children: [
                  (0, le.jsx)(T.z, {
                    mode: "primary",
                    style: "accent",
                    stretched: true,
                    Element: "a",
                    href:
                      ((Ae =
                        (q == null ? undefined : q._attributes.hash) ?? ""),
                      `/resume/${Ae}`),
                    children: e[es.finish.buttons.ok],
                  }),
                  (0, le.jsx)(T.z, {
                    mode: "secondary",
                    style: "accent",
                    stretched: true,
                    onClick: Se,
                    children: e[es.finish.buttons.cancel],
                  }),
                ],
              }),
              onClose: Se,
            }),
            (0, le.jsx)(F.bZ, {
              layout: "vertical",
              visible: b,
              icon: (0, le.jsx)(N.uvJ, {}),
              title: e[es.visible.title],
              description: (0, le.jsx)("div", {
                ref: q ? be : undefined,
                children: e[es.visible.subtitle],
              }),
              buttons: (0, le.jsxs)(le.Fragment, {
                children: [
                  (0, le.jsx)(T.z, {
                    mode: "primary",
                    style: "accent",
                    stretched: true,
                    Element: "button",
                    onClick: () => {
                      if (q) {
                        const t = q._attributes.hash;
                        let s = (0, _.WU)(e[ts.success], {
                          "{0}": q.title[0].string,
                        });
                        ue(true);
                        c()({
                          elementName: "auto_response_change_resume_visibility",
                          resumeId: t,
                        });
                        L.r
                          .update(t, "main", {
                            accessType: [
                              {
                                string: z.g5.Clients,
                              },
                            ],
                          })
                          .then(() => {
                            ce(
                              (0, O.nw)({
                                hash: t,
                                field: {
                                  accessType: [
                                    {
                                      string: z.g5.Clients,
                                    },
                                  ],
                                },
                              }),
                            );
                          })
                          .catch(() => {
                            s = e[ts.failed];
                          })
                          .finally(() => {
                            g()();
                            ue(false);
                            x(false);
                            de(E.P, {
                              props: {
                                children: (0, le.jsxs)(le.Fragment, {
                                  children: [
                                    s,
                                    (0, le.jsx)(R.X, {
                                      default: 12,
                                    }),
                                    (0, le.jsx)(A.r, {
                                      Element: C.SPALink,
                                      to: `/resume/edit/${t}/visibility`,
                                      additionalQueryParams: {
                                        hhtmSource: K,
                                        backUrl: U,
                                      },
                                      children: (0, le.jsx)(I.x, {
                                        style: "contrast",
                                        typography: "subtitle-1-semibold",
                                        children: e[ts.link],
                                      }),
                                    }),
                                  ],
                                }),
                                autohideTime: 3000,
                                showClose: false,
                              },
                            });
                          });
                      }
                    },
                    loading: ie,
                    children: e[es.visible.buttons.ok],
                  }),
                  (0, le.jsx)(T.z, {
                    mode: "secondary",
                    style: "accent",
                    stretched: true,
                    onClick: Se,
                    children: e[es.visible.buttons.cancel],
                  }),
                ],
              }),
              onClose: () => x(false),
            }),
            (0, le.jsx)(F.bZ, {
              layout: "vertical",
              visible: X,
              icon: (0, le.jsx)(N.uvJ, {}),
              title: e[es.turnOnSuccess.title],
              description: (0, le.jsx)(r.ElementShownAnchor, {
                fn: v(),
                elementName: "auto_response_on_alert",
                autoResponseId: ee.autoResponseId.toString(),
                children: e[es.turnOnSuccess.subtitle],
              }),
              buttons: (0, le.jsx)(le.Fragment, {
                children: (0, le.jsx)(T.z, {
                  mode: "primary",
                  style: "accent",
                  stretched: true,
                  Element: "button",
                  onClick: () => Z(false),
                  loading: ie,
                  children: e[es.turnOnSuccess.buttons.ok],
                }),
              }),
              onClose: () => Z(false),
            }),
            (0, le.jsx)(Jt, {
              isVisible: p,
              onClose: () => {
                y()({
                  entryType: "understand",
                  resumeId: q == null ? undefined : q._attributes.hash,
                });
                G(undefined);
                ye(false);
              },
              onContinue: () => {
                y()({
                  entryType: "turn_on",
                  resumeId: q == null ? undefined : q._attributes.hash,
                });
                if (q) {
                  ye(false);
                  k(true);
                }
              },
              shouldShowActions: V,
            }),
            (0, le.jsx)(Wt, {
              onClose: () => k(false),
              isVisible: S,
              initialSelectedResume: q,
              onSelectResume: (e) => G(e),
              onTurnOnSuccess: () => {
                if (!ee.autoResponseId) {
                  Z(true);
                  k(false);
                }
              },
            }),
            (0, le.jsx)(F.bZ, {
              layout: "vertical",
              visible: B,
              icon: (0, le.jsx)(N.l5_, {
                initialColor: "warning",
              }),
              title: e[ss.title],
              description: (0, le.jsx)("div", {
                ref: J ? he : undefined,
                children: (0, _.WU)(e[ss.subtitle], {
                  "{0}":
                    (re == null ? undefined : re.title[0].string) ??
                    e[ss.subtitleStub],
                }),
              }),
              buttons: (0, le.jsxs)(le.Fragment, {
                children: [
                  (0, le.jsx)(T.z, {
                    mode: "primary",
                    style: "accent",
                    stretched: true,
                    Element: "button",
                    onClick: () => ke(),
                    loading: ie,
                    children: e[ss.buttons.ok],
                  }),
                  (0, le.jsx)(T.z, {
                    mode: "secondary",
                    style: "accent",
                    stretched: true,
                    Element: "button",
                    onClick: we,
                    loading: ie,
                    children: e[ss.buttons.cancel],
                  }),
                ],
              }),
              onClose: we,
            }),
            (0, le.jsx)(F.bZ, {
              layout: "vertical",
              visible: se,
              icon: (0, le.jsx)(N.l5_, {}),
              iconStyle: "warning",
              title: e[es.turnedOff.title],
              description: (0, le.jsx)(r.ElementShownAnchor, {
                fn: v(),
                elementName: "auto_response_off_alert",
                autoResponseId: ee.autoResponseId.toString(),
                children: e[es.turnedOff.subtitle],
              }),
              buttons: (0, le.jsx)(le.Fragment, {
                children: (0, le.jsx)(T.z, {
                  mode: "secondary",
                  style: "accent",
                  stretched: true,
                  onClick: xe,
                  children: e[es.turnedOff.buttons.ok],
                }),
              }),
              onClose: xe,
            }),
          ],
        });
        var Ae;
      };
      ns.displayName = "components/Autoresponse/index/AutoresponseComponent";
      const os = (0, k.Z)(ns);
    },
    416883: function (e, t, s) {
      s.d(t, {
        DP: () => d,
        G3: () => h,
        Gn: () => u,
        Pp: () => p,
        XK: () => a,
        YF: () => l,
        jk: () => c,
        yf: () => i,
      });
      var n = s(205838);
      var o = s(642053);
      var r = s(330080);
      const a = [r.Ci, r.k1, r._T, r.AE];
      const l = [n.uH, n.Eo, n.hl];
      const i = [r.D6];
      const u = [r.l0, r.nc];
      const d = "activeAutoresponseId";
      const c =
        "applicant/resumes/new?hhtmFrom=main&hhtmFromLabel=autoresponse";
      const p = (e) =>
        e
          .filter((e) => a.includes(e._attributes.status))
          .sort((e, t) =>
            e.accessType &&
            t.accessType &&
            !l.includes(t.accessType[0].string) &&
            l.includes(e.accessType[0].string)
              ? -1
              : 0,
          );
      const h = (e) => {
        if (typeof e != "number" || !e) {
          return null;
        }
        const t = e / 12;
        if (t < 1) {
          return o.SE.NoExperience;
        } else if (t < 3) {
          return o.SE.Between1And3;
        } else if (t < 6) {
          return o.SE.Between3And6;
        } else {
          return o.SE.MoreThan6;
        }
      };
    },
    34555: function (e, t, s) {
      s.d(t, {
        Y: () => T,
      });
      var n = s(394280);
      var o = s(940389);
      var r = s(934431);
      var a = s.n(r);
      var l = s(634437);
      var i = s.n(l);
      var u = s(886146);
      var d = s.n(u);
      var c = s(365545);
      var p = s.n(c);
      var h = s(36074);
      var m = s(580356);
      var f = s(301023);
      var b = s(118450);
      var y = s(559123);
      var x = s(674070);
      var v = s(555498);
      var S = s(876705);
      var g = s(599998);
      var j = s(594948);
      var _ = s(454959);
      var C = s(22728);
      var k = s(772529);
      var w = s(369961);
      var R = s(343856);
      const A = {
        title: "applicant.resume.setka.promotionAlert.title",
        description: "applicant.resume.setka.promotionAlert.description",
        okButton: "applicant.resume.setka.promotionAlert.okButton",
        cancelButton: "applicant.resume.setka.promotionAlert.cancelButton",
      };
      const I = {
        title: "applicant.resume.setka.qrcodeModal.title",
        description: "applicant.resume.setka.qrcodeModal.description",
      };
      const F = ({ trls: e, hhtmFrom: t }) => {
        const s = (0, o.useDispatch)();
        const { isGtS: r } = (0, h.G)();
        const [l, u] = (0, n.useState)(false);
        const c = (0, j.v)(w.vN);
        const g = (0, j.v)(w.CY);
        const F = (0, j.v)(_.Nx);
        const T = r ? undefined : (0, k.Zd)(c);
        (0, n.useEffect)(() => {
          if (g) {
            i()({
              resumeId: c,
              hhtmFrom: t,
              hhtmSource: "resume_update_post_to_setka",
            });
            p()({
              hhtmSource: "setka_application_alert",
            });
          }
        }, [g, c, t]);
        return (0, R.jsxs)(R.Fragment, {
          children: [
            (0, R.jsx)(m.bZ, {
              visible: g,
              icon: (0, R.jsx)(f.q, {
                "aria-label": "setka icon",
                size: 48,
                mode: "icon",
                icon: (0, R.jsx)(v.Pwb, {
                  initialColor: "primary",
                }),
              }),
              iconStyle: "avatar",
              title: e[A.title],
              description: e[A.description],
              layout: "horizontal",
              buttons: (0, R.jsxs)(R.Fragment, {
                children: [
                  (0, R.jsx)(b.z, {
                    style: "accent",
                    mode: "secondary",
                    stretched: true,
                    onClick: () => {
                      d()({
                        resumeId: c,
                        hhtmSource: "resume_update_post_to_setka",
                      });
                      s((0, w.At)());
                    },
                    children: e[A.cancelButton],
                  }),
                  (0, R.jsx)(b.z, {
                    Element: r ? "button" : "a",
                    href: T,
                    style: "accent",
                    mode: "primary",
                    stretched: true,
                    onClick: () => {
                      a()({
                        resumeId: c,
                        hhtmSource: "resume_update_post_to_setka",
                      });
                      s((0, w.At)());
                      (0, C.oF)((0, C.Zn)(F));
                      if (r) {
                        u(true);
                      } else {
                        s((0, w.QV)());
                      }
                    },
                    children: e[A.okButton],
                  }),
                ],
              }),
              onClose: () => {
                s((0, w.At)());
              },
            }),
            r &&
              (0, R.jsx)(y.u, {
                visible: l,
                title: e[I.title],
                titleSize: "medium",
                titleDescription: e[I.description],
                titleDescriptionStyle: "secondary",
                size: "small",
                closeByClickOutside: false,
                actions: (0, R.jsx)(x.Cs7, {
                  initialColor: "secondary",
                  onClick: () => {
                    u(false);
                    s((0, w.QV)());
                  },
                }),
                children: (0, R.jsx)(S.o, {
                  data: (0, k.bY)(c),
                }),
              }),
          ],
        });
      };
      F.displayName =
        "components/ResumeSetkaPromotionAlert/index/ResumeSetkaPromotionAlert";
      const T = (0, g.x)(F);
    },
    183618: function (e, t, s) {
      s.d(t, {
        C: () => r,
        D$: () => o,
        _Z: () => a,
      });
      s(163145);
      var n = s(255717);
      const o = (e) =>
        n._i.get("/shards/roles_catalog", {
          params: {
            lang: e,
          },
        });
      const r = (e) =>
        n._i.get("/shards/popular_areas", {
          params: {
            lang: e,
          },
        });
      const a = (e, t) =>
        n._i.get("/shards/industry", {
          params: {
            lang: e,
            site: t,
          },
        });
    },
    454959: function (e, t, s) {
      s.d(t, {
        Nx: () => a,
        _b: () => l,
        vO: () => r,
      });
      var n = s(914181);
      var o = s(526729);
      const r = (e, t, s, r = true) => {
        var a;
        const l = e.enabled[t] || o.QH;
        const i =
          (e == null || (a = e.checked) === null || a === undefined
            ? undefined
            : a.some((e) => e.name === t)) || false;
        if (r && !i) {
          (0, n.a0)({
            experimentName: t,
            experimentGroup: l,
            dispatch: s,
          });
        }
        return l === o.ot;
      };
      const a = ({ features: e }) => e;
      const l = ({ experiments: e }) => e;
    },
    22728: function (e, t, s) {
      s.d(t, {
        Lm: () => _,
        P0: () => g,
        Zn: () => h,
        cs: () => j,
        oF: () => C,
      });
      var n = s(630549);
      const o = "SETKA_AFTER_RESUME_UPDATE_STATE";
      const r = {
        updatesSinceLastShow: `${o}_updates_since_last_show`,
        totalShows: `${o}_total_shows`,
        cooldownStartedAt: `${o}_cooldown_started_at`,
      };
      const a = "resume_touch_setka_banner_first_threshold";
      const l = "resume_touch_setka_banner_next_threshold";
      const i = "resume_touch_setka_banner_max_shows";
      const u = "resume_touch_setka_banner_cooldown_months";
      const d = {
        firstThreshold: 4,
        nextThreshold: 8,
        maxShows: 4,
        cooldownMonths: 6,
      };
      const c = {
        updatesSinceLastShow: 0,
        totalShows: 0,
        cooldownStartedAt: null,
      };
      const p = (e, t) => {
        return (
          ((e) => {
            if (typeof e == "number" && Number.isFinite(e) && e > 0) {
              return Math.trunc(e);
            }
            if (typeof e == "string") {
              const t = Number.parseInt(e, 10);
              if (Number.isFinite(t) && t > 0) {
                return t;
              }
            }
            return null;
          })(e) ?? t
        );
      };
      const h = (e) => ({
        firstThreshold: p(e == null ? undefined : e[a], d.firstThreshold),
        nextThreshold: p(e == null ? undefined : e[l], d.nextThreshold),
        maxShows: p(e == null ? undefined : e[i], d.maxShows),
        cooldownMonths: p(e == null ? undefined : e[u], d.cooldownMonths),
      });
      const m = (e, t = null) => {
        const s = n.Y.getItem(e);
        if (!s) {
          return t;
        }
        const o = Number.parseInt(s, 10);
        if (Number.isFinite(o)) {
          return o;
        } else {
          return t;
        }
      };
      const f = (e) => {
        n.Y.setItem(r.updatesSinceLastShow, String(e.updatesSinceLastShow));
        n.Y.setItem(r.totalShows, String(e.totalShows));
        if (e.cooldownStartedAt === null) {
          n.Y.removeItem(r.cooldownStartedAt);
        } else {
          n.Y.setItem(r.cooldownStartedAt, String(e.cooldownStartedAt));
        }
      };
      const b = (e, t) =>
        !!e.cooldownStartedAt &&
        ((e, t) => {
          const s = new Date(e);
          s.setMonth(s.getMonth() + t);
          return s.getTime();
        })(e.cooldownStartedAt, t.cooldownMonths) <= Date.now();
      const y = (e, t) => Boolean(e.cooldownStartedAt) && !b(e, t);
      const x = (e, t) => {
        if (b(e, t)) {
          return {
            ...c,
          };
        }
        return {
          updatesSinceLastShow: Math.max(
            0,
            Math.min(e.updatesSinceLastShow, t.nextThreshold),
          ),
          totalShows: Math.max(0, Math.min(e.totalShows, t.maxShows)),
          cooldownStartedAt: y(e, t) ? e.cooldownStartedAt : null,
        };
      };
      const v = (e = d) => {
        const t = {
          updatesSinceLastShow: m(
            r.updatesSinceLastShow,
            c.updatesSinceLastShow,
          ),
          totalShows: m(r.totalShows, c.totalShows),
          cooldownStartedAt: m(r.cooldownStartedAt),
        };
        const s = x(t, e);
        var n;
        var o;
        if (
          (n = t).updatesSinceLastShow !== (o = s).updatesSinceLastShow ||
          n.totalShows !== o.totalShows ||
          n.cooldownStartedAt !== o.cooldownStartedAt
        ) {
          f(s);
        }
        return s;
      };
      const S = (e, t) => {
        const s = x(t(v(e)), e);
        f(s);
        return s;
      };
      const g = (e = d) =>
        S(e, (t) => ({
          ...t,
          updatesSinceLastShow: Math.min(
            t.updatesSinceLastShow + 1,
            e.nextThreshold,
          ),
        }));
      const j = (e = ((e = d) => v(e))(), t = d) =>
        !(e.totalShows >= t.maxShows) &&
        !y(e, t) &&
        e.updatesSinceLastShow >=
          ((e, t) => (e.totalShows === 0 ? t.firstThreshold : t.nextThreshold))(
            e,
            t,
          );
      const _ = (e = d) => {
        S(e, (t) => ({
          ...t,
          updatesSinceLastShow: 0,
          totalShows: Math.min(t.totalShows + 1, e.maxShows),
        }));
      };
      const C = (e = d) => {
        const t = Date.now();
        S(e, (e) => ({
          ...e,
          cooldownStartedAt: t,
          updatesSinceLastShow: 0,
        }));
      };
    },
    101199: function (e, t, s) {
      s.d(t, {
        T9: () => l,
        gE: () => i,
        qo: () => u,
      });
      var n = s(439624);
      var o = s(183618);
      var r = s(22728);
      var a = s(772529);
      const l = async (e, t, s = []) => {
        try {
          const n = await (0, o.D$)(e);
          if (!d(s, n)) {
            return false;
          }
          const a = (0, r.Zn)(t);
          const l = (0, r.P0)(a);
          return !!(0, r.cs)(l, a);
        } catch (e) {
          return false;
        }
      };
      const i = (e) => {
        const t = (0, r.Zn)(e);
        (0, r.Lm)(t);
      };
      const u = async (e, t, s) => {
        if (!s) {
          return [false, ""];
        }
        let l = "";
        try {
          const [i, u] = await Promise.all([n.r.get_all(), (0, o.D$)(e)]);
          const c = (0, a.jW)(s, i);
          if (
            !c.some((e) => {
              const t = d(
                (e == null ? undefined : e.professionalRole) || [],
                u,
              );
              var s;
              if (t) {
                l =
                  (e == null || (s = e._attributes) === null || s === undefined
                    ? undefined
                    : s.hash) || "";
              }
              return t;
            })
          ) {
            return [false, ""];
          }
          const p = (0, r.Zn)(t);
          const h = (0, r.P0)(p);
          if ((0, r.cs)(h, p)) {
            return [true, l];
          } else {
            return [false, ""];
          }
        } catch (e) {
          return [false, ""];
        }
      };
      function d(e, t) {
        return e
          .map(({ string: e }) => `${e}`)
          .some((e) => t.rolesForSetka.includes(e));
      }
    },
    772529: function (e, t, s) {
      s.d(t, {
        Zd: () => r,
        bY: () => o,
        jW: () => n,
      });
      const n = (e, t) =>
        e
          ? t.filter((t) => {
              var s;
              return e.includes(
                (t == null || (s = t._attributes) === null || s === undefined
                  ? undefined
                  : s.hash) || "",
              );
            })
          : [];
      const o = (e) =>
        `https://setka.onelink.me/tQlI?af_web_dp=https%3A%2F%2Fsetka.ru%2F&af_xp=app&pid=resume_popup&c=prodhh_resume_popup_-hh_site_desktop&deep_link_value=https%3A%2F%2Fsetka.ru%2Fcreate_post%3Ftype%3Dresume%26resume_hash%3D${e}&af_dp=https%3A%2F%2Fwww.rustore.ru%2Fcatalog%2Fapp%2Fru.setka&utm_source=hh_site_desktop&utm_medium=resume_popup&utm_campaign=prodhh_resume_popup`;
      const r = (e) =>
        `https://setka.onelink.me/tQlI?af_web_dp=https%3A%2F%2Fsetka.ru%2F&af_xp=app&pid=resume_popup&c=prodhh_resume_popup_-hh_site_mobile&deep_link_value=https%3A%2F%2Fsetka.ru%2Fcreate_post%3Ftype%3Dresume%26resume_hash%3D${e}&af_dp=https%3A%2F%2Fwww.rustore.ru%2Fcatalog%2Fapp%2Fru.setka&utm_source=hh_site_mobile&utm_medium=resume_popup&utm_campaign=prodhh_resume_popup`;
    },
    330080: function (e, t, s) {
      s.d(t, {
        AE: () => o,
        Ci: () => a,
        D6: () => n,
        _T: () => r,
        k1: () => u,
        l0: () => l,
        nc: () => i,
        wp: () => d,
      });
      const n = "not_finished";
      const o = "new";
      const r = "modified";
      const a = "approved";
      const l = "blocked";
      const i = "corrected";
      const u = "auto_approved";
      let d = (function (e) {
        e.ExpertIsWorking = "EXPERT_IS_WORKING";
        e.MadeByExpert = "MADE_BY_EXPERT";
        return e;
      })({});
    },
  },
]); //# sourceMappingURL=9795.31b5b06a4e19cd19.js.map
//# debugId=a0c0bc46-b9c7-453c-9bd6-db17fbf9eb28
